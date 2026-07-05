// ==========================================
// EMILY'S READING LIBRARY - A1 → C1
// Imported from assets/data/emilyStories.js
// ==========================================

// Dicionário avançado com dados semânticos ricos
// Usado para B1+ com colocações, registro, frequência
const advancedDictionary = {
  B1: {
    confidence: {
      ipa: "/kənˈfɪdəns/",
      type: "noun",
      pt: "confiança",
      definition: "A feeling or belief that you can do something well or that something will be successful.",
      register: "neutral",
      frequency: "high",
      collocations: [
        { phrase: "gain confidence", meaning: "desenvolver confiança" },
        { phrase: "lack confidence", meaning: "carecer de confiança" },
        { phrase: "build confidence", meaning: "construir confiança" },
        { phrase: "with confidence", meaning: "com confiança" }
      ],
      synonyms: [
        { word: "assurance", intensity: "strong" },
        { word: "self-belief", intensity: "medium" },
        { word: "certainty", intensity: "strong" }
      ],
      antonyms: ["doubt", "uncertainty", "hesitation"],
      examples: [
        {
          en: "Emily spoke with confidence during the interview.",
          pt: "Emily falou com confiança durante a entrevista.",
          context: "professional"
        },
        {
          en: "Building confidence takes time and practice.",
          pt: "Construir confiança leva tempo e prática.",
          context: "academic"
        }
      ],
      etymology: "From Latin confidentia (trust, reliance)"
    },
    adventure: {
      ipa: "/ədˈventʃər/",
      type: "noun",
      pt: "aventura",
      definition: "An exciting or unusual experience; a daring or risky undertaking.",
      register: "neutral",
      frequency: "high",
      collocations: [
        { phrase: "embark on an adventure", meaning: "começar uma aventura" },
        { phrase: "seek adventure", meaning: "buscar aventura" },
        { phrase: "spirit of adventure", meaning: "espírito de aventura" }
      ],
      synonyms: [
        { word: "expedition", intensity: "medium" },
        { word: "journey", intensity: "medium" },
        { word: "quest", intensity: "strong" }
      ],
      antonyms: ["routine", "monotony"],
      examples: [
        {
          en: "Her solo trip to Edinburgh was an unforgettable adventure.",
          pt: "Sua viagem solo para Edimburgo foi uma aventura inesquecível.",
          context: "narrative"
        }
      ]
    },
    challenge: {
      ipa: "/ˈtʃælɪndʒ/",
      type: "noun",
      pt: "desafio",
      definition: "A difficult task or problem; to invite someone to try something difficult.",
      register: "neutral",
      frequency: "very-high",
      collocations: [
        { phrase: "face a challenge", meaning: "enfrentar um desafio" },
        { phrase: "overcome a challenge", meaning: "superar um desafio" },
        { phrase: "rise to the challenge", meaning: "estar à altura do desafio" },
        { phrase: "take on a challenge", meaning: "aceitar um desafio" }
      ],
      synonyms: [
        { word: "difficulty", intensity: "medium" },
        { word: "obstacle", intensity: "medium" },
        { word: "problem", intensity: "low" }
      ],
      antonyms: ["advantage", "ease"],
      examples: [
        {
          en: "Every difficulty she faced became another step toward success.",
          pt: "Cada dificuldade que ela enfrentou tornou-se outro passo rumo ao sucesso.",
          context: "motivational"
        }
      ]
    },
    discover: {
      ipa: "/dɪˈskʌvər/",
      type: "verb",
      pt: "descobrir",
      definition: "To find, learn, or become aware of something for the first time.",
      register: "neutral",
      frequency: "very-high",
      collocations: [
        { phrase: "discover a place", meaning: "descobrir um lugar" },
        { phrase: "discover oneself", meaning: "se descobrir" },
        { phrase: "discover that", meaning: "descobrir que" }
      ],
      synonyms: [
        { word: "find", intensity: "low" },
        { word: "uncover", intensity: "medium" },
        { word: "explore", intensity: "medium" }
      ],
      antonyms: ["hide", "conceal"],
      examples: [
        {
          en: "She discovered that talking to local people often taught her more.",
          pt: "Ela descobriu que conversar com pessoas locais geralmente a ensinava mais.",
          context: "narrative"
        }
      ]
    },
    hesitate: {
      ipa: "/ˈhezɪteɪt/",
      type: "verb",
      pt: "hesitar",
      definition: "To pause or be slow in acting or speaking, typically from uncertainty or shyness.",
      register: "neutral",
      frequency: "high",
      collocations: [
        { phrase: "hesitate to do something", meaning: "hesitar em fazer algo" },
        { phrase: "without hesitation", meaning: "sem hesitação" }
      ],
      synonyms: [
        { word: "pause", intensity: "low" },
        { word: "waver", intensity: "medium" },
        { word: "doubt", intensity: "medium" }
      ],
      antonyms: ["commit", "decide", "proceed"],
      examples: [
        {
          en: "She hesitated less and smiled more while speaking.",
          pt: "Ela hesitava menos e sorria mais enquanto falava.",
          context: "narrative"
        }
      ]
    }
  },
  B2: {
    career: {
      ipa: "/kəˈrɪr/",
      type: "noun",
      pt: "carreira",
      definition: "The work or profession that someone does for a significant period of their life.",
      register: "neutral",
      frequency: "very-high",
      collocations: [
        { phrase: "build a career", meaning: "construir uma carreira" },
        { phrase: "pursue a career", meaning: "seguir uma carreira" },
        { phrase: "career path", meaning: "trajetória profissional" }
      ],
      synonyms: [
        { word: "profession", intensity: "medium" },
        { word: "occupation", intensity: "medium" },
        { word: "vocation", intensity: "strong" }
      ],
      antonyms: ["unemployment"],
      examples: [
        {
          en: "Emily began thinking seriously about her career after graduation.",
          pt: "Emily começou a pensar seriamente sobre sua carreira depois da formatura.",
          context: "professional"
        }
      ]
    },
    leadership: {
      ipa: "/ˈliːdərʃɪp/",
      type: "noun",
      pt: "liderança",
      definition: "The ability to guide, influence, or organize people toward a shared goal.",
      register: "professional",
      frequency: "high",
      collocations: [
        { phrase: "show leadership", meaning: "demonstrar liderança" },
        { phrase: "leadership skills", meaning: "habilidades de liderança" },
        { phrase: "strong leadership", meaning: "liderança forte" }
      ],
      synonyms: [
        { word: "guidance", intensity: "medium" },
        { word: "management", intensity: "medium" },
        { word: "direction", intensity: "low" }
      ],
      antonyms: ["followership", "mismanagement"],
      examples: [
        {
          en: "They discussed teamwork, problem-solving, leadership, communication, and future goals.",
          pt: "Eles discutiram trabalho em equipe, resolução de problemas, liderança, comunicação e objetivos futuros.",
          context: "interview"
        }
      ]
    },
    communication: {
      ipa: "/kəˌmjuːnɪˈkeɪʃən/",
      type: "noun",
      pt: "comunicação",
      definition: "The process of sharing information, ideas, or feelings clearly with others.",
      register: "neutral",
      frequency: "very-high",
      collocations: [
        { phrase: "clear communication", meaning: "comunicação clara" },
        { phrase: "communication skills", meaning: "habilidades de comunicação" },
        { phrase: "effective communication", meaning: "comunicação eficaz" }
      ],
      synonyms: [
        { word: "interaction", intensity: "medium" },
        { word: "exchange", intensity: "medium" },
        { word: "dialogue", intensity: "medium" }
      ],
      antonyms: ["silence", "miscommunication"],
      examples: [
        {
          en: "Her ability to communicate clearly mattered just as much as grammar.",
          pt: "Sua capacidade de se comunicar claramente importava tanto quanto a gramática.",
          context: "professional"
        }
      ]
    },
    teamwork: {
      ipa: "/ˈtiːmwɜːrk/",
      type: "noun",
      pt: "trabalho em equipe",
      definition: "The ability of a group to work together effectively toward a common objective.",
      register: "professional",
      frequency: "high",
      collocations: [
        { phrase: "promote teamwork", meaning: "promover trabalho em equipe" },
        { phrase: "teamwork skills", meaning: "habilidades de trabalho em equipe" },
        { phrase: "effective teamwork", meaning: "trabalho em equipe eficaz" }
      ],
      synonyms: [
        { word: "collaboration", intensity: "medium" },
        { word: "cooperation", intensity: "medium" }
      ],
      antonyms: ["isolation", "individualism"],
      examples: [
        {
          en: "The interviewer wanted examples of teamwork under pressure.",
          pt: "O entrevistador queria exemplos de trabalho em equipe sob pressão.",
          context: "interview"
        }
      ]
    },
    opportunity: {
      ipa: "/ˌɑːpərˈtuːnəti/",
      type: "noun",
      pt: "oportunidade",
      definition: "A situation that makes it possible to do something useful, important, or desirable.",
      register: "neutral",
      frequency: "very-high",
      collocations: [
        { phrase: "career opportunity", meaning: "oportunidade de carreira" },
        { phrase: "training opportunity", meaning: "oportunidade de treinamento" },
        { phrase: "take an opportunity", meaning: "aproveitar uma oportunidade" }
      ],
      synonyms: [
        { word: "chance", intensity: "low" },
        { word: "opening", intensity: "medium" },
        { word: "possibility", intensity: "medium" }
      ],
      antonyms: ["obstacle", "setback"],
      examples: [
        {
          en: "An interview is also your opportunity to evaluate the company.",
          pt: "Uma entrevista também é sua oportunidade de avaliar a empresa.",
          context: "professional"
        }
      ]
    },
    pressure: {
      ipa: "/ˈpreʃər/",
      type: "noun",
      pt: "pressão",
      definition: "A stressful demand or difficult situation that requires calm action or a quick response.",
      register: "neutral",
      frequency: "high",
      collocations: [
        { phrase: "under pressure", meaning: "sob pressão" },
        { phrase: "handle pressure", meaning: "lidar com pressão" },
        { phrase: "time pressure", meaning: "pressão de tempo" }
      ],
      synonyms: [
        { word: "stress", intensity: "medium" },
        { word: "strain", intensity: "medium" },
        { word: "tension", intensity: "medium" }
      ],
      antonyms: ["ease", "relief"],
      examples: [
        {
          en: "Her calm attitude under pressure impressed the company.",
          pt: "Sua atitude calma sob pressão impressionou a empresa.",
          context: "professional"
        }
      ]
    }
  },
  C1: {
    infrastructure: {
      ipa: "/ˈɪnfrəstrʌktʃər/",
      type: "noun",
      pt: "infraestrutura",
      definition: "The basic systems, services, and facilities needed for an area or organization to operate.",
      register: "formal",
      frequency: "very-high",
      collocations: [
        { phrase: "digital infrastructure", meaning: "infraestrutura digital" },
        { phrase: "infrastructure failure", meaning: "falha de infraestrutura" },
        { phrase: "critical infrastructure", meaning: "infraestrutura crítica" }
      ],
      synonyms: [
        { word: "framework", intensity: "medium" },
        { word: "foundation", intensity: "medium" },
        { word: "system", intensity: "low" }
      ],
      antonyms: ["superficiality"],
      examples: [
        {
          en: "A massive failure had disrupted much of the world's digital infrastructure.",
          pt: "Uma falha massiva havia interrompido grande parte da infraestrutura digital mundial.",
          context: "academic"
        }
      ],
      etymology: "From Latin infra (below) + structure"
    },
    disrupt: {
      ipa: "/dɪsˈrʌpt/",
      type: "verb",
      pt: "interromper, perturbar",
      definition: "To break apart or cause to cease being continuous; to interrupt.",
      register: "formal",
      frequency: "high",
      collocations: [
        { phrase: "disrupt services", meaning: "interromper serviços" },
        { phrase: "disrupt the market", meaning: "perturbar o mercado" },
        { phrase: "severely disrupted", meaning: "severamente perturbado" }
      ],
      synonyms: [
        { word: "interrupt", intensity: "medium" },
        { word: "disturb", intensity: "low" },
        { word: "undermine", intensity: "strong" }
      ],
      antonyms: ["maintain", "continue"],
      examples: [
        {
          en: "The internet outage had disrupted much of daily life.",
          pt: "A falha de internet havia perturbado grande parte da vida diária.",
          context: "narrative"
        }
      ]
    },
    reclaim: {
      ipa: "/rɪˈkleɪm/",
      type: "verb",
      pt: "retomar, recuperar",
      definition: "To take back or recover something; to claim or assert ownership of something again.",
      register: "formal",
      frequency: "medium-high",
      collocations: [
        { phrase: "reclaim attention", meaning: "recuperar atenção" },
        { phrase: "reclaim time", meaning: "recuperar tempo" },
        { phrase: "reclaim identity", meaning: "retomar identidade" }
      ],
      synonyms: [
        { word: "recover", intensity: "medium" },
        { word: "retrieve", intensity: "medium" },
        { word: "regain", intensity: "medium" }
      ],
      antonyms: ["lose", "surrender"],
      examples: [
        {
          en: "She was reclaiming her attention from digital overload.",
          pt: "Ela estava recuperando sua atenção do excesso digital.",
          context: "reflective"
        }
      ]
    },
    simultaneously: {
      ipa: "/ˌsɪməlˈteɪniəsli/",
      type: "adverb",
      pt: "simultaneamente",
      definition: "Occurring, done, or existing at the same time.",
      register: "formal",
      frequency: "high",
      collocations: [
        { phrase: "simultaneously uncomfortable and relieved", meaning: "simultaneamente desconfortável e aliviado" }
      ],
      synonyms: [
        { word: "concurrently", intensity: "formal" },
        { word: "at the same time", intensity: "informal" },
        { word: "together", intensity: "low" }
      ],
      antonyms: ["consecutively", "separately"],
      examples: [
        {
          en: "People reported feeling simultaneously uncomfortable and relieved.",
          pt: "As pessoas relataram sentir-se simultaneamente desconfortáveis e aliviadas.",
          context: "academic"
        }
      ]
    },
    resilience: {
      ipa: "/rɪˈzɪliəns/",
      type: "noun",
      pt: "resiliência",
      definition: "The capacity to recover quickly from difficulties; toughness.",
      register: "formal",
      frequency: "very-high",
      collocations: [
        { phrase: "show resilience", meaning: "demonstrar resiliência" },
        { phrase: "build resilience", meaning: "construir resiliência" },
        { phrase: "emotional resilience", meaning: "resiliência emocional" }
      ],
      synonyms: [
        { word: "toughness", intensity: "low" },
        { word: "endurance", intensity: "medium" },
        { word: "adaptability", intensity: "medium" }
      ],
      antonyms: ["fragility", "vulnerability"],
      examples: [
        {
          en: "The event demonstrated society's resilience in times of crisis.",
          pt: "O evento demonstrou a resiliência da sociedade em tempos de crise.",
          context: "academic"
        }
      ]
    }
  }
};


