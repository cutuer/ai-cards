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
  claude_pro: {
    id: "claude_pro",
    name: "🔥 Claude 進階・官方實戰特訓",
    badge: "高階・Anthropic 官方研究",
    lessons: [
      {
        id: "c0",
        title: "🎬 官方最新直擊：Claude Opus 5.5 主力駕馭術（Effort 節奏 ＆ 額度省 40%）",
        category: "官方影片特輯",
        text: "Anthropic 官方頻道最新釋出的旗艦教學：《Using Claude Opus 5.5 as your daily driver》。\n\n**官方公布的實測升級核心數據**：\n• **速度提升 30%、任務成本便宜 40%**：每 Token 降價 20%，且用更少步驟就能搞定。\n• **額度耐力增加 25%**：同為 5 小時速率限制，舊版 Opus 5 耗掉 6%，Opus 5.5 只消耗 4%！\n• **精煉匯報（Concise Reporting）**：Opus 5.5 一頁螢幕報告完畢（「改了什麼、跑了什麼測試、踩到什麼坑、唯一要問你什麼」），不再滿螢幕廢話。\n\n**官方 Effort（思考程度）配置心法**：\n1. **平日鎖定 medium effort**：日常 80% 的工作（單模組、局部除錯）用 medium 就夠快又省。\n2. **跨檔案重構才切 high effort**：當改動牽涉前後端、Serializer、連鎖調用鏈時，切到 high 讓它深度追蹤依賴並主動補測試；改完後**立刻切回 medium**！\n3. **唯讀子代理（Subagent）降配**：負責探索與搜檔案的 Subagent 設為 Sonnet 或 Haiku，不要全用頂級大腦浪費錢。",
        tip: "🎯 官方口訣：日常 medium 跑得飛快，跨檔案連鎖改動切 high 追蹤，做完切回 medium，唯讀 Subagent 降配 Sonnet！",
        quiz: {
          q: "根據 Anthropic 官方教學，當你準備進行一項涉及前後端、序列化器與多檔案調用鏈的「跨全專案連鎖改動」時，最佳的 Effort 節奏是？",
          options: [
            "一律用 minimum，並叫 AI 自己猜測其他檔案的位置",
            "臨時切換到 high effort 讓模型深度追蹤整條調用鏈並補齊測試，完成後立刻切回 medium 保持額度彈性",
            "把唯讀搜尋的 Subagent 也全部強制開到 high Opus",
            "把單元測試全刪掉"
          ],
          correct: 1,
          why: "Anthropic 官方指出：日常以 medium 為主力；遇到跨檔案/跨全專案的連鎖資料鏈時，升級至 high effort 進行深度追蹤與自動加測試，改完立刻降回 medium，是最省額度且最穩妥的操作節奏！"
        }
      },
      {
        id: "c1",
        title: "Anthropic 官方核心架構：Workflows vs Agents 如何抉擇？",
        category: "系統架構",
        text: "Anthropic 官方在《Building Effective Agents》研究中提出重要警示：**「不要把所有問題都丟給全自主 Agent！」**\n\n官方將 AI 系統分為兩大派系：\n1. **Workflows（工作流）**：由程式碼預先寫好固定路徑（如 Prompt Chaining 鏈式管線、Routing 條件路由），AI 依序在既定軌道上前進。優點是**極度穩定、可預測、不易翻車**。\n2. **Agents（自主代理）**：由大模型自己決定何時叫工具、叫幾次、什麼時候停下來。優點是**靈活性極高**，但代價是成本不可控、容易迷路。\n\n**官方黃金法則**：能用簡單工作流解決的，絕對不要上全自主 Agent；只有面對無法預測的除錯與探索時才放手讓 Agent 自主決策！",
        tip: "⚖️ 穩定第一：嚴謹的金融/資料處理走工作流（Workflow），開放式程式除錯走自主代理（Agent）。",
        quiz: {
          q: "專案需要每天固定從 10 份財報 PDF 裡精準抽取營收數字並寫入 Excel，根據 Anthropic 官方指引，最推薦採用哪種架構？",
          options: [
            "全自主 Agent（讓它自己看著辦，隨便摸索）",
            "固定路徑工作流（Workflow：Prompt Chaining 確定性步驟，穩定且低成本）",
            "同時派 20 個模型進行無規則群聊",
            "每次手動把 PDF 印出來用肉眼看"
          ],
          correct: 1,
          why: "固定格式的資料抽取具有明確的輸入輸出，使用確定的工作流（Prompt Chaining）比不可控的自主 Agent 更加穩定、準確且節省 Token！"
        }
      },
      {
        id: "c2",
        title: "Subagents 隔離體系：為什麼一個 Agent 幹到底必敗？",
        category: "多任務分流",
        text: "在 Claude Code 深度實戰中，官方最強調的高階技巧就是 **Subagents（子代理派工）**。\n\n如果叫「主 Agent」去跑一個龐大的測試，測試噴出 3,000 行落落長的除錯日誌，主 Agent 的 Context 會在幾秒內被垃圾日誌淹沒，導致它忘記最初的目的。\n\n**Subagent 的核心奧義是「上下文隔離（Context Isolation）」**：\n• 主 Agent（指揮官）派發專職任務給子 Agent。\n• 子 Agent 在獨立的乾淨沙盒中跑測試、翻日誌、嘗試修復。\n• 完成後，子 Agent 只將「3 句總結與修復補丁」回傳給主 Agent！\n這樣主 Agent 的記憶永遠清爽乾淨，任務跑再久也不會智商退化。",
        tip: "🛡️ 派工心法：髒活、累活、會吐大量日誌的苦工，全部派給隔離的 Subagent 去扛！",
        quiz: {
          q: "當專案需要對 100 個單元測試進行逐一排查、預期會產生海量終端日誌時，為了保護主對話窗口不被塞爆，最佳策略是？",
          options: [
            "直接在主窗口跑，讓日誌把所有記憶視窗填滿",
            "派遣 Subagent（子代理）在隔離的獨立上下文執行，僅回報失敗斷言與修復建議",
            "把單元測試檔案全部刪除假裝沒事",
            "將字體調小"
          ],
          correct: 1,
          why: "Subagent 能完美實現「上下文隔離」，髒亂的海量日誌留在子線程，主對話只接收高價值摘要，避免 Context 爆掉！"
        }
      },
      {
        id: "c3",
        title: "Context Hygiene（上下文衛生管理與微壓縮）",
        category: "記憶工程",
        text: "頂級工程師與菜鳥使用 Claude 的最大差距，在於 **Context Hygiene（上下文衛生）**。\n\n每一條存在 Context 裡的資訊，都是模型注意力（Attention）的負擔。當上下文充滿無效雜訊，模型就會「注意力發散（Attention Dilution）」，開始胡說八道。\n\n**保持上下文衛生的三招**：\n1. **微壓縮（Micro-compacting）**：檔案讀過、取得需要的關鍵函式後，不要留著整份萬行大檔，只保留摘要或精確行號指針。\n2. **CLAUDE.md 高密度約定**：把專案風格、測試命令寫在 CLAUDE.md。但切忌寫成幾萬字廢話長篇——每一行開機讀入都是扣錢，且過長會稀釋重點。\n3. **定期手動換檔**：完成一個大里程碑，主動 /compact 或開新 Session，絕不把舊歷史當垃圾場。",
        tip: "🧼 乾淨就是生產力：Context 不是硬碟，它是昂貴且稀缺的「短期工作檯」。",
        quiz: {
          q: "在維護專案根目錄的 CLAUDE.md 時，根據官方最佳實踐，以下哪種做法是正確的？",
          options: [
            "把過去半年寫過的所有聊天紀錄與日誌全都貼在 CLAUDE.md 裡面",
            "維持高密度、簡明扼要的指令與架構原則，重要細節採用索引指針，避免開機浪費龐大 Token",
            "故意寫很多生僻文言文考驗模型的中文能力",
            "完全不放任何規則，讓每次開機的 AI 猜測專案規範"
          ],
          correct: 1,
          why: "CLAUDE.md 是每次開機必讀的最高憲章，必須保持高密度與簡潔，將繁雜細節外包給衛星索引，才能兼顧準確性與 Token 成本！"
        }
      },
      {
        id: "c4",
        title: "Tool Calling 協定與安全防護欄（Permissions Sandbox）",
        category: "安全與工具",
        text: "大模型本質上是一段文字預測引擎，它並不能真正「按鍵盤」。\n當它要執行工具時，是生成符合 **JSON Schema** 規範的結構化指令，由客戶端底層代理（Client Harness）代為執行。\n\n這就涉及至關重要的**安全防線（Permissions Boundary）**：\n• **安全綠燈區（唯讀/驗證）**：查看檔案、搜尋關鍵字、跑測試、靜態代碼檢查。這些可以設定為自動通行（always-proceed），提升流暢度。\n• **危險紅燈區（破壞/資產）**：檔案刪除（rm）、強制作業（git push -f）、涉及金錢或帳單交易、改動資料庫結構。這些**必須保留人類介入確認（Human-in-the-loop）**！",
        tip: "🚦 信任但要設防：放行快速驗證工具，嚴控破壞性變更，這才是專業 Agent 架構。",
        quiz: {
          q: "在設定 Agent 的自動執行權限（Tool Permissions）時，哪一類操作絕對不應該設為無條件全自動放行？",
          options: [
            "讀取檔案內容（view_file）與專案搜尋（search_code）",
            "跑單元測試指令（npm test / pytest）",
            "未經確認的強制推送到正式生產環境（git push --force production）或清空資料庫",
            "查看當前目錄清單"
          ],
          correct: 2,
          why: "不可逆、具破壞性或影響生產環境的操作，必須強制保留 Human-in-the-loop 人類授權，防止 Agent 誤判造成災難！"
        }
      },
      {
        id: "c5",
        title: "Evaluator-Optimizer 自主修復閉環（Self-Healing Loop）",
        category: "自動除錯",
        text: "為什麼一般的「單次生成代碼」成功率只有 60%，而頂級 Agent 卻能高達 90% 以上？\n秘訣在於 **Evaluator-Optimizer 閉環機制**！\n\n**頂級 Agent 的四部曲**：\n1. **Observe（精準觀測）**：讀取錯誤 Traceback，精確鎖定出問題的檔名與行號。\n2. **Hypothesize（提出假說）**：找出根因（例如型態不符、缺少空值檢查）。\n3. **Minimal Patch（最小增量修復）**：用局部替換修改關鍵程式碼，**嚴禁整檔重寫**（避免覆蓋掉原有邏輯與註解）。\n4. **Verify（自我檢驗）**：主動重跑單元測試。測試綠燈才回報成功；若紅燈則吸收新錯誤進入下一輪修正！",
        tip: "🔄 閉環精神：沒有經過測試驗證的代碼，不叫完成；自己測過並亮綠燈，才算交付。",
        quiz: {
          q: "當 Agent 在跑單元測試時遇到 TypeError 報錯，符合專業工程規範的處理順序應該是？",
          options: [
            "不管報錯，直接把整個檔案清空從頭隨便寫一遍",
            "精讀報錯 Traceback 定位行號 ➡️ 分析根因 ➡️ 做出最小補丁 ➡️ 重跑測試驗證直到綠燈",
            "跟使用者謊稱測試已經全數通過",
            "直接關閉終端機逃避現實"
          ],
          correct: 1,
          why: "專業的自我修復閉環（Self-Healing Loop）講求最小破壞原則與嚴格的重跑驗證，直到測試完全通過才算交付！"
        }
      }
    ]
  },
  codex_master: {
    id: "codex_master",
    name: "🚀 Codex 架構・團隊工程級體系",
    badge: "大師・OpenAI 工程實踐",
    lessons: [
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
