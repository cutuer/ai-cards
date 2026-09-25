// 我的筆記本（9/25 兔兔要）：答錯的題、看不懂的句子、看懂但不會用的，都存起來 → 複製給 Claude 深入講
// 用 app.js 的全域 state／CURRICULUM／saveState／renderCard；存在這支手機的 localStorage（跟星星同一份）
const KIND = { unclear: "❓ 看不懂", cantuse: "🛠 懂但不會用", keep: "⭐ 重要，想記住" };

function esc(t) {
  return String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function plain(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent || "").trim();
}
function findLesson(id) {
  for (const [lvlId, lvl] of Object.entries(CURRICULUM)) {
    const idx = lvl.lessons.findIndex(l => l.id === id);
    if (idx >= 0) return { lvlId, lvl, idx, lesson: lvl.lessons[idx] };
  }
  return null;
}
function goToLesson(id) {
  const f = findLesson(id);
  if (!f) return;
  state.currentLevel = f.lvlId;
  state.currentLessonIdx = f.idx;
  saveState();
  renderLevelTabs();
  renderCard();
  closeNotebook();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function addNote(n) {
  state.notes.push(Object.assign({ id: String(Date.now()) + Math.floor(Math.random() * 1000), ts: Date.now(), done: false }, n));
  saveState();
  updateNoteCount();
  vibrate(30);
}
function openItems() {
  return {
    wrong: Object.keys(state.wrongLog).filter(id => !state.wrongLog[id].done && findLesson(id)),
    notes: state.notes.filter(n => !n.done),
  };
}
function updateNoteCount() {
  const el = document.getElementById("noteCount");
  if (!el) return;
  const o = openItems();
  const n = o.wrong.length + o.notes.length;
  el.textContent = n ? String(n) : "";
}

// 課卡底下：這課存過的＋快速寫一句
function renderMyMarks(lesson) {
  const box = document.getElementById("myMarks");
  if (!box) return;
  const mine = state.notes.filter(n => n.lessonId === lesson.id);
  box.innerHTML = !mine.length ? "" : `<div class="quick-note-label">🖍 這課你存的（${mine.length}）</div>` + mine.map(n => `
    <div class="nb-item ${n.done ? "done" : ""}">
      <div class="nb-kind">${KIND[n.kind] || ""}${n.done ? "・已懂" : ""}</div>
      ${n.text ? `<div class="nb-quote">「${esc(n.text)}」</div>` : ""}
      ${n.note ? `<div class="nb-note">${esc(n.note)}</div>` : ""}
    </div>`).join("");
}
function bindLessonNotes(lesson) {
  renderMyMarks(lesson);
  document.querySelectorAll("[data-qk]").forEach(b => {
    b.onclick = () => {
      const ta = document.getElementById("quickNote");
      const txt = ta.value.trim();
      if (!txt) { ta.focus(); return; }
      addNote({ lessonId: lesson.id, text: "", kind: b.dataset.qk, note: txt });
      ta.value = "";
      renderMyMarks(lesson);
    };
  });
}

// 複製給 Claude 的文字
function exportText() {
  const o = openItems();
  const d = new Date();
  const vidOf = id => (id.match(/^yt_([A-Za-z0-9_-]{11})(?:_p\d+)?$/) || [])[1];
  const out = [`AI 課本｜我的筆記（${d.getMonth() + 1}/${d.getDate()}）請 Claude 一條一條深入講解`];
  if (o.wrong.length) {
    out.push("", "【答錯的題】");
    o.wrong.forEach((id, i) => {
      const f = findLesson(id), q = f.lesson.quiz, w = state.wrongLog[id];
      out.push(`${i + 1}. 《${plain(f.lesson.title)}》（${f.lvl.name.split("・")[0]}）`,
        `   題目：${plain(q.q)}`, `   我選：${plain(q.options[w.picked] || "")}`, `   正確：${plain(q.options[q.correct])}`);
      if (w.times > 1) out.push(`   錯了 ${w.times} 次`);
      if (vidOf(id)) out.push(`   影片：https://www.youtube.com/watch?v=${vidOf(id)}`);
    });
  }
  for (const k of Object.keys(KIND)) {
    const list = o.notes.filter(n => n.kind === k);
    if (!list.length) continue;
    out.push("", `【${KIND[k].split(" ")[1]}】`);
    list.forEach((n, i) => {
      const f = findLesson(n.lessonId);
      out.push(`${i + 1}. 《${f ? plain(f.lesson.title) : n.lessonId}》`);
      if (n.text) out.push(`   句子：「${n.text}」`);
      if (n.note) out.push(`   我想問：${n.note}`);
    });
  }
  if (out.length === 1) out.push("", "（目前沒有未解決的）");
  return out.join("\n");
}
function copyText(t) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
  const ta = document.createElement("textarea");
  ta.value = t;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } finally { ta.remove(); }
  return Promise.resolve();
}