// Percentual pedagógico de palavras com tradução visível por nível.
// As palavras mais básicas são ocultadas primeiro em níveis avançados.
const translationCoverageByLevel = { A1: 1, A2: 0.85, B1: 0.75, B2: 0.6, C1: 0.5 };

const commonWordRank = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on", "with",
  "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if",
  "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him",
  "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than",
  "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two",
  "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give",
  "day", "most", "us", "is", "are", "was", "were", "am", "has", "had", "did", "does"
];
const commonWordScore = new Map(commonWordRank.map((word, index) => [word, index]));

const contextualTranslations = {
  m: "sou, estou", s: "possessivo / é", already: "já", animals: "animais", another: "outro", beautiful: "bonito", ben: "Ben", board: "quadro", break: "intervalo", brushes: "escova", confident: "confiante", dancing: "dançar", drawing: "desenhar", dressed: "vestido", eat: "comer", eggs: "ovos", end: "fim", finishes: "termina", friendly: "amigável", gets: "fica, pega", goes: "vai", going: "indo", introduces: "apresenta", invites: "convida", laughing: "rindo", leaves: "folhas", luck: "sorte", mom: "mãe", monday: "segunda-feira", more: "mais", mrs: "Sra.", much: "muito", my: "meu, minha", old: "velho", others: "outros", our: "nosso", plays: "brinca", sandwich: "sanduíche", sit: "sentar", town: "cidade pequena", twelve: "doze", up: "para cima", wakes: "acorda", want: "querer", welcome: "bem-vindo", what: "o que", years: "anos", your: "seu, sua",
  a: "um, uma", about: "sobre", after: "depois", again: "novamente", airport: "aeroporto", all: "todos", almost: "quase", also: "também", always: "sempre", an: "um, uma", and: "e", answers: "responde", apple: "maçã", are: "são, estão", arrives: "chega", at: "em", back: "de volta", be: "ser, estar", became: "tornou-se", because: "porque", become: "tornar-se", before: "antes", began: "começou", believe: "acreditar", better: "melhor", big: "grande", book: "livro", books: "livros", boy: "menino", bread: "pão", breakfast: "café da manhã", brother: "irmão", brown: "Brown", but: "mas", buys: "compra", by: "por", can: "pode", changed: "mudou", city: "cidade", class: "aula, turma", classroom: "sala de aula", cloudy: "nublado", colder: "mais frio", comfortable: "confortável", completely: "completamente", conversation: "conversa", could: "poderia", day: "dia", decided: "decidiu", did: "fez", difficult: "difícil", do: "fazer", dog: "cachorro", door: "porta", down: "para baixo", dream: "sonho", drives: "dirige", during: "durante", eats: "come", egg: "ovo", emily: "Emily", english: "inglês", enjoys: "gosta", evening: "noite", every: "todo", excited: "animada", face: "rosto", family: "família", favorite: "favorito", feels: "sente", finally: "finalmente", first: "primeiro", flowers: "flores", for: "para", friend: "amigo", friends: "amigos", from: "de", garden: "jardim", girl: "menina", go: "ir", good: "bom", great: "ótimo", green: "verde", had: "tinha", hand: "mão", happy: "feliz", has: "tem", have: "ter", he: "ele", her: "dela", here: "aqui", hi: "oi", hobbies: "hobbies", home: "casa", homework: "dever de casa", how: "como", i: "eu", in: "em", is: "é, está", it: "isso", juice: "suco", knows: "sabe", laughs: "ri", learn: "aprender", lesson: "aula", like: "gostar", likes: "gosta", lily: "Lily", little: "pequeno", lives: "mora", london: "Londres", look: "olhar", looks: "olha", loves: "ama", lunch: "almoço", make: "fazer", many: "muitos", max: "Max", me: "me, mim", meet: "conhecer", morning: "manhã", mother: "mãe", music: "música", name: "nome", nervous: "nervosa", new: "novo", next: "próximo", nice: "prazeroso", no: "não", notebook: "caderno", of: "de", on: "em", one: "um", opens: "abre", or: "ou", orange: "laranja", other: "outro", outside: "fora", parents: "pais", pencil: "lápis", pink: "rosa", plant: "planta", plants: "plantas", play: "brincar, tocar", playing: "brincando", quietly: "baixinho", raises: "levanta", read: "ler", reading: "leitura", runs: "corre", says: "diz", school: "escola", science: "ciências", sees: "vê", setting: "se pondo", she: "ela", shows: "mostra", sits: "senta", sky: "céu", sleep: "dormir", small: "pequeno", smile: "sorriso", smiles: "sorri", so: "então", some: "alguns", soon: "logo", starts: "começa", student: "aluno", students: "alunos", sun: "sol", talk: "conversar", talking: "conversando", teacher: "professor", teeth: "dentes", thank: "obrigado", that: "que", the: "o, a, os, as", their: "deles", them: "eles", then: "então", there: "lá", they: "eles", think: "achar", this: "este", to: "para", today: "hoje", together: "juntos", tomorrow: "amanhã", too: "também", trip: "viagem", very: "muito", walks: "caminha", wanted: "queria", washes: "lava", was: "era, estava", week: "semana", when: "quando", with: "com", words: "palavras", world: "mundo", writes: "escreve", yes: "sim", you: "você"
};

