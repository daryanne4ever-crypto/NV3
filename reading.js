// ==========================================
// BANCO DE DADOS DE LEITURA & DICIONÁRIO
// ==========================================
const readingData = {
  A1: {
    title: "The Big House",
    text: "Tom walked slowly through the town.",
    summary: "Tom caminha lentamente pela cidade, permitindo que o aluno observe uma frase simples no passado.",
    vocabularyList: [
      { word: "Walked", def: "Verbo no Simple Past: caminhou / andou." },
      { word: "Slowly", def: "Advérbio que descreve como a ação aconteceu." },
      { word: "Through", def: "Preposição usada para indicar movimento através de um lugar." }
    ],
    grammarAnalysis: "O texto usa Simple Past com 'walked' e um advérbio de modo ('slowly') para mostrar como a ação aconteceu.",
    quiz: {
      question: "Como Tom caminhou pela cidade?",
      options: ["Quickly", "Slowly", "Warmly"]
    },
    dictionary: {
      tom: { ipa: "/tɒm/", type: "noun", pt: "Tom (nome)", ex: "Tom is my friend.", ex_pt: "Tom é meu amigo." },
      walked: { ipa: "/wɔːkt/", type: "verb", pt: "caminhou / andou", ex: "He walked very fast.", ex_pt: "Ele andou muito rápido." },
      slowly: { ipa: "/ˈsləʊli/", type: "adv", pt: "lentamente", ex: "She spoke slowly.", ex_pt: "Ela falou lentamente." },
      through: { ipa: "/θruː/", type: "prep", pt: "através / pela", ex: "We drove through the city.", ex_pt: "Nós dirigimos pela cidade." },
      the: { ipa: "/ðə/", type: "default", pt: "o / a / os / as", ex: "The book is here.", ex_pt: "O livro está aqui." },
      town: { ipa: "/taʊn/", type: "noun", pt: "cidade", ex: "It is a small town.", ex_pt: "É uma cidade pequena." }
    }
  },
  B1: {
    title: "Linda at the Reception",
    text: "Linda welcomed the guests warmly at the front desk.",
    summary: "Neste texto, acompanhamos Linda, recepcionista do hotel, recebendo hóspedes com hospitalidade.",
    vocabularyList: [
      { word: "Welcomed", def: "Acolheu / recebeu calorosamente." },
      { word: "Guests", def: "Hóspedes ou convidados." },
      { word: "Front desk", def: "Recepção do hotel." }
    ],
    grammarAnalysis: "O texto utiliza o Simple Past ('welcomed') para narrar uma ação concluída no cotidiano profissional de hotelaria.",
    quiz: {
      question: "Como Linda recebeu os hóspedes?",
      options: ["Coldly", "Warmly", "Quickly"]
    },
    dictionary: {
      linda: { ipa: "/ˈlɪndə/", type: "noun", pt: "Linda (nome)", ex: "Linda is working.", ex_pt: "Linda está trabalhando." },
      welcomed: { ipa: "/ˈwɛlkəmd/", type: "verb", pt: "recebeu / deu boas-vindas", ex: "They welcomed us.", ex_pt: "Eles nos deram boas-vindas." },
      the: { ipa: "/ðə/", type: "default", pt: "o / a / os / as", ex: "The guests arrived.", ex_pt: "Os hóspedes chegaram." },
      guests: { ipa: "/ɡɛsts/", type: "noun", pt: "hóspedes / convidados", ex: "The guests arrived early.", ex_pt: "Os hóspedes chegaram cedo." },
      warmly: { ipa: "/ˈwɔːrmli/", type: "adv", pt: "calorosamente", ex: "She smiled warmly.", ex_pt: "Ela sorriu calorosamente." },
      at: { ipa: "/æt/", type: "prep", pt: "em / no / na", ex: "Meet me at the desk.", ex_pt: "Encontre-me no balcão." },
      front: { ipa: "/frʌnt/", type: "adj", pt: "frontal / da frente", ex: "Use the front door.", ex_pt: "Use a porta da frente." },
      desk: { ipa: "/dɛsk/", type: "noun", pt: "balcão / mesa", ex: "Leave the key at the desk.", ex_pt: "Deixe a chave no balcão." }
    }
  }
};

let currentRLevel = "A1";
let lastClickedWord = "";
let textContentArray = [];

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================
function loadReadingLevel(level) {
  if (!readingData[level]) {
    currentRLevel = "";
    document.getElementById("r-title").innerText = "Nível em desenvolvimento";
    document.getElementById("r-level-badge").innerText = `⭐ ${level}`;
    document.getElementById("r-text-area").innerHTML = "<p>Este nível será liberado na próxima camada do Reading Library.</p>";
    document.getElementById("btn-teacher-mode").style.display = "none";
    closeTeacherMode();
  } else {
    currentRLevel = level;
    const data = readingData[level];
    document.getElementById("r-title").innerText = data.title;
    document.getElementById("r-level-badge").innerText = `⭐ ${level}`;
    document.getElementById("btn-teacher-mode").style.display = "none";
    closeTeacherMode();
    renderInteractiveText(data.text, data.dictionary);
  }

  document.querySelectorAll(".read-controls button").forEach((button) => {
    button.classList.toggle("active-btn", button.dataset.level === level);
  });
}

