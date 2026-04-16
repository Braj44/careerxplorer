// ════════════════════════════════════════
// app.js — Navigation and global utilities
// ════════════════════════════════════════

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);

  if (page === 'dashboard') loadDashboard();
  if (page === 'profile')   loadProfile();
  if (page === 'results')   loadResults();
  if (page === 'explore')   loadExplore();
  if (page === 'quiz')      loadQuizPage();
}

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.style.opacity = '0', 2500);
  setTimeout(() => el.remove(), 3000);
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  updateNav();
  loadExplore();
});