function getTextWords(rawText) {
  return [...new Set(rawText.toLowerCase().match(/[a-z]+/g) || [])];
}

function getWordDifficulty(word, targetWords) {
  const commonRank = commonWordScore.has(word) ? commonWordScore.get(word) : commonWordRank.length + 25;
  const commonPenalty = commonWordRank.length - Math.min(commonRank, commonWordRank.length);
  const lengthBonus = Math.min(word.length, 14) * 4;
  const targetBonus = targetWords.has(word) ? 160 : 0;
  return targetBonus + lengthBonus - commonPenalty;
}

function getWordLevel(word, targetWords, storyLevel) {
  if (targetWords.has(word)) return storyLevel;
  if (commonWordScore.has(word) && commonWordScore.get(word) < 80) return "A1";
  if (word.length <= 4) return "A1";
  if (word.length <= 7) return "A2";
  if (word.length <= 10) return "B1";
  return "B2";
}

function getIpaFallback(word) {
  return `/${word}/`;
}

// ==========================================
// BANCO DE DADOS DE LEITURA (A1 → C1)
// Integrado com emilyStories.js
// ==========================================

let readingData = {};

// Função para carregar dados das histórias da Emily
function loadEmilyStories() {
  if (typeof emilyStories !== 'undefined') {
    Object.keys(emilyStories).forEach(level => {
      const story = emilyStories[level];
      readingData[level] = {
        title: story.title,
        text: story.text,
        summary: `${story.title} (${level}) - ${story.keyThemes.join(", ")}`,
        vocabularyList: story.coreVocabulary.slice(0, 5).map(v => ({
          word: v.word,
          def: `${v.type}: ${v.pt}`
        })),
        grammarAnalysis: `Neste texto ${level}, o aluno pratica: ${story.grammarFocus.slice(0, 3).join(", ")}.`,
        quiz: {
          question: `Qual é o tema principal de "${story.title}"?`,
          options: story.keyThemes
        },
        dictionary: buildDictionary(story.coreVocabulary, level, story.text),
        level: level,
        estimatedWords: story.estimatedWords
      };
    });
  }
}

