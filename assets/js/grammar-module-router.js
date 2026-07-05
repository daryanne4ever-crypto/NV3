/**
 * Grammar Module Router
 * Manages loading and displaying grammar modules dynamically
 */

const moduleRouter = {
  // Module configurations
  modules: {
    'alphabet': {
      name: 'Alphabet',
      path: 'assets/modules/alphabet-module.html',
      id: 'alphabet-module-container'
    },
    'ipa': {
      name: 'Pronunciation (IPA Básico)',
      path: 'assets/modules/ipa-module.html',
      id: 'ipa-module-container'
    },
    'verb-tenses': {
      name: 'Verb Tenses',
      path: 'assets/modules/verb-tenses-module.html',
      id: 'verb-tenses-module-container'
    },
    'active-voice': {
      name: 'Active Voice',
      path: 'assets/modules/active-voice-module.html',
      id: 'active-voice-module-container'
    },
    'passive-voice': {
      name: 'Passive Voice',
      path: 'assets/modules/passive-voice-module.html',
      id: 'passive-voice-module-container'
    },
    'comparatives': {
      name: 'Comparatives & Superlatives',
      path: 'assets/modules/comparatives-module.html',
      id: 'comparatives-module-container'
    },
    'affixes': {
      name: 'Affixes, Prefixes & Suffixes',
      path: 'assets/modules/affixes-module.html',
      id: 'affixes-module-container'
    }
  },

  // Current active module
  currentModule: null,

  // Module cache
  cache: {},

  /**
   * Initialize router and attach click handlers to grammar cards
   */
  init() {
    console.log('🚀 Initializing Grammar Module Router...');
    
    // Create main content container if it doesn't exist
    this.ensureContentContainer();
    
    // Attach click handlers to all grammar cards
    document.querySelectorAll('[data-module]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const moduleId = card.getAttribute('data-module');
        this.loadModule(moduleId);
      });
    });

    console.log('✅ Grammar Module Router initialized');
  },

  /**
   * Ensure main content container exists
   */
  ensureContentContainer() {
    if (!document.getElementById('grammar-modules-content')) {
      const container = document.createElement('div');
      container.id = 'grammar-modules-content';
      container.className = 'grammar-modules-content';
      
      // Insert after grammar header or at the end of main content
      const grammarHub = document.querySelector('.grammar-hub');
      if (grammarHub) {
        grammarHub.appendChild(container);
      } else {
        const main = document.querySelector('main');
        if (main) {
          main.appendChild(container);
        }
      }
    }
  },

  /**
   * Load a grammar module
   * @param {string} moduleId - The module identifier
   */
  async loadModule(moduleId) {
    console.log(`📚 Loading module: ${moduleId}`);

    // Validate module exists
    if (!this.modules[moduleId]) {
      console.error(`❌ Module '${moduleId}' not found`);
      return;
    }

    // Show loading state
    this.showLoadingState();

    try {
      // Check cache first
      if (!this.cache[moduleId]) {
        const response = await fetch(this.modules[moduleId].path);
        if (!response.ok) {
          throw new Error(`Failed to fetch module: ${response.status}`);
        }
        this.cache[moduleId] = await response.text();
      }

      // Render module
      this.renderModule(moduleId);
      this.currentModule = moduleId;

      // Scroll to content
      this.scrollToContent();

      console.log(`✅ Module loaded: ${moduleId}`);
    } catch (error) {
      console.error(`❌ Error loading module:`, error);
      this.showErrorState(error.message);
    }
  },

  /**
   * Render module content
   * @param {string} moduleId - The module identifier
   */
  renderModule(moduleId) {
    const container = document.getElementById('grammar-modules-content');
    if (!container) return;

    // Clear previous content
    container.innerHTML = this.cache[moduleId];

    // Highlight current card in grammar grid
    document.querySelectorAll('[data-module]').forEach(card => {
      card.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleId}"]`)?.classList.add('active');

    // Re-initialize any scripts in the loaded content
    this.initializeModuleScripts(moduleId);
  },

  /**
   * Initialize scripts within loaded module
   * @param {string} moduleId - The module identifier
   */
  initializeModuleScripts(moduleId) {
    // Re-run DOMContentLoaded event for module-specific scripts
    const event = new Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);

    // Also trigger module-specific init if exists
    if (window[`init${this.capitalize(moduleId)}`]) {
      window[`init${this.capitalize(moduleId)}`]();
    }
  },

  /**
   * Capitalize string
   */
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-./g, x => x[1].toUpperCase());
  },

  /**
   * Show loading state
   */
  showLoadingState() {
    const container = document.getElementById('grammar-modules-content');
    if (container) {
      container.innerHTML = `
        <div style="
          text-align: center;
          padding: 3rem;
          color: #a0a0a0;
        ">
          <div style="
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 3px solid rgba(199, 125, 255, 0.2);
            border-top-color: #c97dff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          "></div>
          <p style="margin-top: 1rem;">Loading module...</p>
        </div>
        <style>
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        </style>
      `;
    }
  },

  /**
   * Show error state
   */
  showErrorState(message) {
    const container = document.getElementById('grammar-modules-content');
    if (container) {
      container.innerHTML = `
        <div style="
          background: rgba(255, 23, 68, 0.1);
          border: 2px solid #ff1744;
          border-radius: 0.8rem;
          padding: 2rem;
          color: #ff1744;
          text-align: center;
        ">
          <h3>❌ Error Loading Module</h3>
          <p>${message}</p>
          <p style="font-size: 0.9rem; opacity: 0.8;">Please try again or contact support.</p>
        </div>
      `;
    }
  },

  /**
   * Scroll to module content
   */
  scrollToContent() {
    const container = document.getElementById('grammar-modules-content');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  moduleRouter.init();
});

// Export for global access
window.moduleRouter = moduleRouter;
