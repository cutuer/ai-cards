# 📖 AI Agent 互動學習課本 (Mobile Card App)

專為手機隨身閱讀設計的微學習與即學即測課本。

## 🌟 特色
- **回家讀書風格**：承襲溫馨暖紙與原木色調，支援夜間護眼閱讀模式。
- **一卡一觀念**：每個知識點控制在 1 分鐘內吸收。
- **隨堂即測**：學完翻開即考，立刻提供詳解與星星回饋。
- **隨時隨地**：走 GitHub Pages，出門在外搭車隨時滑，自動保存做題進度。
- **手機全螢幕 PWA**：可直接加入 iPhone / Android 手機桌面，無網址列全螢幕運行。

## 📚 學習大綱（共 57 課・集齊全球四大頂級 AI 巨頭官方特訓）
- **🌱 新手入門・觀念打底**（5 課）：Agent 本質、Context Window 容量、Token 計費、CLI 終端機優勢、無狀態記憶機制。
- **⚡ 實戰神技・救命日常指令**（5 課）：`/resume` 斷線接關、`/compact` 記憶壓縮、`/clear` 乾淨開局、三段式 Prompt 心法、終端 Log 除錯。
- **🧠 頂級指揮官・架構與分工**（4 課）：模型長短處分配、多 Agent（Herd）溝通原則、記憶衛星檔不全域掃描、指揮官心態。
- **🔥 Claude 進階・官方 YouTube 旗艦實戰特訓**（22 課）：
  - 🎬 *Using Claude Opus 5.5 as your daily driver*（主力駕馭術 ＆ 額度省 40%）
  - 🎬 *How the Claude Code team uses Claude Code*（團隊 4 大工作流演進）
  - 🎬 *Which Claude model should you use?*（官方三大成本乘數選型指南）
  - 🎬 *How founders build on Claude Managed Agents*（Rubric 驗收準則 ＆ 拒絕假自信）
  - 🎬 *The Explore → Plan → Code → Commit workflow*（官方四大工程閉環）
  - 🎬 *The CLAUDE.md file*（專案憲法極簡高密度寫法）
  - 🎬 *Context Management in Claude Code*（上下文容量極限心法）
  - 🎬 *MCP in Claude Code*（Model Context Protocol 跨界連接百萬工具）
  - 🎬 *Tool, skill, or subagent?*（當 Prompt 爆棚時的三層架構拆解）
  - 🎬 *How auto mode works with Claude Code*（97% 放行背後的分級安全沙盒）
  - 🎬 *Hooks in Claude Code*（生命週期 100% 確定性自動化防線）
  - 🎬 *Using Claude Code Remote Control*（遠端接力控制與多裝置互聯）
  - 🎬 *The prompting playbook*（負向約束與三層提示詞心法）
  - 🎬 *Agents that remember*（三層動態記憶與夜間自省 Reflection 架構）
  - 🎬 *Chat 與 Cowork 融合*（動態自適應調度、All-in-one-conversation）
  - 🎬 *Replit 副總裁百萬級評估體系*（VibeBench ＋ Telescope 軌跡分群、警惕 Slop on slop）
  - 🎬 *自訂 DSL 鋼鐵防線*（靜態編譯期校驗、高合規可審計架構）
  - 系統架構：Workflows vs Agents、Subagents 隔離體系、Context Hygiene、Permissions、Evaluator-Optimizer 閉環。
- **🚀 Codex ＆ OpenAI 架構・團隊工程級體系**（10 課）：
  - 🎬 *GPT-6 Astra 官方最新旗艦*（世代級躍升、Critical 級資安審計與全自主電腦操作）
  - 🎬 *Jump Trading 頂級量化巨頭實戰*（用 Astra 征服最模糊的 Alpha Research 與因子微服務）
  - 🎬 *OpenAI 官方架構換代*（Responses API ＆ Agents SDK 三大支柱、Handoffs 協同）
  - 🎬 *Ramp 獨角獸實戰*（One Prompt 實現全棧代碼 ＋ 自動化單元測試閉環交付）
  - 🎬 *ChatGPT Work Data Agent*（語意層直連企業資料庫、從提問到行動計畫全自動化）
  - 核心工程：Workspace Awareness 本機工作區感知、`AGENTS.md` 團隊 AI 憲法、Background Tasks 非同步後台喚醒、Cloud Delegation 雲端 PR 工廠、Multi-Model Swarm 多模型兵團協同。
- **💎 Gemini 核心・Google 官方實戰特訓**（6 課）：
  - 🎬 *百萬長上下文實戰*（Needle-in-a-Haystack 大海撈針極限、Context First Task Last 排版）
  - 🎬 *Context Caching 快取革命*（巨量專案代碼重複查詢砍價 85%、毫秒級極速回應）
  - 🎬 *原生 Google Search 接地*（即時搜尋索引交叉驗證、附帶點擊來源、零幻覺防線）
  - 🎬 *原生多模態深度感知*（波形與影格原生直讀、Agentic 影片時間軸秒級導航）
  - 🎬 *沙盒 Code Execution*（拒絕大腦硬算，自主撰寫 Python 確定性運算消滅數據偏差）
  - 🎬 *官方 Interactions API 換代*（統一狀態流、嚴格接地 System Instructions 約束）
- **⚡ Grok 核心・xAI 官方即時體系**（5 課）：
  - 🎬 *X Search 獨家殺手鐧*（全球即時輿情與突發脈搏直連、市場異動 30 秒查核）
  - 🎬 *Colossus 算力巨獸*（十萬卡 H100 訓練、超算叢集極速迭代基石）
  - 🎬 *OpenAI 相容協定*（零磨合無痛平移、多模型熱備援雙擎架構）
  - 🎬 *Voice Agent Builder*（端到端低延遲語音代理、300ms 擬真人際交互）
  - 🎬 *Grok Imagine 1.5 多模態影音*（14 張參考圖鎖定特徵、徹底解決鏡頭跳針走樣）

## 📱 手機「加入主畫面」教學
1. 用手機 Safari（iOS）或 Chrome（Android）開啟網址。
2. 點擊瀏覽器底部的 **「分享（Share）」** 按鈕。
3. 選擇 **「加入主畫面（Add to Home Screen）」**。
4. 桌面即會出現 **「AI課本」** App 圖示，點開即可全螢幕學習！