// Constrói dicionário com dados contextuais
function buildDictionary(vocabArray, level, rawText = "") {
  const dict = {};
  const targetWords = new Set(vocabArray.map(v => v.word.toLowerCase()));
  const uniqueWords = getTextWords(rawText);
  const coverage = translationCoverageByLevel[level] || 1;
  const visibleCount = Math.ceil(uniqueWords.length * coverage);
  const visibleWords = new Set(
    [...uniqueWords]
      .sort((a, b) => getWordDifficulty(b, targetWords) - getWordDifficulty(a, targetWords))
      .slice(0, visibleCount)
  );

  vocabArray.forEach(v => {
    const key = v.word.toLowerCase();
    const advanced = advancedDictionary[level]?.[key];
    visibleWords.add(key);

    dict[key] = {
      ipa: advanced?.ipa || getIpaFallback(v.word),
      type: v.type,
      pt: v.pt,
      wordLevel: level,
      showTranslation: true,
      ex: advanced?.examples?.[0]?.en || "Exemplo não disponível.",
      ex_pt: advanced?.examples?.[0]?.pt || "Exemplo não disponível.",
      ...(advanced && {
        definition: advanced.definition,
        register: advanced.register,
        frequency: advanced.frequency,
        collocations: advanced.collocations,
        synonyms: advanced.synonyms,
        antonyms: advanced.antonyms,
        etymology: advanced.etymology
      })
    };
  });

  uniqueWords.forEach(word => {
    if (dict[word]) {
      dict[word].showTranslation = visibleWords.has(word);
      return;
    }

    const inferredLevel = getWordLevel(word, targetWords, level);
    dict[word] = {
      ipa: getIpaFallback(word),
      type: "word",
      pt: contextualTranslations[word] || "tradução contextual em revisão",
      wordLevel: inferredLevel,
      showTranslation: visibleWords.has(word),
      ex: "Exemplo contextual disponível no texto acima.",
      ex_pt: "Use o contexto da frase para revisar esta palavra."
    };
  });

  return dict;
}

