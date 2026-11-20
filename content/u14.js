(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 14,
  part: 9,
  partTitle: '売掛金と買掛金',
  lessons: [
    {
      id: 'L68',
      no: 68,
      title: '売掛金・買掛金の例',
      goal: '売掛金と買掛金がどんなもので、どこに載るかを説明し、その他の債権・債務と見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D8(a)'],
      slides: [
        {
          title: 'ツケで考える',
          paras: ['行きつけの定食屋で「今月の分は月末にまとめて払うね」とツケにしてもらう。お店から見ると、あなたは「あとでお金をくれる人」。あなたから見ると、お店は「あとでお金を払う相手」。', '商売では、このツケが毎日たくさん生まれる。お店側と、お客さん側で呼び名が違う。']
        },
        {
          title: '売掛金と買掛金',
          paras: ['売掛金（trade receivables）: 掛けで売った相手から、あとで受け取るお金。資産になる。', '買掛金（trade payables）: 掛けで買った相手に、あとで払うお金。負債になる。', 'どちらもふつう1年以内に片づくので、流動資産（current assets）・流動負債（current liabilities）に分ける。'],
          note: { kind: 'tip', text: 'receive＝受け取る、pay＝払う。receivables は「受け取れるもの」、payables は「払うべきもの」と覚える。' }
        },
        {
          title: '同じ取引を両側から見る',
          paras: ['たこ焼き屋が、冷凍たこ焼き $500 をスーパーに掛けで卸した。支払いは30日後。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="掛けの取引は、売った側では売掛金、買った側では買掛金になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">同じ取引を両側から見る</text><rect x="20" y="52" width="180" height="152" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="110" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">たこ焼き屋</text><text x="110" y="102" text-anchor="middle" fill="var(--quiet)">売った側</text><text x="110" y="138" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">売掛金 $500</text><text x="110" y="160" text-anchor="middle" font-size="12.5" fill="var(--quiet)">trade receivable</text><text x="110" y="186" text-anchor="middle" fill="var(--ink)">資産（もらう権利）</text><rect x="240" y="52" width="180" height="152" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">スーパー</text><text x="330" y="102" text-anchor="middle" fill="var(--quiet)">買った側</text><text x="330" y="138" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">買掛金 $500</text><text x="330" y="160" text-anchor="middle" font-size="12.5" fill="var(--quiet)">trade payable</text><text x="330" y="186" text-anchor="middle" fill="var(--ink)">負債（払う義務）</text><text x="220" y="234" text-anchor="middle" fill="var(--ink)">① 今日: 商品を渡す</text><path d="M40 246H392" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M400 246l-10 -5v10z" fill="var(--quiet)"/><text x="220" y="274" text-anchor="middle" fill="var(--ink)">② 30日後: お金を払う</text><path d="M48 286H400" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M40 286l10 -5v10z" fill="var(--quiet)"/></svg>`,
          caption: 'たこ焼き屋の売掛金と、スーパーの買掛金は同じ $500。1つの取引が、売った側では資産、買った側では負債になる。'
        },
        {
          title: 'ツケが生まれて、消える',
          paras: ['掛けで売った日に売掛金が生まれ（借方）、入金された日に消える（Dr Bank / Cr Trade receivables）。L21 で学んだ形。', '買掛金は逆。掛けで買うと貸方に生まれ、払うと借方で消える。下は、たこ焼き屋が売った日の仕訳。', '帳簿とは別に、お客さんごとの明細（売掛金元帳、receivables ledger）も付けて、誰にいくら残っているかを管理する。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '500' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '500' }
          ]
        },
        {
          title: '1年間の売掛金の動き',
          paras: ['期首に $5,000 あった。1年で掛け売上が $40,000、入金が $38,000、売上戻りが $1,000。', '借方 $45,000、貸方 $39,000。差額 $6,000 を少ない貸方に Balance c/d と書いて締める（L18）。翌期は借方の b/d $6,000 から始まる。'],
          tAccount: {
            name: 'Trade receivables',
            debit: [['Balance b/d', '5,000'], ['Revenue', '40,000']],
            credit: [['Bank', '38,000'], ['Sales returns', '1,000']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '6,000' }
          },
          formula: '期首 ＋ 掛け売上 − 入金 − 売上戻り ＝ 期末の売掛金'
        },
        {
          title: 'その他の債権・債務',
          paras: ['「trade（取引）」が付くのは、本業の売り買いから生まれたものだけ。それ以外は other（その他）になる。'],
          table: {
            caption: '債権・債務の例',
            head: ['種類', '例'],
            rows: [
              ['売掛金 trade receivables', '掛けで売った商品・サービスの代金'],
              ['その他の債権 other receivables', '前払費用、未収収益、従業員への貸付、戻ってくる売上税'],
              ['買掛金 trade payables', '掛けで買った商品・サービスの代金（仕入先への未払い）'],
              ['その他の債務 other payables', '請求書が届いた未払いの経費、前受収益、納める売上税']
            ]
          }
        },
        {
          title: '財政状態計算書のどこに載る？',
          paras: ['売掛金は、その他の債権とまとめて「trade and other receivables」の行に載る。', '払う側は「trade and other payables」の行。決算日に払っていない次の3つが、まとめてここに載る。'],
          table: {
            caption: '決算日（12月31日）にまだ払っていないもの',
            head: ['中身', '呼び名'],
            rows: [
              ['掛けで仕入れた商品の代金', '買掛金 trade payables'],
              ['12月の電気代。請求書は届いた', 'その他の債務 other payables'],
              ['12月のガス代。請求書はまだ', '未払費用 accruals（L63）']
            ]
          },
          after: '請求書が届けば、払う金額が決まった債務になる。まだなら、使った分を見積もって未払費用にする。'
        },
        {
          title: 'なぜ？ 入金を待たずに記録する理由',
          paras: ['発生主義（L62）だから。売上は商品を渡した時点で稼いだことになる。お金がまだでも、「受け取る権利」という資産がもう生まれている。', 'もし入金まで何も書かないと、掛けで売った分の売上も、受け取る権利も成績表から消えてしまう。本当の稼ぎと持ち物が分からなくなる。']
        },
        {
          title: 'よくある間違い',
          list: ['売掛金を収益だと思う → 売掛金は資産（受け取る権利）。収益は Revenue の方。', '銀行からの借入を買掛金に入れる → 買掛金は仕入先への未払いだけ。借入は loans（借入金）。', 'お客さんから先にもらった手付金を売掛金にする → 商品をまだ渡していないので、お店の負債（前受収益、L65）。', '現金で売った分も売掛金にする → その場で受け取ったので、売掛金は生まれない。'],
          note: { kind: 'warn', text: 'receivables と payables の取り違えに注意。自分が「受け取る側」か「払う側」かで決める。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売掛金＝掛けで売った相手から受け取るお金（流動資産）', '買掛金＝掛けで買った相手に払うお金（流動負債）', '期首 ＋ 掛け売上 − 入金 − 売上戻り ＝ 期末の売掛金']
        },
        {
          title: '英単語',
          words: [
            ['trade receivables', 'トレード・レシーバブルズ', '売掛金'],
            ['trade payables', 'トレード・ペイアブルズ', '買掛金'],
            ['other receivables / other payables', '', 'その他の債権 / その他の債務'],
            ['accruals', 'アクルーアルズ', '未払費用（使ったが請求書がまだの費用）'],
            ['trade and other payables', '', '買掛金及びその他の債務（財政状態計算書の行）'],
            ['credit sale / credit purchase', '', '掛け売上 / 掛け仕入'],
            ['current assets / current liabilities', '', '流動資産 / 流動負債'],
            ['receivables ledger', '', '売掛金元帳（お客さんごとの明細）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a trade receivable?', choices: ['An amount owed by a customer for goods sold on credit', 'An amount owed to a supplier for goods bought on credit', 'Cash received from a customer for a cash sale', 'A loan made to the business by its bank'], answer: 0, explain: '売掛金は「掛けで売った相手から受け取るお金」。2つ目は買掛金（払う側）、3つ目はその場で受け取った現金なので売掛金は生まれない、4つ目は借入金（負債）。' },
        { q: 'Which of the following would be included in trade and other payables in the statement of financial position?', choices: ['An accrued electricity expense', 'Rent paid in advance', 'A bank loan repayable in five years', 'An amount owed by a customer'], answer: 0, explain: '未払費用（accrual）は、使ったのに請求書がまだ届いていない費用。請求書が届いて未払いならその他の債務（other payables）。どちらも trade and other payables に入る。前払家賃は前払費用で other receivables（資産）。5年後に返す銀行借入は借入金（loans）で非流動負債。お客さんが払うお金は売掛金（資産）。' },
        { q: '期首の売掛金 $3,200、掛け売上 $27,500、入金 $25,900、売上戻り $600。期末の売掛金は？', type: 'number', answer: 4200, unit: '$', explain: '$3,200 ＋ $27,500 − $25,900 − $600 ＝ $4,200。入金と売上戻りはどちらも売掛金を減らす（貸方）。' },
        { q: '決算日は12月31日。12月の電気代 $200 は請求書が届いたが、まだ払っていない。12月のガス代 $80 は使ったが、請求書はまだ届いていない。正しいのは？', choices: ['電気代は未払費用、ガス代はその他の債務。どちらも trade and other payables に載る', '電気代は買掛金。ガス代は請求書が届くまで何も記録しない', '電気代はその他の債務、ガス代は未払費用。どちらも trade and other payables に載る', '電気代はその他の債務。ガス代は来年払うので来年の費用'], answer: 2, explain: '請求書が届いて未払いならその他の債務、請求書がまだなら未払費用（L63）。1つ目は逆。2つ目: 本業の仕入ではない経費は買掛金ではなく、請求書がなくても使った分は今年の費用。4つ目: 払う時期ではなく使った期間で費用にする。' },
        { q: 'お客さんが、来月渡す商品の手付金 $200 を先に払った。お店から見て正しいのは？', choices: ['売掛金が $200 増える', '前受収益（負債）が $200 増える', '売上が $200 増える'], answer: 1, explain: 'まだ商品を渡していないので、売上にはならない。お金は先にもらったので「商品を渡す義務」＝前受収益（負債）。売掛金は「まだもらっていない」ときに生まれるもの。' },
        { q: 'Opening trade receivables were $8,000. Credit sales for the year were $50,000 and cash received from credit customers was $47,000. What were closing trade receivables?', choices: ['$11,000', '$5,000', '$105,000', '$3,000'], answer: 0, explain: '$8,000 ＋ $50,000 − $47,000 ＝ $11,000。$5,000 は掛け売上を引いて入金を足してしまった（逆にした）ときの答え。' }
      ]
    },
    {
      id: 'L69',
      no: 69,
      title: '掛け販売のメリットとコスト、与信限度',
      goal: '掛けで売ることの得と損を挙げ、与信限度がなんのためにあるかを説明できるようになる',
      minutes: 10,
      recall: true,
      exam: 'fa',
      outcomes: ['D8(b)', 'D8(d)'],
      slides: [
        {
          title: 'ツケを認めるお店の悩み',
          paras: ['定食屋がツケを認めると、財布を忘れた常連さんも食べに来てくれる。売上は増える。', 'でも、ツケのまま来なくなる人もいる。月末に1人ずつ請求する手間もかかる。お金が入るまで、店主は自分の貯金で材料を買うことになる。ツケには得と損の両方がある。']
        },
        {
          title: '掛けで売る＝信用を与える',
          paras: ['お客さんに「あとで払っていいですよ」と認めることを、信用を与える（offer credit facilities）という。', 'いつまでに払うかの約束を支払条件（credit terms）という。例: 請求書の日付から30日以内。'],
          note: { kind: 'tip', text: 'このレッスンの2つ（掛け販売の損得、与信限度）は FA だけの範囲で、K1（2027年7月〜）では出ない。ただ、次の年齢別分析や貸倒れを理解する土台になる。' }
        },
        {
          title: 'メリットとコスト',
          paras: ['早く払ってもらうために早期支払割引（L27）を付けると、その分も受け取る額が減る。これもコストの1つ。'],
          table: {
            caption: '掛けで売ることの得と損',
            head: ['メリット（benefits）', 'コスト（costs）'],
            rows: [
              ['売上が増える。手元にお金がないお客さんも買える', '貸倒れ: 回収できない危険（irrecoverable debts）'],
              ['ライバルに負けない。会社どうしの取引では掛けが当たり前', '入金が遅れる。その間のお金を借りれば利息がかかる'],
              ['大口の注文や、続けて買ってくれる関係ができる', '信用調査・請求・督促・記録の事務コスト']
            ]
          }
        },
        {
          title: '数字で見るコスト',
          paras: ['売掛金がいつも平均 $30,000 あるお店が、その分のお金を銀行から年利10%で借りているとする。入金を待つためだけに、1年で $30,000 × 10% ＝ $3,000 の利息を払っている。', '掛け売上 $200,000 のうち 1% が回収できなければ、さらに $2,000 の損。このコストより売上の増加が大きいときに、掛け販売は得になる。']
        },
        {
          title: '与信限度とは',
          paras: ['クレジットカードには「利用限度額 50万円」のような上限がある。カード会社が「この人にはここまでなら貸せる」と決めた金額。', 'お店も同じように、お客さんごとに「売掛金の残高はここまで」という上限を決める。これが与信限度（credit limit）。']
        },
        {
          title: '与信限度の目的',
          list: ['1人のお客さんが払えなくなったときの損を、上限までに抑える', '新しいお客さんは低く、きちんと払う常連は高く。相手の信用に合わせて決める', '注文を受ける前に「今の残高＋新しい注文」が上限を超えないか確かめる。超えるなら、先に入金してもらうか、出荷を待つ'],
          after: '上限は、信用調査会社の情報、取引先からの紹介（references）、相手の財務諸表などで決め、ときどき見直す。'
        },
        {
          title: '例題',
          example: {
            problem: 'B社の与信限度は $5,000。今の売掛金残高は $4,200。B社から $1,500 の注文が来た。このまま掛けで出荷してよい？',
            steps: ['出荷した後の残高 ＝ $4,200 ＋ $1,500 ＝ $5,700', '限度の $5,000 を $5,700 − $5,000 ＝ $700 超える', '超えるので、このままでは出荷しない。$700 以上の入金を先にもらうか、限度を見直すまで保留する'],
            answer: '限度を $700 超えるので保留。$700 以上入金されれば出荷できる'
          }
        },
        {
          title: 'よくある間違い',
          list: ['与信限度と支払条件を混ぜる → 限度は「金額」の上限、支払条件は「日数」の期限。', '与信限度を守れば貸倒れは起きない → 損を上限までに抑えるだけで、ゼロにはできない。', '掛け販売のコストは貸倒れだけ → 入金待ちのお金のコストと、事務コストもある。'],
          note: { kind: 'warn', text: '「掛けで売ると売上の記録が遅れる」は誤り。売上は売った日に記録する（L68）。遅れるのは入金だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['メリット: 売上が増える、ライバルに負けない、関係が続く', 'コスト: 貸倒れ、入金が遅れる分のお金のコスト、事務コスト', '与信限度＝お客さんごとの残高の上限。貸倒れの損を抑える']
        },
        {
          title: '英単語',
          words: [
            ['credit facilities', 'クレジット・ファシリティーズ', '掛けで売ること、信用の供与'],
            ['credit terms', 'クレジット・タームズ', '支払条件（例: 30日以内）'],
            ['credit limit', 'クレジット・リミット', '与信限度（残高の上限）'],
            ['credit control', 'クレジット・コントロール', '与信管理（売掛金の回収の管理）'],
            ['benefits / costs', '', 'メリット / コスト'],
            ['references', 'レファレンシズ', '取引先などからの信用の紹介']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a benefit of offering credit to customers?', choices: ['It may increase sales', 'It reduces the risk of irrecoverable debts', 'It speeds up cash receipts', 'It reduces administration costs'], answer: 0, explain: '掛けで売るとお客さんが買いやすくなり、売上が増えうる。残りの3つは逆で、貸倒れの危険は増え、入金は遅れ、事務コストも増える。' },
        { q: 'What is the main purpose of a customer credit limit?', choices: ['To set the maximum balance a customer may owe at any time', 'To set the number of days a customer has to pay', 'To calculate the settlement discount given to the customer', 'To record credit sales in the ledger'], answer: 0, explain: '与信限度は「残高の上限（金額）」。支払いまでの日数は支払条件（credit terms）で、与信限度とは別。' },
        { q: 'C社の与信限度は $8,000、今の売掛金残高は $6,300。限度を超えずに、あといくらまで掛けで売れる？', type: 'number', answer: 1700, unit: '$', explain: '$8,000 − $6,300 ＝ $1,700。' },
        { q: 'Which of the following is NOT a cost of offering credit to customers?', choices: ['Interest on borrowing while waiting for cash', 'Irrecoverable debts', 'Credit control and administration costs', 'A higher volume of sales'], answer: 3, explain: '売上が増えるのはメリットの方。利息、貸倒れ、事務コストは、掛けで売ることのコスト。' },
        { q: '「請求書の日付から30日以内に払う」という約束は何？', choices: ['与信限度（credit limit）', '支払条件（credit terms）', '早期支払割引（settlement discount）', '取引値引き（trade discount）'], answer: 1, explain: '日数の約束は支払条件。与信限度は金額の上限、早期支払割引は早く払ったときの割引、取引値引きは売る時点の値引き。' }
      ]
    },
    {
      id: 'L70',
      no: 70,
      title: '年齢別売掛金分析',
      goal: '年齢別売掛金分析を読み、なんのために作るかを説明できるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['D8(c)'],
      slides: [
        {
          title: '冷蔵庫を整理する',
          paras: ['冷蔵庫の中身を「買ったばかり」「1週間前」「1か月前」に分けると、どれを先に食べるべきか、どれはもう捨てるしかないかが一目で分かる。', '売掛金も同じ。合計額を見ても危なさは分からない。いつから払われていないかで分けて見る。']
        },
        {
          title: 'これが年齢別売掛金分析',
          paras: ['お客さんごとの売掛金残高を、請求してからの日数で分けた一覧を、年齢別売掛金分析（aged receivables analysis）という。', '区分の例: 30日以内、31〜60日、61〜90日、90日超。支払条件が30日なら、31日目からは期限切れ（overdue）になる。']
        },
        {
          title: '表で見る',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="年齢別売掛金分析の例。90日を超えた残高が一番危ない" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">年齢別売掛金分析（12月31日）</text><rect x="354" y="50" width="66" height="168" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="28" y="72" fill="var(--quiet)">得意先</text><text x="123" y="72" text-anchor="middle" fill="var(--quiet)">合計</text><text x="189" y="72" text-anchor="middle" fill="var(--quiet)">0–30日</text><text x="255" y="72" text-anchor="middle" fill="var(--quiet)">31–60日</text><text x="321" y="72" text-anchor="middle" fill="var(--quiet)">61–90日</text><text x="387" y="72" text-anchor="middle" fill="var(--ink)">90日超</text><path d="M20 84H420" stroke="var(--edge)" stroke-width="1.25"/><text x="28" y="110" fill="var(--ink)">A社</text><text x="123" y="110" text-anchor="middle" font-weight="600" fill="var(--ink)">4,000</text><text x="189" y="110" text-anchor="middle" fill="var(--ink)">3,000</text><text x="255" y="110" text-anchor="middle" fill="var(--ink)">1,000</text><text x="321" y="110" text-anchor="middle" fill="var(--quiet)">–</text><text x="387" y="110" text-anchor="middle" fill="var(--quiet)">–</text><text x="28" y="140" fill="var(--ink)">B社</text><text x="123" y="140" text-anchor="middle" font-weight="600" fill="var(--ink)">2,600</text><text x="189" y="140" text-anchor="middle" fill="var(--ink)">600</text><text x="255" y="140" text-anchor="middle" fill="var(--quiet)">–</text><text x="321" y="140" text-anchor="middle" fill="var(--ink)">2,000</text><text x="387" y="140" text-anchor="middle" fill="var(--quiet)">–</text><text x="28" y="170" fill="var(--ink)">C社</text><text x="123" y="170" text-anchor="middle" font-weight="600" fill="var(--ink)">1,500</text><text x="189" y="170" text-anchor="middle" fill="var(--quiet)">–</text><text x="255" y="170" text-anchor="middle" fill="var(--quiet)">–</text><text x="321" y="170" text-anchor="middle" fill="var(--quiet)">–</text><text x="387" y="170" text-anchor="middle" font-weight="600" fill="var(--ink)">1,500</text><path d="M20 186H420" stroke="var(--edge)" stroke-width="1.25"/><text x="28" y="208" font-weight="600" fill="var(--ink)">合計</text><text x="123" y="208" text-anchor="middle" font-weight="600" fill="var(--ink)">8,100</text><text x="189" y="208" text-anchor="middle" font-weight="600" fill="var(--ink)">3,600</text><text x="255" y="208" text-anchor="middle" font-weight="600" fill="var(--ink)">1,000</text><text x="321" y="208" text-anchor="middle" font-weight="600" fill="var(--ink)">2,000</text><text x="387" y="208" text-anchor="middle" font-weight="600" fill="var(--ink)">1,500</text><text x="220" y="248" text-anchor="middle" fill="var(--ink)">右に行くほど古い＝回収できない危険が高い</text></svg>`,
          caption: '金額は $。A社はほぼ期限内。B社は $2,000 が2か月以上遅れている。C社は90日を超えた $1,500 が丸ごと残っていて、一番危ない。'
        },
        {
          title: 'なぜ？ 古いほど危ない理由',
          paras: ['きちんと払うお客さんは、だいたい期限内に払う。何か月も払わないのは、お金が無い、連絡が取れない、請求の中身に不満がある、などの理由があることが多い。', 'だから、古い売掛金ほど回収できない可能性が高い。合計が同じ $8,100 でも、中身が新しいか古いかで危なさはまったく違う。']
        },
        {
          title: '何に使う？',
          list: ['督促: 期限切れのお客さんを見つけて、早く払ってもらう（credit control）', '出荷の判断: 支払いが遅れているお客さんへの掛け売りを止める、与信限度を見直す', '貸倒れの判断: 回収できそうにない古い残高を見つけ、貸倒れ（L71）や貸倒引当金（L73）を決める材料にする', '資金繰り: いつ頃お金が入りそうかを見積もる']
        },
        {
          title: '帳簿は変わらない',
          paras: ['年齢別分析は、管理のための表（management information）。仕訳ではないので、作っても帳簿の金額は1つも変わらない。', 'もとになるのは、お客さんごとの明細（売掛金元帳）。全員分の合計は、帳簿の売掛金の残高と一致するはず。']
        },
        {
          title: '例題',
          example: {
            problem: '上の表で、支払条件が30日のとき、期限切れ（overdue）の売掛金は合計いくら？ 売掛金全体の何%？',
            steps: ['期限切れ＝31日以上たったもの。31–60日、61–90日、90日超の列を足す', '$1,000 ＋ $2,000 ＋ $1,500 ＝ $4,500', '割合 ＝ $4,500 ÷ $8,100 × 100 ＝ 約55.6%', '別の見方: 合計 $8,100 − 30日以内 $3,600 ＝ $4,500 でも同じ'],
            answer: '$4,500（約56%）。半分以上が期限切れなので、回収の管理を見直す必要がある'
          }
        },
        {
          title: 'よくある間違い',
          list: ['合計額だけ見て安心する → 中身の古さを見る。', '「age」をお客さんの会社の年数と思う → 売掛金が払われずに残っている日数のこと。', '分析を作ると貸倒れも記録される → 判断の材料になるだけ。記録には別に仕訳がいる。'],
          note: { kind: 'warn', text: '年齢別売掛金分析はお客さん（売掛金）の表。仕入先への買掛金を日数で分けた表（aged payables analysis）とは別物。試験で目的を問われるのは売掛金の方。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['年齢別売掛金分析＝お客さんごとの残高を、残っている日数で分けた表', '古いほど回収できない危険が高い', '目的: 督促、出荷・限度の判断、貸倒れの判断の材料']
        },
        {
          title: '英単語',
          words: [
            ['aged receivables analysis', 'エイジド・レシーバブルズ・アナリシス', '年齢別売掛金分析'],
            ['overdue', 'オーバーデュー', '期限切れ、支払期日を過ぎた'],
            ['outstanding', 'アウトスタンディング', '未払いのまま残っている'],
            ['credit control', 'クレジット・コントロール', '与信管理、回収の管理'],
            ['chase', 'チェイス', '（支払いを）督促する']
          ]
        }
      ],
      quiz: [
        { q: 'What is the main purpose of an aged receivables analysis?', choices: ['To identify overdue balances that may need chasing or may be irrecoverable', 'To record credit sales in the general ledger', 'To calculate the sales tax payable', 'To list the amounts owed to suppliers'], answer: 0, explain: 'お客さんごとの残高を日数で分けて、督促が必要なもの・回収できなさそうなものを見つけるための表。記録（仕訳）でも、仕入先の表でもない。' },
        { q: '支払条件は30日。D社: 30日以内 $1,200、31〜60日 $800、90日超 $300。E社: 30日以内 $2,000、61〜90日 $700。期限切れの合計は？', type: 'number', answer: 1800, unit: '$', explain: '31日以上の列だけを足す。$800 ＋ $300 ＋ $700 ＝ $1,800。30日以内の $1,200 と $2,000 はまだ期限内。' },
        { q: '年齢別売掛金分析を作った。帳簿の金額はどうなる？', choices: ['売掛金が減る', '貸倒れ費用が増える', '何も変わらない（管理のための表）', '売上が増える'], answer: 2, explain: '年齢別分析は仕訳ではない。貸倒れを記録するときは、分析を見て判断したうえで、別に仕訳を書く（L71）。' },
        { q: 'An aged receivables analysis shows that a customer has owed $4,000 for over 120 days and has stopped replying to letters. Which action does this information most directly support?', choices: ['Considering whether the debt should be written off', 'Increasing the credit limit of the customer', 'Recording the $4,000 as revenue again', 'Reducing trade payables by $4,000'], answer: 0, explain: '120日以上払われず連絡もない残高は、回収できない可能性が高い。貸倒れとして消すかどうかを検討する材料になる。限度を上げるのは逆効果。' },
        { q: 'F社とG社の売掛金はどちらも $5,000。F社は全額30日以内、G社は全額90日超。より危ないのは？', choices: ['F社', 'G社', '同じ（合計が同じだから）'], answer: 1, explain: '古い売掛金ほど回収できない危険が高い。合計額が同じでも、中身の古さで危なさが違う。' }
      ]
    },
    {
      id: 'L71',
      no: 71,
      title: '貸倒れの償却',
      goal: '回収できない売掛金を消す仕訳を書き、一部だけ回収できたときも含めて金額を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D8(e)'],
      slides: [
        {
          title: '友達に貸した1万円',
          paras: ['友達に1万円を貸したが、その友達が引っ越して連絡がつかなくなった。何度連絡しても返事がない。', 'いつまでも「1万円もらえる」と思っていると、自分のお金を多く見積もってしまう。どこかで「もう返ってこない」と認めて、損として受け入れる。']
        },
        {
          title: 'これが貸倒れ',
          paras: ['お客さんが倒産した、行方が分からない、などで、もう回収できないと分かった売掛金を貸倒れ（irrecoverable debt）という。', '回収できない売掛金は、もう資産ではない。帳簿から消して（償却する、write off）、その分を費用にする。']
        },
        {
          title: 'いつもこの仕訳',
          paras: ['X社が倒産し、X社の売掛金 $1,200 は回収できないと分かった。'],
          journal: [
            { side: 'Dr', account: 'Irrecoverable debts expense（貸倒れ費用）', amount: '1,200' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '1,200' }
          ],
          note: { kind: 'tip', text: '売掛金が減るので貸方、費用が増えるので借方。お客さんごとの明細（売掛金元帳）でも X社の残高を消す。' }
        },
        {
          title: 'T勘定で見る',
          paras: ['期末の売掛金残高は $25,000。そこから X社の $1,200 を消す。財政状態計算書に載る売掛金は $23,800、損益計算書には貸倒れ費用 $1,200 が載る。', '差額 $23,800 は、少ない貸方に Balance c/d と書いて締める。'],
          tAccount: {
            name: 'Trade receivables',
            debit: [['Balance（償却前）', '25,000']],
            credit: [['Irrecoverable debts', '1,200']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '23,800' }
          }
        },
        {
          title: 'なぜ？ 売上は取り消さない',
          paras: ['商品を渡して売上を稼いだ事実は変わらない。起きたのは「お金を回収できなかった」という別の出来事。だから売上（Revenue）は減らさず、別の費用として見せる。そうすると「いくら売れたか」と「回収でいくら損したか」が別々に分かる。', 'そして、返ってこないお金を資産のまま載せると、資産も利益も実際より大きく見えてしまう。だから分かった時点で消す。']
        },
        {
          title: '一部だけ回収できたとき',
          paras: ['Z社は $2,000 の売掛金を残して倒産した。会社の後始末をする管財人（liquidator）から「1ドルにつき20セント払う」と連絡があり、$2,000 × 20% ＝ $400 が入金された。', '入ってきた $400 は入金として、残りの $1,600 だけを貸倒れとして消す。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '400' },
            { side: 'Dr', account: 'Irrecoverable debts expense（貸倒れ費用）', amount: '1,600' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '2,000' }
          ]
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋の期末の売掛金残高は $18,400。G社の $650 は倒産で回収できない。H社（残高 $900）は半分だけ払うと連絡があり、$450 が入金されたが、まだ記録していない。H社の残りは回収できない。財政状態計算書の売掛金と、損益計算書の貸倒れ費用は？',
            steps: ['G社: 全額 $650 を償却。Dr Irrecoverable debts $650 / Cr Trade receivables $650', 'H社の入金を記録。Dr Bank $450 / Cr Trade receivables $450', 'H社の残り $900 − $450 ＝ $450 を償却。Dr Irrecoverable debts $450 / Cr Trade receivables $450', '売掛金 ＝ $18,400 − $650 − $450 − $450 ＝ $16,850', '貸倒れ費用 ＝ $650 ＋ $450 ＝ $1,100'],
            answer: '売掛金 $16,850、貸倒れ費用 $1,100'
          }
        },
        {
          title: 'よくある間違い',
          list: ['Dr Revenue（売上を取り消す）にする → 売上は減らさない。費用の勘定を使う。', 'Cr Cash にする → お金は動いていない。減るのは売掛金。', '一部入金があるのに全額を貸倒れにする → 入金分は入金、残りだけが貸倒れ。', '期末の売掛金から消し忘れる → 財政状態計算書の売掛金は、償却した後の金額。'],
          note: { kind: 'warn', text: '貸倒れは「売掛金を減らす（貸方）」。借方と貸方を逆にすると、回収できない売掛金がかえって増えてしまう。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['貸倒れ: Dr Irrecoverable debts expense / Cr Trade receivables', '売上は取り消さない。回収できなかった分は別の費用', '一部入金があれば、入金分を引いた残りだけを償却する']
        },
        {
          title: '英単語',
          words: [
            ['irrecoverable debt', 'イリカバラブル・デット', '貸倒れ（回収できない売掛金）'],
            ['write off', 'ライト・オフ', '（帳簿から）消す、償却する'],
            ['irrecoverable debts expense', '', '貸倒れ費用（損益計算書に載る）'],
            ['bad debt', 'バッド・デット', '貸倒れの昔からの呼び方'],
            ['bankrupt / insolvent', 'バンクラプト / インソルベント', '倒産した / 支払えない状態'],
            ['liquidator', 'リクイデイター', '管財人（倒産した会社の後始末をする人）']
          ]
        }
      ],
      quiz: [
        { q: 'A customer owing $1,500 has been declared bankrupt and the debt is irrecoverable. What is the journal entry to write off the debt?', choices: ['Dr Irrecoverable debts expense $1,500 / Cr Trade receivables $1,500', 'Dr Trade receivables $1,500 / Cr Irrecoverable debts expense $1,500', 'Dr Revenue $1,500 / Cr Trade receivables $1,500', 'Dr Irrecoverable debts expense $1,500 / Cr Cash $1,500'], answer: 0, explain: '売掛金を減らす（貸方）、費用を増やす（借方）。2つ目は借方と貸方が逆。3つ目は売上を取り消している。4つ目はお金が出ていったことになってしまう。' },
        { q: 'Trade receivables at 31 December were $46,700 before adjustments. Debts of $1,300 and $900 are to be written off. What figure for trade receivables should appear in the statement of financial position?', type: 'number', answer: 44500, unit: '$', explain: '$46,700 − $1,300 − $900 ＝ $44,500。償却した分だけ売掛金が減る。' },
        { q: 'K社の売掛金は $3,500。K社が倒産し、管財人から 25% だけ入金された。貸倒れとして消す金額は？', type: 'number', answer: 2625, unit: '$', explain: '入金 ＝ $3,500 × 25% ＝ $875。残り $3,500 − $875 ＝ $2,625 を償却する。$875 を答えるのは、入金と貸倒れを取り違えたとき。' },
        { q: 'X社の売掛金を貸倒れとして記録した。損益計算書の売上（revenue）は？', choices: ['貸倒れの分だけ減る', '変わらない（貸倒れは費用として別に載る）', '貸倒れの分だけ増える'], answer: 1, explain: '売った事実は変わらないので売上はそのまま。回収できなかった損は、貸倒れ費用（expense）として別に見せる。' },
        { q: '年齢別売掛金分析（L70）で、貸倒れの候補として一番先に調べるのは？', choices: ['30日以内の残高', '31〜60日の残高', '90日を超えて連絡もない残高', '合計額が一番大きいお客さん'], answer: 2, explain: '古くて連絡も取れない残高ほど、回収できない可能性が高い。金額の大きさだけでは危なさは決まらない。' }
      ]
    },
    {
      id: 'L72',
      no: 72,
      title: '償却した債権が回収されたら',
      goal: '前に貸倒れとして消した売掛金が入金されたときの仕訳を書き、その年の貸倒れ費用を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D8(f)'],
      slides: [
        {
          title: '諦めた1万円が戻ってきた',
          paras: ['去年、連絡がつかなくなった友達に貸した1万円を「もう返ってこない」と諦めた。今年、その友達から突然1万円が振り込まれた。', 'うれしい臨時のお金。でも、今さら「貸している1万円」を思い出して書き直す必要はない。去年の損を、今年取り戻せたと考えればいい。']
        },
        {
          title: 'お店では',
          paras: ['たこ焼き屋は 20X1年に、倒産したと思われた Y社の売掛金 $800 を貸倒れとして消した（L71）。売掛金からはもう消えている。', '20X2年に、Y社から $800 が入金された。これを償却済み債権の回収（irrecoverable debt recovered）という。']
        },
        {
          title: '時間の流れで見る',
          svg: `<svg viewBox="0 0 440 248" role="img" aria-label="20X1年に貸倒れとして消した売掛金が、20X2年に入金された" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">諦めた売掛金が返ってきた</text><path d="M30 100H410" stroke="var(--edge)" stroke-width="1.5" fill="none"/><circle cx="110" cy="100" r="7" fill="var(--quiet)"/><circle cx="330" cy="100" r="7" fill="var(--quiet)"/><text x="110" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">20X1年</text><text x="330" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">20X2年</text><rect x="30" y="120" width="160" height="80" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="146" text-anchor="middle" fill="var(--ink)">Y社が倒産</text><text x="110" y="168" text-anchor="middle" fill="var(--ink)">$800 を貸倒れに</text><text x="110" y="190" text-anchor="middle" fill="var(--ink)">売掛金から消す</text><rect x="250" y="120" width="160" height="80" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="330" y="146" text-anchor="middle" font-weight="600" fill="var(--ink)">$800 が入金</text><text x="330" y="168" text-anchor="middle" fill="var(--ink)">費用を $800 減らす</text><text x="330" y="190" text-anchor="middle" fill="var(--ink)">売掛金は動かさない</text><text x="220" y="230" text-anchor="middle" fill="var(--ink)">売掛金はもう無いので、戻すのは費用の方</text></svg>`,
          caption: '20X1年に費用として出した損を、20X2年の費用から差し引いて取り戻す。'
        },
        {
          title: 'この仕訳になる',
          paras: ['入金なので借方は Bank。貸方は売掛金ではなく、貸倒れ費用の勘定。費用が $800 減るので、20X2年の利益は $800 増える。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '800' },
            { side: 'Cr', account: 'Irrecoverable debts expense（貸倒れ費用）', amount: '800' }
          ],
          note: { kind: 'tip', text: '貸方を「Irrecoverable debts recovered（償却債権取立益）」という収益の勘定にする書き方もある。どちらでも利益が $800 増える点は同じ。' }
        },
        {
          title: 'なぜ？ 売掛金を使わない理由',
          paras: ['Y社の売掛金は 20X1年にもう消した。$800 の入金を売掛金の貸方に書くと、無い残高から引くことになり、売掛金が実際より $800 少なくなってしまう。取り戻した $800 も利益に入らない。', '20X1年の判断は、そのときの情報では正しかった。だから 20X1年の財務諸表はさかのぼって直さない。取り戻した分は、入金があった 20X2年の利益に入れる。']
        },
        {
          title: '2段階で書くやり方',
          paras: ['教科書によっては、売掛金をいったん戻してから入金を記録する、2段階で書く。'],
          list: ['① Dr Trade receivables $800 / Cr Irrecoverable debts expense $800（売掛金を復活させる）', '② Dr Bank $800 / Cr Trade receivables $800（入金を記録する）'],
          after: '①と②を合わせると売掛金は差し引き0。1行で書いた Dr Bank / Cr Irrecoverable debts expense と同じ結果になる。お客さんごとの支払いの記録を残したいときに使う。'
        },
        {
          title: '費用の勘定で見る',
          paras: ['20X2年は、別に J社の $1,500 を貸倒れとして消した。借方 $1,500 − 貸方 $800 ＝ $700 が残り、これが損益計算書の貸倒れ費用になる。', '費用の勘定は繰り越さない。差額 $700 を貸方に書いて損益計算書へ振り替え、勘定を0にする（L18）。'],
          tAccount: {
            name: 'Irrecoverable debts expense',
            debit: [['Trade receivables（J社）', '1,500']],
            credit: [['Bank（Y社の回収）', '800']],
            balance: { side: 'credit', label: 'Statement of profit or loss', amount: '700' }
          }
        },
        {
          title: '例題',
          example: {
            problem: '20X3年、たこ焼き屋は K社 $2,400 と L社 $600 を貸倒れとして消した。また、20X1年に消した M社から $1,000 が入金された。損益計算書の貸倒れ費用と、これらの取引で売掛金が減る金額は？',
            steps: ['償却: $2,400 ＋ $600 ＝ $3,000。Dr Irrecoverable debts / Cr Trade receivables', '回収: Dr Bank $1,000 / Cr Irrecoverable debts $1,000。売掛金は動かさない', '貸倒れ費用 ＝ $3,000 − $1,000 ＝ $2,000', '売掛金が減るのは、償却した $3,000 だけ'],
            answer: '貸倒れ費用 $2,000、売掛金の減少 $3,000'
          },
          note: { kind: 'tip', text: '回収の方が償却より多い年は、貸倒れ費用がマイナスになる。そのときは利益を増やす項目として損益計算書に載る。' }
        },
        {
          title: 'よくある間違い',
          list: ['1行で Cr Trade receivables にする → 売掛金はもう無い。$800 少なく載ってしまう。', 'Cr Revenue にする → 新しく売ったわけではない。', '去年の財務諸表を直そうとする → 回収した年の利益に入れる。'],
          note: { kind: 'warn', text: '回収額を償却額に足してしまう（$3,000 ＋ $1,000 ＝ $4,000）。回収は費用を減らすので引き算: $3,000 − $1,000 ＝ $2,000。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['回収: Dr Bank / Cr Irrecoverable debts expense', '売掛金は動かさない（もう消してあるから）', 'その年の貸倒れ費用 ＝ 償却額 − 回収額']
        },
        {
          title: '英単語',
          words: [
            ['irrecoverable debt recovered', '', '償却済み債権の回収'],
            ['subsequently recovered', 'サブシークエントリー・リカバード', 'あとになって回収された'],
            ['reinstate the debt', 'リインステイト', '（消した）売掛金を復活させる'],
            ['written off in a previous year', '', '前の年に償却した']
          ]
        }
      ],
      quiz: [
        { q: 'A debt of $700 was written off as irrecoverable last year. This year the customer unexpectedly paid the $700 in full. What is the journal entry to record the receipt?', choices: ['Dr Cash $700 / Cr Irrecoverable debts expense $700', 'Dr Cash $700 / Cr Trade receivables $700', 'Dr Irrecoverable debts expense $700 / Cr Cash $700', 'Dr Cash $700 / Cr Revenue $700'], answer: 0, explain: '試験では Bank の代わりに Cash と書かれることもあるが、意味は同じ。売掛金は去年もう消したので、貸方は貸倒れ費用。2つ目だと無い売掛金から引くことになる。3つ目は借方と貸方が逆。4つ目は新しい売上ではないので誤り。' },
        { q: 'During the year, debts of $4,200 were written off. In addition, $600 was received from a customer whose debt had been written off in the previous year. What is the irrecoverable debts expense in the statement of profit or loss for the year?', type: 'number', answer: 3600, unit: '$', explain: '$4,200 − $600 ＝ $3,600。回収した分は費用を減らす。$4,800 は回収を足してしまったときの答え。' },
        { q: '前の年に償却した売掛金 $500 が入金された。今年の利益は？', choices: ['$500 増える', '$500 減る', '変わらない'], answer: 0, explain: '貸倒れ費用が $500 減るので、その分利益が増える。' },
        { q: '同じ入金（償却済みの $500）で、売掛金の残高は？', choices: ['$500 減る', '$500 増える', '変わらない'], answer: 2, explain: '1行の仕訳（Dr Bank / Cr Irrecoverable debts expense）は売掛金を使わない。2段階で書いても、復活（＋$500）と入金（−$500）で差し引き0になる。' },
        { q: '今年の償却は $900、前の年に償却した分の回収は $1,300。回収の方が多い。この2つで今年の利益は差し引きいくら増える？', type: 'number', answer: 400, unit: '$', explain: '回収 $1,300 − 償却 $900 ＝ $400。貸倒れ費用がマイナス（$400 の収益）になり、利益を $400 増やす。' },
        { q: 'L71 と L72 の仕訳で、Irrecoverable debts expense が借方になるのはどちら？', choices: ['売掛金を償却したとき', '償却した売掛金を回収したとき', 'どちらも借方'], answer: 0, explain: '償却すると費用が増えるので借方（L71）。回収すると費用が減るので貸方（L72）。' }
      ]
    }
  ],
  cards: [
    { id: 'L68-1', lesson: 'L68', q: '売掛金（trade receivables）とは？', a: '掛けで売った相手から、あとで受け取るお金。流動資産' },
    { id: 'L68-2', lesson: 'L68', q: '買掛金（trade payables）とは？', a: '掛けで買った相手に、あとで払うお金。流動負債' },
    { id: 'L68-3', lesson: 'L68', q: '期末の売掛金を出す式は？', a: '期首 ＋ 掛け売上 − 入金 − 売上戻り' },
    { id: 'L68-4', lesson: 'L68', q: 'なぜ入金前に売掛金と売上を記録する？', a: '発生主義。商品を渡した時点で稼ぎ、受け取る権利が生まれるから' },
    { id: 'L68-5', lesson: 'L68', q: '銀行からの借入は買掛金？', a: '違う。買掛金は仕入先への未払いだけ。借入は loans（借入金）' },
    { id: 'L68-6', lesson: 'L68', q: '前払家賃・未払費用は、財政状態計算書のどの行？', a: '前払家賃は trade and other receivables、未払費用は trade and other payables' },
    { id: 'L68-7', lesson: 'L68', q: '払っていない経費。請求書が届いた場合と、まだの場合の呼び名は？', a: '届いた→その他の債務、まだ→未払費用（accrual）。どちらも trade and other payables' },
    { id: 'L69-1', lesson: 'L69', q: '掛けで売るメリットを3つ', a: '売上が増える、ライバルに負けない、大口・継続の関係ができる' },
    { id: 'L69-2', lesson: 'L69', q: '掛けで売るコストを3つ', a: '貸倒れ、入金が遅れる分のお金のコスト（利息）、事務コスト' },
    { id: 'L69-3', lesson: 'L69', q: '与信限度（credit limit）とは？', a: 'お客さんごとに決める、売掛金残高の上限（金額）' },
    { id: 'L69-4', lesson: 'L69', q: '与信限度の目的は？', a: '1人のお客さんが払えなくなったときの損を上限までに抑える' },
    { id: 'L69-5', lesson: 'L69', q: '与信限度と支払条件（credit terms）の違いは？', a: '与信限度は金額の上限、支払条件は払うまでの日数' },
    { id: 'L70-1', lesson: 'L70', q: '年齢別売掛金分析とは？', a: 'お客さんごとの売掛金を、残っている日数で分けた表' },
    { id: 'L70-2', lesson: 'L70', q: 'なぜ古い売掛金ほど危ない？', a: '払えない・連絡が取れないなどの理由があることが多く、回収できない可能性が高いから' },
    { id: 'L70-3', lesson: 'L70', q: '年齢別分析の主な使い道は？', a: '督促、出荷や与信限度の判断、貸倒れ・引当金を決める材料' },
    { id: 'L70-4', lesson: 'L70', q: '年齢別分析を作ると帳簿は変わる？', a: '変わらない。管理のための表で、仕訳ではない' },
    { id: 'L70-5', lesson: 'L70', q: '支払条件30日のとき、期限切れ（overdue）はどこから？', a: '31日以上たった残高（31–60日・61–90日・90日超の列）' },
    { id: 'L71-1', lesson: 'L71', q: '貸倒れ（irrecoverable debt）とは？', a: '倒産などで、もう回収できないと分かった売掛金' },
    { id: 'L71-2', lesson: 'L71', q: '貸倒れを償却する仕訳は？', a: 'Dr Irrecoverable debts expense / Cr Trade receivables' },
    { id: 'L71-3', lesson: 'L71', q: '貸倒れのとき売上を減らす？', a: '減らさない。売った事実は変わらず、損は別の費用として見せる' },
    { id: 'L71-4', lesson: 'L71', q: 'なぜ回収できない売掛金を消す？', a: '残すと資産も利益も実際より大きく見えてしまうから' },
    { id: 'L71-5', lesson: 'L71', q: '$2,000 の売掛金に20%入金。償却額は？', a: '$1,600（入金 $400 を引いた残り）' },
    { id: 'L71-6', lesson: 'L71', q: '「write off」の意味は？', a: '帳簿から消すこと。償却する' },
    { id: 'L72-1', lesson: 'L72', q: '前の年に償却した売掛金が入金されたときの仕訳は？', a: 'Dr Bank / Cr Irrecoverable debts expense' },
    { id: 'L72-2', lesson: 'L72', q: '回収のとき、なぜ売掛金を使わない？', a: '去年もう消してあるから。使うと売掛金が少なく載ってしまう' },
    { id: 'L72-3', lesson: 'L72', q: 'その年の貸倒れ費用の求め方は？', a: 'その年の償却額 − 償却済み債権の回収額' },
    { id: 'L72-4', lesson: 'L72', q: '償却済み債権の回収は、利益にどう効く？', a: '回収した年の利益を、回収額だけ増やす' },
    { id: 'L72-5', lesson: 'L72', q: '2段階で書くやり方は？', a: '① Dr 売掛金 / Cr 貸倒れ費用 で復活 ② Dr Bank / Cr 売掛金 で入金' }
  ]
});
