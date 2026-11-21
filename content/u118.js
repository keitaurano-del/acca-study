(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 118,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M070',
      no: 70,
      title: '平均・最頻値・中央値',
      goal: '1つずつのデータ（ungrouped data）から平均（mean）・中央値（median）・最頻値（mode）を計算し、平均から合計を逆算し、場面に合う代表値を選べるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(c)'],
      slides: [
        {
          title: '友だち5人の年収',
          paras: ['友だち5人の年収が 400万円、450万円、500万円、550万円、1億円 だとする。', '全部足して5で割ると 2,380万円。でも5人中4人は 550万円以下で、2,380万円は誰の実感にも合わない。', '真ん中の人（3番目）の 500万円の方が「ふつうの人」をよく表す。データの真ん中を表す数は1つではない。']
        },
        {
          title: '3つの代表値（average）',
          list: ['平均（arithmetic mean）: 全部の値を足して、個数で割った数', '中央値（median）: 小さい順に並べたとき、ちょうど真ん中にある値', '最頻値（mode）: いちばん多く出てくる値'],
          formula: '平均 ＝ 値の合計 ÷ 個数（x̄ ＝ Σx ÷ n）',
          after: 'Σ（シグマ）は「全部足す」、n は個数、x̄（エックスバー）は平均を表す記号。'
        },
        {
          title: 'たこ焼き屋の7日間の売上',
          table: { caption: '先週の1日ごとの売上', head: ['曜日', '売上 $'], rows: [['月', '290'], ['火', '260'], ['水', '240'], ['木', '260'], ['金', '330'], ['土', '410'], ['日', '310']], total: ['合計', '2,100'] }
        },
        {
          title: '例題: 3つの代表値を求める',
          example: {
            problem: '上の7日間の売上から、平均・中央値・最頻値を求める。',
            steps: ['平均: 合計 $2,100 ÷ 7日 ＝ $300', '中央値: まず小さい順に並べる。240, 260, 260, 290, 310, 330, 410', '7個なので真ん中は (7＋1) ÷ 2 ＝ 4番目。4番目は $290', '最頻値: $260 が2回で最も多い。最頻値は $260'],
            answer: '平均 $300、中央値 $290、最頻値 $260'
          }
        },
        {
          title: '数直線で見る',
          svg: `<svg viewBox="0 0 440 200" role="img" aria-label="7日間の売上を数直線に並べ、最頻値260、中央値290、平均300の位置を示した図" font-size="14"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">7日間の売上と3つの代表値</text><line x1="130" y1="70" x2="130" y2="140" stroke="var(--quiet)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="124" y="80" text-anchor="end" fill="var(--ink)">最頻値 260</text><line x1="175" y1="44" x2="175" y2="140" stroke="var(--quiet)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="169" y="54" text-anchor="end" fill="var(--ink)">中央値 290</text><line x1="190" y1="70" x2="190" y2="140" stroke="var(--accent)" stroke-width="2"/><text x="196" y="80" font-weight="600" fill="var(--accent)">平均 300</text><line x1="30" y1="140" x2="410" y2="140" stroke="var(--edge)" stroke-width="1.5"/><circle cx="100" cy="130" r="7" fill="var(--quiet)"/><circle cx="130" cy="130" r="7" fill="var(--quiet)"/><circle cx="130" cy="114" r="7" fill="var(--quiet)"/><circle cx="175" cy="130" r="7" fill="var(--quiet)"/><circle cx="205" cy="130" r="7" fill="var(--quiet)"/><circle cx="235" cy="130" r="7" fill="var(--quiet)"/><circle cx="355" cy="130" r="7" fill="var(--quiet)"/><text x="40" y="162" text-anchor="middle" fill="var(--quiet)">200</text><text x="115" y="162" text-anchor="middle" fill="var(--quiet)">250</text><text x="190" y="162" text-anchor="middle" fill="var(--quiet)">300</text><text x="265" y="162" text-anchor="middle" fill="var(--quiet)">350</text><text x="340" y="162" text-anchor="middle" fill="var(--quiet)">400</text><text x="220" y="188" text-anchor="middle" fill="var(--ink)">1日の売上（$）</text></svg>`,
          caption: '土曜の $410 だけが大きく離れている。この1日が、平均を中央値より上に引っぱっている。'
        },
        {
          title: '個数が偶数のときの中央値',
          example: {
            problem: '6人の作業者の1時間の生産量（個）: 12, 15, 9, 20, 14, 18。中央値は？',
            steps: ['小さい順に並べる: 9, 12, 14, 15, 18, 20', '6個なので真ん中は (6＋1) ÷ 2 ＝ 3.5番目。3番目と4番目のちょうど間', '3番目の 14 と4番目の 15 の平均をとる: (14＋15) ÷ 2 ＝ 14.5'],
            answer: '中央値は 14.5個。データに無い値になってもよい'
          }
        },
        {
          title: 'なぜ？ 3つを使い分ける',
          paras: ['平均は全部の値を使うので、計算に向き、合計の予測にも使える。ただし極端な値（外れ値, outlier）に引っぱられる。', '中央値は並び順だけで決まるので、極端な値の影響を受けにくい。給与や住宅価格のように、一部だけ極端に大きいデータに向く。', '最頻値は数えるだけで決まる。ソース味・塩味のような名義データ（レッスン65）で使えるのは最頻値だけ。最頻値は2つ以上あることも、無いこともある。']
        },
        {
          title: '例題: 平均から合計を逆算する',
          example: {
            problem: '5日間の平均売上は $300 だった。6日目を足して、6日間の平均を $310 にしたい。6日目にいくら売ればよい？',
            steps: ['平均 × 個数 ＝ 合計。5日間の合計は $300 × 5 ＝ $1,500', '6日間で必要な合計は $310 × 6 ＝ $1,860', '6日目に必要な売上は $1,860 − $1,500 ＝ $360'],
            answer: '$360。平均の問題は、まず合計に戻すと解ける'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '中央値を、並べ替える前の表の真ん中から取るのは間違い。必ず小さい順に並べてから数える。個数が偶数なら真ん中の2つの平均をとる。最頻値は「いちばん大きい値」でも「回数そのもの（2回）」でもなく、いちばん多く出てくる値（$260）のこと。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['平均＝合計÷個数。合計＝平均×個数で逆算もできる', '中央値＝小さい順に並べた真ん中。偶数個なら真ん中2つの平均', '最頻値＝いちばん多く出てくる値。極端な値があるときは中央値が典型を表す']
        },
        {
          title: '英単語',
          words: [
            ['average', 'アベレージ', '代表値（平均・中央値・最頻値の総称として使われる）'],
            ['arithmetic mean', 'アリスメティック ミーン', '（算術）平均。合計 ÷ 個数'],
            ['median', 'ミーディアン', '中央値'],
            ['mode', 'モード', '最頻値'],
            ['ungrouped data', 'アングループト データ', '階級にまとめていない、1つずつのデータ'],
            ['outlier', 'アウトライアー', '外れ値（ほかから極端に離れた値）']
          ]
        }
      ],
      quiz: [
        { q: 'A machine produced the following numbers of units on eight days: 42, 38, 45, 38, 50, 41, 38, 44. Which of the following correctly states the mean, median and mode?', choices: ['Mean 42, median 44, mode 38', 'Mean 41.5, median 42, mode 38', 'Mean 42, median 41.5, mode 38', 'Mean 42, median 41.5, mode 50'], answer: 2, explain: '合計 336 ÷ 8 ＝ 42 が平均。並べると 38, 38, 38, 41, 42, 44, 45, 50。8個なので4番目41と5番目42の平均 41.5 が中央値。38 が3回で最頻値。並べ替えずに4・5番目（38と50）をとると44になる。50 は最大値で、最頻値ではない。' },
        { q: 'The mean of six numbers is 25. When a seventh number is added, the mean of the seven numbers becomes 27. What is the seventh number?', type: 'number', answer: 39, unit: '', explain: '平均を合計に戻す。6個の合計 ＝ 25 × 6 ＝ 150。7個の合計 ＝ 27 × 7 ＝ 189。7個目 ＝ 189 − 150 ＝ 39。平均の差（2）を足して 27 などとしない。' },
        { q: '社員10人の会社で、社長1人の給与だけが極端に高い。「ふつうの社員の給与」を表すのに最も向いている代表値は？', choices: ['平均', '中央値', '最大値', '全員の給与の合計'], answer: 1, explain: '平均は社長の極端な給与に引っぱられて高くなる。中央値は並び順の真ん中なので、極端な値の影響を受けにくい。最大値や合計は代表値ではない。' },
        { q: 'たこ焼きの味（ソース・しょうゆ・塩）ごとの注文の記録から「いちばん人気の味」を知りたい。使える代表値は？', choices: ['最頻値', '平均', '中央値', '平均と中央値の両方'], answer: 0, explain: '味は数ではなく名前で分ける名義データ（レッスン65）。足せないので平均は出せず、順番も無いので中央値も出せない。いちばん多い味を数える最頻値だけが使える。' },
        { q: 'Overtime hours worked in five weeks were 12, 8, 15, 10 and 20. What is the mean number of overtime hours per week?', type: 'number', answer: 13, unit: '', explain: '合計 12＋8＋15＋10＋20 ＝ 65。65 ÷ 5 ＝ 13 時間。ちなみに中央値は並べた真ん中の 12。' }
      ]
    },
    {
      id: 'M071',
      no: 71,
      title: '度数分布表の平均',
      goal: '度数分布表（frequency distribution）から Σfx ÷ Σf で平均を計算し、階級でまとめた表では中点（mid-point）を使って平均を推定できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(c)'],
      slides: [
        {
          title: '100人分のアンケートを足す？',
          paras: ['「1週間にコンビニへ何回行くか」を100人に聞いた。100個の数を1つずつ足すのは大変。', '「0回が10人、1回が25人…」のように、同じ答えをまとめて数えた表にすれば、足し算はぐっと楽になる。', 'こうした表を度数分布表（frequency distribution）といい、「何回出てきたか」の数を度数（frequency, f）という。']
        },
        {
          title: 'たこ焼き屋: 1回の注文の箱数',
          table: { caption: '先週の注文100件', head: ['箱数 x', '注文の数 f', 'f × x'], rows: [['1', '20', '20'], ['2', '45', '90'], ['3', '25', '75'], ['4', '10', '40']], total: ['合計', '100', '225'] },
          note: { kind: 'tip', text: '中央値も出せる。100件の真ん中は50番目と51番目。度数を上から足すと、1箱までで20件、2箱までで65件。50番目も51番目も2箱の中に入るので、中央値は2箱。' }
        },
        {
          title: '度数分布表の平均',
          formula: '平均 ＝ Σfx ÷ Σf',
          example: {
            problem: '上の表から、1回の注文の平均箱数を求める。',
            steps: ['各行で f × x を計算する（1箱 × 20件 ＝ 20 など）', 'f × x を全部足す: Σfx ＝ 225（全部で225箱売れた）', '度数を全部足す: Σf ＝ 100（注文は100件）', '平均 ＝ 225 ÷ 100 ＝ 2.25'],
            answer: '平均は 2.25箱。ちなみに最頻値は、度数が最も多い 2箱'
          }
        },
        {
          title: 'なぜ？ f をかける理由',
          paras: ['表の「2箱・45件」は、2 という値が45回出てきたという意味。1つずつ書き出すと 2, 2, 2, … が45個並ぶ。', 'f × x は、その45個をまとめて足した合計（90箱）。だから Σfx は全部の値の合計、Σf は全部の個数になり、レッスン70の「合計 ÷ 個数」と同じことをしている。', '1, 2, 3, 4 の4つを足して4で割る（2.5）と、注文の数の違いを無視してしまう。']
        },
        {
          title: '幅でまとめたデータ（階級）',
          paras: ['売上のように細かい値は、「$200以上$250未満」のような幅でまとめて数える。この幅を階級（class interval）という。', 'まとめると、1つずつの値は分からなくなる。そこで、各階級の値は全部その真ん中にあるとみなして計算する。この真ん中を中点（mid-point）という。'],
          formula: '中点 ＝（階級の下限 ＋ 上限）÷ 2',
          note: { kind: 'tip', text: '人数や件数のような整数のデータは「10〜19」「20〜29」と書くこともある。中点は (10＋19) ÷ 2 ＝ 14.5。階級の幅は、となりの階級の下限どうしの差で 20 − 10 ＝ 10（19 − 10 ＝ 9 ではない）。「$200以上$250未満」の形なら、中点は (200＋250) ÷ 2 ＝ 225、幅は 250 − 200 ＝ 50。' }
        },
        {
          title: '中点で代表させる',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="30日分の1日の売上を4つの階級に分けた棒グラフ。各階級の中点225、275、325、375を示す" font-size="14"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">各階級の真ん中（中点）を代表にする</text><rect x="60" y="180" width="80" height="30" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="140" y="120" width="80" height="90" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="220" y="90" width="80" height="120" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="300" y="150" width="80" height="60" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="100" y="170" text-anchor="middle" fill="var(--ink)">中点 225</text><text x="180" y="110" text-anchor="middle" fill="var(--ink)">中点 275</text><text x="260" y="80" text-anchor="middle" font-weight="600" fill="var(--ink)">中点 325</text><text x="340" y="140" text-anchor="middle" fill="var(--ink)">中点 375</text><text x="100" y="202" text-anchor="middle" fill="var(--quiet)">3日</text><text x="180" y="202" text-anchor="middle" fill="var(--quiet)">9日</text><text x="260" y="202" text-anchor="middle" fill="var(--ink)">12日</text><text x="340" y="202" text-anchor="middle" fill="var(--quiet)">6日</text><line x1="50" y1="210" x2="390" y2="210" stroke="var(--ink)" stroke-width="1.5"/><text x="60" y="230" text-anchor="middle" fill="var(--quiet)">200</text><text x="140" y="230" text-anchor="middle" fill="var(--quiet)">250</text><text x="220" y="230" text-anchor="middle" fill="var(--quiet)">300</text><text x="300" y="230" text-anchor="middle" fill="var(--quiet)">350</text><text x="380" y="230" text-anchor="middle" fill="var(--quiet)">400</text><text x="220" y="252" text-anchor="middle" fill="var(--ink)">1日の売上（$）</text></svg>`,
          caption: '30日分の売上。棒の中の数字が日数（度数）。$300以上$350未満の日が12日で最も多い。'
        },
        {
          title: '例題: 階級の表から平均を出す',
          table: { caption: '30日分の1日の売上', head: ['階級（中点 x）', '日数 f', 'f × x'], rows: [['$200〜$250未満（225）', '3', '675'], ['$250〜$300未満（275）', '9', '2,475'], ['$300〜$350未満（325）', '12', '3,900'], ['$350〜$400未満（375）', '6', '2,250']], total: ['合計', '30', '9,300'] },
          example: {
            problem: '上の表から、1日の平均売上を求める。',
            steps: ['各階級の中点を出す: (200＋250) ÷ 2 ＝ 225 など', '中点 × 日数 を計算して足す: Σfx ＝ 9,300', '日数を足す: Σf ＝ 30', '平均 ＝ 9,300 ÷ 30 ＝ 310'],
            answer: '平均は約 $310。中点を使ったので推定値（estimate）になる'
          }
        },
        {
          title: 'なぜ？ 推定値になる',
          paras: ['$300以上$350未満の12日が、全部ちょうど $325 だったとは限らない。中点を使うのは「階級の中で値が均等に散らばっている」と仮定するから。', 'だから階級でまとめた表の平均は、元の値から出した平均と少しずれる推定値になる。それでも、細かい元データが無いときに全体の様子をつかむには十分役に立つ。'],
          note: { kind: 'tip', text: '「$400以上」のように片側が開いた階級（open-ended class）は、隣の階級と同じ幅とみなす。隣が幅 $50 なら $400〜$450未満と考え、中点は $425。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '割る数は度数の合計（Σf ＝ 30日）。階級の数（4）で割ったり、中点だけを足して4で割ったり（$300）しない。階級の下限（$200, $250 …）を x に使うのも間違い。x には中点を使う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['度数分布表の平均 ＝ Σfx ÷ Σf（割るのは度数の合計）', '階級でまとめた表では、x に中点（下限と上限の真ん中）を使う', '階級データの平均は推定値。開いた階級は隣と同じ幅とみなす']
        },
        {
          title: '英単語',
          words: [
            ['frequency', 'フリークエンシー', '度数（その値が何回出てきたか）'],
            ['frequency distribution', 'フリークエンシー ディストリビューション', '度数分布（表）'],
            ['grouped data', 'グループト データ', '階級や値ごとにまとめたデータ'],
            ['class interval', 'クラス インターバル', '階級（「$200以上$250未満」のような幅）'],
            ['mid-point', 'ミッドポイント', '中点（階級の下限と上限の真ん中）'],
            ['open-ended class', 'オープン エンディッド クラス', '片側が開いた階級（「$400以上」など）'],
            ['estimate', 'エスティメット', '推定値']
          ]
        }
      ],
      quiz: [
        { q: 'The number of defects found in 40 batches is shown below. Defects per batch: 0, 1, 2, 3, 4. Number of batches: 6, 12, 12, 6, 4. What is the mean number of defects per batch?', type: 'number', answer: 1.75, unit: '', explain: 'Σfx ＝ 0×6 ＋ 1×12 ＋ 2×12 ＋ 3×6 ＋ 4×4 ＝ 0＋12＋24＋18＋16 ＝ 70。Σf ＝ 40。70 ÷ 40 ＝ 1.75。0〜4 の5つを足して5で割る（2）のは、度数を無視した間違い。' },
        { q: 'The weekly wages of 40 employees are: $300 and less than $400: 8 employees; $400 and less than $500: 14 employees; $500 and less than $600: 12 employees; $600 and less than $700: 6 employees. What is the estimated mean weekly wage?', choices: ['$440', '$490', '$500', '$4,900'], answer: 1, explain: '中点は 350, 450, 550, 650。Σfx ＝ 350×8 ＋ 450×14 ＋ 550×12 ＋ 650×6 ＝ 2,800＋6,300＋6,600＋3,900 ＝ 19,600。19,600 ÷ 40 ＝ $490。$440 は下限（300, 400 …）を使った間違い。$500 は中点を足して4で割った間違い。$4,900 は階級の数（4）で割った間違い。' },
        { q: 'あるコンビニで、1人のお客さんが買った品数を数えた。1品が20人、2品が50人、3品が30人。1人あたりの平均の品数は？', type: 'number', answer: 2.1, unit: '', explain: 'Σfx ＝ 1×20 ＋ 2×50 ＋ 3×30 ＝ 20＋100＋90 ＝ 210。Σf ＝ 100人。210 ÷ 100 ＝ 2.1品。1, 2, 3 の平均の 2 にはならない。' },
        { q: '階級が「$300〜$400未満」「$400〜$500未満」「$500以上」の表で、「$500以上」の階級の中点として使うのは？', choices: ['$500', '$550', '$600', '$450'], answer: 1, explain: '開いた階級は隣と同じ幅（$100）とみなし、$500〜$600未満と考える。中点は (500＋600) ÷ 2 ＝ $550。$500 は下限そのもの、$450 は隣の階級の中点。' },
        { q: '階級でまとめた度数分布表から求めた平均が「推定値」になるのはなぜ？', choices: ['度数の合計で割るから', '階級の数が少ないから', '各階級の値がすべて中点にあると仮定して計算するから', '平均は必ず四捨五入するから'], answer: 2, explain: 'まとめた表では元の1つずつの値が分からないので、各階級の値を中点で代表させる。実際の値は階級の中でばらついているので、出てくる平均は推定値になる。' },
        { q: 'Daily sales of a product over 25 days were: 0 units on 10 days; 1 unit on 6 days; 2 units on 4 days; 3 units on 3 days; 4 units on 2 days. What is the median number of units sold per day?', choices: ['0', '1.24', '2', '1'], answer: 3, explain: '25日の真ん中は13番目。度数を上から足すと、0個までで10日、1個までで16日。13番目は1個の中に入るので中央値は1個。0は最頻値（10日で最多）、1.24は平均（31 ÷ 25）、2は度数を無視して 0〜4 の真ん中をとった間違い。' }
      ]
    },
    {
      id: 'M072',
      no: 72,
      title: 'ばらつき: 分散と標準偏差',
      goal: 'ばらつき（dispersion）の意味を説明し、1つずつのデータから範囲（range）・分散（variance）・標準偏差（standard deviation）を計算して読み取れるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(d)'],
      slides: [
        {
          title: '平均30分の2つの通勤ルート',
          paras: ['電車ルートはいつも 29〜31分。バスルートは道路しだいで 15〜45分。どちらも平均は30分。', '大事な会議の日に選ぶなら電車ルート。平均が同じでも、毎日の「ぶれ」がまったく違う。', 'このぶれの大きさを、ばらつき（dispersion）という。平均と同じくらい大事な情報になる。']
        },
        {
          title: 'A店とB店の売上',
          table: { caption: '同じ5日間の1日の売上', head: ['曜日', 'A店 $', 'B店 $'], rows: [['月', '280', '200'], ['火', '300', '400'], ['水', '320', '250'], ['木', '290', '350'], ['金', '310', '300']], total: ['平均', '300', '300'] }
        },
        {
          title: '点を並べて見る',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="平均はどちらも300だが、A店の売上は平均の近くに集まり、B店は広く散らばっていることを示す図" font-size="14"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">平均は同じ、ばらつきが違う</text><line x1="220" y1="36" x2="220" y2="180" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/><text x="226" y="48" font-weight="600" fill="var(--accent)">平均 300</text><text x="20" y="72" font-weight="600" fill="var(--ink)">A店（標準偏差 約$14）</text><line x1="40" y1="104" x2="400" y2="104" stroke="var(--edge)" stroke-width="1.5"/><circle cx="190" cy="94" r="6" fill="var(--ink)"/><circle cx="205" cy="94" r="6" fill="var(--ink)"/><circle cx="220" cy="94" r="6" fill="var(--ink)"/><circle cx="235" cy="94" r="6" fill="var(--ink)"/><circle cx="250" cy="94" r="6" fill="var(--ink)"/><text x="20" y="142" font-weight="600" fill="var(--ink)">B店（標準偏差 約$71）</text><line x1="40" y1="174" x2="400" y2="174" stroke="var(--edge)" stroke-width="1.5"/><circle cx="70" cy="164" r="6" fill="var(--ink)"/><circle cx="145" cy="164" r="6" fill="var(--ink)"/><circle cx="220" cy="164" r="6" fill="var(--ink)"/><circle cx="295" cy="164" r="6" fill="var(--ink)"/><circle cx="370" cy="164" r="6" fill="var(--ink)"/><text x="70" y="200" text-anchor="middle" fill="var(--quiet)">200</text><text x="220" y="200" text-anchor="middle" fill="var(--quiet)">300</text><text x="370" y="200" text-anchor="middle" fill="var(--quiet)">400</text><text x="220" y="228" text-anchor="middle" fill="var(--ink)">1日の売上（$）</text></svg>`,
          caption: 'A店は平均の近くに集まり、B店は広く散らばっている。来週の売上を読みやすいのは A店。'
        },
        {
          title: 'いちばん簡単な物差し: 範囲',
          formula: '範囲（range）＝ 最大値 − 最小値',
          paras: ['A店: 320 − 280 ＝ $40。B店: 400 − 200 ＝ $200。', '計算は簡単だが、両端の2つの値しか使わない。1日だけ極端な日があると、範囲は大きく変わってしまう。そこで、全部の値を使う物差しとして分散と標準偏差を使う。']
        },
        {
          title: '分散と標準偏差',
          list: ['偏差（deviation）: 各値 − 平均。平均からどれだけ離れているか', '分散（variance）: 偏差を2乗して、その平均をとったもの', '標準偏差（standard deviation）: 分散の平方根（√）。σ（シグマ）と書くこともある'],
          formula: '分散 ＝ Σ(x − x̄)² ÷ n　標準偏差 ＝ √分散'
        },
        {
          title: 'A店で計算する',
          table: { caption: 'A店の5日間（平均 1,500 ÷ 5 ＝ $300）', head: ['売上 x', '偏差 x − x̄', '偏差の2乗'], rows: [['280', '−20', '400'], ['300', '0', '0'], ['320', '＋20', '400'], ['290', '−10', '100'], ['310', '＋10', '100']], total: ['合計 1,500', '0', '1,000'] },
          after: '分散 ＝ 1,000 ÷ 5 ＝ 200。標準偏差 ＝ √200 ≒ $14.14。偏差の合計は 0 になっている。'
        },
        {
          title: '例題: B店の標準偏差',
          example: {
            problem: 'B店の5日間の売上（200, 400, 250, 350, 300）の分散と標準偏差を求める。平均は $300。',
            steps: ['偏差: −100, ＋100, −50, ＋50, 0', '2乗: 10,000、10,000、2,500、2,500、0。合計 25,000', '分散 ＝ 25,000 ÷ 5 ＝ 5,000', '標準偏差 ＝ √5,000 ≒ $70.71'],
            answer: 'B店の標準偏差は約 $71。A店（約 $14）の5倍あり、売上が大きくぶれる'
          }
        },
        {
          title: 'なぜ？ 2乗してから平方根に戻す',
          paras: ['偏差をそのまま足すと、A店でも B店でも合計は 0 になる。平均より上と下の差が必ず打ち消し合うから。これでは、ばらつきを測れない。', '2乗すれば全部プラスになり、打ち消し合わない。大きく離れた値ほど重く数えられる。', 'ただし2乗すると単位も「$の2乗」になる。平方根で元の単位（$）に戻したのが標準偏差。だから「平均 $300 から、だいたい $14 ぶれる」と読める。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '標準偏差は分散の平方根。分散（200）のまま答えたり、2乗し忘れて偏差の合計（0）で止まったりしない。割る数は個数 n。Excel の STDEV.S や電卓の sx（σn−1）は n − 1 で割る別の式。K2 の計算では n で割る（Excel なら STDEV.P、電卓なら σx）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ばらつきは平均と同じくらい大事。範囲＝最大値−最小値は簡単だが両端しか使わない', '分散＝偏差の2乗の平均 Σ(x − x̄)² ÷ n', '標準偏差＝√分散。単位はデータと同じで、大きいほどぶれが大きい']
        },
        {
          title: '英単語',
          words: [
            ['dispersion', 'ディスパージョン', 'ばらつき（散らばりの程度）'],
            ['range', 'レンジ', '範囲（最大値 − 最小値）'],
            ['deviation', 'デビエーション', '偏差（値 − 平均）'],
            ['variance', 'バリアンス', '分散（第8部の「予算との差異」の variance とは別の意味）'],
            ['standard deviation', 'スタンダード デビエーション', '標準偏差（分散の平方根）'],
            ['square root', 'スクエア ルート', '平方根（√）']
          ]
        }
      ],
      quiz: [
        { q: 'The output of a machine on eight days was 40, 70, 20, 50, 40, 90, 40 and 50 units. What is the standard deviation of daily output (in units)?', type: 'number', answer: 20, unit: '', explain: '平均 ＝ 400 ÷ 8 ＝ 50。偏差は −10, ＋20, −30, 0, −10, ＋40, −10, 0。2乗の合計 ＝ 100＋400＋900＋0＋100＋1,600＋100＋0 ＝ 3,200。分散 ＝ 3,200 ÷ 8 ＝ 400。標準偏差 ＝ √400 ＝ 20。400 は分散で、標準偏差ではない。' },
        { q: 'Which of the following statements about the standard deviation is correct?', choices: ['It is the average of the deviations of each value from the mean', 'It is the square root of the variance and is measured in the same units as the data', 'It is the square of the variance', 'It is not affected by extreme values in the data'], answer: 1, explain: '標準偏差は分散の平方根で、単位はデータと同じ。偏差の平均はいつも 0 なので物差しにならない。分散の2乗ではなく平方根。全部の値を2乗して使うので、極端な値の影響はむしろ大きく受ける。' },
        { q: '5つの値 6, 8, 10, 12, 14 の分散（variance）は？', type: 'number', answer: 8, unit: '', explain: '平均 ＝ 50 ÷ 5 ＝ 10。偏差の2乗は 16, 4, 0, 4, 16 で合計 40。40 ÷ 5 ＝ 8。標準偏差なら √8 ≒ 2.83。' },
        { q: '機械Xと機械Yの1時間の生産量は、どちらも平均 50個。標準偏差は X が 2個、Y が 8個。正しいのは？', choices: ['Y の方が平均して多く生産する', '標準偏差が大きい Y の方が性能がよい', '平均が同じなので、2台に違いはない', 'X の方が生産量が安定していて、予測しやすい'], answer: 3, explain: '標準偏差が小さいほど、値が平均の近くに集まっている。平均は同じなので生産量の多さは同じで、違うのはぶれの大きさ。平均が同じでも、ばらつきが違えば計画の立てやすさが違う。' },
        { q: 'When calculating the variance, the deviations from the mean are squared. Why?', choices: ['Because the sum of the deviations from the mean is always zero', 'To express the answer in the same units as the data', 'To reduce the effect of values far from the mean', 'To make the mean easier to calculate'], answer: 0, explain: '平均より上と下の偏差は打ち消し合い、合計は必ず 0 になる。2乗すると全部プラスになる。2乗すると単位は「2乗」になる（元の単位に戻すのは平方根）。また、離れた値の影響はむしろ大きくなる。' }
      ]
    },
    {
      id: 'M073',
      no: 73,
      title: '度数分布表の標準偏差と変動係数',
      goal: '度数分布表（階級を含む）から分散と標準偏差を計算し、変動係数（coefficient of variation）で平均の違うデータのばらつきを比べられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(d)'],
      slides: [
        {
          title: 'スマホ代と家賃、ぶれが大きいのは？',
          paras: ['スマホ代は平均 5,000円で、月ごとのばらつき（標準偏差）が 1,000円。家賃は平均 80,000円で、ばらつきが 2,000円。', 'ぶれる金額は家賃の方が大きい。でも家計にとっての読めなさはスマホ代の方が大きい。5,000円に対する1,000円は20%、80,000円に対する2,000円は2.5%しかない。', 'ばらつきを、平均に対する割合で見るのが変動係数（coefficient of variation）。']
        },
        {
          title: '度数分布表の分散と標準偏差',
          formula: '分散 ＝ Σf(x − x̄)² ÷ Σf',
          list: ['x は値。階級でまとめた表なら中点を使う（レッスン71）', 'x̄ は先に Σfx ÷ Σf で求める（レッスン71）', '偏差の2乗に、その値が出てきた回数 f をかけてから足す', '標準偏差 ＝ 分散の平方根（レッスン72と同じ）']
        },
        {
          title: 'たこ焼き屋の来店客数',
          table: { caption: '36日分の1日の来店客数（人）', head: ['階級（中点 x）', '日数 f', 'f(x − x̄)²'], rows: [['100〜120未満（110）', '3', '4,800'], ['120〜140未満（130）', '6', '2,400'], ['140〜160未満（150）', '18', '0'], ['160〜180未満（170）', '6', '2,400'], ['180〜200未満（190）', '3', '4,800']], total: ['合計', '36', '14,400'] }
        },
        {
          title: '例題: 来店客数の標準偏差',
          example: {
            problem: '上の表から、1日の来店客数の標準偏差を求める。',
            steps: ['平均: Σfx ＝ 110×3 ＋ 130×6 ＋ 150×18 ＋ 170×6 ＋ 190×3 ＝ 5,400。5,400 ÷ 36 ＝ 150人', '各中点から平均を引いて2乗する: (110 − 150)² ＝ 1,600、(130 − 150)² ＝ 400、(150 − 150)² ＝ 0 など', '日数 f をかけて足す: 1,600×3 ＋ 400×6 ＋ 0×18 ＋ 400×6 ＋ 1,600×3 ＝ 14,400', '分散 ＝ 14,400 ÷ 36 ＝ 400', '標準偏差 ＝ √400 ＝ 20'],
            answer: '標準偏差は 20人（平均 150人）。中点を使ったので推定値'
          }
        },
        {
          title: '検算に便利な近道の式',
          formula: '分散 ＝ Σfx² ÷ Σf − x̄²',
          paras: ['同じ例で計算すると、Σfx² ＝ 110²×3 ＋ … ＋ 190²×3 ＝ 824,400。824,400 ÷ 36 ＝ 22,900。22,900 − 150² ＝ 22,900 − 22,500 ＝ 400 で一致する。', '偏差の表を作らなくてよいので、電卓では速い。最後に平均の2乗を引き忘れないこと。']
        },
        {
          title: '変動係数（coefficient of variation）',
          formula: '変動係数 ＝ 標準偏差 ÷ 平均（× 100%）',
          paras: ['ばらつきが平均の何%にあたるかを表す。単位が消えるので、平均の大きさや単位が違うデータどうしでも比べられる。', '小さいほど、平均に比べてばらつきが小さい（安定している、リスクが低い）。上の来店客数なら 20 ÷ 150 ≒ 13.3%。']
        },
        {
          title: '例題: どちらの店が安定している？',
          example: {
            problem: 'A店は1日の売上の平均 $300、標準偏差 $30。駅前のB店は平均 $800、標準偏差 $60。売上が相対的に安定しているのはどちら？',
            steps: ['標準偏差だけ見ると、B店（$60）の方が A店（$30）より大きい', 'A店の変動係数: 30 ÷ 300 ＝ 0.10 ＝ 10%', 'B店の変動係数: 60 ÷ 800 ＝ 0.075 ＝ 7.5%', '変動係数は B店の方が小さい'],
            answer: 'B店の方が相対的に安定している。標準偏差の大小とは逆の結論になる'
          }
        },
        {
          title: 'なぜ？ 平均で割る',
          paras: ['ネズミの体重の標準偏差 5g と、ゾウの体重の標準偏差 50kg。数字だけならゾウのばらつきが大きいが、それは体がもともと大きいから。', '平均が大きいデータは、ばらつきの絶対値も大きくなりやすい。標準偏差を平均で割ると、この大きさの違いが消えて、ばらつきの度合いだけを公平に比べられる。', '投資案の比較なら、平均の利益に対して結果がどれだけぶれるか（リスク）を比べる物差しになる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '変動係数は「標準偏差 ÷ 平均」。逆（平均 ÷ 標準偏差）にしない。度数分布表の分散では、偏差の2乗に必ず度数 f をかけ、Σf（36日）で割る。階級の数（5）で割らない。近道の式では、最後に平均の2乗を引くのを忘れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['度数分布表の分散 ＝ Σf(x − x̄)² ÷ Σf。階級なら x は中点', '標準偏差 ＝ √分散。近道の式 Σfx² ÷ Σf − x̄² でも同じになる', '変動係数 ＝ 標準偏差 ÷ 平均。平均が違うデータのばらつきを比べるときに使う']
        },
        {
          title: '英単語',
          words: [
            ['coefficient of variation', 'コエフィシェント オブ バリエーション', '変動係数（標準偏差 ÷ 平均）'],
            ['relative dispersion', 'レラティブ ディスパージョン', '相対的なばらつき（平均と比べたばらつき）'],
            ['grouped data', 'グループト データ', '階級や値ごとにまとめたデータ'],
            ['mid-point', 'ミッドポイント', '中点'],
            ['sigma (Σ)', 'シグマ', '全部足すという記号'],
            ['consistent', 'コンシステント', '安定している、ぶれが小さい']
          ]
        }
      ],
      quiz: [
        { q: 'The delivery times for 60 orders were: 2 days: 5 orders; 4 days: 10 orders; 6 days: 30 orders; 8 days: 10 orders; 10 days: 5 orders. What is the standard deviation of the delivery time (in days)?', type: 'number', answer: 2, unit: '日', explain: '平均 ＝ Σfx ÷ Σf ＝ (10＋40＋180＋80＋50) ÷ 60 ＝ 360 ÷ 60 ＝ 6日。Σf(x − x̄)² ＝ 5×16 ＋ 10×4 ＋ 30×0 ＋ 10×4 ＋ 5×16 ＝ 240。分散 ＝ 240 ÷ 60 ＝ 4。標準偏差 ＝ √4 ＝ 2日。度数 f をかけ忘れると (16＋4＋0＋4＋16) ÷ 5 ＝ 8 となり誤り。' },
        { q: 'Product A has mean weekly sales of 400 units and a standard deviation of 60 units. Product B has mean weekly sales of 250 units and a standard deviation of 50 units. Which of the following statements is correct?', choices: ['Product A is relatively more variable because its standard deviation is higher', 'Product B is relatively more variable: its coefficient of variation is 20% compared with 15% for Product A', 'The two products have the same relative variability', 'Product A is relatively more variable: its coefficient of variation is 6.67 compared with 5 for Product B'], answer: 1, explain: '変動係数は A ＝ 60 ÷ 400 ＝ 15%、B ＝ 50 ÷ 250 ＝ 20%。平均に対するぶれは B の方が大きい。標準偏差だけで比べると平均の大きさの違いを無視してしまう。6.67 と 5 は平均 ÷ 標準偏差と逆に割った間違い。' },
        { q: '平均 80、標準偏差 12 のデータの変動係数は何%？', type: 'number', answer: 15, unit: '%', explain: '変動係数 ＝ 標準偏差 ÷ 平均 ＝ 12 ÷ 80 ＝ 0.15 ＝ 15%。逆に 80 ÷ 12 とすると約 6.67 になり誤り。' },
        { q: '階級ごとにまとめた度数分布表で分散を計算するとき、各階級の値 x として使うのは？', choices: ['各階級の中点', '各階級の下限', '各階級の度数', '各階級の上限'], answer: 0, explain: '平均（レッスン71）と同じく、階級の値は中点で代表させる。度数 f は x ではなく、偏差の2乗にかける回数。下限や上限を使うと、ばらつきも平均もずれる。' },
        { q: 'Which measure is most suitable for comparing the dispersion of two sets of data that have very different means?', choices: ['Range', 'Standard deviation', 'Coefficient of variation', 'Variance'], answer: 2, explain: '変動係数は標準偏差を平均で割るので、平均の大きさの違いが消える。範囲・標準偏差・分散はどれも絶対的な大きさなので、平均の大きいデータほど大きく出やすく、公平に比べられない。' },
        { q: 'The number of calls handled per day by an office is grouped into the classes 10–19, 20–29, 30–39 and 40–49 (whole numbers). What is the mid-point of the class 20–29 used to estimate the mean?', type: 'number', answer: 24.5, unit: '', explain: '整数で書いた階級の中点は (下限 ＋ 上限) ÷ 2 ＝ (20＋29) ÷ 2 ＝ 24.5（レッスン71）。25 は「20以上30未満」とみなして (20＋30) ÷ 2 とした間違い。階級の幅は下限どうしの差で 30 − 20 ＝ 10。' }
      ]
    }
  ],
  cards: [
    { id: 'M070-1', lesson: 'M070', q: '平均（arithmetic mean）の求め方は？', a: '全部の値の合計 ÷ 個数（Σx ÷ n）' },
    { id: 'M070-2', lesson: 'M070', q: '中央値（median）の求め方は？', a: '小さい順に並べた真ん中の値。偶数個なら真ん中2つの平均' },
    { id: 'M070-3', lesson: 'M070', q: '最頻値（mode）とは？', a: 'いちばん多く出てくる値（回数そのものではない）' },
    { id: 'M070-4', lesson: 'M070', q: '極端な値があるとき、典型をよく表す代表値は？ なぜ？', a: '中央値。平均は極端な値に引っぱられるが、中央値は並び順だけで決まるから' },
    { id: 'M070-5', lesson: 'M070', q: '平均と個数から合計を出すには？', a: '合計 ＝ 平均 × 個数' },
    { id: 'M070-6', lesson: 'M070', q: '名義データ（味・色など）で使える代表値は？', a: '最頻値だけ' },
    { id: 'M071-1', lesson: 'M071', q: '度数分布表の平均の式は？', a: 'Σfx ÷ Σf' },
    { id: 'M071-2', lesson: 'M071', q: '度数分布表の平均で、割る数は？', a: '度数の合計 Σf（階級の数ではない）' },
    { id: 'M071-3', lesson: 'M071', q: '階級（class interval）の中点の求め方は？', a: '（下限 ＋ 上限）÷ 2' },
    { id: 'M071-4', lesson: 'M071', q: '階級データの平均が推定値になるのはなぜ？', a: '各階級の値が全部中点にあると仮定して計算するから' },
    { id: 'M071-5', lesson: 'M071', q: '「$400以上」のような開いた階級の扱いは？', a: '隣の階級と同じ幅とみなして中点を出す' },
    { id: 'M071-6', lesson: 'M071', q: '値ごとの度数分布表から中央値を出すには？', a: '度数を上から足していき、真ん中の番目が入る値を読む' },
    { id: 'M071-7', lesson: 'M071', q: '整数データの階級「20〜29」の中点と幅は？', a: '中点 (20＋29) ÷ 2 ＝ 24.5。幅は下限どうしの差 30 − 20 ＝ 10' },
    { id: 'M072-1', lesson: 'M072', q: '範囲（range）の求め方と弱点は？', a: '最大値 − 最小値。両端の2つの値しか使わない' },
    { id: 'M072-2', lesson: 'M072', q: '分散（variance）の式は？', a: '偏差の2乗の平均 Σ(x − x̄)² ÷ n' },
    { id: 'M072-3', lesson: 'M072', q: '標準偏差（standard deviation）とは？', a: '分散の平方根。単位はデータと同じ' },
    { id: 'M072-4', lesson: 'M072', q: '分散で偏差を2乗するのはなぜ？', a: '偏差をそのまま足すと、合計がいつも0になるから' },
    { id: 'M072-5', lesson: 'M072', q: '最後に平方根をとるのはなぜ？', a: '2乗で「$の2乗」になった単位を、元の単位に戻すため' },
    { id: 'M072-6', lesson: 'M072', q: '標準偏差が大きいと何が言える？', a: '値が平均から大きくぶれていて、予測しにくい' },
    { id: 'M073-1', lesson: 'M073', q: '度数分布表の分散の式は？', a: 'Σf(x − x̄)² ÷ Σf（階級なら x は中点）' },
    { id: 'M073-2', lesson: 'M073', q: '分散の近道の式は？', a: 'Σfx² ÷ Σf − x̄²（平均の2乗を引く）' },
    { id: 'M073-3', lesson: 'M073', q: '変動係数（coefficient of variation）の式は？', a: '標準偏差 ÷ 平均（× 100%）' },
    { id: 'M073-4', lesson: 'M073', q: '変動係数を使うのはどんなとき？', a: '平均や単位が違うデータどうしのばらつきを比べるとき' },
    { id: 'M073-5', lesson: 'M073', q: '変動係数が小さいと何が言える？', a: '平均に比べてばらつきが小さく、相対的に安定している（リスクが低い）' },
    { id: 'M073-6', lesson: 'M073', q: '階級「10〜19」（整数）の中点は？「10以上20未満」との違いは？', a: '14.5（(10＋19) ÷ 2）。「10以上20未満」なら中点は15' }
  ]
});
