(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 120,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M079',
      no: 79,
      title: '散布図と最もよく当てはまる線',
      goal: '散布図を読み、目で引いた最もよく当てはまる線から固定費と変動費を見積もり、相関の向きや外れ値を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A4(b)'],
      slides: [
        {
          title: '気温とアイスの売上',
          paras: ['コンビニで、毎日の最高気温と、その日のアイスの売上を記録する。1日分を1つの点にして、横に気温、縦に売上をとって打っていく。', '30日分打つと、点はばらつきながらも右上がりに並ぶ。暑い日ほど売れる、という傾向が1枚の図で見える。']
        },
        {
          title: '散布図（scatter diagram）とは',
          paras: ['2つの数字の組を、1組ずつ点にして打った図を散布図（scatter diagram、scatter graph）という。原価の分析では、1か月分のデータが1つの点になる。'],
          list: ['横軸 x: 独立変数（活動量。生産量・作業時間など）', '縦軸 y: 従属変数（原価。総原価・製造間接費など）'],
          after: '点の集まりに沿って、全体の傾向を表す1本の直線を引く。これを最もよく当てはまる線（line of best fit）という。'
        },
        {
          title: '例のデータ',
          paras: ['冷凍たこ焼き工場の、5か月分の生産量と総原価。'],
          table: { caption: '単位に注意（000 は千）', head: ['月', '生産量（000個）', '総原価（$000）'], rows: [['1月', '2', '9'], ['2月', '3', '11'], ['3月', '4', '14'], ['4月', '5', '15'], ['5月', '6', '18']] },
          after: '生産量の平均は 20 ÷ 5 ＝ 4、総原価の平均は 67 ÷ 5 ＝ 13.4。この (4, 13.4) を平均の点と呼ぶ。'
        },
        {
          title: '散布図に線を引く',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="5つの点の散布図と、目で引いた最もよく当てはまる線。線は縦軸と4.5で交わる" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">点の流れに沿って1本の線を引く</text><line x1="70" y1="40" x2="70" y2="250" stroke="var(--edge)" stroke-width="1.25"/><line x1="70" y1="250" x2="415" y2="250" stroke="var(--edge)" stroke-width="1.25"/><text x="78" y="48" fill="var(--quiet)">総原価（$000）</text><text x="70" y="268" text-anchor="middle" fill="var(--quiet)">0</text><text x="150" y="268" text-anchor="middle" fill="var(--quiet)">2</text><text x="230" y="268" text-anchor="middle" fill="var(--quiet)">4</text><text x="310" y="268" text-anchor="middle" fill="var(--quiet)">6</text><text x="415" y="290" text-anchor="end" fill="var(--quiet)">生産量（000個）</text><line x1="70" y1="205" x2="350" y2="51" stroke="var(--accent)" stroke-width="2.5"/><text x="62" y="210" text-anchor="end" fill="var(--ink)">4.5</text><circle cx="150" cy="160" r="5" fill="var(--ink)"/><circle cx="190" cy="140" r="5" fill="var(--ink)"/><circle cx="230" cy="110" r="5" fill="var(--ink)"/><circle cx="270" cy="100" r="5" fill="var(--ink)"/><circle cx="310" cy="70" r="5" fill="var(--ink)"/><line x1="222" y1="116" x2="238" y2="116" stroke="var(--ink)" stroke-width="1.5"/><line x1="230" y1="108" x2="230" y2="124" stroke="var(--ink)" stroke-width="1.5"/><text x="240" y="150" fill="var(--ink)">平均の点（4, 13.4）</text><text x="80" y="236" fill="var(--ink)">切片 ≒ 固定費 $4,500</text></svg>`,
          caption: '線の上と下に点がほぼ同じ数あり、平均の点（十字）の近くを通っている。'
        },
        {
          title: '線の引き方のルール',
          numbered: ['点の全体の流れに沿わせる（2点だけを結ばない）', '線の上と下に、点がほぼ同じ数になるようにする', '平均の点（x の平均, y の平均）を通す', '他から大きく外れた点（外れ値、outlier）は線を引くときに無視し、理由を調べる'],
          after: '線を引いたら、縦軸と交わる高さが固定費、傾きが1単位あたり変動費の見積もりになる。'
        },
        {
          title: '例題: 線から原価の式を読む',
          example: {
            problem: '上の散布図に目で引いた線は、縦軸と 4.5（$4,500）で交わり、生産量 6（6,000個）のところで 17.7（$17,700）を通る。固定費、1個あたり変動費、5,000個作る月の総原価を見積もれ。',
            steps: ['固定費 ＝ 線が縦軸と交わる高さ ＝ $4,500', '傾き ＝ (17.7 − 4.5) ÷ (6 − 0) ＝ 13.2 ÷ 6 ＝ 2.2', '単位をそろえる: $000 ÷ 000個 なので、1個あたり $2.20', '式: y ＝ 4.5 ＋ 2.2x（y は $000、x は 000個）', '5,000個: 4.5 ＋ 2.2 × 5 ＝ 15.5'],
            answer: '固定費 $4,500、変動費 1個 $2.20、5,000個なら $15,500'
          }
        },
        {
          title: '散布図で読み取れること',
          list: ['向き: 右上がりは正の相関（positive correlation）、右下がりは負の相関（negative correlation）、形がなければ相関なし（no correlation）', '強さ: 点が線の近くに集まるほど関係が強く、予測を信頼しやすい', '外れ値: ストライキや大口受注など、特別な月の点', '形: 点が曲線に並ぶなら、直線で予測するのは向かない']
        },
        {
          title: 'なぜ？ 散布図を使う理由',
          paras: ['高低点法は最高点と最低点の2つだけを使うので、その2点が特別な月だと式が大きく狂う。散布図は全部の点を目で見るので、外れ値に気づいて除ける。', '弱点は主観的（subjective）なこと。同じ点でも、人によって引く線が少しずつ違い、固定費と変動費の答えも変わる。誰が計算しても同じ線になる方法が、次の回帰分析。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '原価を横軸にしない。横軸は活動量（x）、縦軸が原価（y）。また、線を原点（0, 0）から引くと決めつけない。原点から引くと固定費が0になってしまう。線は点の流れに合わせ、縦軸と交わる高さは結果として読む。外れ値に引っ張られて線を傾けるのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['散布図は 横軸＝活動量 x、縦軸＝原価 y。1期間が1点', '線は全体の流れに沿い、上下の点の数をそろえ、平均の点を通す。外れ値は無視', '切片＝固定費、傾き＝変動費単価。ただし目で引くので主観的']
        },
        {
          title: '英単語',
          words: [
            ['scatter diagram / scatter graph', 'スキャター ダイアグラム / グラフ', '散布図'],
            ['line of best fit', 'ライン オブ ベスト フィット', '最もよく当てはまる線'],
            ['outlier', 'アウトライアー', '外れ値（他の点から大きく離れた点）'],
            ['positive correlation', 'ポジティブ コリレーション', '正の相関（右上がり）'],
            ['negative correlation', 'ネガティブ コリレーション', '負の相関（右下がり）'],
            ['subjective', 'サブジェクティブ', '主観的（人によって結果が違う）']
          ]
        }
      ],
      quiz: [
        { q: 'A line of best fit has been drawn by eye on a scatter diagram of total cost (y) against output (x). The line crosses the y axis at $2,000 and passes through the point where output is 500 units and total cost is $4,500. What is the estimated variable cost per unit?', choices: ['$9.00', '$4.00', '$5.00', '$13.00'], answer: 2, explain: '傾き ＝ (4,500 − 2,000) ÷ 500 ＝ $5。$9.00 は 4,500 ÷ 500 で、固定費まで含めた平均。$4.00 は固定費 2,000 を数量で割っただけ。$13.00 は差ではなく和を取っている。' },
        { q: 'Which of the following statements about a line of best fit drawn by eye on a scatter diagram is correct?', choices: ['It must pass through the origin', 'It should pass through the mean values of x and y', 'It must join the points with the highest and lowest activity', 'It is objective, so everyone will draw the same line'], answer: 1, explain: '目で引く線は平均の点を通し、上下の点の数をそろえる。原点を通すと固定費が0になる。最高・最低の2点を結ぶのは高低点法。目で引く線は主観的で、人によって違う。' },
        { q: '散布図で、点がばらつきながら右下がりに並んでいる。読み取れることとして正しいのは？', choices: ['x がふえると y もふえる傾向がある（正の相関）', 'x と y の間に関係はない', 'x が y の原因であることが証明された', 'x がふえると y は減る傾向がある（負の相関）'], answer: 3, explain: '右下がりは負の相関。右上がりが正の相関。形がばらばらなら相関なし。散布図で分かるのは「一緒に動く傾向」で、原因かどうかまでは分からない。' },
        { q: '散布図に目で引いた線が、縦軸と $3,000 で交わり、400個のところで $5,000 を通る。600個作る月の総原価の見積もりはいくら？', type: 'number', answer: 6000, unit: '$', explain: '傾き ＝ (5,000 − 3,000) ÷ 400 ＝ $5。600個: 3,000 ＋ 5 × 600 ＝ $6,000。固定費 3,000 を足し忘れて $3,000 としないこと。' },
        { q: '5か月のうち1か月だけ、ストライキで生産量が少ないのに原価がとても高い点がある。最もよく当てはまる線を引くときの扱いとして正しいのは？', choices: ['外れ値として線を引くときは無視し、理由を調べる', 'その点を必ず通るように線を引く', 'その点と最高の点を結んで線にする', 'その点に合わせて線全体を上にずらす'], answer: 0, explain: '特別な事情でできた点（外れ値）に線を合わせると、ふだんの原価の動きが分からなくなる。無視して線を引き、なぜ外れたかを調べる。' }
      ]
    },
    {
      id: 'M080',
      no: 80,
      title: '回帰分析で a と b を求める',
      goal: '回帰分析の式で y ＝ a ＋ bx の a と b を計算し、固定費・変動費として意味を説明できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A5(a)'],
      slides: [
        {
          title: '誰が引いても同じ線にしたい',
          paras: ['同じ散布図を友達5人に渡して線を引いてもらうと、5本とも少しずつ違う。固定費の答えも人によって変わってしまう。', 'そこで、計算で「いちばん当てはまる1本」を決める。これが回帰分析（linear regression analysis）。誰が計算しても、同じ a と b になる。']
        },
        {
          title: '最小二乗法（least squares method）',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="直線と5つの点。各点から直線までの縦のずれを点線で示す" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">点と線の縦のずれ</text><line x1="50" y1="45" x2="50" y2="235" stroke="var(--edge)" stroke-width="1.25"/><line x1="50" y1="235" x2="420" y2="235" stroke="var(--edge)" stroke-width="1.25"/><text x="58" y="52" fill="var(--quiet)">原価 y</text><text x="415" y="225" text-anchor="end" fill="var(--quiet)">活動量 x</text><line x1="60" y1="220" x2="410" y2="70" stroke="var(--accent)" stroke-width="2.5"/><line x1="110" y1="180" x2="110" y2="198.6" stroke="var(--ink)" stroke-width="1.25" stroke-dasharray="3 3"/><line x1="180" y1="185" x2="180" y2="168.6" stroke="var(--ink)" stroke-width="1.25" stroke-dasharray="3 3"/><line x1="250" y1="120" x2="250" y2="138.6" stroke="var(--ink)" stroke-width="1.25" stroke-dasharray="3 3"/><line x1="320" y1="125" x2="320" y2="108.6" stroke="var(--ink)" stroke-width="1.25" stroke-dasharray="3 3"/><line x1="390" y1="65" x2="390" y2="78.6" stroke="var(--ink)" stroke-width="1.25" stroke-dasharray="3 3"/><circle cx="110" cy="180" r="5" fill="var(--ink)"/><circle cx="180" cy="185" r="5" fill="var(--ink)"/><circle cx="250" cy="120" r="5" fill="var(--ink)"/><circle cx="320" cy="125" r="5" fill="var(--ink)"/><circle cx="390" cy="65" r="5" fill="var(--ink)"/><text x="328" y="135" fill="var(--ink)">縦のずれ</text><text x="220" y="262" text-anchor="middle" fill="var(--ink)">ずれを2乗して足した合計が最小の線を選ぶ</text></svg>`,
          caption: '回帰分析の線は、この合計が最も小さくなる1本。だから最小二乗法と呼ぶ。'
        },
        {
          title: 'a と b を出す式',
          formula: 'b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)',
          paras: ['b を先に出し、次に a を出す。'],
          after: 'a ＝ Σy ÷ n − b × Σx ÷ n（y の平均 − b × x の平均）。n はデータの数、Σ（シグマ）は「全部足す」の記号。Σxy は x × y を月ごとに出して足したもの、Σx² は x² を足したもの。'
        },
        {
          title: '準備: 計算表を作る',
          paras: ['M079 の工場のデータ（x は生産量 000個、y は総原価 $000、n ＝ 5）。月ごとに xy と x² を出す。'],
          table: { caption: '回帰分析の計算表', head: ['月（x, y）', 'xy', 'x²'], rows: [['1月（2, 9）', '18', '4'], ['2月（3, 11）', '33', '9'], ['3月（4, 14）', '56', '16'], ['4月（5, 15）', '75', '25'], ['5月（6, 18）', '108', '36']], total: ['合計 Σx ＝ 20、Σy ＝ 67', 'Σxy ＝ 290', 'Σx² ＝ 90'] }
        },
        {
          title: '例題1: 表から a と b を出す',
          example: {
            problem: 'n ＝ 5、Σx ＝ 20、Σy ＝ 67、Σxy ＝ 290、Σx² ＝ 90。回帰直線 y ＝ a ＋ bx を求め、固定費と1個あたり変動費を答えよ。',
            steps: ['b の分子: nΣxy − ΣxΣy ＝ 5 × 290 − 20 × 67 ＝ 1,450 − 1,340 ＝ 110', 'b の分母: nΣx² − (Σx)² ＝ 5 × 90 − 20² ＝ 450 − 400 ＝ 50', 'b ＝ 110 ÷ 50 ＝ 2.2', 'a ＝ 67 ÷ 5 − 2.2 × 20 ÷ 5 ＝ 13.4 − 8.8 ＝ 4.6', '式: y ＝ 4.6 ＋ 2.2x（y は $000、x は 000個）'],
            answer: '固定費 $4,600（a）、1個あたり変動費 $2.20（b）'
          },
          note: { kind: 'tip', text: '目で引いた線（M079）は固定費 $4,500 だった。回帰分析は計算で決めるので、誰がやっても $4,600 になる。' }
        },
        {
          title: '例題2: 合計だけ与えられたとき',
          example: {
            problem: '6日分のデータで、x は1日の配達件数、y は1日の配送費（$）。n ＝ 6、Σx ＝ 60、Σy ＝ 1,500、Σxy ＝ 16,400、Σx² ＝ 670。a と b を求めよ。',
            steps: ['分子: 6 × 16,400 − 60 × 1,500 ＝ 98,400 − 90,000 ＝ 8,400', '分母: 6 × 670 − 60² ＝ 4,020 − 3,600 ＝ 420', 'b ＝ 8,400 ÷ 420 ＝ 20', 'a ＝ 1,500 ÷ 6 − 20 × 60 ÷ 6 ＝ 250 − 200 ＝ 50'],
            answer: 'y ＝ 50 ＋ 20x（1日の固定費 $50、1件あたり $20）'
          }
        },
        {
          title: '結果の読み方（interpret）',
          list: ['a（切片）: 活動量が0のときの原価＝固定費の見積もり', 'b（傾き）: 活動量が1単位ふえたときの原価の増え方＝変動費単価', '単位を必ず確かめる: x が 000個、y が $000 なら、a ＝ 4.6 は $4,600、b ＝ 2.2 は1個 $2.20', 'b がマイナスなら、x がふえると y が減る関係（負の相関）'],
          after: 'a がマイナスになることもある。データが0から遠い範囲にしかないときに起きやすく、「固定費がマイナス」という意味ではない。'
        },
        {
          title: 'なぜ？ b を先に、a を後に出す',
          paras: ['回帰直線は、必ず平均の点（x の平均, y の平均）を通る。だから ȳ ＝ a ＋ b × x̄ が成り立ち、a ＝ ȳ − b × x̄ と書きかえられる。', 'つまり、傾き b が決まれば、平均の点を通るように a が自動的に決まる。M079 で「線は平均の点を通す」と習ったのは、このため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'Σx²（2乗してから足す、90）と (Σx)²（足してから2乗する、400）を混ぜない。a を出すとき n で割り忘れて Σy − bΣx としない。x と y を逆にしない。x は原価を動かす側（活動量）、y は原価。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)', 'a ＝ Σy ÷ n − b × Σx ÷ n（平均の点を通る）', 'a ＝ 固定費、b ＝ 変動費単価。単位（000 など）を必ず戻す']
        },
        {
          title: '英単語',
          words: [
            ['linear regression analysis', 'リニア リグレッション アナリシス', '回帰分析（全部の点から最もよく当てはまる直線を計算する）'],
            ['least squares method', 'リースト スクエアズ メソッド', '最小二乗法'],
            ['regression line', 'リグレッション ライン', '回帰直線'],
            ['intercept (a)', 'インターセプト', '切片（固定費の見積もり）'],
            ['gradient / slope (b)', 'グラディエント / スロープ', '傾き（変動費単価の見積もり）'],
            ['sigma (Σ)', 'シグマ', '合計（全部足す）の記号']
          ]
        }
      ],
      quiz: [
        { q: 'A company has collected the following data from 4 months: n = 4, sum of x = 20, sum of y = 100, sum of xy = 560, sum of x squared = 120. Using linear regression analysis, what is the value of b (the gradient)?', type: 'number', answer: 3, unit: '', explain: '分子 ＝ 4 × 560 − 20 × 100 ＝ 2,240 − 2,000 ＝ 240。分母 ＝ 4 × 120 − 20² ＝ 480 − 400 ＝ 80。b ＝ 240 ÷ 80 ＝ 3。' },
        { q: 'Using the same data (n = 4, sum of x = 20, sum of y = 100) and b = 3, what is the value of a (the intercept)?', choices: ['$40', '$25', '$10', '$15'], answer: 2, explain: 'a ＝ 100 ÷ 4 − 3 × 20 ÷ 4 ＝ 25 − 15 ＝ 10。$40 は n で割らずに 100 − 3 × 20 とした答え。$25 は y の平均だけで b × x の平均を引き忘れた答え。$15 は b × x の平均そのもの。' },
        { q: 'n ＝ 4、Σx ＝ 20、Σx² ＝ 120 のとき、b の分母 nΣx² − (Σx)² はいくら？', type: 'number', answer: 80, unit: '', explain: '4 × 120 − 20² ＝ 480 − 400 ＝ 80。(Σx)² は合計 20 を2乗して 400。Σx² の 120 と混ぜると答えがずれる。' },
        { q: '回帰分析で y ＝ 4.6 ＋ 2.2x が得られた。y は総原価（$000）、x は生産量（000個）。正しい読み方は？', choices: ['固定費 $4.60、1個あたり変動費 $2,200', '固定費 $4,600、1個あたり変動費 $2.20','固定費 $2,200、1個あたり変動費 $4.60', '固定費 $4,600、1,000個あたり変動費 $2.20'], answer: 1, explain: 'a ＝ 4.6 は $000 なので $4,600。b ＝ 2.2 は「$000 ÷ 000個」なので1個あたり $2.20（1,000個あたりなら $2,200）。a と b を逆にしないこと。' },
        { q: 'Which of the following best describes the line produced by linear regression analysis?', choices: ['The line that joins the highest and lowest levels of activity', 'The line drawn by eye with an equal number of points on each side', 'The line that passes through the origin and the mean point', 'The line that minimises the sum of the squared vertical distances between the points and the line'], answer: 3, explain: '回帰分析は最小二乗法で、縦のずれの2乗の合計が最小の線を選ぶ。最高・最低を結ぶのは高低点法、目で引くのは散布図。回帰直線は必ず平均の点を通るが、原点を通るとは限らない（原点を通るのは固定費が0のときだけ）。' }
      ]
    },
    {
      id: 'M081',
      no: 81,
      title: '回帰式で原価と売上を予測する',
      goal: '回帰式 y ＝ a ＋ bx に x を入れて原価・売上を予測し、時期の番号や単位の扱い、予測の信頼性を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A5(b)'],
      slides: [
        {
          title: 'タクシー料金を先に計算する',
          paras: ['タクシーは「初乗り 500円＋1km ごとに 300円」のような式で決まる。行き先までが 8km と分かれば、乗る前に 500 ＋ 300 × 8 ＝ 2,900円 と予測できる。', '回帰分析で作った式も同じ使い方をする。来月の生産量や広告費（x）を入れれば、原価や売上（y）が予測できる。']
        },
        {
          title: '予測の3ステップ',
          numbered: ['式の y と x が何か、単位（$000、000個など）は何かを確かめる', 'x に予測したい値を、式と同じ単位で入れる', '出た y を元の単位に戻して答える'],
          formula: '予測値 y ＝ a ＋ b × x'
        },
        {
          title: '例題1: 原価を予測する',
          example: {
            problem: '回帰式は y ＝ 4.6 ＋ 2.2x（y は総原価 $000、x は生産量 000個）。来月 4,500個作るときの総原価を予測せよ。',
            steps: ['x を式の単位にする: 4,500個 ＝ 4.5（000個）', 'y ＝ 4.6 ＋ 2.2 × 4.5 ＝ 4.6 ＋ 9.9 ＝ 14.5', '単位を戻す: 14.5 × $1,000 ＝ $14,500', '参考: 1個あたり原価 ＝ 14,500 ÷ 4,500 ≒ $3.22（固定費を含む平均）'],
            answer: '$14,500'
          }
        },
        {
          title: '例題2: 時期の番号で売上の傾向を予測する',
          example: {
            problem: '四半期の売上の傾向（trend）は y ＝ 120 ＋ 8x（y は売上 $000）。x は 20X5年 第1四半期を 1 とした通し番号。20X7年 第3四半期の売上の傾向値を予測せよ。',
            steps: ['番号を数える: 20X5年は 1〜4、20X6年は 5〜8', '20X7年は 第1四半期 ＝ 9、第2 ＝ 10、第3 ＝ 11', 'y ＝ 120 ＋ 8 × 11 ＝ 120 ＋ 88 ＝ 208', '単位を戻す: $208,000'],
            answer: '$208,000（売上は四半期ごとに $8,000 ずつ伸びる傾向）'
          },
          note: { kind: 'tip', text: 'x が「時期の番号」の式は、時系列分析（M085 以降）でも使う。番号の数え間違いが最も多いミス。' }
        },
        {
          title: '例題3: 広告費から売上を予測する',
          example: {
            problem: '月の売上 y（$000）と広告費 x（$000）の回帰式は y ＝ 50 ＋ 4.5x。広告費を $20,000 にしたときの売上を予測せよ。',
            steps: ['x ＝ 20（$000）', 'y ＝ 50 ＋ 4.5 × 20 ＝ 50 ＋ 90 ＝ 140', '単位を戻す: $140,000', '読み方: b ＝ 4.5 は、広告費が $1 ふえるごとに売上が $4.5 ふえる傾向。a ＝ 50 は、広告費が0のときの売上 $50,000'],
            answer: '$140,000'
          },
          after: '逆に、目標の売上から必要な x を出すこともできる。y に目標を入れ、a を引いて b で割る。'
        },
        {
          title: '内挿と外挿',
          svg: `<svg viewBox="0 0 440 210" role="img" aria-label="データの範囲は2000個から6000個。4500個の予測は範囲の中、9000個の予測は範囲の外" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">予測する x はデータの範囲の中か外か</text><rect x="116" y="60" width="152" height="90" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.5"/><text x="192" y="95" text-anchor="middle" fill="var(--ink)">データの範囲</text><text x="192" y="118" text-anchor="middle" fill="var(--ink)">2,000〜6,000個</text><line x1="40" y1="150" x2="420" y2="150" stroke="var(--edge)" stroke-width="1.25"/><circle cx="211" cy="150" r="6" fill="var(--ink)"/><circle cx="382" cy="150" r="6" fill="var(--ink)"/><text x="116" y="170" text-anchor="middle" fill="var(--quiet)">2,000</text><text x="211" y="170" text-anchor="middle" fill="var(--quiet)">4,500</text><text x="268" y="170" text-anchor="middle" fill="var(--quiet)">6,000</text><text x="382" y="170" text-anchor="middle" fill="var(--quiet)">9,000</text><text x="211" y="196" text-anchor="middle" fill="var(--ink)">内挿（信頼しやすい）</text><text x="420" y="196" text-anchor="end" fill="var(--ink)">外挿（注意）</text></svg>`,
          caption: 'データの範囲の中の予測を内挿（interpolation）、外の予測を外挿（extrapolation）という。'
        },
        {
          title: 'なぜ？ 外挿は信頼しにくい',
          paras: ['式は、過去に実際に起きた 2,000〜6,000個 の範囲で作られた。9,000個作ったことは一度もないので、そこでも同じ関係が続くかは分からない。', '生産量が大きくふえると、工場を追加で借りて固定費が段差で上がったり、まとめ買いで材料の単価が下がったりする。式はその変化を知らないので、外挿の予測は外れやすい。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '単位をそろえずに 4,500 をそのまま x に入れない（式が 000個 なら 4.5）。a を足し忘れて b × x だけにしない。時期の番号は1から数え直さず、通し番号で数える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予測は x を式と同じ単位で入れ、y を元の単位に戻す', '時期の番号は通し番号（20X5年 第1四半期 ＝ 1 なら 20X6年 第1 ＝ 5）', 'データの範囲の中（内挿）は信頼しやすく、外（外挿）は注意']
        },
        {
          title: '英単語',
          words: [
            ['forecast', 'フォーキャスト', '予測（する）'],
            ['regression coefficients', 'リグレッション コエフィシェンツ', '回帰係数（a と b のこと）'],
            ['trend', 'トレンド', '傾向（長い目で見た動き）'],
            ['interpolation', 'インターポレーション', '内挿（データの範囲の中で予測する）'],
            ['extrapolation', 'エクストラポレーション', '外挿（データの範囲の外で予測する）'],
            ['revenue', 'レベニュー', '売上（収益）']
          ]
        }
      ],
      quiz: [
        { q: 'A company has established that its total costs (y, in $) are related to output (x, in units) by the equation y = 12,500 + 4.2x. What is the forecast total cost for an output of 3,000 units?', type: 'number', answer: 25100, unit: '$', explain: '12,500 ＋ 4.2 × 3,000 ＝ 12,500 ＋ 12,600 ＝ $25,100。固定費 12,500 を足し忘れて $12,600 としないこと。' },
        { q: 'The trend of quarterly sales (y, in $000) is given by y = 340 + 12x, where x = 1 for quarter 1 of 20X5. What is the forecast trend value of sales for quarter 4 of 20X6?', choices: ['$424,000', '$436,000', '$448,000', '$388,000'], answer: 1, explain: '20X5年は x ＝ 1〜4、20X6年は 5〜8 なので、20X6年 第4四半期は x ＝ 8。340 ＋ 12 × 8 ＝ 436。$424,000 は x ＝ 7、$448,000 は x ＝ 9 で数え間違い。$388,000 は年をまたがず x ＝ 4 とした答え。' },
        { q: 'A regression equation is y = 4.6 + 2.2x, where y is total cost in $000 and x is output in 000 units. What is the forecast total cost for an output of 5,000 units?', choices: ['$11,000', '$15.60', '$11,004,600', '$15,600'], answer: 3, explain: 'x ＝ 5（000個）で、4.6 ＋ 2.2 × 5 ＝ 15.6 → $15,600。$11,004,600 は x に 5,000 をそのまま入れた答え（4.6 ＋ 2.2 × 5,000 ＝ 11,004.6 を $000 に戻した。単位をそろえていない）。$15.60 は $000 に戻し忘れ。$11,000 は固定費の足し忘れ。' },
        { q: '売上 y（$000）と広告費 x（$000）の回帰式は y ＝ 50 ＋ 4.5x。売上 $185,000 を目標にするとき、必要な広告費はいくら？（$ で答える）', type: 'number', answer: 30000, unit: '$', explain: '185 ＝ 50 ＋ 4.5x → 4.5x ＝ 135 → x ＝ 30（$000）。つまり $30,000。a を引いてから b で割る。' },
        { q: '生産量 2,000〜6,000個 の過去データから原価の回帰式を作った。最も信頼しやすい予測はどれ？', choices: ['9,000個のときの原価（範囲の外＝外挿）', '500個のときの原価（範囲の外＝外挿）', '5,000個のときの原価（範囲の中＝内挿）', 'どの生産量でも同じように信頼できる'], answer: 2, explain: 'データの範囲の中の予測（内挿）がいちばん信頼しやすい。範囲の外では、固定費の段差や単価の変化など、式が知らない変化が起きうる。' }
      ]
    },
    {
      id: 'M082',
      no: 82,
      title: '相関係数と決定係数の意味',
      goal: '相関の種類、相関係数 r と決定係数 r² の意味を説明し、相関と因果を区別できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A5(c)'],
      slides: [
        {
          title: '勉強時間とテストの点',
          paras: ['勉強時間が長い人ほど、テストの点は高い傾向がある。でも、ぴったり比例はしない。体調や問題との相性など、ほかの要因もあるから。', '2つの数字が「一緒に動く度合い」を相関（correlation）という。回帰分析で作った式がどれだけ当てになるかは、この相関の強さで決まる。']
        },
        {
          title: '散布図で見る3つの形',
          svg: `<svg viewBox="0 0 440 225" role="img" aria-label="右上がりの正の相関、右下がりの負の相関、形のない相関なしの3つの散布図" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">点の並び方で相関が分かる</text><rect x="20" y="45" width="126" height="120" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="157" y="45" width="126" height="120" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="294" y="45" width="126" height="120" fill="none" stroke="var(--edge)" stroke-width="1.25"/><line x1="30" y1="158" x2="138" y2="65" stroke="var(--quiet)" stroke-width="1.25" stroke-dasharray="4 4"/><line x1="167" y1="65" x2="275" y2="158" stroke="var(--quiet)" stroke-width="1.25" stroke-dasharray="4 4"/><circle cx="35" cy="150" r="4" fill="var(--ink)"/><circle cx="52" cy="140" r="4" fill="var(--ink)"/><circle cx="66" cy="132" r="4" fill="var(--ink)"/><circle cx="80" cy="120" r="4" fill="var(--ink)"/><circle cx="95" cy="104" r="4" fill="var(--ink)"/><circle cx="108" cy="100" r="4" fill="var(--ink)"/><circle cx="122" cy="82" r="4" fill="var(--ink)"/><circle cx="134" cy="74" r="4" fill="var(--ink)"/><circle cx="172" cy="72" r="4" fill="var(--ink)"/><circle cx="189" cy="86" r="4" fill="var(--ink)"/><circle cx="203" cy="94" r="4" fill="var(--ink)"/><circle cx="217" cy="108" r="4" fill="var(--ink)"/><circle cx="232" cy="118" r="4" fill="var(--ink)"/><circle cx="245" cy="132" r="4" fill="var(--ink)"/><circle cx="259" cy="140" r="4" fill="var(--ink)"/><circle cx="272" cy="154" r="4" fill="var(--ink)"/><circle cx="310" cy="90" r="4" fill="var(--ink)"/><circle cx="322" cy="150" r="4" fill="var(--ink)"/><circle cx="337" cy="70" r="4" fill="var(--ink)"/><circle cx="350" cy="120" r="4" fill="var(--ink)"/><circle cx="362" cy="95" r="4" fill="var(--ink)"/><circle cx="378" cy="140" r="4" fill="var(--ink)"/><circle cx="392" cy="75" r="4" fill="var(--ink)"/><circle cx="405" cy="115" r="4" fill="var(--ink)"/><text x="83" y="190" text-anchor="middle" fill="var(--ink)">正の相関</text><text x="220" y="190" text-anchor="middle" fill="var(--ink)">負の相関</text><text x="357" y="190" text-anchor="middle" fill="var(--ink)">相関なし</text><text x="83" y="213" text-anchor="middle" fill="var(--quiet)">r は ＋1 に近い</text><text x="220" y="213" text-anchor="middle" fill="var(--quiet)">r は −1 に近い</text><text x="357" y="213" text-anchor="middle" fill="var(--quiet)">r は 0 に近い</text></svg>`,
          caption: '点が1本の直線に近く並ぶほど、相関は強い。'
        },
        {
          title: '相関の種類と r の値',
          table: { caption: '相関係数 r はいつも −1 から ＋1 の間', head: ['相関の種類', 'r の値', '点の様子'], rows: [['完全な正の相関（perfect positive）', '＋1', '右上がりの直線上に全部'], ['部分的な正の相関（partial positive）', '0 と ＋1 の間', '右上がりにばらつく'], ['相関なし（no correlation）', '0', '形がない'], ['部分的な負の相関（partial negative）', '−1 と 0 の間', '右下がりにばらつく'], ['完全な負の相関（perfect negative）', '−1', '右下がりの直線上に全部']] }
        },
        {
          title: '相関係数 r（correlation coefficient）',
          list: ['符号は向き: ＋は正の相関（x がふえると y もふえる）、−は負の相関', '大きさ（符号を取った値）は強さ: 1 に近いほど強く、0 に近いほど弱い', 'r ＝ −0.9 は r ＝ ＋0.7 より強い。マイナスは「弱い」ではなく「逆向き」'],
          after: 'r は −1 より小さくも ＋1 より大きくもならない。1.2 や −1.5 が出たら計算ミス。'
        },
        {
          title: '決定係数 r²（coefficient of determination）',
          paras: ['r を2乗したものを決定係数という。y の変動（ばらつき）のうち、x の変動で説明できる割合を表す。'],
          formula: '決定係数 ＝ r²（0 から 1 の間。％で読む）',
          after: '例: 生産量と総原価の r ＝ 0.9 なら r² ＝ 0.81。総原価の変動の 81% は生産量の変動で説明でき、残りの 19% はほかの要因（材料の値上がり、作業効率など）による。'
        },
        {
          title: 'なぜ？ r だけでなく r² を使う',
          paras: ['r ＝ 0.7 は「強めの相関」に聞こえるが、そのまま「70% 説明できる」とは読めない。2乗すると r² ＝ 0.49 で、原価の動きの半分も説明できていないと分かる。', 'r² は「何％を説明できるか」と割合で読めるので、予測をどこまで信頼してよいかの判断に直接使える。2乗するのでいつもプラスになり、向きの情報は消える。向きは r の符号で見る。']
        },
        {
          title: '相関は因果ではない',
          paras: ['暑い日は、アイスの売上も水の事故も多い。アイスの売上と水の事故には強い正の相関があるが、アイスが事故の原因ではない。どちらも暑さという別の要因で動いている。', 'このような見せかけの相関（spurious correlation）があるので、r が高くても「x が y の原因」とは言えない。原因かどうかは、仕事の中身から考える。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'r ＝ 0.8 を「80% 説明できる」と読まない。説明できる割合は r² ＝ 64%。負の r を弱い相関と思わない。r が高い＝原因、ではない。r ＝ 0 は「直線の関係がない」という意味で、曲線の関係はありうる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['r は −1〜＋1。符号＝向き、大きさ＝強さ', 'r² ＝ y の変動のうち x で説明できる割合（r ＝ 0.9 → 81%）', '相関は因果ではない（見せかけの相関がある）']
        },
        {
          title: '英単語',
          words: [
            ['correlation', 'コリレーション', '相関（2つの数字が一緒に動く度合い）'],
            ['correlation coefficient (r)', 'コリレーション コエフィシェント', '相関係数（−1〜＋1）'],
            ['coefficient of determination (r²)', 'コエフィシェント オブ ディターミネーション', '決定係数（説明できる割合）'],
            ['perfect / partial correlation', 'パーフェクト / パーシャル', '完全な相関 / 部分的な相関'],
            ['no correlation', 'ノー コリレーション', '相関なし'],
            ['spurious correlation', 'スプリアス コリレーション', '見せかけの相関'],
            ['causation', 'コーゼーション', '因果関係']
          ]
        }
      ],
      quiz: [
        { q: 'The correlation coefficient between output and total cost is -0.9. Which of the following statements is correct?', choices: ['90% of the variation in total cost is explained by the variation in output', '81% of the variation in total cost is explained by the variation in output', 'There is only a weak relationship between output and total cost', 'Increases in output cause total cost to increase'], answer: 1, explain: 'r² ＝ (−0.9)² ＝ 0.81 で、81% を説明できる。90% は r をそのまま割合と読んだ誤り。−0.9 は逆向きの強い相関で、弱くない。負の相関なので、x がふえると y は減る傾向。また相関は因果を示さない。' },
        { q: 'Which of the following correlation coefficients indicates the strongest relationship between two variables?', choices: ['+0.75', '+0.15', '0.00', '-0.92'], answer: 3, explain: '強さは符号を取った大きさで比べる。0.92 がいちばん 1 に近い。マイナスは向きを表すだけで、弱いという意味ではない。' },
        { q: '決定係数 r² ＝ 0.64 の意味として正しいのは？', choices: ['y の変動の 64% は x の変動で説明でき、36% はほかの要因による', 'x が 64% ふえると y は 1% ふえる', 'y の予測は 64% の確率で当たる', '相関係数 r は 0.64 である'], answer: 0, explain: 'r² は y の変動のうち x で説明できる割合。r は √0.64 ＝ 0.8（または −0.8）で、0.64 ではない。「当たる確率」でもない。' },
        { q: 'ある町で、本屋の数と犯罪件数に強い正の相関（r ＝ 0.95）があった。どちらも人口が多い町ほど多い。正しい結論は？', choices: ['本屋をふやすと犯罪がふえる', 'r が 1 に近いので因果関係が証明された', '人口という別の要因による見せかけの相関の可能性が高い', '犯罪をへらすには本屋を閉めればよい'], answer: 2, explain: '相関は因果ではない。両方とも人口が多いとふえるので、人口という別の要因で一緒に動いている見せかけの相関（spurious correlation）と考えられる。' },
        { q: 'r ＝ 0.7 のとき、y の変動のうち x の変動で説明できない割合は何％？', type: 'number', answer: 51, unit: '%', explain: 'r² ＝ 0.7² ＝ 0.49 なので、説明できるのは 49%。説明できないのは 100 − 49 ＝ 51%。r をそのまま使って 30% としないこと。' }
      ]
    },
    {
      id: 'M083',
      no: 83,
      title: '相関係数と決定係数を計算して解釈する',
      goal: '相関係数 r と決定係数 r² を式で計算し、予測がどれだけ信頼できるかを言葉で説明できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A5(d)'],
      slides: [
        {
          title: '予測アプリの「当たり具合」',
          paras: ['乗換アプリの到着予測が毎回ずれていたら、誰も信じない。予測の式を作ったら、それがどれだけ当てになるかも数字で確かめたい。', '回帰分析では、その数字が相関係数 r と決定係数 r²。a と b を出したのと同じ合計（Σ）に、Σy² を1つ足すだけで計算できる。']
        },
        {
          title: '相関係数の式',
          formula: 'r ＝ (nΣxy − ΣxΣy) ÷ √{(nΣx² − (Σx)²) × (nΣy² − (Σy)²)}',
          list: ['分子は、b の分子と同じ。だから r と b の符号（＋か−か）はいつも同じ','√ の中の左のかっこは、b の分母と同じ', '新しく要るのは右のかっこ（nΣy² − (Σy)²）だけ'],
          after: 'r を出したら2乗して r²。b を計算した後なら、残りの作業は少ない。'
        },
        {
          title: '準備: y² の列を足す',
          paras: ['M080 の工場のデータ（n ＝ 5、Σx ＝ 20、Σy ＝ 67、Σxy ＝ 290、Σx² ＝ 90）に、y² を加える。'],
          table: { caption: 'y は総原価（$000）', head: ['月（x, y）', 'y²'], rows: [['1月（2, 9）', '81'], ['2月（3, 11）', '121'], ['3月（4, 14）', '196'], ['4月（5, 15）', '225'], ['5月（6, 18）', '324']], total: ['合計', 'Σy² ＝ 947'] }
        },
        {
          title: '例題1: r と r² を計算する',
          example: {
            problem: 'n ＝ 5、Σx ＝ 20、Σy ＝ 67、Σxy ＝ 290、Σx² ＝ 90、Σy² ＝ 947。相関係数 r と決定係数 r² を求め、意味を説明せよ。',
            steps: ['分子: 5 × 290 − 20 × 67 ＝ 1,450 − 1,340 ＝ 110', '左のかっこ: 5 × 90 − 20² ＝ 450 − 400 ＝ 50', '右のかっこ: 5 × 947 − 67² ＝ 4,735 − 4,489 ＝ 246', '√(50 × 246) ＝ √12,300 ≒ 110.9', 'r ＝ 110 ÷ 110.9 ≒ 0.99', 'r² ＝ 0.99² ≒ 0.98'],
            answer: 'r ≒ 0.99（とても強い正の相関）、r² ≒ 0.98。総原価の変動の約 98% は生産量で説明できる'
          }
        },
        {
          title: '結果をどう言葉にするか',
          list: ['r ≒ 0.99: 生産量と総原価には、とても強い正の相関がある', 'r² ≒ 0.98: 総原価の変動の約 98% は生産量の変動で説明でき、ほかの要因は約 2%', 'だから y ＝ 4.6 ＋ 2.2x で、データの範囲の中の原価を予測するのは信頼しやすい'],
          note: { kind: 'tip', text: 'r² が低い（例えば 0.5 前後）なら、生産量以外の要因が大きい。式だけで予測せず、ほかの要因も調べる。' }
        },
        {
          title: '例題2: 負の相関を計算する',
          example: {
            problem: 'x は1箱の価格（$1〜$5）、y は週の販売数（00箱）。n ＝ 5、Σx ＝ 15、Σy ＝ 34、Σxy ＝ 89、Σx² ＝ 55、Σy² ＝ 254。r と r² を求めよ。',
            steps: ['分子: 5 × 89 − 15 × 34 ＝ 445 − 510 ＝ −65', '左のかっこ: 5 × 55 − 15² ＝ 275 − 225 ＝ 50', '右のかっこ: 5 × 254 − 34² ＝ 1,270 − 1,156 ＝ 114', '√(50 × 114) ＝ √5,700 ≒ 75.5', 'r ＝ −65 ÷ 75.5 ≒ −0.86', 'r² ＝ (−0.86)² ≒ 0.74（2乗するとプラス）'],
            answer: 'r ≒ −0.86（強い負の相関）。販売数の変動の約 74% は価格で説明でき、約 26% はほかの要因'
          }
        },
        {
          title: 'なぜ？ √ で割る理由',
          paras: ['分子の 110 や −65 は、データの単位や大きさで値がいくらでも変わる。原価を $ で数えるか $000 で数えるかでも変わってしまう。', 'そこで x と y それぞれのばらつきの大きさ（√ の部分）で割って、単位に関係なく −1〜＋1 に収まる数字にそろえる。だから違う会社や違う原価どうしでも、相関の強さを比べられる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '√ を付け忘れない（110 ÷ 12,300 としない）。Σy²（947）と (Σy)²（4,489）を混ぜない。r がマイナスでも r² はプラス。r の答えが 1 を超えたら、どこかの計算が間違っている。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['r ＝ (nΣxy − ΣxΣy) ÷ √{(nΣx² − (Σx)²)(nΣy² − (Σy)²)}', '分子と左のかっこは b の計算と同じ。新しいのは nΣy² − (Σy)² だけ', 'r² を「y の変動の ○% は x で説明できる」と言葉にする']
        },
        {
          title: '英単語',
          words: [
            ['correlation coefficient', 'コリレーション コエフィシェント', '相関係数 r'],
            ['coefficient of determination', 'コエフィシェント オブ ディターミネーション', '決定係数 r²'],
            ['strong / weak correlation', 'ストロング / ウィーク', '強い / 弱い相関'],
            ['variation', 'ヴァリエーション', '変動（ばらつき）'],
            ['explained by', 'エクスプレインド バイ', '〜で説明される'],
            ['reliable', 'リライアブル', '信頼できる']
          ]
        }
      ],
      quiz: [
        { q: 'For a set of data, the following values have been calculated: n(sum of xy) - (sum of x)(sum of y) = 240, n(sum of x squared) - (sum of x) squared = 400, n(sum of y squared) - (sum of y) squared = 225. What is the correlation coefficient, r?', type: 'number', answer: 0.8, unit: '', explain: 'r ＝ 240 ÷ √(400 × 225) ＝ 240 ÷ √90,000 ＝ 240 ÷ 300 ＝ 0.8。√ を付け忘れると 240 ÷ 90,000 のような小さすぎる数になる。' },
        { q: 'The correlation coefficient between advertising expenditure and sales is -0.6. What is the coefficient of determination and what does it mean?', choices: ['0.6: 60% of the variation in sales is explained by the variation in advertising', '-0.36: sales fall by 36% when advertising increases', '0.36: 64% of the variation in sales is explained by the variation in advertising', '0.36: 36% of the variation in sales is explained by the variation in advertising'], answer: 3, explain: 'r² ＝ (−0.6)² ＝ 0.36 で、説明できるのは 36%。2乗するのでマイナスにはならない。0.6 は r のまま。64% は説明できない側の割合。' },
        { q: 'n ＝ 5、Σx ＝ 20、Σy ＝ 40、Σxy ＝ 169、Σx² ＝ 90、Σy² ＝ 330。相関係数 r はいくら？', type: 'number', answer: 0.9, unit: '', explain: '分子 ＝ 5 × 169 − 20 × 40 ＝ 845 − 800 ＝ 45。左 ＝ 5 × 90 − 400 ＝ 50。右 ＝ 5 × 330 − 1,600 ＝ 50。r ＝ 45 ÷ √(50 × 50) ＝ 45 ÷ 50 ＝ 0.9。r² ＝ 0.81。' },
        { q: '価格 x と販売数 y の相関係数が r ＝ −0.86 と出た。解釈として正しいのは？', choices: ['価格と販売数の関係は弱い', '価格が上がると販売数が減る強い傾向があり、販売数の変動の約 74% は価格で説明できる','価格が上がると販売数もふえる', '販売数の変動の 86% は価格で説明できる'], answer: 1, explain: 'マイナスは逆向き、0.86 は 1 に近いので強い。説明できる割合は r² ＝ 0.86² ≒ 0.74。86% は r をそのまま割合と読んだ誤り。' },
        { q: 'Which of the following changes would NOT alter the value of the correlation coefficient calculated from a set of cost and output data?', choices: ['Adding an unusual month with very high costs to the data', 'Removing two months of data', 'Measuring total cost in $000 instead of $', 'Replacing the data with data from a different factory'], answer: 2, explain: 'r は √ のばらつきで割って単位をそろえるので、$ を $000 にしても変わらない。外れ値を加える、データを減らす、別の工場のデータにすると、点の並び方が変わるので r も変わる。' }
      ]
    },
    {
      id: 'M084',
      no: 84,
      title: '回帰分析の長所と短所',
      goal: '回帰分析の長所と短所を挙げ、高低点法との違いや、予測を信頼してよい場面・注意すべき場面を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A5(e)'],
      slides: [
        {
          title: 'カーナビの到着予測',
          paras: ['カーナビは、過去の平均の速さから到着時刻を予測する。ふだんの道ではよく当たる。', 'でも、今日だけの事故や、初めて走る山道では外れる。過去のデータが「いつもどおり」を前提にしているから。回帰分析も同じ強みと弱みを持っている。']
        },
        {
          title: '長所（advantages）',
          list: ['全部のデータを使う。2点だけの高低点法より信頼しやすい', '計算で決まるので客観的（objective）。誰がやっても同じ式', 'r と r² で、予測がどれだけ信頼できるかを数字で示せる', '表計算ソフトを使えば、データが多くても簡単に計算できる']
        },
        {
          title: '短所（disadvantages）①: 前提が崩れると外れる',
          list: ['直線の関係（linear relationship）を前提にしている。本当は曲線や段差があっても直線で表してしまう', '過去の関係が将来も続くと前提にしている。技術・値段・やり方が変わると外れる', '単回帰は x を1つしか使わない。原価を動かすほかの要因（材料の値段、季節など）は無視される']
        },
        {
          title: '短所（disadvantages）②: データの問題',
          list: ['十分な数の、正確なデータが要る。データが少ないと r も当てにならない', '昔のデータはインフレ（inflation）で金額がふくらんでいる。物価の変化を取り除かないと b がずれる', 'データの範囲の外の予測（外挿）は信頼しにくい', '外れ値の影響は高低点法より小さいが、ゼロではない', '高い相関があっても因果関係の証明にはならない']
        },
        {
          title: '高低点法と比べる',
          table: { caption: '同じ「原価を固定費と変動費に分ける」方法', head: ['観点', '高低点法', '回帰分析'], rows: [['使うデータ', '最高と最低の2点', '全部の点'], ['手間', 'とても簡単', '計算が多い'],['外れ値', 'とても弱い', '比較的強い'], ['信頼性の数字', 'なし', 'r と r² で示せる'], ['直線の前提', 'あり', 'あり']] },
          after: '直線を前提にする点と、過去が続くと考える点は、どちらの方法も同じ弱み。'
        },
        {
          title: '例題: この予測を信頼してよいか',
          example: {
            problem: '過去24か月（生産量 3,000〜8,000個）のデータで原価の回帰式を作り、r² ＝ 0.95 だった。来年は新工場を建てて生産量を 20,000個にする予定。この式で来年の原価を予測してよいか。',
            steps: ['r² ＝ 0.95 は高い。過去の範囲の中なら、予測は信頼しやすい', 'しかし 20,000個は範囲（3,000〜8,000個）の外。外挿になる', '新工場で固定費が段差で上がり、変動費単価も変わる可能性が高い', '過去の関係が続くという前提が崩れる'],
            answer: 'そのまま信頼はできない。r² が高くても、範囲の外で条件も変わるので、新工場の原価を別に見積もるべき'
          }
        },
        {
          title: 'なぜ？ r² が高くても安心できない',
          paras: ['r² は「過去のデータに、式がどれだけよく当てはまったか」を表す数字。過去への当てはまりであって、未来の保証ではない。', '式の外側の世界（新工場、値上げ、新しい機械）が変われば、過去にぴったりだった式でも外れる。だから r² の高さと、前提が今も成り立つかの両方を確かめる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「全部のデータを使うから外れ値の影響を受けない」は言いすぎ。影響が小さくなるだけ。「r² が高いから x が原因だと証明された」も誤り。「回帰分析は直線を前提にしない」も誤りで、高低点法と同じく直線が前提。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['長所: 全部のデータを使う・客観的・r と r² で信頼性を示せる', '短所: 直線と「過去が続く」が前提、x は1つだけ、データの量・正確さ・インフレが問題', '外挿は信頼しにくい。r² が高くても因果の証明ではない']
        },
        {
          title: '英単語',
          words: [
            ['advantage / disadvantage', 'アドバンテージ / ディスアドバンテージ', '長所 / 短所'],
            ['objective', 'オブジェクティブ', '客観的（誰がやっても同じ結果）'],
            ['linear relationship', 'リニア リレーションシップ', '直線の関係'],
            ['historical data', 'ヒストリカル データ', '過去のデータ'],
            ['inflation', 'インフレーション', 'インフレ（物価の上昇）'],
            ['reliability', 'リライアビリティ', '信頼性']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an advantage of linear regression analysis compared with the high-low method?', choices: ['It does not assume a linear relationship', 'It is quicker to calculate by hand', 'It takes account of all the observations in the data', 'It proves that changes in x cause changes in y'], answer: 2, explain: '回帰分析は全部の点を使う。直線の関係はどちらも前提にしている。手計算なら高低点法の方が速い。相関は因果を証明しない。' },
        { q: 'Which of the following is a limitation of using linear regression analysis to forecast costs?', choices: ['It gives no measure of how reliable the forecast is', 'It assumes that the relationship in past data will continue in the future','It uses only the highest and lowest observations', 'Different people will calculate different values for a and b'], answer: 1, explain: '回帰分析は過去の関係が続くことを前提にしている。信頼性は r と r² で示せる。2点だけを使うのは高低点法。計算で決まるので、誰がやっても a と b は同じ。' },
        { q: '過去のデータは5年分で、その間に物価が大きく上がっている。回帰分析で原価の式を作るとき、まず考えるべきことは？', choices: ['インフレの影響を取り除き、同じ物価の水準にそろえる', '古いデータほど重要なので、そのまま使う', '物価は原価と関係ないので無視してよい', 'データの数が多いので、何もしなくても正確になる'], answer: 0, explain: '昔の金額はインフレの分だけ小さく見える。そのまま使うと、物価の上昇まで「生産量がふえたせい」と読んでしまい、b がずれる。指数などで同じ水準にそろえる。' },
        { q: '原価は生産量だけでなく、材料の値段や季節にも左右される。単回帰（x が1つ）で式を作るときの弱みとして正しいのは？', choices: ['生産量の影響が無視される', 'a と b が計算できなくなる', '外れ値の影響がなくなる', '生産量以外の要因が無視され、r² が低くなりやすい'], answer: 3, explain: '単回帰は x を1つしか使わないので、ほかの要因は式に入らない。その分、原価の変動を説明しきれず、r² が低くなりやすい。' },
        { q: 'A company has derived a regression equation for total cost using data for output levels between 1,000 and 4,000 units. The coefficient of determination is 0.97. For which of the following output levels is the forecast likely to be MOST reliable?', choices: ['6,000 units', '500 units', '2,500 units', '10,000 units'], answer: 2, explain: '2,500 単位はデータの範囲の中（内挿）。ほかはすべて範囲の外（外挿）で、r² が高くても信頼しにくい。' }
      ]
    }
  ],
  cards: [
    { id: 'M079-1', lesson: 'M079', q: '散布図の横軸と縦軸に置くものは？', a: '横軸＝活動量 x（独立変数）、縦軸＝原価 y（従属変数）' },
    { id: 'M079-2', lesson: 'M079', q: '目で最もよく当てはまる線を引くときのルールは？', a: '全体の流れに沿い、上下の点の数をそろえ、平均の点を通す。外れ値は無視' },
    { id: 'M079-3', lesson: 'M079', q: '散布図の線から固定費と変動費単価を読むには？', a: '縦軸と交わる高さ＝固定費、傾き＝変動費単価' },
    { id: 'M079-4', lesson: 'M079', q: '散布図の線の最大の弱点は？', a: '目で引くので主観的。人によって線と答えが違う' },
    { id: 'M079-5', lesson: 'M079', q: 'outlier とは？', a: '外れ値。特別な事情で他の点から大きく離れた点' },
    { id: 'M080-1', lesson: 'M080', q: '回帰分析の b を出す式は？', a: 'b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)' },
    { id: 'M080-2', lesson: 'M080', q: '回帰分析の a を出す式は？', a: 'a ＝ Σy ÷ n − b × Σx ÷ n（平均の点を通る）' },
    { id: 'M080-3', lesson: 'M080', q: 'Σx² と (Σx)² の違いは？', a: 'Σx² は2乗してから足す。(Σx)² は足してから2乗する' },
    { id: 'M080-4', lesson: 'M080', q: '最小二乗法（least squares）で選ぶ線は？', a: '点と線の縦のずれを2乗して足した合計が最小の線' },
    { id: 'M080-5', lesson: 'M080', q: 'y ＝ 4.6 ＋ 2.2x（y は $000、x は 000個）の意味は？', a: '固定費 $4,600、1個あたり変動費 $2.20' },
    { id: 'M081-1', lesson: 'M081', q: '回帰式で予測するときの3ステップは？', a: '単位を確かめる → x を同じ単位で入れる → y を元の単位に戻す' },
    { id: 'M081-2', lesson: 'M081', q: '20X5年 第1四半期 ＝ 1 のとき、20X7年 第3四半期の x は？', a: '11（20X5年 1〜4、20X6年 5〜8、20X7年 9〜）' },
    { id: 'M081-3', lesson: 'M081', q: '内挿（interpolation）と外挿（extrapolation）の違いは？', a: '内挿＝データの範囲の中の予測。外挿＝範囲の外の予測' },
    { id: 'M081-4', lesson: 'M081', q: 'なぜ外挿は信頼しにくい？', a: '範囲の外では固定費の段差や単価の変化など、式が知らない変化が起きうるから' },
    { id: 'M081-5', lesson: 'M081', q: 'y ＝ 50 ＋ 4.5x（$000）で売上 $185,000 に必要な x は？', a: '(185 − 50) ÷ 4.5 ＝ 30 → $30,000' },
    { id: 'M082-1', lesson: 'M082', q: '相関係数 r が取りうる範囲は？', a: '−1 から ＋1。符号は向き、大きさは強さ' },
    { id: 'M082-2', lesson: 'M082', q: '決定係数 r² の意味は？', a: 'y の変動のうち x の変動で説明できる割合' },
    { id: 'M082-3', lesson: 'M082', q: 'r ＝ −0.9 のときの r² と意味は？', a: '0.81。y の変動の 81% は x で説明できる（強い負の相関）' },
    { id: 'M082-4', lesson: 'M082', q: 'なぜ r より r² で信頼性を判断する？', a: 'r² は説明できる割合として読める。r ＝ 0.7 でも r² は 0.49 しかない' },
    { id: 'M082-5', lesson: 'M082', q: 'spurious correlation とは？', a: '見せかけの相関。別の要因で一緒に動くだけで、因果はない' },
    { id: 'M083-1', lesson: 'M083', q: '相関係数 r の式は？', a: '(nΣxy − ΣxΣy) ÷ √{(nΣx² − (Σx)²)(nΣy² − (Σy)²)}' },
    { id: 'M083-2', lesson: 'M083', q: 'b を計算した後、r に新しく必要なものは？', a: 'nΣy² − (Σy)² だけ（分子と左のかっこは b と同じ）' },
    { id: 'M083-3', lesson: 'M083', q: '分子 110、左 50、右 246 のとき r は？', a: '110 ÷ √(50 × 246) ＝ 110 ÷ 110.9 ≒ 0.99' },
    { id: 'M083-4', lesson: 'M083', q: 'r ＝ −0.86 のとき r² は？', a: '約 0.74（2乗するとプラス）' },
    { id: 'M083-5', lesson: 'M083', q: '原価を $ から $000 に変えると r は変わる？', a: '変わらない。√ のばらつきで割って単位をそろえているから' },
    { id: 'M084-1', lesson: 'M084', q: '回帰分析の主な長所は？', a: '全部のデータを使う・客観的・r と r² で信頼性を示せる' },
    { id: 'M084-2', lesson: 'M084', q: '回帰分析が前提にしている2つのことは？', a: '直線の関係があること、過去の関係が将来も続くこと' },
    { id: 'M084-3', lesson: 'M084', q: '過去データにインフレがあるときの注意は？', a: '物価の変化を取り除いて同じ水準にそろえる。そのままだと b がずれる' },
    { id: 'M084-4', lesson: 'M084', q: '単回帰の弱みは？', a: 'x を1つしか使わないので、ほかの要因が無視される' },
    { id: 'M084-5', lesson: 'M084', q: 'r² ＝ 0.95 なら範囲の外でも予測を信頼できる？', a: 'できない。r² は過去への当てはまりで、外挿や条件の変化は保証しない' }
  ]
});
