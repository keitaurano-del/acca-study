(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 112,
  part: 4,
  partTitle: '全部原価計算と直接原価計算',
  lessons: [
    {
      id: 'M047',
      no: 47,
      title: '貢献利益（contribution）という考え方',
      goal: '貢献利益の意味と大切さを説明し、1個あたり・合計の貢献利益と利益を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B4(a)'],
      slides: [
        {
          title: '文化祭のクレープ屋',
          paras: ['文化祭でクレープを1枚400円で売る。材料費は1枚150円。1枚売れるたびに、手元に250円ずつ残る。', 'テントの借り賃 10,000円は、何枚売っても変わらない。40枚売ると 250円 × 40 ＝ 10,000円で、テント代を取り戻せる。41枚目からの250円は、まるごともうけになる。']
        },
        {
          title: '貢献利益（contribution）とは',
          paras: ['売上から変動費（variable costs）をすべて引いた残りを、貢献利益（contribution）という。まず固定費（fixed costs）の回収に「貢献」し、回収しきった後は利益になる。'],
          formula: '貢献利益 ＝ 売上 − 変動費　／　利益 ＝ 貢献利益 − 固定費',
          after: '引く変動費は、製造の変動費だけではない。売れた数に応じて増える販売手数料や送料などの変動販売費（variable selling costs）も入る。'
        },
        {
          title: '椅子工房で確かめる',
          paras: ['椅子工房は椅子を1脚 $50 で売る。固定費は月 $16,000（固定製造間接費 $10,000、固定の販売費・管理費 $6,000）。1脚あたりの変動費は次のとおり。'],
          table: { caption: '1脚あたり', head: ['項目', '$'], rows: [['売価（selling price）', '50'], ['直接材料費（direct materials）', '(12)'], ['直接労務費（direct labour）', '(8)'], ['変動製造間接費（variable production overhead）', '(4)'], ['変動販売費（variable selling cost）', '(6)']], total: ['1脚あたり貢献利益', '20'] }
        },
        {
          title: '$50 の中身と、固定費の回収',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="1脚50ドルのうち30ドルは変動費、20ドルが貢献利益。1,000脚分の貢献利益20,000ドルで固定費16,000ドルを回収し、残り4,000ドルが利益" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">1脚 $50 の中身</text><rect x="20" y="50" width="240" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="140" y="76" text-anchor="middle" font-size="16" fill="var(--ink)">変動費 $30</text><text x="140" y="97" text-anchor="middle" font-size="12.5" fill="var(--quiet)">variable costs</text><rect x="264" y="50" width="156" height="58" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="342" y="76" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">貢献利益 $20</text><text x="342" y="97" text-anchor="middle" font-size="12.5" fill="var(--quiet)">contribution</text><text x="20" y="146" font-size="15" font-weight="600" fill="var(--ink)">1,000脚分の貢献利益 $20,000 の使い道</text><rect x="20" y="160" width="316" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="178" y="193" text-anchor="middle" font-size="15" fill="var(--ink)">固定費 $16,000 を回収</text><rect x="340" y="160" width="80" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="380" y="183" text-anchor="middle" font-size="15" fill="var(--ink)">利益</text><text x="380" y="204" text-anchor="middle" fill="var(--ink)">$4,000</text><text x="220" y="246" text-anchor="middle" fill="var(--ink)">固定費を回収しきると、残りが利益になる</text></svg>`,
          caption: '1脚の貢献利益 $20 を売れた数だけ集めて、まず固定費を払い、残りが利益になる。'
        },
        {
          title: '例題: 売る数が変わると利益は？',
          example: {
            problem: '椅子工房（1脚あたり貢献利益 $20、固定費 月 $16,000）。今月は 1,000脚売った。来月は 1,200脚売る見込み。それぞれの月の利益は？',
            steps: ['今月の貢献利益: $20 × 1,000 ＝ $20,000', '今月の利益: $20,000 − $16,000 ＝ $4,000', '来月の貢献利益: $20 × 1,200 ＝ $24,000', '来月の利益: $24,000 − $16,000 ＝ $8,000', '確かめ: 増えた200脚 × $20 ＝ $4,000 だけ利益が増えた'],
            answer: '今月 $4,000、来月 $8,000。利益の増え方は「増えた数 × 1脚あたり貢献利益」'
          }
        },
        {
          title: 'なぜ？ 1個あたりの利益では考えない',
          paras: ['1,000脚売った月の利益は、1脚あたり $4（$4,000 ÷ 1,000）。でも 1,200脚なら1脚 $6.67、800脚なら $0 になる。固定費を個数で割った額が、売る数によって変わるから。', '1脚あたり貢献利益 $20 は、何脚売っても同じ。だから「あと何脚売れば利益がいくら増えるか」がすぐ分かる。損益分岐点や、限られた材料をどの製品に回すかといった後の部の判断も、すべて貢献利益を使う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '変動販売費を引き忘れて、製造の変動費だけを引く（$50 − $24 ＝ $26 は多すぎる）。逆に、固定費を個数で割った額（1脚 $16）まで引くと、それは貢献利益ではなく1脚あたりの利益（$4）になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['貢献利益 ＝ 売上 − すべての変動費（製造の変動費＋変動販売費）', '利益 ＝ 貢献利益の合計 − 固定費', '1個あたり貢献利益は数量で変わらない。1個多く売ると、利益はその分だけ増える']
        },
        {
          title: '英単語',
          words: [
            ['contribution', 'コントリビューション', '貢献利益（売上 − 変動費）'],
            ['contribution per unit', '', '1単位あたり貢献利益（売価 − 1単位あたり変動費）'],
            ['variable cost', 'ヴァリアブル コスト', '変動費（数量に比例して増える費用）'],
            ['fixed cost', 'フィクスト コスト', '固定費（数量が変わっても一定の費用）'],
            ['marginal cost', 'マージナル コスト', '限界費用（1単位多く作る・売るときに増える費用＝1単位あたり変動費）'],
            ['selling price', '', '売価'],
            ['variable selling cost', '', '変動販売費（販売手数料・配送費など）']
          ]
        }
      ],
      quiz: [
        { q: 'A product sells for $40 per unit. Variable production cost is $18 per unit, variable selling cost is $4 per unit and fixed production overhead is absorbed at $6 per unit. What is the contribution per unit?', type: 'number', answer: 18, unit: '$', explain: '$40 − $18 − $4 ＝ $18。変動販売費も変動費なので引く（引き忘れると $22）。固定製造間接費の $6 は固定費なので引かない（引くと $12）。' },
        { q: 'Which of the following describes contribution?', choices: ['Sales revenue less all production costs', 'Sales revenue less fixed costs', 'Sales revenue less all variable costs', 'Gross profit less selling and administration costs'], answer: 2, explain: '貢献利益は売上からすべての変動費を引いた残り。「all production costs」を引くと固定の製造原価まで引くことになり、売上総利益の考え方になる。「fixed costs」だけを引く答えは、変動費を引いていない。「Gross profit less selling and administration costs」は最終的な利益に近いもので、貢献利益ではない。' },
        { q: '1脚あたり貢献利益が $20、固定費が月 $16,000 の椅子工房。ある月に 1,500脚売った。その月の利益はいくら？', type: 'number', answer: 14000, unit: '$', explain: '貢献利益 $20 × 1,500 ＝ $30,000。固定費を引いて $30,000 − $16,000 ＝ $14,000。' },
        { q: '同じ椅子工房で、販売数が 1,000脚から 1,100脚に増えた。売価・変動費・固定費は変わらない。利益はいくら増える？', choices: ['$400', '$2,000', '$5,000', '$0'], answer: 1, explain: '増えた100脚 × 1脚あたり貢献利益 $20 ＝ $2,000。$400 は1,000脚のときの「1脚あたり利益 $4」をかけた答え。固定費は増えないので、1脚あたり利益で考えると少なすぎる。$5,000 は売価 $50 をそのままかけた答えで、変動費を引き忘れている。$0 は「固定費があるから利益は変わらない」と考えた答え。固定費は増えないので、増えた貢献利益はそのまま利益になる。' },
        { q: 'Total sales revenue is $200,000, total variable costs are $120,000 and total fixed costs are $50,000. What is the total contribution?', choices: ['$30,000', '$150,000', '$80,000'], answer: 2, explain: '$200,000 − $120,000 ＝ $80,000。$30,000 は固定費まで引いた利益。$150,000 は固定費だけを引いた答えで、変動費を引いていない。' }
      ]
    },
    {
      id: 'M048',
      no: 48,
      title: '全部原価計算と直接原価計算: 製品原価に何を入れる？',
      goal: '全部原価計算と直接原価計算で、製品原価・在庫の金額・1個あたりの利益を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B4(b)', 'K2:B4(f)'],
      slides: [
        {
          title: '売れ残ったパンの「原価」は？',
          paras: ['家でパンを焼いて売る。粉やバターは1個 100円。オーブンのリース代は月 30,000円で、焼く数に関係なく決まっている。今月は300個焼いた。', '売れ残ったパンの原価はいくら？ 材料の100円だけと見るか、リース代も1個 100円（30,000円 ÷ 300個）ずつ分けて200円と見るか。この2つの見方が、直接原価計算と全部原価計算。']
        },
        {
          title: '違うのは固定製造間接費の扱いだけ',
          list: ['全部原価計算（absorption costing）: 製造原価をすべて製品原価（product cost）にする。固定製造間接費（fixed production overhead）も、配賦率で1個ずつ製品に配賦する', '直接原価計算（marginal costing）: 変動製造原価（直接材料費・直接労務費・変動製造間接費）だけを製品原価にする。固定製造間接費は、発生した期の費用（期間費用、period cost）にする'],
          after: '販売費・一般管理費（non-production costs）は、どちらの方法でも製品原価に入れない。変動でも固定でも、その期の費用になる。'
        },
        {
          title: '製品原価に入れるもの',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="直接原価計算の製品原価は変動製造原価24ドル、全部原価計算は固定製造間接費10ドルを加えた34ドル。販売費と一般管理費はどちらも期間費用" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">椅子1脚の製品原価</text><rect x="20" y="50" width="200" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="76" text-anchor="middle" font-size="15" fill="var(--ink)">直接材料費 $12</text><rect x="20" y="94" width="200" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="120" text-anchor="middle" font-size="15" fill="var(--ink)">直接労務費 $8</text><rect x="20" y="138" width="200" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="164" text-anchor="middle" font-size="15" fill="var(--ink)">変動製造間接費 $4</text><rect x="20" y="182" width="200" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="120" y="208" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">固定製造間接費 $10</text><path d="M232 52 h8 v124 h-8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="248" y="108" font-size="15" font-weight="600" fill="var(--ink)">直接原価</text><text x="248" y="130" fill="var(--ink)">$24</text><path d="M318 52 h8 v168 h-8" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="334" y="130" font-size="15" font-weight="600" fill="var(--ink)">全部原価</text><text x="334" y="152" fill="var(--ink)">$34</text><rect x="20" y="244" width="200" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="120" y="270" text-anchor="middle" font-size="15" fill="var(--quiet)">販売費・一般管理費</text><text x="232" y="270" fill="var(--ink)">どちらも期間費用</text><text x="220" y="316" text-anchor="middle" font-size="15" fill="var(--ink)">違いは固定製造間接費だけ</text></svg>`,
          caption: '直接原価計算は上の3つ、全部原価計算は4つ全部を製品原価にする。'
        },
        {
          title: '例題: 椅子1脚の製品原価',
          example: {
            problem: '椅子工房の1脚あたり変動製造原価は、直接材料費 $12、直接労務費 $8、変動製造間接費 $4。固定製造間接費の予算は月 $10,000、予算の生産量（正常な生産量）は月 1,000脚。変動販売費は1脚 $6。2つの方法で、1脚の製品原価は？',
            steps: ['直接原価計算: $12 ＋ $8 ＋ $4 ＝ $24（変動販売費 $6 は製造原価ではないので入れない）', '固定製造間接費の配賦率（overhead absorption rate）: $10,000 ÷ 1,000脚 ＝ 1脚 $10', '全部原価計算: $24 ＋ $10 ＝ $34', '2つの差は、1脚あたり固定製造間接費の $10 だけ'],
            answer: '直接原価計算 $24、全部原価計算 $34'
          }
        },
        {
          title: '期末在庫の金額が変わる',
          paras: ['月末に200脚が売れ残った。在庫（inventory）の金額は、方法によって違う。'],
          table: { caption: '期末在庫 200脚', head: ['方法', '1脚 $', '合計 $'], rows: [['直接原価計算', '24', '4,800'], ['全部原価計算', '34', '6,800']], total: ['差', '10', '2,000'] },
          after: '全部原価計算では、固定製造間接費 $2,000（200脚 × $10）が在庫の中に入ったまま、来月に繰り越される。直接原価計算では、この $2,000 も今月の費用になる。'
        },
        {
          title: '1脚あたりの利益の見え方',
          table: { caption: '1脚あたり', head: ['$', '全部原価計算', '直接原価計算'], rows: [['売価', '50', '50'], ['製品原価', '(34)', '(24)'], ['変動販売費', '—', '(6)']], total: ['途中の利益', '売上総利益 16', '貢献利益 20'] },
          after: '売上総利益（gross profit）$16 からは販売費・一般管理費が、貢献利益 $20 からは固定費が、まだ引かれていない。予算どおり1,000脚作って全部売れた月なら、最後の利益はどちらも1脚 $4 になる（$16 − $6 − 固定販売費・管理費 $6、または $20 − 固定費 $16）。'
        },
        {
          title: 'なぜ？ 2つの方法がある理由',
          paras: ['全部原価計算の考え: 工場の家賃や機械の減価償却も、製品を作るために使った。だから製品の原価の一部。K1 で学んだ IAS 2（棚卸資産）も、財務諸表の在庫には、正常な生産量をもとに配賦した固定製造間接費を含めるよう求めている。', '直接原価計算の考え: 固定製造間接費は、作っても作らなくても毎月同じだけかかる。1脚多く作っても増えない。だから製品ではなく期間にかかる費用と見る。社内の意思決定には、こちらが使いやすい。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '変動販売費は変動費だが製造原価ではない。直接原価計算でも製品原価（在庫の金額）には入れない。また、固定製造間接費の配賦率は予算の固定製造間接費 ÷ 予算（正常）の生産量で出す。販売数で割らない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接原価計算の製品原価 ＝ 変動製造原価（直接材料費・直接労務費・変動製造間接費）', '全部原価計算の製品原価 ＝ 変動製造原価 ＋ 固定製造間接費の配賦額', '販売費・一般管理費は、どちらの方法でも製品原価に入れない（期間費用）']
        },
        {
          title: '英単語',
          words: [
            ['absorption costing', 'アブゾープション コスティング', '全部原価計算'],
            ['marginal costing', 'マージナル コスティング', '直接原価計算（variable costing とも）'],
            ['product cost', '', '製品原価（在庫の金額になる原価）'],
            ['period cost', '', '期間費用（発生した期の費用にする原価）'],
            ['fixed production overhead', '', '固定製造間接費'],
            ['overhead absorption rate (OAR)', '', '配賦率'],
            ['full production cost', '', '全部製造原価（全部原価計算の1単位の原価）'],
            ['non-production costs', '', '販売費・一般管理費などの製造以外の費用']
          ]
        }
      ],
      quiz: [
        { q: 'A company makes one product. Direct materials cost $10 per unit, direct labour $6 per unit and variable production overhead $4 per unit. Budgeted fixed production overhead is $50,000 and budgeted production is 10,000 units. Variable selling costs are $3 per unit. What is the cost per unit under absorption costing?', type: 'number', answer: 25, unit: '$', explain: '変動製造原価 $10 ＋ $6 ＋ $4 ＝ $20。固定製造間接費の配賦率 $50,000 ÷ 10,000 ＝ $5。合計 $25。変動販売費 $3 は製造原価ではないので入れない（入れると $28）。' },
        { q: 'Using the same data, what is the cost per unit under marginal costing?', choices: ['$23', '$25', '$20', '$28'], answer: 2, explain: '直接原価計算は変動製造原価だけ: $10 ＋ $6 ＋ $4 ＝ $20。$23 は変動販売費まで入れた答え。$25 は全部原価計算の原価。$28 は全部原価に変動販売費まで足した答え。' },
        { q: 'Which costs are included in the value of inventory under marginal costing?', choices: ['All production costs, both fixed and variable', 'All variable costs, including variable selling costs', 'Direct materials and direct labour only', 'Direct materials, direct labour and variable production overhead only'], answer: 3, explain: '直接原価計算の在庫は変動製造原価（直接材料費・直接労務費・変動製造間接費）で評価する。「All production costs」は固定製造間接費も入れる全部原価計算。「including variable selling costs」は販売費を入れていて誤り（販売費は製造原価ではない）。「Direct materials and direct labour only」は変動製造間接費を落としている。' },
        { q: '全部原価計算で、固定の販売費・一般管理費はどう扱う？', choices: ['配賦率で製品に配賦し、在庫に含める', '発生した期の費用にする（製品原価に入れない）', '直接原価計算だけで費用にする', '変動費として貢献利益の計算で引く'], answer: 1, explain: '販売費・一般管理費は製造原価ではないので、全部原価計算でも製品原価に入れない。在庫に入れるのは製造原価だけ。' },
        { q: '椅子工房（直接原価計算の製品原価 1脚 $24、全部原価計算 1脚 $34）の期末在庫が 300脚あった。全部原価計算の在庫の金額は、直接原価計算よりいくら大きい？', type: 'number', answer: 3000, unit: '$', explain: '1脚あたりの差は固定製造間接費 $10。300脚 × $10 ＝ $3,000。全部原価計算 $10,200、直接原価計算 $7,200。' },
        { q: 'A product has a selling price of $80 per unit. Variable production cost is $35 per unit, fixed production overhead is absorbed at $15 per unit and variable selling cost is $5 per unit. What is the gross profit per unit under absorption costing?', choices: ['$25', '$45', '$40', '$30'], answer: 3, explain: '売上総利益は売価 − 全部製造原価: $80 − ($35 ＋ $15) ＝ $30。$25 は変動販売費まで引いた答え（販売費は売上総利益の下で引く）。$45 は固定製造間接費を引いていない。$40 は貢献利益（$80 − $35 − $5）。' }
      ]
    },
    {
      id: 'M049',
      no: 49,
      title: '在庫が増減すると2つの利益がずれる',
      goal: '在庫の増減によって2つの方法の利益がどちらにいくらずれるかを説明し、計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B4(b)'],
      slides: [
        {
          title: '作りだめしたパンと、オーブン代',
          paras: ['オーブンのリース代は月 30,000円。今月パンを300個焼いたが、売れたのは200個。残り100個は冷凍して来月売る。', '全部原価計算では、冷凍したパン1個にリース代 100円が付いたまま来月へ行く。今月の費用になるリース代は 200個分の 20,000円だけ。直接原価計算では、30,000円が全部今月の費用。だから今月のもうけは、全部原価計算の方が 10,000円大きく見える。']
        },
        {
          title: '椅子工房の3か月',
          table: { caption: '生産と販売（脚）', head: ['月', '生産', '販売'], rows: [['1月', '1,000', '1,000'], ['2月', '1,000', '800'], ['3月', '1,000', '1,200']] },
          after: '1月初めの在庫はゼロ。2月末に200脚が残り、3月に売れて在庫はゼロに戻る。売価 $50、変動製造原価 $24、変動販売費 $6、固定製造間接費 月 $10,000（配賦率 1脚 $10）、固定販売費・管理費 月 $6,000。毎月予算どおり1,000脚作るので、配賦差異は出ない。'
        },
        {
          title: '例題: 2月の利益を2つの方法で出す',
          example: {
            problem: '2月: 生産 1,000脚、販売 800脚、期首在庫なし。全部原価計算と直接原価計算で、それぞれ利益を出す。',
            steps: ['直接原価計算: 貢献利益 $20 × 800 ＝ $16,000', '固定費をすべて引く: $16,000 − $10,000 − $6,000 ＝ $0', '全部原価計算: 売上総利益 ($50 − $34) × 800 ＝ $12,800', '販売費・管理費を引く: 変動 $6 × 800 ＝ $4,800、固定 $6,000 → $12,800 − $4,800 − $6,000 ＝ $2,000', '差: $2,000 − $0 ＝ $2,000。在庫の増加 200脚 × $10 と同じ'],
            answer: '全部原価計算 $2,000、直接原価計算 $0'
          }
        },
        {
          title: '2月の固定製造間接費はどこへ？',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="全部原価計算では2月の固定製造間接費10,000ドルのうち8,000ドルが2月の売上原価、2,000ドルが期末在庫として3月へ。直接原価計算では10,000ドル全額が2月の費用" font-size="14"><text x="20" y="32" font-size="16" font-weight="600" fill="var(--ink)">2月の固定製造間接費 $10,000 の行き先</text><text x="20" y="70" font-size="15" font-weight="600" fill="var(--ink)">全部原価計算</text><rect x="20" y="82" width="250" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="145" y="108" text-anchor="middle" font-size="15" fill="var(--ink)">2月の売上原価 $8,000</text><text x="145" y="129" text-anchor="middle" font-size="12.5" fill="var(--quiet)">800脚 × $10</text><rect x="276" y="82" width="144" height="58" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="348" y="108" text-anchor="middle" font-weight="600" fill="var(--ink)">期末在庫 $2,000</text><text x="348" y="129" text-anchor="middle" font-size="12.5" fill="var(--quiet)">→ 3月の費用に</text><text x="20" y="180" font-size="15" font-weight="600" fill="var(--ink)">直接原価計算</text><rect x="20" y="192" width="400" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="226" text-anchor="middle" font-size="15" fill="var(--ink)">2月の費用 $10,000（全額）</text><text x="220" y="282" text-anchor="middle" fill="var(--ink)">在庫が増えた月は、全部原価計算の費用が少ない</text></svg>`,
          caption: '全部原価計算の2月の費用は $8,000、直接原価計算は $10,000。この $2,000 の差が利益の差になる。'
        },
        {
          title: '3か月の利益を並べる',
          table: { caption: '利益', head: ['月', '全部原価 $', '直接原価 $'], rows: [['1月（在庫そのまま）', '4,000', '4,000'], ['2月（在庫 ＋200）', '2,000', '0'], ['3月（在庫 −200）', '6,000', '8,000']], total: ['合計', '12,000', '12,000'] },
          after: '在庫が増えた2月は全部原価計算の利益が大きく、在庫が減った3月は直接原価計算の利益が大きい。3か月の合計は同じ。'
        },
        {
          title: 'なぜ？ 3月は逆になる',
          paras: ['3月には、2月に残った200脚も売れる。全部原価計算では、在庫と一緒に繰り越した固定製造間接費 $2,000 が3月の売上原価に入る。3月の費用になる固定製造間接費は $10,000 ＋ $2,000 ＝ $12,000 で、直接原価計算（$10,000）より $2,000 多い。', 'ずれているのは「どの月の費用にするか」というタイミングだけ。3か月で費用になる固定製造間接費は、どちらも同じ $30,000。だから在庫がゼロに戻れば、合計の利益は一致する。']
        },
        {
          title: '差の向きと大きさ',
          formula: '利益の差 ＝ 在庫の増減（個数）× 1個あたり固定製造間接費',
          table: { caption: '利益が大きいのは', head: ['在庫', '利益が大きい方法'], rows: [['増える（生産 > 販売）', '全部原価計算'], ['減る（生産 < 販売）', '直接原価計算'], ['変わらない（生産 ＝ 販売）', '同じ']] },
          after: '2つの利益を突き合わせる調整表の作り方は、次の次の M051 で学ぶ。'
        },
        {
          title: '作りすぎると利益が増えて見える',
          paras: ['全部原価計算では、売れなくても多く作れば、固定製造間接費を在庫に入れて来期へ送れる。今期の利益は大きく見える。利益で評価される管理者が、必要以上に作る動機になってしまう。', '直接原価計算の利益は、生産量ではなく販売量で動く。売れれば増え、売れなければ減るので、経営者の感覚と合いやすい。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '差の計算に1個あたりの全部原価（$34）や変動製造原価（$24）を使わない。2つの方法で違うのは固定製造間接費だけなので、かけるのは1個あたり固定製造間接費（$10）。向きも逆にしやすい。在庫が増えたら全部原価計算の利益の方が大きい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['在庫が増える期は全部原価計算の利益が大きく、減る期は直接原価計算の利益が大きい', '利益の差 ＝ 在庫の増減（個数）× 1個あたり固定製造間接費', '差はタイミングだけ。在庫がゼロに戻れば、合計の利益は同じ']
        },
        {
          title: '英単語',
          words: [
            ['opening inventory / closing inventory', '', '期首在庫 / 期末在庫'],
            ['increase in inventory', '', '在庫の増加（生産 > 販売）'],
            ['decrease in inventory', '', '在庫の減少（生産 < 販売）'],
            ['carried forward', 'キャリード フォワード', '次の期に繰り越される'],
            ['profit determination', '', '利益の計算（利益の決まり方）'],
            ['inventory valuation', '', '在庫の評価（在庫の金額の決め方）']
          ]
        }
      ],
      quiz: [
        { q: 'In a period, production was 12,000 units and sales were 10,000 units. Which of the following statements is correct?', choices: ['Marginal costing profit will be higher than absorption costing profit', 'Absorption costing profit will be higher than marginal costing profit', 'Both methods will report the same profit', 'The difference cannot be determined without knowing the selling price'], answer: 1, explain: '在庫が2,000個増える。全部原価計算では固定製造間接費の一部が期末在庫に入って来期へ繰り越されるので、今期の費用が少なく、利益が大きい。差は在庫の増減と固定製造間接費だけで決まり、売価は関係ない。' },
        { q: 'A company uses a fixed production overhead absorption rate of $8 per unit. Opening inventory was 1,000 units and closing inventory was 1,600 units. By how much will the absorption costing profit differ from the marginal costing profit?', type: 'number', answer: 4800, unit: '$', explain: '在庫の増加 600個 × $8 ＝ $4,800（在庫が増えたので全部原価計算の利益が大きい）。期末在庫だけで 1,600 × $8 ＝ $12,800 とするのは誤り。期首在庫に入っていた固定費も今期に費用になるので、増減で考える。' },
        { q: '今期、在庫が500個減った。1個あたり固定製造間接費の配賦額は $6。正しいのは？', choices: ['全部原価計算の利益が $3,000 大きい', '2つの利益は同じ', '直接原価計算の利益が $3,000 大きい', '直接原価計算の利益が $500 大きい'], answer: 2, explain: '在庫が減ると、全部原価計算では期首在庫と一緒に繰り越されてきた固定費も今期の費用になる。だから直接原価計算の利益の方が 500 × $6 ＝ $3,000 大きい。$500 は個数のままで、固定費をかけ忘れている。' },
        { q: 'The marginal costing profit for a period was $40,000. Inventory fell by 2,000 units during the period. The fixed production overhead absorption rate is $5 per unit. What was the absorption costing profit?', choices: ['$50,000', '$42,000', '$40,000', '$30,000'], answer: 3, explain: '在庫が減ったので全部原価計算の利益は小さい: $40,000 − 2,000 × $5 ＝ $30,000。$50,000 は向きを逆にした答え。$42,000 は個数をそのまま足した答え。$40,000 は在庫が変わると利益がずれることを忘れた答え。' },
        { q: '3年間、最初の期首在庫も最後の期末在庫もゼロだった。3年間の合計の利益は？（売価・原価・配賦率は毎年同じ）', choices: ['全部原価計算の方が大きい', '2つの方法で同じ', '直接原価計算の方が大きい', '固定費が多い年がある方が大きい'], answer: 1, explain: '差は固定製造間接費をどの期の費用にするかというタイミングだけ。在庫がゼロからゼロに戻れば、費用になる固定製造間接費の総額は同じなので、合計の利益も同じになる。' },
        { q: 'In a period, absorption costing profit was $62,000 and marginal costing profit was $50,000. The fixed production overhead absorption rate was $4 per unit. Which of the following is correct?', choices: ['Inventory increased by 3,000 units', 'Inventory decreased by 3,000 units', 'Inventory increased by 12,000 units', 'Inventory decreased by 12,000 units'], answer: 0, explain: '差 $12,000 ÷ 1個あたり固定製造間接費 $4 ＝ 3,000個。全部原価計算の利益の方が大きいので、在庫は増えた。12,000個は金額の差を個数と取り違えた答え。「減った」は向きが逆。' }
      ]
    },
    {
      id: 'M050',
      no: 50,
      title: '損益計算書を2つの形式で作る',
      goal: '全部原価計算と直接原価計算の形式で損益計算書を作り、2つの形式の違いと長所・短所を説明できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B4(c)', 'K2:B4(e)'],
      slides: [
        {
          title: '家計簿の2つの分け方',
          paras: ['家計の出費は「食費・住居費・交通費」のように何に使ったかで分けられる。「毎月決まった額か、使うほど増えるか」で分けることもできる。合計は同じでも、分け方で見えるものが変わる。', '損益計算書も同じ。全部原価計算は費用を機能（製造・販売・管理）で分け、直接原価計算は動き（変動・固定）で分ける。']
        },
        {
          title: '2つの形式の骨組み',
          table: { caption: '上から順に計算する', head: ['段階', '全部原価計算', '直接原価計算'], rows: [['1', '売上', '売上'], ['2', '− 売上原価（全部原価）', '− 変動売上原価'], ['3', '± 配賦差異', '− 変動販売費'], ['4', '＝ 売上総利益', '＝ 貢献利益'], ['5', '− 販売費・一般管理費（変動も固定も）', '− 固定費（固定製造間接費は実際額）']], total: ['6', '＝ 利益', '＝ 利益'] },
          after: '売上原価は「期首在庫 ＋ 当期の製造原価 − 期末在庫」で出す。在庫は、全部原価計算では全部原価、直接原価計算では変動製造原価で評価する。'
        },
        {
          title: '例題の準備: 4月の配賦差異',
          paras: ['椅子工房の4月: 期首在庫 100脚、生産 900脚、販売 800脚、期末在庫 200脚。売価 $50、変動製造原価 $24、変動販売費 $6、固定製造間接費は予算も実際も $10,000（予算の生産量 1,000脚、配賦率 $10）、固定販売費・管理費 $6,000。'],
          example: {
            problem: '4月の固定製造間接費の配賦差異は？',
            steps: ['配賦額: 実際の生産量 900脚 × $10 ＝ $9,000', '実際の発生額: $10,000', '配賦額が $1,000 足りない → 過小配賦（under-absorption）$1,000', '全部原価計算の損益計算書では、売上原価に $1,000 を足す（利益が減る）'],
            answer: '過小配賦 $1,000'
          }
        },
        {
          title: '全部原価計算の損益計算書',
          table: { caption: '4月（1脚の全部原価 $34）', head: ['項目', '$', '$'], rows: [['売上（800 × $50）', '', '40,000'], ['期首在庫（100 × $34）', '3,400', ''], ['製造原価（900 × $34）', '30,600', ''], ['期末在庫（200 × $34）', '(6,800)', ''], ['過小配賦', '1,000', ''], ['売上原価', '', '(28,200)'], ['売上総利益', '', '11,800'], ['変動販売費（800 × $6）', '', '(4,800)'], ['固定販売費・管理費', '', '(6,000)']], total: ['利益', '', '1,000'] },
          after: '過小配賦を足す前の売上原価は $27,200（800脚 × $34）。'
        },
        {
          title: '直接原価計算の損益計算書',
          table: { caption: '4月（1脚の変動製造原価 $24）', head: ['項目', '$', '$'], rows: [['売上（800 × $50）', '', '40,000'], ['期首在庫（100 × $24）', '2,400', ''], ['変動製造原価（900 × $24）', '21,600', ''], ['期末在庫（200 × $24）', '(4,800)', ''], ['変動売上原価', '', '(19,200)'], ['変動販売費（800 × $6）', '', '(4,800)'], ['貢献利益', '', '16,000'], ['固定製造間接費（実際額）', '', '(10,000)'], ['固定販売費・管理費', '', '(6,000)']], total: ['利益', '', '0'] },
          after: '直接原価計算には配賦差異が出ない。固定製造間接費を配賦せず、実際の発生額をそのまま引くから。'
        },
        {
          title: '2つの利益を確かめる',
          paras: ['全部原価計算 $1,000、直接原価計算 $0。差 $1,000 は、在庫の増加 100脚（100 → 200）× $10 と一致する。', '4月の費用になった固定製造間接費は、全部原価計算では売上原価の中の $8,000（800脚 × $10）＋ 過小配賦 $1,000 ＝ $9,000。直接原価計算は $10,000。この差 $1,000 が利益の差になる。過小配賦そのものは、利益の差の原因ではない。', '差を出すときにかけるのは、予算で決めた配賦率 $10。実際の $10,000 ÷ 900脚（約 $11.11）は使わない。']
        },
        {
          title: 'なぜ？ 形式が違う理由',
          table: { caption: '2つの形式のちがい', head: ['項目', '全部原価計算', '直接原価計算'], rows: [['費用の分け方', '機能（製造・販売・管理）', '動き（変動・固定）'], ['途中の利益', '売上総利益', '貢献利益'], ['固定製造間接費', '製品原価（在庫に入る）', '期間費用（全額その期）'], ['在庫の金額', '全部製造原価', '変動製造原価'], ['配賦差異', '出る（調整する）', '出ない']] },
          after: '全部原価計算は「製品1個にいくらかかったか」、直接原価計算は「1個売るといくら増えるか」を見せるための形式。'
        },
        {
          title: '長所と短所',
          list: ['直接原価計算の長所: 利益が販売量に合わせて動く。貢献利益が見えるので、損益分岐点などの意思決定に使える。固定費を製品に配賦する手間がなく、配賦差異も出ない', '全部原価計算の長所: 外部報告の基準 IAS 2 に合う。固定製造原価も生産に必要なコストとして製品に負担させる（全部原価をもとに売価を決めれば、長い目で見て固定費も回収できる）。季節商品のように在庫を作りためる事業でも、作った期に利益が大きく落ち込まない', '全部原価計算の短所: 在庫を積み増すと、今期の利益を大きく見せられる']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '全部原価計算の売上原価は、売れた数 × 1個あたり全部原価になる。作った数の製造原価をそのまま引かない（在庫で調整する）。過小配賦は売上原価に足し（利益が減る）、過大配賦は引く（利益が増える）。直接原価計算では、固定製造間接費は配賦額ではなく実際の発生額を引く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['全部原価計算: 売上 − 売上原価（全部原価）± 配賦差異 ＝ 売上総利益 − 販売費・一般管理費 ＝ 利益', '直接原価計算: 売上 − 変動売上原価 − 変動販売費 ＝ 貢献利益 − 固定費（実際額）＝ 利益', '過小配賦は売上原価に足し、過大配賦は引く。直接原価計算には配賦差異が出ない']
        },
        {
          title: '英単語',
          words: [
            ['gross profit', 'グロス プロフィット', '売上総利益（売上 − 売上原価）'],
            ['cost of sales', 'コスト オブ セールス', '売上原価'],
            ['under-absorbed overhead', '', '過小配賦（配賦額 < 実際額。利益を減らす）'],
            ['over-absorbed overhead', '', '過大配賦（配賦額 > 実際額。利益を増やす）'],
            ['profit statement', '', '損益計算書（管理会計で使う呼び方）'],
            ['selling and administration costs', '', '販売費・一般管理費'],
            ['variable cost of sales', '', '変動売上原価']
          ]
        }
      ],
      quiz: [
        { q: 'A company makes one product with a selling price of $30 per unit and a variable production cost of $12 per unit. Budgeted fixed production overhead is $40,000 and budgeted production is 10,000 units. In the period, actual production was 11,000 units, sales were 9,000 units and actual fixed production overhead was $40,000. Fixed selling and administration costs were $15,000. There was no opening inventory. What was the profit under absorption costing?', type: 'number', answer: 115000, unit: '$', explain: '配賦率 $40,000 ÷ 10,000 ＝ $4、全部原価 $16。売上 9,000 × $30 ＝ $270,000。売上原価 9,000 × $16 ＝ $144,000。配賦額 11,000 × $4 ＝ $44,000 > 実際 $40,000 で過大配賦 $4,000 → 売上原価から引いて $140,000。売上総利益 $130,000 − $15,000 ＝ $115,000。過大配賦を無視すると $111,000。' },
        { q: 'Using the same data, what was the profit under marginal costing?', choices: ['$115,000', '$147,000', '$107,000', '$122,000'], answer: 2, explain: '貢献利益 9,000 × ($30 − $12) ＝ $162,000。固定製造間接費の実際額 $40,000 と固定販売費・管理費 $15,000 を引いて $107,000。全部原価計算との差 $8,000 は、在庫の増加 2,000個 × $4。$115,000 は全部原価計算の利益。$147,000 は固定製造間接費を、$122,000 は固定販売費・管理費を引き忘れた答え。' },
        { q: 'Which of the following is an argument in favour of marginal costing?', choices: ['It complies with IAS 2 Inventories for external financial reporting', 'Fixed production costs are treated as part of the cost of producing output', 'Building up inventory increases reported profit', 'Profit depends on sales volume, not on production volume'], answer: 3, explain: '直接原価計算の利益は販売量だけで動く。「IAS 2 に合う」と「固定製造原価も製品の原価の一部とする」は全部原価計算の長所。「在庫を積み増すと利益が増える」は全部原価計算で起きることで、直接原価計算では在庫を増やしても利益は増えない。' },
        { q: '全部原価計算の損益計算書で、固定製造間接費の過小配賦（under-absorption）はどう扱う？', choices: ['売上原価から引く（利益が増える）', '売上原価に足す（利益が減る）', '期末在庫に足す', '直接原価計算の損益計算書でだけ調整する'], answer: 1, explain: '過小配賦は、製品に配賦した額が実際の発生額より少ないこと。足りない分を売上原価に足して、費用を実際額に合わせる。過大配賦なら引く。直接原価計算は実際額をそのまま引くので、配賦差異は出ない。' },
        { q: '直接原価計算の損益計算書で、固定製造間接費はどう扱う？', choices: ['配賦率 × 実際の生産量を、売上原価に入れる', '期末在庫に含めて、来期に繰り越す', '実際の発生額を全額、その期の固定費として貢献利益から引く', '販売数に応じて、変動売上原価に入れる'], answer: 2, explain: '直接原価計算では固定製造間接費は期間費用。配賦せず、実際額を貢献利益の下でまとめて引く。「配賦率 × 実際の生産量」や「期末在庫に含める」は全部原価計算の扱い。固定費なので、販売数に応じて変動売上原価に入れることもしない。' },
        { q: 'In a marginal costing profit statement, which figure is calculated by deducting all variable costs from sales revenue?', choices: ['Gross profit', 'Contribution', 'Net profit', 'Cost of sales'], answer: 1, explain: '売上 − すべての変動費（変動売上原価と変動販売費）＝ 貢献利益。売上総利益は全部原価計算の形式で、売上 − 全部原価の売上原価で出す。' }
      ]
    }
  ],
  cards: [
    { id: 'M047-1', lesson: 'M047', q: '貢献利益（contribution）の式は？', a: '売上 − すべての変動費（製造の変動費＋変動販売費）' },
    { id: 'M047-2', lesson: 'M047', q: '貢献利益と利益の関係は？', a: '利益 ＝ 貢献利益の合計 − 固定費' },
    { id: 'M047-3', lesson: 'M047', q: '販売数が1個増えると、利益はいくら増える？', a: '1個あたり貢献利益の分だけ（固定費は変わらないため）' },
    { id: 'M047-4', lesson: 'M047', q: 'なぜ1個あたりの利益ではなく貢献利益で考える？', a: '固定費 ÷ 個数は販売数で変わるが、1個あたり貢献利益は一定だから' },
    { id: 'M047-5', lesson: 'M047', q: '売価 $50、変動製造原価 $24、変動販売費 $6。1個あたり貢献利益は？', a: '$20（$50 − $24 − $6）' },
    { id: 'M048-1', lesson: 'M048', q: '直接原価計算（marginal costing）の製品原価は？', a: '変動製造原価: 直接材料費＋直接労務費＋変動製造間接費' },
    { id: 'M048-2', lesson: 'M048', q: '全部原価計算（absorption costing）の製品原価は？', a: '変動製造原価 ＋ 固定製造間接費の配賦額' },
    { id: 'M048-3', lesson: 'M048', q: '固定製造間接費の配賦率の出し方は？', a: '予算の固定製造間接費 ÷ 予算（正常）の生産量' },
    { id: 'M048-4', lesson: 'M048', q: '販売費・一般管理費は製品原価に入る？', a: 'どちらの方法でも入らない。発生した期の費用（期間費用）' },
    { id: 'M048-5', lesson: 'M048', q: '外部報告（IAS 2）の在庫に合うのはどちらの方法？', a: '全部原価計算（固定製造間接費も在庫に含める）' },
    { id: 'M048-6', lesson: 'M048', q: '2つの方法で1個あたりの製品原価が違うのは、どの費用の分？', a: '1個あたり固定製造間接費の分だけ' },
    { id: 'M049-1', lesson: 'M049', q: '在庫が増えた期（生産 > 販売）、利益が大きいのは？', a: '全部原価計算（固定製造間接費の一部が在庫で来期へ繰り越される）' },
    { id: 'M049-2', lesson: 'M049', q: '在庫が減った期（生産 < 販売）、利益が大きいのは？', a: '直接原価計算' },
    { id: 'M049-3', lesson: 'M049', q: '2つの利益の差の式は？', a: '在庫の増減（個数）× 1個あたり固定製造間接費' },
    { id: 'M049-4', lesson: 'M049', q: '在庫がゼロからゼロに戻る期間の合計利益は？', a: '2つの方法で同じ。差はタイミングだけ' },
    { id: 'M049-5', lesson: 'M049', q: '全部原価計算の弱点として試験に出る点は？', a: '売れなくても多く作れば、今期の利益を大きく見せられる' },
    { id: 'M050-1', lesson: 'M050', q: '全部原価計算の損益計算書の流れは？', a: '売上 − 売上原価 ± 配賦差異 ＝ 売上総利益 − 販売費・一般管理費 ＝ 利益' },
    { id: 'M050-2', lesson: 'M050', q: '直接原価計算の損益計算書の流れは？', a: '売上 − 変動売上原価 − 変動販売費 ＝ 貢献利益 − 固定費 ＝ 利益' },
    { id: 'M050-3', lesson: 'M050', q: '過小配賦・過大配賦は損益計算書でどう扱う？（全部原価計算）', a: '過小配賦は売上原価に足し、過大配賦は引く' },
    { id: 'M050-4', lesson: 'M050', q: '直接原価計算に配賦差異が出ない理由は？', a: '固定製造間接費を配賦せず、実際額をその期の費用にするから' },
    { id: 'M050-5', lesson: 'M050', q: '直接原価計算の主な長所は？', a: '利益が販売量で動く。貢献利益が見え、意思決定に使える' },
    { id: 'M050-6', lesson: 'M050', q: '全部原価計算の主な長所は？', a: 'IAS 2 に合う。固定製造原価も製品に負担させる' }
  ]
});
