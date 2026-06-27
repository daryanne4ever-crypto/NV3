// Grammar Hub modules: topic loading, listening and pronunciation practice.
const grammarModules = [
  ['verb-tenses', 'Simple Present', 'Subject + verb (+ s/es)', 'I study English every day.', ['I study English every morning.', 'She works at a hotel.', 'They play tennis on Sundays.', 'Water boils at 100 degrees.', 'The sun rises in the east.']],
  ['verb-tenses', 'Present Continuous', 'am/is/are + verb + ing', 'I am studying English now.', ['I am studying English now.', 'She is cooking dinner.', 'They are waiting in the lobby.', 'We are leaving tomorrow.', 'He is running in the park.']],
  ['verb-tenses', 'Present Perfect', 'have/has + past participle', 'I have studied English before.', ['I have visited Paris.', 'She has finished the lesson.', 'We have lived here for years.', 'They have already eaten.', 'He has never been late.']],
  ['verb-tenses', 'Present Perfect Continuous', 'have/has been + verb + ing', 'I have been studying for three hours.', ['I have been studying for three hours.', 'She has been working all day.', 'They have been living here since 2020.', 'We have been waiting for you.', 'He has been reading all morning.']],
  ['verb-tenses', 'Simple Past', 'Subject + verb in the past', 'I studied English yesterday.', ['I visited London last year.', 'She played soccer yesterday.', 'They arrived late.', 'We watched a movie last night.', 'He worked here for five years.']],
  ['verb-tenses', 'Past Continuous', 'was/were + verb + ing', 'I was studying when you called.', ['I was sleeping when you called.', 'She was cooking dinner.', 'They were studying together.', 'We were playing football.', 'He was reading a book.']],
  ['verb-tenses', 'Past Perfect', 'had + past participle', 'I had studied before the test.', ['I had finished before he arrived.', 'She had left the hotel.', 'They had eaten before the class.', 'We had completed the project.', 'He had already gone home.']],
  ['verb-tenses', 'Past Perfect Continuous', 'had been + verb + ing', 'I had been studying for two hours.', ['I had been working for five hours.', 'She had been studying before the exam.', 'They had been living here for ten years.', 'We had been waiting for hours.', 'He had been driving all night.']],
  ['verb-tenses', 'Simple Future', 'will + verb', 'I will study English tomorrow.', ['I will travel tomorrow.', 'She will help you.', 'They will arrive soon.', 'We will practice later.', 'He will call you tonight.']],
  ['verb-tenses', 'Future Continuous', 'will be + verb + ing', 'I will be studying at eight.', ['I will be studying at eight.', 'She will be working tomorrow morning.', 'They will be waiting at the station.', 'We will be playing tennis.', 'He will be sleeping when you arrive.']],
  ['verb-tenses', 'Future Perfect', 'will have + past participle', 'I will have studied by Friday.', ['I will have finished by Friday.', 'She will have arrived by six.', 'They will have completed the project.', 'We will have learned everything.', 'He will have left by then.']],
  ['verb-tenses', 'Future Perfect Continuous', 'will have been + verb + ing', 'I will have been studying for three hours.', ['I will have been teaching for ten years.', 'She will have been working here for five years.', 'They will have been living here for twenty years.', 'We will have been learning English.', 'He will have been driving all day.']],
  ['structures', 'Active Voice', 'Subject + verb + object', 'The teacher explains the lesson.', ['The teacher explains the lesson.', 'The student writes an email.', 'The receptionist gives the key.', 'The manager makes decisions.', 'The chef prepares the meal.']],
  ['structures', 'Passive Voice', 'Object + be + past participle', 'The lesson is explained by the teacher.', ['The lesson is explained by the teacher.', 'The email is written by the student.', 'The key is given by the receptionist.', 'Decisions are made by the manager.', 'The meal is prepared by the chef.']],
  ['structures', 'Comparatives & Superlatives', 'more/most or -er/-est', 'This room is bigger than that room.', ['This room is bigger than that room.', 'English is more interesting now.', 'This is the largest building.', 'She is the smartest student.', 'That option is less expensive.']],
  ['structures', 'Prefixes, Suffixes & Affixes', 'prefix + root + suffix', 'Happy can become unhappy and happiness.', ['Happy can become unhappy.', 'Care can become careful.', 'Quick can become quickly.', 'Possible becomes impossible.', 'Agree becomes disagreement.']],
].map(([group, title, structure, example, phrases]) => ({ id: title.toLowerCase().replaceAll(' & ', '-').replaceAll(', ', '-').replaceAll(' ', '-'), group, title, structure, example, phrases }));

let activeModule = grammarModules[0];
let activePhraseIndex = 0;
let recognition;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function renderGrammarButtons() {
  document.querySelectorAll('[data-grammar-group]').forEach((container) => {
    const group = container.dataset.grammarGroup;
    container.innerHTML = grammarModules.filter((module) => module.group === group).map((module) => `
      <button class="grammar-block" type="button" data-topic-id="${module.id}">
        <span>${module.title}</span>
        <small>${module.structure}</small>
      </button>
    `).join('');
  });
}

