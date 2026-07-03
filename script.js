// ==========================================
// 1. DADOS: 250 PALAVRAS POR NÍVEL CEFR
// ==========================================
const vocabData = {
    "A1": [
        {word: "House", trans: "Casa"}, {word: "Family", trans: "Família"}, {word: "Friend", trans: "Amigo(a)"}, {word: "School", trans: "Escola"}, {word: "Teacher", trans: "Professor(a)"},
        {word: "Student", trans: "Aluno(a)"}, {word: "Book", trans: "Livro"}, {word: "Car", trans: "Carro"}, {word: "Food", trans: "Comida"}, {word: "Water", trans: "Água"},
        {word: "Work", trans: "Trabalho; trabalhar"}, {word: "Go", trans: "Ir"}, {word: "Come", trans: "Vir"}, {word: "Eat", trans: "Comer"}, {word: "Drink", trans: "Beber"},
        {word: "Sleep", trans: "Dormir"}, {word: "Live", trans: "Morar; viver"}, {word: "Study", trans: "Estudar"}, {word: "Like", trans: "Gostar"}, {word: "Have", trans: "Ter"},
        {word: "Big", trans: "Grande"}, {word: "Small", trans: "Pequeno(a)"}, {word: "Good", trans: "Bom(boa)"}, {word: "Bad", trans: "Ruim; mau(má)"}, {word: "Happy", trans: "Feliz"},
        {word: "Sad", trans: "Triste"}, {word: "New", trans: "Novo(a)"}, {word: "Old", trans: "Velho(a); antigo(a)"}, {word: "Hot", trans: "Quente"}, {word: "Cold", trans: "Frio(a)"},
        {word: "Always", trans: "Sempre"}, {word: "Usually", trans: "Geralmente"}, {word: "Sometimes", trans: "Às vezes"}, {word: "Never", trans: "Nunca"}, {word: "Now", trans: "Agora"},
        {word: "In", trans: "Em; dentro de"}, {word: "On", trans: "Em; sobre"}, {word: "Under", trans: "Embaixo de"}, {word: "With", trans: "Com"}, {word: "From", trans: "De; vindo de"},
        {word: "And", trans: "E"}, {word: "But", trans: "Mas"}, {word: "Because", trans: "Porque"}, {word: "Or", trans: "Ou"}, {word: "Yes", trans: "Sim"},
        {word: "No", trans: "Não"}, {word: "Who", trans: "Quem"}, {word: "What", trans: "O quê; qual"}, {word: "Where", trans: "Onde"}, {word: "When", trans: "Quando"}
    ],
    "A2": [
        {word: "Travel", trans: "Viajar"}, {word: "Holiday", trans: "Férias"}, {word: "Journey", trans: "Viagem; trajeto"}, {word: "Weather", trans: "Clima; tempo"}, {word: "Restaurant", trans: "Restaurante"},
        {word: "Hospital", trans: "Hospital"}, {word: "Market", trans: "Mercado"}, {word: "Neighbor", trans: "Vizinho(a)"}, {word: "Problem", trans: "Problema"}, {word: "Question", trans: "Pergunta"},
        {word: "Arrive", trans: "Chegar"}, {word: "Leave", trans: "Sair; partir"}, {word: "Bring", trans: "Trazer"}, {word: "Choose", trans: "Escolher"}, {word: "Forget", trans: "Esquecer"},
        {word: "Remember", trans: "Lembrar"}, {word: "Need", trans: "Precisar"}, {word: "Hope", trans: "Esperar; ter esperança"}, {word: "Wear", trans: "Vestir; usar"}, {word: "Meet", trans: "Encontrar; conhecer"},
        {word: "Easy", trans: "Fácil"}, {word: "Difficult", trans: "Difícil"}, {word: "Busy", trans: "Ocupado(a)"}, {word: "Free", trans: "Livre; disponível"}, {word: "Different", trans: "Diferente"},
        {word: "Important", trans: "Importante"}, {word: "Early", trans: "Cedo"}, {word: "Late", trans: "Tarde; atrasado(a)"}, {word: "Friendly", trans: "Amigável"}, {word: "Careful", trans: "Cuidadoso(a)"},
        {word: "Already", trans: "Já"}, {word: "Still", trans: "Ainda"}, {word: "Soon", trans: "Em breve"}, {word: "Yesterday", trans: "Ontem"}, {word: "Tomorrow", trans: "Amanhã"},
        {word: "Between", trans: "Entre"}, {word: "Across", trans: "Através de"}, {word: "Behind", trans: "Atrás de"}, {word: "Without", trans: "Sem"}, {word: "During", trans: "Durante"},
        {word: "Although", trans: "Embora"}, {word: "So", trans: "Então; por isso"}, {word: "If", trans: "Se"}, {word: "Before", trans: "Antes"}, {word: "After", trans: "Depois"},
        {word: "Which", trans: "Qual; o(a) qual"}, {word: "Something", trans: "Alguma coisa"}, {word: "Someone", trans: "Alguém"}, {word: "Everyone", trans: "Todo mundo"}, {word: "Nothing", trans: "Nada"}
    ],
    "B1": [
        {word: "Achievement", trans: "Conquista"}, {word: "Experience", trans: "Experiência"}, {word: "Opportunity", trans: "Oportunidade"}, {word: "Decision", trans: "Decisão"}, {word: "Advice", trans: "Conselho"},
        {word: "Knowledge", trans: "Conhecimento"}, {word: "Environment", trans: "Meio ambiente"}, {word: "Technology", trans: "Tecnologia"}, {word: "Career", trans: "Carreira"}, {word: "Challenge", trans: "Desafio"},
        {word: "Improve", trans: "Melhorar"}, {word: "Develop", trans: "Desenvolver"}, {word: "Achieve", trans: "Alcançar; conquistar"}, {word: "Manage", trans: "Administrar; conseguir"}, {word: "Increase", trans: "Aumentar"},
        {word: "Reduce", trans: "Reduzir"}, {word: "Suggest", trans: "Sugerir"}, {word: "Avoid", trans: "Evitar"}, {word: "Support", trans: "Apoiar"}, {word: "Prepare", trans: "Preparar"},
        {word: "Successful", trans: "Bem-sucedido(a)"}, {word: "Responsible", trans: "Responsável"}, {word: "Confident", trans: "Confiante"}, {word: "Independent", trans: "Independente"}, {word: "Comfortable", trans: "Confortável"},
        {word: "Possible", trans: "Possível"}, {word: "Necessary", trans: "Necessário(a)"}, {word: "Available", trans: "Disponível"}, {word: "Similar", trans: "Semelhante"}, {word: "Useful", trans: "Útil"},
        {word: "Probably", trans: "Provavelmente"}, {word: "Recently", trans: "Recentemente"}, {word: "Especially", trans: "Especialmente"}, {word: "Finally", trans: "Finalmente"}, {word: "Instead", trans: "Em vez de"},
        {word: "Against", trans: "Contra"}, {word: "Among", trans: "Entre (vários)"}, {word: "Through", trans: "Através de"}, {word: "Towards", trans: "Em direção a"}, {word: "Beyond", trans: "Além de"},
        {word: "However", trans: "Entretanto"}, {word: "Therefore", trans: "Portanto"}, {word: "Moreover", trans: "Além disso"}, {word: "Unless", trans: "A menos que"}, {word: "While", trans: "Enquanto"},
        {word: "Anyone", trans: "Qualquer pessoa"}, {word: "Anything", trans: "Qualquer coisa"}, {word: "Neither", trans: "Nenhum dos dois"}, {word: "Either", trans: "Qualquer um dos dois"}, {word: "Several", trans: "Vários(as)"}
    ],
    "B2": [
        {word: "Awareness", trans: "Consciência"}, {word: "Behavior", trans: "Comportamento"}, {word: "Evidence", trans: "Evidência"}, {word: "Research", trans: "Pesquisa"}, {word: "Issue", trans: "Questão; problema"},
        {word: "Benefit", trans: "Benefício"}, {word: "Impact", trans: "Impacto"}, {word: "Approach", trans: "Abordagem"}, {word: "Resource", trans: "Recurso"}, {word: "Outcome", trans: "Resultado"},
        {word: "Consider", trans: "Considerar"}, {word: "Recognize", trans: "Reconhecer"}, {word: "Require", trans: "Exigir"}, {word: "Maintain", trans: "Manter"}, {word: "Encourage", trans: "Incentivar"},
        {word: "Improve", trans: "Aprimorar"}, {word: "Prevent", trans: "Prevenir"}, {word: "Respond", trans: "Responder; reagir"}, {word: "Influence", trans: "Influenciar"}, {word: "Assume", trans: "Supor; presumir"},
        {word: "Accurate", trans: "Preciso(a)"}, {word: "Effective", trans: "Eficaz"}, {word: "Significant", trans: "Significativo(a)"}, {word: "Relevant", trans: "Relevante"}, {word: "Reliable", trans: "Confiável"},
        {word: "Efficient", trans: "Eficiente"}, {word: "Complex", trans: "Complexo(a)"}, {word: "Aware", trans: "Consciente"}, {word: "Flexible", trans: "Flexível"}, {word: "Likely", trans: "Provável"},
        {word: "Gradually", trans: "Gradualmente"}, {word: "Eventually", trans: "Eventualmente"}, {word: "Apparently", trans: "Aparentemente"}, {word: "Particularly", trans: "Particularmente"}, {word: "Indeed", trans: "De fato"},
        {word: "Despite", trans: "Apesar de"}, {word: "Throughout", trans: "Ao longo de"}, {word: "Regarding", trans: "Em relação a"}, {word: "Unlike", trans: "Ao contrário de"}, {word: "Within", trans: "Dentro de"},
        {word: "Furthermore", trans: "Além disso"}, {word: "Nevertheless", trans: "No entanto"}, {word: "Consequently", trans: "Consequentemente"}, {word: "Whereas", trans: "Enquanto que"}, {word: "Otherwise", trans: "Caso contrário"},
        {word: "Either", trans: "Qualquer um dos dois"}, {word: "Neither", trans: "Nenhum dos dois"}, {word: "Both", trans: "Ambos"}, {word: "Each", trans: "Cada"}, {word: "Various", trans: "Diversos"}
    ],
    "C1": [
        {word: "Achievement", trans: "Realização; conquista"}, {word: "Assumption", trans: "Suposição"}, {word: "Commitment", trans: "Compromisso"}, {word: "Perspective", trans: "Perspectiva"}, {word: "Insight", trans: "Percepção; compreensão"},
        {word: "Framework", trans: "Estrutura; arcabouço"}, {word: "Controversy", trans: "Controvérsia"}, {word: "Consensus", trans: "Consenso"}, {word: "Priority", trans: "Prioridade"}, {word: "Approach", trans: "Abordagem"},
        {word: "Acquire", trans: "Adquirir"}, {word: "Enhance", trans: "Aprimorar; melhorar"}, {word: "Demonstrate", trans: "Demonstrar"}, {word: "Establish", trans: "Estabelecer"}, {word: "Assess", trans: "Avaliar"},
        {word: "Interpret", trans: "Interpretar"}, {word: "Implement", trans: "Implementar"}, {word: "Justify", trans: "Justificar"}, {word: "Negotiate", trans: "Negociar"}, {word: "Acknowledge", trans: "Reconhecer; admitir"},
        {word: "Comprehensive", trans: "Abrangente; completo"}, {word: "Substantial", trans: "Substancial"}, {word: "Crucial", trans: "Crucial; essencial"}, {word: "Accurate", trans: "Preciso(a)"}, {word: "Consistent", trans: "Consistente"},
        {word: "Appropriate", trans: "Apropriado(a)"}, {word: "Significant", trans: "Significativo(a)"}, {word: "Fundamental", trans: "Fundamental"}, {word: "Convincing", trans: "Convincente"}, {word: "Sophisticated", trans: "Sofisticado(a)"},
        {word: "Apparently", trans: "Aparentemente"}, {word: "Undoubtedly", trans: "Sem dúvida"}, {word: "Presumably", trans: "Presumivelmente"}, {word: "Simultaneously", trans: "Simultaneamente"}, {word: "Consequently", trans: "Consequentemente"},
        {word: "Beyond", trans: "Além de"}, {word: "Amid", trans: "Em meio a"}, {word: "Concerning", trans: "Em relação a"}, {word: "Throughout", trans: "Ao longo de"}, {word: "Despite", trans: "Apesar de"},
        {word: "Nevertheless", trans: "No entanto"}, {word: "Furthermore", trans: "Além disso"}, {word: "Hence", trans: "Assim; portanto"}, {word: "Thereby", trans: "Desse modo; assim"}, {word: "Accordingly", trans: "Consequentemente"},
        {word: "Whoever", trans: "Quem quer que"}, {word: "Whichever", trans: "Qualquer que seja"}, {word: "Whereby", trans: "Pelo qual"}, {word: "Whether", trans: "Se; quer...quer"}, {word: "Nonetheless", trans: "Mesmo assim"}
    ]
};

