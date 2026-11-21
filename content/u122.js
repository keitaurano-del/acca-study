(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 122,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M091',
      no: 91,
      title: 'ビッグデータの5つのV',
      goal: 'ビッグデータの5つの特徴（5つのV）を説明し、例がどのVに当たるか見分けられるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A7(a)'],
      slides: [
        {
          title: 'スマホの写真フォルダで考える',
          paras: ['スマホの写真フォルダには、何万枚もの写真がたまっている（量）。写真・動画・スクリーンショット・メモの画像と、形もばらばら（種類）。しかも毎日どんどん増える（速さ）。', '欲しい1枚をすぐ見つけられて、初めて役に立つ（価値）。ピンぼけや加工された写真が混ざると、記録として信用できない（正確さ）。この5つが、ビッグデータの5つのVにそのまま当てはまる。']
        },
        {
          title: 'ビッグデータ（big data）とは',
          paras: ['ビッグデータ（big data）は、量がとても多く、種類もさまざまで、次々に生まれるため、ふつうの表計算ソフトや従来のデータベースでは保存・処理しきれないデータの集まり。', 'レジの記録だけでなく、ネット注文、SNS の投稿、店内カメラの映像、機械のセンサーの数値なども含む。特別なしくみで分析して、判断に役立つ発見（insight）を取り出すために集める。']
        },
        {
          title: '5つのV',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="ビッグデータの5つのV。データの性質を表すvolume量、variety種類、velocity速さと、使う意味があるかを表すvalue価値、veracity正確さ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">ビッグデータの5つのV</text><text x="20" y="58" fill="var(--quiet)">データそのものの性質（ビッグの理由）</text><rect x="20" y="68" width="128" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="84" y="94" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Volume</text><text x="84" y="118" text-anchor="middle" fill="var(--ink)">量が多い</text><rect x="156" y="68" width="128" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="94" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Variety</text><text x="220" y="118" text-anchor="middle" fill="var(--ink)">種類が多い</text><rect x="292" y="68" width="128" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="356" y="94" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Velocity</text><text x="356" y="118" text-anchor="middle" fill="var(--ink)">速く生まれる</text><text x="20" y="160" fill="var(--quiet)">使う意味があるか</text><rect x="20" y="170" width="196" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="118" y="196" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Value</text><text x="118" y="220" text-anchor="middle" fill="var(--ink)">役に立つ知見を生む</text><rect x="224" y="170" width="196" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="196" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Veracity</text><text x="322" y="220" text-anchor="middle" fill="var(--ink)">正確で信頼できる</text><text x="220" y="264" text-anchor="middle" font-size="15" fill="var(--ink)">価値を生むには、正確さが前提</text></svg>`,
          caption: '上の3つはデータの性質、下の2つは使う意味があるかどうか。'
        },
        {
          title: '5つのVの意味',
          table: { caption: 'スーパーの例', head: ['V', '意味', '例'], rows: [['Volume（量）', 'データの量がとても多い', '全店のレジの記録が毎日大量にたまる'], ['Variety（多様性）', 'データの種類・形式がさまざま', 'レジの数字、口コミの文章、防犯カメラの映像'], ['Velocity（速度）', 'データが生まれる速さと、すぐ処理する必要', 'ネット注文やセンサーの数値がリアルタイムで届く'], ['Value（価値）', '分析して役に立つ知見を生むこと', '売れ筋を見て発注量を決め、廃棄を減らす'], ['Veracity（正確性）', 'データが正確で信頼できる度合い', '重複した会員登録や、やらせの口コミは信頼性を下げる']] }
        },
        {
          title: '会社の例で確かめる',
          paras: ['スーパーのグリーンマートは、会員カード、ネットスーパー、冷蔵庫の温度センサー、SNS の口コミからデータを集めている。'],
          list: ['会員カードの購入履歴が数年分ある → volume', '数字・文章・画像が混ざっている → variety', '温度センサーが1分ごとに数値を送ってくる → velocity', '同じ人の二重登録や入力ミスがある → veracity の問題', '分析して値引きや発注に使えたとき、初めて value が生まれる']
        },
        {
          title: 'なぜ？ 5つを2つに分けて考える',
          paras: ['最初の3つ（volume・variety・velocity）は、データそのものの性質。これがそろうと、ふつうの道具では扱えなくなる。だから「ビッグ」データと呼ぶ。', '残りの2つ（value・veracity）は、そのデータを使う意味があるかどうか。どれだけ集めても、役に立つ知見にならなければ保存の費用がかかるだけ。正確でなければ、間違った判断を早く大量にしてしまう。よい情報の条件の「正確さ」は、ビッグデータでも土台になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'variety（種類の多さ）と veracity（正確さ・信頼性）を取り違える。どちらも v で始まり形も似ているが、意味はまったく違う。value は「データを売ったときの値段」ではなく、分析して判断や利益に役立つこと。velocity は量の多さではなく、データが生まれ、処理される速さ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['5つのV: volume（量）・variety（種類）・velocity（速さ）・value（価値）・veracity（正確さ）', '量・種類・速さはデータの性質。価値・正確さは使う意味があるかどうか', 'ビッグデータは集めるだけでは意味がない。分析して価値を生む。その前提は正確さ']
        },
        {
          title: '英単語',
          words: [
            ['big data', 'ビッグ データ', 'ビッグデータ（量・種類・速さのため、ふつうの道具では扱えないデータ）'],
            ['volume', 'ボリューム', '量（データの量の多さ）'],
            ['variety', 'ヴァラエティ', '多様性（データの種類・形式の多さ）'],
            ['velocity', 'ヴェロシティ', '速度（データが生まれ、処理される速さ）'],
            ['value', 'ヴァリュー', '価値（分析して役に立つ知見を生むこと）'],
            ['veracity', 'ヴェラシティ', '正確性・信頼性'],
            ['insight', 'インサイト', 'データから分かる、判断に役立つ発見']
          ]
        }
      ],
      quiz: [
        { q: 'Which characteristic of big data refers to the accuracy and trustworthiness of the data?', choices: ['Variety', 'Veracity', 'Value', 'Velocity'], answer: 1, explain: 'veracity は正確さ・信頼性。variety は種類の多さで、つづりが似ているので取り違えやすい。value は役に立つ知見を生むこと、velocity は速さ。' },
        { q: 'A supermarket collects till transaction records, written customer reviews, photographs posted on social media and temperature readings from fridge sensors. Which characteristic of big data does this mainly illustrate?', choices: ['Volume', 'Velocity', 'Variety', 'Veracity'], answer: 2, explain: '数字・文章・写真・センサーの数値と、形式の違うデータが混ざっている。これは variety（多様性）。量の多さ（volume）や速さ（velocity）は、この問題文では強調されていない。' },
        { q: 'A ride-hailing app must analyse location data from thousands of drivers every few seconds in order to match them with passengers. Which characteristic of big data is most relevant?', choices: ['Velocity', 'Value', 'Veracity', 'Variety'], answer: 0, explain: '数秒ごとに生まれるデータを、すぐ処理しなければならない。これは velocity（速度）。データは位置情報の1種類なので variety ではない。' },
        { q: '次のうち、ビッグデータの5つのVに含まれないものはどれ？', choices: ['Volume（量）', 'Value（価値）', 'Visibility（見えやすさ）', 'Veracity（正確性）'], answer: 2, explain: '5つのVは volume・variety・velocity・value・veracity。visibility は入っていない。似た v の言葉に惑わされないように、5つをセットで覚える。' },
        { q: 'ある会社がデータを大量に集めたが、分析しても判断に使える発見が何も出てこない。5つのVのうち、何が欠けている？', choices: ['Value（価値）', 'Volume（量）', 'Velocity（速度）'], answer: 0, explain: 'データが役に立つ知見を生まないのは value がない状態。量は大量にあるので volume は欠けていない。速さ（velocity）は、この話とは関係がない。' }
      ]
    },
    {
      id: 'M092',
      no: 92,
      title: 'ビッグデータの3つの種類',
      goal: '構造化・半構造化・非構造化データの違いを説明し、例をどれかに分けられるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A7(b)'],
      slides: [
        {
          title: '部屋の片付けで考える',
          paras: ['片付けの仕方は3通りある。引き出しに仕切りがあって、決まった場所に決まった物が入る。ラベルを貼った箱に、中身はばらばらに入れる。段ボールに何でも放り込む。', '1つ目はすぐ探せる。3つ目は、中身を出して1つずつ見ないと何があるか分からない。データにも、この3つの段階がある。']
        },
        {
          title: '構造化データ（structured data）',
          paras: ['決まった項目と行に整理されたデータ。表計算ソフトや、行と列でできたデータベース（relational database）にそのまま入る。'],
          list: ['例: 売上の明細（日付・商品コード・数量・金額）、給与台帳、在庫の記録、会計の仕訳'],
          after: '項目が決まっているので、並べ替え・検索・合計がすぐできる。これまでの管理会計の数字は、ほとんどがこの形。'
        },
        {
          title: '非構造化データ（unstructured data）',
          paras: ['前もって決まった形がないデータ。表の行と列に入らない。'],
          list: ['例: 口コミや問い合わせの文章、写真・動画、通話の録音、SNS の投稿、紙の請求書をスキャンした画像'],
          after: '組織が持つデータの大部分はこの形と言われる。中身を使うには、文章を読み取る・画像を見分けるといった特別な分析の道具が必要になる。'
        },
        {
          title: '半構造化データ（semi-structured data）',
          paras: ['表の形にはなっていないが、タグや見出し（metadata、データについてのデータ）が付いていて、どこに何があるかが分かるデータ。構造化と非構造化の中間。'],
          list: ['メール: 宛先・送信者・日時・件名は決まった欄、本文は自由な文章', 'ネット注文の JSON・XML ファイル: 「商品名」「数量」などのタグで区切られている', 'ウェブサイトのアクセスログ: 日時・ページ・端末などが区切りや名前付きで記録される']
        },
        {
          title: '3つを並べる',
          svg: `<svg viewBox="0 0 440 244" role="img" aria-label="左から構造化、半構造化、非構造化。構造化は売上の明細や給与台帳、半構造化はメールやJSON、非構造化は口コミの文章や写真・動画。左ほど表にそのまま入り、右ほど形が決まっていない" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">整理の度合いで3つに分かれる</text><rect x="20" y="48" width="128" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="84" y="74" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">構造化</text><text x="84" y="95" text-anchor="middle" font-size="12.5" fill="var(--quiet)">structured</text><rect x="156" y="48" width="128" height="58" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="74" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">半構造化</text><text x="220" y="95" text-anchor="middle" font-size="12.5" fill="var(--quiet)">semi-structured</text><rect x="292" y="48" width="128" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="356" y="74" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">非構造化</text><text x="356" y="95" text-anchor="middle" font-size="12.5" fill="var(--quiet)">unstructured</text><text x="84" y="132" text-anchor="middle" fill="var(--ink)">売上の明細</text><text x="84" y="154" text-anchor="middle" fill="var(--ink)">給与台帳</text><text x="84" y="176" text-anchor="middle" fill="var(--ink)">会計の仕訳</text><text x="220" y="132" text-anchor="middle" fill="var(--ink)">メール</text><text x="220" y="154" text-anchor="middle" fill="var(--ink)">JSON・XML</text><text x="220" y="176" text-anchor="middle" fill="var(--ink)">アクセスログ</text><text x="356" y="132" text-anchor="middle" fill="var(--ink)">口コミの文章</text><text x="356" y="154" text-anchor="middle" fill="var(--ink)">写真・動画</text><text x="356" y="176" text-anchor="middle" fill="var(--ink)">通話の録音</text><path d="M40 200 H400" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M400 194 L412 200 L400 206 Z" fill="var(--ink)"/><text x="20" y="228" fill="var(--ink)">表にそのまま入る</text><text x="420" y="228" text-anchor="end" fill="var(--ink)">形が決まっていない</text></svg>`,
          caption: '右へ行くほど扱いにくいが、数字だけでは分からない情報を多く含む。'
        },
        {
          title: '例題: どの種類？',
          example: {
            problem: 'グリーンマートが持つ次のデータは、3つのどれに当たる？ (1) レジの売上明細 (2) アプリに書かれた口コミの文章 (3) ネット注文の JSON ファイル (4) 店内の防犯カメラの映像 (5) 会計システムの仕訳',
            steps: ['(1) 日付・商品・数量・金額の決まった項目がある → 構造化', '(2) 自由に書かれた文章 → 非構造化', '(3) 表ではないが、タグで項目が分かる → 半構造化', '(4) 映像には決まった項目がない → 非構造化', '(5) 日付・勘定科目・金額の決まった項目がある → 構造化'],
            answer: '構造化は (1)(5)、半構造化は (3)、非構造化は (2)(4)'
          }
        },
        {
          title: 'なぜ？ 種類を分ける理由',
          paras: ['種類によって、保存の仕方・分析の道具・かかる費用が変わるから。構造化データは、今の会計システムですぐ集計できる。', '非構造化データは扱いにくいが、「なぜお客様が不満なのか」のように、数字だけでは分からない理由を含んでいることが多い。ビッグデータの価値の多くは、ここから生まれる。5つのVの variety（多様性）は、この3種類が混ざっていることを指す。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'デジタルのデータ＝構造化データ、ではない。スキャンした請求書の画像や写真は、デジタルでも中に決まった項目がないので非構造化。また、半構造化は「データの半分だけ整理されている」という意味ではない。表にはなっていないが、タグや見出しで中身が分かる、という意味。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['構造化: 決まった項目と行で、表やデータベースにそのまま入る（売上明細・仕訳）', '半構造化: 表ではないが、タグ・見出しで中身が分かる（メール・JSON・XML・ログ）', '非構造化: 決まった形がない（文章・画像・動画・音声）。扱いにくいが情報が豊か']
        },
        {
          title: '英単語',
          words: [
            ['structured data', '', '構造化データ'],
            ['semi-structured data', '', '半構造化データ'],
            ['unstructured data', '', '非構造化データ'],
            ['relational database', 'リレーショナル データベース', '行と列の表でデータを管理するデータベース'],
            ['metadata', 'メタデータ', 'データについてのデータ（日時・作成者・位置など）'],
            ['tag', 'タグ', 'データの中身を示す目印']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an example of unstructured data?', choices: ['A spreadsheet of employee payroll details', 'Recordings of customer service telephone calls', 'A file of online orders in XML format with tagged fields', 'A database of sales invoices with fixed fields'], answer: 1, explain: '通話の録音には決まった項目がないので非構造化。給与の表と請求書のデータベースは構造化。タグ付きの XML は半構造化。' },
        { q: 'Data which does not fit into a fixed table of rows and columns, but which contains tags or markers that identify its different elements, is best described as:', choices: ['Structured data', 'Unstructured data', 'Semi-structured data'], answer: 2, explain: '表には入らないが、タグで中身が分かるのが半構造化データ。行と列に入るなら構造化、タグもなく形が決まっていなければ非構造化。' },
        { q: '紙の請求書をスキャンして保存した画像ファイルは、どの種類？', choices: ['構造化データ（デジタルで保存されているから）', '非構造化データ（中に決まった項目がないから）', '半構造化データ（ファイル名が付いているから）'], answer: 1, explain: 'デジタルでも、画像の中には日付・金額などの決まった項目（欄）がない。だから非構造化。デジタル＝構造化ではない。ファイル名があるだけでは、中身がタグで区切られているわけではない。' },
        { q: '構造化データの説明として正しいものは？', choices: ['タグで区切られているが、表の形にはなっていない', '組織のデータの中で最も扱いにくく、特別な道具が必要', '画像や音声のように、決まった形がない', '決まった項目と行に整理され、並べ替えや合計がすぐできる'], answer: 3, explain: '構造化データは決まった項目と行に整理されている。1つ目は半構造化、2つ目と3つ目は非構造化の説明。' },
        { q: 'Which type of big data generally requires the most specialised tools, such as text or image analysis, before it can be used for decision making?', choices: ['Unstructured data', 'Structured data', 'Semi-structured data'], answer: 0, explain: '非構造化データは決まった形がないので、文章や画像を読み取る特別な道具が必要。構造化データはそのまま集計でき、半構造化データはタグを手がかりに取り出せる。' }
      ]
    },
    {
      id: 'M093',
      no: 93,
      title: 'ビッグデータとデータ分析の使い道',
      goal: '組織がビッグデータとデータ分析をどう使うかを、限界も含めて説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A7(c)'],
      slides: [
        {
          title: 'おすすめ動画はなぜ当たる？',
          paras: ['動画アプリは、見た動画・途中でやめた場所・検索した言葉を記録している。似た好みの人がよく見る動画と照らし合わせて、次のおすすめを出す。', '地図アプリの渋滞予測も同じ。たくさんの車の位置データと過去の渋滞から、これから混む道を予測する。どちらも、ビッグデータを分析して判断に使っている。']
        },
        {
          title: 'データ分析（data analytics）の4段階',
          paras: ['データ分析（data analytics）は、データを調べて傾向・パターン・関係を見つけ、判断に役立てること。問いの深さで4段階に分けられる。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="データ分析の4段階。記述的分析は何が起きたか、診断的分析はなぜ起きたか、予測的分析はこれから何が起きるか、処方的分析はどうすべきか" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">データ分析の4つの段階</text><rect x="20" y="48" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="70" font-size="15" font-weight="600" fill="var(--ink)">Descriptive</text><text x="36" y="91" fill="var(--quiet)">記述的分析</text><text x="210" y="81" font-size="15" fill="var(--ink)">何が起きた？</text><rect x="20" y="110" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="132" font-size="15" font-weight="600" fill="var(--ink)">Diagnostic</text><text x="36" y="153" fill="var(--quiet)">診断的分析</text><text x="210" y="143" font-size="15" fill="var(--ink)">なぜ起きた？</text><rect x="20" y="172" width="400" height="54" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="194" font-size="15" font-weight="600" fill="var(--ink)">Predictive</text><text x="36" y="215" fill="var(--quiet)">予測的分析</text><text x="210" y="205" font-size="15" fill="var(--ink)">これから何が起きる？</text><rect x="20" y="234" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="256" font-size="15" font-weight="600" fill="var(--ink)">Prescriptive</text><text x="36" y="277" fill="var(--quiet)">処方的分析</text><text x="210" y="267" font-size="15" fill="var(--ink)">どうすべきか？</text></svg>`,
          caption: '下に行くほど難しく、判断に直結する。前に学んだ記述的分析・推測的分析（descriptive / inferential analysis）は、データの要約か、標本から全体を推し量るかの分け方で、この4段階とは別の分類。'
        },
        {
          title: '組織での主な使い道',
          table: { caption: 'ビッグデータとデータ分析の使い道', head: ['使い道', '例'], rows: [['顧客を知る（customer insight）', '購入履歴から好みを見つけ、一人ひとりにクーポンやおすすめを出す'], ['価格を決める（pricing）', '需要や競合の価格に合わせて値段を変える（dynamic pricing）'], ['需要を予測する（forecasting）', '天気・曜日・過去の売上から販売数を予測し、発注と在庫を決める'], ['業務を効率化する（operations）', '機械のセンサーで故障を予測して先に修理する（predictive maintenance）。配送ルートを最適化する'], ['リスクを減らす（risk management）', 'いつもと違う取引を見つけて不正を防ぐ（fraud detection）'], ['業績を管理する（performance management）', 'リアルタイムの指標（KPI）を画面（dashboard）で見て、早く手を打つ']] }
        },
        {
          title: '管理会計の3つの仕事とのつながり',
          list: ['計画（planning）: より正確な需要予測をもとに予算を作れる', '統制（control）: 実績をリアルタイムで見られるので、予算とのずれ（差異）に早く気づける', '意思決定（decision making）: 価格・品ぞろえ・新製品を、勘ではなく根拠となるデータで決められる'],
          after: '月末に締めてから報告する従来の管理会計に、ほぼリアルタイムで、社外のデータ（天気・SNS など）も使える分析が加わる。'
        },
        {
          title: '例題: パンの売れ残りを減らす',
          example: {
            problem: 'グリーンマートは毎朝パンを焼くが、売れ残りの廃棄が多い。手元には、会員カードの購入履歴、過去3年の日別の売上、天気予報、SNS の口コミがある。データ分析をどう使える？',
            steps: ['記述的: 曜日・天気ごとに、パンが何個売れたかを集計する', '診断的: 雨の日に売れ残りが多い理由を調べる（来店客が減るから）', '予測的: 明日の天気と曜日から、売れる個数を予測する', '処方的: 予測をもとに、焼く個数と夕方に値引きする時刻を決める', 'さらに口コミの文章から、人気の商品と不満の多い商品を見つけ、品ぞろえを見直す'],
            answer: '需要予測で焼く数を決めて廃棄（原価）を減らし、売れ筋を増やして売上を伸ばす'
          }
        },
        {
          title: 'なぜ？ 今、ビッグデータが使われる理由',
          paras: ['データを保存・処理する費用が大きく下がり、クラウド（cloud computing）で大量のデータを扱えるようになった。スマホやセンサーから、データも自然に集まる。', 'うまく使えば、競合より早く、根拠のある判断ができる（競争優位、competitive advantage）。ただし、集めただけでは何も生まれない。分析して判断に使ったときに、初めて価値（value）になる。']
        },
        {
          title: '限界と注意点',
          list: ['個人情報の保護（data protection）: 英国・EU の GDPR のような法律を守る必要がある', '情報セキュリティ: 漏えいやサイバー攻撃の危険が大きくなる', '費用: システムと、分析ができる人材（data scientist）にお金がかかる', 'データの質: 不正確なデータ（veracity の問題）からは、間違った結論が出る', '相関は因果ではない: 一緒に動くからといって、片方が原因とは限らない']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'ビッグデータが人の判断の代わりになる、と考える。分析の結果は判断の材料で、最後に決めるのは経営者。また、データは多いほど良いとは限らない。分析されないデータや不正確なデータは、保存の費用と漏えいの危険を増やすだけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['データ分析の4段階: 記述的（何が）→ 診断的（なぜ）→ 予測的（これから）→ 処方的（どうする）', '主な使い道: 顧客を知る・価格・需要予測・業務の効率化・リスク（不正の発見）・業績管理', '限界: 個人情報保護とセキュリティ・費用と人材・データの質・相関と因果の取り違え']
        },
        {
          title: '英単語',
          words: [
            ['data analytics', 'データ アナリティクス', 'データ分析'],
            ['descriptive analytics', '', '記述的分析（何が起きたか）'],
            ['diagnostic analytics', '', '診断的分析（なぜ起きたか）'],
            ['predictive analytics', '', '予測的分析（これから何が起きるか）'],
            ['prescriptive analytics', '', '処方的分析（どうすべきか）'],
            ['predictive maintenance', '', '予知保全（故障を予測して先に修理する）'],
            ['dynamic pricing', 'ダイナミック プライシング', '需要や競合に合わせて価格を変えること'],
            ['data protection', '', '個人データの保護']
          ]
        }
      ],
      quiz: [
        { q: 'Which type of data analytics attempts to answer the question "What is likely to happen in the future?"', choices: ['Descriptive analytics', 'Diagnostic analytics', 'Predictive analytics', 'Prescriptive analytics'], answer: 2, explain: 'これから何が起きるかを予測するのは predictive（予測的）。descriptive は何が起きたか、diagnostic はなぜ起きたか、prescriptive はどうすべきか。' },
        { q: 'A manufacturer fits sensors to its machines and analyses the readings to identify which machines are likely to break down, so that repairs can be made before a breakdown occurs. This is an example of:', choices: ['Dynamic pricing', 'Predictive maintenance', 'Fraud detection', 'Customer segmentation'], answer: 1, explain: 'センサーのデータで故障を予測し、壊れる前に修理するのは予知保全（predictive maintenance）。業務の効率化の使い道。' },
        { q: 'Which of the following is a LIMITATION of using big data in an organisation?', choices: ['It allows forecasts to be updated more frequently', 'It can identify unusual transactions which may indicate fraud', 'It allows marketing to be targeted at individual customers', 'Compliance with data protection laws can be costly and difficult'], answer: 3, explain: '個人情報保護の法律を守るための費用と手間は、ビッグデータの限界（注意点）。ほかの3つは使い道（利点）。' },
        { q: 'リアルタイムの売上データで、予算とのずれに月末を待たずに気づけるようになった。管理会計の3つの仕事のうち、主にどれに役立っている？', choices: ['計画（planning）', '統制（control）', '意思決定（decision making）'], answer: 1, explain: '実績を予算と比べ、ずれに気づいて手を打つのは統制（control）。予算を作るのが計画、価格や品ぞろえなどを選ぶのが意思決定。' },
        { q: 'データを分析したら、アイスの販売数と水難事故の件数が同じように増減していた。正しい考え方は？', choices: ['アイスが事故の原因なので、アイスの販売を減らすべき', 'データが十分に多いので、因果関係があると判断してよい', '2つには相関があるが、暑さという別の原因で一緒に動いている可能性がある'], answer: 2, explain: '相関は因果ではない。夏の暑さが、アイスの販売と水遊び（事故）の両方を増やしていると考えられる。データが多くても、相関から因果は決められない。' }
      ]
    },
    {
      id: 'M094',
      no: 94,
      title: '総合演習: データ分析と予測',
      goal: '平均・ばらつき・確率・回帰・相関・時系列の計算を、1つの場面で続けて使えるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(c)', 'K2:A3(d)', 'K2:A3(e)', 'K2:A5(b)', 'K2:A5(d)', 'K2:A6(d)'],
      slides: [
        {
          title: 'この演習の進め方',
          paras: ['天気予報は、過去の平均・ばらつき・確率・季節のパターンを組み合わせて作る。会社の予測も同じ。ここでは第6部の道具を、本番の MTQ（1つの場面に小問が続く問題）のように、サンドイッチ店の数字で続けて使う。'],
          table: { caption: '問われることと道具', head: ['問われること', '使う道具'], rows: [['真ん中の値', '平均・中央値・最頻値'], ['ばらつき', '標準偏差・変動係数'], ['起きる見込み', '単純確率・同時確率・期待値'], ['原価・売上の予測', '回帰式 y ＝ a ＋ bx'], ['予測の当てはまり', '相関係数 r・決定係数 r²'], ['季節のある売上の予測', 'トレンド ＋ 季節変動、またはトレンド × 季節指数']] }
        },
        {
          title: '例題1: 平均・中央値・最頻値',
          example: {
            problem: 'サンドイッチ店の8日間の注文数は、20, 40, 40, 40, 50, 50, 70, 90 件。平均（mean）・中央値（median）・最頻値（mode）は？',
            steps: ['平均: 合計 20 ＋ 40 × 3 ＋ 50 × 2 ＋ 70 ＋ 90 ＝ 400。400 ÷ 8日 ＝ 50件', '中央値: 小さい順に並べる（すでに並んでいる）。8個は偶数なので、4番目の 40 と5番目の 50 の平均 ＝ 45件', '最頻値: いちばん多く出てくる値 ＝ 40件（3回）'],
            answer: '平均 50件、中央値 45件、最頻値 40件'
          }
        },
        {
          title: '例題2: 標準偏差と変動係数',
          example: {
            problem: '同じ8日間（平均 50件）の標準偏差（standard deviation）と変動係数（coefficient of variation）は？',
            steps: ['各日の、平均との差: −30, −10, −10, −10, 0, 0, ＋20, ＋40', '差を2乗する: 900, 100, 100, 100, 0, 0, 400, 1,600 → 合計 3,200', '分散（variance）: 3,200 ÷ 8 ＝ 400', '標準偏差: √400 ＝ 20件', '変動係数: 標準偏差 20 ÷ 平均 50 × 100 ＝ 40%', '比べる: 駅前店は平均 200件・標準偏差 40件 → 変動係数 40 ÷ 200 × 100 ＝ 20%。標準偏差は駅前店のほうが大きいが、平均に対するばらつきは小さく、注文が安定している'],
            answer: '標準偏差 20件、変動係数 40%（駅前店は 20% で、より安定）'
          }
        },
        {
          title: '例題3: 同時確率と期待値',
          example: {
            problem: '店のトースター A と B の故障は、互いに関係しない（独立）。1日に故障する確率は A が 0.1、B が 0.2。(1) 両方が故障する確率 (2) どちらも故障しない確率は？ また、1日の注文数が 40件（確率 0.3）、50件（0.5）、70件（0.2）のとき、注文数の期待値（expected value）は？',
            steps: ['(1) 同時確率（joint probability）: 独立なのでかけ算。0.1 × 0.2 ＝ 0.02', '(2) A が故障しない確率 1 − 0.1 ＝ 0.9、B は 1 − 0.2 ＝ 0.8。0.9 × 0.8 ＝ 0.72', '少なくとも1台が故障する確率は 1 − 0.72 ＝ 0.28', '期待値: 40 × 0.3 ＋ 50 × 0.5 ＋ 70 × 0.2 ＝ 12 ＋ 25 ＋ 14 ＝ 51件'],
            answer: '両方が故障 0.02、どちらも故障しない 0.72、注文数の期待値 51件'
          }
        },
        {
          title: '例題4: 回帰式で原価を予測する',
          example: {
            problem: '5か月の生産量 x（百個）と総原価 y（千ドル）について、n ＝ 5、Σx ＝ 15、Σy ＝ 30、Σxy ＝ 102、Σx² ＝ 55。回帰式 y ＝ a ＋ bx を求め、450個作る月の総原価を予測する。データの生産量は 100〜500個。',
            steps: ['b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²) ＝ (5 × 102 − 15 × 30) ÷ (5 × 55 − 15²) ＝ (510 − 450) ÷ (275 − 225) ＝ 60 ÷ 50 ＝ 1.2', 'a ＝ Σy ÷ n − b × Σx ÷ n ＝ 30 ÷ 5 − 1.2 × 15 ÷ 5 ＝ 6 − 3.6 ＝ 2.4', '回帰式: y ＝ 2.4 ＋ 1.2x。固定費 $2,400、変動費は百個で $1,200 ＝ 1個 $12', '450個は x ＝ 4.5（百個の単位）。y ＝ 2.4 ＋ 1.2 × 4.5 ＝ 2.4 ＋ 5.4 ＝ 7.8'],
            answer: '総原価の予測 $7,800（7.8 千ドル）'
          }
        },
        {
          title: '例題5: 相関係数と決定係数',
          example: {
            problem: '例題4のデータで、さらに Σy² ＝ 196。相関係数（correlation coefficient）r と決定係数（coefficient of determination）r² を求め、意味を説明する。',
            steps: ['分子: nΣxy − ΣxΣy ＝ 60（例題4と同じ）', 'nΣx² − (Σx)² ＝ 50（例題4と同じ）。nΣy² − (Σy)² ＝ 5 × 196 − 30² ＝ 980 − 900 ＝ 80', 'r ＝ 60 ÷ √(50 × 80) ＝ 60 ÷ √4,000 ＝ 60 ÷ 63.25 ≒ 0.95 → 強い正の相関', 'r² ＝ 0.95² ≒ 0.90（正確には 60² ÷ 4,000 ＝ 3,600 ÷ 4,000 ＝ 0.90）', '総原価の動きの 90% は、生産量の動きで説明できる。残り 10% はほかの要因'],
            answer: 'r ≒ 0.95、r² ＝ 0.90。回帰式による予測はかなり信頼できる'
          }
        },
        {
          title: '例題6: トレンドと季節変動で売上を予測する',
          example: {
            problem: '四半期の売上（千ドル）のトレンドは T ＝ 500 ＋ 20t（t は四半期の番号。1年目の第1四半期 Q1 が t ＝ 1）。季節変動は、加法モデルなら Q1 −30・Q2 ＋10・Q3 ＋50・Q4 −30、乗法モデルなら季節指数が Q1 0.90・Q2 1.00・Q3 1.20・Q4 0.90。4年目の Q1 と Q3 の売上を予測する。',
            steps: ['4年目の Q1 は t ＝ 3年 × 4 ＋ 1 ＝ 13。トレンド: 500 ＋ 20 × 13 ＝ 760', '加法モデル（additive model）: 760 ＋ (−30) ＝ 730', '乗法モデル（multiplicative model）: 760 × 0.90 ＝ 684', '4年目の Q3 は t ＝ 15。トレンド: 500 ＋ 20 × 15 ＝ 800', '加法: 800 ＋ 50 ＝ 850。乗法: 800 × 1.20 ＝ 960'],
            answer: 'Q1 は加法 $730,000・乗法 $684,000、Q3 は加法 $850,000・乗法 $960,000'
          }
        },
        {
          title: 'なぜ？ 予測の数字をうのみにしない',
          paras: ['回帰も時系列も、「過去のパターンがこれからも続く」と仮定している。r² ＝ 0.90 でも、残りの 10% はほかの要因で動く。季節のパターンも、景気や競合の動きで変わる。', '集めたデータの範囲（100〜500個）の中で予測する内挿（interpolation）は比較的信頼できる。範囲の外（例: 900個）を予測する外挿（extrapolation）は、固定費が増えるなどして関係が崩れるおそれがある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '(1) x の単位をそろえない。x が「百個」なら 450個は 4.5 と入れる（450 を入れると 542.4 千ドルになってしまう）。(2) 中央値を並べずに取る。個数が偶数なら真ん中2つの平均。(3) 乗法の季節指数 1.20 は「× 1.2」。「＋ 1.2」や「＋ 20」ではない。(4) 独立した2つが両方起きる確率を、足し算で出す。正しくはかけ算。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['回帰: b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)、a ＝ Σy ÷ n − b × Σx ÷ n。x の単位をそろえて予測する', 'r は −1〜＋1 で関係の強さと向き。r² は y の動きのうち x で説明できる割合', '予測 ＝ トレンド ＋ 季節変動（加法）、または トレンド × 季節指数（乗法）']
        },
        {
          title: '英単語',
          words: [
            ['mean / median / mode', 'ミーン／メディアン／モード', '平均／中央値／最頻値'],
            ['standard deviation', 'スタンダード ディヴィエーション', '標準偏差'],
            ['coefficient of variation', '', '変動係数（標準偏差 ÷ 平均）'],
            ['joint probability', '', '同時確率（2つが両方起きる確率）'],
            ['expected value', '', '期待値（値 × 確率 の合計）'],
            ['correlation coefficient', '', '相関係数 r'],
            ['coefficient of determination', '', '決定係数 r²'],
            ['interpolation', 'インターポレーション', '内挿（データの範囲内の予測）'],
            ['extrapolation', 'エクストラポレーション', '外挿（データの範囲外の予測）'],
            ['seasonal variation', '', '季節変動'],
            ['additive / multiplicative model', '', '加法モデル／乗法モデル']
          ]
        }
      ],
      quiz: [
        { q: 'The delivery times of 20 orders are grouped as follows: 0 to under 10 minutes: 4 orders; 10 to under 20 minutes: 10 orders; 20 to under 30 minutes: 6 orders. Using mid-points, what is the mean delivery time in minutes?', type: 'number', answer: 16, unit: '分', explain: '各階級の真ん中の値（mid-point）5・15・25 を使う。Σfx ＝ 5 × 4 ＋ 15 × 10 ＋ 25 × 6 ＝ 20 ＋ 150 ＋ 150 ＝ 320。合計の件数 20 で割って 320 ÷ 20 ＝ 16分。階級の数 3 で割らない。' },
        { q: '前の問題の配達時間の標準偏差は 7分（平均 16分）。変動係数は何%？（小数第2位まで）', type: 'number', answer: 43.75, unit: '%', explain: '変動係数 ＝ 標準偏差 ÷ 平均 × 100 ＝ 7 ÷ 16 × 100 ＝ 43.75%。標準偏差 7 の確かめ: Σf(x − 16)² ＝ 4 × 121 ＋ 10 × 1 ＋ 6 × 81 ＝ 980。980 ÷ 20 ＝ 49、√49 ＝ 7。' },
        { q: 'Two machines operate independently. The probability that machine X breaks down in a week is 0.15 and the probability that machine Y breaks down in the same week is 0.40. What is the probability that both machines break down in the same week?', type: 'number', answer: 0.06, unit: '', explain: '独立した2つが両方起きる確率（同時確率）はかけ算。0.15 × 0.40 ＝ 0.06。足し算した 0.55 は間違い。' },
        { q: 'A company has 200 employees. Department A has 50 men and 30 women. Department B has 70 men and 50 women. If one employee is chosen at random, what is the probability that the employee is a woman who works in Department B?', choices: ['0.625', '0.417', '0.24', '0.25'], answer: 3, explain: '表のマス「女性 × 部門B」は 50人。全体 200人から選ぶので 50 ÷ 200 ＝ 0.25。0.625 は分母を女性 80人にした答え（女性の中から選ぶ場合）。0.417 は分母を部門B の 120人にした答え。0.24 は P(女性) 0.4 × P(部門B) 0.6 と掛けた答えで、独立かどうか分からない表には使えない。表があるときはマスから直接数える。' },
        { q: 'A regression line for total cost has been calculated as y = 2,400 + 12x, where y is total cost ($) and x is the number of units produced. The data used ranged from 100 to 500 units. Which of the following statements is correct?', choices: ['The forecast total cost for 450 units is $5,400', 'The forecast total cost for 450 units is $7,800, and this is reasonably reliable because 450 units is within the range of the data', 'The forecast total cost for 900 units is $13,200, and this is as reliable as a forecast within the range of the data', 'The fixed cost per unit is $2,400'], answer: 1, explain: '450個: $2,400 ＋ $12 × 450 ＝ $7,800。データの範囲内なので比較的信頼できる。$5,400 は固定費 $2,400 を足し忘れた額。900個の $13,200 は計算は合っているが、範囲外の外挿なので信頼性は下がる。$2,400 は固定費の総額で、1個あたりではない。' },
        { q: 'A company has found the following relationship between monthly advertising expenditure (x, in $000) and monthly sales revenue (y, in $000): y = 50 + 4x. What is the forecast sales revenue, in $, for a month in which advertising expenditure is $20,000?', type: 'number', answer: 130000, unit: '$', explain: '売上の予測も原価と同じく、回帰式に x を入れる。x は千ドル単位なので $20,000 は x ＝ 20。y ＝ 50 ＋ 4 × 20 ＝ 130（千ドル）＝ $130,000。x に 20,000 を入れると 80,050 千ドルになってしまう。答えも千ドル単位なので、最後に × 1,000 する。' },
        { q: 'The correlation coefficient between advertising spend and sales revenue has been calculated as 0.8. What percentage of the variation in sales revenue is explained by the variation in advertising spend?', choices: ['80%', '89%', '64%', '20%'], answer: 2, explain: '決定係数 r² ＝ 0.8 × 0.8 ＝ 0.64 ＝ 64%。80% は r をそのまま使った間違い。89% は √0.8 を計算した間違い。20% は 1 − 0.8 で、意味のない数字。' },
        { q: '四半期の売上のトレンドが T ＝ 300 ＋ 15t（千ドル）。第4四半期の季節指数（乗法モデル）は 1.10。t ＝ 20 が第4四半期のとき、売上の予測は何千ドル？', type: 'number', answer: 660, unit: '千ドル', explain: 'トレンド: 300 ＋ 15 × 20 ＝ 600。乗法なので 600 × 1.10 ＝ 660千ドル。加法のように 600 ＋ 1.10 としない。' }
      ]
    }
  ],
  cards: [
    { id: 'M091-1', lesson: 'M091', q: 'ビッグデータの5つのVは？', a: 'volume・variety・velocity・value・veracity' },
    { id: 'M091-2', lesson: 'M091', q: 'volume とは？', a: 'データの量がとても多いこと' },
    { id: 'M091-3', lesson: 'M091', q: 'variety とは？', a: 'データの種類・形式がさまざまなこと（数字・文章・画像・動画など）' },
    { id: 'M091-4', lesson: 'M091', q: 'velocity とは？', a: 'データが生まれる速さと、すばやく処理する必要があること' },
    { id: 'M091-5', lesson: 'M091', q: 'value と veracity の違いは？', a: 'value は分析して役に立つこと。veracity はデータが正確で信頼できること' },
    { id: 'M091-6', lesson: 'M091', q: 'なぜ veracity が大事？', a: '不正確なデータで分析すると、間違った判断を早く大量にしてしまうから' },
    { id: 'M092-1', lesson: 'M092', q: '構造化データとは？ 例は？', a: '決まった項目と行で整理されたデータ。売上明細・給与台帳・仕訳' },
    { id: 'M092-2', lesson: 'M092', q: '半構造化データとは？ 例は？', a: '表ではないが、タグ・見出しで中身が分かるデータ。メール・JSON・XML・ログ' },
    { id: 'M092-3', lesson: 'M092', q: '非構造化データとは？ 例は？', a: '決まった形がないデータ。文章・写真・動画・通話の録音' },
    { id: 'M092-4', lesson: 'M092', q: 'スキャンした請求書の画像はどの種類？', a: '非構造化データ（デジタルでも決まった項目がない）' },
    { id: 'M092-5', lesson: 'M092', q: 'なぜ非構造化データが大事？', a: '数字だけでは分からない理由（顧客の不満など）を含むことが多いから' },
    { id: 'M093-1', lesson: 'M093', q: 'データ分析の4段階は？', a: '記述的（何が）・診断的（なぜ）・予測的（これから）・処方的（どうする）' },
    { id: 'M093-2', lesson: 'M093', q: 'predictive maintenance とは？', a: 'センサーのデータで故障を予測し、壊れる前に修理すること' },
    { id: 'M093-3', lesson: 'M093', q: 'dynamic pricing とは？', a: '需要や競合の状況に合わせて価格を変えること' },
    { id: 'M093-4', lesson: 'M093', q: 'ビッグデータが統制（control）に役立つ理由は？', a: '実績をリアルタイムで見られ、予算との差異に早く気づけるから' },
    { id: 'M093-5', lesson: 'M093', q: 'ビッグデータの主な限界は？', a: '個人情報保護とセキュリティ、費用と人材、データの質、相関と因果の取り違え' },
    { id: 'M094-1', lesson: 'M094', q: '個数が偶数のデータの中央値は？', a: '小さい順に並べ、真ん中の2つの平均' },
    { id: 'M094-2', lesson: 'M094', q: '変動係数の式と使い道は？', a: '標準偏差 ÷ 平均 × 100%。平均の違うものどうしのばらつきを比べる' },
    { id: 'M094-3', lesson: 'M094', q: '独立した2つが両方起きる確率は？', a: 'それぞれの確率のかけ算（例: 0.1 × 0.2 ＝ 0.02）' },
    { id: 'M094-4', lesson: 'M094', q: '回帰の b と a の求め方は？', a: 'b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)、a ＝ Σy ÷ n − b × Σx ÷ n' },
    { id: 'M094-5', lesson: 'M094', q: 'r ＝ 0.8 のとき r² は？ その意味は？', a: '0.64。y の動きの64%を x の動きで説明できる' },
    { id: 'M094-6', lesson: 'M094', q: '加法モデルと乗法モデルの予測の式は？', a: '加法: トレンド ＋ 季節変動。乗法: トレンド × 季節指数' },
    { id: 'M094-7', lesson: 'M094', q: 'なぜ外挿（extrapolation）は危ない？', a: 'データの範囲外では、固定費が変わるなど関係が崩れるおそれがあるから' }
  ]
});
