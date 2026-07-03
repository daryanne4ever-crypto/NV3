// ==========================================
// 1. DADOS DO QUIZ DE LISTENING (A1 e A2)
// ==========================================
const listeningQuizData = {
  A1: [
    { audio: "I live in a big house.", options: ["I live in a small house.", "I live in a big house.", "I leave a big house."], correct: 1 },
    { audio: "She studies at school every day.", options: ["She studies at school every day.", "He studies at school every day.", "She studies at home every day."], correct: 0 },
    { audio: "They have a new book.", options: ["We have a new book.", "They have an old book.", "They have a new book."], correct: 2 },
    { audio: "We drink water every morning.", options: ["We drink water every morning.", "They drink water every morning.", "We drink coffee every morning."], correct: 0 },
    { audio: "He likes good food.", options: ["She likes good food.", "He likes good food.", "He likes cold food."], correct: 1 },
    { audio: "The teacher has a small car.", options: ["The student has a small car.", "The teacher has a big car.", "The teacher has a small car."], correct: 2 },
    { audio: "My friend is always happy.", options: ["My friend is always happy.", "My friend is never happy.", "Her friend is always happy."], correct: 0 },
    { audio: "I eat at home with my family.", options: ["I cook at home with my family.", "I eat at school with my family.", "I eat at home with my family."], correct: 2 },
    { audio: "The students study together.", options: ["The students play together.", "The students study together.", "The teachers study together."], correct: 1 },
    { audio: "She comes from Brazil.", options: ["She comes from Brazil.", "He comes from Brazil.", "She comes from Spain."], correct: 0 },
    { audio: "The water is cold.", options: ["The coffee is cold.", "The water is hot.", "The water is cold."], correct: 2 },
    { audio: "The food is hot.", options: ["The food is hot.", "The food is cold.", "The soup is hot."], correct: 0 },
    { audio: "He never drinks coffee.", options: ["She never drinks coffee.", "He never drinks coffee.", "He always drinks coffee."], correct: 1 },
    { audio: "We usually go to school by car.", options: ["We usually go to school by car.", "They usually go to school by car.", "We usually go to school by bus."], correct: 0 },
    { audio: "Who is your teacher?", options: ["Where is your teacher?", "Who is your brother?", "Who is your teacher?"], correct: 2 },
    { audio: "Where do you live?", options: ["Where do you work?", "Where do you live?", "What do you like?"], correct: 1 },
    { audio: "What book do you have?", options: ["What book do you have?", "What car do you have?", "What book does she have?"], correct: 0 },
    { audio: "When do they study?", options: ["When do we study?", "Where do they study?", "When do they study?"], correct: 2 },
    { audio: "The old house is good.", options: ["The new house is good.", "The old house is good.", "The old car is good."], correct: 1 },
    { audio: "I like my school because my friends are there.", options: ["I like my school because my friends are there.", "I like my home because my family is there.", "I like my school because the teachers are there."], correct: 0 }
  ],
  A2: [
    { audio: "We arrived at the restaurant yesterday.", options: ["They arrived at the restaurant yesterday.", "We arrived at the restaurant yesterday.", "We arrived at the hotel yesterday."], correct: 1 },
    { audio: "She chose a different book.", options: ["She chose a different book.", "She chose the same book.", "He chose a different book."], correct: 0 },
    { audio: "I forgot my question.", options: ["I forgot my answer.", "He forgot his question.", "I forgot my question."], correct: 2 },
    { audio: "They remembered the teacher.", options: ["They remembered the student.", "They remembered the teacher.", "We remembered the teacher."], correct: 1 },
    { audio: "He wore a new jacket.", options: ["He wore a new jacket.", "He wore an old jacket.", "She wore a new jacket."], correct: 0 },
    { audio: "Tomorrow we will travel together.", options: ["Today we will travel together.", "Tomorrow they will travel together.", "Tomorrow we will travel together."], correct: 2 },
    { audio: "I hope you will come tomorrow.", options: ["I know you will come tomorrow.", "I hope you will come tomorrow.", "I hope she will come tomorrow."], correct: 1 },
    { audio: "She will leave early because she is busy.", options: ["She will leave early because she is busy.", "She will leave late because she is busy.", "He will leave early because he is tired."], correct: 0 },
    { audio: "We met our neighbor yesterday.", options: ["We met our friend yesterday.", "They met our neighbor yesterday.", "We met our neighbor yesterday."], correct: 2 },
    { audio: "Everyone liked the restaurant.", options: ["Someone liked the restaurant.", "Everyone liked the restaurant.", "Everyone liked the food."], correct: 1 },
    { audio: "Someone asked an important question.", options: ["Someone asked an important question.", "Everyone asked an important question.", "Someone asked a simple question."], correct: 0 },
    { audio: "Nothing was difficult.", options: ["Everything was difficult.", "Nothing was easy.", "Nothing was difficult."], correct: 2 },
    { audio: "The weather was beautiful yesterday.", options: ["The weather is beautiful today.", "The weather was beautiful yesterday.", "The weather was bad yesterday."], correct: 1 },
    { audio: "Although he was busy, he helped us.", options: ["Because he was busy, he helped us.", "Although she was busy, she helped us.", "Although he was busy, he helped us."], correct: 2 },
    { audio: "After dinner, we went to the market.", options: ["After dinner, we went to the market.", "Before dinner, we went to the market.", "After lunch, we went to the market."], correct: 0 },
    { audio: "Before school, I visited my friend.", options: ["After school, I visited my friend.", "Before school, I visited my friend.", "Before school, he visited his friend."], correct: 1 },
    { audio: "The hospital is across the market.", options: ["The hospital is across the market.", "The hospital is near the market.", "The school is across the market."], correct: 0 },
    { audio: "The restaurant is between the hospital and the market.", options: ["The hotel is between the hospital and the market.", "The restaurant is behind the hospital and the market.", "The restaurant is between the hospital and the market."], correct: 2 },
    { audio: "She came without her book.", options: ["She came with her book.", "She came without her book.", "He came without his book."], correct: 1 },
    { audio: "If the weather is good, we will travel tomorrow.", options: ["If the weather is bad, we will travel tomorrow.", "If the weather is good, they will travel tomorrow.", "If the weather is good, we will travel tomorrow."], correct: 2 }
  ]
};

