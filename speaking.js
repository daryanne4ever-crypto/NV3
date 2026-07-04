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
// 1. DADOS DE SPEAKING (Foco Estrutural e Fonético)
// ==========================================
const speakingData = {
  A1: [
    { en: "I live in a big house.", pt: "Eu moro em uma casa grande.", tip: "Dica: O 'h' de 'house' tem som aspirado (como 'rato' em português), não o deixe mudo." },
    { en: "She studies at school every day.", pt: "Ela estuda na escola todos os dias.", tip: "Dica: Cuidado com o verbo 'studies'. No he/she/it adicionamos o som de /z/ no final." },
    { en: "They have a new book.", pt: "Eles têm um livro novo.", tip: "Dica: Em 'They', a língua deve tocar levemente os dentes superiores (/ð/)." },
    { en: "We drink water every morning.", pt: "Nós bebemos água todas as manhãs.", tip: "Dica: Em 'drink', o 'r' é enrolado. Não pronuncie 'djrink'." },
    { en: "He likes good food.", pt: "Ele gosta de comida boa.", tip: "Dica: O som do 'd' em 'food' é sutil, não adicione um 'i' no final (fu-dji)." },
    { en: "The teacher has a small car.", pt: "O professor tem um carro pequeno.", tip: "Dica: 'Small' começa direto com o som de 's'. Evite dizer 'i-small'." },
    { en: "My friend is always happy.", pt: "Meu amigo está sempre feliz.", tip: "Dica: O 'h' de 'happy' também é aspirado. E cuidado para não cortar o 'y' no final." },
    { en: "I eat at home with my family.", pt: "Eu como em casa com a minha família.", tip: "Dica: Junte as palavras 'eat at' falando quase como uma só: /i-tæt/." },
    { en: "She comes from Brazil.", pt: "Ela vem do Brasil.", tip: "Dica: O 'l' de 'Brazil' é feito tocando a língua no céu da boca, diferente do som de 'u' no português." },
    { en: "The water is cold.", pt: "A água está fria.", tip: "Dica: Em inglês americano, o 't' de 'water' tem um som de 'r' brando, parecido com 'cara' em português." }
  ],
  A2: [
    { en: "We arrived at the restaurant yesterday.", pt: "Nós chegamos ao restaurante ontem.", tip: "Dica: O sufixo '-ed' em 'arrived' soa apenas como um /d/. Não diga 'arri-ved'." },
    { en: "She chose a different book.", pt: "Ela escolheu um livro diferente.", tip: "Dica: 'Chose' tem o som inicial de /tʃ/ (como 'tchau') e termina com som de /z/." },
    { en: "I forgot my question.", pt: "Eu esqueci minha pergunta.", tip: "Dica: A palavra 'question' termina com som de /tʃən/ (tchan), e não com 'tion' forte." },
    { en: "He wore a new jacket.", pt: "Ele usou uma jaqueta nova.", tip: "Dica: A palavra 'wore' soa exatamente como 'war' (guerra). O 'e' final é mudo." },
    { en: "Tomorrow we will travel together.", pt: "Amanhã nós viajaremos juntos.", tip: "Dica: O 'th' em 'together' é vozeado /ð/. A língua vibra entre os dentes." },
    { en: "She will leave early because she is busy.", pt: "Ela sairá cedo porque está ocupada.", tip: "Dica: Alongue o som de 'i' em 'leave' /liːv/ para não soar como 'live' (morar)." },
    { en: "Everyone liked the restaurant.", pt: "Todo mundo gostou do restaurante.", tip: "Dica: O '-ed' em 'liked' tem som de /t/. Diga 'laik-t'." },
    { en: "Nothing was difficult.", pt: "Nada foi difícil.", tip: "Dica: Em 'Nothing', coloque a língua entre os dentes e sopre ar, sem vibrar a garganta /θ/." },
    { en: "The weather was beautiful yesterday.", pt: "O tempo estava bonito ontem.", tip: "Dica: Em inglês americano, 'beautiful' soa como 'biu-ri-ful' com o 't' brando." },
    { en: "If the weather is good, we will travel.", pt: "Se o tempo estiver bom, nós viajaremos.", tip: "Dica: Tente conectar 'If the' fluidamente. Não faça pausas bruscas." }
  ],
  B1: [
    { en: "I have improved my English.", pt: "Eu tenho melhorado o meu inglês.", tip: "Dica: O '-ed' em 'improved' tem som de /d/. Conecte o final com o 'my'." },
    { en: "She has achieved her goal.", pt: "Ela tem alcançado o objetivo dela.", tip: "Dica: O 'a' de 'achieved' é um som neutro suave (schwa). Foque na sílaba forte 'CHIEVED'." },
    { en: "We have developed new knowledge.", pt: "Nós temos desenvolvido novos conhecimentos.", tip: "Dica: A palavra 'knowledge' não pronuncia o 'k'. Diga /nól-idj/." },
    { en: "They have prepared for the challenge.", pt: "Eles têm se preparado para o desafio.", tip: "Dica: 'Challenge' começa e termina com o mesmo som /tʃ/ e /dʒ/." },
    { en: "He has avoided many problems.", pt: "Ele tem evitado muitos problemas.", tip: "Dica: Em 'avoided', como termina em 'd', o '-ed' ganha uma sílaba extra /id/." },
    { en: "Technology has improved our lives.", pt: "A tecnologia tem melhorado as nossas vidas.", tip: "Dica: Em 'Technology', a ênfase é na segunda sílaba (tek-NÓ-lo-dji)." },
    { en: "I have become more confident.", pt: "Eu tenho me tornado mais confiante.", tip: "Dica: Pronuncie 'confident' com ênfase na primeira sílaba (KÓN-fi-dent)." },
    { en: "He has made an important decision.", pt: "Ele tem tomado uma decisão importante.", tip: "Dica: Conecte 'made an' como se fosse 'mei-dan'." },
    { en: "Our career has required responsibility.", pt: "A nossa carreira tem exigido responsabilidade.", tip: "Dica: Em 'career', o foco e a sílaba tônica estão no final: /ca-RÍR/." },
    { en: "Have you improved your English?", pt: "Você tem melhorado o seu inglês?", tip: "Dica: No Speaking, a entonação em perguntas de 'Yes/No' sobe no final da frase." }
  ],
  B2: [
    { en: "The research was completed yesterday.", pt: "A pesquisa foi concluída ontem.", tip: "Dica: A palavra 'completed' tem 3 sílabas claras. O '-ed' é pronunciado como /id/." },
    { en: "New technology is used in many schools.", pt: "Nova tecnologia é usada em muitas escolas.", tip: "Dica: Em 'used in', conecte os sons: /iuz-din/." },
    { en: "The project was developed by teachers.", pt: "O projeto foi desenvolvido por professores.", tip: "Dica: 'was' em frases passivas costuma ter um som fraco e rápido /wəz/." },
    { en: "The decision was made by the manager.", pt: "A decisão foi tomada pelo gerente.", tip: "Dica: Em 'manager', o primeiro 'a' é bem aberto, como no português 'é'." },
    { en: "The system was updated yesterday.", pt: "O sistema foi atualizado ontem.", tip: "Dica: Em inglês americano, 'updated' ganha sons de 'r' brando nos 't's: /up-dei-red/." },
    { en: "The student who studied hard passed the exam.", pt: "O aluno que estudou muito passou na prova.", tip: "Dica: O '-ed' de 'passed' tem som de /t/. Conecte com 'the': /pas-t-th.../." },
    { en: "The place where we met is far away.", pt: "O lugar onde nos encontramos é longe.", tip: "Dica: Junte 'far away' para soar natural: /fá-ra-wei/." },
    { en: "Furthermore, the results were positive.", pt: "Além disso, os resultados foram positivos.", tip: "Dica: Faça uma leve pausa após o conector 'Furthermore' para dar ritmo à fala." },
    { en: "Despite the difficulty, we succeeded.", pt: "Apesar da dificuldade, nós tivemos sucesso.", tip: "Dica: Em 'succeeded', o estresse fica na segunda sílaba, e o '-ed' forma sílaba: /suk-SÍ-did/." },
    { en: "Although the task was hard, we finished it.", pt: "Embora a tarefa fosse difícil, nós a terminamos.", tip: "Dica: O som de 'gh' em 'Although' é mudo. O final é um som de 'ou'." }
  ],
  C1: [
    { en: "The proposal has been carefully evaluated by the committee.", pt: "A proposta tem sido cuidadosamente avaliada pelo comitê.", tip: "Dica: 'Committee' tem ênfase na segunda sílaba: /co-MÍ-ti/." },
    { en: "The findings were considered highly relevant.", pt: "As descobertas foram consideradas altamente relevantes.", tip: "Dica: Em 'highly relevant', certifique-se de produzir o 'h' aspirado e o 'r' enrolado." },
    { en: "It is widely acknowledged that education is essential.", pt: "É amplamente reconhecido que a educação é essencial.", tip: "Dica: O 'k' e o 'w' em 'acknowledged' são mudos. Fica algo como /ak-NÓ-lidjd/." },
    { en: "The issue is being addressed by experts.", pt: "A questão está sendo abordada por especialistas.", tip: "Dica: Em 'addressed', a ênfase é na segunda sílaba. O '-ed' tem som de /t/." },
    { en: "The environment in which we operate is constantly changing.", pt: "O ambiente no qual nós operamos está constantemente mudando.", tip: "Dica: 'Environment' costuma perder a pronúncia do 'n' do meio na fala natural: /in-VAI-ro-ment/." },
    { en: "Had the problem been identified earlier, it could have been avoided.", pt: "Se o problema tivesse sido identificado antes, poderia ter sido evitado.", tip: "Dica: O 'could have' no speaking rápido frequentemente vira 'coulda'." },
    { en: "Not only did the project succeed, but it also exceeded expectations.", pt: "Não apenas o projeto teve sucesso, mas também superou expectativas.", tip: "Dica: Em estruturas de inversão ('Not only...'), coloque o tom de voz mais alto no advérbio inicial." },
    { en: "Such was the complexity of the situation that immediate action was required.", pt: "Tamanha era a complexidade da situação que ação imediata foi necessária.", tip: "Dica: Mantenha uma entonação estável e profissional, não suba o tom no final da frase." },
    { en: "No sooner had the meeting started than the problem was raised.", pt: "Mal a reunião começou, o problema foi levantado.", tip: "Dica: Em 'started than', preste atenção na transição do 'd' brando para o 'th' vozeado." },
    { en: "Ultimately, the success of the project depends on collaboration.", pt: "Em última análise, o sucesso do projeto depende da colaboração.", tip: "Dica: Em 'Ultimately', foque a força na primeira sílaba: /ÓL-ti-met-li/." }
  ]
};

