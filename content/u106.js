(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 106,
  part: 2,
  partTitle: '原価の分類と原価の動き',
  lessons: [
    {
      id: 'M021',
      no: 21,
      title: '責任会計: コスト・収益・利益・投資の4つのセンター',
      goal: '責任センターをコスト・収益・利益・投資の4つに分け、責任者の権限から種類を見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B2(b)'],
      slides: [
        {
          title: '文化祭の模擬店で役割を分ける',
          paras: ['文化祭でたこ焼きの模擬店を出す。買い出し係は「材料費をいくらに抑えたか」、呼び込み係は「いくら売ったか」で見られる。店長は、売上から材料費を引いた「もうけ」で見られる。', '実行委員会は、どの店に鉄板やテントを貸すかまで決める。だから「貸した道具に対して、どれだけもうけたか」で見られる。担当によって、責任を持つ数字が違う。']
        },
        {
          title: '責任会計（responsibility accounting）とは',
          paras: ['会社を、責任者（manager）がいる単位に分ける。この単位を責任センター（responsibility centre）という。レッスン7で学んだ言葉。', '責任会計は、センターごとに原価や売上を集めて報告し、責任者をその人が決められる数字で評価するしくみ。責任の広さで、センターは4種類に分かれる。']
        },
        {
          title: '4つのセンター',
          table: {
            caption: '責任を持つものと例',
            head: ['センター', '責任を持つもの', '例'],
            rows: [
              ['コストセンター（cost centre）', '原価だけ', '工場の製造部門、修理部門、経理部'],
              ['収益センター（revenue centre）', '売上だけ', '売上の目標だけを持つ営業部'],
              ['利益センター（profit centre）', '売上と原価の両方（＝利益）', '支店、店舗、事業部'],
              ['投資センター（investment centre）', '利益 ＋ 資産への投資', '設備を買う権限を持つ事業部、子会社']
            ]
          }
        },
        {
          title: '図で見る: 責任の広がり',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="コストセンターと収益センターを合わせると利益センター、さらに投資の判断が加わると投資センター" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">責任の広さで4つに分かれる</text><rect x="20" y="52" width="192" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="228" y="52" width="192" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">コストセンター</text><text x="116" y="102" text-anchor="middle" fill="var(--quiet)">原価だけ</text><text x="324" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">収益センター</text><text x="324" y="102" text-anchor="middle" fill="var(--quiet)">売上だけ</text><line x1="116" y1="116" x2="116" y2="140" stroke="var(--ink)" stroke-width="1.5"/><line x1="324" y1="116" x2="324" y2="140" stroke="var(--ink)" stroke-width="1.5"/><rect x="20" y="140" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="166" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">利益センター</text><text x="220" y="190" text-anchor="middle" fill="var(--ink)">売上と原価の両方 → 利益</text><line x1="220" y1="204" x2="220" y2="228" stroke="var(--ink)" stroke-width="1.5"/><rect x="20" y="228" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="254" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">投資センター</text><text x="220" y="278" text-anchor="middle" fill="var(--ink)">利益 ＋ 資産への投資の判断</text><text x="220" y="318" text-anchor="middle" fill="var(--ink)">下に行くほど、責任者が決められる範囲が広い</text></svg>`,
          caption: '利益センターは、原価と売上の両方に責任を持つ。投資センターは、さらに使う資産（設備・在庫など）の判断まで任される。'
        },
        {
          title: 'たこ焼きチェーンで確かめる',
          list: ['セントラルキッチン: たこ焼きを作るだけ。原価を管理する → コストセンター', 'ネット販売チーム: 注文を取り、売上の目標を持つ → 収益センター', '難波店: 店長が売上もアルバイト代も管理する → 利益センター', '関西事業部: 新しい店を出すか（資産を買うか）まで決める → 投資センター']
        },
        {
          title: 'なぜ？ 決められる数字で評価する',
          paras: ['責任者が変えられない数字で評価されても、行動で良くすることができない。キッチンの責任者を売上で評価しても、売上はキッチンでは決められない。不公平で、やる気もなくなる。', 'そこで「決められること」と「評価される数字」をそろえる。これを管理可能性の原則（controllability principle）という。大きな会社でも、仕事を任せながら、任せた結果を測れるようになる。']
        },
        {
          title: '見分け方: 3つの質問',
          numbered: ['資産を買う・売るなど、投資を決める権限がある？ → はいなら投資センター', '売上と原価の両方に責任がある？ → はいなら利益センター', '売上だけなら収益センター、原価だけならコストセンター'],
          after: '部門の名前ではなく、責任者の権限で決まる。同じ営業部でも、値段や費用まで決められるなら利益センターになる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「もうけを出している部門＝利益センター」ではない。種類は責任者の権限で決まる。また、投資センターは「お金を運用する部門」という意味ではない。自分が使う資産（設備・在庫など）の判断まで任されている部門のこと。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['責任センターは4つ: コスト（原価）・収益（売上）・利益（売上と原価）・投資（利益＋資産）', '種類は部門の名前ではなく、責任者の権限で決まる', '責任者は自分が決められる数字で評価する（controllability）']
        },
        {
          title: '英単語',
          words: [
            ['responsibility accounting', 'レスポンシビリティ アカウンティング', '責任会計'],
            ['responsibility centre', 'レスポンシビリティ センター', '責任センター'],
            ['cost centre', 'コスト センター', 'コストセンター（原価だけに責任）'],
            ['revenue centre', 'レベニュー センター', '収益センター（売上だけに責任）'],
            ['profit centre', 'プロフィット センター', '利益センター（売上と原価に責任）'],
            ['investment centre', 'インベストメント センター', '投資センター（利益と投資に責任）'],
            ['controllability principle', 'コントローラビリティ プリンシプル', '管理可能性の原則'],
            ['division', 'ディビジョン', '事業部']
          ]
        }
      ],
      quiz: [
        { q: 'The manager of a division is responsible for its revenues and costs but cannot make decisions about buying non-current assets. Which type of responsibility centre is this?', choices: ['Cost centre', 'Revenue centre', 'Profit centre', 'Investment centre'], answer: 2, explain: '売上と原価の両方に責任がある＝利益センター。資産を買う権限がないので、投資センターではない。コストセンターは原価だけ、収益センターは売上だけ。' },
        { q: 'Which of the following is most likely to be an investment centre?', choices: ['A maintenance department that repairs machines for the factory', 'A sales team that is set a target for sales revenue', 'A shop whose manager controls its sales and running costs', 'A subsidiary whose manager can decide to buy new machinery'], answer: 3, explain: '機械を買うかどうか（投資）まで決められるのは子会社だけ。修理部門はコストセンター、売上目標だけの営業チームは収益センター、売上と費用を管理する店は利益センター。' },
        { q: '本社の経理部は、会社の帳簿をつけ、給与を計算する。売上はない。どのセンター？', choices: ['コストセンター', '収益センター', '利益センター', '投資センター'], answer: 0, explain: '売上がなく、原価（人件費など）だけに責任を持つのでコストセンター。' },
        { q: 'キッチンの責任者を、チェーン全体の売上で評価するのがよくない理由は？', choices: ['売上は原価より小さい数字だから', '責任者は売上を決められないので、行動で数字を良くできないから', '売上は1年に1回しか分からないから', 'キッチンは投資センターだから'], answer: 1, explain: '管理可能性の原則。評価は、責任者が決められる数字で行う。キッチンはコストセンターなので、原価で評価する。' },
        { q: 'Which of the following statements is/are correct? (1) A profit centre manager is responsible for both revenues and costs. (2) An investment centre manager is also responsible for the assets (capital) used by the centre.', choices: ['(1) only', '(2) only', 'Both (1) and (2)', 'Neither (1) nor (2)'], answer: 2, explain: 'どちらも正しい。投資センターは、利益センターの責任に、使う資産（投下資本）の責任が加わったもの。' }
      ]
    },
    {
      id: 'M022',
      no: 22,
      title: 'センターの責任者が必要とする情報',
      goal: '4つのセンターの責任者が、それぞれどんな情報を必要とするかを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B2(c)'],
      slides: [
        {
          title: '飲食店では、人によって見たい数字が違う',
          paras: ['料理長が見たいのは、食材費と捨てた食材の量。ホール係は、お客さんの数と1人あたりの注文額。', '店長は、売上と費用の両方、つまりもうけ。オーナーは、もうけに加えて「改装に使った500万円を何年で取り戻せるか」まで知りたい。持っている責任の範囲が、必要な情報の範囲になる。']
        },
        {
          title: '基本: 責任の範囲 ＝ 情報の範囲',
          formula: '必要な情報 ＝ 自分が責任を持ち、決められる数字',
          paras: ['4つのセンターは、責任の範囲が違う（前のレッスン）。だから責任者が必要とする情報も違う。', '利益センターはコストと収益の両方の情報、投資センターはさらに資産と投資の情報が要る。責任が広いセンターほど、狭いセンターの情報も含んで広くなる。']
        },
        {
          title: 'コストセンターの責任者',
          list: ['実際の原価と予算の比較（材料・労務・経費ごと）', '1単位あたりの原価、作った量', '使った資源: 材料の量、作業時間、遊休時間、ロス（無駄）'],
          table: {
            caption: 'キッチンの月次報告（例）',
            head: ['項目', '予算 $', '実際 $'],
            rows: [['材料費', '18,000', '18,900'], ['労務費', '12,000', '11,700'], ['製造間接費', '11,000', '11,400']],
            total: ['合計', '41,000', '42,000']
          }
        },
        {
          title: '収益センターの責任者',
          list: ['売上と予算の比較（商品別・地域別・顧客別）', '販売数量と販売価格', '市場の情報: 市場シェア、競合の価格、顧客からの注文や問い合わせ'],
          after: '製品の原価の情報はほとんど要らない。キッチンの材料費が上がっても、営業チームには直せないから。社外（市場）の情報が多いのが特徴。'
        },
        {
          title: '利益センターの責任者',
          list: ['売上と原価の両方（コストと収益の情報をまとめたもの）', '利益の計算書: 売上 − 変動費 ＝ 貢献利益、そこから固定費を引いた利益', '売上に対する利益の割合と、予算や他の店との比較'],
          after: '本社が決めた費用の配分額のように、責任者が決められない数字は、分けて見せる。'
        },
        {
          title: '投資センターの責任者',
          list: ['利益センターと同じ、売上・原価・利益の情報', '使っている資産の額: 設備などの非流動資産と、在庫・売掛金などの運転資本（working capital）', '新しい投資の案: 必要な金額、将来のキャッシュフロー、資本コスト（cost of capital）', '資産に対する利益の割合（ROI など。次のレッスン）']
        },
        {
          title: '図で見る: 細かさと期間の傾向',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="コストセンターは細かく頻繁な社内の数字、投資センターはまとめた形で長い期間と社外の情報も" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">情報の細かさと期間の傾向</text><text x="70" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">コスト</text><text x="170" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">収益</text><text x="270" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">利益</text><text x="370" y="86" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">投資</text><line x1="40" y1="112" x2="404" y2="112" stroke="var(--ink)" stroke-width="1.5"/><polygon points="404,106 416,112 404,118" fill="var(--ink)"/><circle cx="70" cy="112" r="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="170" cy="112" r="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="270" cy="112" r="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="370" cy="112" r="9" fill="var(--accent)" stroke="var(--accent)" stroke-width="2"/><text x="20" y="150" fill="var(--ink)">細かい・頻繁</text><text x="20" y="172" fill="var(--quiet)">社内の数字が中心</text><text x="420" y="150" text-anchor="end" fill="var(--ink)">まとめた形・長い期間</text><text x="420" y="172" text-anchor="end" fill="var(--quiet)">社外の情報も入る</text><text x="220" y="214" text-anchor="middle" fill="var(--ink)">投資センターは資産と投資案の情報も要る</text></svg>`,
          caption: 'キッチンには毎週の細かい数字、事業部には月ごとのまとめと長い期間の見通しが向いている。'
        },
        {
          title: 'なぜ？ 全員に同じ報告書を配らない理由',
          paras: ['情報は多ければよいわけではない。自分が決められない数字が大量に載った報告書は、読む時間がかかり、大事な数字が埋もれる。', 'よい情報の条件（レッスン5）である「目的に合っている（relevant）」「ちょうどよい細かさ」「間に合う（timely）」を、センターごとに満たすため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '投資センターの責任者にも、原価や売上の情報は要る。責任が広いセンターは、狭いセンターの情報を含んだうえで、資産と投資の情報が加わる。逆に、コストセンターの責任者に市場シェアや投資案の情報を渡しても使えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['コスト＝原価と使った資源、収益＝売上と市場、利益＝売上と原価の両方', '投資センターはさらに、資産の額と投資案（キャッシュフロー・資本コスト）', 'コストセンターは細かく頻繁、投資センターはまとめた形・長い期間・社外の情報も']
        },
        {
          title: '英単語',
          words: [
            ['information needs', '', '必要な情報'],
            ['actual vs budget', '', '実績と予算の比較'],
            ['idle time', 'アイドル タイム', '遊休時間（働けずに待った時間）'],
            ['market share', 'マーケット シェア', '市場シェア'],
            ['working capital', 'ワーキング キャピタル', '運転資本（在庫・売掛金など − 買掛金など）'],
            ['capital employed', 'キャピタル エンプロイド', '投下資本（使っている資産の額）'],
            ['cost of capital', 'コスト オブ キャピタル', '資本コスト'],
            ['capital expenditure', 'キャピタル エクスペンディチャー', '設備投資（資産を買う支出）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following would be LEAST useful to the manager of a cost centre?', choices: ['Actual material costs compared with budget', 'Hours of idle time in the department', 'The market share of the products sold by the company', 'The cost per unit of output'], answer: 2, explain: 'コストセンターの責任者は原価だけに責任を持つ。市場シェアは収益センターや利益センターの情報で、コストセンターでは行動に使えない。ほかの3つは原価と資源の使い方の情報。' },
        { q: 'Which information does an investment centre manager need that a profit centre manager does NOT need?', choices: ['Sales revenue compared with budget', 'The value of the assets used by the centre', 'Variable cost per unit', 'Contribution earned by each product'], answer: 1, explain: '投資センターは利益に加えて資産（投下資本）に責任を持つ。売上・変動費・貢献利益は、利益センターでも必要な情報。' },
        { q: '収益センター（営業部）の責任者にとって、最も役に立つ情報は？', choices: ['地域別の売上と予算の比較、競合の価格', '工場の機械の修理費', '本社の経理部の人件費', '工場の材料のロスの量'], answer: 0, explain: '収益センターは売上だけに責任を持つ。売上と市場の情報が必要。ほかの3つは原価の情報で、営業部には決められない。' },
        { q: '利益センターの報告書で、本社費の配分額を店の利益と分けて見せる理由は？', choices: ['本社費は費用ではないから', '本社費は投資センターだけが負担するから', '店長が決められない費用で、店長の評価がゆがまないようにするため', '本社費を見せると利益が大きく見えすぎるから'], answer: 2, explain: '本社費の配分額は本社が決める。店長が変えられない数字なので、店長が決められる利益と分けて見せる。本社費も費用であることに変わりはない。' },
        { q: 'コストセンターと投資センターの情報のちがいとして、正しいものは？', choices: ['コストセンターは社外の情報が中心、投資センターは社内の情報だけ', 'どちらも同じ報告書でよい', '投資センターには原価の情報は要らない', 'コストセンターは細かく頻繁な社内の数字、投資センターはまとめた形で長い期間・社外の情報も'], answer: 3, explain: '責任が広く期間の長い判断をするほど、まとめた情報と社外の情報が要る。投資センターにも原価の情報は要る（利益を出すのに必要）。' }
      ]
    },
    {
      id: 'M023',
      no: 23,
      title: 'センターごとの業績指標（ROI と残余利益を含む）',
      goal: 'センターに合った業績指標を選び、ROI と残余利益を計算して読めるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B2(d)'],
      slides: [
        {
          title: 'ポジションごとに成績の物差しが違う',
          paras: ['野球では、投手は防御率、打者は打率で評価する。投手を打率で評価しても意味がない。', 'センターも同じ。責任の範囲が違えば、成績を測る物差し（業績指標、performance measure）も変える。投資センターには、使った資産に対してどれだけもうけたかを測る指標が要る。']
        },
        {
          title: 'センターに合った指標を選ぶ',
          table: {
            caption: '主な業績指標',
            head: ['センター', '主な業績指標'],
            rows: [
              ['コスト', '予算との差（実際の量に合わせた予算と比べる）、1単位あたりの原価、材料のロス率、作業の能率'],
              ['収益', '売上と予算の差、販売数量、売上の伸び率、市場シェア、新しい顧客の数'],
              ['利益', '貢献利益、管理可能利益（controllable profit）、売上利益率（profit margin）、予算との差'],
              ['投資', '利益の指標に加えて、ROI（投下資本利益率）と残余利益（RI）']
            ]
          }
        },
        {
          title: '例題: 利益センター（難波店）を測る',
          example: {
            problem: '難波店の1年: 売上 $400,000、変動費 $240,000、店長が決められる固定費（アルバイト代・広告）$90,000、本社費の配分額 $30,000。貢献利益、貢献利益率、店長を評価する利益は？',
            steps: ['貢献利益 ＝ 売上 − 変動費 ＝ $400,000 − $240,000 ＝ $160,000', '貢献利益率 ＝ $160,000 ÷ $400,000 ＝ 40%', '管理可能利益 ＝ $160,000 − $90,000 ＝ $70,000（売上の17.5%）', '本社費 $30,000 は店長が決められないので、店長の評価から外す。店そのものの利益は $70,000 − $30,000 ＝ $40,000'],
            answer: '貢献利益 $160,000（40%）。店長は管理可能利益 $70,000 で評価する'
          }
        },
        {
          title: 'ROI（投下資本利益率）',
          formula: 'ROI ＝ 利益 ÷ 投下資本 × 100%',
          paras: ['投下資本（capital employed）は、センターが使っている資産の額（純資産）。利益は、ふつう管理可能利益（利息を引く前）を使う。試験では問題に書かれた数字を使う。', '関西事業部: 利益 $90,000、投下資本 $600,000。ROI ＝ $90,000 ÷ $600,000 ＝ 15%。率なので、大きさの違う事業部どうしでも比べやすい。']
        },
        {
          title: '残余利益（residual income, RI）',
          formula: 'RI ＝ 利益 − 投下資本 × 資本コスト率',
          paras: ['資本コスト（cost of capital）は、資金を使う代わりに会社が求める最低限のもうけの率。投下資本×資本コストを、みなしの利息（imputed interest）として利益から引く。', '関西事業部、資本コスト12%: みなしの利息 ＝ $600,000 × 12% ＝ $72,000。RI ＝ $90,000 − $72,000 ＝ $18,000。プラスなら、求められる最低限より多くもうけている。']
        },
        {
          title: '新店を出すべき？',
          paras: ['関西事業部に新店の案が来た。投資は $200,000、毎年の利益は $26,000。新店だけの ROI は 13%。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="部門のROI15%、新店の投資13%、資本コスト12%の比較" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">13% の投資は会社にとって得か？</text><rect x="60" y="90" width="80" height="150" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="180" y="110" width="80" height="130" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="300" y="120" width="80" height="120" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="100" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">15%</text><text x="220" y="100" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">13%</text><text x="340" y="110" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">12%</text><line x1="40" y1="240" x2="400" y2="240" stroke="var(--ink)" stroke-width="1.5"/><text x="100" y="262" text-anchor="middle" fill="var(--ink)">部門のROI</text><text x="220" y="262" text-anchor="middle" fill="var(--ink)">新店の投資</text><text x="340" y="262" text-anchor="middle" fill="var(--ink)">資本コスト</text><text x="220" y="290" text-anchor="middle" fill="var(--ink)">12% より上なので会社は得。でも ROI は下がる</text></svg>`
        },
        {
          title: '例題: ROI と RI で判断が分かれる',
          example: {
            problem: '関西事業部（利益 $90,000、投下資本 $600,000、資本コスト 12%）が新店に $200,000 投資し、毎年の利益が $26,000 増える。投資後の ROI と RI は？責任者はどう動く？',
            steps: ['投資後の利益 ＝ $90,000 ＋ $26,000 ＝ $116,000。投下資本 ＝ $600,000 ＋ $200,000 ＝ $800,000', 'ROI ＝ $116,000 ÷ $800,000 ＝ 14.5%。15% から下がる', 'RI ＝ $116,000 − $800,000 × 12% ＝ $116,000 − $96,000 ＝ $20,000。$18,000 から $2,000 増える', '新店だけの RI ＝ $26,000 − $200,000 × 12% ＝ $2,000（プラス）'],
            answer: 'ROI で評価される責任者は、ROI が下がるので断りたくなる。会社には得な投資（13% は 12% より上）で、RI で評価されるなら受けたくなる'
          }
        },
        {
          title: 'なぜ？ RI は ROI の弱点を補う',
          paras: ['部門の ROI より低いが、資本コストより高い投資は、会社にはプラスなのに ROI を下げる。責任者の得と会社の得がずれる（目標の不一致）。RI なら、資本コストを上回る投資で必ず増える。'],
          table: {
            caption: 'ROI と RI の長所・短所',
            head: ['点', 'ROI', 'RI'],
            rows: [
              ['長所', '率なので、規模の違う部門を比べやすい', '資本コストを上回る投資で増え、会社の目標と一致しやすい'],
              ['短所', '会社に得な投資を断らせることがある', '金額なので大きい部門ほど有利。規模の違う部門を比べにくい']
            ]
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① RI で引くのは「利益 × 資本コスト」ではなく「投下資本 × 資本コスト」。② ROI は高ければよいとは限らない。投資案の ROI を比べる相手は資本コスト。③ 投下資本を帳簿価額で測ると、減価償却で毎年小さくなり、何もしなくても ROI と RI が上がる。古い設備を新しくしたくなくなる原因になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['コスト＝予算との差・単位原価、収益＝売上・市場シェア、利益＝貢献利益・管理可能利益', 'ROI ＝ 利益 ÷ 投下資本、RI ＝ 利益 − 投下資本 × 資本コスト', 'ROI は会社に得な投資を断らせることがある。RI は規模の違う部門を比べにくい']
        },
        {
          title: '英単語',
          words: [
            ['performance measure', 'パフォーマンス メジャー', '業績指標'],
            ['controllable profit', 'コントローラブル プロフィット', '管理可能利益'],
            ['contribution', 'コントリビューション', '貢献利益（売上 − 変動費）'],
            ['profit margin', 'プロフィット マージン', '売上利益率'],
            ['return on investment (ROI)', 'リターン オン インベストメント', '投下資本利益率'],
            ['residual income (RI)', 'レジデュアル インカム', '残余利益'],
            ['imputed interest', 'インピューテッド インタレスト', 'みなしの利息（投下資本 × 資本コスト）'],
            ['goal congruence', 'ゴール コングルーエンス', '目標の一致（責任者と会社の得がそろうこと）']
          ]
        }
      ],
      quiz: [
        { q: 'Division X has controllable profit of $45,000 and capital employed of $300,000. The cost of capital is 10%. What is the residual income of Division X?', type: 'number', answer: 15000, unit: '$', explain: 'みなしの利息は $300,000 × 10% ＝ $30,000。RI ＝ $45,000 − $30,000 ＝ $15,000。$45,000 × 10% を引いて $40,500 とするのは間違い。' },
        { q: 'B事業部の利益は $72,000、投下資本は $480,000。ROI は何%？', type: 'number', answer: 15, unit: '%', explain: '$72,000 ÷ $480,000 × 100% ＝ 15%。' },
        { q: 'Which of the following is the most appropriate measure of the performance of a revenue centre manager?', choices: ['Return on investment', 'Actual sales revenue compared with budgeted sales revenue', 'Cost per unit produced', 'Residual income'], answer: 1, explain: '収益センターは売上だけに責任を持つので、売上と予算の比較が合う。ROI と RI は資産に責任を持つ投資センターの指標、1単位あたりの原価はコストセンターの指標。' },
        { q: 'Which of the following is a disadvantage of residual income compared with return on investment?', choices: ['It is difficult to use for comparing divisions of different sizes', 'It may lead managers to reject projects that earn more than the cost of capital', 'It ignores the cost of capital', 'It can only be used for cost centres'], answer: 0, explain: 'RI は金額なので、大きい部門ほど大きくなりやすく、規模の違う部門を比べにくい。2つ目は ROI の弱点。RI は資本コストを引いて計算するので、3つ目は逆。RI は投資センターの指標。' },
        { q: 'C事業部の ROI は 18%、会社の資本コストは 12%。ROI 15% の投資案がある。ROI で評価される責任者はどうしやすく、会社にとってはどうか？', choices: ['ROI が上がるので受けやすい。会社にとっても得な投資', 'ROI が下がるので断りやすい。会社にとっても損な投資', 'ROI が下がるので断りやすい。会社にとっては得な投資', 'ROI は変わらないので、どちらでもよい'], answer: 2, explain: '15% は部門の 18% より低いので、受けると部門の ROI は下がる。でも資本コスト 12% より高いので、会社にとっては得。これが ROI の弱点（目標の不一致）。' },
        { q: 'D事業部: 利益 $60,000、投下資本 $400,000、資本コスト 10%。$100,000 を投資して毎年の利益が $12,000 増える案を受けた。投資後の D事業部の残余利益は？', type: 'number', answer: 22000, unit: '$', explain: '利益 $72,000、投下資本 $500,000。RI ＝ $72,000 − $500,000 × 10% ＝ $22,000（投資前の $20,000 から $2,000 増える）。ROI は 15% から 14.4% に下がるが、RI は増える。' }
      ]
    },
    {
      id: 'M024',
      no: 24,
      title: '総合演習: 原価の分類・原価の動き・高低点法',
      goal: '原価の分類・原価の動き・高低点法・業績指標を、ひとつのケースで通して使えるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B1(a)', 'K2:B1(c)', 'K2:B1(e)', 'K2:A4(c)', 'K2:B2(d)'],
      slides: [
        {
          title: 'まとめ①: 原価の分類（3つの軸）',
          paras: ['第2部のまとめ。冷凍たこ焼きを作る Tako Co のキッチンを例に、分類・原価の動き・高低点法・業績の測り方を通して練習する。'],
          table: {
            caption: '1つの原価を3つの軸で分ける',
            head: ['軸', '分け方'],
            rows: [
              ['機能', '製造原価（production）/ 非製造原価（管理・販売・流通・財務）'],
              ['製品との関係', '直接費（direct）/ 間接費（indirect）。直接費の合計が素価（prime cost）'],
              ['形態（nature）', '材料費 / 労務費 / 経費']
            ]
          }
        },
        {
          title: 'まとめ②: 原価の動き（4種類）',
          table: {
            caption: '量が増えたときの動き',
            head: ['種類', '総額', '1単位あたり'],
            rows: [
              ['変動費（variable）', '量に比例して増える', '一定'],
              ['固定費（fixed）', '一定', '量が増えると下がる'],
              ['階段状の固定費（stepped fixed）', 'ある量を超えると段で増える', '段の中では下がる'],
              ['準変動費（semi-variable）', '固定部分 ＋ 変動部分', '量が増えると下がる']
            ]
          },
          formula: '総原価 y ＝ 固定費 a ＋ 1単位の変動費 b × 量 x'
        },
        {
          title: '例題1: 分類して素価と製造原価を出す',
          example: {
            problem: 'ある月、Tako Co は10,000パックを作った。原価: 材料（小麦粉・たこ）$18,000、焼く作業員の賃金 $12,000、レシピの使用料（1パック $0.10）$1,000、工場の監督者の給料 $2,500、工場の家賃 $3,500、工場の電気・ガス $5,000、配送トラック $3,000、事務所の給料 $6,000、広告 $2,500、借入金の利息 $500。素価、製造原価、1パックの製造原価、非製造原価は？',
            steps: ['直接費: 材料 $18,000 ＋ 賃金 $12,000 ＋ 使用料 $1,000 ＝ 素価 $31,000', '製造間接費: 監督者 $2,500 ＋ 家賃 $3,500 ＋ 電気・ガス $5,000 ＝ $11,000', '製造原価 ＝ $31,000 ＋ $11,000 ＝ $42,000。1パックは $42,000 ÷ 10,000 ＝ $4.20', '非製造原価: 配送（流通）$3,000 ＋ 事務所（管理）$6,000 ＋ 広告（販売）$2,500 ＋ 利息（財務）$500 ＝ $12,000'],
            answer: '素価 $31,000、製造原価 $42,000（1パック $4.20。在庫はこの単価で評価）、非製造原価 $12,000（その期の費用）'
          }
        },
        {
          title: '例題2のデータ: 製造間接費と生産量',
          paras: ['キッチンの製造間接費（監督者・家賃・電気・ガス）の記録。生産が10,000パックを超える月は、監督者をもう1人雇うので、固定費が $2,000 増える。1パックの変動費は一定。'],
          table: {
            caption: 'Tako Co キッチン',
            head: ['月', '生産量（パック）', '製造間接費 $'],
            rows: [['4月', '8,000', '10,000'], ['5月', '6,000', '9,000'], ['6月', '14,000', '15,000'], ['7月', '11,000', '13,500']]
          }
        },
        {
          title: '例題2: 階段のある高低点法',
          example: {
            problem: '前のスライドのデータから、1パックの変動費と固定費を出し、12,000パックの月の製造間接費を予測する。',
            steps: ['量（パック数）で最高と最低を選ぶ: 最高は6月 14,000、最低は5月 6,000', '6月は固定費が $2,000 多い。先に引いて段をそろえる: $15,000 − $2,000 ＝ $13,000', '変動費 ＝ ($13,000 − $9,000) ÷ (14,000 − 6,000) ＝ $4,000 ÷ 8,000 ＝ $0.50', '固定費（10,000以下）＝ $9,000 − 6,000 × $0.50 ＝ $6,000。10,000を超えると $8,000', '12,000パック: $8,000 ＋ 12,000 × $0.50 ＝ $14,000'],
            answer: '変動費は1パック $0.50、固定費は $6,000（10,000超は $8,000）。12,000パックの月は $14,000'
          }
        },
        {
          title: '例題3: 変動費の単価が途中で変わる',
          example: {
            problem: '15,000パックを超えた分は、夜間の割増料金で電気・ガスが1パック $0.80 になる（固定費は20,000パックまで $8,000 のまま）。16,000パックの月の製造間接費は？',
            steps: ['固定費: $8,000', '15,000パックまで: 15,000 × $0.50 ＝ $7,500', '超えた1,000パック: 1,000 × $0.80 ＝ $800', '合計: $8,000 ＋ $7,500 ＋ $800 ＝ $16,300', '逆に、高低点法で単価を求めるときも同じ。最高点に単価の違う分が入っていたら、その分を換算してから原価の差を割る（クイズで練習）'],
            answer: '$16,300。単価が変わるのは超えた分だけなので、16,000 × $0.80 では計算しない'
          }
        },
        {
          title: '例題4: 1パックあたりの原価は量で変わる',
          example: {
            problem: '5,000パックの月と10,000パックの月で、1パックあたりの製造間接費は？ 10,000パックのときの単価で、12,000パックの月を見積もってよい？',
            steps: ['5,000パック: $6,000 ＋ 5,000 × $0.50 ＝ $8,500 → 1パック $1.70', '10,000パック: $6,000 ＋ 10,000 × $0.50 ＝ $11,000 → 1パック $1.10', '固定費がより多くのパックに分かれるので、量が増えると単価が下がる', '$1.10 × 12,000 ＝ $13,200 は間違い。正しくは例題2の $14,000（増えた固定費と変動費を式で足す）'],
            answer: '単価は $1.70 → $1.10。見積もりは単価のかけ算ではなく「固定費 ＋ 変動費 × 量」の式で出す'
          }
        },
        {
          title: '例題5: キッチン（コストセンター）を測る',
          example: {
            problem: 'キッチンはコストセンター。当初の予算は10,000パックで製造間接費 $11,000。実際は12,000パックを作り、製造間接費は $14,600 だった。キッチンの責任者は使いすぎた？',
            steps: ['当初の予算と比べると $14,600 − $11,000 ＝ $3,600 多い。でも作った量が多いので、この比べ方は不公平', '実際の量で計算し直す: 12,000パックなら $8,000 ＋ 12,000 × $0.50 ＝ $14,000 かかるはず', '$14,600 − $14,000 ＝ $600 の使いすぎ（不利、adverse）。これが責任者の管理の結果'],
            answer: '使いすぎは $600。なぜ？ 量が増えた分の原価は責任者のせいではないので、実際の量に合わせた原価と比べる'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '高低点法は、原価ではなく量（活動量）で最高と最低を選ぶ。階段状の固定費は、変動費を出す前に段をそろえる（足すか引くか確かめる）。変動費の単価が変わるときは「超えた分だけ」か「全部の量」かを問題文で読む。1単位の原価に量をかけて見積もらない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['分類は3つの軸: 機能（製造・非製造）、直接・間接（素価）、形態（材料・労務・経費）', '高低点法: 量で最高と最低を選び、段をそろえてから b ＝ 原価の差 ÷ 量の差、a ＝ 総原価 − b × 量', '見積もりと業績の評価は「固定費 ＋ 変動費 × 実際の量」の式で行う']
        },
        {
          title: '英単語',
          words: [
            ['prime cost', 'プライム コスト', '素価（直接費の合計）'],
            ['production overheads', 'プロダクション オーバーヘッズ', '製造間接費'],
            ['non-production costs', '', '非製造原価（管理・販売・流通・財務）'],
            ['cost behaviour', 'コスト ビヘイビア', '原価の動き'],
            ['activity level', 'アクティビティ レベル', '活動量（生産量・作業時間など）'],
            ['high-low method', 'ハイロー メソッド', '高低点法'],
            ['stepped fixed cost', 'ステップト フィクスト コスト', '階段状の固定費'],
            ['semi-variable cost', 'セミ ヴァリアブル コスト', '準変動費']
          ]
        }
      ],
      quiz: [
        { q: 'A company makes wooden tables. Which of the following costs is a production overhead?', choices: ['Wood used to make the tables', 'Salary of the factory supervisor', 'Salary of the sales director', 'Interest on a bank loan'], answer: 1, explain: '工場の監督者は製造に関わるが、特定のテーブルには直接結びつかない＝製造間接費。木材は直接材料費（素価の一部）。営業部長の給料は販売費、借入金の利息は財務費で、どちらも非製造原価。' },
        { q: 'Total costs are $40,000 at an output of 5,000 units and $59,800 at an output of 12,000 units. Fixed costs are constant. The variable cost per unit is 20% lower for each unit produced above 10,000 units. What is the variable cost per unit for output up to 10,000 units?', choices: ['$2.40', '$2.83', '$3.00', '$4.30'], answer: 2, explain: '10,000個までの単価を b とおく。増えた7,000個のうち、10,000個までの5,000個は b、超えた2,000個は 0.8b。原価の差 $59,800 − $40,000 ＝ $19,800 ＝ 5,000b ＋ 1,600b ＝ 6,600b。b ＝ $3.00（固定費は $40,000 − 5,000 × $3 ＝ $25,000）。$2.83 は単価の変化を無視して 7,000 で割った答え。$4.30 は全部の量の単価が下がるとした答え。$2.40 は超えた分の単価。' },
        { q: 'Total costs are $11,000 when 2,000 units are produced and $18,500 when 5,000 units are produced. Using the high-low method, what is the expected total cost of producing 4,000 units?', type: 'number', answer: 16000, unit: '$', explain: '変動費 ＝ ($18,500 − $11,000) ÷ (5,000 − 2,000) ＝ $2.50。固定費 ＝ $11,000 − 2,000 × $2.50 ＝ $6,000。4,000個: $6,000 ＋ 4,000 × $2.50 ＝ $16,000。' },
        { q: 'Total costs were $19,000 at an output of 3,000 units and $36,000 at an output of 8,000 units. Fixed costs increase by $4,000 when output exceeds 5,000 units. The variable cost per unit is constant. What is the variable cost per unit?', choices: ['$2.60', '$3.40', '$4.20', '$6.33'], answer: 0, explain: 'まず段をそろえる: $36,000 − $4,000 ＝ $32,000。($32,000 − $19,000) ÷ (8,000 − 3,000) ＝ $2.60。$3.40 は段を無視した答え。$4.20 は $4,000 を引かずに足した答え。$6.33 は $19,000 ÷ 3,000 で、固定費まで単価に入れた答え。' },
        { q: 'スマホの料金プラン: 毎月の基本料 3,000円 ＋ 通話1分ごとに 20円。この費用の動きは？', choices: ['変動費', '固定費', '階段状の固定費', '準変動費'], answer: 3, explain: '使わなくてもかかる固定部分（基本料）と、使った分だけ増える変動部分（通話料）を合わせ持つので準変動費。' },
        { q: 'A regional division has authority to open new shops and buy equipment. Which measure is most appropriate for assessing the performance of its manager?', choices: ['Cost per unit', 'Sales revenue compared with budget', 'Residual income', 'Number of customer complaints'], answer: 2, explain: '新しい店や設備に投資する権限がある＝投資センター。使う資産まで考える残余利益（RI）や ROI が合う。1単位あたりの原価はコストセンター、売上と予算の比較は収益センターの指標。苦情の数は一部しか測れない。' }
      ]
    }
  ],
  cards: [
    { id: 'M021-1', lesson: 'M021', q: 'コストセンター（cost centre）の責任者が責任を持つのは？', a: '原価だけ。売上には責任を持たない' },
    { id: 'M021-2', lesson: 'M021', q: 'revenue centre とは？', a: '売上（収益）だけに責任を持つセンター。例: 売上目標を持つ営業部' },
    { id: 'M021-3', lesson: 'M021', q: '利益センターと投資センターのちがいは？', a: '投資センターは、利益に加えて資産への投資（設備を買う等）も決められる' },
    { id: 'M021-4', lesson: 'M021', q: '責任センターの種類は何で決まる？', a: '部門の名前ではなく、責任者の権限（何を決められるか）' },
    { id: 'M021-5', lesson: 'M021', q: 'なぜ「決められる数字」で評価する？', a: '変えられない数字では行動で改善できず、不公平でやる気も下がるから' },
    { id: 'M022-1', lesson: 'M022', q: 'コストセンターの責任者に必要な情報は？', a: '実際の原価と予算の比較、単位原価、材料の量・作業時間・ロス' },
    { id: 'M022-2', lesson: 'M022', q: '収益センターの責任者に必要な情報は？', a: '売上と予算の比較、販売数量・価格、市場シェアや競合の価格' },
    { id: 'M022-3', lesson: 'M022', q: '投資センターだけに加わる情報は？', a: '使っている資産の額（投下資本）と投資案（キャッシュフロー・資本コスト）' },
    { id: 'M022-4', lesson: 'M022', q: '利益センターの報告で本社費の配分額を分けるのはなぜ？', a: '店長が決められない費用なので、店長の評価に混ぜないため' },
    { id: 'M022-5', lesson: 'M022', q: 'コストセンターと投資センターで情報の傾向はどう違う？', a: 'コストは細かく頻繁な社内の数字、投資はまとめた形・長い期間・社外も' },
    { id: 'M023-1', lesson: 'M023', q: 'ROI の式は？', a: 'ROI ＝ 利益（管理可能利益）÷ 投下資本 × 100%' },
    { id: 'M023-2', lesson: 'M023', q: '残余利益（RI）の式は？', a: 'RI ＝ 利益 − 投下資本 × 資本コスト率' },
    { id: 'M023-3', lesson: 'M023', q: 'ROI の弱点は？', a: '部門の ROI より低いが資本コストより高い（会社に得な）投資を断らせる' },
    { id: 'M023-4', lesson: 'M023', q: 'RI の弱点は？', a: '金額なので、規模の違う部門を比べにくい' },
    { id: 'M023-5', lesson: 'M023', q: '利益センターの店長を評価する利益は？', a: '管理可能利益。本社費の配分額など、決められない費用は除く' },
    { id: 'M023-6', lesson: 'M023', q: '収益センターに向く業績指標を2つ', a: '売上と予算の差、市場シェア（販売数量・売上の伸び率も可）' },
    { id: 'M024-1', lesson: 'M024', q: '素価（prime cost）とは？', a: '直接材料費 ＋ 直接労務費 ＋ 直接経費の合計' },
    { id: 'M024-2', lesson: 'M024', q: '高低点法で最高と最低を選ぶ基準は？', a: '原価ではなく、量（活動量）の最高と最低' },
    { id: 'M024-3', lesson: 'M024', q: '高低点法で階段状の固定費があるときは？', a: '変動費を出す前に、段の分の固定費を足し引きして段をそろえる' },
    { id: 'M024-4', lesson: 'M024', q: '量が増えると、1単位あたりの固定費は？', a: '下がる。だから単価×量で見積もらず、a ＋ bx の式で見積もる' },
    { id: 'M024-5', lesson: 'M024', q: 'コストセンターの実際の原価は何と比べる？', a: '実際の量で計算し直した原価（固定費 ＋ 変動費 × 実際の量）' },
    { id: 'M024-6', lesson: 'M024', q: '途中で変動費の単価が変わるときの高低点法は？', a: '単価の違う分を換算（例 0.8倍）してから、原価の差を割る' }
  ]
});
