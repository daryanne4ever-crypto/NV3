// NLE Level 3 — shared navigation, theme, mobile menu and progress logic.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const pageTitles = {
  'index.html': 'Dashboard',
  'revision.html': 'Revision',
  'grammar.html': 'Grammar',
  'vocabulary.html': 'Vocabulary',
  'listening.html': 'Listening',
  'speaking.html': 'Speaking',
  'reading.html': 'Reading',
  'writing.html': 'Writing',
  'professor.html': 'Professor',
  'unit1.html': 'Unit 1'
};


// Motor de Áudio Nativo - Teacher Anny
function speakWord(element) {
  const text = element?.innerText || element?.textContent || String(element || '');

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);

    if (element?.style) {
      element.style.opacity = '0.5';
      setTimeout(() => { element.style.opacity = '1'; }, 200);
    }
  } else {
    alert('Desculpe, seu navegador não suporta a leitura de texto em áudio.');
  }
}

window.speakWord = speakWord;


function calculateLevel(activities) {
  const completed = activities.filter((activity) => activity.status === 'Completed');
  if (completed.length >= 12) return 'Advanced';
  if (completed.length >= 5) return 'Intermediate';
  return 'Beginner';
}

function formatDateTime(value) {
  if (!value) return 'Ainda não acessado';
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
}

function safeReadState() {
  return window.NV3Storage?.readState?.() || { studentName: 'Student', activities: {}, lastActivity: null };
}

function setActiveNavigation() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkPage = link.getAttribute('href')?.split('#')[0];
    link.classList.toggle('active', linkPage === currentPage);
  });
}

function initializeGrammarMenu() {
  const grammarLink = document.querySelector('.nav-link[href="grammar.html"]');
  if (!grammarLink || grammarLink.dataset.grammarReady === 'true') return;
  const availableGrammarTopics = typeof grammarTopics !== 'undefined'
    ? grammarTopics
    : [
      ['alphabet', 'Alphabet'],
      ['pronunciation_basic', 'Pronunciation (IPA básico)'],
      ['verb_to_be', 'Verb To Be'],
      ['personal_pronouns', 'Personal Pronouns'],
      ['articles', 'Articles (A/An/The)'],
      ['plural-rules', 'Plural Rules'],
      ['possessive-adjectives', 'Possessive Adjectives'],
      ['demonstratives', 'Demonstratives (This/That)'],
      ['there-is-there-are', 'There is / There are'],
      ['imperatives', 'Imperatives']
      ['plural-rules', 'Plural Rules']
    ];

  grammarLink.dataset.grammarReady = 'true';
  grammarLink.setAttribute('aria-expanded', 'false');
  grammarLink.setAttribute('aria-controls', 'grammar-dropdown-content');
  grammarLink.classList.add('grammar-nav-toggle');

  const submenu = document.createElement('div');
  submenu.id = 'grammar-dropdown-content';
  submenu.className = 'grammar-submenu grammar-dropdown-content';
  submenu.setAttribute('aria-label', 'Grammar topics');
  submenu.hidden = true;
  submenu.innerHTML = availableGrammarTopics.map(([id, label]) => `<a class="grammar-topic-btn" href="grammar.html#${id}">${label}</a>`).join('');
  grammarLink.insertAdjacentElement('afterend', submenu);

  grammarLink.addEventListener('click', (event) => {
    if (currentPage !== 'grammar.html') return;
    event.preventDefault();
    const isExpanded = grammarLink.getAttribute('aria-expanded') === 'true';
    const shouldShow = !isExpanded;
    grammarLink.setAttribute('aria-expanded', String(shouldShow));
    submenu.hidden = !shouldShow;
    submenu.classList.toggle('show', shouldShow);
  });
}

function persistCurrentPageAccess() {
  if (currentPage === 'index.html') return;
  const activity = {
    id: `page_${currentPage.replace(/[^a-z0-9]/gi, '_')}`,
    name: pageTitles[currentPage] || document.title || currentPage,
    url: `${currentPage}${window.location.hash || ''}`,
    lastAccessedAt: new Date().toISOString(),
    percentage: 0,
    status: 'In Progress'
  };
  window.NV3Storage?.saveLastActivity?.(activity);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('nle_theme') || localStorage.getItem('nle-theme') || 'dark';
  const isLight = savedTheme === 'light';
  document.body.dataset.theme = isLight ? 'light' : 'dark';
  document.body.classList.toggle('light-mode', isLight);

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.id = 'theme-toggle';
  toggle.className = 'theme-toggle-btn';
  toggle.setAttribute('aria-label', 'Alternar modo diurno e noturno');
  toggle.innerHTML = isLight ? '☀️ Modo Diurno' : '🌙 Modo Noturno';
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    const nextIsLight = !document.body.classList.contains('light-mode');
    document.body.classList.toggle('light-mode', nextIsLight);
    document.body.dataset.theme = nextIsLight ? 'light' : 'dark';
    localStorage.setItem('nle_theme', nextIsLight ? 'light' : 'dark');
    localStorage.setItem('nle-theme', nextIsLight ? 'light' : 'dark');
    toggle.innerHTML = nextIsLight ? '☀️ Modo Diurno' : '🌙 Modo Noturno';
  });
}

function initializeMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-menu-toggle';
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰ Menu';
  document.body.appendChild(toggle);

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'mobile-menu-backdrop';
  backdrop.setAttribute('aria-label', 'Fechar menu');
  document.body.appendChild(backdrop);

  const closeMenu = () => {
    sidebar.classList.remove('mobile-open');
    backdrop.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const willOpen = !sidebar.classList.contains('mobile-open');
    sidebar.classList.toggle('mobile-open', willOpen);
    backdrop.classList.toggle('active', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  });
  backdrop.addEventListener('click', closeMenu);
  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (link.classList.contains('grammar-nav-toggle')) return;
      closeMenu();
    });
  });
}

function saveStudentName() {
  const input = document.querySelector('#studentNameInput');
  const name = input?.value.trim();
  if (!name) return;
  window.NV3Storage?.setStudentName(name);
  localStorage.setItem('nv3-student-name', name);
  renderDashboard();
}

function renderDashboard() {
  const state = safeReadState();
  const activities = Object.values(state.activities || {});
  const completedActivities = activities.filter((activity) => activity.status === 'Completed');
  const inProgressActivities = activities.filter((activity) => activity.status === 'In Progress' || activity.status === 'Needs Review' || activity.status === 'Urgent Review');
  const lastActivity = state.lastActivity || inProgressActivities.at(-1);

  const studentName = document.querySelector('#studentName');
  const studentNameInput = document.querySelector('#studentNameInput');
  const activitiesCompleted = document.querySelector('#activitiesCompleted');
  const currentLevel = document.querySelector('#currentLevel');
  const lastActivityLink = document.querySelector('#lastActivityLink');
  const lastAccess = document.querySelector('#lastAccess');
  const dashboardReviews = document.querySelector('#dashboardReviews');

  if (studentName) studentName.textContent = state.studentName || localStorage.getItem('nv3-student-name') || 'Student';
  if (studentNameInput) studentNameInput.value = state.studentName || localStorage.getItem('nv3-student-name') || '';
  if (activitiesCompleted) activitiesCompleted.textContent = String(completedActivities.length);
  if (currentLevel) currentLevel.textContent = calculateLevel(activities);
  if (lastAccess) lastAccess.textContent = formatDateTime(lastActivity?.lastAccessedAt || lastActivity?.completedAt);

  if (lastActivityLink) {
    lastActivityLink.href = lastActivity?.url || 'reading.html';
    lastActivityLink.innerHTML = lastActivity
      ? `<strong>${lastActivity.name}</strong><small>${lastActivity.status || 'Em andamento'} • ${formatDateTime(lastActivity.lastAccessedAt || lastActivity.completedAt)}</small>`
      : '<strong>Começar Reading</strong><small>Nenhuma atividade iniciada ainda.</small>';
  }

  if (dashboardReviews) {
    dashboardReviews.innerHTML = inProgressActivities.slice(-6).reverse().map((activity) => `
      <a class="review-item" href="${activity.url}">
        <span class="review-name">${activity.name}</span>
        <span class="status-tag ${activity.status === 'Completed' ? 'success' : 'needs'}">${activity.status || 'Em andamento'}</span>
      </a>
    `).join('') || '<p class="empty-review">Nenhuma atividade registrada ainda.</p>';
  }
}

function bindGlobalActions() {
  document.querySelectorAll('[data-xp]').forEach((button) => button.remove());
  document.querySelector('#saveStudentNameBtn')?.addEventListener('click', saveStudentName);
  document.querySelector('#studentNameInput')?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') saveStudentName();
  });
  document.querySelector('#startPracticeBtn')?.addEventListener('click', () => {
    const lastActivity = safeReadState().lastActivity;
    window.location.href = lastActivity?.url || 'reading.html';
  });
}

function saveActivityResult(id, name, percentage, url = window.location.href) {
  return window.NV3Storage?.saveActivityResult({ id, name, percentage, url });
}

function getStatusFromPercentage(percentage) {
  return window.NV3Storage?.getStatusFromPercentage(percentage) || 'Urgent Review';
}

function initializeApp() {
  setActiveNavigation();
  initializeGrammarMenu();
  initializeTheme();
  initializeMobileMenu();
  persistCurrentPageAccess();
  renderDashboard();
  bindGlobalActions();
  window.addEventListener('nv3:state-changed', renderDashboard);
}

document.addEventListener('DOMContentLoaded', initializeApp);
window.NV3App = { renderDashboard, saveStudentName, saveActivityResult, getStatusFromPercentage };
window.NV3 = {
  saveActivityResult: (id, name, percentage, url = window.location.href) => window.NV3Storage?.saveActivityResult({ id, name, percentage, url }),
  getStatusFromPercentage,
};
