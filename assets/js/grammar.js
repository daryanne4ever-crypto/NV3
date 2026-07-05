// Grammar Hub renderer: five CEFR phases, lazy lesson accordion and Web Speech practice.
function getGrammarData() {
  return typeof grammarData !== 'undefined' ? grammarData : { phases: [], lessons: {} };
}

function getGrammarTeachingModules() {
  return typeof grammarTeachingModules !== 'undefined' ? grammarTeachingModules : {};
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function speakGrammarText(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

const alphabetData = [
  { letter: 'A', ipa: '/eɪ/' }, { letter: 'B', ipa: '/biː/' }, { letter: 'C', ipa: '/siː/' },
  { letter: 'D', ipa: '/diː/' }, { letter: 'E', ipa: '/iː/' }, { letter: 'F', ipa: '/ɛf/' },
  { letter: 'G', ipa: '/dʒiː/' }, { letter: 'H', ipa: '/eɪtʃ/' }, { letter: 'I', ipa: '/aɪ/' },
  { letter: 'J', ipa: '/dʒeɪ/' }, { letter: 'K', ipa: '/keɪ/' }, { letter: 'L', ipa: '/ɛl/' },
  { letter: 'M', ipa: '/ɛm/' }, { letter: 'N', ipa: '/ɛn/' }, { letter: 'O', ipa: '/oʊ/' },
  { letter: 'P', ipa: '/piː/' }, { letter: 'Q', ipa: '/kjuː/' }, { letter: 'R', ipa: '/ɑːr/' },
  { letter: 'S', ipa: '/ɛs/' }, { letter: 'T', ipa: '/tiː/' }, { letter: 'U', ipa: '/juː/' },
  { letter: 'V', ipa: '/viː/' }, { letter: 'W', ipa: '/ˈdʌbəl.juː/' }, { letter: 'X', ipa: '/ɛks/' },
  { letter: 'Y', ipa: '/waɪ/' }, { letter: 'Z', ipa: '/ziː/' }
];

const ipaData = [
  { symbol: '/æ/', letters: 'a', sound: "Som aberto, entre 'a' e 'e'", example: 'cat' },
  { symbol: '/ɪ/', letters: 'i', sound: "Som curto, entre 'i' e 'e'", example: 'sit' },
  { symbol: '/iː/', letters: 'ee, ea', sound: "'i' longo e sorridente", example: 'see' },
  { symbol: '/ʊ/', letters: 'u, oo', sound: "'u' curto e relaxado", example: 'book' },
  { symbol: '/uː/', letters: 'oo, ue', sound: "'u' longo com bico", example: 'blue' },
  { symbol: '/ə/', letters: 'qualquer vogal', sound: 'Schwa - som fraco e neutro', example: 'about' },
  { symbol: '/θ/', letters: 'th', sound: 'Língua entre os dentes (sem voz)', example: 'think' },
  { symbol: '/ð/', letters: 'th', sound: 'Língua entre os dentes (com voz)', example: 'this' },
  { symbol: '/ʃ/', letters: 'sh, ti', sound: "Som de 'X' (shhhh)", example: 'shoe' },
  { symbol: '/tʃ/', letters: 'ch, tch', sound: "Som de 'TCH' (tchau)", example: 'chair' },
  { symbol: '/dʒ/', letters: 'j, ge', sound: "Som de 'DJ' (jato)", example: 'jump' },
  { symbol: '/ŋ/', letters: 'ng', sound: 'Som nasal na garganta', example: 'sing' }
];

let currentCorrectLetter = '';
let currentIpaExample = '';

function loadGrammarHub() {
  const mainContainer = document.getElementById('main-content-area');
  if (!mainContainer) return;

  const data = getGrammarData();
  mainContainer.innerHTML = `
    <header class="hero grammar-header">
      <div>
        <span class="eyebrow">Grammar Hub</span>
        <h1>English Grammar Building Blocks</h1>
        <p>Selecione um módulo abaixo para explorar a estrutura, pronúncia e exercícios sem poluir o menu lateral.</p>
      </div>
    </header>
    <section id="grammar-phases-container" class="grammar-phases" aria-label="Grammar phases"></section>
  `;

  const phasesContainer = document.getElementById('grammar-phases-container');
  data.phases.forEach((phase, index) => {
    const phaseDiv = document.createElement('section');
    phaseDiv.className = 'phase-container card';
    phaseDiv.innerHTML = `
      <h2 class="phase-title">${phase.title}</h2>
      <div id="${index === 0 ? 'fase-1-container' : `fase-${index + 1}-container`}" class="grammar-grid">
        ${phase.topics.map((topic) => `
          <button class="grammar-topic-btn" type="button" data-open-lesson="${topic.id}">
            ${topic.name}
          </button>
        `).join('')}
      </div>
    `;
    phasesContainer.appendChild(phaseDiv);
  });
}

function openLessonModule(topicId) {
  const data = getGrammarData();
  const topic = data.lessons[topicId];
  if (!topic) {
    alert('Módulo em desenvolvimento pela Teacher Anny!');
    return;
  }

  const mainContainer = document.getElementById('main-content-area');
  if (!mainContainer) return;

  mainContainer.innerHTML = `
    <button type="button" class="btn btn-secondary btn-back" data-load-grammar-hub>← Voltar para o Grammar Hub</button>
    <section class="card grammar-lesson-shell">
      <span class="eyebrow">Grammar lesson</span>
      <h1>${topic.title}</h1>
      <div class="mastery-banner">
        <strong>Mastery Progress</strong>
        <span>0–100% reservado para a próxima camada de progresso.</span>
      </div>
      <div id="accordion-container">
        ${topic.customContent || topic.sections.map((sec, index) => `
          <article class="lesson-section-accordion ${index === 0 ? 'active' : ''}">
            <button type="button" class="accordion-header" data-toggle-accordion>
              <span>${sec.num}. ${sec.title}</span>
              <span aria-hidden="true">▼</span>
            </button>
            <div class="accordion-content">
              ${sec.content}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  if (topicId === 'alphabet') renderAlphabet();
  if (topicId === 'pronunciation_basic') renderIpaModule();
}

function shuffleItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderAlphabet() {
  const grid = document.getElementById('alphabet-grid');
  if (!grid) return;

  grid.innerHTML = alphabetData.map((item) => `
    <article class="letter-card">
      <button class="letter-btn letter-btn-main" type="button" onclick="speakLetter('${item.letter}')" aria-label="Ouvir letra ${item.letter}">
        <strong>${item.letter}</strong>
      </button>
      <button class="letter-btn letter-btn-phonetic" type="button" onclick="playPhonetic('${item.ipa}')" aria-label="Ouvir pronúncia ${item.ipa} da letra ${item.letter}">
        <span>🔊 Pronúncia</span>
        <small>${item.ipa}</small>
      </button>
    </article>
  `).join('');
}

function speakLetter(letter) {
  speakGrammarText(letter);
}

function playPhonetic(ipa) {
  const item = alphabetData.find((entry) => entry.ipa === ipa);
  if (item) speakLetter(item.letter);
}

function playRandomLetter() {
  const randomObj = alphabetData[Math.floor(Math.random() * alphabetData.length)];
  currentCorrectLetter = randomObj.letter;
  speakLetter(currentCorrectLetter);
  generateQuizOptions(currentCorrectLetter);
}

function generateQuizOptions(correct) {
  const optionsContainer = document.getElementById('quiz-options');
  const feedback = document.getElementById('quiz-feedback');
  if (!optionsContainer) return;

  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
  }

  const wrongOptions = shuffleItems(alphabetData.filter((item) => item.letter !== correct)).slice(0, 2);
  const options = shuffleItems([{ letter: correct, isCorrect: true }, ...wrongOptions.map((item) => ({ letter: item.letter, isCorrect: false }))]);

  optionsContainer.innerHTML = options.map((option) => `
    <button class="quiz-option-btn" type="button" onclick="checkAlphabetQuiz('${option.letter}', ${option.isCorrect})">${option.letter}</button>
  `).join('');
}

function checkAlphabetQuiz(letter, isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  document.querySelectorAll('#quiz-options .quiz-option-btn').forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentCorrectLetter) button.classList.add('correct');
    if (button.textContent === letter && !isCorrect) button.classList.add('incorrect');
  });

  if (!feedback) return;
  feedback.textContent = isCorrect ? '✅ Correct! Great job!' : `❌ Incorrect! The answer was ${currentCorrectLetter}.`;
  feedback.className = `quiz-feedback ${isCorrect ? 'success' : 'error'}`;
}

