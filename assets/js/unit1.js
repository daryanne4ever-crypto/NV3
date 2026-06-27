// Unit 1 — Hotel Communication scoring and persistence.
function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/[?.!]/g, '').replace(/\s+/g, ' ');
}

function completeUnit1() {
  const inputs = [...document.querySelectorAll('[data-unit1-answer]')];
  const correct = inputs.filter((input) => normalizeAnswer(input.value) === normalizeAnswer(input.dataset.unit1Answer)).length;
  const percentage = inputs.length ? Math.round((correct / inputs.length) * 100) : 100;
  const record = window.NV3?.saveActivityResult('unit1-hotel-communication', 'Unit 1: Hotel Communication', percentage, 'unit1.html');
  const feedback = document.querySelector('#unit1Feedback');
  if (feedback && record) {
    feedback.textContent = `${percentage}% — ${record.status}`;
    feedback.className = `sentence-feedback ${percentage >= 80 ? 'success' : 'danger'}`;
  }
}

document.querySelector('#completeUnit1Btn')?.addEventListener('click', completeUnit1);
