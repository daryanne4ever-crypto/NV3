// NLE Level 3 storage backbone — one localStorage API for every page.
const NV3_STORAGE_KEY = 'nv3:student-state';

const defaultStudentState = {
  studentName: 'Student',
  xp: 0,
  level: 'Beginner',
  units: {
    revision: { progress: 0 },
    grammar: { progress: 0 },
    unit1: { progress: 0 },
  },
  activities: {
    unit1_activity2: {
      id: 'unit1_activity2',
      name: 'Activity 2: Polite Requests & Transport',
      url: 'unit1.html#activity2',
      percentage: 0,
      status: 'Urgent Review',
    },
    unit1_activity3: {
      id: 'unit1_activity3',
      name: 'Activity 3: Check-in & Reservations',
      url: 'unit1.html#activity3',
      percentage: 0,
      status: 'Urgent Review',
    },
  },
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
    state.activities[activity.id] = {
      ...state.activities[activity.id],
      ...activity,
      percentage,
      status: activity.status || getStatusFromPercentage(percentage),
      completedAt: new Date().toISOString(),
    };
    return state;
  });
}

function addXp(amount) {
  return updateState((state) => ({ ...state, xp: Math.max(0, Number(state.xp || 0) + Number(amount || 0)) }));
}

function setStudentName(studentName) {
  return updateState((state) => ({ ...state, studentName: studentName?.trim() || 'Student' }));
}

window.NV3Storage = { readState, writeState, updateState, getActivities, getStatusFromPercentage, saveActivityResult, addXp, setStudentName };
