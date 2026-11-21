(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 114,
  part: 5,
  partTitle: '個別・総合・サービスの原価計算',
  lessons: [
    {
      id: 'M054',
      no: 54,
      title: '個別原価計算とバッチ原価計算: 特徴と使いどころ',
      goal: '個別原価計算とバッチ原価計算の特徴を説明し、どんな仕事に向いているかを見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(a)(i)', 'K2:B5(a)(ii)'],
      slides: [
        {
          title: 'オーダースーツと、パン屋の食パン',
          paras: ['仕立て屋のオーダースーツは、1着ずつ客の体と注文に合わせて作る。生地も手間も1着ごとに違うので、原価も1着ごとに計算する。', 'パン屋は同じ食パンを、1回に100斤まとめて焼く。1斤ずつ原価を測るのは大変なので、1回分の原価を出して100で割る。前者が個別原価計算、後者がバッチ原価計算の考え方になる。']
        },
        {
          title: '個別原価計算（job costing）の特徴',
          list: ['客の特別な注文（customer’s special requirements）に合わせて作る', '1つの仕事（job）は、比較的短い期間で終わる', '仕事が工場の中を動いても、ほかの仕事と区別できる（separately identifiable）', '原価単位（cost unit）は1つの job。原価は job ごとに原価計算表（job cost card）に集める'],
          after: 'job は製品でもサービスでもよい。家の改築、車の修理、会計事務所の1件の仕事も job になる。'
        },
        {
          title: 'バッチ原価計算（batch costing）の特徴',
          list: ['同じ品物をまとめて作る1回分を、バッチ（batch）という', 'バッチは作っている間、ひとまとまりとして区別できる', '原価単位は1つのバッチ。原価はバッチごとに集める', '1個あたりの原価 ＝ バッチの原価 ÷ バッチの個数'],
          after: 'バッチ原価計算は、個別原価計算の一種。「1つの job ＝ 同じ品物の1回分」と考えればよい。'
        },
        {
          title: '原価を集める単位のちがい',
          svg: `<svg viewBox="0 0 440 252" role="img" aria-label="個別原価計算は注文ごとに別々に原価を集める。バッチ原価計算は同じ品物500枚を1回分として原価を集め、枚数で割って1枚あたりの原価を出す" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">原価を集める単位のちがい</text><text x="20" y="62" font-size="15" font-weight="600" fill="var(--ink)">個別（job）: 注文ごとに別々</text><rect x="20" y="74" width="124" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="97" text-anchor="middle" fill="var(--ink)">注文A</text><text x="82" y="118" text-anchor="middle" font-size="12.5" fill="var(--quiet)">テーブル $3,300</text><rect x="158" y="74" width="124" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="97" text-anchor="middle" fill="var(--ink)">注文B</text><text x="220" y="118" text-anchor="middle" font-size="12.5" fill="var(--quiet)">本棚 $1,640</text><rect x="296" y="74" width="124" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="358" y="97" text-anchor="middle" fill="var(--ink)">注文C</text><text x="358" y="118" text-anchor="middle" font-size="12.5" fill="var(--quiet)">店の改装 $5,300</text><text x="20" y="166" font-size="15" font-weight="600" fill="var(--ink)">バッチ（batch）: 同じ品物をまとめて</text><rect x="20" y="178" width="400" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="203" text-anchor="middle" font-size="15" fill="var(--ink)">Tシャツ 500枚を1回で作る</text><text x="220" y="226" text-anchor="middle" fill="var(--ink)">1回分 $2,400 ÷ 500枚 ＝ 1枚 $4.80</text></svg>`,
          caption: '個別は注文1件が1つの原価単位。バッチは同じ品物の1回分が1つの原価単位で、最後に個数で割る。'
        },
        {
          title: 'どんな仕事に向いている？',
          table: { caption: '使いどころ（situations）', head: ['方法', '向いている仕事', '例'], rows: [['個別原価計算', '注文ごとに中身が違い、1件ずつ見積もる仕事', '建物の建築・修理、特注家具、車の修理、特注の印刷、会計事務所の仕事'], ['バッチ原価計算', '同じ品物を、決まった数ずつまとめて作る仕事', 'パン・お菓子、靴、衣料品、薬、機械の部品、おもちゃ']] }
        },
        {
          title: '原価計算表（job cost card）に集めるもの',
          numbered: ['直接材料費: 出庫票（materials requisition）でその job に払い出した材料', '直接労務費: 作業時間の記録（timesheet）で、その job に使った時間 × 賃率', '直接経費: その job のためだけの外注や機械のレンタル', '製造間接費の配賦額: 予定配賦率 × その job の作業時間など'],
          after: 'ここまでが製造原価（production cost）。販売費・一般管理費を足すと総原価、さらに利益を足すと見積もり価格になる。'
        },
        {
          title: 'なぜ？ 方法を分ける理由',
          paras: ['個別の注文は、作るものが毎回違う。原価も毎回違うので、平均では意味がない。1件ずつ原価を集めて、見積もり（quotation）の価格を決め、その仕事でもうかったかを確かめる。', 'バッチは中身が同じなので、1個ずつ測る必要がない。測る手間のほうが高くつく。1回分をまとめて測り、個数で割れば十分に正確な1個あたりの原価になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「まとめて作る」だけで総合原価計算と答えない。バッチは区切りのある1回分で、作っている間ずっと区別できる。総合原価計算は、同じものが途切れなく流れ続け、1個ずつもバッチごとも区別できない作り方（石油・飲料など）。また job は製品に限らない。サービスの1件の仕事も job になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['個別原価計算: 客の注文ごと、短い期間、区別できる。原価単位は job', 'バッチ原価計算: 同じ品物の1回分が原価単位。1個あたり ＝ バッチ原価 ÷ 個数', '原価は job cost card に集める: 直接材料費・直接労務費・直接経費・製造間接費の配賦額']
        },
        {
          title: '英単語',
          words: [
            ['job costing', 'ジョブ コスティング', '個別原価計算（注文1件ごとに原価を集める）'],
            ['batch costing', 'バッチ コスティング', 'バッチ原価計算（同じ品物の1回分ごとに原価を集める）'],
            ['job', 'ジョブ', '1件の仕事・注文'],
            ['batch', 'バッチ', '同じ品物をまとめて作る1回分'],
            ['job cost card', '', '原価計算表（job ごとに原価を集める表）'],
            ['customer’s special requirements', '', '客の特別な注文・仕様'],
            ['quotation', 'クォーテーション', '見積もり（見積もり価格）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a characteristic of job costing?', choices: ['Work is undertaken to the special requirements of each customer', 'Output consists of identical units produced in a continuous flow', 'Costs are averaged over all the units produced in a period', 'Individual units cannot be identified during production'], answer: 0, explain: '個別原価計算は、客の注文ごとに中身が違う仕事に使う。「同じものが流れ続ける」「期間の原価を全部の単位で平均する」「1単位ずつ区別できない」は、どれも総合原価計算（process costing）の特徴。' },
        { q: 'For which of the following would batch costing be most appropriate?', choices: ['A builder extending a house for a customer', 'A bakery baking 1,000 identical loaves in each production run', 'An oil refinery producing petrol continuously', 'A hotel providing rooms to guests'], answer: 1, explain: '同じ品物を決まった数ずつまとめて作るので、バッチ原価計算。家の増築は注文ごとに違うので個別原価計算。石油精製は途切れなく流れるので総合原価計算。ホテルはサービス原価計算（後のレッスン）。' },
        { q: 'バッチ原価計算で、原価単位（cost unit）になるのはどれ？', choices: ['バッチの中の1個', '1つの工程の1か月分', '1つのバッチ（同じ品物の1回分）', '工場全体の1年分'], answer: 2, explain: 'バッチごとに原価を集めるので、原価単位はバッチ。1個あたりの原価は、そのあとバッチの原価を個数で割って出す。工程の1か月分で集めるのは総合原価計算。' },
        { q: '個別原価計算が最も向いているのはどれ？', choices: ['飲料メーカーが、同じジュースを毎日つくり続ける', '靴メーカーが、同じ型の靴を200足ずつ作る', '製紙会社が、同じ紙を連続して作る', '自動車修理工場が、客の車ごとに修理する'], answer: 3, explain: '修理の中身は車ごとに違い、1件ずつ見積もって請求するので個別原価計算。靴を200足ずつ作るのはバッチ原価計算。ジュースと紙は途切れなく流れるので総合原価計算。' },
        { q: '個別原価計算で、job ごとの原価を集める表はどれ？', choices: ['出庫票（materials requisition）だけ', '原価計算表（job cost card）', '工程勘定（process account）', '試算表（trial balance）'], answer: 1, explain: '原価計算表に、直接材料費・直接労務費・直接経費・製造間接費の配賦額を job ごとに集める。出庫票は材料費の元になる書類の1つにすぎない。工程勘定は総合原価計算で使う。' }
      ]
    },
    {
      id: 'M055',
      no: 55,
      title: 'ジョブとバッチの原価と利益を計算する',
      goal: 'job とバッチの原価を積み上げ、マークアップやマージンで価格と利益を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(a)(iii)'],
      slides: [
        {
          title: '引越しの見積もり',
          paras: ['引越し業者は、荷物の量、作業員の人数と時間、トラック代を1件ずつ積み上げる。そこに事務所の家賃などの分を少し足し、最後にもうけを乗せて見積もりを出す。', 'job の原価計算も同じ順番になる。直接費 → 製造間接費の配賦 → 販売費・一般管理費 → 利益。']
        },
        {
          title: '積み上げの順番',
          table: { caption: 'job の原価と価格', head: ['段階', '中身', '名前'], rows: [['1', '直接材料費 ＋ 直接労務費 ＋ 直接経費', '直接費合計（prime cost）'], ['2', '＋ 製造間接費の配賦額', '製造原価（total production cost）'], ['3', '＋ 販売費・一般管理費の配賦額', '総原価（total cost）'], ['4', '＋ 利益', '価格（selling price）']] },
          after: '販売費・一般管理費は、問題文で「製造原価の 20%」のように決め方が指定される。何に掛けるかを必ず確かめる。'
        },
        {
          title: '例題: Job 42（特注テーブル）の製造原価',
          example: {
            problem: '家具工房の Job 42。直接材料費 $1,200。直接作業 40時間、賃率は1時間 $15。この job 専用の工具のレンタル $150。製造間接費は直接作業1時間あたり $20 で配賦する。製造原価は？',
            steps: ['直接労務費: 40時間 × $15 ＝ $600', '直接費合計: $1,200 ＋ $600 ＋ $150 ＝ $1,950', '製造間接費の配賦額: 40時間 × $20 ＝ $800', '製造原価: $1,950 ＋ $800 ＝ $2,750'],
            answer: '製造原価 $2,750'
          }
        },
        {
          title: '例題の続き: 総原価と価格',
          example: {
            problem: 'Job 42 の販売費・一般管理費は、製造原価の 20% で配賦する。(1) 総原価は？ (2) 総原価に 25% のマークアップを乗せた価格は？ (3) 価格の 25% を利益にする（マージン 25%）なら価格は？',
            steps: ['販売費・一般管理費: $2,750 × 20% ＝ $550', '(1) 総原価: $2,750 ＋ $550 ＝ $3,300', '(2) マークアップは原価が基準: $3,300 × 1.25 ＝ $4,125（利益 $825）', '(3) マージンは価格が基準。原価は価格の 75%: $3,300 ÷ 0.75 ＝ $4,400（利益 $1,100）', '確かめ: $1,100 ÷ $4,400 ＝ 25%'],
            answer: '総原価 $3,300。マークアップ 25% なら $4,125、マージン 25% なら $4,400'
          }
        },
        {
          title: '例題: バッチの1個あたり原価と価格',
          example: {
            problem: 'Tシャツ 500枚のバッチ。材料費 $1,600、直接作業 30時間（1時間 $12）、機械の段取り費（setup cost）$140。製造間接費は直接作業1時間 $10 で配賦する。1枚の原価は？ マージン 20% で売るなら1枚の価格は？',
            steps: ['直接労務費: 30時間 × $12 ＝ $360', '製造間接費: 30時間 × $10 ＝ $300', 'バッチの原価: $1,600 ＋ $360 ＋ $140 ＋ $300 ＝ $2,400', '1枚の原価: $2,400 ÷ 500枚 ＝ $4.80', '価格: $4.80 ÷ 0.80 ＝ $6.00（1枚の利益 $1.20 ＝ $6.00 の 20%）'],
            answer: '1枚の原価 $4.80、価格 $6.00'
          }
        },
        {
          title: '例題: 価格から原価を逆算する',
          example: {
            problem: 'Job 57 は $2,600 で売れた。価格は、総原価に 30% のマークアップを乗せて決めている。総原価は、直接費合計（prime cost）に間接費 $850 を足したもの。直接費合計は？ もしマージン 20%（価格の 20% が利益）だったら総原価は？',
            steps: ['価格は総原価の 130%（原価を 100% とおく）', '総原価: $2,600 ÷ 1.30 ＝ $2,000（利益 $600）', '直接費合計: $2,000 − $850 ＝ $1,150', 'マージン 20% なら、総原価は価格の 80%: $2,600 × 0.80 ＝ $2,080（利益 $520）'],
            answer: '直接費合計 $1,150。マージン 20% なら総原価 $2,080'
          },
          note: { kind: 'tip', text: '逆算は「どちらを 100% とおくか」から始める。マークアップは原価が 100%、マージンは価格が 100%。' }
        },
        {
          title: '終わった job と、作りかけの job',
          paras: ['期末に終わった job の原価は、完成品（finished goods）へ移し、引き渡したら売上原価（cost of sales）になる。', 'まだ終わっていない job の原価は、そのまま仕掛品（work in progress）として残る。期末の仕掛品の額 ＝ 終わっていない job の原価の合計（前期から持ち越した分も含む）。'],
          note: { kind: 'tip', text: '客の頼みで急いだために出た残業手当（overtime premium）は、その job の直接費にする。忙しい時期に工場全体で出た残業手当なら、製造間接費にする。不良品の手直し費（rectification cost）も同じ考え方で、特定の job でまれに起きたならその job の直接費、どの仕事でもふつうに起きるなら製造間接費にする。' }
        },
        {
          title: 'なぜ？ 間接費まで job に乗せる理由',
          paras: ['見積もりを直接費だけで出すと、工場の家賃や機械の減価償却、事務所の費用を、どの job も払わないことになる。全部の job で集めた代金が、会社全体の費用を下回ってしまう。', 'だから配賦率で製造間接費を、決められた割合で販売費・一般管理費を、それぞれの job に乗せてから利益を足す。job ごとの利益も、こうして初めて正しく比べられる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'マークアップとマージンの取り違え。マークアップ 25% は原価 × 1.25、マージン 25% は原価 ÷ 0.75。また「製造原価の 20%」を直接費合計（prime cost）に掛けない。バッチでは、1個あたりにするときバッチの個数で割る（売れた数ではない）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接費 ＋ 製造間接費の配賦額 ＝ 製造原価。＋ 販売費・一般管理費 ＝ 総原価', 'マークアップは原価が基準（原価 × 1.25）、マージンは価格が基準（原価 ÷ 0.75）', 'バッチ1個の原価 ＝ バッチの原価 ÷ バッチの個数。終わっていない job の原価は仕掛品']
        },
        {
          title: '英単語',
          words: [
            ['prime cost', 'プライム コスト', '直接費合計（直接材料費＋直接労務費＋直接経費）'],
            ['total production cost', '', '製造原価（直接費＋製造間接費の配賦額）'],
            ['total cost', '', '総原価（製造原価＋販売費・一般管理費）'],
            ['mark-up', 'マークアップ', '原価に対する利益の割合'],
            ['margin', 'マージン', '価格（売上）に対する利益の割合'],
            ['setup cost', 'セットアップ コスト', '段取り費（機械を準備する費用。バッチの直接費）'],
            ['overtime premium', 'オーバータイム プレミアム', '残業手当の割増分']
          ]
        }
      ],
      quiz: [
        { q: 'Job 15 requires direct materials costing $800 and 25 direct labour hours at $16 per hour. Production overhead is absorbed at $12 per direct labour hour. Non-production overheads are 10% of total production cost. What is the total cost of Job 15?', type: 'number', answer: 1650, unit: '$', explain: '直接労務費 25 × $16 ＝ $400。製造間接費 25 × $12 ＝ $300。製造原価 $800 ＋ $400 ＋ $300 ＝ $1,500。販売費・一般管理費 10% ＝ $150。総原価 $1,650。10% を直接費合計（$1,200）に掛けると $1,620 になり誤り。' },
        { q: 'The company prices Job 15 to earn a profit margin of 25% of the selling price. What is the selling price of Job 15?', choices: ['$2,062.50', '$2,200.00', '$1,237.50', '$2,000.00'], answer: 1, explain: 'マージンは価格が基準。総原価 $1,650 は価格の 75% なので、$1,650 ÷ 0.75 ＝ $2,200。$2,062.50 は原価に 25% を足したマークアップの答え。$2,000 は製造原価 $1,500 を使っている。' },
        { q: 'あるバッチは 200個で、バッチの原価は合計 $3,000。1個の原価に 20% のマークアップを乗せて売る。1個の価格は？', choices: ['$18.75', '$3,600', '$18.00', '$12.00'], answer: 2, explain: '1個の原価 $3,000 ÷ 200 ＝ $15。マークアップは原価が基準なので $15 × 1.20 ＝ $18。$18.75 はマージン 20%（$15 ÷ 0.8）の答え。$3,600 はバッチ全体の価格で、1個あたりではない。$12.00 は 20% を足さずに引いている。' },
        { q: '期末の状況: Job 1 は前期からの持ち越し $1,000 ＋ 今期の原価 $2,500 で完成。Job 2 は今期の原価 $3,200 で完成。Job 3 は前期からの持ち越し $400 ＋ 今期の原価 $1,800 で、まだ終わっていない。期末の仕掛品の額は？', type: 'number', answer: 2200, unit: '$', explain: '期末の仕掛品は、終わっていない Job 3 の原価の合計。持ち越し分も含めて $400 ＋ $1,800 ＝ $2,200。Job 1（$3,500）と Job 2（$3,200）は完成品へ移る。今期の原価 $1,800 だけ答えると、持ち越し分を落としている。' },
        { q: 'A customer asks for Job 88 to be completed urgently and the work is done in overtime. How should the overtime premium be treated?', choices: ['As a production overhead shared by all jobs', 'As an administration cost', 'It should not be recorded as a cost', 'As a direct cost of Job 88'], answer: 3, explain: '客の頼みでその job のために出た残業手当は、その job の直接費にして見積もりに入れる。工場全体が忙しくて出た残業手当なら製造間接費にする。' },
        { q: 'Job 71 was sold for $3,000. The selling price gives a profit margin of 20% of sales. Overheads of $900 were added to prime cost to arrive at total cost. What was the prime cost of Job 71?', type: 'number', answer: 1500, unit: '$', explain: 'マージンは価格が基準なので、総原価は価格の 80%: $3,000 × 0.80 ＝ $2,400。直接費合計 ＝ $2,400 − $900 ＝ $1,500。マークアップと取り違えて $3,000 ÷ 1.20 ＝ $2,500 とすると $1,600 になり誤り。' }
      ]
    },
    {
      id: 'M056',
      no: 56,
      title: '総合原価計算: 特徴と使いどころ',
      goal: '総合原価計算の特徴と使いどころを説明し、工程ごとの1単位あたり原価を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(i)', 'K2:B5(b)(ii)'],
      slides: [
        {
          title: '牛乳工場の1本の原価',
          paras: ['牛乳工場では、同じ牛乳が殺菌 → 充てん → 箱詰めと、途切れなく流れていく。1本ずつの違いはなく、どの1本がいくらかかったかを追うこともできない。', 'そこで1か月の工程の原価を集め、1か月に作った本数で割る。1本の原価は平均で考える。これが総合原価計算の考え方になる。']
        },
        {
          title: '総合原価計算（process costing）の特徴',
          list: ['同じ製品が、続けて大量に作られる（continuous production）', '1単位ずつは同じもので、区別できない（identical units）', '原価は工程（process）ごと、期間ごとに集める', '前の工程の産出（output）が、次の工程の投入（input）になる', '作る途中で減損（losses）が出るのがふつう', '1単位の原価 ＝ その工程の原価 ÷ 産出量（平均）']
        },
        {
          title: 'どんな仕事に向いている？',
          paras: ['同じものを大量に、連続して作る業種に向いている。'],
          list: ['石油の精製', '化学品・塗料', 'ビール・ジュースなどの飲料', '大量生産の食品', '紙・セメント・鉄鋼'],
          after: '反対に、注文ごとに中身が違う仕事には向かない（個別原価計算を使う）。'
        },
        {
          title: '原価は工程から工程へ流れる',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="工程1の原価10,000ドルを2,000kgで割ると1kg5ドル。工程2へ引き継ぎ、労務費と間接費4,000ドルを足して14,000ドル、1kg7ドルで完成品になる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">原価は工程から工程へ流れる</text><rect x="20" y="50" width="190" height="66" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="76" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">工程1（Process 1）</text><text x="115" y="100" text-anchor="middle" fill="var(--ink)">$10,000 ÷ 2,000kg ＝ $5</text><path d="M210 83 H222" stroke="var(--ink)" stroke-width="1.5"/><path d="M222 77 L230 83 L222 89 Z" fill="var(--ink)"/><rect x="230" y="50" width="190" height="66" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="76" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">工程2（Process 2）</text><text x="325" y="100" text-anchor="middle" fill="var(--ink)">$14,000 ÷ 2,000kg ＝ $7</text><text x="115" y="142" text-anchor="middle" fill="var(--quiet)">投入: 材料・労務費・間接費</text><text x="115" y="162" text-anchor="middle" fill="var(--quiet)">$10,000</text><text x="325" y="142" text-anchor="middle" fill="var(--quiet)">＋ 労務費・間接費 $4,000</text><path d="M325 170 V192" stroke="var(--ink)" stroke-width="1.5"/><path d="M319 192 L325 200 L331 192 Z" fill="var(--ink)"/><rect x="230" y="204" width="190" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="231" text-anchor="middle" font-size="15" fill="var(--ink)">完成品 2,000kg $14,000</text></svg>`,
          caption: '工程1の産出 $10,000 は、工程2の投入として引き継がれる。工程2で足した原価と合わせて、1kg の原価を出し直す。'
        },
        {
          title: '例題: 2つの工程の1kg あたり原価',
          example: {
            problem: '塗料工場。工程1に材料 2,000kg（$6,000）を入れ、労務費 $2,500、製造間接費 $1,500 がかかった。2,000kg ができて工程2へ送った。工程2では労務費 $2,400、製造間接費 $1,600 がかかり、2,000kg が完成した。減損はない。各工程の1kg の原価は？',
            steps: ['工程1の原価: $6,000 ＋ $2,500 ＋ $1,500 ＝ $10,000', '工程1の1kg: $10,000 ÷ 2,000kg ＝ $5', '工程2は工程1の $10,000 を引き継ぐ: $10,000 ＋ $2,400 ＋ $1,600 ＝ $14,000', '工程2の1kg: $14,000 ÷ 2,000kg ＝ $7'],
            answer: '工程1 は1kg $5、完成品（工程2）は1kg $7'
          }
        },
        {
          title: '工程勘定（process account）',
          paras: ['工程ごとに勘定を作る。借方に投入した原価、貸方に産出の行き先を書く。'],
          tAccount: { name: 'Process 1 account', debit: [['Materials（2,000kg）', '6,000'], ['Labour', '2,500'], ['Production overhead', '1,500']], credit: [['Process 2（2,000kg × $5）', '10,000']] },
          after: '次の工程へ送る仕訳は Dr Process 2 / Cr Process 1（$10,000）。最後の工程の産出は Dr Finished goods / Cr Process 2。'
        },
        {
          title: '3つの方法をくらべる',
          table: { caption: '原価計算の方法', head: ['項目', '個別・バッチ', '総合'], rows: [['製品', '注文ごとに違う／同じ品の1回分', '同じものが流れ続ける'], ['原価を集める単位', 'job・バッチ', '工程と期間'], ['1単位の原価', 'job の合計／バッチ ÷ 個数', '工程の原価 ÷ 産出量'], ['例', '修理・特注家具／パン・靴', '石油・飲料・塗料']] }
        },
        {
          title: 'なぜ？ 平均で考える',
          paras: ['流れ続ける製品は、1単位ずつ原価を追えない。追えたとしても、中身は全部同じなので、1単位ずつの原価もほとんど同じになる。', 'だから工程と期間で区切り、合計を産出量で割る。工程ごとに分けるのは、どの工程で原価がかかり、どこで減損が出たかを管理者が見られるようにするため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '次の工程の原価に、前の工程から引き継いだ原価を足し忘れる（工程2を $4,000 ÷ 2,000kg ＝ $2 としない）。また、減損がなければ投入量と産出量は同じになる。減損が出るときは、割る数は投入量でも実際の産出量でもなく、予定産出量（投入量 − 正常減損）になる（次のレッスン）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['総合原価計算: 同じものを連続して作る。1単位ずつ区別できないので平均で考える', '原価は工程ごと・期間ごとに集め、前の工程の産出を次の工程の投入として引き継ぐ', '1単位の原価 ＝ 工程の原価（引き継いだ分を含む）÷ 産出量（減損があるときは予定産出量）'],
          note: { kind: 'tip', text: 'K2 のシラバスにある総合原価計算の計算は、減損と増加、連産品と副産物まで。期末に作りかけが残るときの計算は、シラバスに書かれていないので、このコースでは扱わない。' }
        },
        {
          title: '英単語',
          words: [
            ['process costing', 'プロセス コスティング', '総合原価計算'],
            ['process account', 'プロセス アカウント', '工程勘定（工程ごとの原価の勘定）'],
            ['continuous production', '', '連続生産'],
            ['identical units', 'アイデンティカル ユニッツ', '区別のつかない同じ製品'],
            ['input / output', 'インプット / アウトプット', '投入 / 産出'],
            ['finished goods', 'フィニッシュト グッズ', '完成品'],
            ['losses', 'ロスィズ', '減損（作る途中で失われる量）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a characteristic of process costing?', choices: ['Each cost unit is separately identifiable and made to customer specification', 'Output consists of identical units and process costs are averaged over the units produced', 'Costs are collected for a group of identical items which keep their identity during production', 'Work is usually of relatively short duration'], answer: 1, explain: '総合原価計算は、同じものを連続して作り、工程の原価を産出量で平均する。「客の仕様に合わせて作り区別できる」「比較的短い期間」は個別原価計算、「同じ品物の集まりが作る間も区別できる」はバッチ原価計算の特徴。' },
        { q: 'For which of the following would process costing be most appropriate?', choices: ['An architect designing a new office building', 'A furniture maker producing a dining table to order', 'A brewery producing beer', 'A printer producing 500 wedding invitations'], answer: 2, explain: 'ビールは同じものが途切れなく流れる工程で作るので、総合原価計算。設計事務所と特注家具は注文ごとに違う個別原価計算。招待状 500枚は1回分の注文なので、バッチ（個別）原価計算。' },
        { q: 'The total costs of a process for a period were $45,000 and output was 9,000 units. There were no losses. What was the cost per unit?', type: 'number', answer: 5, unit: '$', explain: '工程の原価 ÷ 産出量 ＝ $45,000 ÷ 9,000 ＝ $5。' },
        { q: '工程1から 3,000kg（$12,000）が工程2へ送られた。工程2では労務費と製造間接費が合計 $6,000 かかり、3,000kg が完成した。減損はない。完成品1kg の原価は？', type: 'number', answer: 6, unit: '$', explain: '工程2は引き継いだ $12,000 に $6,000 を足して $18,000。$18,000 ÷ 3,000kg ＝ $6。工程2で足した $6,000 だけで割ると $2 になり、引き継いだ原価を落としている。' },
        { q: '工程1の産出 $10,000 を工程2へ送るときの仕訳はどれ？', choices: ['Dr Process 1 / Cr Process 2', 'Dr Finished goods / Cr Process 1', 'Dr Process 2 / Cr Process 1', 'Dr Cost of sales / Cr Process 1'], answer: 2, explain: '産出は工程1から出ていく（貸方）、工程2に入る（借方）。Dr Process 1 / Cr Process 2 は向きが逆。完成品（Finished goods）へ送るのは最後の工程から。' }
      ]
    },
    {
      id: 'M057',
      no: 57,
      title: '正常減損と異常減損',
      goal: '正常減損と異常減損を区別し、1単位の原価・工程勘定・異常減損勘定・処分価値を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(iii)'],
      slides: [
        {
          title: 'うどん作りの切れ端',
          paras: ['手打ちうどんを作ると、生地の端は必ず切り落とす。1kg の生地からいつも 100g は端になると分かっている。これは作り方の一部で、うどんの原価に含めて考える。', 'ある日、生地を床に落として 50g ダメにした。これは予定外のムダ。「いつもの切れ端」と「予定外のムダ」を分けて扱うのが、正常減損と異常減損になる。']
        },
        {
          title: '2つの減損',
          list: ['正常減損（normal loss）: 作り方から当然に出ると見込んでいる減損。ふつう投入量の何%と決める。原価を持たせず、良い製品の原価に含める', '異常減損（abnormal loss）: 正常減損を超えて出た減損。良い製品と同じ1単位の原価で評価し、工程から外して、その期の損益計算書の費用にする'],
          formula: '予定産出量（expected output）＝ 投入量 − 正常減損'
        },
        {
          title: '投入量の行き先',
          svg: `<svg viewBox="0 0 440 258" role="img" aria-label="1,000kg投入。予定の産出は900kgで正常減損100kg。実際の産出は850kgで、予定より50kg少ない分が異常減損" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">1,000kg 投入した工程の行き先</text><rect x="20" y="46" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="68" text-anchor="middle" fill="var(--ink)">投入（input）1,000kg</text><rect x="20" y="104" width="360" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="200" y="126" text-anchor="middle" fill="var(--ink)">予定の産出（expected output）900kg</text><rect x="380" y="104" width="40" height="34" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="420" y="158" text-anchor="end" fill="var(--quiet)">正常減損（normal loss）100kg</text><rect x="20" y="178" width="340" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="190" y="200" text-anchor="middle" fill="var(--ink)">実際の産出 850kg</text><rect x="360" y="178" width="20" height="34" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="380" y="178" width="40" height="34" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="420" y="236" text-anchor="end" font-weight="600" fill="var(--ink)">異常減損（abnormal loss）50kg</text></svg>`,
          caption: '予定より少ししかできなかった分（900kg − 850kg）が異常減損。正常減損の 100kg はどちらの段にもある。'
        },
        {
          title: '計算の5つの手順',
          numbered: ['量の流れ: 予定産出量 ＝ 投入量 − 正常減損。異常減損 ＝ 予定産出量 − 実際の産出量', '1単位の原価 ＝（工程の原価 − 正常減損の処分価値）÷ 予定産出量', '産出と異常減損を、同じ1単位の原価で評価する', '工程勘定を書く（貸方に正常減損・産出・異常減損）', '異常減損勘定で、処分価値を引いた残りを損益計算書へ']
        },
        {
          title: '例題: 異常減損が出た工程',
          example: {
            problem: '工程に材料 1,000kg（$5,000）を入れ、労務費 $2,400、製造間接費 $1,800 がかかった。正常減損は投入量の 10%。減損はスクラップとして1kg $2 で売れる。実際の産出は 850kg。1kg の原価と、産出・異常減損の額は？',
            steps: ['正常減損: 1,000kg × 10% ＝ 100kg。予定産出量 900kg', '異常減損: 900kg − 850kg ＝ 50kg', '工程の原価: $5,000 ＋ $2,400 ＋ $1,800 ＝ $9,200。正常減損の処分価値: 100kg × $2 ＝ $200', '1kg の原価:（$9,200 − $200）÷ 900kg ＝ $10', '産出: 850kg × $10 ＝ $8,500。異常減損: 50kg × $10 ＝ $500'],
            answer: '1kg $10。産出 $8,500、異常減損 $500'
          }
        },
        {
          title: '工程勘定',
          tAccount: { name: 'Process account', debit: [['Materials（1,000kg）', '5,000'], ['Labour', '2,400'], ['Production overhead', '1,800']], credit: [['Normal loss（100kg × $2）', '200'], ['Output（850kg × $10）', '8,500'], ['Abnormal loss（50kg × $10）', '500']] },
          after: '両側とも $9,200 で一致する。正常減損は処分価値（scrap value）だけで書き、異常減損は良い製品と同じ $10 で書く。'
        },
        {
          title: '異常減損勘定とスクラップ勘定',
          tAccount: { name: 'Abnormal loss account', debit: [['Process account（50kg）', '500']], credit: [['Scrap account（50kg × $2）', '100'], ['Statement of profit or loss', '400']] },
          after: '異常減損の 50kg もスクラップで $100 売れるので、損益計算書の費用は差引き $400。スクラップ勘定（scrap account）は、借方に正常減損 $200 と異常減損 $100、貸方に現金 $300（150kg × $2）が入る。'
        },
        {
          title: 'なぜ？ 2つを分けて扱う',
          paras: ['正常減損は、作るために避けられない。だから良い製品の原価に含める。900kg 分の原価を 900kg で割るので、1kg の原価に自然に上乗せされる。', '異常減損は、事故や不注意など管理できたはずのムダ。良い製品の原価に混ぜると、たまたまムダが出た月だけ製品が高くなる。同じ $10 で外に出して費用にすれば、製品の原価は毎月そろい、ムダの額は管理者に見える。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '1単位の原価を投入量で割る（$9,000 ÷ 1,000kg ＝ $9 は誤り）。異常減損を処分価値の $2 で工程勘定に書く（$10 で書き、処分価値は異常減損勘定で引く）。1単位の原価の計算で、異常減損の処分価値まで引く（引くのは正常減損の分だけ）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['1単位の原価 ＝（工程の原価 − 正常減損の処分価値）÷（投入量 − 正常減損）', '正常減損は処分価値だけで工程勘定から出す。処分価値がなければ $0', '異常減損は良い製品と同じ1単位の原価で出し、処分価値を引いた残りを損益計算書の費用にする']
        },
        {
          title: '英単語',
          words: [
            ['normal loss', 'ノーマル ロス', '正常減損（見込んでいる減損）'],
            ['abnormal loss', 'アブノーマル ロス', '異常減損（正常減損を超えた減損）'],
            ['expected output', 'エクスペクテッド アウトプット', '予定産出量（投入量 − 正常減損）'],
            ['scrap value', 'スクラップ ヴァリュー', '処分価値（減損を売って入る額）'],
            ['scrap account', '', 'スクラップ勘定'],
            ['abnormal loss account', '', '異常減損勘定'],
            ['cost per unit', '', '1単位あたりの原価']
          ]
        }
      ],
      quiz: [
        { q: 'A process has an input of 2,000 units costing $19,100. Normal loss is 5% of input and lost units are sold for scrap at $1 per unit. Actual output was 1,820 units. What is the value of the abnormal loss in the process account?', type: 'number', answer: 800, unit: '$', explain: '正常減損 2,000 × 5% ＝ 100。予定産出量 1,900。異常減損 1,900 − 1,820 ＝ 80。1単位の原価（$19,100 − $100）÷ 1,900 ＝ $10。異常減損 80 × $10 ＝ $800。処分価値 $1 で評価すると $80 になり誤り。' },
        { q: 'Using the same data, what is the net amount charged to the statement of profit or loss for the abnormal loss?', choices: ['$800', '$720', '$80', '$880'], answer: 1, explain: '異常減損 $800 から、80単位をスクラップで売った $80 を引いて $720。$800 は処分価値を引き忘れている。$80 は処分価値だけ。' },
        { q: 'Which of the following statements about abnormal losses is correct?', choices: ['They are valued at their scrap value in the process account', 'Their cost is included in the cost of good output', 'They are valued at the same cost per unit as good output', 'They are credited to the statement of profit or loss'], answer: 2, explain: '異常減損は良い製品と同じ1単位の原価で工程勘定から出す。処分価値で書くのは正常減損。良い製品の原価に含めるのも正常減損の扱い。異常減損は費用なので、損益計算書の借方（費用）になる。' },
        { q: '工程に 500kg を投入し、原価は $4,500。正常減損は投入量の 10% で、処分価値はない。1kg の原価はいくら？', type: 'number', answer: 10, unit: '$', explain: '予定産出量 500kg − 50kg ＝ 450kg。$4,500 ÷ 450kg ＝ $10。投入量 500kg で割ると $9 になり、正常減損の原価を良い製品に含めていない。' },
        { q: '異常減損を工程勘定から外すときの仕訳はどれ？', choices: ['Dr Process account / Cr Abnormal loss account', 'Dr Scrap account / Cr Process account（1単位の原価で）', 'Dr Abnormal loss account / Cr Process account', 'Dr Statement of profit or loss / Cr Scrap account'], answer: 2, explain: '異常減損は工程から出ていくので工程勘定の貸方、異常減損勘定の借方。Dr Process account が先に来る形は向きが逆で、異常増加のときの形。スクラップ勘定へは処分価値だけを移す（Dr Scrap / Cr Abnormal loss account）。' }
      ]
    },
    {
      id: 'M058',
      no: 58,
      title: '異常増加（abnormal gain）',
      goal: '異常増加が出るときを説明し、工程勘定・異常増加勘定・スクラップ勘定を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(iii)'],
      slides: [
        {
          title: '切れ端がいつもより少なかった日',
          paras: ['うどん作りで、いつもは 1kg の生地から 100g が切れ端になる。ある日は丁寧に切れて、切れ端が 70g で済んだ。うどんは予定より 30g 多くできた。', '減損が見込みより少なかったために、予定より多くできた分。これが異常増加（abnormal gain）になる。投入より多くできたわけではない。']
        },
        {
          title: '異常増加とは',
          paras: ['実際の減損が正常減損より少ないとき、実際の産出量は予定産出量を上回る。その差が異常増加。'],
          formula: '異常増加 ＝ 実際の産出量 − 予定産出量（＝ 正常減損 − 実際の減損）',
          after: '異常減損の反対なので、工程勘定では借方に書く。良い製品と同じ1単位の原価で評価する。'
        },
        {
          title: '投入量の行き先',
          svg: `<svg viewBox="0 0 440 276" role="img" aria-label="1,000kg投入。予定の産出は900kgで正常減損100kg。実際の産出は930kg、実際の減損は70kgで、予定より30kg多い分が異常増加" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">減損が見込みより少なかった工程</text><rect x="20" y="46" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="68" text-anchor="middle" fill="var(--ink)">投入（input）1,000kg</text><rect x="20" y="104" width="360" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="200" y="126" text-anchor="middle" fill="var(--ink)">予定の産出（expected output）900kg</text><rect x="380" y="104" width="40" height="34" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="420" y="158" text-anchor="end" fill="var(--quiet)">正常減損（normal loss）100kg</text><rect x="20" y="178" width="360" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="200" y="200" text-anchor="middle" fill="var(--ink)">実際の産出 930kg のうち 900kg</text><rect x="380" y="178" width="12" height="34" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="392" y="178" width="28" height="34" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="420" y="236" text-anchor="end" font-weight="600" fill="var(--ink)">異常増加（abnormal gain）30kg</text><text x="420" y="260" text-anchor="end" fill="var(--quiet)">実際の減損 70kg</text></svg>`,
          caption: '実際の産出 930kg は予定の 900kg より 30kg 多い。減損が 100kg ではなく 70kg で済んだから。'
        },
        {
          title: '例題: 異常増加が出た工程',
          example: {
            problem: '前のレッスンと同じ工程。材料 1,000kg（$5,000）、労務費 $2,400、製造間接費 $1,800。正常減損は投入量の 10%、スクラップは1kg $2。今月の実際の産出は 930kg だった。1kg の原価と、産出・異常増加の額は？',
            steps: ['予定産出量: 1,000kg − 100kg ＝ 900kg', '異常増加: 930kg − 900kg ＝ 30kg（実際の減損は 70kg）', '1kg の原価:（$9,200 − 100kg × $2）÷ 900kg ＝ $10（異常増加があっても予定の数字で計算する）', '産出: 930kg × $10 ＝ $9,300', '異常増加: 30kg × $10 ＝ $300'],
            answer: '1kg $10。産出 $9,300、異常増加 $300'
          }
        },
        {
          title: '工程勘定',
          tAccount: { name: 'Process account', debit: [['Materials（1,000kg）', '5,000'], ['Labour', '2,400'], ['Production overhead', '1,800'], ['Abnormal gain（30kg × $10）', '300']], credit: [['Normal loss（100kg × $2）', '200'], ['Output（930kg × $10）', '9,300']] },
          after: '両側とも $9,500 で一致する。正常減損は、実際の減損が 70kg でも、見込みの 100kg × $2 ＝ $200 のまま書く。'
        },
        {
          title: '異常増加勘定とスクラップ勘定',
          tAccount: { name: 'Abnormal gain account', debit: [['Scrap account（30kg × $2）', '60'], ['Statement of profit or loss', '240']], credit: [['Process account（30kg）', '300']] },
          after: 'スクラップ勘定は、借方に正常減損 $200（100kg 分）、貸方に異常増加 $60 と現金 $140（実際の減損 70kg × $2）。売れる切れ端が 30kg 減った分 $60 を、異常増加の $300 から引く。損益計算書の利益は差引き $240 増える。'
        },
        {
          title: 'なぜ？ 1単位の原価を変えない',
          paras: ['うまくいった月に1単位の原価を下げると、製品の原価が月ごとにぶれる。異常減損と同じく、1単位の原価は「予定どおりなら」の数字で固定する。', '予定より多くできた分は $10 の価値として工程に入れ、異常増加勘定で利益として見せる。こうすると、管理者は「今月は減損が少なく $240 得をした」と分かる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '異常増加を工程勘定の貸方に書く（借方が正しい。異常減損の反対）。正常減損を実際の減損 70kg で書く（見込みの 100kg で書く）。損益計算書に $300 をそのまま出す（売れなくなったスクラップ $60 を引いて $240）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['異常増加 ＝ 実際の産出量 − 予定産出量。実際の減損が正常減損より少ないときに出る', '1単位の原価は予定産出量で計算し、異常増加もその原価で評価して工程勘定の借方に書く', '損益計算書への利益 ＝ 異常増加の額 − 売れなくなった処分価値']
        },
        {
          title: '英単語',
          words: [
            ['abnormal gain', 'アブノーマル ゲイン', '異常増加（正常減損より減損が少なかった分）'],
            ['abnormal gain account', '', '異常増加勘定'],
            ['actual loss', '', '実際の減損'],
            ['actual output', '', '実際の産出量'],
            ['scrap value forgone', '', '売れなくなった処分価値（異常増加の分）']
          ]
        }
      ],
      quiz: [
        { q: 'A process has an input of 4,000 litres costing $36,600. Normal loss is 10% of input and lost units are sold for scrap at $1.50 per litre. Actual output was 3,700 litres. What is the value of the abnormal gain in the process account?', type: 'number', answer: 1000, unit: '$', explain: '正常減損 400、予定産出量 3,600。異常増加 3,700 − 3,600 ＝ 100。1単位の原価（$36,600 − 400 × $1.50）÷ 3,600 ＝ $36,000 ÷ 3,600 ＝ $10。異常増加 100 × $10 ＝ $1,000。' },
        { q: 'Using the same data, what is the net amount credited to the statement of profit or loss for the abnormal gain?', choices: ['$1,000', '$1,150', '$850', '$150'], answer: 2, explain: '異常増加 $1,000 から、売れなくなったスクラップ 100 × $1.50 ＝ $150 を引いて $850。$1,150 は引くべき $150 を足している。$1,000 は処分価値を引き忘れている。' },
        { q: 'Which double entry records an abnormal gain in the process account?', choices: ['Debit Abnormal gain account, Credit Process account', 'Debit Process account, Credit Abnormal gain account', 'Debit Scrap account, Credit Process account', 'Debit Process account, Credit Scrap account'], answer: 1, explain: '異常増加は予定より多くできた分を工程に入れるので、工程勘定の借方、異常増加勘定の貸方。Debit Abnormal gain account, Credit Process account は向きが逆で、異常減損の形。スクラップ勘定との組み合わせは、処分価値を動かすときの仕訳。' },
        { q: '例題の工程（正常減損 100kg、処分価値1kg $2）で、実際の減損は 70kg だった。工程勘定の貸方に書く正常減損の額は？', choices: ['$140（実際の 70kg × $2）', '$200（見込みの 100kg × $2）', '$1,000（100kg × 1単位の原価 $10）', '$0'], answer: 1, explain: '工程勘定の正常減損は、いつも見込みの量 × 処分価値で書く。実際に売れた $140 との差 $60 は、異常増加勘定とスクラップ勘定で調整する。正常減損に1単位の原価 $10 は付けない。' },
        { q: '異常増加が出るのは、どんなとき？', choices: ['実際の産出量が、投入量より多かったとき', '実際の減損が、正常減損より多かったとき', '減損の処分価値が、1単位の原価より高かったとき', '実際の減損が、正常減損より少なかったとき'], answer: 3, explain: '減損が見込みより少なく、予定産出量より多くできたときに異常増加になる。投入量より多くできるわけではない。減損が見込みより多ければ異常減損。' }
      ]
    }
  ],
  cards: [
    { id: 'M054-1', lesson: 'M054', q: '個別原価計算（job costing）の特徴は？', a: '客の注文ごと、比較的短い期間、ほかと区別できる。原価単位は job' },
    { id: 'M054-2', lesson: 'M054', q: 'バッチ原価計算（batch costing）の原価単位と1個の原価は？', a: '原価単位はバッチ（同じ品の1回分）。1個 ＝ バッチの原価 ÷ 個数' },
    { id: 'M054-3', lesson: 'M054', q: '個別原価計算が向く仕事の例は？', a: '建築・修理、特注家具、車の修理、特注の印刷、会計事務所の仕事' },
    { id: 'M054-4', lesson: 'M054', q: 'バッチ原価計算が向く仕事の例は？', a: 'パン・お菓子、靴、衣料品、薬、部品など同じ品をまとめて作る仕事' },
    { id: 'M054-5', lesson: 'M054', q: 'job cost card に集める4つは？', a: '直接材料費・直接労務費・直接経費・製造間接費の配賦額' },
    { id: 'M055-1', lesson: 'M055', q: 'job の原価を積み上げる順番は？', a: '直接費 → ＋製造間接費＝製造原価 → ＋販売費・一般管理費＝総原価 → ＋利益' },
    { id: 'M055-2', lesson: 'M055', q: '総原価 $3,300 にマークアップ 25% の価格は？', a: '$3,300 × 1.25 ＝ $4,125（原価が基準）' },
    { id: 'M055-3', lesson: 'M055', q: '総原価 $3,300 でマージン 25% の価格は？', a: '$3,300 ÷ 0.75 ＝ $4,400（価格が基準）' },
    { id: 'M055-4', lesson: 'M055', q: '期末の仕掛品（個別原価計算）の額は？', a: '終わっていない job の原価の合計（前期からの持ち越しも含む）' },
    { id: 'M055-5', lesson: 'M055', q: '客の頼みで出た残業手当の扱いは？', a: 'その job の直接費。工場全体の都合なら製造間接費' },
    { id: 'M055-6', lesson: 'M055', q: '価格 $2,600、総原価に 30% のマークアップ。総原価は？', a: '$2,600 ÷ 1.30 ＝ $2,000（原価を 100% とおく）' },
    { id: 'M056-1', lesson: 'M056', q: '総合原価計算（process costing）の特徴は？', a: '同じものを連続生産、1単位ずつ区別できない、工程ごとに集めて平均する' },
    { id: 'M056-2', lesson: 'M056', q: '総合原価計算が向く業種の例は？', a: '石油精製、化学品・塗料、飲料、大量生産の食品、紙・セメント・鉄鋼' },
    { id: 'M056-3', lesson: 'M056', q: '工程1の産出を工程2へ送る仕訳は？', a: 'Dr Process 2 / Cr Process 1' },
    { id: 'M056-4', lesson: 'M056', q: '工程2の1単位の原価の出し方は？', a: '（工程1から引き継いだ原価 ＋ 工程2で足した原価）÷ 産出量' },
    { id: 'M056-5', lesson: 'M056', q: 'バッチと総合原価計算の違いは？', a: 'バッチは区切りのある1回分で区別できる。総合は途切れなく流れ区別できない' },
    { id: 'M057-1', lesson: 'M057', q: '正常減損（normal loss）とは？', a: '作り方から当然に出ると見込む減損。良い製品の原価に含める' },
    { id: 'M057-2', lesson: 'M057', q: '減損があるときの1単位の原価の式は？', a: '（工程の原価 − 正常減損の処分価値）÷（投入量 − 正常減損）' },
    { id: 'M057-3', lesson: 'M057', q: '異常減損は工程勘定でいくらで評価する？', a: '良い製品と同じ1単位の原価（処分価値ではない）' },
    { id: 'M057-4', lesson: 'M057', q: '正常減損は工程勘定でいくらで書く？', a: '処分価値だけ（見込みの量 × 1単位の処分価値）。なければ $0' },
    { id: 'M057-5', lesson: 'M057', q: '異常減損で損益計算書に出す費用は？', a: '異常減損の額 − その分の処分価値' },
    { id: 'M057-6', lesson: 'M057', q: '異常減損を工程から外す仕訳は？', a: 'Dr Abnormal loss account / Cr Process account' },
    { id: 'M058-1', lesson: 'M058', q: '異常増加（abnormal gain）とは？', a: '実際の減損が正常減損より少なく、予定産出量より多くできた分' },
    { id: 'M058-2', lesson: 'M058', q: '異常増加の仕訳は？', a: 'Dr Process account / Cr Abnormal gain account（1単位の原価で）' },
    { id: 'M058-3', lesson: 'M058', q: '異常増加があるとき、正常減損は工程勘定にいくらで書く？', a: '見込みの量 × 処分価値のまま（実際の減損量ではない）' },
    { id: 'M058-4', lesson: 'M058', q: '異常増加で損益計算書に出す利益は？', a: '異常増加の額 − 売れなくなった処分価値' },
    { id: 'M058-5', lesson: 'M058', q: '異常増加があると1単位の原価は下がる？', a: '下がらない。予定産出量で計算した原価のまま評価する' }
  ]
});
