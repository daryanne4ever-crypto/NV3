// NLE Level 3 (NV3) — Revision page speech synthesis and email dictation activity.
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const emailSpeechTimers = [];
const emails = [
  'lucas.silva@gmail.com',
  'maria.oliveira@outlook.com',
  'john.santos@hotmail.com',
  'ana.costa@gmail.com',
  'pedro.lima@outlook.com',
  'sarah.rocha@hotmail.com',
  'carla.souza@gmail.com',
  'bruno.almeida@outlook.com',
  'laura.mendes@hotmail.com',
  'daniel.pereira@gmail.com',
];
const phoneNumbers = [
  '555-1234',
  '555-9876',
  '555-4567',
  '555-3210',
  '555-8765',
  '555-2468',
  '555-1357',
  '555-9988',
  '555-7744',
  '555-3322',
];
const sentenceBuilderPhrases = [
  { target: 'Eu trouxe o bolo', blocks: ['I', 'brought', 'the', 'cake'] },
  { target: 'Eu comprei torta', blocks: ['I', 'bought', 'pie'] },
  { target: 'Eu prefiro café quente', blocks: ['I', 'prefer', 'coffee', 'hot'] },
  { target: 'Eu gosto de salada fria', blocks: ['I', 'like', 'cold', 'salad'] },
  { target: 'Ela quer bananas', blocks: ['She', 'wants', 'bananas'] },
  { target: 'Nós precisamos de ovos', blocks: ['We', 'need', 'eggs'] },
  { target: 'Eu como pizza', blocks: ['I', 'eat', 'pizza'] },
  { target: 'Ele comprou tomates', blocks: ['He', 'bought', 'tomatoes'] },
  { target: 'Eu prefiro água', blocks: ['I', 'prefer', 'water'] },
  { target: 'Eles querem pão', blocks: ['They', 'want', 'bread'] },
];
let currentSentenceIndex = 0;
const selectedSentenceBlocks = [];
const speakingPhrases = [
  { text: 'I have one apple.', tips: { apple: { ipa: '/ˈæp.əl/', tip: "Remember the short /æ/ sound in 'apple'." } } },
  { text: 'She wants two bananas.', tips: { bananas: { ipa: '/bəˈnæn.əz/', tip: 'Keep the stress on the second syllable: NA.' } } },
  { text: 'We need three eggs.', tips: { three: { ipa: '/θriː/', tip: 'Place your tongue lightly between your teeth for /θ/.' }, eggs: { ipa: '/eɡz/', tip: 'Finish with a clear /gz/ sound.' } } },
  'There are four oranges.',
  'He bought five tomatoes.',
  { text: 'Please spell "bread".', tips: { bread: { ipa: '/bred/', tip: "Use the short /e/ sound, not /æ/." } } },
  'B-R-E-A-D. Bread.',
  { text: 'Can you spell "cheese"?', tips: { cheese: { ipa: '/tʃiːz/', tip: 'Start with /tʃ/ and hold the long /iː/ sound.' } } },
  'C-H-E-E-S-E. Cheese.',
  'I bought six bottles of milk.',
  'My phone number is 82-99914-8159, and I need seven apples.',
  'Please write this word: P-O-T-A-T-O. I need eight potatoes.',
  'She ordered nine sandwiches and ten bottles of water.',
  'Could you spell "strawberry", please? S-T-R-A-W-B-E-R-R-Y.',
  'I need twelve bananas, five oranges, and one watermelon for the party.',
  'My shopping list has thirteen eggs, four tomatoes, two onions, and six carrots.',
  'Please send fourteen pizzas to 25 Green Street and spell the name "Lucas": L-U-C-A-S.',
  'There are fifteen cookies, eleven chocolates, and twenty bottles of juice in the supermarket today.',
  'My name is Emma. Please spell my last name: S-M-I-T-H. I need sixteen apples and four bottles of milk.',
  'Hello! I would like twenty eggs, eight bananas, three loaves of bread, and two cartons of milk. Please spell "orange": O-R-A-N-G-E.',
];
let currentSpeakingIndex = 0;

function getEnglishVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  return voices.find((voice) => voice.lang === 'en-US') || voices.find((voice) => voice.lang.startsWith('en-US')) || null;
}

function speakText(text, options = {}) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = options.rate || 0.72;
  utterance.pitch = options.pitch || 1;
  const englishVoice = getEnglishVoice();
  if (englishVoice) utterance.voice = englishVoice;
  window.speechSynthesis.speak(utterance);
}

function spokenToken(character) {
  if (character === '@') return 'at';
  if (character === '.') return 'dot';
  if (character === '-') return 'dash';
  if (character === '_') return 'underscore';
  return character.toUpperCase();
}

function clearEmailSpeechQueue() {
  emailSpeechTimers.forEach((timerId) => window.clearTimeout(timerId));
  emailSpeechTimers.length = 0;
  window.speechSynthesis.cancel();
}

function speakEmailSlowly(email) {
  if (!('speechSynthesis' in window)) return;
  clearEmailSpeechQueue();

  const tokens = email.split('').map(spokenToken);
  let delay = 0;

  tokens.forEach((token) => {
    if (token === 'at') delay += 650;
    const timerId = window.setTimeout(() => speakText(token, { rate: 0.62 }), delay);
    emailSpeechTimers.push(timerId);
    delay += token === 'at' || token === 'dot' ? 850 : 520;
  });
}



function showActivity(activityNumber) {
  document.querySelectorAll('.activity-section').forEach((section) => {
    section.hidden = !section.classList.contains(`activity-${activityNumber}`);
  });

  document.querySelectorAll('[data-activity]').forEach((button) => {
    button.classList.toggle('active', button.dataset.activity === String(activityNumber));
  });
}

function setupTabs() {
  document.querySelectorAll('[data-activity]').forEach((tabButton) => {
    tabButton.addEventListener('click', () => showActivity(tabButton.dataset.activity));
  });
  showActivity(1);
}


function setupNumberReview() {
  document.querySelectorAll('.number-button').forEach((button) => {
    button.addEventListener('click', () => speakText(button.dataset.text, { rate: 0.68 }));
  });
}


function setInputFeedback(input, answerDisplay, isCorrect, displayAnswer) {
  input.classList.toggle('correct', isCorrect);
  input.classList.toggle('incorrect', !isCorrect);
  answerDisplay.textContent = `Correct answer: ${displayAnswer}`;
  answerDisplay.classList.toggle('visible', !isCorrect);
}

function formatEmailForDisplay(email) {
  const [localPart, domain] = email.split('@');
  const formattedLocal = localPart
    .split('.')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('.');
  return `${formattedLocal}@${domain}`;
}

function renderAlphabet() {
  const alphabetGrid = document.querySelector('#alphabetGrid');
  if (!alphabetGrid) return;

  alphabet.forEach((letter) => {
    const button = document.createElement('button');
    button.className = 'letter-button';
    button.type = 'button';
    button.textContent = letter;
    button.setAttribute('aria-label', `Listen to letter ${letter}`);
    button.addEventListener('click', () => speakText(letter, { rate: 0.7 }));
    alphabetGrid.appendChild(button);
  });
}

function renderEmailExercises() {
  const exerciseList = document.querySelector('#emailExercises');
  if (!exerciseList) return;

  emails.forEach((email, index) => {
    const exercise = document.createElement('div');
    exercise.className = 'email-exercise';

    const listenButton = document.createElement('button');
    listenButton.className = 'btn btn-secondary';
    listenButton.type = 'button';
    listenButton.textContent = `Ouvir Email ${index + 1}`;
    listenButton.addEventListener('click', () => speakEmailSlowly(email));

    const answerRow = document.createElement('div');
    answerRow.className = 'answer-row';

    const input = document.createElement('input');
    input.className = 'email-input';
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = `Type email ${index + 1}`;
    input.dataset.answer = email;
    input.dataset.displayAnswer = formatEmailForDisplay(email);
    input.setAttribute('aria-label', `Resposta do email ${index + 1}`);

    const checkButton = document.createElement('button');
    checkButton.className = 'btn btn-secondary';
    checkButton.type = 'button';
    checkButton.textContent = 'Check';

    const answerDisplay = document.createElement('span');
    answerDisplay.className = 'correct-answer-display';

    checkButton.addEventListener('click', () => {
      const alunoResposta = input.value.trim().toLowerCase();
      const respostaCorreta = input.dataset.answer.toLowerCase();
      setInputFeedback(input, answerDisplay, alunoResposta === respostaCorreta, input.dataset.displayAnswer);
    });

    answerRow.append(input, checkButton, answerDisplay);
    exercise.append(listenButton, answerRow);
    exerciseList.appendChild(exercise);
  });
}