let currentRLevel = "A1";
let lastClickedWord = "";
let textContentArray = [];

// ==========================================
// FUNÇÕES PRINCIPAIS
// ==========================================

function loadReadingLevel(level) {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  readingAudioState.playing = false;
  readingAudioState.paused = false;
  readingAudioState.startIndex = 0;
  updateReadingPlayer("▶ Ouvir", 0);

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
    renderInteractiveText(data.text, data.dictionary, level);
  }

  document.querySelectorAll(".read-controls button").forEach((button) => {
    button.classList.toggle("active-btn", button.dataset.level === level);
  });
}

function renderInteractiveText(rawText, dictionary, level) {
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
      span.dataset.level = level;
      span.onclick = (event) => handleWordClick(event, cleanWord, dictEntry, item, level);
      textArea.appendChild(span);
      textContentArray.push({ start: tokenIndex, end: tokenIndex + item.length, element: span });
    } else {
      textArea.appendChild(document.createTextNode(item));
    }

    cursor = tokenIndex + item.length;
    textArea.appendChild(document.createTextNode(" "));
  });
}

function handleWordClick(event, cleanWord, dictEntry, originalText, level) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(originalText);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  document.querySelectorAll(".clickable-word").forEach((element) => element.classList.remove("highlight-word"));
  event.currentTarget.classList.add("highlight-word");
  openWordCard(cleanWord, dictEntry, originalText, level);
}

