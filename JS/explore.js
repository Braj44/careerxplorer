// ════════════════════════════════════════
// explore.js — Explore page, modals, filters
// ════════════════════════════════════════

let activeFilter = 'all';

function loadExplore() {
  renderCareers();
  renderColleges();
  renderSubjects();
}

function filterStream(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.sf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCareers();
  renderColleges();
}

function setExploreStream(s) {
  activeFilter = s;
  document.querySelectorAll('.sf-btn').forEach(b => {
    const txt = b.textContent.toLowerCase();
    b.classList.toggle('active', txt.includes(s) || (s === 'all' && txt === 'all streams'));
  });
  loadExplore();
}

function showTab(tab, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  btn.classList.add('active');
}

function renderCareers() {
  const data = activeFilter === 'all' ? CAREERS : CAREERS.filter(c => c.stream === activeFilter);
  document.getElementById('career-grid').innerHTML = data.map((c, i) => `
    <div class="career-card" onclick="openCareerModal(${i})">
      <div class="cc-header">
        <div class="cc-icon">${c.icon}</div>
        <div class="cc-title">${c.title}</div>
        <div class="cc-salary">${c.salary}</div>
      </div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-steps">
        ${c.steps.map(s => `<div class="cc-step">${s}</div>`).join('<div style="color:var(--dim);font-size:11px;padding:3px 2px">→</div>')}
      </div>
      <div style="margin-top:12px;font-size:12px;color:var(--gold);font-weight:600">Click for details →</div>
    </div>
  `).join('');
}

function renderColleges() {
  const data = activeFilter === 'all' ? COLLEGES : COLLEGES.filter(c => c.stream === activeFilter);
  document.getElementById('college-grid').innerHTML = data.map((c, i) => `
    <div class="college-crd" onclick="openCollegeModal(${i})">
      <div class="coll-rank" style="background:${c.color}22;color:${c.color}">#${c.rank}</div>
      <div class="coll-name">${c.name}</div>
      <div class="coll-city">📍 ${c.city}</div>
      <div class="coll-tags">${c.tags.map(t => `<span class="coll-tag">${t}</span>`).join('')}</div>
      <div style="margin-top:10px;font-size:12px;color:var(--gold);font-weight:600">Click for details →</div>
    </div>
  `).join('');
}

