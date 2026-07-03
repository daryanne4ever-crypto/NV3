const vocabData = {
    "A1": [
        {word: "Book", trans: "Livro"},
        {word: "Water", trans: "Água"},
        {word: "Hello", trans: "Olá"},
        {word: "Goodbye", trans: "Adeus"},
        {word: "Please", trans: "Por favor"},
        {word: "Thank you", trans: "Obrigado"},
        {word: "Yes", trans: "Sim"},
        {word: "No", trans: "Não"},
        {word: "Good morning", trans: "Bom dia"},
        {word: "Good night", trans: "Boa noite"},
        {word: "Name", trans: "Nome"},
        {word: "Friend", trans: "Amigo"},
        {word: "Family", trans: "Família"},
        {word: "School", trans: "Escola"},
        {word: "Teacher", trans: "Professor"},
        {word: "Student", trans: "Aluno"},
        {word: "House", trans: "Casa"},
        {word: "Door", trans: "Porta"},
        {word: "Window", trans: "Janela"},
        {word: "Table", trans: "Mesa"}
    ],
    "A2": [
        {word: "Always", trans: "Sempre"},
        {word: "Weather", trans: "Clima"},
        {word: "Restaurant", trans: "Restaurante"},
        {word: "Breakfast", trans: "Café da manhã"},
        {word: "Lunch", trans: "Almoço"},
        {word: "Dinner", trans: "Jantar"},
        {word: "Different", trans: "Diferente"},
        {word: "Interesting", trans: "Interessante"},
        {word: "Beautiful", trans: "Bonito"},
        {word: "Expensive", trans: "Caro"},
        {word: "Cheap", trans: "Barato"},
        {word: "Large", trans: "Grande"},
        {word: "Small", trans: "Pequeno"},
        {word: "Happy", trans: "Feliz"},
        {word: "Sad", trans: "Triste"},
        {word: "Tired", trans: "Cansado"},
        {word: "Excited", trans: "Animado"},
        {word: "Market", trans: "Mercado"},
        {word: "Street", trans: "Rua"},
        {word: "City", trans: "Cidade"}
    ],
    "B1": [
        {word: "Accomplish", trans: "Realizar"},
        {word: "Achieve", trans: "Alcançar"},
        {word: "Challenge", trans: "Desafio"},
        {word: "Community", trans: "Comunidade"},
        {word: "Conference", trans: "Conferência"},
        {word: "Confidence", trans: "Confiança"},
        {word: "Conflict", trans: "Conflito"},
        {word: "Curious", trans: "Curioso"},
        {word: "Culture", trans: "Cultura"},
        {word: "Develop", trans: "Desenvolver"},
        {word: "Discover", trans: "Descobrir"},
        {word: "Discussion", trans: "Discussão"},
        {word: "Education", trans: "Educação"},
        {word: "Environment", trans: "Ambiente"},
        {word: "Equipment", trans: "Equipamento"},
        {word: "Establish", trans: "Estabelecer"},
        {word: "Experience", trans: "Experiência"},
        {word: "Explain", trans: "Explicar"},
        {word: "Explore", trans: "Explorar"},
        {word: "Flexible", trans: "Flexível"}
    ],
    "B2": [
        {word: "Advocate", trans: "Defender"},
        {word: "Ambition", trans: "Ambição"},
        {word: "Articulate", trans: "Articular"},
        {word: "Assessment", trans: "Avaliação"},
        {word: "Assumption", trans: "Suposição"},
        {word: "Authentic", trans: "Autêntico"},
        {word: "Authority", trans: "Autoridade"},
        {word: "Benefit", trans: "Benefício"},
        {word: "Bias", trans: "Viés"},
        {word: "Brief", trans: "Breve"},
        {word: "Capability", trans: "Capacidade"},
        {word: "Captivate", trans: "Cativar"},
        {word: "Characteristic", trans: "Características"},
        {word: "Circumstance", trans: "Circunstância"},
        {word: "Collaborate", trans: "Colaborar"},
        {word: "Commitment", trans: "Compromisso"},
        {word: "Compelling", trans: "Convincente"},
        {word: "Competence", trans: "Competência"},
        {word: "Complex", trans: "Complexo"},
        {word: "Compromise", trans: "Compromisso"}
    ],
    "C1": [
        {word: "Acquiesce", trans: "Concordar"},
        {word: "Admonish", trans: "Advertir"},
        {word: "Advocate", trans: "Defender"},
        {word: "Aesthetic", trans: "Estético"},
        {word: "Affinity", trans: "Afinidade"},
        {word: "Alleviate", trans: "Aliviar"},
        {word: "Ambiguous", trans: "Ambíguo"},
        {word: "Ameliorate", trans: "Melhorar"},
        {word: "Analyze", trans: "Analisar"},
        {word: "Antagonize", trans: "Antagonizar"},
        {word: "Apprehend", trans: "Apreender"},
        {word: "Articulate", trans: "Articular"},
        {word: "Ascertain", trans: "Constatar"},
        {word: "Assimilate", trans: "Assimilar"},
        {word: "Astute", trans: "Astuto"},
        {word: "Augment", trans: "Aumentar"},
        {word: "Auspicious", trans: "Auspicioso"},
        {word: "Authenticate", trans: "Autenticar"},
        {word: "Autonomous", trans: "Autônomo"},
        {word: "Auxiliary", trans: "Auxiliar"}
    ]
};

