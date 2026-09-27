// 雲端同步（9/27 兔兔：手機、電腦讀到哪要一樣）：進度／筆記存進她 GitHub 的私人 gist，各裝置讀寫同一份
// token 只存在這台裝置的 localStorage；筆記、答錯紀錄兩邊合併（不因較舊裝置覆蓋而掉資料），其餘以較新的為準
(function () {
  const KEY = "ark_ai_cards_state", TS = "ark_ai_cards_sync_ts", TOK = "ark_ai_cards_gh_token", GID = "ark_ai_cards_gist_id";
  const FILE = "ai_cards_state.json", DESC = "ark-ai-cards-sync";
  const ls = window.localStorage, rawSet = Storage.prototype.setItem;
  const api = (path, opt = {}) => fetch("https://api.github.com" + path, Object.assign({}, opt, {
    headers: { Authorization: "token " + ls.getItem(TOK), Accept: "application/vnd.github+json" }
  })).then(r => { if (!r.ok) throw new Error("GitHub " + r.status); return r.json(); });

  const btn = document.createElement("button");
  btn.style.cssText = "position:fixed;right:10px;bottom:10px;z-index:9999;border:0;border-radius:16px;padding:6px 12px;font-size:13px;background:#333;color:#fff;opacity:.8";
  const show = t => { btn.textContent = t; };
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(btn));

  // 進度只加不減：星星、答過的題、筆記、答錯紀錄兩邊聯集；讀到哪（冊／課）用較新那台的
  function merge(local, remote, remoteNewer) {
    const out = Object.assign({}, remoteNewer ? local : remote, remoteNewer ? remote : local);
    out.stars = Object.assign({}, local.stars || {}, remote.stars || {});
    out.answered = Object.assign({}, local.answered || {}, remote.answered || {});
    for (const k in out.answered) out.answered[k] = Math.max((local.answered || {})[k] || 0, (remote.answered || {})[k] || 0);
    const byId = {};
    [...(local.notes || []), ...(remote.notes || [])].forEach(n => {
      const o = byId[n.id]; if (!o || (n.ts || 0) >= (o.ts || 0)) byId[n.id] = n;
    });
    out.notes = Object.values(byId).sort((a, b) => (a.ts || 0) - (b.ts || 0));
    out.wrongLog = Object.assign({}, local.wrongLog || {}, remote.wrongLog || {});
    return out;
  }

  async function findGist() {
    let id = ls.getItem(GID);
    if (id) return id;
    const list = await api("/gists?per_page=100");
    const g = list.find(g => g.description === DESC && g.files[FILE]);
    id = g ? g.id : (await api("/gists", { method: "POST", body: JSON.stringify({
      description: DESC, public: false, files: { [FILE]: { content: JSON.stringify({ ts: 0, state: {} }) } } }) })).id;
    rawSet.call(ls, GID, id);
    return id;
  }

  let pushing = null;
  async function push() {
    if (!ls.getItem(TOK)) return;
    try {
      show("☁️ 同步中…");
      const id = await findGist();
      const f = (await api("/gists/" + id)).files[FILE];   // 先讀雲端再合併，開著舊頁面的裝置也蓋不掉別台的進度
      const remote = JSON.parse(f.truncated ? await (await fetch(f.raw_url)).text() : f.content);
      const state = merge(remote.state || {}, JSON.parse(ls.getItem(KEY) || "{}"), true);
      const body = JSON.stringify({ ts: Math.max(+(ls.getItem(TS) || 0), remote.ts || 0, Date.now()), state });
      await api("/gists/" + id, { method: "PATCH", keepalive: true, body: JSON.stringify({ files: { [FILE]: { content: body } } }) });
      show("☁️ 已同步");
    } catch (e) { show("☁️ 同步失敗，點我重試"); console.error(e); }
  }

  async function pull() {
    if (!ls.getItem(TOK)) { show("☁️ 開啟同步"); return; }
    try {
      show("☁️ 同步中…");
      const id = await findGist();
      const g = await api("/gists/" + id);
      const f = g.files[FILE];
      const remote = JSON.parse(f.truncated ? await (await fetch(f.raw_url)).text() : f.content);
      const localTs = +(ls.getItem(TS) || 0), local = JSON.parse(ls.getItem(KEY) || "{}");
      const merged = merge(local, remote.state || {}, remote.ts > localTs);
      const m = JSON.stringify(merged), ts = String(Math.max(remote.ts, localTs, 1));
      rawSet.call(ls, TS, ts);
      if (m !== JSON.stringify(remote.state || {})) {   // 雲端缺東西 → 合併後推回去（不會再用空白蓋掉）
        rawSet.call(ls, TS, String(Date.now()));
        rawSet.call(ls, KEY, m);
        await push();
      }
      if (m !== JSON.stringify(local)) {                // 這台缺東西 → 寫回後重整一次讓畫面吃到
        rawSet.call(ls, KEY, m);
        if (!sessionStorage.getItem("ark_sync_reloaded")) { sessionStorage.setItem("ark_sync_reloaded", "1"); location.reload(); return; }
      }
      sessionStorage.removeItem("ark_sync_reloaded");
      show("☁️ 已同步");
    } catch (e) { show("☁️ 同步失敗，點我重試"); console.error(e); }
  }

  // app.js 每次 saveState → 蓋時間戳，3 秒後推上雲
  Storage.prototype.setItem = function (k, v) {
    rawSet.call(this, k, v);
    if (this === ls && k === KEY) {
      rawSet.call(ls, TS, String(Date.now()));
      clearTimeout(pushing); pushing = setTimeout(push, 3000);
    }
  };

  // 啟用同步前就有的進度 → 標成「最舊」：第一台上傳，之後的裝置以雲端為準再把自己的筆記合併進去
  if (ls.getItem(KEY) && !ls.getItem(TS)) rawSet.call(ls, TS, "1");

  btn.onclick = () => {
    if (!ls.getItem(TOK)) {
      const t = prompt("貼上 GitHub token（只勾 gist）。\n還沒有：到 github.com/settings/tokens/new?scopes=gist 產生一個");
      if (!t) return;
      rawSet.call(ls, TOK, t.trim());
    }
    pull();
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") pull();
    else if (pushing) { clearTimeout(pushing); pushing = null; push(); }
  });
  pull();
})();
