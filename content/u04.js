(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 4,
  part: 3,
  partTitle: '売上・仕入・現金',
  lessons: [
    {
      id: 'L21',
      no: 21,
      title: '掛け売上・掛け仕入の仕訳',
      goal: '現金と掛けの売上・仕入を、正しい勘定の借方・貸方に記帳できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D1(a)'],
      slides: [
        {
          title: '立て替えたランチ代で考える',
          paras: ['友達のランチ代1,000円を立て替えた。お金はまだ戻ってこないけれど、「1,000円を返してもらう権利」は今日から持っている。', '商売では、これが毎日起きる。品物を先に渡して、代金は後でもらう。これを掛け（on credit）という。その場で払うのは現金取引（cash）。']
        },
        {
          title: 'お店の4つの基本の形',
          paras: ['お店は売る側にも、買う側にもなる。「売る・仕入れる」と「現金・掛け」を組み合わせると4つの形になる。'],
          table: {
            caption: '売上・仕入の仕訳の形',
            head: ['取引', '借方 Dr', '貸方 Cr'],
            rows: [
              ['現金で売る', 'Cash（現金）', 'Revenue（売上）'],
              ['掛けで売る', 'Trade receivables（売掛金）', 'Revenue（売上）'],
              ['現金で仕入れる', 'Purchases（仕入）', 'Cash（現金）'],
              ['掛けで仕入れる', 'Purchases（仕入）', 'Trade payables（買掛金）']
            ]
          },
          note: { kind: 'tip', text: '試験では Cash の代わりに Bank（銀行）と書かれることも多い。書く側は同じ。' }
        },
        {
          title: '掛けで売った日',
          paras: ['4月1日、近所のカフェに冷凍たこ焼き $500 を掛けで売った。代金は5月1日にもらう約束。', '売上（revenue）は収益なので貸方に増える。代金を「もらう権利」の売掛金（trade receivables）は資産なので借方に増える。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '500' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '500' }
          ]
        },
        {
          title: 'お金をもらった日',
          paras: ['5月1日、カフェから $500 が入金された。もらう権利がお金に姿を変えただけなので、売掛金を減らして現金を増やす。', '売上は4月1日にもう記録した。ここで Revenue を書くと、同じ売上を2回数えてしまう。'],
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '500' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '500' }
          ]
        },
        {
          title: '掛けで仕入れた日・払った日',
          paras: ['粉屋から小麦粉 $200 を掛けで仕入れた。売るため・材料にするために買う品物は、仕入（purchases）という費用の勘定の借方に書く。払う義務の買掛金（trade payables）は負債なので貸方に増える。', '後で $200 を払った日は Dr Trade payables / Cr Cash。義務が消えて、現金が減る。仕入はもう増えない。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '200' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '200' }
          ]
        },
        {
          title: 'なぜ？ 売上は売った日に記録する',
          paras: ['稼いだのは、品物を渡して仕事を終えた4月。5月の入金は、代金を回収しただけ。入金の日に売上を書くと、4月は売上ゼロ、5月は何も売っていないのに売上 $500 になり、本当の調子が分からない。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="掛けで売った日と入金の日は別" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">売った日とお金の日は別</text><text x="115" y="64" text-anchor="middle" fill="var(--ink)">4月1日 売った</text><text x="325" y="64" text-anchor="middle" fill="var(--ink)">5月1日 入金</text><line x1="115" y1="84" x2="325" y2="84" stroke="var(--edge)" stroke-width="2"/><circle cx="115" cy="84" r="7" fill="var(--ink)"/><circle cx="325" cy="84" r="7" fill="var(--quiet)"/><rect x="20" y="110" width="190" height="136" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売上を記録する</text><text x="115" y="168" text-anchor="middle" fill="var(--ink)">Dr 売掛金 $500</text><text x="115" y="192" text-anchor="middle" fill="var(--ink)">Cr 売上 $500</text><text x="115" y="226" text-anchor="middle" fill="var(--ink)">もらう権利が生まれる</text><rect x="230" y="110" width="190" height="136" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">権利がお金に変わる</text><text x="325" y="168" text-anchor="middle" fill="var(--ink)">Dr 現金 $500</text><text x="325" y="192" text-anchor="middle" fill="var(--ink)">Cr 売掛金 $500</text><text x="325" y="226" text-anchor="middle" fill="var(--ink)">売上は増えない</text><text x="220" y="280" text-anchor="middle" fill="var(--ink)">損益計算書の売上に入るのは4月だけ</text></svg>`,
          caption: 'まだもらっていない代金は、売掛金として財政状態計算書（写真）に残る。'
        },
        {
          title: 'Purchases に入れるもの・入れないもの',
          paras: ['ACCA では、売るために買う品物は Inventory（在庫）ではなく Purchases の借方に書く。期末に残った在庫の調整は、棚卸資産の部で学ぶ。'],
          list: ['入れる: 小麦粉、タコ、仕入れた冷凍たこ焼き（売り物・材料）', '入れない: 配達用のバン、たこ焼き器（長く使う道具＝非流動資産 non-current assets）', '入れない: 家賃、電気代（それぞれの費用の勘定）']
        },
        {
          title: '例題: 3月の売上・売掛金・買掛金',
          example: {
            problem: 'たこ焼き屋の3月。月初の売掛金・買掛金はどちらも $0。①現金売上 $300 ②カフェへの掛け売上 $800 ③小麦粉の掛け仕入 $450 ④カフェから $500 入金 ⑤粉屋へ $300 支払い。3月の売上と、月末の売掛金・買掛金はいくら？',
            steps: ['売上は「売った」取引だけを足す: ① $300 ＋ ② $800 ＝ $1,100。④の入金は回収なので足さない。', '売掛金: $0 ＋ 掛け売上 $800 − 入金 $500 ＝ $300', '買掛金: $0 ＋ 掛け仕入 $450 − 支払い $300 ＝ $150', '仕入（費用）は③の $450。⑤の支払いは義務を消しただけで、費用ではない。'],
            answer: '売上 $1,100、売掛金 $300（借方残高）、買掛金 $150（貸方残高）'
          }
        },
        {
          title: 'よくある間違い',
          list: ['入金の日に、もう一度 Revenue を貸方に書く → 売上の二重計上。売上は売った日だけ。', '仕入を Inventory の借方に書く → ACCA では Purchases。', '配達用の車を Purchases にする → 長く使う道具は非流動資産。'],
          note: { kind: 'warn', text: '迷ったら「品物を売った・買ったのか」「お金が動いただけか」を先に見分ける。お金が動いただけなら、売上・仕入は動かない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['掛け売上は Dr Trade receivables / Cr Revenue。掛け仕入は Dr Purchases / Cr Trade payables', '売上は売った日に1回だけ。入金・支払いの日は売掛金・買掛金を消すだけ', '売るために買う品物は Purchases。長く使う道具は非流動資産']
        },
        {
          title: '英単語',
          words: [
            ['revenue / sales', 'レベニュー / セールス', '売上（収益）'],
            ['on credit', 'オン・クレジット', '掛けで（代金は後払い）'],
            ['trade receivables', 'トレード・レシーバブルズ', '売掛金（客からもらう権利）'],
            ['trade payables', 'トレード・ペイアブルズ', '買掛金（仕入先に払う義務）'],
            ['purchases', 'パーチェシズ', '仕入（売るために買った品物）'],
            ['goods for resale', '', '売るための品物'],
            ['cash sale / credit sale', '', '現金売上 / 掛け売上']
          ]
        }
      ],
      quiz: [
        { q: 'カフェに $600 の品物を掛けで売った。正しい仕訳は？', choices: ['Dr Trade receivables $600 / Cr Revenue $600', 'Dr Revenue $600 / Cr Trade receivables $600', 'Dr Cash $600 / Cr Revenue $600', 'Dr Trade payables $600 / Cr Revenue $600'], answer: 0, explain: 'もらう権利（資産）が増えるので売掛金は借方、売上（収益）は貸方。2番目は借方と貸方が逆。3番目は現金で売ったときの仕訳。4番目は買掛金（払う義務）と取り違えている。' },
        { q: 'A business buys goods for resale on credit for $400. Which journal entry records this transaction?', choices: ['Dr Purchases $400, Cr Trade payables $400', 'Dr Trade payables $400, Cr Purchases $400', 'Dr Inventory $400, Cr Trade payables $400', 'Dr Purchases $400, Cr Trade receivables $400'], answer: 0, explain: '売るための品物は Purchases の借方、払う義務の買掛金は貸方。ACCA では仕入を Inventory に書かない。売掛金はお客さんからもらう権利なので関係ない。' },
        { q: 'A credit customer pays $250 that it owed for goods bought last month. What is the double entry?', choices: ['Dr Cash $250, Cr Trade receivables $250', 'Dr Cash $250, Cr Revenue $250', 'Dr Trade receivables $250, Cr Cash $250', 'Dr Revenue $250, Cr Cash $250'], answer: 0, explain: '売上は先月、売った日に記録済み。今日は権利がお金に変わっただけ。2番目は売上の二重計上になる。' },
        { q: '4月の取引: 現金売上 $200、掛け売上 $900、掛けのお客さんからの入金 $600。4月の売上（revenue）はいくら？', type: 'number', answer: 1100, unit: '$', explain: '売上は売った取引だけ: $200 ＋ $900 ＝ $1,100。入金 $600 は売掛金の回収なので足さない。足して $1,700 にするのは二重計上。' },
        { q: 'Opening trade receivables were $1,200. During the month credit sales were $3,000 and cash received from credit customers was $2,700. What is the closing trade receivables balance?', type: 'number', answer: 1500, unit: '$', explain: '$1,200 ＋ $3,000 − $2,700 ＝ $1,500。掛け売上で増え、入金で減る。' },
        { q: '配達用のバンを $5,000 で掛けで買った。借方に書く勘定は？', choices: ['車両などの非流動資産', 'Purchases（仕入）', 'Trade receivables（売掛金）', 'Revenue（売上）'], answer: 0, explain: 'バンは売り物ではなく、長く使う道具なので非流動資産。Purchases は売るため・材料にするための品物だけ。貸方は払う義務だが、品物の仕入先への買掛金とは分けて、試験では other payables（その他の未払金）と書かれることが多い。' }
      ]
    },
    {
      id: 'L22',
      no: 22,
      title: '返品（売上戻り・仕入戻し）',
      goal: '売上戻り・仕入戻しを正しく記帳し、純売上・純仕入を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D1(b)'],
      slides: [
        {
          title: '通販の返品で考える',
          paras: ['ネットで買った服のサイズが合わず、返品した。お店はカードの請求を取り消す。', 'お店から見ると、一度「売った」ことの一部がなかったことになる。会計では、この取り消しを返品として記録する。売る側から見た返品が売上戻り、買う側から見た返品が仕入戻し。']
        },
        {
          title: '返品は品物が逆に動く',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="売上戻りと仕入戻しの向き" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">返品は品物が逆向きに動く</text><text x="20" y="70" fill="var(--quiet)">上の矢印＝ふつうの流れ、下の矢印＝返品</text><rect x="20" y="96" width="96" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="68" y="133" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">仕入先</text><rect x="172" y="96" width="96" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="133" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">お店</text><rect x="324" y="96" width="96" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="372" y="133" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">お客さん</text><path d="M122 114H160" stroke="var(--quiet)" stroke-width="2"/><path d="M160 109L168 114L160 119z" fill="var(--quiet)"/><path d="M274 114H312" stroke="var(--quiet)" stroke-width="2"/><path d="M312 109L320 114L312 119z" fill="var(--quiet)"/><path d="M168 142H130" stroke="var(--ink)" stroke-width="2"/><path d="M130 137L122 142L130 147z" fill="var(--ink)"/><path d="M320 142H282" stroke="var(--ink)" stroke-width="2"/><path d="M282 137L274 142L282 147z" fill="var(--ink)"/><text x="144" y="192" text-anchor="middle" font-weight="600" fill="var(--ink)">仕入戻し</text><text x="144" y="212" text-anchor="middle" font-size="12.5" fill="var(--quiet)">returns</text><text x="144" y="228" text-anchor="middle" font-size="12.5" fill="var(--quiet)">outwards</text><text x="296" y="192" text-anchor="middle" font-weight="600" fill="var(--ink)">売上戻り</text><text x="296" y="212" text-anchor="middle" font-size="12.5" fill="var(--quiet)">returns</text><text x="296" y="228" text-anchor="middle" font-size="12.5" fill="var(--quiet)">inwards</text><text x="220" y="268" text-anchor="middle" fill="var(--ink)">お店から見て「入る」か「出る」かで名前が決まる</text></svg>`,
          caption: 'お店に品物が「入ってくる」のが returns inwards（売上戻り）、お店から「出ていく」のが returns outwards（仕入戻し）。'
        },
        {
          title: '売上戻りの仕訳',
          paras: ['カフェに掛けで売った冷凍たこ焼き $500 のうち、$50 分が溶けていて返品された。お店はカフェに貸方票（credit note）を送り、「$50 は請求しません」と伝える。', '売上を取り消す分は Sales returns（売上戻り）の借方に書き、カフェからもらう権利（売掛金）を $50 減らす。'],
          journal: [
            { side: 'Dr', account: 'Sales returns（売上戻り）', amount: '50' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '50' }
          ],
          note: { kind: 'tip', text: '現金で売った品物をその場で返金したときは、貸方が Cash になる。' }
        },
        {
          title: '仕入戻しの仕訳',
          paras: ['粉屋から掛けで仕入れた小麦粉のうち、$30 分が湿っていたので返した。買う側は借方票（debit note）で返品を伝え、粉屋は貸方票を送ってくる。', '払う義務（買掛金）が $30 減るので借方。仕入を取り消す分は Purchase returns（仕入戻し）の貸方に書く。'],
          journal: [
            { side: 'Dr', account: 'Trade payables（買掛金）', amount: '30' },
            { side: 'Cr', account: 'Purchase returns（仕入戻し）', amount: '30' }
          ],
          note: { kind: 'tip', text: '現金で仕入れた品物を返して返金を受けたときは、借方が Cash になる。' }
        },
        {
          title: 'なぜ？ 売上を直接減らさない理由',
          paras: ['Revenue を $50 減らしても、最後の数字は同じになる。それでも別の勘定に分けるのは、返品がどれだけあったかを見えるようにするため。', '返品が急に増えたら、品質や配送に問題があるサイン。売上と混ぜると、このサインが消えてしまう。財務諸表を作るときに、売上から引いて純額で表示する。']
        },
        {
          title: '損益計算書ではこう引く',
          paras: ['( ) はマイナスの意味。純仕入は、後の部で学ぶ売上原価（cost of sales）の計算に使う。'],
          table: {
            caption: '損益計算書の抜粋（売上と仕入の部分）',
            head: ['項目', '$'],
            rows: [
              ['Revenue（売上）', '10,000'],
              ['Less: sales returns（売上戻り）', '(600)'],
              ['Net revenue（純売上）', '9,400'],
              ['Purchases（仕入）', '4,000'],
              ['Less: purchase returns（仕入戻し）', '(250)'],
              ['Net purchases（純仕入）', '3,750']
            ]
          }
        },
        {
          title: '例題: 返品があるときの売掛金',
          example: {
            problem: 'たこ焼き屋の売掛金。月初の残高 $1,000。今月の掛け売上 $6,000、売上戻り $400、お客さんからの入金 $5,100。月末の売掛金はいくら？',
            steps: ['売掛金を増やすもの（借方）: 月初 $1,000 ＋ 掛け売上 $6,000 ＝ $7,000', '売掛金を減らすもの（貸方）: 売上戻り $400 ＋ 入金 $5,100 ＝ $5,500', '月末の残高: $7,000 − $5,500 ＝ $1,500（借方残高）'],
            answer: '$1,500'
          }
        },
        {
          title: 'T勘定で見る',
          paras: ['売上戻りは、売掛金の貸方（減る側）に入る。入金と同じ側。', '差額の $1,500 は Balance c/d として少ない貸方に書き、両側の合計を $7,000 にそろえる。本当の残高は借方残高 $1,500（資産）。'],
          tAccount: {
            name: 'Trade receivables',
            debit: [['Balance b/d', '1,000'], ['Revenue', '6,000']],
            credit: [['Sales returns', '400'], ['Cash', '5,100'], ['Balance c/d', '1,500']]
          }
        },
        {
          title: 'よくある間違い',
          list: ['売上戻りを貸方に書く → 売上の反対なので借方（Dr Sales returns）。', 'inwards と outwards を逆に覚える → お店に入ってくる＝お客さんからの返品＝売上戻り。', '記帳のとき、Sales returns の借方に書いたうえで Revenue 勘定の借方にも書く → 二重に引いている。記帳は Sales returns だけ。'],
          note: { kind: 'warn', text: '売上戻りは「売上の反対」なので借方、仕入戻しは「仕入の反対」なので貸方。元の取引の反対側に書く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上戻り: Dr Sales returns / Cr Trade receivables（現金なら Cash）', '仕入戻し: Dr Trade payables / Cr Purchase returns', '損益計算書では、売上 − 売上戻り、仕入 − 仕入戻しの純額にする']
        },
        {
          title: '英単語',
          words: [
            ['sales returns', 'セールス・リターンズ', '売上戻り（お客さんからの返品）'],
            ['returns inwards', 'リターンズ・インワーズ', 'sales returns の別名'],
            ['purchase returns', 'パーチェス・リターンズ', '仕入戻し（仕入先への返品）'],
            ['returns outwards', 'リターンズ・アウトワーズ', 'purchase returns の別名'],
            ['credit note', 'クレジット・ノート', '貸方票（請求を減らす書類）'],
            ['debit note', 'デビット・ノート', '借方票（買う側が返品を伝える書類）'],
            ['net revenue', '', '純売上（売上 − 売上戻り）']
          ]
        }
      ],
      quiz: [
        { q: 'お客さんから、掛けで売った $120 の品物が返品された。正しい仕訳は？', choices: ['Dr Sales returns $120 / Cr Trade receivables $120', 'Dr Trade receivables $120 / Cr Sales returns $120', 'Dr Purchase returns $120 / Cr Trade receivables $120', 'Dr Trade payables $120 / Cr Sales returns $120'], answer: 0, explain: '売上の反対なので Sales returns は借方。もらう権利が減るので売掛金は貸方。2番目は借方と貸方が逆。3番目は仕入戻しと取り違えている。4番目は買掛金（仕入先に払う義務）なので関係ない。' },
        { q: 'A business returns goods costing $80 to a supplier. The goods had been bought on credit. What is the journal entry?', choices: ['Dr Trade payables $80, Cr Purchase returns $80', 'Dr Purchase returns $80, Cr Trade payables $80', 'Dr Trade receivables $80, Cr Purchase returns $80', 'Dr Trade payables $80, Cr Sales returns $80'], answer: 0, explain: '払う義務が減るので買掛金は借方、仕入を取り消すので Purchase returns は貸方。2番目は逆。3番目の売掛金はお客さん側の勘定。4番目は売上戻りと取り違えている。' },
        { q: 'returns inwards はどれ？', choices: ['お客さんから返品された品物（売上戻り）', '仕入先へ返した品物（仕入戻し）', '仕入先から届いた品物（仕入）', 'お客さんに届けた品物（売上）'], answer: 0, explain: 'お店に品物が「入ってくる」返品なので、お客さんからの返品＝売上戻り。仕入先へ返すのは outwards。' },
        { q: 'At 1 May trade receivables were $4,000. In May, credit sales were $20,000, sales returns were $1,500 and cash received from credit customers was $18,000. What were trade receivables at 31 May?', type: 'number', answer: 4500, unit: '$', explain: '$4,000 ＋ $20,000 − $1,500 − $18,000 ＝ $4,500。売上戻りは入金と同じく売掛金を減らす。足してしまうと $7,500 になる。' },
        { q: '売上 $25,000、売上戻り $1,200、仕入 $14,000、仕入戻し $600。純売上（net revenue）はいくら？', type: 'number', answer: 23800, unit: '$', explain: '純売上は売上 − 売上戻り: $25,000 − $1,200 ＝ $23,800。仕入と仕入戻しは純仕入（$13,400）の計算に使うもので、純売上には関係ない。' },
        { q: 'Revenue is $50,000, returns inwards are $2,000 and returns outwards are $1,000. What is net revenue?', choices: ['$48,000', '$47,000', '$49,000', '$51,000'], answer: 0, explain: '売上から引くのは returns inwards（売上戻り）だけ: $50,000 − $2,000 ＝ $48,000。returns outwards は仕入戻しなので仕入から引く。両方引くと $47,000 になる。' }
      ]
    },
    {
      id: 'L23',
      no: 23,
      title: '売上税のしくみ',
      goal: '売上税がどう流れ、なぜ登録事業者の売上・費用に入らないのかを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D1(c)'],
      slides: [
        {
          title: '消費税のレシートで考える',
          paras: ['コンビニで1,000円のノートを買うと、レジで1,100円払う。この100円は消費税。お店のもうけではなく、お店がいったん預かって国に納める。', '日本の消費税にあたる税を、ACCA では売上税（sales tax）と呼ぶ。英国の VAT のように国によって名前と税率は違う。試験では税率が問題文に書いてある。']
        },
        {
          title: '預かった税と、払った税',
          paras: ['税務当局（tax authority）に登録した事業者（registered）は、売るときに税を上乗せして預かり、仕入れるときは仕入先に税を払う。'],
          list: ['output tax（売上で預かった税）: お客さんから預かる。国に払う義務になる', 'input tax（仕入で払った税）: 仕入先に払った。国から取り戻せる'],
          formula: '国に納める額 ＝ output tax − input tax'
        },
        {
          title: 'たこ焼き1皿で、税の流れを追う',
          paras: ['税率20%の国で考える。農家が小麦をたこ焼き屋に売り、たこ焼き屋がお客さんに売る。'],
          svg: `<svg viewBox="0 0 440 384" role="img" aria-label="売上税は取引の途中で少しずつ国へ納められる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">税は少しずつ国へ届く</text><rect x="20" y="52" width="400" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">小麦農家</text><text x="40" y="106" fill="var(--ink)">小麦 $100＋税 $20 を店に売る</text><text x="400" y="80" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">国へ $20</text><path d="M220 128V140" stroke="var(--quiet)" stroke-width="2"/><path d="M214 140L220 148L226 140z" fill="var(--quiet)"/><rect x="20" y="152" width="400" height="100" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="180" font-size="16" font-weight="600" fill="var(--ink)">たこ焼き屋</text><text x="40" y="206" fill="var(--ink)">たこ焼き $300＋税 $60 を売る</text><text x="40" y="232" fill="var(--ink)">国へ払う: $60 − $20 ＝ $40</text><text x="400" y="180" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">国へ $40</text><path d="M220 256V268" stroke="var(--quiet)" stroke-width="2"/><path d="M214 268L220 276L226 268z" fill="var(--quiet)"/><rect x="20" y="280" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="308" font-size="16" font-weight="600" fill="var(--ink)">お客さん</text><text x="40" y="332" fill="var(--ink)">$360 を払う。税 $60 は戻ってこない</text><text x="400" y="308" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">負担 $60</text><text x="220" y="372" text-anchor="middle" fill="var(--ink)">国に届いた税: $20 ＋ $40 ＝ $60</text></svg>`,
          caption: '国に届いた $60 は、最後のお客さんが払った税と同じ。途中の事業者は、税を負担していない。'
        },
        {
          title: 'なぜ？ 税は事業者の収益でも費用でもない',
          paras: ['登録事業者にとって、output tax は国の代わりに預かったお金、input tax は後で取り戻せるお金。どちらも自分のもうけや出費ではない。', 'だから売上と仕入は税抜きの金額で記録する。たこ焼き屋の売上は $360 ではなく $300、仕入は $120 ではなく $100。税を負担するのは、取り戻す相手がいない最後の消費者だけ。']
        },
        {
          title: '売上税勘定（sales tax account）',
          paras: ['預かった税と払った税は、売上税勘定1つにまとめる。output tax は国への負債なので貸方、input tax は取り戻せる分なので借方。'],
          tAccount: {
            name: 'Sales tax',
            debit: [['Input tax（仕入分）', '20'], ['Balance c/d', '40']],
            credit: [['Output tax（売上分）', '60']]
          },
          after: '差額 $40 は貸方残高。国に払う負債（流動負債）。input tax の方が多いと借方残高になり、国から還付してもらう資産（流動資産）になる。'
        },
        {
          title: '登録していない事業者',
          paras: ['小さな事業者などで税の登録をしていないと、売るときに税を上乗せできず、仕入で払った税も取り戻せない。', 'だから払った税は、そのまま自分のコストになる。登録していないお店が小麦粉を $100＋税 $20 で買ったら、Purchases に $120 と書く。売上税勘定は使わない。', '登録事業者でも、決まりで取り戻せない税（irrecoverable sales tax）は同じ考え方で、買った品物や資産の原価に含める。']
        },
        {
          title: '登録している・していないの比較',
          table: {
            caption: '売上税の扱い',
            head: ['項目', '登録している', '登録していない'],
            rows: [
              ['売るとき', '税を上乗せして預かる', '税を上乗せしない'],
              ['仕入で払った税', '取り戻せる（借方）', '取り戻せない'],
              ['仕入の記録', '税抜きの金額', '税込みの金額'],
              ['税の負担', 'しない', '自分で負担する']
            ]
          }
        },
        {
          title: 'よくある間違い',
          list: ['税込みの $360 を売上にする → 売上は税抜きの $300。', '売上税を費用や収益だと思う → 登録事業者には預かり金。', '売上税勘定の貸方残高を資産だと思う → 国に払う負債。'],
          note: { kind: 'warn', text: '残高の向きで意味が決まる。国に払う＝貸方残高（負債）、国からもらう＝借方残高（資産）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上税は国の代わりに預かるお金。最後に負担するのは消費者', '納める額 ＝ output tax − input tax', '登録事業者は売上・仕入を税抜きで記録する。登録していなければ税込みがコスト']
        },
        {
          title: '英単語',
          words: [
            ['sales tax', 'セールス・タックス', '売上税（日本の消費税にあたる）'],
            ['output tax', 'アウトプット・タックス', '売上で預かった税'],
            ['input tax', 'インプット・タックス', '仕入で払った税'],
            ['registered', 'レジスタード', '税の登録をしている'],
            ['tax authority', 'タックス・オーソリティ', '税務当局（国）'],
            ['VAT (value added tax)', 'ブイエーティー', '付加価値税。sales tax の一種'],
            ['irrecoverable sales tax', '', '取り戻せない売上税。原価に含める']
          ]
        }
      ],
      quiz: [
        { q: '登録事業者にとって、お客さんから預かった売上税は何？', choices: ['国の代わりに預かったお金（負債）', 'お店の収益', 'お店の費用', 'オーナーの資本'], answer: 0, explain: 'output tax は国に納めるために預かっているだけ。もうけ（収益）ではないので、売上は税抜きで記録する。' },
        { q: 'Who ultimately bears the cost of sales tax?', choices: ['The final consumer', 'The registered business that sells to the consumer', 'The supplier of the raw materials', 'The tax authority'], answer: 0, explain: '途中の登録事業者は、払った input tax を取り戻せる。取り戻す相手がいない最後の消費者が負担する。' },
        { q: 'A sales tax registered business has output tax of $5,000 and input tax of $3,200 for the quarter. How much must it pay to the tax authority?', choices: ['$1,800', '$8,200', '$5,000', '$3,200'], answer: 0, explain: '$5,000 − $3,200 ＝ $1,800。預かった税から、払った税を引いた差額だけ納める。足すと $8,200 になってしまう。' },
        { q: '売上税勘定が借方残高になった。何を意味する？', choices: ['国から還付してもらう（資産）', '国に払う（負債）', 'お店の費用が出た', 'お店の売上が増えた'], answer: 0, explain: 'input tax（借方）が output tax（貸方）より多いと借方残高。払いすぎた税を国から取り戻せるので資産。' },
        { q: '税の登録をしていないお店が、品物を $200 ＋ 売上税 $40 で仕入れた。Purchases に記録する額は？', choices: ['$240', '$200', '$40', '$160'], answer: 0, explain: '登録していないと input tax を取り戻せないので、払った税もコストになる。税込みの $240。登録事業者なら $200。' }
      ]
    },
    {
      id: 'L24',
      no: 24,
      title: '売上税の計算と記帳',
      goal: '税抜き・税込みの金額から売上税を計算し、仕訳と売上税勘定に記帳できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D1(d)'],
      slides: [
        {
          title: 'レシートを逆から計算する',
          paras: ['税抜き1,000円のノートに10%の消費税がつくと、税は100円、税込みは1,100円。', 'では税込み1,100円しか分からないとき、税はいくら？ 1,100円 × 10% ＝ 110円は間違い。それは税込みの金額にさらに税をかけている。正しくは 1,100円 × 10/110 ＝ 100円。']
        },
        {
          title: '2つの求め方',
          paras: ['税率20%で考える。問題文の excluding sales tax は税抜き、including sales tax は税込み。'],
          table: {
            caption: '売上税の求め方（税率20%）',
            head: ['分かっている金額', '売上税の求め方'],
            rows: [
              ['税抜き $500（net / exclusive）', '$500 × 20% ＝ $100'],
              ['税込み $600（gross / inclusive）', '$600 × 20/120 ＝ $100']
            ]
          },
          after: '税率が15%なら 15/115、17.5%なら 17.5/117.5 をかける。税抜きの金額は、税込み × 100/120。'
        },
        {
          title: 'なぜ？ 20/120 になる理由',
          paras: ['税込みの金額は、本体100に税20を足した「120」の大きさ。税はそのうちの20なので、税込み × 20/120。'],
          svg: `<svg viewBox="0 0 440 210" role="img" aria-label="税込みの金額は本体100と税20でできている" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">税込みは「120」でできている</text><rect x="20" y="56" width="333" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="186" y="90" text-anchor="middle" font-size="15" fill="var(--ink)">本体（税抜き）100</text><rect x="353" y="56" width="67" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="386" y="90" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">税 20</text><text x="220" y="146" text-anchor="middle" font-size="15" fill="var(--ink)">税込み 120 ＝ 100 ＋ 20</text><text x="220" y="184" text-anchor="middle" fill="var(--ink)">$600 を120に分けると1つ $5。税は20個で $100</text></svg>`
        },
        {
          title: '掛けで売ったときの仕訳',
          paras: ['カフェに冷凍たこ焼きを税抜き $1,000 で掛けで売った（税率20%）。カフェは税込みの $1,200 を払うので、売掛金は $1,200。', '売上は税抜きの $1,000。残りの $200 は国に払う output tax なので、売上税勘定の貸方。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '1,200' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '1,000' },
            { side: 'Cr', account: 'Sales tax（売上税）', amount: '200' }
          ]
        },
        {
          title: '掛けで仕入れたときの仕訳',
          paras: ['粉屋から小麦粉を税抜き $400 で掛けで仕入れた。払う義務は税込みの $480。', '仕入は税抜きの $400。input tax $80 は国から取り戻せるので、売上税勘定の借方。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '400' },
            { side: 'Dr', account: 'Sales tax（売上税）', amount: '80' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '480' }
          ],
          after: '現金で売買したときは、売掛金・買掛金の代わりに Cash を税込みの金額で使う。税の書き方は同じ。'
        },
        {
          title: '返品と納付も税ごと動く',
          paras: ['カフェから税抜き $100 分が返品されたら、その分の税 $20 も取り消す。'],
          journal: [
            { side: 'Dr', account: 'Sales returns（売上戻り）', amount: '100' },
            { side: 'Dr', account: 'Sales tax（売上税）', amount: '20' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '120' }
          ],
          after: '仕入戻しはその逆: Dr Trade payables（税込み）/ Cr Purchase returns（税抜き）/ Cr Sales tax（税）。ここまでの売上税勘定は $200 − $80 − $20 ＝ $100 の貸方残高（国に払う額）。'
        },
        {
          title: '例題: 期末の売上税勘定',
          example: {
            problem: 'ある四半期。税率20%。期首の売上税勘定は $3,000 の貸方残高（国に払う額）。売上は税抜き $60,000、仕入は税込み $36,000。期中に国へ $3,000 を納めた。期末の売上税勘定の残高は？',
            steps: ['output tax: 税抜き $60,000 × 20% ＝ $12,000（貸方）', 'input tax: 税込み $36,000 × 20/120 ＝ $6,000（借方）', '貸方の合計: 期首 $3,000 ＋ $12,000 ＝ $15,000', '借方の合計: input tax $6,000 ＋ 納付 $3,000 ＝ $9,000', '残高: $15,000 − $9,000 ＝ $6,000。貸方の方が多いので、国に払う負債'],
            answer: '$6,000 の貸方残高（流動負債）'
          }
        },
        {
          title: 'T勘定で見る',
          paras: ['同じ例題を T勘定にする。国に納めた日は Dr Sales tax / Cr Cash、還付を受けた日は Dr Cash / Cr Sales tax。', '本当の相手の勘定は売掛金・買掛金・現金だが、ここでは中身が分かるように output tax・input tax と書く。'],
          tAccount: {
            name: 'Sales tax',
            debit: [['Input tax（仕入分）', '6,000'], ['Cash（納付）', '3,000'], ['Balance c/d', '6,000']],
            credit: [['Balance b/d', '3,000'], ['Output tax（売上分）', '12,000']]
          }
        },
        {
          title: 'よくある間違い',
          list: ['税込み × 20% で税を出す → 税込みからは × 20/120。', '売上を税込みで書く → Revenue は税抜き、売掛金は税込み。', '返品のときに税を取り消し忘れる → 売上戻りは税抜き、税は売上税勘定の借方。'],
          note: { kind: 'warn', text: '問題文が「税抜き（excluding）」か「税込み（including）」かを、計算の前に必ず確認する。ここを読み違えると全部ずれる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['税抜き × 20% ＝ 税、税込み × 20/120 ＝ 税（税率20%のとき）', '売掛金・買掛金は税込み、売上・仕入は税抜き、差額が売上税', '売上税勘定: output tax は貸方、input tax は借方。貸方残高なら国に払う']
        },
        {
          title: '英単語',
          words: [
            ['excluding sales tax', 'エクスクルーディング', '税抜き（net、exclusive）'],
            ['including sales tax', 'インクルーディング', '税込み（gross、inclusive）'],
            ['net / gross', 'ネット / グロス', '税抜き / 税込み'],
            ['sales tax payable', '', '国に払う売上税（負債）'],
            ['sales tax receivable', '', '国から還付される売上税（資産）'],
            ['quarter', 'クォーター', '四半期（3か月）']
          ]
        }
      ],
      quiz: [
        { q: '税込み $960 の売上。税率20%。売上税はいくら？', type: 'number', answer: 160, unit: '$', explain: '税込みなので $960 × 20/120 ＝ $160。$960 × 20% ＝ $192 とするのは、税込みにさらに税をかけた間違い。' },
        { q: 'A business sells goods on credit for $2,400 including sales tax at 20%. What is the correct journal entry?', choices: ['Dr Trade receivables $2,400, Cr Revenue $2,000, Cr Sales tax $400', 'Dr Trade receivables $2,400, Cr Revenue $1,920, Cr Sales tax $480', 'Dr Trade receivables $2,880, Cr Revenue $2,400, Cr Sales tax $480', 'Dr Trade receivables $2,000, Dr Sales tax $400, Cr Revenue $2,400'], answer: 0, explain: '税込み $2,400 × 20/120 ＝ $400 が税、売上は $2,000。2番目は税込みに × 20% をした間違い。3番目は税込みを税抜きと読み違えた。4番目は売上を税込みにし、税を借方にしている。' },
        { q: 'At 1 January a business owed $4,500 to the tax authority for sales tax. In the quarter, sales were $50,000 and purchases were $30,000, both excluding sales tax at 20%. It paid $4,500 to the tax authority. What is the balance owed on the sales tax account at 31 March?', type: 'number', answer: 4000, unit: '$', explain: 'output tax $50,000 × 20% ＝ $10,000、input tax $30,000 × 20% ＝ $6,000。$4,500 ＋ $10,000 − $6,000 − $4,500 ＝ $4,000（貸方残高＝国に払う額）。' },
        { q: '小麦粉を税抜き $700 で掛けで仕入れた（税率20%、登録事業者）。正しい仕訳は？', choices: ['Dr Purchases $700 / Dr Sales tax $140 / Cr Trade payables $840', 'Dr Purchases $840 / Cr Trade payables $840', 'Dr Purchases $560 / Dr Sales tax $140 / Cr Trade payables $700', 'Dr Purchases $700 / Cr Sales tax $140 / Cr Trade payables $560'], answer: 0, explain: '税抜き $700 × 20% ＝ $140。仕入は税抜き、input tax は借方、払う義務は税込み $840。2番目は登録していない事業者の書き方。3番目は $700 を税込みと読み違えた。4番目は input tax を貸方にしている。' },
        { q: 'お客さんが税込み $360 の品物を返品した（税率20%）。Sales returns に記録する額は？', choices: ['$300', '$360', '$288', '$60'], answer: 0, explain: '売上戻りも税抜きで記録する: $360 × 100/120 ＝ $300。税 $60 は売上税勘定の借方で取り消す。$288 は $360 − $360 × 20% の間違い。' },
        { q: 'ある月の output tax は $9,000。仕入は税込みで $42,000（税率20%）。国に納める額はいくら？', type: 'number', answer: 2000, unit: '$', explain: 'input tax は税込み $42,000 × 20/120 ＝ $7,000。納める額は $9,000 − $7,000 ＝ $2,000。$42,000 × 20% ＝ $8,400 と計算すると $600 になってしまう。' }
      ]
    },
    {
      id: 'L25',
      no: 25,
      title: '受けた割引',
      goal: '仕入先の早期支払割引を使ったときの「受けた割引」を計算して記帳できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D1(e)'],
      slides: [
        {
          title: 'ジムの会費で考える',
          paras: ['ジムの会費が月10,000円。「5日までに払えば2%引き」と言われた。5日までに払えば9,800円で済む。', '200円安くなったのは、ジムが値下げしたからではない。こちらが早く払ったことへのごほうび。商売でも、仕入先が「早く払えば割引」と言うことがよくある。']
        },
        {
          title: 'お店の例: 早期支払割引',
          paras: ['粉屋から小麦粉を $1,000 で掛けで仕入れた。請求書には「10日以内に払えば2%引き。それ以外は30日以内に全額」とある。', 'これを早期支払割引（settlement discount）という。買う側がこの割引を実際に使うと、受けた割引（discounts received）になる。'],
          formula: '割引額 ＝ 請求額 × 割引率（$1,000 × 2% ＝ $20）'
        },
        {
          title: '仕入れた日は全額で記録',
          paras: ['仕入れた日には、早く払うかどうかはまだ決まっていない。だから請求書の全額 $1,000 で記録する。割引はここでは書かない。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '1,000' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '1,000' }
          ]
        },
        {
          title: '10日以内か、過ぎてからか',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="割引期間内に払うと割引を受けられる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">早く払えば、払う額が減る</text><text x="40" y="62" text-anchor="middle" fill="var(--ink)">0日</text><text x="160" y="62" text-anchor="middle" fill="var(--ink)">10日</text><text x="400" y="62" text-anchor="middle" fill="var(--ink)">30日</text><line x1="40" y1="80" x2="400" y2="80" stroke="var(--edge)" stroke-width="2"/><line x1="40" y1="80" x2="160" y2="80" stroke="var(--accent)" stroke-width="6"/><text x="100" y="104" text-anchor="middle" fill="var(--ink)">割引期間</text><text x="280" y="104" text-anchor="middle" fill="var(--quiet)">全額で払う期間</text><rect x="20" y="124" width="190" height="124" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="154" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">10日以内に払う</text><text x="115" y="182" text-anchor="middle" fill="var(--ink)">現金 $980</text><text x="115" y="206" text-anchor="middle" fill="var(--ink)">割引 $20 は収益</text><text x="115" y="232" text-anchor="middle" font-size="12.5" fill="var(--quiet)">discounts received</text><rect x="230" y="124" width="190" height="124" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="154" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">10日を過ぎて払う</text><text x="325" y="182" text-anchor="middle" fill="var(--ink)">現金 $1,000</text><text x="325" y="206" text-anchor="middle" fill="var(--ink)">割引はなし</text><text x="220" y="280" text-anchor="middle" fill="var(--ink)">どちらでも、買掛金 $1,000 は全部消える</text></svg>`,
          caption: '10日を過ぎて払ったときの仕訳は Dr Trade payables $1,000 / Cr Cash $1,000。割引は出てこない。'
        },
        {
          title: '早く払った日',
          paras: ['8日目に $980 を払った。これで粉屋への $1,000 の義務は全部なくなる。払った $980 との差 $20 が受けた割引。'],
          journal: [
            { side: 'Dr', account: 'Trade payables（買掛金）', amount: '1,000' },
            { side: 'Cr', account: 'Cash（現金）', amount: '980' },
            { side: 'Cr', account: 'Discounts received（受けた割引）', amount: '20' }
          ]
        },
        {
          title: 'なぜ？ 割引は収益になる',
          paras: ['$20 は、小麦粉の値段が下がった分ではない。お店が「お金を早く払う」と決めたことで得た、お金の管理のごほうび。だから仕入（Purchases）からは引かず、収益（income）として記録する。', '損益計算書では、売上総利益（gross profit、後の部で学ぶ）の下に、その他の収益として足す。記録するのは、実際に早く払った日だけ。']
        },
        {
          title: '例題: 割引額と仕訳',
          example: {
            problem: '仕入先の請求書 $4,500。条件は「14日以内に払えば2%引き」。9日目に払った。払った額と仕訳は？',
            steps: ['9日目なので、割引の期限（14日）に間に合う。', '割引額: $4,500 × 2% ＝ $90', '払う額: $4,500 − $90 ＝ $4,410', '仕訳: Dr Trade payables $4,500 / Cr Cash $4,410 / Cr Discounts received $90'],
            answer: '$4,410 を払い、$90 を受けた割引（収益）にする'
          }
        },
        {
          title: '買掛金の T勘定で確かめる',
          paras: ['期首の買掛金 $3,000、今期の掛け仕入 $12,000、支払い $10,780、受けた割引 $220。受けた割引は、支払いと同じく買掛金を減らす側（借方）に入る。'],
          tAccount: {
            name: 'Trade payables',
            debit: [['Cash', '10,780'], ['Discounts received', '220'], ['Balance c/d', '4,000']],
            credit: [['Balance b/d', '3,000'], ['Purchases', '12,000']]
          },
          after: '期末の買掛金: $3,000 ＋ $12,000 − $10,780 − $220 ＝ $4,000（貸方残高）'
        },
        {
          title: 'よくある間違い',
          list: ['割引を書き忘れ、$20 の買掛金が残ったままになる → 早く払ったら買掛金は全額消す。', '請求書を受け取った日に割引を引いて記録する → 割引は実際に早く払った日に書く。', '受けた割引を Purchases から引く → ACCA では収益（income）。'],
          note: { kind: 'warn', text: '取引値引き（trade discount）は受けた割引ではない。最初から請求額が下がっているだけで、割引の勘定は使わない。次のレッスンで学ぶ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['受けた割引＝仕入先の早期支払割引を、実際に早く払って使ったもの', '仕訳: Dr Trade payables（全額）/ Cr Cash（払った額）/ Cr Discounts received（差額）', '受けた割引は収益。仕入からは引かない']
        },
        {
          title: '英単語',
          words: [
            ['discounts received', 'ディスカウンツ・レシーブド', '受けた割引（収益）'],
            ['settlement discount', 'セトルメント・ディスカウント', '早期支払割引'],
            ['early settlement discount', '', 'settlement discount と同じ意味'],
            ['prompt payment discount', '', '同じ意味の別の言い方'],
            ['payment terms', 'ペイメント・タームズ', '支払条件'],
            ['other income', '', 'その他の収益']
          ]
        }
      ],
      quiz: [
        { q: '請求額 $3,000、条件は「7日以内に払えば3%引き」。5日目に払った。払う現金はいくら？', type: 'number', answer: 2910, unit: '$', explain: '期限内なので割引を使える。$3,000 × 3% ＝ $90、$3,000 − $90 ＝ $2,910。' },
        { q: 'A business pays a supplier invoice of $800 within the discount period and takes a 5% settlement discount. What is the journal entry?', choices: ['Dr Trade payables $800, Cr Cash $760, Cr Discounts received $40', 'Dr Trade payables $760, Cr Cash $760', 'Dr Trade payables $800, Dr Discounts received $40, Cr Cash $840', 'Dr Trade payables $800, Cr Cash $760, Cr Purchases $40'], answer: 0, explain: '買掛金は全額 $800 を消し、払った $760 との差 $40 を受けた割引（収益）として貸方。2番目は買掛金が $40 残ってしまう。3番目は割引を費用のように借方にしている。4番目は仕入から引いている。' },
        { q: 'How are discounts received presented in the statement of profit or loss?', choices: ['As income', 'As an expense', 'As a deduction from revenue', 'As a deduction from trade receivables'], answer: 0, explain: '早く払ったことで得たごほうびなので収益（その他の収益）。売上や売掛金とは関係ない。売掛金はお客さん側の勘定。' },
        { q: '「10日以内なら2%引き」の請求書 $2,000 を受け取った。仕入れた日の仕訳は？', choices: ['Dr Purchases $2,000 / Cr Trade payables $2,000', 'Dr Purchases $1,960 / Cr Trade payables $1,960', 'Dr Purchases $2,000 / Cr Trade payables $1,960 / Cr Discounts received $40', '記録しない（払った日にまとめて書く）'], answer: 0, explain: '仕入れた日には早く払うか決まっていないので、全額で記録する。割引は実際に早く払った日に書く。掛けの取引も、仕入れた日に記録が必要。' },
        { q: 'Opening trade payables were $5,000. Credit purchases for the year were $20,000. Payments to suppliers were $18,620 and discounts received were $380. What were closing trade payables?', type: 'number', answer: 6000, unit: '$', explain: '$5,000 ＋ $20,000 − $18,620 − $380 ＝ $6,000。受けた割引も支払いと同じく買掛金を減らす。引き忘れると $6,380 になる。' },
        { q: '「10日以内なら2%引き」の請求書 $1,000 を、20日目に全額払った。受けた割引はいくら？', choices: ['$0', '$20', '$980', '$1,000'], answer: 0, explain: '期限を過ぎたので割引は使えない。受けた割引は、実際に割引を使ったときだけ記録する。' }
      ]
    }
  ],
  cards: [
    { id: 'L21-1', lesson: 'L21', q: '掛け売上の仕訳は？', a: 'Dr Trade receivables / Cr Revenue' },
    { id: 'L21-2', lesson: 'L21', q: '掛け仕入の仕訳は？', a: 'Dr Purchases / Cr Trade payables' },
    { id: 'L21-3', lesson: 'L21', q: '掛けのお客さんから入金したときの仕訳は？', a: 'Dr Cash / Cr Trade receivables。売上はもう記録済み' },
    { id: 'L21-4', lesson: 'L21', q: '売上を記録するのはいつ？なぜ？', a: '品物を渡した（売った）日。稼いだのはその時だから' },
    { id: 'L21-5', lesson: 'L21', q: '配達用の車を買ったら Purchases？', a: 'いいえ。長く使う道具なので非流動資産' },
    { id: 'L21-6', lesson: 'L21', q: '期末の売掛金の計算は？', a: '期首 ＋ 掛け売上 − 入金' },
    { id: 'L22-1', lesson: 'L22', q: '売上戻り（sales returns）の仕訳は？', a: 'Dr Sales returns / Cr Trade receivables（現金なら Cash）' },
    { id: 'L22-2', lesson: 'L22', q: '仕入戻し（purchase returns）の仕訳は？', a: 'Dr Trade payables / Cr Purchase returns' },
    { id: 'L22-3', lesson: 'L22', q: 'returns inwards と returns outwards の違いは？', a: 'inwards＝お客さんからの返品（売上戻り）、outwards＝仕入先への返品（仕入戻し）' },
    { id: 'L22-4', lesson: 'L22', q: 'なぜ売上を直接減らさず Sales returns に書く？', a: '返品の量を見えるようにするため。品質問題などのサインになる' },
    { id: 'L22-5', lesson: 'L22', q: '純売上（net revenue）の計算は？', a: '売上 − 売上戻り。仕入戻しは仕入から引く' },
    { id: 'L23-1', lesson: 'L23', q: 'output tax と input tax とは？', a: 'output＝売上で預かった税、input＝仕入で払った税' },
    { id: 'L23-2', lesson: 'L23', q: '国に納める売上税の額は？', a: 'output tax − input tax' },
    { id: 'L23-3', lesson: 'L23', q: '売上税を最後に負担するのは誰？', a: '最後の消費者。登録事業者は input tax を取り戻せる' },
    { id: 'L23-4', lesson: 'L23', q: 'なぜ登録事業者は売上を税抜きで記録する？', a: '税は国の代わりに預かったお金で、自分のもうけではないから' },
    { id: 'L23-5', lesson: 'L23', q: '売上税勘定の貸方残高・借方残高の意味は？', a: '貸方＝国に払う負債、借方＝国から還付される資産' },
    { id: 'L23-6', lesson: 'L23', q: '登録していない事業者の仕入は？', a: '税込みの金額で記録する。払った税を取り戻せないから' },
    { id: 'L24-1', lesson: 'L24', q: '税率20%。税抜きの金額から税を出すには？', a: '税抜き × 20%' },
    { id: 'L24-2', lesson: 'L24', q: '税率20%。税込みの金額から税を出すには？', a: '税込み × 20/120（20% をかけるのは間違い）' },
    { id: 'L24-3', lesson: 'L24', q: '税込み $1,200（税率20%）の掛け売上の仕訳は？', a: 'Dr Trade receivables 1,200 / Cr Revenue 1,000 / Cr Sales tax 200' },
    { id: 'L24-4', lesson: 'L24', q: '税抜き $400（税率20%）の掛け仕入の仕訳は？', a: 'Dr Purchases 400 / Dr Sales tax 80 / Cr Trade payables 480' },
    { id: 'L24-5', lesson: 'L24', q: '期末の売上税勘定（貸方残高）の計算は？', a: '期首 ＋ output tax − input tax − 納付額' },
    { id: 'L24-6', lesson: 'L24', q: '税率15%で税込みから税を出すには？', a: '税込み × 15/115' },
    { id: 'L24-7', lesson: 'L24', q: '税込みで掛け仕入した品物を返品したときの仕訳は？', a: 'Dr Trade payables（税込み）/ Cr Purchase returns（税抜き）/ Cr Sales tax（税）' },
    { id: 'L25-1', lesson: 'L25', q: '受けた割引（discounts received）とは？', a: '仕入先の早期支払割引を、実際に早く払って使った分' },
    { id: 'L25-2', lesson: 'L25', q: '割引を使って早く払ったときの仕訳は？', a: 'Dr Trade payables（全額）/ Cr Cash（払った額）/ Cr Discounts received（差額）' },
    { id: 'L25-3', lesson: 'L25', q: '受けた割引は損益計算書のどこ？', a: '収益（その他の収益）。仕入からは引かない' },
    { id: 'L25-4', lesson: 'L25', q: 'なぜ仕入れた日は全額で記録する？', a: 'その時点では早く払うか決まっていないから' },
    { id: 'L25-5', lesson: 'L25', q: '請求書 $4,500、2%引きの期限内に払った。払う額は？', a: '$4,500 − $90 ＝ $4,410' },
    { id: 'L25-6', lesson: 'L25', q: '期末の買掛金の計算は？', a: '期首 ＋ 掛け仕入 − 支払い − 受けた割引（− 仕入戻し）' }
  ]
});
