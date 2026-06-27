// Grammar Hub Enhanced with Dynamic Content Loading, Quizzes, and Search

let grammarData = {
  verbTenses: {},
  activeVoice: {},
  passiveVoice: {},
  comparatives: {},
  affixes: {}
};

let currentTopic = null;
let currentSection = 'verb-tenses';

/**
 * Load all grammar content from JSON files
 */
async function loadGrammarContent() {
  try {
    const [tenses, active, passive, comparatives, affixes] = await Promise.all([
      fetch('assets/data/verb-tenses.json').then(r => r.json()),
      fetch('assets/data/active-voice.json').then(r => r.json()),
      fetch('assets/data/passive-voice.json').then(r => r.json()),
      fetch('assets/data/comparatives-superlatives.json').then(r => r.json()),
      fetch('assets/data/affixes-prefixes-suffixes.json').then(r => r.json())
    ]);
    
    grammarData = { tenses: tenses, active, passive, comparatives, affixes };
    console.log('✅ Grammar content loaded successfully');
    return true;
  } catch (error) {
    console.error('❌ Error loading grammar content:', error);
    return false;
  }
}

/**
 * Render all grammar topics as interactive cards
 */
function renderGrammarCards() {
  const container = document.querySelector('#grammarTopicsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Verb Tenses Section
  const tensesSection = document.createElement('div');
  tensesSection.className = 'grammar-section';
  tensesSection.innerHTML = `<h3 class="section-title">📚 Verb Tenses (12 Tempos Verbais)</h3>`;
  
  const tensesGrid = document.createElement('div');
  tensesGrid.className = 'grammar-cards-grid';
  
  grammarData.tenses?.verbTenses?.forEach(tense => {
    tensesGrid.appendChild(createGrammarCard(tense.id, tense.title, 'verb-tenses'));
  });
  
  tensesSection.appendChild(tensesGrid);
  container.appendChild(tensesSection);
  
  // Active Voice Section
  const activeSection = document.createElement('div');
  activeSection.className = 'grammar-section';
  activeSection.innerHTML = `<h3 class="section-title">🎯 Active Voice</h3>`;
  
  const activeCard = createGrammarCard('active-voice', grammarData.active?.title || 'Active Voice', 'active-voice');
  activeSection.appendChild(activeCard);
  container.appendChild(activeSection);
  
  // Passive Voice Section
  const passiveSection = document.createElement('div');
  passiveSection.className = 'grammar-section';
  passiveSection.innerHTML = `<h3 class="section-title">🔄 Passive Voice</h3>`;
  
  const passiveCard = createGrammarCard('passive-voice', grammarData.passive?.title || 'Passive Voice', 'passive-voice');
  passiveSection.appendChild(passiveCard);
  container.appendChild(passiveSection);
  
  // Comparatives & Superlatives Section
  const comparSection = document.createElement('div');
  comparSection.className = 'grammar-section';
  comparSection.innerHTML = `<h3 class="section-title">⚖️ Comparatives & Superlatives</h3>`;
  
  const comparCard = createGrammarCard('comparatives-superlatives', grammarData.comparatives?.title || 'Comparatives & Superlatives', 'comparatives');
  comparSection.appendChild(comparCard);
  container.appendChild(comparSection);
  
  // Affixes Section
  const affixSection = document.createElement('div');
  affixSection.className = 'grammar-section';
  affixSection.innerHTML = `<h3 class="section-title">🔤 Prefixes, Suffixes & Affixes</h3>`;
  
  const affixCard = createGrammarCard('affixes-prefixes-suffixes', grammarData.affixes?.title || 'Prefixes, Suffixes & Affixes', 'affixes');
  affixSection.appendChild(affixCard);
  container.appendChild(affixSection);
}

/**
 * Create individual grammar card element
 */
function createGrammarCard(id, title, type) {
  const card = document.createElement('button');
  card.className = 'grammar-card';
  card.innerHTML = `
    <div class="card-content">
      <h4>${title}</h4>
      <p class="card-type">${type}</p>
    </div>
  `;
  
  card.addEventListener('click', () => openGrammarModal(id, type));
  return card;
}

/**
 * Open grammar modal with detailed content
 */
function openGrammarModal(topicId, type) {
  const modal = document.querySelector('#grammarModal');
  if (!modal) return;
  
  let content = null;
  
  if (type === 'verb-tenses') {
    const tense = grammarData.tenses?.verbTenses?.find(t => t.id === topicId);
    if (!tense) return;
    content = generateTenseContent(tense);
  } else if (type === 'active-voice') {
    content = generateActiveVoiceContent();
  } else if (type === 'passive-voice') {
    content = generatePassiveVoiceContent();
  } else if (type === 'comparatives') {
    content = generateComparativesContent();
  } else if (type === 'affixes') {
    content = generateAffixesContent();
  }
  
  if (content) {
    modal.querySelector('.modal-body').innerHTML = content;
    modal.style.display = 'flex';
    
    // Add event listeners for tabs/buttons inside modal
    setupModalInteractions();
  }
}

/**
 * Generate HTML content for verb tense modal
 */
function generateTenseContent(tense) {
  return `
    <div class="grammar-content">
      <h2>${tense.title}</h2>
      
      <div class="content-section">
        <h3>💡 Ideia Principal</h3>
        <p>${tense.mainIdea}</p>
        ${tense.note ? `<p class="note">📝 ${tense.note}</p>` : ''}
      </div>
      
      ${tense.uses && tense.uses.length > 0 ? `
        <div class="content-section">
          <h3>✅ Quando Usar</h3>
          <ul>
            ${tense.uses.map(use => `
              <li>
                <strong>${use.title}:</strong>
                ${use.examples.map(ex => `<div class="example">${ex}</div>`).join('')}
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
      
      ${tense.structure ? `
        <div class="content-section">
          <h3>📐 Estrutura</h3>
          ${generateStructureTable(tense.structure)}
        </div>
      ` : ''}
      
      ${tense.commonError ? `
        <div class="content-section alert-error">
          <h3>⚠️ Erro Comum</h3>
          <p><strong>Errado:</strong> ${tense.commonError.wrong || tense.commonError}</p>
          <p><strong>Certo:</strong> ${tense.commonError.correct || ''}</p>
          <p>${tense.commonError.explanation || ''}</p>
        </div>
      ` : ''}
      
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="start-exercise" data-topic="${tense.id}">Começar Exercício</button>
        <button class="btn btn-secondary" data-action="take-quiz" data-topic="${tense.id}">Fazer Quiz</button>
      </div>
    </div>
  `;
}

/**
 * Generate structure table HTML
 */
function generateStructureTable(structure) {
  let html = '<div class="structure-table">';
  
  if (structure.affirmative) {
    html += `
      <div class="structure-item">
        <h4>✅ Afirmativa</h4>
        <p><code>${structure.affirmative.description}</code></p>
        ${structure.affirmative.examples.map(ex => `<p class="example">${ex}</p>`).join('')}
      </div>
    `;
  }
  
  if (structure.negative) {
    html += `
      <div class="structure-item">
        <h4>❌ Negativa</h4>
        <p><code>${structure.negative.description}</code></p>
        ${structure.negative.examples.map(ex => `<p class="example">${ex}</p>`).join('')}
        ${structure.negative.note ? `<p class="note">${structure.negative.note}</p>` : ''}
      </div>
    `;
  }
  
  if (structure.question) {
    html += `
      <div class="structure-item">
        <h4>❓ Pergunta</h4>
        <p><code>${structure.question.description}</code></p>
        ${structure.question.examples.map(ex => `<p class="example">${ex}</p>`).join('')}
      </div>
    `;
  }
  
  html += '</div>';
  return html;
}

/**
 * Generate Active Voice content
 */
function generateActiveVoiceContent() {
  const data = grammarData.active;
  return `
    <div class="grammar-content">
      <h2>${data.title}</h2>
      <p class="subtitle">${data.subtitle}</p>
      
      <div class="content-section">
        <h3>💡 Conceito</h3>
        <p>${data.basicConcept.whatIs}</p>
        <p><strong>Estrutura:</strong> <code>${data.introduction.structure}</code></p>
        <p class="example">${data.introduction.example}</p>
      </div>
      
      <div class="content-section">
        <h3>📊 Todos os Tempos Verbais</h3>
        <div class="tenses-summary">
          ${data.allTenses.map(t => `
            <div class="tense-item">
              <strong>${t.tense}</strong>
              <p><code>${t.example}</code></p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="start-exercise" data-topic="active-voice">Exercício</button>
        <button class="btn btn-secondary" data-action="take-quiz" data-topic="active-voice">Quiz</button>
      </div>
    </div>
  `;
}

/**
 * Generate Passive Voice content
 */
function generatePassiveVoiceContent() {
  const data = grammarData.passive;
  return `
    <div class="grammar-content">
      <h2>${data.title}</h2>
      <p class="subtitle">${data.subtitle}</p>
      
      <div class="content-section">
        <h3>💡 Conceito</h3>
        <p>${data.basicConcept.whatIs}</p>
        <p><strong>Estrutura:</strong> <code>${data.introduction.structure}</code></p>
        <p class="example">${data.introduction.example}</p>
      </div>
      
      <div class="content-section">
        <h3>🔄 Transformação Active → Passive</h3>
        <div class="transformation-steps">
          <p><strong>Ativo:</strong> ${data.activeToPassiveTransformation.example.active}</p>
          <p><strong>Passivo:</strong> ${data.activeToPassiveTransformation.example.passive}</p>
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="start-exercise" data-topic="passive-voice">Exercício</button>
        <button class="btn btn-secondary" data-action="take-quiz" data-topic="passive-voice">Quiz</button>
      </div>
    </div>
  `;
}

/**
 * Generate Comparatives content
 */
function generateComparativesContent() {
  const data = grammarData.comparatives;
  return `
    <div class="grammar-content">
      <h2>${data.title}</h2>
      <p class="subtitle">${data.subtitle}</p>
      
      <div class="content-section">
        <h3>💡 Conceito</h3>
        <div class="comparison-grid">
          <div class="comparison-item">
            <h4>Comparativo</h4>
            <p>Compara 2 coisas</p>
            <code>${data.introduction.comparativeStructure}</code>
          </div>
          <div class="comparison-item">
            <h4>Superlativo</h4>
            <p>Destaca 1 em um grupo</p>
            <code>${data.introduction.superlativeStructure}</code>
          </div>
        </div>
      </div>
      
      <div class="content-section">
        <h3>📊 Regras de Formação</h3>
        <div class="rules-summary">
          <p><strong>1 sílaba:</strong> -er/-est</p>
          <p><strong>2+ sílabas:</strong> more/most</p>
          <p><strong>Irregulares:</strong> good/better/best, bad/worse/worst</p>
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="start-exercise" data-topic="comparatives">Exercício</button>
        <button class="btn btn-secondary" data-action="take-quiz" data-topic="comparatives">Quiz</button>
      </div>
    </div>
  `;
}

/**
 * Generate Affixes content
 */
function generateAffixesContent() {
  const data = grammarData.affixes;
  return `
    <div class="grammar-content">
      <h2>${data.title}</h2>
      <p class="subtitle">${data.subtitle}</p>
      
      <div class="content-section">
        <h3>💡 Conceito Básico</h3>
        <p><strong>Fórmula:</strong> <code>${data.introduction.structure}</code></p>
        <p class="example">Exemplo: ${data.introduction.example}</p>
      </div>
      
      <div class="content-section">
        <h3>📊 Categorias</h3>
        <div class="affixes-categories">
          <div class="category">
            <h4>🚫 Prefixos Negativos</h4>
            <p>un-, im-, in-, ir-, il-, dis-, mis-</p>
          </div>
          <div class="category">
            <h4>📈 Prefixos de Quantidade</h4>
            <p>pre-, post-, semi-, multi-, uni-, bi-, tri-</p>
          </div>
          <div class="category">
            <h4>📍 Sufixos para Substantivos</h4>
            <p>-tion, -ment, -ness, -er, -ism</p>
          </div>
          <div class="category">
            <h4>🎨 Sufixos para Adjetivos</h4>
            <p>-ful, -less, -able, -ous, -ive</p>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button class="btn btn-primary" data-action="start-exercise" data-topic="affixes">Exercício</button>
        <button class="btn btn-secondary" data-action="take-quiz" data-topic="affixes">Quiz</button>
      </div>
    </div>
  `;
}

/**
 * Setup modal interactions (buttons, tabs, etc)
 */
function setupModalInteractions() {
  const modal = document.querySelector('#grammarModal');
  
  // Exercise buttons
  modal.querySelectorAll('[data-action="start-exercise"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const topic = e.target.dataset.topic;
      startExercise(topic);
    });
  });
  
  // Quiz buttons
  modal.querySelectorAll('[data-action="take-quiz"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const topic = e.target.dataset.topic;
      startQuiz(topic);
    });
  });
}

/**
 * Start exercise for a topic
 */
function startExercise(topic) {
  alert(`🎯 Exercício iniciado para: ${topic}\n\nEm breve você verá exercícios personalizados!`);
  // TODO: Implement exercise interface
}

/**
 * Start quiz for a topic
 */
function startQuiz(topic) {
  alert(`📝 Quiz iniciado para: ${topic}\n\nEm breve você verá perguntas interativas!`);
  // TODO: Implement quiz interface
}

/**
 * Search grammar topics
 */
function searchGrammarTopics(query) {
  const searchInput = document.querySelector('#grammarSearchInput');
  const resultsContainer = document.querySelector('#searchResults');
  
  if (!resultsContainer) return;
  
  query = query.toLowerCase();
  let results = [];
  
  // Search in verb tenses
  grammarData.tenses?.verbTenses?.forEach(tense => {
    if (tense.title.toLowerCase().includes(query) || 
        tense.mainIdea.toLowerCase().includes(query)) {
      results.push({
        id: tense.id,
        title: tense.title,
        type: 'verb-tenses',
        preview: tense.mainIdea.substring(0, 100)
      });
    }
  });
  
  // Search in other topics
  const otherTopics = [
    { id: 'active-voice', title: 'Active Voice', type: 'active-voice', data: grammarData.active },
    { id: 'passive-voice', title: 'Passive Voice', type: 'passive-voice', data: grammarData.passive },
    { id: 'comparatives', title: 'Comparatives & Superlatives', type: 'comparatives', data: grammarData.comparatives },
    { id: 'affixes', title: 'Prefixes, Suffixes & Affixes', type: 'affixes', data: grammarData.affixes }
  ];
  
  otherTopics.forEach(topic => {
    if (topic.title.toLowerCase().includes(query) || 
        (topic.data?.introduction?.definition && topic.data.introduction.definition.toLowerCase().includes(query))) {
      results.push({
        ...topic,
        preview: topic.data?.introduction?.definition?.substring(0, 100) || ''
      });
    }
  });
  
  // Display results
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
  } else {
    resultsContainer.innerHTML = results.map(result => `
      <div class="search-result" onclick="openGrammarModal('${result.id}', '${result.type}')">
        <h4>${result.title}</h4>
        <p>${result.preview}...</p>
        <span class="result-type">${result.type}</span>
      </div>
    `).join('');
  }
}

/**
 * Close grammar modal
 */
function closeGrammarModal() {
  const modal = document.querySelector('#grammarModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

/**
 * Initialize Grammar Hub
 */
async function initializeGrammarHub() {
  console.log('🚀 Initializing Grammar Hub...');
  
  const loaded = await loadGrammarContent();
  if (!loaded) {
    console.error('Failed to load grammar content');
    return;
  }
  
  renderGrammarCards();
  
  // Setup search
  const searchInput = document.querySelector('#grammarSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchGrammarTopics(e.target.value);
    });
  }
  
  // Setup modal close button
  const closeBtn = document.querySelector('#closeGrammarModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeGrammarModal);
  }
  
  // Close modal when clicking outside
  const modal = document.querySelector('#grammarModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeGrammarModal();
      }
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGrammarHub);
} else {
  initializeGrammarHub();
}
