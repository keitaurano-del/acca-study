(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 119,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M074',
      no: 74,
      title: '確率の基本: 単純確率と同時確率',
      goal: '単純確率・同時確率（戻さずに取り出す場合を含む）・「AまたはB」の確率を、計算と表の読み取りで求められるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(e)'],
      slides: [
        {
          title: '商店街の福引と確率',
          paras: ['福引の箱に玉が100個、当たりは5個。1回引いて当たる確率は 5 ÷ 100 ＝ 0.05（5%）。', 'どれくらい起こりやすいかを0から1の数で表したものを確率（probability）という。0は「絶対に起こらない」、1は「必ず起こる」。'],
          formula: 'P(A) ＝ A が起こる場合の数 ÷ 全部の場合の数',
          after: '起こらない確率は 1 − P(A)。はずれる確率は 1 − 0.05 ＝ 0.95。1つの出来事だけの確率を単純確率（simple probability）という。'
        },
        {
          title: '2つの出来事を組み合わせる',
          list: ['同時確率（joint probability）: A と B が両方起こる確率。互いに影響しない（独立、independent）なら P(A) × P(B)。独立でないなら P(A) ×「A の中で B が起こる確率」','「A または B」で、同時には起こらない（互いに排反、mutually exclusive）なら P(A) ＋ P(B)', '「A または B」で、両方起こることもあるなら P(A) ＋ P(B) − P(A and B)。重なりを2回数えないように引く']
        },
        {
          title: '工場の機械で確かめる',
          paras: ['機械X が1週間に故障する確率は 0.1、機械Y は 0.2。2台の故障は互いに関係しない（独立）。'],
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="確率の木。機械Xの故障0.1と正常0.9から、それぞれ機械Yの故障0.2と正常0.8に枝分かれする。両方故障0.02、Xだけ故障0.08、Yだけ故障0.18、両方正常0.72" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">2台の機械の故障（独立）</text><circle cx="26" cy="180" r="4" fill="var(--ink)"/><line x1="26" y1="180" x2="98" y2="106" stroke="var(--edge)" stroke-width="1.5"/><line x1="26" y1="180" x2="98" y2="254" stroke="var(--edge)" stroke-width="1.5"/><text x="36" y="134" fill="var(--quiet)">0.1</text><text x="36" y="236" fill="var(--quiet)">0.9</text><text x="104" y="111" font-size="15" fill="var(--ink)">X 故障</text><text x="104" y="259" font-size="15" fill="var(--ink)">X 正常</text><line x1="154" y1="100" x2="254" y2="66" stroke="var(--edge)" stroke-width="1.5"/><line x1="154" y1="100" x2="254" y2="134" stroke="var(--edge)" stroke-width="1.5"/><line x1="154" y1="254" x2="254" y2="222" stroke="var(--edge)" stroke-width="1.5"/><line x1="154" y1="254" x2="254" y2="290" stroke="var(--edge)" stroke-width="1.5"/><text x="192" y="72" fill="var(--quiet)">0.2</text><text x="192" y="134" fill="var(--quiet)">0.8</text><text x="192" y="226" fill="var(--quiet)">0.2</text><text x="192" y="290" fill="var(--quiet)">0.8</text><text x="260" y="71" fill="var(--ink)">Y 故障</text><text x="260" y="139" fill="var(--ink)">Y 正常</text><text x="260" y="227" fill="var(--ink)">Y 故障</text><text x="260" y="295" fill="var(--ink)">Y 正常</text><rect x="318" y="52" width="100" height="26" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="412" y="71" text-anchor="end" font-weight="600" fill="var(--ink)">0.1×0.2＝0.02</text><text x="412" y="139" text-anchor="end" fill="var(--ink)">0.1×0.8＝0.08</text><text x="412" y="227" text-anchor="end" fill="var(--ink)">0.9×0.2＝0.18</text><text x="412" y="295" text-anchor="end" fill="var(--ink)">0.9×0.8＝0.72</text></svg>`,
          caption: '枝の確率を掛けると、4つの結果それぞれの確率になる。4つを足すと 0.02 ＋ 0.08 ＋ 0.18 ＋ 0.72 ＝ 1。'
        },
        {
          title: '例題: 2台の機械',
          example: {
            problem: '機械X（故障 0.1）と機械Y（故障 0.2）は独立。1週間で (1) 2台とも故障する、(2) 少なくとも1台が故障する、(3) ちょうど1台だけ故障する、それぞれの確率は？',
            steps: ['(1) 両方: 0.1 × 0.2 ＝ 0.02', '(2) まず「どちらも故障しない」: 0.9 × 0.8 ＝ 0.72', '(2) 少なくとも1台 ＝ 1 − 0.72 ＝ 0.28', '(2) 別の解き方: 0.1 ＋ 0.2 − 0.02 ＝ 0.28（重なりを引く）', '(3) X だけ: 0.1 × 0.8 ＝ 0.08。Y だけ: 0.9 × 0.2 ＝ 0.18', '(3) ちょうど1台 ＝ 0.08 ＋ 0.18 ＝ 0.26（同時には起こらないので足す）'],
            answer: '(1) 0.02　(2) 0.28　(3) 0.26'
          }
        },
        {
          title: '表から読む確率（分割表）',
          paras: ['ある店が客200人を調べた。新規客とリピーター（repeat customer）に分け、買ったかどうかを数えた。2つの分け方で数えた表を、分割表（contingency table）という。'],
          table: { caption: '客200人の内訳（人）', head: ['客', '買った', '買わなかった'], rows: [['新規客（80人）', '20', '60'], ['リピーター（120人）', '60', '60']], total: ['合計（200人）', '80', '120'] }
        },
        {
          title: '例題: 表を使う',
          example: {
            problem: '上の200人から1人を無作為に（at random）選ぶ。(1) 買った人、(2) 新規客で、かつ買った人、(3) 新規客または買った人、である確率は？ (4) 新規客の中から1人選んだとき（given that the customer is new）、買った人である確率は？',
            steps: ['(1) 単純確率: 買った 80人 ÷ 200人 ＝ 0.4', '(2) 同時確率: 表の「新規客 × 買った」のマス 20人 ÷ 200人 ＝ 0.1', '(3) 新規客 80人 ＋ 買った 80人 − 重なり 20人 ＝ 140人。140 ÷ 200 ＝ 0.7', '(4) 「新規客の中から」なので、分母は新規客の 80人。20 ÷ 80 ＝ 0.25'],
            answer: '(1) 0.4　(2) 0.1　(3) 0.7　(4) 0.25'
          }
        },
        {
          title: 'なぜ？ 掛け算になる理由',
          paras: ['1,000週を想像する。X が故障するのは 0.1 の 100週。そのうち Y も故障するのは 0.2 の 20週。20 ÷ 1,000 ＝ 0.02。「〜のうちの〜」を数えると、自然に掛け算になる。', '分割表で新規客 0.4 と買う 0.4 を掛けると 0.16 で、表の 0.1 と合わない。新規客は買いにくい、つまり独立ではないから。この場合は2つ目に「新規客の中で買う」確率 0.25 を使う。0.4 × 0.25 ＝ 0.1 で表と一致する。表があれば、表のマスから直接数えればよい。']
        },
        {
          title: '例題: 戻さずに続けて取り出す',
          paras: ['取り出した物を戻さない（without replacement）と、1回目の結果で2回目の確率が変わる。独立ではないので、2回目は「残った物の中での確率」を掛ける。'],
          formula: '戻さない: 同じ種類を続けて取るたびに、分子も分母も1ずつ減る',
          example: {
            problem: '部品10個の箱に不良品が3個ある。1個取り出し、戻さずにもう1個取り出す。2個とも不良品である確率は？ 戻す場合とも比べる。',
            steps: ['1個目が不良品: 3 ÷ 10', '2個目: 残り9個のうち不良品は2個なので 2 ÷ 9（分子も分母も1減る）', '2個とも不良品: 3/10 × 2/9 ＝ 6/90 ＝ 0.067', '戻す場合: 2個目も10個中3個なので 3/10 × 3/10 ＝ 0.09', '戻さないと不良品が減っていくので、確率は 0.09 より小さくなる'],
            answer: '0.067（戻す場合は 0.09）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「または」で重なりを引き忘れる（0.1 ＋ 0.2 ＝ 0.3 は誤り。正しくは 0.28）。独立でないのに確率をそのまま掛ける。「新規客の中から」や「戻さずに」なのに、分母を全体のまま（200人、10個）にする。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['単純確率 ＝ 起こる場合の数 ÷ 全部の場合の数。起こらない確率は 1 − P', '同時確率（両方起こる）: 独立なら掛け算。独立でなければ「〜の中で」の確率を掛ける（戻さないなら2回目は分子も分母も1減る）', '「A または B」 ＝ P(A) ＋ P(B) − P(A and B)。重なりを引く']
        },
        {
          title: '英単語',
          words: [
            ['probability', 'プロバビリティ', '確率（0〜1で表す起こりやすさ）'],
            ['simple probability', '', '単純確率（1つの出来事の確率）'],
            ['joint probability', 'ジョイント プロバビリティ', '同時確率（2つの出来事が両方起こる確率）'],
            ['independent events', '', '独立な出来事（互いに影響しない）'],
            ['mutually exclusive', 'ミューチュアリー エクスクルーシブ', '互いに排反（同時には起こらない）'],
            ['contingency table', 'コンティンジェンシー テーブル', '分割表（2つの分け方で数えた表）'],
            ['at random', 'アット ランダム', '無作為に'],
            ['given that', 'ギヴン ザット', '〜だと分かっているとき（その中での確率を聞く）'],
            ['with / without replacement', 'ウィズ／ウィズアウト リプレイスメント', '取り出した物を戻して／戻さずに']
          ]
        }
      ],
      quiz: [
        { q: 'A box contains 40 components, of which 6 are defective. One component is selected at random. What is the probability that it is NOT defective? (Give your answer as a decimal.)', type: 'number', answer: 0.85, unit: '', explain: '不良品の確率は 6 ÷ 40 ＝ 0.15。不良品でない確率は 1 − 0.15 ＝ 0.85（34 ÷ 40 でも同じ）。0.15 と答えるのは、聞かれていない側の確率。' },
        { q: 'The probability that Machine A breaks down in a week is 0.1 and the probability that Machine B breaks down in a week is 0.3. Breakdowns of the two machines are independent. What is the probability that both machines break down in the same week?', choices: ['0.40', '0.37', '0.03', '0.63'], answer: 2, explain: '両方故障は、独立なので掛け算: 0.1 × 0.3 ＝ 0.03。0.40 は足し算をしてしまった答え。0.37 は「少なくとも1台」（1 − 0.9 × 0.7）、0.63 は「どちらも故障しない」（0.9 × 0.7）の確率。' },
        { q: 'レッスンの分割表（客200人。新規客: 買った20人・買わなかった60人、リピーター: 買った60人・買わなかった60人）を使う。リピーターの中から1人を無作為に選んだとき（given that the customer is a repeat customer）、買わなかった人である確率は？', choices: ['0.30', '0.60', '0.36', '0.50'], answer: 3, explain: '「リピーターの中から」なので分母はリピーターの 120人。そのうち買わなかったのは 60人で、60 ÷ 120 ＝ 0.50。0.30 は分母を全体の 200人にした答え（「リピーターで、かつ買わなかった」同時確率）。0.60 はリピーター全体（120 ÷ 200）。0.36 は 0.6 × 0.6 と掛けた答えで、独立でないデータには使えない。' },
        { q: 'A batch of 20 invoices contains 4 invoices with errors. Two invoices are selected at random without replacement. What is the probability that both invoices contain errors? (Give your answer to 2 decimal places.)', type: 'number', answer: 0.03, unit: '', explain: '1枚目に誤りあり: 4 ÷ 20。戻さないので、2枚目は残り19枚のうち誤りあり3枚: 3 ÷ 19。4/20 × 3/19 ＝ 12/380 ＝ 0.0316 で、小数第2位まで 0.03。0.04 は 4/20 × 4/20 と計算した答えで、戻す場合の確率（分子と分母を減らし忘れている）。' },
        { q: '機械P と機械Q が1か月に故障する確率は、P が 0.2、Q が 0.25 で、互いに独立。1か月の間に少なくとも1台が故障する確率は？（小数で答える）', type: 'number', answer: 0.4, unit: '', explain: 'どちらも故障しない確率は 0.8 × 0.75 ＝ 0.6。少なくとも1台 ＝ 1 − 0.6 ＝ 0.4。0.2 ＋ 0.25 − 0.05（両方故障 0.2 × 0.25）でも 0.4 になる。0.45 は重なりの 0.05 を引き忘れた答え。' },
        { q: '70% of a company\'s employees work at head office and 30% work in branches. 20% of head office employees and 40% of branch employees hold a professional qualification. One employee is selected at random. What is the probability that the employee works in a branch and holds a professional qualification?', choices: ['0.12', '0.40', '0.26', '0.06'], answer: 0, explain: '支店勤務 0.3 ×「支店勤務の中で資格あり」0.4 ＝ 0.12。2つ目の 0.4 は「支店勤務の中で」の確率なので、そのまま掛けてよい（独立でないときの同時確率）。0.40 は支店勤務の中での確率で、同時確率ではない。0.26 は資格ありの人全体（0.7 × 0.2 ＋ 0.3 × 0.4 ＝ 0.14 ＋ 0.12）。0.06 は支店勤務 0.3 に本社勤務の 0.2 を掛けた取り違え。' }
      ]
    },
    {
      id: 'M075',
      no: 75,
      title: '確率を使って決める（期待値）',
      goal: '期待値を計算して案を比べ、期待値で決めるときの限界を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(e)'],
      slides: [
        {
          title: '縁日のくじ',
          paras: ['縁日のくじは1回100円。10回に1回の割合で500円の景品が当たり、残りははずれ。何回も引くと、1回あたり平均いくら分の景品がもらえる？', '500円 × 0.1 ＋ 0円 × 0.9 ＝ 50円。100円払って平均50円分しか戻らないので、何回も引くほど損をする。この「1回あたりの平均」が期待値（expected value）。']
        },
        {
          title: '期待値（expected value）の計算',
          paras: ['起こりうる結果のそれぞれに確率を掛けて、全部足す。確率の合計は必ず1になる。'],
          formula: 'EV ＝ Σpx（結果 x × その確率 p を全部足す）',
          after: 'Σ（シグマ）は「全部足す」という記号。期待値は「同じことを何回もくり返したときの1回あたりの平均」を表す。'
        },
        {
          title: 'パン屋の1日の需要',
          paras: ['パン屋が過去の記録から、1日に売れる数とその確率を見積もった。'],
          table: { caption: '1日の需要（demand）', head: ['売れる数（個）', '確率', '数 × 確率'], rows: [['100', '0.2', '20'], ['150', '0.5', '75'], ['200', '0.3', '60']], total: ['合計', '1.0', '155'] },
          after: '需要の期待値は1日155個。155個ちょうど売れる日はないが、長い目で見た1日の平均は155個になる。'
        },
        {
          title: '例題: どちらの販促をするか',
          example: {
            problem: '会社が2つの販売促進を比べている。A: 利益 $50,000（確率 0.3）、$30,000（0.5）、損失 $10,000（0.2）。B: 利益 $36,000（0.6）、$15,000（0.4）。期待値で選ぶとどちら？',
            steps: ['A: 50,000 × 0.3 ＝ 15,000', 'A: 30,000 × 0.5 ＝ 15,000', 'A: 損失はマイナスで入れる。−10,000 × 0.2 ＝ −2,000', 'A の期待値: 15,000 ＋ 15,000 − 2,000 ＝ $28,000', 'B: 36,000 × 0.6 ＝ 21,600、15,000 × 0.4 ＝ 6,000。期待値 $27,600', '利益の期待値が大きい A を選ぶ'],
            answer: 'A（期待値 $28,000 ＞ B の $27,600）'
          }
        },
        {
          title: '例題: 2つの見積もりを組み合わせる',
          example: {
            problem: '新製品の販売数は 10,000個（確率 0.6）か 6,000個（0.4）。1個あたり貢献利益は $5（0.7）か $4（0.3）。2つは独立。固定費は $35,000。貢献利益の期待値と、損失が出る確率は？',
            steps: ['組み合わせごとに同時確率を出す（独立なので掛け算）', '10,000個 × $5 ＝ $50,000。確率 0.6 × 0.7 ＝ 0.42', '10,000個 × $4 ＝ $40,000。確率 0.6 × 0.3 ＝ 0.18', '6,000個 × $5 ＝ $30,000。確率 0.4 × 0.7 ＝ 0.28', '6,000個 × $4 ＝ $24,000。確率 0.4 × 0.3 ＝ 0.12', '期待値: 21,000 ＋ 7,200 ＋ 8,400 ＋ 2,880 ＝ $39,480', '損失は貢献利益が固定費 $35,000 より小さいとき（$30,000 と $24,000）。0.28 ＋ 0.12 ＝ 0.40'],
            answer: '貢献利益の期待値 $39,480（利益の期待値は $4,480）。損失が出る確率は 0.40'
          }
        },
        {
          title: 'なぜ？ 期待値で決める理由',
          paras: ['将来は1つに決まらない。いちばん起こりやすい結果だけを見ると、まれでも大きな損失や利益を見落とす。期待値は、すべての結果を起こりやすさで重み付けして1つの数にまとめるので、案どうしを同じものさしで比べられる。', '同じ種類の判断を何度もくり返す（毎日の仕入れ量など）なら、結果の平均は期待値に近づく。だから利益なら期待値が最も大きい案、費用なら最も小さい案を選ぶのが合理的になる。']
        },
        {
          title: '期待値の限界',
          list: ['期待値は平均なので、実際に起こる結果とは限らない（A の $28,000 は実際には起こらない）', '1回きりの判断では、平均どおりにならない', 'ばらつき（リスク）を見ない。A には損失の可能性があるが、期待値には表れない', '確率は見積もりなので、外れることがある'],
          after: 'リスクを避けたい（risk averse）経営者は、期待値が少し小さくても、損失の可能性がない B を選ぶことがある。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '損失をプラスのまま足す（A の期待値を $32,000 にしてしまう）。確率の合計が1になっているか確かめない。期待値を「いちばん起こりやすい結果」と取り違える（いちばん起こりやすいのは確率が最大の結果で、期待値とは別）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期待値 ＝ Σ（結果 × 確率）。損失はマイナスで入れ、確率の合計が1か確かめる', '利益なら期待値が最大、費用なら最小の案を選ぶ', '期待値は長い目で見た平均。1回きりの判断の結果や、リスクの大きさは表さない']
        },
        {
          title: '英単語',
          words: [
            ['expected value (EV)', 'エクスペクテッド ヴァリュー', '期待値（結果 × 確率の合計）'],
            ['outcome', 'アウトカム', '結果'],
            ['risk', 'リスク', '結果のばらつき（不確実さ）'],
            ['risk averse', 'リスク アヴァース', 'リスクを避けたがる'],
            ['demand', 'ディマンド', '需要（売れる数）'],
            ['long-run average', '', '長い目で見た平均']
          ]
        }
      ],
      quiz: [
        { q: 'The daily sales of a company are expected to be 200 units with a probability of 0.25, 300 units with a probability of 0.45 and 400 units with a probability of 0.30. What is the expected daily sales volume in units?', type: 'number', answer: 305, unit: '', explain: '200 × 0.25 ＝ 50、300 × 0.45 ＝ 135、400 × 0.30 ＝ 120。合計 305個。いちばん起こりやすい 300個（確率 0.45）は期待値ではない。' },
        { q: 'Which of the following is a limitation of using expected values for decision making?', choices: ['Expected values cannot be used when there are more than two possible outcomes', 'Expected values can only be calculated for costs and not for revenues', 'The expected value may not be a possible outcome and it ignores the spread of outcomes', 'The expected value is always the most likely outcome, so rare outcomes are lost'], answer: 2, explain: '期待値は平均なので実際には起こらない値になることがあり、ばらつき（リスク）も表さない。結果が3つ以上でも計算できる（パン屋の例）。費用にも収入にも使える。期待値は「いちばん起こりやすい結果」ではない。' },
        { q: 'あるプロジェクトの利益は、$80,000（確率 0.25）、$20,000（確率 0.5）、損失 $40,000（確率 0.25）のどれかになる。利益の期待値はいくら？', type: 'number', answer: 20000, unit: '$', explain: '80,000 × 0.25 ＝ 20,000、20,000 × 0.5 ＝ 10,000、−40,000 × 0.25 ＝ −10,000。合計 $20,000。損失をプラスで足すと $40,000 になってしまう。' },
        { q: '案P は利益 $60,000 か $0（確率は 0.5 ずつ）で期待値 $30,000。案Q は利益 $34,000（0.8）か $10,000（0.2）で期待値 $29,200。リスクを避けたい経営者が Q を選ぶ理由として正しいのは？', choices: ['Q の期待値のほうが P より大きいから', 'Q は最悪でも $10,000 の利益が出て、結果のばらつきが小さいから','P は確率の合計が1にならず、期待値が使えないから', '1回きりの判断なら、Q の結果は必ず P より大きくなるから'], answer: 1, explain: '期待値は P が大きいが、P は半分の確率で利益 $0 になる。Q は最悪でも $10,000 で、ばらつきが小さい。リスクを避けたい人はこれを重く見る。Q の期待値は P より小さい。P の確率は 0.5 ＋ 0.5 ＝ 1。1回きりなら P が $60,000 になることもあり、Q が必ず大きいわけではない。' },
        { q: 'Demand next month will be either 1,000 units (probability 0.6) or 1,500 units (probability 0.4). Contribution per unit will be either $8 (probability 0.5) or $10 (probability 0.5), independently of demand. What is the expected total contribution?', type: 'number', answer: 10800, unit: '$', explain: '組み合わせで計算: 1,000 × $8 × 0.3 ＝ 2,400、1,000 × $10 × 0.3 ＝ 3,000、1,500 × $8 × 0.2 ＝ 2,400、1,500 × $10 × 0.2 ＝ 3,000。合計 $10,800。独立なので、期待数量 1,200個 × 期待貢献利益 $9 ＝ $10,800 でも同じ。' }
      ]
    },
    {
      id: 'M076',
      no: 76,
      title: '正規分布の性質',
      goal: '正規分布の形と性質を説明し、平均から標準偏差いくつ分の範囲に何%入るかを言えるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(f)'],
      slides: [
        {
          title: 'コンビニのおにぎりの重さ',
          paras: ['おにぎり工場は1個 110g を目標に作る。実際は 109g や 111g が多く、105g や 115g はたまにしかない。100g のような極端なものは、ほとんど出ない。', '1万個の重さを測ってグラフにすると、110g を頂上にした、左右対称のつりがねの形になる。この形を正規分布（normal distribution）という。']
        },
        {
          title: 'ペットボトルの充てん量',
          paras: ['飲料工場は 500ml のボトルに飲み物を詰める。機械のぶれで、充てん量は平均（mean）500ml、標準偏差（standard deviation）4ml の正規分布になる。標準偏差は、前に学んだ「ばらつきの大きさ」。'],
          svg: `<svg viewBox="0 0 440 264" role="img" aria-label="正規分布のつりがね型の曲線。平均を中心に左右対称で、平均プラスマイナス1標準偏差の範囲に約68パーセント、2標準偏差に約95パーセント、3標準偏差に約99.7パーセントが入る" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">平均 ± 何σ に何%入るか</text><path d="M160 200 L160 115.1 L170 101.1 L180 87.9 L190 76.5 L200 67.6 L210 61.9 L220 60.0 L230 61.9 L240 67.6 L250 76.5 L260 87.9 L270 101.1 L280 115.1 L280 200 Z" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M30 199.1 L40 198.4 L50 197.5 L60 196.0 L70 193.8 L80 190.8 L90 186.6 L100 181.1 L110 173.9 L120 165.1 L130 154.5 L140 142.4 L150 129.1 L160 115.1 L170 101.1 L180 87.9 L190 76.5 L200 67.6 L210 61.9 L220 60.0 L230 61.9 L240 67.6 L250 76.5 L260 87.9 L270 101.1 L280 115.1 L290 129.1 L300 142.4 L310 154.5 L320 165.1 L330 173.9 L340 181.1 L350 186.6 L360 190.8 L370 193.8 L380 196.0 L390 197.5 L400 198.4 L410 199.1" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="20" y1="200" x2="420" y2="200" stroke="var(--edge)" stroke-width="1.25"/><line x1="40" y1="200" x2="40" y2="207" stroke="var(--edge)" stroke-width="1.25"/><line x1="100" y1="200" x2="100" y2="207" stroke="var(--edge)" stroke-width="1.25"/><line x1="340" y1="200" x2="340" y2="207" stroke="var(--edge)" stroke-width="1.25"/><line x1="400" y1="200" x2="400" y2="207" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="170" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">約68%</text><text x="40" y="224" text-anchor="middle" fill="var(--ink)">−3σ</text><text x="100" y="224" text-anchor="middle" fill="var(--ink)">−2σ</text><text x="160" y="224" text-anchor="middle" fill="var(--ink)">−1σ</text><text x="220" y="224" text-anchor="middle" fill="var(--ink)">平均</text><text x="280" y="224" text-anchor="middle" fill="var(--ink)">+1σ</text><text x="340" y="224" text-anchor="middle" fill="var(--ink)">+2σ</text><text x="400" y="224" text-anchor="middle" fill="var(--ink)">+3σ</text><text x="220" y="252" text-anchor="middle" fill="var(--ink)">±1σ 約68%　±2σ 約95%　±3σ 約99.7%</text></svg>`,
          caption: '山の真ん中が平均。塗った部分（平均 ± 1σ）に全体の約68%が入る。σ（シグマ）は標準偏差の記号。'
        },
        {
          title: '正規分布の性質',
          list: ['平均を中心に左右対称（symmetrical）で、つりがね型（bell-shaped）', '平均・中央値（median）・最頻値（mode）が等しい', '曲線の下の面積の合計は1（100%）。平均の左右に 0.5 ずつ', '形は平均と標準偏差の2つで決まる。標準偏差が大きいほど、山は低く横に広がる', '両端はどこまでも続き、横軸に近づくが触れない', '重さ・長さ・時間などの連続データ（continuous data）に使う']
        },
        {
          title: '平均から何σ以内に何%入るか',
          table: { caption: '正規分布で決まっている割合', head: ['範囲', '入る割合'], rows: [['平均 ± 1σ', '約68%（68.26%）'], ['平均 ± 1.96σ', '95%'], ['平均 ± 2σ', '約95%（95.44%）'], ['平均 ± 3σ', '約99.7%']] },
          after: 'どんな平均・標準偏差の正規分布でも、この割合は同じ。曲線の下の面積が、その範囲に入る割合（＝確率）になる。'
        },
        {
          title: '例題: ボトルで確かめる',
          example: {
            problem: '充てん量は平均 500ml、標準偏差 4ml の正規分布。(1) 496〜504ml、(2) 492〜508ml に入るボトルはおよそ何%？ (3) 500ml 未満のボトルは何%？',
            steps: ['(1) 496 ＝ 500 − 4、504 ＝ 500 ＋ 4。平均 ± 1σ なので約68%', '(2) 492 ＝ 500 − 8、508 ＝ 500 ＋ 8。8ml は 4ml の2倍なので平均 ± 2σ。約95%', '(3) 左右対称なので、平均より下は全体のちょうど半分。50%'],
            answer: '(1) 約68%　(2) 約95%　(3) 50%'
          }
        },
        {
          title: 'なぜ？ 自然につりがね型になる',
          paras: ['充てん量には、機械の振動、温度、ノズルの小さな詰まりなど、たくさんの小さな要因が少しずつ影響する。プラスとマイナスの影響は打ち消し合うことが多く、全部が同じ向きにそろうのはまれ。だから平均の近くに集まり、極端な値は少なくなる。', '正規分布に従うと分かれば、平均と標準偏差の2つだけで「〜以上になる確率」などを計算できる。品質管理や、売上・原価の見積もりのリスクを考えるときに使う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '曲線の高さを確率だと思う。確率は範囲の面積で表す。また、± 2σ はちょうど95%ではなく約95.44%。ちょうど95%は ± 1.96σ。どんなデータも正規分布になるわけではなく、片側に偏ったデータ（例: 所得）には当てはまらない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['左右対称のつりがね型。平均 ＝ 中央値 ＝ 最頻値', '曲線の下の面積は全部で1。平均の左右に 0.5 ずつ', '平均 ± 1σ に約68%、± 2σ に約95%、± 3σ に約99.7% が入る']
        },
        {
          title: '英単語',
          words: [
            ['normal distribution', 'ノーマル ディストリビューション', '正規分布'],
            ['bell-shaped', 'ベル シェイプト', 'つりがね型'],
            ['symmetrical', 'シメトリカル', '左右対称'],
            ['standard deviation', 'スタンダード ディヴィエーション', '標準偏差（σ）'],
            ['area under the curve', '', '曲線の下の面積（＝確率）'],
            ['continuous data', 'コンティニュアス データ', '連続データ（重さ・時間など）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a property of the normal distribution?', choices: ['It is symmetrical about the mean', 'The total area under the curve is equal to 1', 'Its shape is determined by the mean and the standard deviation', 'The mean is always greater than the median'], answer: 3, explain: '正規分布は左右対称なので、平均と中央値（と最頻値）は等しい。平均が中央値より大きくなるのは、右に長く偏った分布。残りの3つはどれも正規分布の性質。' },
        { q: 'The weight of bags of flour is normally distributed with a mean of 1,000 g and a standard deviation of 10 g. Approximately what percentage of bags weigh between 980 g and 1,020 g?', choices: ['68%', '95%', '99.7%', '50%'], answer: 1, explain: '980g と 1,020g は、平均から 20g ＝ 2σ 離れている。平均 ± 2σ なので約95%（95.44%）。68% は ± 1σ（990〜1,010g）、99.7% は ± 3σ（970〜1,030g）の割合。' },
        { q: '正規分布で、値が平均より大きくなる確率は何%？', type: 'number', answer: 50, unit: '%', explain: '正規分布は平均を中心に左右対称で、面積の合計は1。平均より上と下に 0.5 ずつなので 50%。' },
        { q: '2つの正規分布は平均が同じで、標準偏差だけが違う。標準偏差が大きいほうの曲線は？', choices: ['山が高く、細くなる', '山の中心が右にずれる', '山が低く、横に広がる', '左右が非対称になる'], answer: 2, explain: '標準偏差はばらつきの大きさ。ばらつきが大きいと値が広く散らばるので、山は低く横に広がる（面積はどちらも1）。中心の位置は平均で決まるので、ずれない。正規分布はいつも左右対称。' },
        { q: '正規分布で、ある範囲に値が入る確率を表しているのはどれ？', choices: ['その範囲の、曲線の下の面積', 'その範囲の、曲線の高さ', 'その範囲の、横軸の幅', 'その範囲の、平均からの距離'], answer: 0, explain: '確率は曲線の下の面積で表す（全体で1）。高さは「その値の近くにどれだけ集まっているか」の目安で、確率そのものではない。幅や平均からの距離だけでは、山の形（ばらつき）が分からない。' }
      ]
    },
    {
      id: 'M077',
      no: 77,
      title: '正規分布表を読む',
      goal: 'z を計算し、正規分布表から「〜より大きい」「〜の間」などの確率を求められるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(g)'],
      slides: [
        {
          title: '偏差値は「σ何個分」',
          paras: ['模試の偏差値60は、平均点より標準偏差1個分だけ上という意味。偏差値70なら2個分上。点数そのものではなく、「平均から標準偏差何個分離れているか」で位置を表している。', '偏差値60以上の人は、受験者の約16%。この16%を出すのに使うのが、正規分布表（normal distribution table）。']
        },
        {
          title: 'z（標準偏差何個分か）を出す',
          formula: 'z ＝（x − 平均）÷ 標準偏差',
          paras: ['x を z に直すことを標準化（standardisation）という。z ＝ 1.5 なら、平均より標準偏差1.5個分上。x が平均より小さいと、z はマイナスになる。']
        },
        {
          title: '表は「平均から z まで」の面積',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="正規分布の曲線で、平均からzまでの部分が塗られ、表の値と書かれている。右側のはみ出した部分は0.5から表の値を引いた面積。左半分は0.5" font-size="14"><text x="20" y="26" font-size="15" font-weight="600" fill="var(--ink)">平均から z までの面積 ＝ 表の値</text><path d="M220 200 L220 60.0 L230 61.9 L240 67.6 L250 76.5 L260 87.9 L270 101.1 L280 115.1 L290 129.1 L300 142.4 L310 154.5 L310 200 Z" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M30 199.1 L40 198.4 L50 197.5 L60 196.0 L70 193.8 L80 190.8 L90 186.6 L100 181.1 L110 173.9 L120 165.1 L130 154.5 L140 142.4 L150 129.1 L160 115.1 L170 101.1 L180 87.9 L190 76.5 L200 67.6 L210 61.9 L220 60.0 L230 61.9 L240 67.6 L250 76.5 L260 87.9 L270 101.1 L280 115.1 L290 129.1 L300 142.4 L310 154.5 L320 165.1 L330 173.9 L340 181.1 L350 186.6 L360 190.8 L370 193.8 L380 196.0 L390 197.5 L400 198.4 L410 199.1" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="20" y1="200" x2="420" y2="200" stroke="var(--edge)" stroke-width="1.25"/><text x="264" y="160" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">表の値</text><text x="165" y="188" text-anchor="middle" fill="var(--ink)">左半分 0.5</text><text x="330" y="136" fill="var(--ink)">0.5 − 表の値</text><line x1="352" y1="142" x2="352" y2="194"stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="222" text-anchor="middle" fill="var(--ink)">平均</text><text x="310" y="222" text-anchor="middle" fill="var(--ink)">x（z ＝ 1.5）</text></svg>`,
          caption: 'ACCA 形式の表は、平均から z までの面積（塗った部分）を示す。x より右のはみ出し部分は 0.5 − 表の値。'
        },
        {
          title: '正規分布表の抜粋',
          paras: ['実際の表は、行が z の小数第1位まで、列が小数第2位。z ＝ 1.25 なら「1.2 の行」と「0.05 の列」が交わるマスを読む。'],
          table: { caption: '平均から z までの面積', head: ['z', '面積'], rows: [['0.50', '0.1915'], ['1.00', '0.3413'], ['1.25', '0.3944'], ['1.50', '0.4332'], ['1.96', '0.4750'], ['2.00', '0.4772'], ['2.50', '0.4938']] }
        },
        {
          title: '4つの読み方',
          list: ['x より大きい（x が平均より上）: 0.5 − 表の値', 'x より小さい（x が平均より上）: 0.5 ＋ 表の値', '平均をはさむ2点の間: 2つの表の値を足す', '平均の同じ側にある2点の間: 大きい表の値 − 小さい表の値'],
          after: 'z がマイナスのときは、左右対称なのでプラスと同じ表の値を使う。迷ったら、山の絵を描いて塗る場所を確かめる。逆に確率から x を求めるときは、表の中から面積を探して z を読み、x ＝ 平均 ＋ z × 標準偏差 とする。'
        },
        {
          title: '例題: 1日の販売数',
          example: {
            problem: '1日の販売数は平均 1,000個、標準偏差 200個の正規分布。1日に 1,300個より多く売れる確率は？',
            steps: ['z ＝（1,300 − 1,000）÷ 200 ＝ 1.5', '表で z ＝ 1.50 を読むと 0.4332（平均から 1,300個までの面積）', '1,300個より上は、右半分の 0.5 から 0.4332 を引いた残り', '0.5 − 0.4332 ＝ 0.0668'],
            answer: '0.0668（約6.7%）'
          }
        },
        {
          title: '例題: 2つの値の間',
          example: {
            problem: '同じ販売数（平均 1,000個、標準偏差 200個）。(1) 900〜1,300個、(2) 1,100〜1,300個 になる確率は？',
            steps: ['900個: z ＝（900 − 1,000）÷ 200 ＝ −0.5。表の値は 0.1915', '1,100個: z ＝ 0.5。表の値は 0.1915', '1,300個: z ＝ 1.5。表の値は 0.4332', '(1) 900 と 1,300 は平均をはさむので足す: 0.1915 ＋ 0.4332 ＝ 0.6247', '(2) 1,100 と 1,300 は平均の同じ側なので引く: 0.4332 − 0.1915 ＝ 0.2417'],
            answer: '(1) 0.6247　(2) 0.2417'
          }
        },
        {
          title: 'なぜ？ 表が1枚で足りる',
          paras: ['販売数（平均 1,000、σ 200）も、ボトル（平均 500ml、σ 4ml）も、z に直すと平均0・標準偏差1の同じ正規分布（標準正規分布、standard normal distribution）になる。だから、どんな正規分布も1枚の表で確率が読める。', '表が「平均から」の面積だけを載せているのは、左右対称だから。片側だけ載せれば、反対側は同じ値を使える。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '表の値をそのまま答えにする（1,300個より多い確率を 0.4332 と答える）。z を出すときに、標準偏差ではなく分散（variance）で割る。平均をはさむ2点なのに引き算をする。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['z ＝（x − 平均）÷ 標準偏差', '表の値は「平均から z まで」の面積。平均の片側は全部で 0.5', 'はみ出し部分は 0.5 − 表、平均をはさむ2点は足す、同じ側の2点は引く']
        },
        {
          title: '英単語',
          words: [
            ['z score', 'ゼット スコア', 'z（平均から標準偏差何個分か）'],
            ['normal distribution table', '', '正規分布表'],
            ['standard normal distribution', '', '標準正規分布（平均0・標準偏差1）'],
            ['mean', 'ミーン', '平均'],
            ['variance', 'ヴァリアンス', '分散（標準偏差の2乗）'],
            ['standardisation', 'スタンダーダイゼーション', '標準化（x を z に直すこと）']
          ]
        }
      ],
      quiz: [
        { q: 'The time taken to complete a task is normally distributed with a mean of 50 minutes and a standard deviation of 8 minutes. From normal distribution tables, the area between the mean and z = 1.25 is 0.3944. What is the probability that a task takes more than 60 minutes? (Give your answer to 4 decimal places.)', type: 'number', answer: 0.1056, unit: '', explain: 'z ＝（60 − 50）÷ 8 ＝ 1.25。表の値 0.3944 は平均から60分までの面積。60分より長いのは右のはみ出し部分なので 0.5 − 0.3944 ＝ 0.1056。0.3944 をそのまま答えるのは、表の値を答えにする間違い。' },
        { q: 'Monthly sales are normally distributed with a mean of $40,000 and a standard deviation of $5,000. What is the probability that sales in a month are between $35,000 and $47,500? (Area between the mean and z: z = 1.00 is 0.3413; z = 1.50 is 0.4332)', choices: ['0.0919', '0.4332', '0.7745', '0.2255'], answer: 2, explain: '$35,000 は z ＝ −1.00（表 0.3413）、$47,500 は z ＝ 1.50（表 0.4332）。平均をはさむので足す: 0.3413 ＋ 0.4332 ＝ 0.7745。0.0919 は引き算をした答え（同じ側の2点のやり方）。0.4332 は片側だけ。0.2255 は範囲の外側（1 − 0.7745）。' },
        { q: '1日の販売数は平均 1,000個、標準偏差 200個の正規分布（z ＝ 0.50 の表の値は 0.1915）。1日の販売数が 1,100個より少ない確率は？（小数第4位まで）', type: 'number', answer: 0.6915, unit: '', explain: 'z ＝（1,100 − 1,000）÷ 200 ＝ 0.5。1,100個より少ないのは、左半分 0.5 と、平均から 1,100個までの 0.1915 を合わせた部分。0.5 ＋ 0.1915 ＝ 0.6915。0.3085（0.5 − 0.1915）は「1,100個より多い」確率。' },
        { q: '平均 1,000、分散（variance）40,000 の正規分布で、x ＝ 1,400 の z はいくつ？', choices: ['0.01', '2.00', '7.00', '20.00'], answer: 1, explain: '標準偏差は分散の平方根なので √40,000 ＝ 200。z ＝（1,400 − 1,000）÷ 200 ＝ 2.00。0.01 は分散 40,000 で割った答え。7.00 は平均を引き忘れた答え（1,400 ÷ 200）。20.00 は √40,000 を 20 と誤った答え（400 ÷ 20）。' },
        { q: 'For a given value of z, what area does an ACCA-style normal distribution table show?', choices: ['The area under the curve to the right of z', 'The area under the curve to the left of z', 'The area under the curve between -z and +z', 'The area under the curve between the mean and z'], answer: 3, explain: 'ACCA 形式の表は「平均から z まで」の面積を示す。右側のはみ出しは 0.5 − 表の値、左側全部は 0.5 ＋ 表の値、−z から +z までは表の値の2倍で、どれも表から計算して出す。' },
        { q: 'Daily demand is normally distributed with a mean of 1,000 units and a standard deviation of 200 units. From normal distribution tables, the area between the mean and z = 1.50 is 0.4332. What level of daily demand will be exceeded with a probability of 0.0668? (in units)', type: 'number', answer: 1300, unit: '', explain: '逆向きに解く。x より上が 0.0668 なので、平均から x までの面積は 0.5 − 0.0668 ＝ 0.4332。表でこの面積は z ＝ 1.50。x ＝ 1,000 ＋ 1.5 × 200 ＝ 1,300個。平均より上側なので z はプラス。1,000 − 300 ＝ 700個は反対側（700個より少ない確率が 0.0668）。' }
      ]
    },
    {
      id: 'M078',
      no: 78,
      title: '比べる基準: 前期・前年同期・予算',
      goal: '比べる目的を説明し、前期・前年同期・予算から目的に合う基準を選んで増減率を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(h)'],
      slides: [
        {
          title: '体重70kgは多い？少ない？',
          paras: ['今朝の体重は 70kg。これだけでは、良いのか悪いのか分からない。', '先月が 72kg なら「減った」。去年の同じ時期が 68kg なら「増えた」。目標が 69kg なら「あと1kg」。同じ 70kg でも、何と比べるかで評価が変わる。']
        },
        {
          title: '比べる目的',
          paras: ['管理会計の数字も、1つだけでは意味が分からない。比べる（comparison）ことで、はじめて良い・悪いが分かる。'],
          list: ['数字に意味を持たせる（多いのか少ないのか）', '傾向（trend）をつかむ（伸びているのか、落ちているのか）', '計画どおりか確かめ、ずれていれば原因を調べて手を打つ（管理、control）', '部門や責任者の業績を評価する（performance evaluation）']
        },
        {
          title: '3つの基準',
          table: { caption: '比べる基準（basis of comparison）', head: ['基準', '長所', '短所'], rows: [['前期（previous period）: 先月・前の四半期', 'いちばん新しく、直近の変化がすぐ分かる', '季節の影響が混ざる'], ['前年同期（corresponding period）: 去年の同じ月', '季節の影響を取り除ける', '1年前で古い。その間の物価や店の数の変化が混ざる'], ['予算・予測（budget / forecast）', '計画・目標を達成できたか分かる', '予算が非現実的だと、比べても意味がない']] }
        },
        {
          title: 'アイス会社の7月の売上',
          paras: ['アイスクリーム会社の今年7月の売上は $55,000。今年6月は $44,000、去年の7月は $50,000、7月の予算は $58,000 だった。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="棒グラフ。今年6月44,000ドル、去年7月50,000ドル、今年7月55,000ドル、7月予算58,000ドル。今年7月は6月より25パーセント多く、去年7月より10パーセント多く、予算より5.2パーセント少ない" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">今年7月の売上を3つの基準と比べる</text><rect x="38" y="108.6" width="64" height="121.4" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="138" y="92.1" width="64" height="137.9" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="238" y="78.3" width="64" height="151.7" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="338" y="70" width="64" height="160" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="20" y1="230" x2="420" y2="230" stroke="var(--edge)" stroke-width="1.25"/><text x="70" y="100" text-anchor="middle" fill="var(--ink)">$44,000</text><text x="170" y="84" text-anchor="middle" fill="var(--ink)">$50,000</text><text x="270" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">$55,000</text><text x="370" y="62" text-anchor="middle" fill="var(--ink)">$58,000</text><text x="70" y="252" text-anchor="middle" fill="var(--ink)">今年6月</text><text x="170" y="252" text-anchor="middle" fill="var(--ink)">去年7月</text><text x="270" y="252" text-anchor="middle" font-weight="600" fill="var(--ink)">今年7月</text><text x="370" y="252" text-anchor="middle" fill="var(--ink)">7月予算</text><text x="70" y="276" text-anchor="middle" fill="var(--quiet)">+25%</text><text x="170" y="276" text-anchor="middle" fill="var(--quiet)">+10%</text><text x="270" y="276" text-anchor="middle" fill="var(--quiet)">（今月）</text><text x="370" y="276" text-anchor="middle" fill="var(--quiet)">−5.2%</text></svg>`,
          caption: '下の%は、今年7月の売上がその基準より何%多いか（少ないか）。'
        },
        {
          title: '例題: 3つの基準で比べる',
          formula: '増減率 ＝（今期 − 基準）÷ 基準 × 100',
          example: {
            problem: '今年7月の売上 $55,000 を、前期（6月 $44,000）、前年同期（去年7月 $50,000）、予算（$58,000）と比べて、増減額と増減率を出す。',
            steps: ['前期: 55,000 − 44,000 ＝ ＋11,000。11,000 ÷ 44,000 × 100 ＝ ＋25%', '前年同期: 55,000 − 50,000 ＝ ＋5,000。5,000 ÷ 50,000 × 100 ＝ ＋10%', '予算: 55,000 − 58,000 ＝ −3,000。3,000 ÷ 58,000 × 100 ＝ 約 −5.2%', '売上が予算より少ないので、不利な差（adverse）'],
            answer: '前期比 ＋25%、前年同期比 ＋10%、予算比 約 −5.2%（$3,000 不利）'
          }
        },
        {
          title: '結果を読む',
          paras: ['6月比の ＋25% は、大部分が夏という季節の影響で、実力の伸びとは言えない。季節の影響を除いた前年同期比の ＋10% が、本当の伸びに近い。', 'ただし予算には $3,000 届いていない。予算を立てたときの見込みと何が違ったのか（天候、値下げ、新商品の遅れなど）を調べる必要がある。']
        },
        {
          title: '基準の選び方',
          list: ['季節で売上が大きく動く事業の伸びを見たい → 前年同期', '計画・目標を達成したか、責任者を評価したい → 予算・予測', '機械の故障や急な需要の変化など、直近の異変を早く見つけたい → 前期'],
          after: 'どの基準でも、条件をそろえて比べる（like with like）。月によって営業日数が違う、物価が上がっている、といった違いがあれば、それを考えに入れる。'
        },
        {
          title: 'なぜ？ 基準は1つに決めない',
          paras: ['3つの基準は、それぞれ別の質問に答える。前期は「最近どうか」、前年同期は「季節を除いて伸びたか」、予算は「計画どおりか」。1つの基準だけでは、7月の例のように「好調（＋25%）」と「未達（−5.2%）」のどちらか一方しか見えない。', '管理会計の目的は、経営者が正しく手を打てるようにすること。目的に合った基準を選び、必要なら複数を並べて見る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '季節性のある事業で、前月と比べて「好調」と判断する。増減率の分母を今期にする（11,000 ÷ 55,000 ＝ 20% は誤り。分母は基準の 44,000）。売上が予算より少ないのに「有利」とする（売上は予算より少ないと不利、費用は予算より多いと不利）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['比べる目的: 数字に意味を持たせ、傾向をつかみ、計画どおりか確かめて手を打つ', '前期は新しいが季節が混ざる。前年同期は季節を除けるが古い。予算は計画の達成度が分かる', '増減率 ＝（今期 − 基準）÷ 基準 × 100。分母は基準']
        },
        {
          title: '英単語',
          words: [
            ['comparison', 'コンパリソン', '比較'],
            ['previous period data', '', '前期のデータ（直前の期間）'],
            ['corresponding period data', 'コレスポンディング ピリオド', '前年同期のデータ（前の年の同じ期間）'],
            ['budget', 'バジェット', '予算'],
            ['forecast', 'フォーキャスト', '予測（見込み）'],
            ['seasonal variation', 'シーズナル ヴァリエーション', '季節変動'],
            ['adverse / favourable', 'アドヴァース／フェイヴァラブル', '不利な差／有利な差']
          ]
        }
      ],
      quiz: [
        { q: 'The revenue of a hotel is highly seasonal. The manager wants to assess whether revenue for August this year shows underlying growth. Which basis of comparison is most appropriate?', choices: ['July this year (previous period data)', 'August last year (corresponding period data)', 'The annual budget divided by 12', 'The average revenue of the last three months'], answer: 1, explain: '季節の影響を除いて伸びを見るには、前年同期（去年の8月）と比べる。7月との比較は季節の影響が混ざる。年間予算を12で割ると、季節で売上が違う月を均してしまう。直近3か月の平均も季節が混ざる。' },
        { q: 'Sales for March this year were $72,000. Sales for March last year were $64,000. What is the percentage increase compared with the corresponding period?', type: 'number', answer: 12.5, unit: '%', explain: '（72,000 − 64,000）÷ 64,000 × 100 ＝ 12.5%。分母は基準（去年3月）の 64,000。今期の 72,000 で割ると約 11.1% になってしまう。' },
        { q: '実績を予算と比べる主な目的は？', choices: ['季節の影響を取り除いて、本当の伸びを見る', '直近の急な変化を、いちばん早く見つける', '計画・目標を達成できたかを確かめ、責任者の業績を評価する', '去年の実績が正しく計算されていたか確かめる'], answer: 2, explain: '予算は計画・目標なので、比べると達成度が分かり、責任者の評価や原因の調査につながる。季節の影響を除くのは前年同期との比較、直近の変化を見るのは前期との比較の役割。去年の数字の検証は比較の目的ではない。' },
        { q: '今月の売上は $46,000、今月の予算は $50,000。売上は予算を何%下回った？', type: 'number', answer: 8, unit: '%', explain: '（50,000 − 46,000）÷ 50,000 × 100 ＝ 8%。分母は基準の予算 50,000。今期の 46,000 で割ると約 8.7% になってしまう。売上が予算より少ないので不利な差。' },
        { q: 'Which of the following is a disadvantage of comparing results with the previous period?', choices: ['The data used is at least one year old', 'It removes the effect of seasonal variations', 'It depends on a budget that may be unrealistic', 'Seasonal variations may distort the comparison'], answer: 3, explain: '前期（先月など）と比べると、季節の影響が混ざる。1年前で古いのは前年同期の短所。季節の影響を除けるのは前年同期の長所。予算が非現実的だと困るのは予算との比較の短所。' }
      ]
    }
  ],
  cards: [
    { id: 'M074-1', lesson: 'M074', q: '単純確率（simple probability）の式は？', a: '起こる場合の数 ÷ 全部の場合の数（0〜1の数）' },
    { id: 'M074-2', lesson: 'M074', q: 'ある出来事が「起こらない」確率は？', a: '1 − 起こる確率' },
    { id: 'M074-3', lesson: 'M074', q: 'A と B が両方起こる確率（同時確率）は？', a: '独立なら P(A) × P(B)。独立でなければ P(A) ×「A の中で B が起こる確率」' },
    { id: 'M074-4', lesson: 'M074', q: '両方起こることもある「A または B」の確率は？', a: 'P(A) ＋ P(B) − P(A and B)（重なりを引く）' },
    { id: 'M074-5', lesson: 'M074', q: '分割表で「新規客の中から選んで買った人」の確率の分母は？', a: '新規客の人数（全体の人数ではない）' },
    { id: 'M074-6', lesson: 'M074', q: 'なぜ表のデータでは、確率を掛け算せずマスから数える？', a: '2つが独立とは限らず、掛けると実際の数と合わないことがあるから' },
    { id: 'M074-8', lesson: 'M074', q: '戻さずに（without replacement）続けて取り出すとき、2回目の確率はどう変わる？', a: '同じ種類を続けて取るなら、分子も分母も1ずつ減る（3/10 × 2/9）' },
    { id: 'M075-1', lesson: 'M075', q: '期待値（expected value）の式は？', a: 'Σ（結果 × 確率）。確率の合計は1' },
    { id: 'M075-2', lesson: 'M075', q: '期待値は何を表す？', a: '同じ判断を何回もくり返したときの、1回あたりの平均' },
    { id: 'M075-3', lesson: 'M075', q: '期待値で案を選ぶルールは？', a: '利益なら期待値が最大、費用なら最小の案を選ぶ' },
    { id: 'M075-4', lesson: 'M075', q: '期待値で決めるときの主な限界は？', a: '1回きりでは結果が平均にならない。リスク（ばらつき）を見ない' },
    { id: 'M075-5', lesson: 'M075', q: '期待値の計算で、損失はどう入れる？', a: 'マイナスの結果として入れる（損失 × 確率を引く）' },
    { id: 'M075-6', lesson: 'M075', q: '独立な数量と単価の見積もりから期待値を出すには？', a: '組み合わせごとに同時確率（掛け算）を出して、結果 × 確率を足す' },
    { id: 'M076-1', lesson: 'M076', q: '正規分布（normal distribution）の形は？', a: '平均を中心に左右対称のつりがね型。平均＝中央値＝最頻値' },
    { id: 'M076-2', lesson: 'M076', q: '正規分布の曲線の下の面積は？', a: '全部で1（100%）。平均の左右に 0.5 ずつ' },
    { id: 'M076-3', lesson: 'M076', q: '平均 ± 1σ、± 2σ、± 3σ に入る割合は？', a: '約68%、約95%、約99.7%' },
    { id: 'M076-4', lesson: 'M076', q: 'ちょうど95%が入る範囲は？', a: '平均 ± 1.96σ' },
    { id: 'M076-5', lesson: 'M076', q: '正規分布の形を決める2つの数字は？', a: '平均と標準偏差' },
    { id: 'M077-1', lesson: 'M077', q: 'z の式は？', a: '（x − 平均）÷ 標準偏差' },
    { id: 'M077-2', lesson: 'M077', q: 'ACCA 形式の正規分布表が示す面積は？', a: '平均から z までの面積' },
    { id: 'M077-3', lesson: 'M077', q: 'x（平均より上）より大きくなる確率は？', a: '0.5 − 表の値' },
    { id: 'M077-4', lesson: 'M077', q: '平均をはさむ2点の間の確率は？', a: '2つの表の値を足す' },
    { id: 'M077-5', lesson: 'M077', q: '平均の同じ側にある2点の間の確率は？', a: '大きい表の値 − 小さい表の値' },
    { id: 'M077-6', lesson: 'M077', q: 'z がマイナスのとき、表はどう読む？', a: '左右対称なので、プラスの z と同じ表の値を使う' },
    { id: 'M077-7', lesson: 'M077', q: '確率から x を逆に求めるには？', a: '表から面積を探して z を読み、x ＝ 平均 ＋ z × 標準偏差' },
    { id: 'M078-1', lesson: 'M078', q: '数字を比べる目的は？', a: '数字に意味を持たせ、傾向をつかみ、計画どおりか確かめて手を打つ' },
    { id: 'M078-2', lesson: 'M078', q: '前期（previous period）と比べるときの短所は？', a: '季節の影響が混ざる' },
    { id: 'M078-3', lesson: 'M078', q: '前年同期（corresponding period）比較の長所と短所は？', a: '季節の影響を除ける／1年前でデータが古い' },
    { id: 'M078-4', lesson: 'M078', q: '予算と比べると何が分かる？', a: '計画・目標の達成度。責任者の業績評価に使う' },
    { id: 'M078-5', lesson: 'M078', q: '増減率の式は？', a: '（今期 − 基準）÷ 基準 × 100。分母は基準' },
    { id: 'M078-6', lesson: 'M078', q: '季節で売上が大きく動く事業の伸びを見るのに合う基準は？', a: '前年同期（去年の同じ月）' }
  ]
});
