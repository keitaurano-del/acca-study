(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 6,
  part: 4,
  partTitle: '試算表',
  lessons: [
    {
      id: 'L30',
      no: 30,
      title: '試算表の目的と作り方',
      goal: '元帳の残高を借方と貸方の列に分けて試算表を作り、足りない残高を合計の差で求められるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['F1(a)', 'F1(b)', 'K1:E1(a)'],
      slides: [
        {
          title: '割り勘の貸し借りで考える',
          paras: ['友だち4人の旅行で、立て替えたお金を精算する。幹事は「誰がいくら貸していて、誰がいくら借りているか」を1枚の表に書き出す。', '誰かが貸した分は、必ず誰かが借りている。だから「貸し」の合計と「借り」の合計は同じになるはず。合わなければ、どこかで書き間違えている。']
        },
        {
          title: '試算表＝残高の一覧表',
          paras: ['会計でこの表にあたるのが試算表（trial balance、TB）。ある日の全部の勘定の残高を、借方の列と貸方の列に分けて並べた一覧表。目的は3つある。'],
          list: ['計算のチェック: 借方の合計と貸方の合計が同じか確かめる', 'まとめ: 総勘定元帳（general ledger）のたくさんの勘定の残高を1枚に集める', '出発点: 期末の調整をしてから、損益計算書と財政状態計算書を作る土台になる'],
          formula: 'total debits ＝ total credits'
        },
        {
          title: '残高を書き写す',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="各勘定の残高を試算表の借方の列と貸方の列に書き写す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">勘定の残高を1枚に集める</text><text x="105" y="84" text-anchor="middle" fill="var(--quiet)">各勘定の残高</text><rect x="20" y="100" width="170" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="127" text-anchor="middle" fill="var(--ink)">Bank: Dr 1,800</text><rect x="20" y="150" width="170" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="177" text-anchor="middle" fill="var(--ink)">Sales: Cr 9,500</text><rect x="20" y="200" width="170" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="227" text-anchor="middle" fill="var(--ink)">Capital: Cr 3,000</text><text x="105" y="276" text-anchor="middle" fill="var(--quiet)">ほかの勘定も同じ</text><path d="M194 122H240" stroke="var(--quiet)" stroke-width="1.5"/><path d="M240 117L248 122L240 127z" fill="var(--quiet)"/><path d="M194 172H240" stroke="var(--quiet)" stroke-width="1.5"/><path d="M240 167L248 172L240 177z" fill="var(--quiet)"/><path d="M194 222H240" stroke="var(--quiet)" stroke-width="1.5"/><path d="M240 217L248 222L240 227z" fill="var(--quiet)"/><rect x="250" y="60" width="170" height="244" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="262" y="84" font-size="15" font-weight="600" fill="var(--ink)">試算表</text><text x="350" y="84" text-anchor="end" fill="var(--quiet)">Dr</text><text x="410" y="84" text-anchor="end" fill="var(--quiet)">Cr</text><path d="M258 96H412" stroke="var(--edge)" stroke-width="1.25"/><text x="262" y="127" fill="var(--ink)">Bank</text><text x="350" y="127" text-anchor="end" fill="var(--ink)">1,800</text><text x="262" y="177" fill="var(--ink)">Sales</text><text x="410" y="177" text-anchor="end" fill="var(--ink)">9,500</text><text x="262" y="227" fill="var(--ink)">Capital</text><text x="410" y="227" text-anchor="end" fill="var(--ink)">3,000</text><text x="262" y="258" fill="var(--quiet)">…</text><path d="M258 270H412" stroke="var(--edge)" stroke-width="1.25"/><text x="262" y="292" font-weight="600" fill="var(--ink)">合計</text><text x="350" y="292" text-anchor="end" font-weight="600" fill="var(--ink)">15,800</text><text x="410" y="292" text-anchor="end" font-weight="600" fill="var(--ink)">15,800</text><text x="220" y="330" text-anchor="middle" fill="var(--ink)">借方残高は Dr 列へ、貸方残高は Cr 列へ</text></svg>`,
          caption: '元帳から残高を書き出すことを extract（エクストラクト）という。全部並べたら、左右の列をそれぞれ合計して比べる。'
        },
        {
          title: 'どちらの列に入る？',
          paras: ['残高は「増えるときに書く側」に残る。資産・費用・引出しは借方で増えるので借方残高。負債・資本・収益は貸方で増えるので貸方残高。'],
          table: {
            caption: '試算表のどちらの列に入るか',
            head: ['借方（Dr）残高', '貸方（Cr）残高'],
            rows: [
              ['資産（現金、備品、売掛金）', '負債（買掛金、借入金）'],
              ['費用（仕入、家賃、給料）', '資本（capital）'],
              ['引出し（drawings）', '収益（売上、受けた割引）'],
              ['売上戻り（sales returns）', '仕入戻し（purchase returns）'],
              ['', '資産を減らす勘定（後で学ぶ減価償却累計額、貸倒引当金）']
            ]
          }
        },
        {
          title: '迷いやすい勘定',
          list: ['銀行（bank）: 預金があれば借方（資産）。マイナスの当座借越（bank overdraft）なら貸方（負債）', '売上税（sales tax）: 税務署に払う分が多ければ貸方（負債）、返してもらう分が多ければ借方（資産）', '残高がゼロの勘定は載せない'],
          note: { kind: 'warn', text: '引出し（drawings）は資本を減らすので借方。資本と同じ貸方に書くのはよくある間違い。受けた割引（discounts received）は収益なので貸方、売上戻りは売上を減らすので借方。' }
        },
        {
          title: 'T勘定から写すのは b/d の側',
          paras: ['勘定を締めると、Balance c/d（次期繰越）は金額の少ない側に書く。本当の残高は、その反対側に Balance b/d（前期繰越）として出てくる側。', '下はたこ焼き屋の1年目の Bank。入金は 13,600、出金は 11,800。c/d が貸方にあるので、残高は借方の $1,800（預金）。試算表には Dr 列に $1,800 と書く。'],
          tAccount: { name: 'Bank', debit: [['Capital', '3,000'], ['Bank loan', '2,000'], ['Trade receivables', '8,600']], credit: [['Equipment', '4,000'], ['Trade payables', '3,000'], ['Rent', '1,200'], ['Wages', '2,600'], ['Drawings', '1,000']], balance: { side: 'credit', label: 'Balance c/d', amount: '1,800' } }
        },
        {
          title: '例題: 試算表を作る',
          example: {
            problem: '20X1年1月1日に開業したたこ焼き屋の、20X1年12月31日の残高: Bank 1,800、Equipment（備品）4,000、Trade receivables 900、Trade payables 1,200、Bank loan（借入金）2,000、Sales 9,500、Discounts received 100、Purchases 4,300、Rent 1,200、Wages 2,600、Drawings 1,000（単位 $）。Capital の残高だけが分からない。試算表を作って Capital を求める。',
            steps: ['借方に入るもの（資産・費用・引出し）: Bank、Equipment、Trade receivables、Purchases、Rent、Wages、Drawings', '借方の合計: 1,800＋4,000＋900＋4,300＋1,200＋2,600＋1,000＝15,800', '貸方に入るもの（負債・収益）: Trade payables 1,200＋Bank loan 2,000＋Sales 9,500＋Discounts received 100＝12,800', '資本も貸方。左右の合計は同じはずなので、Capital＝15,800－12,800＝3,000'],
            answer: 'Capital は貸方に $3,000。借方・貸方とも合計 $15,800'
          }
        },
        {
          title: '完成した試算表',
          table: {
            caption: 'Takoyaki Shop　Trial balance at 31 December 20X1',
            head: ['勘定', 'Dr $', 'Cr $'],
            rows: [
              ['Bank', '1,800', ''],
              ['Equipment', '4,000', ''],
              ['Trade receivables', '900', ''],
              ['Trade payables', '', '1,200'],
              ['Bank loan', '', '2,000'],
              ['Capital', '', '3,000'],
              ['Drawings', '1,000', ''],
              ['Sales', '', '9,500'],
              ['Discounts received', '', '100'],
              ['Purchases', '4,300', ''],
              ['Rent', '1,200', ''],
              ['Wages', '2,600', '']
            ],
            total: ['合計', '15,800', '15,800']
          },
          note: { kind: 'tip', text: '試験では「1つだけ分からない残高」を求める問題がよく出る。借方合計と貸方合計の差がその残高になる。' }
        },
        {
          title: 'なぜ？ 左右の合計が同じになる理由',
          paras: ['取引を1つ記帳するたびに、借方に $X、貸方にも同じ $X を書く。だから元帳全体では、借方に書いた金額の総額と、貸方に書いた総額はいつも同じ。', '各勘定の残高は、その勘定の借方と貸方の差を片側に寄せただけ。だから借方残高の合計と貸方残高の合計も同じになる。割り勘の「貸し」と「借り」と同じしくみ。', '合わないときは、片側だけ書いた、金額を写し間違えた、などの誤りがどこかにある。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['試算表＝ある日の全勘定の残高を Dr 列と Cr 列に並べた一覧', '資産・費用・引出しは借方、負債・資本・収益は貸方', '借方合計＝貸方合計。1つ分からない残高は、合計の差で求める']
        },
        {
          title: '英単語',
          words: [
            ['trial balance (TB)', 'トライアル・バランス', '試算表'],
            ['extract', 'エクストラクト', '（残高を）書き出す'],
            ['general ledger', 'ジェネラル・レジャー', '総勘定元帳'],
            ['debit balance', '', '借方残高'],
            ['credit balance', '', '貸方残高'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（銀行口座のマイナス、負債）'],
            ['balance b/d (brought down)', '', '前期繰越。本当の残高がある側']
          ]
        }
      ],
      quiz: [
        { q: '試算表の目的として正しいものは？', choices: ['借方と貸方の合計が同じか確かめ、全勘定の残高を1枚にまとめる', '株主に会社の成績を報告する', '1年間の取引を1件ずつ全部並べる', 'お店の現金の残りだけを確かめる'], answer: 0, explain: '試算表は会計担当者が使う作業用の表。計算のチェックと残高のまとめが目的で、財務諸表を作る出発点になる。取引を1件ずつ並べるのは仕訳帳や元帳の役目。' },
        { q: 'Which of the following balances would appear on the credit side of a trial balance?', choices: ['Drawings', 'Discounts received', 'Purchases', 'Trade receivables'], answer: 1, explain: '受けた割引（discounts received）は収益なので貸方。引出しは資本を減らすので借方、仕入は費用、売掛金は資産なのでどれも借方。' },
        { q: 'Which of the following is a debit balance in a trial balance?', choices: ['Bank overdraft', 'Sales returns', 'Capital', 'Purchase returns'], answer: 1, explain: '売上戻りは売上を減らすものなので借方。当座借越は負債、資本は貸方、仕入戻しは仕入を減らすので貸方。' },
        { q: 'The following balances were extracted from the ledger of a sole trader: bank $600, motor vehicles $3,000, trade receivables $700, trade payables $800, loan $1,000, sales $5,200, purchases $2,500, expenses $900, drawings $400. Capital is the only balance missing. What is the capital balance?', type: 'number', answer: 1100, unit: '$', explain: '借方: 600＋3,000＋700＋2,500＋900＋400＝8,100。貸方: 800＋1,000＋5,200＝7,000。資本は貸方なので 8,100－7,000＝1,100。引出しを貸方に入れると答えがずれる。' },
        { q: '「Bank」勘定を締めたら、貸方に Balance c/d $800 と書いた。試算表ではどうなる？', choices: ['借方に $800（預金がある）', '貸方に $800（当座借越）', '試算表には載せない', '借方と貸方に $800 ずつ'], answer: 0, explain: 'c/d は少ない側に書く。本当の残高は反対側の b/d 側なので借方 $800。c/d の側をそのまま写すのはよくある間違い。' },
        { q: 'At the year end, the sales tax account has a credit balance of $420. Which statement is correct?', choices: ['$420 is owed to the tax authority and is a liability', '$420 is owed by the tax authority and is an asset', '$420 is income of the business', '$420 is an expense of the business'], answer: 0, explain: '売上税の貸方残高は、税務署に払う分の方が多いという意味なので負債。売上税はお店の収益でも費用でもなく、預かって納めるお金。' }
      ]
    },
    {
      id: 'L31',
      no: 31,
      title: '期首試算表の抜粋',
      goal: '新しい年の最初の日にどの残高が残るかを判断し、期首試算表の資本を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'fa',
      outcomes: ['F1(c)'],
      slides: [
        {
          title: '歩数はリセット、預金は続く',
          paras: ['スマホの歩数計は、日付が変わると0歩から数え直す。「その日に何歩歩いたか」は1日ごとの記録だから。', '一方、銀行の預金残高は、日付が変わってもそのまま続く。「今いくらあるか」は、ずっと続く状態だから。', '会計の勘定も、この2種類に分かれる。']
        },
        {
          title: '0に戻す勘定、持ち越す勘定',
          list: ['写真の勘定（財政状態計算書の項目）: 資産・負債・資本。ある日の状態なので、翌期にそのまま持ち越す', '動画の勘定（損益計算書の項目）: 収益・費用。1年間の動きなので、期末に損益計算書へ移して、翌期は0から数え直す', '引出し（drawings）: 期末に資本から引いて、翌期は0から'],
          after: 'こうして新しい年の最初の日に並ぶ残高の一覧が、期首試算表（opening trial balance）。'
        },
        {
          title: '年をまたぐと2つに分かれる',
          svg: `<svg viewBox="0 0 440 370" role="img" aria-label="期末の試算表の勘定は、持ち越す勘定と0に戻す勘定に分かれ、期首の試算表には持ち越す勘定だけが載る" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">年をまたぐと、2つに分かれる</text><rect x="20" y="52" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期末の試算表（12月31日）</text><text x="220" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">closing trial balance</text><path d="M115 112V140" stroke="var(--quiet)" stroke-width="1.5"/><path d="M110 140L115 148L120 140z" fill="var(--quiet)"/><path d="M325 112V140" stroke="var(--quiet)" stroke-width="1.5"/><path d="M320 140L325 148L330 140z" fill="var(--quiet)"/><rect x="20" y="150" width="190" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="176" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">持ち越す勘定</text><text x="115" y="202" text-anchor="middle" fill="var(--ink)">資産・負債・資本</text><text x="115" y="228" text-anchor="middle" fill="var(--quiet)">写真の勘定</text><rect x="230" y="150" width="190" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="176" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">0に戻す勘定</text><text x="325" y="202" text-anchor="middle" fill="var(--ink)">収益・費用・引出し</text><text x="325" y="228" text-anchor="middle" fill="var(--quiet)">利益−引出しは資本へ</text><path d="M115 250V276" stroke="var(--quiet)" stroke-width="1.5"/><path d="M110 276L115 284L120 276z" fill="var(--quiet)"/><path d="M325 250V276" stroke="var(--quiet)" stroke-width="1.5"/><path d="M320 276L325 284L330 276z" fill="var(--quiet)"/><rect x="20" y="286" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="312" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期首の試算表（1月1日）</text><text x="220" y="336" text-anchor="middle" fill="var(--ink)">写真の勘定だけ。資本は更新した金額</text></svg>`,
          caption: '収益・費用・引出しは、利益と引出しの形で資本に入ってから消える。だから期首の試算表には、更新された資本として姿を変えて残る。'
        },
        {
          title: '資本は利益と引出しで更新する',
          paras: ['収益と費用の差の利益（profit）はオーナーのものなので、期末に資本へ足す。引出しは資本から引く。前に学んだ期末資本の式と同じ。'],
          formula: '期末資本 ＝ 期首資本 ＋ 資本の拠出 ＋ 利益 − 引出し',
          after: 'この期末資本が、翌期の期首試算表の Capital になる。'
        },
        {
          title: 'たこ焼き屋の資本勘定',
          paras: ['前のレッスンの試算表の Capital $3,000 は、開業の日に入れた元手（資本の拠出）。まだ今年の利益と引出しが入る前の金額。', '収益は 9,500＋100＝9,600、費用は 4,300＋1,200＋2,600＝8,100、利益は $1,500（期末に在庫は残っていないとする）。利益を足し、引出しを引くと、翌期に繰り越す資本は $3,500。翌期は貸方に Balance b/d $3,500 として始まる。'],
          tAccount: { name: 'Capital', debit: [['Drawings', '1,000']], credit: [['Bank（元入れ）', '3,000'], ['Profit for the year', '1,500']], balance: { side: 'debit', label: 'Balance c/d', amount: '3,500' } }
        },
        {
          title: '例題: 期首試算表を作る',
          example: {
            problem: 'たこ焼き屋の20X1年12月31日の試算表（前のレッスン）から、20X2年1月1日の期首試算表を作る。',
            steps: ['収益・費用を外す: Sales、Discounts received、Purchases、Rent、Wages は0から数え直すので載せない', '引出しも外す: Drawings $1,000 は資本から引いたので0', '資本を更新する: 期首0＋拠出3,000＋利益1,500－引出し1,000＝3,500', '残る勘定を並べる: 借方 Bank 1,800＋Equipment 4,000＋Trade receivables 900＝6,700。貸方 Trade payables 1,200＋Bank loan 2,000＋Capital 3,500＝6,700'],
            answer: '借方・貸方とも $6,700。資産 6,700＝資本 3,500＋負債 3,200 とも一致する'
          }
        },
        {
          title: '完成した期首試算表',
          table: {
            caption: 'Takoyaki Shop　Opening trial balance at 1 January 20X2',
            head: ['勘定', 'Dr $', 'Cr $'],
            rows: [
              ['Bank', '1,800', ''],
              ['Equipment', '4,000', ''],
              ['Trade receivables', '900', ''],
              ['Trade payables', '', '1,200'],
              ['Bank loan', '', '2,000'],
              ['Capital', '', '3,500']
            ],
            total: ['合計', '6,700', '6,700']
          },
          note: { kind: 'tip', text: '後で学ぶ在庫（inventory）、減価償却累計額、未払費用・前払費用も財政状態計算書の項目なので、期末の金額が翌期に持ち越される。会社の場合、利益は capital ではなく利益剰余金（retained earnings）に入る。' }
        },
        {
          title: 'なぜ？ 収益と費用をリセットする理由',
          paras: ['損益計算書は「その1年でいくら稼いだか」を見るもの。去年の売上が今年に混ざると、今年の稼ぐ力が分からなくなる。', '一方、預金や借金は年が変わっても消えない。12月31日に $1,800 あった預金は、1月1日にも $1,800 ある。', 'だから写真の勘定だけが続き、動画の勘定は毎年0から始まる。']
        },
        {
          title: '試験の「抜粋」問題',
          paras: ['試験では、期首試算表の全部ではなく一部（extract）を聞かれる。たとえば「期首試算表に出る残高はどれ？」「期首の Capital はいくら？」。'],
          list: ['収益・費用（売上、仕入、家賃など）→ 出ない', '資産・負債 → 前期末の残高がそのまま出る', '資本 → 利益を足し、引出しを引いた後の金額'],
          note: { kind: 'warn', text: '前期の試算表の Capital（利益と引出しが入る前の金額）をそのまま写すのはよくある間違い。Drawings を期首試算表に載せるのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期首試算表には資産・負債・資本だけが載る', '収益・費用・引出しは期末に資本へ移して、0から数え直す', '期首の資本＝前の資本＋資本の拠出＋利益－引出し']
        },
        {
          title: '英単語',
          words: [
            ['opening trial balance', '', '期首試算表（新しい年の最初の日の残高一覧）'],
            ['extract', 'エクストラクト', '抜粋、一部分'],
            ['balance brought down (b/d)', '', '前期繰越'],
            ['balance carried down (c/d)', '', '次期繰越'],
            ['profit for the year', '', '当期の利益'],
            ['retained earnings', 'リテインド・アーニングス', '利益剰余金（会社の場合の利益のたまり場所）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following balances would appear in the opening trial balance of a sole trader?', choices: ['Sales revenue', 'Rent expense', 'Trade payables', 'Drawings'], answer: 2, explain: '買掛金は負債なので翌期に持ち越す。売上と家賃は損益計算書の項目なので0から、引出しは資本から引いたので0から始まる。' },
        { q: 'A sole trader had capital of $8,000 at the start of the year. Profit for the year was $3,200 and drawings were $1,500. No capital was introduced. What is the capital balance in the opening trial balance for the next year?', type: 'number', answer: 9700, unit: '$', explain: '8,000＋3,200－1,500＝9,700。引出しを足して 12,700 にしたり、利益を足し忘れて 6,500 にしたりしやすい。' },
        { q: '期末の試算表: Cash 500、Equipment 2,000、Trade receivables 300、Trade payables 400、Sales 6,000、Expenses 4,800、Capital 1,400、Drawings 200（単位 $、在庫は無い）。翌期の期首試算表の Capital は？', type: 'number', answer: 2400, unit: '$', explain: '利益＝6,000－4,800＝1,200。資本＝1,400＋1,200－200＝2,400。確認: 期首の借方 500＋2,000＋300＝2,800、貸方 400＋2,400＝2,800 で合う。' },
        { q: '期首試算表で、残高が0から始まる組み合わせは？', choices: ['売上・家賃・引出し', '現金・売掛金・買掛金', '資本・借入金・売上', '備品・家賃・資本'], answer: 0, explain: '収益（売上）・費用（家賃）・引出しは期末に資本へ移されるので0から。現金・売掛金・買掛金・資本・借入金・備品は持ち越す。' },
        { q: 'At 31 December 20X1 the trade receivables account has a debit balance of $900. What will the opening trial balance at 1 January 20X2 show for trade receivables?', choices: ['Debit $900', 'Credit $900', 'Nil, because the balance is transferred to profit or loss', 'Debit $900, added to sales revenue'], answer: 0, explain: '売掛金は資産なので、同じ借方 $900 がそのまま翌期に持ち越される。損益計算書へ移すのは収益と費用だけ。' },
        { q: '期首試算表について正しいものは？', choices: ['期首試算表でも借方合計と貸方合計は同じになる', '期首試算表には前期の売上も載る', '期首の資本は、前期の試算表の資本と必ず同じ金額', '引出しは期首試算表の借方に載る'], answer: 0, explain: '残るのは資産・負債・資本だけで、資産＝資本＋負債なので左右の合計は同じ。資本は利益と引出しで更新されるので、前期の試算表の金額とは普通は違う。' }
      ]
    },
    {
      id: 'L32',
      no: 32,
      title: '試算表の限界',
      goal: '試算表が合っても見つからない誤りと、試算表では分からないことを説明できるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['F1(d)', 'K1:E1(a)'],
      slides: [
        {
          title: 'レシートの合計が合っていても',
          paras: ['スーパーで、レシートの合計 ¥2,000 と財布から出たお金 ¥2,000 が一致した。', 'でも、牛乳を卵として打たれていても、金額が同じなら合計は合う。パンが打たれていなくて、そのぶん払っていなくても、合計と支払いはやっぱり一致する。', '試算表もこれと同じ。合計が合っても、中身が正しいとは限らない。']
        },
        {
          title: '試算表が確かめるのは1つだけ',
          paras: ['試算表が確かめるのは「借方の合計＝貸方の合計」だけ。複式簿記の算数が合っているかしか見ていない。', 'だから試算表が合っても（balance しても）、記帳が全部正しいという証明にはならない。'],
          formula: 'TB balances ≠ no errors',
          note: { kind: 'warn', text: '「試算表が合えば帳簿に誤りはない」と思うのはよくある間違い。試験でもこの選択肢は誤り。' }
        },
        {
          title: '合っても見つからない誤り①',
          list: ['記帳もれ: 仕入の請求書 $300 を丸ごと記帳し忘れた。借方にも貸方にも入っていない', '両側で同じ金額ミス: $450 の請求書を、借方も貸方も $540 で記帳した', '借方と貸方の逆: 現金売上 $200 を Dr Sales、Cr Cash と逆に書いた'],
          after: 'どれも借方と貸方に同じ金額が入っている（または両方とも入っていない）ので、合計は合う。'
        },
        {
          title: '逆に書いても合計は合う',
          paras: ['現金売上 $200 の正しい仕訳は Dr Cash 200、Cr Sales 200。下は借方と貸方を逆にした間違い。', '借方にも貸方にも $200 ずつ入るので、試算表の合計は合う。でも Cash も Sales も、正しい金額より $400 ずつ少なくなっている。'],
          journal: [{ side: 'Dr', account: 'Sales（売上）', amount: '200' }, { side: 'Cr', account: 'Cash（現金）', amount: '200' }]
        },
        {
          title: '合っても見つからない誤り②',
          list: ['資産と費用の取り違え: 車 $5,000 の購入を、資産の Motor vehicles でなく費用の Motor expenses に入れた', '同じ種類の別の勘定: 得意先Aからの入金を、得意先Bの勘定に入れた', '打ち消し合う誤り: Rent を借方に $100 多く、Sales を貸方に $100 多く書いた。2つの誤りが打ち消し合う'],
          after: 'これらの誤りの名前と直し方は、後の「誤りの訂正」で詳しく学ぶ。'
        },
        {
          title: '合わないときに見つかる誤り',
          paras: ['借方と貸方の金額がずれる誤りは、試算表の合計が合わなくなるので見つかる。'],
          list: ['片側だけ記帳した: 家賃 $300 を Dr Rent に書いたが、Bank に書き忘れた', '両側で金額が違う: Dr Rent 300、Cr Bank 30', '両方とも同じ側に書いた: Dr Rent 300、Dr Bank 300', '残高の計算ミスや、試算表への写しもれ'],
          note: { kind: 'tip', text: '合わないときに分かるのは「どこかに誤りがある」ことだけ。どこが間違っているかまでは教えてくれない。' }
        },
        {
          title: '例題: 合計の差はいくら？',
          example: {
            problem: '家賃 $300 を銀行から払った。正しくは Dr Rent 300、Cr Bank 300。次の3つの誤りで、試算表の借方合計と貸方合計の差はいくら？ (1) Dr Rent 300 だけ書いた (2) Dr Rent 300、Cr Bank 30 (3) Dr Rent 300、Dr Bank 300',
            steps: ['(1) 借方に 300 入り、貸方は 0。借方が $300 多い', '(2) 借方 300、貸方 30。借方が 300－30＝$270 多い', '(3) 借方に 300＋300＝600 入り、貸方は 0。借方が $600 多い', '同じ側に2回書くと、差は金額の2倍になる'],
            answer: '(1) $300 (2) $270 (3) $600。どれも借方が多い'
          }
        },
        {
          title: 'ほかの限界',
          list: ['まだ財務諸表ではない: 在庫・減価償却・未払費用などの期末の調整が入る前の、作業用の表', '取引の中身が見えない: 載っているのは残高だけ。どの取引が入ったかは元帳や仕訳を見ないと分からない', '金額の正しさは分からない: 請求書などの証憑や銀行の明細と照らして、初めて確かめられる']
        },
        {
          title: 'なぜ？ 見つからない誤りがある理由',
          paras: ['試算表は合計しか比べないから。借方と貸方に同じ金額が入っている限り、勘定や金額が間違っていても合計は動かない。', '体重計の数字が同じでも、筋肉が減って脂肪が増えたかは分からないのと同じ。中身は別の方法で確かめる。', 'だから会社は試算表だけで終わらせず、後で学ぶ銀行勘定調整や取引先明細書との照合でもチェックする。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['試算表が確かめるのは「借方合計＝貸方合計」だけ', '左右に同じ金額が入る誤り（記帳もれ・逆・勘定違い・両側の金額ミス・打ち消し）は見つからない', '試算表は財務諸表ではない。期末の調整前で、取引の中身も見えない']
        },
        {
          title: '英単語',
          words: [
            ['limitation', 'リミテーション', '限界'],
            ['the trial balance balances', '', '試算表の左右の合計が一致する'],
            ['error of omission', '', '記帳もれ'],
            ['reversal of entries', '', '借方と貸方の逆'],
            ['error of original entry', '', '元の金額の誤り（両側とも同じ間違った金額）'],
            ['error of principle', '', '資産と費用などの種類の取り違え'],
            ['error of commission', '', '同じ種類の別の勘定に入れる誤り'],
            ['compensating error', '', '打ち消し合う誤り']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about a trial balance is correct?', choices: ['If the trial balance balances, the accounts are free from errors', 'It is a list of ledger balances used to check that total debits equal total credits', 'It is a financial statement published for the owners', 'It shows every transaction made during the period'], answer: 1, explain: '試算表は残高の一覧で、借方合計＝貸方合計を確かめる作業用の表。合っても誤りがないとは言えず、財務諸表でもなく、取引の明細も載らない。' },
        { q: 'Which of the following errors would cause the trial balance totals to disagree?', choices: ['A sales invoice was completely omitted from the records', 'Cash sales of $200 were debited to sales and credited to cash', 'A rent payment of $150 was debited to the rent account, with no other entry made', 'The purchase of a van was debited to motor expenses instead of motor vehicles'], answer: 2, explain: '借方にだけ $150 が入り、貸方が無いので合計がずれる。記帳もれ・借方貸方の逆・資産と費用の取り違えは、左右に同じ金額が入る（または入らない）ので合計は合う。' },
        { q: '家賃 $300 の支払いを Dr Rent 300、Cr Bank 30 と記帳した。試算表の借方合計と貸方合計の差はいくら？', type: 'number', answer: 270, unit: '$', explain: '借方に 300、貸方に 30 しか入っていないので、借方が 300－30＝270 多くなる。' },
        { q: '$450 の請求書を、借方も貸方も $540 で記帳した。試算表はどうなる？', choices: ['合う（この誤りは見つからない）', '合わない（借方が $90 多い）', '合わない（貸方が $90 多い）', '合わない（差は $990）'], answer: 0, explain: '両側とも同じ $540 なので合計は合う。金額の誤りは、請求書と照らさないと見つからない。' },
        { q: 'The trial balance totals agree. Which of the following could still be true?', choices: ['A purchase invoice has been completely omitted from the records', 'A debit entry was made with no matching credit entry', 'The credit side of a journal was posted twice', 'A ledger balance was left out of the trial balance'], answer: 0, explain: '記帳もれは借方にも貸方にも入らないので、合計は合ったまま。ほかの3つは、どれも片側だけ金額が増えたり減ったりするので合計が合わなくなる。' },
        { q: '試算表がそのまま財務諸表にならない理由は？', choices: ['在庫や減価償却などの期末の調整がまだ入っていないから', '借方と貸方の合計がいつも違うから', '収益と費用が載っていないから', '資産が載っていないから'], answer: 0, explain: '試算表には資産・負債・資本・収益・費用が全部載るが、期末の調整前の作業用の表。調整してから損益計算書と財政状態計算書を作る。' }
      ]
    }
  ],
  cards: [
    { id: 'L30-1', lesson: 'L30', q: '試算表（trial balance）とは？', a: 'ある日の全勘定の残高を、借方の列と貸方の列に並べた一覧表' },
    { id: 'L30-2', lesson: 'L30', q: '試算表の目的3つは？', a: '計算のチェック（Dr合計＝Cr合計）、残高を1枚にまとめる、財務諸表を作る出発点' },
    { id: 'L30-3', lesson: 'L30', q: '借方残高になるのは？', a: '資産・費用・引出し（売上戻りも）' },
    { id: 'L30-4', lesson: 'L30', q: '貸方残高になるのは？', a: '負債・資本・収益（受けた割引、仕入戻しも）' },
    { id: 'L30-5', lesson: 'L30', q: 'なぜ借方合計と貸方合計が同じになる？', a: 'どの取引も借方と貸方に同じ金額を書くから' },
    { id: 'L30-6', lesson: 'L30', q: '試算表で1つだけ残高が分からないときは？', a: '借方合計と貸方合計の差で求める' },
    { id: 'L30-7', lesson: 'L30', q: 'Bank 勘定の貸方残高は何を意味する？', a: '当座借越（bank overdraft）。負債' },
    { id: 'L31-1', lesson: 'L31', q: '期首試算表に載る勘定は？', a: '資産・負債・資本だけ（写真の勘定）' },
    { id: 'L31-2', lesson: 'L31', q: '収益と費用の勘定は翌期どうなる？', a: '期末に損益計算書へ移して、翌期は0から数え直す' },
    { id: 'L31-3', lesson: 'L31', q: '引出しの勘定は翌期どうなる？', a: '期末に資本から引いて、翌期は0から' },
    { id: 'L31-4', lesson: 'L31', q: '期首試算表の資本の求め方は？', a: '前の資本＋資本の拠出＋利益－引出し' },
    { id: 'L31-5', lesson: 'L31', q: 'なぜ収益と費用は毎年0に戻す？', a: '損益計算書は1年ごとの動き。混ざるとその年の稼ぐ力が分からないから' },
    { id: 'L31-6', lesson: 'L31', q: '期末の試算表の Capital には、その年の利益が入っている？', a: '入っていない。利益と引出しは、締めるときに資本へ移す' },
    { id: 'L32-1', lesson: 'L32', q: '試算表が合えば、帳簿に誤りはない？', a: 'いいえ。借方合計＝貸方合計を確かめるだけ' },
    { id: 'L32-2', lesson: 'L32', q: '試算表が合っても見つからない誤りは？', a: '記帳もれ、借方貸方の逆、勘定違い、両側の金額ミス、打ち消し合う誤り' },
    { id: 'L32-3', lesson: 'L32', q: '試算表が合わなくなる誤りは？', a: '片側だけの記帳、両側で金額が違う、両方を同じ側に書いた' },
    { id: 'L32-4', lesson: 'L32', q: 'なぜ見つからない誤りがある？', a: '合計しか比べないので、左右に同じ金額が入れば合計は動かないから' },
    { id: 'L32-5', lesson: 'L32', q: '試算表が財務諸表ではない理由は？', a: '期末の調整前の作業用の表で、取引の中身も見えないから' },
    { id: 'L32-6', lesson: 'L32', q: 'Dr Rent 300、Cr Bank 30 と記帳。試算表の差は？', a: '$270（借方が多い）' },
    { id: 'L32-7', lesson: 'L32', q: '家賃 $300 を Dr Rent、Dr Bank と両方借方に書いた。差は？', a: '$600（借方が多い）。同じ側に2回書くと差は金額の2倍' }
  ]
});
