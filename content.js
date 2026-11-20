// ACCA FA 入門アプリのコンテンツ（データのみ）。アプリ本体は app.js。
// SVG は CSS 変数 --ink --quiet --edge --accent --accent-bg で色を決める（ライト/ダーク両対応）。
window.ACCA_CONTENT = {
  version: 1,
  lessons: [
    {
      id: 'L01',
      title: '会計ってなに？',
      goal: '会計がなんのためにあるかと、2枚の成績表の違いを言えるようになる',
      minutes: 10,
      recall: false,
      slides: [
        {
          title: 'まず自分のお金で考える',
          paras: ['会計は、お金の動きを記録して「調子はどう？」に答えること。英語では accounting。', '自分のお金の調子を知りたいとき、気になることは2つある。'],
          list: ['今、いくら持っていて、いくら借りている？（貯金、車、カードの支払い残り）', '今年1年で、いくら入って、いくら出ていった？（給料、家賃、食費）']
        },
        {
          title: '成績表は2枚',
          paras: ['1つ目はある1日の「写真」、2つ目は1年間の「動画」。会社もまったく同じで、この2枚の成績表を作る。'],
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="成績表は写真と動画の2枚" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">成績表は「写真」と「動画」の2枚</text><rect x="20" y="56" width="400" height="132" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="40" y="88" width="56" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="52" y="81" width="16" height="7" rx="2" fill="var(--accent)"/><circle cx="68" cy="108" r="11" fill="none" stroke="var(--accent)" stroke-width="2"/><text x="116" y="88" font-size="16" font-weight="600" fill="var(--ink)">財政状態計算書</text><text x="116" y="114" fill="var(--ink)">ある1日の持ち物と借金</text><text x="116" y="138" fill="var(--ink)">＝写真（12月31日など）</text><text x="116" y="164" font-size="12.5" fill="var(--quiet)">statement of financial position</text><rect x="20" y="204" width="400" height="132" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="40" y="236" width="56" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M62 246L80 256L62 266z" fill="var(--accent)"/><text x="116" y="236" font-size="16" font-weight="600" fill="var(--ink)">損益計算書</text><text x="116" y="262" fill="var(--ink)">1年間で稼いだ・使ったお金</text><text x="116" y="286" fill="var(--ink)">＝動画（1月〜12月など）</text><text x="116" y="312" font-size="12.5" fill="var(--quiet)">statement of profit or loss</text></svg>`,
          caption: '写真は「ある瞬間の状態」、動画は「その期間に起きたこと」。財政状態計算書は、昔の名前の balance sheet（バランスシート）でもよく呼ばれる。'
        },
        {
          title: 'もうけは引き算だけ',
          paras: ['給料が30万円、家賃や食費で出ていったのが25万円なら、手元に残るのは5万円。会社では、この残りを「もうけ（利益）」と呼ぶ。'],
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="もうけは稼いだお金から使ったお金を引いた残り" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">もうけ＝稼いだ − 使った</text><rect x="20" y="52" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">稼いだお金（給料）</text><text x="40" y="102" font-size="12.5" fill="var(--quiet)">income（収益）</text><text x="400" y="92" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">30万円</text><text x="220" y="144" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">−</text><rect x="20" y="152" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="180" font-size="16" font-weight="600" fill="var(--ink)">使ったお金（家賃・食費）</text><text x="40" y="202" font-size="12.5" fill="var(--quiet)">expenses（費用）</text><text x="400" y="192" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">25万円</text><text x="220" y="244" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">＝</text><rect x="20" y="252" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="280" font-size="16" font-weight="600" fill="var(--ink)">残ったお金＝もうけ</text><text x="40" y="302" font-size="12.5" fill="var(--ink)">profit（利益）</text><text x="400" y="292" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">5万円</text></svg>`
        },
        {
          title: 'お店でも同じ',
          paras: ['たこ焼きが $100 売れて、材料に $30、家賃に $20 使ったら、もうけは $100 − $50 = $50。ACCAの試験は金額が $ なので、お店の例は $ で書く。', '使った方が多いと、答えはマイナスになる。これが loss（損失、赤字）。'],
          formula: 'income − expenses ＝ profit'
        },
        {
          title: 'なぜ？ 成績表が2枚いる理由',
          paras: ['1枚だけでは、本当の調子が分からないから。', '貯金が1,000万円ある人が2人いる。'],
          list: ['Aさん: 宝くじが当たった。毎月の収入より出費が多い。', 'Bさん: 毎月きちんと稼いで、少しずつ貯めた。'],
          after: '写真（今の持ち物）だけだと2人は同じに見える。動画（1年間の動き）を見ると、Aさんはこのままだと減っていくと分かる。逆に、動画だけでは借金がいくら残っているかが分からない。だから2枚セットで見る。'
        },
        {
          title: '誰が成績表を見る？',
          paras: ['見る人によって、気にしていることが違う。'],
          list: ['お金を出したオーナー: ちゃんと稼いでいる？（動画）', 'お金を貸した銀行: 借金を返せる？（写真と動画の両方）', '税務署: もうけはいくら？（動画）']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['会計＝お金の動きを記録して、調子を伝えること', '成績表は2枚。写真＝財政状態計算書、動画＝損益計算書', 'もうけ＝稼いだ − 使った']
        },
        {
          title: '英単語',
          words: [
            ['accounting', 'アカウンティング', '会計'],
            ['income', 'インカム', '収益、稼いだお金'],
            ['expenses', 'エクスペンシズ', '費用、使ったお金'],
            ['profit', 'プロフィット', '利益、もうけ'],
            ['loss', 'ロス', '損失、赤字'],
            ['statement of financial position', '', '財政状態計算書（写真）'],
            ['statement of profit or loss', '', '損益計算書（動画）']
          ]
        }
      ],
      quiz: [
        { q: '「12月31日に、何を持っていていくら借りているか」が分かるのは？', choices: ['写真（財政状態計算書）', '動画（損益計算書）'], answer: 0, explain: 'ある1日の状態なので写真。' },
        { q: '稼いだお金が $200、使ったお金が $150。もうけは？', choices: ['$350', '$50', '$150', '$200'], answer: 1, explain: '$200 − $150 = $50。' },
        { q: '稼いだお金が $80、使ったお金が $100。結果は？', choices: ['$20 の profit', '$180 の profit', '$20 の loss', '$100 の loss'], answer: 2, explain: '使った方が $20 多いので、$20 の損失（loss）。' },
        { q: '宝くじでお金持ちになった人と、毎月稼いで貯めた人。違いが分かるのは？', choices: ['写真（財政状態計算書）', '動画（損益計算書）'], answer: 1, explain: '稼ぐ力は、期間の動きを見ないと分からない。' },
        { q: 'Income is $500 and expenses are $350. What is the profit?', choices: ['$850', '$150', '$350', '$500'], answer: 1, explain: '$500 − $350 = $150。' }
      ]
    },
    {
      id: 'L02',
      title: '資産＝資本＋負債',
      goal: '「持っているもの」と「そのお金の出どころ」が、いつも同じ金額になる理由を説明できるようになる',
      minutes: 10,
      recall: true,
      slides: [
        {
          title: '家と住宅ローンで考える',
          paras: ['3,000万円の家を買う。自分の貯金から500万円を出して、残り2,500万円は銀行の住宅ローン。', 'この家は、2つの角度から説明できる。'],
          list: ['何を持っている？ → 家 3,000万円', 'そのお金はどこから来た？ → 自分 500万円 ＋ 借りた 2,500万円']
        },
        {
          title: '左は持ち物、右は出どころ',
          paras: ['同じ家を、左は「持ち物」として、右は「お金の出どころ」として見ているだけ。だから左と右は必ず同じ金額になる。'],
          svg: `<svg viewBox="0 0 440 380" role="img" aria-label="家は自分のお金とローンでできている" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">家＝自分のお金＋ローン</text><text x="108" y="68" text-anchor="middle" fill="var(--quiet)">持っているもの</text><text x="332" y="68" text-anchor="middle" fill="var(--quiet)">お金の出どころ</text><rect x="20" y="84" width="176" height="232" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="108" y="184" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">家</text><text x="108" y="212" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">3,000万円</text><text x="108" y="240" text-anchor="middle" font-size="12.5" fill="var(--quiet)">assets（資産）</text><text x="220" y="208" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">＝</text><rect x="244" y="84" width="176" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="111" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">自分のお金 500万円</text><text x="332" y="132" text-anchor="middle" font-size="12.5" fill="var(--quiet)">capital（資本）</text><rect x="244" y="156" width="176" height="160" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="224" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">住宅ローン</text><text x="332" y="248" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">2,500万円</text><text x="332" y="272" text-anchor="middle" font-size="12.5" fill="var(--quiet)">liabilities（負債）</text><text x="220" y="352" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">左と右は、いつも同じ金額</text></svg>`,
          caption: 'この箱の形が、写真（財政状態計算書）そのもの。'
        },
        {
          title: '3つの言葉',
          list: ['資産（asset）: 持っているもの。家、現金、車', '負債（liability）: いつか返すもの。ローン、カードの支払い残り', '資本（capital）: 自分の取り分。equity（エクイティ）とも呼ぶ']
        },
        {
          title: 'お店とオーナーは別の人',
          paras: ['会計では、お店とオーナーを「別の人」として扱う。これを business entity concept（企業実体の公準）という。', 'あなたが自分の貯金 $1,000 をお店に入れて、銀行から $500 借りたとする。お店から見ると、$1,000 は「オーナーから預かったお金」なので資本、$500 は「銀行に返すお金」なので負債になる。']
        },
        {
          title: '買い物をしても合計は同じ',
          paras: ['たこ焼き器を $300 で買っても、現金がたこ焼き器に姿を変えただけ。合計は $1,500 のまま。'],
          svg: `<svg viewBox="0 0 440 384" role="img" aria-label="買い物をしても合計は変わらない" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">買い物をしても、合計は変わらない</text><text x="20" y="70" font-size="15" font-weight="600" fill="var(--ink)">① お店を始めたとき</text><rect x="20" y="84" width="176" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="137" text-anchor="middle" font-size="15" fill="var(--ink)">現金 $1,500</text><text x="220" y="139" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">＝</text><rect x="244" y="84" width="176" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="111" text-anchor="middle" font-size="15" fill="var(--ink)">資本 $1,000</text><rect x="244" y="136" width="176" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="163" text-anchor="middle" font-size="15" fill="var(--ink)">負債 $500</text><text x="20" y="222" font-size="15" font-weight="600" fill="var(--ink)">② たこ焼き器を $300 で買った後</text><rect x="20" y="236" width="176" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="263" text-anchor="middle" font-size="15" fill="var(--ink)">現金 $1,200</text><rect x="20" y="288" width="176" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="108" y="315" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">たこ焼き器 $300</text><text x="220" y="291" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">＝</text><rect x="244" y="236" width="176" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="263" text-anchor="middle" font-size="15" fill="var(--quiet)">資本 $1,000</text><rect x="244" y="288" width="176" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="315" text-anchor="middle" font-size="15" fill="var(--quiet)">負債 $500</text><text x="220" y="364" text-anchor="middle" font-size="14" fill="var(--ink)">左の中身が入れ替わっただけ。右はそのまま</text></svg>`
        },
        {
          title: 'もうけが出たら？',
          paras: ['たこ焼きが売れて、もうけが $50 出た。現金が $50 増えて、左の合計は $1,550。', 'もうけはオーナーのものなので、右の資本も $1,050 に増える。やっぱり左右は同じ金額になる。']
        },
        {
          title: 'なぜ？ 左と右が必ず同じになる理由',
          paras: ['持っているものは全部、どこかから来たから。そして出どころは2種類しかない。'],
          list: ['自分（オーナー）が出したお金 → 資本', '他の人から借りたお金 → 負債'],
          after: '財布の中の1万円札も、「自分のお金」か「借りたお金」のどちらか。出どころのないお金はない。だから持ち物の合計と出どころの合計は、いつも同じになる。',
          formula: 'assets ＝ capital ＋ liabilities'
        },
        {
          title: '本当の「自分の取り分」',
          paras: ['式を並べ替えると、資本＝資産 − 負債。', '家を3,000万円で売ってローン2,500万円を返すと、手元に500万円残る。これが本当の「自分の取り分」。', 'この先のレッスンで学ぶ記録のしかた（仕訳）も、この「持ち物＝出どころ」が土台になる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['お店とオーナーは別の人として扱う', '資産＝資本＋負債（持ち物＝出どころ）', 'もうけが出ると、資本が増える']
        },
        {
          title: '英単語',
          words: [
            ['asset', 'アセット', '資産、持っているもの'],
            ['liability', 'ライアビリティ', '負債、いつか返すもの'],
            ['capital', 'キャピタル', '資本、オーナーの取り分'],
            ['equity', 'エクイティ', 'capital と同じ意味'],
            ['accounting equation', '', '会計等式'],
            ['business entity concept', '', '企業実体の公準（お店とオーナーは別）']
          ]
        }
      ],
      quiz: [
        { q: '銀行からの借金はどれ？', choices: ['資産', '負債', '資本'], answer: 1, explain: 'いつか返すお金なので負債（liability）。' },
        { q: '資産が $2,000、負債が $800。資本は？', choices: ['$2,800', '$1,200', '$800', '$2,000'], answer: 1, explain: '資本＝資産 − 負債 なので $2,000 − $800。' },
        { q: '現金 $200 で料理用のナイフを買った。資産の合計は？', choices: ['増える', '減る', '変わらない'], answer: 2, explain: '現金がナイフに姿を変えただけ。' },
        { q: 'オーナーがお店に $1,000 を入れた。お店から見ると何？', choices: ['資産だけ増える話で、右側は関係ない', '資本（オーナーから預かったお金）', '負債（銀行から借りたお金）'], answer: 1, explain: 'お店とオーナーは別の人なので、「オーナーから預かったお金」＝資本。現金（資産）も同じだけ増える。' },
        { q: 'A business has assets of $5,000 and capital of $3,500. What are its liabilities?', choices: ['$1,500', '$3,500', '$8,500', '$5,000'], answer: 0, explain: '$5,000 = $3,500 + liabilities なので $1,500。$8,500 は足し算してしまったときの引っかけ。' }
      ]
    }
  ],
  // 復習カード（間隔をあけて繰り返す）。lesson のレッスンを終えると復習に加わる。
  cards: [
    { id: 'L01-1', lesson: 'L01', q: '会計をひとことで言うと？', a: 'お金の動きを記録して、調子を伝えること' },
    { id: 'L01-2', lesson: 'L01', q: '「写真」の成績表の名前と、分かることは？', a: '財政状態計算書。ある1日の持ち物と借金' },
    { id: 'L01-3', lesson: 'L01', q: '「動画」の成績表の名前と、分かることは？', a: '損益計算書。ある期間に稼いだ・使ったお金' },
    { id: 'L01-4', lesson: 'L01', q: 'なぜ成績表は2枚いる？', a: '写真だけでは稼ぐ力が分からず、動画だけでは借金の残りが分からないから' },
    { id: 'L01-5', lesson: 'L01', q: 'もうけの式は？', a: 'income − expenses ＝ profit（稼いだ − 使った）' },
    { id: 'L01-6', lesson: 'L01', q: 'income $300、expenses $320 なら？', a: '$20 の loss（赤字）' },
    { id: 'L01-7', lesson: 'L01', q: 'statement of financial position の昔の名前は？', a: 'balance sheet' },
    { id: 'L02-1', lesson: 'L02', q: '資産・負債・資本をひとことずつで言うと？', a: '持っているもの・いつか返すもの・オーナーの取り分' },
    { id: 'L02-2', lesson: 'L02', q: '会計等式は？', a: 'assets ＝ capital ＋ liabilities' },
    { id: 'L02-3', lesson: 'L02', q: 'なぜ左と右は必ず同じ金額？', a: '持ち物は全部、自分か借金のどちらかから来ているから。同じものを「持ち物」と「出どころ」の2方向から見ている' },
    { id: 'L02-4', lesson: 'L02', q: '3,000万円の家を、自分のお金500万円とローン2,500万円で買った。本当の自分の取り分は？', a: '500万円（売ってローンを返したら残る金額）' },
    { id: 'L02-5', lesson: 'L02', q: 'business entity concept とは？', a: 'お店とオーナーを別の人として扱うルール' },
    { id: 'L02-6', lesson: 'L02', q: '現金で機械を買うと、資産の合計は？', a: '変わらない。現金が機械に変わるだけ' },
    { id: 'L02-7', lesson: 'L02', q: 'もうけが出ると、右側のどこが増える？', a: '資本。もうけはオーナーのものだから' }
  ]
};
