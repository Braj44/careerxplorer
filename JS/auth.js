// ════════════════════════════════════════
// auth.js — User authentication system
// ════════════════════════════════════════

function getUsers() {
  try { return JSON.parse(localStorage.getItem('cx_users') || '{}'); } catch(e) { return {}; }
}
function saveUsers(u) { localStorage.setItem('cx_users', JSON.stringify(u)); }

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem('cx_current') || 'null'); } catch(e) { return null; }
}
function setCurrentUser(u) { localStorage.setItem('cx_current', JSON.stringify(u)); }
function clearCurrentUser() { localStorage.removeItem('cx_current'); }

function updateUserData(key, val) {
  const u = getCurrentUser();
  if (!u) return;
  const users = getUsers();
  if (!users[u.email]) return;
  users[u.email][key] = val;
  saveUsers(users);
  setCurrentUser(users[u.email]);
}

function doRegister() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-password').value;
  const cls   = document.getElementById('reg-class').value;
  const errEl = document.getElementById('reg-error');

  if (!name || !email || !pass) { showErr(errEl, 'Saare fields fill karo!'); return; }
  if (pass.length < 6)          { showErr(errEl, 'Password kam se kam 6 characters ka hona chahiye.'); return; }
  if (!email.includes('@'))     { showErr(errEl, 'Valid email address dalo.'); return; }

  const users = getUsers();
  if (users[email]) { showErr(errEl, 'Ye email already registered hai. Login karo!'); return; }

  const newUser = { name, email, pass, cls, xp:0, quizzes:0, bestCombo:0, topStream:null, streamScores:null, quizXP:0 };
  users[email] = newUser;
  saveUsers(users);
  setCurrentUser(newUser);

  errEl.classList.add('hidden');
  showToast('🎉 Account ban gaya! Welcome, ' + name + '!');
  navigate('dashboard');
  updateNav();
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');

  if (!email || !pass) { showErr(errEl, 'Email aur password dono dalo!'); return; }

  const users = getUsers();
  if (!users[email] || users[email].pass !== pass) { showErr(errEl, 'Email ya password galat hai!'); return; }

  setCurrentUser(users[email]);
  errEl.classList.add('hidden');
  showToast('👋 Welcome back, ' + users[email].name + '!');
  navigate('dashboard');
  updateNav();
}

function logout() {
  clearCurrentUser();
  updateNav();
  navigate('landing');
  showToast('Successfully logged out!');
}

function requireAuth(page) {
  if (!getCurrentUser()) { navigate('login'); return; }
  navigate(page);
}

function showErr(el, msg) {
  el.textContent = msg;
  el.classList.remove('hidden');
}

function updateNav() {
  const user = getCurrentUser();
  document.getElementById('nav-auth-btns').classList.toggle('hidden', !!user);
  document.getElementById('nav-user-btns').classList.toggle('hidden', !user);
}
