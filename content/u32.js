(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 32,
  part: 19,
  partTitle: '連結財務諸表',
  lessons: [
    {
      id: 'L156',
      no: 156,
      title: '連結 SPL（グループ内取引の消去と期中取得）',
      goal: '親会社と子会社の損益計算書を合わせて連結 SPL を作り、グループ内取引の消去・期中取得・非支配持分への利益の配分を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['H1(e)i', 'H1(e)iii'],
      slides: [
        {
          title: '家族の中の売り買いは数えない',
          paras: ['お母さんが作ったお弁当を、子どもに500円で売ったとする。お母さんの財布は500円増え、子どもの財布は500円減る。', '家族全体で見ると、お金は家の中を移っただけ。外からは1円も入っていない。家族の「売上」に500円を足すと、ふくらんだウソの数字になる。会社のグループでも同じことが起きる。']
        },
        {
          title: '1行ずつ足して、最後に分ける',
          paras: ['連結損益計算書（consolidated statement of profit or loss）は、親会社 P と子会社 S の数字を1行ずつ足して作る。持ち株が80%でも、S の売上や費用は100%足す。P が S を支配（control）しているから。'],
          table: {
            caption: '連結 SPL の形',
            head: ['Consolidated SPL', '計算'],
            rows: [
              ['Revenue', 'P ＋ S − グループ内売上'],
              ['Cost of sales', 'P ＋ S − グループ内売上 ＋ 未実現利益'],
              ['Operating expenses', 'P ＋ S'],
              ['Finance costs / Tax', 'P ＋ S'],
              ['Profit for the year', 'グループ全体の利益'],
              ['Attributable to: owners of the parent', '当期利益 − NCI の分'],
              ['Attributable to: non-controlling interest', 'NCI% × S の利益']
            ]
          },
          note: { kind: 'tip', text: 'P が S から受け取った配当（dividend income）も、グループの中のお金の移動。連結 SPL からは消す。グループ内の管理手数料（management charge）や貸付の利息も同じで、受け取った側の収益と払った側の費用を同じ額だけ消す。' }
        },
        {
          title: 'グループ内取引の2つの調整',
          paras: ['P が S に商品を $40,000 で売った（原価に25%上乗せ）。期末に S の在庫に $10,000 分が残っている。'],
          list: ['① 売上と売上原価の両方から $40,000 を引く。P の売上と S の仕入（S の売上原価に入る）は、同じ取引の両側だから', '② 残った在庫の中の利益（未実現利益、unrealised profit）を売上原価に足す: $10,000 × 25/125 ＝ $2,000'],
          journal: [
            { side: 'Dr', account: 'Revenue（売上）', amount: '40,000' },
            { side: 'Cr', account: 'Cost of sales（売上原価）', amount: '40,000' },
            { side: 'Dr', account: 'Cost of sales（売上原価）', amount: '2,000' },
            { side: 'Cr', account: 'Inventory（在庫）', amount: '2,000' }
          ]
        },
        {
          title: '例題1: 1年まるごと子会社',
          example: {
            problem: 'P は S の株を80%持っている（何年も前に取得）。当期は P: 売上 $500,000、売上原価 $300,000、営業費用 $80,000。S: 売上 $200,000、売上原価 $120,000、営業費用 $30,000（S の利益 $50,000）。P は S に $40,000 の商品を売り（原価に25%上乗せ）、S の期末在庫に $10,000 分が残っている。連結 SPL の当期利益と、その分け方は？',
            steps: [
              'Revenue: 500,000 ＋ 200,000 − 40,000 ＝ $660,000',
              'Cost of sales: 300,000 ＋ 120,000 − 40,000 ＋ 未実現利益 2,000 ＝ $382,000（10,000 × 25/125 ＝ 2,000）',
              'Gross profit: 660,000 − 382,000 ＝ $278,000',
              'Operating expenses: 80,000 ＋ 30,000 ＝ $110,000。当期利益: 278,000 − 110,000 ＝ $168,000',
              '売り手は P なので、NCI は S の利益そのままで計算: 50,000 × 20% ＝ $10,000',
              '親会社の株主の分: 168,000 − 10,000 ＝ $158,000'
            ],
            answer: '当期利益 $168,000（親会社の株主 $158,000、非支配持分 $10,000）'
          }
        },
        {
          title: '利益を2つに分ける',
          paras: ['連結 SPL の一番下で、当期利益を「親会社の株主の分」と「非支配持分（NCI）の分」に分ける。英語では profit attributable to owners of the parent / non-controlling interest。', 'NCI の分は、S の利益に NCI の割合を掛ける。売り手が S の未実現利益は、S の利益から引いてから掛ける。例題1で売り手が S なら、(50,000 − 2,000) × 20% ＝ $9,600 になる。'],
          formula: 'NCI の分 ＝ S の取得後の利益（S が売り手なら未実現利益を引く）× NCI%'
        },
        {
          title: '期中取得: 取得日から後だけ足す',
          paras: ['年の途中で S を買ったら、S の損益は取得日から期末までの分だけ連結する。試験では「利益は1年に均等に発生する（accrue evenly）」と書かれるので、月割り（time-apportion）する。P の数字は12か月全部のまま。'],
          svg: `<svg viewBox="0 0 440 226" role="img" aria-label="4月1日に取得したら、子会社の損益は取得後の9か月分だけを連結する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">4月1日に取得、12月31日が決算日</text><text x="95" y="72" text-anchor="middle" fill="var(--quiet)">取得前 3か月</text><rect x="50" y="84" width="90" height="38" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="108" text-anchor="middle" fill="var(--quiet)">足さない</text><text x="275" y="72" text-anchor="middle" fill="var(--ink)">取得後 9か月</text><rect x="140" y="84" width="270" height="38" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="275" y="108" text-anchor="middle" font-weight="600" fill="var(--ink)">連結する（× 9/12）</text><text x="50" y="146" text-anchor="middle" fill="var(--quiet)">1月1日</text><text x="140" y="146" text-anchor="middle" fill="var(--quiet)">4月1日</text><text x="420" y="146" text-anchor="end" fill="var(--quiet)">12月31日</text><text x="20" y="184" fill="var(--ink)">S の売上・費用・利益に 9/12 を掛ける</text><text x="20" y="210" fill="var(--ink)">グループ内取引も、取得後の分だけ消す</text></svg>`
        },
        {
          title: '例題2: 期中取得',
          example: {
            problem: 'P は 20X8年4月1日に S の株を75%取得した。決算日は12月31日。P: 売上 $400,000、売上原価 $240,000、営業費用 $60,000。S（1年分、均等に発生）: 売上 $120,000、売上原価 $72,000、営業費用 $12,000。取得後に P は S に $8,000 の商品を売った（期末在庫には残っていない）。取得前の2月にも $5,000 売っている。連結 SPL の売上、当期利益、NCI の分は？',
            steps: [
              'S は4月〜12月の9か月分: 売上 90,000、売上原価 54,000、営業費用 9,000（利益 27,000）',
              'Revenue: 400,000 ＋ 90,000 − 8,000 ＝ $482,000。2月の $5,000 は S がまだグループでないときの取引なので消さない',
              'Cost of sales: 240,000 ＋ 54,000 − 8,000 ＝ $286,000',
              '当期利益: 482,000 − 286,000 − (60,000 ＋ 9,000) ＝ $127,000',
              'NCI: 27,000 × 25% ＝ $6,750。親会社の株主: 127,000 − 6,750 ＝ $120,250'
            ],
            answer: '売上 $482,000、当期利益 $127,000（NCI $6,750、親会社の株主 $120,250）'
          }
        },
        {
          title: 'なぜ？ 外との取引だけを数える',
          paras: ['連結財務諸表は、グループを「1つの会社」とみなして作る（single entity concept）。1つの会社の中で、店から倉庫へ商品を移しても売上にはならない。だからグループ内の売上は消す。', '未実現利益も同じ。グループの外にまだ売っていない商品の利益は、まだ稼いでいない。', '期中取得で取得前の S の利益を足さないのは、それがグループの稼いだものではなく、株を買った値段の中に含まれていたから。']
        },
        {
          title: 'よくある間違い',
          paras: ['グループ内売上を売上からだけ引いて、売上原価から引き忘れる。両方から同じ額を引くので、売上総利益は変わらない（減るのは未実現利益の分だけ）。', 'S の売上や費用に持ち株割合（80%など）を掛けてしまう。割合を使うのは、最後の NCI の計算だけ。'],
          note: { kind: 'warn', text: '期中取得で P の数字まで月割りする、または取得前のグループ内売上まで消す。月割りするのは S だけ、消すのは取得後の取引だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['S の売上・費用は100%足す。グループ内売上は、売上と売上原価の両方から引く', '未実現利益は売上原価に足す。NCI の分＝S の利益（S が売り手なら未実現利益を引く）× NCI%', '期中取得は S だけ月割り。消すのは取得後のグループ内取引だけ']
        },
        {
          title: '英単語',
          words: [
            ['consolidated statement of profit or loss', '', '連結損益計算書'],
            ['intra-group (intragroup) trading', 'イントラグループ トレーディング', 'グループ内取引'],
            ['unrealised profit', 'アンリアライズド プロフィット', '未実現利益'],
            ['profit attributable to owners of the parent', '', '親会社の株主に帰属する利益'],
            ['non-controlling interest (NCI)', 'ノンコントローリング インタレスト', '非支配持分'],
            ['acquisition part way through the year', '', '期中取得'],
            ['time-apportion / accrue evenly', 'タイム アポーション / アクルー イーブンリー', '月割りする / 1年に均等に発生する']
          ]
        }
      ],
      quiz: [
        { q: 'During the year P Co sold goods to its subsidiary S Co for $50,000. Revenue for the year: P Co $400,000, S Co $150,000. What is consolidated revenue?', choices: ['$550,000', '$500,000', '$450,000', '$350,000'], answer: 1, explain: '400,000 ＋ 150,000 − 50,000 ＝ $500,000。$550,000 は消し忘れ。$450,000 は P と S の両方から引いて2回消した間違い。$350,000 は S の売上を足し忘れている。' },
        { q: 'P Co acquired 60% of S Co on 1 October 20X5. Both companies have a 31 December year end. Revenue for the year ended 31 December 20X5: P Co $800,000, S Co $240,000 (accruing evenly). There was no intra-group trading. What is consolidated revenue for the year?', type: 'number', answer: 860000, unit: '$', explain: 'S は10月〜12月の3か月分だけ: 240,000 × 3/12 ＝ 60,000。800,000 ＋ 60,000 ＝ $860,000。60% を掛けるのは間違い（売上は100%足す）。P の数字は月割りしない。' },
        { q: "P Co owns 75% of S Co, acquired several years ago. S Co's profit for the year is $60,000. During the year S Co sold goods to P Co, and unrealised profit of $4,000 remains in P Co's closing inventory. What is the profit attributable to the non-controlling interest?", type: 'number', answer: 14000, unit: '$', explain: '売り手が S なので、S の利益から未実現利益を引く: (60,000 − 4,000) × 25% ＝ $14,000。引かないと $15,000、逆に足すと $16,000 になる。' },
        { q: '連結 SPL で、未実現利益 $3,000 はどう調整する？', choices: ['売上原価を $3,000 増やす', '売上を $3,000 増やす', '売上原価を $3,000 減らす', '在庫だけの話なので SPL は調整しない'], answer: 0, explain: '期末在庫を $3,000 減らすと、売上原価が $3,000 増えて利益が減る。まだ外に売っていない利益を取り消すため。' },
        { q: 'P は 7月1日に S を取得した（決算日は12月31日）。P は S に、3月に $10,000、9月に $15,000 の商品を売った。連結 SPL の売上から消すのは？', choices: ['$25,000', '$15,000', '$10,000', '消さない'], answer: 1, explain: '3月は S がまだグループの外だったので、普通の外部への売上。消すのは取得後の9月の $15,000 だけ。' },
        { q: "P Co owns 80% of S Co. P Co's investment income of $12,000 consists of an $8,000 dividend received from S Co and $4,000 of interest on a bank deposit. What is investment income in the consolidated statement of profit or loss?", choices: ['$12,000', '$5,600', '$4,000', '$0'], answer: 2, explain: 'S から受け取った配当 $8,000 は、グループの中のお金の移動なので全額消す。残るのは外の銀行からの利息 $4,000 だけ。$5,600 は 8,000 × 80% だけ消した間違い（P が受け取った $8,000 はすでに P の取り分）。$0 は外からの利息まで消している。' }
      ]
    },
    {
      id: 'L157',
      no: 157,
      title: '関連会社と重要な影響力',
      goal: '重要な影響力とは何かを説明し、グループの中から関連会社を見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['H2(a)', 'H2(b)'],
      slides: [
        {
          title: '友だちのカフェに口を出す',
          paras: ['友だちが開くカフェに、あなたも30%出資した。経営会議に席があり、メニューや値段について意見を言える。', 'でも、70%を出した友だちが「こうする」と決めたら、それに従うしかない。影響は与えられるが、思いどおりには動かせない。この関係が、会計でいう「関連会社」。']
        },
        {
          title: '関連会社と重要な影響力',
          paras: ['関連会社（associate）＝投資する会社が「重要な影響力（significant influence）」を持っている会社。ただし子会社ではないもの。', '重要な影響力＝投資先の財務や営業の方針の決定に「参加する」力。方針を「支配する」力ではない。'],
          formula: 'control ＝ 決められる / significant influence ＝ 決定に参加できる',
          note: { kind: 'tip', text: 'グループ（group）は親会社と子会社だけ。関連会社はグループの外だが、グループの財務諸表には持分法で載る。' }
        },
        {
          title: '議決権の割合が目安',
          svg: `<svg viewBox="0 0 440 316" role="img" aria-label="議決権が50%超なら子会社、20%から50%なら関連会社、20%未満なら単純投資が目安" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">議決権の割合が目安</text><rect x="20" y="52" width="400" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="82" font-size="16" font-weight="600" fill="var(--ink)">50%超 → 子会社</text><text x="400" y="82" text-anchor="end" font-size="12.5" fill="var(--quiet)">subsidiary</text><text x="40" y="108" fill="var(--ink)">支配している → 全部足す（連結）</text><rect x="20" y="140" width="400" height="72" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="170" font-size="16" font-weight="600" fill="var(--ink)">20%〜50% → 関連会社</text><text x="400" y="170" text-anchor="end" font-size="12.5" fill="var(--quiet)">associate</text><text x="40" y="196" fill="var(--ink)">影響はあるが支配はない → 持分法</text><rect x="20" y="228" width="400" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="258" font-size="16" font-weight="600" fill="var(--ink)">20%未満 → 単純投資</text><text x="400" y="258" text-anchor="end" font-size="12.5" fill="var(--quiet)">trade investment</text><text x="40" y="284" fill="var(--ink)">影響もない → 投資として記録</text></svg>`,
          caption: '割合はあくまで目安。最後は、実際に支配しているか、影響力があるかで決める。'
        },
        {
          title: '20% は「推定」',
          paras: ['議決権（voting rights、株主総会での投票権）を20%以上持っていると、重要な影響力があると推定（presume）する。影響力がないことがはっきり示されれば、関連会社にはならない。', '逆に20%未満なら、影響力はないと推定する。ただし影響力がある証拠があれば、20%未満でも関連会社になる。', 'ほかの株主が過半数を持っていても、それだけで重要な影響力がないとは言えない。']
        },
        {
          title: '重要な影響力の証拠',
          paras: ['次のどれかがあれば、重要な影響力がある証拠になる（IAS 28）。'],
          list: ['取締役会に代表を送っている（board representation）', '方針を決める話し合いに参加している（配当の決定を含む）', '投資先との間に重要な取引がある', '経営幹部（managerial personnel）を互いに出し合っている', '欠かせない技術情報を提供している']
        },
        {
          title: 'グループの中から見分ける',
          example: {
            problem: 'P 社は次の会社の議決権を持っている。X 社 55%、Y 社 35%、Z 社 10%（取締役の派遣なし、配当を受け取るだけ）、W 社 15%（取締役7人のうち2人を P が出している）。それぞれ何になる？',
            steps: [
              'X 社: 50%超で支配している → 子会社（連結する）',
              'Y 社: 20%以上で、影響力がないという証拠もない → 関連会社',
              'Z 社: 20%未満で、影響力の証拠もない → 単純投資（trade investment）',
              'W 社: 20%未満だが、取締役会に代表がいる → 関連会社'
            ],
            answer: '子会社は X、関連会社は Y と W、単純投資は Z'
          }
        },
        {
          title: '親会社と関連会社の関係の特徴',
          list: ['P は関連会社に影響は与えられるが、支配はしていない', '関連会社の資産・負債を P が自由に使えない。だから連結 SFP に1行ずつ足さない', '代わりに「関連会社への投資（investment in associate）」1行で見せる。会計のしかたは持分法（equity method、次のレッスン）', '支配していないので、非支配持分（NCI）は出てこない']
        },
        {
          title: 'なぜ？ 支配と影響で扱いを変える',
          paras: ['子会社は P が思いどおりに動かせる。S の現金や機械も事実上グループのものなので、全部足す。', '関連会社は動かせない。関連会社の機械を P が勝手に使うことはできない。全部足すと、使えない資産までグループのものに見えてしまう。', 'それでも、配当の額などに口を出せる。だから「ただ株を持っているだけ」の単純投資とも区別して、持分法という専用のやり方を使う。']
        },
        {
          title: 'よくある間違い',
          paras: ['関連会社も子会社と同じように1行ずつ足してしまう。1行ずつ足すのは子会社だけ。'],
          note: { kind: 'warn', text: '割合だけで決める。「20%〜50%なら必ず関連会社」「20%未満なら必ず単純投資」ではない。取締役会の席などの証拠を見て、影響力があるかで判断する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['関連会社＝重要な影響力（方針の決定に参加する力）があり、支配はしていない会社', '20%以上なら影響力があると推定。最後は取締役会の席などの証拠で判断する', '関連会社は1行ずつ足さない。投資1行で見せ、持分法で会計する']
        },
        {
          title: '英単語',
          words: [
            ['associate', 'アソシエイト', '関連会社'],
            ['significant influence', 'シグニフィカント インフルエンス', '重要な影響力'],
            ['voting rights', 'ボーティング ライツ', '議決権（株主総会での投票権）'],
            ['presume / presumption', 'プリズーム / プリザンプション', '推定する / 推定'],
            ['board representation', 'ボード レプリゼンテーション', '取締役会に代表を送ること'],
            ['interchange of managerial personnel', '', '経営幹部の交換'],
            ['trade (simple) investment', 'トレード インベストメント', '単純投資']
          ]
        }
      ],
      quiz: [
        { q: 'Significant influence is best described as the power to:', choices: ['govern the financial and operating policies of an entity', 'participate in the financial and operating policy decisions of an entity, but not control those policies', 'receive dividends from an entity', 'buy goods from an entity at a discount'], answer: 1, explain: '「方針の決定に参加する力（支配ではない）」が重要な影響力。方針を「支配する（govern）」力は control で、子会社の定義になる。' },
        { q: 'P Co holds the following voting rights: R Co 65%, T Co 30%, U Co 10% (no board representation), V Co 18% (P Co appoints 2 of the 6 directors). Which of these are associates of P Co?', choices: ['T Co only', 'T Co and V Co', 'R Co and T Co', 'T Co, U Co and V Co'], answer: 1, explain: 'R Co は65%で子会社。T Co は20%以上で関連会社。V Co は18%だが取締役会に代表がいるので関連会社。U Co は影響力の証拠がないので単純投資。' },
        { q: '重要な影響力の証拠にならないものは？', choices: ['取締役会に代表を送っている', '投資先との間に重要な取引がある', '経営幹部を互いに出し合っている', '株を5%持ち、配当を受け取っているだけ'], answer: 3, explain: '配当を受け取るのは、どんな株主でもできる。方針の決定に参加していないので、影響力の証拠にならない。ほかの3つは IAS 28 にある証拠。' },
        { q: 'P は Q 社の議決権を25%持っている。影響力がないことを示す情報は特にない。Q 社は？', choices: ['関連会社と推定される', '50%以下なので単純投資', '子会社', '取締役を送っていないと必ず単純投資'], answer: 0, explain: '20%以上なら、影響力がないとはっきり示されない限り、重要な影響力があると推定する。だから関連会社。' },
        { q: 'Which of the following is a key feature of a parent-associate relationship?', choices: ['The parent controls the associate, so the associate is consolidated line by line', 'The parent can influence the associate but does not control it, so the associate is not consolidated line by line', 'A non-controlling interest is calculated for the associate', 'The associate is part of the group in the same way as a subsidiary'], answer: 1, explain: '関連会社は影響はあるが支配はない。だから資産・負債を1行ずつ足さず、NCI も計算しない。グループ（親会社＋子会社）には入らない。' },
        { q: "P Co holds 30% of the voting rights of Q Co. The remaining 70% is held by a single investor. P Co appoints 2 of Q Co's 6 directors. How should Q Co be treated in P Co's consolidated financial statements?", choices: ['As an associate, using the equity method', 'As a subsidiary, consolidated line by line', 'As a trade investment, because another investor holds a majority', 'It is left out of the consolidated financial statements completely'], answer: 0, explain: '30%で影響力が推定され、取締役会に代表もいる。ほかの株主が過半数を持っていても、それだけで影響力がないとは言えない。だから関連会社で、持分法を使う。支配はしていないので子会社ではない。' }
      ]
    },
    {
      id: 'L158',
      no: 158,
      title: '持分法の原則',
      goal: '持分法のしくみを説明し、関連会社への投資と利益の持分の金額を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['H2(c)'],
      slides: [
        {
          title: 'カフェの持ち分は1つの封筒で',
          paras: ['友だちのカフェに30%出資した。家計簿に、カフェの冷蔵庫やレジのお金まで書き込みはしない。自分のものではないから。', '代わりに「カフェの持ち分」という封筒を1つ作る。カフェがもうかれば、その30%分だけ封筒の値打ちが上がる。配当をもらうと、封筒から財布へお金が移る。']
        },
        {
          title: '持分法（equity method）',
          paras: ['関連会社は持分法（equity method、equity accounting とも呼ぶ）で会計する。原則は3つ。'],
          list: ['① 最初は、払った金額（原価、cost）で記録する', '② 取得後に関連会社が出した利益のうち、自分の割合の分だけ投資の金額を増やす（損失なら減らす）', '③ 関連会社から配当を受け取ったら、その分だけ投資の金額を減らす'],
          formula: '投資の帳簿価額 ＝ 原価 ＋ 取得後の利益 × 持ち株% − 受取配当',
          note: { kind: 'tip', text: '年の途中で取得したら、取得後の利益だけ（月割り）を使う。投資の価値が下がった（impairment）ときは、その分さらに減らす。' }
        },
        {
          title: '例: 30%の関連会社',
          paras: ['P は年初に A 社の株30%を $30,000 で取得した。A の当期利益は $20,000、A は配当 $5,000 を払った（P の受取は30%の $1,500）。'],
          svg: `<svg viewBox="0 0 440 388" role="img" aria-label="関連会社への投資は、原価30,000ドルに利益の持分6,000ドルを足し、受取配当1,500ドルを引いて34,500ドルになる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">投資の金額の動き（持分法）</text><rect x="20" y="52" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="77" font-size="15" font-weight="600" fill="var(--ink)">取得したときの原価</text><text x="40" y="98" font-size="12.5" fill="var(--quiet)">cost</text><text x="400" y="87" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$30,000</text><text x="220" y="131" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">＋</text><rect x="20" y="140" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="165" font-size="15" font-weight="600" fill="var(--ink)">A の利益 $20,000 × 30%</text><text x="40" y="186" font-size="12.5" fill="var(--quiet)">share of profit</text><text x="400" y="175" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$6,000</text><text x="220" y="219" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">−</text><rect x="20" y="228" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="253" font-size="15" font-weight="600" fill="var(--ink)">受け取った配当</text><text x="40" y="274" font-size="12.5" fill="var(--quiet)">dividend received</text><text x="400" y="263" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$1,500</text><text x="220" y="307" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">＝</text><rect x="20" y="316" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="341" font-size="15" font-weight="600" fill="var(--ink)">期末の帳簿価額</text><text x="40" y="362" font-size="12.5" fill="var(--ink)">carrying amount</text><text x="400" y="351" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$34,500</text></svg>`
        },
        {
          title: '3つの投資の見え方',
          table: {
            caption: '連結財務諸表での見せ方',
            head: ['投資先', '連結 SFP', '連結 SPL'],
            rows: [
              ['子会社（支配）', '資産・負債を1行ずつ全部足す＋NCI', '収益・費用を全部足す＋NCI に配分'],
              ['関連会社（重要な影響力）', 'Investment in associate（1行）', 'Share of profit of associate（1行）'],
              ['単純投資', 'Investment（投資）', 'Dividend income（受取配当）']
            ]
          },
          after: '関連会社の利益の持分は、連結 SPL では財務費用（finance costs）の後、税引前利益の前に1行で出すのが一般的。'
        },
        {
          title: '例題: 2つの数字を出す',
          example: {
            problem: '前の例の続き。① 期末の連結 SFP の Investment in associate、② 連結 SPL の Share of profit of associate はいくら？（A の利益剰余金は取得後に 20,000 − 5,000 ＝ $15,000 増えた）',
            steps: [
              '① 原価 30,000 ＋ 20,000 × 30% − 受取配当 1,500 ＝ $34,500',
              '別の計算: 原価 30,000 ＋ 取得後の利益剰余金の増加 15,000 × 30% ＝ $34,500（同じになる）',
              '② 20,000 × 30% ＝ $6,000',
              'P の個別の SPL にある受取配当 $1,500 は、連結 SPL では消す'
            ],
            answer: '① $34,500 ② $6,000'
          }
        },
        {
          title: 'なぜ？ 配当を収益にしない',
          paras: ['利益の持分 $6,000 には、配当で払われた分のもうけも入っている。A は利益 $20,000 のうち $5,000 を配当にしただけ。配当まで収益にすると、同じもうけを2回数えてしまう。', '配当を受け取ると、封筒（投資）から財布（現金）にお金が移るだけ。だから投資の金額を減らす。', '利益の持分で記録すれば、影響力で配当を増やして利益を作ることもできない。']
        },
        {
          title: '連結の利益剰余金にも入る',
          paras: ['関連会社の取得後の利益の持分は、グループの利益剰余金にも入る。子会社と同じく、取得前の利益は入れない（株を買った値段に含まれていたから）。'],
          formula: 'グループの利益剰余金 ＝ P ＋ S の取得後 × S の持ち株% ＋ A の取得後 × A の持ち株%',
          after: '例なら、P の利益剰余金（受取配当 $1,500 を含む）に、A の分として 15,000 × 30% ＝ $4,500 が加わる。合わせると $6,000 で、利益の持分と一致する。'
        },
        {
          title: 'よくある間違い',
          paras: ['関連会社の資産・負債を、100%や30%分ずつ足してしまう。載せるのは「投資」1行だけ。', '関連会社の非支配持分（NCI）を計算してしまう。NCI は子会社だけのもの。'],
          note: { kind: 'warn', text: '利益の持分（$6,000）と受取配当（$1,500）を両方収益にする。収益にするのは利益の持分だけ。配当は投資の金額を減らす。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['持分法: 原価で始め、取得後の利益の持分で増やし、受取配当で減らす', '連結 SFP は Investment in associate、連結 SPL は Share of profit of associate、どちらも1行', '受取配当は収益にしない（利益の持分と二重になる）']
        },
        {
          title: '英単語',
          words: [
            ['equity method / equity accounting', 'エクイティ メソッド', '持分法'],
            ['investment in associate', 'インベストメント イン アソシエイト', '関連会社への投資（連結 SFP の1行）'],
            ['share of profit of associate', '', '関連会社の利益の持分（連結 SPL の1行）'],
            ['carrying amount', 'キャリング アマウント', '帳簿価額'],
            ['post-acquisition profits', 'ポスト アクイジション プロフィッツ', '取得後の利益'],
            ['dividend income', 'ディビデンド インカム', '受取配当'],
            ['impairment', 'インペアメント', '価値の下落（減損）']
          ]
        }
      ],
      quiz: [
        { q: 'P Co acquired 40% of A Co on 1 January 20X6 for $90,000, giving P Co significant influence. A Co made a profit of $30,000 for the year ended 31 December 20X6 and paid a dividend of $10,000 during the year. What is the carrying amount of the investment in the associate in the consolidated statement of financial position at 31 December 20X6?', type: 'number', answer: 98000, unit: '$', explain: '90,000 ＋ 30,000 × 40% − 10,000 × 40% ＝ 90,000 ＋ 12,000 − 4,000 ＝ $98,000。配当を引き忘れると $102,000、原価のままだと $90,000。' },
        { q: 'How are the results of an associate presented in the consolidated statement of profit or loss?', choices: ['100% of its revenue and expenses are added line by line, with a non-controlling interest', 'The group share of its profit for the year is shown as a single line', 'Only the dividends received from the associate are shown', 'The group share of its revenue and of each expense is added line by line'], answer: 1, explain: '持分法では、利益 × 持ち株% を Share of profit of associate の1行で見せる。1行ずつ足すのは子会社だけ。受取配当は収益にしない。' },
        { q: 'P Co has owned 30% of A Co, an associate, for several years. A Co made a profit of $50,000 for the year, and P Co received a dividend of $3,000 from A Co. What is the share of profit of associate in the consolidated statement of profit or loss?', type: 'number', answer: 15000, unit: '$', explain: '50,000 × 30% ＝ $15,000。受取配当 $3,000 は足さない（$18,000 は二重計上）。配当は投資の金額を減らすだけ。' },
        { q: '連結 SPL で、関連会社からの受取配当を収益に入れない理由は？', choices: ['利益の持分に配当の元のもうけも含まれていて、二重に数えてしまうから', '配当は税金がかかるから', '配当は親会社のものではないから', '関連会社は配当を払えないから'], answer: 0, explain: '関連会社の利益の30%をすでに収益にしている。配当はそのもうけの一部を現金で受け取っただけなので、収益にすると2回数えることになる。' },
        { q: '投資の扱いの組み合わせで正しいのは？', choices: ['子会社＝持分法、関連会社＝1行ずつ全部足す', '子会社＝1行ずつ全部足す、関連会社＝持分法、単純投資＝投資として記録し配当を収益にする', '子会社・関連会社・単純投資すべて持分法', '関連会社＝受取配当だけを収益にする'], answer: 1, explain: '支配（子会社）は全部足す。重要な影響力（関連会社）は持分法。どちらもない単純投資は、投資として記録して受取配当を収益にする。' }
      ]
    },
    {
      id: 'L159',
      no: 159,
      title: '連結の総合演習（Section B 形式）',
      goal: 'Section B の連結問題を、決まった順番のワーキングで最後まで解けるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['H1(c)', 'H1(d)', 'H1(e)'],
      slides: [
        {
          title: '段取り表どおりに解く',
          paras: ['引越しは、段取り表どおりに進めると荷物が漏れない。連結問題も同じで、毎回同じ順番の計算メモ（workings）で解く。', 'Section B の連結問題は15点。連結 SFP や連結 SPL の一部（extracts）の数字を、いくつかの小問で答える形が多い。比率の計算（第20部）が少し入ることもある。'],
          numbered: ['W1 グループ構造: 持ち株%と取得日', 'W2 S の純資産: 取得日と期末', 'W3 のれん', 'W4 非支配持分（NCI）', 'W5 グループの利益剰余金']
        },
        {
          title: '問題: P と S の財政状態計算書',
          table: {
            caption: '20X8年12月31日。資産合計は P $570,000、S $220,000（資本＋負債も同じ）',
            head: ['31 Dec 20X8', 'P $', 'S $'],
            rows: [
              ['Property, plant and equipment', '300,000', '150,000'],
              ['Investment in S', '160,000', '－'],
              ['Inventory', '50,000', '30,000'],
              ['Trade receivables', '40,000', '25,000'],
              ['Cash', '20,000', '15,000'],
              ['Share capital ($1 shares)', '200,000', '100,000'],
              ['Share premium', '40,000', '－'],
              ['Retained earnings', '250,000', '90,000'],
              ['Trade payables', '80,000', '30,000']
            ]
          }
        },
        {
          title: '問題: 追加の情報',
          list: [
            'P は 20X8年4月1日に、S の普通株 80,000株を取得した',
            '対価: 現金 $100,000 ＋ S 株4株につき P 株1株（P 株の公正価値は $3、発行は記録済み）',
            '取得日の NCI の公正価値は $35,000',
            '取得日に、S の土地の公正価値は帳簿価額より $20,000 高かった（土地なので減価償却なし）',
            'S の当期利益は $40,000（1年に均等に発生）。20X8年1月1日の S の利益剰余金は $50,000',
            '取得後、S は P に $24,000 の商品を売った（原価に25%上乗せ）。P の期末在庫に $10,000 分が残っている',
            '期末に P は S に $6,000 の買掛金がある（両社の帳簿で一致）'
          ]
        },
        {
          title: '例題1: W1 と W2（S の純資産）',
          example: {
            problem: 'グループ構造を確かめ、S の純資産を取得日と期末で計算する。取得後の利益はいくら？',
            steps: [
              'W1: 80,000 ÷ 100,000 ＝ 80%、NCI は 20%。取得日は4月1日（期首から3か月後）',
              '取得日の利益剰余金: 50,000 ＋ 40,000 × 3/12 ＝ 60,000',
              '取得日の純資産: 株式資本 100,000 ＋ 利益剰余金 60,000 ＋ 公正価値調整 20,000 ＝ 180,000',
              '期末の純資産: 100,000 ＋ 90,000 ＋ 20,000 − 未実現利益 2,000 ＝ 208,000。売り手が S なので S の側で引く（10,000 × 25/125 ＝ 2,000）',
              '取得後の利益: 208,000 − 180,000 ＝ 28,000（＝ 40,000 × 9/12 − 2,000）'
            ],
            answer: '取得日 $180,000、期末 $208,000、取得後の利益 $28,000'
          }
        },
        {
          title: '例題2: W3 のれん',
          example: {
            problem: 'のれん（goodwill）を計算する。',
            steps: [
              'P が渡した株: 80,000 ÷ 4 ＝ 20,000株。金額は公正価値で 20,000 × $3 ＝ 60,000（額面の $1 ではない）',
              '対価の公正価値: 現金 100,000 ＋ 株 60,000 ＝ 160,000',
              'NCI の公正価値 35,000 を足す: 160,000 ＋ 35,000 ＝ 195,000',
              '取得日の純資産（W2）を引く: 195,000 − 180,000 ＝ 15,000'
            ],
            answer: 'のれん $15,000'
          },
          formula: '対価 ＋ NCI の公正価値 − 取得日の純資産 ＝ のれん'
        },
        {
          title: '例題3: W4 NCI と W5 利益剰余金',
          example: {
            problem: '期末の NCI と、グループの利益剰余金を計算する。',
            steps: [
              'W4 NCI: 取得日の公正価値 35,000 ＋ 取得後の利益 28,000 × 20% ＝ 35,000 ＋ 5,600 ＝ 40,600',
              'W5 利益剰余金: P 250,000 ＋ 取得後の利益 28,000 × 80% ＝ 250,000 ＋ 22,400 ＝ 272,400',
              '売り手が P のときは、未実現利益をこの W5 で P の利益剰余金から引く（NCI には関係しない）'
            ],
            answer: 'NCI $40,600、利益剰余金 $272,400'
          },
          note: { kind: 'warn', text: 'S の利益剰余金 90,000 全部に80%を掛ける間違いが多い。取得前の 60,000 は、のれんの計算（W2・W3）で使い終わっている。掛けるのは取得後の分だけ。' }
        },
        {
          title: '例題4: 1行ずつ合算する',
          example: {
            problem: '連結 SFP の資産と負債の各行を計算する。',
            steps: [
              'PPE: 300,000 ＋ 150,000 ＋ 公正価値調整 20,000 ＝ 470,000',
              'Inventory: 50,000 ＋ 30,000 − 未実現利益 2,000 ＝ 78,000',
              'Trade receivables: 40,000 ＋ 25,000 − グループ内 6,000 ＝ 59,000。Trade payables: 80,000 ＋ 30,000 − 6,000 ＝ 104,000',
              'Cash: 20,000 ＋ 15,000 ＝ 35,000',
              'Investment in S は消して、代わりにのれん 15,000 を載せる'
            ],
            answer: 'PPE $470,000、在庫 $78,000、売掛金 $59,000、現金 $35,000、買掛金 $104,000'
          },
          note: { kind: 'warn', text: 'S の株式資本 $100,000 を連結 SFP に足さない。S の資本は W2〜W5 で、のれん・NCI・利益剰余金に振り分け終わっている。株式資本と株式払込剰余金は P の分だけ。' }
        },
        {
          title: '完成: 連結財政状態計算書',
          table: {
            caption: 'P グループ 20X8年12月31日',
            head: ['Consolidated SFP', '$'],
            rows: [
              ['Goodwill', '15,000'],
              ['Property, plant and equipment', '470,000'],
              ['Inventory', '78,000'],
              ['Trade receivables', '59,000'],
              ['Cash', '35,000'],
              ['Total assets', '657,000'],
              ['Share capital', '200,000'],
              ['Share premium', '40,000'],
              ['Retained earnings', '272,400'],
              ['Non-controlling interest', '40,600'],
              ['Trade payables', '104,000']
            ],
            total: ['Total equity and liabilities', '657,000']
          },
          after: '資産と、資本＋負債が一致すれば、計算に漏れがない確かめになる。'
        },
        {
          title: '例題5: 連結 SPL の抜粋',
          example: {
            problem: '当期の SPL は P: 売上 $600,000、売上原価 $360,000、営業費用 $140,000。S（1年分）: 売上 $240,000、売上原価 $150,000、営業費用 $50,000（利益 $40,000）。連結 SPL の売上、売上原価、当期利益、NCI の分は？',
            steps: [
              'S は取得後の 9/12: 売上 180,000、売上原価 112,500、営業費用 37,500（利益 30,000）',
              'Revenue: 600,000 ＋ 180,000 − グループ内 24,000 ＝ 756,000',
              'Cost of sales: 360,000 ＋ 112,500 − 24,000 ＋ 未実現利益 2,000 ＝ 450,500',
              '当期利益: 756,000 − 450,500 − 140,000 − 37,500 ＝ 128,000',
              'NCI: (30,000 − 2,000) × 20% ＝ 5,600。親会社の株主: 128,000 − 5,600 ＝ 122,400'
            ],
            answer: '売上 $756,000、売上原価 $450,500、当期利益 $128,000（NCI $5,600、親会社の株主 $122,400）'
          },
          note: { kind: 'tip', text: '検算: P の当期利益は 600,000 − 360,000 − 140,000 ＝ 100,000 なので、P の期首の利益剰余金は 150,000。150,000 ＋ 122,400 ＝ 272,400 で W5 と一致する（配当がない場合）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['W1〜W5 の順番で解く（構造 → 純資産 → のれん → NCI → 利益剰余金）', '取得後の利益（S が売り手なら未実現利益を引く）を、NCI と P で分ける', '合算ではグループ内を消し、公正価値調整と未実現利益を足し引きする。資本は P の分だけ']
        },
        {
          title: '英単語',
          words: [
            ['workings', 'ワーキングズ', '計算メモ（解答の途中の計算）'],
            ['net assets at acquisition', '', '取得日の純資産'],
            ['post-acquisition retained earnings', '', '取得後の利益剰余金'],
            ['consideration transferred', 'コンシダレーション トランスファード', '取得の対価'],
            ['fair value adjustment', 'フェア バリュー アジャストメント', '公正価値調整'],
            ['group retained earnings', '', 'グループの利益剰余金'],
            ['extracts', 'エクストラクツ', '抜粋（財務諸表の一部）']
          ]
        }
      ],
      quiz: [
        { q: "P Co acquired 75% of the ordinary shares of S Co on 1 January 20X4. The consideration was cash of $120,000 plus 10,000 P Co shares (nominal value $1, fair value $4 each). The fair value of the non-controlling interest at acquisition was $45,000. At acquisition the carrying amount of S Co's net assets was $120,000, and the fair value of its land was $30,000 higher than its carrying amount. What is the goodwill at acquisition?", type: 'number', answer: 55000, unit: '$', explain: '対価: 120,000 ＋ 10,000 × $4 ＝ 160,000。のれん: 160,000 ＋ 45,000 − (120,000 ＋ 30,000) ＝ $55,000。株を額面 $1 で数えると $25,000、公正価値調整を忘れると $85,000 になる。' },
        { q: "P Co acquired 75% of S Co several years ago. The fair value of the non-controlling interest at acquisition was $45,000. S Co's retained earnings were $70,000 at acquisition and $110,000 at the reporting date. S Co has sold goods to P Co, and unrealised profit of $4,000 remains in P Co's closing inventory. What is the non-controlling interest at the reporting date?", type: 'number', answer: 54000, unit: '$', explain: '取得後の利益: 110,000 − 70,000 − 4,000 ＝ 36,000（売り手が S なので未実現利益を引く）。NCI: 45,000 ＋ 36,000 × 25% ＝ $54,000。引き忘れると $55,000。' },
        { q: "Using the same information, P Co's retained earnings at the reporting date are $300,000. What are the group retained earnings?", choices: ['$327,000', '$330,000', '$336,000', '$382,500'], answer: 0, explain: '300,000 ＋ 36,000 × 75% ＝ $327,000。$330,000 は未実現利益を引き忘れ（40,000 × 75%）。$336,000 は100%足した。$382,500 は取得前の分も含めて 110,000 × 75% を足した間違い。' },
        { q: 'P Co has trade receivables of $35,000, including $5,000 due from its subsidiary S Co. S Co has trade receivables of $28,000. What are consolidated trade receivables?', choices: ['$63,000', '$58,000', '$53,000', '$35,000'], answer: 1, explain: '35,000 ＋ 28,000 − 5,000 ＝ $58,000。グループ内の $5,000 は1回だけ消す（S の買掛金からも同じ $5,000 を消す）。$53,000 は2回引いた間違い。' },
        { q: 'P Co acquired 80% of S Co on 1 May 20X6. The year end is 31 December. Revenue for the year: P Co $900,000, S Co $360,000 (accruing evenly). Since acquisition, S Co sold goods to P Co for $40,000. What is consolidated revenue?', type: 'number', answer: 1100000, unit: '$', explain: 'S は5月〜12月の8か月分: 360,000 × 8/12 ＝ 240,000。900,000 ＋ 240,000 − 40,000 ＝ $1,100,000。' },
        { q: '連結 SFP の株式資本（share capital）に載るのは？', choices: ['親会社 P の株式資本だけ', 'P と S の株式資本の合計', 'P の株式資本 ＋ S の株式資本 × P の持ち株%', 'S の株式資本だけ'], answer: 0, explain: 'S の株式資本は、W2 の純資産としてのれん・NCI・利益剰余金の計算に使い終わっている。連結 SFP の株式資本と株式払込剰余金は P の分だけ。' }
      ]
    }
  ],
  cards: [
    { id: 'L156-1', lesson: 'L156', q: '連結 SPL で、80%子会社の売上はいくら足す？', a: '100%。支配しているから。80%は NCI の計算でだけ使う' },
    { id: 'L156-2', lesson: 'L156', q: 'グループ内売上 $X の連結 SPL での調整は？', a: '売上と売上原価の両方から $X を引く' },
    { id: 'L156-3', lesson: 'L156', q: '未実現利益は連結 SPL のどこを調整する？', a: '売上原価に足す（利益が減る）' },
    { id: 'L156-4', lesson: 'L156', q: 'NCI に配分する利益の計算は？', a: 'S の取得後の利益 × NCI%。S が売り手なら未実現利益を引いてから' },
    { id: 'L156-5', lesson: 'L156', q: '期中取得のとき月割りするのは？', a: 'S の収益・費用だけ。P は12か月全部。消すのも取得後のグループ内取引だけ' },
    { id: 'L156-6', lesson: 'L156', q: 'なぜグループ内売上を消す？', a: 'グループを1つの会社とみなすと、中での移動は売上ではないから' },
    { id: 'L156-7', lesson: 'L156', q: 'P が S から受け取った配当は、連結 SPL でどうする？', a: '全額消す。グループの中の移動だから（管理手数料・貸付利息も同じ）' },
    { id: 'L157-1', lesson: 'L157', q: '関連会社（associate）とは？', a: '重要な影響力があるが、支配はしていない（子会社ではない）投資先' },
    { id: 'L157-2', lesson: 'L157', q: '重要な影響力（significant influence）とは？', a: '方針の決定に「参加する」力。「支配する」力ではない' },
    { id: 'L157-3', lesson: 'L157', q: '何%以上で重要な影響力があると推定する？', a: '議決権の20%以上（影響力がないとはっきり示されない限り）' },
    { id: 'L157-4', lesson: 'L157', q: '重要な影響力の証拠を3つ', a: '取締役会への代表、重要な取引、経営幹部の交換（ほかに方針決定への参加、技術情報の提供）' },
    { id: 'L157-5', lesson: 'L157', q: '15%でも関連会社になるのは？', a: '取締役会に代表を送るなど、影響力の証拠があるとき' },
    { id: 'L157-6', lesson: 'L157', q: 'なぜ関連会社は1行ずつ足さない？', a: '支配しておらず、関連会社の資産を自由に使えないから' },
    { id: 'L158-1', lesson: 'L158', q: '持分法の3つの原則は？', a: '原価で記録し、取得後の利益の持分で増やし、受取配当で減らす' },
    { id: 'L158-2', lesson: 'L158', q: '関連会社への投資の帳簿価額の式は？', a: '原価 ＋ 取得後の利益 × 持ち株% − 受取配当' },
    { id: 'L158-3', lesson: 'L158', q: '連結 SPL での関連会社の見せ方は？', a: 'Share of profit of associate の1行（利益 × 持ち株%）' },
    { id: 'L158-4', lesson: 'L158', q: 'なぜ関連会社からの受取配当を収益にしない？', a: '利益の持分にそのもうけが含まれていて、二重に数えてしまうから' },
    { id: 'L158-5', lesson: 'L158', q: '原価 $30,000、30%、取得後の利益 $20,000、A の配当 $5,000。帳簿価額は？', a: '$34,500（30,000 ＋ 6,000 − 1,500）' },
    { id: 'L158-6', lesson: 'L158', q: '関連会社に NCI はある？', a: 'ない。NCI は子会社を全部足すときだけ出てくる' },
    { id: 'L159-1', lesson: 'L159', q: '連結問題の5つのワーキングは？', a: 'W1 構造、W2 S の純資産、W3 のれん、W4 NCI、W5 利益剰余金' },
    { id: 'L159-2', lesson: 'L159', q: '期末の NCI の式は？', a: '取得日の NCI の公正価値 ＋ 取得後の利益 × NCI%' },
    { id: 'L159-3', lesson: 'L159', q: 'グループの利益剰余金の式は？', a: 'P の利益剰余金 ＋ S の取得後の利益 × P%（P が売り手の未実現利益は P から引く）' },
    { id: 'L159-4', lesson: 'L159', q: '株で払った取得の対価の金額は？', a: '発行した株数 × 株の公正価値（額面ではない）' },
    { id: 'L159-5', lesson: 'L159', q: '連結 SFP の株式資本に載るのは？', a: '親会社 P の株式資本だけ' },
    { id: 'L159-6', lesson: 'L159', q: '4月1日取得、S の年間利益 $40,000（均等）、S が売り手の未実現利益 $2,000。取得後の利益は？', a: '$28,000（40,000 × 9/12 − 2,000）' }
  ]
});