// ==========================================
// 2. VARIÁVEIS E CONFIGURAÇÃO DA API DE VOZ
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
// 3. CARREGAMENTO E REPRODUÇÃO
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

  document.querySelectorAll(".speak-controls button").forEach((button) => {
    button.classList.toggle("active-btn", button.dataset.level === level);
  });

  loadCurrentPhrase();
}

function loadCurrentPhrase() {
  const data = speakingData[currentSLevel][currentSPhraseIndex];
  document.getElementById("s-progress").innerText = `Frase ${currentSPhraseIndex + 1}/${speakingData[currentSLevel].length}`;
  document.getElementById("s-english-text").innerText = data.en;
  document.getElementById("s-portuguese-text").innerText = data.pt;
  document.getElementById("feedback-area").style.display = "none";
  resetRecordingUI();
}

function playBaseAudio(speedRate) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const text = speakingData[currentSLevel][currentSPhraseIndex].en;
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-US";
    msg.rate = speedRate;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find((voice) => voice.lang === "en-US" && voice.name.includes("Google"));
    if (englishVoice) msg.voice = englishVoice;

    window.speechSynthesis.speak(msg);
  }
}

// ==========================================
// 4. LÓGICA DO GRAVADOR (TOGGLE) E FEEDBACK
// ==========================================
function toggleRecording() {
  if (!recognition) {
    document.getElementById("recording-status").innerText = "Seu navegador não suporta reconhecimento de voz. Use Chrome ou Edge.";
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
    document.getElementById("recording-status").innerText = "Ouvindo... Fale agora.";
    document.getElementById("feedback-area").style.display = "none";
  } else {
    recognition.stop();
    resetRecordingUI();
  }
}

