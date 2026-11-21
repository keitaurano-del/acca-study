(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 109,
  part: 3,
  partTitle: '材料費・労務費・製造間接費',
  lessons: [
    {
      id: 'M034',
      no: 34,
      title: '直接労務費と間接労務費: 遊休時間と残業',
      goal: '直接工の賃金を、遊休時間と残業割増を含めて直接労務費と間接労務費に分けて計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(b)(i)'],
      slides: [
        {
          title: '何もしていない1時間にも時給は出る',
          paras: ['コンビニのアルバイトで時給1,000円。8時間のシフトのうち1時間は、レジが故障して何もできなかった。それでも8時間分の時給が払われる。', '閉店後に残ると、その時間は時給1,250円になる。増えた250円は、どの商品のための費用だろう？ 労務費を「製品に直接かかった分」と「それ以外」に分けるのが、このレッスンの話。']
        },
        {
          title: '直接労務費と間接労務費',
          list: ['直接労務費（direct labour cost）: 直接工が製品を作る作業をした時間の、基本の賃率（basic rate）での賃金。どの製品のためか、直接たどれる', '間接労務費（indirect labour cost）: 製品に直接たどれない賃金。監督者・保全係・倉庫係の賃金、直接工の遊休時間、残業の割増分、病気休暇や研修の時間の賃金など'],
          after: '間接労務費は製造間接費（production overhead）に入れ、あとで製品に配賦する（この第3部の後半で学ぶ）。'
        },
        {
          title: '遊休時間と残業割増',
          paras: ['遊休時間（idle time）: 賃金を払っているのに生産をしていない時間。機械の故障、材料待ち、注文の不足などで生まれる。', '残業（overtime）: 決まった時間を超えた労働。time and a half は基本の賃率の1.5倍で払うという意味。1倍は基本の分、上乗せの0.5倍が残業割増（overtime premium）。double time なら割増は1倍。'],
          formula: '残業時間の賃金 ＝ 基本の分（1倍）＋ 残業割増（0.5倍など）'
        },
        {
          title: '例題: 直接工1人の1週間',
          example: {
            problem: '椅子を作る工場の直接工Aさん。基本の賃率は時給 $12。ある週に45時間働いた。週40時間を超えた分は time and a half。機械の故障で3時間、作業ができなかった。残業はふだんの忙しさが原因。総支給額と、直接労務費・間接労務費は？',
            steps: ['基本の分: 45時間 × $12 ＝ $540', '残業割増: 超えた5時間 × $12 × 0.5 ＝ $30', '総支給額: $540 ＋ $30 ＝ $570', '直接労務費: 作業した42時間（45 − 3）× $12 ＝ $504', '間接労務費: 遊休 3時間 × $12 ＝ $36、残業割増 $30、合計 $66', '確かめ: $504 ＋ $66 ＝ $570'],
            answer: '総支給 $570、直接労務費 $504、間接労務費 $66'
          }
        },
        {
          title: '$570 の行き先',
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="総支給570ドルのうち504ドルが直接労務費、66ドルが間接労務費" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">週の賃金 $570 の行き先</text><rect x="20" y="78" width="140" height="96" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="118" text-anchor="middle" font-size="15" fill="var(--ink)">支払った賃金</text><text x="90" y="144" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">$570</text><line x1="160" y1="126" x2="200" y2="92" stroke="var(--ink)" stroke-width="1.5"/><line x1="160" y1="126" x2="200" y2="176" stroke="var(--ink)" stroke-width="1.5"/><rect x="200" y="56" width="220" height="72" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="310" y="85" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">直接労務費 $504</text><text x="310" y="111" text-anchor="middle" fill="var(--ink)">→ 仕掛品（製品の原価）</text><rect x="200" y="140" width="220" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="310" y="169" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">間接労務費 $66</text><text x="310" y="195" text-anchor="middle" fill="var(--ink)">→ 製造間接費</text><text x="220" y="240" text-anchor="middle" fill="var(--ink)">遊休 $36 と残業割増 $30 は間接労務費</text></svg>`,
          caption: '作業した42時間の基本の分だけが直接労務費。残業した5時間も、作業をしていれば基本の分は直接労務費になる。'
        },
        {
          title: 'なぜ？ 割増を製品に乗せない理由',
          paras: ['残業は、たまたまその時間に作っていた製品のせいではない。月曜の昼に作った椅子も、金曜の夜の残業で作った椅子も同じ椅子。割増を残業時間の製品にだけ乗せると、同じ製品の原価がばらばらになる。', 'だから割増は製造間接費にして、全部の製品に広く配る。遊休時間も同じ。機械の故障は、特定の製品のせいではない。']
        },
        {
          title: '例外と、分け方のまとめ',
          table: { caption: '直接か間接か', head: ['項目', '扱い'], rows: [['直接工の作業時間（基本の分）', '直接労務費'], ['残業割増（ふだんの忙しさが原因）', '製造間接費'], ['残業割増（特定の注文が原因）', 'その注文の直接費'], ['直接工の遊休時間', '製造間接費'], ['監督者・保全係の賃金', '製造間接費']] },
          after: 'お客様が急ぎを頼み、そのために残業したなら、割増はその注文（job）の直接費にする。原因が1つの注文にはっきりあるから。夜勤手当（shift premium）も考え方は同じ。'
        },
        {
          title: '遊休時間率',
          formula: '遊休時間率（idle time ratio）＝ 遊休時間 ÷ 支払った時間 × 100%',
          paras: ['Aさんの週: 3時間 ÷ 45時間 × 100% ＝ 約6.7%。この数字が上がっていたら、故障や材料待ちが増えているサインになる。', 'ふつうの範囲の遊休時間（normal idle time）は製造間接費。長い停電やストライキのような異常な遊休時間（abnormal idle time）は、製品の原価に入れず、その期の費用として損益計算書に直接載せる。問題文に扱いの指示があれば、それに従う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '残業した時間の賃金を全部「間接」にしない。間接になるのは割増の分（0.5倍）だけ。基本の分（1倍）は、作業をしていれば直接労務費。また、直接工の賃金でも、遊休時間の分は直接労務費に入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接労務費＝直接工が作業した時間 × 基本の賃率', '遊休時間と残業割増は、ふつう製造間接費（間接労務費）', '特定の注文のための残業なら、割増はその注文の直接費']
        },
        {
          title: '英単語',
          words: [
            ['direct labour cost', 'ダイレクト レイバー コスト', '直接労務費'],
            ['indirect labour cost', 'インダイレクト レイバー コスト', '間接労務費'],
            ['idle time', 'アイドル タイム', '遊休時間（払っているが生産していない時間）'],
            ['overtime premium', 'オーバータイム プレミアム', '残業割増（基本の賃率を超える上乗せ分）'],
            ['time and a half / double time', '', '1.5倍 / 2倍の賃率'],
            ['basic rate', 'ベーシック レート', '基本の賃率'],
            ['shift premium', 'シフト プレミアム', '夜勤などの手当'],
            ['production overhead', 'プロダクション オーバーヘッド', '製造間接費']
          ]
        }
      ],
      quiz: [
        { q: 'A direct worker is paid $15 per hour for a basic 37-hour week. Overtime is paid at time and a half. In one week the worker worked 42 hours, including 2 hours of idle time caused by a machine breakdown. The overtime was due to the general pressure of work. What is the direct labour cost for the week?', type: 'number', answer: 600, unit: '$', explain: '作業した時間は 42 − 2 ＝ 40時間。40 × $15 ＝ $600 が直接労務費。総支給は 42 × $15 ＝ $630 ＋ 割増 5 × $7.50 ＝ $37.50 で $667.50。遊休 $30 と割増 $37.50 の計 $67.50 は製造間接費。' },
        { q: 'Overtime premium is paid to direct workers because a customer asked for their job to be finished urgently. How should the overtime premium be treated?', choices: ['As a production overhead', 'As an administration overhead', 'As a direct cost of the job for that customer', 'As a direct cost shared equally by all jobs in the period'], answer: 2, explain: '原因が特定の注文にはっきりあるので、その注文の直接費。ふだんの忙しさが原因なら製造間接費になる。全部の注文に均等に分けるのは、原因の注文が分かっているのに無関係な注文にも負担させてしまう。' },
        { q: 'ふだんの忙しさが原因で直接工が残業した。残業割増はどう扱う？', choices: ['残業時間に作った製品の直接労務費にする', '製造間接費にする', '販売費にする', '割増は原価にしない'], answer: 1, explain: '残業は、たまたまその時間に作った製品のせいではない。割増は製造間接費にして全製品に配る。払った賃金なので、原価にしないことはない。' },
        { q: 'Which of the following are indirect labour costs? (1) Idle time of direct production workers; (2) Wages of the factory supervisor; (3) Basic pay of direct workers for hours spent making products', choices: ['(2) only', '(1), (2) and (3)', '(2) and (3) only', '(1) and (2) only'], answer: 3, explain: '(3) は製品を作った時間の基本の分なので直接労務費。(1) は直接工の賃金でも、生産していない時間なので間接。(2) only は遊休時間を見落とした答え。' },
        { q: '直接工の1週間の支払時間は50時間で、そのうち4時間は材料待ちの遊休時間だった。遊休時間率は何%？', type: 'number', answer: 8, unit: '%', explain: '4 ÷ 50 × 100% ＝ 8%。分母は支払った時間（50時間）。作業した46時間で割ると約8.7%になってしまう。' }
      ]
    },
    {
      id: 'M035',
      no: 35,
      title: '賃金の払い方: 時間給・出来高給・賞与',
      goal: '時間給・出来高給（最低保証・差率）・時間節約の賞与で、1人の支給総額を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(b)(iii)'],
      slides: [
        {
          title: '時給と内職のちがい',
          paras: ['アルバイトの時給は、ゆっくり働いても急いでも同じ額。封筒づくりの内職は「1枚いくら」で、たくさん作るほど稼げる。', '会社も、何に対して払うかを選んでいる。時間に払うか、作った数に払うか、成果に上乗せするか。払い方で、働く人の動き方も変わる。']
        },
        {
          title: '主な払い方',
          list: ['時間給（time rate / day rate）: 働いた時間 × 賃率', '出来高給（piecework）: 作った数 × 1個あたりの賃率（piece rate）', '賞与・奨励給（bonus / incentive scheme）: 基本給に、成果に応じて上乗せ', '高賃率制（high day-rate）: ふつうより高い時給を払う代わりに、高い生産量を求める'],
          formula: '支給総額（total remuneration）＝ 基本給 ＋ 賞与'
        },
        {
          title: '出来高給と最低保証',
          paras: ['出来高給だけだと、機械の故障など本人のせいでない理由で収入が減る。そこで最低保証（guaranteed minimum）を付けることが多い。出来高給がその額を下回ったときだけ、保証額を払う。'],
          example: {
            problem: 'Bさんは1個 $0.80 の出来高給で、週 $400 の最低保証つき。1週目に450個、2週目に550個作った。それぞれの支給額は？',
            steps: ['1週目: 450 × $0.80 ＝ $360。保証の $400 より少ない', '1週目の支給: $400（差額 $40 を会社が補う）', '2週目: 550 × $0.80 ＝ $440。保証の $400 より多い', '2週目の支給: $440'],
            answer: '1週目 $400、2週目 $440'
          }
        },
        {
          title: '差率出来高給',
          paras: ['差率出来高給（differential piecework）は、数が増えると1個あたりの賃率が上がる。ふつうは、その段階に入った個数だけに高い賃率をかける。'],
          example: {
            problem: '100個まで1個 $2.00、101〜150個は $2.20、151個以上は $2.50（それぞれ、その範囲の個数だけに適用）。Cさんは170個作った。支給額は？',
            steps: ['最初の100個: 100 × $2.00 ＝ $200', '101〜150個の50個: 50 × $2.20 ＝ $110', '151〜170個の20個: 20 × $2.50 ＝ $50', '合計: $200 ＋ $110 ＋ $50 ＝ $360'],
            answer: '$360（170個すべてに $2.50 をかけた $425 ではない）'
          }
        },
        {
          title: '時間節約の賞与',
          paras: ['仕事ごとに標準の時間（time allowed）を決め、それより早く終われば、節約した時間（time saved）の一部を賞与として払う。基本給は実際に働いた時間で払う。'],
          formula: '賞与 ＝ 節約した時間 × 時給 × 賞与の割合',
          example: {
            problem: 'Dさんは時給 $15。ある仕事の標準の時間は50時間、実際は40時間で終えた。節約した時間の50%を賞与として払う。支給総額は？',
            steps: ['基本給: 実際の40時間 × $15 ＝ $600', '節約した時間: 50 − 40 ＝ 10時間', '賞与: 10 × $15 × 50% ＝ $75', '支給総額: $600 ＋ $75 ＝ $675'],
            answer: '$675'
          }
        },
        {
          title: '名前のついた2つの方式',
          table: { caption: '時間節約の賞与', head: ['方式', '賞与の式'], rows: [['Halsey（ハルシー）', '節約時間 × 時給 × 50%'], ['Rowan（ローワン）', '実際時間 ÷ 標準時間 × 節約時間 × 時給']] },
          after: 'Dさんを Rowan で計算すると、40 ÷ 50 × 10 × $15 ＝ $120。支給総額は $720 になる。問題文に割合や式が書いてあれば、それに従う。'
        },
        {
          title: '標準が「1個あたり」のとき・グループ賞与',
          paras: ['試験では、標準の時間が「1個あたり何分」で出ることが多い。まず作った個数をかけて、仕事全体の標準の時間（time allowed）に直す。'],
          example: {
            problem: 'Eさんは時給 $16。ある週に40時間働いて270個作った。1個の標準は10分。節約した時間の50%を時給で賞与にする。支給総額は？',
            steps: ['標準の時間: 270 × 10分 ＝ 2,700分 ＝ 45時間', '節約した時間: 45 − 40 ＝ 5時間', '賞与: 5 × $16 × 50% ＝ $40', '基本給: 40 × $16 ＝ $640', '支給総額: $640 ＋ $40 ＝ $680'],
            answer: '$680'
          },
          after: 'グループ賞与（group bonus scheme）は、班全体の成果で賞与を出し、決めた比で分ける。班の賞与 $300 を働いた時間の比で分けるなら、60時間のFさんは $180、40時間のGさんは $120。'
        },
        {
          title: 'なぜ？ 払い方を使い分ける理由',
          paras: ['時間給は計算が簡単で、急がせないので品質を守りやすい。ただ、速く作る動機は生まれない。出来高給は速く作る動機が強いが、急いで品質が落ちやすい。', '賞与は、安定した基本給に、成果の分だけ上乗せする中間の方法。1人ずつの成果が測れないライン作業では、グループ賞与を使う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '差率出来高給で、全部の個数に一番高い賃率をかけてしまう。「その範囲の個数だけ（only to units within the band）」なら段階ごと、「全部の個数に（to all units）」とあるときだけ全数に同じ賃率。問題文を必ず読む。最低保証は「出来高給の方が少ないときだけ」払う。保証額に出来高給を足さない。時間節約の賞与は、節約した時間にかける。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['時間給＝時間 × 賃率、出来高給＝個数 × 個あたりの賃率', '最低保証は下回ったときだけ。差率は段階ごとに分けて計算する', '時間節約の賞与＝節約した時間 × 時給 × 割合。支給総額＝基本給 ＋ 賞与']
        },
        {
          title: '英単語',
          words: [
            ['total remuneration', 'トータル リミュナレーション', '支給総額（賞与を含む報酬の合計）'],
            ['time rate / day rate', '', '時間給'],
            ['piecework / piece rate', 'ピースワーク / ピース レート', '出来高給 / 1個あたりの賃率'],
            ['differential piecework', 'ディファレンシャル ピースワーク', '差率出来高給'],
            ['guaranteed minimum', 'ギャランティード ミニマム', '最低保証'],
            ['time allowed / time saved', '', '標準の時間 / 節約した時間'],
            ['bonus / incentive scheme', 'ボーナス / インセンティブ スキーム', '賞与 / 奨励給の制度'],
            ['group bonus scheme', '', 'グループ賞与']
          ]
        }
      ],
      quiz: [
        { q: 'An employee is paid $0.50 per unit produced, with a guaranteed minimum wage of $300 per week. In one week the employee produced 560 units. What is the gross pay of the employee for the week?', type: 'number', answer: 300, unit: '$', explain: '出来高給は 560 × $0.50 ＝ $280。保証の $300 より少ないので $300 を払う。$580（$280 ＋ $300）は保証額に出来高給を足した間違い。' },
        { q: 'A worker is paid $18 per hour. The time allowed for a job was 30 hours and the worker completed it in 24 hours. A bonus of 40% of the time saved is paid at the hourly rate. What is the total remuneration of the worker for the job?', type: 'number', answer: 475.2, unit: '$', explain: '基本給 24 × $18 ＝ $432。節約した時間 6時間。賞与 6 × $18 × 40% ＝ $43.20。合計 $475.20。基本給を標準の30時間で計算すると $540 から始まってしまう。' },
        { q: 'A differential piecework scheme pays $1.00 per unit for units 1 to 200, $1.20 per unit for units 201 to 300 and $1.50 per unit for units above 300. Each rate applies only to the units within that band. An employee produced 340 units. What is the pay of the employee?', choices: ['$510', '$380', '$408', '$340'], answer: 1, explain: '200 × $1.00 ＋ 100 × $1.20 ＋ 40 × $1.50 ＝ $200 ＋ $120 ＋ $60 ＝ $380。$510 は全部に $1.50、$408 は全部に $1.20、$340 は全部に $1.00 をかけた答え。' },
        { q: '品質が最も大事で、作業を急がせたくない仕事。向いている払い方は？', choices: ['出来高給', '差率出来高給', '時間給', '個人の時間節約賞与'], answer: 2, explain: '時間給は作った数で収入が変わらないので、急ぐ動機が生まれず品質を守りやすい。ほかの3つは、速く作るほど収入が増える。' },
        { q: '時給 $20 の作業員。標準の時間40時間の仕事を32時間で終えた。Rowan 方式の賞与を含めた支給総額はいくら？', type: 'number', answer: 768, unit: '$', explain: '基本給 32 × $20 ＝ $640。節約8時間。Rowan の賞与 32 ÷ 40 × 8 × $20 ＝ $128。合計 $768。Halsey（50%）なら賞与は $80 で合計 $720。' },
        { q: 'An employee is paid $12 per hour. In a 38-hour week the employee produced 240 units. The standard time is 12 minutes per unit. A bonus of 50% of the time saved is paid at the basic hourly rate. What is the total remuneration for the week?', type: 'number', answer: 516, unit: '$', explain: '標準の時間 240 × 12分 ＝ 2,880分 ＝ 48時間。節約 48 − 38 ＝ 10時間。賞与 10 × $12 × 50% ＝ $60。基本給 38 × $12 ＝ $456。合計 $516。12分を0.12時間と読むと計算が崩れる（12分 ＝ 0.2時間）。' }
      ]
    },
    {
      id: 'M036',
      no: 36,
      title: '労務費の仕訳',
      goal: '賃金統制勘定を使い、賃金の支払いと、仕掛品・製造間接費・非製造間接費への振替を仕訳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(b)(ii)'],
      slides: [
        {
          title: 'まとめて払い、あとで行き先に分ける',
          paras: ['ベビーシッター代を、毎月「シッター代」の封筒からまとめて払う。月末に、仕事の日の分と、遊びに出かけた日の分に分けて家計簿に書く。', '会社の賃金も同じ。まず1つの勘定に集めて払い、あとで「どの仕事の時間だったか」で行き先へ振り分ける。この集める勘定を賃金統制勘定（wages control account）という。']
        },
        {
          title: '4つの仕訳',
          numbered: ['支払い: Dr Wages control / Cr Bank', '直接労務費: Dr Work in progress / Cr Wages control', '製造の間接労務費: Dr Production overhead control / Cr Wages control', '製造以外（事務・営業）の賃金: Dr Administration（または Selling）overhead / Cr Wages control'],
          after: '仕掛品（work in progress, WIP）は作りかけの製品の勘定。製造間接費の統制勘定に集めた額は、あとで製品に配賦する。特定の注文のための残業割増は直接費なので Dr WIP。異常な遊休時間は Dr Statement of profit or loss（損益計算書）。'
        },
        {
          title: '賃金の流れ',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="Bankから賃金統制勘定に集め、仕掛品・製造間接費・非製造間接費へ振り替える" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">賃金はいったん集めて、行き先へ</text><rect x="20" y="108" width="100" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="70" y="132" text-anchor="middle" font-size="15" fill="var(--ink)">Bank</text><text x="70" y="152" text-anchor="middle" fill="var(--quiet)">支払い</text><line x1="120" y1="136" x2="150" y2="136" stroke="var(--ink)" stroke-width="1.5"/><rect x="150" y="98" width="120" height="76" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="210" y="124" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Wages</text><text x="210" y="144" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">control</text><text x="210" y="164" text-anchor="middle" fill="var(--ink)">賃金統制</text><line x1="270" y1="136" x2="300" y2="75" stroke="var(--ink)" stroke-width="1.5"/><line x1="270" y1="136" x2="300" y2="136" stroke="var(--ink)" stroke-width="1.5"/><line x1="270" y1="136" x2="300" y2="196" stroke="var(--ink)" stroke-width="1.5"/><rect x="300" y="50" width="120" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="71" text-anchor="middle" fill="var(--ink)">仕掛品 WIP</text><text x="360" y="91" text-anchor="middle" fill="var(--quiet)">直接労務費</text><rect x="300" y="111" width="120" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="132" text-anchor="middle" fill="var(--ink)">製造間接費</text><text x="360" y="152" text-anchor="middle" fill="var(--quiet)">間接労務費</text><rect x="300" y="171" width="120" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="192" text-anchor="middle" fill="var(--ink)">非製造間接費</text><text x="360" y="212" text-anchor="middle" fill="var(--quiet)">管理・販売</text><text x="220" y="250" text-anchor="middle" fill="var(--ink)">Dr は行き先、Cr は Wages control</text></svg>`,
          caption: '支払いは Wages control の借方、振替は貸方。全部振り替えると残高は0になる。'
        },
        {
          title: '例題: 3月の賃金',
          example: {
            problem: '椅子工場の3月の賃金総額 $50,000 を銀行から払った。内訳: 直接工の作業時間の基本の分 $32,000、直接工の残業割増 $3,000（ふだんの忙しさが原因）、直接工の遊休時間 $1,500、監督者・保全係の賃金 $9,500、事務員の賃金 $4,000。仕訳は？',
            steps: ['支払い: Dr Wages control $50,000 / Cr Bank $50,000', '直接労務費: Dr Work in progress $32,000 / Cr Wages control $32,000', '製造の間接労務費: $3,000 ＋ $1,500 ＋ $9,500 ＝ $14,000 → Dr Production overhead control $14,000 / Cr Wages control $14,000', '事務員: Dr Administration overhead $4,000 / Cr Wages control $4,000', '確かめ: $32,000 ＋ $14,000 ＋ $4,000 ＝ $50,000'],
            answer: 'WIP $32,000、製造間接費 $14,000、管理費 $4,000。Wages control の残高は0'
          }
        },
        {
          title: '3月の賃金統制勘定',
          tAccount: { name: 'Wages control（3月）', debit: [['Bank（支払い）', '50,000']], credit: [['Work in progress', '32,000'], ['Production overhead control', '14,000'], ['Administration overhead', '4,000']] },
          after: '借方と貸方の合計がどちらも $50,000 で、残高は0。月末に、働いたのにまだ払っていない賃金があると、振替（貸方）の方が大きくなり、貸方残高＝未払賃金（負債）が残る。'
        },
        {
          title: 'なぜ？ いったん集める理由',
          paras: ['払う記録（給与計算）は人ごと・月ごとに作る。行き先の記録は、作業時間票（timesheet・job card）から「どの仕事に何時間」と作る。出どころの違う2つの記録になる。', '1つの統制勘定に、払った額と振り替えた額を両方入れると、2つの記録が合っているかを確かめられる。K1 の売掛金の統制勘定と同じ発想。']
        },
        {
          title: '税金などの差し引きがあるとき',
          paras: ['実際は、総支給額（gross pay）から所得税や社会保険料（deductions）を差し引き、残りの手取り（net pay）を払う。差し引いた分は、あとで税務署などに払う負債になる。Wages control の借方には総支給額を入れる。'],
          journal: [
            { side: 'Dr', account: 'Wages control（総支給額）', amount: '50,000' },
            { side: 'Cr', account: 'Bank（手取り）', amount: '41,000' },
            { side: 'Cr', account: 'Tax and social security payable（預り金）', amount: '9,000' }
          ]
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '直接工の賃金を全部 WIP に入れない。遊休時間と残業割増は、直接工の賃金でも製造間接費へ。事務員や営業の賃金は製造原価ではないので、WIP にも製造間接費にも入れない。Dr と Cr の向きも逆にしやすい。行き先が借方。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['支払いは Dr Wages control / Cr Bank（総支給額で）', '直接労務費は Dr WIP、製造の間接労務費は Dr Production overhead control', '製造以外の賃金は Dr Administration・Selling overhead。相手はすべて Cr Wages control']
        },
        {
          title: '英単語',
          words: [
            ['wages control account', 'ウェイジズ コントロール アカウント', '賃金統制勘定'],
            ['work in progress (WIP)', 'ワーク イン プログレス', '仕掛品'],
            ['production overhead control account', '', '製造間接費統制勘定'],
            ['administration overhead', 'アドミニストレーション オーバーヘッド', '管理費（製造以外の間接費）'],
            ['gross pay / net pay', 'グロス ペイ / ネット ペイ', '総支給額 / 手取り'],
            ['deductions', 'ディダクションズ', '差し引き（税・社会保険料）'],
            ['timesheet / job card', 'タイムシート / ジョブ カード', '作業時間票'],
            ['cost ledger', 'コスト レジャー', '原価計算の帳簿']
          ]
        }
      ],
      quiz: [
        { q: 'Direct wages of $25,000 have been incurred in a period. What is the correct entry to record their transfer?', choices: ['Dr Wages control, Cr Work in progress control', 'Dr Production overhead control, Cr Wages control', 'Dr Work in progress control, Cr Wages control', 'Dr Finished goods control, Cr Wages control'], answer: 2, explain: '直接労務費は製品の原価なので、仕掛品へ。Dr Wages control, Cr Work in progress は向きが逆。Dr Production overhead control は間接労務費の仕訳。完成品（finished goods）へは、製品が完成したときに仕掛品から振り替える。' },
        { q: 'Which of the following would be debited to the production overhead control account? (1) Idle time of direct production workers; (2) Overtime premium of direct workers, due to the general pressure of work; (3) Wages of sales staff', choices: ['(1), (2) and (3)', '(1) and (2) only', '(2) and (3) only', '(1) only'], answer: 1, explain: '(1) と (2) は製造の間接労務費。(3) 営業の賃金は製造原価ではないので、selling overhead（非製造間接費）へ。' },
        { q: '賃金総額 $80,000。内訳は、直接工の作業時間の基本の分 $52,000、直接工の遊休時間 $2,000、残業割増 $4,000（ふだんの忙しさが原因）、間接工の賃金 $14,000、営業の賃金 $8,000。Production overhead control に振り替える額は？', type: 'number', answer: 20000, unit: '$', explain: '$2,000 ＋ $4,000 ＋ $14,000 ＝ $20,000。$52,000 は WIP へ、営業の $8,000 は selling overhead へ。合計 $52,000 ＋ $20,000 ＋ $8,000 ＝ $80,000。' },
        { q: '総支給額 $10,000 から税金 $1,800 を差し引き、手取り $8,200 を払った。Wages control の借方に記入する額は？', choices: ['$8,200（手取り）', '$1,800（差し引いた額）', '$11,800', '$10,000（総支給額）'], answer: 3, explain: '会社の労務費は総支給額。手取り $8,200 は Bank の貸方、差し引いた $1,800 は預り金（負債）の貸方に入る。' },
        { q: 'After all transfers have been made, the wages control account has a credit balance. What does this balance represent?', choices: ['Wages incurred but not yet paid (an accrual)', 'Wages paid in advance (a prepayment)', 'Over-absorbed production overhead', 'The direct labour cost of finished goods'], answer: 0, explain: '貸方（振り替えた額＝発生した額）が借方（払った額）より大きい。働いてもらったのにまだ払っていない分で、未払賃金という負債。前払いなら借方残高になる。' }
      ]
    },
    {
      id: 'M037',
      no: 37,
      title: '離職率: 原因・コスト・計算',
      goal: '離職率を計算し、離職の原因と、補充のコスト・防止のコストを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(b)(iv)'],
      slides: [
        {
          title: '人が辞めると、見えないお金がかかる',
          paras: ['アルバイト先で人がよく辞めると、店長は求人を出し、面接し、新人に仕事を教える。新人のうちはレジが遅く、ミスも多い。', '給料の明細には出てこないが、辞める人が多いほどお金がかかっている。それを数字で見るのが離職率（labour turnover）。']
        },
        {
          title: '離職率の式',
          formula: '離職率 ＝ 補充が必要な退職者数 ÷ 平均従業員数 × 100%',
          paras: ['平均従業員数＝（期首 ＋ 期末）÷ 2。', '分子は、辞めて代わりの人を採用した人数（replacements）。仕事そのものがなくなって補充しない退職や、事業を広げるための新しい採用は入れない。測りたいのは「辞めたせいで入れ替えた」人数だから。']
        },
        {
          title: '例題: 1年間の離職率',
          example: {
            problem: '椅子工場の1月1日の従業員は380人、12月31日は420人。期中に50人が辞め、そのうち40人は代わりの人を採用した（10人の仕事はなくなった）。ほかに、新しいラインのために50人を採用した。離職率は？',
            steps: ['人数の確かめ: 380 − 50 ＋ 40 ＋ 50 ＝ 420', '平均従業員数: (380 ＋ 420) ÷ 2 ＝ 400人', '補充した退職者: 40人（補充しない10人と、拡大のための50人は数えない）', '離職率: 40 ÷ 400 × 100% ＝ 10%'],
            answer: '10%'
          }
        },
        {
          title: '辞める原因',
          table: { caption: '離職の原因', head: ['種類', '例'], rows: [['避けられる（avoidable）', '給料が低い、職場環境が悪い、上司との関係、昇進や研修の機会がない、仕事が単調'], ['避けられない（unavoidable）', '定年、病気、家族の転居、結婚・出産、死亡']] },
          after: '会社が手を打てるのは「避けられる」原因。辞める人に理由を聞く退職面談（exit interview）で、原因を集める。'
        },
        {
          title: '離職の2種類のコスト',
          list: ['補充のコスト（replacement costs）: 求人広告、面接・選考、新人の研修、慣れるまで生産が少ないことによる損失、新人の失敗による材料のむだ・不良品、事故の増加', '防止のコスト（preventive costs）: 待遇や福利厚生の改善、年金制度、研修・昇進の制度、人事部門の運営、職場環境の改善'],
          after: '補充のコストは辞めた後にかかる。防止のコストは、辞めないように前もってかける。'
        },
        {
          title: 'なぜ？ 離職率を計算する理由',
          paras: ['補充のコストは、給料の明細や1つの勘定にまとまって出てこない。広告費、研修の時間、不良品などに散らばる。だから離職率と1人あたりのコストで、見える数字にする。', '例: 補充1人に $4,000 かかり、年40人なら $160,000。待遇改善に年 $60,000 かけて補充が20人に減れば、補充のコストは $80,000 減る。防止にお金をかける方が得と判断できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '辞めた人数（50人）で割らない。数えるのは補充した退職者。分母は期首や期末ではなく平均。拡大のための新しい採用も分子に入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['離職率＝補充が必要な退職者数 ÷ 平均従業員数 × 100%', '原因には、避けられるもの（待遇・環境）と避けられないもの（定年・病気）がある', 'コストは補充のコスト（辞めた後）と防止のコスト（辞める前）']
        },
        {
          title: '英単語',
          words: [
            ['labour turnover', 'レイバー ターンオーバー', '離職（人の入れ替わり）'],
            ['labour turnover rate', '', '離職率'],
            ['leavers / replacements', 'リーバーズ / リプレイスメンツ', '退職者 / 補充の採用'],
            ['average number of employees', '', '平均従業員数'],
            ['avoidable / unavoidable causes', '', '避けられる / 避けられない原因'],
            ['replacement costs', 'リプレイスメント コスツ', '補充のコスト'],
            ['preventive costs', 'プリベンティブ コスツ', '防止のコスト'],
            ['exit interview', 'エグジット インタビュー', '退職面談']
          ]
        }
      ],
      quiz: [
        { q: 'At the start of the year a company had 200 employees and at the end of the year it had 240. During the year 30 employees left, of whom 22 were replaced. What was the labour turnover rate for the year (%)?', type: 'number', answer: 10, unit: '%', explain: '平均 (200 ＋ 240) ÷ 2 ＝ 220人。補充した 22人 ÷ 220 × 100% ＝ 10%。辞めた30人で割ると約13.6%、期首の200人で割ると11%になってしまう。' },
        { q: 'Which of the following is a preventive cost of labour turnover?', choices: ['Cost of advertising for new employees', 'Cost of training new employees', 'Lost output while new employees learn the job', 'Cost of improving staff welfare and pension schemes'], answer: 3, explain: '福利厚生や年金の改善は、辞めないように前もってかける防止のコスト。ほかの3つは、辞めた後にかかる補充のコスト。' },
        { q: '会社が手を打てば減らせる、「避けられる」離職の原因は？', choices: ['定年退職', '給料が同業他社より低い', '家族の転勤による転居', '病気'], answer: 1, explain: '給料は会社が見直せる。定年・家族の転居・病気は、会社の努力では防げない「避けられない」原因。' },
        { q: '補充1人あたりに、求人広告 $400、選考 $200、研修 $900、慣れるまでの生産の損失 $1,500 がかかる。年に30人を補充したとき、補充のコストの合計はいくら？', type: 'number', answer: 90000, unit: '$', explain: '1人あたり $400 ＋ $200 ＋ $900 ＋ $1,500 ＝ $3,000。30人で $90,000。慣れるまでの生産の損失も、補充のコストに入る。' },
        { q: 'When calculating the labour turnover rate, which of the following would NOT be counted as a leaver requiring replacement?', choices: ['An employee who resigned to take a better-paid job and was replaced', 'An employee who retired and whose post was filled', 'An employee whose job was abolished and who was not replaced', 'An employee who was dismissed and was replaced'], answer: 2, explain: '仕事がなくなり補充しなかった退職は数えない。定年や解雇でも、補充していれば数える。原因が避けられるかどうかは、計算には関係ない。' }
      ]
    },
    {
      id: 'M038',
      no: 38,
      title: '能率・操業度・生産量の比率',
      goal: '作った量の標準時間を出し、能率・操業度・生産量の3つの比率を計算して読めるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(b)(v)'],
      slides: [
        {
          title: 'ゲームの「目安時間」で比べる',
          paras: ['1ステージの目安が30分のゲーム。今日は4時間遊ぶ予定だったが、実際は3時間で、7ステージ進んだ。7ステージの目安は3.5時間。', '目安3.5時間の分を3時間で進めたので、手際がよい。でも遊べた時間は予定の4時間より短い。「手際」と「時間」を分けて見るのが、このレッスンの3つの比率。']
        },
        {
          title: '3つの時間',
          list: ['予算の時間（budgeted hours）: 予定していた作業時間', '実際の時間（actual hours worked）: 実際に作業した時間', '作った量の標準時間（standard hours produced）: 実際に作った量を、標準どおりの速さで作ったら何時間か'],
          formula: '作った量の標準時間 ＝ 実際の生産量 × 1個あたりの標準時間',
          after: '標準時間（standard hour）は「標準の速さで1時間に作れる仕事の量」のこと。'
        },
        {
          title: '3つの比率',
          table: { caption: '労務の比率', head: ['比率', '式（× 100%）'], rows: [['能率（efficiency ratio）', '標準時間 ÷ 実際の時間'], ['操業度（capacity ratio）', '実際の時間 ÷ 予算の時間'], ['生産量（production volume ratio）', '標準時間 ÷ 予算の時間']] },
          formula: '生産量の比率 ＝ 能率の比率 × 操業度の比率',
          after: 'かけ算すると、分子と分母の「実際の時間」が消える。'
        },
        {
          title: '例題: 組立部の1か月',
          example: {
            problem: '椅子1脚の標準時間は2時間。今月の予算は2,500脚、つまり5,000時間。実際には4,800時間作業して、2,640脚を作った。3つの比率は？',
            steps: ['作った量の標準時間: 2,640 × 2時間 ＝ 5,280時間', '能率: 5,280 ÷ 4,800 × 100% ＝ 110%', '操業度: 4,800 ÷ 5,000 × 100% ＝ 96%', '生産量: 5,280 ÷ 5,000 × 100% ＝ 105.6%', '確かめ: 110% × 96% ＝ 105.6%'],
            answer: '能率 110%、操業度 96%、生産量 105.6%'
          }
        },
        {
          title: '3つの時間の関係',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="予算の時間・実際の時間・作った量の標準時間を2つずつ比べる3つの比率" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">3つの時間を2つずつ比べる</text><rect x="20" y="60" width="150" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">予算の時間</text><text x="95" y="108" text-anchor="middle" fill="var(--ink)">5,000 時間</text><rect x="270" y="60" width="150" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="345" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">実際の時間</text><text x="345" y="108" text-anchor="middle" fill="var(--ink)">4,800 時間</text><rect x="145" y="180" width="150" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="206" text-anchor="middle" fill="var(--ink)">作った量の標準時間</text><text x="220" y="228" text-anchor="middle" fill="var(--ink)">5,280 時間</text><line x1="174" y1="96" x2="266" y2="96" stroke="var(--ink)" stroke-width="1.5"/><text x="220" y="84" text-anchor="middle" fill="var(--ink)">操業度 96%</text><line x1="330" y1="120" x2="270" y2="180" stroke="var(--ink)" stroke-width="1.5"/><text x="318" y="164" fill="var(--ink)">能率 110%</text><line x1="110" y1="120" x2="170" y2="180" stroke="var(--ink)" stroke-width="1.5"/><text x="20" y="164" fill="var(--ink)">生産量 105.6%</text><text x="220" y="268" text-anchor="middle" fill="var(--ink)">生産量 ＝ 能率 × 操業度</text></svg>`,
          caption: '標準時間はいつも分子。能率は実際と、生産量は予算と比べる。操業度だけは標準時間を使わない。'
        },
        {
          title: 'なぜ？ 2つに分けて読む理由',
          paras: ['生産量 105.6% だけを見ると「予定より多く作れた、よし」で終わる。能率 110% は、標準より速く作れたこと。操業度 96% は、予定ほど働けなかったこと（人手不足・故障・注文不足など）。', '速さの良さが、時間の不足を上回った。どちらが原因かが分かれば、手の打ち方が分かる。これは後で学ぶ差異分析（能率差異・操業度差異）の土台になる。']
        },
        {
          title: '製品が何種類もあるとき',
          paras: ['椅子1脚とテーブル1台は、個数を足しても意味がない。標準時間に直すと足せる。'],
          table: { caption: '作った量の標準時間', head: ['製品', '計算', '時間'], rows: [['椅子（標準2時間）', '300脚 × 2', '600'], ['テーブル（標準5時間）', '100台 × 5', '500']], total: ['合計', '', '1,100'] },
          after: '問題文に支払った時間と作業した時間の両方があれば、比率には作業した時間（hours worked）を使う。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '能率の分子と分母を逆にしやすい。能率は「標準 ÷ 実際」で、少ない時間で作れれば100%を超える＝よい。操業度は「実際 ÷ 予算」。生産量の比率を個数で計算できるのは製品が1種類のときだけ。複数なら標準時間で計算する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['作った量の標準時間＝実際の生産量 × 1個あたりの標準時間', '能率＝標準 ÷ 実際、操業度＝実際 ÷ 予算、生産量＝標準 ÷ 予算', '生産量の比率＝能率の比率 × 操業度の比率']
        },
        {
          title: '英単語',
          words: [
            ['standard hour', 'スタンダード アワー', '標準時間（標準の速さで1時間分の仕事量）'],
            ['standard hours produced', '', '作った量の標準時間'],
            ['budgeted hours', 'バジェッティド アワーズ', '予算の時間'],
            ['actual hours worked', '', '実際に作業した時間'],
            ['efficiency ratio', 'エフィシェンシー レシオ', '能率の比率'],
            ['capacity ratio', 'キャパシティ レシオ', '操業度の比率'],
            ['production volume ratio', 'プロダクション ボリューム レシオ', '生産量の比率（activity ratio とも）']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted output was 1,000 units at a standard time of 3 hours per unit. Actual output was 1,080 units and actual hours worked were 2,880. What is the labour efficiency ratio (%)?', type: 'number', answer: 112.5, unit: '%', explain: '作った量の標準時間 1,080 × 3 ＝ 3,240時間。3,240 ÷ 2,880 × 100% ＝ 112.5%。逆に 2,880 ÷ 3,240 とすると約88.9%になってしまう。' },
        { q: 'Using the same data (budgeted output 1,000 units at 3 standard hours per unit; actual output 1,080 units; actual hours worked 2,880), what is the production volume ratio?', choices: ['112.5%', '96%', '108%', '92.6%'], answer: 2, explain: '3,240 ÷ 3,000 × 100% ＝ 108%。112.5% は能率、96%（2,880 ÷ 3,000）は操業度。92.6% は分子と分母を逆にした答え。確かめ: 112.5% × 96% ＝ 108%。' },
        { q: '椅子（標準2時間）を300脚、テーブル（標準5時間）を100台作った。実際の作業時間は1,000時間、予算の時間は1,250時間。能率の比率は何%？', type: 'number', answer: 110, unit: '%', explain: '作った量の標準時間 600 ＋ 500 ＝ 1,100時間。1,100 ÷ 1,000 × 100% ＝ 110%。' },
        { q: '前の問題と同じデータ（標準時間 1,100、実際の時間 1,000、予算の時間 1,250）で、操業度の比率は？', choices: ['88%', '80%', '110%', '125%'], answer: 1, explain: '実際 ÷ 予算: 1,000 ÷ 1,250 × 100% ＝ 80%。88% は生産量の比率（1,100 ÷ 1,250）、110% は能率、125% は分子と分母を逆にした答え。' },
        { q: 'If the labour efficiency ratio is 95% and the capacity ratio is 110%, what is the production volume ratio?', choices: ['115.8%', '86.4%', '205%', '104.5%'], answer: 3, explain: '生産量 ＝ 能率 × 操業度 ＝ 95% × 110% ＝ 104.5%。115.8% は 110 ÷ 95、86.4% は 95 ÷ 110、205% は足した答え。' }
      ]
    }
  ],
  cards: [
    { id: 'M034-1', lesson: 'M034', q: '直接労務費とは？', a: '直接工が製品を作る作業をした時間 × 基本の賃率' },
    { id: 'M034-2', lesson: 'M034', q: '遊休時間（idle time）の扱いは？', a: 'ふつうは製造間接費。異常な遊休時間は損益計算書の費用' },
    { id: 'M034-3', lesson: 'M034', q: 'time and a half の残業割増（overtime premium）は基本の賃率の何倍？', a: '0.5倍（1倍は基本の分）' },
    { id: 'M034-4', lesson: 'M034', q: 'ふだんの忙しさによる残業割増は、なぜ製品に直接乗せない？', a: 'たまたまその時間に作った製品のせいではないから。製造間接費で全製品に配る' },
    { id: 'M034-5', lesson: 'M034', q: '特定のお客様の急ぎの注文のための残業割増は？', a: 'その注文（job）の直接費' },
    { id: 'M034-6', lesson: 'M034', q: '遊休時間率の式は？', a: '遊休時間 ÷ 支払った時間 × 100%' },
    { id: 'M035-1', lesson: 'M035', q: '最低保証（guaranteed minimum）つき出来高給の払い方は？', a: '出来高給が保証額を下回るときだけ保証額を払う。足さない' },
    { id: 'M035-2', lesson: 'M035', q: '差率出来高給（differential piecework）の計算のコツは？', a: 'ふつうは段階ごとに、その範囲の個数だけに各賃率をかけて足す' },
    { id: 'M035-3', lesson: 'M035', q: '時間節約の賞与の式は？', a: '節約した時間 × 時給 × 賞与の割合' },
    { id: 'M035-4', lesson: 'M035', q: 'Halsey 方式と Rowan 方式の賞与は？', a: 'Halsey: 節約時間 × 時給 × 50%。Rowan: 実際 ÷ 標準 × 節約時間 × 時給' },
    { id: 'M035-5', lesson: 'M035', q: '時間給の長所と短所は？', a: '長所: 計算が簡単、品質を守りやすい。短所: 速く作る動機がない' },
    { id: 'M035-6', lesson: 'M035', q: 'total remuneration とは？', a: '支給総額。基本給 ＋ 賞与' },
    { id: 'M035-7', lesson: 'M035', q: '標準が「1個あたり何分」で出たら、時間節約の賞与はどう始める？', a: '作った個数 × 1個の標準で、仕事全体の標準の時間（time allowed）に直す' },
    { id: 'M036-1', lesson: 'M036', q: '賃金の支払いの仕訳は？', a: 'Dr Wages control / Cr Bank（総支給額で。差し引き分は預り金）' },
    { id: 'M036-2', lesson: 'M036', q: '直接労務費の振替の仕訳は？', a: 'Dr Work in progress / Cr Wages control' },
    { id: 'M036-3', lesson: 'M036', q: '直接工の遊休時間・残業割増の振替は？', a: 'Dr Production overhead control / Cr Wages control' },
    { id: 'M036-4', lesson: 'M036', q: '事務員・営業の賃金の振替は？', a: 'Dr Administration（Selling）overhead / Cr Wages control' },
    { id: 'M036-5', lesson: 'M036', q: '振替後の Wages control の貸方残高の意味は？', a: '発生したがまだ払っていない賃金（未払賃金、負債）' },
    { id: 'M037-1', lesson: 'M037', q: '離職率の式は？', a: '補充が必要な退職者数 ÷ 平均従業員数 × 100%' },
    { id: 'M037-2', lesson: 'M037', q: '離職率の分子に入れないものは？', a: '補充しない退職と、事業拡大のための新しい採用' },
    { id: 'M037-3', lesson: 'M037', q: '補充のコスト（replacement costs）の例は？', a: '求人広告、選考、研修、慣れるまでの生産の損失、不良品の増加' },
    { id: 'M037-4', lesson: 'M037', q: '防止のコスト（preventive costs）の例は？', a: '待遇・福利厚生・年金の改善、研修・昇進制度、職場環境の改善' },
    { id: 'M037-5', lesson: 'M037', q: '避けられる離職の原因と、避けられない原因の例は？', a: '避けられる: 低い給料・悪い環境。避けられない: 定年・病気・転居' },
    { id: 'M038-1', lesson: 'M038', q: '作った量の標準時間（standard hours produced）は？', a: '実際の生産量 × 1個あたりの標準時間' },
    { id: 'M038-2', lesson: 'M038', q: '能率の比率（efficiency ratio）の式は？', a: '作った量の標準時間 ÷ 実際の作業時間 × 100%' },
    { id: 'M038-3', lesson: 'M038', q: '操業度の比率（capacity ratio）の式は？', a: '実際の作業時間 ÷ 予算の時間 × 100%' },
    { id: 'M038-4', lesson: 'M038', q: '生産量の比率（production volume ratio）の式は？', a: '作った量の標準時間 ÷ 予算の時間 × 100%' },
    { id: 'M038-5', lesson: 'M038', q: '3つの比率の関係は？', a: '生産量 ＝ 能率 × 操業度' },
    { id: 'M038-6', lesson: 'M038', q: '製品が何種類もあるとき、生産量はどう足す？', a: '個数ではなく標準時間に直して足す' }
  ]
});
