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

function checkAnswers() {
  document.querySelectorAll('.email-input').forEach((input) => {
    const isCorrect = input.value.trim() === input.dataset.answer;
    input.classList.toggle('correct', isCorrect);
    input.classList.toggle('incorrect', !isCorrect);
  });
}

renderAlphabet();
renderEmailExercises();

document.querySelector('#checkAnswersBtn')?.addEventListener('click', checkAnswers);
window.speechSynthesis?.addEventListener('voiceschanged', getEnglishVoice);
