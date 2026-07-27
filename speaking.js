// Speaking Mastery — Echo, Shadowing and Roleplay practice.
const speakingData = {
  A1: [
    { mode: 'echo', en: 'I live in a big house.', pt: 'Eu moro em uma casa grande.', tip: "O 'h' de house tem som aspirado." },
    { mode: 'echo', en: 'She studies at school every day.', pt: 'Ela estuda na escola todos os dias.', tip: "Cuidado com o /z/ final de studies." },
    { mode: 'echo', en: 'They have a new book.', pt: 'Eles têm um livro novo.', tip: "Em they, use o som /ð/ com a língua entre os dentes." }
  ],
  A2: [
    { mode: 'echo', en: 'We arrived at the restaurant yesterday.', pt: 'Nós chegamos ao restaurante ontem.', tip: "O -ed em arrived soa como /d/." },
    { mode: 'echo', en: 'Tomorrow we will travel together.', pt: 'Amanhã nós viajaremos juntos.', tip: "Conecte travel together com ritmo natural." },
    { mode: 'echo', en: 'If the weather is good, we will travel.', pt: 'Se o tempo estiver bom, nós viajaremos.', tip: "Tente conectar if the sem pausa brusca." }
  ],
  B1: [
    { mode: 'shadowing', speaker: 'Linda (Receptionist)', en: 'Good afternoon! Welcome to our hotel. Do you have a reservation?', pt: 'Boa tarde! Bem-vindo ao nosso hotel. Você tem uma reserva?', targetTime: 4.5, tip: 'Imite o ritmo acolhedor e evite pausas excessivas.' },
    { mode: 'shadowing', speaker: 'Linda (Receptionist)', en: 'Could you spell your last name for me, please?', pt: 'Você poderia soletrar seu sobrenome para mim, por favor?', targetTime: 3.8, tip: 'Mantenha a entonação suave e ascendente no final.' },
    { mode: 'shadowing', speaker: 'Guest', en: 'I booked a room online two weeks ago.', pt: 'Eu reservei um quarto online há duas semanas.', targetTime: 3.4, tip: "O -ed em booked tem som de /t/." }
  ],
  B2: [
    { mode: 'shadowing', speaker: 'Linda (Receptionist)', en: "I'm sorry for the inconvenience. Let me check the booking system again.", pt: 'Desculpe pelo inconveniente. Deixe-me verificar o sistema de reservas novamente.', targetTime: 5.6, tip: "Faça uma pausa breve depois de inconvenience." },
    { mode: 'shadowing', speaker: 'Guest', en: 'The confirmation email was sent to me immediately after payment.', pt: 'O e-mail de confirmação foi enviado para mim imediatamente após o pagamento.', targetTime: 5.2, tip: "Em voz passiva, mantenha was sent curto e claro." },
    { mode: 'shadowing', speaker: 'Linda (Receptionist)', en: 'If the reservation cannot be found, I will contact the manager right away.', pt: 'Se a reserva não puder ser encontrada, entrarei em contato com o gerente imediatamente.', targetTime: 6.2, tip: "Use ritmo profissional e enfatize manager." }
  ],
  C1: [
    { mode: 'roleplay', scenario: 'Você chegou ao hotel, mas a recepcionista Linda não consegue encontrar sua reserva. Explique que você fez a reserva online há duas semanas e peça para ela verificar com o gerente.', keywords: ['online', 'weeks', 'manager', 'reservation', 'check'], tip: 'Mantenha a calma e use vocabulário preciso.' },
    { mode: 'roleplay', scenario: 'Seu quarto no hotel está diferente do que foi prometido na reserva. Explique o problema, mencione a confirmação por e-mail e peça uma solução educada.', keywords: ['room', 'reservation', 'confirmation', 'email', 'solution'], tip: "Use estruturas como According to my confirmation email..." },
    { mode: 'roleplay', scenario: 'Você precisa fazer checkout mais tarde porque seu voo foi atrasado. Peça uma extensão, explique o motivo e pergunte se há alguma taxa adicional.', keywords: ['checkout', 'flight', 'delayed', 'extension', 'fee'], tip: "Use Would it be possible... e explique o motivo antes do pedido." }
  ]
};

let currentSLevel = 'A1';
let currentSPhraseIndex = 0;
let isRecording = false;
let recognition;
let mediaRecorder;
let recordedChunks = [];
let recordedAudioUrl = '';
let recordStartTime = 0;
let timerInterval;

if (!isIOSSafari() && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}


