(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 117,
  part: 6,
  partTitle: 'データ分析と予測',
  lessons: [
    {
      id: 'M065',
      no: 65,
      title: 'データの種類: カテゴリと数値',
      goal: 'データをカテゴリ（名義・順序）と数値（離散・連続）に分け、種類ごとに意味のある集計を説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(a)'],
      slides: [
        {
          title: '健康診断の結果票',
          paras: ['健康診断の結果票には、いろいろな記録が並ぶ。血液型（A・B・O・AB）、総合判定（A〜E の5段階）、虫歯の本数、体重（kg）。', 'どれも「データ」だが、性質が違う。血液型は足したり平均したりできない。体重は平均できる。この性質の違いが、データの種類になる。']
        },
        {
          title: '2つの大きな種類',
          list: ['カテゴリデータ（categorical data）: 数ではなく、区分（グループ）で表すデータ。質的データ（qualitative data）とも言う。例: 支払い方法、地域、満足度', '数値データ（numerical data）: 数で表し、数として計算できるデータ。量的データ（quantitative data）とも言う。例: 販売個数、作業時間'],
          after: 'それぞれが、さらに2つに分かれる。全部で4種類になる。'
        },
        {
          title: '4種類の全体図',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="データはカテゴリデータと数値データに分かれる。カテゴリデータは名義データと順序データ、数値データは離散データと連続データに分かれる" font-size="14"><rect x="140" y="14" width="160" height="42" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="41" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">データ（data）</text><path d="M220 56 V72 H115 V90 M220 72 H325 V90" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="90" width="190" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="113" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">カテゴリデータ</text><text x="115" y="133" text-anchor="middle" font-size="12.5" fill="var(--quiet)">categorical (qualitative)</text><rect x="230" y="90" width="190" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="113" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">数値データ</text><text x="325" y="133" text-anchor="middle" font-size="12.5" fill="var(--quiet)">numerical (quantitative)</text><path d="M115 142 V158 H66 V176 M115 158 H164 V176 M325 142 V158 H276 V176 M325 158 H374 V176" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="176" width="93" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="66" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">名義データ</text><text x="66" y="220" text-anchor="middle" font-size="12.5" fill="var(--quiet)">nominal</text><text x="66" y="242" text-anchor="middle" font-size="12.5" fill="var(--ink)">色・地域</text><rect x="117" y="176" width="93" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="164" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">順序データ</text><text x="164" y="220" text-anchor="middle" font-size="12.5" fill="var(--quiet)">ordinal</text><text x="164" y="242" text-anchor="middle" font-size="12.5" fill="var(--ink)">満足度・等級</text><rect x="230" y="176" width="93" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="276" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">離散データ</text><text x="276" y="220" text-anchor="middle" font-size="12.5" fill="var(--quiet)">discrete</text><text x="276" y="242" text-anchor="middle" font-size="12.5" fill="var(--ink)">個数・人数</text><rect x="327" y="176" width="93" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="374" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">連続データ</text><text x="374" y="220" text-anchor="middle" font-size="12.5" fill="var(--quiet)">continuous</text><text x="374" y="242" text-anchor="middle" font-size="12.5" fill="var(--ink)">時間・重さ</text></svg>`,
          caption: '「カテゴリか数値か」を決めてから、「その中のどちらか」を決める。2段階で考える。'
        },
        {
          title: 'カテゴリデータ: 名義と順序',
          list: ['名義データ（nominal data）: 区分に順番がない。例: 支払い方法（現金・カード・電子マネー）、地域（北・南・東）、製品の色', '順序データ（ordinal data）: 区分に自然な順番がある。ただし、区分の間の幅が等しいとは限らない。例: 満足度（不満・普通・満足・大満足）、サイズ S・M・L、順位'],
          after: '「普通」と「満足」の差が、「満足」と「大満足」の差と同じとは言えない。だから順序データは並べられるが、引き算や平均には向かない。'
        },
        {
          title: '数値データ: 離散と連続',
          list: ['離散データ（discrete data）: 数えて得る。とびとびの値（ふつうは整数）しかとらない。例: 販売個数、従業員数、1日の苦情の件数、不良品の数', '連続データ（continuous data）: 測って得る。範囲の中のどんな値もとりうる。例: 作業時間、重さ、長さ、温度'],
          formula: '数えるなら離散、測るなら連続'
        },
        {
          title: 'たこ焼き屋のアンケート',
          paras: ['たこ焼き屋が、お客さんにアンケートをとった。1人分の回答から、4種類が全部出てくる。'],
          table: { caption: '1人分の回答と種類', head: ['項目', '回答の例', '種類'], rows: [['支払い方法', '電子マネー', 'カテゴリ・名義'], ['満足度（5段階）', '4（満足）', 'カテゴリ・順序'], ['買ったパック数', '2パック', '数値・離散'], ['待ち時間', '6.5分', '数値・連続']] }
        },
        {
          title: 'なぜ？ 種類で使える計算が決まる',
          paras: ['データの種類を先に見分けるのは、種類によって意味のある計算とグラフが違うから。'],
          table: { caption: '意味のある集計の目安', head: ['種類', '意味のある集計'], rows: [['名義', '件数・割合・最頻値（mode）'], ['順序', '上に加えて中央値（median）'], ['離散・連続', '上に加えて平均（mean）・標準偏差']] },
          after: '連続データは「10分きざみ」のような階級にまとめて、度数分布表にすることが多い。平均・中央値・最頻値は M070、度数分布表は M071 で計算する。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '数字で書いてあっても、数値データとは限らない。社員番号や地域コード（1＝北、2＝南）は名義データ。満足度を 1〜5 の点数で記録しても順序データのまま。社員番号の平均には意味がない。また「整数だから離散」ではない。作業時間を分単位の整数で記録しても、測った量なので連続データ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['カテゴリデータ: 名義（順番なし）と順序（順番あり、間の幅は等しいとは限らない）', '数値データ: 離散（数える、とびとびの値）と連続（測る、どんな値もとりうる）', '数字で書かれたコードや点数も、性質で分ける。種類によって意味のある集計が決まる']
        },
        {
          title: '英単語',
          words: [
            ['categorical data', 'カテゴリカル データ', 'カテゴリデータ（区分で表すデータ）'],
            ['qualitative data', 'クオリタティブ データ', '質的データ（カテゴリデータと同じ）'],
            ['nominal data', 'ノミナル データ', '名義データ（順番のない区分）'],
            ['ordinal data', 'オーディナル データ', '順序データ（順番のある区分）'],
            ['numerical data', 'ニューメリカル データ', '数値データ'],
            ['quantitative data', 'クオンティタティブ データ', '量的データ（数値データと同じ）'],
            ['discrete data', 'ディスクリート データ', '離散データ（数えて得る）'],
            ['continuous data', 'コンティニュアス データ', '連続データ（測って得る）']
          ]
        }
      ],
      quiz: [
        { q: 'Customers are asked to rate a service as poor, fair, good or excellent. What type of data does this produce?', choices: ['Categorical – nominal', 'Numerical – discrete', 'Categorical – ordinal', 'Numerical – continuous'], answer: 2, explain: '区分に自然な順番（poor < fair < good < excellent）があるので順序データ。順番を見落とすと名義と答えてしまう。点数に置き換えても区分の間の幅が等しいとは限らないので、数値データではない。' },
        { q: 'The time taken by each employee to complete a task is an example of which type of data?', choices: ['Numerical – discrete', 'Numerical – continuous', 'Categorical – ordinal', 'Categorical – nominal'], answer: 1, explain: '時間は測って得る量で、範囲の中のどんな値もとりうるので連続データ。分単位の整数で記録しても性質は変わらない。数えて得る件数や個数なら離散データ。' },
        { q: '工場で、ロット（製造のまとまり）ごとに不良品の数を記録した。このデータの種類は？', choices: ['数値・連続', 'カテゴリ・順序', 'カテゴリ・名義', '数値・離散'], answer: 3, explain: '不良品の数は数えて得る。0個、1個、2個…とびとびの値しかとらないので離散データ。2.5個にはならない。' },
        { q: '社員番号（1001、1002、…）のデータについて、正しいのは？', choices: ['離散データ。整数なので平均を計算できる', '名義データ。番号は区別のためのラベルなので、平均には意味がない', '順序データ。番号の大きい人ほど評価が高い', '連続データ。いくらでも大きな番号をつけられる'], answer: 1, explain: '社員番号は人を区別するためのラベルで、数としての意味がない。だから名義データ。整数に見えても、数えたり測ったりした量ではないので数値データではない。' },
        { q: 'Which of the following is an example of nominal data?', choices: ['The number of units sold each day', 'The weight of each bag of flour', 'The region in which each customer lives', 'The position of each salesperson in a sales league table'], answer: 2, explain: '地域は順番のない区分なので名義データ。販売個数は離散、重さは連続、成績表の順位は順番のある区分なので順序データ。' },
        { q: 'Which of the following are examples of discrete data?\n(1) The number of complaints received each day\n(2) The time taken to answer each telephone call\n(3) The number of employees in each department\n(4) The temperature of a storage room', choices: ['(2) and (4) only', '(1), (2) and (3) only', '(3) and (4) only', '(1) and (3) only'], answer: 3, explain: '苦情の件数(1)と従業員数(3)は数えて得るので離散データ。通話にかかった時間(2)と温度(4)は測って得る量なので連続データ。「整数で記録されることが多いか」ではなく、数えるか測るかで分ける。' }
      ]
    },
    {
      id: 'M066',
      no: 66,
      title: '記述的分析と推測的分析',
      goal: '記述的分析と推測的分析の違いを説明し、母集団と標本の関係から、どちらの分析かを見分けられるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A3(b)'],
      slides: [
        {
          title: '味噌汁の味見',
          paras: ['味噌汁の味見では、鍋を全部飲まない。スプーン1杯をすすって、鍋全体の味が「ちょうどいい」と判断する。一部から全体を推し量っている。', '一方、「今週の夕飯は7日中4日が魚だった」とまとめるのは、手元の記録を要約しているだけ。前者が推測的分析、後者が記述的分析の考え方。']
        },
        {
          title: '2つの分析の定義',
          list: ['記述的分析（descriptive analysis）: 集めたデータを、表・グラフ・平均・ばらつきなどで要約し、「データが何を示しているか」を説明する。データの外については結論を出さない', '推測的分析（inferential analysis）: 一部のデータ（標本）を使って、もっと大きな全体（母集団）について推定や予測をし、結論を出す。確率を使い、結論には不確かさが残る'],
          after: '統計学では、記述統計・推測統計とも呼ぶ。'
        },
        {
          title: '母集団と標本',
          list: ['母集団（population）: 知りたい対象の全部。例: 全顧客 2,000人、今月作った電球 5,000個', '標本（sample）: 母集団から選んで、実際に調べた一部。例: 顧客 100人、電球 50個'],
          after: '全部を調べないのは、時間とコストがかかりすぎる、全員には連絡がつかない、調べると壊れる（電球を寿命まで点けると売れない）などの理由から。'
        },
        {
          title: '一部から全体へ',
          svg: `<svg viewBox="0 0 440 228" role="img" aria-label="母集団の顧客2,000人の中から標本100人を選ぶ。記述的分析は手元のデータを要約・説明し、推測的分析は標本から母集団を推し量る" font-size="14"><circle cx="116" cy="122" r="96" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="58" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">母集団</text><text x="116" y="78" text-anchor="middle" font-size="12.5" fill="var(--quiet)">population</text><text x="116" y="100" text-anchor="middle" fill="var(--ink)">顧客 2,000人</text><circle cx="116" cy="162" r="44" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="154" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">標本</text><text x="116" y="172" text-anchor="middle" font-size="12.5" fill="var(--quiet)">sample</text><text x="116" y="192" text-anchor="middle" fill="var(--ink)">100人</text><rect x="240" y="20" width="180" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="46" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">記述的分析</text><text x="330" y="68" text-anchor="middle" fill="var(--ink)">手元のデータを</text><text x="330" y="88" text-anchor="middle" fill="var(--ink)">要約・説明する</text><rect x="240" y="128" width="180" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="154" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">推測的分析</text><text x="330" y="176" text-anchor="middle" fill="var(--ink)">標本から母集団を</text><text x="330" y="196" text-anchor="middle" fill="var(--ink)">推し量る</text><path d="M194 60 H232" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M232 54 L240 60 L232 66 Z" fill="var(--ink)"/><path d="M162 168 H232" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M232 162 L240 168 L232 174 Z" fill="var(--ink)"/></svg>`,
          caption: '標本の100人を集計するところまでは記述的分析。そこから2,000人全体について結論を出すと、推測的分析になる。'
        },
        {
          title: '2つを並べる',
          table: { caption: '記述的分析と推測的分析', head: ['比べる点', '記述的', '推測的'], rows: [['答える問い', '何が起きたか', '全体ではどうか'], ['使うデータ', '持っているデータ', '標本'], ['主な道具', '表・グラフ・平均・ばらつき', '確率・推定・予測'], ['結論の範囲', 'データの中だけ', '母集団まで広げる'], ['結論の確かさ', '集計したとおり', '誤差が残る']] }
        },
        {
          title: '例題: どこからが推測？',
          example: {
            problem: 'たこ焼き屋の顧客名簿には 2,000人がいる。無作為に選んだ 100人に聞くと、30人が「新しいソース味を買いたい」と答えた。どこまでが記述的分析で、どこからが推測的分析か。全体で買いたい人は何人と見込める？',
            steps: ['記述的分析: 標本 100人のうち 30人 ÷ 100人 ＝ 30% が「買いたい」', '推測的分析: 標本は全体の縮図と考え、全体でも約 30% と推定する', '見込み: 2,000人 × 30% ＝ 約 600人', '注意: 別の 100人を選べば 28% や 33% になりうる。推定には誤差の幅がある'],
            answer: '標本の集計（30%）は記述的分析。全体で約 600人と見込むのが推測的分析'
          }
        },
        {
          title: 'なぜ？ 推測には条件がある',
          paras: ['標本から全体を推し量れるのは、標本が全体の縮図（代表的、representative）になっているときだけ。駅前店の常連だけに聞いたら、全顧客の好みとはずれる。', 'それでも誤差は残る。だから推測的分析では、確率を使って「どのくらい確かか」を考える。この部で学ぶ確率と正規分布（M074〜M077）は、そのための道具になる。']
        },
        {
          title: '管理会計での例',
          list: ['記述的: 昨年12か月の材料使用量の平均とばらつきを出す', '記述的: 今月の地域別売上を、表とグラフにまとめる', '推測的: 5,000個のうち 50個を検査し、ロット全体の不良率を推定する', '推測的: 従業員 100人への調査から、全社員 5,000人の満足度を判断する']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'グラフや平均を使うかどうかでは決まらない。「集めたデータの外について結論を出すか」で決める。データが大量でも、全部を集計して説明するだけなら記述的分析。標本の平均を出すこと自体は記述的分析で、それを全体の値とみなした時点で推測的分析になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['記述的分析: 持っているデータを要約・説明する（結論はデータの中だけ）', '推測的分析: 標本から母集団について推定・予測する（誤差が残る）', '推測には、代表的な標本と、確からしさを測る確率が必要']
        },
        {
          title: '英単語',
          words: [
            ['descriptive analysis', 'ディスクリプティブ アナリシス', '記述的分析（データを要約・説明する）'],
            ['inferential analysis', 'インファレンシャル アナリシス', '推測的分析（標本から母集団を推し量る）'],
            ['population', 'ポピュレーション', '母集団（知りたい対象の全部）'],
            ['sample', 'サンプル', '標本（実際に調べた一部）'],
            ['representative', 'リプリゼンタティブ', '代表的な（全体の縮図になっている）'],
            ['estimate', 'エスティメイト', '推定する・推定値'],
            ['inference', 'インファレンス', '推論（一部から全体について結論を出すこと）']
          ]
        }
      ],
      quiz: [
        { q: 'A company surveys 200 of its 10,000 customers and uses the results to draw conclusions about the satisfaction of all its customers. Which type of analysis is this?', choices: ['Descriptive analysis', 'Inferential analysis', 'Big data analysis', 'Variance analysis'], answer: 1, explain: '標本 200人から母集団 10,000人について結論を出しているので推測的分析。200人の回答を集計するだけなら記述的分析だが、全顧客に広げた時点で推測になる。' },
        { q: 'Which of the following is an example of descriptive analysis?', choices: ['Testing 40 components from a batch of 4,000 to estimate the defect rate of the whole batch', 'Using the views of a sample of employees to judge the views of the whole workforce', 'Calculating the average monthly sales for last year from the sales records', 'Using a customer survey sample to estimate demand from all customers'], answer: 2, explain: '昨年の売上記録を集計して平均を出すのは、持っているデータの要約なので記述的分析。ほかの3つは、標本から全体（ロット・全社員・全顧客）について結論を出す推測的分析。' },
        { q: '顧客 3,000人から無作為に選んだ 120人のうち、18人が新商品を「買う」と答えた。この結果から推測すると、全顧客のうち買う人は何人と見込める？', type: 'number', answer: 450, unit: '人', explain: '標本の割合: 18 ÷ 120 ＝ 15%（ここまでは記述的分析）。全体に広げる: 3,000人 × 15% ＝ 450人（推測的分析）。18人をそのまま答えるのは、標本の人数を全体の答えにしている。' },
        { q: '推測的分析の結論について、正しいのは？', choices: ['標本の選び方によって結果が変わりうるので、誤差が残る', '計算どおりなので、母集団の値と必ず一致する', '標本が大きければ、偏った選び方でも正確になる', '母集団を全部調べたときにだけ使う方法である'], answer: 0, explain: '標本は全体の一部なので、選ぶ人が変われば結果も少し変わる。だから誤差が残り、確率で確からしさを考える。偏った選び方（常連だけ等）は、標本を大きくしても偏ったまま。全部を調べたなら推測は要らない。' },
        { q: '工場で今月作った 800台を全部検査し、不良率を 2% と集計した。この分析は？', choices: ['推測的分析（不良率という割合を出しているから）', '推測的分析（データが多いから）', 'どちらにも当たらない', '記述的分析（全部のデータを要約しているだけ）'], answer: 3, explain: '今月作った 800台が知りたい対象の全部（母集団）で、それを全部調べて要約している。データの外について結論を出していないので記述的分析。割合を出すことやデータの量では決まらない。' }
      ]
    },
    {
      id: 'M067',
      no: 67,
      title: '管理情報の伝え方: 目的に合った報告の形式',
      goal: '目的・相手・組織のガイドラインに合わせて、報告書・メモ・ダッシュボードなどの形式を選べるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A2(a)'],
      slides: [
        {
          title: '同じ連絡でも、伝え方を変える',
          paras: ['家族に「夕飯いる？」と聞くなら、メッセージアプリで十分。賃貸の解約は、大家さんに書面で通知する。引越し先を家族で決めるなら、資料を見せながら話し合う。', '内容・相手・正式さによって、ふさわしい伝え方が違う。会社の管理情報も同じで、目的に合った形式（format）を選ぶ。']
        },
        {
          title: '管理情報の主な形式',
          list: ['報告書（report）: 分析・結論・提案をまとめた正式な文書。重い判断に使う', 'メモ（memo）: 社内向けの短い連絡', 'メール（email）: すぐ届く連絡。社内にも社外にも使う', '手紙（letter）: 社外への正式な連絡', 'プレゼンテーション（presentation）: 口頭とスライドで説明し、その場で質疑ができる', 'ダッシュボード（dashboard）: 主要な指標（KPI）を1画面の数字とグラフで見せる。最新の状態をひと目で確認できる']
        },
        {
          title: '形式を選ぶ物差し',
          list: ['目的（purpose）: 知らせるだけか、説明するか、提案して判断を求めるか', '相手（audience）: 誰が読むか。経営トップには要約、現場の責任者には詳しい明細。専門知識はあるか', '急ぎ具合と頻度: すぐ伝えるか。毎月決まって出す定例（routine）か、その時だけ（ad hoc）か', '詳しさ・正式さ・機密: 数字の量、記録に残す必要、社外に出してよい内容か'],
          after: 'M005 の「よい情報の条件」（利用者向け・適時・使いやすい）を、形式の面で満たすための判断になる。'
        },
        {
          title: '組織のガイドラインに従う',
          paras: ['多くの会社には、報告についての決まり（organisational guidelines）がある。'],
          list: ['書式・テンプレート（house style）: 見出しの順番、ロゴ、フォント、ページ番号', '数字の表し方: 単位（$000 など）、丸め方、グラフの色をそろえる', '報告の期限と頻度: 月末から何営業日以内に出すか', '承認・配布先・機密: 誰が確認し、誰に送ってよいか。個人情報の扱い'],
          after: '決まりに従うと、毎月の報告を同じ形で比べられ、読み手が迷わない。会社としての信頼性も保てる。'
        },
        {
          title: 'たこ焼きチェーンでの使い分け',
          table: { caption: '場面と形式', head: ['場面', 'ふさわしい形式'], rows: [['社長が毎朝、全店の売上・客数・廃棄率をひと目で見たい', 'ダッシュボード'], ['新しい店を出すかを、取締役会で決める', '報告書（要旨・提案つき）とプレゼンテーション'], ['来週から仕入先が変わることを、店長に知らせる', 'メモ・メール'], ['銀行に、融資の条件変更を正式に申し入れる', '手紙（正式な文書）'], ['毎月、各店の予算と実績を比べる', '定例の表（テンプレートどおり）']] }
        },
        {
          title: '正式な報告書の組み立て',
          numbered: ['表題・宛先・作成者・日付', '要旨（executive summary）: 結論と提案を最初に短く示す。忙しい読み手はここだけ読む', 'はじめに（introduction / terms of reference）: 目的と範囲', '本文（main body / findings）: 分析と発見。見出しで区切り、表やグラフを使う', '結論（conclusions）と提案（recommendations）', '付録（appendices）: 細かい計算やデータ'],
          after: '細かい数字を全部本文に入れず、付録に回すと読みやすい。'
        },
        {
          title: '例外だけを報告する',
          paras: ['毎月すべての数字を並べると、大事な点が埋もれる（情報過多）。そこで、予算や目標から許容範囲を超えてずれた項目だけを報告する方法がある。これを例外報告（exception reporting）という。', '例: 材料費が予算から ±5% 以内なら報告しない。12% 超過した店だけを、店長と本部に知らせる。管理者は、手を打つべき所に時間を使える（例外管理、management by exception）。']
        },
        {
          title: 'なぜ？ 形式も情報の一部',
          paras: ['情報は、使われて判断がよくなったときにだけ価値が出る（M005）。正しい数字でも、忙しい社長に200ページの明細を渡せば読まれない。急ぎの連絡を正式な報告書にすると、間に合わない。', '形式を選ぶのは、同じ情報を「相手が使える形」にする最後の加工。データを情報に変える仕上げ（M004）にあたる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '詳しいほどよい報告、ではない。読み手と目的に合わせて量を絞る。また、自分の好みの書式で作らない。組織のテンプレートや、単位・丸め方の決まりがあれば従う。社外（銀行・顧客）には正式な手紙や報告書を使い、社内向けの機密情報を入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['形式は、目的・相手・急ぎ具合と頻度・詳しさと正式さで選ぶ（ひと目で見る → ダッシュボード、重い判断 → 報告書）', '正式な報告書: 要旨 → はじめに → 本文 → 結論・提案 → 付録', '組織のガイドライン（テンプレート・単位・期限・配布先）に従う']
        },
        {
          title: '英単語',
          words: [
            ['format', 'フォーマット', '形式（報告書・メモ・ダッシュボードなど）'],
            ['report', 'リポート', '報告書'],
            ['executive summary', 'エグゼクティブ サマリー', '要旨（結論と提案を最初に短く）'],
            ['recommendations', 'レコメンデーションズ', '提案'],
            ['appendix (appendices)', 'アペンディックス', '付録'],
            ['dashboard', 'ダッシュボード', '主要指標を1画面で見せる形式'],
            ['exception reporting', '', '例外報告（許容範囲を超えた項目だけを報告）'],
            ['organisational guidelines', '', '組織のガイドライン（報告の決まり）'],
            ['ad hoc report', 'アドホック リポート', 'その時だけ作る報告（定例は routine report）']
          ]
        }
      ],
      quiz: [
        { q: 'The managing director wants to see the latest figures for eight key performance indicators at a glance every morning. Which format is most suitable?', choices: ['A formal written report', 'A dashboard', 'A letter', 'A detailed listing of all transactions'], answer: 1, explain: '少数の主要指標の最新の状態を、毎朝ひと目で見たい。ダッシュボードが合う。正式な報告書は重い判断向けで、毎朝読むには長い。取引の明細は細かすぎて、要点が見えない。' },
        { q: 'Which section of a formal report gives a short overview of the main findings, conclusions and recommendations for readers with limited time?', choices: ['Appendices', 'Terms of reference', 'Executive summary', 'Main body'], answer: 2, explain: '要旨（executive summary）は報告書の最初に置き、結論と提案を短くまとめる。付録は細かい計算やデータ、terms of reference は目的と範囲、main body は分析の本体。' },
        { q: '各店の材料費が予算から ±5% を超えてずれたときだけ、その店の数字を報告する。この方法を何という？', choices: ['定例報告（routine reporting）', 'ダッシュボード', '付録（appendix）', '例外報告（exception reporting）'], answer: 3, explain: '許容範囲を超えた項目だけを報告するのが例外報告。管理者が手を打つべき所に集中できる。定例報告は、決まった時期に決まった内容をすべて出す報告。' },
        { q: '報告を組織のガイドライン（organisational guidelines）に従って作る理由として、最も適切なものは？', choices: ['毎回同じ形・単位で作られ、期間ごとに比べやすく、読み手が迷わないから', '作成者が、好きな形式を自由に選べるようになるから', '報告の中の数字が必ず正確になるから', '報告を作る回数を減らせるから'], answer: 0, explain: 'テンプレートや単位・丸め方がそろうと、毎月の報告を比べやすく、読み手が迷わない。書式をそろえても、元のデータが間違っていれば数字は正確にならない。' },
        { q: 'A company needs to formally notify its bank of a requested change to the terms of a loan. Which format is most appropriate?', choices: ['An internal memo', 'A letter', 'A dashboard', 'An exception report'], answer: 1, explain: '社外の相手への正式な連絡なので手紙（letter）。メモは社内向け。ダッシュボードと例外報告は、社内の管理者が指標やずれを見るための形式。' },
        { q: '新しい店を出すかを取締役会で判断する報告書を作る。細かいコスト計算の表は、どこに入れるのがよい？', choices: ['要旨（executive summary）', '表題のすぐ後', '付録（appendices）', '提案（recommendations）の中'], answer: 2, explain: '細かい計算は付録に回し、本文では要点と結論に必要な数字だけを示す。要旨は短く結論と提案をまとめる場所なので、細かい表は入れない。' }
      ]
    },
    {
      id: 'M068',
      no: 68,
      title: '表とグラフで見せる: 棒・折れ線・円・散布図',
      goal: '伝えたいことに合わせて表と4種類のグラフを選び、円グラフの角度などを計算して正しく作れるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A2(b)'],
      slides: [
        {
          title: '体重は折れ線、家計は円',
          paras: ['ダイエット中の体重は、日付順の折れ線グラフにすると、減っているかが分かる。家計の出費の内訳は、円グラフにすると家賃が何割かがひと目で分かる。', '同じ数字でも、見せ方で伝わるものが変わる。まず「何を伝えたいか」を決めて、それに合う表やグラフを選ぶ。これをデータの視覚化（data visualisation）という。']
        },
        {
          title: '4種類のグラフ',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="4種類のグラフ。棒グラフは量を比べる、折れ線グラフは時間の推移、円グラフは全体の割合、散布図は2つの量の関係を見せる" font-size="14"><rect x="20" y="10" width="190" height="150" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M40 25 V115 H195" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="52" y="55" width="24" height="60" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="88" y="30" width="24" height="85" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="124" y="75" width="24" height="40" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="160" y="45" width="24" height="70" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="115" y="145" text-anchor="middle" fill="var(--ink)">棒グラフ: 量を比べる</text><rect x="230" y="10" width="190" height="150" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M250 25 V115 H405" fill="none" stroke="var(--edge)" stroke-width="1.5"/><polyline points="260,95 288,82 316,88 344,62 372,52 398,36" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="325" y="145" text-anchor="middle" fill="var(--ink)">折れ線グラフ: 推移</text><rect x="20" y="170" width="190" height="150" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M115 240 L115 195 A45 45 0 0 1 128.9 282.8 Z" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M115 240 L128.9 282.8 A45 45 0 0 1 70 240 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/><path d="M115 240 L70 240 A45 45 0 0 1 115 195 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="115" y="310" text-anchor="middle" fill="var(--ink)">円グラフ: 全体の割合</text><rect x="230" y="170" width="190" height="150" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M250 185 V280 H405" fill="none" stroke="var(--edge)" stroke-width="1.5"/><circle cx="265" cy="265" r="3.5" fill="var(--ink)"/><circle cx="280" cy="258" r="3.5" fill="var(--ink)"/><circle cx="292" cy="262" r="3.5" fill="var(--ink)"/><circle cx="305" cy="245" r="3.5" fill="var(--ink)"/><circle cx="318" cy="240" r="3.5" fill="var(--ink)"/><circle cx="330" cy="236" r="3.5" fill="var(--ink)"/><circle cx="345" cy="222" r="3.5" fill="var(--ink)"/><circle cx="357" cy="226" r="3.5" fill="var(--ink)"/><circle cx="370" cy="210" r="3.5" fill="var(--ink)"/><circle cx="385" cy="200" r="3.5" fill="var(--ink)"/><circle cx="395" cy="205" r="3.5" fill="var(--ink)"/><text x="325" y="310" text-anchor="middle" fill="var(--ink)">散布図: 2つの量の関係</text></svg>`,
          caption: '量を比べる → 棒、時間の推移 → 折れ線、全体の割合 → 円、2つの量の関係 → 散布図。'
        },
        {
          title: '表（table）: 正確な数字を見せる',
          paras: ['表は、正確な数字そのものを見せたいときに使う。読み手が自分で計算し直すこともできる。よい表の条件は次のとおり。'],
          list: ['表題（何の、いつの数字か）と出典', '行と列の見出し、単位（$、$000、個など）', '必要なら合計・小計', '丸め方をそろえる。大事な順や大きい順に並べる']
        },
        {
          title: '棒グラフ（bar chart）の4つの形',
          list: ['単純棒グラフ（simple bar chart）: 1つの項目の大きさを比べる。例: 店ごとの売上', '複合棒グラフ（multiple / compound bar chart）: 棒を横に並べ、いくつかの項目を比べる。例: 店ごとの売上を年別に並べる', '積み上げ棒グラフ（component bar chart）: 1本の棒を内訳で区切る。合計と内訳が同時に見える', '百分率の積み上げ棒グラフ（percentage component bar chart）: どの棒も 100%。合計の違うものどうしで、内訳の割合を比べる']
        },
        {
          title: '折れ線グラフと散布図',
          list: ['折れ線グラフ（line graph）: 横軸に時間をとり、時間による変化（傾向や季節の波）を見せる。線を何本か引けば比べられる', '散布図（scatter graph / scatter diagram）: 2つの量の組を点で打ち、関係を見る。原因の側（独立変数、例: 生産量）を横軸 x、結果の側（従属変数、例: 総原価）を縦軸 y にとる。点どうしは線で結ばない'],
          after: '散布図に引く「最もよく当てはまる線」は、M079 で学ぶ。'
        },
        {
          title: '円グラフ（pie chart）: 全体の中の割合',
          paras: ['円グラフは、全体を 100% として、各部分の割合を見せる。円の中心の角度は全部で 360度。各部分の扇形の角度を、割合に比例させる。'],
          formula: '扇形の角度 ＝ その部分の値 ÷ 合計 × 360度',
          after: '区分が多すぎる（6〜7を超える）と読みにくい。時間による変化は見せにくいので、その場合は折れ線や棒を使う。'
        },
        {
          title: '例題: 円グラフの角度',
          example: {
            problem: 'たこ焼き屋の今年の売上は、たこ焼き $45,000、焼きそば $30,000、ドリンク $15,000、その他 $10,000。円グラフにするとき、それぞれの扇形の角度は？',
            steps: ['合計: $45,000 ＋ $30,000 ＋ $15,000 ＋ $10,000 ＝ $100,000', 'たこ焼き: 45,000 ÷ 100,000 ＝ 45% → 0.45 × 360 ＝ 162度', '焼きそば: 30% → 0.30 × 360 ＝ 108度', 'ドリンク: 15% → 0.15 × 360 ＝ 54度', 'その他: 10% → 0.10 × 360 ＝ 36度', '確かめ: 162 ＋ 108 ＋ 54 ＋ 36 ＝ 360度'],
            answer: 'たこ焼き 162度、焼きそば 108度、ドリンク 54度、その他 36度'
          }
        },
        {
          title: 'なぜ？ グラフは「比べ方」を決める',
          paras: ['人は、棒の長さ、線の傾き、円の中の割合、点の並び方を一瞬で比べられる。数字の表を読むより速い。だからグラフの種類は「読み手に何を比べさせたいか」で決まる。', '逆に、合わないグラフは誤解を生む。月ごとの売上を円グラフにすると、増えているのか減っているのかが見えない。']
        },
        {
          title: 'よい図の条件と、よくある間違い',
          list: ['表題、軸の名前と単位、目盛り、凡例（key）、出典を書く', '棒グラフの縦軸は 0 から始める'],
          note: { kind: 'warn', text: '縦軸を 0 から始めないと、小さな差が大きく見える。円グラフでは、値をそのまま角度にしない（必ず合計で割って 360 をかける）。散布図では、軸を逆にしない（原因の側が横軸）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['量を比べる → 棒、時間の推移 → 折れ線、全体の割合 → 円、2つの量の関係 → 散布図', '円グラフの扇形の角度 ＝ 値 ÷ 合計 × 360度', '表題・軸と単位・凡例をつけ、棒グラフの縦軸は 0 から始める']
        },
        {
          title: '英単語',
          words: [
            ['data visualisation', 'データ ビジュアライゼーション', 'データの視覚化（表やグラフで見せる）'],
            ['bar chart', 'バー チャート', '棒グラフ'],
            ['multiple (compound) bar chart', '', '複合棒グラフ（棒を横に並べる）'],
            ['component bar chart', '', '積み上げ棒グラフ（棒を内訳で区切る）'],
            ['percentage component bar chart', '', '百分率の積み上げ棒グラフ（どの棒も100%）'],
            ['line graph', 'ライン グラフ', '折れ線グラフ'],
            ['pie chart', 'パイ チャート', '円グラフ'],
            ['scatter graph', 'スキャッター グラフ', '散布図（scatter diagram とも）'],
            ['axis / key', 'アクシス / キー', '軸 / 凡例']
          ]
        }
      ],
      quiz: [
        { q: 'A manager wants to show how the total sales revenue for the year is divided between four product lines. Which chart is most suitable?', choices: ['Line graph', 'Scatter graph', 'Multiple bar chart', 'Pie chart'], answer: 3, explain: '全体（年間売上）の中の割合を見せるので円グラフ。折れ線は時間の推移、散布図は2つの量の関係を見せる。複合棒グラフは、いくつかの項目を並べて比べるためのもので、全体の中の割合は見えにくい。' },
        { q: 'Total sales are $120,000, of which product P accounts for $27,000. What angle, in degrees, should the sector for product P have in a pie chart?', type: 'number', answer: 81, unit: '度', explain: '27,000 ÷ 120,000 ＝ 0.225（22.5%）。0.225 × 360 ＝ 81度。22.5 は割合の % で、角度ではない。' },
        { q: 'A scatter graph is drawn to show the relationship between monthly production volume and total production cost. Which variable should be plotted on the x axis?', choices: ['Total production cost, because it is the dependent variable', 'Production volume, because it is the independent variable', 'Total production cost, because it has the larger values', 'Either variable, because the choice of axis does not matter'], answer: 1, explain: '生産量が増えると総原価が増える。原因の側の生産量が独立変数で横軸 x、結果の側の総原価が従属変数で縦軸 y。値の大きさでは決めない。' },
        { q: '24か月分の月別売上から、売上が伸びているか、季節の波があるかを見せたい。最も適したグラフは？', choices: ['折れ線グラフ', '円グラフ', '散布図', '百分率の積み上げ棒グラフ'], answer: 0, explain: '時間による変化は、横軸に時間をとった折れ線グラフで見せる。円グラフは1時点の割合、散布図は2つの量の関係、百分率の積み上げ棒グラフは内訳の割合を見せる。' },
        { q: '駅前店の売上は $200,000 で、そのうちたこ焼きが $120,000。公園店の売上は $50,000 で、たこ焼きが $35,000。百分率の積み上げ棒グラフにするとき、公園店の棒で「たこ焼き」の部分は何%になる？', type: 'number', answer: 70, unit: '%', explain: '35,000 ÷ 50,000 × 100 ＝ 70%（駅前店は 120,000 ÷ 200,000 ＝ 60%）。どの棒も 100% にそろえるので、合計が4倍違う2店でも、内訳の割合を比べられる。' }
      ]
    },
    {
      id: 'M069',
      no: 69,
      title: '報告書の表とグラフを読み取る',
      goal: '報告書の表とグラフから、増減率・構成比・グラフの値を計算し、正しく読み取って説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A2(c)'],
      slides: [
        {
          title: '電気代のグラフと、読む手順',
          paras: ['電気代の明細には、去年の同じ月と比べたグラフが載っている。棒が高く見えても、縦軸の目盛りを見ないと、どのくらい増えたかは分からない。報告書の表やグラフも、次の順で読む。'],
          numbered: ['表題・期間・単位（$、$000、%）を確かめる', '目盛りと、軸が 0 から始まっているかを確かめる', '大きさ・増減・割合を計算する', '「何が、どれだけ」を言葉にまとめる。グラフだけで原因を決めつけない']
        },
        {
          title: '使う3つの計算',
          list: ['増減額 ＝ 今期 − 前期', '増減率（%）＝（今期 − 前期）÷ 前期 × 100。割るのは前期（比べる元）', '構成比（%）＝ 部分 ÷ 合計 × 100'],
          after: '割合どうしの差は「ポイント（percentage points）」で言う。構成比が 45% から 38% に下がったら「7ポイント下がった」。「7% 下がった」とは言わない。'
        },
        {
          title: '地域別売上の表',
          table: { caption: '地域別売上（$000）', head: ['地域', '2025年', '2026年'], rows: [['North', '240', '288'], ['South', '360', '342'], ['East', '200', '270']], total: ['合計', '800', '900'] },
          after: 'この表を、次の例題で読む。'
        },
        {
          title: '例題: 表から増減率と構成比を出す',
          example: {
            problem: '上の表から、地域ごとの増減率と、2026年の構成比を出す。何が言える？',
            steps: ['North: (288 − 240) ÷ 240 × 100 ＝ ＋20%', 'South: (342 − 360) ÷ 360 × 100 ＝ −5%', 'East: (270 − 200) ÷ 200 × 100 ＝ ＋35%', '合計: (900 − 800) ÷ 800 × 100 ＝ ＋12.5%', '2026年の構成比: North 288 ÷ 900 ＝ 32%、South 342 ÷ 900 ＝ 38%、East 270 ÷ 900 ＝ 30%', '2025年の構成比: North 240 ÷ 800 ＝ 30%、South 360 ÷ 800 ＝ 45%、East 200 ÷ 800 ＝ 25%'],
            answer: '全体は 12.5% 増。South は今も最大だが 5% 減り、構成比は 45% から 38% へ 7ポイント下がった。最も伸びたのは East（＋35%）'
          }
        },
        {
          title: '同じデータを積み上げ棒グラフで',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="地域別売上の積み上げ棒グラフ。単位は千ドル。2025年は下から North 240、South 360、East 200 で合計800。2026年は North 288、South 342、East 270 で合計900" font-size="14"><text x="20" y="30" font-size="12.5" fill="var(--quiet)">$000</text><path d="M70 210 H420 M70 170 H420 M70 130 H420 M70 90 H420 M70 50 H420" fill="none" stroke="var(--edge)" stroke-width="1" stroke-dasharray="3 4"/><path d="M70 250 H420" fill="none" stroke="var(--edge)" stroke-width="1.5"/><text x="62" y="254" text-anchor="end" font-size="12.5" fill="var(--quiet)">0</text><text x="62" y="214" text-anchor="end" font-size="12.5" fill="var(--quiet)">200</text><text x="62" y="174" text-anchor="end" font-size="12.5" fill="var(--quiet)">400</text><text x="62" y="134" text-anchor="end" font-size="12.5" fill="var(--quiet)">600</text><text x="62" y="94" text-anchor="end" font-size="12.5" fill="var(--quiet)">800</text><text x="62" y="54" text-anchor="end" font-size="12.5" fill="var(--quiet)">1,000</text><rect x="120" y="202" width="80" height="48" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="120" y="130" width="80" height="72" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="120" y="90" width="80" height="40" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="160" y="230" text-anchor="middle" font-size="12.5" fill="var(--ink)">North</text><text x="160" y="170" text-anchor="middle" font-size="12.5" fill="var(--ink)">South</text><text x="160" y="114" text-anchor="middle" font-size="12.5" fill="var(--ink)">East</text><text x="206" y="206" font-size="12.5" fill="var(--ink)">240</text><text x="206" y="134" font-size="12.5" fill="var(--ink)">600</text><text x="206" y="94" font-size="12.5" fill="var(--ink)">800</text><rect x="270" y="192.4" width="80" height="57.6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><rect x="270" y="124" width="80" height="68.4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="270" y="70" width="80" height="54" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="310" y="225" text-anchor="middle" font-size="12.5" fill="var(--ink)">North</text><text x="310" y="162" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink)">South</text><text x="310" y="101" text-anchor="middle" font-size="12.5" fill="var(--ink)">East</text><text x="356" y="196" font-size="12.5" fill="var(--ink)">288</text><text x="356" y="128" font-size="12.5" fill="var(--ink)">630</text><text x="356" y="74" font-size="12.5" fill="var(--ink)">900</text><text x="160" y="274" text-anchor="middle" fill="var(--ink)">2025</text><text x="310" y="274" text-anchor="middle" fill="var(--ink)">2026</text></svg>`,
          caption: '棒の右の数字は、区切りの境目の値（下からの累計）。1つの区切りの値は「上の境目 − 下の境目」で読む。2026年の South は 630 − 288 ＝ 342。百分率の積み上げ棒グラフ（どの棒も100%）は割合しか示さない。金額は「合計 × 区切りの %」で、合計が書いてあるときだけ出せる。例: 合計 $800,000 で材料費 35% なら $280,000。'
        },
        {
          title: '例題: 円グラフから金額を出す',
          example: {
            problem: 'ある工場の今年の総原価 $500,000 を円グラフにした。材料費の扇形は 144度、労務費は 108度。残りは製造間接費。それぞれの金額は？',
            steps: ['材料費: 144 ÷ 360 ＝ 40% → $500,000 × 40% ＝ $200,000', '労務費: 108 ÷ 360 ＝ 30% → $500,000 × 30% ＝ $150,000', '製造間接費の角度: 360 − 144 − 108 ＝ 108度 → $150,000', '確かめ: $200,000 ＋ $150,000 ＋ $150,000 ＝ $500,000'],
            answer: '材料費 $200,000、労務費 $150,000、製造間接費 $150,000'
          }
        },
        {
          title: '折れ線グラフと散布図の読み方',
          list: ['折れ線グラフ: 全体の傾向（上向き・横ばい・下向き）と、毎年同じ時期に出る山や谷（季節の変動）を分けて見る。1か月だけの動きで判断しない', '散布図: 点が右上がりに並べば正の相関（positive correlation）、右下がりなら負の相関、ばらばらなら相関なし。ほかから大きく外れた点（外れ値、outlier）は理由を調べる', '相関があっても、片方が原因とは限らない（相関と因果は別）']
        },
        {
          title: 'なぜ？ 読む人が数字に戻す',
          paras: ['グラフは見た目の印象で判断させてしまう。棒の長さや扇形の大きさは、目盛りや合計しだいで変わる。だから管理者は、数字に戻して増減率や構成比を自分で確かめる。', '「売上が増えた」だけでは手を打てない。どの地域が、何%動いたか、全体の何割を占めるかまで言えると、どこに力を入れるべきかが決まる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '増減率は前期（比べる元）で割る。今期で割ると、South は −18 ÷ 342 ＝ −5.3% になってずれる。構成比の差は「ポイント」で言う。縦軸が $900,000 から始まる棒グラフでは、$950,000 と $1,000,000 の棒が2倍の長さに見えるが、実際の差は約5%しかない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['増減率 ＝（今期 − 前期）÷ 前期 × 100', '構成比 ＝ 部分 ÷ 合計 × 100。構成比どうしの差は「ポイント」で言う', '円グラフ・百分率の積み上げ棒の金額 ＝ 合計 × 割合（円は角度 ÷ 360）。積み上げ棒の区切りの値 ＝ 上の境目 − 下の境目']
        },
        {
          title: '英単語',
          words: [
            ['percentage change', '', '増減率'],
            ['percentage points', 'パーセンテージ ポインツ', 'ポイント（割合どうしの差）'],
            ['proportion / share', 'プロポーション / シェア', '構成比（全体に占める割合）'],
            ['trend', 'トレンド', '傾向（全体の動きの向き）'],
            ['seasonal variation', 'シーズナル ヴァリエーション', '季節の変動（毎年同じ時期の山と谷）'],
            ['correlation', 'コリレーション', '相関（2つの量が一緒に動く関係）'],
            ['outlier', 'アウトライアー', '外れ値'],
            ['interpret', 'インタープリット', '読み取る・解釈する']
          ]
        }
      ],
      quiz: [
        { q: 'Sales were $250,000 in 20X5 and $290,000 in 20X6. What was the percentage increase in sales?', type: 'number', answer: 16, unit: '%', explain: '増減額 $290,000 − $250,000 ＝ $40,000。前期で割る: 40,000 ÷ 250,000 × 100 ＝ 16%。今期で割ると 13.8% になって誤り。' },
        { q: 'A percentage component bar shows total costs of $600,000; materials are 40% of the bar. What is the materials cost?', type: 'number', answer: 240000, unit: '$', explain: '金額 ＝ 合計 × 区切りの %: $600,000 × 40% ＝ $240,000。百分率の積み上げ棒グラフは、どの棒も 100% にそろえて割合（構成比）だけを示す。棒の長さから金額は読めないので、合計が与えられたときだけ金額にできる。40% を答えたり $40,000 と読んだりしない。円グラフも同じで、角度 ÷ 360 が割合、金額 ＝ 合計 × 割合。' },
        { q: '2025年に構成比 45% だった South が、2026年には 38% になった。正しい説明は？', choices: ['構成比が 7% 下がった', '売上が 7% 減った', '構成比が 7ポイント下がった', '売上が 7ポイント減った'], answer: 2, explain: '割合どうしの差は「ポイント」で言う: 45% − 38% ＝ 7ポイント。構成比そのものの減り方は 7 ÷ 45 ＝ 約16%。South の売上の減少率は (342 − 360) ÷ 360 ＝ −5% で、構成比の変化とは別の数字。' },
        { q: 'In a component bar chart (figures in $000), the bar for Year 2 shows Product A from 0 to 150, Product B from 150 to 270 and Product C from 270 to 400. What were the sales of Product B in Year 2?', choices: ['$270,000', '$150,000', '$130,000', '$120,000'], answer: 3, explain: '区切りの値は上の境目 − 下の境目: 270 − 150 ＝ 120（$000）→ $120,000。$270,000 は上の境目（A と B の合計）を読んだ答え。$150,000 は A、$130,000 は C（400 − 270）。' },
        { q: 'A店の売上 $950,000 と、B店の $1,000,000 を棒グラフで比べている。縦軸は $900,000 から始まっていて、B店の棒がA店の2倍の長さに見える。正しい読み取りは？', choices: ['B店はA店の約2倍', 'B店はA店より約5%多いだけ', 'B店はA店より50%多い', '縦軸の始まりは、読み取りに関係ない'], answer: 1, explain: '差は $50,000。50,000 ÷ 950,000 ＝ 約5.3%。縦軸が 0 から始まらないので、棒の長さ（50 と 100）が実際の比率を表していない。数字に戻して確かめる。' },
        { q: 'A scatter graph of monthly advertising spend against monthly sales shows the points lying close to an upward-sloping line, with one point far below the others. Which interpretation is most appropriate?', choices: ['There is a negative correlation, because one point lies below the line', 'The graph proves that higher advertising spend causes higher sales', 'There is a positive correlation; the point far from the others is an outlier whose cause should be investigated', 'There is no relationship, because not every point lies on the line'], answer: 2, explain: '点が右上がりに並ぶので正の相関。大きく外れた1点は外れ値で、理由を調べる。相関があっても因果の証明にはならない。全部の点が線に乗らなくても、並び方に傾向があれば相関はある。' }
      ]
    }
  ],
  cards: [
    { id: 'M065-1', lesson: 'M065', q: 'カテゴリデータと数値データの違いは？', a: '区分（グループ）で表すか、数で表して計算できるか' },
    { id: 'M065-2', lesson: 'M065', q: '名義データと順序データの違いは？', a: '名義は順番なし。順序は自然な順番あり（間の幅は等しいとは限らない）' },
    { id: 'M065-3', lesson: 'M065', q: '離散データと連続データの見分け方は？', a: '数えて得るなら離散、測って得るなら連続' },
    { id: 'M065-4', lesson: 'M065', q: '満足度を1〜5の点数で記録した。データの種類は？', a: 'カテゴリ・順序データ（数字でも性質は順序）' },
    { id: 'M065-5', lesson: 'M065', q: '名義データで意味のある集計は？', a: '件数・割合・最頻値（平均や中央値は意味がない）' },
    { id: 'M065-6', lesson: 'M065', q: '作業時間を分単位の整数で記録した。データの種類は？', a: '数値・連続データ（測った量なので）' },
    { id: 'M066-1', lesson: 'M066', q: '記述的分析（descriptive analysis）とは？', a: '持っているデータを表・グラフ・平均などで要約し、説明する分析' },
    { id: 'M066-2', lesson: 'M066', q: '推測的分析（inferential analysis）とは？', a: '標本から母集団について推定・予測し、結論を出す分析' },
    { id: 'M066-3', lesson: 'M066', q: '母集団（population）と標本（sample）とは？', a: '母集団は知りたい対象の全部、標本は実際に調べた一部' },
    { id: 'M066-4', lesson: 'M066', q: '全部調べずに標本を使う理由は？', a: '時間とコスト、全員には届かない、検査で壊れるなど' },
    { id: 'M066-5', lesson: 'M066', q: '推測的分析が成り立つ条件は？', a: '標本が全体の縮図（代表的）であること。誤差は確率で扱う' },
    { id: 'M066-6', lesson: 'M066', q: '顧客2,000人。標本100人のうち30人が購入希望。全体の見込みは？', a: '約600人（30% × 2,000人）' },
    { id: 'M067-1', lesson: 'M067', q: '報告の形式を選ぶ物差しは？', a: '目的・相手・急ぎ具合と頻度・詳しさ・正式さと機密' },
    { id: 'M067-2', lesson: 'M067', q: '主要指標を毎日ひと目で見たいときの形式は？', a: 'ダッシュボード（dashboard）' },
    { id: 'M067-3', lesson: 'M067', q: '正式な報告書の順番は？', a: '表題 → 要旨 → はじめに → 本文 → 結論・提案 → 付録' },
    { id: 'M067-4', lesson: 'M067', q: '要旨（executive summary）の役割は？', a: '結論と提案を最初に短く示す。忙しい読み手向け' },
    { id: 'M067-5', lesson: 'M067', q: '例外報告（exception reporting）とは？', a: '予算などから許容範囲を超えてずれた項目だけを報告する方法' },
    { id: 'M067-6', lesson: 'M067', q: '組織のガイドラインの例は？', a: 'テンプレート、単位・丸め方、報告の期限、承認と配布先' },
    { id: 'M068-1', lesson: 'M068', q: '4種類のグラフの使い分けは？', a: '比べる → 棒、推移 → 折れ線、割合 → 円、2つの関係 → 散布図' },
    { id: 'M068-2', lesson: 'M068', q: '円グラフの扇形の角度の式は？', a: '値 ÷ 合計 × 360度' },
    { id: 'M068-3', lesson: 'M068', q: '積み上げ棒グラフと百分率の積み上げ棒グラフの違いは？', a: '前者は合計と内訳の金額、後者はどの棒も100%で内訳の割合を比べる' },
    { id: 'M068-4', lesson: 'M068', q: '散布図の横軸 x に置くのは？', a: '独立変数（原因の側、例: 生産量）。縦軸 y は従属変数' },
    { id: 'M068-5', lesson: 'M068', q: '棒グラフの縦軸を0から始めないとどうなる？', a: '小さな差が大きく見え、誤解を生む' },
    { id: 'M068-6', lesson: 'M068', q: 'よい表の条件は？', a: '表題と出典、見出しと単位、合計、丸め方と並び順をそろえる' },
    { id: 'M069-1', lesson: 'M069', q: '増減率の式は？', a: '（今期 − 前期）÷ 前期 × 100。前期（比べる元）で割る' },
    { id: 'M069-2', lesson: 'M069', q: '構成比の式は？', a: '部分 ÷ 合計 × 100' },
    { id: 'M069-3', lesson: 'M069', q: '構成比が45%から38%になった。どう言う？', a: '7ポイント下がった（7%下がった、ではない）' },
    { id: 'M069-4', lesson: 'M069', q: '円グラフや百分率の積み上げ棒グラフから金額を出すには？', a: '金額 ＝ 合計 × 割合（円は角度 ÷ 360）。割合だけのグラフは合計がないと金額にならない' },
    { id: 'M069-5', lesson: 'M069', q: '積み上げ棒グラフの1区切りの値の読み方は？', a: '上の境目 − 下の境目' },
    { id: 'M069-6', lesson: 'M069', q: '散布図で相関が見えたら、因果も言える？', a: '言えない。相関と因果は別。外れ値は理由を調べる' },
    { id: 'M069-7', lesson: 'M069', q: 'グラフを読むとき最初に確かめることは？', a: '表題・期間・単位と、目盛り・軸が0から始まるか' }
  ]
});
