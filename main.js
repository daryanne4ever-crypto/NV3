const ACTIVITY_PREFIX = 'nv3_activity_';

const activities = [
  { id: 'unit1_activity1', name: 'Activity 1: Information & Doubts', url: 'unit1.html#activity1' },
  { id: 'unit1_activity2', name: 'Activity 2: Polite Requests & Transport', url: 'unit1.html#activity2' },
  { id: 'unit1_activity3', name: 'Activity 3: Check-in & Reservations', url: 'unit1.html#activity3' },
  { id: 'activity4_speaking', name: 'Activity 4: Speaking Practice', url: 'activity4.html' },
];

function getActivityKey(id) {
  return `${ACTIVITY_PREFIX}${id}`;
}

function readSavedActivities() {
  return activities.map((activity) => {
    const saved = localStorage.getItem(getActivityKey(activity.id));
    return saved ? { ...activity, ...JSON.parse(saved) } : activity;
  });
}

function getStatusByScore(score) {
  if (score >= 80) return 'Completed';
  if (score >= 40) return 'Needs Review';
  return 'Urgent Review';
}

function saveActivityResult(id, score) {
  const activity = activities.find((item) => item.id === id) || { id, name: id, url: 'index.html' };
  const percentage = Math.max(0, Math.min(100, Math.round(Number(score) || 0)));
  localStorage.setItem(getActivityKey(id), JSON.stringify({
    id,
    name: activity.name,
    url: activity.url,
    percentage,
    status: getStatusByScore(percentage),
    completedAt: new Date().toISOString(),
  }));
}

function calculateCurrentLevel(savedActivities) {
  const completed = savedActivities.filter((activity) => typeof activity.percentage === 'number');
  if (!completed.length) return { level: 'Beginner', average: 0 };
  const average = Math.round(completed.reduce((sum, activity) => sum + activity.percentage, 0) / completed.length);
  if (average < 40) return { level: 'Beginner', average };
  if (average < 60) return { level: 'Elementary', average };
  if (average < 80) return { level: 'Pre-Intermediate', average };
  return { level: 'Intermediate', average };
}

function renderReviews(savedActivities) {
  const reviewsList = document.getElementById('reviewsList');
  if (!reviewsList) return;
  const reviewItems = savedActivities.filter((activity) => ['Needs Review', 'Urgent Review'].includes(activity.status));
  reviewsList.innerHTML = '';
  if (!reviewItems.length) {
    reviewsList.innerHTML = '<p class="empty-state">No activities requiring review at this moment</p>';
    return;
  }
  reviewItems.forEach((activity) => {
    const item = document.createElement('a');
    item.className = 'review-item';
    item.href = activity.url;
    item.innerHTML = `
      <span class="review-name">${activity.name}</span>
      <span class="review-score">${activity.percentage}%</span>
      <span class="status-tag ${activity.status === 'Urgent Review' ? 'urgent' : 'needs'}">${activity.status}</span>
    `;
    reviewsList.appendChild(item);
  });
}

function startPractice() {
  const savedActivities = readSavedActivities();
  const urgent = savedActivities.find((activity) => activity.status === 'Urgent Review');
  if (urgent) return window.location.assign(urgent.url);
  const needsReview = savedActivities.find((activity) => activity.status === 'Needs Review');
  if (needsReview) return window.location.assign(needsReview.url);
  const nextNew = savedActivities.find((activity) => !activity.status) || activities[0];
  return window.location.assign(nextNew.url);
}

function initializeDashboard() {
  const savedActivities = readSavedActivities();
  const completedCount = savedActivities.filter((activity) => activity.status).length;
  const level = calculateCurrentLevel(savedActivities);
  document.getElementById('activitiesCompleted').textContent = completedCount;
  document.getElementById('currentLevel').textContent = level.level;
  document.getElementById('currentLevelPercentage').textContent = `${level.average}% average`;
  renderReviews(savedActivities);
  document.getElementById('goToReviewBtn')?.addEventListener('click', startPractice);
}

document.addEventListener('DOMContentLoaded', initializeDashboard);
window.NV3Progress = { saveActivityResult, getStatusByScore };