function renderIpaModule() {
  const tableBody = document.getElementById('ipa-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = ipaData.map((item) => `
    <tr>
      <td class="ipa-symbol">${item.symbol}</td>
      <td>${item.letters}</td>
      <td>${item.sound}</td>
      <td><button class="clickable-word" type="button" onclick="speakGrammarText('${item.example}')">${item.example}</button></td>
    </tr>
  `).join('');
  generateIpaQuiz();
}

function generateIpaQuiz() {
  const randomObj = ipaData[Math.floor(Math.random() * ipaData.length)];
  currentIpaExample = randomObj.example;
  const symbol = document.getElementById('ipa-quiz-symbol');
  const feedback = document.getElementById('ipa-quiz-feedback');
  const optionsContainer = document.getElementById('ipa-quiz-options');
  if (symbol) symbol.textContent = randomObj.symbol;
  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
  }
  if (!optionsContainer) return;

  const wrongOptions = shuffleItems(ipaData.filter((item) => item.example !== randomObj.example)).slice(0, 2);
  const options = shuffleItems([{ example: randomObj.example, isCorrect: true }, ...wrongOptions.map((item) => ({ example: item.example, isCorrect: false }))]);
  optionsContainer.innerHTML = options.map((option) => `
    <button class="quiz-option-btn ipa-quiz-option" type="button" onclick="checkIpaQuiz('${option.example}', ${option.isCorrect})">${option.example}</button>
  `).join('');
}

function checkIpaQuiz(example, isCorrect) {
  const feedback = document.getElementById('ipa-quiz-feedback');
  document.querySelectorAll('#ipa-quiz-options .quiz-option-btn').forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentIpaExample) button.classList.add('correct');
    if (button.textContent === example && !isCorrect) button.classList.add('incorrect');
  });

  if (!feedback) return;
  feedback.textContent = isCorrect ? '✅ Correct! Well done!' : `❌ Incorrect! The answer was ${currentIpaExample}.`;
  feedback.className = `quiz-feedback ${isCorrect ? 'success' : 'error'}`;
}

function toggleAccordion(headerElement) {
  headerElement.closest('.lesson-section-accordion')?.classList.toggle('active');
}

function initializeGrammarHub() {
  loadGrammarHub();

  document.addEventListener('click', (event) => {
    const lessonButton = event.target.closest('[data-open-lesson]');
    if (lessonButton) {
      openLessonModule(lessonButton.dataset.openLesson);
      return;
    }

    if (event.target.closest('[data-load-grammar-hub]')) {
      loadGrammarHub();
      return;
    }

    const grammarQuizOption = event.target.closest('.grammar-quiz-option');
    if (grammarQuizOption) {
      checkGrammarModuleAnswer(grammarQuizOption);
      return;
    }

    const accordionHeader = event.target.closest('[data-toggle-accordion]');
    if (accordionHeader) toggleAccordion(accordionHeader);
  });
}

window.loadGrammarHub = loadGrammarHub;
window.openLessonModule = openLessonModule;
window.toggleAccordion = toggleAccordion;
window.speakGrammarText = speakGrammarText;
window.speakLetter = speakLetter;
window.playPhonetic = playPhonetic;
window.playRandomLetter = playRandomLetter;
window.generateQuizOptions = generateQuizOptions;
window.checkAlphabetQuiz = checkAlphabetQuiz;
window.generateIpaQuiz = generateIpaQuiz;
window.checkIpaQuiz = checkIpaQuiz;

document.addEventListener('DOMContentLoaded', initializeGrammarHub);
