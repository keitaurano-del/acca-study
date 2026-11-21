(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 111,
  part: 3,
  partTitle: '材料費・労務費・製造間接費',
  lessons: [
    {
      id: 'M043',
      no: 43,
      title: '配賦率の基準を選び、製品に配賦する',
      goal: '部門ごとに配賦の基準（機械時間・直接作業時間など）を選んで予定配賦率を出し、製品1個の製造間接費と製造原価を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(iv)', 'K2:B3(c)(ii)'],
      slides: [
        {
          title: 'シェアハウスの光熱費を、何で分ける？',
          paras: ['4人で住むシェアハウスの電気代を分ける。頭割りでもいいが、1日中家にいる人と、ほとんど帰らない人が同じ額では不公平に感じる。', '「家にいた時間」で分ければ納得しやすい。費用を生んだものに合わせて分ける。製造間接費を製品に分けるときも、この考え方を使う。']
        },
        {
          title: '最後の段階: 配賦（absorption）',
          paras: ['ここまでで、製造間接費（production overheads）を製造部門に集めた。最後に、それを製品1個ずつ（cost unit）に付ける。これを配賦（absorption）という。'],
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="製造間接費が製品に届くまでの4つの段階。最後が配賦" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">製造間接費が製品に届くまで</text><rect x="20" y="46" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="68" font-size="16" font-weight="600" fill="var(--ink)">① 割当（allocation）</text><text x="36" y="90" fill="var(--quiet)">1つの部門だけの費用を、その部門へ</text><path d="M220 102 L220 114 M214 108 L220 115 L226 108" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="116" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="138" font-size="16" font-weight="600" fill="var(--ink)">② 按分（apportionment）</text><text x="36" y="160" fill="var(--quiet)">共通の費用を、面積や人数などで分ける</text><path d="M220 172 L220 184 M214 178 L220 185 L226 178" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="186" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="208" font-size="16" font-weight="600" fill="var(--ink)">③ 再配分（reapportionment）</text><text x="36" y="230" fill="var(--quiet)">補助部門の費用を、製造部門へ移す</text><path d="M220 242 L220 254 M214 248 L220 255 L226 248" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="256" width="400" height="54" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="278" font-size="16" font-weight="600" fill="var(--ink)">④ 配賦（absorption）</text><text x="404" y="278" text-anchor="end" fill="var(--ink)">このレッスン</text><text x="36" y="300" fill="var(--ink)">製造部門の費用を、製品1個ずつへ</text></svg>`,
          formula: '予定配賦率（OAR）＝ 予算の製造間接費 ÷ 予算の作業量'
        },
        {
          title: '基準（absorption base）の選び方',
          table: { caption: '部門の特徴で基準を選ぶ', head: ['基準', 'こんな部門に向く'], rows: [['機械時間（machine hours）', '機械が中心で、人は少ない'], ['直接作業時間（direct labour hours）', '人の手作業が中心'], ['製品1個あたり（per unit）', '同じ製品1種類だけを作る'], ['直接労務費・直接材料費・素価の %', '使うことはあるが、あまりよくない']] },
          after: '素価（prime cost）は直接材料費＋直接労務費。試験では「その部門で一番よく使われているもの」を選ぶ。'
        },
        {
          title: 'なぜ？ 時間を基準にするのがよい理由',
          paras: ['製造間接費の多くは、工場の家賃、機械の減価償却、監督者の給料など。どれも「時間がたつほど」かかる。だから、製品が部門を長く使うほど多く負担させるのが自然。', '材料費や賃金の % で配ると、高い材料を使っただけで製造間接費まで増える。材料の値段と工場の家賃には関係がないので、原価がゆがむ。']
        },
        {
          title: '家具工房の2つの製造部門',
          table: { caption: '予算（1年）', head: ['項目', '機械加工', '組立'], rows: [['製造間接費', '$120,000', '$60,000'], ['機械時間', '20,000', '2,000'], ['直接作業時間', '5,000', '15,000']] },
          after: '機械加工は機械が中心なので機械時間、組立は手作業が中心なので直接作業時間を基準にする。'
        },
        {
          title: '例題: テーブル1台の製造原価',
          example: {
            problem: '上の家具工房。テーブル X は、機械加工で機械3時間（そのあいだ作業者の直接作業は1時間）、組立で直接作業2時間を使う。直接材料費は $20、直接労務費は $30。テーブル X 1台の製造原価（full production cost）は？',
            steps: ['機械加工の配賦率: $120,000 ÷ 20,000 機械時間 ＝ 機械1時間 $6', '組立の配賦率: $60,000 ÷ 15,000 直接作業時間 ＝ 1時間 $4', 'X の製造間接費: 3時間 × $6 ＋ 2時間 × $4 ＝ $18 ＋ $8 ＝ $26', '素価: $20 ＋ $30 ＝ $50', '製造原価: $50 ＋ $26 ＝ $76'],
            answer: '製造間接費 $26、製造原価 $76'
          }
        },
        {
          title: '工場全体で1本の率ではだめ？',
          paras: ['工場全体の1本の率（blanket rate）にすると、$180,000 ÷ 直接作業時間 20,000 ＝ 1時間 $9。X の直接作業時間は、機械加工1時間＋組立2時間＝3時間なので $27。', '別のいす Y は、機械加工で機械0.5時間・作業0.5時間、組立で作業4時間を使う。部門別なら $3 ＋ $16 ＝ $19、1本の率なら4.5時間 × $9 ＝ $40.50。'],
          table: { caption: '製品1個の製造間接費', head: ['項目', '部門別の率', '工場全体の率'], rows: [['テーブル X', '$26', '$27'], ['いす Y', '$19', '$40.50']] },
          after: '製品ごとに部門の使い方がちがうときは、部門別の率（departmental rates）の方が正確になる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '機械化した部門なのに直接作業時間で割る。逆に割り算して「時間 ÷ 金額」にする。製造原価を聞かれているのに、製造間接費だけを答える。素価の % で配賦するとき、直接労務費だけにかけてしまう。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予定配賦率 ＝ 予算の製造間接費 ÷ 予算の作業量', '機械中心の部門は機械時間、手作業中心の部門は直接作業時間を基準にする', '製品1個の製造間接費は、各部門の率 × その部門で使う時間を足す']
        },
        {
          title: '英単語',
          words: [
            ['absorption', 'アブソープション', '配賦（製造間接費を製品に付けること）'],
            ['overhead absorption rate (OAR)', '', '製造間接費の配賦率'],
            ['absorption base', '', '配賦の基準'],
            ['machine hour', 'マシーン アワー', '機械時間'],
            ['direct labour hour', '', '直接作業時間'],
            ['blanket rate', 'ブランケット レート', '工場全体で1本の配賦率（single factory-wide rate とも）'],
            ['departmental absorption rate', '', '部門別の配賦率'],
            ['full production cost', '', '製造原価（素価＋製造間接費）']
          ]
        }
      ],
      quiz: [
        { q: 'A machining department is highly mechanised. Its budgeted overheads are $240,000, budgeted machine hours are 30,000 and budgeted direct labour hours are 8,000. What is the most appropriate overhead absorption rate?', choices: ['$30.00 per direct labour hour', '$6.32 per hour (machine and labour hours added together)', '$8.00 per machine hour', '$0.125 per machine hour'], answer: 2, explain: '機械中心の部門なので機械時間を使う: $240,000 ÷ 30,000 ＝ $8。$30 は手作業中心の部門の基準。$6.32 は種類のちがう時間を足してしまった答え。$0.125 は割り算を逆にした答え。' },
        { q: '部門 A の予定配賦率は機械1時間 $5、部門 B は直接作業1時間 $12。製品 P は、部門 A で機械4時間、部門 B で直接作業1.5時間を使う。製品 P 1個に配賦する製造間接費はいくら？', type: 'number', answer: 38, unit: '$', explain: '4時間 × $5 ＝ $20、1.5時間 × $12 ＝ $18。合計 $38。部門ごとに、その部門の率と時間をかけてから足す。' },
        { q: 'Production overheads are absorbed at 150% of direct labour cost. A job has direct materials of $400 and direct labour of $200. What is the total production cost of the job?', type: 'number', answer: 900, unit: '$', explain: '製造間接費は直接労務費 $200 × 150% ＝ $300。製造原価は $400 ＋ $200 ＋ $300 ＝ $900。素価 $600 に 150% をかけると $900 の製造間接費になり、まちがい。$300 だけ答えるのは製造間接費だけの答え。' },
        { q: '製品1個あたり（per unit）を基準に配賦してよいのは、どんなとき？', choices: ['機械化が進んだ部門', '手作業が中心の部門', '製品ごとに作業時間が大きくちがうとき', '工場が同じ製品1種類だけを作るとき'], answer: 3, explain: '1個あたりで配ると、どの製品も同じ額になる。製品が全部同じときだけ公平。作業時間がちがうなら、時間を基準にする。' },
        { q: 'Which of the following is the correct order of steps for charging production overheads to cost units?', choices: ['Absorption, allocation, apportionment, reapportionment', 'Allocation, apportionment, reapportionment, absorption', 'Apportionment, absorption, allocation, reapportionment', 'Allocation, absorption, apportionment, reapportionment'], answer: 1, explain: 'まず部門に集め（割当・按分）、補助部門の費用を製造部門に移し（再配分）、最後に製品に付ける（配賦）。製品に付けるのは最後。' }
      ]
    },
    {
      id: 'M044',
      no: 44,
      title: '予定配賦率と実際配賦率',
      goal: '予定配賦率と実際配賦率のちがいを説明し、それぞれの長所と短所を挙げられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(v)'],
      slides: [
        {
          title: '合宿の会費は、先に決めて集める',
          paras: ['サークルの合宿。かかった費用が全部分かるのは、合宿が終わってから。でも、それまで会費を決めないと、参加の申し込みも受けられない。', 'だから、去年の実績から「1人2万円」と先に決めて集め、終わってから精算する。製造間接費の配賦率も、同じように先に決めておく。']
        },
        {
          title: '2つの配賦率',
          list: ['予定配賦率（pre-determined absorption rate）: 期首に、予算の数字で決める', '実際配賦率（actual absorption rate）: 期末に、実際の数字で計算する'],
          formula: '予定 ＝ 予算の製造間接費 ÷ 予算の作業量',
          after: '実際配賦率は、実際の製造間接費 ÷ 実際の作業量。どちらも期末まで分からない。'
        },
        {
          title: '例: 季節で作業量が変わる工房',
          paras: ['家具工房の製造間接費は、毎月 $10,000 で変わらない。作業時間は、閑散期の1月は1,000時間、繁忙期の7月は2,500時間。いす1脚は2時間かかる。年間の予算は $120,000、20,000時間。'],
          table: { caption: 'いす1脚の製造間接費', head: ['項目', '1月', '7月'], rows: [['作業時間', '1,000', '2,500'], ['実際配賦率（1時間）', '$10', '$4'], ['いす1脚（2時間）', '$20', '$8'], ['予定配賦率 $6 なら', '$12', '$12']] }
        },
        {
          title: 'なぜ？ ふつうは予定配賦率を使う',
          paras: ['同じいすなのに、作った月で原価が $20 になったり $8 になったりする。これでは値段を決められない。予定配賦率なら、年間の平均でならして、いつも $12 になる。', 'もう1つは時間。実際配賦率は期末にならないと出ないので、期中に原価が分からない。お客さんの見積もり（quotation）や値決め、在庫の評価が遅れる。']
        },
        {
          title: '長所と短所をくらべる',
          table: { caption: '予定配賦率と実際配賦率', head: ['項目', '予定配賦率', '実際配賦率'], rows: [['分かる時期', '期首（すぐ使える）', '期末（後で出る）'], ['月ごとの原価', 'ぶれない', '季節でぶれる'], ['見積もり・値決め', 'すぐできる', '遅れる'], ['期末の差', '過小・過大配賦が出る', '出ない'], ['正確さ', '予算の見積もり次第', '実際の額と一致']] }
        },
        {
          title: '予定配賦率の弱点は「差」が出ること',
          paras: ['予算は見積もりなので、実際の製造間接費や作業量とはずれる。予定配賦率で製品に付けた合計（配賦額）と、実際にかかった額に差が出る。', 'この差を過小配賦（under-absorption）・過大配賦（over-absorption）という。期末に調整が必要になる。次のレッスンで計算と仕訳を学ぶ。'],
          formula: '配賦額 ＝ 予定配賦率 × 実際の作業量'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '予定配賦率の計算に実際の数字を入れてしまう。予定配賦率は、分子も分母も予算の数字。実際の作業量を使うのは、配賦額を出すとき。また「実際配賦率の方が正確だから優れている」と覚えない。期中に使えないのが大きな欠点。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予定配賦率は期首に予算の数字で決め、実際配賦率は期末に実際の数字で出す', '予定配賦率の長所: すぐ原価が分かる、月ごとにぶれない、見積もり・値決めに使える', '予定配賦率の短所: 過小・過大配賦が出て、期末に調整が要る']
        },
        {
          title: '英単語',
          words: [
            ['pre-determined absorption rate', '', '予定配賦率（予算の数字で決める）'],
            ['actual absorption rate', '', '実際配賦率'],
            ['budgeted overheads', '', '予算の製造間接費'],
            ['budgeted activity level', '', '予算の作業量（操業度）'],
            ['seasonal fluctuations', '', '季節による変動'],
            ['quotation', 'クォテーション', '見積もり'],
            ['under-/over-absorption', '', '過小配賦・過大配賦']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an advantage of using a pre-determined overhead absorption rate rather than an actual rate?', choices: ['There will be no under- or over-absorption of overheads', 'It uses actual figures, so product costs are always accurate', 'Product costs can be calculated during the period, as soon as jobs are completed', 'It removes the need to prepare a budget'], answer: 2, explain: '予定配賦率は期首に決まるので、期中すぐ原価が分かる。過小・過大配賦が出るのは予定配賦率の方。予定配賦率は予算の数字を使うので、予算は必要。' },
        { q: 'A pre-determined overhead absorption rate is calculated as:', choices: ['Actual overheads divided by actual activity', 'Budgeted overheads divided by budgeted activity', 'Budgeted overheads divided by actual activity', 'Actual overheads divided by budgeted activity'], answer: 1, explain: '分子も分母も予算の数字。1つ目は実際配賦率。3つ目と4つ目は予算と実際が混ざっている。' },
        { q: '工房の製造間接費は毎月 $8,000 で変わらない。2月の作業時間は800時間。実際配賦率を毎月計算すると、2月に作った製品（1個2時間）の製造間接費はいくら？', type: 'number', answer: 20, unit: '$', explain: '2月の実際配賦率は $8,000 ÷ 800時間 ＝ $10。2時間で $20。作業時間が2,000時間の月なら $4 × 2 ＝ $8 になり、同じ製品の原価が月でぶれる。' },
        { q: '実際配賦率の説明として、正しくないものは？', choices: ['月ごとに製品原価がぶれることがある', '期中に原価が分からず、見積もりが遅れる', '期末になるまで配賦率が決まらない', '期末に過小配賦・過大配賦が出る'], answer: 3, explain: '実際配賦率は、実際の額をそのまま配るので差が出ない。過小・過大配賦が出るのは予定配賦率の方。ほかの3つは実際配賦率の短所。' },
        { q: 'Which of the following is a disadvantage of using an actual overhead absorption rate?', choices: ['Product costs cannot be calculated until the end of the period', 'Overheads will be under- or over-absorbed', 'It relies on estimates of budgeted overheads and activity', 'It must use machine hours as the absorption base'], answer: 0, explain: '実際の数字は期末にならないと分からない。2つ目と3つ目は予定配賦率の短所。基準は機械時間に限らない。' }
      ]
    },
    {
      id: 'M045',
      no: 45,
      title: '配賦差異（過大配賦・過小配賦）とその仕訳',
      goal: '配賦額と実際の製造間接費をくらべて過大配賦・過小配賦を計算し、原因を説明して、仕訳と利益への影響を書けるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(vi)'],
      slides: [
        {
          title: '合宿の会費を精算する',
          paras: ['20人から2万円ずつ、合計40万円を集めた。実際の費用が42万円なら2万円足りない。38万円なら2万円余る。', '製造間接費も同じ。予定配賦率で製品に付けた額（集めた会費）と、実際にかかった額（実際の費用）をくらべて、期末に精算する。']
        },
        {
          title: '配賦額と実際額をくらべる',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="配賦額が実際額より多いと過大配賦、少ないと過小配賦" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">配賦した額と、実際にかかった額</text><rect x="20" y="48" width="400" height="92" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="74" font-size="16" font-weight="600" fill="var(--ink)">配賦額 ＞ 実際額</text><text x="36" y="98" fill="var(--ink)">過大配賦（over-absorbed）</text><text x="36" y="124" fill="var(--quiet)">製品に多く付けすぎ → 差を利益に足す</text><rect x="20" y="154" width="400" height="92" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="180" font-size="16" font-weight="600" fill="var(--ink)">配賦額 ＜ 実際額</text><text x="36" y="204" fill="var(--ink)">過小配賦（under-absorbed）</text><text x="36" y="230" fill="var(--ink)">製品に付け足りない → 差を利益から引く</text><text x="220" y="270" text-anchor="middle" fill="var(--ink)">配賦額 ＝ 予定配賦率 × 実際の作業量</text></svg>`,
          caption: '配賦額（absorbed overheads）は、予定配賦率に実際の作業量をかけて出す。予算の作業量ではない。'
        },
        {
          title: '例題1: 過小配賦',
          example: {
            problem: '予算: 製造間接費 $150,000、直接作業時間 30,000時間。実際: 製造間接費 $162,000、直接作業時間 31,000時間。過小配賦か過大配賦か、いくら？',
            steps: ['予定配賦率: $150,000 ÷ 30,000 ＝ 1時間 $5', '配賦額: $5 × 実際の31,000時間 ＝ $155,000', '実際額 $162,000 とくらべる: $155,000 − $162,000 ＝ −$7,000', '配賦額の方が少ない → 足りない'],
            answer: '$7,000 の過小配賦（under-absorbed）。利益を $7,000 減らす'
          }
        },
        {
          title: '例題2: 過大配賦',
          example: {
            problem: '予算: 製造間接費 $160,000、機械時間 20,000時間。実際: 製造間接費 $165,000、機械時間 21,500時間。過小配賦か過大配賦か、いくら？',
            steps: ['予定配賦率: $160,000 ÷ 20,000 ＝ 機械1時間 $8', '配賦額: $8 × 21,500時間 ＝ $172,000', '実際額 $165,000 とくらべる: $172,000 − $165,000 ＝ $7,000', '配賦額の方が多い → 付けすぎ'],
            answer: '$7,000 の過大配賦（over-absorbed）。利益を $7,000 増やす'
          }
        },
        {
          title: '製造間接費勘定で見る（例題1）',
          paras: ['実際にかかった額（合計 $162,000）は、製造間接費勘定（production overhead control account）の借方に集める。間接材料・間接労務費・その他の経費が入る。製品に配賦した額は、貸方から仕掛品（work in progress）へ移す。'],
          tAccount: { name: 'Production overhead control', debit: [['Materials control（間接材料）', '20,000'], ['Wages control（間接労務費）', '45,000'], ['Bank・payables（その他の経費）', '97,000']], credit: [['Work in progress（配賦額）', '155,000'], ['Under/over absorbed overhead（過小）', '7,000']] },
          after: '振替の前は、借方が $7,000 多い。この $7,000 を貸方に書いて配賦差異の勘定（under/over absorbed overhead account）へ移し、期末に損益計算書へ振り替える。'
        },
        {
          title: '仕訳の向き',
          table: { caption: '期末の振替', head: ['項目', '過小配賦', '過大配賦'], rows: [['製造間接費勘定の残り', '借方に残る', '貸方に残る'], ['借方（Dr）', 'Under/over absorbed', 'Production overhead control'], ['貸方（Cr）', 'Production overhead control', 'Under/over absorbed'], ['損益計算書', '費用に足す（利益が減る）', '費用から引く（利益が増える）']] },
          journal: [
            { side: 'Dr', account: 'Statement of profit or loss（例題1）', amount: '7,000' },
            { side: 'Cr', account: 'Under/over absorbed overhead', amount: '7,000' }
          ]
        },
        {
          title: 'なぜ？ 期末に利益を直す理由',
          paras: ['製品には、見積もりの率で製造間接費を付けた。売れた製品の原価に入っているのは、実際の額ではなく配賦額。', '例題1では、工場は実際に $162,000 使ったのに、原価には $155,000 しか入っていない。このままだと費用が $7,000 少なく、利益が多すぎる。だから足りない分を費用に足して、実際の額にそろえる。']
        },
        {
          title: '原因を2つに分ける（例題1）',
          example: {
            problem: '例題1の $7,000 の過小配賦は、なぜ起きた？',
            steps: ['支出: 実際 $162,000 − 予算 $150,000 ＝ $12,000 多く使った → 過小の方向に $12,000', '作業量: (31,000 − 30,000) 時間 × $5 ＝ $5,000 多く配賦した → 過大の方向に $5,000', '合計: $12,000 − $5,000 ＝ $7,000 の過小配賦（計算と一致）'],
            answer: '使いすぎ（支出）が原因。作業量が予算より多かった分で、一部は打ち消された'
          },
          after: '過大配賦が「よいこと」とは限らない。支出が予算どおりでも、作業量が増えれば過大配賦になる。原因を確かめて判断する。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '配賦額を「予定配賦率 × 予算の作業量」で出してしまう（それは予算の製造間接費と同じになる）。予算の製造間接費と実際の額をくらべてしまう。過大・過小の向きを逆にする。配賦額が実際より多い＝過大配賦＝利益に足す、で覚える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['配賦額 ＝ 予定配賦率 × 実際の作業量。これを実際の製造間接費とくらべる', '配賦額が多い＝過大配賦（利益に足す）、少ない＝過小配賦（利益から引く）', '原因は、支出が予算とちがうか、作業量が予算とちがうか（または両方）']
        },
        {
          title: '英単語',
          words: [
            ['absorbed overheads', '', '配賦額（製品に付けた製造間接費）'],
            ['under-absorption / under-absorbed', '', '過小配賦'],
            ['over-absorption / over-absorbed', '', '過大配賦'],
            ['production overhead control account', '', '製造間接費勘定'],
            ['under/over absorbed overhead account', '', '配賦差異の勘定'],
            ['work in progress (WIP)', '', '仕掛品'],
            ['actual overheads incurred', '', '実際にかかった製造間接費']
          ]
        }
      ],
      quiz: [
        { q: 'Budgeted production overheads were $180,000 and budgeted machine hours were 45,000. Actual overheads were $178,500 and actual machine hours were 43,000. What was the under- or over-absorption of overheads?', choices: ['$6,500 over-absorbed', '$8,000 under-absorbed', '$6,500 under-absorbed', '$1,500 over-absorbed'], answer: 2, explain: '配賦率 $180,000 ÷ 45,000 ＝ $4。配賦額 $4 × 43,000 ＝ $172,000。実際 $178,500 より少ないので $6,500 の過小配賦。$8,000 は予算の製造間接費と配賦額をくらべた答え。$1,500 は予算と実際の製造間接費をくらべた答え。' },
        { q: '予定配賦率は直接作業1時間 $12。実際の直接作業時間は9,500時間、実際の製造間接費は $110,000 だった。過小配賦または過大配賦の額はいくら？（向きも考えてから答える）', type: 'number', answer: 4000, unit: '$', explain: '配賦額 $12 × 9,500 ＝ $114,000。実際 $110,000 より $4,000 多いので、$4,000 の過大配賦。利益に $4,000 足す。' },
        { q: 'Over-absorption of overheads occurs when:', choices: ['Actual overheads incurred are greater than absorbed overheads', 'Actual overheads are greater than budgeted overheads', 'Actual activity is lower than budgeted activity', 'Absorbed overheads are greater than actual overheads incurred'], answer: 3, explain: '過大配賦は、製品に付けた額（配賦額）が実際の額より多いとき。1つ目は過小配賦。2つ目と3つ目は、どちらも過小配賦の原因になる動き。' },
        { q: '製造間接費が $4,000 過大配賦になった。製造間接費勘定から配賦差異の勘定へ移す仕訳は？', choices: ['Dr Under/over absorbed overhead $4,000 / Cr Production overhead control $4,000', 'Dr Production overhead control $4,000 / Cr Under/over absorbed overhead $4,000', 'Dr Work in progress $4,000 / Cr Production overhead control $4,000', 'Dr Production overhead control $4,000 / Cr Work in progress $4,000'], answer: 1, explain: '過大配賦だと、製造間接費勘定は貸方（配賦額）が多く、貸方に残る。借方に入れて消し、配賦差異の勘定の貸方へ。1つ目は過小配賦の仕訳。仕掛品は製品への配賦で使う勘定。' },
        { q: 'A company\'s actual production overheads were exactly equal to budget, but actual machine hours were higher than budgeted. Which of the following statements is correct?', choices: ['Overheads were under-absorbed and the adjustment will reduce profit', 'Overheads were over-absorbed and the adjustment will reduce profit', 'Overheads were over-absorbed and the adjustment will increase profit', 'There is no under- or over-absorption because actual overheads equal budget'], answer: 2, explain: '配賦額は予定配賦率 × 実際の時間なので、時間が予算より多いと、配賦額が予算（＝実際の額）を超える。過大配賦なので利益に足す。実際の額が予算どおりでも、作業量がずれれば差は出る。' },
        { q: '期末に $3,000 の過小配賦があった。損益計算書ではどう扱う？', choices: ['費用に足し、利益を $3,000 減らす', '費用から引き、利益を $3,000 増やす', '在庫の金額に足し、利益は変えない', '来年の予定配賦率に含め、今年は何もしない'], answer: 0, explain: '過小配賦は、実際にかかったのに原価に入らなかった分。期末に費用に足して、実際の額にそろえる。' }
      ]
    },
    {
      id: 'M046',
      no: 46,
      title: '総合演習: 材料費・労務費・製造間接費',
      goal: 'EOQ、払出単価（FIFO・平均法）、賞与を含む賃金、補助部門費の再配分、配賦差異を、1つの会社の問題で続けて計算できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(iv)', 'K2:B3(a)(vi)', 'K2:B3(b)(iii)', 'K2:B3(c)(iii)', 'K2:B3(c)(vi)'],
      slides: [
        {
          title: '料理を1品ずつ覚えたら、コースで通す',
          paras: ['前菜・主菜・デザートを別々に練習したら、最後に1回、通して作ってみる。順番や段取りの抜けは、通したときに見つかる。', 'この第3部も同じ。家具工房 Kobo を例に、材料・労務・製造間接費の計算を順番に通す。'],
          svg: `<svg viewBox="0 0 440 245" role="img" aria-label="材料費・労務費・製造間接費が製品の原価に集まる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">3つの原価が製品に集まる</text><rect x="20" y="48" width="210" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="75" text-anchor="middle" font-size="15" fill="var(--ink)">材料費（material）</text><rect x="20" y="106" width="210" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="133" text-anchor="middle" font-size="15" fill="var(--ink)">労務費（labour）</text><rect x="20" y="164" width="210" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="191" text-anchor="middle" font-size="15" fill="var(--ink)">製造間接費（overheads）</text><line x1="230" y1="70" x2="290" y2="118" stroke="var(--edge)" stroke-width="1.5"/><line x1="230" y1="128" x2="290" y2="130" stroke="var(--edge)" stroke-width="1.5"/><line x1="230" y1="186" x2="290" y2="142" stroke="var(--edge)" stroke-width="1.5"/><rect x="290" y="98" width="130" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="355" y="126" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">製品の原価</text><text x="355" y="148" text-anchor="middle" font-size="12.5" fill="var(--quiet)">production cost</text><text x="220" y="234" text-anchor="middle" fill="var(--ink)">各部の計算を、1つの工房で通して使う</text></svg>`
        },
        {
          title: '例題1: 発注量（EOQ と数量割引）',
          example: {
            problem: 'Kobo は木の板を年間24,000枚使う。1回の発注費は $50、1枚の年間保管費は $2.40、仕入単価は $10。1回に2,000枚以上注文すると1%の割引がある。EOQ を出し、割引を受けるべきか判断する。',
            steps: ['EOQ ＝ √(2 × $50 × 24,000 ÷ $2.40) ＝ √1,000,000 ＝ 1,000枚', 'EOQ で注文: 購入 24,000 × $10 ＝ $240,000、発注 24回 × $50 ＝ $1,200、保管 1,000 ÷ 2 × $2.40 ＝ $1,200。合計 $242,400', '2,000枚で注文: 購入 24,000 × $9.90 ＝ $237,600、発注 12回 × $50 ＝ $600、保管 2,000 ÷ 2 × $2.40 ＝ $2,400。合計 $240,600', 'くらべる: $242,400 − $240,600 ＝ $1,800 安い'],
            answer: 'EOQ は1,000枚。ただし割引を受けて2,000枚ずつ注文する方が、年間 $1,800 安い'
          },
          after: 'くらべるのは EOQ と、割引を受けられる最小の数量（ここでは2,000枚）。保管費が「単価の○%」と決まっているときは、割引で単価が下がると1個の保管費も下がるので、計算し直す。'
        },
        {
          title: '例題2の材料データ（3月）',
          table: { caption: '金具の受入と払出', head: ['日付', '取引', '数量・単価'], rows: [['1日', '期首在庫', '200個 @ $5.00'], ['3日', '受入', '300個 @ $6.00'], ['10日', '払出', '400個'], ['20日', '受入', '300個 @ $6.80'], ['25日', '払出', '150個']] },
          example: {
            problem: '先入先出法（FIFO）で、払出の金額と期末在庫は？',
            steps: ['10日の払出400個: 古い順に 200個 × $5 ＋ 200個 × $6 ＝ $1,000 ＋ $1,200 ＝ $2,200', '残り: 3日分の100個 @ $6。20日に300個 @ $6.80 が入る', '25日の払出150個: 100個 × $6 ＋ 50個 × $6.80 ＝ $600 ＋ $340 ＝ $940', '期末在庫: 250個 × $6.80 ＝ $1,700', '確かめ: $2,200 ＋ $940 ＋ $1,700 ＝ $4,840（期首＋受入の合計）'],
            answer: '払出 $3,140、期末在庫 $1,700'
          }
        },
        {
          title: '例題2の続き: 2つの平均法',
          example: {
            problem: '同じデータを、移動平均法（cumulative weighted average）と総平均法（periodic weighted average）で計算する。',
            steps: ['移動平均: 3日に 500個・$2,800 → 平均 $5.60。10日の払出 400個 × $5.60 ＝ $2,240', '残り100個・$560。20日に $2,040 が入り、400個・$2,600 → 平均 $6.50', '25日の払出 150個 × $6.50 ＝ $975。期末在庫 250個 × $6.50 ＝ $1,625', '移動平均の払出合計: $2,240 ＋ $975 ＝ $3,215（$3,215 ＋ $1,625 ＝ $4,840）', '総平均: 月全体で800個・$4,840 → 平均 $6.05。払出 550個 × $6.05 ＝ $3,327.50、期末在庫 250個 × $6.05 ＝ $1,512.50'],
            answer: '払出は FIFO $3,140、移動平均 $3,215、総平均 $3,327.50。期末在庫は FIFO $1,700、移動平均 $1,625、総平均 $1,512.50'
          },
          after: '値上がりが続くとき、FIFO は新しい高い単価で在庫が残るので、期末在庫が一番大きくなる。'
        },
        {
          title: '例題3: 時間節約の賞与つき賃金',
          example: {
            problem: 'Kobo の作業者は時給 $15 で、今週40時間働き、いすを100脚作った。標準時間は1脚0.5時間。賞与は「節約した時間の50% × 時給」。今週の賃金の総額は？',
            steps: ['認められた時間: 100脚 × 0.5時間 ＝ 50時間', '節約した時間: 50時間 − 40時間 ＝ 10時間', '賞与: 10時間 × 50% × $15 ＝ $75', '基本給: 40時間 × $15 ＝ $600', '総額: $600 ＋ $75 ＝ $675'],
            answer: '賃金の総額 $675（基本給 $600 ＋ 賞与 $75）'
          }
        },
        {
          title: '例題4のデータ: 補助部門どうしのサービス',
          paras: ['按分後の製造間接費: 機械加工 M $40,000、組立 A $30,000、倉庫 S $12,400、保守 K $10,000（合計 $92,400）。倉庫と保守は補助部門で、お互いにもサービスしている。'],
          table: { caption: 'サービスの割合', head: ['項目', '倉庫 S から', '保守 K から'], rows: [['機械加工 M へ', '50%', '60%'], ['組立 A へ', '30%', '20%'], ['保守 K へ', '20%', '—'], ['倉庫 S へ', '—', '20%']] }
        },
        {
          title: '例題4: 相互配賦法（reciprocal method）',
          example: {
            problem: '相互配賦法で、M と A の製造間接費の合計は？',
            steps: ['式を立てる: S ＝ 12,400 ＋ 0.2K、K ＝ 10,000 ＋ 0.2S', '代入: S ＝ 12,400 ＋ 0.2 × (10,000 ＋ 0.2S) ＝ 14,400 ＋ 0.04S', '0.96S ＝ 14,400 → S ＝ $15,000。K ＝ 10,000 ＋ 0.2 × 15,000 ＝ $13,000', 'M: 40,000 ＋ 15,000 × 50% ＋ 13,000 × 60% ＝ $55,300', 'A: 30,000 ＋ 15,000 × 30% ＋ 13,000 × 20% ＝ $37,100', '確かめ: $55,300 ＋ $37,100 ＝ $92,400'],
            answer: 'M $55,300、A $37,100'
          },
          after: 'なぜ結果がちがう？ 直接配賦法（M $55,250）は補助部門どうしのサービスを無視し、階梯式（倉庫から始めると M $55,560）は一方向だけ数える。相互配賦法は両方向を全部数えるので一番正確。'
        },
        {
          title: '例題5: 配賦と配賦差異',
          example: {
            problem: '機械加工 M の予算: 製造間接費 $55,300（例題4）、機械時間 7,900時間。実際: 機械時間 8,200時間、製造間接費 $56,900。過小配賦か過大配賦か、いくら？ 仕訳は？',
            steps: ['予定配賦率: $55,300 ÷ 7,900 ＝ 機械1時間 $7', '配賦額: $7 × 8,200 ＝ $57,400', '実際 $56,900 とくらべる: $57,400 − $56,900 ＝ $500 多い → 過大配賦', '原因: 支出は $1,600 の使いすぎ（過小の方向）、作業量は 300時間 × $7 ＝ $2,100（過大の方向）。差し引き $500 の過大', '仕訳: Dr Production overhead control $500 / Cr Under/over absorbed overhead $500。期末に損益計算書へ（利益に足す）'],
            answer: '$500 の過大配賦。利益を $500 増やす'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'EOQ の式で発注費と保管費を逆にする。割引の判断で購入費を入れ忘れる。移動平均法で、受入のたびに平均を出し直さない。相互配賦法で、補助部門の元の額（$12,400）をそのまま配る。配賦額に予算の作業量を使う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['EOQ ＝ √(2 × 発注費 × 年間需要 ÷ 保管費)。割引は購入費も入れた合計でくらべる', '再配分は直接・階梯式・相互の3つ。相互配賦法は連立方程式で両方向を数える', '配賦額 ＝ 予定配賦率 × 実際の作業量。実際額より多ければ過大配賦']
        },
        {
          title: '英単語',
          words: [
            ['economic order quantity (EOQ)', '', '経済的発注量'],
            ['quantity discount', '', '数量割引'],
            ['periodic weighted average', '', '総平均法'],
            ['cumulative weighted average', '', '移動平均法'],
            ['time saved bonus', '', '時間節約の賞与'],
            ['direct / step-down / reciprocal method', '', '直接配賦法 / 階梯式配賦法 / 相互配賦法'],
            ['service cost centre', '', '補助部門']
          ]
        }
      ],
      quiz: [
        { q: 'A company uses 40,000 units of a material each year. The cost of placing an order is $25 and the cost of holding one unit in inventory for a year is $0.50. What is the economic order quantity?', type: 'number', answer: 2000, unit: '個', explain: '√(2 × $25 × 40,000 ÷ $0.50) ＝ √4,000,000 ＝ 2,000。保管費と発注費を逆に入れると、ちがう答えになる。' },
        { q: 'At 1 March a company had 100 units of inventory valued at $4 each. On 5 March it bought 300 units at $6 each. On 20 March it issued 250 units. Using the periodic weighted average method, what is the value of closing inventory at 31 March?', choices: ['$900', '$750', '$600', '$825'], answer: 3, explain: '平均単価は ($400 ＋ $1,800) ÷ 400個 ＝ $5.50。残り150個 × $5.50 ＝ $825。$900 は FIFO（150個 × $6）。$750 は単価 $4 と $6 を単純に平均した答え。$600 は古い単価 $4 で残した答え。' },
        { q: '出来高給は1個 $5.80 で、週の最低保証は $560。今週、作業者は92個を作った。今週の賃金はいくら？', type: 'number', answer: 560, unit: '$', explain: '出来高給は 92 × $5.80 ＝ $533.60。最低保証 $560 より少ないので、$560 を払う。' },
        { q: 'A factory has two production departments (Machining and Assembly) and two service departments (Stores and Maintenance). Overheads after apportionment are: Machining $40,000, Assembly $30,000, Stores $12,400 and Maintenance $10,000. Stores provides 50% of its services to Machining, 30% to Assembly and 20% to Maintenance. Maintenance provides 60% to Machining, 20% to Assembly and 20% to Stores. Using the step-down method and reapportioning Stores first, what are the total overheads of Machining?', choices: ['$55,250', '$55,000', '$55,560', '$55,300'], answer: 2, explain: '倉庫 $12,400 を M $6,200・A $3,720・保守 $2,480 に配る。保守は $12,480 になり、M と A に 60:20 で配る → M $9,360。M ＝ $40,000 ＋ $6,200 ＋ $9,360 ＝ $55,560。$55,250 は直接配賦法、$55,300 は相互配賦法、$55,000 は保守から先に配った答え。階梯式では、ふつうほかの補助部門へのサービスが多い部門（または金額が大きい部門）から先に配る。' },
        { q: 'Budgeted overheads were $210,000 and budgeted direct labour hours were 42,000. Actual direct labour hours were 40,000 and overheads were over-absorbed by $6,000. What were the actual overheads?', choices: ['$206,000', '$194,000', '$204,000', '$216,000'], answer: 1, explain: '配賦率 $5。配賦額 $5 × 40,000 ＝ $200,000。過大配賦は「配賦額の方が多い」ので、実際は $200,000 − $6,000 ＝ $194,000。$206,000 は向きを逆にした答え。$204,000 と $216,000 は、予算の製造間接費から計算した答え。' },
        { q: '補助部門どうしのサービスを、両方向とも全部計算に入れる再配分の方法は？', choices: ['相互配賦法（reciprocal method）', '直接配賦法（direct method）', '階梯式配賦法（step-down method）', '工場全体の配賦率（blanket rate）'], answer: 0, explain: '直接配賦法は補助部門どうしを無視、階梯式は一方向だけ。相互配賦法は連立方程式で両方向を数える。blanket rate は配賦率の話で、再配分の方法ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'M043-1', lesson: 'M043', q: '予定配賦率（OAR）の式は？', a: '予算の製造間接費 ÷ 予算の作業量（機械時間・直接作業時間など）' },
    { id: 'M043-2', lesson: 'M043', q: '機械中心の部門と手作業中心の部門、それぞれの配賦基準は？', a: '機械中心は機械時間、手作業中心は直接作業時間' },
    { id: 'M043-3', lesson: 'M043', q: 'なぜ時間を配賦の基準にするのがよい？', a: '家賃・減価償却・監督者の給料など、製造間接費の多くは時間とともにかかるから' },
    { id: 'M043-4', lesson: 'M043', q: '工場全体で1本の配賦率（blanket rate）の問題は？', a: '製品ごとに部門の使い方がちがうと、原価がゆがむ。部門別の率の方が正確' },
    { id: 'M043-5', lesson: 'M043', q: '製品1個の製造間接費の出し方は？', a: '各部門の配賦率 × その部門で使う時間を、部門ごとに出して足す' },
    { id: 'M044-1', lesson: 'M044', q: '予定配賦率と実際配賦率、計算に使う数字は？', a: '予定は予算の製造間接費 ÷ 予算の作業量。実際は実際の額 ÷ 実際の作業量' },
    { id: 'M044-2', lesson: 'M044', q: '実際配賦率の一番の短所は？', a: '期末まで分からず、期中に原価計算・見積もり・値決めができない' },
    { id: 'M044-3', lesson: 'M044', q: '予定配賦率の長所を3つ', a: 'すぐ原価が分かる／月ごとにぶれない／見積もり・値決めに使える' },
    { id: 'M044-4', lesson: 'M044', q: '予定配賦率の短所は？', a: '予算と実際がずれると過小・過大配賦が出て、期末に調整が要る' },
    { id: 'M044-5', lesson: 'M044', q: '月ごとの実際配賦率がぶれるのはなぜ？', a: '製造間接費は毎月ほぼ同じでも、作業量が季節で変わるから' },
    { id: 'M045-1', lesson: 'M045', q: '配賦額（absorbed overheads）の式は？', a: '予定配賦率 × 実際の作業量' },
    { id: 'M045-2', lesson: 'M045', q: '過大配賦とは？ 利益への影響は？', a: '配賦額が実際の製造間接費より多い。期末に利益に足す' },
    { id: 'M045-3', lesson: 'M045', q: '過小配賦とは？ 利益への影響は？', a: '配賦額が実際の製造間接費より少ない。期末に利益から引く' },
    { id: 'M045-4', lesson: 'M045', q: '過小配賦の振替仕訳は？', a: 'Dr Under/over absorbed overhead / Cr Production overhead control' },
    { id: 'M045-5', lesson: 'M045', q: '製品に配賦するときの仕訳は？', a: 'Dr Work in progress / Cr Production overhead control' },
    { id: 'M045-6', lesson: 'M045', q: '過小・過大配賦の2つの原因は？', a: '製造間接費が予算とちがう（支出）、作業量が予算とちがう（量）' },
    { id: 'M046-1', lesson: 'M046', q: 'EOQ の式は？', a: '√(2 × 1回の発注費 × 年間需要 ÷ 1個の年間保管費)' },
    { id: 'M046-2', lesson: 'M046', q: '数量割引があるとき、どう判断する？', a: '購入費＋発注費＋保管費の合計を、EOQ と割引の最小数量でくらべる' },
    { id: 'M046-3', lesson: 'M046', q: '移動平均法（cumulative weighted average）の特徴は？', a: '受入のたびに平均単価を計算し直し、その単価で払い出す' },
    { id: 'M046-4', lesson: 'M046', q: '相互配賦法の特徴は？', a: '補助部門どうしのサービスを、連立方程式で両方向とも数える' },
    { id: 'M046-5', lesson: 'M046', q: '過大配賦の額から実際の製造間接費を出すには？', a: '配賦額 − 過大配賦の額（過小なら配賦額 ＋ 過小配賦の額）' },
    { id: 'M046-6', lesson: 'M046', q: '最低保証つきの出来高給の計算は？', a: '出来高給を計算し、最低保証より少なければ最低保証を払う' }
  ]
});
