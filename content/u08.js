(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 8,
  part: 5,
  partTitle: '棚卸資産',
  lessons: [
    {
      id: 'L37',
      no: 37,
      title: '継続記録と期末記録',
      goal: '在庫を「出入りのたびに記録する方法」と「期末に数える方法」の違いと使い分けを説明し、棚卸の日が決算日とずれたときの在庫を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D3(e)'],
      slides: [
        {
          title: '冷蔵庫の卵を知る2つの方法',
          paras: ['冷蔵庫に卵が何個あるか知りたい。やり方は2つある。'],
          list: ['① 買うたび・使うたびにアプリに記録する。開けなくても、今の個数がいつも分かる', '② ふだんは記録しない。月末に冷蔵庫を開けて数える'],
          after: '①は手間がかかるが、いつでも分かる。②はラクだが、数える日まで分からない。お店の在庫（inventory）の記録も、この2つのやり方がある。'
        },
        {
          title: '継続記録（continuous inventory records）',
          paras: ['商品が入るたび・出るたびに記録して、在庫の数と金額をいつも最新にしておく方法。perpetual inventory（パーペチュアル）とも呼ぶ。', '商品ごとに在庫カード（inventory card）を作り、入った・出た・残りを1行ずつ書く。今はレジやバーコードでコンピュータが自動で記録することが多い。'],
          table: { caption: 'スマホケースの在庫カード（個数だけ）', head: ['日付', '入った・出た', '残り'], rows: [['1日', '前月から', '100個'], ['8日', '入った 200個', '300個'], ['14日', '出た 240個', '60個']] }
        },
        {
          title: '期末記録（period-end inventory records）',
          paras: ['ふだんは在庫の出入りを記録しない。仕入れたときは仕入（purchases）として記録するだけ。', '期末に実地棚卸（inventory count）で残っている商品を数え、原価をかけて期末在庫の金額を出す。売上原価は、前に学んだ式で後から計算する。periodic inventory とも呼ぶ。'],
          formula: '売上原価 ＝ 期首在庫 ＋ 仕入 − 期末在庫'
        },
        {
          title: '2つを比べる',
          table: {
            caption: '継続記録と期末記録',
            head: ['項目', '継続記録', '期末記録'],
            rows: [
              ['在庫の数・金額', 'いつでも分かる', '数えた日だけ分かる'],
              ['売上原価', '売るたびに記録', '期末に式で計算'],
              ['手間・費用', '大きい（システムが要る）', '小さい'],
              ['なくした・盗まれた分', '帳簿と実物の差で分かる', '売上原価に混ざって見えない'],
              ['向いている店', '品数の多いスーパー、通販', '小さなお店']
            ]
          }
        },
        {
          title: '継続記録では、売るたびに原価も記録する',
          paras: ['原価 $1,200 の商品を $2,000 で掛け売りした。継続記録では、売上の仕訳に加えて、在庫を減らす仕訳もその場で書く。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '2,000' },
            { side: 'Cr', account: 'Revenue（売上）', amount: '2,000' },
            { side: 'Dr', account: 'Cost of sales（売上原価）', amount: '1,200' },
            { side: 'Cr', account: 'Inventory（在庫）', amount: '1,200' }
          ],
          after: '仕入れたときも、継続記録では Dr Inventory / Cr Trade payables と在庫を直接増やす。期末記録では下の2行は書かず、仕入は Purchases に入れて、期末の実地棚卸のあとでまとめて調整する。'
        },
        {
          title: 'なぜ？ 継続記録でも数える理由',
          paras: ['帳簿の数は「あるはず」の数。本当にあるかは、数えないと分からない。盗難、破損、入力ミスで、帳簿と実物は少しずつずれていく。', 'だから継続記録の会社も、毎日少しずつ数える（循環棚卸）か、期末にまとめて数える。差があれば帳簿を実物に合わせる。例: 帳簿は $3,050、数えたら $3,000。なくなった $50 は費用にする。'],
          journal: [
            { side: 'Dr', account: 'Cost of sales（売上原価）', amount: '50' },
            { side: 'Cr', account: 'Inventory（在庫）', amount: '50' }
          ]
        },
        {
          title: '実地棚卸が決算日とずれたら',
          paras: ['決算日（例: 12月31日）ぴったりに数えられないこともある。そのときは、数えた日の在庫から決算日の在庫に戻して計算する。'],
          svg: `<svg viewBox="0 0 440 222" role="img" aria-label="数えた日の在庫から決算日の在庫に戻す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">数えた日から決算日に戻す</text><text x="60" y="88" text-anchor="middle" font-weight="600" fill="var(--ink)">12月31日</text><text x="380" y="88" text-anchor="middle" font-weight="600" fill="var(--ink)">1月6日</text><line x1="72" y1="110" x2="368" y2="110" stroke="var(--edge)" stroke-width="2"/><path d="M72 110L86 102L86 118z" fill="var(--ink)"/><circle cx="60" cy="110" r="9" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><circle cx="380" cy="110" r="9" fill="none" stroke="var(--edge)" stroke-width="2"/><text x="60" y="140" text-anchor="middle" fill="var(--quiet)">決算日</text><text x="380" y="140" text-anchor="middle" fill="var(--quiet)">実地棚卸</text><text x="220" y="176" text-anchor="middle" fill="var(--ink)">その間に売って出ていった分 → 足す</text><text x="220" y="202" text-anchor="middle" fill="var(--ink)">その間に仕入れて入ってきた分 → 引く</text></svg>`,
          caption: '売って出ていった商品は、決算日には店にあった。仕入れた商品は、決算日にはまだなかった。数えた日が決算日より前なら、足すと引くが逆になる。'
        },
        {
          title: '例題: 決算日に戻す',
          example: {
            problem: '決算日は12月31日。実地棚卸は1月6日で、在庫の原価は $8,000。1月1日〜6日に、原価 $1,200 の商品を売って出荷し、原価 $700 の商品を仕入れて受け取った。12月31日の在庫は？',
            steps: ['売った $1,200 は、12月31日には店にあった → 足す: $8,000 ＋ $1,200 ＝ $9,200', '仕入れた $700 は、12月31日にはまだなかった → 引く: $9,200 − $700 ＝ $8,500'],
            answer: '$8,500'
          }
        },
        {
          title: 'よくある間違い',
          paras: ['売った分が売値（selling price）で書かれていたら、原価に直してから足し引きする。在庫は原価で数えるから。', 'mark-up 25%（原価に25%上乗せ）: 原価 ＝ 売値 ÷ 1.25。例: $1,250 ÷ 1.25 ＝ $1,000', 'margin 20%（売値の20%が利益）: 原価 ＝ 売値 × 0.8。例: $1,000 × 0.8 ＝ $800'],
          note: { kind: 'warn', text: '売値のまま足してしまう間違いと、足すと引くを逆にする間違いが多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['継続記録＝出入りのたびに記録。在庫がいつでも分かる。それでも実地棚卸は要る', '期末記録＝期末に数えて、売上原価は式で計算する', '棚卸が決算日のあとなら、その間に売った分を足し、仕入れた分を引く']
        },
        {
          title: '英単語',
          words: [
            ['continuous inventory records', '', '継続記録（出入りのたびに記録）'],
            ['perpetual inventory', 'パーペチュアル・インベントリー', '継続記録の別名'],
            ['period-end inventory records', '', '期末記録（期末に数える）'],
            ['periodic inventory', 'ピリオディック', '期末記録の別名'],
            ['inventory count', 'インベントリー・カウント', '実地棚卸（stocktake とも）'],
            ['inventory card', '', '在庫カード（商品ごとの出入りの記録）'],
            ['mark-up', 'マークアップ', '原価に対する利益の割合'],
            ['margin', 'マージン', '売値に対する利益の割合（売上総利益率）']
          ]
        }
      ],
      quiz: [
        { q: '継続記録の説明として正しいものは？', choices: ['出入りのたびに記録するので、在庫の数がいつでも分かる', '期末に数えたときだけ、在庫の数が分かる', '記録があるので、実地棚卸は一度もしなくてよい', '売上原価は、期末に式で計算するしかない'], answer: 0, explain: '出入りのたびに記録するのが継続記録。ただし盗難や入力ミスで帳簿と実物がずれるので、実地棚卸は必要。式で売上原価を出すのは期末記録の方。' },
        { q: 'Which of the following is an advantage of continuous inventory records compared with period-end inventory records?', choices: ['They are cheaper and simpler to operate', 'Up-to-date inventory levels are available at any time', 'An inventory count is never needed', 'Cost of sales is calculated only once a year'], answer: 1, explain: 'いつでも最新の在庫が分かるのが長所。手間と費用はむしろ大きい。実地棚卸は継続記録でも必要。年1回の計算は期末記録の特徴。' },
        { q: 'A business has a year end of 31 December. Its inventory count took place on 7 January, when inventory was valued at $15,600 at cost. Between 1 and 7 January, goods costing $2,300 were sold and despatched to customers, and goods costing $1,800 were received from suppliers. What is the value of inventory at 31 December?', type: 'number', answer: 16100, unit: '$', explain: '棚卸は決算日のあと。売った分は決算日にはあったので足し、仕入れた分はなかったので引く。$15,600 ＋ $2,300 − $1,800 ＝ $16,100。' },
        { q: '決算日は6月30日。実地棚卸は6月26日で、在庫の原価は $5,000。6月27日〜30日に原価 $600 の商品を売り、原価 $400 の商品を仕入れた。6月30日の在庫は？', choices: ['$4,800', '$5,200', '$6,000', '$4,000'], answer: 0, explain: '棚卸が決算日より前なので逆になる。数えたあとに売った分は決算日にはもうないので引き、仕入れた分は足す。$5,000 − $600 ＋ $400 ＝ $4,800。$5,200 は決算日のあとに数えたときの足し引きをしてしまった答え。' },
        { q: 'An inventory count on 5 January valued inventory at cost at $12,400. Between 31 December and 5 January, sales of $2,000 were made at a mark-up of 25% on cost, and purchases of $900 were received. What was the inventory at cost at 31 December?', choices: ['$13,500', '$13,100', '$11,700', '$13,000'], answer: 1, explain: '売値 $2,000 を原価に直す: $2,000 ÷ 1.25 ＝ $1,600。$12,400 ＋ $1,600 − $900 ＝ $13,100。$13,500 は売値のまま足した答え。$13,000 は 25% を margin（売値に対する割合）と取り違え、売値の75%を原価にした答え（mark-up は原価に対する割合なので ÷1.25）。$11,700 は足すと引くが逆。' },
        { q: '期末記録の会社が、期中に商品を掛けで仕入れた。借方に書く勘定は？', choices: ['Inventory', 'Purchases', 'Cost of sales', 'Trade payables'], answer: 1, explain: '期末記録では、仕入は Purchases（仕入）に記録し、在庫の勘定は期末の調整まで動かさない。Inventory を借方にするのは継続記録の場合。Trade payables は貸方。' }
      ]
    },
    {
      id: 'L38',
      no: 38,
      title: 'FIFO（先入先出法）',
      goal: '先に仕入れた物から先に売れたと考えて、期末在庫と売上原価を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D3(f)'],
      slides: [
        {
          title: 'コンビニの牛乳',
          paras: ['コンビニでは、古い牛乳を手前に、新しい牛乳を奥に並べる。先に入った物から先に売れていくので、棚に残るのはいつも新しい牛乳になる。', 'この考え方が FIFO（first in, first out、先入先出法）。「先に入った物が、先に出ていく」。']
        },
        {
          title: 'なぜ「方法」が必要なの？',
          paras: ['同じ商品でも、仕入れた時期で値段が違う。1つ売ったとき、その原価は $4 の物か、$5.50 の物か。見た目が同じ商品で、どれが売れたかを1つずつ追いかけるのは大変。', 'そこで「こういう順に出ていったと考える」というルールを決める。これを評価方法（原価の決め方）と呼ぶ。']
        },
        {
          title: 'IAS 2 が認める方法',
          list: ['FIFO（先入先出法）: 使ってよい', 'AVCO（平均法）: 使ってよい', 'LIFO（後入先出法、last in, first out）: 使えない'],
          after: 'これは、たくさんある同じ商品の話。絵画や注文品のような1点物は、その物の実際の原価を使う（個別法）。試験の計算は FIFO と AVCO。'
        },
        {
          title: 'お店の例: スマホケース（1月）',
          table: { caption: '1月の取引', head: ['日付', '取引', '個数・単価'], rows: [['1日', '期首在庫', '100個 × $4'], ['8日', '仕入', '200個 × $5.50'], ['14日', '販売', '240個'], ['21日', '仕入', '100個 × $7.40'], ['29日', '販売', '80個']] },
          after: '期末に残っているのは 100 ＋ 200 ＋ 100 − 240 − 80 ＝ 80個。この80個にいくらの値段をつけるかが問題になる。'
        },
        {
          title: '図で見る FIFO',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="FIFOでは古い物から先に出ていき、新しい物が残る" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">FIFO: 古い物から先に出ていく</text><text x="20" y="62" fill="var(--quiet)">← 古い</text><text x="420" y="62" text-anchor="end" fill="var(--quiet)">新しい →</text><rect x="20" y="74" width="120" height="76" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="104" text-anchor="middle" fill="var(--ink)">1日 期首</text><text x="80" y="130" text-anchor="middle" fill="var(--ink)">100個 × $4</text><rect x="160" y="74" width="120" height="76" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="104" text-anchor="middle" fill="var(--ink)">8日 仕入</text><text x="220" y="130" text-anchor="middle" fill="var(--ink)">200個 × $5.50</text><rect x="300" y="74" width="120" height="76" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="360" y="104" text-anchor="middle" fill="var(--ink)">21日 仕入</text><text x="360" y="130" text-anchor="middle" fill="var(--ink)">100個 × $7.40</text><text x="220" y="186" text-anchor="middle" fill="var(--ink)">売れた320個は、左（古い方）から順に取る</text><text x="220" y="212" text-anchor="middle" fill="var(--ink)">残った80個は、21日の $7.40 の物</text><text x="220" y="242" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期末在庫 80 × $7.40 ＝ $592</text></svg>`,
          caption: '残るのは、いちばん新しい仕入。残りが新しい仕入の個数より多いときは、その前の仕入までさかのぼる。'
        },
        {
          title: '例題: 期末にまとめて計算する',
          example: {
            problem: '上の表で、FIFO による1月末の在庫と、1月の売上原価は？',
            steps: ['① 残りの個数: 100 ＋ 200 ＋ 100 − 240 − 80 ＝ 80個', '② 残っているのは新しい物。21日の仕入（100個 × $7.40）から80個 → 80 × $7.40 ＝ $592', '③ 使えた商品の原価の合計（期首在庫＋仕入）: $400 ＋ $1,100 ＋ $740 ＝ $2,240', '④ 売上原価 ＝ $2,240 − $592 ＝ $1,648'],
            answer: '期末在庫 $592、売上原価 $1,648'
          }
        },
        {
          title: '例題: 売るたびに計算する（継続記録）',
          example: {
            problem: '同じ取引を、継続記録で売るたびに FIFO で計算する。',
            steps: ['14日に240個売る: 古い順に 100個 × $4 ＝ $400、140個 × $5.50 ＝ $770。原価 $1,170。残り 60個 × $5.50', '21日に 100個 × $7.40 が入る。残りは 60個 × $5.50 と 100個 × $7.40', '29日に80個売る: 60個 × $5.50 ＝ $330、20個 × $7.40 ＝ $148。原価 $478', '残り 80個 × $7.40 ＝ $592。売上原価 $1,170 ＋ $478 ＝ $1,648'],
            answer: 'FIFO は、期末にまとめて計算しても、売るたびに計算しても同じ答えになる'
          }
        },
        {
          title: 'なぜ？ FIFO が使われる理由',
          paras: ['多くの商品は、実際にも古い物から売る。食べ物は傷むし、服や機械は型が古くなるから。だから FIFO は実際の物の流れに近い。', '残る在庫に最近の値段がつくので、財政状態計算書の在庫の金額が今の値段に近くなる。一方で売上原価には古い値段が入るので、値上がりが続くと利益が大きめに出る（L40 で詳しく学ぶ）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '期末在庫に古い値段をつけてしまう。FIFO で残るのは新しい物。もう1つは、残った個数ではなく、仕入れた個数に単価をかけてしまうこと（100 × $7.40 ではなく 80 × $7.40）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['FIFO＝先に入った物が先に出る。残るのは新しい物', '期末在庫＝残った個数に、新しい仕入から順にさかのぼって単価をつける', '売上原価＝期首在庫＋仕入の原価の合計 − 期末在庫']
        },
        {
          title: '英単語',
          words: [
            ['FIFO (first in, first out)', 'ファイフォー', '先入先出法'],
            ['LIFO (last in, first out)', 'ライフォー', '後入先出法。IAS 2 では使えない'],
            ['IAS 2 Inventories', '', '棚卸資産の国際会計基準'],
            ['closing inventory', 'クロージング', '期末在庫'],
            ['opening inventory', 'オープニング', '期首在庫'],
            ['unit cost', 'ユニット・コスト', '1個あたりの原価（単価）']
          ]
        }
      ],
      quiz: [
        { q: 'FIFO で計算すると、期末に残っている在庫はどれと考える？', choices: ['いちばん新しく仕入れた物', 'いちばん古く仕入れた物', '全部の平均の値段の物', 'いちばん安く仕入れた物'], answer: 0, explain: '先に入った物から先に出ていくので、残るのは新しい物。' },
        { q: 'A business had opening inventory of 50 units at $10 each. During March it bought 150 units at $12 each and then 100 units at $13 each. It sold 220 units. Using FIFO, what is the value of closing inventory?', type: 'number', answer: 1040, unit: '$', explain: '残りは 50 ＋ 150 ＋ 100 − 220 ＝ 80個。いちばん新しい $13 の仕入（100個）から取るので 80 × $13 ＝ $1,040。' },
        { q: 'Opening inventory was 40 units at $5 each. Purchases were 60 units at $6 each, followed by 30 units at $8 each. Sales were 70 units. Using FIFO, what is the value of closing inventory?', choices: ['$420', '$480', '$320', '$360'], answer: 0, explain: '残りは 130 − 70 ＝ 60個。新しい順に 30個 × $8 ＝ $240、足りない30個は前の仕入から 30 × $6 ＝ $180。合計 $420。$480 は60個全部に $8 をつけた間違い（新しい仕入は30個しかない）。$320 は古い方を残した間違い。' },
        { q: '期首在庫 20個 × $3、仕入 50個 × $4、そのあと 30個 × $5。売ったのは60個。FIFO の売上原価は？', type: 'number', answer: 220, unit: '$', explain: '売れたのは古い順に 20個 × $3 ＝ $60 と 40個 × $4 ＝ $160 で $220。別解: 原価の合計 $60 ＋ $200 ＋ $150 ＝ $410、期末在庫 30 × $5 ＋ 10 × $4 ＝ $190、$410 − $190 ＝ $220。' },
        { q: 'Which of the following methods of valuing inventory is NOT permitted by IAS 2 Inventories?', choices: ['FIFO', 'Periodic weighted average', 'LIFO', 'Continuous weighted average'], answer: 2, explain: 'IAS 2 が認めるのは FIFO と加重平均（期間・移動）。LIFO は使えない。' },
        { q: '同じ取引を FIFO で、継続記録（売るたび）と期末記録（期末にまとめて）で計算した。期末在庫は？', choices: ['同じになる', '継続記録の方が必ず高い', '期末記録の方が必ず高い', '取引によって、どちらが高いかは変わる'], answer: 0, explain: 'FIFO では、いつ計算しても「古い物から出ていく」順番は変わらないので、答えは同じ。' }
      ]
    },
    {
      id: 'L39',
      no: 39,
      title: 'AVCO（期間加重平均・移動平均）',
      goal: '期間加重平均と移動平均で、平均単価・期末在庫・売上原価を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D3(f)'],
      slides: [
        {
          title: '米びつにお米を継ぎ足す',
          paras: ['米びつに、1kg 600円で買ったお米が2kg残っている。そこへ 1kg 900円のお米を2kg足す。混ざってしまうと、どれがどれか分からない。', 'そこで「混ざったお米は全部、平均の値段」と考える。(1,200円 ＋ 1,800円) ÷ 4kg ＝ 1kg 750円。これが AVCO（average cost、平均法）の考え方。']
        },
        {
          title: 'AVCO は2種類',
          list: ['期間加重平均（periodic weighted average）: 期末に1回だけ、期間全体の平均単価を出す', '移動平均（continuous weighted average）: 仕入れるたびに平均単価を出し直す'],
          after: 'どちらも「加重平均」。単価を足して割るのではなく、金額の合計を個数の合計で割る。個数が多い仕入ほど、平均に強く効く。',
          formula: '平均単価 ＝ 原価の合計 ÷ 個数の合計'
        },
        {
          title: 'お店の例（L38 と同じ）',
          table: { caption: 'スマホケース（1月）', head: ['日付', '取引', '個数・単価'], rows: [['1日', '期首在庫', '100個 × $4'], ['8日', '仕入', '200個 × $5.50'], ['14日', '販売', '240個'], ['21日', '仕入', '100個 × $7.40'], ['29日', '販売', '80個']] },
          after: '期末の残りは80個。FIFO では期末在庫 $592、売上原価 $1,648 だった。'
        },
        {
          title: '例題: 期間加重平均',
          example: {
            problem: '上の表で、期間加重平均による1月末の在庫と、1月の売上原価は？',
            steps: ['① 原価の合計（期首在庫＋仕入）: $400 ＋ $1,100 ＋ $740 ＝ $2,240', '② 個数の合計: 100 ＋ 200 ＋ 100 ＝ 400個', '③ 平均単価: $2,240 ÷ 400 ＝ $5.60', '④ 期末在庫: 80個 × $5.60 ＝ $448', '⑤ 売上原価: $2,240 − $448 ＝ $1,792（320個 × $5.60 でも同じ）'],
            answer: '期末在庫 $448、売上原価 $1,792'
          }
        },
        {
          title: '例題: 移動平均',
          example: {
            problem: '同じ取引を、移動平均（仕入れるたびに平均を出し直す）で計算する。',
            steps: ['① 8日の仕入後: 300個、$400 ＋ $1,100 ＝ $1,500。平均 $1,500 ÷ 300 ＝ $5', '② 14日に240個売る: 原価 240 × $5 ＝ $1,200。残り 60個 × $5 ＝ $300', '③ 21日の仕入後: 160個、$300 ＋ $740 ＝ $1,040。平均 $1,040 ÷ 160 ＝ $6.50', '④ 29日に80個売る: 原価 80 × $6.50 ＝ $520。残り 80個 × $6.50 ＝ $520', '⑤ 売上原価: $1,200 ＋ $520 ＝ $1,720'],
            answer: '期末在庫 $520、売上原価 $1,720'
          }
        },
        {
          title: '在庫カードで見る移動平均',
          table: { caption: '残りの個数と金額（かっこは平均単価）', head: ['時点', '個数', '金額'], rows: [['1日 期首', '100', '$400（$4）'], ['8日 仕入後', '300', '$1,500（$5）'], ['14日 販売後', '60', '$300（$5）'], ['21日 仕入後', '160', '$1,040（$6.50）'], ['29日 販売後', '80', '$520（$6.50）']] },
          after: '平均単価が変わるのは仕入のときだけ。売っても、残りの平均単価は変わらない。'
        },
        {
          title: 'なぜ？ 2つの答えが違う理由',
          paras: ['期間加重平均は、1月の仕入を全部混ぜて1つの単価にする。だから14日に売った商品にも、まだ買っていない21日の $7.40 が混ざる。', '移動平均は、売った時点までに入ってきた物だけで平均を出す。だから答えが変わる。FIFO はどちらで計算しても同じだったが、AVCO は違う。', '平均法は、燃料や穀物のように混ざってしまう商品や、値段のばらつきをならしたいときに向いている。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '単価だけを平均してしまう（($4 ＋ $5.50 ＋ $7.40) ÷ 3）。仕入の個数が違うので、必ず原価の合計 ÷ 個数の合計で出す。もう1つは、移動平均なのに、売った日よりあとの仕入まで混ぜて平均を出すこと。売った分の原価は、その日までに入った物だけの平均で出す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['平均単価＝原価の合計 ÷ 個数の合計', '期間加重平均は期末に1回、移動平均は仕入のたびに平均を出し直す', '売っても平均単価は変わらない。売った分は、その時点の平均単価で原価にする']
        },
        {
          title: '英単語',
          words: [
            ['AVCO (average cost)', 'エーブイコ', '平均法'],
            ['weighted average', 'ウェイテッド・アベレージ', '加重平均（個数で重みをつけた平均）'],
            ['periodic weighted average', '', '期間加重平均（期末に1回）'],
            ['continuous weighted average', '', '移動平均（仕入のたびに出し直す）'],
            ['issue', 'イシュー', '在庫から出すこと（販売・払出し）'],
            ['receipt', 'レシート', '在庫に入ること（仕入の受入れ）']
          ]
        }
      ],
      quiz: [
        { q: 'A business had opening inventory of 200 units valued at $3 each. During the year it purchased 300 units at $4 each and 500 units at $4.60 each. It sold 700 units. Using the periodic weighted average method, what is the value of closing inventory?', type: 'number', answer: 1230, unit: '$', explain: '原価の合計 $600 ＋ $1,200 ＋ $2,300 ＝ $4,100、個数 1,000個、平均 $4.10。残り 1,000 − 700 ＝ 300個 × $4.10 ＝ $1,230。' },
        { q: 'Opening inventory was 100 units costing $600. On 1 May, 300 units were purchased at $8 each. On 10 May, 200 units were sold. On 20 May, 100 units were purchased at $9 each. Using the continuous weighted average method, what is the value of closing inventory?', choices: ['$2,400', '$2,340', '$2,500', '$2,300'], answer: 0, explain: '1日の仕入後 400個 $3,000、平均 $7.50。200個売って残り 200個 $1,500。20日の仕入後 300個 $2,400、平均 $8。期末在庫 $2,400。$2,340 は期間加重平均（$3,900 ÷ 500 × 300）、$2,500 は FIFO、$2,300 は単価だけを平均した間違い。' },
        { q: '移動平均で、平均単価を出し直すのはいつ？', choices: ['仕入れて商品が入ったとき', '商品を売ったとき', '期末に1回だけ', '仕入のときと売ったときの両方'], answer: 0, explain: '新しい値段の物が混ざるのは仕入のときだけ。売っても残りの平均単価は変わらない。期末に1回だけ出すのは期間加重平均。' },
        { q: '期首在庫 50個 × $2、仕入 150個 × $3。売ったのは120個。期間加重平均の売上原価は？', type: 'number', answer: 330, unit: '$', explain: '原価の合計 $100 ＋ $450 ＝ $550、個数 200個、平均 $2.75。売上原価 120 × $2.75 ＝ $330。' },
        { q: 'AVCO の平均単価の出し方として正しいものは？', choices: ['原価の合計 ÷ 個数の合計', '単価を全部足して、単価の数で割る', 'いちばん高い単価といちばん安い単価の真ん中', '最後に仕入れたときの単価'], answer: 0, explain: '個数で重みをつけた加重平均。単価だけを平均すると、たくさん仕入れた値段も少しだけ仕入れた値段も同じ重さになってしまう。最後の単価を使うのは FIFO の考え方に近い。' }
      ]
    },
    {
      id: 'L40',
      no: 40,
      title: '評価方法が利益と資産に与える影響',
      goal: '値上がり・値下がりのときに、FIFO と AVCO で利益と在庫の金額がどう変わるかを計算し、理由を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D3(g)'],
      slides: [
        {
          title: 'ケーキの切り分け',
          paras: ['1ホールのケーキを「食べた分」と「残した分」に切り分ける。切り方を変えても、ケーキ全体の大きさは変わらない。食べた分を小さく切れば、残した分が大きくなる。', '在庫も同じ。期首在庫＋仕入の原価の合計を、「売れた分（売上原価）」と「残った分（期末在庫）」に切り分ける。評価方法は、この切り方のルール。']
        },
        {
          title: '原価の合計を2つに分ける',
          svg: `<svg viewBox="0 0 440 304" role="img" aria-label="原価の合計を売上原価と期末在庫に分ける" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">原価の合計を2つに分ける</text><rect x="60" y="52" width="320" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="76" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期首在庫 ＋ 仕入</text><text x="220" y="98" text-anchor="middle" fill="var(--ink)">$400 ＋ $1,840 ＝ $2,240</text><line x1="220" y1="108" x2="115" y2="148" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="108" x2="325" y2="148" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="148" width="190" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="176" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売上原価</text><text x="115" y="200" text-anchor="middle" fill="var(--ink)">損益計算書へ</text><text x="115" y="221" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cost of sales</text><rect x="230" y="148" width="190" height="84" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="176" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期末在庫</text><text x="325" y="200" text-anchor="middle" fill="var(--ink)">財政状態計算書へ</text><text x="325" y="221" text-anchor="middle" font-size="12.5" fill="var(--quiet)">closing inventory</text><text x="220" y="264" text-anchor="middle" fill="var(--ink)">期末在庫が大きい → 売上原価が小さい</text><text x="220" y="288" text-anchor="middle" fill="var(--ink)">→ 利益が大きい。資産も大きい</text></svg>`,
          caption: '期末在庫を $1 大きく評価すると、売上原価が $1 小さくなり、利益も資産も $1 大きくなる。'
        },
        {
          title: '3つの方法を並べる',
          paras: ['L38・L39 のスマホケース。仕入の値段は $4 → $5.50 → $7.40 と上がっていった。'],
          table: { caption: '1月（原価の合計 $2,240）', head: ['方法', '期末在庫（資産）', '売上原価（費用）'], rows: [['FIFO', '$592', '$1,648'], ['移動平均', '$520', '$1,720'], ['期間加重平均', '$448', '$1,792']] },
          after: 'どの行も、期末在庫＋売上原価＝$2,240。切り方が違うだけ。'
        },
        {
          title: '例題: 利益はいくら違う？',
          example: {
            problem: '1月の売上は 320個 × $10 ＝ $3,200。FIFO と期間加重平均で、売上総利益（gross profit）はいくら違う？',
            steps: ['FIFO: $3,200 − 売上原価 $1,648 ＝ $1,552', '期間加重平均: $3,200 − 売上原価 $1,792 ＝ $1,408', '差: $1,552 − $1,408 ＝ $144', '期末在庫の差も $592 − $448 ＝ $144。在庫の差が、そのまま利益の差になる'],
            answer: 'FIFO の方が $144 大きい（在庫も $144 大きい）'
          }
        },
        {
          title: '値上がりと値下がりで逆になる',
          paras: ['FIFO で残るのは新しい物、AVCO は古い物と新しい物の平均。だから、どちらの在庫が大きいかは値段の動きで決まる。'],
          table: { caption: 'FIFO と AVCO を比べたとき', head: ['値段の動き', 'FIFO', 'AVCO'], rows: [['上がっている', '在庫も利益も大きい', '在庫も利益も小さい'], ['下がっている', '在庫も利益も小さい', '在庫も利益も大きい'], ['変わらない', '同じ', '同じ']] }
        },
        {
          title: 'なぜ？ 利益は「どの年に出るか」が変わるだけ',
          paras: ['今年の期末在庫は、来年の期首在庫になる。今年 FIFO で在庫を $592 にすると、期間加重平均の $448 より今年の利益は $144 大きい。', 'でも来年、その在庫を売ると、$144 高い原価が来年の売上原価に入る。その分、来年の利益は小さくなる。商品を全部売り切るまでの利益の合計は、どの方法でも同じ。方法が変えるのは、利益がどの年に出るかだけ。']
        },
        {
          title: '在庫の金額を間違えたら',
          paras: ['同じ理由で、期末在庫の間違いは利益にそのまま響く。期末在庫を $1,000 多く数えると、売上原価が $1,000 小さくなり、今年の利益と資産が $1,000 大きく出る（過大計上、overstated）。', '翌年は期首在庫が $1,000 大きいので、翌年の利益が $1,000 小さく出る。少なく数えたときは全部逆（過少計上、understated）。'],
          formula: '期末在庫 ＋$1 → 売上原価 −$1 → 利益 ＋$1'
        },
        {
          title: 'IAS 2 のルール',
          list: ['使ってよいのは FIFO と AVCO（期間加重平均・移動平均）。LIFO は使えない', '性質や使いみちが似た在庫には、同じ方法を使う', '毎年同じ方法を続ける（consistency、継続性）。利益をよく見せるために方法を変えてはいけない', 'どの方法で原価を出しても、最後に原価と正味実現可能価額（NRV）の低い方で評価する'],
          after: 'LIFO だと何年も前の古い値段が在庫に残り、今の価値とかけ離れてしまう。だから認められていない。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「FIFO はいつも利益が大きい」と覚えてしまう。それは値上がりのときだけで、値下がりのときは逆。もう1つは「在庫が大きいと費用も大きい」と考えること。期末在庫が大きいほど、売上原価（費用）は小さく、利益は大きい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期首在庫＋仕入の合計を、売上原価と期末在庫に分ける。期末在庫が大きいほど利益も資産も大きい', '値上がりのときは FIFO の方が在庫も利益も大きい。値下がりなら逆', 'IAS 2 は FIFO と AVCO だけ。LIFO は不可。似た在庫には同じ方法を、毎年続ける']
        },
        {
          title: '英単語',
          words: [
            ['rising prices', 'ライジング・プライシズ', '値上がり'],
            ['falling prices', 'フォーリング・プライシズ', '値下がり'],
            ['gross profit', 'グロス・プロフィット', '売上総利益（売上 − 売上原価）'],
            ['overstated', 'オーバーステイテッド', '実際より大きく計上された'],
            ['understated', 'アンダーステイテッド', '実際より小さく計上された'],
            ['consistency', 'コンシステンシー', '継続性（毎年同じ方法を使う）'],
            ['lower of cost and NRV', '', '原価と正味実現可能価額の低い方']
          ]
        }
      ],
      quiz: [
        { q: 'In a period of rising prices, which of the following is correct if a business uses FIFO rather than AVCO to value its inventory?', choices: ['Closing inventory and profit will both be higher', 'Closing inventory will be higher but profit will be lower', 'Closing inventory and profit will both be lower', 'Closing inventory will be lower but profit will be higher'], answer: 0, explain: '値上がりのとき、FIFO で残るのは新しい（高い）物なので期末在庫が大きい。期末在庫が大きいと売上原価が小さく、利益は大きい。在庫と利益は同じ向きに動く。' },
        { q: 'The closing inventory of a business was overstated by $4,000. Its draft profit for the year is $30,000. What is the correct profit for the year?', type: 'number', answer: 26000, unit: '$', explain: '期末在庫が $4,000 多すぎると、売上原価が $4,000 小さすぎ、利益が $4,000 大きすぎる。正しい利益は $30,000 − $4,000 ＝ $26,000。' },
        { q: '仕入の値段が下がり続けている。FIFO と比べて AVCO を使うと？', choices: ['期末在庫が大きく、利益も大きい', '期末在庫が小さく、利益も小さい', '期末在庫は大きいが、利益は小さい', 'どちらの方法でも同じ'], answer: 0, explain: '値下がりのとき、FIFO で残るのは新しい（安い）物。AVCO は古い高い値段も混ぜるので、期末在庫が大きくなり、売上原価が小さく、利益は大きい。' },
        { q: '期首在庫なし。仕入 100個 × $10、そのあと 100個 × $8。120個を1個 $14 で売った。期間加重平均の売上総利益は？', type: 'number', answer: 600, unit: '$', explain: '平均単価 ($1,000 ＋ $800) ÷ 200 ＝ $9。売上原価 120 × $9 ＝ $1,080。売上 120 × $14 ＝ $1,680。売上総利益 $1,680 − $1,080 ＝ $600。FIFO なら売上原価 $1,000 ＋ 20 × $8 ＝ $1,160 で利益 $520。値下がりなので AVCO の方が大きい。' },
        { q: 'Which of the following statements about IAS 2 Inventories is correct?', choices: ['LIFO may be used when prices are rising', 'FIFO and weighted average cost are both permitted', 'A business should change its valuation method each year to show the highest profit', 'Inventory is always valued at its selling price'], answer: 1, explain: 'IAS 2 が認めるのは FIFO と加重平均。LIFO はどんなときも不可。方法は毎年続ける（consistency）。在庫は売値ではなく、原価と NRV の低い方で評価する。' },
        { q: 'FIFO で計算した期末在庫の原価は $592。一部に傷があり、在庫全体の正味実現可能価額（NRV）は $560。財政状態計算書の在庫は？', choices: ['$560', '$592', '$32', '$1,152'], answer: 0, explain: 'FIFO で原価を出したあとも、原価と NRV の低い方で評価する（L36）。$592 と $560 の低い方で $560。差の $32 は在庫の評価損で、利益を減らす。' }
      ]
    }
  ],
  cards: [
    { id: 'L37-1', lesson: 'L37', q: '継続記録（continuous / perpetual inventory）とは？', a: '出入りのたびに記録し、在庫の数と金額をいつも最新にする方法' },
    { id: 'L37-2', lesson: 'L37', q: '期末記録（period-end / periodic inventory）とは？', a: 'ふだんは記録せず、期末に実地棚卸で数え、売上原価は式で出す方法' },
    { id: 'L37-3', lesson: 'L37', q: '継続記録でも実地棚卸が要るのはなぜ？', a: '盗難・破損・入力ミスで、帳簿と実物がずれるから' },
    { id: 'L37-4', lesson: 'L37', q: '棚卸が決算日のあと。決算日の在庫は？', a: '数えた額 ＋ その間に売った分の原価 − その間に仕入れた分の原価' },
    { id: 'L37-5', lesson: 'L37', q: '棚卸が決算日より前なら？', a: '逆。その間に売った分を引き、仕入れた分を足す' },
    { id: 'L37-6', lesson: 'L37', q: '売値 $1,250、mark-up 25%。原価は？', a: '$1,250 ÷ 1.25 ＝ $1,000（在庫に戻すときは原価で）' },
    { id: 'L37-7', lesson: 'L37', q: '売値 $1,000、margin 20%。原価は？', a: '$1,000 × 0.8 ＝ $800（margin は売値に対する利益の割合）' },
    { id: 'L38-1', lesson: 'L38', q: 'FIFO とは？', a: '先に仕入れた物から先に売れたと考える方法。残るのは新しい物' },
    { id: 'L38-2', lesson: 'L38', q: 'FIFO の期末在庫の出し方は？', a: '残った個数に、いちばん新しい仕入から順にさかのぼって単価をつける' },
    { id: 'L38-3', lesson: 'L38', q: '期末在庫が分かったら、売上原価は？', a: '期首在庫＋仕入の原価の合計 − 期末在庫' },
    { id: 'L38-4', lesson: 'L38', q: 'IAS 2 で使えない方法は？', a: 'LIFO（後入先出法）' },
    { id: 'L38-5', lesson: 'L38', q: 'FIFO は継続記録と期末記録で答えが変わる？', a: '変わらない。古い物から出ていく順番は同じだから' },
    { id: 'L38-6', lesson: 'L38', q: '100個×$4、200個×$5.50、100個×$7.40。320個売った。FIFO の期末在庫は？', a: '残り80個 × $7.40 ＝ $592' },
    { id: 'L39-1', lesson: 'L39', q: 'AVCO の平均単価の式は？', a: '原価の合計 ÷ 個数の合計（単価だけの平均ではない）' },
    { id: 'L39-2', lesson: 'L39', q: '期間加重平均（periodic weighted average）とは？', a: '期末に1回、期首在庫＋全部の仕入で平均単価を出す方法' },
    { id: 'L39-3', lesson: 'L39', q: '移動平均（continuous weighted average）とは？', a: '仕入れるたびに平均単価を出し直し、売った分はその時の平均で原価にする方法' },
    { id: 'L39-4', lesson: 'L39', q: '移動平均で、商品を売ると平均単価は？', a: '変わらない。変わるのは仕入のときだけ' },
    { id: 'L39-5', lesson: 'L39', q: '継続記録か期末記録かで答えが変わるのは FIFO と AVCO のどちら？', a: 'AVCO（期間加重平均と移動平均は答えが違う）' },
    { id: 'L39-6', lesson: 'L39', q: '100個×$4、200個×$5.50、100個×$7.40。期間加重平均の単価は？', a: '$2,240 ÷ 400個 ＝ $5.60' },
    { id: 'L40-1', lesson: 'L40', q: '期末在庫が大きいと、利益はどうなる？', a: '大きくなる。売上原価が小さくなるから。資産も大きい' },
    { id: 'L40-2', lesson: 'L40', q: '値上がりのとき、FIFO と AVCO のどちらが利益が大きい？', a: 'FIFO（残る在庫が新しい高い値段なので、在庫も利益も大きい）' },
    { id: 'L40-3', lesson: 'L40', q: '値下がりのときは？', a: 'AVCO の方が在庫も利益も大きい' },
    { id: 'L40-4', lesson: 'L40', q: '期末在庫を $1,000 多く数えた。今年と翌年の利益は？', a: '今年は $1,000 多く、翌年は $1,000 少なく出る' },
    { id: 'L40-5', lesson: 'L40', q: '評価方法を変えても変わらないものは？', a: '期首在庫＋仕入の合計。売り切るまでの利益の合計も同じ' },
    { id: 'L40-6', lesson: 'L40', q: '評価方法を毎年選び直してよい？', a: 'だめ。似た在庫には同じ方法を、毎年続ける（consistency）' }
  ]
});