function renderSubjects() {
  document.getElementById('subjects-content').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px">
        <div style="font-size:28px;margin-bottom:12px">🔬</div>
        <div style="font-family:'Baloo 2',cursive;font-size:18px;font-weight:700;color:#4f8ef7;margin-bottom:16px">Science Subjects</div>
        ${['Physics — Forces, energy, mechanics','Chemistry — Elements, reactions, bonds','Biology — Life, cells, evolution','Mathematics — Calculus, algebra','Computer Science — Programming basics'].map(s => `<div style="padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--muted)">${s}</div>`).join('')}
        <div style="margin-top:16px;padding:12px;background:rgba(79,142,247,0.08);border-radius:var(--radius-sm);font-size:13px;color:#4f8ef7">💡 PCM ya PCB — dono valid hai goals ke anusaar!</div>
      </div>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px">
        <div style="font-size:28px;margin-bottom:12px">📈</div>
        <div style="font-family:'Baloo 2',cursive;font-size:18px;font-weight:700;color:#f7c948;margin-bottom:16px">Commerce Subjects</div>
        ${['Accountancy — Balance sheets, ledgers','Business Studies — Management basics','Economics — Markets, GDP, demand-supply','Mathematics (Optional) — CA ke liye important','Computer Science (Optional) — Digital business'].map(s => `<div style="padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--muted)">${s}</div>`).join('')}
        <div style="margin-top:16px;padding:12px;background:rgba(247,201,72,0.08);border-radius:var(--radius-sm);font-size:13px;color:#f7c948">💡 CA ya MBA ke liye Maths lena better hai!</div>
      </div>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px">
        <div style="font-size:28px;margin-bottom:12px">🎨</div>
        <div style="font-family:'Baloo 2',cursive;font-size:18px;font-weight:700;color:#a78bfa;margin-bottom:16px">Arts Subjects</div>
        ${['History — Ancient to modern India','Political Science — Government, democracy','Geography — Physical, human geography','Psychology — Mind aur behaviour','Sociology — Society aur culture','Fine Arts / Music / Drama'].map(s => `<div style="padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;color:var(--muted)">${s}</div>`).join('')}
        <div style="margin-top:16px;padding:12px;background:rgba(167,139,250,0.08);border-radius:var(--radius-sm);font-size:13px;color:#a78bfa">💡 UPSC ke liye Arts stream bahut helpful hai!</div>
      </div>
    </div>`;
}

function openCareerModal(idx) {
  const filteredData = activeFilter === 'all' ? CAREERS : CAREERS.filter(c => c.stream === activeFilter);
  const career = filteredData[idx];
  const globalIdx = CAREERS.findIndex(c => c.title === career.title);
  const detail = CAREER_DETAILS[globalIdx];

  showModal(`
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
      <div style="font-size:48px">${detail.icon}</div>
      <div>
        <div style="font-family:'Baloo 2',cursive;font-size:24px;font-weight:800">${detail.title}</div>
        <div style="background:rgba(52,211,153,0.15);color:#34d399;padding:4px 12px;border-radius:50px;font-size:13px;font-weight:700;display:inline-block;margin-top:4px">${detail.salary} per year</div>
      </div>
    </div>
    <div style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:20px">${detail.desc}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:12px;color:var(--gold);font-weight:700;margin-bottom:10px;letter-spacing:1px">REQUIRED SKILLS</div>
        ${detail.skills.map(s => `<div style="font-size:13px;color:var(--muted);padding:5px 0;border-bottom:1px solid var(--border)">${s}</div>`).join('')}
      </div>
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:12px;color:var(--blue);font-weight:700;margin-bottom:10px;letter-spacing:1px">ENTRANCE EXAMS</div>
        ${detail.exams.map(e => `<div style="font-size:13px;color:var(--muted);padding:5px 0;border-bottom:1px solid var(--border)">${e}</div>`).join('')}
      </div>
    </div>
    <div style="background:var(--surface);border-radius:var(--radius);padding:14px;margin-bottom:14px">
      <div style="font-size:12px;color:var(--purple);font-weight:700;margin-bottom:8px;letter-spacing:1px">SCOPE & FUTURE</div>
      <div style="font-size:14px;color:var(--muted)">${detail.scope}</div>
    </div>
    <div style="font-size:12px;color:var(--gold);font-weight:700;margin-bottom:8px;letter-spacing:1px">TOP COLLEGES</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${detail.colleges.map(c => `<span style="background:rgba(247,201,72,0.1);border:1px solid rgba(247,201,72,0.2);color:var(--gold);padding:4px 12px;border-radius:50px;font-size:12px;font-weight:600">${c}</span>`).join('')}
    </div>
  `);
}

function openCollegeModal(idx) {
  const filteredData = activeFilter === 'all' ? COLLEGES : COLLEGES.filter(c => c.stream === activeFilter);
  const college = filteredData[idx];
  const globalIdx = COLLEGES.findIndex(c => c.name === college.name);
  const detail = COLLEGE_DETAILS[globalIdx];

  showModal(`
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
      <div style="width:56px;height:56px;border-radius:50%;background:${detail.color}22;display:flex;align-items:center;justify-content:center;font-family:'Baloo 2',cursive;font-size:20px;font-weight:800;color:${detail.color}">#${detail.rank}</div>
      <div>
        <div style="font-family:'Baloo 2',cursive;font-size:22px;font-weight:800">${detail.name}</div>
        <div style="font-size:13px;color:var(--muted)">📍 ${detail.city}</div>
      </div>
    </div>
    <div style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:20px">${detail.desc}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:11px;color:var(--gold);font-weight:700;letter-spacing:1px;margin-bottom:6px">CUT-OFF</div>
        <div style="font-size:13px;color:var(--text)">${detail.cutoff}</div>
      </div>
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:11px;color:var(--green);font-weight:700;letter-spacing:1px;margin-bottom:6px">FEES</div>
        <div style="font-size:13px;color:var(--text)">${detail.fees}</div>
      </div>
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:11px;color:var(--blue);font-weight:700;letter-spacing:1px;margin-bottom:6px">PLACEMENT</div>
        <div style="font-size:13px;color:var(--text)">${detail.placement}</div>
      </div>
      <div style="background:var(--surface);border-radius:var(--radius);padding:14px">
        <div style="font-size:11px;color:var(--purple);font-weight:700;letter-spacing:1px;margin-bottom:6px">WEBSITE</div>
        <div style="font-size:13px;color:var(--blue)">${detail.website}</div>
      </div>
    </div>
    <div style="font-size:12px;color:var(--gold);font-weight:700;margin-bottom:10px;letter-spacing:1px">COURSES OFFERED</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${detail.courses.map(c => `<span style="background:rgba(247,201,72,0.1);border:1px solid rgba(247,201,72,0.2);color:var(--gold);padding:4px 12px;border-radius:50px;font-size:12px;font-weight:600">${c}</span>`).join('')}
    </div>
  `);
}

function showModal(contentHTML) {
  const existing = document.getElementById('cx-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'cx-modal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" onclick="document.getElementById('cx-modal').remove()">✕</button>
      ${contentHTML}
    </div>`;
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  document.body.appendChild(modal);
}