function openWordCard(cleanWord, dictEntry, originalText, level) {
  const card = document.getElementById("smart-word-card");
  const isAdvanced = level && ["B1", "B2", "C1"].includes(level);
  const advancedSection = card.querySelector(".advanced-word-data");
  if (advancedSection) advancedSection.remove();

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
    const translationElement = document.getElementById("card-pt");
    if (dictEntry.showTranslation === false) {
      translationElement.innerHTML = `<span class="translation-hidden">Tradução oculta no nível ${level}. Tente deduzir pelo contexto!</span>`;
    } else {
      translationElement.innerText = dictEntry.pt;
    }
    document.getElementById("card-ex-en").innerText = dictEntry.ex;
    document.getElementById("card-ex-pt").innerText = dictEntry.ex_pt;

    // Advanced content for B1+
    if (isAdvanced && dictEntry.definition) {
      updateAdvancedWordCard(dictEntry, card);
    }
  }

  lastClickedWord = originalText;
  card.style.display = "flex";
}

function updateAdvancedWordCard(dictEntry, card) {
  // Criar seção adicional para dados avançados
  let advancedSection = card.querySelector(".advanced-word-data");
  if (!advancedSection) {
    advancedSection = document.createElement("div");
    advancedSection.className = "advanced-word-data";
    card.querySelector(".word-card-content").appendChild(advancedSection);
  }

  let html = '';

  // Definition
  if (dictEntry.definition) {
    html += `<div class="card-definition"><strong>Definição:</strong><p>${dictEntry.definition}</p></div>`;
  }

  // Collocations
  if (dictEntry.collocations && dictEntry.collocations.length > 0) {
    html += `<div class="card-collocations"><strong>Colocações:</strong><ul>`;
    dictEntry.collocations.forEach(c => {
      html += `<li><em>${c.phrase}</em> - ${c.meaning}</li>`;
    });
    html += `</ul></div>`;
  }

  // Synonyms & Antonyms
  if (dictEntry.synonyms && dictEntry.synonyms.length > 0) {
    html += `<div class="card-synonyms"><strong>Sinônimos:</strong> ${dictEntry.synonyms.map(s => s.word).join(", ")}</div>`;
  }
  if (dictEntry.antonyms && dictEntry.antonyms.length > 0) {
    html += `<div class="card-antonyms"><strong>Antônimos:</strong> ${dictEntry.antonyms.join(", ")}</div>`;
  }

  // Etymology
  if (dictEntry.etymology) {
    html += `<div class="card-etymology"><strong>Etimologia:</strong> ${dictEntry.etymology}</div>`;
  }

  // Register & Frequency
  if (dictEntry.register || dictEntry.frequency) {
    html += `<div class="card-meta">`;
    if (dictEntry.register) html += `<span class="badge-register">${dictEntry.register}</span>`;
    if (dictEntry.frequency) html += `<span class="badge-frequency">${dictEntry.frequency}</span>`;
    html += `</div>`;
  }

  advancedSection.innerHTML = html;
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

let currentReadingUtterance = null;
let readingAudioState = { playing: false, paused: false, slow: false, startIndex: 0 };

function updateReadingPlayer(playText = "▶ Ouvir", progress = null) {
  const btnPlay = document.getElementById("btn-reading-play");
  const btnSpeed = document.getElementById("btn-reading-speed");
  const progressBar = document.getElementById("reading-progress");
  if (btnPlay) btnPlay.innerText = playText;
  if (btnSpeed) btnSpeed.innerText = readingAudioState.slow ? "0.75x" : "1x";
  if (progressBar && progress !== null) progressBar.value = String(Math.max(0, Math.min(100, progress)));
}

function toggleReadingAudio() {
  if (!("speechSynthesis" in window)) {
    document.getElementById("btn-teacher-mode").style.display = "block";
    return;
  }

  if (readingAudioState.playing && !readingAudioState.paused) {
    window.speechSynthesis.pause();
    readingAudioState.paused = true;
    updateReadingPlayer("▶ Continuar");
    return;
  }

  if (readingAudioState.playing && readingAudioState.paused) {
    window.speechSynthesis.resume();
    readingAudioState.paused = false;
    updateReadingPlayer("⏸ Pausar");
    return;
  }

  playFullText(readingAudioState.startIndex || 0);
}

function toggleReadingSpeed() {
  readingAudioState.slow = !readingAudioState.slow;
  if (readingAudioState.playing) {
    const currentIndex = readingAudioState.startIndex || 0;
    window.speechSynthesis.cancel();
    playFullText(currentIndex);
  } else {
    updateReadingPlayer("▶ Ouvir");
  }
}

function bindReadingProgress() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;
  progressBar.addEventListener("input", () => {
    if (!readingData[currentRLevel]) return;
    const wordElements = document.querySelectorAll(".clickable-word");
    const nextIndex = Math.floor((Number(progressBar.value) / 100) * Math.max(wordElements.length - 1, 0));
    readingAudioState.startIndex = nextIndex;
    if (readingAudioState.playing) {
      window.speechSynthesis.cancel();
      playFullText(nextIndex);
    }
  });
}

