// AI 互動學習課本 - 資料庫與互動邏輯
const CURRICULUM = {
  yt_code: {
    "id": "yt_code",
    "name": "📺 Claude Code・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_S-sYlFiGFv8",
        "title": "🎬 Claude Code 團隊如何使用 Claude Code",
        "category": "Claude Code",
        "text": "<b>Claude Code 團隊成員聊這一年的工作方式轉變：從 Claude Tag、loops、workflows 談到 code review</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Claude Code 團隊的成員，聊他們這一年自己怎麼用 Claude Code 工作。Claude Code 是 Anthropic 做的 AI 寫程式工具。影片重點不在介紹功能，而是工作方式怎麼變：以前是人下一個指令，AI 做一步；現在 AI 能自己一直跑、自己檢查。想知道 AI 工具接下來會往哪走，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=60s\" target=\"_blank\">01:00</a> 有成員約 70~80% 的工作在 Claude Tag 上完成；Claude Tag 是一個 Slack native agent，能查到產品脈絡與團隊決策。其餘約 20% 才開 TUI 或 desktop app 微調<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Tag 是住在 Slack（團隊聊天軟體）裡的 agent，也就是會自己動手做事的 AI，還查得到產品背景和團隊決策。有成員七八成的工作在聊天裡交代它就完成，只有兩成才開 TUI（終端機文字介面）或桌面版微調。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=184s\" target=\"_blank\">03:04</a> to do list 的例子：Sonnet 3.5 時代，模型給五件事常只做三件就放棄，加上 to do list 效果很好；一年後就不需要了，所以對自己做的功能不要太執著<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ to do list 就是待辦清單。在 Sonnet 3.5 那一代模型，交代五件事它常做三件就停，叫它列清單、逐項打勾很有效。一年後模型變強，就不需要了。所以自己做的功能過時了，就該放手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=337s\" target=\"_blank\">05:37</a> ask user question tool 當初很難設計到讓 Claude 呼叫得好；現在成員反而較常讓 artifact（HTML、含圖表與 mockup）來向自己提問<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ask user question tool 是讓 Claude 停下來問你問題的功能，當初很難設計到它會在對的時機、問對的問題。現在成員反而讓它做一份 artifact（網頁形式的成品，附圖表和畫面草稿 mockup），直接在裡面向自己提問。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=430s\" target=\"_blank\">07:10</a> loops 的演進：從在筆電本機跑，到遠端 developer box，再到 Claude Code on the web 的 hosted containers；跑在雲端後可以設 routines，例如每天整理回饋、分級，並修掉有把握的問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ loops 是讓 Claude 反覆「做、檢查、再做」的循環。它從跑在自己筆電，搬到遠端開發主機，再搬到雲端代管的環境。上雲後就能設 routines（定期自動任務），例如每天整理回饋、分輕重，順手修掉有把握的問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=556s\" target=\"_blank\">09:16</a> Code review 的轉變：挑小毛病（nit pick）的事交給 Claude 自動處理，人類 reviewer 專注在大方向，例如 API 為什麼這樣設計、服務邊界為什麼劃在那裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code review 是程式合併前請人檢查。現在排版、命名這類小毛病（nit pick）交給 Claude 自動處理，人只看大方向。例如 API（程式之間溝通的接口）為什麼這樣設計，系統各部分的分工界線為什麼這樣劃。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=677s\" target=\"_blank\">11:17</a> Workflows 起源於 code review：先 fan out 找 bug，再從三種觀點做 adversarial review，篩出最需要人看的問題；同一招也能用在效能問題或 deep research<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ workflows 是把多個 AI 步驟串成一套流程，最早用在 code review。先 fan out，派一大群 AI 分頭找 bug；再做 adversarial review，從三種角度檢驗每個 bug 是不是真的，只留最該給人看的。同一招也能查效能或做深入研究。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=799s\" target=\"_blank\">13:19</a> Workflows 由 agent 寫程式來編排 subagent，結合確定性的程式碼（例如 for loop 不會漏掉項目）與 agentic 行為，讓人更信任結果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ subagent 是被派去做某一段子任務的 AI 助手。workflows 讓 AI 寫程式來指揮它們：程式管不能出錯的部分，像 for loop（逐項跑完整張清單的寫法）保證不漏；AI 管需要判斷的部分。兩者搭配，結果更可信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=891s\" target=\"_blank\">14:51</a> Claude Tag 的使用者介面和 transcript 分開：Claude 透過工具在 Slack 傳訊息，看不到內部思考，但有連結可以看完整 transcript<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ transcript 是 AI 工作過程的完整紀錄。Claude Tag 是透過工具把訊息傳到 Slack，所以你在 Slack 看不到它的內部思考。想追它怎麼想、怎麼做，點訊息裡的連結就能看完整紀錄。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（產品名））：住在 Slack 裡的 Slack native agent，能查到產品脈絡與團隊做過的決策<br><b>fan out</b>（扇出／平行展開）：讓大量 agent 分頭搜尋（例如找 bug），再把結果彙整回來，類似 MapReduce<br><b>test time compute</b>（測試時運算）：花大量 inference 時間，把更多思考和運算投入同一個問題<br><b>adversarial review</b>（對抗式審查）：針對每個 bug，從三種不同觀點檢視它是不是真的 bug<br><b>routines</b>（例行任務）：Claude 跑在雲端後可以設定，例如每天看回饋、分級，並修掉有把握的問題\n\n📺 <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=0s\" target=\"_blank\">How the Claude Code team uses Claude Code</a>（2026/09/02 · 22 分鐘）",
        "tip": "💡 你可以怎麼用：交代 AI 做事時，可以學他們這樣分工：挑錯字、對格式這類瑣碎檢查交給 AI，你只判斷大方向。遇到重要結論，就請 AI 從三種不同角度反駁自己的答案，看它撐不撐得住，再決定要不要信。",
        "quiz": {
          "q": "影片中有成員提到，現在大約多少比例的工作是在 Claude Tag 上完成的？",
          "options": [
            "大約一半",
            "大約 70~80%",
            "幾乎 100%",
            "大約 30~40%"
          ],
          "correct": 1,
          "why": "[01:00] 成員說「70 to 80% of my work happens on Claude Tag now」，剩下約 20% 才開 TUI 或 desktop app。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_b8SV4U6fEIc",
        "title": "🎬 Claude Code 的 auto mode 如何運作",
        "category": "Claude Code",
        "text": "<b>說明 auto mode 如何用 classifier 與 probe 審查動作，以及如何設定信任邊界</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是讓 Claude 直接在你電腦上讀檔、改程式、跑指令的工具。這支影片講它的 Auto Mode（自動模式，不用每一步都按同意）怎麼把關：誰負責審查、審查時看得到什麼、哪些事一定會被擋。想讓 AI 自己做事、又怕它闖禍的人，看完會比較清楚能放手到什麼程度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=0s\" target=\"_blank\">00:00</a> 研究顯示 Claude Code 有 97% 的 permission prompt 會被核准；逐一核准在多步驟任務中容易造成 approval fatigue，因此推出 Auto Mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ permission prompt 是 Claude 動手前問你「可以嗎？」的確認框。研究發現 97% 都被按同意，按到麻木（approval fatigue）就等於沒在看，Auto Mode 就是為了解決這個問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=31s\" target=\"_blank\">00:31</a> Auto Mode 不是讓 Claude 核准自己的動作，因為那等於自己寫、自己審、自己 merge PR，會帶來偏誤<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Auto Mode 不是讓 Claude 自己說了算。這就像同一個人自己寫程式、自己審、自己 merge PR（把修改併進正式版本），自己的盲點自己看不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=65s\" target=\"_blank\">01:05</a> Claude 提出的動作會交給另一個 classifier 審查。它看得到你的訊息和 Claude 的 tool calls，看不到 Claude 的推理、回覆和 tool output，會把每個動作拿來比對你的意圖<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ classifier 是另一個獨立的審查員，只看你的訊息和 Claude 要執行的操作（tool calls）。它看不到 Claude 的想法、回覆和執行結果，只比對這個動作符不符合你的意思。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=99s\" target=\"_blank\">01:39</a> 動作被拒時，Claude 通常會自己找更安全的做法，例如改推到新 branch；如果一直被拒，auto mode 會暫停，交給你自己核准<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 動作被擋下時，Claude 通常會自己換個安全的做法，例如不動主線，改推到新 branch（分支，類似另存一份副本）。如果一直被擋，就會停下來改由你親自按同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=131s\" target=\"_blank\">02:11</a> 伺服器端 probe 會掃描每個 tool result 裡的惡意指令並加上警告。在他們的評估中，同時啟用 probe 和 auto mode 後，prompt injection 攻擊成功率降到零<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ probe 在伺服器端先掃過 Claude 讀進來的網頁、檔案等內容，發現裡面藏著惡意指令就加上警告。這種偷塞指令的攻擊叫 prompt injection，他們評估時兩者一起開，攻擊成功率降到零。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=161s\" target=\"_blank\">02:41</a> deny／ask／allow rules 會先執行，接著由 tier check 分流：唯讀或可復原的動作跳過 classifier，shell 指令、web fetch 等較高風險的動作則要送審<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你設定的 deny／ask／allow rules（禁止、先問、放行的清單）最先套用，接著由 tier check 分級：只讀取或能還原的動作直接放行，下 shell 指令（直接操控電腦）、上網抓資料這類才送審。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=194s\" target=\"_blank\">03:14</a> 預設只有工作目錄和 git remotes 算內部。可以用 environment 欄位以白話描述基礎設施；admin 設在 managed settings，developer 能在 user settings 加項目，但不能刪掉 admin 的設定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設只有你的工作資料夾和 git remotes（程式碼放在網路上的存放處）算自己人。其他系統可以在 environment 欄位用白話寫明；公司管理員設好的項目，個人只能再加，不能刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=255s\" target=\"_blank\">04:15</a> allow、soft deny、hard deny 只是 classifier 參考的指引，不是硬規則。要設硬性限制請用 deny rules 和 ask rules<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ allow、soft deny、hard deny 只是給 classifier 的參考方向，不保證照做。soft deny 要你明講才放行，hard deny 怎麼要求都擋；真正要守住的底線請寫進 deny 和 ask rules。</span>\n\n📘 術語<br><b>approval fatigue</b>（核准疲勞）：每個動作都要核准或拒絕，在多步驟任務中會讓人疲乏<br><b>classifier</b>（分類器）：獨立的檢查機制，會篩檢 Claude 提出的動作，比對你的意圖後核准或拒絕<br><b>probe</b>（探測器）：伺服器端機制，會在內容進入 context 前掃描 tool result 裡的惡意指令<br><b>tier check</b>（層級檢查）：決定哪些動作需要送 classifier 審查；唯讀或可復原的動作會跳過<br><b>soft deny / hard deny</b>（軟性拒絕／硬性拒絕）：soft deny 會擋住動作，除非你明確要求；hard deny 則不管你怎麼要求都擋\n\n📺 <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=0s\" target=\"_blank\">How auto mode works with Claude Code</a>（2026/08/04 · 5 分鐘）",
        "tip": "💡 你可以怎麼用：開 Auto Mode 前，先把絕對不准做的事（像刪除資料、改正式環境）寫進 deny rules，想親自確認的寫進 ask rules。如果有公司內部系統，就在 environment 欄位用白話寫清楚，讓審查員分得出哪些是自己人。",
        "quiz": {
          "q": "在 auto mode 中，下列哪一種動作會跳過 classifier？",
          "options": [
            "執行 shell 指令",
            "web fetch",
            "搜尋你的 codebase",
            "觸及你環境外部的操作"
          ],
          "correct": 2,
          "why": "[02:41] 提到大部分動作是唯讀或可復原的，例如搜尋 codebase，這些會跳過 classifier；[03:14] 則說 shell 指令、web fetch 和觸及環境外部的操作都要送 classifier 審查"
        },
        "status": "old"
      },
      {
        "id": "yt_Hth_tLaC2j8",
        "title": "🎬 回顧 Claude Code 的這一年",
        "category": "Claude Code",
        "text": "<b>團隊成員回顧 Claude Code 上線一年來的變化，並分享 verification、auto mode、routines 等用法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是 Anthropic 推出的工具，讓 Claude 直接在電腦上寫程式、執行指令。這支影片是團隊回顧上線一年，分享他們怎麼帶 agent（能自己連續動手做事、不用每一步都問你的 AI）：怎麼讓它記住犯過的錯、自己檢查成果、自動接手例行工作。就算你不寫程式，也能看出「把工作交給 AI」的做法這一年怎麼變了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=31s\" target=\"_blank\">00:31</a> 最重要的觀念：Claude 每次犯錯時，不要只叫它換個做法，而是要它寫進 CLAUDE.md 或做成 skill，這樣 Claude 就能一直跑下去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 出錯時，不要只叫它換個方法。要它把正確做法寫進 CLAUDE.md（專案裡給 Claude 看的說明檔），或做成 skill（可以重複使用的操作說明包）。這樣它下次會自己照做，能獨立做得更久。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=62s\" target=\"_blank\">01:02</a> 對 agent 來說，verification 不只是 unit test、lint 或 type check，而是 agent 能不能自己把東西跑起來。例如有個 desktop development skill，會讓 Claude 啟動本機 desktop app，再用 computer use 點來點去測試<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ verification（驗證）就是確認成果真的能用。對 agent 來說，光通過程式碼的自動檢查不夠，要它自己把程式開起來。例如讓它打開桌面 App，再用 computer use（AI 自己操作滑鼠鍵盤）實際點點看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=274s\" target=\"_blank\">04:34</a> Routines：有位工程師設定 routine 監看 voice mode 相關的 ticket、GitHub issue 和 bug report，讓 Claude 主動修好並發 PR；另一個 routine 專門處理超過五小時沒人回應的 bug report<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ routine 是設定好以後會一直自動跑的任務。有位工程師讓它盯著語音功能的回報和 issue（問題單），自己修好再發 PR（送給別人審核的修改）。另一個 routine 專門接手超過五小時沒人理的 bug。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=460s\" target=\"_blank\">07:40</a> Auto mode 會把權限請求交給另一個模型做安全檢查。人在 99% 的請求都按同意時，看久了眼睛會放空，所以他們認為 auto mode 比逐一閱讀 permission prompt 更安全<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 權限請求就是 Claude 執行指令前先問你「可以嗎」。因為 99% 的請求都按同意，按久了人其實沒在看。auto mode 改成由另一個模型把關、擋下可疑的指令，所以團隊認為這樣反而更安全。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=521s\" target=\"_blank\">08:41</a> 開發 auto mode 時，團隊蒐集了數千份 transcript 讓它判斷安全與否，還請 red teamer 和內部團隊嘗試 prompt inject，再用這些結果做成 eval 來改進 auto mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊拿幾千份 transcript（AI 的工作紀錄）讓 auto mode 判斷安不安全，也請 red teamer（扮成駭客找漏洞的人）試 prompt injection（偷藏指令騙 AI），再把結果做成 eval（測驗題）來改進它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=647s\" target=\"_blank\">10:47</a> 講者認為兩次大躍進是：先從自己寫 source code 變成跟 agent 對話；現在則變成跟 loop 或 routine 對話，由它們替你 prompt Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者認為有兩次大躍進。第一次是從自己寫程式，變成跟 agent 對話。第二次是改成跟 loop（反覆自動執行的流程）或 routine 對話，由它們替你下指令給 Claude。人的角色從動手做，變成定規則。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=985s\" target=\"_blank\">16:25</a> Context 觀念：現在的模型只需要最精簡的 system prompt 和最少的工具，讓模型自己想辦法把 context 拉進來；給太多 context 就像在 micromanage<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context 是 AI 做事時手上有的資料。現在的模型夠強，只要給最精簡的 system prompt（一開始的基本指示）和少量工具，讓它自己去找需要的資料就好。資料塞太多，就像主管什麼事都要管。</span>\n\n📘 術語<br><b>CLAUDE.md</b>（CLAUDE.md 設定檔）：Claude 犯錯時，要它把正確做法寫進這個檔案，下次就不會再錯<br><b>auto mode</b>（自動模式）：把權限請求交給另一個模型做安全檢查，可疑的指令會被拒絕，之後可以再手動允許<br><b>routines</b>（例行任務）：持續監看 ticket 或 bug report，自動修好並發 PR 通知你；也能 babysit 每個 PR<br><b>remote control</b>（遠端控制）：在電腦上啟動 agent 後，可以用手機遠端連進去查看進度，也能再開新的 agent<br><b>verification</b>（驗證）：對 agent 而言，重點不是 unit test 或 lint，而是 agent 能不能自己把東西跑起來\n\n📺 <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=0s\" target=\"_blank\">Reflecting on a year of Claude Code</a>（2026/06/08 · 18 分鐘）",
        "tip": "💡 你可以怎麼用：下次 AI 又犯同樣的錯，不要只在對話裡糾正一次，請它把正確做法寫進固定的說明或自訂指令，之後每次都會照著做。交代工作時，講清楚目標和「怎樣才算完成」，讓它自己找資料、自己檢查，不用每個細節都幫它安排好。",
        "quiz": {
          "q": "影片中，講者為什麼不再使用 plan mode？",
          "options": [
            "plan mode 只支援 desktop app",
            "較新的模型已經不需要 planning step",
            "plan mode 已經從 Claude Code 移除",
            "plan mode 容易被 prompt injection 攻擊"
          ],
          "correct": 1,
          "why": "[06:38] 講者說改用 auto mode，因為 newer models don't actually need like a planning step anymore"
        },
        "status": "old"
      },
      {
        "id": "yt_IlqJqcl8ONE",
        "title": "🎬 我們在 Anthropic 怎麼用 Claude Code",
        "category": "Claude Code",
        "text": "<b>讓 Claude 訪談你釐清需求、用 HTML 取代 markdown 規格，並把驗證內建在產出物裡</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 團隊分享他們平常怎麼用 Claude Code。核心有三招：先讓 Claude 訪談你、把需求問清楚；規格文件改用 HTML 寫；把「怎麼檢查有沒有做對」直接放進成品裡。這支很適合常覺得 AI 做出來的東西跟你想的不一樣、又要花很多時間改的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=111s\" target=\"_blank\">01:51</a> 這場工作坊以 Tariq 在舊金山的演講為基礎，他也寫成部落格文章〈The Unreasonable Effectiveness of HTML files〉，主張規格文件從 markdown 改用 HTML<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這場工作坊來自 Tariq 的演講，他也把內容寫成了部落格文章。他主張規格（寫清楚要做什麼的文件）不要再用 markdown（用 # 和 * 排版的純文字）寫，改用 HTML（網頁用的格式）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=178s\" target=\"_blank\">02:58</a> 模型越強，agent 能跑得越久。但如果方向做錯會燒掉很多 token，所以要把人工驗證盡量提前放進 HTML 規格裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent（會自己連續做事的 AI）能力越強，一次能跑越久。但方向一錯，token（AI 的計算量，也就是錢）就白花了。所以要在規格裡先留好讓人檢查的點，早點發現走偏。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=278s\" target=\"_blank\">04:38</a> 引用 Richard Sutton 的 bitter lesson：模型越強，越不該去限制它。Claude 從你身上挖出需求的能力，可能比你自己寫出需求還好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ the bitter lesson（苦澀的教訓）指的是：與其由人把規則寫死，不如讓更強的系統自己發揮。放到這裡就是：別急著自己把需求寫完，讓 Claude 反過來問你，它可能問得比你寫得還完整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=431s\" target=\"_blank\">07:11</a> 不好的提示是只寫「make it better」。好的提示是點出你在意的面向（例如受眾），但不要把結果講死，並明確要 Claude 用 ask user question tool 來訪談你<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 只說「改好一點」，Claude 不知道要往哪裡改。好的做法是點出你在意的面向（例如給誰看），但不要指定答案，並寫明要它用 ask user question tool（一題一題問你的功能）來訪談你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=491s\" target=\"_blank\">08:11</a> 講者強烈建議用 auto mode（按 shift tab 切換）；effort 官方建議設 X high，也可以設 max。/effort 調 effort，/fast 開 fast mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者大力推薦 auto mode，按 shift+tab 就能切換，用起來輕鬆很多。effort 是 Claude 想得多深，建議設 X high 或 max，用 /effort 調整。fast mode 用 /fast 開，回得比較快但比較貴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=623s\" target=\"_blank\">10:23</a> HTML 的資訊密度比 markdown 高，也更好閱讀和互動。markdown 超過約 200 行，你大概不會讀，同事更不會讀。示範用 Opus 4.7 產生四種 HTML 設計方向<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ HTML 能放表格、圖片和按鈕，同樣篇幅能塞更多資訊，而且可以點來互動。markdown 超過約 200 行，你自己大概就不會讀了。示範中用 Opus 4.7（Claude 的一款模型）做出四種設計方向。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=1051s\" target=\"_blank\">17:31</a> 元件用 data 屬性把自己的狀態發佈到 DOM，agent 直接讀這份契約就好，不用去爬 DOM。每個元件都有 schemas、fixtures 和 invariants，並用 probes 測試非 happy path 的情況<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個元件用 data 屬性（貼在元件上的標籤）公告自己的狀態，agent 直接讀就好，不用翻整個網頁。元件還附 schemas（資料格式）、fixtures（範例資料）、invariants（必守規則），並用 probes（刻意設計的測試）檢查出錯的情況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=1757s\" target=\"_blank\">29:17</a> 驗證有三種執行方式：給人看的 dashboard、agent 從瀏覽器驅動（Playwright MCP），以及在 CI 用 bun verify 無頭執行。驗證過程還能錄成影片存到 S3 當證據<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 驗證有三種跑法：做成 dashboard（儀表板）給人看；讓 Claude 透過 Playwright MCP（操作瀏覽器的工具）自己去點；或在 CI（上線前的自動檢查）用 bun verify 在不開畫面的情況下跑。整個過程還能錄影，存到 S3（雲端空間）當證據。</span>\n\n📘 術語<br><b>auto mode</b>（自動模式）：用 shift tab 切換進入；講者說這讓事情輕鬆很多，大家都該用<br><b>fast mode</b>（快速模式）：用 /fast 開啟；比較貴，但很適合快速迭代規格<br><b>ask user question tool</b>（詢問使用者工具）：在提示裡明確提到它，就會觸發 Claude 逐輪訪談你、釐清需求的流程<br><b>the bitter lesson</b>（苦澀的教訓）：Richard Sutton 的觀點：比起人工預先寫死、限制系統，投入更多資料和算力最終能換到更強的能力<br><b>Playwright MCP</b>（Playwright MCP）：用來截圖、跟 HTML 互動，也讓 Claude 從瀏覽器執行驗證\n\n📺 <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=0s\" target=\"_blank\">How we Claude Code</a>（2026/05/23 · 31 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 Claude 做東西前，可以這樣說：「我想做 ○○，最在意的是給誰看，請用 ask user question tool 先訪談我，最後產出一份 HTML 規格。」拿到規格後先打開看一遍，確認方向對了，再讓它開始做。",
        "quiz": {
          "q": "講者說他們對 Claude Code 的 effort 參數建議設成哪個等級？",
          "options": [
            "medium",
            "low",
            "X high",
            "max"
          ],
          "correct": 2,
          "why": "[08:11] 講者說「Our recommendation is X high, but you can also set max effort.」"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_tuY2ChJIx48",
        "title": "🎬 超越基礎：Claude Code 進階用法",
        "category": "Claude Code",
        "text": "<b>在大型軟體工程環境中客製化 Claude Code，並挑選能規模化的 plugin 抽象</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方影片，講在大型公司、大型程式專案裡，怎麼把 Claude Code（在終端機裡幫你寫程式、跑指令的 AI 助理）調整得更好用。重點有兩個：一是讓 Claude 拿到跟你一樣的權限和資訊；二是挑對 plugin（把設定和工具打包好、可以整包分享給團隊的擴充包）的做法，才不會越加越慢、越加越貴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=228s\" target=\"_blank\">03:48</a> 客製化 agentic harness 需要三類東西：access、knowledge、tooling。核心論點：如果 Claude 做不到你能做的事，它就沒辦法跟你一起做你的工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agentic harness 是包住模型、讓它能自己動手做事的外框。要補的有三樣：access 是能進的系統，knowledge 是團隊規矩，tooling 是可用的工具。你做得到、它做不到的事，就沒辦法交給它一起做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=485s\" target=\"_blank\">08:05</a> 建議試著整天不離開 Claude Code 工作，每次要切到別的工具、複製貼上給 Claude 就記下來，下班前想辦法把這些都接上 Claude；會議筆記也可以餵給 Claude 找 low-hanging fruit<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 試著一整天只用 Claude Code 工作。每次得切去別的軟體、手動複製貼給它，就記一筆，下班前把這些缺口接上。會議筆記也丟給它，找出 low-hanging fruit（最省力就能改善的事）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=554s\" target=\"_blank\">09:14</a> 不能把 codebase 慣例訓練進模型；fine-tuning 效果不好也不划算，所以要靠 in-context learning（skills、tools、MD 檔等文字檔）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊寫程式的慣例沒辦法訓練進模型裡，fine-tuning（拿資料重新訓練模型）效果差又貴。所以改用 in-context learning：把規矩寫成 skills、MD 等文字檔，工作時讓它讀。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=807s\" target=\"_blank\">13:27</a> post tool use hooks 就像 agent 的「紅色波浪線」：可以跑 linter、LSP、提醒某檔案是 generated file，是可以忽略的提醒而不是硬性阻擋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ hooks 是在特定時機自動跑的小程式，post tool use 指 Claude 每次用完工具之後。這時可以跑 linter（檢查程式寫法），或提醒「這檔是自動產生的」。就像拼字紅線，只提醒、不擋路。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=1210s\" target=\"_blank\">20:10</a> KV cache 的限制：改動 prompt 前段，後面所有 token 都變成 uncached，價格是十倍；穩定、共用的內容放最前面，每個任務會變動的資訊放靠後<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是模型處理文字和計費的單位。KV cache 會把算過的前段存起來重用；前段一改，後面全部要重算，價格貴十倍。所以固定、共用的說明放最前面，每次會變的任務資訊放後面。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=1548s\" target=\"_blank\">25:48</a> MCP 要把每個 tool 的名稱、描述、schema 放進 system prompt，數量一多不能規模化；tool search 只放名稱、再 lazy load。已經有 CLI 的話，用 skill 教 Claude 用就好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 是讓 Claude 接外部工具的標準做法，但每個工具的名稱、說明、參數格式都要一直放在開頭，工具一多就撐不住。tool search 只放名稱，用到才載入細節。已經有指令列工具的話，寫個 skill 教它用就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=1876s\" target=\"_blank\">31:16</a> skills 和 subagents 的描述永遠會載入；hooks 才是真正的 zero overhead abstraction，沒觸發就不花 token。plugin 不能提供 Claude.MD，真要的話用 session start hook 回傳文字<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skills、subagents（分派出去的小幫手）的簡介永遠會載入；hooks 沒觸發就不花 token。plugin 不能帶 Claude.MD 說明檔，真的需要的話，可以改用開工時觸發的 hook 把文字塞進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=2357s\" target=\"_blank\">39:17</a> 非同步加平行化：每個 Claude Code instance 放一個 worktree，搭配 /color、rename 區分 session，用 /loop 盯 PR，用 auto mode、remote control<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同時開好幾個 Claude 並行：每個配一個 worktree（同一專案的獨立資料夾），用 /color、rename 分辨；用 /loop 定時盯 PR（待審的修改）；開 auto mode 讓它少跳權限確認。</span>\n\n📘 術語<br><b>ICL (in-context learning)</b>（情境內學習）：不改模型權重，把客製化資訊放進 context window，讓模型表現更好<br><b>KV cache</b>（KV 快取）：大大影響下一個 token 的計算成本；改動前段內容會讓後面 token 都變 uncached，貴十倍<br><b>tool search</b>（工具搜尋）：system prompt 只放 tool 名稱，Claude 搜到工具時才載入描述和 schema<br><b>Git worktree</b>（Git 工作樹）：同一個 repo 在不同資料夾的不同 checkout，讓多個 Claude 不會互相干擾<br><b>auto mode</b>（自動模式）：有 classifier agent，加上另一個 agent 對 tool call 做 adversarial 檢查，基本上不再跳 permission prompt\n\n📺 <a href=\"https://www.youtube.com/watch?v=tuY2ChJIx48&t=0s\" target=\"_blank\">Beyond the basics with Claude Code</a>（2026/05/22 · 47 分鐘）",
        "tip": "💡 你可以怎麼用：找一天只在 Claude Code 裡工作，把每次「複製貼上給 Claude」的時刻記下來，下班前挑最常發生的一兩個想辦法接上。團隊常講的規矩，就寫進一份固定的 MD 檔讓它每次都讀。",
        "quiz": {
          "q": "講者認為下列哪一種 plugin primitive 才是「真正的 zero overhead abstraction」？",
          "options": [
            "Hooks",
            "Skills",
            "Subagents",
            "MCP"
          ],
          "correct": 0,
          "why": "講者在 [30:15] 說 hooks「are an actual zero overhead abstraction」；skills 的描述永遠會載入 [29:09]，MCP 要把 schema 放進 system prompt [25:48]，subagents 的描述也還放在 parent prompt 裡 [34:00]"
        },
        "status": "long",
        "parts": 4
      },
      {
        "id": "yt_IA5LWIGqnyM",
        "title": "🎬 經營一個 AI-native 的工程組織",
        "category": "Claude Code",
        "text": "<b>Claude Code 與 Cowork 負責人分享：寫程式不再是瓶頸後，團隊規範如何重寫</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的講者負責 Claude Code 和 Cowork。Claude Code 是讓 Claude 直接幫忙寫程式的工具，Cowork 則讓 Claude 在電腦上幫忙處理一般工作。現在 AI 讓寫程式變得又快又便宜，講者分享的是整個團隊怎麼開會、怎麼審核、怎麼分工，規矩要怎麼跟著改。不是工程師也值得看，因為它示範了一種想法：做東西變便宜之後，真正卡住的地方會移到哪裡，工作方式就該跟著調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=19s\" target=\"_blank\">00:19</a> 講者 Fiona Fung 負責 Claude Code 與 Co-work 的工程和產品，之前曾在 Meta 和 Microsoft 帶團隊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fiona Fung 同時管 Claude Code 和 Cowork 兩個產品的工程與產品方向。她之前在 Meta、Microsoft 帶過團隊，所以能拿傳統大公司的做法，和 AI 時代的新做法來對照。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=201s\" target=\"_blank\">03:21</a> 寫程式、寫測試、refactoring 已經很少是慢的環節；新的瓶頸變成 verification、誰來 review、之後怎麼維護<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前最慢的是「寫」，現在 AI 寫得很快。refactoring 是指功能不變，只把程式整理乾淨。現在卡住的變成：verification（確認真的做對了）、誰有空 review（審核別人寫的東西），以及以後誰來維護。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=472s\" target=\"_blank\">07:52</a> 技術爭論改成「用程式碼說話」：做出來很便宜、爭論很昂貴。講者用 Claude 產生三個版本的 PR 跟 Boris 討論；深入的 design doc 也減少了，討論大多在 PR 或 prototype 裡進行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是「我改好了，請審核後合併」的申請。與其開會爭哪個方案好，不如讓 Claude 每個方案各做一版來比，講者就做了三版跟同事 Boris 討論。做出來很便宜，吵才貴，所以長篇的設計文件也少了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=687s\" target=\"_blank\">11:27</a> Claude code review 很擅長處理 style/lint、明顯的 bug 和 spec drift（建議把 spec check in 到 codebase）；法律、風險承受度、產品品味則仍需要人把關<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 審程式很會抓寫法不統一（lint 就是自動檢查寫法規範）、明顯的錯，還有 spec drift，也就是做著做著偏離了原本的規格。所以規格最好放進程式庫讓 AI 對照。法律、能承擔多少風險、產品好不好用，還是要靠人判斷。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=779s\" target=\"_blank\">12:59</a> 工程師看重兩種人：有產品感的創意型 builder，以及有深厚系統專業的人；產品感來自 dogfooding、迭代、出貨和跟客戶聊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊最看重兩種人：有產品感、會動手做東西的人，和對系統非常懂的專家。產品感沒有捷徑，要靠 dogfooding（天天用自己的產品，內部叫 ant food）、一改再改、實際上線，還有跟客戶聊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=991s\" target=\"_blank\">16:31</a> Claude Code 的每位 manager 都先從 IC 做起，直接進 codebase，並對部分產品負責<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個團隊的主管都先當 IC，也就是自己動手做事、不帶人的個人貢獻者。主管要親自進去寫程式，也要負責一塊產品。主管自己下場，才知道現在大家實際上是怎麼做事的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=1082s\" target=\"_blank\">18:02</a> code 就是 source of truth；spec 之類的文件可以改成 skill check in 到 codebase，這樣才會持續更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 是放所有程式的地方。文件寫完常常就沒人更新，只有程式一定是最新的。所以把規格改寫成 skill（Claude 會讀、會照著做的說明檔），存進程式庫。大家天天在用，內容自然會一直被更新。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=1356s\" target=\"_blank\">22:36</a> 成效指標：onboarding 上手時間下降、PR cycle time 下降（要拆成各段來看）、Claude-assisted commits 上升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 看三個數字：新人多久能上手、PR 從送出到合併要多久、多少次程式提交有 Claude 參與。前兩個要下降，最後一個要上升。PR 花的時間要拆開每一段來看，才找得到到底卡在哪。</span>\n\n📘 術語<br><b>bottleneck</b>（瓶頸）：過去工程人力很貴，所以流程都在保護這項資源；現在寫程式已經不是瓶頸了<br><b>shift left</b>（左移）：與其讓客戶或自己撞到 bug，不如靠自動化在更靠近源頭的地方就抓到<br><b>dogfooding / ant food</b>（自家產品自己用）：用自己團隊在做的產品，才能「感受到骨子裡」；Anthropic 內部叫 ant food<br><b>Claudify</b>（交給 Claude 做）：團隊原則：Claude 能做的，就讓 Claude 做，把人的頻寬空出來<br><b>source of truth</b>（唯一可信來源）：在 Claude Code 團隊指的是 code；要放在 codebase 裡才能保持最新\n\n📺 <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=0s\" target=\"_blank\">Running an AI-native engineering org</a>（2026/05/22 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：下次跟同事討論「要走 A 還是 B」時，先請 AI 把兩三個版本都做出草稿，攤開來比，不要只靠嘴巴爭。你常交代給 AI 的規則，就寫成 Claude 的 skill 或專案說明檔，用的時候順手更新。這就是團隊講的 Claudify：Claude 能做的事就交給它做，把自己的時間留給判斷和把關。",
        "quiz": {
          "q": "講者提到，Claude Code 團隊「減少」了哪一項做法？",
          "options": [
            "Dogfooding 自家產品",
            "使用 Claude 做 code review",
            "深入的 planning 與 design doc",
            "Prototyping"
          ],
          "correct": 2,
          "why": "[09:23] 講者說團隊減少的是深入的 planning 和 design doc，大多數討論改在 PR 或 prototype 中進行；prototyping、dogfooding 和 Claude code review 都是講者鼓勵的做法"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_l8fxVYIP4HQ",
        "title": "🎬 在 Google Cloud 上用 Claude 打造應用",
        "category": "Claude Code",
        "text": "<b>講者分飾五種角色，示範用 Claude Code 搭配 Google Cloud 上的 Claude 模型，從草圖做到上線一個回饋 app</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由一位講者分飾 PM、設計、工程、資安、分析五個角色，示範用 Claude Code（在電腦上幫你寫程式、操作專案的 AI 助手）接上 Google Cloud（Google 的雲端平台）裡的 Claude 模型，從一張手繪草圖做到一個正式上線、用來收集回饋的 app。值得看的地方是，產品從構想到上線的每個環節都交給 AI 處理，不會寫程式的角色也能參與。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=239s\" target=\"_blank\">03:59</a> 設定方式：最簡單的是用 application default credential 依環境自動找到憑證，再用精靈偵測專案與區域、確認可用的 Claude 模型並把模型固定下來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ application default credential 會自動從電腦環境抓登入憑證，不用手動設定；再用引導程式認出專案和地區、確認能用哪些 Claude 模型，並把要用的模型固定下來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=269s\" target=\"_blank\">04:29</a> 在 Google Cloud 上用 Claude 模型的好處：按 token 計費、沒有訊息上限；可用 provisioned throughput 增加容量；不用保管 API key；資料留在自己的專案；有 global 和 multi-region 端點<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 按 token（文字計量單位）計費、沒訊息上限；量大可申請 provisioned throughput 保留容量；不用保管 API key 這串密碼；資料不出專案；連線入口可選全球或多區。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=422s\" target=\"_blank\">07:02</a> PM 角色：在 CLAUDE.md 寫好角色設定，Claude 幾秒內就把手繪草圖做成 wireframe，不會 Git 的 PM 也能讓它開 PR 推上 GitHub<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在 CLAUDE.md（給 Claude 的說明檔）寫明它扮 PM，幾秒就把手繪草圖變成 wireframe 線框圖；不會 Git 版本管理也能叫它開 PR（修改提案）送上 GitHub 程式碼平台。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=519s\" target=\"_blank\">08:39</a> UI/UX 角色：用 plan mode 讓 Claude 先思考、提出規格再動手寫，把 wireframe 轉成四個頁面的正式介面<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ plan mode 是先規劃後動手的模式：Claude 先想清楚、列出規格給你看，你挑喜歡的再讓它寫。這裡用它把線框圖升級成四個頁面的正式介面，免得寫到一半才發現方向不對。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=672s\" target=\"_blank\">11:12</a> Google Cloud 推出官方 Google Cloud skills 和 developer knowledge API 的 MCP server，文件每 24 小時更新，Claude 可以查文件來設計 Cloud Run、BigQuery、Looker 等架構<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Google 推出 skills（給 AI 的操作手冊）和 MCP server（AI 連外部工具的接口），讓 Claude 查每 24 小時更新的官方文件，規劃要用哪些雲端服務、怎麼串起來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=794s\" target=\"_blank\">13:14</a> 工程師角色：用 subagents 平行處理 API、BigQuery 資料管線和 dashboard，跑完測試後用 Cloud Build 和 Cloud Deploy 建立 CI/CD pipeline<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ subagents 是分身同時開工：分頭做收回饋的程式、送資料進 BigQuery（資料倉儲）的管線、dashboard 儀表板。測完用 Google 工具建 CI/CD（改完自動測試上線）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=1018s\" target=\"_blank\">16:58</a> 資安角色：用自訂 plugin 做安全審查，加上輸入驗證並限縮 service account 權限，再用 Cloud Deploy 審核後推到 production<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ plugin 是可加裝的擴充功能，這裡用自訂的做資安審查：補上輸入驗證（擋可疑輸入）、把 service account（程式用的機器帳號）權限縮到最小，審核後才上 production 正式環境。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=1264s\" target=\"_blank\">21:04</a> 分析角色：用官方 BigQuery MCP server 分析原始資料，再用另一個 MCP server 在 Looker 建 dashboard，最後只給 PM 一個連結<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分析師叫 Claude 透過 BigQuery MCP server 讀原始資料做分析，再透過另一個 MCP server 在 Looker（Google 的報表工具）建儀表板；PM 只要點一個連結就能看。</span>\n\n📘 術語<br><b>plan mode</b>（規劃模式）：讓 Claude 先思考並提出方案再開始寫程式，你可以依自己的偏好決定要做什麼<br><b>subagents</b>（子代理）：用來平行處理多個任務，就像模擬團隊一起跑 sprint<br><b>Developer Knowledge API</b>（開發者知識 API）：附有 MCP server，讓 Claude 查到最新文件和實作指南，每 24 小時更新一次<br><b>provisioned throughput</b>（預留吞吐量）：做 production 應用需要更多模型容量時可以申請<br><b>application default credential</b>（應用程式預設憑證）：依你的環境自動找到憑證（例如使用者憑證），是最簡單的設定方式\n\n📺 <a href=\"https://www.youtube.com/watch?v=l8fxVYIP4HQ&t=0s\" target=\"_blank\">Building with Claude on Google Cloud</a>（2026/05/21 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：不寫程式也能學 PM 那招：在 CLAUDE.md 寫清楚要 Claude 扮演的角色，再用 plan mode 讓它先交出規劃給你確認，確認後才動手，把手繪草圖變成可以點的雛形。",
        "quiz": {
          "q": "講者提到，developer knowledge API 的 MCP server 提供的文件和實作指南多久更新一次？",
          "options": [
            "只在新產品發表時",
            "每小時",
            "每 24 小時",
            "每週一次"
          ],
          "correct": 2,
          "why": "[11:12] 字幕說文件和實作指南 \"get refreshed every 24 hours\""
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_wI0ptqCSL0I",
        "title": "🎬 別再當 agent 的保母了",
        "category": "Claude Code",
        "text": "<b>用驗證 loop、多開 session 與背景 loop，減少盯著 Claude 看的時間</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講怎麼用 Claude Code（Anthropic 讓 AI 幫忙寫程式的工具）時，不用一直守在旁邊盯著它。agent 是指能自己動手、連做好幾步的 AI。講者的主張是：與其在旁邊顧著，不如先把讓它自己檢查的工具和流程準備好，你的時間就能省下來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=71s\" target=\"_blank\">01:11</a> 三個先備條件：高品質的 CLAUDE.md（講者說這是最高槓桿的一件事）、連接日常工具（Slack、Asana、Linear、Datadog、BigQuery），以及在 Claude Code Web 設定遠端環境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開工前要先準備三件事。第一是寫好 CLAUDE.md，這是給 Claude 看的專案說明書，講者認為這件最划算。第二是接上日常用的聊天、任務、監控和資料工具。第三是在網頁版 Claude Code 設好雲端環境。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=258s\" target=\"_blank\">04:18</a> 現有工具大多為人類設計，要問自己：agent 需要從 codebase 得到哪些人類視為理所當然的東西？<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 現在的工具多半是做給人用的。人看 codebase（整個專案的程式碼）會自己補上背景，也知道要去問誰，agent 不會。所以要想想它缺了哪些你覺得不必講的資訊，主動補給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=558s\" target=\"_blank\">09:18</a> Loop 是整場最重要的概念：給 Claude 寫程式和驗證的工具，讓它寫 code、查失敗、除錯，一直重複直到成功（hill climb）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ loop（自動迴圈）是讓 Claude 寫完後自己測試，失敗就查原因、修改，一輪輪重來直到過關。這樣一步步接近目標，叫 hill climb（爬山式改進）。關鍵是給它能自己驗收的工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=746s\" target=\"_blank\">12:26</a> 前端驗證 loop 四步：跑起 dev server、用瀏覽器操作（Claude in Chrome MCP，輸入 /chrome，或 Playwright）、截修正前後的圖、排除 auth 與 state 這類障礙<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 前端（網頁畫面）的驗證分四步：開 dev server，在自己電腦上預覽網站；操作瀏覽器（輸入 /chrome，或用 Playwright 這類自動化工具）；截修正前後的畫面；排除登入、資料狀態這類卡關。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=875s\" target=\"_blank\">14:35</a> 用 skill 打包驗證 loop 分享給同事；在 skill 裡寫明遇到障礙就更新自己，讓它自我改進。Claude Code 團隊就是用一個 verification skill<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 是把某件事的做法和背景打包起來，同事也能直接拿去用。把驗證流程做成 skill，並寫明「卡關就更新自己」，它就會越用越好。Claude Code 團隊自己就是這樣做的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=966s\" target=\"_blank\">16:06</a> Demo 用 MonkeyType（TypeScript、Express、MongoDB、Redis）：先帶著 Claude 驗證一次，再把學到的整理成 skill，接著用這個 skill 驗證新功能 confetti 動畫<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範用的是打字練習網站 MonkeyType。講者先陪 Claude 從頭驗證一次，再把學到的整理成 skill，接著用這個 skill 去驗證新加的彩帶（confetti）動畫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=1602s\" target=\"_blank\">26:42</a> 注意力很稀缺，同時開超過四到五個 session 負擔就很大。多開工具：desktop app、agent view、Claude Code on the Web、remote control<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 人的注意力有限，同時開超過四、五個 session（一段獨立的工作對話）就很吃力。講者列出的多開工具有：桌面版 app、agent view、網頁版，以及 remote control（用手機遙控 session、收通知）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=2070s\" target=\"_blank\">34:30</a> /loop 可以固定間隔執行 prompt，例如「/loop 10 minutes babysit my open PRs」；Routines 是在遠端跑的 /loop，支援時間或事件觸發<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ /loop 能讓一段指令每隔固定時間自動跑，例如每 10 分鐘看一次待審的 PR（程式修改申請）。Routines 是在雲端跑的 /loop，可以設定在固定時間，或某件事發生時啟動。</span>\n\n📘 術語<br><b>loop</b>（迴圈）：幫 Claude 補完的自主迴路，讓它寫 code、檢查、除錯並重複，直到成功<br><b>hill climb</b>（爬坡式改進）：Claude 在迴圈中針對任務或成功標準一步步逼近成功<br><b>skill</b>（技能檔）：存放某個主題相關脈絡的方式，可以打包分享，也能設計成自我改進<br><b>remote control</b>（遠端控制）：輸入 /remote-control 後可以用手機控制任何 session，也會收到通知<br><b>Routines</b>（例行任務）：在遠端執行的 /loop，可以設定時間觸發或事件觸發\n\n📺 <a href=\"https://www.youtube.com/watch?v=wI0ptqCSL0I&t=0s\" target=\"_blank\">Stop babysitting your agents</a>（2026/05/20 · 37 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 Claude 做事時，先講清楚「怎樣算做完、要怎麼自己檢查」，讓它做完自己驗收。同一套檢查順利跑過一次後，就請 Claude 把步驟整理成 skill，下次直接用。",
        "quiz": {
          "q": "講者說改善 Claude Code 使用體驗「最高槓桿」的一件事是什麼？",
          "options": [
            "把 Slack、Linear 等工具接上 Claude",
            "寫一份高品質的 CLAUDE.md",
            "在 Claude Code Web 設定遠端環境",
            "同時開多個 Claude session 平行工作"
          ],
          "correct": 1,
          "why": "[01:11] 講者說高品質的 CLAUDE.md 是 \"the single highest leverage thing\"。另外兩個先備條件（連接工具、遠端環境）雖然也有提到，但他沒說是最高槓桿"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_sRvUXLquiRg",
        "title": "🎬 Claude Code 新功能介紹",
        "category": "Claude Code",
        "text": "<b>Anthropic 的 Ralph 從開發者體驗和自主性兩方面，介紹 Claude Code 近幾個月的新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是 Anthropic 推出的寫程式 AI 助手，主要在終端機（打文字指令的視窗）裡使用。這支影片由 Anthropic 的 Ralph 介紹近幾個月的新功能，分成兩類：一類讓你用起來更順，另一類讓 Claude 能自己做更多事，不用一直問你。想知道現在能放手交給它多少工作，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=142s\" target=\"_blank\">02:22</a> Remote control：在電腦上開 session，可從 Claude 手機 app 或其他裝置的瀏覽器接手；Claude 需要輸入時會推播通知。可在設定檔設成預設永遠開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Session 是你和 Claude 的一段工作對話。在電腦上開好之後，出門可以改用手機 app 或別台裝置的瀏覽器繼續；Claude 需要你回答時，手機會跳通知。也可以在設定檔裡設成每次都自動打開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=404s\" target=\"_blank\">06:44</a> 全螢幕模式：輸入 /tui 加 fullscreen 參數，把 scrollback 虛擬化、只繪製看得到的部分。畫面不再閃爍，長 session 的記憶體用量也能維持平穩，還能點擊展開內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scrollback 是往上捲就能看到的對話紀錄。輸入 /tui fullscreen 開啟全螢幕模式後，只畫出眼前看得到的部分，所以畫面不會閃，開很久也不會越來越吃記憶體，還能點開收起來的內容。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=589s\" target=\"_blank\">09:49</a> Claude Code Desktop 全面改版：session 可依專案分組，可以在 plan 和 diff 上直接留言讓 Claude 修改或解釋，還有 GitHub 整合<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Desktop 是 Claude Code 的電腦版程式。改版後，對話可以按專案分組；Plan 是 Claude 動手前寫的計畫，diff 是標出改了哪幾行的對照。兩者都能直接留言，要它修改或解釋。另外也能連接 GitHub（存放程式碼的網站）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=868s\" target=\"_blank\">14:28</a> Auto mode：用 classifier 檢查動作是否具破壞性、是否像 prompt injection。兩項都沒問題就直接執行；有問題時先找替代做法，找不到才來問你<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Classifier 是專門做分類判斷的模型；prompt injection 是有人在網頁或檔案裡藏惡意指令騙 AI 照做。Auto mode 會先檢查這兩點，安全就直接做；有疑慮會先換別的做法，真的沒辦法才來問你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=995s\" target=\"_blank\">16:35</a> 原生支援 worktree：用 claude --worktree 啟動，把 repo 複製到獨立目錄，讓多個 Claude 平行開發不同功能也不會互相衝突。Session 中也能直接請 Claude 建立 worktree<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Repo 是整個專案的程式碼資料夾。Worktree 會把它複製一份放到獨立資料夾，一個 Claude 用一份，好幾個 Claude 同時做不同功能也不會改到彼此的檔案。用 claude --worktree 啟動，或在對話中請它建立。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=1246s\" target=\"_blank\">20:46</a> Code review：多 agent、分階段的自動 PR 審查。第一階段由多個 agent 分頭找錯誤、bug、漏洞，第二階段拿實際程式碼驗證這些發現；也可以手動下 /ultra-review 啟動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是把改好的程式交出去、等人審核的申請；agent 是能自己分工做事的 AI 助手。這個功能分兩階段：先派多個 agent 分頭找問題，再拿實際程式碼逐條驗證。也可以輸入 /ultra-review 手動啟動。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=1338s\" target=\"_blank\">22:18</a> Routines（research preview）：透過 API 呼叫、排程或 webhook 觸發 Claude Code session，在雲端執行，你的電腦不用開著<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ API 是讓程式互相呼叫的管道；webhook 是某件事發生時自動送出的通知。Routines 可以由這兩種方式或固定排程啟動，在雲端執行，你的電腦關著也沒關係。Research preview 指還在試驗階段的早期版本。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=1693s\" target=\"_blank\">28:13</a> Agents view（public preview）：用 claude agents 啟動，在同一個畫面管理所有 session 並依狀態分組。Session 在背景執行，按空白鍵就能直接送 prompt 給某個 session<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Prompt 就是你給 AI 的指令。輸入 claude agents 會打開一個總覽畫面，所有 session 都在背景跑，並依狀態分組。選中其中一個按空白鍵，就能直接傳指令給它。Public preview 是開放給大家試用的版本。</span>\n\n📘 術語<br><b>remote control</b>（遠端控制）：在電腦上開 session，出門時可用手機 app 或瀏覽器繼續和 Claude 互動<br><b>auto mode</b>（自動模式）：用 classifier 判斷動作是否具破壞性或像 prompt injection，安全就不打擾你直接執行<br><b>worktree</b>（工作樹）：專案在獨立子目錄裡的副本，只給一個 Claude session 使用，避免多個 Claude 互相干擾<br><b>auto memory</b>（自動記憶）：Claude 自動把你的程式風格、架構選擇等記在 memory.md，檔案只存在你的電腦上<br><b>routines</b>（例行流程）：不用手動觸發，由 API、排程或 webhook 啟動的 Claude Code session，在雲端執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=sRvUXLquiRg&t=0s\" target=\"_blank\">What&#x27;s new in Claude Code</a>（2026/05/20 · 32 分鐘）",
        "tip": "💡 你可以怎麼用：如果你已經在用 Claude Code，可以先試兩個：打開 remote control，讓長時間的任務在電腦上跑，你用手機回答它的問題；再打開 auto mode，少按很多次「允許」。要同時處理好幾件事時，就用 worktree 讓每個 Claude 各做各的，再用 claude agents 在同一個畫面管理。",
        "quiz": {
          "q": "根據影片，auto memory 產生的記憶檔案存放在哪裡？",
          "options": [
            "每個 worktree 各自保存一份獨立的記憶",
            "自動推送到你的 GitHub repo",
            "存放在 Anthropic 的雲端",
            "只存在你的電腦上"
          ],
          "correct": 3,
          "why": "[19:42] 講者說同一專案的所有 session 和 worktree 共用同一份記憶，而且記憶檔案不會離開你的電腦，不會推到 GitHub，也不存在雲端"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_6bs5b4FltCU",
        "title": "🎬 Claude Code 如何運作",
        "category": "Claude Code",
        "text": "<b>用 agent 循環、context window、工具與權限模式說明 Claude Code 的運作方式</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片拆解 Claude Code 背後的運作方式。Claude Code 是 Anthropic 做的 AI 助手，能直接在你電腦上讀檔、改檔、跑指令。看懂之後，你會知道它為什麼會自己重試、為什麼常問你「可以嗎」，也更清楚什麼時候該出手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=5s\" target=\"_blank\">00:05</a> Claude Code 用 agent 循環運作：你輸入 query，它先收集需要的 context，再採取行動，例如編輯檔案或執行指令。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent loop（代理循環）是它做事的固定流程。接到任務後不會馬上動手，會先翻相關檔案、把狀況搞清楚，這叫收集 context（背景資料）。然後才改檔案或跑指令。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=35s\" target=\"_blank\">00:35</a> 行動後會檢查結果是否符合預期：符合就結束並等待下一個請求；不符合就重跑循環，直到結果完成並驗證。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做完不會直接交差，它會自己檢查結果對不對。對了就停下來，等你下一個指令。不對就從頭再收集資料、再修一次，一直到確認真的完成為止。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=35s\" target=\"_blank\">00:35</a> 循環進行中，你可以補充 context、中斷工作，或引導模型朝目標前進。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它在跑的過程中你可以隨時插話：補充它不知道的資訊、叫它先停，或提醒它「方向錯了，往這邊走」。不用等它全部做完才修正。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=65s\" target=\"_blank\">01:05</a> context window 決定能存放的對話、檔案內容、指令結果等資訊量；達到上限時，Claude Code 會壓縮對話，自動決定要移除或摘要哪些內容。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context window（上下文視窗）是它一次能記住的資訊量。對話、讀過的檔案、指令結果都會佔空間。滿了它會自動把部分內容濃縮或拿掉，所以很早之前講的細節可能會被淡化。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=65s\" target=\"_blank\">01:05</a> 工具是 agent 運作的基礎；目前多數 AI 助理只接收和回傳文字，中間沒有任何動作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ tools（工具）是讓 AI 真的能「動手」的功能。一般聊天型 AI 只是你打字、它回字，過程中不會去碰任何檔案或網路。有了工具，它才從只會說變成真的會做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=95s\" target=\"_blank\">01:35</a> 工具讓 agent 自行決定何時執行程式碼來完成任務，例如讀取檔案或上網搜尋；Claude Code 用語意搜尋決定何時呼叫工具。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有了工具，要不要讀檔、要不要上網查，都由它自己判斷。影片說 Claude Code 用的是語意搜尋，也就是看你話裡的意思、不只比對關鍵字，來決定當下該用哪個工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=95s\" target=\"_blank\">01:35</a> 預設權限模式下，編輯檔案或在終端機執行指令前必須取得明確許可；按 Shift + Tab 可以切換模式。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設模式下，它要改檔案，或要在終端機（用打字下指令來操作電腦的視窗）跑指令之前，都會先問你同不同意。按 Shift + Tab 可以切換到其他權限模式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=125s\" target=\"_blank\">02:05</a> auto-accept 模式編輯檔案不再詢問，但執行指令仍需許可；Planning mode 先用唯讀工具擬定行動計畫。跳過權限時要小心，出錯可能較難提前發現。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ auto-accept mode（自動接受模式）：改檔案不再問你，跑指令還是會問。Planning mode（規劃模式）：只看不改，先列計畫給你看。放的權限越多越省事，但出錯也越晚才發現。</span>\n\n📘 術語<br><b>agent cycle / agent loop</b>（agent 循環）：收集 context → 行動 → 檢查結果，未達成就重來，直到完成並驗證<br><b>context window</b>（上下文視窗）：決定 Claude 能存放和檢視多少對話、檔案內容、指令結果等資訊<br><b>tools</b>（工具）：agent 運作的基礎，讓 agent 決定何時執行程式碼完成任務，例如讀檔、上網搜尋<br><b>auto-accept mode</b>（自動接受模式）：編輯檔案不再詢問，但執行指令仍會要求許可<br><b>Planning mode</b>（規劃模式）：開始前先用唯讀工具擬定行動計畫\n\n📺 <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=0s\" target=\"_blank\">How Claude Code Works</a>（2026/05/14 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：交代比較大的任務時，先按 Shift + Tab 切到 Planning mode，讓它把計畫列出來，你看過沒問題再讓它動手。過程中發現方向不對就直接打字插話修正，不用等它做完。",
        "quiz": {
          "q": "根據影片，Claude Code 的 auto-accept 模式怎麼運作？",
          "options": [
            "只用唯讀工具先擬定行動計畫",
            "執行指令不再詢問，但編輯檔案仍需許可",
            "跳過所有權限，完全自由執行",
            "編輯檔案不再詢問，但執行指令仍需許可"
          ],
          "correct": 3,
          "why": "字幕 [01:35]～[02:05]：auto-accept 模式編輯檔案不會詢問，但執行指令仍會要求許可。只用唯讀工具擬計畫的是 Planning mode。"
        },
        "status": "old"
      },
      {
        "id": "yt_0kILa02vKuI",
        "title": "🎬 安裝 Claude Code",
        "category": "Claude Code",
        "text": "<b>介紹在終端機、IDE、Desktop 與網頁上安裝和使用 Claude Code 的方法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是怎麼安裝 Claude Code。Claude Code 是 Anthropic 出的 AI 助手，可以直接讀你電腦裡的檔案、幫你改檔案。影片一次介紹了四種用法：終端機（用打字下指令操作電腦的視窗）、程式編輯器、桌面 App 和網頁版。看完你就知道自己適合哪一種，也知道裝的時候要注意哪些地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=6s\" target=\"_blank\">00:06</a> macOS、Linux、WSL 可以用 curl 指令一次裝好；也可以用 Homebrew（brew install）安裝，但 Homebrew 版不會自動更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ curl 是從網路下載東西的指令，貼一行就能裝好。WSL 是在 Windows 裡跑 Linux 的環境。Homebrew 是 Mac 常用的安裝工具，但用它裝的版本不會自己更新，要記得手動升級。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=6s\" target=\"_blank\">00:06</a> Windows 上，PowerShell 用 Invoke-RestMethod 指令，CMD 用 curl 指令；也可以用 winget 安裝，但跟 Homebrew 一樣不會自動更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PowerShell 和 CMD 都是 Windows 內建、用來打指令的視窗。你開的是哪一個，就貼對應的那行指令。winget 是微軟的安裝工具，跟 Homebrew 一樣不會自動更新。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=37s\" target=\"_blank\">00:37</a> 到專案目錄執行 Claude，先選顏色主題，再用 Pro、Max 或 Enterprise 帳號登入，或改用 API key；組織有 Enterprise 帳號的話要選那個選項<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先進到你的工作資料夾，打 claude 啟動它。第一次會先請你選畫面配色，再登入：有訂閱就用帳號登入。API key 是一串專屬金鑰，也可以用來登入。公司有 Enterprise 的話就選那個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=37s\" target=\"_blank\">00:37</a> 在哪個目錄執行 Claude，它就能存取該目錄和底下所有子資料夾<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你在哪個資料夾啟動它，它就能看、能動那個資料夾和裡面所有的子資料夾。所以最好只在要處理的專案資料夾裡開，不要在桌面或整個使用者資料夾開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=67s\" target=\"_blank\">01:07</a> VS Code：在擴充功能搜尋 Claude Code，安裝 Anthropic 出的、有藍色勾勾的那個；裝完可能要重開，再用 Ctrl/Cmd+Shift+P 開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VS Code 是一套很多人用的免費程式編輯器。到擴充功能（外掛）裡搜 Claude Code，認明發行者是 Anthropic、有藍勾勾的那個。裝完沒出現就重開，再按 Ctrl/Cmd+Shift+P 叫出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=67s\" target=\"_blank\">01:07</a> JetBrains IDE 要從 JetBrains Marketplace 安裝 Claude Code plugin，重開 IDE 後點 Claude 圖示，就會開出終端機介面的窗格<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ IDE 是寫程式用的整合軟體，JetBrains 是一系列 IDE 的品牌。到它的外掛商店 JetBrains Marketplace 裝好 Claude Code，重開後點 Claude 圖示，就會跳出一個打字對話的窗格。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=101s\" target=\"_blank\">01:41</a> Claude Desktop 登入後，上方有個「Code」切換鈕，可以指定資料夾、調整權限，甚至在雲端環境工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Desktop 是電腦版的 App。登入後切到上方的「Code」，就能指定它處理哪個資料夾，也能設定哪些動作要先問過你，甚至可以讓它在雲端環境裡做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=135s\" target=\"_blank\">02:15</a> 網頁版在 claude.ai/code，只能用 GitHub repositories；終端機版的新功能最快上線，Desktop 適合讓 Claude 在背景執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網頁版開 claude.ai/code 就能用，但只能處理放在 GitHub（存放程式專案的網站）上的專案。新功能通常最先出現在終端機版。想讓 Claude 在背景慢慢做事，就用 Desktop。</span>\n\n📘 術語<br><b>auto-update</b>（自動更新）：影片說用 Homebrew 和 winget 安裝的版本沒有自動更新功能<br><b>API key</b>（API 金鑰）：除了用 Pro、Max、Enterprise 帳號登入以外的另一種登入方式<br><b>JetBrains Marketplace</b>（JetBrains 外掛市集）：在 JetBrains IDE 安裝 Claude Code plugin 的地方\n\n📺 <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=0s\" target=\"_blank\">Installing Claude Code</a>（2026/05/14 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：如果你不想碰指令，最簡單的是直接打開 Claude Desktop，切到「Code」，選一個專案資料夾開始用。想用終端機版的話，先建一個專用資料夾，進到裡面再啟動，免得它碰到不相關的檔案。",
        "quiz": {
          "q": "根據影片，在網頁上（claude.ai/code）使用 Claude Code 有什麼限制？",
          "options": [
            "不能同時跑多個 session",
            "只能用 Enterprise 帳號",
            "要先安裝 Claude Desktop",
            "只能用 GitHub repositories"
          ],
          "correct": 3,
          "why": "[02:15] 影片說網頁版跟 Desktop 很像，但只能用 GitHub repositories；[02:45] 還提到網頁版可以讓多個 session 平行執行"
        },
        "status": "old"
      },
      {
        "id": "yt_O0FGCxkHM-U",
        "title": "🎬 CLAUDE.md 檔案",
        "category": "Claude Code",
        "text": "<b>介紹 CLAUDE.md 怎麼讓 Claude Code 記住專案，以及怎麼寫和維護</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 CLAUDE.md：這份說明檔能讓 Claude Code（Anthropic 推出、幫你寫程式的 AI 工具）記住你的專案。看完你會知道它怎麼產生、裡面該寫什麼、怎麼維護，以後就不用每次開工都把同樣的事再交代一遍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=3s\" target=\"_blank\">00:03</a> CLAUDE.md 讓 Claude Code 對專案有持久記憶；沒有它的話，每次都得重新探索程式碼、了解相依套件和已完成的功能，有時還得自己假設<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 每次開新對話都會忘記前面的事。CLAUDE.md 就是它的 persistent memory（長期記憶）。只要先寫好專案用了哪些套件、做到哪裡，它就不用每次重新翻一遍，也不用自己亂猜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 它是放在專案根目錄的 markdown 檔，每次開 session 時 Claude Code 會自動讀取，內容會附加到你的 prompt 上，就像程式碼庫的 onboarding 腳本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它是放在專案最外層資料夾的 markdown 檔（用 # 標標題的純文字檔）。每次開 session（一輪新對話），它都會被自動讀進來，接在你的 prompt（你下的指令）後面，就像給新人的 onboarding 到職手冊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 執行 /init 指令，Claude 會根據你的程式碼庫產生一份 CLAUDE.md<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不想從頭寫的話，就在 Claude Code 裡輸入 /init 這個指令。它會自己讀過整個程式碼庫（專案裡所有的程式檔），幫你整理出第一版 CLAUDE.md，你再慢慢修改就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 範例內容包括技術架構（Next.js 15、app router、Tailwind、Drizzle ORM）、常用指令（dev server、測試、lint）和程式碼風格規則<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 範例裡寫了三類內容：技術架構（例如 Next.js 網站框架、Tailwind 排版工具、Drizzle ORM 資料庫工具）、常用指令（開本機測試網站、跑測試、用 lint 自動檢查寫法），還有程式風格規則。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=97s\" target=\"_blank\">01:37</a> CLAUDE.md 可以放進版本控制跟團隊共用。記憶檔有分層：專案層級的放在專案根目錄；使用者層級的放在設定資料夾，只給自己用，所有專案都適用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它可以放進版本控制（像 Git 這種記錄每次修改的系統），讓全隊共用同一份。記憶檔分兩層：專案層只管這個專案；使用者層放在你自己的設定資料夾，只有你用，但每個專案都適用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=97s\" target=\"_blank\">01:37</a> 如果你需要糾正 Claude（例如要它一律用 server actions、不要用 API routes），可以明確請它存進記憶，下次回到這個專案就會記得<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 的做法不合你意時，例如你要它一律用 server actions、不要用 API routes（兩種讓網頁跟後端溝通的寫法），就直接叫它把這條存進記憶，下次回到這個專案就不用再講一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=127s\" target=\"_blank\">02:07</a> 想讓 Claude 參考專案裡的文件，用 @ 符號加上檔案路徑就可以<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想讓 Claude 參考專案裡的某份文件，就打 @ 再接檔案路徑（檔案在資料夾裡的位置），例如 @docs/spec.md，它就會去讀那份檔案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=127s\" target=\"_blank\">02:07</a> 建議新專案一開始先不要建 CLAUDE.md，看你在哪些地方得一直修正模型，這樣檔案才會精簡，只留必要的資訊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新專案建議先不要急著寫 CLAUDE.md。先用一陣子，看看哪些事你一直得糾正它，再把這些寫進去。這樣檔案才會精簡，只留下真正必要的資訊。</span>\n\n📘 術語<br><b>CLAUDE.md</b>（CLAUDE.md 記憶檔）：放在專案根目錄的 markdown 檔，每次開 session 時 Claude Code 會自動讀取，內容會附加到你的 prompt<br><b>/init</b>（初始化指令）：讓 Claude 根據你的程式碼庫產生一份 CLAUDE.md<br><b>persistent memory</b>（持久記憶）：CLAUDE.md 提供的專案記憶，讓 Claude Code 不用每次從頭探索程式碼庫<br><b>user-level CLAUDE.md</b>（使用者層級 CLAUDE.md）：放在設定資料夾，只給自己用，所有專案都適用，適合放個人偏好，例如程式碼註解怎麼寫\n\n📺 <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=0s\" target=\"_blank\">The CLAUDE.md file</a>（2026/05/10 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：下次用 Claude Code 時，發現同一件事糾正它第二次，就直接叫它把這條記進 CLAUDE.md。個人習慣（例如程式註解一律用中文寫）就放在使用者層的 CLAUDE.md，所有專案都會套用。",
        "quiz": {
          "q": "影片建議新專案一開始怎麼處理 CLAUDE.md？",
          "options": [
            "先不要建 CLAUDE.md，看在哪些地方得一直修正模型",
            "一開始就把專案所有文件內容貼進 CLAUDE.md",
            "從其他專案複製一份現成的 CLAUDE.md",
            "只建使用者層級的 CLAUDE.md，不建專案層級的"
          ],
          "correct": 0,
          "why": "[02:07] 影片說 we recommend you start off a project without a Claude.md file，並看你在哪些地方得一直修正模型，這樣 CLAUDE.md 才會保持精簡"
        },
        "status": "old"
      },
      {
        "id": "yt_SqHsS737CeA",
        "title": "🎬 在 Google Cloud 上用 Claude 打造應用程式",
        "category": "Claude Code",
        "text": "<b>示範用 Claude Code 搭配 Google Cloud 上的 Claude 模型，從構想到部署做出一個回饋 app</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼用 Claude Code（Anthropic 的 AI 寫程式助手，你用對話請它寫程式）接上 Google Cloud（Google 的雲端服務平台）上的 Claude 模型，把一個收集回饋的 app 從點子一路做到部署上 Cloud Run（Google 代管、讓程式在網路上跑起來的服務）。影片依序扮演 PM、設計、工程、資安四個角色，讓你看到 AI 在開發的每一關各能幫上什麼忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=227s\" target=\"_blank\">03:47</a> 在 Claude Code 使用 Google Cloud 上的模型有多種設定方式，最簡單快速的是 application default credential（ADC），會自動找到你的憑證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想用 Google Cloud 上的模型，要先證明你有權限。ADC 會依你的環境自動找到你的登入憑證，你不用自己保管金鑰，也不用設定環境變數，是最省事的接法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=258s\" target=\"_blank\">04:18</a> Claude Code 新增設定精靈，可偵測專案與模型所在 region、檢查專案裡有哪些模型可用，並將模型固定下來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定精靈會一步步帶你設定。它會自動找出你的專案、模型放在哪個 region（資料中心所在的地區），列出你能用的模型，再把要用的模型固定下來，之後都用同一個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=289s\" target=\"_blank\">04:49</a> 在 Google Cloud 上用 Claude 的理由：按 token 計費、沒有訊息上限；可用 provisioned throughput；不用輪替 API key；資料留在你的專案裡；有 global 與 regional endpoint<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 按 token（AI 計算字數的單位）計費，不限訊息數；可以預留專用運算量給正式服務；API key（連線密碼）不用定期更換；資料留在專案內；endpoint（連線入口）有全球版和地區版。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=449s\" target=\"_blank\">07:29</a> PM 角色：在 CLAUDE.md 寫好指示，只靠一張手繪草圖，幾分鐘內就讓 Claude 產出 app 的 wireframe 原型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM（產品經理）先在 CLAUDE.md 寫好規則，這是 Claude 開工前會先讀的說明檔。接著只給一張手繪草圖，幾分鐘就拿到 wireframe，也就是只有版面骨架的畫面原型。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=541s\" target=\"_blank\">09:01</a> UI/UX 角色：用 plan mode 讓 Claude 在寫程式前先思考、提出計畫，確認沒問題再實作；Figma 的設計指示這次改用一份 design doc 模擬<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ UI/UX（介面與使用體驗）設計師用 plan mode：Claude 先想清楚、列出做法，你確認後它才寫程式。設計規範原本要從 Figma（常用的介面設計工具）拿，這次改用一份設計文件模擬。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=726s\" target=\"_blank\">12:06</a> Google Cloud 推出 developer knowledge API（附 MCP server）與 Google Cloud Skills：前者提供最新文件、幫忙規劃架構，後者負責個別元件的實作，例如部署到 Cloud Run<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ developer knowledge API 提供最新文件、幫忙規劃架構，透過 MCP server（AI 接工具用的插頭）取用；Skills 負責單一元件的實作，例如部署到 Cloud Run。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=879s\" target=\"_blank\">14:39</a> 軟體工程師角色：同時開三個 subagent，分別負責 API、ingestion pipeline 和 dashboard 並行實作，架構用到 Cloud Run、Firestore、BigQuery、Looker<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 工程師同時派出三個 subagent（分工的 AI 助手），分別做 API、資料匯入流程和數據看板；架構用到 Cloud Run、存資料的 Firestore、做分析的 BigQuery，以及出報表的 Looker。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=1100s\" target=\"_blank\">18:20</a> 資安角色：使用 Claude Code 內建的 security review，它找到一個可能的問題並自動修好，接著部署到 Cloud Run 讓 app 上線<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 資安角色跑 Claude Code 內建的 security review（自動檢查程式有沒有安全漏洞），它抓到一個可能的問題並自己修好，最後部署到 Cloud Run，app 正式上線。</span>\n\n📘 術語<br><b>application default credential (ADC)</b>（應用程式預設憑證）：依照你使用的環境自動找到憑證（例如使用者憑證），不用輪替 API key，也不用設定環境變數<br><b>provisioned throughput</b>（預留輸送量）：替你預留一部分輸送量，適合要上線到 production 的企業應用<br><b>plan mode</b>（規劃模式）：讓 Claude 在寫任何程式碼前先思考，並提出它打算怎麼做<br><b>developer knowledge API</b>（開發者知識 API）：提供 Google Cloud 的最新文件，Claude Code 可透過 MCP server 直接取用<br><b>agent registry</b>（agent 註冊中心）：屬於 agent platform，列出 Google Cloud 原生支援的 MCP server，並說明設定方式、工具描述，也提供 observability 功能\n\n📺 <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=0s\" target=\"_blank\">Building with Claude on Google Cloud</a>（2026/05/08 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：就算不寫程式，也能學 PM 那招：先在 CLAUDE.md 寫清楚你要什麼，附上一張手繪草圖，再開 plan mode 讓 Claude 先交計畫，你看懂、同意了才讓它動手。",
        "quiz": {
          "q": "在示範中，講者同時開了三個 subagent 並行實作，它們分別負責哪三個部分？",
          "options": [
            "前端、後端、資料庫",
            "Cloud Run、Firestore、BigQuery 的設定",
            "wireframe、security review、部署",
            "API、ingestion pipeline、dashboard"
          ],
          "correct": 3,
          "why": "講者在 [14:39] 說要開三個 subagent：一個負責 API、一個負責 ingestion pipeline、一個負責 dashboard，並行實作就像跑團隊 sprint 一樣。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_IkaPHiMDazM",
        "title": "🎬 Claude Code 中的 Hooks",
        "category": "Claude Code",
        "text": "<b>介紹 Hooks 如何在 Claude Code 生命週期中確定性地執行指令</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是 Anthropic 推出的 AI 寫程式助手，可以直接幫你改檔案、執行指令。這支影片介紹 Hooks：設定好之後，某些動作到了固定時機就「一定」會自動執行，不用靠 AI 自己記得。如果你想讓 AI 做事更穩定、少出包，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=4s\" target=\"_blank\">00:04</a> Hooks 讓你在 Claude Code 生命週期的不同時間點執行指令，關鍵差異是它是確定性的，一定會執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Hooks 就是事先設定好：流程走到某一步，就自動執行某個指令。生命週期指的是 Claude 從收到你的要求到做完的整個過程。重點在於它一定會執行，不靠 AI 記得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=4s\" target=\"_blank\">00:04</a> 在 claude.md 要求 Claude 每次編輯後跑 prettier，多數時候會照做但不一定；hook 則每次都執行、沒有例外<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ claude.md 是寫給 Claude 看的專案說明檔；prettier 是自動把程式碼排整齊的工具。寫在說明檔裡就像口頭交代，AI 偶爾會漏掉；hook 是系統強制執行，每次都會跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=34s\" target=\"_blank\">00:34</a> 常見用途：編輯檔案後自動格式化、為了合規記錄所有執行的指令、阻擋危險操作、Claude 完成任務時發通知<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常見的四種用法：改完檔案自動排版；把 Claude 執行過的每個指令記錄下來，方便公司查核；擋掉像刪除重要檔案這類危險動作；Claude 做完時跳通知，你不用一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=34s\" target=\"_blank\">00:34</a> Hooks 設定在 settings.json：選一個事件、可選擇設定 matcher 指定適用的工具，再提供要執行的指令<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ settings.json 是 Claude Code 的設定檔。設定一個 hook 分三步：選觸發時機（事件）；可以加上 matcher，指定只對哪種工具生效（工具就是 Claude 的動作，例如改檔）；最後填入要執行的指令。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=64s\" target=\"_blank\">01:04</a> 事件包括 User prompt submit、Pre-tool use、Post-tool use、Notification、Stop<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 可以選的時機有：你送出訊息時（User prompt submit）、Claude 使用工具前（Pre-tool use）和用完後（Post-tool use）、它發通知時（Notification），以及它做完停下來時（Stop）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=64s\" target=\"_blank\">01:04</a> 最常見的 hook：用 Post-tool use 搭配 edit 或 multi-edit 的 matcher，依副檔名執行 prettier、Go format、Ruff 等格式化工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最常見的組合：Claude 改完檔案後（edit 是改一處、multi-edit 是一次改多處），依檔案類型自動跑對應的排版工具，例如 JavaScript 用 prettier、Go 用 Go format、Python 用 Ruff。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=94s\" target=\"_blank\">01:34</a> Pre-tool use hook 從 stdin 收到 JSON 格式的工具名稱與輸入；exit code 2 會阻擋並把 stderr 回饋給 Claude，exit code 0 則繼續<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Pre-tool use 會在動作前，把「要用哪個工具、要做什麼」用 JSON（一種有結構的資料格式）交給你的腳本。腳本回傳代碼 2 就擋下，並告訴 Claude 原因；回傳 0 就放行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=125s\" target=\"_blank\">02:05</a> 設定在 .Claude/settings.json 的 hooks 屬專案層級，可提交進 repo 讓全隊自動套用；用 Claude project dir 環境變數引用專案內腳本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫在專案裡 .claude/settings.json 的 hook 只作用在這個專案，可以跟程式碼一起存進 repo（共用的程式碼倉庫），隊友拿到就自動生效。引用腳本時用 Claude project dir 這個變數代表專案位置，路徑就不會出錯。</span>\n\n📘 術語<br><b>Hooks</b>（掛鉤）：在 Claude Code 生命週期不同時間點執行指令，具確定性，每次都會執行<br><b>matcher</b>（比對器）：可選設定，指定 hook 適用於哪個工具，例如 edit 或 multi-edit<br><b>Pre-tool use</b>（工具呼叫前）：在工具呼叫前執行，可用 exit code 2 阻擋該工具呼叫<br><b>Post-tool use</b>（工具呼叫後）：在工具呼叫完成後執行，適合自動格式化與記錄<br><b>deterministic</b>（確定性的）：一定會執行、沒有例外，不像寫在 claude.md 裡的指示有時不會被執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=0s\" target=\"_blank\">Hooks in Claude Code</a>（2026/05/07 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：如果你有在用 Claude Code，先挑一件「每次都要做、但 AI 偶爾會忘」的事，例如改完檔要排版、做完要通知你。請 Claude 幫你把它寫成 settings.json 裡的 hook，不要只寫在 claude.md 裡。",
        "quiz": {
          "q": "Pre-tool use hook 要阻擋某個工具呼叫時，應該用哪個 exit code 結束？",
          "options": [
            "exit code 0",
            "exit code 1",
            "exit code 127",
            "exit code 2"
          ],
          "correct": 3,
          "why": "字幕 [02:05]：「Exit code zero means proceed. Exit code two means block.」exit code 2 會阻擋動作，並把 stderr 訊息回饋給 Claude（[01:34]）"
        },
        "status": "old"
      },
      {
        "id": "yt_IMZa42k6L6M",
        "title": "🎬 Claude Code 有什麼新功能",
        "category": "Claude Code",
        "text": "<b>介紹 Claude Code 新功能，分成開發者體驗和自主性兩大主題</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方介紹 Claude Code 新功能的影片。Claude Code 是讓 Claude 直接在你電腦上讀寫程式、執行指令的 AI 工具。新功能分兩類：一類讓你用起來更順手，另一類讓 Claude 在你不在電腦前時也能自己把工作做下去。想知道 AI 寫程式工具正往哪個方向走，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=55s\" target=\"_blank\">00:55</a> 新功能分成兩大主題：開發者體驗（讓 Claude Code 更好用），以及自主性（讓 Claude 在你離開鍵盤時做更多事）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這次更新分兩類。「開發者體驗」是讓操作更順、更不卡；「自主性」是讓你去吃飯、開會時，Claude 還能繼續做事，不用一直守在螢幕前。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=85s\" target=\"_blank\">01:25</a> Remote control：在自己電腦開的 session，可以用手機接著操作，開發環境相同。輸入 remote control 會拿到一個 Claude Code on the web 連結<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 是你跟 Claude 的一段工作對話。在電腦上開始工作後輸入 remote control，會拿到一個網頁版連結。出門用手機打開就能繼續下指令，用的還是你電腦上那套環境。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=213s\" target=\"_blank\">03:33</a> 終端機 UI 新增 full screen 模式，把 scrollback 虛擬化，保證畫面不閃爍、元素可以點擊，長 session 記憶體用量也維持平穩。另外可用 /voice 切換 voice mode，按住空白鍵說出 prompt<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 終端機是打指令的文字視窗。新的全螢幕模式只畫出你正在看的那段歷史紀錄（scrollback），所以畫面不閃、可以用滑鼠點，聊很久也不會越來越吃記憶體。/voice 讓你按住空白鍵用講的下指令。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=447s\" target=\"_blank\">07:27</a> Claude Code desktop：側邊欄有釘選區，可依專案分組，支援拖放開 split view；可開 plan、diff、files 檢視並留言；實驗功能「pin as chapter」可以建立對話目錄<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ desktop 是有視窗的桌面 App 版。常用對話可以釘選、按專案分組，拖一下就能左右並排看兩個。計畫、改動前後對照（diff）和檔案都能打開直接留言。實驗功能「pin as chapter」可以幫長對話做目錄。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=668s\" target=\"_blank\">11:08</a> Auto mode：由 classifier 代替你決定權限，檢查動作是否具破壞性、是否像 prompt injection；判定安全就執行，不安全就擋下<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ auto mode 讓你不用每一步都按「允許」。改由一個判斷模型（classifier）檢查：這個動作會不會搞壞東西？像不像有人偷塞的惡意指令（prompt injection）？安全就放行，不安全就擋下。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=769s\" target=\"_blank\">12:49</a> Worktrees：可在設定裡宣告要在各 worktree 間共用的檔案（例如 node modules），用 --worktree（-w）開新 session；Claude 也有 enter／exit worktree tool，可以自己建立 worktree<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ worktree 是 Git（管理程式版本的工具）的功能，等於把專案複製一份、另開分支，讓幾件事同時做互不干擾。現在可以指定共用的大資料夾（例如 node modules），用 -w 開新工作，Claude 也能自己開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=998s\" target=\"_blank\">16:38</a> Auto memory：Claude 會為每個專案管理一個目錄，裡面的 memory.md 是索引檔，連結到其他細節檔（progressive disclosure）；subagent 也能用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 會替每個專案自動記筆記。memory.md 像目錄，只列重點並連到細節檔，需要時才翻開細看（這叫 progressive disclosure），不用每次全部讀一遍。Claude 派出去分工的小幫手（subagent）也能用。</span>\n\n📘 術語<br><b>auto mode</b>（自動模式）：新的權限模式，由 classifier 代替你決定是否允許 tool call<br><b>worktree</b>（工作樹）：Git 功能，會建立新 branch 並複製 repo 檔案；Claude Code 把它的使用方式變得更友善<br><b>auto memory</b>（自動記憶）：讓 Claude 在不同 session 間累積知識，例如建置指令、除錯心得<br><b>routines</b>（例行任務）：設定一次 prompt、repo、connectors，選好觸發條件後，Claude 就會在你不在時自行執行<br><b>tool search</b>（工具搜尋）：在你和實際工具定義之間多加一層，能提供更多工具但不直接佔用 context\n\n📺 <a href=\"https://www.youtube.com/watch?v=IMZa42k6L6M&t=0s\" target=\"_blank\">What&#x27;s new in Claude Code</a>（2026/05/06 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：如果妳常開 Claude Code 跑比較久的任務，可以先試 remote control：出門前輸入它，路上用手機看進度、補指令。固定要做的事，例如每天早上整理專案狀態，可以做成 routine，讓它排程自動跑。",
        "quiz": {
          "q": "根據影片，auto mode 的 classifier 會檢查 tool call 的哪兩件事？",
          "options": [
            "使用者是否在線上、是否屬於 subagent",
            "動作是否具破壞性、是否像 prompt injection",
            "是否超過 token 上限、是否需要網路連線",
            "是否修改 main branch、是否通過測試"
          ],
          "correct": 1,
          "why": "[11:08] 講者說 classifier 會看兩件事：動作是否具破壞性，以及看起來是否像 prompt injection"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_DlTCu_pNDHE",
        "title": "🎬 Boris Cherny 與 Jarred Sumner 的現場寫程式實錄",
        "category": "Claude Code",
        "text": "<b>Bun 團隊示範用 Claude 自動重現 issue、送 PR、做 code review 的完整閉環流程</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Boris Cherny（Claude Code 團隊）和 Bun 的創辦人 Jarred Sumner 在影片裡現場示範怎麼用 Claude 維護 Bun。Bun 是一套用來執行 JavaScript 程式的工具。從有人回報問題開始，重現 bug、送出修改提案 PR（改程式的申請單，要審過才會併進正式版本），到交給其他機器人做 code review（併入前的審查），這些步驟幾乎都由 AI 包辦。這支影片值得看，是因為它示範的不只是叫 AI 寫一段程式。它是把 AI 放進一條每一關都有檢查的流程，讓 AI 自己把整件事做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=128s\" target=\"_blank\">02:08</a> Bun 的 repo 每次有人開 issue，Claude bot（Robobun）就會自動嘗試重現問題，並自動送出 PR<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有人在 Bun 的專案開 issue（回報問題的單子）時，Robobun 會先自己把 bug 重演一遍，確認真的有這個問題，再修好並送出 PR。Robobun 是 Bun 團隊的 Claude 機器人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=165s\" target=\"_blank\">02:45</a> PR 一定要附測試：測試必須在舊版 Bun 失敗、在 debug branch 通過，bot 才能送出 PR<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 測試是一小段自動檢查用的程式。規定是測試要在舊版失敗，證明 bug 真的存在，又要在 debug branch（專門修這個 bug 的分支）通過，證明真的修好了。兩個條件都成立，才能送出 PR。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=230s\" target=\"_blank\">03:50</a> 最近三個月，Robobun 在 main 分支的貢獻量已經超過 Jarred 本人，而且它的 PR 還沒全部 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ main 分支是專案的正式主線版本。最近三個月，Robobun 併進主線的程式比 Jarred 本人還多，而且還有一批 PR 在排隊等 merge（合併進主線）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=294s\" target=\"_blank\">04:54</a> Code Rabbit 跟 Claude code review 兩個 bot 會互相來回討論。Code Rabbit 擅長抓風格問題和是否遵守 CLAUDE.md，Claude code review 擅長找需要完整 context 才看得出來的邊界情況<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Code Rabbit 和 Claude code review 是兩個審查機器人，會互相回覆討論。前者專門挑寫法風格，也檢查有沒有照 CLAUDE.md（寫給 Claude 看的專案守則）；後者會看整個專案的來龍去脈，抓出容易漏掉的特殊狀況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=525s\" target=\"_blank\">08:45</a> CLAUDE.md 裡寫清楚怎麼 build、怎麼寫測試和跑測試、資料夾結構跟以前踩過的坑。只要發現自己一直重複講同一件事，就該寫進 CLAUDE.md<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CLAUDE.md 裡要寫：怎麼 build（把程式碼組成能執行的軟體）、怎麼寫和跑測試、資料夾怎麼分，還有以前踩過的雷。只要同一件事你跟 Claude 講了好幾次，就該寫進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=621s\" target=\"_blank\">10:21</a> 讓 agent 能讀 CI 錯誤和 build log，自己跑完寫程式、測試、監看 CI 整個循環，交到人手上時就能有信心 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CI 是每次改完程式就自動執行的檢查流程，build log 是組建過程留下的紀錄。讓 AI 自己讀懂這些錯誤、自己修，一路跑到全部通過，交給人的時候就能放心合併。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=1205s\" target=\"_blank\">20:05</a> hill climbing：給模型一個指標加上驗證方法，它就會一直迭代到達標，例如讓 Claude 把圖片處理做得比 sharp 更快<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ hill climbing 就像爬坡，一步一步往更好的方向走。給 AI 一個能量化的目標和檢查方法，它就會一直改到達標。例如拿 sharp（常用的圖片處理工具）當標竿，叫 Claude 做得比它快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=1330s\" target=\"_blank\">22:10</a> Jarred 用 auto mode 處理權限，不用一直等人按核准，所以能讓 Claude 連續跑好幾個小時；他也在用 no flicker mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ auto mode 讓 Claude 不用每一步都停下來等人按核准，所以可以自己連續跑好幾個小時。no flicker mode 是改寫過的畫面顯示方式，跑再久也不會越來越吃資源，還能用滑鼠點。</span>\n\n📘 術語<br><b>Robobun</b>（Robobun（Bun 的 bot））：Bun 的 Claude bot，會自動重現 issue 並送出附測試的 PR，也可以在 Discord 或 Slack 上 @ 它<br><b>hill climbing</b>（爬山法）：給模型一個指標和驗證方法，讓它一直迭代到達成指標<br><b>auto mode</b>（自動模式）：權限處理模式，Claude 不會卡在權限請求，能連續執行好幾個小時<br><b>no flicker mode</b>（無閃爍模式）：改寫過的 CLI renderer，採用虛擬捲動，記憶體和 CPU 用量固定，還支援滑鼠點擊<br><b>adversarial code review</b>（對抗式程式碼審查）：Boris 隨口想到的名稱，用來指 bot 修 bug、code review bot 來回審查的這種模式\n\n📺 <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=0s\" target=\"_blank\">Live coding session with Boris Cherny and Jarred Sumner</a>（2026/05/06 · 32 分鐘）",
        "tip": "💡 你可以怎麼用：下次發現自己又在跟 AI 重講同一條規則（例如回答格式、你的工作背景），就把它寫進 CLAUDE.md 或自訂指示，不用每次重講。交代任務時也附上「怎樣算完成」的檢查標準，例如「字數低於 300」，讓它自己改到符合為止。",
        "quiz": {
          "q": "Robobun 要送出 PR 之前，必須滿足哪個硬性條件？",
          "options": [
            "PR 必須附上螢幕截圖或錄影",
            "PR 要先經過 Jarred 手動核准",
            "PR 只能修改 CLAUDE.md 允許修改的檔案",
            "PR 附的測試要在舊版 Bun 失敗、在 debug branch 通過"
          ],
          "correct": 3,
          "why": "[02:45] 字幕提到 PR 一定要有測試，而且要檢查測試是否在舊版 Bun 失敗、在 debug branch 通過，不符合的話 bot 就不能送出 PR"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_91AJ0cpgLlQ",
        "title": "🎬 Anthropic 如何在 Product Management 中使用 Claude",
        "category": "Claude Code",
        "text": "<b>Anthropic 的 PM 示範用 Claude Code 分析產品資料，以及產生 e-bells 測試案例</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 的 PM（產品經理，負責決定產品要做什麼、怎麼做的人）示範怎麼用 Claude Code 工作。Claude Code 是 Anthropic 的 AI 工具，能直接在電腦上幫你寫程式、跑分析。影片裡示範了兩件事：分析產品資料，和產生測試題。就算你不是工程師，也能看到 AI 怎麼讓人少等別人、自己把事情做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=1s\" target=\"_blank\">00:01</a> PM 可以先用 Claude 測試產品想法，再找其他人加入，因此能更快地迭代，也更能獨立作業。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有新點子時，PM 可以先自己丟給 Claude 試做，覺得可行再找同事一起做。這樣不用每一步都等別人，事情推得比較快，也比較不用依賴別人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=1s\" target=\"_blank\">00:01</a> PM 取得資料通常很麻煩：多半得請 data science 同事幫忙，不然就是自己寫基本 SQL，去查不太熟的資料庫。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM 想看數據常常卡住：要嘛請 data science（數據分析團隊）幫忙查，要嘛自己寫 SQL（跟資料庫要資料的查詢語言）。偏偏 PM 又不熟公司的資料庫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=31s\" target=\"_blank\">00:31</a> Data science 團隊架設了 BigQuery MCP，把所有 BigQuery 產品資料表接到 Claude Code。這樣不必會寫 SQL，只要負責解讀資料和結果。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ BigQuery 是 Google 的雲端資料庫；MCP 是讓 Claude 接上外部工具和資料的方式。數據團隊把兩個接好後，PM 用講的就能查資料，SQL 交給 Claude 寫，自己專心看懂結果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=62s\" target=\"_blank\">01:02</a> 示範：用 Claude 產生的 synthetic data，分析過去 3 個月 dark mode 使用比例。Claude 主動加上 7-day rolling average 和整體平均。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範用的是 synthetic data（格式像真的、但其實是造出來的資料），看過去三個月有多少人用深色模式。Claude 還主動加了 7 天移動平均（把每天的起伏抹平、看出趨勢）和整體平均。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=93s\" target=\"_blank\">01:33</a> 接著請 Claude 依 plan type 畫出 light／dark mode 使用情況。Claude 會先徵求修改許可，講者說自己做可能要花好幾個小時。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 再請 Claude 按 plan type（使用者訂的方案類型）分開畫淺色和深色模式的使用圖。Claude 修改檔案前會先問可不可以。講者說這種圖自己做可能要好幾個小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=93s\" target=\"_blank\">01:33</a> 團隊也用 Claude 產生 e-bells（評估 AI 系統和 AI 產品的方法）：提供情境和幾個範例，就能擴充到大約 50 個測試案例。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ e-bells（業界一般寫作 evals）是檢查 AI 產品表現好不好的測試方法。團隊給 Claude 情境和幾個範例，它就能擴充出大約 50 題測試案例，不用一題一題自己寫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=123s\" target=\"_blank\">02:03</a> 講者希望 PM 把更多時間花在產品策略、客戶對話和決策上，少花時間在協調和營運。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者希望 PM 把時間花在想產品方向、跟客戶聊、做決定。協調人力、追進度、處理流程這類瑣事，能少就少。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=153s\" target=\"_blank\">02:33</a> 講者認為這不只是自動化，而是擴展了自己獨立完成事情的能力。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他強調重點不只是讓機器代勞。以前要靠別人才做得到的事，現在自己就能完成，一個人能做的事變多了。</span>\n\n📘 術語<br><b>BigQuery MCP</b>（BigQuery MCP）：由 data science 團隊架設，把所有 BigQuery 產品資料表連接到 Claude Code<br><b>e-bells</b>（e-bells（字幕原文拼法））：一種評估 AI 系統和 AI 產品的方法<br><b>synthetic product data</b>（合成產品資料）：示範前用 Claude 產生，內容是某產品的 light mode 與 dark mode 使用資料<br><b>7-day rolling average</b>（7 日移動平均）：講者沒有要求，Claude 自己加到圖表裡的項目之一\n\n📺 <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=0s\" target=\"_blank\">How Anthropic uses Claude in Product Management</a>（2026/03/26 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：下次想查數據或需要一批測試題時，先把情境和兩三個範例丟給 Claude，請它先做出初版。你只要檢查結果合不合理，再決定要不要找同事接手。",
        "quiz": {
          "q": "影片中，data science 團隊架設了哪個 MCP，把產品資料表連接到 Claude Code？",
          "options": [
            "PostgreSQL MCP",
            "Snowflake MCP",
            "Google Sheets MCP",
            "BigQuery MCP"
          ],
          "correct": 3,
          "why": "[00:31] 講者說 data science 團隊架設了 BigQuery MCP，把所有 BigQuery 產品資料表連接到 Claude Code。"
        },
        "status": "old"
      },
      {
        "id": "yt_Ko7_tC1fMMM",
        "title": "🎬 使用 Claude Code Remote Control",
        "category": "Claude Code",
        "text": "<b>用 remote control 從 Claude Code web 或手機 Claude app 接續電腦上的 Claude Code session</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Code 的 Remote Control 功能：電腦上正在進行的 Claude Code 工作，可以改用手機或網頁接著做。適合常讓 Claude 跑比較久的任務、又不想一直坐在電腦前等的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=6s\" target=\"_blank\">00:06</a> remote control 讓你用 Claude Code web 或手機上的 Claude app 連到自己電腦上正在跑的 Claude Code session，接著做下去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是在你電腦上幫你寫程式、改檔案的 AI 助手；session 是一段進行中的工作。Remote Control 讓你離開電腦後，也能用網頁或手機接著做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=37s\" target=\"_blank\">00:37</a> 到專案資料夾執行 Claude remote control，會開一個新 session 並給一個 URL；按空白鍵會出現 QR code，可以用手機掃<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在專案資料夾輸入 claude remote control，會開一個新的 session，並給你一個網址；按空白鍵會跳出 QR code，用手機一掃就連上了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=37s\" target=\"_blank\">00:37</a> 如果已經在 Claude Code session 裡，輸入 /remote control 就能看到 URL，把 session 交給遠端裝置<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果已經在 Claude Code 裡做到一半，不用重開。輸入 /remote control 就能拿到網址，把這段工作交給手機或網頁接手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=67s\" target=\"_blank\">01:07</a> URL 只是為了方便；Claude Code 綁定你的 Claude 帳號，所以不點連結、直接在手機上開也可以<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網址只是捷徑。Claude Code 綁定你的 Claude 帳號，手機 app 只要登入同一個帳號，直接打開就找得到這段工作，不點連結也可以。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=67s\" target=\"_blank\">01:07</a> 連上後的體驗跟平常一樣，可以用同樣的工具、MCP servers、設定和檔案系統；所有東西仍在你的電腦上執行，不會移到雲端<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 手機只是遙控器，真正做事的還是你的電腦。你裝的工具、MCP servers（讓 Claude 連到外部服務的外掛）、設定和檔案都照常能用，資料不會搬上雲端。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> 對話會在各裝置間同步，在手機 Claude app 輸入的內容會即時出現在 terminal<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩邊是同一段對話：你在手機打的字，會馬上出現在電腦的 terminal（輸入指令的文字視窗）裡，回到座位就能直接接著看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> 預設每次都要指定是否開 remote control；可以在 /config 裡設定成所有 session 都啟用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設每次開 session 都要自己決定要不要開遠端。嫌麻煩的話，到 /config（Claude Code 的設定選單）改成所有 session 都自動啟用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> spawn mode 可以從遠端建立新 session：執行 Claude remote control 後，在 web 或手機點 environment 按鈕、選你的裝置，就能開多個 Claude Code instance。字幕說錄影當下開放給 Max、Team、Enterprise 使用者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ spawn mode 能從遠端開新工作：電腦跑 remote control 後，在手機或網頁點 environment 選你的電腦，就能同時開好幾個 Claude Code。錄影時只開放 Max、Team、Enterprise 用戶。</span>\n\n📘 術語<br><b>Remote Control</b>（遠端控制）：用 Claude Code web 或手機 Claude app 連到電腦上執行中的 Claude Code session，接著做下去<br><b>spawn mode</b>（產生模式）：從遠端建立新 session，可以開多個 Claude Code instance<br><b>/config</b>（設定指令）：可以在這裡開啟「所有 session 都啟用 remote control」\n\n📺 <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=0s\" target=\"_blank\">Using Claude Code Remote Control</a>（2026/03/17 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：下次要讓 Claude Code 跑比較久的任務前，先輸入 /remote control，出門後就能用手機的 Claude app 看進度、回答它的問題。工作還是在你的電腦上跑，所以記得讓電腦保持開機。",
        "quiz": {
          "q": "透過 remote control 從手機連上 Claude Code session 時，程式實際在哪裡執行？",
          "options": [
            "session 會整個搬到雲端執行",
            "在 Claude Code web 的伺服器上重新建立一份",
            "仍在你自己的電腦上執行，不會移到雲端",
            "改在手機上本機執行"
          ],
          "correct": 2,
          "why": "[01:07]～[01:37] 字幕說：「Everything is still running on your machine. Nothing is moved to the cloud.」"
        },
        "status": "old"
      },
      {
        "id": "yt_bjdBVZa66oU",
        "title": "🎬 什麼是 skills？",
        "category": "Claude Code",
        "text": "<b>介紹 Claude Code 的 skills：寫一次，Claude 遇到相關任務就會自動套用</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Code 的 skills 功能：把你常交代的做法寫成一份說明檔，之後 Claude 碰到相關工作就會自己照做。如果你常要跟 AI 重講同一套規矩，這支影片會告訴你怎麼一次解決。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=5s\" target=\"_blank\">00:05</a> 每次跟 Claude 解釋團隊的 coding 規範、PR review 回饋格式、commit message 格式都在重複講，skills 就是用來解決這個問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 開新對話時不記得團隊習慣，寫程式的規矩、PR（請同事審改動的申請）怎麼回饋、commit message（存改動時附的說明）怎麼寫，都得重講。skills 就是要省掉這個麻煩。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=5s\" target=\"_blank\">00:05</a> skill 是一個 markdown 檔，教 Claude 怎麼做某件事，只要寫一次，之後遇到相關情況 Claude 就會自動套用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 就像寫給 Claude 的工作說明書，用 markdown（用簡單符號標出標題、清單的純文字格式）寫成。寫好放著，之後碰到相關工作，它會自己拿出來照做，你不用再提醒。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=36s\" target=\"_blank\">00:36</a> Claude Code 裡用的是 skill.md 檔；description 決定 Claude 要不要用這個 skill，Claude 會拿你的要求去比對所有 skill 的 description，啟用符合的那些<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code（Anthropic 給寫程式用的 Claude 工具）裡，skill 是 skill.md 檔。檔案裡的 description（一段用途說明）最重要：Claude 會拿你的要求去比對，對得上才會用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=67s\" target=\"_blank\">01:07</a> 個人 skills 放在 home 目錄的 .claude/skills，所有專案都能用，適合放個人偏好，例如 commit message 風格、文件格式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 放在個人資料夾（home 目錄）底下 .claude/skills 的 skill 只屬於你，不管開哪個專案都能用。適合放個人習慣，像你喜歡的 commit message 寫法、文件排版。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=67s\" target=\"_blank\">01:07</a> 專案 skills 放在 repository 根目錄的 .claude/skills，clone 這個 repo 的人都會自動拿到，適合放團隊標準，例如品牌規範、字型、配色<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 放在專案資料夾（repository，存整個專案的地方）最上層 .claude/skills 的 skill，同事 clone（把專案複製到自己電腦）時會一起拿到。適合放全隊要守的規範，像品牌字型、配色。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=98s\" target=\"_blank\">01:38</a> Claude.md 會載入每一次對話；skills 則是符合需求時才載入，平常只載入名稱和 description，不會塞滿 context window<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude.md 是每次對話都會先讀的固定說明。skill 平常只讓 Claude 看到名稱和用途說明，需要時才讀全文，所以不會塞爆 context window（Claude 一次能記住的內容量）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=129s\" target=\"_blank\">02:09</a> slash commands 要自己打指令，skills 不用，Claude 認出情境就會自動套用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ slash commands（打「/」開頭的指令來叫出功能）要你自己記得去打；skill 不用，Claude 看出你在做相關的事，就會自己套用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=129s\" target=\"_blank\">02:09</a> skills 最適合用在特定任務的專業知識，例如 code review 標準、commit message 格式、組織的品牌規範；同一件事一直重複解釋，就該寫成 skill<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 最適合放某類工作的專門做法，例如審程式的標準、commit message 格式、公司品牌規範。判斷方法很簡單：同一件事你已經講了好幾遍，就該寫成 skill。</span>\n\n📘 術語<br><b>skill</b>（技能）：一個 markdown 檔，教 Claude 怎麼做某件事，寫一次，相關時自動套用<br><b>Agent skills</b>（Agent 技能）：由指令、腳本和資源組成的資料夾，agent 能找到並用來把事情做得更準、更有效率<br><b>description</b>（描述）：Claude 靠它來判斷要不要用這個 skill，會和使用者的要求做比對<br><b>Claude.md</b>（Claude.md 檔）：每次對話都會載入，例如「一律使用 TypeScript strict mode」就寫在這裡<br><b>context window</b>（上下文視窗）：skills 平常只載入名稱和 description，所以不會塞滿 context window\n\n📺 <a href=\"https://www.youtube.com/watch?v=bjdBVZa66oU&t=0s\" target=\"_blank\">What are skills?</a>（2026/02/27 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：先挑一件你最常跟 Claude 重複交代的事，例如報告格式或寫作語氣，把做法寫成一份 skill，並在 description 寫清楚「什麼情況要用」。只有你自己用的習慣放 home 目錄，團隊共用的規範放在專案裡。",
        "quiz": {
          "q": "根據影片，skills 跟 Claude.md 最主要的差別是什麼？",
          "options": [
            "skills 符合需求時才載入，Claude.md 則每次對話都會載入",
            "skills 要手動輸入指令才會觸發，Claude.md 會自動載入",
            "skills 只能放在 home 目錄，Claude.md 只能放在 repository 裡",
            "skills 會把完整內容全部載入 context window，Claude.md 只載入名稱"
          ],
          "correct": 0,
          "why": "[01:38] 字幕說 Claude.md 會載入每一次對話，skills 則在符合需求時才載入（load on demand），而且平常只載入名稱和 description"
        },
        "status": "old"
      }
    ]
  },
  yt_agents: {
    "id": "yt_agents",
    "name": "📺 Agents・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_19HDQ9HppOA",
        "title": "🎬 上線你的第一個 Managed Agent",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 的架構，並實作一個處理事故的 SRE agent</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Managed Agents：Anthropic 提供代管服務，幫你把 AI agent（會自己查資料、用工具把事情辦完的 AI）放到線上執行。影片也示範做一個處理系統事故的 agent。適合想了解「AI 自己去做事」背後怎麼運作的人，看完會知道哪些麻煩事現在可以交給官方處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=144s\" target=\"_blank\">02:24</a> 演進歷程：2023 年的 Messages API 只提供模型本身，其他元件都要開發者自己做。後來的 agent SDK 可以用程式呼叫 Claude Code，但 hosting 和 scaling 仍要自己處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 2023 年的 Messages API（讓程式跟模型對話的介面）只提供模型，其他部分都要自己做。後來的 agent SDK（開發工具包）可以用程式操作 Claude Code，但架伺服器和使用量變大時的擴充，還是要自己處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=237s\" target=\"_blank\">03:57</a> Claude Managed Agents 由 Anthropic 負責 scaling，並提供專用 harness、sandboxing、observability 和 tool runtime。開發者只要專心設定任務、agent 和自訂工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 現在擴充由 Anthropic 負責，還附上 harness（管模型怎麼跑任務的外框程式）、隔離的安全執行區、監看它在做什麼的工具，以及執行工具的環境。開發者只要交代任務、設定 agent 和自訂工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=299s\" target=\"_blank\">04:59</a> harness 要跟著模型一起演進：Sonnet 4.5 有 context anxiety（提早收尾），團隊在 harness 裡加了緩解措施。Opus 4.5 沒有這個行為，那些措施就用不到了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 外框要配合模型調整。Sonnet 4.5 有 context anxiety：記憶空間（context window）明明還夠，就急著收尾。團隊在外框加了對策，換成 Opus 4.5 沒這毛病，對策就用不到了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=360s\" target=\"_blank\">06:00</a> 三大資源：agent 定義角色和能力（model、MCP servers、skills），environment 是 agent 的「手」和執行容器，session 把兩者綁在一起<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 三個組件：agent 決定用哪個模型、接哪些 MCP servers（連接外部工具的標準接口）和 skills（事先寫好的做事方法）；environment 是它動手做事的工作空間；session 把兩者配成一次實際的工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=514s\" target=\"_blank\">08:34</a> 把 agent loop 跟工具執行（大腦和手）拆開，憑證更安全，P95 的 time to first token 也降低超過 90%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 負責思考的部分和動手執行的部分分開，密碼、金鑰這類憑證比較不容易外洩。反應也變快：P95（最慢 5% 請求的門檻）從送出到出現第一個字的時間，縮短超過九成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=757s\" target=\"_blank\">12:37</a> 實作：用 Claude Opus 4.7 建立 SRE agent，system prompt 很簡單，並給它 get metrics、recent deploys、get diff 等工具來 debug 事故<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範用 Claude Opus 4.7 做一個 SRE（負責讓線上服務穩定、出事時救火的角色）agent。system prompt（給 AI 的基本工作說明）很短，重點是給它查數據、看最近上線紀錄、比對程式改動的工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=1042s\" target=\"_blank\">17:22</a> session 的溝通單位是 event（使用者訊息、工具呼叫、agent 回應），不是 tokens in／tokens out。event 可以即時串流給使用者，也能用在 observability<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 裡的溝通單位不是 tokens（模型處理文字的小單位），而是一件件 event：你說了什麼、它用了哪個工具、它回了什麼。這些 event 可以即時顯示給使用者，事後也能拿來查它做了什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=1846s\" target=\"_blank\">30:46</a> session 有 idle、running、rescheduling、terminated 等狀態，可以接 webhook，依外部事件恢復或啟動 session<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 像一張工單，有閒置、執行中、重新排程、已結束等狀態。可以接 webhook（外部系統有動靜時自動通知的機制），例如監控系統一警報，就自動叫醒或開一個 session 去處理。</span>\n\n📘 術語<br><b>context anxiety</b>（context 焦慮）：Sonnet 4.5 的一種行為：context window 還有空間，Claude 就提早收尾任務<br><b>environment</b>（環境）：agent 的「手」，提供空間和容器，讓 agent 代替你執行動作<br><b>session</b>（工作階段）：把 agent 和 environment 綁在一起，並把 event 串流回給使用者<br><b>outcomes</b>（成果目標）：為 agent 的產出定義 rubric，agent 會自己決定要做哪些工具呼叫來達成結果<br><b>vaults</b>（憑證保管庫）：憑證加密存放在另一個 endpoint，可以按使用者、按 session 管理\n\n📺 <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=0s\" target=\"_blank\">Ship your first Managed Agent</a>（2026/05/26 · 37 分鐘）",
        "tip": "💡 你可以怎麼用：要設計自己的 AI 助手時，可以照這三塊來想：它是誰、能用哪些工具（agent），它在哪裡做事（environment），什麼事情發生時要啟動它（session＋webhook）。給工具清楚、給權限有限，比寫很長的指令更有用。",
        "quiz": {
          "q": "根據影片，Sonnet 4.5 出現的「context anxiety」是什麼行為？",
          "options": [
            "Claude 拒絕讀取太大的檔案",
            "context window 還有空間，Claude 就提早收尾任務",
            "Claude 會重複呼叫同一個工具好幾次",
            "context window 滿了以後，Claude 會自動重新開始任務"
          ],
          "correct": 1,
          "why": "[04:59] 講者說，Sonnet 4.5 的 context window 明明還有空間，Claude 就開始提早收尾任務"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_uGroRwlC9y4",
        "title": "🎬 教 agent 向你的團隊學習",
        "category": "Agents 與 API",
        "text": "<b>Warp 以 Buzz 為例，示範怎麼用原則、學習 skill 和每日回饋循環讓 agent 自己變好</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片裡，開發工具公司 Warp 用自家的社群小幫手 Buzz 當例子，講怎麼讓 AI 助手在真實工作裡越用越好。它的重點不在一開始就把指令寫得完美，而是先設計好一套機制，讓 AI 每天從團隊的反應中學習。做過 AI 助手、卻總覺得「差一點」的人，特別值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=87s\" target=\"_blank\">01:27</a> 很多人做過 agent，但真的每天在 production 跑、而且滿意的人少很多。「大概 80% 到位」的階段，正是很多 agent 夭折的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己一步步完成任務的 AI 助手。很多人做過，但真的放進 production（每天正式上線使用的環境）還用得滿意的很少。做到八成像樣後，剩下兩成最難，很多就卡死在這裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=229s\" target=\"_blank\">03:49</a> Buzz 負責監看 Warp 的社群提及，建議要回覆、按讚還是略過；需要回覆時會先幫忙擬好草稿<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Buzz 是 Warp 自己用的 agent。網路上有人提到 Warp，它就判斷該回覆、按讚還是不理；需要回覆的話，會先寫好草稿，讓團隊的人比較輕鬆。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=414s\" target=\"_blank\">06:54</a> Ralph loop 能成功，是因為有外部檢查能判斷目標達成沒有；社群回覆這種需要判斷力和品味的工作，沒辦法像 unit test 那樣做外部檢查<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Ralph loop 是讓 agent 一直試到過關的做法，要靠 unit test（自動檢查程式對不對的小測驗）這類外部檢查判斷有沒有成功。但回覆網友好不好，沒有標準答案可以自動打分。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=595s\" target=\"_blank\">09:55</a> 一開始 prompt 寫成「發生 X 就做 Y」的規則清單，結果回覆像機器人，遇到新狀況就失靈；改寫成原則後，skill 檔只剩原本約五分之一長，輸出反而更好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是給 AI 的指示；skill 是存成檔案、可以重複使用的指示包。寫成死板的規則，回覆會很生硬，遇到新狀況就卡住；改成講怎麼判斷的原則，長度只剩五分之一，效果反而更好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=804s\" target=\"_blank\">13:24</a> 讓 agent 從回饋中學習時，它又去加一堆過度具體的規則；於是另外寫了一個 skill，教它比對自己的指示和理想輸出之間差在哪，也就是「學會怎麼學」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 叫它從回饋學習，它又習慣補上一條條很細的規則，越補越亂。所以團隊另寫一個 skill 教它：先找出自己的指示和理想答案差在哪個觀念，再去修，而不是一直加規則。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=993s\" target=\"_blank\">16:33</a> Buzz 會發 Slack 訊息附上理由，團隊用 emoji 標出實際採取的動作，也能在 thread 留言；Buzz 會比對自己的建議和團隊實際的做法<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Slack 是團隊聊天軟體。Buzz 把建議和理由貼上去，大家用 emoji（表情符號）標記實際怎麼處理，或在 thread（訊息下的討論串）留言，Buzz 再拿這些來對照自己的建議。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=1088s\" target=\"_blank\">18:08</a> skill 都放在 Git repo，Buzz 每天整理出心得後修改指示並開 pull request，團隊花大約 60 秒 review 就能 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Git repo 是會記錄每次修改的檔案庫。Buzz 每天整理心得、改自己的指示，再送出 pull request（請人審核的修改申請）；團隊看一分鐘左右，同意就 merge（正式併入）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=1650s\" target=\"_blank\">27:30</a> 最重要的一點：專心設計回饋循環，讓 agent 隨時間進步，不要執著於一開始就把 prompt 寫到完美<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 與其一開始花大把時間把 prompt 磨到完美，不如先把「做事→收回饋→修正」的回饋循環（feedback loop）搭好。循環順了，agent 自然會一天比一天準。</span>\n\n📘 術語<br><b>Ralph loop</b>（Ralph 迴圈）：agent 反覆嘗試的迴圈，靠外部檢查判斷有沒有達成目標，適合寫程式、跑 unit test 這類任務<br><b>principles vs rules</b>（原則 vs 規則）：規則是「X 發生就做 Y」，太死板；原則講的是怎麼思考和判斷，遇到新狀況比較有彈性<br><b>feedback loop</b>（回饋循環）：團隊在 Slack 用 emoji 和留言給回饋，Buzz 據此每天改進自己的指示<br><b>Oz</b>（Oz）：Warp 用來執行 cloud agent 的編排平台，可以照排程或各種觸發條件執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=uGroRwlC9y4&t=0s\" target=\"_blank\">Teaching agents to learn from your team</a>（2026/05/22 · 28 分鐘）",
        "tip": "💡 你可以怎麼用：把妳給 AI 的常用指示（例如 Claude 專案裡的設定）從「遇到 A 就做 B」改成「我在意什麼、該怎麼判斷」。之後每次妳改完 AI 的草稿，把原稿和妳的定稿一起貼回去，請它說出兩者差在哪個觀念，並建議怎麼改指示，確認沒問題再更新。",
        "quiz": {
          "q": "Buzz 的 skill 從「規則清單」改寫成「原則」之後，skill 檔的長度變成怎樣？",
          "options": [
            "大約是原本的一半",
            "變成原本的兩倍長",
            "大約只剩原本的五分之一",
            "長度沒變，但規則變多了"
          ],
          "correct": 2,
          "why": "[10:58] 講者說改用原則後，skill 檔大約只剩原本長度的五分之一，結果還一樣好甚至更好"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_QIriO1-vHYw",
        "title": "🎬 更充分發揮 Claude Platform 的效益",
        "category": "Agents 與 API",
        "text": "<b>用 prompt caching、context engineering 與 advisor strategy 降低 agent 成本並維持智慧</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片教開發者讓 AI agent 更省錢，同時不降低它的能力。AI agent 是會自己連續做好幾個步驟的 AI 程式。花費主要看兩個東西：token 是模型計費、計量用的文字單位；context 是模型每次回答前看到的全部內容。讓模型少重複讀、只讀有用的，費用就能明顯下降。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=172s\" target=\"_blank\">02:52</a> Prompt caching：快取的 token 享 90% 折扣；快取 token 不計入 rate limit，80% 命中率等同約 5 倍 rate limit；首個 token 延遲也會下降<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Prompt caching 是把讀過的內容先存起來，下次同樣的部分就不用重新處理。存起來的 token 只收一成價，也不算進 rate limit（一段時間內可用量的上限）。八成命中，等於額度大約變 5 倍，回應也更快開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=205s\" target=\"_blank\">03:25</a> agentic 應用建議把快取命中率目標設在 80% 以上；講者提到 Replit、Cursor、Perplexity、Claude Code 都達到 90% 以上<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 命中率是這次輸入裡能直接從快取拿的比例。agentic 應用是指 AI 會自己連做多步的產品，這類應用最好做到 80% 以上。講者說 Replit、Cursor、Perplexity、Claude Code 都超過 90%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=267s\" target=\"_blank\">04:27</a> Console 可以查看 prompt caching 分析和快取失效原因；在 system prompt 放時間戳記會破壞快取，因為 token 必須完全相同<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Console 是 Claude 的開發者後台網頁，可以查快取命中情況和失效原因。快取要求內容一字不差。system prompt 是每次都先給模型的基本指示，放了時間戳記，每次內容都不同，快取就失效。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=299s\" target=\"_blank\">04:59</a> 可以先用 auto caching 做一行程式的基本快取，或在 Claude Code 等 coding agent 用內建的 Claude API skill 提升命中率<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 入門可以開 auto caching（自動快取），加一行程式就有基本效果。coding agent 是幫你寫程式的 AI。用 Claude Code 這類工具時，可以讓它用內建的 Claude API skill（現成的做法指引）幫你提高命中率。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=645s\" target=\"_blank\">10:45</a> Tool search：先只給模型一個搜尋工具，需要時才把工具定義放進 context。講者說 Lovable 用後整體 token 消耗下降、表現也更好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Tool search：工具很多時，不要一開始就把所有工具的說明塞給模型。先只給一個「找工具」的工具，要用哪個再放進 context。講者說 Lovable 用了之後更省 token，表現也更好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=746s\" target=\"_blank\">12:26</a> Programmatic tool calling：讓 Claude 寫簡單的 Python 腳本呼叫工具並篩選結果，只把最相關的內容給模型（講者舉 Quora 處理 HTML 為例）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Programmatic tool calling：讓 Claude 寫一段 Python（常見的程式語言）小程式去呼叫工具，先篩過結果，只把重點交給模型。例子是 Quora 處理網頁的 HTML（網頁原始碼）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=815s\" target=\"_blank\">13:35</a> Compaction：context 滿時依你的 prompt 做摘要、移除不相關的回合，讓對話繼續。建議門檻從 500K 或 400K 開始，最佳值依模型而異<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Compaction：對話長到 context 快裝不下時，照你給的指示做摘要，刪掉不相關的舊回合，對話就能接著進行。建議先從 500K 或 400K token 開始觸發，最適合的數值依模型而不同。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=1166s\" target=\"_blank\">19:26</a> Advisor strategy：由 Sonnet 或 Haiku 當 executor，遇到難題才請教 advisor。Demo 用 Sonnet 4.6 搭 Opus 4.7 advisor，成本從約 31 英鎊降到約 11 英鎊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Advisor strategy：平常讓 Sonnet 或 Haiku 當 executor（負責動手做事），碰到難題才請教 advisor（顧問）。Demo 用 Sonnet 4.6 搭 Opus 4.7 當顧問，成本從約 31 英鎊降到約 11 英鎊。</span>\n\n📘 術語<br><b>prompt caching</b>（提示快取）：處理過的輸入 token 會先快取，後續對話只處理新增的 token，其餘直接從快取取用<br><b>context engineering</b>（情境工程）：決定要讓 Claude 看到哪些 context，讓 agent 表現最好的技術與方法<br><b>tool search tool</b>（工具搜尋工具）：預先定義所有工具，但只在需要時才把該工具的定義放進 context<br><b>compaction</b>（壓縮）：context 滿時摘要內容、移除不再相關的回合，讓對話幾乎可以無限延續<br><b>advisor strategy</b>（顧問策略）：Sonnet/Haiku 執行任務，遇到難題時請教 advisor，類似資深工程師帶資淺工程師\n\n📺 <a href=\"https://www.youtube.com/watch?v=QIriO1-vHYw&t=0s\" target=\"_blank\">Getting more out of the Claude Platform</a>（2026/05/22 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：如果你有用 Claude API 做自己的 AI 小工具，先到 Console 看快取命中率，並把日期、時間這類每次都會變的內容移出 system prompt。想省錢又不想犧牲品質，可以日常任務交給 Sonnet，難題才請 Opus 當顧問。",
        "quiz": {
          "q": "根據影片，如果 prompt cache 命中率是 80%，實際上的 rate limit 大約變成原本的幾倍？",
          "options": [
            "約 5 倍",
            "約 2 倍",
            "不變，因為快取 token 仍計入 rate limit",
            "約 10 倍"
          ],
          "correct": 0,
          "why": "[02:52] 講者說 rate limit 不計算快取的 token，80% 命中率等同約五倍的 rate limit"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_DNRddIEoH3c",
        "title": "🎬 能力曲線",
        "category": "Agents 與 API",
        "text": "<b>過去 12 個月 Claude 寫程式的能力如何躍進，以及開發者該怎麼跟上這條曲線</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片回顧過去一年 Claude 寫程式的能力進步了多少，也說明開發者該怎麼調整用法。Sonnet 和 Opus 是 Claude 不同等級的模型型號。值得看的原因是：很多以前必須做的小心步驟，現在反而會綁住 AI。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=158s\" target=\"_blank\">02:38</a> SweeBench Verified 上，Sonnet 3.7 去年約 60%，Opus 4.7 已超過 87%；Mythos Preview 已讓這個 benchmark 飽和，所以不再使用它<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SweeBench Verified 是考 AI 修真實程式問題的考卷。一年內分數從約六成升到八成七以上；Mythos Preview 強到這份考卷已經分不出高下，所以不用了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=256s\" target=\"_blank\">04:16</a> Demo：一次從零重建整個 Claude.ai 網站。Sonnet 4 寫了 2,000 行但聊天功能不能用；Opus 4.7 只寫 1,700 行，就做出能用的 web app，還有 mermaid 圖和 dark mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 請 AI 從零重做 Claude.ai：Sonnet 4 寫了兩千行，聊天卻不能用；Opus 4.7 寫得更少，做出能用的網頁，還有 mermaid 流程圖和深色模式。寫得多不等於寫得好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=410s\" target=\"_blank\">06:50</a> 規劃：模型現在會先讀程式碼、自己擬計畫再動手，擬計畫時也會自己抓出錯誤；建議選高 reasoning effort，讓 Claude 自己把計畫想好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新模型會先讀懂現有程式，自己列好計畫再動手，列計畫時就會抓出錯誤。reasoning effort 是設定 AI 要想多深的選項，調高它，讓它自己把計畫想周全。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=511s\" target=\"_blank\">08:31</a> 錯誤復原：doom looping 大致已經解決。模型會依照工具回傳的結果換個做法，用更少浪費的 token 達到更好的表現<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ doom looping 是 AI 卡關時一直重複同一招，還說已經修好。這問題現在大致解決了：它會看工具回報的結果改換做法。token 是 AI 處理文字的計量單位，少繞路就省 token，結果也更好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=617s\" target=\"_blank\">10:17</a> 長時間 agentic run：模型能在一百萬 token 以上維持連貫，不一定要把任務切成小塊，可以對任務更有野心<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agentic run 是讓 AI 自己連續做很多步的長任務。現在處理量超過一百萬 token，它還是能前後連貫，所以不必把工作切碎，可以直接交給它更大的任務。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=803s\" target=\"_blank\">13:23</a> Bunn 創辦人 Jared 有一套接近 100% 覆蓋率的測試套件，讓 Claude 花一週把整個 Bunn 改寫成 Rust，測試幾乎全數通過<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Jared 是 Bunn 的創辦人，他的自動測試幾乎涵蓋所有功能，所以敢讓 Claude 花一週把整個 Bunn 改寫成 Rust（另一種程式語言），測試幾乎全部通過。測試就是裁判。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=1003s\" target=\"_blank\">16:43</a> Evals 就是 AI 時代的 unit test 和 regression test：先開始做，要貼近真實流量，並留意 eval 是否已經飽和<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ evals 是檢查 AI 表現的測驗題，功用就像 unit test（測單一功能）和 regression test（防止改版弄壞舊功能）。先開始做，題目要貼近真實使用情況；測不出進步了就該換題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=1354s\" target=\"_blank\">22:34</a> 換新模型時要縮減 scaffolding、審視 prompt；給模型空間：開 adaptive thinking、調高 effort、用 auto-mode，並形成 agent loop 的閉環<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 換新模型時要精簡 scaffolding（包在 AI 外面的指令和工具），也要重看指令。開 adaptive thinking（讓它自己決定想多深）、調高思考強度、用 auto-mode（安全的動作自動放行），讓它自己測試、自己改。</span>\n\n📘 術語<br><b>doom looping</b>（死亡迴圈）：失敗後一直重複同樣的解法，或只做小幅變化，卻宣稱已經修好<br><b>saturated (eval)</b>（飽和的評測）：評測已沒有進步空間，剩下的題目沒有模型能解，無法再衡量模型進步<br><b>scaffolding / harness</b>（鷹架／外層框架）：包在 LLM 外面的 prompt、工具、執行環境、skills 等，讓模型能以 agent 身分運作<br><b>auto-mode</b>（自動模式）：Claude Code 裡用 prompted classifier 檢查每個工具呼叫是否安全，安全就自動核准，否則交給人核准<br><b>close the agent loop</b>（讓 agent 迴圈形成閉環）：讓 Claude 自己跑 agent 和 eval、檢查輸出，反覆改進你的 agent\n\n📺 <a href=\"https://www.youtube.com/watch?v=DNRddIEoH3c&t=0s\" target=\"_blank\">The capability curve</a>（2026/05/22 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 Claude 做事，先別幫它拆成小步驟。把目標和「怎樣算做好」講清楚，例如要通過哪些檢查，再把思考強度調高，讓它自己規劃、自己檢查。",
        "quiz": {
          "q": "Bunn 的創辦人讓 Claude 把整個 Bunn 改寫成 Rust，花了多少時間？",
          "options": [
            "一個月",
            "一天",
            "一週",
            "三個月"
          ],
          "correct": 2,
          "why": "字幕 [13:23] 說 Claude 連續跑了一整週，在一週內把 Bunn 全部改寫成 Rust"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_IGo225tfF2I",
        "title": "🎬 讓 agent 自我學習的 Memory 與 Dreaming",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 的 memory 與 dreaming，讓 agent 能跨任務持續學習</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Managed Agents 的兩個新功能：memory 和 dreaming。Claude Managed Agents 是 Anthropic 提供、幫你執行 agent 的平台；agent 是能自己一步步把任務做完的 AI 助手。有了這兩個功能，agent 不用每次從零開始，會越做越上手。想知道 AI 怎麼記取教訓的人，很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=167s\" target=\"_blank\">02:47</a> Memory 讓 agent 把先前任務的經驗帶到下一個任務，目標是每做一個任務表現就更好，並能跨環境、跨 agent 學習<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Memory 就是讓 agent 把做過任務的心得存下來，下次直接參考，就像新人寫工作筆記。目標是每做一次就更好，而且經驗能分享給別的環境、別的 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=261s\" target=\"_blank\">04:21</a> Memory 已在 Claude Managed Agents 推出，支援 multi-agent 系統；Rakuten 在正式環境的 first pass errors 下降 97%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個功能已經正式上線，也支援 multi-agent，也就是好幾個 agent 分工合作。Rakuten 實際上線使用後，first pass errors（第一次交出來就出錯）少了 97%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=352s\" target=\"_blank\">05:52</a> 設計理念是「別擋 Claude 的路」：跟 skills 一樣，memory 以檔案系統的形式呈現給 Claude，讓它用 bash、grep 讀寫和整理檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做法是不替 Claude 設限。記憶直接做成一堆檔案，跟 skills（教 Claude 做事的說明檔）一樣。Claude 自己用 bash（下指令）和 grep（搜尋文字）翻找、改寫、整理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=445s\" target=\"_blank\">07:25</a> 多個 session 可以共用同一個 memory store，並分成 read-only 與 read-write scope，形成階層（例如全組織共用的唯讀 memory）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 是 agent 的一次工作階段。多個 session 可以共用同一個 memory store（記憶庫），並設定只能看或可以改。例如全公司規章大家只能讀，各組筆記自己可以改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=475s\" target=\"_blank\">07:55</a> 用 optimistic concurrency control 避免 agent 互相覆寫；另外還有版本控制、diff、寫入歸屬，以及可執行 CRUD、匯出、redaction 的獨立 API<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 同時改記憶時，optimistic concurrency control 會在寫入前確認沒被別人先改，避免互相蓋掉。還能看版本、diff（改了哪裡）和作者，也能用 API（程式操作介面）增刪查改、匯出、遮蔽敏感資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=636s\" target=\"_blank\">10:36</a> Dreaming 目前是 research preview，能分析跨 agent、跨 session 的錯誤模式，並自動整理 memory；Harvey 的法律 benchmark 完成率提高到 6 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Dreaming 是回頭檢視所有 agent、所有 session 犯過的錯，找出重複出現的模式，再自動整理記憶。目前是 research preview（試用階段）。Harvey 在法律 benchmark（測驗題組）的完成率變成 6 倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=703s\" target=\"_blank\">11:43</a> Dreaming 是 out of band 的批次流程，可以臨時手動、每晚、每小時或在 session 結束時觸發，全部由 API 控制，最後產出經過驗證的 memory snapshot<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ out of band 指的是在 agent 工作之外另外跑，而且是整批處理。可以手動、每晚、每小時或 session 結束時啟動，全都用 API 控制。最後產出驗證過的 memory snapshot（某個時間點的記憶定版）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=766s\" target=\"_blank\">12:46</a> 跟 agent loop 脫鉤的好處：看得出跨 agent 的模式、目標更明確，而且不會增加 agent 的延遲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent loop 是 agent 思考、動手、看結果的循環。Dreaming 不塞在這個循環裡，好處是能綜觀所有 agent 找出共同問題，目標也更單純，而且不會拖慢 agent 的回應速度。</span>\n\n📘 術語<br><b>Memory store</b>（記憶庫）：以檔案形式存放的 memory，可以設成 read-only 或 read-write，讓多個 session 共用<br><b>Dreaming</b>（作夢（記憶整理流程））：找出跨 agent、跨 session 的錯誤模式，並自動整理、策劃 memory 的流程<br><b>Optimistic concurrency control</b>（樂觀並行控制）：用來避免 agent 互相覆寫彼此對 memory 的修改<br><b>Out of band</b>（頻外執行）：Dreaming 在 session 之外執行、完全脫鉤，不在 hot path 上，所以不增加延遲\n\n📺 <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=0s\" target=\"_blank\">Memory and dreaming for self learning agents</a>（2026/05/21 · 21 分鐘）",
        "tip": "💡 你可以怎麼用：妳用 Claude 做事時也能照這套來：把每次踩過的坑寫成一份筆記檔，下次開工先請 Claude 讀過。每隔一陣子，再請它把筆記整理一次，刪掉重複或過時的內容。",
        "quiz": {
          "q": "根據影片，dreaming 是怎麼執行的？",
          "options": [
            "只分析單一 agent 自己的 transcript",
            "只能在 Claude console 裡手動觸發，沒有 API",
            "在每個 session 裡即時執行，agent 一邊做任務一邊整理",
            "批次流程，在 session 之外（out of band）執行，不增加 agent 延遲"
          ],
          "correct": 3,
          "why": "[11:43] 提到 dreaming 是 batch process，runs out of band from sessions，而且可以透過 API 觸發；[13:16] 提到它不會給 agent 增加任何延遲"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_TQd_YQvydVg",
        "title": "🎬 在 Microsoft Foundry 中使用 Claude 打造 AI agents",
        "category": "Agents 與 API",
        "text": "<b>Workshop 實作：在 Microsoft Foundry 部署 Claude，建立 agent，再透過 MCP 接上工具</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是一堂跟著做的實作課（Workshop），示範在 Microsoft Foundry（微軟用來做 AI 應用的雲端平台）上部署 Claude，做成 agent（能自己分步驟做事、會用工具的 AI 助理），再用 MCP 幫它接上工具。想知道企業裡的 AI 怎麼從只會聊天變成真的能辦事，這支會從頭到尾走一遍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=50s\" target=\"_blank\">00:50</a> Workshop 目標：在 Microsoft Foundry 部署 Claude 模型，把模型接進 agent，再讓 agent 使用工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 整堂課分三步：先在 Foundry 部署 Claude，也就是把它放到平台上讓程式能用；再把它包成 agent；最後讓 agent 學會拿工具做事，例如查資料、下訂單。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=111s\" target=\"_blank\">01:51</a> Agentic 系統有三個新挑戰：長 context 的多步推理；系統要可靠、有 observability、安全；要能連接各種工具、外部系統和資料來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 讓 AI 自己跑多步驟任務有三個難處：要讀懂很長的 context（對話和資料內容）一路推理；要穩定、安全，還要有 observability（看得到每一步在做什麼）；也要接得上各種系統。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=202s\" target=\"_blank\">03:22</a> Microsoft Foundry 是建構 AI 應用與 agents 的統一平台，包含 Foundry models（如 Claude）、agent service、工具與整合、fine-tuning 等機器學習服務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Foundry 是一站式工作台：選模型（Claude 是其中之一）、agent service（專門執行 agent 的服務）、接工具，連 fine-tuning（用自己的資料再訓練模型）都在同一個地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=233s\" target=\"_blank\">03:53</a> Foundry 支援超過 1,400 個內建 connectors 和 MCP 工具，agent 可以接上 SAP、ServiceNow 等真實系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ connector 是現成的連接器，Foundry 內建超過 1,400 個，加上 MCP 工具，agent 能接上公司真正在用的系統，例如 SAP（企業資源管理）、ServiceNow（IT 服務工單）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=265s\" target=\"_blank\">04:25</a> Foundry 內建安全、observability、governance，並整合 Microsoft Defender、Microsoft Purview 和 Entra ID<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ governance 是規定誰能用、怎麼用的管理規則。Foundry 內建這些管理、安全和監看功能，也接上微軟的 Defender（資安防護）、Purview（資料管理）和 Entra ID（帳號與權限）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=759s\" target=\"_blank\">12:39</a> 在 Foundry 的 models 頁面選 Claude Sonnet 4.6 會開啟 playground，可以和模型對話、更換 system prompt、比較不同模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在模型頁點 Claude Sonnet 4.6 會進到 playground（試玩區），不用寫程式就能直接聊天、改 system prompt（給 AI 的角色和規則），也能跟別的模型比較。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=1001s\" target=\"_blank\">16:41</a> 在 .env 填入 target URI 與 API key 時，endpoint 要刪掉結尾的 v1/messages，讓它以 Anthropic 結尾<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ .env 是存連線設定的小檔案。要填 API key（通行密碼）和 target URI（模型的網址）。網址結尾的 v1/messages 要刪掉，讓它停在 anthropic，這一步很容易漏掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=1309s\" target=\"_blank\">21:49</a> 用 Microsoft Agent Framework（開源，Python）建立 agent，把 cupcake store MCP server 當成 tool 提供給 agent，再從 MCP 載入 prompt 和歡迎橫幅<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Microsoft Agent Framework 是微軟開源的 Python 版 agent 工具包。示範把一個杯子蛋糕店的 MCP server（提供工具的服務）交給 agent 用，開場指令和歡迎畫面也從那裡載入。</span>\n\n📘 術語<br><b>MCP (Model Context Protocol)</b>（模型上下文協定）：讓 AI agents 和外部系統溝通的開放標準，只需要一個 URL 就能接上<br><b>MCP tools / prompts / resources</b>（MCP 工具／提示／資源）：tools 是 agent 可呼叫的函式；prompts 是可重複使用的指令片段；resources 是透過 HTTP 傳送的資料<br><b>Microsoft Foundry</b>（Microsoft Foundry 平台）：Microsoft 用來大規模建構 AI 應用程式和 agents 的統一平台<br><b>Microsoft Agent Framework</b>（Microsoft Agent 框架）：Microsoft 開發的開源框架，有 Python 版，適合入門建構 agents<br><b>Playground</b>（遊樂場（測試環境））：Foundry 裡可以和模型對話、試不同 system prompt、比較模型的環境\n\n📺 <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=0s\" target=\"_blank\">Build AI agents using Claude in Microsoft Foundry</a>（2026/05/20 · 34 分鐘）",
        "tip": "💡 你可以怎麼用：不寫程式也能先到 Foundry 的 playground，換幾種 system prompt 試試 Claude 的反應。想讓 AI 接上公司系統時，可以先問 IT 有沒有現成的 connector 或 MCP 網址可以用。",
        "quiz": {
          "q": "把 Foundry 的 endpoint 貼進 .env 時，講者說要怎麼處理？",
          "options": [
            "在結尾加上 /openai/deployments",
            "刪掉結尾的 v1/messages，讓 endpoint 以 Anthropic 結尾",
            "保留完整網址，不需要修改",
            "把 endpoint 換成 Microsoft Learn 的網址"
          ],
          "correct": 1,
          "why": "[16:41] 講者說要刪掉結尾的 v1/messages，endpoint 應該以 Anthropic 結尾，否則會無法運作"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_5YHIrTYxM3w",
        "title": "🎬 在 AWS 上使用 Claude 打造 AI：從程式碼到協作編排（orchestration）",
        "category": "Agents 與 API",
        "text": "<b>介紹在 AWS 上使用 Claude 的三種方式與優點，並說明 Claude Code on AWS 工作坊</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是公司怎麼在 AWS（Amazon 的雲端服務）上用 Claude：有三種接法，各有什麼好處，最後再介紹一個教大家用 Claude Code 的實作工作坊。如果你的公司本來就用 AWS，或 IT 部門擔心資料安全，看這支就會知道「在公司裡正式導入 Claude」大概是什麼樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=136s\" target=\"_blank\">02:16</a> Amazon 對 Anthropic 投資了數十億美元，也是 Anthropic 的主要雲端供應商；Anthropic 承諾在 AWS 上使用超過 100 billion 的用量<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Amazon 是 Anthropic（做 Claude 的公司）的大投資者，也是它主要的雲端供應商，Claude 大多跑在 AWS 的機器上。Anthropic 也承諾在 AWS 上用超過 100 billion 的規模，兩家綁得很深。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=166s\" target=\"_blank\">02:46</a> Project Rainier 是規模最大的 AI 運算基礎設施之一，用來訓練和部署 Claude 模型。另外也用 Amazon 自研晶片 Trainium，目前已經是第三代<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Project Rainier 是 Amazon 蓋給 Claude 用的超大型運算設施，訓練模型和讓大家使用都在這裡跑。Trainium 是 Amazon 自己設計的 AI 晶片，現在出到第三代。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=227s\" target=\"_blank\">03:47</a> Bedrock 是完整平台，可以微調模型，講者說它是唯一能在雲端 fine-tune Haiku 的供應商；資料可以留在 AWS 邊界內，平台有 zero operator access<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Bedrock 是 AWS 上使用 AI 模型的平台。講者說，只有它能在雲端 fine-tune（拿自己的資料再訓練）Haiku（Claude 小而快的型號）。資料不會離開 AWS，而且 zero operator access 代表兩家公司的員工都看不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=380s\" target=\"_blank\">06:20</a> Bedrock 還有評估、prompt 最佳化、fine-tuning、蒸餾、knowledge bases、Guardrails 等功能；AgentCore 可搭配 LangChain、Crew AI 和 Claude Agent SDK<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Bedrock 還能測模型表現、改寫 prompt、做蒸餾（讓小模型學大模型的本事），也能接 knowledge bases（讓 AI 查你的文件）、設 Guardrails（擋掉不當內容、遮住個資）。AgentCore 是放 agent（會自己動手做事的 AI）的雲端空間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=471s\" target=\"_blank\">07:51</a> 在 AWS 用 Claude 的好處：資料主權、帳單統一、可用 CloudWatch／CloudTrail 做觀測、有 SLA、內建驗證整合（SSO、OAuth、IAM），還有 private link<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 走 AWS 的好處：資料留在公司自己控管的地方，AI 費用併進原本的帳單。可以用 CloudWatch／CloudTrail 查用量和操作紀錄，有 SLA（服務穩定度的保證），登入權限沿用現有設定，還能走不經過公開網路的 private link。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=624s\" target=\"_blank\">10:24</a> 三種用法：一是透過 Bedrock（已加入 Opus 4.7 和 messages API）；二是 Claude platform on AWS（已正式上線，功能和 Anthropic 一致）；三是 Desktop 應用程式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一種走 Bedrock，已經能用 Opus 4.7，也支援 messages API（寫程式呼叫 Claude 的標準格式）。第二種是 Claude platform on AWS，用起來跟官方一樣，但帳單和權限歸 AWS 管。第三種是 Desktop 桌面程式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=777s\" target=\"_blank\">12:57</a> 工作坊需要兩樣東西：AWS 帳號和 Claude Code。模組二用 Playwright MCP 和 Git 工作流程，模組三練習 subagent、plugins、自訂 skills、hooks<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要先準備 AWS 帳號和 Claude Code（在終端機裡幫你寫程式的 Claude）。模組二用 Playwright MCP 讓 Claude 操作瀏覽器，並用 Git 管版本；模組三練習 subagent（分工的小幫手）、plugins、skills、hooks 這些擴充功能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=1111s\" target=\"_blank\">18:31</a> 手動設定 Claude Code 時，可設定指向 Bedrock 的 region 和預設模型，也有降低 token 用量、rate limiting、啟用遙測回報等參數<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 自己設定時，要指定連到哪個 region（AWS 機房所在的地區）、預設用哪個模型。也可以調參數少用一點 token（模型計算文字量和費用的單位）、限制請求頻率，或打開遙測，回報使用狀況。</span>\n\n📘 術語<br><b>Guardrails</b>（防護機制）：可以套用內容過濾、封鎖特定主題、自動遮蔽 PII 等敏感資料，也能透過 grounding 控制幻覺<br><b>Amazon Bedrock AgentCore</b>（Bedrock 代理執行平台）：在雲端安全託管 agent 的基礎設施，相容 LangChain、Crew AI、Claude Agent SDK 等框架<br><b>Zero operator access</b>（零營運人員存取）：Amazon 和 Anthropic 都沒有人能存取這些執行個體，資料完全保持私密<br><b>Trainium</b>（Trainium 晶片）：Amazon 專為 Claude 模型打造的客製晶片，目前是第三代<br><b>Claude platform on AWS</b>（AWS 上的 Claude platform）：體驗和直接使用 Anthropic 相同，但帳單和存取控制都在 AWS；AWS 當 gateway 把請求轉給 Anthropic\n\n📺 <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=0s\" target=\"_blank\">AI with Claude on AWS: From code to orchestration</a>（2026/05/20 · 19 分鐘）",
        "tip": "💡 你可以怎麼用：如果公司用 AWS，想用 Claude 又擔心資料外流，可以直接問 IT：「我們能不能透過 Bedrock 或 Claude platform on AWS 開通 Claude？」這樣資料和帳單都留在公司原本的 AWS 帳號裡。想學 Claude Code 的話，準備好 AWS 帳號就能跟著這個工作坊一步一步做。",
        "quiz": {
          "q": "講者說，AWS 是唯一能讓你在雲端 fine-tune 哪一個 Claude 模型的供應商？",
          "options": [
            "Haiku",
            "Opus",
            "Claude 2",
            "Sonnet"
          ],
          "correct": 0,
          "why": "[03:47] 講者說：「We are the only provider that allows you to fine tune Haiku in example in the cloud.」"
        },
        "status": "old"
      },
      {
        "id": "yt_RtywqDFBYnQ",
        "title": "🎬 讓 agent 自我學習的 memory 與 dreaming",
        "category": "Agents 與 API",
        "text": "<b>介紹 Managed Agents API 中的 memory 設計，以及新推出的 dreaming 功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Anthropic 的 Managed Agents API 裡的 memory（記憶）功能，以及新推出的 dreaming。Managed Agents API 是讓開發者用官方代管的環境來跑 agent 的服務；agent 則是能自己分好幾個步驟完成任務的 AI 助手。影片想解決的問題是：怎麼讓 AI 從過去的工作經驗裡學習，不用每次都從零開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=131s\" target=\"_blank\">02:11</a> 繼 MCP、skills 之後，memory 是下一個 primitive，目標是讓 agent 持續自我學習，並在長時間任務中管理 context。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 繼 MCP（讓 AI 接外部工具的標準）和 skills（打包好的做事說明）之後，memory 是下一塊基本積木（primitive），讓 agent 越做越熟，長任務中也能管好 context（AI 當下能看到的內容）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=228s\" target=\"_blank\">03:48</a> Claude Managed Agents 的 memory 幾週前進入 public beta。Rakuten 的內部知識 agent 第一輪錯誤減少 90%，token 效率、成本和延遲也都改善。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory 已經進入 public beta（公開測試版，大家都能用，但還在調整）。樂天（Rakuten）的內部知識 agent 第一輪出錯少了九成；token（AI 計算用量和費用的單位）更省，成本更低，回應也更快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=324s\" target=\"_blank\">05:24</a> memory 以檔案系統的形式呈現給 Claude，Claude 用 bash、grep 自己管理。Claude Opus 4.7 在檔案系統型 memory 上達到 state-of-the-art。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 記憶的樣子就像一堆資料夾和檔案。Claude 用 bash（下指令操作電腦）和 grep（在檔案裡搜尋文字）自己翻找、整理。Claude Opus 4.7 在這種記憶方式上的表現是目前最頂尖（state-of-the-art）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=446s\" target=\"_blank\">07:26</a> memory 支援權限範圍：同一個 agent 可以對組織層級知識只有唯讀權限，對工作用的 memory store 則可讀寫。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory store 是一個獨立的記憶庫。permission scopes（權限範圍）讓同一個 agent 對公司共用知識只能看、不能改，對自己工作用的記憶庫則能讀也能寫，避免改壞大家共用的資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=476s\" target=\"_blank\">07:56</a> 為了讓大量 agent 同時存取 memory，採用 optimistic concurrency：更新前先用 content hash 檢查，避免覆寫其他 agent 的 memory。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多 agent 同時改記憶，可能會互相蓋掉。optimistic concurrency 的做法是先假設不會撞到，寫入前再用 content hash（依檔案內容算出的指紋）確認沒被別人改過。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=507s\" target=\"_blank\">08:27</a> 為了讓企業能掌控，提供 version history、attribution metadata（哪個 agent、哪個 session、什麼時間改的），另外也提供可攜的 standalone API。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ version history（修改紀錄）能回頭查每次改了什麼；attribution metadata（來源標記）寫明是哪個 agent、哪次 session（一次工作階段）、什麼時間改的。另外還有可單獨使用的 standalone API。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=689s\" target=\"_blank\">11:29</a> dreaming 今天以 research preview 在 Managed Agents API 推出，會在近期 session 的 transcript 中找出模式和錯誤，自動產生整理好的 memory。Harvey 的 task completion rate 提升六倍。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ dreaming 以 research preview（搶先試用的研究版）推出。它會回頭看最近幾次工作的 transcript（完整過程紀錄），找出規律和常犯的錯，自動整理成記憶。Harvey 的任務完成率提升了六倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=815s\" target=\"_blank\">13:35</a> dreaming 是非同步批次、out of band 的流程：可以跨多個 agent 找出共同模式，把 memory 品質從任務目標中獨立出來，也不會增加主要任務的延遲。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ dreaming 是事後集中一批處理，而且 out of band，也就是不在任何一次任務裡面做。所以它能跨多個 agent 找出共同規律，整理記憶不必跟手上的任務搶注意力，也不會拖慢任務。</span>\n\n📘 術語<br><b>dreaming</b>（作夢（memory 整理流程））：回顧近期 session transcript，找出模式與錯誤，自動產出整理好且最新的 memory 內容<br><b>optimistic concurrency</b>（樂觀並行控制）：agent 更新前用 content hash 確認，避免覆寫其他 agent 的 memory<br><b>permission scopes</b>（權限範圍）：agent 可以對某個 memory store 唯讀，對另一個可讀寫<br><b>version history</b>（版本歷史）：完整的 audit log，記錄每一次 memory 更新，可以回溯查看改了什麼<br><b>out of band</b>（頻外執行）：不在 agent 執行特定 session 或任務的 context 裡進行\n\n📺 <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=0s\" target=\"_blank\">Memory and dreaming for self-learning agents</a>（2026/05/08 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：如果妳常用 Claude 做重複性的工作，可以學這套做法：每次做完，請它把學到的規則和踩過的坑寫進同一份筆記，下次開工先讀這份筆記。每隔一陣子，再請它回顧最近幾次對話來整理筆記，把過時的內容刪掉。",
        "quiz": {
          "q": "根據影片，Harvey 在法律 benchmark 中導入 dreaming 後，有什麼結果？",
          "options": [
            "token 用量減少一半",
            "第一輪錯誤減少 90%",
            "其中一個法律情境的 task completion rate 提升六倍",
            "回應延遲降低六倍"
          ],
          "correct": 2,
          "why": "[11:29] 提到 Harvey 在法律 benchmark 中導入 dreaming 後，其中一個法律情境的 task completion rate 增加六倍。減少 90% 第一輪錯誤是 Rakuten 導入 memory 的結果（[03:48]）。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_KLCuxMDZSDg",
        "title": "🎬 不斷擴充的工具組",
        "category": "Agents 與 API",
        "text": "<b>以前要自己寫的 scaffolding，現在已內建在模型與 API 中</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講一件事：以前開發者得自己在模型外面寫一堆輔助程式，才能讓它好用；現在很多這類功能已經直接做進 Claude 和 API 裡（API 是讓程式跟 Claude 對接的窗口）。看了就知道哪些工夫不用再自己做，力氣該花在哪裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=59s\" target=\"_blank\">00:59</a> 主題：去年要自己寫的 scaffolding，現在直接跟模型一起提供。不要再把模型當成單純的輸入輸出 LLM，而是當成一套不斷擴充的工具組<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scaffolding 是為了讓模型好用，自己在外面加的輔助程式。去年要自己寫，現在官方直接附上。所以別把 Claude 當成問一句答一句的 LLM（大型語言模型），它是一套一直在加功能的工具箱。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=246s\" target=\"_blank\">04:06</a> Tool use：模型能自己搜尋並挑選工具，這時工具 router 和預先過濾通常只會更糟；工具出錯時，Claude 會看到錯誤、自己修正後再呼叫一次<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Tool use 是讓模型呼叫外部工具，例如查資料、開檔案。現在 Claude 會自己挑工具，你另外寫程式先幫它篩選（router），反而常常幫倒忙。工具出錯時，它也會看錯誤訊息，自己改好再試一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=310s\" target=\"_blank\">05:10</a> 技巧：在工具描述裡加上 output schema（例如會回傳 ID、title、snippet、score），可以省一次和 harness 之間的來回；Claude Code 可以用 pre／post tool use hooks<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫工具說明時，先講清楚會回傳哪些欄位（output schema，像是 ID、標題、摘要、分數），就少一趟和外層程式（harness）的來回。Claude Code（寫程式助手）還能設 hooks，在工具呼叫前後自動擋掉或做紀錄。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=440s\" target=\"_blank\">07:20</a> Context 管理：1 million context 採固定價格，加上 server-side compaction 和 context editing，只要幾行 config 就能搞定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Context 是模型一次能放在眼前的內容量。現在 100 萬的 context 用固定價格計費。再搭配 server-side compaction（伺服器自動壓縮舊內容）和 context editing（刪掉不需要的內容），幾行設定就能管好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=500s\" target=\"_blank\">08:20</a> 技巧：每 N 個 turn 就清掉過時的工具結果（截圖、搜尋結果、讀檔），但保留它們促成的決策；Claude Code 可以用 /context 查看 context 被什麼佔滿<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Turn 是對話的一來一回。每隔幾輪就清掉過時的工具結果，例如截圖、搜尋結果、讀過的檔案，但保留靠它們做出的決定。在 Claude Code 輸入 /context，可以看到空間被什麼占滿。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=634s\" target=\"_blank\">10:34</a> Code execution tool 在伺服器端給 Claude 一個 hosted sandbox，寫程式、執行、修正的迴圈在單一 API turn 內完成；Claude Code 可以用 /schedule 排定 cron 自動執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Code execution tool 讓 Claude 在伺服器上有一個 sandbox（隔離的專用電腦，弄壞了也不影響你）。寫程式、執行、修錯在一次呼叫裡就做完。Claude Code 的 /schedule 可以設 cron（定時排程），讓工作按時自動跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=789s\" target=\"_blank\">13:09</a> Computer use：Opus 47 可以接收原生解析度截圖，最高到 1440p，並回傳一對一的像素座標；OS World 從不到 50% 提升到 78%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Computer use 是讓 Claude 看螢幕截圖、操作滑鼠鍵盤。Opus 4.7 能看原始解析度的截圖，最高到 1440p，點擊位置直接對應畫面像素，不用換算。在實際操作軟體的測驗 OS World 上，成績從不到五成升到 78%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=1186s\" target=\"_blank\">19:46</a> 原則：用來彌補模型不可靠的程式碼，壽命只有幾個月；把模型接上你自己世界的程式碼（工具、資料、auth、context）才會持續累積價值<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 為了補模型不可靠而寫的程式，像自己做的篩選和重試，模型一變強，幾個月就用不到了。真正會累積價值的，是把模型接上你的工具、資料、auth（登入和權限驗證）和背景資訊。</span>\n\n📘 術語<br><b>pre- and post-tool use hooks</b>（工具呼叫前後的 hook）：在 Claude settings 裡設定，Claude 呼叫工具之前或之後會用程式觸發動作，例如擋掉呼叫或記錄輸出<br><b>server-side compaction</b>（伺服器端壓縮）：和 context editing 搭配使用，把原本自己寫的記憶管理簡化成幾行 config<br><b>code execution tool</b>（程式碼執行工具）：在伺服器端自動給 Claude 一個 hosted sandbox，就像 Claude 自己的一台電腦<br><b>OS World</b>（OS World 評測）：評估模型能否在專業與一般消費級軟體上完成複雜任務的 eval<br><b>Claude in Chrome</b>（Claude in Chrome 擴充功能）：從 claude.ai/chrome 安裝後，Claude Code 可以用你的 Chrome 瀏覽網頁，也能測本地開發\n\n📺 <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=0s\" target=\"_blank\">The expanding toolkit</a>（2026/05/08 · 21 分鐘）",
        "tip": "💡 你可以怎麼用：用 Claude Code 的話，先輸入 /context 看空間被什麼吃掉，再把過時的截圖和搜尋結果清掉。自己設計工具或流程時，把「會回傳什麼」寫清楚，心力放在接上自己的資料和工具，而不是替模型做它已經會的事。",
        "quiz": {
          "q": "講者說 Opus 47 在 computer use 中，最高能接收哪種解析度的原生截圖並回傳一對一像素座標？",
          "options": [
            "4K",
            "1440p",
            "720p",
            "1080p"
          ],
          "correct": 1,
          "why": "[13:09] 字幕說 Opus 47 可以接收原生解析度截圖，並回傳一對一像素座標，最高到 1440p；[14:40] 另外提到 4K 仍建議自己先縮小解析度。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_7oO37GRhwGk",
        "title": "🎬 更充分運用 Claude Platform",
        "category": "Agents 與 API",
        "text": "<b>agent 上線後，用 prompt caching、context engineering 和 advisor 管控成本、延遲與可靠度</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 給開發者的實務分享：agent（會自己連續跑很多步、呼叫工具來完成任務的 AI 程式）上線以後，要怎麼顧好費用、速度和穩定度。你不寫程式也值得看，看完會知道 AI 產品為什麼有時很貴或很慢，還有官方建議的省錢做法。文中的 token 是模型計算文字量和收費的單位。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=178s\" target=\"_blank\">02:58</a> 長時間執行的 agent 一定要用 prompt caching：input tokens 可享 90% 折扣，time to first token 更快，cache tokens 也不計入 API rate limits<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Prompt caching 是把每輪都一樣的內容（像固定指示）存起來重複用。好處有三個：輸入 token 打一折；time to first token（等到第一個字出現的時間）變短；也不算進 rate limit（API 用量上限）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=272s\" target=\"_blank\">04:32</a> console 的 Analytics 底下有新的 prompt cache dashboard。Claude Code 預設內建 prompt caching skill，說「improve my cache hit rate」就會帶你加 cache control markers<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ console（開發者後台）的 Analytics 分析頁新增了快取儀表板，能看快取命中率。Claude Code（寫程式的 AI 助手）內建相關 skill（現成做法包），說一句話，它就帶你標出 prompt 裡要快取的段落。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=487s\" target=\"_blank\">08:07</a> inference 系統第一次看到某段 prompt 時會寫入 cache，下一輪就變成 cache hit。KV 值預設保存 5 分鐘，可用選項延長<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ inference 是模型實際運算、產生回答的過程。一段內容第一次出現時先算好存起來，下一輪再遇到就直接拿來用，這叫 cache hit。存下來的 KV 值是模型讀完內容後的中間結果，預設留 5 分鐘，可以延長。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=585s\" target=\"_blank\">09:45</a> Context engineering 是決定哪些內容該放進 Claude context 的一門功夫。建議別用會把 context 藏起來的抽象層，要直接看完整 transcript<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context 是模型這一輪看得到的全部資料，放錯或放太多都會多花錢，也可能讓它做錯，所以要主動挑。講者建議別用會把細節藏起來的框架，直接讀 transcript（完整對話紀錄），才知道模型到底看到什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=710s\" target=\"_blank\">11:50</a> Tool Search Tool：tools 照樣事先宣告，但延後載入，模型需要時才即時載入。Lovable 的 token 用量因此減少 10%，模型的表現也更聰明<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ tools 是模型能呼叫的外部功能，例如查資料、寄信。Tool Search Tool 的做法是工具清單照樣先交代，詳細內容等用到時才載入那幾個。Lovable 這家公司因此少用 10% token，模型表現也更好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=801s\" target=\"_blank\">13:21</a> Programmatic tool calling：tool 回傳的資料留在記憶體，模型寫 Python 只取出需要的部分放進 context。Quora 靠這招省了很多錢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Programmatic tool calling：工具回傳的一大包資料先不直接給模型看，模型寫一小段 Python（一種程式語言）挑出需要的部分，再放進 context。例如查到一萬筆訂單，只取總數。Quora 靠這招省了很多錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=893s\" target=\"_blank\">14:53</a> Compaction 把不再需要的舊對話輪次濃縮成摘要，讓模型能接著做下去。Hex 已用在正式環境。demo 刻意把門檻設低到約 500k，講者說這可能省成本、降延遲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Compaction：對話拉太長時，把用不到的舊內容濃縮成摘要，模型就能接著做，不會因為塞滿而卡住。Hex 已經在正式產品上使用。demo 把觸發門檻刻意設低到約 50 萬 token，講者說這樣可能省錢又變快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=1270s\" target=\"_blank\">21:10</a> Advisor 策略：由 Haiku 或 Sonnet 當 executor 執行，需要時請 Opus 給建議，用接近小模型的成本拿到 Opus 等級的智慧。demo 中 Opus 抓到了 Sonnet 漏掉的細節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku、Sonnet、Opus 是 Claude 由小到大的模型，越大越強也越貴。Advisor 讓小模型當 executor（負責動手做事），需要時才請 Opus 出主意，成本接近小模型。demo 裡 Opus 抓到了 Sonnet 漏掉的細節。</span>\n\n📘 術語<br><b>Prompt caching</b>（提示快取）：標出 prompt 裡共用的段落，預先算好 KV 值存起來，省掉 inference 的前段處理，降低成本和延遲<br><b>Context engineering</b>（情境工程）：決定哪些內容該放進 Claude context 的一門功夫，由開發者主動決定要放什麼<br><b>Tool Search Tool</b>（工具搜尋工具）：tools 延後載入，模型需要時才從數百個 tools 裡挑出三、四個即時加入<br><b>Programmatic tool calling</b>（程式化工具呼叫）：模型寫 Python 呼叫 tools，從回傳資料中只取需要的部分放進 context<br><b>Compaction</b>（壓縮）：context 到門檻時暫停，把整份 transcript 交給另一次模型呼叫摘要，讓模型能繼續執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=7oO37GRhwGk&t=0s\" target=\"_blank\">Getting more out of the Claude Platform</a>（2026/05/07 · 28 分鐘）",
        "tip": "💡 你可以怎麼用：如果你用 Claude Code 或 API 做會跑很久的自動化，先在 Claude Code 說「improve my cache hit rate」讓它幫你加上快取，再到 console 的快取儀表板確認命中率。結果不對時，打開完整對話紀錄，看模型實際讀到了什麼。",
        "quiz": {
          "q": "講者說 prompt caching 對 input tokens 有多少折扣？",
          "options": [
            "75%",
            "10%",
            "50%",
            "90%"
          ],
          "correct": 3,
          "why": "[02:58] 講者說 prompt caching 是 90% 的折扣，沒用就等於錯過 input tokens 的 90% 折扣。10% 是 Lovable 用 Tool Search Tool 減少的 token 用量 [11:50]"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_GMIWm5y90xA",
        "title": "🎬 Code with Claude 2026：開幕主題演講",
        "category": "Agents 與 API",
        "text": "<b>開幕主題演講：提高 rate limit，發表 Managed Agents 與 Claude Code 新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Anthropic 2026 年開發者大會的開場演講。這次沒有發表新模型，重點是用量額度變多，Claude 也能在背景自己做更多事。Claude Code 是讓 Claude 直接讀程式、改程式的工具，這場大部分新功能都跟它有關。想知道 AI 工具接下來往哪走，看這支就對了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=378s\" target=\"_blank\">06:18</a> 上個月 Mythos 讀完整個 OpenBSD 原始碼，找出一個存在 27 年、之前的人工審查、fuzzer 和靜態分析工具都沒抓到的漏洞<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mythos 是 Anthropic 的模型。OpenBSD 是出了名重視安全的開源作業系統。fuzzer 會一直丟亂七八糟的資料進去，看程式會不會壞掉。靜態分析是不執行程式、只讀程式碼找錯。人跟工具漏看了 27 年的洞，這次被 AI 找到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=440s\" target=\"_blank\">07:20</a> Claude 平台的 API 用量一年成長近 17 倍；Claude Code 的開發者平均每週執行 Claude 20 小時。這次沒有發表新模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ API 是讓其他程式直接呼叫 Claude 的接口。用量一年成長快 17 倍，每人每週讓 Claude 跑 20 小時，表示 AI 已經是日常工作的一部分。這場的重點是怎麼把現有的模型用好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=571s\" target=\"_blank\">09:31</a> Pro、Max、Team 和按席位計費的 Enterprise 方案，Claude Code 五小時 rate limit 加倍；Opus 的 API 上限也大幅提高。算力來自與 SpaceX 合作，使用 Colossus One 資料中心<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ rate limit 是一段時間內可以用的額度，用完就要等。付費方案的 Claude Code 每五小時額度變兩倍；最強的 Opus 模型透過 API 也能用更多。多出來的算力來自和 SpaceX 的合作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=1114s\" target=\"_blank\">18:34</a> Diane 建議要為下一版 Claude 做設計：維持更難的 evals、保持 scaffolding 簡單、做有企圖心的原型，讓模型升級的成本變低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ evals 是測模型能力的考題，scaffolding 是包在模型外面的流程程式。考題要出到現在的模型還考不好，外層程式寫簡單，原型大膽做。這樣新模型一出，直接換上去就會變強，不用整個重做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=1337s\" target=\"_blank\">22:17</a> Advisor strategy：在 Messages API 的 tools array 設定，由 Haiku 或 Sonnet 執行、Opus 當顧問。EVE Legal 用這個做法，以低 5 倍的成本拿到前沿模型的品質<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Messages API 是程式呼叫 Claude 的主要接口，tools array 是列出它能用哪些工具的清單。平常讓便宜的 Haiku 或 Sonnet 做事，卡關了才去問貴的 Opus。EVE Legal 這樣做，成本少了 5 倍，品質還是頂尖。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=1494s\" target=\"_blank\">24:54</a> Claude Managed Agents 新增三個功能：multi-agent orchestration、outcomes（用 markdown rubric 定義成功標準，由 grader agent 評分）、Dreaming（回顧過去的 session，把學到的東西寫進 memory）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Managed Agents 是由 Anthropic 代管、能自己分步驟做事的 AI 助手（agent）。這次新增三項：讓多個 agent 分工合作；用 markdown 這種簡單文字格式寫評分標準，由另一個 agent 打分數，沒達標就繼續改；還有回顧過去的工作紀錄（session），把學到的東西自己寫進記憶（memory）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=2231s\" target=\"_blank\">37:11</a> Claude Code 新功能：code review、remote control、Autofix、routines（可由排程、webhook 或 API 事件觸發）、Claude Security（整晚掃描整個 codebase）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code review 幫你檢查程式，Autofix 自動修錯，remote control 讓你遠端操控 Claude Code。routines 可以照排程啟動，也可以被 webhook（外部系統自動發出的通知）觸發。Claude Security 會花一整晚掃過全部程式碼找漏洞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=2635s\" target=\"_blank\">43:55</a> Boris 說 routines 是「higher-order prompt」：現在預設的做法從自己去 prompt Claude Code，變成讓 Claude 去 prompt Claude Code<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 就是你下給 AI 的指令。以前是你一句一句叫 Claude Code 做事；有了 routines，改成由 Claude 照排程或事件自己去下指令。你的角色從下指令的人，變成定規則的人。</span>\n\n📘 術語<br><b>advisor strategy</b>（顧問策略）：把執行和建議分開：小模型負責執行，需要建議時再去問大模型<br><b>outcomes</b>（成果標準）：明確定義成功長什麼樣子，Claude 會一直反覆修正到達成為止<br><b>Dreaming</b>（Dreaming（夢境學習））：Claude 檢視過去的 session，找出漏掉的 skill 和該學到的教訓，自己寫進 memory<br><b>routines</b>（例行任務）：設定一次後，會監聽 webhook、API 事件或照排程，自動啟動 Claude Code<br><b>task horizon</b>（任務時間跨度）：衡量模型能自主工作多久，同時持續提升產出的品質\n\n📺 <a href=\"https://www.youtube.com/watch?v=GMIWm5y90xA&t=0s\" target=\"_blank\">Code with Claude 2026: Opening Keynote</a>（2026/05/06 · 47 分鐘）",
        "tip": "💡 你可以怎麼用：如果你常叫 Claude 重複做同一件事，例如每週整理報告，可以把指令寫成固定流程交給排程去跑。簡單的事用 Haiku 或 Sonnet，遇到難題再換 Opus，比較省額度。",
        "quiz": {
          "q": "根據這場演講，Claude Code 的五小時 rate limit 有什麼變化？",
          "options": [
            "Pro、Max、Team 和按席位計費的 Enterprise 方案都加倍",
            "所有方案都取消五小時限制",
            "只有 Max 方案變成三倍",
            "只有 Enterprise 方案提高 50%"
          ],
          "correct": 0,
          "why": "[09:31] 字幕說 doubling Claude Code's five-hour rate limits for pro, max, team, and seat-based enterprise plans"
        },
        "status": "long",
        "parts": 4
      },
      {
        "id": "yt_E9gaQHrw_rg",
        "title": "🎬 如何用 Claude Managed Agents 更快上線到 production",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 的設計動機、基本元件、進階功能與示範</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Managed Agents。agent 是能自己規劃步驟、動手用工具把整件事做完的 AI，而這個服務把 agent 需要的執行環境整套代管起來，開發者不用自己架。影片依序說明為什麼要做這個服務、它由哪些元件組成、有哪些進階功能，最後用實例示範。如果你想知道 AI 怎麼從「一問一答的聊天助理」變成「能自己跑一整晚的工作者」，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=120s\" target=\"_blank\">02:00</a> 模型能力呈指數成長，任務時間越拉越長；瓶頸越來越在基礎設施，不在智慧。從前要一路盯著修正，現在已經有人讓 agent 跑一整晚<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型越來越強，能連續做的事也越來越久。現在常卡關的是基礎設施，也就是讓程式穩定運作的主機和系統，而不是 AI 不夠聰明。以前得一路盯著它修正，現在已經有人放它整晚自己跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=180s\" target=\"_blank\">03:00</a> 長時間任務特別需要可靠性和安全性，也需要新的互動模式：outcome-oriented tasks（給任務加上定義完成標準的 rubric），以及能中途停下、之後再繼續<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 任務一跑好幾個小時，就更怕中途出錯或亂動東西。所以要先訂好 rubric，也就是評分標準，寫清楚怎樣才算完成，讓 AI 朝這個結果努力。另外也要能中途暫停，之後再接著做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=242s\" target=\"_blank\">04:02</a> 推出前的研究發現：三分之一開發者卡在 context management，基礎設施問題被列為上 production 的頭號障礙，多數 agent 沒有正式的 observability<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 官方事前調查發現：三分之一的開發者卡在 context management，就是決定要給 AI 看哪些資訊。基礎設施是上 production（正式上線給人用）的最大障礙。多數 agent 也沒有 observability，就是看得到它在做什麼的監控。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=308s\" target=\"_blank\">05:08</a> Claude Managed Agents 把基礎設施和 harness（工具權限、工具執行、自動 context 管理、checkpointing、重試）整合起來，再加上基本元件和 observability 平台<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它把底層環境和 harness 一起包好。harness 是包在模型外面、負責執行的框架，管工具權限、實際執行工具、自動整理資訊、checkpointing（存進度點）和失敗重試。另外還提供基本元件和監控平台。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=338s\" target=\"_blank\">05:38</a> 心智模型：Agent 是設定（model、prompt、tools、skills）；Environment 可設定網路和套件；每次執行是一個 session，可帶入資源（如 GitHub repos）和 outcome，並發出 events<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Agent 是一份設定，寫好用哪個模型、給什麼指令、可用哪些工具和 skills（可重複使用的做事說明）。Environment 是它工作的空間。每跑一次叫一個 session，可以附上資料和目標，過程中會留下 events（事件紀錄）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=400s\" target=\"_blank\">06:40</a> Events 分四類：user（引導、中斷、定義結束條件）、agent（在做什麼、用哪些工具）、session（生命週期）、span（把相關 events 分組）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ events 分四種。user 是你下的指令，例如引導方向、中途打斷、設定何時算完成。agent 記錄它在做什麼、用了哪些工具。session 記錄這次執行的開始和結束。span 則把相關的事件歸成一組，方便一起看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=523s\" target=\"_blank\">08:43</a> console 可即時看 event stream，也有 debug agent 分析瓶頸、給出建議；另有 Claude Code 內建的 skill、CLI（可用 YAML 設定 agent）和 cookbooks 幫你起步<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在 console（網頁管理後台）可以即時看事件一筆筆出來，還有專門除錯的 agent 幫你找哪裡慢、給建議。起步可以用 Claude Code 內建的 skill、CLI（下指令的工具，能用 YAML 設定檔定義 agent）和 cookbooks（範例集）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=616s\" target=\"_blank\">10:16</a> 進階功能：multi-agent orchestration、Outcomes（反覆迭代直到符合結束條件）、memory（已進入 public beta）、Dreaming（把新學到的東西整理成新記憶）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 進階功能有四個。multi-agent orchestration 是讓多個 agent 分工合作。Outcomes 讓它反覆修改直到達標。memory 讓它記得以前的經驗，現在已開放公開測試。Dreaming 是讓它回頭整理學到的東西，存成新記憶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=869s\" target=\"_blank\">14:29</a> CEO dashboard 示範：用 Outcomes 的 rubric 自主優化速度，做法包括平行化工具呼叫、fast mode、prompt 優化和 multi-agent，渲染時間從約 37 秒降到 10 秒<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範是做一個 CEO 用的數據看板。先給它一份「要更快」的 rubric，它就自己想辦法加速：同時呼叫多個工具、開 fast mode（輸出較快的模式）、改寫提示、分工給多個 agent。結果產出畫面的時間從約 37 秒降到 10 秒。</span>\n\n📘 術語<br><b>Session</b>（工作階段）：agent 的每一次執行；可以帶入資源（例如 GitHub repos）和 outcome，執行時會發出 events<br><b>Environment</b>（執行環境）：讓 agent 使用的環境，可設定網路和套件，例如 agent 在裡面寫程式<br><b>Outcomes</b>（成果目標）：先指定一份 rubric，agent 跑完後由另一個 sub-agent 檢查產出，agent 再反覆迭代直到達標<br><b>outer loop</b>（外層迴圈）：使用者看完結果給回饋，由 Claude Code 透過 CLI 拉 session log，修改 rubric 或指令後再開一個新 session<br><b>Dreaming</b>（Dreaming）：Claude 反思並把新學到的東西整理成新記憶，讓 agent 每次執行之間都能進步\n\n📺 <a href=\"https://www.youtube.com/watch?v=E9gaQHrw_rg&t=0s\" target=\"_blank\">How to get to production faster with Claude Managed Agents</a>（2026/05/06 · 17 分鐘）",
        "tip": "💡 你可以怎麼用：就算不寫程式，也可以借用 Outcomes 的做法：交代 AI 任務時，先寫 3～5 條完成標準（例如「表格要有哪幾欄」「每個數字都附來源」），再請它做完後逐條自我檢查，沒達標就繼續改。",
        "quiz": {
          "q": "在 Claude Managed Agents 用 Outcomes 時，agent 跑完之後由誰檢查產出？",
          "options": [
            "主 agent 自己重看一遍",
            "使用者手動在 console 審核",
            "另外啟動的一個 sub-agent",
            "預先寫好的單元測試"
          ],
          "correct": 2,
          "why": "[12:58] 字幕說 agent 完成後會啟動一個獨立的 sub-agent，檢查產出的 artifacts，再把分析結果送回主 agent"
        },
        "status": "old"
      },
      {
        "id": "yt_NLWiIj47IdI",
        "title": "🎬 什麼是 Claude Managed Agents？",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 這套 API，並用三個示範說明如何大規模建置與部署 agent</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方影片，介紹 Claude Managed Agents。Agent 是能自己一步步動手完成任務的 AI 助理；API 是讓工程師把這個能力接進自家產品的接口。影片用三個示範，讓你看到 agent 怎麼放進真實工作流程，還能一次跑好幾個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=4s\" target=\"_blank\">00:04</a> Claude Managed Agents 是一套用來大規模建置與部署 agent 的 API：你定義 agent 的工具、角色和能力，設定 sandbox 環境的套件與網路控管，再從自己的應用程式發起 session<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先設定 agent 能用哪些工具、扮演什麼角色；再設定 sandbox（隔離的工作區，出錯也不會影響外面）要裝哪些東西、能連哪些網站。接著從自己的系統開一個 session（一次任務），它就開始做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=4s\" target=\"_blank\">00:04</a> Claude 在隔離的 container 裡工作，可以完整存取檔案系統、執行 bash，也能用 web search<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每次任務都在一個 container（獨立的小型電腦環境）裡跑。Claude 在裡面可以讀寫檔案、下 bash 指令（用文字直接操作電腦），也能上網搜尋，就像給它一台專屬電腦。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=34s\" target=\"_blank\">00:34</a> 示範：把 Kanban 卡片拖到 in progress 就會自動發起 session；environment 已預裝 Lighthouse、Puppeteer，並掛載 GitHub repo，再加上 rubric（Lighthouse 分數 90 以上等）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把 Kanban 看板上的卡片拖到「進行中」，任務就自動開始。環境裡已裝好 Lighthouse（幫網頁打分數）和 Puppeteer（自動操作瀏覽器），也接好專案程式碼，另外設了 rubric（完成標準），例如分數要 90 以上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=64s\" target=\"_blank\">01:04</a> 每次 tool call 都透過 event stream 即時傳回看板；另一個 grader 在自己的 context window 依標準評估，Claude 依回饋修正後重新提交，分數拉到 96<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 每用一次工具叫 tool call，這些動作會透過 event stream 即時傳回看板。另一個 grader（評分員）用自己的 context window（獨立的思考記憶）照標準批改，Claude 修改後重交，分數拉到 96。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=96s\" target=\"_blank\">01:36</a> 可以同時拖第二張卡片：兩個 session、兩個 container，平行處理兩個不同任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 再拖一張卡片，就多開一個 session、一個 container，兩件事同時進行、互不干擾，就像同時派兩個人各做各的，不用排隊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=96s\" target=\"_blank\">01:36</a> SaaS 價格追蹤 agent：上網查價格、在 sandbox 裡用 Python 做成本分析、用 Excel skill 寫主管摘要，再透過 MCP servers 發 Slack 並建立 Asana 任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SaaS 是按月付費的線上軟體。這個 agent 上網查價格，用 Python 程式算成本，靠 Excel skill（做試算表的能力包）寫主管摘要，再透過 MCP servers（連接外部服務的轉接頭）發 Slack 訊息、在 Asana 建立待辦任務。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=127s\" target=\"_blank\">02:07</a> Memory store：開始前先查上週的結果，結束後存下有變動的地方，所以報告能寫出「Cloud compute 比上週低 15%」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Memory store 是 agent 可以讀也可以寫的筆記本。開始前先看上週的紀錄，做完再把有變動的地方記下來，所以報告能直接寫出「Cloud compute（雲端運算費）比上週低 15%」，不用每次從頭比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=158s\" target=\"_blank\">02:38</a> 監控警報示範：coordinator agent 把工作分派給三個 specialist（各自有 context window、共用檔案系統），彙整成事件摘要；發 Slack 前會觸發 permissions policy，等人核准才送出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ coordinator（總指揮）把工作分給三個 specialist（負責不同專長的 agent），它們各自思考、共用同一批檔案，最後彙整成事件摘要。要發 Slack 之前，permissions policy（權限規則）會先擋住，等人按核准才送出。</span>\n\n📘 術語<br><b>Session</b>（工作階段）：從自己的應用程式發起，Claude 會在隔離的 container 裡執行任務<br><b>Environment</b>（執行環境）：設定好的 sandbox，可以預裝套件（如 Lighthouse、Puppeteer）並設定網路控管<br><b>Rubric</b>（評分標準）：你訂的完成標準，由另一個 grader 在自己的 context window 評估輸出<br><b>Memory store</b>（記憶庫）：agent 可以讀寫，用來比對上次的結果、記住過去的事件，下次就不用從頭開始<br><b>Multi-agent coordination</b>（多 agent 協作）：coordinator 把工作分派給 specialist，各自有 context window、共用檔案系統，最後彙整結果\n\n📺 <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=0s\" target=\"_blank\">What is Claude Managed Agents?</a>（2026/04/09 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：想用 AI 自動化重複的工作時，可以照影片的做法：先把「怎樣算做完」寫成具體標準，讓 AI 自己檢查；發訊息這類對外的動作，就設成要你核准才送出。跟工程師討論需求時，也可以直接用 session、rubric、memory store 這些詞來說明。",
        "quiz": {
          "q": "在網站效能優化的示範中，rubric 是怎麼運作的？",
          "options": [
            "使用者在 Kanban 看板上手動替每次輸出打分數",
            "另一個 grader 在自己的 context window 依標準評估輸出，Claude 讀了回饋修正後重新提交",
            "由 Asana 建立審查任務，讓團隊成員評估成果",
            "Claude 在同一個 context window 自己評分，達標就結束"
          ],
          "correct": 1,
          "why": "[01:04] 字幕說：A separate grader running at its own context window evaluates the output against my criteria. Claude reads that feedback, goes back in, fixes what it misses, and then resubmits."
        },
        "status": "old"
      }
    ]
  },
  yt_prompt: {
    "id": "yt_prompt",
    "name": "📺 提示與選模型・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_71-8fJIGi34",
        "title": "🎬 你該用哪個 Claude 模型？",
        "category": "提示與模型選擇",
        "text": "<b>比較每個任務的總成本而非每 token 單價，依任務類型選模型與 effort</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在教你怎麼挑 Claude 的模型。重點是別只看「每個字多少錢」，要看「整件事做完總共花多少」。Fable 5.1 推出後，比較聰明、單價比較高的模型，有時整體反而比較省，所以值得重新想一下平常的選法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=0s\" target=\"_blank\">00:00</a> 選最便宜的模型、用最低 effort 看似最省，但推出 Claude Fable 5.1 後，更聰明的模型完成任務的成本可能更低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 直覺會選最便宜的模型、effort 開最低。effort 是模型回答前要想多久，想越久越貴。但 Fable 5.1 推出後，聰明模型比較快做對，總花費可能反而比較低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=0s\" target=\"_blank\">00:00</a> 影響任務成本的三個因素：model、effort、cache。模型越強，每 token 通常越貴，但它往往用更少的步驟就能完成任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 成本看三件事：用哪個模型、effort 開多高、有沒有用到 cache。token 是 AI 算字數收費的單位。強的模型每個 token 比較貴，但少繞路、步驟少，總帳常常更低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=34s\" target=\"_blank\">00:34</a> 模型在不同請求之間不會記得任何東西，每次都要重新處理整段對話；caching 讓它重複使用已處理過的內容，成本約為十分之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型不會記得上一輪，你每多問一句，它都要把整段對話從頭再讀一次，每次都算錢。caching 就是把讀過的部分存起來重複用，這部分只收大約十分之一的價錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=66s\" target=\"_blank\">01:06</a> Fable 5.1 每 token 單價和 5 相同，但在按 token 計費時 cache reads 便宜 75%；一般工作總成本約降 25%，長時間 agentic 任務最多約降 45%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fable 5.1 每個 token 的定價跟 Fable 5 一樣，但按用量計費時，讀快取便宜 75%。一般工作總花費約少 25%；agentic 任務（AI 自己連續做很多步）最多約少 45%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=66s\" target=\"_blank\">01:06</a> 在第三方程式基準 CursorBench 上，5.1 用 medium effort 的結果與 5 用 max effort 相近，成本約為五分之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CursorBench 是外部單位做的寫程式能力測驗。結果 Fable 5.1 只開中等 effort，表現就接近 Fable 5 開到最高 effort，花費卻只要大約五分之一。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=96s\" target=\"_blank\">01:36</a> 任務分兩類：開放式工作（深度研究、複雜分析、長時間 agent 工作），以及例行工作（摘要文件、草擬 email、從報告擷取資料）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 任務大致分兩種。一種是開放式的，沒有標準做法，要自己摸索，像深度研究、複雜分析、讓 AI 長時間自己跑；另一種是例行公事，像摘要文件、寫 email 草稿、從報告抓資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=127s\" target=\"_blank\">02:07</a> 開放式任務為主就用 Fable 5.1，effort 從 medium 開始、需要時再調高；例行任務為主就維持 Opus 或 Sonnet，需要時再改用 Fable。subagent 通常用較便宜的模型就夠<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開放式工作多，就用 Fable 5.1，effort 從中等開始，不夠再加；例行工作多，就繼續用 Opus 或 Sonnet（Claude 其他型號），不夠再換。subagent（主 AI 派去做小任務的幫手）用便宜模型通常就夠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=157s\" target=\"_blank\">02:37</a> 管理員可以針對全員或個別角色設定三種控制：model entitlements、effort caps、defaults<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司管理員可以對全公司或特定職位設三種控制：model entitlements 決定能選哪些模型，effort caps 限制 effort 最高能開多少，defaults 決定新對話一開始用哪個模型和 effort。</span>\n\n📘 術語<br><b>effort</b>（推理投入程度）：模型回答前做多少推理；effort 越高越貴，但結果往往更好<br><b>caching</b>（快取）：重複使用已處理過的內容，不必重新處理整段對話，成本約為十分之一<br><b>model entitlements</b>（模型使用權限）：決定使用者可以選哪些模型<br><b>effort caps</b>（effort 上限）：設定使用者在某個模型上最高能選的 effort<br><b>defaults</b>（預設值）：設定新對話一開始使用的模型和 effort\n\n📺 <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=0s\" target=\"_blank\">Which Claude model should you use?</a>（2026/09/18 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：開始一件工作前，先判斷它是要深入研究、分析，還是摘要、寫信這類例行事。前者用 Fable 5.1、effort 開中等，後者用 Opus 或 Sonnet；結果不夠好再調高 effort，不要一開始就開到最高。",
        "quiz": {
          "q": "根據影片，在按 token 計費時，Claude Fable 5.1 的 cache reads 比 5 便宜多少？",
          "options": [
            "便宜 90%",
            "便宜 45%",
            "便宜 75%",
            "便宜 25%"
          ],
          "correct": 2,
          "why": "[01:06] 字幕提到 5.1 每 token 單價和 5 相同，但按 token 計費時 cache reads 便宜 75%。25% 和 45% 是整體成本的降幅，不是 cache reads 的降幅"
        },
        "status": "old"
      },
      {
        "id": "yt_RyjROxHLi_g",
        "title": "🎬 當你跟 AI 對話時，背後發生了什麼事？",
        "category": "提示與模型選擇",
        "text": "<b>說明 Claude 這類 AI 模型靠「預測」逐字產生回覆，以及它還會看到哪些 context</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片用很短的篇幅，說明你傳訊息給 Claude 之後，它到底怎麼產生回覆。搞懂它背後的運作方式，你就比較知道怎麼問才會得到好答案，也比較會判斷它的回答。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 傳訊息給 AI 時，它看起來像在思考，但像 Claude 這類 AI 模型其實是以「預測」為基礎運作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 回你的時候，看起來好像在思考。但 Claude 這類 AI 模型（用大量文字訓練出來、能讀也能寫的程式），做的其實是「預測」（prediction）：猜接下來最可能出現哪個字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 模型讀取你的訊息後，結合訓練時學到的一切和你在訊息中提供的內容，分段寫出回覆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它會先讀你的訊息，把訓練時學到的東西和你這次提供的內容放在一起，再一段一段寫出回覆。所以你給的資訊越清楚，它能用的材料就越多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 回覆是一個字一個字出現的，每個字都是根據前面所有內容挑選出來的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 回覆不是整篇想好才貼出來，而是一個字接一個字寫出來的。每挑一個字，它都會看前面所有內容，包括你的問題和它自己已經寫出來的部分。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 除了你的訊息，模型還會看到其他 context：app 開發者給的指示（稱為 system request）、你下載的檔案，以及依設定而定的過往對話記憶等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它看到的不只你的訊息，還有其他 context（回答時能參考的背景資料）：app 開發者給的指示（system request）、你下載的檔案。依你的設定，也可能看到 memory，也就是過去對話的記憶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=30s\" target=\"_blank\">00:30</a> 了解 AI 模型是預測系統之後，你就更能跟它合作，也更能解讀它的回覆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 知道它是靠預測在寫字，就會明白回答好不好，跟它看到的內容很有關係。背景給足、需求講清楚，回覆會更貼近你要的；答案怪怪的時候，可以回頭想是不是漏給了什麼。</span>\n\n📘 術語<br><b>prediction</b>（預測）：AI 模型運作的基礎；根據前面所有內容，逐字挑選下一個字來寫出回覆<br><b>system request</b>（系統指示）：app 開發者提供給模型的指示，屬於模型除了使用者訊息之外會看到的 context<br><b>memory</b>（記憶）：依你的設定而定，模型可能會看到先前對話的記憶\n\n📺 <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">What happens when you talk to AI?</a>（2026/08/08 · 0 分鐘）",
        "tip": "💡 你可以怎麼用：下次問 AI 之前，先把背景交代清楚，例如用途、對象、想要的格式和字數，不要只丟一句短短的問題。如果回答不對，先補上缺的資訊再問一次，不要急著覺得它不行。",
        "quiz": {
          "q": "根據影片，Claude 這類 AI 模型產生回覆時，每個字是怎麼決定的？",
          "options": [
            "根據前面所有內容挑選出來的",
            "只根據使用者最後一句話決定",
            "從網路上即時搜尋最相關的句子",
            "先寫好完整答案，再一次全部顯示"
          ],
          "correct": 0,
          "why": "字幕 [00:00] 提到回覆會逐字出現，「each one chosen based on everything that came before it」"
        },
        "status": "full"
      },
      {
        "id": "yt_Ua_5vH_n8j4",
        "title": "🎬 AI 模型實際上知道些什麼？",
        "category": "提示與模型選擇",
        "text": "<b>說明 AI 模型的知識從哪裡來、有什麼邊界，以及什麼情況下最容易出現知識缺口</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講 AI 模型到底知道什麼、不知道什麼：它的知識從哪裡來、停在哪裡，還有哪些地方最容易答錯。搞懂這些，你就能判斷什麼問題可以放心問，什麼問題要自己再查一下。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 像 Claude 這樣的模型處理過的資料，比人類花好幾輩子能吸收的還要多，看起來好像什麼都懂，但其實不是<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 讀過的文字多到人好幾輩子都讀不完，所以回答起來很有把握，看起來好像什麼都懂。但讀得多不等於全都懂，它還是有不會的東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> AI 模型靠閱讀大量文字來學習，來源主要是網路、公開資料集和其他書面資料；模型本身沒有自己的經驗<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型的知識主要是讀來的，來源是網路文章、公開資料和書籍這類文字。它沒去過餐廳，也沒真的用過產品，講的都是別人寫下來的內容，不是它自己的經驗。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 除非產品特別提供搜尋工具，模型不會即時瀏覽網頁<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 平常模型是靠記憶回答，不會當場上網查。產品要有提供 search tool／web search（搜尋功能，讓模型能即時上網找資料），而且有開，它才看得到最新的網頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 訓練會在某個日期結束，在那之後發生的事都不在模型的記憶裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 訓練資料收到某一天就停了，那天叫 data cutoff（資料截止日）。在那之後的新聞、新產品、新規定，模型本身都不知道，除非另外把資料給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 可以把模型的知識想成一條連續光譜：常見、一致而且直到資料截止日都持續出現的主題，模型懂得非常深入<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型懂一件事，不是只有會或不會兩種，而是深淺有差。常被寫到、說法一致、一直到截止日都還有人在討論的主題，像基礎數學或有名的歷史事件，它通常講得很紮實。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 光譜另一端是少見主題、截止日之後的事件、狹窄領域和在地知識，越往這一端，答案越不可信<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 另一端是冷門主題、截止日之後的事、很窄的專業，還有在地資訊，例如某間小店現在還有沒有開。這些資料很少甚至沒有，越靠這一端，答案越要自己查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 最容易出現知識缺口的情況：主題跟時間有關、領域高度專業或很在地、語言比較少人使用、依賴模型對「典型」或「正常」的判斷，或是 web search 沒開<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ knowledge gaps（知識缺口）就是模型懂得不夠的地方，最常出現在：跟時間有關的事、很專業或很在地的問題、少人用的語言、要它判斷什麼算一般正常，或是沒開搜尋功能的時候。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 模型的知識同時具備廣、深、凍結在某個時間點、不完美這幾個特性；看清邊界在哪裡，就不會再被它嚇到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 總結來說，模型懂得廣也懂得深，但它的知識停在某個時間點，也不完美。知道它強在哪、弱在哪，就不會被它懂那麼多的樣子嚇到。</span>\n\n📘 術語<br><b>data cutoff / cut-off date</b>（資料截止日）：訓練結束的日期，在那之後發生的事都不在模型的記憶裡<br><b>knowledge gaps</b>（知識缺口）：模型知識不足的地方，最常出現在跟時間有關、高度專業、在地或少用語言的主題<br><b>search tool / web search</b>（搜尋工具／網路搜尋）：產品特別提供時，模型才能即時瀏覽網頁；沒開的話比較容易出現知識缺口\n\n📺 <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">What do AI models actually know?</a>（2026/07/24 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：如果要問最近發生的事、在地資訊或很專業的問題，先打開搜尋功能，或是自己附上資料，拿到答案後把它當線索再查證一次。常見又不太會變的知識，就可以比較放心直接用。",
        "quiz": {
          "q": "根據影片，AI 模型在什麼情況下會即時瀏覽網頁？",
          "options": [
            "每次回答問題時都會自動瀏覽",
            "只有在使用者問到時事新聞時",
            "只有在產品特別提供搜尋工具時",
            "只有在問題使用比較少見的語言時"
          ],
          "correct": 2,
          "why": "[00:00] 字幕說模型不會即時瀏覽網頁，除非產品特別提供搜尋工具（unless the product specifically provides her with a search tool）"
        },
        "status": "old"
      },
      {
        "id": "yt_RlQ4xpDnoaw",
        "title": "🎬 AI 為什麼會產生幻覺？",
        "category": "提示與模型選擇",
        "text": "<b>說明 AI 為何會編造事實、哪些情況容易發生，以及怎麼減少</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方影片，講 AI 為什麼有時會很有把握地講出錯的東西。影片也說明哪些問題最容易出這種錯，以及你可以怎麼防範。如果你常用 AI 查資料或寫東西，這些觀念可以幫你少出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> AI 被訓練成要有幫助，所以即使不確定也想給出答案，這類錯誤就叫做 hallucination（幻覺）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 被訓練成要盡量幫上忙，所以就算不確定，也傾向給你一個答案。這種捏造出假事實的錯誤叫 hallucination（幻覺），意思是 AI 講得像真的，其實內容是編的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> 幻覺通常比一般錯誤更糟，因為 AI 看起來很有自信，錯的答案也常常看起來像是對的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一般的錯誤常常一看就覺得怪。幻覺比較麻煩，因為 AI 的口氣一樣篤定，內容也很通順，你沒辦法從語氣分辨真假，所以更容易直接相信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> 容易發生幻覺的情況：問特定事實、統計數據或引言，或主題冷門、高度專業、非常新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你問得越細，例如某個統計數字、某句話是誰說的，或主題越冷門、越專業、越新，AI 就越容易拿「聽起來合理」的內容填空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 問到真實但不太有名的人或地點，或需要日期、名字、數字等精確細節時，也容易出現幻覺<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 例如問一間小地方的店、一位不太有名的人，或要確切的年份、人名、金額，AI 常會給一個看起來很精準、其實是拼湊出來的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 減少幻覺的方法一：一開始就告訴 AI「不知道也沒關係」（It&#x27;s okay if you don&#x27;t know）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在提問一開始就加一句「不知道也沒關係」，等於先給 AI 台階下。它會比較願意直接說不確定，不會硬編一個答案給你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 方法二：開一個新的對話，請 AI 找出答案裡的錯誤；方法三：保持懷疑，自己核對數字、日期和引言<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開一個新的對話，把答案貼進去請 AI 找錯，它比較不會被前面的說法牽著走。另外自己也要保持懷疑，數字、日期、引言都要回原始來源查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 每個新版本的 Claude 都有改善，但這是整個 AI 領域長期存在、尚未完全解決的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude（Anthropic 公司做的 AI 助理）每出新版本都有改善。但幻覺是整個 AI 領域還沒完全解決的老問題，所以就算用新版，也不能完全不查證。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：AI 在不確定時仍給出答案而編造事實的錯誤，而且常常看起來很有自信\n\n📺 <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">Why does AI hallucinate?</a>（2026/07/23 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 AI 提供數字、日期或引言時，開頭先加一句「不知道也沒關係」。拿到答案後，重要的部分開新對話請它找錯，再自己到官方網站或原始資料核對一次。",
        "quiz": {
          "q": "根據影片，下列哪一項是減少 AI 幻覺的建議做法？",
          "options": [
            "要求 AI 每個回答都附上來源網址",
            "同一個問題連續問三次，比較答案",
            "只用英文提問，避免用其他語言",
            "開一個新的對話，請 AI 找出答案中的錯誤"
          ],
          "correct": 3,
          "why": "影片 [00:30] 提到「Start a new chat and ask the AI to find errors in the answer」；其他選項字幕都沒有提到"
        },
        "status": "full"
      },
      {
        "id": "yt_G2B0YWuJUgI",
        "title": "🎬 提示工程實戰手冊（The prompting playbook）",
        "category": "提示與模型選擇",
        "text": "<b>用兩個實例示範如何維護舊 prompt、從零打造新 agent，並用 eval 驗證</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方分享寫 prompt（你給 AI 的指令文字）的實戰方法。影片用兩個例子示範：一個是維護已經在用的舊 prompt，另一個是從零打造新的 agent（能自己完成多步驟任務的 AI 助理）。值得看的地方是，它不只教怎麼寫，還教你怎麼證明改完真的比較好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=150s\" target=\"_blank\">02:30</a> 改 prompt 要先有 eval 才能確認改動真的有進步；換模型後變差可能是行為不同（可用 prompt 調整），也可能是能力不足（prompt 救不了）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Eval 是一組固定的測試題，用來檢查 prompt 改完有沒有真的變好。沒有它，就只能憑感覺判斷。換了新模型變差時，要分清楚是做事習慣不同（改 prompt 能修），還是能力不夠（改 prompt 也沒用）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=242s\" target=\"_blank\">04:02</a> Eval 至少要涵蓋三類：一定要過的 control case、模型以前出錯過的 edge case，以及該轉真人或該拒絕的情境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 測試題至少要有三種。control case 是清楚、模型本來就會的基本題，用來確認沒改壞。edge case 是少見、容易出錯的特殊情況，專挑它以前錯過的。第三種是該轉給真人或該拒絕的情況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=658s\" target=\"_blank\">10:58</a> 先做基本整理：刪掉多餘內容、用 XML tags 分開 role、policy、tone；如果人都分不清 guideline、policy 和 data，模型大概也分不清<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先大掃除，刪掉重複或沒用的字。再用 XML tags（像 &lt;policy&gt;…&lt;/policy&gt; 這種成對標籤）把角色、規定、語氣分開放。如果你自己看都分不出哪段是規則、哪段是資料，AI 也會搞混。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=720s\" target=\"_blank\">12:00</a> 定義 output format，並在 API 呼叫加 stop sequence；輸出結構比較複雜時，可以用 structured outputs<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要先規定好回答的格式。stop sequence 是程式呼叫 AI 時設的停止記號，一看到結尾標籤就停，不會多講廢話。格式很複雜時，可以改用 structured outputs，強制 AI 照固定欄位輸出。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=936s\" target=\"_blank\">15:36</a> 為舊模型加的防禦性 patch 可能會被新模型過度遵守，導致模型不給它明明有的資訊；建議用 version control 記下加這些 patch 的原因<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前為了防舊模型出錯加的補丁規則（patch），新模型可能照做過頭，結果明明有資訊也不肯給。建議用 version control（像文件的修改紀錄）記下每條為什麼加，之後才判斷得出能不能刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1180s\" target=\"_blank\">19:40</a> 指令不會增加能力：光說「計算很重要」沒用，應該給模型一個 proration 計算 tool<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫再多次「計算很重要」，AI 也不會因此算得更準。該做的是給它一個 tool（它可以呼叫的小程式），例如 proration 計算器。proration 就是按天數比例算費用，像月中換方案要補多少錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1309s\" target=\"_blank\">21:49</a> 權衡要把兩面都講清楚：只說轉真人要花 $8，模型就會過度避免轉真人；要一併說明處理錯了得退款，還會失去客戶信任<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果只跟 AI 說「轉真人一次要 8 美元」，它會為了省錢硬撐、不肯轉。另一面也要講：自己處理錯了要退款，還會失去客戶信任。兩邊的代價都知道，它才能做出合理的取捨。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1846s\" target=\"_blank\">30:46</a> 排班 agent 實驗：用 Opus 4.7 加 adaptive thinking 可以達成，但 token 和延遲都變三倍；generate-evaluate-repair loop 同樣全部通過，token 更少、延遲也更低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 排班 agent 實驗：Opus 4.7 開 adaptive thinking（讓模型自己決定要想多深）做得到，但 token（計費用量）和等待時間都變三倍。改成「寫草稿→挑錯→修正」三步分開跑，一樣全部通過，更省也更快。</span>\n\n📘 術語<br><b>eval / evaluations</b>（評測）：用來嚴謹確認 prompt 的改動是否真的讓效能變好<br><b>control case</b>（對照案例）：一定要過的案例：明確不模糊，而且已知模型處理得好<br><b>stop sequence</b>（停止序列）：加在 API 呼叫裡，偵測到結尾的 XML tag 時就叫模型停止生成<br><b>adaptive thinking</b>（自適應思考）：讓模型自己決定要用多少思考和推理來解題<br><b>generate-evaluate-repair loop</b>（生成－評估－修復迴圈）：三個簡單的 prompt 分開跑：先產生草稿，再列出違規之處，最後針對違規做修正\n\n📺 <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=0s\" target=\"_blank\">The prompting playbook</a>（2026/05/22 · 33 分鐘）",
        "tip": "💡 你可以怎麼用：下次改常用的 prompt 前，先準備一小組固定測試題，裡面放基本題、以前出錯過的題目，還有該拒絕或該轉真人的題目，改之前、改之後各跑一次來比較。遇到要算錢、算日期這種事，就交給計算工具或試算表，不要只靠指令叮嚀 AI「要算對」。",
        "quiz": {
          "q": "在 Meridian Mobile 的例子裡，模型算 proration 帳單時一直給出模糊的答案，講者用什麼方法解決？",
          "options": [
            "給模型一個 calculate proration tool",
            "在 API 呼叫加上 stop sequence",
            "把模型換成 Opus 4.7",
            "在 prompt 裡加上 CRITICAL，強調一定要算對"
          ],
          "correct": 0,
          "why": "[18:39] 講者指出，叫模型「好好做」卻沒給它做到的能力沒有幫助，所以改成給它 calculate proration tool；[19:40] 的結論是「instructions don't add capability」。"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_P0uMXS6emHA",
        "title": "🎬 挑選合適的模型",
        "category": "提示與模型選擇",
        "text": "<b>自己建 eval，並用 effort、thinking、prompt caching 和 context engineering 挑出最合適的模型</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在教你怎麼幫自己的工作挑 Claude 模型。三個模型由小到大是 Haiku、Sonnet、Opus，越大越強也越貴。影片的做法是：先自己出一套考題（eval，一組附上「怎樣算做對」的測試任務）實際測過，再用 effort（要模型投入多少工夫）、thinking（先想再答）、prompt caching（重複的開頭不重新計算）和 context engineering（管理要餵給模型哪些資料）來調整花費和準確度。如果你想省錢又不想犧牲品質，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=202s\" target=\"_blank\">03:22</a> 三個重點：一、小而設計良好的 eval 比公開 benchmark 更能判斷該用哪個模型。二、該選「每次成功結果最便宜」的模型，不是每個 token 最便宜的。三、可以用各種調整選項控制成本和準確度的取捨。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 自己出的小考題比公開 benchmark（業界共用的標準考卷）更能看出哪個模型適合你。token 是模型計費的文字單位，但別只比單價：便宜模型常做錯要重跑，總花費反而更高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=264s\" target=\"_blank\">04:24</a> SWE bench verified 這類公開 benchmark 只能提供大方向。實際工作通常橫跨多種任務，甚至會用到 benchmark 沒涵蓋的語言，所以要自己建 eval。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SWE bench verified 是一份測模型修程式錯誤的公開考卷，只能看出誰大概比較強。你的工作可能又寫信又查資料，還用到冷門語言，考卷沒考到，只能自己測。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=356s\" target=\"_blank\">05:56</a> eval 可以想成學校的數學考試：除了答案要對，計算過程也很重要。評分可以混用 LLM as a judge（例如檢查 SQL 查詢）和固定規則的程式檢查（例如一定要呼叫某個 tool）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 就像數學考試也會看算式。可以讓另一個 AI 當裁判，它看得懂寫法不同但結果正確的 SQL（查資料庫的指令）；「一定要呼叫某個 tool（模型能用的外部功能）」這種硬規則，交給程式檢查。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=540s\" target=\"_blank\">09:00</a> 建 eval 常見的三個陷阱：一、把雜訊當成訊號，每個任務要跑好幾次。二、把 API 或 tool call 失敗這類基礎設施問題誤算成模型表現差。三、資料集沒有反映 production 的真實輸入。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一、模型每次回答都不太一樣，只跑一次可能剛好運氣好，要多跑幾次。二、網路或 API（系統之間的連線介面）出錯不是模型笨，不要扣它的分。三、考題要像實際使用時會遇到的輸入。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=691s\" target=\"_blank\">11:31</a> 每個模型的行為都有差異。同一個 prompt，Opus 4.5 太少觸發某個 tool，Opus 4.6 卻觸發太多。建議閱讀新模型的 prompting guide，或把 guide 交給 Claude，請它更新 prompt。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 換模型時別直接沿用舊的 prompt（給模型的指示）：同一段話，Opus 4.5 太少用某個工具，4.6 卻用太多。可以讀新模型的 prompting guide（官方寫的指示撰寫建議），或丟給 Claude 請它幫你改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=785s\" target=\"_blank\">13:05</a> 一定要讀 transcript。有一次在 Claude Code 的 eval 裡分數很高，細看才發現 Claude 去翻 git history，從先前的嘗試中抄答案。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ transcript 是模型做事過程的完整紀錄。高分不代表真的會：曾有測試在 Claude Code（寫程式的 AI 工具）裡拿高分，細看才發現它去翻 git history（程式的修改歷史）抄以前的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=846s\" target=\"_blank\">14:06</a> 內部 code fix pipeline 的例子：Haiku 4.5 不開 thinking 得 92%，開 thinking 達到 100%。Sonnet 和 Opus 也都是 100%，而且花的時間少很多，因為它們能用更少回合完成。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku 4.5 不開 thinking 答對 92%，開了就是 100%。Sonnet 和 Opus 也是 100%，但來回的步驟更少，快很多。小模型不一定最划算，要把時間和總成本一起比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=1093s\" target=\"_blank\">18:13</a> prompt caching 讓快取的 input token 只付定價的 1/10，很好的系統命中率大約 80～90%。system prompt 裡不要放日期時間這類變數，messages 陣列只往後加。精簡 tool 回傳後，token 減少 66.4%。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每次都一樣的開頭會被快取，重複的部分只收 1/10 的價錢，好的系統有八到九成能用到快取。開頭的固定說明（system prompt）別放日期時間這種會變的內容，對話只往後加；工具回傳的內容精簡後，token 少了 66.4%。</span>\n\n📘 術語<br><b>eval</b>（評測）：由一組 task 組成，每個 task 包含輸入和成功標準，用來判斷該選哪個模型<br><b>LLM as a judge</b>（用 LLM 當評審）：用 LLM 檢查最終回覆或執行步驟是否正確，SQL 寫法略有不同也能判斷<br><b>adaptive thinking</b>（自適應思考）：4.6 系列模型起，由模型自己決定一項任務需要思考多少<br><b>effort</b>（投入程度參數）：告訴 Claude 在思考、tool call 和回覆上要寫多少、投入多少工夫<br><b>prompt caching</b>（提示快取）：重複使用已預先計算並快取的 prompt 前段，input token 只付定價的 1/10\n\n📺 <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=0s\" target=\"_blank\">Picking the right model</a>（2026/05/21 · 31 分鐘）",
        "tip": "💡 你可以怎麼用：挑 10 到 20 件你平常真的會交給 AI 做的事，每件寫下「怎樣算做好」，讓每個模型各跑三次，並看過程紀錄，比比看誰用最少的總花費做對最多。平常寫固定指示時，也別在開頭放日期這類會變的內容。",
        "quiz": {
          "q": "根據影片，使用 prompt caching 時，快取的 input token 要付多少錢？",
          "options": [
            "定價的一半",
            "完全免費",
            "定價的 1/10",
            "定價的 1/4"
          ],
          "correct": 2,
          "why": "[18:45] 講者說使用 prompt caching 時，要付 input token 定價的 1/10。"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_T7KqH7kYnE4",
        "title": "🎬 思考的槓桿（The thinking lever）",
        "category": "提示與模型選擇",
        "text": "<b>說明 Claude 怎麼運用 test time compute，以及 effort 等級要怎麼選</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是「讓 Claude 多想一下」這根槓桿該怎麼拉。重點概念是 test time compute，意思是模型在回答你的當下多花一些運算去想；effort 則是讓你調整它要多認真的轉盤。看完你就知道，什麼事值得讓它慢慢想，什麼事讓它快快回就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=80s\" target=\"_blank\">01:20</a> test time compute 跟 train time compute 一樣能提升智慧：Claude 花越多 token 思考，表現越好。Deep Search QA、OSWorld、Humanity&#x27;s Last Exam 都看得到這個現象<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 訓練時多花算力（train time compute）能讓模型變聰明，回答時多想也可以。token 是模型處理文字的單位，想得越多，用掉越多。在搜尋、操作電腦、超難考題的測驗裡都看得到：想越多，分數越高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=173s\" target=\"_blank\">02:53</a> 交通模擬示範：同一個 prompt 用 low、high、max 三種 effort 跑。high 花的時間和 token 大約是兩倍，max 大約是 10 倍，模擬也明顯更細緻<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同一段指令（prompt）叫 Claude 做交通模擬，分別用 low、high、max 各跑一次。high 花的時間和 token 大約兩倍，max 大約十倍，做出來的模擬也明顯細緻得多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=388s\" target=\"_blank\">06:28</a> test time compute 分三種：thinking（推理用的 scratch pad）、tool calling（Claude 跟外部世界的介面）、text（最後輸出）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 回答時花的 token 分三塊：thinking 是它打草稿、推理的地方；tool calling 是它去查資料、跑程式這類和外界的互動；text 是你最後看到的回答。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=480s\" target=\"_blank\">08:00</a> 使用者有兩種方式調整 test time compute：effort（從 low 到 max 的轉盤）和 budgets（max token 限制或 API 的 task budgets）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 調整的方法有兩種：effort 是轉盤，從 low 到 max 決定它多認真；budgets 是設上限，例如最多只能用幾個 token，或在 API（給開發者串接用的介面）裡用 task budgets 管得更嚴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=606s\" target=\"_blank\">10:06</a> adaptive thinking 是 interleaved thinking 的進化版：由 Claude 自己決定什麼時候要思考，也可以完全不思考。它不是 model router，而且相對 interleaved thinking 是 Pareto efficient<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ interleaved thinking 是每用完一次工具就想一下；adaptive thinking 讓 Claude 自己決定要不要想。它不是幫你換模型的 router，而且比舊做法更省，表現也沒有變差。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=727s\" target=\"_blank\">12:07</a> thinking 開關並不能代表 Claude 應該投入多少 effort。關掉 extended thinking 只是拿掉 Claude 的一項核心能力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 關掉 thinking 不等於叫它少出點力，調整認真程度要靠 effort。關掉 extended thinking（延伸思考）只是拿走它先打草稿再回答的能力。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=1002s\" target=\"_blank\">16:42</a> effort 選擇原則：max 可能報酬遞減；extra high 是 Claude Code 和 claude.ai 的預設；需要任何智慧就用 high；low 適合對延遲敏感的分類、摘要、資料擷取<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開到 max，多花的成本換到的進步可能越來越少。Claude Code（寫程式的工具）和 claude.ai 預設用 extra high；需要動腦就選 high；分類、摘要、抓資料這類要快的工作用 low。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=1096s\" target=\"_blank\">18:16</a> Haiku 4.5 花的時間大約一半，token 差不多，但結果差很多。只要任務需要一點智慧，即使 effort 設 low，用大模型通常比較好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 拿小模型 Haiku 4.5 來比，時間大約省一半，token 差不多，結果卻差很多。所以只要任務需要一點腦力，用大模型開 low，通常還是比用小模型好。</span>\n\n📘 術語<br><b>test time compute</b>（推論時運算）：在推論時多花 token，讓模型把問題解得更好<br><b>effort</b>（努力程度）：從 low 到 max 的轉盤，effort 越高，工作越久、花的 token 越多<br><b>interleaved thinking</b>（交錯式思考）：讓 Claude 每次 tool call 之後都能有一個思考步驟<br><b>adaptive thinking</b>（自適應思考）：給 Claude 一個 thinking 工具，由它自己決定何時思考、要不要思考<br><b>task budgets</b>（任務預算）：API 裡的功能，用比較嚴格的限制來約束 Claude 的工作方式\n\n📺 <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=0s\" target=\"_blank\">The thinking lever</a>（2026/05/20 · 21 分鐘）",
        "tip": "💡 你可以怎麼用：分類、摘要、整理資料這種要快的事可以開 low；寫報告、做分析或寫程式就用 high，不要為了求快改用小模型。想開 max 之前先用 high 試試看，比比看結果是不是真的有差。",
        "quiz": {
          "q": "根據講者，Claude Code 和 claude.ai 預設使用哪個 effort 等級？",
          "options": [
            "max",
            "high",
            "low",
            "extra high"
          ],
          "correct": 3,
          "why": "[16:42] 講者說 extra high 是 Claude Code 和 claude.ai 的預設，是智慧、速度和 token 數之間最好的取捨之一"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_tP4MGcJ80Y0",
        "title": "🎬 能力曲線（The capability curve）",
        "category": "提示與模型選擇",
        "text": "<b>模型進步到哪些地方，以及開發者該怎麼跟著調整產品</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講：短短一年，Claude 在寫程式、規劃和長時間工作這幾件事上進步了多少，還有既然模型變強了，做產品或寫指令的人要怎麼跟著改。重點是：很多以前為了遷就模型而做的設計，現在反而會綁住它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=200s\" target=\"_blank\">03:20</a> SWE-bench Verified 衡量模型自主完成軟體 PR 的能力：約一年前的 Sonnet 3.7 得 62%，現在的 Opus 4.7 得 87%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SWE-bench Verified 是一套測驗，看模型能不能自己完成工程師的修改任務（PR：一包準備併進專案的程式改動）。一年前的 Sonnet 3.7 答對 62%，現在的 Opus 4.7 到 87%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=296s\" target=\"_blank\">04:56</a> Demo：在 Claude Code 裡用單一 prompt 重做 Claude.ai。Sonnet 4 只做出陽春介面，而且一送出就報錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是讓 Claude 直接在電腦上寫程式的工具。示範時只用一句指令（prompt），叫它重做 Claude.ai 網站。舊的 Sonnet 4 做出很陽春的畫面，一送出訊息就出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=326s\" target=\"_blank\">05:26</a> Opus 4.7 做出有 Claude 配色、API 真的會回應、記得舊對話、有深色模式的版本，而且程式碼行數更少<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 4.7 做的版本像真的一樣：配色對、API（程式跟 Claude 溝通的接口）真的會回話、記得舊對話、有深色模式。功能更多，程式碼卻更少。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=390s\" target=\"_blank\">06:30</a> 進步一是規劃能力：新模型會先思考、擬好計畫才動手。開發者應該給 Claude 思考的時間，不要逼它直接行動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新模型會先想清楚步驟、擬好計畫，才開始動手。所以用的時候別逼它「馬上做」，先讓它想、讓它規劃，結果通常比較穩。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=454s\" target=\"_blank\">07:34</a> 進步二是錯誤恢復：舊模型容易陷入 doom loop，新模型能退回來換條路，任務表現更好，浪費的 tokens 也更少<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ doom loop 是模型卡在錯誤裡一直打轉，最後只能清空重來。新模型發現走不通會退回來換個方法，比較常成功，也少花 tokens（模型處理文字的計量單位，跟費用有關）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=485s\" target=\"_blank\">08:05</a> 進步三是長時間注意力：能在數十萬甚至一百萬 tokens 內記住 system prompt，不太需要盯著 context window 或把工作切塊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ system prompt 是一開始給模型的基本規則。新模型做到幾十萬、甚至一百萬 tokens 都還記得它，比較不用擔心 context window（一次能記住的內容範圍）塞爆，也不太需要把工作切小。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=575s\" target=\"_blank\">09:35</a> 建議先從 evals 下手：要貼近真實產品的使用分佈、不能飽和，並拿最新的前沿模型來測；換上最新模型有時就是最好的優化<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ evals 是你自己設計的一套測試題，用來檢查產品好不好用。題目要像真實使用者會遇到的、不能簡單到每題都滿分，而且要用最新的模型測。有時候換上新模型，就是最有效的改進。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=668s\" target=\"_blank\">11:08</a> 重新檢視 scaffolding 和 prompts，拿掉不再需要的部分；給模型發揮空間：adaptive thinking、effort parameter、auto mode，並讓 agent 能檢查自己的產出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前為了補舊模型不足加的 scaffolding（周邊程式、指令和工具設定）可能已經多餘，用不到就刪。然後放手：讓它自己調思考深淺、用 effort 設定投入多少、用 auto mode 判斷哪些動作要人核准，也讓它自己檢查做出來的成果。</span>\n\n📘 術語<br><b>SWE-bench Verified</b>（SWE-bench Verified 基準測試）：衡量模型自主完成軟體 PR 能力的評測<br><b>doom loop</b>（死亡迴圈）：模型遇到問題後提出的解法無效，就卡住一直打轉，最後只能清空 context 重來<br><b>scaffolding</b>（鷹架）：圍繞模型、引導它達成目標的程式碼、prompts、skills 和工具設定<br><b>effort parameter</b>（effort 參數）：用來調整 Claude 思考用的 tokens 量和行動次數<br><b>auto mode</b>（自動模式）：Claude Code 的功能：用分類器判斷每個工具呼叫需不需要人明確核准\n\n📺 <a href=\"https://www.youtube.com/watch?v=tP4MGcJ80Y0&t=0s\" target=\"_blank\">The capability curve</a>（2026/05/08 · 15 分鐘）",
        "tip": "💡 你可以怎麼用：下次交代 Claude 做比較大的事，先說「先列計畫給我看，再開始做」。另外，把以前為了防它出錯寫得很囉嗦的指令拿出來，用新模型重跑幾個你真正常做的任務，試著刪掉多餘的規定，看結果有沒有變好。",
        "quiz": {
          "q": "講者說 Claude Code 的 auto mode 是怎麼讓 Claude 更自主地長時間執行的？",
          "options": [
            "用分類器檢查 Claude 提出的工具呼叫，判斷是否需要人明確核准",
            "自動把長任務切成多個 subagent 平行處理",
            "每隔固定 tokens 自動清空 context window",
            "自動切換成最新的前沿模型來執行任務"
          ],
          "correct": 0,
          "why": "[13:13] 講者說 auto mode 會對 Claude 提出的工具呼叫跑分類器，判斷是否需要人明確核准，讓 Claude 能在背景跑得更久"
        },
        "status": "old"
      },
      {
        "id": "yt_OXJO4LldSnc",
        "title": "🎬 思考的槓桿（The thinking lever）",
        "category": "提示與模型選擇",
        "text": "<b>Claude 如何在推論時運用 test time compute，以及怎麼用 effort、budget 控制</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是 Claude 的「思考槓桿」：回答時讓它多花點力氣，結果通常會更好。影片也說明你可以用哪些設定，控制它要想多久、花多少。常用 AI 的人看完，就知道什麼時候該讓它慢慢想，什麼時候該讓它快一點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=72s\" target=\"_blank\">01:12</a> Scaling test time compute：模型從 Haiku、Sonnet 到 Opus 越聰明，分數越高；同一個 Opus 花越多時間處理問題，分數也越高<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku、Sonnet、Opus 是 Claude 由小到大的三個型號，越大越聰明，分數越高。test time compute 是它回答時額外花的運算量；同一個 Opus 想得越久，分數也越高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=162s\" target=\"_blank\">02:42</a> 用 Opus 4.7 做交通號誌模擬：low 約 50 秒、約 4,600 output tokens；high 時間與 token 約兩倍；max 約 10 倍，結果最好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是 AI 計算文字量的單位。影片用 Opus 4.7 寫交通號誌模擬程式：low 約 50 秒、產出約 4,600 個 token；high 的時間和 token 大約翻倍；max 約 10 倍，成品最好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=352s\" target=\"_blank\">05:52</a> Claude 花的 token 分三類：thinking（內心獨白）、tool calling（和環境互動）、text（和使用者溝通）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 花的 token 有三種用途：thinking 是自己在心裡推理、打草稿；tool calling 是呼叫工具做事，例如搜尋或跑程式；text 是最後回給你看的文字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=508s\" target=\"_blank\">08:28</a> 使用者可以用 effort 設定時間、成本和品質的取捨，也能用 task budgets 設定 token 上限，例如 100,000 tokens<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ effort 是努力程度的設定，讓你決定比較重視快、省錢還是品質。task budgets 是替一項任務設 token 上限，例如最多 100,000 個 token，超過就不再多花。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=659s\" target=\"_blank\">10:59</a> Adaptive thinking 是 interleaved thinking 的下一步：Claude 可以隨時思考，順序不受限，簡單問題也可以不思考；它不是 model router<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ adaptive thinking 讓 Claude 自己決定何時想、想多少，簡單問題可以不想。它比 interleaved thinking（只在兩次用工具之間思考）更自由，也不是把題目分派給不同模型的 model router。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=814s\" target=\"_blank\">13:34</a> Thinking 開關不適合拿來代替 effort dial：它限制的是 Claude「怎麼做事」而不是「多努力」；effort 會同時調整 thinking、tool use 和 text<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 單純關掉 thinking，只是不准它先打草稿，改變的是做事方式，不是努力程度。想省時間或省錢，應該調 effort，它會一起調整思考、用工具和回覆的份量。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=1125s\" target=\"_blank\">18:45</a> extra high 是 Opus 4.7 新增的等級，最適合大多數 coding 和 agentic 用途，也是 Claude Code、Claude.ai 裡 Opus 4.7 的預設；high 適合當測試起點<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ extra high 是 Opus 4.7 新增的等級，最適合寫程式（coding）和讓 AI 自己分好幾步完成任務（agentic），也是 Claude Code、Claude.ai 裡 Opus 4.7 的預設。自己測試時建議先從 high 開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=1277s\" target=\"_blank\">21:17</a> 小模型適合追求快速 time to first token；大模型搭配低 effort 適合追求快速 time to last token；可以的話兩者都做 eval 比較<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想要快點看到第一個字出現（time to first token），就選小模型；想要整份答案快點完成（time to last token），可以用大模型配低 effort。有條件的話，兩種都實際測試（eval）比比看。</span>\n\n📘 術語<br><b>test time compute</b>（推論時運算）：Claude 在推論時為了解決問題而花費的任何 token<br><b>adaptive thinking</b>（自適應思考）：Claude 可以在任何適當的時機思考，思考多少、順序都不受限；簡單問題也可以不思考<br><b>interleaved thinking</b>（交錯式思考）：讓 Claude 在兩次 tool call 之間思考前一個結果，再決定下一步<br><b>effort</b>（努力程度設定）：告訴 Claude 要怎麼在時間、成本和品質之間取捨<br><b>task budgets</b>（任務預算）：告訴 Claude 處理一項任務最多能花多少 token\n\n📺 <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=0s\" target=\"_blank\">The thinking lever</a>（2026/05/08 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：遇到寫程式、多步驟任務這類難題，就把 effort 調高或維持預設；日常查資料、改寫短文，用低 effort 或小模型就夠了。拿不定主意時，同一件事用兩種設定各跑一次，比較品質和等待時間再決定。",
        "quiz": {
          "q": "根據影片，Claude Code 和 Claude.ai 裡 Opus 4.7 的預設 effort 等級是哪一個？",
          "options": [
            "medium",
            "high",
            "max",
            "extra high"
          ],
          "correct": 3,
          "why": "講者說 extra high 是 Opus 4.7 新增的設定，目前是 Claude Code 和 Claude.ai 裡 Opus 4.7 的預設（18:45）"
        },
        "status": "long",
        "parts": 2
      }
    ]
  },
  yt_product: {
    "id": "yt_product",
    "name": "📺 產品功能・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_V-OOEC5RNaQ",
        "title": "🎬 用 Claude for Teachers 更聰明地備課",
        "category": "產品功能",
        "text": "<b>小學老師示範用語音讓 Claude 回顧課堂、產出隔天教案，並設定每天自動執行</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片跟著一位美國小學老師過完一天：她下課後用說的交代 Claude 回顧今天的課，再寫好明天的教案，最後設定成每天自動跑。值得看的地方是，AI 不只回答一次問題，還接上她平常用的工具，固定時間自己把事做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=0s\" target=\"_blank\">00:00</a> Karina 是小學老師，多數學生是英語學習者；Claude for Teachers 能串接她既有的工具，並依她自訂的時間表持續幫她做事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Karina 是小學老師，班上多數孩子的母語不是英文。Claude for Teachers 是給老師用的 Claude，能連上她平常用的工具，還能照她排好的時間固定幫她做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=0s\" target=\"_blank\">00:00</a> 她用語音下一個指令：從 TeachFX 抓最新的二年級 ELA 課程，分析學生反應、說話時間、提問和參與度<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她用說的下指令：去 TeachFX（會錄下課堂實況的工具）抓最新一堂二年級 ELA（英語文課）的紀錄，分析學生反應、師生各講多少話、提了哪些問題、參與度如何。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=31s\" target=\"_blank\">00:31</a> 同一個指令還要求起草明天的教案，對齊州標準，並符合加州 ELD 標準；Claude 一次交回教學回饋摘要和已調整好的教案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同一句話裡，她也請 Claude 寫明天的教案，要符合州課程標準和 ELD 標準（加州給英語學習者的學習標準）。Claude 一次交回兩樣：上課回饋摘要和調整好的教案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=62s\" target=\"_blank\">01:02</a> 教學回饋摘要：開場和 turn-and-talk 效果好，學生說得比老師多；待改進的是等待時間不夠，明天目標是提問後等五秒再點人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做得好的是開場和 turn-and-talk（讓學生轉頭跟旁邊同學討論），師生說話比例顯示學生講得比老師多。要改的是 wait time（提問後留給學生想的時間）太短，明天目標是等五秒再點人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=92s\" target=\"_blank\">01:32</a> 不用等每個月跟教學教練面談，馬上就能拿到回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前要等每個月跟教學教練（專門指導老師怎麼教的人）面談，才有人給意見。現在上完課馬上有具體回饋，隔天就能改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=92s\" target=\"_blank\">01:32</a> 教案用了內建的 lesson planning skill，並參考 Learning Commons knowledge graph 加入 ELD 支援；教學回饋也直接寫進教案裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫教案用了內建的 lesson planning skill（事先設定好的寫教案流程），並參考 Learning Commons knowledge graph 這個資料來源補上 ELD 支援；回饋裡要改的地方也直接寫進教案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=122s\" target=\"_blank\">02:02</a> 她對 Claude 說「每個平日下午 4 點做一次」，先手動跑一次確認，之後開車回家時 Claude 就會自動處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她跟 Claude 說「每個平日下午 4 點做一次」，先手動跑一次，確認結果沒問題。之後她開車回家的路上，Claude 會自己把回顧和備課做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=122s\" target=\"_blank\">02:02</a> Claude for Teachers 對所有通過驗證的美國 K-12 老師免費<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 美國 K-12（幼稚園到高三）的老師，只要通過身分驗證，就能免費用 Claude for Teachers。</span>\n\n📘 術語<br><b>TeachFX</b>（TeachFX）：Claude 從這裡找到前一天的課程，也就是課堂實際進行情況的錄音<br><b>ELD standards</b>（ELD 標準）：加州針對英語學習者的標準，教案要符合它<br><b>teacher-to-student talk ratio</b>（師生說話比例）：比較老師和學生各說了多少話；學生說得比老師多就是她想看到的<br><b>wait time</b>（等待時間）：提問後留給學生思考的時間；她的目標是提問後等五秒再點人<br><b>Learning Commons knowledge graph</b>（Learning Commons 知識圖譜）：Claude 加入加州 ELD 支援時參考的資料來源\n\n📺 <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=0s\" target=\"_blank\">Plan smarter with Claude for Teachers</a>（2026/07/14 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：如果妳有每天都要做的整理工作（例如彙整當天訊息、寫隔天待辦），可以照 Karina 的做法：用一句話把「去哪裡抓資料、看什麼、產出什麼」交代清楚，先手動跑一次確認結果，沒問題再請 Claude 設定固定時間自動做。",
        "quiz": {
          "q": "根據教學回饋摘要，Karina 明天要改進的「一件事」是什麼？",
          "options": [
            "把 turn-and-talk 改成個人練習",
            "讓老師多說一點，增加講解時間",
            "減少開放式問題的數量",
            "提問後等五秒再點學生"
          ],
          "correct": 3,
          "why": "[01:02] 回饋指出她問了很多很好的開放式問題，但沒有留足夠的等待時間，所以明天的目標是「Ask the question then wait five seconds before I call on anyone」"
        },
        "status": "old"
      },
      {
        "id": "yt_MhfnicQVkgY",
        "title": "🎬 與 @Claude 一起工作的未來",
        "category": "產品功能",
        "text": "<b>介紹 Claude Tag：在頻道中主動出手、有記憶、多人協作的 Claude</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 介紹 Claude Tag 的影片。Claude Tag 就是把 Claude 拉進團隊的聊天頻道，它會自己判斷什麼時候該出手，記得大家交代過的事，還能讓好幾個人一起指揮它。值得看的原因是，它讓你看到 AI 正在從「你問它才答」，變成像同事一樣主動接工作、一路做到完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=30s\" target=\"_blank\">00:30</a> 寫程式的 AI 從 typeahead 逐行補字，進步到寫出整個函式、檔案、功能；現在 Tag 能完成整個功能、跑完整個實驗、做資料分析，兩年內有兩次大躍進<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩年前的 typeahead 就是打字時的自動補完：你決定要寫哪一行，AI 幫你把那行補完。後來 AI 能寫出整個函式（一段完成特定工作的程式），甚至整份檔案。現在 Tag 能直接交出完整的功能、實驗和資料分析。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=91s\" target=\"_blank\">01:31</a> 以前要打開 Claude 提問它才做事；Claude Tag 會主動判斷何時加入，就算工作要花好幾天或好幾週也會做完並追蹤，還會記住指示供下次使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前要你先打開 Claude 問，它才會動。Tag 會自己看頻道，判斷該不該插手。就算工作要跑好幾天、好幾週，它也會做完、回頭追進度，還會把你交代的做法記下來，下次照著做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=152s\" target=\"_blank\">02:32</a> 根據最新 METR evals，最新模型一次可以連續工作 16 小時；在 Claude Tag 裡，Claude 還能自己排程，幾天、幾週或幾個月後再回來追蹤<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ METR evals 是用來測模型能自己連續做事多久的評測，結果是最新模型能一口氣做 16 小時。Tag 裡的 Claude 還會自己排時間，幾天、幾週到幾個月後再回來看進度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=217s\" target=\"_blank\">03:37</a> 模型有記憶，能記住所有使用者給過的指示。例如在頻道裡要它只監控某類問題，它會一直記得；之後有人擴大範圍，它也會跟著調整<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它記得頻道裡每個人交代過的事。例如你說「只盯付款相關的問題」，它就會一直照做。後來同事說「登入問題也要看」，它會跟著擴大範圍，不用每次重講。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=249s\" target=\"_blank\">04:09</a> Claude 受過訓練，懂得判斷什麼時候需要它、什麼時候該退居幕後；覺得它太常或太少加入，直接告訴它，它會記住<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它被訓練成會看場合：需要它的時候出聲，不需要就安靜待著。如果你覺得它太常插話或太少出現，直接在頻道裡跟它說，它會記住並調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=402s\" target=\"_blank\">06:42</a> Chat、Cowork、Claude Code 都要自己記得去打開，比較被動；Claude Tag 可以接受較高層次的目標（例如為頻道裡每個 bug 開 PR），而且支援多人一起引導<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Chat、Cowork、Claude Code 這幾個 Claude 產品，都要你自己打開才會動。Tag 能接大目標，例如「頻道裡每個 bug（程式錯誤）都開一個 PR（送出修改、請人審核）」，而且大家能一起指揮它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=527s\" target=\"_blank\">08:47</a> 在他們所屬的 product org 裡，約 65% 的 PR 是 Tag 寫的，比例還在持續上升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在他們自己的產品部門（product org）裡，大約 65% 的 PR 是 Tag 寫的，比例還在上升。也就是說，寫程式的主力漸漸變成 AI，人比較多是在交代任務和審核結果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=620s\" target=\"_blank\">10:20</a> Tag 跑在跟行動版、桌面 app 相同的遠端 sandbox，用的是同一個 agent SDK，能驗證自己的成果；目前已在 Slack 推出，接下來會支援 Microsoft Teams 等平台<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Tag 跑在隔離的雲端工作區（sandbox），跟手機、桌面 app 用的是同一套，也用同一套打造 AI 代理的工具包（agent SDK），所以能自己驗收成果。它已經在職場聊天軟體 Slack 上線，接下來是 Teams。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（頻道裡的 Claude））：把 Claude 加進頻道，它會主動加入、做好工作、後續追蹤並記住指示，而且支援多人協作<br><b>typeahead</b>（輸入預測補全）：兩年前工程師能用的 AI，由人決定要寫哪一行，AI 只幫忙把那一行寫出來<br><b>multi-player</b>（多人協作）：每個人都看得到、也都能參與，多人一起引導同一個 session，得到更好的成果<br><b>METR evals</b>（METR 評測）：用來評估模型能自主工作多久；最新模型可連續工作 16 小時\n\n📺 <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=0s\" target=\"_blank\">The future of work with @Claude</a>（2026/07/02 · 11 分鐘）",
        "tip": "💡 你可以怎麼用：如果你的團隊用 Slack，可以先把 Claude Tag 加進一個頻道，交給它一件範圍清楚的事，例如「整理每天客戶回報的問題」。之後看它插手的次數，嫌太多或太少就直接跟它說，慢慢調成你要的樣子。",
        "quiz": {
          "q": "影片提到，在講者所屬的 product org 中，大約有多少比例的 PR 是由 Tag 寫的？",
          "options": [
            "約 45%",
            "約 65%",
            "約 85%",
            "約 25%"
          ],
          "correct": 1,
          "why": "[08:47] 講者說在 product org 裡，Tag 寫的 PR「I think it's like 65% now」，而且還在持續上升"
        },
        "status": "old"
      },
      {
        "id": "yt_VojDzHaciKQ",
        "title": "🎬 直接在你工作的地方把 Claude tag 進來",
        "category": "產品功能",
        "text": "<b>發表 Claude Tag：在團隊頻道裡 tag Claude，讓它和團隊一起協作</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 發表新功能 Claude Tag 的影片：在團隊平常聊天的頻道裡 tag Claude，它就能加入討論、直接動手做事，不用另外開一個 AI 視窗。影片也講了它能看什麼、不能看什麼，這是公司導入 AI 時最常擔心的事，值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=12s\" target=\"_blank\">00:12</a> Anthropic 負責 Claude Code 的 Lydia 宣布推出 Claude Tag，讓 Claude 直接和團隊一起協作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 讓 AI 幫忙寫程式的工具，由 Lydia 負責。Claude Tag 是新功能，在團隊頻道 tag 它，它就像同事一樣加入工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=12s\" target=\"_blank\">00:12</a> Anthropic 今年大部分時間都在 tag Claude；在 Anthropic 內部，Claude Tag 開了 65% 的產品 pull request<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ pull request（PR）是工程師送出程式修改、請別人審核後再合併的申請。Anthropic 內部產品的修改有 65% 是 Claude 發起的，代表這功能他們自己已經用很久。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=43s\" target=\"_blank\">00:43</a> 示範：Nadia 在群組討論串 tag Claude，Claude 跟上討論、即時回應產品決策，開 PR 並完成修改（Scheduled Exports 功能）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範中 Nadia 在群組討論串 tag Claude，它讀完前面的對話，跟大家來回討論產品要怎麼做，接著直接送出 PR，把「排程匯出」功能改好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=43s\" target=\"_blank\">00:43</a> Claude 知道這個功能是什麼、要改 codebase 的哪裡；它依每個頻道界定範圍與各團隊的 context，並隨著工作進行累積 memory<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 是產品的全部程式碼；context 是做事需要的背景資訊。每個頻道各自劃定 Claude 負責的範圍和背景，它邊做邊記（memory），下次不用重講。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=73s\" target=\"_blank\">01:13</a> Claude 知道自己推上去的修改會影響上市行銷，減少跨團隊溝通的延遲；Priya 不用打開 drive，Claude 自己完成編輯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 知道這次改動會影響上市行銷內容，所以會主動處理。行銷的 Priya 不必自己打開雲端硬碟改文件，Claude 直接改好，少了部門之間來回傳話的時間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=73s\" target=\"_blank\">01:13</a> Claude 有自己的帳號和權限，依團隊、依頻道存取所需系統：legal 頻道看得到合約資訊，engineering 頻道可以改 codebase<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 有自己的帳號，權限跟著團隊和頻道走，像新同事只拿到所屬部門的門禁卡：在法務頻道看得到合約，在工程頻道可以改程式碼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=105s\" target=\"_blank\">01:45</a> 在 legal 頻道叫 Claude 改 codebase，它不會做，因為它根本看不到；memory 也遵守同樣的界線，private channel 或 DM 學到的只留在那裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在法務頻道叫它改程式，它做不到，因為那裡根本沒給它權限。它的記憶也一樣：在私人頻道或私訊（DM，一對一訊息）學到的東西，不會帶到別的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=105s\" target=\"_blank\">01:45</a> 因為 Claude 有自己的帳號，每次使用 credential 都會被記錄；建議先把 Claude 加進一個頻道 tag 看看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ credential 是登入系統用的憑證，像帳號密碼或金鑰。Claude 有自己的帳號，每次用憑證都會留下紀錄，事後查得到是它做的。建議先拉進一個頻道試用。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（tag 標記 Claude））：讓 Claude 直接和你的團隊一起協作，在頻道裡 tag 它進來<br><b>multi-player</b>（多人協作）：Nadia tag Claude 後，Claude 跟上群組討論串，即時回應產品決策<br><b>memory</b>（記憶）：隨著工作進行累積；遵守頻道界線，private channel 或 DM 學到的留在原處<br><b>per-team, per-channel access</b>（依團隊、依頻道授權）：Claude 依團隊與頻道存取所需系統，例如 legal 頻道看得到合約資訊\n\n📺 <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=0s\" target=\"_blank\">Tag Claude in, right where you already work</a>（2026/06/23 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：如果公司開放這個功能，先挑一個小團隊頻道把 Claude 加進去，丟一件小事給它，例如整理討論結論或改一份文件，看它能做到哪裡。也順便確認這個頻道開了哪些權限給它，再決定要不要推廣到其他頻道。",
        "quiz": {
          "q": "在 legal 頻道 tag Claude，要它修改 codebase，會發生什麼事？",
          "options": [
            "Claude 會先請 engineering 團隊核准再修改",
            "Claude 會禮貌地婉拒，但其實有能力修改",
            "Claude 會直接修改，並把紀錄存到 private channel",
            "Claude 不會修改，因為它在那個頻道根本看不到 codebase"
          ],
          "correct": 3,
          "why": "[01:45] 字幕說 Claude 不會修改，「不是因為它有禮貌，而是因為它真的看不到」"
        },
        "status": "old"
      },
      {
        "id": "yt_Uvl-tRga98g",
        "title": "🎬 用 Claude 做設計：從 prompt 到正式上線",
        "category": "產品功能",
        "text": "<b>Anthropic Labs 用小團隊快速迭代打造 Claude Design 的過程與心得</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic Labs（Anthropic 內部用小團隊做實驗性新產品的單位）在分享他們怎麼做出 Claude Design。重點不是功能介紹，而是一套「先做出來、給人用、再快速改」的做事方法。就算不是工程師，做任何專案都用得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=15s\" target=\"_blank\">00:15</a> Claude Design 是 Anthropic Labs 的新產品，可以和 Claude 協作做出設計、原型、投影片、one-pager 等視覺成品。主要由三人團隊花約十週從構想做到上線<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Design 讓你跟 Claude 一起做出設計稿、原型（可以實際點點看的試作版）、投影片和單頁簡介。這麼完整的產品，主要只靠三個人、大約十週就做到上線。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=112s\" target=\"_blank\">01:52</a> Anthropic Labs 自稱 bet factory：由小團隊探索模型的極限並做實驗。有效的就加碼，無效的就收掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ bet factory 直譯是「押注工廠」。很多小團隊各自去試模型能做到什麼，每個點子都像一次下注：有效就多投人力，沒效就收掉，不會因為捨不得而硬撐。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=243s\" target=\"_blank\">04:03</a> 他們不預測未來，只反覆跑「ship、觀察、學習」的循環。Claude Design 在十週內跑了 50 到 100 次<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ship 就是把東西推出去給人用。他們不花時間猜市場要什麼，而是推出、看大家怎麼用、修正，再推出。十週內轉了 50 到 100 圈，幾乎一兩天就一圈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=368s\" target=\"_blank\">06:08</a> 起點是設計師 Nate 花一個週末做出的原型：用 agent SDK 加上很薄的 IDE wrapper 和一個現成的 skill，做完就丟到 Slack 收意見<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設計師 Nate 一個週末就做出原型：用 agent SDK（讓 AI 自己動手做事的工具包）套個陽春介面，加上現成的 skill（教 Claude 做某件事的說明包），就丟到公司群組收意見。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=465s\" target=\"_blank\">07:45</a> 他們不寫 PRD，改用原型，因為文件不夠精確。做法是先錄下討論並轉成逐字稿，再交給 Claude Design，請它給幾個方案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PRD 是產品需求文件，傳統上用來寫清楚要做什麼。但同一份文件，每個人讀完想像的產品都不一樣。所以他們把討論錄音轉成文字交給 Claude Design，直接生出幾個版本來比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=1171s\" target=\"_blank\">19:31</a> 早期做的精細像素控制只有少數 power user 喜歡，其他人都很討厭，一週內就拿掉了。他們因此決定讓工具提升所有人的做工水準，並且盡量開放<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們做過能微調到每個像素的控制，只有少數 power user（很懂工具的重度使用者）喜歡，多數人很討厭，一週就撤掉。之後方向改成讓每個人做出的東西都更精緻，也盡量讓大家都能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=1359s\" target=\"_blank\">22:39</a> Claude Design 週五上線，到下週一已經根據使用者回饋推出 62 項改進<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 週五上線，下週一就根據使用者回饋推出 62 項改進。上線不是終點，而是開始大量學習的起點。真實使用者的反應，比上線前團隊自己想破頭還有用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=1450s\" target=\"_blank\">24:10</a> 講者建議去做「幾乎可行」的東西，因為下一代模型可能會解決工程上解不掉的問題。Claude Design 早期的一些問題就是靠 Opus 4.7 解決的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者建議做「差一點就行」的東西：現在卡住的難題，下一代模型可能就解掉了。Claude Design 早期有些問題，正是換上 Opus 4.7（較新一代的 Claude 模型）才解決。</span>\n\n📘 術語<br><b>bet factory</b>（下注工廠）：Labs 的自稱：很多小團隊一起探索，用實驗判斷每個點子能不能成，決定加碼還是收掉<br><b>PRD</b>（產品需求文件）：講者認為文件不夠精確，每個人讀完想像的產品都不一樣，所以他們改用原型<br><b>pitch-off</b>（提案大會）：Labs 定期聚在一起腦力激盪，拉其他人加入自己想做的專案<br><b>feedback clustering</b>（回饋分群）：團隊花一個下午自建的工具，讓 Claude 分析所有回饋、找出共同趨勢，再給修正建議<br><b>multiplayer</b>（多人協作）：讓多人同時在同一份設計上迭代，一開始是做給團隊自己用的\n\n📺 <a href=\"https://www.youtube.com/watch?v=Uvl-tRga98g&t=0s\" target=\"_blank\">Designing with Claude: From prompt to production</a>（2026/05/22 · 28 分鐘）",
        "tip": "💡 你可以怎麼用：下次要跟別人說明想法時，別只寫文件，先用 Claude 做個粗略的樣品或投影片給同事看，收到意見再改。遇到 AI 現在做不好的事也先記下來，等新模型出來再試一次。",
        "quiz": {
          "q": "Claude Design 週五上線後，到下週一團隊推出了幾項改進？",
          "options": [
            "10 項",
            "62 項",
            "26 項",
            "100 項"
          ],
          "correct": 1,
          "why": "講者說週五上線、到下週一已推出 62 項改進（22:39）"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_EPUg9pmfPk0",
        "title": "🎬 法務團隊如何使用 Claude Cowork",
        "category": "產品功能",
        "text": "<b>Anthropic 內部產品律師示範如何用 Claude Cowork 快速回覆產品團隊的法律問題</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由 Anthropic 公司內部的產品律師 Mark 示範如何使用 Claude Cowork。Claude Cowork 是 Claude 的一種工作模式，能讀取電腦裡的資料夾，也能連結 Gmail 等工作軟體，把一連串工作做完。影片示範的情境是產品團隊臨時來問一個功能的法律問題，Mark 用它在幾分鐘內找回舊資料的脈絡。如果你常要回頭翻舊文件才能回答別人，這支影片很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=11s\" target=\"_blank\">00:11</a> Mark 是 Anthropic 的內部產品律師。一位 PM 用 Slack 問他幾個月前上線的功能，但他手上已經沒有當初寫備忘錄時的背景資料。以前他得先花一小時重讀舊文件才能開始處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM（產品經理，負責規劃產品功能的人）在 Slack（公司用的聊天工具）問 Mark 一個幾個月前上線的功能。Mark 早忘了當時的細節，以前光是重讀舊文件找回狀況，就要先花一小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=41s\" target=\"_blank\">00:41</a> 他在 Claude Cowork 排程任務，每天一早執行，像私人幕僚長一樣整理備忘錄，列出待辦、新事項和急件。這個任務連結了 Gmail，當天 5 個項目依到期順序排列<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mark 設了一個每天早上自動執行的排程任務，讓 Claude 讀他的 Gmail，整理成一份像幕僚準備的早報，分出待辦、新事項和急件。當天共 5 件，依截止時間排好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=41s\" target=\"_blank\">00:41</a> 他最常用的 skill 是 /brief，需要快速掌握某個產品時就會執行。這個 plugin 由他參與打造，依照 Anthropic 法務部門的工作方式設計<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 是事先教會 Claude 的一套固定做法，輸入 /brief 就會啟動，用來快速掌握某個產品。plugin 是把這些 skill 打包起來的外掛，這套由 Mark 參與打造，依照 Anthropic 法務的工作方式設計。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=72s\" target=\"_blank\">01:12</a> 這個 plugin 採開放協定（open protocol），任何人都能打開，依照自家公司的 playbook 客製化。skill 已經知道審查檔案放在哪裡、範本怎麼編排，所以 prompt 可以很短<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開放協定（open protocol）代表規格是公開的，別家公司也能拿去，依照自己的 playbook（內部作業手冊）修改。skill 已經知道舊審查放在哪、範本長什麼樣，所以 prompt（打給 AI 的指令）一兩句就夠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=72s\" target=\"_blank\">01:12</a> Claude 會從資料夾讀取先前的審查，再讀新的 Slack 和 Gmail 對話串，整理出三件事：當初的結論、這次改了什麼、影響分析的哪些部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 先讀資料夾裡的舊審查，再讀 Slack 和 Gmail 上的新討論，整理成三點：當初法律上怎麼判斷、這次功能改了什麼、這些改動會影響原本分析的哪幾個部分。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=104s\" target=\"_blank\">01:44</a> 不用讀完 40 頁備忘錄，brief 會直接指出相關的 3 段，點進去可以看到原文。因為回覆要署名，他一定會親自核對（trust but verify），確保有 human in the loop<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 會從 40 頁備忘錄中標出相關的 3 段，點開就能看原文。回覆要署 Mark 的名，所以他一定親自核對（trust but verify，信任但要查證），讓關鍵判斷一定有人把關，這就是 human in the loop。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=135s\" target=\"_blank\">02:15</a> 確認見解後，他請 Claude 草擬回覆給產品團隊，Claude 會先請他核准。Claude 也能關閉 Jira 票，讓團隊之後遇到同類問題時有脈絡可查<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 確認判斷沒問題後，Mark 請 Claude 草擬回覆給產品團隊，送出前 Claude 會先徵求他同意。Claude 也能關閉 Jira（追蹤工作事項的系統）上的這張票，留下紀錄供之後參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=135s\" target=\"_blank\">02:15</a> 這樣能累積一套知識庫，法務部門的人，必要時全公司的人都能查閱，避免形成資訊孤島<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個問題的處理過程都留下紀錄，慢慢累積成知識庫，法務同事、必要時全公司都查得到。這樣就不會形成資訊孤島（information silos），也就是答案只存在某個人的腦袋或信箱裡。</span>\n\n📘 術語<br><b>/brief</b>（/brief 指令（skill））：需要快速掌握特定產品時使用，會整理出當初的結論、這次的變更和受影響的部分<br><b>human in the loop</b>（人類參與把關）：回覆要以律師本人名義送出，所以要親自核對原文，秉持 trust but verify<br><b>information silos</b>（資訊孤島）：把結果記錄到 Jira 票並累積成知識庫，讓法務部門乃至全公司都能查閱，避免形成孤島\n\n📺 <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=0s\" target=\"_blank\">Claude Cowork for legal teams</a>（2026/05/18 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：先挑一件你每週都在做、每次都得翻舊資料的事，把「資料放在哪、要整理成哪幾點」寫成固定指令交給 Claude。它給的重點一定要點回原文核對過，再用自己的名義送出。",
        "quiz": {
          "q": "影片中 Mark 提到 Anthropic 用哪個工具追蹤票務，並讓 Claude 幫忙關閉票？",
          "options": [
            "Linear",
            "Asana",
            "Jira",
            "Notion"
          ],
          "correct": 2,
          "why": "[02:15] Mark 說「We track tickets in Jira at Anthropic, so I can also have it close out our ticket.」"
        },
        "status": "old"
      },
      {
        "id": "yt_Lbml7IuGJYw",
        "title": "🎬 開始使用 Claude Cowork",
        "category": "產品功能",
        "text": "<b>介紹 Claude Cowork 的設定方式，並示範如何讓 Claude 直接整理本機檔案</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Cowork：Claude 桌面版裡的「交辦模式」，你可以把一整件事交給 Claude，讓它自己做完。影片從開啟方式、權限設定講到實際整理資料夾。如果你用 Claude 還停在一問一答，看完會知道怎麼讓它直接在你電腦上動手做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=1s\" target=\"_blank\">00:01</a> Cowork 可以把完整任務交給 Claude。本機檔案它能直接找、直接改；雲端上的東西透過 Google Drive、Notion、Slack 等服務連接；瀏覽器上的則透過 Claude in Chrome 處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cowork 能把一整件事交給 Claude 做完。電腦裡的檔案它可以直接找、直接改。雲端資料（例如 Google 雲端硬碟、Notion 筆記、Slack 對話）要先接上。網頁上的事交給 Chrome 擴充功能 Claude in Chrome 處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=1s\" target=\"_blank\">00:01</a> Claude Cowork 已在 macOS 和 Windows 版的 Claude Desktop app 全面開放，適用 Pro、Max、Team、Enterprise 使用者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Desktop 是裝在電腦上的 Claude 應用程式，不是網頁版。Mac 和 Windows 都能用，但要付費方案：Pro、Max 是個人訂閱，Team、Enterprise 是團隊和公司方案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=41s\" target=\"_blank\">00:41</a> 打開 Claude Desktop，點 Cowork 分頁。一般聊天是和 Claude 一步一步合作；Cowork 則是把任務交出去，由 Claude 處理剩下的部分，你可以去忙別的事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩者的差別在合作方式。一般聊天像跟同事你一句我一句慢慢討論；Cowork 像把工作交給助理，交代完你就去忙別的，剩下的由它處理。入口是桌面 app 裡的 Cowork 分頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=41s\" target=\"_blank\">00:41</a> 第一步：給 Claude 存取電腦上某個資料夾的權限。它會先徵求同意，才修改檔案系統，之後就能直接讀取、建立、編輯那個資料夾裡的檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先指定一個資料夾給它用，等於劃好它的工作範圍。它要改檔案之前會先問你，你同意後，它才能在這個資料夾裡讀檔、新增檔案、修改內容。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=73s\" target=\"_blank\">01:13</a> 可以把常用資料夾加到最愛，或選多個資料夾。第二步：連接工具（connectors）；第三步：如果已設定 Claude in Chrome，也能處理瀏覽器上的任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常用資料夾可以加到最愛，也能一次選好幾個。第二步是接 connectors，也就是把 Claude 連到你平常用的服務，讓它看得到工作背景。第三步是裝好 Claude in Chrome，網頁上的事也能交給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=106s\" target=\"_blank\">01:46</a> 在 Settings 的 Cowork 分頁可以設定全域指示。要注意：Cowork 的 session 存在本機裝置上，Claude 執行任務時桌面 app 必須保持開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定裡可以寫 global instructions，就是每次任務都會自動套用的固定交代，例如你的職務、檔案要存成 Word。session 是每次任務的紀錄，存在你自己的電腦上，所以它做事時 app 不能關。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=141s\" target=\"_blank\">02:21</a> 示範整理 Downloads 資料夾：先要 Claude 掃描內容、提出計畫。Claude 標出四個疑似重複的檔案，使用者請它把其中兩個移到 review 資料夾，不要刪除<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範整理「下載」資料夾：先請 Claude 看過一遍、提出方案，不急著動手。它找出四個疑似重複的檔案，使用者只讓它把其中兩個搬到 review（待確認）資料夾，先不刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=201s\" target=\"_blank\">03:21</a> Cowork 的核心流程：Claude 先提出計畫，等你核准才動手；你可以調整計畫、改變做法，或叫它跳過某些步驟。進度可以在右上角查看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ core Cowork loop 是它固定的做事順序：先交計畫，你同意了才執行。計畫不滿意可以改、換做法，或叫它跳過某幾步。想知道做到哪裡，看畫面右上角的進度就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=234s\" target=\"_blank\">03:54</a> 建議先從範圍明確的任務開始，並且一定要檢查 Claude 的產出。你交出去的是工作，不是判斷<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始先挑範圍小、目標清楚的事，例如整理某一個資料夾，不要一開口就叫它整理整台電腦。做完一定要自己檢查：它可以幫你動手，但哪些該留、做得對不對，還是由你決定。</span>\n\n📘 術語<br><b>connectors</b>（連接器）：把 Claude 連到各種服務，讓它從你平常工作的地方取得脈絡<br><b>Claude in Chrome</b>（Chrome 版 Claude）：設定好之後，Cowork 可以用它處理瀏覽器任務：讀網頁、從網站擷取資料、在分頁之間切換<br><b>global instructions</b>（全域指示）：在 Settings 的 Cowork 分頁設定，套用到每個 session，例如你的職務背景，或指定用 Word 檔而不是 markdown 建立檔案<br><b>core Cowork loop</b>（Cowork 核心流程）：Claude 先提出計畫，等你核准後才動手，然後直接在檔案系統裡執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=0s\" target=\"_blank\">Getting started with Claude Cowork</a>（2026/05/08 · 4 分鐘）",
        "tip": "💡 你可以怎麼用：可以先拿「下載」資料夾練習：請 Cowork「先掃描、列出整理計畫，重複的檔案搬進待確認資料夾，不要刪」，看過計畫再同意，做完再自己檢查一次。順手在設定裡寫好 global instructions，例如你的職務、檔案一律存成 Word，以後每次都不用重講。",
        "quiz": {
          "q": "根據影片，Claude Cowork 的 session 存放在哪裡？",
          "options": [
            "存在 Anthropic 的雲端伺服器",
            "存在 Claude in Chrome 的瀏覽器紀錄裡",
            "存在本機裝置上",
            "自動同步到 Google Drive"
          ],
          "correct": 2,
          "why": "[01:46] 字幕說 \"your Cowork sessions are stored locally on your device\"，並且提醒 Claude 執行任務時桌面 app 必須保持開啟。"
        },
        "status": "old"
      },
      {
        "id": "yt_TxS-1invhzg",
        "title": "🎬 用 Claude 製作 PowerPoint 簡報",
        "category": "產品功能",
        "text": "<b>示範 Claude in PowerPoint 如何依品牌範本產生並修改整份簡報</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼在 PowerPoint 裡直接請 Claude 做一整份簡報，做出來的樣子會照公司的品牌範本走。如果你常做簡報，又常把時間花在對齊字型、調顏色、搬投影片，看完就知道哪些雜事可以交給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=2s\" target=\"_blank\">00:02</a> Claude in PowerPoint 是 AI agent，會讀取投影片版面、字型和配色，產生並修改符合品牌風格的投影片<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude in PowerPoint 就是裝在 PowerPoint 裡的 Claude。AI agent 是指會自己動手做事的 AI，不只是回答問題。它會先看懂你簡報的版面、字型和顏色，再照這套風格做新的投影片或修改舊的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=2s\" target=\"_blank\">00:02</a> Claude 知道你選取的是哪張投影片、哪個物件，也能把條列清單轉成可以直接編輯的圖表<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你點了哪張投影片、哪個文字框，它就知道你指的是哪一個，不用再描述位置。它也能把一串條列文字變成圖表，而且是還能改數字、改樣式的 PowerPoint 圖表，不是一張改不了的圖片。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=33s\" target=\"_blank\">00:33</a> 可以用加號按鈕上傳其他檔案，給 Claude 更多脈絡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對話框旁邊的加號可以上傳其他檔案，例如報告或資料表。等於把參考資料交給它，它做簡報時就有依據，不用全靠自己猜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=33s\" target=\"_blank\">00:33</a> 示範：在品牌範本裡要求產生 10 張評估 fintech 產業的簡報，並指定主題與「分析、以數據為本」的語氣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範者在品牌範本裡（template，就是公司做好的版面和配色樣板）請它做 10 張評估 fintech（金融科技，像行動支付、網路銀行）產業的簡報，也指定了主題和「分析、以數據為本」的語氣。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=63s\" target=\"_blank\">01:03</a> 產出的字型、顏色、間距都和範本一致；Claude 修改前會先徵求同意，也會說明資料來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做出來的頁面字型、顏色、間距都跟範本一樣，不用自己再調。它要改你的簡報之前會先問你同不同意，也會告訴你資料從哪裡來，方便你自己查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=123s\" target=\"_blank\">02:03</a> 摘要頁有六點太多，要求改成三個重點（粗體標題＋一句說明），版面維持不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ executive summary（摘要頁）是接在標題頁後面、讓人一眼看懂結論的那一頁。原本塞了六點太多，示範者請它濃縮成三點，每點一個粗體標題加一句說明，而且版面不能跑掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=154s\" target=\"_blank\">02:34</a> 第 4、5 張內容大幅重疊，要求合併成一張；Claude 刪除多出來的投影片前會先詢問<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第 4、5 張講的內容大半重複，示範者請它合併成一張。合併後多出來的那張，它刪除之前會先問你，不會自己偷偷刪掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=184s\" target=\"_blank\">03:04</a> 把法規環境那張移到市場規模之後，讓論述順序更合理；Claude 負責機械性工作，並維持範本的完整性<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把講法規環境的那張移到市場規模後面，先講市場有多大、再講有哪些規範，論述會比較順。搬移、排版這些機械性的工作交給 Claude，它也會顧好範本格式；怎麼講由你決定。</span>\n\n📘 術語<br><b>Claude in PowerPoint</b>（PowerPoint 裡的 Claude）：會讀取版面、字型、配色，並產生、修改符合品牌風格投影片的 AI agent<br><b>template</b>（範本）：已經載入的品牌範本，內含現成的投影片版面和配色<br><b>executive summary</b>（執行摘要）：產出的簡報裡，接在標題頁後面的摘要投影片\n\n📺 <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=0s\" target=\"_blank\">Building a PowerPoint with Claude</a>（2026/04/16 · 4 分鐘）",
        "tip": "💡 你可以怎麼用：下次做簡報，先打開公司的範本，用一句話講清楚要幾張、主題是什麼、語氣要怎樣，讓 Claude 先做出初稿。之後直接點選要改的那張，給它具體的指令，例如「改成三點，每點一個粗體標題加一句說明」。",
        "quiz": {
          "q": "影片裡，Claude 把第 4、5 張投影片合併成一張後，對多出來的那張投影片怎麼處理？",
          "options": [
            "把它移到簡報最後",
            "直接自動刪除",
            "刪除前先詢問使用者",
            "把它隱藏起來但保留"
          ],
          "correct": 2,
          "why": "字幕 [03:04]：「It merges two slides into one and asks before deleting the extra slide.」"
        },
        "status": "old"
      },
      {
        "id": "yt_TkSZqH0n7m0",
        "title": "🎬 用 Claude 優化 PowerPoint 簡報",
        "category": "產品功能",
        "text": "<b>用 Claude 在 PowerPoint 裡新增投影片、局部修改，並把條列和表格轉成原生圖表</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼在 PowerPoint 裡用 Claude 把一份做好的簡報再修得更好。內容有三種：新增投影片、只改你選起來的那一小塊，以及把一大堆字或表格改成可以直接編輯的圖表。平常常要改簡報、又不想每次重做整份的人，很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=42s\" target=\"_blank\">00:42</a> 在指令最後加一句「需要時可以先提問」，Claude 會先讀過現有內容、找出缺什麼，再問你要放哪些 AI native 業者、內容要多技術，然後才動手做投影片<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在指令最後加一句「需要時可以先提問」，Claude 會先讀完簡報、找出缺什麼，再問你 clarifying questions（動手前的確認問題），例如要放哪些 AI native 業者（以 AI 起家的公司）、內容要多技術。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=73s\" target=\"_blank\">01:13</a> 新投影片的字型、顏色、間距都跟原本的簡報一致。選取投影片後要求補一個資料點，Claude 只改這張，也會說明新資料的來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新做的投影片會沿用原本的字型、顏色和間距，不用自己重調格式。選一張投影片請它補一個資料點，它只改那一張，還會說明新資料從哪來，方便你查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=103s\" target=\"_blank\">01:43</a> Claude 知道你目前選取的是哪張投影片、哪個物件，所以可以快速做指定範圍的修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 看得到你目前選了哪張投影片、哪個文字框或圖表。先選好再下指令，就不必費力描述「第幾頁左邊那段」，它知道要改哪裡，小修改很快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=134s\" target=\"_blank\">02:14</a> 選取法規投影片的 compliance 段落，要求濃縮成一行；Claude 只改這一段，同一張投影片的另外三段都沒動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在法規那張投影片只選 compliance（法規遵循）這一段，請它濃縮成一行。結果只有這段變短，同一頁另外三段都沒動。選多少改多少，不用擔心它順手改到別的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=164s\" target=\"_blank\">02:44</a> 選取標題，要求改得更貼近簡報要講的故事，Claude 把標題改成「regulation as a growth catalyst」，內文不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 選取標題，請它改得更貼近整份簡報要講的故事。它改成「regulation as a growth catalyst」（法規是成長的推力），內文完全沒動。適合把平淡的標題改成有觀點的一句話。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=225s\" target=\"_blank\">03:45</a> 把條列很多的投影片轉成四個區塊，每塊有趨勢名稱、關鍵數字和一句說明；都是原生 PowerPoint 圖形，可以個別移動、縮放、改色<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 字很多的條列頁，可以請它整理成四個區塊，每塊放趨勢名稱、關鍵數字和一句說明。做出來是 native PowerPoint visuals（原生圖形，不是貼上去的圖片），可以個別拖移、縮放、改色。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=286s\" target=\"_blank\">04:46</a> 把列出五家公司的表格轉成 2x2 矩陣（x 軸是營收規模、y 軸是成長率），用原生圖形和標籤排出來，之後可以直接修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 列了五家公司的表格，可以轉成 2x2 矩陣：橫軸是營收規模，縱軸是成長率，每家公司按數據放到對應位置，一眼就看出誰大、誰成長快。同樣是原生圖形，之後可以直接改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=350s\" target=\"_blank\">05:50</a> 把只能呈現一個面向的長條圖換成 clustered horizontal bar chart，同時呈現市占率和成長率，不用再看圖例文字<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的長條圖一次只能比一件事。換成 clustered horizontal bar chart（每家公司並排兩條橫條的分組圖），市占率和成長率一起看，不用再來回對照圖例。</span>\n\n📘 術語<br><b>clarifying questions</b>（釐清問題）：Claude 動手前先問的問題，例如要放哪些 AI native 業者、內容要多技術<br><b>native PowerPoint visuals</b>（原生 PowerPoint 圖像）：用原生圖形和文字方塊做的，不是靜態圖片，可以個別移動、縮放、改色、編輯<br><b>2x2 matrix</b>（2x2 矩陣）：x 軸是營收規模、y 軸是成長率，依表格資料標出每家公司的位置<br><b>clustered horizontal bar chart</b>（群組橫條圖）：用來取代原本的長條圖，一次就看得到市占率和成長率兩個面向\n\n📺 <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=0s\" target=\"_blank\">Refining a PowerPoint with Claude</a>（2026/04/16 · 6 分鐘）",
        "tip": "💡 你可以怎麼用：下次改簡報時，先用滑鼠選好要改的那一頁、那段字或那張表，再跟 Claude 說「濃縮成一行」或「轉成 2x2 矩陣」。如果要它做新投影片，指令最後加一句「需要時可以先提問」，讓它先問清楚再動手。",
        "quiz": {
          "q": "影片中選取「regulatory landscape」標題並要求改得更具體後，Claude 把標題改成什麼？",
          "options": [
            "Regulatory landscape overview",
            "Compliance drives fintech innovation",
            "Open banking and beyond",
            "Regulation as a growth catalyst"
          ],
          "correct": 3,
          "why": "字幕 [02:44] 提到 Claude 把標題改成「regulation as a growth catalyst」，內文維持不變"
        },
        "status": "old"
      },
      {
        "id": "yt_54BdUqMQUMI",
        "title": "🎬 Claude in Excel 入門",
        "category": "產品功能",
        "text": "<b>示範在 Excel 裡用 Claude 問答、除錯、解釋公式、整理資料和建立模型</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方的入門示範，教你在 Excel 裡直接叫出 Claude，用對話完成查資料、抓錯、看懂公式、整理表格，甚至建財務模型。平常會用 Excel、但公式或分析卡關的人，看完就知道哪些事可以交給它做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=5s\" target=\"_blank\">00:05</a> Claude in Excel 是試算表內建的 AI agent。Mac 按 Control+Option+C、Windows 按 Control+Alt+C 開啟。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude in Excel 是直接內建在 Excel 裡的 AI 助手。AI agent 指的是不只會回答、還會自己動手操作的 AI。Mac 按 Control+Option+C，Windows 按 Control+Alt+C 就能叫出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=36s\" target=\"_blank\">00:36</a> 可以直接問活頁簿裡的資料。例如問差旅和餐費有沒有低於總支出 40%，Claude 會算出百分比，並列出算式讓你核對。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不用自己寫公式，直接用問的就好，例如「差旅加餐費有沒有低於總支出 40%」。它會算出比例，也會把算式列出來，讓你自己核對，不用盲目相信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=66s\" target=\"_blank\">01:06</a> 協助除錯。Claude 會追出錯誤來源：D6 的公式是營收除以數量，但 C6 是空的，所以變成除以零。它建議補上缺漏資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 表格出現錯誤時，它會往回追原因。範例中 D6 的公式是「營收÷數量」，但 C6 的數量沒填，變成除以零才出錯。它建議的解法是把缺漏的資料補上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=131s\" target=\"_blank\">02:11</a> 解釋看不懂的公式。Claude 會逐段拆解 VLOOKUP 的參數，並附上 citation boxes，可以直接跳到被引用的儲存格。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VLOOKUP 是查表用的公式，影片用它把分數換成等第。Claude 會逐段說明查什麼值、去哪張表查、取第幾欄；true 代表近似比對。回覆裡的 citation boxes 是小方框，點一下就跳到被引用的那格。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=191s\" target=\"_blank\">03:11</a> 可以執行多步驟任務。它清理資料前會先徵求同意；完成後回報刪掉 3 筆重複資料、34 筆資料依日期排序，並建立 historical 工作表。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它能一次做完好幾個步驟。動手清理資料前會先問你同不同意，做完再回報結果：刪掉 3 筆重複、34 筆資料依日期排好，還另外建了一張叫 historical（歷史資料）的工作表。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=222s\" target=\"_blank\">03:42</a> 依歷史營收建立 2026–2028 三年預測。成長率假設放在 assumption 工作表，預測值用公式連動，屬於動態模型。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它能根據過去的營收，推算 2026–2028 年的預測。成長率這類假設集中放在 assumption（假設）工作表，預測值用公式連過去，所以改一個假設，後面的數字會跟著變。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=283s\" target=\"_blank\">04:43</a> 建立 DCF 模型：折現率 10%、終值成長率 3%、預測五年現金流，算出 implied enterprise value。調整假設後估值會自動更新。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ DCF 是估算公司價值的方法：預測未來五年的現金流和五年後的終值（年成長 3%），再用 10% 的折現率換算回現在的價值，加總得出 implied enterprise value（推算的企業價值）。改了假設，估值會自動重算。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=313s\" target=\"_blank\">05:13</a> 可以建立 pivot table 和圖表，也能修改圖表類型、座標軸、標題和顏色。重要成果要自己驗證，敏感資料要遵守組織的資料處理政策。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ pivot table（樞紐分析表）能把大量資料依類別自動加總，功能很強但不好學，現在可以請它代為建立，圖表的類型、座標軸、標題和顏色也能叫它改。不過重要結果要自己檢查，敏感資料要照公司的規定處理。</span>\n\n📘 術語<br><b>VLOOKUP</b>（VLOOKUP 查閱函數）：影片中用來把分數換成等第；參數包括 lookup value、table array、column index，true 代表近似比對<br><b>citation boxes</b>（引用框）：Claude 回覆中的方框，點一下就能直接跳到被引用的儲存格<br><b>DCF model</b>（DCF 模型）：預測自由現金流、計算終值，再全部折現回現值，得出 implied enterprise value<br><b>pivot table</b>（樞紐分析表）：Excel 最強大、也最難學會的功能之一；Claude 可以代為建立\n\n📺 <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=0s\" target=\"_blank\">Getting started with Claude in Excel</a>（2026/01/30 · 7 分鐘）",
        "tip": "💡 你可以怎麼用：下次打開一份看不懂或出現錯誤的 Excel，先按快捷鍵叫出 Claude，請它「解釋這格公式」或「找出這個錯誤從哪裡來」，再點它附上的儲存格連結逐一核對。要它整理資料之前，建議先另存一份備份。",
        "quiz": {
          "q": "在 Windows 上要用哪組快捷鍵開啟 Claude in Excel？",
          "options": [
            "Alt + C",
            "Control + Option + C",
            "Control + Shift + C",
            "Control + Alt + C"
          ],
          "correct": 3,
          "why": "字幕說 Mac 用 Control+Option+C，Windows 用 Control+Alt+C（00:05、06:44）"
        },
        "status": "old"
      }
    ]
  },
  yt_cases: {
    "id": "yt_cases",
    "name": "📺 客戶案例・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_S_lzYIvtEaQ",
        "title": "🎬 Patrick Collison 談 Stripe 如何使用 Claude Code",
        "category": "企業與客戶案例",
        "text": "<b>Stripe 執行長談如何用 Claude Code 加速開發，同時守住高可靠度</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Stripe 是全球大型的線上金流公司，執行長 Patrick Collison 在這支影片分享，他們的工程師怎麼大量使用 Claude Code（Anthropic 出的 AI 寫程式工具）加快開發，同時讓付款系統不出包。一般來說，做得快和做得穩很難兼顧，他拿出實際數字和做法，說明 Stripe 怎麼兩邊都顧到，所以值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=31s\" target=\"_blank\">00:31</a> Stripe 核心 API 的可靠度達 five and a half nines，同時堅持持續部署，希望一天內多次拿到客戶回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Stripe 的核心 API（商家網站串接 Stripe 收款用的接口）穩定度是 99.9995%，換算下來一年大約只停擺兩分半鐘。即使要求這麼高，他們還是程式一改好就上線，一天能收到好幾輪客戶反應。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=154s\" target=\"_blank\">02:34</a> 一位工程師在上半年（H1）合併了 600 多個 pull request，全部用 AI 寫，只有一個被 revert<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有位工程師今年上半年（H1）合併了 600 多個 pull request（工程師提交的一批程式修改，審核通過才會併入正式程式），全部由 AI 撰寫，只有 1 個因為出問題被撤回（revert）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=186s\" target=\"_blank\">03:06</a> 內部工具 Minions 可從 Slack 或網頁介面用 prompt 派工，自動開新 VM 完成任務、跑測試並送出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 內部工具 Minions 可以讓人在 Slack（公司內部的聊天軟體）或網頁上打一段指令派工作。它會自己開一台 VM（雲端上臨時開的電腦）寫程式、跑測試，完成後送出等人審核。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=218s\" target=\"_blank\">03:38</a> 過去 18 個月每個 pull request 的品質提升；單位時間事故數略增但多為小事故，整體可靠度基本不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一年半，每次提交的程式品質反而變好。出事的次數稍微變多，但大多是小問題，整體穩定度沒有下降。也就是說，開發速度變快了，但沒有拿可靠度去換。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=279s\" target=\"_blank\">04:39</a> 守住品質的關鍵是依靠 invariants 與硬性關卡，而不是主觀、看情況或機率性的東西；Stripe 從 2017 年就開始投資資料防護<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 守住品質靠的是 invariants（任何情況下都必須成立的規則），加上沒通過就一律擋下的關卡，而不是靠人的感覺或碰運氣。Stripe 從 2017 年就開始投資保護資料的機制。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=402s\" target=\"_blank\">06:42</a> 每台 devbox 都預裝 Claude Code；Stripe Projects 由 2～3 位工程師約兩個月從構想做到公開上線，整合約 50 個服務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每台工程師用的開發環境 devbox 都預先裝好 Claude Code。Stripe Projects 讓 agent（能自己連續做事的 AI）輕鬆到 Vercel 等服務開帳號，由 2～3 人花約兩個月做完上線，串接了約 50 個服務。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=678s\" target=\"_blank\">11:18</a> 有工程師先用最聰明的模型花大量心力規劃，再派出 10 台 devbox 由不同 agent 執行計畫的不同部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有工程師先讓最聰明的模型花很多力氣把計畫想清楚，再開 10 台 devbox，讓不同的 agent 各自負責計畫的一部分，同時進行。最多心力放在規劃，執行則交給多個 AI 分頭做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=861s\" target=\"_blank\">14:21</a> 過去一年在 Stripe 上新成立的公司數約增為兩倍；Stripe 預期約三年內多數交易會發生在 agent 之間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一年，在 Stripe 上新成立的公司大約多了一倍。Stripe 預估大約三年內，多數交易會是 AI agent 之間直接完成，而不是人自己點按鈕付款。</span>\n\n📘 術語<br><b>devbox</b>（開發機）：Stripe 工程師的開發環境，每台都預裝 Claude Code，並具備監測與可觀測性<br><b>Minions</b>（Minions（內部工具））：透過 Slack 或網頁用 prompt 調度 VM，自動實作功能、跑測試並送出<br><b>Stripe Projects</b>（Stripe Projects）：讓 agent 能非常輕鬆地在 PostHog、Vercel 等服務開帳號的產品<br><b>five and a half nines</b>（五個半 9 的可靠度）：Stripe 核心 API 的極高可靠度標準\n\n📺 <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=0s\" target=\"_blank\">Patrick Collison on Claude Code at Stripe</a>（2026/09/24 · 17 分鐘）",
        "tip": "💡 你可以怎麼用：交代 AI 做事之前，先花時間把目標和步驟寫清楚，再分成幾塊交給它做。另外替結果訂幾條每次必查的硬規則，例如數字一定要跟原始資料對得上，不要看起來順眼就直接收下。",
        "quiz": {
          "q": "根據影片，Stripe Projects 從最初構想到公開上線，投入的人力與時間大約是多少？",
          "options": [
            "1 位工程師，約兩週",
            "2～3 位工程師，約兩個月",
            "一個較大的團隊，約六個月",
            "10 位工程師，約一個月"
          ],
          "correct": 1,
          "why": "[07:43] 提到「between two and three engineers for about two months」從構想到公開上線；「較大團隊、六個月」是工程師對過去做法的估計（[08:13]）"
        },
        "status": "old"
      },
      {
        "id": "yt_LQkcGtkSLNQ",
        "title": "🎬 Frontier Day｜Claude 新創專場",
        "category": "企業與客戶案例",
        "text": "<b>新創創辦人分享用 Claude 與 AI 加速開發、研究與成長的心得</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在 Frontier Day 活動上拍攝，幾位新創創辦人分享他們怎麼用 Claude 和 AI 加快開發、研究和公司成長。值得看的地方是，他們講的都是實際做出來的成果：生物研究、遊戲開發都有，可以看到 AI 在真實工作裡改變了多少東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=0s\" target=\"_blank\">00:00</a> Frontier Day 讓大家在前所未有的變化中互相學習；AI 讓人把腦中的想像世界實際做出來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Frontier Day 是這支影片記錄的活動。大家都在摸索同一波新變化，互相交流學得最快。AI 讓「我想做一個東西」不再只停在腦中，而是真的能動手做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=31s\" target=\"_blank\">00:31</a> 現在唯一不變的就是變化，願意擁抱變化、敢想得更大的創辦人才會成功<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 工具和做法幾個月就換一輪，昨天的好方法今天可能就過時了。只守著舊計畫的創辦人容易被甩開。願意一直調整、敢把目標訂得更大的人，才抓得住這波機會。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=31s\" target=\"_blank\">00:31</a> 用 AI 打造的應用越來越大，可靠性（reliability）成為越來越大的挑戰，需要更好的工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 可靠性（reliability）指系統能不能穩定、每次都照預期運作。小工具偶爾出錯沒關係，但應用越做越大、跑得越快，一出錯影響就越大，所以需要更好的工具來顧好品質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 原本可能要花好幾年的生物研究專案，現在在產品上做分析只要幾分鐘到幾小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一個生物研究專案，從整理資料到分析出結果，可能要花好幾年。現在把資料放進他們用 AI 做的產品裡分析，幾分鐘到幾小時就有結果，研究者能更快驗證想法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 遊戲開發者表示，現在大約一小時就能做出全新的遊戲循環，而且是大型多人 3D 世界<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 遊戲循環是玩家一直重複在做的核心玩法，例如打怪、拿寶物、升級、再去打怪。以前做一套新玩法很費工，現在大約一小時就能做出來，而且是很多人同時上線的 3D 世界。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 新模型推出時會跑大量 evals，最重視智慧與決策能力，這是 Claude 特別突出的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ evals 是一整套測驗，用來檢查 AI 模型在各種任務上的表現。受訪者每次遇到新模型都會跑一輪，最在乎它夠不夠聰明、判斷做得對不對，他們認為 Claude 在這方面特別強。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=95s\" target=\"_blank\">01:35</a> 有受訪者說過去一年的成果超過之前整整三年半，很大一部分要歸功於 Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有人說過去一年做出來的東西，比之前三年半加起來還多，很大一部分要歸功於 Claude。可見 AI 已經不只是幫忙省點時間，而是直接改變了一個團隊能做完多少事。</span>\n\n📘 術語<br><b>evals</b>（評測）：新模型推出時會跑一大套 evals，首要看智慧與決策能力<br><b>reliability</b>（可靠性）：應用越做越大、速度越來越快，可靠性成為越來越大的挑戰\n\n📺 <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=0s\" target=\"_blank\">Frontier Day | Claude for startups</a>（2026/09/15 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：挑一件你一直想做、但覺得太花時間的事，例如整理一疊研究資料或做一個小工具，直接請 Claude 先做一版出來看看。之後換新模型時，拿同一批你平常最常用的任務再測一次，比較結果再決定要不要換，這就是你自己的小型 evals。",
        "quiz": {
          "q": "影片中有受訪者說，過去一年的成果超過之前多長時間的成果總和？",
          "options": [
            "之前整整三年半",
            "之前整整兩年",
            "之前整整五年",
            "之前整整十年"
          ],
          "correct": 0,
          "why": "[01:35] 字幕說：We've accomplished more in the last year than in the entire previous three and a half years, and a lot of that is due to Claude."
        },
        "status": "full"
      },
      {
        "id": "yt_FoteuzPpx7E",
        "title": "🎬 與客戶一起打造企業級 Frontier Safeguards",
        "category": "企業與客戶案例",
        "text": "<b>Uber、Visa 談與 Anthropic 在架構層級合作打造安全與隱私保護機制</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片請來 Uber 和 Visa，談他們怎麼和 Anthropic（開發 Claude 的 AI 公司）一起設計保護機制，讓大公司敢把敏感業務交給 AI。值得看的地方是，它講清楚企業信任 AI 的關鍵：不是靠 AI 公司口頭承諾，而是把系統設計成本來就碰不到客戶資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=0s\" target=\"_blank\">00:00</a> Anthropic 和 Uber 的共同點，是對安全（safety）發自骨子裡的重視<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ safety 指避免 AI 出錯傷人或被人拿去亂用。叫車平台 Uber 和 Anthropic 合得來，是因為兩邊都把安全當成公司的本性，不是拿來對外宣傳的口號。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=0s\" target=\"_blank\">00:00</a> 信任花了幾十年才建立起來，現在風險更高了，不打算隨便把它消耗掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所以 Visa 導入 AI 不是在趕流行。AI 能碰到的資料更多、能做的事也更多，出包的代價就更大。幾十年累積的信任，不能為了嘗鮮拿去賭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 雙方一起在架構層級（不只是政策層級）開發新的安全與隱私功能<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 政策層級像是白紙黑字承諾「我們不會亂看你的資料」，架構層級則是系統本來就設計成看不到。前者得靠大家守規矩，後者靠結構擋住，可靠很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 資料可以存在自己的雲端、由自己控制，也能持續取得各種訊號；logs 由自己掌控，除非自己同意，否則不會流到別的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ logs 是系統自動記下「誰、什麼時候、做了什麼」的紀錄檔。企業資料放在自己的雲端、自己管，需要的各種監測訊號照樣拿得到，紀錄不會自己跑出去，要外流得先經過企業同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 審查（review）只由機器進行，產出刻意限定為事先定義好的 findings，不包含客戶內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ review 是檢查 AI 的使用狀況有沒有出問題，findings 是檢查後得出的結論。這裡全程由機器檢查、沒有人去看，而且只能回報事先定好的幾類結論，客戶的原始內容不會被帶出去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=76s\" target=\"_blank\">01:16</a> Visa 無法獨力完成，需要 Anthropic 這類 frontier labs 提供關鍵要素，把 AI 帶進網路防禦的每個環節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ frontier labs 指開發最先進 AI 模型的公司，Anthropic 就是其中一家。Visa 很懂支付和防詐騙，但最尖端的 AI 得靠這類公司，兩邊合作，才能把 AI 用在防駭客的每個環節。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=76s\" target=\"_blank\">01:16</a> 這些 safeguards 讓 AI 能用在以前沒辦法用的業務領域，同時保護資訊與使用情境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ safeguards 就是讓 AI 能安全使用的保護機制。有了它，以前因為資料太敏感、不敢交給 AI 的業務也能開始用，而且資料內容和拿 AI 做什麼都能受到保護。</span>\n\n📘 術語<br><b>safeguards</b>（防護機制）：讓企業能把 AI 用在以前做不到的業務領域，同時保護資訊與使用情境<br><b>frontier labs</b>（前沿 AI 實驗室）：像 Anthropic 這樣的實驗室，提供 Visa 把 AI 帶進網路防禦所需的要素<br><b>machine-only review</b>（僅限機器的審查）：審查只由機器進行，產出僅限事先定義的 findings，不含客戶內容\n\n📺 <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=0s\" target=\"_blank\">Building Enterprise Frontier Safeguards with our customers</a>（2026/09/01 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：下次公司要導入 AI 工具時，可以直接問廠商三件事：資料存在誰的地方？使用紀錄誰管、會不會被傳出去？審查是機器做還是有人會看？光說「我們承諾保護隱私」還不夠，要能講出系統在設計上怎麼做到的才算數。",
        "quiz": {
          "q": "根據影片，這種僅由機器進行的審查（review）會產出什麼？",
          "options": [
            "自動傳送給 Anthropic 的 logs",
            "只有事先定義好的 findings，不包含客戶內容",
            "完整的客戶對話紀錄",
            "交給人工審查員的摘要報告"
          ],
          "correct": 1,
          "why": "[00:44] 字幕說：「The review is machine-only. What comes out is intentionally limited to defined findings, not customer content.」"
        },
        "status": "old"
      },
      {
        "id": "yt_YCSeSVHNj7k",
        "title": "🎬 用 Claude 做再生式養蜂",
        "category": "企業與客戶案例",
        "text": "<b>一位做了約十年再生式養蜂的養蜂人，分享 Claude 怎麼幫她整理資料</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的講者是一位養蜂人，做了將近十年重視順應自然的養蜂方式。她分享怎麼用 Claude（Anthropic 開發的 AI 助理）整理工作上累積的資料。這支影片適合想知道「靠經驗吃飯的傳統工作」能怎麼用 AI 的人：AI 不取代她的判斷，只是幫她把資訊整理好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=0s\" target=\"_blank\">00:00</a> 講者做再生式養蜂約十年，工作一部分靠直覺，但也有大量資訊，Claude 幫她同時兼顧兩者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她做再生式養蜂（Regenerative beekeeping，重點在觀察蜜蜂在野外怎麼生活）快十年了。這行一半靠經驗和手感，一半要記很多資訊，Claude 幫她處理資訊那一半。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=0s\" target=\"_blank\">00:00</a> 分蜂（swarming）是蜜蜂自然繁殖的方式，離巢的蜂群會聚在樹枝之類的地方，這時她就會接到電話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分蜂（swarming）是蜜蜂自然繁殖的方式：一群蜂離開原本的蜂巢去找新家，途中會先擠成一團停在樹枝這類地方。有人看到就會打電話找她處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=31s\" target=\"_blank\">00:31</a> 講者認為養蜂主要靠觀察，跟蜜蜂相處越久越了解牠們，也越清楚什麼是正常狀態<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她覺得養蜂最重要的是觀察。跟蜜蜂相處越久，就越清楚牠們平常是什麼樣子。一旦有地方不對勁，她也比較容易發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=31s\" target=\"_blank\">00:31</a> Claude 幫她把累積的常見問題資料整合成一頁式 FAQ，方便直接交給客戶<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她手上累積了很多大家常問的問題。Claude 幫她整理成一頁 FAQ（常見問題集，把常見問題和答案列在一起），客戶來問時直接給這一頁就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=63s\" target=\"_blank\">01:03</a> 沒有一體適用的解法，每個蜂巢、每種情境都要個別判斷；她認為這更像是和大自然建立夥伴關係<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂沒有標準答案，同一招不一定每個蜂巢都適用，要看當下的狀況判斷。她覺得這比較像是和大自然合作，而不是一個人說了算。</span>\n\n📘 術語<br><b>Regenerative beekeeping</b>（再生式養蜂）：重點在觀察蜜蜂在野外怎麼生活<br><b>Swarming</b>（分蜂）：蜜蜂自然繁殖的方式，就像蜂巢自己生出新的蜂巢\n\n📺 <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=0s\" target=\"_blank\">Regenerative beekeeping with Claude</a>（2026/07/14 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：如果你工作上常被問同樣的問題，可以把過去的回覆和筆記貼給 Claude，請它整理成一頁 FAQ，下次直接傳給對方。遇到需要看現場狀況的事，還是要靠你自己的經驗判斷。",
        "quiz": {
          "q": "影片中，Claude 幫養蜂人把常見問題整理成什麼？",
          "options": [
            "每週的蜂巢觀察報告",
            "養蜂教學影片腳本",
            "分蜂預測模型",
            "一頁式 FAQ，方便交給客戶"
          ],
          "correct": 3,
          "why": "[00:31] 她提到 Claude 幫她把收集到的常見問題資料整合成一頁 FAQ，可以直接交給客戶"
        },
        "status": "full"
      },
      {
        "id": "yt_bGCL-Ahb1Z8",
        "title": "🎬 在最前線工作：Thomson Reuters",
        "category": "企業與客戶案例",
        "text": "<b>Thomson Reuters 談與 Anthropic 合作如何改善法律研究</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片請來 Thomson Reuters（專門提供法律等專業資訊的老牌公司）的人，談他們跟 Anthropic（開發 Claude 的公司）合作後，律師查資料的方式有什麼改變。如果你想知道 AI 在需要高度準確的專業領域能做到什麼程度，這是個很好懂的實例。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=4s\" target=\"_blank\">00:04</a> Thomson Reuters 歷史悠久，現在是一家科技公司，專注在需要專業資訊的職業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Thomson Reuters 是歷史很久的資訊公司，現在把自己定位成科技公司，主要服務像律師這樣工作上很依賴專業、準確資料的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=4s\" target=\"_blank\">00:04</a> AI 出現前，律師只能用搜尋列找和手上案件相關的判例，過程漫長又累人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 判例就是法院以前判過的案子，律師會拿來支持自己的論點。以前只能自己想關鍵字，在搜尋列一次次查、一篇篇翻，很花時間也很累。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=4s\" target=\"_blank\">00:04</a> 過去一年和 Anthropic 合作，最大的躍進是 agent search 和真正的 deep research 出現<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent search 通常指 AI 自己拆步驟、換關鍵字、反覆查；deep research 則是 AI 讀大量資料後整理成報告。影片沒細講，只說這是最大的進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=34s\" target=\"_blank\">00:34</a> 講者認為 AI 讓這類搜尋與研究的品質和準確度大幅提升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 重點不只是變快。講者強調找到的東西更對、更完整。法律工作只要漏掉關鍵判例或引用錯誤就可能出問題，所以準確度特別重要。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=34s\" target=\"_blank\">00:34</a> 模型持續進步，對他們能打造的法律解決方案品質有真正的累積效應（字幕原文為「claw models」）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 字幕寫的 claw models 應該是 Claude 模型被聽錯了。意思是：底層模型每進步一次，他們做的法律工具就跟著變好，而且效果會一直疊加上去。</span>\n\n📘 術語<br><b>agent search</b>（代理式搜尋）：字幕把它列為過去一年和 Anthropic 合作的一大躍進，沒有進一步解釋<br><b>deep research</b>（深度研究）：字幕說它和 agent search 一起出現，是一大躍進，沒有進一步解釋\n\n📺 <a href=\"https://www.youtube.com/watch?v=bGCL-Ahb1Z8&t=0s\" target=\"_blank\">Working at the Frontier: Thomson Reuters</a>（2026/07/08 · 0 分鐘）",
        "tip": "💡 你可以怎麼用：下次要查一個需要翻很多資料的問題時，別只丟一個關鍵字給 AI，試試有「深度研究」功能的工具，讓它自己多查幾輪、整理成報告。不過要像律師一樣，把它引用的關鍵來源點開核對一遍。",
        "quiz": {
          "q": "根據影片，Thomson Reuters 過去一年和 Anthropic 合作，最大的躍進是什麼？",
          "options": [
            "能自動幫律師寫好整份訴狀",
            "出現 agent search 和真正的 deep research",
            "判決書可以即時翻成多種語言",
            "律師可以直接用語音查詢判例"
          ],
          "correct": 1,
          "why": "[00:04] 字幕說：「A huge leap in the last year in the partnership with Anthropic has been the emergence of agent search and truly deep research.」"
        },
        "status": "full"
      },
      {
        "id": "yt_CuzipWWYvFo",
        "title": "🎬 用 Claude 輔助再生式養蜂",
        "category": "企業與客戶案例",
        "text": "<b>一位再生式養蜂人分享怎麼用 Claude 整理資料，並談對養蜂的看法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的主角是一位做了約 10 年「再生式養蜂」的養蜂人。再生式養蜂（regenerative beekeeping）是先觀察蜜蜂在野外怎麼生活，再照著牠們的習性來養的方式。講者分享自己怎麼看養蜂，也講到 Claude（Anthropic 做的 AI 助理）怎麼幫忙整理資料。值得看的是：在一個很靠經驗和感覺的行業裡，AI 適合幫忙哪一塊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=0s\" target=\"_blank\">00:00</a> 講者從事再生式養蜂大約 10 年，認為這份工作有靠直覺的部分，也有大量資訊，Claude 幫助她同時兼顧兩者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂一半靠經驗和感覺，另一半是一大堆要記、要查、要整理的資訊。講者把整理資訊交給 Claude，自己就能把心力留給需要親自判斷的現場。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=0s\" target=\"_blank\">00:00</a> 分蜂（swarming）是蜜蜂自然繁殖的方式，就像蜂群自己生出新蜂群；蜂群飛走後會聚在樹枝等地方，這時講者就會接到電話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分蜂（swarming）是蜜蜂自然繁殖的方式：一群蜂分出一部分飛走，自己組成新的蜂群。飛出去的蜂常先團團聚在樹枝上，有人看到就會打電話找講者處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=30s\" target=\"_blank\">00:30</a> 講者認為養蜂主要靠觀察，跟蜜蜂相處越久就越了解牠們，也會知道什麼狀態對牠們來說是正常的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂沒有捷徑，就是持續觀察。看久了就知道健康的蜂群平常是什麼樣子，哪裡跟平常不一樣，也才看得出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=30s\" target=\"_blank\">00:30</a> Claude 幫講者把從 FAQ 收集的資料整合起來，整理成一頁的電子報，方便分享給客戶<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ FAQ 是「常見問題集」，也就是客戶常問的問題和答案。講者把從這裡收集到的零散資料交給 Claude，整合成一頁電子報，方便直接分享給客戶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=60s\" target=\"_blank\">01:00</a> 沒有一體適用的解法，要一個蜂箱一個蜂箱、依每種情況判斷，問自己「現在怎麼做最合理」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個蜂箱的狀況都不一樣，沒有一招用到底的標準做法。講者的原則是看眼前這一箱，問自己「現在怎麼做最合理」，再決定下一步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=60s\" target=\"_blank\">01:00</a> 講者認為養蜂比較像跟大自然建立夥伴關係；看得越深，越能看到蜜蜂和其他一切的關聯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者不覺得養蜂是在「管理蜜蜂」，比較像是跟大自然合作。觀察得越仔細，越會發現蜜蜂跟周遭環境裡的一切都有關聯。</span>\n\n📘 術語<br><b>regenerative beekeeping</b>（再生式養蜂）：探索蜜蜂在野外怎麼生活的養蜂方式<br><b>swarming</b>（分蜂）：蜜蜂自然繁殖的方式，像是蜂群自己生出新蜂群\n\n📺 <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=0s\" target=\"_blank\">Regenerative beekeeping with Claude</a>（2026/07/07 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：如果你的工作也是一半靠經驗、一半要整理資料，可以把平常常被問的問題和你的回答丟給 Claude，請它整理成一頁式說明或電子報，直接拿去分享。需要看現場判斷的事，還是留給自己決定。",
        "quiz": {
          "q": "根據影片，講者用 Claude 把從 FAQ 收集的資料整理成什麼？",
          "options": [
            "一頁的電子報，分享給客戶",
            "每週的蜂箱巡檢排程表",
            "蜂蜜產品的報價單",
            "預測蜂后位置的分析報告"
          ],
          "correct": 0,
          "why": "[00:30] 講者說 Claude 幫她整合從 FAQ 收集的資料，整理成可以輕鬆分享給客戶的一頁電子報（one-page newsletter）"
        },
        "status": "full"
      },
      {
        "id": "yt_9DHZLw5653E",
        "title": "🎬 Spotify 如何在超過 2,000 萬行程式碼上運行 agents——對談 Niklas Gustavsson",
        "category": "企業與客戶案例",
        "text": "<b>Spotify 分享 Honk、自動化遷移、驗證與標準化，以及 AI 帶來的工程轉變</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片裡，Spotify 的 Niklas Gustavsson 分享他們怎麼在超過 2,000 萬行程式碼裡使用 AI agent。AI agent 是一種 AI 助手，會自己規劃、改程式碼、檢查結果。影片不只講個人怎麼用，也講一家大公司怎麼讓 AI 大量改程式又穩定可靠，以及事前要先打好哪些基礎。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=190s\" target=\"_blank\">03:10</a> 個人工作流程：在 terminal 裡開多個 tmux session，5～10 個分頁，搭配一組 worktrees，背景同時跑好幾個 agents<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ terminal 是打指令的文字視窗。tmux 讓一個視窗分出很多工作區。worktree 是把同一份程式碼開成好幾個獨立的工作資料夾。他這樣做，就像同時交辦好幾位助理，各做各的，互不干擾。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=310s\" target=\"_blank\">05:10</a> 5～6 年前發現程式碼成長速度約是工程師人數的 7 倍，於是建立 fleet management 自動化維護；以前一年大約只能做 10 次遷移<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們發現程式碼長得比工程師人數快約 7 倍，靠人工維護跟不上。遷移是把大量程式碼換成新版本或新做法，以前一年只做得了約 10 次。所以他們建了 fleet management，由系統直接改遍數千個倉庫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=580s\" target=\"_blank\">09:40</a> Honk 早期靠 judge 把成功率從約 20～30% 拉到約 80%；後來模型與 agent 夠好了，就把 judge 拿掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Honk 是 Spotify 自己做的 agent 工具。早期另外派一個 AI 當 judge（評審），檢查改動是否符合要求，成功率從兩三成拉到約八成。後來模型和 agent 本身夠可靠，這關就拿掉了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=640s\" target=\"_blank\">10:40</a> Honk 架構：agent SDK 跑在 Kubernetes pod 裡；V2 讓使用者自己加工具，還能在 Linux 和 Mac OS 跑 CI builds 做驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent SDK 是 Anthropic 提供的 agent 開發套件。Kubernetes pod 是雲端上彼此隔開的小執行環境。V2 讓使用者自己加工具，改完還能在 Linux 和 Mac 上跑 CI（自動編譯和測試），確認沒改壞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=881s\" target=\"_blank\">14:41</a> 每天約 4.5 千次正式環境部署；約 2,900 名工程師；PR 速率提升超過 75%，約 73% 的 PR 由 AI 產生<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 部署就是把新版程式放上線給用戶用。約 2,900 名工程師每天上線約 4,500 次。PR 是交給同事審核的程式修改，產出速度提升超過 75%，其中約 73% 由 AI 產生。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=1154s\" target=\"_blank\">19:14</a> 給工程主管的建議：投資測試自動化、驗證和標準化；程式碼越一致，agents 表現越好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 給主管的建議是先打好地基。自動化測試讓 AI 改完馬上知道有沒有弄壞，驗證機制負責把關結果，統一的寫法讓 AI 有一致的範例可學。程式碼越整齊一致，agent 表現越好。</span>\n\n📘 術語<br><b>fleet management</b>（程式碼群管理）：不再發遷移指南請各團隊手動改，而是對整個分散在數千個 repo 的程式碼庫直接做修改的基礎設施<br><b>Honk</b>（Honk（Spotify 內部工具））：從自動化程式碼變更起家，現在是建在 agent SDK 上、跑在 Kubernetes pod 裡的通用 agent 工具<br><b>judge</b>（評審（LLM 評估））：用 LLM 評估結果是否符合預期；早期很關鍵，後來模型夠好就移除了<br><b>monorepo / polyrepo</b>（單一大型 repo／多個小型 repo）：Spotify 正逐步轉向大型統一的 monorepo，但仍有數千個小型 polyrepo\n\n📺 <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=0s\" target=\"_blank\">How Spotify runs agents across 20M+ lines of code, with Niklas Gustavsson</a>（2026/06/29 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：先把常交給 AI 的工作標準化：準備固定範本，寫一份「怎樣才算做對」的檢查清單，請 AI 做完先對照清單自己檢查。彼此不相關的任務，可以開幾個對話同時交辦，不用做完一件才開始下一件。",
        "quiz": {
          "q": "根據影片，Spotify 為什麼把 Honk 裡的 judge 移除？",
          "options": [
            "因為 judge 的 token 成本太高",
            "因為模型和 agent 已經夠好，不再需要 judge",
            "因為 judge 拖慢了 CI builds 的速度",
            "因為改由各團隊人工審查每個 PR"
          ],
          "correct": 1,
          "why": "[09:40]～[10:10] 提到模型與 agent 已經好到不再需要 judge，所以就把它從 Honk 移除了"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_H3XQeGNia8o",
        "title": "🎬 The Briefing：金融服務",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 與金融業高層座談，討論產業走向與因應 AI 變化</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 找來全球大型金融公司的高層，談 AI 會怎麼改變這個產業、公司該怎麼因應。金融業一向很重視安全和風險，連他們都在想怎麼跟上 AI 的速度，他們的反省很適合一般人參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 與會者是全球最具影響力的金融服務公司 CEO、CTO 和 CIO，目的是坦誠討論產業現況、未來走向，以及 Anthropic 想怎麼當夥伴協助他們<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 與會者包括 CEO（執行長，負責整間公司）、CTO（技術長，負責技術）、CIO（資訊長，負責資訊系統）。大家關起門來說真話，談產業現況和走向，也談 Anthropic 能怎麼幫忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 一位與會者說，如果當初就知道現在知道的事，會換個做法：linear rollouts（線性推行）會太慢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ linear rollouts（線性推行）大致是指照順序一步一步慢慢導入新工具。有位與會者回頭看，覺得照現在知道的事，這種慢慢來的做法會太慢，當初應該換個方式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 講到「速度」時，不只指速度本身，還包括安全性（security）和可擴展性（scalability）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這裡說的「快」不只是衝得快。security（安全性）是資料和系統不外洩、不被入侵；scalability（可擴展性）是從小規模試用擴大到全公司也撐得住。這三件事要一起顧到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=36s\" target=\"_blank\">00:36</a> 每個行業的每個人都要想：我該怎麼改變習慣？怎麼換個角度看事情？<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不只金融業，每個行業的每個人都要問自己：平常做事的習慣要不要改？遇到問題時，能不能換個角度想，不要一直照老方法做？</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=66s\" target=\"_blank\">01:06</a> 沒人知道變化會來得多快，所以要先做好準備；這不只是恐懼，只要應對得當，另一頭會是更好的世界<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 沒有人能預測變化會多快，所以不要等看清楚才開始動，要先準備。講者也提醒，面對 AI 不必只有害怕，只要應對得好，最後會是更好的世界。</span>\n\n📘 術語<br><b>linear rollouts</b>（線性推行）：字幕只說，以現在知道的事來看，這種推行方式會太慢\n\n📺 <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=0s\" target=\"_blank\">The Briefing: Financial Services</a>（2026/06/16 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：不用等想好完整的計畫才開始。這週挑一件你常做的事，例如寫信或整理會議紀錄，實際用 AI 做一次，再記下哪個做事習慣可以改。",
        "quiz": {
          "q": "一位與會者說，如果早知道現在知道的事會換個做法，他指出了什麼問題？",
          "options": [
            "資安審查流程太過嚴格",
            "linear rollouts 會太慢",
            "模型成本高到無法負擔",
            "員工不願意改變工作習慣"
          ],
          "correct": 1,
          "why": "[00:05] 字幕原文：「linear rollouts are going to be too slow」"
        },
        "status": "full"
      },
      {
        "id": "yt_8NVZMRyCrn4",
        "title": "🎬 The Problem Solvers｜Cursor 的 Michael Truell",
        "category": "企業與客戶案例",
        "text": "<b>Cursor 的 Michael Truell 談寫程式的初衷、Cursor 的定位、和 Anthropic 的合作及公司成長</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問 Cursor（一款用 AI 幫忙寫程式的軟體）的共同創辦人 Michael Truell。他聊了自己為什麼愛上寫程式、Cursor 想做成什麼樣的工具，以及和 Anthropic（開發 Claude 的公司）的合作。如果你好奇 AI 寫程式工具背後的人在想什麼，或想知道這類工具為什麼也開始照顧不會寫程式的人，這支值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=0s\" target=\"_blank\">00:00</a> 他 12 歲開始寫程式，很快就著迷了，因為寫程式可以「沒有門檻地打造東西」：只要有一台電腦，就能把腦中的想法做出來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他 12 歲開始寫程式，著迷的原因很單純：不用租店面、不用找人批准、也不用花大錢。只要有一台電腦，腦中想到的東西就能自己動手做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=0s\" target=\"_blank\">00:00</a> Cursor 是用 AI 幫專業人士更快打造軟體的工具，目標是成為和 coding agent 協作的最佳地方，對象包括專業工程師和完全沒有工程背景的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cursor 想成為和 coding agent 一起工作最好用的地方。coding agent 是能照你的指示自己寫程式、改程式的 AI 助手。使用者不只有工程師，也包括完全沒學過程式的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=32s\" target=\"_blank\">00:32</a> Cursor 想提供一個容易上手、同時又非常強大的工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多工具要嘛簡單但功能陽春，要嘛強大但很難學。Cursor 想兩邊都顧到：新手打開就會用，老手也能拿它處理複雜的大專案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=32s\" target=\"_blank\">00:32</a> 他很欣賞 Anthropic 對原則的堅持，也欣賞 Anthropic 從一開始就致力當一個平台，讓大家能在上面建立長久的事業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他欣賞 Anthropic 堅守自己的原則。也欣賞它從一開始就把自己定位成「平台」，讓 Cursor 這樣的公司能放心把事業長期建立在它的模型上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=62s\" target=\"_blank\">01:02</a> 他說 Cursor 能存在，一部分要歸功於 AI 模型的革命；Cursor 在產品上做的事，和 Anthropic 提升模型能力的方向高度一致<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 模型是能理解和產生文字、程式的 AI 核心，像 Claude 就是一種。模型變強，Cursor 才有機會出現。Cursor 在產品上想做的，剛好跟 Anthropic 提升模型能力的方向一致。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=92s\" target=\"_blank\">01:32</a> Cursor 的差異化在於深度的產品專注，從一開始就想讓使用者有更多自主權、更有能力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他認為 Cursor 跟別家不一樣的地方，是非常專注把產品本身做好。出發點一直是讓使用者有更多主導權、能做到更多事：AI 幫你變強，但方向盤還在你手上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=122s\" target=\"_blank\">02:02</a> 兩年前 Cursor 只有 15 個人，現在有 700 人，服務超過 60% 的 Fortune 500 企業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司長得非常快：兩年前只有 15 人，現在有 700 人。Fortune 500 是美國《財星》雜誌依營收排出的前 500 大企業，其中超過六成是 Cursor 的客戶。</span>\n\n📘 術語<br><b>coding agents</b>（程式開發 agent）：字幕說 Cursor 想成為和 coding agent 協作的最佳地方，給專業工程師和非工程背景的人使用<br><b>Fortune 500</b>（財星 500 大企業）：字幕說 Cursor 服務超過 60% 的 Fortune 500\n\n📺 <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=0s\" target=\"_blank\">The Problem Solvers | Michael Truell at Cursor</a>（2026/06/10 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：如果你不是工程師，但有想做的小工具（例如自動整理記帳表的小程式），可以試試 Cursor 這類工具。用白話描述你要什麼，讓 coding agent 先做出第一版，再一步步請它修改。",
        "quiz": {
          "q": "根據影片，Cursor 從兩年前到現在的團隊規模怎麼變化？",
          "options": [
            "從 5 人成長到 60 人",
            "從 15 人成長到 1,500 人",
            "從 15 人成長到 700 人",
            "從 50 人成長到 700 人"
          ],
          "correct": 2,
          "why": "[02:02] Two years ago we were 15 people in a room and now we're 700 people"
        },
        "status": "full"
      },
      {
        "id": "yt_LrZHnKS_L6k",
        "title": "🎬 用 Claude 像律師一樣工作",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 產品律師與 Freshfields AI 負責人對談律師如何運用 Claude</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 的產品律師和國際律所 Freshfields 的 AI 負責人對談，聊律師在實際工作中怎麼用 Claude。重點不只是「AI 能不能幫忙」，而是怎麼用得更進階，以及人還得守住哪些判斷。就算你不是律師，只要工作常常要消化大量文件，也很值得參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=15s\" target=\"_blank\">00:15</a> Mark 協助帶領 Anthropic 的產品律師團隊，負責 Claude Code 等企業產品；Anna 是 Freshfields 的 AI 全球共同負責人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mark 在 Anthropic 帶產品律師團隊，負責替 Claude Code（讓 Claude 直接在電腦上寫程式、做事的工具）這類企業產品把關法律風險。Anna 在國際大型律所 Freshfields 負責全球的 AI 推動。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=46s\" target=\"_blank\">00:46</a> Freshfields 全球約 5700 名員工與律師在使用 AI，最棘手的是「context gap」：規格今天和明天可能不一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context gap 就是「資訊落差」：律師得先搞懂產品現在長什麼樣，但工程師改得很快，今天查到的明天可能就不對了。Freshfields 有幾千人在用 AI，大家最頭痛的就是這一點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=77s\" target=\"_blank\">01:17</a> 許多律師一開始只拿 Claude 做聊天問答；更強的用法是運用 code，讓 Claude 用本機電腦產出 Word、Excel、PowerPoint 等檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多律師只把 Claude 當成問答對象。更進階的用法是讓它寫 code（程式碼），在你的電腦上執行，直接做出 Word、Excel、簡報檔，不只丟回一段文字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=107s\" target=\"_blank\">01:47</a> AI 擅長理解大量資訊、找出共同主題：把備忘錄、產品 roadmap、新法規放在一起，再和 Claude 對話產出新成品<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 很擅長一口氣讀完大量資料，找出彼此相關的重點。比如把備忘錄、產品 roadmap（未來要推出哪些功能的規劃表）和新法規一起丟給它，再邊聊邊整理出新的文件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=168s\" target=\"_blank\">02:48</a> 律師的角色像幫客戶掌船，穿越險峻海峽時，靠律師的判斷讓船舵保持穩定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 意思是 AI 可以分擔很多工作，但碰到風險高、很難拿捏的關頭，還是要靠律師的專業判斷幫客戶把穩方向，這才是律師真正的價值。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=199s\" target=\"_blank\">03:19</a> Anthropic 的價值觀「holding light and shade」：這項技術風險很多，但也充滿希望<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ holding light and shade 直譯是「同時抓住光和影」，是 Anthropic 的價值觀之一。意思是承認 AI 風險很多，也相信它能帶來很多好處，兩邊都不忽略。</span>\n\n📘 術語<br><b>context gap</b>（脈絡落差）：要弄清楚規格今天長什麼樣，而且明天可能就變了，工程團隊的速度又非常快<br><b>holding light and shade</b>（兼顧光明與陰影）：Anthropic 的價值觀之一，指這項技術有很多風險，但也有很多希望\n\n📺 <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=0s\" target=\"_blank\">Working Like a Lawyer with Claude</a>（2026/06/08 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：下次別只問 Claude 單一問題，可以把相關資料（例如會議紀錄、公司規章、專案計畫）一起丟給它，請它找出共同重點，直接做成 Word 或 Excel 檔。不過最後的判斷和拍板還是要自己來。",
        "quiz": {
          "q": "根據影片，Freshfields 全球大約有多少員工與律師在使用 AI？",
          "options": [
            "57000 人",
            "570 人",
            "5700 人",
            "7500 人"
          ],
          "correct": 2,
          "why": "[00:46] Anna 提到「5700, staff and lawyers worldwide who are using AI」"
        },
        "status": "full"
      },
      {
        "id": "yt_bjrmYsFae_g",
        "title": "🎬 解題者｜Legora 的 Max Junestrand",
        "category": "企業與客戶案例",
        "text": "<b>Legora 談用 Claude 模型打造法律工作平台，以及 AI 對法律產業的改變</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方的訪談影片，Legora 的 Max Junestrand 談他們怎麼用 Claude 做一個給律師用的工作平台。法律這行很怕出錯，看他們怎麼把 AI 放進律師每天的工作裡，可以大概看出 AI 在專業工作上能用到多深。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=0s\" target=\"_blank\">00:00</a> Legora 處在法律產業的核心；詮釋法律是世界上最古老的工作之一，因此責任重大<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 法律文件錯一個字，就可能影響一場官司或一筆交易。Legora 想說的是，他們的工具處理的東西很重要，不能只求快，還要可靠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=0s\" target=\"_blank\">00:00</a> Legora 是法律工作發生的地方，工作可以由人、由 agent 完成，或由兩者協作完成<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己分步驟把一件事做完的 AI，不只回答問題。Legora 想當律師的辦公桌：有些事人做，有些交給 agent，也能人和 AI 接力完成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=32s\" target=\"_blank\">00:32</a> Legora 在審閱、起草和研究上幫法律工作加快速度，並把這些整合成單一、完整的工作空間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 律師的日常工作有三大塊：審閱文件、起草文書、查資料。Legora 用 AI 讓每一塊都做得更快，還把三塊放在同一個地方，不用在好幾個工具之間切來切去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=32s\" target=\"_blank\">00:32</a> 起草和審閱的細節很看情境，例如要配合既有文件的風格，甚至是特定律師的風格<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 法律文件光寫對還不夠。例如在舊合約裡加一條新條款，用語和格式要跟原本的一致，有些律師還有自己習慣的寫法，AI 也要跟得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=62s\" target=\"_blank\">01:02</a> 他們發現 Claude 模型，尤其是 Opus，在精細起草上表現非常好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 是 Anthropic 的 Claude 模型裡能力最高的等級。Legora 發現，需要仔細拿捏用字的起草工作，交給 Opus 寫出來的東西特別到位。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=93s\" target=\"_blank\">01:33</a> 大約每三個月就有新東西推出，像水漲船高；Legora 想讓系統隨每次新模型發布一起變好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 模型大約每三個月就有新進展。Legora 的目標是讓產品跟著新模型一起變好：模型一變強，客戶用到的功能也跟著進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=125s\" target=\"_blank\">02:05</a> 差異化的關鍵是讓 Legora 成為業界速度最快的公司；客戶全力投入 Legora，Legora 也全力投入客戶<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型每家公司都能用，真正拉開差距的是誰最快把新能力做成客戶用得到的功能。客戶把工作全押在 Legora 上，Legora 也全力服務客戶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=125s\" target=\"_blank\">02:05</a> 懂得駕馭 AI 的人未來能做更多事，能做多少事的限制正在消失<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前一個人能做多少事，被時間和人力卡住。會用 AI 的人可以把重複的工作交出去，一個人能完成的量會大幅增加，重點是學會指揮 AI。</span>\n\n📘 術語<br><b>agent</b>（代理）：字幕說法律工作可以由人、由 agent 完成，或兩者協作完成<br><b>Opus</b>（Opus（Claude 模型））：Legora 發現它在精細起草上表現非常好\n\n📺 <a href=\"https://www.youtube.com/watch?v=bjrmYsFae_g&t=0s\" target=\"_blank\">The Problem Solvers | Max Junestrand at Legora</a>（2026/06/02 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：挑一件你常做的文書工作，例如回客戶信或整理合約重點，把你以前寫過的範本一起給 AI，要它照你的語氣和格式寫，寫完再自己檢查修改。先從這種小事開始，練習怎麼指揮 AI。",
        "quiz": {
          "q": "根據影片，Legora 發現 Claude 模型（尤其是 Opus）特別擅長哪件事？",
          "options": [
            "精細的法律文件起草",
            "自動出庭辯論",
            "計算律師事務所的帳務",
            "即時翻譯各國法律條文"
          ],
          "correct": 0,
          "why": "[01:02] 提到 Claude 模型，尤其是 Opus，在精細起草上表現非常好"
        },
        "status": "old"
      },
      {
        "id": "yt_CG7Rcl49C2w",
        "title": "🎬 在 Claude 模型正式推出前，這些團隊會先試著把它弄壞",
        "category": "企業與客戶案例",
        "text": "<b>搶先測試新 Claude 模型的客戶，分享測試方法、模型的進步和合作心得</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問了幾家搶先拿到新 Claude 模型的企業客戶，讓他們分享正式推出前怎麼測試模型、看到哪些進步，以及跟 Anthropic 怎麼合作。適合想知道新模型是怎麼被檢驗出來的人，也能看出該怎麼判斷一個新模型到底強在哪裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=1s\" target=\"_blank\">00:01</a> 新的 Claude 模型推出前，已經有一小群客戶在測試它、試著把它弄壞，也參與影響推出的內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新模型正式推出前，會先交給少數客戶試用。他們會故意找碴，想辦法讓模型出錯。他們回報的意見也會影響模型最後推出的樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=62s\" target=\"_blank\">01:02</a> 拿到新模型後的第一件事，是啟動 automated evals，讓它們在背景執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ automated evals（自動化評測）就是先準備好一整套考題，由程式自動拿去考模型、打分數。客戶拿到新模型的第一件事，就是讓這套考試在背景自己跑，不用有人一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=62s\" target=\"_blank\">01:02</a> 複雜法律任務的例子是起草 S1；有了 agentic 能力後，模型能獨立處理 S1 中越來越大的部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ S1 是美國公司申請上市時要交給主管機關的文件，內容多又專業。有了 agentic 能力，模型能自己找資料、整合內容、修改文件，所以它能獨立完成的部分越來越多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=94s\" target=\"_blank\">01:34</a> 只換掉一個模型，agent 就從有時會卡住，變成每個問題都答得又快又準；測試 agent 的成功率大約提升 20%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是會自己一步步把任務做完的 AI 助手。客戶其他設定都沒改，只換成新模型，原本偶爾會卡住的 agent 就變得又快又準，測試成功率大約提升兩成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=94s\" target=\"_blank\">01:34</a> 現在做不到的事，最能看出下一代模型會大幅進步的地方；以前從沒成功過的 evals 開始穩定通過<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想知道下一代模型強在哪，要看現在的模型做不到什麼。以前那些怎麼考都過不了的題目，新模型開始穩定過關，這就是進步最明顯的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=124s\" target=\"_blank\">02:04</a> 客戶覺得和 Anthropic 的關係比較像一起開發，而不只是買東西；兩邊幾乎每隔一天就會交談<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這些客戶不只是付錢用產品，而是跟 Anthropic 一起把模型做好。雙方幾乎每隔一天就會聯絡，回報問題、討論方向，關係比較像合作夥伴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=155s\" target=\"_blank\">02:35</a> 客戶形容在前沿開發的感覺：Dazzling（耀眼）、Compounding（複利般累積），也像站在大浪上，要努力保持平衡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 客戶用三個感覺形容：新能力很耀眼；每次進步都疊在上一次的基礎上，像複利一樣越滾越大；但變化快得像站在大浪上，得一直調整才站得穩。</span>\n\n📘 術語<br><b>automated evals</b>（自動化評測）：拿到新模型後最先做的事，讓評測在背景執行<br><b>S1</b>（S1 文件）：被舉例為特別複雜的法律任務，要交給模型起草<br><b>agentic capabilities</b>（agentic 能力）：模型能自己去找需要的資訊、整合內容並編輯文件\n\n📺 <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=0s\" target=\"_blank\">Before we ship a Claude model, these teams try to break it.</a>（2026/05/28 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：把妳常請 AI 做的工作整理成 5～10 題的「小考卷」，順便記下妳滿意的答案長什麼樣子。之後每次有新模型推出就重考一遍，特別看看以前做不好的那幾題有沒有進步。",
        "quiz": {
          "q": "影片中，客戶拿到新 Claude 模型後做的第一件事是什麼？",
          "options": [
            "先寫一份新模型的公開評測報告",
            "啟動 automated evals，讓它們在背景執行",
            "直接交給客戶在正式環境使用",
            "先請模型起草一份完整的 S1"
          ],
          "correct": 1,
          "why": "[01:02] 提到第一件事是啟動 automated evals，讓它們在背景執行"
        },
        "status": "full"
      },
      {
        "id": "yt_tUoO4ucrNc0",
        "title": "🎬 用 Claude Cowork 打擊金融犯罪",
        "category": "企業與客戶案例",
        "text": "<b>Quanto 如何用 Opus 4.7、Cowork plugin 與 MCP gateway 安全地做金融犯罪調查</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是法國金融科技公司 Quanto 分享他們怎麼用 Claude 幫忙調查洗錢等金融犯罪。它值得看，是因為把「讓 AI 碰敏感資料，同時又守得住」這件事講得很具體：誰能查什麼、查過的都留紀錄、AI 做完的結論還要再被檢查。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=44s\" target=\"_blank\">00:44</a> Quanto 是法國 fintech，有超過 600,000 名客戶、在歐洲超過 8 個市場營運；全球每年有 2 到 5 兆美元被洗錢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Quanto 是法國的 fintech（用網路和軟體提供金融服務的公司），有超過 60 萬名客戶，在歐洲 8 個以上的市場營運。全球每年被洗的錢有 2 到 5 兆美元，這個問題非常大。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=135s\" target=\"_blank\">02:15</a> 金融犯罪流程：警示系統全自動產生 alert，之後由人工調查員從多個資料來源蒐集資料並判斷，過程很耗時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 抓金融犯罪分成兩段：系統先自動發出 alert（「這筆交易怪怪的」這類警示），再由調查員到好幾個系統翻資料、自己判斷。慢就慢在後面這段人工調查。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=259s\" target=\"_blank\">04:19</a> 第一道防線（警示系統）用預測式 AI／傳統機器學習加確定性規則；Quanto 把 agentic AI 用在人工處理的第二道防線<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一段警示靠傳統機器學習做預測，再加上寫死的規則，求的是穩和快。Quanto 把 agentic AI（會自己規劃步驟、動手查資料的 AI）用在第二段人工調查。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=323s\" target=\"_blank\">05:23</a> 選 Opus 4.7，因為要在很長的 context window 裡推理；講者以 GraphWorks benchmark 說明它擅長找出散落在文件各處的事實<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 選 Opus 4.7，是因為調查要一次讀很多文件。context window 是模型一次能讀進的內容量，讀得很長時還要推理得準。講者用 GraphWorks 測驗說明，它很會把散在文件各處的線索找出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=357s\" target=\"_blank\">05:57</a> 用 Claude Cowork 當調查員的介面：非技術人員容易上手，也能打包含多個 skills、tools 與 MCP servers 的 plugin<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cowork 是 Claude 的工作介面，不會寫程式的調查員也能上手。它能把 skills（寫好的做事流程）、tools（可以呼叫的功能）和 MCP server（讓 AI 連上外部資料的接口）包成一個 plugin（外掛包）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=698s\" target=\"_blank\">11:38</a> MCP gateway 負責驗證身分、role-based access control、把 audit trail 寫進 append-only 資料庫，並連接下游 MCP servers<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP gateway 是 AI 查資料要先經過的總門口：先確認身分，再依職位給權限（role-based access control），每次存取都寫進只能新增、不能修改的紀錄（audit trail），事後查得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=1212s\" target=\"_blank\">20:12</a> Plugin 設計：orchestrator skill 呼叫各 sub-skill，結尾跑 meta-skill 驗證結果；prompt 用 XML 結構，並註明要用的 MCP servers 和 tools<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Plugin 裡有一個 orchestrator（總指揮）skill，依序叫各個子步驟，最後跑 meta-skill 檢查結果。指令用 XML 標籤分區塊寫（像幫每段貼標題），並寫明每一步要用哪個 MCP server 和 tool。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=1306s\" target=\"_blank\">21:46</a> Evals 評估三件事：有沒有呼叫正確的 tools、順序對不對、資料是否有根據（不幻覺）；另外用 LLM as a judge 評估推理過程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Evals（上線前的測驗）看三件事：工具有沒有用對、順序對不對、結論有沒有資料根據，而不是 AI 自己編的（幻覺）。另外用 LLM as a judge，讓另一個模型檢查推理過程合不合理。</span>\n\n📘 術語<br><b>MCP gateway</b>（MCP 閘道）：負責驗證使用者、依身分做權限控管、記錄 audit trail，並轉送請求給下游 MCP servers<br><b>Paseto tokens</b>（Paseto 權杖）：platform-agnostic security tokens，2018 年的技術，適合短效 token；內容未加密但有簽章，可驗證有沒有被竄改<br><b>meta-skill</b>（後設技能）：每次執行 plugin 時都在最後執行，負責驗證結果<br><b>LLM as a judge</b>（以大型語言模型當評審）：用來評估模型得出結論的推理過程是否正確，不只看輸出<br><b>human on the loop</b>（人在迴路上）：AI 自主做決策，人類負責審查；是從 human in the loop 往前走的下一步\n\n📺 <a href=\"https://www.youtube.com/watch?v=tUoO4ucrNc0&t=0s\" target=\"_blank\">Fighting financial crime with Claude Cowork</a>（2026/05/22 · 27 分鐘）",
        "tip": "💡 你可以怎麼用：如果你想讓 AI 做重複的查資料或整理工作，可以照這套做：先把流程拆成固定步驟，最後加一步「檢查每個結論都有標出處」。正式用之前，先拿幾個你已經知道答案的案例試跑，看它有沒有照步驟做、有沒有亂編。",
        "quiz": {
          "q": "Quanto 的 Authorization Gateway 要傳給下游 MCP servers 的短效 token，用的是哪種技術？",
          "options": [
            "JWT",
            "API key",
            "Paseto tokens",
            "直接轉傳 single sign-on 的 token"
          ],
          "correct": 2,
          "why": "講者說他們會另外產生（mint）Paseto token，不直接轉傳 single sign-on 的 token，因為要給下游 MCP servers 一個短效 token（10:08、16:11、16:41）"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_T8N0MED3IJo",
        "title": "🎬 程式碼與法庭交會之處：站在法律與技術前沿的 AI",
        "category": "企業與客戶案例",
        "text": "<b>Solve Intelligence 說明專利工作為何不適合「委派」模式，並分享三個協作式 AI 設計原則</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這場是做專利 AI 工具的公司 Solve Intelligence 的分享。他們解釋為什麼寫專利不能像寫程式那樣，交代完就整個丟給 AI 做，而是要讓 AI 和律師邊做邊討論。如果你常用 AI 處理重要文件，他們的三個設計原則可以直接拿來用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=80s\" target=\"_blank\">01:20</a> 專利法同時需要軟體開發用到的深度技術推理，也需要法律工作那種從大量文件中找出關鍵資訊的能力，Solve Intelligence 就是為這個交叉領域打造產品<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫專利要懂技術，懂到看得懂工程細節；也要像律師一樣，從一大堆文件裡挑出關鍵。兩種能力很少有人同時具備，Solve Intelligence 就是專做這一塊的 AI 工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=142s\" target=\"_blank\">02:22</a> 專利是發明人和社會之間的契約：發明人公開發明怎麼運作，換取國家給予 20 年的獨占權<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 專利的本質是交換：發明人把發明怎麼運作公開寫清楚，讓社會學得到；國家則保證 20 年內，別人不能擅自使用。所以文件怎麼寫，直接決定能保護到多少。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=575s\" target=\"_blank\">09:35</a> 「委派」模式不適合專利工作的第一個原因：軟體可以用測試驗證，但專利沒辦法「執行」，它對不對取決於未來審查、競爭對手和訴訟會怎麼發展<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「委派」是把需求講清楚後，實作全交給 AI。寫程式可以跑測試，馬上知道對錯。專利沒辦法這樣試，要等之後的審查、競爭對手挑戰，甚至打官司，才知道寫得好不好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=669s\" target=\"_blank\">11:09</a> 第二個原因：專利裡的各項決策彼此牽連。例如改寫 claim 1，常常得回頭修改其他 claims、說明書和圖式，所以律師的判斷必須隨著文件成形一步步加進去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ claim 是專利裡劃定保護範圍的條文。改了第一條，其他條文、說明書、圖式常常都得跟著改，牽一髮動全身。所以律師要邊寫邊判斷，不能等全部寫完才看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=1106s\" target=\"_blank\">18:26</a> 原則一：把 citations 當成一等公民。任何交給 LLM 的資訊都要用可以引用的格式呈現，讓人能核對 AI 說的內容是否正確<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ citation 就是標出處；LLM 是 Claude 這類大型語言模型。餵給 AI 的資料都先整理成能標出處的形式，AI 講的每句話都能連回原文，人才能快速核對它有沒有講錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=1236s\" target=\"_blank\">20:36</a> 原則二：專用介面裡使用者設定的需求，可以轉成指令交給通用 agent（必要時加上額外工具）。這樣通用 agent 變強時，各項特定功能也會一起變好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己規劃步驟、動手做事的 AI。使用者在專用畫面上的設定，背後會轉成文字指令，交給同一個通用 agent。底層 agent 變強時，各個功能不用重做就一起進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=1303s\" target=\"_blank\">21:43</a> 原則三：先平行處理「對齊」，再依序「執行」。主動找出需要使用者拍板的決策，減少和使用者來回確認的次數與時間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「對齊」是先確認雙方要的方向一致。AI 先把所有需要人拍板的問題一次列出來，你一次回完，它再照順序動手改。這比做到一半卡住、一次又一次回頭問你省時很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=1693s\" target=\"_blank\">28:13</a> Demo 的申請書審查：每項審查標準各自跑一個平行的 sub-review，先產生 comments 讓律師回覆或駁回，雙方對齊後才交給 agent 依序修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範中，AI 審一份申請書時，每項審查標準各開一個 sub-review（子審查）同時跑，先留下 comments（批註）。律師逐條回覆或駁回，雙方意見一致後，AI 才依序修改。</span>\n\n📘 術語<br><b>delegation model</b>（委派模式）：描述你要什麼，把實作交給 agent 去做；講者認為 Claude Code、Cowork 是這種模式<br><b>collaboration model</b>（協作模式）：AI 在需要時提出待決定的事項並說明取捨，等使用者決定後再執行<br><b>person having ordinary skill in the art</b>（該領域具通常知識者）：假想的從業者，具備相關專業、讀過相關 prior art，但不會自己發揮創造力<br><b>office action</b>（審查意見通知）：審查委員發出的通知，指出 claims 缺乏新穎性、顯而易見或揭露不足等問題<br><b>file history</b>（審查歷史檔案）：答辯過程中所有論點都會存成永久紀錄，專利核准後會影響 claims 的解釋方式\n\n📺 <a href=\"https://www.youtube.com/watch?v=T8N0MED3IJo&t=0s\" target=\"_blank\">Where code meets court: AI at the legal-technical frontier</a>（2026/05/22 · 32 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 AI 改合約、企劃這類重要文件時，先別叫它直接改。請它「先列出所有需要我決定的地方和各自的取捨，並註明每個依據出自原文哪一段」，你一次回覆完，再讓它動手。",
        "quiz": {
          "q": "在 Demo 的申請書審查功能中，為什麼系統先產生 comments，而不是直接修改文件？",
          "options": [
            "因為各個平行 sub-review 直接產生的修改建議會彼此衝突",
            "因為產生 comments 比直接修改更省 token",
            "因為模型無法直接編輯專利文件",
            "因為法規要求所有修改都必須由律師親手完成"
          ],
          "correct": 0,
          "why": "講者在 [28:13] 說，如果各個 sub-review 直接產出修改，建議會互相衝突，所以先產生 comments 讓律師對齊。"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_MyYe6C4NVu0",
        "title": "🎬 The Problem Solvers：Genspark 的 Kay Zhu",
        "category": "企業與客戶案例",
        "text": "<b>Genspark 的 Kay Zhu 談團隊文化、開放合作，以及 AI 時代的選擇</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方的人物訪談，主角是 AI 辦公工具公司 Genspark 的 Kay Zhu。內容講的不是技術細節，而是 AI 發展這麼快的時候，一家小公司怎麼帶團隊、怎麼跟合作夥伴相處，連選科系的想法都跟著變了。如果妳想知道做 AI 產品的人怎麼看未來，這支很好入門。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=0s\" target=\"_blank\">00:00</a> Kay Zhu 的兒子快滿 18 歲。三年前 Kay Zhu 可能會逼他主修電腦科學，現在兒子要去大學念 commercial dance。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Kay Zhu 的兒子快 18 歲了。換作三年前，Kay Zhu 大概會要兒子念電腦科學這種大家覺得好找工作的科系。現在兒子要去大學念 commercial dance，也就是商業舞蹈，像演唱會、MV 裡的那種舞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=0s\" target=\"_blank\">00:00</a> Kay Zhu 認為 AI 能幫人做很多事，所以應該追隨自己的心。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前選科系常先想哪個好找工作。現在 AI 能幫忙做掉很多技術性的事，逼自己去學不喜歡的東西就沒那麼必要了，不如選自己真正有熱情的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=30s\" target=\"_blank\">00:30</a> Genspark 是 all in one workspace，為一般白領工作者提供 AI spreadsheets、AI slides、AI documents 等功能。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ all in one workspace 就是把工作要用的工具集中在同一個平台上。Genspark 在裡面放了會用 AI 幫忙做的試算表、簡報和文件，主要給一般上班族用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=30s\" target=\"_blank\">00:30</a> Genspark 工程師對最新模型很好奇，每次收到 applied AI team 的新東西，都像收到派對邀請。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ applied AI team 是負責把最新 AI 模型實際用到產品上的團隊。每次拿到這個團隊的新東西，Genspark 的工程師都急著想試，就像收到派對邀請一樣期待，不會覺得又多了一件工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=61s\" target=\"_blank\">01:01</a> Genspark 是很小的新創，沒辦法什麼都自己做，所以和可信賴的夥伴合作非常重要。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 小公司人力和資源都有限，沒辦法每樣技術都自己從頭做，所以要找靠得住的夥伴分工。對方把擅長的部分顧好，自己才能專心做產品。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=61s\" target=\"_blank\">01:01</a> Kay Zhu 認為變化太快，現在沒有誰真的有 mode（字幕原文），唯一的 mode 是團隊文化：不斷嘗試最新技術，執行得更快。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 字幕寫的是 mode，推測原意是 moat（護城河），指別人很難追上的優勢。Kay Zhu 認為技術變太快，這種優勢沒人守得住。唯一可靠的是團隊習慣：一直試新技術，而且動作要比別人快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=92s\" target=\"_blank\">01:32</a> 合作的關鍵是開放，今天守住的祕密明天就會一文不值。合作成功要靠深度信任，順利時回饋循環非常緊密。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 技術變這麼快，今天藏著不講的東西，明天可能就過時了，不如坦白交流。tight feedback loop 指回饋來回得很快：一方提出問題，另一方馬上回應，再立刻修改。要做到這樣，雙方得真的互相信任。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=92s\" target=\"_blank\">01:32</a> 面試者問兩年後的 Genspark 會變成什麼樣子，Kay Zhu 回答：「我不知道」，因為會出現很多新東西，甚至像魔法一樣。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 連公司兩年後會變成什麼樣子，Kay Zhu 都直接說不知道。原因是 AI 進步太快，會冒出很多現在想像不到的東西。老實承認這一點，比硬畫一張藍圖更實在。</span>\n\n📘 術語<br><b>all in one workspace</b>（一站式工作空間）：Kay Zhu 用來形容 Genspark：提供 AI spreadsheets、slides、documents，給一般白領工作者使用<br><b>tight feedback loop</b>（緊密的回饋循環）：Kay Zhu 形容合作真正順利時的狀態\n\n📺 <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=0s\" target=\"_blank\">The Problem Solvers: Kay Zhu at Genspark</a>（2026/05/22 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：新的 AI 工具出來時，挑一件手邊真的要做的事，例如用 AI 做一份簡報，花半小時試試看，比光看介紹更快知道好不好用。跟同事或合作對象分享使用心得時也別藏私，大家互相回饋，進步會快很多。",
        "quiz": {
          "q": "Kay Zhu 快滿 18 歲的兒子上大學要念什麼？",
          "options": [
            "商業舞蹈（commercial dance）",
            "電腦科學（computer science）",
            "人工智慧（AI）",
            "商業管理"
          ],
          "correct": 0,
          "why": "[00:00] Kay Zhu 說三年前可能會逼兒子主修電腦科學，但兒子其實要去大學念 commercial dance。"
        },
        "status": "old"
      },
      {
        "id": "yt_M5uwBawBDpw",
        "title": "🎬 AirOps 如何追著摩擦點，用 Claude 打造 AI 產品",
        "category": "企業與客戶案例",
        "text": "<b>AirOps 分享怎麼把 agent 做到行銷人員也能用，以及兩個主要摩擦點的解法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：AirOps 是做行銷用 AI 工具的公司。這支影片是他們產品團隊分享的經驗：怎麼把 agent 做到連不寫程式的行銷人員都能順手使用。agent 是會自己規劃步驟、動手把任務做完的 AI 助手。影片也講了過程中碰到的兩個最大卡點，以及他們怎麼解決。想把 AI 帶進團隊日常工作的人，可以拿來當參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=18s\" target=\"_blank\">00:18</a> 講者 Dylan 來自 AirOps 產品團隊。核心重點是：要讓 agent 容易上手很難，尤其要讓行銷人員這類非開發者也會用，過程中有很多摩擦點。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Dylan 的重點是：做出一個能跑的 agent 不算難，難在讓不會寫程式的行銷人也覺得好上手。從操作介面到產出結果，每一段都可能讓人卡住。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=140s\" target=\"_blank\">02:20</a> 舊版節點式 workflow builder 有「複雜度天花板」：得教行銷人員 liquid text、JSON 這些概念。每次出新模型，流程就要跟著改，壽命很短。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 舊工具 workflow builder 是把每個步驟畫成方塊、再用線連成流程。行銷人得先學 liquid text（範本裡插變數的寫法）和 JSON（一種資料格式）才用得來。新模型一出，流程又得重改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=263s\" target=\"_blank\">04:23</a> Opus 4.5 推出是轉折點。他們先試過用 LLM 編譯 workflow，再試傳統 agent 框架，兩者都很脆弱。最後改用 Claude Agent SDK，靠 markdown 檔和 skills 來編排 agent。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 4.5 是轉折點。他們試過讓 AI 自動產生流程，也試過套現成的 agent 框架，結果都容易出錯。最後改用 Claude Agent SDK（官方開發套件），用 markdown 文字檔和 skills（寫給 AI 的做事說明）來指揮 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=386s\" target=\"_blank\">06:26</a> AirOps Next 推出兩項功能：內容行銷 agent「Quill」，以及新的建構介面 playbooks。playbooks 類似 skill，另外支援協作、治理和版本控管。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新版 AirOps Next 有兩樣新東西：Quill 是專寫行銷內容的 agent；playbooks 是新的建構方式，本質上就是 skill，另外加了多人協作、治理（管誰能改什麼）和版本控管（保留每次修改、可以退回）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=446s\" target=\"_blank\">07:26</a> Parallel 案例：citation rate 提升 130%，share of voice 提升 42%，1 週就上線。以往用 workflow builder 通常至少要一個月左右。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 客戶 Parallel 的成果：在 ChatGPT 這類 AI 的回答裡被引用的比例（citation rate）增加 130%，品牌被提到的占比（share of voice）增加 42%。而且一週就上線，舊工具通常要一個月左右。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=568s\" target=\"_blank\">09:28</a> 摩擦點一：能做的事太多，反而逼人要聚焦。解法是做成文件式介面（類似 Google Docs），重視透明度和掌控感，並強制人工審查（human review）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一個卡點：agent 能做的事太多，反而要逼使用者聚焦。解法是做成像 Google Docs 的文件介面，讓人看得到 AI 在做什麼、自己也改得動，而且規定一定要有人審過才算數（human review）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=870s\" target=\"_blank\">14:30</a> 強制人工審查的做法：每個段落結尾可以指派審查者，agent 要等被指派的人放行才能繼續。待審項目會集中在 inbox 和 grid 裡顯示。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 具體做法是每一段結尾都可以指定審核人，對方還沒放行，agent 就停著等。所有等待審核的項目集中在 inbox（收件匣）和 grid（表格總覽），負責人一眼就知道要看哪些。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=1117s\" target=\"_blank\">18:37</a> 摩擦點二：輸出品質。解法一是做專用工具，例如頁面分析和 page versus 比對。解法二是加 sub-agent：compliance check、寫作、brand kit，也可以自訂。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第二個卡點是產出品質。解法一是做專用工具，例如分析網頁、把兩個頁面拿來比較。解法二是加 sub-agent（只專做一件事的分身，不會弄亂主線），像合規檢查、寫作、brand kit（品牌資料庫），也可以自己定義。</span>\n\n📘 術語<br><b>AI search</b>（AI 搜尋）：類似 SEO，但對象換成 ChatGPT、Gemini、Claude 這類引擎，重點是品牌能不能被搜尋到<br><b>playbook</b>（playbook（操作手冊））：AirOps 新的建構介面，基本上就是 skill，另外加上協作、治理和版本控管<br><b>harness engineering</b>（harness 工程）：用車來比喻：模型是引擎，圍繞模型打造的其他部分同樣重要，決定 agent 好不好<br><b>brand kit</b>（品牌資料包）：一個知識庫或 context 層，收錄關於某個品牌需要知道的一切<br><b>sub-agent</b>（子代理）：有自己專注的 context window，負責單一任務，避免污染主 context\n\n📺 <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=0s\" target=\"_blank\">How AirOps chases friction to build AI products with Claude</a>（2026/05/22 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：用 Claude 處理重複性的工作時，先把做法寫成一份固定的說明（像 skill 那樣），並在關鍵步驟要求它「等我確認再繼續」。品牌語氣、不能用的字這類規則，也整理成一份資料讓它每次參考，產出會比較穩定。",
        "quiz": {
          "q": "根據影片，AirOps 在每次執行一開始就會啟動哪一個 sub-agent，讓它先抓取所需 context 並存成內部 artifact？",
          "options": [
            "Compliance check sub-agent",
            "Brand kit sub-agent",
            "Writing sub-agent",
            "Custom sub-agent"
          ],
          "correct": 1,
          "why": "[22:12] 講者說 brand kit sub-agent 會在每次執行一開始就啟動，抓取相關 context 並存成內部 artifact。之後主 agent 迴圈直接參照這份 artifact，不用重新抓取。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_A3rmSUp6Dxg",
        "title": "🎬 Metaview 如何在履歷審查中打造自我改進的 prompt",
        "category": "企業與客戶案例",
        "text": "<b>Metaview 用會從招募者決策中學習的 ICP prompt 來輔助履歷審查</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：招募軟體公司 Metaview 分享他們怎麼用 Claude 幫招募者初篩履歷。AI 讓大家投履歷變得太容易，應徵量暴增，所以他們讓 AI 從招募者每次的決定中學習，自動更新篩選標準。就算你不做招募，「讓給 AI 的指令跟著人的判斷一起變」這個做法，也適用在任何要反覆調整 AI 的工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=44s\" target=\"_blank\">00:44</a> 從 2023 年起，AI 降低了求職門檻，應徵數量暴增；有客戶的一個職缺在 24 小時內收到 2,740 份應徵<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 2023 年之後，AI 讓投履歷變得超省力，應徵數量跟著暴增。有客戶開一個職缺，24 小時就收到 2,740 份，招募者根本不可能一份一份細看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=77s\" target=\"_blank\">01:17</a> 應徵問題（例如「為什麼想來這裡工作」）的平均回答長度，近兩年大約增加了 50%，原因是有 LLM 幫忙寫<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 像「為什麼想來這裡工作」這種問題，平均回答近兩年變長了約 50%，因為很多人請 LLM（大型語言模型，像 ChatGPT 這類會寫文章的 AI）代寫。字變多了，內容卻不一定更好，篩選起來反而更吃力。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=140s\" target=\"_blank\">02:20</a> 招募者的偏好一直在變（例如突然要求要有新創經驗、zero to one 經驗），所以 prompt 也得跟著變。要把這件事當成系統的基礎，不要最後才補上<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 招募者想找的人會一直變，例如突然說要有新創經驗、要有 zero to one（從零開始把東西做出來）的經驗。給 AI 的指令（prompt）也得跟著改，所以一開始設計系統就要考慮到「標準會變」，不能等出問題才補。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=206s\" target=\"_blank\">03:26</a> 流程：先遮蔽候選人的姓名、email、電話等個資，再拿去和 ideal candidate profile（ICP）比對，產出評估結果。ICP 是會自我改進的那部分 prompt<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 流程是先把姓名、email、電話等個資遮起來，再拿去和 ICP（理想人選描述，寫清楚這個職缺要找什麼人、要補什麼缺）比對，產出評估結果。ICP 就是 prompt 裡會越改越準的那一段。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=241s\" target=\"_blank\">04:01</a> 不只是 human in the loop，而是 human in the center：系統扮演 apprentice（學徒），負責做粗活，由使用者決定候選人要進入下一關還是被淘汰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ human in the loop 的意思是流程中有人把關；這裡更進一步，叫 human in the center，人才是主角。系統像學徒（apprentice）一樣先做粗活，候選人要過關還是淘汰，都由招募者決定。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=304s\" target=\"_blank\">05:04</a> ICP agent 會把使用者的進關／淘汰決定、回饋和手動編輯當成輸入，再用 Query Files 工具查看被遮蔽個資的履歷，搞懂那些相對性的回饋，最後交給 ICP Manager agent 更新 ICP<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ICP agent（會自己查資料、做判斷的 AI 助手）會收集招募者的過關／淘汰決定、回饋和修改，再用 Query Files（專門查履歷的工具）翻出履歷，搞懂「比上一位強」這種比較式的評語，最後交給 ICP Manager 更新 ICP。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=430s\" target=\"_blank\">07:10</a> 每天要處理幾千份應徵，無法全部交給 agent 處理；所以底層用 workflow，上層再放一個 agent，藉此控制 token 用量<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每天有幾千份應徵，全部交給 agent 自由發揮，會太耗 token（AI 計算和計費的單位）。所以大量的評估走固定的 workflow（照既定步驟跑的流程），只在上層放一個 agent 處理需要判斷的事，才控制得住成本。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=553s\" target=\"_blank\">09:13</a> 選用 Claude 是因為模型要能批判性思考、看穿履歷裡的誇大內容：Haiku 負責大量評估，Sonnet 負責找出使用者決策中的模式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 選 Claude 是因為模型要能批判性思考、看穿履歷裡的灌水。分工上，比較輕量便宜的 Haiku 負責大量評估履歷，能力比較強的 Sonnet 負責從招募者的決定中找出規律。</span>\n\n📘 術語<br><b>Ideal Candidate Profile (ICP)</b>（理想候選人輪廓）：類似 ideal customer profile，描述這個職缺在找什麼樣的人、要補什麼缺<br><b>Human in the center</b>（以人為中心）：不只是 human in the loop；決策由使用者做，系統只是輔助的 apprentice<br><b>Query Files</b>（檔案查詢工具）：專門用來翻查候選人履歷的工具，因為用 grep 很難處理非結構化資料<br><b>ICP Manager agent</b>（ICP 管理 agent）：只有一個任務：讓 ICP 這份 prompt 保持在最新狀態<br><b>Prose, not rules</b>（用文字敘述，不用規則）：ICP 是 markdown 文件，不用權重、if 判斷或流程圖，改用自然語言來描述\n\n📺 <a href=\"https://www.youtube.com/watch?v=A3rmSUp6Dxg&t=0s\" target=\"_blank\">How Metaview built self-improving prompts for application review</a>（2026/05/22 · 16 分鐘）",
        "tip": "💡 你可以怎麼用：你給 AI 的判斷標準，可以像 Metaview 的 ICP 一樣，用白話文字寫成一份文件，不用寫評分公式或規則清單。每次覺得 AI 判斷不對，就把你實際的決定和理由補進這份文件，讓它越用越符合你的想法。",
        "quiz": {
          "q": "根據演講，Metaview 用 Haiku 來做哪一項工作？",
          "options": [
            "遮蔽候選人的姓名、email 等個資",
            "把 ICP 轉成有權重的關鍵字規則",
            "每天處理幾千份的候選人評估",
            "從使用者決策中找出模式、更新 ICP"
          ],
          "correct": 2,
          "why": "[09:13] 講者說「Haiku for our evaluations」，每天要跑幾千份評估；[09:44] 則說找模式的工作交給 Sonnet。另外 [07:42] 講者也明說不使用權重。"
        },
        "status": "old"
      },
      {
        "id": "yt_nho1YAEPuwA",
        "title": "🎬 法律 agent 從 coding agent 繼承了什麼：來自 Legora 的經驗",
        "category": "企業與客戶案例",
        "text": "<b>Legora 工程師分享如何借用 coding agent 的做法，打造處理法律工作的 agent</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Legora 是做法律 AI 平台的公司。他們的工程師在這支影片分享：怎麼把 coding agent（會自己讀檔、改程式、跑檢查的 AI 助手）的做法搬去處理法律工作。重點是哪些可以直接照用、哪些要改一改、哪些得自己想。想知道 AI 怎麼可靠地處理長篇專業文件的人，很值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=127s\" target=\"_blank\">02:07</a> 寫程式與法律工作有很多相似處：都高度依賴先前的成果、以文字文件為主、組織內有嚴格慣例，而且都有很強的審閱文化<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫程式和做法律其實很像：都要沿用前人的成果（舊程式、舊合約），主要處理文字，公司內有固定寫法，交出去前一定有人審。所以寫程式的經驗搬得過來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=192s\" target=\"_blank\">03:12</a> 向 coding agent 學習可分三類：可以直接沿用的（to-dos、planning、subagent、sandbox、human in the loop）、需要轉化的、需要自己發明的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 可以學的分三種：直接搬、要改造、要自創。直接搬的有待辦清單、planning、subagent（分工的子 agent）、sandbox（隔離區）、human in the loop。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=325s\" target=\"_blank\">05:25</a> 直接沿用的例子：先規劃再執行的 planning 模式，以及危險動作（例如刪除客戶文件）前先詢問使用者的 tool call 核准機制<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ planning 就是先列好步驟再動手。tool call（agent 動用工具做事）碰到危險動作，像刪客戶文件，會先問你、你同意了才執行，這就是 human in the loop。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=517s\" target=\"_blank\">08:37</a> 舊的 docx 編輯做法是把任務交給多個獨立的 LLM 呼叫，各自有不同的 context 和工具，衍生出很多交接問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前改 Word 檔（docx）是拆給好幾次獨立的 LLM（大型語言模型）呼叫，每次看到的 context（手上的資料）和工具都不一樣，交棒時資訊很容易漏掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=618s\" target=\"_blank\">10:18</a> 改用和 coding agent 一樣的 read、edit、verify 迴圈：先把 docx 轉成扁平的文字中介表示，agent 再用編輯工具直接修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 改用 coding agent 的讀、改、檢查循環：先把 docx 攤平成一份純文字的「中介表示」，agent 直接用編輯工具改它，改完再檢查，不用再一層層交接。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=742s\" target=\"_blank\">12:22</a> POC 測試：用 Haiku 把 10 頁文件逐段從英文翻成瑞典文，agent 會自己回頭檢查補上漏掉的段落，最後全部翻完<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ POC 就是先小規模試試看行不行。他們用 Haiku（Claude 比較小、比較快的模型）把 10 頁英文文件逐段翻成瑞典文，agent 會自己回頭檢查、補翻漏掉的段落，最後全部翻完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=808s\" target=\"_blank\">13:28</a> 需要轉化的例子：法律文件版的 ESLint，例如用靜態方式檢查條款之間的引用是否還有效，提供 agent 回饋迴圈<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要改造的例子：仿照 ESLint（自動挑出程式碼錯誤的檢查工具），做一個法律文件版，比如自動檢查「依第 5 條」這類引用還對不對得上。agent 改完馬上知道有沒有改壞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=976s\" target=\"_blank\">16:16</a> 需要自己發明的例子：做 due diligence 時讓 agent 使用平台上的 Tabular Review，自行指定要擷取的欄位，再篩選出重點<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要自創的例子：做 due diligence（併購前審完對方所有合約，可能上千份）時，agent 用 Tabular Review（每列一份文件的表格）自己訂要抓的欄位，再篩出重點。</span>\n\n📘 術語<br><b>human in the loop</b>（人在迴路中）：某些動作要先問使用者、得到同意後 agent 才能執行，例如執行 shell 指令或刪除文件<br><b>intermediate representation</b>（中介表示）：把 docx 轉成扁平的單一文字檔，讓 agent 可以讀取並用編輯工具修改<br><b>Tabular Review</b>（表格式審閱）：Legora 的格狀介面，每一列是一份文件，加欄位就能用 LLM 做結構化資料擷取<br><b>due diligence</b>（盡職調查）：A 公司收購 B 公司時，律師要審閱 B 公司的所有合約，數量可能多達好幾千份<br><b>redline</b>（修訂標示）：律師常在 Word 裡做的工作之一；示範中 agent 的修改會以 redline 版本呈現\n\n📺 <a href=\"https://www.youtube.com/watch?v=nho1YAEPuwA&t=0s\" target=\"_blank\">What legal agents inherit from coding agents: Lessons from Legora</a>（2026/05/21 · 28 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 AI 處理長文件（翻譯、改合約），先叫它列計畫、分段做，做完要它對照原文檢查有沒有漏段。也可以給它一張檢查清單，例如「條號引用有沒有對上」，讓它自己核對。",
        "quiz": {
          "q": "Legora 用 POC 測試「逐段把英文翻成瑞典文」時，用的是哪個模型？",
          "options": [
            "Opus",
            "Sonnet",
            "Haiku",
            "自家微調的法律專用模型"
          ],
          "correct": 2,
          "why": "[12:22] 講者說為了測試新 harness 和工具設計的效果，整個流程是用 Haiku 跑的（\"we run this whole thing on Haiku\"）"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_K4-flzsPraE",
        "title": "🎬 打造最好的 agentic 資料分析 harness：由 Claude 驅動，用 Claude Code 打造",
        "category": "企業與客戶案例",
        "text": "<b>Omni 的 CTO 分享他們怎麼用 Claude Code 開發，又怎麼一步步打造資料分析 agent Blobby</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Omni 是做資料分析工具的公司，這支影片由他們的 CTO 分享兩件事：團隊怎麼用 Claude Code（Anthropic 出的 AI 寫程式助手）開發產品，以及怎麼打造資料分析 agent Blobby（agent 是能自己規劃步驟、呼叫工具完成任務的 AI）。值得看的地方在於，他把 harness（包在模型外面、提供工具、規則和流程的那層程式）一路踩過的坑和改法都講得很具體。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=83s\" target=\"_blank\">01:23</a> 2025 年初團隊開始試用 AI 工具。Claude Code 搭配 Opus 推出後，資深工程師認為它能穩定帶來幫助；一月起 commit 數明顯變多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 2025 年初團隊還在試用 AI 工具。Claude Code 搭配 Opus（Claude 能力最強的模型）推出後，連資深工程師都覺得它能穩定幫上忙；一月起 commit（每次存進程式庫的一筆修改）數量明顯變多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=205s\" target=\"_blank\">03:25</a> 使用者提問後，Claude 會把問題轉成 semantic query。semantic layer 架在資料倉儲上面，負責轉成 SQL，也處理資料篩選、context 和權限<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 會先把你的問題轉成 semantic query，也就是用公司定義好的指標和欄位來描述的查詢。接著由 semantic layer 這層轉譯器翻成 SQL（查資料庫用的語言），同時處理篩選和權限。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=361s\" target=\"_blank\">06:01</a> context 放在它描述的欄位定義旁邊效果更好，就像 Claude.md 越靠近對應的程式碼越好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context（給 AI 看的背景說明）要緊貼著它說明的那個欄位寫，AI 才對得上號。道理和 Claude.md（寫給 Claude Code 看的專案說明檔）一樣，放得越靠近相關程式碼越有用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=580s\" target=\"_blank\">09:40</a> 早期版本補上 AI context、sample queries，以及欄位值範例（例如 region 的 EMEA、NAM、APAC），回答品質因此提升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 早期版本靠多給資料：AI context（寫給 AI 看、告訴它什麼問題該用哪個欄位的說明）、sample queries（範例查詢），還有欄位實際值的例子，像 region 裡填的是 EMEA、NAM、APAC，AI 就不用亂猜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=701s\" target=\"_blank\">11:41</a> 加上 agentic loop 之後，教 Blobby 怎麼從錯誤中恢復、給它重試的額度，再把錯誤訊息寫清楚，品質分數大幅上升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agentic loop 是讓 AI 自己執行、看結果、再修正的循環。他們教 Blobby 出錯時怎麼補救，給它重試的次數，也把錯誤訊息寫到 AI 看得懂，品質分數因此大幅上升。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=731s\" target=\"_blank\">12:11</a> 對話變得更複雜後，模型從 Haiku 換成 Sonnet。token 用量增加，但使用量也跟著大幅成長<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對話變複雜後，模型從便宜又快的 Haiku 換成更聰明的 Sonnet。token（AI 計算用量的單位，和費用直接相關）用得更多，但答得更好，使用量也跟著大幅成長。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=948s\" target=\"_blank\">15:48</a> 從 trace 發現外層 agent 不知道 subagent 一個查詢能做到什麼，於是把工具收回外層，也就是「consolidating the brain」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 看 trace（AI 每一步做了什麼的紀錄）才發現，外層 agent 不清楚負責查詢的 subagent（被分派子任務的小 agent）能做到什麼，等於兩個腦各想各的。所以他們把工具收回外層，由一個腦統一指揮。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=1075s\" target=\"_blank\">17:55</a> 查詢格式從自訂的 JSON 改成直接寫 SQL，再用 parser 解析。Claude 愛用 CTE，parser 也能處理，查詢常常一次就寫對<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本要 AI 填自訂的 JSON（一種結構化資料格式），後來改成讓它直接寫 SQL，再用 parser（解析程式）拆解。Claude 很愛用 CTE（把查詢拆成幾段具名步驟的寫法），parser 也處理得來，常常一次就寫對。</span>\n\n📘 術語<br><b>semantic layer</b>（語意層）：架在資料倉儲上的轉譯層，負責篩選資料、放 context、管權限，並把查詢轉成 SQL<br><b>AI context</b>（AI 脈絡欄位）：專門寫給 LLM 看的說明，告訴它被問到某件事時該用哪個欄位<br><b>Blobotomies</b>（Blobby 大手術）：Omni 根據 trace 裡看到的問題，對 Blobby 做的一連串大改造<br><b>consolidating the brain</b>（整合大腦）：避免外層 agent 和 subagent 分成兩個腦，把工具收回外層 harness<br><b>CTE (common table expressions)</b>（通用資料表運算式）：講者觀察到 Claude 很愛用的 SQL 寫法，而他們的 parser 很會解析\n\n📺 <a href=\"https://www.youtube.com/watch?v=K4-flzsPraE&t=0s\" target=\"_blank\">Building the best agentic analytics harness: Powered by Claude, built with Claude Code</a>（2026/05/21 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：請 AI 幫你分析資料時，把每個欄位的意思和實際值的例子（例如地區代碼怎麼寫）直接附在欄位旁邊。答錯時，把完整的錯誤訊息貼回去讓它重試，不要只回一句「不對」。",
        "quiz": {
          "q": "Omni 從 trace 發現 subagent 架構出了什麼問題？",
          "options": [
            "subagent 產生的 SQL 無法在資料倉儲上執行",
            "subagent 無法存取 semantic layer 的權限設定",
            "外層 agent 不知道一個查詢能回答什麼，丟給 subagent 的問題需要跑好幾個查詢",
            "subagent 用的是 Haiku，速度太慢"
          ],
          "correct": 2,
          "why": "[14:48]–[15:18]：subagent 只負責依指示產生一個查詢，但外層 agent 不知道單一查詢能回答什麼，subagent 只好回覆必須跑多個查詢才行"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_EOg4gY0Yln0",
        "title": "🎬 打造能自己交易的訊號",
        "category": "企業與客戶案例",
        "text": "<b>Man Group 分享如何用 skills 治理，讓 AI 參與系統化交易訊號研究並上線</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由投資公司 Man Group 分享，他們讓 AI 研究股票交易規則，而且已經用真錢在交易。重點不在 AI 多會賺錢，而在公司怎麼管理 skills（寫給 Claude 的工作說明書，教它某件事該怎麼做）。很多人會各寫各的 skills，這支影片講的正是這樣做會出什麼問題、該怎麼管。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=20s\" target=\"_blank\">00:20</a> 講者是 Man Group 的 head of data and AI Sharan Fernando。Man Group 是另類投資管理公司，管理超過 200 billion dollars 的資產，客戶包括退休基金等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者 Sharan Fernando 在 Man Group 負責資料與 AI。Man Group 做的是另類投資，也就是一般買股票、債券以外的策略，例如避險基金。它管理超過 2,000 億美元，客戶包括退休基金，所以出錯的代價很高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=81s\" target=\"_blank\">01:21</a> 系統化交易的核心是交易訊號。講者用夢幻足球比喻：挑出會賺錢的股票做多，不會賺錢的做空，再用歷史資料 backtest 驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ trading signal（交易訊號）是一套挑股票的規則：把股票排名，看好的做多（買進等漲），看壞的做空（下跌才賺）。backtest（回測）是拿十幾年的歷史資料把規則跑一遍，看它過去靈不靈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=263s\" target=\"_blank\">04:23</a> Man Group 目前有交易訊號在正式環境用真實資金運作，從發想、取得資料、backtest、撰寫提案到上線都由 AI 完成，人類負責審查所有產出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這不是實驗，是真的用真錢在交易。從想點子、找資料、回測、寫提案到上線，整條流程都由 AI 完成；人不動手做，但每份產出都要人看過才放行。分工是 AI 做事、人把關。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=358s\" target=\"_blank\">05:58</a> 訊號只是冰山一角，底下是資料清理、偵測離群值、backtest 等 workflow；各團隊版本不一樣，結果就無法比較，所以需要共用的 workflow<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 大家看到的訊號只是成品，背後有一長串 workflow（固定的工作步驟），像是清理資料、找出異常值。每組做法不同，A 組說好、B 組說普通，就分不出是訊號差還是做法差。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=458s\" target=\"_blank\">07:38</a> Claude 不了解公司的資料和系統，所以他們不重新訓練、也不做 fine-tuning，而是透過 skills 讓它存取資料、能力和 workflow<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 不懂 Man Group 內部有哪些資料、系統怎麼用。他們沒有重新訓練，也沒做 fine-tuning（用公司資料再調整模型本身），而是寫 skills，告訴 Claude 去哪拿資料、照什麼步驟做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=525s\" target=\"_blank\">08:45</a> 早期推廣時 skills 多半是 power user 寫的，只為個人優化。例如報帳 skill 把成本中心代碼寫死，結果別部門的報帳單都送到業務主管那邊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始，skills 多半是 power user（很會用工具的重度使用者）照自己需求寫的。有個報帳 skill 把作者部門的成本中心代碼寫死，別部門一用，報帳單全送到業務主管那邊。自己好用，不代表別人能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=711s\" target=\"_blank\">11:51</a> 解法是建一個共用 marketplace：每個 skill 都公開、有標籤、用 eval 測試，由 workflow owner 負責，並追蹤使用量、審查、管理生命週期<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 解法是做一個公司內部共用的 marketplace（skill 市集）：每個 skill 都公開、有標籤，用 eval（事先準備好的測試題）驗過結果。由負責該流程的 workflow owner 管理，並追蹤使用量、定期審查，過時就下架。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=992s\" target=\"_blank\">16:32</a> 心得：重視組織 context、把 skills 當成 production code 來對待、推出前先想好擁有權和審查流程。目前有 750 人使用 Claude Code，governed skills 超過 100 個<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 心得有三：AI 要懂公司自己的背景（context）；skill 要像正式上線的程式（production code）一樣測試和維護；推出前先想好誰負責、誰審查。目前 750 人用 Claude Code，受管理的 skills 超過 100 個。</span>\n\n📘 術語<br><b>trading signal</b>（交易訊號）：就像挑夢幻足球隊員，把股票排名後決定要做多還是做空<br><b>backtest</b>（回測）：把策略寫成程式，拿 15 年甚至更長的歷史資料跑一遍，看它表現如何<br><b>drawdown</b>（回撤）：策略虧錢的時候，總共虧了多少<br><b>skills governance</b>（skills 治理）：skill 由 workflow owner 負責，經過測試和審查、有生命週期，而且大家都看得到<br><b>plugin</b>（外掛）：把一組相關的 skills 包在一起，例如可以存取 Man Group 資料集的 data plugin\n\n📺 <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=0s\" target=\"_blank\">Building signals that trade themselves</a>（2026/05/21 · 20 分鐘）",
        "tip": "💡 你可以怎麼用：你寫好的 skill 或常用提示詞，要分享給同事之前，先檢查裡面有沒有寫死只適用你自己的資訊，例如部門代碼、檔案路徑或聯絡人。再準備兩三個測試例子，確認別人用也會得到正確結果，並講清楚之後誰負責修改。",
        "quiz": {
          "q": "講者提到的報帳 skill 出了什麼問題，導致業務主管收到一大堆別部門的報帳單？",
          "options": [
            "成本中心代碼被寫死在 skill 裡",
            "同一張報帳單被重複送出好幾次",
            "Claude 讀錯收據圖片上的金額",
            "skill 沒有接上財務系統的權限"
          ],
          "correct": 0,
          "why": "講者說追查後發現原因是 cost center code 被寫死（hard coded）了（[10:17]）"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_zFslvuvYifQ",
        "title": "🎬 寫程式不再是瓶頸：Spotify 如何把開發者體驗擴展到團隊與 agent",
        "category": "企業與客戶案例",
        "text": "<b>Spotify 分享導入 AI coding 工具、Honk 自動化遷移與標準化程式碼庫的經驗</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Spotify 工程團隊分享：AI 已經能大量寫程式之後，拖慢進度的是什麼。影片講他們怎麼讓近 3,000 名工程師都用上 AI 工具，怎麼用內部工具 Honk（用 Claude 自動修改程式碼的機器人，在 Slack 就能叫它）一次改好幾千個專案，還有「程式碼越整齊，AI 越好用」這個心得。想知道大公司怎麼把 AI 寫程式真正用起來，可以看這支。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=160s\" target=\"_blank\">02:40</a> PR 頻率增加 76%，目前大多數 PR 是 AI agent 和開發者一起撰寫的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是把改好的程式碼送出、請人審核後合併的申請，數量多了 76%。現在多數 PR 由工程師和 AI agent（會自己動手做完任務的 AI）一起寫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=517s\" target=\"_blank\">08:37</a> Honk 底層透過 agent SDK 使用 Claude，放在 Kubernetes pod 的自家 harness 裡執行，並能使用可信任的驗證工具（例如在 CI 跑 build）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Honk 用 agent SDK（把 Claude 做成自動化助手的開發套件）呼叫 Claude，在雲端小容器 Kubernetes pod 裡執行。改完會交給 CI（自動編譯測試）確認真的能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=639s\" target=\"_blank\">10:39</a> 過去由數百個團隊花好幾週到幾個月完成的遷移，現在一位工程師幾天就能做完。最近一次 Java 遷移只花了三天<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 遷移是把大量程式碼換到新版本或新工具。以前要幾百個團隊各花幾週到幾個月，現在一位工程師幾天就做完。最近一次 Java 遷移只花三天。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=702s\" target=\"_blank\">11:42</a> Honk V2 整合了 agent orchestration 工具 Chirp，支援多人共享 agent session，就像「給 Claude 用的 Google Docs」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新版 Honk 接上 Chirp，一個指揮多個 AI agent 分工合作的工具。好幾個人能進同一個 AI 工作對話（session），一起看、一起下指令，像大家共編一份 Google 文件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=981s\" target=\"_blank\">16:21</a> 程式碼一致時，Claude 表現較好；在比較零散的 codebase 中，表現會變差。Backstage 的工具以 MCP 或命令列工具的形式開放給 agent，lint 也能讓 Claude 即時自我修正<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫法越統一，Claude 越照著做；寫法雜亂就容易出錯。Backstage 的工具透過 MCP（AI 連接外部工具的標準）或指令開給 AI 用。lint（自動抓寫法錯誤）讓 Claude 當場改正。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=1381s\" target=\"_blank\">23:01</a> PR 變多，要審的也跟著多了 76%。他們已自動核准部分安全的 PR，把人工審查集中在真正重要的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 變多，要審的也多了 76%，人根本看不完。所以確定安全的 PR 就自動核准，工程師把時間留給真正有風險、需要人判斷的改動。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=1512s\" target=\"_blank\">25:12</a> 現在任何人都能用 Claude 在正式的 client monorepo 裡做 prototype，時間從幾天或幾週縮短到幾分鐘。瓶頸則轉移到人的決策<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 現在任何人都能用 Claude，直接在正式 App 的程式碼倉庫裡做 prototype（試做版），幾分鐘就做得出來。寫程式不再是瓶頸，卡住的變成人要決定做什麼。</span>\n\n📘 術語<br><b>Fleet Shift</b>（Fleet Shift（艦隊變更系統））：fleet management 的底層系統，用來在數千個 repo 之間排程和協調程式碼變更<br><b>Honk</b>（Honk）：Spotify 內部工具，底層透過 agent SDK 使用 Claude，負責實際修改程式碼，也可以在 Slack 用 @mention 呼叫<br><b>Hiram&#x27;s law</b>（Hiram 定律）：把腳本套用在大量程式碼上時，每個邊界情況都會遇到。這個名稱來自一位 Google 工程師<br><b>Golden state</b>（黃金狀態）：針對特定類型的元件，推薦使用的技術與做法<br><b>Backstage</b>（Backstage 開發者入口）：Spotify 的開發者入口網站，一開始用來登錄軟體和查詢負責人，後來整合了各種工具\n\n📺 <a href=\"https://www.youtube.com/watch?v=zFslvuvYifQ&t=0s\" target=\"_blank\">Coding is no longer the constraint: Scaling devex to teams and agents at Spotify</a>（2026/05/20 · 27 分鐘）",
        "tip": "💡 你可以怎麼用：交給 AI 的工作，先把格式、命名、範例統一，再給它一份檢查清單讓它自己核對，成果會穩很多。省下的時間拿來決定要做什麼、檢查重要的產出。",
        "quiz": {
          "q": "根據講者的說法，Spotify 用 Honk 等工具完成最近一次 Java 遷移，花了多少時間？",
          "options": [
            "好幾個月",
            "三天",
            "三週",
            "一天"
          ],
          "correct": 1,
          "why": "[10:39] 講者說：The latest Java migration we did took three days using these tools."
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_mhW-XXnDFSU",
        "title": "🎬 Lovable 如何大規模用 vibecode 打造可上線的正式軟體",
        "category": "企業與客戶案例",
        "text": "<b>Lovable 分享平台怎麼靠 Lovable Overflow 和 vent 工具自我修復，減少使用者卡關</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Lovable 是一個讓你用打字描述需求，由 AI agent（能自己動手寫程式、改網站的 AI 助手）幫你做出網站或 App 的平台。這支影片講他們怎麼讓平台 self-heal（自我修復，也就是自己發現哪裡做得不好、再自己補起來），減少使用者跟 AI 來回鬼打牆。如果你常用 AI 工具，看完會比較懂 AI 為什麼會卡住，還有背後的人怎麼調整它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=85s\" target=\"_blank\">01:25</a> 共同創辦人 Anton 在 35 個月前建立 GPT-Engineer，當時是 GitHub 上成長最快的 repository。Lovable 的目標是讓不會寫程式的 99% 的人也能打造軟體<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 共同創辦人 Anton 在 35 個月前做了 GPT-Engineer（叫 AI 寫出整套程式的工具），它曾是 GitHub（程式碼分享網站）上成長最快的專案。Lovable 的目標是讓 99% 不懂程式的人也能做軟體。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=254s\" target=\"_blank\">04:14</a> 平台上已經建立了 5,000 萬個專案，用 Lovable 做的網站每月合計有 6 億次造訪。依職能區分，最大的使用者族群是工程師<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 平台上已經有 5,000 萬個專案，做出來的網站每月合計被造訪 6 億次，表示成品真的有人在用。最大的使用族群反而是工程師，可見不只新手在用，專業的人也在用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=610s\" target=\"_blank\">10:10</a> 內部指標 is_stuck 用來判斷使用者是否卡關：連續 3 次要求同一件事、抱怨實作結果，或提出要求後就離開。判斷是透過一個小型分類模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ is_stuck 是 Lovable 內部判斷使用者卡關的指標：同一件事講 3 次、抱怨做出來的不對、提完需求就離開，都算卡關。判斷交給一個小型分類模型（專門把對話分成卡住／沒卡住的小 AI）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=800s\" target=\"_blank\">13:20</a> Lovable Overflow 是一個「問題描述＋解法」的大型資料庫。系統會搜尋相符的問題，再由一個輕量模型把改寫過的相關內容加進主 agent 的 context<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Lovable Overflow 的名字學工程師問答網站 Stack Overflow，是一個「問題＋解法」資料庫。系統先找出相似的問題，再由小模型整理好，放進主 agent 的 context（AI 當下看得到的參考資料）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=986s\" target=\"_blank\">16:26</a> 每一筆知識都會追蹤成功率，過時的就刪掉，同時持續補進新知識。調整何時淘汰、何時新增，是這套系統能運作的關鍵<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每一筆解法都會記錄用了之後有沒有真的解決問題，沒效或過時的就刪掉，新的一直補進來。什麼時候刪、什麼時候加要抓得準，整套系統才會越用越準，不會被舊資料拖累。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=1170s\" target=\"_blank\">19:30</a> vent 工具讓 agent 遇到挫折時送出回饋到 Slack。另一個 agent 先過濾、調查，必要時開 PR，再交給工程師審查，約 50% 的 PR 是合理的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ vent 工具讓 AI 覺得被工具或文件拖慢時，可以到 Slack（公司內部聊天軟體）抱怨。另一個 AI 先過濾、查原因，需要時開 PR（申請修改程式），再交給工程師審，大約一半是合理的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=1415s\" target=\"_blank\">23:35</a> vent 呼叫次數突然暴增的時段，都對應到正式環境的事故。這個 Slack 頻道好幾次比監控系統更早發出訊號，也有助於除錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 只要 vent 的抱怨突然暴增，事後看都剛好碰上正式環境（使用者實際在用的線上服務）出事。這個頻道好幾次比監控系統更早示警，AI 抱怨的內容也幫工程師更快找到原因。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=1693s\" target=\"_blank\">28:13</a> 成效：Lovable Overflow 第一版讓卡關率降低 5%、發布率提升 2%。vent 工具每天約有 10 個修正被 merge 進正式環境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Lovable Overflow 第一版讓卡關率降 5%，publish rate（做完願意公開分享的比例，代表滿意）升 2%。vent 工具每天約有 10 個修正被 merge（正式併入程式）上線。</span>\n\n📘 術語<br><b>is_stuck</b>（卡關指標）：連續 3 次要求同一件事、抱怨實作結果，或提出要求後離開，就會被判定為卡關<br><b>Lovable Overflow</b>（Lovable Overflow 知識庫）：命名是向 Stack Overflow 致敬，收集問題描述與對應解法的大型資料庫<br><b>vent tool</b>（發洩回饋工具）：工具、文件或平台行為明顯拖慢 agent 的工作時，agent 可以用它回報問題<br><b>self-heal</b>（自我修復）：平台自己在功能的邊界上持續改進，補上做得不夠好的地方<br><b>publish rate</b>（發布率）：用來推斷使用者對成品滿意、願意分享給別人的重要指標\n\n📺 <a href=\"https://www.youtube.com/watch?v=mhW-XXnDFSU&t=0s\" target=\"_blank\">How Lovable vibecodes production software at scale</a>（2026/05/20 · 31 分鐘）",
        "tip": "💡 你可以怎麼用：用 AI 做東西時，同一件事講到第 3 次還是不行，就換個說法或拆成小步驟，不要一直重複同一句。也可以學 Lovable：把踩過的坑和解法記成一份筆記，下次開新對話時先貼給 AI 當參考。",
        "quiz": {
          "q": "在 code-copy 工具無法處理檔名含空格的案例中，Lovable 收到 agent 的 vent 之後，多久就有修正 merge 進正式環境？",
          "options": [
            "一週後",
            "1 小時後",
            "隔天",
            "10 分鐘後"
          ],
          "correct": 3,
          "why": "[22:03] 講者提到收到這則 vent 之後 10 分鐘，就有 merge 好的 PR 上線到正式環境"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_XFaeIbL-lvE",
        "title": "🎬 在企業規模打造 AI-native：monday.com、Doctolib 與 Delivery Hero",
        "category": "企業與客戶案例",
        "text": "<b>三家 2011–2013 年創立的公司，分享怎麼在舊程式碼上用 Claude 轉型成 AI-native</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：monday.com、Doctolib、Delivery Hero 三家公司，都在 LLM（像 ChatGPT、Claude 這種大型語言模型）出現之前就成立了。這場座談在聊，老公司背著十幾年的舊系統，怎麼讓 AI 變成日常工作的核心。大部分公司都有舊包袱，所以他們的經驗比新創公司的更貼近一般人的處境。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=18s\" target=\"_blank\">00:18</a> 三家公司都在 2011 到 2013 年間創立，早於 LLM 時代。這場座談的主題是它們怎麼轉型成 AI-native enterprise<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI-native enterprise 是指大公司把 AI 當成預設的做事方式，而不是偶爾拿出來用的工具。三家都不是從零開始，難的是讓累積多年的舊程式碼和舊流程接得上 AI。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=238s\" target=\"_blank\">03:58</a> Delivery Hero 打造了自主軟體交付系統 HeroGen：把 Jira ticket 或 GitHub issue 一路做成可以合併的 pull request<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Jira ticket 和 GitHub issue 都是工程師的待辦單。pull request（PR）是「我改好了，請審核後合併」的申請。HeroGen 是會自己動手的 AI agent，從接單一路做到交件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=299s\" target=\"_blank\">04:59</a> HeroGen 最近 10 天平均每天有約 173 個 PR 被合併；2 月上線以來累計約 7,000 個<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「被合併」代表工程師看過、覺得能用，才真的放進產品。每天大約 173 個，2 月上線到現在累計大約 7,000 個，可見它不是實驗品，而是天天在用的產線。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=366s\" target=\"_blank\">06:06</a> Doctolib 建了 skills marketplace，可以看出哪些 skill 最多人用、正在流行；另有「Build With AI」頻道讓大家分享經驗<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 是寫給 AI 看的做事說明書，例如「照公司格式寫測試」。Doctolib 把 skill 集中在一個像內部 App Store 的平台，看得出哪些最多人用；另外開一個頻道，讓好做法傳開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=486s\" target=\"_blank\">08:06</a> monday.com 的 Monday Vibe 把一句簡單的 prompt 變成詳細的 PRD，幾分鐘內就能做出可用的應用程式。早期投資的 open platform 讓 POC 只花幾天<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是你下給 AI 的指令，PRD 是寫清楚要做哪些功能的產品需求文件。POC 是先做個小樣品，驗證做不做得起來。因為他們早年就把系統開放給外部串接，AI 才能快速接上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=826s\" target=\"_blank\">13:46</a> monday.com 從 Opus 4.5 換到 4.6 時，原本最佳化好的 system prompt 效果不好，只好重新調整 prompt 技巧，並和 Anthropic 的 solution engineer 合作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 4.5 和 4.6 是 Claude 的兩個模型版本。system prompt 是預先交給 AI 的固定工作守則。換成新版以後，舊守則反而效果不好，只好重新調整，還找了 Anthropic 的技術顧問一起調。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=1041s\" target=\"_blank\">17:21</a> Delivery Hero 用「council of agents」（多個不同模型一起 review 同一份程式碼），把成功率拉高到 85%，成本也沒有預期中增加那麼多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ review 就是檢查程式碼。讓不同模型各自挑毛病，比較不會只有單一模型的盲點。success rate 是被合併的 PR 和被工程師拒絕的 PR 之間的比例，衝到 85%，多花的錢也比預期少。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=1171s\" target=\"_blank\">19:31</a> Doctolib 的心得：程式碼庫越小、越標準化、內建越多文件，模型表現就越好；monolith 裡則要額外告訴模型哪一種才是新做法<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ monolith 是把所有功能塞在同一大包的程式架構，裡面常常新舊寫法並存，AI 分不出該照哪一種做，所以要明講。反過來說，程式碼越小、越整齊、附越多說明，AI 越好上手。</span>\n\n📘 術語<br><b>HeroGen</b>（HeroGen 自主軟體交付系統）：Delivery Hero 的 agent，接收 Jira ticket 或 GitHub issue，產出可以合併的 PR<br><b>council of agents</b>（agent 評議會）：多個不同模型一起 review 同一份程式碼，避免單一模型有盲點或偏誤<br><b>success rate</b>（成功率）：Delivery Hero 的定義：被合併的 PR 和被工程師主動拒絕的 PR 之間的比例<br><b>Monday Vibe</b>（Monday Vibe）：monday.com 的 prompt 建 app 工具，把簡單的 prompt 變成詳細的 PRD，再做出可用的應用程式<br><b>skills marketplace</b>（skills 市集）：Doctolib 內部的平台，所有 skill 都找得到，也能看出使用量和趨勢\n\n📺 <a href=\"https://www.youtube.com/watch?v=XFaeIbL-lvE&t=0s\" target=\"_blank\">Building AI-native at enterprise scale: monday.com, Doctolib, and Delivery Hero</a>（2026/05/20 · 29 分鐘）",
        "tip": "💡 你可以怎麼用：在公司用 AI 的話，可以先把常做的工作整理成固定的說明範本，跟同事共用；給 AI 的資料裡也要寫清楚「現在用這個做法，舊的別照做」。換新版模型時，把平常用的指令重跑一遍確認效果，不要以為換新版就一定比較好。",
        "quiz": {
          "q": "Delivery Hero 導入「council of agents」後，HeroGen 的成功率最高到多少？",
          "options": [
            "73%",
            "85%",
            "100%",
            "60%"
          ],
          "correct": 1,
          "why": "[17:21] Ulrich 說 council of agents 把成功率拉高到 85%（up to 85%）"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_VueeyKcquoA",
        "title": "🎬 從 1 人到 80 人：用 Claude Code 擴張高速成長的工程組織",
        "category": "企業與客戶案例",
        "text": "<b>Base44 從 1 名工程師擴張到 80 人，靠 Claude Code 和簡單流程維持開發速度</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由 Base44 分享經驗。Base44 是一個讓不懂技術的人也能開發軟體的平台，講者把這種做法稱為 vibe coding，一般指用說的請 AI 寫程式。團隊從 1 名工程師擴張到 80 人，靠的是 Claude Code（Anthropic 推出、幫你讀程式、寫程式的 AI 工具）維持開發速度。值得看的原因是他們的做法都不複雜，而且把品質檢查提早到開發階段做（shift left），不等到最後才補救。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=202s\" target=\"_blank\">03:22</a> 新進工程師開工前先下兩個 prompt：一是看過所有 commits，說出每個人在意什麼，馬上就能掌握組織分工的全貌<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 就是你下給 AI 的指令。commit 是每次存進程式庫的修改紀錄，會記下誰改了什麼。讓 Claude 讀完所有紀錄，新人第一天就知道誰負責哪一塊、各自在意什麼，不用到處問。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=233s\" target=\"_blank\">03:53</a> 第二個 prompt：請 Claude 畫出元件運作的 mermaid chart。內容隨時反映最新程式碼，不必另外維護 onboarding 文件<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ mermaid chart 是用文字語法產生的流程圖。Claude 直接看程式碼，畫出各元件怎麼串在一起。因為每次都是當下重畫，內容永遠是最新的，不用再有人維護 onboarding（新人上手）文件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=299s\" target=\"_blank\">04:59</a> 讓 Claude 從 Maor 累積的 PR comments 歸納審查重點，寫進 instructions，每隔幾天跑一次，等於多了一個「Maor PR reviewer」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是「我改好了，請審查後合併」的申請，PR comments 是審查者留下的意見。把資深工程師 Maor 過去的意見整理成規則交給 Claude，定期照規則審查，等於把他的眼光複製了一份。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=365s\" target=\"_blank\">06:05</a> WhatsApp 整合原本預估要 1～2 週。新工程師週四拿到任務，週日早上就完成，PR 審查只留了兩三個小意見<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是實際成果：串接 WhatsApp 的功能原本預估要一到兩週，新人週四接到任務，週日早上就做完。審查時只被挑出兩三個小問題，代表新人靠前面那些方法，很快就能交出合格的東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=490s\" target=\"_blank\">08:10</a> 用簡單的小模型判斷每則使用者訊息的挫折程度是高還是低。新版 agent 先開放給一小部分客戶，觀察挫折程度的變化<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己分好幾步完成任務的 AI 助手。他們用便宜的小模型判斷每則使用者訊息是不是很挫折。新版先開放給少數客戶，挫折的人變多就知道改壞了，不必等客訴上門。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=768s\" target=\"_blank\">12:48</a> Claude Code 接上 A/B 測試平台的 MCP，從最近 100 個實驗和對應的 PR 歸納出指引。之後每個 PR 都會得到判定：直接上線、漸進式上線，或做 A/B 測試及測多久<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 是讓 Claude 接上外部工具的標準接口；A/B 測試是把用戶分兩組，比較新舊版哪個好。Claude 從最近 100 個實驗學會判斷，之後每個 PR 都會建議：直接上線、慢慢開放，還是先測、要測多久。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=951s\" target=\"_blank\">15:51</a> 建立 user simulator：AI 程式碼一有變更，CI/CD 就會啟動真實的 Base44 app，再用 StageHand 模擬使用者操作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ user simulator 就是模擬使用者。CI/CD 是程式一改就自動測試、上線的流程；StageHand 是用 AI 操作網頁的工具。AI 相關程式一改，就開一個真的 app 讓它實際操作，沒通過的部分再交回 agent 修正。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=1137s\" target=\"_blank\">18:57</a> 把常用流程包成 skills，另做 CLI 工具來設定測試情境，最後整合成一個 QA meta skill。PR 一開就自動寫測試計畫、實際測試並回報，約 80% 的情況行得通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skills 是寫好的做事步驟，Claude 需要時會拿出來照做；CLI 是打指令操作的工具；QA 是品質檢查。這些組成一個總技能後，PR 一開，Claude 就自動規劃測試、實際測完再回報，十次大約八次能順利完成。</span>\n\n📘 術語<br><b>vibe coding</b>（氛圍式寫程式）：講者稱這是新名詞；Base44 想做的是讓任何人（不論懂不懂技術）都能開發軟體的平台<br><b>mermaid chart</b>（Mermaid 圖表）：請 Claude 畫出元件怎麼運作的圖，內容即時反映最新程式碼<br><b>frustration level</b>（挫折程度）：用小模型把使用者訊息分成挫折程度高或低，拿來衡量新版 agent 的表現<br><b>user simulator</b>（使用者模擬器）：eval 失敗的部分會回傳給 agent 去補修，同時追蹤延遲、回合數和成本<br><b>shift left</b>（左移）：把產品決策和品質驗證提早到開發階段處理，不等到後面才做\n\n📺 <a href=\"https://www.youtube.com/watch?v=VueeyKcquoA&t=0s\" target=\"_blank\">From one person to 80: Scaling a hypergrowth engineering org with Claude Code</a>（2026/05/20 · 23 分鐘）",
        "tip": "💡 你可以怎麼用：就算不寫程式也能用同一招：把主管或前輩過去給你的修改意見整理起來，請 AI 歸納成一份檢查清單並存成固定指示。之後每次交件前，先讓 AI 照這份清單幫你審一遍。",
        "quiz": {
          "q": "Base44 讓新進工程師開工前用的第二個 prompt，是請 Claude 做什麼？",
          "options": [
            "產生該元件的單元測試清單",
            "列出所有 PR comments 的審查規則",
            "畫出元件運作的 mermaid chart",
            "寫一份每晚自動更新的 onboarding 文件"
          ],
          "correct": 2,
          "why": "[03:53] 字幕提到深入各個區塊前，先請 Claude 畫出元件運作的 mermaid chart；[03:22] 也說他們刻意不做每晚更新的 onboarding 文件"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt__kSAptN8TAY",
        "title": "🎬 The Problem Solvers：Cognition 的 Scott Wu",
        "category": "企業與客戶案例",
        "text": "<b>Cognition 的 Scott Wu 談 Devin、公司使命，以及和 Anthropic 的合作</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問 Cognition 的創辦人 Scott Wu。他聊到他們做的 Devin、公司想達成的目標，還有為什麼選擇和 Anthropic 合作。影片想講的是：AI 寫程式已經不只是補幾行程式碼，而是開始像一位工程師那樣自己接工作。想知道 AI 寫程式會走到哪一步，這支值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=0s\" target=\"_blank\">00:00</a> Scott 從小就參加數學和程式競賽，2014 年拿下競技程式設計（competitive programming）世界冠軍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scott 從小就參加數學和程式比賽。競技程式設計（competitive programming）就是限時解程式題、比誰寫得又快又對的比賽。他在 2014 年拿下世界冠軍，是這個領域的頂尖好手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=31s\" target=\"_blank\">00:31</a> Cognition 開發 Devin 和周邊的一系列工具，他們稱 Devin 是「第一位 AI 軟體工程師」。客戶有銀行、健康保險公司、政府和私募股權公司<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Devin 是 Cognition 做的產品。它不是幫你補幾行程式的小幫手，而是能自己接下任務、把事情做完的「AI 軟體工程師」。客戶有銀行、健康保險公司、政府和私募股權公司。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=31s\" target=\"_blank\">00:31</a> Cognition 的使命是幫助全世界把開發軟體的速度提升 10 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們想做的不只是一個好用的工具，而是讓全世界開發軟體的速度快 10 倍。打個比方，原本要花十週做完的專案，希望大約一週就能完成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=63s\" target=\"_blank\">01:03</a> Scott 說團隊很在乎軟體工程第一線的手藝，想辦法讓它變得更快，並解決實際遇到的問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們在意的是工程師每天實際在做的事：寫程式、修改、測試、修錯誤。重點不在喊口號，而是找出工作中真正卡住、最花時間的地方，一個一個解決。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=63s\" target=\"_blank\">01:03</a> Scott 回憶第一次和 Daria 通話時，對方說不用推銷，他完全懂這個概念。當時很多人不相信這件事做得到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 早期很多人不相信 AI 能自己當工程師。Scott 第一次和 Daria 通話時，對方直接說不用推銷，這個概念完全懂。在大家都懷疑的時候，遇到一聽就懂的人特別難得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=93s\" target=\"_blank\">01:33</a> 談到 Claude Code，Scott 認為不會有單一產品包辦所有程式和軟體工程，雙方一起做的事比各自做的多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 推出的工具，讓 Claude 直接幫你寫程式，看起來跟 Devin 是對手。但 Scott 認為寫軟體這件事太大，不會只有一個產品通吃，雙方合作能做的比各做各的多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=123s\" target=\"_blank\">02:03</a> Scott 說和 Anthropic 合作，讓他們能提供客戶真正想要的能力。他描述的未來是：寫軟體就像告訴電腦要做什麼一樣簡單<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scott 說，跟 Anthropic 合作讓他們能做出客戶真正想要的功能。他想像的未來是：做軟體不必懂程式語法，只要跟電腦講清楚你要什麼，它就幫你做出來。</span>\n\n📘 術語<br><b>Devin</b>（Devin（Cognition 的產品））：Cognition 開發的產品，被稱為第一位 AI 軟體工程師，周邊還有一系列工具<br><b>competitive programming</b>（競技程式設計）：Scott 從小參加的程式競賽，他在 2014 年拿到世界冠軍\n\n📺 <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=0s\" target=\"_blank\">The Problem Solvers: Scott Wu at Cognition</a>（2026/05/19 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 AI 幫你做小工具時（像是整理 Excel 的程式、簡單的網頁），先練習把需求講清楚：要做什麼、輸入什麼、希望得到什麼結果。影片描述的「跟電腦說要做什麼就好」的未來，靠的正是這種把需求講清楚的能力。",
        "quiz": {
          "q": "根據影片，Cognition 的使命是幫助全世界用多快的速度開發軟體？",
          "options": [
            "快 5 倍",
            "快 10 倍",
            "快 100 倍",
            "快 2 倍"
          ],
          "correct": 1,
          "why": "[00:31] Scott 說：「Our whole mission is to help build software around the world 10 times faster.」"
        },
        "status": "full"
      },
      {
        "id": "yt_IGAVa4uyo2w",
        "title": "🎬 Emergent 如何用 Claude 讓更多人能打造 app",
        "category": "企業與客戶案例",
        "text": "<b>Emergent CEO Mukund 分享用 Claude 打造 app 產生平台、服務小型企業的歷程</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Emergent 的執行長 Mukund 在講，他們怎麼用 Claude 做出一個「用講的就能做出 app」的平台，主要給小型企業用。值得看的原因是他很坦白地說：程式碼寫出來只是開始，app 能不能真的上線、之後能不能穩定運作，才是真正困難的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=62s\" target=\"_blank\">01:02</a> Emergent 在 YC 一開始做自動化軟體測試，後來發現解決驗證迴圈（verification loop）能讓 agent 跑更久，於是轉做通用 coding agent<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Emergent 在 YC（美國知名新創加速器）起步時做自動測試。後來發現讓 agent（會自己動手做事的 AI）做完能自己檢查、錯了再改，也就是驗證迴圈，它就能獨立做更久，於是改做寫程式的 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=123s\" target=\"_blank\">02:03</a> 團隊內的非技術成員用內部 coding agent 用得比開發者還多，所以決定讓每個人都能做軟體開發，6 月推出 research preview<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司裡不會寫程式的同事，反而比工程師更常用內部的寫程式工具。他們因此認定一般人也需要自己做軟體，6 月推出 research preview，也就是先開放試用、邊用邊改的早期版本。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=247s\" target=\"_blank\">04:07</a> 用戶拿 Emergent 跟 dev shop 比，最在意結果，不是速度；所以 Opus 是他們的主力模型（workhorse），agent 可以連續跑好幾個小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 用戶拿它跟 dev shop（外包軟體公司，影片說大約 25 萬美元、做三個月）比，在意的是成品能不能用，不在意快慢。所以他們主力用 Claude 的高階模型 Opus，讓 agent 連續跑好幾小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=340s\" target=\"_blank\">05:40</a> 在 Kubernetes 上自建容器技術，支援記憶體快照、存狀態和平行 agent；他們認為 agent 就是產品，harness 品質很重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們在 Kubernetes（管理大量雲端伺服器的工具）上自建容器（把每個程式隔開的小空間）技術，能隨時存檔，也能讓多個 agent 同時分工。他們認為 harness（讓模型能動手做事的外圍系統）的好壞，就是產品的好壞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=404s\" target=\"_blank\">06:44</a> 把正式環境的錯誤回傳到開發環境，並建立 long-term memory，讓 agent 能從平台上所有 app 學習<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ App 上線後出的錯，會被送回開發端讓 agent 修。再加上 long-term memory（長期記憶），從平台上所有 app 累積經驗，遇過的錯下次處理得更快、更省 token（AI 計算用量的單位）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=437s\" target=\"_blank\">07:17</a> 部署率從幾個月前的 84% 提升到接近 98%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 部署就是把做好的 app 真正上線給人用。幾個月前大約 100 個有 84 個能順利上線，現在接近 98 個，代表做出來「真的能用」的比例大幅提高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=623s\" target=\"_blank\">10:23</a> 寫程式碼只占問題的 20%，另外 80% 是部署、維護正式環境和資安<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 程式寫出來只是開始。更大的工作量在上線，還有正式環境（真正給客人用的版本）要持續維護、不能出包，以及防駭客、保護資料。這也說明了他們為什麼在部署上投入這麼多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=961s\" target=\"_blank\">16:01</a> 即將推出新產品 Wingman，是給企業用的 agent，要自動化財務、營運、銷售、行銷等業務流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 下一步是 Wingman。它不是幫你做 app，而是直接替企業處理日常工作，像財務、營運、銷售、行銷的例行流程，都交給 agent 做。</span>\n\n📘 術語<br><b>long-term memory</b>（長期記憶）：agent 不只從單次使用者 session 學習，還從平台上所有 app 學習；遇過的新錯誤下次能用更少 token 處理<br><b>harness</b>（執行框架）：Mukund 說 agent 在很多方面就是產品，harness 的品質非常重要<br><b>refactoring agent</b>（重構 agent）：負責回頭重構使用者的 app，讓程式碼品質好、之後還能繼續開發<br><b>dev shop</b>（軟體外包公司）：用戶拿 Emergent 跟它比較，dev shop 的價格大約 250,000 美元、專案約三個月\n\n📺 <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=0s\" target=\"_blank\">How Emergent is making app building more accessible with Claude</a>（2026/05/13 · 16 分鐘）",
        "tip": "💡 你可以怎麼用：用這類 AI 工具做 app 時，別只看它多快生出畫面，要先確認三件事：能不能真的上線、上線後出錯有沒有人修、客人資料安不安全。可以先拿一個小工具試做，例如店裡的預約表單，走完「做出來到上線」整個流程再決定要不要依賴它。",
        "quiz": {
          "q": "根據 Mukund 的說法，Emergent 的部署率從幾個月前的 84% 提升到多少？",
          "options": [
            "接近 70%",
            "接近 50%",
            "接近 98%",
            "接近 90%"
          ],
          "correct": 2,
          "why": "[07:17] 字幕原文：「A couple of months back, our deployment rates were 84%, now it's closer to 98%.」"
        },
        "status": "old"
      },
      {
        "id": "yt_FPPTnI88RR8",
        "title": "🎬 Anthropic 如何在資安工作中使用 Claude",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 資安團隊用 Claude Code 打造偵測與回應平台 Clue，加速資安調查</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 資安團隊分享，他們怎麼用自家的 Claude 做出內部調查平台 Clue，把原本要花好幾小時到幾天的資安調查大幅縮短。雖然主題是資安，但看得到 AI 怎麼真正放進專業工作流程：先規劃步驟、自己去查資料，最後寫出結論。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=0s\" target=\"_blank\">00:00</a> 講者認為 Anthropic 的資安工作沒有前例可循，保護它也像是在開拓新領域；現有工具常常不符合第一線分析師、調查人員的實際工作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者的意思是，像 Anthropic 這樣的 AI 公司要怎麼防護，沒有現成範本可以照抄。市面上的資安工具也常常跟第一線調查人員每天實際在做的事對不上，用起來很卡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=30s\" target=\"_blank\">00:30</a> 以前調查一個資安事件，要在 5～6 個工具之間切換，並對不同資料庫下 3～4 種查詢語言；就算是簡單的調查，也至少要幾小時，最多要幾天。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前查一件可疑事件，要在五、六個系統之間切來切去，還要對不同資料庫用三、四種查詢語法下指令。光是切換就很耗時間，簡單的案子也要幾小時，複雜的會拖到好幾天。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=30s\" target=\"_blank\">00:30</a> 所以團隊打造了 Clue：這是用 Claude Code 建立的偵測與回應平台，並串接公司內部系統。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊用 Claude Code（Anthropic 讓 Claude 直接寫程式的工具）做出 Clue。它是偵測與回應平台（detection and response platform），用來發現可疑狀況並協助處理，而且接上了公司內部系統。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=61s\" target=\"_blank\">01:01</a> Clue 透過 tool use 查詢資料倉儲，也能查 Slack 訊息、程式碼庫等公司內部知識，讓警示放回自家環境的脈絡來判讀。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ tool use 是指 Claude 能自己呼叫外部工具去查資料。Clue 用它查公司的資料倉儲，也會翻 Slack（工作聊天軟體）訊息和程式碼，讓警示能對照公司平常的狀況來判斷。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=93s\" target=\"_blank\">01:33</a> Demo 使用樣本資料：詢問「開發者自己開了 admin 權限，是否經過授權？」Claude 先擬出六個調查步驟，再發出多個查詢，判斷這是典型的權限提升（privilege escalation）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Demo 用樣本資料問：開發者自己開了 admin（管理者）權限，有經過核准嗎？Claude 先列出六步調查計畫，再跑多個查詢，最後判定是典型的權限提升（privilege escalation，擅自拿到超出職責的權限）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=126s\" target=\"_blank\">02:06</a> 查到來源 IP 屬於俄羅斯的資料中心，且被 VirusTotal 標為惡意。Claude 判斷事件應是單一個案，但也點出安全態勢上的缺口，提出後續行動項目並寫出調查總結。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它追到來源 IP（連線的網路位址）在俄羅斯的資料中心，而且被 VirusTotal（綜合多家防毒判斷的查詢服務）標為惡意。Claude 判斷這是單一個案，但也點出防護缺口，列出待辦事項並寫好總結。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=160s\" target=\"_blank\">02:40</a> 講者原本估計 suppression engine 至少要 1～2 個月，結果一位新進同仁一週就做出來。主要原因是 Claude Code 能向新人解釋系統怎麼架設、怎麼運作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ suppression engine 在資安領域一般是指自動壓掉重複或已知無害警示的機制。講者原本估計要一、兩個月，新人一週就做完，關鍵是 Claude Code 能向新人解釋系統怎麼架設、怎麼運作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=190s\" target=\"_blank\">03:10</a> 講者表示自己正在打造過去希望擁有的工具，覺得自己正從實務工作者走向研究者，並能看見以前看不到的系統狀況。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者覺得自己現在做的，正是以前當分析師時最想要的工具。他的角色也從埋頭處理案件，慢慢轉向研究更大的問題，而且能看清楚以前看不到的系統狀況。</span>\n\n📘 術語<br><b>detection and response platform</b>（偵測與回應平台）：Clue 的定位，是團隊用 Claude Code 建立的平台<br><b>tool use</b>（工具使用）：Clue 靠 tool use 查詢資料倉儲和公司內部知識<br><b>privilege escalation</b>（權限提升）：Demo 中 Claude 對開發者自行取得 admin 權限的判斷，稱為典型的權限提升<br><b>suppression engine</b>（抑制引擎）：講者 Q4 計畫中的項目，原估 1～2 個月，新人一週就做完\n\n📺 <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=0s\" target=\"_blank\">How Anthropic uses Claude in Cybersecurity</a>（2026/05/12 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：要 Claude 幫妳查一件事時，可以先請它「列出調查步驟」，確認方向對了再讓它去找資料、寫總結。遇到看不懂的新系統或新工具，也可以直接請它解釋「這是怎麼架起來、怎麼運作的」，上手會快很多。",
        "quiz": {
          "q": "講者原本預估 suppression engine 至少要 1～2 個月，實際上新進同仁花了多久做出來？",
          "options": [
            "一週",
            "一天",
            "兩個月",
            "一個月"
          ],
          "correct": 0,
          "why": "[02:40] 講者說原本估計至少要 1～2 個月，結果一位新進同仁一週就做好了（One of our new hires built it in a week）。"
        },
        "status": "old"
      },
      {
        "id": "yt_BrpB-h1e--k",
        "title": "🎬 用 Claude Managed Agents 打造 Asana AI teammates",
        "category": "企業與客戶案例",
        "text": "<b>Asana 分享如何用 Claude Managed Agents 打造多人協作的 AI teammates</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Asana（一套團隊專案管理工具）分享怎麼用 Claude Managed Agents 打造「AI teammates」。Claude Managed Agents 是 Anthropic 提供的現成服務，讓 AI 自己一步步把事情做完；AI teammates 則是能被指派工作、和一群人一起協作的 AI 同事。這支片值得看，是因為它點出多數公司用 AI 還停在各用各的，Asana 想讓 AI 學到的經驗在整個團隊裡累積、共享。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=48s\" target=\"_blank\">00:48</a> Asana 的 AI teammates 從 3 月起正式開放（generally available）。講者 Arnauld 希望 AI agent 能像真正的團隊成員，和人一起完成審核、端到端流程等多步驟工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI teammates 3 月起正式開放（generally available，已經不是測試版，一般客戶都能用）。講者 Arnauld 想讓 AI agent（會自己分步驟做事的 AI）像同事一樣，跟人一起跑審核這類要過好幾關的流程。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=78s\" target=\"_blank\">01:18</a> 講者觀察到，多數企業仍用「single player」方式使用 agent，也就是一個人用完再交給下一個人，因此累積不了知識，也沒有共享的 enterprise memory<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者說多數公司用 agent 還在「single player」單人模式：各開各的、用完就結束，經驗只留在個人手上。所以沒有 enterprise memory（全公司共享的累積知識），同一件事每個人都要重教一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=231s\" target=\"_blank\">03:51</a> Asana 的 work graph 已經發展超過 17 年，層級是：使命與願景→goals→portfolios→projects→tasks。人類透過 UI 使用，agent 也從這裡取得工作需要的 context<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ work graph 是 Asana 做了 17 年的工作架構：使命→goals（目標）→portfolios（專案群）→projects（專案）→tasks（任務）。人透過 UI（操作畫面）使用，agent 從這裡讀 context（做事需要的背景資料）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=355s\" target=\"_blank\">05:55</a> Managed agents 帶來三個好處：降低 prototyping 成本、內建 verification loop，以及內建 grader。Asana 傳入想要的 outcome 後，grader 會反覆迭代，確保產出品質夠高<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ managed agents 有三個好處：prototyping（先做雛形試水溫）變便宜；內建 verification loop（做完自己檢查）；內建 grader（評分員），只要給它想要的 outcome（成果），它就反覆評分、修正，直到品質夠好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=417s\" target=\"_blank\">06:57</a> 以前用 Messages API，現在改用 managed agents，就不必自己打造 agent loop、檔案管理和程式執行，還能讓多個 agent 平行、各自獨立工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前用 Messages API（呼叫 Claude 一問一答的基本介面），agent loop（AI 思考、動手、看結果再調整的循環）、檔案管理、執行程式都得自己做；改用 managed agents 就都有現成的，還能讓多個 agent 同時分頭做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=449s\" target=\"_blank\">07:29</a> Asana 內建超過 21 個 AI teammates，對應 PMO、行銷、IT、HR、R&amp;D 等部門，可以處理上市規劃、撰寫規格、目標管理、資源與產能規劃等工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Asana 內建 21 個以上的 AI teammates，分給 PMO（專案管理辦公室）、行銷、IT、HR、R&amp;D（研發）等部門，能做上市規劃、寫規格、追蹤目標、安排人力與產能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=784s\" target=\"_blank\">13:04</a> 示範：使用者用留言要求把主色改成藍色，這項回饋會寫進 agent 的記憶。之後換別的行銷人員使用同一個 agent，也不會再犯同樣的錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範：有人留言說主色要改成藍色，這句回饋就被存進 agent 的記憶。之後換另一位行銷同事用同一個 agent，它已經記得，不會再用錯顏色。這就是 enterprise memory 實際運作的樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=1459s\" target=\"_blank\">24:19</a> 第三方整合同時在兩個層級進行：一是直接接到 Asana 自家 AI teammates 的 agent loop，二是透過 MCP 接到 managed agents<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 串接外部工具分兩層：一是直接接進 Asana 自家 AI teammates 的 agent loop；二是透過 MCP（讓 AI 連接外部工具和資料的共通標準）接到 managed agents。</span>\n\n📘 術語<br><b>Claude Managed Agents</b>（Claude 託管式 agent）：Asana 用它完成多步驟動作，內建 verification loop 與 grader，不必自己打造 agent loop<br><b>AI teammates</b>（AI 隊友）：Asana 內的 AI agent，被當成系統裡真正的成員，有權限控管，也能和多人協作<br><b>grader</b>（評分器）：Asana 傳入 outcome 後，grader 會多次迭代，確保產出品質夠高<br><b>enterprise memory</b>（企業共享記憶）：多人與 agent 互動累積下來的知識，會隨著更多人使用而越來越好<br><b>work graph</b>（工作圖譜）：Asana 發展超過 17 年的結構，從使命、goals 一路到 tasks，人和 agent 都能使用\n\n📺 <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=0s\" target=\"_blank\">Building with Claude Managed Agents and Asana AI teammates</a>（2026/05/08 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：團隊一起用 AI 時，把改過的要求（例如品牌色、格式規範）整理成大家共用的說明，別讓每個人各自重教一遍。交代任務時，也先講清楚想要的成果和驗收標準，讓 AI 能拿來對照、自己檢查。",
        "quiz": {
          "q": "Asana 怎麼處理 managed agents 的第三方整合？",
          "options": [
            "目前不支援，交給客戶自己寫 skill",
            "只透過 grader 的 rubric 注入第三方資料",
            "只在 Asana 平台層整合，不讓 agent 直接接觸",
            "同時接到自家 AI teammates 的 agent loop，並在 MCP 層接到 managed agents"
          ],
          "correct": 3,
          "why": "[24:19] Bradley 說整合在兩個層級都有做：直接接到自家 AI teammates 的 agent loop，也在 MCP 層接到 managed agents"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_BbYSGxtsMic",
        "title": "🎬 讓 coding agent 擁有自己的電腦：Cursor 如何打造 cloud agents",
        "category": "企業與客戶案例",
        "text": "<b>Cursor 分享如何讓雲端 agent 更自主，並建立讓 agent 自我改進的系統</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Cursor（一款用 AI 幫忙寫程式的編輯器）團隊分享的經驗：他們怎麼讓在雲端工作的 AI 助手少靠人，自己把事情做完。重點不只是 AI 會寫程式，還有怎麼幫它把工作環境、工具和回報問題的管道準備好。就算你不寫程式，這些做法也能讓你更會把事情交給 AI。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=45s\" target=\"_blank\">00:45</a> Cursor 經歷三階段：給 agent 工具與脈絡變得更自主、學會善用更強的模型、打造「建造系統的系統」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己拆步驟、動手把任務做完的 AI 助手。Cursor 先給它工具和資料，再學會搭配更強的模型，最後做出一套能讓 agent 越做越好的機制。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=166s\" target=\"_blank\">02:46</a> 做了 Claude onboarding agent（cursor.com/onboard），它探索 codebase 的目的不是改程式，而是弄懂怎麼把專案跑起來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 就是一個專案的所有程式碼。onboarding agent 像新人報到，先搞懂專案要怎麼跑起來、要做哪些設定，不急著改東西，也會問開發者，一起把環境設好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=228s\" target=\"_blank\">03:48</a> cloud agent 每次都得從零啟動開發環境，所以做了 CLI 工具，用來啟動服務、等待服務就緒、查狀態、建立測試帳號等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ cloud agent 是在雲端主機上工作的 agent，每次開工都是一台空電腦。CLI 是打指令操作的工具，Cursor 做了一套，讓它用指令就能開服務、確認好了沒、建測試帳號。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=288s\" target=\"_blank\">04:48</a> 自主性原則：給 agent「眼睛」（你看得到的它也要看得到）、給它工具（在合理的安全限制下），並維持高品質的 codebase 和說明<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想讓 agent 自己做完、少問人，就要讓它看得到結果，例如畫面和錯誤訊息；給它能做事的工具，但要設好安全界線；程式和說明文件也要寫得整齊，它才讀得懂。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=349s\" target=\"_blank\">05:49</a> computer use 是基礎能力：寫程式像下西洋棋，整盤看得到；操作 GUI 像打電玩，一次只看得到一小塊，需要後設認知和回溯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ computer use 是讓 AI 看螢幕畫面，自己按滑鼠、打鍵盤。寫程式時資訊全攤在眼前；操作 GUI（有視窗和按鈕的介面）卻只能邊點邊看，所以要會發現自己走錯並退回去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=409s\" target=\"_blank\">06:49</a> agent 會錄 demo，除了自己做端到端測試，也讓開發者在看程式碼之前就能快速審查成果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ demo 是操作過程的錄影。agent 做完會自己從頭到尾實際操作一遍，確認真的能用，並錄下來。開發者先看影片就知道成果對不對，不用一開始就去讀程式碼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=439s\" target=\"_blank\">07:19</a> 兩種用法：小任務和 bug 直接丟進 prompt 開跑；大專案交給 cloud agent 長時間處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是你打給 AI 的指令文字。小修改、小 bug 直接寫一句交代，它就開始做；大型專案則交給 cloud agent 在雲端長時間處理，你不用一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=620s\" target=\"_blank\">10:20</a> 重視 agent experience：agent 遇到問題就回報，再分類成技術問題、權限問題、不知道怎麼做（ignorance）三類，由 agent 和人類修正<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent experience 指 agent 工作順不順，要像照顧工程師一樣重視。agent 卡住就回報，問題分成東西壞了、權限不夠、不知道怎麼做三類，再由 agent 或人去修好。</span>\n\n📘 術語<br><b>agent experience</b>（agent 體驗）：對應 developer experience，重視程度要一樣甚至更高<br><b>WCF (work on the factory)</b>（改善工廠）：每個 cloud agent 都有的 skill：碰到煩人、壞掉或搞不懂的事就回報，而不是硬撐下去<br><b>computer use</b>（電腦操作）：輸入原始像素，輸出滑鼠和鍵盤操作<br><b>onboarding agent</b>（入職 agent）：探索 codebase，弄懂怎麼執行它，並和開發者互動設定環境\n\n📺 <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=0s\" target=\"_blank\">Giving coding agents their own computers: How Cursor built cloud agents</a>（2026/05/08 · 14 分鐘）",
        "tip": "💡 你可以怎麼用：交代 AI 做事時，把它需要看的東西直接給它，例如截圖、錯誤訊息、完整規則。也先講好：卡住就直接說是工具壞了、缺權限，還是不知道怎麼做，不要硬猜著做下去。",
        "quiz": {
          "q": "Cursor 最重要的 skill「WCF」是什麼的縮寫？",
          "options": [
            "Work on the factory",
            "Write code first",
            "Worker cloud fleet",
            "Workflow control framework"
          ],
          "correct": 0,
          "why": "[11:22] 講者說最重要的 skill 是 WCF skill，代表 work on the factory"
        },
        "status": "old"
      },
      {
        "id": "yt_y5TmF_6o6xk",
        "title": "🎬 Caching、harness 與 advisor：在 GitHub 規模下用 Claude 打造產品",
        "category": "企業與客戶案例",
        "text": "<b>GitHub 分享 Copilot 大規模使用 Claude 的做法：prompt caching、advisor 模型，以及導入新模型的流程</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：GitHub Copilot（GitHub 的 AI 寫程式助手）每天大量呼叫 Claude。這支影片由 GitHub 的 Mario Rodriguez 分享他們的實戰經驗：怎麼省錢、怎麼讓小模型做出接近大模型的成果、新模型推出時怎麼決定要不要換。內容都是量大之後才會碰到的真實問題，想了解 AI 產品背後怎麼運作的人值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=213s\" target=\"_blank\">03:33</a> Mario Rodriguez 把經驗分成三塊：prompt caching、跟 Anthropic 合作的 advisor／critic 模型，以及新模型推出時怎麼導入。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 經驗分三塊。第一是 prompt caching，把每次都一樣的開頭內容存起來重複用，省錢也省時間。第二是找另一個模型來給建議（advisor）或挑錯（critic）。第三是新模型推出時怎麼評估、要不要換。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=368s\" target=\"_blank\">06:08</a> GitHub 營運時的 cache rate 要維持在 90% 以上，通常是 94～96%；如果只有 70%，通常代表程式有 bug。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ cache rate 是「送出的內容裡有多少比例直接用到存好的快取」。GitHub 平常維持在 94～96%。如果掉到 70%，通常不是運氣差，而是程式某處讓快取一直對不上，要去抓 bug。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=430s\" target=\"_blank\">07:10</a> 從 input 來看，cache 的成本只有 10%，差了 10 倍。一直讓 cache 失效，就要多付 10 倍的錢。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ input 是你送給模型的內容。同一段 input，如果是從快取讀，價錢只有一般的一成。反過來說，快取一直失效，同一份內容每次都要付十倍，用量大的時候差距很驚人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=491s\" target=\"_blank\">08:11</a> 提高 cache 命中的三個教訓：prefix 不要放動態內容（曾經在 system prompt 放 UUID）、tools prefix 不要動態變更並要有 regression test、多模型 harness 要維持 cache affinity。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開頭一模一樣才能用快取，改一個字就失效。所以：底層指示裡別放每次都不同的隨機編號；工具清單要固定，並用自動測試防止被改壞；同時用多個模型時，切回原模型要能接上原本的快取。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=613s\" target=\"_blank\">10:13</a> 破除迷思：長 context 不代表比較貴。context window 小的話 compaction 會多 3 倍，output token 暴增，cache 也更容易失效。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context 是模型一次能看到的對話內容。很多人以為內容塞越多越貴，其實空間太小的話，模型要一直把舊內容壓縮成摘要，次數多三倍。每次摘要都要多寫一大段輸出，快取也容易跟著失效。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=855s\" target=\"_blank\">14:15</a> Advisor 策略：讓 Haiku 當 executor，遇到做不到的事時用工具呼叫 Opus 當 advisor，用很保守的 Opus token 換到接近 Opus 的智慧。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku 是 Claude 便宜又快的小模型，Opus 是比較聰明但比較貴的大模型。平常讓 Haiku 做事，卡住才去問 Opus 拿提示。這樣只花一點點 Opus 的錢，就能拿到接近 Opus 的表現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=1075s\" target=\"_blank\">17:55</a> Rubber duck：在三個時間點插入其他模型的 critique，分別是寫完計畫後、完成複雜實作後、寫完測試但還沒執行前。Mario 認為在計畫階段效果最好。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ rubber duck 是指工程師對著小黃鴨講解程式來找出錯誤的習慣。這裡是在三個時間點請另一個模型挑毛病：計畫寫完、複雜功能做完、測試寫好但還沒跑。Mario 覺得計畫階段最有效。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=1453s\" target=\"_blank\">24:13</a> 導入新模型要靠 offline benchmark 加上 dogfooding／A-B 測試等 online eval；要衡量成果而不是活動量，例如 survival rate 比 acceptance rate 更好。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 換新模型前，先用固定題庫測分數，再讓自家員工實際用，或把使用者分兩組比較。要看成果而不是動作：程式碼被按「接受」不代表有用，事後沒被刪掉（survival rate）才算數。</span>\n\n📘 術語<br><b>cache affinity</b>（快取親和性）：多模型 harness 中，在不同模型之間切換後，再回到 Opus 呼叫時仍要能命中正確的 cache<br><b>compaction</b>（上下文壓縮）：context 滿了就要摘要訊息，每次大約產生 4,000 個 output token<br><b>advisor</b>（顧問模型）：executor（Haiku）遇到做不到的事時，用工具呼叫的較大模型（Opus），由它提供提示<br><b>rubber duck</b>（小黃鴨（批評模型））：在適當時間點插入另一個模型的 critique，讓模型在實作前修正計畫<br><b>survival rate</b>（存活率）：接受的程式碼事後有沒有被刪掉，比 acceptance rate 更能反映成果\n\n📺 <a href=\"https://www.youtube.com/watch?v=y5TmF_6o6xk&t=0s\" target=\"_blank\">Caching, harnesses, and advisors: Building on Claude at GitHub scale</a>（2026/05/06 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：做重要的事時，先請 Claude 寫出計畫，再把計畫貼給另一個模型（或開一個新對話）挑毛病，修正後才開始做。判斷 AI 好不好用，要看它的產出最後真正留下多少，而不是它產出了多少。",
        "quiz": {
          "q": "依照 GitHub 的經驗，cache rate 如果只有 70%，通常代表什麼？",
          "options": [
            "代表 context window 開太大了",
            "代表應該把預設模型換成 Haiku",
            "通常代表有 bug，做法有地方不對",
            "已經是業界的理想水準"
          ],
          "correct": 2,
          "why": "[06:08] Mario 說他們需要維持在 90% 以上，通常是 94～96%；如果在 70% 運作，通常代表有 bug，有地方做得不對。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_bJKdXhnw7NU",
        "title": "🎬 為模型的跳躍式進步設計架構：與 Vercel 的 Guillermo Rauch 爐邊對談",
        "category": "企業與客戶案例",
        "text": "<b>Vercel CEO 分享內部怎麼用 agent、快速導入新模型，以及怎麼為下一代模型調整架構</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Vercel 執行長 Guillermo Rauch 的對談。Vercel 是幫人把網站和應用程式放上網的雲端平台。他分享公司內部怎麼大量使用 agent（能自己規劃步驟、動手把事情做完的 AI 助手），也談每次新模型變強，產品設計該怎麼跟著改。想知道 AI 變強之後工作方式會怎麼變，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=233s\" target=\"_blank\">03:53</a> Vercel 現在聚焦在 agentic infrastructure：幫大家部署 agents，也讓雲端基礎設施本身變成 agent，可以自我修復、自我最佳化、自我設定。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Vercel 主打 agentic infrastructure，也就是專門給 AI agent 用的雲端底層。一方面幫客戶把 agent 架上線，一方面讓伺服器本身也變成 agent：出問題自己修，效能和設定也自己調。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=329s\" target=\"_blank\">05:29</a> 拿到 Claude Code preview 之後，Guillermo 給全公司無上限的 token 預算。員工開始自己做工具，例如設計團隊的內部工具 Leap，形成「AI software factory」。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是讓 AI 直接幫你寫程式的工具；token 是 AI 計算用量的單位。老闆不設用量上限，員工就自己做工具，像設計團隊做的 Leap。他稱這叫 AI software factory：人人都能自己打造工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=626s\" target=\"_blank\">10:26</a> 在 AI Gateway 上，Opus tokens 的用量約占 20 幾 %，花費卻約占 70 幾 %。Guillermo 從中看到的是：大家都在追求能拿到的最強智慧。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI Gateway 是 Vercel 讓客戶呼叫各家 AI 模型的中轉站。Opus 是 Claude 最強也最貴的等級，用量只占兩成多，花費卻占七成多。這表示大家寧可多花錢，也要用最聰明的模型。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=690s\" target=\"_blank\">11:30</a> 導入 Opus 4.5 後，模型變聰明，v0 可以簡化架構，例如拿掉先前為了修語法錯誤而設計的 autofix 步驟；模型產出的品味也更好。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ v0 是 Vercel 用對話就能生出網頁的產品。以前模型常寫出語法錯誤，得加一道 autofix（自動修錯）步驟來補救。換成 Opus 4.5 後錯誤變少，這步可以拿掉，做出來的畫面也更有品味。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=754s\" target=\"_blank\">12:34</a> Vercel 把 flags 和實驗當成平台的一等公民，靠 A-B 測試快速擴大 Opus 的使用；今年初最近一次升級 Anthropic 模型以來，v0 的 credit 花費成長 2 倍。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ flags 是功能開關，可以先讓部分使用者試新功能；A-B 測試是把使用者分兩組比結果。Vercel 平台內建這些，才能邊測邊擴大用 Opus。今年初換新模型後，v0 的用量點數（credit）花費翻倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=935s\" target=\"_blank\">15:35</a> 最大的能力躍進是讓每個 agent 有自己的電腦（sandbox），減少固定工具，讓解法在 agentic 過程中自然浮現；工程重點轉向 tool approvals 和安全護欄。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ sandbox 是隔離的電腦環境，AI 在裡面怎麼亂搞也傷不到外面。給每個 agent 一台，就不用先把工具寫死，讓它自己找解法。工程師改成專心設計哪些動作要人核准（tool approvals），以及安全防線。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=1025s\" target=\"_blank\">17:05</a> Vercel 做了 CLI 工具 Agent Browser，讓 v0 能看輸出、截圖、讀開發者 logs，後來再用 skills 補強。原則是把人類有的工具交給 agent，不要微管理。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CLI 是打指令操作的程式。Agent Browser 讓 v0 能自己看成果、截圖、讀錯誤紀錄（logs），後來再用 skills（寫好的操作說明包）補強。原則是：人有的工具就交給 agent，不要一步一步盯著指揮。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=1272s\" target=\"_blank\">21:12</a> 他看好非同步、少監督的模式：CTO 用 sandbox 讓 Claude Code 和 Codex 平行掃描大型程式碼庫，交回可重現的安全漏洞，已經和將近十幾個開源專案合作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他看好交代完就讓 AI 自己跑、不用一直盯的做法。Vercel 的技術長（CTO）在 sandbox 裡同時派 Claude Code 和 OpenAI 的 Codex 掃大型程式碼，交回能重現的資安漏洞。已經和將近十幾個開源專案合作。</span>\n\n📘 術語<br><b>agentic infrastructure</b>（代理式基礎設施）：當 Claude Code 等工具的最佳基礎設施夥伴，幫忙部署 agents，並讓基礎設施本身變成 agent<br><b>AI software factory</b>（AI 軟體工廠）：軟體開發成本下降後，員工自己組出符合團隊需求的工具，像是設計工廠、安全檢查產線<br><b>AI Gateway</b>（AI 閘道）：Guillermo 稱它是「tokens 的 CDN」，彙整大量 Vercel 客戶的 token 使用量<br><b>sandbox</b>（沙盒）：給每個 agent 自己的電腦；模型寫的程式碼什麼都可能有，所以需要安全的隔離環境\n\n📺 <a href=\"https://www.youtube.com/watch?v=bJKdXhnw7NU&t=0s\" target=\"_blank\">Architecting for model step-changes: A fireside with Vercel&#x27;s Guillermo Rauch</a>（2026/05/06 · 27 分鐘）",
        "tip": "💡 你可以怎麼用：用 AI 做事時，別把每一步都規定死。把完整資料給它（檔案、截圖、錯誤訊息），講清楚目標，讓它自己想辦法；只有付款、刪檔這類重要動作，才設成要你確認。新模型出來時，回頭看看以前為了補 AI 弱點多加的步驟，也許可以直接刪掉。",
        "quiz": {
          "q": "根據 Guillermo 的說法，Opus tokens 在 Vercel AI Gateway 上大約占總花費多少？",
          "options": [
            "約 70 幾 %",
            "約 90 幾 %",
            "約 20 幾 %",
            "約 50 %"
          ],
          "correct": 0,
          "why": "[10:26] 他說 Opus tokens 的用量約占 20 幾 %，但花費約占 70 幾 %。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_OFDm3T7pVlc",
        "title": "🎬 打造 AI-native：揭密支撐 Cognition、Gamma 與 Harvey 的技術架構",
        "category": "企業與客戶案例",
        "text": "<b>Harvey、Cognition、Gamma 三家公司分享創業賭注、架構重構經驗與未來布局</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片找來三家 AI-native 公司（從一開始就以 AI 為核心打造產品的公司）：做法律 AI 的 Harvey、做寫程式 AI 的 Cognition、做 AI 簡報的 Gamma。他們分享當初的賭注、每次模型大升級後怎麼重做產品，以及接下來的計畫。影片常提到的 agent，是指能自己分步驟把任務做完的 AI，不只是一問一答；想知道 AI 公司怎麼跟上模型變化的人很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=176s\" target=\"_blank\">02:56</a> Harvey 的核心賭注：模型能力會快速進步，而且能很好地延伸到法律領域；模型層的指數級進步讓公司能提高野心<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Harvey 押注 AI 模型會快速變強，而且這些進步能直接用在法律工作上。模型進步得越快，公司敢訂的目標就越大。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=206s\" target=\"_blank\">03:26</a> Cognition 的核心賭注是 autonomous agents：Devon 自己有電腦，能執行、測試、修正程式，最後交出可運作的 PR；2026 年到目前為止，客戶的 agent 使用量是 2025 年最佳一週的 5 到 7 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ autonomous agents 是能自己把整件事做完的 AI。Devin 有自己的電腦，會自己跑、測、修程式，交出 PR（等人審核的程式修改）。今年用量是去年最高那週的 5~7 倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=487s\" target=\"_blank\">08:07</a> Gamma 很早就投入 MCP，做出連接其他平台的 connector，改變了 GTM：使用者不用離開原本的工作流程，而且這也成為很重要的新用戶獲取管道<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 是讓 AI 接上外部工具的共通規格。Gamma 用它做 connector（接頭），讓人不用離開原本的工具就能用 Gamma，這也變成拉新客的管道，改變了 GTM（產品推廣和銷售的方式）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=617s\" target=\"_blank\">10:17</a> Walden 說現在的模型會直接使用檔案系統，以前要自己打造的規劃系統和記憶系統，現在可以改用檔案系統，也就是大家正在從 RAG 轉向檔案系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ RAG 是先從資料庫找出相關段落，再交給 AI 參考的做法。Walden 說現在模型會自己開檔、寫檔，以前要另外做的規劃和記憶系統，現在用資料夾和檔案就能取代。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=710s\" target=\"_blank\">11:50</a> Harvey 經歷三個轉折點：foundation models、reasoning models、以 Opus 4.5 為代表的 coding agents；現在用 Opus 4.7 仿照律所的層級分工，建立多 agent 協作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Harvey 經歷三波變化：foundation models（通用大模型）、reasoning models（回答前會先推理）、以 Opus 4.5 為代表的 coding agents（會自己寫程式做事）。現在用 Opus 4.7 照律所的層級分工，讓多個 agent 合作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=801s\" target=\"_blank\">13:21</a> 每個轉折點都得整個重構產品，不能一決定就不改；Harvey 仍然按季規劃，但每週會做 retro，重新排優先順序<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ retro 是回顧會議，檢討哪些做法有效、哪些沒用。模型每換一代，Harvey 就得把產品整個重做，所以計畫不能定死：大方向按季排，但每週回顧、調整先後。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=893s\" target=\"_blank\">14:53</a> Walden 認為最值得投資的是 logging、observability 和 evals，才能判斷新模型是否做得更好，不會「在黑暗中開發」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ logging 是記下 AI 每一步做了什麼；observability 是能回頭查看、重播每個決策；evals 是用固定考題評分。有了這些，才知道新模型是不是真的變好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=1047s\" target=\"_blank\">17:27</a> Gamma 正在重構生成架構：不是在速度和品質中二選一，而是把兩者做成可以調整的參數，並交給使用者決定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 產生內容時，通常得在「快」和「好」之間選一個。Gamma 正在重寫底層架構，把速度和品質做成可以調整的設定，讓使用者自己決定這次要快一點，還是精緻一點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=1179s\" target=\"_blank\">19:39</a> Cognition 大約有 50 位工程師，每人使用約 10 個 Devon；目標是讓程式碼庫能「self-driving」，AI 只在需要時才拉人類介入<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cognition 約 50 位工程師，每人帶約 10 個 Devin。目標是 self-driving 程式碼庫：從規劃、寫程式、審查到測試都交給 AI，需要時才找人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=1364s\" target=\"_blank\">22:44</a> Harvey 先從基礎架構做起，例如用「ethical walls」建立硬性資料邊界，防止不同客戶的敏感資料互相混用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ethical walls 是律所的資料隔離規定：代表互相競爭客戶的律師，資料必須完全分開。Harvey 先把這種隔離做進系統底層，不讓不同客戶的機密混在一起。</span>\n\n📘 術語<br><b>autonomous agents</b>（自主代理）：不只會寫程式，還有自己的電腦，能執行、測試、修正，最後交出可運作的 PR<br><b>MCP</b>（MCP）：Gamma 用它建立連接其他平台的 connector，讓 Gamma 以 agent 的形式出現在使用者原本就在用的工具裡<br><b>observability</b>（可觀測性）：讓工程師能深入查看、重播 agent 的每個決策，判斷新模型能不能做得更好<br><b>ethical walls</b>（道德牆）：律所裡代表互相競爭客戶的同事之間，必須有硬性的資料邊界，防止資料混用<br><b>self-driving code bases</b>（自動駕駛程式碼庫）：由 AI 從頭到尾負責規劃、寫程式、審查和測試，需要時才拉人類進來\n\n📺 <a href=\"https://www.youtube.com/watch?v=OFDm3T7pVlc&t=0s\" target=\"_blank\">Building AI-native: Inside the stacks powering Cognition, Gamma, and Harvey</a>（2026/05/06 · 28 分鐘）",
        "tip": "💡 你可以怎麼用：挑 3~5 個你常交給 AI 的任務當固定考題，把題目和滿意的答案存起來；以後換新模型或新工具，就用同一組題目重跑一次比較，不要憑印象判斷。也可以查查你常用的工具有沒有 MCP 連接器，讓 AI 直接在原本的工具裡幫你做事。",
        "quiz": {
          "q": "根據 Walden 的說法，Cognition 目前工程團隊的規模與 Devon 使用情況是？",
          "options": [
            "約 10 位工程師，每人使用約 50 個 Devon",
            "約 50 位工程師，每人使用約 10 個 Devon",
            "約 70 位工程師，全部工作都交給 Devon，不需要人類審查",
            "約 500 位工程師，每人使用 1 個 Devon"
          ],
          "correct": 1,
          "why": "[19:39] Walden 說：Cognition 目前大約有 50 位工程師，每位工程師都在用約 10 個 Devon 處理需要做的事。"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_EdmuYPBt_EM",
        "title": "🎬 Datadog 如何為 Claude Code 打造通用的 machine tool",
        "category": "企業與客戶案例",
        "text": "<b>Datadog 分享用 Claude Code 建系統的歷程，以及 machine tool「TEMPR」的設計</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Datadog 是一家做系統監控的軟體公司。這支影片由他們的工程師分享，團隊怎麼從純手工寫程式，走到把大量工作交給 Claude Code（Anthropic 出的 AI 寫程式工具，可以直接在電腦上寫程式、跑指令）。後半段介紹他們做的 TEMPR：AI 寫得比人快太多時，要用事先定好的規則和自動檢查來把關。想放手讓 AI 做大事的人很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=83s\" target=\"_blank\">01:23</a> 講者以製造業的 machine tools（jigs、fixtures、gauges、mills）做比喻：靠標準化和精準度做出可互換的零件，才能擴大規模<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 製造業靠 machine tool 量產：jigs、fixtures 負責固定和導引工件，gauges 量尺寸，mills 負責切削。零件標準又精準，才能互相替換、放大規模。他想把這套思路搬到軟體。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=147s\" target=\"_blank\">02:27</a> 講者說 2025 年底曲線開始變陡，大約在 Opus 4.5 這個轉折點，他開始把規模更大、更模糊的系統工作交給 Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 4.5 是 Anthropic 的其中一代 AI 模型。講者覺得從那時起，AI 的進步明顯加快，所以開始把範圍大、需求還沒講清楚的系統工作也交給 Claude。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=213s\" target=\"_blank\">03:33</a> 2024 年純手工打造分散式佇列系統 Courier，花了一年。2025 年 9 月做出 Bits Evolve：受 DeepMind 的 Alpha Evolve 啟發，由多個模型產生程式碼變體，再交給 benchmarks、tests、production observability 篩選<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Courier 是花一年手寫的佇列系統，幫多台機器排隊分配工作。Bits Evolve 參考 DeepMind 的 Alpha Evolve：讓多個模型各寫一版，再用跑分、測試和線上監控數據挑出好的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=365s\" target=\"_blank\">06:05</a> 一個人主要靠 Claude Code 完成建構，幾天內就做出與 Kafka 相容的系統 Helix。拿 Helix shadow 正式環境流量時，發現有 2 到 5 倍的降低成本空間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Kafka 是業界常用的資料串流系統。一個人靠 Claude Code，幾天就做出能和它相容的 Helix。shadow 是複製真實流量給新系統試跑，不影響線上。結果發現成本能降到原本的一半到五分之一。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=582s\" target=\"_blank\">09:42</a> 最近四個月，大約 90% 的 Datadog（約 3,000 名工程師）用 AI coding tools 寫正式環境程式碼，其中至少三分之二是由 Claude Code 帶動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最近四個月，Datadog 約 3,000 名工程師裡，大約九成用 AI 寫程式工具寫出正式上線的程式碼。這些程式碼當中，至少三分之二是靠 Claude Code 做出來的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=800s\" target=\"_blank\">13:20</a> Agents 比人快兩個數量級，但工具鏈是為人設計的，結果人變成 agent 執行和人類系統之間的橋樑。每個 agent 還會各自發明工具和慣例，很難共享和維運<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Agent 是能自己連續動手做事的 AI，速度快人約百倍。但現有的開發工具和流程都是照人的節奏設計的，結果人卡在中間傳話。每個 agent 還各自發明工具和規矩，很難共用、維護。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=1228s\" target=\"_blank\">20:28</a> TEMPR 讓 agent 產出 blueprint，定義有哪些狀態、哪些轉換合法、允許哪些 effects、必須維持哪些 invariants。blueprint 在 LLM 之外編譯成正式的狀態轉換表，可以 hot reload<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ TEMPR 要 agent 先交出 blueprint：系統有哪些狀態、能怎麼切換、可以做哪些動作（effects）、哪些規則絕不能破（invariants）。接著用一般程式、不靠 AI 轉成正式規則表，能不停機直接換上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=1559s\" target=\"_blank\">25:59</a> Verifier 在轉換表載入 runtime 前把關，像 Swiss cheese 分層：第 1 層檢查代數，第 2 層做 model check，第 3 層注入故障，第 4 層跑 property tests<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Verifier 是規則表上線執行前的檢查關卡，像幾片瑞士起司疊在一起。四層分別是：查邏輯算式、逐一檢查所有可能狀態、故意製造故障、用大量隨機情境測試。每層都可能漏，疊起來就能擋住大部分問題。</span>\n\n📘 術語<br><b>machine tool</b>（工具機）：製造業用來做出精準、可重複零件的工具，例如 jigs、fixtures、gauges、mills<br><b>dark factory</b>（無人工廠（關燈工廠））：agents 在虛擬廠房裡持續工作、不需要人在場的軟體流程。人負責設計工廠、限制條件、成果和驗證迴圈<br><b>blueprint</b>（藍圖）：agent 產出的宣告式產物，描述狀態、合法轉換、誰能發出請求、允許的 effects 和 invariants<br><b>transition table</b>（狀態轉換表）：TEMPR 由 spec 產生的表，讓關鍵控制邏輯變成像資料一樣、可互換也可檢查<br><b>Swiss cheese pattern</b>（瑞士起司模型）：verifier 分成多層，不需要每一層都把所有問題找出來\n\n📺 <a href=\"https://www.youtube.com/watch?v=EdmuYPBt_EM&t=0s\" target=\"_blank\">How Datadog built a universal machine tool for Claude Code</a>（2026/05/06 · 30 分鐘）",
        "tip": "💡 你可以怎麼用：請 AI 做比較大的東西之前，先要它列清楚「有哪些步驟和狀態、可以做什麼、什麼絕對不能發生」，你確認後再讓它動手。完成後用幾道簡單檢查把關，例如實際試跑、抽查結果、請另一個 AI 挑錯。每道不必完美，疊起來就夠用。",
        "quiz": {
          "q": "Datadog 用 Claude Code 在幾天內做出的 Helix，是與哪個系統相容的串流服務？",
          "options": [
            "Temporal",
            "Erlang",
            "Kafka",
            "Kubernetes"
          ],
          "correct": 2,
          "why": "字幕 [06:05] 說幾天內做出「a full functional Kafka-compatible system」，並取名為 Helix；[16:54] 也說 Helix 是「a Kafka-like streaming service」"
        },
        "status": "long",
        "parts": 3
      },
      {
        "id": "yt_45hPRdfDEsI",
        "title": "🎬 Notion 如何用 Claude Managed Agents 打造產品",
        "category": "企業與客戶案例",
        "text": "<b>Notion PM 示範用 Claude Managed Agents 在 Notion 裡做 agent orchestration</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由 Notion 的產品經理示範：把 Claude 接進 Notion 後，同時派好幾個 agent 分頭做事。agent 是能自己一步步把任務做完的 AI 助手，不只是回答問題。想知道「一次交代好幾件事給 AI、自己去忙別的」實際長什麼樣子，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=0s\" target=\"_blank\">00:00</a> Notion PM Eric 負責 agents 與 agent orchestration；他曾把 30 個做 prototype 的任務一次丟給 Claude 跑，去拿個點心回來，prototype 就全做好了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Eric 是 Notion 產品經理，負責 agent orchestration，也就是替每份工作找合適的 agent、統一管流程。他曾一次派 30 個 prototype（試做版）給 Claude，拿個點心回來就全做好了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=33s\" target=\"_blank\">00:33</a> Notion 想成為 agent orchestration 平台。Claude 擅長複雜、長時間執行的任務，但要自己從頭建這套系統，工程上非常吃力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Notion 想當幫你調度各種 agent 的平台。Claude 很會處理又複雜、又要跑很久的工作，可是要從零打造一套讓它穩定跑完的系統，工程量非常大。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=33s\" target=\"_blank\">00:33</a> Managed agent 產品可以隨插即用地導入 Claude，session 在雲端執行，Notion 只要接上 API，就能提供給客戶使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Managed Agents 把執行環境先準備好，接上就能用。每次工作階段（session）都在雲端跑，Notion 只要用 API（程式之間互相溝通的接口）接上，就能開放給客戶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=63s\" target=\"_blank\">01:03</a> 示範案例是客戶 onboarding（虛構客戶 Harbor and Pine）。Notion 裡的 custom agent 可以存取所有客戶資料庫和任務看板，因此掌握完整脈絡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範的是 onboarding，也就是帶新客戶上手的流程，客戶 Harbor and Pine 是虛構的。Notion 裡的 custom agent 能讀所有客戶資料庫和任務看板，所以前因後果都清楚。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=124s\" target=\"_blank\">02:04</a> 把行動項目轉成任務丟上看板後，會啟動多條 agent thread，各自開一個 Claude session；使用者可以在 Notion 裡直接跟那個 session 對話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 行動項目變成看板上的任務後，會同時開好幾條 agent thread（各自獨立的工作線），每條背後都是一個 Claude session。你可以直接在 Notion 裡跟任一條對話、追問或調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=124s\" target=\"_blank\">02:04</a> 在 Claude platform 上可以用另一種視角看 session 的執行狀況，開發端也能把 traces 拿來改進 agent<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同樣的工作也能在 Claude platform（Anthropic 給開發者用的平台）換個角度看執行狀況。開發者還能用 traces（agent 每一步做了什麼的紀錄）找問題、改進 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=156s\" target=\"_blank\">02:36</a> 長時間任務可能要跑 20 分鐘到一小時。能持續執行、管理記憶、長時間維持高品質輸出的 harness，是建在模型之上的關鍵一層<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這類長任務可能要跑 20 分鐘到一小時。harness 是建在模型外面的那一層，讓 AI 能一路跑下去、記得前面做過什麼，品質也不會越做越差。影片強調這層非常關鍵。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=187s\" target=\"_blank\">03:07</a> 成果之一是一個範例首頁，內容取自 Notion 裡的脈絡；如果要修改，可以直接在 Notion 裡跟 Claude 對話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 成果之一是一個範例首頁，內容取自 Notion 裡現成的資料。想修改的話，不用換到別的工具，直接在 Notion 裡跟 Claude 講要改哪裡就好。</span>\n\n📘 術語<br><b>agent orchestration</b>（agent 協作調度）：找來適合這份工作的 agent，並由 Notion 幫你管理所有工作流程<br><b>Claude Managed Agents</b>（Claude 託管 agent）：讓導入 Claude 變得隨插即用，session 在雲端執行，接上 API 就能用<br><b>harness</b>（執行框架）：能跑長時間任務、管理記憶、長時間維持高品質輸出，是建在模型之上的關鍵一層<br><b>custom agent</b>（自訂 agent）：Notion 內建的 agent，被賦予客戶資料庫與任務看板，協助客戶 onboarding 流程<br><b>traces</b>（執行紀錄）：在 Claude platform 上看得到，開發端拿來改進 agent\n\n📺 <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=0s\" target=\"_blank\">How Notion built with Claude Managed Agents</a>（2026/04/08 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：下次遇到大工作，先把相關資料整理在同一個地方，讓 AI 看得到完整脈絡，再把工作拆成幾個互不干擾的小任務，一次交出去。等它做完，再一條一條跟它對話修改。",
        "quiz": {
          "q": "根據影片，Notion 為什麼覺得 managed agent 產品很好用？",
          "options": [
            "它讓 Notion 不需要任何 API 就能使用 Claude",
            "它讓 Notion 可以把 Claude 模型部署在自家伺服器上",
            "它讓導入 Claude 隨插即用，session 在雲端執行，接 API 就能用",
            "它讓工程師不必再寫任何 prompt"
          ],
          "correct": 2,
          "why": "[00:33] 提到 managed agent 讓導入 Claude 變得隨插即用，session 在雲端執行；[01:03] 提到只要接上 API 就能給客戶使用"
        },
        "status": "old"
      },
      {
        "id": "yt_U9s9Kxb7p5I",
        "title": "🎬 HubSpot 如何用 Claude 做客戶成功",
        "category": "企業與客戶案例",
        "text": "<b>HubSpot 分享 Claude 在行銷、客戶成功與工程上的使用成果</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 HubSpot（一家做行銷、業務和客服軟體的公司）分享他們怎麼在公司裡用 Claude。內容涵蓋三塊：行銷寫文案、客戶成功團隊幫客戶分析生意、工程師寫程式。每塊都有具體例子，適合想知道 AI 在真實公司裡能幫上什麼忙的人看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=0s\" target=\"_blank\">00:00</a> HubSpot 的使命是幫小型企業成長得更好，他們很早就開始用 Claude，認為這會從根本改變自己和客戶的工作方式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ HubSpot 的客戶多半是小公司。他們很早就開始用 Claude，而且不是把它當成偶爾用一下的小工具，而是認為它會改變整個做事方法，連帶也會改變客戶的工作方式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=0s\" target=\"_blank\">00:00</a> 他們很早就發現，Claude 的表現比其他開發中或試用過的工具更好；他們也說 Claude 很有品味，而行銷講的就是品味<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ taste（品味）在這裡是指判斷什麼寫法得體、什麼東西好看的眼光。行銷文案通常沒有標準答案，好壞差在分寸。他們覺得 Claude 在這方面比其他試過的工具強。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=31s\" target=\"_blank\">00:31</a> Claude 產出的第一批產品頁面很符合品牌調性；給它通話逐字稿和幾篇知識庫文章後，產出的內容讀起來就像自己的口吻<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 品牌調性就是一家公司固定的說話風格。知識庫文章是公司寫給客戶看的教學和說明。他們把真實客戶通話的文字紀錄和這些文章給 Claude 參考，它寫出來的東西就像自家人寫的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=31s\" target=\"_blank\">00:31</a> 一家飯店旅宿業者營收不理想。Claude 分析了歷史報表，指出哪些週末表現最好、哪些較差<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是幫客戶的實例：把一家飯店旅宿業者過去的營收報表交給 Claude，它指出哪些週末生意好、哪些比較差，業者就知道該從哪裡著手調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=61s\" target=\"_blank\">01:01</a> 一位 CSM 說，這已經遠遠超出他平常的工作範圍，客戶也說這是和 HubSpot 聊過最好的一次<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CSM 通常是指客戶成功經理，負責協助已經付費的客戶把產品用出成效。這位 CSM 靠 Claude 做出平常做不到的深入分析，客戶也覺得這次談話特別有收穫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=61s\" target=\"_blank\">01:01</a> 維護 code base 的時間大幅縮短，從想法做到 prototype 的時間也大幅減少<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code base（程式碼庫）是一個產品的全部程式碼；prototype（原型）是先做出來、可以試用的初步版本。意思是維護舊程式，以及把點子做成能試用的東西，都快了很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=91s\" target=\"_blank\">01:31</a> 開發者能空出時間做真正有價值的功能開發；有工程師說 Claude Code 讓他成為更好的工程師<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 推出、讓工程師寫程式時使用的 AI 工具。瑣碎的工作交給它處理後，工程師能專心做對使用者真正有用的功能，甚至覺得自己的功力也進步了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=91s\" target=\"_blank\">01:31</a> 他們的生產力提升了 40%；HubSpot 和 Anthropic 有共同使命，要讓大家取得工具和資訊，用過去做不到的方式經營事業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 40% 是 HubSpot 在影片裡說的自家數字。Anthropic 是開發 Claude 的公司。兩家的共同目標是讓一般企業也能拿到好用的工具和資訊，用以前做不到的方式經營生意。</span>\n\n📘 術語<br><b>taste</b>（品味）：字幕說 Claude 很有品味，而行銷講的就是品味<br><b>CSM</b>（CSM）：字幕裡用來指講者自己的職位，但沒有說明全名\n\n📺 <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=0s\" target=\"_blank\">How HubSpot uses Claude for customer success</a>（2026/02/09 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：想讓 AI 寫出像你自己口吻的東西，可以先給它你過去寫過的文章或對話紀錄當範本。手上有營收、業績這類表格的話，可以直接丟給 Claude，問它哪幾段時間表現最好、哪幾段最差，再看要從哪裡調整。",
        "quiz": {
          "q": "影片中 HubSpot 提到生產力提升了多少？",
          "options": [
            "40%",
            "30%",
            "20%",
            "50%"
          ],
          "correct": 0,
          "why": "[01:31] 字幕說：We've seen a 40% increase in productivity."
        },
        "status": "old"
      },
      {
        "id": "yt_Jp83_JMK74o",
        "title": "🎬 Anthropic 行銷團隊如何使用 Claude",
        "category": "企業與客戶案例",
        "text": "<b>沒寫過程式的行銷人員用 Claude Code 做出 Figma plugin，自動產生廣告文案版本</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的主角是 Anthropic 一位完全不會寫程式的行銷人員。他們用 AI 做出一個設計軟體的小工具，把做廣告圖時最煩的重複步驟自動化。如果你也常在電腦上重複做同一件事，這支片會讓你知道：不會寫程式，也能自己做出工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=1s\" target=\"_blank\">00:01</a> 分享者從來沒寫過程式，還得 Google 怎麼在 Mac 上打開 terminal；Claude Code 剛推出時，完全不懂這個產品是做什麼用的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分享者從沒寫過程式，連 Mac 的 terminal（用打字下指令來操作電腦的視窗）都要上網查怎麼開。Claude Code（在 terminal 裡幫你寫程式的 AI 工具）剛推出時，他們也搞不懂它能做什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=32s\" target=\"_blank\">00:32</a> 原本要在 Figma 手動複製 frame、從 Google Doc 貼上標題，10 個版本乘 5 種比例非常重複，所以用 Claude Code 做了一個 Figma plugin，只要貼一次文案就好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Figma 是做設計稿的軟體，frame 是裡面的一個個畫框。以前要一格格複製畫框、再貼上標題，10 個版本乘 5 種比例，就是 50 次重複動作。所以用 Claude Code 做了一個 plugin（外掛小工具），文案只要貼一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=94s\" target=\"_blank\">01:34</a> 實際示範：選取 frame 後辨識出 headline、CTA 等元件，一次貼上所有標題並按下 generate ad variants，每個版本各自產生一個 frame。原本約 30 分鐘的工作縮短到約 30 秒<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ headline 是廣告主標題，CTA 是「立即購買」這類叫人採取行動的按鈕。外掛會先認出範本裡這兩個位置，把標題一次貼進去再按生成，每個標題就各自產生一個畫框。30 分鐘的工作變成 30 秒。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=125s\" target=\"_blank\">02:05</a> 建議：先找出工作中重複、能自動化的部分，從非常小又簡單的事開始。不需要會寫程式，只要把問題講清楚、講精簡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 關鍵不在會不會寫程式，而是先挑出工作裡天天重複、步驟固定的事，從最小的開始做。跟 Claude 說明時，把「想要什麼結果、現在卡在哪」講清楚、講簡短就好。</span>\n\n📘 術語<br><b>Figma plugin</b>（Figma 外掛）：用 Claude Code 做的工具，能辨識範本元件，一次貼上文案就產生多個廣告版本\n\n📺 <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=0s\" target=\"_blank\">How Anthropic uses Claude in Marketing</a>（2026/01/27 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：找一件你每週都在「複製、貼上、改一點」的工作，例如同一份文案要改成好幾種尺寸，或把表格內容搬進簡報。把現在的步驟和想要的結果用三五句話寫下來，丟給 Claude，問它能不能幫你自動化。",
        "quiz": {
          "q": "使用 Figma plugin 之後，產生所有廣告版本大約要多久？",
          "options": [
            "約 10 分鐘",
            "約 30 分鐘",
            "約 30 秒",
            "約 5 分鐘"
          ],
          "correct": 2,
          "why": "字幕說原本大約要 30 分鐘，用了 plugin 後大約 30 秒就能完成（01:34–02:05）"
        },
        "status": "full"
      }
    ]
  },
  yt_research: {
    "id": "yt_research",
    "name": "📺 研究與安全・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_PQGxYvkMobQ",
        "title": "🎬 使用 Claude 時的資料保留機制說明",
        "category": "研究與安全",
        "text": "<b>說明從 Claude Fable 5 起為安全監控保留 30 天資料，以及新方案 Enterprise Frontier Safeguards</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講：從 Claude Fable 5 開始，你跟 Claude 的對話會為了安全因素多保留 30 天，以及這些資料由誰看、怎麼保護。如果你在公司用 Claude 處理客戶資料或內部文件，這支影片告訴你資料去了哪裡、誰碰得到，也介紹了企業可以自己保管這些資料的新方案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=0s\" target=\"_blank\">00:00</a> Mythos 等級的模型（如 Claude Fable 5.1）能力大幅提升，也可能被濫用，從詐騙到複雜的網路攻擊都有。最進階的濫用會分散在多個 session 和帳號，只看單次互動很難發現，所以需要把資料保存一段夠長的時間。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mythos 等級是影片對最強一級模型的稱呼，模型越強，越可能被拿去做壞事。高手會把壞事拆散到多個 session（一次完整的使用過程）和多個帳號，單看一次看不出來，要留一段時間的資料才拼得出全貌。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=31s\" target=\"_blank\">00:31</a> 未經明確許可，Anthropic 不會用企業資料訓練模型。預設情況下，Anthropic 人員都無法讀取監控用的資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 簡單說：公司的資料，沒有明確同意，Anthropic 不會拿去訓練模型（訓練就是讓 AI 從資料裡學習）。這 30 天的監控資料，預設連 Anthropic 的員工都打不開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=62s\" target=\"_blank\">01:02</a> 人工審查只在少數情況下發生，例如自動安全系統把內容標記為可能有害，而且只由一小群核准的審查人員進行。每次存取都會記錄在防竄改的 log 裡。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 只有自動系統判斷內容可能有害時，才可能有人工查看，而且只有少數核准過的審查員能看。每次查看都會寫進防竄改的 log（系統操作紀錄），事後改不掉，誰看過都查得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=62s\" target=\"_blank\">01:02</a> 新方案 Enterprise Frontier Safeguards 結合零資料保留（zero data retention）的隱私與偵測濫用的防護機制，由 Anthropic 與超過一百家客戶共同開發。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Enterprise Frontier Safeguards 是給企業的新方案。zero data retention（零資料保留）一般是指服務商處理完就不保留你的資料；新方案想同時做到這種隱私和抓濫用，是和一百多家客戶一起開發的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=92s\" target=\"_blank\">01:32</a> 符合資格的組織可以把監控用資料存在自己的雲端基礎架構，並使用自己的加密金鑰、存取政策和稽核紀錄。偵測到異常時，警示會直接送給組織團隊，不需要 Anthropic 人工審查。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 符合資格的公司可以把監控資料放在自己的雲端，用自己的加密金鑰（解開資料的鑰匙），自己決定誰能看，也自己留稽核紀錄。發現異常時，警示直接通知公司自己的團隊，不用經過 Anthropic 的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=92s\" target=\"_blank\">01:32</a> Enterprise Frontier Safeguards 會從今年秋天稍晚開始分階段推出。在它準備好之前，符合資格的組織在 Claude Fable 5 和 Fable 5.1 上可以享有零資料保留。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新方案從今年秋天稍晚開始分批上線。在那之前有個過渡辦法：符合資格的組織用 Fable 5 和 Fable 5.1 時，可以先享有零資料保留。</span>\n\n📘 術語<br><b>safety monitoring</b>（安全監控）：保存最近 30 天的 prompts 和輸出，由自動化系統分析有沒有嚴重濫用的跡象<br><b>zero data retention</b>（零資料保留）：字幕沒有定義它。只提到新方案結合了它的隱私保障，過渡期間符合資格的組織也可以使用<br><b>Enterprise Frontier Safeguards</b>（企業前沿防護方案）：讓符合資格的組織把監控資料存在自己的雲端，警示直接送給自家團隊<br><b>tamper-proof log</b>（防竄改紀錄）：任何人工存取監控資料的行為都會記錄在裡面\n\n📺 <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=0s\" target=\"_blank\">How data retention works when using Claude</a>（2026/09/14 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：用 Fable 5 以後的模型時，要記得你貼進去的內容會另外保留 30 天做安全檢查，機密或個資貼之前先想一下。在公司用的話，可以問 IT：我們是否符合資格、有沒有申請零資料保留或 Enterprise Frontier Safeguards，還有公司的對話紀錄保留幾天。",
        "quiz": {
          "q": "從 Claude Fable 5 開始，為了安全監控會保存多久的 prompts 和 Claude 的輸出？",
          "options": [
            "最近一年",
            "最近 90 天",
            "最近 30 天",
            "最近 7 天"
          ],
          "correct": 2,
          "why": "字幕 [00:31] 說 \"the last thirty days of prompts and Claude's outputs are stored for safety monitoring\"。"
        },
        "status": "full"
      },
      {
        "id": "yt_V12aLcjX23Q",
        "title": "🎬 AI 到底知道你哪些事？",
        "category": "研究與安全",
        "text": "<b>說明 AI 供應商保留你資料的四種用途，以及你可以怎麼掌控</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講：你打進 AI 的資料，AI 公司（影片裡叫 AI 供應商，也就是提供 AI 服務的公司）會留下哪些、拿去做什麼。影片把資料的用途分成四種。很多人會問 AI 身體或錢的問題，搞懂這四種用途，才知道哪些東西該管、要去哪裡管。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=0s\" target=\"_blank\">00:00</a> 人們每天把醫療問題、金錢煩惱等不會公開講的事輸入 AI 工具，你應該能查看並控制 AI 供應商保留了你的哪些資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 我們常問 AI 一些連朋友都不太講的事，像身體狀況、欠債。既然這麼私密，你就該看得到 AI 公司留了你哪些資料，也要能決定留不留。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=0s\" target=\"_blank\">00:00</a> 保留的資料可分四種用途：一是只用在這次對話，AI 只知道你自己放進去的內容；二是產品記憶，會把有用的細節從一次對話帶到下一次。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一種只用在這一次聊天，AI 只看得到你這次自己打的內容。第二種是 product memory（產品記憶），工具會記住有用的細節，例如你吃素，下次開新對話還記得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=31s\" target=\"_blank\">00:31</a> 三是供應商自己的系統：關掉對話後，資料依供應商政策、按其時程保存。四是訓練未來模型：對話不會存在模型裡讀給其他使用者看，很多供應商也可以選擇退出。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第三種：關掉對話後，資料還是會照公司規定存在它的系統裡，存多久看各家。第四種：拿去訓練新版 AI，但你的對話不會被原文唸給別人聽，很多家也能 opt out，就是選擇不給用。</span>\n\n📘 術語<br><b>product memory</b>（產品記憶）：很多 AI 工具現在能把有用的細節從一次對話保存到下一次<br><b>opt out</b>（選擇退出）：供應商用對話訓練未來模型時，很多會讓你選擇退出\n\n📺 <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=0s\" target=\"_blank\">What does AI actually know about you?</a>（2026/08/14 · 0 分鐘）",
        "tip": "💡 你可以怎麼用：打開你常用的 AI 工具，進設定頁，先看記憶功能記了你哪些事，把不想留的刪掉。再找找有沒有「用你的資料改進模型」這類選項，決定要不要關掉。",
        "quiz": {
          "q": "根據影片，用對話來「訓練未來模型」這種用途，下列哪個說法正確？",
          "options": [
            "關掉對話後，所有內容都會立刻永久刪除",
            "所有供應商都強制用對話訓練模型，不能選擇退出",
            "對話會存在模型裡，其他使用者可以查詢到",
            "對話不會存在模型裡讀給其他使用者看，而且很多供應商讓你選擇退出"
          ],
          "correct": 3,
          "why": "[00:31] 字幕說：Your conversations aren't stored in the model to be read back to other users. Where providers train future models on conversations many let you opt out."
        },
        "status": "full"
      },
      {
        "id": "yt_ANDl5Tkru7g",
        "title": "🎬 AI 到底知道你哪些事？",
        "category": "研究與安全",
        "text": "<b>說明分享給 AI 的資料會被怎麼使用，以及你能如何掌控</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在拆解：你丟給 AI 的資料，實際上會被拿去做哪幾件事，每一件事你又能怎麼控制。常用 AI、但沒仔細看過設定頁的人，看完會知道該去哪裡檢查，也會知道哪些東西不必貼進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=31s\" target=\"_blank\">00:31</a> 各家 AI 供應商政策不同，要自己確認所用工具的細節；重點是資料去哪、為什麼、留多久，而且每個環節都該有設定讓你掌控<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每家做 AI 的公司規則都不一樣，別人說的不一定適用你用的工具。檢查時抓三個問題：資料送到哪、拿去做什麼、存多久。每個環節都應該有設定可以讓你調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=63s\" target=\"_blank\">01:03</a> 第一種用途是對話本身：模型本身只在單次對話期間保有脈絡，隔天開新對話就是一片空白<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型在同一次對話裡能參考前面聊過的內容，這叫 context（脈絡），也就是它當下看得到的對話內容。對話結束就沒了，隔天開新對話，它不會自己想起昨天聊過什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=97s\" target=\"_blank\">01:37</a> 第二種是產品的記憶功能：不是模型本身記得你，而是存在帳號裡、開新對話時模型可以存取的細節；可以編輯、清除或整個關掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory（記憶）是產品另外把一些關於你的細節存在帳號裡，開新對話時讓模型拿來參考，不是模型自己真的記住你。存了哪些內容可以自己修改、刪除，也可以整個關掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=127s\" target=\"_blank\">02:07</a> 第三種是供應商自己的系統：隱私政策常允許用於維持服務、安全與濫用審查、修 bug、研究、廣告等商業用途<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 除了回答你，提供 AI 的公司內部系統也可能用到你的資料，例如維持服務運作、安全與濫用審查、修程式錯誤、做研究，甚至廣告等商業用途。這些通常寫在隱私政策裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=159s\" target=\"_blank\">02:39</a> 第四種是訓練未來的模型：個資通常會先移除，對話不會存在模型裡再念給其他使用者看，變成的是一種模式；很多供應商讓你選擇退出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對話也可能被拿去訓練未來的模型。通常會先拿掉個資，模型學到的是一種模式，不會把你的原話背起來再念給別人聽。很多公司提供 opt out（選擇退出），讓你選擇不參與訓練。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=189s\" target=\"_blank\">03:09</a> 組織導入 Claude 時，模型訓練預設是關閉的，不需要做任何設定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果是公司或組織整批導入 Claude，預設就不會拿對話去訓練模型，不需要另外做任何設定。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=219s\" target=\"_blank\">03:39</a> 好習慣：花幾分鐘檢查設定；依自己的舒適程度決定分享內容；不放心的內容就省略，例如用佔位字取代收件人真名<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 花幾分鐘把設定看一遍。要分享多少，看你自己放不放心；不放心的就別貼，改用 placeholders（佔位字），例如把收件人真名換成「客戶A」，AI 一樣幫得上忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=250s\" target=\"_blank\">04:10</a> 依敏感度選產品：日常用消費者版通常就夠；工作上的機密或受法規管制的資料，要找商業或企業方案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 查資料、改文章這種日常用途，用一般個人版通常就夠了。如果是公司機密，或是受法規管制的資料（例如病歷），就要用公司採購的商業或企業方案。</span>\n\n📘 術語<br><b>memory</b>（記憶功能）：不是模型本身記得你，而是存進帳號、開新對話時模型能存取的細節<br><b>context</b>（脈絡）：模型本身只在單次對話期間保有的內容<br><b>opt out</b>（選擇退出）：供應商若拿對話訓練未來的模型，很多會讓你選擇不參與<br><b>placeholders</b>（佔位字）：用來取代真名等資訊，一樣能得到相同效果\n\n📺 <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=0s\" target=\"_blank\">What does AI actually know about you?</a>（2026/08/13 · 4 分鐘）",
        "tip": "💡 你可以怎麼用：今天就打開你最常用的 AI 設定頁，看看記憶功能和「拿對話訓練模型」這兩項現在是開還是關。以後要貼工作內容之前，先把人名、公司名換成「客戶A」這類代稱。",
        "quiz": {
          "q": "根據影片，組織導入 Claude 時，模型訓練的預設狀態是什麼？",
          "options": [
            "預設開啟，但個資會先移除",
            "預設關閉，不需要做任何設定",
            "每位員工第一次登入時自己選擇",
            "預設開啟，需要管理員手動關閉"
          ],
          "correct": 1,
          "why": "[03:09] 字幕說：「When your organization brings in Claude, model training is off by default, so there's nothing you need to do.」"
        },
        "status": "old"
      },
      {
        "id": "yt_O0Bf2A4Z6O0",
        "title": "🎬 你能相信 AI 告訴你的事嗎？",
        "category": "研究與安全",
        "text": "<b>介紹 AI 出錯的兩種常見狀況：hallucination 和 sycophancy</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 的開發公司 Anthropic 做的短片，講為什麼 AI 的回答不能全盤照收。影片把 AI 常見的錯誤分成兩種，兩種的成因不一樣。搞懂之後，你會比較知道什麼時候要多查一下。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> AI 的回答可能看起來很有自信、條理分明，甚至附上來源，但還是可能出錯。常見的出錯方式有兩種，成因也不一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 講話很有把握，不代表內容就是對的。語氣很肯定、排版很整齊，甚至附上來源，都不能保證正確。而且 AI 出錯的原因不只一種，要先分清楚，才知道該防哪一種。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> 第一種是 hallucination：模型生成聽起來合理但不是事實的內容，有時很細微，例如產品介紹列出產品其實沒有的功能<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ hallucination（幻覺）：模型講出聽起來很合理、其實不是事實的內容。麻煩的是有時錯得很細微，例如產品介紹裡多列了一個根本沒有的功能，不去對照原始資料就很難發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> 第二種是 sycophancy：模型有時會說你看起來想聽的話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ sycophancy（討好、附和）：模型有時會順著你看起來想聽的話回答。這跟幻覺是不同的錯：它不是隨口編東西，而是答案被你的態度牽著走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=30s\" target=\"_blank\">00:30</a> 如果提問透露出你想要的答案，例如「我覺得這個計畫很穩，你不覺得嗎？」，模型可能就直接附和<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 像是問「我覺得這個計畫很穩，你不覺得嗎？」，你等於先把答案說出來了，模型就可能直接跟著說好。想聽真話，問題裡就不要透露立場，可以改問「這個計畫有哪些風險？」</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=30s\" target=\"_blank\">00:30</a> Anthropic 直接處理 hallucination 和 sycophancy 這兩個問題；沒有完美的模型，但每個模型都會訓練得更好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 說他們會直接處理幻覺和附和這兩個問題，新的模型都會訓練得更好。但他們也講明了，沒有完美的模型。所以重要的事情，還是要自己再確認一次。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：模型生成聽起來合理、但不是事實的內容<br><b>sycophancy</b>（諂媚／討好）：模型說出你看起來想聽的話，例如直接附和你的看法\n\n📺 <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">Can you trust what AI tells you?</a>（2026/08/11 · 0 分鐘）",
        "tip": "💡 你可以怎麼用：問重要問題時，用不帶立場的問法，例如問「這有什麼缺點？」，不要問「這很好吧？」。AI 給的具體事實，像產品功能、數字、引用的來源，要先回原始資料對過一次再拿來用。",
        "quiz": {
          "q": "根據影片，當你問 AI「我覺得這個計畫很穩，你不覺得嗎？」，模型可能會出現哪種問題？",
          "options": [
            "Sycophancy：直接附和你的看法",
            "Hallucination：編造計畫裡不存在的細節",
            "拒絕回答這個問題",
            "自動引用外部來源來反駁你"
          ],
          "correct": 0,
          "why": "[00:30] 字幕說提問透露出你想要的答案時，模型可能就直接附和，這就是 sycophancy（[00:00] 有定義）"
        },
        "status": "full"
      },
      {
        "id": "yt_0KCTELWXYPw",
        "title": "🎬 什麼是 sycophancy（諂媚／討好）？",
        "category": "研究與安全",
        "text": "<b>說明 AI 的 sycophancy 是什麼、為什麼會出現，以及怎麼應對</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 的官方短片，講 AI 為什麼有時會一直順著你說話。這種毛病叫 sycophancy（中文常翻成「諂媚」或「討好」），意思是 AI 說你想聽的話，而不是實話。常拿 AI 查資料、問意見的人弄懂這件事，比較不會被好聽話牽著走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> Sycophancy 指的是只說你想聽的話，而不是真實、正確或真正有幫助的內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Sycophancy 就是 AI 在討好你：它挑你愛聽的話講，而不是挑正確、對你真的有用的講。聽起來舒服，不代表內容可靠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 例子：AI 附和你的事實錯誤、依你提問的措辭改變答案、依你的偏好調整回應<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 比如你講錯一個年份，它照著接下去。你問「這樣很好吧？」和「這樣有問題嗎？」，它的答案跟著變。它看出你偏向哪邊，就往哪邊靠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 成因：訓練模型變得有幫助、語氣溫暖友善或支持時，sycophancy 會以非預期的方式一起出現<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 沒有人故意教 AI 拍馬屁。問題是訓練它要熱心、語氣友善、給人支持的時候，它也跟著學會「順著對方講」，這是沒料到的副作用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 沒人想用一直唱反調或很好鬥的 AI，但需要誠實回饋時也不該只給附和或稱讚<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 目標不是做一個愛抬槓的 AI，那樣也很煩。重點是你真的需要實話的時候，例如請它挑企劃的毛病，它要敢指出問題，不能只會說很棒。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 因此會持續研究 sycophancy 在對話中如何出現，並開發更好的測試方法<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所以開發團隊會繼續研究：討好在對話中通常是怎麼冒出來的。他們也在設計更好的測試方法，先能測出來，才有辦法改善。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 應對方法：用中立、追求事實的措辭；拿可信來源交叉比對；要求準確性或反方論點；或暫停使用 AI，改問你信任的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 問法保持中立，問「這對嗎？」而不是「這是對的吧？」。拿可靠來源核對。在 prompt（你打給 AI 的指令）裡要它重視準確、列出 counterarguments（反方論點）。或先不用 AI，改問你信任的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 系統越先進、越融入生活，打造真正有幫助、而不只是附和的模型就越重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 越來越強，也越常被拿來查資料、做決定。它如果只會附和，造成的傷害就越大。所以做出真正幫得上忙、而不是只會點頭的模型，就越來越重要。</span>\n\n📘 術語<br><b>sycophancy</b>（諂媚／討好）：說對方想聽的話，而不是真實、正確或真正有幫助的內容<br><b>counterarguments</b>（反方論點）：懷疑回應有 sycophancy 時，可以在 prompt 裡要求 AI 提出的內容之一\n\n📺 <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=0s\" target=\"_blank\">What is sycophancy?</a>（2026/07/21 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：下次問 AI 意見時，先別透露你希望聽到什麼答案。如果覺得它太順著你，就補一句「請指出這個想法最大的三個問題，並給我反方論點」。重要的事再找可靠來源或信任的人確認。",
        "quiz": {
          "q": "根據影片，AI 為什麼會出現 sycophancy？",
          "options": [
            "使用者問題太模糊，模型只能猜答案",
            "訓練資料裡的事實錯誤太多",
            "訓練模型變得有幫助、語氣溫暖友善或支持時，sycophancy 會以非預期的方式一起出現",
            "模型被刻意設計成要附和使用者，好提高使用率"
          ],
          "correct": 2,
          "why": "[00:01] 字幕提到，訓練模型變得有幫助、模仿溫暖、友善或支持的語氣時，sycophancy 會以非預期的方式一起出現"
        },
        "status": "full"
      },
      {
        "id": "yt_RnOWJoHU_NY",
        "title": "🎬 為什麼 AI 模型會有偏見？",
        "category": "研究與安全",
        "text": "<b>以政治偏見為例，說明 AI 偏見的來源、Anthropic 怎麼訓練與測試 Claude，以及使用者可以怎麼應對</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片以政治偏見為例，講 AI 為什麼會有偏見、Anthropic（開發 Claude 的公司）怎麼訓練和測試 Claude，以及我們使用時可以怎麼應對。常拿 AI 查資料、問時事的人值得看，因為偏見多半藏在細節裡，不太容易察覺。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=8s\" target=\"_blank\">00:08</a> AI 偏見有很多種形式。除了刻板印象和政治偏見，也可能比較間接，例如預設給某類答案或觀點，或是某些語言的回答品質比較好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 的偏見不只是刻板印象（例如預設護理師都是女生）或政治立場，也可能藏在細節裡：老是給同一類答案，或是用英文問答得比用中文問好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=40s\" target=\"_blank\">00:40</a> Anthropic 無法完全掌握偏見會怎麼出現，但會投入大量心力訓練 Claude 保持中立，並測試成效。這是所有 AI 開發者共同面對的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 承認沒辦法事先知道偏見會從哪裡冒出來，所以靠大量訓練把 Claude 導向中立，再測試效果好不好。這不是 Claude 才有的問題，每家做 AI 的公司都要面對。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=40s\" target=\"_blank\">00:40</a> 政治偏見是指模型偏好某一種政治觀點。有的很明顯，例如拒絕解釋某一方的立場；有的比較隱微，例如對某一方的回答比較詳細<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ political bias（政治偏見）就是 AI 偏向某一種政治立場。明顯的像只肯解釋其中一方；隱微的像兩邊都有回答，但對某一邊寫得特別詳細，一般人很難發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=72s\" target=\"_blank\">01:12</a> 偏見的來源：AI 從網路上大量文字（例如新聞、評論文章）學習，可能從中學到偏向某一方的模式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 是讀網路上大量文字學會回答問題的，新聞和評論本來就各有立場。如果某一方的說法比較多，AI 就可能跟著學到偏向那一方的講法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=106s\" target=\"_blank\">01:46</a> 處理方式有兩種：訓練和測試。訓練時教 Claude 保持中立、公平對待對立觀點，對議題的正反兩方都給出同樣有幫助的回答<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對策分成兩步：先訓練，再測試。訓練時要求 Claude 公平對待立場相反的看法，不管你問的是哪一方，拿到的回答都一樣用心、一樣有幫助。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=140s\" target=\"_blank\">02:20</a> 測試時用 paired prompts：針對同一個政治議題，從兩個立場各問一次（例如共和黨和民主黨的醫療政策），再比較兩個回答的深度和投入程度是否相當<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是你輸入給 AI 的問題或指令。paired prompts（成對提問）就是同一個議題正反各問一次，例如各問共和黨和民主黨的醫療政策，再比較兩邊回答的深度和用心程度差不差不多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=174s\" target=\"_blank\">02:54</a> 測試涵蓋數千個 prompt、數百個主題。模型在測試中維持高度中立，資料集也已公開，任何人都能跑同樣的測試並給回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這種測試做了幾千題、涵蓋幾百個主題，結果 Claude 大致維持中立。測試題目也已經公開，任何人都能自己跑一遍檢查，發現問題也可以回報。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=206s\" target=\"_blank\">03:26</a> 使用建議：覺得回答偏頗就反駁、要求更細緻平衡的觀點、說明你想要誠實的討論、請 AI 蒐集證據再自己查看連結、從不同角度問同一個問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你也有幾招可以用：覺得偏了就直接反駁，要求更完整、更平衡的說法，講明你想要誠實的討論；請它附上證據，再自己點開連結看；也可以換個立場再問一次。</span>\n\n📘 術語<br><b>political bias</b>（政治偏見）：模型偏好某一種政治觀點；可能很明顯，也可能很隱微<br><b>paired prompts</b>（成對提示）：針對同一個政治議題，從兩個立場各問一次，用來比較回答是否對等<br><b>AI Fluency</b>（AI 素養）：影片最後提到可以在 Anthropic Academy 進一步了解（字幕沒有解釋內容）\n\n📺 <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=0s\" target=\"_blank\">Why does bias exist in AI models?</a>（2026/04/24 · 4 分鐘）",
        "tip": "💡 你可以怎麼用：下次問有爭議的議題（例如核電、死刑），可以先問「支持的人怎麼說」，再開一個新對話問「反對的人怎麼說」，比比看兩邊回答是不是一樣詳細、一樣認真；回答裡有附來源的話，記得自己點開確認。",
        "quiz": {
          "q": "Anthropic 用哪種方法測試 Claude 有沒有政治偏見？",
          "options": [
            "把 Claude 的回答拿去和網路新聞的立場比對",
            "請不同政治立場的真人評審幫每個回答打分數",
            "用 paired prompts，從兩個立場針對同一個主題提問，再比較兩個回答",
            "只檢查 Claude 有沒有拒絕回答政治問題"
          ],
          "correct": 2,
          "why": "[02:20] 字幕說評估方法使用 paired prompts，請 Claude 從兩個立場回應同一個政治主題，再依幾項標準比較兩個回答，包括深度和投入程度是否相同"
        },
        "status": "old"
      },
      {
        "id": "yt_005JLRt3gXI",
        "title": "🎬 為什麼 AI 模型會產生幻覺？",
        "category": "研究與安全",
        "text": "<b>說明 AI 幻覺的成因、Anthropic 的因應作法，以及使用者如何察覺與減少幻覺</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講 AI 為什麼會一本正經地瞎掰，也就是「幻覺」。影片說明它怎麼發生、Anthropic 怎麼試著減少它，以及你可以怎麼察覺和防範。只要你會拿 AI 查資料、寫報告，這些都用得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=7s\" target=\"_blank\">00:07</a> AI 捏造內容的錯誤稱為幻覺（hallucination），往往比單純犯錯更糟，因為 AI 會顯得很有自信，甚至試圖說服你它是對的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「幻覺」（hallucination）指 AI 把不存在的東西講得像真的。麻煩在它語氣很篤定，你質疑它還可能堅持，比單純答錯更容易讓人信以為真。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=39s\" target=\"_blank\">00:39</a> 幻覺的形式包括引用不存在的研究論文、編造假統計數據，或把真實人物、事件的事實講錯；例如請 Claude 介紹 Jared Kaplan 的論文，它給出的標題都不存在<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常見的樣子有幾種：列出根本查不到的論文、編一個看起來很精確的數字、把真人真事的細節講錯。影片裡請 Claude 列某位研究者的論文，結果它給的標題全都不存在。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=70s\" target=\"_blank\">01:10</a> 幻覺難以預料、難以抓到，錯誤答案常看起來跟正確答案一模一樣；而且因為幻覺越來越少，大家常懶得檢查 AI 的答案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 假答案和真答案長得一模一樣，看不出破綻。而且 AI 出錯越來越少，大家就習慣直接相信，偶爾出現的錯反而最容易漏掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=103s\" target=\"_blank\">01:43</a> 成因：AI 從大量網路文字學習預測下一個字，遇到冷門主題時資料不足，會為了幫上忙而猜測，有時猜錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 是讀大量網路文字，學會猜「下一個字最可能是什麼」。常見主題資料多，猜得準；冷門主題資料少，它又想幫上忙，就會硬湊出一個像樣的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=133s\" target=\"_blank\">02:13</a> 訓練時教 Claude 誠實，不確定時說「I don&#x27;t know」，並讓它理解誠實既是對的事，也是更有幫助的一部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 訓練 Claude 在沒把握時直接說「I don&#x27;t know」（我不知道）。重點是讓它明白，老實說不知道不算失職，比給錯答案更能幫到你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=167s\" target=\"_blank\">02:47</a> 定期用數千個專門設計來考倒 Claude 的問題測試，衡量它是否正確表達不確定、是否捏造引用或統計；這仍是整個 AI 領域尚未解決的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們定期拿幾千題專門出來考倒 Claude 的題目測它，看它會不會捏造出處或數字、沒把握時有沒有 hedge（加上「可能」「我不確定」這類保留）。整個 AI 界都還沒解決這個問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=206s\" target=\"_blank\">03:26</a> 容易出現幻覺的情境：詢問具體事實、統計或引用；冷門、小眾或很新的主題；不廣為人知的真實人物或地點；需要日期、名字、數字等精確細節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這些情況要特別小心：問具體事實、數據或出處；主題冷門、小眾或很新；問不太有名的人或地方；需要精確的日期、人名、數字。要求越精準，越容易出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=236s\" target=\"_blank\">03:56</a> 減少幻覺的技巧：要求 AI 提供來源並確認來源支持其說法、事先說「It&#x27;s ok if you don&#x27;t know」、詢問它有多確定、開新對話請 AI 找錯；重要工作要對照可信來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 請它附來源，並點開確認來源真的這樣寫；事先說「It&#x27;s ok if you don&#x27;t know」（不知道也沒關係）；問它有多確定；開新對話請 AI 挑錯。重要的事要再查可靠來源。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：AI 捏造內容的錯誤，且常顯得很有自信，甚至試圖說服你它是對的<br><b>hedge</b>（保留說法／避險表述）：測試項目之一：衡量 Claude 多常適當地保留語氣，而不是自信地陳述錯誤內容\n\n📺 <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=0s\" target=\"_blank\">Why do AI models hallucinate?</a>（2026/04/15 · 5 分鐘）",
        "tip": "💡 你可以怎麼用：下次請 AI 查數據、論文或人物資料時，在問題最後加一句「不知道也沒關係，請附上來源」，拿到答案後至少點開一個來源確認。要交出去的內容，再開一個新對話請 AI 幫忙挑錯。",
        "quiz": {
          "q": "根據影片，當你對 AI 給出的某個答案沒把握時，建議的做法是什麼？",
          "options": [
            "在同一個對話中重複問同樣的問題，直到答案一致為止",
            "請 AI 把答案改寫得更簡短，降低出錯機率",
            "開一個新對話，請 AI 找出該答案中的錯誤，並確認來源是否支持其說法",
            "改用另一家公司的 AI 模型來回答同一個問題"
          ],
          "correct": 2,
          "why": "[03:56] 字幕提到：If you have an answer you're unsure about, start a new chat and ask the AI to find errors in the answer, and to confirm that the sources support the statements."
        },
        "status": "old"
      }
    ]
  },
  yt_art: {
    "id": "yt_art",
    "name": "📺 藝術人文・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_LCQ0_t02OHY",
        "title": "🎬 有時候，一個專案的意義就在於它是為誰而做",
        "category": "藝術與人文",
        "text": "<b>用新的 Opus 模型幫女友做一個會互動的鑰匙圈，當作送給心愛的人的禮物</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片很短，講者用新的 Opus 模型幫女友做了一個會互動的鑰匙圈當禮物。重點不是技術多厲害，而是讓人看到 AI 也能拿來做只送給一個人的心意小物。就算你不是工程師，只要有想法，也能靠 AI 一步步做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 講者一直相信科技也能像手寫卡片一樣充滿個人心意，所以用新的 Opus 模型幫女友做了一個小鑰匙圈<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者覺得科技產品不一定冷冰冰，也能像手寫卡片一樣帶著心意。所以請新的 Opus（Anthropic 旗下 Claude 裡能力最強的模型等級）當幫手，幫女友做了一個小鑰匙圈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 作品用兩塊小電路板，每塊都接上螢幕和天線。最初的構想很簡單：兩人靠近時就會發光，後來又加入兩人的小角色和 emoji，按一下按鈕就能送出一個親親<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 鑰匙圈是一對的：兩塊小電路板各接一個螢幕和天線，天線讓兩邊能互相感應。原本只做到兩人靠近就亮，後來加上兩人的小角色和 emoji（表情符號），按一下按鈕就能傳親親給對方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 講者靠新的 Opus 模型學會怎麼接好所有零件、幫天線寫程式，還設計出好看又組得起來的外殼<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接線、幫天線寫程式、設計外殼，講者都是靠 Opus 學會的；外殼還要好看，又得真的組得起來。也就是說，AI 不只幫忙寫文字，也能帶人做出摸得到的實體小東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=33s\" target=\"_blank\">00:33</a> 講者說這是個又小又傻的東西，但為心愛的人親手做點東西，是他們最喜歡的表達方式之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者自己也說這東西又小又傻，沒什麼實用功能。但對他們來說，價值在於是親手為心愛的人做的。就像手工卡片一樣，心意比技術更重要。</span>\n\n📺 <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=0s\" target=\"_blank\">Sometimes the whole point of a project is who it’s for</a>（2026/09/23 · 0 分鐘）",
        "tip": "💡 你可以怎麼用：下次想送特別的禮物時，可以直接跟 Claude 說送給誰、想要什麼效果，請它一步步教你需要哪些東西、怎麼做。不想碰硬體的話，也可以先請它幫你做一個只給對方看的小網頁或小遊戲。",
        "quiz": {
          "q": "影片中這個鑰匙圈最初的構想是什麼？",
          "options": [
            "兩人靠近時會發光",
            "記錄兩人一起走過的地點",
            "每天自動傳送一則訊息",
            "對方來電時會震動"
          ],
          "correct": 0,
          "why": "字幕 [00:02] 提到 \"The initial idea was simple, glow when we're close to each other.\""
        },
        "status": "full"
      },
      {
        "id": "yt_JdqNda9JeaU",
        "title": "🎬 用 Claude 拍攝星空",
        "category": "藝術與人文",
        "text": "<b>Shane Oakland 在 Death Valley 拍銀河全景，並說向 Claude 請教很有幫助</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支短片跟著攝影師 Shane Oakland 到美國的 Death Valley（死亡谷）拍銀河全景。他說學拍法的時候問了 Claude，覺得很有幫助。一般人也能從這裡看到 AI 怎麼陪人學一項新技能，順便弄懂拍星空最基本的幾個觀念。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=0s\" target=\"_blank\">00:00</a> Shane Oakland 想學拍銀河的全景照片，他說向 Claude 請教做法「非常有幫助」。他把天文攝影形容成去荒野拍星星，成敗要看風，像在抽樂透。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane 想學拍銀河全景，就先問 Claude 該怎麼做，他說非常有幫助。Astrophotography（天文攝影）是專門拍星空的攝影。他說這像抽樂透，因為風這種條件人控制不了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=30s\" target=\"_blank\">00:30</a> 銀河幾乎沒辦法用肉眼看到。用鏡頭把光圈開到最大、讓大量光線進來，就能看到星空。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 銀河的光很弱，用肉眼幾乎看不到。Aperture（光圈）是鏡頭上讓光進來的開口，開到最大，相機就能收到很多光，拍出眼睛看不到的星空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=30s\" target=\"_blank\">00:30</a> 拍攝地點在 Death Valley。每張轉大約 30° 來疊合成全景，目標是等銀河出現時把整座山拍進畫面，曝光時間 25 秒。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 地點在美國加州的沙漠 Death Valley。Panoramic photo（全景照）是拍好幾張再拼成一張，他每張轉大約 30°，讓整座山和銀河都入鏡。每張的曝光時間，也就是相機收光的時間，是 25 秒。</span>\n\n📘 術語<br><b>Astrophotography</b>（天文攝影）：到荒野拍攝星星<br><b>Aperture</b>（光圈）：開到最大讓大量光線進來，就能拍到肉眼幾乎看不到的銀河<br><b>Panoramic photo</b>（全景照片）：每張轉大約 30° 來疊合，把整座山和銀河拍進畫面\n\n📺 <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=0s\" target=\"_blank\">Photographing the stars with Claude</a>（2026/07/07 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：想學新東西時，可以像 Shane 一樣把目標講具體，例如「我想在沙漠拍銀河和山的全景」，請 Claude 列出相機設定和拍攝步驟，帶去現場邊拍邊調整。",
        "quiz": {
          "q": "Shane 在 Death Valley 拍銀河全景時，設定的曝光時間是多少？",
          "options": [
            "30 秒",
            "60 秒",
            "25 秒",
            "15 秒"
          ],
          "correct": 2,
          "why": "字幕 [00:30] 說 \"Exposure time 25 seconds.\""
        },
        "status": "full"
      },
      {
        "id": "yt_8--srKGAaMQ",
        "title": "🎬 用 Claude 拍攝星空",
        "category": "藝術與人文",
        "text": "<b>Shane Auckland 用 Claude 學拍銀河全景，在 Death Valley 實地挑戰天文攝影</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片跟著 Shane Auckland 到美國的 Death Valley，看 Shane 怎麼靠 Claude 從零開始學拍銀河全景。值得看的地方不只是攝影技巧，還有一般人怎麼把 AI 當成學習教練，去挑戰一個很難、又要靠實際練習才學得會的嗜好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=0s\" target=\"_blank\">00:00</a> Shane Auckland 想學拍全景銀河照片，請 Claude 用條列重點說明怎麼拍，他覺得「超棒」。他喜歡需要大量練習的困難嗜好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane Auckland 想學拍整片銀河的全景照，就請 AI 助理 Claude 把步驟整理成條列重點，覺得超好用。Shane 本來就偏愛要大量練習才學得會的難嗜好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=0s\" target=\"_blank\">00:00</a> 天文攝影就是跑到荒郊野外拍星星，條件要全部配合才行；這次拍攝地點在 Death Valley<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astrophotography（天文攝影）就是專門拍星空的攝影，要跑到遠離城市燈光的野外，天氣、時間等條件都要剛好才拍得成。這次地點在美國的 Death Valley（死亡谷）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=31s\" target=\"_blank\">00:31</a> 肉眼其實很難看見銀河，但把鏡頭光圈開到最大、讓光線進來，就能拍到外太空<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 銀河的光很暗，肉眼通常只看到淡淡一片。Aperture（光圈）是鏡頭上控制進光多少的開口，開到最大，相機就能收進更多光，拍出眼睛看不到的星空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=31s\" target=\"_blank\">00:31</a> 拍全景時相機每次旋轉約 30 度，讓照片互相重疊，目標是銀河出現時把整座山拍進畫面；曝光 25 秒<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Panorama（全景）是拍好幾張，再拼成一張寬照片。每拍一張，相機就轉約 30 度，讓相鄰的照片有重疊、方便拼接；每張曝光 25 秒，要把銀河和整座山都拍進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=62s\" target=\"_blank\">01:02</a> 他的心得：一定會失敗，但要繼續前進、持續思考<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane 的體會是：失敗一定會發生。拍壞了不代表要放棄，而是回頭想哪裡出了問題、下次怎麼調整，然後繼續拍。</span>\n\n📘 術語<br><b>Astrophotography</b>（天文攝影）：跑到荒郊野外去拍星星<br><b>Aperture</b>（光圈）：開到最大可以讓所有光線進來，拍到肉眼看不見的銀河<br><b>Panorama</b>（全景照片）：每次旋轉約 30 度讓照片重疊，把整座山拍進畫面\n\n📺 <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=0s\" target=\"_blank\">Photographing the stars with Claude</a>（2026/07/06 · 1 分鐘）",
        "tip": "💡 你可以怎麼用：想學一項新技能時，可以像 Shane 一樣，請 Claude 把步驟整理成條列清單，帶到現場照著做。失敗了就把結果和當時的設定告訴 Claude，請它幫你找原因，再調整下一次的做法。",
        "quiz": {
          "q": "Shane 拍銀河全景時，說每張照片之間要轉多少度才能讓畫面重疊？",
          "options": [
            "約 30 度",
            "約 180 度",
            "約 90 度",
            "約 15 度"
          ],
          "correct": 0,
          "why": "[00:31] 他說 \"I'm going to rotate about 30 degrees, I think should be enough to overlap the panorama photo\""
        },
        "status": "full"
      },
      {
        "id": "yt_YovuEy7ufhE",
        "title": "🎬 Squidsoup 如何用 Claude 打造藝術裝置",
        "category": "藝術與人文",
        "text": "<b>藝術團體 Squidsoup 分享與管弦樂團合作的裝置作品，以及用 Claude 簡化創作工具</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹英國藝術團體 Squidsoup，他們用燈光和聲音把整個空間變成作品。影片談到他們第一次和管弦樂團合作的裝置，也談到他們怎麼用 Claude 把難用的創作軟體變得好上手。如果你不是工程師，又想知道 AI 在創作團隊裡能扮演什麼角色，這支片是很實在的例子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=5s\" target=\"_blank\">00:05</a> Squidsoup 是由藝術家與設計師組成的合作團體，做沉浸式體驗，包括聲音、燈光，最重要的是空間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Squidsoup 是藝術家和設計師組成的團體，專做沉浸式體驗（immersive experiences，讓觀眾整個人走進作品、被聲光包圍）。他們最在意的是整個空間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=35s\" target=\"_blank\">00:35</a> 「Echoes of Hill and Horizon」是他們第一次和管弦樂團合作，對象是古樂團 Orchestra of the Age of Enlightenment；整個作品要精密編排，他們也跟著指揮走<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「Echoes of Hill and Horizon」是他們第一次和管弦樂團合作，對象是古樂團（period orchestra，用樂曲那個年代的樂器演奏）。燈光得精準配合音樂，也要跟著指揮走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=67s\" target=\"_blank\">01:07</a> 靈感來自 Gloucester Cathedral 的彩繪玻璃：紅色與藍色光群重疊交織時，看起來就像彩繪玻璃的顏色<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 靈感來自英國格洛斯特大教堂（Gloucester Cathedral）的彩繪玻璃。他們讓一群群紅光和藍光重疊交錯，看起來就像陽光穿過彩繪玻璃時的顏色。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=110s\" target=\"_blank\">01:50</a> 他們認為藝術家一直在和媒材對話；電子零件、軟體和 LED 都有各自的材料特性，就像他們的顏料<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們覺得創作就是和材料來回磨合。畫家要摸清顏料的特性，他們要摸清的是電子零件、軟體和 LED（會發光的小燈）各自能做什麼、限制在哪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=142s\" target=\"_blank\">02:22</a> 他們用 Claude 幾個月了，用它繞過現有軟體難用的介面，讓軟體更快做到想要的事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們用 Claude 已經幾個月了。現成的專業軟體介面很難操作，他們就靠 Claude 繞過那些麻煩的步驟，更快讓軟體做出想要的效果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=142s\" target=\"_blank\">02:22</a> Claude 幫他們把非常複雜的 node 結構建模，轉成符合他們空間創作思路的工具組，也讓團隊其他成員能用這些工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的軟體要用 node（節點，一格格功能方塊用線串起來）搭出很複雜的結構。Claude 幫他們把它改成符合空間創作思路的工具，團隊其他人也能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=172s\" target=\"_blank\">02:52</a> Claude 就像介於技術觀點和藝術觀點之間的合作者，扮演雙方的翻譯層，讓團隊能更緊密合作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊裡管技術的人和做藝術的人，想法和用語常常對不上。Claude 在兩邊之間當「翻譯層」（translation layer）互相轉換意思，讓大家合作得更緊密。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=172s\" target=\"_blank\">02:52</a> 他們的目標是讓觀眾完全不去注意技術，只專注於空間中的光與聲音，以及身邊的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們希望觀眾完全不會注意到背後的機器和程式，只專心感受空間裡的光和聲音，還有身邊一起體驗的人。</span>\n\n📘 術語<br><b>immersive experiences</b>（沉浸式體驗）：Squidsoup 的創作類型，結合聲音、燈光與空間<br><b>period orchestra</b>（古樂團）：字幕用這個詞形容 Orchestra of the Age of Enlightenment<br><b>node structure-based modeling</b>（以 node 結構為基礎的建模）：原本非常複雜的建模方式，他們透過 Claude 把它轉成更直覺的工具組<br><b>translation layer</b>（翻譯層）：Claude 在技術觀點和藝術觀點之間扮演的角色\n\n📺 <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=0s\" target=\"_blank\">How Squidsoup makes art installations with Claude</a>（2026/07/03 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：如果你常卡在某個難用的軟體，可以用白話告訴 Claude「我想做到什麼效果」，請它幫你整理出更簡單的步驟。要和工程師溝通時，也可以先請它把你的想法翻成對方聽得懂的需求。",
        "quiz": {
          "q": "Squidsoup 在作品中重疊交織哪兩種顏色的光群，營造出彩繪玻璃的效果？",
          "options": [
            "藍色與黃色",
            "紫色與白色",
            "紅色與藍色",
            "金色與綠色"
          ],
          "correct": 2,
          "why": "[01:07] 字幕提到，紅色和藍色的光群重疊交織時，看起來就像彩繪玻璃的顏色"
        },
        "status": "old"
      }
    ]
  },
  yt_other: {
    "id": "yt_other",
    "name": "📺 其他・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_N4efO8viXXo",
        "title": "🎬 Code with Claude Tokyo 2026：開幕主題演講",
        "category": "其他",
        "text": "<b>發表 Claude Fable 5／Mythos 5，並介紹 Claude Managed Agents 與 Claude Code 的新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Anthropic 在 Code with Claude 東京場的開場演講。他們一次發表了兩個新一代模型：Fable 5 和 Mythos 5，也更新了兩個產品。一個是 Managed Agents，官方幫企業代管 agent 的服務；agent 是會自己拆步驟、動手把事情做完的 AI。另一個是寫程式工具 Claude Code。想知道 Claude 接下來能自己做多少事，看這場最快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=143s\" target=\"_blank\">02:23</a> 幾小時前發表第五代模型 Claude Mythos 5 與 Claude Fable 5，是 Anthropic 目前能力最強的兩個模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 幾小時前剛發表第五代的 Mythos 5 和 Fable 5。模型就是 Claude 背後負責思考、回答的那顆大腦，官方說這兩個是他們目前最強的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=390s\" target=\"_blank\">06:30</a> 平台上的 API 用量年增將近 17 倍；Claude Managed Agents 新增兩項功能：排程部署，以及把環境變數存在 vault，讓 agent 不必拿到金鑰也能發出需要驗證的 API 請求<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ API 是讓程式直接呼叫 Claude 的管道，用量一年長了將近 17 倍。Managed Agents 多了兩個功能：可以排時間自動開工；密碼金鑰鎖進 vault 保險箱，agent 能用，但看不到內容。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=668s\" target=\"_blank\">11:08</a> Fable 5 在 Sweepbench Pro 拿到最高分。優勢有兩點：single-shot correctness，以及 long horizon autonomy（能連續跑好幾天、處理數百萬 tokens、調度 subagent）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fable 5 在寫程式測驗 Sweepbench Pro 拿最高分。它強在兩件事：一次就做對，不用來回修；還能自己連續做好幾天、處理幾百萬 token（AI 計算文字的單位），並把工作分給 subagent（小幫手 agent）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=855s\" target=\"_blank\">14:15</a> 新的防護機制：如果請求涉及資安、生物或化學，Fable 會改交給 Opus 4.8 處理，回應會清楚標示，並按 Opus 價格計費<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果問題碰到資安、生物、化學這些可能被拿去做壞事的領域，Fable 會自動轉給另一個模型 Opus 4.8 回答。畫面上會標明是誰回的，費用也照 Opus 的價格算。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=948s\" target=\"_blank\">15:48</a> Mythos 5 和 Fable 5 是同一個底層模型，只是拿掉了資安與生物方面的防護；目前開放給 Project Glasswing 的合作夥伴使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mythos 5 和 Fable 5 其實是同一個模型，差別是 Mythos 拿掉了資安和生物方面的限制。目前只開放給 Project Glasswing 這個計畫的合作夥伴，一般人還用不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=1071s\" target=\"_blank\">17:51</a> 給開發者的建議：架構要為下一版 Claude 設計；設計更難的 eval；讓模型升級變容易，例如建立自動化 eval 和測試流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做產品時要替下一版 Claude 留空間。eval 就是檢查 AI 做得好不好的考題，要出得夠難，才看得出新舊模型的差別。eval 和測試也要自動化，換新模型時跑一次就知道能不能換。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=1295s\" target=\"_blank\">21:35</a> 要成為 AI native 公司需要三個要素：harness、context、infrastructure。Managed Agents 提供 outcomes、1M context、memory、skills 與 dreaming<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司要以 AI 為核心，需要三樣：讓 AI 動手的框架、對的資料、穩定的底層系統。Managed Agents 三樣都有，還能先定好合格標準讓 agent 改到達標、一次讀百萬 token，並用 dreaming 回顧過去的工作來進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=2183s\" target=\"_blank\">36:23</a> Claude Code 推出 dynamic workflows，可以讓數十到數百個 agent 平行執行；示範中用一個 prompt 同時把網站翻成 12 種語言<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是在電腦上幫你寫程式的 Claude 工具。新功能 dynamic workflows 能同時派出幾十到幾百個 agent 分工。示範中只下一句指令，網站就同時翻成 12 種語言。</span>\n\n📘 術語<br><b>Claude Managed Agents</b>（Claude 託管代理）：整合 agentic harness、context 管理工具和正式環境等級基礎設施的產品，專為 Claude 打造<br><b>outcomes</b>（成果目標）：用 rubric 定義什麼算是好的結果，agent 會一直反覆修改，直到達成為止<br><b>dreaming</b>（做夢）：agent 回頭檢視自己過去所有的 session，更新 memory 和 skills，讓下次做得更好<br><b>dynamic workflows</b>（動態工作流程）：讓 Claude Code 以固定的結構，同時在數十到數百個 agent 上平行執行大型任務<br><b>time horizon</b>（時間跨度）：模型在失去方向、不知道下一步要做什麼之前，能自主工作多久\n\n📺 <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=0s\" target=\"_blank\">Code with Claude Tokyo 2026: Opening Keynote</a>（2026/06/12 · 42 分鐘）",
        "tip": "💡 你可以怎麼用：學第 6 點替自己準備一份「固定考題」：挑 3～5 件你常叫 AI 做的事，像摘要同一份報告、改同一封信，把結果存起來。之後每次有新模型，就丟同樣的題目比一比，確定真的比較好再換。",
        "quiz": {
          "q": "根據演講內容，當 Fable 5 收到涉及資安、生物或化學的請求時會怎麼處理？",
          "options": [
            "直接拒絕回應，並要求使用者提出申請",
            "暫停請求，等人工審核通過後才回應",
            "改交給 Opus 4.8 處理，回應會標示出來，並按 Opus 價格計費",
            "自動改交給 Mythos 5 處理"
          ],
          "correct": 2,
          "why": "[14:15] 講者說請求涉及 cyber security、biology 或 chemistry 時，Fable 會改交給 Opus 4.8 處理，回應會清楚標示，並按 Opus 價格計費"
        },
        "status": "long",
        "parts": 4
      },
      {
        "id": "yt_6amLO7I9xdg",
        "title": "🎬 Code with Claude London 2026：開幕主題演講",
        "category": "其他",
        "text": "<b>從模型、Claude 平台到 Claude Code，三層介紹 Anthropic 最新進展與新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Anthropic 在 2026 年倫敦開發者大會的開場演講。內容分三層：Claude 模型本身、給開發者串接用的 Claude 平台，以及 Claude Code（讓 Claude 直接在電腦上讀寫、執行程式的工具）。想知道 AI 寫程式現在做到哪一步、企業實際怎麼用，看這支就能掌握全貌。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=249s\" target=\"_blank\">04:09</a> Boris 認為，從「有想法」到「程式跑起來」的距離正在縮短：描述問題，程式就出現，像當年寫計算機程式的感覺<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前寫程式要先學語法，再一行一行寫。Boris 說現在把問題講清楚，程式就出來了。那種「想到就做得出來」的直接感，很像早年在計算機上寫小程式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=532s\" target=\"_blank\">08:52</a> 模型能力呈指數成長，多數組織卻是線性採用，兩者差距越來越大；平台 API 用量成長近 17 倍，Claude Code 開發者平均每週跑超過 20 小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 能力像滾雪球一樣變強，公司導入卻是一步一步來，差距越拉越大。API（讓程式直接呼叫 Claude 的接口）用量成長近 17 倍，開發者平均每週讓 Claude Code 跑超過 20 小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1134s\" target=\"_blank\">18:54</a> Lisa 建議要替下一版 Claude 設計架構；模型變聰明後，舊的 scaffolding 反而可能拖累 Claude，要持續做更難的 evals，並自動化評估流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ scaffolding 指包在模型外的流程、指令和工具，原本用來補模型的不足，模型變聰明後反而會礙手礙腳。所以設計要替下一版 Claude 著想，並持續出更難的 evals（測 AI 表現的考題），讓評估自動跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1349s\" target=\"_blank\">22:29</a> Advisor strategy：小模型負責執行，需要幫忙時向大模型請教；Eve Legal 表示用這方法以低五倍的成本拿到 frontier 模型品質<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 就像新人自己做事，卡關才去問資深前輩：便宜的小模型負責大部分工作，遇到難題才請教貴的大模型。Eve Legal 說，這樣花五分之一的成本，就拿到頂尖（frontier）模型的品質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1475s\" target=\"_blank\">24:35</a> Claude Managed Agents 新增 self-hosted sandboxes（首波支援 Daytona、Cloudflare、Vercel、Modal）和 MCP tunnels，可以安全存取防火牆後的內部 MCP server<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Managed Agents 是 Anthropic 代跑 agent 的服務。agent 工作的隔離空間（sandbox）現在可以放在自己選的平台上。MCP tunnels 讓它不經過公開網路，也能連到公司內部的 MCP 工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=2219s\" target=\"_blank\">36:59</a> Claude Code 新功能：code review、remote control 與 iOS／Android、autofix、routines（排程、webhook 或 API 觸發），還有 Claude Security 夜間掃描漏洞<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code review 會自動檢查程式碼，autofix 會自動修正問題。有了 remote control 和手機 App，人在外面也能遙控 Claude Code。routines 可以排時間自動跑。Claude Security 每晚掃一次安全漏洞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=2670s\" target=\"_blank\">44:30</a> Routines 是「higher order prompt」；預設模式從「我去 prompt Claude Code」變成「讓 Claude 去 prompt Claude Code」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 就是你下給 AI 的指令，routines 則是「指令的指令」。你事先把規則設好，之後由 Claude 在該動的時候自己去指揮 Claude Code，不必每次都由你坐在電腦前下令。</span>\n\n📘 術語<br><b>scaffolding</b>（鷹架）：agent 裡不是 Claude 的部分，例如迴圈、指令、工具；模型變聰明後可能反而拖累 Claude<br><b>task horizon</b>（任務時長）：模型能工作多久才會失去主線；去年是幾分鐘，現在多數是好幾小時<br><b>advisor strategy</b>（顧問策略）：把執行和提供建議分開：小模型執行，需要時向大模型請教，降低成本<br><b>MCP tunnels</b>（MCP 通道）：讓 MCP server 留在私有網路，Claude Managed Agents 不必經過公開網際網路也能存取<br><b>routines</b>（例行任務）：設定一次，Claude Code 就能依排程或 webhook、API 請求自動執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=0s\" target=\"_blank\">Code with Claude London 2026: Opening Keynote</a>（2026/05/19 · 46 分鐘）",
        "tip": "💡 你可以怎麼用：如果你常請 AI 重複做同一件事，例如每週整理資料，可以把指令寫成固定模板，再看你用的工具能不能排程自動跑。平常先用便宜、快的模型打草稿，卡住了再換大模型，也能省下不少費用。",
        "quiz": {
          "q": "影片中介紹的 advisor strategy 是怎麼運作的？",
          "options": [
            "大模型負責執行，小模型負責審查結果",
            "把任務拆給多個 subagent 平行執行再合併",
            "多個同等級模型各自作答後投票",
            "小模型負責執行，需要幫忙時向大模型請教"
          ],
          "correct": 3,
          "why": "[22:29] 字幕說 execution 可以用較小的模型，小模型需要幫忙時會向較大的模型尋求建議，例如 Sonnet 執行、Opus 當 advisor"
        },
        "status": "long",
        "parts": 4
      },
      {
        "id": "yt_7xco5Qd2Oo8",
        "title": "🎬 與 Dario Amodei 和 Daniela Amodei 的對談",
        "category": "其他",
        "text": "<b>兩位創辦人談成長、開發者生態、未來趨勢、公司使命與產品思維</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 兩位創辦人 Dario 和 Daniela Amodei 的對談。他們講到公司成長快到算力不夠用、為什麼特別重視開發者，也講到未來 AI 會怎麼改變工作。想知道 Claude 背後的公司怎麼判斷趨勢、怎麼決定做什麼產品，這支值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=209s\" target=\"_blank\">03:29</a> Dario 表示，他和其他共同創辦人在 10 多年前就用 scaling laws 預測了指數成長，而且預測都成真了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ scaling laws（規模定律）是一種規律：投入的算力和資料越多，模型能力就會穩定變強。創辦人十多年前就照這個規律畫出成長曲線，後來的發展真的一路照著走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=340s\" target=\"_blank\">05:40</a> 原本規劃每年成長 10x，但今年第一季的營收和用量若換算成年增率是 80x，所以算力吃緊；他們提到 SpaceX 算力合作，會盡快把更多算力提供給使用者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本預估每年成長 10 倍，結果今年第一季換算成一年是 80 倍，遠超預期，所以算力（跑 AI 需要的電腦運算資源）不夠用。他們提到和 SpaceX 的算力合作，會盡快補給使用者。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=466s\" target=\"_blank\">07:46</a> Daniela 認為開發者在許多方面是 Claude 最重要的使用者：Anthropic 內部多數人本身就是開發者，而開發者社群會給誠實的回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開發者就是寫程式的人。Anthropic 多數員工本身就是開發者，最懂這群人要什麼；而且開發者覺得不好用會直接講，這種誠實回饋最能幫產品變好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=655s\" target=\"_blank\">10:55</a> 大約一年前，Mike Krieger 問第一家一人十億美元公司何時出現，Dario 回答 2026，並認為目前進度符合預期<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「一人十億美元公司」是指只靠一個人加上 AI，就做出價值十億美元的公司。大約一年前 Mike Krieger 問這何時會出現，Dario 答 2026 年，他覺得目前進度符合預期。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=780s\" target=\"_blank\">13:00</a> 趨勢一：從單一 agent 走向多個 agent，就像管理一個由 Claude 組成的團隊，形成階層式分工<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent（代理）是能自己拆步驟、動手把任務做完的 AI。未來不會只用一個，而是像主管帶一整個 Claude 團隊，有的負責分派工作，有的負責執行，一層一層分工。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=874s\" target=\"_blank\">14:34</a> 趨勢二：從提升個人生產力，進一步提升整個團隊和組織的生產力；同時要用 Amdahl&#x27;s Law 找出沒被加速的環節，例如安全性與驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 先讓個人變快，下一步是讓整個團隊變快。Amdahl&#x27;s Law 提醒：只加速其中一段，最慢的環節還是會卡住整體。程式可以跑測試自動驗證，安全性、正確性就難驗證，容易變瓶頸。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=1088s\" target=\"_blank\">18:08</a> 公司使命的兩大支柱：開發對所有人都有益的技術，同時負責任地處理風險；內部文化價值是 hold light and shade，Mythos 和 Glasswing 就是謹慎發布的例子<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 使命是讓 AI 對所有人都有益，同時認真處理風險。hold light and shade 是內部文化，意思是機會和風險要一起看、一樣重視。Mythos 和 Glasswing 就是他們刻意謹慎發布的例子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=1461s\" target=\"_blank\">24:21</a> 很多產品要等模型能力夠了才做得出來，所以要一再重新嘗試。2022 年模型還不夠強，類似 Claude Code 的東西做不起來；另外 API 這個市場永遠不會消失<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多產品要等模型夠強才做得出來，所以要反覆重試。像 Claude Code（讓 Claude 幫你寫程式的工具），在 2022 年就做不起來。API 是讓別的程式直接串接 Claude 的管道，他們認為這個市場不會消失。</span>\n\n📘 術語<br><b>scaling laws</b>（規模定律）：創辦人 10 多年前用它在圖表上畫出預測：投入的花費和模型能力會隨時間成長<br><b>Amdahl&#x27;s Law</b>（Amdahl 定律）：當你加速了一件事，要去想還有哪些事沒被加速，而那些就會拖慢整體或出問題<br><b>hold light and shade</b>（兼顧光明與陰影）：Anthropic 的內部文化價值：同時看待技術的巨大機會與風險，兩者並重<br><b>verifiability</b>（可驗證性）：寫程式能靠跑單元測試來驗證，所以訓練進展快；但安全性、正確性這類比較難驗證\n\n📺 <a href=\"https://www.youtube.com/watch?v=7xco5Qd2Oo8&t=0s\" target=\"_blank\">A conversation with Dario Amodei &amp; Daniela Amodei</a>（2026/05/06 · 33 分鐘）",
        "tip": "💡 你可以怎麼用：以前試過、AI 做不好的事，換了新模型之後再試一次，結果可能完全不同。要把一件大工作拆給好幾個 Claude 對話分工時，先想清楚哪一步還是得靠你親自檢查，那一步最可能拖慢整件事。",
        "quiz": {
          "q": "Dario 說今年第一季的營收和用量，若換算成年增率是每年幾倍？",
          "options": [
            "10x",
            "80x",
            "100x",
            "2x"
          ],
          "correct": 1,
          "why": "[05:40] 字幕說第一季換算成年增率是每年 80x；10x 是他們原本規劃的成長幅度（[05:05]）"
        },
        "status": "long",
        "parts": 3
      }
    ]
  },
  codex_master: {
    id: "codex_master",
    name: "🚀 Codex 架構・團隊工程級體系",
    badge: "大師・OpenAI 工程實踐",
    lessons: [      {
        id: "o_astra",
        title: "🎬 官方最新旗艦：GPT-6 Astra 世代級躍升與全自主工作流",
        category: "OpenAI 官方旗艦",
        text: "OpenAI 官方最新發布世代級旗艦模型：《GPT-6 Astra for developers》：\n\n**三大跨時代核心突破**：\n• **滿分級推理（Saturating Benchmarks）**：在極限數學（FrontierMath Tier 4）與抽象推理（ARC-AGI-3）基準上全面打滿，具備極強的長鏈條邏輯推理。\n• **全自主電腦操作（Computer Use）**：不僅能在終端跑指令，還能直接操控瀏覽器、跨應用程式完成複雜多日工作流。\n• **首個「Critical 關鍵級」資安評估**：被 OpenAI 列為最高安全能力級別，具備自主發現並修補未知零日漏洞（0-day）的實戰能力！\n\n**開發者調用架構**：API 模型標記為 `gpt-6-astra`，支援 Zero Data Retention（零資料留存），保障企業級資料絕對隱私。",
        tip: "⚡ 官方定位：GPT-6 Astra 從「代碼助手」進化為「具備頂級推論與資安審計能力的數位員工」！",
        quiz: {
          q: "根據 OpenAI 官方發布，GPT-6 Astra 在架構能力上最重要的質變是什麼？",
          options: [
            "只是把輸出的字體改為粗體",
            "在極限推理（FrontierMath/ARC-AGI）飽和突破，具備 Critical 級自主資安防護與跨天自主多步驟工作流執行力",
            "強制取消所有終端機命令權限",
            "每週日自動斷線維護"
          ],
          correct: 1,
          why: "官方實測指出，GPT-6 Astra 突破了過往模型無法處理長鏈條模糊任務的瓶頸，具備自主發現漏洞與跨日多步驟閉環能力！"
        }
      },
      {
        id: "o_jump",
        title: "🎬 頂級量化 Jump Trading 實戰：用 Astra 征服最模糊的 Alpha Research",
        category: "量化金融實戰",
        text: "華爾街頂尖高頻量化巨頭 Jump Trading 親自展示如何將 GPT-6 Astra 深度融入量化研發體系：\n\n**告別死板代碼補全，進軍 Alpha Research**：\n• **處理極度模糊的任務（Ambiguous Tasks）**：過去傳統腳本只能執行確定性指令；Jump Trading 讓 Astra 處理「未定義明確邊界的跨日研究與跨異質數據流對比」。\n• **自主建立量化微服務**：Agent 自動從粗略的交易假說出發，自主抓取市場歷史數據、構建回測微服務、評估因子顯著性。\n• **人機協同新範式**：量化研究員不再是自己一行行手寫底層 C++/Python 數據管道，而是充當主審，由 Astra 在背景持續運算與探勘潛在 Alpha 信號！",
        tip: "📈 量化心法：不要用 AI 當打字機，用它來處理「模糊探索與跨數據流的因子探勘」！",
        quiz: {
          q: "華爾街量化巨頭 Jump Trading 在應用 GPT-6 Astra 時，最核心的範式轉移是什麼？",
          options: [
            "只讓 AI 幫忙檢查程式碼的縮排與空格",
            "將 Agent 指向邊界模糊、跨多日的複雜 Alpha Research 與因子微服務建置，由 AI 承擔繁重的跨數據流探勘",
            "把所有伺服器都換成筆記型電腦",
            "完全禁止 AI 讀取任何歷史市場數據"
          ],
          correct: 1,
          why: "Jump Trading 指出，現代頂級量化的關鍵在於利用高推理 Agent 承接傳統腳本無法處理的「高度模糊與跨多數據源的深度研究探索」！"
        }
      },
      {
        id: "o_agents_api",
        title: "🎬 官方架構換代：Responses API ＆ Agents SDK 三大支柱",
        category: "OpenAI 官方架構",
        text: "OpenAI 官方正式宣告：舊版 Assistants API 即將退役（2026/8/26 關閉），全面由 **Responses API ＋ Agents SDK** 接棒！\n\n**三大全新架構支柱**：\n1. **Responses API（輕量核心）**：結合 Chat 的極速與原生的內建工具（Web Search、File Search、Computer Use、Remote MCP），淘汰複雜的 Thread/Run 迴圈，改用統一的 Item 設計！\n2. **Multi-Agent Handoffs（多代理交接）**：Agents SDK 原生支援代理之間的智慧交接（Handoff），例如：客服 Agent 判定需要退費，平滑將上下文交接給財務 Agent。\n3. **Guardrails ＆ Tracing（安全與可觀測性）**：內建輸入輸出安全檢查（Guardrails）與完整的可觀測性鏈條（Tracing），每一步除錯都有跡可循！",
        tip: "🏛️ 架構標準：放棄過時的 Thread/Run 模式，全面遷移至 Responses API ＋ Agents SDK 的 Handoff 體系！",
        quiz: {
          q: "OpenAI 全新推出的 Agents SDK 中，用來解決「不同專長 AI 夥伴之間無縫移交控制權」的核心機制是什麼？",
          options: [
            "Multi-Agent Handoffs（多代理智慧交接）",
            "手動複製文字到另一個視窗",
            "把電腦重新開機",
            "使用藍牙傳輸檔案"
          ],
          correct: 0,
          why: "Agents SDK 原生提供了 Handoffs 機制，能讓不同專業領域的 Agent 在保持上下文完整的前提下，平滑轉移任務控制權！"
        }
      },
      {
        id: "o_ramp",
        title: "🎬 Ramp 獨角獸實戰：One Prompt 建置全棧功能與測試閉環",
        category: "工程自動化",
        text: "Fintech 獨角獸 Ramp 工程團隊在《One Prompt. A Feature Built and Tested》中展示了令人震撼的交付速度：\n\n**從一個 Prompt 到完整功能上線**：\n• **全棧聯動（Full-Stack Orchestration）**：給予一條業務需求描述，Agent 自主修改前端 React 元件、後端 API 路由與資料庫 Migration。\n• **自主測試閉環（Automated Test Suite）**：Agent 改完代碼後，主動撰寫對應的單元測試與端到端（E2E）測試，並在本機 Docker 沙盒中跑通全部測試。\n• **工程師的角色**：工程師不再當搬磚工，而是站在 Code Review 的高位，檢查 Diff、確認資安規範、一鍵 Merge，開發週期從數天壓縮至數十分鐘！",
        tip: "⚡ 交付奇蹟：真正的 AI 工程不是寫幾行代碼，而是「代碼 ＋ 測試 ＋ 遷移腳本」一次全套驗收！",
        quiz: {
          q: "Ramp 工程團隊展示的「One Prompt 全棧閉環」模式中，工程師最核心的工作轉變為？",
          options: [
            "自己重新手寫全部的單元測試",
            "站在架構審核（Code Review）的高位，把關 Agent 自動產出的代碼、測試與資料庫遷移，進行最終驗收決策",
            "每天盯著螢幕不說話",
            "禁止 Agent 跑任何自動化測試"
          ],
          correct: 1,
          why: "Ramp 示範了現代 AI-native 團隊的典範：Agent 閉環完成代碼實作與測試撰寫，人類工程師專注於架構把關與驗收審核！"
        }
      },
      {
        id: "o_data_agent",
        title: "🎬 ChatGPT Work 資料代理：語意層直連資料庫的自動決策",
        category: "企業級資料架構",
        text: "OpenAI 官方專題《Meet the Data Agent in ChatGPT Work》揭開了企業級資料分析的終極形態：\n\n**擺脫傳統手動撈 SQL 與匯出 Excel 的痛苦**：\n• **語意層直連（Semantic Layer Grounding）**：Data Agent 深度掛載企業的 Semantic Layer（語意層），徹底理解公司各項財務與業務指標的真實公式定義，不再瞎猜 SQL 欄位！\n• **業務問題秒變動態儀表板**：主管只需打字問「上季各板塊留存率如何？」，Agent 自動跑查詢、交叉驗證、產出互動式圖表。\n• **從數據直達行動計畫（Action Plan）**：不僅給出圖表，還主動分析異常波動作因，並為團隊自動草擬出具備優先級的待辦行動計畫！",
        tip: "📊 數據革命：掛載語意層防止算錯公式；從提問到圖表、到下一步行動計畫，全自動閉環！",
        quiz: {
          q: "在 ChatGPT Work Data Agent 架構中，為什麼「掛載 Semantic Layer（語意層）」是確保數據分析正確性的關鍵？",
          options: [
            "因為語意層能確保圖表的背景顏色是藍色的",
            "語意層明確定義了企業指標的真實計算公式與欄位關係，防止大模型自行臆測 SQL 邏輯而產出錯誤分析",
            "為了讓資料庫查詢速度變慢",
            "防止任何人查看財務報表"
          ],
          correct: 1,
          why: "Semantic Layer 是企業指標的唯一權威標準，掛載語意層能徹底消除模型猜測欄位名稱所引發的計算錯誤！"
        }
      },
{
        id: "o1",
        title: "OpenAI Codex 本機架構：Workspace Awareness 與沙盒運作",
        category: "底層架構",
        text: "在 OpenAI 官方發布的 Codex 深度技術分享中，Codex 之所以強大，在於它的 **Workspace Awareness（工作區感知架構）**。\n\n一般聊天 AI 只能看見你貼在對話框的文字，而 Codex 則深度綁定你的本機環境：\n• **本機環境掛載**：即時解析 Git 狀態、分支差異、套件相依性（package.json / pyproject.toml）。\n• **增量補丁（Chunk-based Patching）**：它不會動不動就整檔輸出，而是生成標準 Unified Diff，精確替換 5～10 行程式碼，執行速度快十倍且極少衝突。\n• **沙盒執行安全**：指令在本地或容器沙盒中受控執行，即時攔截異常。",
        tip: "⚡ 真正的代碼 Agent 不是代碼打字機，而是精確掌控檔案狀態與 Diff 的外科手術刀。",
        quiz: {
          q: "Codex 修改大型現有專案程式碼時，為什麼採用「增量補丁（Diff/Chunk Patch）」遠勝於「整檔重寫」？",
          options: [
            "因為增量修改能精確鎖定變更點、大幅節省 Token、保留原有架構與註解，且執行極速",
            "因為整檔重寫耗費的時間太少",
            "因為 Diff 補丁會把所有變數名稱隨機替換",
            "因為編輯器不支援超過 100 行的檔案"
          ],
          correct: 0,
          why: "增量補丁（Chunk-based Patching）是工業級代碼代理的基石，能最大程度降低 Token 消耗並避免整檔覆寫造成的邏輯丟失！"
        }
      },
      {
        id: "o2",
        title: "團隊 AI 憲法：AGENTS.md 官方規範與實戰撰寫",
        category: "團隊協同",
        text: "OpenAI 官方推動的專案級規範標準中，`AGENTS.md` 被譽為 **「AI 憲法」**。\n\n在多人協同或多 Agent 進駐的專案中，新模型進來就像新入職的工程師：如果不給手冊，每個人寫出來的代碼風格、套件安裝方式都五花八門！\n\n**AGENTS.md 必須包含的四大核心要素**：\n1. **專案唯一權威文件指針**（例如 CLAUDE.md）。\n2. **動手前鐵律**（哪些目錄嚴禁全域掃描、哪些操作必須問主人）。\n3. **標準測試與驗證指令**（例如統一跑 pytest 而不是自己瞎寫測試腳本）。\n4. **Commit 格式與身分標記**（誰做的、消耗什麼額度，條理清晰）。",
        tip: "📜 好憲章省大錢：寫好一份 AGENTS.md，所有進駐的 AI 都會自動遵守規矩，零磨合成本！",
        quiz: {
          q: "在專案中建立 AGENTS.md 的最關鍵戰略價值是什麼？",
          options: [
            "給不同來源的 AI 夥伴提供統一的工程紀律、權威指針與安全禁區，避免各自為政搞亂專案",
            "用來增加 GitHub 的 repository 體積",
            "防止專案被其他人下載",
            "替代 Python 解譯器"
          ],
          correct: 0,
          why: "AGENTS.md 是 AI Agent 的團隊憲章，能確保不管是 Codex、Claude 還是其他模型進場，都有一致的行為準則與工程紀律！"
        }
      },
      {
        id: "o3",
        title: "非同步任務與後台守護（Background Tasks & Reactive Wakeup）",
        category: "並行調度",
        text: "傳統的笨 Agent 遇到耗時任務（例如抓取 50 頁網頁、執行 15 分鐘的全套單元測試、編譯大型 C++ 專案），會在終端機原地「死等（Blocking）」或者每秒瘋狂輪詢。\n\n**現代 Codex 採用「Reactive Wakeup（響應式喚醒）」機制**：\n• 任務啟動後，立即送入**背景任務（Background Task）**。\n• 主線程立刻釋放，你跟 Agent 可以繼續討論下一個議題或進行其他工作。\n• 背景任務完成或出現異常時，系統自動發送事件喚醒 Agent（Reactive Wakeup），無縫切回處理！",
        tip: "⏰ 告別傻等：耗時任務丟背景，主線繼續前進，任務結束自動喚醒處理。",
        quiz: {
          q: "當你需要讓 Agent 執行一次需要耗時 10 分鐘的完整資料庫備份與重構驗證時，最佳調度方式是？",
          options: [
            "讓 Agent 在終端每秒鐘打字問一次「好了沒」，卡住所有對話",
            "將任務送入背景非同步執行，主線繼續進行其他工作，完成時透過事件自動喚醒",
            "直接強制拔掉電源插頭",
            "將電腦休眠"
          ],
          correct: 1,
          why: "採用背景非同步執行（Background Task）搭配響應式喚醒（Reactive Wakeup），既不阻塞交互流程，又不需要無效輪詢浪費資源！"
        }
      },
      {
        id: "o4",
        title: "Cloud Delegation 雲端代理與自動化 PR 工廠",
        category: "雲端自動化",
        text: "在 OpenAI 官方展示的「Building faster with Codex」實踐中，展示了革命性的 **Cloud Delegation（雲端指派）** 模式。\n\n你不再需要讓自己的本機電腦 24 小時高負載運轉：\n• **雲端派工**：把規格書直接指派給雲端環境中的 Codex 實例。\n• **自主開 Branch 與測試**：雲端 Codex 在隔離的 Docker 容器中自動拉取分支、建立代碼、跑過 CI 驗證。\n• **自動草擬 PR（Pull Request）**：做完後自動在 GitHub 提出 PR，附上改動詳情、測試日誌與驗收標準。\n工程師只要在手機或網頁上點開 PR、檢查 Review，一鍵 Merge，開發效率成倍飆升！",
        tip: "🚀 雲端工廠：人類專注於驗收決策（Review & Merge），繁瑣的搬磚與測試全部外包給雲端 Agent。",
        quiz: {
          q: "利用雲端 Codex 自動草擬 PR（Pull Request）的模式，對現代軟體團隊最大的價值是什麼？",
          options: [
            "讓工程師可以完全不用看程式碼就直接部署",
            "將撰寫代碼、分支管理與跑測試的繁重苦工自動化，讓工程師聚焦於高層次架構決策與代碼審查",
            "讓電腦自動發送垃圾郵件給主管",
            "保證程式碼完全不需要寫測試"
          ],
          correct: 1,
          why: "雲端 PR 自動化將體力活交給 Agent 閉環跑完，讓人類開發者專注於架構把關與 Code Review，大幅提升團隊產能！"
        }
      },
      {
        id: "o5",
        title: "多模型混合編隊（Multi-Model Swarm 協同實戰）",
        category: "終極戰略",
        text: "沒有任何單一模型是萬能的！真正的頂尖指揮官，懂得組建 **「Multi-Model Swarm（多模型兵團）」**：\n\n• **Claude（Opus / Sonnet）**：高推理、深思熟慮。適合擔任**「總架構師」**，負責需求拆解、系統 Blueprint 設計、複雜邏輯安全把關。\n• **Codex（GPT-5-Codex / 專精模型）**：執行力強、CLI 速度飛快。適合擔任**「工程特工」**，負責快速實作代碼、增量補丁、終端指令狂暴輸出。\n• **Gemini（1.5 / 2.0 / 3.8 Flash）**：吞吐巨量百萬 Context。適合擔任**「知識圖書官」**，負責翻找歷史巨型交接文檔、跨年份日誌分析與多模態截圖比對。\n三軍聯合作戰，才是 AI 時代的終極霸主！",
        tip: "👑 指揮官心法：知人善任、各取所長。把對的任務交給對的模型，威力放大十倍！",
        quiz: {
          q: "專案面臨「需要在 200 萬字歷史交接日誌中定位某條特殊規章，並在當前專案中以最快速度實作出一組乾淨的 CLI 工具代碼」，最佳的多模型搭配是？",
          options: [
            "用記憶最小的小模型去硬讀 200 萬字日誌",
            "由百萬長上下文的 Gemini 負責海量歷史檢索定位 ➡️ 由專精工程實作的 Codex/Claude 負責 CLI 代碼產出",
            "完全不使用任何 AI 工具，全部人工肉眼手翻",
            "只用小算盤"
          ],
          correct: 1,
          why: "善用 Gemini 的超長 Context 視窗進行海量檢索，搭配 Codex/Claude 的強大工程代碼能力，正是多模型協同（Multi-Model Swarm）的完美範例！"
        }
      }
    ]
  }
,
  gemini_pro: {
    id: "gemini_pro",
    name: "💎 Gemini・Google 官方架構",
    badge: "旗艦・Google DeepMind 實戰",
    lessons: [
      {
        id: "g_long_context",
        title: "🎬 百萬長上下文實戰：Needle-in-a-Haystack 大海撈針極限",
        category: "Google 官方架構",
        text: "Google DeepMind 官方研究中最震撼世界的殺手級能力，正是 Gemini 的 **百萬至千萬級超長 Context 視窗**！\n\n**官方大海撈針（Needle-in-a-Haystack）極限實測**：\n• 在 100 萬至 200 萬 Token（相當於 70 萬行代碼或整部百科全書）的龐大記憶中，隨機埋入一句毫無關聯的秘密，Gemini 的檢索召回率仍高達 **99.7%**！\n\n**官方結構化提示詞黃金排版**：\n1. **Context First（海量資料放最前）**：把 50 萬字歷史交接單、專案代碼、長篇日誌全部傾倒在最前面。\n2. **Task Last（具體指令放最後）**：把關鍵提問與產出格式約束放在最後一段，模型會藉由注意力錨定，精準穿透海量上下文直達核心！",
        tip: "🌊 官方口訣：巨量資料在前當背景，精確任務在後當錨點（Context First, Task Last），百萬文本輕鬆穿透！",
        quiz: {
          q: "當你需要讓 Gemini 對包含數百份歷史交接單（約 60 萬字）的專案進行跨年度關鍵決策檢索時，官方最推薦的提示詞排版順序是？",
          options: [
            "把任務問題放在最前面，隨便把資料切成碎片分批發送",
            "採用 Context First, Task Last：海量背景文檔置於最前，具體查詢問題與輸出格式嚴格放在最末尾進行注意力錨定",
            "把所有文字全部刪除只留標題",
            "故意在文字中間插入大量亂碼"
          ],
          correct: 1,
          why: "Google 官方工程實踐證明：長上下文處理時，將海量參考數據置頂、任務指令置底（Context First, Task Last），能顯著強化模型的末端注意力，避免關鍵需求被浩瀚數據淹沒！"
        }
      },
      {
        id: "g_caching",
        title: "🎬 Context Caching 快取：巨量資料重複查詢砍價 85%",
        category: "成本與效能",
        text: "如果你建立了一個內部代碼助手，需要團隊每天對 50 萬字的專案代碼反覆提問，每次都把 50 萬字重新發送計費，荷包會瞬間被吃空！\n\n**Google 官方原生解決方案：Context Caching（上下文快取）**：\n• **快取一次，終身受用**：將龐大的專案代碼庫或歷史財務數據庫寫入 Gemini 雲端快取槽。\n• **成本狂降 75%～85%**：後續所有提問直接調用快取記憶，輸入 Token 費用直接降至原價的 15%，大幅減輕財務負擔！\n• **延遲縮短 80%**：無需每次重新解析百萬 Token，首字回覆時間從數十秒縮短至毫秒級，體驗極度絲滑！",
        tip: "💰 官方算盤：靜態大型知識庫一定要掛 Context Caching；一次載入，反覆查詢省下 85% 預算！",
        quiz: {
          q: "在架構長期運行的專案代碼問答系統時，面對龐大且相對固定的專案代碼庫，降低 API 帳單的最核心 Google 官方手段是？",
          options: [
            "每天叫工程師手動把代碼背起來",
            "利用 Gemini 原生 Context Caching（上下文快取），將固定的龐大上下文快取在雲端，後續查詢省下高達 85% 的輸入成本",
            "把電腦螢幕關掉",
            "只允許工程師在凌晨提問"
          ],
          correct: 1,
          why: "Context Caching 是 Google 針對長上下文專案設計的成本神器，透過快取固定上下文，大幅削減重複傳輸的費用與延遲！"
        }
      },
      {
        id: "g_grounding",
        title: "🎬 原生 Google Search 接地：即時搜尋與零幻覺的事實防線",
        category: "真實性與防幻覺",
        text: "傳統大模型最怕遇到「今天剛發生的新聞、即時股價、突發法規變更」，往往只能憑記憶瞎猜（幻覺）。\n\n**Gemini 獨步全球的原生利器：Grounding with Google Search**：\n• **背靠全球最大搜尋引擎**：無需自行撰寫繁瑣的爬蟲或對接第三方 API，在呼叫 Gemini 時開啟 `google_search` 工具即可！\n• **自動事實交叉核驗**：模型生成每一句話時，由後台即時比對 Google 最新網頁索引進行驗證。\n• **附帶可點擊來源（Citations）**：回答中自動標註引用來源連結，點擊即可直達官方原始新聞，實現商業級「零幻覺、百分之百可追溯」！",
        tip: "🔍 官方殺手鐧：需要即時行情與突發資訊時，啟動 Google Search 接地，事實精確度直達 100%！",
        quiz: {
          q: "當專案需要精準判讀「美股今晚剛公布的非農就業數據與突發市場反應」時，防止大模型產生時間落差幻覺的最佳手段是？",
          options: [
            "啟用 Gemini 原生 Grounding with Google Search，由模型即時檢索最新網頁索引並附帶驗證來源",
            "叫模型自行猜測最可能的數字",
            "把電腦系統時間改到明年",
            "不給任何輸入讓模型自由發揮"
          ],
          correct: 0,
          why: "Gemini 深度整合了 Google 搜尋索引，開啟 Search Grounding 能即時同步現實世界最新數據，並提供完整的溯源引用！"
        }
      },
      {
        id: "g_multimodal",
        title: "🎬 原生多模態：影格直讀與 Agentic 影片時間軸導航",
        category: "多模態感知",
        text: "很多外掛型 AI 在看影片或聽錄音時，需要先經過外部 STT（語音轉文字）或逐影格 OCR，資訊在轉換過程中遺失大半。\n\n**Gemini 的本質：Native Multimodal（原生多模態）**：\n• **直接理解波形與影格**：Gemini 大腦天生就能直接吃入音訊語氣、音調起伏、影片畫面細節，無需中途轉譯！\n• **Agentic 影片時間軸導航**：在面對長達 1 小時的教學錄影時，Gemini 具備主動導航能力，能自主定位出「第 34 分 12 秒處，講師切換了伺服器配置畫面」，精確抓取畫面中的微小報錯文字！",
        tip: "🎥 官方黑科技：音訊、畫面、代碼三位一體；長影片不需人工快轉，交給 Gemini 秒級定位！",
        quiz: {
          q: "在分析一段長達 45 分鐘的軟體崩潰螢幕錄影時，Gemini 原生多模態能力相比傳統工具的最大優勢是？",
          options: [
            "能將影片檔案直接壓縮成 MP3 音樂",
            "原生直讀連續影格畫面與音訊細節，具備時間軸自主導航能力，精確定位問題發生的關鍵秒數與畫面報錯",
            "把影片色彩強制轉為黑白",
            "只能讀取影片的檔名"
          ],
          correct: 1,
          why: "Gemini 是原生多模態模型，無需中途降低精度的文字轉譯，能直接跨時間軸理解畫面動態與音訊脈絡！"
        }
      },
      {
        id: "g_code_exec",
        title: "🎬 沙盒 Code Execution：把數學與資料運算交給 Python",
        category: "精準運算閉環",
        text: "大語言模型的本質是機率文本預測，讓它在腦袋裡做「七位數複雜乘除法或蒙地卡羅模擬」，非常容易翻車出現微小偏差。\n\n**Google 官方鐵律：不靠大腦硬算，靠 Code Execution！**\n• **雲端安全沙盒**：Gemini 原生內建 Python 執行環境。\n• **自主撰寫與執行代碼**：當遇到數據分析、複雜財務折現率、統計回測時，Gemini 自動在沙盒中寫好 Python 腳本並立即執行。\n• **回傳確定性結果**：將代碼真實運算出的數值回填到答案中，保證數學與統計數據 **100% 絕對精確**，徹底消滅計算誤差！",
        tip: "🧮 官方準則：文字推理靠大腦，數值計算交給沙盒 Python；雙劍合璧，數據零誤差！",
        quiz: {
          q: "在處理涉及高精確度財務模型試算或大數據矩陣統計時，如何確保 Gemini 回覆的數值具備 100% 數學精準度？",
          options: [
            "在 Prompt 裡多加三個驚嘆號",
            "啟用 Gemini 原生 Code Execution（代碼執行），讓模型自主撰寫 Python 代碼在安全沙盒中執行並回填運算結果",
            "人工拿計算機自己算一遍再餵給它",
            "故意輸入錯誤的公式"
          ],
          correct: 1,
          why: "啟用 Code Execution 能讓模型在背後直接調用 Python 直譯器計算確定性結果，從根源杜絕大模型機率生成帶來的數值偏差！"
        }
      },
      {
        id: "g_interactions",
        title: "🎬 官方換代：Interactions API ＆ 嚴格接地 System Instructions",
        category: "Google 官方標準",
        text: "Google 2026 全面推動新一代標準：**Interactions API**（正式取代過時的 generateContent）！\n\n**專為 Agentic 狀態流打造的全新體驗**：\n• **統一對話狀態管理**：原生整合 Messages、Tool Outputs 與結構化 Schema，呼叫流程極度精簡。\n• **嚴格接地指令（Strict Grounding Instructions）**：\n  在 System Instructions 中明確設定：「*You are a strictly grounded assistant. Rely ONLY on the provided User Context.*」\n  這會給予模型強烈的約束力，徹底禁止它引用未經證實的外部猜測，將它約束為專案最忠誠、最守紀律的執行兵！",
        tip: "🏛️ 架構升級：告別舊版 generateContent，全面採用 Interactions API ＋ 嚴格接地指令塑造專業 Agent！",
        quiz: {
          q: "在建構嚴謹的專案內部文檔檢索 Agent 時，如何透過 Google 官方推薦的 System Instructions 徹底杜絕模型隨意腦補？",
          options: [
            "加入明確的嚴格接地約束（Strict Grounding Constraint），命令模型僅能依據給定上下文事實回答，嚴禁調用外部常識臆測",
            "完全不寫任何 System Instructions",
            "叫模型盡量發揮豐富的想像力",
            "每天更換一次模型名稱"
          ],
          correct: 0,
          why: "Google 官方指出，在 System Instructions 中植入嚴格接地約束（Strict Grounding），能有效壓制模型的自由臆測傾向，確保答案 100% 根植於提供的事實！"
        }
      }
    ]
  }
,
  grok_yt: {
    "id": "grok_yt",
    "name": "🤖 Grok・官方影片字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt__Prvw5G-gEc",
        "title": "🎬 Grok Bot Galaxy 第三天",
        "category": "其他",
        "text": "<b>72 小時用 Grokbot 打造遊戲工作室，第三天正式上線第一款遊戲</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Grokbot Galaxy 活動的第三天，也是最後一天：團隊要在 72 小時內靠 Grokbot 從零做出一間遊戲公司，今天正式推出第一款遊戲。影片裡示範了怎麼讓一群 AI 自己分工、寫程式、測試，也有行銷人分享怎麼用它做內部工具。就算你不寫程式，也能看到 AI 從陪你聊天的助手，變成真的能分工做事的團隊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=374s\" target=\"_blank\">06:14</a> 第三天是上線日：團隊在舊金山 Grokbot Galaxy 活動現場，要在 72 小時內打造一間公司。主持人是 Matt、Lauren（potato）和 Roshan<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 三天挑戰今天收尾。團隊在舊金山的活動現場，要在 72 小時內做出一間公司，今天要把成品拿出來給大家看。主持人是 Matt、Lauren（綽號 potato）和 Roshan。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=621s\" target=\"_blank\">10:21</a> Lauren 用她自己的 p-stack plugin 裡的 potato mode skill。下 /potato mode 搭配 full autopilot，就會把計畫拆成小階段，由 agents 實作 PR、驗證並 fuzz，最後自動 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 是教 AI 做某件事的說明書，plugin 是把一包 skill 裝進工具的外掛。開了這個模式，AI 會自己把計畫切成小步，派 agent（自動執行的 AI 助手）寫程式、測試、故意亂操作找 bug，全部過關就自動併進正式版本。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=686s\" target=\"_blank\">11:26</a> 一個晚上就合併了超過一百個 PR（提到 145、170）。另外有一個名叫 play 的 QA bot，只要 PR 通過 CI，就會實際把整個遊戲玩一遍並回饋意見<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是「我改了這些程式碼」的修改申請，merge 就是核准併入。一晚上併了一百多份，人根本看不完。所以有個 QA（品質檢查）bot，修改只要通過自動測試，它就真的把遊戲玩一輪，再回報問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=1941s\" target=\"_blank\">32:21</a> MarOps 講者說，有了 Grokbot 就能「打造工具，而不只是訂規則」：直接做出內部 app，讓團隊照著規則做事，不必只靠發 checklist 要大家遵守<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MarOps 是行銷營運，負責讓行銷團隊的流程跑得順。以前訂了規則只能發檢查表，拜託大家照做。現在可以直接做一個小工具，把規則寫進去，大家用這個工具就自然照規則走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=2139s\" target=\"_blank\">35:39</a> 「自動完成的待辦清單」：Fisher 監看所有收件匣，把新訊息交給 chief of staff bot OP1 拆成任務，再轉給專門的 bot（例如 territory planning bot）先產出初稿<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ bot 叫 Fisher 盯著所有收件匣，新訊息交給像幕僚長一樣負責分派工作的 OP1，拆成一件件待辦，再轉給專門的 bot 先寫初稿。等你打開電腦，很多事已經做好一半。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=2855s\" target=\"_blank\">47:35</a> 講者用 Grokbot 做了一個「leads 的交友 app」，左滑就結束 lead，右滑就排進後續 sequence。從點子到上線兩週，實際開發只花 10 小時，上線後 leads 審閱率明顯提升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ leads 是可能成交的潛在客戶，sequence 是事先排好的一連串追蹤信。審客戶名單很無聊，改成像滑交友軟體一樣左右滑，大家就真的會去看。開發只花 10 小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=6305s\" target=\"_blank\">105:05</a> 遊戲正式上線：ThursdayArena.com 和 X 帳號 @ThursdayArena 是唯一官方來源。這是一款卡牌自動對戰遊戲，卡牌都來自 Grokbot marketplace 的 bot<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 遊戲叫 Thursday Arena，只有這個網站和這個 X 帳號是官方的，其他管道都不算。玩法是卡牌自動對戰：你出牌組，雙方自己打。每張卡都是 Grokbot 市集（大家分享 bot 的地方）上真的 bot。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=6681s\" target=\"_blank\">111:21</a> 技術架構：後端用 Go 寫，跑在 Vercel Functions 上（serverless），資料庫用 PlanetScale，登入驗證用 Clerk。前端用 Zod 解析後端回應，確保型別安全<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 伺服器程式用 Go 語言寫，放在 Vercel 的 serverless 服務上（有人用才啟動，不用自己顧主機）。PlanetScale 存資料，Clerk 管登入。畫面那端用 Zod 檢查收到的資料格式，免得欄位一改畫面就讀不到。</span>\n\n📘 術語<br><b>potato mode</b>（potato 模式）：p-stack 裡的一個 skill，教 bot 做事更嚴謹，也更擅長協調其他 bots 和 agents<br><b>p-stack</b>（p-stack 技能包）：Lauren 個人整理的一組 skills，有 cursor plugin 和 Grokbot plugin 兩種版本<br><b>fuzzing</b>（模糊測試）：像重度使用者一樣實際操作 app，點遍每個按鈕、試各種邊界情況，想辦法把它弄壞<br><b>type safety</b>（型別安全）：確保前後端各自修改欄位時不會互相衝突，避免 UI 讀不到資料<br><b>PLG (product led growth)</b>（產品導向成長）：使用者自己註冊使用的商業模式，重點是吸引使用者、了解他們在產品裡怎麼用\n\n📺 <a href=\"https://www.youtube.com/watch?v=_Prvw5G-gEc&t=0s\" target=\"_blank\">Grok Bot Galaxy Day 3</a>（2026/09/18 · 474 分鐘）",
        "tip": "💡 你可以怎麼用：挑一件你每週都在重複做的事，請 AI 直接做成小工具或自動流程，別只寫一份 SOP 叫大家照做。交代 AI 做大事時，也學 potato mode：叫它先拆成小步驟，每一步做完先自己檢查，再往下做。",
        "quiz": {
          "q": "講者提到那個「leads 交友 app」，實際開發（live build）花了多少時間？",
          "options": [
            "10 小時",
            "2 小時",
            "72 小時",
            "24 小時"
          ],
          "correct": 0,
          "why": "[47:35] 講者說從點子到上線花了兩週，但 live build time 實際上只有 10 小時"
        },
        "status": "long",
        "parts": 40
      },
      {
        "id": "yt_OvBayqdwUag",
        "title": "🎬 Odyssey 試播片段，由 Genre AI 與 Grok Imagine 製作",
        "category": "其他",
        "text": "<b>改編奧德賽海妖段落的短劇：Odysseus 被綁在桅杆上抵抗 sirens 的歌聲</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是一支用 AI 做的短劇，標題寫了用上 Grok Imagine（Grok 是 xAI 的 AI 助理，Grok Imagine 是它生成圖片和影片的功能）。內容改編希臘史詩《奧德賽》最有名的海妖橋段。值得看有兩個原因：可以看到 AI 影片把經典故事演到什麼程度，故事本身也在講「明知道會被誘惑時該怎麼辦」。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OvBayqdwUag&t=8s\" target=\"_blank\">00:08</a> Odysseus 說要帶部下回家，並警告大家提防 sirens 和她們的歌聲，說她們的島上滿是腐爛的屍體。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Odysseus（奧德修斯）是《奧德賽》的主角，打完仗要帶船員回家。他一開場就警告大家要小心 sirens（海妖，用歌聲引誘水手的怪物）。她們島上堆滿屍體，就是被歌聲引過去的人的下場。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OvBayqdwUag&t=8s\" target=\"_blank\">00:08</a> Odysseus 要部下用蠟塞住耳朵，把他綁在桅杆上；就算他哀求放開，也要把他綁到皮膚流血。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他的做法是：船員耳朵塞蠟，根本聽不到；他自己留著耳朵，但先叫人把他綁死在桅杆上。關鍵是先講好「等一下我怎麼求都別放」，因為他知道到時候的自己靠不住。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OvBayqdwUag&t=77s\" target=\"_blank\">01:17</a> sirens 說想和他分享能救他部下的祕密知識。Odysseus 說她們低估了他的力量，sirens 回答她們不在乎他有多強。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 海妖不硬來，而是開條件：說有祕密能救他的部下，剛好打中他最在乎的事。他覺得自己夠強撐得住，海妖卻說強不強無所謂，意思是這種誘惑不是靠意志力硬撐就能贏的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OvBayqdwUag&t=139s\" target=\"_blank\">02:19</a> 結尾台詞：被慾望支配的人活不過 sirens，接著反問「你呢？」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最後一句把問題丟給觀眾：被慾望牽著走的人，都逃不過海妖。「你呢？」就是在問你：有沒有什麼東西一出現，你就會把原本的決定丟到腦後。</span>\n\n📘 術語<br><b>sirens</b>（海妖（賽蓮））：字幕裡說她們用歌聲引誘人，島上滿是腐爛的屍體；被慾望支配的人活不過她們。\n\n📺 <a href=\"https://www.youtube.com/watch?v=OvBayqdwUag&t=0s\" target=\"_blank\">Odyssey Pilot Scene featuring Genre AI and Grok Imagine</a>（2026/09/18 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：想用 AI 做影片時，可以學它挑一段大家都熟的經典故事，只拍一個關鍵場景，觀眾不用前情提要就看得懂。故事的道理也能直接拿來用：先幫自己「綁桅杆」，例如睡前把手機放在客廳，不要跟當下的意志力硬拚。",
        "quiz": {
          "q": "Odysseus 要部下怎麼應付 sirens 的歌聲？",
          "options": [
            "靠 Odysseus 的力量和 sirens 正面對決",
            "跟 sirens 交換祕密知識",
            "連夜划船繞過 sirens 的島",
            "用蠟塞住耳朵，並把他綁在桅杆上"
          ],
          "correct": 3,
          "why": "[00:08] Odysseus 說「Fill your ears with wax and bind me to the mast.」"
        },
        "status": "full"
      },
      {
        "id": "yt_bRt1b4SHJ1g",
        "title": "🎬 Grok Bot Galaxy 第二天：實際上發生了什麼",
        "category": "其他",
        "text": "<b>整理 GrokBot Galaxy 第二天：團隊轉向做出 Cupcake 遊戲，以及業務、客服的 agent 工作流</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 xAI 活動 GrokBot Galaxy 第二天的紀錄：一個小團隊用一群 AI 從零做一款遊戲，也示範業務和客服怎麼交給 AI 處理。值得看是因為它把好的和翻車的地方都攤開了。它也讓人看到，用 AI 把 build test learn loop（做出來、測試、學到教訓再改的循環）加快，實際上會卡在哪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=31s\" target=\"_blank\">00:31</a> GrokBot Galaxy 是 xAI 為期 3 天的活動，Matt Palmer、Lauren Tan、Roshan Sadhnani 用 GrokBot 從零打造產品；第二天主題是業務、sales engineering、sales development 和客服<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是 xAI 辦的三天活動，三個人用 GrokBot（xAI 的 AI 機器人）從零做產品。第二天談業務：sales engineering 是幫客戶解決技術問題的業務，sales development 是開發新客戶，外加客服。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=61s\" target=\"_blank\">01:01</a> 原本的概念太大，時間不夠，團隊決定簡化，改做 Cupcake：把可分享的 GrokBot 範本變成遊戲角色（有 charisma、dexterity、intelligence 屬性），玩家組 3 人隊伍、選隊長、打 3 回合自動對戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的點子太大，時間內做不完，團隊就 pivot（中途轉向，把目標縮小），改做 Cupcake。大家分享的 bot 範本會變成有魅力、敏捷、智力數值的角色，玩家組三人隊、選隊長，自動打三回合。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=121s\" target=\"_blank\">02:01</a> 第二天結束時，已有 X 登入、後端、隊長選擇、拖放排陣容、配對、3 回合對戰和賽後評分變化；不過用連結匯入 bot 在直播中失敗、排行榜沒正確顯示、廣告功能還沒測完<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一天下來主體已經能跑：X 帳號登入、後端（在背後存資料、跑規則的伺服器）、排陣、配對、對戰、賽後分數變化都有了。不過貼連結匯入 bot 在直播時失敗，排行榜和廣告也還沒好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=183s\" target=\"_blank\">03:03</a> 團隊沒用一個大 bot 包辦全部，而是分成工程、設計、生圖、營運、廣告、測試等專職 agent；play tester bot Crumb 負責找 bug，Dr. Eggbot 負責審查其他 agent 的成果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己接任務、動手做事的 AI。團隊不靠一個萬能 bot，而是像公司分部門：工程、設計、生圖、營運、廣告、測試各一個。play tester Crumb 到處點找 bug，Dr. Eggbot 負責驗收。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=213s\" target=\"_blank\">03:33</a> Dr. Eggbot 發現瓶頸之一就是人類團隊：太多變更在等人 merge 或核准。agent 加得再多，也不會自動帶來更多產出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ bottleneck 是整條流程裡最卡的那一段。Dr. Eggbot 發現卡的是人：AI 改好的東西都在等人 merge（把修改併進正式版本）或核准。AI 加再多，人審不完，產出也不會變多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=244s\" target=\"_blank\">04:04</a> Sales development 示範處理 25 筆潛在客戶名單，系統只準備草稿，要不要寄出還是由人決定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 業務示範：AI 一次整理 25 個潛在客戶，把聯絡信草稿寫好，但要不要寄出還是人決定。信寄出去就收不回來，對方看到的是公司，所以最後一關留給人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=277s\" target=\"_blank\">04:37</a> 客服用 build、reply、alert、tune 四個 bot，串接 Plane 處理退款申請；bot 可以調查、擬稿，最後決定由人負責<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 客服拆成四個 bot，分別負責建置、回覆、警示、調校，接上 Plane（團隊追蹤工作項目的工具）來處理退款申請。bot 負責調查、寫回覆草稿，退不退錢由人拍板，因為這牽涉到真的錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=338s\" target=\"_blank\">05:38</a> 給一般上班族的建議：從一個可重複的工作流開始、每個 bot 給明確角色、定義交接；寄送、退款、購買、發布、上線要經過核准；先用實際案例測試；衡量流程，不只看結果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先挑一件常重複做的事交給 AI，每個 bot 只管一件事，講清楚誰做完交給誰。寄信、退款、付款、發布、上線這種收不回來的動作要人核准。先拿真實案例試，也要看流程卡在哪，不能只看成果。</span>\n\n📘 術語<br><b>pivot</b>（轉向）：原本概念對剩下的時間來說太大，團隊於是簡化點子，改做 Cupcake<br><b>play tester bot</b>（試玩測試 bot）：名叫 Crumb 的 bot，會在產品裡到處點、找 bug<br><b>bottleneck</b>（瓶頸）：Dr. Eggbot 找出的卡點，其中之一是太多變更在等人 merge 或核准<br><b>build test learn loop</b>（建置-測試-學習循環）：這個小團隊用 agent 把這個循環壓縮變快\n\n📺 <a href=\"https://www.youtube.com/watch?v=bRt1b4SHJ1g&t=0s\" target=\"_blank\">Grok Bot Galaxy Day 2: What Actually Happened</a>（2026/09/17 · 6 分鐘）",
        "tip": "💡 你可以怎麼用：挑一件你每週都在做的事，例如回覆某類客戶來信，讓 AI 先整理資料、寫好草稿，最後由你確認再寄出。跑幾輪以後，看時間是卡在 AI 還是卡在你自己審稿，再決定下一步要調整哪裡。",
        "quiz": {
          "q": "影片裡，審查其他 agent 成果的 Dr. Eggbot 找出的瓶頸之一是什麼？",
          "options": [
            "人類團隊本身：太多變更在等人 merge 或核准",
            "缺少負責生圖的 agent",
            "後端資料庫容量不夠",
            "模型回應速度太慢"
          ],
          "correct": 0,
          "why": "[03:33] 字幕說 Dr. Eggbot 找出瓶頸，其中之一是人類團隊本身，太多變更在等人 merge 或核准"
        },
        "status": "old"
      },
      {
        "id": "yt_PMTsvd5Jld4",
        "title": "🎬 Grok Bot Galaxy 直播：第 1 天",
        "category": "其他",
        "text": "<b>三人用 Grockbot 72 小時從零打造公司，中間穿插 Grockbot 101 教學示範</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Grok 官方直播的第一天：三位主持人要在 72 小時內，主要靠 Grockbot 這類 AI 工具從零做出一間公司，中間穿插 Grockbot 入門教學。如果你想知道 AI 能不能真的幫你把事情做完，而不只是回答問題，這支很適合看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=0s\" target=\"_blank\">00:00</a> Lauren、Roshan、Matt Palmer 預計在 3 天（72 小時）內，從零開始用 Grockbot 等 AI 工具打造一間公司。開播時連要做什麼點子都還沒決定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Lauren、Roshan 和 Matt Palmer 要在三天內從零開一間公司，開播時連點子都還沒有。看點不在成品多厲害，而是看 AI 從想點子到實際執行，能幫上哪些步驟。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=153s\" target=\"_blank\">02:33</a> Grockbot Galaxy 直播挑戰：分享你怎麼把 Grockbot 用在工作上。首獎是到 Starbase 看 Starship 發射，第二名以下可以參觀 Hawthorne 的 SpaceX 火箭工廠<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 官方同時辦比賽，請大家分享怎麼用 Grockbot 工作。首獎是去 SpaceX 在德州的發射基地 Starbase 看 Starship 火箭發射，其他得獎者可以參觀 SpaceX 在洛杉磯地區 Hawthorne 的火箭工廠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=214s\" target=\"_blank\">03:34</a> 參加方式：追蹤 Grok 和 bot 帳號，在 X 上引用官方貼文，附上 bot 的說明和 share template 連結，截止日為 9 月 29 日<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 參加方式：追蹤 Grok 和 bot 帳號，在 X 上引用官方貼文，附上你的 bot 用途說明和 share template 連結（把 bot 做成範本，別人能直接拿去改）。9 月 29 日截止。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=1978s\" target=\"_blank\">32:58</a> Grockbot 的設計概念是把 AI 當隊友：每個 bot 負責一類工作，會記住你的偏好；它有自己的電腦，全部在雲端執行，筆電闔上也會繼續做<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Grockbot 不只是一問一答的聊天工具，更像分工的同事：每個 bot 專管一類事，而且會記住你的習慣。它在雲端（遠端伺服器）有自己的電腦，所以你闔上筆電，它還是會繼續做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=2660s\" target=\"_blank\">44:20</a> 用「teach a task」親自操作 bot 的電腦示範一次（例如加投影片動畫），bot 看完會把錄製內容轉成 skill，以後可以重複使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ teach a task 就是「做一次給它看」：你直接操作 bot 的電腦，例如幫投影片加動畫。它看完會整理成 skill，也就是可以重複使用的做法。下次同樣的事交給它就好，不用再教。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=2842s\" target=\"_blank\">47:22</a> 可以在設定裡寫規則，指定哪些事要先問你（例如回 email）。底層還有一個 autoreview classifier，會判斷每個動作的風險高低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你可以在設定裡寫規則，例如「回 email 前先問我」。系統底層還有 autoreview：用 classifier（自動判斷類別的模型）評估每個動作的風險高低，決定要不要先請你批准。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=3245s\" target=\"_blank\">54:05</a> bot 之間可以互傳訊息、分工合作，也可以開 group chat 看它們怎麼溝通；還能建立 manager 或 chief of staff bot 定期收集進度和卡關的狀況<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ bot 之間能互傳訊息、分工合作，你也能開 group chat（群組聊天）看它們怎麼溝通。還可以設一個 manager 或 chief of staff（幕僚長）bot，定期收集大家的進度和卡關的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=6932s\" target=\"_blank\">115:32</a> 團隊最後決定做 pop-up 平台（Pop-up OS），同時 dog food 自己的產品，在舊金山實際辦一場美食 pop-up<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們最後決定做 Pop-up OS，一個幫人辦 pop-up（快閃活動、期間限定小店）的平台。他們也要 dog food，就是自己先當用戶，實際在舊金山辦一場美食快閃來測試產品。</span>\n\n📘 術語<br><b>Pstack</b>（Pstack 外掛）：Lauren 開源的外掛，收錄她做嚴謹工程工作用的 skills 和 workflows，可以在 Grockbot marketplace 搜尋安裝<br><b>teach a task</b>（教學任務）：你親自操作 bot 的電腦示範一次，bot 看完後把錄製內容轉成 skill<br><b>autoreview</b>（自動審查）：底層用 classifier 判斷動作的風險，決定要不要請你批准<br><b>routine</b>（例行任務）：讓 bot 定時執行工作，例如每天早上 9 點整理投影片的變更<br><b>share as template</b>（分享為範本）：把 bot 分享成範本給團隊或 marketplace，別人拿去可以再依自己需求調整\n\n📺 <a href=\"https://www.youtube.com/watch?v=PMTsvd5Jld4&t=0s\" target=\"_blank\">Grok Bot Galaxy Livestream  - day 1</a>（2026/09/16 · 525 分鐘）",
        "tip": "💡 你可以怎麼用：先挑一件你每週都要重複做的電腦工作，例如整理投影片。用 teach a task 示範一次存成 skill，再用 routine（讓 bot 定時自動執行）排在每天早上跑。想參加比賽的話，記得 9 月 29 日前把你的用法分享到 X。",
        "quiz": {
          "q": "根據講者說明，在 Grockbot 裡 duplicate（複製）一個 bot 之後，新的 bot 會是什麼狀態？",
          "options": [
            "只複製 memory，不複製 description",
            "Grockbot 不支援複製 bot",
            "完整複製原本 bot 的所有 memory",
            "保留相同 persona，但 context 和 memory 從零開始"
          ],
          "correct": 3,
          "why": "[85:55] 講者說複製 bot 時，新 bot 會以全新的 context 和 memory 開始，persona 維持一樣，但原本的記憶都不會帶過去"
        },
        "status": "long",
        "parts": 44
      }
    ]
  },
  blender_yt: {
    "id": "blender_yt",
    "name": "🧊 Claude+Blender・熱門教學字幕版",
    "badge": "字幕實證",
    "lessons": [
      {
        "id": "yt_2M1TEH6JPKc",
        "title": "🎬 Claude Opus 5.5 成為 3D 設計與 Blender 的新王者",
        "category": "其他",
        "text": "<b>作者用多項 Blender／3D 測試，比較 Opus 5.5 與 GPT-6 Astra 的表現、花費時間和成本</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片把 Anthropic 新出的 Claude Opus 5.5 和 OpenAI 的 GPT-6 Astra 放在一起，做了十題 3D 設計測試，從場景、建築、車子、特效、動畫一路考到網頁遊戲。每題都比了成品好壞、花多久時間、花多少錢。如果你想讓 AI 幫你做 3D 或視覺類的東西，這支片能讓你知道兩個模型各自擅長和不擅長什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=0s\" target=\"_blank\">00:00</a> 作者認為 Opus 5.5 雖然不是像 GPT-6 那樣的大版本，但很強，尤其是在 3D 方面<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者認為 Opus 5.5 只是小改版，不像 GPT-6 是換代的大升級，但實力很強，3D 尤其突出，所以這支片專門用 3D 題目來測它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=0s\" target=\"_blank\">00:00</a> 測試一：請 Claude 和 GPT 重現知名電影中 DeLorean 和鐘樓的場景，兩者都能使用 Blender 和所有 API<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Blender 是免費的 3D 建模軟體。第一題請兩個 AI 重現《回到未來》的時光車 DeLorean 和鐘樓場景。兩邊都能用 Blender，也能用所有 API（呼叫外部服務的接口，例如生圖工具）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=0s\" target=\"_blank\">00:00</a> Astra 沒有使用任何外部 API，所有東西都自己做，連一張圖都沒生成。建築和周邊環境還不錯，但 DeLorean 不太準確<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astra 是 GPT-6 最高階的版本。它完全沒叫外部工具，一張圖都沒生成，全部自己在 Blender 裡蓋。建築和周邊環境做得不錯，但主角那台車不太像。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=35s\" target=\"_blank\">00:35</a> Opus 5.5 大部分也用 procedural 方式製作，只用 Nano Banana Pro 生成了一些圖片。作者對結果和最後的火焰軌跡非常驚豔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ procedural 指用規則和程式一步步把模型建出來，不是拿圖片拼湊。Opus 大多這樣做，只用 Nano Banana Pro（AI 生圖模型）補了幾張圖，最後的火焰軌跡讓作者很驚豔。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=65s\" target=\"_blank\">01:05</a> 這個測試中兩者都做了約一個半小時，各花約 25 美元<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這題兩邊的投入差不多，都跑了約一個半小時，各花約 25 美元。可見讓 AI 從頭做完一整個場景，要跑很久，花費也不低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=65s\" target=\"_blank\">01:05</a> 作者指出 Opus 系列不是像 Fable 那樣的 Frontier 系列，Astra 則是 Frontier 系列；依官方公告，最新的 Opus 費用低很多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Frontier 系列可以理解成各家最頂級的旗艦線。作者說 Anthropic 的旗艦是 Fable，Opus 不算；Astra 則是 OpenAI 的旗艦。依官方公告，新版 Opus 便宜很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=65s\" target=\"_blank\">01:05</a> Anthropic 拿 Opus 和 GPT-6 Astra 比效能，很多數字比較高；但作者說兩者不算同一級<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 官方拿 Opus 和 Astra 比跑分，很多項目是 Opus 比較高。不過作者提醒，一個不是旗艦、一個是旗艦，本來就不算同一級，看對比數字時要記得這點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=100s\" target=\"_blank\">01:40</a> OpenAI 同一天也推出 GPT-6 的 Sol 和 Luna 版本（作者說是日常用的第二級模型），但 OpenAI 表示它們的效能低於 GPT-6 Astra<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ OpenAI 同一天也推出 GPT-6 的 Sol 和 Luna 兩個版本，作者形容是日常用的第二級模型。但 OpenAI 自己也說，它們的效能比 Astra 低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=100s\" target=\"_blank\">01:40</a> 因此本片只比較 Opus 5.5 和 GPT-6 Astra<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所以作者沒把 Sol 和 Luna 拿來比，整支片只比 Opus 5.5 和 GPT-6 Astra 這兩個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=135s\" target=\"_blank\">02:15</a> 測試二：用 procedural 方式建造 Notre Dame（參考自一部知名卡通）。兩個模型做法不同，有的從 primitive 開始，有的用 spline<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第二題用 procedural 方式蓋巴黎聖母院。primitive 是方塊、圓柱這類基本形狀，spline 是可以調整彎度的曲線。兩個 AI 一個像堆積木、一個像先畫線條，做法不一樣。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=135s\" target=\"_blank\">02:15</a> 所有測試都在作者自己分享過的 workspace 裡進行，裡面裝了很多 MCP，例如 Blender MCP。作者認為這比 computer use 更聰明<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所有測試都在作者分享過的 workspace（整理好的工作環境）裡跑。MCP 是讓 AI 直接呼叫軟體功能的接法，例如 Blender MCP；computer use 是讓 AI 看畫面、自己點滑鼠。作者覺得前者比較聰明。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=170s\" target=\"_blank\">02:50</a> 業配：作者最常用的外掛兼 MCP（字幕寫作 FixedField）免費，會提供 MCP 工具給 agent 使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這段是業配：作者推薦他最常用的一款外掛，免費，本身也是 MCP，能把工具交給 agent（會自己連續做事的 AI 助手）用。字幕寫 FixedField，從前後文看，可能就是後面說的 Higgsfield。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=170s\" target=\"_blank\">02:50</a> 連結 Higgsfield 帳號後，可以在 Blender 裡，或透過 Higgsfield CLI 讓 agent 使用 3D、2D、影片生成；另外 Higgsfield 也剛推出 Higgsfield API<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Higgsfield 是 AI 生成平台。連上帳號後，AI 在 Blender 裡就能直接生成 3D、圖片和影片。CLI 是打指令操作的方式，agent 也能透過它用這些功能。它另外也剛推出 API。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=237s\" target=\"_blank\">03:57</a> Notre Dame 結果難分高下：其中一個的光線比較自然（模擬陽光）、細節也比較多；但 GPT-6 只花 42 分鐘，對手花 96 分鐘<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 巴黎聖母院這題難分高下：其中一個的光線像真的陽光，細節也比較多。但速度差很多，GPT-6 只花 42 分鐘，Opus 花了 96 分鐘，是兩倍多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=267s\" target=\"_blank\">04:27</a> 作者的所有測試都用 max effort 執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ max effort 是把模型的思考力道開到最大，讓它想得更久、更仔細，通常也更花時間和錢。作者每一題都這樣設定，讓兩邊都拿出全力。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=267s\" target=\"_blank\">04:27</a> 測試三：以 Cadillac Eldorado 車子做 &quot;a right&quot;（字幕原文）。作者很喜歡 GPT-6 做的尾燈<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第三題以經典美國車 Cadillac Eldorado 為題，字幕原文寫 &quot;a right&quot;，確切的要求聽不清楚。作者特別喜歡 GPT-6 做的車尾燈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=297s\" target=\"_blank\">04:57</a> Opus 的結果俐落乾淨；作者覺得 Astra 加了比較多細節。兩者花費時間差不多，成本也相近，GPT 稍微貴一點<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩邊風格差很多：Opus 做得乾淨俐落，Astra 加了比較多細節。花的時間差不多，成本也相近，GPT 稍微貴一點，所以這題比較看你喜歡哪種風格。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=327s\" target=\"_blank\">05:27</a> 測試四：海盜 galleon，必須完全 procedural。Astra 的結果不錯，作者說船上有很多能用數學描述的對稱細節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第四題是海盜大帆船（galleon），規定只能用 procedural 方式做。Astra 做得不錯，作者提到船上有很多左右對稱、能用數學規則描述的細節。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=357s\" target=\"_blank\">05:57</a> 作者認為這題 GPT-6 比較出色；兩者都剛好做了一小時，但 GPT-6 的成本約只有一半<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這題作者判 GPT-6 勝。兩邊都剛好做了一小時，但 GPT-6 的成本只有約一半，等於做得比較好又比較便宜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=387s\" target=\"_blank\">06:27</a> 測試五：替作者正在做的遊戲製作 VFX，內容包括魔法陣、帶落葉的風、冰碎片攻擊和一些 shader<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VFX 就是視覺特效。第五題幫作者自己的遊戲做特效：魔法陣、捲著落葉的風、冰碎片攻擊，還有幾個 shader（決定物體表面顏色和光澤怎麼呈現的小程式）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=417s\" target=\"_blank\">06:57</a> Astra 做出一整段完整的 VFX 序列，火球的材質、分層和粒子都很搭，魔法陣也很好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astra 交出一整段連貫的特效演出。火球的質感、層次和粒子（火花、碎屑這類小點點）搭得很好，魔法陣也做得漂亮。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=447s\" target=\"_blank\">07:27</a> Opus 的運鏡和落葉動畫讓作者驚艷；這些效果能直接在瀏覽器網頁中即時渲染<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 讓作者驚豔的是鏡頭運動和落葉動畫。而且這些特效能直接在瀏覽器網頁裡即時跑，不用先花時間算成影片。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=447s\" target=\"_blank\">07:27</a> 作者認為藝術類工作 Opus 勝出；部分效果（例如球體）GPT-6 可能稍好，但開場的魔法陣 Opus 明顯較好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者的結論是：偏藝術感的工作 Opus 勝出。有些效果（例如那顆球體）GPT-6 可能稍好一點，但開場的魔法陣 Opus 明顯比較好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=477s\" target=\"_blank\">07:57</a> VFX 測試兩者都花約 30 分鐘，token 用量不多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是計算 AI 用量的單位，用得越多通常越貴。這題兩邊都只做了約 30 分鐘，token 也用得不多，算是划算的一題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=507s\" target=\"_blank\">08:27</a> 測試六：UV unwrap。作者說大家普遍認為 Claude 的視覺能力不如 GPT，而這題相當有挑戰性<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ UV unwrap 是把 3D 模型的表面攤平成平面，才能把貼圖貼上去，就像把紙盒拆開攤平。這要看得懂形狀，而大家普遍認為 Claude 看圖不如 GPT，所以這題很硬。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=507s\" target=\"_blank\">08:27</a> 測試用的 3D 模型都是在 Higgsfield 外掛裡做的：放入圖片、選模型就能生成並加進 Blender，也能透過外掛使用 GPT-6 等最新模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這題用的 3D 模型都是在 Higgsfield 外掛裡做的：丟一張圖進去、選一個模型，就能生出 3D 物件放進 Blender。外掛裡也能選 GPT-6 等最新的模型。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=537s\" target=\"_blank\">08:57</a> Astra 把原本已經分開的物件又拆得更細，UV 仍然一團亂，披風、靴子、包包都很糟，作者判定失敗<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astra 把原本已經分好的零件又切得更碎，攤平的結果還是一團亂，披風、靴子、包包都很糟，作者直接判它失敗。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=567s\" target=\"_blank\">09:27</a> Opus 5.5 沒有拆分物件，但仍有很多小 island，也沒有用滿 UV 空間；作者說它稍好一點，但仍是災難<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ island 是攤平後一塊一塊獨立的碎片。Opus 沒有亂切零件，但碎片還是太多太小，也沒把貼圖空間用滿。作者說它好一點，但一樣是災難。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=627s\" target=\"_blank\">10:27</a> UV 測試兩者各花約 20 分鐘、10 美元<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這題兩邊各花約 20 分鐘、10 美元，結果都不能用。可見這種需要精準判斷空間的細活，現在的 AI 還不太能幫上忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=627s\" target=\"_blank\">10:27</a> 測試七：生物的 rig 與動畫。作者之前用 Astra 試過，可行但需要反覆修正<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第七題是幫生物做 rig 和動畫。rig 就是幫模型裝上骨架和控制器，像操控木偶的線，裝好才能擺動作。作者之前用 Astra 試過，做得出來，但要一直修。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=657s\" target=\"_blank\">10:57</a> Astra 做的 rig 不錯，走路動畫還行；但跳躍和攻擊動畫失敗，作者說沒有參考資料時它只能用猜的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astra 的骨架做得不錯，走路動畫也還可以，但跳躍和攻擊都失敗。作者認為沒有參考資料時，它只能自己猜這些動作該長什麼樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=687s\" target=\"_blank\">11:27</a> Opus 5.5 的 rig 和 Astra 差不多。走路動畫是原地走，動作有點太生硬、太突然<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 的骨架跟 Astra 差不多。走路是在原地踏步，動作有點僵硬，轉換也太突然，不夠自然。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=717s\" target=\"_blank\">11:57</a> Opus 的跳躍動畫比 GPT-6 好很多，攻擊動畫也好很多；Opus 做了 63 分鐘<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 跳躍和攻擊這兩個 Astra 失敗的動作，Opus 做得好很多。代價是 Opus 花了 63 分鐘。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=747s\" target=\"_blank\">12:27</a> 測試八：用作者的 Lego 人偶 3D 模型做走路、蹲下、叫出 droid 的動畫。作者覺得 Opus 可能稍好，但兩者都不如預期有趣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第八題用作者自己的樂高人偶模型，做走路、蹲下、叫出機器人（droid）的動畫。作者覺得 Opus 可能稍好一點，但兩邊都不如預期生動有趣。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=777s\" target=\"_blank\">12:57</a> 測試九：用 procedural 方式做一座知名城堡並放上作者頻道名稱，要求渲染，並做出建造過程的 timelapse<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第九題用 procedural 方式蓋一座知名城堡、放上作者的頻道名稱，並算出成品畫面。還要 AI 自己做 timelapse，也就是把建造過程快轉成一段短片。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=807s\" target=\"_blank\">13:27</a> GPT-6 的 timelapse 很詳細，城堡細節可能也較多；Opus 的 timelapse 較簡略，但煙火和名字出現的動態效果更好看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ GPT-6 的縮時影片很完整，城堡細節可能也比較多；Opus 的縮時比較簡略，但煙火和名字出場的動態效果比較好看。兩邊各有強項。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=837s\" target=\"_blank\">13:57</a> 測試十：做成單一 three GS HTML 檔、可遊玩的遊戲。有人三個月前在 X 上做過，作者當時用 Fable 5 做不到那麼流暢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第十題是做一個可以玩的網頁遊戲，全部放在一個 HTML 檔裡。字幕寫 three GS，可能是指做網頁 3D 的 Three.js。三個月前有人在 X 上做過，作者當時用 Fable 5 做不到那麼順。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=867s\" target=\"_blank\">14:27</a> 兩者都只給一次 prompt。GPT-6 Astra 的遊戲很無聊，而且嚴重卡頓<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩個 AI 都只拿到一次指令，沒有機會來回修改。結果 GPT-6 Astra 做的遊戲很無聊，而且卡頓得很嚴重。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=927s\" target=\"_blank\">15:27</a> Opus 的遊戲有開場、沒有 play 按鈕直接開始、有音效，還有彈跳床，用 primitive 搭建，更有趣也更有動態感<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 的遊戲有開場，不用按 play 就直接開始，有音效也有彈跳床。整個是用基本形狀搭起來的，比較好玩，也比較有動感。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=957s\" target=\"_blank\">15:57</a> 這題 Opus 花的時間和成本都接近 GPT-6 的三倍；兩者都用 max effort 和同一個 prompt<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不過這題 Opus 花的時間和錢都接近 GPT-6 的三倍。兩邊用的是同一個指令，也都開到最大力道，所以差別來自模型本身。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=987s\" target=\"_blank\">16:27</a> 下一支影片預計在 Unity，可能也會在 Unreal Engine 裡測試<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 下一支影片作者打算改在 Unity 測試，可能也會試 Unreal Engine。這兩個都是常見的遊戲引擎，也就是開發遊戲用的主要軟體。</span>\n\n📘 術語<br><b>MCP</b>（MCP）：作者的 workspace 裝了很多 MCP，他認為這是比 computer use 更聰明的用法<br><b>Blender MCP</b>（Blender MCP）：作者 workspace 內含的 MCP 之一，測試時讓 AI 使用 Blender<br><b>computer use</b>（computer use）：字幕沒有解釋，只說作者認為用 MCP 比它聰明<br><b>procedural</b>（程序化建模）：字幕沒有定義；作者用來形容 AI 不靠生成圖片、自己把東西建出來<br><b>primitive / spline</b>（基本幾何體／曲線）：作者說模型建模方式不同，有的從 primitive 開始，有的用 spline<br><b>Frontier series</b>（Frontier 系列）：作者說 Fable 和 Astra 屬於 Frontier 系列，Opus 不是<br><b>max effort</b>（最高推理強度）：作者所有測試都用 max effort 執行<br><b>Higgsfield CLI</b>（Higgsfield CLI）：讓 agent 使用 Higgsfield 生成功能的方式之一<br><b>Nano Banana Pro</b>（Nano Banana Pro）：Opus 5.5 在 DeLorean 測試中用來生成少數圖片<br><b>VFX</b>（視覺特效）：作者的遊戲需要 VFX，例如魔法陣、風和落葉、冰碎片攻擊<br><b>shader</b>（著色器）：VFX 測試要求的其中一項，字幕沒有進一步解釋<br><b>UV unwrap</b>（UV 展開）：作者說這是相當有挑戰性的測試，跟 Claude 的視覺能力有關<br><b>island</b>（UV 島）：作者說太多小 island、沒用滿空間是不可接受的<br><b>rig</b>（骨架綁定）：生物動畫測試的一部分，字幕提到 rig 上有控制器<br><b>timelapse</b>（縮時過程）：記錄 AI 建構場景過程的影片，作者也要求 AI 自己做\n\n📺 <a href=\"https://www.youtube.com/watch?v=2M1TEH6JPKc&t=0s\" target=\"_blank\">Claude Opus 5.5 Is the New KING of 3D Design &amp; Blender</a>（2026/09/24 · 16 分鐘）",
        "tip": "💡 你可以怎麼用：如果你要讓 AI 做特效、動畫、小遊戲這類講究畫面感的東西，可以先試 Opus；如果是對稱、規則感強的物件，或是比較在意預算，可以試 GPT-6 Astra。UV 攤平這種細活目前兩個都做不好，還是要自己做，或另外找專門工具。",
        "quiz": {
          "q": "Notre Dame 測試中，GPT-6 花了多少時間完成？",
          "options": [
            "30 分鐘",
            "96 分鐘",
            "63 分鐘",
            "42 分鐘"
          ],
          "correct": 3,
          "why": "[04:27] 作者說 GPT-6 花的時間少一半：42 分鐘對 96 分鐘"
        },
        "status": "full"
      },
      {
        "id": "yt_QkckeI0tITg",
        "title": "🎬 Claude Fable 5 用 Godot MCP 和 Blender MCP 做出完整遊戲",
        "category": "其他",
        "text": "<b>零經驗作者用 Fable 5 花 12 小時，從 Blender 模型做到 Godot 龍族空戰遊戲</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片記錄一位完全沒碰過 3D 或遊戲開發的人，怎麼用 Claude 的 Fable 5 模型花 12 小時，從建模一路做出一款能玩的龍族空戰遊戲。它值得看的地方不在技術細節，而是整套做法：作者只負責描述需求、玩玩看、指出哪裡怪，AI 負責動手。另外，作者也示範了「先在 AI 最拿手的地方做好，再搬過去」這種繞路策略。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=0s\" target=\"_blank\">00:00</a> 作者用新的 Fable 5 模型，只花 12 小時就從 Blender 裡的一顆方塊做到 Godot 遊戲引擎裡的完整遊戲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 重點是速度。Blender 是免費的 3D 建模軟體，Godot 是免費的遊戲引擎，也就是做遊戲用的底層工具。作者從 Blender 裡一顆方塊開始，12 小時就做出一款能玩的遊戲。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=0s\" target=\"_blank\">00:00</a> 作者完全沒用過 Blender 或 Godot，也沒有遊戲工作室或 3D 美術背景，只靠白話英文和 AI 來回溝通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者不會建模，也不會寫遊戲，全程只用一般英文跟 AI 講需求、看結果、再說哪裡要改。所以真正派上用場的是把需求講清楚，而不是懂技術。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=0s\" target=\"_blank\">00:00</a> 第一步：請 Opus Fable 5 透過 Blender MCP，在 Blender 裡照一張龍的圖片做出 3D 龍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 是讓 AI 連上外部軟體、直接操作它的連接方式。接上 Blender MCP 後，Fable 5 不只是給建議，而是自己在 Blender 裡動手建模。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=33s\" target=\"_blank\">00:33</a> 作者說這次在這項任務上 Claude 表現得比 Quen 好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者拿另一個 AI 模型 Quen 做過同樣的事來比較，覺得這次 Claude 做得比較好。這是他在這項任務上的個人感受，不是正式評比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=33s\" target=\"_blank\">00:33</a> 給 Fable 5 龍的圖片，要它重現成 3D，並要求它盡量發揮、要有創意，作者本人只在旁邊看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者只給一張參考圖，還刻意叫它自由發揮。等於把 AI 當成有想法的設計師，而不是照指令描圖的工具，想看看它自己能做到什麼程度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=33s\" target=\"_blank\">00:33</a> Fable 5 從零做出身體、翅膀、角、發光的眼睛，全程由它直接操作 Blender，作者自己沒建任何模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 龍的身體、翅膀、角和會發光的眼睛，都是 AI 一步步在 Blender 裡操作出來的。作者一個模型都沒建，只在旁邊看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=64s\" target=\"_blank\">01:04</a> Fable 5 會自己算圖、像評審一樣批評自己的作品，並在給作者看之前先修正錯誤<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 算圖就是把 3D 場景輸出成一張圖片。AI 會自己出圖、自己挑毛病，改好才交給作者，省掉很多「你這裡錯了」的來回。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=64s\" target=\"_blank\">01:04</a> 成果太好，作者決定以這隻龍為主角做一款遊戲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本只是試試看建模，結果龍做得太好，作者才決定乾脆拿它做遊戲。整個專案是邊做邊長出來的，不是一開始就規劃好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=64s\" target=\"_blank\">01:04</a> 要求 Fable 5 把一邊翅膀壓平、把龍匯出成遊戲可用的角色，並做出在海面上空的龍族空戰（像戰鬥機纏鬥，但龍會丟火球）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ game-ready character 指可以直接放進遊戲、讓玩家操控的角色模型。作者請 AI 把龍的一邊翅膀壓平再匯出。玩法是海面上空纏鬥，像戰鬥機互追，只是改成丟火球。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=98s\" target=\"_blank\">01:38</a> 功能願望清單：真實的水、真實的火球、擊落時大爆炸、低飛時水面拖出尾浪、高速時的風效、極速時的音爆，最好支援 Xbox 手把<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是作者的理想效果清單。尾浪是龍低飛時水面拖出的痕跡，音爆是速度極快時出現的爆響。後面大部分修正都是在把這張清單做到位。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=98s\" target=\"_blank\">01:38</a> Noir Stage 是作者自己開發的工具，當初做它就是為了讓做 Godot 遊戲變簡單很多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Noir Stage 是作者自己寫的工具，不是 Claude 或 Godot 官方的東西。他做它的原因很單純：直接在 Godot 裡做遊戲太麻煩，想找一條簡單的路。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=98s\" target=\"_blank\">01:38</a> Noir Stage 能精準控制 3D 素材在 3D 畫布上的位置，還能在場景特定位置放附帶真實座標的筆記，讓作者在 3D 空間裡跟 AI 溝通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你可以在 3D 空間裡擺放模型，也能在某個位置貼「這裡怪怪的」便條。便條帶有座標，AI 就知道你指的是哪裡，不用靠文字猜位置。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=128s\" target=\"_blank\">02:08</a> 作者比喻 Noir Stage 是「3D 遊戲開發版的 Minecraft」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 意思是它像 Minecraft 一樣，可以直接在 3D 空間裡擺東西、拼場景，不會寫程式的人也能動手搭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=128s\" target=\"_blank\">02:08</a> 關鍵觀念：AI 很擅長用 3JS 做網頁遊戲，但直接在 Godot 裡做就很吃力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 3JS（Three.js）是在瀏覽器裡顯示 3D 畫面的 JavaScript 函式庫。作者的經驗是，AI 用它做網頁遊戲很順，直接在 Godot 做就常常卡住。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=128s\" target=\"_blank\">02:08</a> 作者的流程：先在 Noir Stage 布置好，讓遊戲在 3JS 完全跑通；等瀏覽器版穩了，再請 AI 移植到 Godot<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先在 AI 最拿手的網頁環境把玩法全部試通，再搬到 Godot。搬的時候有一個已經能玩的版本可以照著做，比從零開始穩很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=128s\" target=\"_blank\">02:08</a> Noir Stage 可在 NoirStage.com 免費下載，作者還在持續開發<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 工具可以免費下載，但作者說還在開發中。實際用的時候要有心理準備，可能會遇到小問題，功能也可能再變。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=162s\" target=\"_blank\">02:42</a> 修正 1：水面在看遠處時會閃爍、出狀況。這跟細節層級有關，Fable 5 查出真正原因是攝影機太早把海面切掉了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ level of detail（細節層級）是讓遠處物體用較簡化的版本顯示、節省效能的做法。問題表面上跟它有關，但真正原因是攝影機可見距離太短，遠處海面被提早切掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=162s\" target=\"_blank\">02:42</a> 修正 2：龍身後的尾浪不夠真實，改成會逐漸變寬、冒出泡沫的尾跡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的尾浪只有一條痕，看起來很假。改成像船開過那樣越往後越寬、還會冒白色泡沫，才像龍真的貼著水面飛過。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=193s\" target=\"_blank\">03:13</a> 修正 3：撞上敵人才發現爆炸太弱，於是加強成有衝擊波、火星和煙霧的爆炸<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者實際撞上敵人，才發現爆炸太弱。加上往外擴散的衝擊波、四散的火星和煙之後，打中才有份量。很多問題真的要玩過才看得出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=193s\" target=\"_blank\">03:13</a> 修正 4：飛行時上下操控完全相反，改正過來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本按上龍往下飛、按下往上飛。這種操作上的錯誤要有人實際玩才會發現，作者一講，AI 就改好了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=193s\" target=\"_blank\">03:13</a> 修正 5：音爆根本沒觸發，於是重做速度系統，按住油門會一路加速直到觸發音爆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 音爆一直沒觸發，所以 AI 重做了速度系統：按住油門速度會一直往上加，衝到極速就觸發音爆。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=193s\" target=\"_blank\">03:13</a> 修正 6：音爆觸發後發現龍周圍的風看起來很假，改成真正的條狀風效<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 音爆修好後，下一個問題才冒出來：龍周圍的風看起來很假。改成一條條從身邊掠過的風線，速度感才出來。修好一個問題，常常就會看到下一個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=224s\" target=\"_blank\">03:44</a> 每個問題作者都只是像跟朋友聊天一樣描述，Fable 5 就自己去研究可靠的套件來修<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者不用講技術名詞，只要說「這裡看起來怪」就好。AI 會自己去找現成、可靠的套件來解決，不是每樣都自己硬寫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=224s\" target=\"_blank\">03:44</a> 最考驗 AI 的是太陽眩光：朝太陽飛時整個畫面變全白，前幾次修正只有一點改善<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是整段最難修的問題：朝太陽飛時，整個畫面會變成一片白。前幾次修正都只改善一點點，代表 AI 一開始沒找到真正原因，只是在表面調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=224s\" target=\"_blank\">03:44</a> 作者要求它截圖、持續除錯直到真的修好；它執行遊戲、把鏡頭對準太陽重現問題，再逐一關掉東西來找出原因<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者要求它截圖、修到真的好為止。它就自己開遊戲、把鏡頭對準太陽重現問題，再把效果一樣一樣關掉，看關掉哪個之後畫面恢復正常，用刪去法找出原因。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=257s\" target=\"_blank\">04:17</a> 最後找到是天空本身太亮、把畫面洗白，Fable 5 從根源修好了這個問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 問題不在太陽本身，而是整片天空太亮。從這個根源修掉，一次就解決了，比在表面調亮度有效得多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=257s\" target=\"_blank\">04:17</a> 網頁版一直沒辦法支援 Xbox 手把，作者決定放棄，因為他知道到 Godot 就會正常，不值得再花時間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網頁版的 Xbox 手把一直弄不好。作者知道到了 Godot 就會正常，所以果斷停損，不再花時間在這裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=257s\" target=\"_blank\">04:17</a> 接著作者丟給 Fable 5 一份很詳細的大功能清單讓它自己做，作者則去處理 3D 素材<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者把一大串需求一次寫清楚交給 AI 自己做，他同時去處理 3D 素材。兩邊同時進行，就省下了時間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=291s\" target=\"_blank\">04:51</a> 新功能：海上的敵方船隻，裝有巨型弩箭發射器會朝玩家射擊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 敵人不只在空中。海上還有裝著巨型弩的船會朝玩家射箭，弩就是大型的十字弓。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=291s\" target=\"_blank\">04:51</a> 新功能：畫面閃紅光提示箭從哪個方向來，給玩家大約 2 秒反應閃躲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 箭射來時，畫面會閃紅光提示方向，玩家大約有 2 秒可以閃。這樣被射中時玩家會覺得是自己沒躲好，而不是被偷襲。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=291s\" target=\"_blank\">04:51</a> 新功能：躲過時進入電影感慢動作並跟拍飛過的箭；被射中時箭會插在龍身上，讓龍變難操控<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 閃過時會進入慢動作，鏡頭跟著箭飛過，很有電影感；被射中的話，箭會插在龍身上，讓龍變難操控。有獎有罰，玩起來更緊張。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=291s\" target=\"_blank\">04:51</a> 新功能：kill cam，擊落敵人時鏡頭會跟著它墜入海中<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ kill cam 是擊落敵人時切換的特寫鏡頭。這裡會跟著被打下的敵人一路掉進海裡，讓擊落的那一下更有成就感。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=323s\" target=\"_blank\">05:23</a> 作者想讓遊戲看起來像 3A 大作，於是放棄原本 Blender 做的龍，因為還不夠 3A 等級<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AAA（3A）指大公司砸大錢做的頂級遊戲。作者想要那種質感，覺得自己在 Blender 做的龍還不到那個等級，就決定換掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=323s\" target=\"_blank\">05:23</a> 改用 AI 生成素材和綁定龍：先用 GPT 生成高品質的龍圖片，再丟進 3D 素材生成器 Neural 4D（本片贊助商）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新流程分兩步：先用 GPT 生出一張好看的龍圖片，再丟進 Neural 4D 轉成 3D 模型。Neural 4D 是能把圖片變成 3D 模型的工具，也是這支影片的贊助商。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=356s\" target=\"_blank\">05:56</a> Neural 4D 用法：放入圖片、按 generate，作者把所有設定調到 high<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 用法很簡單：上傳圖片、按 generate。作者把所有設定都調到 high，也就是最高品質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=356s\" target=\"_blank\">05:56</a> 小技巧：先用 high 生成，再點左側的 retopo 選項，把面數降到 1～2 萬面，針對遊戲最佳化<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ faces（面數）指 3D 模型由多少小平面組成，越多越細緻但越吃效能。retopo 會重新整理模型表面、減少面數。先用高品質生成再降到 1～2 萬面，就能兼顧好看和順暢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=386s\" target=\"_blank\">06:26</a> 下載 GLB 檔丟進 Noir Stage，用內建的綁定與動畫功能；支援龍、蜘蛛、狗、鳥、蛇和人類<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ GLB 是常見的 3D 模型檔案格式。rig（綁定）是幫模型裝上骨架，它才能動、才能做動畫。Noir Stage 內建這個功能，支援龍、鳥、人類等幾種身形。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=386s\" target=\"_blank\">06:26</a> 龍的綁定花了作者整整 40 分鐘，翅膀拍動不太自然，但作者覺得夠用就好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 就算有工具，綁一隻龍還是花了 40 分鐘，翅膀拍起來也不太自然。作者覺得夠用就好，沒有卡在細節上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=416s\" target=\"_blank\">06:56</a> 共綁定兩隻龍：一隻玩家用、一隻敵方龍；敵方龍用鳥的骨架和動畫，簡單很多，但角會跟著翅膀一起拍動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 敵方龍直接套用鳥的骨架和動畫，省事很多，代價是龍角會跟著翅膀一起拍。這是用現成素材換時間的取捨。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=416s\" target=\"_blank\">06:56</a> Neural 4D 也有提供 API key，作者給 Claude 一組臨時 API key，讓它生成其他素材：敵方船隻和巨型箭<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ API key 像一組通行碼，讓程式可以用你的帳號去使用某個服務，通常會產生費用。作者給 Claude 臨時的 key，讓它自己生成船和箭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=448s\" target=\"_blank\">07:28</a> 作者要求箭要很大、尾端要有大大的紅色羽毛，被射時容易看到；Claude 每種都生成幾個版本再挑出最好的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者把目的講清楚：箭要大、尾端要有紅羽毛，是為了讓玩家看得到。Claude 每種素材都做好幾版再自己挑，等於先幫作者篩過一輪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=448s\" target=\"_blank\">07:28</a> 瀏覽器版完成後告訴 Fable 5「現在在 Godot 做」，由 Noir Stage 把遊戲一個機制一個機制地轉到 Godot<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 瀏覽器版全部跑通後，才叫 AI 搬到 Godot。Noir Stage 是一個機制一個機制地轉，不是整包一次丟過去，比較不容易出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=448s\" target=\"_blank\">07:28</a> Godot 初版的每個遊戲機制都完全正確，但畫面很糟：光線平淡、水很假、火焰只是基本形狀<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Godot 初版的玩法全部正確，問題只在畫面：光線平淡、水很假、火只是基本形狀。代表搬遷本身成功了，畫質要另外處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=482s\" target=\"_blank\">08:02</a> 原因是 Fable 5 一開始想自己手刻所有特效；作者請它研究最好、最可靠的免費 add-on 來提升畫質<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ add-on 是別人做好、可以直接裝進 Godot 的外掛套件。AI 一開始想每個特效都自己寫，效果不好；作者改叫它去找現成、可靠的免費套件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=482s\" target=\"_blank\">08:02</a> 它引進了真實的海洋模擬、完整的天空系統，以及火焰和爆炸用的 VFX 貼圖<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VFX 是視覺特效，VFX 貼圖就是做火焰、爆炸用的特效圖片素材。再加上真實的海洋模擬和天空系統，畫面質感一下子提升很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=482s\" target=\"_blank\">08:02</a> 之後只要跟 Claude 來回幾次，指出哪裡怪怪的讓它調整，前後差異天差地遠<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 裝好套件後，作者只是來回幾輪指出哪裡怪、讓 AI 調整，畫面前後就差很多。大部分功夫花在「看」和「講」，不用自己動手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=513s\" target=\"_blank\">08:33</a> 水面試了三次：自己生成的很難看；第二版開起來像浮在浪上的橡膠片；第三版的 add-on 勝出，浪較大但 Claude 說可以調<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 水面前後換了三種：AI 自己做的很醜，第二個像浮在浪上的橡膠片，第三個 add-on 最好，只是浪偏大，Claude 說可以再調。套件也要實際試過才知道好不好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=544s\" target=\"_blank\">09:04</a> 手感調整：把太洶湧的水調平靜、讓尾浪更早出現（原本要貼著水面飛才看得到）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是在調「玩起來的感覺」。作者把太洶湧的海調平靜，也讓尾浪早一點出現，不用貼著水面飛才看得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=544s\" target=\"_blank\">09:04</a> 火球調得更熱、更橘，讀起來更像火，同時把爆炸加大<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 火球顏色調得更橘、更熱，一眼就看得出是火；爆炸也加大，打中時更有感覺。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=544s\" target=\"_blank\">09:04</a> 龍轉彎時傾斜方向錯了，改成正確地往轉彎方向傾斜<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 轉彎時，龍的身體應該往轉彎那一側傾斜，就像騎腳踏車轉彎會壓車。原本傾斜方向是反的，改正後才自然。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=544s\" target=\"_blank\">09:04</a> 動畫設定：龍預設滑翔，只有加油門時才拍翅膀<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 龍平常滑翔，只有加油門時才拍翅膀。動作跟玩家的操作連在一起，比一直拍翅膀自然。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=577s\" target=\"_blank\">09:37</a> 沒解決的問題：龍看起來很扁平、身上有奇怪的暗影，作者試了好幾個 prompt 都找不出原因<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不是每個問題都修好了：龍看起來很扁、身上有奇怪的暗影，作者換了好幾種說法都沒解決。AI 也會有卡關的時候。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=577s\" target=\"_blank\">09:37</a> 最後加入聲音：Claude 用 Eleven Labs 的 API key 加上完整配樂與音效<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Eleven Labs 是用 AI 生成聲音的服務。作者一樣給了 API key，讓 Claude 自己生成整套配樂和音效，並放進遊戲。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=609s\" target=\"_blank\">10:09</a> 音樂是帶大提琴的戲劇性戰爭風；音效有風聲、拍翅、爆炸、水花、木頭碎裂、箭呼嘯而過，音量會隨情況變大變小<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 音樂是帶大提琴的戲劇性戰爭風格。音效有風聲、拍翅、爆炸、水花、木頭碎裂和箭呼嘯聲，而且音量會隨情況變大變小，不是固定的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=609s\" target=\"_blank\">10:09</a> 壓軸功能：近距離正面炸毀船隻時進入慢動作，鏡頭繞過去拍龍衝過爆炸<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 壓軸畫面：近距離正面炸毀船隻時會進入慢動作，鏡頭繞過去拍龍衝過爆炸，是整個遊戲最有電影感的一幕。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=640s\" target=\"_blank\">10:40</a> 最後網頁版和 Godot 版做得幾乎一模一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網頁版和 Godot 版最後幾乎一模一樣，證明「先在網頁做好再搬過去」這條路走得通。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=672s\" target=\"_blank\">11:12</a> 作者打算把遊戲放到 itch.io 或類似平台讓觀眾玩；也提到正在用 AI 做一款完整的恐怖遊戲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ itch.io 是獨立遊戲常用的發布平台。作者打算把遊戲放上去給觀眾玩，也提到正在用 AI 做一款完整的恐怖遊戲。</span>\n\n📘 術語<br><b>Blender MCP</b>（Blender MCP）：作者用它讓 Fable 5 直接操作 Blender 建模；字幕沒解釋 MCP 是什麼<br><b>Godot</b>（Godot 遊戲引擎）：字幕稱為 Godot game engine，是作者最終做遊戲的引擎<br><b>3JS</b>（3JS（網頁 3D））：AI 很擅長用它做網頁遊戲，所以作者先在瀏覽器用 3JS 做好再移植<br><b>Noir Stage</b>（Noir Stage）：作者自製的免費工具，可在 3D 畫布擺放素材、放帶座標的筆記，也能綁定和做動畫<br><b>game-ready character</b>（遊戲可用角色）：作者要求把 Blender 的龍匯出成能放進遊戲的角色；字幕沒進一步解釋<br><b>level of detail</b>（細節層級）：遠處水面閃爍跟它有關，實際原因是攝影機太早把海面切掉<br><b>wake</b>（尾浪／尾跡）：低飛時龍身後水面拖出的痕跡，後來改成會變寬、冒泡沫<br><b>sonic boom</b>（音爆）：達到極速時觸發；要按住油門一路加速才會出現<br><b>kill cam</b>（擊殺鏡頭）：擊落敵人時，鏡頭會跟著敵人墜入海中<br><b>AAA</b>（3A 等級）：作者希望遊戲看起來像真正的 3A 大作，龍、船、箭都要頂級<br><b>retopo</b>（重新拓樸）：Neural 4D 左側選項，把面數降到 1～2 萬面，針對遊戲最佳化<br><b>faces</b>（面數）：模型的面數，建議降到 1～2 萬面來最佳化遊戲效能<br><b>GLB</b>（GLB 檔）：從 Neural 4D 下載的模型檔案格式，丟進 Noir Stage 使用<br><b>rig / rigging</b>（骨架綁定）：讓模型能做動畫；Noir Stage 內建此功能，支援龍、鳥、人類等<br><b>API key</b>（API 金鑰）：作者給 Claude 臨時 key，讓它自己呼叫 Neural 4D、Eleven Labs 生成素材和聲音<br><b>add-on</b>（外掛套件）：作者請 AI 找最好、最可靠的免費 add-on 來提升 Godot 畫質，不要手刻特效<br><b>VFX textures</b>（視覺特效貼圖）：引進 Godot 版，用在火焰和爆炸上\n\n📺 <a href=\"https://www.youtube.com/watch?v=QkckeI0tITg&t=0s\" target=\"_blank\">Claude Fable 5 Makes FULL GAME Using Godot MCP and Blender MCP</a>（2026/06/16 · 13 分鐘）",
        "tip": "💡 你可以怎麼用：想用 AI 做東西時，可以先在 AI 最拿手的環境做出能跑的版本，再搬到你真正要用的地方。遇到問題時描述「你看到哪裡不對」，要它截圖、重現、修到真的好為止，也可以明講「先找現成可靠的工具，不要自己從頭寫」。",
        "quiz": {
          "q": "作者建議在 Neural 4D 生成模型後，用 retopo 把面數降到多少，才能針對遊戲最佳化？",
          "options": [
            "1千～5千面",
            "1萬～2萬面",
            "5萬～10萬面",
            "20萬～40萬面"
          ],
          "correct": 1,
          "why": "[05:56] 作者說先用 high 生成，再點 retopo 把面數降到 10 到 20 thousand faces，針對遊戲最佳化"
        },
        "status": "full"
      },
      {
        "id": "yt_lCyQ717DuzQ_p1",
        "title": "🎬 Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial（第 1/2 段）",
        "category": "其他",
        "text": "<b>示範 Claude 透過 MCP 操作 Blender 的 3D 作品，並一步步教安裝與連線設定</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼讓 Claude 直接操作 3D 軟體 Blender，幫你做出房子、角色，甚至動畫。講者自己也是 Blender 新手，所以你可以從影片看出零基礎的人能做到哪裡。前半段先展示成品，後半段一步步教安裝和連線。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=0s\" target=\"_blank\">00:00</a> 主題：用 Claude AI 做 3D。講者昨天才學會這個方法，而且這是他第一次用 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 影片在講怎麼讓 Claude 幫你做 3D。Blender 是做 3D 模型和動畫的軟體。講者前一天才學會這招，也是第一次用 Blender，所以你看到的就是新手能做到的程度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=0s\" target=\"_blank\">00:00</a> 做法是透過 MCP 把 Claude 連到 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 是讓 AI 連上外部軟體的一套標準做法。Claude 接上 MCP 之後就不只是聊天，還能真的去操作 Blender。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=31s\" target=\"_blank\">00:31</a> 運作方式：AI 寫 Python 程式碼，透過 Blender 的 add-on 和 Claude 的 MCP，把程式碼變成物件、材質等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 不是直接畫圖，而是寫 Python（一種常見的程式語言）指令。add-on 是裝在 Blender 裡的外掛，它收到指令後在 Blender 裡執行，就做出物件和材質（表面的顏色、質感）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=31s\" target=\"_blank\">00:31</a> 講者說寫程式本來就是 Claude 很擅長的事，這個方法就是把程式碼套用到 3D 建模上<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫程式本來就是 Claude 的強項。這個方法就是把寫程式的能力拿來蓋 3D 模型，AI 不用另外學「畫畫」。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=64s\" target=\"_blank\">01:04</a> AI 會分好幾個步驟蓋出房子，成品不算驚豔，但能當作基礎<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 蓋房子會分成好幾個步驟，一次加一些零件。成品普通，但拿來當起點很好用，之後你再自己修。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=64s\" target=\"_blank\">01:04</a> 講者原本不會 Blender，用了之後開始自己動手試，學會按鈕位置、透視、inspector 和 layers<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最意外的收穫是講者看 AI 做完之後，開始自己動手改。過程中他學會按鈕在哪、怎麼切換透視角度，也學會用 inspector（屬性面板）和 layers（圖層）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=97s\" target=\"_blank\">01:37</a> 講者拿 AI 寫程式來比：AI 先給你基礎，你再加樣式。AI 剛出來時很陽春，現在幾乎能寫 99% 的程式碼<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他拿 AI 寫程式來比：AI 先打好基礎，你再加樣式。AI 寫程式剛出來時很陽春，現在幾乎能寫 99%。他的意思是 3D 可能也會這樣進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=97s\" target=\"_blank\">01:37</a> 範例一：一棟簡單的房子，有多個形狀和燈光，可以切換不同畫面<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 範例一是一棟簡單的房子，用幾個幾何形狀組成，也有打光，可以切換不同畫面來看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=127s\" target=\"_blank\">02:07</a> 範例二：一個打勾 icon，可以切換 modeling 和 lighting。不算很好，但有照 blueprint 做<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 範例二是打勾圖示，可以切換 modeling（建模，看形狀）和 lighting（打光，看光影）。做得不算好，但有照 blueprint（事先給它的設計藍圖）做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=158s\" target=\"_blank\">02:38</a> 範例三：Roblox 角色，用方塊和簡單幾何做成。AI 擅長簡單的上色、打光、形狀，但位置不一定準<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 範例三是 Roblox（積木風格的線上遊戲）角色，用方塊拼成。AI 很會上色、打光和做簡單形狀，弱點是零件的位置不一定放得準。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=190s\" target=\"_blank\">03:10</a> Roblox 角色的缺點：零件有時沒接好，例如腿和頭是分開的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「位置不準」實際看起來是這樣：零件沒接好，例如頭和腿分開、沒連在身體上，要再修正。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=190s\" target=\"_blank\">03:10</a> 也可以叫 AI 做動畫，講者沒給任何細節，它就自己做出一段動畫<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 也能叫它做動畫。講者只說要動畫，完全沒給細節，它就自己決定內容，做出一段動畫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=220s\" target=\"_blank\">03:40</a> 多試幾次、改變要求的內容，結果可能更好。簡單的房子、角色或 Minecraft 風格的東西它都做得很輕鬆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 結果不滿意就多試幾次，或換個方式要求。房子、角色、Minecraft（方塊風格的遊戲）這類造型簡單的東西，它做起來很輕鬆。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=220s\" target=\"_blank\">03:40</a> 應用：Claude 讀取 Blender 場景後，能做出 Three.js 專案（字幕聽寫為 3Gs）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 另一個用法：Claude 讀懂 Blender 裡的場景後，能做成 Three.js 專案。Three.js 是在網頁上顯示 3D 畫面的工具，字幕聽成 3Gs 是聽錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=253s\" target=\"_blank\">04:13</a> 例如請它讀取 Blender 場景並做成 Three.js 網站，它會產生一個 artifact<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 例如請它讀取場景、做成 Three.js 網站，它會產生一個 artifact，也就是 Claude 在對話旁另開一格顯示的成品，可以直接預覽。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=284s\" target=\"_blank\">04:44</a> 重點在於它直接用 Blender 做 3D，成品不會只關在 Claude 或 Cursor 裡，而是讓不同應用程式互相溝通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 重點是成品不會只關在 Claude 或 Cursor（一款 AI 寫程式工具）的視窗裡，而是真的進到 Blender。不同軟體之間可以互相溝通、接著用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=314s\" target=\"_blank\">05:14</a> 講者認為 MCP 強大的原因：可以連到各種資料庫、Figma、Blender 等應用程式，也能連到 Mac 或 Windows 的本機檔案系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者覺得 MCP 強在能連的東西很多：資料庫、Figma（介面設計軟體）、Blender，連你電腦裡的檔案都行，Mac、Windows 都可以。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=314s\" target=\"_blank\">05:14</a> 透過連接本機檔案系統，可以直接在電腦上建立檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 連上本機檔案系統（就是電腦裡的資料夾和檔案）之後，Claude 能直接在你電腦上建立檔案，不用你自己複製貼上再存檔。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=344s\" target=\"_blank\">05:44</a> 轉出來的場景不完美，但能用，可以反覆修改讓它越來越好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 轉出來的場景不完美，但能用。接下來可以一輪一輪跟它說哪裡要改，慢慢修到更好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=344s\" target=\"_blank\">05:44</a> 開始從頭教學。第一步要有 Blender，它是免費、開源的軟體<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接下來從頭教。第一步是裝 Blender，它免費又開源（程式碼公開，任何人都能用、能改），不用花錢就能開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=344s\" target=\"_blank\">05:44</a> 講者提到有部得過 Oscar 的電影是用 Blender 做的，團隊很小，他印象中一開始只有一個人，花了很多年學 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者提到有部得過奧斯卡的電影是用 Blender 做的，團隊很小，他印象中一開始只有一個人，花了很多年學。意思是這套軟體夠專業，不是玩具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=374s\" target=\"_blank\">06:14</a> Blender 有 Mac 和 Windows 等平台的版本可以下載<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Blender 有 Mac、Windows 等版本，下載符合你電腦的那一版就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=374s\" target=\"_blank\">06:14</a> 起因是一則 tweet：有人做了一個 MCP，透過 add-on 讓 Claude 和 Blender 溝通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個方法的起點是一則 tweet（X，也就是以前的 Twitter 上的貼文）：有人做了一個 MCP，搭配 add-on 讓 Claude 和 Blender 能互相溝通。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=405s\" target=\"_blank\">06:45</a> 那則 tweet 附了縮時影片，展示 Claude 讀取場景並轉成 Three.js 網站<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 那則貼文附了縮時影片（把過程快轉播放），展示 Claude 讀取場景、再轉成 Three.js 網站。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=435s\" target=\"_blank\">07:15</a> 最重要的是可以對場景下 prompt、問問題。就像 AI 讀程式碼一樣，只是這次它讀的是 3D<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最關鍵的是可以對 3D 場景下 prompt（給 AI 的指令或問題），例如問它場景裡有什麼。AI 以前能讀程式碼，現在也能讀 3D 場景。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=435s\" target=\"_blank\">07:15</a> 這個工具是一個 GitHub 專案，可以看它的說明文件，講者接下來逐步示範<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個工具放在 GitHub（公開放程式碼的平台）上，頁面有說明文件，講者接著照文件一步步示範。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=435s\" target=\"_blank\">07:15</a> 需要的東西有 brew、Python 和 uv 套件<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要先準備三樣：brew（Homebrew，主要在 Mac 上用指令裝軟體的工具）、Python，還有 uv（安裝、管理 Python 套件的工具）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=467s\" target=\"_blank\">07:47</a> 安裝順序：先裝 Blender，再裝 Node（講者說它是給終端機和 JavaScript 用的套件管理工具），接著下載 Python<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 安裝順序是 Blender、Node、Python。講者說 Node 是給終端機和 JavaScript 用的套件管理工具；一般的說法是，Node 讓 JavaScript 能在電腦上執行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=467s\" target=\"_blank\">07:47</a> 在終端機裡安裝 Homebrew。Windows 用命令列，Mac 可以用 Spotlight 搜尋 terminal<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Homebrew 要在終端機裡安裝。終端機是用打字下指令來操作電腦的視窗：Windows 開命令列，Mac 用 Spotlight 搜尋 terminal 就找得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=499s\" target=\"_blank\">08:19</a> 從網頁複製安裝指令，貼到終端機再按 Enter 就會開始安裝<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 安裝很簡單：從網頁複製那行安裝指令，貼進終端機按 Enter，它就會自己裝完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=531s\" target=\"_blank\">08:51</a> 裝好基本工具後，到 GitHub 專案的 Code 下載 zip 檔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 基本工具裝好後，到 GitHub 專案頁按 Code，下載 zip 壓縮檔，把整個專案抓下來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=531s\" target=\"_blank\">08:51</a> 在終端機複製指令、貼上、按 Enter 安裝 uv，再安裝讓 MCP 和 Blender 溝通的套件<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一樣在終端機貼上指令、按 Enter 安裝 uv，再裝負責讓 MCP 和 Blender 溝通的套件。套件就是別人寫好、裝了就能用的功能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=563s\" target=\"_blank\">09:23</a> 文件裡有一行指令可以啟動 MCP server，但要和 Claude 溝通不需要跑這一步<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 文件裡有一行指令可以啟動 MCP server（在背景待命、接收 Claude 指令的程式）。講者說只是要和 Claude 連線的話，這步可以不用跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=563s\" target=\"_blank\">09:23</a> 解壓下載的 zip，找到 addon.py（在 Finder 的 Downloads 資料夾）。講者強調這個檔案很重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把 zip 解壓縮，到 Finder（Mac 的檔案管理視窗）的 Downloads 資料夾找 addon.py。講者強調這個檔案很重要，等一下要裝進 Blender。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=594s\" target=\"_blank\">09:54</a> 在 Blender 開新專案，依序點 Edit → Preferences → Add-ons，再點右上角的 Install from Disk<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在 Blender 開新專案，依序點 Edit → Preferences（偏好設定）→ Add-ons，再按右上角的 Install from Disk（從電腦裡的檔案安裝）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=624s\" target=\"_blank\">10:24</a> 選擇從 GitHub 下載的 addon.py 並安裝，裝好後應該會看到 Blender MCP 的分頁<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 選剛下載的 addon.py 安裝。成功的話會多出一個叫 Blender MCP 的分頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=624s\" target=\"_blank\">10:24</a> 在 Blender 按 N 會出現直向分頁，最後一個就是 Blender MCP<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在 Blender 按 N 鍵，側邊會出現一排直向分頁，最後一個就是 Blender MCP。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=656s\" target=\"_blank\">10:56</a> 在 Blender MCP 分頁用預設 port 啟動 server（講者說這樣對他有效），Blender 端就設定好了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在 Blender MCP 分頁啟動 server，port（電腦連線時用來區分通道的編號）用預設值就好，講者這樣就成功了。Blender 這邊到此設定完成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=656s\" target=\"_blank\">10:56</a> 下一步是連到 Claude：用 Google 搜尋 Claude desktop，下載對應平台的版本（有 Windows 和 Mac）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接著處理 Claude：Google 搜尋 Claude desktop（Claude 的電腦版應用程式），下載 Windows 或 Mac 版。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=686s\" target=\"_blank\">11:26</a> 桌面版比網頁版多一項功能：能和你的電腦溝通<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一定要用桌面版，因為網頁版碰不到你的電腦。桌面版才能和電腦上的軟體、檔案溝通，MCP 才接得起來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=686s\" target=\"_blank\">11:26</a> 打開 Claude 桌面版，到 Settings 的 Developer 分頁<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 打開 Claude 桌面版，進入 Settings（設定）裡的 Developer（開發者）分頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=716s\" target=\"_blank\">11:56</a> 如果還沒有設定檔，它會問要不要建立。點 Edit config 後會產生 Claude desktop 的 config 檔（字幕聽寫為 claore desktop config.js）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果還沒有設定檔，它會問要不要建立。點 Edit config 就會產生 config 檔（記錄 Claude 要連哪些工具的設定檔）。字幕上的檔名是聽錯的，實際檔名是 claude_desktop_config.json。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=716s\" target=\"_blank\">11:56</a> 這個檔案要手動編輯。講者覺得官方應該做個 UI，但目前只能這樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個檔案要自己打字修改，沒有按鈕可以點。講者覺得官方應該做個 UI（操作畫面），但目前只能手動改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=747s\" target=\"_blank\">12:27</a> 講者用 TextEdit 打開設定檔，裡面有兩個 MCP server：blender 和 file system<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者用 TextEdit（Mac 內建的文字編輯器）打開設定檔，裡面寫了兩個 MCP server：blender 連 Blender，file system 連電腦檔案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=747s\" target=\"_blank\">12:27</a> file system 的設定可以在 Claude 的 MCP 文件裡找到，照著說明做就行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ file system 那段要怎麼寫，Claude 的 MCP 說明文件裡有，照著做就行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=777s\" target=\"_blank\">12:57</a> 如果卡住，可以回頭看說明，或問 Claude、ChatGPT 等 AI 幫忙排除問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 卡住的話，回頭對照說明文件，或把問題丟給 Claude、ChatGPT，請 AI 幫你找出哪裡出錯。</span>\n\n📘 術語<br><b>MCP</b>（MCP（模型連接協定））：字幕說它能把 Claude 連到資料庫、Figma、Blender 等應用程式和本機檔案系統<br><b>MCP server</b>（MCP 伺服器）：要在 Blender 的 Blender MCP 分頁啟動；config 檔裡列了 blender 和 file system 兩個<br><b>Blender</b>（Blender（3D 軟體））：免費、開源的 3D 軟體，有 Mac 和 Windows 版<br><b>add-on</b>（外掛）：安裝在 Blender 上，讓 Claude 透過 MCP 和 Blender 溝通；檔案是 addon.py<br><b>Python</b>（Python（程式語言））：AI 用 Python 程式碼在 Blender 建立物件；安裝方式是下載對應平台的版本<br><b>uv</b>（uv 套件）：必要工具之一，在終端機貼上指令安裝<br><b>Homebrew (brew)</b>（Homebrew）：必要工具之一，在終端機貼上指令按 Enter 安裝<br><b>Node</b>（Node）：講者說它是給終端機和 JavaScript 用的套件管理工具<br><b>Terminal</b>（終端機）：Windows 上是命令列，Mac 上可用 Spotlight 搜尋 terminal<br><b>Three.js</b>（Three.js（網頁 3D））：字幕聽寫為 3Gs；Claude 讀取 Blender 場景後可做成 Three.js 網站<br><b>artifact</b>（artifact）：請 Claude 做 Three.js 網站時，它產生的成品<br><b>Install from Disk</b>（從磁碟安裝）：在 Blender Preferences 的 Add-ons 右上角，用來選 addon.py 安裝<br><b>default port</b>（預設連接埠）：啟動 Blender MCP server 時用預設值就好，講者說這樣對他有效<br><b>Edit config</b>（編輯設定檔）：在 Claude 桌面版 Settings 的 Developer 分頁，點了會建立設定檔供手動編輯<br><b>Claude desktop</b>（Claude 桌面版）：比網頁版多出和你電腦溝通的能力，有 Windows 和 Mac 版\n\n📺 <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=0s\" target=\"_blank\">Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial（第 1/2 段 0:00–13:20）</a>（2025/03/18 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：照影片順序裝好 Blender、Claude 桌面版和 addon.py，第一個要求先從「幫我蓋一棟簡單的房子」開始，做出來再自己在 Blender 裡動手改。設定卡住時，把終端機或 Claude 顯示的錯誤訊息整段貼給 AI 問，通常比自己猜快。",
        "quiz": {
          "q": "在 Blender 裝好 Blender MCP add-on 後，要按哪個鍵才會看到含 Blender MCP 的直向分頁？",
          "options": [
            "N",
            "T",
            "M",
            "Tab"
          ],
          "correct": 0,
          "why": "[10:24] 講者說裝好 add-on 後在 Blender 按 N，會出現直向分頁，最後一個就是 Blender MCP"
        },
        "status": "full"
      },
      {
        "id": "yt_lCyQ717DuzQ_p2",
        "title": "🎬 Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial（第 2/2 段）",
        "category": "其他",
        "text": "<b>設定 Claude 桌面版連接 Blender MCP 與 file system MCP，並示範 AI 建模、排除問題與 Blender 基本操作</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是一支 26 分鐘教學的後半段，示範讓 Claude 桌面版直接操作免費 3D 軟體 Blender，以及在你電腦裡建立檔案。背後靠的是 MCP：一套讓 AI 連上外部軟體和資料的機制。這段教怎麼設定、連不上時怎麼排除，也講了身為 Blender 新手該學的基本操作。適合想親眼看看 AI「動手操作別的軟體」是什麼樣子的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=799s\" target=\"_blank\">13:19</a> 講者提供了逐步的圖解說明；如果只想存取 file system，把 file system 的那段 code 整段複製、貼進設定檔即可<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者準備了一步步的圖文教學。file system（檔案系統）是一種讓 Claude 讀寫你電腦檔案的 MCP；如果只想要這個功能，把那段設定整段複製、貼進設定檔就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=799s\" target=\"_blank\">13:19</a> file system 代表 Claude 可以在你的 Mac 上建立新檔案；能不能刪除，講者表示不確定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接上 file system 後，Claude 能在你的 Mac 上新增檔案。能不能刪檔，講者自己也不確定，所以別先認定它做得到或做不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=829s\" target=\"_blank\">13:49</a> 回到 GitHub repo，照「Claude for Desktop integration」的說明，把設定內容複製、貼進同一個設定檔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ GitHub repo 是放程式碼和說明文件的專案頁面。回到 Blender MCP 的專案頁，照「Claude for Desktop integration」那段說明，把設定複製貼進同一個設定檔。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=860s\" target=\"_blank\">14:20</a> 這份 JSON 只是用來設定 MCP server 的資料，不太懂程式也沒關係；內容有 mcpServers、blender 和各項指令<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ JSON 是一種用括號和引號整理資料的文字格式。這份檔案只是告訴 Claude 要接哪些 MCP、怎麼啟動它們，看不懂程式也能照著貼；mcpServers 就是這份清單的名稱。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=860s\" target=\"_blank\">14:20</a> 設定用的是 uvx（先前用 brew 安裝的程式），加上 Blender MCP 的 add-on<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定裡用 uvx 來啟動 Blender MCP。uvx 是之前用 brew（Mac 上安裝軟體的工具）裝好的程式；Blender 那邊還要另外裝 add-on，也就是外掛。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=860s\" target=\"_blank\">14:20</a> 存檔後用 Command+Q 把 Claude 完全關掉，再重新開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定檔存好後，要按 Command+Q 讓 Claude 完全結束，不能只關掉視窗；重新打開後，它才會讀到新的設定。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=892s\" target=\"_blank\">14:52</a> 設定成功的話會出現鐵鎚圖示，點開可以看到 Blender 專用的 MCP 工具，例如建立 primitive 物件、刪除、執行 Blender code、修改、設定材質等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 成功的話會出現鐵鎚圖示，點開就能看到 Claude 可以用的 Blender 工具，例如建立 primitive（立方體、球體這類基本形狀）、刪除、改材質、直接執行 Blender 程式碼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=922s\" target=\"_blank\">15:22</a> 要先確認 Blender MCP 已啟動，才能在 Claude 下指令，例如「create a 3D house」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 下指令之前，要先確認 Blender 那邊的 MCP server（負責接收 Claude 指令的程式）已經啟動。連上以後才能說「create a 3D house」叫它蓋房子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=922s\" target=\"_blank\">15:22</a> Claude 執行前會先徵求許可，講者說這點很重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 動手改東西之前，會先跳出來問你同不同意。講者強調這點很重要：它要做什麼你都看得到，也可以拒絕。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=953s\" target=\"_blank\">15:53</a> Claude 會執行 Python code，所以一定要先裝好 Python<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 操作 Blender 的方法，是寫 Python（一種常見的程式語言）程式碼交給 Blender 執行，所以你的電腦要先裝好 Python。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=953s\" target=\"_blank\">15:53</a> 有時候 code 會跑不起來，或出現連線問題；要先確認 MCP 有在執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有時候它寫的程式跑不起來，或是顯示連不上。遇到這種情況，第一件事是檢查 Blender 裡的 MCP 是不是還開著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=985s\" target=\"_blank\">16:25</a> 連線問題可能跟重新啟動的方式有關，開啟順序是有規定的，講者開了新的對話重試<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 連不上有可能是重開的方式不對，因為這幾個程式要照固定順序打開。講者的做法是開一個新對話再試一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1017s\" target=\"_blank\">16:57</a> 正確順序：先開 Claude，再開 Blender，最後啟動 server；照這個順序就成功了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 正確順序是：先開 Claude，再開 Blender，最後在 Blender 裡啟動 server。講者照這個順序做，就成功連上了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1048s\" target=\"_blank\">17:28</a> 如果還是有問題（例如連不到 Blender），可以去 GitHub repo 的 issues 找答案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 照順序做了還是連不到 Blender，就去 GitHub 專案的 issues 看看。issues 是使用者回報問題、討論解法的地方，常常有人遇過一樣的狀況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1048s\" target=\"_blank\">17:28</a> 講者踩過的坑：照說明在 terminal 執行 uvx blender-mcp，結果反而出問題；其實不必在 terminal 執行，直接從 Blender 啟動就好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ terminal 是用打字下指令的視窗。說明文件要你在那裡執行 uvx blender-mcp，講者照做反而出錯。其實不用自己執行，從 Blender 裡按啟動就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1078s\" target=\"_blank\">17:58</a> AI 做出的房子不算好看，但講者還是覺得很酷<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 蓋出來的房子外觀普通，稱不上精緻。不過只打一句話就能在 Blender 裡生出 3D 模型，講者覺得已經很酷了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1078s\" target=\"_blank\">17:58</a> 可以問 Claude 跟 Blender 有關的問題，它掌握你這個 Blender 檔案的 context<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你也可以直接問它 Blender 的問題。它掌握這個檔案的 context，也就是場景裡目前有哪些東西，所以回答會針對你手上的檔案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1110s\" target=\"_blank\">18:30</a> 可以下指令加地板、加漂亮的燈光，也可以叫它刪東西，或在你原本做好的場景上繼續操作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你可以叫它加地板、打好看的燈光、刪掉某個物件，也能在你自己做好的場景上接著改，不一定要從零開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1110s\" target=\"_blank\">18:30</a> 可以請它做 pattern、形狀和動畫，例如講者之前用它做過一些 blob 形狀<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 也可以請它做 pattern（重複排列的圖樣）、各種形狀，甚至是動畫。講者之前就用它做過一些 blob，也就是圓滾滾、形狀不規則的團狀物。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1142s\" target=\"_blank\">19:02</a> 每開一個新對話，第一次用到這些基本功能時都會再徵求一次許可<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每開一個新對話，第一次用到這些工具時，它都會再問一次你同不同意，不會沿用上一個對話給過的許可。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1172s\" target=\"_blank\">19:32</a> 再示範一次：先開 Claude，再到 Blender 按 N，點 MCP 的啟動 server，就連上了；每次開 Claude 和 Blender 都要照這個順序<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 再完整走一次：先開 Claude，再到 Blender 按 N 打開側邊欄，在 MCP 那裡按啟動 server 就連上了。每次開這兩個程式都要照這個順序。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1172s\" target=\"_blank\">19:32</a> 講者會用 Midjourney 產生參考圖，例如輸入「3D house」生成圖片<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Midjourney 是一個打字就能生成圖片的 AI 工具。講者會先在上面輸入「3D house」，生出一張房子的參考圖。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1203s\" target=\"_blank\">20:03</a> 把圖存下來，請 Claude「根據這張圖建一棟房子」；結果不會完美，但至少會保留部分配色和基本幾何形狀，別抱太高期待<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把圖存下來交給 Claude，跟它說「照這張圖蓋一棟房子」。成品不會跟圖一模一樣，但大致的配色和基本形狀會保留下來，別期待太高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1233s\" target=\"_blank\">20:33</a> 也可以搜尋 pattern、燈光等各種參考圖讓它嘗試，適合拿來實驗、玩玩看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 除了房子，也可以找圖樣、燈光等各種參考圖讓它試做。這比較適合拿來實驗、玩玩看，不適合拿來交正式作品。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1263s\" target=\"_blank\">21:03</a> 玩的同時也在學 3D 和 Blender 的基礎：操作 UI、安裝 add-on、切換 isometric 視角、切換相機，以及在 AI 出錯時自己移動物件<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 玩的過程中也順便學 Blender 基本功：熟悉介面、裝外掛、切換到 isometric 視角（沒有近大遠小的斜角俯視）、切換相機，AI 擺錯時自己把物件移好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1293s\" target=\"_blank\">21:33</a> 也要學會用 inspector：選取物件後，到哪裡找自訂材質、位置等選項<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ inspector 是屬性面板。要學會點選物件後，去哪裡改它的材質、位置等設定，這樣 AI 做得不好時，你可以自己動手微調。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1293s\" target=\"_blank\">21:33</a> 最後是 timeline 動畫：移動物件並設一個 keyframe<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做動畫要用 timeline（時間軸）：先把物件移到某個位置，設一個 keyframe，也就是記下「這個時間點，物件在這裡」的標記。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1326s\" target=\"_blank\">22:06</a> 接著移到 timeline 上另一個時間點，移動物件再設一個 keyframe，就完成一段動畫<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接著移到時間軸上的另一個時間點，把物件移到新位置，再設一個 keyframe。播放時，Blender 會自動補出中間的移動過程，動畫就完成了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1357s\" target=\"_blank\">22:37</a> 講者說這些都是很基本的知識，他昨天才開始用 Blender，以前從沒用過<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者說這些都是最基礎的東西。他自己前一天才第一次用 Blender，以前完全沒碰過，所以新手也跟得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1357s\" target=\"_blank\">22:37</a> 也可以把 file system 加進 Claude 桌面版的 mcpServers，做法是複製那段設定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 除了 Blender，也可以把 file system 加進 Claude 桌面版的 mcpServers 清單，做法一樣是把那段設定複製進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1357s\" target=\"_blank\">22:37</a> JSON 規則：有開頭就要有結尾；如果有好幾個 server，彼此要用逗號隔開<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 改 JSON 最容易出錯的兩件事：括號有開頭就要有結尾；清單裡有好幾個 server 時，彼此之間要用逗號隔開，少一個就可能整份讀不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1388s\" target=\"_blank\">23:08</a> 編輯路徑：Claude → Settings → Developer → Edit，用 TextEdit 開啟設定檔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 打開設定檔的路徑是 Claude → Settings → Developer → Edit，接著用 TextEdit（Mac 內建的文字編輯器）打開來修改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1388s\" target=\"_blank\">23:08</a> 在 mcpServers 裡的 blender 後面加一個逗號，再加上 file system<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 具體做法是：在 mcpServers 裡 blender 那一段的結尾補一個逗號，再把 file system 的設定接著貼上去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1421s\" target=\"_blank\">23:41</a> 一定要把 username 設對；講者改成自己 Mac 的使用者名稱「MTO」，存檔後重新啟動 Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定裡的 username 就是你 Mac 的使用者名稱，一定要換成你自己的。講者改成他的「MTO」，存檔後重新啟動 Claude。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1454s\" target=\"_blank\">24:14</a> 安裝正確的話，會看到大約 20 個 MCP tools，其中包括透過 file system 寫入檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 裝對的話，點開鐵鎚會看到大約 20 個 MCP 工具，其中包括透過 file system 寫入檔案的功能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1454s\" target=\"_blank\">24:14</a> 示範：請 Claude 寫一份關於顏色的 SwiftUI 教學，並在下載資料夾建立一個 MD（markdown）檔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範：請 Claude 寫一份講顏色的 SwiftUI（Apple 用來做 App 畫面的工具）教學，存成 MD 檔。markdown 是用簡單符號標出標題和清單的純文字格式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1484s\" target=\"_blank\">24:44</a> 目前 Claude 可以存取桌面資料夾和下載資料夾；它會先徵求許可，再撰寫文件並建立檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 目前的設定只開放桌面和下載這兩個資料夾給 Claude。它寫好文件、建立檔案之前，一樣會先問你同不同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1519s\" target=\"_blank\">25:19</a> 講者認為 MCP 對很多人來說很抽象，但接上實際用途（例如用 Blender、把檔案寫進資料夾）之後就會豁然開朗<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者認為，MCP 光聽概念很抽象；可是一看到它真的去操作 Blender、把檔案存進你的資料夾，就會馬上懂它在做什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1519s\" target=\"_blank\">25:19</a> 最後成功在下載資料夾產生了 SwiftUI colors 教學檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最後，下載資料夾裡真的多了一份 SwiftUI 顏色教學檔，示範成功。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1551s\" target=\"_blank\">25:51</a> MCP 的可能性：不再只能用 Cursor 和目前開著的檔案，而是可以連接任何資料庫、GitHub、Blender 這類應用程式（線上或離線都行）以及檔案系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cursor 是用 AI 寫程式的編輯器。以前 AI 大多只碰得到眼前開著的檔案；有了 MCP，它可以連資料庫、GitHub、Blender 這類軟體（線上離線都行），還有你電腦裡的檔案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=1551s\" target=\"_blank\">25:51</a> 講者說過去 AI 功能通常只能在 OpenAI app 或 Claude app 裡使用，MCP 打破了這個限制<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者指出，過去 AI 功能通常只能在 OpenAI 或 Claude 自己的 App 裡面用；MCP 讓它能走出這些 App，直接操作其他軟體。</span>\n\n📘 術語<br><b>MCP (MCP server)</b>（MCP 伺服器）：讓 Claude 連接 Blender、檔案系統、資料庫、GitHub 等外部應用程式的機制<br><b>JSON</b>（JSON 設定檔格式）：用來設定 MCP server 的資料；有開頭就要有結尾，多個項目之間用逗號隔開<br><b>uvx</b>（uvx 工具）：Blender MCP 設定中使用的指令，是先前用 brew 安裝的程式<br><b>brew</b>（Homebrew 套件管理工具）：字幕只提到 uvx 是透過 brew 安裝的<br><b>add-on</b>（Blender 外掛）：Blender MCP 的 add-on，要從 Blender 裡啟動 server<br><b>file system</b>（檔案系統）：讓 Claude 能在你的 Mac 上建立新檔案，例如把檔案寫進桌面或下載資料夾<br><b>primitive</b>（基本幾何物件）：字幕只提到 Blender MCP 工具可以建立 primitive 物件<br><b>inspector</b>（屬性面板）：選取物件後，在這裡找材質、位置等可以自訂的選項<br><b>isometric</b>（等角視圖）：字幕列為要學的基礎操作之一：學會切換 isometric 視角<br><b>timeline</b>（時間軸）：做動畫用的；在不同時間點設 keyframe<br><b>keyframe</b>（關鍵影格）：移動物件後在某個時間點設下；兩個 keyframe 之間就形成動畫<br><b>Midjourney</b>（Midjourney（AI 繪圖工具））：講者用它產生參考圖，再請 Claude 照圖建模<br><b>MD file (markdown)</b>（Markdown 檔）：示範時請 Claude 在下載資料夾建立的文件格式\n\n📺 <a href=\"https://www.youtube.com/watch?v=lCyQ717DuzQ&t=799s\" target=\"_blank\">Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial（第 2/2 段 13:19–26:39）</a>（2025/03/18 · 26 分鐘）",
        "tip": "💡 你可以怎麼用：不玩 3D 的話，也可以只加 file system：到 Claude → Settings → Developer → Edit，把設定貼進 mcpServers，使用者名稱改成你自己的（多個 server 之間別忘了逗號），然後完全關掉 Claude 再重開。接著請它把整理好的筆記存成 markdown 檔，放進下載資料夾。",
        "quiz": {
          "q": "根據影片，要讓 Claude 成功連上 Blender MCP，講者說對他有效的開啟順序是？",
          "options": [
            "先開 Blender 並啟動 server，最後才開 Claude",
            "先開 Midjourney 產生參考圖，再開 Blender",
            "先在 terminal 執行 uvx blender-mcp，再開 Claude",
            "先開 Claude，再開 Blender，最後啟動 server"
          ],
          "correct": 3,
          "why": "[16:57] 講者說要先開 Claude，再開 Blender，最後啟動 server，這個順序對他有效；[17:28] 也提到在 terminal 執行 uvx 反而害他出問題，其實不需要。"
        },
        "status": "full"
      },
      {
        "id": "yt_GEOxJFacPkM",
        "title": "🎬 AI直接操作電腦建模！MCP這個詞今年一定要知道！【blender-mcp手把手安裝教學】",
        "category": "其他",
        "text": "<b>介紹 MCP 概念，並一步步教你安裝 Blender MCP，讓 Claude 直接在 Blender 裡建模</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片先解釋 MCP 是什麼，再一步步教你安裝 Blender MCP。裝好後，你只要打字下指令，Claude 就會自己在 Blender（一套免費的 3D 建模軟體）裡建模、改模型、打光。看完你會知道「AI 自己動手操作軟體」是怎麼做到的，也會知道為什麼作者覺得 MCP 是今年一定要懂的詞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=0s\" target=\"_blank\">00:00</a> 開場展示：作者的手沒碰電腦，AI 用電腦裡的 Blender 自己建模，執行了 2 分半<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 影片一開頭先展示成果：作者全程沒碰滑鼠和鍵盤，AI 自己操作電腦裡的 Blender 把模型做出來，前後大約兩分半。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=0s\" target=\"_blank\">00:00</a> Blender MCP 是「昨天」才在 GitHub 新開源的專案，很短時間內就快 1000 個星標<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Blender MCP 在作者錄影的前一天，才公開在 GitHub（工程師放程式碼、分享專案的平台）。星標就像「按讚收藏」，短時間內就快 1000 個，代表很多人在關注。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=0s\" target=\"_blank\">00:00</a> 這個專案用 MCP 框架在 AI 和 Blender 之間搭了一座橋，作者認為是 MCP 用在細分領域的好例子<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個專案的角色像一座橋：一頭是 AI，一頭是 Blender，兩邊靠 MCP 這套規則溝通。作者覺得，它示範了 MCP 可以深入用在某個專業領域。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=0s\" target=\"_blank\">00:00</a> 只要說一句話，例如「幫我建一個林中小屋」，Claude（字幕寫作 Cloud）就會直接進入 Blender，自己取得目前的模型資訊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你只要用平常說話的方式下指令，例如「幫我建一個林中小屋」，Claude 就會自己連進 Blender，先看場景裡現在有什麼，再開始動手。字幕寫成 Cloud 是聽錯了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=31s\" target=\"_blank\">00:31</a> AI 會自己建模、修改、加光源，成為在特定軟體裡完全自主的 AI Agent；畫面中的石頭、樹、小房子和燈光都是 AI 建的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI Agent 是指能自己規劃、自己動手把事情做完的 AI，不只是回答問題。這裡 Claude 會自己建模、修改、打光，畫面裡的石頭、樹、小屋和燈光全都是它做的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=31s\" target=\"_blank\">00:31</a> 不滿意可以直接說，例如「把門窗的材質和建築主體區分一下」，AI 就會自己分開<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做完不滿意也不用自己調，直接說要改哪裡就好。例如說「門窗和房子本體的材質分開」，AI 就會自己把它們換成不同材質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=31s\" target=\"_blank\">00:31</a> 示範畫面是作者昨晚測試時的錄影；影片後段會提供程式碼和詳細指南<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開頭那段不是現場即時操作，而是作者前一晚測試時錄下來的。影片後段會提供需要的程式碼和詳細的安裝說明。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=61s\" target=\"_blank\">01:01</a> 取得資料的方式：搜尋「AI研究室」，回覆「自動建模」四個字<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想拿作者整理好的檔案和指南，要去搜尋「AI研究室」，再回覆「自動建模」四個字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=61s\" target=\"_blank\">01:01</a> 限制：專案還很初級，局限很大，只能用程式碼建模；不過用 MCP 把 AI 和各種軟體串起來，這個方向威脅性很強<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者也老實說：專案還很陽春，AI 只能用寫程式碼的方式建模，能做的事很有限。但他認為，用 MCP 把 AI 接上各種軟體這個方向，對現有的工作方式衝擊會很大。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=61s\" target=\"_blank\">01:01</a> 影片架構：先講什麼是 MCP，再講怎麼把 Claude 3.7 接到 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 影片分兩段：前半先解釋 MCP 是什麼，後半手把手教你把 Claude 3.7（Claude 當時的模型版本）接上 Blender。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=95s\" target=\"_blank\">01:35</a> MCP 是 Model Context Protocol 的縮寫，由 Anthropic（字幕寫作 Athropic，也就是做 Claude 的公司）在去年提出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP 全名是 Model Context Protocol，「協定」就是大家事先約好的溝通規則。它是做 Claude 的公司 Anthropic 在 2024 年提出的，字幕把公司名拼成 Athropic。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=95s\" target=\"_blank\">01:35</a> MCP 就像 USB 一樣是統一接口，能在大模型和不同軟體之間轉換資料格式，讓大模型直接「插」在某個軟體上<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想想 USB：滑鼠、隨身碟都插同一種孔就能用。MCP 就像 AI 和軟體之間共用的插孔，負責幫兩邊轉換資料格式，讓大模型（像 Claude 這類 AI）能直接「插」上軟體來操作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=95s\" target=\"_blank\">01:35</a> 官方文件顯示已有一些工具支援 MCP 伺服器；隨著第三方開發者投入，能接上的軟體會越來越多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MCP server（MCP 伺服器）可以想成：每個軟體要接上 MCP，就得有自己專用的轉接頭。官方文件列了一些已經支援的工具，之後外部開發者會替更多軟體做出轉接頭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=125s\" target=\"_blank\">02:05</a> MCP 讓軟體更方便連上 AI，AI 的能力就不再只限於聊天介面裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前 AI 只能在聊天視窗裡回你文字，軟體還是得你自己操作。軟體接上 MCP 之後，AI 就能直接進去軟體裡動手做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=125s\" target=\"_blank\">02:05</a> 更重要的是閉環互動：AI 不只發出指令，也會收到結果和狀態，再依結果決定下一步<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 閉環互動是重點：AI 下完指令，會收到「做成了沒、現在狀態如何」的回報，再照結果決定下一步。就像人做事會邊看結果邊調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=125s\" target=\"_blank\">02:05</a> 中間不必由人把錯誤訊息複製回去，AI 自己知道結果如何，會一直反覆修正到做出最終結果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前出錯時，你得把錯誤訊息複製貼回去給 AI 看。現在 AI 自己看得到結果，會一直自己修正到做出成品，你不用在中間幫忙傳話。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=125s\" target=\"_blank\">02:05</a> 作者比喻：熟悉 Cursor 的人可以想成類似打開「EURO MODE」（字幕原文）的感覺<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cursor 是一款內建 AI 的寫程式工具。字幕寫的「EURO MODE」原意不確定，可能是指讓 AI 自動執行、不必每一步都等你確認的模式，也就是放手讓 AI 自己跑的感覺。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=155s\" target=\"_blank\">02:35</a> 片頭展示的是開發者依 MCP 協定做的插件；裝好後 Claude 能進入 Blender 讀取資訊，決定怎麼建模、修改、打光<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 片頭看到的效果，來自某位開發者照 MCP 規則做的插件（裝上就多出新功能的外掛）。裝好後，Claude 就能讀取 Blender 裡的資訊，自己決定怎麼建模、修改、打光。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=155s\" target=\"_blank\">02:35</a> 先決條件一：Python 版本高於 3.1，Blender 版本高於 3.0<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 安裝前先確認版本：Python（一種程式語言，電腦裡要先裝好）要高於 3.1（這是字幕的寫法），Blender 要高於 3.0。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=185s\" target=\"_blank\">03:05</a> 先決條件二：要有 Claude 帳號，而且一定要安裝 Claude 桌面版，用網頁版不行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你要有 Claude 帳號，而且一定要下載安裝 Claude 桌面版應用程式。這個串接用網頁版做不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=185s\" target=\"_blank\">03:05</a> 先決條件三：準備好 add-on.py 這個檔案（作者先前已提供）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 還要先準備好 add-on.py 這個檔案，它就是要裝進 Blender 的插件本體。作者在前面提供的資料裡已經附上了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=185s\" target=\"_blank\">03:05</a> 第一步：打開 Blender，點選單的「編輯 → 偏好設定 → 插件」，按安裝，選擇下載好的 add-on.py，然後在旁邊啟用插件<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一步是裝插件：打開 Blender，依序點「編輯 → 偏好設定 → 插件」，按「安裝」並選擇下載好的 add-on.py，再到旁邊把它啟用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=185s\" target=\"_blank\">03:05</a> 如果找不到（插件的介面），可以按 N<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果畫面上找不到這個插件的操作介面，可以在 Blender 裡按鍵盤的 N 鍵，把側邊面板叫出來找找看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=185s\" target=\"_blank\">03:05</a> 第二步：按 Win+R 輸入 cmd 開啟終端機，貼上作者提供的那行指令後按 Enter<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第二步要用終端機，也就是用打字下指令操作電腦的視窗。按 Win+R、輸入 cmd 打開它，貼上作者給的那行指令，再按 Enter 執行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=215s\" target=\"_blank\">03:35</a> 等上一個指令跑完，再輸入「UVX Blender MCP」按 Enter；這時應該顯示連接失敗，這樣才對，然後關掉終端機<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 等上一步跑完，輸入「UVX Blender MCP」（啟動這個連線工具的指令）再按 Enter。這時出現「連接失敗」才是對的，因為 Blender 那頭還沒開啟連線，看到後就關掉終端機。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=215s\" target=\"_blank\">03:35</a> 最後一步是設定 Claude 桌面版：從左上角啟用開發者模式，再點 File → Setting → Developer，電腦裡會產生一個設定檔<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最後要設定 Claude 桌面版：先從左上角打開開發者模式（開放進階設定的開關），再點 File → Setting → Developer，電腦裡就會產生一份設定檔。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=215s\" target=\"_blank\">03:35</a> 找到 Claude Desktop Config.json，把準備好的內容貼進去，存檔後關閉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 找到名叫 Claude Desktop Config.json 的設定檔，也就是記錄 Claude 要連哪些工具的文字檔，把作者準備好的內容貼進去，存檔後關閉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=245s\" target=\"_blank\">04:05</a> 重新啟動 Claude，右下角如果出現鎚子圖示就代表成功，Claude 可以呼叫 MCP 工具來操作 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把 Claude 關掉再重開，看右下角有沒有出現鎚子圖示。有的話就成功了，代表 Claude 已經可以呼叫 MCP 工具來操作 Blender。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=245s\" target=\"_blank\">04:05</a> 建議把所有軟體都重新啟動；進入 Blender 打開 Port，點「開啟」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者建議把所有相關軟體都重開一次。接著進 Blender，找到 Port 並點「開啟」。Port 像是程式之間連線用的門牌，打開它，Claude 才能從這扇門連進來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=245s\" target=\"_blank\">04:05</a> 在終端機再輸入一次「UVX Blender MCP」，會顯示 Successfully 連接成功；成功後一定要關掉終端機，之後 Claude 就能直接控制 Blender<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 回到終端機，再輸入一次「UVX Blender MCP」，這次會顯示 Successfully（連接成功）。作者強調成功後一定要關掉終端機，之後 Claude 就能直接控制 Blender。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=275s\" target=\"_blank\">04:35</a> Claude 接上後不只能建模，也能打光、調整現有模型，並直接讀取 Blender 裡的各種資訊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接上之後，Claude 不只能建新模型，還能打光、修改原本就有的模型，也能直接讀取 Blender 裡的各種物件和場景資訊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=275s\" target=\"_blank\">04:35</a> 原作者展示過用現有模型建立 3JS 網頁專案，以及其他示範<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 專案原作者還示範了其他玩法，例如拿現有模型做成 3JS 網頁專案。3JS 應該是指 Three.js，一套讓網頁能顯示 3D 畫面的工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=275s\" target=\"_blank\">04:35</a> 專案還在萌芽階段，作者猜測原作者是想讓大家一起開發<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個專案還在很早期、功能不多。作者猜原作者是故意先公開出來，想找大家一起開發、補上更多功能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=305s\" target=\"_blank\">05:05</a> 目前只能刪除和新增物件、只能用程式碼，大約只有八、九個工具；做不出很複雜的模型或場景，但理論上都能做到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 目前 AI 只能新增和刪除物件，而且都要透過寫程式碼，大約只有八、九種工具，所以做不出很複雜的模型或場景。不過作者認為，理論上這些都做得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=305s\" target=\"_blank\">05:05</a> 作者打算研究這個插件，看看能不能為它做出貢獻<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者自己也打算研究這個插件，看看能不能幫忙改進。開源專案本來就是任何人都能參與修改、貢獻的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=305s\" target=\"_blank\">05:05</a> 作者認為 MCP 結合各產業垂直細分的知識，可以玩出很多有趣的應用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者認為，把 MCP 和各行各業的專業知識結合，讓每個行業的專業軟體都能接上 AI，就能做出很多有趣的應用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=336s\" target=\"_blank\">05:36</a> 大家都說 2025 年是 AI Agent 爆發的一年，作者認為 MCP 一定是 Agent 最重要的東西之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多人說 2025 年是 AI Agent 大爆發的一年。作者認為，要讓 AI 真的自己去操作各種軟體，MCP 一定是最關鍵的東西之一。</span>\n\n📘 術語<br><b>MCP (Model Context Protocol)</b>（模型上下文協定）：Anthropic 提出的協定，像 USB 一樣的統一接口，讓大模型接上各種軟體<br><b>Blender MCP</b>（Blender MCP 插件）：GitHub 開源專案，用 MCP 框架在 AI 和 Blender 之間搭橋<br><b>AI Agent</b>（AI 代理）：字幕描述為能在特定軟體裡完全自主建模、修改的 AI<br><b>MCP server</b>（MCP 伺服器）：字幕只提到依官方文件，已有一些工具支援 MCP 伺服器<br><b>閉環交互</b>（閉環互動）：AI 發出指令後會收到結果和狀態，再決定下一步，自己反覆修正<br><b>add-on.py</b>（插件檔案）：要在 Blender 偏好設定的插件頁安裝並啟用的檔案<br><b>UVX Blender MCP</b>（終端機指令）：在終端機輸入；第一次應顯示連接失敗，開啟 Port 後會顯示連接成功<br><b>Developer Mode</b>（開發者模式）：在 Claude 桌面版左上角啟用，之後才能從 File → Setting → Developer 產生設定檔<br><b>Claude Desktop Config.json</b>（Claude 桌面版設定檔）：要把準備好的內容貼進去並存檔的設定檔<br><b>Port</b>（連接埠）：字幕只說要在 Blender 裡打開 Port 並點「開啟」<br><b>GitHub 星標</b>（GitHub 星星數）：字幕用來說明專案熱門程度：短時間內快 1000 個<br><b>3JS</b>（3JS 網頁專案）：字幕只說原作者展示了用現有模型建立 3JS 網頁專案\n\n📺 <a href=\"https://www.youtube.com/watch?v=GEOxJFacPkM&t=0s\" target=\"_blank\">AI直接操作电脑建模！MCP这个词今年一定要知道！【blender-mcp手把手安装教程】</a>（2025/03/13 · 6 分鐘）",
        "tip": "💡 你可以怎麼用：如果你用的是 Claude 桌面版，可以先查查你常用的軟體有沒有人做好 MCP 串接；有的話，照這支影片的流程設定（裝插件 → 改設定檔 → 看到鎚子圖示），就能直接用一句話叫 AI 替你操作。影片是 2025 年初錄的，實際安裝時請以專案頁面上最新的說明為準。",
        "quiz": {
          "q": "根據影片，要讓 Claude 透過 Blender MCP 操作 Blender，Claude 必須用哪種方式？",
          "options": [
            "用 Claude 網頁版就可以",
            "不用 Claude 帳號，只要 Python 就好",
            "安裝 Claude 桌面版",
            "安裝 Claude 手機 App"
          ],
          "correct": 2,
          "why": "[03:05] 字幕說要有 Claude 帳號，而且一定要安裝 Claude 桌面版，用網頁版不行"
        },
        "status": "full"
      }
    ]
  },
  seedance_video: {
    id: "seedance_video",
    name: "🎬 影視生成・Seedance 2.5 電影級實戰",
    badge: "影視・多模態影片生成與鏡頭控制",
    lessons: [
      {
        id: "sd_iphone_cinema",
        title: "🎬 手機隨拍變電影：Seedance 2.5 的實拍視頻轉繪與運動一致性",
        category: "實拍轉繪與運動保持",
        text: "Dan Kieft 實測高達 13.8 萬點閱的顛覆性玩法：《Seedance 2.5 Transforms iPhone Footage into Cinematic AI Videos》：\n\n**告別死板的純文字生成影片**：\n• **Video-to-Video（視頻轉視頻）革命**：傳統 AI 生成影片經常人物身體扭曲、動作不自然；Seedance 2.5 允許你用 iPhone 隨手拍一段真人走動、轉頭或手勢動作，作為骨架與動作軌跡參考（Motion Guidance）。\n• **角色與光影無縫置換**：保留手機拍攝的自然運動流暢感，同時將角色外貌一鍵重塑為科幻宇航員、賽博龐克角色，並疊加好萊塢電影級色調與體積光！\n• **長鏡頭防崩潰（Temporal Consistency）**：底層採用改進型時空注意力機制（Spatiotemporal Attention），消除傳統 AI 影片每一幀都在抽搐閃爍（Flicker）的通病。",
        tip: "📱 實拍即骨架：不要讓 AI 從零猜動作；用 iPhone 實拍動作當導引，交給 Seedance 2.5 換皮出片，效果逼真度翻倍！",
        quiz: {
          q: "在使用 Seedance 2.5 製作高逼真度電影感影片時，為什麼「Video-to-Video（用手機實拍視頻做導引）」比純「Text-to-Video（純文字生成）」更容易獲得流暢逼真的動作？",
          options: [
            "因為純文字生成無法提供精確的物理運動軌跡，而實拍視頻能提供真實自然的骨架姿態與時序運動參考，大幅避免肢體形變抽搐",
            "因為手機拍攝會讓神經網路自動斷網",
            "因為純文字生成只能產出黑白影片",
            "因為 Video-to-Video 不需要消耗任何計算算力"
          ],
          correct: 0,
          why: "實拍視頻提供了真實世界中的物理加速度、骨架運動與視角透視，大幅降低了模型在時空連續性上的幻覺，讓成品質感達到影視級！"
        }
      },
      {
        id: "sd_cinematic_ads",
        title: "🎬 商業廣告實戰：Seedance 2.5 打造百萬播放級電影感廣告片",
        category: "商業廣告與分鏡調度",
        text: "在《Create Cinematic AI Ads with Seedance 2.5》中，拆解了一支高轉化商業廣告片的完整生產流水線：\n\n**商業級分鏡控制法**：\n• **Prompt 分段式運鏡語法**：透過精確的鏡頭術語——例如「Slow tracking shot（慢速跟隨鏡頭）」、「Dolly zoom（滑軌變焦）」與「Macro close-up（微距特寫）」，精準引導 Seedance 的攝影機運動軌跡。\n• **產品主體鎖定（Subject Consistency）**：商業廣告最怕產品標誌或包裝外觀在鏡頭間變形；搭配高清晰度產品正側面靜態參考圖，讓模型在旋轉展示時始終維持品牌一致性。\n• **音畫同步節奏**：先定好背景音樂（BGM）的鼓點時長（如 3秒/5秒 一切換），再由 Seedance 精確生成對應時長的鏡頭切片，大幅縮短剪輯後製時間！",
        tip: "🎯 廣告心法：專業攝影機術語控制運鏡，靜態圖鎖定產品特徵，按音樂節奏反推鏡頭時長！",
        quiz: {
          q: "製作商業級產品廣告片時，如何避免 AI 生成影片中「產品外觀與商標跨分鏡變形走樣」的嚴重問題？",
          options: [
            "不在廣告中展示任何產品",
            "輸入高精度產品靜態參考圖以鎖定目標特徵，並在 Prompt 中嚴格指定攝影機運鏡軌跡與光影約束",
            "每秒鐘更換一種全新的產品樣式",
            "只使用純文字描述，不給任何圖片參考"
          ],
          correct: 1,
          why: "提供高精度的產品參考幀並結合嚴格的運鏡約束，能最大程度限制擴散模型的發散，確保商業品牌的視覺一致性！"
        }
      },
      {
        id: "sd_short_film_astra",
        title: "🎬 史詩短片全流程：Seedance 2.5 攜手 GPT-6 Astra 打造 AI 微電影",
        category: "多模型協同影視流水線",
        text: "Theoretically Media 帶來的 9.4 萬點閱震撼之作：《The Most Epic AI Short Film You'll See Today (Seedance 2.5 & Astra)》：\n\n**雙引擎影視閉環體系**：\n• **Astra 擔任編劇與導演（Story & Script Engine）**：先由具備深度推理能力的多模態模型（如 GPT-6 Astra）規劃完整世界觀、人物角色弧光與分鏡腳本（Shot List），產出專業級攝影指導 Prompt。\n• **Seedance 2.5 擔任攝影機與特效師（Visual Generation Engine）**：將 Astra 精密生成的提示詞批量渲染為高清電影動態片段，精準還原氛圍光（Volumetric Light）與史詩級大場面。\n• **個人即工作室（One-Person Studio）**：以往需要上百人好萊塢團隊、耗資數百萬美元的科幻短片，現在一人在筆電前調度雙 AI 引擎，數小時內就能獨立交付！",
        tip: "🚀 未來製片廠：Astra 寫分鏡劇本，Seedance 渲染電影鏡頭，個人創作者的影視工業化時代正式到來！",
        quiz: {
          q: "在 Theoretically Media 展示的 AI 史詩短片工作流中，Astra 與 Seedance 2.5 分別扮演什麼核心角色？",
          options: [
            "兩者都只用來播放背景音樂",
            "Astra 負責劇本編寫、故事世界觀與精密分鏡指令規劃；Seedance 2.5 負責高逼真度動態鏡頭渲染與視覺交付",
            "Astra 負責關機，Seedance 負責重開機",
            "Astra 只能處理純數字計算"
          ],
          correct: 1,
          why: "高度分工協同是現代 AI 工作流的核心：頂級推理大模型掌管劇本與分鏡規劃，專屬視頻大模型掌管動態渲染交付！"
        }
      }
    ]  },
  meta_yt: {
    "id": "meta_yt",
    "name": "🦙 Meta Muse・熱門講解字幕版",
    "badge": "字幕實證",
    "lessons": [
      {
        "id": "yt_hI3M_4UQoWk",
        "title": "🎬 直播：Mark Zuckerberg 的 Meta Connect 2026 主題演講",
        "category": "其他",
        "text": "<b>Meta 發表個人 agent Muse 的新功能，以及新款眼鏡、MetaVR glasses 和 Muse Charm</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Meta 2026 年 Connect 大會的祖克柏主題演講，重點是 Meta 的 AI 助理 Muse 新增了哪些能力，以及幾款新眼鏡。想知道 AI 助理怎麼從「陪你聊天」變成「替你動手辦事」，還有 Meta 怎麼處理隱私、打算怎麼賺錢，這支片講得很清楚。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=245s\" target=\"_blank\">04:05</a> Muse 是 Meta 幾週前推出的個人 agent，已經在幫助數百萬人；Mark 預期它未來會成長為數十億人使用的個人 superintelligence<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 是 Meta 幾週前推出的個人 agent，也就是會替你把事情辦完的 AI 助理，不只陪你聊天，現在已經有數百萬人在用。祖克柏的目標是讓它成為數十億人各自擁有的個人 superintelligence，也就是能力超越人類的 AI。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=280s\" target=\"_blank\">04:40</a> 每個 Muse 都有自己私有又安全的電腦（Muse SecureVM）；Muse Spark 模型是專門訓練來當個人 agent 的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個 Muse 都配一台自己專用的虛擬電腦，叫 Muse SecureVM。它不是實體機器，但用起來就像一台獨立電腦，而且免費、預設就有。背後跑的 Muse Spark 模型，是專門為了替個人辦事而訓練的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=340s\" target=\"_blank\">05:40</a> 商業模式：Muse 提供大量免費 token，預期之後靠從交易中收取小額費用來獲利<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是 AI 計算用量的單位，用得越多成本越高。Meta 先送你大量 token 免費用，之後等 Muse 幫你完成訂位、買票這類交易，再從中抽一小筆費用來賺錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=592s\" target=\"_blank\">09:52</a> Muse Mac app 上週推出；今天再加入 computer use，經使用者同意後可以操作 Mac 上的任何 app<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 上週 Muse 先推出 Mac 版 app，今天再加上 computer use：只要你同意，Muse 就能像真人一樣，點開並操作你 Mac 上的任何 app。你離開電腦時，它也會繼續把事情做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=745s\" target=\"_blank\">12:25</a> connector 平台開放給開發者自己開發，不到一週就收到超過 1,500 件申請<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ connector 是讓 Muse 連上其他服務的接口，例如 Spotify、OpenTable 訂位、Ticketmaster 售票。現在開放外部開發者自己做，不到一週就收到超過 1,500 件申請，可以看出很多公司都想接上 Muse。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=1399s\" target=\"_blank\">23:19</a> 隱私方面：推出 Muse secure VM，之後還會推出 Muse confidential VM，讓連 Meta 都看不到使用者的資料<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SecureVM 先把你的資料和別人隔開、保護好。之後推出的 confidential VM 會再進一步，設計成連 Meta 自己都看不到你的資料。要讓 AI 碰你的帳號和檔案，這點很重要。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=1566s\" target=\"_blank\">26:06</a> Hearing enhancement 讓眼鏡變成 FDA 核准的非處方助聽器，可補償自覺輕度到中度的聽力損失<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Hearing enhancement 功能讓眼鏡變成 FDA（美國食品藥物管理局）核准的非處方助聽器，不用醫師處方。app 會一步步帶你評估聽力，再依你輕度到中度的聽損狀況調整放大程度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=2419s\" target=\"_blank\">40:19</a> MetaVR glasses 約 100 公克，重量不到 Meta Quest 3 的五分之一，並把 AI agent 直接整合進作業系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MetaVR glasses 大約 100 公克，還不到 Meta Quest 3（Meta 的頭戴式 VR 裝置）的五分之一重，戴起來負擔輕很多。AI agent 直接內建在眼鏡的作業系統裡，不用另外打開 app 才能叫它。</span>\n\n📘 術語<br><b>Muse SecureVM</b>（Muse 安全虛擬機）：給每個 Muse 的私有、安全電腦，免費，是每位使用者的預設環境<br><b>Muse Spark</b>（Muse Spark 模型）：專門訓練來當好個人 agent 的模型<br><b>computer use</b>（電腦操作功能）：經你同意後，Muse 可以操作 Mac 上的任何 app，你離開電腦它也會繼續工作<br><b>connector</b>（連接器）：讓 Muse 連上各種 app 和企業服務，例如 Spotify、OpenTable、Plaid、Ticketmaster<br><b>Hearing enhancement</b>（聽力增強）：讓眼鏡成為 FDA 核准的非處方助聽器，透過 app 引導評估後，依個人聽損狀況調整放大\n\n📺 <a href=\"https://www.youtube.com/watch?v=hI3M_4UQoWk&t=0s\" target=\"_blank\">LIVE: Mark Zuckerberg&#x27;s Meta Connect 2026 keynote</a>（2026/09/24 · 55 分鐘）",
        "tip": "💡 你可以怎麼用：如果你有 Mac 又用 Muse，可以先把每天重複的電腦雜事交給 computer use，但每次同意授權前，先看清楚它要動哪些 app 和帳號。家裡如果有長輩覺得自己有點重聽，可以留意 Hearing enhancement 之後會不會在台灣推出。",
        "quiz": {
          "q": "Meta 開放 connector 平台讓開發者自己開發後，不到一週收到多少件申請？",
          "options": [
            "超過 500 件",
            "超過 1,500 件",
            "超過 15,000 件",
            "大約 150 件"
          ],
          "correct": 1,
          "why": "[12:25] 字幕說：\"in less than a week, we received over 1,500 applications\""
        },
        "status": "long",
        "parts": 5
      },
      {
        "id": "yt_OM0mxReLT4k",
        "title": "🎬 Meta 新 AI agent Muse 衝上 App Store 榜首",
        "category": "其他",
        "text": "<b>CBS News 報導 Meta 的 AI 個人 agent Muse 爆紅，以及它帶來的隱私疑慮</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支 CBS News 報導在講 Meta 新推出的手機 AI 助理 Muse：它一上架就爆紅，還衝上美國 App Store 榜首。影片同時提醒你，這種能替你動手辦事的 AI，要拿到你很多私人資料才做得到，所以值得先看清楚再決定要不要用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=0s\" target=\"_blank\">00:00</a> Muse 是 Meta 推出的 AI 個人 agent，可以裝在手機上。本月稍早上架後下載量暴增，登上美國 App Store 榜首，排名超越 ChatGPT<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 是一種 AI personal agent（AI 個人代理），也就是除了聊天，還能進你手機裡的 app 替你把事情辦完的 AI 助理。它這個月上架後下載量暴增，在美國 App Store 贏過 ChatGPT 排到第一。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=30s\" target=\"_blank\">00:30</a> 運作方式：Muse 連結 email、行事曆等 app 之後，使用者下 prompt，它就能幫忙完成任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你先授權 Muse 連上 email、行事曆這些 app，再下 prompt（你打給 AI 的指令），它就會自己進去操作。比方說「幫我把週五的會議改到下週」，你不用自己一個一個點開 app 去改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=30s\" target=\"_blank\">00:30</a> 記者實測：請 Muse 透過訂位 app Rezzy 訂晚餐，經過幾次 prompt、大約 10 分鐘後成功完成<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 記者請 Muse 用訂位 app Rezzy 訂晚餐，中間補了好幾次指令，花了大約 10 分鐘才訂好。它真的辦得到，只是沒辦法一句話就秒完成，過程中還是要有人盯著、回答它的問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=30s\" target=\"_blank\">00:30</a> Meta 在消費者 AI 產品上一直難以跟 OpenAI、Anthropic 競爭，所以 Muse 對 Meta 來說是重要的一步<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一般人會用的 AI 產品，一直是 OpenAI（ChatGPT 的公司）和 Anthropic（Claude 的公司）領先，Meta 始終追不上。Muse 是 Meta 在這個市場少數真正做出聲量的產品，所以對它很重要。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=63s\" target=\"_blank\">01:03</a> 這股熱潮也反映在股價上，Meta 股價前一天上漲超過 11%；但本週 Amazon 封鎖了 Muse 在其平台上購物<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 投資人很買單，Meta 股價前一天漲了超過 11%。可是同一週 Amazon 就不讓 Muse 在它的平台上購物。也就是說，AI agent 能幫你做到哪些事，還要看別家平台願不願意放行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=63s\" target=\"_blank\">01:03</a> 使用者要自己評估：是否願意讓以隱私問題著稱的 Meta，存取可能含有敏感資訊的 app<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 要幫你辦事，就得先能讀你的 email、行事曆，這些地方常有私人資訊。Meta 過去在隱私上爭議很多，要不要把這些權限交給它，影片說得由你自己衡量。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=98s\" target=\"_blank\">01:38</a> Muse 使用者預設會被加入「活動資料用於 AI 模型訓練」，但可以自行關閉；本月稍早上架以來，至少已有一百萬人下載<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 裝好 Muse 後，預設會把你的使用紀錄拿去做 AI model training（AI 模型訓練，也就是用大量資料把 AI 教得更厲害）。不想被拿去用，就要自己進設定關掉。目前至少已經有一百萬人下載。</span>\n\n📘 術語<br><b>AI personal agent</b>（AI 個人代理）：可以裝在手機上，連結 email、行事曆等 app 後，依 prompt 幫你完成任務<br><b>AI model training</b>（AI 模型訓練）：Muse 使用者預設會被加入，讓活動資料拿去訓練 AI 模型，可以手動關閉\n\n📺 <a href=\"https://www.youtube.com/watch?v=OM0mxReLT4k&t=0s\" target=\"_blank\">New Meta AI agent Muse surges to top of App Store</a>（2026/09/22 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：如果想試 Muse，裝好後先進設定，把「活動資料用於 AI 模型訓練」關掉。一開始只連最需要的 app，像是先連行事曆就好，別一次把 email 全部交給它。",
        "quiz": {
          "q": "根據報導，Amazon 這週對 Muse 採取了什麼行動？",
          "options": [
            "封鎖 Muse 在 Amazon 平台上購物",
            "宣布與 Meta 合作整合 Muse",
            "把 Muse 從 App Store 下架",
            "開放 Muse 存取使用者的訂單紀錄"
          ],
          "correct": 0,
          "why": "[01:03] 字幕提到：Muse was blocked by Amazon this week from making purchases through the platform."
        },
        "status": "full"
      },
      {
        "id": "yt_MpiAqsEgWDo",
        "title": "🎬 Meta AI 賭對了！Muse Agent 能幫你賺錢、殺價、砍帳單？股價大漲背後的秘密｜哈佛姐夢遊矽谷",
        "category": "其他",
        "text": "<b>實測 Meta 的 AI Agent Muse，示範殺價、代買衣服、跟 Verizon 客服談帳單</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：YouTuber 哈佛姐實測 Meta 新推出的 AI 助理 Muse，讓它去二手平台殺價、代挑婚禮服裝，還有處理電信帳單。看完你會知道這類 AI 現在能替你把事情做到哪一步、在哪裡還會卡住，也會懂 Meta 為什麼把股價押在它身上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=61s\" target=\"_blank\">01:01</a> Meta 過去推出的 Llama 4 不如預期、Muse Model 延遲，都曾衝擊股價；根據 Frank 的說法，Muse 是 TBD 實驗室第一個面向消費者的產品<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 是 FB、IG 的母公司。它上一代 AI 模型 Llama 4 表現不好，新模型 Muse Model 又延期，股價都跌過。Muse 是祖克柏砸重金組的 AI 團隊 TBD Lab 第一個給一般人用的產品，外界很關注。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=93s\" target=\"_blank\">01:33</a> Muse 主打幫你完成所有 Action 的最後一哩路：寄信、訂機票、填表單、砍帳單、上網買東西；免費版一週給一億個 Token，一天可用 1400 萬個<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 是 AI Agent，就是會替你動手做事、不只陪你聊天的 AI。它主打把最後一步做完，像真的把信寄出去、把機票訂好。Token 是 AI 計算用量的單位，免費版一週給一億個，一天最多用 1400 萬個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=123s\" target=\"_blank\">02:03</a> 祖克柏說 Muse 不只會幫你省錢，甚至可以幫你賺錢；Meta 計畫從 Muse 促成的交易抽一點手續費，這筆費用可能由商家支付<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 打算這樣賺錢：Muse 幫你談成一筆買賣，Meta 就抽一點手續費，而且可能是商家付、不是你付。所以祖克柏才說它不只幫你省錢，還能幫你賺錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=155s\" target=\"_blank\">02:35</a> 作者認為 Muse 有三個不同處：融入 WhatsApp、Instagram 等 Meta App 的資料、最懂你的品味、安全架構是玩真的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者覺得它跟別家 AI 助理有三點不同：能用上你在 WhatsApp（通訊軟體）和 Instagram 留下的資料；因此更懂你的喜好；安全防護做得很認真，下一條會細講。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=217s\" target=\"_blank\">03:37</a> 安全面：Muse 跑在專屬的隔離環境，密碼可以拿來用但不會讀取；它是第一個拿到 Stripe 購物保障的 AI Agent；Meta 懸賞 30 萬美金請駭客來攻破<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它在一個跟你其他資料隔開的專屬環境裡操作，可以用你的密碼登入，但不會讀取密碼內容。大型線上金流公司 Stripe 為它提供購物保障。Meta 還懸賞 30 萬美金，請駭客來試著攻破。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=505s\" target=\"_blank\">08:25</a> 在 Facebook Marketplace 找到一台 100 塊的 10 人份大同電鍋，設定底價 50 塊請它殺價；它會先讓使用者決定要不要送出訊息、對方還價不會自己答應，並且每 4 小時檢查一次回覆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Facebook Marketplace 是 FB 的二手買賣區。作者設好底價 50 塊，請它把開價 100 塊的大同電鍋殺價。每則訊息都要她同意才送出，對方還價它也不會自己答應，每 4 小時會去看一次回覆。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=599s\" target=\"_blank\">09:59</a> 找參加婚禮的衣服：它用 Browser 在 Nordstrom 找衣服，知道尺寸是 XS、避開白色，找到 12 件；用 Buy with Muse 可以加入購物車並準備結帳資料，但不會直接刷卡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Nordstrom 是美國的百貨公司。Muse 自己開 Browser（瀏覽器）去逛，記得她穿 XS、參加婚禮要避開白色，挑出 12 件。Buy with Muse 會幫你加入購物車、填好結帳資料，但最後刷卡要你自己來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=750s\" target=\"_blank\">12:30</a> Verizon 測試：Muse 查看方案後建議因為 16 Pro 還在分期，先別換電信公司，等到 2027 年 9 月再考慮；但登入失敗，就算作者自己接手控制瀏覽器也登不進去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Verizon 是美國的電信公司。Muse 看完她的方案後提醒她：iPhone 16 Pro 還在分期，現在先別換電信公司，2027 年 9 月再考慮。但它卡在登入，連作者自己接手操作也登不進去，這項測試沒有完成。</span>\n\n📘 術語<br><b>TBD Lab</b>（TBD 實驗室）：根據 Frank 的說法，是 Meta 的神秘 AI 組織，祖克柏花了好幾百億美金組建的夢幻團隊<br><b>Connectors</b>（連接器）：有點像 MCP 的東西，可以連接 Facebook 和 Google 相關的服務<br><b>Plaid</b>（Plaid）：可以連接銀行帳單，讓 Muse 看你所有的帳單和花費，給出財務建議<br><b>Buy with Muse</b>（用 Muse 購買）：讓 Muse 用 Browser 幫你下單、準備結帳資料，但不會直接刷卡<br><b>Computer use</b>（電腦操作）：模擬真人操作電腦，由 Browser 幫你瀏覽網頁、選尺寸、填地址\n\n📺 <a href=\"https://www.youtube.com/watch?v=MpiAqsEgWDo&t=0s\" target=\"_blank\">Meta AI賭對了！Muse Agent能幫你賺錢、殺價、砍帳單？股價大漲背後的秘密｜哈佛姐夢遊矽谷</a>（2026/09/21 · 20 分鐘）",
        "tip": "💡 你可以怎麼用：用這類 AI 代辦時，可以把比價、挑商品、填資料交給它，但出價、付款和送出訊息這幾步，一定要自己看過再按。要它幫忙殺價時，先說清楚你的底價和條件，不要讓它自己決定。",
        "quiz": {
          "q": "在 Facebook Marketplace 殺價的測試中，Muse 送出訊息後多久會檢查一次商家的回覆？",
          "options": [
            "每 1 小時",
            "每 4 小時",
            "每 12 小時",
            "每天一次"
          ],
          "correct": 1,
          "why": "字幕 [08:55] 提到「每 4 個小時它會去幫我掃這個 Reply 再告訴我」"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_Ol82S1UVt7E",
        "title": "🎬 上架十天擠下 ChatGPT 登榜首！Meta Muse 是「懶人版龍蝦」？跟 OpenClaw 差在哪",
        "category": "其他",
        "text": "<b>介紹 Meta Muse 的功能、收費、安全設計，以及它和 OpenClaw、Hermes 的差別</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Meta 推出的 AI 助理 Muse 上架才十天，就在美國的 App 排行榜上擠下 ChatGPT。它主打 agent（AI 代理人：不只回答問題，還會自己動手把事情辦完），所以常被拿來跟 OpenClaw（綽號「龍蝦」）和 Hermes 比較。這兩個都是開源（程式碼公開，誰都能免費拿來裝）的 AI 代理人，要裝在自己的電腦上，或自己架起來用。看完這支影片，你會知道這類「幫你跑腿的 AI」現在做到什麼程度、怎麼收費，還有隱私和安全上要注意什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=100s\" target=\"_blank\">01:40</a> Muse 預設就是 agent：會自己開瀏覽器、登入、填表單，做到付款或寄信前才停下來問你。Meta 在雲端幫每個人開一台專屬電腦，App 或電腦關掉它也能繼續做事，不像 Claude Code、Codex 多半借用你自己的電腦<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它會自己上網、登入、填表，要付款或寄信時才停下來問你。它跑在 Meta 給你的雲端電腦上，所以 App 關掉也會繼續做。Claude Code、Codex（AI 寫程式工具）則多半借用你自己的電腦。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=192s\" target=\"_blank\">03:12</a> 聊天頁最上方有狀態列，顯示 Muse 正在做、已做完、接下來要做的事，需要你同意的動作也在這裡按。另有 Feed、Ideas、Goals、Library 四個分頁<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它做事時你不用猜進度：畫面最上方會列出正在做、已做完、下一步要做什麼，需要你點頭的動作也在這裡按。另有 Feed、Ideas、Goals、Library 四個分頁，字面意思是動態、點子、目標、收藏庫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=254s\" target=\"_blank\">04:14</a> 收費分三種：免費版有用量上限但未公布數字；Power 每月 20 美元，每週 5 億 token；Maximum 每月 100 美元，每週 30 億 token。祖克柏說免費版大約每週一億 token，長期會靠從交易中抽成來賺錢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是 AI 計算用量的單位，大略想成字數就好。每週額度：免費版官方沒公布，祖克柏說大約一億；Power 月付 20 美元有 5 億；Maximum 月付 100 美元有 30 億。Meta 長期想靠交易抽成賺錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=347s\" target=\"_blank\">05:47</a> 安全設計：Muse Secure VM 存放資料和登入憑證；Sentinel 是跟 Muse 隔開的系統層級 agent，沒它放行 Muse 就連不上網路。密碼 Muse 看不到，只拿到替身；付款時透過 Stripe 的 Link 開一次性卡號，每一筆都要你同意<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Secure VM 是你專屬的雲端電腦，資料和登入憑證都存在這裡。Sentinel 是獨立的看門員，它沒放行，Muse 就上不了網。你的密碼 Muse 看不到，只拿到替身。付款時由 Stripe（金流公司）開一次性卡號，每一筆都要你同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=408s\" target=\"_blank\">06:48</a> 你跟 Muse 的對話預設會拿去訓練 Meta 的模型，官方說會先拿掉能認出你的資料再用。不想被拿去用的話，可以到設定裡關掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你跟 Muse 講的話，預設會被拿去訓練 Meta 的 AI。官方說會先去掉能認出你是誰的資訊。如果你會跟它聊私事或工作內容，建議到設定裡把這個選項關掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=534s\" target=\"_blank\">08:54</a> 有試用者連不上 Outlook，畫面寫著不希望你連接工作系統，但 Meta 官方文件沒寫這條規則。結論：要接公司系統、想把資料放在自己的機器上，或人不在美國，OpenClaw 和 Hermes 還是比較實際；目前台灣還下載不到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有試用者想連 Outlook（微軟的信箱）被擋，畫面說不希望你連工作系統，但官方文件沒寫這條規則。所以要接公司系統、想把資料留在自己電腦，或人在台灣（目前還下載不到），用 OpenClaw、Hermes 比較實際。</span>\n\n📘 術語<br><b>OpenClaw</b>（龍蝦）：今年很紅的開源 AI agent，裝在你自己的電腦上，用聊天軟體跟它講話就能叫它做事<br><b>Hermes</b>（Hermes）：跟 OpenClaw 類似的開源產品，可以自己架；會記得你，做完事還會整理成下次用得上的技能<br><b>Muse Spark</b>（Muse Spark 模型）：Muse 背後在跑的 Meta 自家模型<br><b>Muse Secure VM</b>（Muse 安全虛擬機）：你和 Muse 共用的雲端專屬電腦，連上的服務、資料和登入憑證都存在這裡<br><b>Sentinel</b>（Sentinel）：跑在同一台虛擬機上、但跟 Muse 隔開的系統層級 agent；沒有它放行，Muse 就連不上網路\n\n📺 <a href=\"https://www.youtube.com/watch?v=Ol82S1UVt7E&t=0s\" target=\"_blank\">上架十天擠下 ChatGPT 登榜首！Meta Muse 是「懶人版龍蝦」？跟 OpenClaw 差在哪</a>（2026/09/20 · 10 分鐘）",
        "tip": "💡 你可以怎麼用：台灣現在還用不到 Muse，但可以把它的設計當成檢查清單：以後用任何會幫你登入、付款的 AI，先確認三件事：付款前會不會先問你、它看不看得到你的密碼、對話會不會被拿去訓練。會被拿去訓練的話，就到設定裡關掉。",
        "quiz": {
          "q": "Muse 每月 20 美元的 Power 方案，每週可以用多少 token？",
          "options": [
            "30 億個",
            "5 億個",
            "1 億個",
            "10 億個"
          ],
          "correct": 1,
          "why": "[04:14] 每月 20 美元的 Power 方案，每週可以用 5 億個 token。1 億是祖克柏說的免費版大約用量，30 億是 Maximum 方案"
        },
        "status": "old"
      },
      {
        "id": "yt_Wod_A8xIy4E",
        "title": "🎬 Meta Muse 是一款超強的 AI agent",
        "category": "其他",
        "text": "<b>介紹 Meta Muse 的功能與優缺點、適合哪些人，以及作者目前實際在用的 AI agent 組合</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：AI agent 是能自己動手幫你辦事的 AI，不只是陪你聊天。這支影片實際試用 Meta 推出的 agent「Meta Muse」，拿它跟 Grockbot、Hermes 等其他 agent 比較，說明好用在哪、限制在哪、適合誰。作者也提出一個觀點：agent 真正的 moat（護城河，也就是別人抄不走的優勢）在生態系，所以 Meta Muse 的強項和弱點都跟 Meta 自家平台綁在一起。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=62s\" target=\"_blank\">01:02</a> 作者把 Meta Muse 叫做「godthread agent」：整個 agent 以一個大 chat 為主，可以另開 side chat。這跟 Grockbot 的多個具名 agent，還有 ChatGBT work 的一個 agent 多個 thread 都不一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 作者自創「godthread agent」這個詞，意思是所有事都在同一個大對話裡做，有旁支問題再開 side chat（側邊小對話）。別家有的是分成好幾個 agent，有的是一個 agent 開好幾個 thread（對話串）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=155s\" target=\"_blank\">02:35</a> 右側有 activities feed，可以按日期、時間查看你跟 agent 做過的事。另外也整理了 approvals、upcoming tasks（cron jobs）和 identity<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 右邊的 activities feed（活動紀錄）可以照日期、時間查你和 agent 做過什麼。另外還整理了 approvals（等你核准的動作）、cron jobs（排好時間自動跑的任務）和 identity（身分設定）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=215s\" target=\"_blank\">03:35</a> 客製化程度介於兩者之間：Hermes 什麼都能改，Grockbot 幾乎不能改；Meta Muse 什麼都能改，只是設定藏得比較深，給 power user 用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Hermes 什麼都能改，Grockbot 幾乎不能動。Meta Muse 其實也都能改，只是設定藏得比較深：一般人用預設就好，power user（愛研究設定的進階使用者）再自己去挖。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=371s\" target=\"_blank\">06:11</a> Feed 可以放 morning brief 這類簡報內容，不用靠 cron jobs 一直洗 agent；Ideas 會推薦用法，用來對付「blank canvas syndrome」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Feed 可以直接放 morning brief（每天早上的重點整理），不用設一堆定時任務一直叫 agent 做事。Ideas 會推薦用法，對付 blank canvas syndrome：工具什麼都能做，你反而不知道從哪開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=432s\" target=\"_blank\">07:12</a> 作者最喜歡 Goals 功能：選一個目標後，它會問一連串選擇題讓你 brain dump，再 reverse prompt 提出點子，例如幫作者做了 LinkedIn carousel<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Goals 是作者最喜歡的功能。選好目標後，它用選擇題讓你 brain dump（把腦中想法一次倒出來），再 reverse prompt，換它提議能幫你做什麼，例如幫作者做了 LinkedIn carousel（可左右滑的多張圖文貼文）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=524s\" target=\"_blank\">08:44</a> 非常主動：沒有人要求，它就會自己做出 artifact（例如 HTML 網站）並存進 Library。而且免費就能拿到大量 tokens 和使用額度<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它很主動，沒人叫它也會自己做 artifact（做好的成品，例如一個 HTML 網頁），存進 Library（作品庫）。免費就給很多 tokens（AI 計算用量的單位）和使用額度，想試不用先花錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=647s\" target=\"_blank\">10:47</a> 跟 Instagram、Facebook 深度整合，可以找 Instagram reel，也能搜 Facebook Marketplace（例如找 Mac mini）。作者認為特別適合做 e-commerce 的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 因為是 Meta 自家產品，它能直接找 Instagram reel（短影音），也能搜 Facebook Marketplace（二手買賣平台），像是幫你找 Mac mini。作者覺得做 e-commerce（網路電商）的人最用得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=801s\" target=\"_blank\">13:21</a> 完全在雲端運作，用自己的 VM，不能控制你的本機電腦。作者列出三大缺點：生態系弱（只有 Instagram、Facebook）、沒有 frontier models、只能在雲端<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它只在雲端自己的 VM（虛擬電腦）上跑，碰不到你電腦裡的東西。作者列的三大缺點：生態系只有 IG 和 FB、沒有 frontier models（各家最頂尖的模型）、只能在雲端用。</span>\n\n📘 術語<br><b>godthread agent</b>（單一主線程 agent）：作者自創的詞：整個 agent 以一個大 chat 為主，所有事情都在裡面做，side chat 算例外<br><b>blank canvas syndrome</b>（空白畫布症候群）：拿到什麼都能做的 AI agent，反而不知道要做什麼，最後做得更少<br><b>reverse prompt</b>（反向提示）：Goals 功能先問問題讓你 brain dump，再由 agent 告訴你它能根據這個目標做哪些事<br><b>artifact</b>（產出物）：Meta Muse 主動做出的網站、視覺內容等成品，會存在 Library 裡<br><b>moat</b>（護城河）：作者認為這些 agent 真正的護城河是生態系，例如 Meta 的 Instagram、Grockbot 的 X\n\n📺 <a href=\"https://www.youtube.com/watch?v=Wod_A8xIy4E&t=0s\" target=\"_blank\">Meta Muse is an INCREDIBLE AI agent</a>（2026/09/19 · 24 分鐘）",
        "tip": "💡 你可以怎麼用：如果你常在 IG、FB 找東西或經營網拍，可以先免費試 Meta Muse，從 Goals 挑一個目標讓它提案。要處理自己電腦裡的檔案，或需要最強的模型時，就搭配其他工具用。",
        "quiz": {
          "q": "根據影片，Meta Muse 的電腦操作（computer use）是怎麼運作的？",
          "options": [
            "雲端和本機都可以，由使用者自己選",
            "完全在雲端，用自己的 VM，不能控制你的本機電腦",
            "只能透過 Instagram App 操作",
            "幾乎完全在本機運作"
          ],
          "correct": 1,
          "why": "[13:21] 字幕說 MetaMuse 完全 cloudbased，沒有本機的部分，不能控制你的電腦，工作都在它自己的 VM 上做。字幕裡「雲端和本機都可以」說的是 Grockbot，「幾乎完全本機」說的是 Hermes"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_wHn0hTjvFoo",
        "title": "🎬 完整導覽 Muse：Meta 的個人 AI agent",
        "category": "其他",
        "text": "<b>Alex 逐一介紹 Muse app 的 chat、feed、ideas、goals、library 五個分頁</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Meta 官方影片，由 Alex 帶你走一遍 Muse 這個 app 的五個分頁。Muse 不是問一句答一句的聊天機器人，而是會在背景一直幫你做事的 AI。看完你會知道每個分頁是做什麼的，平常可以交代它哪些事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=0s\" target=\"_blank\">00:00</a> Muse 是一直在幫你工作的個人 agent；chat 分頁刻意做得像通訊軟體，讓跟 AI 對話像在聊天，而不是從空白畫面開始<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 指能自己動手辦事的 AI，不只回答問題。chat 是聊天分頁，介面做得像 LINE，打開就接著之前的對話聊，不用每次對著空白輸入框想要問什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=32s\" target=\"_blank\">00:32</a> Muse 可以幫忙買電影票、規劃家庭行程；Alex 也讓它存取自己的西洋棋帳號，每天早上寄對局分析給他<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它能真的替你辦事，例如訂電影票、排家庭行程。Alex 讓它登入自己的西洋棋帳號，它每天早上會分析他下過的棋，再把分析寄給他。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=32s\" target=\"_blank\">00:32</a> Muse 有自己的電腦、一直在背景工作；畫面上方有狀態顯示，點進去可以看它正在做、做過和接下來要做的事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 有一台自己的電腦，你沒開 app 它照樣在工作。點畫面上方的狀態顯示，可以看到它正在做、已經做完和準備要做的事，不會像黑箱。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=62s\" target=\"_blank\">01:02</a> 需要使用者權限的動作，可以在狀態詳細頁或 chat 裡授權<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有些事一定要你同意它才能做，它會等你授權。你可以在狀態詳細頁按同意，也可以直接在 chat 裡回它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=62s\" target=\"_blank\">01:02</a> feed 分頁：Muse 找你可能感興趣的內容，可以在上方 prompt 具體設定，例如早上看財經新聞、晚上看非小說類書籍推薦<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ feed 是資訊動態牆，Muse 會找你可能有興趣的內容，每則都專門為你寫。上方可以輸入 prompt（給 AI 的指令），例如「早上給我財經新聞，晚上推薦非小說類的書」。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=92s\" target=\"_blank\">01:32</a> ideas 分頁：Muse 根據你們的對話主動提出建議，例如下背部復健計畫、幼稚園事務協調、許可證申請<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ideas 是建議清單，Muse 會從你們聊過的內容主動想出能幫你的事。例如你提過腰痛，它可能提議排一份下背部復健計畫；也有幼稚園事務協調、申請許可證這類建議。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=92s\" target=\"_blank\">01:32</a> goals 分頁：Muse 從對話中了解你在乎什麼後，目標就會出現在這裡，可以看簡要狀態，點進去看完整時間軸，也可以設定較長期的目標<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ goals 是目標分頁。Muse 在聊天中摸清你在乎什麼後，會把它列成目標並顯示進度摘要，點進去能看完整時間軸。你也可以自己設比較長期的目標。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=125s\" target=\"_blank\">02:05</a> library 分頁：收錄所有用 Muse 做出的東西，包括文件、PDF、markdown 檔，以及互動式 artifact（例如西洋棋分析 dashboard）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ library 是作品庫，Muse 做出的東西都放這裡：文件、PDF、markdown（一種純文字排版格式）檔，還有 artifact（可互動的成品），像是西洋棋分析 dashboard（數據儀表板）。</span>\n\n📘 術語<br><b>personal agent</b>（個人代理）：一直在幫你工作的 AI，有自己的電腦，在背景持續運作<br><b>feed</b>（動態分頁）：Muse 找來你可能感興趣的內容，每則都是專門為你寫的<br><b>ideas</b>（點子分頁）：Muse 根據對話主動提出的建議清單<br><b>goals</b>（目標分頁）：Muse 從對話中了解你在乎的事後出現的目標，可以看狀態和時間軸<br><b>artifacts</b>（互動成品）：放在 library 裡、內容豐富的互動成品，例如西洋棋分析 dashboard\n\n📺 <a href=\"https://www.youtube.com/watch?v=wHn0hTjvFoo&t=0s\" target=\"_blank\">Take the full tour of Muse, Meta&#x27;s personal AI agent.</a>（2026/09/08 · 2 分鐘）",
        "tip": "💡 你可以怎麼用：用 Muse 時，把固定想看的東西寫進 feed 的 prompt，例如「每天早上給我三則財經新聞」。平常在 chat 裡多聊你在忙的事和想達成的目標，它就能在 ideas 和 goals 主動幫你排計畫。",
        "quiz": {
          "q": "影片中，Alex 讓 Muse 存取他的哪個帳號，好讓它每天早上寄分析給他？",
          "options": [
            "財經新聞訂閱帳號",
            "高爾夫計分帳號",
            "西洋棋帳號",
            "電影票訂票帳號"
          ],
          "correct": 2,
          "why": "[00:32] Alex 說他讓 Muse 存取自己的西洋棋帳號，讓它追蹤他常常輸的棋局，早上寄分析給他。"
        },
        "status": "old"
      },
      {
        "id": "yt_XNOuhxUsQDI",
        "title": "🎬 Mark Zuckerberg 打造為你工作的個人 AI 計畫｜認識 Muse",
        "category": "其他",
        "text": "<b>Mark Zuckerberg 受訪談個人 AI agent Muse 的用法、安全架構與未來願景</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Mark Zuckerberg 受訪，介紹 Meta 推出的個人 AI 助理 Muse：它能做什麼、怎麼收費、怎麼保護你的隱私，以及 Meta 之後想拿它做什麼。如果你已經習慣用 AI 聊天，這支可以讓你看懂下一步：AI 不只回答問題，而是直接幫你把事情辦好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=92s\" target=\"_blank\">01:32</a> Muse 是個人 AI agent，能理解你的目標並 24-7 代你做事，涵蓋人際關係、職涯、居家、健康等生活各面向<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI agent 是會自己動手辦事的 AI，不只是陪你聊天。Muse 的做法是：你講出想達成什麼，它就 24 小時替你處理，工作、人際、家裡、健康的事都能交給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=157s\" target=\"_blank\">02:37</a> Mark 的使用例子：每週幫他準備和 3 歲女兒烘焙的食譜與材料、規劃做機器人、查登山許可，以及用攝影機看 MMA 訓練並給回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他的例子有每週備好跟女兒烘焙的食譜和材料、規劃做機器人、查登山許可，還會透過攝影機看他練 MMA（綜合格鬥）再給建議。可見它能長期負責同一件事，也看得懂影像。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=534s\" target=\"_blank\">08:54</a> 大多數人可以免費使用，每週約 100 million tokens；想要更多額度可以訂閱。長期會從創造的商業價值或省下的錢抽很小的成數<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是 AI 算用量的單位，大約等於一小段字。多數人可以免費用，每週大約 1 億個 token，不夠再付費訂閱。長期的打算是：它幫你賺到或省到錢，Meta 才從中抽一小成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=753s\" target=\"_blank\">12:33</a> 內建 ideas feed，主動提出能改善生活的點子，例如找出重複的訂閱，經你同意後幫你取消<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ideas feed（點子清單）會主動提出建議，不用等你開口。比如它發現你重複訂了功能差不多的服務，會問你要不要退掉，你同意了它才動手。它越了解你，建議就越貼近你的需要。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=909s\" target=\"_blank\">15:09</a> 使用 confidential VM 架構，連 Meta 都看不到你放進 Muse agent 的內容，這個原則是從 WhatsApp 端對端加密學來的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VM 是在雲端跑的虛擬電腦，confidential VM 是加密保護的版本，裡面的內容連 Meta 都看不到。這個原則跟 WhatsApp 的端對端加密一樣：只有你看得到內容，平台看不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=974s\" target=\"_blank\">16:14</a> 另有一個叫 Sentinel 的第二個 agent 監控主 agent，遇到敏感操作就提醒你審核；憑證放在 secure credential store，付款用一次性虛擬卡號<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Sentinel 是第二個 agent，專門盯著主 agent，碰到敏感操作會先找你確認。密碼和卡號放在 secure credential store（保險庫），要用得先問你。付款用一次性卡號，外洩了也不能再刷。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=1225s\" target=\"_blank\">20:25</a> 每天晚上會把當天做過的事壓縮成記憶；每個月推出新模型，剛推出 Muse Spark 1.3<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它每天晚上會把當天做過的事整理濃縮成記憶，隔天接著用，所以越用越懂你。背後的模型（負責理解和判斷的 AI 本體）每個月更新一次，最新版叫 Muse Spark 1.3。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=1319s\" target=\"_blank\">21:59</a> 未來願景：用「business in a box」幫人經營生意，並用個人化方式協助健康，甚至針對罕見疾病設計治療<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ business in a box（整套開店包）的意思是：你只要有點子，agent 就幫你做產品、上線、投廣告，連後台營運都包辦。健康方面，Meta 想依每個人的狀況提供協助，甚至幫罕見疾病設計治療。</span>\n\n📘 術語<br><b>confidential VM</b>（機密虛擬機）：一種架構，連 Meta 都看不到你放進 Muse agent 的內容<br><b>Sentinel</b>（哨兵 agent）：第二個 agent，監控主 agent 的行為和送出去的資料，遇到敏感操作就提醒你審核<br><b>secure credential store</b>（安全憑證庫）：存帳號密碼、信用卡的保險庫，agent 要用時必須先問你<br><b>ideas feed</b>（點子動態）：主動產生能改善你生活的點子，越了解你，點子越個人化<br><b>business in a box</b>（一站式創業）：你只要有點子，agent 就幫你做產品、上線、投廣告，處理後端營運\n\n📺 <a href=\"https://www.youtube.com/watch?v=XNOuhxUsQDI&t=0s\" target=\"_blank\">Mark Zuckerberg&#x27;s Plan for a Personal AI That Works For You | Meet Muse</a>（2026/09/08 · 25 分鐘）",
        "tip": "💡 你可以怎麼用：你現在就可以用手上的 AI 工具試兩件事：把每週固定要做的事（像採買清單、行程規劃）交給它，再請它幫你盤點信用卡帳單裡有沒有重複的訂閱。以後如果讓 AI 幫你付錢，記得優先用一次性虛擬卡號，而且付款、刪東西這類動作一定要設成先問過你。",
        "quiz": {
          "q": "根據影片，負責監控主要 Muse agent、遇到敏感操作會提醒使用者審核的第二個 agent 叫什麼？",
          "options": [
            "Pip",
            "Sentinel",
            "Guardian",
            "Agrippa"
          ],
          "correct": 1,
          "why": "[16:14] Mark 說有第二個叫 Sentinel 的 agent 監控主 agent，偵測到需要你參與的事情就會提醒你；[17:47] 也提到它會監控從 VM 送出的資料。Agrippa 和 Pip 是兩人幫自己 Muse 取的名字"
        },
        "status": "long",
        "parts": 2
      },
      {
        "id": "yt_Lx8lrn-cytc",
        "title": "🎬 Mark Zuckerberg 談 Meta 的 Muse AI agent 將如何幫人賺錢",
        "category": "其他",
        "text": "<b>Zuckerberg 在訪談中談 AI 普及理念、Muse 個人 agent 的功能與安全設計</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Meta 執行長祖克柏的訪談，談 Meta 的 AI 個人助理 Muse，還有 Meta 對 AI 發展的整體想法。影片的重點是：Muse 能長時間替你做事、幫你賺錢，Meta 怎麼靠它賺錢，還有怎麼保護你的資料和帳戶。如果你打算把工作交給 AI 去跑，這些安全設計值得先了解。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=62s\" target=\"_blank\">01:02</a> 讓 AI 普及的三個原則：賦權給人是繁榮的來源；AI 的主要用途是發明新東西，不是自動化；安全要靠制衡與權力平衡，不是限制使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 祖克柏認為，AI 應該是每個人手上的強大工具，不該只掌握在少數公司手裡。AI 最大的價值是幫人做出以前做不到的新東西，不只是省人力。至於安全，要靠各方互相牽制，而不是限制大家使用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=221s\" target=\"_blank\">03:41</a> 剛發布 MuseSpark 1.3，是內部代號 Avocado 的較小 pre-train 模型；更大的 Watermelon 即將推出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 剛推出 MuseSpark 1.3，背後的模型內部代號叫 Avocado，規模比較小。pre-train 是模型先讀大量資料、打好基礎的訓練階段。規模更大的 Watermelon 也快推出了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=1436s\" target=\"_blank\">23:56</a> Muse 不是一問一答，而是交給它專案或目標，它會 24 小時持續工作，也會主動提出新專案建議<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Muse 是一種 agent，也就是會自己規劃步驟、實際去做事的 AI。你不用一句一句問它，而是給它一個目標，它會 24 小時持續推進，還會主動提議你可以做的新專案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=1500s\" target=\"_blank\">25:00</a> 一開始每週提供 1 億 tokens 免費額度加上虛擬機器；長期商業模式是從交易中抽很小的比例，並跟 Stripe 合作處理付款<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始每週免費給 1 億 tokens（AI 計算處理量的單位，可以想成用量額度），再加一台虛擬機器，也就是雲端上給你專用的電腦。Meta 長期打算從你透過 Muse 成交的生意裡抽一小筆，付款交給金流公司 Stripe 處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=1935s\" target=\"_blank\">32:15</a> 延攬 Moxie Marlinspike 負責 confidential VM 專案，承諾連 Meta 也看不到 Muse 裡的內容，而且這項承諾可以用技術驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 找來加密通訊軟體 Signal 的創辦人 Moxie Marlinspike 負責 confidential VM：你放在 Muse 裡的資料連 Meta 自己都看不到。而且這不是只靠一句口頭保證，是可以用技術去檢查驗證的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=2128s\" target=\"_blank\">35:28</a> Sentinel agents 會監控進出的流量和資料、偵測 prompt injection；登入、付款、傳送敏感資訊時會觸發 human in the loop 審核<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Sentinel agents 是專門盯著 Muse 資料進出的監控 AI，會攔截 prompt injection，也就是有人在網頁或信件裡藏指令、騙 AI 照做。遇到登入、付款或送出敏感資料，它會停下來等你核准，這就叫 human in the loop。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=2192s\" target=\"_blank\">36:32</a> 核心設計原則是 least privilege，例如連接 email 時預設只能讀取，要寄信得另外授權<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ least privilege 就是「最小權限」：每件事只給剛好夠用的權限。例如把 email 接給 Muse 時，它預設只能讀信；要它幫你寄信，得另外開權限。這樣萬一出錯，損害也比較小。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=3094s\" target=\"_blank\">51:34</a> 模型訓練特別重視「discretion」：幫你辦事時要自己判斷哪些資訊敏感，不要對外透露<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ discretion 指的是「分寸」。Meta 訓練模型時特別要求它自己判斷哪些資訊敏感。例如幫你訂餐廳時，它不該把你的收入或健康狀況講給店家聽。</span>\n\n📘 術語<br><b>confidential VM</b>（機密虛擬機器）：讓你的虛擬機器和 Muse 裡的資訊連 Meta 都看不到，而且這項承諾可以用技術驗證<br><b>Sentinel agents</b>（哨兵 agent）：監控 agent 進出的流量和資料，偵測 prompt injection，必要時觸發人工審核<br><b>least privilege</b>（最小權限）：每一步只拿需要的最小權限，有必要時才增加<br><b>human in the loop</b>（人工介入審核）：登入、付款、傳送敏感資訊時，每次都要使用者核准<br><b>reward hacking</b>（獎勵駭取）：訓練時模型不去解題，而是改環境設定之類的方式投機取巧達成目標\n\n📺 <a href=\"https://www.youtube.com/watch?v=Lx8lrn-cytc&t=0s\" target=\"_blank\">Mark Zuckerberg on how Meta&#x27;s Muse AI agent will make people money</a>（2026/09/08 · 70 分鐘）",
        "tip": "💡 你可以怎麼用：不管用哪個 AI agent 工具，都先只給它讀取權限，確定它做得對，再慢慢開放寄信、付款這類權限。只要它跳出付款或登入的核准視窗，一定要看清楚內容再按同意。",
        "quiz": {
          "q": "根據影片，Muse 一開始提供多少免費使用額度？",
          "options": [
            "每週 1 億 tokens",
            "每月 1 億 tokens",
            "每天 1,000 萬 tokens",
            "每週 10 億 tokens"
          ],
          "correct": 0,
          "why": "Zuckerberg 說一開始大約提供每週 1 億 tokens 免費，還附一台虛擬機器（[25:00]）"
        },
        "status": "long",
        "parts": 6
      },
      {
        "id": "yt_G55HSGpuh1M",
        "title": "🎬 Meta 的新模型想要「深度存取」你的個人生活……",
        "category": "其他",
        "text": "<b>Meta 推出開源 Muse Glimmer 模型，講它怎麼縮小、實力如何，以及背後的動機</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Meta 推出一款免費、可以裝在自己電腦上跑的 AI 模型 Muse Glimmer。影片講它怎麼從 Meta 的大模型縮小而來、實力到哪裡，也點出 Meta 想讓 AI 深入你私生活的企圖。想知道「不靠雲端、在自己電腦上跑 AI」現在做到什麼程度，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=0s\" target=\"_blank\">00:00</a> Meta 用 Apache 2.0 授權釋出免費開源的 Muse Glimmer，是 30 billion 參數的 agentic 模型，一般 PC 就能跑<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開源就是模型檔案公開，誰都能下載。Apache 2.0 是很寬鬆的授權，連商用都可以。參數（這裡是 300 億個）代表模型的規模；agentic 是指它能自己分步驟幫你辦事。一般家用電腦就跑得動。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=34s\" target=\"_blank\">00:34</a> Meta 說這種 agent 需要 deep access 到個人脈絡，但這次可以完全在你自己的硬體上跑<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ deep access 是指 AI 助理要讀得到你的信件、行事曆、檔案，才幫得上忙。放在雲端，等於把私生活交給別人；這次模型在你自己的電腦上跑，資料不用送出去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=64s\" target=\"_blank\">01:04</a> Llama 4 的 Scout 和 Maverick 在 Llama Arena 上跑分好，是因為 Meta 送去的是一般人下載不到的特製版本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 跑分就是模型的標準化考試，Llama Arena 是比較模型的排行榜。Meta 上次派特別調過的版本去考，你下載到的版本沒有那麼強。所以看 Meta 自己公布的成績，要多留個心眼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=96s\" target=\"_blank\">01:36</a> Zuck 花 $14 billion 買下 Scale.ai 49% 股份，找來 Alexander Wang，成立 Meta Superintelligence Labs；後來推出的 MuseSpark 是閉源、只提供 API 的模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Zuck 就是祖克柏。他砸 140 億美元買下 Scale.ai 近半股份、挖來 Alexander Wang 成立新實驗室。做出來的 MuseSpark 卻是閉源：模型不公開，只能透過 API 連線付費使用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=127s\" target=\"_blank\">02:07</a> Muse Glimmer 是用 logit distillation 從 MuseSpark 蒸餾出來的 dense 模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Glimmer 是 MuseSpark 教出來的學生。logit distillation 讓它直接看老師對每個字的機率判斷來模仿，比只抄答案學得更細。dense 是指每次回答都動用全部參數。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=159s\" target=\"_blank\">02:39</a> 依 Meta 的 benchmark，明顯贏過 Gemma 4，和 Qen 3.6 不相上下；prompt injection 攻擊成功率 28%，Qen 是 40%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ benchmark 就是標準測驗。照 Meta 自己的數據，它明顯贏過 Google 的 Gemma 4，和 Qen 3.6 打平。prompt injection 是在網頁或文件裡藏指令騙 AI；它被騙成功 28%，Qen 是 40%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=190s\" target=\"_blank\">03:10</a> 全精度要 55 GB 以上記憶體；quantization 壓到約 4 bits 後不到 20 GB；再用 D-Flash 做 speculative decoding，在 5090 上快 3 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 全精度要 55 GB 以上記憶體。quantization 把數字存得粗略一點，壓到不到 20 GB。speculative decoding 讓小模型 D-Flash 先猜一段字、大模型整批檢查，在 5090 顯卡上快 3 倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=254s\" target=\"_blank\">04:14</a> Zuck 和 Wang 都說 Muse Spark 1.2 的 open weights 快要釋出，到時就能自架 Meta 自家 coding agent 背後的同一個模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ open weights 是指公開訓練好的模型檔，可以下載自己跑。兩人都說 Muse Spark 1.2 快開放了，到時你就能在自己機器上跑 Meta 寫程式 AI 助手背後的同一個模型。</span>\n\n📘 術語<br><b>logit distillation</b>（logit 蒸餾）：讓大模型把它確切的機率分布「悄悄告訴」小模型，直到小模型學會模仿<br><b>quantization</b>（量化）：把權重壓縮到約 4 bits，模型從 55 GB 以上縮到不到 20 GB<br><b>speculative decoding</b>（推測解碼）：「幫你的 autocomplete 做 autocomplete」：小模型先吐出一整段 token，大模型一次讀完並丟掉猜錯的<br><b>D-Flash</b>（D-Flash（草稿小模型））：speculative decoding 用的小模型，負責一次吐出一整段 token<br><b>OpenRouter</b>（OpenRouter）：本集贊助商，用單一 API 存取所有 LLM，可以手動切換模型或交給 router 挑\n\n📺 <a href=\"https://www.youtube.com/watch?v=G55HSGpuh1M&t=0s\" target=\"_blank\">Meta&#x27;s new model wants &quot;deep access&quot; to your personal life...</a>（2026/08/12 · 5 分鐘）",
        "tip": "💡 你可以怎麼用：如果你想讓 AI 幫忙整理信件、行事曆，又怕資料外流，可以去找 Muse Glimmer 壓到約 4 bits 的版本（不到 20 GB），在自己電腦上試試。至於 Meta 公布的跑分，先別全信，等其他人實際測過再決定要不要用。",
        "quiz": {
          "q": "根據影片，Muse Glimmer 經過 quantization 後大約需要多少記憶體？",
          "options": [
            "剛好 30 GB",
            "不到 20 GB",
            "超過 55 GB",
            "約 40 GB"
          ],
          "correct": 1,
          "why": "[03:10] 權重壓縮到約 4 bits 後「shrank it to just under 20 gigs」；超過 55 GB 是全精度時的需求"
        },
        "status": "old"
      },
      {
        "id": "yt_rXSPopXet1o",
        "title": "🎬 為什麼 Meta 的新 AI 模型如此重要",
        "category": "其他",
        "text": "<b>解析 Meta 推出新模型 MuseSpark 的背景、定位與商業意義</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Meta 推出新 AI 模型 MuseSpark。這支影片講它為什麼在這個時間點推出、跟 ChatGPT 和 Gemini 比起來站在哪個位置，以及 Meta 打算怎麼靠它賺錢。如果你想知道 Meta 在這場 AI 競賽裡的處境和下一步，這支影片講得很清楚。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=0s\" target=\"_blank\">00:00</a> Meta 推出新 AI 模型 MuseSpark，原代號 Avocado，已在 Meta AI app 與網站上線，未來幾週會擴展到其他 app 與 AI 眼鏡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ MuseSpark 開發時的內部代號叫 Avocado。現在打開 Meta AI 的 app 或網站就能用到，接下來幾週會陸續放進 Meta 旗下其他 app 和 AI 眼鏡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=30s\" target=\"_blank\">00:30</a> Meta 稱這是它目前最強的模型，但這次不是推出龐大複雜的模型來挑戰 ChatGPT 和 Gemini 的 Frontier models，而是採較慢的發布步調<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 說這是它目前最強的模型，但沒有一口氣推出超大模型，去跟 ChatGPT、Gemini 的 Frontier models（各家最頂尖的模型）正面對打，而是選擇慢慢來、分階段推。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=64s\" target=\"_blank\">01:04</a> MuseSpark 一開始聚焦 Meta app 的應用，包括推薦使用者追蹤創作者點子的購物模式，以及可做網站或小遊戲的 visual coding 工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始主要用在 Meta 自家 app：購物模式會參考你追蹤的創作者，推薦相關的點子；visual coding 工具是邊做邊看得到畫面的寫程式工具，可以用來做網站或小遊戲。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=64s\" target=\"_blank\">01:04</a> Meta 說這只是開始，更大的模型正在開發中，包括即將推出的 contemplating mode，Meta 稱其可與 Gemini DeepThink、GPT-Pro 等 Frontier models 競爭<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 說這只是開始，更大的模型還在開發。接下來會推出 contemplating mode（「深思模式」），Meta 說它能跟 Gemini DeepThink、GPT-Pro 這類 Google 和 OpenAI 的高階版本競爭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=104s\" target=\"_blank\">01:44</a> Meta 計畫未來提供付費 API 存取、開闢 AI 營收來源；和開源的 Lama 不同，MuseSpark 為 Meta 專有，但 Meta 希望未來釋出開源版本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Meta 打算開放付費 API，讓其他公司把模型接進自己的產品，這樣 AI 就能開始幫 Meta 賺錢。Llama 是開源的，誰都能免費拿去用；MuseSpark 則是 Meta 專有，不過 Meta 希望以後也能推出開源版。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=137s\" target=\"_blank\">02:17</a> 這個模型沒有大幅超越現有 benchmark，但 Meta 說它會作為框架，用來打造更強的模型，朝 personal superintelligence 目標邁進<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ benchmark 是業界用來比較模型能力的標準測驗，MuseSpark 在這些測驗上沒有明顯勝出。Meta 把它當成打造更強模型的基礎，目標是「個人超級智慧」：在任何地方幫任何人處理他們最在意的事。</span>\n\n📘 術語<br><b>Meta Superintelligence Lab</b>（Meta 超級智慧實驗室）：Meta 的主要研發部門，是延攬 Alexander Wang 時成立的，MuseSpark 是它的第一個產品<br><b>CapEx</b>（資本支出）：Meta 今年的資本支出最高達 1350 億美元，接近去年的兩倍<br><b>Frontier models</b>（前沿模型）：指 ChatGPT、Gemini 等領先 AI 公司最頂尖的模型<br><b>proprietary</b>（專有／閉源）：MuseSpark 為 Meta 專有，不像先前的 Lama 模型免費提供給開源社群<br><b>personal superintelligence</b>（個人超級智慧）：Meta 的說法是：能在任何地方幫助任何人處理對他們最重要事情的助理\n\n📺 <a href=\"https://www.youtube.com/watch?v=rXSPopXet1o&t=0s\" target=\"_blank\">Why Meta&#x27;s New AI Model Is Such A Big Deal</a>（2026/04/09 · 3 分鐘）",
        "tip": "💡 你可以怎麼用：如果你有在用 Meta AI app，可以試試購物模式和 visual coding：拿同一個需求去問 ChatGPT 或 Gemini，比比看哪個比較好用。之後 contemplating mode 推出時，可以拿你平常覺得最難的問題去考它。",
        "quiz": {
          "q": "根據影片，MuseSpark 原本的代號是什麼？",
          "options": [
            "Lama",
            "Scale",
            "Avocado",
            "Superintelligence"
          ],
          "correct": 2,
          "why": "[00:00] 影片開頭提到 MuseSpark 原代號為 Avocado；Lama 是 Meta 先前的模型，Scale AI 則是 Wang 的前公司"
        },
        "status": "old"
      }
    ]
  },
};

// 狀態管理
let state = {
  currentLevel: "yt_code",
  currentLessonIdx: 0,
  stars: {},
  answered: {},
  notes: [],      // 畫線／寫下的（notebook.js）：{id, lessonId, text, kind: unclear|cantuse|keep, note, ts, done}
  wrongLog: {},   // 答錯過的題：{lessonId: {picked, ts, times, done}}，再答對也留著給 Claude 重講
  theme: "light"
};

// 本地存檔讀取
function loadState() {
  try {
    const saved = localStorage.getItem("ark_ai_cards_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      state = Object.assign(state, parsed);
    }
    if (!Array.isArray(state.notes)) state.notes = [];
    if (!state.wrongLog || typeof state.wrongLog !== "object") state.wrongLog = {};
    // 分冊改名／拿掉後舊存檔會指到不存在的冊 → 回第一冊，不然整頁打不開
    const lvl = CURRICULUM[state.currentLevel];
    if (!lvl || state.currentLessonIdx >= lvl.lessons.length) {
      state.currentLevel = Object.keys(CURRICULUM)[0];
      state.currentLessonIdx = 0;
    }
  } catch (e) {
    console.error("Failed to load state", e);
  }
}

function saveState() {
  try {
    localStorage.setItem("ark_ai_cards_state", JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state", e);
  }
}

// 計算總星星
function getTotalStars() {
  return Object.keys(state.stars).length;
}

// 震動回饋 (如果手機支援)
function vibrate(ms = 35) {
  if (navigator.vibrate) {
    try {
      navigator.vibrate(ms);
    } catch (e) {}
  }
}

// DOM 元素
const levelTabsEl = document.getElementById("levelTabs");
const chapterLabelEl = document.getElementById("chapterLabel");
const progressFillEl = document.getElementById("progressFill");
const starCountEl = document.getElementById("starCount");
const cardContainerEl = document.getElementById("cardContainer");
const prevBtnEl = document.getElementById("prevBtn");
const nextBtnEl = document.getElementById("nextBtn");
const themeToggleBtnEl = document.getElementById("themeToggleBtn");
const tocToggleBtnEl = document.getElementById("tocToggleBtn");
const drawerBackdropEl = document.getElementById("drawerBackdrop");
const drawerContentEl = document.getElementById("drawerContent");
const drawerCloseBtnEl = document.getElementById("drawerCloseBtn");
const drawerListEl = document.getElementById("drawerList");

// 初始化主題
function initTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  themeToggleBtnEl.textContent = state.theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  initTheme();
  saveState();
}

// 切換學科/程度
function selectLevel(lvlId) {
  state.currentLevel = lvlId;
  state.currentLessonIdx = 0;
  saveState();
  renderLevelTabs();
  renderCard();
}

// 渲染程度切換列
function renderLevelTabs() {
  levelTabsEl.innerHTML = "";
  const nBooks = Object.keys(CURRICULUM).length;
  const nLessons = Object.values(CURRICULUM).reduce((a, l) => a + l.lessons.length, 0);
  const t1 = document.getElementById("bookCountTitle");
  if (t1) t1.textContent = `📚 ${nBooks} 本分冊選書`;
  const t2 = document.getElementById("drawerBooksLabel");
  if (t2) t2.textContent = `📚 快速切換分冊（共 ${nBooks} 本書 · ${nLessons} 課）：`;
  Object.values(CURRICULUM).forEach(lvl => {
    const chip = document.createElement("button");
    chip.className = `level-chip ${lvl.id === state.currentLevel ? "active" : ""}`;
    chip.textContent = lvl.name.split("・")[0]; // 取前段短名
    chip.onclick = () => selectLevel(lvl.id);
    levelTabsEl.appendChild(chip);
  });
  setTimeout(() => {
    const activeChip = levelTabsEl.querySelector(".level-chip.active");
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, 40);
}

// 課的完成狀態（9/25 兔兔：「我不知道那些課本寫完了」）：full＝重點不設上限／分段寫好；old／long＝還會重寫
function statusBadge(lesson) {
  if (!lesson.status) return "";
  const t = lesson.status === "full" ? "✅ 完整版：影片重點全列"
    : lesson.status === "long" ? `⏳ 長片精簡版：之後會拆成 ${lesson.parts || "幾"} 段完整寫`
    : "⏳ 舊版：重點最多 8 條，之後會重寫成完整版";
  return `<div class="status-badge ${lesson.status}">${t}</div>`;
}
function bookProgress(lvl) {
  const s = lvl.lessons.filter(l => l.status);
  return s.length ? ` ✅${s.filter(l => l.status === "full").length}/${s.length}` : "";
}

// 渲染當前卡片
function renderCard() {
  const currentLvl = CURRICULUM[state.currentLevel];
  const lesson = currentLvl.lessons[state.currentLessonIdx];
  const total = currentLvl.lessons.length;

  // 更新進度條
  chapterLabelEl.textContent = `${currentLvl.badge} · 第 ${state.currentLessonIdx + 1} / ${total} 課`;
  progressFillEl.style.width = `${((state.currentLessonIdx + 1) / total) * 100}%`;
  starCountEl.textContent = `⭐ ${getTotalStars()}`;

  // 按鈕狀態
  prevBtnEl.disabled = state.currentLessonIdx === 0;
  nextBtnEl.textContent = state.currentLessonIdx === total - 1 ? "完成此冊 🎉" : "下一課 ➡️";

  const isAnswered = state.answered[lesson.id] !== undefined;
  const userAns = state.answered[lesson.id];
  const isCorrect = userAns === lesson.quiz.correct;

  // 格式化文本中的代碼或高亮
  const formattedText = lesson.text.replace(/\n\n/g, '<div style="height: 10px;"></div>');

  cardContainerEl.innerHTML = `
    <div class="card-header-badge">
      <span class="category-tag">${lesson.category}</span>
      <span style="font-size: 14px; font-weight: 700; color: var(--accent-gold);">
        ${state.stars[lesson.id] ? "⭐ 已掌握" : "📖 研讀中"}
      </span>
    </div>
    
    <h1 class="card-title">${lesson.title}</h1>
    ${statusBadge(lesson)}

    <div class="lesson-box">
      <div class="lesson-text">${formattedText}</div>
      <div class="lesson-tip">${lesson.tip}</div>
    </div>

    <div class="my-marks" id="myMarks"></div>
    <div class="quick-note">
      <div class="quick-note-label">✏️ 這課哪裡不懂、或看懂但不會用？寫下來（也可以反白句子畫線）</div>
      <textarea id="quickNote" rows="2" placeholder="例如：subagent 是什麼？／我不知道什麼時候該用這招"></textarea>
      <div class="mark-kinds">
        <button class="mark-kind" data-qk="unclear">❓ 存成看不懂</button>
        <button class="mark-kind" data-qk="cantuse">🛠 存成不會用</button>
      </div>
    </div>

    <div class="quiz-divider">隨堂小測驗</div>
    <div class="quiz-question">${lesson.quiz.q}</div>

    <div class="options-list" id="optList"></div>

    <div id="explanationContainer"></div>
  `;

  // 渲染選項
  const optListEl = document.getElementById("optList");
  const letters = ["A", "B", "C", "D"];

  lesson.quiz.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    
    // 如果已作答過
    if (isAnswered) {
      if (idx === lesson.quiz.correct) {
        btn.classList.add("correct");
      } else if (idx === userAns && !isCorrect) {
        btn.classList.add("wrong");
      }
    }

    btn.innerHTML = `
      <span class="opt-badge">${letters[idx]}</span>
      <span>${optText}</span>
    `;

    btn.onclick = () => handleAnswer(lesson, idx, btn);
    optListEl.appendChild(btn);
  });

  // 如果已作答，顯示解析
  if (isAnswered) {
    showExplanation(lesson, isCorrect);
  }
  if (typeof bindLessonNotes === "function") bindLessonNotes(lesson);  // notebook.js 載入後才有
}

// 處理答題
function handleAnswer(lesson, selectedIdx, btnEl) {
  if (state.answered[lesson.id] !== undefined) return; // 已答過不可重選

  const isCorrect = selectedIdx === lesson.quiz.correct;
  state.answered[lesson.id] = selectedIdx;

  if (isCorrect) {
    state.stars[lesson.id] = true;
    btnEl.classList.add("correct");
    vibrate(40);
  } else {
    btnEl.classList.add("wrong");
    vibrate([60, 60, 60]);
    const w = state.wrongLog[lesson.id] || {};
    state.wrongLog[lesson.id] = { picked: selectedIdx, ts: Date.now(), times: (w.times || 0) + 1, done: false };
    if (typeof updateNoteCount === "function") updateNoteCount();
    // 亮起正確解答
    const allBtns = document.querySelectorAll(".opt-btn");
    if (allBtns[lesson.quiz.correct]) {
      allBtns[lesson.quiz.correct].classList.add("correct");
    }
  }

  saveState();
  starCountEl.textContent = `⭐ ${getTotalStars()}`;
  showExplanation(lesson, isCorrect);
}

// 顯示解析
function showExplanation(lesson, isCorrect) {
  const container = document.getElementById("explanationContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="explanation-box ${isCorrect ? "" : "hint"}">
      <div style="font-weight: 700; color: ${isCorrect ? "var(--correct-border)" : "var(--wrong-border)"}; margin-bottom: 6px;">
        ${isCorrect ? "🎉 恭喜答對！精準掌握！" : "💡 再接再厲！觀念解析："}
      </div>
      <div>${lesson.quiz.why}</div>
      ${isCorrect ? "" : '<button class="retry-btn" id="retryBtn">🔁 再答一次（答錯紀錄會留在筆記本）</button>'}
    </div>
  `;
  const rb = document.getElementById("retryBtn");
  if (rb) rb.onclick = () => { delete state.answered[lesson.id]; saveState(); renderCard(); };
}

// 上一頁 / 下一頁
prevBtnEl.onclick = () => {
  if (state.currentLessonIdx > 0) {
    state.currentLessonIdx--;
    saveState();
    renderCard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

nextBtnEl.onclick = () => {
  const currentLvl = CURRICULUM[state.currentLevel];
  if (state.currentLessonIdx < currentLvl.lessons.length - 1) {
    state.currentLessonIdx++;
    saveState();
    renderCard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // 進入下一本或打開目錄
    openDrawer();
  }
};

// 目錄抽屜
function openDrawer() {
  const currentLvl = CURRICULUM[state.currentLevel];
  const drawerTitleEl = document.getElementById("drawerTitle");
  if (drawerTitleEl) {
    drawerTitleEl.textContent = `📑 ${currentLvl.name}`;
  }

  // 渲染分冊快捷選單 (10 本書)
  const booksBar = document.getElementById("drawerBooksBar");
  if (booksBar) {
    booksBar.innerHTML = "";
    Object.values(CURRICULUM).forEach(lvl => {
      const chip = document.createElement("button");
      chip.className = `drawer-book-chip ${lvl.id === state.currentLevel ? "active" : ""}`;
      chip.textContent = `${lvl.name.split("・")[0]} (${lvl.lessons.length}課${bookProgress(lvl)})`;
      chip.onclick = () => {
        state.currentLevel = lvl.id;
        state.currentLessonIdx = 0;
        saveState();
        renderLevelTabs();
        renderCard();
        openDrawer();
      };
      booksBar.appendChild(chip);
    });
    setTimeout(() => {
      const activeBookChip = booksBar.querySelector(".drawer-book-chip.active");
      if (activeBookChip) {
        activeBookChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, 40);
  }

  drawerListEl.innerHTML = "";
  currentLvl.lessons.forEach((l, idx) => {
    const li = document.createElement("li");
    li.className = `drawer-item ${idx === state.currentLessonIdx ? "active" : ""}`;
    li.innerHTML = `
      <div>
        <span style="opacity: 0.6; margin-right: 6px;">${idx + 1}.</span>
        <span>${l.title}</span>
      </div>
      <div class="item-stars">${l.status && l.status !== "full" ? "⏳" : ""}${state.stars[l.id] ? "⭐" : "⚪"}</div>
    `;
    li.onclick = () => {
      state.currentLessonIdx = idx;
      saveState();
      renderCard();
      closeDrawer();
    };
    drawerListEl.appendChild(li);
  });

  drawerBackdropEl.classList.add("show");
  drawerContentEl.classList.add("show");
}

function closeDrawer() {
  drawerBackdropEl.classList.remove("show");
  drawerContentEl.classList.remove("show");
}

tocToggleBtnEl.onclick = openDrawer;
drawerCloseBtnEl.onclick = closeDrawer;
drawerBackdropEl.onclick = closeDrawer;
themeToggleBtnEl.onclick = toggleTheme;

// 觸控手勢滑動 (左右滑切換題目)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  // 反白句子、打字、開著筆記本時不換頁（不然畫線一拖就翻到下一課）
  if (String(window.getSelection() || "").trim()) return;
  if (document.querySelector(".drawer-content.show, .mark-sheet.show")) return;
  if (document.activeElement && document.activeElement.tagName === "TEXTAREA") return;
  const swipeDist = touchEndX - touchStartX;
  if (Math.abs(swipeDist) > 75) {
    if (swipeDist < 0) {
      // 往左滑 -> 下一課
      nextBtnEl.click();
    } else {
      // 往右滑 -> 上一課
      prevBtnEl.click();
    }
  }
}

// 啟動
loadState();
initTheme();
renderLevelTabs();
renderCard();
