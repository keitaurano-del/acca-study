(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 110,
  part: 3,
  partTitle: '材料費・労務費・製造間接費',
  lessons: [
    {
      id: 'M039',
      no: 39,
      title: '直接経費と製造間接費の仕訳',
      goal: '経費を直接経費と間接経費に分け、製造間接費・管理費・販売費の仕訳を書けるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(i)'],
      slides: [
        {
          title: 'だれのための出費か、分かる？',
          paras: ['自宅で料理教室を開いている。ある生徒の誕生日コースのためだけに借りたケーキ型 2,000円は、その生徒の授業の費用だとはっきり言える。', '一方、家の家賃や電気代は、全部の授業のための出費。生徒1人ずつに「あなたの分はいくら」とは直接言えない。いったん集めてから、何かのルールで分けるしかない。']
        },
        {
          title: '経費（expenses）と製造間接費（overheads）',
          paras: ['経費は、材料費と労務費以外の原価。製品1個（cost unit）と直接結びつくかで2つに分ける。'],
          list: ['直接経費（direct expenses）: 特定の注文のための外注加工（subcontracting）、その仕事専用の機械のレンタル、製品1個ごとに払うロイヤルティ（royalties）', '間接経費（indirect expenses）: 工場の家賃、固定資産税（rates）、保険、電気代、機械の減価償却、修繕費'],
          after: '製造間接費（production overheads）＝間接材料＋間接労務費＋間接経費。工場の外では、管理費（administration overheads）と販売費・流通費（selling and distribution overheads）も発生する。'
        },
        {
          title: '原価の流れ',
          svg: `<svg viewBox="0 0 440 345" role="img" aria-label="直接経費は仕掛品へ、間接費は製造間接費勘定に集めてから仕掛品へ配賦" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">直接費は仕掛品へ、間接費はいったん集める</text><rect x="20" y="56" width="120" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="81" text-anchor="middle" fill="var(--ink)">直接経費</text><line x1="140" y1="76" x2="312" y2="76" stroke="var(--ink)" stroke-width="1.5"/><polygon points="312,71 320,76 312,81" fill="var(--ink)"/><rect x="320" y="56" width="100" height="196" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="370" y="150" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">仕掛品</text><text x="370" y="172" text-anchor="middle" font-size="12.5" fill="var(--quiet)">WIP</text><rect x="20" y="116" width="120" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="139" text-anchor="middle" fill="var(--ink)">間接材料</text><rect x="20" y="166" width="120" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="189" text-anchor="middle" fill="var(--ink)">間接労務費</text><rect x="20" y="216" width="120" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="239" text-anchor="middle" fill="var(--ink)">間接経費</text><line x1="140" y1="134" x2="162" y2="134" stroke="var(--ink)" stroke-width="1.5"/><polygon points="162,129 170,134 162,139" fill="var(--ink)"/><line x1="140" y1="184" x2="162" y2="184" stroke="var(--ink)" stroke-width="1.5"/><polygon points="162,179 170,184 162,189" fill="var(--ink)"/><line x1="140" y1="234" x2="162" y2="234" stroke="var(--ink)" stroke-width="1.5"/><polygon points="162,229 170,234 162,239" fill="var(--ink)"/><rect x="170" y="116" width="120" height="136" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="230" y="176" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">製造間接費</text><text x="230" y="198" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Production</text><text x="230" y="214" text-anchor="middle" font-size="12.5" fill="var(--quiet)">overhead control</text><line x1="290" y1="184" x2="312" y2="184" stroke="var(--ink)" stroke-width="1.5"/><polygon points="312,179 320,184 312,189" fill="var(--ink)"/><text x="305" y="174" text-anchor="middle" fill="var(--ink)">配賦</text><text x="220" y="282" text-anchor="middle" fill="var(--ink)">間接費はまず製造間接費勘定に集め、</text><text x="220" y="304" text-anchor="middle" fill="var(--ink)">あとで製品（仕掛品）に配賦する</text><text x="220" y="332" text-anchor="middle" fill="var(--quiet)">管理費・販売費は製品に入れず、その期の費用</text></svg>`,
          caption: '製造間接費統制勘定（production overhead control account）は、工場の間接費をためておく「箱」。'
        },
        {
          title: '仕訳の一覧',
          table: { caption: '経費と製造間接費の仕訳', head: ['取引', '借方（Dr）', '貸方（Cr）'], rows: [['直接経費（外注加工など）', 'Work in progress', 'Cash / Payables'], ['間接材料の払出', 'Production overhead control', 'Materials control'], ['間接労務費', 'Production overhead control', 'Wages control'], ['工場の家賃・電気代など', 'Production overhead control', 'Cash / Payables'], ['工場機械の減価償却', 'Production overhead control', 'Accumulated depreciation'], ['製品への配賦', 'Work in progress', 'Production overhead control']] },
          after: 'Work in progress（仕掛品）は作りかけの製品の勘定。直接費はここへ直接入り、間接費は配賦でここへ入る。'
        },
        {
          title: '管理費・販売費は製品に入れない',
          paras: ['事務所の家賃 $800 を払った。工場の外の費用なので、管理費の勘定に入れる。'],
          journal: [
            { side: 'Dr', account: 'Administration overhead control（管理費）', amount: '800' },
            { side: 'Cr', account: 'Cash', amount: '800' }
          ],
          after: '期末に Dr Statement of profit or loss / Cr Administration overhead control で、その期の費用にする。販売費・流通費も同じ。仕掛品にも在庫にも入らない。'
        },
        {
          title: 'なぜ？ いったん集めてから配る理由',
          paras: ['工場の家賃や電気代は、どの製品のために使ったか1個ずつは分からない。だから1つの勘定に集め、合計を見てから、一定のルール（配賦率）で製品に乗せる。', '管理費・販売費を製品に入れないのは、作ることと関係ない費用だから。製品原価（在庫の金額）に入るのは製造原価だけ。非製造原価は発生した期の費用になる（M009）。']
        },
        {
          title: '例題: どの勘定に入る？',
          example: {
            problem: 'Woodline 社の5月の取引: ① Job 12 のための外注塗装 $2,000 ② 工場の家賃 $3,000 ③ 工場の電気代 $1,200 ④ 事務所の家賃 $800 ⑤ 配送トラックの燃料 $400 ⑥ 工場機械の減価償却 $1,500 ⑦ 間接材料の払出 $600 ⑧ 間接労務費 $2,200。製造間接費勘定の借方合計は？',
            steps: ['① は Job 12 だけの費用 → 直接経費。Dr Work in progress $2,000', '②③⑥⑦⑧ は工場の間接費 → 製造間接費', '④ は管理費、⑤ は販売・流通費 → どちらも製品に入れず、損益計算書へ', '製造間接費: $3,000 ＋ $1,200 ＋ $1,500 ＋ $600 ＋ $2,200 ＝ $8,500'],
            answer: '製造間接費勘定の借方は $8,500（仕掛品へ直接 $2,000、管理費 $800、販売費 $400）'
          }
        },
        {
          title: '製造間接費勘定を締める',
          paras: ['5月に製品へ配賦した額が $8,000 だったとする。実際の $8,500 より $500 少ない（配賦不足）。'],
          tAccount: { name: 'Production overhead control（5月）', debit: [['Materials control（間接材料）', '600'], ['Wages control（間接労務費）', '2,200'], ['Cash / Payables（家賃・電気代）', '4,200'], ['Accumulated depreciation', '1,500']], credit: [['Work in progress（配賦額）', '8,000'], ['Profit or loss（配賦不足）', '500']] },
          after: '両側の合計は $8,500。借方は実際に発生した額、貸方は製品に配賦した額。差額は損益計算書へ振り替える（くわしくは M045）。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '工場の機械を買った代金は製造間接費ではない。固定資産（資本的支出）になり、製造間接費に入るのはその減価償却費。また、事務所の家賃を製造間接費に入れたり、特定の注文の外注費を製造間接費に入れたりしない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['製造間接費＝間接材料＋間接労務費＋間接経費。まず Production overhead control の借方に集める', '直接経費と、配賦した製造間接費は Work in progress の借方へ', '管理費・販売費は製品に入れず、その期の損益計算書の費用']
        },
        {
          title: '英単語',
          words: [
            ['direct expenses', 'ダイレクト エクスペンシズ', '直接経費'],
            ['indirect expenses', 'インダイレクト エクスペンシズ', '間接経費'],
            ['production overheads', 'プロダクション オーバーヘッズ', '製造間接費'],
            ['production overhead control account', '', '製造間接費統制勘定'],
            ['work in progress (WIP) control account', '', '仕掛品統制勘定'],
            ['administration overheads', '', '管理費'],
            ['selling and distribution overheads', '', '販売費・流通費'],
            ['subcontracting', 'サブコントラクティング', '外注（加工）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a direct expense?', choices: ['Rent of the factory building', 'Depreciation of factory machinery', 'Hire of a special machine for one specific job', 'Salary of the factory supervisor'], answer: 2, explain: '特定の仕事のためだけに借りた機械は、その仕事の原価とはっきり言える → 直接経費。工場の家賃・機械の減価償却・監督者の給料は全部の製品のための費用で、製造間接費。' },
        { q: 'Indirect materials of $600 are issued from stores to the production department. Which accounting entry is required?', choices: ['Dr Work in progress control $600, Cr Materials control $600', 'Dr Production overhead control $600, Cr Materials control $600', 'Dr Materials control $600, Cr Production overhead control $600', 'Dr Production overhead control $600, Cr Cash $600'], answer: 1, explain: '間接材料は製造間接費。製造間接費を増やし（借方）、材料の在庫を減らす（貸方）。Dr Work in progress control は直接材料の仕訳。Dr Materials control / Cr Production overhead control は向きが逆。在庫からの払出なので Cash は動かない。' },
        { q: '6月の取引: 工場の保険 $900、工場機械の減価償却 $1,100、Job 7 専用の型のレンタル $700、事務所の電気代 $300、間接労務費 $1,800、間接材料 $400。製造間接費勘定の借方合計はいくら？', type: 'number', answer: 4200, unit: '$', explain: '$900 ＋ $1,100 ＋ $1,800 ＋ $400 ＝ $4,200。Job 7 専用の型は直接経費（仕掛品へ）、事務所の電気代は管理費なので入れない。$4,900 なら型のレンタルを入れている。' },
        { q: 'Which accounting entry records the production overhead absorbed into production?', choices: ['Dr Production overhead control, Cr Work in progress control', 'Dr Finished goods control, Cr Production overhead control', 'Dr Production overhead control, Cr Cash', 'Dr Work in progress control, Cr Production overhead control'], answer: 3, explain: '配賦した額は製造間接費勘定から出て（貸方）、作りかけの製品に入る（仕掛品の借方）。Dr Production overhead control / Cr Work in progress control は向きが逆。製品は完成前なので、完成品（Finished goods）ではなく、まず仕掛品に入る。Cr Cash の仕訳は、間接経費を払ったときのもの。' },
        { q: '事務所の家賃 $800 は、最終的にどう処理する？', choices: ['管理費として、その期の損益計算書の費用にする', '製造間接費に入れて、製品に配賦する', '仕掛品勘定に直接入れる', '在庫の一部として翌期に繰り越す'], answer: 0, explain: '工場の外の費用は製品原価に入れない。だから仕掛品にも在庫にも入らず、発生した期の費用になる。' },
        { q: '工場の機械の減価償却費 $1,500 を計上する仕訳は？', choices: ['Dr Work in progress / Cr Accumulated depreciation', 'Dr Production overhead control / Cr Accumulated depreciation', 'Dr Accumulated depreciation / Cr Production overhead control', 'Dr Administration overhead control / Cr Accumulated depreciation'], answer: 1, explain: '工場の機械の減価償却は製造間接費。貸方は K1 と同じく減価償却累計額。Dr Work in progress は、全部の製品のための費用を直接費扱いしている。Dr Accumulated depreciation / Cr Production overhead control は向きが逆。Dr Administration overhead control は事務所の設備の場合。' }
      ]
    },
    {
      id: 'M040',
      no: 40,
      title: '製造間接費を部門に集める: 割当と按分',
      goal: '製造間接費を部門に割当・按分し、部門ごとの製造間接費を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(ii)'],
      slides: [
        {
          title: 'シェアハウスの費用の分け方',
          paras: ['シェアハウスで、自分の部屋のエアコン代は自分の部屋のメーターで分かる。これはそのまま自分の負担。', '家全体の家賃やネット代は、みんなの分が混ざっている。家賃は部屋の広さで、ネット代は人数で分けるのが公平そう。前者が割当（allocation）、後者が按分（apportionment）の考え方。']
        },
        {
          title: '工場は部門（cost centre）に分かれる',
          list: ['製造部門（production cost centres）: 製品を直接つくる部門。例: 機械加工、組立、仕上げ', '補助部門（service cost centres）: 製造部門を支える部門。例: 保全（maintenance）、倉庫（stores）、食堂（canteen）'],
          after: '製造間接費は、いきなり製品に乗せない。まず部門ごとに集める。部門によって、原価のかかり方が違うから。'
        },
        {
          title: '製品に届くまでの3段階',
          numbered: ['割当・按分: 製造間接費を全部門（補助部門も含む）に集める（このレッスン）', '再配分: 補助部門の費用を製造部門に移す（M041、M042）', '配賦: 製造部門ごとの配賦率で、製品（cost unit）に乗せる（M043）'],
          formula: '製造間接費 → 部門 → 製造部門 → 製品'
        },
        {
          title: '割当と按分のちがい',
          list: ['割当（allocation）: 1つの部門だけで発生した費用を、その部門に全額付ける。例: 保全部門の作業員の給料、組立部門だけで使う機械の修理代', '按分（apportionment）: 複数の部門に共通する費用を、公平な基準で分ける。例: 工場全体の家賃、工場長の給料、工場の暖房'],
          after: 'まず割当できるものは割当し、残った共通費だけを按分する。'
        },
        {
          title: '按分の基準',
          table: { caption: 'よく使う基準', head: ['費用', '按分の基準'], rows: [['家賃・固定資産税（rent and rates）', '床面積（floor area）'], ['暖房・照明', '床面積または容積'], ['建物の保険', '床面積'], ['機械の保険・減価償却', '機械の価額（value of machinery）'], ['電力（power）', '機械時間・電力の使用量'], ['食堂・人事・監督者の給料', '従業員数（number of employees）']] },
          after: '基準は「その費用が発生する原因に一番近いもの」を選ぶ。'
        },
        {
          title: 'なぜ？ 部門ごとに集める理由',
          paras: ['機械加工は機械の費用が多く、組立は人手の費用が多い。工場全体を1本の率でならすと、機械を多く使う製品と、手作業が中心の製品の原価がゆがむ。', 'さらに、部門ごとに集めれば、部門の責任者が自分の部門の費用を見て管理できる（責任会計）。基準を原因に近いものにするのも、ゆがみを小さくするため。']
        },
        {
          title: '例題: 割当と按分',
          example: {
            problem: 'Woodline 社の工場: 機械加工・組立（製造部門）、保全（補助部門）。月の製造間接費は、部門個別費 $10,000／$8,000／$3,000（機械加工／組立／保全の順）、工場の賃借料 $12,000、機械の保険 $4,000、監督者の給料 $6,000。床面積 2,000／1,500／500 m²、機械の価額 $60,000／$30,000／$10,000、従業員数 20／30／10 人。各部門の製造間接費は？',
            steps: ['個別費は割当: $10,000／$8,000／$3,000', '賃借料: 床面積の合計 4,000 m² → 1 m² あたり $12,000 ÷ 4,000 ＝ $3 → $6,000／$4,500／$1,500', '機械の保険: 価額の合計 $100,000 → $4,000 ÷ $100,000 ＝ 4% → $2,400／$1,200／$400', '監督者の給料: 合計 60人 → 1人 $100 → $2,000／$3,000／$1,000', '部門ごとに合計: $20,400／$16,700／$5,900', '確かめ: 合計 $43,000 ＝ $21,000 ＋ $12,000 ＋ $4,000 ＋ $6,000'],
            answer: '機械加工 $20,400、組立 $16,700、保全 $5,900'
          }
        },
        {
          title: '部門別の集計表',
          svg: `<svg viewBox="0 0 440 272" role="img" aria-label="機械加工・組立・保全の部門別製造間接費の集計表" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">部門別の製造間接費（月、$）</text><text x="20" y="64" font-weight="600" fill="var(--ink)">費目（基準）</text><text x="250" y="64" text-anchor="end" font-weight="600" fill="var(--ink)">機械加工</text><text x="330" y="64" text-anchor="end" font-weight="600" fill="var(--ink)">組立</text><text x="410" y="64" text-anchor="end" font-weight="600" fill="var(--ink)">保全</text><line x1="20" y1="74" x2="420" y2="74" stroke="var(--edge)" stroke-width="1.25"/><text x="20" y="98" fill="var(--ink)">割当（個別費）</text><text x="250" y="98" text-anchor="end" fill="var(--ink)">10,000</text><text x="330" y="98" text-anchor="end" fill="var(--ink)">8,000</text><text x="410" y="98" text-anchor="end" fill="var(--ink)">3,000</text><text x="20" y="126" fill="var(--ink)">賃借料（床面積）</text><text x="250" y="126" text-anchor="end" fill="var(--ink)">6,000</text><text x="330" y="126" text-anchor="end" fill="var(--ink)">4,500</text><text x="410" y="126" text-anchor="end" fill="var(--ink)">1,500</text><text x="20" y="154" fill="var(--ink)">保険（機械の価額）</text><text x="250" y="154" text-anchor="end" fill="var(--ink)">2,400</text><text x="330" y="154" text-anchor="end" fill="var(--ink)">1,200</text><text x="410" y="154" text-anchor="end" fill="var(--ink)">400</text><text x="20" y="182" fill="var(--ink)">監督者の給料（人数）</text><text x="250" y="182" text-anchor="end" fill="var(--ink)">2,000</text><text x="330" y="182" text-anchor="end" fill="var(--ink)">3,000</text><text x="410" y="182" text-anchor="end" fill="var(--ink)">1,000</text><line x1="20" y1="194" x2="420" y2="194" stroke="var(--ink)" stroke-width="1.25"/><rect x="354" y="200" width="64" height="28" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="20" y="219" font-weight="600" fill="var(--ink)">合計</text><text x="250" y="219" text-anchor="end" font-weight="600" fill="var(--ink)">20,400</text><text x="330" y="219" text-anchor="end" font-weight="600" fill="var(--ink)">16,700</text><text x="410" y="219" text-anchor="end" font-weight="600" fill="var(--ink)">5,900</text><text x="220" y="256" text-anchor="middle" fill="var(--ink)">保全の $5,900 は、次に製造部門へ移す</text></svg>`,
          caption: 'この表を overhead analysis sheet（部門別集計表）という。補助部門にも一度費用を集めるのがポイント。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '按分の割合を「その部門 ÷ 製造部門だけの合計」にしてしまう。この段階では補助部門も含めた全部門の合計で割る。基準の取り違え（機械の保険を床面積で分けるなど）や、割当できる費用まで按分してしまう間違いも多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['割当＝1つの部門だけの費用をそのまま付ける。按分＝共通費を基準で分ける', '基準は原因に近いもの: 家賃は床面積、機械の保険は機械の価額、食堂は従業員数', '按分額 ＝ 共通費 × その部門の基準量 ÷ 全部門の基準量']
        },
        {
          title: '英単語',
          words: [
            ['allocation', 'アロケーション', '割当（1つの部門に全額付ける）'],
            ['apportionment', 'アポーションメント', '按分（共通費を基準で分ける）'],
            ['cost centre', 'コスト センター', '原価部門'],
            ['production cost centre', '', '製造部門'],
            ['service cost centre', '', '補助部門'],
            ['basis of apportionment', '', '按分の基準'],
            ['overhead analysis sheet', '', '部門別集計表'],
            ['floor area', 'フロア エリア', '床面積']
          ]
        }
      ],
      quiz: [
        { q: '工場の賃借料 $18,000 を床面積で按分する。裁断部門 3,000 m²、縫製部門 4,500 m²、食堂 1,500 m²。縫製部門への按分額はいくら？', type: 'number', answer: 9000, unit: '$', explain: '床面積の合計 9,000 m² → 1 m² あたり $2。$2 × 4,500 ＝ $9,000。補助部門の食堂も合計に入れる。食堂を抜いて 7,500 m² で割ると $10,800 になってしまう。' },
        { q: 'Which basis is most appropriate for apportioning the cost of insuring the machinery in a factory?', choices: ['Floor area of each cost centre', 'Number of employees in each cost centre', 'Number of materials requisitions', 'Value of machinery in each cost centre'], answer: 3, explain: '保険料は守る機械の価値が高いほど大きくなる。だから機械の価額。床面積は家賃や建物の保険、従業員数は食堂や人事の費用に使う。' },
        { q: 'Which of the following overheads would be allocated rather than apportioned?', choices: ['Rent of the factory building', 'Heating of the whole factory', 'Wages of the staff who work only in the maintenance department', 'Salary of the factory manager'], answer: 2, explain: '保全部門だけで働く人の給料は、どの部門の費用かはっきりしている → 割当。ほかの3つは複数の部門に共通なので按分する。' },
        { q: 'Factory supervision costs of $24,000 are apportioned on the basis of the number of employees. Department A has 30 employees, Department B has 50 and the stores department has 20. How much is apportioned to Department B?', type: 'number', answer: 12000, unit: '$', explain: '合計 100人 → 1人 $240。$240 × 50 ＝ $12,000。補助部門の倉庫（stores）も合計に入れる。倉庫を抜いて 80人で割ると $15,000 になる。' },
        { q: '割当（allocation）と按分（apportionment）の正しい説明は？', choices: ['割当は共通費を基準で分けること、按分は1つの部門だけの費用を付けること', '割当は1つの部門だけの費用を全額付けること、按分は共通費を基準で分けること', '割当は製造部門へ、按分は補助部門へ費用を付けること', '割当は製品へ、按分は部門へ費用を付けること'], answer: 1, explain: '割当と按分を逆にした説明に注意。割当も按分も、補助部門を含む全部門に対して行う。製品に乗せるのは配賦（absorption）で、別の段階。' }
      ]
    },
    {
      id: 'M041',
      no: 41,
      title: '補助部門費の再配分①: 直接配賦法と階梯式配賦法',
      goal: '補助部門の製造間接費を、直接配賦法と階梯式配賦法で製造部門に再配分できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(iii)'],
      slides: [
        {
          title: '皿洗いの給料も、料理の値段に入る',
          paras: ['レストランで料理を作るのは厨房。皿洗いや仕入れの係は料理を作らないが、いないと店は回らない。', 'その給料も、最後はお客さんが払う料理の値段に入れる必要がある。だから、皿洗いのコストをいったん厨房に移してから、料理に乗せる。これが補助部門費の再配分（reapportionment）。']
        },
        {
          title: 'なぜ製造部門に移す？',
          paras: ['製品（cost unit）が通るのは製造部門だけ。保全や倉庫の中を製品は通らない。だから製品に乗せる配賦率は、製造部門にだけ作る。', 'そのため、補助部門に集めた費用は、全部いずれかの製造部門に移す。移す割合は、各部門が補助部門のサービスをどれだけ使ったかで決める。', '問題では % のほか、保全時間や出庫件数（number of materials requisitions）で与えられることも多い。そのときは合計で割って割合に直す（例: 600件／400件／200件 → 50%／約33%／約17%）。']
        },
        {
          title: '例題のデータ',
          list: ['割当・按分後の製造間接費: 製造X $40,000、製造Y $30,000、倉庫 $10,000、保全 $17,000（合計 $97,000）', '倉庫のサービス: X 45%、Y 30%、保全 25%', '保全のサービス: X 45%、Y 45%、倉庫 10%'],
          after: '補助部門どうしもサービスし合っている。この「補助部門間のやり取り」をどう扱うかで、方法が3つに分かれる。このレッスンでは2つを学ぶ。'
        },
        {
          title: '直接配賦法（direct method）',
          paras: ['補助部門どうしのサービスを無視して、製造部門の使った割合だけで分ける。'],
          example: {
            problem: '上のデータで、直接配賦法による製造X・Yの製造間接費は？',
            steps: ['倉庫: X と Y の割合は 45:30。$10,000 × 45/75 ＝ $6,000、$10,000 × 30/75 ＝ $4,000', '保全: X と Y は 45:45。$17,000 × 1/2 ＝ $8,500 ずつ', 'X: $40,000 ＋ $6,000 ＋ $8,500 ＝ $54,500', 'Y: $30,000 ＋ $4,000 ＋ $8,500 ＝ $42,500', '確かめ: $54,500 ＋ $42,500 ＝ $97,000'],
            answer: '製造X $54,500、製造Y $42,500'
          }
        },
        {
          title: '2つの方法のちがい',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="直接配賦法は補助部門間を無視、階梯式は倉庫から保全への分だけ数える" font-size="14"><defs><marker id="arrK41" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--ink)"/></marker><marker id="accK41" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent)"/></marker></defs><text x="116" y="28" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">直接配賦法</text><text x="326" y="28" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">階梯式配賦法</text><line x1="220" y1="12" x2="220" y2="250" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><rect x="22" y="46" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="57" y="69" text-anchor="middle" fill="var(--ink)">倉庫</text><rect x="140" y="46" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="175" y="69" text-anchor="middle" fill="var(--ink)">保全</text><rect x="22" y="170" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="57" y="193" text-anchor="middle" fill="var(--ink)">製造X</text><rect x="140" y="170" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="175" y="193" text-anchor="middle" fill="var(--ink)">製造Y</text><line x1="57" y1="82" x2="57" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="57" y1="82" x2="173" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="175" y1="82" x2="59" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="175" y1="82" x2="175" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><rect x="232" y="46" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="267" y="69" text-anchor="middle" fill="var(--ink)">倉庫</text><rect x="350" y="46" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="385" y="69" text-anchor="middle" fill="var(--ink)">保全</text><rect x="232" y="170" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="267" y="193" text-anchor="middle" fill="var(--ink)">製造X</text><rect x="350" y="170" width="70" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="385" y="193" text-anchor="middle" fill="var(--ink)">製造Y</text><line x1="302" y1="64" x2="347" y2="64" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#accK41)"/><line x1="267" y1="82" x2="267" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="267" y1="82" x2="383" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="385" y1="82" x2="269" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><line x1="385" y1="82" x2="385" y2="168" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK41)"/><text x="116" y="236" text-anchor="middle" fill="var(--ink)">補助部門の間は無視</text><text x="326" y="236" text-anchor="middle" fill="var(--ink)">倉庫→保全だけ数える</text><text x="220" y="274" text-anchor="middle" fill="var(--ink)">どちらも最後は製造部門だけに集まる</text></svg>`,
          caption: '階梯式では、先に配る倉庫の費用の一部が保全に入る。保全から倉庫への分（10%）は無視する。'
        },
        {
          title: '階梯式配賦法（step-down method）',
          paras: ['補助部門を1つずつ順番に配る。先に配る部門は、製造部門と残りの補助部門に配る。後の部門は、もう配り終えた部門には配らない。', '順番は、ほかの補助部門へのサービスが多い部門が先（問題で指定があれば従う）。倉庫は保全へ 25%、保全は倉庫へ 10% なので、倉庫が先。']
        },
        {
          title: '例題: 階梯式配賦法',
          example: {
            problem: '同じデータで、階梯式配賦法による製造X・Yの製造間接費は？',
            steps: ['① 倉庫 $10,000 を全部の割合で配る: X 45% ＝ $4,500、Y 30% ＝ $3,000、保全 25% ＝ $2,500', '② 保全の合計: $17,000 ＋ $2,500 ＝ $19,500', '③ 保全は X と Y だけに配る（倉庫は配り終えたので無視）: 45:45 → $9,750 ずつ', 'X: $40,000 ＋ $4,500 ＋ $9,750 ＝ $54,250', 'Y: $30,000 ＋ $3,000 ＋ $9,750 ＝ $42,750（合計 $97,000）'],
            answer: '製造X $54,250、製造Y $42,750'
          }
        },
        {
          title: 'なぜ？ 方法によって結果が変わる理由',
          table: { caption: '製造部門の製造間接費（$）', head: ['方法', '製造X', '製造Y'], rows: [['直接配賦法', '54,500', '42,500'], ['階梯式配賦法', '54,250', '42,750']] },
          after: '直接配賦法は簡単だが、補助部門どうしのサービスを全部無視する。階梯式は片方向だけ反映する。ほかの補助部門にサービスしない部門が後に来るなら、階梯式は正確な答えになる。両方向を全部反映するのが次の相互配賦法。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '直接配賦法で $10,000 × 45% ＝ $4,500 としてしまう。製造部門の割合の合計（75%）で割り直して 45/75 にする。階梯式では、2番目の部門は「元の費用＋受け取った分」を配る。受け取った分を足し忘れたり、配り終えた部門に戻したりしない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['補助部門費は全部、製造部門に移す（配賦率は製造部門にだけ作る）', '直接配賦法: 補助部門どうしを無視し、製造部門の割合だけで割り直して配る', '階梯式: 他の補助部門へのサービスが多い部門から順に。配り終えた部門には戻さない']
        },
        {
          title: '英単語',
          words: [
            ['reapportionment', 'リアポーションメント', '（補助部門費の）再配分'],
            ['service cost centre', '', '補助部門'],
            ['direct method', 'ダイレクト メソッド', '直接配賦法'],
            ['step-down method', 'ステップダウン メソッド', '階梯式配賦法'],
            ['inter-service work', '', '補助部門どうしのサービス'],
            ['maintenance / stores / canteen', '', '保全 / 倉庫 / 食堂']
          ]
        }
      ],
      quiz: [
        { q: '倉庫部門の製造間接費は $8,000。サービスの割合は、機械加工 50%、組立 30%、保全（補助部門）20%。直接配賦法で機械加工に配る額はいくら？', type: 'number', answer: 5000, unit: '$', explain: '直接配賦法は保全への 20% を無視し、製造部門の 50:30 で割り直す。$8,000 × 50/80 ＝ $5,000。$4,000（× 50%）は割り直しを忘れた答え。' },
        { q: 'A company has production departments A and B, and service departments Canteen and Maintenance. Overheads are: Canteen $9,000 and Maintenance $7,200. The canteen serves A 40%, B 40% and Maintenance 20%. Maintenance serves A 50% and B 50%. Using the step-down method, what is the total service department overhead reapportioned to Department A?', type: 'number', answer: 8100, unit: '$', explain: '食堂が先（保全にサービスし、保全は食堂にサービスしない）。食堂 $9,000 → A $3,600、B $3,600、保全 $1,800。保全 $7,200 ＋ $1,800 ＝ $9,000 → A $4,500。A の合計 $3,600 ＋ $4,500 ＝ $8,100。' },
        { q: 'Which of the following statements about the direct method of reapportionment is correct?', choices: ['It recognises all services provided between service cost centres', 'It recognises services between service cost centres in one direction only, in a set order', 'It ignores services provided by one service cost centre to another', 'It reapportions production cost centre overheads to service cost centres'], answer: 2, explain: '直接配賦法は補助部門どうしのやり取りを無視する。「all services」は相互配賦法、「one direction only」は階梯式配賦法の説明。製造部門から補助部門へ移すのは向きが逆で、費用は補助部門から製造部門へ移す。' },
        { q: '階梯式配賦法で、最初に配る補助部門はどれ？（問題に指定がないとき）', choices: ['ほかの補助部門へのサービスの割合が大きい部門', 'ほかの補助部門へのサービスの割合が小さい部門', '製造部門へのサービスの割合が大きい部門', 'どの部門からでも結果は同じ'], answer: 0, explain: '他の補助部門をたくさん支えている部門を先に配ると、無視されるサービスが小さくなり、結果が正確に近づく。順番を変えると結果は変わる。' },
        { q: '補助部門の製造間接費を製造部門に再配分する理由は？', choices: ['補助部門の費用は製品原価に入れないから', '補助部門の費用は管理費として損益計算書に直接入れるから', '製造部門の費用のほうが小さいから', '製品は製造部門だけを通るので、配賦率は製造部門にだけ作るから'], answer: 3, explain: '補助部門の費用も工場の製造原価なので、製品原価に入れる。製品が通る製造部門に集めてから配賦する。「製品原価に入れない」「管理費として損益計算書に直接入れる」は、製造原価と管理費を混同している。' },
        { q: 'The stores department has overheads of $12,000. The number of materials requisitions made by each cost centre is: Machining 600, Assembly 400 and Maintenance 200. Machining and Assembly are production cost centres. Using the direct method, how much of the stores overhead should be reapportioned to Assembly?', type: 'number', answer: 4800, unit: '$', explain: '件数で与えられたら、まず割合に直す。直接配賦法なので、補助部門の保全の 200 件は無視し、製造部門の 600 ＋ 400 ＝ 1,000 件で割る。$12,000 × 400/1,000 ＝ $4,800。保全も含めて 1,200 件で割った $4,000 は、階梯式で倉庫を最初に配るときの答え。' }
      ]
    },
    {
      id: 'M042',
      no: 42,
      title: '補助部門費の再配分②: 相互配賦法',
      goal: '補助部門どうしのサービスを全部反映する相互配賦法で、連立方程式を立てて再配分できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(c)(iii)'],
      slides: [
        {
          title: 'ルームメイトの家事分担',
          paras: ['A さんは料理係で、B さんの分の夕食も作る。B さんは掃除係で、A さんの部屋も掃除する。', '家事の手間を正しく比べるなら、お互いにしてあげている分を両方とも数える必要がある。片方だけ数えたり、両方無視したりすると、どちらかの負担が実際より軽く見える。']
        },
        {
          title: '相互配賦法（reciprocal method）',
          paras: ['補助部門どうしのサービスを、両方向とも全部反映する方法。前のレッスンと同じデータで考える: 倉庫 $10,000（X 45%、Y 30%、保全 25%）、保全 $17,000（X 45%、Y 45%、倉庫 10%）。', 'やり方は2つ。連立方程式（simultaneous equations、algebraic method）と、繰り返し配分（repeated distribution method）。答えは同じになる。']
        },
        {
          title: '方程式を立てる',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="倉庫と保全がお互いにサービスし合う関係と連立方程式" font-size="14"><defs><marker id="arrK42" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--ink)"/></marker></defs><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">お互いにサービスし合う</text><rect x="40" y="56" width="120" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="100" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">倉庫 S</text><text x="100" y="104" text-anchor="middle" fill="var(--quiet)">$10,000</text><rect x="280" y="56" width="120" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="340" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">保全 M</text><text x="340" y="104" text-anchor="middle" fill="var(--quiet)">$17,000</text><line x1="160" y1="72" x2="278" y2="72" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK42)"/><text x="220" y="64" text-anchor="middle" fill="var(--ink)">25%</text><line x1="280" y1="100" x2="162" y2="100" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrK42)"/><text x="220" y="120" text-anchor="middle" fill="var(--ink)">10%</text><text x="220" y="158" text-anchor="middle" font-size="16" fill="var(--ink)">S ＝ 10,000 ＋ 0.10 × M</text><text x="220" y="186" text-anchor="middle" font-size="16" fill="var(--ink)">M ＝ 17,000 ＋ 0.25 × S</text><rect x="60" y="204" width="320" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="232" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">解くと S ＝ 12,000、M ＝ 20,000</text></svg>`,
          caption: 'S と M は、相手から受け取った分も含めた補助部門の「総額」。S には保全の総額の 10% が入ってくる。'
        },
        {
          title: '例題①: 総額を求める',
          example: {
            problem: 'S ＝ 10,000 ＋ 0.10M、M ＝ 17,000 ＋ 0.25S を解いて、倉庫と保全の総額を求める。',
            steps: ['2つ目の式を1つ目に代入: S ＝ 10,000 ＋ 0.10 ×（17,000 ＋ 0.25S）', '展開: S ＝ 10,000 ＋ 1,700 ＋ 0.025S', 'S を左に集める: 0.975S ＝ 11,700', 'S ＝ 11,700 ÷ 0.975 ＝ 12,000', 'M ＝ 17,000 ＋ 0.25 × 12,000 ＝ 20,000'],
            answer: '倉庫の総額 $12,000、保全の総額 $20,000'
          }
        },
        {
          title: '例題②: 製造部門に配る',
          example: {
            problem: '総額 S ＝ $12,000、M ＝ $20,000 を、元の割合（%）で製造X・Yに配る。X と Y の製造間接費は？（当初 X $40,000、Y $30,000）',
            steps: ['倉庫 $12,000: X 45% ＝ $5,400、Y 30% ＝ $3,600（保全へ 25% ＝ $3,000 は M の総額に入り済み）', '保全 $20,000: X 45% ＝ $9,000、Y 45% ＝ $9,000（倉庫へ 10% ＝ $2,000 は S の総額に入り済み）', 'X: $40,000 ＋ $5,400 ＋ $9,000 ＝ $54,400', 'Y: $30,000 ＋ $3,600 ＋ $9,000 ＝ $42,600', '確かめ: $54,400 ＋ $42,600 ＝ $97,000'],
            answer: '製造X $54,400、製造Y $42,600'
          }
        },
        {
          title: 'もう1つのやり方: 繰り返し配分',
          paras: ['方程式を使わず、補助部門の費用を全部の割合で配ることを、補助部門に残る額がほぼゼロになるまで繰り返す。'],
          numbered: ['倉庫 $10,000 を配る: X $4,500、Y $3,000、保全 $2,500', '保全 $19,500 を配る: X $8,775、Y $8,775、倉庫 $1,950', '倉庫 $1,950 を配る: X $877.5、Y $585、保全 $487.5', '…と続け、残りが小さくなったら製造部門の割合で配って終える'],
          after: 'X に配った額を足していくと $5,400 ＋ $9,000 ＝ $14,400 に近づき、方程式と同じ答えになる。'
        },
        {
          title: 'なぜ？ 3つの方法を比べる',
          table: { caption: '製造部門の製造間接費（$）', head: ['方法', '製造X', '製造Y'], rows: [['直接配賦法', '54,500', '42,500'], ['階梯式配賦法', '54,250', '42,750'], ['相互配賦法', '54,400', '42,600']] },
          after: '相互配賦法は、補助部門どうしのサービスを全部数えるので、一番正確。ただし計算の手間が一番大きい。補助部門どうしのやり取りが小さければ差は小さく、大きければ差が大きくなる。どの方法でも合計（$97,000）は変わらない。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '方程式の割合を逆にする。S の式に入るのは「保全から倉庫へ」の 10%（S ＝ 10,000 ＋ 0.10M）。また、総額を製造部門に配るとき、45/75 のように割り直さない。相手の補助部門へ行く分は方程式の中で処理済みなので、元の割合（%）をそのままかける。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['相互配賦法＝補助部門どうしのサービスを両方向とも全部反映する', '総額 ＝ 自分の費用 ＋ 相手の総額 × 相手から受ける割合。連立方程式で解く', '総額に元の割合（%）をそのままかけて、製造部門に配る']
        },
        {
          title: '英単語',
          words: [
            ['reciprocal method', 'レシプロカル メソッド', '相互配賦法'],
            ['simultaneous equations', 'サイマルテイニアス イクエーションズ', '連立方程式'],
            ['algebraic method', 'アルジェブレイック メソッド', '（相互配賦法の）代数法'],
            ['repeated distribution method', '', '繰り返し配分法'],
            ['reapportion', 'リアポーション', '再配分する']
          ]
        }
      ],
      quiz: [
        { q: 'A factory has two production departments, P1 and P2, and two service departments, A and B. Overheads are: A $8,400 and B $6,000. Department A serves P1 50%, P2 30% and B 20%. Department B serves P1 40%, P2 40% and A 20%. Using the reciprocal method, what is the total service department overhead reapportioned to P1?', type: 'number', answer: 8200, unit: '$', explain: 'A ＝ 8,400 ＋ 0.2B、B ＝ 6,000 ＋ 0.2A。代入して A ＝ 9,600 ＋ 0.04A → 0.96A ＝ 9,600 → A ＝ 10,000、B ＝ 8,000。P1: 10,000 × 50% ＋ 8,000 × 40% ＝ 5,000 ＋ 3,200 ＝ $8,200。' },
        { q: 'Service centre X has overheads of $5,000 and provides 20% of its services to service centre Y. Service centre Y has overheads of $3,000 and provides 30% of its services to X. Which equations should be used to apply the reciprocal method?', choices: ['X = 5,000 + 0.2Y and Y = 3,000 + 0.3X', 'X = 5,000 + 0.3Y and Y = 3,000 + 0.2X', 'X = 5,000 + 0.2X and Y = 3,000 + 0.3Y', 'X = 5,000 − 0.2X and Y = 3,000 − 0.3Y'], answer: 1, explain: 'X の総額には、Y から受け取る分（Y の総額の 30%）が入る。だから X ＝ 5,000 ＋ 0.3Y。X = 5,000 + 0.2Y は割合を逆にした、よくある間違い。X の式に 0.2X が入っているものは、自分が出す割合を使っていて、相手から受け取る分になっていない。' },
        { q: '倉庫は $6,000（サービスの 10% を保全へ）、保全は $9,200（サービスの 20% を倉庫へ）。相互配賦法で、倉庫の総額 S はいくら？', type: 'number', answer: 8000, unit: '$', explain: 'S ＝ 6,000 ＋ 0.2M、M ＝ 9,200 ＋ 0.1S。代入して S ＝ 6,000 ＋ 1,840 ＋ 0.02S → 0.98S ＝ 7,840 → S ＝ $8,000（M ＝ 9,200 ＋ 800 ＝ $10,000）。' },
        { q: 'Which of the following statements about the reciprocal method is correct?', choices: ['It ignores all services provided between service cost centres', 'It recognises services between service cost centres in one direction only', 'It reapportions service cost centre overheads to other service cost centres only', 'It fully recognises the services that service cost centres provide to each other'], answer: 3, explain: '相互配賦法は両方向を全部数える。「ignores all」は直接配賦法、「one direction only」は階梯式配賦法の説明。最後は製造部門に全部移すので、「to other service cost centres only」は誤り。' },
        { q: '相互配賦法で総額 S ＝ $12,000 が出た。倉庫のサービスは X 45%、Y 30%、保全 25%。X に配る額は？', choices: ['$7,200', '$4,500', '$5,400', '$3,000'], answer: 2, explain: '総額に元の割合をそのままかける: $12,000 × 45% ＝ $5,400。$7,200 は 45/75 で割り直した答え（直接配賦法のやり方）。$4,500 は総額ではなく当初の $10,000 にかけた答え。$3,000 は保全へ行く分。' }
      ]
    }
  ],
  cards: [
    { id: 'M039-1', lesson: 'M039', q: '製造間接費（production overheads）の中身は？', a: '間接材料＋間接労務費＋間接経費（製品1個と直接結びつかない工場の原価）' },
    { id: 'M039-2', lesson: 'M039', q: '直接経費（例: 特定の注文の外注加工）の仕訳は？', a: 'Dr Work in progress / Cr Cash（または Payables）' },
    { id: 'M039-3', lesson: 'M039', q: '工場の家賃など間接経費の仕訳は？', a: 'Dr Production overhead control / Cr Cash（または Payables）' },
    { id: 'M039-4', lesson: 'M039', q: '製造間接費を製品に配賦する仕訳は？', a: 'Dr Work in progress / Cr Production overhead control' },
    { id: 'M039-5', lesson: 'M039', q: 'なぜ製造間接費はいったん1つの勘定に集める？', a: '製品1個と結びつかないので、合計を集めてから配賦率で製品に乗せるため' },
    { id: 'M039-6', lesson: 'M039', q: '管理費・販売費の行き先は？', a: '製品原価に入れず、発生した期の損益計算書の費用にする' },
    { id: 'M040-1', lesson: 'M040', q: '割当（allocation）とは？', a: '1つの部門だけで発生した製造間接費を、その部門に全額付けること' },
    { id: 'M040-2', lesson: 'M040', q: '按分（apportionment）とは？', a: '複数の部門に共通する費用を、公平な基準で部門に分けること' },
    { id: 'M040-3', lesson: 'M040', q: '家賃・固定資産税の按分基準は？', a: '床面積（floor area）' },
    { id: 'M040-4', lesson: 'M040', q: '機械の保険・減価償却、食堂の費用の按分基準は？', a: '機械の保険・減価償却は機械の価額、食堂は従業員数' },
    { id: 'M040-5', lesson: 'M040', q: '製造間接費が製品に届くまでの3段階は？', a: '①全部門へ割当・按分 ②補助部門費を製造部門へ再配分 ③配賦率で製品へ配賦' },
    { id: 'M040-6', lesson: 'M040', q: 'なぜ製造間接費を部門ごとに集める？', a: '部門で原価のかかり方が違い、工場全体1本の率だと製品原価がゆがむため' },
    { id: 'M041-1', lesson: 'M041', q: 'なぜ補助部門費を製造部門へ再配分する？', a: '製品は製造部門だけを通り、配賦率は製造部門にだけ作るから' },
    { id: 'M041-2', lesson: 'M041', q: '直接配賦法（direct method）とは？', a: '補助部門どうしのサービスを無視し、製造部門の割合だけで割り直して配る方法' },
    { id: 'M041-3', lesson: 'M041', q: '倉庫 $10,000、X 45%・Y 30%・保全 25%。直接配賦法で X へは？', a: '$10,000 × 45/75 ＝ $6,000' },
    { id: 'M041-4', lesson: 'M041', q: '階梯式配賦法（step-down method）の手順は？', a: '他の補助部門へのサービスが多い部門から順に配る。配り終えた部門には戻さない' },
    { id: 'M041-5', lesson: 'M041', q: '階梯式が正確な答えになるのはどんなとき？', a: '後に配る補助部門が、先の補助部門にサービスしていないとき' },
    { id: 'M041-6', lesson: 'M041', q: 'サービスが時間や件数で与えられたら？（直接配賦法）', a: '製造部門の分だけの合計で割って割合に直す（補助部門の分は無視）' },
    { id: 'M042-1', lesson: 'M042', q: '相互配賦法（reciprocal method）とは？', a: '補助部門どうしのサービスを両方向とも全部反映して再配分する方法' },
    { id: 'M042-2', lesson: 'M042', q: '倉庫 S $10,000 が保全 M から 10% を受ける。S の式は？', a: 'S ＝ 10,000 ＋ 0.10M（自分の費用＋相手の総額×受ける割合）' },
    { id: 'M042-3', lesson: 'M042', q: '総額を製造部門に配るときの割合は？', a: '元の割合（%）をそのままかける。製造部門だけで割り直さない' },
    { id: 'M042-4', lesson: 'M042', q: '相互配賦法の2つのやり方は？', a: '連立方程式（algebraic method）と繰り返し配分（repeated distribution method）' },
    { id: 'M042-5', lesson: 'M042', q: '3つの再配分方法で一番正確なのは？ その理由は？', a: '相互配賦法。補助部門どうしのサービスを全部数えるから' }
  ]
});
