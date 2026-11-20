(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 2,
  part: 2,
  partTitle: '複式簿記のしくみ',
  lessons: [
    {
      id: 'L09',
      no: 9,
      title: '取引の種類: 売上・仕入・入金・支払、現金と掛け',
      goal: 'お店の取引を「売上・仕入・入金・支払」に分け、現金取引か掛け取引かを見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['C1(f)', 'K1:B1(b)'],
      slides: [
        {
          title: 'まず生活で考える',
          paras: ['コンビニでパンを買うと、受け取るのと払うのが同時に終わる。', 'スマホ代はちがう。今月使った分の料金は、来月の引き落としで払う。「使った（買った）」と「払った」が別の日に起きる。', 'お店の取引も、この2つのパターンに分かれる。']
        },
        {
          title: 'お店の取引は4種類',
          list: ['売上（sales）: お客さんに商品を売る', '仕入（purchases）: 売るための商品や材料を買う', '入金（receipts）: お金を受け取る', '支払（payments）: お金を払う'],
          after: '売上と仕入は「商品の動き」、入金と支払は「お金の動き」。お店の毎日の取引のほとんどは、この4つのどれかになる。'
        },
        {
          title: '現金取引と掛け取引',
          paras: ['現金取引（cash transaction）: 売る・買うと同時にお金を払う。カード払いや振込でも、その場で払いが済めば現金取引として扱う。', '掛け取引（credit transaction）: 先に商品を渡し、お金は後で払う。会社どうしの取引はほとんどこれ。'],
          list: ['掛けで売った相手から、あとでもらうお金 → 売掛金（trade receivables）', '掛けで買った相手に、あとで払うお金 → 買掛金（trade payables）']
        },
        {
          title: '掛けは2回に分かれる',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="現金取引は売ると同時に受け取り、掛け取引は後で受け取る" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">現金と掛けの違い</text><text x="20" y="70" font-size="15" font-weight="600" fill="var(--ink)">現金取引（cash）</text><line x1="40" y1="104" x2="400" y2="104" stroke="var(--edge)" stroke-width="1.25"/><circle cx="80" cy="104" r="7" fill="var(--ink)"/><text x="80" y="134" text-anchor="middle" fill="var(--ink)">売る＝受け取る</text><text x="400" y="134" text-anchor="end" fill="var(--quiet)">同じ日に終わる</text><text x="20" y="190" font-size="15" font-weight="600" fill="var(--ink)">掛け取引（credit）</text><line x1="40" y1="224" x2="400" y2="224" stroke="var(--edge)" stroke-width="1.25"/><line x1="80" y1="224" x2="340" y2="224" stroke="var(--accent)" stroke-width="3"/><circle cx="80" cy="224" r="7" fill="var(--ink)"/><circle cx="340" cy="224" r="7" fill="var(--ink)"/><text x="210" y="212" text-anchor="middle" fill="var(--ink)">30日後など</text><text x="80" y="254" text-anchor="middle" font-weight="600" fill="var(--ink)">売る</text><text x="80" y="276" text-anchor="middle" fill="var(--quiet)">売掛金が残る</text><text x="340" y="254" text-anchor="middle" font-weight="600" fill="var(--ink)">受け取る</text><text x="340" y="276" text-anchor="middle" fill="var(--quiet)">売掛金が消える</text></svg>`,
          caption: '掛け取引は「売る」と「受け取る」の2つの取引に分かれる。その間、売掛金が残る。'
        },
        {
          title: 'たこ焼き屋で分けてみる',
          table: {
            caption: 'できごとを4種類に分ける',
            head: ['できごと', '種類', '現金/掛け'],
            rows: [
              ['屋台でたこ焼き $5 を売り、その場で受け取る', '売上', '現金'],
              ['会社のイベントに $300 分を納品。代金は来月', '売上', '掛け'],
              ['小麦粉 $80 を仕入れ、月末に払う約束', '仕入', '掛け'],
              ['月末に小麦粉代 $80 を払う', '支払', '－'],
              ['翌月、イベント代 $300 を受け取る', '入金', '－']
            ]
          }
        },
        {
          title: '返品も取引になる',
          paras: ['売った商品が、お客さんから戻ってくることがある。これを売上戻り（sales returns）という。売上を減らす取引になる。', '逆に、仕入れた商品を仕入先に返すのが仕入戻し（purchase returns）。仕入を減らす取引になる。', 'どちらも、そのあと「お金を返す」か「払う予定の額を減らす」ことにつながる。']
        },
        {
          title: 'なぜ？ 売上と入金を分ける理由',
          paras: ['売上は「商品を渡して稼いだ日」に起きる。お金が入る日ではない。', 'もし入金の日に売上を書くと、4月にイベント用にたくさん作って納品した店が、4月は「売上ゼロ」に見えてしまう。4月の本当の頑張りが分からない。', '売上と入金を分けておくと、「まだ払ってもらっていないお客さん」が誰で、いくらなのかも分かる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '掛けで売った代金を受け取った日に、もう一度「売上」にしてしまう。売上は売った日に記録済み。受け取った日は「入金」だけ。' },
          paras: ['もう1つは、たこ焼き器や家賃の支払いを「仕入（purchases）」にしてしまうこと。仕入は、売るための商品・材料を買うことだけ。長く使う設備を買うのは別の取引で、あとの部で学ぶ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取引は4種類: 売上・仕入・入金・支払', '現金取引は同時に払う。掛け取引は物が先、お金が後', '掛けで売った代金を受け取るのは「入金」。売上ではない']
        },
        {
          title: '英単語',
          words: [
            ['sales', 'セールス', '売上'],
            ['purchases', 'パーチェシズ', '仕入（売るための商品を買う）'],
            ['receipts', 'レシーツ', '入金'],
            ['payments', 'ペイメンツ', '支払'],
            ['cash transaction', '', '現金取引'],
            ['credit transaction', '', '掛け取引'],
            ['sales returns', '', '売上戻り（お客さんからの返品）'],
            ['purchase returns', '', '仕入戻し（仕入先への返品）'],
            ['trade receivables', '', '売掛金'],
            ['trade payables', '', '買掛金']
          ]
        }
      ],
      quiz: [
        { q: '先月掛けで売った代金 $300 を、今日受け取った。今日の取引の種類は？', choices: ['売上', '入金', '仕入', '支払'], answer: 1, explain: '売上は先月、売った日に記録済み。今日はお金を受け取っただけなので入金（receipt）。売上にすると二重に数えてしまう。' },
        { q: 'A business buys goods for resale and agrees to pay the supplier in 30 days. How is this transaction described?', choices: ['Cash purchase', 'Credit purchase', 'Credit sale', 'Payment'], answer: 1, explain: '売るための商品を買う＝仕入（purchase）。払うのは30日後なので掛け（credit）。お金はまだ動いていないので payment ではない。' },
        { q: 'たこ焼き器を $300 で買った。これは「仕入（purchases）」？', choices: ['はい。お店が買ったものは全部、仕入', 'いいえ。仕入は売るための商品・材料を買うことだけ'], answer: 1, explain: 'たこ焼き器は売るためでなく、何年も使うための設備。仕入には入らない。' },
        { q: 'Which of the following is a credit transaction?', choices: ['A customer pays $20 by card and takes the goods away', 'Goods are sold for $500 and the invoice is payable in 30 days', 'Rent of $400 is paid by bank transfer', 'Cash of $1,000 is received for an invoice issued last month'], answer: 1, explain: '商品が先、お金が30日後なので掛け取引。カード払いはその場で払いが済むので現金取引。家賃の支払いと先月分の入金は、お金の動き（payment、receipt）。' },
        { q: 'お客さんが、買った商品を返品してきた。売り手から見たこの取引は？', choices: ['仕入戻し（purchase returns）', '売上戻り（sales returns）', '支払（payments）', '仕入（purchases）'], answer: 1, explain: '売ったものが戻ってくるので売上戻り。仕入戻しは、自分が仕入先に返すとき。' }
      ]
    },
    {
      id: 'L10',
      no: 10,
      title: '証憑①: 見積書・受注書・発注書・受領書・出荷書',
      goal: '注文から納品までに行き来する5つの書類について、誰が作り、何が書いてあり、何のためにあるかを言えるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['C1(b)', 'K1:B1(c)'],
      slides: [
        {
          title: 'ネット通販で考える',
          paras: ['大きな家具をネットで買うときの流れを思い出してみる。'],
          numbered: ['見積もりをもらう（いくら？）', '注文する', 'お店から「ご注文を承りました」と届く', '伝票と一緒に家具が届く', '中身を確かめて、受け取りのサインをする'],
          after: '会社どうしの取引も同じ流れで進む。それぞれの段階に、名前のついた書類がある。'
        },
        {
          title: '書類の流れ',
          svg: `<svg viewBox="0 0 440 410" role="img" aria-label="注文から納品までの5つの書類の流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">注文から納品までの書類</text><text x="110" y="62" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">買い手</text><text x="110" y="80" text-anchor="middle" font-size="12.5" fill="var(--quiet)">たこ焼き屋</text><text x="330" y="62" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売り手</text><text x="330" y="80" text-anchor="middle" font-size="12.5" fill="var(--quiet)">粉屋</text><line x1="110" y1="90" x2="110" y2="346" stroke="var(--edge)" stroke-width="1.25"/><line x1="330" y1="90" x2="330" y2="224" stroke="var(--edge)" stroke-width="1.25"/><line x1="330" y1="276" x2="330" y2="396" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="118" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">① 見積書</text><line x1="330" y1="128" x2="120" y2="128" stroke="var(--ink)" stroke-width="1.5"/><path d="M110 128L121 122L121 134z" fill="var(--ink)"/><text x="220" y="146" text-anchor="middle" font-size="12.5" fill="var(--quiet)">quotation</text><text x="220" y="178" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">② 発注書</text><line x1="110" y1="188" x2="320" y2="188" stroke="var(--ink)" stroke-width="1.5"/><path d="M330 188L319 182L319 194z" fill="var(--ink)"/><text x="220" y="206" text-anchor="middle" font-size="12.5" fill="var(--quiet)">purchase order</text><text x="250" y="255" text-anchor="end" fill="var(--quiet)">社内で作る</text><rect x="262" y="226" width="136" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="246" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">③ 受注書</text><text x="330" y="264" text-anchor="middle" font-size="12.5" fill="var(--quiet)">sales order</text><text x="220" y="302" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">④ 出荷書（商品と一緒）</text><line x1="330" y1="312" x2="120" y2="312" stroke="var(--accent)" stroke-width="2.5"/><path d="M110 312L121 306L121 318z" fill="var(--accent)"/><text x="220" y="330" text-anchor="middle" font-size="12.5" fill="var(--quiet)">goods despatched note</text><rect x="32" y="348" width="156" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="368" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">⑤ 受領書</text><text x="110" y="386" text-anchor="middle" font-size="12.5" fill="var(--quiet)">goods received note</text><text x="200" y="377" fill="var(--quiet)">社内で作る</text></svg>`,
          caption: '①②④は相手に渡る書類。③の受注書と⑤の受領書は、主に自分の会社の中で使う。'
        },
        {
          title: '① 見積書 と ② 発注書',
          list: ['見積書（quotation）: 売り手が、注文の前に出す価格の提示。商品、数量、単価、有効期限、支払条件が書いてある。買い手は何社かの見積書を比べて仕入先を選ぶ。', '発注書（purchase order）: 買い手が売り手に出す正式な注文。発注番号、商品、数量、約束した価格、納品日と場所、承認した人のサインが入る。買い手は控えを残す。'],
          note: { kind: 'tip', text: 'K1（2027年7月〜）のシラバスでは、見積書は一覧から外れる。FA では出るので覚えておく。' }
        },
        {
          title: '③ 受注書 と ④ 出荷書',
          list: ['受注書（sales order）: 注文を受けた売り手が作る記録。お客さん、商品、数量、価格、納品日をまとめ、倉庫や配送への指示に使う。控えをお客さんに送り、注文の内容を確認してもらうこともある。', '出荷書（goods despatched note）: 売り手が商品と一緒に送る書類。商品と数量が書いてあり、ふつう価格は書かない。お客さんが受け取りのサインをし、売り手は「届けた証拠」として保管する。delivery note とも呼ぶ。']
        },
        {
          title: '⑤ 受領書',
          paras: ['受領書（goods received note、GRN）は、商品が届いたときに買い手が社内で作る書類。実際に届いた商品、数量、状態（壊れていないか）を記録する。', '発注書と比べて「頼んだ物が、頼んだ数だけ届いたか」を確かめる。あとで届く請求書が正しいかを確かめるのにも使う。']
        },
        {
          title: '5つの書類のまとめ',
          table: {
            caption: '誰が作って、何のために使うか',
            head: ['書類', '誰が作る → 誰へ', '目的'],
            rows: [
              ['見積書 quotation', '売り手 → 買い手', '注文の前に価格を伝える'],
              ['発注書 purchase order', '買い手 → 売り手', '正式に注文する'],
              ['受注書 sales order', '売り手（社内）', '注文の内容を確かめ、出荷を指示する'],
              ['出荷書 goods despatched note', '売り手 → 買い手', '商品と一緒に送り、納品を証明する'],
              ['受領書 goods received note', '買い手（社内）', '届いた物の数と状態を記録する']
            ]
          }
        },
        {
          title: 'まだ帳簿には書かない',
          paras: ['この5つの書類の段階では、まだ帳簿に売上や仕入の金額を記録しない。', '見積もりや注文は「これから売り買いする」という約束。出荷書と受領書は、数量を確かめるためのもの。お金の記録のきっかけになるのは、次のレッスンで学ぶ請求書（invoice）から。']
        },
        {
          title: 'なぜ？ 書類がこんなに多い理由',
          paras: ['理由は「証拠」と「確認」。口約束だけだと、「そんな値段は言っていない」「10箱頼んだのに8箱しか来ない」といったもめごとが起きる。', '買い手は、お金を払う前に3つの書類を突き合わせる。'],
          list: ['発注書: 何をいくつ、いくらで頼んだか', '受領書: 実際に何がいくつ届いたか', '請求書: いくら払うように言われているか'],
          after: '3つが一致して初めて払う。頼んでいない物や、届いていない物にお金を払うミスを防げる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '発注書と受注書は、同じ注文を反対側から見た書類。買い手が書いて送るのが発注書（purchase order）、売り手が受けて作るのが受注書（sales order）。' },
          paras: ['出荷書と受領書も同じペア。売り手が商品と一緒に出すのが出荷書（despatched＝送り出した）、買い手が届いたときに作るのが受領書（received＝受け取った）。英語の動詞で見分ける。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['流れは 見積書 → 発注書 → 受注書 → 出荷書 → 受領書', '発注書と受領書は買い手、見積書・受注書・出荷書は売り手が作る', 'この段階では、まだ帳簿に金額を記録しない']
        },
        {
          title: '英単語',
          words: [
            ['quotation', 'クオテーション', '見積書'],
            ['purchase order', '', '発注書（買い手が出す注文）'],
            ['sales order', '', '受注書（売り手の社内記録）'],
            ['goods despatched note', '', '出荷書（delivery note とも）'],
            ['goods received note (GRN)', '', '受領書（買い手の社内記録）'],
            ['supplier', 'サプライヤー', '仕入先、売り手'],
            ['customer', 'カスタマー', 'お客さん、買い手']
          ]
        }
      ],
      quiz: [
        { q: 'Which document does a customer send to a supplier to order goods?', choices: ['Sales order', 'Purchase order', 'Goods received note', 'Quotation'], answer: 1, explain: '買い手（customer）が出す正式な注文は発注書（purchase order）。sales order は、注文を受けた売り手が作る記録で、同じ注文を反対側から見たもの。' },
        { q: '商品が届いたとき、届いた数と状態を記録するために買い手が社内で作る書類は？', choices: ['出荷書（goods despatched note）', '受領書（goods received note）', '発注書（purchase order）', '見積書（quotation）'], answer: 1, explain: 'received＝受け取った。買い手が作る社内の書類。出荷書は売り手が商品と一緒に送るもの。' },
        { q: 'Which document is sent with the goods to the customer and signed as proof of delivery?', choices: ['Goods despatched note', 'Goods received note', 'Purchase order', 'Quotation'], answer: 0, explain: '売り手が商品と一緒に送るのは出荷書（goods despatched note）。お客さんのサインが納品の証拠になる。GRN は買い手が社内で作る別の書類。' },
        { q: '仕入先から見積書（quotation）を受け取った。この時点で、帳簿に仕入を記録する？', choices: ['記録する', 'まだ記録しない'], answer: 1, explain: '見積書は価格の提示だけで、まだ何も買っていない。記録のきっかけは請求書。' },
        { q: 'お金を払う前に、発注書・受領書・請求書の3つを突き合わせるのはなぜ？', choices: ['頼んだ物が頼んだ数だけ届き、正しい金額で請求されたかを確かめるため', '売上税の額を計算するため', '売上を早く記録するため', '見積書を作り直すため'], answer: 0, explain: '頼んだ（発注書）・届いた（受領書）・請求された（請求書）が一致すれば、払いすぎや払い間違いを防げる。' },
        { q: 'Which document is issued by a supplier before an order is placed, stating the price of the goods?', choices: ['Quotation', 'Sales order', 'Purchase order', 'Goods despatched note'], answer: 0, explain: '注文の前に売り手が出す価格の提示は見積書（quotation）。sales order は注文を受けた後に作る。' }
      ]
    },
    {
      id: 'L11',
      no: 11,
      title: '証憑②: 請求書・取引先明細書・貸方票・借方票・送金通知・領収書',
      goal: '請求から支払いまでの6つの書類の中身と目的を言い、どの書類が帳簿記録のきっかけになるかを見分けられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['C1(b)', 'K1:B1(c)'],
      slides: [
        {
          title: 'カードの利用明細で考える',
          paras: ['カードで買い物をすると、買うたびに金額が記録される。返品すれば、その分が取り消される。', '月に1回、「利用明細」が届く。その月の買い物、返品、払った額、そして残りがいくらかが一覧になっている。', '会社どうしの取引にも、これと同じ役割の書類がある。']
        },
        {
          title: '請求から支払いまでの流れ',
          svg: `<svg viewBox="0 0 440 432" role="img" aria-label="請求から支払いまでの6つの書類の流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">請求から支払いまでの書類</text><text x="110" y="62" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">買い手</text><text x="110" y="80" text-anchor="middle" font-size="12.5" fill="var(--quiet)">たこ焼き屋</text><text x="330" y="62" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売り手</text><text x="330" y="80" text-anchor="middle" font-size="12.5" fill="var(--quiet)">粉屋</text><line x1="110" y1="90" x2="110" y2="420" stroke="var(--edge)" stroke-width="1.25"/><line x1="330" y1="90" x2="330" y2="420" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="112" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">① 請求書</text><line x1="330" y1="122" x2="120" y2="122" stroke="var(--ink)" stroke-width="1.5"/><path d="M110 122L121 116L121 128z" fill="var(--ink)"/><text x="220" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">invoice</text><text x="220" y="168" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">② 借方票（返品のとき）</text><line x1="110" y1="178" x2="320" y2="178" stroke="var(--ink)" stroke-width="1.5"/><path d="M330 178L319 172L319 184z" fill="var(--ink)"/><text x="220" y="196" text-anchor="middle" font-size="12.5" fill="var(--quiet)">debit note</text><text x="220" y="224" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">③ 貸方票</text><line x1="330" y1="234" x2="120" y2="234" stroke="var(--ink)" stroke-width="1.5"/><path d="M110 234L121 228L121 240z" fill="var(--ink)"/><text x="220" y="252" text-anchor="middle" font-size="12.5" fill="var(--quiet)">credit note</text><text x="220" y="280" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">④ 取引先明細書</text><line x1="330" y1="290" x2="120" y2="290" stroke="var(--ink)" stroke-width="1.5"/><path d="M110 290L121 284L121 296z" fill="var(--ink)"/><text x="220" y="308" text-anchor="middle" font-size="12.5" fill="var(--quiet)">supplier statement</text><text x="220" y="336" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">⑤ 支払い＋送金通知</text><line x1="110" y1="346" x2="320" y2="346" stroke="var(--accent)" stroke-width="2.5"/><path d="M330 346L319 340L319 352z" fill="var(--accent)"/><text x="220" y="364" text-anchor="middle" font-size="12.5" fill="var(--quiet)">payment + remittance advice</text><text x="220" y="392" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">⑥ 領収書</text><line x1="330" y1="402" x2="120" y2="402" stroke="var(--ink)" stroke-width="1.5"/><path d="M110 402L121 396L121 408z" fill="var(--ink)"/><text x="220" y="420" text-anchor="middle" font-size="12.5" fill="var(--quiet)">receipt</text></svg>`,
          caption: '②の借方票は返品などがあったときだけ。⑤でお金を払うとき、買い手は送金通知を添えて「どの請求書の分か」を知らせる。'
        },
        {
          title: '請求書（invoice）',
          paras: ['売り手が「これだけ払ってください」と出す書類。請求書番号、日付、お客さん、商品、数量、単価、合計、値引き、売上税、支払期限（たとえば30日以内）が書いてある。', '同じ1枚の請求書でも、立場で呼び名が変わる。'],
          list: ['売り手から見ると: 販売請求書（customer / sales invoice）→ 売上と売掛金を記録する', '買い手から見ると: 仕入請求書（supplier / purchase invoice）→ 仕入と買掛金を記録する'],
          after: '請求書は、帳簿に金額を記録するきっかけになる書類。買い手は、発注書・受領書と突き合わせてから払う。'
        },
        {
          title: '貸方票と借方票',
          list: ['貸方票（credit note）: 売り手が出す。返品や請求しすぎのときに「あなたが払う額をこれだけ減らします」と伝える正式な書類。売り手は売上戻り、買い手は仕入戻しを記録する。', '借方票（debit note）: ふつうは買い手が出す。「返品したので、この分を減額してください」というお願い。正式な減額は、売り手の貸方票で決まる。（売り手が「請求が足りなかった分」を追加で請求するときに出すこともある。）'],
          note: { kind: 'tip', text: '貸方票の「貸方（credit）」は、売り手が帳簿でお客さんの売掛金を貸方に書いて減らすことから来ている。貸方の意味は L13 で学ぶ。' }
        },
        {
          title: '取引先明細書（supplier statement）',
          paras: ['売り手が、ふつう月に1回送ってくる一覧。前月の残り、その月の請求書、貸方票、受け取った支払い、そして今いくら払う必要があるかが書いてある。カードの利用明細と同じ。', '買い手は、自分の帳簿の買掛金と合っているかを確かめるために使う（照合はあとの部で学ぶ）。新しい取引ではないので、明細書から記録はしない。', 'K1 では、売り手がお客さんに送る明細書（statement of account）も出る。同じ書類を売り手側から見たもの。']
        },
        {
          title: '明細書を読む',
          paras: ['（ ）はマイナスの意味。'],
          table: {
            caption: '粉屋から届いた3月の明細書',
            head: ['日付・内容', '$'],
            rows: [
              ['3/1 前月からの残り', '200'],
              ['3/5 請求書', '500'],
              ['3/12 貸方票（返品）', '(50)'],
              ['3/20 受け取った支払い', '(200)']
            ],
            total: ['3/31 支払う必要がある額', '450']
          },
          formula: '200 ＋ 500 − 50 − 200 ＝ 450'
        },
        {
          title: '送金通知 と 領収書',
          list: ['送金通知（remittance advice）: 買い手がお金を払うときに添える書類。「どの請求書の分を払うか」を書く。たとえば「請求書 $500 から貸方票 $50 を引いて、$450 を払います」。売り手は、入金をどの請求書に当てるか分かる。', '領収書（receipt）: お金を受け取った側が出す「確かに受け取りました」の証明。払った側は、支払いの証拠として保管する。']
        },
        {
          title: '帳簿に記録するきっかけになる？',
          table: {
            caption: '6つの書類と帳簿への記録',
            head: ['書類', '出す人 → 受け取る人', '帳簿への記録'],
            rows: [
              ['請求書', '売り手 → 買い手', 'する（売上・仕入）'],
              ['貸方票', '売り手 → 買い手', 'する（返品・減額）'],
              ['借方票', '買い手 → 売り手', 'しない（お願いだけ）'],
              ['取引先明細書', '売り手 → 買い手', 'しない（確認用）'],
              ['送金通知', '買い手 → 売り手', 'お金の動きと一緒に記録'],
              ['領収書', '受け取った側 → 払った側', 'お金の動きの証拠']
            ]
          }
        },
        {
          title: 'なぜ？ 明細書と送金通知がある理由',
          paras: ['会社は何十社とも取引している。どの請求書がまだ払われていないか、相手と自分の記録がずれていないかを確かめないと、払いすぎや払い忘れが起きる。', '明細書は「相手の記録」、送金通知は「どれを払ったか」のメモ。どちらも新しい取引ではなく、お互いの記録を合わせるための書類。'],
          note: { kind: 'warn', text: '貸方票と借方票の向きを逆にしやすい。貸方票（credit note）は売り手が出す正式な減額。借方票（debit note）は買い手が出すお願い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['帳簿記録のきっかけは、請求書と貸方票（とお金の動き）', '貸方票は売り手が出す減額。借方票は買い手のお願い', '明細書は相手の記録の一覧。照合に使い、そこから記録はしない']
        },
        {
          title: '英単語',
          words: [
            ['invoice', 'インボイス', '請求書'],
            ['customer (sales) invoice', '', '販売請求書（売り手が出す）'],
            ['supplier (purchase) invoice', '', '仕入請求書（買い手が受け取る）'],
            ['credit note', 'クレジットノート', '貸方票（売り手が出す減額）'],
            ['debit note', 'デビットノート', '借方票（買い手の減額のお願い）'],
            ['supplier statement', '', '取引先明細書'],
            ['statement of account', '', '明細書（売り手がお客さんに送る）'],
            ['remittance advice', 'リミッタンス・アドバイス', '送金通知'],
            ['receipt', 'レシート', '領収書']
          ]
        }
      ],
      quiz: [
        { q: 'Which document is issued by a supplier to a customer to reduce the amount owed, for example when goods are returned?', choices: ['Debit note', 'Credit note', 'Remittance advice', 'Supplier statement'], answer: 1, explain: '売り手が出す正式な減額は貸方票（credit note）。debit note は買い手が出す「減額してください」というお願い。' },
        { q: 'Which document is sent by a customer with a payment to show which invoices are being paid?', choices: ['Receipt', 'Remittance advice', 'Supplier statement', 'Sales invoice'], answer: 1, explain: '払う側が添えるのは送金通知（remittance advice）。receipt は、お金を受け取った側が出す証明。' },
        { q: '仕入先から取引先明細書（supplier statement）が届いた。ここに載っている請求書を、もう一度仕入として記録する？', choices: ['記録する。明細書に載っているから', '記録しない。自分の帳簿と合っているかを確かめるために使う'], answer: 1, explain: '請求書は届いたときに記録済み。明細書は相手の記録の一覧なので、新しく記録すると二重になる。' },
        { q: 'A supplier statement shows a balance brought forward of $300, invoices of $1,200, a credit note of $100 and a payment received of $300. What amount does the statement show as owing?', type: 'number', answer: 1100, unit: '$', explain: '$300 ＋ $1,200 − $100 − $300 ＝ $1,100。貸方票と支払いは払う額を減らすので引く。' },
        { q: '借方票（debit note）を作って送るのは？', choices: ['売り手', '買い手'], answer: 1, explain: '買い手が「返品したので減額してほしい」と送るお願い。正式な減額は、それを受けた売り手が出す貸方票で決まる。' },
        { q: '前のレッスンのつながり: 仕入請求書の代金を払う前に、突き合わせる2つの書類は？', choices: ['発注書と受領書', '見積書と領収書', '出荷書と送金通知', '受注書と取引先明細書'], answer: 0, explain: '頼んだ内容（発注書）と、実際に届いた物（受領書）を、請求書と比べる。3つが一致したら払う。' }
      ]
    },
    {
      id: 'L12',
      no: 12,
      title: 'データの入口: 主なデータソースと最初の記録',
      goal: '書類（データソース）から日記帳、総勘定元帳へと記録が流れる道筋と、7つの日記帳の役割を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['C1(a)', 'C2(b)', 'K1:B1(a)', 'K1:B2(b)', 'K1:B2(c)'],
      slides: [
        {
          title: '家計簿で考える',
          paras: ['レシートを箱にためておき、週末に家計簿のノートへ日付順に書き写す。月末には「食費」「日用品」など、費目ごとに合計を出す。', 'この3段階が、会社の記録の流れとそっくり同じ。'],
          list: ['レシート → 書類（データソース）', '日付順のノート → 日記帳（最初の記録）', '費目ごとの合計 → 総勘定元帳の勘定']
        },
        {
          title: 'データが流れる順番',
          svg: `<svg viewBox="0 0 440 380" role="img" aria-label="書類から日記帳、総勘定元帳、試算表と財務諸表へと流れる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">データが流れる順番</text><rect x="20" y="48" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="74" font-size="15" font-weight="600" fill="var(--ink)">① 書類（データソース）</text><text x="40" y="96" font-size="12.5" fill="var(--quiet)">source documents</text><text x="400" y="74" text-anchor="end" fill="var(--ink)">請求書・貸方票など</text><line x1="220" y1="110" x2="220" y2="120" stroke="var(--quiet)" stroke-width="1.5"/><path d="M213 120L227 120L220 130z" fill="var(--quiet)"/><rect x="20" y="132" width="400" height="60" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="158" font-size="15" font-weight="600" fill="var(--ink)">② 日記帳（最初の記録）</text><text x="40" y="180" font-size="12.5" fill="var(--ink)">books of prime entry</text><text x="400" y="158" text-anchor="end" fill="var(--ink)">日付順に1件ずつ</text><line x1="220" y1="194" x2="220" y2="204" stroke="var(--quiet)" stroke-width="1.5"/><path d="M213 204L227 204L220 214z" fill="var(--quiet)"/><rect x="20" y="216" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="242" font-size="15" font-weight="600" fill="var(--ink)">③ 総勘定元帳</text><text x="40" y="264" font-size="12.5" fill="var(--quiet)">general ledger</text><text x="400" y="242" text-anchor="end" fill="var(--ink)">勘定ごとに集計</text><line x1="220" y1="278" x2="220" y2="288" stroke="var(--quiet)" stroke-width="1.5"/><path d="M213 288L227 288L220 298z" fill="var(--quiet)"/><rect x="20" y="300" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="326" font-size="15" font-weight="600" fill="var(--ink)">④ 試算表・財務諸表</text><text x="40" y="348" font-size="12.5" fill="var(--quiet)">trial balance / financial statements</text><text x="400" y="326" text-anchor="end" fill="var(--ink)">成績表にする</text></svg>`,
          caption: '記録はいつもこの順番で流れる。成績表の数字は、さかのぼるとどれも1枚の書類にたどり着く。'
        },
        {
          title: '主なデータソース',
          paras: ['会計システムに入るデータの出どころを、データソースという。中心は証憑（source documents）。取引が本当にあったことと、その金額の証拠になる。'],
          list: ['外から届く: 仕入請求書、受け取った貸方票、銀行の明細、取引先明細書、送金通知', '社内で作る: 販売請求書の控え、出した貸方票、受領書、給与の記録、小口現金の伝票'],
          after: 'コンピュータ会計では、レジ（POS）の売上データ、銀行から自動で届く入出金データ（bank feed）、電子請求書も、そのままデータソースになる。'
        },
        {
          title: '最初の記録＝日記帳',
          paras: ['書類は、まず種類ごとの帳簿に日付順に記録する。これを日記帳（books of prime entry）という。prime は「最初の」という意味。'],
          table: {
            caption: '7つの日記帳',
            head: ['日記帳', '記録する書類'],
            rows: [
              ['売上日記帳 sales day book', '掛け売上の販売請求書'],
              ['仕入日記帳 purchases day book', '仕入先から届いた掛けの請求書（電気代など掛けの経費も）'],
              ['売上戻り日記帳 sales returns day book', 'お客さんに出した貸方票'],
              ['仕入戻し日記帳 purchase returns day book', '仕入先から届いた貸方票'],
              ['現金出納帳 cash book', '銀行・現金の入金と支払'],
              ['小口現金出納帳 petty cash book', '小口現金での小さな支払'],
              ['仕訳帳 the journal', '上のどれにも入らない取引']
            ]
          }
        },
        {
          title: '例題: 日記帳から元帳へ',
          example: {
            problem: 'たこ焼き屋の1週間の売上日記帳。5/1 カフェA $200、5/3 ホテルB $350、5/6 カフェA $150（すべて掛け売上）。総勘定元帳にはどう転記する？',
            steps: ['日記帳には、請求書が1枚ずつ日付順に書いてある。', '合計を出す: $200 ＋ $350 ＋ $150 ＝ $700。', '総勘定元帳には、合計だけを1回転記する: 売上が $700 増え、売掛金が $700 増える。', 'お客さんごとの内訳は、別の帳簿（売掛金元帳）に1件ずつ記録する: カフェA $200 ＋ $150 ＝ $350、ホテルB $350。'],
            answer: '元帳へは合計 $700 を1回だけ転記。売上と売掛金がそれぞれ $700 増える。'
          }
        },
        {
          title: 'なぜ？ 日記帳をはさむ理由',
          paras: ['請求書が1か月に300枚あっても、元帳の売上の勘定に300回書かなくてすむ。日記帳でまとめて、合計を1回転記（post）すればよい。', '日付順の一覧なので、「この数字はどの書類から来たか」をあとからたどれる。この道筋を監査証跡（audit trail）という。', '担当を分けられるのも利点。請求書の係、支払いの係が、それぞれの日記帳を受け持てる。']
        },
        {
          title: '現金出納帳と仕訳帳',
          paras: ['現金出納帳（cash book）は、日記帳であると同時に、総勘定元帳の銀行の勘定そのものとして使われることが多い。試験でもこの「二役」がよく問われる。', '仕訳帳（the journal）は、ほかの日記帳に入らない取引のための帳簿。誤りの訂正、期末の調整（減価償却など）、設備を掛けで買ったときのような、めったにない取引を記録する。']
        },
        {
          title: 'コンピュータ会計での入口',
          paras: ['今の会社の多くはコンピュータで記録する。請求書の画面に入力すると、システムが日記帳の一覧を作り、元帳にも自動で転記する。'],
          list: ['自動仕訳（automated journal）: 日々の取引の入力から、システムが自動で作る記録。請求書の入力、銀行の入出金データ、毎月同じ額の家賃など', '手動仕訳（manual journal）: 経理の担当者が自分で入力する記録。誤りの訂正、期末の調整など'],
          after: '手動仕訳は人の判断で入れるので、間違いや不正が入りやすい。上司の承認など、チェックを強くする。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '売上日記帳に書くのは掛け売上だけ。その場でお金を受け取った売上（現金売上）は、現金出納帳に記録する。' },
          paras: ['売上戻り日記帳と仕入戻し日記帳も取り違えやすい。自分が出した貸方票（お客さんの返品）は売上戻り、仕入先から届いた貸方票（自分の返品）は仕入戻し。', '見積書・発注書・受領書は、どの日記帳にも記録しない。売掛金元帳・買掛金元帳（L14）も日記帳ではない。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['書類 → 日記帳 → 総勘定元帳 → 試算表・財務諸表', '日記帳は7つ: 売上・仕入・売上戻り・仕入戻し・現金出納帳・小口現金出納帳・仕訳帳', '元帳へは、日記帳の合計を転記する']
        },
        {
          title: '英単語',
          words: [
            ['source document', '', '証憑（取引の証拠になる書類）'],
            ['books of prime entry', '', '日記帳（最初の記録の帳簿）'],
            ['day book', 'デイブック', '日記帳'],
            ['cash book', 'キャッシュブック', '現金出納帳'],
            ['petty cash book', '', '小口現金出納帳'],
            ['the journal', 'ジャーナル', '仕訳帳'],
            ['post', 'ポスト', '転記する'],
            ['audit trail', '', '監査証跡（数字から書類へたどる道筋）'],
            ['general ledger', '', '総勘定元帳'],
            ['automated / manual journal', '', '自動仕訳 / 手動仕訳']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a book of prime entry?', choices: ['Sales day book', 'Petty cash book', 'Receivables ledger', 'The journal'], answer: 2, explain: '売掛金元帳（receivables ledger）は、お客さんごとの残高を持つ元帳で、日記帳ではない。売上日記帳・小口現金出納帳・仕訳帳は、7つの日記帳に入る。' },
        { q: 'Credit notes received from suppliers are first recorded in which book of prime entry?', choices: ['Sales returns day book', 'Purchase returns day book', 'Purchases day book', 'Cash book'], answer: 1, explain: '仕入先から届いた貸方票＝自分が返品した分なので、仕入戻し日記帳。売上戻り日記帳は、自分がお客さんに出した貸方票を書く。' },
        { q: '屋台でその場で受け取ったたこ焼きの売上 $40。最初に記録する帳簿は？', choices: ['売上日記帳', '現金出納帳', '仕入日記帳', '仕訳帳'], answer: 1, explain: '売上日記帳は掛け売上だけ。その場でお金が入る現金売上は現金出納帳に書く。' },
        { q: 'A sales day book for one week lists credit sales invoices of $250, $400 and $180. What total is posted to the sales revenue account?', type: 'number', answer: 830, unit: '$', explain: '$250 ＋ $400 ＋ $180 ＝ $830。元帳へは合計を1回転記する。' },
        { q: '仕訳帳（the journal）に記録するのは？', choices: ['掛け売上の販売請求書', 'お客さんからの入金', '誤りの訂正や期末の調整など、ほかの日記帳に入らないもの', '仕入先からの仕入請求書'], answer: 2, explain: '請求書は売上・仕入日記帳、入金は現金出納帳。それ以外のめったにない取引を仕訳帳に書く。' },
        { q: '自動仕訳（automated journal）の例はどれ？', choices: ['販売請求書を入力すると、売上と売掛金にシステムが自動で記録する', '経理の担当者が誤りを見つけて、訂正の記録を入力する'], answer: 0, explain: '日々の取引の入力からシステムが作るのが自動仕訳。人が判断して入れる訂正や期末の調整は手動仕訳で、承認などのチェックがより大事になる。' }
      ]
    },
    {
      id: 'L13',
      no: 13,
      title: '借方と貸方のルール',
      goal: 'どの勘定を借方（左）・貸方（右）に書くかを決め、取引を同じ金額の借方と貸方に分けて仕訳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['C2(a)', 'C2(c)', 'K1:B2(c)'],
      slides: [
        {
          title: 'お金の動きには、いつも2つの面がある',
          paras: ['給料30万円が口座に振り込まれた。このとき起きたことは2つある。'],
          list: ['口座のお金（持ち物）が30万円増えた', 'その理由は、働いて稼いだから（収益）'],
          after: 'スマホを分割払いで買ったときも、「スマホ（持ち物）が増えた」と「分割払いの残り（借金）が増えた」が同時に起きる。この2つの面を両方とも書くのが複式簿記（double entry）。'
        },
        {
          title: '左が借方、右が貸方',
          paras: ['勘定（ledger account）は、ふつうT字の形で書く。左側を借方（debit、Dr）、右側を貸方（credit、Cr）と呼ぶ。'],
          svg: `<svg viewBox="0 0 440 220" role="img" aria-label="T字の勘定。左が借方、右が貸方" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">勘定はT字の形</text><text x="220" y="70" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Cash（現金）</text><line x1="60" y1="84" x2="380" y2="84" stroke="var(--ink)" stroke-width="2"/><line x1="220" y1="84" x2="220" y2="204" stroke="var(--ink)" stroke-width="2"/><text x="140" y="118" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">借方（左）</text><text x="140" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">debit / Dr</text><text x="300" y="118" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">貸方（右）</text><text x="300" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">credit / Cr</text><text x="140" y="182" text-anchor="middle" fill="var(--ink)">資産が増えたら</text><text x="300" y="182" text-anchor="middle" fill="var(--ink)">資産が減ったら</text></svg>`,
          note: { kind: 'warn', text: '借方・貸方は「左・右」という場所の名前だけ。「借りる・貸す」「良い・悪い」の意味はない。銀行の明細で入金が credit なのは、銀行から見ると預金が負債（返すお金）だから。お店では資産なので、増えたら借方。' }
        },
        {
          title: 'どっちに書く？ ルール表',
          table: {
            caption: '増えたとき・減ったときに書く側',
            head: ['種類', '増えたら', '減ったら'],
            rows: [
              ['資産 asset', '借方 Dr', '貸方 Cr'],
              ['費用 expense', '借方 Dr', '貸方 Cr'],
              ['引出し drawings', '借方 Dr', '貸方 Cr'],
              ['負債 liability', '貸方 Cr', '借方 Dr'],
              ['資本 capital', '貸方 Cr', '借方 Dr'],
              ['収益 income', '貸方 Cr', '借方 Dr']
            ]
          },
          note: { kind: 'tip', text: '覚え方は DEAD CLIC。Debit＝Expenses・Assets・Drawings、Credit＝Liabilities・Income・Capital。' }
        },
        {
          title: 'なぜ？ このルールになる理由',
          paras: ['出発点は会計等式。資産は等式の左にあるので、増えたら左（借方）。資本と負債は右にあるので、増えたら右（貸方）。', '収益は利益を通じて資本を増やすので、資本と同じ貸方。費用と引出しは資本を減らすので、資本と逆の借方。等式を広げると、左の3つが借方、右の3つが貸方になる。'],
          formula: 'assets ＋ expenses ＋ drawings ＝ capital ＋ liabilities ＋ income'
        },
        {
          title: '仕訳の書き方',
          paras: ['取引を「どの勘定の借方に、どの勘定の貸方に、いくら」と書いたものを仕訳（journal entry）という。借方を上、貸方を下に書く。', '例: オーナーが自分のお金 $1,000 をお店に入れた（現金が増え、資本が増えた）。'],
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '1,000' },
            { side: 'Cr', account: 'Capital（資本）', amount: '1,000' }
          ],
          note: { kind: 'tip', text: '仕訳には、何の取引かを短く書いた説明（narrative）も付ける。例:「オーナーが資本を拠出」。' }
        },
        {
          title: '例題1: お金を借りた',
          example: {
            problem: 'たこ焼き屋が銀行から $500 を借り、お店の銀行口座に入金された。仕訳は？',
            steps: ['① 動いた勘定を2つ探す: お店の銀行口座（Bank）と、銀行からの借入（Loan）。', '② それぞれの種類と増減: Bank は資産が増えた。Loan は負債が増えた。', '③ ルール表に当てはめる: 資産の増加は借方、負債の増加は貸方。', '④ 金額をそろえる: 借方 $500 ＝ 貸方 $500。'],
            answer: 'Dr Bank 500 ／ Cr Loan 500'
          },
          note: { kind: 'tip', text: 'ACCA では銀行口座の勘定を Bank や Cash at bank と書く。手元の現金（Cash）と同じ資産なので、ルールも同じ。' }
        },
        {
          title: '例題2: 家賃を払った',
          example: {
            problem: 'お店の家賃 $80 を現金で払った。仕訳は？',
            steps: ['① 動いた勘定: 家賃（Rent expense）と現金（Cash）。', '② 種類と増減: 家賃は費用が増えた。現金は資産が減った。', '③ ルール表: 費用の増加は借方、資産の減少は貸方。', '④ 借方 $80 ＝ 貸方 $80 で釣り合う。'],
            answer: 'Dr Rent expense 80 ／ Cr Cash 80'
          },
          note: { kind: 'tip', text: '迷ったら、まず現金を決める。お金が入れば Cash は借方、出れば貸方。相手の勘定は、その反対側に書く。' }
        },
        {
          title: '開店の1か月を仕訳する',
          paras: ['同じ手順で6つの取引を仕訳すると、こうなる。'],
          table: {
            caption: 'たこ焼き屋の最初の1か月（$）',
            head: ['取引', '借方 Dr', '貸方 Cr'],
            rows: [
              ['オーナーが $1,000 を入れる', 'Cash 1,000', 'Capital 1,000'],
              ['銀行から $500 を現金で借りる', 'Cash 500', 'Loan 500'],
              ['たこ焼き器を現金 $300 で買う', 'Equipment 300', 'Cash 300'],
              ['たこ焼きを現金 $200 で売る', 'Cash 200', 'Sales revenue 200'],
              ['家賃 $80 を現金で払う', 'Rent expense 80', 'Cash 80'],
              ['オーナーが私用に $50 を持ち出す', 'Drawings 50', 'Cash 50']
            ],
            total: ['合計', '2,130', '2,130']
          },
          note: { kind: 'warn', text: '仕訳を書いたら、借方の合計＝貸方の合計かを必ず確かめる。合わなければ、どこかが間違っている。' }
        },
        {
          title: '元帳に転記する',
          paras: ['仕訳の借方の金額は、その勘定の左側に、貸方の金額は右側に書き写す。これを転記（posting）という。各行には、相手の勘定の名前を書く。', '1つ目の仕訳なら、Cash の左に「Capital 1,000」、Capital の右に「Cash 1,000」と、2つの勘定に1回ずつ書く。Cash の勘定を全部転記するとこうなる。'],
          tAccount: {
            name: 'Cash',
            debit: [['Capital', '1,000'], ['Loan', '500'], ['Sales revenue', '200']],
            credit: [['Equipment', '300'], ['Rent expense', '80'], ['Drawings', '50']]
          },
          note: { kind: 'tip', text: '左 $1,700 − 右 $430 ＝ $1,270 が借方に残る。現金が $1,270 あるという意味。残高の締め方は L18 で学ぶ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['借方（Dr）＝左、貸方（Cr）＝右。良い悪いの意味はない', '増えたら借方: 資産・費用・引出し。増えたら貸方: 負債・資本・収益', 'どの取引も、借方の合計＝貸方の合計']
        },
        {
          title: '英単語',
          words: [
            ['debit (Dr)', 'デビット', '借方（左）'],
            ['credit (Cr)', 'クレジット', '貸方（右）'],
            ['double entry', 'ダブルエントリー', '複式簿記'],
            ['ledger account', '', '勘定'],
            ['journal entry', '', '仕訳'],
            ['narrative', 'ナラティブ', '仕訳の説明文'],
            ['posting', 'ポスティング', '転記'],
            ['Bank / Cash at bank', '', '銀行口座の勘定（資産）'],
            ['sales revenue', '', '売上（収益の勘定）'],
            ['loan', 'ローン', '借入（負債）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following increases with a debit entry?', choices: ['Capital', 'Sales revenue', 'Rent expense', 'Bank loan'], answer: 2, explain: '費用（expense）は増えたら借方。資本・収益・負債（loan）は増えたら貸方。' },
        { q: '掛けで商品を $400 売った。正しい仕訳は？', choices: ['Dr Sales revenue 400 ／ Cr Trade receivables 400', 'Dr Trade receivables 400 ／ Cr Sales revenue 400', 'Dr Cash 400 ／ Cr Sales revenue 400', 'Dr Trade receivables 400 ／ Cr Cash 400'], answer: 1, explain: '売掛金（資産）が増えたので借方、売上（収益）が増えたので貸方。掛けなのでまだ Cash は動かない。1つ目は借方と貸方が逆。' },
        { q: 'A business pays rent of $250 by bank transfer. Which is the correct double entry?', choices: ['Dr Rent expense $250, Cr Bank $250', 'Dr Bank $250, Cr Rent expense $250', 'Dr Rent expense $250, Cr Capital $250', 'Dr Capital $250, Cr Bank $250'], answer: 0, explain: '費用の増加は借方、銀行口座（資産）の減少は貸方。2つ目は逆。資本は直接は動かない（費用を通じて、期末に利益として反映される）。' },
        { q: 'The cash account has debit entries of $1,200 and $300 and credit entries of $450 and $100. What is the balance on the account?', type: 'number', answer: 950, unit: '$', explain: '借方 $1,200 ＋ $300 ＝ $1,500、貸方 $450 ＋ $100 ＝ $550。$1,500 − $550 ＝ $950 が借方に残る（現金が $950 ある）。' },
        { q: '銀行の明細で、入金が「credit」と書かれているのはなぜ？', choices: ['銀行から見ると、預金はお客さんに返すお金（負債）だから', 'credit は「良いこと」という意味だから', 'お金が増えたら、どの帳簿でも貸方に書くから', '銀行の書き間違い'], answer: 0, explain: '明細は銀行の帳簿の写し。銀行にとって預金は負債なので、増えたら貸方。お店の帳簿では資産なので借方。' },
        { q: 'The owner withdraws $50 cash from the business for personal use. Which is the correct entry?', choices: ['Dr Drawings $50, Cr Cash $50', 'Dr Cash $50, Cr Drawings $50', 'Dr Rent expense $50, Cr Cash $50', 'Dr Cash $50, Cr Capital $50'], answer: 0, explain: '引出しの増加は借方、現金の減少は貸方。私用の持ち出しはお店の費用ではないので、Rent expense などにはしない。' }
      ]
    },
    {
      id: 'L14',
      no: 14,
      title: '元帳の勘定の種類と役割',
      goal: '総勘定元帳の勘定を5つの種類に分け、次の期へ繰り越す勘定と、毎期0から始まる勘定の違いを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['C2(a)', 'K1:B2(a)'],
      slides: [
        {
          title: '家計簿のページで考える',
          paras: ['家計簿を、費目ごとのページに分けているとする。「貯金」「ローン」のページと、「食費」「給料」のページ。', '年が変わったら、貯金のページは残高をそのまま引き継ぐ。お金は消えないから。', '食費のページは「今年いくら使ったか」を見るものなので、新しい年は0から書き始める。会社の勘定も、まったく同じ2つのグループに分かれる。']
        },
        {
          title: '総勘定元帳とは',
          paras: ['総勘定元帳（general ledger）は、会社のすべての勘定を集めた帳簿。nominal ledger とも呼ぶ。', '勘定（ledger account）は、1つの項目専用のページ。Cash、Trade receivables、Sales revenue、Rent expense など。その項目の増減を全部集めて、今いくらあるか（残高、balance）を出すのが役割。', '財務諸表の数字は、すべてこの元帳の残高から作られる。']
        },
        {
          title: '勘定の5つの種類',
          paras: ['L13 のルールで「増えたら書く側」に残高が残る。これを、その勘定のふつうの残高という。'],
          table: {
            caption: '種類・例・ふつうの残高',
            head: ['種類', '勘定の例', 'ふつうの残高'],
            rows: [
              ['資産', 'Cash、Bank、Trade receivables、Inventory、Equipment', '借方'],
              ['負債', 'Trade payables、Loan', '貸方'],
              ['資本', 'Capital（Drawings は資本を減らす勘定）', '貸方（Drawings は借方）'],
              ['収益', 'Sales revenue、Interest received', '貸方'],
              ['費用', 'Purchases、Rent expense、Wages', '借方']
            ]
          }
        },
        {
          title: '2つのグループ',
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="次の期へ繰り越す勘定と、毎期0に戻す勘定" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">勘定は2つのグループ</text><rect x="20" y="48" width="400" height="118" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="76" font-size="16" font-weight="600" fill="var(--ink)">財政状態計算書の勘定</text><text x="40" y="102" fill="var(--ink)">資産・負債・資本</text><text x="40" y="128" fill="var(--ink)">→ 残高を次の期へ繰り越す</text><text x="40" y="152" font-size="12.5" fill="var(--quiet)">balances carried forward</text><rect x="20" y="182" width="400" height="118" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="210" font-size="16" font-weight="600" fill="var(--ink)">損益計算書の勘定</text><text x="40" y="236" fill="var(--ink)">収益・費用</text><text x="40" y="262" fill="var(--ink)">→ 期末に利益にまとめ、0から再スタート</text><text x="40" y="286" font-size="12.5" fill="var(--ink)">closed off to profit, then to capital</text></svg>`,
          caption: '財政状態計算書の勘定は「写真」なので次の期へ続く。損益計算書の勘定は「動画」なので毎期0から。'
        },
        {
          title: 'なぜ？ 0に戻す勘定がある理由',
          paras: ['損益計算書は「その期間にいくら稼いで、いくら使ったか」を見る成績表。去年の売上を今年に足してしまうと、今年の成績が分からない。', 'だから期末に、収益と費用の残高を利益（または損失）にまとめて0にする。その利益は資本に加わる（L05 の「期末資本＝期首資本＋資本の拠出＋利益−引出し」）。引出しも期末に資本から差し引いて0にする。', '一方、現金や借入は実際に残っているので、そのまま次の期へ繰り越す。']
        },
        {
          title: '内訳の帳簿: 売掛金元帳と買掛金元帳',
          paras: ['総勘定元帳の Trade receivables 勘定は、全部のお客さんの合計を1つで持つ。でも、それだけでは「誰がいくら払っていないか」が分からない。そこで、お客さんごとの勘定を別の帳簿に持つ。'],
          list: ['売掛金元帳（receivables ledger、sales ledger）: お客さんごとの売掛金', '買掛金元帳（payables ledger、purchase ledger）: 仕入先ごとの買掛金'],
          after: 'L12 の例なら、元帳の Trade receivables は $700、売掛金元帳はカフェA $350、ホテルB $350。合計は一致するはず。この内訳の帳簿は、ふつう複式簿記の外にある「メモ」（memorandum）の扱いで、詳しくは統制勘定（control account）のレッスンで学ぶ。'
        },
        {
          title: '例題: 勘定を分ける',
          example: {
            problem: '次の6つの勘定を「次の期へ繰り越す」と「期末に0に戻す」に分け、ふつうの残高も答える。Loan、Purchases、Trade receivables、Wages、Capital、Sales revenue。',
            steps: ['① 種類を決める: Loan＝負債、Purchases＝費用、Trade receivables＝資産、Wages＝費用、Capital＝資本、Sales revenue＝収益。', '② 資産・負債・資本は財政状態計算書の勘定 → 繰り越す: Loan、Trade receivables、Capital。', '③ 収益・費用は損益計算書の勘定 → 0に戻す: Purchases、Wages、Sales revenue。', '④ ふつうの残高: 借方＝Trade receivables、Purchases、Wages。貸方＝Loan、Capital、Sales revenue。'],
            answer: '繰り越す: Loan・Trade receivables・Capital。0に戻す: Purchases・Wages・Sales revenue。'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'Purchases（仕入）を資産だと思ってしまう。ACCA では、売るための商品を買ったら、まず費用の Purchases 勘定に記録する。期末に売れ残った分を在庫（inventory、資産）として調整する方法は、棚卸資産の部で学ぶ。' },
          paras: ['Drawings（引出し）を費用にするのも間違い。オーナーが私用に持ち出したお金で、お店の商売のための支出ではない。資本を減らす勘定。', '名前のゆれにも注意。general ledger＝nominal ledger、receivables ledger＝sales ledger、payables ledger＝purchase ledger。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['総勘定元帳＝全部の勘定の集まり。財務諸表はその残高から作る', '資産・負債・資本の勘定は繰り越す。収益・費用は期末に利益にまとめて0に戻す', 'お客さん・仕入先ごとの内訳は、売掛金元帳・買掛金元帳に持つ']
        },
        {
          title: '英単語',
          words: [
            ['general ledger', '', '総勘定元帳'],
            ['nominal ledger', 'ノミナル・レジャー', '総勘定元帳の別名'],
            ['balance', 'バランス', '残高'],
            ['carried forward', '', '次の期へ繰り越す'],
            ['receivables ledger', '', '売掛金元帳（sales ledger とも）'],
            ['payables ledger', '', '買掛金元帳（purchase ledger とも）'],
            ['memorandum ledger', 'メモランダム', '複式簿記の外に置く内訳の元帳'],
            ['purchases', 'パーチェシズ', '仕入（費用の勘定）'],
            ['wages', 'ウェイジズ', '賃金（費用の勘定）'],
            ['interest received', '', '受取利息（収益の勘定）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following accounts would normally have a credit balance?', choices: ['Trade receivables', 'Purchases', 'Trade payables', 'Drawings'], answer: 2, explain: '買掛金（負債）は貸方残高。売掛金（資産）、仕入（費用）、引出しは借方残高。' },
        { q: 'Which of the following account balances is carried forward to the next accounting period?', choices: ['Sales revenue', 'Rent expense', 'Bank loan', 'Wages'], answer: 2, explain: '借入（負債）は財政状態計算書の勘定なので繰り越す。売上・家賃・賃金は損益計算書の勘定で、期末に0に戻る。' },
        { q: '新しい会計期間が始まると、残高0から始まる勘定は？', choices: ['Cash', 'Capital', 'Sales revenue', 'Trade payables'], answer: 2, explain: '売上（収益）は「その期間に稼いだ額」なので、期末に利益にまとめて0に戻す。ほかの3つは財政状態計算書の勘定で繰り越す。' },
        { q: 'お客さんごとに「いくら払ってもらっていないか」を記録する帳簿は？', choices: ['受注書（sales order）', '売掛金元帳（receivables ledger）', '売上日記帳（sales day book）', '損益計算書'], answer: 1, explain: '売掛金元帳はお客さんごとの勘定を持つ。売上日記帳は日付順の請求書の一覧で、お客さんごとの残高は出ない。' },
        { q: 'Purchases（仕入）の勘定は、どの種類？', choices: ['資産', '費用', '負債', '収益'], answer: 1, explain: 'ACCA では、売るための商品を買ったらまず費用の Purchases に記録する。売れ残りの在庫（資産）への調整は、あとの部で学ぶ。' },
        { q: 'At the year end, sales revenue is $9,000 and expenses total $6,500. These balances are closed off to profit, and the profit is added to capital. By how much does capital increase?', type: 'number', answer: 2500, unit: '$', explain: '利益＝$9,000 − $6,500 ＝ $2,500。収益と費用の勘定は0になり、$2,500 が資本に加わる。' }
      ]
    }
  ],
  cards: [
    { id: 'L09-1', lesson: 'L09', q: '取引の4つの種類は？', a: '売上・仕入・入金・支払（sales, purchases, receipts, payments）' },
    { id: 'L09-2', lesson: 'L09', q: '現金取引と掛け取引の違いは？', a: '現金: 売買と同時に払う。掛け: 物が先、お金は後' },
    { id: 'L09-3', lesson: 'L09', q: '掛けで売った代金を受け取ったら、売上？', a: 'いいえ。入金（receipt）。売上は売った日に記録済み' },
    { id: 'L09-4', lesson: 'L09', q: 'purchases（仕入）に入るのは？', a: '売るための商品・材料を買うことだけ。設備や家賃は入らない' },
    { id: 'L09-5', lesson: 'L09', q: 'なぜ売上と入金を分けて記録する？', a: '稼いだ日とお金が入る日は違うから。誰がいくら未払いかも分かる' },
    { id: 'L09-6', lesson: 'L09', q: 'sales returns と purchase returns の違いは？', a: 'sales returns＝お客さんからの返品。purchase returns＝仕入先への返品' },
    { id: 'L10-1', lesson: 'L10', q: '見積書（quotation）とは？', a: '注文の前に売り手が出す価格の提示。買い手は比べて選ぶ' },
    { id: 'L10-2', lesson: 'L10', q: '発注書（purchase order）は誰が誰に出す？', a: '買い手が売り手に出す、正式な注文' },
    { id: 'L10-3', lesson: 'L10', q: '受注書（sales order）とは？', a: '注文を受けた売り手が作る記録。出荷の指示や確認に使う' },
    { id: 'L10-4', lesson: 'L10', q: '出荷書（goods despatched note）とは？', a: '売り手が商品と一緒に送る書類。受け取りのサインが納品の証拠' },
    { id: 'L10-5', lesson: 'L10', q: '受領書（goods received note）とは？', a: '買い手が、届いた物の数と状態を記録する社内の書類' },
    { id: 'L10-6', lesson: 'L10', q: '払う前に突き合わせる3つの書類は？', a: '発注書・受領書・請求書。一致したら払う' },
    { id: 'L11-1', lesson: 'L11', q: '請求書（invoice）は売り手と買い手でどう呼ぶ？', a: '売り手: sales invoice。買い手: purchase（supplier）invoice' },
    { id: 'L11-2', lesson: 'L11', q: '貸方票（credit note）は誰が何のために出す？', a: '売り手が、返品などで払う額を減らすために出す' },
    { id: 'L11-3', lesson: 'L11', q: '借方票（debit note）は誰が出す？', a: '買い手。減額してほしいというお願い' },
    { id: 'L11-4', lesson: 'L11', q: '取引先明細書（supplier statement）の使い道は？', a: '自分の帳簿の買掛金と合っているかの確認。そこから記録はしない' },
    { id: 'L11-5', lesson: 'L11', q: '送金通知（remittance advice）とは？', a: '払う側が添える「どの請求書の分を払うか」の書類' },
    { id: 'L11-6', lesson: 'L11', q: '帳簿記録のきっかけになる書類は？', a: '請求書と貸方票（お金の動きは入金・支払として記録）' },
    { id: 'L12-1', lesson: 'L12', q: '記録が流れる順番は？', a: '書類 → 日記帳 → 総勘定元帳 → 試算表・財務諸表' },
    { id: 'L12-2', lesson: 'L12', q: 'books of prime entry とは？', a: '書類を最初に日付順で記録する帳簿（日記帳）' },
    { id: 'L12-3', lesson: 'L12', q: '仕入先から届いた貸方票を書く日記帳は？', a: '仕入戻し日記帳（purchase returns day book）' },
    { id: 'L12-4', lesson: 'L12', q: '売上日記帳に書く売上は？', a: '掛け売上だけ。現金売上は現金出納帳' },
    { id: 'L12-5', lesson: 'L12', q: 'なぜ日記帳をはさむ？', a: '合計を1回転記すれば済み、書類までたどれる（監査証跡）から' },
    { id: 'L12-6', lesson: 'L12', q: '仕訳帳（the journal）に書くのは？', a: '誤りの訂正・期末の調整など、ほかの日記帳に入らない取引' },
    { id: 'L12-7', lesson: 'L12', q: '自動仕訳と手動仕訳の違いは？', a: '自動: 取引の入力からシステムが作る。手動: 人が入力（訂正・調整）' },
    { id: 'L13-1', lesson: 'L13', q: '借方・貸方とは？', a: '借方（debit, Dr）＝左、貸方（credit, Cr）＝右。良い悪いの意味はない' },
    { id: 'L13-2', lesson: 'L13', q: '増えたら借方に書く3つは？', a: '資産・費用・引出し（DEAD）' },
    { id: 'L13-3', lesson: 'L13', q: '増えたら貸方に書く3つは？', a: '負債・収益・資本（CLIC）' },
    { id: 'L13-4', lesson: 'L13', q: 'なぜ費用は借方？', a: '費用は資本を減らすから。資本の増加は貸方なので、その逆' },
    { id: 'L13-5', lesson: 'L13', q: '複式簿記の大原則は？', a: 'どの取引も、借方の合計＝貸方の合計' },
    { id: 'L13-6', lesson: 'L13', q: '掛けで $400 売ったときの仕訳は？', a: 'Dr Trade receivables 400 ／ Cr Sales revenue 400' },
    { id: 'L13-7', lesson: 'L13', q: 'T勘定に転記するとき、各行に書くものは？', a: '金額と、相手の勘定の名前' },
    { id: 'L14-1', lesson: 'L14', q: '総勘定元帳（general ledger）とは？', a: 'すべての勘定を集めた帳簿。nominal ledger とも呼ぶ' },
    { id: 'L14-2', lesson: 'L14', q: '次の期へ残高を繰り越す勘定は？', a: '資産・負債・資本（財政状態計算書の勘定）' },
    { id: 'L14-3', lesson: 'L14', q: '毎期0から始まる勘定は？', a: '収益・費用（損益計算書の勘定）。期末に利益にまとめる' },
    { id: 'L14-4', lesson: 'L14', q: 'なぜ収益・費用は毎期0に戻す？', a: 'その期間に稼いだ・使った額を測るため' },
    { id: 'L14-5', lesson: 'L14', q: '売掛金元帳（receivables ledger）とは？', a: 'お客さんごとの売掛金の内訳を持つ帳簿' },
    { id: 'L14-6', lesson: 'L14', q: 'Purchases の種類と、ふつうの残高は？', a: '費用。借方残高' }
  ]
});
