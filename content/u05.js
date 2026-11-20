(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 5,
  part: 3,
  partTitle: '売上・仕入・現金',
  lessons: [
    {
      id: 'L26',
      no: 26,
      title: '取引値引き（trade discount）',
      goal: '取引値引きを引いた金額で売上と売上税を計算し、正しく仕訳できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D1(f)i', 'K1:C1(b)'],
      slides: [
        {
          title: '会社でまとめ買いすると',
          paras: ['家電量販店で、値札が10万円のパソコン。会社で20台まとめて買うと「1台9万円でいいですよ」と言われた。', 'このとき、請求書の値段は最初から9万円。10万円を払って1万円を返してもらうわけではない。払う約束をした金額は、はじめから9万円だけ。']
        },
        {
          title: 'これが取引値引き',
          paras: ['まとめ買いのお客さんや、同業者（業者さん）に、売る時点で定価から引いてあげる値引きを取引値引き（trade discount）という。定価は list price（リストプライス）。'],
          list: ['いつ決まる？ 売る時点で、もう決まっている', '条件は？ たくさん買う、業者である、など', '支払いの早さとは関係ない']
        },
        {
          title: 'たこ焼き屋がスーパーに卸す',
          paras: ['冷凍たこ焼きを、近所のスーパーに掛けで卸す。定価は $2,000。まとめて買ってくれるので10%の取引値引き。売上税は20%。'],
          table: { caption: '請求書（invoice）', head: ['項目', '$'], rows: [['定価 list price', '2,000'], ['取引値引き 10%', '(200)'], ['値引き後の金額', '1,800'], ['売上税 20%', '360']], total: ['請求額', '2,160'] }
        },
        {
          title: '帳簿は値引き後から',
          paras: ['帳簿に書くのは、値引き後の $1,800 から。取引値引きの $200 は、どの勘定にも記録しない。売上税（L24）も、値引き後の $1,800 に20%をかける。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '2,160' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '1,800' },
            { side: 'Cr', account: 'Sales tax（売上税）', amount: '360' }
          ]
        },
        {
          title: '定価から請求額まで',
          svg: `<svg viewBox="0 0 440 308" role="img" aria-label="定価から取引値引きを引いた金額が売上になり、売上税を足すと請求額になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">定価から請求額まで</text><rect x="20" y="52" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="86" font-size="15" fill="var(--quiet)">定価（list price）</text><text x="400" y="87" text-anchor="end" font-size="18" fill="var(--quiet)">$2,000</text><text x="220" y="130" text-anchor="middle" fill="var(--ink)">− 取引値引き $200（記録しない）</text><rect x="20" y="144" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="178" font-size="15" font-weight="600" fill="var(--ink)">売上（revenue）</text><text x="400" y="179" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$1,800</text><text x="220" y="222" text-anchor="middle" fill="var(--ink)">＋ 売上税 20% $360</text><rect x="20" y="236" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="270" font-size="15" font-weight="600" fill="var(--ink)">請求額（売掛金）</text><text x="400" y="271" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$2,160</text></svg>`,
          caption: '帳簿に出てくるのは、色の付いた売上から下だけ。定価と取引値引きは請求書の上にしか出てこない。'
        },
        {
          title: '買った側も同じ',
          paras: ['スーパー側も、仕入（purchases）を値引き後の $1,800 で記録する。「受けた割引（discounts received、L25）」にはしない。', '受けた割引は「早く払ったごほうび」。取引値引きは「最初から安い値段」。別物になる。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '1,800' },
            { side: 'Dr', account: 'Sales tax（売上税）', amount: '360' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '2,160' }
          ]
        },
        {
          title: 'なぜ？ 定価で記録しない理由',
          paras: ['売上は「お客さんから受け取る権利のある金額」で記録するから（IFRS 15 という収益の基準）。スーパーが払う約束をしたのは、最初から $1,800（＋税）。$2,000 を受け取る権利は一度もない。', '定価は値札に書いてあるだけの数字で、実際の取引の金額ではない。だから「$2,000 で売上を記録して、$200 を費用にする」とはしない。']
        },
        {
          title: '例題',
          example: {
            problem: 'Lemon社は定価 $8,000 の商品を掛けで売った。取引値引きは15%、売上税は20%（値引き後の金額にかかる）。売上・売上税・売掛金はいくら？',
            steps: ['取引値引き: $8,000 × 15% ＝ $1,200', '値引き後: $8,000 − $1,200 ＝ $6,800。これが売上（revenue）', '売上税: $6,800 × 20% ＝ $1,360', '売掛金: $6,800 ＋ $1,360 ＝ $8,160', '仕訳: Dr Trade receivables 8,160 / Cr Revenue 6,800 / Cr Sales tax 1,360'],
            answer: '売上 $6,800、売上税 $1,360、売掛金 $8,160'
          }
        },
        {
          title: 'よくある間違い',
          list: ['定価 $8,000 で売上を記録して、値引きを費用にする', '売上税を定価にかける（$8,000 × 20%）', '買った側で、取引値引きを「受けた割引」にしてしまう'],
          note: { kind: 'warn', text: '取引値引きは「最初からなかった金額」。どの勘定にも出てこない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取引値引きは、売る時点で定価から引く値引き（まとめ買い・業者向け）', '売上も仕入も、値引き後の金額で記録する。値引き額は記録しない', '売上税は、値引き後の金額にかける']
        },
        {
          title: '英単語',
          words: [
            ['trade discount', 'トレード・ディスカウント', '取引値引き'],
            ['list price', 'リストプライス', '定価'],
            ['bulk purchase', 'バルク・パーチェス', 'まとめ買い'],
            ['net of trade discount', '', '取引値引きを引いた後の金額で'],
            ['invoice', 'インボイス', '請求書'],
            ['IFRS 15', '', '顧客との契約から生じる収益の基準']
          ]
        }
      ],
      quiz: [
        { q: '取引値引き（trade discount）の説明として正しいのは？', choices: ['売る時点で定価から引く値引き。まとめ買いや業者向け', '期限より早く払ってくれたら引く値引き', '売った後に返品された分を引くこと', '費用として記録する値引き'], answer: 0, explain: '取引値引きは売る時点で決まる値引き。早く払ったら引くのは早期支払割引（次のレッスン）。返品は売上戻り（L22）。取引値引きは記録しないので、費用にもならない。' },
        { q: 'A business sells goods with a list price of $5,000 to a customer and gives a trade discount of 20%. What amount should be recorded as revenue?', choices: ['$5,000', '$4,000', '$1,000', '$6,000'], answer: 1, explain: '$5,000 × 20% ＝ $1,000 の値引き。売上は $5,000 − $1,000 ＝ $4,000。$5,000 は定価のまま記録した間違い、$6,000 は値引きを足してしまった間違い。' },
        { q: 'Goods with a list price of $3,000 are sold on credit with a trade discount of 10%. Sales tax at 20% is charged on the net amount. What is the total amount receivable from the customer?', type: 'number', answer: 3240, unit: '$', explain: '値引き後 $3,000 − $300 ＝ $2,700。売上税 $2,700 × 20% ＝ $540。売掛金は $2,700 ＋ $540 ＝ $3,240。定価に税をかけると $3,600 になってしまう。' },
        { q: 'A trader buys goods on credit with a list price of $1,000 less a 25% trade discount. Which journal entry is correct? (Ignore sales tax.)', choices: ['Dr Purchases $750, Cr Trade payables $750', 'Dr Purchases $1,000, Cr Trade payables $750, Cr Discounts received $250', 'Dr Purchases $1,000, Cr Trade payables $1,000', 'Dr Trade payables $750, Cr Purchases $750'], answer: 0, explain: '仕入は値引き後の $750 で記録する。取引値引きは discounts received にしない。4つ目は借方と貸方が逆。' },
        { q: 'スーパーが受けた取引値引き $200。受けた割引（discounts received）として収益にする？', choices: ['する。値引きはどれも discounts received になる', 'しない。仕入を値引き後の金額で記録するだけ'], answer: 1, explain: 'discounts received（L25）は、早く払ったことで受けた割引。取引値引きは最初から安い値段なので、どこにも記録しない。' }
      ]
    },
    {
      id: 'L27',
      no: 27,
      title: '早期支払割引（settlement discount）',
      goal: '早期支払割引を、お客さんが使うかどうかの見込みに合わせて売上に反映し、見込みが外れたときの調整まで仕訳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D1(f)ii', 'K1:C1(b)'],
      slides: [
        {
          title: '「早く払えば5%引き」',
          paras: ['英会話教室の請求書に「10日以内に払えば5%引き」と書いてある。月謝は2万円。早く払えば1万9千円、遅れると2万円。', 'このように、早く払ってくれたら引く値引きを早期支払割引（settlement discount）という。請求した時点では、お客さんがそれを使うかどうか、まだ分からない。']
        },
        {
          title: '取引値引きとの違い',
          paras: ['売る側から見た早期支払割引は、discounts allowed（与えた割引）とも呼ばれる。'],
          table: { caption: '2つの値引き', head: ['比べる点', '取引値引き', '早期支払割引'], rows: [['いつ決まる？', '売る時点', '払う時点'], ['条件', 'まとめ買い・業者', '期限内に払う'], ['売る時点の金額', 'もう確定', 'まだ分からない']] }
        },
        {
          title: 'なぜ？ 売る時点で見込む理由',
          paras: ['IFRS 15 では、売上は「受け取れると見込む金額」で記録する。早期支払割引があると、受け取る金額がお客さん次第で変わる。こういう金額を変動対価（variable consideration）という。だから売る時点で、使うかどうかを見込んで決める。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="お客さんが割引を使いそうなら割引後、使わなそうなら割引前の金額で売上を記録する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">売る時点で見込む</text><rect x="80" y="52" width="280" height="48" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="82" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">お客さんは割引を使いそう？</text><path d="M150 100L110 140M290 100L330 140" fill="none" stroke="var(--edge)" stroke-width="1.5"/><text x="118" y="124" text-anchor="end" fill="var(--ink)">はい</text><text x="322" y="124" fill="var(--ink)">いいえ</text><rect x="20" y="140" width="180" height="96" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="110" y="172" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">割引後の金額で</text><text x="110" y="196" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売上を記録</text><text x="110" y="222" text-anchor="middle" fill="var(--ink)">$1,000 → $950</text><rect x="240" y="140" width="180" height="96" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="172" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">割引前の金額で</text><text x="330" y="196" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売上を記録</text><text x="330" y="222" text-anchor="middle" fill="var(--ink)">$1,000</text><text x="220" y="270" text-anchor="middle" fill="var(--ink)">外れたら、分かった時点で売上を直す</text></svg>`
        },
        {
          title: '使うと見込むとき',
          paras: ['たこ焼き屋がスーパーに $1,000 を掛けで売った。「10日以内なら5%引き」。スーパーはいつも早く払うので、割引を使うと見込む。売上は $1,000 × 95% ＝ $950。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '950' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '950' }
          ],
          note: { kind: 'tip', text: '見込みどおり10日以内に $950 が入金 → Dr Bank 950 / Cr Trade receivables 950。売上はそのまま。' }
        },
        {
          title: '見込みが外れた①: 使わなかった',
          paras: ['割引を使うと見込んだのに、スーパーは期限の10日を過ぎ、30日後に $1,000 全額を払った。多くもらえる $50 は、期限が過ぎて「使わない」と分かった時点で売上に足す。入金と一緒に書くことが多い。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '1,000' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '950' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '50' }
          ],
          note: { kind: 'warn', text: '期限は過ぎたが期末にまだ入金がないときも、期末に Dr Trade receivables 50 / Cr Revenue 50。売掛金は全額の $1,000 になる。' }
        },
        {
          title: '見込みが外れた②: 使った',
          paras: ['別のお客さんは、いつも支払いが遅い。割引は使わないと見込み、売上を $1,000 で記録した（Dr Trade receivables 1,000 / Cr Revenue 1,000）。', 'ところが10日以内に $950 が入金された。割引した $50 は、費用ではなく売上を減らす。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '950' },
            { side: 'Dr', account: 'Revenue（売上）', amount: '50' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '1,000' }
          ]
        },
        {
          title: '4つのパターンのまとめ',
          table: { caption: '見込みと実際', head: ['見込み → 実際', '分かった時点の調整'], rows: [['使う → 使った', 'なし'], ['使う → 使わなかった', '売上を増やす（Cr Revenue）'], ['使わない → 使わなかった', 'なし'], ['使わない → 使った', '売上を減らす（Dr Revenue）']] },
          after: '割引を費用（expense）にはしない。最後に売上が「実際に受け取った金額」になるよう直すだけ。',
          note: { kind: 'tip', text: '早期支払割引と売上税が一緒に出る問題では、売上税をどの金額にかけるかは問題文の指示に従う。' }
        },
        {
          title: '例題',
          example: {
            problem: 'Kite社は定価 $12,000 の商品を掛けで売った。取引値引き10%、さらに「14日以内に払えば4%引き」。お客さんは割引を使うと見込まれる。(1) 売る時点の売上は？ (2) 実際は40日後に払った。入金額と、追加の売上は？',
            steps: ['まず取引値引き: $12,000 × 10% ＝ $1,200 → $10,800', '次に早期支払割引: $10,800 × 4% ＝ $432', '使うと見込むので、売上は $10,800 − $432 ＝ $10,368', '仕訳: Dr Trade receivables 10,368 / Cr Revenue 10,368', '40日後なので割引は使えない。入金は $10,800', '仕訳: Dr Bank 10,800 / Cr Trade receivables 10,368 / Cr Revenue 432'],
            answer: '(1) $10,368　(2) 入金 $10,800、追加の売上 $432'
          }
        },
        {
          title: 'よくある間違い',
          list: ['割引を discounts allowed という費用にする（昔のやり方。今の ACCA では売上を減らす）', '早期支払割引を定価にかける。取引値引きを先に引いてからかける', '使うと見込むのに、割引前の金額で売上を記録する'],
          note: { kind: 'warn', text: '受けた割引（discounts received、L25）は、買った側の収益。売った側の早期支払割引は、売上を減らす。立場で扱いが違う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['早期支払割引は、期限内に払ったら引く値引き。売る時点では使うか分からない', '売る時点で見込む: 使いそう → 割引後、使わなそう → 割引前の金額で売上を記録', '外れたら、分かった時点（期限切れか入金）で売上を直す。費用にはしない']
        },
        {
          title: '英単語',
          words: [
            ['settlement discount', 'セトルメント・ディスカウント', '早期支払割引'],
            ['early settlement discount', '', '早期支払割引（同じ意味）'],
            ['discounts allowed', 'ディスカウンツ・アラウド', '与えた割引（売る側の割引）'],
            ['variable consideration', 'ヴァリアブル・コンシダレーション', '変動対価（変わりうる受取額）'],
            ['expected to take the discount', '', '割引を使うと見込まれる'],
            ['within 10 days', '', '10日以内に']
          ]
        }
      ],
      quiz: [
        { q: 'A business sells goods on credit for $2,000 and offers a 5% settlement discount for payment within 7 days. The customer is expected to take the discount. What revenue should be recognised at the date of sale?', choices: ['$2,000', '$1,900', '$100', '$2,100'], answer: 1, explain: '使うと見込むので、割引後の $2,000 × 95% ＝ $1,900 で売上を記録する。$2,000 は使わないと見込むときの金額。' },
        { q: 'Goods were sold for $4,000 with a 3% settlement discount for payment within 10 days. The customer was not expected to take the discount, but paid within 10 days. Which entry records the receipt?', choices: ['Dr Bank $3,880, Dr Revenue $120, Cr Trade receivables $4,000', 'Dr Bank $3,880, Dr Discounts allowed (expense) $120, Cr Trade receivables $4,000', 'Dr Bank $3,880, Cr Trade receivables $3,880', 'Dr Bank $4,000, Cr Trade receivables $3,880, Cr Revenue $120'], answer: 0, explain: '売上は $4,000 で記録済み。割引 $4,000 × 3% ＝ $120 を使われたので、入金は $3,880。$120 は売上を減らす（Dr Revenue）。費用にするのは昔のやり方。3つ目だと売掛金が $120 残ってしまう。' },
        { q: 'Goods with a list price of $6,000 are sold on credit. A trade discount of 20% is given, and a settlement discount of 5% is offered for payment within 14 days. The customer is expected to take the settlement discount. What revenue is recorded at the date of sale?', type: 'number', answer: 4560, unit: '$', explain: '取引値引きを先に: $6,000 × 80% ＝ $4,800。次に早期支払割引: $4,800 × 95% ＝ $4,560。両方を定価から引いて $6,000 × 75% ＝ $4,500 とするのは間違い。' },
        { q: '割引を使うと見込んで、売上と売掛金を $950 で記録した。期末の時点で割引の期限は過ぎたが、まだ入金はない。正しいのは？', choices: ['売掛金を $1,000 にし、差額 $50 を売上に足す（Dr Trade receivables 50 / Cr Revenue 50）', '入金されるまで何もしない。売掛金は $950 のまま', '売掛金を $1,000 にし、差額 $50 を受けた割引（discounts received）にする', '売掛金は $950 のまま。$50 を費用から引く'], answer: 0, explain: '期限が過ぎた時点で、お客さんは $1,000 全額を払う義務があると分かる。だから入金を待たずに売掛金と売上を $50 増やす。discounts received は買った側の勘定。' },
        { q: 'スーパーが早期支払割引を使って、$1,000 の買掛金を $950 で払った。スーパー側（買った側）では、割引 $50 をどう記録する？', choices: ['受けた割引（discounts received）として収益にする', '自分の売上を減らす', '仕入を $50 増やす'], answer: 0, explain: '買った側では、早く払って受けた割引は discounts received（L25）。Dr Trade payables 1,000 / Cr Bank 950 / Cr Discounts received 50。売上を減らすのは売った側。' },
        { q: 'Which statement about settlement discounts offered to customers is correct under IFRS 15?', choices: ['They are recorded as an expense called discounts allowed', 'Revenue is measured at the amount the business expects to receive, taking into account whether the discount is expected to be taken', 'They are deducted from the list price before any trade discount', 'Nothing is recorded until the customer pays'], answer: 1, explain: '早期支払割引は変動対価。受け取れると見込む金額で売上を決める。費用にはしない。取引値引きが先、早期支払割引は後。掛け売上は売った時点で記録する。' }
      ]
    },
    {
      id: 'L28',
      no: 28,
      title: '銀行勘定への現金取引の記帳',
      goal: 'お金の出入りを銀行勘定（bank account）に記録し、期末の残高を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D2(a)', 'K1:C3(b)'],
      slides: [
        {
          title: '通帳を思い出す',
          paras: ['給料が振り込まれると、通帳の残高が増える。家賃が引き落とされると減る。', '会社も、銀行口座のお金の出入りを1つの勘定にまとめる。これが銀行勘定（bank account）。この帳簿は cash book（現金出納帳）とも呼ばれ、最初の記録と勘定の両方の役目をする。']
        },
        {
          title: '入金は左、出金は右',
          paras: ['銀行のお金は資産。資産が増えたら借方、減ったら貸方（L13）。だから入金は借方、出金は貸方に書く。', 'L21〜L25 の仕訳では Cash と書いた。ACCA の問題でも cash と bank はほぼ同じ意味で使われ、どちらも同じ側に書く。'],
          formula: 'お金が入る → Dr Bank ／ お金が出る → Cr Bank'
        },
        {
          title: 'よく出る入金と出金',
          table: { caption: '銀行勘定に入るもの', head: ['入金（Dr Bank）', '出金（Cr Bank）'], rows: [['現金売上（cash sales）', '現金仕入（cash purchases）'], ['売掛金の回収', '買掛金の支払い'], ['オーナーの元入れ', '引出し（drawings）'], ['借入れ（loan received）', '借入金の返済'], ['受取利息', '費用・固定資産の支払い']] }
        },
        {
          title: 'たこ焼き屋の1月',
          paras: ['期首 $1,200、入金の合計 $5,500、出金の合計 $5,000。借方 $6,700、貸方 $5,000 なので、差額 $1,700 を少ない貸方に Balance c/d と書いて締める（L18 と同じ）。', '借方の方が多いので借方残高＝口座にあるお金。翌月は借方の Balance b/d $1,700 から始まる。'],
          tAccount: {
            name: 'Bank',
            debit: [['Balance b/d', '1,200'], ['Revenue（現金売上）', '3,000'], ['Trade receivables', '2,500']],
            credit: [['Trade payables', '1,800'], ['Rent', '700'], ['Drawings', '500'], ['Motor van', '2,000']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '1,700' }
          }
        },
        {
          title: '売掛金の回収は売上ではない',
          paras: ['掛けで売ったとき、売上はもう記録してある（L21）。お金が入ったときは、売掛金が減るだけ。買掛金を払うときも同じで、仕入は増えない。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '2,500' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '2,500' }
          ],
          note: { kind: 'warn', text: '回収のときに Cr Revenue にすると、売上を2回数えてしまう。売上税も2回目は付けない。' }
        },
        {
          title: '口座から直接引かれるもの',
          list: ['銀行手数料（bank charges）: Dr Bank charges / Cr Bank', '受取利息（interest received）: Dr Bank / Cr Interest received', '自動引落し（direct debit）や定期払い（standing order）も、出金なので Cr Bank'],
          after: 'これらは銀行の明細書（bank statement）を見て初めて気づくことが多い。銀行勘定調整のレッスンでまた出てくる。'
        },
        {
          title: '例題',
          example: {
            problem: 'Mango社の銀行勘定。期首残高は $800（借方）。今月: 現金売上 $2,400（売上税20%込み）、売掛金の回収 $1,500、仕入先への支払い $2,100、電気代 $300、銀行手数料 $40。(1) 現金売上の仕訳は？ (2) 期末残高は？',
            steps: ['税込み $2,400 を分ける: 売上 $2,400 ÷ 1.2 ＝ $2,000、売上税 $400', '仕訳: Dr Bank 2,400 / Cr Revenue 2,000 / Cr Sales tax 400', '期首＋入金: $800 ＋ $2,400 ＋ $1,500 ＝ $4,700', '出金: $2,100 ＋ $300 ＋ $40 ＝ $2,440', '残高: $4,700 − $2,440 ＝ $2,260（借方残高＝口座にお金がある）'],
            answer: '(1) Dr Bank 2,400 / Cr Revenue 2,000 / Cr Sales tax 400　(2) $2,260（借方残高）'
          }
        },
        {
          title: '残高が貸方になったら',
          paras: ['出金が多すぎると、残高は貸方になる。口座がマイナス、つまり銀行からお金を借りている状態。これを当座借越（bank overdraft）といい、負債になる。'],
          formula: '借方残高＝預金（資産）／貸方残高＝当座借越（負債）',
          note: { kind: 'tip', text: '期首が借越 $300、入金 $1,000、出金 $1,500 なら、−300 ＋ 1,000 − 1,500 ＝ −800。期末は $800 の当座借越（貸方残高）。' }
        },
        {
          title: 'なぜ？ お金は全部ここを通す',
          paras: ['お金は一番なくなりやすく、一番ごまかしやすい資産だから。出入りを全部記録しておけば、銀行の明細書と照らして確かめられる。', 'ただし銀行の明細書は、銀行から見た記録。あなたの預金は、銀行にとっては「返すお金」＝負債。だから明細書では入金が Credit、出金が Debit と、逆に書かれる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['入金は借方（Dr Bank）、出金は貸方（Cr Bank）', '売掛金の回収・買掛金の支払いでは、売上・仕入は増えない', '貸方残高は当座借越＝負債']
        },
        {
          title: '英単語',
          words: [
            ['cash book', 'キャッシュブック', '現金出納帳（銀行勘定の帳簿）'],
            ['bank general ledger account', '', '銀行勘定（元帳の銀行の勘定）'],
            ['receipts', 'レシーツ', '入金'],
            ['payments', 'ペイメンツ', '出金、支払い'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（口座のマイナス）'],
            ['bank statement', 'バンク・ステートメント', '銀行の明細書'],
            ['bank charges', 'バンク・チャージズ', '銀行手数料'],
            ['cash sales', 'キャッシュ・セールス', '現金売上']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following would be recorded on the debit side of the bank account?', choices: ['Payment of rent', 'Cash received from a credit customer', 'Drawings by the owner', 'Repayment of a loan'], answer: 1, explain: 'お金が入るものが借方。家賃の支払い・引出し・借入金の返済は、どれもお金が出ていくので貸方。' },
        { q: 'A business had a bank overdraft of $300 at the start of the month. During the month it received $1,000 and paid $1,500. What is the bank overdraft at the end of the month?', type: 'number', answer: 800, unit: '$', explain: '−$300 ＋ $1,000 − $1,500 ＝ −$800。期末は $800 の当座借越。期首を預金と思って $300 ＋ 1,000 − 1,500 ＝ −$200 とするのが典型的な間違い。' },
        { q: 'A credit customer pays $600 by bank transfer. Which entry is correct?', choices: ['Dr Bank $600, Cr Trade receivables $600', 'Dr Bank $600, Cr Revenue $600', 'Dr Trade receivables $600, Cr Bank $600', 'Dr Revenue $600, Cr Trade receivables $600'], answer: 0, explain: '売上は掛けで売ったときに記録済み。入金では売掛金を減らす。Cr Revenue だと売上を2回数える。3つ目は借方と貸方が逆。' },
        { q: 'Cash sales of $1,800 include sales tax at 20%. What amount is credited to revenue?', choices: ['$1,800', '$1,500', '$1,440', '$300'], answer: 1, explain: '税込み金額は売上の120%なので、$1,800 ÷ 1.2 ＝ $1,500。売上税は $300。$1,800 × 80% ＝ $1,440 は、税込みから20%を引いてしまう間違い。' },
        { q: '銀行勘定の残高が貸方 $500。これは何を意味する？', choices: ['口座に $500 ある（資産）', '当座借越 $500（負債）', '今月の売上が $500', '今月の費用が $500'], answer: 1, explain: '資産の勘定が貸方残高になるのは、マイナスになっているとき。銀行から借りている状態なので負債。' },
        { q: '銀行の明細書で、あなたの入金が「Credit」と書いてあった。どういうこと？', choices: ['銀行のまちがい。入金は借方のはず', 'おかしくない。銀行から見ると預金は負債なので、増えると貸方になる'], answer: 1, explain: '明細書は銀行の帳簿から作られる。銀行にとって預金は返すお金（負債）なので、借方・貸方が会社の帳簿と逆になる。' }
      ]
    },
    {
      id: 'L29',
      no: 29,
      title: '小口現金の記録が必要な理由',
      goal: '小口現金を記録する理由を説明でき、定額資金前渡制で補充額を計算して仕訳できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D2(b)', 'K1:C3(a)', 'K1:C3(b)'],
      slides: [
        {
          title: '家族の買い物財布',
          paras: ['家族用の財布に、毎週5,000円を入れておく。買い物のたびにレシートを入れてもらう。週末に「残りのお金＋レシート」が5,000円になるか確かめて、使った分だけ足して5,000円に戻す。', 'こうすると、細かい出費も漏れずに分かり、なくなったお金にもすぐ気づける。']
        },
        {
          title: '小口現金とは',
          paras: ['切手、お茶、タクシー代のような少額の支払いを、毎回銀行から払うのは手間がかかる。そこで事務所に少しだけ現金を置いておく。これが小口現金（petty cash）。現金なので流動資産になる。', '支払いのたびに、何に・いくら使ったかを書いた小口現金伝票（petty cash voucher）を作り、レシートを付ける。']
        },
        {
          title: 'なぜ？ 記録が必要な理由',
          list: ['現金はなくなりやすい。記録がないと、盗難や使い込みに気づけない', '少額でも会社の費用。記録しないと費用が漏れて、利益が実際より大きく見える', '伝票とレシートが、承認を受けた支払いの証拠になる', '払った売上税を取り戻すにも、レシートが必要', '伝票を小口現金出納帳（petty cash book）にまとめると、費用ごとの合計を元帳に記録できる']
        },
        {
          title: '定額資金前渡制',
          paras: ['多くの会社は定額資金前渡制（imprest system）を使う。決めた金額（float、定額）を渡しておき、期末に使った分だけ銀行から補充して、元の金額に戻す。', '補充のたびに「手元の現金＋伝票＝定額」を確かめられるので、なくなったお金にすぐ気づける。'],
          formula: '補充額 ＝ 定額 − 手元の現金'
        },
        {
          title: 'たこ焼き屋の小口現金',
          paras: ['定額 $300。今月は文房具 $45、交通費 $70、お茶代 $25 を払った。伝票の合計 $140、手元の現金 $160。'],
          svg: `<svg viewBox="0 0 440 308" role="img" aria-label="定額300ドルのうち140ドルを使い、使った140ドルを補充して300ドルに戻す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">使った分だけ足して元に戻す</text><rect x="40" y="90" width="100" height="180" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="176" text-anchor="middle" font-size="15" fill="var(--ink)">現金</text><text x="90" y="198" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$300</text><rect x="170" y="90" width="100" height="84" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="5 4"/><text x="220" y="126" text-anchor="middle" font-size="15" fill="var(--quiet)">伝票</text><text x="220" y="148" text-anchor="middle" font-size="15" fill="var(--quiet)">$140</text><rect x="170" y="174" width="100" height="96" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="216" text-anchor="middle" font-size="15" fill="var(--ink)">現金</text><text x="220" y="238" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$160</text><rect x="300" y="90" width="100" height="84" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="350" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">補充</text><text x="350" y="148" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$140</text><rect x="300" y="174" width="100" height="96" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="216" text-anchor="middle" font-size="15" fill="var(--ink)">現金</text><text x="350" y="238" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$160</text><text x="90" y="296" text-anchor="middle" fill="var(--ink)">月初（定額）</text><text x="220" y="296" text-anchor="middle" fill="var(--ink)">月末</text><text x="350" y="296" text-anchor="middle" fill="var(--ink)">補充後 $300</text></svg>`,
          caption: '補充額 ＝ $300 − $160 ＝ $140。今回は伝票の合計と同じになる。'
        },
        {
          title: '小口現金の仕訳',
          paras: ['伝票の費用は、小口現金を減らして記録する。補充は、銀行から小口現金へお金を移すだけなので Dr Petty cash 140 / Cr Bank 140。'],
          journal: [
            { side: 'Dr', account: 'Stationery（文房具）', amount: '45' },
            { side: 'Dr', account: 'Travel（交通費）', amount: '70' },
            { side: 'Dr', account: 'Staff refreshments（お茶代）', amount: '25' },
            { side: 'Cr', account: 'Petty cash（小口現金）', amount: '140' }
          ]
        },
        {
          title: '例題',
          example: {
            problem: '小口現金の定額は $250。今月の伝票: 文房具 $30、清掃 $45、タクシー代 $48（売上税20%込み）。従業員が私用の電話代 $12 を小口現金に入れた。(1) 月末の手元の現金は？ (2) 補充額は？',
            steps: ['払った合計: $30 ＋ $45 ＋ $48 ＝ $123', '入ってきたお金: $12（Dr Petty cash 12 / Cr Telephone expense 12）', '手元の現金: $250 − $123 ＋ $12 ＝ $139', '補充額: $250 − $139 ＝ $111（伝票の $123 ではない）', 'タクシー代を分ける: $48 ÷ 1.2 ＝ $40 が費用、$8 が売上税（Dr Travel 40 / Dr Sales tax 8）', '補充の仕訳: Dr Petty cash 111 / Cr Bank 111'],
            answer: '(1) $139　(2) $111'
          }
        },
        {
          title: '数えたら足りないとき',
          paras: ['定額 $500。月末に伝票が $340、手元の現金が $130。合わせて $470 で、$30 足りない。伝票なしで使われたか、なくなったお金。', '補充額は $500 − $130 ＝ $370。足りない $30 は原因を調べたうえで、費用（例: sundry expenses）として Cr Petty cash で記録する。'],
          note: { kind: 'warn', text: '補充額は「伝票の合計」ではなく「定額 − 手元の現金」で出す。お金が入ってきたときや足りないときに差が出る。' }
        },
        {
          title: 'よくある間違い',
          list: ['補充額を伝票の合計だけで出す（入ってきたお金や不足を忘れる）', '伝票で費用を記録した後、補充をまた費用にする（費用を2回数える）', '補充の仕訳を逆にする。正しくは Dr Petty cash / Cr Bank']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['小口現金は少額の支払い用の現金。伝票とレシートで記録する', '記録する理由: 盗難・使い込みに気づく、費用の漏れを防ぐ、証拠を残す', '補充額 ＝ 定額 − 手元の現金。仕訳は Dr Petty cash / Cr Bank']
        },
        {
          title: '英単語',
          words: [
            ['petty cash', 'ペティ・キャッシュ', '小口現金'],
            ['petty cash voucher', 'ペティ・キャッシュ・バウチャー', '小口現金伝票'],
            ['imprest system', 'インプレスト・システム', '定額資金前渡制'],
            ['float', 'フロート', '最初に渡しておく定額'],
            ['restore the float / top up', 'トップアップ', '補充して定額に戻す'],
            ['petty cash book', '', '小口現金出納帳']
          ]
        }
      ],
      quiz: [
        { q: '小口現金の記録が必要な理由として、当てはまらないものは？', choices: ['盗難や使い込みに気づけるようにする', '少額の費用も漏れなく記録する', '支払いの証拠を残す', '小口現金の支払いは費用にならないので、別にしておく'], answer: 3, explain: '小口現金の支払いも会社の費用。記録しないと費用が漏れて利益が大きく見える。だから伝票で記録する。' },
        { q: 'A business operates an imprest petty cash system with a float of $400. During the month, vouchers totalling $265 were paid and $15 was received from an employee for a private telephone call. How much cash is needed to restore the float?', type: 'number', answer: 250, unit: '$', explain: '手元の現金は $400 − $265 ＋ $15 ＝ $150。補充額は $400 − $150 ＝ $250。伝票の合計 $265 をそのまま答えるのは、入ってきた $15 を忘れた間違い。' },
        { q: 'Which entry records the reimbursement of the petty cash float from the bank?', choices: ['Dr Petty cash, Cr Bank', 'Dr Bank, Cr Petty cash', 'Dr Expenses, Cr Petty cash', 'Dr Petty cash, Cr Expenses'], answer: 0, explain: '銀行のお金が小口現金に移るだけ。増える小口現金が借方、減る銀行が貸方。費用は伝票のときに記録済み。' },
        { q: 'The petty cash float is $500. At the month end there are vouchers of $340 and cash of $130. Which of the following is correct?', choices: ['$30 is missing and $370 is needed to restore the float', '$30 is missing and $340 is needed to restore the float', 'Nothing is missing and $370 is needed to restore the float', '$30 is surplus and $340 is needed to restore the float'], answer: 0, explain: '$340 ＋ $130 ＝ $470 なので $30 足りない。補充額は $500 − $130 ＝ $370。伝票の $340 だけ足すと、定額に戻らない。' },
        { q: 'タクシー代 $60（売上税20%込み）を小口現金で払った。正しい仕訳は？', choices: ['Dr Travel 50 / Dr Sales tax 10 / Cr Petty cash 60', 'Dr Travel 60 / Cr Petty cash 60', 'Dr Travel 48 / Dr Sales tax 12 / Cr Petty cash 60', 'Dr Petty cash 60 / Cr Travel 60'], answer: 0, explain: '$60 ÷ 1.2 ＝ $50 が費用、残り $10 が取り戻せる売上税。$60 × 20% ＝ $12 とするのは、税込み金額に税率をかけてしまう間違い。' }
      ]
    }
  ],
  cards: [
    { id: 'L26-1', lesson: 'L26', q: '取引値引き（trade discount）とは？', a: '売る時点で定価から引く値引き。まとめ買い・業者向け' },
    { id: 'L26-2', lesson: 'L26', q: '取引値引きは帳簿にどう記録する？', a: '記録しない。売上・仕入を値引き後の金額で書くだけ' },
    { id: 'L26-3', lesson: 'L26', q: '売上税は定価と値引き後、どちらにかける？', a: '取引値引き後の金額にかける' },
    { id: 'L26-4', lesson: 'L26', q: 'なぜ定価で売上を記録しない？', a: '売上は受け取る権利のある金額で記録する。定価を受け取る権利は一度もないから' },
    { id: 'L26-5', lesson: 'L26', q: '定価 $2,000、取引値引き10%、売上税20%。請求額は？', a: '$1,800 ＋ $360 ＝ $2,160' },
    { id: 'L27-1', lesson: 'L27', q: '早期支払割引（settlement discount）とは？', a: '期限内に払ったら引く値引き。売る時点では使うか分からない' },
    { id: 'L27-2', lesson: 'L27', q: '割引を使うと見込むお客さん。売上はいくらで記録する？', a: '割引後の金額' },
    { id: 'L27-3', lesson: 'L27', q: '使うと見込んだのに期限が過ぎた（全額を払う）。差額は？', a: '期限が過ぎた時点で売上に足す（Cr Revenue）。入金と一緒に書くことが多い' },
    { id: 'L27-4', lesson: 'L27', q: '使わないと見込んだのに割引を使われた。差額は？', a: '入金時に売上を減らす（Dr Revenue）。費用にはしない' },
    { id: 'L27-5', lesson: 'L27', q: 'なぜ見込みで売上を決める？', a: 'IFRS 15 で売上は受け取れると見込む金額。割引で変わる変動対価だから' },
    { id: 'L27-6', lesson: 'L27', q: '取引値引きと早期支払割引、どちらを先に引く？', a: '取引値引きが先。早期支払割引は値引き後の金額にかける' },
    { id: 'L27-7', lesson: 'L27', q: '割引後で売上を記録。期末に期限は過ぎたが未入金。売掛金は？', a: '全額。差額を Dr Trade receivables / Cr Revenue で足す' },
    { id: 'L28-1', lesson: 'L28', q: '銀行勘定で、入金・出金はどちら側？', a: '入金は借方（Dr Bank）、出金は貸方（Cr Bank）' },
    { id: 'L28-2', lesson: 'L28', q: '掛けのお客さんから $600 入金。仕訳は？', a: 'Dr Bank 600 / Cr Trade receivables 600（売上は増やさない）' },
    { id: 'L28-3', lesson: 'L28', q: '銀行勘定が貸方残高。何を意味する？', a: '当座借越（bank overdraft）。負債' },
    { id: 'L28-4', lesson: 'L28', q: '期首借越 $300、入金 $1,000、出金 $1,500。期末は？', a: '$800 の当座借越（貸方残高）' },
    { id: 'L28-5', lesson: 'L28', q: 'なぜ銀行の明細書は借方・貸方が逆？', a: '銀行から見ると、預金は「返すお金」＝負債だから' },
    { id: 'L28-6', lesson: 'L28', q: '税込み現金売上 $2,400（売上税20%）の仕訳は？', a: 'Dr Bank 2,400 / Cr Revenue 2,000 / Cr Sales tax 400' },
    { id: 'L29-1', lesson: 'L29', q: '小口現金（petty cash）とは？', a: '少額の支払い用に事務所に置いておく現金' },
    { id: 'L29-2', lesson: 'L29', q: '小口現金の記録が必要な理由は？', a: '盗難・使い込みに気づく、費用の漏れを防ぐ、支払いの証拠を残す' },
    { id: 'L29-3', lesson: 'L29', q: '定額資金前渡制（imprest system）とは？', a: '決めた定額を渡し、使った分だけ補充して元の金額に戻すしくみ' },
    { id: 'L29-4', lesson: 'L29', q: '小口現金の補充額の式は？', a: '定額 − 手元の現金' },
    { id: 'L29-5', lesson: 'L29', q: '小口現金を補充する仕訳は？', a: 'Dr Petty cash / Cr Bank' },
    { id: 'L29-6', lesson: 'L29', q: '定額 $400、伝票 $265、従業員からの入金 $15。補充額は？', a: '手元 $150 なので、$400 − $150 ＝ $250' }
  ]
});
