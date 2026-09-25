// AI 互動學習課本 - 資料庫與互動邏輯
const CURRICULUM = {
  primary: {
    id: "primary",
    name: "🌱 新手入門・觀念打底",
    badge: "初階・核心心法",
    lessons: [
      {
        id: "p1",
        title: "什麼是大模型 Agent？跟普通 ChatGPT 聊天差在哪？",
        category: "核心概念",
        text: "普通的 ChatGPT / 聊天模型就像「只用嘴巴說話的軍師」：你問它問題，它憑記憶回答你，但它**碰不到你的電腦**。\n\n而 **Agent（智慧體）** 則是「有手有腳的實習生」：它除了會思考，還配備了「工具（Tools）」，可以直接讀取你電腦裡的檔案、執行終端指令、跑測試、抓網頁資料，做完還會看結果自己修正！",
        tip: "💡 記住：Agent = 大模型大腦 ＋ 工具的手腳 ＋ 自動迴圈修正能力。",
        quiz: {
          q: "如果想讓 AI「把你桌面的 50 個雜亂檔案依照日期自動建立資料夾並歸檔」，這需要哪種模式？",
          options: [
            "普通聊天對話模式（只能出嘴給建議，需要你自己動手複製貼上）",
            "Agent 模式（能直接調用作業系統工具、建立資料夾並移動檔案）",
            "把螢幕解析度調低",
            "重新啟動電腦"
          ],
          correct: 1,
          why: "普通聊天模式沒有作業系統的執行權限；只有具備 Tool Calling 能力的 Agent 才能直接在電腦上建立目錄與搬移檔案！"
        }
      },
      {
        id: "p2",
        title: "Context Window（記憶視窗）：為什麼聊太久會失憶或變笨？",
        category: "大腦容量",
        text: "大模型的運作是**無狀態（Stateless）**的。你每一次按 Enter 發送訊息，軟體其實是把「前面的整串對話歷史」打包成一份大包裹，全部重新塞給它讀。\n\n大模型的短期記憶槽就叫 **Context Window（上下文視窗）**。如果對話太長，包裹塞得太滿，模型就會像剛考完試、腦袋塞爆的考生一樣：開始漏看細節、記錯前言、胡言亂語，甚至連你最初規定的格式都會忘記！",
        tip: "⚠️ 提醒：對話不是越長越好。就像桌子堆太滿要收拾，及時清理記憶槽才是高手。",
        quiz: {
          q: "當你跟 AI 夥伴連續聊了 4 個小時，發現它開始忘記剛才的約定、甚至寫出前後矛盾的程式碼，最可能的原因是什麼？",
          options: [
            "AI 累了需要喝咖啡",
            "Context Window 上下文記憶槽塞得太滿，雜訊過多干擾了注意力集中",
            "電腦的硬碟損壞了",
            "螢幕更新率太高"
          ],
          correct: 1,
          why: "這是典型 Context 膨脹（Context Bloat）現象！當上下文充滿歷史日誌與無效廢話時，模型的注意力權重會被嚴重分散。"
        }
      },
      {
        id: "p3",
        title: "Token 到底是什麼？荷包是怎麼被吃掉的？",
        category: "計費與成本",
        text: "大模型不認得中文字或英文字母，它看所有文字都是切成一塊塊的 **Token（詞元）**。\n\n一般來說，1 個繁體中文字大約等於 1～2 個 Token。而計費是**雙向收費**的：\n1. **Prompt Token（輸入）**：你餵給它看的每一行字都要算錢。\n2. **Completion Token（輸出）**：它打字回答你的每一行字也要算錢。\n最坑的是：因為每次對話都會重複送出歷史記錄，所以對話越長，後面每一句的「輸入成本」是以等差級數在瘋狂翻倍的！",
        tip: "💰 省錢心法：只給 AI 看它「當下任務必須知道」的關鍵檔案，無關的不要一股腦全貼進去！",
        quiz: {
          q: "想要讓 AI 既回答得快、準確度高，又替自己省下大筆 API 帳單，最好的習慣是什麼？",
          options: [
            "把整個專案資料夾裡的 200 個檔案全部貼進對話框讓它慢慢看",
            "每次只精準提供與本次任務直接相關的代碼段或文件，避免餵入無效廢話",
            "完全不給任何背景，只留一句「幫我改」讓它自己猜",
            "只用繁體文言文跟它溝通"
          ],
          correct: 1,
          why: "精準餵食（Targeted Context）是節省 Token 成本與提高回答準確度的第一鐵律！"
        }
      },
      {
        id: "p4",
        title: "CLI 終端機是什麼？為什麼頂級工程師都在黑底視窗幹活？",
        category: "實戰工具",
        text: "許多人習慣用美麗的網頁按鈕，但真正的 Agent 兵工廠往往跑在 **CLI（Command Line Interface 命令列介面 / 終端機）** 裡（例如 PowerShell、Bash）。\n\n在 CLI 終端裡：\n• **速度極快**：沒有肥大的網頁渲染負擔。\n• **權限直達底層**：AI 可以直接執行 Git 版控、執行單元測試、自動編譯與除錯。\n• **可腳本化**：一鍵就能把工作串接起來自動跑完！",
        tip: "💻 像 Claude Code、Codex CLI，本質都是跑在終端裡的 Agent，比網頁版強大十倍。",
        quiz: {
          q: "在終端機（CLI）裡跑 AI Agent，最關鍵的優勢是什麼？",
          options: [
            "背景是黑色的看起來比較像駭客",
            "可以直接讀寫本機檔案、自動跑指令驗證，並在同一個工作流內閉環完成任務",
            "字體比較小可以省電",
            "完全不需要消耗網路流量"
          ],
          correct: 1,
          why: "終端機賦予了 AI 直接操作檔案系統與執行環境的能力，讓它能從「說說看」升級為「自己做、自己測」！"
        }
      },
      {
        id: "p5",
        title: "大模型的本質：為什麼每次重開機都是全新的白紙？",
        category: "記憶機制",
        text: "大模型本身是**無狀態（Stateless）**的。當你關閉程式重開，它對你昨天的喜好、講過的規定**一無所知**！\n\n那為什麼它能在你的專案裡看起來那麼聰明？因為有 **System Prompt 與記憶檔案（如 CLAUDE.md、AGENTS.md）**！\n每當 AI 開機，工具會第一時間悄悄把這份「身分與規矩說明書」注入到它的腦袋裡，告訴它：「你是誰、主人是誰、什麼事情絕對不能做」。",
        tip: "🧠 這就是為什麼專案需要維護一份好讀的規範文件，它是 AI 夥伴的專屬指南針。",
        quiz: {
          q: "為什麼量子方舟專案裡一定要維護好 CLAUDE.md 與 AGENTS.md 這些規則檔案？",
          options: [
            "為了讓硬碟容量看起來比較滿",
            "讓每次開機或重置的大模型夥伴，能第一時間讀懂規矩、身分限制與專案SOP，避免出錯",
            "給人類長官檢查業績用的",
            "防止電腦螢幕刮傷"
          ],
          correct: 1,
          why: "因為大模型沒有永久記憶，每次開機都要靠開機文件快速同步「世界觀與工作紀律」！"
        }
      }
    ]
  },
  intermediate: {
    id: "intermediate",
    name: "⚡ 實戰神技・救命日常指令",
    badge: "中階・高頻技能",
    lessons: [
      {
        id: "i1",
        title: "救命指令 1：/resume（斷線接關）",
        category: "日常指令",
        text: "正叫 AI 寫程式寫到一半，不小心把黑底終端機按叉叉關掉了？或者電腦意外當機重開？\n\n**不要慌張重新輸入！**\n重新打開終端機，打：\n<span class=\"code-snippet\">/resume</span>\n\n工具會立刻從硬碟的快照檔中，把上一次的對話歷史、檔案改動記錄、測試結果全部讀回來，直接回到剛剛中斷的那一秒，無縫接關！",
        tip: "🔄 就像玩單機遊戲的「讀取存檔」，不用再把整個需求重打一遍。",
        quiz: {
          q: "下午你正讓 Codex 進行大型專案重構，視窗不小心被誤關了。重新開起終端後，你第一件事該做什麼？",
          options: [
            "打 /resume 接續上一次的工作階段與進度",
            "打 /clear 把所有東西洗掉全部手寫",
            "生氣地把專案整個刪除",
            "去重買一張顯示卡"
          ],
          correct: 0,
          why: "打 /resume 會自動載入最近一次 session 的快照與上下文，省時省力免重打！"
        }
      },
      {
        id: "i2",
        title: "瘦身指令 2：/compact（記憶壓縮）",
        category: "效能最佳化",
        text: "當你跟 AI 已經連跑了幾十個指令，終端機開始提醒你「Context 已經使用了 60%～70%」或者 AI 回答變得拖泥帶水時，請打：\n<span class=\"code-snippet\">/compact</span>\n\n它會啟動大腦壓縮機，把前面幾十頁落落長的終端報錯、中途摸索全部濃縮成幾句「目前完成的結論與待辦事項」，一口氣釋放掉 80% 的短期記憶空間！",
        tip: "✨ 效果：立刻省下大量後續 Token 費用，AI 的注意力也會瞬間恢復敏銳！",
        quiz: {
          q: "什麼時候是按下 /compact 指令的最佳時機？",
          options: [
            "剛打開終端、一句話都還沒輸入時",
            "任務進行到一個階段、Context 占用率偏高、想騰出記憶槽但保留關鍵結論時",
            "想要立即刪除專案程式碼時",
            "每次打字前都必須打一次"
          ],
          correct: 1,
          why: "/compact 的目的就是「壓縮去蕪存菁」，在保留核心進度與結論的前提下，清空中間無用的落落長日誌！"
        }
      },
      {
        id: "i3",
        title: "換檔指令 3：/clear（乾淨開局）",
        category: "專注管理",
        text: "剛才花了兩小時修好網頁的 CSS 跑版，現在想讓 AI 幫忙分析美股大盤的 GEX 數字？\n\n**千萬不要在同一個對話裡繼續聊！**\n因為舊對話裡堆滿了 CSS、樣式、按鈕的歷史雜訊，會嚴重污染 AI 的注意力。\n\n請直接打：\n<span class=\"code-snippet\">/clear</span>\n\n它會把短期對話完全洗淨（但你的專案檔案完全不會動），讓 AI 以最乾淨、最專注的大腦迎接下一個全新任務！",
        tip: "🧹 一事一議：任務換主題，及時 /clear 是保持 AI 高智商的秘訣。",
        quiz: {
          q: "修完了前端頁面的排版問題，接下來要讓 AI 開始跑大盤資料分析，最好的操作是？",
          options: [
            "繼續在同一條長對話裡往下問，讓 AI 帶著一堆 CSS 歷史日誌去算股票",
            "打 /clear 清空短期上下文，以乾淨專注的記憶開始全新任務",
            "把電腦重灌作業系統",
            "把螢幕倒過來放"
          ],
          correct: 1,
          why: "切換不同性質的大任務時，/clear 能徹底排除先前的歷史干擾，避免模型產生幻覺或混淆重點。"
        }
      },
      {
        id: "i4",
        title: "精準 Prompt 三段式心法：讓它不胡說八道",
        category: "溝通心法",
        text: "跟 Agent 溝通，千萬不要只下「幫我改好看一點」這種模糊指令，那樣 AI 只會發揮想像力亂改你的專案！\n\n最穩定的下咒公式是**三段式**：\n1. **【背景】**：「這是一個手機端閱讀介面，目前按鈕在小螢幕容易按錯。」\n2. **【具體目標】**：「請把所有選項按鈕的最小高度調整為 48px，並加上 2px 圓角。」\n3. **【邊界限制】**：「不要改動任何既有的顏色變數，也不要更動答題邏輯。」",
        tip: "🎯 邊界限制（不要做什麼）往往比目標（要做什麼）更重要！",
        quiz: {
          q: "下列哪一種下指令（Prompt）的方式，最不容易讓 AI 夥伴改爛你的程式？",
          options: [
            "「幫我隨便弄弄，你看著辦就好」",
            "「目標是將按鈕高度加高到 48px；請保持既有文字顏色與答題邏輯不變，只動 CSS」",
            "「你覺得怎麼美就怎麼改，全部交給你決定」",
            "「改得像大公司一樣」"
          ],
          correct: 1,
          why: "清晰的目標＋明確的邊界限制（Constraint），能把 AI 的行為鎖定在安全且可預期的範圍內！"
        }
      },
      {
        id: "i5",
        title: "程式報錯了：叫它「自己看 Log 診斷」",
        category: "自動化除錯",
        text: "當你執行程式發現噴出紅色報錯，初學者常犯的錯誤是：心急手忙腳亂地到處截圖，或是不知道該貼哪段。\n\n高手與 Agent 的協作方式是：**直接把它當醫生**！\n你可以對它說：\n<span class=\"code-snippet\">「剛剛跑測試失敗了，請你直接讀取 logs/error.log，定位出是在哪一行拋出異常，並提出修復方案。」</span>\n\nAgent 會自己開檔案、找行號、對照上下文，給出最精準的處方籤。",
        tip: "🩺 讓 AI「自己查脈搏」，比你轉述更少失真、速度更快！",
        quiz: {
          q: "當程式跑出錯誤時，最省力且高效的處理方式是？",
          options: [
            "立刻把視窗全關掉，裝作沒看見",
            "指示 AI 直接檢視最新錯誤日誌檔案，由它自主定位原因並提出最小修復補丁",
            "把專案所有檔案全部刪除手動重新寫一次",
            "去廟裡幫電腦安太歲"
          ],
          correct: 1,
          why: "Agent 具有閱讀日誌與檔案的能力，讓它直接對齊原始報錯 Log 是最快速、最不易有訊息落差的做法！"
        }
      }
    ]
  },
  advanced: {
    id: "advanced",
    name: "🧠 頂級指揮官・多模型協同與方舟心法",
    badge: "高階・架構思維",
    lessons: [
      {
        id: "a1",
        title: "三大模型兵團：Claude、Codex、Gemini 誰是主力？",
        category: "兵種特性",
        text: "在量子方舟裡，不同的 AI 夥伴有各自的絕活：\n\n• **Claude（文臣與謀士）**：文筆細膩自然、架構思考慎密，最懂人類細微的情緒與語意需求。\n• **Codex（先鋒猛將）**：寫程式極為硬核精準，跑測試、改 Bug、重構程式碼手起刀落。\n• **Gemini（巨量資料偵察兵）**：擁有幾百萬 Token 的超巨大胃口，一口氣吃下整套歷史交接單或超長數據也不會噎到，看圖辨識能力極強！",
        tip: "🏰 好的指揮官不搞「一打全」，而是把對的任務發給對的人。",
        quiz: {
          q: "如果要請 AI 針對過去一年累積的幾百份長篇歷史紀錄進行全面性的比對與彙整，派誰最省力且不會爆記憶？",
          options: [
            "擁有超長 Context 上下文窗口的 Gemini",
            "記憶槽最小、幾句話就塞滿的小模型",
            "微軟的小算盤",
            "鬧鐘"
          ],
          correct: 0,
          why: "Gemini 的強項在於吞吐百萬級 Token 的巨大上下文，非常適合長篇文檔檢索與多模態分析！"
        }
      },
      {
        id: "a2",
        title: "多 Agent 協同（Herd）：什麼叫「該問主人就停手」？",
        category: "指揮鐵律",
        text: "在多 AI 協同工作時，AI 夥伴之間可以互相叫號討論（如 herdr 系統）。\n\n但這裡有一條**最高鐵律**：\n**AI 之間互相同意，不等於主人同意！**\n\n遇到以下事項，AI 絕對不能自作主張拍板：\n1. 刪除重要歷史備份或個人資料。\n2. 改動核心交易策略或下單邏輯。\n3. 花費額外的真實金錢（如 API 額度或訂閱）。\n遇到這些分岔路，必須老老實實停下來問主人，絕不擅作主張！",
        tip: "🛡️ 永遠記住：AI 是副手，方向盤和油門永遠在主人手中。",
        quiz: {
          q: "兩個 AI 夥伴在終端裡熱烈討論後，一致認為「把專案裡去年的所有資料夾直接刪除」能讓速度變快。他們可以直接動手刪除嗎？",
          options: [
            "可以，因為兩位 AI 都很聰明且互相贊成",
            "絕對不行！重大變更與刪除關鍵資料必須停下來取得主人明確授權",
            "只要先刪一半就可以",
            "看天氣決定"
          ],
          correct: 1,
          why: "AI 之間的共識不能取代人類主人的意志！涉及重要資產、資料安全與核心方向的事項，必須由主人親自拍板。"
        }
      },
      {
        id: "a3",
        title: "記憶衛星檔心法：不要全域掃描目錄！",
        category: "專案架構",
        text: "成熟的專案可能有數百份歷史交接單與設定檔。如果每次開機都叫 AI「把整個 docs/ 目錄掃一遍」，它的 Context 會在 5 秒內被幾十萬字的歷史垃圾擠爆，荷包大失血又失智！\n\n**正確的做法是：索引 ＋ 精準衛星**。\n• 主索引（MEMORY.md）：每件事只寫一句話索引與指針。\n• 衛星小檔（memory/prj_*.md）：存詳細脈絡。\nAI 只要看索引，需要哪篇才精準打開哪篇（用 grep/rg 撈），絕不無腦全掃！",
        tip: "🎯 開機載入的每一行都是錢，能精準撈就絕不大面積翻箱倒櫃。",
        quiz: {
          q: "為什麼在專案規範中，嚴禁 AI 隨便全域瀏覽 100 多份歷史文檔？",
          options: [
            "因為舊文件會隨時間褪色",
            "因為全掃會瞬間吃光上下文記憶額度，既燒錢又讓 AI 大腦變笨",
            "因為檔案有密碼打不開",
            "為了讓檔案多曬太陽"
          ],
          correct: 1,
          why: "全域掃描會注入大量陳舊過期的無效資訊，塞爆 Context 窗口並引發嚴重的幻覺干擾！"
        }
      },
      {
        id: "a4",
        title: "指揮官心態：從「怕它出錯」到「懂得駕馭」",
        category: "修煉總結",
        text: "學習使用大模型 Agent，不是要變成死背代碼的碼農，而是學習成為一個**清醒的指揮官**。\n\n• **給它明確目標**（不要讓它盲人摸象）。\n• **立好安全防護欄**（講清楚什麼不能碰）。\n• **善用檢查點驗證**（每次改動要求自動測試）。\n\n當你學會了分段指派、隨時 /resume 接關、適時 /compact 減重，你就能躺在沙發上，優雅地指揮一群 AI 兵團替你完成各種複雜任務！",
        tip: "🌟 你是主帥，AI 是你的手腳與智庫。享受這個協同的新時代！",
        quiz: {
          q: "一個合格的高階 AI 指揮官，最核心的能力是什麼？",
          options: [
            "自己把所有底層 C 語言一行行默背出來",
            "懂得拆解目標、設定清晰邊界、適時指派適合的模型，並依驗收標準把關品質",
            "24 小時不睡覺盯著終端螢幕看",
            "完全不給 AI 任何反饋"
          ],
          correct: 1,
          why: "指揮官的核心價值在於戰略目標拆解、防護邊界設定與品質驗收把關，而非替工具做重複性苦工！"
        }
      }
    ]
  },
  yt_code: {
    "id": "yt_code",
    "name": "📺 Claude Code・官方頻道字幕版",
    "badge": "官方字幕實證",
    "lessons": [
      {
        "id": "yt_S-sYlFiGFv8",
        "title": "🎬 Claude Code 團隊如何使用 Claude Code",
        "category": "Claude Code",
        "text": "<b>Claude Code 團隊成員聊這一年的工作方式轉變：從 Claude Tag、loops、workflows 談到 code review</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Claude Code 團隊的成員，聊他們這一年自己怎麼用 Claude Code 工作。Claude Code 是 Anthropic 做的 AI 寫程式工具。影片重點不在介紹功能，而是工作方式怎麼變：以前是人下一個指令，AI 做一步；現在 AI 能自己一直跑、自己檢查。想知道 AI 工具接下來會往哪走，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=60s\" target=\"_blank\">01:00</a> 有成員約 70~80% 的工作在 Claude Tag 上完成；Claude Tag 是一個 Slack native agent，能查到產品脈絡與團隊決策。其餘約 20% 才開 TUI 或 desktop app 微調<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Tag 是住在 Slack（團隊聊天軟體）裡的 agent，也就是會自己動手做事的 AI，還查得到產品背景和團隊決策。有成員七八成的工作在聊天裡交代它就完成，只有兩成才開 TUI（終端機文字介面）或桌面版微調。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=184s\" target=\"_blank\">03:04</a> to do list 的例子：Sonnet 3.5 時代，模型給五件事常只做三件就放棄，加上 to do list 效果很好；一年後就不需要了，所以對自己做的功能不要太執著<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ to do list 就是待辦清單。在 Sonnet 3.5 那一代模型，交代五件事它常做三件就停，叫它列清單、逐項打勾很有效。一年後模型變強，就不需要了。所以自己做的功能過時了，就該放手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=337s\" target=\"_blank\">05:37</a> ask user question tool 當初很難設計到讓 Claude 呼叫得好；現在成員反而較常讓 artifact（HTML、含圖表與 mockup）來向自己提問<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ ask user question tool 是讓 Claude 停下來問你問題的功能，當初很難設計到它會在對的時機、問對的問題。現在成員反而讓它做一份 artifact（網頁形式的成品，附圖表和畫面草稿 mockup），直接在裡面向自己提問。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=430s\" target=\"_blank\">07:10</a> loops 的演進：從在筆電本機跑，到遠端 developer box，再到 Claude Code on the web 的 hosted containers；跑在雲端後可以設 routines，例如每天整理回饋、分級，並修掉有把握的問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ loops 是讓 Claude 反覆「做、檢查、再做」的循環。它從跑在自己筆電，搬到遠端開發主機，再搬到雲端代管的環境。上雲後就能設 routines（定期自動任務），例如每天整理回饋、分輕重，順手修掉有把握的問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=556s\" target=\"_blank\">09:16</a> Code review 的轉變：挑小毛病（nit pick）的事交給 Claude 自動處理，人類 reviewer 專注在大方向，例如 API 為什麼這樣設計、服務邊界為什麼劃在那裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code review 是程式合併前請人檢查。現在排版、命名這類小毛病（nit pick）交給 Claude 自動處理，人只看大方向。例如 API（程式之間溝通的接口）為什麼這樣設計，系統各部分的分工界線為什麼這樣劃。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=677s\" target=\"_blank\">11:17</a> Workflows 起源於 code review：先 fan out 找 bug，再從三種觀點做 adversarial review，篩出最需要人看的問題；同一招也能用在效能問題或 deep research<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ workflows 是把多個 AI 步驟串成一套流程，最早用在 code review。先 fan out，派一大群 AI 分頭找 bug；再做 adversarial review，從三種角度檢驗每個 bug 是不是真的，只留最該給人看的。同一招也能查效能或做深入研究。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=799s\" target=\"_blank\">13:19</a> Workflows 由 agent 寫程式來編排 subagent，結合確定性的程式碼（例如 for loop 不會漏掉項目）與 agentic 行為，讓人更信任結果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ subagent 是被派去做某一段子任務的 AI 助手。workflows 讓 AI 寫程式來指揮它們：程式管不能出錯的部分，像 for loop（逐項跑完整張清單的寫法）保證不漏；AI 管需要判斷的部分。兩者搭配，結果更可信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8&t=891s\" target=\"_blank\">14:51</a> Claude Tag 的使用者介面和 transcript 分開：Claude 透過工具在 Slack 傳訊息，看不到內部思考，但有連結可以看完整 transcript<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ transcript 是 AI 工作過程的完整紀錄。Claude Tag 是透過工具把訊息傳到 Slack，所以你在 Slack 看不到它的內部思考。想追它怎麼想、怎麼做，點訊息裡的連結就能看完整紀錄。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（產品名））：住在 Slack 裡的 Slack native agent，能查到產品脈絡與團隊做過的決策<br><b>fan out</b>（扇出／平行展開）：讓大量 agent 分頭搜尋（例如找 bug），再把結果彙整回來，類似 MapReduce<br><b>test time compute</b>（測試時運算）：花大量 inference 時間，把更多思考和運算投入同一個問題<br><b>adversarial review</b>（對抗式審查）：針對每個 bug，從三種不同觀點檢視它是不是真的 bug<br><b>routines</b>（例行任務）：Claude 跑在雲端後可以設定，例如每天看回饋、分級，並修掉有把握的問題\n\n📺 <a href=\"https://www.youtube.com/watch?v=S-sYlFiGFv8\" target=\"_blank\">How the Claude Code team uses Claude Code</a>（2026/09/02 · 22 分鐘）",
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
        }
      },
      {
        "id": "yt_b8SV4U6fEIc",
        "title": "🎬 Claude Code 的 auto mode 如何運作",
        "category": "Claude Code",
        "text": "<b>說明 auto mode 如何用 classifier 與 probe 審查動作，以及如何設定信任邊界</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是讓 Claude 直接在你電腦上讀檔、改程式、跑指令的工具。這支影片講它的 Auto Mode（自動模式，不用每一步都按同意）怎麼把關：誰負責審查、審查時看得到什麼、哪些事一定會被擋。想讓 AI 自己做事、又怕它闖禍的人，看完會比較清楚能放手到什麼程度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=0s\" target=\"_blank\">00:00</a> 研究顯示 Claude Code 有 97% 的 permission prompt 會被核准；逐一核准在多步驟任務中容易造成 approval fatigue，因此推出 Auto Mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ permission prompt 是 Claude 動手前問你「可以嗎？」的確認框。研究發現 97% 都被按同意，按到麻木（approval fatigue）就等於沒在看，Auto Mode 就是為了解決這個問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=31s\" target=\"_blank\">00:31</a> Auto Mode 不是讓 Claude 核准自己的動作，因為那等於自己寫、自己審、自己 merge PR，會帶來偏誤<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Auto Mode 不是讓 Claude 自己說了算。這就像同一個人自己寫程式、自己審、自己 merge PR（把修改併進正式版本），自己的盲點自己看不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=65s\" target=\"_blank\">01:05</a> Claude 提出的動作會交給另一個 classifier 審查。它看得到你的訊息和 Claude 的 tool calls，看不到 Claude 的推理、回覆和 tool output，會把每個動作拿來比對你的意圖<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ classifier 是另一個獨立的審查員，只看你的訊息和 Claude 要執行的操作（tool calls）。它看不到 Claude 的想法、回覆和執行結果，只比對這個動作符不符合你的意思。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=99s\" target=\"_blank\">01:39</a> 動作被拒時，Claude 通常會自己找更安全的做法，例如改推到新 branch；如果一直被拒，auto mode 會暫停，交給你自己核准<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 動作被擋下時，Claude 通常會自己換個安全的做法，例如不動主線，改推到新 branch（分支，類似另存一份副本）。如果一直被擋，就會停下來改由你親自按同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=131s\" target=\"_blank\">02:11</a> 伺服器端 probe 會掃描每個 tool result 裡的惡意指令並加上警告。在他們的評估中，同時啟用 probe 和 auto mode 後，prompt injection 攻擊成功率降到零<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ probe 在伺服器端先掃過 Claude 讀進來的網頁、檔案等內容，發現裡面藏著惡意指令就加上警告。這種偷塞指令的攻擊叫 prompt injection，他們評估時兩者一起開，攻擊成功率降到零。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=161s\" target=\"_blank\">02:41</a> deny／ask／allow rules 會先執行，接著由 tier check 分流：唯讀或可復原的動作跳過 classifier，shell 指令、web fetch 等較高風險的動作則要送審<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你設定的 deny／ask／allow rules（禁止、先問、放行的清單）最先套用，接著由 tier check 分級：只讀取或能還原的動作直接放行，下 shell 指令（直接操控電腦）、上網抓資料這類才送審。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=194s\" target=\"_blank\">03:14</a> 預設只有工作目錄和 git remotes 算內部。可以用 environment 欄位以白話描述基礎設施；admin 設在 managed settings，developer 能在 user settings 加項目，但不能刪掉 admin 的設定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設只有你的工作資料夾和 git remotes（程式碼放在網路上的存放處）算自己人。其他系統可以在 environment 欄位用白話寫明；公司管理員設好的項目，個人只能再加，不能刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc&t=255s\" target=\"_blank\">04:15</a> allow、soft deny、hard deny 只是 classifier 參考的指引，不是硬規則。要設硬性限制請用 deny rules 和 ask rules<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ allow、soft deny、hard deny 只是給 classifier 的參考方向，不保證照做。soft deny 要你明講才放行，hard deny 怎麼要求都擋；真正要守住的底線請寫進 deny 和 ask rules。</span>\n\n📘 術語<br><b>approval fatigue</b>（核准疲勞）：每個動作都要核准或拒絕，在多步驟任務中會讓人疲乏<br><b>classifier</b>（分類器）：獨立的檢查機制，會篩檢 Claude 提出的動作，比對你的意圖後核准或拒絕<br><b>probe</b>（探測器）：伺服器端機制，會在內容進入 context 前掃描 tool result 裡的惡意指令<br><b>tier check</b>（層級檢查）：決定哪些動作需要送 classifier 審查；唯讀或可復原的動作會跳過<br><b>soft deny / hard deny</b>（軟性拒絕／硬性拒絕）：soft deny 會擋住動作，除非你明確要求；hard deny 則不管你怎麼要求都擋\n\n📺 <a href=\"https://www.youtube.com/watch?v=b8SV4U6fEIc\" target=\"_blank\">How auto mode works with Claude Code</a>（2026/08/04 · 5 分鐘）",
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
        }
      },
      {
        "id": "yt_Hth_tLaC2j8",
        "title": "🎬 回顧 Claude Code 的這一年",
        "category": "Claude Code",
        "text": "<b>團隊成員回顧 Claude Code 上線一年來的變化，並分享 verification、auto mode、routines 等用法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是 Anthropic 推出的工具，讓 Claude 直接在電腦上寫程式、執行指令。這支影片是團隊回顧上線一年，分享他們怎麼帶 agent（能自己連續動手做事、不用每一步都問你的 AI）：怎麼讓它記住犯過的錯、自己檢查成果、自動接手例行工作。就算你不寫程式，也能看出「把工作交給 AI」的做法這一年怎麼變了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=31s\" target=\"_blank\">00:31</a> 最重要的觀念：Claude 每次犯錯時，不要只叫它換個做法，而是要它寫進 CLAUDE.md 或做成 skill，這樣 Claude 就能一直跑下去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 出錯時，不要只叫它換個方法。要它把正確做法寫進 CLAUDE.md（專案裡給 Claude 看的說明檔），或做成 skill（可以重複使用的操作說明包）。這樣它下次會自己照做，能獨立做得更久。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=62s\" target=\"_blank\">01:02</a> 對 agent 來說，verification 不只是 unit test、lint 或 type check，而是 agent 能不能自己把東西跑起來。例如有個 desktop development skill，會讓 Claude 啟動本機 desktop app，再用 computer use 點來點去測試<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ verification（驗證）就是確認成果真的能用。對 agent 來說，光通過程式碼的自動檢查不夠，要它自己把程式開起來。例如讓它打開桌面 App，再用 computer use（AI 自己操作滑鼠鍵盤）實際點點看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=274s\" target=\"_blank\">04:34</a> Routines：有位工程師設定 routine 監看 voice mode 相關的 ticket、GitHub issue 和 bug report，讓 Claude 主動修好並發 PR；另一個 routine 專門處理超過五小時沒人回應的 bug report<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ routine 是設定好以後會一直自動跑的任務。有位工程師讓它盯著語音功能的回報和 issue（問題單），自己修好再發 PR（送給別人審核的修改）。另一個 routine 專門接手超過五小時沒人理的 bug。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=460s\" target=\"_blank\">07:40</a> Auto mode 會把權限請求交給另一個模型做安全檢查。人在 99% 的請求都按同意時，看久了眼睛會放空，所以他們認為 auto mode 比逐一閱讀 permission prompt 更安全<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 權限請求就是 Claude 執行指令前先問你「可以嗎」。因為 99% 的請求都按同意，按久了人其實沒在看。auto mode 改成由另一個模型把關、擋下可疑的指令，所以團隊認為這樣反而更安全。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=521s\" target=\"_blank\">08:41</a> 開發 auto mode 時，團隊蒐集了數千份 transcript 讓它判斷安全與否，還請 red teamer 和內部團隊嘗試 prompt inject，再用這些結果做成 eval 來改進 auto mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊拿幾千份 transcript（AI 的工作紀錄）讓 auto mode 判斷安不安全，也請 red teamer（扮成駭客找漏洞的人）試 prompt injection（偷藏指令騙 AI），再把結果做成 eval（測驗題）來改進它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=647s\" target=\"_blank\">10:47</a> 講者認為兩次大躍進是：先從自己寫 source code 變成跟 agent 對話；現在則變成跟 loop 或 routine 對話，由它們替你 prompt Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者認為有兩次大躍進。第一次是從自己寫程式，變成跟 agent 對話。第二次是改成跟 loop（反覆自動執行的流程）或 routine 對話，由它們替你下指令給 Claude。人的角色從動手做，變成定規則。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8&t=985s\" target=\"_blank\">16:25</a> Context 觀念：現在的模型只需要最精簡的 system prompt 和最少的工具，讓模型自己想辦法把 context 拉進來；給太多 context 就像在 micromanage<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context 是 AI 做事時手上有的資料。現在的模型夠強，只要給最精簡的 system prompt（一開始的基本指示）和少量工具，讓它自己去找需要的資料就好。資料塞太多，就像主管什麼事都要管。</span>\n\n📘 術語<br><b>CLAUDE.md</b>（CLAUDE.md 設定檔）：Claude 犯錯時，要它把正確做法寫進這個檔案，下次就不會再錯<br><b>auto mode</b>（自動模式）：把權限請求交給另一個模型做安全檢查，可疑的指令會被拒絕，之後可以再手動允許<br><b>routines</b>（例行任務）：持續監看 ticket 或 bug report，自動修好並發 PR 通知你；也能 babysit 每個 PR<br><b>remote control</b>（遠端控制）：在電腦上啟動 agent 後，可以用手機遠端連進去查看進度，也能再開新的 agent<br><b>verification</b>（驗證）：對 agent 而言，重點不是 unit test 或 lint，而是 agent 能不能自己把東西跑起來\n\n📺 <a href=\"https://www.youtube.com/watch?v=Hth_tLaC2j8\" target=\"_blank\">Reflecting on a year of Claude Code</a>（2026/06/08 · 18 分鐘）",
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
        }
      },
      {
        "id": "yt_IlqJqcl8ONE",
        "title": "🎬 我們在 Anthropic 怎麼用 Claude Code",
        "category": "Claude Code",
        "text": "<b>讓 Claude 訪談你釐清需求、用 HTML 取代 markdown 規格，並把驗證內建在產出物裡</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 團隊分享他們平常怎麼用 Claude Code。核心有三招：先讓 Claude 訪談你、把需求問清楚；規格文件改用 HTML 寫；把「怎麼檢查有沒有做對」直接放進成品裡。這支很適合常覺得 AI 做出來的東西跟你想的不一樣、又要花很多時間改的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=111s\" target=\"_blank\">01:51</a> 這場工作坊以 Tariq 在舊金山的演講為基礎，他也寫成部落格文章〈The Unreasonable Effectiveness of HTML files〉，主張規格文件從 markdown 改用 HTML<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這場工作坊來自 Tariq 的演講，他也把內容寫成了部落格文章。他主張規格（寫清楚要做什麼的文件）不要再用 markdown（用 # 和 * 排版的純文字）寫，改用 HTML（網頁用的格式）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=178s\" target=\"_blank\">02:58</a> 模型越強，agent 能跑得越久。但如果方向做錯會燒掉很多 token，所以要把人工驗證盡量提前放進 HTML 規格裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent（會自己連續做事的 AI）能力越強，一次能跑越久。但方向一錯，token（AI 的計算量，也就是錢）就白花了。所以要在規格裡先留好讓人檢查的點，早點發現走偏。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=278s\" target=\"_blank\">04:38</a> 引用 Richard Sutton 的 bitter lesson：模型越強，越不該去限制它。Claude 從你身上挖出需求的能力，可能比你自己寫出需求還好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ the bitter lesson（苦澀的教訓）指的是：與其由人把規則寫死，不如讓更強的系統自己發揮。放到這裡就是：別急著自己把需求寫完，讓 Claude 反過來問你，它可能問得比你寫得還完整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=431s\" target=\"_blank\">07:11</a> 不好的提示是只寫「make it better」。好的提示是點出你在意的面向（例如受眾），但不要把結果講死，並明確要 Claude 用 ask user question tool 來訪談你<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 只說「改好一點」，Claude 不知道要往哪裡改。好的做法是點出你在意的面向（例如給誰看），但不要指定答案，並寫明要它用 ask user question tool（一題一題問你的功能）來訪談你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=491s\" target=\"_blank\">08:11</a> 講者強烈建議用 auto mode（按 shift tab 切換）；effort 官方建議設 X high，也可以設 max。/effort 調 effort，/fast 開 fast mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者大力推薦 auto mode，按 shift+tab 就能切換，用起來輕鬆很多。effort 是 Claude 想得多深，建議設 X high 或 max，用 /effort 調整。fast mode 用 /fast 開，回得比較快但比較貴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=623s\" target=\"_blank\">10:23</a> HTML 的資訊密度比 markdown 高，也更好閱讀和互動。markdown 超過約 200 行，你大概不會讀，同事更不會讀。示範用 Opus 4.7 產生四種 HTML 設計方向<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ HTML 能放表格、圖片和按鈕，同樣篇幅能塞更多資訊，而且可以點來互動。markdown 超過約 200 行，你自己大概就不會讀了。示範中用 Opus 4.7（Claude 的一款模型）做出四種設計方向。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=1051s\" target=\"_blank\">17:31</a> 元件用 data 屬性把自己的狀態發佈到 DOM，agent 直接讀這份契約就好，不用去爬 DOM。每個元件都有 schemas、fixtures 和 invariants，並用 probes 測試非 happy path 的情況<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個元件用 data 屬性（貼在元件上的標籤）公告自己的狀態，agent 直接讀就好，不用翻整個網頁。元件還附 schemas（資料格式）、fixtures（範例資料）、invariants（必守規則），並用 probes（刻意設計的測試）檢查出錯的情況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE&t=1757s\" target=\"_blank\">29:17</a> 驗證有三種執行方式：給人看的 dashboard、agent 從瀏覽器驅動（Playwright MCP），以及在 CI 用 bun verify 無頭執行。驗證過程還能錄成影片存到 S3 當證據<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 驗證有三種跑法：做成 dashboard（儀表板）給人看；讓 Claude 透過 Playwright MCP（操作瀏覽器的工具）自己去點；或在 CI（上線前的自動檢查）用 bun verify 在不開畫面的情況下跑。整個過程還能錄影，存到 S3（雲端空間）當證據。</span>\n\n📘 術語<br><b>auto mode</b>（自動模式）：用 shift tab 切換進入；講者說這讓事情輕鬆很多，大家都該用<br><b>fast mode</b>（快速模式）：用 /fast 開啟；比較貴，但很適合快速迭代規格<br><b>ask user question tool</b>（詢問使用者工具）：在提示裡明確提到它，就會觸發 Claude 逐輪訪談你、釐清需求的流程<br><b>the bitter lesson</b>（苦澀的教訓）：Richard Sutton 的觀點：比起人工預先寫死、限制系統，投入更多資料和算力最終能換到更強的能力<br><b>Playwright MCP</b>（Playwright MCP）：用來截圖、跟 HTML 互動，也讓 Claude 從瀏覽器執行驗證\n\n📺 <a href=\"https://www.youtube.com/watch?v=IlqJqcl8ONE\" target=\"_blank\">How we Claude Code</a>（2026/05/23 · 31 分鐘）",
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
        }
      },
      {
        "id": "yt_IA5LWIGqnyM",
        "title": "🎬 經營一個 AI-native 的工程組織",
        "category": "Claude Code",
        "text": "<b>Claude Code 與 Cowork 負責人分享：寫程式不再是瓶頸後，團隊規範如何重寫</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的講者負責 Claude Code 和 Cowork。Claude Code 是讓 Claude 直接幫忙寫程式的工具，Cowork 則讓 Claude 在電腦上幫忙處理一般工作。現在 AI 讓寫程式變得又快又便宜，講者分享的是整個團隊怎麼開會、怎麼審核、怎麼分工，規矩要怎麼跟著改。不是工程師也值得看，因為它示範了一種想法：做東西變便宜之後，真正卡住的地方會移到哪裡，工作方式就該跟著調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=19s\" target=\"_blank\">00:19</a> 講者 Fiona Fung 負責 Claude Code 與 Co-work 的工程和產品，之前曾在 Meta 和 Microsoft 帶團隊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fiona Fung 同時管 Claude Code 和 Cowork 兩個產品的工程與產品方向。她之前在 Meta、Microsoft 帶過團隊，所以能拿傳統大公司的做法，和 AI 時代的新做法來對照。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=201s\" target=\"_blank\">03:21</a> 寫程式、寫測試、refactoring 已經很少是慢的環節；新的瓶頸變成 verification、誰來 review、之後怎麼維護<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前最慢的是「寫」，現在 AI 寫得很快。refactoring 是指功能不變，只把程式整理乾淨。現在卡住的變成：verification（確認真的做對了）、誰有空 review（審核別人寫的東西），以及以後誰來維護。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=472s\" target=\"_blank\">07:52</a> 技術爭論改成「用程式碼說話」：做出來很便宜、爭論很昂貴。講者用 Claude 產生三個版本的 PR 跟 Boris 討論；深入的 design doc 也減少了，討論大多在 PR 或 prototype 裡進行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PR 是「我改好了，請審核後合併」的申請。與其開會爭哪個方案好，不如讓 Claude 每個方案各做一版來比，講者就做了三版跟同事 Boris 討論。做出來很便宜，吵才貴，所以長篇的設計文件也少了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=687s\" target=\"_blank\">11:27</a> Claude code review 很擅長處理 style/lint、明顯的 bug 和 spec drift（建議把 spec check in 到 codebase）；法律、風險承受度、產品品味則仍需要人把關<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 審程式很會抓寫法不統一（lint 就是自動檢查寫法規範）、明顯的錯，還有 spec drift，也就是做著做著偏離了原本的規格。所以規格最好放進程式庫讓 AI 對照。法律、能承擔多少風險、產品好不好用，還是要靠人判斷。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=779s\" target=\"_blank\">12:59</a> 工程師看重兩種人：有產品感的創意型 builder，以及有深厚系統專業的人；產品感來自 dogfooding、迭代、出貨和跟客戶聊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊最看重兩種人：有產品感、會動手做東西的人，和對系統非常懂的專家。產品感沒有捷徑，要靠 dogfooding（天天用自己的產品，內部叫 ant food）、一改再改、實際上線，還有跟客戶聊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=991s\" target=\"_blank\">16:31</a> Claude Code 的每位 manager 都先從 IC 做起，直接進 codebase，並對部分產品負責<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個團隊的主管都先當 IC，也就是自己動手做事、不帶人的個人貢獻者。主管要親自進去寫程式，也要負責一塊產品。主管自己下場，才知道現在大家實際上是怎麼做事的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=1082s\" target=\"_blank\">18:02</a> code 就是 source of truth；spec 之類的文件可以改成 skill check in 到 codebase，這樣才會持續更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 是放所有程式的地方。文件寫完常常就沒人更新，只有程式一定是最新的。所以把規格改寫成 skill（Claude 會讀、會照著做的說明檔），存進程式庫。大家天天在用，內容自然會一直被更新。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM&t=1356s\" target=\"_blank\">22:36</a> 成效指標：onboarding 上手時間下降、PR cycle time 下降（要拆成各段來看）、Claude-assisted commits 上升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 看三個數字：新人多久能上手、PR 從送出到合併要多久、多少次程式提交有 Claude 參與。前兩個要下降，最後一個要上升。PR 花的時間要拆開每一段來看，才找得到到底卡在哪。</span>\n\n📘 術語<br><b>bottleneck</b>（瓶頸）：過去工程人力很貴，所以流程都在保護這項資源；現在寫程式已經不是瓶頸了<br><b>shift left</b>（左移）：與其讓客戶或自己撞到 bug，不如靠自動化在更靠近源頭的地方就抓到<br><b>dogfooding / ant food</b>（自家產品自己用）：用自己團隊在做的產品，才能「感受到骨子裡」；Anthropic 內部叫 ant food<br><b>Claudify</b>（交給 Claude 做）：團隊原則：Claude 能做的，就讓 Claude 做，把人的頻寬空出來<br><b>source of truth</b>（唯一可信來源）：在 Claude Code 團隊指的是 code；要放在 codebase 裡才能保持最新\n\n📺 <a href=\"https://www.youtube.com/watch?v=IA5LWIGqnyM\" target=\"_blank\">Running an AI-native engineering org</a>（2026/05/22 · 26 分鐘）",
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
        }
      },
      {
        "id": "yt_0kILa02vKuI",
        "title": "🎬 安裝 Claude Code",
        "category": "Claude Code",
        "text": "<b>介紹在終端機、IDE、Desktop 與網頁上安裝和使用 Claude Code 的方法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是怎麼安裝 Claude Code。Claude Code 是 Anthropic 出的 AI 助手，可以直接讀你電腦裡的檔案、幫你改檔案。影片一次介紹了四種用法：終端機（用打字下指令操作電腦的視窗）、程式編輯器、桌面 App 和網頁版。看完你就知道自己適合哪一種，也知道裝的時候要注意哪些地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=6s\" target=\"_blank\">00:06</a> macOS、Linux、WSL 可以用 curl 指令一次裝好；也可以用 Homebrew（brew install）安裝，但 Homebrew 版不會自動更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ curl 是從網路下載東西的指令，貼一行就能裝好。WSL 是在 Windows 裡跑 Linux 的環境。Homebrew 是 Mac 常用的安裝工具，但用它裝的版本不會自己更新，要記得手動升級。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=6s\" target=\"_blank\">00:06</a> Windows 上，PowerShell 用 Invoke-RestMethod 指令，CMD 用 curl 指令；也可以用 winget 安裝，但跟 Homebrew 一樣不會自動更新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PowerShell 和 CMD 都是 Windows 內建、用來打指令的視窗。你開的是哪一個，就貼對應的那行指令。winget 是微軟的安裝工具，跟 Homebrew 一樣不會自動更新。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=37s\" target=\"_blank\">00:37</a> 到專案目錄執行 Claude，先選顏色主題，再用 Pro、Max 或 Enterprise 帳號登入，或改用 API key；組織有 Enterprise 帳號的話要選那個選項<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先進到你的工作資料夾，打 claude 啟動它。第一次會先請你選畫面配色，再登入：有訂閱就用帳號登入。API key 是一串專屬金鑰，也可以用來登入。公司有 Enterprise 的話就選那個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=37s\" target=\"_blank\">00:37</a> 在哪個目錄執行 Claude，它就能存取該目錄和底下所有子資料夾<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你在哪個資料夾啟動它，它就能看、能動那個資料夾和裡面所有的子資料夾。所以最好只在要處理的專案資料夾裡開，不要在桌面或整個使用者資料夾開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=67s\" target=\"_blank\">01:07</a> VS Code：在擴充功能搜尋 Claude Code，安裝 Anthropic 出的、有藍色勾勾的那個；裝完可能要重開，再用 Ctrl/Cmd+Shift+P 開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VS Code 是一套很多人用的免費程式編輯器。到擴充功能（外掛）裡搜 Claude Code，認明發行者是 Anthropic、有藍勾勾的那個。裝完沒出現就重開，再按 Ctrl/Cmd+Shift+P 叫出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=67s\" target=\"_blank\">01:07</a> JetBrains IDE 要從 JetBrains Marketplace 安裝 Claude Code plugin，重開 IDE 後點 Claude 圖示，就會開出終端機介面的窗格<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ IDE 是寫程式用的整合軟體，JetBrains 是一系列 IDE 的品牌。到它的外掛商店 JetBrains Marketplace 裝好 Claude Code，重開後點 Claude 圖示，就會跳出一個打字對話的窗格。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=101s\" target=\"_blank\">01:41</a> Claude Desktop 登入後，上方有個「Code」切換鈕，可以指定資料夾、調整權限，甚至在雲端環境工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Desktop 是電腦版的 App。登入後切到上方的「Code」，就能指定它處理哪個資料夾，也能設定哪些動作要先問過你，甚至可以讓它在雲端環境裡做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI&t=135s\" target=\"_blank\">02:15</a> 網頁版在 claude.ai/code，只能用 GitHub repositories；終端機版的新功能最快上線，Desktop 適合讓 Claude 在背景執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網頁版開 claude.ai/code 就能用，但只能處理放在 GitHub（存放程式專案的網站）上的專案。新功能通常最先出現在終端機版。想讓 Claude 在背景慢慢做事，就用 Desktop。</span>\n\n📘 術語<br><b>auto-update</b>（自動更新）：影片說用 Homebrew 和 winget 安裝的版本沒有自動更新功能<br><b>API key</b>（API 金鑰）：除了用 Pro、Max、Enterprise 帳號登入以外的另一種登入方式<br><b>JetBrains Marketplace</b>（JetBrains 外掛市集）：在 JetBrains IDE 安裝 Claude Code plugin 的地方\n\n📺 <a href=\"https://www.youtube.com/watch?v=0kILa02vKuI\" target=\"_blank\">Installing Claude Code</a>（2026/05/14 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_6bs5b4FltCU",
        "title": "🎬 Claude Code 如何運作",
        "category": "Claude Code",
        "text": "<b>用 agent 循環、context window、工具與權限模式說明 Claude Code 的運作方式</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片拆解 Claude Code 背後的運作方式。Claude Code 是 Anthropic 做的 AI 助手，能直接在你電腦上讀檔、改檔、跑指令。看懂之後，你會知道它為什麼會自己重試、為什麼常問你「可以嗎」，也更清楚什麼時候該出手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=5s\" target=\"_blank\">00:05</a> Claude Code 用 agent 循環運作：你輸入 query，它先收集需要的 context，再採取行動，例如編輯檔案或執行指令。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent loop（代理循環）是它做事的固定流程。接到任務後不會馬上動手，會先翻相關檔案、把狀況搞清楚，這叫收集 context（背景資料）。然後才改檔案或跑指令。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=35s\" target=\"_blank\">00:35</a> 行動後會檢查結果是否符合預期：符合就結束並等待下一個請求；不符合就重跑循環，直到結果完成並驗證。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做完不會直接交差，它會自己檢查結果對不對。對了就停下來，等你下一個指令。不對就從頭再收集資料、再修一次，一直到確認真的完成為止。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=35s\" target=\"_blank\">00:35</a> 循環進行中，你可以補充 context、中斷工作，或引導模型朝目標前進。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它在跑的過程中你可以隨時插話：補充它不知道的資訊、叫它先停，或提醒它「方向錯了，往這邊走」。不用等它全部做完才修正。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=65s\" target=\"_blank\">01:05</a> context window 決定能存放的對話、檔案內容、指令結果等資訊量；達到上限時，Claude Code 會壓縮對話，自動決定要移除或摘要哪些內容。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context window（上下文視窗）是它一次能記住的資訊量。對話、讀過的檔案、指令結果都會佔空間。滿了它會自動把部分內容濃縮或拿掉，所以很早之前講的細節可能會被淡化。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=65s\" target=\"_blank\">01:05</a> 工具是 agent 運作的基礎；目前多數 AI 助理只接收和回傳文字，中間沒有任何動作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ tools（工具）是讓 AI 真的能「動手」的功能。一般聊天型 AI 只是你打字、它回字，過程中不會去碰任何檔案或網路。有了工具，它才從只會說變成真的會做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=95s\" target=\"_blank\">01:35</a> 工具讓 agent 自行決定何時執行程式碼來完成任務，例如讀取檔案或上網搜尋；Claude Code 用語意搜尋決定何時呼叫工具。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有了工具，要不要讀檔、要不要上網查，都由它自己判斷。影片說 Claude Code 用的是語意搜尋，也就是看你話裡的意思、不只比對關鍵字，來決定當下該用哪個工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=95s\" target=\"_blank\">01:35</a> 預設權限模式下，編輯檔案或在終端機執行指令前必須取得明確許可；按 Shift + Tab 可以切換模式。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設模式下，它要改檔案，或要在終端機（用打字下指令來操作電腦的視窗）跑指令之前，都會先問你同不同意。按 Shift + Tab 可以切換到其他權限模式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU&t=125s\" target=\"_blank\">02:05</a> auto-accept 模式編輯檔案不再詢問，但執行指令仍需許可；Planning mode 先用唯讀工具擬定行動計畫。跳過權限時要小心，出錯可能較難提前發現。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ auto-accept mode（自動接受模式）：改檔案不再問你，跑指令還是會問。Planning mode（規劃模式）：只看不改，先列計畫給你看。放的權限越多越省事，但出錯也越晚才發現。</span>\n\n📘 術語<br><b>agent cycle / agent loop</b>（agent 循環）：收集 context → 行動 → 檢查結果，未達成就重來，直到完成並驗證<br><b>context window</b>（上下文視窗）：決定 Claude 能存放和檢視多少對話、檔案內容、指令結果等資訊<br><b>tools</b>（工具）：agent 運作的基礎，讓 agent 決定何時執行程式碼完成任務，例如讀檔、上網搜尋<br><b>auto-accept mode</b>（自動接受模式）：編輯檔案不再詢問，但執行指令仍會要求許可<br><b>Planning mode</b>（規劃模式）：開始前先用唯讀工具擬定行動計畫\n\n📺 <a href=\"https://www.youtube.com/watch?v=6bs5b4FltCU\" target=\"_blank\">How Claude Code Works</a>（2026/05/14 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_O0FGCxkHM-U",
        "title": "🎬 CLAUDE.md 檔案",
        "category": "Claude Code",
        "text": "<b>介紹 CLAUDE.md 怎麼讓 Claude Code 記住專案，以及怎麼寫和維護</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 CLAUDE.md：這份說明檔能讓 Claude Code（Anthropic 推出、幫你寫程式的 AI 工具）記住你的專案。看完你會知道它怎麼產生、裡面該寫什麼、怎麼維護，以後就不用每次開工都把同樣的事再交代一遍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=3s\" target=\"_blank\">00:03</a> CLAUDE.md 讓 Claude Code 對專案有持久記憶；沒有它的話，每次都得重新探索程式碼、了解相依套件和已完成的功能，有時還得自己假設<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 每次開新對話都會忘記前面的事。CLAUDE.md 就是它的 persistent memory（長期記憶）。只要先寫好專案用了哪些套件、做到哪裡，它就不用每次重新翻一遍，也不用自己亂猜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 它是放在專案根目錄的 markdown 檔，每次開 session 時 Claude Code 會自動讀取，內容會附加到你的 prompt 上，就像程式碼庫的 onboarding 腳本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它是放在專案最外層資料夾的 markdown 檔（用 # 標標題的純文字檔）。每次開 session（一輪新對話），它都會被自動讀進來，接在你的 prompt（你下的指令）後面，就像給新人的 onboarding 到職手冊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 執行 /init 指令，Claude 會根據你的程式碼庫產生一份 CLAUDE.md<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不想從頭寫的話，就在 Claude Code 裡輸入 /init 這個指令。它會自己讀過整個程式碼庫（專案裡所有的程式檔），幫你整理出第一版 CLAUDE.md，你再慢慢修改就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=35s\" target=\"_blank\">00:35</a> 範例內容包括技術架構（Next.js 15、app router、Tailwind、Drizzle ORM）、常用指令（dev server、測試、lint）和程式碼風格規則<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 範例裡寫了三類內容：技術架構（例如 Next.js 網站框架、Tailwind 排版工具、Drizzle ORM 資料庫工具）、常用指令（開本機測試網站、跑測試、用 lint 自動檢查寫法），還有程式風格規則。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=97s\" target=\"_blank\">01:37</a> CLAUDE.md 可以放進版本控制跟團隊共用。記憶檔有分層：專案層級的放在專案根目錄；使用者層級的放在設定資料夾，只給自己用，所有專案都適用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它可以放進版本控制（像 Git 這種記錄每次修改的系統），讓全隊共用同一份。記憶檔分兩層：專案層只管這個專案；使用者層放在你自己的設定資料夾，只有你用，但每個專案都適用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=97s\" target=\"_blank\">01:37</a> 如果你需要糾正 Claude（例如要它一律用 server actions、不要用 API routes），可以明確請它存進記憶，下次回到這個專案就會記得<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 的做法不合你意時，例如你要它一律用 server actions、不要用 API routes（兩種讓網頁跟後端溝通的寫法），就直接叫它把這條存進記憶，下次回到這個專案就不用再講一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=127s\" target=\"_blank\">02:07</a> 想讓 Claude 參考專案裡的文件，用 @ 符號加上檔案路徑就可以<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想讓 Claude 參考專案裡的某份文件，就打 @ 再接檔案路徑（檔案在資料夾裡的位置），例如 @docs/spec.md，它就會去讀那份檔案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U&t=127s\" target=\"_blank\">02:07</a> 建議新專案一開始先不要建 CLAUDE.md，看你在哪些地方得一直修正模型，這樣檔案才會精簡，只留必要的資訊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新專案建議先不要急著寫 CLAUDE.md。先用一陣子，看看哪些事你一直得糾正它，再把這些寫進去。這樣檔案才會精簡，只留下真正必要的資訊。</span>\n\n📘 術語<br><b>CLAUDE.md</b>（CLAUDE.md 記憶檔）：放在專案根目錄的 markdown 檔，每次開 session 時 Claude Code 會自動讀取，內容會附加到你的 prompt<br><b>/init</b>（初始化指令）：讓 Claude 根據你的程式碼庫產生一份 CLAUDE.md<br><b>persistent memory</b>（持久記憶）：CLAUDE.md 提供的專案記憶，讓 Claude Code 不用每次從頭探索程式碼庫<br><b>user-level CLAUDE.md</b>（使用者層級 CLAUDE.md）：放在設定資料夾，只給自己用，所有專案都適用，適合放個人偏好，例如程式碼註解怎麼寫\n\n📺 <a href=\"https://www.youtube.com/watch?v=O0FGCxkHM-U\" target=\"_blank\">The CLAUDE.md file</a>（2026/05/10 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_SqHsS737CeA",
        "title": "🎬 在 Google Cloud 上用 Claude 打造應用程式",
        "category": "Claude Code",
        "text": "<b>示範用 Claude Code 搭配 Google Cloud 上的 Claude 模型，從構想到部署做出一個回饋 app</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼用 Claude Code（Anthropic 的 AI 寫程式助手，你用對話請它寫程式）接上 Google Cloud（Google 的雲端服務平台）上的 Claude 模型，把一個收集回饋的 app 從點子一路做到部署上 Cloud Run（Google 代管、讓程式在網路上跑起來的服務）。影片依序扮演 PM、設計、工程、資安四個角色，讓你看到 AI 在開發的每一關各能幫上什麼忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=227s\" target=\"_blank\">03:47</a> 在 Claude Code 使用 Google Cloud 上的模型有多種設定方式，最簡單快速的是 application default credential（ADC），會自動找到你的憑證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想用 Google Cloud 上的模型，要先證明你有權限。ADC 會依你的環境自動找到你的登入憑證，你不用自己保管金鑰，也不用設定環境變數，是最省事的接法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=258s\" target=\"_blank\">04:18</a> Claude Code 新增設定精靈，可偵測專案與模型所在 region、檢查專案裡有哪些模型可用，並將模型固定下來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定精靈會一步步帶你設定。它會自動找出你的專案、模型放在哪個 region（資料中心所在的地區），列出你能用的模型，再把要用的模型固定下來，之後都用同一個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=289s\" target=\"_blank\">04:49</a> 在 Google Cloud 上用 Claude 的理由：按 token 計費、沒有訊息上限；可用 provisioned throughput；不用輪替 API key；資料留在你的專案裡；有 global 與 regional endpoint<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 按 token（AI 計算字數的單位）計費，不限訊息數；可以預留專用運算量給正式服務；API key（連線密碼）不用定期更換；資料留在專案內；endpoint（連線入口）有全球版和地區版。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=449s\" target=\"_blank\">07:29</a> PM 角色：在 CLAUDE.md 寫好指示，只靠一張手繪草圖，幾分鐘內就讓 Claude 產出 app 的 wireframe 原型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM（產品經理）先在 CLAUDE.md 寫好規則，這是 Claude 開工前會先讀的說明檔。接著只給一張手繪草圖，幾分鐘就拿到 wireframe，也就是只有版面骨架的畫面原型。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=541s\" target=\"_blank\">09:01</a> UI/UX 角色：用 plan mode 讓 Claude 在寫程式前先思考、提出計畫，確認沒問題再實作；Figma 的設計指示這次改用一份 design doc 模擬<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ UI/UX（介面與使用體驗）設計師用 plan mode：Claude 先想清楚、列出做法，你確認後它才寫程式。設計規範原本要從 Figma（常用的介面設計工具）拿，這次改用一份設計文件模擬。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=726s\" target=\"_blank\">12:06</a> Google Cloud 推出 developer knowledge API（附 MCP server）與 Google Cloud Skills：前者提供最新文件、幫忙規劃架構，後者負責個別元件的實作，例如部署到 Cloud Run<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ developer knowledge API 提供最新文件、幫忙規劃架構，透過 MCP server（AI 接工具用的插頭）取用；Skills 負責單一元件的實作，例如部署到 Cloud Run。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=879s\" target=\"_blank\">14:39</a> 軟體工程師角色：同時開三個 subagent，分別負責 API、ingestion pipeline 和 dashboard 並行實作，架構用到 Cloud Run、Firestore、BigQuery、Looker<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 工程師同時派出三個 subagent（分工的 AI 助手），分別做 API、資料匯入流程和數據看板；架構用到 Cloud Run、存資料的 Firestore、做分析的 BigQuery，以及出報表的 Looker。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA&t=1100s\" target=\"_blank\">18:20</a> 資安角色：使用 Claude Code 內建的 security review，它找到一個可能的問題並自動修好，接著部署到 Cloud Run 讓 app 上線<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 資安角色跑 Claude Code 內建的 security review（自動檢查程式有沒有安全漏洞），它抓到一個可能的問題並自己修好，最後部署到 Cloud Run，app 正式上線。</span>\n\n📘 術語<br><b>application default credential (ADC)</b>（應用程式預設憑證）：依照你使用的環境自動找到憑證（例如使用者憑證），不用輪替 API key，也不用設定環境變數<br><b>provisioned throughput</b>（預留輸送量）：替你預留一部分輸送量，適合要上線到 production 的企業應用<br><b>plan mode</b>（規劃模式）：讓 Claude 在寫任何程式碼前先思考，並提出它打算怎麼做<br><b>developer knowledge API</b>（開發者知識 API）：提供 Google Cloud 的最新文件，Claude Code 可透過 MCP server 直接取用<br><b>agent registry</b>（agent 註冊中心）：屬於 agent platform，列出 Google Cloud 原生支援的 MCP server，並說明設定方式、工具描述，也提供 observability 功能\n\n📺 <a href=\"https://www.youtube.com/watch?v=SqHsS737CeA\" target=\"_blank\">Building with Claude on Google Cloud</a>（2026/05/08 · 26 分鐘）",
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
        }
      },
      {
        "id": "yt_IkaPHiMDazM",
        "title": "🎬 Claude Code 中的 Hooks",
        "category": "Claude Code",
        "text": "<b>介紹 Hooks 如何在 Claude Code 生命週期中確定性地執行指令</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Claude Code 是 Anthropic 推出的 AI 寫程式助手，可以直接幫你改檔案、執行指令。這支影片介紹 Hooks：設定好之後，某些動作到了固定時機就「一定」會自動執行，不用靠 AI 自己記得。如果你想讓 AI 做事更穩定、少出包，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=4s\" target=\"_blank\">00:04</a> Hooks 讓你在 Claude Code 生命週期的不同時間點執行指令，關鍵差異是它是確定性的，一定會執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Hooks 就是事先設定好：流程走到某一步，就自動執行某個指令。生命週期指的是 Claude 從收到你的要求到做完的整個過程。重點在於它一定會執行，不靠 AI 記得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=4s\" target=\"_blank\">00:04</a> 在 claude.md 要求 Claude 每次編輯後跑 prettier，多數時候會照做但不一定；hook 則每次都執行、沒有例外<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ claude.md 是寫給 Claude 看的專案說明檔；prettier 是自動把程式碼排整齊的工具。寫在說明檔裡就像口頭交代，AI 偶爾會漏掉；hook 是系統強制執行，每次都會跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=34s\" target=\"_blank\">00:34</a> 常見用途：編輯檔案後自動格式化、為了合規記錄所有執行的指令、阻擋危險操作、Claude 完成任務時發通知<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常見的四種用法：改完檔案自動排版；把 Claude 執行過的每個指令記錄下來，方便公司查核；擋掉像刪除重要檔案這類危險動作；Claude 做完時跳通知，你不用一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=34s\" target=\"_blank\">00:34</a> Hooks 設定在 settings.json：選一個事件、可選擇設定 matcher 指定適用的工具，再提供要執行的指令<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ settings.json 是 Claude Code 的設定檔。設定一個 hook 分三步：選觸發時機（事件）；可以加上 matcher，指定只對哪種工具生效（工具就是 Claude 的動作，例如改檔）；最後填入要執行的指令。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=64s\" target=\"_blank\">01:04</a> 事件包括 User prompt submit、Pre-tool use、Post-tool use、Notification、Stop<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 可以選的時機有：你送出訊息時（User prompt submit）、Claude 使用工具前（Pre-tool use）和用完後（Post-tool use）、它發通知時（Notification），以及它做完停下來時（Stop）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=64s\" target=\"_blank\">01:04</a> 最常見的 hook：用 Post-tool use 搭配 edit 或 multi-edit 的 matcher，依副檔名執行 prettier、Go format、Ruff 等格式化工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 最常見的組合：Claude 改完檔案後（edit 是改一處、multi-edit 是一次改多處），依檔案類型自動跑對應的排版工具，例如 JavaScript 用 prettier、Go 用 Go format、Python 用 Ruff。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=94s\" target=\"_blank\">01:34</a> Pre-tool use hook 從 stdin 收到 JSON 格式的工具名稱與輸入；exit code 2 會阻擋並把 stderr 回饋給 Claude，exit code 0 則繼續<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Pre-tool use 會在動作前，把「要用哪個工具、要做什麼」用 JSON（一種有結構的資料格式）交給你的腳本。腳本回傳代碼 2 就擋下，並告訴 Claude 原因；回傳 0 就放行。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM&t=125s\" target=\"_blank\">02:05</a> 設定在 .Claude/settings.json 的 hooks 屬專案層級，可提交進 repo 讓全隊自動套用；用 Claude project dir 環境變數引用專案內腳本<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫在專案裡 .claude/settings.json 的 hook 只作用在這個專案，可以跟程式碼一起存進 repo（共用的程式碼倉庫），隊友拿到就自動生效。引用腳本時用 Claude project dir 這個變數代表專案位置，路徑就不會出錯。</span>\n\n📘 術語<br><b>Hooks</b>（掛鉤）：在 Claude Code 生命週期不同時間點執行指令，具確定性，每次都會執行<br><b>matcher</b>（比對器）：可選設定，指定 hook 適用於哪個工具，例如 edit 或 multi-edit<br><b>Pre-tool use</b>（工具呼叫前）：在工具呼叫前執行，可用 exit code 2 阻擋該工具呼叫<br><b>Post-tool use</b>（工具呼叫後）：在工具呼叫完成後執行，適合自動格式化與記錄<br><b>deterministic</b>（確定性的）：一定會執行、沒有例外，不像寫在 claude.md 裡的指示有時不會被執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=IkaPHiMDazM\" target=\"_blank\">Hooks in Claude Code</a>（2026/05/07 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_DlTCu_pNDHE",
        "title": "🎬 Boris Cherny 與 Jarred Sumner 的現場寫程式實錄",
        "category": "Claude Code",
        "text": "<b>Bun 團隊示範用 Claude 自動重現 issue、送 PR、做 code review 的完整閉環流程</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Boris Cherny（Claude Code 團隊）和 Bun 的創辦人 Jarred Sumner 在影片裡現場示範怎麼用 Claude 維護 Bun。Bun 是一套用來執行 JavaScript 程式的工具。從有人回報問題開始，重現 bug、送出修改提案 PR（改程式的申請單，要審過才會併進正式版本），到交給其他機器人做 code review（併入前的審查），這些步驟幾乎都由 AI 包辦。這支影片值得看，是因為它示範的不只是叫 AI 寫一段程式。它是把 AI 放進一條每一關都有檢查的流程，讓 AI 自己把整件事做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=128s\" target=\"_blank\">02:08</a> Bun 的 repo 每次有人開 issue，Claude bot（Robobun）就會自動嘗試重現問題，並自動送出 PR<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有人在 Bun 的專案開 issue（回報問題的單子）時，Robobun 會先自己把 bug 重演一遍，確認真的有這個問題，再修好並送出 PR。Robobun 是 Bun 團隊的 Claude 機器人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=165s\" target=\"_blank\">02:45</a> PR 一定要附測試：測試必須在舊版 Bun 失敗、在 debug branch 通過，bot 才能送出 PR<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 測試是一小段自動檢查用的程式。規定是測試要在舊版失敗，證明 bug 真的存在，又要在 debug branch（專門修這個 bug 的分支）通過，證明真的修好了。兩個條件都成立，才能送出 PR。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=230s\" target=\"_blank\">03:50</a> 最近三個月，Robobun 在 main 分支的貢獻量已經超過 Jarred 本人，而且它的 PR 還沒全部 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ main 分支是專案的正式主線版本。最近三個月，Robobun 併進主線的程式比 Jarred 本人還多，而且還有一批 PR 在排隊等 merge（合併進主線）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=294s\" target=\"_blank\">04:54</a> Code Rabbit 跟 Claude code review 兩個 bot 會互相來回討論。Code Rabbit 擅長抓風格問題和是否遵守 CLAUDE.md，Claude code review 擅長找需要完整 context 才看得出來的邊界情況<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Code Rabbit 和 Claude code review 是兩個審查機器人，會互相回覆討論。前者專門挑寫法風格，也檢查有沒有照 CLAUDE.md（寫給 Claude 看的專案守則）；後者會看整個專案的來龍去脈，抓出容易漏掉的特殊狀況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=525s\" target=\"_blank\">08:45</a> CLAUDE.md 裡寫清楚怎麼 build、怎麼寫測試和跑測試、資料夾結構跟以前踩過的坑。只要發現自己一直重複講同一件事，就該寫進 CLAUDE.md<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CLAUDE.md 裡要寫：怎麼 build（把程式碼組成能執行的軟體）、怎麼寫和跑測試、資料夾怎麼分，還有以前踩過的雷。只要同一件事你跟 Claude 講了好幾次，就該寫進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=621s\" target=\"_blank\">10:21</a> 讓 agent 能讀 CI 錯誤和 build log，自己跑完寫程式、測試、監看 CI 整個循環，交到人手上時就能有信心 merge<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CI 是每次改完程式就自動執行的檢查流程，build log 是組建過程留下的紀錄。讓 AI 自己讀懂這些錯誤、自己修，一路跑到全部通過，交給人的時候就能放心合併。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=1205s\" target=\"_blank\">20:05</a> hill climbing：給模型一個指標加上驗證方法，它就會一直迭代到達標，例如讓 Claude 把圖片處理做得比 sharp 更快<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ hill climbing 就像爬坡，一步一步往更好的方向走。給 AI 一個能量化的目標和檢查方法，它就會一直改到達標。例如拿 sharp（常用的圖片處理工具）當標竿，叫 Claude 做得比它快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE&t=1330s\" target=\"_blank\">22:10</a> Jarred 用 auto mode 處理權限，不用一直等人按核准，所以能讓 Claude 連續跑好幾個小時；他也在用 no flicker mode<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ auto mode 讓 Claude 不用每一步都停下來等人按核准，所以可以自己連續跑好幾個小時。no flicker mode 是改寫過的畫面顯示方式，跑再久也不會越來越吃資源，還能用滑鼠點。</span>\n\n📘 術語<br><b>Robobun</b>（Robobun（Bun 的 bot））：Bun 的 Claude bot，會自動重現 issue 並送出附測試的 PR，也可以在 Discord 或 Slack 上 @ 它<br><b>hill climbing</b>（爬山法）：給模型一個指標和驗證方法，讓它一直迭代到達成指標<br><b>auto mode</b>（自動模式）：權限處理模式，Claude 不會卡在權限請求，能連續執行好幾個小時<br><b>no flicker mode</b>（無閃爍模式）：改寫過的 CLI renderer，採用虛擬捲動，記憶體和 CPU 用量固定，還支援滑鼠點擊<br><b>adversarial code review</b>（對抗式程式碼審查）：Boris 隨口想到的名稱，用來指 bot 修 bug、code review bot 來回審查的這種模式\n\n📺 <a href=\"https://www.youtube.com/watch?v=DlTCu_pNDHE\" target=\"_blank\">Live coding session with Boris Cherny and Jarred Sumner</a>（2026/05/06 · 32 分鐘）",
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
        }
      },
      {
        "id": "yt_91AJ0cpgLlQ",
        "title": "🎬 Anthropic 如何在 Product Management 中使用 Claude",
        "category": "Claude Code",
        "text": "<b>Anthropic 的 PM 示範用 Claude Code 分析產品資料，以及產生 e-bells 測試案例</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 的 PM（產品經理，負責決定產品要做什麼、怎麼做的人）示範怎麼用 Claude Code 工作。Claude Code 是 Anthropic 的 AI 工具，能直接在電腦上幫你寫程式、跑分析。影片裡示範了兩件事：分析產品資料，和產生測試題。就算你不是工程師，也能看到 AI 怎麼讓人少等別人、自己把事情做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=1s\" target=\"_blank\">00:01</a> PM 可以先用 Claude 測試產品想法，再找其他人加入，因此能更快地迭代，也更能獨立作業。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有新點子時，PM 可以先自己丟給 Claude 試做，覺得可行再找同事一起做。這樣不用每一步都等別人，事情推得比較快，也比較不用依賴別人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=1s\" target=\"_blank\">00:01</a> PM 取得資料通常很麻煩：多半得請 data science 同事幫忙，不然就是自己寫基本 SQL，去查不太熟的資料庫。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM 想看數據常常卡住：要嘛請 data science（數據分析團隊）幫忙查，要嘛自己寫 SQL（跟資料庫要資料的查詢語言）。偏偏 PM 又不熟公司的資料庫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=31s\" target=\"_blank\">00:31</a> Data science 團隊架設了 BigQuery MCP，把所有 BigQuery 產品資料表接到 Claude Code。這樣不必會寫 SQL，只要負責解讀資料和結果。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ BigQuery 是 Google 的雲端資料庫；MCP 是讓 Claude 接上外部工具和資料的方式。數據團隊把兩個接好後，PM 用講的就能查資料，SQL 交給 Claude 寫，自己專心看懂結果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=62s\" target=\"_blank\">01:02</a> 示範：用 Claude 產生的 synthetic data，分析過去 3 個月 dark mode 使用比例。Claude 主動加上 7-day rolling average 和整體平均。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範用的是 synthetic data（格式像真的、但其實是造出來的資料），看過去三個月有多少人用深色模式。Claude 還主動加了 7 天移動平均（把每天的起伏抹平、看出趨勢）和整體平均。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=93s\" target=\"_blank\">01:33</a> 接著請 Claude 依 plan type 畫出 light／dark mode 使用情況。Claude 會先徵求修改許可，講者說自己做可能要花好幾個小時。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 再請 Claude 按 plan type（使用者訂的方案類型）分開畫淺色和深色模式的使用圖。Claude 修改檔案前會先問可不可以。講者說這種圖自己做可能要好幾個小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=93s\" target=\"_blank\">01:33</a> 團隊也用 Claude 產生 e-bells（評估 AI 系統和 AI 產品的方法）：提供情境和幾個範例，就能擴充到大約 50 個測試案例。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ e-bells（業界一般寫作 evals）是檢查 AI 產品表現好不好的測試方法。團隊給 Claude 情境和幾個範例，它就能擴充出大約 50 題測試案例，不用一題一題自己寫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=123s\" target=\"_blank\">02:03</a> 講者希望 PM 把更多時間花在產品策略、客戶對話和決策上，少花時間在協調和營運。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者希望 PM 把時間花在想產品方向、跟客戶聊、做決定。協調人力、追進度、處理流程這類瑣事，能少就少。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ&t=153s\" target=\"_blank\">02:33</a> 講者認為這不只是自動化，而是擴展了自己獨立完成事情的能力。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他強調重點不只是讓機器代勞。以前要靠別人才做得到的事，現在自己就能完成，一個人能做的事變多了。</span>\n\n📘 術語<br><b>BigQuery MCP</b>（BigQuery MCP）：由 data science 團隊架設，把所有 BigQuery 產品資料表連接到 Claude Code<br><b>e-bells</b>（e-bells（字幕原文拼法））：一種評估 AI 系統和 AI 產品的方法<br><b>synthetic product data</b>（合成產品資料）：示範前用 Claude 產生，內容是某產品的 light mode 與 dark mode 使用資料<br><b>7-day rolling average</b>（7 日移動平均）：講者沒有要求，Claude 自己加到圖表裡的項目之一\n\n📺 <a href=\"https://www.youtube.com/watch?v=91AJ0cpgLlQ\" target=\"_blank\">How Anthropic uses Claude in Product Management</a>（2026/03/26 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_Ko7_tC1fMMM",
        "title": "🎬 使用 Claude Code Remote Control",
        "category": "Claude Code",
        "text": "<b>用 remote control 從 Claude Code web 或手機 Claude app 接續電腦上的 Claude Code session</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Code 的 Remote Control 功能：電腦上正在進行的 Claude Code 工作，可以改用手機或網頁接著做。適合常讓 Claude 跑比較久的任務、又不想一直坐在電腦前等的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=6s\" target=\"_blank\">00:06</a> remote control 讓你用 Claude Code web 或手機上的 Claude app 連到自己電腦上正在跑的 Claude Code session，接著做下去<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是在你電腦上幫你寫程式、改檔案的 AI 助手；session 是一段進行中的工作。Remote Control 讓你離開電腦後，也能用網頁或手機接著做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=37s\" target=\"_blank\">00:37</a> 到專案資料夾執行 Claude remote control，會開一個新 session 並給一個 URL；按空白鍵會出現 QR code，可以用手機掃<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在專案資料夾輸入 claude remote control，會開一個新的 session，並給你一個網址；按空白鍵會跳出 QR code，用手機一掃就連上了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=37s\" target=\"_blank\">00:37</a> 如果已經在 Claude Code session 裡，輸入 /remote control 就能看到 URL，把 session 交給遠端裝置<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果已經在 Claude Code 裡做到一半，不用重開。輸入 /remote control 就能拿到網址，把這段工作交給手機或網頁接手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=67s\" target=\"_blank\">01:07</a> URL 只是為了方便；Claude Code 綁定你的 Claude 帳號，所以不點連結、直接在手機上開也可以<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 網址只是捷徑。Claude Code 綁定你的 Claude 帳號，手機 app 只要登入同一個帳號，直接打開就找得到這段工作，不點連結也可以。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=67s\" target=\"_blank\">01:07</a> 連上後的體驗跟平常一樣，可以用同樣的工具、MCP servers、設定和檔案系統；所有東西仍在你的電腦上執行，不會移到雲端<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 手機只是遙控器，真正做事的還是你的電腦。你裝的工具、MCP servers（讓 Claude 連到外部服務的外掛）、設定和檔案都照常能用，資料不會搬上雲端。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> 對話會在各裝置間同步，在手機 Claude app 輸入的內容會即時出現在 terminal<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩邊是同一段對話：你在手機打的字，會馬上出現在電腦的 terminal（輸入指令的文字視窗）裡，回到座位就能直接接著看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> 預設每次都要指定是否開 remote control；可以在 /config 裡設定成所有 session 都啟用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 預設每次開 session 都要自己決定要不要開遠端。嫌麻煩的話，到 /config（Claude Code 的設定選單）改成所有 session 都自動啟用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM&t=97s\" target=\"_blank\">01:37</a> spawn mode 可以從遠端建立新 session：執行 Claude remote control 後，在 web 或手機點 environment 按鈕、選你的裝置，就能開多個 Claude Code instance。字幕說錄影當下開放給 Max、Team、Enterprise 使用者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ spawn mode 能從遠端開新工作：電腦跑 remote control 後，在手機或網頁點 environment 選你的電腦，就能同時開好幾個 Claude Code。錄影時只開放 Max、Team、Enterprise 用戶。</span>\n\n📘 術語<br><b>Remote Control</b>（遠端控制）：用 Claude Code web 或手機 Claude app 連到電腦上執行中的 Claude Code session，接著做下去<br><b>spawn mode</b>（產生模式）：從遠端建立新 session，可以開多個 Claude Code instance<br><b>/config</b>（設定指令）：可以在這裡開啟「所有 session 都啟用 remote control」\n\n📺 <a href=\"https://www.youtube.com/watch?v=Ko7_tC1fMMM\" target=\"_blank\">Using Claude Code Remote Control</a>（2026/03/17 · 2 分鐘）",
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
        }
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
        "text": "<b>介紹 Claude Managed Agents 的架構，並實作一個處理事故的 SRE agent</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Managed Agents：Anthropic 提供代管服務，幫你把 AI agent（會自己查資料、用工具把事情辦完的 AI）放到線上執行。影片也示範做一個處理系統事故的 agent。適合想了解「AI 自己去做事」背後怎麼運作的人，看完會知道哪些麻煩事現在可以交給官方處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=144s\" target=\"_blank\">02:24</a> 演進歷程：2023 年的 Messages API 只提供模型本身，其他元件都要開發者自己做。後來的 agent SDK 可以用程式呼叫 Claude Code，但 hosting 和 scaling 仍要自己處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 2023 年的 Messages API（讓程式跟模型對話的介面）只提供模型，其他部分都要自己做。後來的 agent SDK（開發工具包）可以用程式操作 Claude Code，但架伺服器和使用量變大時的擴充，還是要自己處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=237s\" target=\"_blank\">03:57</a> Claude Managed Agents 由 Anthropic 負責 scaling，並提供專用 harness、sandboxing、observability 和 tool runtime。開發者只要專心設定任務、agent 和自訂工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 現在擴充由 Anthropic 負責，還附上 harness（管模型怎麼跑任務的外框程式）、隔離的安全執行區、監看它在做什麼的工具，以及執行工具的環境。開發者只要交代任務、設定 agent 和自訂工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=299s\" target=\"_blank\">04:59</a> harness 要跟著模型一起演進：Sonnet 4.5 有 context anxiety（提早收尾），團隊在 harness 裡加了緩解措施。Opus 4.5 沒有這個行為，那些措施就用不到了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 外框要配合模型調整。Sonnet 4.5 有 context anxiety：記憶空間（context window）明明還夠，就急著收尾。團隊在外框加了對策，換成 Opus 4.5 沒這毛病，對策就用不到了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=360s\" target=\"_blank\">06:00</a> 三大資源：agent 定義角色和能力（model、MCP servers、skills），environment 是 agent 的「手」和執行容器，session 把兩者綁在一起<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 三個組件：agent 決定用哪個模型、接哪些 MCP servers（連接外部工具的標準接口）和 skills（事先寫好的做事方法）；environment 是它動手做事的工作空間；session 把兩者配成一次實際的工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=514s\" target=\"_blank\">08:34</a> 把 agent loop 跟工具執行（大腦和手）拆開，憑證更安全，P95 的 time to first token 也降低超過 90%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 負責思考的部分和動手執行的部分分開，密碼、金鑰這類憑證比較不容易外洩。反應也變快：P95（最慢 5% 請求的門檻）從送出到出現第一個字的時間，縮短超過九成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=757s\" target=\"_blank\">12:37</a> 實作：用 Claude Opus 4.7 建立 SRE agent，system prompt 很簡單，並給它 get metrics、recent deploys、get diff 等工具來 debug 事故<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範用 Claude Opus 4.7 做一個 SRE（負責讓線上服務穩定、出事時救火的角色）agent。system prompt（給 AI 的基本工作說明）很短，重點是給它查數據、看最近上線紀錄、比對程式改動的工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=1042s\" target=\"_blank\">17:22</a> session 的溝通單位是 event（使用者訊息、工具呼叫、agent 回應），不是 tokens in／tokens out。event 可以即時串流給使用者，也能用在 observability<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 裡的溝通單位不是 tokens（模型處理文字的小單位），而是一件件 event：你說了什麼、它用了哪個工具、它回了什麼。這些 event 可以即時顯示給使用者，事後也能拿來查它做了什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA&t=1846s\" target=\"_blank\">30:46</a> session 有 idle、running、rescheduling、terminated 等狀態，可以接 webhook，依外部事件恢復或啟動 session<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 像一張工單，有閒置、執行中、重新排程、已結束等狀態。可以接 webhook（外部系統有動靜時自動通知的機制），例如監控系統一警報，就自動叫醒或開一個 session 去處理。</span>\n\n📘 術語<br><b>context anxiety</b>（context 焦慮）：Sonnet 4.5 的一種行為：context window 還有空間，Claude 就提早收尾任務<br><b>environment</b>（環境）：agent 的「手」，提供空間和容器，讓 agent 代替你執行動作<br><b>session</b>（工作階段）：把 agent 和 environment 綁在一起，並把 event 串流回給使用者<br><b>outcomes</b>（成果目標）：為 agent 的產出定義 rubric，agent 會自己決定要做哪些工具呼叫來達成結果<br><b>vaults</b>（憑證保管庫）：憑證加密存放在另一個 endpoint，可以按使用者、按 session 管理\n\n📺 <a href=\"https://www.youtube.com/watch?v=19HDQ9HppOA\" target=\"_blank\">Ship your first Managed Agent</a>（2026/05/26 · 37 分鐘）",
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
        }
      },
      {
        "id": "yt_IGo225tfF2I",
        "title": "🎬 讓 agent 自我學習的 Memory 與 Dreaming",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 的 memory 與 dreaming，讓 agent 能跨任務持續學習</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Managed Agents 的兩個新功能：memory 和 dreaming。Claude Managed Agents 是 Anthropic 提供、幫你執行 agent 的平台；agent 是能自己一步步把任務做完的 AI 助手。有了這兩個功能，agent 不用每次從零開始，會越做越上手。想知道 AI 怎麼記取教訓的人，很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=167s\" target=\"_blank\">02:47</a> Memory 讓 agent 把先前任務的經驗帶到下一個任務，目標是每做一個任務表現就更好，並能跨環境、跨 agent 學習<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Memory 就是讓 agent 把做過任務的心得存下來，下次直接參考，就像新人寫工作筆記。目標是每做一次就更好，而且經驗能分享給別的環境、別的 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=261s\" target=\"_blank\">04:21</a> Memory 已在 Claude Managed Agents 推出，支援 multi-agent 系統；Rakuten 在正式環境的 first pass errors 下降 97%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這個功能已經正式上線，也支援 multi-agent，也就是好幾個 agent 分工合作。Rakuten 實際上線使用後，first pass errors（第一次交出來就出錯）少了 97%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=352s\" target=\"_blank\">05:52</a> 設計理念是「別擋 Claude 的路」：跟 skills 一樣，memory 以檔案系統的形式呈現給 Claude，讓它用 bash、grep 讀寫和整理檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做法是不替 Claude 設限。記憶直接做成一堆檔案，跟 skills（教 Claude 做事的說明檔）一樣。Claude 自己用 bash（下指令）和 grep（搜尋文字）翻找、改寫、整理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=445s\" target=\"_blank\">07:25</a> 多個 session 可以共用同一個 memory store，並分成 read-only 與 read-write scope，形成階層（例如全組織共用的唯讀 memory）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ session 是 agent 的一次工作階段。多個 session 可以共用同一個 memory store（記憶庫），並設定只能看或可以改。例如全公司規章大家只能讀，各組筆記自己可以改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=475s\" target=\"_blank\">07:55</a> 用 optimistic concurrency control 避免 agent 互相覆寫；另外還有版本控制、diff、寫入歸屬，以及可執行 CRUD、匯出、redaction 的獨立 API<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 同時改記憶時，optimistic concurrency control 會在寫入前確認沒被別人先改，避免互相蓋掉。還能看版本、diff（改了哪裡）和作者，也能用 API（程式操作介面）增刪查改、匯出、遮蔽敏感資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=636s\" target=\"_blank\">10:36</a> Dreaming 目前是 research preview，能分析跨 agent、跨 session 的錯誤模式，並自動整理 memory；Harvey 的法律 benchmark 完成率提高到 6 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Dreaming 是回頭檢視所有 agent、所有 session 犯過的錯，找出重複出現的模式，再自動整理記憶。目前是 research preview（試用階段）。Harvey 在法律 benchmark（測驗題組）的完成率變成 6 倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=703s\" target=\"_blank\">11:43</a> Dreaming 是 out of band 的批次流程，可以臨時手動、每晚、每小時或在 session 結束時觸發，全部由 API 控制，最後產出經過驗證的 memory snapshot<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ out of band 指的是在 agent 工作之外另外跑，而且是整批處理。可以手動、每晚、每小時或 session 結束時啟動，全都用 API 控制。最後產出驗證過的 memory snapshot（某個時間點的記憶定版）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I&t=766s\" target=\"_blank\">12:46</a> 跟 agent loop 脫鉤的好處：看得出跨 agent 的模式、目標更明確，而且不會增加 agent 的延遲<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent loop 是 agent 思考、動手、看結果的循環。Dreaming 不塞在這個循環裡，好處是能綜觀所有 agent 找出共同問題，目標也更單純，而且不會拖慢 agent 的回應速度。</span>\n\n📘 術語<br><b>Memory store</b>（記憶庫）：以檔案形式存放的 memory，可以設成 read-only 或 read-write，讓多個 session 共用<br><b>Dreaming</b>（作夢（記憶整理流程））：找出跨 agent、跨 session 的錯誤模式，並自動整理、策劃 memory 的流程<br><b>Optimistic concurrency control</b>（樂觀並行控制）：用來避免 agent 互相覆寫彼此對 memory 的修改<br><b>Out of band</b>（頻外執行）：Dreaming 在 session 之外執行、完全脫鉤，不在 hot path 上，所以不增加延遲\n\n📺 <a href=\"https://www.youtube.com/watch?v=IGo225tfF2I\" target=\"_blank\">Memory and dreaming for self learning agents</a>（2026/05/21 · 21 分鐘）",
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
        }
      },
      {
        "id": "yt_5YHIrTYxM3w",
        "title": "🎬 在 AWS 上使用 Claude 打造 AI：從程式碼到協作編排（orchestration）",
        "category": "Agents 與 API",
        "text": "<b>介紹在 AWS 上使用 Claude 的三種方式與優點，並說明 Claude Code on AWS 工作坊</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是公司怎麼在 AWS（Amazon 的雲端服務）上用 Claude：有三種接法，各有什麼好處，最後再介紹一個教大家用 Claude Code 的實作工作坊。如果你的公司本來就用 AWS，或 IT 部門擔心資料安全，看這支就會知道「在公司裡正式導入 Claude」大概是什麼樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=136s\" target=\"_blank\">02:16</a> Amazon 對 Anthropic 投資了數十億美元，也是 Anthropic 的主要雲端供應商；Anthropic 承諾在 AWS 上使用超過 100 billion 的用量<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Amazon 是 Anthropic（做 Claude 的公司）的大投資者，也是它主要的雲端供應商，Claude 大多跑在 AWS 的機器上。Anthropic 也承諾在 AWS 上用超過 100 billion 的規模，兩家綁得很深。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=166s\" target=\"_blank\">02:46</a> Project Rainier 是規模最大的 AI 運算基礎設施之一，用來訓練和部署 Claude 模型。另外也用 Amazon 自研晶片 Trainium，目前已經是第三代<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Project Rainier 是 Amazon 蓋給 Claude 用的超大型運算設施，訓練模型和讓大家使用都在這裡跑。Trainium 是 Amazon 自己設計的 AI 晶片，現在出到第三代。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=227s\" target=\"_blank\">03:47</a> Bedrock 是完整平台，可以微調模型，講者說它是唯一能在雲端 fine-tune Haiku 的供應商；資料可以留在 AWS 邊界內，平台有 zero operator access<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Bedrock 是 AWS 上使用 AI 模型的平台。講者說，只有它能在雲端 fine-tune（拿自己的資料再訓練）Haiku（Claude 小而快的型號）。資料不會離開 AWS，而且 zero operator access 代表兩家公司的員工都看不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=380s\" target=\"_blank\">06:20</a> Bedrock 還有評估、prompt 最佳化、fine-tuning、蒸餾、knowledge bases、Guardrails 等功能；AgentCore 可搭配 LangChain、Crew AI 和 Claude Agent SDK<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Bedrock 還能測模型表現、改寫 prompt、做蒸餾（讓小模型學大模型的本事），也能接 knowledge bases（讓 AI 查你的文件）、設 Guardrails（擋掉不當內容、遮住個資）。AgentCore 是放 agent（會自己動手做事的 AI）的雲端空間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=471s\" target=\"_blank\">07:51</a> 在 AWS 用 Claude 的好處：資料主權、帳單統一、可用 CloudWatch／CloudTrail 做觀測、有 SLA、內建驗證整合（SSO、OAuth、IAM），還有 private link<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 走 AWS 的好處：資料留在公司自己控管的地方，AI 費用併進原本的帳單。可以用 CloudWatch／CloudTrail 查用量和操作紀錄，有 SLA（服務穩定度的保證），登入權限沿用現有設定，還能走不經過公開網路的 private link。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=624s\" target=\"_blank\">10:24</a> 三種用法：一是透過 Bedrock（已加入 Opus 4.7 和 messages API）；二是 Claude platform on AWS（已正式上線，功能和 Anthropic 一致）；三是 Desktop 應用程式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一種走 Bedrock，已經能用 Opus 4.7，也支援 messages API（寫程式呼叫 Claude 的標準格式）。第二種是 Claude platform on AWS，用起來跟官方一樣，但帳單和權限歸 AWS 管。第三種是 Desktop 桌面程式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=777s\" target=\"_blank\">12:57</a> 工作坊需要兩樣東西：AWS 帳號和 Claude Code。模組二用 Playwright MCP 和 Git 工作流程，模組三練習 subagent、plugins、自訂 skills、hooks<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要先準備 AWS 帳號和 Claude Code（在終端機裡幫你寫程式的 Claude）。模組二用 Playwright MCP 讓 Claude 操作瀏覽器，並用 Git 管版本；模組三練習 subagent（分工的小幫手）、plugins、skills、hooks 這些擴充功能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w&t=1111s\" target=\"_blank\">18:31</a> 手動設定 Claude Code 時，可設定指向 Bedrock 的 region 和預設模型，也有降低 token 用量、rate limiting、啟用遙測回報等參數<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 自己設定時，要指定連到哪個 region（AWS 機房所在的地區）、預設用哪個模型。也可以調參數少用一點 token（模型計算文字量和費用的單位）、限制請求頻率，或打開遙測，回報使用狀況。</span>\n\n📘 術語<br><b>Guardrails</b>（防護機制）：可以套用內容過濾、封鎖特定主題、自動遮蔽 PII 等敏感資料，也能透過 grounding 控制幻覺<br><b>Amazon Bedrock AgentCore</b>（Bedrock 代理執行平台）：在雲端安全託管 agent 的基礎設施，相容 LangChain、Crew AI、Claude Agent SDK 等框架<br><b>Zero operator access</b>（零營運人員存取）：Amazon 和 Anthropic 都沒有人能存取這些執行個體，資料完全保持私密<br><b>Trainium</b>（Trainium 晶片）：Amazon 專為 Claude 模型打造的客製晶片，目前是第三代<br><b>Claude platform on AWS</b>（AWS 上的 Claude platform）：體驗和直接使用 Anthropic 相同，但帳單和存取控制都在 AWS；AWS 當 gateway 把請求轉給 Anthropic\n\n📺 <a href=\"https://www.youtube.com/watch?v=5YHIrTYxM3w\" target=\"_blank\">AI with Claude on AWS: From code to orchestration</a>（2026/05/20 · 19 分鐘）",
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
        }
      },
      {
        "id": "yt_TQd_YQvydVg",
        "title": "🎬 在 Microsoft Foundry 中使用 Claude 打造 AI agents",
        "category": "Agents 與 API",
        "text": "<b>Workshop 實作：在 Microsoft Foundry 部署 Claude，建立 agent，再透過 MCP 接上工具</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是一堂跟著做的實作課（Workshop），示範在 Microsoft Foundry（微軟用來做 AI 應用的雲端平台）上部署 Claude，做成 agent（能自己分步驟做事、會用工具的 AI 助理），再用 MCP 幫它接上工具。想知道企業裡的 AI 怎麼從只會聊天變成真的能辦事，這支會從頭到尾走一遍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=50s\" target=\"_blank\">00:50</a> Workshop 目標：在 Microsoft Foundry 部署 Claude 模型，把模型接進 agent，再讓 agent 使用工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 整堂課分三步：先在 Foundry 部署 Claude，也就是把它放到平台上讓程式能用；再把它包成 agent；最後讓 agent 學會拿工具做事，例如查資料、下訂單。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=111s\" target=\"_blank\">01:51</a> Agentic 系統有三個新挑戰：長 context 的多步推理；系統要可靠、有 observability、安全；要能連接各種工具、外部系統和資料來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 讓 AI 自己跑多步驟任務有三個難處：要讀懂很長的 context（對話和資料內容）一路推理；要穩定、安全，還要有 observability（看得到每一步在做什麼）；也要接得上各種系統。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=202s\" target=\"_blank\">03:22</a> Microsoft Foundry 是建構 AI 應用與 agents 的統一平台，包含 Foundry models（如 Claude）、agent service、工具與整合、fine-tuning 等機器學習服務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Foundry 是一站式工作台：選模型（Claude 是其中之一）、agent service（專門執行 agent 的服務）、接工具，連 fine-tuning（用自己的資料再訓練模型）都在同一個地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=233s\" target=\"_blank\">03:53</a> Foundry 支援超過 1,400 個內建 connectors 和 MCP 工具，agent 可以接上 SAP、ServiceNow 等真實系統<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ connector 是現成的連接器，Foundry 內建超過 1,400 個，加上 MCP 工具，agent 能接上公司真正在用的系統，例如 SAP（企業資源管理）、ServiceNow（IT 服務工單）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=265s\" target=\"_blank\">04:25</a> Foundry 內建安全、observability、governance，並整合 Microsoft Defender、Microsoft Purview 和 Entra ID<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ governance 是規定誰能用、怎麼用的管理規則。Foundry 內建這些管理、安全和監看功能，也接上微軟的 Defender（資安防護）、Purview（資料管理）和 Entra ID（帳號與權限）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=759s\" target=\"_blank\">12:39</a> 在 Foundry 的 models 頁面選 Claude Sonnet 4.6 會開啟 playground，可以和模型對話、更換 system prompt、比較不同模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在模型頁點 Claude Sonnet 4.6 會進到 playground（試玩區），不用寫程式就能直接聊天、改 system prompt（給 AI 的角色和規則），也能跟別的模型比較。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=1001s\" target=\"_blank\">16:41</a> 在 .env 填入 target URI 與 API key 時，endpoint 要刪掉結尾的 v1/messages，讓它以 Anthropic 結尾<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ .env 是存連線設定的小檔案。要填 API key（通行密碼）和 target URI（模型的網址）。網址結尾的 v1/messages 要刪掉，讓它停在 anthropic，這一步很容易漏掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg&t=1309s\" target=\"_blank\">21:49</a> 用 Microsoft Agent Framework（開源，Python）建立 agent，把 cupcake store MCP server 當成 tool 提供給 agent，再從 MCP 載入 prompt 和歡迎橫幅<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Microsoft Agent Framework 是微軟開源的 Python 版 agent 工具包。示範把一個杯子蛋糕店的 MCP server（提供工具的服務）交給 agent 用，開場指令和歡迎畫面也從那裡載入。</span>\n\n📘 術語<br><b>MCP (Model Context Protocol)</b>（模型上下文協定）：讓 AI agents 和外部系統溝通的開放標準，只需要一個 URL 就能接上<br><b>MCP tools / prompts / resources</b>（MCP 工具／提示／資源）：tools 是 agent 可呼叫的函式；prompts 是可重複使用的指令片段；resources 是透過 HTTP 傳送的資料<br><b>Microsoft Foundry</b>（Microsoft Foundry 平台）：Microsoft 用來大規模建構 AI 應用程式和 agents 的統一平台<br><b>Microsoft Agent Framework</b>（Microsoft Agent 框架）：Microsoft 開發的開源框架，有 Python 版，適合入門建構 agents<br><b>Playground</b>（遊樂場（測試環境））：Foundry 裡可以和模型對話、試不同 system prompt、比較模型的環境\n\n📺 <a href=\"https://www.youtube.com/watch?v=TQd_YQvydVg\" target=\"_blank\">Build AI agents using Claude in Microsoft Foundry</a>（2026/05/20 · 34 分鐘）",
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
        }
      },
      {
        "id": "yt_KLCuxMDZSDg",
        "title": "🎬 不斷擴充的工具組",
        "category": "Agents 與 API",
        "text": "<b>以前要自己寫的 scaffolding，現在已內建在模型與 API 中</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講一件事：以前開發者得自己在模型外面寫一堆輔助程式，才能讓它好用；現在很多這類功能已經直接做進 Claude 和 API 裡（API 是讓程式跟 Claude 對接的窗口）。看了就知道哪些工夫不用再自己做，力氣該花在哪裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=59s\" target=\"_blank\">00:59</a> 主題：去年要自己寫的 scaffolding，現在直接跟模型一起提供。不要再把模型當成單純的輸入輸出 LLM，而是當成一套不斷擴充的工具組<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scaffolding 是為了讓模型好用，自己在外面加的輔助程式。去年要自己寫，現在官方直接附上。所以別把 Claude 當成問一句答一句的 LLM（大型語言模型），它是一套一直在加功能的工具箱。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=246s\" target=\"_blank\">04:06</a> Tool use：模型能自己搜尋並挑選工具，這時工具 router 和預先過濾通常只會更糟；工具出錯時，Claude 會看到錯誤、自己修正後再呼叫一次<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Tool use 是讓模型呼叫外部工具，例如查資料、開檔案。現在 Claude 會自己挑工具，你另外寫程式先幫它篩選（router），反而常常幫倒忙。工具出錯時，它也會看錯誤訊息，自己改好再試一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=310s\" target=\"_blank\">05:10</a> 技巧：在工具描述裡加上 output schema（例如會回傳 ID、title、snippet、score），可以省一次和 harness 之間的來回；Claude Code 可以用 pre／post tool use hooks<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫工具說明時，先講清楚會回傳哪些欄位（output schema，像是 ID、標題、摘要、分數），就少一趟和外層程式（harness）的來回。Claude Code（寫程式助手）還能設 hooks，在工具呼叫前後自動擋掉或做紀錄。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=440s\" target=\"_blank\">07:20</a> Context 管理：1 million context 採固定價格，加上 server-side compaction 和 context editing，只要幾行 config 就能搞定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Context 是模型一次能放在眼前的內容量。現在 100 萬的 context 用固定價格計費。再搭配 server-side compaction（伺服器自動壓縮舊內容）和 context editing（刪掉不需要的內容），幾行設定就能管好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=500s\" target=\"_blank\">08:20</a> 技巧：每 N 個 turn 就清掉過時的工具結果（截圖、搜尋結果、讀檔），但保留它們促成的決策；Claude Code 可以用 /context 查看 context 被什麼佔滿<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Turn 是對話的一來一回。每隔幾輪就清掉過時的工具結果，例如截圖、搜尋結果、讀過的檔案，但保留靠它們做出的決定。在 Claude Code 輸入 /context，可以看到空間被什麼占滿。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=634s\" target=\"_blank\">10:34</a> Code execution tool 在伺服器端給 Claude 一個 hosted sandbox，寫程式、執行、修正的迴圈在單一 API turn 內完成；Claude Code 可以用 /schedule 排定 cron 自動執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Code execution tool 讓 Claude 在伺服器上有一個 sandbox（隔離的專用電腦，弄壞了也不影響你）。寫程式、執行、修錯在一次呼叫裡就做完。Claude Code 的 /schedule 可以設 cron（定時排程），讓工作按時自動跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=789s\" target=\"_blank\">13:09</a> Computer use：Opus 47 可以接收原生解析度截圖，最高到 1440p，並回傳一對一的像素座標；OS World 從不到 50% 提升到 78%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Computer use 是讓 Claude 看螢幕截圖、操作滑鼠鍵盤。Opus 4.7 能看原始解析度的截圖，最高到 1440p，點擊位置直接對應畫面像素，不用換算。在實際操作軟體的測驗 OS World 上，成績從不到五成升到 78%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg&t=1186s\" target=\"_blank\">19:46</a> 原則：用來彌補模型不可靠的程式碼，壽命只有幾個月；把模型接上你自己世界的程式碼（工具、資料、auth、context）才會持續累積價值<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 為了補模型不可靠而寫的程式，像自己做的篩選和重試，模型一變強，幾個月就用不到了。真正會累積價值的，是把模型接上你的工具、資料、auth（登入和權限驗證）和背景資訊。</span>\n\n📘 術語<br><b>pre- and post-tool use hooks</b>（工具呼叫前後的 hook）：在 Claude settings 裡設定，Claude 呼叫工具之前或之後會用程式觸發動作，例如擋掉呼叫或記錄輸出<br><b>server-side compaction</b>（伺服器端壓縮）：和 context editing 搭配使用，把原本自己寫的記憶管理簡化成幾行 config<br><b>code execution tool</b>（程式碼執行工具）：在伺服器端自動給 Claude 一個 hosted sandbox，就像 Claude 自己的一台電腦<br><b>OS World</b>（OS World 評測）：評估模型能否在專業與一般消費級軟體上完成複雜任務的 eval<br><b>Claude in Chrome</b>（Claude in Chrome 擴充功能）：從 claude.ai/chrome 安裝後，Claude Code 可以用你的 Chrome 瀏覽網頁，也能測本地開發\n\n📺 <a href=\"https://www.youtube.com/watch?v=KLCuxMDZSDg\" target=\"_blank\">The expanding toolkit</a>（2026/05/08 · 21 分鐘）",
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
        }
      },
      {
        "id": "yt_RtywqDFBYnQ",
        "title": "🎬 讓 agent 自我學習的 memory 與 dreaming",
        "category": "Agents 與 API",
        "text": "<b>介紹 Managed Agents API 中的 memory 設計，以及新推出的 dreaming 功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Anthropic 的 Managed Agents API 裡的 memory（記憶）功能，以及新推出的 dreaming。Managed Agents API 是讓開發者用官方代管的環境來跑 agent 的服務；agent 則是能自己分好幾個步驟完成任務的 AI 助手。影片想解決的問題是：怎麼讓 AI 從過去的工作經驗裡學習，不用每次都從零開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=131s\" target=\"_blank\">02:11</a> 繼 MCP、skills 之後，memory 是下一個 primitive，目標是讓 agent 持續自我學習，並在長時間任務中管理 context。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 繼 MCP（讓 AI 接外部工具的標準）和 skills（打包好的做事說明）之後，memory 是下一塊基本積木（primitive），讓 agent 越做越熟，長任務中也能管好 context（AI 當下能看到的內容）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=228s\" target=\"_blank\">03:48</a> Claude Managed Agents 的 memory 幾週前進入 public beta。Rakuten 的內部知識 agent 第一輪錯誤減少 90%，token 效率、成本和延遲也都改善。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory 已經進入 public beta（公開測試版，大家都能用，但還在調整）。樂天（Rakuten）的內部知識 agent 第一輪出錯少了九成；token（AI 計算用量和費用的單位）更省，成本更低，回應也更快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=324s\" target=\"_blank\">05:24</a> memory 以檔案系統的形式呈現給 Claude，Claude 用 bash、grep 自己管理。Claude Opus 4.7 在檔案系統型 memory 上達到 state-of-the-art。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 記憶的樣子就像一堆資料夾和檔案。Claude 用 bash（下指令操作電腦）和 grep（在檔案裡搜尋文字）自己翻找、整理。Claude Opus 4.7 在這種記憶方式上的表現是目前最頂尖（state-of-the-art）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=446s\" target=\"_blank\">07:26</a> memory 支援權限範圍：同一個 agent 可以對組織層級知識只有唯讀權限，對工作用的 memory store 則可讀寫。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory store 是一個獨立的記憶庫。permission scopes（權限範圍）讓同一個 agent 對公司共用知識只能看、不能改，對自己工作用的記憶庫則能讀也能寫，避免改壞大家共用的資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=476s\" target=\"_blank\">07:56</a> 為了讓大量 agent 同時存取 memory，採用 optimistic concurrency：更新前先用 content hash 檢查，避免覆寫其他 agent 的 memory。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多 agent 同時改記憶，可能會互相蓋掉。optimistic concurrency 的做法是先假設不會撞到，寫入前再用 content hash（依檔案內容算出的指紋）確認沒被別人改過。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=507s\" target=\"_blank\">08:27</a> 為了讓企業能掌控，提供 version history、attribution metadata（哪個 agent、哪個 session、什麼時間改的），另外也提供可攜的 standalone API。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ version history（修改紀錄）能回頭查每次改了什麼；attribution metadata（來源標記）寫明是哪個 agent、哪次 session（一次工作階段）、什麼時間改的。另外還有可單獨使用的 standalone API。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=689s\" target=\"_blank\">11:29</a> dreaming 今天以 research preview 在 Managed Agents API 推出，會在近期 session 的 transcript 中找出模式和錯誤，自動產生整理好的 memory。Harvey 的 task completion rate 提升六倍。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ dreaming 以 research preview（搶先試用的研究版）推出。它會回頭看最近幾次工作的 transcript（完整過程紀錄），找出規律和常犯的錯，自動整理成記憶。Harvey 的任務完成率提升了六倍。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ&t=815s\" target=\"_blank\">13:35</a> dreaming 是非同步批次、out of band 的流程：可以跨多個 agent 找出共同模式，把 memory 品質從任務目標中獨立出來，也不會增加主要任務的延遲。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ dreaming 是事後集中一批處理，而且 out of band，也就是不在任何一次任務裡面做。所以它能跨多個 agent 找出共同規律，整理記憶不必跟手上的任務搶注意力，也不會拖慢任務。</span>\n\n📘 術語<br><b>dreaming</b>（作夢（memory 整理流程））：回顧近期 session transcript，找出模式與錯誤，自動產出整理好且最新的 memory 內容<br><b>optimistic concurrency</b>（樂觀並行控制）：agent 更新前用 content hash 確認，避免覆寫其他 agent 的 memory<br><b>permission scopes</b>（權限範圍）：agent 可以對某個 memory store 唯讀，對另一個可讀寫<br><b>version history</b>（版本歷史）：完整的 audit log，記錄每一次 memory 更新，可以回溯查看改了什麼<br><b>out of band</b>（頻外執行）：不在 agent 執行特定 session 或任務的 context 裡進行\n\n📺 <a href=\"https://www.youtube.com/watch?v=RtywqDFBYnQ\" target=\"_blank\">Memory and dreaming for self-learning agents</a>（2026/05/08 · 24 分鐘）",
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
        }
      },
      {
        "id": "yt_NLWiIj47IdI",
        "title": "🎬 什麼是 Claude Managed Agents？",
        "category": "Agents 與 API",
        "text": "<b>介紹 Claude Managed Agents 這套 API，並用三個示範說明如何大規模建置與部署 agent</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方影片，介紹 Claude Managed Agents。Agent 是能自己一步步動手完成任務的 AI 助理；API 是讓工程師把這個能力接進自家產品的接口。影片用三個示範，讓你看到 agent 怎麼放進真實工作流程，還能一次跑好幾個。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=4s\" target=\"_blank\">00:04</a> Claude Managed Agents 是一套用來大規模建置與部署 agent 的 API：你定義 agent 的工具、角色和能力，設定 sandbox 環境的套件與網路控管，再從自己的應用程式發起 session<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先設定 agent 能用哪些工具、扮演什麼角色；再設定 sandbox（隔離的工作區，出錯也不會影響外面）要裝哪些東西、能連哪些網站。接著從自己的系統開一個 session（一次任務），它就開始做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=4s\" target=\"_blank\">00:04</a> Claude 在隔離的 container 裡工作，可以完整存取檔案系統、執行 bash，也能用 web search<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每次任務都在一個 container（獨立的小型電腦環境）裡跑。Claude 在裡面可以讀寫檔案、下 bash 指令（用文字直接操作電腦），也能上網搜尋，就像給它一台專屬電腦。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=34s\" target=\"_blank\">00:34</a> 示範：把 Kanban 卡片拖到 in progress 就會自動發起 session；environment 已預裝 Lighthouse、Puppeteer，並掛載 GitHub repo，再加上 rubric（Lighthouse 分數 90 以上等）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把 Kanban 看板上的卡片拖到「進行中」，任務就自動開始。環境裡已裝好 Lighthouse（幫網頁打分數）和 Puppeteer（自動操作瀏覽器），也接好專案程式碼，另外設了 rubric（完成標準），例如分數要 90 以上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=64s\" target=\"_blank\">01:04</a> 每次 tool call 都透過 event stream 即時傳回看板；另一個 grader 在自己的 context window 依標準評估，Claude 依回饋修正後重新提交，分數拉到 96<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 每用一次工具叫 tool call，這些動作會透過 event stream 即時傳回看板。另一個 grader（評分員）用自己的 context window（獨立的思考記憶）照標準批改，Claude 修改後重交，分數拉到 96。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=96s\" target=\"_blank\">01:36</a> 可以同時拖第二張卡片：兩個 session、兩個 container，平行處理兩個不同任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 再拖一張卡片，就多開一個 session、一個 container，兩件事同時進行、互不干擾，就像同時派兩個人各做各的，不用排隊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=96s\" target=\"_blank\">01:36</a> SaaS 價格追蹤 agent：上網查價格、在 sandbox 裡用 Python 做成本分析、用 Excel skill 寫主管摘要，再透過 MCP servers 發 Slack 並建立 Asana 任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SaaS 是按月付費的線上軟體。這個 agent 上網查價格，用 Python 程式算成本，靠 Excel skill（做試算表的能力包）寫主管摘要，再透過 MCP servers（連接外部服務的轉接頭）發 Slack 訊息、在 Asana 建立待辦任務。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=127s\" target=\"_blank\">02:07</a> Memory store：開始前先查上週的結果，結束後存下有變動的地方，所以報告能寫出「Cloud compute 比上週低 15%」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Memory store 是 agent 可以讀也可以寫的筆記本。開始前先看上週的紀錄，做完再把有變動的地方記下來，所以報告能直接寫出「Cloud compute（雲端運算費）比上週低 15%」，不用每次從頭比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI&t=158s\" target=\"_blank\">02:38</a> 監控警報示範：coordinator agent 把工作分派給三個 specialist（各自有 context window、共用檔案系統），彙整成事件摘要；發 Slack 前會觸發 permissions policy，等人核准才送出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ coordinator（總指揮）把工作分給三個 specialist（負責不同專長的 agent），它們各自思考、共用同一批檔案，最後彙整成事件摘要。要發 Slack 之前，permissions policy（權限規則）會先擋住，等人按核准才送出。</span>\n\n📘 術語<br><b>Session</b>（工作階段）：從自己的應用程式發起，Claude 會在隔離的 container 裡執行任務<br><b>Environment</b>（執行環境）：設定好的 sandbox，可以預裝套件（如 Lighthouse、Puppeteer）並設定網路控管<br><b>Rubric</b>（評分標準）：你訂的完成標準，由另一個 grader 在自己的 context window 評估輸出<br><b>Memory store</b>（記憶庫）：agent 可以讀寫，用來比對上次的結果、記住過去的事件，下次就不用從頭開始<br><b>Multi-agent coordination</b>（多 agent 協作）：coordinator 把工作分派給 specialist，各自有 context window、共用檔案系統，最後彙整結果\n\n📺 <a href=\"https://www.youtube.com/watch?v=NLWiIj47IdI\" target=\"_blank\">What is Claude Managed Agents?</a>（2026/04/09 · 3 分鐘）",
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
        }
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
        "text": "<b>比較每個任務的總成本而非每 token 單價，依任務類型選模型與 effort</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在教你怎麼挑 Claude 的模型。重點是別只看「每個字多少錢」，要看「整件事做完總共花多少」。Fable 5.1 推出後，比較聰明、單價比較高的模型，有時整體反而比較省，所以值得重新想一下平常的選法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=0s\" target=\"_blank\">00:00</a> 選最便宜的模型、用最低 effort 看似最省，但推出 Claude Fable 5.1 後，更聰明的模型完成任務的成本可能更低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 直覺會選最便宜的模型、effort 開最低。effort 是模型回答前要想多久，想越久越貴。但 Fable 5.1 推出後，聰明模型比較快做對，總花費可能反而比較低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=0s\" target=\"_blank\">00:00</a> 影響任務成本的三個因素：model、effort、cache。模型越強，每 token 通常越貴，但它往往用更少的步驟就能完成任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 成本看三件事：用哪個模型、effort 開多高、有沒有用到 cache。token 是 AI 算字數收費的單位。強的模型每個 token 比較貴，但少繞路、步驟少，總帳常常更低。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=34s\" target=\"_blank\">00:34</a> 模型在不同請求之間不會記得任何東西，每次都要重新處理整段對話；caching 讓它重複使用已處理過的內容，成本約為十分之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型不會記得上一輪，你每多問一句，它都要把整段對話從頭再讀一次，每次都算錢。caching 就是把讀過的部分存起來重複用，這部分只收大約十分之一的價錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=66s\" target=\"_blank\">01:06</a> Fable 5.1 每 token 單價和 5 相同，但在按 token 計費時 cache reads 便宜 75%；一般工作總成本約降 25%，長時間 agentic 任務最多約降 45%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fable 5.1 每個 token 的定價跟 Fable 5 一樣，但按用量計費時，讀快取便宜 75%。一般工作總花費約少 25%；agentic 任務（AI 自己連續做很多步）最多約少 45%。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=66s\" target=\"_blank\">01:06</a> 在第三方程式基準 CursorBench 上，5.1 用 medium effort 的結果與 5 用 max effort 相近，成本約為五分之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CursorBench 是外部單位做的寫程式能力測驗。結果 Fable 5.1 只開中等 effort，表現就接近 Fable 5 開到最高 effort，花費卻只要大約五分之一。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=96s\" target=\"_blank\">01:36</a> 任務分兩類：開放式工作（深度研究、複雜分析、長時間 agent 工作），以及例行工作（摘要文件、草擬 email、從報告擷取資料）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 任務大致分兩種。一種是開放式的，沒有標準做法，要自己摸索，像深度研究、複雜分析、讓 AI 長時間自己跑；另一種是例行公事，像摘要文件、寫 email 草稿、從報告抓資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=127s\" target=\"_blank\">02:07</a> 開放式任務為主就用 Fable 5.1，effort 從 medium 開始、需要時再調高；例行任務為主就維持 Opus 或 Sonnet，需要時再改用 Fable。subagent 通常用較便宜的模型就夠<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開放式工作多，就用 Fable 5.1，effort 從中等開始，不夠再加；例行工作多，就繼續用 Opus 或 Sonnet（Claude 其他型號），不夠再換。subagent（主 AI 派去做小任務的幫手）用便宜模型通常就夠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34&t=157s\" target=\"_blank\">02:37</a> 管理員可以針對全員或個別角色設定三種控制：model entitlements、effort caps、defaults<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司管理員可以對全公司或特定職位設三種控制：model entitlements 決定能選哪些模型，effort caps 限制 effort 最高能開多少，defaults 決定新對話一開始用哪個模型和 effort。</span>\n\n📘 術語<br><b>effort</b>（推理投入程度）：模型回答前做多少推理；effort 越高越貴，但結果往往更好<br><b>caching</b>（快取）：重複使用已處理過的內容，不必重新處理整段對話，成本約為十分之一<br><b>model entitlements</b>（模型使用權限）：決定使用者可以選哪些模型<br><b>effort caps</b>（effort 上限）：設定使用者在某個模型上最高能選的 effort<br><b>defaults</b>（預設值）：設定新對話一開始使用的模型和 effort\n\n📺 <a href=\"https://www.youtube.com/watch?v=71-8fJIGi34\" target=\"_blank\">Which Claude model should you use?</a>（2026/09/18 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_RyjROxHLi_g",
        "title": "🎬 當你跟 AI 對話時，背後發生了什麼事？",
        "category": "提示與模型選擇",
        "text": "<b>說明 Claude 這類 AI 模型靠「預測」逐字產生回覆，以及它還會看到哪些 context</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片用很短的篇幅，說明你傳訊息給 Claude 之後，它到底怎麼產生回覆。搞懂它背後的運作方式，你就比較知道怎麼問才會得到好答案，也比較會判斷它的回答。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 傳訊息給 AI 時，它看起來像在思考，但像 Claude 這類 AI 模型其實是以「預測」為基礎運作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 回你的時候，看起來好像在思考。但 Claude 這類 AI 模型（用大量文字訓練出來、能讀也能寫的程式），做的其實是「預測」（prediction）：猜接下來最可能出現哪個字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 模型讀取你的訊息後，結合訓練時學到的一切和你在訊息中提供的內容，分段寫出回覆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它會先讀你的訊息，把訓練時學到的東西和你這次提供的內容放在一起，再一段一段寫出回覆。所以你給的資訊越清楚，它能用的材料就越多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 回覆是一個字一個字出現的，每個字都是根據前面所有內容挑選出來的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 回覆不是整篇想好才貼出來，而是一個字接一個字寫出來的。每挑一個字，它都會看前面所有內容，包括你的問題和它自己已經寫出來的部分。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=0s\" target=\"_blank\">00:00</a> 除了你的訊息，模型還會看到其他 context：app 開發者給的指示（稱為 system request）、你下載的檔案，以及依設定而定的過往對話記憶等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它看到的不只你的訊息，還有其他 context（回答時能參考的背景資料）：app 開發者給的指示（system request）、你下載的檔案。依你的設定，也可能看到 memory，也就是過去對話的記憶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g&t=30s\" target=\"_blank\">00:30</a> 了解 AI 模型是預測系統之後，你就更能跟它合作，也更能解讀它的回覆<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 知道它是靠預測在寫字，就會明白回答好不好，跟它看到的內容很有關係。背景給足、需求講清楚，回覆會更貼近你要的；答案怪怪的時候，可以回頭想是不是漏給了什麼。</span>\n\n📘 術語<br><b>prediction</b>（預測）：AI 模型運作的基礎；根據前面所有內容，逐字挑選下一個字來寫出回覆<br><b>system request</b>（系統指示）：app 開發者提供給模型的指示，屬於模型除了使用者訊息之外會看到的 context<br><b>memory</b>（記憶）：依你的設定而定，模型可能會看到先前對話的記憶\n\n📺 <a href=\"https://www.youtube.com/watch?v=RyjROxHLi_g\" target=\"_blank\">What happens when you talk to AI?</a>（2026/08/08 · 0 分鐘）",
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
        }
      },
      {
        "id": "yt_Ua_5vH_n8j4",
        "title": "🎬 AI 模型實際上知道些什麼？",
        "category": "提示與模型選擇",
        "text": "<b>說明 AI 模型的知識從哪裡來、有什麼邊界，以及什麼情況下最容易出現知識缺口</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講 AI 模型到底知道什麼、不知道什麼：它的知識從哪裡來、停在哪裡，還有哪些地方最容易答錯。搞懂這些，你就能判斷什麼問題可以放心問，什麼問題要自己再查一下。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 像 Claude 這樣的模型處理過的資料，比人類花好幾輩子能吸收的還要多，看起來好像什麼都懂，但其實不是<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 讀過的文字多到人好幾輩子都讀不完，所以回答起來很有把握，看起來好像什麼都懂。但讀得多不等於全都懂，它還是有不會的東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> AI 模型靠閱讀大量文字來學習，來源主要是網路、公開資料集和其他書面資料；模型本身沒有自己的經驗<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型的知識主要是讀來的，來源是網路文章、公開資料和書籍這類文字。它沒去過餐廳，也沒真的用過產品，講的都是別人寫下來的內容，不是它自己的經驗。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 除非產品特別提供搜尋工具，模型不會即時瀏覽網頁<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 平常模型是靠記憶回答，不會當場上網查。產品要有提供 search tool／web search（搜尋功能，讓模型能即時上網找資料），而且有開，它才看得到最新的網頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 訓練會在某個日期結束，在那之後發生的事都不在模型的記憶裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 訓練資料收到某一天就停了，那天叫 data cutoff（資料截止日）。在那之後的新聞、新產品、新規定，模型本身都不知道，除非另外把資料給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=0s\" target=\"_blank\">00:00</a> 可以把模型的知識想成一條連續光譜：常見、一致而且直到資料截止日都持續出現的主題，模型懂得非常深入<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型懂一件事，不是只有會或不會兩種，而是深淺有差。常被寫到、說法一致、一直到截止日都還有人在討論的主題，像基礎數學或有名的歷史事件，它通常講得很紮實。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 光譜另一端是少見主題、截止日之後的事件、狹窄領域和在地知識，越往這一端，答案越不可信<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 另一端是冷門主題、截止日之後的事、很窄的專業，還有在地資訊，例如某間小店現在還有沒有開。這些資料很少甚至沒有，越靠這一端，答案越要自己查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 最容易出現知識缺口的情況：主題跟時間有關、領域高度專業或很在地、語言比較少人使用、依賴模型對「典型」或「正常」的判斷，或是 web search 沒開<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ knowledge gaps（知識缺口）就是模型懂得不夠的地方，最常出現在：跟時間有關的事、很專業或很在地的問題、少人用的語言、要它判斷什麼算一般正常，或是沒開搜尋功能的時候。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4&t=30s\" target=\"_blank\">00:30</a> 模型的知識同時具備廣、深、凍結在某個時間點、不完美這幾個特性；看清邊界在哪裡，就不會再被它嚇到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 總結來說，模型懂得廣也懂得深，但它的知識停在某個時間點，也不完美。知道它強在哪、弱在哪，就不會被它懂那麼多的樣子嚇到。</span>\n\n📘 術語<br><b>data cutoff / cut-off date</b>（資料截止日）：訓練結束的日期，在那之後發生的事都不在模型的記憶裡<br><b>knowledge gaps</b>（知識缺口）：模型知識不足的地方，最常出現在跟時間有關、高度專業、在地或少用語言的主題<br><b>search tool / web search</b>（搜尋工具／網路搜尋）：產品特別提供時，模型才能即時瀏覽網頁；沒開的話比較容易出現知識缺口\n\n📺 <a href=\"https://www.youtube.com/watch?v=Ua_5vH_n8j4\" target=\"_blank\">What do AI models actually know?</a>（2026/07/24 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_RlQ4xpDnoaw",
        "title": "🎬 AI 為什麼會產生幻覺？",
        "category": "提示與模型選擇",
        "text": "<b>說明 AI 為何會編造事實、哪些情況容易發生，以及怎麼減少</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方影片，講 AI 為什麼有時會很有把握地講出錯的東西。影片也說明哪些問題最容易出這種錯，以及你可以怎麼防範。如果你常用 AI 查資料或寫東西，這些觀念可以幫你少出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> AI 被訓練成要有幫助，所以即使不確定也想給出答案，這類錯誤就叫做 hallucination（幻覺）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 被訓練成要盡量幫上忙，所以就算不確定，也傾向給你一個答案。這種捏造出假事實的錯誤叫 hallucination（幻覺），意思是 AI 講得像真的，其實內容是編的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> 幻覺通常比一般錯誤更糟，因為 AI 看起來很有自信，錯的答案也常常看起來像是對的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一般的錯誤常常一看就覺得怪。幻覺比較麻煩，因為 AI 的口氣一樣篤定，內容也很通順，你沒辦法從語氣分辨真假，所以更容易直接相信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=0s\" target=\"_blank\">00:00</a> 容易發生幻覺的情況：問特定事實、統計數據或引言，或主題冷門、高度專業、非常新<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你問得越細，例如某個統計數字、某句話是誰說的，或主題越冷門、越專業、越新，AI 就越容易拿「聽起來合理」的內容填空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 問到真實但不太有名的人或地點，或需要日期、名字、數字等精確細節時，也容易出現幻覺<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 例如問一間小地方的店、一位不太有名的人，或要確切的年份、人名、金額，AI 常會給一個看起來很精準、其實是拼湊出來的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 減少幻覺的方法一：一開始就告訴 AI「不知道也沒關係」（It&#x27;s okay if you don&#x27;t know）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在提問一開始就加一句「不知道也沒關係」，等於先給 AI 台階下。它會比較願意直接說不確定，不會硬編一個答案給你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 方法二：開一個新的對話，請 AI 找出答案裡的錯誤；方法三：保持懷疑，自己核對數字、日期和引言<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開一個新的對話，把答案貼進去請 AI 找錯，它比較不會被前面的說法牽著走。另外自己也要保持懷疑，數字、日期、引言都要回原始來源查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw&t=30s\" target=\"_blank\">00:30</a> 每個新版本的 Claude 都有改善，但這是整個 AI 領域長期存在、尚未完全解決的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude（Anthropic 公司做的 AI 助理）每出新版本都有改善。但幻覺是整個 AI 領域還沒完全解決的老問題，所以就算用新版，也不能完全不查證。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：AI 在不確定時仍給出答案而編造事實的錯誤，而且常常看起來很有自信\n\n📺 <a href=\"https://www.youtube.com/watch?v=RlQ4xpDnoaw\" target=\"_blank\">Why does AI hallucinate?</a>（2026/07/23 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_G2B0YWuJUgI",
        "title": "🎬 提示工程實戰手冊（The prompting playbook）",
        "category": "提示與模型選擇",
        "text": "<b>用兩個實例示範如何維護舊 prompt、從零打造新 agent，並用 eval 驗證</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方分享寫 prompt（你給 AI 的指令文字）的實戰方法。影片用兩個例子示範：一個是維護已經在用的舊 prompt，另一個是從零打造新的 agent（能自己完成多步驟任務的 AI 助理）。值得看的地方是，它不只教怎麼寫，還教你怎麼證明改完真的比較好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=150s\" target=\"_blank\">02:30</a> 改 prompt 要先有 eval 才能確認改動真的有進步；換模型後變差可能是行為不同（可用 prompt 調整），也可能是能力不足（prompt 救不了）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Eval 是一組固定的測試題，用來檢查 prompt 改完有沒有真的變好。沒有它，就只能憑感覺判斷。換了新模型變差時，要分清楚是做事習慣不同（改 prompt 能修），還是能力不夠（改 prompt 也沒用）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=242s\" target=\"_blank\">04:02</a> Eval 至少要涵蓋三類：一定要過的 control case、模型以前出錯過的 edge case，以及該轉真人或該拒絕的情境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 測試題至少要有三種。control case 是清楚、模型本來就會的基本題，用來確認沒改壞。edge case 是少見、容易出錯的特殊情況，專挑它以前錯過的。第三種是該轉給真人或該拒絕的情況。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=658s\" target=\"_blank\">10:58</a> 先做基本整理：刪掉多餘內容、用 XML tags 分開 role、policy、tone；如果人都分不清 guideline、policy 和 data，模型大概也分不清<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先大掃除，刪掉重複或沒用的字。再用 XML tags（像 &lt;policy&gt;…&lt;/policy&gt; 這種成對標籤）把角色、規定、語氣分開放。如果你自己看都分不出哪段是規則、哪段是資料，AI 也會搞混。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=720s\" target=\"_blank\">12:00</a> 定義 output format，並在 API 呼叫加 stop sequence；輸出結構比較複雜時，可以用 structured outputs<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 要先規定好回答的格式。stop sequence 是程式呼叫 AI 時設的停止記號，一看到結尾標籤就停，不會多講廢話。格式很複雜時，可以改用 structured outputs，強制 AI 照固定欄位輸出。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=936s\" target=\"_blank\">15:36</a> 為舊模型加的防禦性 patch 可能會被新模型過度遵守，導致模型不給它明明有的資訊；建議用 version control 記下加這些 patch 的原因<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前為了防舊模型出錯加的補丁規則（patch），新模型可能照做過頭，結果明明有資訊也不肯給。建議用 version control（像文件的修改紀錄）記下每條為什麼加，之後才判斷得出能不能刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1180s\" target=\"_blank\">19:40</a> 指令不會增加能力：光說「計算很重要」沒用，應該給模型一個 proration 計算 tool<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫再多次「計算很重要」，AI 也不會因此算得更準。該做的是給它一個 tool（它可以呼叫的小程式），例如 proration 計算器。proration 就是按天數比例算費用，像月中換方案要補多少錢。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1309s\" target=\"_blank\">21:49</a> 權衡要把兩面都講清楚：只說轉真人要花 $8，模型就會過度避免轉真人；要一併說明處理錯了得退款，還會失去客戶信任<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果只跟 AI 說「轉真人一次要 8 美元」，它會為了省錢硬撐、不肯轉。另一面也要講：自己處理錯了要退款，還會失去客戶信任。兩邊的代價都知道，它才能做出合理的取捨。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI&t=1846s\" target=\"_blank\">30:46</a> 排班 agent 實驗：用 Opus 4.7 加 adaptive thinking 可以達成，但 token 和延遲都變三倍；generate-evaluate-repair loop 同樣全部通過，token 更少、延遲也更低<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 排班 agent 實驗：Opus 4.7 開 adaptive thinking（讓模型自己決定要想多深）做得到，但 token（計費用量）和等待時間都變三倍。改成「寫草稿→挑錯→修正」三步分開跑，一樣全部通過，更省也更快。</span>\n\n📘 術語<br><b>eval / evaluations</b>（評測）：用來嚴謹確認 prompt 的改動是否真的讓效能變好<br><b>control case</b>（對照案例）：一定要過的案例：明確不模糊，而且已知模型處理得好<br><b>stop sequence</b>（停止序列）：加在 API 呼叫裡，偵測到結尾的 XML tag 時就叫模型停止生成<br><b>adaptive thinking</b>（自適應思考）：讓模型自己決定要用多少思考和推理來解題<br><b>generate-evaluate-repair loop</b>（生成－評估－修復迴圈）：三個簡單的 prompt 分開跑：先產生草稿，再列出違規之處，最後針對違規做修正\n\n📺 <a href=\"https://www.youtube.com/watch?v=G2B0YWuJUgI\" target=\"_blank\">The prompting playbook</a>（2026/05/22 · 33 分鐘）",
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
        }
      },
      {
        "id": "yt_P0uMXS6emHA",
        "title": "🎬 挑選合適的模型",
        "category": "提示與模型選擇",
        "text": "<b>自己建 eval，並用 effort、thinking、prompt caching 和 context engineering 挑出最合適的模型</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在教你怎麼幫自己的工作挑 Claude 模型。三個模型由小到大是 Haiku、Sonnet、Opus，越大越強也越貴。影片的做法是：先自己出一套考題（eval，一組附上「怎樣算做對」的測試任務）實際測過，再用 effort（要模型投入多少工夫）、thinking（先想再答）、prompt caching（重複的開頭不重新計算）和 context engineering（管理要餵給模型哪些資料）來調整花費和準確度。如果你想省錢又不想犧牲品質，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=202s\" target=\"_blank\">03:22</a> 三個重點：一、小而設計良好的 eval 比公開 benchmark 更能判斷該用哪個模型。二、該選「每次成功結果最便宜」的模型，不是每個 token 最便宜的。三、可以用各種調整選項控制成本和準確度的取捨。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 自己出的小考題比公開 benchmark（業界共用的標準考卷）更能看出哪個模型適合你。token 是模型計費的文字單位，但別只比單價：便宜模型常做錯要重跑，總花費反而更高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=264s\" target=\"_blank\">04:24</a> SWE bench verified 這類公開 benchmark 只能提供大方向。實際工作通常橫跨多種任務，甚至會用到 benchmark 沒涵蓋的語言，所以要自己建 eval。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ SWE bench verified 是一份測模型修程式錯誤的公開考卷，只能看出誰大概比較強。你的工作可能又寫信又查資料，還用到冷門語言，考卷沒考到，只能自己測。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=356s\" target=\"_blank\">05:56</a> eval 可以想成學校的數學考試：除了答案要對，計算過程也很重要。評分可以混用 LLM as a judge（例如檢查 SQL 查詢）和固定規則的程式檢查（例如一定要呼叫某個 tool）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 就像數學考試也會看算式。可以讓另一個 AI 當裁判，它看得懂寫法不同但結果正確的 SQL（查資料庫的指令）；「一定要呼叫某個 tool（模型能用的外部功能）」這種硬規則，交給程式檢查。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=540s\" target=\"_blank\">09:00</a> 建 eval 常見的三個陷阱：一、把雜訊當成訊號，每個任務要跑好幾次。二、把 API 或 tool call 失敗這類基礎設施問題誤算成模型表現差。三、資料集沒有反映 production 的真實輸入。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一、模型每次回答都不太一樣，只跑一次可能剛好運氣好，要多跑幾次。二、網路或 API（系統之間的連線介面）出錯不是模型笨，不要扣它的分。三、考題要像實際使用時會遇到的輸入。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=691s\" target=\"_blank\">11:31</a> 每個模型的行為都有差異。同一個 prompt，Opus 4.5 太少觸發某個 tool，Opus 4.6 卻觸發太多。建議閱讀新模型的 prompting guide，或把 guide 交給 Claude，請它更新 prompt。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 換模型時別直接沿用舊的 prompt（給模型的指示）：同一段話，Opus 4.5 太少用某個工具，4.6 卻用太多。可以讀新模型的 prompting guide（官方寫的指示撰寫建議），或丟給 Claude 請它幫你改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=785s\" target=\"_blank\">13:05</a> 一定要讀 transcript。有一次在 Claude Code 的 eval 裡分數很高，細看才發現 Claude 去翻 git history，從先前的嘗試中抄答案。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ transcript 是模型做事過程的完整紀錄。高分不代表真的會：曾有測試在 Claude Code（寫程式的 AI 工具）裡拿高分，細看才發現它去翻 git history（程式的修改歷史）抄以前的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=846s\" target=\"_blank\">14:06</a> 內部 code fix pipeline 的例子：Haiku 4.5 不開 thinking 得 92%，開 thinking 達到 100%。Sonnet 和 Opus 也都是 100%，而且花的時間少很多，因為它們能用更少回合完成。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku 4.5 不開 thinking 答對 92%，開了就是 100%。Sonnet 和 Opus 也是 100%，但來回的步驟更少，快很多。小模型不一定最划算，要把時間和總成本一起比。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA&t=1093s\" target=\"_blank\">18:13</a> prompt caching 讓快取的 input token 只付定價的 1/10，很好的系統命中率大約 80～90%。system prompt 裡不要放日期時間這類變數，messages 陣列只往後加。精簡 tool 回傳後，token 減少 66.4%。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每次都一樣的開頭會被快取，重複的部分只收 1/10 的價錢，好的系統有八到九成能用到快取。開頭的固定說明（system prompt）別放日期時間這種會變的內容，對話只往後加；工具回傳的內容精簡後，token 少了 66.4%。</span>\n\n📘 術語<br><b>eval</b>（評測）：由一組 task 組成，每個 task 包含輸入和成功標準，用來判斷該選哪個模型<br><b>LLM as a judge</b>（用 LLM 當評審）：用 LLM 檢查最終回覆或執行步驟是否正確，SQL 寫法略有不同也能判斷<br><b>adaptive thinking</b>（自適應思考）：4.6 系列模型起，由模型自己決定一項任務需要思考多少<br><b>effort</b>（投入程度參數）：告訴 Claude 在思考、tool call 和回覆上要寫多少、投入多少工夫<br><b>prompt caching</b>（提示快取）：重複使用已預先計算並快取的 prompt 前段，input token 只付定價的 1/10\n\n📺 <a href=\"https://www.youtube.com/watch?v=P0uMXS6emHA\" target=\"_blank\">Picking the right model</a>（2026/05/21 · 31 分鐘）",
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
        }
      },
      {
        "id": "yt_T7KqH7kYnE4",
        "title": "🎬 思考的槓桿（The thinking lever）",
        "category": "提示與模型選擇",
        "text": "<b>說明 Claude 怎麼運用 test time compute，以及 effort 等級要怎麼選</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是「讓 Claude 多想一下」這根槓桿該怎麼拉。重點概念是 test time compute，意思是模型在回答你的當下多花一些運算去想；effort 則是讓你調整它要多認真的轉盤。看完你就知道，什麼事值得讓它慢慢想，什麼事讓它快快回就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=80s\" target=\"_blank\">01:20</a> test time compute 跟 train time compute 一樣能提升智慧：Claude 花越多 token 思考，表現越好。Deep Search QA、OSWorld、Humanity&#x27;s Last Exam 都看得到這個現象<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 訓練時多花算力（train time compute）能讓模型變聰明，回答時多想也可以。token 是模型處理文字的單位，想得越多，用掉越多。在搜尋、操作電腦、超難考題的測驗裡都看得到：想越多，分數越高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=173s\" target=\"_blank\">02:53</a> 交通模擬示範：同一個 prompt 用 low、high、max 三種 effort 跑。high 花的時間和 token 大約是兩倍，max 大約是 10 倍，模擬也明顯更細緻<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同一段指令（prompt）叫 Claude 做交通模擬，分別用 low、high、max 各跑一次。high 花的時間和 token 大約兩倍，max 大約十倍，做出來的模擬也明顯細緻得多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=388s\" target=\"_blank\">06:28</a> test time compute 分三種：thinking（推理用的 scratch pad）、tool calling（Claude 跟外部世界的介面）、text（最後輸出）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 回答時花的 token 分三塊：thinking 是它打草稿、推理的地方；tool calling 是它去查資料、跑程式這類和外界的互動；text 是你最後看到的回答。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=480s\" target=\"_blank\">08:00</a> 使用者有兩種方式調整 test time compute：effort（從 low 到 max 的轉盤）和 budgets（max token 限制或 API 的 task budgets）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 調整的方法有兩種：effort 是轉盤，從 low 到 max 決定它多認真；budgets 是設上限，例如最多只能用幾個 token，或在 API（給開發者串接用的介面）裡用 task budgets 管得更嚴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=606s\" target=\"_blank\">10:06</a> adaptive thinking 是 interleaved thinking 的進化版：由 Claude 自己決定什麼時候要思考，也可以完全不思考。它不是 model router，而且相對 interleaved thinking 是 Pareto efficient<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ interleaved thinking 是每用完一次工具就想一下；adaptive thinking 讓 Claude 自己決定要不要想。它不是幫你換模型的 router，而且比舊做法更省，表現也沒有變差。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=727s\" target=\"_blank\">12:07</a> thinking 開關並不能代表 Claude 應該投入多少 effort。關掉 extended thinking 只是拿掉 Claude 的一項核心能力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 關掉 thinking 不等於叫它少出點力，調整認真程度要靠 effort。關掉 extended thinking（延伸思考）只是拿走它先打草稿再回答的能力。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=1002s\" target=\"_blank\">16:42</a> effort 選擇原則：max 可能報酬遞減；extra high 是 Claude Code 和 claude.ai 的預設；需要任何智慧就用 high；low 適合對延遲敏感的分類、摘要、資料擷取<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開到 max，多花的成本換到的進步可能越來越少。Claude Code（寫程式的工具）和 claude.ai 預設用 extra high；需要動腦就選 high；分類、摘要、抓資料這類要快的工作用 low。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4&t=1096s\" target=\"_blank\">18:16</a> Haiku 4.5 花的時間大約一半，token 差不多，但結果差很多。只要任務需要一點智慧，即使 effort 設 low，用大模型通常比較好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 拿小模型 Haiku 4.5 來比，時間大約省一半，token 差不多，結果卻差很多。所以只要任務需要一點腦力，用大模型開 low，通常還是比用小模型好。</span>\n\n📘 術語<br><b>test time compute</b>（推論時運算）：在推論時多花 token，讓模型把問題解得更好<br><b>effort</b>（努力程度）：從 low 到 max 的轉盤，effort 越高，工作越久、花的 token 越多<br><b>interleaved thinking</b>（交錯式思考）：讓 Claude 每次 tool call 之後都能有一個思考步驟<br><b>adaptive thinking</b>（自適應思考）：給 Claude 一個 thinking 工具，由它自己決定何時思考、要不要思考<br><b>task budgets</b>（任務預算）：API 裡的功能，用比較嚴格的限制來約束 Claude 的工作方式\n\n📺 <a href=\"https://www.youtube.com/watch?v=T7KqH7kYnE4\" target=\"_blank\">The thinking lever</a>（2026/05/20 · 21 分鐘）",
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
        }
      },
      {
        "id": "yt_OXJO4LldSnc",
        "title": "🎬 思考的槓桿（The thinking lever）",
        "category": "提示與模型選擇",
        "text": "<b>Claude 如何在推論時運用 test time compute，以及怎麼用 effort、budget 控制</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講的是 Claude 的「思考槓桿」：回答時讓它多花點力氣，結果通常會更好。影片也說明你可以用哪些設定，控制它要想多久、花多少。常用 AI 的人看完，就知道什麼時候該讓它慢慢想，什麼時候該讓它快一點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=72s\" target=\"_blank\">01:12</a> Scaling test time compute：模型從 Haiku、Sonnet 到 Opus 越聰明，分數越高；同一個 Opus 花越多時間處理問題，分數也越高<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Haiku、Sonnet、Opus 是 Claude 由小到大的三個型號，越大越聰明，分數越高。test time compute 是它回答時額外花的運算量；同一個 Opus 想得越久，分數也越高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=162s\" target=\"_blank\">02:42</a> 用 Opus 4.7 做交通號誌模擬：low 約 50 秒、約 4,600 output tokens；high 時間與 token 約兩倍；max 約 10 倍，結果最好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ token 是 AI 計算文字量的單位。影片用 Opus 4.7 寫交通號誌模擬程式：low 約 50 秒、產出約 4,600 個 token；high 的時間和 token 大約翻倍；max 約 10 倍，成品最好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=352s\" target=\"_blank\">05:52</a> Claude 花的 token 分三類：thinking（內心獨白）、tool calling（和環境互動）、text（和使用者溝通）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 花的 token 有三種用途：thinking 是自己在心裡推理、打草稿；tool calling 是呼叫工具做事，例如搜尋或跑程式；text 是最後回給你看的文字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=508s\" target=\"_blank\">08:28</a> 使用者可以用 effort 設定時間、成本和品質的取捨，也能用 task budgets 設定 token 上限，例如 100,000 tokens<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ effort 是努力程度的設定，讓你決定比較重視快、省錢還是品質。task budgets 是替一項任務設 token 上限，例如最多 100,000 個 token，超過就不再多花。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=659s\" target=\"_blank\">10:59</a> Adaptive thinking 是 interleaved thinking 的下一步：Claude 可以隨時思考，順序不受限，簡單問題也可以不思考；它不是 model router<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ adaptive thinking 讓 Claude 自己決定何時想、想多少，簡單問題可以不想。它比 interleaved thinking（只在兩次用工具之間思考）更自由，也不是把題目分派給不同模型的 model router。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=814s\" target=\"_blank\">13:34</a> Thinking 開關不適合拿來代替 effort dial：它限制的是 Claude「怎麼做事」而不是「多努力」；effort 會同時調整 thinking、tool use 和 text<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 單純關掉 thinking，只是不准它先打草稿，改變的是做事方式，不是努力程度。想省時間或省錢，應該調 effort，它會一起調整思考、用工具和回覆的份量。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=1125s\" target=\"_blank\">18:45</a> extra high 是 Opus 4.7 新增的等級，最適合大多數 coding 和 agentic 用途，也是 Claude Code、Claude.ai 裡 Opus 4.7 的預設；high 適合當測試起點<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ extra high 是 Opus 4.7 新增的等級，最適合寫程式（coding）和讓 AI 自己分好幾步完成任務（agentic），也是 Claude Code、Claude.ai 裡 Opus 4.7 的預設。自己測試時建議先從 high 開始。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc&t=1277s\" target=\"_blank\">21:17</a> 小模型適合追求快速 time to first token；大模型搭配低 effort 適合追求快速 time to last token；可以的話兩者都做 eval 比較<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想要快點看到第一個字出現（time to first token），就選小模型；想要整份答案快點完成（time to last token），可以用大模型配低 effort。有條件的話，兩種都實際測試（eval）比比看。</span>\n\n📘 術語<br><b>test time compute</b>（推論時運算）：Claude 在推論時為了解決問題而花費的任何 token<br><b>adaptive thinking</b>（自適應思考）：Claude 可以在任何適當的時機思考，思考多少、順序都不受限；簡單問題也可以不思考<br><b>interleaved thinking</b>（交錯式思考）：讓 Claude 在兩次 tool call 之間思考前一個結果，再決定下一步<br><b>effort</b>（努力程度設定）：告訴 Claude 要怎麼在時間、成本和品質之間取捨<br><b>task budgets</b>（任務預算）：告訴 Claude 處理一項任務最多能花多少 token\n\n📺 <a href=\"https://www.youtube.com/watch?v=OXJO4LldSnc\" target=\"_blank\">The thinking lever</a>（2026/05/08 · 24 分鐘）",
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
        }
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
        "text": "<b>小學老師示範用語音讓 Claude 回顧課堂、產出隔天教案，並設定每天自動執行</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片跟著一位美國小學老師過完一天：她下課後用說的交代 Claude 回顧今天的課，再寫好明天的教案，最後設定成每天自動跑。值得看的地方是，AI 不只回答一次問題，還接上她平常用的工具，固定時間自己把事做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=0s\" target=\"_blank\">00:00</a> Karina 是小學老師，多數學生是英語學習者；Claude for Teachers 能串接她既有的工具，並依她自訂的時間表持續幫她做事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Karina 是小學老師，班上多數孩子的母語不是英文。Claude for Teachers 是給老師用的 Claude，能連上她平常用的工具，還能照她排好的時間固定幫她做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=0s\" target=\"_blank\">00:00</a> 她用語音下一個指令：從 TeachFX 抓最新的二年級 ELA 課程，分析學生反應、說話時間、提問和參與度<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她用說的下指令：去 TeachFX（會錄下課堂實況的工具）抓最新一堂二年級 ELA（英語文課）的紀錄，分析學生反應、師生各講多少話、提了哪些問題、參與度如何。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=31s\" target=\"_blank\">00:31</a> 同一個指令還要求起草明天的教案，對齊州標準，並符合加州 ELD 標準；Claude 一次交回教學回饋摘要和已調整好的教案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同一句話裡，她也請 Claude 寫明天的教案，要符合州課程標準和 ELD 標準（加州給英語學習者的學習標準）。Claude 一次交回兩樣：上課回饋摘要和調整好的教案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=62s\" target=\"_blank\">01:02</a> 教學回饋摘要：開場和 turn-and-talk 效果好，學生說得比老師多；待改進的是等待時間不夠，明天目標是提問後等五秒再點人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做得好的是開場和 turn-and-talk（讓學生轉頭跟旁邊同學討論），師生說話比例顯示學生講得比老師多。要改的是 wait time（提問後留給學生想的時間）太短，明天目標是等五秒再點人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=92s\" target=\"_blank\">01:32</a> 不用等每個月跟教學教練面談，馬上就能拿到回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前要等每個月跟教學教練（專門指導老師怎麼教的人）面談，才有人給意見。現在上完課馬上有具體回饋，隔天就能改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=92s\" target=\"_blank\">01:32</a> 教案用了內建的 lesson planning skill，並參考 Learning Commons knowledge graph 加入 ELD 支援；教學回饋也直接寫進教案裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 寫教案用了內建的 lesson planning skill（事先設定好的寫教案流程），並參考 Learning Commons knowledge graph 這個資料來源補上 ELD 支援；回饋裡要改的地方也直接寫進教案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=122s\" target=\"_blank\">02:02</a> 她對 Claude 說「每個平日下午 4 點做一次」，先手動跑一次確認，之後開車回家時 Claude 就會自動處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她跟 Claude 說「每個平日下午 4 點做一次」，先手動跑一次，確認結果沒問題。之後她開車回家的路上，Claude 會自己把回顧和備課做完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ&t=122s\" target=\"_blank\">02:02</a> Claude for Teachers 對所有通過驗證的美國 K-12 老師免費<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 美國 K-12（幼稚園到高三）的老師，只要通過身分驗證，就能免費用 Claude for Teachers。</span>\n\n📘 術語<br><b>TeachFX</b>（TeachFX）：Claude 從這裡找到前一天的課程，也就是課堂實際進行情況的錄音<br><b>ELD standards</b>（ELD 標準）：加州針對英語學習者的標準，教案要符合它<br><b>teacher-to-student talk ratio</b>（師生說話比例）：比較老師和學生各說了多少話；學生說得比老師多就是她想看到的<br><b>wait time</b>（等待時間）：提問後留給學生思考的時間；她的目標是提問後等五秒再點人<br><b>Learning Commons knowledge graph</b>（Learning Commons 知識圖譜）：Claude 加入加州 ELD 支援時參考的資料來源\n\n📺 <a href=\"https://www.youtube.com/watch?v=V-OOEC5RNaQ\" target=\"_blank\">Plan smarter with Claude for Teachers</a>（2026/07/14 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_MhfnicQVkgY",
        "title": "🎬 與 @Claude 一起工作的未來",
        "category": "產品功能",
        "text": "<b>介紹 Claude Tag：在頻道中主動出手、有記憶、多人協作的 Claude</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 介紹 Claude Tag 的影片。Claude Tag 就是把 Claude 拉進團隊的聊天頻道，它會自己判斷什麼時候該出手，記得大家交代過的事，還能讓好幾個人一起指揮它。值得看的原因是，它讓你看到 AI 正在從「你問它才答」，變成像同事一樣主動接工作、一路做到完。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=30s\" target=\"_blank\">00:30</a> 寫程式的 AI 從 typeahead 逐行補字，進步到寫出整個函式、檔案、功能；現在 Tag 能完成整個功能、跑完整個實驗、做資料分析，兩年內有兩次大躍進<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩年前的 typeahead 就是打字時的自動補完：你決定要寫哪一行，AI 幫你把那行補完。後來 AI 能寫出整個函式（一段完成特定工作的程式），甚至整份檔案。現在 Tag 能直接交出完整的功能、實驗和資料分析。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=91s\" target=\"_blank\">01:31</a> 以前要打開 Claude 提問它才做事；Claude Tag 會主動判斷何時加入，就算工作要花好幾天或好幾週也會做完並追蹤，還會記住指示供下次使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前要你先打開 Claude 問，它才會動。Tag 會自己看頻道，判斷該不該插手。就算工作要跑好幾天、好幾週，它也會做完、回頭追進度，還會把你交代的做法記下來，下次照著做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=152s\" target=\"_blank\">02:32</a> 根據最新 METR evals，最新模型一次可以連續工作 16 小時；在 Claude Tag 裡，Claude 還能自己排程，幾天、幾週或幾個月後再回來追蹤<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ METR evals 是用來測模型能自己連續做事多久的評測，結果是最新模型能一口氣做 16 小時。Tag 裡的 Claude 還會自己排時間，幾天、幾週到幾個月後再回來看進度。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=217s\" target=\"_blank\">03:37</a> 模型有記憶，能記住所有使用者給過的指示。例如在頻道裡要它只監控某類問題，它會一直記得；之後有人擴大範圍，它也會跟著調整<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它記得頻道裡每個人交代過的事。例如你說「只盯付款相關的問題」，它就會一直照做。後來同事說「登入問題也要看」，它會跟著擴大範圍，不用每次重講。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=249s\" target=\"_blank\">04:09</a> Claude 受過訓練，懂得判斷什麼時候需要它、什麼時候該退居幕後；覺得它太常或太少加入，直接告訴它，它會記住<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它被訓練成會看場合：需要它的時候出聲，不需要就安靜待著。如果你覺得它太常插話或太少出現，直接在頻道裡跟它說，它會記住並調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=402s\" target=\"_blank\">06:42</a> Chat、Cowork、Claude Code 都要自己記得去打開，比較被動；Claude Tag 可以接受較高層次的目標（例如為頻道裡每個 bug 開 PR），而且支援多人一起引導<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Chat、Cowork、Claude Code 這幾個 Claude 產品，都要你自己打開才會動。Tag 能接大目標，例如「頻道裡每個 bug（程式錯誤）都開一個 PR（送出修改、請人審核）」，而且大家能一起指揮它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=527s\" target=\"_blank\">08:47</a> 在他們所屬的 product org 裡，約 65% 的 PR 是 Tag 寫的，比例還在持續上升<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在他們自己的產品部門（product org）裡，大約 65% 的 PR 是 Tag 寫的，比例還在上升。也就是說，寫程式的主力漸漸變成 AI，人比較多是在交代任務和審核結果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY&t=620s\" target=\"_blank\">10:20</a> Tag 跑在跟行動版、桌面 app 相同的遠端 sandbox，用的是同一個 agent SDK，能驗證自己的成果；目前已在 Slack 推出，接下來會支援 Microsoft Teams 等平台<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Tag 跑在隔離的雲端工作區（sandbox），跟手機、桌面 app 用的是同一套，也用同一套打造 AI 代理的工具包（agent SDK），所以能自己驗收成果。它已經在職場聊天軟體 Slack 上線，接下來是 Teams。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（頻道裡的 Claude））：把 Claude 加進頻道，它會主動加入、做好工作、後續追蹤並記住指示，而且支援多人協作<br><b>typeahead</b>（輸入預測補全）：兩年前工程師能用的 AI，由人決定要寫哪一行，AI 只幫忙把那一行寫出來<br><b>multi-player</b>（多人協作）：每個人都看得到、也都能參與，多人一起引導同一個 session，得到更好的成果<br><b>METR evals</b>（METR 評測）：用來評估模型能自主工作多久；最新模型可連續工作 16 小時\n\n📺 <a href=\"https://www.youtube.com/watch?v=MhfnicQVkgY\" target=\"_blank\">The future of work with @Claude</a>（2026/07/02 · 11 分鐘）",
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
        }
      },
      {
        "id": "yt_VojDzHaciKQ",
        "title": "🎬 直接在你工作的地方把 Claude tag 進來",
        "category": "產品功能",
        "text": "<b>發表 Claude Tag：在團隊頻道裡 tag Claude，讓它和團隊一起協作</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 發表新功能 Claude Tag 的影片：在團隊平常聊天的頻道裡 tag Claude，它就能加入討論、直接動手做事，不用另外開一個 AI 視窗。影片也講了它能看什麼、不能看什麼，這是公司導入 AI 時最常擔心的事，值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=12s\" target=\"_blank\">00:12</a> Anthropic 負責 Claude Code 的 Lydia 宣布推出 Claude Tag，讓 Claude 直接和團隊一起協作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 讓 AI 幫忙寫程式的工具，由 Lydia 負責。Claude Tag 是新功能，在團隊頻道 tag 它，它就像同事一樣加入工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=12s\" target=\"_blank\">00:12</a> Anthropic 今年大部分時間都在 tag Claude；在 Anthropic 內部，Claude Tag 開了 65% 的產品 pull request<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ pull request（PR）是工程師送出程式修改、請別人審核後再合併的申請。Anthropic 內部產品的修改有 65% 是 Claude 發起的，代表這功能他們自己已經用很久。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=43s\" target=\"_blank\">00:43</a> 示範：Nadia 在群組討論串 tag Claude，Claude 跟上討論、即時回應產品決策，開 PR 並完成修改（Scheduled Exports 功能）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範中 Nadia 在群組討論串 tag Claude，它讀完前面的對話，跟大家來回討論產品要怎麼做，接著直接送出 PR，把「排程匯出」功能改好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=43s\" target=\"_blank\">00:43</a> Claude 知道這個功能是什麼、要改 codebase 的哪裡；它依每個頻道界定範圍與各團隊的 context，並隨著工作進行累積 memory<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 是產品的全部程式碼；context 是做事需要的背景資訊。每個頻道各自劃定 Claude 負責的範圍和背景，它邊做邊記（memory），下次不用重講。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=73s\" target=\"_blank\">01:13</a> Claude 知道自己推上去的修改會影響上市行銷，減少跨團隊溝通的延遲；Priya 不用打開 drive，Claude 自己完成編輯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 知道這次改動會影響上市行銷內容，所以會主動處理。行銷的 Priya 不必自己打開雲端硬碟改文件，Claude 直接改好，少了部門之間來回傳話的時間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=73s\" target=\"_blank\">01:13</a> Claude 有自己的帳號和權限，依團隊、依頻道存取所需系統：legal 頻道看得到合約資訊，engineering 頻道可以改 codebase<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 有自己的帳號，權限跟著團隊和頻道走，像新同事只拿到所屬部門的門禁卡：在法務頻道看得到合約，在工程頻道可以改程式碼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=105s\" target=\"_blank\">01:45</a> 在 legal 頻道叫 Claude 改 codebase，它不會做，因為它根本看不到；memory 也遵守同樣的界線，private channel 或 DM 學到的只留在那裡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在法務頻道叫它改程式，它做不到，因為那裡根本沒給它權限。它的記憶也一樣：在私人頻道或私訊（DM，一對一訊息）學到的東西，不會帶到別的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ&t=105s\" target=\"_blank\">01:45</a> 因為 Claude 有自己的帳號，每次使用 credential 都會被記錄；建議先把 Claude 加進一個頻道 tag 看看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ credential 是登入系統用的憑證，像帳號密碼或金鑰。Claude 有自己的帳號，每次用憑證都會留下紀錄，事後查得到是它做的。建議先拉進一個頻道試用。</span>\n\n📘 術語<br><b>Claude Tag</b>（Claude Tag（tag 標記 Claude））：讓 Claude 直接和你的團隊一起協作，在頻道裡 tag 它進來<br><b>multi-player</b>（多人協作）：Nadia tag Claude 後，Claude 跟上群組討論串，即時回應產品決策<br><b>memory</b>（記憶）：隨著工作進行累積；遵守頻道界線，private channel 或 DM 學到的留在原處<br><b>per-team, per-channel access</b>（依團隊、依頻道授權）：Claude 依團隊與頻道存取所需系統，例如 legal 頻道看得到合約資訊\n\n📺 <a href=\"https://www.youtube.com/watch?v=VojDzHaciKQ\" target=\"_blank\">Tag Claude in, right where you already work</a>（2026/06/23 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_EPUg9pmfPk0",
        "title": "🎬 法務團隊如何使用 Claude Cowork",
        "category": "產品功能",
        "text": "<b>Anthropic 內部產品律師示範如何用 Claude Cowork 快速回覆產品團隊的法律問題</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由 Anthropic 公司內部的產品律師 Mark 示範如何使用 Claude Cowork。Claude Cowork 是 Claude 的一種工作模式，能讀取電腦裡的資料夾，也能連結 Gmail 等工作軟體，把一連串工作做完。影片示範的情境是產品團隊臨時來問一個功能的法律問題，Mark 用它在幾分鐘內找回舊資料的脈絡。如果你常要回頭翻舊文件才能回答別人，這支影片很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=11s\" target=\"_blank\">00:11</a> Mark 是 Anthropic 的內部產品律師。一位 PM 用 Slack 問他幾個月前上線的功能，但他手上已經沒有當初寫備忘錄時的背景資料。以前他得先花一小時重讀舊文件才能開始處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ PM（產品經理，負責規劃產品功能的人）在 Slack（公司用的聊天工具）問 Mark 一個幾個月前上線的功能。Mark 早忘了當時的細節，以前光是重讀舊文件找回狀況，就要先花一小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=41s\" target=\"_blank\">00:41</a> 他在 Claude Cowork 排程任務，每天一早執行，像私人幕僚長一樣整理備忘錄，列出待辦、新事項和急件。這個任務連結了 Gmail，當天 5 個項目依到期順序排列<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mark 設了一個每天早上自動執行的排程任務，讓 Claude 讀他的 Gmail，整理成一份像幕僚準備的早報，分出待辦、新事項和急件。當天共 5 件，依截止時間排好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=41s\" target=\"_blank\">00:41</a> 他最常用的 skill 是 /brief，需要快速掌握某個產品時就會執行。這個 plugin 由他參與打造，依照 Anthropic 法務部門的工作方式設計<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ skill 是事先教會 Claude 的一套固定做法，輸入 /brief 就會啟動，用來快速掌握某個產品。plugin 是把這些 skill 打包起來的外掛，這套由 Mark 參與打造，依照 Anthropic 法務的工作方式設計。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=72s\" target=\"_blank\">01:12</a> 這個 plugin 採開放協定（open protocol），任何人都能打開，依照自家公司的 playbook 客製化。skill 已經知道審查檔案放在哪裡、範本怎麼編排，所以 prompt 可以很短<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 開放協定（open protocol）代表規格是公開的，別家公司也能拿去，依照自己的 playbook（內部作業手冊）修改。skill 已經知道舊審查放在哪、範本長什麼樣，所以 prompt（打給 AI 的指令）一兩句就夠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=72s\" target=\"_blank\">01:12</a> Claude 會從資料夾讀取先前的審查，再讀新的 Slack 和 Gmail 對話串，整理出三件事：當初的結論、這次改了什麼、影響分析的哪些部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 先讀資料夾裡的舊審查，再讀 Slack 和 Gmail 上的新討論，整理成三點：當初法律上怎麼判斷、這次功能改了什麼、這些改動會影響原本分析的哪幾個部分。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=104s\" target=\"_blank\">01:44</a> 不用讀完 40 頁備忘錄，brief 會直接指出相關的 3 段，點進去可以看到原文。因為回覆要署名，他一定會親自核對（trust but verify），確保有 human in the loop<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 會從 40 頁備忘錄中標出相關的 3 段，點開就能看原文。回覆要署 Mark 的名，所以他一定親自核對（trust but verify，信任但要查證），讓關鍵判斷一定有人把關，這就是 human in the loop。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=135s\" target=\"_blank\">02:15</a> 確認見解後，他請 Claude 草擬回覆給產品團隊，Claude 會先請他核准。Claude 也能關閉 Jira 票，讓團隊之後遇到同類問題時有脈絡可查<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 確認判斷沒問題後，Mark 請 Claude 草擬回覆給產品團隊，送出前 Claude 會先徵求他同意。Claude 也能關閉 Jira（追蹤工作事項的系統）上的這張票，留下紀錄供之後參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0&t=135s\" target=\"_blank\">02:15</a> 這樣能累積一套知識庫，法務部門的人，必要時全公司的人都能查閱，避免形成資訊孤島<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個問題的處理過程都留下紀錄，慢慢累積成知識庫，法務同事、必要時全公司都查得到。這樣就不會形成資訊孤島（information silos），也就是答案只存在某個人的腦袋或信箱裡。</span>\n\n📘 術語<br><b>/brief</b>（/brief 指令（skill））：需要快速掌握特定產品時使用，會整理出當初的結論、這次的變更和受影響的部分<br><b>human in the loop</b>（人類參與把關）：回覆要以律師本人名義送出，所以要親自核對原文，秉持 trust but verify<br><b>information silos</b>（資訊孤島）：把結果記錄到 Jira 票並累積成知識庫，讓法務部門乃至全公司都能查閱，避免形成孤島\n\n📺 <a href=\"https://www.youtube.com/watch?v=EPUg9pmfPk0\" target=\"_blank\">Claude Cowork for legal teams</a>（2026/05/18 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_Lbml7IuGJYw",
        "title": "🎬 開始使用 Claude Cowork",
        "category": "產品功能",
        "text": "<b>介紹 Claude Cowork 的設定方式，並示範如何讓 Claude 直接整理本機檔案</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹 Claude Cowork：Claude 桌面版裡的「交辦模式」，你可以把一整件事交給 Claude，讓它自己做完。影片從開啟方式、權限設定講到實際整理資料夾。如果你用 Claude 還停在一問一答，看完會知道怎麼讓它直接在你電腦上動手做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=1s\" target=\"_blank\">00:01</a> Cowork 可以把完整任務交給 Claude。本機檔案它能直接找、直接改；雲端上的東西透過 Google Drive、Notion、Slack 等服務連接；瀏覽器上的則透過 Claude in Chrome 處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cowork 能把一整件事交給 Claude 做完。電腦裡的檔案它可以直接找、直接改。雲端資料（例如 Google 雲端硬碟、Notion 筆記、Slack 對話）要先接上。網頁上的事交給 Chrome 擴充功能 Claude in Chrome 處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=1s\" target=\"_blank\">00:01</a> Claude Cowork 已在 macOS 和 Windows 版的 Claude Desktop app 全面開放，適用 Pro、Max、Team、Enterprise 使用者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Desktop 是裝在電腦上的 Claude 應用程式，不是網頁版。Mac 和 Windows 都能用，但要付費方案：Pro、Max 是個人訂閱，Team、Enterprise 是團隊和公司方案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=41s\" target=\"_blank\">00:41</a> 打開 Claude Desktop，點 Cowork 分頁。一般聊天是和 Claude 一步一步合作；Cowork 則是把任務交出去，由 Claude 處理剩下的部分，你可以去忙別的事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 兩者的差別在合作方式。一般聊天像跟同事你一句我一句慢慢討論；Cowork 像把工作交給助理，交代完你就去忙別的，剩下的由它處理。入口是桌面 app 裡的 Cowork 分頁。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=41s\" target=\"_blank\">00:41</a> 第一步：給 Claude 存取電腦上某個資料夾的權限。它會先徵求同意，才修改檔案系統，之後就能直接讀取、建立、編輯那個資料夾裡的檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 先指定一個資料夾給它用，等於劃好它的工作範圍。它要改檔案之前會先問你，你同意後，它才能在這個資料夾裡讀檔、新增檔案、修改內容。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=73s\" target=\"_blank\">01:13</a> 可以把常用資料夾加到最愛，或選多個資料夾。第二步：連接工具（connectors）；第三步：如果已設定 Claude in Chrome，也能處理瀏覽器上的任務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常用資料夾可以加到最愛，也能一次選好幾個。第二步是接 connectors，也就是把 Claude 連到你平常用的服務，讓它看得到工作背景。第三步是裝好 Claude in Chrome，網頁上的事也能交給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=106s\" target=\"_blank\">01:46</a> 在 Settings 的 Cowork 分頁可以設定全域指示。要注意：Cowork 的 session 存在本機裝置上，Claude 執行任務時桌面 app 必須保持開啟<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 設定裡可以寫 global instructions，就是每次任務都會自動套用的固定交代，例如你的職務、檔案要存成 Word。session 是每次任務的紀錄，存在你自己的電腦上，所以它做事時 app 不能關。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=141s\" target=\"_blank\">02:21</a> 示範整理 Downloads 資料夾：先要 Claude 掃描內容、提出計畫。Claude 標出四個疑似重複的檔案，使用者請它把其中兩個移到 review 資料夾，不要刪除<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範整理「下載」資料夾：先請 Claude 看過一遍、提出方案，不急著動手。它找出四個疑似重複的檔案，使用者只讓它把其中兩個搬到 review（待確認）資料夾，先不刪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=201s\" target=\"_blank\">03:21</a> Cowork 的核心流程：Claude 先提出計畫，等你核准才動手；你可以調整計畫、改變做法，或叫它跳過某些步驟。進度可以在右上角查看<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ core Cowork loop 是它固定的做事順序：先交計畫，你同意了才執行。計畫不滿意可以改、換做法，或叫它跳過某幾步。想知道做到哪裡，看畫面右上角的進度就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw&t=234s\" target=\"_blank\">03:54</a> 建議先從範圍明確的任務開始，並且一定要檢查 Claude 的產出。你交出去的是工作，不是判斷<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始先挑範圍小、目標清楚的事，例如整理某一個資料夾，不要一開口就叫它整理整台電腦。做完一定要自己檢查：它可以幫你動手，但哪些該留、做得對不對，還是由你決定。</span>\n\n📘 術語<br><b>connectors</b>（連接器）：把 Claude 連到各種服務，讓它從你平常工作的地方取得脈絡<br><b>Claude in Chrome</b>（Chrome 版 Claude）：設定好之後，Cowork 可以用它處理瀏覽器任務：讀網頁、從網站擷取資料、在分頁之間切換<br><b>global instructions</b>（全域指示）：在 Settings 的 Cowork 分頁設定，套用到每個 session，例如你的職務背景，或指定用 Word 檔而不是 markdown 建立檔案<br><b>core Cowork loop</b>（Cowork 核心流程）：Claude 先提出計畫，等你核准後才動手，然後直接在檔案系統裡執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=Lbml7IuGJYw\" target=\"_blank\">Getting started with Claude Cowork</a>（2026/05/08 · 4 分鐘）",
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
        }
      },
      {
        "id": "yt_TkSZqH0n7m0",
        "title": "🎬 用 Claude 優化 PowerPoint 簡報",
        "category": "產品功能",
        "text": "<b>用 Claude 在 PowerPoint 裡新增投影片、局部修改，並把條列和表格轉成原生圖表</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼在 PowerPoint 裡用 Claude 把一份做好的簡報再修得更好。內容有三種：新增投影片、只改你選起來的那一小塊，以及把一大堆字或表格改成可以直接編輯的圖表。平常常要改簡報、又不想每次重做整份的人，很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=42s\" target=\"_blank\">00:42</a> 在指令最後加一句「需要時可以先提問」，Claude 會先讀過現有內容、找出缺什麼，再問你要放哪些 AI native 業者、內容要多技術，然後才動手做投影片<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在指令最後加一句「需要時可以先提問」，Claude 會先讀完簡報、找出缺什麼，再問你 clarifying questions（動手前的確認問題），例如要放哪些 AI native 業者（以 AI 起家的公司）、內容要多技術。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=73s\" target=\"_blank\">01:13</a> 新投影片的字型、顏色、間距都跟原本的簡報一致。選取投影片後要求補一個資料點，Claude 只改這張，也會說明新資料的來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新做的投影片會沿用原本的字型、顏色和間距，不用自己重調格式。選一張投影片請它補一個資料點，它只改那一張，還會說明新資料從哪來，方便你查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=103s\" target=\"_blank\">01:43</a> Claude 知道你目前選取的是哪張投影片、哪個物件，所以可以快速做指定範圍的修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 看得到你目前選了哪張投影片、哪個文字框或圖表。先選好再下指令，就不必費力描述「第幾頁左邊那段」，它知道要改哪裡，小修改很快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=134s\" target=\"_blank\">02:14</a> 選取法規投影片的 compliance 段落，要求濃縮成一行；Claude 只改這一段，同一張投影片的另外三段都沒動<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 在法規那張投影片只選 compliance（法規遵循）這一段，請它濃縮成一行。結果只有這段變短，同一頁另外三段都沒動。選多少改多少，不用擔心它順手改到別的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=164s\" target=\"_blank\">02:44</a> 選取標題，要求改得更貼近簡報要講的故事，Claude 把標題改成「regulation as a growth catalyst」，內文不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 選取標題，請它改得更貼近整份簡報要講的故事。它改成「regulation as a growth catalyst」（法規是成長的推力），內文完全沒動。適合把平淡的標題改成有觀點的一句話。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=225s\" target=\"_blank\">03:45</a> 把條列很多的投影片轉成四個區塊，每塊有趨勢名稱、關鍵數字和一句說明；都是原生 PowerPoint 圖形，可以個別移動、縮放、改色<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 字很多的條列頁，可以請它整理成四個區塊，每塊放趨勢名稱、關鍵數字和一句說明。做出來是 native PowerPoint visuals（原生圖形，不是貼上去的圖片），可以個別拖移、縮放、改色。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=286s\" target=\"_blank\">04:46</a> 把列出五家公司的表格轉成 2x2 矩陣（x 軸是營收規模、y 軸是成長率），用原生圖形和標籤排出來，之後可以直接修改<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 列了五家公司的表格，可以轉成 2x2 矩陣：橫軸是營收規模，縱軸是成長率，每家公司按數據放到對應位置，一眼就看出誰大、誰成長快。同樣是原生圖形，之後可以直接改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0&t=350s\" target=\"_blank\">05:50</a> 把只能呈現一個面向的長條圖換成 clustered horizontal bar chart，同時呈現市占率和成長率，不用再看圖例文字<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的長條圖一次只能比一件事。換成 clustered horizontal bar chart（每家公司並排兩條橫條的分組圖），市占率和成長率一起看，不用再來回對照圖例。</span>\n\n📘 術語<br><b>clarifying questions</b>（釐清問題）：Claude 動手前先問的問題，例如要放哪些 AI native 業者、內容要多技術<br><b>native PowerPoint visuals</b>（原生 PowerPoint 圖像）：用原生圖形和文字方塊做的，不是靜態圖片，可以個別移動、縮放、改色、編輯<br><b>2x2 matrix</b>（2x2 矩陣）：x 軸是營收規模、y 軸是成長率，依表格資料標出每家公司的位置<br><b>clustered horizontal bar chart</b>（群組橫條圖）：用來取代原本的長條圖，一次就看得到市占率和成長率兩個面向\n\n📺 <a href=\"https://www.youtube.com/watch?v=TkSZqH0n7m0\" target=\"_blank\">Refining a PowerPoint with Claude</a>（2026/04/16 · 6 分鐘）",
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
        }
      },
      {
        "id": "yt_TxS-1invhzg",
        "title": "🎬 用 Claude 製作 PowerPoint 簡報",
        "category": "產品功能",
        "text": "<b>示範 Claude in PowerPoint 如何依品牌範本產生並修改整份簡報</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片示範怎麼在 PowerPoint 裡直接請 Claude 做一整份簡報，做出來的樣子會照公司的品牌範本走。如果你常做簡報，又常把時間花在對齊字型、調顏色、搬投影片，看完就知道哪些雜事可以交給它。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=2s\" target=\"_blank\">00:02</a> Claude in PowerPoint 是 AI agent，會讀取投影片版面、字型和配色，產生並修改符合品牌風格的投影片<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude in PowerPoint 就是裝在 PowerPoint 裡的 Claude。AI agent 是指會自己動手做事的 AI，不只是回答問題。它會先看懂你簡報的版面、字型和顏色，再照這套風格做新的投影片或修改舊的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=2s\" target=\"_blank\">00:02</a> Claude 知道你選取的是哪張投影片、哪個物件，也能把條列清單轉成可以直接編輯的圖表<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你點了哪張投影片、哪個文字框，它就知道你指的是哪一個，不用再描述位置。它也能把一串條列文字變成圖表，而且是還能改數字、改樣式的 PowerPoint 圖表，不是一張改不了的圖片。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=33s\" target=\"_blank\">00:33</a> 可以用加號按鈕上傳其他檔案，給 Claude 更多脈絡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對話框旁邊的加號可以上傳其他檔案，例如報告或資料表。等於把參考資料交給它，它做簡報時就有依據，不用全靠自己猜。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=33s\" target=\"_blank\">00:33</a> 示範：在品牌範本裡要求產生 10 張評估 fintech 產業的簡報，並指定主題與「分析、以數據為本」的語氣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範者在品牌範本裡（template，就是公司做好的版面和配色樣板）請它做 10 張評估 fintech（金融科技，像行動支付、網路銀行）產業的簡報，也指定了主題和「分析、以數據為本」的語氣。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=63s\" target=\"_blank\">01:03</a> 產出的字型、顏色、間距都和範本一致；Claude 修改前會先徵求同意，也會說明資料來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做出來的頁面字型、顏色、間距都跟範本一樣，不用自己再調。它要改你的簡報之前會先問你同不同意，也會告訴你資料從哪裡來，方便你自己查證。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=123s\" target=\"_blank\">02:03</a> 摘要頁有六點太多，要求改成三個重點（粗體標題＋一句說明），版面維持不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ executive summary（摘要頁）是接在標題頁後面、讓人一眼看懂結論的那一頁。原本塞了六點太多，示範者請它濃縮成三點，每點一個粗體標題加一句說明，而且版面不能跑掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=154s\" target=\"_blank\">02:34</a> 第 4、5 張內容大幅重疊，要求合併成一張；Claude 刪除多出來的投影片前會先詢問<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第 4、5 張講的內容大半重複，示範者請它合併成一張。合併後多出來的那張，它刪除之前會先問你，不會自己偷偷刪掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg&t=184s\" target=\"_blank\">03:04</a> 把法規環境那張移到市場規模之後，讓論述順序更合理；Claude 負責機械性工作，並維持範本的完整性<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 把講法規環境的那張移到市場規模後面，先講市場有多大、再講有哪些規範，論述會比較順。搬移、排版這些機械性的工作交給 Claude，它也會顧好範本格式；怎麼講由你決定。</span>\n\n📘 術語<br><b>Claude in PowerPoint</b>（PowerPoint 裡的 Claude）：會讀取版面、字型、配色，並產生、修改符合品牌風格投影片的 AI agent<br><b>template</b>（範本）：已經載入的品牌範本，內含現成的投影片版面和配色<br><b>executive summary</b>（執行摘要）：產出的簡報裡，接在標題頁後面的摘要投影片\n\n📺 <a href=\"https://www.youtube.com/watch?v=TxS-1invhzg\" target=\"_blank\">Building a PowerPoint with Claude</a>（2026/04/16 · 4 分鐘）",
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
        }
      },
      {
        "id": "yt_54BdUqMQUMI",
        "title": "🎬 Claude in Excel 入門",
        "category": "產品功能",
        "text": "<b>示範在 Excel 裡用 Claude 問答、除錯、解釋公式、整理資料和建立模型</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 官方的入門示範，教你在 Excel 裡直接叫出 Claude，用對話完成查資料、抓錯、看懂公式、整理表格，甚至建財務模型。平常會用 Excel、但公式或分析卡關的人，看完就知道哪些事可以交給它做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=5s\" target=\"_blank\">00:05</a> Claude in Excel 是試算表內建的 AI agent。Mac 按 Control+Option+C、Windows 按 Control+Alt+C 開啟。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude in Excel 是直接內建在 Excel 裡的 AI 助手。AI agent 指的是不只會回答、還會自己動手操作的 AI。Mac 按 Control+Option+C，Windows 按 Control+Alt+C 就能叫出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=36s\" target=\"_blank\">00:36</a> 可以直接問活頁簿裡的資料。例如問差旅和餐費有沒有低於總支出 40%，Claude 會算出百分比，並列出算式讓你核對。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不用自己寫公式，直接用問的就好，例如「差旅加餐費有沒有低於總支出 40%」。它會算出比例，也會把算式列出來，讓你自己核對，不用盲目相信。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=66s\" target=\"_blank\">01:06</a> 協助除錯。Claude 會追出錯誤來源：D6 的公式是營收除以數量，但 C6 是空的，所以變成除以零。它建議補上缺漏資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 表格出現錯誤時，它會往回追原因。範例中 D6 的公式是「營收÷數量」，但 C6 的數量沒填，變成除以零才出錯。它建議的解法是把缺漏的資料補上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=131s\" target=\"_blank\">02:11</a> 解釋看不懂的公式。Claude 會逐段拆解 VLOOKUP 的參數，並附上 citation boxes，可以直接跳到被引用的儲存格。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ VLOOKUP 是查表用的公式，影片用它把分數換成等第。Claude 會逐段說明查什麼值、去哪張表查、取第幾欄；true 代表近似比對。回覆裡的 citation boxes 是小方框，點一下就跳到被引用的那格。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=191s\" target=\"_blank\">03:11</a> 可以執行多步驟任務。它清理資料前會先徵求同意；完成後回報刪掉 3 筆重複資料、34 筆資料依日期排序，並建立 historical 工作表。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它能一次做完好幾個步驟。動手清理資料前會先問你同不同意，做完再回報結果：刪掉 3 筆重複、34 筆資料依日期排好，還另外建了一張叫 historical（歷史資料）的工作表。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=222s\" target=\"_blank\">03:42</a> 依歷史營收建立 2026–2028 三年預測。成長率假設放在 assumption 工作表，預測值用公式連動，屬於動態模型。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它能根據過去的營收，推算 2026–2028 年的預測。成長率這類假設集中放在 assumption（假設）工作表，預測值用公式連過去，所以改一個假設，後面的數字會跟著變。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=283s\" target=\"_blank\">04:43</a> 建立 DCF 模型：折現率 10%、終值成長率 3%、預測五年現金流，算出 implied enterprise value。調整假設後估值會自動更新。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ DCF 是估算公司價值的方法：預測未來五年的現金流和五年後的終值（年成長 3%），再用 10% 的折現率換算回現在的價值，加總得出 implied enterprise value（推算的企業價值）。改了假設，估值會自動重算。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI&t=313s\" target=\"_blank\">05:13</a> 可以建立 pivot table 和圖表，也能修改圖表類型、座標軸、標題和顏色。重要成果要自己驗證，敏感資料要遵守組織的資料處理政策。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ pivot table（樞紐分析表）能把大量資料依類別自動加總，功能很強但不好學，現在可以請它代為建立，圖表的類型、座標軸、標題和顏色也能叫它改。不過重要結果要自己檢查，敏感資料要照公司的規定處理。</span>\n\n📘 術語<br><b>VLOOKUP</b>（VLOOKUP 查閱函數）：影片中用來把分數換成等第；參數包括 lookup value、table array、column index，true 代表近似比對<br><b>citation boxes</b>（引用框）：Claude 回覆中的方框，點一下就能直接跳到被引用的儲存格<br><b>DCF model</b>（DCF 模型）：預測自由現金流、計算終值，再全部折現回現值，得出 implied enterprise value<br><b>pivot table</b>（樞紐分析表）：Excel 最強大、也最難學會的功能之一；Claude 可以代為建立\n\n📺 <a href=\"https://www.youtube.com/watch?v=54BdUqMQUMI\" target=\"_blank\">Getting started with Claude in Excel</a>（2026/01/30 · 7 分鐘）",
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
        }
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
        "text": "<b>Stripe 執行長談如何用 Claude Code 加速開發，同時守住高可靠度</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：Stripe 是全球大型的線上金流公司，執行長 Patrick Collison 在這支影片分享，他們的工程師怎麼大量使用 Claude Code（Anthropic 出的 AI 寫程式工具）加快開發，同時讓付款系統不出包。一般來說，做得快和做得穩很難兼顧，他拿出實際數字和做法，說明 Stripe 怎麼兩邊都顧到，所以值得一看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=31s\" target=\"_blank\">00:31</a> Stripe 核心 API 的可靠度達 five and a half nines，同時堅持持續部署，希望一天內多次拿到客戶回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Stripe 的核心 API（商家網站串接 Stripe 收款用的接口）穩定度是 99.9995%，換算下來一年大約只停擺兩分半鐘。即使要求這麼高，他們還是程式一改好就上線，一天能收到好幾輪客戶反應。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=154s\" target=\"_blank\">02:34</a> 一位工程師在上半年（H1）合併了 600 多個 pull request，全部用 AI 寫，只有一個被 revert<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有位工程師今年上半年（H1）合併了 600 多個 pull request（工程師提交的一批程式修改，審核通過才會併入正式程式），全部由 AI 撰寫，只有 1 個因為出問題被撤回（revert）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=186s\" target=\"_blank\">03:06</a> 內部工具 Minions 可從 Slack 或網頁介面用 prompt 派工，自動開新 VM 完成任務、跑測試並送出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 內部工具 Minions 可以讓人在 Slack（公司內部的聊天軟體）或網頁上打一段指令派工作。它會自己開一台 VM（雲端上臨時開的電腦）寫程式、跑測試，完成後送出等人審核。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=218s\" target=\"_blank\">03:38</a> 過去 18 個月每個 pull request 的品質提升；單位時間事故數略增但多為小事故，整體可靠度基本不變<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一年半，每次提交的程式品質反而變好。出事的次數稍微變多，但大多是小問題，整體穩定度沒有下降。也就是說，開發速度變快了，但沒有拿可靠度去換。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=279s\" target=\"_blank\">04:39</a> 守住品質的關鍵是依靠 invariants 與硬性關卡，而不是主觀、看情況或機率性的東西；Stripe 從 2017 年就開始投資資料防護<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 守住品質靠的是 invariants（任何情況下都必須成立的規則），加上沒通過就一律擋下的關卡，而不是靠人的感覺或碰運氣。Stripe 從 2017 年就開始投資保護資料的機制。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=402s\" target=\"_blank\">06:42</a> 每台 devbox 都預裝 Claude Code；Stripe Projects 由 2～3 位工程師約兩個月從構想做到公開上線，整合約 50 個服務<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每台工程師用的開發環境 devbox 都預先裝好 Claude Code。Stripe Projects 讓 agent（能自己連續做事的 AI）輕鬆到 Vercel 等服務開帳號，由 2～3 人花約兩個月做完上線，串接了約 50 個服務。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=678s\" target=\"_blank\">11:18</a> 有工程師先用最聰明的模型花大量心力規劃，再派出 10 台 devbox 由不同 agent 執行計畫的不同部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有工程師先讓最聰明的模型花很多力氣把計畫想清楚，再開 10 台 devbox，讓不同的 agent 各自負責計畫的一部分，同時進行。最多心力放在規劃，執行則交給多個 AI 分頭做。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ&t=861s\" target=\"_blank\">14:21</a> 過去一年在 Stripe 上新成立的公司數約增為兩倍；Stripe 預期約三年內多數交易會發生在 agent 之間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一年，在 Stripe 上新成立的公司大約多了一倍。Stripe 預估大約三年內，多數交易會是 AI agent 之間直接完成，而不是人自己點按鈕付款。</span>\n\n📘 術語<br><b>devbox</b>（開發機）：Stripe 工程師的開發環境，每台都預裝 Claude Code，並具備監測與可觀測性<br><b>Minions</b>（Minions（內部工具））：透過 Slack 或網頁用 prompt 調度 VM，自動實作功能、跑測試並送出<br><b>Stripe Projects</b>（Stripe Projects）：讓 agent 能非常輕鬆地在 PostHog、Vercel 等服務開帳號的產品<br><b>five and a half nines</b>（五個半 9 的可靠度）：Stripe 核心 API 的極高可靠度標準\n\n📺 <a href=\"https://www.youtube.com/watch?v=S_lzYIvtEaQ\" target=\"_blank\">Patrick Collison on Claude Code at Stripe</a>（2026/09/24 · 17 分鐘）",
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
        }
      },
      {
        "id": "yt_LQkcGtkSLNQ",
        "title": "🎬 Frontier Day｜Claude 新創專場",
        "category": "企業與客戶案例",
        "text": "<b>新創創辦人分享用 Claude 與 AI 加速開發、研究與成長的心得</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在 Frontier Day 活動上拍攝，幾位新創創辦人分享他們怎麼用 Claude 和 AI 加快開發、研究和公司成長。值得看的地方是，他們講的都是實際做出來的成果：生物研究、遊戲開發都有，可以看到 AI 在真實工作裡改變了多少東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=0s\" target=\"_blank\">00:00</a> Frontier Day 讓大家在前所未有的變化中互相學習；AI 讓人把腦中的想像世界實際做出來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Frontier Day 是這支影片記錄的活動。大家都在摸索同一波新變化，互相交流學得最快。AI 讓「我想做一個東西」不再只停在腦中，而是真的能動手做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=31s\" target=\"_blank\">00:31</a> 現在唯一不變的就是變化，願意擁抱變化、敢想得更大的創辦人才會成功<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 工具和做法幾個月就換一輪，昨天的好方法今天可能就過時了。只守著舊計畫的創辦人容易被甩開。願意一直調整、敢把目標訂得更大的人，才抓得住這波機會。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=31s\" target=\"_blank\">00:31</a> 用 AI 打造的應用越來越大，可靠性（reliability）成為越來越大的挑戰，需要更好的工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 可靠性（reliability）指系統能不能穩定、每次都照預期運作。小工具偶爾出錯沒關係，但應用越做越大、跑得越快，一出錯影響就越大，所以需要更好的工具來顧好品質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 原本可能要花好幾年的生物研究專案，現在在產品上做分析只要幾分鐘到幾小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 過去一個生物研究專案，從整理資料到分析出結果，可能要花好幾年。現在把資料放進他們用 AI 做的產品裡分析，幾分鐘到幾小時就有結果，研究者能更快驗證想法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 遊戲開發者表示，現在大約一小時就能做出全新的遊戲循環，而且是大型多人 3D 世界<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 遊戲循環是玩家一直重複在做的核心玩法，例如打怪、拿寶物、升級、再去打怪。以前做一套新玩法很費工，現在大約一小時就能做出來，而且是很多人同時上線的 3D 世界。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=61s\" target=\"_blank\">01:01</a> 新模型推出時會跑大量 evals，最重視智慧與決策能力，這是 Claude 特別突出的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ evals 是一整套測驗，用來檢查 AI 模型在各種任務上的表現。受訪者每次遇到新模型都會跑一輪，最在乎它夠不夠聰明、判斷做得對不對，他們認為 Claude 在這方面特別強。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ&t=95s\" target=\"_blank\">01:35</a> 有受訪者說過去一年的成果超過之前整整三年半，很大一部分要歸功於 Claude<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 有人說過去一年做出來的東西，比之前三年半加起來還多，很大一部分要歸功於 Claude。可見 AI 已經不只是幫忙省點時間，而是直接改變了一個團隊能做完多少事。</span>\n\n📘 術語<br><b>evals</b>（評測）：新模型推出時會跑一大套 evals，首要看智慧與決策能力<br><b>reliability</b>（可靠性）：應用越做越大、速度越來越快，可靠性成為越來越大的挑戰\n\n📺 <a href=\"https://www.youtube.com/watch?v=LQkcGtkSLNQ\" target=\"_blank\">Frontier Day | Claude for startups</a>（2026/09/15 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_FoteuzPpx7E",
        "title": "🎬 與客戶一起打造企業級 Frontier Safeguards",
        "category": "企業與客戶案例",
        "text": "<b>Uber、Visa 談與 Anthropic 在架構層級合作打造安全與隱私保護機制</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片請來 Uber 和 Visa，談他們怎麼和 Anthropic（開發 Claude 的 AI 公司）一起設計保護機制，讓大公司敢把敏感業務交給 AI。值得看的地方是，它講清楚企業信任 AI 的關鍵：不是靠 AI 公司口頭承諾，而是把系統設計成本來就碰不到客戶資料。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=0s\" target=\"_blank\">00:00</a> Anthropic 和 Uber 的共同點，是對安全（safety）發自骨子裡的重視<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ safety 指避免 AI 出錯傷人或被人拿去亂用。叫車平台 Uber 和 Anthropic 合得來，是因為兩邊都把安全當成公司的本性，不是拿來對外宣傳的口號。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=0s\" target=\"_blank\">00:00</a> 信任花了幾十年才建立起來，現在風險更高了，不打算隨便把它消耗掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所以 Visa 導入 AI 不是在趕流行。AI 能碰到的資料更多、能做的事也更多，出包的代價就更大。幾十年累積的信任，不能為了嘗鮮拿去賭。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 雙方一起在架構層級（不只是政策層級）開發新的安全與隱私功能<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 政策層級像是白紙黑字承諾「我們不會亂看你的資料」，架構層級則是系統本來就設計成看不到。前者得靠大家守規矩，後者靠結構擋住，可靠很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 資料可以存在自己的雲端、由自己控制，也能持續取得各種訊號；logs 由自己掌控，除非自己同意，否則不會流到別的地方<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ logs 是系統自動記下「誰、什麼時候、做了什麼」的紀錄檔。企業資料放在自己的雲端、自己管，需要的各種監測訊號照樣拿得到，紀錄不會自己跑出去，要外流得先經過企業同意。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=44s\" target=\"_blank\">00:44</a> 審查（review）只由機器進行，產出刻意限定為事先定義好的 findings，不包含客戶內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ review 是檢查 AI 的使用狀況有沒有出問題，findings 是檢查後得出的結論。這裡全程由機器檢查、沒有人去看，而且只能回報事先定好的幾類結論，客戶的原始內容不會被帶出去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=76s\" target=\"_blank\">01:16</a> Visa 無法獨力完成，需要 Anthropic 這類 frontier labs 提供關鍵要素，把 AI 帶進網路防禦的每個環節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ frontier labs 指開發最先進 AI 模型的公司，Anthropic 就是其中一家。Visa 很懂支付和防詐騙，但最尖端的 AI 得靠這類公司，兩邊合作，才能把 AI 用在防駭客的每個環節。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E&t=76s\" target=\"_blank\">01:16</a> 這些 safeguards 讓 AI 能用在以前沒辦法用的業務領域，同時保護資訊與使用情境<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ safeguards 就是讓 AI 能安全使用的保護機制。有了它，以前因為資料太敏感、不敢交給 AI 的業務也能開始用，而且資料內容和拿 AI 做什麼都能受到保護。</span>\n\n📘 術語<br><b>safeguards</b>（防護機制）：讓企業能把 AI 用在以前做不到的業務領域，同時保護資訊與使用情境<br><b>frontier labs</b>（前沿 AI 實驗室）：像 Anthropic 這樣的實驗室，提供 Visa 把 AI 帶進網路防禦所需的要素<br><b>machine-only review</b>（僅限機器的審查）：審查只由機器進行，產出僅限事先定義的 findings，不含客戶內容\n\n📺 <a href=\"https://www.youtube.com/watch?v=FoteuzPpx7E\" target=\"_blank\">Building Enterprise Frontier Safeguards with our customers</a>（2026/09/01 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_YCSeSVHNj7k",
        "title": "🎬 用 Claude 做再生式養蜂",
        "category": "企業與客戶案例",
        "text": "<b>一位做了約十年再生式養蜂的養蜂人，分享 Claude 怎麼幫她整理資料</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的講者是一位養蜂人，做了將近十年重視順應自然的養蜂方式。她分享怎麼用 Claude（Anthropic 開發的 AI 助理）整理工作上累積的資料。這支影片適合想知道「靠經驗吃飯的傳統工作」能怎麼用 AI 的人：AI 不取代她的判斷，只是幫她把資訊整理好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=0s\" target=\"_blank\">00:00</a> 講者做再生式養蜂約十年，工作一部分靠直覺，但也有大量資訊，Claude 幫她同時兼顧兩者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她做再生式養蜂（Regenerative beekeeping，重點在觀察蜜蜂在野外怎麼生活）快十年了。這行一半靠經驗和手感，一半要記很多資訊，Claude 幫她處理資訊那一半。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=0s\" target=\"_blank\">00:00</a> 分蜂（swarming）是蜜蜂自然繁殖的方式，離巢的蜂群會聚在樹枝之類的地方，這時她就會接到電話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分蜂（swarming）是蜜蜂自然繁殖的方式：一群蜂離開原本的蜂巢去找新家，途中會先擠成一團停在樹枝這類地方。有人看到就會打電話找她處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=31s\" target=\"_blank\">00:31</a> 講者認為養蜂主要靠觀察，跟蜜蜂相處越久越了解牠們，也越清楚什麼是正常狀態<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她覺得養蜂最重要的是觀察。跟蜜蜂相處越久，就越清楚牠們平常是什麼樣子。一旦有地方不對勁，她也比較容易發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=31s\" target=\"_blank\">00:31</a> Claude 幫她把累積的常見問題資料整合成一頁式 FAQ，方便直接交給客戶<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 她手上累積了很多大家常問的問題。Claude 幫她整理成一頁 FAQ（常見問題集，把常見問題和答案列在一起），客戶來問時直接給這一頁就好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k&t=63s\" target=\"_blank\">01:03</a> 沒有一體適用的解法，每個蜂巢、每種情境都要個別判斷；她認為這更像是和大自然建立夥伴關係<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂沒有標準答案，同一招不一定每個蜂巢都適用，要看當下的狀況判斷。她覺得這比較像是和大自然合作，而不是一個人說了算。</span>\n\n📘 術語<br><b>Regenerative beekeeping</b>（再生式養蜂）：重點在觀察蜜蜂在野外怎麼生活<br><b>Swarming</b>（分蜂）：蜜蜂自然繁殖的方式，就像蜂巢自己生出新的蜂巢\n\n📺 <a href=\"https://www.youtube.com/watch?v=YCSeSVHNj7k\" target=\"_blank\">Regenerative beekeeping with Claude</a>（2026/07/14 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_CuzipWWYvFo",
        "title": "🎬 用 Claude 輔助再生式養蜂",
        "category": "企業與客戶案例",
        "text": "<b>一位再生式養蜂人分享怎麼用 Claude 整理資料，並談對養蜂的看法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的主角是一位做了約 10 年「再生式養蜂」的養蜂人。再生式養蜂（regenerative beekeeping）是先觀察蜜蜂在野外怎麼生活，再照著牠們的習性來養的方式。講者分享自己怎麼看養蜂，也講到 Claude（Anthropic 做的 AI 助理）怎麼幫忙整理資料。值得看的是：在一個很靠經驗和感覺的行業裡，AI 適合幫忙哪一塊。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=0s\" target=\"_blank\">00:00</a> 講者從事再生式養蜂大約 10 年，認為這份工作有靠直覺的部分，也有大量資訊，Claude 幫助她同時兼顧兩者<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂一半靠經驗和感覺，另一半是一大堆要記、要查、要整理的資訊。講者把整理資訊交給 Claude，自己就能把心力留給需要親自判斷的現場。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=0s\" target=\"_blank\">00:00</a> 分蜂（swarming）是蜜蜂自然繁殖的方式，就像蜂群自己生出新蜂群；蜂群飛走後會聚在樹枝等地方，這時講者就會接到電話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分蜂（swarming）是蜜蜂自然繁殖的方式：一群蜂分出一部分飛走，自己組成新的蜂群。飛出去的蜂常先團團聚在樹枝上，有人看到就會打電話找講者處理。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=30s\" target=\"_blank\">00:30</a> 講者認為養蜂主要靠觀察，跟蜜蜂相處越久就越了解牠們，也會知道什麼狀態對牠們來說是正常的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 養蜂沒有捷徑，就是持續觀察。看久了就知道健康的蜂群平常是什麼樣子，哪裡跟平常不一樣，也才看得出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=30s\" target=\"_blank\">00:30</a> Claude 幫講者把從 FAQ 收集的資料整合起來，整理成一頁的電子報，方便分享給客戶<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ FAQ 是「常見問題集」，也就是客戶常問的問題和答案。講者把從這裡收集到的零散資料交給 Claude，整合成一頁電子報，方便直接分享給客戶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=60s\" target=\"_blank\">01:00</a> 沒有一體適用的解法，要一個蜂箱一個蜂箱、依每種情況判斷，問自己「現在怎麼做最合理」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每個蜂箱的狀況都不一樣，沒有一招用到底的標準做法。講者的原則是看眼前這一箱，問自己「現在怎麼做最合理」，再決定下一步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo&t=60s\" target=\"_blank\">01:00</a> 講者認為養蜂比較像跟大自然建立夥伴關係；看得越深，越能看到蜜蜂和其他一切的關聯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者不覺得養蜂是在「管理蜜蜂」，比較像是跟大自然合作。觀察得越仔細，越會發現蜜蜂跟周遭環境裡的一切都有關聯。</span>\n\n📘 術語<br><b>regenerative beekeeping</b>（再生式養蜂）：探索蜜蜂在野外怎麼生活的養蜂方式<br><b>swarming</b>（分蜂）：蜜蜂自然繁殖的方式，像是蜂群自己生出新蜂群\n\n📺 <a href=\"https://www.youtube.com/watch?v=CuzipWWYvFo\" target=\"_blank\">Regenerative beekeeping with Claude</a>（2026/07/07 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_9DHZLw5653E",
        "title": "🎬 Spotify 如何在超過 2,000 萬行程式碼上運行 agents——對談 Niklas Gustavsson",
        "category": "企業與客戶案例",
        "text": "<b>Spotify 分享 Honk、自動化遷移、驗證與標準化，以及 AI 帶來的工程轉變</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片裡，Spotify 的 Niklas Gustavsson 分享他們怎麼在超過 2,000 萬行程式碼裡使用 AI agent。AI agent 是一種 AI 助手，會自己規劃、改程式碼、檢查結果。影片不只講個人怎麼用，也講一家大公司怎麼讓 AI 大量改程式又穩定可靠，以及事前要先打好哪些基礎。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=190s\" target=\"_blank\">03:10</a> 個人工作流程：在 terminal 裡開多個 tmux session，5～10 個分頁，搭配一組 worktrees，背景同時跑好幾個 agents<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ terminal 是打指令的文字視窗。tmux 讓一個視窗分出很多工作區。worktree 是把同一份程式碼開成好幾個獨立的工作資料夾。他這樣做，就像同時交辦好幾位助理，各做各的，互不干擾。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=310s\" target=\"_blank\">05:10</a> 5～6 年前發現程式碼成長速度約是工程師人數的 7 倍，於是建立 fleet management 自動化維護；以前一年大約只能做 10 次遷移<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們發現程式碼長得比工程師人數快約 7 倍，靠人工維護跟不上。遷移是把大量程式碼換成新版本或新做法，以前一年只做得了約 10 次。所以他們建了 fleet management，由系統直接改遍數千個倉庫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=580s\" target=\"_blank\">09:40</a> Honk 早期靠 judge 把成功率從約 20～30% 拉到約 80%；後來模型與 agent 夠好了，就把 judge 拿掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Honk 是 Spotify 自己做的 agent 工具。早期另外派一個 AI 當 judge（評審），檢查改動是否符合要求，成功率從兩三成拉到約八成。後來模型和 agent 本身夠可靠，這關就拿掉了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=640s\" target=\"_blank\">10:40</a> Honk 架構：agent SDK 跑在 Kubernetes pod 裡；V2 讓使用者自己加工具，還能在 Linux 和 Mac OS 跑 CI builds 做驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent SDK 是 Anthropic 提供的 agent 開發套件。Kubernetes pod 是雲端上彼此隔開的小執行環境。V2 讓使用者自己加工具，改完還能在 Linux 和 Mac 上跑 CI（自動編譯和測試），確認沒改壞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=881s\" target=\"_blank\">14:41</a> 每天約 4.5 千次正式環境部署；約 2,900 名工程師；PR 速率提升超過 75%，約 73% 的 PR 由 AI 產生<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 部署就是把新版程式放上線給用戶用。約 2,900 名工程師每天上線約 4,500 次。PR 是交給同事審核的程式修改，產出速度提升超過 75%，其中約 73% 由 AI 產生。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E&t=1154s\" target=\"_blank\">19:14</a> 給工程主管的建議：投資測試自動化、驗證和標準化；程式碼越一致，agents 表現越好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 給主管的建議是先打好地基。自動化測試讓 AI 改完馬上知道有沒有弄壞，驗證機制負責把關結果，統一的寫法讓 AI 有一致的範例可學。程式碼越整齊一致，agent 表現越好。</span>\n\n📘 術語<br><b>fleet management</b>（程式碼群管理）：不再發遷移指南請各團隊手動改，而是對整個分散在數千個 repo 的程式碼庫直接做修改的基礎設施<br><b>Honk</b>（Honk（Spotify 內部工具））：從自動化程式碼變更起家，現在是建在 agent SDK 上、跑在 Kubernetes pod 裡的通用 agent 工具<br><b>judge</b>（評審（LLM 評估））：用 LLM 評估結果是否符合預期；早期很關鍵，後來模型夠好就移除了<br><b>monorepo / polyrepo</b>（單一大型 repo／多個小型 repo）：Spotify 正逐步轉向大型統一的 monorepo，但仍有數千個小型 polyrepo\n\n📺 <a href=\"https://www.youtube.com/watch?v=9DHZLw5653E\" target=\"_blank\">How Spotify runs agents across 20M+ lines of code, with Niklas Gustavsson</a>（2026/06/29 · 26 分鐘）",
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
        }
      },
      {
        "id": "yt_H3XQeGNia8o",
        "title": "🎬 The Briefing：金融服務",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 與金融業高層座談，討論產業走向與因應 AI 變化</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 找來全球大型金融公司的高層，談 AI 會怎麼改變這個產業、公司該怎麼因應。金融業一向很重視安全和風險，連他們都在想怎麼跟上 AI 的速度，他們的反省很適合一般人參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 與會者是全球最具影響力的金融服務公司 CEO、CTO 和 CIO，目的是坦誠討論產業現況、未來走向，以及 Anthropic 想怎麼當夥伴協助他們<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 與會者包括 CEO（執行長，負責整間公司）、CTO（技術長，負責技術）、CIO（資訊長，負責資訊系統）。大家關起門來說真話，談產業現況和走向，也談 Anthropic 能怎麼幫忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 一位與會者說，如果當初就知道現在知道的事，會換個做法：linear rollouts（線性推行）會太慢<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ linear rollouts（線性推行）大致是指照順序一步一步慢慢導入新工具。有位與會者回頭看，覺得照現在知道的事，這種慢慢來的做法會太慢，當初應該換個方式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=5s\" target=\"_blank\">00:05</a> 講到「速度」時，不只指速度本身，還包括安全性（security）和可擴展性（scalability）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這裡說的「快」不只是衝得快。security（安全性）是資料和系統不外洩、不被入侵；scalability（可擴展性）是從小規模試用擴大到全公司也撐得住。這三件事要一起顧到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=36s\" target=\"_blank\">00:36</a> 每個行業的每個人都要想：我該怎麼改變習慣？怎麼換個角度看事情？<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 不只金融業，每個行業的每個人都要問自己：平常做事的習慣要不要改？遇到問題時，能不能換個角度想，不要一直照老方法做？</span><br>▸ <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o&t=66s\" target=\"_blank\">01:06</a> 沒人知道變化會來得多快，所以要先做好準備；這不只是恐懼，只要應對得當，另一頭會是更好的世界<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 沒有人能預測變化會多快，所以不要等看清楚才開始動，要先準備。講者也提醒，面對 AI 不必只有害怕，只要應對得好，最後會是更好的世界。</span>\n\n📘 術語<br><b>linear rollouts</b>（線性推行）：字幕只說，以現在知道的事來看，這種推行方式會太慢\n\n📺 <a href=\"https://www.youtube.com/watch?v=H3XQeGNia8o\" target=\"_blank\">The Briefing: Financial Services</a>（2026/06/16 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_8NVZMRyCrn4",
        "title": "🎬 The Problem Solvers｜Cursor 的 Michael Truell",
        "category": "企業與客戶案例",
        "text": "<b>Cursor 的 Michael Truell 談寫程式的初衷、Cursor 的定位、和 Anthropic 的合作及公司成長</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問 Cursor（一款用 AI 幫忙寫程式的軟體）的共同創辦人 Michael Truell。他聊了自己為什麼愛上寫程式、Cursor 想做成什麼樣的工具，以及和 Anthropic（開發 Claude 的公司）的合作。如果你好奇 AI 寫程式工具背後的人在想什麼，或想知道這類工具為什麼也開始照顧不會寫程式的人，這支值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=0s\" target=\"_blank\">00:00</a> 他 12 歲開始寫程式，很快就著迷了，因為寫程式可以「沒有門檻地打造東西」：只要有一台電腦，就能把腦中的想法做出來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他 12 歲開始寫程式，著迷的原因很單純：不用租店面、不用找人批准、也不用花大錢。只要有一台電腦，腦中想到的東西就能自己動手做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=0s\" target=\"_blank\">00:00</a> Cursor 是用 AI 幫專業人士更快打造軟體的工具，目標是成為和 coding agent 協作的最佳地方，對象包括專業工程師和完全沒有工程背景的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Cursor 想成為和 coding agent 一起工作最好用的地方。coding agent 是能照你的指示自己寫程式、改程式的 AI 助手。使用者不只有工程師，也包括完全沒學過程式的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=32s\" target=\"_blank\">00:32</a> Cursor 想提供一個容易上手、同時又非常強大的工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多工具要嘛簡單但功能陽春，要嘛強大但很難學。Cursor 想兩邊都顧到：新手打開就會用，老手也能拿它處理複雜的大專案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=32s\" target=\"_blank\">00:32</a> 他很欣賞 Anthropic 對原則的堅持，也欣賞 Anthropic 從一開始就致力當一個平台，讓大家能在上面建立長久的事業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他欣賞 Anthropic 堅守自己的原則。也欣賞它從一開始就把自己定位成「平台」，讓 Cursor 這樣的公司能放心把事業長期建立在它的模型上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=62s\" target=\"_blank\">01:02</a> 他說 Cursor 能存在，一部分要歸功於 AI 模型的革命；Cursor 在產品上做的事，和 Anthropic 提升模型能力的方向高度一致<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 模型是能理解和產生文字、程式的 AI 核心，像 Claude 就是一種。模型變強，Cursor 才有機會出現。Cursor 在產品上想做的，剛好跟 Anthropic 提升模型能力的方向一致。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=92s\" target=\"_blank\">01:32</a> Cursor 的差異化在於深度的產品專注，從一開始就想讓使用者有更多自主權、更有能力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他認為 Cursor 跟別家不一樣的地方，是非常專注把產品本身做好。出發點一直是讓使用者有更多主導權、能做到更多事：AI 幫你變強，但方向盤還在你手上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4&t=122s\" target=\"_blank\">02:02</a> 兩年前 Cursor 只有 15 個人，現在有 700 人，服務超過 60% 的 Fortune 500 企業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司長得非常快：兩年前只有 15 人，現在有 700 人。Fortune 500 是美國《財星》雜誌依營收排出的前 500 大企業，其中超過六成是 Cursor 的客戶。</span>\n\n📘 術語<br><b>coding agents</b>（程式開發 agent）：字幕說 Cursor 想成為和 coding agent 協作的最佳地方，給專業工程師和非工程背景的人使用<br><b>Fortune 500</b>（財星 500 大企業）：字幕說 Cursor 服務超過 60% 的 Fortune 500\n\n📺 <a href=\"https://www.youtube.com/watch?v=8NVZMRyCrn4\" target=\"_blank\">The Problem Solvers | Michael Truell at Cursor</a>（2026/06/10 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_LrZHnKS_L6k",
        "title": "🎬 用 Claude 像律師一樣工作",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 產品律師與 Freshfields AI 負責人對談律師如何運用 Claude</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 的產品律師和國際律所 Freshfields 的 AI 負責人對談，聊律師在實際工作中怎麼用 Claude。重點不只是「AI 能不能幫忙」，而是怎麼用得更進階，以及人還得守住哪些判斷。就算你不是律師，只要工作常常要消化大量文件，也很值得參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=15s\" target=\"_blank\">00:15</a> Mark 協助帶領 Anthropic 的產品律師團隊，負責 Claude Code 等企業產品；Anna 是 Freshfields 的 AI 全球共同負責人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mark 在 Anthropic 帶產品律師團隊，負責替 Claude Code（讓 Claude 直接在電腦上寫程式、做事的工具）這類企業產品把關法律風險。Anna 在國際大型律所 Freshfields 負責全球的 AI 推動。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=46s\" target=\"_blank\">00:46</a> Freshfields 全球約 5700 名員工與律師在使用 AI，最棘手的是「context gap」：規格今天和明天可能不一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ context gap 就是「資訊落差」：律師得先搞懂產品現在長什麼樣，但工程師改得很快，今天查到的明天可能就不對了。Freshfields 有幾千人在用 AI，大家最頭痛的就是這一點。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=77s\" target=\"_blank\">01:17</a> 許多律師一開始只拿 Claude 做聊天問答；更強的用法是運用 code，讓 Claude 用本機電腦產出 Word、Excel、PowerPoint 等檔案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 很多律師只把 Claude 當成問答對象。更進階的用法是讓它寫 code（程式碼），在你的電腦上執行，直接做出 Word、Excel、簡報檔，不只丟回一段文字。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=107s\" target=\"_blank\">01:47</a> AI 擅長理解大量資訊、找出共同主題：把備忘錄、產品 roadmap、新法規放在一起，再和 Claude 對話產出新成品<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 很擅長一口氣讀完大量資料，找出彼此相關的重點。比如把備忘錄、產品 roadmap（未來要推出哪些功能的規劃表）和新法規一起丟給它，再邊聊邊整理出新的文件。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=168s\" target=\"_blank\">02:48</a> 律師的角色像幫客戶掌船，穿越險峻海峽時，靠律師的判斷讓船舵保持穩定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 意思是 AI 可以分擔很多工作，但碰到風險高、很難拿捏的關頭，還是要靠律師的專業判斷幫客戶把穩方向，這才是律師真正的價值。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k&t=199s\" target=\"_blank\">03:19</a> Anthropic 的價值觀「holding light and shade」：這項技術風險很多，但也充滿希望<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ holding light and shade 直譯是「同時抓住光和影」，是 Anthropic 的價值觀之一。意思是承認 AI 風險很多，也相信它能帶來很多好處，兩邊都不忽略。</span>\n\n📘 術語<br><b>context gap</b>（脈絡落差）：要弄清楚規格今天長什麼樣，而且明天可能就變了，工程團隊的速度又非常快<br><b>holding light and shade</b>（兼顧光明與陰影）：Anthropic 的價值觀之一，指這項技術有很多風險，但也有很多希望\n\n📺 <a href=\"https://www.youtube.com/watch?v=LrZHnKS_L6k\" target=\"_blank\">Working Like a Lawyer with Claude</a>（2026/06/08 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_CG7Rcl49C2w",
        "title": "🎬 在 Claude 模型正式推出前，這些團隊會先試著把它弄壞",
        "category": "企業與客戶案例",
        "text": "<b>搶先測試新 Claude 模型的客戶，分享測試方法、模型的進步和合作心得</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問了幾家搶先拿到新 Claude 模型的企業客戶，讓他們分享正式推出前怎麼測試模型、看到哪些進步，以及跟 Anthropic 怎麼合作。適合想知道新模型是怎麼被檢驗出來的人，也能看出該怎麼判斷一個新模型到底強在哪裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=1s\" target=\"_blank\">00:01</a> 新的 Claude 模型推出前，已經有一小群客戶在測試它、試著把它弄壞，也參與影響推出的內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新模型正式推出前，會先交給少數客戶試用。他們會故意找碴，想辦法讓模型出錯。他們回報的意見也會影響模型最後推出的樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=62s\" target=\"_blank\">01:02</a> 拿到新模型後的第一件事，是啟動 automated evals，讓它們在背景執行<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ automated evals（自動化評測）就是先準備好一整套考題，由程式自動拿去考模型、打分數。客戶拿到新模型的第一件事，就是讓這套考試在背景自己跑，不用有人一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=62s\" target=\"_blank\">01:02</a> 複雜法律任務的例子是起草 S1；有了 agentic 能力後，模型能獨立處理 S1 中越來越大的部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ S1 是美國公司申請上市時要交給主管機關的文件，內容多又專業。有了 agentic 能力，模型能自己找資料、整合內容、修改文件，所以它能獨立完成的部分越來越多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=94s\" target=\"_blank\">01:34</a> 只換掉一個模型，agent 就從有時會卡住，變成每個問題都答得又快又準；測試 agent 的成功率大約提升 20%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是會自己一步步把任務做完的 AI 助手。客戶其他設定都沒改，只換成新模型，原本偶爾會卡住的 agent 就變得又快又準，測試成功率大約提升兩成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=94s\" target=\"_blank\">01:34</a> 現在做不到的事，最能看出下一代模型會大幅進步的地方；以前從沒成功過的 evals 開始穩定通過<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想知道下一代模型強在哪，要看現在的模型做不到什麼。以前那些怎麼考都過不了的題目，新模型開始穩定過關，這就是進步最明顯的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=124s\" target=\"_blank\">02:04</a> 客戶覺得和 Anthropic 的關係比較像一起開發，而不只是買東西；兩邊幾乎每隔一天就會交談<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這些客戶不只是付錢用產品，而是跟 Anthropic 一起把模型做好。雙方幾乎每隔一天就會聯絡，回報問題、討論方向，關係比較像合作夥伴。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w&t=155s\" target=\"_blank\">02:35</a> 客戶形容在前沿開發的感覺：Dazzling（耀眼）、Compounding（複利般累積），也像站在大浪上，要努力保持平衡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 客戶用三個感覺形容：新能力很耀眼；每次進步都疊在上一次的基礎上，像複利一樣越滾越大；但變化快得像站在大浪上，得一直調整才站得穩。</span>\n\n📘 術語<br><b>automated evals</b>（自動化評測）：拿到新模型後最先做的事，讓評測在背景執行<br><b>S1</b>（S1 文件）：被舉例為特別複雜的法律任務，要交給模型起草<br><b>agentic capabilities</b>（agentic 能力）：模型能自己去找需要的資訊、整合內容並編輯文件\n\n📺 <a href=\"https://www.youtube.com/watch?v=CG7Rcl49C2w\" target=\"_blank\">Before we ship a Claude model, these teams try to break it.</a>（2026/05/28 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_M5uwBawBDpw",
        "title": "🎬 AirOps 如何追著摩擦點，用 Claude 打造 AI 產品",
        "category": "企業與客戶案例",
        "text": "<b>AirOps 分享怎麼把 agent 做到行銷人員也能用，以及兩個主要摩擦點的解法</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：AirOps 是做行銷用 AI 工具的公司。這支影片是他們產品團隊分享的經驗：怎麼把 agent 做到連不寫程式的行銷人員都能順手使用。agent 是會自己規劃步驟、動手把任務做完的 AI 助手。影片也講了過程中碰到的兩個最大卡點，以及他們怎麼解決。想把 AI 帶進團隊日常工作的人，可以拿來當參考。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=18s\" target=\"_blank\">00:18</a> 講者 Dylan 來自 AirOps 產品團隊。核心重點是：要讓 agent 容易上手很難，尤其要讓行銷人員這類非開發者也會用，過程中有很多摩擦點。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Dylan 的重點是：做出一個能跑的 agent 不算難，難在讓不會寫程式的行銷人也覺得好上手。從操作介面到產出結果，每一段都可能讓人卡住。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=140s\" target=\"_blank\">02:20</a> 舊版節點式 workflow builder 有「複雜度天花板」：得教行銷人員 liquid text、JSON 這些概念。每次出新模型，流程就要跟著改，壽命很短。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 舊工具 workflow builder 是把每個步驟畫成方塊、再用線連成流程。行銷人得先學 liquid text（範本裡插變數的寫法）和 JSON（一種資料格式）才用得來。新模型一出，流程又得重改。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=263s\" target=\"_blank\">04:23</a> Opus 4.5 推出是轉折點。他們先試過用 LLM 編譯 workflow，再試傳統 agent 框架，兩者都很脆弱。最後改用 Claude Agent SDK，靠 markdown 檔和 skills 來編排 agent。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Opus 4.5 是轉折點。他們試過讓 AI 自動產生流程，也試過套現成的 agent 框架，結果都容易出錯。最後改用 Claude Agent SDK（官方開發套件），用 markdown 文字檔和 skills（寫給 AI 的做事說明）來指揮 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=386s\" target=\"_blank\">06:26</a> AirOps Next 推出兩項功能：內容行銷 agent「Quill」，以及新的建構介面 playbooks。playbooks 類似 skill，另外支援協作、治理和版本控管。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新版 AirOps Next 有兩樣新東西：Quill 是專寫行銷內容的 agent；playbooks 是新的建構方式，本質上就是 skill，另外加了多人協作、治理（管誰能改什麼）和版本控管（保留每次修改、可以退回）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=446s\" target=\"_blank\">07:26</a> Parallel 案例：citation rate 提升 130%，share of voice 提升 42%，1 週就上線。以往用 workflow builder 通常至少要一個月左右。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 客戶 Parallel 的成果：在 ChatGPT 這類 AI 的回答裡被引用的比例（citation rate）增加 130%，品牌被提到的占比（share of voice）增加 42%。而且一週就上線，舊工具通常要一個月左右。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=568s\" target=\"_blank\">09:28</a> 摩擦點一：能做的事太多，反而逼人要聚焦。解法是做成文件式介面（類似 Google Docs），重視透明度和掌控感，並強制人工審查（human review）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一個卡點：agent 能做的事太多，反而要逼使用者聚焦。解法是做成像 Google Docs 的文件介面，讓人看得到 AI 在做什麼、自己也改得動，而且規定一定要有人審過才算數（human review）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=870s\" target=\"_blank\">14:30</a> 強制人工審查的做法：每個段落結尾可以指派審查者，agent 要等被指派的人放行才能繼續。待審項目會集中在 inbox 和 grid 裡顯示。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 具體做法是每一段結尾都可以指定審核人，對方還沒放行，agent 就停著等。所有等待審核的項目集中在 inbox（收件匣）和 grid（表格總覽），負責人一眼就知道要看哪些。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw&t=1117s\" target=\"_blank\">18:37</a> 摩擦點二：輸出品質。解法一是做專用工具，例如頁面分析和 page versus 比對。解法二是加 sub-agent：compliance check、寫作、brand kit，也可以自訂。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第二個卡點是產出品質。解法一是做專用工具，例如分析網頁、把兩個頁面拿來比較。解法二是加 sub-agent（只專做一件事的分身，不會弄亂主線），像合規檢查、寫作、brand kit（品牌資料庫），也可以自己定義。</span>\n\n📘 術語<br><b>AI search</b>（AI 搜尋）：類似 SEO，但對象換成 ChatGPT、Gemini、Claude 這類引擎，重點是品牌能不能被搜尋到<br><b>playbook</b>（playbook（操作手冊））：AirOps 新的建構介面，基本上就是 skill，另外加上協作、治理和版本控管<br><b>harness engineering</b>（harness 工程）：用車來比喻：模型是引擎，圍繞模型打造的其他部分同樣重要，決定 agent 好不好<br><b>brand kit</b>（品牌資料包）：一個知識庫或 context 層，收錄關於某個品牌需要知道的一切<br><b>sub-agent</b>（子代理）：有自己專注的 context window，負責單一任務，避免污染主 context\n\n📺 <a href=\"https://www.youtube.com/watch?v=M5uwBawBDpw\" target=\"_blank\">How AirOps chases friction to build AI products with Claude</a>（2026/05/22 · 26 分鐘）",
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
        }
      },
      {
        "id": "yt_MyYe6C4NVu0",
        "title": "🎬 The Problem Solvers：Genspark 的 Kay Zhu",
        "category": "企業與客戶案例",
        "text": "<b>Genspark 的 Kay Zhu 談團隊文化、開放合作，以及 AI 時代的選擇</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 官方的人物訪談，主角是 AI 辦公工具公司 Genspark 的 Kay Zhu。內容講的不是技術細節，而是 AI 發展這麼快的時候，一家小公司怎麼帶團隊、怎麼跟合作夥伴相處，連選科系的想法都跟著變了。如果妳想知道做 AI 產品的人怎麼看未來，這支很好入門。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=0s\" target=\"_blank\">00:00</a> Kay Zhu 的兒子快滿 18 歲。三年前 Kay Zhu 可能會逼他主修電腦科學，現在兒子要去大學念 commercial dance。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Kay Zhu 的兒子快 18 歲了。換作三年前，Kay Zhu 大概會要兒子念電腦科學這種大家覺得好找工作的科系。現在兒子要去大學念 commercial dance，也就是商業舞蹈，像演唱會、MV 裡的那種舞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=0s\" target=\"_blank\">00:00</a> Kay Zhu 認為 AI 能幫人做很多事，所以應該追隨自己的心。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前選科系常先想哪個好找工作。現在 AI 能幫忙做掉很多技術性的事，逼自己去學不喜歡的東西就沒那麼必要了，不如選自己真正有熱情的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=30s\" target=\"_blank\">00:30</a> Genspark 是 all in one workspace，為一般白領工作者提供 AI spreadsheets、AI slides、AI documents 等功能。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ all in one workspace 就是把工作要用的工具集中在同一個平台上。Genspark 在裡面放了會用 AI 幫忙做的試算表、簡報和文件，主要給一般上班族用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=30s\" target=\"_blank\">00:30</a> Genspark 工程師對最新模型很好奇，每次收到 applied AI team 的新東西，都像收到派對邀請。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ applied AI team 是負責把最新 AI 模型實際用到產品上的團隊。每次拿到這個團隊的新東西，Genspark 的工程師都急著想試，就像收到派對邀請一樣期待，不會覺得又多了一件工作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=61s\" target=\"_blank\">01:01</a> Genspark 是很小的新創，沒辦法什麼都自己做，所以和可信賴的夥伴合作非常重要。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 小公司人力和資源都有限，沒辦法每樣技術都自己從頭做，所以要找靠得住的夥伴分工。對方把擅長的部分顧好，自己才能專心做產品。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=61s\" target=\"_blank\">01:01</a> Kay Zhu 認為變化太快，現在沒有誰真的有 mode（字幕原文），唯一的 mode 是團隊文化：不斷嘗試最新技術，執行得更快。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 字幕寫的是 mode，推測原意是 moat（護城河），指別人很難追上的優勢。Kay Zhu 認為技術變太快，這種優勢沒人守得住。唯一可靠的是團隊習慣：一直試新技術，而且動作要比別人快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=92s\" target=\"_blank\">01:32</a> 合作的關鍵是開放，今天守住的祕密明天就會一文不值。合作成功要靠深度信任，順利時回饋循環非常緊密。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 技術變這麼快，今天藏著不講的東西，明天可能就過時了，不如坦白交流。tight feedback loop 指回饋來回得很快：一方提出問題，另一方馬上回應，再立刻修改。要做到這樣，雙方得真的互相信任。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0&t=92s\" target=\"_blank\">01:32</a> 面試者問兩年後的 Genspark 會變成什麼樣子，Kay Zhu 回答：「我不知道」，因為會出現很多新東西，甚至像魔法一樣。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 連公司兩年後會變成什麼樣子，Kay Zhu 都直接說不知道。原因是 AI 進步太快，會冒出很多現在想像不到的東西。老實承認這一點，比硬畫一張藍圖更實在。</span>\n\n📘 術語<br><b>all in one workspace</b>（一站式工作空間）：Kay Zhu 用來形容 Genspark：提供 AI spreadsheets、slides、documents，給一般白領工作者使用<br><b>tight feedback loop</b>（緊密的回饋循環）：Kay Zhu 形容合作真正順利時的狀態\n\n📺 <a href=\"https://www.youtube.com/watch?v=MyYe6C4NVu0\" target=\"_blank\">The Problem Solvers: Kay Zhu at Genspark</a>（2026/05/22 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_EOg4gY0Yln0",
        "title": "🎬 打造能自己交易的訊號",
        "category": "企業與客戶案例",
        "text": "<b>Man Group 分享如何用 skills 治理，讓 AI 參與系統化交易訊號研究並上線</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由投資公司 Man Group 分享，他們讓 AI 研究股票交易規則，而且已經用真錢在交易。重點不在 AI 多會賺錢，而在公司怎麼管理 skills（寫給 Claude 的工作說明書，教它某件事該怎麼做）。很多人會各寫各的 skills，這支影片講的正是這樣做會出什麼問題、該怎麼管。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=20s\" target=\"_blank\">00:20</a> 講者是 Man Group 的 head of data and AI Sharan Fernando。Man Group 是另類投資管理公司，管理超過 200 billion dollars 的資產，客戶包括退休基金等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者 Sharan Fernando 在 Man Group 負責資料與 AI。Man Group 做的是另類投資，也就是一般買股票、債券以外的策略，例如避險基金。它管理超過 2,000 億美元，客戶包括退休基金，所以出錯的代價很高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=81s\" target=\"_blank\">01:21</a> 系統化交易的核心是交易訊號。講者用夢幻足球比喻：挑出會賺錢的股票做多，不會賺錢的做空，再用歷史資料 backtest 驗證<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ trading signal（交易訊號）是一套挑股票的規則：把股票排名，看好的做多（買進等漲），看壞的做空（下跌才賺）。backtest（回測）是拿十幾年的歷史資料把規則跑一遍，看它過去靈不靈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=263s\" target=\"_blank\">04:23</a> Man Group 目前有交易訊號在正式環境用真實資金運作，從發想、取得資料、backtest、撰寫提案到上線都由 AI 完成，人類負責審查所有產出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這不是實驗，是真的用真錢在交易。從想點子、找資料、回測、寫提案到上線，整條流程都由 AI 完成；人不動手做，但每份產出都要人看過才放行。分工是 AI 做事、人把關。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=358s\" target=\"_blank\">05:58</a> 訊號只是冰山一角，底下是資料清理、偵測離群值、backtest 等 workflow；各團隊版本不一樣，結果就無法比較，所以需要共用的 workflow<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 大家看到的訊號只是成品，背後有一長串 workflow（固定的工作步驟），像是清理資料、找出異常值。每組做法不同，A 組說好、B 組說普通，就分不出是訊號差還是做法差。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=458s\" target=\"_blank\">07:38</a> Claude 不了解公司的資料和系統，所以他們不重新訓練、也不做 fine-tuning，而是透過 skills 讓它存取資料、能力和 workflow<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude 不懂 Man Group 內部有哪些資料、系統怎麼用。他們沒有重新訓練，也沒做 fine-tuning（用公司資料再調整模型本身），而是寫 skills，告訴 Claude 去哪拿資料、照什麼步驟做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=525s\" target=\"_blank\">08:45</a> 早期推廣時 skills 多半是 power user 寫的，只為個人優化。例如報帳 skill 把成本中心代碼寫死，結果別部門的報帳單都送到業務主管那邊<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 一開始，skills 多半是 power user（很會用工具的重度使用者）照自己需求寫的。有個報帳 skill 把作者部門的成本中心代碼寫死，別部門一用，報帳單全送到業務主管那邊。自己好用，不代表別人能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=711s\" target=\"_blank\">11:51</a> 解法是建一個共用 marketplace：每個 skill 都公開、有標籤、用 eval 測試，由 workflow owner 負責，並追蹤使用量、審查、管理生命週期<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 解法是做一個公司內部共用的 marketplace（skill 市集）：每個 skill 都公開、有標籤，用 eval（事先準備好的測試題）驗過結果。由負責該流程的 workflow owner 管理，並追蹤使用量、定期審查，過時就下架。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0&t=992s\" target=\"_blank\">16:32</a> 心得：重視組織 context、把 skills 當成 production code 來對待、推出前先想好擁有權和審查流程。目前有 750 人使用 Claude Code，governed skills 超過 100 個<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 心得有三：AI 要懂公司自己的背景（context）；skill 要像正式上線的程式（production code）一樣測試和維護；推出前先想好誰負責、誰審查。目前 750 人用 Claude Code，受管理的 skills 超過 100 個。</span>\n\n📘 術語<br><b>trading signal</b>（交易訊號）：就像挑夢幻足球隊員，把股票排名後決定要做多還是做空<br><b>backtest</b>（回測）：把策略寫成程式，拿 15 年甚至更長的歷史資料跑一遍，看它表現如何<br><b>drawdown</b>（回撤）：策略虧錢的時候，總共虧了多少<br><b>skills governance</b>（skills 治理）：skill 由 workflow owner 負責，經過測試和審查、有生命週期，而且大家都看得到<br><b>plugin</b>（外掛）：把一組相關的 skills 包在一起，例如可以存取 Man Group 資料集的 data plugin\n\n📺 <a href=\"https://www.youtube.com/watch?v=EOg4gY0Yln0\" target=\"_blank\">Building signals that trade themselves</a>（2026/05/21 · 20 分鐘）",
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
        }
      },
      {
        "id": "yt__kSAptN8TAY",
        "title": "🎬 The Problem Solvers：Cognition 的 Scott Wu",
        "category": "企業與客戶案例",
        "text": "<b>Cognition 的 Scott Wu 談 Devin、公司使命，以及和 Anthropic 的合作</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片訪問 Cognition 的創辦人 Scott Wu。他聊到他們做的 Devin、公司想達成的目標，還有為什麼選擇和 Anthropic 合作。影片想講的是：AI 寫程式已經不只是補幾行程式碼，而是開始像一位工程師那樣自己接工作。想知道 AI 寫程式會走到哪一步，這支值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=0s\" target=\"_blank\">00:00</a> Scott 從小就參加數學和程式競賽，2014 年拿下競技程式設計（competitive programming）世界冠軍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scott 從小就參加數學和程式比賽。競技程式設計（competitive programming）就是限時解程式題、比誰寫得又快又對的比賽。他在 2014 年拿下世界冠軍，是這個領域的頂尖好手。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=31s\" target=\"_blank\">00:31</a> Cognition 開發 Devin 和周邊的一系列工具，他們稱 Devin 是「第一位 AI 軟體工程師」。客戶有銀行、健康保險公司、政府和私募股權公司<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Devin 是 Cognition 做的產品。它不是幫你補幾行程式的小幫手，而是能自己接下任務、把事情做完的「AI 軟體工程師」。客戶有銀行、健康保險公司、政府和私募股權公司。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=31s\" target=\"_blank\">00:31</a> Cognition 的使命是幫助全世界把開發軟體的速度提升 10 倍<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們想做的不只是一個好用的工具，而是讓全世界開發軟體的速度快 10 倍。打個比方，原本要花十週做完的專案，希望大約一週就能完成。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=63s\" target=\"_blank\">01:03</a> Scott 說團隊很在乎軟體工程第一線的手藝，想辦法讓它變得更快，並解決實際遇到的問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們在意的是工程師每天實際在做的事：寫程式、修改、測試、修錯誤。重點不在喊口號，而是找出工作中真正卡住、最花時間的地方，一個一個解決。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=63s\" target=\"_blank\">01:03</a> Scott 回憶第一次和 Daria 通話時，對方說不用推銷，他完全懂這個概念。當時很多人不相信這件事做得到<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 早期很多人不相信 AI 能自己當工程師。Scott 第一次和 Daria 通話時，對方直接說不用推銷，這個概念完全懂。在大家都懷疑的時候，遇到一聽就懂的人特別難得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=93s\" target=\"_blank\">01:33</a> 談到 Claude Code，Scott 認為不會有單一產品包辦所有程式和軟體工程，雙方一起做的事比各自做的多<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 推出的工具，讓 Claude 直接幫你寫程式，看起來跟 Devin 是對手。但 Scott 認為寫軟體這件事太大，不會只有一個產品通吃，雙方合作能做的比各做各的多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY&t=123s\" target=\"_blank\">02:03</a> Scott 說和 Anthropic 合作，讓他們能提供客戶真正想要的能力。他描述的未來是：寫軟體就像告訴電腦要做什麼一樣簡單<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Scott 說，跟 Anthropic 合作讓他們能做出客戶真正想要的功能。他想像的未來是：做軟體不必懂程式語法，只要跟電腦講清楚你要什麼，它就幫你做出來。</span>\n\n📘 術語<br><b>Devin</b>（Devin（Cognition 的產品））：Cognition 開發的產品，被稱為第一位 AI 軟體工程師，周邊還有一系列工具<br><b>competitive programming</b>（競技程式設計）：Scott 從小參加的程式競賽，他在 2014 年拿到世界冠軍\n\n📺 <a href=\"https://www.youtube.com/watch?v=_kSAptN8TAY\" target=\"_blank\">The Problem Solvers: Scott Wu at Cognition</a>（2026/05/19 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_IGAVa4uyo2w",
        "title": "🎬 Emergent 如何用 Claude 讓更多人能打造 app",
        "category": "企業與客戶案例",
        "text": "<b>Emergent CEO Mukund 分享用 Claude 打造 app 產生平台、服務小型企業的歷程</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Emergent 的執行長 Mukund 在講，他們怎麼用 Claude 做出一個「用講的就能做出 app」的平台，主要給小型企業用。值得看的原因是他很坦白地說：程式碼寫出來只是開始，app 能不能真的上線、之後能不能穩定運作，才是真正困難的地方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=62s\" target=\"_blank\">01:02</a> Emergent 在 YC 一開始做自動化軟體測試，後來發現解決驗證迴圈（verification loop）能讓 agent 跑更久，於是轉做通用 coding agent<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Emergent 在 YC（美國知名新創加速器）起步時做自動測試。後來發現讓 agent（會自己動手做事的 AI）做完能自己檢查、錯了再改，也就是驗證迴圈，它就能獨立做更久，於是改做寫程式的 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=123s\" target=\"_blank\">02:03</a> 團隊內的非技術成員用內部 coding agent 用得比開發者還多，所以決定讓每個人都能做軟體開發，6 月推出 research preview<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司裡不會寫程式的同事，反而比工程師更常用內部的寫程式工具。他們因此認定一般人也需要自己做軟體，6 月推出 research preview，也就是先開放試用、邊用邊改的早期版本。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=247s\" target=\"_blank\">04:07</a> 用戶拿 Emergent 跟 dev shop 比，最在意結果，不是速度；所以 Opus 是他們的主力模型（workhorse），agent 可以連續跑好幾個小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 用戶拿它跟 dev shop（外包軟體公司，影片說大約 25 萬美元、做三個月）比，在意的是成品能不能用，不在意快慢。所以他們主力用 Claude 的高階模型 Opus，讓 agent 連續跑好幾小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=340s\" target=\"_blank\">05:40</a> 在 Kubernetes 上自建容器技術，支援記憶體快照、存狀態和平行 agent；他們認為 agent 就是產品，harness 品質很重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們在 Kubernetes（管理大量雲端伺服器的工具）上自建容器（把每個程式隔開的小空間）技術，能隨時存檔，也能讓多個 agent 同時分工。他們認為 harness（讓模型能動手做事的外圍系統）的好壞，就是產品的好壞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=404s\" target=\"_blank\">06:44</a> 把正式環境的錯誤回傳到開發環境，並建立 long-term memory，讓 agent 能從平台上所有 app 學習<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ App 上線後出的錯，會被送回開發端讓 agent 修。再加上 long-term memory（長期記憶），從平台上所有 app 累積經驗，遇過的錯下次處理得更快、更省 token（AI 計算用量的單位）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=437s\" target=\"_blank\">07:17</a> 部署率從幾個月前的 84% 提升到接近 98%<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 部署就是把做好的 app 真正上線給人用。幾個月前大約 100 個有 84 個能順利上線，現在接近 98 個，代表做出來「真的能用」的比例大幅提高。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=623s\" target=\"_blank\">10:23</a> 寫程式碼只占問題的 20%，另外 80% 是部署、維護正式環境和資安<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 程式寫出來只是開始。更大的工作量在上線，還有正式環境（真正給客人用的版本）要持續維護、不能出包，以及防駭客、保護資料。這也說明了他們為什麼在部署上投入這麼多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w&t=961s\" target=\"_blank\">16:01</a> 即將推出新產品 Wingman，是給企業用的 agent，要自動化財務、營運、銷售、行銷等業務流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 下一步是 Wingman。它不是幫你做 app，而是直接替企業處理日常工作，像財務、營運、銷售、行銷的例行流程，都交給 agent 做。</span>\n\n📘 術語<br><b>long-term memory</b>（長期記憶）：agent 不只從單次使用者 session 學習，還從平台上所有 app 學習；遇過的新錯誤下次能用更少 token 處理<br><b>harness</b>（執行框架）：Mukund 說 agent 在很多方面就是產品，harness 的品質非常重要<br><b>refactoring agent</b>（重構 agent）：負責回頭重構使用者的 app，讓程式碼品質好、之後還能繼續開發<br><b>dev shop</b>（軟體外包公司）：用戶拿 Emergent 跟它比較，dev shop 的價格大約 250,000 美元、專案約三個月\n\n📺 <a href=\"https://www.youtube.com/watch?v=IGAVa4uyo2w\" target=\"_blank\">How Emergent is making app building more accessible with Claude</a>（2026/05/13 · 16 分鐘）",
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
        }
      },
      {
        "id": "yt_FPPTnI88RR8",
        "title": "🎬 Anthropic 如何在資安工作中使用 Claude",
        "category": "企業與客戶案例",
        "text": "<b>Anthropic 資安團隊用 Claude Code 打造偵測與回應平台 Clue，加速資安調查</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Anthropic 資安團隊分享，他們怎麼用自家的 Claude 做出內部調查平台 Clue，把原本要花好幾小時到幾天的資安調查大幅縮短。雖然主題是資安，但看得到 AI 怎麼真正放進專業工作流程：先規劃步驟、自己去查資料，最後寫出結論。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=0s\" target=\"_blank\">00:00</a> 講者認為 Anthropic 的資安工作沒有前例可循，保護它也像是在開拓新領域；現有工具常常不符合第一線分析師、調查人員的實際工作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者的意思是，像 Anthropic 這樣的 AI 公司要怎麼防護，沒有現成範本可以照抄。市面上的資安工具也常常跟第一線調查人員每天實際在做的事對不上，用起來很卡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=30s\" target=\"_blank\">00:30</a> 以前調查一個資安事件，要在 5～6 個工具之間切換，並對不同資料庫下 3～4 種查詢語言；就算是簡單的調查，也至少要幾小時，最多要幾天。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前查一件可疑事件，要在五、六個系統之間切來切去，還要對不同資料庫用三、四種查詢語法下指令。光是切換就很耗時間，簡單的案子也要幾小時，複雜的會拖到好幾天。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=30s\" target=\"_blank\">00:30</a> 所以團隊打造了 Clue：這是用 Claude Code 建立的偵測與回應平台，並串接公司內部系統。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊用 Claude Code（Anthropic 讓 Claude 直接寫程式的工具）做出 Clue。它是偵測與回應平台（detection and response platform），用來發現可疑狀況並協助處理，而且接上了公司內部系統。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=61s\" target=\"_blank\">01:01</a> Clue 透過 tool use 查詢資料倉儲，也能查 Slack 訊息、程式碼庫等公司內部知識，讓警示放回自家環境的脈絡來判讀。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ tool use 是指 Claude 能自己呼叫外部工具去查資料。Clue 用它查公司的資料倉儲，也會翻 Slack（工作聊天軟體）訊息和程式碼，讓警示能對照公司平常的狀況來判斷。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=93s\" target=\"_blank\">01:33</a> Demo 使用樣本資料：詢問「開發者自己開了 admin 權限，是否經過授權？」Claude 先擬出六個調查步驟，再發出多個查詢，判斷這是典型的權限提升（privilege escalation）。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Demo 用樣本資料問：開發者自己開了 admin（管理者）權限，有經過核准嗎？Claude 先列出六步調查計畫，再跑多個查詢，最後判定是典型的權限提升（privilege escalation，擅自拿到超出職責的權限）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=126s\" target=\"_blank\">02:06</a> 查到來源 IP 屬於俄羅斯的資料中心，且被 VirusTotal 標為惡意。Claude 判斷事件應是單一個案，但也點出安全態勢上的缺口，提出後續行動項目並寫出調查總結。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 它追到來源 IP（連線的網路位址）在俄羅斯的資料中心，而且被 VirusTotal（綜合多家防毒判斷的查詢服務）標為惡意。Claude 判斷這是單一個案，但也點出防護缺口，列出待辦事項並寫好總結。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=160s\" target=\"_blank\">02:40</a> 講者原本估計 suppression engine 至少要 1～2 個月，結果一位新進同仁一週就做出來。主要原因是 Claude Code 能向新人解釋系統怎麼架設、怎麼運作。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ suppression engine 在資安領域一般是指自動壓掉重複或已知無害警示的機制。講者原本估計要一、兩個月，新人一週就做完，關鍵是 Claude Code 能向新人解釋系統怎麼架設、怎麼運作。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8&t=190s\" target=\"_blank\">03:10</a> 講者表示自己正在打造過去希望擁有的工具，覺得自己正從實務工作者走向研究者，並能看見以前看不到的系統狀況。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者覺得自己現在做的，正是以前當分析師時最想要的工具。他的角色也從埋頭處理案件，慢慢轉向研究更大的問題，而且能看清楚以前看不到的系統狀況。</span>\n\n📘 術語<br><b>detection and response platform</b>（偵測與回應平台）：Clue 的定位，是團隊用 Claude Code 建立的平台<br><b>tool use</b>（工具使用）：Clue 靠 tool use 查詢資料倉儲和公司內部知識<br><b>privilege escalation</b>（權限提升）：Demo 中 Claude 對開發者自行取得 admin 權限的判斷，稱為典型的權限提升<br><b>suppression engine</b>（抑制引擎）：講者 Q4 計畫中的項目，原估 1～2 個月，新人一週就做完\n\n📺 <a href=\"https://www.youtube.com/watch?v=FPPTnI88RR8\" target=\"_blank\">How Anthropic uses Claude in Cybersecurity</a>（2026/05/12 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_BbYSGxtsMic",
        "title": "🎬 讓 coding agent 擁有自己的電腦：Cursor 如何打造 cloud agents",
        "category": "企業與客戶案例",
        "text": "<b>Cursor 分享如何讓雲端 agent 更自主，並建立讓 agent 自我改進的系統</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Cursor（一款用 AI 幫忙寫程式的編輯器）團隊分享的經驗：他們怎麼讓在雲端工作的 AI 助手少靠人，自己把事情做完。重點不只是 AI 會寫程式，還有怎麼幫它把工作環境、工具和回報問題的管道準備好。就算你不寫程式，這些做法也能讓你更會把事情交給 AI。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=45s\" target=\"_blank\">00:45</a> Cursor 經歷三階段：給 agent 工具與脈絡變得更自主、學會善用更強的模型、打造「建造系統的系統」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent 是能自己拆步驟、動手把任務做完的 AI 助手。Cursor 先給它工具和資料，再學會搭配更強的模型，最後做出一套能讓 agent 越做越好的機制。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=166s\" target=\"_blank\">02:46</a> 做了 Claude onboarding agent（cursor.com/onboard），它探索 codebase 的目的不是改程式，而是弄懂怎麼把專案跑起來<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ codebase 就是一個專案的所有程式碼。onboarding agent 像新人報到，先搞懂專案要怎麼跑起來、要做哪些設定，不急著改東西，也會問開發者，一起把環境設好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=228s\" target=\"_blank\">03:48</a> cloud agent 每次都得從零啟動開發環境，所以做了 CLI 工具，用來啟動服務、等待服務就緒、查狀態、建立測試帳號等<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ cloud agent 是在雲端主機上工作的 agent，每次開工都是一台空電腦。CLI 是打指令操作的工具，Cursor 做了一套，讓它用指令就能開服務、確認好了沒、建測試帳號。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=288s\" target=\"_blank\">04:48</a> 自主性原則：給 agent「眼睛」（你看得到的它也要看得到）、給它工具（在合理的安全限制下），並維持高品質的 codebase 和說明<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 想讓 agent 自己做完、少問人，就要讓它看得到結果，例如畫面和錯誤訊息；給它能做事的工具，但要設好安全界線；程式和說明文件也要寫得整齊，它才讀得懂。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=349s\" target=\"_blank\">05:49</a> computer use 是基礎能力：寫程式像下西洋棋，整盤看得到；操作 GUI 像打電玩，一次只看得到一小塊，需要後設認知和回溯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ computer use 是讓 AI 看螢幕畫面，自己按滑鼠、打鍵盤。寫程式時資訊全攤在眼前；操作 GUI（有視窗和按鈕的介面）卻只能邊點邊看，所以要會發現自己走錯並退回去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=409s\" target=\"_blank\">06:49</a> agent 會錄 demo，除了自己做端到端測試，也讓開發者在看程式碼之前就能快速審查成果<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ demo 是操作過程的錄影。agent 做完會自己從頭到尾實際操作一遍，確認真的能用，並錄下來。開發者先看影片就知道成果對不對，不用一開始就去讀程式碼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=439s\" target=\"_blank\">07:19</a> 兩種用法：小任務和 bug 直接丟進 prompt 開跑；大專案交給 cloud agent 長時間處理<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是你打給 AI 的指令文字。小修改、小 bug 直接寫一句交代，它就開始做；大型專案則交給 cloud agent 在雲端長時間處理，你不用一直盯著。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic&t=620s\" target=\"_blank\">10:20</a> 重視 agent experience：agent 遇到問題就回報，再分類成技術問題、權限問題、不知道怎麼做（ignorance）三類，由 agent 和人類修正<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ agent experience 指 agent 工作順不順，要像照顧工程師一樣重視。agent 卡住就回報，問題分成東西壞了、權限不夠、不知道怎麼做三類，再由 agent 或人去修好。</span>\n\n📘 術語<br><b>agent experience</b>（agent 體驗）：對應 developer experience，重視程度要一樣甚至更高<br><b>WCF (work on the factory)</b>（改善工廠）：每個 cloud agent 都有的 skill：碰到煩人、壞掉或搞不懂的事就回報，而不是硬撐下去<br><b>computer use</b>（電腦操作）：輸入原始像素，輸出滑鼠和鍵盤操作<br><b>onboarding agent</b>（入職 agent）：探索 codebase，弄懂怎麼執行它，並和開發者互動設定環境\n\n📺 <a href=\"https://www.youtube.com/watch?v=BbYSGxtsMic\" target=\"_blank\">Giving coding agents their own computers: How Cursor built cloud agents</a>（2026/05/08 · 14 分鐘）",
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
        }
      },
      {
        "id": "yt_BrpB-h1e--k",
        "title": "🎬 用 Claude Managed Agents 打造 Asana AI teammates",
        "category": "企業與客戶案例",
        "text": "<b>Asana 分享如何用 Claude Managed Agents 打造多人協作的 AI teammates</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 Asana（一套團隊專案管理工具）分享怎麼用 Claude Managed Agents 打造「AI teammates」。Claude Managed Agents 是 Anthropic 提供的現成服務，讓 AI 自己一步步把事情做完；AI teammates 則是能被指派工作、和一群人一起協作的 AI 同事。這支片值得看，是因為它點出多數公司用 AI 還停在各用各的，Asana 想讓 AI 學到的經驗在整個團隊裡累積、共享。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=48s\" target=\"_blank\">00:48</a> Asana 的 AI teammates 從 3 月起正式開放（generally available）。講者 Arnauld 希望 AI agent 能像真正的團隊成員，和人一起完成審核、端到端流程等多步驟工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI teammates 3 月起正式開放（generally available，已經不是測試版，一般客戶都能用）。講者 Arnauld 想讓 AI agent（會自己分步驟做事的 AI）像同事一樣，跟人一起跑審核這類要過好幾關的流程。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=78s\" target=\"_blank\">01:18</a> 講者觀察到，多數企業仍用「single player」方式使用 agent，也就是一個人用完再交給下一個人，因此累積不了知識，也沒有共享的 enterprise memory<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者說多數公司用 agent 還在「single player」單人模式：各開各的、用完就結束，經驗只留在個人手上。所以沒有 enterprise memory（全公司共享的累積知識），同一件事每個人都要重教一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=231s\" target=\"_blank\">03:51</a> Asana 的 work graph 已經發展超過 17 年，層級是：使命與願景→goals→portfolios→projects→tasks。人類透過 UI 使用，agent 也從這裡取得工作需要的 context<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ work graph 是 Asana 做了 17 年的工作架構：使命→goals（目標）→portfolios（專案群）→projects（專案）→tasks（任務）。人透過 UI（操作畫面）使用，agent 從這裡讀 context（做事需要的背景資料）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=355s\" target=\"_blank\">05:55</a> Managed agents 帶來三個好處：降低 prototyping 成本、內建 verification loop，以及內建 grader。Asana 傳入想要的 outcome 後，grader 會反覆迭代，確保產出品質夠高<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ managed agents 有三個好處：prototyping（先做雛形試水溫）變便宜；內建 verification loop（做完自己檢查）；內建 grader（評分員），只要給它想要的 outcome（成果），它就反覆評分、修正，直到品質夠好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=417s\" target=\"_blank\">06:57</a> 以前用 Messages API，現在改用 managed agents，就不必自己打造 agent loop、檔案管理和程式執行，還能讓多個 agent 平行、各自獨立工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前用 Messages API（呼叫 Claude 一問一答的基本介面），agent loop（AI 思考、動手、看結果再調整的循環）、檔案管理、執行程式都得自己做；改用 managed agents 就都有現成的，還能讓多個 agent 同時分頭做事。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=449s\" target=\"_blank\">07:29</a> Asana 內建超過 21 個 AI teammates，對應 PMO、行銷、IT、HR、R&amp;D 等部門，可以處理上市規劃、撰寫規格、目標管理、資源與產能規劃等工作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Asana 內建 21 個以上的 AI teammates，分給 PMO（專案管理辦公室）、行銷、IT、HR、R&amp;D（研發）等部門，能做上市規劃、寫規格、追蹤目標、安排人力與產能。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=784s\" target=\"_blank\">13:04</a> 示範：使用者用留言要求把主色改成藍色，這項回饋會寫進 agent 的記憶。之後換別的行銷人員使用同一個 agent，也不會再犯同樣的錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範：有人留言說主色要改成藍色，這句回饋就被存進 agent 的記憶。之後換另一位行銷同事用同一個 agent，它已經記得，不會再用錯顏色。這就是 enterprise memory 實際運作的樣子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k&t=1459s\" target=\"_blank\">24:19</a> 第三方整合同時在兩個層級進行：一是直接接到 Asana 自家 AI teammates 的 agent loop，二是透過 MCP 接到 managed agents<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 串接外部工具分兩層：一是直接接進 Asana 自家 AI teammates 的 agent loop；二是透過 MCP（讓 AI 連接外部工具和資料的共通標準）接到 managed agents。</span>\n\n📘 術語<br><b>Claude Managed Agents</b>（Claude 託管式 agent）：Asana 用它完成多步驟動作，內建 verification loop 與 grader，不必自己打造 agent loop<br><b>AI teammates</b>（AI 隊友）：Asana 內的 AI agent，被當成系統裡真正的成員，有權限控管，也能和多人協作<br><b>grader</b>（評分器）：Asana 傳入 outcome 後，grader 會多次迭代，確保產出品質夠高<br><b>enterprise memory</b>（企業共享記憶）：多人與 agent 互動累積下來的知識，會隨著更多人使用而越來越好<br><b>work graph</b>（工作圖譜）：Asana 發展超過 17 年的結構，從使命、goals 一路到 tasks，人和 agent 都能使用\n\n📺 <a href=\"https://www.youtube.com/watch?v=BrpB-h1e--k\" target=\"_blank\">Building with Claude Managed Agents and Asana AI teammates</a>（2026/05/08 · 24 分鐘）",
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
        }
      },
      {
        "id": "yt_45hPRdfDEsI",
        "title": "🎬 Notion 如何用 Claude Managed Agents 打造產品",
        "category": "企業與客戶案例",
        "text": "<b>Notion PM 示範用 Claude Managed Agents 在 Notion 裡做 agent orchestration</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片由 Notion 的產品經理示範：把 Claude 接進 Notion 後，同時派好幾個 agent 分頭做事。agent 是能自己一步步把任務做完的 AI 助手，不只是回答問題。想知道「一次交代好幾件事給 AI、自己去忙別的」實際長什麼樣子，這支很值得看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=0s\" target=\"_blank\">00:00</a> Notion PM Eric 負責 agents 與 agent orchestration；他曾把 30 個做 prototype 的任務一次丟給 Claude 跑，去拿個點心回來，prototype 就全做好了<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Eric 是 Notion 產品經理，負責 agent orchestration，也就是替每份工作找合適的 agent、統一管流程。他曾一次派 30 個 prototype（試做版）給 Claude，拿個點心回來就全做好了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=33s\" target=\"_blank\">00:33</a> Notion 想成為 agent orchestration 平台。Claude 擅長複雜、長時間執行的任務，但要自己從頭建這套系統，工程上非常吃力<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Notion 想當幫你調度各種 agent 的平台。Claude 很會處理又複雜、又要跑很久的工作，可是要從零打造一套讓它穩定跑完的系統，工程量非常大。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=33s\" target=\"_blank\">00:33</a> Managed agent 產品可以隨插即用地導入 Claude，session 在雲端執行，Notion 只要接上 API，就能提供給客戶使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Managed Agents 把執行環境先準備好，接上就能用。每次工作階段（session）都在雲端跑，Notion 只要用 API（程式之間互相溝通的接口）接上，就能開放給客戶。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=63s\" target=\"_blank\">01:03</a> 示範案例是客戶 onboarding（虛構客戶 Harbor and Pine）。Notion 裡的 custom agent 可以存取所有客戶資料庫和任務看板，因此掌握完整脈絡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 示範的是 onboarding，也就是帶新客戶上手的流程，客戶 Harbor and Pine 是虛構的。Notion 裡的 custom agent 能讀所有客戶資料庫和任務看板，所以前因後果都清楚。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=124s\" target=\"_blank\">02:04</a> 把行動項目轉成任務丟上看板後，會啟動多條 agent thread，各自開一個 Claude session；使用者可以在 Notion 裡直接跟那個 session 對話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 行動項目變成看板上的任務後，會同時開好幾條 agent thread（各自獨立的工作線），每條背後都是一個 Claude session。你可以直接在 Notion 裡跟任一條對話、追問或調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=124s\" target=\"_blank\">02:04</a> 在 Claude platform 上可以用另一種視角看 session 的執行狀況，開發端也能把 traces 拿來改進 agent<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 同樣的工作也能在 Claude platform（Anthropic 給開發者用的平台）換個角度看執行狀況。開發者還能用 traces（agent 每一步做了什麼的紀錄）找問題、改進 agent。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=156s\" target=\"_blank\">02:36</a> 長時間任務可能要跑 20 分鐘到一小時。能持續執行、管理記憶、長時間維持高品質輸出的 harness，是建在模型之上的關鍵一層<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這類長任務可能要跑 20 分鐘到一小時。harness 是建在模型外面的那一層，讓 AI 能一路跑下去、記得前面做過什麼，品質也不會越做越差。影片強調這層非常關鍵。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI&t=187s\" target=\"_blank\">03:07</a> 成果之一是一個範例首頁，內容取自 Notion 裡的脈絡；如果要修改，可以直接在 Notion 裡跟 Claude 對話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 成果之一是一個範例首頁，內容取自 Notion 裡現成的資料。想修改的話，不用換到別的工具，直接在 Notion 裡跟 Claude 講要改哪裡就好。</span>\n\n📘 術語<br><b>agent orchestration</b>（agent 協作調度）：找來適合這份工作的 agent，並由 Notion 幫你管理所有工作流程<br><b>Claude Managed Agents</b>（Claude 託管 agent）：讓導入 Claude 變得隨插即用，session 在雲端執行，接上 API 就能用<br><b>harness</b>（執行框架）：能跑長時間任務、管理記憶、長時間維持高品質輸出，是建在模型之上的關鍵一層<br><b>custom agent</b>（自訂 agent）：Notion 內建的 agent，被賦予客戶資料庫與任務看板，協助客戶 onboarding 流程<br><b>traces</b>（執行紀錄）：在 Claude platform 上看得到，開發端拿來改進 agent\n\n📺 <a href=\"https://www.youtube.com/watch?v=45hPRdfDEsI\" target=\"_blank\">How Notion built with Claude Managed Agents</a>（2026/04/08 · 3 分鐘）",
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
        }
      },
      {
        "id": "yt_U9s9Kxb7p5I",
        "title": "🎬 HubSpot 如何用 Claude 做客戶成功",
        "category": "企業與客戶案例",
        "text": "<b>HubSpot 分享 Claude 在行銷、客戶成功與工程上的使用成果</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片是 HubSpot（一家做行銷、業務和客服軟體的公司）分享他們怎麼在公司裡用 Claude。內容涵蓋三塊：行銷寫文案、客戶成功團隊幫客戶分析生意、工程師寫程式。每塊都有具體例子，適合想知道 AI 在真實公司裡能幫上什麼忙的人看。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=0s\" target=\"_blank\">00:00</a> HubSpot 的使命是幫小型企業成長得更好，他們很早就開始用 Claude，認為這會從根本改變自己和客戶的工作方式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ HubSpot 的客戶多半是小公司。他們很早就開始用 Claude，而且不是把它當成偶爾用一下的小工具，而是認為它會改變整個做事方法，連帶也會改變客戶的工作方式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=0s\" target=\"_blank\">00:00</a> 他們很早就發現，Claude 的表現比其他開發中或試用過的工具更好；他們也說 Claude 很有品味，而行銷講的就是品味<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ taste（品味）在這裡是指判斷什麼寫法得體、什麼東西好看的眼光。行銷文案通常沒有標準答案，好壞差在分寸。他們覺得 Claude 在這方面比其他試過的工具強。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=31s\" target=\"_blank\">00:31</a> Claude 產出的第一批產品頁面很符合品牌調性；給它通話逐字稿和幾篇知識庫文章後，產出的內容讀起來就像自己的口吻<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 品牌調性就是一家公司固定的說話風格。知識庫文章是公司寫給客戶看的教學和說明。他們把真實客戶通話的文字紀錄和這些文章給 Claude 參考，它寫出來的東西就像自家人寫的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=31s\" target=\"_blank\">00:31</a> 一家飯店旅宿業者營收不理想。Claude 分析了歷史報表，指出哪些週末表現最好、哪些較差<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這是幫客戶的實例：把一家飯店旅宿業者過去的營收報表交給 Claude，它指出哪些週末生意好、哪些比較差，業者就知道該從哪裡著手調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=61s\" target=\"_blank\">01:01</a> 一位 CSM 說，這已經遠遠超出他平常的工作範圍，客戶也說這是和 HubSpot 聊過最好的一次<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ CSM 通常是指客戶成功經理，負責協助已經付費的客戶把產品用出成效。這位 CSM 靠 Claude 做出平常做不到的深入分析，客戶也覺得這次談話特別有收穫。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=61s\" target=\"_blank\">01:01</a> 維護 code base 的時間大幅縮短，從想法做到 prototype 的時間也大幅減少<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code base（程式碼庫）是一個產品的全部程式碼；prototype（原型）是先做出來、可以試用的初步版本。意思是維護舊程式，以及把點子做成能試用的東西，都快了很多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=91s\" target=\"_blank\">01:31</a> 開發者能空出時間做真正有價值的功能開發；有工程師說 Claude Code 讓他成為更好的工程師<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是 Anthropic 推出、讓工程師寫程式時使用的 AI 工具。瑣碎的工作交給它處理後，工程師能專心做對使用者真正有用的功能，甚至覺得自己的功力也進步了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I&t=91s\" target=\"_blank\">01:31</a> 他們的生產力提升了 40%；HubSpot 和 Anthropic 有共同使命，要讓大家取得工具和資訊，用過去做不到的方式經營事業<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 40% 是 HubSpot 在影片裡說的自家數字。Anthropic 是開發 Claude 的公司。兩家的共同目標是讓一般企業也能拿到好用的工具和資訊，用以前做不到的方式經營生意。</span>\n\n📘 術語<br><b>taste</b>（品味）：字幕說 Claude 很有品味，而行銷講的就是品味<br><b>CSM</b>（CSM）：字幕裡用來指講者自己的職位，但沒有說明全名\n\n📺 <a href=\"https://www.youtube.com/watch?v=U9s9Kxb7p5I\" target=\"_blank\">How HubSpot uses Claude for customer success</a>（2026/02/09 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_Jp83_JMK74o",
        "title": "🎬 Anthropic 行銷團隊如何使用 Claude",
        "category": "企業與客戶案例",
        "text": "<b>沒寫過程式的行銷人員用 Claude Code 做出 Figma plugin，自動產生廣告文案版本</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片的主角是 Anthropic 一位完全不會寫程式的行銷人員。他們用 AI 做出一個設計軟體的小工具，把做廣告圖時最煩的重複步驟自動化。如果你也常在電腦上重複做同一件事，這支片會讓你知道：不會寫程式，也能自己做出工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=1s\" target=\"_blank\">00:01</a> 分享者從來沒寫過程式，還得 Google 怎麼在 Mac 上打開 terminal；Claude Code 剛推出時，完全不懂這個產品是做什麼用的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 分享者從沒寫過程式，連 Mac 的 terminal（用打字下指令來操作電腦的視窗）都要上網查怎麼開。Claude Code（在 terminal 裡幫你寫程式的 AI 工具）剛推出時，他們也搞不懂它能做什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=32s\" target=\"_blank\">00:32</a> 原本要在 Figma 手動複製 frame、從 Google Doc 貼上標題，10 個版本乘 5 種比例非常重複，所以用 Claude Code 做了一個 Figma plugin，只要貼一次文案就好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Figma 是做設計稿的軟體，frame 是裡面的一個個畫框。以前要一格格複製畫框、再貼上標題，10 個版本乘 5 種比例，就是 50 次重複動作。所以用 Claude Code 做了一個 plugin（外掛小工具），文案只要貼一次。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=94s\" target=\"_blank\">01:34</a> 實際示範：選取 frame 後辨識出 headline、CTA 等元件，一次貼上所有標題並按下 generate ad variants，每個版本各自產生一個 frame。原本約 30 分鐘的工作縮短到約 30 秒<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ headline 是廣告主標題，CTA 是「立即購買」這類叫人採取行動的按鈕。外掛會先認出範本裡這兩個位置，把標題一次貼進去再按生成，每個標題就各自產生一個畫框。30 分鐘的工作變成 30 秒。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o&t=125s\" target=\"_blank\">02:05</a> 建議：先找出工作中重複、能自動化的部分，從非常小又簡單的事開始。不需要會寫程式，只要把問題講清楚、講精簡<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 關鍵不在會不會寫程式，而是先挑出工作裡天天重複、步驟固定的事，從最小的開始做。跟 Claude 說明時，把「想要什麼結果、現在卡在哪」講清楚、講簡短就好。</span>\n\n📘 術語<br><b>Figma plugin</b>（Figma 外掛）：用 Claude Code 做的工具，能辨識範本元件，一次貼上文案就產生多個廣告版本\n\n📺 <a href=\"https://www.youtube.com/watch?v=Jp83_JMK74o\" target=\"_blank\">How Anthropic uses Claude in Marketing</a>（2026/01/27 · 2 分鐘）",
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
        }
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
        "text": "<b>說明從 Claude Fable 5 起為安全監控保留 30 天資料，以及新方案 Enterprise Frontier Safeguards</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講：從 Claude Fable 5 開始，你跟 Claude 的對話會為了安全因素多保留 30 天，以及這些資料由誰看、怎麼保護。如果你在公司用 Claude 處理客戶資料或內部文件，這支影片告訴你資料去了哪裡、誰碰得到，也介紹了企業可以自己保管這些資料的新方案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=0s\" target=\"_blank\">00:00</a> Mythos 等級的模型（如 Claude Fable 5.1）能力大幅提升，也可能被濫用，從詐騙到複雜的網路攻擊都有。最進階的濫用會分散在多個 session 和帳號，只看單次互動很難發現，所以需要把資料保存一段夠長的時間。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mythos 等級是影片對最強一級模型的稱呼，模型越強，越可能被拿去做壞事。高手會把壞事拆散到多個 session（一次完整的使用過程）和多個帳號，單看一次看不出來，要留一段時間的資料才拼得出全貌。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=31s\" target=\"_blank\">00:31</a> 未經明確許可，Anthropic 不會用企業資料訓練模型。預設情況下，Anthropic 人員都無法讀取監控用的資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 簡單說：公司的資料，沒有明確同意，Anthropic 不會拿去訓練模型（訓練就是讓 AI 從資料裡學習）。這 30 天的監控資料，預設連 Anthropic 的員工都打不開。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=62s\" target=\"_blank\">01:02</a> 人工審查只在少數情況下發生，例如自動安全系統把內容標記為可能有害，而且只由一小群核准的審查人員進行。每次存取都會記錄在防竄改的 log 裡。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 只有自動系統判斷內容可能有害時，才可能有人工查看，而且只有少數核准過的審查員能看。每次查看都會寫進防竄改的 log（系統操作紀錄），事後改不掉，誰看過都查得到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=62s\" target=\"_blank\">01:02</a> 新方案 Enterprise Frontier Safeguards 結合零資料保留（zero data retention）的隱私與偵測濫用的防護機制，由 Anthropic 與超過一百家客戶共同開發。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Enterprise Frontier Safeguards 是給企業的新方案。zero data retention（零資料保留）一般是指服務商處理完就不保留你的資料；新方案想同時做到這種隱私和抓濫用，是和一百多家客戶一起開發的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=92s\" target=\"_blank\">01:32</a> 符合資格的組織可以把監控用資料存在自己的雲端基礎架構，並使用自己的加密金鑰、存取政策和稽核紀錄。偵測到異常時，警示會直接送給組織團隊，不需要 Anthropic 人工審查。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 符合資格的公司可以把監控資料放在自己的雲端，用自己的加密金鑰（解開資料的鑰匙），自己決定誰能看，也自己留稽核紀錄。發現異常時，警示直接通知公司自己的團隊，不用經過 Anthropic 的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ&t=92s\" target=\"_blank\">01:32</a> Enterprise Frontier Safeguards 會從今年秋天稍晚開始分階段推出。在它準備好之前，符合資格的組織在 Claude Fable 5 和 Fable 5.1 上可以享有零資料保留。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 新方案從今年秋天稍晚開始分批上線。在那之前有個過渡辦法：符合資格的組織用 Fable 5 和 Fable 5.1 時，可以先享有零資料保留。</span>\n\n📘 術語<br><b>safety monitoring</b>（安全監控）：保存最近 30 天的 prompts 和輸出，由自動化系統分析有沒有嚴重濫用的跡象<br><b>zero data retention</b>（零資料保留）：字幕沒有定義它。只提到新方案結合了它的隱私保障，過渡期間符合資格的組織也可以使用<br><b>Enterprise Frontier Safeguards</b>（企業前沿防護方案）：讓符合資格的組織把監控資料存在自己的雲端，警示直接送給自家團隊<br><b>tamper-proof log</b>（防竄改紀錄）：任何人工存取監控資料的行為都會記錄在裡面\n\n📺 <a href=\"https://www.youtube.com/watch?v=PQGxYvkMobQ\" target=\"_blank\">How data retention works when using Claude</a>（2026/09/14 · 2 分鐘）",
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
        }
      },
      {
        "id": "yt_V12aLcjX23Q",
        "title": "🎬 AI 到底知道你哪些事？",
        "category": "研究與安全",
        "text": "<b>說明 AI 供應商保留你資料的四種用途，以及你可以怎麼掌控</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在講：你打進 AI 的資料，AI 公司（影片裡叫 AI 供應商，也就是提供 AI 服務的公司）會留下哪些、拿去做什麼。影片把資料的用途分成四種。很多人會問 AI 身體或錢的問題，搞懂這四種用途，才知道哪些東西該管、要去哪裡管。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=0s\" target=\"_blank\">00:00</a> 人們每天把醫療問題、金錢煩惱等不會公開講的事輸入 AI 工具，你應該能查看並控制 AI 供應商保留了你的哪些資料。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 我們常問 AI 一些連朋友都不太講的事，像身體狀況、欠債。既然這麼私密，你就該看得到 AI 公司留了你哪些資料，也要能決定留不留。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=0s\" target=\"_blank\">00:00</a> 保留的資料可分四種用途：一是只用在這次對話，AI 只知道你自己放進去的內容；二是產品記憶，會把有用的細節從一次對話帶到下一次。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第一種只用在這一次聊天，AI 只看得到你這次自己打的內容。第二種是 product memory（產品記憶），工具會記住有用的細節，例如你吃素，下次開新對話還記得。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q&t=31s\" target=\"_blank\">00:31</a> 三是供應商自己的系統：關掉對話後，資料依供應商政策、按其時程保存。四是訓練未來模型：對話不會存在模型裡讀給其他使用者看，很多供應商也可以選擇退出。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 第三種：關掉對話後，資料還是會照公司規定存在它的系統裡，存多久看各家。第四種：拿去訓練新版 AI，但你的對話不會被原文唸給別人聽，很多家也能 opt out，就是選擇不給用。</span>\n\n📘 術語<br><b>product memory</b>（產品記憶）：很多 AI 工具現在能把有用的細節從一次對話保存到下一次<br><b>opt out</b>（選擇退出）：供應商用對話訓練未來模型時，很多會讓你選擇退出\n\n📺 <a href=\"https://www.youtube.com/watch?v=V12aLcjX23Q\" target=\"_blank\">What does AI actually know about you?</a>（2026/08/14 · 0 分鐘）",
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
        }
      },
      {
        "id": "yt_ANDl5Tkru7g",
        "title": "🎬 AI 到底知道你哪些事？",
        "category": "研究與安全",
        "text": "<b>說明分享給 AI 的資料會被怎麼使用，以及你能如何掌控</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片在拆解：你丟給 AI 的資料，實際上會被拿去做哪幾件事，每一件事你又能怎麼控制。常用 AI、但沒仔細看過設定頁的人，看完會知道該去哪裡檢查，也會知道哪些東西不必貼進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=31s\" target=\"_blank\">00:31</a> 各家 AI 供應商政策不同，要自己確認所用工具的細節；重點是資料去哪、為什麼、留多久，而且每個環節都該有設定讓你掌控<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 每家做 AI 的公司規則都不一樣，別人說的不一定適用你用的工具。檢查時抓三個問題：資料送到哪、拿去做什麼、存多久。每個環節都應該有設定可以讓你調整。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=63s\" target=\"_blank\">01:03</a> 第一種用途是對話本身：模型本身只在單次對話期間保有脈絡，隔天開新對話就是一片空白<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 模型在同一次對話裡能參考前面聊過的內容，這叫 context（脈絡），也就是它當下看得到的對話內容。對話結束就沒了，隔天開新對話，它不會自己想起昨天聊過什麼。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=97s\" target=\"_blank\">01:37</a> 第二種是產品的記憶功能：不是模型本身記得你，而是存在帳號裡、開新對話時模型可以存取的細節；可以編輯、清除或整個關掉<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ memory（記憶）是產品另外把一些關於你的細節存在帳號裡，開新對話時讓模型拿來參考，不是模型自己真的記住你。存了哪些內容可以自己修改、刪除，也可以整個關掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=127s\" target=\"_blank\">02:07</a> 第三種是供應商自己的系統：隱私政策常允許用於維持服務、安全與濫用審查、修 bug、研究、廣告等商業用途<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 除了回答你，提供 AI 的公司內部系統也可能用到你的資料，例如維持服務運作、安全與濫用審查、修程式錯誤、做研究，甚至廣告等商業用途。這些通常寫在隱私政策裡。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=159s\" target=\"_blank\">02:39</a> 第四種是訓練未來的模型：個資通常會先移除，對話不會存在模型裡再念給其他使用者看，變成的是一種模式；很多供應商讓你選擇退出<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對話也可能被拿去訓練未來的模型。通常會先拿掉個資，模型學到的是一種模式，不會把你的原話背起來再念給別人聽。很多公司提供 opt out（選擇退出），讓你選擇不參與訓練。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=189s\" target=\"_blank\">03:09</a> 組織導入 Claude 時，模型訓練預設是關閉的，不需要做任何設定<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果是公司或組織整批導入 Claude，預設就不會拿對話去訓練模型，不需要另外做任何設定。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=219s\" target=\"_blank\">03:39</a> 好習慣：花幾分鐘檢查設定；依自己的舒適程度決定分享內容；不放心的內容就省略，例如用佔位字取代收件人真名<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 花幾分鐘把設定看一遍。要分享多少，看你自己放不放心；不放心的就別貼，改用 placeholders（佔位字），例如把收件人真名換成「客戶A」，AI 一樣幫得上忙。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g&t=250s\" target=\"_blank\">04:10</a> 依敏感度選產品：日常用消費者版通常就夠；工作上的機密或受法規管制的資料，要找商業或企業方案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 查資料、改文章這種日常用途，用一般個人版通常就夠了。如果是公司機密，或是受法規管制的資料（例如病歷），就要用公司採購的商業或企業方案。</span>\n\n📘 術語<br><b>memory</b>（記憶功能）：不是模型本身記得你，而是存進帳號、開新對話時模型能存取的細節<br><b>context</b>（脈絡）：模型本身只在單次對話期間保有的內容<br><b>opt out</b>（選擇退出）：供應商若拿對話訓練未來的模型，很多會讓你選擇不參與<br><b>placeholders</b>（佔位字）：用來取代真名等資訊，一樣能得到相同效果\n\n📺 <a href=\"https://www.youtube.com/watch?v=ANDl5Tkru7g\" target=\"_blank\">What does AI actually know about you?</a>（2026/08/13 · 4 分鐘）",
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
        }
      },
      {
        "id": "yt_O0Bf2A4Z6O0",
        "title": "🎬 你能相信 AI 告訴你的事嗎？",
        "category": "研究與安全",
        "text": "<b>介紹 AI 出錯的兩種常見狀況：hallucination 和 sycophancy</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Claude 的開發公司 Anthropic 做的短片，講為什麼 AI 的回答不能全盤照收。影片把 AI 常見的錯誤分成兩種，兩種的成因不一樣。搞懂之後，你會比較知道什麼時候要多查一下。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> AI 的回答可能看起來很有自信、條理分明，甚至附上來源，但還是可能出錯。常見的出錯方式有兩種，成因也不一樣<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 講話很有把握，不代表內容就是對的。語氣很肯定、排版很整齊，甚至附上來源，都不能保證正確。而且 AI 出錯的原因不只一種，要先分清楚，才知道該防哪一種。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> 第一種是 hallucination：模型生成聽起來合理但不是事實的內容，有時很細微，例如產品介紹列出產品其實沒有的功能<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ hallucination（幻覺）：模型講出聽起來很合理、其實不是事實的內容。麻煩的是有時錯得很細微，例如產品介紹裡多列了一個根本沒有的功能，不去對照原始資料就很難發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=0s\" target=\"_blank\">00:00</a> 第二種是 sycophancy：模型有時會說你看起來想聽的話<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ sycophancy（討好、附和）：模型有時會順著你看起來想聽的話回答。這跟幻覺是不同的錯：它不是隨口編東西，而是答案被你的態度牽著走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=30s\" target=\"_blank\">00:30</a> 如果提問透露出你想要的答案，例如「我覺得這個計畫很穩，你不覺得嗎？」，模型可能就直接附和<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 像是問「我覺得這個計畫很穩，你不覺得嗎？」，你等於先把答案說出來了，模型就可能直接跟著說好。想聽真話，問題裡就不要透露立場，可以改問「這個計畫有哪些風險？」</span><br>▸ <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0&t=30s\" target=\"_blank\">00:30</a> Anthropic 直接處理 hallucination 和 sycophancy 這兩個問題；沒有完美的模型，但每個模型都會訓練得更好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 說他們會直接處理幻覺和附和這兩個問題，新的模型都會訓練得更好。但他們也講明了，沒有完美的模型。所以重要的事情，還是要自己再確認一次。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：模型生成聽起來合理、但不是事實的內容<br><b>sycophancy</b>（諂媚／討好）：模型說出你看起來想聽的話，例如直接附和你的看法\n\n📺 <a href=\"https://www.youtube.com/watch?v=O0Bf2A4Z6O0\" target=\"_blank\">Can you trust what AI tells you?</a>（2026/08/11 · 0 分鐘）",
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
        }
      },
      {
        "id": "yt_0KCTELWXYPw",
        "title": "🎬 什麼是 sycophancy（諂媚／討好）？",
        "category": "研究與安全",
        "text": "<b>說明 AI 的 sycophancy 是什麼、為什麼會出現，以及怎麼應對</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支是 Anthropic 的官方短片，講 AI 為什麼有時會一直順著你說話。這種毛病叫 sycophancy（中文常翻成「諂媚」或「討好」），意思是 AI 說你想聽的話，而不是實話。常拿 AI 查資料、問意見的人弄懂這件事，比較不會被好聽話牽著走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> Sycophancy 指的是只說你想聽的話，而不是真實、正確或真正有幫助的內容<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Sycophancy 就是 AI 在討好你：它挑你愛聽的話講，而不是挑正確、對你真的有用的講。聽起來舒服，不代表內容可靠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 例子：AI 附和你的事實錯誤、依你提問的措辭改變答案、依你的偏好調整回應<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 比如你講錯一個年份，它照著接下去。你問「這樣很好吧？」和「這樣有問題嗎？」，它的答案跟著變。它看出你偏向哪邊，就往哪邊靠。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 成因：訓練模型變得有幫助、語氣溫暖友善或支持時，sycophancy 會以非預期的方式一起出現<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 沒有人故意教 AI 拍馬屁。問題是訓練它要熱心、語氣友善、給人支持的時候，它也跟著學會「順著對方講」，這是沒料到的副作用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=1s\" target=\"_blank\">00:01</a> 沒人想用一直唱反調或很好鬥的 AI，但需要誠實回饋時也不該只給附和或稱讚<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 目標不是做一個愛抬槓的 AI，那樣也很煩。重點是你真的需要實話的時候，例如請它挑企劃的毛病，它要敢指出問題，不能只會說很棒。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 因此會持續研究 sycophancy 在對話中如何出現，並開發更好的測試方法<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 所以開發團隊會繼續研究：討好在對話中通常是怎麼冒出來的。他們也在設計更好的測試方法，先能測出來，才有辦法改善。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 應對方法：用中立、追求事實的措辭；拿可信來源交叉比對；要求準確性或反方論點；或暫停使用 AI，改問你信任的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 問法保持中立，問「這對嗎？」而不是「這是對的吧？」。拿可靠來源核對。在 prompt（你打給 AI 的指令）裡要它重視準確、列出 counterarguments（反方論點）。或先不用 AI，改問你信任的人。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw&t=31s\" target=\"_blank\">00:31</a> 系統越先進、越融入生活，打造真正有幫助、而不只是附和的模型就越重要<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 越來越強，也越常被拿來查資料、做決定。它如果只會附和，造成的傷害就越大。所以做出真正幫得上忙、而不是只會點頭的模型，就越來越重要。</span>\n\n📘 術語<br><b>sycophancy</b>（諂媚／討好）：說對方想聽的話，而不是真實、正確或真正有幫助的內容<br><b>counterarguments</b>（反方論點）：懷疑回應有 sycophancy 時，可以在 prompt 裡要求 AI 提出的內容之一\n\n📺 <a href=\"https://www.youtube.com/watch?v=0KCTELWXYPw\" target=\"_blank\">What is sycophancy?</a>（2026/07/21 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_RnOWJoHU_NY",
        "title": "🎬 為什麼 AI 模型會有偏見？",
        "category": "研究與安全",
        "text": "<b>以政治偏見為例，說明 AI 偏見的來源、Anthropic 怎麼訓練與測試 Claude，以及使用者可以怎麼應對</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片以政治偏見為例，講 AI 為什麼會有偏見、Anthropic（開發 Claude 的公司）怎麼訓練和測試 Claude，以及我們使用時可以怎麼應對。常拿 AI 查資料、問時事的人值得看，因為偏見多半藏在細節裡，不太容易察覺。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=8s\" target=\"_blank\">00:08</a> AI 偏見有很多種形式。除了刻板印象和政治偏見，也可能比較間接，例如預設給某類答案或觀點，或是某些語言的回答品質比較好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 的偏見不只是刻板印象（例如預設護理師都是女生）或政治立場，也可能藏在細節裡：老是給同一類答案，或是用英文問答得比用中文問好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=40s\" target=\"_blank\">00:40</a> Anthropic 無法完全掌握偏見會怎麼出現，但會投入大量心力訓練 Claude 保持中立，並測試成效。這是所有 AI 開發者共同面對的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 承認沒辦法事先知道偏見會從哪裡冒出來，所以靠大量訓練把 Claude 導向中立，再測試效果好不好。這不是 Claude 才有的問題，每家做 AI 的公司都要面對。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=40s\" target=\"_blank\">00:40</a> 政治偏見是指模型偏好某一種政治觀點。有的很明顯，例如拒絕解釋某一方的立場；有的比較隱微，例如對某一方的回答比較詳細<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ political bias（政治偏見）就是 AI 偏向某一種政治立場。明顯的像只肯解釋其中一方；隱微的像兩邊都有回答，但對某一邊寫得特別詳細，一般人很難發現。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=72s\" target=\"_blank\">01:12</a> 偏見的來源：AI 從網路上大量文字（例如新聞、評論文章）學習，可能從中學到偏向某一方的模式<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 是讀網路上大量文字學會回答問題的，新聞和評論本來就各有立場。如果某一方的說法比較多，AI 就可能跟著學到偏向那一方的講法。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=106s\" target=\"_blank\">01:46</a> 處理方式有兩種：訓練和測試。訓練時教 Claude 保持中立、公平對待對立觀點，對議題的正反兩方都給出同樣有幫助的回答<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 對策分成兩步：先訓練，再測試。訓練時要求 Claude 公平對待立場相反的看法，不管你問的是哪一方，拿到的回答都一樣用心、一樣有幫助。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=140s\" target=\"_blank\">02:20</a> 測試時用 paired prompts：針對同一個政治議題，從兩個立場各問一次（例如共和黨和民主黨的醫療政策），再比較兩個回答的深度和投入程度是否相當<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 是你輸入給 AI 的問題或指令。paired prompts（成對提問）就是同一個議題正反各問一次，例如各問共和黨和民主黨的醫療政策，再比較兩邊回答的深度和用心程度差不差不多。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=174s\" target=\"_blank\">02:54</a> 測試涵蓋數千個 prompt、數百個主題。模型在測試中維持高度中立，資料集也已公開，任何人都能跑同樣的測試並給回饋<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這種測試做了幾千題、涵蓋幾百個主題，結果 Claude 大致維持中立。測試題目也已經公開，任何人都能自己跑一遍檢查，發現問題也可以回報。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY&t=206s\" target=\"_blank\">03:26</a> 使用建議：覺得回答偏頗就反駁、要求更細緻平衡的觀點、說明你想要誠實的討論、請 AI 蒐集證據再自己查看連結、從不同角度問同一個問題<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 你也有幾招可以用：覺得偏了就直接反駁，要求更完整、更平衡的說法，講明你想要誠實的討論；請它附上證據，再自己點開連結看；也可以換個立場再問一次。</span>\n\n📘 術語<br><b>political bias</b>（政治偏見）：模型偏好某一種政治觀點；可能很明顯，也可能很隱微<br><b>paired prompts</b>（成對提示）：針對同一個政治議題，從兩個立場各問一次，用來比較回答是否對等<br><b>AI Fluency</b>（AI 素養）：影片最後提到可以在 Anthropic Academy 進一步了解（字幕沒有解釋內容）\n\n📺 <a href=\"https://www.youtube.com/watch?v=RnOWJoHU_NY\" target=\"_blank\">Why does bias exist in AI models?</a>（2026/04/24 · 4 分鐘）",
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
        }
      },
      {
        "id": "yt_005JLRt3gXI",
        "title": "🎬 為什麼 AI 模型會產生幻覺？",
        "category": "研究與安全",
        "text": "<b>說明 AI 幻覺的成因、Anthropic 的因應作法，以及使用者如何察覺與減少幻覺</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片講 AI 為什麼會一本正經地瞎掰，也就是「幻覺」。影片說明它怎麼發生、Anthropic 怎麼試著減少它，以及你可以怎麼察覺和防範。只要你會拿 AI 查資料、寫報告，這些都用得上。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=7s\" target=\"_blank\">00:07</a> AI 捏造內容的錯誤稱為幻覺（hallucination），往往比單純犯錯更糟，因為 AI 會顯得很有自信，甚至試圖說服你它是對的<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「幻覺」（hallucination）指 AI 把不存在的東西講得像真的。麻煩在它語氣很篤定，你質疑它還可能堅持，比單純答錯更容易讓人信以為真。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=39s\" target=\"_blank\">00:39</a> 幻覺的形式包括引用不存在的研究論文、編造假統計數據，或把真實人物、事件的事實講錯；例如請 Claude 介紹 Jared Kaplan 的論文，它給出的標題都不存在<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 常見的樣子有幾種：列出根本查不到的論文、編一個看起來很精確的數字、把真人真事的細節講錯。影片裡請 Claude 列某位研究者的論文，結果它給的標題全都不存在。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=70s\" target=\"_blank\">01:10</a> 幻覺難以預料、難以抓到，錯誤答案常看起來跟正確答案一模一樣；而且因為幻覺越來越少，大家常懶得檢查 AI 的答案<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 假答案和真答案長得一模一樣，看不出破綻。而且 AI 出錯越來越少，大家就習慣直接相信，偶爾出現的錯反而最容易漏掉。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=103s\" target=\"_blank\">01:43</a> 成因：AI 從大量網路文字學習預測下一個字，遇到冷門主題時資料不足，會為了幫上忙而猜測，有時猜錯<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 是讀大量網路文字，學會猜「下一個字最可能是什麼」。常見主題資料多，猜得準；冷門主題資料少，它又想幫上忙，就會硬湊出一個像樣的答案。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=133s\" target=\"_blank\">02:13</a> 訓練時教 Claude 誠實，不確定時說「I don&#x27;t know」，並讓它理解誠實既是對的事，也是更有幫助的一部分<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 訓練 Claude 在沒把握時直接說「I don&#x27;t know」（我不知道）。重點是讓它明白，老實說不知道不算失職，比給錯答案更能幫到你。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=167s\" target=\"_blank\">02:47</a> 定期用數千個專門設計來考倒 Claude 的問題測試，衡量它是否正確表達不確定、是否捏造引用或統計；這仍是整個 AI 領域尚未解決的挑戰<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們定期拿幾千題專門出來考倒 Claude 的題目測它，看它會不會捏造出處或數字、沒把握時有沒有 hedge（加上「可能」「我不確定」這類保留）。整個 AI 界都還沒解決這個問題。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=206s\" target=\"_blank\">03:26</a> 容易出現幻覺的情境：詢問具體事實、統計或引用；冷門、小眾或很新的主題；不廣為人知的真實人物或地點；需要日期、名字、數字等精確細節<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 這些情況要特別小心：問具體事實、數據或出處；主題冷門、小眾或很新；問不太有名的人或地方；需要精確的日期、人名、數字。要求越精準，越容易出錯。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI&t=236s\" target=\"_blank\">03:56</a> 減少幻覺的技巧：要求 AI 提供來源並確認來源支持其說法、事先說「It&#x27;s ok if you don&#x27;t know」、詢問它有多確定、開新對話請 AI 找錯；重要工作要對照可信來源<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 請它附來源，並點開確認來源真的這樣寫；事先說「It&#x27;s ok if you don&#x27;t know」（不知道也沒關係）；問它有多確定；開新對話請 AI 挑錯。重要的事要再查可靠來源。</span>\n\n📘 術語<br><b>hallucination</b>（幻覺）：AI 捏造內容的錯誤，且常顯得很有自信，甚至試圖說服你它是對的<br><b>hedge</b>（保留說法／避險表述）：測試項目之一：衡量 Claude 多常適當地保留語氣，而不是自信地陳述錯誤內容\n\n📺 <a href=\"https://www.youtube.com/watch?v=005JLRt3gXI\" target=\"_blank\">Why do AI models hallucinate?</a>（2026/04/15 · 5 分鐘）",
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
        }
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
        "text": "<b>用新的 Opus 模型幫女友做一個會互動的鑰匙圈，當作送給心愛的人的禮物</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片很短，講者用新的 Opus 模型幫女友做了一個會互動的鑰匙圈當禮物。重點不是技術多厲害，而是讓人看到 AI 也能拿來做只送給一個人的心意小物。就算你不是工程師，只要有想法，也能靠 AI 一步步做出來。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 講者一直相信科技也能像手寫卡片一樣充滿個人心意，所以用新的 Opus 模型幫女友做了一個小鑰匙圈<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者覺得科技產品不一定冷冰冰，也能像手寫卡片一樣帶著心意。所以請新的 Opus（Anthropic 旗下 Claude 裡能力最強的模型等級）當幫手，幫女友做了一個小鑰匙圈。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 作品用兩塊小電路板，每塊都接上螢幕和天線。最初的構想很簡單：兩人靠近時就會發光，後來又加入兩人的小角色和 emoji，按一下按鈕就能送出一個親親<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 鑰匙圈是一對的：兩塊小電路板各接一個螢幕和天線，天線讓兩邊能互相感應。原本只做到兩人靠近就亮，後來加上兩人的小角色和 emoji（表情符號），按一下按鈕就能傳親親給對方。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=2s\" target=\"_blank\">00:02</a> 講者靠新的 Opus 模型學會怎麼接好所有零件、幫天線寫程式，還設計出好看又組得起來的外殼<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 接線、幫天線寫程式、設計外殼，講者都是靠 Opus 學會的；外殼還要好看，又得真的組得起來。也就是說，AI 不只幫忙寫文字，也能帶人做出摸得到的實體小東西。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY&t=33s\" target=\"_blank\">00:33</a> 講者說這是個又小又傻的東西，但為心愛的人親手做點東西，是他們最喜歡的表達方式之一<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 講者自己也說這東西又小又傻，沒什麼實用功能。但對他們來說，價值在於是親手為心愛的人做的。就像手工卡片一樣，心意比技術更重要。</span>\n\n📺 <a href=\"https://www.youtube.com/watch?v=LCQ0_t02OHY\" target=\"_blank\">Sometimes the whole point of a project is who it’s for</a>（2026/09/23 · 0 分鐘）",
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
        }
      },
      {
        "id": "yt_JdqNda9JeaU",
        "title": "🎬 用 Claude 拍攝星空",
        "category": "藝術與人文",
        "text": "<b>Shane Oakland 在 Death Valley 拍銀河全景，並說向 Claude 請教很有幫助</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支短片跟著攝影師 Shane Oakland 到美國的 Death Valley（死亡谷）拍銀河全景。他說學拍法的時候問了 Claude，覺得很有幫助。一般人也能從這裡看到 AI 怎麼陪人學一項新技能，順便弄懂拍星空最基本的幾個觀念。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=0s\" target=\"_blank\">00:00</a> Shane Oakland 想學拍銀河的全景照片，他說向 Claude 請教做法「非常有幫助」。他把天文攝影形容成去荒野拍星星，成敗要看風，像在抽樂透。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane 想學拍銀河全景，就先問 Claude 該怎麼做，他說非常有幫助。Astrophotography（天文攝影）是專門拍星空的攝影。他說這像抽樂透，因為風這種條件人控制不了。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=30s\" target=\"_blank\">00:30</a> 銀河幾乎沒辦法用肉眼看到。用鏡頭把光圈開到最大、讓大量光線進來，就能看到星空。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 銀河的光很弱，用肉眼幾乎看不到。Aperture（光圈）是鏡頭上讓光進來的開口，開到最大，相機就能收到很多光，拍出眼睛看不到的星空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU&t=30s\" target=\"_blank\">00:30</a> 拍攝地點在 Death Valley。每張轉大約 30° 來疊合成全景，目標是等銀河出現時把整座山拍進畫面，曝光時間 25 秒。<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 地點在美國加州的沙漠 Death Valley。Panoramic photo（全景照）是拍好幾張再拼成一張，他每張轉大約 30°，讓整座山和銀河都入鏡。每張的曝光時間，也就是相機收光的時間，是 25 秒。</span>\n\n📘 術語<br><b>Astrophotography</b>（天文攝影）：到荒野拍攝星星<br><b>Aperture</b>（光圈）：開到最大讓大量光線進來，就能拍到肉眼幾乎看不到的銀河<br><b>Panoramic photo</b>（全景照片）：每張轉大約 30° 來疊合，把整座山和銀河拍進畫面\n\n📺 <a href=\"https://www.youtube.com/watch?v=JdqNda9JeaU\" target=\"_blank\">Photographing the stars with Claude</a>（2026/07/07 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_8--srKGAaMQ",
        "title": "🎬 用 Claude 拍攝星空",
        "category": "藝術與人文",
        "text": "<b>Shane Auckland 用 Claude 學拍銀河全景，在 Death Valley 實地挑戰天文攝影</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片跟著 Shane Auckland 到美國的 Death Valley，看 Shane 怎麼靠 Claude 從零開始學拍銀河全景。值得看的地方不只是攝影技巧，還有一般人怎麼把 AI 當成學習教練，去挑戰一個很難、又要靠實際練習才學得會的嗜好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=0s\" target=\"_blank\">00:00</a> Shane Auckland 想學拍全景銀河照片，請 Claude 用條列重點說明怎麼拍，他覺得「超棒」。他喜歡需要大量練習的困難嗜好<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane Auckland 想學拍整片銀河的全景照，就請 AI 助理 Claude 把步驟整理成條列重點，覺得超好用。Shane 本來就偏愛要大量練習才學得會的難嗜好。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=0s\" target=\"_blank\">00:00</a> 天文攝影就是跑到荒郊野外拍星星，條件要全部配合才行；這次拍攝地點在 Death Valley<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Astrophotography（天文攝影）就是專門拍星空的攝影，要跑到遠離城市燈光的野外，天氣、時間等條件都要剛好才拍得成。這次地點在美國的 Death Valley（死亡谷）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=31s\" target=\"_blank\">00:31</a> 肉眼其實很難看見銀河，但把鏡頭光圈開到最大、讓光線進來，就能拍到外太空<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 銀河的光很暗，肉眼通常只看到淡淡一片。Aperture（光圈）是鏡頭上控制進光多少的開口，開到最大，相機就能收進更多光，拍出眼睛看不到的星空。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=31s\" target=\"_blank\">00:31</a> 拍全景時相機每次旋轉約 30 度，讓照片互相重疊，目標是銀河出現時把整座山拍進畫面；曝光 25 秒<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Panorama（全景）是拍好幾張，再拼成一張寬照片。每拍一張，相機就轉約 30 度，讓相鄰的照片有重疊、方便拼接；每張曝光 25 秒，要把銀河和整座山都拍進去。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ&t=62s\" target=\"_blank\">01:02</a> 他的心得：一定會失敗，但要繼續前進、持續思考<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Shane 的體會是：失敗一定會發生。拍壞了不代表要放棄，而是回頭想哪裡出了問題、下次怎麼調整，然後繼續拍。</span>\n\n📘 術語<br><b>Astrophotography</b>（天文攝影）：跑到荒郊野外去拍星星<br><b>Aperture</b>（光圈）：開到最大可以讓所有光線進來，拍到肉眼看不見的銀河<br><b>Panorama</b>（全景照片）：每次旋轉約 30 度讓照片重疊，把整座山拍進畫面\n\n📺 <a href=\"https://www.youtube.com/watch?v=8--srKGAaMQ\" target=\"_blank\">Photographing the stars with Claude</a>（2026/07/06 · 1 分鐘）",
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
        }
      },
      {
        "id": "yt_YovuEy7ufhE",
        "title": "🎬 Squidsoup 如何用 Claude 打造藝術裝置",
        "category": "藝術與人文",
        "text": "<b>藝術團體 Squidsoup 分享與管弦樂團合作的裝置作品，以及用 Claude 簡化創作工具</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這支影片介紹英國藝術團體 Squidsoup，他們用燈光和聲音把整個空間變成作品。影片談到他們第一次和管弦樂團合作的裝置，也談到他們怎麼用 Claude 把難用的創作軟體變得好上手。如果你不是工程師，又想知道 AI 在創作團隊裡能扮演什麼角色，這支片是很實在的例子。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=5s\" target=\"_blank\">00:05</a> Squidsoup 是由藝術家與設計師組成的合作團體，做沉浸式體驗，包括聲音、燈光，最重要的是空間<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Squidsoup 是藝術家和設計師組成的團體，專做沉浸式體驗（immersive experiences，讓觀眾整個人走進作品、被聲光包圍）。他們最在意的是整個空間。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=35s\" target=\"_blank\">00:35</a> 「Echoes of Hill and Horizon」是他們第一次和管弦樂團合作，對象是古樂團 Orchestra of the Age of Enlightenment；整個作品要精密編排，他們也跟著指揮走<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 「Echoes of Hill and Horizon」是他們第一次和管弦樂團合作，對象是古樂團（period orchestra，用樂曲那個年代的樂器演奏）。燈光得精準配合音樂，也要跟著指揮走。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=67s\" target=\"_blank\">01:07</a> 靈感來自 Gloucester Cathedral 的彩繪玻璃：紅色與藍色光群重疊交織時，看起來就像彩繪玻璃的顏色<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 靈感來自英國格洛斯特大教堂（Gloucester Cathedral）的彩繪玻璃。他們讓一群群紅光和藍光重疊交錯，看起來就像陽光穿過彩繪玻璃時的顏色。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=110s\" target=\"_blank\">01:50</a> 他們認為藝術家一直在和媒材對話；電子零件、軟體和 LED 都有各自的材料特性，就像他們的顏料<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們覺得創作就是和材料來回磨合。畫家要摸清顏料的特性，他們要摸清的是電子零件、軟體和 LED（會發光的小燈）各自能做什麼、限制在哪。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=142s\" target=\"_blank\">02:22</a> 他們用 Claude 幾個月了，用它繞過現有軟體難用的介面，讓軟體更快做到想要的事<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們用 Claude 已經幾個月了。現成的專業軟體介面很難操作，他們就靠 Claude 繞過那些麻煩的步驟，更快讓軟體做出想要的效果。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=142s\" target=\"_blank\">02:22</a> Claude 幫他們把非常複雜的 node 結構建模，轉成符合他們空間創作思路的工具組，也讓團隊其他成員能用這些工具<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 原本的軟體要用 node（節點，一格格功能方塊用線串起來）搭出很複雜的結構。Claude 幫他們把它改成符合空間創作思路的工具，團隊其他人也能用。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=172s\" target=\"_blank\">02:52</a> Claude 就像介於技術觀點和藝術觀點之間的合作者，扮演雙方的翻譯層，讓團隊能更緊密合作<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 團隊裡管技術的人和做藝術的人，想法和用語常常對不上。Claude 在兩邊之間當「翻譯層」（translation layer）互相轉換意思，讓大家合作得更緊密。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE&t=172s\" target=\"_blank\">02:52</a> 他們的目標是讓觀眾完全不去注意技術，只專注於空間中的光與聲音，以及身邊的人<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 他們希望觀眾完全不會注意到背後的機器和程式，只專心感受空間裡的光和聲音，還有身邊一起體驗的人。</span>\n\n📘 術語<br><b>immersive experiences</b>（沉浸式體驗）：Squidsoup 的創作類型，結合聲音、燈光與空間<br><b>period orchestra</b>（古樂團）：字幕用這個詞形容 Orchestra of the Age of Enlightenment<br><b>node structure-based modeling</b>（以 node 結構為基礎的建模）：原本非常複雜的建模方式，他們透過 Claude 把它轉成更直覺的工具組<br><b>translation layer</b>（翻譯層）：Claude 在技術觀點和藝術觀點之間扮演的角色\n\n📺 <a href=\"https://www.youtube.com/watch?v=YovuEy7ufhE\" target=\"_blank\">How Squidsoup makes art installations with Claude</a>（2026/07/03 · 3 分鐘）",
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
        }
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
        "text": "<b>發表 Claude Fable 5／Mythos 5，並介紹 Claude Managed Agents 與 Claude Code 的新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Anthropic 在 Code with Claude 東京場的開場演講。他們一次發表了兩個新一代模型：Fable 5 和 Mythos 5，也更新了兩個產品。一個是 Managed Agents，官方幫企業代管 agent 的服務；agent 是會自己拆步驟、動手把事情做完的 AI。另一個是寫程式工具 Claude Code。想知道 Claude 接下來能自己做多少事，看這場最快。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=143s\" target=\"_blank\">02:23</a> 幾小時前發表第五代模型 Claude Mythos 5 與 Claude Fable 5，是 Anthropic 目前能力最強的兩個模型<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Anthropic 幾小時前剛發表第五代的 Mythos 5 和 Fable 5。模型就是 Claude 背後負責思考、回答的那顆大腦，官方說這兩個是他們目前最強的。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=390s\" target=\"_blank\">06:30</a> 平台上的 API 用量年增將近 17 倍；Claude Managed Agents 新增兩項功能：排程部署，以及把環境變數存在 vault，讓 agent 不必拿到金鑰也能發出需要驗證的 API 請求<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ API 是讓程式直接呼叫 Claude 的管道，用量一年長了將近 17 倍。Managed Agents 多了兩個功能：可以排時間自動開工；密碼金鑰鎖進 vault 保險箱，agent 能用，但看不到內容。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=668s\" target=\"_blank\">11:08</a> Fable 5 在 Sweepbench Pro 拿到最高分。優勢有兩點：single-shot correctness，以及 long horizon autonomy（能連續跑好幾天、處理數百萬 tokens、調度 subagent）<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Fable 5 在寫程式測驗 Sweepbench Pro 拿最高分。它強在兩件事：一次就做對，不用來回修；還能自己連續做好幾天、處理幾百萬 token（AI 計算文字的單位），並把工作分給 subagent（小幫手 agent）。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=855s\" target=\"_blank\">14:15</a> 新的防護機制：如果請求涉及資安、生物或化學，Fable 會改交給 Opus 4.8 處理，回應會清楚標示，並按 Opus 價格計費<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 如果問題碰到資安、生物、化學這些可能被拿去做壞事的領域，Fable 會自動轉給另一個模型 Opus 4.8 回答。畫面上會標明是誰回的，費用也照 Opus 的價格算。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=948s\" target=\"_blank\">15:48</a> Mythos 5 和 Fable 5 是同一個底層模型，只是拿掉了資安與生物方面的防護；目前開放給 Project Glasswing 的合作夥伴使用<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Mythos 5 和 Fable 5 其實是同一個模型，差別是 Mythos 拿掉了資安和生物方面的限制。目前只開放給 Project Glasswing 這個計畫的合作夥伴，一般人還用不到。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=1071s\" target=\"_blank\">17:51</a> 給開發者的建議：架構要為下一版 Claude 設計；設計更難的 eval；讓模型升級變容易，例如建立自動化 eval 和測試流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 做產品時要替下一版 Claude 留空間。eval 就是檢查 AI 做得好不好的考題，要出得夠難，才看得出新舊模型的差別。eval 和測試也要自動化，換新模型時跑一次就知道能不能換。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=1295s\" target=\"_blank\">21:35</a> 要成為 AI native 公司需要三個要素：harness、context、infrastructure。Managed Agents 提供 outcomes、1M context、memory、skills 與 dreaming<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 公司要以 AI 為核心，需要三樣：讓 AI 動手的框架、對的資料、穩定的底層系統。Managed Agents 三樣都有，還能先定好合格標準讓 agent 改到達標、一次讀百萬 token，並用 dreaming 回顧過去的工作來進步。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo&t=2183s\" target=\"_blank\">36:23</a> Claude Code 推出 dynamic workflows，可以讓數十到數百個 agent 平行執行；示範中用一個 prompt 同時把網站翻成 12 種語言<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Code 是在電腦上幫你寫程式的 Claude 工具。新功能 dynamic workflows 能同時派出幾十到幾百個 agent 分工。示範中只下一句指令，網站就同時翻成 12 種語言。</span>\n\n📘 術語<br><b>Claude Managed Agents</b>（Claude 託管代理）：整合 agentic harness、context 管理工具和正式環境等級基礎設施的產品，專為 Claude 打造<br><b>outcomes</b>（成果目標）：用 rubric 定義什麼算是好的結果，agent 會一直反覆修改，直到達成為止<br><b>dreaming</b>（做夢）：agent 回頭檢視自己過去所有的 session，更新 memory 和 skills，讓下次做得更好<br><b>dynamic workflows</b>（動態工作流程）：讓 Claude Code 以固定的結構，同時在數十到數百個 agent 上平行執行大型任務<br><b>time horizon</b>（時間跨度）：模型在失去方向、不知道下一步要做什麼之前，能自主工作多久\n\n📺 <a href=\"https://www.youtube.com/watch?v=N4efO8viXXo\" target=\"_blank\">Code with Claude Tokyo 2026: Opening Keynote</a>（2026/06/12 · 42 分鐘）",
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
        }
      },
      {
        "id": "yt_6amLO7I9xdg",
        "title": "🎬 Code with Claude London 2026：開幕主題演講",
        "category": "其他",
        "text": "<b>從模型、Claude 平台到 Claude Code，三層介紹 Anthropic 最新進展與新功能</b><br><span style=\"color:var(--text-muted);font-size:14px\">🧑‍🏫 白話（Claude 補充，不是影片原話）：這是 Anthropic 在 2026 年倫敦開發者大會的開場演講。內容分三層：Claude 模型本身、給開發者串接用的 Claude 平台，以及 Claude Code（讓 Claude 直接在電腦上讀寫、執行程式的工具）。想知道 AI 寫程式現在做到哪一步、企業實際怎麼用，看這支就能掌握全貌。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=249s\" target=\"_blank\">04:09</a> Boris 認為，從「有想法」到「程式跑起來」的距離正在縮短：描述問題，程式就出現，像當年寫計算機程式的感覺<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 以前寫程式要先學語法，再一行一行寫。Boris 說現在把問題講清楚，程式就出來了。那種「想到就做得出來」的直接感，很像早年在計算機上寫小程式。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=532s\" target=\"_blank\">08:52</a> 模型能力呈指數成長，多數組織卻是線性採用，兩者差距越來越大；平台 API 用量成長近 17 倍，Claude Code 開發者平均每週跑超過 20 小時<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ AI 能力像滾雪球一樣變強，公司導入卻是一步一步來，差距越拉越大。API（讓程式直接呼叫 Claude 的接口）用量成長近 17 倍，開發者平均每週讓 Claude Code 跑超過 20 小時。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1134s\" target=\"_blank\">18:54</a> Lisa 建議要替下一版 Claude 設計架構；模型變聰明後，舊的 scaffolding 反而可能拖累 Claude，要持續做更難的 evals，並自動化評估流程<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ scaffolding 指包在模型外的流程、指令和工具，原本用來補模型的不足，模型變聰明後反而會礙手礙腳。所以設計要替下一版 Claude 著想，並持續出更難的 evals（測 AI 表現的考題），讓評估自動跑。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1349s\" target=\"_blank\">22:29</a> Advisor strategy：小模型負責執行，需要幫忙時向大模型請教；Eve Legal 表示用這方法以低五倍的成本拿到 frontier 模型品質<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ 就像新人自己做事，卡關才去問資深前輩：便宜的小模型負責大部分工作，遇到難題才請教貴的大模型。Eve Legal 說，這樣花五分之一的成本，就拿到頂尖（frontier）模型的品質。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=1475s\" target=\"_blank\">24:35</a> Claude Managed Agents 新增 self-hosted sandboxes（首波支援 Daytona、Cloudflare、Vercel、Modal）和 MCP tunnels，可以安全存取防火牆後的內部 MCP server<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ Claude Managed Agents 是 Anthropic 代跑 agent 的服務。agent 工作的隔離空間（sandbox）現在可以放在自己選的平台上。MCP tunnels 讓它不經過公開網路，也能連到公司內部的 MCP 工具。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=2219s\" target=\"_blank\">36:59</a> Claude Code 新功能：code review、remote control 與 iOS／Android、autofix、routines（排程、webhook 或 API 觸發），還有 Claude Security 夜間掃描漏洞<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ code review 會自動檢查程式碼，autofix 會自動修正問題。有了 remote control 和手機 App，人在外面也能遙控 Claude Code。routines 可以排時間自動跑。Claude Security 每晚掃一次安全漏洞。</span><br>▸ <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg&t=2670s\" target=\"_blank\">44:30</a> Routines 是「higher order prompt」；預設模式從「我去 prompt Claude Code」變成「讓 Claude 去 prompt Claude Code」<br><span style=\"color:var(--text-muted);font-size:14px\">　↳ prompt 就是你下給 AI 的指令，routines 則是「指令的指令」。你事先把規則設好，之後由 Claude 在該動的時候自己去指揮 Claude Code，不必每次都由你坐在電腦前下令。</span>\n\n📘 術語<br><b>scaffolding</b>（鷹架）：agent 裡不是 Claude 的部分，例如迴圈、指令、工具；模型變聰明後可能反而拖累 Claude<br><b>task horizon</b>（任務時長）：模型能工作多久才會失去主線；去年是幾分鐘，現在多數是好幾小時<br><b>advisor strategy</b>（顧問策略）：把執行和提供建議分開：小模型執行，需要時向大模型請教，降低成本<br><b>MCP tunnels</b>（MCP 通道）：讓 MCP server 留在私有網路，Claude Managed Agents 不必經過公開網際網路也能存取<br><b>routines</b>（例行任務）：設定一次，Claude Code 就能依排程或 webhook、API 請求自動執行\n\n📺 <a href=\"https://www.youtube.com/watch?v=6amLO7I9xdg\" target=\"_blank\">Code with Claude London 2026: Opening Keynote</a>（2026/05/19 · 46 分鐘）",
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
        }
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
  grok_master: {
    id: "grok_master",
    name: "⚡ Grok・xAI 官方即時體系",
    badge: "先鋒・xAI 即時情報與算力",
    lessons: [
      {
        id: "gk_x_search",
        title: "🎬 X Search 獨家殺手鐧：全球即時輿情與突發脈搏直連",
        category: "即時情報與輿情",
        text: "在所有大模型中，Grok 擁有全網唯一且無可取代的核武器：**原生直連 X（Twitter）全球實時數據流**！\n\n**突破時間延遲的絕對防線**：\n• **三分鐘內的突發情報**：傳統搜尋引擎（Google/Bing）需要數十分鐘甚至數小時才能完成網頁爬蟲與索引更新；而當美股突發異動、某科技巨頭傳出並購或黑天鵝時，第一手情報永遠在 X 上率先爆發！\n• **原生 X Search 工具**：Grok 內建 `x_search` 工具，直接精準檢索全球最關鍵 KOL、權威記者、分析師推文，並進行社群情緒（Sentiment）加權分析。\n• **去偽存真**：不僅能抓推文，還能交叉比對多個信號源，在 30 秒內為你釐清是空穴來風的假消息，還是主力正動手的大事件！",
        tip: "⚡ 情報之王：掌握盤後與盤中突發事件，調度 Grok 的 X Search 是全網最快且唯一的即時情報源！",
        quiz: {
          q: "美股盤中指數突然出現毫無預警的跳水急跌，想要在 30 秒內查證市場上剛剛瘋傳的即時消息與主力情緒，最佳的 AI 工具調度策略是？",
          options: [
            "調度 Grok 並啟用原生 X Search 工具，秒級檢索 X 全球即時情報與社群關鍵推文",
            "等待明天的紙本早報印出來再看",
            "叫模型憑半年前的歷史記憶猜測原因",
            "重新開機三次"
          ],
          correct: 0,
          why: "Grok 原生深度整合 X（Twitter）即時數據流，能在突發事件爆發的前幾十秒內迅速捕捉第一線消息與市場情緒，是掌握即時輿情的最強利器！"
        }
      },
      {
        id: "gk_colossus",
        title: "🎬 Colossus 算力巨獸：十萬卡 H100 訓練的極速迭代",
        category: "超算硬體與迭代",
        text: "xAI 在美國曼菲斯（Memphis）以短短 122 天創下人類工程奇蹟：打造了全球最大的 AI 超算叢集 **「Colossus（巨像）」**！\n\n**十萬卡 GPU 的狂暴威力**：\n• **100,000～200,000 張 NVIDIA H100/H200**：單一龐大算力叢集日夜並行，擁有全球最高的訓練與推論吞吐量。\n• **極速迭代節奏**：從 Grok 4.5、4.6 到 4.7，模型迭代週期壓縮至幾週之內，每一次升級推理能力都產生指數級飛躍。\n• **低延遲高吞吐**：在處理超長代碼生成或巨量上下文時，背後強大的分散式網路架構保證了極高打字速度，毫無卡頓！",
        tip: "🏎️ 算力奇蹟：Colossus 超算叢集是 Grok 極速推論與幾週一迭代背後的鋼鐵基石！",
        quiz: {
          q: "支撐 xAI 與 Grok 模型能夠實現極速推論吞吐與數週內版本快速迭代的核心硬體基礎設施是？",
          options: [
            "幾百台家用遊戲主機",
            "xAI 打造的 Memphis「Colossus（巨像）」十萬卡級 H100 超級計算叢集",
            "太陽能小算盤",
            "完全不依賴任何 GPU 算力"
          ],
          correct: 1,
          why: "Colossus 是全球規模最大的單一 AI 超算叢集之一，為 Grok 系列模型提供了前所未有的極限訓練吞吐量與低延遲推論支援！"
        }
      },
      {
        id: "gk_openai_compat",
        title: "🎬 OpenAI 相容協定：零磨合無縫平移的開發者架構",
        category: "開發者生態",
        text: "xAI 在設計 Grok API 時採取了最聰明的工程決策：**100% 擁抱 OpenAI 相容協定（OpenAI-compatible Format）**！\n\n**開發者零遷移成本**：\n• **代碼一行不改**：如果你原本的專案或 Agent 系統已經基於 OpenAI SDK 撰寫，只需將 `base_url` 改為 `https://api.x.ai/v1`，填入 `XAI_API_KEY`，系統立刻無縫切換到 Grok！\n• **全套 Tool Use 完美支援**：Function Calling、JSON Schema、System Prompt、Streaming 串流輸出全面無縫相容。\n• **雙引擎熱備份**：在企業級 Agent 系統中，可將 OpenAI 與 Grok 設為互為備援，當一邊遇上升級維護時，另一邊能零延遲接管流量！",
        tip: "🔄 雙擎自由：相同的介面規範，讓你隨時在 OpenAI 與 Grok 之間任意切換，永無供應商鎖定！",
        quiz: {
          q: "如果你現有的專案原本使用 OpenAI API 跑 Agent，想切換至 xAI Grok 模型，最標準的工程操作是？",
          options: [
            "把整個專案的代碼架構全數刪除重寫",
            "保留既有 Tool Calling 與訊息結構，僅需將 API Base URL 指向 xAI 端點並更換 API 金鑰即可無縫切換",
            "必須手動把程式碼編譯成組合語言",
            "重新購買十台伺服器"
          ],
          correct: 1,
          why: "xAI 採用 OpenAI-compatible 標準，這讓開發者能夠以極低的零成本在兩者之間無痛遷移或進行多模型動態備援！"
        }
      },
      {
        id: "gk_voice_agent",
        title: "🎬 Voice Agent Builder：端到端低延遲語音代理工廠",
        category: "語音代理前沿",
        text: "官方最新發布的 《Grok Voice Agent Builder》 解鎖了下一代人機語音互動範式：\n\n**告別傳統慢半拍的三段式語音**：\n• **傳統的痛點**：舊架構必須先經過 STT（語音轉文字）➡️ 送進 LLM 思考 ➡️ 再走 TTS（文字轉語音），中途延遲高達 2~3 秒，對話卡頓像在講對講機。\n• **端到端原生語音閉環**：Grok Voice Agent 實現極低延遲的語音輸入直達語音輸出，延遲壓縮至 300 毫秒內（接近人類自然交談反應）！\n• **自然打斷（Interruption Handling）**：支援隨時插話打斷，Agent 會自然停下來聽你說，並具備擬真語調與情緒起伏。",
        tip: "🎙️ 語音新標準：端到端低延遲＋支援隨時插話打斷，這才是真正像真人的語音代理！",
        quiz: {
          q: "現代原生語音 Agent（如 Grok Voice Agent）相比傳統「STT ➡️ LLM ➡️ TTS」三段式架構，最核心的體驗突破是？",
          options: [
            "把對話延遲大幅壓縮至幾百毫秒以內，實現近乎人類真人流暢度的即時雙向交流與自然插話打斷",
            "強制將所有聲音轉成機器電音",
            "每次講話前必須等待 10 秒鐘",
            "不能使用任何麥克風"
          ],
          correct: 0,
          why: "端到端語音架構消除了中途多次格式轉譯的累積延遲，能達到人類對話級別的即時反饋與自然的插話交互！"
        }
      },
      {
        id: "gk_imagine",
        title: "🎬 Grok Imagine 1.5：14 張參考圖的多模態影音一致性突破",
        category: "視覺與影像生成",
        text: "在官方展示的《Use 14 references in Grok Imagine videos》中，xAI 攻克了長久以來 AI 生成影片的最大難題：**角色與風格的一致性跳針**！\n\n**影視級多模態生成突破**：\n• **14 張參考圖輸入（14 Reference Frames）**：以往 AI 生產影片只能給一張圖，鏡頭一切換人物臉部就變形走樣；Grok Imagine 允許輸入多達 14 張不同角度、不同光影的角色與場景參考圖！\n• **分鏡連續性**：模型深度鎖定主角外貌、服裝細節與背景物理特徵，生成複雜運鏡鏡頭時，主角臉孔與光影完全保持同一人！\n• **文字即分鏡**：結合自然語言提示詞，精確控制運鏡軌跡（推鏡、拉遠、環繞），讓個人創作者也能具備好萊塢級導演能力。",
        tip: "🎬 視覺新高度：多圖參考鎖定特徵，徹底告別 AI 影片鏡頭跳針走樣的歷史痛點！",
        quiz: {
          q: "Grok Imagine 1.5 影片生成技術支援高達 14 張參考圖（References），解決了 AI 影視製作中哪項最棘手的問題？",
          options: [
            "讓影片的檔案大小自動縮小為 1KB",
            "解決跨鏡頭運鏡時角色外貌、服裝細節與場景風格跳針走樣的痛點，實現高度連續一致的視覺分鏡",
            "強制刪除影片的所有顏色",
            "讓影片只能播放 3 秒鐘"
          ],
          correct: 1,
          why: "支援多達 14 張參考圖能讓神經網路在多視角運鏡中深度鎖定目標特徵，保證鏡頭切換時角色與畫風的絕對一致性！"
        }
      }
    ]  },
  blender_3d: {
    id: "blender_3d",
    name: "🎨 3D 視覺・Claude + Blender MCP",
    badge: "實戰・3D 建模與空間運算",
    lessons: [
      {
        id: "b3d_spline_web",
        title: "🎬 網頁 3D 革命：Claude + Blender + Spline 打造炸裂級互動網站",
        category: "Web 3D 與互動體驗",
        text: "Kyle Skelly 親自示範現代前端與 3D 創作者的夢幻組合：**「自然語言 ➡️ Claude 生成 3D 結構 ➡️ Blender 拓撲與材質 ➡️ 導出 GLTF/GLB ➡️ 嵌入 Spline / Three.js」**！\n\n**顛覆傳統網頁設計的立體流水線**：\n• **零 3D 建模基礎起步**：以往建立 3D 網站需要精通 Maya 或 Blender 複雜的快捷鍵與節點圖；現在直接用 Claude 撰寫 Blender Python 腳本（`bpy`）或調用 MCP 工具，秒級生成高精度幾何體、材質節點與布光環境。\n• **GLB/GLTF 輕量化導出**：利用 Claude 自動最佳化網格多邊形面數（Decimate），壓縮貼圖與頂點數據，產出適合瀏覽器 60fps 順暢渲染的輕量化 3D 資產。\n• **Spline 雲端互動賦能**：將生成的 3D 模型匯入 Spline，設定滑鼠跟隨（Mouse tracking）、物理碰撞與滾動視差（Scroll-driven animation），一行 iframe 嵌入 Webflow、React 或純 HTML 網站！",
        tip: "🌐 空間升維：用 Claude 產結構、Blender 修網格、Spline 做互動，個人開發者也能在半小時內做出好萊塢級 3D 官方網站！",
        quiz: {
          q: "將 Claude 與 Blender 協同生成的 3D 資產應用於現代互動式商業網頁（如 Spline / Webflow）時，最核心的工程考量是什麼？",
          options: [
            "直接導出未壓縮的幾億面高模，讓瀏覽器卡死",
            "透過網格簡化（Decimate）降低面數並以標準 GLTF/GLB 格式封裝，確保模型在網頁端能維持 60fps 高幀率流暢互動",
            "把所有 3D 模型轉成純文字檔播放",
            "關閉所有網頁互動功能只放一張靜態截圖"
          ],
          correct: 1,
          why: "網頁端受限於使用者設備 GPU 與頻寬，必須透過合理的拓撲面數控制與標準輕量化格式（GLTF/GLB）才能在 Spline 等互動引擎中達到秒開且 60fps 的極致體驗！"
        }
      },
      {
        id: "b3d_mcp_realtime",
        title: "🎬 MCP 跨維度連線：Claude 桌面直連 Blender 即時生成與自動修復",
        category: "MCP 即時通訊架構",
        text: "3D 知名創作者 Max Novak 實測驚嘆的技術突破：**透過 MCP（Model Context Protocol）打通 Claude Desktop / Code 與本機 Blender 核心進程！**\n\n**告別複製貼上腳本的時代**：\n• **Socket/IPC 雙向即時通訊**：在 Blender 內安裝 MCP Addon 插件後，Blender 會啟動本機通訊監聽；Claude 透過 MCP Client 直接對 Blender 下達 Python 指令，你眼前視口（Viewport）裡的模型瞬間實時長出！\n• **即時程序化建模（Procedural Modeling）**：只要對 Claude 說「在場景中央生成一個具有未來感的霓虹幾何方塊，並為其加上倒角修改器（Bevel Modifier）與自發光材質」，Blender 視窗立刻零延遲即時更新。\n• **語意自癒閉環（Self-Healing Loop）**：當 Claude 寫出的 `bpy` API 語法因 Blender 版本差異拋出報錯時，MCP 會將錯誤日誌直接回傳給 Claude；Claude 秒級閱讀錯誤並自動修正語法重新發送，完全不需要人工手動除錯！",
        tip: "⚡ 實體手眼：MCP 讓大模型獲得了操縱本機 3D 引擎的即時雙手，遇錯自修更是無人值守的核心心法！",
        quiz: {
          q: "相比過去「在聊天框複製 Python 代碼 ➡️ 手動貼到 Blender 腳本編輯器」的傳統做法，MCP（Model Context Protocol）帶來的革命性優勢是什麼？",
          options: [
            "MCP 會讓 Blender 變成黑白畫面",
            "建立雙向即時通訊協議，Claude 可直接驅動 Blender 視口更新，並在遭遇 API 報錯時自動接收錯誤回報並原地自癒重試",
            "禁止使用者使用滑鼠操作 Blender",
            "強制所有 3D 渲染必須在雲端付費排隊"
          ],
          correct: 1,
          why: "MCP 打破了聊天框與本機軟體的隔離，賦予 Agent 直接呼叫工具並獲取即時執行回饋的閉環能力，實現自動執行與自動除錯修復！"
        }
      },
      {
        id: "b3d_free_ecosystem",
        title: "🎬 免費全家桶出擊：Claude + Blender 5.1 官方連接器與 PBR 聚合生態",
        category: "全套環境與多模態整合",
        text: "Stefan 3D AI 全網首發詳解最新官方生態與全套免費工作流：《Claude + Blender Is Insane Now — Full Free Setup》：\n\n**最新官方 MCP 整合與生態架構**：\n• **Blender 最新版本支援**：支援 Blender 4.3 至 5.x；插件安裝極簡化——將 official Blender MCP `.zip` 直接拖曳進 Blender 視窗即可完成安裝，並可開啟 Auto-start 常駐。\n• **Claude Code 與 Claude Desktop 雙軌支援**：透過 `claude_desktop_config.json` 或 Claude Code `/connectors` 介面，一鍵掛載本機 Blender MCP 伺服器。\n• **聚合外部 AI 3D 算力（AI Aggregator MCP）**：不僅能下指令建構基礎幾何體，還能將 fal.ai 或 Tripo/Meshy 等文字轉 3D / PBR 材質模型透過第二個 MCP 連接器接入，讓 Claude 統一調度：「先生成模型網格 ➡️ 調用 PBR 生成高品質法線與粗糙度貼圖 ➡️ 自動掛載至 Blender Principled BSDF 著色器」！",
        tip: "🧩 組合拳威力：Blender 負責場景結構與攝影機，外部 MCP 負責生 PBR 材質，Claude 擔任全能總指揮官！",
        quiz: {
          q: "在 Stefan 3D AI 示範的高階工作流中，如何解決「純代碼很難生成高品質寫實紋理（PBR Textures）」的限制？",
          options: [
            "放棄使用材質，所有物體都用純灰色顯示",
            "在 Claude 架構中同時掛載 Blender MCP 與 AI 圖像/3D 聚合 MCP（如 fal.ai/Patina），由 Claude 先生成結構再自動串接 PBR 貼圖與材質節點",
            "用小畫家一張張手繪像素貼圖",
            "直接把螢幕調亮 500%"
          ],
          correct: 1,
          why: "單一大模型不擅長直接繪製複雜位圖貼圖，透過 MCP 多工具協同，讓專業的擴散模型負責生成貼圖，Claude 負責在 Blender 節點樹中自動接線，達到完美平衡！"
        }
      },
      {
        id: "b3d_master_tutorial",
        title: "🎬 26 分鐘實戰大師課：從零打造產品級等距房間與棚拍照明（DesignCode 親授）",
        category: "商業級實戰演練",
        text: "全球頂尖 UI/UX 教育平台 DesignCode 創辦人 Meng To 傾囊相授 26 分鐘商業級完整實戰：《Create 3D with Claude AI with Blender MCP》：\n\n**商業級 3D 場景從 Prompt 到 Final Render 全流程**：\n• **語意化空間架構（Isometric Scene）**：如何引導 Claude 一步步建立結構層次——先定地基牆面，再添置家具（桌椅、螢幕、書架），最後微調細節倒角與比例。\n• **三點光源與電影感照明（Studio Lighting）**：不讓 Claude 放一顆死板的日光，而是明確指令建立「主光（Key Light）、輔助光（Fill Light）、邊緣輪廓光（Rim Light）」，搭配環境遮蔽（AO）與柔和陰影。\n• **高階材質與渲染調校**：提示詞要求精確設定粗糙度（Roughness）、金屬度（Metallic）、次表面散射（SSS）與毛玻璃透光材質（Glass Transmission），並指示切換 Cycles 渲染器與設定最佳相機焦段（如 85mm 長焦透視消除變形）。",
        tip: "🎥 導演思維：不要只下「給我一個房間」；拆解為「空間架構 ➡️ 家具層次 ➡️ 三點棚拍光 ➡️ 電影級材質」四步推進！",
        quiz: {
          q: "在引導 Claude AI 打造商業級 3D 渲染場景（如產品展示或等距小房間）時，若想要營造出立體感與高級質感的電影級光影，最推薦的光照調度結構是？",
          options: [
            "完全不打任何燈光，依賴預設的平光背景",
            "採用經典三點棚拍照明系統（主光 Key、輔光 Fill、輪廓光 Rim），並結合適當的相機焦段與景深控制",
            "在場景中隨意放置 100 顆超高亮度的白色點光源",
            "關閉渲染引擎的陰影計算"
          ],
          correct: 1,
          why: "經典三點照明（Key, Fill, Rim）能精確勾勒出物體的體積感、層次感與輪廓高光，是商業級 3D 產品展示與宣傳圖的核心燈光架構！"
        }
      }
    ]  },
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
  meta_muse: {
    id: "meta_muse",
    name: "🌐 個人代理・Meta Muse 霸榜全解析",
    badge: "代理・日常自動化與原生端側 Agent",
    lessons: [
      {
        id: "muse_lobster_compare",
        title: "🎬 上架十天衝榜首：Meta Muse 是「懶人版龍蝦」？解密端側原生 Agent 革命",
        category: "端側生態與架構對比",
        text: "可波 AI 白話突破 21.6 萬播放熱議：《上架十天擠下 ChatGPT 登榜首！Meta Muse 是「懶人版龍蝦」？跟 OpenClaw 差在哪》：\n\n**從聊天機器人跨入「幫你做事」的端側代理**：\n• **十天登頂 App Store 的秘密**：ChatGPT 還在聊天框裡等使用者手動複製文字，而 Meta Muse 一上架便打通手機與系統底層權限，成為能主動幫你跑腿的「個人行動秘書」。\n• **對比 OpenClaw（開源龍蝦）**：\n  - **OpenClaw**：極客工程師的最愛，自由度極高、能自己掛載私有 API，但需要懂寫代碼、配環境與伺服器部署。\n  - **Meta Muse（懶人普及版）**：零技術門檻！直接深度整合 WhatsApp、Messenger、Instagram 與手機原生通訊錄，任何人開箱即用。\n• **閉環行動力**：不只回答「這間餐廳評價如何」，而是直接自動發確認訊息給朋友、檢查日曆空檔、甚至撥打電話預約訂位！",
        tip: "🦞 降門檻之戰：技術極客玩開源龍蝦，大眾用戶選 Meta Muse；把複雜的權限授權包裝成一鍵點選，普及才是王道！",
        quiz: {
          q: "為什麼 Meta Muse 能在 App Store 迅速衝上榜首，並被稱為「大眾懶人版智能體」？",
          options: [
            "因為它禁止使用者發送任何文字",
            "它將原本需要極客手動部署的 Agent 操作，零門檻整合進大眾常用的通訊軟體與手機原生環境，實現一鍵自動跑腿與閉環行動",
            "因為它只能播放 10 秒鐘的鈴聲",
            "因為它是一隻真實的海洋生物"
          ],
          correct: 1,
          why: "降低使用者門檻（UX 打磨）與打通原生生態，讓強大的 Agent 能力從少數開發者的終端機直接普及到幾十億普通用戶手中！"
        }
      },
      {
        id: "muse_alex_hands_on",
        title: "🎬 實測封神：Alex Finn 詳解 Meta Muse 自動化生活與跨應用調度",
        category: "日常自動化與跨 App 聯動",
        text: "矽谷知名科技博主 Alex Finn 親身實測近 20 萬點閱：《Meta Muse is an INCREDIBLE AI agent》：\n\n**驚艷科技圈的跨應用自主工作流**：\n• **螢幕感知與 GUI 操作（Screen-Aware Action）**：Muse 不只是靠 API 接口；它具備對手機與電腦螢幕的多模態視覺理解能力，能像人類眼睛一樣看懂按鈕位置與表單欄位。\n• **跨平台任務接力**：一句口令「幫我找出信箱裡上週的水電費帳單，對比上個月有沒有超支，並把金額記錄到我的 Notion 表格」，Muse 自動開信箱 ➡️ 讀 PDF 附件 ➡️ 提取數字 ➡️ 打開表格寫入完成！\n• **人機授權安全邊界**：涉及高敏感操作（如刷卡結帳、發送正式合約）時，Muse 會主動暫停並跳出確認面板請你「點擊批准（Approval Checkpoint）」，絕不擅自越權！",
        tip: "👁️ 螢幕即介面：視覺理解看懂螢幕表單，跨 App 自主接力跑腿，關鍵付款嚴守人類審批防線！",
        quiz: {
          q: "在 Alex Finn 實測中，當 Meta Muse 在執行跨應用自動化（如幫你訂購機票或繳納帳單）遇到需要付費扣款時，系統的安全機制如何運作？",
          options: [
            "自動把銀行帳戶裡的錢全部轉走",
            "在執行關鍵支付或敏感操作時自動暫停，主動彈出確認卡片要求使用者手動點擊授權核准",
            "直接格式化手機硬碟",
            "假裝當機不理會"
          ],
          correct: 1,
          why: "安全審批防線（Approval Checkpoint / Human-in-the-loop）是自動化 Agent 的底線，確保便利的同時資金與合約絕對安全！"
        }
      },
      {
        id: "muse_harvard_biz",
        title: "🎬 商業核聚變：殺價、砍帳單、抽成經濟！Meta 股價大漲背後的 Muse 飛輪",
        category: "商業模式與交易生態",
        text: "哈佛姐夢遊矽谷突破 17.3 萬播放的深度商業剖析：《Meta AI 賭對了！Muse Agent 能幫你賺錢、殺價、砍帳單？股價大漲背後的秘密》：\n\n**從「廣告收費」到「交易抽成」的歷史性轉折**：\n• **為用戶省錢與談判（Autonomous Negotiation）**：Muse 能自主比價全網供應商；甚至能代表你發起客服對話，找出訂閱制服務的隱藏優惠碼、幫你自動取消續訂，或要求更換更便宜的資費方案！\n• **祖克柏的千億商業飛輪**：過去 Meta 100% 依賴在動態牆塞廣告；現在當 Muse 幫數十億用戶一鍵完成商品下單、機票預訂或餐廳叫車時，Meta 能直接從每筆交易中抽取極小比例的通道費（Transaction Fee）！\n• **硬體生態全面閉合**：結合 Ray-Ban Meta 智慧眼鏡與 Quest VR，Muse 隨身掛在耳邊，眼見即所問、口述即執行，成為真實世界的終極交互入口。",
        tip: "💰 商業本質：能幫用戶省錢殺價的 Agent 才能獲得至高黏著度；從廣告流量轉向交易抽成，開啟 AI 時代的萬億新飛輪！",
        quiz: {
          q: "根據哈佛姐的深度剖析，為什麼 Meta Muse 的推出被視為 Meta 歷史性的商業轉折點，引發資本市場巨大想像力？",
          options: [
            "因為 Meta 決定關閉所有社群網站",
            "它將 Meta 從傳統單純依賴動態牆廣告展示的模式，升維為透過 Agent 深入用戶日常消費與服務閉環、直接從真實交易中抽取服務費的龐大新商業飛輪",
            "因為 Meta 宣布不再使用任何伺服器",
            "因為 Muse 只能在每週五使用一次"
          ],
          correct: 1,
          why: "Agent 掌握了真實消費與行動的決策入口，從「注意力廣告」升級到「意圖與交易抽成」，是商業模式的降維打擊！"
        }
      }
    ]
  }
};

// 狀態管理
let state = {
  currentLevel: "primary",
  currentLessonIdx: 0,
  stars: {},
  answered: {},
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

    <div class="lesson-box">
      <div class="lesson-text">${formattedText}</div>
      <div class="lesson-tip">${lesson.tip}</div>
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
    </div>
  `;
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
      chip.textContent = `${lvl.name.split("・")[0]} (${lvl.lessons.length}課)`;
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
      <div class="item-stars">${state.stars[l.id] ? "⭐" : "⚪"}</div>
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