// 筆記本抽屜
function noteCard(n, done) {
  const f = findLesson(n.lessonId);
  return `<div class="nb-item ${done ? "done" : ""}">
    <div class="nb-kind">${done ? (KIND[n.kind] || "") + "・" : ""}${f ? esc(plain(f.lesson.title)) : ""}</div>
    ${n.text ? `<div class="nb-quote">「${esc(n.text)}」</div>` : ""}
    ${n.note ? `<div class="nb-note">${esc(n.note)}</div>` : ""}
    <div class="nb-btns">${f ? `<button data-go="${esc(n.lessonId)}">去那課</button>` : ""}
      ${done ? `<button data-nundo="${n.id}">放回去</button>` : `<button data-ndone="${n.id}">✓ 懂了</button>`}
      <button data-ndel="${n.id}">刪除</button></div>
  </div>`;
}
function wrongCard(id, done) {
  const f = findLesson(id), q = f.lesson.quiz, w = state.wrongLog[id];
  return `<div class="nb-item ${done ? "done" : ""}">
    <div class="nb-kind">${esc(plain(f.lesson.title))}${w.times > 1 ? `・錯 ${w.times} 次` : ""}</div>
    <div class="nb-note">${q.q}</div>
    <div class="nb-wrong">你選：${q.options[w.picked] || ""}</div>
    <div class="nb-right">正確：${q.options[q.correct]}</div>
    <div class="nb-btns"><button data-go="${esc(id)}">去那課</button>
      ${done ? `<button data-wundo="${esc(id)}">放回去</button>` : `<button data-wdone="${esc(id)}">✓ 懂了</button>`}</div>
  </div>`;
}
function renderNotebook() {
  const list = document.getElementById("notebookList");
  const o = openItems();
  const doneWrong = Object.keys(state.wrongLog).filter(id => state.wrongLog[id].done && findLesson(id));
  const doneNotes = state.notes.filter(n => n.done);
  let h = `<div class="nb-section">❌ 答錯的題（${o.wrong.length}）</div>`;
  h += o.wrong.map(id => wrongCard(id, false)).join("") || '<div class="nb-empty">還沒有答錯的題</div>';
  for (const k of Object.keys(KIND)) {
    const items = o.notes.filter(n => n.kind === k);
    h += `<div class="nb-section">${KIND[k]}（${items.length}）</div>`;
    h += items.map(n => noteCard(n, false)).join("") || '<div class="nb-empty">還沒有</div>';
  }
  if (doneWrong.length + doneNotes.length) {
    h += `<div class="nb-section">✅ 已經懂了（${doneWrong.length + doneNotes.length}） <button class="nb-mini" id="nbShowDone">展開</button></div>
      <div id="nbDone" hidden>${doneWrong.map(id => wrongCard(id, true)).join("")}${doneNotes.map(n => noteCard(n, true)).join("")}</div>`;
  }
  list.innerHTML = h;
  const note = v => state.notes.find(n => String(n.id) === v);
  const redraw = () => { saveState(); updateNoteCount(); renderNotebook(); };
  list.querySelectorAll("[data-go]").forEach(b => b.onclick = () => goToLesson(b.dataset.go));
  list.querySelectorAll("[data-wdone]").forEach(b => b.onclick = () => { state.wrongLog[b.dataset.wdone].done = true; redraw(); });
  list.querySelectorAll("[data-wundo]").forEach(b => b.onclick = () => { state.wrongLog[b.dataset.wundo].done = false; redraw(); });
  list.querySelectorAll("[data-ndone]").forEach(b => b.onclick = () => { note(b.dataset.ndone).done = true; redraw(); });
  list.querySelectorAll("[data-nundo]").forEach(b => b.onclick = () => { note(b.dataset.nundo).done = false; redraw(); });
  list.querySelectorAll("[data-ndel]").forEach(b => b.onclick = () => {
    if (!confirm("確定刪掉這條？刪了就找不回來")) return;
    state.notes = state.notes.filter(n => String(n.id) !== b.dataset.ndel);
    redraw();
  });
  const sd = document.getElementById("nbShowDone");
  if (sd) sd.onclick = () => { const d = document.getElementById("nbDone"); d.hidden = !d.hidden; sd.textContent = d.hidden ? "展開" : "收起"; };
}
const notebookEl = document.getElementById("notebookDrawer");
function openNotebook() {
  renderNotebook();
  drawerBackdropEl.classList.add("show");
  notebookEl.classList.add("show");
}
function closeNotebook() {
  notebookEl.classList.remove("show");
  if (!drawerContentEl.classList.contains("show")) drawerBackdropEl.classList.remove("show");
}
document.getElementById("notebookBtn").onclick = openNotebook;
document.getElementById("notebookCloseBtn").onclick = closeNotebook;
drawerBackdropEl.addEventListener("click", closeNotebook);
document.getElementById("nbCopyBtn").onclick = () => {
  const b = document.getElementById("nbCopyBtn");
  const t = exportText();
  copyText(t).then(() => {
    b.textContent = "✅ 已複製，去貼給 Claude";
    setTimeout(() => { b.textContent = "📋 複製給 Claude"; }, 2500);
  }, () => prompt("複製不了，長按下面全選複製：", t));
};
document.getElementById("nbShareBtn").onclick = () => {
  const t = exportText();
  if (navigator.share) navigator.share({ title: "AI 課本筆記", text: t }).catch(() => {});
  else copyText(t).then(() => alert("這支手機不支援分享，已改成複製"));
};