function renderInteractiveText(rawText, dictionary) {
  const textArea = document.getElementById("r-text-area");
  textArea.innerHTML = "";
  textContentArray = [];

  const wordsAndPunctuation = rawText.match(/\w+|[^\w\s]/g) || [];
  let cursor = 0;

  wordsAndPunctuation.forEach((item) => {
    const tokenIndex = rawText.indexOf(item, cursor);
    if (/\w+/.test(item)) {
      const cleanWord = item.toLowerCase();
      const dictEntry = dictionary[cleanWord];
      const span = document.createElement("span");
      span.innerText = item;
      span.classList.add("clickable-word", dictEntry ? `grammar-${dictEntry.type}` : "grammar-default");
      span.dataset.word = cleanWord;
      span.dataset.start = tokenIndex;
      span.dataset.end = tokenIndex + item.length;
      span.onclick = () => openWordCard(cleanWord, dictEntry, item);
      textArea.appendChild(span);
      textContentArray.push({ start: tokenIndex, end: tokenIndex + item.length, element: span });
    } else {
      textArea.appendChild(document.createTextNode(item));
    }

    cursor = tokenIndex + item.length;
    textArea.appendChild(document.createTextNode(" "));
  });
}

function openWordCard(cleanWord, dictEntry, originalText) {
  const card = document.getElementById("smart-word-card");

  if (!dictEntry) {
    document.getElementById("card-word").innerText = originalText;
    document.getElementById("card-ipa").innerText = "/.../";
    document.getElementById("card-type").innerText = "Palavra";
    document.getElementById("card-pt").innerText = "Tradução não mapeada.";
    document.getElementById("card-ex-en").innerText = "-";
    document.getElementById("card-ex-pt").innerText = "-";
  } else {
    document.getElementById("card-word").innerText = originalText;
    document.getElementById("card-ipa").innerText = dictEntry.ipa;
    document.getElementById("card-type").innerText = translateType(dictEntry.type);
    document.getElementById("card-pt").innerText = dictEntry.pt;
    document.getElementById("card-ex-en").innerText = dictEntry.ex;
    document.getElementById("card-ex-pt").innerText = dictEntry.ex_pt;
  }

  lastClickedWord = originalText;
  card.style.display = "flex";
}

function closeWordCard() {
  document.getElementById("smart-word-card").style.display = "none";
}

function playWordAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(lastClickedWord);
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
  }
}

function clearReadingHighlights() {
  document.querySelectorAll(".clickable-word").forEach((element) => element.classList.remove("highlight-word"));
}

function getWordIndexAtChar(charIndex) {
  return textContentArray.findIndex((item) => charIndex >= item.start && charIndex < item.end);
}

function playFullText() {
  if (!readingData[currentRLevel]) return;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const text = readingData[currentRLevel].text;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    const wordElements = document.querySelectorAll(".clickable-word");

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        clearReadingHighlights();
        const index = getWordIndexAtChar(event.charIndex);
        if (wordElements[index]) wordElements[index].classList.add("highlight-word");
      }
    };

    utterance.onend = () => {
      clearReadingHighlights();
      document.getElementById("btn-teacher-mode").style.display = "block";
    };

    window.speechSynthesis.speak(utterance);
  } else {
    document.getElementById("btn-teacher-mode").style.display = "block";
  }
}

function activateTeacherMode() {
  if (!readingData[currentRLevel]) return;

  const data = readingData[currentRLevel];
  const container = document.getElementById("teacher-content-area");
  document.getElementById("teacher-mode-container").style.display = "block";

  container.innerHTML = `
    <div class="teacher-section">
      <h4>📝 Resumo</h4>
      <p>${data.summary || "Resumo do texto sendo gerado pela IA..."}</p>
    </div>

    <div class="teacher-section">
      <h4>💡 Vocabulário & Phrasal Verbs</h4>
      <ul>${data.vocabularyList.map((item) => `<li><strong>${item.word}</strong>: ${item.def}</li>`).join("")}</ul>
    </div>

    <div class="teacher-section">
      <h4>🧠 Análise Gramatical</h4>
      <p>${data.grammarAnalysis}</p>
    </div>

    <div class="teacher-section">
      <h4>🎯 Exercício Rápido</h4>
      <p><strong>Questão:</strong> ${data.quiz.question}</p>
      <div class="quiz-options">
        ${data.quiz.options.map((option) => `<button class="btn-opt">${option}</button>`).join("")}
      </div>
    </div>
  `;
}

function closeTeacherMode() {
  document.getElementById("teacher-mode-container").style.display = "none";
}

function saveCurrentWord() {
  const savedWords = JSON.parse(localStorage.getItem("readingSavedWords") || "[]");
  if (lastClickedWord && !savedWords.includes(lastClickedWord)) {
    savedWords.push(lastClickedWord);
    localStorage.setItem("readingSavedWords", JSON.stringify(savedWords));
  }
}

function translateType(type) {
  const types = { verb: "Verbo", noun: "Substantivo", adj: "Adjetivo", adv: "Advérbio", prep: "Preposição" };
  return types[type] || "Palavra";
}

document.addEventListener("DOMContentLoaded", () => loadReadingLevel("A1"));