function isIOSSafari() {
  return /iP(ad|hone|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function getSupportedAudioOptions() {
  if (typeof MediaRecorder === 'undefined' || typeof MediaRecorder.isTypeSupported !== 'function') return {};
  const mimeTypes = ['audio/mp4', 'audio/aac', 'audio/webm;codecs=opus', 'audio/webm'];
  const supportedType = mimeTypes.find((type) => MediaRecorder.isTypeSupported(type));
  return supportedType ? { mimeType: supportedType } : {};
}

function showRecordedAudio(duration) {
  const status = document.getElementById('recording-status');
  const iosMessage = isIOSSafari()
    ? 'Reconhecimento de voz indisponível no Safari do iPhone. Sua gravação foi salva para você ouvir e comparar.'
    : 'Reconhecimento de voz indisponível. Sua gravação foi salva para você ouvir e comparar.';
  status.innerHTML = `${iosMessage}<br>⏱️ Tempo: ${duration}s<br><audio controls src="${recordedAudioUrl}" class="recorded-audio-player"></audio>`;

  document.getElementById('s-user-speech').innerHTML = 'Áudio gravado disponível no reprodutor acima.';
  document.getElementById('s-pedagogical-tip').innerHTML = 'Ouça sua gravação, compare com o áudio modelo e tente novamente para melhorar ritmo, clareza e entonação.';
  document.getElementById('feedback-area').style.display = 'block';
}

async function startAudioFallbackRecording() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    document.getElementById('recording-status').innerHTML = 'Gravação de áudio não suportada neste navegador. Tempo: <span id="s-timer">0.0s</span>';
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordedChunks = [];
    const options = getSupportedAudioOptions();
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
      const duration = stopTimer();
      const mimeType = mediaRecorder.mimeType || options.mimeType || (isIOSSafari() ? 'audio/mp4' : 'audio/webm');
      const blob = new Blob(recordedChunks, { type: mimeType });
      if (recordedAudioUrl) URL.revokeObjectURL(recordedAudioUrl);
      recordedAudioUrl = URL.createObjectURL(blob);
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      showRecordedAudio(duration);
      resetRecordingUI(false);
    };

    mediaRecorder.start();
    isRecording = true;
    document.getElementById('btn-record-toggle').innerText = '⏹️ Parar';
    document.getElementById('btn-record-toggle').classList.add('recording');
    document.getElementById('recording-status').innerHTML = 'Gravando áudio... Tempo: <span id="s-timer">0.0s</span>';
    document.getElementById('feedback-area').style.display = 'none';
    startTimer();
  } catch (err) {
    document.getElementById('recording-status').innerHTML = 'Acesso ao microfone negado ou não suportado no iOS Safari. Verifique as permissões do navegador. Tempo: <span id="s-timer">0.0s</span>';
  }
}

function getCurrentSpeakingItem() {
  return speakingData[currentSLevel][currentSPhraseIndex];
}

function setElementDisplay(id, displayValue) {
  const element = document.getElementById(id);
  if (element) element.style.display = displayValue;
}

function loadSpeakingLevel(level) {
  currentSLevel = level;
  currentSPhraseIndex = 0;
  document.querySelectorAll('.speak-controls button').forEach((button) => {
    button.classList.toggle('active-btn', button.dataset.level === level);
  });
  loadCurrentActivity();
}

function loadCurrentActivity() {
  const data = getCurrentSpeakingItem();
  document.getElementById('s-progress').innerText = `Atividade ${currentSPhraseIndex + 1}/${speakingData[currentSLevel].length}`;
  document.getElementById('feedback-area').style.display = 'none';

  setElementDisplay('s-roleplay-scenario', 'none');
  setElementDisplay('s-dialogue-context', 'none');
  setElementDisplay('s-english-text', 'block');
  setElementDisplay('s-portuguese-text', 'block');
  setElementDisplay('s-audio-controls', 'flex');

  if (data.mode === 'roleplay') {
    document.getElementById('s-mode-badge').innerText = 'Situational Roleplay';
    document.getElementById('s-mode-badge').style.background = '#00b4d8';
    document.getElementById('s-scenario-text').innerText = data.scenario;
    setElementDisplay('s-roleplay-scenario', 'block');
    setElementDisplay('s-english-text', 'none');
    setElementDisplay('s-portuguese-text', 'none');
    setElementDisplay('s-audio-controls', 'none');
  } else {
    document.getElementById('s-mode-badge').innerText = data.mode === 'shadowing' ? 'Dialogue Shadowing' : 'Echo Challenge';
    document.getElementById('s-mode-badge').style.background = data.mode === 'shadowing' ? '#8338ec' : '#ff006e';
    document.getElementById('s-english-text').innerText = data.mode === 'shadowing' ? `"${data.en}"` : data.en;
    document.getElementById('s-portuguese-text').innerText = data.pt;
    if (data.mode === 'shadowing') {
      setElementDisplay('s-dialogue-context', 'block');
      document.getElementById('s-speaker-name').innerText = data.speaker;
    }
  }

  resetRecordingUI();
}

function playBaseAudio(speedRate) {
  const data = getCurrentSpeakingItem();
  if (data.mode === 'roleplay' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(data.en);
  msg.lang = 'en-US';
  msg.rate = speedRate;
  const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang === 'en-US' && voice.name.includes('Google'));
  if (englishVoice) msg.voice = englishVoice;
  window.speechSynthesis.speak(msg);
}

