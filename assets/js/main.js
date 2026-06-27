// NLE Level 3 (NV3) — initial interaction layer for navigation, XP simulation and study feedback.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});

let xp = Number(localStorage.getItem('nv3-xp') || 2480);
const xpTotal = document.querySelector('#xpTotal');
if (xpTotal) xpTotal.textContent = xp.toLocaleString('pt-BR');

function addXp(amount = 10) {
  xp += amount;
  localStorage.setItem('nv3-xp', String(xp));
  if (xpTotal) xpTotal.textContent = xp.toLocaleString('pt-BR');
  return xp;
}

document.querySelectorAll('[data-xp], #startPracticeBtn').forEach((button) => {
  button.addEventListener('click', () => {
    const amount = Number(button.dataset.xp || 15);
    const total = addXp(amount);
    button.textContent = `+${amount} XP adicionados! Total: ${total.toLocaleString('pt-BR')}`;
  });
});

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

window.NV3 = { addXp, validateAnswer, controlAudio };
