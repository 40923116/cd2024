var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://40923116.github.io/cd2024/ \n 網誌:  https://40923116.github.io/cd2024/blog \n 簡報:  https://40923116.github.io/cd2024/reveal \n 倉儲:  https://github.com/40923116/cd2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n", 'tags': '', 'url': 'Brython.html'}, {'title': '自評分數:65', 'text': '\n', 'tags': '', 'url': '自評分數:65.html'}, {'title': '統整影片', 'text': 'https://youtu.be/HumKHWamrDs?si=ODdMebxoweB6RBEK \n https://www.youtube.com/watch?v=N798hn7KOqQ \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n', 'tags': '', 'url': '統整影片.html'}, {'title': '英翻中', 'text': '21-30 \n \xa0 \n 增材製造已成為超彈性生產的絕佳工具。這種持續改進的心態，尤其是在原型設計和迭代設計方面，是現代工業中非常重要的精益理念的標誌。 \n 如前一節所述，在本案例研究中，考慮了由虛構公司創建新產品及其生產過程。該產品由一個塑膠小型電腦機殼組成，由  3  個不同的零件組成（圖  13 ），預計將考慮增材製造和  CNC  銑削的組合來設計和製作原型，以實現塑膠射出成型生產。 \n \xa0 \n 4.1.1.  零件  A \n 零件  A （圖  14 ）是電腦機殼的核心結構。它預計將包含小型電腦正常運作所需的所有零件。為此，選擇了原材料  A  為丙烯腈 - 丁二烯 - 苯乙烯  (ABS) ，這是一種不透明的熱塑性聚合物和工程級塑膠。它通常用於生產電子零件，例如電話適配器、鍵盤按鍵和牆上插座塑膠護罩。 \n \xa0 \n 選擇這種材料的主要原因是其韌性、良好的尺寸穩定性（冷卻後抵抗尺寸變化的能力）、高抗衝擊性和表面硬度。最後，它也通常以  3D  列印線材的形式提供給擠出式  3D  印表機，這在原型製作過程中應該會非常有用。 \n 4.1.2.  零件  B  和  C \n 零件  B  和  C  是應該卡入到位並關閉系統的蓋子。這些是非常簡單的零件，需要一定程度的彈性，以便它們可以變形以確保無螺釘組裝。這兩個相同的零件將由熱塑性聚氨酯  (TPU)  製成，因為它具有彈性和出色的拉伸和撕裂強度。這種聚合物通常用於生產需要類似橡膠彈性的零件。 TPU  在高溫下表現良好，通常用於電動工具、電纜絕緣和體育用品。最後， TPU  也以  3D  印表機線材的形式提供，在模擬中將用於原型製作。 \n \xa0 \n 4.1.3.  模具 \n 理想情況下，所有模具都應由鋼製成，以延長模具的使用壽命和產品質量。話雖如此，為所有零件選擇的注塑塑膠對壓力的依賴性不高，而且其形狀也不那麼複雜，因此假設使用精密  CNC  加工製成的鋁模具足以生產所述零件。 \n 還假設所有模具都足夠簡單，可以使用  3D  列印進行原型製作。儘管並非總是如此，但它被確定足以代表此模擬。這些原型中使用的材料類型是使用  SLA 3D  印表機固化的高溫樹脂。此外，在考慮生產過程時，模具將被視為要開發的主要物理方面，因為它是直接影響生產的因素，也是可以在內部生產並像產品一樣進行跟踪的因素。 \n 4.2.  模擬期間分析的內容 \n 考慮到圖  9  中所示的圖表，以及第  3.1  節中描述的  PLM  和  MES  成功集成的主要方面，本實驗旨在就表  1  中以下相關問題提供評論。 \n \xa0 \n \n   章節： ODOO  軟體 \n \n 5.1. Odoo  軟體簡介 \n Odoo  是一款商業業務管理軟體，與開源社群有著緊密的聯繫。最初作為開源  ERP  軟體起步，因其價格合理、直觀的套裝軟體以及在整合和可擴展性方面的優勢而廣受好評。此後，隨著公司經歷快速增長，其商業模式轉變為包含企業付費版本和線上服務。 \n 如  2.2  節所述，現代  ERP  系統通常是模組化的，就  Odoo  而言，這種模組化特性尤其明顯，因為社群開發的模組以及公司開發的高度整合的模組提供了大量的擴展。這種可擴展性使得該軟體與  PLM+MES  集成主題如此相關，因為存在用於  PLM  的模組以及製造模組中明顯的  MES  功能。 \n 在本論文的範圍內，目標是將該軟體用於管理前面提到的虛構公司，並得出關於  PLM  和  MES  集成在該系統中已經存在的有效性的結論。 \n 5.1.1.  工作原理 \n 該軟體可以安裝在大多数  x86  電腦上，並且支持多種操作系統，包括  Windows  和所有主要的  Linux  發行版。 \n 理想情況下， Odoo  軟體安裝在一台連接到區域網路的電腦上，並啟動一個  SQL  資料庫，其中包含業務產生的所有必要信息和文件（圖  16 ）。該電腦本質上作為伺服器運行，網路中的其他電腦通過瀏覽器訪問。這台電腦可以是專用伺服器或正在使用的桌面電腦，但重要的是要記住，在需要軟體運行的整個時間內，它必須保持開啟和連接狀態。 \n \xa0 \n 另一個選擇是使用  Odoo SA  提供的託管服務（圖  17 ）。在這種情況下，系統將由他們託管，數據將存儲在他們的雲端。這非常適合許多小型企業，尤其是那些特別喜歡與網站相關的模組（用於構建和管理網站和電子商店）的企業。然而，它依賴於網絡，這在某些情況下可能會造成問題。 \n \xa0 \n 用戶主要通過圖形用戶界面  (GUI)  與系統交互，並根據每個用戶的需求使用它來訪問不同的可用模組。這意味著可以對不同的用戶應用限制，以便保持對業務活動不同方面的控制，例如，會計人員可以訪問會計模組、銷售模組和庫存模組，但他們將被限制訪問製造模組。這種限制確保只有適當的員工才能控制流程。 \n \xa0 \n 在所述  GUI  中，不同的模組顯示為應用程式圖標（圖  18 ），並且從一開始，公司就可以使用合理選擇的良好集成的應用程式，更不用說充滿社群製作模組的龐大應用商店了。 \n \xa0 \n 5.1.2. Odoo  對製造的看法： \n Odoo  認為任何東西的製造責任都分佈在不同的公司部門，每個部門都負責特定的文件類型，並使用特定的應用程式處理（表  2 ）。從  PLM  的角度來看，這是非常積極的，因為正如  (Saaksvuori and Immonen, 2008)  關於用戶權限管理所提到的  - PLM  系統用於定義信息訪問和維護權限。 PLM  系統定義了可以創建新信息或進行、檢查和接受更改的人員，以及那些只允許查看系統中信息或文檔的人員。用戶權限管理通常是  PLM  與其他系統集成時面臨的挑戰。 \n \xa0 \n 在  Odoo  看來，任何常規製造過程的第一步都是工程師通常使用  CAD  軟體設計產品。一旦完成，他們將創建物料清單  (BOM) ，這是一份生產產品所需的組件或材料清單。此時，重點轉移到製造過程本身。 \n 軟體對流程的看法集中在工藝路線、工作表和工作中心，這是由製造工程團隊完成的。工藝路線是產品生產所經過的一系列步驟。工作表是給製造操作員的說明，工作中心是進行生產的地方。 Odoo  認為這些是實施工程師計劃的要求。 \n 採購部門將負責請求報價  (RFQ)  或採購訂單  (PO) 。庫存操作員根據這些採購訂單處理收貨，通常使用  Odoo  中的條碼應用程式完成。正如本章第一節所述， Odoo  主要是一個  ERP  系統，在這裡可以注意到一些以  ERP  為中心的特性，例如對庫存和資源管理的關注。這將在以下部分進一步分析，但公平地指出，那些  RFQ  和  PO  被視為數據庫中的項目。 \n 只有當您擁有設計流程和所需的材料時， Odoo  才認為可以進行製造。然後，製造主管將創建製造訂單  (MO)  並通過工作訂單  (WO)  和工作中心管理製造操作員的計劃。然後，製造操作員可以按照工作訂單開始生產。產品生產後，它們會自動出現在庫存數據庫中，庫存部門會與包裝和交付一起管理。 \n Odoo  認為質量團隊負責分配控制 / 檢查點以及識別產品或生產中可能存在的問題。從  MES  的角度來看，這些質量控制檢查點非常有趣，因為它們代表了在生產發生時實時收集的寶貴生產數據，即可以在每件產品生產後分配一個尺寸檢查，機械師將填寫尺寸以跟踪隨著時間推移的質量。 \n 如果這是設計問題或有改進的可能性，則可以發出工程變更單  (ECO) 。這又回到了製造工程團隊手中，他們將專注於更新文檔和  BOM 。 ECO  是  Odoo  處理系統內跟踪變化的核心。這對於  PLM  來說至關重要，實際上是  Odoo  應用程式  PLM  的重點。該應用程式能夠執行到什麼程度是下一節的主題。 \n \n', 'tags': '', 'url': '英翻中.html'}, {'title': 'w12任務', 'text': '', 'tags': '', 'url': 'w12任務.html'}, {'title': '任務1', 'text': '/downloads/零件檔.zip \n \n 零件繪製影片 \n https://youtu.be/3dpD9yNZ7IA?si=Yksuqsz6ZDMOk11p \n \n 組合影片 \n https://youtu.be/LInhkkFguaM?si=5plGPS2wspyzWYST \n \n', 'tags': '', 'url': '任務1.html'}, {'title': '任務3', 'text': '操作影片 \n https://youtu.be/2slNuSwqu60?si=qUF24PNC6jquQmBE \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '任務3.html'}]};