function startTimer() {
  clearInterval(timerInterval);
  recordStartTime = Date.now();
  document.getElementById('s-timer').innerText = '0.0s';
  timerInterval = setInterval(() => {
    document.getElementById('s-timer').innerText = `${((Date.now() - recordStartTime) / 1000).toFixed(1)}s`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
  return ((Date.now() - recordStartTime) / 1000).toFixed(1);
}

function resetRecordingUI(resetStatus = true) {
  clearInterval(timerInterval);
  isRecording = false;
  document.getElementById('btn-record-toggle').innerText = '🎙️ Gravar';
  document.getElementById('btn-record-toggle').classList.remove('recording');
  if (resetStatus) document.getElementById('recording-status').innerHTML = 'Tempo: <span id="s-timer">0.0s</span>';
}

function toggleRecording() {
  if (!recognition) {
    if (isRecording && mediaRecorder) {
      mediaRecorder.stop();
      return;
    }
    startAudioFallbackRecording();
    return;
  }

  if (!isRecording) {
    recognition.start();
    isRecording = true;
    document.getElementById('btn-record-toggle').innerText = '⏹️ Parar';
    document.getElementById('btn-record-toggle').classList.add('recording');
    document.getElementById('recording-status').innerHTML = 'Ouvindo... Tempo: <span id="s-timer">0.0s</span>';
    document.getElementById('feedback-area').style.display = 'none';
    startTimer();
  } else {
    recognition.stop();
  }
}

function analyzeSpeech(userSpeech, duration) {
  const data = getCurrentSpeakingItem();
  let resultHTML = '';
  let tipHTML = `<strong>O que entendemos:</strong> "${userSpeech}"<br>⏱️ <em>Tempo de fala: ${duration}s</em><br><br>`;

  if (data.mode === 'roleplay') {
    const cleanUser = userSpeech.toLowerCase();
    let styledSpeech = userSpeech;
    let keywordsFound = 0;
    data.keywords.forEach((keyword) => {
      if (cleanUser.includes(keyword.toLowerCase())) {
        keywordsFound++;
        styledSpeech = styledSpeech.replace(new RegExp(keyword, 'ig'), '<span class="keyword-match">$&</span>');
      }
    });
    resultHTML = styledSpeech;
    tipHTML += keywordsFound >= 2 ? '🎯 <strong>Excelente improviso!</strong><br>' : '🤔 <strong>Inclua mais palavras-chave.</strong><br>';
    tipHTML += `<em>Palavras-chave esperadas: ${data.keywords.join(', ')}</em><br><br>${data.tip}`;
  } else {
    const cleanTarget = data.en.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
    const cleanUser = userSpeech.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
    let correctCount = 0;
    cleanTarget.forEach((word) => {
      if (cleanUser.includes(word)) {
        resultHTML += `<span class="word-correct">${word} </span>`;
        correctCount++;
      } else {
        resultHTML += `<span class="word-wrong">${word} </span>`;
      }
    });
    const accuracy = (correctCount / cleanTarget.length) * 100;
    tipHTML += accuracy >= 80 ? '🎉 <strong>Pronúncia clara!</strong><br>' : '⚠️ <strong>Atenção nas palavras em vermelho.</strong><br>';
    if (data.mode === 'shadowing' && data.targetTime) {
      const timeDiff = Math.abs(Number(duration) - data.targetTime);
      tipHTML += timeDiff <= 1.5 ? '✅ Ritmo próximo ao natural.<br>' : `⏳ Tente falar em cerca de ${data.targetTime}s.<br>`;
    }
    tipHTML += `<br>${data.tip}`;
  }

  document.getElementById('s-user-speech').innerHTML = resultHTML;
  document.getElementById('s-pedagogical-tip').innerHTML = tipHTML;
  document.getElementById('feedback-area').style.display = 'block';
}

if (recognition) {
  recognition.onresult = (event) => analyzeSpeech(event.results[0][0].transcript, stopTimer());
  recognition.onerror = () => {
    resetRecordingUI();
    document.getElementById('recording-status').innerHTML = 'Não consegui ouvir claramente. Tente novamente. Tempo: <span id="s-timer">0.0s</span>';
  };
  recognition.onend = resetRecordingUI;
}

function nextSpeakingPhrase() {
  if (currentSPhraseIndex < speakingData[currentSLevel].length - 1) {
    currentSPhraseIndex++;
    loadCurrentActivity();
  } else {
    window.NV3Storage?.saveActivityResult({ id: `speaking_${currentSLevel}`, name: `Speaking ${currentSLevel}`, percentage: 100, url: `speaking.html#${currentSLevel}` });
    document.getElementById('recording-status').innerHTML = 'Você concluiu a trilha deste nível! Tempo: <span id="s-timer">0.0s</span>';
  }
}

document.addEventListener('DOMContentLoaded', () => loadSpeakingLevel('A1'));
