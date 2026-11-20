(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 3,
  part: 2,
  partTitle: '複式簿記のしくみ',
  lessons: [
    // ───────────────────────── L15 ─────────────────────────
    {
      id: 'L15',
      no: 15,
      title: '仕訳を書く①: 現金取引',
      goal: 'お金がすぐ動く取引を、借方・貸方の仕訳で書けるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['C2(c)', 'C2(d)', 'D2(a)', 'K1:B2(c)', 'K1:C3(b)'],
      slides: [
        {
          title: '1つの出来事で、2か所が動く',
          paras: ['ランチに1,000円払うと、財布の現金が1,000円減って、食費が1,000円増える。1つの出来事で、いつも2か所が動く。', 'この2か所を「借方（debit、左）」と「貸方（credit、右）」に分けて、同じ金額で書いたものが仕訳（journal entry）。']
        },
        {
          title: '仕訳の形',
          paras: ['お店が家賃 $400 を銀行口座から払った。仕訳はこう書く。'],
          journal: [
            { side: 'Dr', account: 'Rent（家賃）', amount: '400' },
            { side: 'Cr', account: 'Bank（銀行預金）', amount: '400' }
          ],
          list: ['上に借方（Dr）、下に貸方（Cr）を書く', '勘定の名前と金額を書く', '借方の合計と貸方の合計は必ず同じ'],
          after: '試験では「Being payment of rent（家賃の支払い）」のような短い説明（narrative）が付くこともある。'
        },
        {
          title: 'ルールのおさらい',
          paras: ['どちら側に書くかは、勘定の種類と「増えたか・減ったか」で決まる。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="借方で増えるものと貸方で増えるもの" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">どちら側で増える？</text><rect x="20" y="52" width="192" height="176" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">借方 Dr（左）で増える</text><text x="44" y="124" font-size="15" fill="var(--ink)">資産 assets</text><text x="44" y="158" font-size="15" fill="var(--ink)">費用 expenses</text><text x="44" y="192" font-size="15" fill="var(--ink)">引出し drawings</text><rect x="228" y="52" width="192" height="176" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">貸方 Cr（右）で増える</text><text x="252" y="124" font-size="15" fill="var(--ink)">負債 liabilities</text><text x="252" y="158" font-size="15" fill="var(--ink)">資本 capital</text><text x="252" y="192" font-size="15" fill="var(--ink)">収益 income</text><rect x="20" y="244" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="270" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">減るときは、反対側に書く</text></svg>`,
          caption: '銀行預金（Bank）は資産。だからお金が入ると借方、出ていくと貸方になる。'
        },
        {
          title: '仕訳を書く3ステップ',
          numbered: ['動いた勘定は？（例: Bank と Rent）', 'それぞれ増えた？ 減った？', 'ルールで借方・貸方を決め、同じ金額を書く'],
          note: { kind: 'tip', text: 'お金がすぐ動く取引（現金取引、cash transaction）は、片方がほぼ必ず Bank。入金なら Dr Bank、支払いなら Cr Bank。先にこれを決めると、もう片方は自然に決まる。' }
        },
        {
          title: '勘定の名前に注意',
          list: ['Purchases（仕入）: 売るために買った材料・商品。費用の勘定', 'Equipment（備品）: たこ焼き器のように何年も使う道具。資産の勘定', 'Bank（銀行預金）: 口座のお金。Cash（現金）: レジや金庫のお金。どちらも資産'],
          after: '同じ「買った」でも、売るためなら Purchases、使い続けるなら資産になる。名前のゆれにも注意: Sales＝Sales revenue＝Revenue、Rent＝Rent expense。どれも同じ勘定。'
        },
        {
          title: 'たこ焼き屋の最初の1か月',
          paras: ['どれも銀行口座でお金がすぐ動いた取引。この8つは、この先のレッスン（T勘定・締め）でも使う。'],
          table: {
            caption: '8つの現金取引の仕訳',
            head: ['取引', '借方 Dr', '貸方 Cr'],
            rows: [
              ['① 元入れ $5,000', 'Bank', 'Capital'],
              ['② 銀行から借入 $2,000', 'Bank', 'Loan'],
              ['③ たこ焼き器 $1,200', 'Equipment', 'Bank'],
              ['④ 材料の仕入 $300', 'Purchases', 'Bank'],
              ['⑤ 家賃 $400', 'Rent', 'Bank'],
              ['⑥ 現金売上 $800', 'Bank', 'Sales'],
              ['⑦ オーナーが私用に $150', 'Drawings', 'Bank'],
              ['⑧ 借入を $500 返済', 'Loan', 'Bank']
            ]
          }
        },
        {
          title: '例題: 仕訳を書いてみる',
          example: {
            problem: 'たこ焼き屋が、売るための材料を $300 で買い、銀行振込で払った。仕訳は？',
            steps: ['動いた勘定は2つ: Purchases（仕入）と Bank', 'Purchases は費用で、増えた → 費用が増えるのは借方', 'Bank は資産で、減った → 資産が減るのは貸方', '金額はどちらも $300。借方合計＝貸方合計になっている'],
            answer: 'Dr Purchases $300 / Cr Bank $300'
          }
        },
        {
          title: 'なぜ？ 左右がいつも同じ金額',
          paras: ['1つの取引を「何を受け取ったか」と「何を差し出したか（どこから来たか）」の両方から書くから。', '家賃なら、受け取ったのは部屋を使うこと（費用）、差し出したのは銀行のお金。左右がいつも同じなので、資産＝資本＋負債の等式もずっと崩れない。これが複式簿記（double entry）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '銀行の明細では、入金が「credit」と書かれている。これは銀行から見た記録（銀行は返すお金＝負債が増える）。お店の帳簿では反対で、入金は Dr Bank。明細の言葉につられないこと。' },
          list: ['オーナーの私用 → 費用ではなく Drawings（引出し）', '借入の返済 → 費用ではなく、Loan（負債）が減る（Dr Loan）']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仕訳は Dr（借方）が上、Cr（貸方）が下。左右は同じ金額', '銀行にお金が入る → Dr Bank、出ていく → Cr Bank', '売るための仕入は Purchases（費用）、使い続ける道具は資産']
        },
        {
          title: '英単語',
          words: [
            ['journal entry', 'ジャーナル・エントリー', '仕訳'],
            ['debit (Dr)', 'デビット', '借方、左側'],
            ['credit (Cr)', 'クレジット', '貸方、右側'],
            ['double entry', 'ダブル・エントリー', '複式簿記'],
            ['narrative', 'ナラティブ', '仕訳に添える短い説明'],
            ['bank / cash', 'バンク / キャッシュ', '銀行預金 / 現金（どちらも資産）'],
            ['purchases', 'パーチェシズ', '仕入（売るための商品・材料、費用）'],
            ['cash transaction', '', '現金取引（お金がすぐ動く取引）']
          ]
        }
      ],
      quiz: [
        { q: 'お店が電気代 $90 を銀行口座から払った。正しい仕訳は？', choices: ['Dr Electricity $90 / Cr Bank $90', 'Dr Bank $90 / Cr Electricity $90', 'Dr Electricity $90 / Cr Capital $90', 'Dr Capital $90 / Cr Bank $90'], answer: 0, explain: '費用が増える → 借方、資産（Bank）が減る → 貸方。2つ目は左右が逆。3つ目と4つ目は資本を動かしているが、お店の口座から費用を払っても資本は直接動かない。' },
        { q: 'A business receives a loan of $3,000 from a bank, paid into its bank account. What is the correct journal entry?', choices: ['Dr Loan $3,000, Cr Bank $3,000', 'Dr Bank $3,000, Cr Loan $3,000', 'Dr Bank $3,000, Cr Capital $3,000', 'Dr Bank $3,000, Cr Sales $3,000'], answer: 1, explain: '銀行にお金が入る → Dr Bank。返す義務（負債）が増える → Cr Loan。1つ目は左右が逆（返済の仕訳）。借りたお金は元入れ（資本）でも売上でもない。' },
        { q: 'The owner withdraws $200 from the business bank account for personal use. What is the correct journal entry?', choices: ['Dr Drawings $200, Cr Bank $200', 'Dr Wages $200, Cr Bank $200', 'Dr Bank $200, Cr Drawings $200', 'Dr Capital $200, Cr Drawings $200'], answer: 0, explain: 'お店とオーナーは別の人。私用はお店の費用（Wages など）ではなく Drawings で、借方で増える。お金が出るので Cr Bank。4つ目は期末に引出しを資本へまとめるときの仕訳で、引き出したときの仕訳ではない。' },
        { q: 'お店の銀行口座は $0 から始まった。元入れ $3,000 と現金売上 $1,200 が入金され、家賃 $500 と備品 $900 を払った。銀行の残高はいくら？', type: 'number', answer: 2800, unit: '$', explain: '入金（Dr Bank）: 3,000 ＋ 1,200 ＝ 4,200。支払い（Cr Bank）: 500 ＋ 900 ＝ 1,400。4,200 − 1,400 ＝ 2,800。' },
        { q: '銀行の明細で、入金の行に「credit」と書いてあった。お店の帳簿ではどちら側？', choices: ['Dr Bank（借方）', 'Cr Bank（貸方）'], answer: 0, explain: '明細は銀行から見た記録。お店から見ると資産（Bank）が増えるので借方。' },
        { q: 'A business makes cash sales of $800, which are paid into the bank. What is the correct journal entry?', choices: ['Dr Sales $800, Cr Bank $800', 'Dr Bank $800, Cr Sales $800', 'Dr Bank $800, Cr Capital $800', 'Dr Purchases $800, Cr Bank $800'], answer: 1, explain: '銀行のお金（資産）が増える → Dr Bank。売上（収益）が増える → Cr Sales。1つ目は左右が逆。売上はオーナーの元入れではないので Capital ではない。' }
      ]
    },
    // ───────────────────────── L16 ─────────────────────────
    {
      id: 'L16',
      no: 16,
      title: '仕訳を書く②: 文章から正しい仕訳を選ぶ',
      goal: '問題文の言葉から勘定と左右を読み取り、正しい仕訳を選べるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['C2(d)', 'K1:C1(a)'],
      slides: [
        {
          title: '話を「何が増えた・減った」に直す',
          paras: ['「友だちにお金を借りて、そのお金でスマホを買った」と聞いたら、頭の中で「スマホが増えた・借金が増えた」に置き換える。', '試験の問題文も同じ。英語の文章を読んで、どの勘定がどちら側に動いたかに置き換える。']
        },
        {
          title: 'キーワードで勘定が決まる',
          paras: ['ACCA の問題文によく出る言葉と、使う勘定。'],
          table: {
            head: ['問題文の言葉', '意味', '使う勘定'],
            rows: [
              ['paid (by cheque / transfer)', 'お金を払った', 'Cr Bank'],
              ['received / cash sales', 'お金を受け取った', 'Dr Bank'],
              ['sold on credit', '代金はあとで受け取る', 'Dr Trade receivables'],
              ['bought on credit', '代金はあとで払う', 'Cr Trade payables'],
              ['received from a customer', '掛けの代金を回収', 'Cr Trade receivables'],
              ['paid a supplier', '掛けの代金を支払', 'Dr Trade payables'],
              ['goods for resale', '売るための商品', 'Purchases'],
              ['for personal use', 'オーナーの私用', 'Drawings']
            ]
          }
        },
        {
          title: '掛け（on credit）は「あとで払う約束」',
          paras: ['スマホを分割で買うと、スマホは手に入るが、代金はまだ払っていない。払う約束（負債）が残る。', 'お店も同じ。材料 $600 を掛けで仕入れたら、Bank はまだ動かない。代わりに、仕入先に払う約束＝買掛金（trade payables）が増える。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '600' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '600' }
          ],
          after: 'あとで払ったときは Dr Trade payables / Cr Bank。売った側は逆で、売ったとき Dr Trade receivables（売掛金）/ Cr Sales、代金を受け取ったとき Dr Bank / Cr Trade receivables。掛けの詳しい記帳は第3部で学ぶ。'
        },
        {
          title: '1つの取引で3行になることもある',
          paras: ['配達用のバンを $10,000 で買った。$4,000 は銀行から払い、残り $6,000 は銀行からの借入でまかなった。'],
          journal: [
            { side: 'Dr', account: 'Motor vehicle（車両）', amount: '10,000' },
            { side: 'Cr', account: 'Bank', amount: '4,000' },
            { side: 'Cr', account: 'Loan（借入金）', amount: '6,000' }
          ],
          after: '借方の合計 $10,000 ＝ 貸方の合計 $4,000 ＋ $6,000。行が3つでも、左右の合計は同じになる。'
        },
        {
          title: '試験によく出る: オーナーとお店のお金',
          paras: ['お店とオーナーは別の人（L02）。この3つは特によく出る。'],
          table: {
            head: ['取引', '借方 Dr', '貸方 Cr'],
            rows: [
              ['オーナーが自分の財布から、お店の家賃を払った', 'Rent', 'Capital'],
              ['お店の口座から、オーナーの自宅の電気代を払った', 'Drawings', 'Bank'],
              ['オーナーが売り物の商品を家に持ち帰った', 'Drawings', 'Purchases']
            ]
          },
          after: '3つ目は、売るために仕入れた商品が売られずに私用になったので、仕入（費用）を原価で減らして引出しにする。売れたわけではないので Sales は使わない。'
        },
        {
          title: '例題: 選択肢から選ぶ',
          example: {
            problem: 'A business buys goods for resale for $750 on credit. Which journal entry is correct?  A: Dr Purchases / Cr Bank  B: Dr Purchases / Cr Trade payables  C: Dr Trade payables / Cr Purchases  D: Dr Purchases / Cr Trade receivables',
            steps: ['「goods for resale」→ 売るための商品なので Purchases（借方で増える）', '「on credit」→ まだ払っていない。Bank は動かないので A は消える', '払う約束（負債）が増える → Cr Trade payables', 'C は左右が逆。D の receivables は「売ったとき」の勘定。残るのは B'],
            answer: 'B: Dr Purchases $750 / Cr Trade payables $750'
          }
        },
        {
          title: 'なぜ？ 消去法がよく効く',
          paras: ['間違いの選択肢は、ほとんどが「左右が逆」か「勘定の取り違え」。だから1行ずつ確かめれば消せる。'],
          list: ['Bank は動いた？（すぐ払った・受け取ったか）', '相手の勘定は、資産・負債・資本・収益・費用のどれ？', '増えた？ 減った？ → ルールで左右を決める', '借方合計＝貸方合計になっている？']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「bought」だけを見て Cr Bank にしない。「on credit」が付いていたら、お金はまだ動いていない。逆に「paid a supplier（仕入先に払った）」は新しい仕入ではなく、買掛金を減らす取引（Dr Trade payables / Cr Bank）。Purchases にすると仕入を2回数えてしまう。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['問題文のキーワードを勘定に置き換える（on credit → 売掛金・買掛金）', 'お店のお金でオーナーの私用 → Drawings。オーナーのお金でお店の費用 → Capital', '1行ずつ「Bank は動いたか」「増えたか減ったか」で消していく']
        },
        {
          title: '英単語',
          words: [
            ['trade receivables', 'トレード・レシーバブルズ', '売掛金（あとで受け取るお金、資産）'],
            ['trade payables', 'トレード・ペイアブルズ', '買掛金（あとで払うお金、負債）'],
            ['on credit', 'オン・クレジット', '掛けで（代金はあと）'],
            ['goods for resale', '', '売るための商品'],
            ['for personal use / own use', '', 'オーナーの私用'],
            ['supplier / customer', 'サプライヤー / カスタマー', '仕入先 / 得意先'],
            ['motor vehicle', '', '車両（資産）']
          ]
        }
      ],
      quiz: [
        { q: 'A sole trader pays a business electricity bill of $120 from his personal bank account. What is the correct journal entry in the business records?', choices: ['Dr Electricity $120, Cr Bank $120', 'Dr Electricity $120, Cr Capital $120', 'Dr Drawings $120, Cr Bank $120', 'Dr Capital $120, Cr Electricity $120'], answer: 1, explain: 'お店の費用だが、お店の口座は使っていないので Bank は動かない。オーナーがお店にお金を出したのと同じなので Cr Capital。Drawings は逆向き（お店のお金がオーナーのために出ていく）のときに使う。' },
        { q: 'The owner takes goods costing $250 from the business for personal use. What is the correct journal entry?', choices: ['Dr Drawings $250, Cr Purchases $250', 'Dr Purchases $250, Cr Drawings $250', 'Dr Drawings $250, Cr Sales $250', 'Dr Drawings $250, Cr Bank $250'], answer: 0, explain: '私用なので Dr Drawings。仕入れた商品が売られずに出ていったので、仕入（費用）を減らす Cr Purchases。売れたわけではないので Sales ではなく、お金も動いていないので Bank でもない。' },
        { q: '事業用のパソコン $1,500 を買った。$500 は銀行から払い、残り $1,000 は銀行からの借入でまかなった。正しい仕訳は？', choices: ['Dr Computer equipment $1,500 / Cr Bank $500 / Cr Loan $1,000', 'Dr Computer equipment $500 / Cr Bank $500', 'Dr Bank $500 / Dr Loan $1,000 / Cr Computer equipment $1,500', 'Dr Purchases $1,500 / Cr Bank $500 / Cr Loan $1,000'], answer: 0, explain: '使い続ける資産が $1,500 増えた（借方）。出どころは銀行 $500 と借入 $1,000（貸方）。2つ目は借入の分が抜けている。3つ目は左右が逆。4つ目は、売るための商品ではないので Purchases にしない。' },
        { q: '次の仕訳の空欄（Cr Bank の金額）はいくら？  Dr Motor vehicle $12,000 / Cr Loan $7,500 / Cr Bank ?', type: 'number', answer: 4500, unit: '$', explain: '借方合計 $12,000 ＝ 貸方合計。$12,000 − $7,500 ＝ $4,500。' },
        { q: 'A business pays $900 to a supplier for goods previously bought on credit. What is the correct journal entry?', choices: ['Dr Purchases $900, Cr Bank $900', 'Dr Trade payables $900, Cr Bank $900', 'Dr Bank $900, Cr Trade payables $900', 'Dr Trade receivables $900, Cr Bank $900'], answer: 1, explain: '仕入は掛けで買ったときにもう記録済み。今回は払う約束（買掛金、負債）が消えるので Dr Trade payables、お金が出るので Cr Bank。Purchases にすると仕入を2回数えてしまう。receivables は得意先からもらう側の勘定。' },
        { q: 'A business receives $500 from a credit customer in settlement of an invoice issued last month. What is the correct journal entry?', choices: ['Dr Bank $500, Cr Sales $500', 'Dr Bank $500, Cr Trade receivables $500', 'Dr Trade receivables $500, Cr Bank $500', 'Dr Trade receivables $500, Cr Sales $500'], answer: 1, explain: '売上は先月、請求書を出したときにもう記録済み。今回はお金が入る（Dr Bank）と同時に、受け取る約束（売掛金、資産）が消える（Cr Trade receivables）。Cr Sales にすると売上を2回数えてしまう。3つ目は左右が逆。4つ目は売ったときの仕訳。' }
      ]
    },
    // ───────────────────────── L17 ─────────────────────────
    {
      id: 'L17',
      no: 17,
      title: 'T勘定に転記する',
      goal: '仕訳を元帳の T勘定に書き写し、勘定の残高を出せるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['C2(c)', 'K1:B2(c)'],
      slides: [
        {
          title: 'レシートを科目ごとのページへ',
          paras: ['レシートを日付順にノートへ書くだけだと、「今月の食費は合計いくら？」がすぐには分からない。', 'そこで、食費のページ、銀行のページ…と、科目ごとのページに書き写す。この科目ごとのページが勘定（ledger account）、全部まとめたものが総勘定元帳（general ledger）。書き写す作業を転記（posting）という。']
        },
        {
          title: 'T勘定の形と転記',
          paras: ['勘定は T の字の形で書く。左が借方（Dr）、右が貸方（Cr）。これを T勘定（T account）という。'],
          svg: `<svg viewBox="0 0 440 296" role="img" aria-label="仕訳の借方は勘定の左へ、貸方は勘定の右へ書き写す" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">仕訳を2つの勘定に書き写す</text><rect x="20" y="46" width="400" height="76" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="76" font-size="15" fill="var(--ink)">Dr Rent（家賃）</text><text x="400" y="76" text-anchor="end" font-size="15" fill="var(--ink)">400</text><text x="72" y="106" font-size="15" fill="var(--ink)">Cr Bank（銀行）</text><text x="400" y="106" text-anchor="end" font-size="15" fill="var(--ink)">400</text><line x1="115" y1="126" x2="115" y2="166" stroke="var(--ink)" stroke-width="1.5"/><path d="M108 166L115 178L122 166z" fill="var(--ink)"/><text x="126" y="158" fill="var(--ink)">借方へ</text><line x1="325" y1="126" x2="325" y2="166" stroke="var(--ink)" stroke-width="1.5"/><path d="M318 166L325 178L332 166z" fill="var(--ink)"/><text x="336" y="158" fill="var(--ink)">貸方へ</text><text x="115" y="198" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Rent</text><text x="24" y="198" font-size="12.5" fill="var(--quiet)">Dr</text><text x="206" y="198" text-anchor="end" font-size="12.5" fill="var(--quiet)">Cr</text><line x1="20" y1="208" x2="210" y2="208" stroke="var(--ink)" stroke-width="1.5"/><line x1="115" y1="208" x2="115" y2="284" stroke="var(--ink)" stroke-width="1.5"/><text x="28" y="236" fill="var(--ink)">Bank</text><text x="107" y="236" text-anchor="end" fill="var(--ink)">400</text><text x="325" y="198" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Bank</text><text x="234" y="198" font-size="12.5" fill="var(--quiet)">Dr</text><text x="416" y="198" text-anchor="end" font-size="12.5" fill="var(--quiet)">Cr</text><line x1="230" y1="208" x2="420" y2="208" stroke="var(--ink)" stroke-width="1.5"/><line x1="325" y1="208" x2="325" y2="284" stroke="var(--ink)" stroke-width="1.5"/><text x="333" y="236" fill="var(--ink)">Rent</text><text x="412" y="236" text-anchor="end" fill="var(--ink)">400</text></svg>`,
          caption: 'Rent の左には「Bank 400」、Bank の右には「Rent 400」。説明の欄には、相手の勘定の名前を書く。'
        },
        {
          title: '転記のルール',
          formula: '仕訳の Dr → その勘定の左、Cr → その勘定の右',
          list: ['1つの仕訳は、必ず2つ以上の勘定に書き写す', '金額は仕訳と同じ', '説明の欄には相手の勘定の名前を書く'],
          after: 'Bank の左に「Capital 5,000」とあれば、「資本（元入れ）から来たお金」と一目で分かる。'
        },
        {
          title: '例題: たこ焼き屋の Bank 勘定',
          example: {
            problem: 'L15 のたこ焼き屋の8つの取引を Bank 勘定に転記する。左右に何が入り、残高はいくら？',
            steps: ['入金（Dr Bank）の仕訳 → 左に書く: ① Capital 5,000、② Loan 2,000、⑥ Sales 800', '支払い（Cr Bank）の仕訳 → 右に書く: ③ Equipment 1,200、④ Purchases 300、⑤ Rent 400、⑦ Drawings 150、⑧ Loan 500', '左の合計: 5,000 ＋ 2,000 ＋ 800 ＝ 7,800', '右の合計: 1,200 ＋ 300 ＋ 400 ＋ 150 ＋ 500 ＝ 2,550', '残高（balance）＝ 7,800 − 2,550 ＝ 5,250。左が多いので借方残高'],
            answer: 'Bank は借方残高 $5,250（口座にお金がある）'
          }
        },
        {
          title: '完成した Bank 勘定',
          tAccount: {
            name: 'Bank',
            debit: [['Capital', '5,000'], ['Loan', '2,000'], ['Sales', '800']],
            credit: [['Equipment', '1,200'], ['Purchases', '300'], ['Rent', '400'], ['Drawings', '150'], ['Loan', '500']]
          },
          paras: ['Loan は左にも右にもある。借りたとき（入金）と返したとき（支払い）で、Bank の動きが逆だから。']
        },
        {
          title: 'ほかの勘定はこうなる',
          paras: ['相手側も忘れずに転記する。今回は全部現金取引なので、相手はすべて Bank。'],
          table: {
            head: ['勘定', '借方 Dr', '貸方 Cr'],
            rows: [
              ['Capital', '－', 'Bank 5,000'],
              ['Loan', 'Bank 500', 'Bank 2,000'],
              ['Equipment', 'Bank 1,200', '－'],
              ['Purchases', 'Bank 300', '－'],
              ['Rent', 'Bank 400', '－'],
              ['Sales', '－', 'Bank 800'],
              ['Drawings', 'Bank 150', '－']
            ]
          },
          after: 'Loan の残高は 2,000 − 500 ＝ 貸方 1,500（まだ返す借金）。'
        },
        {
          title: 'なぜ？ 仕訳と元帳の両方がいる',
          paras: ['仕訳は「何が起きたか」を日付順に1か所で見るため。元帳は「科目ごとに今いくらか」を見るため。', '同じ取引を2つの並べ方で持っておくと、合計を確かめたり、間違いを探したりできる。全部の勘定の借方・貸方の合計は、必ず一致するはず。']
        },
        {
          title: '手動の仕訳と自動の仕訳',
          paras: ['会計ソフトでは、請求書を入力したり銀行明細を取り込んだりすると、システムが仕訳を作って元帳へ転記する。これを自動仕訳（automated journal entry）という。', '期末の調整や間違いの訂正のように、人が判断して入力する仕訳は手動仕訳（manual journal entry）。判断が入るので、承認やチェックが必要になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '一番多いのは左右の取り違え。仕訳で Dr の行は、その勘定でも必ず左。また、説明の欄に自分の勘定名を書かない。Bank 勘定の左には「Bank」ではなく、相手の「Capital」のように書く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仕訳の Dr はその勘定の左、Cr は右に書き写す', '説明の欄には相手の勘定の名前を書く', '残高＝多い側の合計 − 少ない側の合計（多い側の残高と呼ぶ）']
        },
        {
          title: '英単語',
          words: [
            ['general ledger', 'ジェネラル・レジャー', '総勘定元帳'],
            ['ledger account', 'レジャー・アカウント', '勘定'],
            ['T account', 'ティー・アカウント', 'T勘定'],
            ['posting', 'ポスティング', '転記'],
            ['balance', 'バランス', '残高'],
            ['automated journal entry', '', '自動仕訳（システムが作る）'],
            ['manual journal entry', '', '手動仕訳（人が入力する）']
          ]
        }
      ],
      quiz: [
        { q: '仕訳「Dr Rent $400 / Cr Bank $400」を転記した。Bank 勘定にはどう書く？', choices: ['右（貸方）に「Rent 400」', '左（借方）に「Rent 400」', '右（貸方）に「Bank 400」', '左（借方）に「Bank 400」'], answer: 0, explain: 'Bank は仕訳で Cr なので、Bank 勘定の右に書く。説明の欄は相手の勘定名「Rent」。3つ目は自分の勘定名を書いている。' },
        { q: 'In the bank ledger account, there is a debit entry of $2,000 described as "Loan". What does this entry record?', choices: ['A loan of $2,000 was received into the bank account', 'A loan of $2,000 was repaid from the bank account', 'Interest of $2,000 was paid on a loan', 'The owner introduced capital of $2,000'], answer: 0, explain: 'Bank の借方＝入金。相手が Loan なので、借りたお金が入ってきた。返済なら Bank の貸方に書く。元入れなら相手は Capital。' },
        { q: 'Bank 勘定の借方に 6,000 と 1,500、貸方に 2,200 と 800 と 300 がある。残高はいくら？', type: 'number', answer: 4200, unit: '$', explain: '借方 6,000 ＋ 1,500 ＝ 7,500。貸方 2,200 ＋ 800 ＋ 300 ＝ 3,300。7,500 − 3,300 ＝ 4,200（借方残高）。' },
        { q: 'A bank account shows debits of $3,000 (capital) and $900 (sales), and credits of $1,100 (rent) and $400 (drawings). What is the balance on the account?', choices: ['$2,400 debit', '$2,400 credit', '$5,400 debit', '$1,500 credit'], answer: 0, explain: '借方 3,900 − 貸方 1,500 ＝ 2,400。借方が多いので借方残高。$5,400 は全部足してしまった間違い。$1,500 は貸方の合計だけ。' },
        { q: 'Which of the following is most likely to be a manual journal entry rather than an automated one?', choices: ['Recording a sales invoice entered into the system', 'Correcting an error found at the year end', 'Recording a supplier invoice scanned into the system', 'Recording a payment imported from the bank statement'], answer: 1, explain: '間違いの訂正は、人が判断して入力する手動仕訳。請求書の入力や銀行明細の取り込みは、システムが仕訳を自動で作る。' }
      ]
    },
    // ───────────────────────── L18 ─────────────────────────
    {
      id: 'L18',
      no: 18,
      title: '元帳を締めて繰り越す',
      goal: '期末に勘定の残高を出して締め、繰り越すか損益へ振り替えるかを判断できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['C2(e)', 'K1:B2(d)'],
      slides: [
        {
          title: '月末に家計簿を締める',
          paras: ['月末、財布に残った現金を数えて「来月へ 12,000円」と書き、翌月のページの最初に「前月から 12,000円」と書く。', '一方、「今月の食費 45,000円」は来月に持ち越さない。来月の食費は0円から数え直す。会計の締めも、まったく同じ考え方。']
        },
        {
          title: '残高を出して締める4ステップ',
          numbered: ['両側を足し、多い方の合計を、両側の一番下に書く', '少ない側に差額を入れて合わせる。これが次期繰越（Balance c/d）', '両側の合計が同じになったら、線を引いて締める', '翌期の最初に、反対側へ前期繰越（Balance b/d）を書く'],
          after: 'c/d は carried down（下へ繰り越す）、b/d は brought down（下へ持ってきた）の略。'
        },
        {
          title: '例題: Bank 勘定を締める',
          example: {
            problem: 'たこ焼き屋の Bank 勘定（借方合計 7,800、貸方合計 2,550）を期末に締める。',
            steps: ['多い方は借方の 7,800。両側の合計を 7,800 にそろえる', '貸方は 2,550 なので、差額 7,800 − 2,550 ＝ 5,250 を貸方に「Balance c/d 5,250」と書く', '両側の合計が 7,800 で一致 → 線を引いて締める', '翌期の最初、借方に「Balance b/d 5,250」と書く'],
            answer: '翌期は借方の Balance b/d $5,250 から始まる（口座にお金がある）'
          }
        },
        {
          title: '締めた Bank 勘定',
          tAccount: {
            name: 'Bank',
            debit: [['Capital', '5,000'], ['Loan', '2,000'], ['Sales', '800']],
            credit: [['Equipment', '1,200'], ['Purchases', '300'], ['Rent', '400'], ['Drawings', '150'], ['Loan', '500']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '5,250' }
          },
          paras: ['両側の合計はどちらも 7,800。c/d を貸方に書いたので、b/d は反対の借方に出る。']
        },
        {
          title: '繰り越す勘定と、0にする勘定',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="期末に、資産・負債・資本は繰り越し、収益・費用は損益へ振り替える" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">期末に勘定はどこへ行く？</text><rect x="20" y="48" width="192" height="88" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">資産・負債・資本</text><text x="116" y="112" text-anchor="middle" fill="var(--quiet)">（写真の勘定）</text><rect x="228" y="48" width="192" height="88" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">収益・費用</text><text x="324" y="112" text-anchor="middle" fill="var(--quiet)">（動画の勘定）</text><line x1="116" y1="138" x2="116" y2="164" stroke="var(--ink)" stroke-width="1.5"/><path d="M109 164L116 176L123 164z" fill="var(--ink)"/><line x1="324" y1="138" x2="324" y2="164" stroke="var(--ink)" stroke-width="1.5"/><path d="M317 164L324 176L331 164z" fill="var(--ink)"/><rect x="20" y="182" width="192" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="214" text-anchor="middle" fill="var(--ink)">残高を翌期へ繰越</text><text x="116" y="240" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Balance c/d → b/d</text><rect x="228" y="182" width="192" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="214" text-anchor="middle" fill="var(--ink)">損益へ振り替えて0</text><text x="324" y="240" text-anchor="middle" font-size="12.5" fill="var(--quiet)">to profit or loss</text><line x1="324" y1="260" x2="324" y2="274" stroke="var(--ink)" stroke-width="1.5"/><path d="M317 274L324 286L331 274z" fill="var(--ink)"/><rect x="20" y="288" width="400" height="36" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="311" text-anchor="middle" font-weight="600" fill="var(--ink)">利益と引出しは、最後に資本へまとめる</text></svg>`,
          caption: '写真（財政状態計算書）の勘定は残高を翌年へ引き継ぐ。動画（損益計算書）の勘定は毎年0に戻す。'
        },
        {
          title: '費用・収益の勘定を締める',
          tAccount: {
            name: 'Rent',
            debit: [['Bank', '400']],
            credit: [['Profit or loss', '400']]
          },
          paras: ['費用の Rent は、期末に残高 400 を損益（profit or loss）へ振り替える。仕訳は Dr Profit or loss 400 / Cr Rent 400。勘定は0になり、翌年は0から数え直す。'],
          after: '収益の Sales は逆。借方に「Profit or loss 800」と書いて0にする（Dr Sales 800 / Cr Profit or loss 800）。'
        },
        {
          title: '例題: 期末の資本はいくら？',
          example: {
            problem: 'たこ焼き屋（材料は全部使い、在庫は残っていないとする。たこ焼き器の減価償却もまだ考えない）。Sales 800、Purchases 300、Rent 400 を損益へ振り替えた。元入れは 5,000、引出しは 150。Capital の Balance c/d は？',
            steps: ['利益＝収益 − 費用＝ 800 − 300 − 400 ＝ 100', '利益はオーナーのもの → Dr Profit or loss 100 / Cr Capital 100', '引出しは資本を減らす → Dr Capital 150 / Cr Drawings 150', 'Capital: 5,000 ＋ 100 − 150 ＝ 4,950（貸方残高）', '確かめ: 資産（Bank 5,250 ＋ Equipment 1,200 ＝ 6,450）＝資本 4,950 ＋ 負債（Loan 1,500）'],
            answer: '$4,950（貸方残高として翌期へ繰り越す）'
          }
        },
        {
          title: 'なぜ？ 収益と費用は0に戻す',
          paras: ['損益計算書は「その1年の動画」。去年の売上が今年に混ざると、今年の稼ぐ力が分からなくなる。だから収益と費用は毎年0から数え直す。', '財政状態計算書は「ある日の写真」。年が変わっても、口座のお金や借金は消えない。だから資産・負債・資本の残高は、そのまま翌年に引き継ぐ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'Balance c/d は合計が「少ない側」に書く。借方残高なのに c/d も借方に書くのはよくある間違い。また、Bank の貸方残高は口座のお金がマイナスということ＝当座借越（bank overdraft）。資産ではなく負債になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['c/d は少ない側に書き、b/d は翌期の反対側に出る', '資産・負債・資本は繰り越す。収益・費用は損益へ振り替えて0にする', '利益と引出しは資本へまとめる（期末資本＝期首 ＋ 元入れ ＋ 利益 − 引出し）']
        },
        {
          title: '英単語',
          words: [
            ['balance c/d (carried down)', '', '次期繰越'],
            ['balance b/d (brought down)', '', '前期繰越'],
            ['debit balance / credit balance', '', '借方残高 / 貸方残高'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（負債）'],
            ['close off', 'クローズ・オフ', '勘定を締める'],
            ['profit or loss account', '', '損益勘定（収益・費用の振替先）'],
            ['year end', 'イヤー・エンド', '期末']
          ]
        }
      ],
      quiz: [
        { q: 'At the year end, which of the following accounts will have its balance carried down to the next period?', choices: ['Sales', 'Rent', 'Trade payables', 'Purchases'], answer: 2, explain: '買掛金は負債（写真の勘定）なので、残高を翌期へ繰り越す。Sales・Rent・Purchases は収益・費用なので、損益へ振り替えて0にする。' },
        { q: 'A bank account has total debits of $4,600 and total credits of $6,100. Which of the following is correct?', choices: ['Balance c/d $1,500 on the debit side; balance b/d $1,500 credit (overdraft)', 'Balance c/d $1,500 on the credit side; balance b/d $1,500 debit', 'Balance c/d $10,700 on the debit side', 'Balance b/d $1,500 debit (cash at bank)'], answer: 0, explain: '貸方が多いので、少ない借方に差額 6,100 − 4,600 ＝ 1,500 を c/d で入れる。b/d は翌期の反対側＝貸方。Bank の貸方残高は当座借越（負債）。$10,700 は足してしまった間違い。' },
        { q: 'Capital の期首残高（貸方）が $8,000。今期の利益が $2,300、引出しが $1,800。期末の Capital の残高はいくら？', type: 'number', answer: 8500, unit: '$', explain: '8,000 ＋ 2,300 − 1,800 ＝ 8,500。利益は資本を増やし（Cr Capital）、引出しは資本を減らす（Dr Capital）。' },
        { q: '期末に、費用の Electricity 勘定（借方残高 $600）を締める。正しいものは？', choices: ['Dr Profit or loss $600 / Cr Electricity $600', 'Dr Electricity $600 / Cr Profit or loss $600', '残高 $600 を Balance c/d として翌期へ繰り越す', 'Dr Capital $600 / Cr Electricity $600'], answer: 0, explain: '借方にある残高を0にするには、反対の貸方に同じ金額を書く。相手は損益（Profit or loss）。2つ目は左右が逆で残高が倍になる。3つ目は費用を翌年に持ち越してしまう。' },
        { q: 'An account has debit entries of $1,200, $350 and $90, and credit entries of $700 and $240. What is the balance c/d?', type: 'number', answer: 700, unit: '$', explain: '借方 1,200 ＋ 350 ＋ 90 ＝ 1,640。貸方 700 ＋ 240 ＝ 940。差 1,640 − 940 ＝ 700 を、少ない貸方に Balance c/d として書く（翌期は借方の b/d 700）。' }
      ]
    },
    // ───────────────────────── L19 ─────────────────────────
    {
      id: 'L19',
      no: 19,
      title: 'コンピュータ会計とクラウド',
      goal: 'コンピュータ会計とクラウドの特徴、メリットとデメリットを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['C1(d)', 'K1:B1(e)', 'K1:B2(b)'],
      slides: [
        {
          title: '紙の家計簿と家計簿アプリ',
          paras: ['紙の家計簿では、レシートを見て書き、科目ごとに書き写し、電卓で合計する。書き写すたび、計算するたびに、間違いが入りうる。', '家計簿アプリなら、1回入力すれば集計もグラフも自動。銀行と連携すれば入力すらいらない。会社の会計ソフトも同じ考え方。']
        },
        {
          title: '会計ソフトの流れ',
          svg: `<svg viewBox="0 0 440 324" role="img" aria-label="証憑の入力から財務諸表まで自動で流れる" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">1回の入力で、最後まで流れる</text><rect x="20" y="48" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="78" fill="var(--ink)">① 証憑（請求書・領収書など）</text><line x1="220" y1="98" x2="220" y2="108" stroke="var(--ink)" stroke-width="1.5"/><path d="M213 108L220 120L227 108z" fill="var(--ink)"/><rect x="20" y="122" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="152" fill="var(--ink)">② 入力は1回だけ（銀行明細は取込）</text><line x1="220" y1="172" x2="220" y2="182" stroke="var(--ink)" stroke-width="1.5"/><path d="M213 182L220 194L227 182z" fill="var(--ink)"/><rect x="20" y="196" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="226" font-weight="600" fill="var(--ink)">③ 仕訳を作り、元帳へ自動で転記</text><line x1="220" y1="246" x2="220" y2="256" stroke="var(--ink)" stroke-width="1.5"/><path d="M213 256L220 268L227 256z" fill="var(--ink)"/><rect x="20" y="270" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="300" fill="var(--ink)">④ 試算表・財務諸表・レポート</text></svg>`,
          caption: 'データの入口は、手入力のほか、銀行明細の取り込み（bank feed）、請求書のスキャン、取引先からの電子データなど。人が書き写す工程がないので、転記ミスや計算ミスが起きにくい。'
        },
        {
          title: 'コンピュータ会計の主な特徴',
          list: ['入力は1回。仕訳の作成・元帳への転記・合計は自動', '借方と貸方は必ず同じ金額で記録される', '売上・仕入・給与・在庫などの機能（モジュール）が元帳とつながっている（integrated）', '試算表・財務諸表・得意先別の残高などのレポートがすぐ出る', 'パスワードと権限、操作の記録（audit trail）、バックアップで守る']
        },
        {
          title: '入力チェックでも防げない間違い',
          paras: ['ソフトは、存在しない勘定コードや、ありえない日付をはねる。これを入力チェック（validation check）という。', 'でも「形は正しい間違い」は防げない。家賃を電気代の勘定に入れても、500 を 50 と打っても、取引を入力し忘れても、左右は合ってしまう。'],
          formula: 'garbage in, garbage out（入力が間違えば、出力も間違う）'
        },
        {
          title: 'クラウドとは',
          paras: ['クラウド（the cloud）は、データを自分のパソコンではなく、外部の会社のサーバー（external servers）に保存して、インターネット経由で使う方法。', 'スマホの写真をクラウドに保存すると、スマホを落としても写真は残り、パソコンからも見られる。会計データでも同じことができる。']
        },
        {
          title: 'クラウドのメリットとデメリット',
          table: {
            head: ['メリット', 'デメリット'],
            rows: [
              ['どこからでも、いつでも使える', 'ネットがつながらないと使えない'],
              ['オーナーと会計士が同時に使える', 'データを外部に預ける（情報漏えい・サイバー攻撃のリスク）'],
              ['バックアップと更新は提供会社がする', '提供会社の障害や倒産の影響を受ける'],
              ['最初の費用が安い（月額で払う）', '月額費用がずっとかかる。自由に作り変えにくい']
            ]
          }
        },
        {
          title: 'なぜ？ 会社がコンピュータを使う理由',
          paras: ['取引が1日に何百件もあると、手で書き写して合計するのは時間がかかり、間違いも増える。コンピュータなら速く正確で、締めの日にすぐ数字が出る。', 'その代わり、導入の費用と研修、故障・ウイルス・データ消失への備え（バックアップ、ウイルス対策）が必要になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「コンピュータなら間違いは起きない」は誤り。入力ミス、勘定の選び間違い、取引の入力漏れは防げない。だから、後で学ぶ照合（reconciliation）やチェックが必要になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['入力は1回、転記と合計は自動。左右は必ず一致する', '入力チェックがあっても、間違った勘定や金額は防げない', 'クラウド＝外部のサーバーに保存。どこでも使えるが、ネットと提供会社に頼る']
        },
        {
          title: '英単語',
          words: [
            ['computerised accounting system', '', 'コンピュータ会計システム'],
            ['the cloud', 'ザ・クラウド', 'クラウド（外部のサーバーに保存）'],
            ['external server', '', '外部のサーバー'],
            ['integrated', 'インテグレーテッド', '（モジュールと元帳が）つながっている'],
            ['audit trail', 'オーディット・トレイル', '誰がいつ何を入力したかの記録'],
            ['validation check', '', '入力チェック'],
            ['back-up', 'バックアップ', 'データの控え'],
            ['bank feed', 'バンク・フィード', '銀行明細の自動取り込み']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an advantage of storing accounting data in the cloud?', choices: ['The data can be accessed from any location with an internet connection', 'The system can be used without an internet connection', 'The business does not need to rely on an outside provider', 'There is no risk of the data being accessed by unauthorised people'], answer: 0, explain: 'クラウドはネットさえあればどこからでも使える。逆に、ネットが必要・提供会社に頼る・情報漏えいのリスクがある、はデメリット側。' },
        { q: 'Which of the following errors is a computerised accounting system LEAST likely to prevent?', choices: ['A journal entry in which debits do not equal credits', 'A posting to an account code that does not exist', 'Rent posted to the electricity account', 'An invoice entered with an invalid date'], answer: 2, explain: '家賃を電気代の勘定に入れても、勘定コードは存在し、左右も合っているので、システムは気づけない。左右の不一致・存在しないコード・ありえない日付は、システムがはねる。' },
        { q: 'クラウド会計のデメリットとして正しいものは？', choices: ['ネットが必要で、提供会社の障害の影響を受ける', 'どこからでも使える', 'バックアップを提供会社がしてくれる', '最初の導入費用が安い'], answer: 0, explain: '残りの3つはメリット。クラウドはネットと提供会社に頼るので、そこが弱点になる。' },
        { q: '会計ソフトに売上の請求書を1枚入力した。正しいものは？', choices: ['システムが仕訳を作り、元帳へ自動で転記する', '人が仕訳を書き、元帳へ手で転記する', '元帳には転記されず、期末にまとめて入力する', '借方だけ記録され、貸方は人が後で入力する'], answer: 0, explain: '入力は1回で、仕訳の作成と転記は自動。左右は必ず同じ金額で記録される。' },
        { q: 'Which of the following is NOT a feature of a computerised accounting system?', choices: ['Each transaction needs to be entered only once', 'Ledger account balances are updated automatically', 'Postings to the wrong account are automatically corrected', 'Access can be restricted by passwords'], answer: 2, explain: '間違った勘定への記録は、形が正しいのでシステムには分からない（garbage in, garbage out）。ほかの3つはコンピュータ会計の特徴。' }
      ]
    },
    // ───────────────────────── L20 ─────────────────────────
    {
      id: 'L20',
      no: 20,
      title: 'システムが有用な情報と締切遵守に役立つ仕組み',
      goal: '会計システムが、役に立つ情報・社内ルール・締切を守るのにどう役立つか説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'fa',
      outcomes: ['C1(e)'],
      slides: [
        {
          title: '家計簿アプリの「お知らせ」',
          paras: ['家計簿アプリに「食費は月5万円まで」と設定すると、超えそうなときに知らせてくれる。カードの引き落とし日や税金の支払い日も教えてくれる。', '会社の会計システムも、記録するだけでなく、①役に立つ情報を出す、②社内ルールを守らせる、③締切に間に合わせる、の3つを助ける。']
        },
        {
          title: '① 役に立つ情報とは',
          list: ['正確で、漏れがない', 'タイムリー（判断に間に合う）', '目的に合っている（知りたいことが分かる）', '分かりやすく、前の期間と比べられる'],
          after: 'どんなに正確でも、半年後に出てきた数字では判断に使えない。速さも「役に立つ」の一部。後で学ぶ質的特性（relevance、faithful representation、timeliness など）につながる。'
        },
        {
          title: 'システムはどう助ける？',
          table: {
            head: ['役に立つ条件', 'システムの仕組み'],
            rows: [
              ['正確・漏れがない', '自動転記、入力チェック、請求書の連番（抜けがすぐ分かる）'],
              ['タイムリー', '入力した瞬間に元帳が更新され、レポートがすぐ出る'],
              ['目的に合う', '得意先別・商品別・予算との比較などのレポート'],
              ['比べられる', '毎年同じ勘定科目の一覧（chart of accounts）で記録する']
            ]
          }
        },
        {
          title: '② 社内ルール（方針）を守らせる',
          paras: ['会社には「$1,000 を超える仕入には部長の承認がいる」のような社内ルール（organisational policies）がある。システムはそれを設定して守らせる。'],
          list: ['承認の流れ: 承認が記録されないと支払いができない', '権限: 支払いを入力する人と承認する人を分ける', '標準の勘定科目: 全員が同じ科目に記録する', 'audit trail: 誰が何をしたか残るので、ルール違反が見つかる']
        },
        {
          title: '③ 締切（deadlines）を守る',
          table: {
            head: ['締切', '例'],
            rows: [
              ['社内', '月末の締めを5営業日で終える、経営者への月次報告'],
              ['社外', '売上税の申告と納付、税務申告、財務諸表の提出、仕入先と給与の支払い']
            ]
          },
          after: 'システムは、期日のリマインド、売上税の自動集計、支払期日順の一覧、期間のロック（締めた月には後から入力できない）で締切を守らせる。'
        },
        {
          title: 'たこ焼き屋で考える',
          paras: ['たこ焼き屋が3店舗に増えた。オーナーは毎週「どの店が一番もうかっている？」を知りたい。', '店ごとに勘定コードを分けておけば、各店の売上と費用が自動で集計され、月曜の朝にレポートが届く。仕入先への支払いも期日順の一覧で確認でき、払い忘れて材料が止まることもない。']
        },
        {
          title: '試験ではこう聞かれる',
          example: {
            problem: 'Which of the following would most help an accounting system to ensure that sales tax returns are submitted on time?  A: Sequentially numbered sales invoices  B: Automatic calculation of sales tax and reminders of filing dates  C: A password for each user  D: A standard chart of accounts',
            steps: ['聞かれているのは「締切（on time）」', 'A は記録の漏れを防ぐ（正確さ・完全さ）', 'C は権限（社内ルール・不正の防止）', 'D は記録の統一（比べやすさ）', '申告の締切に直接役立つのは B だけ'],
            answer: 'B'
          }
        },
        {
          title: 'なぜ？ 記録するだけでは足りない',
          paras: ['会計の目的は、利用者が判断に使える情報を出すこと。記録が正確でも、出てくるのが遅かったり、ルールを無視した支払いが混ざっていたりすれば、その情報は信頼できない。', 'だから会計システムは「正確に記録する道具」であると同時に、「ルールと締切を守らせる仕組み」でもある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'システムが社内ルールを「決める」わけではない。ルールを決めるのは経営者で、システムはそれを設定して守らせる道具。権限や承認の設定が甘ければ、システムがあってもルールは守られない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['役に立つ情報＝正確・漏れがない・タイムリー・目的に合う・比べられる', '社内ルールは、承認の流れ・権限の分担・標準の勘定科目・audit trail で守らせる', '締切は、リマインド・自動集計・期間のロックで守らせる']
        },
        {
          title: '英単語',
          words: [
            ['useful information', '', '役に立つ情報'],
            ['organisational policies', '', '社内の方針・ルール'],
            ['deadline', 'デッドライン', '締切'],
            ['authorisation', 'オーソライゼーション', '承認'],
            ['access rights', '', 'アクセス権限'],
            ['chart of accounts', 'チャート・オブ・アカウンツ', '勘定科目の一覧（勘定コード表）'],
            ['sequential numbering', '', '連番（抜けを防ぐ）'],
            ['sales tax return', '', '売上税の申告']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following features of an accounting system most helps to ensure that all sales invoices have been recorded?', choices: ['Sequential numbering of sales invoices', 'Password protection for each user', 'Storing data on external servers', 'Producing reports in colour'], answer: 0, explain: '請求書に連番がついていれば、番号の抜けで記録漏れがすぐ分かる。パスワードは権限、外部サーバーは保存場所の話で、漏れの発見には直接つながらない。' },
        { q: 'A business policy states that all purchases over $1,000 must be approved by a manager. How can the accounting system help to comply with this policy?', choices: ['By preventing payment until the approval has been recorded in the system', 'By calculating sales tax automatically', 'By storing data on external servers', 'By producing the trial balance more quickly'], answer: 0, explain: '承認の流れを設定すれば、承認がない支払いはできない。売上税の自動計算は締切、外部サーバーはクラウド、試算表の速さはタイムリーさの話。' },
        { q: '締切を守るのに役立つシステムの機能として、最も適切なものは？', choices: ['支払期日・申告期日のリマインドと、締めた期間のロック', '担当者ごとのパスワード', '標準の勘定科目の一覧', '請求書の連番'], answer: 0, explain: 'パスワードは権限（社内ルール）、勘定科目の一覧は比べやすさ、連番は漏れの防止。締切に直接効くのはリマインドと期間のロック。' },
        { q: '「入力した瞬間に元帳が更新され、レポートがすぐ出る」機能が主に満たす条件は？', choices: ['タイムリー（判断に間に合う）', '前の期間と比べられる', '社内ルールを守らせる', '漏れがない'], answer: 0, explain: 'すぐに数字が出るので、判断に間に合う＝タイムリー。' },
        { q: 'Which of the following statements about accounting systems is correct?', choices: ['An accounting system decides the organisational policies of a business', 'An accounting system can help staff to comply with organisational policies and deadlines', 'A computerised system guarantees that all the information it produces is useful', 'Deadlines only apply to information for external users'], answer: 1, explain: 'ルールを決めるのは経営者で、システムは守らせる道具。コンピュータでも入力が間違えば情報は役に立たない。月末の締めのように社内の締切もある。' }
      ]
    }
  ],
  cards: [
    { id: 'L15-1', lesson: 'L15', q: '仕訳（journal entry）とは？', a: '1つの取引を、借方（Dr）と貸方（Cr）に同じ金額で書いた記録' },
    { id: 'L15-2', lesson: 'L15', q: '借方で増える3つと、貸方で増える3つは？', a: '借方: 資産・費用・引出し。貸方: 負債・資本・収益' },
    { id: 'L15-3', lesson: 'L15', q: '銀行にお金が入ったら？ 出たら？', a: '入ったら Dr Bank、出たら Cr Bank' },
    { id: 'L15-4', lesson: 'L15', q: '家賃 $400 を銀行から払った仕訳は？', a: 'Dr Rent $400 / Cr Bank $400' },
    { id: 'L15-5', lesson: 'L15', q: '銀行明細の「credit（入金）」が、お店の帳簿では借方になる理由は？', a: '明細は銀行から見た記録だから。お店から見ると資産が増える＝借方' },
    { id: 'L15-6', lesson: 'L15', q: '売るための材料を買ったら？ 何年も使う道具を買ったら？', a: '材料は Purchases（費用）、道具は Equipment などの資産' },
    { id: 'L16-1', lesson: 'L16', q: '商品を掛け（on credit）で仕入れた仕訳は？', a: 'Dr Purchases / Cr Trade payables' },
    { id: 'L16-2', lesson: 'L16', q: '掛けで仕入れた代金を、あとで払った仕訳は？', a: 'Dr Trade payables / Cr Bank（Purchases は使わない）' },
    { id: 'L16-3', lesson: 'L16', q: 'オーナーが自分のお金でお店の費用を払ったら？', a: 'Dr 費用 / Cr Capital（資本の拠出）' },
    { id: 'L16-4', lesson: 'L16', q: 'オーナーが売り物の商品を私用に持ち帰ったら？', a: 'Dr Drawings / Cr Purchases（原価で）' },
    { id: 'L16-5', lesson: 'L16', q: '仕訳の選択肢を消していくコツは？', a: '1行ずつ「Bank は動いたか」「どの要素か」「増えたか減ったか」、最後に左右の合計を確かめる' },
    { id: 'L16-6', lesson: 'L16', q: '3行ある仕訳が正しいための条件は？', a: '借方の合計＝貸方の合計' },
    { id: 'L16-7', lesson: 'L16', q: '掛けで売った代金を、あとで受け取った仕訳は？', a: 'Dr Bank / Cr Trade receivables（Sales は使わない）' },
    { id: 'L17-1', lesson: 'L17', q: '転記（posting）とは？', a: '仕訳の各行を、その勘定（T勘定）の同じ側に書き写すこと' },
    { id: 'L17-2', lesson: 'L17', q: 'T勘定の説明の欄には何を書く？', a: '相手の勘定の名前（Bank の左に Capital など）' },
    { id: 'L17-3', lesson: 'L17', q: '勘定の残高の出し方は？', a: '多い側の合計 − 少ない側の合計。多い側の残高と呼ぶ' },
    { id: 'L17-4', lesson: 'L17', q: '仕訳と元帳、なぜ両方いる？', a: '仕訳は日付順に何が起きたか、元帳は科目ごとの残高を見るため' },
    { id: 'L17-5', lesson: 'L17', q: '自動仕訳と手動仕訳の違いは？', a: '自動＝入力した証憑からシステムが作る。手動＝調整や訂正で人が入力し、承認が必要' },
    { id: 'L18-1', lesson: 'L18', q: 'Balance c/d と Balance b/d の意味は？', a: 'c/d＝次期繰越（carried down）、b/d＝前期繰越（brought down）' },
    { id: 'L18-2', lesson: 'L18', q: 'Balance c/d はどちら側に書く？', a: '合計が少ない側。b/d は翌期の反対側に出る' },
    { id: 'L18-3', lesson: 'L18', q: '期末に繰り越す勘定と、0にする勘定は？', a: '資産・負債・資本は繰り越す。収益・費用は損益へ振り替えて0' },
    { id: 'L18-4', lesson: 'L18', q: 'なぜ収益・費用は毎年0に戻す？', a: '損益計算書は1年の動画。前の年が混ざると今年の稼ぐ力が分からないから' },
    { id: 'L18-5', lesson: 'L18', q: 'Bank 勘定が貸方残高なら？', a: '当座借越（bank overdraft）。資産ではなく負債' },
    { id: 'L18-6', lesson: 'L18', q: '期末の資本の求め方は？', a: '期首 ＋ 元入れ ＋ 利益 − 引出し' },
    { id: 'L19-1', lesson: 'L19', q: 'コンピュータ会計の主な特徴は？', a: '入力は1回で転記・合計は自動、左右は必ず一致、レポートがすぐ出る、権限・記録・バックアップ' },
    { id: 'L19-2', lesson: 'L19', q: 'コンピュータでも防げない間違いは？', a: '勘定の選び間違い、金額の打ち間違い、取引の入力漏れ' },
    { id: 'L19-3', lesson: 'L19', q: 'クラウドとは？', a: 'データを外部の会社のサーバーに保存し、インターネット経由で使うこと' },
    { id: 'L19-4', lesson: 'L19', q: 'クラウドのメリットは？', a: 'どこでも使える、同時に使える、バックアップは提供会社、初期費用が安い' },
    { id: 'L19-5', lesson: 'L19', q: 'クラウドのデメリットは？', a: 'ネットが必要、情報漏えいのリスク、提供会社に頼る、月額費用' },
    { id: 'L19-6', lesson: 'L19', q: 'audit trail とは？', a: '誰が・いつ・何を入力・変更したかの記録' },
    { id: 'L20-1', lesson: 'L20', q: '会計システムが助ける3つのことは？', a: '役に立つ情報を出す・社内ルールを守らせる・締切に間に合わせる' },
    { id: 'L20-2', lesson: 'L20', q: '請求書の連番は何に役立つ？', a: '番号の抜けで記録漏れがすぐ分かる（正確さ・完全さ）' },
    { id: 'L20-3', lesson: 'L20', q: '社内ルールを守らせるシステムの仕組みは？', a: '承認の流れ、権限の分担、標準の勘定科目、audit trail' },
    { id: 'L20-4', lesson: 'L20', q: '締切を守らせるシステムの仕組みは？', a: '期日のリマインド、売上税などの自動集計、支払期日の一覧、期間のロック' },
    { id: 'L20-5', lesson: 'L20', q: '社外の締切の例は？', a: '売上税の申告・納付、税務申告、財務諸表の提出、給与・仕入先への支払い' },
    { id: 'L20-6', lesson: 'L20', q: 'なぜ速さも「役に立つ」の条件？', a: '正確でも遅い情報は、判断に間に合わないから' }
  ]
});