function resetRecordingUI() {
  clearInterval(timerInterval);
  isRecording = false;
  document.getElementById("btn-record-toggle").innerText = "🎙️ Gravar";
  document.getElementById("btn-record-toggle").classList.remove("recording");
  document.getElementById("recording-status").innerHTML = 'Tempo: <span id="s-timer">0.0s</span>';
  isRecording = false;
  document.getElementById("btn-record-toggle").innerText = "🎙️ Gravar";
  document.getElementById("btn-record-toggle").classList.remove("recording");
  document.getElementById("recording-status").innerText = "Clique para falar";
}

if (recognition) {
  recognition.onresult = function handleSpeechResult(event) {
    const userSpeech = event.results[0][0].transcript;
    const durationInSeconds = stopTimer();
    analyzeAdvancedSpeech(userSpeech, durationInSeconds);
    analyzeSpeech(userSpeech);
  };

  recognition.onerror = function handleSpeechError() {
    resetRecordingUI();
    document.getElementById("recording-status").innerHTML = 'Não consegui ouvir claramente. Tente novamente. Tempo: <span id="s-timer">0.0s</span>';
    document.getElementById("recording-status").innerText = "Não consegui ouvir claramente. Tente novamente.";
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
// 5. INTELIGÊNCIA DE COMPARAÇÃO E CORREÇÃO
// ==========================================
function analyzeSpeech(userSpeech) {
  const targetText = speakingData[currentSLevel][currentSPhraseIndex].en;
  const targetTip = speakingData[currentSLevel][currentSPhraseIndex].tip;

  const cleanTarget = targetText.replace(/[^\w\s]/gi, "").toLowerCase().split(" ");
  const cleanUser = userSpeech.replace(/[^\w\s]/gi, "").toLowerCase().split(" ");

  let resultHTML = "";
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

  let tipHTML = `<strong>O que entendemos:</strong> "${userSpeech}"<br><br>`;
  if (accuracy >= 80) {
    tipHTML += "🎉 <strong>Excelente!</strong> Sua pronúncia está clara e estruturalmente correta. (+10 XP)";
  } else {
    tipHTML += `⚠️ <strong>Atenção:</strong> As palavras em vermelho não foram compreendidas claramente.<br>${targetTip}`;
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
function nextSpeakingPhrase() {
  if (currentSPhraseIndex < speakingData[currentSLevel].length - 1) {
    currentSPhraseIndex++;
    loadCurrentPhrase();
  } else {
    document.getElementById("recording-status").innerText = "Você concluiu as frases deste nível! Escolha outro nível ou revise esta frase.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSpeakingLevel("A1");
  loadCurrentPhrase();
});
