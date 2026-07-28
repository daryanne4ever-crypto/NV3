// Grammar Hub renderer: five CEFR phases, lazy lesson accordion and Web Speech practice.
function getGrammarData() {
  return typeof grammarData !== 'undefined' ? grammarData : { phases: [], lessons: {} };
}

function getGrammarTeachingModules() {
  return typeof grammarTeachingModules !== 'undefined' ? grammarTeachingModules : {};
}

function getPhaseOneModulesData() {
  return typeof phaseOneModulesData !== 'undefined' ? phaseOneModulesData : {};
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
let moduleRecorder = null;
let moduleRecordingQuestionId = null;
let moduleAudioChunks = [];
let moduleSpeechRecognition = null;

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
  const phaseOneModule = getPhaseOneModulesData()[topicId];
  if (phaseOneModule) {
    openPhaseOneModule(topicId);
    return;
  }

  const data = getGrammarData();
  const teachingModules = getGrammarTeachingModules();
  const topic = teachingModules[topicId] ? { title: teachingModules[topicId].title, moduleId: topicId } : data.lessons[topicId];
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
        ${topic.moduleId ? renderGrammarTeachingModule(topic.moduleId) : (topic.customContent || topic.sections.map((sec, index) => `
          <article class="lesson-section-accordion ${index === 0 ? 'active' : ''}">
            <button type="button" class="accordion-header" data-toggle-accordion>
              <span>${sec.num}. ${sec.title}</span>
              <span aria-hidden="true">▼</span>
            </button>
            <div class="accordion-content">
              ${sec.content}
            </div>
          </article>
        `).join(''))}
      </div>
    </section>
  `;

  if (topicId === 'alphabet') renderAlphabet();
  if (topicId === 'pronunciation_basic') renderIpaModule();
  if (topic.moduleId) initializeGrammarQuiz(topic.moduleId);
}

function formatLabel(value) {
  return String(value)
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderGrammarTeachingModule(moduleId) {
  const moduleData = getGrammarTeachingModules()[moduleId];
  if (!moduleData) return '<p>Módulo em desenvolvimento pela Teacher Anny!</p>';

  return `
    <section id="${escapeHtml(moduleId)}-section" class="grammar-teaching-module" data-grammar-module="${escapeHtml(moduleId)}">
      <div class="module-explanation-card">
        <h2>${escapeHtml(moduleData.title)}</h2>
        <p>${escapeHtml(moduleData.explanation?.intro || '')}</p>
      </div>
      ${renderExplanationLists(moduleData.explanation)}
      ${renderGrammarTables(moduleData)}
      <section class="grammar-module-quiz" aria-labelledby="${escapeHtml(moduleId)}-quiz-title">
        <div class="quiz-heading-row">
          <div>
            <h3 id="${escapeHtml(moduleId)}-quiz-title">🧠 Quiz — ${escapeHtml(moduleData.title)}</h3>
            <p>Escolha uma resposta para cada pergunta. O sistema corrige na hora e atualiza o placar.</p>
          </div>
          <strong id="${escapeHtml(moduleId)}-score" class="quiz-score">Score: 0/${moduleData.quiz.length}</strong>
        </div>
        <div id="${escapeHtml(moduleId)}-quiz" class="grammar-quiz-list"></div>
      </section>
    </section>
  `;
}

function isCorrectModuleAnswer(value, answer) {
  return value.trim().toLowerCase() === String(answer).trim().toLowerCase();
}

function getModuleAnswerKey(game, questionId) {
  return `${game}-${questionId}`;
}

function renderAnswerFeedback(value, answer) {
  if (!value) return '<span class="module-answer-feedback muted">Digite para validar em tempo real.</span>';
  return isCorrectModuleAnswer(value, answer)
    ? '<span class="module-answer-feedback success">✓ Correto</span>'
    : '<span class="module-answer-feedback error">Tente novamente</span>';
}

function openPhaseOneModule(moduleId, activeTab = 'theory') {
  stopModuleRecording();
  const module = getPhaseOneModulesData()[moduleId];
  const mainContainer = document.getElementById('main-content-area');
  if (!module || !mainContainer) return;

  mainContainer.innerHTML = `
    <button type="button" class="btn btn-secondary btn-back" data-load-grammar-hub>← Voltar aos Módulos</button>
    <section class="module-page-shell">
      <header class="module-page-hero">
        <span class="eyebrow">FASE 1 — Módulos Básicos (A1)</span>
        <h1>${escapeHtml(module.title)}</h1>
        <p>Escolha uma aba abaixo para estudar a teoria ou praticar com escrita, escuta e gravação.</p>
      </header>
      <nav class="module-tabs" aria-label="Abas do módulo">
        ${[
          ['theory', '📖 Conteúdo Explicativo'],
          ['game1', '✍️ Game 1 — Escrita'],
          ['game2', '🎧 Game 2 — Escuta (Áudio)'],
          ['game3', '🎙️ Game 3 — Gravação (Speaking)']
        ].map(([tab, label]) => `
          <button type="button" class="module-tab ${activeTab === tab ? 'active' : ''}" data-module-tab="${tab}" data-module-id="${moduleId}">
            ${label}
          </button>
        `).join('')}
      </nav>
      <div id="module-tab-panel">${renderModuleTab(module, activeTab)}</div>
    </section>
  `;
}

function renderExplanationLists(explanation = {}) {
  const sections = [
    { title: 'Quando usar', items: explanation.when_to_use },
    { title: 'Quando não usar', items: explanation.when_not_to_use },
    { title: 'Regras principais', items: explanation.rules },
    { title: 'Regra de ouro', items: explanation.golden_rule ? [explanation.golden_rule] : null },
    { title: 'Posição na frase', items: explanation.position_rules }
  ].filter((section) => Array.isArray(section.items) && section.items.length);

  if (!sections.length) return '';

  return `
    <div class="grammar-rule-grid">
      ${sections.map((section) => `
        <article class="grammar-rule-card">
          <h3>${escapeHtml(section.title)}</h3>
          <ul>
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>
      `).join('')}
    </div>
  `;
}

function renderGrammarTables(moduleData) {
  if (moduleData.tables) {
    return Object.entries(moduleData.tables).map(([tableName, rows]) => renderDataTable(formatLabel(tableName), rows)).join('');
  }

  if (moduleData.table) {
    return renderDataTable(`${moduleData.title} Reference`, moduleData.table);
  }

  if (moduleData.explanation?.rules) {
    const rows = moduleData.explanation.rules.map((rule, index) => ({ rule: `Rule ${index + 1}`, explanation: rule }));
    return renderDataTable(`${moduleData.title} Rules`, rows);
  }

  return '';
}

function renderDataTable(title, rows = []) {
  if (!rows.length) return '';

  const headers = Object.keys(rows[0]);
  return `
    <section class="grammar-table-section">
      <h3>${escapeHtml(title)}</h3>
      <div class="grammar-table-responsive">
        <table class="grammar-data-table">
          <thead>
            <tr>${headers.map((header) => `<th>${escapeHtml(formatLabel(header))}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `
              <tr>${headers.map((header) => `<td>${escapeHtml(row[header])}</td>`).join('')}</tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function initializeGrammarQuiz(moduleId) {
  const moduleData = getGrammarTeachingModules()[moduleId];
  const quizContainer = document.getElementById(`${moduleId}-quiz`);
  if (!moduleData || !quizContainer) return;

  quizContainer.innerHTML = moduleData.quiz.map((question, questionIndex) => `
    <article class="grammar-quiz-question" data-question-index="${questionIndex}">
      <h4>${questionIndex + 1}. ${escapeHtml(question.q)}</h4>
      <div class="grammar-quiz-options">
        ${question.options.map((option) => `
          <button class="grammar-quiz-option" type="button" data-module-id="${escapeHtml(moduleId)}" data-question-index="${questionIndex}" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>
        `).join('')}
      </div>
      <p class="grammar-quiz-feedback" aria-live="polite"></p>
    </article>
  `).join('');

  updateGrammarQuizScore(moduleId);
}

function checkGrammarModuleAnswer(button) {
  const moduleId = button.dataset.moduleId;
  const questionIndex = Number(button.dataset.questionIndex);
  const moduleData = getGrammarTeachingModules()[moduleId];
  const question = moduleData?.quiz[questionIndex];
  if (!question) return;

  const questionCard = button.closest('.grammar-quiz-question');
  const feedback = questionCard?.querySelector('.grammar-quiz-feedback');
  const buttons = questionCard?.querySelectorAll('.grammar-quiz-option') || [];
  const isCorrect = button.dataset.answer === question.answer;

  buttons.forEach((optionButton) => {
    optionButton.disabled = true;
    optionButton.classList.toggle('correct', optionButton.dataset.answer === question.answer);
    optionButton.classList.toggle('incorrect', optionButton === button && !isCorrect);
  });

  if (questionCard) questionCard.dataset.correct = String(isCorrect);
  if (feedback) {
    feedback.textContent = isCorrect ? '✅ Correto!' : `❌ Revise: a resposta correta é ${question.answer}.`;
    feedback.className = `grammar-quiz-feedback ${isCorrect ? 'success' : 'error'}`;
  }

  updateGrammarQuizScore(moduleId);
}

function updateGrammarQuizScore(moduleId) {
  const moduleData = getGrammarTeachingModules()[moduleId];
  const scoreElement = document.getElementById(`${moduleId}-score`);
  if (!moduleData || !scoreElement) return;

  const correctCount = document.querySelectorAll(`[data-grammar-module="${moduleId}"] .grammar-quiz-question[data-correct="true"]`).length;
  const answeredCount = document.querySelectorAll(`[data-grammar-module="${moduleId}"] .grammar-quiz-question[data-correct]`).length;
  scoreElement.textContent = answeredCount === moduleData.quiz.length
    ? `Final Score: ${correctCount}/${moduleData.quiz.length}`
    : `Score: ${correctCount}/${moduleData.quiz.length}`;
}

function renderModuleTab(module, activeTab) {
  if (activeTab === 'theory') {
    return `
      <section class="module-panel">
        <p class="module-summary">${escapeHtml(module.theory.summary)}</p>
        ${module.theory.detailedExplanation ? `<p class="module-detailed-explanation">${escapeHtml(module.theory.detailedExplanation)}</p>` : ''}
        <div class="module-rule-grid">
          ${module.theory.rules.map((rule) => `
            <article class="module-rule-card">
              <h3>${escapeHtml(rule.title)}</h3>
              <p>${escapeHtml(rule.text)}</p>
              <small><strong>Exemplo:</strong> ${escapeHtml(rule.example)}</small>
            </article>
          `).join('')}
        </div>
        ${module.theory.commonMistakes?.length ? `
          <article class="module-mistakes-card">
            <h3>⚠️ Erros comuns para evitar</h3>
            <ul>
              ${module.theory.commonMistakes.map((mistake) => `<li>${escapeHtml(mistake)}</li>`).join('')}
            </ul>
          </article>
        ` : ''}
      </section>
    `;
  }

  if (activeTab === 'game1' || activeTab === 'game2') {
    const gameKey = activeTab === 'game1' ? 'game1Written' : 'game2Audio';
    const title = activeTab === 'game1' ? 'Complete as frases com a resposta correta:' : 'Ouça o áudio e responda cada questão:';
    return `
      <section class="module-panel module-question-list">
        <h2>${title}</h2>
        ${module[gameKey].map((q) => {
          const answerKey = getModuleAnswerKey(activeTab, q.id);
          return `
            <article class="module-question-card">
              <div class="module-question-prompt">
                ${activeTab === 'game2' ? `<button class="btn btn-primary module-audio-btn" type="button" data-speak-text="${escapeHtml(q.audioText || '')}">🔊 Ouvir Áudio</button>` : ''}
                <strong>${q.id}. ${escapeHtml(q.sentence)}</strong>
              </div>
              <input class="module-answer-input" type="text" placeholder="${activeTab === 'game2' ? 'Digite o que ouviu...' : 'Sua resposta'}" data-answer-key="${answerKey}" data-answer="${escapeHtml(q.answer)}" autocomplete="off" />
              <div class="module-feedback-slot">${renderAnswerFeedback('', q.answer)}</div>
            </article>
          `;
        }).join('')}
      </section>
    `;
  }

  return `
    <section class="module-panel module-question-list">
      <h2>Leia a frase em voz alta e avalie sua pronúncia:</h2>
      <p class="module-help">Use o botão de gravação para ativar o SpeechRecognition em inglês. A plataforma transcreve sua fala e compara com a frase esperada.</p>
      <h2>Leia e grave a sua voz pronunciando as frases:</h2>
      <p class="module-help">Use o botão REC para iniciar/parar a gravação. Ao finalizar, um player do áudio gravado será exibido.</p>
      ${module.game3Speaking.map((q) => `
        <article class="module-question-card" data-speaking-question="${q.id}">
          <p class="module-speaking-sentence">“${escapeHtml(q.sentence)}”</p>
          <div class="module-recording-row">
            <button class="module-rec-btn" type="button" data-recognize-question="${q.id}" data-expected-sentence="${escapeHtml(q.answer || q.sentence)}">🎙️ Gravar e Avaliar Pronúncia</button>
            <button class="btn btn-secondary module-model-btn" type="button" data-speak-text="${escapeHtml(q.sentence)}">🔊 Escutar Modelo Nativo</button>
            <span class="module-record-status">Pronto para avaliar</span>
          </div>
          <div class="module-pronunciation-result" aria-live="polite"></div>
          <div class="module-audio-playback"></div>
        </article>
      `).join('')}
    </section>
  `;
}

function updateModulePanel(moduleId, activeTab) {
  const module = getPhaseOneModulesData()[moduleId];
  const panel = document.getElementById('module-tab-panel');
  if (!module || !panel) return;
  stopModuleRecording();
  document.querySelectorAll('.module-tab').forEach((button) => button.classList.toggle('active', button.dataset.moduleTab === activeTab));
  panel.innerHTML = renderModuleTab(module, activeTab);
}

function playModuleAudio(text) {
  speakGrammarText(text);
}

function getSpeechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition;
}

function cleanPronunciationText(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function calculatePronunciationAccuracy(recognized, expected) {
  const cleanRecognized = cleanPronunciationText(recognized);
  const cleanExpected = cleanPronunciationText(expected);
  if (!cleanExpected) return 0;
  if (cleanRecognized === cleanExpected) return 100;

  const expectedWords = cleanExpected.split(' ');
  const recognizedWords = cleanRecognized.split(' ');
  const matchedWords = expectedWords.filter((word) => recognizedWords.includes(word)).length;
  return Math.min(Math.round((matchedWords / expectedWords.length) * 100), 100);
}

function getPronunciationMessage(accuracy, transcript) {
  if (accuracy === 100) return '✨ Pronúncia Perfeita! (100%)';
  if (accuracy >= 70) return `👍 Boa Pronúncia! Continue assim. (${accuracy}%)`;
  return `⚠️ Tente novamente. Texto reconhecido: ${transcript || 'não identificado'} (${accuracy}%)`;
}

function startModuleSpeechRecognition(questionId, expectedSentence) {
  stopModuleRecording();
  if (moduleSpeechRecognition) moduleSpeechRecognition.abort();

  const SpeechRecognition = getSpeechRecognitionConstructor();
  if (!SpeechRecognition) {
    setPronunciationResult(questionId, 'Reconhecimento de voz indisponível neste navegador. Use Chrome ou Edge para avaliar a pronúncia.', 'error');
    return;
  }

  moduleSpeechRecognition = new SpeechRecognition();
  moduleSpeechRecognition.lang = 'en-US';
  moduleSpeechRecognition.interimResults = false;
  moduleSpeechRecognition.maxAlternatives = 1;
  setRecordingStatus(questionId, '● Escutando pronúncia...', 'recording');
  setPronunciationResult(questionId, 'Fale a frase completa em inglês...', 'listening');

  moduleSpeechRecognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript || '';
    const accuracy = calculatePronunciationAccuracy(transcript, expectedSentence);
    const message = getPronunciationMessage(accuracy, transcript);
    setPronunciationResult(questionId, message, accuracy === 100 ? 'perfect' : accuracy >= 70 ? 'success' : 'error', accuracy, transcript);
  };

  moduleSpeechRecognition.onerror = () => {
    setPronunciationResult(questionId, 'Não foi possível capturar seu áudio com clareza. Tente novamente.', 'error');
  };

  moduleSpeechRecognition.onend = () => {
    setRecordingStatus(questionId, 'Pronto para avaliar', 'ready');
    moduleSpeechRecognition = null;
  };

  moduleSpeechRecognition.start();
}

async function toggleModuleRecording(questionId) {
  if (moduleRecordingQuestionId === questionId && moduleRecorder?.state === 'recording') {
    moduleRecorder.stop();
    return;
  }
  stopModuleRecording();
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    setRecordingStatus(questionId, 'MediaRecorder não disponível neste navegador.', 'error');
    return;
  }
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  moduleAudioChunks = [];
  moduleRecordingQuestionId = questionId;
  moduleRecorder = new MediaRecorder(stream);
  moduleRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) moduleAudioChunks.push(event.data);
  };
  moduleRecorder.onstop = () => {
    const audioUrl = URL.createObjectURL(new Blob(moduleAudioChunks, { type: 'audio/webm' }));
    const card = document.querySelector(`[data-speaking-question="${questionId}"]`);
    card?.querySelector('.module-audio-playback')?.replaceChildren(Object.assign(document.createElement('audio'), { controls: true, src: audioUrl }));
    setRecordingStatus(questionId, '✓ Áudio gravado com sucesso!', 'success');
    stream.getTracks().forEach((track) => track.stop());
    moduleRecordingQuestionId = null;
  };
  moduleRecorder.start();
  setRecordingStatus(questionId, '● Gravando... indicador de áudio ativo', 'recording');
}

