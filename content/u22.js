(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 22,
  part: 15,
  partTitle: '事業の形とルールの枠組み',
  lessons: [
    {
      id: 'L106',
      no: 106,
      title: '個人事業・パートナーシップ・有限責任会社',
      goal: '事業の3つの形（sole trader、partnership、limited liability company）を見分け、それぞれを英語の定義とともに説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['A1(b)'],
      slides: [
        {
          title: '稼ぎ方は3通り',
          paras: ['仕事でお金を稼ぐ形を考える。1人でフリーランスとして働く。友達と2人で事務所を開く。会社を作って、お金を出してくれる人を集める。', '会計でも、事業の形（types of business entity）は大きくこの3つに分かれる。どの形かで、法律上の扱いと、財務諸表の中身が少し変わる。']
        },
        {
          title: '個人事業（sole trader）',
          paras: ['1人の人が持ち主で、自分で経営する事業。英語では sole trader（ソール・トレーダー）。', 'ここまで学んできたたこ焼き屋がこれ。オーナーが資本を入れ、お店から引出し（drawings）をする。財務諸表もオーナーのために作る。'],
          note: { kind: 'tip', text: 'sole は「1人だけ」という意味。従業員を何人雇っていても、持ち主が1人なら sole trader。' }
        },
        {
          title: 'パートナーシップ（partnership）',
          paras: ['2人以上の人が、利益を目的に一緒に事業をする形。英語では partnership。定義は "two or more persons carrying on a business in common with a view to profit"。会計事務所、法律事務所、診療所によくある。']
        },
        {
          title: 'パートナーどうしの約束',
          paras: ['誰がいくら出し、利益をどう分けるかは、パートナーどうしの約束（partnership agreement）で決める。口約束でも成り立つが、ふつうは書面にする。']
        },
        {
          title: '有限責任会社（limited liability company）',
          paras: ['法律上、持ち主とは「別の人」として扱われる会社。英語では limited liability company。K1 では limited company と呼ぶ。単に company ともいう。', '会社のお金の元手は株（shares）に分かれていて、株を持つ人が持ち主＝株主（shareholders）。会社を実際に動かすのは、株主に選ばれた取締役（directors）。小さな会社では、株主と取締役が同じ人のこともある。']
        },
        {
          title: '3つの形をくらべる',
          table: {
            caption: '持ち主と経営する人',
            head: ['形', '持ち主', '経営する人'],
            rows: [
              ['sole trader', '1人', '持ち主本人'],
              ['partnership', '2人以上のパートナー', 'パートナー'],
              ['company', '株主（何人でもよい）', '取締役（directors）']
            ]
          },
          after: '会社には、株を一般の人に売り出せる public limited company（plc）と、売り出せない private limited company（Ltd）がある。証券取引所に上場できるのは plc だけ。'
        },
        {
          title: 'なぜ？ 会計では3つとも「別の人」',
          paras: ['L02 の企業実体の公準（business entity concept）を思い出す。会計では、どの形でもお店とオーナーを別の人として記録する。お店の成績を、オーナーの家計と混ぜないため。', 'ただし、法律の上で本当に別の人になるのは会社だけ。個人事業とパートナーシップは、法律上はオーナー本人と同じ。「会計では別、法律では同じ」が試験でよく問われる。']
        },
        {
          title: 'お金の呼び方も変わる',
          table: {
            caption: '個人事業と会社のちがい',
            head: ['項目', '個人事業', '会社'],
            rows: [
              ['オーナーの取り分', 'capital（資本）', 'share capital と reserves'],
              ['オーナーに渡すお金', 'drawings（引出し）', 'dividends（配当）'],
              ['財務諸表を作る人', 'オーナー本人', '取締役（directors）']
            ]
          },
          after: 'パートナーシップは個人事業と同じ形で、資本や引出しをパートナーごとに分けて記録する。会社の資本（株式資本や利益剰余金）は第16部でくわしく学ぶ。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①従業員がいるとパートナーシップだと思う（持ち主が1人なら sole trader）。②取締役を会社の持ち主だと思う（持ち主は株主。取締役は経営する人）。③個人事業も法律上は別の人だと思う（法律上別なのは会社だけ。会計上はどれも別）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['sole trader＝持ち主1人。partnership＝2人以上で利益のために一緒に。company＝株主が持ち主で、法律上の別の人', '会社は株主が持ち、取締役が経営する', '会計ではどの形も別の人として記録する。法律上も別なのは会社だけ']
        },
        {
          title: '英単語',
          words: [
            ['business entity', 'ビジネス・エンティティ', '事業体、事業の形'],
            ['sole trader', 'ソール・トレーダー', '個人事業（主）'],
            ['partnership', 'パートナーシップ', '2人以上で一緒にする事業'],
            ['partnership agreement', '', 'パートナーどうしの約束（出資・利益の分け方など）'],
            ['limited liability company / limited company', '', '有限責任会社（K1 では limited company）'],
            ['shares / shareholders', 'シェア／シェアホルダー', '株／株主（会社の持ち主）'],
            ['directors', 'ディレクターズ', '取締役（会社を経営する人）'],
            ['public limited company (plc)', '', '株を一般に売り出せる会社']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a partnership?', choices: ['A business owned and controlled by one individual', 'Two or more persons carrying on a business in common with a view to profit', 'A separate legal entity owned by shareholders', 'A business managed by directors on behalf of its owners'], answer: 1, explain: 'partnership は2人以上が利益のために一緒にする事業。1つ目は sole trader、3つ目と4つ目は company の説明。' },
        { q: 'Which type of business entity is owned by shareholders and managed by directors?', choices: ['Sole trader', 'Partnership', 'Limited liability company', 'All three types'], answer: 2, explain: '株主（shareholders）が持ち、取締役（directors）が経営するのは会社。個人事業とパートナーシップには株主も取締役もいない。' },
        { q: '1人で始めた美容室が、スタッフを3人雇っている。事業の形は？', choices: ['個人事業（sole trader）', 'パートナーシップ（partnership）', '有限責任会社（limited liability company）'], answer: 0, explain: '持ち主は1人なので sole trader。雇っているスタッフは持ち主ではないので、人数が増えてもパートナーシップにはならない。' },
        { q: '有限責任会社の「持ち主」は誰？', choices: ['取締役', '株主', '従業員', '会社にお金を貸した銀行'], answer: 1, explain: '持ち主は株を持つ株主。取締役は経営を任された人で、持ち主とは限らない。銀行は貸した側（債権者）。' },
        { q: '法律上、持ち主とは別の人として扱われるのはどれ？', choices: ['3つの形すべて', '会社とパートナーシップ', '会社だけ', 'どれも別の人ではない'], answer: 2, explain: '法律上の別の人は会社だけ。「3つすべて」は会計の企業実体の公準と混ぜた引っかけ。会計上はどれも別として記録する。' }
      ]
    },
    {
      id: 'L107',
      no: 107,
      title: '3つの形の法的な違い',
      goal: '別の法人かどうか、責任の範囲、続くかどうか、作り方と公開、税金の扱いの違いを説明し、会計処理への影響を答えられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['A1(c)'],
      slides: [
        {
          title: 'ルームシェアの家賃で考える',
          paras: ['友達と2人でルームシェアをして、家賃月10万円の契約に2人とも名前を書いた。友達が払わなくなると、大家さんは「10万円全部払って」と言える。半分の5万円で済むとは限らない。', '一緒に事業をすると、これと同じことが起きる。3つの形の法的な違いは、「最後に誰が借金を払うか」から考えると分かりやすい。']
        },
        {
          title: '違い①: 法律上の「人」かどうか',
          paras: ['会社は、持ち主とは別の法人（separate legal entity）。自分の名前で財産を持ち、契約し、訴えたり訴えられたりできる。', '会社の借金は会社自身の借金。大人の子が自分の名前で組んだローンは、子が全額を返す。お金を出してあげた親（＝株主）は、出した分より多くは払わない。', '個人事業とパートナーシップは、法律上はオーナー本人と同じ。お店の借金は、そのままオーナー個人の借金になる。']
        },
        {
          title: '違い②: 責任の範囲',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="個人事業とパートナーシップは個人の財産まで責任を負い、株主は株の代金までしか失わない" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">返せない借金は、どこまで追ってくる？</text><rect x="20" y="52" width="400" height="92" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">個人事業・パートナーシップ</text><text x="40" y="106" fill="var(--ink)">お店の財産で足りなければ</text><text x="40" y="128" fill="var(--ink)">自宅や貯金も使って返す（無限責任）</text><rect x="20" y="160" width="400" height="92" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="188" font-size="16" font-weight="600" fill="var(--ink)">有限責任会社の株主</text><text x="40" y="214" fill="var(--ink)">失うのは、株の代金（払う約束の分）まで</text><text x="40" y="236" fill="var(--ink)">会社の借金は会社が返す（株主は有限責任）</text><text x="220" y="284" text-anchor="middle" font-size="12.5" fill="var(--quiet)">unlimited liability / limited liability</text></svg>`,
          caption: '個人事業主とパートナーは無限責任（unlimited liability）。株主は有限責任（limited liability）で、失うのは株に払ったお金と、まだ払っていない約束の分まで。',
          note: { kind: 'warn', text: '「有限責任」で限られるのは株主の責任。会社自身の責任は限られない。会社は自分の借金を、財産を全部使ってでも全額返す義務を負う。' }
        },
        {
          example: {
            problem: 'お店の財産は $30,000、借金は $50,000。お店の財産を全部使っても $20,000 足りない。持ち主が個人事業主の場合と、会社（株の代金は全額払込済み）の場合で、足りない $20,000 はどうなる？',
            steps: ['足りない額: $50,000 − $30,000 ＝ $20,000', '個人事業: 法律上はオーナー本人の借金。残り $20,000 は、オーナー個人の貯金や家などから返す', '会社: 借金は会社自身のもの。会社は財産 $30,000 を全部使って返す（会社の責任に上限はない）', '株主は払い込んだ株の代金を失うだけで、追加では払わない。会社にもう財産がないので、残り $20,000 は、お金を貸した側（債権者、creditors）の損になる'],
            answer: '個人事業はオーナーが $20,000 を個人で負担する。会社なら株主は追加で払わない'
          }
        },
        {
          title: 'パートナーは連帯して責任を負う',
          paras: ['パートナーシップの借金には、パートナー全員が連帯して責任を負う（joint and several liability）。ルームシェアと同じで、ほかのパートナーが払えなければ、1人に全額を請求できる。', '有限責任の株主でも、株の代金を払い終えていなければ、残りを払う義務がある。1株 $1 の株を1,000株買い、1株 $0.60 だけ払ったなら、あと 1,000 × $0.40 ＝ $400 を払う義務が残る。']
        },
        {
          title: '違い③: 続くかどうか',
          list: ['会社: 株主が株を売っても、亡くなっても、会社はそのまま続く（perpetual succession）。株は売って手放せる', '個人事業: オーナーがやめたり亡くなったりすると、事業は終わる', 'パートナーシップ: パートナーが抜けたり加わったりすると、法律上は前のパートナーシップが終わり、新しいものが始まる（約束で続けると決めておくこともできる）']
        },
        {
          title: '違い④: 作り方と公開',
          list: ['会社: 登記（incorporation）をして生まれ、会社法（company law）に従う。財務諸表を公的な登記所に出し、誰でも見られる。大きな会社は外部の監査（audit）も受ける', '個人事業: 特別な手続きはほとんどいらない。財務諸表は公開しなくてよい（税金の申告には使う）', 'パートナーシップ: パートナーどうしの約束だけで始められる。公開もしなくてよい']
        },
        {
          title: '違い⑤: 税金と「給料」の扱い',
          table: {
            caption: '会計で差が出るところ',
            head: ['項目', '個人事業', '会社'],
            rows: [
              ['利益にかかる税金', 'オーナー個人の税金。お店から払えば drawings', '会社自身の税金。損益計算書の費用'],
              ['持ち主への「給料」', 'drawings。費用にしない', '取締役の給料は費用（株主でも同じ）'],
              ['持ち主へ渡す利益', 'drawings', 'dividends（配当）。費用ではない']
            ]
          },
          after: 'なぜ？ 会社は法律上の別の人なので、税金も会社自身が払い、給料も会社が人に払う費用になる。個人事業は別の人ではないので、税金も「給料」もオーナー本人のもの。お店の費用にはならない。パートナーシップも個人事業と同じ側で、パートナーへの「給料」は費用ではなく利益の分配（appropriation）になる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①パートナーの責任は「自分の持ち分だけ」と思う（連帯責任なので全額を請求されうる）。②個人事業主の所得税をお店の費用にする（drawings にする）。③株主でもある取締役の給料を配当や引出しにする（会社の費用）。④株主は何があっても追加で払わないと思う（未払いの株の代金は払う）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['会社は法律上の別の人で、株主が替わっても続く。個人事業とパートナーシップは本人と同じ', '個人事業主とパートナーは無限責任（パートナーは連帯）。株主は株の代金まで。会社自身は自分の借金を全額負う', '会社の税金と取締役の給料は費用。個人事業主の税金と「給料」は drawings']
        },
        {
          title: '英単語',
          words: [
            ['separate legal entity', '', '法律上の別の人（法人）'],
            ['unlimited liability', '', '無限責任（個人の財産まで使って返す）'],
            ['limited liability', '', '有限責任（株の代金まで）'],
            ['joint and several liability', '', '連帯責任（1人に全額を請求できる）'],
            ['perpetual succession', '', '持ち主が替わっても会社が続くこと'],
            ['incorporation', 'インコーポレーション', '会社を登記して作ること'],
            ['creditors', 'クレディターズ', '債権者、お金を貸した・払ってもらう側'],
            ['dividends', 'ディビデンズ', '配当、株主へ渡す利益']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about a limited liability company is correct?', choices: ['The shareholders are personally liable for all of the debts of the company', 'The company is a separate legal entity from its owners', 'The company ceases to exist when a shareholder dies', 'The profits of the company are taxed only as the personal income of the shareholders'], answer: 1, explain: '会社は持ち主と別の法人。株主の責任は有限、株主が亡くなっても会社は続く（perpetual succession）、税金は会社自身が払う。' },
        { q: 'A shareholder bought 2,000 shares at $1.50 each. So far she has paid $1.00 per share. The company is now unable to pay its debts. What is the maximum further amount she can be required to pay?', type: 'number', answer: 1000, unit: '$', explain: '有限責任でも、未払いの代金は払う。1株あたり未払い $1.50 − $1.00 ＝ $0.50。2,000 × $0.50 ＝ $1,000。全額 $3,000 や払込済みの $2,000 は引っかけ。' },
        { q: 'Is the following statement true or false? "Limited liability means that a company is only liable for its own debts up to the amount of its share capital."', choices: ['True', 'False'], answer: 1, explain: '誤り（False）。有限責任で限られるのは株主の責任。会社は法律上の別の人なので、自分の借金は全額負い、財産を全部使ってでも返す。株主は株の代金（未払い分を含む）より多くは払わない。「会社の責任も株式資本まで」は、株主の責任と会社の責任を混ぜた引っかけ。' },
        { q: 'A and B are partners. The partnership cannot pay debts of $40,000. B has no personal assets. What is the maximum amount A can be required to pay?', choices: ['$20,000', '$40,000', '$0', '$80,000'], answer: 1, explain: 'パートナーは連帯責任（joint and several liability）。B が払えなければ、A に全額 $40,000 を請求できる。半分の $20,000 は「持ち分だけ」と考えた間違い。' },
        { q: 'A sole trader paid her personal income tax of $3,000 from the business bank account. How should this be treated in the business accounts?', choices: ['As an expense in the statement of profit or loss', 'As drawings', 'As a liability of the business', 'As a reduction in revenue'], answer: 1, explain: '個人事業の所得税はオーナー個人の税金。お店のお金で払ったら drawings。会社なら税金は会社の費用になるが、個人事業では費用にしない。' },
        { q: 'A director of a limited liability company, who also owns 60% of its shares, is paid a salary of $30,000. How is the salary treated in the financial statements of the company?', choices: ['As drawings', 'As a dividend', 'As an expense', 'It is not recorded because she is an owner'], answer: 2, explain: '会社は法律上の別の人なので、取締役への給料は会社の費用（staff costs）。株主であっても drawings や配当にはならない。' }
      ]
    },
    {
      id: 'L108',
      no: 108,
      title: '3つの形のメリット・デメリット',
      goal: '個人事業・パートナーシップ・有限責任会社のメリットとデメリットを挙げ、状況に合う形を選べるようになる',
      minutes: 11,
      recall: true,
      exam: 'fa',
      outcomes: ['A1(d)'],
      slides: [
        {
          title: '旅行のしかたで考える',
          paras: ['1人旅は、行き先も予定も全部自分で決められて気楽。でも費用は全部自分持ちで、トラブルも1人で抱える。', '友達と行けば費用を分けられ、得意なことも分担できる。でも意見が割れることがあり、友達の失敗に巻き込まれることもある。', '団体旅行は大きな計画ができる代わりに、手続きやルールが多い。事業の3つの形にも、よく似たメリット（advantages）とデメリット（disadvantages）がある。']
        },
        {
          title: '個人事業',
          list: ['メリット: 始めるのが簡単で安い。全部自分で決められる。利益は全部自分のもの。財務諸表を公開しなくてよい', 'デメリット: 無限責任。お金を集めにくい（自分の貯金と借入くらい）。仕事も判断も1人に集中する。オーナーが倒れると事業が止まる']
        },
        {
          title: 'パートナーシップ',
          list: ['メリット: 何人もが出すので、1人よりお金を集めやすい。技術や仕事を分担できる。始めるのも比較的簡単で、公開もいらない', 'デメリット: 無限責任で、ほかのパートナーの判断で生まれた借金まで負う（連帯責任）。意見が割れることがある。利益を分け合う。パートナーが抜けると作り直しになる']
        },
        {
          title: '有限責任会社のメリット',
          list: ['有限責任: 株主は株の代金以上を失わない', 'お金を集めやすい: 株を売って多くの人から出資を受けられる。plc なら一般の投資家からも集められる', '続く: 株主が替わっても会社は続く。株は売って手放せる', '経営を任せられる: 持ち主と経営する人を分け、経営のプロに任せられる']
        },
        {
          title: '有限責任会社のデメリット',
          list: ['作るのにお金と手続きがかかる（登記など）', '規制が多い: 会社法に従い、決まった形で財務諸表を作る。大きな会社は監査も受ける', '財務諸表を公開するので、成績が他人に知られる', '小さな会社が銀行から借りると、取締役が個人保証（personal guarantee）を求められることが多い。その借入では有限責任のメリットがなくなる']
        },
        {
          title: '3つの形の早見表',
          table: {
            caption: 'ポイントごとの比較',
            head: ['ポイント', '個人事業・パートナー', '会社'],
            rows: [
              ['責任', '無限', '有限'],
              ['作る手間・費用', '少ない', '多い'],
              ['お金の集めやすさ', '集めにくい', '集めやすい'],
              ['財務諸表の公開', 'いらない', '必要'],
              ['事業が続くか', '人に左右される', '続く']
            ]
          },
          note: { kind: 'tip', text: 'K1（2027年7月〜）では、メリット・デメリットは独立した項目から外れる。FA で受けるなら必ず覚えておく。' }
        },
        {
          title: 'なぜ？ メリットとデメリットは裏表',
          paras: ['会社のメリットは、法律上の別の人であることから生まれる。有限責任も、事業が続くことも、株で広く集められることも、同じ理由。', 'その代わり、株主はお金を出しても経営を直接見られない。だから法律は、財務諸表の作成・公開・監査を会社に求める。守られる分だけ、ルールも重くなる。']
        },
        {
          title: '状況から形を選ぶ',
          list: ['自宅で1人、小さく始めたい。手間をかけたくない → 個人事業', '税理士2人が、お客さんと技術を持ち寄って事務所を開きたい → パートナーシップ', '全国に100店を出すため、たくさんの投資家から大きなお金を集めたい → 有限責任会社（大きく集めるなら plc）']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①会社なら借金で個人は絶対に困らないと思う（個人保証をすれば個人も払う）。②パートナーシップは有限責任だと思う（ふつうのパートナーシップは無限責任）。③個人事業も財務諸表を公開すると思う（公開が必要なのは会社）。④会社は作るのが簡単だと思う（手続きと費用がかかる）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['個人事業: 簡単・自由・非公開。でも無限責任で、お金を集めにくい', 'パートナーシップ: お金と仕事を分け合える。でも無限の連帯責任で、もめることがある', '会社: 有限責任・集めやすい・続く。でも手間と規制が多く、公開が必要']
        },
        {
          title: '英単語',
          words: [
            ['advantage / disadvantage', 'アドバンテージ／ディスアドバンテージ', 'メリット／デメリット'],
            ['raise finance', 'レイズ・ファイナンス', 'お金（資金）を集める'],
            ['personal guarantee', 'パーソナル・ギャランティ', '個人保証（会社の借金を個人が保証する）'],
            ['publish', 'パブリッシュ', '公開する'],
            ['audit', 'オーディット', '監査'],
            ['company law', '', '会社法'],
            ['transfer of shares', '', '株を他の人に移すこと']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an advantage of operating as a limited liability company rather than as a sole trader?', choices: ['Financial statements do not have to be published', 'The liability of the owners for the debts of the business is limited', 'It is cheaper and easier to set up', 'The owner keeps full control of all decisions'], answer: 1, explain: '有限責任が会社の代表的なメリット。公開不要・簡単で安い・全部自分で決められる、は個人事業のメリット。' },
        { q: 'Which of the following is a disadvantage of operating as a partnership compared with operating as a sole trader?', choices: ['A partner may be liable for debts arising from the decisions of other partners', 'Less capital can usually be raised', 'Nobody shares the workload', 'The financial statements must be published'], answer: 0, explain: 'パートナーは連帯責任なので、ほかのパートナーの判断で生まれた借金まで負う。お金は1人より集めやすく、仕事も分担でき、公開もいらない。' },
        { q: '個人事業のメリットとして正しいのは？', choices: ['オーナーの責任が株の代金までに限られる', '始めるのが簡単で、財務諸表を公開しなくてよい', '株を売って多くの投資家からお金を集められる', 'オーナーが亡くなっても事業がそのまま続く'], answer: 1, explain: '簡単・非公開が個人事業のメリット。残りの3つはどれも会社のメリット。' },
        { q: '小さな会社の取締役（株主でもある）が、銀行から会社の借入をするときに個人保証をした。会社が返せなくなったら？', choices: ['有限責任なので、取締役個人は払わなくてよい', '保証した借入については、取締役個人も払う義務がある', '株主全員が等しく払う', '銀行の損になり、誰も払わない'], answer: 1, explain: '個人保証は「会社が返せなければ自分が払う」という約束。その借入では有限責任のメリットがなくなる。小さな会社のデメリットとしてよく出る。' },
        { q: 'ラーメン店を全国に急拡大したい。たくさんの投資家から大きなお金を集めるのに向いている形は？', choices: ['個人事業', 'パートナーシップ', '有限責任会社'], answer: 2, explain: '会社は株を売って多くの人から出資を受けられ、株主は有限責任なので出資してもらいやすい。個人事業とパートナーシップは集められる額に限りがある。' }
      ]
    },
    {
      id: 'L109',
      no: 109,
      title: '規制の仕組み（IFRS財団・IASB・諮問会議・IFRIC・ISSB）',
      goal: '規制の仕組みの目的と、IFRS財団・IASB・IFRS諮問会議・解釈指針委員会・ISSB の役割を区別して説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['A4(a)'],
      slides: [
        {
          title: 'サッカーのルールで考える',
          paras: ['サッカーのルールは世界共通。だから、どの国の試合でも同じ基準で見て、比べられる。', 'その裏には、ルールを作る委員会、人とお金をそろえて全体を見守る団体、細かい判定の疑問に答える人たち、意見を言う人たちがいる。財務諸表のルール（会計基準）も、同じように組織で作られている。']
        },
        {
          title: 'なぜ？ 規制の仕組みがある理由',
          paras: ['会社ごとに好きな計算方法を使えたら、利益を大きく見せたい会社は都合のいい方法を選ぶ。投資家や銀行は、会社どうしを比べられない。', '規制の仕組み（regulatory system）の目的は、利用者が信頼でき、比べられる財務諸表を作らせること。柱は国の会社法、証券取引所のルール、そして会計基準。会計基準を世界で1つにまとめようとしているのが IFRS の組織。']
        },
        {
          title: 'IFRS の組織図',
          svg: `<svg viewBox="0 0 440 410" role="img" aria-label="モニタリング・ボードがIFRS財団を監視し、財団の下にIASBとISSB、IASBの下に解釈指針委員会、横に諮問会議がある" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">IFRS の組織図</text><rect x="20" y="50" width="250" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="145" y="73" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">モニタリング・ボード</text><text x="145" y="93" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Monitoring Board</text><path d="M145 102V122" stroke="var(--edge)" stroke-width="1.25" fill="none"/><text x="156" y="117" fill="var(--quiet)">監視</text><rect x="20" y="122" width="250" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="145" y="148" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">IFRS財団（評議員会）</text><text x="145" y="170" text-anchor="middle" font-size="12.5" fill="var(--ink)">IFRS Foundation Trustees</text><path d="M270 152H290" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3" fill="none"/><rect x="290" y="122" width="130" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 3"/><text x="355" y="148" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">諮問会議</text><text x="355" y="170" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Advisory Council</text><path d="M145 182V198M110 198H330M110 198V216M330 198V216" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="216" width="180" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="242" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">IASB</text><text x="110" y="264" text-anchor="middle" fill="var(--ink)">会計基準を作る</text><text x="110" y="284" text-anchor="middle" font-size="12.5" fill="var(--quiet)">IFRS Accounting Standards</text><rect x="240" y="216" width="180" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="242" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">ISSB</text><text x="330" y="264" text-anchor="middle" fill="var(--ink)">サステナビリティ基準</text><text x="330" y="284" text-anchor="middle" font-size="12.5" fill="var(--quiet)">IFRS S1, IFRS S2</text><path d="M110 294V314" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="314" width="180" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="340" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">解釈指針委員会</text><text x="110" y="362" text-anchor="middle" fill="var(--ink)">現場の疑問に答える</text><text x="110" y="382" text-anchor="middle" font-size="12.5" fill="var(--quiet)">IFRS IC (IFRIC)</text><text x="240" y="340" fill="var(--ink)">評議員会が</text><text x="240" y="362" fill="var(--ink)">各組織のメンバーを</text><text x="240" y="384" fill="var(--ink)">任命し、お金を集める</text></svg>`,
          caption: '点線の諮問会議は、評議員会・IASB・ISSB に助言する立場。基準は作らない。評議員会自身は、各国の証券当局などでつくるモニタリング・ボードに監視される。'
        },
        {
          title: 'IFRS財団（IFRS Foundation）',
          paras: ['非営利で独立した組織。IASB と ISSB の上にある「親」の団体。', '評議員会（Trustees）が運営し、IASB・ISSB・解釈指針委員会・諮問会議のメンバーを任命する。活動のお金を集め、仕組みがうまく動いているかを見直す。自分では基準を作らない。'],
          after: '目的は、公益のために、会計とサステナビリティ開示について、質が高く分かりやすく、守らせることができて世界で受け入れられる1組の基準を作り、各国に使ってもらうこと。'
        },
        {
          title: 'IASB（国際会計基準審議会）',
          paras: ['International Accounting Standards Board。会計基準（IFRS Accounting Standards）を作って公表する、独立した組織。', '作る手順（due process）は公開されている。調査 → 討議資料（discussion paper）→ 公開草案（exposure draft）→ 意見募集 → 最終の基準。誰でも意見を出せるので、多くの国に受け入れられやすい。']
        },
        {
          title: '解釈指針委員会（IFRS Interpretations Committee）',
          paras: ['昔の名前から IFRIC（イフリック）とも呼ぶ。IASB の下で、基準の使い方について現場から出る疑問を扱う。', '基準の読み方がばらばらになっている、またはなりそうな問題を取り上げ、解釈（IFRIC Interpretations）を作る。解釈は IASB の承認を経て出され、基準と同じように守る必要がある。']
        },
        {
          title: '諮問会議（IFRS Advisory Council）',
          paras: ['投資家、財務諸表を作る会社、監査人、学者、規制当局など、いろいろな立場の人が集まる会議。', '評議員会・IASB・ISSB に、優先して取り組むべき課題や作業の計画について助言する。基準は作らない。幅広い声を基準づくりに届けるための場。']
        },
        {
          title: 'ISSB（国際サステナビリティ基準審議会）',
          paras: ['International Sustainability Standards Board。2021年に IFRS財団の中にできた。気候変動などのサステナビリティ（持続可能性）に関する情報の開示基準（IFRS Sustainability Disclosure Standards）を作る。', '最初の基準は2023年の IFRS S1（全般的な要求事項）と IFRS S2（気候関連の開示）。会計基準を作る IASB とは別の組織で、2つは並んで財団の下にある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①IFRS財団が基準を作ると思う（作るのは IASB と ISSB。財団は任命・資金・監督）。②諮問会議が基準を作ると思う（助言だけ）。③解釈指針委員会が単独で解釈を出すと思う（IASB の承認がいる）。④ISSB が会計基準を作ると思う（作るのはサステナビリティ開示基準）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['IFRS財団＝親。評議員会がメンバーを任命し、お金を集め、監督する', 'IASB＝会計基準を作る。ISSB＝サステナビリティ開示基準を作る', '解釈指針委員会＝使い方の疑問に解釈を作る。諮問会議＝助言するだけ']
        },
        {
          title: '英単語',
          words: [
            ['regulatory system', '', '規制の仕組み'],
            ['IFRS Foundation', '', 'IFRS財団（親の団体）'],
            ['Trustees', 'トラスティーズ', '評議員会（財団を運営し任命する）'],
            ['IASB', 'アイ・エー・エス・ビー', '国際会計基準審議会（会計基準を作る）'],
            ['IFRS Interpretations Committee (IFRIC)', '', '解釈指針委員会（使い方の疑問に答える）'],
            ['IFRS Advisory Council', '', '諮問会議（助言する）'],
            ['ISSB', 'アイ・エス・エス・ビー', '国際サステナビリティ基準審議会'],
            ['exposure draft', 'エクスポージャー・ドラフト', '公開草案（意見を集めるための案）']
          ]
        }
      ],
      quiz: [
        { q: 'Which body is responsible for issuing IFRS Accounting Standards?', choices: ['IFRS Foundation', 'International Accounting Standards Board (IASB)', 'IFRS Advisory Council', 'IFRS Interpretations Committee'], answer: 1, explain: '会計基準を作って出すのは IASB。財団は任命・資金・監督、諮問会議は助言、解釈指針委員会は解釈を作る。' },
        { q: 'Which of the following is a role of the IFRS Interpretations Committee?', choices: ['To issue IFRS Sustainability Disclosure Standards', 'To review issues in applying IFRS Accounting Standards and develop interpretations', 'To appoint the members of the IASB', 'To raise finance for the IFRS Foundation'], answer: 1, explain: '解釈指針委員会は、基準の使い方の疑問を取り上げて解釈を作る（IASB の承認を経て出る）。1つ目は ISSB、3つ目と4つ目は財団の評議員会の仕事。' },
        { q: 'Which body oversees the IASB and the ISSB, appoints their members and raises their funding?', choices: ['IFRS Foundation (Trustees)', 'IFRS Advisory Council', 'IFRS Interpretations Committee', 'International Sustainability Standards Board'], answer: 0, explain: '任命・資金集め・監督は IFRS財団の評議員会。財団は自分では基準を作らない。' },
        { q: 'IFRS 諮問会議（Advisory Council）の役割は？', choices: ['会計基準を作って公表する', '基準の使い方について解釈を作る', 'いろいろな立場の人が集まり、課題の優先順位などを助言する', 'IASB のメンバーを任命する'], answer: 2, explain: '諮問会議は助言の場で、基準は作らない。基準を作るのは IASB、解釈は解釈指針委員会、任命は評議員会。' },
        { q: 'ISSB が作るものは？', choices: ['IFRS Accounting Standards', 'IFRS Sustainability Disclosure Standards（IFRS S1・S2 など）', 'IFRIC Interpretations', '各国の会社法'], answer: 1, explain: 'ISSB はサステナビリティ開示基準を作る。会計基準は IASB、解釈は解釈指針委員会。会社法は各国の議会が決める。' },
        { q: '規制の仕組み（regulatory system）の主な目的は？', choices: ['会社が必ず利益を出すようにすること', '利用者が信頼でき、比べられる財務諸表を作らせること', '会社の税金を減らすこと', '監査をなくすこと'], answer: 1, explain: 'ルールがないと、会社は都合のいい方法を選び、比べられなくなる。規制は信頼性と比較可能性のためにある。利益を保証するものではない。' }
      ]
    },
    {
      id: 'L110',
      no: 110,
      title: 'IFRS会計基準の役割',
      goal: 'IFRS Accounting Standards が財務諸表の作成で果たす役割と、法律の力・判断の余地との関係を説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['A4(b)'],
      slides: [
        {
          title: '長さの単位で考える',
          paras: ['ある国はセンチ、ある国はインチで長さを測っていたら、2つの机の大きさはそのままでは比べられない。換算の手間がかかり、間違いも起きる。', '会計も同じ。国ごとにルールが違うと、利益が同じ1億円の会社が2社あっても、本当に同じ成績かは分からない。']
        },
        {
          title: 'IFRS Accounting Standards とは',
          paras: ['IASB が作る、財務諸表を作るためのルールの集まり。前身の組織（IASC）が作った IAS（International Accounting Standards）、今の IASB が作った IFRS、それに解釈（IFRIC Interpretations など）をまとめた呼び方。', 'IAS 2（棚卸資産）や IAS 16（有形固定資産）のように、古い IAS の番号も今も有効。古いから使われていない、ということはない。']
        },
        {
          title: '基準が決めている4つのこと',
          list: ['認識（recognition）: 財務諸表に載せるか、いつ載せるか', '測定（measurement）: いくらで載せるか', '表示（presentation）: どこに、どんな名前で載せるか', '開示（disclosure）: 注記で何を説明するか'],
          after: '例: IAS 2 は、在庫を「原価と正味実現可能価額のどちらか低い方」で測ると決めている。これまでのレッスンで使ってきたルールも、こうした基準から来ている。'
        },
        {
          title: '試験によく出る基準',
          table: {
            caption: 'どの話題にルールがあるか',
            head: ['基準', '内容'],
            rows: [
              ['IAS 2', '棚卸資産（在庫）'],
              ['IAS 7', 'キャッシュフロー計算書'],
              ['IAS 10', '後発事象'],
              ['IAS 16', '有形固定資産'],
              ['IAS 28', '関連会社'],
              ['IAS 37', '引当金・偶発負債・偶発資産'],
              ['IAS 38', '無形資産'],
              ['IFRS 10', '連結財務諸表'],
              ['IFRS 15', '顧客との契約から生じる収益']
            ]
          },
          after: '番号を全部暗記する必要はない。どの話題に基準があるかを知っておけば十分。'
        },
        {
          title: 'なぜ？ 世界共通の基準の役割',
          list: ['比べられる（comparability）: 違う国の会社どうしでも、同じ物差しで比べられる', '信頼できる（credibility）: 決まったルールで作った財務諸表は、投資家や銀行が信じやすい', '数字を操作しにくい: 好きな方法を選べないので、都合よく見せる会計（creative accounting）の余地が減る', '国をまたぐ手間が減る: 外国の子会社を別のルールで作り直さなくてよい。外国の投資家もお金を出しやすい']
        },
        {
          title: '法律の力はどこから？',
          paras: ['IASB は国の政府ではない。だから IFRS Accounting Standards そのものには法律の力がない。', '各国の法律や証券の規制当局が「IFRS で作りなさい」と決めることで、守る義務が生まれる。たとえば EU では、上場会社の連結財務諸表は IFRS で作る。基準どおりに作った財務諸表は、会社の状態を適正に表示すること（fair presentation、true and fair view）を目指す。']
        },
        {
          title: '基準に書いていないときは？',
          paras: ['すべての取引に基準があるわけではない。基準がないときは、経営者が判断で会計方針（accounting policy）を決める。そのとき、似た話題を扱う基準や、概念フレームワーク（Conceptual Framework）の考え方を参考にする。', '概念フレームワークは、資産や負債の定義など、基準の土台になる考え方をまとめたもの。基準そのものではないので、基準と食い違ったら基準が優先する。']
        },
        {
          title: '基準の中にも選べるところがある',
          paras: ['IFRS は細かい規則を並べるより、考え方（原則）を示すタイプの基準（principles-based）。だから判断の余地が残る。', 'たとえば IAS 16 では、有形固定資産を原価のまま載せる（cost model）か、再評価する（revaluation model）かを選べる。耐用年数や残存価額の見積りも経営者が決める。選んだ方法は、毎年同じように続ける。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①IFRS は国の法律だと思う（作るのは IASB。法律の力は各国が使うと決めて生まれる）。②IAS は古いから使われていないと思う（今も有効）。③概念フレームワークが基準より優先すると思う（基準が優先）。④基準があれば判断はいらないと思う（見積りや方法の選択に判断が残る）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['IFRS Accounting Standards＝IASB の基準（IAS・IFRS・解釈）。認識・測定・表示・開示を決める', '役割は、比べられて、信頼できて、操作しにくい財務諸表にすること', '法律の力は各国の決定から。基準がないときは、似た基準と概念フレームワークを参考に判断する']
        },
        {
          title: '英単語',
          words: [
            ['IFRS Accounting Standards', '', 'IASB が作る会計基準（IAS・IFRS・解釈）'],
            ['recognition / measurement', 'レコグニション／メジャメント', '認識（載せるか）／測定（いくらで）'],
            ['presentation / disclosure', 'プレゼンテーション／ディスクロージャー', '表示／開示（注記での説明）'],
            ['comparability', 'コンパラビリティ', '比較できること'],
            ['creative accounting', 'クリエイティブ・アカウンティング', '数字を都合よく見せる会計'],
            ['accounting policy', '', '会計方針（会社が選んだ方法）'],
            ['Conceptual Framework', '', '概念フレームワーク（基準の土台の考え方）'],
            ['fair presentation', 'フェア・プレゼンテーション', '適正な表示']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a benefit of using IFRS Accounting Standards?', choices: ['Financial statements of companies in different countries are easier to compare', 'There is less scope for creative accounting', 'Investors find the financial statements more credible', 'Every company that uses them is guaranteed to make a profit'], answer: 3, explain: '基準は「どう記録し報告するか」のルールで、利益を保証しない。比較しやすさ、操作の余地が減ること、信頼性は基準の役割。' },
        { q: 'Which of the following statements about IFRS Accounting Standards is correct?', choices: ['They are laws passed by the parliament of each country', 'They are issued by the IASB and must be followed where national law or regulators require their use', 'They apply only to sole traders', 'They remove the need for any judgement by management'], answer: 1, explain: '基準を作るのは IASB。法律の力は、各国の法律や規制当局が使うと決めて生まれる。会社にも使われ、見積りや方法の選択に判断も残る。' },
        { q: 'IAS と IFRS の関係として正しいのは？', choices: ['IAS は廃止されたので、今は IFRS だけを使う', 'IAS は前身の組織が作った基準で、今も有効なものは IFRS と一緒に使う', 'IAS は米国の基準、IFRS は国際基準', 'IAS は個人事業用、IFRS は会社用'], answer: 1, explain: 'IAS 2 や IAS 16 のように、前身の IASC が作った IAS も今も有効。IAS・IFRS・解釈をまとめて IFRS Accounting Standards と呼ぶ。' },
        { q: 'ある取引について、当てはまる基準がない。会社はどうする？', choices: ['記録しない', '経営者が判断で会計方針を決める。似た基準や概念フレームワークを参考にする', '税法のとおりに記録しなければならない', '監査人に会計方針を決めてもらう'], answer: 1, explain: '基準がなければ経営者が判断する。そのとき似た話題の基準や、概念フレームワークの定義を参考にする。方針を決めるのは監査人ではない。' },
        { q: '在庫の測定について、IAS 2 が決めているのは？', choices: ['原価と正味実現可能価額のどちらか高い方', '原価と正味実現可能価額のどちらか低い方', 'いつも売値', 'いつも原価'], answer: 1, explain: 'IAS 2 は「原価と正味実現可能価額のどちらか低い方（lower of cost and NRV）」。基準が測定（いくらで載せるか）を決めている例。' }
      ]
    },
    {
      id: 'L111',
      no: 111,
      title: 'ガバナンスとは',
      goal: 'ガバナンスの意味と、財務諸表の作成においてガバナンスを担う人（取締役会）が何に責任を持つかを説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['A5(a)'],
      slides: [
        {
          title: 'マンションの管理組合で考える',
          paras: ['マンションの持ち主は住民全員。でも全員で毎日のことは決められないので、理事会を選んで運営を任せる。', '理事会は年に1回、総会で「いくら集めて、何に使ったか」を報告する。住民は中を毎日見られないので、監事という別の人が報告をチェックする。任せる仕組みと、チェックする仕組みがセットになっている。']
        },
        {
          title: 'ガバナンス（governance）とは',
          paras: ['会社を方向づけ、コントロールする仕組みのこと。英国のキャドバリー報告書（1992年）の定義 "the system by which companies are directed and controlled" がよく使われる。会社については corporate governance（コーポレート・ガバナンス）ともいう。', '会社を正直に、うまく動かすための「任せ方」と「チェックのしかた」のルール、と考えればよい。']
        },
        {
          title: 'なぜ？ 持ち主と経営する人が分かれているから',
          paras: ['個人事業なら、持ち主が自分で経営し、自分で帳簿を見る。でも会社では、株主（持ち主）と取締役（経営する人）が分かれていることが多い。これを所有と経営の分離（separation of ownership and control）という。', '株主は会社の中を毎日見られない。取締役は、ボーナスや評判のために利益を大きく見せたくなることがある。だから、取締役が正直に経営し、正しく報告するようにする仕組みが要る。']
        },
        {
          title: '誰が作り、誰がチェックする？',
          svg: `<svg viewBox="0 0 440 350" role="img" aria-label="株主が取締役会を任命し、取締役会が財務諸表を作って報告し、外部監査人がそれを確かめる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">誰が作り、誰がチェックする？</text><rect x="120" y="50" width="200" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="75" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">株主（持ち主）</text><text x="220" y="96" text-anchor="middle" font-size="12.5" fill="var(--quiet)">shareholders</text><path d="M170 106L115 200M270 106L325 200" stroke="var(--edge)" stroke-width="1.25" fill="none"/><text x="24" y="156" fill="var(--quiet)">任命・報告</text><text x="346" y="156" fill="var(--quiet)">意見を出す</text><rect x="20" y="200" width="190" height="78" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="226" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">取締役会</text><text x="115" y="248" text-anchor="middle" fill="var(--ink)">財務諸表を作る責任</text><text x="115" y="268" text-anchor="middle" font-size="12.5" fill="var(--ink)">board of directors</text><rect x="230" y="200" width="190" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="226" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">外部監査人</text><text x="325" y="248" text-anchor="middle" fill="var(--ink)">確かめて意見を出す</text><text x="325" y="268" text-anchor="middle" font-size="12.5" fill="var(--quiet)">external auditor</text><text x="220" y="310" text-anchor="middle" fill="var(--ink)">取締役会が作った財務諸表を、監査人が確かめる</text><text x="220" y="334" text-anchor="middle" fill="var(--ink)">監査人がいても、作る責任は取締役会に残る</text></svg>`,
          caption: '株主は取締役を任命し、取締役は財務諸表で株主に報告する。外部監査人は、その財務諸表が適正かを確かめて、株主に意見を出す。'
        },
        {
          title: 'ガバナンスを担う人（those charged with governance）',
          paras: ['会社の方向づけと、財務報告を含む説明責任を監督する立場の人。会社では、ふつうは取締役会（board of directors）がこれにあたる。持ち主が1人で経営する小さな会社なら、その人自身。', '大事なのは、財務報告がきちんと行われるよう監督する役目も、この人たちにあること。']
        },
        {
          title: '取締役会の中の見張り役',
          paras: ['取締役会には、毎日の経営をする業務執行取締役（executive directors）と、経営から離れて見張る非業務執行取締役（non-executive directors、社外取締役）がいる。大きな会社では、非業務執行取締役で監査委員会（audit committee）を作り、財務報告と監査を監督する。']
        },
        {
          title: '財務諸表について担う責任（概要）',
          list: ['適正な財務諸表を作る: IFRS と法律に従い、会社の状態を適正に表示する（true and fair view）', '帳簿をきちんとつける: 取引を正しく記録できる会計記録を保つ', '内部統制（internal control）を作る: 不正や誤りを防いで見つけ、会社の財産を守る', '方針と見積りを決める: 適切な会計方針を選んで続け、合理的に見積もる'],
          after: 'くわしい義務は次の L112 で学ぶ。'
        },
        {
          title: '監査人がいても、責任は取締役会に',
          paras: ['大きな会社では、外部監査人（external auditor）が財務諸表を調べ、適正かどうかの意見（audit opinion）を出す。', 'でも、財務諸表を作る責任は取締役（会）にある。経理の担当者に作業を任せても、責任は取締役に残る。監査人は作らないし、間違いを全部見つける約束もしない。'],
          note: { kind: 'tip', text: 'K1（2027年7月〜）では「ガバナンスを担う人の責任を説明する」として出る。中身はこのレッスンと L112 で足りる。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①財務諸表を作るのは監査人だと思う（作る責任は取締役。監査人は意見を出すだけ）。②株主が財務諸表を作ると思う（株主は受け取って読む側）。③経理担当者が作れば取締役の責任はなくなると思う（任せても責任は残る）。④ガバナンスを「帳簿のつけ方」のことだと思う（会社を方向づけ、コントロールする仕組み）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ガバナンス＝会社を方向づけ、コントロールする仕組み', '必要な理由: 持ち主（株主）と経営する人（取締役）が分かれているから', '財務諸表を作る責任は取締役会。監査人は確かめて意見を出すだけ']
        },
        {
          title: '英単語',
          words: [
            ['corporate governance', 'コーポレート・ガバナンス', '会社を方向づけ、コントロールする仕組み'],
            ['those charged with governance', '', 'ガバナンスを担う人（ふつうは取締役会）'],
            ['board of directors', 'ボード・オブ・ディレクターズ', '取締役会'],
            ['executive / non-executive directors', '', '業務執行取締役／非業務執行取締役（社外取締役）'],
            ['audit committee', 'オーディット・コミッティー', '監査委員会'],
            ['external auditor', 'エクスターナル・オーディター', '外部監査人'],
            ['internal control', 'インターナル・コントロール', '内部統制'],
            ['separation of ownership and control', '', '所有と経営の分離']
          ]
        }
      ],
      quiz: [
        { q: 'Who is responsible for the preparation of the financial statements of a limited liability company?', choices: ['The external auditors', 'The directors', 'The shareholders', 'The tax authorities'], answer: 1, explain: '作る責任は取締役。監査人は確かめて意見を出す、株主は受け取って読む側。' },
        { q: 'Which of the following best describes corporate governance?', choices: ['The system by which companies are directed and controlled', 'The process of recording transactions in the ledger accounts', 'The checking of the financial statements by the external auditors', 'The calculation of the tax payable by a company'], answer: 0, explain: 'キャドバリー報告書の定義そのまま。帳簿の記録や外部監査は、ガバナンスの中の一部の活動にすぎない。' },
        { q: '会社にガバナンスの仕組みが必要になるいちばんの理由は？', choices: ['会社は税金を払うから', '持ち主（株主）と経営する人（取締役）が分かれていることが多いから', '会社には従業員がいるから', '会社は必ず上場しているから'], answer: 1, explain: '所有と経営の分離。株主は中を毎日見られないので、取締役が正直に経営し報告するよう、任せ方とチェックのしかたを決めておく。' },
        { q: '監査委員会（audit committee）のメンバーとしてふさわしいのは？', choices: ['毎日の経理を担当している業務執行取締役', '経営から離れた立場の非業務執行取締役（社外取締役）', '会社の外部監査人', '会社にお金を貸している銀行の担当者'], answer: 1, explain: '監査委員会は財務報告と監査を見張る役なので、経営から離れた非業務執行取締役で作る。経理を担当する人が自分をチェックしても意味がない。' },
        { q: '会社の経理担当者が財務諸表を作り、外部監査人が意見を出した。あとで大きな間違いが見つかった。財務諸表を作る責任を負っていたのは？', choices: ['経理担当者だけ', '外部監査人', '取締役（会）', '株主'], answer: 2, explain: '作業を任せても、財務諸表の作成責任は取締役に残る。監査人は意見を出す役で、作成の責任者ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'L106-1', lesson: 'L106', q: 'sole trader とは？', a: '1人の人が持ち主で、自分で経営する事業（従業員がいてもよい）' },
    { id: 'L106-2', lesson: 'L106', q: 'partnership とは？', a: '2人以上が、利益を目的に一緒に事業をする形' },
    { id: 'L106-3', lesson: 'L106', q: '有限責任会社の持ち主と、経営する人は？', a: '持ち主は株主（shareholders）、経営するのは取締役（directors）' },
    { id: 'L106-4', lesson: 'L106', q: '法律上、持ち主と別の人になるのは？', a: '会社だけ。会計上は企業実体の公準でどの形も別として記録する' },
    { id: 'L106-5', lesson: 'L106', q: '会社でオーナーに渡す利益は何と呼ぶ？', a: 'dividends（配当）。個人事業では drawings' },
    { id: 'L106-6', lesson: 'L106', q: 'plc と Ltd の違いは？', a: 'plc は株を一般の人に売り出せる（上場できる）。Ltd は売り出せない' },
    { id: 'L107-1', lesson: 'L107', q: 'separate legal entity とは？', a: '法律上の別の人。会社の名前で財産を持ち、契約し、訴え・訴えられる' },
    { id: 'L107-2', lesson: 'L107', q: '個人事業主とパートナーの責任は？', a: '無限責任（unlimited liability）。足りなければ個人の財産で返す' },
    { id: 'L107-3', lesson: 'L107', q: 'joint and several liability とは？', a: '連帯責任。ほかのパートナーが払えなければ1人に全額を請求できる' },
    { id: 'L107-4', lesson: 'L107', q: '1株$2で500株、1株$1.20だけ払込済み。会社が倒れたら追加でいくら？', a: '500 × ($2 − $1.20) ＝ $400' },
    { id: 'L107-5', lesson: 'L107', q: '個人事業主の所得税（お店の口座から払った）と、株主でもある取締役の給料は？', a: '所得税は drawings（費用にしない）。取締役の給料は会社の費用' },
    { id: 'L107-7', lesson: 'L107', q: 'perpetual succession とは？', a: '株主が替わったり亡くなったりしても、会社が続くこと' },
    { id: 'L107-8', lesson: 'L107', q: '「有限責任」で責任が限られるのは誰？ 会社自身は？', a: '限られるのは株主。会社は自分の借金を、財産を全部使ってでも全額負う' },
    { id: 'L108-1', lesson: 'L108', q: '個人事業のメリットを2つ', a: '始めるのが簡単で安い。財務諸表を公開しなくてよい（全部自分で決められる）' },
    { id: 'L108-2', lesson: 'L108', q: 'パートナーシップのデメリットを2つ', a: '無限の連帯責任（他人の判断の借金も負う）。意見が割れる' },
    { id: 'L108-3', lesson: 'L108', q: '会社のメリットを3つ', a: '有限責任、お金を集めやすい、持ち主が替わっても続く' },
    { id: 'L108-4', lesson: 'L108', q: '会社のデメリットを3つ', a: '作る手間と費用、規制と監査、財務諸表の公開' },
    { id: 'L108-5', lesson: 'L108', q: '小さな会社で有限責任のメリットが薄れるのはなぜ？', a: '銀行が取締役の個人保証を求めることが多いから' },
    { id: 'L109-1', lesson: 'L109', q: 'IFRS財団（評議員会）の仕事は？', a: '各組織のメンバーの任命、資金集め、監督。自分では基準を作らない' },
    { id: 'L109-2', lesson: 'L109', q: 'IASB の仕事は？', a: 'IFRS Accounting Standards（会計基準）を作って公表する' },
    { id: 'L109-3', lesson: 'L109', q: '解釈指針委員会（IFRIC）の仕事は？', a: '基準の使い方の疑問を扱い、解釈を作る（IASB の承認を経て出る）' },
    { id: 'L109-4', lesson: 'L109', q: '諮問会議（Advisory Council）の仕事は？', a: '幅広い立場から、課題の優先順位などを助言する。基準は作らない' },
    { id: 'L109-5', lesson: 'L109', q: 'ISSB の仕事は？', a: 'サステナビリティ開示基準（IFRS S1・S2 など）を作る' },
    { id: 'L109-6', lesson: 'L109', q: 'IASB が基準を作る手順は？', a: '調査 → 討議資料 → 公開草案（exposure draft）→ 意見募集 → 最終の基準' },
    { id: 'L110-1', lesson: 'L110', q: 'IFRS Accounting Standards に含まれるものは？', a: 'IAS（前身の基準）、IFRS、解釈（IFRIC など）' },
    { id: 'L110-2', lesson: 'L110', q: '基準が決めている4つのことは？', a: '認識・測定・表示・開示' },
    { id: 'L110-3', lesson: 'L110', q: '世界共通の基準を使う理由は？', a: '比べられる・信頼できる・操作しにくい・国をまたぐ手間が減る' },
    { id: 'L110-4', lesson: 'L110', q: 'IFRS の法律の力はどこから来る？', a: '各国の法律や規制当局が使うと決めることから。IFRS 自体は法律ではない' },
    { id: 'L110-5', lesson: 'L110', q: '基準がない取引はどうする？', a: '経営者が判断で方針を決める。似た基準と概念フレームワークを参考にする' },
    { id: 'L111-1', lesson: 'L111', q: 'ガバナンスの定義は？', a: '会社を方向づけ、コントロールする仕組み（directed and controlled）' },
    { id: 'L111-2', lesson: 'L111', q: 'なぜガバナンスが必要？', a: '株主（持ち主）と取締役（経営する人）が分かれているから' },
    { id: 'L111-3', lesson: 'L111', q: 'those charged with governance は会社では誰？', a: 'ふつうは取締役会（board of directors）' },
    { id: 'L111-4', lesson: 'L111', q: '財務諸表を作る責任は誰にある？', a: '取締役（会）。監査人は確かめて意見を出すだけ' },
    { id: 'L111-5', lesson: 'L111', q: '監査委員会は誰で作る？', a: '経営から離れた非業務執行取締役（社外取締役）' }
  ]
});