function playFullText(startIndex = 0) {
  if (!readingData[currentRLevel]) return;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();

    const text = readingData[currentRLevel].text;
    const wordElements = document.querySelectorAll(".clickable-word");
    const startChar = textContentArray[startIndex]?.start || 0;
    const utterance = new SpeechSynthesisUtterance(text.slice(startChar));
    utterance.lang = "en-US";
    utterance.rate = readingAudioState.slow ? 0.75 : 0.95;
    currentReadingUtterance = utterance;
    readingAudioState.playing = true;
    readingAudioState.paused = false;
    readingAudioState.startIndex = startIndex;
    updateReadingPlayer("⏸ Pausar", wordElements.length ? (startIndex / wordElements.length) * 100 : 0);

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        clearReadingHighlights();
        const index = getWordIndexAtChar(startChar + event.charIndex);
        if (index >= 0) {
          readingAudioState.startIndex = index;
          if (wordElements[index]) wordElements[index].classList.add("highlight-word");
          updateReadingPlayer("⏸ Pausar", wordElements.length ? (index / wordElements.length) * 100 : 0);
        }
      }
    };

    utterance.onend = () => {
      clearReadingHighlights();
      readingAudioState.playing = false;
      readingAudioState.paused = false;
      readingAudioState.startIndex = 0;
      updateReadingPlayer("▶ Ouvir", 100);
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
      <p>${data.summary || "Resumo do texto sendo gerado..."}</p>
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
    alert(`"${lastClickedWord}" salvo no seu Vocabulário!`);
  }
}

function translateType(type) {
  const types = {
    verb: "Verbo",
    noun: "Substantivo",
    adj: "Adjetivo",
    adv: "Advérbio",
    prep: "Preposição",
    phrase: "Expressão"
  };
  return types[type] || "Palavra";
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadEmilyStories();
  bindReadingProgress();
  loadReadingLevel("A1");
});
