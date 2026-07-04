// NLE Level 3 storage backbone — one localStorage API for every page.
const NV3_STORAGE_KEY = 'nv3:student-state';

const defaultStudentState = {
  studentName: 'Student',
  lastActivity: null,
  level: 'Beginner',
  units: {
    revision: { progress: 0 },
    grammar: { progress: 0 },
    unit1: { progress: 0 },
  },
  activities: {},
};

function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

function mergeState(savedState) {
  return {
    ...cloneState(defaultStudentState),
    ...(savedState || {}),
    units: { ...defaultStudentState.units, ...(savedState?.units || {}) },
    activities: { ...defaultStudentState.activities, ...(savedState?.activities || {}) },
  };
}

function readState() {
  const rawState = localStorage.getItem(NV3_STORAGE_KEY);
  if (!rawState) return cloneState(defaultStudentState);

  try {
    return mergeState(JSON.parse(rawState));
  } catch {
    return cloneState(defaultStudentState);
  }
}

function writeState(nextState) {
  const state = mergeState(nextState);
  localStorage.setItem(NV3_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent('nv3:state-changed', { detail: state }));
  return state;
}

function updateState(updater) {
  const currentState = readState();
  return writeState(updater(currentState));
}

function getActivities() {
  return Object.values(readState().activities);
}

function getStatusFromPercentage(percentage) {
  if (percentage >= 80) return 'Completed';
  if (percentage >= 40) return 'Needs Review';
  return 'Urgent Review';
}

function saveActivityResult(activity) {
  return updateState((state) => {
    const percentage = Math.max(0, Math.min(100, Math.round(Number(activity.percentage) || 0)));
    const nextActivity = {
      ...state.activities[activity.id],
      ...activity,
      percentage,
      status: activity.status || getStatusFromPercentage(percentage),
      completedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
    };
    state.activities[activity.id] = nextActivity;
    state.lastActivity = nextActivity;
    return state;
  });
}

function saveLastActivity(activity) {
  return updateState((state) => {
    const nextActivity = {
      ...activity,
      lastAccessedAt: activity.lastAccessedAt || new Date().toISOString(),
    };
    state.activities[nextActivity.id] = { ...state.activities[nextActivity.id], ...nextActivity };
    state.lastActivity = nextActivity;
    return state;
  });
}

function setStudentName(studentName) {
  return updateState((state) => ({ ...state, studentName: studentName?.trim() || 'Student' }));
}

window.NV3Storage = { readState, writeState, updateState, getActivities, getStatusFromPercentage, saveActivityResult, saveLastActivity, setStudentName };
