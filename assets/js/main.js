// NLE Level 3 — shared navigation, dashboard and persistent UI logic.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

function calculateLevel(activities) {
  const completed = activities.filter((activity) => activity.status === 'Completed');
  if (completed.length >= 12) return 'Advanced';
  if (completed.length >= 5) return 'Intermediate';
  return 'Beginner';
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

function bindGlobalActions() {
  document.querySelectorAll('[data-xp]').forEach((button) => {
    button.addEventListener('click', () => {
      window.NV3Storage?.addXp(Number(button.dataset.xp));
      renderDashboard();
    });
  });

  document.querySelector('#saveStudentNameBtn')?.addEventListener('click', () => {
    const input = document.querySelector('#studentNameInput');
    window.NV3Storage?.setStudentName(input?.value || 'Student');
    renderDashboard();
  });

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

initializeApp();
window.NV3 = { calculateLevel, renderDashboard, setActiveNavigation, saveActivityResult, getStatusFromPercentage };
