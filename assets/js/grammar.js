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


function getLessonActivities(topic) {
  return topic.activities || {
    writing: 'Escreva 5 frases afirmativas, 5 negativas e 5 interrogativas usando o tópico desta aula.',
    listening: 'Clique nas frases em inglês da aula, repita em voz alta e faça shadowing com ritmo natural.',
    quiz: 'Complete o quiz rápido do módulo e revise os erros antes de avançar.'
  };
}

function renderActivityHub(topic, topicId) {
  const activities = getLessonActivities(topic);
  return `
    <section class="activity-hub" data-topic-id="${topicId}" aria-label="Atividades do módulo">
      <div class="section-heading"><div><span class="eyebrow">Practice hub</span><h2>Atividades</h2></div></div>
      <div class="activity-hub-actions" role="tablist" aria-label="Tipos de atividades">
        <button class="activity-hub-btn active" type="button" data-activity-tab="writing">✍️ Prática Escrita</button>
        <button class="activity-hub-btn" type="button" data-activity-tab="listening">🎧 Listening & Shadowing</button>
        <button class="activity-hub-btn" type="button" data-activity-tab="quiz">🎮 Quiz Interativo</button>
      </div>
      <div class="activity-hub-panel" data-activity-panel>
        <h3>✍️ Prática Escrita</h3>
        <p>${activities.writing}</p>
      </div>
    </section>
  `;
}

function showActivityPanel(button) {
  const hub = button.closest('.activity-hub');
  if (!hub) return;
  const topic = getGrammarData().lessons[hub.dataset.topicId];
  if (!topic) return;
  const activities = getLessonActivities(topic);
  const labels = {
    writing: '✍️ Prática Escrita',
    listening: '🎧 Listening & Shadowing',
    quiz: '🎮 Quiz Interativo'
  };
  const activityType = button.dataset.activityTab;
  hub.querySelectorAll('.activity-hub-btn').forEach((item) => item.classList.toggle('active', item === button));
  hub.querySelector('[data-activity-panel]').innerHTML = `<h3>${labels[activityType]}</h3><p>${activities[activityType]}</p>`;
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
      ${renderActivityHub(topic, topicId)}
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

    const activityButton = event.target.closest('[data-activity-tab]');
    if (activityButton) {
      showActivityPanel(activityButton);
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
