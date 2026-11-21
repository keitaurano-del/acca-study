(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 104,
  part: 2,
  partTitle: '原価の分類と原価の動き',
  lessons: [
    {
      id: 'M012',
      no: 12,
      title: '変動費と固定費',
      goal: '活動量が変わったときの変動費と固定費の動きを、合計と1単位あたりの両方で説明し、計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(c)'],
      slides: [
        {
          title: '焼肉の会費、何人で割る？',
          paras: ['食べ放題は1人 3,000円。5人なら 15,000円、10人なら 30,000円。人数に比例して合計が増える。', '個室の部屋代は1部屋 10,000円。5人でも10人でも 10,000円のまま。でも1人あたりは 2,000円から 1,000円に下がる。人数が増えるほど、1人の負担が軽くなる。']
        },
        {
          title: '変動費（variable cost）と固定費（fixed cost）',
          list: ['変動費: 活動量（作る量・売る量・作業時間など）に比例して、合計が増える原価。1単位あたりは一定', '固定費: 一定の範囲の中では、活動量が変わっても合計が変わらない原価。1単位あたりは、活動量が増えるほど下がる'],
          after: '活動量（activity level）が変わったときに原価がどう変わるか。これを原価の動き方（cost behaviour）という。'
        },
        {
          title: 'たこ焼き屋で確かめる',
          paras: ['たこ焼き1パックの材料費（タコ・粉・ソース）は $2。店の家賃は月 $3,000。1,000パック売る月と 2,000パック売る月を比べる。'],
          table: { caption: '金額は $', head: ['項目', '1,000パック', '2,000パック'], rows: [['変動費（材料 $2）', '2,000', '4,000'], ['固定費（家賃）', '3,000', '3,000']], total: ['総原価', '5,000', '7,000'] },
          after: '1パックあたりの固定費は $3.00 から $1.50 に下がる。1パックあたりの総原価は、$5,000 ÷ 1,000 ＝ $5.00 から、$7,000 ÷ 2,000 ＝ $3.50 に下がる。'
        },
        {
          title: '合計と1単位あたりで、動きが逆になる',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="変動費と固定費の、合計と1パックあたりの動き" font-size="14"><text x="192" y="64" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">合計</text><text x="347" y="64" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">1パックあたり</text><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">1,000 → 2,000パックにすると</text><text x="65" y="124" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">変動費</text><text x="65" y="204" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">固定費</text><rect x="120" y="80" width="145" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="275" y="80" width="145" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="120" y="160" width="145" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="275" y="160" width="145" height="70" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="192" y="110" text-anchor="middle" fill="var(--ink)">量に比例して増える</text><text x="192" y="134" text-anchor="middle" font-size="12.5" fill="var(--quiet)">$2,000 → $4,000</text><text x="347" y="110" text-anchor="middle" fill="var(--ink)">一定</text><text x="347" y="134" text-anchor="middle" font-size="12.5" fill="var(--quiet)">$2 → $2</text><text x="192" y="190" text-anchor="middle" fill="var(--ink)">一定</text><text x="192" y="214" text-anchor="middle" font-size="12.5" fill="var(--quiet)">$3,000 → $3,000</text><text x="347" y="190" text-anchor="middle" font-weight="600" fill="var(--ink)">量が増えると下がる</text><text x="347" y="214" text-anchor="middle" font-size="12.5" fill="var(--ink)">$3.00 → $1.50</text><text x="220" y="258" text-anchor="middle" fill="var(--ink)">「合計」か「1単位あたり」かで答えが変わる</text></svg>`,
          caption: '固定費 $3,000 を 1,000パックで割ると $3.00、2,000パックで割ると $1.50。'
        },
        {
          title: 'どの原価がどちら？',
          table: { head: ['変動費の例', '固定費の例'], rows: [['直接材料費', '家賃・固定資産税（rates）'], ['出来高払い（piece rate）の賃金', '工場長・事務員の月給'], ['売上に応じた販売手数料', '保険料'], ['1個ごとに払うロイヤルティ', '定額法の減価償却費']] },
          after: '同じ減価償却費でも、機械の運転時間に応じて計算するなら変動費になる。名前ではなく「活動量と一緒に動くか」で決める。'
        },
        {
          title: 'なぜ？ 2つに分けて考える理由',
          paras: ['「もっと作ったら、原価はいくら？」に答えるため。変動費は量に合わせて増えるが、固定費は増えない。', '2,000パックの原価を「1,000パックの $5,000 × 2 ＝ $10,000」と見積もると、家賃を2回払う計算になり $3,000 多すぎる。予算・値決め・作るかやめるかの判断など、管理会計のほとんどがこの区別を土台にしている。']
        },
        {
          title: '「一定の範囲の中で」の意味',
          paras: ['固定費が一定なのは、関連範囲（relevant range）の中だけ。たこ焼き屋が月 10,000パック作ろうとすれば店が足りず、2店目の家賃がかかる。', 'また、固定費は短い期間で見たときの話。長い期間なら、店を移る・契約を変えるなどで家賃も変えられる。長期的には、すべての原価が変わりうる。']
        },
        {
          title: '例題: 今月と来月の原価',
          example: {
            problem: 'たこ焼き屋の材料費は1パック $2。家賃と店長の給料で、固定費は月 $6,000。今月は 3,000パック、来月は 4,000パック作る。それぞれの総原価と、1パックあたりの原価は？',
            steps: ['今月の変動費: $2 × 3,000 ＝ $6,000', '今月の総原価: $6,000 ＋ $6,000 ＝ $12,000。1パックあたり $12,000 ÷ 3,000 ＝ $4.00', '来月の変動費: $2 × 4,000 ＝ $8,000', '来月の総原価: $8,000 ＋ $6,000 ＝ $14,000。1パックあたり $14,000 ÷ 4,000 ＝ $3.50', '下がった $0.50 は、1パックあたりの固定費が $2.00 から $1.50 に下がった分'],
            answer: '今月 $12,000（1パック $4.00）、来月 $14,000（1パック $3.50）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「固定費は1単位あたりも一定」「変動費は1単位あたりが下がる」と逆に覚えやすい。合計で見るのか、1単位あたりで見るのかを必ず確かめる。また、ある量で出した1単位あたりの総原価に、別の量をかけて見積もらない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['変動費: 合計は活動量に比例、1単位あたりは一定', '固定費: 合計は一定（関連範囲の中）、1単位あたりは活動量が増えると下がる', '総原価 ＝ 固定費 ＋ 1単位の変動費 × 活動量']
        },
        {
          title: '英単語',
          words: [
            ['cost behaviour', 'コスト ビヘイビア', '原価の動き方'],
            ['variable cost', 'ヴァリアブル コスト', '変動費'],
            ['fixed cost', 'フィックスト コスト', '固定費'],
            ['activity level / level of activity', 'アクティビティ レベル', '活動量（生産量・販売量・時間など）'],
            ['relevant range', 'レレバント レンジ', '関連範囲（原価の動き方が変わらないと見てよい範囲）'],
            ['cost per unit', '', '1単位あたりの原価'],
            ['total cost', '', '総原価']
          ]
        }
      ],
      quiz: [
        { q: 'Within the relevant range, which of the following statements about fixed costs is correct as the level of activity increases?', choices: ['Total fixed cost stays the same and fixed cost per unit stays the same', 'Total fixed cost stays the same and fixed cost per unit falls', 'Total fixed cost rises and fixed cost per unit stays the same', 'Total fixed cost falls and fixed cost per unit rises'], answer: 1, explain: '合計は一定のまま、同じ金額をより多くの単位で割るので1単位あたりは下がる。1つ目は1単位あたりの動きを見落とした答え。3つ目は変動費の動き方。' },
        { q: 'As the level of activity increases, how do total variable cost and variable cost per unit behave?', choices: ['Total variable cost increases; variable cost per unit stays the same', 'Total variable cost stays the same; variable cost per unit falls', 'Total variable cost increases; variable cost per unit increases', 'Total variable cost increases; variable cost per unit falls'], answer: 0, explain: '変動費は1単位あたりが一定なので、合計は量に比例して増える。2つ目は固定費の動き方。4つ目は「1単位あたりが下がる」を固定費と混同した答え。' },
        { q: 'A business has fixed costs of $24,000 per month. What is the fixed cost per unit in a month in which 8,000 units are produced?', type: 'number', answer: 3, unit: '$', explain: '$24,000 ÷ 8,000 ＝ $3。生産量が 12,000 なら $2 になる。1単位あたりの固定費は量で変わる。' },
        { q: '材料費が1個 $5、固定費が月 $10,000 の工場。月 4,000個作ると、1個あたりの総原価はいくら？', type: 'number', answer: 7.5, unit: '$', explain: '総原価 ＝ $10,000 ＋ $5 × 4,000 ＝ $30,000。1個あたり $30,000 ÷ 4,000 ＝ $7.50。$5 だけにすると固定費を忘れている。' },
        { q: 'ふつう変動費として扱うのはどれ？', choices: ['本社の事務員の月給', '工場の火災保険料', '売上1件ごとに払う販売手数料', '定額法で計算する機械の減価償却費'], answer: 2, explain: '販売手数料は売上が増えるほど増える。月給・保険料・定額法の減価償却費は、量が変わっても合計が変わらない固定費。' }
      ]
    },
    {
      id: 'M013',
      no: 13,
      title: '階段状の固定費と準変動費',
      goal: '階段状の固定費と準変動費の動き方を説明し、ある活動量での金額を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(c)'],
      slides: [
        {
          title: 'タクシーは1台4人まで',
          paras: ['飲み会の帰り、タクシーは1台に4人まで。1〜4人なら1台分。5人になると2台目が必要で、料金が一気に2倍になる。', '4人までは人数が変わっても料金は同じ（固定費のよう）。でも人数がある線を越えると、段を1つ上がる。']
        },
        {
          title: '階段状の固定費（stepped fixed cost）',
          paras: ['ある範囲の中では一定で、活動量がある水準を越えると一段上がる固定費。step cost とも呼ぶ。'],
          list: ['監督者の給料: 監督者1人で見られる作業員の数が決まっている', '倉庫の家賃: 倉庫がいっぱいになると2つ目を借りる', '機械のリース料: 1台で作れる量を越えると2台目が要る']
        },
        {
          title: 'たこ焼き工場の監督者',
          paras: ['焼き場の監督者1人で、月 2,000パックまで見られる。監督者の給料は1人 月 $3,000。'],
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="監督者の給料は2000パックごとに3000ドルずつ上がる階段になる" font-size="14"><text x="20" y="40" fill="var(--ink)">監督者の給料</text><line x1="70" y1="50" x2="70" y2="220" stroke="var(--ink)" stroke-width="1.5"/><line x1="70" y1="220" x2="415" y2="220" stroke="var(--ink)" stroke-width="1.5"/><line x1="70" y1="170" x2="180" y2="170" stroke="var(--ink)" stroke-width="3"/><line x1="180" y1="120" x2="290" y2="120" stroke="var(--ink)" stroke-width="3"/><line x1="290" y1="70" x2="400" y2="70" stroke="var(--ink)" stroke-width="3"/><line x1="180" y1="170" x2="180" y2="120" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3"/><line x1="290" y1="120" x2="290" y2="70" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="188" y="152" fill="var(--ink)">2人目</text><text x="298" y="102" fill="var(--quiet)">3人目</text><text x="62" y="175" text-anchor="end" font-size="13" fill="var(--quiet)">$3,000</text><text x="62" y="125" text-anchor="end" font-size="13" fill="var(--quiet)">$6,000</text><text x="62" y="75" text-anchor="end" font-size="13" fill="var(--quiet)">$9,000</text><text x="70" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">0</text><text x="180" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">2,000</text><text x="290" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">4,000</text><text x="400" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">6,000</text><text x="240" y="263" text-anchor="middle" fill="var(--ink)">月のパック数</text></svg>`,
          caption: '2,000パックまでは $3,000。2,001パックになると2人目が必要で $6,000 になる。'
        },
        {
          title: '例題: 階段状の固定費',
          example: {
            problem: '監督者1人で月 2,000パックまで見られる。給料は1人 月 $3,000。月 4,500パック作るときの監督者の給料は？ 1パックあたりは？',
            steps: ['必要な人数: 4,500 ÷ 2,000 ＝ 2.25', '0.25人は雇えないので、切り上げて3人', '給料: $3,000 × 3 ＝ $9,000', '1パックあたり: $9,000 ÷ 4,500 ＝ $2.00'],
            answer: '$9,000（1パック $2.00）。4,000パックなら2人でちょうど足りて $6,000'
          }
        },
        {
          title: '準変動費（semi-variable cost）',
          paras: ['スマホ代は、基本料金 2,000円 ＋ データ 1GB ごとに 500円。まったく使わなくても基本料金はかかり、使うほど増える。', '準変動費は、固定の部分と変動の部分が混ざった原価。mixed cost とも呼ぶ。電気代（基本料金＋使用量）、営業担当の給料（固定給＋歩合）が代表例。'],
          formula: '準変動費 ＝ 固定の部分 ＋ 1単位の変動費 × 活動量'
        },
        {
          title: '準変動費のグラフ',
          paras: ['たこ焼き工場の電気代は、基本料金 月 $400 ＋ 1パックあたり $0.20（焼き機の電気）。'],
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="電気代は400ドルから始まり1パックごとに0.2ドル増える直線" font-size="14"><text x="20" y="40" fill="var(--ink)">電気代</text><line x1="70" y1="50" x2="70" y2="220" stroke="var(--ink)" stroke-width="1.5"/><line x1="70" y1="220" x2="415" y2="220" stroke="var(--ink)" stroke-width="1.5"/><line x1="70" y1="180" x2="400" y2="180" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><line x1="70" y1="180" x2="400" y2="80" stroke="var(--ink)" stroke-width="3"/><line x1="400" y1="80" x2="400" y2="220" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><circle cx="70" cy="180" r="6" fill="var(--accent)"/><text x="62" y="185" text-anchor="end" font-size="13" fill="var(--quiet)">$400</text><text x="62" y="85" text-anchor="end" font-size="13" fill="var(--quiet)">$1,400</text><text x="200" y="100" text-anchor="middle" fill="var(--ink)">変動の部分 1パック $0.20</text><text x="240" y="204" text-anchor="middle" fill="var(--ink)">固定の部分 $400</text><text x="70" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">0</text><text x="400" y="240" text-anchor="middle" font-size="13" fill="var(--quiet)">5,000</text><text x="240" y="263" text-anchor="middle" fill="var(--ink)">月のパック数</text></svg>`,
          caption: '0パックでも $400 かかる（線が0より上から始まる）。5,000パックなら $400 ＋ $1,000 ＝ $1,400。'
        },
        {
          title: '例題: 準変動費',
          example: {
            problem: '電気代は基本料金 月 $400 ＋ 1パックあたり $0.20。月 4,000パック作るときの電気代は？ 1パックあたりは？',
            steps: ['変動の部分: $0.20 × 4,000 ＝ $800', '固定の部分を足す: $400 ＋ $800 ＝ $1,200', '1パックあたり: $1,200 ÷ 4,000 ＝ $0.30（$0.20 より高いのは、固定の部分が入っているから）'],
            answer: '$1,200（1パック $0.30）'
          }
        },
        {
          title: 'なぜ？ 4つの型に分ける理由',
          paras: ['実際の原価は、きれいな変動費と固定費だけではない。階段状の固定費は「どこで段が上がるか」、準変動費は「固定の部分がいくらか」が分からないと、量を変えたときの原価を見積もれない。', '月 4,000パックを 4,100パックに増やすと、監督者が1人増えて $3,000 上がる。100パック増やすだけで原価が跳ねる。段の手前で止める、という判断もできる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '階段状の固定費の人数は「割って切り上げ」。4,500 ÷ 2,000 ＝ 2.25 を2人にしない。準変動費で固定の部分を忘れ、「1単位の変動費 × 量」だけにする間違いも多い。段で上がるのが階段状の固定費、最初から斜めに上がるのが準変動費。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['階段状の固定費: ある範囲では固定、水準を越えると一段上がる（必要な数は割って切り上げ）', '準変動費: 固定の部分 ＋ 変動の部分。まったく作らなくても固定の部分はかかる', '原価の型は4つ: 変動費・固定費・階段状の固定費・準変動費']
        },
        {
          title: '英単語',
          words: [
            ['stepped fixed cost', 'ステップト フィックスト コスト', '階段状の固定費（step cost とも）'],
            ['semi-variable cost', 'セミ ヴァリアブル コスト', '準変動費'],
            ['mixed cost / semi-fixed cost', 'ミクスト コスト / セミ フィックスト コスト', '準変動費と同じ意味で使われる'],
            ['fixed element / variable element', '', '固定の部分 / 変動の部分'],
            ['standing charge', 'スタンディング チャージ', '電気・ガス・電話などの基本料金'],
            ['commission', 'コミッション', '歩合・販売手数料']
          ]
        }
      ],
      quiz: [
        { q: 'A company employs one supervisor for every 10 production workers. Each supervisor is paid a fixed monthly salary. How would the total cost of supervisors be described?', choices: ['Semi-variable cost', 'Stepped fixed cost', 'Variable cost', 'Fixed cost'], answer: 1, explain: '作業員が10人を越えるごとに、監督者が1人増えて一段上がる。段の間は一定なので階段状の固定費。固定の部分＋斜めに増える部分がある準変動費とはちがう。' },
        { q: 'Electricity costs consist of a standing charge of $500 per month plus $0.15 per machine hour. What is the electricity cost for a month in which 6,000 machine hours are worked?', type: 'number', answer: 1400, unit: '$', explain: '$500 ＋ $0.15 × 6,000 ＝ $500 ＋ $900 ＝ $1,400。$900 は基本料金（固定の部分）を忘れた答え。' },
        { q: 'A salesperson is paid a basic salary of $1,500 per month plus a commission of 2% of sales. How should the salesperson\'s total pay be classified?', choices: ['Fixed cost', 'Variable cost', 'Stepped fixed cost', 'Semi-variable cost'], answer: 3, explain: '固定給（固定の部分）と、売上に応じた歩合（変動の部分）が混ざっているので準変動費。歩合だけを見ると変動費、固定給だけを見ると固定費と間違える。' },
        { q: '検査係1人で月 2,500個まで検査できる。給料は1人 月 $2,400。月 6,000個作るとき、検査係の給料の合計はいくら？', type: 'number', answer: 7200, unit: '$', explain: '6,000 ÷ 2,500 ＝ 2.4 → 切り上げて3人。$2,400 × 3 ＝ $7,200。2人（$4,800）にすると、1,000個分を検査できない。' },
        { q: '生産量を 4,000個から 4,100個に増やしたら、ある原価が $3,000 増えた。3,000個から 3,900個に増やしたときは、まったく増えなかった。この原価の型は？', choices: ['階段状の固定費', '準変動費', '変動費', '固定費'], answer: 0, explain: 'ある範囲では動かず、水準を越えたところで一段上がるのは階段状の固定費。変動費や準変動費なら、3,000個から 3,900個でも増えるはず。' }
      ]
    },
    {
      id: 'M014',
      no: 14,
      title: '原価の動きをグラフで読む',
      goal: 'グラフの形から原価の型を見分け、切片と傾きから固定費と1単位の変動費を読み取れるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(d)'],
      slides: [
        {
          title: '水道代をグラフにすると',
          paras: ['横に使った水の量、縦に払う金額をとる。基本料金があれば、線は0からではなく少し上から始まり、使うほど右上がりになる。', '原価のグラフも同じ。横軸（x）に活動量、縦軸（y）に原価をとる。線の形を見れば、原価の型が分かる。']
        },
        {
          title: '総原価のグラフ: 4つの型',
          svg: `<svg viewBox="0 0 440 335" role="img" aria-label="変動費、固定費、階段状の固定費、準変動費の総原価のグラフ" font-size="14"><text x="45" y="58" font-size="15" font-weight="600" fill="var(--ink)">変動費</text><line x1="45" y1="70" x2="45" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="150" x2="205" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="150" x2="195" y2="80" stroke="var(--ink)" stroke-width="3"/><text x="255" y="58" font-size="15" font-weight="600" fill="var(--ink)">固定費</text><line x1="255" y1="70" x2="255" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="150" x2="415" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="115" x2="405" y2="115" stroke="var(--ink)" stroke-width="3"/><text x="45" y="208" font-size="15" font-weight="600" fill="var(--ink)">階段状の固定費</text><line x1="45" y1="220" x2="45" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="300" x2="205" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="285" x2="95" y2="285" stroke="var(--ink)" stroke-width="3"/><line x1="95" y1="262" x2="145" y2="262" stroke="var(--ink)" stroke-width="3"/><line x1="145" y1="239" x2="195" y2="239" stroke="var(--ink)" stroke-width="3"/><text x="255" y="208" font-size="15" font-weight="600" fill="var(--ink)">準変動費</text><line x1="255" y1="220" x2="255" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="300" x2="415" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="278" x2="405" y2="230" stroke="var(--ink)" stroke-width="3"/><circle cx="255" cy="278" r="5" fill="var(--accent)"/><text x="265" y="295" font-size="12.5" fill="var(--quiet)">0より上から始まる</text><text x="220" y="327" text-anchor="middle" fill="var(--ink)">横軸＝活動量、縦軸＝総原価</text></svg>`,
          caption: '0から斜め＝変動費、水平＝固定費、階段＝階段状の固定費、0より上から斜め＝準変動費。'
        },
        {
          title: '1単位あたりのグラフは形が変わる',
          svg: `<svg viewBox="0 0 440 362" role="img" aria-label="1単位あたりのグラフ。変動費は水平、固定費は0に近づく右下がりの曲線、階段状の固定費はのこぎりの歯の形、準変動費は変動費の高さに近づく右下がりの曲線" font-size="14"><text x="45" y="40" font-size="15" font-weight="600" fill="var(--ink)">1単位の変動費</text><line x1="45" y1="52" x2="45" y2="140" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="140" x2="205" y2="140" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="100" x2="195" y2="100" stroke="var(--ink)" stroke-width="3"/><text x="125" y="162" text-anchor="middle" font-size="13" fill="var(--ink)">水平（一定）</text><text x="255" y="40" font-size="15" font-weight="600" fill="var(--ink)">1単位の固定費</text><line x1="255" y1="52" x2="255" y2="140" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="140" x2="415" y2="140" stroke="var(--ink)" stroke-width="1.25"/><polyline points="262,57 267,90 275,110 290,123 315,130 355,134 405,136" fill="none" stroke="var(--accent)" stroke-width="3"/><text x="335" y="162" text-anchor="middle" font-size="13" fill="var(--ink)">右下がり、0に近づく</text><text x="45" y="200" font-size="15" font-weight="600" fill="var(--ink)">1単位の階段状の固定費</text><line x1="45" y1="212" x2="45" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="45" y1="300" x2="205" y2="300" stroke="var(--ink)" stroke-width="1.25"/><polyline points="50,216 58,250 70,268 95,286" fill="none" stroke="var(--ink)" stroke-width="3"/><polyline points="95,272 110,280 125,284 145,286" fill="none" stroke="var(--ink)" stroke-width="3"/><polyline points="145,279 165,284 195,286" fill="none" stroke="var(--ink)" stroke-width="3"/><text x="125" y="322" text-anchor="middle" font-size="13" fill="var(--ink)">のこぎりの歯の形</text><text x="255" y="200" font-size="15" font-weight="600" fill="var(--ink)">1単位の準変動費</text><line x1="255" y1="212" x2="255" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="300" x2="415" y2="300" stroke="var(--ink)" stroke-width="1.25"/><line x1="255" y1="270" x2="405" y2="270" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><polyline points="262,217 267,240 275,253 290,261 315,265 355,268 405,269" fill="none" stroke="var(--ink)" stroke-width="3"/><text x="330" y="291" text-anchor="middle" font-size="12.5" fill="var(--quiet)">1単位の変動費</text><text x="335" y="322" text-anchor="middle" font-size="13" fill="var(--ink)">変動費の高さに近づく</text><text x="220" y="350" text-anchor="middle" fill="var(--ink)">横軸＝活動量、縦軸＝1単位あたりの原価</text></svg>`,
          caption: '固定費は下がり続け0に近づく。階段状は段を越えるたびに跳ね上がる。準変動費は固定の部分だけが薄まり、1単位の変動費の高さ（点線）に近づく。'
        },
        {
          title: '切片と傾きを読む',
          paras: ['直線が縦軸と交わる点（切片、intercept）は固定費。活動量が0でもかかるから。線の傾き（gradient）は、1単位増えたときに増える原価＝1単位の変動費。'],
          formula: '総原価 ＝ 固定費（切片）＋ 1単位の変動費（傾き）× 活動量',
          example: {
            problem: '電気代のグラフは直線で、0パックのとき $400、5,000パックのとき $1,400 を通る。固定の部分と、1パックあたりの変動の部分は？ 3,000パックのときの電気代は？',
            steps: ['切片を読む: 0パックで $400 → 固定の部分は $400', '傾き: ($1,400 − $400) ÷ (5,000 − 0) ＝ $1,000 ÷ 5,000 ＝ $0.20', '3,000パック: $400 ＋ $0.20 × 3,000 ＝ $1,000'],
            answer: '固定 $400、変動 1パック $0.20、3,000パックで $1,000'
          }
        },
        {
          title: 'ほかによく出る形',
          svg: `<svg viewBox="0 0 440 210" role="img" aria-label="数量割引、無料枠つき、上限つきの総原価のグラフ" font-size="14"><text x="30" y="40" font-size="15" font-weight="600" fill="var(--ink)">①数量割引</text><line x1="30" y1="55" x2="30" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="30" y1="150" x2="140" y2="150" stroke="var(--ink)" stroke-width="1.25"/><polyline points="30,150 85,95 135,75" fill="none" stroke="var(--ink)" stroke-width="3"/><line x1="85" y1="95" x2="85" y2="150" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="165" y="40" font-size="15" font-weight="600" fill="var(--ink)">②無料枠つき</text><line x1="165" y1="55" x2="165" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="165" y1="150" x2="275" y2="150" stroke="var(--ink)" stroke-width="1.25"/><polyline points="165,120 215,120 270,70" fill="none" stroke="var(--ink)" stroke-width="3"/><line x1="215" y1="120" x2="215" y2="150" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="300" y="40" font-size="15" font-weight="600" fill="var(--ink)">③上限つき</text><line x1="300" y1="55" x2="300" y2="150" stroke="var(--ink)" stroke-width="1.25"/><line x1="300" y1="150" x2="410" y2="150" stroke="var(--ink)" stroke-width="1.25"/><polyline points="300,150 355,85 405,85" fill="none" stroke="var(--ink)" stroke-width="3"/><line x1="355" y1="85" x2="355" y2="150" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="85" y="174" text-anchor="middle" font-size="13" fill="var(--ink)">傾きがゆるくなる</text><text x="220" y="174" text-anchor="middle" font-size="13" fill="var(--ink)">水平→右上がり</text><text x="355" y="174" text-anchor="middle" font-size="13" fill="var(--ink)">右上がり→水平</text><text x="220" y="202" text-anchor="middle" fill="var(--ink)">横軸＝活動量、縦軸＝総原価</text></svg>`,
          list: ['① 材料が 1,000kg を越えると、越えた分だけ単価が下がる', '② 電話代が月 $20 で 100分まで定額、越えた分は1分 $0.10', '③ 機械のレンタル料が1時間 $5、ただし月 $1,000 が上限'],
          after: '点線のところで単価か型が変わる。水平な部分は固定、斜めの部分は変動。傾きが急なほど1単位の変動費が大きい。'
        },
        {
          title: '全部の量にかかる割引のグラフ',
          svg: `<svg viewBox="0 0 440 232" role="img" aria-label="全部の量にかかる数量割引の総原価のグラフ。原点から右上がりに $10,000 まで上がり、1,000kg で $8,000 に真下へ落ち、そこから2,000kg で $16,000 までゆるい傾きで上がる。落ちた後の線をのばすと原点を通る" font-size="14"><line x1="60" y1="24" x2="60" y2="190" stroke="var(--ink)" stroke-width="1.25"/><line x1="60" y1="190" x2="420" y2="190" stroke="var(--ink)" stroke-width="1.25"/><line x1="60" y1="190" x2="230" y2="90" stroke="var(--ink)" stroke-width="3"/><line x1="230" y1="90" x2="230" y2="110" stroke="var(--ink)" stroke-width="3"/><line x1="230" y1="110" x2="400" y2="30" stroke="var(--ink)" stroke-width="3"/><line x1="60" y1="190" x2="230" y2="110" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/><line x1="230" y1="110" x2="230" y2="190" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="222" y="84" text-anchor="end" fill="var(--ink)">$10,000</text><text x="238" y="128" fill="var(--ink)">$8,000</text><text x="392" y="22" text-anchor="end" fill="var(--ink)">$16,000</text><text x="120" y="184" fill="var(--accent)">のばすと原点へ</text><text x="230" y="207" text-anchor="middle" fill="var(--ink)">1,000</text><text x="400" y="207" text-anchor="middle" fill="var(--ink)">2,000</text><text x="220" y="226" text-anchor="middle" fill="var(--ink)">横軸＝買う量（kg）、縦軸＝総原価</text></svg>`,
          paras: ['境目を越えると全部の量が新しい単価になる（総原価 ＝ 新しい単価 × 全部の量）。だから落ちた後の線は原点を通る直線の上にあり、傾きは新しい単価。落ちた直後の高さ ÷ 境目の量 も新しい単価になる。', '落ちる幅 ＝（元の単価 − 新しい単価）× 境目の量。落ちた後の線をのばして縦軸の0より上に当たるなら、固定の部分もある。越えた分だけの割引なら、落ちずに傾きがゆるくなるだけ。']
        },
        {
          title: '例題: 全部の量にかかる割引',
          example: {
            problem: '材料は1kg $10。1,000kg より多く買うと、全部の kg が $8 になる。1,000kg、1,000kg を少し越えたとき、2,000kg の総原価は？ グラフはどんな形？',
            steps: ['1,000kg: $10 × 1,000 ＝ $10,000', '少し越える: 全部が $8 → $8 × 1,000 ＝ $8,000。落ちる幅 $2,000 ＝ ($10 − $8) × 1,000', '2,000kg: $8 × 2,000 ＝ $16,000', '確かめ: $16,000 ÷ 2,000 ＝ $8、$8,000 ÷ 1,000 ＝ $8。どちらも原点を通る直線（1kg $8）の上にある'],
            answer: '$10,000 → 真下に落ちて $8,000 → $16,000。落ちた後の線は傾き $8 で、のばすと原点を通る'
          },
          note: { kind: 'tip', text: '選択肢のグラフは4点で確かめる。①原点から始まる ②境目の前のほうが急 ③境目で真下に落ちる ④落ちた後の線は原点に向かう。1つでも外れるものを消し、4つ全部を満たすものを選ぶ。' }
        },
        {
          title: 'なぜ？ グラフで見る理由',
          paras: ['数字の表だけでは、どこで原価が跳ねるか、どこまでが固定かが見えにくい。グラフにすると、段の位置や傾きの変わり目がひと目で分かる。', '試験でも「この原価に合うグラフはどれ？」「このグラフが表す原価は？」という形で出る。形と原価の型を結びつけておけば、計算しなくても答えられる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '総原価のグラフと1単位あたりのグラフを取り違えやすい。水平な線は、総原価のグラフなら固定費、1単位あたりのグラフなら変動費。右下がりの曲線は1単位あたりの固定費。まず縦軸が「合計」か「1単位あたり」かを確かめる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['総原価: 0から斜め＝変動費、水平＝固定費、階段＝階段状の固定費、0より上から斜め＝準変動費', '1単位あたり: 水平＝変動費、0に近づく右下がり＝固定費、のこぎりの歯＝階段状の固定費', '直線の切片は固定費、傾きは1単位の変動費']
        },
        {
          title: '英単語',
          words: [
            ['horizontal axis (x axis)', 'ホリゾンタル アクシス', '横軸（活動量をとる）'],
            ['vertical axis (y axis)', 'ヴァーティカル アクシス', '縦軸（原価をとる）'],
            ['intercept', 'インターセプト', '切片（縦軸と交わる点＝固定費）'],
            ['gradient / slope', 'グレイディエント / スロープ', '傾き（1単位の変動費）'],
            ['bulk discount', 'バルク ディスカウント', '数量割引'],
            ['discount on all units', 'ディスカウント オン オール ユニッツ', '全部の量にかかる割引（境目で総原価が落ちる）'],
            ['origin', 'オリジン', '原点（縦軸と横軸が交わる0の点）'],
            ['horizontal line', '', '水平な線']
          ]
        }
      ],
      quiz: [
        { q: 'A graph plots total cost on the vertical axis against the level of activity on the horizontal axis. The line is horizontal. Which type of cost does the graph show?', choices: ['Variable cost', 'Fixed cost', 'Semi-variable cost', 'Stepped fixed cost'], answer: 1, explain: '総原価が量に関係なく一定なのは固定費。1単位あたりのグラフで水平なら変動費になるので、縦軸を確かめるのが大事。' },
        { q: 'A graph plots cost per unit on the vertical axis against the level of activity on the horizontal axis. The line falls steeply at first and then flattens out as activity increases. Which cost does the graph show?', choices: ['Variable cost per unit', 'Total variable cost', 'Fixed cost per unit', 'Total semi-variable cost'], answer: 2, explain: '同じ固定費をより多くの単位で割るので、1単位あたりは下がり続け、0に近づく。1単位の変動費は水平になる。' },
        { q: 'A material costs $6 per kg. If more than 5,000 kg are bought in a month, the price of all kg bought that month falls to $5 per kg. What is the total cost of buying 6,000 kg in a month?', type: 'number', answer: 30000, unit: '$', explain: '6,000kg は 5,000kg を越えるので、全部の kg が $5。$5 × 6,000 ＝ $30,000。$35,000 は 5,000kg まで $6、越えた 1,000kg だけ $5 にした答え（越えた分だけの割引と混同）。$36,000 は割引を忘れた答え。' },
        { q: '総原価のグラフは直線で、活動量0のとき $2,000、1,000単位のとき $5,000 を通る。1単位あたりの変動費はいくら？', type: 'number', answer: 3, unit: '$', explain: '傾き ＝ ($5,000 − $2,000) ÷ 1,000 ＝ $3。$5 は $5,000 ÷ 1,000 で、固定費 $2,000 を引き忘れた答え。' },
        { q: 'A supplier charges a lower price per kg on ALL kg bought once purchases exceed a threshold quantity. There are no other costs. Which description matches the graph of total cost against quantity bought?', choices: ['Rises from the origin, falls vertically at the threshold, then rises less steeply along a line which, extended back, would pass through the origin', 'Rises from the origin, falls vertically at the threshold, then rises less steeply along a line which, extended back, would meet the vertical axis above zero', 'Rises from the origin and becomes less steep at the threshold, with no fall', 'Rises from the origin and becomes steeper at the threshold, with no fall'], answer: 0, explain: '境目を越えると総原価 ＝ 新しい単価 × 全部の量なので、落ちた後の線は原点を通る直線の上にある。落ちた後の線をのばすと0より上で縦軸に当たる（meet the vertical axis above zero）のは、固定の部分もある形。落ちずに傾きがゆるくなる（less steep, with no fall）のは、越えた分だけの割引。傾きが急になる（steeper）のは、境目を越えると単価が上がる形。' },
        { q: 'A graph plots cost per unit on the vertical axis against the level of activity on the horizontal axis. The line falls as activity increases and gets closer and closer to a level above zero, but never falls below it. Which cost does the graph show?', choices: ['Fixed cost per unit', 'Variable cost per unit', 'Total semi-variable cost', 'Semi-variable cost per unit'], answer: 3, explain: '準変動費の1単位あたりは、固定の部分が多くの単位に薄まって下がり、1単位の変動費（一定）の高さに近づく。0に近づくなら固定費。1単位の変動費なら水平。総原価なら右上がりになる。' }
      ]
    },
    {
      id: 'M015',
      no: 15,
      title: '原価の動きを使って製品・サービスの原価を見積もる',
      goal: '原価を型ごとに分けて、ある活動量での総原価と1単位あたりの原価を見積もれるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(e)'],
      slides: [
        {
          title: 'バーベキューの会費を決める',
          paras: ['河原のバーベキュー。場所代とコンロのレンタルで 12,000円（何人でも同じ）。肉と飲み物は1人 2,000円。', '10人なら 12,000円 ＋ 20,000円 ＝ 32,000円で、1人 3,200円。20人なら 52,000円で、1人 2,600円。人数を見ないで会費を決めると、足りなくなったり余ったりする。']
        },
        {
          title: '見積もりの手順',
          numbered: ['原価を型ごとに分ける（変動費・固定費・階段状の固定費・準変動費）', '見積もる活動量で、型ごとに金額を出す', '全部足して総原価にする', '1単位あたりの原価 ＝ 総原価 ÷ 活動量'],
          after: '1単位あたりの総原価を、そのまま別の量にかけない。固定費が混ざっているので、量が変わると1単位あたりの原価も変わる。'
        },
        {
          title: '例題: 来月の総原価',
          example: {
            problem: 'たこ焼き工場で来月 9,000パック作る。材料 1パック $4、出来高払いの賃金 1パック $3、監督者は1人 月 $5,000（1人で 4,000パックまで）、電気代 月 $2,000 ＋ 1パック $0.50、工場の家賃 月 $10,000。総原価と1パックあたりの原価は？',
            steps: ['変動費: ($4 ＋ $3) × 9,000 ＝ $63,000', '監督者: 9,000 ÷ 4,000 ＝ 2.25 → 3人。$5,000 × 3 ＝ $15,000', '電気代（準変動費）: $2,000 ＋ $0.50 × 9,000 ＝ $6,500', '家賃（固定費）: $10,000', '総原価: $63,000 ＋ $15,000 ＋ $6,500 ＋ $10,000 ＝ $94,500', '1パックあたり: $94,500 ÷ 9,000 ＝ $10.50'],
            answer: '総原価 $94,500、1パック $10.50'
          }
        },
        {
          title: '量を変えると、1パックあたりも変わる',
          table: { caption: '同じ工場で 8,000パックと 9,000パックを比べる（$）', head: ['原価', '8,000パック', '9,000パック'], rows: [['材料・賃金（変動費）', '56,000', '63,000'], ['監督者（階段状）', '10,000（2人）', '15,000（3人）'], ['電気代（準変動費）', '6,000', '6,500'], ['家賃（固定費）', '10,000', '10,000']], total: ['総原価', '82,000', '94,500'] },
          after: '1パックあたりは、8,000パックで $10.25、9,000パックで $10.50。ふつうは量が増えると下がるが、監督者が1人増える段を越えたので上がった。'
        },
        {
          title: '例題: よくある見積もりの誤り',
          example: {
            problem: '5,000パックの総原価は $60,000（1パック $12）。このうち固定費は $20,000、残りは変動費。7,000パックの総原価は？',
            steps: ['誤り: $12 × 7,000 ＝ $84,000（固定費まで量に比例させている）', '変動費の単価: ($60,000 − $20,000) ÷ 5,000 ＝ $8', '正しい見積もり: $20,000 ＋ $8 × 7,000 ＝ $76,000', '1パックあたり: $76,000 ÷ 7,000 ＝ 約 $10.86（$12 より下がる）'],
            answer: '$76,000（$84,000 は $8,000 多すぎる）'
          }
        },
        {
          title: '例題: 2つの量の数字から型を見分ける',
          example: {
            problem: '原価A: 1,000パックで $2,000、2,000パックで $4,000。原価B: どちらも $3,000。原価C: 1,000パックで $1,500、2,000パックで $2,000。それぞれの型は？',
            steps: ['A: 1パックあたり $2,000 ÷ 1,000 ＝ $2、$4,000 ÷ 2,000 ＝ $2。1単位あたりが同じなので変動費', 'B: 合計が変わらないので固定費', 'C: 合計は増えるが、量に比例しない。増えた $500 ÷ 増えた 1,000パック ＝ 1パック $0.50 が変動の部分', 'C の固定の部分: $1,500 − $0.50 × 1,000 ＝ $1,000。固定 ＋ 変動なので準変動費'],
            answer: 'A 変動費、B 固定費、C 準変動費（$1,000 ＋ 1パック $0.50）'
          },
          note: { kind: 'tip', text: '合計が同じ＝固定費、1単位あたりが同じ＝変動費、どちらも変わる＝準変動費。問題文に「段」の説明があれば階段状の固定費も疑う。' }
        },
        {
          title: 'サービスでも同じ',
          paras: ['サービス業でも、原価単位（cost unit）を決めれば同じように見積もれる。ホテルなら「1室1泊（room-night）」という複合原価単位、配送なら「1件の配達」。'],
          example: {
            problem: 'ホテルの1か月の固定費（建物の減価償却・正社員の給料など）は $90,000。1室1泊ごとの変動費（清掃・シーツ・アメニティ）は $25。今月 3,000室泊、来月 4,500室泊の見込み。1室1泊あたりの原価は？',
            steps: ['今月: 固定費 $90,000 ÷ 3,000 ＝ $30。$30 ＋ $25 ＝ $55', '来月: 固定費 $90,000 ÷ 4,500 ＝ $20。$20 ＋ $25 ＝ $45'],
            answer: '今月 $55、来月 $45'
          }
        },
        {
          title: 'なぜ？ 型ごとに見積もる理由',
          paras: ['値段を決めるとき、予算を作るとき、注文を受けるか決めるとき、「その量で原価はいくらか」が必要になる。', '型ごとに計算して足せば、量が変わっても正しい原価が出る。ある量で出した1単位あたりの原価は、その量のときだけ正しい数字。別の量の判断に使うと、固定費を数えすぎたり足りなかったりする。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「1単位あたりの総原価 × 新しい量」で見積もらない。もう1つは、量が段を越えたのに監督者などの数を増やし忘れる間違い。見積もる量が変わるたびに、階段状の固定費の段を数え直す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['原価を型ごとに分け、見積もる量で型ごとに計算して足す', '1単位あたりの原価は量で変わる。1単位あたりの総原価を別の量にかけない', 'サービスでも、原価単位（1室1泊など）を決めれば同じ方法で見積もれる']
        },
        {
          title: '英単語',
          words: [
            ['cost estimation', 'コスト エスティメーション', '原価の見積もり'],
            ['cost unit', 'コスト ユニット', '原価単位（1パック、1室1泊など）'],
            ['room-night', 'ルーム ナイト', '1室1泊（ホテルの原価の単位）'],
            ['piece rate', 'ピース レート', '出来高払い（作った数に応じた賃金）'],
            ['service costing', 'サービス コスティング', 'サービスの原価計算'],
            ['budgeted cost', '', '予算で見積もった原価']
          ]
        }
      ],
      quiz: [
        { q: 'Fixed costs are $30,000 per month and the variable cost is $6 per unit. What is the total cost of producing 4,000 units in a month?', type: 'number', answer: 54000, unit: '$', explain: '$30,000 ＋ $6 × 4,000 ＝ $30,000 ＋ $24,000 ＝ $54,000。' },
        { q: 'At an activity level of 5,000 units, total costs are $45,000, of which $15,000 are fixed. What are the expected total costs at an activity level of 6,000 units?', choices: ['$54,000', '$45,000', '$51,000', '$36,000'], answer: 2, explain: '変動費の単価 ＝ ($45,000 − $15,000) ÷ 5,000 ＝ $6。$15,000 ＋ $6 × 6,000 ＝ $51,000。$54,000 は1単位 $9 の総原価を 6,000 にかけた答え（固定費まで増やしている）。$45,000 は全部固定費とみた答え、$36,000 は固定費を忘れた答え。' },
        { q: 'A hotel has fixed costs of $120,000 per month. The variable cost per occupied room-night is $30. In a month in which 4,000 room-nights are sold, what is the cost per occupied room-night?', type: 'number', answer: 60, unit: '$', explain: '固定費 $120,000 ÷ 4,000 ＝ $30。変動費 $30 を足して $60。$30 だけにすると固定費か変動費の片方を忘れている。' },
        { q: '監督者は1,000個ごとに1人必要（端数があれば1人追加）で、1人 月 $2,000。ほかの固定費は月 $8,000、変動費は1個 $5。月 2,500個作るときの総原価はいくら？', type: 'number', answer: 26500, unit: '$', explain: '監督者 2,500 ÷ 1,000 ＝ 2.5 → 3人で $6,000。$8,000 ＋ $5 × 2,500 ＋ $6,000 ＝ $8,000 ＋ $12,500 ＋ $6,000 ＝ $26,500。2人で計算すると $24,500 になる。' },
        { q: '固定費と変動費がある製品（段のある原価はない）。2,000個作ると1個 $15。3,000個作ると、1個あたりの原価はどうなる？', choices: ['$15 より上がる', '$15 より下がる', '$15 のまま', '$22.50 になる'], answer: 1, explain: '1個あたりの変動費は同じだが、1個あたりの固定費が下がるので全体も下がる。$15 のままと考えるのは、1単位あたりの総原価を別の量に使う間違い。$22.50 は $15 × 1.5 で、総原価と1個あたりの原価を混同した答え。' },
        { q: 'The cost per unit of a cost item is $6.00 at an activity level of 1,000 units and $3.00 at an activity level of 2,000 units. How should this cost be classified?', choices: ['Variable cost', 'Semi-variable cost', 'Stepped fixed cost', 'Fixed cost'], answer: 3, explain: '合計は $6.00 × 1,000 ＝ $6,000、$3.00 × 2,000 ＝ $6,000 で同じなので固定費。1単位あたりが量で変わるのを見て変動費と答えるのが典型的な間違い。変動費なら1単位あたりが同じになる。' }
      ]
    },
    {
      id: 'M016',
      no: 16,
      title: 'コード化: 取引に番号をつける5つの方法',
      goal: '連番・ブロック・階層・ファセット・ニーモニックの5つのコードを見分け、よいコードの条件とコードの読み方を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(f)'],
      slides: [
        {
          title: '空港コードと郵便番号',
          paras: ['羽田空港は HND、成田空港は NRT。文字を見れば、どの空港か思い出せる。', '郵便番号は、前の3けたでおおまかな地域が分かる。名前を書かなくても、短い番号で正確に分けられる。会社も同じように、取引にコード（番号や記号）をつけて分ける。']
        },
        {
          title: 'コード（code）とは',
          paras: ['取引を記録するとき、「どの部門の」「どの種類の費用か」などを、短い数字や文字で表したもの。', 'たこ焼き工場で電気代 $600 を払ったら、「焼き部門の電気代」を表すコードをつけて記録する。コードがあれば、コンピューターで部門別・費目別にすぐ集計できる。']
        },
        {
          title: '5つの方法',
          table: { head: ['方法', '例', 'しくみ'], rows: [['連番（sequential）', '0001, 0002, 0003', '発生した順に番号をふる'], ['ブロック（block）', '1000番台＝材料、2000番台＝労務費', '種類ごとに番号の範囲を割り当てる'], ['階層（hierarchical）', '4 → 41 → 411', '右に1けた進むごとに細かく分かれる'], ['ファセット（faceted）', '20-411-03', '区切った部分ごとに別の意味'], ['ニーモニック（mnemonic）', 'TKY, MAT', '文字から中身を思い出せる']] }
        },
        {
          title: '連番コードとブロックコード',
          paras: ['連番コード（sequential code、progressive code とも）は、請求書番号のように順に番号をふるだけ。作るのは簡単だが、番号を見ても中身は分からない。', 'ブロックコード（block code）は、種類ごとに番号の範囲（ブロック）を決め、その中で順に番号をふる。例えば 1000〜1999 は材料、2000〜2999 は労務費、3000〜3999 は製造間接費。番号の範囲で種類が分かる。']
        },
        {
          title: '階層コード（hierarchical code）',
          paras: ['左のけたが大きな分類で、右に1けた進むごとに、その下の細かい分類になる。411 は「製造間接費 → 光熱費 → 電気」。'],
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="4製造間接費の下に41光熱費と42修繕費、41の下に411電気と412ガス" font-size="15"><rect x="150" y="30" width="140" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="56" text-anchor="middle" fill="var(--ink)">4 製造間接費</text><line x1="220" y1="70" x2="125" y2="105" stroke="var(--edge)" stroke-width="1.25"/><line x1="220" y1="70" x2="315" y2="105" stroke="var(--edge)" stroke-width="1.25"/><rect x="60" y="105" width="130" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="131" text-anchor="middle" fill="var(--ink)">41 光熱費</text><rect x="250" y="105" width="130" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="131" text-anchor="middle" fill="var(--ink)">42 修繕費</text><line x1="125" y1="145" x2="75" y2="180" stroke="var(--edge)" stroke-width="1.25"/><line x1="125" y1="145" x2="195" y2="180" stroke="var(--edge)" stroke-width="1.25"/><line x1="315" y1="145" x2="345" y2="180" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="180" width="110" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="75" y="206" text-anchor="middle" font-weight="600" fill="var(--ink)">411 電気</text><rect x="140" y="180" width="110" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="195" y="206" text-anchor="middle" fill="var(--ink)">412 ガス</text><rect x="290" y="180" width="110" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="345" y="206" text-anchor="middle" fill="var(--ink)">421 部品</text></svg>`,
          caption: '新しい分類は、けたを足せば下に増やせる。411 は 41 の一部、41 は 4 の一部。'
        },
        {
          title: 'ファセットコード（faceted code）',
          paras: ['コードをいくつかの部分（ファセット）に分け、部分ごとに別の意味を持たせる。各部分の位置とけた数は決まっている。'],
          svg: `<svg viewBox="0 0 440 200" role="img" aria-label="20-411-03は原価センター、費目、製品の3つの部分からなる" font-size="14"><rect x="40" y="30" width="90" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="66" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">20</text><text x="148" y="66" text-anchor="middle" font-size="26" fill="var(--quiet)">-</text><rect x="165" y="30" width="110" height="54" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="66" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">411</text><text x="292" y="66" text-anchor="middle" font-size="26" fill="var(--quiet)">-</text><rect x="310" y="30" width="90" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="66" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">03</text><text x="85" y="114" text-anchor="middle" fill="var(--ink)">原価センター</text><text x="220" y="114" text-anchor="middle" fill="var(--ink)">費目</text><text x="355" y="114" text-anchor="middle" fill="var(--ink)">製品</text><text x="85" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">焼き部門</text><text x="220" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">電気</text><text x="355" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ソース味</text><text x="85" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cost centre</text><text x="220" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">type of expense</text><text x="355" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">product</text><text x="220" y="192" text-anchor="middle" fill="var(--ink)">部分ごとに、別の一覧表から意味を読む</text></svg>`,
          caption: '費目の部分に階層コード（411）を使ってもよい。部門・費目・製品は、それぞれ別の分類。'
        },
        {
          title: 'ニーモニックコード（mnemonic code）',
          paras: ['覚えやすい文字の略語を使う。TKY＝東京支店、OSK＝大阪支店、MAT＝材料（materials）。', '人が見てすぐ分かるのが長所。ただ、項目が増えるとよい略語が足りなくなり、似た略語で取り違えやすい。コンピューターで並べ替えたり集計したりするのにも向かない。']
        },
        {
          title: 'なぜ？ コードをつける理由と、よいコードの条件',
          paras: ['名前で書くと「電気代」「電力料」「電気料金」のように書き方がばらつき、集計がずれる。1つの意味に1つのコードなら、速く正確に分類・集計できる。'],
          list: ['1つのコードは1つの意味だけ（重ならない）', 'すべての項目にコードがある（もれがない）','けた数や形がそろっている', '新しい項目を足す余地がある', '覚えやすく、使いやすい', '管理する人を決め、勝手に作らない']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '階層コードとファセットコードを取り違えやすい。階層は1本の分類を左から右へ細かくしていく（411 は 41 の一部）。ファセットは別々の分類（部門・費目・製品）を並べてつなぐ（20 と 03 は、関係のない別の分類）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['連番＝順に番号、ブロック＝種類ごとに番号の範囲', '階層＝右に進むほど細かい分類、ファセット＝部分ごとに別の意味', 'ニーモニック＝文字の略語で中身を思い出せる']
        },
        {
          title: '英単語',
          words: [
            ['coding', 'コーディング', 'コード化'],
            ['sequential (progressive) code', 'シークエンシャル コード', '連番コード'],
            ['block code', 'ブロック コード', 'ブロックコード（種類ごとの番号の範囲）'],
            ['hierarchical code', 'ハイアラーキカル コード', '階層コード'],
            ['faceted code', 'ファセッティッド コード', 'ファセットコード'],
            ['mnemonic code', 'ニーモニック コード', 'ニーモニックコード（覚えやすい略語）'],
            ['cost code', '', '原価コード']
          ]
        }
      ],
      quiz: [
        { q: 'In a coding system, each digit represents a classification, and each digit to the right is a sub-classification of the digit before it. What type of code is this?', choices: ['Faceted code', 'Hierarchical code', 'Block code', 'Sequential code'], answer: 1, explain: '右に進むごとに、前のけたの下の細かい分類になるのは階層コード。ファセットコードは、部分ごとに別々の分類（部門・費目など）を表す。' },
        { q: 'A company uses the code LDN for its London branch and MAN for its Manchester branch. What type of code is this?', choices: ['Block code', 'Sequential code', 'Mnemonic code', 'Hierarchical code'], answer: 2, explain: '文字の略語から中身を思い出せるのはニーモニックコード。' },
        { q: 'A company codes its expenses so that codes 1000-1999 are materials, 2000-2999 are labour and 3000-3999 are overheads. What type of code is this?', choices: ['Block code', 'Faceted code', 'Mnemonic code', 'Hierarchical code'], answer: 0, explain: '種類ごとに番号の範囲（ブロック）を割り当てているのでブロックコード。範囲の中では順に番号をふる。' },
        { q: 'A cost code is made up of three parts: the first two digits show the cost centre, the next three digits show the type of expense and the last two digits show the product. What type of code is this?', choices: ['Hierarchical code', 'Sequential code', 'Mnemonic code', 'Faceted code'], answer: 3, explain: '部分ごとに別々の意味（原価センター・費目・製品）を持つのはファセットコード。階層コードは1つの分類を細かくしていくもので、部分どうしが親子の関係になる。' },
        { q: 'よいコードの条件として誤っているものは？', choices: ['1つのコードは1つの意味だけを持つ', '項目ごとに、けた数を自由に変えてよい', '新しい項目を足す余地を残す', 'コードを管理する人を決める'], answer: 1, explain: 'けた数や形がそろっていないと、入力や集計の間違いが増える。ほかの3つは、よいコードの条件。' },
        { q: 'コードの形は「原価センター-費目-製品」で、20＝焼き部門、30＝包装部門、411＝電気、412＝ガス、03＝ソース味、05＝しょうゆ味。包装部門でしょうゆ味のためにガスを使ったときのコードは？', choices: ['30-411-05', '412-30-05', '30-412-05', '20-412-05'], answer: 2, explain: '部分の順番は決まっている: 原価センター 30、費目 412、製品 05。2つ目は部分の順番が違う。1つ目は電気、4つ目は焼き部門になっている。' }
      ]
    }
  ],
  cards: [
    { id: 'M012-1', lesson: 'M012', q: '変動費（variable cost）とは？', a: '活動量に比例して合計が増える原価。1単位あたりは一定' },
    { id: 'M012-2', lesson: 'M012', q: '固定費（fixed cost）とは？', a: '関連範囲の中では、活動量が変わっても合計が変わらない原価' },
    { id: 'M012-3', lesson: 'M012', q: '活動量が増えると、1単位あたりの固定費はどうなる？', a: '下がる（同じ合計を、より多くの単位で割るため）' },
    { id: 'M012-4', lesson: 'M012', q: '総原価の式は？', a: '固定費 ＋ 1単位の変動費 × 活動量' },
    { id: 'M012-5', lesson: 'M012', q: 'relevant range（関連範囲）とは？', a: '固定費の額や変動費の単価が変わらないと見てよい活動量の範囲' },
    { id: 'M012-6', lesson: 'M012', q: 'なぜ変動費と固定費を分ける？', a: '量が変わったときの原価を正しく見積もるため。固定費は量が増えても増えない' },
    { id: 'M013-1', lesson: 'M013', q: '階段状の固定費（stepped fixed cost）とは？', a: 'ある範囲では一定、活動量が水準を越えると一段上がる固定費' },
    { id: 'M013-2', lesson: 'M013', q: '階段状の固定費で、必要な人数や台数の出し方は？', a: '活動量 ÷ 1つで対応できる量。端数は切り上げ' },
    { id: 'M013-3', lesson: 'M013', q: '準変動費（semi-variable cost）とは？', a: '固定の部分と変動の部分が混ざった原価（mixed cost とも）' },
    { id: 'M013-4', lesson: 'M013', q: '準変動費の例を2つ', a: '電気代（基本料金＋使用量）、営業の給料（固定給＋歩合）' },
    { id: 'M013-5', lesson: 'M013', q: '準変動費の式は？', a: '固定の部分 ＋ 1単位の変動費 × 活動量' },
    { id: 'M014-1', lesson: 'M014', q: '水平な線は、総原価のグラフと1単位あたりのグラフでそれぞれ何？', a: '総原価なら固定費、1単位あたりなら変動費' },
    { id: 'M014-3', lesson: 'M014', q: '1単位あたりの固定費のグラフの形は？', a: '右下がりの曲線。0に近づくが0にならない' },
    { id: 'M014-4', lesson: 'M014', q: '総原価の直線で、切片と傾きは何を表す？', a: '切片＝固定費、傾き＝1単位の変動費' },
    { id: 'M014-5', lesson: 'M014', q: '総原価のグラフ: 準変動費と階段状の固定費の形は？', a: '準変動費＝0より上から右上がりの直線。階段状＝一定量ごとに一段上がる' },
    { id: 'M014-7', lesson: 'M014', q: '1単位あたりの準変動費のグラフの形は？', a: '右下がりの曲線。0ではなく1単位の変動費の高さに近づく' },
    { id: 'M014-8', lesson: 'M014', q: '全部の量にかかる数量割引のグラフ。落ちた後の線はどうなる？', a: '原点を通る直線の上にある。傾きは新しい単価' },
    { id: 'M014-9', lesson: 'M014', q: '全部の量にかかる数量割引。境目で総原価が落ちる幅は？', a: '（元の単価 − 新しい単価）× 境目の量' },
    { id: 'M015-1', lesson: 'M015', q: '総原価の見積もりの手順は？', a: '型ごとに分ける → 見積もる量で型ごとに計算 → 足す' },
    { id: 'M015-2', lesson: 'M015', q: 'なぜ1単位あたりの総原価を別の量にかけてはいけない？', a: '固定費が混ざっていて、量が変わると1単位あたりの原価も変わるから' },
    { id: 'M015-3', lesson: 'M015', q: '量が増えたのに1単位あたりの原価が上がるのは？', a: '階段状の固定費が一段上がったとき' },
    { id: 'M015-4', lesson: 'M015', q: 'ホテルの原価単位（cost unit）の例は？', a: '1室1泊（room-night）' },
    { id: 'M015-5', lesson: 'M015', q: '固定費 $20,000、変動費 1個 $8。7,000個の総原価は？', a: '$20,000 ＋ $8 × 7,000 ＝ $76,000' },
    { id: 'M015-6', lesson: 'M015', q: '2つの量の原価から型を見分けるには？', a: '合計が同じ＝固定費、1単位が同じ＝変動費、どちらも変わる＝準変動費' },
    { id: 'M016-1', lesson: 'M016', q: '連番コード（sequential code）とは？', a: '発生順に番号をふるコード。簡単だが番号から中身は分からない' },
    { id: 'M016-2', lesson: 'M016', q: 'ブロックコード（block code）とは？', a: '種類ごとに番号の範囲を割り当て、その中で順に番号をふる' },
    { id: 'M016-3', lesson: 'M016', q: '階層コード（hierarchical code）とは？', a: '右に1けた進むごとに、その下の細かい分類になるコード' },
    { id: 'M016-4', lesson: 'M016', q: 'ファセットコード（faceted code）とは？', a: 'コードを部分に分け、部分ごとに別の意味（部門・費目など）を持たせる' },
    { id: 'M016-5', lesson: 'M016', q: 'ニーモニックコード（mnemonic code）とは？', a: '覚えやすい文字の略語を使うコード（例 LDN＝London）' },
    { id: 'M016-6', lesson: 'M016', q: 'コードをつける目的は？', a: '取引を速く正確に分類・集計するため。書き方のばらつきと間違いを減らす' }
  ]
});
