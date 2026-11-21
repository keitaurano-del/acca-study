(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 115,
  part: 5,
  partTitle: '個別・総合・サービスの原価計算',
  lessons: [
    {
      id: 'M059',
      no: 59,
      title: '連産品と副産物: ちがいと分離点での扱い',
      goal: '連産品と副産物のちがいを説明し、分離点で副産物の正味実現可能価額を差し引いて、配分する結合原価を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(iv)', 'K2:B5(b)(v)'],
      slides: [
        {
          title: 'マグロ1匹から何が取れる？',
          paras: ['魚屋がマグロを1匹まるごと仕入れる。さばくと、赤身とトロが取れる。どちらも店の主役の商品で、よく売れる。', '頭や骨などのアラも出る。あら汁用に安く売れるが、売上はわずか。仕入れ値は1匹分まとめて払っている。さばく前は、赤身の分がいくら、トロの分がいくら、とは分けられない。']
        },
        {
          title: '連産品（joint products）と副産物（by-products）',
          list: ['連産品（joint products）: 同じ工程・同じ材料から同時にできる2つ以上の製品で、どれも売上の価値が大きいもの（赤身とトロ）', '副産物（by-product）: 主な製品を作る途中で一緒にできてしまう製品で、売上の価値が相対的に小さいもの（アラ）'],
          after: '分かれる時点を分離点（point of separation、split-off point）という。分離点までにかかった原価を結合原価（joint costs）という。分離点の後で、その製品だけにかける費用は追加加工費（further processing costs）という。'
        },
        {
          title: '鶏肉工場の工程',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="鶏をさばく結合工程（結合原価61,000ドル）から、分離点で、連産品のもも肉とむね肉、副産物の鶏ガラに分かれる" font-size="14"><rect x="20" y="90" width="150" height="90" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="122" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">鶏をさばく</text><text x="95" y="144" text-anchor="middle" font-size="15" fill="var(--ink)">結合工程</text><text x="95" y="166" text-anchor="middle" font-size="12.5" fill="var(--quiet)">joint process</text><text x="95" y="206" text-anchor="middle" fill="var(--ink)">結合原価 $61,000</text><line x1="170" y1="135" x2="230" y2="55" stroke="var(--ink)" stroke-width="1.5"/><line x1="170" y1="135" x2="230" y2="135" stroke="var(--ink)" stroke-width="1.5"/><line x1="170" y1="135" x2="230" y2="215" stroke="var(--ink)" stroke-width="1.5"/><line x1="200" y1="30" x2="200" y2="240" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/><text x="200" y="262" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">分離点</text><text x="200" y="281" text-anchor="middle" font-size="12.5" fill="var(--quiet)">split-off point</text><rect x="230" y="30" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="53" text-anchor="middle" font-size="15" fill="var(--ink)">もも肉（連産品）</text><text x="325" y="71" text-anchor="middle" font-size="12.5" fill="var(--quiet)">joint product</text><rect x="230" y="110" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="133" text-anchor="middle" font-size="15" fill="var(--ink)">むね肉（連産品）</text><text x="325" y="151" text-anchor="middle" font-size="12.5" fill="var(--quiet)">joint product</text><rect x="230" y="190" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="325" y="213" text-anchor="middle" font-size="15" fill="var(--ink)">鶏ガラ（副産物）</text><text x="325" y="231" text-anchor="middle" font-size="12.5" fill="var(--quiet)">by-product</text></svg>`,
          caption: '分離点の左でかかった原価が結合原価。右に分かれてから、それぞれの製品の原価が分かるようになる。'
        },
        {
          title: '量ではなく、売上の価値で分ける',
          paras: ['鶏肉工場の1か月。鶏をさばく費用（材料・労務費・製造間接費）は合計 $61,000。'],
          table: { caption: '1か月の生産と売上の見込み', head: ['製品', '量', '売上 $'], rows: [['もも肉', '4,000kg', '60,000'], ['むね肉', '6,000kg', '24,000'], ['鶏ガラ', '1,000kg', '1,200']] },
          after: 'もも肉とむね肉は、どちらも売上が大きいので連産品。むね肉はもも肉より量が多いが、それで分けるわけではない。鶏ガラの売上は全体の約1.4%しかないので副産物になる。'
        },
        {
          title: '分離点での扱い',
          list: ['連産品: 結合原価を各製品に配分（apportion）する。在庫の金額と製品ごとの利益を出すため。配分の方法は次の M060 で学ぶ', '副産物: 結合原価は配分しない。ふつうは、副産物の正味実現可能価額（net realisable value、NRV）を工程の原価から差し引く。残りを連産品に配分する', '追加加工費: 分離点の後でかかるので、その製品の原価に直接入れる'],
          formula: '副産物の NRV ＝ 売価 − 分離点の後の加工費・販売費'
        },
        {
          title: '例題: 連産品に配分する結合原価',
          example: {
            problem: '鶏肉工場の工程の原価は $61,000。副産物の鶏ガラ 1,000kg は1kg $1.20 で売れるが、売る前に洗って袋詰めする費用が1kg $0.20 かかる。鶏ガラの NRV は工程の原価から差し引く。もも肉とむね肉に配分する結合原価は？',
            steps: ['鶏ガラの1kgあたり NRV: $1.20 − $0.20 ＝ $1.00', '鶏ガラの NRV: $1.00 × 1,000kg ＝ $1,000', '工程の原価から差し引く: $61,000 − $1,000 ＝ $60,000', 'この $60,000 を、もも肉とむね肉に配分する'],
            answer: '$60,000（副産物の NRV $1,000 を差し引いた残り）'
          }
        },
        {
          title: '工程勘定（process account）で見る',
          tAccount: { name: 'Process account（結合工程）', debit: [['Materials（鶏）', '45,000'], ['Labour（労務費）', '10,000'], ['Overheads（製造間接費）', '6,000']], credit: [['By-product（鶏ガラ NRV）', '1,000'], ['Joint products（もも肉・むね肉）', '60,000']] },
          after: '副産物は、正常減損の処分価値（scrap value）と同じように、工程勘定の貸方に NRV で出す。副産物の収入を「その他の収益（other income）」として売上側に出す方法もある。その場合は $61,000 全額を連産品に配分する。試験では、問題文の指示どおりに扱う。'
        },
        {
          title: 'なぜ？ 配分が必要なのか',
          paras: ['結合原価は、1つの作業で全部の製品を同時に作るためにかかる。もも肉だけのために使った額、というものが存在しない。だから、何かの基準で分けるしかない。', '分けないと、もも肉の在庫がいくらか決まらない。財務諸表の在庫は原価（NRV が低ければ NRV）で評価する（K1 の IAS 2）ので、結合原価も製品ごとに分ける必要がある。副産物は金額が小さいので、わざわざ配分せず、収入を原価から差し引くだけで十分になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '量が少ないから副産物、とは決めない。決め手は売上の価値の大きさ。また、副産物は売価そのままではなく、分離後の加工費・販売費を引いた NRV で差し引く（$1,200 ではなく $1,000）。差し引くのは、連産品に配分する前。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['連産品は売上の価値が大きい製品、副産物は価値が相対的に小さい製品。どちらも同じ工程から同時にできる', '結合原価は分離点までの原価。連産品には配分し、分離後の追加加工費は各製品に直接入れる', '副産物の NRV（売価 − 分離後の費用）は、ふつう工程の原価から差し引き、残りを連産品に配分する']
        },
        {
          title: '英単語',
          words: [
            ['joint products', 'ジョイント プロダクツ', '連産品（同じ工程から同時にでき、どれも価値が大きい製品）'],
            ['by-product', 'バイプロダクト', '副産物（一緒にできる、価値が相対的に小さい製品）'],
            ['point of separation / split-off point', 'スプリットオフ ポイント', '分離点（製品が別々に分かれる時点）'],
            ['joint costs', 'ジョイント コスツ', '結合原価（分離点までの原価。common costs、pre-separation costs とも）'],
            ['further processing costs', '', '追加加工費（分離点の後の、その製品だけの費用。post-separation costs とも）'],
            ['net realisable value (NRV)', '', '正味実現可能価額（売価 − 売るまでにかかる費用）'],
            ['apportion', 'アポーション', '（共通の費用を）配分する']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a by-product?', choices: ['A product produced in the same process as other products, with a significant sales value', 'A product that is produced in a smaller physical quantity than the main products', 'A product produced in the same process as the main products, with a relatively low sales value', 'A product that only becomes saleable after further processing'], answer: 2, explain: '副産物は、同じ工程で一緒にできる、売上の価値が相対的に小さい製品。「significant sales value」は連産品の説明。「smaller physical quantity」は量で決めていて誤り（決め手は価値）。「saleable after further processing」は追加加工の話で、副産物の定義ではない。' },
        { q: 'A process incurs costs of $90,000 and produces joint products X and Y and a by-product Z. 1,000 kg of Z is produced. Z is sold for $3.00 per kg after packing costs of $0.50 per kg. The net realisable value of the by-product is deducted from the process costs. What is the joint cost to be apportioned between X and Y?', type: 'number', answer: 87500, unit: '$', explain: 'Z の NRV: ($3.00 − $0.50) × 1,000kg ＝ $2,500。$90,000 − $2,500 ＝ $87,500。売価のまま $3,000 を引くと $87,000 になり誤り。袋詰め費用は売るまでにかかる費用なので引く。' },
        { q: 'Which of the following statements about joint costs is correct?', choices: ['They are incurred after the point of separation and are traced to each product', 'They are incurred before the point of separation and are shared between the joint products', 'They are charged in full to the product with the highest sales value', 'They are charged first to the by-product, and the balance to the joint products'], answer: 1, explain: '結合原価は分離点までにかかる原価で、連産品に配分する。「after the point of separation」は追加加工費の説明。1つの製品に全部負担させることはしない。副産物には結合原価を配分せず、NRV を工程の原価から差し引く。' },
        { q: '分離点の後で、もも肉だけにかかった味付け・包装の費用（追加加工費）はどう扱う？', choices: ['結合原価に足して、もも肉とむね肉に配分する', '副産物の NRV から差し引く', '期間費用にして、製品原価には入れない', 'もも肉の原価に直接入れる（結合原価として配分しない）'], answer: 3, explain: '追加加工費は、どの製品のための費用かがはっきりしているので、その製品に直接入れる。結合原価に混ぜると、むね肉にまで負担させてしまう。製造の費用なので期間費用でもない。' },
        { q: 'ある工程から、製品 P（売上 $50,000、生産量 200kg）と製品 Q（売上 $1,000、生産量 3,000kg）ができる。正しい分類は？', choices: ['P が副産物、Q が主な製品（量が多い）', 'P が主な製品、Q は副産物（売上の価値が小さい）', 'P と Q はどちらも連産品', 'P と Q はどちらも副産物'], answer: 1, explain: '分けるのは売上の価値。Q の売上は P の2%しかないので副産物。量は Q の方が多いが、量では決めない。' },
        { q: 'A process incurs costs of $40,000 and produces two joint products and a by-product. The by-product is sold for $1,500, and this income is treated as other income (added to sales revenue) rather than deducted from the process costs. What joint cost is apportioned between the joint products?', choices: ['$38,500', '$41,500', '$40,000', 'Nil'], answer: 2, explain: '副産物の収入を「その他の収益（other income）」として売上側に出す方法では、工程の原価から何も差し引かない。$40,000 全額を連産品に配分する。$38,500 は NRV を差し引く方法の答え（問題文の指示と違う）。収入を原価に足す理由はない。' }
      ]
    },
    {
      id: 'M060',
      no: 60,
      title: '連産品の原価配分: 正味実現可能価額法と物量法',
      goal: '物量法と正味実現可能価額法で結合原価を連産品に配分し、在庫の金額と製品ごとの利益を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(vi)'],
      slides: [
        {
          title: 'マグロ1匹 100,000円をどう分ける？',
          paras: ['マグロ1匹を 100,000円で仕入れた。赤身が 30kg、トロが 10kg 取れた。赤身は全部で 90,000円、トロは全部で 110,000円で売れる。', '重さで分けると、赤身 75,000円、トロ 25,000円。売れる額で分けると、赤身 45,000円、トロ 55,000円。どちらも「公平」に見えるが、答えが大きく違う。これが物量法と正味実現可能価額法。']
        },
        {
          title: '2つの配分方法',
          list: ['物量法（physical units basis、weight/volume method）: 各製品の生産量（重さ・容積・個数）の割合で分ける', '正味実現可能価額法（NRV method）: 各製品の NRV の割合で分ける。NRV ＝ 最終の売価 − 分離点の後の追加加工費（・販売費）'],
          formula: '配分額 ＝ 結合原価 × その製品の量（または NRV）÷ 全製品の合計',
          after: '分離点でそのまま売る製品は、追加加工費がないので NRV ＝ 分離点の売上になる。副産物の量や NRV は分母に入れない（M059 で先に差し引いてある）。'
        },
        {
          title: '鶏肉工場のデータ',
          paras: ['M059 で出した、配分する結合原価は $60,000（副産物の NRV を差し引いた後）。'],
          table: { caption: '1か月', head: ['項目', 'もも肉', 'むね肉'], rows: [['生産量', '4,000kg', '6,000kg'], ['最終の売価（1kg）', '$15', '$4'], ['追加加工費（1kg）', '$3', 'なし'], ['売るタイミング', '加工してから', '分離点で']] }
        },
        {
          title: '例題1: 物量法',
          example: {
            problem: '結合原価 $60,000 を、生産量（重さ）の割合で、もも肉とむね肉に配分する。',
            steps: ['合計の量: 4,000kg ＋ 6,000kg ＝ 10,000kg', '1kgあたりの結合原価: $60,000 ÷ 10,000kg ＝ $6', 'もも肉: $6 × 4,000kg ＝ $24,000', 'むね肉: $6 × 6,000kg ＝ $36,000', '確かめ: $24,000 ＋ $36,000 ＝ $60,000'],
            answer: 'もも肉 $24,000、むね肉 $36,000'
          }
        },
        {
          title: '例題2: 正味実現可能価額法',
          example: {
            problem: '同じ $60,000 を、NRV の割合で配分する。',
            steps: ['もも肉の NRV: ($15 − $3) × 4,000kg ＝ $48,000', 'むね肉の NRV: $4 × 6,000kg ＝ $24,000（分離点で売るので売上 ＝ NRV）', '合計 $72,000。もも肉 48/72 ＝ 2/3、むね肉 24/72 ＝ 1/3', 'もも肉: $60,000 × 2/3 ＝ $40,000', 'むね肉: $60,000 × 1/3 ＝ $20,000'],
            answer: 'もも肉 $40,000、むね肉 $20,000'
          }
        },
        {
          title: '問題文の指示を読む',
          paras: ['試験では、どの基準で配分するかが英語で書いてある。その言葉どおりの数字を使う。'],
          list: ['weight / volume / physical units（physical quantity）basis → 生産量の割合', 'net realisable value basis → 最終の売価 − 追加加工費', 'sales value at the point of separation（split-off）basis → 分離点で売ったときの売上。後で加工する製品でも、分離点の売価を使う'],
          note: { kind: 'tip', text: '全部の製品を分離点で売るなら、NRV 法と分離点の販売価値法は同じ答えになる。' }
        },
        {
          title: '2つの方法を並べる',
          svg: `<svg viewBox="0 0 440 285" role="img" aria-label="結合原価60,000ドルを物量法ではもも肉24,000ドル、むね肉36,000ドルに分け、むね肉は売上24,000ドルより大きく赤字に見える。NRV法ではもも肉40,000ドル、むね肉20,000ドル" font-size="14"><text x="20" y="28" font-size="16" font-weight="600" fill="var(--ink)">結合原価 $60,000 の分け方</text><text x="20" y="62" font-size="15" font-weight="600" fill="var(--ink)">物量法（重さ 4 : 6）</text><rect x="20" y="74" width="160" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="100" y="101" text-anchor="middle" fill="var(--ink)">もも $24,000</text><rect x="184" y="74" width="236" height="44" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="302" y="101" text-anchor="middle" font-weight="600" fill="var(--ink)">むね $36,000</text><text x="20" y="144" fill="var(--ink)">むね肉の売上は $24,000 → 赤字に見える</text><text x="20" y="184" font-size="15" font-weight="600" fill="var(--ink)">NRV 法（NRV 48 : 24）</text><rect x="20" y="196" width="264" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="152" y="223" text-anchor="middle" fill="var(--ink)">もも $40,000</text><rect x="288" y="196" width="132" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="354" y="223" text-anchor="middle" fill="var(--ink)">むね $20,000</text><text x="220" y="270" text-anchor="middle" fill="var(--ink)">どちらも合計は $60,000</text></svg>`,
          caption: '物量法は1kgの価値の低いむね肉に原価を重くのせる。NRV 法は稼ぐ力に合わせて分ける。'
        },
        {
          title: '製品ごとの利益（全部売れた月）',
          table: { caption: '利益 $（もも肉の売上 $60,000 − 追加加工費 $12,000、むね肉の売上 $24,000 から結合原価の配分額を引く）', head: ['方法', 'もも肉', 'むね肉'], rows: [['物量法', '24,000', '(12,000)'], ['NRV 法', '8,000', '4,000']] },
          after: '会社全体の利益はどちらも $12,000（$84,000 − $12,000 − $60,000）。NRV 法では、もも肉もむね肉も利益が NRV の 1/6（約16.7%）になり、そろう。'
        },
        {
          title: 'なぜ？ 方法によって何が変わるか',
          paras: ['結合原価の配分は、もともと正解のない「分け方の約束」。だから、作ったものが全部売れれば、会社全体の利益は方法によって変わらない。変わるのは、製品ごとの利益と、売れ残った在庫の金額。', '物量法は簡単だが、価値を無視する。1kgの価値が低い製品が赤字に見える。NRV 法は、売上で原価を負担できる力に合わせて分けるので、製品ごとの利益率がそろう。ただし、売価や加工費の見込みが必要になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'NRV 法で、加工してから売る製品の最終の売上（もも肉 $60,000）をそのまま使わない。追加加工費を引いた NRV（$48,000）で比べる。在庫の1kgあたり原価は、配分された結合原価に追加加工費を足す（もも肉 NRV 法: $10 ＋ $3 ＝ $13）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['配分額 ＝ 結合原価 × その製品の量（または NRV）÷ 合計', 'NRV ＝ 最終の売価 − 分離点の後の追加加工費。分離点で売るなら NRV ＝ 分離点の売上', '方法を変えても、全部売れれば会社全体の利益は同じ。変わるのは製品ごとの利益と在庫の金額']
        },
        {
          title: '英単語',
          words: [
            ['physical units basis', '', '物量法（生産量の割合で配分する）'],
            ['weight/volume method', '', '物量法（重さ・容積の割合で配分する）'],
            ['net realisable value method', '', '正味実現可能価額法（NRV の割合で配分する）'],
            ['sales value at split-off point', '', '分離点での販売価値（分離点で売るときの売上）'],
            ['apportionment', 'アポーションメント', '配分'],
            ['closing inventory valuation', '', '期末在庫の評価']
          ]
        }
      ],
      quiz: [
        { q: 'Joint costs of $120,000 are incurred in a process that produces 6,000 kg of product A and 4,000 kg of product B. Using the weight method, how much of the joint cost is apportioned to product B?', type: 'number', answer: 48000, unit: '$', explain: '合計 10,000kg、1kg あたり $12。B は 4,000kg × $12 ＝ $48,000（$120,000 × 4/10）。A の量を使うと $72,000 になる。' },
        { q: 'Joint costs of $90,000 are incurred in producing 3,000 units of product P and 5,000 units of product Q. P is sold for $30 per unit after further processing costing $10 per unit. Q is sold at the point of separation for $8 per unit. Using the net realisable value method, how much of the joint cost is apportioned to product P?', type: 'number', answer: 54000, unit: '$', explain: 'P の NRV ($30 − $10) × 3,000 ＝ $60,000、Q の NRV $8 × 5,000 ＝ $40,000、合計 $100,000。P: $90,000 × 60/100 ＝ $54,000。追加加工費を引かずに $90,000 で比べると P は $90,000 × 90/130 ≒ $62,308 になり誤り。' },
        { q: 'A process has joint costs of $50,000. It produces a by-product with a net realisable value of $2,000, which is deducted from the joint costs. It also produces 2,000 units of product X (net realisable value $40 per unit) and 4,000 units of product Y (net realisable value $10 per unit). Using the net realisable value method, what joint cost is apportioned to product X?', choices: ['$33,333', '$16,000', '$32,000', '$16,667'], answer: 2, explain:'配分する結合原価 $50,000 − $2,000 ＝ $48,000。NRV は X $80,000、Y $40,000。X: $48,000 × 80/120 ＝ $32,000。$33,333 は副産物を差し引き忘れた答え。$16,000 と $16,667 は個数（2,000 : 4,000）で分けた物量法の答え。' },
        { q: '鶏肉工場（NRV 法で配分。もも肉の結合原価は $40,000 ÷ 4,000kg ＝ 1kg $10、追加加工費は1kg $3）。加工済みのもも肉 500kg が月末に売れ残った。期末在庫の金額はいくら？', type: 'number', answer: 6500, unit: '$', explain: '1kg の原価 ＝ 結合原価 $10 ＋ 追加加工費 $3 ＝ $13。500kg × $13 ＝ $6,500。結合原価だけだと $5,000、物量法の $6 を使うと $4,500 になる。' },
        { q: '物量法（weight/volume method）の弱点として正しいのは？', choices: ['売価が分からないと計算できない', '全部売れても、会社全体の利益が NRV 法より小さくなる', '副産物の NRV を差し引けない', '1kg あたりの価値が低い製品に原価が重くのり、赤字に見えることがある'], answer: 3, explain: '物量法は価値を無視して量だけで分けるので、価値の低い製品（むね肉）が赤字に見える。「売価が必要」は NRV 法の弱点。全部売れれば会社全体の利益はどちらの方法でも同じ（総額の結合原価がすべて費用になるため）。副産物の差し引きは配分の前に行うので、方法に関係なくできる。' },
        { q: 'Joint costs of $80,000 are incurred in producing 2,000 units of product A and 4,000 units of product B. At the point of separation, A could be sold for $20 per unit and B for $10 per unit. A is processed further at a cost of $5 per unit and then sold for $30 per unit. B is sold at the point of separation. Joint costs are apportioned on the basis of sales value at the point of separation. How much joint cost is apportioned to product A?', choices: ['$44,444', '$40,000', '$48,000', '$26,667'], answer: 1, explain: '分離点の販売価値: A $20 × 2,000 ＝ $40,000、B $10 × 4,000 ＝ $40,000。1 : 1 なので A は $40,000。$44,444 は NRV 法（A ($30 − $5) × 2,000 ＝ $50,000）、$48,000 は最終の売上 $60,000 をそのまま使った答え、$26,667 は個数で分けた物量法の答え。指示された基準の数字を使う。' }
      ]
    },
    {
      id: 'M061',
      no: 61,
      title: '分離点の後でさらに加工するべきか',
      goal: '追加加工で増える売上と増える費用を比べて、追加加工の利益（benefit of further processing）を計算し、判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(b)(vii)'],
      slides: [
        {
          title: '梅をそのまま売るか、梅干しにするか',
          paras: ['庭の梅を1kg 1,000円で売れる。塩と容器に 400円かけて梅干しにすると 1,800円で売れる。', '梅干しにすると、売上は 800円増え、費用は 400円増える。差し引き 400円のもうけが増えるので、梅干しにする方がよい。梅の木の手入れ代は、梅をどう売っても同じだけかかる。だから比べるときに入れない。']
        },
        {
          title: '判断のルール',
          formula: '追加加工する ⇔ 増える売上 ＞ 増える費用',
          list: ['増える売上（incremental revenue）＝ 加工後の売上 − 分離点で売ったときの売上', '増える費用（incremental costs）＝ 追加加工費（変動費 ＋ 加工するときだけかかる固定費）'],
          after: '結合原価とその配分額は、判断に入れない。分離点まで来た時点で、どちらを選んでも同じ額がかかっているから。'
        },
        {
          title: '例題1: もも肉を加工するか',
          example: {
            problem: '鶏肉工場のもも肉 4,000kg。分離点でそのまま売ると1kg $11。味付け・包装（1kg $3）をすると1kg $15 で売れる。もも肉に配分された結合原価は $40,000。加工するべきか？',
            steps: ['分離点で売る: $11 × 4,000kg ＝ $44,000', '加工して売る: $15 × 4,000kg ＝ $60,000', '増える売上: $60,000 − $44,000 ＝ $16,000', '増える費用: $3 × 4,000kg ＝ $12,000', '差: $16,000 − $12,000 ＝ ＋$4,000。結合原価 $40,000 は使わない'],
            answer: '加工する。利益が $4,000 増える'
          }
        },
        {
          title: '例題2: むね肉をサラダチキンにするか',
          example: {
            problem: 'むね肉 6,000kg は分離点で1kg $4 で売っている。サラダチキンにすると1kg $7 で売れる。調理の変動費は1kg $2。調理機のリース代が月 $8,000 かかるが、加工しなければ借りない。加工するべきか？',
            steps: ['増える売上: ($7 − $4) × 6,000kg ＝ $18,000', '増える変動費: $2 × 6,000kg ＝ $12,000', '加工するときだけの固定費: $8,000（避けられる費用なので入れる）', '増える費用の合計: $12,000 ＋ $8,000 ＝ $20,000', '差: $18,000 − $20,000 ＝ −$2,000'],
            answer: '加工しない。加工すると利益が $2,000 減る'
          }
        },
        {
          title: '何を比べているか',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="結合原価60,000ドルはどちらを選んでも払うので判断に入れない。分離点で売ると売上24,000ドル、サラダチキンにすると売上42,000ドルで追加の費用20,000ドル。増える売上18,000ドルは増える費用20,000ドルより小さい" font-size="14"><rect x="20" y="20" width="400" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="220" y="44" text-anchor="middle" font-size="15" fill="var(--quiet)">結合原価 $60,000（鶏をさばく費用）</text><text x="220" y="66" text-anchor="middle" fill="var(--quiet)">どちらを選んでも払う → 判断に入れない</text><rect x="20" y="98" width="190" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">分離点で売る</text><text x="115" y="152" text-anchor="middle" fill="var(--ink)">売上 $24,000</text><text x="115" y="176" text-anchor="middle" fill="var(--ink)">追加の費用 $0</text><rect x="230" y="98" width="190" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="126" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">サラダチキンにする</text><text x="325" y="152" text-anchor="middle" fill="var(--ink)">売上 $42,000</text><text x="325" y="176" text-anchor="middle" fill="var(--ink)">追加の費用 $20,000</text><rect x="20" y="212" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="237" text-anchor="middle" font-weight="600" fill="var(--ink)">増える売上 $18,000 &lt; 増える費用 $20,000</text></svg>`,
          caption: '比べるのは、2つの選択肢で違ってくる売上と費用だけ。'
        },
        {
          title: 'なぜ？ 結合原価を入れると判断を誤る',
          paras: ['結合原価は、鶏をさばいた時点で決まっている。加工してもしなくても変わらない費用は、選択肢の比較に関係しない（関連しない原価）。配分の方法を物量法から NRV 法に変えても、追加加工の答えは変わらない。', '物量法では、むね肉は結合原価 $36,000 に対して売上 $24,000 で、赤字に見えた（M060）。でも、むね肉を売るのをやめても $36,000 は減らない。$24,000 の売上がなくなり、会社の利益が減るだけ。配分した数字は意思決定に使わない。']
        },
        {
          title: '固定費と目減りに注意',
          list: ['固定費: 加工するときだけかかる（避けられる）固定費は増える費用に入れる。加工してもしなくてもかかる工場全体の固定費の配賦額は入れない', '目減り: 加工中に重さが減るときは、加工後に残る量に売価をかける（10,000kg で10%減れば 9,000kg 分の売上）', '数字以外: 加工品の需要、加工に使う設備や人手の他の使い道、品質や評判も考える'],
          after: '結合工程そのものをやめるかどうかの判断なら、結合原価も変わるので比較に入る。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '加工後の売上全額（$42,000）と追加加工費（$20,000）を比べない。分離点で売れば入るはずの売上（$24,000）を失うので、比べるのは増えた分（$18,000）。また、配分された結合原価を費用に足して「加工後も赤字だから加工しない」と考えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['追加加工の利益 ＝（加工後の売上 − 分離点の売上）− 追加加工費', '結合原価とその配分額は判断に入れない。配分方法を変えても答えは同じ', '加工するときだけかかる固定費は入れ、目減りがあれば残る量で売上を計算する']
        },
        {
          title: '英単語',
          words: [
            ['further processing decision', '', '追加加工をするかどうかの判断'],
            ['incremental revenue', 'インクリメンタル レベニュー', '増える売上（差額収益）'],
            ['incremental cost', 'インクリメンタル コスト', '増える費用（差額原価）'],
            ['relevant cost', 'レレバント コスト', '関連原価（選択によって変わる将来の費用）'],
            ['avoidable cost', 'アボイダブル コスト', '避けられる費用（その選択をしなければかからない）'],
            ['benefit of further processing', '', '追加加工の利益（増える売上 − 増える費用）']
          ]
        }
      ],
      quiz: [
        { q: 'Product K is a joint product. 4,000 units are produced each month and can be sold at the point of separation for $12 per unit. Alternatively, K can be processed further at a variable cost of $5 per unit, plus fixed costs of $6,000 per month that would only be incurred if the further processing takes place. The processed product sells for $19 per unit. By how much would monthly profit increase if K were processed further?', type: 'number', answer: 2000, unit: '$', explain: '増える売上 ($19 − $12) × 4,000 ＝ $28,000。増える費用 $5 × 4,000 ＋ $6,000 ＝ $26,000。差 $2,000 だけ利益が増える。固定費を入れ忘れると $8,000。加工後の売上 $76,000 から費用だけを引くと $50,000 になり、分離点の売上 $48,000 を失う点を見落としている。' },
        { q: 'A joint process produces 10,000 kg of product B, which can be sold at the point of separation for $5 per kg. If B is processed further, costs of $2 per kg of input are incurred and 10% of the input weight is lost. The processed product sells for $8.50 per kg. What is the increase in profit from further processing?', type: 'number', answer: 6500, unit: '$', explain: '加工後に残るのは 9,000kg。加工後の売上 9,000 × $8.50 ＝ $76,500、分離点の売上 10,000 × $5 ＝ $50,000、増える売上 $26,500。加工費は投入量にかかるので 10,000 × $2 ＝ $20,000。差 $6,500。目減りを無視すると $85,000 − $50,000 − $20,000 ＝ $15,000 になり誤り。' },
        { q: 'Which of the following should be ignored when deciding whether to process a joint product further?', choices: ['The sales value of the product at the point of separation', 'The share of the joint costs apportioned to the product', 'The variable costs of further processing', 'Fixed costs that are incurred only if the further processing takes place'], answer: 1, explain: '結合原価は、加工してもしなくても同じだけかかるので関連しない。分離点の売上は、加工すると失う売上なので比較に必要。追加加工の変動費と、加工するときだけかかる固定費は増える費用なので入れる。' },
        { q: '鶏肉工場のサラダチキン案（増える売上 $18,000、増える変動費 $12,000）。$8,000 が、加工しなくてもかかる工場全体の固定費の配賦額だったとすると、どうなる？', choices: ['加工しない。利益が $2,000 減る', '加工しない。分離点の売上 $24,000 の方が大きい', '加工する。利益が $6,000 増える', '加工する。利益が $22,000 増える'], answer: 2, explain: '加工しなくてもかかる固定費は、増える費用ではないので入れない。$18,000 − $12,000 ＝ ＋$6,000。$2,000 減るのは $8,000 を避けられる費用として入れた場合。$22,000 は加工後の売上 $42,000 から費用だけを引き、分離点の売上を失うことを見落とした答え。' },
        { q: '結合原価の配分を、物量法から NRV 法に変えた。追加加工の判断はどうなる？', choices: ['配分額が減った製品は、加工するべきになる', '配分額が増えた製品は、加工をやめるべきになる', 'NRV 法では、すべての製品を加工するべきになる', '変わらない（結合原価は判断に入れないため）'], answer: 3, explain: '追加加工の判断は、増える売上と増える費用だけで決まる。結合原価をどの製品にどれだけ配分しても、比べる数字は変わらない。' }
      ]
    }
  ],
  cards: [
    { id: 'M059-1', lesson: 'M059', q: '連産品（joint products）とは？', a: '同じ工程から同時にでき、どれも売上の価値が大きい製品' },
    { id: 'M059-2', lesson: 'M059', q: '副産物（by-product）とは？', a: '一緒にできてしまう、売上の価値が相対的に小さい製品' },
    { id: 'M059-3', lesson: 'M059', q: '連産品と副産物を分ける決め手は？', a: '売上の価値の大きさ（量の多さではない）' },
    { id: 'M059-4', lesson: 'M059', q: '分離点（split-off point）と結合原価とは？', a: '製品が別々に分かれる時点。そこまでにかかった原価が結合原価' },
    { id: 'M059-5', lesson: 'M059', q: '副産物のふつうの扱いは？', a: 'NRV（売価 − 分離後の費用）を工程の原価から差し引き、残りを連産品に配分' },
    { id: 'M059-6', lesson: 'M059', q: '分離後の追加加工費の扱いは？', a: 'その製品の原価に直接入れる（配分しない）' },
    { id: 'M059-7', lesson: 'M059', q: '副産物の収入を other income として扱うと、配分する結合原価は？', a: '工程の原価の全額（何も差し引かない）' },
    { id: 'M060-1', lesson: 'M060', q: '物量法（weight/volume method）の配分の基準は？', a: '各製品の生産量（重さ・容積・個数）の割合' },
    { id: 'M060-2', lesson: 'M060', q: 'NRV 法で使う NRV の出し方は？', a: '最終の売価 − 分離後の追加加工費（分離点で売るなら分離点の売上）' },
    { id: 'M060-3', lesson: 'M060', q: '結合原価 $60,000。NRV がもも肉 $48,000、むね肉 $24,000。もも肉の配分額は？', a: '$40,000（$60,000 × 48/72）' },
    { id: 'M060-4', lesson: 'M060', q: '物量法の弱点は？', a: '価値を無視するので、1kgの価値が低い製品が赤字に見えることがある' },
    { id: 'M060-5', lesson: 'M060', q: '配分方法を変えると、全部売れた月の会社全体の利益は？', a: '変わらない。変わるのは製品ごとの利益と在庫の金額' },
    { id: 'M060-6', lesson: 'M060', q: '加工済みの連産品の在庫1単位の原価は？', a: '配分された結合原価（1単位）＋ 追加加工費（1単位）' },
    { id: 'M060-7', lesson: 'M060', q: '「sales value at the point of separation」基準で配分するときの数字は？', a: '分離点で売ったときの売上（後で加工する製品も分離点の売価）' },
    { id: 'M061-1', lesson: 'M061', q: '追加加工をするかどうかのルールは？', a: '増える売上 ＞ 増える費用（追加加工費）なら加工する' },
    { id: 'M061-2', lesson: 'M061', q: '増える売上（incremental revenue）の出し方は？', a: '加工後の売上 − 分離点で売ったときの売上' },
    { id: 'M061-3', lesson: 'M061', q: 'なぜ結合原価を判断に入れない？', a: 'どちらを選んでも同じ額がかかり、選択で変わらないから' },
    { id: 'M061-4', lesson: 'M061', q: '追加加工の判断で入れる固定費は？', a: '加工するときだけかかる（避けられる）固定費。共通費の配賦額は入れない' },
    { id: 'M061-5', lesson: 'M061', q: '加工中に10%目減りするときの売上は？', a: '残る量（投入量の90%）× 加工後の売価' }
  ]
});
