/* ═══════════════════════════════════════════════
   script.js — Syed Hamzah Portfolio
   ═══════════════════════════════════════════════ */

// ─── Theme Toggle ────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html        = document.documentElement;

// Load saved preference (default: dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ─── Mobile Menu ─────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen     = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
});

// Close menu when a mobile nav link is tapped
function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
}

// ─── Scroll Fade-In ──────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


// ─── Simple HTML Escaper ─────────────────────────
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── Safe URL Helper ─────────────────────────────
// Validates whether a URL is a real web link and not a placeholder
function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) return false;
  if (trimmed.includes('[ADD') || trimmed.includes('your-username') || trimmed.includes('example.com')) {
    return false;
  }
  return true;
}

// ─── SVG Icons Helper ────────────────────────────
const ICONS = {
  externalLink: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  arrowRight: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  certificate: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`
};

// ─── Render Learning Journey ─────────────────────
function renderLearningJourney() {
  const container = document.getElementById('learning-tracks');
  const leadEl    = document.getElementById('learning-lead');
  if (!container || typeof PORTFOLIO_DATA === 'undefined') return;

  const data = PORTFOLIO_DATA.learningJourney;
  if (leadEl && data.leadText) {
    leadEl.textContent = data.leadText;
  }

  container.innerHTML = data.tracks.map(track => {
    const isCompleted = track.status === 'completed';
    const isActive    = track.status === 'active';
    const isUpcoming  = track.status === 'upcoming';

    let cardClass = 'learning-card fade-in';
    if (isActive) cardClass += ' active-focus';
    if (isUpcoming) cardClass += ' upcoming-phase';
    if (isCompleted) cardClass += ' completed';

    let badgeClass = 'track-badge';
    if (isCompleted) badgeClass += ' completed';
    else if (isActive) badgeClass += ' active';
    else badgeClass += ' upcoming';

    const topicsHtml = track.topics.map(topic => `
      <li>
        ${isCompleted ? ICONS.check : ICONS.arrowRight}
        <span>${escapeHtml(topic)}</span>
      </li>
    `).join('');

    return `
      <div class="${cardClass}">
        <div class="track-header">
          <span class="track-phase">${escapeHtml(track.phase)}</span>
          <span class="${badgeClass}">${escapeHtml(track.statusBadge)}</span>
        </div>
        <h3 class="track-title">${escapeHtml(track.title)}</h3>
        <p class="track-summary">${escapeHtml(track.summary)}</p>
        <div class="track-topics-title">// Topics & Concepts</div>
        <ul class="track-topics-list">
          ${topicsHtml}
        </ul>
      </div>
    `;
  }).join('');
}



// ─── Render Projects (Compact, 2-3 Sentences) ────
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || typeof PORTFOLIO_DATA === 'undefined') return;

  const allProjects = PORTFOLIO_DATA.projects;
  const filtered = allProjects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.isHighlighted || p.filterGroup === 'featured';
    if (filter === 'analysis') return p.filterGroup === 'analysis';
    if (filter === 'practice') return p.isPractice || p.filterGroup === 'practice';
    return true;
  });

  container.innerHTML = filtered.map(p => {
    // Badges in Header
    let badgesHtml = '';
    if (p.achievementBadge) {
      badgesHtml += `<span class="award-badge">${escapeHtml(p.achievementBadge)}</span>`;
    }
    if (p.challengeBadge) {
      badgesHtml += `<span class="challenge-badge">${escapeHtml(p.challengeBadge)}</span>`;
    }
    if (p.isPractice) {
      badgesHtml += `<span class="practice-badge">✦ Practice Project</span>`;
    }

    // Technology Tags
    const tagsHtml = (p.technologies && p.technologies.length) ? `
      <div class="project-tags">
        ${p.technologies.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    ` : '';

    // Action Buttons
    let actionsHtml = '';
    // 1. Live demo
    if (isValidUrl(p.liveDemoUrl)) {
      actionsHtml += `
        <a class="btn-project-action primary" href="${escapeHtml(p.liveDemoUrl)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(p.liveDemoLabel || 'Live Demo')}
          ${ICONS.externalLink}
        </a>
      `;
    }

    // 2. GitHub
    if (isValidUrl(p.githubUrl)) {
      actionsHtml += `
        <a class="btn-project-action secondary" href="${escapeHtml(p.githubUrl)}" target="_blank" rel="noopener noreferrer">
          ${ICONS.github}
          ${escapeHtml(p.githubLabel || 'View on GitHub')}
          ${ICONS.externalLink}
        </a>
      `;
    }

    return `
      <div class="project-card fade-in" id="project-${escapeHtml(p.id)}">
        <div class="project-card-header">
          <div class="project-num">${escapeHtml(p.projectNumber)} / ${escapeHtml(p.category)}</div>
          <div class="project-card-badges">${badgesHtml}</div>
        </div>

        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        ${p.subtitle ? `<div class="project-card-subtitle">${escapeHtml(p.subtitle)}</div>` : ''}

        <p class="project-desc">${escapeHtml(p.description)}</p>

        ${tagsHtml}

        <div class="project-actions-row">
          ${actionsHtml}
        </div>
      </div>
    `;
  }).join('');

  observeFadeElements();
}


// ─── Setup Project Filter Buttons ────────────────
function setupProjectFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}


// ─── Render Certifications (4 Items Grid) ────────
function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container || typeof PORTFOLIO_DATA === 'undefined') return;

  const certs = PORTFOLIO_DATA.certificates;

  container.innerHTML = certs.map(c => {
    const hasUrl = isValidUrl(c.url);

    let actionHtml = '';
    if (hasUrl) {
      actionHtml = `
        <a class="btn-project-action primary" href="${escapeHtml(c.url)}" target="_blank" rel="noopener noreferrer">
          View Certificate
          ${ICONS.externalLink}
        </a>
      `;
    } else {
      actionHtml = `
        <span class="btn-project-action disabled-pill" title="Certificate URL can be added in data.js">
          📄 Certificate Link Pending in data.js
        </span>
      `;
    }

    const dateHtml = c.issueDate ? `<span>·</span><span>📅 ${escapeHtml(c.issueDate)}</span>` : '';

    return `
      <div class="certificate-card fade-in" id="cert-${escapeHtml(c.id)}">
        <div class="certificate-card-top">
          <div class="certificate-icon-badge">${ICONS.certificate}</div>
          <span class="certificate-pill">${escapeHtml(c.badge || 'Verified')}</span>
        </div>

        <div class="certificate-number">${escapeHtml(c.number)} / CERTIFICATION</div>
        <h3 class="certificate-title">${escapeHtml(c.title)}</h3>

        <div class="certificate-meta">
          <span>🏢 ${escapeHtml(c.issuer)}</span>
          ${dateHtml}
        </div>

        <div class="certificate-actions">
          ${actionHtml}
        </div>
      </div>
    `;
  }).join('');

  observeFadeElements();
}


// ─── Initialize Learning Journey on DOM Ready ─────
document.addEventListener('DOMContentLoaded', () => {
  renderLearningJourney();
  renderProjects('all');
  renderCertificates();
  setupFilterButtons();
  document.querySelectorAll('#learning .fade-in').forEach(el => fadeObserver.observe(el));
});
