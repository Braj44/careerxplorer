// ════════════════════════════════════════
// dashboard.js — Dashboard, results, profile
// ════════════════════════════════════════

function getRank(xp) {
  if (xp >= 5000) return '🌟 Legend';
  if (xp >= 2000) return '💎 Master';
  if (xp >= 1000) return '⚡ Expert';
  if (xp >= 500)  return '🔥 Achiever';
  return '🚀 Explorer';
}

function loadDashboard() {
  const u = getCurrentUser();
  if (!u) { navigate('login'); return; }

  document.getElementById('dash-name').textContent = u.name + ' 👋';

  const level      = Math.floor((u.xp || 0) / 500) + 1;
  const xpInLevel  = (u.xp || 0) % 500;

  document.getElementById('dash-level').textContent    = level;
  document.getElementById('dash-rank').textContent     = getRank(u.xp || 0);
  document.getElementById('xp-needed').textContent     = 500 - xpInLevel;
  document.getElementById('dash-xp-fill').style.width  = (xpInLevel / 500 * 100) + '%';
  document.getElementById('dash-xp-count').textContent = (u.xp || 0) + ' XP';

  document.getElementById('stat-xp').textContent     = u.xp || 0;
  document.getElementById('stat-quiz').textContent   = u.quizzes || 0;
  document.getElementById('stat-streak').textContent = u.bestCombo || 0;
  document.getElementById('stat-acc').textContent    = u.quizzes ? '100%' : '0%';

  if (u.topStream) {
    document.getElementById('dash-no-quiz').classList.add('hidden');
    document.getElementById('dash-stream-result').classList.remove('hidden');
    const sd = STREAM_DATA[u.topStream];
    document.getElementById('dsr-icon').textContent   = sd.emoji;
    document.getElementById('dsr-stream').textContent = sd.name;
    const sc = u.streamScores || { sci:0, com:0, art:0 };
    const total = sc.sci + sc.com + sc.art || 1;
    document.getElementById('dsr-score').textContent = Math.round(sc[u.topStream] / total * 100) + '%';
  } else {
    document.getElementById('dash-no-quiz').classList.remove('hidden');
    document.getElementById('dash-stream-result').classList.add('hidden');
  }
}

function showDashSection(sec, btn) {
  document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function loadResults() {
  const u = getCurrentUser();
  if (!u || !u.topStream) {
    document.getElementById('res-title').textContent   = 'Quiz nahi diya abhi!';
    document.getElementById('res-tagline').textContent = 'Pehle quiz do phir results dekho.';
    return;
  }

  const sd    = STREAM_DATA[u.topStream];
  const sc    = u.streamScores || { sci:0, com:0, art:0 };
  const total = sc.sci + sc.com + sc.art || 1;

  document.getElementById('res-badge').textContent        = sd.emoji;
  document.getElementById('res-title').textContent        = sd.name;
  document.getElementById('res-title').style.color        = sd.color;
  document.getElementById('res-tagline').textContent      = sd.tagline;
  document.getElementById('res-xp-val').textContent       = u.quizXP || u.xp;
  document.getElementById('res-acc-val').textContent      = '100%';
  document.getElementById('res-rank-val').textContent     = sd.rank;

  const colors = { sci:'#4f8ef7', com:'#f7c948', art:'#a78bfa' };
  const names  = { sci:'🔬 Science', com:'📈 Commerce', art:'🎨 Arts' };

  document.getElementById('res-bars').innerHTML = Object.keys(sc).map(k => {
    const pct = Math.round(sc[k] / total * 100);
    return `<div class="stream-score-row">
      <div class="ssr-name">${names[k]}</div>
      <div class="ssr-bar"><div class="ssr-fill" style="width:${pct}%;background:${colors[k]}"></div></div>
      <div class="ssr-pct" style="color:${colors[k]}">${pct}%</div>
    </div>`;
  }).join('');

  document.getElementById('res-opps').innerHTML = sd.opps.map(o =>
    `<div class="opp-pill"><div class="opp-dot" style="background:${sd.color}"></div>${o}</div>`
  ).join('');
}

function loadProfile() {
  const u = getCurrentUser();
  if (!u) { navigate('login'); return; }

  const initials = u.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('prof-avatar').textContent = initials;
  document.getElementById('prof-name').textContent   = u.name;
  document.getElementById('prof-email').textContent  = u.email;
  document.getElementById('prof-xp').textContent     = u.xp || 0;
  document.getElementById('prof-quiz').textContent   = u.quizzes || 0;
  document.getElementById('prof-stream').textContent = u.topStream ? STREAM_DATA[u.topStream].emoji + ' ' + u.topStream.toUpperCase() : '—';
  document.getElementById('prof-level').textContent  = Math.floor((u.xp || 0) / 500) + 1;

  const badges = [];
  if ((u.quizzes || 0) >= 1)  badges.push('🎮 Quiz Taker');
  if ((u.xp || 0) >= 500)     badges.push('⚡ XP Hunter');
  if ((u.xp || 0) >= 1000)    badges.push('🔥 Power User');
  if (u.topStream === 'sci')   badges.push('🔬 Science Star');
  if (u.topStream === 'com')   badges.push('📈 Commerce King');
  if (u.topStream === 'art')   badges.push('🎨 Creative Soul');
  if (!badges.length)          badges.push('🚀 New Explorer');

  document.getElementById('prof-badges').innerHTML = badges.map(b => `<span class="pb">${b}</span>`).join('');

  const achievements = [
    { icon:'🎮', title:'Quiz Master',   desc:'Pehla quiz complete kiya',  earned: (u.quizzes || 0) >= 1 },
    { icon:'⚡', title:'500 XP Club',   desc:'500 XP earn kiya',          earned: (u.xp || 0) >= 500 },
    { icon:'🔥', title:'1000 XP Hero',  desc:'1000 XP earn kiya',         earned: (u.xp || 0) >= 1000 },
    { icon:'🔥', title:'Combo King',    desc:'5+ combo streak',            earned: (u.bestCombo || 0) >= 5 },
    { icon:'🎯', title:'Stream Found',  desc:'Apna stream discover kiya',  earned: !!u.topStream },
    { icon:'🌟', title:'Legend',        desc:'5000 XP earn karo',          earned: (u.xp || 0) >= 5000 },
  ];

  document.getElementById('achievements-grid').innerHTML = achievements.map(a => `
    <div style="background:${a.earned ? 'rgba(247,201,72,0.08)' : 'var(--surface)'};border:1px solid ${a.earned ? 'rgba(247,201,72,0.25)' : 'var(--border)'};border-radius:var(--radius);padding:16px;opacity:${a.earned ? 1 : 0.45}">
      <div style="font-size:28px;margin-bottom:8px">${a.icon}</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:4px;color:${a.earned ? 'var(--gold)' : 'var(--muted)'}">${a.title}</div>
      <div style="font-size:12px;color:var(--muted)">${a.desc}</div>
    </div>
  `).join('');
}
