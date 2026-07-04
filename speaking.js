// ==========================================
// 1. BANCO DE DADOS (Com Modos Inteligentes)
// ==========================================
const speakingData = {
  A1: [
    { mode: "echo", en: "I live in a big house.", pt: "Eu moro em uma casa grande.", tip: "O 'h' de 'house' tem som aspirado." },
    { mode: "echo", en: "She studies at school every day.", pt: "Ela estuda na escola todos os dias.", tip: "Cuidado com o /z/ final de 'studies'." },
    { mode: "echo", en: "They have a new book.", pt: "Eles têm um livro novo.", tip: "Em 'They', use o som /ð/ com a língua entre os dentes." }
  ],
  A2: [
    { mode: "echo", en: "We arrived at the restaurant yesterday.", pt: "Nós chegamos ao restaurante ontem.", tip: "O '-ed' em 'arrived' soa como /d/, sem adicionar uma sílaba extra." },
    { mode: "echo", en: "Tomorrow we will travel together.", pt: "Amanhã nós viajaremos juntos.", tip: "Conecte 'travel together' com ritmo natural e atenção ao /ð/ de 'together'." },
    { mode: "echo", en: "If the weather is good, we will travel.", pt: "Se o tempo estiver bom, nós viajaremos.", tip: "Tente conectar 'If the' sem pausa brusca." }
  ],
  B1: [
    {
      mode: "shadowing",
      speaker: "Linda (Receptionist)",
      en: "Good afternoon! Welcome to our hotel. Do you have a reservation?",
      pt: "Boa tarde! Bem-vindo ao nosso hotel. Você tem uma reserva?",
      targetTime: 4.5,
      tip: "Tente imitar o ritmo e a entonação acolhedora. Não pause entre 'Good' e 'afternoon'."
    },
    {
      mode: "shadowing",
      speaker: "Linda (Receptionist)",
      en: "Could you spell your last name for me, please?",
      pt: "Você poderia soletrar seu sobrenome para mim, por favor?",
      targetTime: 3.8,
      tip: "No pedido educado com 'Could you', mantenha a entonação suave e ascendente no final."
    },
    {
      mode: "shadowing",
      speaker: "Guest",
      en: "I booked a room online two weeks ago.",
      pt: "Eu reservei um quarto online há duas semanas.",
      targetTime: 3.4,
      tip: "O '-ed' em 'booked' tem som de /t/. Conecte 'booked a' como /buk-ta/."
    }
  ],
  B2: [
    {
      mode: "shadowing",
      speaker: "Linda (Receptionist)",
      en: "I'm sorry for the inconvenience. Let me check the booking system again.",
      pt: "Desculpe pelo inconveniente. Deixe-me verificar o sistema de reservas novamente.",
      targetTime: 5.6,
      tip: "Faça uma pausa breve depois de 'inconvenience' e reduza 'let me' para soar natural."
    },
    {
      mode: "shadowing",
      speaker: "Guest",
      en: "The confirmation email was sent to me immediately after payment.",
      pt: "O e-mail de confirmação foi enviado para mim imediatamente após o pagamento.",
      targetTime: 5.2,
      tip: "Em voz passiva, mantenha 'was sent' curto e claro, sem transformar 'sent' em duas sílabas."
    },
    {
      mode: "shadowing",
      speaker: "Linda (Receptionist)",
      en: "If the reservation cannot be found, I will contact the manager right away.",
      pt: "Se a reserva não puder ser encontrada, entrarei em contato com o gerente imediatamente.",
      targetTime: 6.2,
      tip: "Use ritmo profissional: pausa após a oração com 'If' e ênfase em 'manager'."
    }
  ],
  C1: [
    {
      mode: "roleplay",
      scenario: "Você chegou ao hotel, mas a recepcionista Linda não consegue encontrar sua reserva. Explique que você fez a reserva online há duas semanas e peça para ela verificar com o gerente.",
      keywords: ["online", "weeks", "manager", "reservation", "check"],
      tip: "Em cenários reais, mantenha a calma e use vocabulário preciso. Palavras-chave esperadas: reservation, online, manager."
    },
    {
      mode: "roleplay",
      scenario: "Seu quarto no hotel está diferente do que foi prometido na reserva. Explique o problema, mencione a confirmação por e-mail e peça uma solução educada.",
      keywords: ["room", "reservation", "confirmation", "email", "solution"],
      tip: "Para reclamações formais, combine clareza com educação: 'According to my confirmation email...' é uma boa abertura."
    },
    {
      mode: "roleplay",
      scenario: "Você precisa fazer checkout mais tarde porque seu voo foi atrasado. Peça uma extensão, explique o motivo e pergunte se há alguma taxa adicional.",
      keywords: ["checkout", "flight", "delayed", "extension", "fee"],
      tip: "Em negociação educada, use estruturas como 'Would it be possible...' e explique o motivo antes do pedido."
    }
  ]
};

