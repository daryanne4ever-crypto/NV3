// NLE Level 3 (NV3) — dashboard navigation, progress and review logic.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const ACTIVITY_PREFIX = 'nv3-activity:';

const nextNewActivities = ['revision.html#activity-1', 'unit1.html'];

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

function getActivityRecords() {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith(ACTIVITY_PREFIX))
    .map((key) => {
      try {
        return { key, ...JSON.parse(localStorage.getItem(key)) };
      } catch {
        return null;
      }
    })
    .filter((record) => record && typeof record.percentage === 'number');
}

function getStatusFromPercentage(percentage) {
  if (percentage >= 80) return 'Completed';
  if (percentage >= 40) return 'Needs Review';
  return 'Urgent Review';
}

function saveActivityResult(id, name, percentage, url = window.location.href) {
  const safePercentage = Math.max(0, Math.min(100, Math.round(Number(percentage) || 0)));
  const record = {
    id,
    name,
    percentage: safePercentage,
    status: getStatusFromPercentage(safePercentage),
    url,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(`${ACTIVITY_PREFIX}${id}`, JSON.stringify(record));
  return record;
}

function calculateCurrentLevel(records = getActivityRecords()) {
  if (!records.length) return 'Beginner';
  const average = records.reduce((sum, record) => sum + record.percentage, 0) / records.length;
  if (average < 40) return 'Beginner';
  if (average < 60) return 'Elementary';
  if (average < 80) return 'Pre-Intermediate';
  return 'Intermediate';
}

function renderDashboardReviews(records = getActivityRecords()) {
  const reviewList = document.querySelector('#dashboardReviews');
  const reviewCount = document.querySelector('#reviewCount');
  const pending = records.filter(({ status }) => status === 'Needs Review' || status === 'Urgent Review');

  if (reviewCount) reviewCount.textContent = String(pending.length);
  if (!reviewList) return;

  reviewList.innerHTML = '';
  if (!pending.length) {
    reviewList.innerHTML = '<p class="empty-review">No pending reviews. Great job!</p>';
    return;
  }

  pending.forEach((activity) => {
    const link = document.createElement('a');
    link.className = 'review-item';
    link.href = activity.url || 'revision.html';
    link.innerHTML = `
      <span>${activity.name || activity.id}</span>
      <strong>${activity.percentage}%</strong>
      <em class="status-tag ${activity.status === 'Urgent Review' ? 'danger' : 'warning'}">${activity.status}</em>
    `;
    reviewList.appendChild(link);
  });
}

function getNextPracticeUrl(records = getActivityRecords()) {
  const urgent = records.find(({ status }) => status === 'Urgent Review');
  if (urgent) return urgent.url || 'revision.html';
  const needsReview = records.find(({ status }) => status === 'Needs Review');
  if (needsReview) return needsReview.url || 'revision.html';
  const completedUrls = new Set(records.map((record) => record.url));
  return nextNewActivities.find((url) => !completedUrls.has(url)) || 'unit1.html';
}

function initializeDashboard() {
  personalizeDashboard();
  const records = getActivityRecords();
  const activitiesCompleted = document.querySelector('#activitiesCompleted');
  const currentLevel = document.querySelector('#currentLevel');
  if (activitiesCompleted) activitiesCompleted.textContent = String(records.length);
  if (currentLevel) currentLevel.textContent = calculateCurrentLevel(records);
  renderDashboardReviews(records);

  document.querySelector('#startPracticeBtn')?.addEventListener('click', () => {
    window.location.href = getNextPracticeUrl(records);
  });
}

function validateAnswer(selected, expected) {
  if (selected === expected) return { status: 'success', message: 'Correct! Great job.' };
  if (selected && expected && selected[0] === expected[0]) return { status: 'warning', message: 'Almost there. Review the details.' };
  return { status: 'danger', message: 'Try again and check the explanation.' };
}

function controlAudio(audioElement, action = 'play') {
  if (!audioElement) return false;
  if (action === 'pause') audioElement.pause();
  else audioElement.play();
  return true;
}

initializeDashboard();
window.NV3 = { validateAnswer, controlAudio, getStudentName, personalizeDashboard, getActivityRecords, getStatusFromPercentage, saveActivityResult, calculateCurrentLevel, renderDashboardReviews, getNextPracticeUrl };