function speakPhoneSlowly(phoneNumber) {
  if (!('speechSynthesis' in window)) return;
  clearEmailSpeechQueue();

  const digits = phoneNumber.replace(/\D/g, '').split('');
  let delay = 0;

  digits.forEach((digit, index) => {
    if (index === 3) delay += 750;
    const timerId = window.setTimeout(() => speakText(digit, { rate: 0.58 }), delay);
    emailSpeechTimers.push(timerId);
    delay += 520;
  });
}

function renderPhoneExercises() {
  const exerciseList = document.querySelector('#phoneExercises');
  if (!exerciseList) return;

  phoneNumbers.forEach((phoneNumber, index) => {
    const exercise = document.createElement('div');
    exercise.className = 'email-exercise';

    const listenButton = document.createElement('button');
    listenButton.className = 'btn btn-secondary';
    listenButton.type = 'button';
    listenButton.textContent = `☎ Ouvir Telefone ${index + 1}`;
    listenButton.addEventListener('click', () => speakPhoneSlowly(phoneNumber));

    const answerRow = document.createElement('div');
    answerRow.className = 'answer-row';

    const input = document.createElement('input');
    input.className = 'email-input phone-input';
    input.type = 'text';
    input.inputMode = 'numeric';
    input.autocomplete = 'off';
    input.placeholder = `Type phone ${index + 1}`;
    input.dataset.answer = phoneNumber.replace(/\D/g, '');
    input.dataset.displayAnswer = phoneNumber;
    input.setAttribute('aria-label', `Resposta do telefone ${index + 1}`);

    const checkButton = document.createElement('button');
    checkButton.className = 'btn btn-secondary';
    checkButton.type = 'button';
    checkButton.textContent = 'Check';

    const answerDisplay = document.createElement('span');
    answerDisplay.className = 'correct-answer-display';

    checkButton.addEventListener('click', () => {
      const alunoResposta = input.value.trim().toLowerCase().replace(/[-\s]/g, '');
      const respostaCorreta = input.dataset.answer.toLowerCase();
      setInputFeedback(input, answerDisplay, alunoResposta === respostaCorreta, input.dataset.displayAnswer);
    });

    answerRow.append(input, checkButton, answerDisplay);
    exercise.append(listenButton, answerRow);
    exerciseList.appendChild(exercise);
  });
}




function getSpeakingText(phrase = speakingPhrases[currentSpeakingIndex]) {
  return typeof phrase === 'string' ? phrase : phrase.text;
}

function getSpeakingTips(phrase = speakingPhrases[currentSpeakingIndex]) {
  return typeof phrase === 'string' ? {} : phrase.tips || {};
}

function shuffleArray(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
  return items;
}

function renderSentenceWorkspace() {
  const workspace = document.querySelector('#sentenceWorkspace');
  if (!workspace) return;
  workspace.innerHTML = '';

  if (!selectedSentenceBlocks.length) {
    workspace.innerHTML = '<span class="sentence-placeholder">Click the blocks below to build your sentence...</span>';
    return;
  }

  selectedSentenceBlocks.forEach((block) => {
    const token = document.createElement('span');
    token.className = 'drop-token';
    token.textContent = block;
    workspace.appendChild(token);
  });
}

function resetSentenceFeedback() {
  const workspace = document.querySelector('#sentenceWorkspace');
  const feedback = document.querySelector('#sentenceFeedback');
  workspace?.classList.remove('correct', 'incorrect');
  if (!feedback) return;
  feedback.textContent = '';
  feedback.classList.remove('success', 'danger');
}