// ==========================================
// 2. VARIÁVEIS DE CONTROLE
// ==========================================
let currentSLevel = "A1";
let currentSPhraseIndex = 0;
let isRecording = false;
let recognition;
let recordStartTime = 0;
let timerInterval;

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}

// ==========================================
// 3. RENDERIZAÇÃO INTELIGENTE DA UI
// ==========================================
function loadSpeakingLevel(level) {
  currentSLevel = level;
  currentSPhraseIndex = 0;
  document.querySelectorAll(".speak-controls button").forEach((button) => {
    button.classList.toggle("active-btn", button.dataset.level === level);
  });
  loadCurrentActivity();
}

function setElementDisplay(id, displayValue) {
  document.getElementById(id).style.display = displayValue;
}

function loadCurrentActivity() {
  const data = speakingData[currentSLevel][currentSPhraseIndex];
  document.getElementById("s-progress").innerText = `Atividade ${currentSPhraseIndex + 1}/${speakingData[currentSLevel].length}`;
  document.getElementById("feedback-area").style.display = "none";

  setElementDisplay("s-roleplay-scenario", "none");
  setElementDisplay("s-dialogue-context", "none");
  setElementDisplay("s-english-text", "block");
  setElementDisplay("s-portuguese-text", "block");
  setElementDisplay("s-audio-controls", "flex");

  if (data.mode === "echo") {
    document.getElementById("s-mode-badge").innerText = "Echo Challenge";
    document.getElementById("s-mode-badge").style.background = "#ff006e";
    document.getElementById("s-english-text").innerText = data.en;
    document.getElementById("s-portuguese-text").innerText = data.pt;
  } else if (data.mode === "shadowing") {
    document.getElementById("s-mode-badge").innerText = "Dialogue Shadowing";
    document.getElementById("s-mode-badge").style.background = "#8338ec";
    setElementDisplay("s-dialogue-context", "block");
    document.getElementById("s-speaker-name").innerText = data.speaker;
    document.getElementById("s-english-text").innerText = `"${data.en}"`;
    document.getElementById("s-portuguese-text").innerText = data.pt;
  } else if (data.mode === "roleplay") {
    document.getElementById("s-mode-badge").innerText = "Situational Roleplay";
    document.getElementById("s-mode-badge").style.background = "#00b4d8";
    setElementDisplay("s-roleplay-scenario", "block");
    document.getElementById("s-scenario-text").innerText = data.scenario;
    setElementDisplay("s-english-text", "none");
    setElementDisplay("s-portuguese-text", "none");
    setElementDisplay("s-audio-controls", "none");
  }

  resetRecordingUI();
}

