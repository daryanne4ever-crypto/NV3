// Enhanced Dashboard with Username Management and Student Info

/**
 * Get student name from localStorage
 * If not found, prompt for it
 */
function getStudentNamePersistent() {
  const storageKey = 'nv3-student-name';
  let studentName = localStorage.getItem(storageKey);
  
  if (!studentName) {
    // Show modal to get name instead of prompt
    showStudentNameModal();
    studentName = localStorage.getItem(storageKey) || 'Aluno(a) NV3';
  }
  
  return studentName;
}

/**
 * Show modal to collect student name
 */
function showStudentNameModal() {
  const existingModal = document.querySelector('#studentNameModal');
  if (existingModal) {
    existingModal.style.display = 'flex';
    return;
  }
  
  const modal = document.createElement('div');
  modal.id = 'studentNameModal';
  modal.className = 'student-modal';
  modal.innerHTML = `
    <div class="student-modal-content">
      <div class="student-modal-header">
        <h2>👋 Bem-vindo ao NV3!</h2>
        <p>Para começar, nos diga seu nome:</p>
      </div>
      
      <div class="student-modal-body">
        <input 
          type="text" 
          id="studentNameInput" 
          placeholder="Digite seu nome..." 
          class="name-input"
          autocomplete="off"
        />
        <small class="input-hint">Seu nome será salvo automaticamente</small>
      </div>
      
      <div class="student-modal-footer">
        <button class="btn btn-primary" id="confirmNameBtn">Confirmar</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const input = modal.querySelector('#studentNameInput');
  const confirmBtn = modal.querySelector('#confirmNameBtn');
  
  // Focus on input
  setTimeout(() => input.focus(), 100);
  
  // Save on button click
  confirmBtn.addEventListener('click', () => {
    const name = input.value.trim();
    if (name) {
      localStorage.setItem('nv3-student-name', name);
      updateStudentDisplay(name);
      modal.style.display = 'none';
    } else {
      alert('Por favor, digite um nome válido.');
    }
  });
  
  // Save on Enter key
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      confirmBtn.click();
    }
  });
  
  modal.style.display = 'flex';
}

/**
 * Update student name display on page
 */
function updateStudentDisplay(name) {
  const studentNameElement = document.querySelector('#studentName');
  if (studentNameElement) {
    studentNameElement.textContent = name;
  }
  
  // Also update in header if exists
  const headerStudent = document.querySelector('[data-student-name]');
  if (headerStudent) {
    headerStudent.textContent = name;
  }
}

/**
 * Allow user to edit their name
 */
function editStudentName() {
  showStudentNameModal();
}

/**
 * Initialize student name on page load
 */
function initializeStudentName() {
  const studentName = getStudentNamePersistent();
  updateStudentDisplay(studentName);
  
  // Add edit button if it exists
  const editBtn = document.querySelector('[data-action="edit-name"]');
  if (editBtn) {
    editBtn.addEventListener('click', editStudentName);
  }
}

/**
 * Get student profile data
 */
function getStudentProfile() {
  const name = localStorage.getItem('nv3-student-name') || 'Aluno(a)';
  const state = window.NV3Storage?.readState?.() || {};
  
  return {
    name,
    level: calculateLevel(Object.values(state.activities || {})),
    xp: state.xp || 0,
    activitiesCompleted: Object.values(state.activities || {}).filter(a => a.status === 'Completed').length,
    totalActivities: Object.values(state.activities || {}).length,
    joinDate: state.joinDate || new Date().toLocaleDateString('pt-BR'),
    currentStreak: state.streak || 0
  };
}

/**
 * Calculate learning level
 */
function calculateLevel(activities) {
  const completed = activities.filter(a => a.status === 'Completed').length;
  if (completed >= 20) return 'Advanced (C1)';
  if (completed >= 12) return 'Intermediate (B2)';
  if (completed >= 5) return 'Pre-Intermediate (B1)';
  return 'Beginner (A1)';
}

/**
 * Display student profile card
 */
function displayStudentProfile() {
  const profile = getStudentProfile();
  const profileContainer = document.querySelector('#studentProfile');
  
  if (!profileContainer) return;
  
  profileContainer.innerHTML = `
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">
          ${profile.name.substring(0, 2).toUpperCase()}
        </div>
        <div class="profile-info">
          <h3>${profile.name}</h3>
          <p class="profile-level">📚 Nível: ${profile.level}</p>
        </div>
        <button class="profile-edit-btn" data-action="edit-name" title="Editar nome">✏️</button>
      </div>
      
      <div class="profile-stats">
        <div class="stat-item">
          <span class="stat-value">${profile.xp}</span>
          <span class="stat-label">XP</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${profile.activitiesCompleted}/${profile.totalActivities}</span>
          <span class="stat-label">Atividades</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">${profile.currentStreak}</span>
          <span class="stat-label">Dias Seguidos</span>
        </div>
      </div>
      
      <div class="profile-meta">
        <p>📅 Membro desde: ${profile.joinDate}</p>
      </div>
    </div>
  `;
  
  // Add edit listener
  profileContainer.querySelector('[data-action="edit-name"]')?.addEventListener('click', editStudentName);
}

/**
 * Render student dashboard
 */
function renderStudentDashboard() {
  const dashboard = document.querySelector('#studentDashboard');
  if (!dashboard) return;
  
  const profile = getStudentProfile();
  
  dashboard.innerHTML = `
    <div class="dashboard-hero-section">
      <div class="welcome-card">
        <h1>👋 Bem-vindo, ${profile.name}!</h1>
        <p>Continue seu progresso de aprendizado em inglês</p>
      </div>
      
      <div class="progress-card">
        <div class="progress-item">
          <h3>Nível Atual</h3>
          <p class="level-display">${profile.level}</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(profile.activitiesCompleted / Math.max(profile.totalActivities, 1)) * 100}%"></div>
          </div>
          <p class="progress-text">${profile.activitiesCompleted} de ${profile.totalActivities} atividades</p>
        </div>
        
        <div class="progress-item">
          <h3>Pontos (XP)</h3>
          <p class="xp-display">${profile.xp} 🌟</p>
          <p class="xp-hint">Ganhe XP completando atividades</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize dashboard with enhanced features
 */
function initializeDashboard() {
  console.log('🚀 Initializing enhanced dashboard...');
  
  // Initialize student name
  initializeStudentName();
  
  // Display profile
  displayStudentProfile();
  
  // Render dashboard
  renderStudentDashboard();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
  initializeDashboard();
}