// ==========================================
// 2. ESTADO GLOBAL E UTILIDADES
// ==========================================
let currentLevelSelected = null;

// Função para embaralhar arrays (usada nas opções do quiz)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================================
// 3. RENDERIZAÇÃO DA LISTA DE VOCABULÁRIO
// ==========================================
function renderVocab(level) {
    currentLevelSelected = level;
    
    // Mostra a tela de vocabulário e esconde o quiz
    document.getElementById('quiz-display').style.display = 'none';
    document.getElementById('vocab-controls').style.display = 'block';
    document.getElementById('vocab-display').style.display = 'grid';
    document.getElementById('vocab-footer').style.display = 'flex';
    
    const container = document.getElementById('vocab-display');
    container.innerHTML = ''; // Limpa a tela
    
    // Atualiza feedback visual dos botões
    document.querySelectorAll('.vocab-controls button').forEach(btn => {
        btn.classList.remove('active-btn');
        if(btn.innerText === level) btn.classList.add('active-btn');
    });

    // Injeta os cards
    vocabData[level].forEach(item => {
        const div = document.createElement('div');
        div.className = 'vocab-card';
        div.innerHTML = `
            <b>${item.word} <span class="speaker-icon" title="Ouvir pronúncia" onclick="speak('${item.word}')">🔊</span></b>
            <small>${item.trans}</small>
        `;
        container.appendChild(div);
    });
}