let currentLevel = null;

function renderVocab(level) {
    const container = document.getElementById('vocab-display');
    const footer = document.getElementById('vocab-footer');
    const buttons = document.querySelectorAll('.vocab-controls button');
    
    currentLevel = level;
    container.innerHTML = '';
    
    // Atualizar estado do botão ativo
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
        if (btn.textContent === level) {
            btn.classList.add('active-btn');
        }
    });
    
    // Renderizar cards de vocabulário
    vocabData[level].forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'vocab-card';
        div.setAttribute('data-word', item.word);
        div.innerHTML = `
            <b>${item.word} <span class="speaker-icon" onclick="speak('${item.word}', event)">🔊</span></b>
            <small>${item.trans}</small>
        `;
        container.appendChild(div);
    });
    
    footer.style.display = 'block';
}

function speak(word, event) {
    // Previne propagação do clique
    if (event) {
        event.stopPropagation();
    }
    
    // Verificar se a Web Speech API está disponível
    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
    
    if (!SpeechSynthesisUtterance) {
        alert('Web Speech API não está disponível neste navegador.');
        return;
    }
    
    // Parar qualquer fala anterior
    window.speechSynthesis.cancel();
    
    const msg = new SpeechSynthesisUtterance(word);
    msg.lang = 'en-US';
    msg.rate = 0.9; // Velocidade um pouco mais lenta
    msg.pitch = 1.0;
    msg.volume = 1.0;
    
    window.speechSynthesis.speak(msg);
}

function startQuiz() {
    if (!currentLevel) {
        alert('Por favor, selecione um nível primeiro!');
        return;
    }
    
    const words = vocabData[currentLevel];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    // Quiz simples: adivinhar a tradução
    const userAnswer = prompt(`Qual é a tradução de "${randomWord.word}"?`);
    
    if (userAnswer === null) {
        // Usuário clicou em cancelar
        return;
    }
    
    // Verificação simples (case-insensitive)
    if (userAnswer.toLowerCase() === randomWord.trans.toLowerCase()) {
        alert(`✅ Correto! "${randomWord.word}" = "${randomWord.trans}"\n\n+10 XP`);
    } else {
        alert(`❌ Incorrect. "${randomWord.word}" = "${randomWord.trans}"\n\nTente novamente!`);
    }
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Ativar o nível A1 por padrão
    renderVocab('A1');
});