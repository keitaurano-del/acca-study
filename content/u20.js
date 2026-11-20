(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 20,
  part: 13,
  partTitle: '個人事業の財務諸表',
  lessons: [
    {
      id: 'L95',
      no: 95,
      title: 'SFP の土台（会計等式・IFRS・企業実体）',
      goal: '財政状態計算書が、会計等式・IFRS 会計基準・企業実体の公準の3つの上に立っていることを説明し、項目を正しい場所に分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['G1(a)', 'B1(a)viii'],
      slides: [
        {
          title: '引越しの日の「持ち物リスト」',
          paras: ['引越しの日に、自分の持ち物と借金を全部書き出す。冷蔵庫10万円、車80万円、貯金50万円。借金は車のローン30万円。', 'ただし、会社から借りているノートパソコンは自分の物ではないので書かない。載せるのは「自分の」持ち物と借金だけ。', '財政状態計算書（SFP）も同じ。ある1日の、お店の持ち物と借金のリスト。']
        },
        {
          title: 'SFP を支える3つの柱',
          paras: ['財政状態計算書（statement of financial position、SFP）は、3つの考え方の上に立っている。'],
          list: ['会計等式（accounting equation）: 形を決める。資産＝資本＋負債', '企業実体の公準（business entity concept）: 何を載せるかを決める。お店の物だけ', 'IFRS 会計基準（IFRS Accounting Standards）: 載せ方を決める。定義・分け方・金額']
        },
        {
          title: '柱1: 会計等式がそのまま形になる',
          paras: ['L02 の assets ＝ capital ＋ liabilities を縦に並べたものが SFP。上に資産、下に資本と負債を書く。2つの合計は必ず一致する。'],
          svg: `<svg viewBox="0 0 440 396" role="img" aria-label="財政状態計算書は上に資産、下に資本と負債を並べ、2つの合計が同じになる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">SFP は会計等式を縦に並べたもの</text><rect x="20" y="50" width="400" height="126" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="78" font-size="16" font-weight="600" fill="var(--ink)">資産</text><text x="400" y="78" text-anchor="end" font-size="12.5" fill="var(--quiet)">assets</text><text x="40" y="106" fill="var(--ink)">非流動資産（設備・車など）</text><text x="400" y="106" text-anchor="end" font-size="12.5" fill="var(--quiet)">non-current assets</text><text x="40" y="132" fill="var(--ink)">流動資産（在庫・売掛金・現金）</text><text x="400" y="132" text-anchor="end" font-size="12.5" fill="var(--quiet)">current assets</text><path d="M40 146H400" stroke="var(--edge)" stroke-width="1"/><text x="40" y="166" font-weight="600" fill="var(--ink)">資産合計</text><text x="400" y="166" text-anchor="end" font-size="12.5" fill="var(--quiet)">total assets</text><text x="220" y="206" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">＝</text><rect x="20" y="218" width="400" height="162" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="246" font-size="16" font-weight="600" fill="var(--ink)">資本と負債</text><text x="400" y="246" text-anchor="end" font-size="12.5" fill="var(--quiet)">capital and liabilities</text><rect x="32" y="258" width="376" height="30" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="44" y="278" font-weight="600" fill="var(--ink)">資本（オーナーの取り分）</text><text x="396" y="278" text-anchor="end" font-size="12.5" fill="var(--ink)">capital</text><text x="40" y="312" fill="var(--ink)">非流動負債（長期の借入金）</text><text x="400" y="312" text-anchor="end" font-size="12.5" fill="var(--quiet)">non-current liabilities</text><text x="40" y="338" fill="var(--ink)">流動負債（買掛金・未払費用）</text><text x="400" y="338" text-anchor="end" font-size="12.5" fill="var(--quiet)">current liabilities</text><path d="M40 352H400" stroke="var(--edge)" stroke-width="1"/><text x="40" y="372" font-weight="600" fill="var(--ink)">資本と負債の合計</text><text x="400" y="372" text-anchor="end" font-size="12.5" fill="var(--quiet)">total capital and liabilities</text></svg>`,
          caption: '資本＝資産−負債なので、資本は純資産（net assets）とも言える。'
        },
        {
          title: '柱2: お店とオーナーは別の人',
          paras: ['個人事業でも、お店とオーナーは別の人として扱う（企業実体の公準、L02）。だから SFP には、お店の資産と負債だけを載せる。'],
          list: ['オーナーの自宅、自家用車、個人のカードローン → 載せない', 'オーナーがお店に入れたお金 → 資本。お店がオーナーに返すべき取り分', 'オーナーがお店のお金を私用に使った → 引出し（drawings）として資本を減らす']
        },
        {
          title: '柱3: IFRS が載せ方を決める',
          paras: ['IFRS 会計基準は、SFP の作り方の共通ルール。'],
          list: ['定義: 概念フレームワーク（L03）の定義に合うものだけ載せる', '分け方: 流動（current）と非流動（non-current）に分ける', '金額: 在庫は原価と正味実現可能価額の低い方。設備は帳簿価額（原価−減価償却累計額）', '表示: 有形固定資産、在庫、売掛金、現金、買掛金などは別の行'],
          after: '表示のルールは IFRS 18（IAS 1 の後継）にある。ACCA の試験は IFRS 18 の形で出る。'
        },
        {
          title: '流動と非流動の分け方',
          paras: ['目安は12か月。決算日から12か月以内（または通常の営業サイクルの中）に現金になる資産、返す負債は流動。それ以外は非流動。'],
          table: {
            caption: 'Takoyaki Shop の例',
            head: ['区分', '流動（current）', '非流動（non-current）'],
            rows: [
              ['資産', '在庫、売掛金、前払費用、現金・預金', '焼き器、車、無形資産'],
              ['負債', '買掛金、未払費用、当座借越、借入金の12か月以内の返済分', '借入金の12か月より後の返済分']
            ]
          },
          note: { kind: 'tip', text: '借入金 $10,000 を毎年 $2,000 ずつ返すなら、$2,000 は流動負債、$8,000 は非流動負債に分けて載せる。' }
        },
        {
          title: 'なぜ？ 3つの柱がいる理由',
          list: ['会計等式: 上と下の合計が一致するので、書き漏れや計算ミスに気づける', '企業実体: オーナーの私物が混ざると、お店が何を持ち、どれだけ稼いだかが分からなくなる', 'IFRS: 共通のルールで作るので、別のお店や前の年と比べられる'],
          after: '個人事業は、法律で IFRS を求められないことが多い。それでも ACCA の試験では、個人事業の SFP も IFRS の形で作る。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'オーナーの私用の支払いを、費用や負債にしない。引出し（drawings）として資本から引く。当座借越（bank overdraft）は流動負債。現金のマイナスとして書かず、別の口座の預金とも原則として相殺しない。借入金を全額非流動にしない。12か月以内に返す分は流動。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SFP は会計等式を縦に並べたもの。資産合計＝資本と負債の合計', 'お店の物だけ載せる（企業実体）。オーナーの私用は引出し', 'IFRS に従い、12か月を目安に流動と非流動に分ける']
        },
        {
          title: '英単語',
          words: [
            ['statement of financial position', '', '財政状態計算書（SFP）'],
            ['business entity concept', '', '企業実体の公準'],
            ['IFRS Accounting Standards', '', 'IFRS 会計基準'],
            ['current assets / current liabilities', '', '流動資産 / 流動負債（12か月以内）'],
            ['non-current assets / non-current liabilities', '', '非流動資産 / 非流動負債'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（流動負債）'],
            ['net assets', 'ネット・アセッツ', '純資産（資産−負債＝資本）']
          ]
        }
      ],
      quiz: [
        { q: 'オーナーが自宅の住宅ローン $500 を、お店の銀行口座から払った。お店ではどう記録する？', choices: ['Dr Drawings 500 / Cr Bank 500', 'Dr Loan interest 500 / Cr Bank 500', 'Dr Bank loan 500 / Cr Bank 500', '記録しない'], answer: 0, explain: '自宅のローンはオーナー個人のもの（企業実体）。お店のお金が私用に出ていったので引出し。お店の費用や負債の返済ではない。お店の口座からお金が出ているので、記録しないのも誤り。' },
        { q: 'Which concept means that the personal assets of a sole trader are NOT included in the statement of financial position of the business?', choices: ['Business entity concept', 'Going concern', 'Accruals basis', 'Materiality'], answer: 0, explain: '企業実体の公準（business entity concept）は、お店とオーナーを別の人として扱うルール。accruals basis（発生主義）は収益・費用をいつ計上するかのルールで、別の話。' },
        { q: 'A sole trader has a bank loan of $10,000 repayable in five equal annual instalments. The first instalment is due six months after the year end. How should the loan be presented at the year end?', choices: ['Current liabilities $2,000 and non-current liabilities $8,000', 'Non-current liabilities $10,000', 'Current liabilities $10,000', 'Current liabilities $8,000 and non-current liabilities $2,000'], answer: 0, explain: '1回分は $10,000 ÷ 5 ＝ $2,000。12か月以内に返す $2,000 が流動、残り $8,000 が非流動。全額を非流動にするのはよくある間違い。最後の選択肢は流動と非流動が逆。' },
        { q: 'お店の資産合計は $46,000、負債合計は $13,500。オーナーの自宅（$200,000）は含んでいない。SFP の資本はいくら？', type: 'number', answer: 32500, unit: '$', explain: '資本＝資産−負債＝$46,000 − $13,500 ＝ $32,500。自宅はオーナー個人の物なので、企業実体の公準により入れない。' },
        { q: 'IFRS 会計基準が SFP について決めていることとして正しいのは？', choices: ['資産と負債を、流動と非流動に分けて示す', 'オーナー個人の資産も合わせて示す', '資産は必ず売ったときの値段で示す', '引出しを費用として示す'], answer: 0, explain: '流動・非流動の区分は IFRS の表示ルール。個人の資産は企業実体の公準で除く。在庫は原価と NRV の低い方、設備は帳簿価額で、いつも売値ではない。引出しは費用ではなく資本の減少。' },
        { q: 'Which of the following is a current liability?', choices: ['Bank overdraft', 'Motor vehicle', 'Bank loan repayable in three years', 'Prepaid rent'], answer: 0, explain: '当座借越は、銀行がすぐに返済を求められる借入なので流動負債。車は非流動資産、3年後に返す借入金は非流動負債、前払家賃は流動資産。' }
      ]
    },
    {
      id: 'L96',
      no: 96,
      title: '損益計算書の段階利益',
      goal: '売上総利益・営業利益・財務・税金前の利益・税引前利益・当期利益・包括利益合計を、与えられた情報から順に計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G2(a)'],
      slides: [
        {
          title: '給料明細で考える',
          paras: ['給料明細には、いきなり手取りだけが書いてあるわけではない。額面30万円 → 社会保険料を引く → 税金を引く → 手取り23万円、と段階を追って書いてある。', '途中の数字があるから「どこで、どれだけ減ったか」が分かる。損益計算書（SPL）も同じ。売上から段階ごとに引いて、途中の利益を何度も出す。']
        },
        {
          title: '段階利益の地図',
          svg: `<svg viewBox="0 0 440 520" role="img" aria-label="売上収益から包括利益合計まで、段階ごとに足し引きして利益を出す流れ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">上から順に、足し引きするだけ</text><rect x="20" y="50" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="70" font-size="15" font-weight="600" fill="var(--ink)">売上収益</text><text x="36" y="88" font-size="12.5" fill="var(--quiet)">revenue</text><text x="220" y="112" text-anchor="middle" fill="var(--quiet)">− 売上原価</text><rect x="20" y="118" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="138" font-size="15" font-weight="600" fill="var(--ink)">売上総利益</text><text x="36" y="156" font-size="12.5" fill="var(--quiet)">gross profit</text><text x="220" y="180" text-anchor="middle" fill="var(--quiet)">＋ その他の収益 − 販売費 − 管理費</text><rect x="20" y="186" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="206" font-size="15" font-weight="600" fill="var(--ink)">営業利益</text><text x="36" y="224" font-size="12.5" fill="var(--quiet)">operating profit</text><text x="220" y="248" text-anchor="middle" fill="var(--quiet)">＋ 投資の収益（受取利息など）</text><rect x="20" y="254" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="274" font-size="15" font-weight="600" fill="var(--ink)">財務・税金前の利益</text><text x="36" y="292" font-size="12.5" fill="var(--quiet)">profit before financing and income taxes</text><text x="220" y="316" text-anchor="middle" fill="var(--quiet)">− 財務費用（借入金の利息）</text><rect x="20" y="322" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="342" font-size="15" font-weight="600" fill="var(--ink)">税引前利益</text><text x="36" y="360" font-size="12.5" fill="var(--quiet)">profit before income taxes (profit before tax)</text><text x="220" y="384" text-anchor="middle" fill="var(--quiet)">− 法人税費用（個人事業はなし）</text><rect x="20" y="390" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="410" font-size="15" font-weight="600" fill="var(--ink)">当期利益</text><text x="36" y="428" font-size="12.5" fill="var(--ink)">profit for the year</text><text x="220" y="452" text-anchor="middle" fill="var(--quiet)">＋ その他の包括利益（再評価益など）</text><rect x="20" y="458" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="478" font-size="15" font-weight="600" fill="var(--ink)">包括利益合計</text><text x="36" y="496" font-size="12.5" fill="var(--quiet)">total comprehensive income for the year</text></svg>`,
          caption: 'まずは上からの順番を覚える。名前は全部、試験に英語で出る。営業利益と財務・税金前の利益は、IFRS 18 で決められた小計。'
        },
        {
          title: 'それぞれの中身',
          table: {
            caption: '何を足し引きするか',
            head: ['項目', '中身'],
            rows: [
              ['売上収益（revenue）', '売上から売上戻りと、使われると見込む早期支払割引（L27）を引いた額'],
              ['売上原価（cost of sales）', '期首在庫＋仕入（−仕入戻し）＋仕入運賃−期末在庫'],
              ['その他の収益（other operating income）', '受けた割引、固定資産の売却益など'],
              ['販売費（distribution costs）', '販売運賃、販売員の給料、配送車の減価償却'],
              ['管理費（administrative expenses）', '事務所の家賃・電気代、事務員の給料、貸倒れ'],
              ['投資の収益（investment income）', '預金の受取利息など'],
              ['財務費用（finance costs）', '借入金や当座借越の利息']
            ]
          }
        },
        {
          title: 'なぜ？ 段階に分ける理由',
          list: ['売上総利益: 商品そのものでどれだけもうけたか。値付けと仕入のうまさが分かる', '営業利益: 本業全体の実力。借金の多さや税金に左右されない', '財務・税金前の利益: 本業に、預金や投資からの収益を足したもの', '当期利益: 利息と税金まで払った後の、最終的なもうけ'],
          after: '2つのお店の営業利益が同じでも、借金の多いお店は利息が大きく、当期利益は小さくなる。段階があると、その理由が見える。'
        },
        {
          title: '個人事業と会社の違い、OCI',
          paras: ['この地図は会社でも個人事業でも同じ。ただし個人事業には法人税がない。税金はオーナー個人が払うもので、お店の費用ではないから（企業実体）。個人事業では、税引前利益＝当期利益。', 'その他の包括利益（other comprehensive income、OCI）は、再評価益（L53）のように当期利益に入れない増加分。当期利益＋OCI＝包括利益合計。'],
          note: { kind: 'tip', text: '損益計算書と、OCI を示す計算書の2つに分けて出すこともできる。中身は同じ。' }
        },
        {
          title: '例題1: 売上総利益まで',
          example: {
            problem: 'ある会社の20X1年の情報: 売上 $125,000、売上戻り $5,000、期首在庫 $8,000、仕入 $74,000、仕入運賃 $1,000、期末在庫 $13,000。売上総利益は？',
            steps: ['売上収益＝売上−売上戻り＝125,000 − 5,000 ＝ 120,000', '売上原価＝期首在庫＋仕入＋仕入運賃−期末在庫＝8,000 ＋ 74,000 ＋ 1,000 − 13,000 ＝ 70,000', '売上総利益＝120,000 − 70,000 ＝ 50,000'],
            answer: '売上総利益（gross profit）は $50,000'
          }
        },
        {
          title: '例題2: 包括利益合計まで',
          example: {
            problem: '例題1の続き: 受けた割引 $1,000、販売費 $12,000、管理費 $18,000、預金の受取利息 $500、借入金の利息 $1,500、法人税費用 $5,000、土地の再評価益 $4,000。下の段階利益を全部求める。',
            steps: ['営業利益＝50,000 ＋ 1,000 − 12,000 − 18,000 ＝ 21,000', '財務・税金前の利益＝21,000 ＋ 500（受取利息）＝ 21,500', '税引前利益＝21,500 − 1,500（借入金の利息）＝ 20,000', '当期利益＝20,000 − 5,000（法人税）＝ 15,000', '包括利益合計＝15,000 ＋ 4,000（再評価益）＝ 19,000'],
            answer: '営業利益 $21,000、財務・税金前の利益 $21,500、税引前利益 $20,000、当期利益 $15,000、包括利益合計 $19,000'
          }
        },
        {
          title: '計算書の形にすると',
          paras: ['OCI まで1枚にまとめた計算書を、損益及びその他の包括利益計算書（SPLOCI）という。かっこ（ ）は引く数字の印。'],
          table: {
            caption: 'SPLOCI for the year ended 31 December 20X1',
            head: ['項目', '$'],
            rows: [
              ['Revenue', '120,000'],
              ['Cost of sales', '(70,000)'],
              ['Gross profit', '50,000'],
              ['Other operating income', '1,000'],
              ['Distribution costs', '(12,000)'],
              ['Administrative expenses', '(18,000)'],
              ['Operating profit', '21,000'],
              ['Investment income', '500'],
              ['Profit before financing and income taxes', '21,500'],
              ['Finance costs', '(1,500)'],
              ['Profit before tax', '20,000'],
              ['Income tax expense', '(5,000)'],
              ['Profit for the year', '15,000'],
              ['Other comprehensive income: revaluation gain', '4,000']
            ],
            total: ['Total comprehensive income for the year', '19,000']
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '借入金の利息（finance costs）を営業利益の前で引く。営業利益は利息を引く前の数字。受取利息を売上に入れる（投資の収益として営業利益の後で足す）。販売運賃を売上原価に入れる（販売費）。再評価益を当期利益に入れる（OCI なので当期利益の後）。引出しを費用にする（SPL には出てこない）。早期支払割引を費用にする（売上収益から引く）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上 → 売上総利益 → 営業利益 → 財務・税金前の利益 → 税引前利益 → 当期利益 → 包括利益合計', '営業利益は本業の実力。利息（財務費用）と税金は営業利益の後で引く', '個人事業には法人税がない。OCI は当期利益の後で足す']
        },
        {
          title: '英単語',
          words: [
            ['revenue', 'レベニュー', '売上収益'],
            ['gross profit', 'グロス・プロフィット', '売上総利益'],
            ['operating profit', 'オペレーティング・プロフィット', '営業利益'],
            ['profit before financing and income taxes', '', '財務・税金前の利益'],
            ['investment income', '', '投資の収益（受取利息など）'],
            ['finance costs', 'ファイナンス・コスツ', '財務費用（支払利息）'],
            ['profit before income taxes (profit before tax)', '', '税引前利益'],
            ['profit for the year', '', '当期利益'],
            ['total comprehensive income', '', '包括利益合計'],
            ['distribution costs / administrative expenses', '', '販売費 / 管理費']
          ]
        }
      ],
      quiz: [
        { q: '売上 $90,000、売上戻り $2,000、期首在庫 $6,000、仕入 $50,000、期末在庫 $9,000。売上総利益は？', type: 'number', answer: 41000, unit: '$', explain: '売上収益＝90,000 − 2,000 ＝ 88,000。売上原価＝6,000 ＋ 50,000 − 9,000 ＝ 47,000。売上総利益＝88,000 − 47,000 ＝ 41,000。売上戻りを引き忘れると 43,000、期首と期末を逆にすると 35,000 になる。' },
        { q: 'A company has revenue of $200,000, cost of sales of $130,000, distribution costs of $20,000, administrative expenses of $25,000 and finance costs of $3,000. What is its operating profit?', choices: ['$25,000', '$22,000', '$70,000', '$45,000'], answer: 0, explain: '200,000 − 130,000 − 20,000 − 25,000 ＝ 25,000。財務費用は営業利益の後で引くので入れない。$22,000 は財務費用まで引いた答え（税引前利益）、$70,000 は売上総利益、$45,000 は販売費を引き忘れた答え。' },
        { q: 'Which of the following is deducted AFTER operating profit in the statement of profit or loss?', choices: ['Interest on a bank loan', 'Depreciation of delivery vehicles', 'Irrecoverable debts', 'Carriage outwards'], answer: 0, explain: '借入金の利息は財務費用で、営業利益の後で引く。配送車の減価償却と販売運賃は販売費、貸倒れは管理費などで、どれも営業利益の前に引く。' },
        { q: '土地の再評価益 $6,000 は、SPLOCI のどこに出る？', choices: ['当期利益の後の、その他の包括利益（OCI）', '売上収益', '営業利益の前の、その他の収益', '財務費用の前の、投資の収益'], answer: 0, explain: '再評価益はまだ売っていない資産の値上がりなので、当期利益に入れず OCI に出す（L53）。包括利益合計には入る。' },
        { q: 'Profit before financing and income taxes is $48,000. Finance costs are $2,000 and income tax expense is $11,000. What is the profit for the year?', type: 'number', answer: 35000, unit: '$', explain: '48,000 − 2,000 ＝ 46,000（税引前利益）。46,000 − 11,000 ＝ 35,000（当期利益）。' },
        { q: 'During the year a company invoiced credit sales of $80,000. Sales returns were $3,000. Customers who owe $10,000 of these invoices are expected to take a 2% settlement discount for paying early. What is revenue for the year?', type: 'number', answer: 76800, unit: '$', explain: '売上収益は、受け取れると見込む金額で計上する（IFRS 15、L27）。80,000 − 3,000（売上戻り）− 200（10,000 × 2%、使われると見込む早期支払割引）＝ 76,800。割引を引き忘れると 77,000。割引を費用として営業利益の前で引くのも誤り。' }
      ]
    },
    {
      id: 'L97',
      no: 97,
      title: '試算表から個人事業の損益計算書を作る',
      goal: '試算表の残高を SPL 行きと SFP 行きに分け、期末在庫を使って個人事業の損益計算書を作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G2(b)'],
      slides: [
        {
          title: 'レシートを2つの箱に分ける',
          paras: ['月末にレシートと通帳を整理するとき、「今月の出費」と「まだ持っている物・残っている借金」は分けて考える。食費や電気代は今月の出費。買った冷蔵庫や残りのローンは、持ち物と借金。', '試算表（trial balance）から財務諸表を作るときも同じ。まず各残高を、1年間の動き（動画）を示す損益計算書（SPL）行きと、決算日の姿（写真）を示す財政状態計算書（SFP）行きに分ける。']
        },
        {
          title: '仕分けのルール',
          table: {
            caption: '試算表の残高の行き先',
            head: ['行き先', '試算表の残高'],
            rows: [
              ['SPL（動画）', '収益: 売上、受けた割引。費用: 仕入、運賃、給料、家賃、減価償却費、利息'],
              ['SPL の売上原価', '試算表の在庫（inventory）。これは期首の在庫'],
              ['SFP（写真）', '資産、負債、期首資本、引出し、減価償却累計額']
            ]
          },
          note: { kind: 'tip', text: '試算表の在庫は期首の残高。期末在庫は試算表の外の「追加情報」で与えられる。売上原価から引き、SFP の流動資産にも載せる。' }
        },
        {
          title: '例題の試算表',
          table: {
            caption: 'Takoyaki Shop　Trial balance at 31 December 20X5',
            head: ['勘定', 'Dr $', 'Cr $'],
            rows: [
              ['Revenue', '', '90,000'],
              ['Sales returns', '1,000', ''],
              ['Inventory at 1 January 20X5', '5,000', ''],
              ['Purchases', '40,000', ''],
              ['Carriage inwards', '1,000', ''],
              ['Carriage outwards', '800', ''],
              ['Discounts received', '', '500'],
              ['Wages', '14,000', ''],
              ['Rent', '6,000', ''],
              ['Electricity', '2,200', ''],
              ['Depreciation', '2,000', ''],
              ['Loan interest', '600', ''],
              ['Equipment at cost', '30,000', ''],
              ['Accumulated depreciation', '', '8,000'],
              ['Trade receivables', '3,000', ''],
              ['Bank', '8,400', ''],
              ['Trade payables', '', '3,500'],
              ['Bank loan', '', '6,000'],
              ['Capital at 1 January 20X5', '', '15,000'],
              ['Drawings', '9,000', '']
            ],
            total: ['合計', '123,000', '123,000']
          },
          after: '追加情報: 20X5年12月31日の期末在庫は $7,000。今年の減価償却費は試算表に記録済み。'
        },
        {
          title: '作る手順',
          list: ['① 試算表の残高のうち、SPL 行きのもの（上の12行）に印を付ける', '② 売上原価を別に計算する: 期首在庫＋仕入＋仕入運賃−期末在庫', '③ 売上収益 → 売上総利益 → 営業利益 → 当期利益の順に枠を埋める', '④ 使わなかった残高（資産・負債・資本・引出し）は SFP へ（次のレッスン）']
        },
        {
          title: '例題: 損益計算書を作る',
          example: {
            problem: '前の試算表と期末在庫 $7,000 から、Takoyaki Shop の20X5年の損益計算書を作る。',
            steps: ['売上収益＝90,000 − 1,000（売上戻り）＝ 89,000', '売上原価＝5,000 ＋ 40,000 ＋ 1,000（仕入運賃）− 7,000 ＝ 39,000', '売上総利益＝89,000 − 39,000 ＝ 50,000', 'その他の収益: 受けた割引 500 を足して 50,500', '費用の合計＝販売運賃 800 ＋ 給料 14,000 ＋ 家賃 6,000 ＋ 電気代 2,200 ＋ 減価償却費 2,000 ＝ 25,000', '営業利益＝50,500 − 25,000 ＝ 25,500', '財務費用（借入金の利息）600 を引いて、当期利益＝24,900'],
            answer: '当期利益（profit for the year）は $24,900'
          }
        },
        {
          title: 'できあがった損益計算書',
          table: {
            caption: 'Takoyaki Shop　SPL for the year ended 31 December 20X5',
            head: ['項目', '$', '$'],
            rows: [
              ['Revenue (90,000 − 1,000)', '', '89,000'],
              ['Opening inventory', '5,000', ''],
              ['Purchases', '40,000', ''],
              ['Carriage inwards', '1,000', ''],
              ['Closing inventory', '(7,000)', ''],
              ['Cost of sales', '', '(39,000)'],
              ['Gross profit', '', '50,000'],
              ['Discounts received', '', '500'],
              ['Carriage outwards', '800', ''],
              ['Wages', '14,000', ''],
              ['Rent', '6,000', ''],
              ['Electricity', '2,200', ''],
              ['Depreciation', '2,000', ''],
              ['Total expenses', '', '(25,000)'],
              ['Operating profit', '', '25,500'],
              ['Finance costs (loan interest)', '', '(600)']
            ],
            total: ['Profit for the year', '', '24,900']
          },
          note: { kind: 'tip', text: '個人事業の SPL は、費用を1行ずつ並べてよい。試験の枠に販売費・管理費の行があれば、L96 の分け方で振り分ける（販売運賃は販売費、家賃・電気代は管理費など）。' }
        },
        {
          title: '個人事業だけの注意点',
          list: ['オーナーに給料はない。オーナーが受け取ったお金は引出し（drawings）。SPL の費用にしない', 'オーナーが店の商品を家に持ち帰ったら、原価で Dr Drawings / Cr Purchases（仕入を減らす）', 'オーナー個人の税金や自宅の電気代をお店が払ったら、引出し', '法人税はない。営業利益から財務費用を引いた額が当期利益', '従業員の給料はお店の費用（wages）']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '試算表の在庫を期末在庫として使う（試算表の在庫は期首）。引出しを費用に入れる。売上戻りを費用に入れる（売上から引く）。減価償却累計額を費用に入れる（SPL に入るのは今年の減価償却費だけ）。借入金そのものを費用にする（費用は利息だけ）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['試算表の残高を、SPL 行きと SFP 行きに分ける', '試算表の在庫は期首。期末在庫は追加情報から', '引出し・借入金の元本・減価償却累計額は SPL に入れない']
        },
        {
          title: '英単語',
          words: [
            ['trial balance', 'トライアル・バランス', '試算表'],
            ['opening inventory / closing inventory', '', '期首在庫 / 期末在庫'],
            ['sales returns (returns inwards)', 'セールス・リターンズ', '売上戻り'],
            ['purchase returns (returns outwards)', '', '仕入戻し（仕入から引く）'],
            ['carriage inwards / carriage outwards', '', '仕入運賃 / 販売運賃'],
            ['wages', 'ウェイジズ', '給料（従業員）'],
            ['drawings', 'ドローイングズ', '引出し'],
            ['for the year ended 31 December 20X5', '', '20X5年12月31日に終わる1年間の']
          ]
        }
      ],
      quiz: [
        { q: '試算表の借方に Inventory $5,000 とある。これは？', choices: ['期首在庫。売上原価に足す', '期末在庫。売上原価から引く', '今年買った商品の合計', 'SFP にだけ載せる'], answer: 0, explain: '試算表の在庫は、前の年の期末＝今年の期首の残高。期末在庫は追加情報で与えられる。今年買った商品は purchases。' },
        { q: 'The trial balance of a sole trader includes: sales $60,000, sales returns $1,500, opening inventory $4,000, purchases $35,000, carriage inwards $500, carriage outwards $700. Closing inventory is $5,500. What is the gross profit?', type: 'number', answer: 24500, unit: '$', explain: '売上収益＝60,000 − 1,500 ＝ 58,500。売上原価＝4,000 ＋ 35,000 ＋ 500 − 5,500 ＝ 34,000。売上総利益＝24,500。販売運賃は売上原価に入れない。入れてしまうと 23,800 になる。' },
        { q: 'A sole trader took goods costing $800 from the business for personal use. No entry has been made. What journal entry is required?', choices: ['Dr Drawings $800, Cr Purchases $800', 'Dr Purchases $800, Cr Drawings $800', 'Dr Drawings $800, Cr Revenue $800', 'Dr Wages $800, Cr Purchases $800'], answer: 0, explain: 'オーナーの私用なので引出しを増やす（借方）。商品は売れていないので売上ではなく、仕入を原価で減らす（貸方）。2つ目は逆。オーナーへの給料（wages）にはしない。' },
        { q: 'オーナーが毎月 $1,000 を「自分の給料」としてお店から受け取った（年 $12,000）。正しい扱いは？', choices: ['引出し。SPL には入れない', '給料（wages）として SPL の費用にする', '財務費用にする', '売上から引く'], answer: 0, explain: '個人事業のオーナーは、お店に雇われた人ではない。受け取ったお金は引出しで、資本を減らす。費用にすると利益が小さくなりすぎる。' },
        { q: 'Which of the following trial balance items would NOT appear in the statement of profit or loss?', choices: ['Accumulated depreciation', 'Depreciation expense', 'Discounts received', 'Carriage outwards'], answer: 0, explain: '減価償却累計額は SFP で設備の原価から引く数字。SPL に入るのは今年の減価償却費だけ。受けた割引は収益、販売運賃は費用なので SPL に入る。' },
        { q: '例題の Takoyaki Shop で、引出し $9,000 を誤って費用に入れたら、当期利益はいくらになる？', type: 'number', answer: 15900, unit: '$', explain: '正しい当期利益 24,900 から、余計な費用 9,000 を引いて 15,900。引出しは費用ではないので、利益が $9,000 小さく出てしまう。' }
      ]
    },
    {
      id: 'L98',
      no: 98,
      title: '試算表から個人事業の SFP を作る',
      goal: '試算表の残り、期末在庫、当期利益から、個人事業の財政状態計算書を作り、合計の一致を確かめられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G1(b)'],
      slides: [
        {
          title: '12月31日の写真を撮る',
          paras: ['前のレッスンで、動画（今年の収支）を作った。今度は12月31日の写真を撮る。家計なら、貯金・車・残りのローン、そして「自分の取り分」を書き出す作業。', '試算表の残り（資産・負債・資本・引出し）に、期末在庫と当期利益を組み合わせて、財政状態計算書（SFP）を作る。']
        },
        {
          title: '個人事業の SFP の形',
          table: {
            caption: '上から順に',
            head: ['区分', '中身'],
            rows: [
              ['非流動資産', '有形固定資産（原価−減価償却累計額＝帳簿価額）、無形資産'],
              ['流動資産', '在庫、売掛金（貸倒引当金を引く）、前払費用、現金・預金'],
              ['資本', '期首資本＋資本の拠出＋当期利益−引出し＝期末資本'],
              ['非流動負債', '12か月より後に返す借入金'],
              ['流動負債', '買掛金、未払費用、当座借越、12か月以内に返す借入金']
            ]
          },
          after: '資産合計と、資本と負債の合計が一致する。'
        },
        {
          title: '資本の部分が個人事業の特徴',
          formula: 'closing capital ＝ opening capital ＋ capital introduced ＋ profit − drawings',
          paras: ['会社なら株式資本や利益剰余金を並べる（後の部）。個人事業は資本が1本で、1年の動きをそのまま SFP の中で見せる。', '引出しは費用ではないので、SPL には出てこない。ここ、資本の中で引く。'],
          note: { kind: 'tip', text: '期末調整の前の試算表では、資本は期首の残高（前期繰越、b/f）。減価償却累計額と貸倒引当金も、今年の分が未記録なら b/f。調整を加えてから SFP に載る（L100）。この例の累計額は今年の償却費を記録済み。' }
        },
        {
          title: '例題: SFP を作る',
          example: {
            problem: 'L97 の Takoyaki Shop（試算表、期末在庫 $7,000、当期利益 $24,900）から、20X5年12月31日の SFP を作る。借入金 $6,000 のうち $1,000 は20X6年6月に返す。',
            steps: ['非流動資産: 設備 30,000 − 減価償却累計額 8,000 ＝ 22,000', '流動資産: 在庫 7,000（期末）＋ 売掛金 3,000 ＋ 預金 8,400 ＝ 18,400', '資産合計＝22,000 ＋ 18,400 ＝ 40,400', '資本: 15,000 ＋ 24,900 − 9,000（引出し）＝ 30,900', '非流動負債: 借入金のうち12か月より後の分＝6,000 − 1,000 ＝ 5,000', '流動負債: 買掛金 3,500 ＋ 借入金の返済分 1,000 ＝ 4,500', '資本と負債の合計＝30,900 ＋ 5,000 ＋ 4,500 ＝ 40,400。資産合計と一致'],
            answer: '資産合計も、資本と負債の合計も $40,400'
          }
        },
        {
          title: 'できあがった SFP',
          table: {
            caption: 'Takoyaki Shop　SFP at 31 December 20X5',
            head: ['項目', '$', '$'],
            rows: [
              ['Non-current assets', '', ''],
              ['Equipment (30,000 − 8,000)', '', '22,000'],
              ['Current assets', '', ''],
              ['Inventory', '7,000', ''],
              ['Trade receivables', '3,000', ''],
              ['Cash at bank', '8,400', ''],
              ['Total current assets', '', '18,400'],
              ['Total assets', '', '40,400'],
              ['Capital at 1 January 20X5', '', '15,000'],
              ['Profit for the year', '', '24,900'],
              ['Less drawings', '', '(9,000)'],
              ['Capital at 31 December 20X5', '', '30,900'],
              ['Non-current liabilities: bank loan', '', '5,000'],
              ['Current liabilities', '', ''],
              ['Trade payables', '3,500', ''],
              ['Bank loan (current portion)', '1,000', ''],
              ['Total current liabilities', '', '4,500']
            ],
            total: ['Total capital and liabilities', '', '40,400']
          }
        },
        {
          title: '期末調整があるときの載せ方',
          table: {
            caption: 'これまでの部で学んだ調整の、SFP での場所',
            head: ['調整', 'SFP での場所'],
            rows: [
              ['期末在庫', '流動資産'],
              ['減価償却', '累計額に足し、帳簿価額を減らす'],
              ['未払費用（accruals）', '流動負債'],
              ['前払費用（prepayments）', '流動資産'],
              ['貸倒引当金', '売掛金から引いた純額で示す'],
              ['未払の利息', '流動負債（未払費用）']
            ]
          },
          note: { kind: 'tip', text: '試験では SFP の一部（抜粋、extract）だけを聞かれることも多い。たとえば「流動資産の合計は？」「期末資本は？」。全部作らなくても、その部分だけ正しく出せればよい。' }
        },
        {
          title: 'なぜ？ 合計が必ず一致する理由',
          paras: ['試算表は借方と貸方が一致していた。SPL 行きの残高を集めて1本の「当期利益」にまとめ、資本に足しただけなので、残りの資産・負債と資本はやはり一致する。', '期末在庫は、売上原価を減らす（利益を増やす）と同時に、資産として載る。同じ $7,000 が両方に入るので、一致は崩れない。合わないときは、どこかで片方にしか入れていない数字がある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '当座借越（bank overdraft）を流動資産のマイナスとして書く（流動負債）。貸倒引当金を負債に書く（売掛金から引く）。期首在庫を SFP に載せる（載せるのは期末在庫）。引出しを流動負債に書く（資本から引く）。設備を原価のまま載せる（累計額を引いた帳簿価額）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['上は非流動資産 → 流動資産、下は資本 → 非流動負債 → 流動負債', '期末資本＝期首資本＋資本の拠出＋当期利益−引出し', '合計が合わなければ、片方にしか入れていない数字を探す']
        },
        {
          title: '英単語',
          words: [
            ['total assets', 'トータル・アセッツ', '資産合計'],
            ['capital at 1 January', '', '期首資本'],
            ['capital introduced', '', '資本の拠出（元入れ）'],
            ['less drawings', '', '引出しを引く'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額'],
            ['current portion', 'カレント・ポーション', '12か月以内に返す部分'],
            ['total capital and liabilities', '', '資本と負債の合計'],
            ['extract', 'エクストラクト', '抜粋（計算書の一部）']
          ]
        }
      ],
      quiz: [
        { q: 'At 1 January 20X4 a sole trader\'s capital was $25,000. During the year she introduced additional capital of $5,000, made a profit of $18,000 and took drawings of $14,000. What was her capital at 31 December 20X4?', type: 'number', answer: 34000, unit: '$', explain: '25,000 ＋ 5,000 ＋ 18,000 − 14,000 ＝ 34,000。資本の拠出を足し忘れると 29,000、引出しを足してしまうと 62,000 になる。' },
        { q: 'Trade receivables are $12,000 and the allowance for receivables is $600. At what amount are trade receivables shown under current assets?', choices: ['$11,400', '$12,000', '$12,600', '$600'], answer: 0, explain: '貸倒引当金は売掛金から引いて、純額 $11,400 で示す。引当金を負債や別の行に出すのは誤り。$12,600 は引くところを足した答え。' },
        { q: '当座借越 $2,300 は SFP のどこに載せる？', choices: ['流動負債', '流動資産のマイナス', '非流動負債', '資本から引く'], answer: 0, explain: '当座借越は銀行からの借入で、すぐ返済を求められうるので流動負債。現金のマイナスとして資産側に書かない。' },
        { q: '設備の原価は $50,000、減価償却累計額は $18,000（今年の分 $5,000 を含む）。SFP の帳簿価額は？', type: 'number', answer: 32000, unit: '$', explain: '帳簿価額＝原価−減価償却累計額＝50,000 − 18,000 ＝ 32,000。累計額にはすでに今年の分が入っているので、5,000 をもう一度引くと 27,000 になり誤り。' },
        { q: 'Which of the following would appear in the capital section of a sole trader\'s statement of financial position?', choices: ['Drawings', 'Bank loan', 'Accruals', 'Depreciation expense'], answer: 0, explain: '引出しは資本から引く形で、資本の部分に出る。借入金と未払費用は負債。減価償却費は SPL の費用。' },
        { q: 'SFP を作ったら、資産合計が資本と負債の合計より $500 多かった。考えられる原因は？', choices: ['期末在庫 $500 を流動資産に入れたが、売上原価から引き忘れた', '借入金を、流動と非流動に分けて載せた', '引出し $500 を資本から引いた', '預金 $500 を流動資産に入れた'], answer: 0, explain: '期末在庫を売上原価から引き忘れると、利益（資本）が $500 小さくなる。資産側には $500 入っているので、資産が $500 多くなる。片方にしか入れていない数字が原因。ほかの選択肢は正しい処理。' }
      ]
    },
    {
      id: 'L99',
      no: 99,
      title: '2つの計算書のつながり',
      goal: '損益計算書と財政状態計算書が、当期利益と期末調整を通してつながっていることを説明し、誤りが両方に与える影響を言えるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['G2(e)'],
      slides: [
        {
          title: '体重計と食事の記録',
          paras: ['1月1日に体重を量ったら60kg、12月31日には63kg。2回の体重計（写真）で3kg増えたことは分かるが、理由は分からない。', '1年分の食事と運動の記録（動画）があれば「お菓子が多かった」と理由が分かる。逆に、記録だけでは今の体重は分からない。2つは必ずつながっている。']
        },
        {
          title: '利益は資本を通って写真に入る',
          svg: `<svg viewBox="0 0 440 404" role="img" aria-label="期首の資本に当期利益を足し、引出しを引くと期末の資本になる流れ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">動画が2枚の写真をつなぐ</text><rect x="20" y="50" width="400" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="84" font-size="15" fill="var(--ink)">1月1日の写真（期首の SFP）</text><text x="404" y="84" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">資本 $15,000</text><path d="M220 110V130" stroke="var(--edge)" stroke-width="1.5"/><path d="M214 124L220 132L226 124" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="134" width="400" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="168" font-size="15" fill="var(--ink)">1年間の動画（SPL）の当期利益</text><text x="404" y="168" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">＋$24,900</text><path d="M220 194V214" stroke="var(--edge)" stroke-width="1.5"/><path d="M214 208L220 216L226 208" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="218" width="400" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="252" font-size="15" fill="var(--ink)">オーナーの引出し（SPL を通らない）</text><text x="404" y="252" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">−$9,000</text><path d="M220 278V298" stroke="var(--edge)" stroke-width="1.5"/><path d="M214 292L220 300L226 292" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="302" width="400" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="336" font-size="15" fill="var(--ink)">12月31日の写真（期末の SFP）</text><text x="404" y="336" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">資本 $30,900</text><text x="220" y="388" text-anchor="middle" fill="var(--quiet)">利益は資本を通って、次の写真に入る</text></svg>`,
          caption: 'L97・L98 の Takoyaki Shop の数字。15,000 ＋ 24,900 − 9,000 ＝ 30,900。'
        },
        {
          title: '利益＝純資産の増え方',
          paras: ['資本は純資産（資産−負債）と同じ金額。だから、オーナーとのやりとり（資本の拠出と引出し）を除けば、1年の利益は純資産の増えた額と同じになる。'],
          formula: 'profit ＝ closing net assets − opening net assets − capital introduced ＋ drawings',
          after: '引出しは純資産を減らしたが、利益とは関係ないので足し戻す。資本の拠出は純資産を増やしたが、もうけではないので引く。この式は、次の部の不完全記録でそのまま使う。'
        },
        {
          title: '期末調整は両方に効く',
          table: {
            caption: '1つの調整が、2つの計算書を同時に動かす',
            head: ['調整', 'SPL（動画）', 'SFP（写真）'],
            rows: [
              ['期末在庫', '売上原価を減らす', '流動資産'],
              ['減価償却', '費用', '累計額が増え、帳簿価額が減る'],
              ['未払費用', '費用が増える', '流動負債'],
              ['前払費用', '費用が減る', '流動資産'],
              ['貸倒引当金の増加', '費用', '売掛金の純額が減る'],
              ['再評価益', 'OCI（包括利益）', '資産が増え、資本側も増える（会社は再評価剰余金）']
            ]
          },
          after: '仕訳は借方と貸方で1組。片方が SPL の勘定なら、もう片方は SFP の勘定になることが多い。だから1つの調整で両方が動く。'
        },
        {
          title: 'なぜ？ つながっている理由',
          paras: ['損益計算書は、2枚の写真の間に起きたことの説明書。収益は資本を増やし、費用は資本を減らす（L13 の借方・貸方のルール）。1年分の収益と費用を1本にまとめたのが当期利益で、それが資本に入る。', 'だから SPL の数字を間違えると、同じだけ SFP の資本も間違える。']
        },
        {
          title: '例: 誤りは両方に出る',
          example: {
            problem: '期末在庫を数え間違えて、本当より $2,000 多く記録した。今年と来年の財務諸表はどうなる？',
            steps: ['期末在庫が $2,000 多い → 売上原価が $2,000 少ない', '→ 当期利益が $2,000 多い。だから資本も $2,000 多い', '→ SFP の在庫（流動資産）も $2,000 多い', '資産も資本も $2,000 ずつ多いので、SFP の合計は一致したまま。合計を見ても気づけない', '来年: この在庫は来年の期首在庫になる。来年の売上原価が $2,000 多くなり、来年の利益は $2,000 少なくなる'],
            answer: '今年は利益・資産・資本が $2,000 過大。来年の利益は $2,000 過小になり、2年合計では元に戻る'
          }
        },
        {
          title: 'SPL を通らない資本の動き',
          paras: ['資本の動きのうち、オーナーとのやりとりは SPL を通らない。'],
          list: ['資本の拠出（capital introduced）: お店のもうけではない。SPL の収益にしない', '引出し（drawings）: お店の費用ではない。SPL の費用にしない'],
          after: '会社の場合は、株式の発行や配当が同じ扱いになる。持分変動計算書（SOCE、後の部）でまとめて示す。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '当期利益と、現金の増えた額を同じだと思う。掛け売上、減価償却、在庫の増減などがあるので、ふつうは一致しない。L02 の「もうけが出たら現金が増える」例は、最初の説明のための単純化だった（くわしくはキャッシュフローの部）。資本の拠出や引出しを、利益の計算に入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SPL の当期利益が、SFP の資本に入る', '期末調整は、1つで両方の計算書を動かす', '利益＝純資産の増加−資本の拠出＋引出し']
        },
        {
          title: '英単語',
          words: [
            ['interrelationship', 'インターリレーションシップ', '相互関係'],
            ['net assets', 'ネット・アセッツ', '純資産（資産−負債）'],
            ['opening capital / closing capital', '', '期首資本 / 期末資本'],
            ['overstated / understated', 'オーバーステイテッド / アンダーステイテッド', '過大 / 過小'],
            ['revaluation surplus', '', '再評価剰余金']
          ]
        }
      ],
      quiz: [
        { q: 'A sole trader\'s net assets were $40,000 at the start of the year and $52,000 at the end of the year. During the year he introduced capital of $3,000 and took drawings of $8,000. What was the profit for the year?', type: 'number', answer: 17000, unit: '$', explain: '純資産の増加 52,000 − 40,000 ＝ 12,000。資本の拠出 3,000 はもうけではないので引き、引出し 8,000 は足し戻す: 12,000 − 3,000 ＋ 8,000 ＝ 17,000。符号を逆にすると 7,000 になる。' },
        { q: 'Closing inventory was overstated by $1,500. What is the effect on the financial statements for the year?', choices: ['Profit and net assets are both overstated by $1,500', 'Profit is overstated and net assets are understated by $1,500', 'Profit is understated and net assets are overstated by $1,500', 'Net assets are overstated by $1,500 but profit is not affected'], answer: 0, explain: '期末在庫が多い → 売上原価が少ない → 利益が多い。同時に資産の在庫も多い。利益と純資産は同じ方向に同じ額だけずれる。' },
        { q: '12月分の電気代 $300 の未払費用を計上し忘れた。影響は？', choices: ['利益が $300 過大、流動負債が $300 過小', '利益が $300 過小、流動負債が $300 過大', '利益は変わらず、流動負債だけ $300 過小', '利益が $300 過大、流動資産が $300 過大'], answer: 0, explain: '費用が $300 少ないので利益は過大。未払費用（流動負債）も $300 足りない。資本が $300 多く、負債が $300 少ないので、SFP の合計は一致したまま。' },
        { q: 'SPL と SFP をつなぐ数字は？', choices: ['当期利益（資本に入る）', '売上収益', '期首在庫', '借入金'], answer: 0, explain: '当期利益は SPL の最後の数字で、SFP の資本に足される。売上収益と期首在庫は SPL の中だけ、借入金は SFP の中だけの数字。' },
        { q: 'オーナーが $5,000 を追加でお店に入れた。SPL への影響は？', choices: ['ない。資本の拠出は SFP の資本に直接入る', '売上収益が $5,000 増える', 'その他の収益が $5,000 増える', '費用が $5,000 減る'], answer: 0, explain: '資本の拠出はオーナーとのやりとりで、お店のもうけではない。SPL を通らず、SFP の資本に直接足す。' },
        { q: 'Which of the following statements is true?', choices: ['Profit for the year increases capital in the statement of financial position', 'Drawings are an expense in the statement of profit or loss', 'Profit for the year is always equal to the increase in cash', 'Capital introduced is income in the statement of profit or loss'], answer: 0, explain: '当期利益は資本を増やす。引出しは費用ではない。利益と現金の増加は、掛け取引や減価償却があるので一致しないことが多い。資本の拠出は収益ではない。' }
      ]
    },
    {
      id: 'L100',
      no: 100,
      title: '期末調整込みの総合演習（Section B 形式）',
      goal: '試算表と追加情報から期末調整の仕訳を書き、個人事業の損益計算書と財政状態計算書を通しで作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G1(b)', 'G2(b)', 'K1:E1(b)'],
      slides: [
        {
          title: '年末の家計の締め',
          paras: ['年末に1年の家計をまとめる。通帳の数字だけでは足りない。12月分の電気代は、まだ請求が来ていない。家賃は来年3月分まで先に払った。友だちに貸した1万円は、もう返ってきそうにない。', 'こうした「通帳に出ていないズレ」を直してから成績表を作る。これが期末調整（year-end adjustments）。Section B の作成問題は、この作業そのもの。']
        },
        {
          title: 'Section B の作成問題',
          paras: ['Section B は15点の問題が2問。1問は連結、もう1問は財務諸表の作成（個人事業か会社）。試算表と追加情報が出て、SPL や SFP の枠（pro-forma）に数字を入れたり、選択肢から項目を選んだりする。'],
          list: ['① 追加情報を1つずつ読み、調整仕訳を書く（どの2つの勘定が動くか）', '② 試算表の数字の横に、調整の金額を書き込む', '③ SPL を作り、当期利益を出す', '④ SFP を作り、合計の一致を確かめる']
        },
        {
          title: '試算表（Green Café）',
          table: {
            caption: 'Green Café　Trial balance at 31 December 20X6',
            head: ['勘定', 'Dr $', 'Cr $'],
            rows: [
              ['Revenue', '', '100,000'],
              ['Inventory at 1 January 20X6', '6,000', ''],
              ['Purchases', '50,000', ''],
              ['Wages', '18,000', ''],
              ['Rent', '9,000', ''],
              ['Electricity', '3,000', ''],
              ['Loan interest', '300', ''],
              ['Equipment at cost', '40,000', ''],
              ['Accumulated depreciation at 1 January 20X6', '', '10,000'],
              ['Trade receivables', '5,000', ''],
              ['Allowance for receivables at 1 January 20X6', '', '200'],
              ['Bank', '2,900', ''],
              ['Trade payables', '', '4,000'],
              ['Bank loan (5%, repayable 20X9)', '', '12,000'],
              ['Capital at 1 January 20X6', '', '20,000'],
              ['Drawings', '12,000', '']
            ],
            total: ['合計', '146,200', '146,200']
          }
        },
        {
          title: '追加情報',
          list: ['① 期末在庫は $8,000', '② 設備は原価の20%で定額法の減価償却。今年分はまだ記録していない', '③ 12月分の電気代 $600 の請求書が、まだ届いていない', '④ 家賃 $9,000 は、20X6年1月1日〜20X7年3月31日の15か月分', '⑤ 売掛金のうち $400 は回収できないので償却する。貸倒引当金は、残りの売掛金の5%にする', '⑥ 借入金は20X6年1月1日に借りた。利息は年5%で、試算表には半年分しか入っていない', '⑦ オーナーが原価 $500 の商品を家に持ち帰ったが、記録していない']
        },
        {
          title: '調整の前に SFP へ写せる数字は？',
          paras: ['年初の通帳の残高は、1年の出入りを足し引きして、はじめて年末の残高になる。試算表の期首の残高（前期繰越、b/f）も同じ。期末に動くなら、まだ SFP の数字ではない。'],
          formula: 'そのまま SFP に使える ＝ 期末調整で動かない残高だけ',
          table: {
            caption: 'Green Café の試算表で確かめる',
            head: ['残高', 'そのまま？'],
            rows: [
              ['Equipment at cost 40,000', 'はい'],
              ['Bank 2,900、Trade payables 4,000', 'はい（調整なし）'],
              ['Bank loan 12,000', 'はい（20X9年返済で非流動）'],
              ['Inventory 6,000', 'いいえ（期首。①の期末 8,000 に替わる）'],
              ['Accumulated depreciation 10,000', 'いいえ（b/f。②の 8,000 を足す）'],
              ['Allowance for receivables 200', 'いいえ（b/f。⑤で新しい額にする）'],
              ['Trade receivables 5,000', 'いいえ（⑤の償却 400 を引く）'],
              ['Capital 20,000', 'いいえ（期首。＋利益−引出し）']
            ]
          }
        },
        {
          title: '手順1: 調整仕訳を書く',
          example: {
            problem: '追加情報①〜⑦の期末調整の仕訳を書く。',
            steps: ['① 期末在庫: Dr Inventory 8,000 / Cr Cost of sales 8,000（SFP の資産になり、売上原価を減らす）', '② 減価償却: 40,000 × 20% ＝ 8,000。Dr Depreciation expense 8,000 / Cr Accumulated depreciation 8,000', '③ 電気代の未払: Dr Electricity 600 / Cr Accruals 600', '④ 家賃: 1か月 9,000 ÷ 15 ＝ 600。来年の3か月分 1,800 が前払。Dr Prepayments 1,800 / Cr Rent 1,800', '⑤ 貸倒れ: Dr Irrecoverable debts 400 / Cr Trade receivables 400。引当金は (5,000 − 400) × 5% ＝ 230 なので、200 から 30 増やす: Dr Irrecoverable debts 30 / Cr Allowance for receivables 30', '⑥ 利息: 12,000 × 5% ＝ 600。試算表は 300 なので、残り 300 を未払にする: Dr Loan interest 300 / Cr Accruals 300', '⑦ 持ち帰り: Dr Drawings 500 / Cr Purchases 500'],
            answer: '7つの仕訳で、SPL と SFP の両方の数字が決まる'
          }
        },
        {
          title: '手順2: 損益計算書',
          table: {
            caption: 'Green Café　SPL for the year ended 31 December 20X6',
            head: ['項目', '$', '$'],
            rows: [
              ['Revenue', '', '100,000'],
              ['Opening inventory', '6,000', ''],
              ['Purchases (50,000 − 500)', '49,500', ''],
              ['Closing inventory', '(8,000)', ''],
              ['Cost of sales', '', '(47,500)'],
              ['Gross profit', '', '52,500'],
              ['Wages', '18,000', ''],
              ['Rent (9,000 − 1,800)', '7,200', ''],
              ['Electricity (3,000 + 600)', '3,600', ''],
              ['Depreciation', '8,000', ''],
              ['Irrecoverable debts (400 + 30)', '430', ''],
              ['Total expenses', '', '(37,230)'],
              ['Operating profit', '', '15,270'],
              ['Finance costs (300 + 300)', '', '(600)']
            ],
            total: ['Profit for the year', '', '14,670']
          }
        },
        {
          title: '手順3: 財政状態計算書',
          table: {
            caption: 'Green Café　SFP at 31 December 20X6',
            head: ['項目', '$', '$'],
            rows: [
              ['Equipment (40,000 − 18,000)', '', '22,000'],
              ['Inventory', '8,000', ''],
              ['Trade receivables (4,600 − 230)', '4,370', ''],
              ['Prepayments', '1,800', ''],
              ['Bank', '2,900', ''],
              ['Total current assets', '', '17,070'],
              ['Total assets', '', '39,070'],
              ['Capital at 1 January 20X6', '', '20,000'],
              ['Profit for the year', '', '14,670'],
              ['Less drawings (12,000 + 500)', '', '(12,500)'],
              ['Capital at 31 December 20X6', '', '22,170'],
              ['Non-current liabilities: bank loan', '', '12,000'],
              ['Trade payables', '4,000', ''],
              ['Accruals (600 + 300)', '900', ''],
              ['Total current liabilities', '', '4,900']
            ],
            total: ['Total capital and liabilities', '', '39,070']
          },
          after: '減価償却累計額は 10,000 ＋ 8,000 ＝ 18,000。借入金は20X9年返済なので全額が非流動。合計 39,070 で一致。'
        },
        {
          title: 'なぜ仕訳から？ よくある間違い',
          paras: ['調整は1つで SPL と SFP の両方を動かす（L99）。頭の中だけで直すと片方を忘れるが、仕訳を書けば2か所が必ずそろう。K1（2027年7月から）では、調整仕訳を作る力そのものが問われる。'],
          note: { kind: 'warn', text: '前払いの家賃まで全部費用にする（今年の12か月分だけ）。利息の未払を忘れる。償却前の売掛金 5,000 に5%をかける（償却後の 4,600 にかける）。引当金の残高 230 を全部費用にする（費用は増えた 30 だけ）。持ち帰った商品を引出しに足し忘れる。期首（b/f）の残高を SFP にそのまま写す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['追加情報1つにつき仕訳1つ。必ず2つの勘定が動く', '期間で分ける調整は、先に「1か月いくら」を出す', '最後に、資産合計と資本と負債の合計の一致を確かめる']
        },
        {
          title: '英単語',
          words: [
            ['year-end adjustments', '', '期末調整'],
            ['pro-forma', 'プロフォーマ', '解答用の枠（ひな形）'],
            ['accruals', 'アクルーアルズ', '未払費用'],
            ['prepayments', 'プリペイメンツ', '前払費用'],
            ['irrecoverable debts', 'イリカバラブル・デッツ', '貸倒れ（費用）'],
            ['allowance for receivables', '', '貸倒引当金'],
            ['goods taken for own use', '', 'オーナーが私用に持ち出した商品'],
            ['brought forward (b/f)', 'ブロート・フォワード', '前期繰越（期首の残高）']
          ]
        }
      ],
      quiz: [
        { q: 'A sole trader paid rent of $6,000 during the year ended 31 December 20X7. The payment covered the 15 months to 31 March 20X8. What is the rent expense for the year ended 31 December 20X7?', type: 'number', answer: 4800, unit: '$', explain: '1か月＝6,000 ÷ 15 ＝ 400。今年は12か月分なので 400 × 12 ＝ 4,800。残り3か月分 1,200 は前払費用（流動資産）。' },
        { q: 'Trade receivables at the year end are $8,000 before writing off an irrecoverable debt of $500. The allowance for receivables is to be 4% of receivables. The opening allowance is $250. What is the total irrecoverable debts expense for the year?', choices: ['$550', '$500', '$800', '$570'], answer: 0, explain: '償却後の売掛金 7,500 × 4% ＝ 300。引当金は 250 から 50 増える。費用＝償却 500 ＋ 増加 50 ＝ 550。$570 は償却前の 8,000 に4%をかけた答え、$800 は引当金の残高 300 を全部費用にした答え。' },
        { q: 'Green Café の例で、⑥の利息の未払 $300 を計上し忘れたら、当期利益はいくらになる？', type: 'number', answer: 14970, unit: '$', explain: '財務費用が 300 少なくなるので、利益は 14,670 ＋ 300 ＝ 14,970。同時に流動負債（未払費用）も 300 少なくなる。' },
        { q: 'A bank loan of $20,000 with interest at 6% per year was taken out on 1 April 20X1. The year end is 31 December 20X1 and no interest has been paid. What is the accrual for loan interest at 31 December 20X1?', choices: ['$900', '$1,200', '$300', '$0'], answer: 0, explain: '1年の利息は 20,000 × 6% ＝ 1,200。4月〜12月の9か月分なので 1,200 × 9/12 ＝ 900。まだ払っていないので全額が未払費用。$1,200 は12か月分にした答え、$300 は残りの3か月分。' },
        { q: 'A sole trader\'s trial balance at 31 December 20X7 includes the balances below. Adjustments are still needed for closing inventory, depreciation for the year and the allowance for receivables. There are no adjustments to trade payables. Can each balance be included in the statement of financial position at its trial balance amount (Yes/No)? (1) Inventory $9,000 (2) Accumulated depreciation b/f $14,000 (3) Capital at 1 January 20X7 $30,000 (4) Trade payables $6,500', choices: ['(1) No (2) No (3) No (4) Yes', '(1) Yes (2) No (3) No (4) Yes', '(1) No (2) Yes (3) No (4) Yes', '(1) No (2) No (3) Yes (4) Yes'], answer: 0, explain: '(1) 試算表の在庫は期首在庫。SFP には期末在庫が載る。(2) b/f の減価償却累計額に、今年の償却費を足してから載せる。(3) 期首資本に当期利益を足し、引出しを引いて期末資本にする。(4) 買掛金は調整がないのでそのまま。2つ目は試算表の在庫を期末と勘違いした答え、3つ目は b/f の累計額を最終の数字と勘違いした答え、4つ目は期首資本をそのまま写した答え。' },
        { q: 'Green Café の SFP で、流動負債の合計はいくら？', choices: ['$4,900', '$4,600', '$4,000', '$16,900'], answer: 0, explain: '買掛金 4,000 ＋ 未払費用 900（電気代 600 ＋ 利息 300）＝ 4,900。$4,600 は利息の未払を忘れた答え、$4,000 は買掛金だけ。借入金は20X9年返済なので非流動で、入れると $16,900 になり誤り。' }
      ]
    }
  ],
  cards: [
    { id: 'L95-1', lesson: 'L95', q: 'SFP を支える3つの柱は？', a: '会計等式、IFRS 会計基準、企業実体の公準' },
    { id: 'L95-2', lesson: 'L95', q: 'SFP は会計等式とどう関係する？', a: '資産＝資本＋負債を縦に並べたもの。資産合計＝資本と負債の合計' },
    { id: 'L95-3', lesson: 'L95', q: 'オーナーの自宅は SFP に載せる？', a: '載せない。企業実体の公準でお店の物だけ載せる' },
    { id: 'L95-4', lesson: 'L95', q: '流動と非流動を分ける目安は？', a: '決算日から12か月以内（または営業サイクル内）かどうか' },
    { id: 'L95-5', lesson: 'L95', q: '$10,000 の借入金を毎年 $2,000 ずつ返す。SFP では？', a: '流動負債 $2,000、非流動負債 $8,000' },
    { id: 'L95-6', lesson: 'L95', q: 'なぜ SFP は IFRS に従って作る？', a: '共通ルールで作ると、他のお店や前の年と比べられるから' },
    { id: 'L96-1', lesson: 'L96', q: '段階利益を上から順に言うと？', a: '売上総利益 → 営業利益 → 財務・税金前の利益 → 税引前利益 → 当期利益 → 包括利益合計' },
    { id: 'L96-2', lesson: 'L96', q: '借入金の利息は SPL のどこで引く？', a: '営業利益の後。財務費用（finance costs）として引く' },
    { id: 'L96-3', lesson: 'L96', q: '預金の受取利息は SPL のどこ？', a: '営業利益の後で、投資の収益として足す' },
    { id: 'L96-4', lesson: 'L96', q: 'なぜ営業利益を出す？', a: '借金や税金に左右されない、本業の実力が分かるから' },
    { id: 'L96-5', lesson: 'L96', q: '個人事業の税引前利益と当期利益の関係は？', a: '同じ。税金はオーナー個人が払うので、お店の費用ではない' },
    { id: 'L96-6', lesson: 'L96', q: '包括利益合計の式は？', a: '当期利益＋その他の包括利益（OCI、再評価益など）' },
    { id: 'L96-7', lesson: 'L96', q: '売上収益を出すとき、売上から引くものは？', a: '売上戻りと、使われると見込む早期支払割引' },
    { id: 'L97-1', lesson: 'L97', q: '試算表の Inventory 残高は期首と期末のどちら？', a: '期首。期末在庫は追加情報で与えられる' },
    { id: 'L97-2', lesson: 'L97', q: '試算表から SPL を作る最初の作業は？', a: '各残高を SPL 行きと SFP 行きに分ける' },
    { id: 'L97-3', lesson: 'L97', q: 'オーナーが受け取った「自分の給料」の扱いは？', a: '引出し。SPL の費用にしない' },
    { id: 'L97-4', lesson: 'L97', q: 'オーナーが商品を持ち帰った仕訳は？', a: '原価で Dr Drawings / Cr Purchases' },
    { id: 'L97-5', lesson: 'L97', q: 'SPL に入れないものを3つ', a: '引出し、借入金の元本、減価償却累計額' },
    { id: 'L97-6', lesson: 'L97', q: 'Takoyaki Shop の例の当期利益は？', a: '$24,900（営業利益 25,500 − 利息 600）' },
    { id: 'L98-1', lesson: 'L98', q: '個人事業の期末資本の式は？', a: '期首資本＋資本の拠出＋当期利益−引出し' },
    { id: 'L98-2', lesson: 'L98', q: '貸倒引当金は SFP のどこに出る？', a: '売掛金から引き、純額で流動資産に示す' },
    { id: 'L98-3', lesson: 'L98', q: '当座借越は SFP のどこ？', a: '流動負債。現金のマイナスとして書かない' },
    { id: 'L98-4', lesson: 'L98', q: '設備は SFP にいくらで載せる？', a: '帳簿価額＝原価−減価償却累計額' },
    { id: 'L98-5', lesson: 'L98', q: 'なぜ SFP の合計は必ず一致する？', a: 'SPL 行きの残高を当期利益にまとめて資本に足しただけだから' },
    { id: 'L98-6', lesson: 'L98', q: 'SFP の合計が合わないとき、まず探すのは？', a: '片方の計算書にしか入れていない数字（期末在庫など）' },
    { id: 'L98-7', lesson: 'L98', q: '調整前の試算表の資本・減価償却累計額・貸倒引当金は、ふつう何の残高？', a: '期首（b/f）の残高。利益・引出しや今年の調整を加えてから SFP に載る' },
    { id: 'L99-1', lesson: 'L99', q: 'SPL と SFP をつなぐ数字は？', a: '当期利益。SFP の資本に足される' },
    { id: 'L99-2', lesson: 'L99', q: '純資産から利益を求める式は？', a: '期末純資産−期首純資産−資本の拠出＋引出し' },
    { id: 'L99-3', lesson: 'L99', q: 'なぜ期末調整は両方の計算書を動かす？', a: '仕訳の片方が SPL の勘定、もう片方が SFP の勘定になるから' },
    { id: 'L99-4', lesson: 'L99', q: '期末在庫が $2,000 過大。今年の影響は？', a: '利益・資産・資本がそれぞれ $2,000 過大' },
    { id: 'L99-5', lesson: 'L99', q: '今年の期末在庫の過大は、来年どうなる？', a: '来年の期首在庫も過大になり、来年の利益が同じ額だけ過小になる' },
    { id: 'L99-6', lesson: 'L99', q: '当期利益と現金の増加は同じ？', a: '同じとは限らない。掛け取引・減価償却・在庫の増減があるから' },
    { id: 'L100-1', lesson: 'L100', q: 'Section B の作成問題の進め方は？', a: '調整仕訳 → 試算表に書き込む → SPL → SFP で一致を確認' },
    { id: 'L100-2', lesson: 'L100', q: '15か月分の家賃 $9,000。今年（12か月）の費用は？', a: '9,000 ÷ 15 × 12 ＝ $7,200。残り $1,800 は前払費用' },
    { id: 'L100-3', lesson: 'L100', q: '貸倒引当金の割合はどの売掛金にかける？', a: '貸倒れを償却した後の売掛金' },
    { id: 'L100-4', lesson: 'L100', q: '貸倒引当金のうち、今年の費用になるのは？', a: '引当金の増えた分だけ（残高の全額ではない）' },
    { id: 'L100-5', lesson: 'L100', q: '利息が半年分しか払われていない借入金の調整は？', a: '残りを未払計上: Dr Loan interest / Cr Accruals' },
    { id: 'L100-6', lesson: 'L100', q: 'Green Café の当期利益と資産合計は？', a: '当期利益 $14,670、資産合計 $39,070' },
    { id: 'L100-7', lesson: 'L100', q: '調整前の試算表の数字を、そのまま SFP に使えるのは？', a: '期末調整で動かない残高だけ（設備の原価・預金・買掛金など）' }
  ]
});