function normalize(text) {
  return text.toLowerCase().replace(/[?.,!]/g, '').split(/\s+/).filter(Boolean);
}

function scorePronunciation(target, transcript) {
  const targetWords = normalize(target);
  const heardWords = normalize(transcript);
  const correct = targetWords.filter((word, index) => heardWords[index] === word).length;
  return Math.round((correct / targetWords.length) * 100);
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function renderModule(module) {
  activeModule = module;
  activePhraseIndex = 0;
  const panel = document.querySelector('#grammarModulePanel');
  panel.innerHTML = `
    <span class="eyebrow">Selected module</span>
    <h2>${module.title}</h2>
    <p><strong>Structure:</strong> <code>${module.structure}</code></p>
    <p><strong>Example:</strong> ${module.example}</p>
    <div class="module-actions">
      <button class="btn btn-secondary" type="button" data-listen-example>Listen to example</button>
      <button class="btn btn-primary" type="button" data-complete-module>Mark module as practiced</button>
    </div>
    <section class="mini-activity-grid">
      <article class="practice-card"><h3>Simple activity</h3><p>Write one affirmative, one negative and one question using this structure.</p></article>
      <article class="practice-card"><h3>Listening activity</h3><p>Click each phrase, listen, repeat and notice rhythm, stress and final sounds.</p></article>
    </section>
    <div class="phrase-practice">
      <h3>Pronunciation practice: 5 phrases</h3>
      <ol>${module.phrases.map((phrase, index) => `<li><button class="listen-link" type="button" data-phrase-index="${index}">🔊 ${phrase}</button></li>`).join('')}</ol>
      <p id="activeGrammarPhrase">${module.phrases[0]}</p>
      <button class="btn btn-primary" type="button" data-record-grammar>Record and get feedback</button>
      <p id="grammarFeedback" class="feedback-line">Feedback will appear here.</p>
    </div>
  `;
}

function recordPhrase() {
  const target = activeModule.phrases[activePhraseIndex];
  const feedback = document.querySelector('#grammarFeedback');
  if (!SpeechRecognition) {
    const transcript = window.prompt('Speech recognition unavailable. Type the sentence you said:') || '';
    const score = scorePronunciation(target, transcript);
    feedback.textContent = `Score: ${score}%. Target: "${target}" | Heard: "${transcript || '—'}"`;
    return;
  }
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const score = scorePronunciation(target, transcript);
    feedback.textContent = `Score: ${score}%. Target: "${target}" | Heard: "${transcript}"`;
  };
  recognition.start();
  feedback.textContent = 'Recording... speak now.';
}

// Grammar Hub Router — Manages content visibility and navigation without page reloads

/**
 * showTopic(topicId)
 * Shows a specific grammar topic by ID and hides all others
 * Updates URL hash for browser history support
 */
function showTopic(topicId) {
  // 1. Hide all grammar topics and remove active class
  document.querySelectorAll('.grammar-topic').forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });
  
  // 2. Show the selected topic with active class
  const selected = document.getElementById(topicId);
  if (selected) {
    selected.classList.add('active');
    selected.style.display = 'block';
    
    // Smooth scroll to the selected topic
    selected.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // 3. Update URL hash for browser history and bookmarking
  window.location.hash = topicId;
}

/**
 * initializeGrammarRouter()
 * Initializes the router on page load
 * Checks for hash in URL and shows corresponding topic
 */
function initializeGrammarRouter() {
  const hash = window.location.hash.substring(1);
  
  // If there's a hash and it corresponds to a valid topic, show it
  if (hash && document.getElementById(hash)) {
    showTopic(hash);
  }
}

/**
 * Handle hash changes (browser back/forward buttons)
 * Automatically update displayed topic when hash changes
 */
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    showTopic(hash);
  }
});

function bindGrammarHub() {
  renderGrammarButtons();
  renderModule(activeModule);

  // Initialize router after DOM is ready
  setTimeout(initializeGrammarRouter, 100);

  document.addEventListener('click', (event) => {
    const topicButton = event.target.closest('[data-topic-id]');
    if (topicButton) renderModule(grammarModules.find((module) => module.id === topicButton.dataset.topicId));

    const listenExample = event.target.closest('[data-listen-example]');
    if (listenExample) speak(activeModule.example);

    const phraseButton = event.target.closest('[data-phrase-index]');
    if (phraseButton) {
      activePhraseIndex = Number(phraseButton.dataset.phraseIndex);
      document.querySelector('#activeGrammarPhrase').textContent = activeModule.phrases[activePhraseIndex];
      speak(activeModule.phrases[activePhraseIndex]);
    }

    if (event.target.closest('[data-record-grammar]')) recordPhrase();

    if (event.target.closest('[data-complete-module]')) {
      window.NV3Storage?.saveActivityResult({ id: `grammar_${activeModule.id}`, name: `Grammar: ${activeModule.title}`, url: `grammar.html#${activeModule.id}`, percentage: 100, status: 'Completed' });
    }
  });
}

bindGrammarHub();