// 反白句子 → 浮出「🖍 畫線存起來」→ 選看不懂／不會用／重要 → 存
const markFab = document.getElementById("markFab");
const markSheet = document.getElementById("markSheet");
const markBackdrop = document.getElementById("markBackdrop");
let pendingMark = "";
let markKind = "unclear";
document.addEventListener("selectionchange", () => {
  if (markSheet.classList.contains("show")) return;
  const sel = window.getSelection();
  const t = String(sel || "").trim();
  if (t && sel.rangeCount && cardContainerEl.contains(sel.getRangeAt(0).commonAncestorContainer)) {
    pendingMark = t.slice(0, 400);
    markFab.hidden = false;
  } else if (!t) {
    setTimeout(() => { if (!String(window.getSelection() || "").trim()) markFab.hidden = true; }, 300);
  }
});
markFab.addEventListener("pointerdown", e => e.preventDefault());  // 別讓點按鈕把反白取消掉
markFab.addEventListener("mousedown", e => e.preventDefault());
markFab.onclick = () => {
  if (!pendingMark) return;
  document.getElementById("markQuote").textContent = "「" + pendingMark + "」";
  document.getElementById("markNote").value = "";
  markSheet.querySelectorAll(".mark-kind").forEach(b => b.classList.toggle("active", b.dataset.kind === markKind));
  markFab.hidden = true;
  markBackdrop.classList.add("show");
  markSheet.classList.add("show");
};
markSheet.querySelectorAll(".mark-kind").forEach(b => b.onclick = () => {
  markKind = b.dataset.kind;
  markSheet.querySelectorAll(".mark-kind").forEach(x => x.classList.toggle("active", x === b));
});
function closeMark() {
  markSheet.classList.remove("show");
  markBackdrop.classList.remove("show");
  try { window.getSelection().removeAllRanges(); } catch (e) {}
}
document.getElementById("markCancelBtn").onclick = closeMark;
markBackdrop.onclick = closeMark;
document.getElementById("markSaveBtn").onclick = () => {
  const lesson = CURRICULUM[state.currentLevel].lessons[state.currentLessonIdx];
  addNote({ lessonId: lesson.id, text: pendingMark, kind: markKind, note: document.getElementById("markNote").value.trim() });
  pendingMark = "";
  closeMark();
  renderMyMarks(lesson);
};

// 這功能上線前就答錯的題（只存在 answered 裡）→ 補進答錯紀錄
for (const [id, picked] of Object.entries(state.answered)) {
  const f = findLesson(id);
  if (f && picked !== f.lesson.quiz.correct && !state.wrongLog[id]) state.wrongLog[id] = { picked, ts: 0, times: 1, done: false };
}
saveState();

// app.js 先渲染過一次（那時還沒有這支）→ 補綁
bindLessonNotes(CURRICULUM[state.currentLevel].lessons[state.currentLessonIdx]);
updateNoteCount();
