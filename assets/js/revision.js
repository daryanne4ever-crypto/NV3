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


function setupTabs() {
  document.querySelectorAll('[data-tab-target]').forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      const targetId = tabButton.dataset.tabTarget;

      document.querySelectorAll('[data-tab-target]').forEach((button) => button.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach((panel) => {
        panel.hidden = panel.id !== targetId;
        panel.classList.toggle('active', panel.id === targetId);
      });

      tabButton.classList.add('active');
    });
  });
}

function setupNumberReview() {
  document.querySelectorAll('.number-button').forEach((button) => {
    button.addEventListener('click', () => speakText(button.dataset.text, { rate: 0.68 }));
  });
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

    const input = document.createElement('input');
    input.className = 'email-input';
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = `Type email ${index + 1}`;
    input.dataset.answer = email;
    input.setAttribute('aria-label', `Resposta do email ${index + 1}`);

    exercise.append(listenButton, input);
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

    const input = document.createElement('input');
    input.className = 'email-input phone-input';
    input.type = 'text';
    input.inputMode = 'numeric';
    input.autocomplete = 'off';
    input.placeholder = `Type phone ${index + 1}`;
    input.dataset.answer = phoneNumber.replace(/\D/g, '');
    input.setAttribute('aria-label', `Resposta do telefone ${index + 1}`);

    exercise.append(listenButton, input);
    exerciseList.appendChild(exercise);
  });
}

function checkAnswers() {
  document.querySelectorAll('#emailExercises .email-input').forEach((input) => {
    const isCorrect = input.value.trim() === input.dataset.answer;
    input.classList.toggle('correct', isCorrect);
    input.classList.toggle('incorrect', !isCorrect);
  });
}

function checkPhoneAnswers() {
  document.querySelectorAll('.phone-input').forEach((input) => {
    const normalizedAnswer = input.value.replace(/[\s-]/g, '');
    const isCorrect = normalizedAnswer === input.dataset.answer;
    input.classList.toggle('correct', isCorrect);
    input.classList.toggle('incorrect', !isCorrect);
  });
}

setupTabs();
setupNumberReview();
renderAlphabet();
renderEmailExercises();
renderPhoneExercises();

document.querySelector('#checkAnswersBtn')?.addEventListener('click', checkAnswers);
document.querySelector('#checkPhoneAnswersBtn')?.addEventListener('click', checkPhoneAnswers);
window.speechSynthesis?.addEventListener('voiceschanged', getEnglishVoice);