function stopModuleRecording() {
  if (moduleRecorder?.state === 'recording') moduleRecorder.stop();
  if (moduleSpeechRecognition) {
    moduleSpeechRecognition.abort();
    moduleSpeechRecognition = null;
  }
}

function setRecordingStatus(questionId, text, state) {
  const card = document.querySelector(`[data-speaking-question="${questionId}"]`);
  const status = card?.querySelector('.module-record-status');
  const button = card?.querySelector('.module-rec-btn');
  if (status) {
    status.textContent = text;
    status.className = `module-record-status ${state}`;
  }
  if (button) {
    button.textContent = state === 'recording' ? '🎙️ Escutando pronúncia...' : '🎙️ Gravar e Avaliar Pronúncia';
    button.classList.toggle('recording', state === 'recording');
    button.disabled = state === 'recording';
  }
}

function setPronunciationResult(questionId, message, state, accuracy, transcript) {
  const result = document.querySelector(`[data-speaking-question="${questionId}"] .module-pronunciation-result`);
  if (!result) return;
  result.className = `module-pronunciation-result ${state}`;
  result.innerHTML = `
    <strong>${escapeHtml(message)}</strong>
    ${typeof accuracy === 'number' ? `<span>Precisão: ${accuracy}%</span>` : ''}
    ${transcript ? `<small>Sua voz capturada: “${escapeHtml(transcript)}”</small>` : ''}
  `;
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
  const initialTopicId = window.location.hash.replace('#', '');
  if (initialTopicId) {
    openLessonModule(initialTopicId);
  } else {
    loadGrammarHub();
  }

  document.addEventListener('click', (event) => {
    const lessonButton = event.target.closest('[data-open-lesson]');
    if (lessonButton) {
      window.history.replaceState(null, '', `#${lessonButton.dataset.openLesson}`);
      openLessonModule(lessonButton.dataset.openLesson);
      return;
    }

    if (event.target.closest('[data-load-grammar-hub]')) {
      window.history.replaceState(null, '', window.location.pathname);
      loadGrammarHub();
      return;
    }

    const moduleTab = event.target.closest('[data-module-tab]');
    if (moduleTab) {
      updateModulePanel(moduleTab.dataset.moduleId, moduleTab.dataset.moduleTab);
      return;
    }

    const moduleAudioButton = event.target.closest('[data-speak-text]');
    if (moduleAudioButton) {
      playModuleAudio(moduleAudioButton.dataset.speakText);
      return;
    }

    const recognitionButton = event.target.closest('[data-recognize-question]');
    if (recognitionButton) {
      startModuleSpeechRecognition(Number(recognitionButton.dataset.recognizeQuestion), recognitionButton.dataset.expectedSentence);
      return;
    }

    const recordButton = event.target.closest('[data-record-question]');
    if (recordButton) {
      toggleModuleRecording(Number(recordButton.dataset.recordQuestion)).catch(() => {
        setRecordingStatus(Number(recordButton.dataset.recordQuestion), 'Não foi possível acessar o microfone.', 'error');
      });
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

  document.addEventListener('input', (event) => {
    const answerInput = event.target.closest('.module-answer-input');
    if (!answerInput) return;
    answerInput.classList.toggle('correct', isCorrectModuleAnswer(answerInput.value, answerInput.dataset.answer));
    answerInput.classList.toggle('incorrect', answerInput.value.trim() !== '' && !isCorrectModuleAnswer(answerInput.value, answerInput.dataset.answer));
    const feedback = answerInput.closest('.module-question-card')?.querySelector('.module-feedback-slot');
    if (feedback) feedback.innerHTML = renderAnswerFeedback(answerInput.value, answerInput.dataset.answer);
  });
}

window.loadGrammarHub = loadGrammarHub;
window.openLessonModule = openLessonModule;
window.openPhaseOneModule = openPhaseOneModule;
window.toggleAccordion = toggleAccordion;
window.speakGrammarText = speakGrammarText;
window.speakLetter = speakLetter;
window.playPhonetic = playPhonetic;
window.playRandomLetter = playRandomLetter;
window.generateQuizOptions = generateQuizOptions;
window.checkAlphabetQuiz = checkAlphabetQuiz;
window.generateIpaQuiz = generateIpaQuiz;
window.checkIpaQuiz = checkIpaQuiz;
window.initializeGrammarQuiz = initializeGrammarQuiz;
window.checkGrammarModuleAnswer = checkGrammarModuleAnswer;

document.addEventListener('DOMContentLoaded', initializeGrammarHub);
