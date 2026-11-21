(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 136,
  part: 9,
  partTitle: '短期の意思決定',
  lessons: [
    {
      id: 'M145',
      no: 145,
      title: '制約条件（limiting factor）とは何か、どう見つけるか',
      goal: '制約条件がなぜ大切かを説明し、与えられた数字から制約条件を見つけられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(b)(i)', 'K2:E1(b)(ii)'],
      slides: [
        {
          title: 'オーブンが1台しかないお菓子屋',
          paras: ['週末のお菓子屋。注文はたくさん来ている。材料も店員も足りている。でもオーブンは1台で、1日8時間しか使えない。', 'この日に作れる量を決めているのは、材料でも人手でもなく、オーブンの時間だ。このように、活動の量を頭打ちにしている「足りないもの」を制約条件という。']
        },
        {
          title: '制約条件（limiting factor）とは',
          paras: ['会社の活動の量（作る量・売る量）を制限している、足りない資源のこと。key factor、scarce resource（希少な資源）とも呼ぶ。'],
          list: ['販売の需要（sales demand）: 売れる数に上限がある。いちばんよくある制約', '材料（material）: 仕入れられる量に上限がある', '労働時間（labour hours）: 働ける人や時間が足りない', '機械時間（machine hours）: 機械を動かせる時間に上限がある', 'そのほか: 資金、倉庫の広さなど'],
          after: '普通は販売の需要が制約になる。生産に使う資源が足りなくなると、その資源が制約になる。'
        },
        {
          title: '見つけ方: 必要な量と使える量を比べる',
          numbered: ['資源ごとに、全製品を最大需要まで作るのに必要な量を出す（1個あたり使用量 × 最大需要 を製品ごとに足す）', 'その資源の使える量と比べる', '必要な量 ＞ 使える量 なら、その資源が制約条件', 'どの資源も足りていれば、制約条件は販売の需要'],
          formula: '必要な量 ＝ Σ（1個あたり使用量 × 最大需要）→ 使える量と比べる'
        },
        {
          title: '例題: どの資源が足りない？',
          example: {
            problem: '製品 X と Y を作る。最大需要は X 1,000個、Y 800個。1個に使う材料は X 2 kg、Y 4 kg。1個に使う労働時間は X 3時間、Y 1時間。使える量は材料 5,000 kg、労働時間 4,000時間。制約条件はどれ？',
            steps: ['材料の必要量: X 1,000 × 2 kg ＝ 2,000 kg、Y 800 × 4 kg ＝ 3,200 kg、合計 5,200 kg', '材料: 必要 5,200 kg ＞ 使える 5,000 kg → 200 kg 足りない', '労働時間の必要量: X 1,000 × 3 ＝ 3,000時間、Y 800 × 1 ＝ 800時間、合計 3,800時間', '労働時間: 必要 3,800時間 ≦ 使える 4,000時間 → 足りている', '足りないのは材料だけ'],
            answer: '制約条件は材料（5,200 kg 必要なのに 5,000 kg しかない）'
          }
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="材料は必要5,200kgに対して使える量が5,000kgで200kg足りないので制約条件。労働時間は必要3,800時間に対して使える量が4,000時間で200時間余るので制約ではない。材料の必要量を強調" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">最大需要に必要な量と、使える量</text><text x="20" y="58" font-size="15" font-weight="600" fill="var(--ink)">材料（kg）</text><rect x="20" y="66" width="390" height="24" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="30" y="83" fill="var(--ink)">必要 5,200</text><rect x="20" y="96" width="375" height="24" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="30" y="113" fill="var(--ink)">使える 5,000</text><text x="20" y="144" fill="var(--ink)">200 kg 足りない → 制約条件</text><text x="20" y="182" font-size="15" font-weight="600" fill="var(--ink)">労働時間（時間）</text><rect x="20" y="190" width="285" height="24" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="30" y="207" fill="var(--ink)">必要 3,800</text><rect x="20" y="220" width="300" height="24" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="30" y="237" fill="var(--ink)">使える 4,000</text><text x="20" y="268" fill="var(--quiet)">200 時間 余る → 制約ではない</text></svg>`,
          caption: '比べるのは「必要な量」と「使える量」。kg と時間のように単位の違う数字どうしは比べない。'
        },
        {
          title: 'なぜ制約条件が大切？',
          paras: ['足りない資源があると、需要どおりに全部は作れない。だから「何を、いくつ作るか」を選ぶ必要が出てくる。', '短期では固定費は何を作っても変わらない。だから目標は、貢献利益（contribution）の合計を最大にすること。そのためには、足りない資源1単位から最も多くの貢献利益を生む製品を優先する（次のレッスン）。', '予算でも同じで、活動の量を制限し、予算づくりの出発点になる要因を主要予算要因（principal budget factor）と呼ぶ。制約を見落とすと、作れない計画を立ててしまう。']
        },
        {
          title: 'この考え方の前提',
          paras: ['制約条件で生産計画を決める方法は、次の前提の上に成り立つ。試験では「前提でないものはどれ？」の形でも聞かれる。'],
          list: ['固定費は、何をいくつ作っても変わらない', '1個あたりの売価と変動費は、作る数が変わっても同じ', '制約条件は1つだけ（2つ以上なら線形計画法を使う。K2 の範囲外）', '製品の需要はお互いに関係しない', '資源は製品の間で自由に振り分けられる'],
          after: '実際には崩れることもある。たとえば1つの製品を減らすと、セットで買う客がほかの製品も買わなくなるかもしれない。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「使える量の数字が小さい資源が制約」ではない。例題では労働時間 4,000 のほうが材料 5,000 より小さいが、足りないのは材料。必ず資源ごとに、必要な量と使える量を比べる。また、1つの製品だけで判断せず、全製品の合計で比べる。' },
          list: ['K2 で最適な生産計画を計算するのは、制約条件が1つのときだけ', '足りない資源が1つも無いときは、需要どおりに全部作るのが最適']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['制約条件＝活動の量を制限している、足りない資源（普通は販売の需要）', '見つけ方: 資源ごとに「1個あたり使用量 × 最大需要」を全製品で足し、使える量と比べる。必要 ＞ 使える なら制約', '大切な理由: 全部は作れないので選ぶ必要がある。固定費は変わらないので、貢献利益の合計を最大にする']
        },
        {
          title: '英単語',
          words: [
            ['limiting factor', 'リミティング ファクター', '制約条件（活動を制限する、足りない資源）'],
            ['key factor', 'キー ファクター', '制約条件の別名'],
            ['scarce resource', 'スケアス リソース', '希少な（足りない）資源'],
            ['maximum demand', 'マキシマム ディマンド', '最大需要（売れる数の上限）'],
            ['machine hours / labour hours', '', '機械時間 / 労働時間'],
            ['shortfall', 'ショートフォール', '不足分'],
            ['principal budget factor', 'プリンシパル バジェット ファクター', '主要予算要因（予算での制約条件）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a limiting factor?', choices: ['The resource with the highest cost per unit', 'A fixed cost that cannot be avoided in the short term', 'A scarce resource that restricts the level of activity of an organisation', 'The product with the lowest contribution per unit'], answer: 2, explain: '制約条件は、活動の量（作る量・売る量）を制限する足りない資源。単価が高い資源とは限らない。固定費や、貢献利益が小さい製品のことでもない。' },
        { q: 'A company makes two products. Maximum demand is 2,000 units of P and 1,500 units of Q. Each unit of P needs 3 machine hours and each unit of Q needs 4 machine hours. 11,000 machine hours are available. By how many machine hours does the requirement exceed the hours available?', type: 'number', answer: 1000, unit: '時間', explain: '必要な時間: P 2,000 × 3 ＝ 6,000、Q 1,500 × 4 ＝ 6,000、合計 12,000時間。使えるのは 11,000時間なので、12,000 − 11,000 ＝ 1,000時間足りない。だから機械時間が制約条件。' },
        { q: 'Maximum demand is 500 units of A and 400 units of B. Each unit of A needs 6 kg of material and 2 labour hours. Each unit of B needs 5 kg of material and 4 labour hours. 5,500 kg of material and 2,400 labour hours are available. Which is the limiting factor?', choices: ['Material', 'Labour hours', 'Both material and labour hours', 'Sales demand'], answer: 1, explain: '材料: 500 × 6 ＋ 400 × 5 ＝ 5,000 kg ≦ 5,500 kg で足りる。労働時間: 500 × 2 ＋ 400 × 4 ＝ 2,600時間 ＞ 2,400時間で200時間足りない。数字の大きさ（5,500 と 2,400）で比べず、必要な量と比べる。' },
        { q: '材料も労働時間も機械時間も、最大需要まで作るのに足りている。このときの制約条件は？', choices: ['材料', '使える量の数字がいちばん小さい資源', '制約条件は無いので、いくらでも作れる', '販売の需要（sales demand）'], answer: 3, explain: '生産の資源がすべて足りているときは、売れる数の上限、つまり販売の需要が制約になる。売れない分を作っても利益は増えないので「いくらでも作れる」は誤り。' },
        { q: '制約条件が大切な理由として正しいものは？', choices: ['固定費は制約条件があると増えるので、早く見つけて減らす必要があるから', '全部は作れないので、足りない資源1単位あたりの貢献利益が大きい製品を優先すると利益が最大になるから', '制約条件を見つければ、固定費を各製品に正しく配れるから', '制約条件の資源は必ず単価が高いので、使う量を減らす必要があるから'], answer: 1, explain: '足りない資源があると何を作るか選ぶ必要がある。固定費は短期では変わらないので、貢献利益の合計を最大にすればよい。そのために資源1単位あたりの貢献利益で選ぶ。固定費の配り方とは関係ない。' },
        { q: 'Which of the following is NOT an assumption of limiting factor analysis?', choices: ['Fixed costs are unaffected by the production plan', 'Selling price and variable cost per unit are constant', 'There is only one scarce resource', 'Fixed costs should be absorbed into each product before the products are ranked'], answer: 3, explain: '固定費は計画で変わらないと考えるので、製品に配ってから順位をつけることはしない。固定費が一定、1個あたりの売価と変動費が一定、制約が1つだけ、の3つはどれも前提。' }
      ]
    },
    {
      id: 'M146',
      no: 146,
      title: '制約が1つのときの最適な生産計画',
      goal: '制約条件が1つのとき、貢献利益が最大になる生産計画と利益を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(b)(iii)'],
      slides: [
        {
          title: '1時間でいくらもうかるか',
          paras: ['オーブンは1日8時間。クッキー1箱は1時間で焼けて、もうけ ¥1,500。ケーキ1台は2時間かかり、もうけ ¥2,400。', '1個のもうけはケーキが上。でもオーブン1時間あたりでは、クッキー ¥1,500、ケーキ ¥2,400 ÷ 2 ＝ ¥1,200。8時間で比べると、クッキーなら ¥12,000、ケーキなら ¥9,600。足りないものの1単位あたりで比べると、答えが逆になる。']
        },
        {
          title: '順位は「制約1単位あたりの貢献利益」',
          paras: ['制約が1つのときは、制約条件1単位あたりの貢献利益（contribution per unit of limiting factor）を製品ごとに出し、大きい順に作る。'],
          formula: '制約1単位あたり貢献利益 ＝ 1個あたり貢献利益 ÷ 1個に使う制約資源の量',
          after: '材料が制約なら「1 kg あたり」、労働時間なら「1時間あたり」で比べる。'
        },
        {
          title: '手順',
          numbered: ['制約条件を確かめる（前のレッスン）', '製品ごとに1個あたり貢献利益を出す（売価 − 変動費）', '制約1単位あたり貢献利益を出す', '大きい順に順位をつける', '1位から最大需要まで資源を配り、残りを次の順位へ', '貢献利益の合計を出し、固定費を引いて利益を出す']
        },
        {
          title: '例題のデータ',
          table: { caption: '製品 X・Y（材料は 1 kg $5、労務は1時間 $8）', head: ['項目', 'X', 'Y'], rows: [['売価', '$60', '$70'], ['材料', '2 kg（$10）', '4 kg（$20）'], ['労務', '3時間（$24）', '1時間（$8）'], ['変動間接費', '$6', '$6'], ['最大需要', '1,000個', '800個']] },
          after: '材料は 5,000 kg まで（前のレッスンで制約条件だと分かった）。固定費は $30,000。'
        },
        {
          title: '例題: 最適な生産計画',
          example: {
            problem: '上の X・Y を作る。材料は 5,000 kg までで、これが唯一の制約条件。固定費は $30,000。利益が最大になる生産計画と利益は？',
            steps: ['1個あたり貢献利益: X ＝ $60 − ($10 ＋ $24 ＋ $6) ＝ $20、Y ＝ $70 − ($20 ＋ $8 ＋ $6) ＝ $36', '材料 1 kg あたり: X ＝ $20 ÷ 2 kg ＝ $10、Y ＝ $36 ÷ 4 kg ＝ $9', '順位: 1位 X、2位 Y（1個あたりでは Y が上だが、1 kg あたりでは X が上）', 'X を需要いっぱい 1,000個: 材料 2,000 kg。残り 5,000 − 2,000 ＝ 3,000 kg', 'Y: 3,000 kg ÷ 4 kg ＝ 750個（需要 800個には届かない）', '貢献利益: X 1,000 × $20 ＝ $20,000、Y 750 × $36 ＝ $27,000、合計 $47,000', '利益: $47,000 − $30,000 ＝ $17,000'],
            answer: 'X 1,000個・Y 750個。貢献利益 $47,000、利益 $17,000'
          }
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 210" role="img" aria-label="材料5,000kgのうち、1位のXに2,000kgを配って1,000個作り、残りの3,000kgを2位のYに配って750個作る。貢献利益の合計は47,000ドル。1位のXを強調" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">材料 5,000 kg を順位どおりに配る</text><rect x="20" y="46" width="160" height="56" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="100" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">1位 X</text><text x="100" y="92" text-anchor="middle" font-size="14" fill="var(--ink)">2,000 kg</text><rect x="180" y="46" width="240" height="56" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="300" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">2位 Y</text><text x="300" y="92" text-anchor="middle" font-size="14" fill="var(--ink)">3,000 kg</text><text x="20" y="135" fill="var(--ink)">X: 2,000 ÷ 2 kg ＝ 1,000個（需要いっぱい）</text><text x="20" y="162" fill="var(--ink)">Y: 3,000 ÷ 4 kg ＝ 750個（需要に届かない）</text><text x="20" y="194" font-weight="600" fill="var(--ink)">貢献利益 $20,000 ＋ $27,000 ＝ $47,000</text></svg>`,
          caption: '1位は需要の上限まで。余った資源だけが2位に回る。'
        },
        {
          title: '確かめ: 1個あたりで順位をつけると？',
          table: { caption: 'Y を先にした場合と比べる', head: ['順位のつけ方', '作る数', '貢献利益'], rows: [['1 kg あたり（正しい）', 'X 1,000・Y 750', '$47,000'], ['1個あたり（誤り）', 'X 900・Y 800', '$46,800']] },
          after: 'Y を先に 800個作ると材料 3,200 kg。残り 1,800 kg で X は 900個。貢献利益は 800 × $36 ＋ 900 × $20 ＝ $46,800 で、$200 少ない。'
        },
        {
          title: '契約で必ず作る数量があるとき',
          example: {
            problem: 'A・B・C を作る。労働時間は 8,000時間まで。A: 貢献利益 $30・3時間・需要 1,000個。B: $24・2時間・需要 1,500個。C: $40・5時間・需要 800個。C は契約で 700個を必ず納める。最適な計画は？',
            steps: ['1時間あたり: A $30 ÷ 3 ＝ $10、B $24 ÷ 2 ＝ $12、C $40 ÷ 5 ＝ $8 → 順位 B、A、C', '先に契約分: C 700 × 5 ＝ 3,500時間。残り 8,000 − 3,500 ＝ 4,500時間', '1位 B 1,500個: 1,500 × 2 ＝ 3,000時間。残り 1,500時間', '2位 A: 1,500 ÷ 3 ＝ 500個', '貢献利益: C 700 × $40 ＝ $28,000、B 1,500 × $24 ＝ $36,000、A 500 × $30 ＝ $15,000、合計 $79,000'],
            answer: 'C 700個（契約分）、B 1,500個、A 500個。貢献利益 $79,000'
          }
        },
        {
          title: 'なぜ？ そしてよくある間違い',
          paras: ['短期では固定費は何を作っても同じ。だから利益を最大にする＝貢献利益の合計を最大にする。足りないのは材料なので、「材料 1 kg をどこに使えば貢献利益がいちばん増えるか」で決める。1個のもうけが大きくても、材料を多く使う製品は同じ材料で作れる数が少ない。'],
          note: { kind: 'warn', text: '1個あたり貢献利益や、固定費を配った後の1個あたり利益で順位をつけない。配るときは最大需要を超えない。契約分は順位に関係なく先に資源を取る。貢献利益がマイナスの製品は作らない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['順位は「制約1単位あたり貢献利益 ＝ 1個あたり貢献利益 ÷ 1個に使う制約資源の量」の大きい順', '契約分を先に取り、1位から最大需要まで資源を配って、残りを次の順位へ', '利益 ＝ 貢献利益の合計 − 固定費。固定費は計画で変わらないので順位には使わない']
        },
        {
          title: '英単語',
          words: [
            ['contribution per unit of limiting factor', '', '制約条件1単位あたりの貢献利益'],
            ['contribution per unit', '', '1個あたり貢献利益'],
            ['ranking', 'ランキング', '順位づけ'],
            ['optimal production plan', 'オプティマル プロダクション プラン', '最適な生産計画'],
            ['product mix', 'プロダクト ミックス', '製品の組み合わせ（何をいくつ作るか）'],
            ['contract / committed units', '', '契約で必ず納める数量'],
            ['total contribution', 'トータル コントリビューション', '貢献利益の合計']
          ]
        }
      ],
      quiz: [
        { q: 'A company makes three products. Only 6,000 machine hours are available. Product P: contribution $18 per unit, 2 machine hours per unit, maximum demand 1,200 units. Product Q: contribution $25 per unit, 5 machine hours per unit, maximum demand 600 units. Product R: contribution $21 per unit, 3 machine hours per unit, maximum demand 1,000 units. What is the maximum total contribution?', type: 'number', answer: 45600, unit: '$', explain: '1時間あたり: P $9、Q $5、R $7 → 順位 P、R、Q。P 1,200個で 2,400時間、R 1,000個で 3,000時間、残り 600時間で Q 120個。貢献利益 $21,600 ＋ $21,000 ＋ $3,000 ＝ $45,600。1個あたり（Q $25 が1位）で順位をつけると Q 600個・R 1,000個で $36,000 にしかならない。' },
        { q: 'Product X has a contribution of $40 per unit and uses 8 kg of material. Product Y has a contribution of $30 per unit and uses 5 kg. Product Z has a contribution of $18 per unit and uses 2 kg. Material is the only limiting factor. In what order should the products be ranked for production?', choices: ['X, Y, Z', 'Y, Z, X', 'Z, Y, X', 'Z, X, Y'], answer: 2, explain: '1 kg あたり貢献利益: X $40 ÷ 8 ＝ $5、Y $30 ÷ 5 ＝ $6、Z $18 ÷ 2 ＝ $9。大きい順に Z、Y、X。X、Y、Z は1個あたり貢献利益の順で、制約を無視したまちがい。' },
        { q: '制約条件が1つのとき、どの製品から作るかを決める基準は？', choices: ['1個あたり貢献利益', '制約資源1単位あたりの貢献利益', '固定費を配った後の1個あたり利益', '1個あたりの売価'], answer: 1, explain: '足りない資源をどこに使えば貢献利益が最も増えるかで決める。1個あたり貢献利益や売価は、資源をどれだけ使うかを無視している。固定費は何を作っても変わらないので、固定費を配った利益は判断をゆがめる。' },
        { q: 'このレッスンの例題で、材料が 5,000 kg ではなく 4,600 kg しかなかったら、Y は何個作る？（ほかの条件は同じ）', type: 'number', answer: 650, unit: '個', explain: '順位は変わらず X が1位。X 1,000個で 2,000 kg。残り 4,600 − 2,000 ＝ 2,600 kg。Y は 2,600 ÷ 4 ＝ 650個。' },
        { q: 'Product A earns a contribution of $12 per unit and needs 2 labour hours. Product B earns a contribution of $15 per unit and needs 3 labour hours. Maximum demand is 800 units of A and 600 units of B. Only 1,900 labour hours are available, and a contract requires 200 units of B to be supplied. How many units of A should be produced?', choices: ['800 units', '500 units', '350 units', '650 units'], answer: 3, explain: '1時間あたり: A $6、B $5 なので A が1位。でも先に契約分: B 200 × 3 ＝ 600時間。残り 1,300時間を A に: 1,300 ÷ 2 ＝ 650個（需要 800個に届かない）。契約を無視すると A 800個になるが、それでは B を 100個しか作れず契約違反になる。' }
      ]
    },
    {
      id: 'M147',
      no: 147,
      title: '制約が1つのときの自製か購入か',
      goal: '制約条件が1つのとき、どの部品を作りどれを買えば総コストが最小になるかを計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(b)(iv)'],
      slides: [
        {
          title: '時間が足りない週末の作り置き',
          paras: ['ハンバーグ6個とサラダ6皿を作り置きしたい。ハンバーグは手作りで材料 ¥200・1個 20分、買うと ¥350。サラダは手作りで ¥100・1皿 10分、買うと ¥220。全部作ると 180分かかるが、時間は 120分しかない。60分ぶんは買って埋める。', '60分空けるには、ハンバーグなら3個買って 3 × ¥150 ＝ ¥450 の損。サラダなら6皿買って 6 × ¥120 ＝ ¥720 の損。1分あたりの損はハンバーグ ¥7.5、サラダ ¥12。だから買うのはハンバーグ。1個あたりの損（¥150 と ¥120）で選ぶと逆になる。']
        },
        {
          title: '自製か購入か（make or buy）の基本',
          list: ['制約が無いとき: 自分で作る関連原価（変動費 ＋ 作らなければ避けられる固定費）と、購入価格を比べ、安いほうを選ぶ', '作っても買っても変わらない固定費は関係ない（関連原価ではない）', '購入価格が自製の変動費より安い部品は、制約に関係なく買う。安いうえに資源も浮く'],
          after: 'お金以外の点（non-financial factors）も考える: 供給業者の品質と納期は確かか、1社に頼りすぎないか、設計などの秘密がもれないか。'
        },
        {
          title: '制約が1つのとき: 何で比べる？',
          paras: ['資源が足りず全部は作れないとき、一部を外から買う（buy in）。どれを買うかは、買うと増える費用を、浮く制約資源1単位あたりで比べる。'],
          formula: '制約1単位あたりの購入の追加コスト ＝（購入価格 − 自製の変動費）÷ 1個に使う制約資源の量',
          after: 'この値が大きい部品ほど自分で作る。小さい部品から買う。'
        },
        {
          title: '手順',
          numbered: ['全部作るのに必要な資源の量と、不足する量を出す', '部品ごとに購入の追加コスト（1個）＝ 購入価格 − 自製の変動費', '制約1単位あたりに直す', '大きい順に「作る」順位をつける', '順位どおりに資源を配り、作れない分を買う', '購入の追加コストの合計と、総コストを出す']
        },
        {
          title: '例題のデータ',
          table: { caption: '必要な部品（機械時間は 4,000時間まで）', head: ['部品', '1個あたり', '必要数'], rows: [['J', '変動費 $14・機械 2時間・購入 $20', '1,000個'], ['K', '変動費 $10・機械 1時間・購入 $18', '800個'], ['L', '変動費 $25・機械 4時間・購入 $35', '600個']] },
          after: '固定費は作っても買っても変わらない。'
        },
        {
          title: '例題: どれを作り、どれを買う？',
          example: {
            problem: '上の部品 J・K・L が必要。機械時間は 4,000時間まで。総コストが最も小さくなる計画は？',
            steps: ['全部作るのに必要: J 1,000 × 2 ＝ 2,000、K 800 × 1 ＝ 800、L 600 × 4 ＝ 2,400、合計 5,200時間。1,200時間足りない', '購入の追加コスト（1個）: J $20 − $14 ＝ $6、K $18 − $10 ＝ $8、L $35 − $25 ＝ $10', '機械1時間あたり: J $6 ÷ 2 ＝ $3、K $8 ÷ 1 ＝ $8、L $10 ÷ 4 ＝ $2.50', '作る順位: 1位 K、2位 J、3位 L（買うのは1時間あたりの損が最も小さい L から）', 'K 800個（800時間）、J 1,000個（2,000時間）。残り 4,000 − 2,800 ＝ 1,200時間', 'L: 1,200 ÷ 4 ＝ 300個を作り、600 − 300 ＝ 300個を買う', '購入の追加コスト: 300 × $10 ＝ $3,000。総コスト: 全部作る場合の $37,000 ＋ $3,000 ＝ $40,000'],
            answer: 'K 800個・J 1,000個・L 300個を作り、L 300個を買う。総コスト $40,000'
          }
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 220" role="img" aria-label="機械4,000時間を、Kに800時間、Jに2,000時間、Lに1,200時間配って使い切る。Lの残り300個は時間が足りないので買う。買う部分を点線で強調" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">機械 4,000 時間をどの部品に使うか</text><rect x="20" y="50" width="60" height="44" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="50" y="77" text-anchor="middle" font-weight="600" fill="var(--ink)">K</text><rect x="80" y="50" width="150" height="44" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="155" y="77" text-anchor="middle" font-weight="600" fill="var(--ink)">J</text><rect x="230" y="50" width="90" height="44" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="275" y="77" text-anchor="middle" fill="var(--ink)">L 作る</text><rect x="320" y="50" width="90" height="44" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/><text x="365" y="77" text-anchor="middle" fill="var(--ink)">L 買う</text><line x1="320" y1="40" x2="320" y2="104" stroke="var(--ink)" stroke-width="2"/><text x="320" y="122" text-anchor="middle" fill="var(--ink)">ここまでが 4,000 時間</text><text x="20" y="152" fill="var(--ink)">作る: K 800個 → J 1,000個 → L 300個</text><text x="20" y="178" fill="var(--ink)">買う: L の残り 300個（点線の部分）</text><text x="20" y="204" fill="var(--ink)">追加コスト: 300個 × $10 ＝ $3,000</text></svg>`,
          caption: 'K 800時間、J 2,000時間、L 1,200時間で 4,000時間を使い切る。点線は時間が足りず、買う分。'
        },
        {
          title: '確かめ: 1個あたりで選ぶと？',
          table: { caption: '1,200時間を空けるために何を買うか', head: ['買う部品', '空く時間', '追加コスト'], rows: [['L 300個（正しい）', '1,200時間', '$3,000'], ['J 600個（1個あたりで選んだ）', '1,200時間', '$3,600']] },
          after: '1個あたりの追加コストは J の $6 が最も小さい。でも J は1個で 2時間しか空かないので、600個も買う必要があり、$600 高くつく。'
        },
        {
          title: 'なぜ？ そしてよくある間違い',
          paras: ['足りないのは機械時間で、どれを買っても空けたい時間は同じ 1,200時間。だから「1時間を空けるのに、いくら余計にかかるか」が小さいものを買えば、損の合計が最小になる。前のレッスンの「制約1単位あたりで比べる」と同じ考え方だ。'],
          note: { kind: 'warn', text: '1個あたりの追加コストや、購入価格だけで比べない（自製の変動費を引く）。順位を逆にして、追加コストが大きい部品を買わない。変わらない固定費は入れない。購入価格が自製の変動費より安い部品は、順位に関係なく買う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['購入の追加コスト（1個）＝ 購入価格 − 自製の変動費。変わらない固定費は入れない', 'これを制約1単位あたりに直し、大きい順に作る。小さいものから買う', '作れない分を買い、追加コストの合計を出す。品質・納期・秘密などお金以外の点も考える']
        },
        {
          title: '英単語',
          words: [
            ['make or buy decision', 'メイク オア バイ ディシジョン', '自製か購入かの意思決定'],
            ['buy in', 'バイ イン', '外部から買う'],
            ['buy-in price', 'バイイン プライス', '購入価格'],
            ['extra cost of buying', 'エクストラ コスト オブ バイイング', '購入すると増える費用（購入価格 − 自製の変動費）'],
            ['external supplier', 'エクスターナル サプライヤー', '外部の供給業者'],
            ['outsourcing', 'アウトソーシング', '外部委託'],
            ['non-financial factors', 'ノンファイナンシャル ファクターズ', 'お金以外の要素（品質・納期・秘密など）']
          ]
        }
      ],
      quiz: [
        { q: 'A company needs three components. Only 5,000 labour hours are available. Component D: 2,000 units needed, variable cost to make $12 per unit, 1 labour hour per unit, buy-in price $15. Component E: 1,000 units needed, variable cost $20, 2 labour hours, buy-in price $28. Component F: 500 units needed, variable cost $30, 4 labour hours, buy-in price $36. Fixed costs are not affected. How many units of F should be bought in to minimise total cost?', type: 'number', answer: 250, unit: '個', explain: '必要な時間: 2,000 ＋ 2,000 ＋ 2,000 ＝ 6,000時間で 1,000時間不足。1時間あたりの追加コスト: D $3 ÷ 1 ＝ $3、E $8 ÷ 2 ＝ $4、F $6 ÷ 4 ＝ $1.50。作る順は E、D、F。E と D で 4,000時間、残り 1,000時間で F 250個を作り、残り 250個を買う。' },
        { q: 'Labour hours are the only limiting factor. Which basis should be used to decide which components to buy in rather than make?', choices: ['Extra cost of buying per unit', 'Extra cost of buying per labour hour saved', 'Buy-in price per unit', 'Variable cost of making per labour hour'], answer: 1, explain: '空けたい時間は決まっているので、1時間空けるごとの損（購入の追加コスト ÷ 1個の時間）で比べ、小さいものから買う。1個あたりの追加コストや購入価格だけでは、何時間空くかを無視している。' },
        { q: 'Component G: 600 units needed, variable cost to make $9 per unit, 3 machine hours per unit, buy-in price $15. Component H: 400 units needed, variable cost to make $20 per unit, 2 machine hours per unit, buy-in price $26. Only 2,000 machine hours are available and fixed costs are not affected. What is the minimum extra cost of buying in?', type: 'number', answer: 1200, unit: '$', explain: '必要な時間: 1,800 ＋ 800 ＝ 2,600時間で 600時間不足。1時間あたりの追加コスト: G $6 ÷ 3 ＝ $2、H $6 ÷ 2 ＝ $3。H を全部作り（800時間）、残り 1,200時間で G 400個。G 200個を買い、追加コスト 200 × $6 ＝ $1,200。H を買うと 300個で $1,800 かかる。' },
        { q: 'ある部品は、自製の変動費が1個 $10、購入価格が1個 $8。機械時間が制約条件になっている。この部品はどうする？', choices: ['機械1時間あたりの順位で、作るか買うかを決める', '固定費を配った1個あたり原価と購入価格を比べて決める', '制約に関係なく買う。安いうえに機械時間も浮く', '品質を守るため、必ず自製する'], answer: 2, explain: '買うほうが変動費より $2 安いので、制約がなくても買うのが得。さらに機械時間が浮き、ほかの部品を作れる。順位づけが要るのは、買うと費用が増える部品どうしを比べるとき。' },
        { q: '自製か購入かを決めるときに考える「お金以外の点」に当てはまらないものは？', choices: ['供給業者の品質と納期は確かか', '1社の供給業者に頼りすぎる危険', '設計などの秘密が外にもれる危険', '制約資源1単位あたりの購入の追加コスト'], answer: 3, explain: '購入の追加コストはお金で測る点で、計算で比べるもの。品質・納期、1社への依存、秘密の流出は、数字に出にくいが判断に影響するお金以外の点（non-financial factors）。' }
      ]
    }
  ],
  cards: [
    { id: 'M145-1', lesson: 'M145', q: '制約条件（limiting factor）とは？', a: '活動の量（作る量・売る量）を制限している、足りない資源。普通は販売の需要。' },
    { id: 'M145-2', lesson: 'M145', q: '制約条件の見つけ方は？', a: '資源ごとに「1個あたり使用量×最大需要」を全製品で足し、使える量と比べる。必要＞使えるなら制約。' },
    { id: 'M145-3', lesson: 'M145', q: '生産の資源がすべて足りているとき、制約条件は？', a: '販売の需要（sales demand）。' },
    { id: 'M145-4', lesson: 'M145', q: 'なぜ制約条件が大切？', a: '全部は作れず選ぶ必要がある。固定費は変わらないので、貢献利益の合計を最大にする。' },
    { id: 'M145-5', lesson: 'M145', q: '予算で活動の量を制限し、予算づくりの出発点になる要因を何と呼ぶ？', a: '主要予算要因（principal budget factor）。' },
    { id: 'M145-6', lesson: 'M145', q: '制約条件の分析の主な前提は？', a: '固定費は不変、1個の売価と変動費は一定、制約は1つだけ、需要は製品ごとに独立。' },
    { id: 'M146-1', lesson: 'M146', q: '制約が1つのとき、生産の順位は何で決める？', a: '制約資源1単位あたりの貢献利益。大きい順に作る。' },
    { id: 'M146-2', lesson: 'M146', q: '制約1単位あたり貢献利益の式は？', a: '1個あたり貢献利益 ÷ 1個に使う制約資源の量。' },
    { id: 'M146-3', lesson: 'M146', q: '順位をつけた後、資源はどう配る？', a: '1位から最大需要まで配り、残りを次の順位へ。' },
    { id: 'M146-4', lesson: 'M146', q: '契約で必ず納める数量があるときは？', a: '先に契約分の資源を差し引き、残りを順位どおりに配る。' },
    { id: 'M146-5', lesson: 'M146', q: 'なぜ固定費を配った利益で順位をつけない？', a: '固定費は何を作っても短期では変わらない。貢献利益の合計を最大にすれば利益も最大。' },
    { id: 'M146-6', lesson: 'M146', q: 'X は貢献利益 $20・材料 2 kg、Y は $36・4 kg。材料が制約なら1位は？', a: 'X（1 kg あたり X $10、Y $9）。' },
    { id: 'M147-1', lesson: 'M147', q: '購入の追加コスト（1個）とは？', a: '購入価格 − 自製の変動費。' },
    { id: 'M147-2', lesson: 'M147', q: '制約が1つの自製か購入か、何で順位をつける？', a: '制約1単位あたりの購入の追加コスト。大きい順に作り、小さいものから買う。' },
    { id: 'M147-3', lesson: 'M147', q: 'なぜ1個あたりでなく制約1単位あたりで比べる？', a: '空けたい資源の量は決まっている。1単位空ける損が小さいものを買えば、損の合計が最小。' },
    { id: 'M147-4', lesson: 'M147', q: '購入価格が自製の変動費より安い部品は？', a: '制約に関係なく買う。安いうえに資源も浮く。' },
    { id: 'M147-5', lesson: 'M147', q: '作っても買っても変わらない固定費は判断に入れる？', a: '入れない。避けられる固定費だけが関係する。' },
    { id: 'M147-6', lesson: 'M147', q: '自製か購入かで考える、お金以外の点の例は？', a: '供給業者の品質と納期、1社への依存、秘密がもれる危険。' }
  ]
});
