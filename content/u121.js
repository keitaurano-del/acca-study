(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 121,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M085',
      no: 85,
      title: '時系列分析の4つの要素',
      goal: '時系列のデータをトレンド・季節変動・循環変動・ランダム変動の4つに分けて説明し、加法モデルと乗法モデルの式を書けるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(a)'],
      slides: [
        {
          title: 'コンビニのおでんの売上',
          paras: ['おでんは毎年、冬によく売れて夏はあまり売れない。これは毎年くり返す季節のクセ。', 'でも常連さんが年々ふえて、売上全体はゆるやかに伸びている。景気の悪い年はみんなが節約して少し減る。台風の日は1日だけガクッと減る。', '1本の売上の数字には、このように性格のちがう動きがいくつも重なっている。']
        },
        {
          title: '時系列分析（time series analysis）とは',
          paras: ['時系列（time series）は、売上や生産量を時間の順に並べた数字の列。月ごと、四半期ごと、年ごとなど。', '時系列分析は、過去の数字を性格のちがう要素に分けて、パターンを見つけ、それを将来に延ばして予測する方法。予算（販売予算など）を作るときの予測に使う。']
        },
        {
          title: '4つの要素',
          table: { caption: '時系列を作る4つの動き', head: ['要素', '英語', '中身'], rows: [['トレンド', 'trend', '長い期間で見た全体の方向（上向き・下向き・横ばい）'], ['季節変動', 'seasonal variation', '1年の中で毎年くり返す短い上下。曜日や時間帯のクセも含む'], ['循環変動', 'cyclical variation', '景気の好況・不況に合わせた、数年単位の波'], ['ランダム変動', 'random variation', 'ストライキ・天災など、予測できない一度きりの動き']] },
          after: '試験では、データの期間が短いので循環変動はふつう無視し、トレンドと季節変動を中心に計算する。'
        },
        {
          title: 'グラフで見ると',
          svg: `<svg viewBox="0 0 440 282" role="img" aria-label="3年分の四半期売上。実績は毎年同じ形でジグザグに上下し、その中心をトレンドの直線がゆるやかに上がっていく" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">ジグザグの実績と、まっすぐなトレンド</text><line x1="40" y1="40" x2="40" y2="230" stroke="var(--edge)" stroke-width="1.25"/><line x1="40" y1="230" x2="420" y2="230" stroke="var(--edge)" stroke-width="1.25"/><text x="48" y="54" fill="var(--quiet)">売上</text><line x1="162" y1="60" x2="162" y2="230" stroke="var(--edge)" stroke-width="1" stroke-dasharray="3 4"/><line x1="290" y1="60" x2="290" y2="230" stroke="var(--edge)" stroke-width="1" stroke-dasharray="3 4"/><text x="98" y="250" text-anchor="middle" fill="var(--quiet)">1年目</text><text x="226" y="250" text-anchor="middle" fill="var(--quiet)">2年目</text><text x="354" y="250" text-anchor="middle" fill="var(--quiet)">3年目</text><polyline points="50,193.6 82,155.8 114,133.1 146,170.9 178,163.3 210,125.6 242,102.9 274,140.7 306,133.1 338,95.3 370,72.7 402,110.4" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="50" y1="174.7" x2="402" y2="91.6" stroke="var(--accent)" stroke-width="2.5"/><text x="242" y="90" text-anchor="middle" fill="var(--ink)">夏の山</text><text x="146" y="194" text-anchor="middle" fill="var(--ink)">冬の谷</text><text x="220" y="274" text-anchor="middle" fill="var(--ink)">細い折れ線＝実績、色の直線＝トレンド</text></svg>`,
          caption: '夏に多く売れるたこ焼き屋（次のスライド）の形。実績とトレンドの差が、季節変動（と少しのランダム変動）。'
        },
        {
          title: 'たこ焼き屋の四半期の売上で確かめる',
          table: { caption: '四半期の売上（$000）', head: ['四半期', '1年目', '2年目'], rows: [['Q1（1〜3月）', '94', '110'], ['Q2（4〜6月）', '114', '130'], ['Q3（7〜9月）', '126', '142'], ['Q4（10〜12月）', '106', '122']] },
          after: 'Q3 は夏祭りで毎年いちばん多い＝季節変動。同じ四半期どうしで比べると、どれも1年で 16 ずつふえている＝トレンド（1四半期あたり 4）。'
        },
        {
          title: '2つのモデル',
          paras: ['要素の組み合わせ方には2種類ある。Y は実績、T はトレンド、S は季節変動、R はランダム変動（循環変動 C を入れることもある）。'],
          formula: '加法モデル（additive）: Y ＝ T ＋ S ＋ R　／　乗法モデル（multiplicative）: Y ＝ T × S × R',
          after: '加法は「平均より $10,000 多い」のように季節変動を金額で表す。乗法は「平均より 20% 多い」のように割合で表す。計算は M088・M089 で練習する。'
        },
        {
          title: '時系列分析の3つの手順',
          numbered: ['トレンドを求める（移動平均、または一次関数・回帰分析）', '季節変動を求める（実績とトレンドの差、または比）', 'トレンドを将来へ延ばし、季節変動を足す（乗法なら掛ける）'],
          after: '次のレッスンから、この順番で1つずつ計算していく。'
        },
        {
          title: 'なぜ？ 要素に分ける理由',
          paras: ['たこ焼き屋の Q3 の売上が Q2 より 12 多かったとする。店が成長したのか、夏だから多いだけなのか、数字1つでは分からない。', '要素に分けると、本当の伸び（トレンド）と、毎年くり返す上下（季節変動）を別々に見られる。だから「来年の Q3 はいくら売れそうか」を、成長と季節の両方を入れて予測できる。人員や材料の手配もこの予測で決める。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '季節変動と循環変動を混同する。季節変動は1年以内にくり返す短いクセ（四季だけでなく、曜日・時間帯・月末なども含む）。循環変動は景気の波による数年単位の動き。また、ランダム変動は予測できないので、予測の式には入れない（加法ならゼロ、乗法なら1＝影響なしとみなす）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['4つの要素: トレンド・季節変動・循環変動・ランダム変動', '季節は1年以内のくり返し、循環は景気による数年単位の波', '加法 Y ＝ T ＋ S ＋ R、乗法 Y ＝ T × S × R']
        },
        {
          title: '英単語',
          words: [
            ['time series', 'タイム シリーズ', '時系列（時間の順に並べた数字）'],
            ['trend', 'トレンド', 'トレンド（長期の方向）'],
            ['seasonal variation', 'シーズナル ヴァリエーション', '季節変動'],
            ['cyclical variation', 'シクリカル ヴァリエーション', '循環変動（景気の波）'],
            ['random variation', 'ランダム ヴァリエーション', 'ランダム変動（予測できない動き）'],
            ['additive model', 'アディティブ モデル', '加法モデル（Y ＝ T ＋ S ＋ R）'],
            ['multiplicative model', 'マルチプリカティブ モデル', '乗法モデル（Y ＝ T × S × R）']
          ]
        }
      ],
      quiz: [
        { q: 'Which component of a time series describes the underlying long-term movement in the data?', choices: ['Seasonal variation', 'Cyclical variation', 'The trend', 'Random variation'], answer: 2, explain: '長期の全体の方向はトレンド。季節変動は1年以内のくり返し、循環変動は景気による数年単位の波、ランダム変動は予測できない一度きりの動き。' },
        { q: "A factory's output fell sharply for two weeks because of an unexpected strike. Which component of a time series does this represent?", choices: ['Seasonal variation', 'Cyclical variation', 'The trend', 'Random variation'], answer: 3, explain: '予測できない一度きりの出来事なのでランダム変動。毎年くり返すわけではないので季節変動ではない。' },
        { q: '鍋の素の売上が、毎年 11〜2月に多く、6〜8月に少ない。この動きはどの要素？', choices: ['循環変動', '季節変動', 'トレンド', 'ランダム変動'], answer: 1, explain: '1年の中で毎年くり返す上下なので季節変動。循環変動は景気による数年単位の波で、1年の中のくり返しではない。' },
        { q: '住宅の販売数が、好景気の数年は多く、不況の数年は少ないという波をくり返す。この動きはどの要素？', choices: ['季節変動', 'ランダム変動', '循環変動', 'トレンド'], answer: 2, explain: '景気の好況・不況に合わせた数年単位の波は循環変動。「くり返す」につられて季節変動を選ぶのが典型的な間違い。季節変動は1年以内のくり返し。' },
        { q: 'Using T for trend, S for seasonal variation and R for random variation, which of the following represents the additive model for the actual value (Y)?', choices: ['Y = T x S x R', 'Y = T + S + R', 'Y = T - S - R', 'Y = (T + S) x R'], answer: 1, explain: '加法モデルは要素を足す。Y = T x S x R は乗法モデル。' }
      ]
    },
    {
      id: 'M086',
      no: 86,
      title: '移動平均を計算する',
      goal: '奇数期間・偶数期間の移動平均を計算し、偶数期間では中心化して、各期間のトレンドを出せるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(b)'],
      slides: [
        {
          title: '体重は1週間の平均で見る',
          paras: ['体重を毎日測ると、外食した週末の翌朝だけ重いなど、上下にぶれる。', '「直近7日の平均」を毎日1日ずつずらして出すと、曜日のクセが消えて、本当にやせているか太っているかの流れが見える。これが移動平均の考え方。']
        },
        {
          title: '移動平均（moving average）とは',
          paras: ['連続する n 期の平均を、1期ずつずらしながら出していく。'],
          formula: '移動平均 ＝ 連続する n 期の合計 ÷ n',
          after: 'n は季節のくり返しの長さに合わせる。四半期データなら 4、月次で1年のくり返しなら 12、曜日のくり返しなら 7。こうすると平均の中で季節の上下が打ち消し合い、トレンドが残る。'
        },
        {
          title: '例題1: 3か月移動平均（奇数の期間）',
          example: {
            problem: '月の売上は 1月 30、2月 36、3月 33、4月 39、5月 42、6月 45（$000）。3か月移動平均を出せ。',
            steps: ['1〜3月: (30 ＋ 36 ＋ 33) ÷ 3 ＝ 99 ÷ 3 ＝ 33 → 真ん中の 2月に置く', '2〜4月: (36 ＋ 33 ＋ 39) ÷ 3 ＝ 108 ÷ 3 ＝ 36 → 3月', '3〜5月: (33 ＋ 39 ＋ 42) ÷ 3 ＝ 114 ÷ 3 ＝ 38 → 4月', '4〜6月: (39 ＋ 42 ＋ 45) ÷ 3 ＝ 126 ÷ 3 ＝ 42 → 5月'],
            answer: '2月 33、3月 36、4月 38、5月 42。1月と6月には移動平均が出ない'
          }
        },
        {
          title: '偶数の期間は「すき間」に来る',
          svg: `<svg viewBox="0 0 440 244" role="img" aria-label="Q1からQ4の平均はQ2とQ3の間、Q2からQ5の平均はQ3とQ4の間に来る。2つをさらに平均するとQ3の位置に合う" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">4期の平均は2つの期の間に来る</text><line x1="24" y1="72" x2="272" y2="72" stroke="var(--ink)" stroke-width="1.5"/><line x1="24" y1="72" x2="24" y2="82" stroke="var(--ink)" stroke-width="1.5"/><line x1="272" y1="72" x2="272" y2="82" stroke="var(--ink)" stroke-width="1.5"/><text x="148" y="64" text-anchor="middle" fill="var(--ink)">期1〜期4 の平均 110</text><line x1="88" y1="112" x2="336" y2="112" stroke="var(--ink)" stroke-width="1.5"/><line x1="88" y1="112" x2="88" y2="122" stroke="var(--ink)" stroke-width="1.5"/><line x1="336" y1="112" x2="336" y2="122" stroke="var(--ink)" stroke-width="1.5"/><text x="212" y="104" text-anchor="middle" fill="var(--ink)">期2〜期5 の平均 114</text><rect x="24" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><rect x="88" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><rect x="152" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><rect x="216" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><rect x="280" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><rect x="344" y="132" width="56" height="34" rx="6" fill="none" stroke="var(--edge)"/><text x="52" y="154" text-anchor="middle" fill="var(--ink)">94</text><text x="116" y="154" text-anchor="middle" fill="var(--ink)">114</text><text x="180" y="154" text-anchor="middle" fill="var(--ink)">126</text><text x="244" y="154" text-anchor="middle" fill="var(--ink)">106</text><text x="308" y="154" text-anchor="middle" fill="var(--ink)">110</text><text x="372" y="154" text-anchor="middle" fill="var(--ink)">130</text><text x="52" y="184" text-anchor="middle" fill="var(--quiet)">期1</text><text x="116" y="184" text-anchor="middle" fill="var(--quiet)">期2</text><text x="180" y="184" text-anchor="middle" fill="var(--quiet)">期3</text><text x="244" y="184" text-anchor="middle" fill="var(--quiet)">期4</text><text x="308" y="184" text-anchor="middle" fill="var(--quiet)">期5</text><text x="372" y="184" text-anchor="middle" fill="var(--quiet)">期6</text><rect x="152" y="200" width="56" height="32" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="180" y="221" text-anchor="middle" font-weight="600" fill="var(--ink)">112</text><text x="220" y="221" fill="var(--ink)">＝(110 ＋ 114) ÷ 2</text></svg>`,
          caption: '110 は期2と期3の間、114 は期3と期4の間。2つを平均すると、ちょうど期3の位置に来る。これを中心化（centring）という。'
        },
        {
          title: '例題2: 4四半期移動平均と中心化',
          example: {
            problem: 'たこ焼き屋の8四半期の売上（$000）は、期1〜期8 の順に 94、114、126、106、110、130、142、122（期1〜4 が1年目）。中心化した4四半期移動平均を出せ。',
            steps: ['4期の合計を1期ずつずらす: 期1〜4 ＝ 440、期2〜5 ＝ 456、期3〜6 ＝ 472、期4〜7 ＝ 488、期5〜8 ＝ 504', '4で割る（移動平均）: 110、114、118、122、126', '隣り合う2つを平均して中心化する', '期3 ＝ (110 ＋ 114) ÷ 2 ＝ 112、期4 ＝ (114 ＋ 118) ÷ 2 ＝ 116', '期5 ＝ (118 ＋ 122) ÷ 2 ＝ 120、期6 ＝ (122 ＋ 126) ÷ 2 ＝ 124'],
            answer: '期3 112、期4 116、期5 120、期6 124。これが各期のトレンド'
          },
          note: { kind: 'tip', text: '近道: 期3 の中心化移動平均 ＝ (期1 ＋ 2×期2 ＋ 2×期3 ＋ 2×期4 ＋ 期5) ÷ 8 ＝ (94 ＋ 228 ＋ 252 ＋ 212 ＋ 110) ÷ 8 ＝ 112。' }
        },
        {
          title: '結果を表にする',
          table: { caption: '売上と中心化移動平均（トレンド）', head: ['期', '売上（$000）', 'トレンド'], rows: [['期1（1年目Q1）', '94', '—'], ['期2（1年目Q2）', '114', '—'], ['期3（1年目Q3）', '126', '112'], ['期4（1年目Q4）', '106', '116'], ['期5（2年目Q1）', '110', '120'], ['期6（2年目Q2）', '130', '124'], ['期7（2年目Q3）', '142', '—'], ['期8（2年目Q4）', '122', '—']] },
          after: '8期のデータから出せる中心化移動平均は4つ。最初の2期と最後の2期にはトレンドが出ない。'
        },
        {
          title: 'なぜ？ 季節変動が消えるしくみ',
          paras: ['4四半期の合計には、Q1・Q2・Q3・Q4 がちょうど1回ずつ入る。夏の山と冬の谷が同じ回数入るので、季節の上下が打ち消し合い、平均には成長の分（トレンド）だけが残る。', '中心化する理由は、トレンドを「ある1つの期」に合わせるため。期3 の実績 126 と期3 のトレンド 112 を並べられれば、差の 14 が期3 の季節変動だと分かる（次の M087・M088 で使う）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '偶数の期間（4四半期・12か月）なのに中心化を忘れ、期2と期3の間の値を期3のトレンドにしてしまう。奇数の期間（3か月・7日）は中心化しない。また、K1 の在庫で学んだ移動平均法（continuous weighted average、仕入のたびに単価を出し直す）とは別物。こちらは時系列の数字をならす方法。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['移動平均の期間は季節のくり返しの長さ（四半期なら4、曜日なら7）', '奇数の期間は真ん中の期に置く。偶数の期間は隣り合う2つを平均して中心化する', '移動平均はトレンドを表す。最初と最後の数期にはトレンドが出ない']
        },
        {
          title: '英単語',
          words: [
            ['moving average', 'ムービング アベレージ', '移動平均'],
            ['moving total', 'ムービング トータル', '移動合計（ずらしながら出す合計）'],
            ['centred moving average', 'センタード ムービング アベレージ', '中心化移動平均'],
            ['centring', 'センタリング', '中心化（2つの平均をさらに平均して期に合わせる）'],
            ['quarter', 'クォーター', '四半期（3か月）'],
            ['consecutive', 'コンセキュティブ', '連続する']
          ]
        }
      ],
      quiz: [
        { q: 'Sales for five consecutive months were 40, 46, 43, 49 and 52 units. What is the 3-month moving average centred on month 4?', type: 'number', answer: 48, unit: '', explain: '月4を真ん中にするのは月3〜5: (43 + 49 + 52) ÷ 3 ＝ 144 ÷ 3 ＝ 48。月2〜4 の (46 + 43 + 49) ÷ 3 ＝ 46 は月3の移動平均。' },
        { q: '四半期の売上は 期1 80、期2 100、期3 120、期4 60、期5 88。期3 の中心化した4四半期移動平均（トレンド）はいくら？', type: 'number', answer: 91, unit: '', explain: '期1〜4 の平均 360 ÷ 4 ＝ 90、期2〜5 の平均 368 ÷ 4 ＝ 92。中心化して (90 ＋ 92) ÷ 2 ＝ 91。90 だけを答えると、期2と期3の間の値を期3に置いたことになる。' },
        { q: 'When a 4-quarter moving average is calculated for quarterly data, why is it necessary to centre the moving averages?', choices: ['Because the data contain random variations', 'Because the trend may not be a straight line', 'Because an average of an even number of periods falls between two periods', 'Because the seasonal variations must total zero'], answer: 2, explain: '4期の平均は期2と期3の間に来るので、実際の期に合わせるには中心化が必要。ランダム変動や季節変動の合計の調整は、中心化の理由ではない。' },
        { q: 'A time series contains 12 quarterly sales figures. How many centred 4-quarter moving averages can be calculated?', type: 'number', answer: 8, unit: '', explain: '4四半期移動平均は 12 − 4 ＋ 1 ＝ 9 個。隣り合う2つずつで中心化すると 9 − 1 ＝ 8 個。最初の2期と最後の2期にはトレンドが出ない。' },
        { q: 'レストランの日ごとの来客数は、毎週の曜日で決まったパターンをくり返す（週7日営業）。トレンドを出すのに使う移動平均の期間は？', choices: ['4日', '7日', '3日', '12日'], answer: 1, explain: 'くり返しの長さが7日なので7日移動平均にする。そうすると7つの曜日が1回ずつ入り、曜日のクセが打ち消し合う。7は奇数なので中心化はいらない。' }
      ]
    },
    {
      id: 'M087',
      no: 87,
      title: 'トレンドを求める（一次関数を使う）',
      goal: '移動平均や一次関数 y ＝ a ＋ bx（x は期間の番号）からトレンドを求め、将来の期間のトレンドを計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(c)'],
      slides: [
        {
          title: '子どもの身長を予想する',
          paras: ['ある子の身長は 8歳 128cm、9歳 134cm、10歳 140cm。1年に 6cm ずつ伸びている。', 'このペースが続くなら、12歳では 140 ＋ 6 × 2 ＝ 152cm。季節のぶれをならした「流れ」を直線とみなして先へ延ばすのが、トレンドの予測。']
        },
        {
          title: 'トレンドを出す2つの方法',
          list: ['移動平均で出したトレンドから、1期あたりの増え方を求めて延ばす', 'トレンドを一次関数 y ＝ a ＋ bx で表す。x は期間の番号、y はトレンド。式は問題文で与えられるか、回帰分析（M080）で求める'],
          formula: 'トレンド y ＝ a ＋ bx（a ＝ 期間0 のトレンド、b ＝ 1期あたりの増え方）',
          after: '原価の式（M017）と同じ形。横軸が生産量ではなく時間になっただけ。'
        },
        {
          title: '例題1: 移動平均からトレンドを延ばす',
          example: {
            problem: 'M086 の中心化移動平均は 期3 112、期4 116、期5 120、期6 124。トレンドが同じペースで続くとして、期10 のトレンドと、トレンドの式を求めよ。',
            steps: ['1期あたりの増え方 ＝ (最後 − 最初) ÷ 間隔の数', '＝ (124 − 112) ÷ (6 − 3) ＝ 12 ÷ 3 ＝ 4', '期10 は期6の4期あと: 124 ＋ 4 × 4 ＝ 140', '式にする: b ＝ 4、a ＝ 112 − 4 × 3 ＝ 100 → y ＝ 100 ＋ 4x', '確かめ: x ＝ 10 → 100 ＋ 40 ＝ 140（一致）'],
            answer: '期10 のトレンドは 140（$000）。式は y ＝ 100 ＋ 4x'
          }
        },
        {
          title: '図で見ると',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="期3から期6の中心化移動平均が1期に4ずつ上がる直線に並び、それを点線で延ばすと期10のトレンドは140になる" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">トレンドを直線で先へ延ばす</text><line x1="40" y1="40" x2="40" y2="220" stroke="var(--edge)" stroke-width="1.25"/><line x1="40" y1="220" x2="420" y2="220" stroke="var(--edge)" stroke-width="1.25"/><text x="48" y="54" fill="var(--quiet)">トレンド（$000）</text><line x1="148" y1="178" x2="256" y2="136" stroke="var(--ink)" stroke-width="2"/><circle cx="148" cy="178" r="5" fill="var(--ink)"/><circle cx="184" cy="164" r="5" fill="var(--ink)"/><circle cx="220" cy="150" r="5" fill="var(--ink)"/><circle cx="256" cy="136" r="5" fill="var(--ink)"/><line x1="256" y1="136" x2="400" y2="80" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 5"/><circle cx="400" cy="80" r="7" fill="var(--accent)"/><text x="400" y="66" text-anchor="end" fill="var(--ink)">期10 のトレンド 140</text><text x="196" y="132" text-anchor="middle" fill="var(--ink)">1期ごとに ＋4</text><text x="148" y="200" fill="var(--ink)">期3〜期6 の中心化移動平均</text><text x="148" y="240" text-anchor="middle" fill="var(--quiet)">3</text><text x="256" y="240" text-anchor="middle" fill="var(--quiet)">6</text><text x="400" y="240" text-anchor="middle" fill="var(--quiet)">10</text><text x="420" y="258" text-anchor="end" fill="var(--quiet)">期間の番号 x</text></svg>`,
          caption: '実線が計算で出したトレンド、点線が将来へ延ばした部分。'
        },
        {
          title: '例題2: 回帰分析でトレンドの式を出す',
          paras: ['年の売上（$000）: 1年目 20、2年目 24、3年目 25、4年目 29、5年目 32。x ＝ 年の番号（1〜5）として回帰分析を使う。'],
          example: {
            problem: 'n ＝ 5、Σx ＝ 15、Σy ＝ 130、Σxy ＝ 419、Σx² ＝ 55。トレンドの式と、6年目のトレンドを求めよ。',
            steps: ['b ＝ (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)', '＝ (5 × 419 − 15 × 130) ÷ (5 × 55 − 15²) ＝ (2,095 − 1,950) ÷ (275 − 225) ＝ 145 ÷ 50 ＝ 2.9', 'a ＝ Σy ÷ n − b × Σx ÷ n ＝ 26 − 2.9 × 3 ＝ 17.3', '6年目: y ＝ 17.3 ＋ 2.9 × 6 ＝ 17.3 ＋ 17.4 ＝ 34.7'],
            answer: 'y ＝ 17.3 ＋ 2.9x。6年目のトレンドは 34.7（$34,700）'
          }
        },
        {
          title: '例題3: 与えられた式で x を数える',
          example: {
            problem: '月の売上のトレンドは y ＝ 52 ＋ 1.5x（$000）。x ＝ 1 は 20X1年1月。20X2年8月のトレンドは？',
            steps: ['20X1年は x ＝ 1〜12。20X2年1月が x ＝ 13', '20X2年8月は x ＝ 12 ＋ 8 ＝ 20', 'y ＝ 52 ＋ 1.5 × 20 ＝ 52 ＋ 30 ＝ 82'],
            answer: '$82,000'
          }
        },
        {
          title: 'なぜ？ トレンドを直線とみなせる理由',
          paras: ['トレンドは、季節の上下やランダムなぶれを取り除いた「ならした値」。ならした後の流れは、短い期間なら直線に近いことが多い。', '直線なら y ＝ a ＋ bx の2つの数字だけで、何期先でも同じ手順で計算できる。ただし、成長のペースが変わればトレンドは曲がる。遠い将来まで延ばすほど外れやすい（M090）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '増え方を値の数で割る。期3〜期6 の4つの値なら、間隔は3つ。(124 − 112) ÷ 4 ＝ 3 ではなく ÷ 3 ＝ 4。もう1つは x の数え方。x ＝ 1 がどの期か（x ＝ 0 から始まる問題もある）を問題文で必ず確かめ、何年目の何四半期かを通し番号に直してから式に入れる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['1期あたりの増え方 ＝ (最後のトレンド − 最初のトレンド) ÷ 間隔の数', 'トレンドの式 y ＝ a ＋ bx。x は期間の通し番号', '回帰分析の b と a で、時間を x にしたトレンドの式も作れる']
        },
        {
          title: '英単語',
          words: [
            ['trend line', 'トレンド ライン', 'トレンドの直線'],
            ['trend equation', 'トレンド イクエーション', 'トレンドの式（y ＝ a ＋ bx）'],
            ['quarter number', 'クォーター ナンバー', '四半期の通し番号（x）'],
            ['extrapolate', 'エクストラポレート', '（データの範囲の外へ）延ばして予測する'],
            ['average increase per quarter', '', '1四半期あたりの平均の増え方']
          ]
        }
      ],
      quiz: [
        { q: 'The trend of quarterly sales is given by the equation y = 240 + 6x, where y is sales in $000 and x is the quarter number. The first quarter of 20X5 is x = 1. What is the trend value of sales for the third quarter of 20X7, in $000?', type: 'number', answer: 306, unit: '', explain: '20X5年は x ＝ 1〜4、20X6年は 5〜8、20X7年は 9〜12。第3四半期は x ＝ 11。240 ＋ 6 × 11 ＝ 306。' },
        { q: '中心化移動平均は 期3 112、期6 124 だった。1期あたりのトレンドの増え方は？', type: 'number', answer: 4, unit: '', explain: '期3から期6までの間隔は3つ。(124 − 112) ÷ 3 ＝ 4。値の数の4で割って 3 とするのが典型的な間違い。' },
        { q: 'Centred moving averages for quarters 5 and 9 are 410 and 450 respectively. Assuming the trend continues to increase at the same average rate, what is the trend value for quarter 12?', choices: ['474', '480', '490', '460'], answer: 1, explain: '間隔は 9 − 5 ＝ 4 つ。(450 − 410) ÷ 4 ＝ 10。期12 は期9の3期あと: 450 ＋ 10 × 3 ＝ 480。474 は ÷5（期5〜期9 の期の数）で1期 8 とした誤り。490 は4期分の増え 40 をそのまま足した誤り。460 は1期分しか延ばしていない。' },
        { q: '年の売上（$000）は 1年目 10、2年目 14、3年目 15、4年目 19。x ＝ 年の番号として回帰分析でトレンドの式を出す（n ＝ 4、Σx ＝ 10、Σy ＝ 58、Σxy ＝ 159、Σx² ＝ 30）。5年目のトレンドは？（$000）', type: 'number', answer: 21.5, unit: '', explain: 'b ＝ (4 × 159 − 10 × 58) ÷ (4 × 30 − 10²) ＝ (636 − 580) ÷ 20 ＝ 2.8。a ＝ 58 ÷ 4 − 2.8 × 10 ÷ 4 ＝ 14.5 − 7 ＝ 7.5。y ＝ 7.5 ＋ 2.8 × 5 ＝ 21.5。' },
        { q: 'Which of the following best describes the value b in a trend equation y = a + bx, where x is the time period number?', choices: ['The trend value in the first period of the data', 'The seasonal variation for each period', 'The total of the actual values divided by the number of periods', 'The average change in the trend from one period to the next'], answer: 3, explain: 'b は傾き＝1期あたりのトレンドの増え方。a は x ＝ 0 のときのトレンドで、データの最初の期（x ＝ 1）の値ではない。季節変動は式に入っていない。' }
      ]
    },
    {
      id: 'M088',
      no: 88,
      title: '季節変動①: 加法モデルで予測する',
      goal: '加法モデルで季節変動を求めて合計0にそろえ、トレンドに足して予測し、季節調整済みの数字も出せるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(d)'],
      slides: [
        {
          title: '12月の電気代は「いつもより3,000円多い」',
          paras: ['ある家の電気代は、毎年12月が月の平均より 3,000円ほど多い。暖房を使うから。', '来年の月の平均が 10,000円になりそうなら、来年12月は 10,000 ＋ 3,000 ＝ 13,000円と予想できる。季節の差を「金額」で足すのが加法モデル。']
        },
        {
          title: '加法モデル（additive model）',
          formula: '季節変動 S ＝ 実績 Y − トレンド T',
          paras: ['実績がトレンドより多ければプラス、少なければマイナス。同じ四半期の季節変動を何年分か平均して、その四半期の季節変動とする。'],
          after: '予測 ＝ 将来のトレンド ＋ その四半期の季節変動（ランダム変動は予測できないのでゼロとみなす）'
        },
        {
          title: '例題のデータ',
          table: { caption: '売上とトレンド（中心化移動平均、$000）', head: ['期', '実績', 'トレンド'], rows: [['1年目Q3', '215', '200'], ['1年目Q4', '204', '203'], ['2年目Q1', '187', '206'], ['2年目Q2', '215', '209'], ['2年目Q3', '229', '212'], ['2年目Q4', '218', '215'], ['3年目Q1', '195', '218'], ['3年目Q2', '229', '221']] },
          after: 'トレンドは1四半期に 3 ずつ上がっている。'
        },
        {
          title: '手順1: 季節変動を出して平均する',
          paras: ['実績 − トレンドを計算し、四半期ごとにまとめる。例: 1年目Q3 は 215 − 200 ＝ ＋15、2年目Q1 は 187 − 206 ＝ −19。'],
          table: { caption: '四半期ごとの季節変動', head: ['四半期', '実績 − トレンド', '平均'], rows: [['Q1', '−19、−23', '−21'], ['Q2', '＋6、＋8', '＋7'], ['Q3', '＋15、＋17', '＋16'], ['Q4', '＋1、＋3', '＋2']], total: ['合計', '', '＋4'] }
        },
        {
          title: '手順2: 合計が0になるようにそろえる',
          paras: ['1年を通すと季節の上下は打ち消し合うはずなので、4つの季節変動の合計は0でなければならない。いまは ＋4 多いので、4 ÷ 4 ＝ 1 を各四半期から引く。'],
          table: { caption: '調整後の季節変動', head: ['四半期', '平均', '調整後'], rows: [['Q1', '−21', '−22'], ['Q2', '＋7', '＋6'], ['Q3', '＋16', '＋15'], ['Q4', '＋2', '＋1']], total: ['合計', '＋4', '0'] }
        },
        {
          title: '例題: 予測する',
          example: {
            problem: 'トレンドは同じペース（1四半期 ＋3）で続く。トレンドの式は y ＝ 191 ＋ 3x（x ＝ 1 は1年目Q1）。3年目Q4 と 4年目Q1 の売上を予測せよ。',
            steps: ['3年目Q4 は x ＝ 12: トレンド ＝ 191 ＋ 3 × 12 ＝ 227', '予測 ＝ 227 ＋ 1 ＝ 228', '4年目Q1 は x ＝ 13: トレンド ＝ 191 ＋ 3 × 13 ＝ 230（Q1 なので Q1 の季節変動を使う）', '予測 ＝ 230 ＋ (−22) ＝ 208', '確かめ: 3年目Q2 は x ＝ 10 → 221（表のトレンドと一致）', '式の出し方（M087）: b ＝ 3、1年目Q3（x ＝ 3）が 200 なので a ＝ 200 − 3 × 3 ＝ 191'],
            answer: '3年目Q4 は $228,000、4年目Q1 は $208,000'
          }
        },
        {
          title: '季節調整済みの数字（seasonally adjusted）',
          paras: ['実績から季節変動を取り除いた数字を、季節調整済み（seasonally adjusted、deseasonalised）という。「季節のせいでない本当の水準」を見るのに使う。'],
          formula: '季節調整済み ＝ 実績 − 季節変動',
          after: '例: 3年目Q2 は 229 − 6 ＝ 223。トレンドは 221 なので、残りの ＋2 がランダム変動。3年目Q1 は 195 − (−22) ＝ 217（トレンド 218、ランダム変動 −1）。'
        },
        {
          title: 'なぜ？ 平均して、合計を0にする理由',
          paras: ['1回分の「実績 − トレンド」には、季節変動のほかにランダム変動も混ざっている。何年分か平均すると、ランダムなぶれが打ち消し合い、季節のクセだけが残る。', '季節変動の合計が0でないと、1年を通して売上を多め（または少なめ）に見積もることになる。それはトレンドの仕事。1年分を足すとトレンドだけが残る形にそろえる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '引き算を逆にする（トレンド − 実績）と、符号が全部逆になる。季節変動は「実績 − トレンド」。予測でマイナスの季節変動を足すことは、引くことと同じ（230 ＋ (−22) ＝ 208）。合計の調整を忘れない。月次データなら12か月分の合計を0にそろえる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['季節変動 ＝ 実績 − トレンド。同じ四半期どうしで平均する', '加法モデルの季節変動は合計0にそろえる（超えた分を均等に配る）', '予測 ＝ トレンド ＋ 季節変動。季節調整済み ＝ 実績 − 季節変動']
        },
        {
          title: '英単語',
          words: [
            ['additive model', 'アディティブ モデル', '加法モデル（季節変動を金額で足す）'],
            ['seasonal variation', 'シーズナル ヴァリエーション', '季節変動'],
            ['seasonally adjusted', 'シーズナリー アジャステッド', '季節調整済み'],
            ['deseasonalise', 'ディシーズナライズ', '季節変動を取り除く'],
            ['forecast', 'フォーキャスト', '予測（する）'],
            ['residual', 'レジデュアル', '残差（ランダム変動として残る部分）']
          ]
        }
      ],
      quiz: [
        { q: 'Using an additive model, the trend for sales in quarter 3 of next year is forecast to be $460,000 and the seasonal variation for quarter 3 is -$35,000. What are the forecast sales for that quarter, in $?', type: 'number', answer: 425000, unit: '$', explain: '加法モデルなので足す: 460,000 ＋ (−35,000) ＝ $425,000。マイナスの季節変動を足すのは引くのと同じ。' },
        { q: 'Average seasonal variations calculated using an additive model are: quarter 1 +12, quarter 2 -5, quarter 3 +9, quarter 4 -12. What adjustment should be made to each average?', choices: ['Add 1 to each', 'Subtract 4 from each', 'Subtract 1 from each', 'No adjustment is needed'], answer: 2, explain: '合計は 12 − 5 ＋ 9 − 12 ＝ ＋4。0にするため、4 ÷ 4 ＝ 1 を各四半期から引く。4 を全部から引くと合計 −12 になる。' },
        { q: '2年目Q3 の実績は 229、トレンドは 212。加法モデルの季節変動（この期の分）はいくら？', type: 'number', answer: 17, unit: '', explain: '季節変動 ＝ 実績 − トレンド ＝ 229 − 212 ＝ ＋17。トレンド − 実績で −17 とするのは引き算の向きの間違い。' },
        { q: '売上のトレンドは y ＝ 150 ＋ 5x（$000）。x ＝ 1 は 20X1年Q1。Q2 の季節変動（調整後）は −8。加法モデルで 20X4年Q2 の売上を予測せよ（$000）。', type: 'number', answer: 212, unit: '', explain: '20X4年Q1 は x ＝ 13、Q2 は x ＝ 14。トレンド ＝ 150 ＋ 5 × 14 ＝ 220。予測 ＝ 220 − 8 ＝ 212。' },
        { q: 'In an additive time series model, what should the adjusted seasonal variations for the four quarters of a year total?', choices: ['4', '1', '100', '0'], answer: 3, explain: '加法モデルでは1年で季節の上下が打ち消し合うので合計は0。合計4（400%）になるのは乗法モデルの季節指数。' },
        { q: 'Using an additive model, the seasonal variation for quarter 2 is +$18,000. Actual sales for quarter 2 were $250,000. What were the seasonally adjusted sales for quarter 2, in $?', type: 'number', answer: 232000, unit: '$', explain: '季節調整済み ＝ 実績 − 季節変動 ＝ 250,000 − 18,000 ＝ $232,000。250,000 ＋ 18,000 ＝ 268,000 とすると、季節の影響を取り除くどころか二重に入れてしまう。' }
      ]
    },
    {
      id: 'M089',
      no: 89,
      title: '季節変動②: 乗法モデルで予測する',
      goal: '乗法モデルで季節指数を求めて合計4にそろえ、トレンドに掛けて予測し、加法モデルとの使い分けを説明できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(d)'],
      slides: [
        {
          title: '深夜の時給は「25%増し」',
          paras: ['時給 1,000円のアルバイトは、深夜だと 25%増しの 1,250円。時給が 1,200円に上がれば、深夜は 1,500円になる。', '割増の額は 250円から 300円に大きくなった。元の水準に「割合」を掛けると、元が大きくなるほど差も大きくなる。これが乗法モデルの考え方。']
        },
        {
          title: '乗法モデル（multiplicative model）',
          formula: '季節指数 S ＝ 実績 Y ÷ トレンド T',
          paras: ['季節の影響をトレンドに対する「比」で表す。1.06（106%）ならトレンドより 6% 多い、0.81（81%）なら 19% 少ない。季節指数（seasonal index）と呼ぶ。'],
          after: '予測 ＝ 将来のトレンド × その四半期の季節指数'
        },
        {
          title: '加法と乗法の見た目のちがい',
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="加法モデルでは実績の上下の振れ幅が一定。乗法モデルではトレンドが上がるにつれて振れ幅が広がる" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">振れ幅が一定か、広がるか</text><text x="115" y="56" text-anchor="middle" font-weight="600" fill="var(--ink)">加法モデル</text><text x="335" y="56" text-anchor="middle" font-weight="600" fill="var(--ink)">乗法モデル</text><line x1="30" y1="170" x2="200" y2="90" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="250" y1="170" x2="420" y2="90" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4"/><polyline points="30,186 54.3,142.6 78.6,163.1 102.9,119.7 127.1,140.3 151.4,96.9 175.7,117.4 200,74" fill="none" stroke="var(--ink)" stroke-width="2"/><polyline points="250,175 274.3,149.6 298.6,160.1 322.9,118.7 347.1,145.3 371.4,87.9 395.7,130.4 420,57" fill="none" stroke="var(--accent)" stroke-width="2.5"/><text x="115" y="212" text-anchor="middle" fill="var(--ink)">上下の幅が同じ</text><text x="335" y="212" text-anchor="middle" fill="var(--ink)">上下の幅が広がる</text><text x="220" y="232" text-anchor="middle" fill="var(--quiet)">点線＝トレンド</text></svg>`,
          caption: '売上が伸びるにつれて季節の差も大きくなるなら、乗法モデルが合う。'
        },
        {
          title: '例題のデータ',
          table: { caption: '売上とトレンド（中心化移動平均、単位 000個）', head: ['期', '実績', 'トレンド'], rows: [['1年目Q3', '520', '400'], ['1年目Q4', '369', '450'], ['2年目Q1', '400', '500'], ['2年目Q2', '583', '550'], ['2年目Q3', '804', '600'], ['2年目Q4', '546', '650'], ['3年目Q1', '588', '700'], ['3年目Q2', '810', '750']] },
          after: 'トレンドは1四半期に 50 ずつ上がり、季節の差もどんどん大きくなっている。'
        },
        {
          title: '季節指数を出して合計4にそろえる',
          paras: ['実績 ÷ トレンドを四半期ごとに平均する。例: 1年目Q3 は 520 ÷ 400 ＝ 1.30。4つの指数の平均は1（合計は4）になるはずなので、合計 4.04 の超えた分 0.04 を 4 で割り、0.01 ずつ引く。'],
          table: { caption: '四半期ごとの季節指数', head: ['四半期', '実績 ÷ トレンド', '平均 → 調整後'], rows: [['Q1', '0.80、0.84', '0.82 → 0.81'], ['Q2', '1.06、1.08', '1.07 → 1.06'], ['Q3', '1.30、1.34', '1.32 → 1.31'], ['Q4', '0.82、0.84', '0.83 → 0.82']], total: ['合計', '', '4.04 → 4.00'] }
        },
        {
          title: '例題: 予測する',
          example: {
            problem: 'トレンドの式は y ＝ 250 ＋ 50x（x ＝ 1 は1年目Q1）。3年目Q3 と 4年目Q1 の売上を予測せよ。',
            steps: ['確かめ: 1年目Q3 は x ＝ 3 → 250 ＋ 150 ＝ 400（表と一致）', '3年目Q3 は x ＝ 11: トレンド ＝ 250 ＋ 50 × 11 ＝ 800', '予測 ＝ 800 × 1.31 ＝ 1,048', '4年目Q1 は x ＝ 13: トレンド ＝ 250 ＋ 50 × 13 ＝ 900', '予測 ＝ 900 × 0.81 ＝ 729'],
            answer: '3年目Q3 は 1,048,000個、4年目Q1 は 729,000個'
          },
          note: { kind: 'tip', text: '季節調整済み ＝ 実績 ÷ 季節指数。例: Q1 の実績 486、指数 0.81 なら 486 ÷ 0.81 ＝ 600。' }
        },
        {
          title: '加法か乗法か',
          table: { caption: '2つのモデルの比べ方', head: ['項目', '加法モデル', '乗法モデル'], rows: [['季節の表し方', '金額（＋15、−22）', '比（1.31、0.81）'], ['1年分の合計', '0', '4（月次なら 12）'], ['予測', 'トレンド ＋ 季節変動', 'トレンド × 季節指数'], ['季節調整済み', '実績 − 季節変動', '実績 ÷ 季節指数'], ['向いている場面', '振れ幅がほぼ一定', '振れ幅がトレンドとともに広がる']] }
        },
        {
          title: 'なぜ？ 伸びる会社には乗法が合う',
          paras: ['この例の Q3 は、1年目にトレンドより 120 多く、2年目には 204 多い。差の額は毎年大きくなるが、比はどちらも 1.3 前後で安定している。', '加法モデルで「Q3 はいつも ＋162」と足すと、売上が倍になった将来の Q3 の山を小さく見積もってしまう。売上が大きく伸びているときは、比で表す乗法モデルの方が実態に合う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「Q4 の季節変動は −15%」と言われたら、トレンドに 0.85 を掛ける。0.15 を掛けたり、15 を引いたりしない。季節指数は「115」「115%」のように百分率で出ることもある。どれも × 1.15 のこと。季節指数の合計は 4（四半期）で、0 ではない。調整は、超えた分（足りない分）を四半期の数で割って均等に引く（足す）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['季節指数 ＝ 実績 ÷ トレンド。合計が4になるようにそろえる', '予測 ＝ トレンド × 季節指数。−15% なら × 0.85', '振れ幅が一定なら加法、トレンドとともに広がるなら乗法']
        },
        {
          title: '英単語',
          words: [
            ['multiplicative model', 'マルチプリカティブ モデル', '乗法モデル（季節変動を比で掛ける）'],
            ['seasonal index', 'シーズナル インデックス', '季節指数（実績 ÷ トレンド）'],
            ['proportional', 'プロポーショナル', '比例した'],
            ['seasonal variation of -15%', '', 'トレンドより 15% 少ない（× 0.85）'],
            ['trend value', 'トレンド バリュー', 'トレンドの値']
          ]
        }
      ],
      quiz: [
        { q: 'Using a multiplicative model, the trend for sales volume in quarter 2 is forecast to be 5,000 units and the seasonal index for quarter 2 is 1.15. What is the forecast sales volume for quarter 2?', type: 'number', answer: 5750, unit: '', explain: '乗法モデルなので掛ける: 5,000 × 1.15 ＝ 5,750個。1.15 を足して 5,001.15 としないこと。' },
        { q: 'The trend equation for quarterly sales is y = 1,200 + 40x, where x is the quarter number. Quarter 10 is a fourth quarter, which has a seasonal variation of -15% under a multiplicative model. What are the forecast sales for quarter 10?', type: 'number', answer: 1360, unit: '', explain: 'トレンド ＝ 1,200 ＋ 40 × 10 ＝ 1,600。−15% は × 0.85: 1,600 × 0.85 ＝ 1,360。1,600 − 15 ＝ 1,585 や 1,600 × 0.15 ＝ 240 は誤り。' },
        { q: 'Average seasonal indices calculated using a multiplicative model are: quarter 1 0.88, quarter 2 1.12, quarter 3 1.27, quarter 4 0.77. Which of the following is correct?', choices: ['They should be increased by 0.01 each so that they total 4', 'They should be reduced by 0.01 each so that they total 4', 'They should be reduced by 0.04 each so that they total 4', 'No adjustment is needed'], answer: 1, explain: '合計は 0.88 ＋ 1.12 ＋ 1.27 ＋ 0.77 ＝ 4.04。超えた 0.04 を4で割り、0.01 ずつ引く。0.04 ずつ引くと合計 3.88 になる。' },
        { q: 'Q1 の実績は 486、Q1 の季節指数は 0.81（乗法モデル）。季節調整済みの売上はいくら？', type: 'number', answer: 600, unit: '', explain: '季節調整済み ＝ 実績 ÷ 季節指数 ＝ 486 ÷ 0.81 ＝ 600。486 × 0.81 ＝ 393.66 とすると、季節の影響を取り除くどころか、さらに掛けてしまう。' },
        { q: '売上が年々大きく伸び、夏の山と冬の谷の差も、売上に比例して毎年広がっている。どちらのモデルが合う？', choices: ['加法モデル（季節変動を金額で表す）', 'どちらでも同じ結果になる', '乗法モデル（季節変動を比で表す）', '移動平均だけで十分で、季節変動はいらない'], answer: 2, explain: '振れ幅がトレンドとともに広がるなら乗法モデル。加法モデルは振れ幅が一定のときに合う。比が安定しているのに金額で足すと、将来の山と谷を小さく見積もる。' },
        { q: 'The trend of quarterly sales is y = 500 + 20x, where y is sales in $000 and x is the quarter number. The first quarter of 20X1 is x = 1. Under a multiplicative model, the seasonal index for quarter 3 is 120. What are the forecast sales for quarter 3 of 20X3, in $000?', type: 'number', answer: 864, unit: '', explain: '20X3年Q3 は x ＝ 8 ＋ 3 ＝ 11。トレンド ＝ 500 ＋ 20 × 11 ＝ 720。指数 120 は 120% ＝ × 1.20: 720 × 1.2 ＝ 864。720 ＋ 120 ＝ 840 は加法と取り違えた誤り。' }
      ]
    },
    {
      id: 'M090',
      no: 90,
      title: '時系列分析の長所と短所',
      goal: '時系列分析の長所・短所と前提を説明し、予測がどこまで信頼できるかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A6(e)'],
      slides: [
        {
          title: '初詣の混み具合を予想する',
          paras: ['神社の人出を、過去数年の数字から「毎年少しずつ増え、元日がいちばん多い」と予想する。たいていはよく当たる。', 'でも近くに新しい駅ができたり、大雪が降ったりすると外れる。過去のパターンが続く前提で予想しているから。時系列分析の強みと弱みは、これと同じ。']
        },
        {
          title: '長所（advantages）',
          list: ['手元にある過去の数字だけで予測できる', '計算が比較的簡単で、理解しやすい', '季節変動を数字で示せるので、季節ごとの人員・在庫・資金の計画に使える', 'トレンドと季節変動を分けるので、本当の伸びが見える']
        },
        {
          title: '短所（disadvantages）',
          list: ['過去のトレンドと季節のパターンが将来も続くと仮定している', 'トレンドが直線とは限らない（成長は加速も減速もする）', '数字が動く原因（価格・広告・競合・景気）を説明しない', 'ランダム変動は予測できない。循環変動もデータが短いと見えない', '遠い将来の予測ほど信頼しにくい', '移動平均では最初と最後の期にトレンドが出ず、多くの過去データが必要']
        },
        {
          title: '先の予測ほど、ぶれが大きい',
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="過去のデータから延ばした予測は、先に行くほど外れうる幅が広がる" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">遠い先ほど、外れうる幅が広い</text><line x1="220" y1="44" x2="220" y2="186" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><polygon points="220,120 410,44 410,120" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><polyline points="30,150 60,135 90,155 120,128 150,140 180,118 220,120" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="220" y1="120" x2="410" y2="82" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 5"/><text x="120" y="204" text-anchor="middle" fill="var(--ink)">過去のデータ</text><text x="315" y="204" text-anchor="middle" fill="var(--ink)">予測</text><text x="220" y="228" text-anchor="middle" fill="var(--quiet)">先へ行くほど「パターンが続く」前提が崩れやすい</text></svg>`,
          caption: '点線が予測、色の部分が外れうる幅。来四半期の予測は、3年後の予測より信頼しやすい。'
        },
        {
          title: '例題: 予測を信頼できるか',
          example: {
            problem: 'たこ焼き屋は3年分のデータから、来年の四半期の売上を加法モデルで予測した。次のうち、予測が外れやすくなる状況はどれか。(1) 来年、近くに大手チェーンが開店する (2) 来年も過去と同じ営業日・同じ価格で営業する (3) 5年後の Q3 を予測する',
            steps: ['(1) 競合の開店は、過去のデータに入っていない新しい原因 → 外れやすい', '(2) 条件が過去と同じなら、パターンが続く前提が成り立ちやすい → 信頼しやすい', '(3) 遠い将来ほど、トレンドの変化や新しい出来事が起きやすい → 外れやすい'],
            answer: '(1) と (3)。時系列分析は原因の変化を自動では反映しない'
          }
        },
        {
          title: 'ほかの予測方法とのちがい',
          table: { caption: '予測の方法の比べ方', head: ['方法', 'x に使うもの', '特徴'], rows: [['高低点法', '活動量（2点だけ）', '簡単。外れ値に弱い'], ['回帰分析', '活動量や時間（全部の点）', '最もよく当てはまる直線'], ['時系列分析', '時間', 'トレンドと季節変動を分ける']] },
          after: '時系列分析だけが、季節のくり返しを予測に入れられる。ただし「なぜ」は説明しないので、経営者の判断（新製品、値上げ、景気の見通し）で補う。'
        },
        {
          title: 'なぜ？ それでも予算に使われる理由',
          paras: ['予算を作るには、まず来年の売上の見込みが要る。過去の数字は、どの会社にも必ずある一番手軽な材料。', '時系列分析は、その過去の数字から「成長」と「季節」を取り出して、根拠のある出発点を作る。そこに市場調査や経営者の見込みを加えて、最終的な予算にする。完璧ではないが、勘だけで決めるよりずっとよい。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「時系列分析は売上が変わる原因を明らかにする」は誤り。分かるのはパターン（いつ、どれくらい）だけで、原因（なぜ）は分からない。また、ランダム変動まで予測できるわけではない。予測の式ではランダム変動を、加法ならゼロ、乗法なら1（影響なし）とみなしている。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['長所: 過去の数字だけで、簡単に、季節を入れた予測ができる', '短所: 過去のパターンが続く前提。原因を説明しない。ランダム変動は予測できない', '遠い将来の予測ほど信頼しにくい']
        },
        {
          title: '英単語',
          words: [
            ['assumption', 'アサンプション', '前提・仮定'],
            ['historical data', 'ヒストリカル データ', '過去のデータ'],
            ['reliable', 'リライアブル', '信頼できる'],
            ['underlying pattern', 'アンダーライイング パターン', '数字の裏にある本来のパターン'],
            ['unforeseen', 'アンフォーシーン', '予期しない'],
            ['forecasting', 'フォーキャスティング', '予測すること']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a disadvantage of using time series analysis to forecast sales?', choices: ['It cannot identify seasonal patterns in the data', 'It requires data for only one period', 'It explains the causes of changes in sales', 'It assumes that past patterns of trend and seasonal variation will continue into the future'], answer: 3, explain: '時系列分析は過去のパターンが続くと仮定しているので、条件が変わると外れる。季節のパターンを見つけるのはむしろ得意。原因は説明しない。' },
        { q: 'Which of the following statements about time series analysis are correct? (1) Forecasts further into the future are generally less reliable. (2) Time series analysis explains why sales have changed.', choices: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], answer: 0, explain: '(1) は正しい。遠い将来ほど前提が崩れやすい。(2) は誤り。分かるのはパターンだけで、原因は分からない。' },
        { q: '時系列分析の長所として正しいものはどれ？', choices: ['景気の急な悪化も自動で予測に入る', 'ランダム変動を正確に予測できる', '季節変動を数字で示せるので、季節ごとの人員や在庫の計画に使える', '過去のデータがなくても予測できる'], answer: 2, explain: '季節のパターンを数字で表せるのが強み。景気の急変やランダム変動は過去のパターンに入っていないので予測できない。過去のデータは必ず必要。' },
        { q: '4四半期の中心化移動平均でトレンドを出すと、データの最初の2期と最後の2期にはトレンドがない。このことから言える短所は？', choices: ['季節変動が計算できなくなる', 'いちばん新しい期のトレンドが直接出ず、多くの過去データが必要になる', 'トレンドが必ず直線になる', 'ランダム変動が大きくなる'], answer: 1, explain: '移動平均は前後の期を使うので、端の期にはトレンドが出ない。予測にいちばん大事な最新の期のトレンドを延ばして推定する必要があり、データも多く要る。' },
        { q: 'A company used time series analysis to forecast next year\'s sales. A major competitor will open a new store nearby next year. What effect does this have on the forecast?', choices: ['The forecast will automatically include the effect of the competitor', 'The forecast will be more reliable because there is more competition', 'The forecast may be unreliable because the analysis is based only on past patterns', 'The seasonal variations will become zero'], answer: 2, explain: '競合の開店は過去のデータにない新しい要因なので、時系列分析の予測には入らない。経営者の判断で補う必要がある。' }
      ]
    }
  ],
  cards: [
    { id: 'M085-1', lesson: 'M085', q: '時系列の4つの要素は？', a: 'トレンド・季節変動・循環変動・ランダム変動' },
    { id: 'M085-2', lesson: 'M085', q: '季節変動と循環変動のちがいは？', a: '季節は1年以内のくり返し（曜日も含む）。循環は景気による数年単位の波' },
    { id: 'M085-3', lesson: 'M085', q: 'ストライキで2週間生産が落ちた。どの要素？', a: 'ランダム変動（random variation）' },
    { id: 'M085-4', lesson: 'M085', q: '加法モデルと乗法モデルの式は？', a: '加法 Y＝T＋S＋R、乗法 Y＝T×S×R' },
    { id: 'M085-5', lesson: 'M085', q: '時系列分析の3つの手順は？', a: 'トレンドを出す→季節変動を出す→トレンドを延ばして季節変動を足す（掛ける）' },
    { id: 'M086-1', lesson: 'M086', q: '移動平均の期間はどう決める？', a: '季節のくり返しの長さに合わせる（四半期なら4、曜日なら7）' },
    { id: 'M086-2', lesson: 'M086', q: 'なぜ偶数期間の移動平均は中心化する？', a: '平均が2つの期の間に来るので、隣り合う2つを平均して期に合わせる' },
    { id: 'M086-3', lesson: 'M086', q: '期1〜4 の平均 90、期2〜5 の平均 92。期3 のトレンドは？', a: '(90＋92)÷2＝91' },
    { id: 'M086-4', lesson: 'M086', q: 'なぜ4四半期の移動平均で季節変動が消える？', a: 'Q1〜Q4 が1回ずつ入り、季節の上下が打ち消し合うから' },
    { id: 'M086-5', lesson: 'M086', q: '12四半期のデータから出せる中心化移動平均の数は？', a: '8個（移動平均9個を隣り合う2つずつ平均）' },
    { id: 'M087-1', lesson: 'M087', q: '1期あたりのトレンドの増え方の出し方は？', a: '(最後のトレンド−最初のトレンド)÷間隔の数（値の数ではない）' },
    { id: 'M087-2', lesson: 'M087', q: 'トレンドの式 y＝a＋bx の x と b は？', a: 'x＝期間の通し番号、b＝1期あたりのトレンドの増え方' },
    { id: 'M087-3', lesson: 'M087', q: 'y＝240＋6x、x＝1 は 20X5年Q1。20X7年Q3 の x は？', a: 'x＝11（トレンドは 306）' },
    { id: 'M087-4', lesson: 'M087', q: '期3 のトレンド 112、期6 が 124。期10 のトレンドは？', a: '増え方 12÷3＝4 → 124＋4×4＝140' },
    { id: 'M088-1', lesson: 'M088', q: '加法モデルの季節変動の出し方は？', a: '実績−トレンド。同じ四半期どうしで平均する' },
    { id: 'M088-2', lesson: 'M088', q: '加法モデルの季節変動の合計は？', a: '0。超えた分を四半期の数で割って均等に引く' },
    { id: 'M088-3', lesson: 'M088', q: '加法モデルの予測と季節調整済みの式は？', a: '予測＝トレンド＋季節変動、季節調整済み＝実績−季節変動' },
    { id: 'M088-4', lesson: 'M088', q: 'トレンド $460,000、季節変動 −$35,000。加法の予測は？', a: '$425,000' },
    { id: 'M088-5', lesson: 'M088', q: 'なぜ何年分かの季節変動を平均する？', a: '1回分にはランダム変動も混ざっていて、平均すると打ち消し合うから' },
    { id: 'M089-1', lesson: 'M089', q: '乗法モデルの季節指数の出し方は？', a: '実績÷トレンド。同じ四半期どうしで平均する' },
    { id: 'M089-2', lesson: 'M089', q: '四半期の季節指数の合計は？', a: '4（月次なら12）。超えた分を均等に引いてそろえる' },
    { id: 'M089-3', lesson: 'M089', q: 'トレンド 1,600、季節変動 −15%（乗法）。予測は？', a: '1,600×0.85＝1,360' },
    { id: 'M089-4', lesson: 'M089', q: '乗法モデルの季節調整済みの式は？', a: '実績÷季節指数' },
    { id: 'M089-5', lesson: 'M089', q: '加法と乗法の使い分けは？', a: '振れ幅が一定なら加法、トレンドとともに広がるなら乗法' },
    { id: 'M089-6', lesson: 'M089', q: '乗法モデルで季節指数「120」とあったら？', a: '120%＝トレンド×1.20（120 を足さない）' },
    { id: 'M090-1', lesson: 'M090', q: '時系列分析の長所は？', a: '過去の数字だけで簡単に、季節を入れた予測ができる' },
    { id: 'M090-2', lesson: 'M090', q: '時系列分析の最大の前提（短所）は？', a: '過去のトレンドと季節のパターンが将来も続くと仮定している' },
    { id: 'M090-3', lesson: 'M090', q: '時系列分析で分からないことは？', a: '数字が動く原因（なぜ）。ランダム変動も予測できない' },
    { id: 'M090-4', lesson: 'M090', q: '近い予測と遠い予測、信頼しやすいのは？', a: '近い予測。遠いほど前提が崩れやすい' }
  ]
});
