(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 108,
  part: 3,
  partTitle: '材料費・労務費・製造間接費',
  lessons: [
    {
      id: 'M030',
      no: 30,
      title: '在庫管理の水準: 発注点・最小・最大とフリー在庫',
      goal: '発注点・最小在庫量・最大在庫量とフリー在庫を計算し、今注文するかどうかを判断できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(v)'],
      slides: [
        {
          title: '残り何ロールで買いに行く？',
          paras: ['トイレットペーパーは、0になってから買いに行くと届くまで困る。だから「残り4ロールで買う」と決めておく。会社も同じように、材料の在庫に目安の線を引く。これを在庫管理の水準（inventory control levels）という。'],
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="在庫はのこぎりの歯の形に増減し、最大・発注点・最小の3本の線がある" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">在庫の量と3つの線</text><line x1="76" y1="44" x2="76" y2="220" stroke="var(--edge)" stroke-width="1.25"/><line x1="76" y1="220" x2="420" y2="220" stroke="var(--edge)" stroke-width="1.25"/><line x1="76" y1="70" x2="420" y2="70" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="5 4"/><line x1="76" y1="130" x2="420" y2="130" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 4"/><line x1="76" y1="180" x2="420" y2="180" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="5 4"/><text x="20" y="75" fill="var(--ink)">最大</text><text x="20" y="135" font-weight="600" fill="var(--ink)">発注点</text><text x="20" y="185" fill="var(--ink)">最小</text><path d="M80 76 L170 178 L170 84 L255 180 L255 80 L345 176 L345 88 L405 150" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="128" cy="130" r="5" fill="var(--ink)"/><path d="M128 228 V234 H170 V228" fill="none" stroke="var(--ink)" stroke-width="1.25"/><text x="149" y="252" text-anchor="middle" fill="var(--ink)">リードタイム</text><text x="420" y="252" text-anchor="end" fill="var(--quiet)">時間 →</text></svg>`,
          caption: '使うと減り、届くと一気に増える。発注点まで減ったら注文し、リードタイムの後に届く。'
        },
        {
          title: '発注点（reorder level）',
          paras: ['在庫がこの量まで減ったら注文を出す。注文してから届くまでの期間をリードタイム（lead time）という。', '届くまでの間に使う量を、いちばん悪い場合で見積もる。最も多く使い、最も遅く届いても、在庫が切れない量にする。'],
          formula: '発注点 ＝ 最大使用量 × 最大リードタイム'
        },
        {
          title: '最小在庫量（minimum level）',
          paras: ['ふだんの状態なら、在庫はここより下がらない、という線。下回ったら「使いすぎか、届くのが遅れている」という警告になる。', '発注点から、平均の使用量で平均のリードタイムの間に使う量を引く。届く直前に残っているはずの量で、安全在庫（buffer inventory）の目安になる。'],
          formula: '最小在庫量 ＝ 発注点 −（平均使用量 × 平均リードタイム）'
        },
        {
          title: '最大在庫量（maximum level）',
          paras: ['在庫がここより多いと置きすぎ、という線。保管費がかさみ、古くなる・傷むおそれも増える。', '在庫がいちばん膨らむのは、使う量が最も少なく、最も早く届いた場合。発注点からあまり減らないうちに、1回の発注量（reorder quantity）が届く。発注量は EOQ（M028）で決めた量を使うことが多い。'],
          formula: '最大在庫量 ＝ 発注点 ＋ 発注量 −（最小使用量 × 最小リードタイム）'
        },
        {
          title: 'なぜ？ 線ごとに使う数字が違う理由',
          paras: ['発注点は在庫切れを防ぐ線。だから最悪の場合（最大 × 最大）で決める。', '最大在庫量は置きすぎを防ぐ線。だから在庫が最も膨らむ場合（最小 × 最小を引く）で決める。', '最小在庫量は「ふつうならここまでしか減らない」線。だから平均 × 平均を使う。線の目的を考えれば、どの数字を使うかは暗記しなくても出てくる。']
        },
        {
          title: '例題: 3つの水準',
          example: {
            problem: '冷凍たこ焼き工場の小麦粉。1週間の使用量は 最小 300kg、平均 400kg、最大 500kg。リードタイムは 最小 2週、平均 3週、最大 4週。1回の発注量は 2,500kg。発注点・最小在庫量・最大在庫量は？',
            steps: ['発注点: 最大 500kg × 最大 4週 ＝ 2,000kg', '最小在庫量: 平均 400kg × 平均 3週 ＝ 1,200kg を発注点から引く。2,000 − 1,200 ＝ 800kg', '最大在庫量: 最小 300kg × 最小 2週 ＝ 600kg。2,000 ＋ 2,500 − 600 ＝ 3,900kg', '確かめ: 最小 800 ＜ 発注点 2,000 ＜ 最大 3,900 の順になっている'],
            answer: '発注点 2,000kg、最小在庫量 800kg、最大在庫量 3,900kg'
          },
          note: { kind: 'tip', text: '平均在庫（average inventory、M027）は、最小在庫量を安全在庫と見て「最小在庫量 ＋ 発注量 ÷ 2」で出せる。この例なら 800 ＋ 2,500 ÷ 2 ＝ 2,050kg。' }
        },
        {
          title: 'フリー在庫（free inventory）',
          paras: ['棚にある量（手元在庫）だけ見て注文を決めると、まちがえる。すでに注文して届く予定の分と、工場に出すと約束した分があるから。', '本当に自由に使える量をフリー在庫という。注文するかどうかは、手元在庫ではなく、フリー在庫を発注点と比べて決める。'],
          formula: 'フリー在庫 ＝ 手元在庫 ＋ 注文済みで未着の量 − 出庫を頼まれてまだ出していない量'
        },
        {
          title: '例題: フリー在庫で注文を判断する',
          example: {
            problem: '小麦粉の手元在庫は 1,200kg。仕入先に注文済みで未着の分が 2,500kg。工場から出庫を頼まれ、まだ出していない分が 700kg。フリー在庫は？ 発注点 2,000kg なら、今注文すべき？',
            steps: ['手元在庫 1,200 ＋ 注文済み 2,500 ＝ 3,700kg', '出庫の約束済み 700 を引く: 3,700 − 700 ＝ 3,000kg', 'フリー在庫 3,000kg は発注点 2,000kg より多い', '手元在庫 1,200kg だけ見ると「発注点を下回った」と勘違いして、二重に注文してしまう'],
            answer: 'フリー在庫は 3,000kg。発注点を上回っているので、今は注文しない'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '発注点に平均の数字を使う（400 × 3 ＝ 1,200 は間違い）。発注点は最大 × 最大。最大在庫量では、最小使用量 × 最小リードタイムを「引く」のを忘れやすい。注文するかを手元在庫で決めるのも間違い。比べるのはフリー在庫。使用量が「1日」、リードタイムが「週」のときは、単位をそろえてからかける。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['発注点 ＝ 最大使用量 × 最大リードタイム', '最小 ＝ 発注点 − 平均 × 平均。最大 ＝ 発注点 ＋ 発注量 − 最小 × 最小', 'フリー在庫 ＝ 手元 ＋ 注文済み − 出庫の約束済み。注文の判断はこれで']
        },
        {
          title: '英単語',
          words: [
            ['reorder level', 'リオーダー レベル', '発注点'],
            ['minimum inventory level', 'ミニマム', '最小在庫量'],
            ['maximum inventory level', 'マキシマム', '最大在庫量'],
            ['reorder quantity', 'リオーダー クオンティティ', '1回の発注量'],
            ['lead time', 'リード タイム', '注文から届くまでの期間'],
            ['free inventory', 'フリー インベントリー', 'フリー在庫（自由に使える在庫）'],
            ['materials on order', '', '注文済みで未着の材料'],
            ['materials requisitioned, not yet issued', '', '出庫を頼まれ、まだ出していない材料'],
            ['buffer inventory', 'バッファー', '安全在庫（safety inventory とも）']
          ]
        }
      ],
      quiz: [
        { q: 'A company uses component X. Daily usage is: minimum 40 units, average 50 units, maximum 60 units. The lead time is: minimum 8 days, average 10 days, maximum 12 days. The reorder quantity is 1,000 units. What is the reorder level?', choices: ['500 units', '480 units', '720 units', '600 units'], answer: 2, explain: '発注点＝最大使用量 60 × 最大リードタイム 12日＝720個。500 は平均 × 平均（50 × 10）で、使う量が多く届くのが遅いと在庫が切れる。480 は 60 × 最小リードタイム 8日、600 は平均 50 × 最大 12日で、どちらも最悪の場合になっていない。' },
        { q: 'Using the same data for component X (reorder quantity 1,000 units), what is the maximum inventory level in units?', type: 'number', answer: 1400, unit: '', explain: '発注点 720 ＋ 発注量 1,000 − 最小使用量 40 × 最小リードタイム 8日（320）＝ 1,400個。320 を引き忘れると 1,720 になる。' },
        { q: '同じ部品 X（発注点 720個、平均使用量 1日50個、平均リードタイム 10日）の最小在庫量は何個？', type: 'number', answer: 220, unit: '個', explain: '発注点 720 − 平均 50 × 平均 10日（500）＝ 220個。最小在庫量は、ふつうなら届く直前に残っている量。' },
        { q: 'A company has 800 units of material in inventory. Outstanding orders from suppliers total 1,500 units. Production has requisitioned 600 units which have not yet been issued. What is the free inventory?', choices: ['2,900 units', '1,700 units', '200 units', '2,300 units'], answer: 1, explain: 'フリー在庫＝手元 800 ＋ 注文済み 1,500 − 出庫の約束済み 600 ＝ 1,700個。2,900 は約束済みを足してしまった間違い。200 は注文済みを忘れた間違い。2,300 は約束済みを引き忘れた間違い。' },
        { q: '注文するかどうかを決めるとき、手元在庫ではなくフリー在庫を発注点と比べるのはなぜ？', choices: ['フリー在庫の方が、いつも手元在庫より少ないから', '手元在庫は実地棚卸をしないと分からないから', 'フリー在庫には安全在庫が含まれないから', '注文済みで届く予定の分と、出庫を約束した分を反映した、本当に使える量だから'], answer: 3, explain: 'フリー在庫は、届く予定の分を足し、約束済みの分を引いた量。手元在庫だけ見ると、注文済みなのに二重に注文したりする。フリー在庫は注文済みの分だけ手元在庫より多くなることもあるので、「いつも少ない」は間違い。' },
        { q: 'A company has a minimum inventory level of 300 units and a reorder quantity of 1,200 units. What is the average inventory level?', choices: ['600 units', '900 units', '1,500 units', '750 units'], answer: 1, explain: '平均在庫＝最小在庫量 300 ＋ 発注量 1,200 ÷ 2 ＝ 900個。600 は最小在庫量（安全在庫）を足し忘れた答え。1,500 は発注量を半分にしていない答え。750 は (300 ＋ 1,200) ÷ 2 で、安全在庫まで半分にした答え。' }
      ]
    },
    {
      id: 'M031',
      no: 31,
      title: '材料の払出単価①: 先入先出法（FIFO）',
      goal: '先入先出法（FIFO）で、材料の払出額と期末在庫を材料元帳に沿って計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(vi)'],
      slides: [
        {
          title: '古い卵から使う',
          paras: ['冷蔵庫の卵は、先に買ったパックから使う。新しいパックは奥に残る。', 'K1 で学んだ先入先出法（FIFO, first in, first out）を、K2 では工場の材料に使う。材料を倉庫から工場に出す（払出、issue）たびに、古く受け入れた単価から順に原価をつける。']
        },
        {
          title: 'K2 で FIFO を使う場面',
          paras: ['K1 では、売った商品の原価（売上原価）と期末在庫を出した。K2 では、工場に払い出した材料の原価（material issues）を出す。払い出した金額は製品の原価になる。直接材料なら仕掛品（work in progress）、間接材料なら製造間接費（production overhead）に入る（M026）。', '材料の出入りは材料元帳（stores ledger card）に記録する。受入（receipts）・払出（issues）・残高（balance）を、数量・単価・金額で書く。']
        },
        {
          title: '例題①: 10日の払出',
          example: {
            problem: '冷凍たこ焼き工場の小麦粉（3月）。1日 期首 100kg × $5。3日 受入 300kg × $7。10日 払出 200kg。18日 受入 200kg × $8。25日 払出 300kg。FIFO で10日の払出額は？',
            steps: ['10日の時点の在庫: $5 が 100kg、$7 が 300kg', '古い方から: $5 の 100kg を全部 → $500', '足りない 100kg は次の $7 から → $700', '払出額 $500 ＋ $700 ＝ $1,200。残りは $7 が 200kg（$1,400）'],
            answer: '10日の払出額は $1,200'
          }
        },
        {
          title: '例題②: 25日の払出と月末在庫',
          example: {
            problem: '続き。18日に 200kg × $8 を受け入れた。25日の払出 300kg の金額と、月末の在庫は？',
            steps: ['25日の時点の在庫: $7 が 200kg、$8 が 200kg', '古い方から: $7 の 200kg を全部 → $1,400', '足りない 100kg は $8 から → $800', '払出額 $1,400 ＋ $800 ＝ $2,200', '月末の在庫: $8 が 100kg ＝ $800'],
            answer: '25日の払出額 $2,200、月末在庫 $800（100kg × $8）'
          }
        },
        {
          title: '図で見る FIFO',
          svg: `<svg viewBox="0 0 440 232" role="img" aria-label="FIFOでは古い順に払い出し、最後に新しい8ドルの100kgが残る" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">FIFO: 古い順に払い出す</text><text x="20" y="54" fill="var(--quiet)">受け入れた順 →</text><rect x="20" y="66" width="66" height="52" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="86" y="66" width="67" height="52" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="153" y="66" width="133" height="52" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="286" y="66" width="67" height="52" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="353" y="66" width="67" height="52" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="53" y="88" text-anchor="middle" fill="var(--ink)">100kg</text><text x="53" y="108" text-anchor="middle" fill="var(--ink)">$5</text><text x="119.5" y="88" text-anchor="middle" fill="var(--ink)">100kg</text><text x="119.5" y="108" text-anchor="middle" fill="var(--ink)">$7</text><text x="219.5" y="88" text-anchor="middle" fill="var(--ink)">200kg</text><text x="219.5" y="108" text-anchor="middle" fill="var(--ink)">$7</text><text x="319.5" y="88" text-anchor="middle" fill="var(--ink)">100kg</text><text x="319.5" y="108" text-anchor="middle" fill="var(--ink)">$8</text><text x="386.5" y="88" text-anchor="middle" fill="var(--ink)">100kg</text><text x="386.5" y="108" text-anchor="middle" fill="var(--ink)">$8</text><path d="M22 126 V134 H151 V126" fill="none" stroke="var(--ink)" stroke-width="1.25"/><path d="M155 126 V134 H351 V126" fill="none" stroke="var(--ink)" stroke-width="1.25"/><path d="M355 126 V134 H418 V126" fill="none" stroke="var(--ink)" stroke-width="1.25"/><text x="86.5" y="154" text-anchor="middle" fill="var(--ink)">10日 払出</text><text x="86.5" y="176" text-anchor="middle" fill="var(--ink)">$1,200</text><text x="253" y="154" text-anchor="middle" fill="var(--ink)">25日 払出</text><text x="253" y="176" text-anchor="middle" fill="var(--ink)">$2,200</text><text x="386.5" y="154" text-anchor="middle" fill="var(--ink)">残り</text><text x="386.5" y="176" text-anchor="middle" font-weight="600" fill="var(--ink)">$800</text><text x="220" y="214" text-anchor="middle" fill="var(--ink)">残るのは新しい $8 の 100kg</text></svg>`,
          caption: '払出の合計 $3,400 ＋ 月末在庫 $800 ＝ 受け入れた原価の合計 $4,200（$500 ＋ $2,100 ＋ $1,600）'
        },
        {
          title: '材料元帳（stores ledger card）にまとめる',
          table: { caption: '3月の小麦粉（FIFO）', head: ['日付', '取引', '金額 $'], rows: [['1日', '期首 100kg × $5', '500'], ['3日', '受入 300kg × $7', '2,100'], ['10日', '払出 200kg', '(1,200)'], ['18日', '受入 200kg × $8', '1,600'], ['25日', '払出 300kg', '(2,200)']], total: ['31日', '残高 100kg × $8', '800'] }
        },
        {
          title: 'なぜ？ FIFO が使われる理由と弱点',
          paras: ['材料は、実際にも古い物から使うことが多い。小麦粉は古くなるし、部品は型が古くなる。FIFO は物の流れに近く、説明しやすい。期末在庫には新しい単価が残るので、今の値段に近い。', '弱点もある。値上がりが続くと、払出に古い安い単価が入り、製品の原価が今の値段より低く出る。同じ材料なのに払出ごとに単価が変わり、比べにくい。計算の手間も多い。']
        },
        {
          title: '値上がりが続くときの FIFO',
          table: { caption: '値下がりのときは全部逆になる', head: ['項目', '値上がりが続くとき'], rows: [['払出（製品の原価）', '古い安い単価 → 低め'], ['期末在庫', '新しい高い単価 → 高め'], ['利益', '大きめに出る']] }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '残った在庫に古い単価をつけてしまう。FIFO で残るのは新しい物。もう1つは、払出に、その日より後に受け入れた材料の単価を使うこと。10日の払出に、18日に届く $8 は使えない。「払出の合計 ＋ 期末在庫 ＝ 期首 ＋ 受入の合計」で検算すると見つかる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['FIFO＝古く受け入れた単価から順に払い出す。残るのは新しい物', '払い出すたびに、その日までに入っている分だけを古い順に使う', '検算: 払出の合計 ＋ 期末在庫 ＝ 期首在庫 ＋ 受入の合計']
        },
        {
          title: '英単語',
          words: [
            ['FIFO (first in, first out)', 'ファイフォー', '先入先出法'],
            ['issues / material issues', 'イシュー', '払出（材料を工場に出すこと）'],
            ['receipts', 'レシーツ', '受入（材料が倉庫に入ること）'],
            ['stores ledger card', 'ストアーズ レジャー カード', '材料元帳'],
            ['closing inventory', 'クロージング インベントリー', '期末在庫'],
            ['work in progress (WIP)', '', '仕掛品（作りかけの製品）']
          ]
        }
      ],
      quiz: [
        { q: 'FIFO で材料を払い出すとき、払出に使う単価は？', choices: ['いちばん新しく受け入れた分の単価から順に', 'いま在庫にある中で、いちばん古く受け入れた分の単価から順に', '在庫全体の平均単価', 'その日の市場の値段'], answer: 1, explain: '先に入った物から先に出す。新しい分から順に使うのは LIFO（K2 の範囲外、IAS 2 でも認められない）。在庫全体の平均単価を使うのは平均法（M032）。' },
        { q: 'Opening inventory on 1 June was 200 units at $4.00. On 5 June 400 units were received at $4.50. On 12 June 450 units were issued. On 20 June 300 units were received at $5.00. On 28 June 300 units were issued. Using FIFO, what is the value of the issue on 28 June?', type: 'number', answer: 1425, unit: '$', explain: '12日の払出 450個: $4.00 の 200個 ＋ $4.50 の 250個。残りは $4.50 が 150個。28日の払出 300個: $4.50 の 150個（$675）＋ $5.00 の 150個（$750）＝ $1,425。月末在庫は $5.00 が 150個で $750。' },
        { q: 'Opening inventory was 60 units at $10. Receipts were 100 units at $11 and then 80 units at $12. Issues in the period totalled 150 units. Using FIFO, what is the value of closing inventory?', choices: ['$1,080', '$930', '$1,070', '$990'], answer: 2, explain: '残りは 240 − 150 ＝ 90個。新しい順に $12 の 80個（$960）と $11 の 10個（$110）で $1,070。$1,080 は90個全部に $12 をつけた間違い（$12 は80個しかない）。$930 は古い方（$10 の 60個と $11 の 30個）を残した間違い。$990 は単価を単純平均（($10 ＋ $11 ＋ $12) ÷ 3 ＝ $11）した間違い。' },
        { q: 'During a period of rising prices, which of the following is true when FIFO is used to price material issues?', choices: ['Issues are charged at the most recent prices, so closing inventory is valued at old prices', 'Issues and closing inventory are both valued at the average price for the period', 'Closing inventory is valued at the lowest prices paid in the period', 'Issues are charged at older, lower prices, so production costs may be understated compared with current prices'], answer: 3, explain: 'FIFO の払出には古い単価が入る。値上がり中なら古い単価は安いので、製品の原価が今の値段より低めに出る。「払出が最新の単価、期末在庫が古い単価」は LIFO の説明。「どちらも期間の平均単価」は総平均法の説明。期末在庫には新しい高い単価が残るので、「最も安い単価」も逆。' },
        { q: '例題の小麦粉（25日の時点の在庫は $7 が 200kg、$8 が 200kg）。FIFO で25日の払出 300kg の金額は？', choices: ['$2,200', '$2,400', '$2,100', '$2,175'], answer: 0, explain: '古い $7 の 200kg（$1,400）＋ $8 の 100kg（$800）＝ $2,200。$2,400 は全部 $8、$2,100 は全部 $7 にした間違い。$2,175 は移動平均法（M032）の答え。' }
      ]
    },
    {
      id: 'M032',
      no: 32,
      title: '材料の払出単価②: 総平均法と移動平均法',
      goal: '総平均法と移動平均法で、材料の払出額と期末在庫を計算し、FIFO と比べられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(vi)'],
      slides: [
        {
          title: '混ぜたら、値段も混ざる',
          paras: ['1リットル100円のジュースと130円のジュースを1本のボトルに混ぜたら、どこを注いでも同じ味。どちらの値段かは区別できない。', '小麦粉や燃料のように混ざってしまう材料は、平均の単価で払い出すのが自然。これを平均法（AVCO, average cost）という。平均の出し方は2つある。']
        },
        {
          title: '2つの平均法',
          list: ['総平均法（periodic weighted average）: 期末に1回だけ、期間全体の平均単価を出す。期間中の払出は全部この単価', '移動平均法（cumulative weighted average）: 受け入れるたびに平均単価を出し直す。払出は、その時点の平均単価'],
          after: 'K1 で学んだ「期間加重平均」が総平均法、「移動平均（continuous weighted average）」が移動平均法と同じもの。',
          formula: '平均単価 ＝ 原価の合計 ÷ 数量の合計'
        },
        {
          title: '例題①: 総平均法',
          example: {
            problem: 'M031 と同じ3月の小麦粉。期首 100kg × $5、3日 受入 300kg × $7、18日 受入 200kg × $8。払出は10日 200kg、25日 300kg。総平均法で、払出額と月末在庫は？',
            steps: ['1か月に使えた量: 100 ＋ 300 ＋ 200 ＝ 600kg', '原価の合計: $500 ＋ $2,100 ＋ $1,600 ＝ $4,200', '平均単価: $4,200 ÷ 600kg ＝ $7.00', '払出: (200 ＋ 300)kg × $7.00 ＝ $3,500', '月末在庫: 100kg × $7.00 ＝ $700'],
            answer: '払出額 $3,500、月末在庫 $700'
          }
        },
        {
          title: '例題②: 移動平均法',
          example: {
            problem: '同じ取引を、移動平均法で計算する。払出額と月末在庫は？',
            steps: ['3日の受入後: 400kg、$500 ＋ $2,100 ＝ $2,600 → 平均 $2,600 ÷ 400 ＝ $6.50', '10日の払出: 200kg × $6.50 ＝ $1,300。残り 200kg、$1,300（単価は $6.50 のまま）', '18日の受入後: 400kg、$1,300 ＋ $1,600 ＝ $2,900 → 平均 $2,900 ÷ 400 ＝ $7.25', '25日の払出: 300kg × $7.25 ＝ $2,175', '月末在庫: 100kg × $7.25 ＝ $725'],
            answer: '払出額 $1,300 ＋ $2,175 ＝ $3,475、月末在庫 $725'
          }
        },
        {
          title: '平均を出すタイミング',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="総平均法は月末に1回、移動平均法は受入のたびに平均単価を出し直す" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">平均単価を出すタイミング</text><text x="20" y="60" font-size="15" font-weight="600" fill="var(--ink)">総平均法（periodic）</text><rect x="20" y="72" width="400" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="96" text-anchor="middle" fill="var(--ink)">1か月分を全部まぜて、月末に1回だけ</text><text x="220" y="120" text-anchor="middle" fill="var(--ink)">$4,200 ÷ 600kg ＝ $7.00</text><text x="20" y="166" font-size="15" font-weight="600" fill="var(--ink)">移動平均法（cumulative）</text><line x1="20" y1="192" x2="420" y2="192" stroke="var(--edge)" stroke-width="1.25"/><circle cx="60" cy="192" r="5" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="140" cy="192" r="6" fill="var(--ink)"/><circle cx="220" cy="192" r="5" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="300" cy="192" r="6" fill="var(--accent)"/><circle cx="380" cy="192" r="5" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="60" y="218" text-anchor="middle" fill="var(--ink)">1日 期首</text><text x="140" y="218" text-anchor="middle" fill="var(--ink)">3日 受入</text><text x="220" y="218" text-anchor="middle" fill="var(--ink)">10日 払出</text><text x="300" y="218" text-anchor="middle" fill="var(--ink)">18日 受入</text><text x="380" y="218" text-anchor="middle" fill="var(--ink)">25日 払出</text><text x="60" y="242" text-anchor="middle" fill="var(--quiet)">$5.00</text><text x="140" y="242" text-anchor="middle" fill="var(--ink)">$6.50</text><text x="220" y="242" text-anchor="middle" fill="var(--quiet)">$6.50</text><text x="300" y="242" text-anchor="middle" font-weight="600" fill="var(--ink)">$7.25</text><text x="380" y="242" text-anchor="middle" fill="var(--quiet)">$7.25</text></svg>`,
          caption: '塗りつぶした点（受入）で平均を出し直す。白い点（払出）では単価は変わらず、数量と金額が減るだけ。'
        },
        {
          title: '3つの方法を比べる',
          paras: ['値上がりが続いた月なので、FIFO の月末在庫がいちばん高く、払出がいちばん安い。どの方法でも、払出 ＋ 月末在庫 ＝ $4,200 になる。'],
          table: { caption: '3月の小麦粉（受け入れた原価の合計 $4,200）', head: ['方法', '払出の合計 $', '月末在庫 $'], rows: [['FIFO', '3,400', '800'], ['移動平均法', '3,475', '725'], ['総平均法', '3,500', '700']] }
        },
        {
          title: 'なぜ？ 平均法を使う理由と弱点',
          paras: ['平均法は単価のでこぼこをならす。混ざる材料に合い、払出の単価が安定するので、製品の原価を月ごとに比べやすい。', '弱点: 平均単価は、実際に払った値段のどれとも一致しないことが多い。総平均法は期末まで単価が決まらないので、月の途中で製品の原価が出せない。移動平均法は、受け入れるたびに計算し直す手間がかかる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '単価を単純に平均しない。($5 ＋ $7 ＋ $8) ÷ 3 ＝ $6.67 は間違い。量が違うので、原価の合計 ÷ 数量の合計で出す。移動平均法では、払出のあとに平均を出し直さない。払出は平均単価のまま数量が減るだけ。出し直すのは受入のとき。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['平均単価 ＝ 原価の合計 ÷ 数量の合計（単価の単純平均ではない）', '総平均法は期末に1回、移動平均法は受け入れるたびに平均を出し直す', '値上がりが続くと、FIFO の期末在庫がいちばん高く、払出がいちばん安い']
        },
        {
          title: '英単語',
          words: [
            ['AVCO (average cost)', 'エイブコ', '平均法'],
            ['periodic weighted average', 'ピリオディック ウェイテッド アベレージ', '総平均法（期末に1回）'],
            ['cumulative weighted average', 'キューミュラティブ', '移動平均法（受入のたびに出し直す）'],
            ['continuous weighted average', 'コンティニュアス', '移動平均法の別名（K1 で使った言い方）'],
            ['weighted average price', '', '加重平均単価']
          ]
        }
      ],
      quiz: [
        { q: '移動平均法（cumulative weighted average）で、平均単価を出し直すのはいつ？', choices: ['材料を払い出したとき', '月末に1回だけ', '材料を受け入れたとき', '受入と払出の両方のとき'], answer: 2, explain: '受け入れると、違う単価の材料が混ざるので平均が変わる。払い出しても、残りの単価は同じなので平均は変わらない。月末に1回だけなのは総平均法。' },
        { q: 'Opening inventory on 1 May was 50 units at $8. On 4 May 150 units were received at $10. On 9 May 120 units were issued. On 15 May 120 units were received at $11. On 20 May 100 units were issued. Using the cumulative weighted average method, what is the value of closing inventory on 31 May?', type: 'number', answer: 1040, unit: '$', explain: '4日の受入後: 200個、$400 ＋ $1,500 ＝ $1,900、平均 $9.50。9日の払出 120 × $9.50 ＝ $1,140、残り 80個 $760。15日の受入後: 200個、$760 ＋ $1,320 ＝ $2,080、平均 $10.40。20日の払出 100 × $10.40 ＝ $1,040。残り 100個 × $10.40 ＝ $1,040。' },
        { q: 'Opening inventory was 200 units at $3. Purchases during the period were 300 units at $4 and then 500 units at $5. A total of 700 units were issued. Using the periodic weighted average method, what is the total value of the issues?', type: 'number', answer: 3010, unit: '$', explain: '原価の合計 $600 ＋ $1,200 ＋ $2,500 ＝ $4,300、数量の合計 1,000個、平均 $4.30。払出 700 × $4.30 ＝ $3,010。単価を単純平均した $4 で計算すると $2,800 になり間違い。' },
        { q: 'In a period of rising prices, which method of pricing material issues gives the highest value of closing inventory?', choices: ['Periodic weighted average', 'FIFO', 'Cumulative weighted average', 'All methods give the same value'], answer: 1, explain: 'FIFO では期末在庫に最も新しい（高い）単価が残る。平均法は古い安い単価も混ざるので低くなる。例題でも FIFO $800、移動平均法 $725、総平均法 $700。' },
        { q: '総平均法（periodic weighted average）の弱点として正しいものは？', choices: ['受け入れるたびに平均を計算し直す手間がかかる', '払出に必ず最も古い単価が使われる', '期末在庫がいつも最新の単価になる', '期末まで平均単価が決まらず、期中に製品の原価を出せない'], answer: 3, explain: '期間全体の数字がそろうまで平均が出せない。「受け入れるたびに計算し直す手間」は移動平均法の弱点。「最も古い単価で払い出す」「期末在庫が最新の単価」は FIFO の特徴。' }
      ]
    },
    {
      id: 'M033',
      no: 33,
      title: 'ジャストインタイム（JIT）',
      goal: 'ジャストインタイム（JIT）の考え方、うまく回る条件、メリットとリスクを説明できるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(vii)'],
      slides: [
        {
          title: '買いだめしない冷蔵庫',
          paras: ['毎日、その日に食べる分だけ近所のスーパーで買えば、冷蔵庫に食材をためなくてよい。腐らせることもない。ただし、スーパーが休みの日は困る。', 'コンビニは1日に何回も配送を受けて、店の在庫を少なくしている。必要な物を、必要な時に、必要な量だけ。これがジャストインタイム（JIT, just-in-time）の考え方。']
        },
        {
          title: 'JIT とは',
          paras: ['JIT は、在庫をできるだけゼロに近づける在庫管理の考え方。トヨタ自動車の生産方式から世界に広まった。2つの面がある。'],
          list: ['JIT 仕入（JIT purchasing）: 材料は、使う直前に、使う量だけ届けてもらう', 'JIT 生産（JIT production）: 顧客の注文が入ってから、その分だけ作る']
        },
        {
          title: '作ってから待つか、注文から作るか',
          svg: `<svg viewBox="0 0 440 264" role="img" aria-label="従来型は在庫を置いて待ち、JITは注文が来てから必要な分だけ作る" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">作ってから待つか、注文から作るか</text><text x="20" y="58" font-size="15" font-weight="600" fill="var(--ink)">従来型（push）</text><rect x="20" y="70" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="103" y="70" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="186" y="70" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="269" y="70" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="352" y="70" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="54" y="97" text-anchor="middle" fill="var(--ink)">仕入先</text><text x="137" y="97" text-anchor="middle" fill="var(--ink)">材料在庫</text><text x="220" y="97" text-anchor="middle" fill="var(--ink)">工場</text><text x="303" y="97" text-anchor="middle" fill="var(--ink)">製品在庫</text><text x="386" y="97" text-anchor="middle" fill="var(--ink)">顧客</text><text x="95.5" y="97" text-anchor="middle" fill="var(--ink)">→</text><text x="178.5" y="97" text-anchor="middle" fill="var(--ink)">→</text><text x="261.5" y="97" text-anchor="middle" fill="var(--ink)">→</text><text x="344.5" y="97" text-anchor="middle" fill="var(--ink)">→</text><text x="220" y="138" text-anchor="middle" fill="var(--quiet)">予測で作り、在庫を置いて注文を待つ</text><text x="20" y="174" font-size="15" font-weight="600" fill="var(--ink)">JIT（pull）</text><rect x="20" y="186" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="186" y="186" width="68" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="352" y="186" width="68" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="54" y="213" text-anchor="middle" fill="var(--ink)">仕入先</text><text x="220" y="213" text-anchor="middle" font-weight="600" fill="var(--ink)">工場</text><text x="386" y="213" text-anchor="middle" fill="var(--ink)">顧客</text><text x="137" y="200" text-anchor="middle" fill="var(--ink)">← 注文</text><text x="137" y="224" text-anchor="middle" fill="var(--ink)">必要な分 →</text><text x="303" y="200" text-anchor="middle" fill="var(--ink)">← 注文</text><text x="303" y="224" text-anchor="middle" fill="var(--ink)">作った分 →</text><text x="220" y="254" text-anchor="middle" fill="var(--quiet)">注文が来てから、必要な分だけ作る・届く</text></svg>`,
          caption: '従来型は予測で作って在庫で待つ（push）。JIT は顧客の注文が引き金になり、前の工程へ「この分だけ」と伝わっていく（pull）。トヨタではこの合図に「かんばん（kanban）」という札を使う。'
        },
        {
          title: 'JIT がうまく回る条件',
          list: ['信頼できる少数の仕入先と長期の関係。近くにいて、遅れず、不良品を出さない', '高い品質。予備の在庫がないので、不良品が1つ出ると生産が止まる', '少ない量を何度も運ぶ仕組みと、段取り替え（set-up）の時間の短縮', '何でもこなせる多能工（multi-skilled workforce）と、機械の故障を防ぐ予防保全']
        },
        {
          title: 'メリット',
          list: ['保管費（holding costs）が大きく減る。倉庫・保険・在庫に寝かせるお金', '古くなる・傷む・なくなるといった在庫のロスが減る', 'むだ（waste）や不良が表に出て、改善が進む', '在庫に寝かせていたお金が浮き、資金繰りがよくなる']
        },
        {
          title: 'デメリットとリスク',
          list: ['仕入先の遅れ・災害・ストで材料が届かないと、すぐに生産が止まる（在庫切れ、stockout）', '少しずつ何度も注文するので、注文の回数と手間が増える', 'まとめ買いの数量割引（bulk discounts）を受けにくい', '仕入先に強く依存する。需要が読めない商売には向かない']
        },
        {
          title: 'なぜ？ JIT は在庫を「悪いもの」と見る',
          paras: ['EOQ（M028）は、発注費と保管費のつり合いで発注量を決め、安全在庫を持つ前提だった。', 'JIT は前提を変える。仕入先との長期契約などで1回あたりの発注費を小さくすれば、少しずつ何度も頼むのがいちばん安くなる。また、在庫は不良や遅れという問題を隠す「クッション」だと考える。クッションを外し、問題そのものを直す。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'JIT は在庫が完全にゼロになる方法ではなく、ゼロに近づけることをめざす考え方。また、保管費は減るが、注文の回数は増え、在庫切れのリスクは上がる。「JIT ならコストが全部下がる」とは言えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['JIT＝必要な物を、必要な時に、必要な量だけ。在庫をゼロに近づける', '注文が引き金で作る pull 型。信頼できる仕入先と高い品質が前提', 'メリットは保管費と在庫ロスの削減。リスクは在庫切れで生産が止まること']
        },
        {
          title: '英単語',
          words: [
            ['just-in-time (JIT)', 'ジャスト イン タイム', 'ジャストインタイム（必要な時に必要な量だけ）'],
            ['JIT purchasing', 'パーチェシング', 'JIT 仕入'],
            ['JIT production', 'プロダクション', 'JIT 生産'],
            ['pull system', 'プル システム', '注文が引き金で作る仕組み'],
            ['kanban', 'カンバン', '前の工程に「この分だけ」と伝える札・合図'],
            ['holding costs', 'ホールディング コスト', '保管費（在庫を持つコスト）'],
            ['stockout', 'ストックアウト', '在庫切れ'],
            ['set-up time', 'セットアップ タイム', '段取り替えの時間']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a feature of a just-in-time (JIT) system?', choices: ['Small, frequent deliveries from suppliers', 'Close long-term relationships with a small number of reliable suppliers', 'Holding large buffer inventories to protect against late deliveries', 'Production triggered by customer demand'], answer: 2, explain: 'JIT は安全在庫もできるだけ持たない。遅れは在庫で隠すのではなく、信頼できる仕入先を選んで防ぐ。ほかの3つはどれも JIT の特徴。' },
        { q: 'Which of the following is most likely to be a disadvantage of introducing JIT?', choices: ['Inventory holding costs will increase', 'Production may stop if a supplier delivery is late', 'More warehouse space will be needed', 'Quality problems become harder to identify'], answer: 1, explain: '予備の在庫がないので、届くのが遅れるとすぐ生産が止まる。保管費と倉庫は減る。品質の問題は、在庫のクッションがなくなるのでむしろ見つけやすくなる。' },
        { q: 'JIT を入れると、一般にどうなる？', choices: ['保管費も注文の回数も減る', '保管費は増え、注文の回数は減る', '保管費も注文の回数も増える', '保管費は減り、注文の回数は増える'], answer: 3, explain: '在庫が少なくなるので保管費は減る。そのかわり、少しずつ何度も届けてもらうので注文の回数は増える。だから長期契約などで1回の発注費を下げる工夫をする。' },
        { q: 'JIT の「pull 型（pull system）」の説明として正しいものは？', choices: ['顧客の注文が引き金になり、その分だけ作る・仕入れる', '需要を予測して作り、製品在庫を置いて注文を待つ', '安い時期にまとめて仕入れ、倉庫に置いておく', '工場の能力いっぱいに作り続ける'], answer: 0, explain: '「需要を予測して作り、在庫を置いて待つ」と「能力いっぱいに作り続ける」は、作ってから売る従来型（push）。「安い時期にまとめて仕入れる」はまとめ買いで、JIT の考え方とは逆。' },
        { q: 'JIT がいちばん向いている会社は？', choices: ['材料を海外の1社から船便で仕入れ、届くまで3か月かかる工場', '需要が季節で大きく変わり、繁忙期の前に作りだめする工場', '近くに信頼できる仕入先があり、需要が安定している工場', '材料の品質にばらつきがあり、受入検査で多くを返品する工場'], answer: 2, explain: 'JIT には、すぐ確実に届く仕入先と、安定した需要と、高い品質が必要。遠い仕入先、読めない需要、不良の多い材料では、在庫がないとすぐ生産が止まる。' }
      ]
    }
  ],
  cards: [
    { id: 'M030-1', lesson: 'M030', q: '発注点（reorder level）の式は？', a: '最大使用量 × 最大リードタイム' },
    { id: 'M030-2', lesson: 'M030', q: '最小在庫量（minimum level）の式は？', a: '発注点 −（平均使用量 × 平均リードタイム）' },
    { id: 'M030-3', lesson: 'M030', q: '最大在庫量（maximum level）の式は？', a: '発注点 ＋ 発注量 −（最小使用量 × 最小リードタイム）' },
    { id: 'M030-4', lesson: 'M030', q: 'フリー在庫（free inventory）の式は？', a: '手元在庫 ＋ 注文済みで未着の量 − 出庫を頼まれてまだ出していない量' },
    { id: 'M030-5', lesson: 'M030', q: 'なぜ発注点は「最大 × 最大」で決める？', a: '最も多く使い、最も遅く届く最悪の場合でも、届くまで在庫を切らさないため' },
    { id: 'M030-6', lesson: 'M030', q: '注文するかを決めるとき、発注点と比べるのは？', a: '手元在庫ではなくフリー在庫' },
    { id: 'M030-7', lesson: 'M030', q: '在庫管理の水準から平均在庫を出す式は？', a: '最小在庫量 ＋ 発注量 ÷ 2' },
    { id: 'M031-1', lesson: 'M031', q: 'FIFO で材料を払い出すときの単価は？', a: 'その時点の在庫のうち、いちばん古く受け入れた分の単価から順に使う' },
    { id: 'M031-2', lesson: 'M031', q: 'FIFO で期末に残る在庫は？', a: 'いちばん新しく受け入れた分（新しい単価）' },
    { id: 'M031-3', lesson: 'M031', q: '値上がりが続くとき、FIFO の払出と利益は？', a: '払出に古い安い単価が入り製品の原価は低め、利益は大きめに出る' },
    { id: 'M031-4', lesson: 'M031', q: '払出額の検算の式は？', a: '払出の合計 ＋ 期末在庫 ＝ 期首在庫 ＋ 受入の合計' },
    { id: 'M031-5', lesson: 'M031', q: 'stores ledger card とは？', a: '材料元帳。受入・払出・残高を数量・単価・金額で記録する' },
    { id: 'M032-1', lesson: 'M032', q: '総平均法（periodic weighted average）とは？', a: '期末に1回、期間全体の原価の合計 ÷ 数量の合計で平均単価を出す方法' },
    { id: 'M032-2', lesson: 'M032', q: '移動平均法（cumulative weighted average）とは？', a: '受け入れるたびに平均単価を出し直し、払出はその時点の平均単価で行う方法' },
    { id: 'M032-3', lesson: 'M032', q: '移動平均法で払い出した後、平均単価は？', a: '変わらない。数量と金額が同じ割合で減るだけ' },
    { id: 'M032-4', lesson: 'M032', q: '平均単価を単価の単純平均で出してはいけない理由は？', a: '仕入の量が違うから。原価の合計 ÷ 数量の合計で出す' },
    { id: 'M032-5', lesson: 'M032', q: '例題の3月（値上がり）、月末在庫が高い順は？', a: 'FIFO $800 ＞ 移動平均法 $725 ＞ 総平均法 $700' },
    { id: 'M032-6', lesson: 'M032', q: '総平均法の弱点は？', a: '期末まで平均単価が決まらず、期中に製品の原価を出せない' },
    { id: 'M033-1', lesson: 'M033', q: 'JIT（just-in-time）とは？', a: '必要な物を必要な時に必要な量だけ。在庫をゼロに近づける管理の考え方' },
    { id: 'M033-2', lesson: 'M033', q: 'pull 型（pull system）とは？', a: '顧客の注文が引き金になり、その分だけ作る・仕入れる仕組み' },
    { id: 'M033-3', lesson: 'M033', q: 'JIT の主なメリットは？', a: '保管費の削減、在庫のロスの減少、むだや不良が表に出て改善が進む' },
    { id: 'M033-4', lesson: 'M033', q: 'JIT の主なリスクは？', a: '仕入先の遅れや災害で材料が届かないと、すぐに生産が止まる' },
    { id: 'M033-5', lesson: 'M033', q: 'JIT がうまく回る前提は？', a: '信頼できる近くの仕入先、高い品質、少量多頻度の配送、短い段取り替え' },
    { id: 'M033-6', lesson: 'M033', q: 'JIT で注文の回数はどうなる？', a: '増える。長期契約などで1回あたりの発注費を下げて対応する' }
  ]
});