// ==========================================
// 4. ÁUDIO NATIVO (Web Speech API)
// ==========================================
function speak(word) {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance(word);
        msg.lang = 'en-US'; 
        msg.rate = 0.9; 
        window.speechSynthesis.speak(msg);
    } else {
        alert("Desculpe, seu navegador não suporta áudio nativo.");
    }
}

// ==========================================
// 5. MODO QUIZ (Múltipla Escolha)
// ==========================================
function startQuiz() {
    if (!currentLevelSelected) return;

    // Transição de Telas: Esconde vocabulário, mostra quiz
    document.getElementById('vocab-display').style.display = 'none';
    document.getElementById('vocab-footer').style.display = 'none';
    document.getElementById('vocab-controls').style.display = 'none';
    const quizContainer = document.getElementById('quiz-display');
    quizContainer.style.display = 'block';

    // Cria o cabeçalho do Quiz
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h3>Quiz Mastery: Level ${currentLevelSelected}</h3>
            <button class="btn-voltar" onclick="renderVocab('${currentLevelSelected}')">⬅ Voltar ao Vocabulário</button>
        </div>
        <div id="quiz-cards-container"></div>
    `;

    const cardsContainer = document.getElementById('quiz-cards-container');
    const wordsList = [...vocabData[currentLevelSelected]];

    // Para não cansar o aluno, vamos selecionar 10 palavras aleatórias do nível.
    // Se quiser que apareçam todas as 50, basta trocar "10" por "wordsList.length" na linha abaixo.
    shuffleArray(wordsList);
    const quizWords = wordsList.slice(0, 10); 

    quizWords.forEach((wordObj, index) => {
        // Pega 2 traduções incorretas do mesmo nível para usar como distratores
        let wrongOptions = wordsList.filter(w => w.word !== wordObj.word);
        shuffleArray(wrongOptions);

        // Junta a resposta certa com as 2 erradas
        let options = [
            wordObj.trans,
            wrongOptions[0].trans,
            wrongOptions[1].trans
        ];

        // Embaralha as posições dos botões
        shuffleArray(options);

        // Cria o card da pergunta
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <h4>${index + 1}. Qual é a tradução de "<b>${wordObj.word}</b>"?</h4>
            <div class="quiz-options">
                <button onclick="checkAnswer(this, '${options[0]}', '${wordObj.trans}')">${options[0]}</button>
                <button onclick="checkAnswer(this, '${options[1]}', '${wordObj.trans}')">${options[1]}</button>
                <button onclick="checkAnswer(this, '${options[2]}', '${wordObj.trans}')">${options[2]}</button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

// Função para checar o clique do aluno no Quiz
function checkAnswer(btn, selectedOption, correctOption) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');

    // Desativa todos os botões dessa pergunta para o aluno não clicar duas vezes
    buttons.forEach(b => b.disabled = true);

    if (selectedOption === correctOption) {
        btn.classList.add('correct'); // Fica verde
    } else {
        btn.classList.add('wrong'); // Fica vermelho
        // Mostra qual era a correta em verde
        buttons.forEach(b => {
            if (b.innerText === correctOption) {
                b.classList.add('correct');
            }
        });
    }
}
