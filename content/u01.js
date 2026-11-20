(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
 "unit": 1,
 "part": 1,
 "partTitle": "会計の土台",
 "lessons": [
  {
   "id": "L01",
   "no": 1,
   "title": "会計ってなに？",
   "goal": "会計がなんのためにあるかと、2枚の成績表の違いを言えるようになる",
   "minutes": 10,
   "recall": false,
   "exam": "both",
   "outcomes": [
    "A1(a)"
   ],
   "slides": [
    {
     "title": "まず自分のお金で考える",
     "paras": [
      "会計は、お金の動きを記録して「調子はどう？」に答えること。英語では accounting。",
      "自分のお金の調子を知りたいとき、気になることは2つある。"
     ],
     "list": [
      "今、いくら持っていて、いくら借りている？（貯金、車、カードの支払い残り）",
      "今年1年で、いくら入って、いくら出ていった？（給料、家賃、食費）"
     ]
    },
    {
     "title": "成績表は2枚",
     "paras": [
      "1つ目はある1日の「写真」、2つ目は1年間の「動画」。会社もまったく同じで、この2枚の成績表を作る。"
     ],
     "svg": "<svg viewBox=\"0 0 440 360\" role=\"img\" aria-label=\"成績表は写真と動画の2枚\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">成績表は「写真」と「動画」の2枚</text><rect x=\"20\" y=\"56\" width=\"400\" height=\"132\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><rect x=\"40\" y=\"88\" width=\"56\" height=\"40\" rx=\"6\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><rect x=\"52\" y=\"81\" width=\"16\" height=\"7\" rx=\"2\" fill=\"var(--accent)\"/><circle cx=\"68\" cy=\"108\" r=\"11\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"116\" y=\"88\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">財政状態計算書</text><text x=\"116\" y=\"114\" fill=\"var(--ink)\">ある1日の持ち物と借金</text><text x=\"116\" y=\"138\" fill=\"var(--ink)\">＝写真（12月31日など）</text><text x=\"116\" y=\"164\" font-size=\"12.5\" fill=\"var(--quiet)\">statement of financial position</text><rect x=\"20\" y=\"204\" width=\"400\" height=\"132\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><rect x=\"40\" y=\"236\" width=\"56\" height=\"40\" rx=\"6\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><path d=\"M62 246L80 256L62 266z\" fill=\"var(--accent)\"/><text x=\"116\" y=\"236\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">損益計算書</text><text x=\"116\" y=\"262\" fill=\"var(--ink)\">1年間で稼いだ・使ったお金</text><text x=\"116\" y=\"286\" fill=\"var(--ink)\">＝動画（1月〜12月など）</text><text x=\"116\" y=\"312\" font-size=\"12.5\" fill=\"var(--quiet)\">statement of profit or loss</text></svg>",
     "caption": "写真は「ある瞬間の状態」、動画は「その期間に起きたこと」。財政状態計算書は、昔の名前の balance sheet（バランスシート）でもよく呼ばれる。"
    },
    {
     "title": "もうけは引き算だけ",
     "paras": [
      "給料が30万円、家賃や食費で出ていったのが25万円なら、手元に残るのは5万円。会社では、この残りを「もうけ（利益）」と呼ぶ。"
     ],
     "svg": "<svg viewBox=\"0 0 440 340\" role=\"img\" aria-label=\"もうけは稼いだお金から使ったお金を引いた残り\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">もうけ＝稼いだ − 使った</text><rect x=\"20\" y=\"52\" width=\"400\" height=\"64\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"40\" y=\"80\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">稼いだお金（給料）</text><text x=\"40\" y=\"102\" font-size=\"12.5\" fill=\"var(--quiet)\">income（収益）</text><text x=\"400\" y=\"92\" text-anchor=\"end\" font-size=\"20\" font-weight=\"600\" fill=\"var(--ink)\">30万円</text><text x=\"220\" y=\"144\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"600\" fill=\"var(--ink)\">−</text><rect x=\"20\" y=\"152\" width=\"400\" height=\"64\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"40\" y=\"180\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">使ったお金（家賃・食費）</text><text x=\"40\" y=\"202\" font-size=\"12.5\" fill=\"var(--quiet)\">expenses（費用）</text><text x=\"400\" y=\"192\" text-anchor=\"end\" font-size=\"20\" font-weight=\"600\" fill=\"var(--ink)\">25万円</text><text x=\"220\" y=\"244\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"600\" fill=\"var(--ink)\">＝</text><rect x=\"20\" y=\"252\" width=\"400\" height=\"64\" rx=\"10\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"40\" y=\"280\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">残ったお金＝もうけ</text><text x=\"40\" y=\"302\" font-size=\"12.5\" fill=\"var(--ink)\">profit（利益）</text><text x=\"400\" y=\"292\" text-anchor=\"end\" font-size=\"20\" font-weight=\"600\" fill=\"var(--ink)\">5万円</text></svg>"
    },
    {
     "title": "お店でも同じ",
     "paras": [
      "たこ焼きが $100 売れて、材料に $30、家賃に $20 使ったら、もうけは $100 − $50 = $50。ACCAの試験は金額が $ なので、お店の例は $ で書く。",
      "使った方が多いと、答えはマイナスになる。これが loss（損失、赤字）。"
     ],
     "formula": "income − expenses ＝ profit"
    },
    {
     "title": "なぜ？ 成績表が2枚いる理由",
     "paras": [
      "1枚だけでは、本当の調子が分からないから。",
      "貯金が1,000万円ある人が2人いる。"
     ],
     "list": [
      "Aさん: 宝くじが当たった。毎月の収入より出費が多い。",
      "Bさん: 毎月きちんと稼いで、少しずつ貯めた。"
     ],
     "after": "写真（今の持ち物）だけだと2人は同じに見える。動画（1年間の動き）を見ると、Aさんはこのままだと減っていくと分かる。逆に、動画だけでは借金がいくら残っているかが分からない。だから2枚セットで見る。"
    },
    {
     "title": "誰が成績表を見る？",
     "paras": [
      "見る人によって、気にしていることが違う。"
     ],
     "list": [
      "お金を出したオーナー: ちゃんと稼いでいる？（動画）",
      "お金を貸した銀行: 借金を返せる？（写真と動画の両方）",
      "税務署: もうけはいくら？（動画）"
     ]
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "会計＝お金の動きを記録して、調子を伝えること",
      "成績表は2枚。写真＝財政状態計算書、動画＝損益計算書",
      "もうけ＝稼いだ − 使った"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "accounting",
       "アカウンティング",
       "会計"
      ],
      [
       "income",
       "インカム",
       "収益、稼いだお金"
      ],
      [
       "expenses",
       "エクスペンシズ",
       "費用、使ったお金"
      ],
      [
       "profit",
       "プロフィット",
       "利益、もうけ"
      ],
      [
       "loss",
       "ロス",
       "損失、赤字"
      ],
      [
       "statement of financial position",
       "",
       "財政状態計算書（写真）"
      ],
      [
       "statement of profit or loss",
       "",
       "損益計算書（動画）"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "「12月31日に、何を持っていていくら借りているか」が分かるのは？",
     "choices": [
      "写真（財政状態計算書）",
      "動画（損益計算書）"
     ],
     "answer": 0,
     "explain": "ある1日の状態なので写真。"
    },
    {
     "q": "稼いだお金が $200、使ったお金が $150。もうけは？",
     "choices": [
      "$350",
      "$50",
      "$150",
      "$200"
     ],
     "answer": 1,
     "explain": "$200 − $150 = $50。"
    },
    {
     "q": "稼いだお金が $80、使ったお金が $100。結果は？",
     "choices": [
      "$20 の profit",
      "$180 の profit",
      "$20 の loss",
      "$100 の loss"
     ],
     "answer": 2,
     "explain": "使った方が $20 多いので、$20 の損失（loss）。"
    },
    {
     "q": "宝くじでお金持ちになった人と、毎月稼いで貯めた人。違いが分かるのは？",
     "choices": [
      "写真（財政状態計算書）",
      "動画（損益計算書）"
     ],
     "answer": 1,
     "explain": "稼ぐ力は、期間の動きを見ないと分からない。"
    },
    {
     "q": "Income is $500 and expenses are $350. What is the profit?",
     "choices": [
      "$850",
      "$150",
      "$350",
      "$500"
     ],
     "answer": 1,
     "explain": "$500 − $350 = $150。"
    }
   ]
  },
  {
   "id": "L02",
   "no": 2,
   "title": "資産＝資本＋負債",
   "goal": "「持っているもの」と「そのお金の出どころ」が、いつも同じ金額になる理由を説明できるようになる",
   "minutes": 10,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "C1(c)"
   ],
   "slides": [
    {
     "title": "家と住宅ローンで考える",
     "paras": [
      "3,000万円の家を買う。自分の貯金から500万円を出して、残り2,500万円は銀行の住宅ローン。",
      "この家は、2つの角度から説明できる。"
     ],
     "list": [
      "何を持っている？ → 家 3,000万円",
      "そのお金はどこから来た？ → 自分 500万円 ＋ 借りた 2,500万円"
     ]
    },
    {
     "title": "左は持ち物、右は出どころ",
     "paras": [
      "同じ家を、左は「持ち物」として、右は「お金の出どころ」として見ているだけ。だから左と右は必ず同じ金額になる。"
     ],
     "svg": "<svg viewBox=\"0 0 440 380\" role=\"img\" aria-label=\"家は自分のお金とローンでできている\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">家＝自分のお金＋ローン</text><text x=\"108\" y=\"68\" text-anchor=\"middle\" fill=\"var(--quiet)\">持っているもの</text><text x=\"332\" y=\"68\" text-anchor=\"middle\" fill=\"var(--quiet)\">お金の出どころ</text><rect x=\"20\" y=\"84\" width=\"176\" height=\"232\" rx=\"10\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"108\" y=\"184\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"600\" fill=\"var(--ink)\">家</text><text x=\"108\" y=\"212\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"600\" fill=\"var(--ink)\">3,000万円</text><text x=\"108\" y=\"240\" text-anchor=\"middle\" font-size=\"12.5\" fill=\"var(--quiet)\">assets（資産）</text><text x=\"220\" y=\"208\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"600\" fill=\"var(--ink)\">＝</text><rect x=\"244\" y=\"84\" width=\"176\" height=\"64\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"111\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">自分のお金 500万円</text><text x=\"332\" y=\"132\" text-anchor=\"middle\" font-size=\"12.5\" fill=\"var(--quiet)\">capital（資本）</text><rect x=\"244\" y=\"156\" width=\"176\" height=\"160\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"224\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">住宅ローン</text><text x=\"332\" y=\"248\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">2,500万円</text><text x=\"332\" y=\"272\" text-anchor=\"middle\" font-size=\"12.5\" fill=\"var(--quiet)\">liabilities（負債）</text><text x=\"220\" y=\"352\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">左と右は、いつも同じ金額</text></svg>",
     "caption": "この箱の形が、写真（財政状態計算書）そのもの。"
    },
    {
     "title": "3つの言葉",
     "list": [
      "資産（asset）: 持っているもの。家、現金、車",
      "負債（liability）: いつか返すもの。ローン、カードの支払い残り",
      "資本（capital）: 自分の取り分。equity（エクイティ）とも呼ぶ"
     ]
    },
    {
     "title": "お店とオーナーは別の人",
     "paras": [
      "会計では、お店とオーナーを「別の人」として扱う。これを business entity concept（企業実体の公準）という。",
      "あなたが自分の貯金 $1,000 をお店に入れて、銀行から $500 借りたとする。お店から見ると、$1,000 は「オーナーから預かったお金」なので資本、$500 は「銀行に返すお金」なので負債になる。"
     ]
    },
    {
     "title": "買い物をしても合計は同じ",
     "paras": [
      "たこ焼き器を $300 で買っても、現金がたこ焼き器に姿を変えただけ。合計は $1,500 のまま。"
     ],
     "svg": "<svg viewBox=\"0 0 440 384\" role=\"img\" aria-label=\"買い物をしても合計は変わらない\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">買い物をしても、合計は変わらない</text><text x=\"20\" y=\"70\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">① お店を始めたとき</text><rect x=\"20\" y=\"84\" width=\"176\" height=\"96\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"108\" y=\"137\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--ink)\">現金 $1,500</text><text x=\"220\" y=\"139\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"600\" fill=\"var(--ink)\">＝</text><rect x=\"244\" y=\"84\" width=\"176\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"111\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--ink)\">資本 $1,000</text><rect x=\"244\" y=\"136\" width=\"176\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"163\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--ink)\">負債 $500</text><text x=\"20\" y=\"222\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">② たこ焼き器を $300 で買った後</text><rect x=\"20\" y=\"236\" width=\"176\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"108\" y=\"263\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--ink)\">現金 $1,200</text><rect x=\"20\" y=\"288\" width=\"176\" height=\"44\" rx=\"8\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"108\" y=\"315\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"600\" fill=\"var(--ink)\">たこ焼き器 $300</text><text x=\"220\" y=\"291\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"600\" fill=\"var(--ink)\">＝</text><rect x=\"244\" y=\"236\" width=\"176\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"263\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--quiet)\">資本 $1,000</text><rect x=\"244\" y=\"288\" width=\"176\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"332\" y=\"315\" text-anchor=\"middle\" font-size=\"15\" fill=\"var(--quiet)\">負債 $500</text><text x=\"220\" y=\"364\" text-anchor=\"middle\" font-size=\"14\" fill=\"var(--ink)\">左の中身が入れ替わっただけ。右はそのまま</text></svg>"
    },
    {
     "title": "もうけが出たら？",
     "paras": [
      "たこ焼きが売れて、もうけが $50 出た。現金が $50 増えて、左の合計は $1,550。",
      "もうけはオーナーのものなので、右の資本も $1,050 に増える。やっぱり左右は同じ金額になる。"
     ]
    },
    {
     "title": "なぜ？ 左と右が必ず同じになる理由",
     "paras": [
      "持っているものは全部、どこかから来たから。そして出どころは2種類しかない。"
     ],
     "list": [
      "自分（オーナー）が出したお金 → 資本",
      "他の人から借りたお金 → 負債"
     ],
     "after": "財布の中の1万円札も、「自分のお金」か「借りたお金」のどちらか。出どころのないお金はない。だから持ち物の合計と出どころの合計は、いつも同じになる。",
     "formula": "assets ＝ capital ＋ liabilities"
    },
    {
     "title": "本当の「自分の取り分」",
     "paras": [
      "式を並べ替えると、資本＝資産 − 負債。",
      "家を3,000万円で売ってローン2,500万円を返すと、手元に500万円残る。これが本当の「自分の取り分」。",
      "この先のレッスンで学ぶ記録のしかた（仕訳）も、この「持ち物＝出どころ」が土台になる。"
     ]
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "お店とオーナーは別の人として扱う",
      "資産＝資本＋負債（持ち物＝出どころ）",
      "もうけが出ると、資本が増える"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "asset",
       "アセット",
       "資産、持っているもの"
      ],
      [
       "liability",
       "ライアビリティ",
       "負債、いつか返すもの"
      ],
      [
       "capital",
       "キャピタル",
       "資本、オーナーの取り分"
      ],
      [
       "equity",
       "エクイティ",
       "capital と同じ意味"
      ],
      [
       "accounting equation",
       "",
       "会計等式"
      ],
      [
       "business entity concept",
       "",
       "企業実体の公準（お店とオーナーは別）"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "銀行からの借金はどれ？",
     "choices": [
      "資産",
      "負債",
      "資本"
     ],
     "answer": 1,
     "explain": "いつか返すお金なので負債（liability）。"
    },
    {
     "q": "資産が $2,000、負債が $800。資本は？",
     "choices": [
      "$2,800",
      "$1,200",
      "$800",
      "$2,000"
     ],
     "answer": 1,
     "explain": "資本＝資産 − 負債 なので $2,000 − $800。"
    },
    {
     "q": "現金 $200 で料理用のナイフを買った。資産の合計は？",
     "choices": [
      "増える",
      "減る",
      "変わらない"
     ],
     "answer": 2,
     "explain": "現金がナイフに姿を変えただけ。"
    },
    {
     "q": "オーナーがお店に $1,000 を入れた。お店から見ると何？",
     "choices": [
      "資産だけ増える話で、右側は関係ない",
      "資本（オーナーから預かったお金）",
      "負債（銀行から借りたお金）"
     ],
     "answer": 1,
     "explain": "お店とオーナーは別の人なので、「オーナーから預かったお金」＝資本。現金（資産）も同じだけ増える。"
    },
    {
     "q": "A business has assets of $5,000 and capital of $3,500. What are its liabilities?",
     "choices": [
      "$1,500",
      "$3,500",
      "$8,500",
      "$5,000"
     ],
     "answer": 0,
     "explain": "$5,000 = $3,500 + liabilities なので $1,500。$8,500 は足し算してしまったときの引っかけ。"
    }
   ]
  },
  {
   "id": "L03",
   "no": 3,
   "title": "5つの要素を正しく定義する",
   "goal": "資産・負債・資本・収益・費用を、試験で使う正式な定義で見分けられるようになる",
   "minutes": 12,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "A3(b)"
   ],
   "slides": [
    {
     "title": "分割払いのスマホは誰のもの？",
     "paras": [
      "L02 では、資産を「持っているもの」と覚えた。試験では、もう少し正確な定義が問われる。",
      "分割払いで買ったスマホは、まだ払い終わっていなくても、自分で自由に使えて売ることもできる。だから自分の資産。会社から借りている社用スマホは、毎日使っていても自分の資産ではない。"
     ],
     "after": "ポイントは「払い終わったか」ではなく「自分が自由にできるか（支配しているか）」。"
    },
    {
     "title": "定義は概念フレームワークにある",
     "paras": [
      "5つの定義は、IFRS のルールの土台になる「概念フレームワーク（Conceptual Framework for Financial Reporting）」に書いてある。財務諸表に載る項目は、必ずこの5つの要素（elements）のどれかになる。"
     ],
     "table": {
      "caption": "5つの要素と載る場所",
      "head": [
       "要素",
       "載る場所"
      ],
      "rows": [
       [
        "資産（asset）",
        "財政状態計算書"
       ],
       [
        "負債（liability）",
        "財政状態計算書"
       ],
       [
        "資本（equity）",
        "財政状態計算書"
       ],
       [
        "収益（income）",
        "損益計算書（一部は OCI、L06）"
       ],
       [
        "費用（expenses）",
        "損益計算書（一部は OCI、L06）"
       ]
      ]
     }
    },
    {
     "title": "資産の定義",
     "formula": "asset ＝ a present economic resource controlled by the entity as a result of past events",
     "list": [
      "present（今ある）: 将来手に入る予定のものは入らない",
      "economic resource（経済的資源）: お金などの得（economic benefits）を生む力がある権利",
      "controlled（支配している）: 使い方を決められ、他人に使わせないようにできる",
      "past events（過去の事象）: 買った・作ったなど、もう起きた取引の結果"
     ]
    },
    {
     "title": "たこ焼き屋で資産を見分ける",
     "list": [
      "ローンで買ったたこ焼き器 → 資産。借金が残っていても、使い方を決めるのはお店",
      "後払いで売った代金を受け取る権利（売掛金、trade receivables）→ 資産",
      "腕のいい店員 → 資産ではない。辞めることができるので、お店は支配できない",
      "来月買う予定の材料 → 資産ではない。まだ買っていない（過去の事象がない）"
     ],
     "note": {
      "kind": "warn",
      "text": "「払い終わっていないから資産ではない」も「毎日使っているから資産」も間違い。決め手は、お店が支配しているかどうか。"
     }
    },
    {
     "title": "負債の定義",
     "formula": "liability ＝ a present obligation of the entity to transfer an economic resource as a result of past events",
     "paras": [
      "obligation（義務）は「逃げられない約束」。transfer an economic resource は、お金などを払う・渡すこと。",
      "資産と同じく「今ある」「過去の事象の結果」がそろって、はじめて負債になる。"
     ]
    },
    {
     "title": "たこ焼き屋で負債を見分ける",
     "list": [
      "材料を後払いで買った代金（買掛金、trade payables）→ 負債。材料はもう受け取ったので、払う義務がある",
      "銀行からの借入金（loan）→ 負債",
      "来年払う予定の店員の給料 → 負債ではない。まだ働いてもらっていない（過去の事象がない）",
      "オーナーがお店に入れたお金 → 負債ではなく資本"
     ]
    },
    {
     "title": "資本の定義",
     "formula": "equity ＝ assets − liabilities",
     "paras": [
      "資本は、資産から負債を全部引いた残り。英語では the residual interest in the assets of the entity after deducting all its liabilities。",
      "資本だけは独自の条件がなく、「残り」で決まる。L02 の「本当の自分の取り分」と同じ。資産 − 負債は純資産（net assets）とも呼び、資本と同じ金額になる。"
     ]
    },
    {
     "title": "収益と費用の定義",
     "paras": [
      "収益（income）: 資産が増えるか負債が減って、資本が増えること。ただし、オーナーがお金を入れた分は除く。",
      "費用（expenses）: 資産が減るか負債が増えて、資本が減ること。ただし、オーナーへ渡した分は除く。"
     ],
     "list": [
      "income: increases in assets, or decreases in liabilities, that result in increases in equity, other than contributions from holders of equity claims",
      "expenses: decreases in assets, or increases in liabilities, that result in decreases in equity, other than distributions to holders of equity claims"
     ],
     "after": "holders of equity claims はオーナーのこと。例: 売上（revenue）は収益、家賃は費用。"
    },
    {
     "title": "なぜ？ オーナーとのやりとりを除く理由",
     "paras": [
      "オーナーが $1,000 を入れても、お店が稼いだわけではない。お金が「オーナーのポケット → お店」に動いただけ。これを収益にすると、何も売っていないのに「もうかった」ことになる。",
      "銀行から借りたお金も収益ではない。現金は増えるが、同じだけ負債も増えて、資本は変わらないから。"
     ],
     "note": {
      "kind": "tip",
      "text": "迷ったら「資本が増えたか？ それはオーナーが入れたからではないか？」の順に確かめる。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "資産＝過去の取引の結果、今お店が支配している経済的資源",
      "負債＝過去の取引の結果、今ある「払う・渡す」義務",
      "収益・費用は資本を増やす・減らすもの。オーナーとのやりとりは除く"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "Conceptual Framework",
       "コンセプチュアル・フレームワーク",
       "概念フレームワーク（IFRS の土台）"
      ],
      [
       "element",
       "エレメント",
       "要素"
      ],
      [
       "economic resource",
       "",
       "経済的資源"
      ],
      [
       "control",
       "コントロール",
       "支配"
      ],
      [
       "past event",
       "",
       "過去の事象"
      ],
      [
       "obligation",
       "オブリゲーション",
       "義務"
      ],
      [
       "residual interest",
       "",
       "残りの取り分（資本のこと）"
      ],
      [
       "net assets",
       "ネット・アセッツ",
       "純資産（資産 − 負債）"
      ],
      [
       "revenue",
       "レベニュー",
       "売上収益（売上）"
      ],
      [
       "holders of equity claims",
       "",
       "資本の持ち主（オーナー、株主）"
      ],
      [
       "trade receivables",
       "トレード・レシーバブルズ",
       "売掛金"
      ],
      [
       "trade payables",
       "トレード・ペイヤブルズ",
       "買掛金"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "たこ焼き屋の資産になるのはどれ？",
     "choices": [
      "腕がよくて人気の店員",
      "ローンで買い、まだ返済中の配達用バイク",
      "来月買う予定の新しい鉄板",
      "毎週来てくれる常連のお客さんたち"
     ],
     "answer": 1,
     "explain": "ローンが残っていても、使い方を決めるのはお店なので資産。店員やお客さんは辞めたり来なくなったりでき、お店は支配できない。来月の鉄板はまだ買っていない（過去の事象がない）。"
    },
    {
     "q": "たこ焼き屋の負債になるのはどれ？",
     "choices": [
      "来年払う予定の店員の給料",
      "材料を後払いで買い、まだ払っていない代金",
      "オーナーがお店に入れたお金",
      "お客さんに後払いで売った代金"
     ],
     "answer": 1,
     "explain": "材料はもう受け取ったので払う義務がある（買掛金）。来年の給料はまだ働いてもらっていないので義務がない。オーナーのお金は資本。お客さんの後払い代金は受け取る権利なので資産（売掛金）。"
    },
    {
     "q": "According to the Conceptual Framework, which of the following is the definition of a liability?",
     "choices": [
      "A present obligation of the entity to transfer an economic resource as a result of past events",
      "A present economic resource controlled by the entity as a result of past events",
      "The residual interest in the assets of the entity after deducting all its liabilities",
      "An amount that the entity expects to pay at some time in the future"
     ],
     "answer": 0,
     "explain": "2つ目は資産、3つ目は資本の定義。4つ目は「過去の事象」と「今ある義務」が抜けていて、来年の給料のようにまだ負債でないものまで入ってしまう。"
    },
    {
     "q": "Which of the following is income of the business?",
     "choices": [
      "Cash introduced by the owner",
      "A bank loan received",
      "Revenue from selling goods to customers",
      "Cash taken out of the business by the owner"
     ],
     "answer": 2,
     "explain": "オーナーが入れたお金は資本の拠出で、収益から除く。借入は負債も同じだけ増えるので資本が変わらず、収益ではない。オーナーが持ち出したお金は資本が減るが、収益とは逆の話。"
    },
    {
     "q": "資本（equity）の定義として正しいのは？",
     "choices": [
      "資産と負債を足した金額",
      "資産から負債を全部引いた残り",
      "オーナーが最初に入れたお金だけ",
      "お店にある現金の残高"
     ],
     "answer": 1,
     "explain": "資本は残り（residual interest）。もうけで増えたりするので、最初に入れたお金だけではない。足し算は L02 の等式の引っかけ。"
    },
    {
     "q": "According to the Conceptual Framework, which of the following is the definition of expenses?",
     "choices": [
      "Increases in assets, or decreases in liabilities, that result in increases in equity, other than contributions from holders of equity claims",
      "All cash payments made by the entity during the period",
      "Decreases in assets, or increases in liabilities, that result in decreases in equity, other than distributions to holders of equity claims",
      "Decreases in assets, or increases in liabilities, including amounts taken out of the business by the owner"
     ],
     "answer": 2,
     "explain": "1つ目は収益の定義。現金の支払いがすべて費用とは限らない（借入の返済は負債が減るだけ）。オーナーが持ち出した分（引出し）は費用から除くので、4つ目は間違い。"
    }
   ]
  },
  {
   "id": "L04",
   "no": 4,
   "title": "取引で等式を動かす（掛け・借入・損失）",
   "goal": "取引ごとに資産・負債・資本がどう動くかを判断し、取引の後の金額を計算できるようになる",
   "minutes": 14,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "C1(c)",
    "B1(a)vii"
   ],
   "slides": [
    {
     "title": "どの出来事にも2つの面がある",
     "paras": [
      "スマホを2万円の分割払いで買うと、スマホ（持ち物）が2万円増えて、支払い残り（借金）も2万円増える。",
      "友だちに貸していた5,000円が返ってくると、財布の現金は増えるが、「返してもらう権利」が同じだけ減る。",
      "どんな出来事も、必ず2か所が同じ金額だけ動く。これを二重性（duality）という。"
     ]
    },
    {
     "title": "掛けで買う・掛けで売る",
     "paras": [
      "後で払う約束で買うのが「掛けで買う（buy on credit）」、後で受け取る約束で売るのが「掛けで売る（sell on credit）」。",
      "掛けで売ると売掛金（trade receivables、資産）が増え、掛けで買うと買掛金（trade payables、負債）が増える。売るための商品や材料は、棚卸資産（inventory、在庫）という資産になる。"
     ]
    },
    {
     "title": "取引と等式の動き",
     "table": {
      "caption": "「＋」は増える、「−」は減る",
      "head": [
       "取引",
       "資産",
       "負債・資本"
      ],
      "rows": [
       [
        "現金で機械を買う",
        "＋機械 −現金",
        "変化なし"
       ],
       [
        "在庫を掛けで買う",
        "＋在庫",
        "＋買掛金"
       ],
       [
        "買掛金を現金で払う",
        "−現金",
        "−買掛金"
       ],
       [
        "銀行から借りる",
        "＋現金",
        "＋借入金"
       ],
       [
        "借入金を返す",
        "−現金",
        "−借入金"
       ],
       [
        "オーナーがお金を入れる",
        "＋現金",
        "＋資本"
       ],
       [
        "家賃を現金で払う",
        "−現金",
        "−資本（費用）"
       ]
      ]
     }
    },
    {
     "title": "売ると、差額がもうけになる",
     "paras": [
      "原価（cost）$150 の在庫を $400 の現金で売った。在庫 $150 が出ていき、現金 $400 が入るので、資産は差し引き $250 増える。",
      "この $250 がもうけ。もうけはオーナーのものなので、資本も $250 増える。左右とも $250 ずつ増えて、等式は崩れない。"
     ],
     "formula": "資産の増加 $250 ＝ 資本の増加 $250"
    },
    {
     "title": "掛けで売っても、もうけは出る",
     "paras": [
      "同じ在庫を掛けで $400 で売ると、現金は増えない。代わりに売掛金が $400 増え、在庫が $150 減る。もうけは同じ $250。",
      "つまり、もうけが出ても現金が増えるとは限らない。L02 の「もうけ $50 → 現金 $50 増」は、現金で売った場合だけの話。利益と現金の違いは、キャッシュフローのレッスンでくわしく学ぶ。"
     ]
    },
    {
     "title": "損失が出たら",
     "paras": [
      "原価 $300 の在庫が売れ残り、$250 の現金で売った。現金 $250 が入り、在庫 $300 が出ていくので、資産は $50 減る。",
      "この $50 が損失（loss）。資本も $50 減って、左右はまたそろう。家賃などの費用を払ったときも同じで、現金が減った分だけ資本が減る。"
     ]
    },
    {
     "title": "例題: 4つの取引を追いかける",
     "example": {
      "problem": "たこ焼き屋の今の状態: 現金 $1,200、たこ焼き器 $300、資本 $1,000、借入金 $500。次の取引の後、資産・負債・資本はいくら？ ①材料 $200 を掛けで買う ②原価 $150 分の材料で作ったたこ焼きを、$400 の現金で売る ③買掛金 $200 を現金で払う ④銀行から $1,000 を借りる",
      "steps": [
       "スタート: 資産 $1,500（現金 $1,200 ＋ たこ焼き器 $300）＝ 資本 $1,000 ＋ 負債 $500",
       "① 在庫 ＋$200、買掛金 ＋$200 → 資産 $1,700 ＝ 資本 $1,000 ＋ 負債 $700",
       "② 現金 ＋$400、在庫 −$150、もうけ $250 → 資産 $1,950 ＝ 資本 $1,250 ＋ 負債 $700",
       "③ 現金 −$200、買掛金 −$200 → 資産 $1,750 ＝ 資本 $1,250 ＋ 負債 $500",
       "④ 現金 ＋$1,000、借入金 ＋$1,000 → 資産 $2,750 ＝ 資本 $1,250 ＋ 負債 $1,500"
      ],
      "answer": "資産 $2,750、負債 $1,500、資本 $1,250。資本が動いたのは②のもうけだけ"
     }
    },
    {
     "title": "なぜ？ 等式が崩れない理由",
     "paras": [
      "取引は必ず2か所を同じ金額だけ動かすから。動き方は4つの形しかない。"
     ],
     "list": [
      "左の中で入れ替わる（現金で機械を買う）",
      "左右が一緒に増える（掛けで買う、借りる、もうける）",
      "左右が一緒に減る（払う、返す、損をする）",
      "右の中で入れ替わる（電気代の請求が来たがまだ払っていない: 負債＋、資本−）"
     ],
     "after": "この二重性が、次の部で学ぶ複式簿記（double entry）の土台になる。"
    },
    {
     "title": "よくある間違い",
     "note": {
      "kind": "warn",
      "text": "掛けで買っても資本は変わらない。在庫（資産）と買掛金（負債）が同じだけ増えるだけ。資本が動くのは、もうけ・損・費用が出たときと、オーナーとのやりとりのとき。また、借りたお金はもうけではない。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "どの取引も2か所が同じ金額だけ動く（二重性）",
      "掛けで売る→売掛金（資産）、掛けで買う→買掛金（負債）",
      "資本が動くのは、もうけ・損・費用と、オーナーとのやりとりだけ"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "duality",
       "デュアリティ",
       "二重性（取引は必ず2か所が動く）"
      ],
      [
       "dual effect / dual aspect",
       "",
       "二重性の別の言い方"
      ],
      [
       "on credit",
       "オン・クレジット",
       "掛けで（後払いで）"
      ],
      [
       "inventory",
       "インベントリー",
       "棚卸資産（在庫）"
      ],
      [
       "cost",
       "コスト",
       "原価（仕入れた金額）"
      ],
      [
       "loan",
       "ローン",
       "借入金"
      ],
      [
       "double entry",
       "ダブル・エントリー",
       "複式簿記"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "在庫 $500 を掛けで買った。等式はどう動く？",
     "choices": [
      "資産 ＋$500、負債 ＋$500",
      "資産 ＋$500、資本 ＋$500",
      "資産 −$500、負債 ＋$500",
      "資産 ＋$500、資産 −$500"
     ],
     "answer": 0,
     "explain": "在庫（資産）が増え、払う義務の買掛金（負債）も増える。資本が増えるのはもうけが出たときなので、買っただけでは増えない。「資産＋、資産−」は現金で買ったときの形。"
    },
    {
     "q": "Which of the following transactions would increase both total assets and total liabilities?",
     "choices": [
      "Paying a supplier $300 in cash",
      "Buying a machine for $300 in cash",
      "Receiving a bank loan of $300",
      "The owner paying $300 cash into the business"
     ],
     "answer": 2,
     "explain": "借入は現金（資産）と借入金（負債）が両方増える。仕入先への支払いは両方減る。現金で機械を買うのは資産の中の入れ替え。オーナーが入れたお金は負債ではなく資本が増える。"
    },
    {
     "q": "A business sold goods which had cost $600 for $900 on credit. What is the effect on the accounting equation?",
     "choices": [
      "Assets +$900, capital +$900",
      "Assets +$300, capital +$300",
      "Assets +$300, liabilities +$300",
      "Assets +$900, liabilities +$900"
     ],
     "answer": 1,
     "explain": "売掛金 ＋$900、在庫 −$600 で資産は差し引き ＋$300。もうけ $300 で資本も ＋$300。在庫の減少を忘れると $900 にしてしまう。売掛金は受け取る権利なので負債ではない。"
    },
    {
     "q": "お店の資産は $8,000、負債は $3,000。原価 $700 の在庫を $500 の現金で売った。取引の後の資本はいくら？",
     "type": "number",
     "answer": 4800,
     "unit": "$",
     "explain": "取引前の資本は $8,000 − $3,000 ＝ $5,000。原価より $200 安く売ったので $200 の損失。$5,000 − $200 ＝ $4,800。"
    },
    {
     "q": "電気代 $80 の請求書が届いたが、まだ払っていない。正しい動きは？",
     "choices": [
      "資産 −$80、資本 −$80",
      "負債 ＋$80、資本 −$80",
      "負債 ＋$80、資産 ＋$80",
      "何も動かない（払うまで記録しない）"
     ],
     "answer": 1,
     "explain": "払う義務（負債）が増え、電気代は費用なので資本が減る。右の中の入れ替わり。現金はまだ減っていないので資産は動かない。電気はもう使ったので、払う前でも記録する。"
    },
    {
     "q": "A business has assets of $12,000 and liabilities of $4,000. It then borrows $2,000 from a bank and pays $500 of rent in cash. What is its capital after these transactions?",
     "type": "number",
     "answer": 7500,
     "unit": "$",
     "explain": "最初の資本は $12,000 − $4,000 ＝ $8,000。借入は資産と負債が同じだけ増えるので資本は変わらない。家賃 $500 は費用なので資本が減る。$8,000 − $500 ＝ $7,500。"
    }
   ]
  },
  {
   "id": "L05",
   "no": 5,
   "title": "引出しと期末資本の式",
   "goal": "引出しを正しく扱い、期首と期末の資本（純資産）から利益を逆算できるようになる",
   "minutes": 14,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "C1(c)",
    "G6(a)i"
   ],
   "slides": [
    {
     "title": "お店のお金で夕食代を払ったら",
     "paras": [
      "自分でたこ焼き屋をやっていて、お店の売上金から1万円を出し、家族の夕食代に使った。",
      "お店とオーナーは別の人（L02）。だからこれは「お店の費用」ではない。オーナーが、お店から自分の取り分を持ち出しただけ。これを引出し（drawings）という。"
     ]
    },
    {
     "title": "引出しの形はいろいろ",
     "list": [
      "お店の現金・預金を私用に使う",
      "お店の商品（在庫）を家に持ち帰る。金額は売値ではなく原価で数える",
      "オーナー個人の支払い（自宅の家賃、オーナー個人の税金など）を、お店の口座から払う"
     ],
     "after": "どれも「お店の資産が減って、資本が減る」。費用ではないので、もうけ（利益）の計算には入れない。"
    },
    {
     "title": "資本は4つの理由でしか動かない",
     "formula": "期末資本 ＝ 期首資本 ＋ 資本の拠出 ＋ 利益 − 引出し",
     "paras": [
      "期首（opening）は期間の始め、期末（closing）は終わり。資本の拠出（capital introduced）は、オーナーが期間中に追加で入れたお金や物（自分の車をお店用にした等）。損失のときは「＋利益」がマイナスになる。",
      "英語では closing capital = opening capital + capital introduced + profit − drawings。"
     ]
    },
    {
     "title": "財政状態計算書での見せ方",
     "paras": [
      "個人のお店の財政状態計算書では、資本の動きをこの形で書く。マイナスはかっこで表す。"
     ],
     "table": {
      "caption": "資本の部（個人のお店の例）",
      "head": [
       "Capital",
       "$"
      ],
      "rows": [
       [
        "Opening capital",
        "8,000"
       ],
       [
        "Add: capital introduced",
        "2,000"
       ],
       [
        "Add: profit for the year",
        "4,500"
       ],
       [
        "Less: drawings",
        "(3,000)"
       ]
      ],
      "total": [
       "Closing capital",
       "11,500"
      ]
     }
    },
    {
     "title": "純資産の変化から利益を逆算する",
     "paras": [
      "資本は資産 − 負債（純資産、net assets）と同じ金額だった（L03）。だから期首と期末の純資産が分かれば、式を並べ替えて利益を出せる。",
      "記録がそろっていないお店（不完全記録、incomplete records）で利益を出すときによく使う方法。"
     ],
     "formula": "利益 ＝ 期末純資産 − 期首純資産 − 資本の拠出 ＋ 引出し"
    },
    {
     "title": "なぜ？ 入れた分は引き、持ち出した分は足す",
     "paras": [
      "純資産が増えた理由は、お店が稼いだからとは限らない。オーナーがお金を入れても増える。だから資本の拠出は引いて、稼いだ分だけを残す。",
      "引出しは逆。オーナーが持ち出しただけで、お店が損をしたわけではないのに純資産は減っている。だから「持ち出さなかったら、いくら増えていたか」に戻すために足す。"
     ]
    },
    {
     "title": "例題: 純資産から利益を出す",
     "example": {
      "problem": "あるお店の期首純資産は $8,000、期末純資産は $11,500。期中にオーナーが $2,000 を追加で入れた。また、オーナーはお店の現金 $2,600 を私用に使い、原価 $400（売値 $600）の商品を家に持ち帰った。今年の利益は？",
      "steps": [
       "引出しを合計する: $2,600 ＋ $400 ＝ $3,000（商品は原価で数える）",
       "純資産の増加: $11,500 − $8,000 ＝ $3,500",
       "資本の拠出を引く: $3,500 − $2,000 ＝ $1,500",
       "引出しを足す: $1,500 ＋ $3,000 ＝ $4,500",
       "検算: $8,000 ＋ $2,000 ＋ $4,500 − $3,000 ＝ $11,500"
      ],
      "answer": "利益は $4,500"
     }
    },
    {
     "title": "抜けているのが引出しでも同じ式",
     "example": {
      "problem": "期首資本 $6,000、期末資本 $7,500。今年の利益は $4,000 で、資本の拠出はない。引出しはいくら？",
      "steps": [
       "式に入れる: $7,500 ＝ $6,000 ＋ $0 ＋ $4,000 − 引出し",
       "右の引出し以外を計算: $6,000 ＋ $4,000 ＝ $10,000",
       "引出し ＝ $10,000 − $7,500 ＝ $2,500"
      ],
      "answer": "引出しは $2,500"
     },
     "note": {
      "kind": "tip",
      "text": "4つのうち、どれか1つが抜けていても、同じ式に入れれば求められる。"
     }
    },
    {
     "title": "よくある間違い",
     "note": {
      "kind": "warn",
      "text": "いちばん多いのは、引出しを足すのを忘れることと、資本の拠出を足してしまうこと。「入れた分は引く、持ち出した分は足す」と覚える。引出しを費用として利益から引くのも間違い。答えがマイナスになったら損失（loss）。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "引出しは費用ではなく、資本を直接減らす（商品は原価で数える）",
      "期末資本 ＝ 期首資本 ＋ 資本の拠出 ＋ 利益 − 引出し",
      "利益 ＝ 純資産の増加 − 資本の拠出 ＋ 引出し"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "drawings",
       "ドローイングス",
       "引出し（オーナーの持ち出し）"
      ],
      [
       "opening capital",
       "オープニング・キャピタル",
       "期首資本"
      ],
      [
       "closing capital",
       "クロージング・キャピタル",
       "期末資本"
      ],
      [
       "capital introduced",
       "キャピタル・イントロデュースト",
       "資本の拠出（追加の元入れ）"
      ],
      [
       "net assets",
       "ネット・アセッツ",
       "純資産（資産 − 負債）"
      ],
      [
       "profit for the year",
       "",
       "当期の利益"
      ],
      [
       "incomplete records",
       "インコンプリート・レコーズ",
       "不完全記録"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "オーナーがお店の現金 $300 で、自分の家の電気代を払った。正しい扱いは？",
     "choices": [
      "お店の費用（電気代）",
      "引出し（資本が減る）",
      "お店の負債",
      "記録しない"
     ],
     "answer": 1,
     "explain": "自分の家の支払いなので、お店の費用ではなく引出し。お店の現金は実際に減っているので、記録しないのは間違い。払い終わっているので負債でもない。"
    },
    {
     "q": "The net assets of a business were $10,000 at the start of the year and $9,000 at the end of the year. No capital was introduced. Drawings were $2,500. What was the profit for the year?",
     "type": "number",
     "answer": 1500,
     "unit": "$",
     "explain": "$9,000 − $10,000 ＋ $2,500 ＝ $1,500 の利益。純資産は減ったが、それはオーナーが $2,500 持ち出したから。引出しを足し忘れると $1,000 の損失と間違える。"
    },
    {
     "q": "A business had opening capital of $6,000 and closing capital of $5,000. During the year the owner introduced capital of $1,000 and took drawings of $500. What was the result for the year?",
     "choices": [
      "Profit of $1,500",
      "Loss of $1,500",
      "Loss of $500",
      "Profit of $500"
     ],
     "answer": 1,
     "explain": "$5,000 − $6,000 − $1,000 ＋ $500 ＝ −$1,500 で損失。Loss of $500 は資本の拠出を引き忘れた答え。Profit of $500 は資本の拠出を足してしまった答え。"
    },
    {
     "q": "原価 $200、売値 $350 の商品を、オーナーが家に持ち帰った。引出しの金額は？",
     "choices": [
      "$350",
      "$200",
      "$150",
      "$0（売上ではないので記録しない）"
     ],
     "answer": 1,
     "explain": "商品の引出しは原価で数える。売値で数えると、売っていないのにもうけが出たことになってしまう。お店の在庫は実際に減っているので、記録しないのも間違い。"
    },
    {
     "q": "期首: 資産 $15,000、負債 $6,000。期末: 資産 $20,000、負債 $7,000。期中の資本の拠出は $3,000、引出しは $4,000。今年の利益は？",
     "type": "number",
     "answer": 5000,
     "unit": "$",
     "explain": "期首純資産 $9,000、期末純資産 $13,000。増加 $4,000 − 資本の拠出 $3,000 ＋ 引出し $4,000 ＝ $5,000。検算: $9,000 ＋ $3,000 ＋ $5,000 − $4,000 ＝ $13,000。"
    },
    {
     "q": "Which of the following correctly calculates closing capital?",
     "choices": [
      "Opening capital + profit + drawings - capital introduced",
      "Opening capital + capital introduced + profit - drawings",
      "Opening capital - capital introduced + profit + drawings",
      "Opening capital + capital introduced - profit - drawings"
     ],
     "answer": 1,
     "explain": "オーナーが入れた分と利益で資本は増え、持ち出した分で減る。利益を求める式（引出しを足し、拠出を引く）と混ぜると、ほかの選択肢のようになる。"
    }
   ]
  },
  {
   "id": "L06",
   "no": 6,
   "title": "4つの財務諸表とその目的",
   "goal": "4つの財務諸表がそれぞれ何を伝えるかを説明し、情報がどれに載るかを判断できるようになる",
   "minutes": 12,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "A3(a)"
   ],
   "slides": [
    {
     "title": "家計を4つの角度で見る",
     "paras": [
      "L01 では「写真」と「動画」の2枚を学んだ。実は会社の成績表は全部で4枚ある。家計で言うと次の4つ。"
     ],
     "list": [
      "今の貯金とローンの残り（写真）",
      "1年の収入と生活費（動画）",
      "自分の取り分が、1年でなぜ増えた・減ったか",
      "現金がどこから入り、何に使われたか"
     ]
    },
    {
     "title": "写真1枚と動画3本",
     "svg": "<svg viewBox=\"0 0 440 300\" role=\"img\" aria-label=\"期首と期末の財政状態計算書を3つの計算書がつなぐ\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">期首と期末の写真を、3本の動画がつなぐ</text><rect x=\"20\" y=\"70\" width=\"100\" height=\"160\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"70\" y=\"138\" text-anchor=\"middle\" fill=\"var(--ink)\">1月1日</text><text x=\"70\" y=\"160\" text-anchor=\"middle\" fill=\"var(--ink)\">の写真</text><text x=\"70\" y=\"190\" text-anchor=\"middle\" font-size=\"12.5\" fill=\"var(--quiet)\">SFP</text><rect x=\"132\" y=\"62\" width=\"176\" height=\"176\" rx=\"10\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><rect x=\"142\" y=\"74\" width=\"156\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"220\" y=\"101\" text-anchor=\"middle\" fill=\"var(--ink)\">損益計算書</text><rect x=\"142\" y=\"128\" width=\"156\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"220\" y=\"155\" text-anchor=\"middle\" fill=\"var(--ink)\">持分変動計算書</text><rect x=\"142\" y=\"182\" width=\"156\" height=\"44\" rx=\"8\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"220\" y=\"209\" text-anchor=\"middle\" fill=\"var(--ink)\">CF計算書</text><rect x=\"320\" y=\"70\" width=\"100\" height=\"160\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"370\" y=\"138\" text-anchor=\"middle\" fill=\"var(--ink)\">12月31日</text><text x=\"370\" y=\"160\" text-anchor=\"middle\" fill=\"var(--ink)\">の写真</text><text x=\"370\" y=\"190\" text-anchor=\"middle\" font-size=\"12.5\" fill=\"var(--quiet)\">SFP</text><text x=\"220\" y=\"272\" text-anchor=\"middle\" fill=\"var(--ink)\">1年間に起きたことを3つの角度で見る</text></svg>",
     "caption": "財政状態計算書（SFP）だけが「ある1日」の写真。残りの3つは、期首から期末までの1年間に起きたことを示す。"
    },
    {
     "title": "SFP と SPLOCI",
     "paras": [
      "財政状態計算書（statement of financial position、SFP）は、期末日の資産・負債・資本を示す。会社の財政状態（financial position）が分かる。",
      "損益及びその他の包括利益計算書（statement of profit or loss and other comprehensive income、SPLOCI）は、1年間の収益と費用、つまり業績（financial performance）を示す。"
     ]
    },
    {
     "title": "その他の包括利益（OCI）とは",
     "paras": [
      "SPLOCI は2段。上の段が損益計算書（SPL）で、当期の利益（profit for the year）を出す。",
      "下の段がその他の包括利益（other comprehensive income、OCI）。代表例は、土地や建物を再評価（revaluation）して帳簿の金額を上げたときの値上がり益。売っていない値上がりなので、ふだんのもうけと分けて書く。たまった値上がり益は、資本の中の再評価剰余金（revaluation surplus）になる。"
     ],
     "formula": "profit for the year ＋ OCI ＝ total comprehensive income"
    },
    {
     "title": "SOCE: 資本がなぜ変わったか",
     "paras": [
      "持分変動計算書（statement of changes in equity、SOCE）は、期首から期末まで資本がどう増減したかを示す。",
      "会社では、オーナー（株主）がお金を入れることを株式の発行、オーナーへの分配を配当（dividends）と呼ぶ。主な動きは、包括利益（増える）、株式の発行（増える）、配当（減る）。L05 の期末資本の式を、会社向けにくわしくした表と考えればよい。"
     ]
    },
    {
     "title": "キャッシュフロー計算書",
     "paras": [
      "キャッシュフロー計算書（statement of cash flows）は、1年間の現金の出入りを3つに分けて示す。"
     ],
     "list": [
      "営業活動（operating activities）: 本業で入った・出た現金",
      "投資活動（investing activities）: 機械や建物の購入・売却",
      "財務活動（financing activities）: 借入と返済、株式の発行、配当の支払い"
     ],
     "after": "L04 のとおり、利益が出ても現金が増えるとは限らない。利益が出ていても現金が足りず、支払えなくなることがある。"
    },
    {
     "title": "なぜ？ 4枚いる理由",
     "list": [
      "SFP: 期末に、借りているお金に見合う資産があるか",
      "SPLOCI: 1年でどれだけ稼げたか",
      "SOCE: 資本の増減が、稼いだからか、オーナーとのやりとりからか",
      "CF: 実際の現金が足りているか（利益とは別）"
     ],
     "after": "1枚では見えないことを、別の角度から補い合っている。"
    },
    {
     "title": "完全な1組の財務諸表",
     "paras": [
      "IFRS のルールでは、この4つの計算書に注記（notes）を加えたものが「完全な1組の財務諸表（a complete set of financial statements）」になる。注記は、数字の中身や使った会計方針を説明する部分。前の年の数字（比較情報）も並べて示す。",
      "会長の挨拶（chairman's statement）や経営者の報告書は、年次報告書に一緒に入っていても財務諸表には含まれない。"
     ]
    },
    {
     "title": "よくある間違い",
     "note": {
      "kind": "warn",
      "text": "SFP だけは「ある1日」の状態で、残り3つは「1年間」の動き。見出しも違い、SFP は「as at 31 December 20X1」、ほかは「for the year ended 31 December 20X1」と書く。「SFP for the year ended」は間違い。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "SFP＝期末の財政状態、SPLOCI＝1年の業績（利益＋OCI）",
      "SOCE＝資本の増減、CF＝現金の出入り（営業・投資・財務）",
      "4つの計算書＋注記で、完全な1組の財務諸表"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "statement of profit or loss and other comprehensive income (SPLOCI)",
       "",
       "損益及びその他の包括利益計算書"
      ],
      [
       "other comprehensive income (OCI)",
       "",
       "その他の包括利益"
      ],
      [
       "total comprehensive income",
       "",
       "包括利益合計"
      ],
      [
       "statement of changes in equity (SOCE)",
       "",
       "持分変動計算書"
      ],
      [
       "statement of cash flows",
       "",
       "キャッシュフロー計算書"
      ],
      [
       "notes",
       "ノーツ",
       "注記"
      ],
      [
       "as at / for the year ended",
       "",
       "〜時点の / 〜に終わる1年間の"
      ],
      [
       "dividends",
       "ディビデンズ",
       "配当"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "Which financial statement shows the assets, liabilities and equity of an entity at a point in time?",
     "choices": [
      "Statement of profit or loss",
      "Statement of financial position",
      "Statement of changes in equity",
      "Statement of cash flows"
     ],
     "answer": 1,
     "explain": "ある1日（point in time）の状態を示すのは財政状態計算書だけ。ほかの3つは1年間の動き。資本の増減を示す SOCE と混同しやすい。"
    },
    {
     "q": "会社が持っている土地を再評価し、帳簿の金額を値上がり後の金額に上げた（まだ売っていない）。この値上がり益が載るのは？",
     "choices": [
      "損益計算書の売上",
      "その他の包括利益（OCI）",
      "キャッシュフロー計算書の投資活動",
      "どこにも載せない"
     ],
     "answer": 1,
     "explain": "売っていない値上がりなので、ふだんのもうけ（売上）とは分けて OCI に載せ、資本の再評価剰余金にためる。お金は入っていないので CF には出ない。再評価しない会社なら値上がりは記録しない（くわしくは有形固定資産のレッスンで学ぶ）。"
    },
    {
     "q": "「利益が出ているのに、なぜ現金が減ったのか」を知りたい。いちばん役に立つのは？",
     "choices": [
      "財政状態計算書",
      "損益計算書",
      "キャッシュフロー計算書",
      "持分変動計算書"
     ],
     "answer": 2,
     "explain": "現金がどこから入り何に使われたかは、キャッシュフロー計算書が示す。損益計算書は利益を示すが、利益と現金の動きは同じではない。財政状態計算書は期末の残高しか分からない。"
    },
    {
     "q": "Which of the following is NOT part of a complete set of financial statements?",
     "choices": [
      "Statement of changes in equity",
      "Notes to the financial statements",
      "Chairman's statement",
      "Statement of cash flows"
     ],
     "answer": 2,
     "explain": "会長の挨拶は年次報告書に入っていても、財務諸表ではない。注記は財務諸表の一部なので、外さないように。"
    },
    {
     "q": "配当の支払いや株式の発行で、資本がどう変わったかを示すのは？",
     "choices": [
      "持分変動計算書",
      "損益計算書",
      "財政状態計算書",
      "キャッシュフロー計算書の投資活動"
     ],
     "answer": 0,
     "explain": "資本の増減の理由を並べるのが持分変動計算書（SOCE）。配当は費用ではないので損益計算書には載らない。財政状態計算書は期末の資本の残高だけを示す。"
    },
    {
     "q": "Which of the following headings is correct?",
     "choices": [
      "Statement of financial position for the year ended 31 December 20X1",
      "Statement of financial position as at 31 December 20X1",
      "Statement of profit or loss as at 31 December 20X1"
     ],
     "answer": 1,
     "explain": "SFP はある1日の状態なので as at。損益計算書は1年間の動きなので for the year ended を使う。"
    }
   ]
  },
  {
   "id": "L07",
   "no": 7,
   "title": "誰が使う？利用者と必要な情報",
   "goal": "財務諸表の主な利用者と、それぞれが知りたいことを区別できるようになる",
   "minutes": 10,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "A2(a)"
   ],
   "slides": [
    {
     "title": "同じ家計簿、見る人で気になる所が違う",
     "paras": [
      "あなたの家計簿を、いろんな人が見るとする。"
     ],
     "list": [
      "住宅ローンの銀行: 毎月きちんと返せる？",
      "家を貸す大家さん: 家賃を払い続けられる？",
      "家族: 来年も同じ暮らしができる？"
     ],
     "after": "同じ数字でも、見る人によって知りたいことが違う。会社の財務諸表の利用者（users）も同じ。"
    },
    {
     "title": "投資家（investors）",
     "paras": [
      "株を持っている人や、これから買うか考えている人。今の投資家（existing）だけでなく、将来の投資家（potential）も含む。",
      "知りたいこと: 会社はどれだけ稼げるか、配当はもらえるか。株を買う・持ち続ける・売る、のどれがよいか。リスクに見合うリターンがあるか。経営者が預かったお金をうまく使ったか（stewardship、受託責任）。"
     ]
    },
    {
     "title": "お金や商品を出す人・買う人",
     "list": [
      "貸し手（lenders、銀行など）: 利息と元本を期日どおりに返せるか。返せないときに備えて担保になる資産はあるか。何年も先まで見る",
      "仕入先（suppliers）: 掛けで売った代金を、期日に払ってもらえるか。数週間〜数か月先を見る",
      "顧客（customers）: 会社が続いて、商品やアフターサービスを受け続けられるか"
     ]
    },
    {
     "title": "従業員・政府・一般の人",
     "list": [
      "従業員（employees）: 会社は安定しているか。雇用・給料・年金は続くか",
      "政府とその機関（governments and their agencies）: 税金の計算、統計づくり、規制や政策の判断",
      "一般の人（the public）: 地域の雇用や経済、環境への影響"
     ]
    },
    {
     "title": "経営者（management）",
     "paras": [
      "経営者も財務諸表を使う。計画を立て、業績を管理し、判断するため。",
      "ただし経営者は社内の人なので、財務諸表よりくわしい社内の資料も見られる。財務諸表は、主に社外の人のために作られる。"
     ]
    },
    {
     "title": "まとめ: 利用者と知りたいこと",
     "table": {
      "head": [
       "利用者",
       "いちばん知りたいこと"
      ],
      "rows": [
       [
        "投資家",
        "利益・配当・株の価値（リターンとリスク）"
       ],
       [
        "貸し手（銀行）",
        "利息と元本を返せるか"
       ],
       [
        "仕入先",
        "代金を期日に払ってもらえるか"
       ],
       [
        "顧客",
        "会社が続くか"
       ],
       [
        "従業員",
        "雇用と給料が続くか"
       ],
       [
        "政府",
        "税金・統計・規制"
       ],
       [
        "一般の人",
        "地域や環境への影響"
       ]
      ]
     }
    },
    {
     "title": "なぜ？ 主な利用者は投資家と貸し手",
     "paras": [
      "概念フレームワーク（L03）は、財務報告の主な利用者（primary users）を「今と将来の投資家、貸し手、その他の債権者（investors, lenders and other creditors）」としている。",
      "この人たちは会社にお金や資源を出す側なのに、自分では会社にくわしい情報を出させられないことが多い。だから、誰にでも同じ形で出す一般目的財務報告（general purpose financial reports）に頼る。"
     ]
    },
    {
     "title": "よくある間違い",
     "note": {
      "kind": "warn",
      "text": "貸し手と仕入先は、どちらも「払ってもらえるか」を気にするが、見る期間が違う。銀行は何年も先までの返済力、仕入先は数週間〜数か月先の支払い能力。また、経営者は主な利用者ではない（社内のくわしい資料を見られるから）。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "投資家＝リターンとリスク、貸し手＝利息と元本を返せるか",
      "仕入先＝期日に払ってもらえるか、従業員と顧客＝会社が続くか",
      "主な利用者は、今と将来の投資家・貸し手・その他の債権者"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "users",
       "ユーザーズ",
       "利用者"
      ],
      [
       "investors",
       "インベスターズ",
       "投資家"
      ],
      [
       "lenders",
       "レンダーズ",
       "貸し手（銀行など）"
      ],
      [
       "suppliers",
       "サプライヤーズ",
       "仕入先"
      ],
      [
       "creditors",
       "クレディターズ",
       "債権者（お金を払ってもらう側）"
      ],
      [
       "stewardship",
       "スチュワードシップ",
       "受託責任（預かったお金をうまく使ったか）"
      ],
      [
       "primary users",
       "プライマリー・ユーザーズ",
       "主な利用者"
      ],
      [
       "general purpose financial reports",
       "",
       "一般目的財務報告"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "「この会社に掛けで商品を売っても、来月ちゃんと払ってもらえるか」を気にしているのは？",
     "choices": [
      "投資家",
      "仕入先",
      "従業員",
      "政府"
     ],
     "answer": 1,
     "explain": "掛けで売る側＝仕入先は、短い期間の支払い能力を見る。投資家はリターン、従業員は雇用、政府は税金などを気にする。"
    },
    {
     "q": "Which user of financial statements is most interested in whether the company can pay interest and repay a loan when it is due?",
     "choices": [
      "Employees",
      "Lenders",
      "Customers",
      "Government"
     ],
     "answer": 1,
     "explain": "利息と元本の返済を気にするのは貸し手（lenders）。顧客は会社が続くか、従業員は雇用と給料を気にする。"
    },
    {
     "q": "According to the Conceptual Framework, who are the primary users of general purpose financial reports?",
     "choices": [
      "Management and employees",
      "Existing and potential investors, lenders and other creditors",
      "Government agencies and the public",
      "Customers and suppliers only"
     ],
     "answer": 1,
     "explain": "主な利用者は、会社にお金や資源を出す今と将来の投資家・貸し手・その他の債権者。経営者は社内の資料を見られるので主な利用者ではない。"
    },
    {
     "q": "経営者が財務諸表の主な利用者とされない理由は？",
     "choices": [
      "財務諸表を読む力がないから",
      "社内のくわしい資料を見られるから",
      "法律で見てはいけないと決まっているから",
      "財務諸表は1年に1回しか作らないから"
     ],
     "answer": 1,
     "explain": "経営者は社内の人なので、財務諸表に頼らなくても必要な情報を手に入れられる。経営者も財務諸表を使うことはある。"
    },
    {
     "q": "従業員がいちばん知りたいことは？",
     "choices": [
      "株を売るべきかどうか",
      "会社が続き、雇用と給料が守られるか",
      "税金の計算が正しいか",
      "掛けの代金を期日に払ってもらえるか"
     ],
     "answer": 1,
     "explain": "従業員の関心は、会社の安定と雇用・給料・年金。株の売買は投資家、税金は政府、掛けの代金は仕入先の関心。"
    }
   ]
  },
  {
   "id": "L08",
   "no": 8,
   "title": "財務報告とは: 記録・分析・要約",
   "goal": "財務報告の3つの作業と、その性質・原則・範囲を説明できるようになる",
   "minutes": 12,
   "recall": true,
   "exam": "both",
   "outcomes": [
    "A1(a)",
    "A1(e)"
   ],
   "slides": [
    {
     "title": "家計簿の3つの作業",
     "paras": [
      "家計簿をつけるとき、やっていることは3つある。"
     ],
     "list": [
      "記録: レシートを見て、毎日の出費をノートに書く",
      "分析: 食費・家賃・通信費のように、種類ごとに分けて集計する",
      "要約: 月末に「食費3万円、家賃8万円…」と1枚にまとめる"
     ],
     "after": "会社の財務報告（financial reporting）も、この3つの作業でできている。"
    },
    {
     "title": "記録 → 分析 → 要約",
     "svg": "<svg viewBox=\"0 0 440 318\" role=\"img\" aria-label=\"財務報告は記録・分析・要約の3つの作業\" font-size=\"14\"><text x=\"20\" y=\"32\" font-size=\"17\" font-weight=\"600\" fill=\"var(--ink)\">財務報告は3つの作業</text><rect x=\"20\" y=\"52\" width=\"400\" height=\"72\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"40\" y=\"82\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">① 記録（recording）</text><text x=\"40\" y=\"108\" fill=\"var(--ink)\">取引を1件ずつ帳簿に書きとめる</text><path d=\"M212 129L228 129L220 137z\" fill=\"var(--quiet)\"/><rect x=\"20\" y=\"142\" width=\"400\" height=\"72\" rx=\"10\" fill=\"none\" stroke=\"var(--edge)\" stroke-width=\"1.25\"/><text x=\"40\" y=\"172\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">② 分析（analysing）</text><text x=\"40\" y=\"198\" fill=\"var(--ink)\">勘定ごとに分けて集計する（売上・家賃など）</text><path d=\"M212 219L228 219L220 227z\" fill=\"var(--quiet)\"/><rect x=\"20\" y=\"232\" width=\"400\" height=\"72\" rx=\"10\" fill=\"var(--accent-bg)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"40\" y=\"262\" font-size=\"16\" font-weight=\"600\" fill=\"var(--ink)\">③ 要約（summarising）</text><text x=\"40\" y=\"288\" fill=\"var(--ink)\">財務諸表にまとめて、社外の人に伝える</text></svg>",
     "caption": "シラバスの定義は「財務データの記録・分析・要約（recording, analysing and summarising financial data）」。"
    },
    {
     "title": "たこ焼き屋では",
     "paras": [
      "①売上や仕入を1件ずつ帳簿に記録する。②それを「売上」「材料」「家賃」などの勘定（account）ごとに分けて集計する。③年に1回、財務諸表にまとめて、オーナーや銀行に伝える。",
      "帳簿をつける①の作業を簿記（bookkeeping）という。会計（accounting）は、③のまとめて説明するところまで含む、より広い言葉。"
     ]
    },
    {
     "title": "財務報告の性質（nature）",
     "paras": [
      "財務報告は、会社の財務情報を社外の人に伝えるしくみ。目的は、投資家・貸し手・その他の債権者が「この会社にお金を出すか」を判断するのに役立つ情報を出すこと（L07）。",
      "たくさんの人に同じ形で出す報告なので、一般目的財務報告（general purpose financial reports）と呼ぶ。"
     ]
    },
    {
     "title": "財務報告の原則（principles）",
     "paras": [
      "財務報告は好き勝手には作れない。法律と会計基準（accounting standards、IFRS 会計基準など）に従って作る。"
     ],
     "list": [
      "利用者の判断に役立つこと（目的適合性、relevance）",
      "実態を正しく表すこと（忠実な表現、faithful representation）",
      "継続企業や発生主義などの基本の考え方に従うこと"
     ],
     "after": "これらの原則は、この先のレッスンでひとつずつくわしく学ぶ。"
    },
    {
     "title": "財務報告の範囲（scope）",
     "list": [
      "中心: 4つの財務諸表と注記（L06）",
      "お金で測れる情報が中心",
      "主に過去の取引の結果（期末までに起きたこと）"
     ],
     "after": "来年の予算や、社員のやる気のような金額にできない情報は、財務諸表には入らない。社内向けの資料で扱う。"
    },
    {
     "title": "財務会計と管理会計の違い",
     "paras": [
      "財務報告は財務会計（financial accounting）の仕事。社内向けの管理会計（management accounting）とは別物。"
     ],
     "table": {
      "head": [
       "項目",
       "財務会計",
       "管理会計"
      ],
      "rows": [
       [
        "誰のため",
        "社外（投資家・銀行など）",
        "社内（経営者）"
       ],
       [
        "ルール",
        "法律・会計基準に従う",
        "自由。決まった形なし"
       ],
       [
        "時間",
        "主に過去の結果",
        "予算など将来も扱う"
       ],
       [
        "頻度",
        "年1回など決まった時期",
        "必要なときにいつでも"
       ]
      ]
     }
    },
    {
     "title": "なぜ？ ルールに従って作る理由",
     "paras": [
      "社外の人は、会社の帳簿を自分で調べられない。会社が自分に都合よく数字を作れたら、誰も信用できない。",
      "だから同じルールで作る。そうすれば違う会社どうしや、去年と今年を比べられ、信頼して判断に使える。"
     ]
    },
    {
     "title": "よくある間違い",
     "note": {
      "kind": "warn",
      "text": "「財務報告＝帳簿をつけること」は間違い。帳簿つけ（記録）は最初の段階だけで、分析して要約し、社外に伝えるところまでが財務報告。また、予算づくりのような社内向けの仕事は管理会計で、財務報告ではない。"
     }
    },
    {
     "title": "覚えるのは3つだけ",
     "numbered": [
      "財務報告＝財務データの記録・分析・要約",
      "目的: 投資家・貸し手などの判断に役立つ情報を、社外に伝える",
      "法律と会計基準に従い、主に過去のお金の情報を扱う（財務会計）"
     ]
    },
    {
     "title": "英単語",
     "words": [
      [
       "financial reporting",
       "ファイナンシャル・レポーティング",
       "財務報告"
      ],
      [
       "recording / analysing / summarising",
       "",
       "記録 / 分析 / 要約"
      ],
      [
       "bookkeeping",
       "ブックキーピング",
       "簿記（帳簿をつけること）"
      ],
      [
       "financial accounting",
       "",
       "財務会計（社外向け）"
      ],
      [
       "management accounting",
       "",
       "管理会計（社内向け）"
      ],
      [
       "accounting standards",
       "",
       "会計基準"
      ],
      [
       "relevance / faithful representation",
       "",
       "目的適合性 / 忠実な表現"
      ]
     ]
    }
   ],
   "quiz": [
    {
     "q": "Which of the following best describes financial reporting?",
     "choices": [
      "Recording, analysing and summarising financial data",
      "Planning, controlling and decision-making",
      "Budgeting, forecasting and costing",
      "Recording transactions in the books only"
     ],
     "answer": 0,
     "explain": "財務報告は記録・分析・要約の3つ。「記録だけ」は簿記（bookkeeping）で、財務報告の最初の段階にすぎない。計画や予算は管理会計の仕事。"
    },
    {
     "q": "レシートの出費を「食費」「通信費」などの種類ごとに分けて集計するのは、3つの作業のどれ？",
     "choices": [
      "記録",
      "分析",
      "要約"
     ],
     "answer": 1,
     "explain": "種類ごとに分けるのは分析。1件ずつ書きとめるのが記録、1枚にまとめるのが要約。"
    },
    {
     "q": "Which of the following describes management accounting rather than financial accounting?",
     "choices": [
      "It must follow accounting standards and the law",
      "It is mainly prepared for external users such as investors",
      "It may include forecasts and budgets and has no fixed format",
      "It is usually prepared once a year for a fixed period"
     ],
     "answer": 2,
     "explain": "将来の予算を含められて形も自由なのは、社内向けの管理会計。ほかの3つ（基準に従う、社外向け、年1回）は財務会計の特徴。"
    },
    {
     "q": "財務報告の範囲に入るものは？",
     "choices": [
      "来年の売上予算",
      "財務諸表の注記",
      "社員のやる気の調査結果",
      "新商品のアイデア"
     ],
     "answer": 1,
     "explain": "注記は財務諸表の一部（L06）。予算は将来の計画で社内向け、やる気やアイデアは金額にできないので入らない。"
    },
    {
     "q": "会社が財務諸表を法律と会計基準に従って作る、いちばんの理由は？",
     "choices": [
      "税金を少なくするため",
      "社外の人が比べられ、信頼できるようにするため",
      "作るのを速くするため",
      "経営者が社内で使いやすくするため"
     ],
     "answer": 1,
     "explain": "社外の人は帳簿を自分で調べられないので、同じルールで作ることで比べられ、信頼できる。経営者が社内で使う資料は管理会計で、形は自由。"
    }
   ]
  }
 ],
 "cards": [
  {
   "id": "L01-1",
   "lesson": "L01",
   "q": "会計をひとことで言うと？",
   "a": "お金の動きを記録して、調子を伝えること"
  },
  {
   "id": "L01-2",
   "lesson": "L01",
   "q": "「写真」の成績表の名前と、分かることは？",
   "a": "財政状態計算書。ある1日の持ち物と借金"
  },
  {
   "id": "L01-3",
   "lesson": "L01",
   "q": "「動画」の成績表の名前と、分かることは？",
   "a": "損益計算書。ある期間に稼いだ・使ったお金"
  },
  {
   "id": "L01-4",
   "lesson": "L01",
   "q": "なぜ成績表は2枚いる？",
   "a": "写真だけでは稼ぐ力が分からず、動画だけでは借金の残りが分からないから"
  },
  {
   "id": "L01-5",
   "lesson": "L01",
   "q": "もうけの式は？",
   "a": "income − expenses ＝ profit（稼いだ − 使った）"
  },
  {
   "id": "L01-6",
   "lesson": "L01",
   "q": "income $300、expenses $320 なら？",
   "a": "$20 の loss（赤字）"
  },
  {
   "id": "L01-7",
   "lesson": "L01",
   "q": "statement of financial position の昔の名前は？",
   "a": "balance sheet"
  },
  {
   "id": "L02-1",
   "lesson": "L02",
   "q": "資産・負債・資本をひとことずつで言うと？",
   "a": "持っているもの・いつか返すもの・オーナーの取り分"
  },
  {
   "id": "L02-2",
   "lesson": "L02",
   "q": "会計等式は？",
   "a": "assets ＝ capital ＋ liabilities"
  },
  {
   "id": "L02-3",
   "lesson": "L02",
   "q": "なぜ左と右は必ず同じ金額？",
   "a": "持ち物は全部、自分か借金のどちらかから来ているから。同じものを「持ち物」と「出どころ」の2方向から見ている"
  },
  {
   "id": "L02-4",
   "lesson": "L02",
   "q": "3,000万円の家を、自分のお金500万円とローン2,500万円で買った。本当の自分の取り分は？",
   "a": "500万円（売ってローンを返したら残る金額）"
  },
  {
   "id": "L02-5",
   "lesson": "L02",
   "q": "business entity concept とは？",
   "a": "お店とオーナーを別の人として扱うルール"
  },
  {
   "id": "L02-6",
   "lesson": "L02",
   "q": "現金で機械を買うと、資産の合計は？",
   "a": "変わらない。現金が機械に変わるだけ"
  },
  {
   "id": "L02-7",
   "lesson": "L02",
   "q": "もうけが出ると、右側のどこが増える？",
   "a": "資本。もうけはオーナーのものだから"
  },
  {
   "id": "L03-1",
   "lesson": "L03",
   "q": "資産の定義のキーワード4つは？",
   "a": "present（今ある）・economic resource・controlled（支配）・past events（過去の事象）"
  },
  {
   "id": "L03-2",
   "lesson": "L03",
   "q": "負債の定義は？",
   "a": "過去の事象の結果として今ある、経済的資源を渡す（払う）義務"
  },
  {
   "id": "L03-3",
   "lesson": "L03",
   "q": "資本（equity）の定義は？",
   "a": "資産から負債を全部引いた残り（residual interest）。純資産と同じ金額"
  },
  {
   "id": "L03-4",
   "lesson": "L03",
   "q": "ローンで買い、まだ返済中の機械は資産？",
   "a": "資産。返済中でも、お店が支配しているから"
  },
  {
   "id": "L03-5",
   "lesson": "L03",
   "q": "オーナーが入れたお金は収益？",
   "a": "いいえ。オーナーとのやりとりは収益・費用から除く。資本が増える"
  },
  {
   "id": "L03-6",
   "lesson": "L03",
   "q": "来年払う予定の給料は今の負債？",
   "a": "いいえ。まだ働いてもらっていない（過去の事象がない）"
  },
  {
   "id": "L03-7",
   "lesson": "L03",
   "q": "収益（income）の定義は？",
   "a": "資産の増加か負債の減少で、資本が増えること。オーナーの拠出は除く"
  },
  {
   "id": "L04-1",
   "lesson": "L04",
   "q": "二重性（duality）とは？",
   "a": "1つの取引で、必ず2か所が同じ金額だけ動くこと"
  },
  {
   "id": "L04-2",
   "lesson": "L04",
   "q": "在庫を掛けで買うと、等式はどう動く？",
   "a": "資産（在庫）＋ と 負債（買掛金）＋。資本は変わらない"
  },
  {
   "id": "L04-3",
   "lesson": "L04",
   "q": "原価 $150 の在庫を $400 で売ると？",
   "a": "資産が差し引き $250 増え、資本（もうけ）も $250 増える"
  },
  {
   "id": "L04-4",
   "lesson": "L04",
   "q": "もうけが出たら、現金は必ず増える？",
   "a": "いいえ。掛けで売ると、現金ではなく売掛金が増える"
  },
  {
   "id": "L04-5",
   "lesson": "L04",
   "q": "借入金を現金で返すと？",
   "a": "資産（現金）− と 負債 −。資本は変わらない"
  },
  {
   "id": "L04-6",
   "lesson": "L04",
   "q": "まだ払っていない電気代の請求が来たら？",
   "a": "負債 ＋、資本 −（費用）。右の中の入れ替わり"
  },
  {
   "id": "L05-1",
   "lesson": "L05",
   "q": "引出し（drawings）とは？",
   "a": "オーナーがお店の資産を私用に持ち出すこと。費用ではなく資本が減る"
  },
  {
   "id": "L05-2",
   "lesson": "L05",
   "q": "商品を家に持ち帰った引出しは、いくらで数える？",
   "a": "原価（売値ではない）"
  },
  {
   "id": "L05-3",
   "lesson": "L05",
   "q": "期末資本の式は？",
   "a": "期首資本 ＋ 資本の拠出 ＋ 利益 − 引出し"
  },
  {
   "id": "L05-4",
   "lesson": "L05",
   "q": "純資産から利益を出す式は？",
   "a": "期末純資産 − 期首純資産 − 資本の拠出 ＋ 引出し"
  },
  {
   "id": "L05-5",
   "lesson": "L05",
   "q": "なぜ引出しを足し戻す？",
   "a": "持ち出しで純資産は減ったが、お店が損をしたわけではないから"
  },
  {
   "id": "L05-6",
   "lesson": "L05",
   "q": "オーナー個人の税金をお店の口座から払ったら？",
   "a": "引出し。お店の費用ではない"
  },
  {
   "id": "L05-7",
   "lesson": "L05",
   "q": "期首資本 $5,000、期末資本 $7,000、利益 $4,000、拠出なし。引出しは？",
   "a": "$2,000（$5,000 ＋ $4,000 − $7,000）"
  },
  {
   "id": "L06-1",
   "lesson": "L06",
   "q": "4つの財務諸表は？",
   "a": "SFP、SPLOCI、SOCE、キャッシュフロー計算書"
  },
  {
   "id": "L06-2",
   "lesson": "L06",
   "q": "SFP だけほかと違う点は？",
   "a": "ある1日（as at）の状態。ほかの3つは1年間（for the year ended）の動き"
  },
  {
   "id": "L06-3",
   "lesson": "L06",
   "q": "OCI の代表例は？",
   "a": "土地・建物を再評価したときの値上がり益（資本の再評価剰余金にたまる）"
  },
  {
   "id": "L06-4",
   "lesson": "L06",
   "q": "total comprehensive income の式は？",
   "a": "profit for the year ＋ OCI"
  },
  {
   "id": "L06-5",
   "lesson": "L06",
   "q": "SOCE は何を示す？",
   "a": "資本の増減（包括利益、株式の発行、配当）"
  },
  {
   "id": "L06-6",
   "lesson": "L06",
   "q": "キャッシュフロー計算書の3つの区分は？",
   "a": "営業活動・投資活動・財務活動"
  },
  {
   "id": "L06-7",
   "lesson": "L06",
   "q": "完全な1組の財務諸表に入らないものの例は？",
   "a": "会長の挨拶、経営者の報告書"
  },
  {
   "id": "L07-1",
   "lesson": "L07",
   "q": "投資家が知りたいことは？",
   "a": "利益・配当・株の価値。リスクに見合うリターンか"
  },
  {
   "id": "L07-2",
   "lesson": "L07",
   "q": "貸し手（銀行）が知りたいことは？",
   "a": "利息と元本を期日に返せるか（長い期間で見る）"
  },
  {
   "id": "L07-3",
   "lesson": "L07",
   "q": "仕入先が知りたいことは？",
   "a": "掛けの代金を期日に払ってもらえるか（短い期間で見る）"
  },
  {
   "id": "L07-4",
   "lesson": "L07",
   "q": "従業員と顧客に共通する関心は？",
   "a": "会社が続くか"
  },
  {
   "id": "L07-5",
   "lesson": "L07",
   "q": "概念フレームワークの主な利用者は？",
   "a": "今と将来の投資家・貸し手・その他の債権者"
  },
  {
   "id": "L07-6",
   "lesson": "L07",
   "q": "経営者が主な利用者でない理由は？",
   "a": "社内のくわしい資料を見られるから"
  },
  {
   "id": "L08-1",
   "lesson": "L08",
   "q": "財務報告の3つの作業は？",
   "a": "記録（recording）・分析（analysing）・要約（summarising）"
  },
  {
   "id": "L08-2",
   "lesson": "L08",
   "q": "財務報告の目的は？",
   "a": "投資家・貸し手などの判断に役立つ財務情報を、社外に伝えること"
  },
  {
   "id": "L08-3",
   "lesson": "L08",
   "q": "財務会計と管理会計は、誰のため？",
   "a": "財務会計は社外向け、管理会計は社内（経営者）向け"
  },
  {
   "id": "L08-4",
   "lesson": "L08",
   "q": "財務報告の範囲に入るものは？",
   "a": "財務諸表と注記。主に過去の、お金で測れる情報"
  },
  {
   "id": "L08-5",
   "lesson": "L08",
   "q": "bookkeeping と accounting の違いは？",
   "a": "bookkeeping は帳簿をつける記録。accounting はまとめて説明するところまで含む"
  },
  {
   "id": "L08-6",
   "lesson": "L08",
   "q": "なぜ会計基準に従って作る？",
   "a": "社外の人が比べられ、信頼して判断に使えるようにするため"
  }
 ]
});
