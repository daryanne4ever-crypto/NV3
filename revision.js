const sentenceActivities = [
  ['What', 'time', 'is', 'breakfast?'],
  ['Where', 'is', 'the', 'gym?'],
  ['Could', 'you', 'help', 'me?'],
];

let currentSentenceIndex = 0;
let selectedWords = [];

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function renderSentenceBuilder() {
  const correctWords = sentenceActivities[currentSentenceIndex];
  const shuffledWords = shuffleArray(correctWords);
  selectedWords = [];
  const wordBank = document.getElementById('wordBank');
  const dropZone = document.getElementById('dropZone');
  if (!wordBank || !dropZone) return;
  dropZone.innerHTML = '';
  wordBank.innerHTML = '';
  shuffledWords.forEach((word) => {
    const button = document.createElement('button');
    button.className = 'word-block';
    button.textContent = word;
    button.addEventListener('click', () => {
      selectedWords.push(word);
      button.disabled = true;
      const chip = document.createElement('span');
      chip.className = 'selected-word';
      chip.textContent = word;
      dropZone.appendChild(chip);
    });
    wordBank.appendChild(button);
  });
}

function checkSentenceBuilderAnswer() {
  const correctWords = sentenceActivities[currentSentenceIndex];
  const isCorrect = selectedWords.join(' ') === correctWords.join(' ');
  document.getElementById('sentenceFeedback').textContent = isCorrect ? 'Correct!' : `Try again. Correct answer: ${correctWords.join(' ')}`;
  return isCorrect;
}

document.addEventListener('DOMContentLoaded', renderSentenceBuilder);