function renderSentencePuzzle() {
  const phrase = sentenceBuilderPhrases[currentSentenceIndex];
  const target = document.querySelector('#targetSentence');
  const progress = document.querySelector('#sentenceProgress');
  const wordBank = document.querySelector('#puzzleWordBank');
  selectedSentenceBlocks.length = 0;
  resetSentenceFeedback();

  if (target) target.textContent = phrase.target;
  if (progress) progress.textContent = `${currentSentenceIndex + 1} / ${sentenceBuilderPhrases.length}`;
  if (wordBank) {
    wordBank.innerHTML = '';
    shuffleArray([...phrase.blocks]).forEach((block) => {
      const button = document.createElement('button');
      button.className = 'word-button';
      button.type = 'button';
      button.textContent = block;
      button.addEventListener('click', () => {
        selectedSentenceBlocks.push(block);
        button.classList.add('used');
        resetSentenceFeedback();
        renderSentenceWorkspace();
      });
      wordBank.appendChild(button);
    });
  }

  renderSentenceWorkspace();
}

function setupSentenceBuilder() {
  const workspace = document.querySelector('#sentenceWorkspace');
  const feedback = document.querySelector('#sentenceFeedback');

  document.querySelector('#clearSentenceBtn')?.addEventListener('click', () => {
    selectedSentenceBlocks.length = 0;
    document.querySelectorAll('#puzzleWordBank .word-button').forEach((button) => button.classList.remove('used'));
    resetSentenceFeedback();
    renderSentenceWorkspace();
  });

  document.querySelector('#checkSentenceBtn')?.addEventListener('click', () => {
    if (!workspace || !feedback) return;
    const phrase = sentenceBuilderPhrases[currentSentenceIndex];
    const isCorrect = selectedSentenceBlocks.join(' ') === phrase.blocks.join(' ');

    workspace.classList.toggle('correct', isCorrect);
    workspace.classList.toggle('incorrect', !isCorrect);
    feedback.classList.toggle('success', isCorrect);
    feedback.classList.toggle('danger', !isCorrect);
    feedback.textContent = isCorrect
      ? 'Great job! Your translation is correct.'
      : `Try again! Correct translation: ${phrase.blocks.join(' ')}`;
  });

  document.querySelector('#nextSentenceBtn')?.addEventListener('click', () => {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentenceBuilderPhrases.length;
    renderSentencePuzzle();
  });

  renderSentencePuzzle();
}


