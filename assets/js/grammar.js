// Grammar Hub renderer: five CEFR phases, lazy lesson accordion and Web Speech practice.
function getGrammarData() {
  return typeof grammarData !== 'undefined' ? grammarData : { phases: [], lessons: {} };
}

function speakGrammarText(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function loadGrammarHub() {
  const mainContainer = document.getElementById('main-content-area');
  if (!mainContainer) return;

  const data = getGrammarData();
  mainContainer.innerHTML = `
    <header class="hero grammar-header">
      <div>
        <span class="eyebrow">Grammar Hub</span>
        <h1>English Grammar Building Blocks</h1>
        <p>Selecione um módulo abaixo para explorar a estrutura, pronúncia e exercícios sem poluir o menu lateral.</p>
      </div>
    </header>
    <section id="grammar-phases-container" class="grammar-phases" aria-label="Grammar phases"></section>
  `;

  const phasesContainer = document.getElementById('grammar-phases-container');
  data.phases.forEach((phase) => {
    const phaseDiv = document.createElement('section');
    phaseDiv.className = 'phase-container card';
    phaseDiv.innerHTML = `
      <h2 class="phase-title">${phase.title}</h2>
      <div class="grammar-grid">
        ${phase.topics.map((topic) => `
          <button class="grammar-topic-btn" type="button" data-open-lesson="${topic.id}">
            ${topic.name}
          </button>
        `).join('')}
      </div>
    `;
    phasesContainer.appendChild(phaseDiv);
  });
}

function openLessonModule(topicId) {
  const data = getGrammarData();
  const topic = data.lessons[topicId];
  if (!topic) {
    alert('Módulo em desenvolvimento pela Teacher Anny!');
    return;
  }

  const mainContainer = document.getElementById('main-content-area');
  if (!mainContainer) return;

  mainContainer.innerHTML = `
    <button type="button" class="btn btn-secondary btn-back" data-load-grammar-hub>← Voltar para o Grammar Hub</button>
    <section class="card grammar-lesson-shell">
      <span class="eyebrow">Grammar lesson</span>
      <h1>${topic.title}</h1>
      <div class="mastery-banner">
        <strong>Mastery Progress</strong>
        <span>0–100% reservado para a próxima camada de progresso.</span>
      </div>
      <div id="accordion-container">
        ${topic.sections.map((sec, index) => `
          <article class="lesson-section-accordion ${index === 0 ? 'active' : ''}">
            <button type="button" class="accordion-header" data-toggle-accordion>
              <span>${sec.num}. ${sec.title}</span>
              <span aria-hidden="true">▼</span>
            </button>
            <div class="accordion-content">
              ${sec.content}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function toggleAccordion(headerElement) {
  headerElement.closest('.lesson-section-accordion')?.classList.toggle('active');
}

function initializeGrammarHub() {
  loadGrammarHub();

  document.addEventListener('click', (event) => {
    const lessonButton = event.target.closest('[data-open-lesson]');
    if (lessonButton) {
      openLessonModule(lessonButton.dataset.openLesson);
      return;
    }

    if (event.target.closest('[data-load-grammar-hub]')) {
      loadGrammarHub();
      return;
    }

    const accordionHeader = event.target.closest('[data-toggle-accordion]');
    if (accordionHeader) toggleAccordion(accordionHeader);
  });
}

window.loadGrammarHub = loadGrammarHub;
window.openLessonModule = openLessonModule;
window.toggleAccordion = toggleAccordion;
window.speakGrammarText = speakGrammarText;

document.addEventListener('DOMContentLoaded', initializeGrammarHub);
