(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 105,
  part: 2,
  partTitle: '原価の分類と原価の動き',
  lessons: [
    {
      id: 'M017',
      no: 17,
      title: '一次関数 y = a + bx で原価を表す',
      goal: '総原価を y = a + bx の式で表し、a と b の意味を説明して、原価の予測や2点からの式づくりができるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A4(a)'],
      slides: [
        {
          title: 'スマホ代は「基本料＋使った分」',
          paras: ['あるスマホのプランは、基本料 2,000円＋通話1分ごとに 20円。通話が0分でも 2,000円かかり、1分ふえるごとに 20円ずつ増える。', '通話の分数を x、月の請求額を y とすると、y ＝ 2,000 ＋ 20x と書ける。この形の式を一次関数（linear function）という。'],
          formula: 'y ＝ a ＋ bx'
        },
        {
          title: '式の4つの部品',
          table: { caption: '総原価を表すときの読み方', head: ['記号', '名前', '原価では'], rows: [['y', '従属変数（dependent variable）', '総原価'], ['x', '独立変数（independent variable）', '活動量（生産量など）'], ['a', '切片（intercept）', '固定費の合計'], ['b', '傾き（gradient, slope）', '1単位あたり変動費']] },
          after: 'x を決めると y が決まる。だから x を独立変数、x に左右される y を従属変数と呼ぶ。'
        },
        {
          title: 'グラフにすると直線になる',
          paras: ['冷凍たこ焼き工場の月の原価は、固定費 $800（家賃など）＋1パック $1.5（材料など）。式は y ＝ 800 ＋ 1.5x。'],
          svg: `<svg viewBox="0 0 440 305" role="img" aria-label="総原価の直線。切片が固定費800ドル、傾きが1パックあたり変動費1.5ドル" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">y ＝ 800 ＋ 1.5x のグラフ</text><line x1="70" y1="40" x2="70" y2="230" stroke="var(--edge)" stroke-width="1.25"/><line x1="70" y1="230" x2="415" y2="230" stroke="var(--edge)" stroke-width="1.25"/><text x="78" y="52" fill="var(--quiet)">総原価 y（$）</text><text x="70" y="250" text-anchor="middle" fill="var(--quiet)">0</text><text x="240" y="250" text-anchor="middle" fill="var(--quiet)">1,000</text><text x="415" y="270" text-anchor="end" fill="var(--quiet)">生産量 x（パック）</text><line x1="70" y1="192" x2="410" y2="192" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="62" y="197" text-anchor="end" fill="var(--ink)">800</text><text x="80" y="214" fill="var(--ink)">a ＝ 固定費 $800</text><line x1="70" y1="192" x2="410" y2="49.5" stroke="var(--accent)" stroke-width="2.5"/><line x1="240" y1="120.75" x2="308" y2="120.75" stroke="var(--ink)" stroke-width="1.25"/><line x1="308" y1="120.75" x2="308" y2="92.25" stroke="var(--ink)" stroke-width="1.25"/><text x="274" y="140" text-anchor="middle" fill="var(--ink)">＋400パック</text><text x="314" y="112" fill="var(--ink)">＋$600</text><text x="120" y="80" fill="var(--ink)">b ＝ 600 ÷ 400 ＝ 1.5（傾き）</text><text x="220" y="294" text-anchor="middle" fill="var(--ink)">切片 a から始まり、1個ふえるごとに b ずつ上がる</text></svg>`,
          caption: 'x が0のときの高さが a。x が1ふえたときの y の増え方が b。'
        },
        {
          title: '原価の動きを式で見分ける',
          table: { caption: 'a と b の組み合わせ', head: ['原価の動き', '式', 'グラフ'], rows: [['固定費（fixed）', 'y ＝ a（b ＝ 0）', '水平な線'], ['変動費（variable）', 'y ＝ bx（a ＝ 0）', '原点を通る線'], ['準変動費（semi-variable）', 'y ＝ a ＋ bx', '切片のある線']] },
          after: '階段状の固定費（stepped fixed cost）は途中で段差があるので、1本の一次関数では表せない。'
        },
        {
          title: '直線になる式・ならない式',
          paras: ['x が「1乗」でだけ出てくる式が一次関数。b がマイナスなら右下がりの直線になる（例: 値段を上げると売れる数が減る）。'],
          table: { caption: '一次関数かどうか', head: ['式', '一次関数？', '理由'], rows: [['y ＝ 500 ＋ 3x', 'はい', 'a ＝ 500、b ＝ 3'], ['y ＝ 4x', 'はい', 'a ＝ 0（原点を通る）'], ['y ＝ 200 − 2x', 'はい', 'b ＝ −2（右下がり）'], ['y ＝ 10x²', 'いいえ', 'x を2乗している'], ['y ＝ 6 ÷ x', 'いいえ', 'x で割っている']] },
          after: '2y ＝ 400 ＋ 6x なら、両辺を2で割って y ＝ 200 ＋ 3x。まず「y ＝」の形に直してから a と b を読む。'
        },
        {
          title: '例題1: 式から原価と生産量を出す',
          example: {
            problem: '原価の式は y ＝ 800 ＋ 1.5x（y は総原価 $、x はパック数）。(1) 1,000 パック作ると総原価は？ (2) 総原価が $2,900 なら何パック作った？',
            steps: ['(1) x に 1,000 を入れる: 800 ＋ 1.5 × 1,000', '＝ 800 ＋ 1,500 ＝ $2,300', '(2) y に 2,900 を入れる: 2,900 ＝ 800 ＋ 1.5x', '固定費を引く: 1.5x ＝ 2,100', '傾きで割る: x ＝ 2,100 ÷ 1.5 ＝ 1,400'],
            answer: '(1) $2,300　(2) 1,400 パック'
          }
        },
        {
          title: '例題2: 2つの点から式を作る',
          example: {
            problem: '1,000 パックのとき総原価 $2,300、1,600 パックのとき $3,200。原価は一次関数で表せるとする。式 y ＝ a ＋ bx を求めよ。',
            steps: ['傾き b ＝ y の増え方 ÷ x の増え方', '＝ (3,200 − 2,300) ÷ (1,600 − 1,000) ＝ 900 ÷ 600 ＝ 1.5', '切片 a ＝ y − bx（どちらの点でもよい）', '＝ 2,300 − 1.5 × 1,000 ＝ 800', '確かめ: 800 ＋ 1.5 × 1,600 ＝ 3,200（一致）'],
            answer: 'y ＝ 800 ＋ 1.5x（固定費 $800、1パックあたり変動費 $1.5）'
          },
          note: { kind: 'tip', text: 'この「2点から a と b を出す」手順が、次のレッスンの高低点法そのもの。' }
        },
        {
          title: 'なぜ？ 原価を直線の式にする理由',
          paras: ['式にすれば、来月 1,800 パック作るといくらかかるか、すぐ計算できる。予算づくり、値決め、作るか作らないかの判断の土台になる。', '本当の原価はぴったり直線とは限らない。それでも、ふだんの生産量の範囲（関連範囲、relevant range）では、固定費は一定、1単位の変動費も一定とみなせることが多い。だから単純な直線で十分に役立つ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'a と b を逆にしない。a は x がいくつでも変わらない固定費、b は1単位あたりの変動費。また、1単位あたりの平均原価（総原価 ÷ 数量）は b ではない。1,000 パックなら平均は $2.30 だが、b は $1.5。平均には固定費が混ざっている。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['総原価 y ＝ 固定費 a ＋ 1単位あたり変動費 b × 活動量 x', 'b ＝ y の増え方 ÷ x の増え方、a ＝ y − bx', '平均原価は b ではない。b は1単位ふえたときの増え方']
        },
        {
          title: '英単語',
          words: [
            ['linear function', 'リニア ファンクション', '一次関数（グラフが直線になる式）'],
            ['linear equation', 'リニア イクエーション', '一次方程式'],
            ['intercept', 'インターセプト', '切片（x が0のときの y。原価では固定費）'],
            ['gradient / slope', 'グラディエント / スロープ', '傾き（原価では1単位あたり変動費）'],
            ['dependent variable', 'ディペンデント ヴァリアブル', '従属変数（y）'],
            ['independent variable', 'インディペンデント ヴァリアブル', '独立変数（x）'],
            ['relevant range', 'レリバント レンジ', '関連範囲（固定費・単価が一定とみなせる活動量の範囲）']
          ]
        }
      ],
      quiz: [
        { q: '原価の式 y ＝ 800 ＋ 1.5x（y は総原価、x は生産量）で、1.5 は何を表す？', choices: ['固定費の合計', '1単位あたりの変動費', '1単位あたりの平均原価', '総原価'], answer: 1, explain: '1.5 は傾き b で、1単位ふえたときの原価の増え方＝1単位あたり変動費。固定費は切片の 800。平均原価は固定費も含むので b とは違う。' },
        { q: 'The total cost of a product is given by the equation y = 4,000 + 6x, where y is the total cost ($) and x is the number of units produced. What is the total cost of producing 500 units?', type: 'number', answer: 7000, unit: '$', explain: '4,000 + 6 x 500 = 4,000 + 3,000 = $7,000。固定費 4,000 を忘れて $3,000 としないこと。' },
        { q: 'In the linear equation y = a + bx used to describe total costs, which of the following statements is correct?', choices: ['a is the variable cost per unit and b is the total fixed cost', 'x is the dependent variable and y is the independent variable', 'a is the total fixed cost and b is the variable cost per unit', 'b is the value of y when x is zero'], answer: 2, explain: 'a は切片＝固定費、b は傾き＝1単位あたり変動費。x は独立変数、y が従属変数。x が0のときの y は a（切片）で、b ではない。' },
        { q: 'Total costs are $14,000 when output is 2,000 units and $18,000 when output is 3,000 units. Assuming a linear relationship, what is the variable cost per unit?', choices: ['$4.00', '$6.00', '$7.00', '$6.50'], answer: 0, explain: '(18,000 - 14,000) / (3,000 - 2,000) = $4。$7.00 と $6.00 は総原価を数量で割った平均原価で、固定費が混ざっている。$6.50 はその平均。' },
        { q: 'スマホのプランA は基本料 2,000円＋1分 20円、プランB は基本料 500円＋1分 50円。月の請求額が同じになるのは何分通話したとき？', type: 'number', answer: 50, unit: '分', explain: '2,000 ＋ 20x ＝ 500 ＋ 50x → 1,500 ＝ 30x → x ＝ 50。50分より多く話すならプランA が安い。2本の直線が交わる点を式で求めた。' },
        { q: 'Which of the following equations is NOT a linear function?', choices: ['y = 35 + 0.5x', 'y = 12x', 'y = 900 - 6x', 'y = 8x^2 + 4'], answer: 3, explain: 'x^2（x の2乗）が入ると直線にならない。y = 12x は a ＝ 0、y = 900 − 6x は b がマイナスの右下がりの直線で、どちらも一次関数。' }
      ]
    },
    {
      id: 'M018',
      no: 18,
      title: '高低点法で固定費と変動費を分ける',
      goal: '過去のデータから高低点法で1単位あたり変動費と固定費を求め、別の活動量の原価を予測できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A4(c)'],
      slides: [
        {
          title: '電気代の明細から基本料を当てる',
          paras: ['ある月は 200kWh 使って 7,000円、別の月は 300kWh で 10,000円だった。100kWh 多く使っただけで 3,000円ふえたので、1kWh あたり 30円。', '200kWh 分は 30円 × 200 ＝ 6,000円。残りの 1,000円が、使っても使わなくてもかかる基本料。2か月の明細だけで、料金の式が分かる。']
        },
        {
          title: '高低点法（high-low method）とは',
          paras: ['準変動費（semi-variable cost）は固定費と変動費が混ざっている。過去のデータのうち、活動量がいちばん高い点といちばん低い点の2つを使い、固定費と変動費に分ける方法を高低点法という。'],
          formula: '1単位あたり変動費 ＝ (最高点の原価 − 最低点の原価) ÷ (最高の活動量 − 最低の活動量)',
          after: '固定費 ＝ どちらかの点の総原価 − 1単位あたり変動費 × その点の活動量'
        },
        {
          title: '例題のデータ',
          paras: ['冷凍たこ焼き工場の、5か月分の製造間接費（production overheads）。'],
          table: { caption: '月ごとの生産量と製造間接費', head: ['月', '生産量（個）', '製造間接費（$）'], rows: [['1月', '4,000', '18,200'], ['2月', '6,500', '26,400'], ['3月', '3,000', '16,000'], ['4月', '8,000', '26,000'], ['5月', '5,500', '21,200']] },
          after: '原価がいちばん高いのは2月だが、生産量がいちばん多いのは4月。使うのは生産量の高い点と低い点。'
        },
        {
          title: '例題: 高低点法で分ける',
          example: {
            problem: '上の表から高低点法で、1個あたり変動費と月の固定費を求めよ。さらに、9,000個作る月の製造間接費を予測せよ。',
            steps: ['生産量の最高は4月 8,000個（$26,000）、最低は3月 3,000個（$16,000）', '差を取る: 原価 26,000 − 16,000 ＝ 10,000、生産量 8,000 − 3,000 ＝ 5,000', '1個あたり変動費 ＝ 10,000 ÷ 5,000 ＝ $2', '固定費 ＝ 26,000 − 2 × 8,000 ＝ $10,000', '確かめ（最低点）: 16,000 − 2 × 3,000 ＝ 10,000（一致）', '予測: y ＝ 10,000 ＋ 2 × 9,000 ＝ $28,000'],
            answer: '変動費 $2/個、固定費 $10,000/月。9,000個なら $28,000'
          }
        },
        {
          title: '図で見ると',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="5つの点のうち生産量が最高と最低の2点を結んで原価の線を引く" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">高い点と低い点の2つだけで線を引く</text><line x1="70" y1="40" x2="70" y2="250" stroke="var(--edge)" stroke-width="1.25"/><line x1="70" y1="250" x2="415" y2="250" stroke="var(--edge)" stroke-width="1.25"/><text x="78" y="46" fill="var(--quiet)">製造間接費（$）</text><text x="70" y="268" text-anchor="middle" fill="var(--quiet)">0</text><text x="183" y="268" text-anchor="middle" fill="var(--quiet)">3,000</text><text x="372" y="268" text-anchor="middle" fill="var(--quiet)">8,000</text><text x="415" y="290" text-anchor="end" fill="var(--quiet)">生産量（個）</text><line x1="70" y1="183.3" x2="410" y2="63.3" stroke="var(--accent)" stroke-width="2.5"/><circle cx="221.1" cy="128.7" r="5" fill="var(--ink)"/><circle cx="315.6" cy="74" r="5" fill="var(--ink)"/><circle cx="277.8" cy="108.7" r="5" fill="var(--ink)"/><circle cx="183.3" cy="143.3" r="7" fill="var(--accent)"/><circle cx="372.2" cy="76.7" r="7" fill="var(--accent)"/><text x="316" y="60" text-anchor="middle" fill="var(--ink)">原価が最大の月</text><text x="190" y="168" fill="var(--ink)">最低 3,000個</text><text x="405" y="100" text-anchor="end" fill="var(--ink)">最高 8,000個</text><text x="80" y="200" fill="var(--quiet)">線が縦軸と交わる高さ＝固定費</text></svg>`,
          caption: '2月は原価が最大でも、生産量は最大ではないので使わない。ほかの3点は線の計算に使われない。'
        },
        {
          title: 'なぜ？ 差を取ると変動費だけが残る',
          paras: ['固定費は、3,000個の月にも 8,000個の月にも同じ $10,000 かかる。だから2つの月の原価の差 $10,000 に、固定費は入っていない。', '差はすべて「5,000個よけいに作ったこと」による変動費の増加。それを個数の差で割れば、1個あたり変動費になる。最初に固定費を消してから変動費を出す、という順番が本質。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '原価が最高・最低の月を選ばない。選ぶのは活動量（生産量・時間・件数）が最高・最低の月。また、総原価を個数で割った平均を変動費にしない。固定費を出したら、もう一方の点でも同じ額になるか必ず確かめる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['活動量が最高の点と最低の点を選ぶ（原価の高低ではない）', '変動費単価 ＝ 原価の差 ÷ 活動量の差', '固定費 ＝ 総原価 − 変動費単価 × 活動量。予測は y ＝ a ＋ bx']
        },
        {
          title: '英単語',
          words: [
            ['high-low method', 'ハイロー メソッド', '高低点法'],
            ['semi-variable cost', 'セミヴァリアブル コスト', '準変動費（固定部分と変動部分がある原価）'],
            ['activity level', 'アクティビティ レベル', '活動量（生産量・作業時間など）'],
            ['variable cost per unit', '', '1単位あたり変動費'],
            ['total fixed costs', '', '固定費の合計'],
            ['cost forecast', 'コスト フォーキャスト', '原価の予測'],
            ['production overheads', 'プロダクション オーバーヘッズ', '製造間接費']
          ]
        }
      ],
      quiz: [
        { q: 'The following data relate to the overhead costs of a factory. Month 1: 1,200 units, $9,400. Month 2: 2,000 units, $12,600. Month 3: 1,500 units, $11,100. Using the high-low method, what is the expected total overhead cost for 2,500 units?', type: 'number', answer: 14600, unit: '$', explain: '最高 2,000 単位と最低 1,200 単位を使う。変動費 ＝ (12,600 − 9,400) ÷ (2,000 − 1,200) ＝ 3,200 ÷ 800 ＝ $4。固定費 ＝ 9,400 − 4 × 1,200 ＝ $4,600。予測 ＝ 4,600 ＋ 4 × 2,500 ＝ $14,600。' },
        { q: 'A business has total costs of $95,000 at an output of 10,000 units and $119,000 at an output of 16,000 units. Using the high-low method, what are the total fixed costs?', choices: ['$40,000', '$55,000', '$64,000', '$95,000'], answer: 1, explain: '変動費 ＝ 24,000 ÷ 6,000 ＝ $4。固定費 ＝ 95,000 − 4 × 10,000 ＝ $55,000（119,000 − 64,000 でも同じ）。$40,000 と $64,000 は変動費の合計で、固定費ではない。$95,000 は総原価そのもの。' },
        { q: 'Which two months should be used to apply the high-low method? Month A: 600 units, $7,000. Month B: 700 units, $6,800. Month C: 300 units, $4,400. Month D: 500 units, $5,600.', choices: ['Month A and Month C', 'Month B and Month C', 'Month A and Month B', 'Month B and Month D'], answer: 1, explain: '選ぶのは活動量の最高（B 700 単位）と最低（C 300 単位）。A は原価が最高だが活動量は最高ではない。原価の高低で選ぶのが典型的なひっかけ。' },
        { q: '配送センターの配送費。1,500件の月は $10,500、2,700件の月は $14,100、2,100件の月は $12,600 だった。高低点法で、1件あたりの変動費はいくら？', type: 'number', answer: 3, unit: '$', explain: '最高 2,700件と最低 1,500件を使う。(14,100 − 10,500) ÷ (2,700 − 1,500) ＝ 3,600 ÷ 1,200 ＝ $3。固定費は 10,500 − 3 × 1,500 ＝ $6,000。' },
        { q: '高低点法で、原価の差を活動量の差で割ると変動費単価になるのはなぜ？', choices: ['原価の差には固定費だけが残るから', '活動量の差が固定費を表すから', '2つの点で固定費は同じなので、差には変動費の増加だけが残るから', '最高点の原価がすべて変動費だから'], answer: 2, explain: '固定費はどちらの点でも同じ額なので、差を取ると消える。残った差は活動量がふえた分の変動費。最高点の原価には固定費も含まれている。' }
      ]
    },
    {
      id: 'M019',
      no: 19,
      title: '高低点法の応用: 階段状の固定費と単価の変化',
      goal: '固定費の段差や変動費単価の変化があるデータでも、点をそろえてから高低点法を使い、正しく原価を予測できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A4(c)'],
      slides: [
        {
          title: 'レンタカーとまとめ買い',
          paras: ['友達との旅行でレンタカーを借りる。5人までは1台、6人を超えると2台目が要り、車代がドンと上がる。これが階段状の固定費（stepped fixed cost）。', 'スーパーで、10個を超えた分は1個 20円引きになることもある。こちらは1単位あたり変動費（variable cost per unit）が途中で変わる例。どちらも、途中で原価の式そのものが変わる。']
        },
        {
          title: '段差をまたぐ2点はそのまま結べない',
          svg: `<svg viewBox="0 0 440 304" role="img" aria-label="6000個で固定費が上がるため、最低点と最高点は別の式に乗っている" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">段差をまたぐ2点は同じ式に乗っていない</text><line x1="70" y1="40" x2="70" y2="250" stroke="var(--edge)" stroke-width="1.25"/><line x1="70" y1="250" x2="415" y2="250" stroke="var(--edge)" stroke-width="1.25"/><text x="78" y="50" fill="var(--quiet)">総原価（$）</text><text x="206" y="268" text-anchor="middle" fill="var(--quiet)">4,000</text><text x="274" y="268" text-anchor="middle" fill="var(--quiet)">6,000</text><text x="376" y="268" text-anchor="middle" fill="var(--quiet)">9,000</text><line x1="70" y1="216.7" x2="274" y2="136.7" stroke="var(--ink)" stroke-width="2"/><line x1="274" y1="120" x2="410" y2="66.7" stroke="var(--ink)" stroke-width="2"/><line x1="274" y1="136.7" x2="274" y2="120" stroke="var(--accent)" stroke-width="3"/><line x1="150" y1="190.7" x2="410" y2="63.3" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="206" cy="163.3" r="6" fill="var(--ink)"/><circle cx="376" cy="80" r="6" fill="var(--ink)"/><text x="244" y="172" fill="var(--ink)">固定費が $5,000 上がる</text><text x="20" y="292" fill="var(--ink)">実線＝実際の原価　点線＝段差を無視して結んだ線</text></svg>`,
          caption: '点線は段差の分まで「変動費」と勘違いするので、傾きが急になりすぎる。'
        },
        {
          title: '3ステップの型',
          numbered: ['分かっている変化（段差・単価の変化）を片方の点から取り除き、2点を同じ条件にそろえる', 'そろえた2点で、ふつうの高低点法を使う', '予測する活動量が変化の後なら、取り除いた変化を戻して計算する'],
          formula: 'そろえる → 高低点法 → 変化を戻して予測'
        },
        {
          title: '例題1: 階段状の固定費',
          example: {
            problem: '総原価は 4,000個のとき $26,000、9,000個のとき $51,000。生産量が 6,000個を超えると、固定費が $5,000 上がる（工場の一部を追加で借りる）。変動費単価は一定。7,500個のときの総原価は？',
            steps: ['9,000個は 6,000個を超えているので、段差 $5,000 を引いてそろえる: 51,000 − 5,000 ＝ 46,000', '変動費単価 ＝ (46,000 − 26,000) ÷ (9,000 − 4,000) ＝ 20,000 ÷ 5,000 ＝ $4', '6,000個までの固定費 ＝ 26,000 − 4 × 4,000 ＝ $10,000', '6,000個を超えた固定費 ＝ 10,000 ＋ 5,000 ＝ $15,000', '7,500個: 15,000 ＋ 4 × 7,500 ＝ $45,000', '確かめ: 15,000 ＋ 4 × 9,000 ＝ 51,000（一致）'],
            answer: '$45,000（段差を無視すると単価 $5・固定費 $6,000 となり、$43,500 と誤る）'
          }
        },
        {
          title: '例題2: 変動費単価が途中で下がる',
          example: {
            problem: '総原価は 4,000個のとき $26,000、9,000個のとき $43,000。6,000個を超えた分は、材料の値引きで1個あたり変動費が $1 安くなる。8,000個のときの総原価は？',
            steps: ['9,000個のうち値引きされたのは 3,000個。値引き 3,000 × $1 を足し戻す: 43,000 ＋ 3,000 ＝ 46,000', '変動費単価（通常）＝ (46,000 − 26,000) ÷ 5,000 ＝ $4', '固定費 ＝ 26,000 − 4 × 4,000 ＝ $10,000', '8,000個: 固定費 10,000 ＋ 6,000個 × $4 ＋ 2,000個 × $3', '＝ 10,000 ＋ 24,000 ＋ 6,000 ＝ $40,000'],
            answer: '$40,000（6,000個を超えた分の単価は $3）'
          }
        },
        {
          title: '割引が％で示されたとき',
          paras: ['「6,000個を超えた分は変動費単価が 25% 安い」なら、安い分を「通常の何個分か」に直す。上の例題2と同じデータで確かめる。'],
          example: {
            problem: '4,000個で $26,000、9,000個で $43,000。6,000個を超えた分は単価が 25% 安い。通常の変動費単価は？',
            steps: ['超えた 3,000個は通常の 75% の原価 → 通常の 3,000 × 0.75 ＝ 2,250個分', '9,000個は通常 6,000 ＋ 2,250 ＝ 8,250個分にあたる', '変動費単価 ＝ (43,000 − 26,000) ÷ (8,250 − 4,000) ＝ 17,000 ÷ 4,250 ＝ $4'],
            answer: '通常の変動費単価 $4、固定費 $10,000（例題2と同じ）'
          }
        },
        {
          title: '割引が全部の単位にかかるとき',
          paras: ['「6,000個を超えたら、全部の単位（all units）の単価が 25% 安くなる」という条件もある。超えた分だけでなく、1個目から安くなる。'],
          example: {
            problem: '4,000個で $26,000、9,000個で $37,000。生産量が 6,000個を超えると、全部の単位の変動費単価が 25% 安くなる。通常の変動費単価、固定費、7,000個の総原価は？',
            steps: ['9,000個は全部が通常の 75% → 通常 9,000 × 0.75 ＝ 6,750個分', '変動費単価 ＝ (37,000 − 26,000) ÷ (6,750 − 4,000) ＝ 11,000 ÷ 2,750 ＝ $4', '固定費 ＝ 26,000 − 4 × 4,000 ＝ $10,000', '7,000個は全部が $3: 10,000 ＋ 3 × 7,000 ＝ $31,000'],
            answer: '単価 $4、固定費 $10,000、7,000個なら $31,000（超えた分だけの割引なら $37,000）'
          }
        },
        {
          title: 'なぜ？ そろえてから使う理由',
          paras: ['高低点法は「2点は同じ直線の上にある」という前提で、差を変動費とみなす。段差や値引きがあると2点は別の式に乗っていて、差に変動費以外のもの（固定費の増加や値引き）が混ざる。', '先にその混ざりものを取り除けば、2点は同じ式の上に戻る。データが3点以上あれば、段差の同じ側にある最高点と最低点を使う方法もある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '予測のときに段差や値引きを戻し忘れる。段差を引くのは、変化の後にある点だけ。値引きが「超えた分だけ（above）」か「全部の単位（all units）」かで答えが変わるので、問題文をよく読む。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['段差・単価の変化は、先に取り除いて2点をそろえる', 'そろえた2点で高低点法 → a と b を出す', '予測が変化の後なら、段差や値引きを戻して計算する']
        },
        {
          title: '英単語',
          words: [
            ['stepped fixed cost', 'ステップト フィクスト コスト', '階段状の固定費（一定の活動量を超えると段で上がる）'],
            ['step up', 'ステップ アップ', '（固定費が）段で上がる'],
            ['bulk discount', 'バルク ディスカウント', '大量購入の値引き'],
            ['exceeds', 'エクシーズ', '〜を超える（output exceeds 6,000 units）'],
            ['all units', 'オール ユニッツ', '全部の単位（超えた分だけではない）'],
            ['adjust', 'アジャスト', '調整する（データをそろえる）']
          ]
        }
      ],
      quiz: [
        { q: 'Total costs are $60,000 at an output of 5,000 units and $96,000 at an output of 12,000 units. Fixed costs increase by $8,000 when output exceeds 8,000 units. The variable cost per unit is constant. What is the expected total cost at an output of 10,000 units?', type: 'number', answer: 88000, unit: '$', explain: '12,000 単位の原価から段差を引く: 96,000 − 8,000 ＝ 88,000。変動費 ＝ (88,000 − 60,000) ÷ 7,000 ＝ $4。固定費 ＝ 60,000 − 4 × 5,000 ＝ $40,000、8,000 単位超では $48,000。予測 ＝ 48,000 ＋ 4 × 10,000 ＝ $88,000。' },
        { q: 'Total costs are $23,000 at 2,000 units and $39,000 at 5,000 units. For each unit above 3,000 units, the variable cost per unit is $1 lower. Fixed costs are constant. What is the variable cost per unit for output up to 3,000 units?', choices: ['$5.33', '$5.00', '$7.80', '$6.00'], answer: 3, explain: '3,000 を超えた 2,000 単位の値引き $2,000 を足し戻す: 41,000。(41,000 − 23,000) ÷ 3,000 ＝ $6。$5.33 は足し戻さずに計算した誤り、$5.00 は超えた分の単価、$7.80 は 39,000 ÷ 5,000 の平均原価。' },
        { q: '固定費の段差がある2点に、段差を取り除かずに高低点法を使った（最高点だけが段差の後）。求めた変動費単価はどうなる？', choices: ['実際より小さくなる', '正しい値になる', '実際より大きくなる', '必ずマイナスになる'], answer: 2, explain: '原価の差に固定費の増加分まで入るので、それを変動費と勘違いして単価が大きく出る。その分、固定費は小さく出る。' },
        { q: '1,000個のとき総原価 $7,000、3,000個のとき $12,400。2,000個を超えた分は、変動費単価が 20% 安くなる。固定費は一定。固定費はいくら？', type: 'number', answer: 4000, unit: '$', explain: '超えた 1,000個は通常の 0.8 → 800個分。3,000個は通常 2,800個分。変動費単価 ＝ (12,400 − 7,000) ÷ (2,800 − 1,000) ＝ 5,400 ÷ 1,800 ＝ $3。固定費 ＝ 7,000 − 3 × 1,000 ＝ $4,000。' },
        { q: '段差や単価の変化があるデータで高低点法を使う正しい順番は？', choices: ['高低点法 → 変化を取り除く → 予測', '変化を取り除いて2点をそろえる → 高低点法 → 予測で変化を戻す', '高低点法 → 予測 → 最後に段差を足す', '変化は無視して高低点法 → 予測'], answer: 1, explain: '先にそろえないと、差に変動費以外のものが混ざって a と b がずれる。後から直すことはできない。' },
        { q: 'Total costs are $30,000 at an output of 2,000 units and $44,000 at an output of 6,000 units. When output exceeds 5,000 units, a discount of 20% applies to the variable cost of all units. Fixed costs are constant. What is the variable cost per unit before the discount?', choices: ['$5.00', '$3.50', '$4.00', '$3.68'], answer: 0, explain: '6,000 単位は全部が通常の 80% → 通常 4,800 単位分。(44,000 − 30,000) ÷ (4,800 − 2,000) ＝ 14,000 ÷ 2,800 ＝ $5。$3.50 は調整なし（14,000 ÷ 4,000）、$4.00 は割引後の単価、$3.68 は超えた 1,000 単位だけを割り引いた誤り（14,000 ÷ 3,800）。' }
      ]
    },
    {
      id: 'M020',
      no: 20,
      title: '高低点法の長所と短所',
      goal: '高低点法の長所と短所、前提を説明し、予測がどこまで信頼できるか判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A4(d)'],
      slides: [
        {
          title: '2回だけ体重を測ったら',
          paras: ['1か月の体重の変化を、いちばん重い日と軽い日の2回だけで決めたとする。重い日がたまたま焼肉の翌朝なら、変化を大きく見積もってしまう。', '簡単で速いが、選んだ2日が「ふつうの日」でなければ外れる。高低点法の長所と短所は、これとまったく同じ。']
        },
        {
          title: '長所（advantages）',
          list: ['計算が簡単で速い。理解しやすい', '必要なのは2つの点だけ。データが少なくても使える', 'コンピュータや統計の知識がいらず、コストがかからない', '固定費と変動費の大まかな目安をすぐに出せる']
        },
        {
          title: '短所（disadvantages）',
          list: ['2つの点しか使わず、ほかのデータを無視する', '最高点・最低点は極端な値なので、異常な月（故障、残業代、ストライキなど）の可能性が高い', '原価と活動量の関係が直線（一定の単価・一定の固定費）だと仮定している', '原価を動かすのは活動量1つだけと仮定している', '過去の関係が将来も続くと仮定している（物価上昇・技術の変化を反映しない）']
        },
        {
          title: '例題: 異常な月があると',
          example: {
            problem: '前のレッスンの工場（本当は固定費 $10,000、変動費 $2/個）。最高の 8,000個の月に、臨時の修理費 $3,000 が入って $29,000 になっていた。最低は 3,000個 $16,000。高低点法の結果と、6,000個の予測は？',
            steps: ['変動費 ＝ (29,000 − 16,000) ÷ 5,000 ＝ $2.6（本当は $2）', '固定費 ＝ 16,000 − 2.6 × 3,000 ＝ $8,200（本当は $10,000）', '6,000個の予測: 8,200 ＋ 2.6 × 6,000 ＝ $23,800', '本当の原価: 10,000 ＋ 2 × 6,000 ＝ $22,000'],
            answer: '予測は $1,800 ずれる。1つの異常な点で a も b もゆがむ'
          }
        },
        {
          title: '範囲の中か外か',
          svg: `<svg viewBox="0 0 440 200" role="img" aria-label="データの最低点と最高点の間の予測は信頼しやすく、外側の予測は信頼しにくい" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">データの範囲の中なら信頼しやすい</text><text x="120" y="60" text-anchor="middle" fill="var(--quiet)">最低の点</text><text x="320" y="60" text-anchor="middle" fill="var(--quiet)">最高の点</text><line x1="20" y1="100" x2="420" y2="100" stroke="var(--edge)" stroke-width="1.25"/><rect x="120" y="72" width="200" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="105" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">内挿（interpolation）</text><text x="70" y="105" text-anchor="middle" fill="var(--quiet)">外挿</text><text x="370" y="105" text-anchor="middle" fill="var(--quiet)">外挿</text><text x="120" y="150" text-anchor="middle" fill="var(--ink)">3,000個</text><text x="320" y="150" text-anchor="middle" fill="var(--ink)">8,000個</text><text x="220" y="184" text-anchor="middle" fill="var(--ink)">範囲の外（外挿）は前提が崩れやすい</text></svg>`,
          caption: 'データの範囲の外（extrapolation）では、新しい段差や単価の変化が起きているかもしれない。前のレッスンの 9,000個の予測も範囲の外なので、計算はできるが信頼度は下がる。'
        },
        {
          title: 'なぜ？ それでも使われる理由',
          paras: ['予測には、いつも「手間」と「正確さ」のバランスがある。高低点法は、正確さを少し犠牲にして、手間をほとんどゼロにした方法。', 'また高低点法では、出した式がどれくらい当てはまっているか（信頼度）を数字で測れない。もっと正確にしたいときは、全部の点を使う方法を選ぶ。散布図（scatter diagram）に目で線を引く方法や、計算で最もよく当てはまる線を出す回帰分析（linear regression）で、第6部で学ぶ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「データを全部使うので外れ値に強い」は高低点法の説明ではなく、回帰分析の長所。高低点法は2点だけを使うので、外れ値にとても弱い。また、データの範囲の外の予測（外挿）は、範囲の中（内挿）より信頼しにくい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['長所: 簡単・速い・2点だけで使える', '短所: 2点以外を無視し、その2点が異常な値かもしれない', '前提: 直線の関係・活動量だけが原因・過去が将来も続く。範囲の外では信頼しにくい']
        },
        {
          title: '英単語',
          words: [
            ['advantage / disadvantage', 'アドバンテージ / ディスアドバンテージ', '長所 / 短所'],
            ['representative', 'リプリゼンタティブ', '代表的な（ふつうの状態を表している）'],
            ['outlier', 'アウトライアー', '外れ値（ほかと大きく違う値）'],
            ['interpolation', 'インターポレーション', '内挿（データの範囲の中で予測すること）'],
            ['extrapolation', 'エクストラポレーション', '外挿（データの範囲の外で予測すること）'],
            ['linear regression', 'リニア リグレッション', '回帰分析（全部の点から最もよく当てはまる直線を出す）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a disadvantage of the high-low method?', choices: ['It requires complex calculations and specialist software', 'It cannot be used to estimate fixed costs', 'It uses only two observations, which may not be representative', 'It uses all the available data, so outliers have a large effect'], answer: 2, explain: '高低点法は2点だけを使い、その2点は極端な値なので異常な月かもしれない。計算は簡単で、固定費も出せる。全部のデータを使うのは回帰分析。' },
        { q: 'Which of the following statements about the high-low method are correct? (1) It assumes a linear relationship between total cost and activity. (2) Forecasts are most reliable for activity levels outside the range of the data used.', choices: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], answer: 0, explain: '(1) は正しい。単価と固定費が一定の直線を仮定している。(2) は誤り。データの範囲の外（外挿）の予測は、範囲の中（内挿）より信頼しにくい。' },
        { q: 'Which of the following is an advantage of the high-low method compared with linear regression analysis?', choices: ['It uses every observation in the data', 'It is simple and quick to calculate', 'It is unaffected by unusual results', 'It does not assume a linear relationship'], answer: 1, explain: '高低点法の長所は簡単で速いこと。全部の点を使うのは回帰分析。高低点法は異常な点に弱く、直線の関係も仮定している。' },
        { q: '高低点法で使った最高の活動量の月に、臨時の修理費が入っていた。ほかの点は正常。求めた数字はどうなる？', choices: ['変動費単価が小さすぎ、固定費が大きすぎる', '変動費単価も固定費も正しい', '固定費だけが大きすぎる', '変動費単価が大きすぎ、固定費が小さすぎる'], answer: 3, explain: '最高点の原価が高すぎるので、原価の差が大きくなり変動費単価が大きく出る。固定費 ＝ 総原価 − 単価 × 活動量 なので、単価が大きすぎる分だけ固定費は小さく出る。' },
        { q: '高低点法で、最低 3,000個、最高 8,000個の月のデータから式を作った。どの生産量の予測がいちばん信頼しやすい？', choices: ['12,000個', '1,000個', '6,000個', 'どれも同じ'], answer: 2, explain: '6,000個はデータの範囲の中（内挿）。12,000個や 1,000個は範囲の外（外挿）で、新しい段差や単価の変化が起きているかもしれない。' }
      ]
    }
  ],
  cards: [
    { id: 'M017-1', lesson: 'M017', q: '原価の式 y ＝ a ＋ bx の a と b は？', a: 'a＝固定費の合計（切片）、b＝1単位あたり変動費（傾き）' },
    { id: 'M017-2', lesson: 'M017', q: '原価の式で x と y は何を表す？', a: 'x＝活動量（独立変数）、y＝総原価（従属変数）' },
    { id: 'M017-3', lesson: 'M017', q: '2点から b と a を出す手順は？', a: 'b＝y の差÷x の差、a＝y − b×x' },
    { id: 'M017-4', lesson: 'M017', q: '固定費・変動費を一次関数で書くと？', a: '固定費は y＝a（b＝0、水平）、変動費は y＝bx（a＝0、原点を通る）' },
    { id: 'M017-5', lesson: 'M017', q: '平均原価（総原価÷数量）は b と同じ？', a: '違う。平均には固定費が混ざる。b は1単位ふえたときの増え方' },
    { id: 'M017-6', lesson: 'M017', q: '一次関数かどうかの見分け方は？ 2y＝400＋6x の a と b は？', a: 'x が1乗だけなら一次関数（x²・÷x は違う）。y＝200＋3x に直して a＝200、b＝3' },
    { id: 'M018-1', lesson: 'M018', q: '高低点法で選ぶ2点は？', a: '活動量が最高の点と最低の点（原価の高低ではない）' },
    { id: 'M018-2', lesson: 'M018', q: '高低点法の変動費単価の式は？', a: '(最高点の原価 − 最低点の原価)÷(最高の活動量 − 最低の活動量)' },
    { id: 'M018-3', lesson: 'M018', q: '高低点法で固定費を出す式は？', a: '総原価 − 変動費単価×その点の活動量（もう一方の点で確かめる）' },
    { id: 'M018-4', lesson: 'M018', q: 'なぜ差を取ると変動費単価が出る？', a: '固定費は両方の点で同じなので、差には変動費の増加だけが残るから' },
    { id: 'M018-5', lesson: 'M018', q: '1,200単位 $9,400、2,000単位 $12,600。b と a は？', a: 'b＝$4、a＝$4,600' },
    { id: 'M019-1', lesson: 'M019', q: '段差や単価の変化がある時の高低点法の3ステップは？', a: '変化を取り除いて2点をそろえる→高低点法→予測で変化を戻す' },
    { id: 'M019-2', lesson: 'M019', q: '固定費の段差を取り除かずに高低点法を使うと？', a: '変動費単価が大きすぎ、固定費が小さすぎる結果になる' },
    { id: 'M019-3', lesson: 'M019', q: '超えた分の単価が25%安い時、超えた3,000個は通常の何個分？', a: '3,000×0.75＝2,250個分' },
    { id: 'M019-4', lesson: 'M019', q: '値引きの問題で必ず確かめることは？', a: '値引きが「超えた分だけ」か「全部の単位」か' },
    { id: 'M019-5', lesson: 'M019', q: 'stepped fixed cost とは？', a: '一定の活動量を超えると段で上がる固定費（階段状の固定費）' },
    { id: 'M019-6', lesson: 'M019', q: '「超えたら全部の単位が25%安い」なら9,000個は通常の何個分？', a: '9,000×0.75＝6,750個分（全部の単位を割り引く）' },
    { id: 'M020-1', lesson: 'M020', q: '高低点法の長所は？', a: '簡単・速い・理解しやすい。2点だけで使える' },
    { id: 'M020-2', lesson: 'M020', q: '高低点法の最大の短所は？', a: '2点しか使わず、その2点が異常な値（外れ値）かもしれない' },
    { id: 'M020-3', lesson: 'M020', q: '高低点法の前提（仮定）を3つ', a: '直線の関係、活動量だけが原因、過去の関係が将来も続く' },
    { id: 'M020-4', lesson: 'M020', q: 'interpolation と extrapolation のどちらが信頼しやすい？', a: 'interpolation（データの範囲の中の予測）' },
    { id: 'M020-5', lesson: 'M020', q: '全部の点を使って最もよく当てはまる線を出す方法は？', a: '回帰分析（linear regression）' }
  ]
});
