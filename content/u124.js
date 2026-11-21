(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 124,
  part: 7,
  partTitle: '予算',
  lessons: [
    {
      id: 'M099',
      no: 99,
      title: '販売予算',
      goal: '製品ごと・期間ごとに、数量と金額の販売予算を作れるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(b)'],
      slides: [
        {
          title: '文化祭の模擬店、まず何を決める？',
          paras: ['文化祭でたこ焼きの店を出す。最初に決めるのは「何皿売れそうか」だ。売れる数が決まらないと、タコを何kg買うか、何人で焼くか、お金をいくら用意するかが決まらない。', '去年は300皿売れた。今年は場所が良いので1割増しの330皿。1皿500円なら売上は165,000円。こうして「売れる数 × 値段」を先に見積もる。これが販売予算になる。']
        },
        {
          title: '販売予算（sales budget）とは',
          paras: ['予算期間に、どの製品を、いつ、何個、いくらで売るかの計画。数量（units）と金額（value）の両方で作る。'],
          formula: '販売予算の金額 ＝ 販売数量 × 1個の売価',
          list: ['製品ごと、月や四半期（quarter）ごと、地域ごとに分けて作ることが多い', '数量は製造予算に、金額は予算損益計算書と現金予算（入金）に使う']
        },
        {
          title: '予算を作る順番',
          paras: ['多くの会社では、売れる数が活動の上限になる。これが前に学んだ主要予算要因（principal budget factor）。だから販売予算を最初に作り、ほかの機能別予算（functional budgets）はそこから順に作る。'],
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="予算を作る順番。販売予算から製造予算、材料・労務・製造間接費の予算、現金予算と総合予算へ。販売予算を強調" font-size="15"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">予算はこの順番で作る</text><rect x="140" y="40" width="160" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="68" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">販売予算</text><line x1="220" y1="84" x2="220" y2="104" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,104 226,104 220,112" fill="var(--edge)"/><text x="234" y="103" font-size="14" fill="var(--quiet)">＋在庫の方針</text><rect x="140" y="112" width="160" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="140" text-anchor="middle" font-size="16" fill="var(--ink)">製造予算</text><line x1="220" y1="156" x2="220" y2="170" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="170" x2="360" y2="170" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="170" x2="80" y2="184" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="170" x2="220" y2="184" stroke="var(--edge)" stroke-width="1.5"/><line x1="360" y1="170" x2="360" y2="184" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="184" width="120" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="211" text-anchor="middle" fill="var(--ink)">材料</text><rect x="160" y="184" width="120" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="211" text-anchor="middle" fill="var(--ink)">労務</text><rect x="300" y="184" width="120" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="211" text-anchor="middle" fill="var(--ink)">製造間接費</text><line x1="80" y1="228" x2="80" y2="240" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="228" x2="220" y2="252" stroke="var(--edge)" stroke-width="1.5"/><line x1="360" y1="228" x2="360" y2="240" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="240" x2="360" y2="240" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,252 226,252 220,260" fill="var(--edge)"/><rect x="90" y="260" width="260" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="286" text-anchor="middle" fill="var(--ink)">現金予算・総合予算</text></svg>`,
          caption: '主要予算要因が販売以外（材料・人手・機械の時間など）の会社では、その制約から先に考える。'
        },
        {
          title: '販売数量の見積もり方',
          list: ['過去の販売の傾向: 時系列分析の傾向変動（trend）と季節変動（seasonal variation）', '回帰分析（regression）: 広告費などの要因から予測する', '市場調査（market research）、市場全体の数量 × 自社のシェア（market share）', '営業担当者の見込み、競合の動き、値上げ・値下げの影響'],
          after: 'Section B の予算の問題では、時系列や回帰で出した予測を、そのまま販売予算に使う問題も出る。'
        },
        {
          title: '例題1: 四半期ごとの販売予算',
          example: {
            problem: 'Lumo Co は卓上ライトを作って売る。来年の販売数量の見込みは Q1 4,000個、Q2 5,000個、Q3 6,000個、Q4 4,500個。売価は1個 $30 で、Q3 の初めから10%値上げする。四半期ごとの販売予算（金額）と年間合計は？',
            steps: ['Q3 からの売価: $30 × 1.10 ＝ $33', 'Q1: 4,000 × $30 ＝ $120,000', 'Q2: 5,000 × $30 ＝ $150,000', 'Q3: 6,000 × $33 ＝ $198,000', 'Q4: 4,500 × $33 ＝ $148,500', '年間: 数量 19,500個、金額 $616,500'],
            answer: '年間 $616,500。値上げは Q3 と Q4 だけにかける'
          }
        },
        {
          title: '販売予算の表',
          table: { caption: 'Lumo Co 販売予算（来年）', head: ['四半期', '数量 × 売価', '金額 $'], rows: [['Q1', '4,000 × $30', '120,000'], ['Q2', '5,000 × $30', '150,000'], ['Q3', '6,000 × $33', '198,000'], ['Q4', '4,500 × $33', '148,500']], total: ['合計', '19,500個', '616,500'] },
          after: 'この数量（4,000、5,000…）が、次のレッスンの製造予算の出発点になる。'
        },
        {
          title: '例題2: 予測から販売予算を作る',
          example: {
            problem: '過去のデータから、四半期の販売数量の傾向は y ＝ 3,000 ＋ 100x（x は四半期の通し番号）と分かった。来年の Q3 は x ＝ 11 で、季節変動は乗法モデル（multiplicative）の指数 1.2（平均より20%多い）。売価は $25。この四半期の販売予算は？',
            steps: ['傾向値（trend）: 3,000 ＋ 100 × 11 ＝ 4,100個', '乗法モデルなので指数をかける: 4,100 × 1.2 ＝ 4,920個', '金額: 4,920 × $25 ＝ $123,000', '参考: 加法モデル（additive）で季節変動が ＋800個なら、4,100 ＋ 800 ＝ 4,900個'],
            answer: '4,920個、$123,000'
          }
        },
        {
          title: 'なぜ？ 販売予算がずれると全部ずれる',
          paras: ['販売予算は、ほかの全部の予算の土台になる。売れる数を多く見すぎると、作りすぎて在庫が残り、材料を買いすぎ、人を雇いすぎ、現金が足りなくなる。少なく見すぎると、品切れで売る機会を逃す。', 'だから過去の数字をそのまま使わず、季節・値上げ・市場の変化を一つずつ入れて見積もる。数量と金額を分けて作るのは、工場には「何個」、お金の計画には「いくら」が必要だからだ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '値上げを1年全部にかける（例題1で Q1 から $33 にすると $643,500 になり、$27,000 多すぎる）。乗法モデルの指数 1.2 を足して 4,101.2 個とする（かけるのが正しい）。製造予算に金額（$）を持ちこむ（製造予算は数量で作る）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['販売予算 ＝ 販売数量 × 売価。製品ごと・期間ごとに、数量と金額の両方で作る', '販売がふつう主要予算要因なので、最初に作る。ほかの予算はここから順に作る', '数量は「傾向 × 季節変動」「市場規模 × シェア」などで見積もる。値上げは始まる期からだけかける']
        },
        {
          title: '英単語',
          words: [
            ['sales budget', 'セールス バジェット', '販売予算'],
            ['functional budget', 'ファンクショナル バジェット', '機能別予算（販売・製造・材料など機能ごとの予算）'],
            ['principal budget factor', 'プリンシパル バジェット ファクター', '主要予算要因（活動の上限を決める要因）'],
            ['sales volume', 'セールス ボリューム', '販売数量'],
            ['selling price', 'セリング プライス', '売価'],
            ['market share', 'マーケット シェア', '市場シェア'],
            ['trend / seasonal variation', 'トレンド／シーズナル バリエーション', '傾向変動／季節変動'],
            ['market research', 'マーケット リサーチ', '市場調査']
          ]
        }
      ],
      quiz: [
        { q: 'A company expects to sell 8,000 units in quarter 1 at $45 per unit. Sales volume is expected to grow by 5% each quarter, and the selling price will increase by 4% from the start of quarter 2. What is the budgeted sales revenue for quarter 2?', type: 'number', answer: 393120, unit: '$', explain: 'Q2 の数量: 8,000 × 1.05 ＝ 8,400個。Q2 の売価: $45 × 1.04 ＝ $46.80。売上: 8,400 × $46.80 ＝ $393,120。値上げを忘れると $378,000、数量の伸びを忘れると $374,400 になる。' },
        { q: 'Quarterly sales volume is forecast using the trend line y = 2,500 + 40x, where x is the quarter number. Quarter 13 has a multiplicative seasonal index of 1.15. What is the forecast sales volume for quarter 13?', choices: ['3,035 units', '3,473 units', '3,020 units', '2,567 units'], answer: 1, explain: '傾向値: 2,500 ＋ 40 × 13 ＝ 3,020個。乗法モデルなので指数をかける: 3,020 × 1.15 ＝ 3,473個。3,035 は 15 を足した答え（加法モデルの形と取り違え）。3,020 は季節変動を入れていない。2,567 は「15%少ない」と逆に読んだ答え（3,020 × 0.85）。' },
        { q: '多くの会社で販売予算を最初に作る理由として、最も正しいものは？', choices: ['現金予算を作るとき、最後に必要になるから', '販売予算は過去の実績をそのまま写すだけで、一番簡単だから', '販売がふつう主要予算要因で、ほかの予算が販売数量をもとに作られるから', '工場の能力が、いつも販売数量より小さいから'], answer: 2, explain: '売れる数が活動の上限になる会社が多く、製造・材料・人・現金の予算は販売数量から順に決まる。販売予算は季節・値上げなどを入れて見積もるもので、実績の写しではない。工場の能力が先に制約になる会社もあるが、そのときは主要予算要因が生産能力になり、そこから先に考える。' },
        { q: '来年の市場全体の販売数量は 50,000台と予想される。自社のシェアは8%、売価は1台 $120。販売予算（金額）は？', type: 'number', answer: 480000, unit: '$', explain: '販売数量: 50,000 × 8% ＝ 4,000台。金額: 4,000 × $120 ＝ $480,000。' },
        { q: 'Which of the following would NOT normally be used in preparing a sales budget?', choices: ['Market research', 'Time series analysis of past sales', 'Planned changes in selling prices', 'The planned closing inventory of raw materials'], answer: 3, explain: '材料の期末在庫は、販売予算から製造予算を作ったあと、材料購入予算で使う数字。市場調査・過去の販売の時系列分析・売価の変更は、どれも販売の数量や金額の見積もりに使う。' },
        { q: 'The trend of quarterly sales volume is y = 1,800 + 60x, where x is the quarter number. An additive time series model is used and the seasonal variation for quarter 20 is -250 units. What is the forecast sales volume for quarter 20?', choices: ['2,750 units', '3,250 units', '3,000 units', '1,550 units'], answer: 0, explain: '傾向値: 1,800 ＋ 60 × 20 ＝ 3,000個。加法モデルなので季節変動を足す（マイナスなので引く）: 3,000 − 250 ＝ 2,750個。3,250 は符号を逆にした答え。3,000 は季節変動を入れていない。1,550 は 60 × 20 を入れ忘れた答え（1,800 − 250）。' }
      ]
    },
    {
      id: 'M100',
      no: 100,
      title: '製造予算',
      goal: '販売予算と在庫の方針から、期間ごとの製造数量を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(c)'],
      slides: [
        {
          title: 'パン屋は今日何個焼く？',
          paras: ['パン屋は、今日100個売れると見込んでいる。明日の開店用に20個残しておきたい。昨日の残りが15個ある。', '今日焼く数は 100 ＋ 20 − 15 ＝ 105個。売る数だけでなく、「残したい数」と「すでにある数」で、焼く数が変わる。']
        },
        {
          title: '製造予算（production budget）とは',
          paras: ['予算期間に何個作るかの計画。販売予算の数量に、製品在庫（finished goods inventory）の増減を足し引きして出す。金額ではなく数量（units）で作る。'],
          formula: '製造数量 ＝ 販売数量 ＋ 期末製品在庫 − 期首製品在庫',
          after: 'ある期の期末在庫（closing inventory）は、次の期の期首在庫（opening inventory）になる。'
        },
        {
          title: '入る数と出る数は釣り合う',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="Q1の製品の数の釣り合い。期首800個と生産4,200個で、販売4,000個と期末1,000個をまかなう。生産を強調" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">Q1: 入る数と出る数は必ず同じ</text><text x="20" y="52" fill="var(--quiet)">入る（期首 ＋ 生産）＝ 5,000個</text><rect x="20" y="60" width="64" height="40" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="84" y="60" width="336" height="40" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="252" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">生産 4,200（求める数）</text><text x="52" y="120" text-anchor="middle" fill="var(--ink)">期首 800</text><text x="20" y="150" fill="var(--quiet)">出る・残す（販売 ＋ 期末）＝ 5,000個</text><rect x="20" y="158" width="320" height="40" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="340" y="158" width="80" height="40" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="180" y="184" text-anchor="middle" font-size="15" fill="var(--ink)">販売 4,000</text><text x="380" y="218" text-anchor="middle" fill="var(--ink)">期末 1,000</text><text x="220" y="248" text-anchor="middle" font-size="16" fill="var(--ink)">生産 ＝ 販売 ＋ 期末 − 期首</text></svg>`,
          caption: '期首にある 800個と作る分で、売る 4,000個と残す 1,000個をまかなう。足りない分が製造数量になる。'
        },
        {
          title: '在庫の方針（inventory policy）',
          list: ['「期末在庫は次の期の販売の20%」のように、次の期の販売に対する割合で決めることが多い', '「期末在庫は 1,000個」のように数量で決めることもある', '在庫を減らす計画なら、製造は販売より少なくなる'],
          after: '在庫を持つのは、売れる数が予想より増えても品切れにしないため。また、作る量を期ごとにならすためでもある。'
        },
        {
          title: '例題1: 四半期ごとの製造予算',
          example: {
            problem: 'Lumo Co の販売予算は Q1 4,000個、Q2 5,000個、Q3 6,000個、Q4 4,500個、翌年の Q1 5,000個。期末の製品在庫は、次の四半期の販売の20%にする。来年初めの在庫は 800個。四半期ごとの製造数量は？',
            steps: ['期末在庫: Q1 ＝ 5,000 × 20% ＝ 1,000、Q2 ＝ 6,000 × 20% ＝ 1,200、Q3 ＝ 4,500 × 20% ＝ 900、Q4 ＝ 5,000 × 20% ＝ 1,000', '期首在庫は前の期の期末: Q1 800、Q2 1,000、Q3 1,200、Q4 900', 'Q1: 4,000 ＋ 1,000 − 800 ＝ 4,200', 'Q2: 5,000 ＋ 1,200 − 1,000 ＝ 5,200', 'Q3: 6,000 ＋ 900 − 1,200 ＝ 5,700', 'Q4: 4,500 ＋ 1,000 − 900 ＝ 4,600'],
            answer: 'Q1 4,200個、Q2 5,200個、Q3 5,700個、Q4 4,600個（年間 19,700個）'
          }
        },
        {
          title: '製造予算の表と年間の確かめ',
          table: { caption: 'Lumo Co 製造予算（個）', head: ['四半期', '販売 ＋ 期末 − 期首', '製造'], rows: [['Q1', '4,000 ＋ 1,000 − 800', '4,200'], ['Q2', '5,000 ＋ 1,200 − 1,000', '5,200'], ['Q3', '6,000 ＋ 900 − 1,200', '5,700'], ['Q4', '4,500 ＋ 1,000 − 900', '4,600']], total: ['年間', '19,500 ＋ 1,000 − 800', '19,700'] },
          after: '年間の製造は「年間の販売 ＋ 年末の在庫 − 年初の在庫」で確かめられる。四半期ごとの期末在庫を全部足してはいけない。'
        },
        {
          title: '例題2: 不良品が出るとき',
          example: {
            problem: '来月は良品 4,800個が必要（在庫の増減を入れた後の数）。作った製品の4%は検査で不良品（defective units）になり、捨てる。何個作る必要があるか？',
            steps: ['良品は作った数の 96%（100% − 4%）', '作る数 × 0.96 ＝ 4,800', '作る数 ＝ 4,800 ÷ 0.96 ＝ 5,000個', '確かめ: 5,000 × 4% ＝ 200個が不良、残り 4,800個'],
            answer: '5,000個。4,800 × 1.04 ＝ 4,992個では、良品が約 4,792個しか残らず足りない'
          }
        },
        {
          title: 'なぜ？ 販売と製造の数は同じではない',
          paras: ['作ったその日に全部売れるわけではない。売れ行きは毎月ぶれるので、少し在庫を持って品切れを防ぐ。売れる季節の前には在庫を積み増し、売れない季節には減らす。', 'だから製造数量は「売る数」と「在庫をどれだけ増やすか・減らすか」で決まる。在庫が増える期は製造 > 販売、減る期は製造 < 販売になる。出した製造数量で、工場の能力（機械の時間や人手）を超えないかも確かめる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '期首と期末を逆にして「販売 ＋ 期首 − 期末」とする（例題1の Q1 が 3,800個になる）。「次の期の販売の20%」なのに、その期の販売にかける。不良品の率を ×1.04 で足す（÷ 0.96 が正しい）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['製造数量 ＝ 販売数量 ＋ 期末製品在庫 − 期首製品在庫（数量で作る）', '期末在庫は「次の期の販売の○%」が多い。ある期の期末は次の期の期首', '不良品が x% 出るなら、必要な良品 ÷（1 − x%）を作る']
        },
        {
          title: '英単語',
          words: [
            ['production budget', 'プロダクション バジェット', '製造予算（数量で作る）'],
            ['finished goods inventory', 'フィニッシュト グッズ インベントリー', '製品在庫'],
            ['opening / closing inventory', 'オープニング／クロージング インベントリー', '期首在庫／期末在庫'],
            ['inventory policy', 'インベントリー ポリシー', '在庫の方針'],
            ['defective units / rejects', 'ディフェクティブ ユニッツ／リジェクツ', '不良品'],
            ['production capacity', 'プロダクション キャパシティ', '生産能力']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted sales for May are 12,000 units. Opening inventory of finished goods is expected to be 2,000 units and closing inventory is planned to be 2,500 units. What is the budgeted production for May?', type: 'number', answer: 12500, unit: 'units', explain: '12,000 ＋ 2,500 − 2,000 ＝ 12,500個。在庫が500個増えるので、販売より500個多く作る。期首と期末を逆にすると 11,500個になり間違い。' },
        { q: 'A company needs 9,500 good units of finished product in a period. 5% of all units produced are found to be defective and are scrapped. There is no opening or closing inventory. How many units must be produced?', choices: ['9,975 units', '9,025 units', '10,000 units', '9,500 units'], answer: 2, explain: '良品は作った数の95%: 9,500 ÷ 0.95 ＝ 10,000個（不良 500個）。9,975 は 9,500 × 1.05 で、作った 9,975個の5%（約499個）が不良になると良品が足りない。9,025 は 9,500 × 0.95 で、向きが逆。9,500 は不良品を無視している。' },
        { q: '月末の製品在庫は、翌月の販売数量の10%にする。販売予算は6月 6,000個、7月 7,000個、8月 8,000個。6月末の在庫もこの方針どおり。7月の製造数量は？', type: 'number', answer: 7100, unit: '個', explain: '7月の期首（＝6月末）: 7,000 × 10% ＝ 700個。7月の期末: 8,000 × 10% ＝ 800個。製造: 7,000 ＋ 800 − 700 ＝ 7,100個。7月末の在庫を7月の販売の10%（700個）にすると 7,000個になり間違い。' },
        { q: '1年間で製品在庫を減らす計画のとき、正しいものは？', choices: ['製造数量は販売数量より多い', '製造数量は販売数量より少ない', '製造数量と販売数量は同じになる', '販売数量が、製造数量に合わせて減る'], answer: 1, explain: '製造 ＝ 販売 ＋ 期末 − 期首。在庫を減らす（期末 < 期首）と、その差だけ製造が販売より少なくなる。売る数は市場で決まるので、製造に合わせて販売が減るわけではない。' },
        { q: 'Budgeted sales for next year are 50,000 units. Opening inventory of finished goods is 4,000 units. The company plans to reduce finished goods inventory by 10% by the end of the year. What is the budgeted production for the year?', choices: ['50,400 units', '50,000 units', '53,600 units', '49,600 units'], answer: 3, explain: '期末在庫: 4,000 × 90% ＝ 3,600個。製造: 50,000 ＋ 3,600 − 4,000 ＝ 49,600個。50,400 は期首と期末を逆にした答え。50,000 は在庫の変化を無視。53,600 は期首在庫を引き忘れた答え。' }
      ]
    },
    {
      id: 'M101',
      no: 101,
      title: '材料の使用量予算と購入予算',
      goal: '製造予算から、材料の使用量予算と購入予算（数量と金額）を作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(c)'],
      slides: [
        {
          title: 'カレー屋の玉ねぎ',
          paras: ['カレー屋が明日100皿作る。1皿に玉ねぎを0.2個使うので、使う量は20個。', '明後日のために5個は残しておきたい。冷蔵庫には今8個ある。買う数は 20 ＋ 5 − 8 ＝ 17個。「使う量」と「買う量」は別の数字になる。']
        },
        {
          title: '材料の2つの予算',
          list: ['材料使用量予算（materials usage budget）: 製造に使う材料の量', '材料購入予算（materials purchases budget）: 仕入れる材料の量と金額'],
          formula: '購入量 ＝ 使用量 ＋ 期末材料在庫 − 期首材料在庫',
          after: '使用量 ＝ 製造数量 × 1個あたりの材料の量。購入額 ＝ 購入量 × 材料の単価。'
        },
        {
          title: '材料の予算の流れ',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="材料の予算の流れ。製造数量に1個あたりの材料をかけて使用量、在庫を足し引きして購入量、単価をかけて購入額。購入量を強調" font-size="15"><rect x="20" y="20" width="170" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="46" text-anchor="middle" fill="var(--ink)">製造数量（個）</text><line x1="105" y1="60" x2="105" y2="82" stroke="var(--edge)" stroke-width="1.5"/><polygon points="99,82 111,82 105,90" fill="var(--edge)"/><text x="125" y="80" font-size="14" fill="var(--quiet)">× 1個あたりの材料 kg</text><rect x="20" y="90" width="170" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="116" text-anchor="middle" fill="var(--ink)">使用量（kg）</text><text x="210" y="116" font-size="14" fill="var(--quiet)">→ 製造原価に使う</text><line x1="105" y1="130" x2="105" y2="152" stroke="var(--edge)" stroke-width="1.5"/><polygon points="99,152 111,152 105,160" fill="var(--edge)"/><text x="125" y="150" font-size="14" fill="var(--quiet)">＋ 期末在庫 − 期首在庫</text><rect x="20" y="160" width="170" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="105" y="186" text-anchor="middle" font-weight="600" fill="var(--ink)">購入量（kg）</text><line x1="105" y1="200" x2="105" y2="222" stroke="var(--edge)" stroke-width="1.5"/><polygon points="99,222 111,222 105,230" fill="var(--edge)"/><text x="125" y="220" font-size="14" fill="var(--quiet)">× 1kg の単価</text><rect x="20" y="230" width="170" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="256" text-anchor="middle" fill="var(--ink)">購入額（$）</text><text x="210" y="256" font-size="14" fill="var(--quiet)">→ 支払い（現金予算）へ</text></svg>`,
          caption: '材料在庫は kg などの材料の単位で数える。製品在庫（個）とは別のもの。'
        },
        {
          title: '例題1: 購入予算を作る',
          example: {
            problem: 'Lumo Co の製造予算は Q1 4,200個、Q2 5,200個、Q3 5,700個。ライト1個に材料 M を 2kg 使う。期末の材料在庫は、次の四半期の使用量の25%にする。来年初めの材料在庫は 2,100kg。材料 M は1kg $3。Q1 と Q2 の購入予算（kg と $）は？',
            steps: ['使用量: Q1 4,200 × 2 ＝ 8,400kg、Q2 5,200 × 2 ＝ 10,400kg、Q3 5,700 × 2 ＝ 11,400kg', '期末材料在庫: Q1 ＝ 10,400 × 25% ＝ 2,600kg、Q2 ＝ 11,400 × 25% ＝ 2,850kg', 'Q1 購入量: 8,400 ＋ 2,600 − 2,100 ＝ 8,900kg → × $3 ＝ $26,700', 'Q2 購入量: 10,400 ＋ 2,850 − 2,600 ＝ 10,650kg → × $3 ＝ $31,950'],
            answer: 'Q1 8,900kg（$26,700）、Q2 10,650kg（$31,950）'
          }
        },
        {
          title: '材料の予算の表',
          table: { caption: 'Lumo Co 材料 M の予算', head: ['項目', 'Q1', 'Q2'], rows: [['製造数量（個）', '4,200', '5,200'], ['使用量 kg（× 2kg）', '8,400', '10,400'], ['＋ 期末材料在庫 kg', '2,600', '2,850'], ['− 期首材料在庫 kg', '(2,100)', '(2,600)'], ['購入量 kg', '8,900', '10,650']], total: ['購入額 $（× $3）', '26,700', '31,950'] },
          after: 'Q2 の期首 2,600kg は、Q1 の期末と同じ数字。'
        },
        {
          title: '例題2: 加工中に材料が減るとき',
          example: {
            problem: 'ライト1個の完成品には、材料 M が 1.9kg 入っている。加工中に、投入した材料の5%が削りくずとして失われる（wastage）。5,000個作るときの材料の使用量は？',
            steps: ['投入した材料のうち、製品に残るのは95%', '1個に投入する量 × 0.95 ＝ 1.9kg', '1個に投入する量 ＝ 1.9 ÷ 0.95 ＝ 2kg', '使用量: 5,000 × 2 ＝ 10,000kg'],
            answer: '10,000kg。1.9 × 1.05 ＝ 1.995kg で計算すると 9,975kg になり、足りない'
          }
        },
        {
          title: 'なぜ？ 使用量と購入量を分ける',
          paras: ['使用量は「製品を作るのに何kg使うか」で、製造原価の計算に使う。購入量は「何kg仕入れるか」で、仕入先への支払い（現金予算）に使う。', '2つの差は材料在庫の増減だ。材料が切れると工場のラインが止まるので、次の期の分を少し先に持っておく。持ちすぎると保管の費用がかかり、現金も寝てしまう。だから「次の期の使用量の○%」のように方針を決める。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '販売数量に1個あたりの材料をかける（材料は作る数で使うので、製造数量にかける）。製品在庫（個）と材料在庫（kg）を混ぜる。使用量に単価をかけて購入額とする（Q1 なら $25,200 になり、在庫の増加 500kg × $3 ＝ $1,500 が抜ける）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['使用量 ＝ 製造数量 × 1個あたりの材料（減損があれば ÷（1 − 減損率））', '購入量 ＝ 使用量 ＋ 期末材料在庫 − 期首材料在庫', '購入額 ＝ 購入量 × 単価。製品在庫と材料在庫は分けて考える']
        },
        {
          title: '英単語',
          words: [
            ['materials usage budget', 'マテリアルズ ユーセージ バジェット', '材料使用量予算'],
            ['materials purchases budget', 'マテリアルズ パーチェシズ バジェット', '材料購入予算'],
            ['raw materials inventory', 'ロー マテリアルズ インベントリー', '材料在庫'],
            ['wastage', 'ウェイステージ', '加工中の材料の減り（減損）'],
            ['direct materials', 'ダイレクト マテリアルズ', '直接材料'],
            ['price per kg', '', '1kgあたりの単価']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted production is 3,000 units. Each unit requires 4 kg of material, which costs $5 per kg. Opening inventory of material is 1,500 kg and closing inventory is planned to be 2,000 kg. What is the material purchases budget in $?', type: 'number', answer: 62500, unit: '$', explain: '使用量: 3,000 × 4 ＝ 12,000kg。購入量: 12,000 ＋ 2,000 − 1,500 ＝ 12,500kg。購入額: 12,500 × $5 ＝ $62,500。使用量に単価をかけた $60,000 は、在庫の増加分を入れ忘れた答え。' },
        { q: 'Each unit of product Z contains 3.6 kg of material in the finished product. 10% of material input is lost in production. Budgeted production is 2,000 units. What is the budgeted material usage?', choices: ['7,920 kg', '7,200 kg', '6,480 kg', '8,000 kg'], answer: 3, explain: '製品に残るのは投入量の90%: 1個に投入する量 ＝ 3.6 ÷ 0.9 ＝ 4kg。使用量 ＝ 2,000 × 4 ＝ 8,000kg。7,920kg は 3.6 × 1.1 で計算した答え。7,200kg は減損を無視。6,480kg は 0.9 をかけて向きを逆にした答え。' },
        { q: '製品1個に材料を3kg使う。製造予算は1月 1,000個、2月 1,200個。月末の材料在庫は翌月の使用量の20%にする方針で、1月初めの在庫もこの方針どおり。1月の材料購入量は？', type: 'number', answer: 3120, unit: 'kg', explain: '使用量: 1月 3,000kg、2月 3,600kg。1月初めの在庫: 3,000 × 20% ＝ 600kg。1月末: 3,600 × 20% ＝ 720kg。購入量: 3,000 ＋ 720 − 600 ＝ 3,120kg。' },
        { q: '材料使用量予算を作るとき、出発点にする数字は？', choices: ['販売予算の販売数量', '製造予算の製造数量', '材料購入予算の購入量', '現金予算の支払額'], answer: 1, explain: '材料は作る数に応じて使うので、製造数量 × 1個あたりの材料。販売数量には製品在庫の増減が入っていない。購入量と支払額は使用量から後で作るもので、順番が逆。' },
        { q: 'During a period, the inventory of raw materials is planned to fall. Which of the following statements is correct?', choices: ['Material purchases will be more than material usage', 'Material purchases will equal material usage', 'Material purchases will be less than material usage', 'Material usage will fall'], answer: 2, explain: '購入量 ＝ 使用量 ＋ 期末 − 期首。材料在庫が減る（期末 < 期首）と、購入量は使用量より少ない。在庫の取り崩しで使用量の一部をまかなう。使用量は製造数量で決まり、材料在庫の増減では変わらない。' },
        { q: 'Material M is used in two products. Each unit of product X uses 2 kg and each unit of product Y uses 3 kg. Budgeted production is 1,000 units of X and 500 units of Y. Opening inventory of M is 800 kg and closing inventory is planned to be 600 kg. What is the budgeted purchase quantity of material M?', choices: ['3,700 kg', '3,300 kg', '3,500 kg', '7,500 kg'], answer: 1, explain: '使用量は製品ごとに出して足す: X 1,000 × 2 ＝ 2,000kg、Y 500 × 3 ＝ 1,500kg、合計 3,500kg。購入量: 3,500 ＋ 600 − 800 ＝ 3,300kg（在庫が減るので使用量より少ない）。3,700kg は期首と期末を逆にした答え。3,500kg は使用量のまま。7,500kg は合計の個数 1,500 に合計の kg 5 をかけた間違い。' }
      ]
    },
    {
      id: 'M102',
      no: 102,
      title: '労務費予算',
      goal: '製造予算から必要な作業時間と労務費を計算し、遊休時間・残業・能率を入れられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(c)'],
      slides: [
        {
          title: '待ち時間にも時給は払う',
          paras: ['カフェでアルバイトを1日8時間雇う。客が来ない時間もあるので、実際に手を動かすのは7時間ほどだ。それでも時給は8時間分払う。', 'だから「仕事に何時間かかるか」だけで人件費を見積もると、足りなくなる。払う時間と、実際に働く時間を分けて考える。']
        },
        {
          title: '労務費予算（labour budget）とは',
          paras: ['製造に必要な直接作業の時間（direct labour hours）と、その費用（$）の計画。製造予算の数量から作る。'],
          formula: '必要な作業時間 ＝ 製造数量 × 1個あたりの標準時間',
          after: '労務費 ＝ 払う時間 × 時給（hourly rate）。必要な人数 ＝ 必要な時間 ÷ 1人が働ける時間、も出せる。'
        },
        {
          title: '例題1: 遊休時間を入れる',
          example: {
            problem: 'Lumo Co は Q2 に 5,200個作る。ライト1個の直接作業は 0.6時間（実際に働く時間）。払った時間の4%は遊休時間（idle time）になると見込む。時給は $16。Q2 の労務費予算は？',
            steps: ['実際に働く時間: 5,200 × 0.6 ＝ 3,120時間', '払う時間のうち、働くのは96%（100% − 4%）', '払う時間: 3,120 ÷ 0.96 ＝ 3,250時間', '遊休時間: 3,250 × 4% ＝ 130時間（3,250 − 3,120 と一致）', '労務費: 3,250 × $16 ＝ $52,000'],
            answer: '払う時間 3,250時間、労務費 $52,000'
          }
        },
        {
          title: '払う時間の中身',
          svg: `<svg viewBox="0 0 440 210" role="img" aria-label="払う時間3,250時間は、働く時間3,120時間と遊休時間130時間に分かれる。遊休時間を強調" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">Q2: 払う時間の中身</text><rect x="20" y="44" width="384" height="44" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="404" y="44" width="16" height="44" rx="2" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="212" y="72" text-anchor="middle" font-size="15" fill="var(--ink)">働く時間 3,120（96%）</text><text x="420" y="110" text-anchor="end" fill="var(--ink)">遊休時間 130（4%）</text><line x1="20" y1="126" x2="420" y2="126" stroke="var(--edge)" stroke-width="1.25"/><line x1="20" y1="120" x2="20" y2="132" stroke="var(--edge)" stroke-width="1.25"/><line x1="420" y1="120" x2="420" y2="132" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="152" text-anchor="middle" font-size="15" fill="var(--ink)">払う時間 3,250（100%）× $16 ＝ $52,000</text><text x="220" y="190" text-anchor="middle" font-size="16" fill="var(--ink)">払う時間 ＝ 働く時間 ÷ 0.96</text></svg>`,
          caption: '遊休時間は「払った時間（hours paid）の何%か」で示されることが多い。そのときは ÷ 0.96 のように割る。'
        },
        {
          title: '遊休時間（idle time）とは',
          list: ['機械の故障、材料待ち、仕事が来ない時間など、賃金を払っているのに作業できない時間', '予算では、避けられない分を見込んで「払った時間の○%」と置くことが多い', '「働いた時間（hours worked）の○%」と書かれていたら、働く時間 ×（1 ＋ ○%）でよい'],
          note: { kind: 'tip', text: '問題文で、何に対する%かを必ず確かめる。払った時間に対してなら割る。働いた時間に対してならかける。' }
        },
        {
          title: '例題2: 残業がある月',
          example: {
            problem: 'ある部門は来月 1,500個作る。1個 2時間で、必要な時間は 3,000時間。従業員は15人で、1人の基本時間は月160時間。基本の時給は $15、残業は基本の1.5倍（time and a half）。遊休時間はないものとする。労務費予算は？',
            steps: ['基本時間: 15人 × 160時間 ＝ 2,400時間', '残業時間: 3,000 − 2,400 ＝ 600時間', '基本時間の賃金: 2,400 × $15 ＝ $36,000', '残業の賃金: 600 × $15 × 1.5 ＝ $13,500', '合計: $36,000 ＋ $13,500 ＝ $49,500', '別の見方: 全部の時間 3,000 × $15 ＝ $45,000 ＋ 残業の割増分 600 × $7.50 ＝ $4,500 ＝ $49,500', '原価に分けるとき: 直接労務費は $45,000。割増分 $4,500 は、特定の注文のための残業でなければ製造間接費に入れる（払う総額は $49,500 のまま）'],
            answer: '$49,500'
          }
        },
        {
          title: '能率と基本給の保証',
          list: ['能率（efficiency）が80%と見込むなら、標準より長くかかる: 標準 2,000時間 ÷ 0.8 ＝ 2,500時間', '基本時間の賃金が保証されている（guaranteed）なら、必要な時間が少なくても基本時間分は払う（必要 2,000時間でも、保証 2,400時間 × $15 ＝ $36,000）', '残業の割増分（overtime premium）は、特定の注文のための残業でなければ、ふつう製造間接費（間接労務費）として扱う']
        },
        {
          title: 'なぜ？ 払う時間と働く時間を分ける',
          paras: ['人件費は大きな費用だ。必要な時間を少なく見積もると、納期に間に合わず残業代がふくらむ。多く見積もると、人が余って遊休時間が増える。', '労務費予算で「何時間・何人必要か」が分かると、採用・残業・外注を前もって決められる。2つを分けるのは、払うお金は払う時間で決まり、作れる量は働く時間で決まるからだ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '払った時間の4%が遊休なのに、3,120 × 1.04 ＝ 3,244.8時間とする（÷ 0.96 が正しい）。残業時間に割増分の $7.50 だけをかけて、基本の $15 を忘れる。販売数量から時間を出す（製造数量を使う）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['働く時間 ＝ 製造数量 × 1個の標準時間', '払った時間の x% が遊休なら、払う時間 ＝ 働く時間 ÷（1 − x%）。労務費 ＝ 払う時間 × 時給', '基本時間を超えた分は残業。残業の賃金 ＝ 残業時間 × 時給 ×（1 ＋ 割増率）']
        },
        {
          title: '英単語',
          words: [
            ['labour budget', 'レイバー バジェット', '労務費予算（時間と金額）'],
            ['direct labour hours', 'ダイレクト レイバー アワーズ', '直接作業時間'],
            ['idle time', 'アイドル タイム', '遊休時間'],
            ['hours paid / hours worked', 'アワーズ ペイド／ワークト', '払った時間／実際に働いた時間'],
            ['overtime premium', 'オーバータイム プレミアム', '残業の割増分'],
            ['time and a half', 'タイム アンド ア ハーフ', '時給の1.5倍'],
            ['efficiency', 'エフィシェンシー', '能率'],
            ['hourly rate', 'アワリー レート', '時給']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted production is 4,000 units. Each unit takes 1.8 hours of direct labour. Idle time is expected to be 10% of total hours paid. The labour rate is $12 per hour. What is the budgeted direct labour cost?', type: 'number', answer: 96000, unit: '$', explain: '働く時間: 4,000 × 1.8 ＝ 7,200時間。払った時間の10%が遊休なので、払う時間 ＝ 7,200 ÷ 0.9 ＝ 8,000時間。労務費: 8,000 × $12 ＝ $96,000。7,200 × 1.1 ＝ 7,920時間で計算すると $95,040 になり、少なすぎる。' },
        { q: 'A department requires 5,000 direct labour hours next month. It has 25 employees who each work 180 basic hours per month at $20 per hour. Any extra hours are worked as overtime, paid at time and a half. What is the budgeted labour cost?', choices: ['$100,000', '$105,000', '$95,000', '$150,000'], answer: 1, explain: '基本時間: 25 × 180 ＝ 4,500時間 → 4,500 × $20 ＝ $90,000。残業: 5,000 − 4,500 ＝ 500時間 × $30 ＝ $15,000。合計 $105,000。$100,000 は全部を基本の時給で計算。$95,000 は残業に割増分の $10 だけをかけた答え。$150,000 は全部の時間を残業の時給で計算した答え。' },
        { q: '来月、実際に働く時間は 2,850時間と見込む。遊休時間は払った時間の5%になる。払う時間は？', type: 'number', answer: 3000, unit: '時間', explain: '払う時間の95%が働く時間なので、2,850 ÷ 0.95 ＝ 3,000時間（遊休 150時間 ＝ 3,000 × 5%）。2,850 × 1.05 ＝ 2,992.5時間は間違い。' },
        { q: 'Budgeted production is 1,000 units with a standard time of 2 hours per unit. The workforce is expected to work at 80% efficiency. How many labour hours should be budgeted?', choices: ['1,600 hours', '2,400 hours', '2,000 hours', '2,500 hours'], answer: 3, explain: '標準時間: 1,000 × 2 ＝ 2,000時間。能率80%なので、標準の時間の仕事に 1 ÷ 0.8 倍かかる: 2,000 ÷ 0.8 ＝ 2,500時間。1,600時間は 0.8 をかけた答えで、能率が低いのに時間が短くなってしまう。2,400時間は ×1.2 で、割合の取り方が違う。2,000時間は能率を無視している。' },
        { q: '遊休時間は「働いた時間の10%」と見込む。働く時間が 1,000時間なら、払う時間は？', choices: ['1,111時間', '1,000時間', '1,100時間', '900時間'], answer: 2, explain: '「働いた時間の10%」なので、遊休 ＝ 1,000 × 10% ＝ 100時間、払う時間は 1,100時間。1,111時間は「払った時間の10%」のときの計算（1,000 ÷ 0.9）。何に対する%かで計算が変わる。' },
        { q: 'Employees are guaranteed a basic wage for 2,000 hours per month at $14 per hour. Next month only 1,700 hours of work are required. What is the budgeted labour cost for the month?', choices: ['$28,000', '$23,800', '$4,200', '$32,200'], answer: 0, explain: '基本給が保証されているので、働く時間が 1,700時間でも 2,000時間分を払う: 2,000 × $14 ＝ $28,000。$23,800 は必要な時間だけで計算した答え（1,700 × $14）。$4,200 は使わない 300時間の分だけ。$32,200 は 2,000 ＋ 300 時間で計算した答え。' }
      ]
    },
    {
      id: 'M103',
      no: 103,
      title: '変動製造間接費と固定製造間接費の予算',
      goal: '活動量から変動製造間接費の予算を、総額で固定製造間接費の予算を作り、予定配賦率まで出せるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(c)'],
      slides: [
        {
          title: 'スマホ代の基本料と通信料',
          paras: ['スマホ代は、毎月決まった基本料と、使った分だけかかる料金に分かれる。来月の予算は「基本料 ＋ 使う量 × 単価」で見積もる。', '工場の製造間接費も同じ。機械の電力のように動かした分だけ増える費用と、工場の家賃や監督者の給料のように毎月同じ費用に分けて、予算を作る。']
        },
        {
          title: '製造間接費の予算の分け方',
          table: { caption: '種類と作り方', head: ['種類', '例', '予算の作り方'], rows: [['変動製造間接費（variable production overhead）', '機械の電力、消耗品', '活動量 × 1時間あたりの率'], ['固定製造間接費（fixed production overhead）', '工場の家賃、保険料、監督者の給料、減価償却費', '期間の総額（製造量で変えない）'], ['準変動費（semi-variable cost）', '基本料つきの電気代', '高低点法で a ＋ bx に分ける']] }
        },
        {
          title: '変動製造間接費の予算',
          formula: '変動製造間接費 ＝ 活動量（機械時間・作業時間）× 1時間あたりの率',
          paras: ['活動量は製造予算から出す。例えば 製造数量 × 1個あたりの機械時間（machine hours）。'],
          note: { kind: 'tip', text: '作業時間を基準にするときは、ふつう実際に働いた時間（遊休時間を除く）を使う。止まっている間は、電力などの変動費がかからないから。' }
        },
        {
          title: '例題1: Q2 の製造間接費',
          example: {
            problem: 'Lumo Co は Q2 に 5,200個作る。ライト1個に機械を 0.25時間使う。変動製造間接費は機械1時間 $8。固定製造間接費は年 $78,800 で、毎四半期同じ額かかる。そのうち減価償却費は四半期 $5,000。Q2 の製造間接費の予算は？',
            steps: ['機械時間: 5,200 × 0.25 ＝ 1,300時間', '変動製造間接費: 1,300 × $8 ＝ $10,400', '固定製造間接費: $78,800 ÷ 4 ＝ $19,700（製造量が多い Q2 でも同じ額）', '合計: $10,400 ＋ $19,700 ＝ $30,100', '現金で払う固定費は $19,700 − $5,000 ＝ $14,700（減価償却費は現金が出ていかない）'],
            answer: '$30,100（変動 $10,400、固定 $19,700）'
          }
        },
        {
          title: 'Q2 の製造原価予算をまとめる',
          table: { caption: 'Lumo Co Q2（5,200個）', head: ['項目', '計算', '$'], rows: [['直接材料費', '10,400kg × $3', '31,200'], ['直接労務費', '3,250時間 × $16', '52,000'], ['変動製造間接費', '1,300時間 × $8', '10,400'], ['固定製造間接費', '$78,800 ÷ 4', '19,700']], total: ['製造原価', '', '113,300'] },
          after: '材料は使用量 10,400kg に単価をかける（購入量ではない）。これまでの予算がここで1つになり、次のユニットの予算損益計算書につながる。'
        },
        {
          title: '例題2: 準変動費を高低点法で',
          example: {
            problem: '製造間接費は、機械 1,000時間の月に $23,000、1,600時間の月に $29,000 だった。来月の予算は機械 1,300時間。高低点法（high-low method）で、製造間接費の予算は？',
            steps: ['変動費率 b ＝（$29,000 − $23,000）÷（1,600 − 1,000）＝ $6,000 ÷ 600 ＝ 1時間 $10', '固定費 a ＝ $23,000 − 1,000 × $10 ＝ $13,000', '確かめ: $13,000 ＋ 1,600 × $10 ＝ $29,000', '来月: $13,000 ＋ 1,300 × $10 ＝ $26,000'],
            answer: '$26,000（固定 $13,000 ＋ 変動 $13,000）'
          }
        },
        {
          title: '例題3: 予算から予定配賦率を出す',
          example: {
            problem: 'Lumo Co の年間の製造予算は 19,700個、機械時間は1個 0.25時間。固定製造間接費の年間予算は $78,800。機械1時間あたりと、1個あたりの予定配賦率は？',
            steps: ['予算の機械時間: 19,700 × 0.25 ＝ 4,925時間', '機械1時間あたり: $78,800 ÷ 4,925 ＝ $16', '1個あたり: $78,800 ÷ 19,700 ＝ $4（$16 × 0.25 と一致）', '注意: 率は年間の予算で1つ決める。Q2 は 5,200個 × $4 ＝ $20,800 が製品に配賦され、四半期の予算 $19,700 より $1,100 多くなる。年間では 19,700個 × $4 ＝ $78,800 で一致する'],
            answer: '機械1時間 $16、1個 $4。予算の総額 ÷ 予算の活動量'
          }
        },
        {
          title: 'なぜ？ 変動と固定を分ける',
          paras: ['全部を「1個あたり $X」で予算にすると、作る数が増えたとき固定費まで増える計算になる。でも工場の家賃は、ライトを1,000個多く作っても変わらない。作る数が減っても減らない。', '変動費は活動量で、固定費は総額で予算を作ると、作る数が変わってもすぐ正しい予算に直せる。これが後で学ぶ変動予算（flexible budget）と差異分析の土台になる。製品原価に使う予定配賦率も、この予算から決まる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '固定製造間接費を製造数量の伸びに合わせて増やす（関係範囲の中では変わらない。能力を超えて設備を増やすときだけ段階的に増える）。変動費率を製造数量にかける（機械時間 1,300 にかける）。現金予算に減価償却費を入れる（現金は出ていかない）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['変動製造間接費 ＝ 活動量（機械時間・作業時間）× 変動費率', '固定製造間接費は期間の総額で予算を作る。製造量が増えても変わらない（段階的に増える場合を除く）', '予定配賦率 ＝ 予算の固定製造間接費 ÷ 予算の活動量']
        },
        {
          title: '英単語',
          words: [
            ['variable production overhead', 'バリアブル プロダクション オーバーヘッド', '変動製造間接費'],
            ['fixed production overhead', 'フィックスト プロダクション オーバーヘッド', '固定製造間接費'],
            ['semi-variable cost', 'セミバリアブル コスト', '準変動費'],
            ['high-low method', 'ハイロー メソッド', '高低点法'],
            ['machine hours', 'マシン アワーズ', '機械時間'],
            ['pre-determined absorption rate', '', '予定配賦率（予算の数字で決める）'],
            ['depreciation (non-cash)', 'ディプリシエーション', '減価償却費（現金が出ていかない費用）'],
            ['step cost / relevant range', 'ステップ コスト／レレバント レンジ', '段階的に増える固定費／関係範囲']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted production is 6,000 units. Each unit requires 0.5 machine hours. Variable production overhead is $9 per machine hour. What is the budgeted variable production overhead?', type: 'number', answer: 27000, unit: '$', explain: '機械時間: 6,000 × 0.5 ＝ 3,000時間。変動製造間接費: 3,000 × $9 ＝ $27,000。製造数量に $9 をかけると $54,000 になり、2倍になってしまう。' },
        { q: 'Total production overhead costs were $41,000 when 8,000 machine hours were worked and $50,000 when 11,000 machine hours were worked. Using the high-low method, what is the budgeted production overhead for 10,000 machine hours?', type: 'number', answer: 47000, unit: '$', explain: 'b ＝（$50,000 − $41,000）÷（11,000 − 8,000）＝ $3。a ＝ $41,000 − 8,000 × $3 ＝ $17,000。10,000時間: $17,000 ＋ 10,000 × $3 ＝ $47,000。' },
        { q: '来年の製造数量が10%増える予算になった。工場の能力の範囲内である。工場の家賃などの固定製造間接費の予算はどうする？', choices: ['製造数量と同じく10%増やす', '1個あたりの固定費を同じにするため、総額を10%増やす', '今年の予定どおりの総額のまま（製造数量に合わせて増やさない）', '製造数量が増えるので、総額を10%減らす'], answer: 2, explain: '固定費は関係範囲（能力の範囲内）では、作る数が変わっても総額は変わらない。変わるのは1個あたりの固定費で、作る数が増えると下がる。能力を超えて設備を増やすときだけ、段階的に増える。' },
        { q: 'Budgeted fixed production overheads are $120,000. Budgeted production is 24,000 units, each taking 2 machine hours. What is the pre-determined fixed overhead absorption rate per machine hour?', choices: ['$5.00', '$2.50', '$0.40', '$10.00'], answer: 1, explain: '予算の機械時間: 24,000 × 2 ＝ 48,000時間。配賦率: $120,000 ÷ 48,000 ＝ 1時間 $2.50。$5.00 は1個あたり（$120,000 ÷ 24,000）。$0.40 は割り算が逆。$10.00 は個数を2で割ってしまった答え（$120,000 ÷ 12,000）。' },
        { q: '固定製造間接費の予算は四半期 $30,000 で、その中に機械の減価償却費 $8,000 が入っている。現金予算に入れる、固定製造間接費の四半期の支払額は？', type: 'number', answer: 22000, unit: '$', explain: '減価償却費は現金が出ていかない費用なので引く: $30,000 − $8,000 ＝ $22,000。予算損益計算書の費用としては $30,000 全部が入る。' },
        { q: 'Fixed production overheads are budgeted at $60,000 for output of up to 10,000 units. If output is above 10,000 units, an extra supervisor is needed at a cost of $9,000. Budgeted output is 12,000 units. What is the budgeted fixed production overhead?', type: 'number', answer: 69000, unit: '$', explain: '12,000個は 10,000個を超えるので、監督者の分だけ段階的に増える（step cost）: $60,000 ＋ $9,000 ＝ $69,000。数量に比例させて $60,000 × 12,000 ÷ 10,000 ＝ $72,000 とするのは間違い。固定費は数量に比例しない。' }
      ]
    }
  ],
  cards: [
    { id: 'M099-1', lesson: 'M099', q: '販売予算の金額の式は？', a: '販売数量 × 1個の売価（製品ごと・期間ごとに作る）' },
    { id: 'M099-2', lesson: 'M099', q: 'なぜ販売予算をふつう最初に作る？', a: '販売が主要予算要因で、ほかの予算は販売数量から順に作るから' },
    { id: 'M099-3', lesson: 'M099', q: '乗法モデルの予測で販売数量を出すには？', a: '傾向値 × 季節変動の指数（例 4,100 × 1.2 ＝ 4,920個）' },
    { id: 'M099-4', lesson: 'M099', q: '市場規模から販売数量を見積もるには？', a: '市場全体の数量 × 自社のシェア' },
    { id: 'M099-5', lesson: 'M099', q: '期の途中から値上げするときの注意は？', a: '値上げが始まる期からだけ新しい売価をかける' },
    { id: 'M100-1', lesson: 'M100', q: '製造予算の式は？', a: '製造数量 ＝ 販売数量 ＋ 期末製品在庫 − 期首製品在庫' },
    { id: 'M100-2', lesson: 'M100', q: '期末在庫が「次の期の販売の20%」のとき、使う数字は？', a: '次の期の販売数量 × 20%。その期の期首は前の期の期末' },
    { id: 'M100-3', lesson: 'M100', q: '不良品が4%出る。良品 4,800個のために作る数は？', a: '4,800 ÷ 0.96 ＝ 5,000個' },
    { id: 'M100-4', lesson: 'M100', q: '製品在庫を減らす期は、製造と販売のどちらが多い？', a: '販売の方が多い（製造 < 販売）' },
    { id: 'M100-5', lesson: 'M100', q: '年間の製造数量の確かめ方は？', a: '年間の販売 ＋ 年末の在庫 − 年初の在庫' },
    { id: 'M101-1', lesson: 'M101', q: '材料使用量予算の式は？', a: '製造数量 × 1個あたりの材料の量' },
    { id: 'M101-2', lesson: 'M101', q: '材料購入予算（数量）の式は？', a: '使用量 ＋ 期末材料在庫 − 期首材料在庫' },
    { id: 'M101-3', lesson: 'M101', q: '投入量の5%が減損する。製品に 1.9kg 残すには1個に何kg投入する？', a: '1.9 ÷ 0.95 ＝ 2kg' },
    { id: 'M101-4', lesson: 'M101', q: '使用量と購入量は、それぞれ何に使う？', a: '使用量は製造原価、購入量は仕入と支払い（現金予算）' },
    { id: 'M101-5', lesson: 'M101', q: '材料の予算は、何の数量から始める？', a: '製造予算の製造数量（販売数量ではない）' },
    { id: 'M101-6', lesson: 'M101', q: '1つの材料を2つの製品で使うときの使用量は？', a: '製品ごとに 製造数量 × 1個の材料 を出して足す' },
    { id: 'M102-1', lesson: 'M102', q: '必要な作業時間の式は？', a: '製造数量 × 1個あたりの標準時間' },
    { id: 'M102-2', lesson: 'M102', q: '払った時間の10%が遊休。働く時間 900時間なら払う時間は？', a: '900 ÷ 0.9 ＝ 1,000時間' },
    { id: 'M102-3', lesson: 'M102', q: '遊休時間（idle time）とは？', a: '賃金を払っているのに作業できない時間（故障・材料待ちなど）' },
    { id: 'M102-4', lesson: 'M102', q: '残業が time and a half のとき、残業の賃金は？', a: '残業時間 × 時給 × 1.5' },
    { id: 'M102-5', lesson: 'M102', q: '能率80%と見込む。標準 2,000時間なら予算の時間は？', a: '2,000 ÷ 0.8 ＝ 2,500時間' },
    { id: 'M102-6', lesson: 'M102', q: '基本給の保証（guaranteed）があり、必要な時間が基本時間より少ないときの労務費は？', a: '基本時間分を払う（保証の時間 × 時給）' },
    { id: 'M103-1', lesson: 'M103', q: '変動製造間接費の予算の式は？', a: '活動量（機械時間・作業時間）× 変動費率' },
    { id: 'M103-2', lesson: 'M103', q: '製造数量が増えたとき、固定製造間接費の予算は？', a: '変わらない（能力を超えて段階的に増える場合を除く）' },
    { id: 'M103-3', lesson: 'M103', q: '高低点法の変動費率 b の式は？', a: '（最高の原価 − 最低の原価）÷（最高の活動量 − 最低の活動量）' },
    { id: 'M103-4', lesson: 'M103', q: '予定配賦率の式は？', a: '予算の固定製造間接費 ÷ 予算の活動量' },
    { id: 'M103-5', lesson: 'M103', q: '現金予算に減価償却費を入れる？', a: '入れない。現金が出ていかない費用だから' },
    { id: 'M103-6', lesson: 'M103', q: '段階的に増える固定費（step cost）の予算は？', a: '範囲を超えたときだけ1段分を足す。数量に比例させない' }
  ]
});
