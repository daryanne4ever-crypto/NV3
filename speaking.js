// ==========================================
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

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}

// ==========================================
// 3. CARREGAMENTO E REPRODUÇÃO
// ==========================================
function loadSpeakingLevel(level) {
  currentSLevel = level;
  currentSPhraseIndex = 0;

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
    document.getElementById("recording-status").innerText = "Ouvindo... Fale agora.";
    document.getElementById("feedback-area").style.display = "none";
  } else {
    recognition.stop();
    resetRecordingUI();
  }
}

function resetRecordingUI() {
  isRecording = false;
  document.getElementById("btn-record-toggle").innerText = "🎙️ Gravar";
  document.getElementById("btn-record-toggle").classList.remove("recording");
  document.getElementById("recording-status").innerText = "Clique para falar";
}

if (recognition) {
  recognition.onresult = function handleSpeechResult(event) {
    const userSpeech = event.results[0][0].transcript;
    analyzeSpeech(userSpeech);
  };

  recognition.onerror = function handleSpeechError() {
    resetRecordingUI();
    document.getElementById("recording-status").innerText = "Não consegui ouvir claramente. Tente novamente.";
  };

  recognition.onend = function handleSpeechEnd() {
    resetRecordingUI();
  };
}

// ==========================================
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

function nextSpeakingPhrase() {
  if (currentSPhraseIndex < speakingData[currentSLevel].length - 1) {
    currentSPhraseIndex++;
    loadCurrentPhrase();
  } else {
    document.getElementById("recording-status").innerText = "Você concluiu as frases deste nível! Escolha outro nível ou revise esta frase.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCurrentPhrase();
});