// ==========================================
// 4. MOTOR DE GRAVAÇÃO E TEMPO
// ==========================================
function startTimer() {
  clearInterval(timerInterval);
  recordStartTime = Date.now();
  document.getElementById("s-timer").innerText = "0.0s";
  timerInterval = setInterval(() => {
    const elapsed = ((Date.now() - recordStartTime) / 1000).toFixed(1);
    document.getElementById("s-timer").innerText = `${elapsed}s`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
  return ((Date.now() - recordStartTime) / 1000).toFixed(1);
}

function toggleRecording() {
  if (!recognition) {
    document.getElementById("recording-status").innerHTML = 'Reconhecimento de voz indisponível. Use Chrome ou Edge. Tempo: <span id="s-timer">0.0s</span>';
    return;
  }

  if (!isRecording) {
    recognition.start();
    isRecording = true;
    document.getElementById("btn-record-toggle").innerText = "⏹️ Parar";
    document.getElementById("btn-record-toggle").classList.add("recording");
    document.getElementById("recording-status").innerHTML = 'Ouvindo... Tempo: <span id="s-timer">0.0s</span>';
    startTimer();
    document.getElementById("feedback-area").style.display = "none";
  } else {
    recognition.stop();
  }
}

function resetRecordingUI() {
  clearInterval(timerInterval);
  isRecording = false;
  document.getElementById("btn-record-toggle").innerText = "🎙️ Gravar";
  document.getElementById("btn-record-toggle").classList.remove("recording");
  document.getElementById("recording-status").innerHTML = 'Tempo: <span id="s-timer">0.0s</span>';
}

if (recognition) {
  recognition.onresult = function handleSpeechResult(event) {
    const userSpeech = event.results[0][0].transcript;
    const durationInSeconds = stopTimer();
    analyzeAdvancedSpeech(userSpeech, durationInSeconds);
  };

  recognition.onerror = function handleSpeechError() {
    resetRecordingUI();
    document.getElementById("recording-status").innerHTML = 'Não consegui ouvir claramente. Tente novamente. Tempo: <span id="s-timer">0.0s</span>';
  };

  recognition.onend = function handleSpeechEnd() {
    resetRecordingUI();
  };
}

// ==========================================
// 5. ANÁLISE AVANÇADA (A MÁGICA DA CORREÇÃO)
// ==========================================
function analyzeAdvancedSpeech(userSpeech, duration) {
  const data = speakingData[currentSLevel][currentSPhraseIndex];
  let resultHTML = "";
  let tipHTML = `<strong>O que entendemos:</strong> "${userSpeech}"<br>⏱️ <em>Tempo de fala: ${duration}s</em><br><br>`;

  if (data.mode === "echo" || data.mode === "shadowing") {
    const cleanTarget = data.en.replace(/[^\w\s]/gi, "").toLowerCase().split(" ");
    const cleanUser = userSpeech.replace(/[^\w\s]/gi, "").toLowerCase().split(" ");
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
    document.getElementById("s-user-speech").innerHTML = resultHTML;

    if (accuracy >= 80) tipHTML += "🎉 <strong>Pronúncia clara!</strong><br>";
    else tipHTML += "⚠️ <strong>Atenção na pronúncia:</strong><br>";

    if (data.mode === "shadowing") {
      const timeDiff = Math.abs(Number(duration) - data.targetTime);
      if (timeDiff <= 1.5) tipHTML += "✅ <strong>Fluência excelente!</strong> Você falou em um ritmo próximo ao natural.<br>";
      else tipHTML += `⏳ <strong>Ritmo:</strong> O ideal era falar isso em cerca de ${data.targetTime}s. Você pode ter hesitado muito ou falado rápido demais.<br>`;
    }

    tipHTML += `<br>${data.tip}`;
  } else if (data.mode === "roleplay") {
    let keywordsFound = 0;
    const cleanUser = userSpeech.toLowerCase();
    let styledSpeech = userSpeech;

    data.keywords.forEach((keyword) => {
      if (cleanUser.includes(keyword.toLowerCase())) {
        keywordsFound++;
        const regEx = new RegExp(keyword, "ig");
        styledSpeech = styledSpeech.replace(regEx, '<span class="keyword-match">$&</span>');
      }
    });

    document.getElementById("s-user-speech").innerHTML = styledSpeech;

    if (keywordsFound >= 2) {
      tipHTML += "🎯 <strong>Excelente improviso!</strong> Você usou palavras-chave importantes para resolver a situação do hotel.<br>";
    } else {
      tipHTML += "🤔 <strong>Faltou vocabulário!</strong> Você precisa ser mais específico para resolver esse problema.<br>";
    }

    tipHTML += `<br><em>Palavras-chave esperadas: ${data.keywords.join(", ")}</em><br><br>${data.tip}`;
  }

  document.getElementById("s-pedagogical-tip").innerHTML = tipHTML;
  document.getElementById("feedback-area").style.display = "block";
}

function playBaseAudio(speedRate) {
  const data = speakingData[currentSLevel][currentSPhraseIndex];
  if (data.mode === "roleplay" || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(data.en);
  msg.lang = "en-US";
  msg.rate = speedRate;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find((voice) => voice.lang === "en-US" && voice.name.includes("Google"));
  if (englishVoice) msg.voice = englishVoice;

  window.speechSynthesis.speak(msg);
}

function nextSpeakingPhrase() {
  if (currentSPhraseIndex < speakingData[currentSLevel].length - 1) {
    currentSPhraseIndex++;
    loadCurrentActivity();
  } else {
    document.getElementById("recording-status").innerHTML = 'Você concluiu a trilha deste nível! Tempo: <span id="s-timer">0.0s</span>';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSpeakingLevel("A1");
});
