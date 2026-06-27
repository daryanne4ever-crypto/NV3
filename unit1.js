function getStatusByScore(score) {
  if (score >= 80) return 'Completed';
  if (score >= 40) return 'Needs Review';
  return 'Urgent Review';
}

function saveActivityResult(id, name, url, score) {
  const percentage = Math.max(0, Math.min(100, Math.round(score)));
  localStorage.setItem(`nv3_activity_${id}`, JSON.stringify({
    id, name, url, percentage, status: getStatusByScore(percentage), completedAt: new Date().toISOString(),
  }));
}

function scoreActivity(section) {
  let total = 0;
  let correct = 0;
  section.querySelectorAll('.question').forEach((question) => {
    total += 1;
    if (question.querySelector('.option.selected')?.dataset.answer === question.dataset.correct) correct += 1;
  });
  section.querySelectorAll('input, textarea').forEach((input) => {
    if (!input.closest('.question')) {
      total += 1;
      if (input.value.trim().length >= 3) correct += 1;
    }
  });
  return total ? (correct / total) * 100 : 0;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.question').forEach((question) => {
    const strongText = question.querySelector('strong')?.textContent || '';
    if (strongText.includes('time is breakfast')) question.dataset.correct = 'What';
    if (strongText.includes('is the gym')) question.dataset.correct = 'Where';
    if (strongText.includes('restaurant close')) question.dataset.correct = 'When';
    if (strongText.includes('much is the room')) question.dataset.correct = 'How';
  });

  document.querySelectorAll('.option').forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.querySelectorAll('.option').forEach((option) => option.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  document.querySelectorAll('.btn-submit[data-activity]').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.closest('.activity-section');
      const id = `unit1_activity${button.dataset.activity}`;
      const name = section.querySelector('h2').textContent;
      const score = scoreActivity(section);
      saveActivityResult(id, name, `unit1.html#activity${button.dataset.activity}`, score);
      alert(`${name} saved with ${Math.round(score)}% (${getStatusByScore(score)}).`);
    });
  });
});
