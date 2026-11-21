(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 103,
  part: 2,
  partTitle: '原価の分類と原価の動き',
  lessons: [
    {
      id: 'M007',
      no: 7,
      title: '原価対象・原価単位・原価センター',
      goal: '原価対象・原価単位・原価センター・責任センターのちがいを説明し、会社やサービスの例で正しく選べるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B2(a)'],
      slides: [
        {
          title: '学園祭の模擬店で考える',
          paras: ['クラスで焼きそばの模擬店を出す。知りたいのは「焼きそば1皿にいくらかかった？」。', 'お金は、調理班・買い出し班・看板班など班ごとに集めて記録する。最後に、全部を売った皿の数で割れば1皿の原価が出る。', '「班」と「1皿」。管理会計では、この2つに名前がついている。']
        },
        {
          title: '原価対象（cost object）',
          paras: ['原価を別に測りたいもの全部を、原価対象（cost object）という。測る目的があれば何でもよい。'],
          list: ['製品やサービス: 椅子1脚、ホテルの1泊', '部門: 組立部門、社員食堂', '顧客や取引: 大口の顧客 A社、1件の注文', '活動: 機械の段取り替え、配送'],
          after: '次の2つ（原価単位と原価センター）は、原価対象のうち特によく使う形になる。'
        },
        {
          title: '原価単位（cost unit）',
          paras: ['原価を測る、製品やサービスの「1単位」。模擬店の「焼きそば1皿」にあたる。'],
          table: { caption: '業種ごとの原価単位', head: ['会社', '原価単位'], rows: [['家具工場', '椅子1脚'], ['印刷会社', '1ロット（チラシ1,000枚など）'], ['ホテル', '客室1泊（occupied room night）'], ['病院', '入院患者1人1日（patient day）'], ['運送会社', '1トン・キロ（tonne-km）'], ['バス会社', '乗客1人キロ（passenger-km）']] }
        },
        {
          title: '2つを掛け合わせる単位',
          paras: ['運送会社の原価は、運んだ重さと距離の両方で増える。そこで「重さ × 距離」を1単位にする。これを複合原価単位（composite cost unit）という。', '8トンの荷物を 120km 運ぶと、8 × 120 ＝ 960 トン・キロ。この運行に $1,920 かかったなら、1トン・キロあたり $1,920 ÷ 960 ＝ $2 になる。']
        },
        {
          title: '原価センター（cost centre）',
          paras: ['原価を集める単位で、場所・機能・活動・機械1台のどれでもよい。模擬店の「班」にあたる。'],
          list: ['製造部門（production cost centre）: 製品を直接作る。切断部門、組立部門', 'サービス部門（service cost centre）: 他の部門を支える。保守部門、材料倉庫、社員食堂'],
          after: 'サービス部門に集めた原価は、後で製造部門に配り直す（第3部）。'
        },
        {
          title: '3つの関係',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="原価対象の中に原価センターと原価単位がある" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">原価対象・原価センター・原価単位</text><rect x="20" y="50" width="400" height="200" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" font-size="15" fill="var(--ink)">原価対象: 原価を測りたいもの全部</text><rect x="36" y="92" width="176" height="140" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="124" y="120" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">原価センター</text><text x="124" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cost centre</text><text x="124" y="174" text-anchor="middle" fill="var(--ink)">原価を集める場所</text><text x="124" y="204" text-anchor="middle" fill="var(--ink)">例: 組立部門・機械</text><rect x="228" y="92" width="176" height="140" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="316" y="120" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">原価単位</text><text x="316" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cost unit</text><text x="316" y="174" text-anchor="middle" fill="var(--ink)">1単位あたりで測る</text><text x="316" y="204" text-anchor="middle" fill="var(--ink)">例: 椅子1脚・1泊</text><text x="220" y="280" text-anchor="middle" fill="var(--ink)">部門に集めた原価を、1単位あたりにする</text></svg>`,
          caption: 'まず部門（原価センター）に集め、それを製品やサービスの1単位（原価単位）に割り当てる。'
        },
        {
          title: '責任センター（responsibility centre）',
          paras: ['ある部門の業績に、特定の管理者が直接責任を持つとき、その部門を責任センターという。責任の範囲で4種類に分かれる（レッスン21で詳しく学ぶ）。'],
          table: { caption: '責任センターの4種類', head: ['種類', '管理者が責任を持つもの'], rows: [['コストセンター cost centre', '原価だけ'], ['収益センター revenue centre', '収益（売上）だけ'], ['利益センター profit centre', '原価と収益（＝利益）'], ['投資センター investment centre', '原価と収益と投資（資本）']] }
        },
        {
          title: 'なぜ？ 部門に集めてから1単位にする理由',
          paras: ['原価には2つの使い道がある。1つは管理（control）。原価は部門で発生し、その部門の責任者しか減らせない。だから部門ごとに集めて、責任者に見せる。', 'もう1つは製品の原価計算。売価を決める、在庫の金額を出す、利益を比べるには、1単位あたりの原価が要る。集めた原価を原価単位に割り当てて、それを出す。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '原価単位と原価センターを取り違える。ホテルのレストランや清掃部門は原価を集める場所なので原価センター。原価単位は「客室1泊」のような、測るための1単位。機械1台も原価センターになれる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['原価対象＝原価を別に測りたいもの全部（製品・部門・顧客・活動）', '原価単位＝原価を測る1単位（椅子1脚、1泊、トン・キロ）', '原価センター＝原価を集める場所・機能・活動・機械。管理者が責任を持つと責任センター']
        },
        {
          title: '英単語',
          words: [
            ['cost object', 'コスト オブジェクト', '原価対象'],
            ['cost unit', 'コスト ユニット', '原価単位'],
            ['composite cost unit', 'コンポジット コスト ユニット', '複合原価単位（トン・キロなど）'],
            ['cost centre', 'コスト センター', '原価センター（原価を集める部門など）'],
            ['production / service cost centre', '', '製造部門 / サービス部門（補助部門）'],
            ['responsibility centre', 'レスポンシビリティ センター', '責任センター'],
            ['revenue / profit / investment centre', '', '収益センター / 利益センター / 投資センター'],
            ['ascertain', 'アサーテイン', '（原価を）確かめる・算定する']
          ]
        }
      ],
      quiz: [
        { q: 'ホテルの原価単位として最も適切なものは？', choices: ['レストラン部門', '清掃部門', '客室1泊（occupied room night）', 'ホテル全体の電気代'], answer: 2, explain: 'レストランと清掃は原価を集める場所なので原価センター。電気代は原価の1つの費目で、単位ではない。' },
        { q: 'Which of the following best describes a cost centre?', choices: ['A unit of product or service in relation to which costs are ascertained', 'A production or service location, function, activity or item of equipment for which costs are accumulated', 'A department whose manager is responsible for costs, revenues and capital investment', 'A measure of output that combines two factors, such as tonne-km'], answer: 1, explain: '「A unit of product or service…」は原価単位（cost unit）、「…costs, revenues and capital investment」は投資センター（investment centre）、「…combines two factors」は複合原価単位（composite cost unit）の説明。' },
        { q: 'Which of the following could be cost centres? (1) A machine in the factory (2) The staff canteen (3) A passenger-km', choices: ['(2) only', '(1), (2) and (3)', '(2) and (3) only', '(1) and (2) only'], answer: 3, explain:'機械1台も、社員食堂（サービス部門）も原価を集める単位になれる。乗客1人キロは複合原価単位で、原価センターではない。(2) only は、機械も原価センターになれることを見落とした答え。' },
        { q: 'A haulage company carried a load of 8 tonnes over a distance of 120 km. The journey cost $1,920. What is the cost per tonne-km?', type: 'number', answer: 2, unit: '$', explain: 'トン・キロ ＝ 8 × 120 ＝ 960。$1,920 ÷ 960 ＝ $2。重さだけ（$1,920 ÷ 8 ＝ $240）や距離だけ（$1,920 ÷ 120 ＝ $16）で割るのは間違い。' },
        { q: '椅子工場の「組立部門」と「保守部門」のちがいは？', choices: ['組立部門は原価単位、保守部門は原価センター', '組立部門は製品を直接作る製造部門、保守部門は他の部門を支えるサービス部門', 'どちらもサービス部門', '組立部門は原価センター、保守部門は原価対象にならない'], answer: 1, explain: 'どちらも原価センター。製品を作るかどうかで、製造部門（production）とサービス部門（service）に分かれる。保守部門も原価を測れるので原価対象になる。' },
        { q: 'The manager of a division is responsible for its costs and revenues, but has no authority over capital investment decisions. The division is best described as:', choices: ['A cost centre', 'A revenue centre', 'A profit centre', 'An investment centre'], answer: 2, explain: '原価と収益の両方に責任を持つので利益センター。原価だけならコストセンター、収益だけなら収益センター。投資（資本）まで任されていれば投資センターになる。' }
      ]
    },
    {
      id: 'M008',
      no: 8,
      title: '製造原価と非製造原価（管理・販売・流通・財務）',
      goal: '原価を、製造原価と、管理費・販売費・流通費・財務費の非製造原価に分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(a)'],
      slides: [
        {
          title: '手作りケーキを売る友だち',
          paras: ['友だちがケーキを焼いて売っている。小麦粉・バター・オーブンの電気代は、ケーキを作るためのお金。', '一方、チラシの印刷代、配達のガソリン代、帳簿をつけるノート代、開店資金を借りた利息もかかる。これらはケーキを作った後か、作ることとは別の仕事のお金。会社の原価も、この2つに分ける。']
        },
        {
          title: '製造原価（production cost）',
          paras: ['原材料を製品に作り上げるまでにかかる原価。工場の原価と考えてよい。manufacturing cost とも言う。'],
          list: ['製品の材料: 木材、部品', '作る人の賃金: 組立作業者', '工場の間接費: 工場の家賃・電気代、機械の減価償却、工場長の給料、材料倉庫の係の給料']
        },
        {
          title: '非製造原価（non-production cost）の4つ',
          table: { caption: '非製造原価', head: ['種類', '何のため', '例'], rows: [['管理費 administration', '会社全体を運営する', '本社の家賃、経理・人事の給料、社長の給料'], ['販売費 selling', '注文を取る', '広告、営業担当の給料と歩合'], ['流通費 distribution', '売れた製品を届ける', '完成品倉庫、配送トラックの燃料と減価償却'], ['財務費 finance', 'お金を調達する', '借入金・当座借越の利息']] }
        },
        {
          title: '全体の形',
          svg: `<svg viewBox="0 0 440 306" role="img" aria-label="総原価は製造原価と、管理・販売・流通・財務の非製造原価に分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">原価を「機能」で2つに分ける</text><rect x="150" y="50" width="140" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="70" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">総原価</text><text x="220" y="90" text-anchor="middle" font-size="12.5" fill="var(--quiet)">total cost</text><line x1="220" y1="94" x2="95" y2="130" stroke="var(--edge)" stroke-width="1.25"/><line x1="220" y1="94" x2="310" y2="130" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="130" width="150" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="95" y="154" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">製造原価</text><text x="95" y="174" text-anchor="middle" font-size="12.5" fill="var(--quiet)">production cost</text><rect x="200" y="130" width="220" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="310" y="154" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">非製造原価</text><text x="310" y="174" text-anchor="middle" font-size="12.5" fill="var(--quiet)">non-production cost</text><text x="95" y="222" text-anchor="middle" fill="var(--ink)">工場で作るまで</text><rect x="200" y="200" width="52" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="256" y="200" width="52" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="312" y="200" width="52" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="368" y="200" width="52" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="226" y="225" text-anchor="middle" font-size="15" fill="var(--ink)">管理</text><text x="282" y="225" text-anchor="middle" font-size="15" fill="var(--ink)">販売</text><text x="338" y="225" text-anchor="middle" font-size="15" fill="var(--ink)">流通</text><text x="394" y="225" text-anchor="middle" font-size="15" fill="var(--ink)">財務</text><text x="220" y="266" text-anchor="middle" font-size="12.5" fill="var(--quiet)">administration・selling・distribution・finance</text><text x="220" y="292" text-anchor="middle" fill="var(--ink)">作った後や工場の外でかかる原価が非製造原価</text></svg>`,
          caption: '販売費と流通費は、まとめて selling and distribution costs と書かれることも多い。'
        },
        {
          title: '椅子工場で分けてみる',
          table: { caption: '同じ「家賃」「減価償却」「給料」でも分類が変わる', head: ['原価', '分類'], rows: [['工場の家賃', '製造原価'], ['本社の家賃', '管理費'], ['工場の機械の減価償却', '製造原価'], ['配送トラックの減価償却', '流通費'], ['営業担当の歩合', '販売費'], ['材料倉庫の係の給料', '製造原価'], ['完成品倉庫の係の給料', '流通費'], ['銀行借入の利息', '財務費']] }
        },
        {
          title: '見分け方: 名前ではなく「何のためか」',
          paras: ['家賃・給料・減価償却という名前だけでは分類できない。どこで、何のために使った原価かで決める。これを機能別の分類（classification by function）という。', '境目は、製品が完成するまで。材料倉庫は作るための部門なので製造側。完成品倉庫は売れた製品を届けるための部門なので流通側になる。']
        },
        {
          title: 'なぜ？ 分ける理由',
          list: ['在庫の金額に入れてよいのは製造原価だけ（次のレッスン）', '責任者がちがう。工場長は製造原価、営業部長は販売費、経理部長は管理費に責任を持つ', '売価を決めるときは、製造原価だけでなく、非製造原価まで回収できる値段にする必要がある']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「給料は全部、製造原価」「減価償却は全部、管理費」と名前で決めない。また、財務部長（finance director）の給料は財務費ではなく管理費。財務費は借入の利息のような、お金を借りるためのコスト。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['製造原価＝原材料を製品に作り上げるまでの原価（工場の原価）', '非製造原価＝管理費・販売費・流通費・財務費の4つ', '分類は費目の名前ではなく、どこで何のために使ったか（機能）で決める']
        },
        {
          title: '英単語',
          words: [
            ['production cost', 'プロダクション コスト', '製造原価'],
            ['manufacturing cost', 'マニュファクチャリング コスト', '製造原価（同じ意味）'],
            ['non-production cost', '', '非製造原価'],
            ['administration costs', 'アドミニストレーション コスツ', '管理費'],
            ['selling costs', 'セリング コスツ', '販売費'],
            ['distribution costs', 'ディストリビューション コスツ', '流通費（配送・完成品の保管）'],
            ['finance costs', 'ファイナンス コスツ', '財務費（利息など）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following are production costs? (1) Wages of the factory supervisor (2) Commission paid to sales staff (3) Depreciation of factory machinery (4) Interest on a bank loan', choices: ['(1), (2) and (3) only', '(3) only', '(1) and (3) only', '(1), (3) and (4) only'], answer: 2, explain: '工場の監督者の給料と工場の機械の減価償却は、作るための原価。営業の歩合は販売費、借入の利息は財務費。(3) only は、監督者の給料も工場の原価（製造間接費）であることを見落とした答え。' },
        { q: '完成品倉庫の家賃は、どれに分類する？', choices: ['製造原価', '管理費', '販売費', '流通費'], answer: 3, explain: '完成品倉庫は、売れた製品を届けるまで保管する場所なので流通費。材料倉庫なら作るための部門なので製造原価になる。' },
        { q: 'The salary of a company\'s finance director is best classified as:', choices: ['A finance cost', 'An administration cost', 'A production cost', 'A selling cost'], answer: 1, explain: '財務部長は会社全体の運営を担うので管理費。名前に finance があっても、finance cost は借入の利息のような資金調達のコストを指す。' },
        { q: 'テレビ広告の費用は、どれに分類する？', choices: ['流通費', '管理費', '販売費', '製造原価'], answer: 2, explain: '広告は注文を取るための原価なので販売費。流通費は売れた製品を届けるための原価。' },
        { q: '材料倉庫（stores）で働く係の給料は、どれに分類する？', choices: ['流通費', '製造原価', '管理費', '販売費'], answer: 1, explain: '材料倉庫は材料を受け入れ、工場に払い出す、作るための部門。だから製造原価（製造間接費）。完成品倉庫と混同して流通費にしやすい。' }
      ]
    },
    {
      id: 'M009',
      no: 9,
      title: 'なぜ分ける？製造原価は在庫に、非製造原価はその期の費用に',
      goal: '製造原価は在庫の金額に入り、非製造原価はその期の費用になることを説明し、期末在庫と利益を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(b)'],
      slides: [
        {
          title: '作り置きのおかず',
          paras: ['日曜に5食分のおかずを作った。材料費は 2,000円、1食 400円。月曜から3食食べ、2食分（800円）は冷蔵庫に残っている。残りはまだ使っていない財産で、食べた日に「使った」ことになる。', '同じ月に、レシピ動画のサブスク代 500円を払った。これは冷蔵庫に残らない。その月の出費になる。']
        },
        {
          title: '2つの行き先',
          list: ['製造原価＝製品原価（product cost）: 作った製品1つ1つにくっつく。売れ残れば在庫の金額になり、売れた期に売上原価になる', '非製造原価＝期間原価（period cost）: 作った量とは関係なく、発生した期の費用にする'],
          formula: '在庫の金額に入れるのは製造原価だけ'
        },
        {
          title: '流れを図で見る',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="製造原価は在庫を通って売上原価へ、非製造原価はその期の費用へ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">2つの原価の行き先</text><rect x="20" y="58" width="110" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="84" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">製造原価</text><text x="75" y="104" text-anchor="middle" font-size="12.5" fill="var(--quiet)">product cost</text><text x="145" y="94" text-anchor="middle" font-size="18" fill="var(--ink)">→</text><rect x="160" y="58" width="120" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="84" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">在庫</text><text x="220" y="106" text-anchor="middle" fill="var(--ink)">財政状態計算書</text><text x="295" y="94" text-anchor="middle" font-size="18" fill="var(--ink)">→</text><rect x="310" y="58" width="110" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="84" text-anchor="middle" fill="var(--ink)">売れた期の</text><text x="365" y="106" text-anchor="middle" fill="var(--ink)">売上原価</text><rect x="20" y="158" width="110" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="184" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">非製造原価</text><text x="75" y="204" text-anchor="middle" font-size="12.5" fill="var(--quiet)">period cost</text><text x="145" y="194" text-anchor="middle" font-size="18" fill="var(--ink)">→</text><rect x="160" y="158" width="260" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="290" y="194" text-anchor="middle" font-size="15" fill="var(--ink)">その期の費用（損益計算書）</text><text x="220" y="254" text-anchor="middle" fill="var(--ink)">製造原価は売れるまで在庫として次期へ運ばれる</text></svg>`
        },
        {
          title: 'K1 の棚卸資産と同じルール',
          paras: ['K1 で学んだ IAS 2 では、棚卸資産の原価に、購入原価と加工費（直接労務費や製造間接費の配分）を入れる。', '販売費、製造に関係しない管理費、異常な仕損、製造に必要な場合を除く保管費は入れない。管理会計の「製造原価だけを在庫に入れる」は、これと同じ考え方になる。']
        },
        {
          title: '例題: 期末在庫と利益',
          example: {
            problem: '椅子工場は今期 1,000脚を作り、800脚を1脚 $40 で売った。期首在庫はない。製造原価は $20,000、管理費と販売費は合わせて $5,000。期末在庫の金額、売上原価、利益は？',
            steps: ['1脚の製造原価: $20,000 ÷ 1,000 ＝ $20', '期末在庫: 売れ残り 200脚 × $20 ＝ $4,000', '売上原価: 800脚 × $20 ＝ $16,000（$20,000 − $4,000 でも同じ）', '売上: 800 × $40 ＝ $32,000。売上総利益: $32,000 − $16,000 ＝ $16,000', '管理費と販売費は全額その期の費用: $16,000 − $5,000 ＝ $11,000'],
            answer: '期末在庫 $4,000、売上原価 $16,000、利益 $11,000'
          }
        },
        {
          title: '例題: 管理費と販売費を在庫に入れてしまったら',
          example: {
            problem: '前の例題で、管理費と販売費 $5,000 まで1脚の原価に入れて在庫を評価した。利益はいくらになり、正しい答えとどれだけずれる？',
            steps: ['1脚の原価: ($20,000 ＋ $5,000) ÷ 1,000 ＝ $25', '期末在庫: 200脚 × $25 ＝ $5,000', '売上原価: 800脚 × $25 ＝ $20,000', '利益: $32,000 − $20,000 ＝ $12,000（$5,000 は売上原価に入ったので別に引かない）', 'ずれ: $12,000 − $11,000 ＝ $1,000 ＝ 売れ残り 200脚 × $5'],
            answer: '利益 $12,000。$1,000 多く出すぎる'
          }
        },
        {
          title: 'なぜ？ 製造原価だけを次の期に運ぶ理由',
          paras: ['在庫は、来期に売れて売上を生む。製造原価は製品を作るための原価なので、製品が売れた期に費用にすれば、売上と同じ期に並ぶ（matching）。', '管理費や販売費は、作った数とは関係なく、今期の会社を回すための原価。来期に運んでも来期の売上は増えない。運べるとすると、作りすぎて在庫を増やすだけで、今期の利益をよく見せられてしまう。']
        },
        {
          title: '在庫が増えた期・減った期',
          paras: ['例題のずれ $1,000 は、売れ残った 200脚に $5 ずつ乗った非製造原価。今期の費用が、来期に先送りされた分になる。', '在庫が増えた期は利益が多く出すぎ、その在庫が売れて減る期は、先送りされた費用が出てきて利益が少なくなる。第4部では、固定の製造間接費を在庫に入れるかどうかで、同じことが起きるのを学ぶ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '1単位の総原価（total cost、販売費まで含む）で在庫を評価してしまう。売価を考えるときは総原価を見るが、在庫の金額は1単位の製造原価で出す。管理費・販売費は、売れた数ではなく全額をその期の費用にする。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['製造原価は製品原価。在庫の金額に入り、売れた期に売上原価になる', '非製造原価は期間原価。発生した期に全額を費用にする', '非製造原価を在庫に入れると、在庫が増えた期の利益が多く出すぎる']
        },
        {
          title: '英単語',
          words: [
            ['product cost', 'プロダクト コスト', '製品原価（在庫に入る原価）'],
            ['period cost', 'ピリオド コスト', '期間原価（その期の費用にする原価）'],
            ['inventory valuation', 'インベントリー バリュエーション', '在庫の評価'],
            ['closing inventory', 'クロージング インベントリー', '期末在庫'],
            ['cost of sales', 'コスト オブ セールス', '売上原価'],
            ['charged to profit or loss', '', '損益計算書の費用にする']
          ]
        }
      ],
      quiz: [
        { q: 'ある工場は今期 2,000個を作り、1,500個を売った。期首在庫はない。製造原価は $30,000、管理費は $4,000、販売費は $2,000。期末在庫の金額はいくら？', type: 'number', answer: 7500, unit: '$', explain: '1個の製造原価は $30,000 ÷ 2,000 ＝ $15。売れ残り 500個 × $15 ＝ $7,500。管理費と販売費まで入れると ($36,000 ÷ 2,000) × 500 ＝ $9,000 になり、在庫が多すぎる。' },
        { q: 'A company produced 5,000 units and sold 4,000 units at $25 each. There was no opening inventory. Production costs were $60,000, administration costs were $8,000 and selling costs were $6,000. What is the profit for the period?', type: 'number', answer: 38000, unit: '$', explain: '1個の製造原価 $60,000 ÷ 5,000 ＝ $12。売上 $100,000 − 売上原価 4,000 × $12 ＝ $48,000 → 売上総利益 $52,000。管理費と販売費は全額引く: $52,000 − $14,000 ＝ $38,000。全部の原価を在庫に入れると $40,800 になり、$2,800（1,000個 × $2.80）多く出すぎる。' },
        { q: 'Which of the following costs would be included in the valuation of finished goods inventory?', choices: ['Commission paid to sales staff', 'The rent of the head office', 'The cost of delivering goods to customers', 'The salary of the factory supervisor'], answer: 3, explain: '工場の監督者の給料は製造間接費なので、製品の原価として在庫に入る。営業の歩合（販売費）、本社の家賃（管理費）、配送費（流通費）は期間原価で、その期の費用になる。' },
        { q: '生産量が販売量より多かった期に、管理費を誤って在庫の評価に含めた。その期の利益はどうなる？', choices: ['少なく出すぎる', '多く出すぎる', '変わらない', '在庫が多くなるので少なくなる'], answer: 1, explain: '売れ残りに乗った管理費が来期に先送りされ、今期の費用が減る。だから利益が多く出すぎる。在庫が多くなるのは資産なので、利益を減らす方向ではない。' },
        { q: '期間原価（period cost）として、発生した期に全額を費用にするものは？', choices: ['直接材料費と直接労務費', '工場の家賃と機械の減価償却', '販売費と管理費', '製造原価のすべて'], answer: 2, explain: '販売費と管理費は非製造原価なので期間原価。ほかの選択肢はすべて製造原価（製品原価）で、売れ残れば在庫に入る。' }
      ]
    },
    {
      id: 'M010',
      no: 10,
      title: '直接費・間接費と素価（prime cost）',
      goal: '原価を直接費と間接費に分け、素価・製造原価・総原価を積み上げて計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(a)'],
      slides: [
        {
          title: '手作りアクセサリーの原価',
          paras: ['ネックレスを作って売る。ネックレス1本に使ったビーズとチェーンは、その1本のためのお金で、本数ごとに数えられる。', '作業部屋の電気代やペンチは、全部の作品で一緒に使う。どの1本にいくら使ったかは分からない。前者を直接費、後者を間接費という。']
        },
        {
          title: '直接費（direct cost）',
          paras: ['1つの原価単位に、まるごと・はっきり結びつけられる原価。3種類ある。'],
          list: ['直接材料費（direct materials）: 製品の一部になる材料。椅子の木材、部品', '直接労務費（direct labour）: 製品を直接作る人の賃金。組立作業者', '直接経費（direct expenses）: 材料・労務以外で製品に結びつくもの。1個ごとに払う特許使用料（royalty）、その注文専用に借りた機械、外注加工']
        },
        {
          title: '間接費（indirect cost / overhead）',
          paras: ['複数の製品で共有していて、1単位に直接結びつけられない原価。間接費（overhead）という。'],
          list: ['工場長や監督者の給料', '工場の家賃・電気代、機械の減価償却', '接着剤・くぎ・機械油'],
          after: '接着剤は椅子の中に入っているが、1脚あたりの量を測る手間に見合わない。だから間接材料費として扱う。'
        },
        {
          title: '素価と原価の積み上げ',
          formula: '素価（prime cost）＝ 直接材料費 ＋ 直接労務費 ＋ 直接経費',
          list: ['製造原価 ＝ 素価 ＋ 製造間接費', '総原価 ＝ 製造原価 ＋ 非製造原価（管理・販売・流通・財務）'],
          after: '素価は「直接費の合計」。間接費は1つも入らない。'
        },
        {
          title: '積み上げを図で見る',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="直接費の合計が素価、製造間接費を足して製造原価、非製造原価を足して総原価" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">原価の積み上げ</text><rect x="20" y="56" width="280" height="44" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><line x1="113" y1="56" x2="113" y2="100" stroke="var(--accent)" stroke-width="1.25"/><line x1="207" y1="56" x2="207" y2="100" stroke="var(--accent)" stroke-width="1.25"/><text x="66" y="83" text-anchor="middle" fill="var(--ink)">直接材料費</text><text x="160" y="83" text-anchor="middle" fill="var(--ink)">直接労務費</text><text x="253" y="83" text-anchor="middle" fill="var(--ink)">直接経費</text><text x="312" y="76" font-size="15" font-weight="600" fill="var(--ink)">＝ 素価</text><text x="312" y="94" font-size="12.5" fill="var(--quiet)">prime cost</text><rect x="20" y="120" width="166" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="188" y="120" width="112" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="103" y="147" text-anchor="middle" fill="var(--ink)">素価</text><text x="244" y="147" text-anchor="middle" fill="var(--ink)">製造間接費</text><text x="312" y="140" font-size="15" font-weight="600" fill="var(--ink)">＝ 製造原価</text><text x="312" y="158" font-size="12.5" fill="var(--quiet)">production cost</text><rect x="20" y="184" width="212" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="234" y="184" width="66" height="44" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="126" y="211" text-anchor="middle" fill="var(--ink)">製造原価</text><text x="267" y="211" text-anchor="middle" fill="var(--ink)">非製造</text><text x="312" y="204" font-size="15" font-weight="600" fill="var(--ink)">＝ 総原価</text><text x="312" y="222" font-size="12.5" fill="var(--quiet)">total cost</text><text x="220" y="262" text-anchor="middle" fill="var(--ink)">直接費の合計が素価。間接費を足して積み上げる</text></svg>`
        },
        {
          title: '椅子1脚の原価カード',
          table: { caption: '原価カード（cost card）: 椅子1脚', head: ['項目', '$'], rows: [['直接材料費（木材 4kg × $5）', '20'], ['直接労務費（2時間 × $8）', '16'], ['直接経費（特許使用料）', '4'], ['素価（prime cost）', '40'], ['製造間接費', '12'], ['製造原価（production cost）', '52'], ['非製造原価（管理・販売・流通）', '8']], total: ['総原価（total cost）', '60'] },
          caption: '在庫は1脚 $52 で評価する（前のレッスン）。売価は総原価 $60 を回収できる値段にする。'
        },
        {
          title: '例題: 1か月分の原価を積み上げる',
          example: {
            problem: '椅子工場の今月の原価: 木材 $40,000、組立作業者の賃金 $30,000、1脚ごとの特許使用料 $2,000、工場の監督者の給料 $15,000、工場の家賃 $12,000、接着剤とくぎ $500、営業の歩合 $3,000。素価・製造原価・総原価は？',
            steps: ['直接費を選ぶ: 木材（直接材料）、組立作業者の賃金（直接労務）、特許使用料（直接経費）', '素価: $40,000 ＋ $30,000 ＋ $2,000 ＝ $72,000', '製造間接費: 監督者 $15,000 ＋ 工場の家賃 $12,000 ＋ 接着剤とくぎ $500 ＝ $27,500', '製造原価: $72,000 ＋ $27,500 ＝ $99,500', '総原価: $99,500 ＋ 営業の歩合 $3,000 ＝ $102,500'],
            answer: '素価 $72,000、製造原価 $99,500、総原価 $102,500'
          }
        },
        {
          title: 'なぜ？ 直接費と間接費を分ける理由',
          paras: ['直接費は製品ごとに測れるので、その製品の原価として確かな金額になる。', '間接費は測れないので、作業時間などの基準で製品に配る（配賦、第3部）。ここには見積もりが入る。素価を分けて見ると、原価のうち「確かな部分」と「配った部分」が区別でき、原価の信頼度や、どこを管理すべきかが分かる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '素価に製造間接費を入れてしまう。監督者の給料を直接労務費にする（監督者は多くの製品を見るので間接）。また「直接費＝変動費、間接費＝固定費」ではない。直接・間接は製品に結びつくか、変動・固定は量で動くか（次のユニット）で、別の分け方。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接費＝1単位にまるごと結びつく原価。間接費（overhead）＝共有していて結びつかない原価', '素価 ＝ 直接材料費 ＋ 直接労務費 ＋ 直接経費', '製造原価 ＝ 素価 ＋ 製造間接費、総原価 ＝ 製造原価 ＋ 非製造原価']
        },
        {
          title: '英単語',
          words: [
            ['direct cost', 'ダイレクト コスト', '直接費'],
            ['indirect cost / overhead', 'インダイレクト コスト / オーバーヘッド', '間接費'],
            ['prime cost', 'プライム コスト', '素価（直接費の合計）'],
            ['production overhead', 'プロダクション オーバーヘッド', '製造間接費'],
            ['direct expenses', 'ダイレクト エクスペンシズ', '直接経費'],
            ['royalty', 'ロイヤルティ', '特許などの使用料'],
            ['cost card', 'コスト カード', '原価カード（1単位の原価の内訳）']
          ]
        }
      ],
      quiz: [
        { q: 'The following costs relate to a product: direct materials $5,000, direct labour $3,200, direct expenses $800, production overheads $2,400, administration overheads $1,000. What is the prime cost?', type: 'number', answer: 9000, unit: '$', explain: '素価は直接費だけ: $5,000 ＋ $3,200 ＋ $800 ＝ $9,000。製造間接費を足した $11,400 は製造原価、管理費まで足した $12,400 は総原価。' },
        { q: '製品1個の原価: 直接材料費 $14、直接労務費 $9、直接経費 $2、製造間接費 $6、販売費 $3。1個の製造原価はいくら？', type: 'number', answer: 31, unit: '$', explain: '素価 $14 ＋ $9 ＋ $2 ＝ $25 に製造間接費 $6 を足して $31。販売費は非製造原価なので入れない（入れると総原価 $34）。' },
        { q: 'Which of the following would be classified as a direct expense?', choices: ['Rent of the factory', 'Salary of the factory supervisor', 'Royalties paid for each unit produced', 'Cost of glue used in production'], answer: 2, explain: '1個ごとに払う特許使用料は、その製品にまるごと結びつく。工場の家賃（間接経費）、監督者の給料（間接労務費）、接着剤（間接材料費）は、どれも製造間接費。' },
        { q: '椅子を組み立てるときに使う接着剤は、ふつう何に分類する？', choices: ['直接材料費', '間接材料費', '直接経費', '非製造原価'], answer: 1, explain: '接着剤は椅子の一部になるが、1脚あたりの量を測る手間に見合わないので間接材料費（製造間接費）にする。工場で使うので非製造原価ではない。' },
        { q: 'Prime cost is:', choices: ['Direct materials and direct labour only, excluding direct expenses', 'The total of direct costs and production overheads', 'All costs incurred in making and selling a product', 'The total of direct materials, direct labour and direct expenses'], answer: 3, explain: '素価は直接費の合計で、直接経費も入る。「direct costs and production overheads」は製造原価、「making and selling」は総原価の説明。' }
      ]
    },
    {
      id: 'M011',
      no: 11,
      title: '形態別の分類: 材料・労務・経費',
      goal: '原価を材料費・労務費・経費に分け、直接・間接と組み合わせて分類できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(a)'],
      slides: [
        {
          title: '家計簿の2つの分け方',
          paras: ['家計簿は「何に払ったか」（食費・電気代・家賃）で分けられる。「誰のためか」（子ども・自分）でも分けられる。', '同じ出費でも、見る角度で分け方が変わる。会社の原価も同じ。「何に払ったか」で分けるのが、形態別の分類（classification by nature）になる。']
        },
        {
          title: '3つの形態',
          list: ['材料費（materials）: 物を買って使った原価。木材、部品、機械油、事務用品', '労務費（labour）: 人に払った原価。工場の賃金、事務員や営業の給料、会社が負担する社会保険料', '経費（expenses）: 材料でも労務でもない原価全部。家賃、電気代、保険料、減価償却、特許使用料、外注加工'],
          formula: '原価 ＝ 材料費 ＋ 労務費 ＋ 経費'
        },
        {
          title: '直接・間接と組み合わせる',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="材料・労務・経費それぞれに直接と間接があり6つに分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">形態 × 直接・間接 の6マス</text><text x="153" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">材料</text><text x="260" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">労務</text><text x="367" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">経費</text><text x="153" y="84" text-anchor="middle" font-size="12.5" fill="var(--quiet)">materials</text><text x="260" y="84" text-anchor="middle" font-size="12.5" fill="var(--quiet)">labour</text><text x="367" y="84" text-anchor="middle" font-size="12.5" fill="var(--quiet)">expenses</text><text x="56" y="129" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">直接</text><text x="56" y="193" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">間接</text><rect x="100" y="98" width="104" height="52" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="208" y="98" width="104" height="52" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="316" y="98" width="104" height="52" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="152" y="129" text-anchor="middle" fill="var(--ink)">直接材料費</text><text x="260" y="129" text-anchor="middle" fill="var(--ink)">直接労務費</text><text x="368" y="129" text-anchor="middle" fill="var(--ink)">直接経費</text><rect x="100" y="162" width="320" height="52" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><line x1="206" y1="162" x2="206" y2="214" stroke="var(--accent)" stroke-width="1.25"/><line x1="314" y1="162" x2="314" y2="214" stroke="var(--accent)" stroke-width="1.25"/><text x="152" y="193" text-anchor="middle" fill="var(--ink)">間接材料費</text><text x="260" y="193" text-anchor="middle" fill="var(--ink)">間接労務費</text><text x="368" y="193" text-anchor="middle" fill="var(--ink)">間接経費</text><text x="220" y="240" text-anchor="middle" fill="var(--ink)">上の段の合計＝素価（prime cost）</text><text x="220" y="262" text-anchor="middle" fill="var(--ink)">下の段の合計＝間接費（overheads）</text></svg>`
        },
        {
          title: '椅子工場の原価を6マスに入れる',
          table: { caption: '形態と直接・間接', head: ['原価', '形態', '直接・間接'], rows: [['木材', '材料費', '直接'], ['機械油', '材料費', '間接'], ['組立作業者の賃金', '労務費', '直接'], ['工場の監督者の給料', '労務費', '間接'], ['1脚ごとの特許使用料', '経費', '直接'], ['工場の電気代', '経費', '間接']] }
        },
        {
          title: '3つの分け方を重ねる',
          paras: ['1つの原価は、機能（製造・非製造）、直接・間接、形態の3つの角度から同時に分類できる。'],
          table: { caption: '同じ原価を3つの角度で見る', head: ['原価', '形態', '機能と直接・間接'], rows: [['本社の経理担当の給料', '労務費', '管理費（非製造）'], ['工場の保守係の賃金', '労務費', '製造・間接'], ['本社のコピー用紙', '材料費', '管理費（非製造）'], ['その注文専用の外注加工', '経費', '製造・直接']] },
          after: '管理・販売などの非製造原価は、まとめて非製造間接費（non-production overheads）として扱うことが多い。'
        },
        {
          title: '製造間接費の中身',
          formula: '製造間接費 ＝ 工場の間接材料費 ＋ 間接労務費 ＋ 間接経費',
          list: ['間接材料費: 機械油、掃除用品、接着剤・くぎ', '間接労務費: 監督者、保守係、材料倉庫の係。ふつう遊休時間（idle time）と残業の割増分（overtime premium）もここ（第3部で詳しく）', '間接経費: 工場の家賃・電気代・保険料、機械の減価償却']
        },
        {
          title: 'なぜ？ 形態で分ける理由',
          list: ['管理する担当がちがう: 材料は購買と倉庫、労務は人事と給与、経費は各部門。材料の使いすぎ、残業の増えすぎなど、原因を種類ごとに追える', '記録の入口がちがう: 材料は在庫の記録、労務は給与計算から帳簿に入る（第3部で仕訳を学ぶ）', '取引に番号をつけるコード化（レッスン16）の基本の区分になる']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'K2 の「経費（expenses）」を、日常語の「経費全部」と思う。ここでは材料費でも労務費でもない原価だけを指す。また、人に頼む外注加工（subcontracting）は自社の従業員への支払いではないので、労務費ではなく経費（その製品専用なら直接経費）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['形態別の分類＝材料費・労務費・経費（何に払ったか）', '経費＝材料でも労務でもない原価。外注加工も経費', '直接・間接と組み合わせて6マス。間接の3つの合計が間接費（overheads）']
        },
        {
          title: '英単語',
          words: [
            ['classification by nature', '', '形態別の分類'],
            ['classification by function', '', '機能別の分類（製造・管理・販売など）'],
            ['materials / labour / expenses', '', '材料費 / 労務費 / 経費'],
            ['indirect materials', 'インダイレクト マテリアルズ', '間接材料費'],
            ['indirect labour', 'インダイレクト レイバー', '間接労務費'],
            ['subcontracting', 'サブコントラクティング', '外注加工'],
            ['idle time / overtime premium', '', '遊休時間 / 残業の割増分']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following would be classified as direct labour? (1) Wages of assembly line workers (2) Salary of the factory supervisor (3) Wages of staff working in the materials store', choices: ['(1) only', '(1) and (2) only', '(1), (2) and (3)', '(1) and (3) only'], answer: 0, explain: '製品を直接作るのは組立作業者だけ。監督者と材料倉庫の係は工場の仕事だが、どの製品とも結びつかないので間接労務費（製造間接費）。' },
        { q: 'The cost of lubricating oil used on factory machines is best classified as:', choices: ['Direct materials', 'Indirect expenses (administration overhead)', 'Indirect materials (production overhead)', 'Direct expenses'], answer: 2, explain: '機械油は物なので材料費。製品の一部にならず、どの製品とも結びつかないので間接。工場で使うので製造間接費で、管理費ではない。' },
        { q: '特定の製品のためだけに、外部の会社に部品の加工を頼んだ。この外注加工費の分類は？', choices: ['直接労務費', '直接経費', '間接労務費', '直接材料費'], answer: 1, explain: '自社の従業員への支払いではないので労務費ではなく経費。その製品だけのための支払いなので直接経費になる。' },
        { q: '製造間接費の中身として正しいものは？', choices: ['直接材料費・直接労務費・直接経費の合計', '管理費・販売費・流通費の合計', '工場の労務費の合計', '工場の間接材料費・間接労務費・間接経費の合計'], answer: 3, explain: '直接費3つの合計は素価。管理費・販売費・流通費は非製造原価。工場の労務費の合計では、直接労務費が入ってしまい、間接材料費と間接経費が抜けている。' },
        { q: '本社の経理担当者の給料の分類として正しいものは？', choices: ['経費・管理費（非製造原価）', '労務費・製造間接費', '労務費・管理費（非製造原価）', '労務費・財務費'], answer: 2, explain: '人への支払いなので形態は労務費。本社で会社全体を運営するための原価なので管理費。経理の仕事でも、利息ではないので財務費ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'M007-1', lesson: 'M007', q: '原価対象（cost object）とは？', a: '原価を別に測りたいもの全部（製品・部門・顧客・活動など）' },
    { id: 'M007-2', lesson: 'M007', q: '原価単位（cost unit）とは？', a: '原価を測る、製品やサービスの1単位（椅子1脚、客室1泊など）' },
    { id: 'M007-3', lesson: 'M007', q: '原価センター（cost centre）とは？', a: '原価を集める場所・機能・活動・機械（部門など）' },
    { id: 'M007-4', lesson: 'M007', q: '複合原価単位の例を3つ', a: 'トン・キロ、乗客1人キロ、入院患者1人1日（客室1泊も）' },
    { id: 'M007-5', lesson: 'M007', q: '責任センター（responsibility centre）とは？', a: '特定の管理者が業績に責任を持つ部門。コスト・収益・利益・投資の4種類' },
    { id: 'M007-6', lesson: 'M007', q: 'なぜ原価を部門に集めてから1単位にする？', a: '部門で責任者が管理し、その後で売価や在庫に使う1単位の原価を出すため' },
    { id: 'M008-1', lesson: 'M008', q: '製造原価（production cost）とは？', a: '原材料を製品に作り上げるまでの原価（工場の原価）' },
    { id: 'M008-2', lesson: 'M008', q: '非製造原価の4つは？', a: '管理費・販売費・流通費・財務費' },
    { id: 'M008-3', lesson: 'M008', q: '完成品倉庫の家賃と、材料倉庫の家賃の分類は？', a: '完成品倉庫は流通費、材料倉庫は製造原価' },
    { id: 'M008-4', lesson: 'M008', q: '財務部長の給料は財務費？', a: 'いいえ、管理費。財務費は借入の利息など資金調達のコスト' },
    { id: 'M008-5', lesson: 'M008', q: '機能別の分類の決め手は？', a: '費目の名前ではなく、どこで何のために使った原価か' },
    { id: 'M009-1', lesson: 'M009', q: '製品原価（product cost）とは？', a: '製造原価。在庫の金額に入り、売れた期に売上原価になる' },
    { id: 'M009-2', lesson: 'M009', q: '期間原価（period cost）とは？', a: '非製造原価。発生した期に全額を費用にする' },
    { id: 'M009-3', lesson: 'M009', q: '期末在庫を評価する1単位の原価は？', a: '1単位の製造原価。管理費・販売費は入れない' },
    { id: 'M009-4', lesson: 'M009', q: '在庫が増えた期に非製造原価を在庫に入れると？', a: '費用が来期に先送りされ、今期の利益が多く出すぎる' },
    { id: 'M009-5', lesson: 'M009', q: 'なぜ非製造原価は在庫に入れない？', a: '製品を作るための原価ではなく、来期の売上を生まないから' },
    { id: 'M009-6', lesson: 'M009', q: '1,000個生産・800個販売、製造原価 $20,000。期末在庫は？', a: '$4,000（200個 × $20）' },
    { id: 'M010-1', lesson: 'M010', q: '直接費とは？', a: '1つの原価単位に、まるごと・はっきり結びつけられる原価' },
    { id: 'M010-2', lesson: 'M010', q: '間接費（overhead）とは？', a: '複数の製品で共有し、1単位に直接結びつけられない原価' },
    { id: 'M010-3', lesson: 'M010', q: '素価（prime cost）の式', a: '直接材料費 ＋ 直接労務費 ＋ 直接経費' },
    { id: 'M010-4', lesson: 'M010', q: '製造原価と総原価の式', a: '製造原価＝素価＋製造間接費。総原価＝製造原価＋非製造原価' },
    { id: 'M010-5', lesson: 'M010', q: '直接経費の例', a: '1個ごとの特許使用料、その注文専用の機械の賃借料、外注加工' },
    { id: 'M010-6', lesson: 'M010', q: '接着剤やくぎはなぜ間接材料費？', a: '1単位あたりの量を測る手間に見合わないから' },
    { id: 'M011-1', lesson: 'M011', q: '形態別の分類の3つは？', a: '材料費・労務費・経費' },
    { id: 'M011-2', lesson: 'M011', q: 'K2 の経費（expenses）とは？', a: '材料費でも労務費でもない原価（家賃・電気代・減価償却など）' },
    { id: 'M011-3', lesson: 'M011', q: '間接費（overheads）の中身は？', a: '間接材料費 ＋ 間接労務費 ＋ 間接経費' },
    { id: 'M011-4', lesson: 'M011', q: '外注加工費の形態は？', a: '経費（その製品専用なら直接経費）。労務費ではない' },
    { id: 'M011-5', lesson: 'M011', q: '工場の監督者・保守係・材料倉庫の係の賃金は？', a: '間接労務費（製造間接費）' },
    { id: 'M011-6', lesson: 'M011', q: '形態で分ける理由は？', a: '管理する担当と記録の入口がちがい、原因を種類ごとに追えるから' }
  ]
});