// ==========================================
// 2. LÓGICA DO QUIZ
// ==========================================
let currentLQuizLevel = "";
let currentLQuestionIndex = 0;
let currentLScore = 0;
let currentLAudioText = "";
let currentLCorrectIndex = 0;

function startListeningQuiz(level) {
  currentLQuizLevel = level;
  currentLQuestionIndex = 0;
  currentLScore = 0;

  document.getElementById("quiz-level-controls").style.display = "none";
  document.getElementById("l-quiz-result").style.display = "none";
  document.getElementById("listening-quiz-container").style.display = "block";

  loadListeningQuestion();
}

function loadListeningQuestion() {
  const questionData = listeningQuizData[currentLQuizLevel][currentLQuestionIndex];
  currentLAudioText = questionData.audio;
  currentLCorrectIndex = questionData.correct;

  document.getElementById("l-quiz-progress").innerText = `Question ${currentLQuestionIndex + 1}/20`;
  document.getElementById("l-quiz-score").innerText = `Score: ${currentLScore}`;

  const optionsContainer = document.getElementById("l-quiz-options");
  optionsContainer.innerHTML = ""; // Limpa opções anteriores

  questionData.options.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "l-option-btn";
    btn.innerText = optText;
    btn.onclick = () => checkListeningAnswer(index, btn);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("l-next-btn").style.display = "none";

  // Opcional: tocar o áudio automaticamente ao carregar a questão
  // playQuizAudio();
}

function playQuizAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(currentLAudioText);
    msg.lang = "en-US";
    msg.rate = 0.85; // Velocidade ideal para dictation/listening didático
    window.speechSynthesis.speak(msg);
  }
}

function checkListeningAnswer(selectedIndex, clickedBtn) {
  const buttons = document.querySelectorAll(".l-option-btn");

  // Desabilita todos os botões após o clique
  buttons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === currentLCorrectIndex) {
    clickedBtn.classList.add("l-correct");
    currentLScore++;
    document.getElementById("l-quiz-score").innerText = `Score: ${currentLScore}`;
  } else {
    clickedBtn.classList.add("l-wrong");
    // Mostra qual era a correta
    buttons[currentLCorrectIndex].classList.add("l-correct");
  }

  document.getElementById("l-next-btn").style.display = "block";
}

function nextListeningQuestion() {
  currentLQuestionIndex++;

  if (currentLQuestionIndex < listeningQuizData[currentLQuizLevel].length) {
    loadListeningQuestion();
  } else {
    showListeningResult();
  }
}

function showListeningResult() {
  document.getElementById("listening-quiz-container").style.display = "none";
  document.getElementById("l-quiz-result").style.display = "block";

  const percentage = (currentLScore / 20) * 100;
  document.getElementById("l-final-score-text").innerHTML = `
    🎉 Quiz Completed!<br><br>
    Your Score: <strong>${currentLScore} / 20</strong><br>
    <span style="font-size: 1.2rem;">${percentage.toFixed(0)}%</span>
  `;
}
