// ════════════════════════════════════════
// quiz.js — Quiz logic and rendering
// ════════════════════════════════════════

let qState = { current:0, xp:0, combo:0, scores:{sci:0,com:0,art:0} };

function loadQuizPage() {
  document.getElementById('quiz-start-screen').classList.remove('hidden');
  document.getElementById('quiz-play-screen').classList.add('hidden');
  qState = { current:0, xp:0, combo:0, scores:{sci:0,com:0,art:0} };
}

function startQuiz() {
  qState = { current:0, xp:0, combo:0, scores:{sci:0,com:0,art:0} };
  document.getElementById('quiz-start-screen').classList.add('hidden');
  document.getElementById('quiz-play-screen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[qState.current];
  const pct = (qState.current / QUIZ_QUESTIONS.length * 100);

  document.getElementById('quiz-prog').style.width = pct + '%';
  document.getElementById('q-num').textContent = 'Question ' + (qState.current + 1) + ' of ' + QUIZ_QUESTIONS.length;
  document.getElementById('q-cat-label').textContent = q.cat;
  document.getElementById('q-category').textContent = '🎯 ' + q.cat.toUpperCase();
  document.getElementById('q-question').textContent = q.text;
  document.getElementById('quiz-xp').textContent = qState.xp;
  document.getElementById('quiz-combo').textContent = qState.combo;
  document.getElementById('combo-popup').classList.add('hidden');

  const grid = document.getElementById('quiz-options');
  grid.innerHTML = '';
  q.opts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = '<span class="opt-ico">' + opt.ico + '</span><span>' + opt.text + '</span>';
    btn.onclick = () => selectOption(opt, btn);
    grid.appendChild(btn);
  });
}

function selectOption(opt, btn) {
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
  btn.classList.add('selected');

  qState.combo++;
  const bonus = qState.combo > 2 ? 50 : 0;
  qState.xp += 100 + bonus;
  qState.scores.sci += opt.s.sci;
  qState.scores.com += opt.s.com;
  qState.scores.art += opt.s.art;

  document.getElementById('quiz-xp').textContent = qState.xp;
  document.getElementById('quiz-combo').textContent = qState.combo;

  if (qState.combo > 1) {
    const cp = document.getElementById('combo-popup');
    cp.textContent = '🔥 ' + qState.combo + 'x Combo! +' + (100 + bonus) + ' XP!';
    cp.classList.remove('hidden');
  }

  spawnXP(100 + bonus);

  setTimeout(() => {
    qState.current++;
    if (qState.current >= QUIZ_QUESTIONS.length) finishQuiz();
    else renderQuestion();
  }, 750);
}

function spawnXP(amt) {
  const el = document.createElement('div');
  el.className = 'xp-float';
  el.textContent = '+' + amt + ' XP!';
  el.style.left = (30 + Math.random() * 40) + '%';
  el.style.top = '40%';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

function finishQuiz() {
  const sc = qState.scores;
  const top = Object.keys(sc).sort((a, b) => sc[b] - sc[a])[0];

  const u = getCurrentUser();
  if (u) {
    const users = getUsers();
    users[u.email].xp         = (users[u.email].xp || 0) + qState.xp;
    users[u.email].quizzes    = (users[u.email].quizzes || 0) + 1;
    users[u.email].bestCombo  = Math.max(users[u.email].bestCombo || 0, qState.combo);
    users[u.email].topStream  = top;
    users[u.email].streamScores = sc;
    users[u.email].quizXP    = qState.xp;
    saveUsers(users);
    setCurrentUser(users[u.email]);
  }

  navigate('results');
}
