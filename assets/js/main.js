// NLE Level 3 — shared navigation, dashboard and persistent UI logic.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

function calculateLevel(activities) {
   const completed = activities.filter((activity) => activity.status === 'Completed');
   if (completed.length >= 12) return 'Advanced';
   if (completed.length >= 5) return 'Intermediate';
   return 'Beginner';
}

const nextNewActivities = ['revision.html#activity-1', 'unit1.html'];



const grammarTopics = [
  ['simple-present', 'Simple Present'],
  ['present-continuous', 'Present Continuous'],
  ['present-perfect', 'Present Perfect'],
  ['present-perfect-continuous', 'Present Perfect Continuous'],
  ['simple-past', 'Simple Past'],
  ['past-continuous', 'Past Continuous'],
  ['past-perfect', 'Past Perfect'],
  ['past-perfect-continuous', 'Past Perfect Continuous'],
  ['simple-future', 'Simple Future'],
  ['future-continuous', 'Future Continuous'],
  ['future-perfect', 'Future Perfect'],
  ['future-perfect-continuous', 'Future Perfect Continuous'],
  ['active-voice', 'Active Voice'],
  ['passive-voice', 'Passive Voice'],
  ['comparatives-superlatives', 'Comparatives & Superlatives'],
  ['affixes', 'Affixes, Prefixes & Suffixes'],
];

function initializeGrammarMenu() {
  const grammarLink = document.querySelector('.nav-link[href="grammar.html"]');
  if (!grammarLink || grammarLink.dataset.grammarReady === 'true') return;

  grammarLink.dataset.grammarReady = 'true';
  grammarLink.setAttribute('aria-expanded', currentPage === 'grammar.html' ? 'true' : 'false');
  grammarLink.classList.add('grammar-nav-toggle');

  const submenu = document.createElement('div');
  submenu.className = 'grammar-submenu';
  submenu.setAttribute('aria-label', 'Grammar topics');
  submenu.hidden = currentPage !== 'grammar.html';
  submenu.innerHTML = grammarTopics.map(([id, label]) => `<a class="grammar-topic-btn" href="grammar.html#${id}">${label}</a>`).join('');
  grammarLink.insertAdjacentElement('afterend', submenu);

  grammarLink.addEventListener('click', (event) => {
    event.preventDefault();
    const isExpanded = grammarLink.getAttribute('aria-expanded') === 'true';
    grammarLink.setAttribute('aria-expanded', String(!isExpanded));
    submenu.hidden = isExpanded;
    if (currentPage !== 'grammar.html' && !isExpanded) {
      submenu.querySelector('a')?.focus();
    }
  });
}

document.querySelectorAll('.nav-link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});

function getStudentName() {
  const storageKey = 'nv3-student-name';
  let studentName = localStorage.getItem(storageKey);

  if (!studentName) {
    studentName = window.prompt("What's your name?") || 'B1 learner';
    localStorage.setItem(storageKey, studentName.trim() || 'B1 learner');
  }

  return localStorage.getItem(storageKey) || 'B1 learner';
}

function personalizeDashboard() {
  const studentNameElement = document.querySelector('#studentName');
  if (!studentNameElement) return;
  studentNameElement.textContent = getStudentName();
}

function setActiveNavigation() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    const linkPage = link.getAttribute('href')?.split('#')[0];
    link.classList.toggle('active', linkPage === currentPage);
  });
}

function renderDashboard() {
  const storage = window.NV3Storage;
  if (!storage) return;

  const state = storage.readState();
  const activities = Object.values(state.activities);
  const completedActivities = activities.filter((activity) => activity.status === 'Completed');
  const reviewActivities = activities.filter((activity) => activity.status === 'Urgent Review' || activity.status === 'Needs Review');

  const studentName = document.querySelector('#studentName');
  const activitiesCompleted = document.querySelector('#activitiesCompleted');
  const currentLevel = document.querySelector('#currentLevel');
  const currentXp = document.querySelector('#currentXp');
  const dashboardReviews = document.querySelector('#dashboardReviews');

  if (studentName) studentName.textContent = state.studentName || 'Student';
  if (activitiesCompleted) activitiesCompleted.textContent = String(completedActivities.length);
  if (currentLevel) currentLevel.textContent = calculateLevel(activities);
  if (currentXp) currentXp.textContent = `${state.xp || 0} XP`;

  if (dashboardReviews) {
    dashboardReviews.innerHTML = reviewActivities.map((activity) => `
      <a class="review-item" href="${activity.url}">
        <span class="review-name">${activity.name}</span>
        <span class="review-score">${activity.percentage}%</span>
        <span class="status-tag danger">${activity.status}</span>
      </a>
    `).join('') || '<p class="empty-review">No urgent reviews right now.</p>';
  }
}

function saveStudentName() {
  const input = document.querySelector('#studentNameInput');
  const name = input?.value.trim();
  if (name) {
    window.NV3Storage?.setStudentName(name);
    localStorage.setItem('nv3-student-name', name);
    alert('Nome salvo com sucesso!');
    renderDashboard();
  } else {
    alert('Por favor, insira um nome válido.');
  }
}

function bindGlobalActions() {
  document.querySelectorAll('[data-xp]').forEach((button) => {
    button.addEventListener('click', () => {
      window.NV3Storage?.addXp(Number(button.dataset.xp));
      renderDashboard();
    });
  });

  document.querySelector('#saveStudentNameBtn')?.addEventListener('click', saveStudentName);

  document.querySelector('#startPracticeBtn')?.addEventListener('click', () => {
    window.location.href = 'revision.html#activity-1';
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
  renderDashboard();
  bindGlobalActions();
  window.addEventListener('nv3:state-changed', renderDashboard);
}