function normalizeSpeakingWord(word) {
  return word.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function renderSpeakingPhrase() {
  const step = document.querySelector('#speakingStep');
  const model = document.querySelector('#speakingModel');
  const feedback = document.querySelector('#speakingFeedback');
  const spokenWords = document.querySelector('#spokenWords');
  const score = document.querySelector('#speakingScore');
  const micLabel = document.querySelector('.microphone-label');
  let recognition = null;
  let isRecording = false;
  let finalTranscript = '';

  if (step) step.textContent = `Phrase ${currentSpeakingIndex + 1} of ${speakingPhrases.length}`;
  if (model) model.textContent = getSpeakingText();
  if (feedback) feedback.hidden = true;
  if (spokenWords) spokenWords.innerHTML = '';
  if (score) score.textContent = '';
}

function scoreSpeakingResult(transcript) {
  const expectedWords = getSpeakingText().split(/\s+/);
  const spokenWords = transcript.split(/\s+/).filter(Boolean);
  let correctCount = 0;

  const comparedWords = expectedWords.map((expectedWord, index) => {
    const spokenWord = spokenWords[index] || '';
    const isCorrect = normalizeSpeakingWord(spokenWord) === normalizeSpeakingWord(expectedWord);
    if (isCorrect) correctCount += 1;
    return { expectedWord, spokenWord, isCorrect };
  });

  return {
    comparedWords,
    errors: comparedWords.filter((word) => !word.isCorrect),
    score: Math.round((correctCount / expectedWords.length) * 100),
  };
}

function showSpeakingFeedback(transcript) {
  const feedback = document.querySelector('#speakingFeedback');
  const score = document.querySelector('#speakingScore');
  const micLabel = document.querySelector('.microphone-label');
  let recognition = null;
  let isRecording = false;
  let finalTranscript = '';
  const spokenWords = document.querySelector('#spokenWords');
  const errorAnalysis = document.querySelector('#wordErrorAnalysis');
  const pronunciationTips = document.querySelector('#pronunciationTips');
  if (!feedback || !score || !spokenWords) return;

  const result = scoreSpeakingResult(transcript);
  const label = result.score >= 90 ? 'Excelente!' : result.score >= 70 ? 'Good job!' : 'Keep practicing!';
  score.textContent = `${label} ${result.score}`;
  spokenWords.innerHTML = '';

  result.comparedWords.forEach(({ expectedWord, isCorrect }) => {
    const word = document.createElement('span');
    word.className = `spoken-word ${isCorrect ? 'correct' : 'incorrect'}`;
    word.textContent = expectedWord;
    spokenWords.appendChild(word);
  });

  if (errorAnalysis) {
    errorAnalysis.innerHTML = '<h3>Análise de Palavras</h3>';
    result.errors.forEach(({ expectedWord, spokenWord }) => {
      const item = document.createElement('p');
      item.textContent = spokenWord ? `O sistema ouviu '${spokenWord}' em vez de '${expectedWord}'.` : `O sistema não identificou a palavra '${expectedWord}'.`;
      errorAnalysis.appendChild(item);
    });
  }
  if (pronunciationTips) {
    const tips = getSpeakingTips();
    pronunciationTips.innerHTML = '<h3>Pronunciation Tips</h3>';
    result.errors.forEach(({ expectedWord }) => {
      const key = normalizeSpeakingWord(expectedWord);
      const tip = tips[key];
      if (!tip) return;
      const item = document.createElement('p');
      item.textContent = `Dica para '${key}': ${tip.tip} Transcrição fonética: ${tip.ipa}`;
      pronunciationTips.appendChild(item);
    });
  }
  window.NV3?.saveActivityResult('revision-speaking-practice', 'Activity 4: Speaking Practice', result.score, 'revision.html#activity-4');
  feedback.hidden = false;
}

function setupSpeakingPractice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micButton = document.querySelector('#startSpeakingBtn');
  const playButton = document.querySelector('#playSpeakingPhraseBtn');
  const nextButton = document.querySelector('#nextSpeakingBtn');
  const score = document.querySelector('#speakingScore');
  const micLabel = document.querySelector('.microphone-label');
  let recognition = null;
  let isRecording = false;
  let finalTranscript = '';

  playButton?.addEventListener('click', () => speakText(getSpeakingText(), { rate: 0.72 }));

  micButton?.addEventListener('click', () => {
    if (!SpeechRecognition) {
      if (score) score.textContent = 'SpeechRecognition is not available in this browser.';
      document.querySelector('#speakingFeedback')?.removeAttribute('hidden');
      return;
    }

    if (isRecording && recognition) {
      recognition.stop();
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    finalTranscript = '';
    isRecording = true;
    micButton.classList.add('listening');
    if (micLabel) micLabel.textContent = 'Gravando... Clique para pausar';

    recognition.addEventListener('result', (event) => {
      finalTranscript = event.results[0][0].transcript;
    });

    recognition.addEventListener('end', () => {
      isRecording = false;
      micButton.classList.remove('listening');
      if (micLabel) micLabel.textContent = 'Toque para falar';
      if (finalTranscript) showSpeakingFeedback(finalTranscript);
    });

    recognition.start();
  });

  nextButton?.addEventListener('click', () => {
    currentSpeakingIndex = (currentSpeakingIndex + 1) % speakingPhrases.length;
    renderSpeakingPhrase();
  });

  renderSpeakingPhrase();
}

setupTabs();
setupNumberReview();
renderAlphabet();
renderEmailExercises();
renderPhoneExercises();
setupSentenceBuilder();
setupSpeakingPractice();
window.showActivity = showActivity;

window.speechSynthesis?.addEventListener('voiceschanged', getEnglishVoice);
