(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 23,
  part: 15,
  partTitle: '事業の形とルールの枠組み',
  lessons: [
    {
      id: 'L112',
      no: 112,
      title: '財務諸表に対する取締役の責任',
      goal: '財務諸表について取締役が負う義務と責任を挙げ、監査人の役割との違いを説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['A5(b)'],
      slides: [
        {
          title: '町内会の会計係',
          paras: ['町内会では、みんなから会費を預かる会計係がいる。年に1回の総会で「いくら集めて、何に使ったか」を報告する。', '報告書を作るのは会計係本人。別の人（会計監査）が領収書と照らし合わせてチェックするが、チェック役が報告書を作るわけではない。会社もこれと同じ形になっている。']
        },
        {
          title: '会社では誰が会計係？',
          paras: ['有限責任会社（limited liability company）の持ち主は株主（shareholders）。でも株主は毎日会社に来て経営するわけではない。', '株主は取締役（directors）を選び、経営を任せる。前のレッスンのガバナンス責任者（those charged with governance）の中心がこの取締役。財務諸表（financial statements）を作って株主に報告する責任も、取締役が負う。']
        },
        {
          title: '3者の役割',
          svg: `<svg viewBox="0 0 440 400" role="img" aria-label="株主・取締役・監査人の役割" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">財務諸表をめぐる3者の役割</text><rect x="20" y="52" width="400" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="82" font-size="16" font-weight="600" fill="var(--ink)">株主（shareholders）</text><text x="40" y="108" fill="var(--ink)">会社の持ち主。毎日の経営は見られない</text><path d="M220 130V154" stroke="var(--edge)" stroke-width="1.5"/><path d="M214 152L220 160L226 152z" fill="var(--edge)"/><text x="236" y="150" fill="var(--quiet)">経営を任せる</text><rect x="20" y="164" width="400" height="76" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="194" font-size="16" font-weight="600" fill="var(--ink)">取締役（directors）</text><text x="40" y="220" fill="var(--ink)">財務諸表を作る責任を負う</text><path d="M220 242V266" stroke="var(--edge)" stroke-width="1.5"/><path d="M214 264L220 272L226 264z" fill="var(--edge)"/><text x="236" y="262" fill="var(--quiet)">作った財務諸表</text><rect x="20" y="276" width="400" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="306" font-size="16" font-weight="600" fill="var(--ink)">監査人（auditors）</text><text x="40" y="332" fill="var(--ink)">チェックして意見を出すだけ</text><text x="220" y="384" text-anchor="middle" fill="var(--ink)">作るのは取締役、確かめるのは監査人</text></svg>`,
          caption: '監査人は「財務諸表が真実かつ公正か」について意見（opinion）を株主に出す。作る責任は最後まで取締役にある。'
        },
        {
          title: '取締役の責任①: 作る・記録する・守る',
          list: ['財務諸表を作成し、真実かつ公正な概観（true and fair view）を示す。IFRS では「適正な表示（fair presentation）」と呼ぶ', '適用されるルール（IFRS 会計基準と会社法）に従う', '適切な会計記録（accounting records）をつけ続ける', '内部統制（internal control）を整え、不正と誤り（fraud and error）を防ぎ、見つける', '会社の資産を守る（safeguard the assets）']
        },
        {
          title: '取締役の責任②: 判断する・承認する',
          list: ['適切な会計方針（accounting policies）を選び、毎期続けて使う', '見積り（estimates）と判断を、合理的で慎重に行う。例: 耐用年数、貸倒引当金、引当金', '会社が事業を続けられるか（継続企業、次のレッスン）を判断する', '財務諸表を承認・署名し、株主に報告して期限内に公表・提出する'],
          after: 'どれも、前の部で学んだ記帳や期末調整の「最終責任者」が取締役だということ。'
        },
        {
          title: 'なぜ？ 取締役が報告する理由',
          paras: ['株主はお金を出したが、使い道は取締役が決めている。人のお金を預かって運用する人には、「預かったお金をどう使い、どうなったか」を説明する責任がある。これを受託責任（stewardship）という。', 'また取締役は、会社の利益のために誠実に行動し、合理的な注意を払う義務（duties）を負う。自分の成績表を自分で作る立場なので、外部の監査人がチェックする仕組みになっている。']
        },
        {
          title: 'たこ焼きチェーンで確かめる',
          paras: ['Takoya Ltd の経理部長が試算表から財務諸表を作り、監査法人がチェックした。後で売上の二重計上が見つかった。', '責任を負うのは取締役。作業を経理部長に任せても、チェックを監査人に頼んでも、財務諸表に対する責任は取締役から移らない。'],
          note: { kind: 'warn', text: 'よくある間違い: 「監査人が財務諸表を作る」「監査済みなら誤りの責任は監査人」と考える。監査人の仕事は意見を出すこと。作成・記録・内部統制の責任は取締役にある。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['財務諸表を作る責任は取締役。監査人は意見を出すだけ', '取締役は記録をつけ、内部統制で不正・誤りを防ぎ、資産を守る', '理由は受託責任。株主のお金を預かって経営しているから']
        },
        {
          title: '英単語',
          words: [
            ['directors', 'ディレクターズ', '取締役'],
            ['shareholders', 'シェアホルダーズ', '株主'],
            ['those charged with governance', '', 'ガバナンス責任者'],
            ['true and fair view', '', '真実かつ公正な概観'],
            ['fair presentation', '', '適正な表示（IFRS の言い方）'],
            ['internal control', 'インターナル・コントロール', '内部統制'],
            ['fraud and error', '', '不正と誤り'],
            ['stewardship', 'スチュワードシップ', '受託責任（預かったお金の説明責任）'],
            ['auditor', 'オーディター', '監査人']
          ]
        }
      ],
      quiz: [
        { q: '内部統制を整えて、不正や誤りを防ぎ見つける責任は誰にある？', choices: ['外部の監査人', '取締役', '株主', '税務署'], answer: 1, explain: '内部統制と会計記録の責任は取締役にある。監査人は財務諸表について意見を出す立場で、内部統制を整える責任は負わない。' },
        { q: 'Which of the following is NOT a responsibility of the directors in relation to the financial statements?', choices: ['Maintaining adequate accounting records', 'Expressing an independent opinion on whether the financial statements give a true and fair view', 'Selecting suitable accounting policies and applying them consistently', 'Taking reasonable steps to prevent and detect fraud and error'], answer: 1, explain: '独立した意見を出すのは外部監査人（auditors）の仕事。記録・会計方針・不正防止はどれも取締役の責任。' },
        { q: 'なぜ取締役は、財務諸表で株主に報告する責任を負う？', choices: ['株主のお金を預かって経営しているから（受託責任）', '法人税を計算するためだけ', '監査人に頼まれたから', '取締役が会社の持ち主だから'], answer: 0, explain: '持ち主は株主で、取締役は経営を任されている。預かったお金の使い道と結果を説明する責任が受託責任（stewardship）。' },
        { q: '経理部長が作り、監査法人がチェックした財務諸表に誤りがあった。財務諸表に対する責任を負うのは？', choices: ['経理部長だけ', '監査法人', '取締役（作業を任せても責任は残る）', '株主'], answer: 2, explain: '作業を部下に任せても、チェックを監査人に頼んでも、作成責任は取締役から移らない。' },
        { q: 'Who is responsible for the preparation of the financial statements of a limited liability company?', choices: ['The external auditors', 'The shareholders', 'The directors', 'The IFRS Foundation'], answer: 2, explain: '作成責任は取締役（directors）。株主は報告を受ける側、監査人はチェックする側、IFRS 財団は基準を作る側。' }
      ]
    },
    {
      id: 'L113',
      no: 113,
      title: '原則①: 継続企業・重要性・相殺',
      goal: '継続企業・重要性・相殺の3つの原則を定義し、財務諸表の金額や表示にどう効くかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['B1(a)i', 'B1(a)iii', 'B1(a)iv'],
      slides: [
        {
          title: '引越しの予定で、家具の値段が変わる',
          paras: ['10万円で買ったソファを3年使っている。このまま住み続けるなら、ソファは「あと何年か使う家具」。買った値段から使った分を引いた金額で考えるのが自然。', 'でも来週、海外に引っ越して家具を全部売るなら話は別。中古で売れる1万円くらいが本当の価値になる。会社も「この先も続くかどうか」で金額の付け方が変わる。']
        },
        {
          title: '継続企業（going concern）',
          paras: ['継続企業とは、会社が予見可能な将来（foreseeable future）にわたって事業を続けると仮定して、財務諸表を作る考え方。会社をたたむ（清算する、liquidate）意図も必要もなく、事業を大きく縮小する予定もない、という前提。', '予見可能な将来は、期末から少なくとも12か月を目安に見る。この前提が成り立つかどうかを判断するのは取締役。']
        },
        {
          title: '続く会社と、閉じる会社',
          table: {
            caption: 'Takoya Ltd の焼き器（原価 $10,000、減価償却累計額 $4,000、今売ると $1,500）',
            head: ['項目', '継続企業', '続かない（清算基準）'],
            rows: [
              ['金額', '$6,000（原価−累計額）', '$1,500（今売れる額）'],
              ['分類', '非流動資産', 'すぐ売るので流動資産'],
              ['減価償却', '耐用年数に分けて続ける', '意味がなくなる']
            ]
          },
          after: '継続企業の前提が成り立たないときは、清算基準（break-up basis）で作る。資産は今売れる見込みの額で測り、閉鎖にかかるコストも負債にする。'
        },
        {
          title: 'なぜ？ 継続企業が土台になる理由',
          paras: ['減価償却は「何年も使い続ける」から、原価を耐用年数に分けて費用にする。前払費用も「来年もサービスを受ける」から資産になる。どちらも会社が続くことが前提。続かないなら、焼き器は「売るしかない中古品」になる。', '前提を疑うサインは、借入や仕入代金を払えない、銀行が融資（当座借越の枠など）を打ち切る、大口の得意先を失う、など。'],
          note: { kind: 'warn', text: 'よくある間違い: 「赤字なら継続企業ではない」。損失があっても、資金を確保して続けられるなら継続企業。基準は「続けられるか」で、利益の有無ではない。' }
        },
        {
          title: '重要性（materiality）',
          paras: ['家計簿で1円のずれは気にしないが、10万円のずれは大問題。会計も同じ考え方をする。', '情報を省いたり、間違えたり、分かりにくく埋もれさせたりしたときに、財務諸表の利用者の判断に影響すると合理的に予想されるなら、その情報は重要（material）。']
        },
        {
          title: '重要性は「大きさ」と「性質」で決まる',
          list: ['大きさ（size、magnitude）: 売上 $10,000,000 の会社で $50 の誤りは重要でない。売上 $20,000 の店なら同じ $50 でも目立つ', '性質（nature）: 取締役への貸付金や、法律違反に関わる支払いは、少額でも重要になりうる', '会社ごとに違う（entity-specific）: IFRS に「利益の何%」という決まった基準はない。判断で決める'],
          after: '重要でない項目は簡単に処理してよい。例: 数年使う $15 のホッチキスも、資産にせず費用にする。小さい項目はまとめて1行で表示してよい。'
        },
        {
          title: '相殺（offsetting）',
          paras: ['友達Aに5万円貸していて、友達Bから3万円借りている。「差し引き2万円の貸し」とだけ書くと、借金があることが見えなくなる。', 'IAS 1 のルール: 資産と負債、収益と費用は、IFRS 会計基準が求めるか認める場合を除き、相殺（差し引き）してはいけない。総額（gross）で別々に表示する。']
        },
        {
          title: '相殺の例',
          paras: ['Takoya Ltd は X 銀行に預金 $8,000、Y 銀行に当座借越（overdraft）$3,000 がある。財政状態計算書では、流動資産に預金 $8,000、流動負債に当座借越 $3,000 と別々に載せる。差し引いた純額で「預金 $5,000」とだけ書くのは誤り。', '売上と売上原価も同じ。差額の売上総利益だけでなく、両方を載せる。'],
          note: { kind: 'tip', text: '相殺に当たらないもの: 売掛金から貸倒引当金を差し引いて載せること（資産の評価で、相殺ではない）。また、固定資産の売却損益を「売却額−帳簿価額」の純額で示すのは、IFRS が認める例外。' }
        },
        {
          title: 'なぜ？ 相殺しない理由',
          paras: ['総額でないと、会社の規模とリスクが見えないから。預金 $5,000 だけの会社と、預金 $8,000 と借越 $3,000 がある会社は、純額は同じでも中身が違う。後者は Y 銀行に返すお金があり、利息もかかる。', '売上 $100,000・費用 $95,000 の会社と、売上 $10,000・費用 $5,000 の会社も、利益は同じ $5,000 でも規模がまるで違う。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['継続企業: この先も続くと仮定して作る。続かないなら清算基準', '重要性: 利用者の判断を変えうる情報か。大きさと性質で、会社ごとに判断', '相殺: 資産と負債、収益と費用は、原則として差し引かずに別々に載せる']
        },
        {
          title: '英単語',
          words: [
            ['going concern', 'ゴーイング・コンサーン', '継続企業'],
            ['foreseeable future', 'フォーシーアブル・フューチャー', '予見可能な将来'],
            ['break-up basis', 'ブレイクアップ・ベーシス', '清算基準'],
            ['liquidate', 'リクイデイト', '清算する、会社をたたむ'],
            ['materiality / material', 'マテリアリティ', '重要性 / 重要な'],
            ['offsetting', 'オフセッティング', '相殺'],
            ['overdraft', 'オーバードラフト', '当座借越'],
            ['gross / net', 'グロス / ネット', '総額 / 純額']
          ]
        }
      ],
      quiz: [
        { q: 'Which accounting concept assumes that an entity will continue in operation for the foreseeable future?', choices: ['Accruals', 'Going concern', 'Prudence', 'Consistency'], answer: 1, explain: '事業を続けると仮定するのが going concern（継続企業）。accruals は発生した期に計上する考え方で別物。' },
        { q: '来月で閉店し、資産を全部売ることが決まった店。焼き器はどの金額で載せる？', choices: ['取得原価のまま', '取得原価−減価償却累計額', '今売れる見込みの額（清算基準）', '耐用年数が残っているので帳簿価額のまま'], answer: 2, explain: '継続企業の前提が成り立たないので清算基準（break-up basis）。使い続けないので、原価−累計額ではなく今売れる額で測る。' },
        { q: 'A company has $8,000 in a current account with Bank X and an overdraft of $3,000 with Bank Y. How should these be presented in the statement of financial position?', choices: ['Cash at bank of $5,000 as a current asset', 'Cash at bank of $8,000 as a current asset and an overdraft of $3,000 as a current liability', 'Cash at bank of $11,000 as a current asset', 'An overdraft of $3,000 only'], answer: 1, explain: '別の銀行の預金と借越を差し引くのは相殺（offsetting）で、認められない。$5,000 は純額にしてしまった引っかけ。' },
        { q: '重要性（materiality）の判断で正しいものは？', choices: ['IFRS で「利益の5%以上」と決まっている', '金額の大きさだけで判断する', '大きさと性質の両方で判断し、会社ごとに違う', '小さい会社には関係ない'], answer: 2, explain: 'IFRS に決まった%はない。少額でも性質（取締役への貸付金など）で重要になることがある。' },
        { q: 'Which of the following is most likely to be material even though the amount is small?', choices: ['A $20 error in stationery expense', 'A loan made by the company to one of its directors', 'Rounding figures to the nearest $1,000', 'A $5 difference in petty cash'], answer: 1, explain: '取締役への貸付金は、利益相反に関わる性質（nature）があるので少額でも重要になりうる。ほかは金額も性質も判断に影響しない。' },
        { q: 'Which of the following is most likely to cast doubt on whether a company is a going concern?', choices: ['The company made a loss this year but has secured new long-term finance from its bank', 'The company\'s bank has withdrawn its overdraft facility and the company cannot pay its suppliers', 'The company changed its inventory valuation method from AVCO to FIFO', 'The company revalued its land upwards'], answer: 1, explain: '資金が尽きて支払いができないのが、継続企業を疑う典型的なサイン。1つ目は損失があっても資金を確保して続けられるので、継続企業のまま（赤字＝清算基準、は典型的な誤り）。方針変更や再評価は継続企業と関係ない。' }
      ]
    },
    {
      id: 'L114',
      no: 114,
      title: '原則②: 継続性・慎重性・実質優先',
      goal: '継続性・慎重性・実質優先の3つの原則を定義し、具体的な取引にどう当てはめるかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['B1(a)v', 'B1(a)vi', 'B1(a)x'],
      slides: [
        {
          title: '体重計を毎回変えたら？',
          paras: ['ダイエット中に、毎朝ちがう体重計で測るとする。今日の体重計は1kg軽く出るものだった。体重が減ったのか、体重計のせいなのか分からない。', '比べるなら、同じ体重計で、同じ時間に測る必要がある。会社の成績表も同じ考え方をする。']
        },
        {
          title: '継続性（consistency）',
          paras: ['同じ種類の取引には、毎期同じ会計方針（accounting policies）を使う。表示のしかたや分類も、毎期同じにする。', '例: 在庫を FIFO で評価しているなら毎年 FIFO。機械を定額法で減価償却しているなら毎年定額法。'],
          list: ['変えてよいのは、IFRS 会計基準が変更を求めるとき', 'または、変えた方が目的適合的で信頼できる情報になるとき（事業の中身が大きく変わったときなど）']
        },
        {
          title: 'なぜ？ 方針を続ける理由',
          paras: ['Takoya Ltd が今年だけ在庫の評価を AVCO から FIFO に変え、利益が $2,000 増えたとする。読む人には業績が良くなったように見えるが、実は計算方法が変わっただけかもしれない。', '同じ方法を続けて初めて、去年と今年の差が「本当の業績の差」になる。継続性は、後で学ぶ比較可能性（comparability）を支える。'],
          note: { kind: 'warn', text: 'よくある間違い: 「継続性＝方針を絶対に変えてはいけない」。基準が求めるときや、より良い情報になるときは変えてよい。ダメなのは、利益をよく見せるために都合よく変えること。' }
        },
        {
          title: '慎重性（prudence）',
          paras: ['天気予報が微妙なら、傘を持って出かける。でも、傘を3本持っていくのはやりすぎ。', '慎重性とは、不確実な状況で判断するときに注意を払うこと。資産と収益を大きく見せすぎず、負債と費用を小さく見せすぎない。'],
          list: ['在庫は原価と正味実現可能価額（NRV）の低い方で測る', '回収できないおそれのある売掛金に貸倒引当金を作る', '偶発資産は、ほぼ確実になるまで資産に載せない']
        },
        {
          title: '慎重性にも限度がある',
          paras: ['慎重性は「わざと利益を小さくする」ことではない。必要以上に大きな引当金を作って利益を減らし、翌年それを取り崩して利益を作る、という操作は認められない。', 'わざと資産を小さく、負債を大きく見せるのも、偏った情報になる。慎重性は、偏りのない（中立な、neutral）情報を支えるためのもの。'],
          note: { kind: 'warn', text: 'よくある間違い: 「慎重性＝できるだけ利益を小さく見せる」。過大な引当金や、わざと低い評価は、中立性に反するので誤り。' }
        },
        {
          title: '実質優先（substance over form）',
          paras: ['車をローンで買うと、払い終わるまで車の名義（所有権）がローン会社のままのことがある。でも毎日乗るのは自分で、払い終われば自分のものになる。実際には「自分の車を、借金で買った」のと同じ。', '会計も、法律上の形（legal form）ではなく、経済的な実質（economic substance）で記録する。これが実質優先。']
        },
        {
          title: '例: 売って、後で買い戻す約束',
          paras: ['Takoya Ltd は倉庫の土地を銀行に $100,000 で「売り」、1年後に $110,000 で買い戻す約束をした。土地は今まで通り Takoya Ltd が使う。', '形は売却でも、実質は「土地を担保に $100,000 を借りて、1年後に利息 $10,000 を付けて返す」借入。だから売上も売却益も記録せず、土地は資産に残し、受け取った現金は負債にする。'],
          journal: [
            { side: 'Dr', account: 'Cash（現金・預金）', amount: '100,000' },
            { side: 'Cr', account: 'Loan（借入金）', amount: '100,000' }
          ],
          after: '差額 $10,000 は、借りていた1年間の利息（finance cost）として費用にする。'
        },
        {
          title: 'なぜ？ 形より実質を見る理由',
          paras: ['形だけで記録すると、借金を「売上」に見せかけることができてしまう。上の例を売却として記録すると、負債 $100,000 が帳簿から消え、売却益まで出る。', '読む人がだまされないように、取引の本当の中身を表す。実質優先は、次の部で学ぶ忠実な表現（faithful representation）の一部でもある。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['継続性: 同じ取引には毎期同じ方針と表示。変えるのは基準が求めるか、より良い情報になるとき', '慎重性: 不確実なときは注意深く。ただし、わざと利益を小さくするのは誤り', '実質優先: 法律上の形ではなく経済的な実質で記録する']
        },
        {
          title: '英単語',
          words: [
            ['consistency', 'コンシステンシー', '継続性'],
            ['accounting policies', '', '会計方針'],
            ['prudence', 'プルーデンス', '慎重性'],
            ['neutral / neutrality', 'ニュートラル', '中立な / 中立性'],
            ['substance over form', '', '実質優先'],
            ['legal form', '', '法律上の形'],
            ['economic substance', '', '経済的な実質'],
            ['sale and repurchase agreement', '', '売却・買戻し契約']
          ]
        }
      ],
      quiz: [
        { q: 'Which concept requires an entity to use the same accounting policies from one period to the next, unless a change is required by an IFRS Accounting Standard or results in more relevant and reliable information?', choices: ['Consistency', 'Materiality', 'Going concern', 'Duality'], answer: 0, explain: '方針を毎期続けるのが consistency（継続性）。例外の条件まで含めて覚える。' },
        { q: '慎重性（prudence）の説明として正しいものは？', choices: ['利益をできるだけ小さく見せる', '不確実なときに注意深く判断し、資産・収益を過大に、負債・費用を過小にしない', '見込みのもうけも早めに計上する', '損失は確定するまで記録しない'], answer: 1, explain: '慎重性は「注意深く判断する」こと。わざと利益を小さくするのは中立性に反するので、1つ目は誤り。' },
        { q: 'Company A sells a building to a bank for $500,000 and agrees to buy it back for $550,000 in two years. Which concept requires this transaction to be treated as a loan rather than a sale?', choices: ['Prudence', 'Substance over form', 'Offsetting', 'Business entity'], answer: 1, explain: '形は売却でも、実質は建物を担保にした借入。だから substance over form（実質優先）。' },
        { q: '上の取引（$500,000 を受け取り、2年後に $550,000 で買い戻す）。受け取った現金 $500,000 の貸方は？', choices: ['Sales（売上）', 'Loan（借入金、負債）', 'Building（建物を減らす）', 'Capital（資本）'], answer: 1, explain: 'Dr Cash 500,000 / Cr Loan 500,000。建物は資産に残す。差額 $50,000 は2年分の利息として費用にする。売上や建物の減少にするのは「形」で記録した誤り。' },
        { q: '毎年、利益が多く出る方へ減価償却の方法を変えている会社。どの原則に反する？', choices: ['継続性', '重要性', '二重性', '企業実体'], answer: 0, explain: '都合よく方針を変えると、年ごとの比較ができなくなる。継続性（consistency）違反。' },
        { q: 'Which of the following is an application of the prudence concept?', choices: ['Valuing inventory at the lower of cost and net realisable value', 'Recognising a contingent asset as soon as it is probable', 'Creating an excessive provision to reduce profit', 'Recording a sale when goods are ordered but not yet delivered'], answer: 0, explain: '在庫を原価と NRV の低い方で測るのが慎重性。偶発資産は「ほぼ確実」になるまで載せない。過大な引当金は中立性に反する。注文だけで売上にするのは早すぎる。' }
      ]
    },
    {
      id: 'L115',
      no: 115,
      title: '原則③: 取得原価と現在価値（10原則の総まとめ）',
      goal: '取得原価と現在価値の違いと長所・短所を説明し、10の原則を例に当てはめられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['B1(a)ix', 'B1(a)'],
      slides: [
        {
          title: '10年前に買ったマンション',
          paras: ['10年前に1,500万円で買ったマンションが、今なら2,500万円で売れるとする。このマンションの金額は、どちらで書くべき？', '1,500万円は「実際に払った金額」で、契約書という証拠がある。2,500万円は「今の値段」だが、不動産屋によって見積りが違う。どちらにも良い点と弱い点がある。']
        },
        {
          title: '取得原価（historical cost）',
          paras: ['資産を手に入れたときに払った金額（運送費や据付費などの付随費用を含む）で測る方法。負債は、引き受けたときに受け取った金額で測る。', 'これまでのレッスンの多くは、この取得原価を土台にしている。固定資産の「原価−減価償却累計額」も、取得原価をもとにした金額。'],
          list: ['長所: 実際の取引の金額なので客観的で、証拠で確かめやすい', '短所: 時間がたつと今の価値とずれる。物価が上がると資産が小さく見え、減価償却費も古い安い金額なので利益が大きく見える']
        },
        {
          title: '現在価値（current value）',
          paras: ['測る日の状況を反映した、今の金額で測る方法。主な種類は次の通り。'],
          list: ['公正価値（fair value）: 市場の参加者どうしの通常の取引で、今その資産を売ったら受け取る値段', '現在原価（current cost、replacement cost とも言う）: 同じ資産を今買い直したら払う値段', '使用価値（value in use）: 使い続けて得られる将来のキャッシュフローの現在の価値。負債では履行価値（fulfilment value）'],
          after: '在庫の正味実現可能価額（NRV）や、固定資産の再評価（revaluation）も、今の状況を反映した金額の例。'
        },
        {
          title: '例: 土地を再評価する',
          table: {
            caption: 'Takoya Ltd の土地（5年前に $200,000 で購入、今の公正価値 $260,000）',
            head: ['項目', '原価モデル', '再評価モデル'],
            rows: [
              ['財政状態計算書の金額', '$200,000', '$260,000'],
              ['差額の扱い', 'なし', '再評価剰余金 $60,000（OCI）'],
              ['土地の減価償却', 'しない', 'しない']
            ]
          },
          after: '$260,000 − $200,000 ＝ $60,000。前の部で学んだ再評価（revaluation）は、現在価値を使う代表例。'
        },
        {
          title: '2つを比べる',
          table: {
            caption: '取得原価と現在価値',
            head: ['観点', '取得原価', '現在価値'],
            rows: [
              ['客観性・確かめやすさ', '高い（証拠がある）', '見積りが入る'],
              ['今の価値を表すか', '古くなる', '最新を表す'],
              ['物価が上がったとき', '資産が小さく、利益が大きく見える', '実態に近い']
            ]
          }
        },
        {
          title: 'なぜ？ 2つの測り方がある理由',
          paras: ['判断に役立つのは「今の価値」だが、今の価値には見積りが入り、人によって数字が変わる。取得原価は確かめやすいが、古くなる。役立つことと、確かめやすいことは、ときどき引っ張り合う。', 'そのため IFRS は1つに決めず、項目ごとに測り方を決めている。多くは取得原価が基本で、再評価や NRV などで現在価値を使う。'],
          note: { kind: 'warn', text: 'よくある間違い: 「現在価値＝売値だけ」と考える。現在原価は「今買い直す値段」で、売値ではない。また、帳簿価額（原価−累計額）は現在価値ではなく、取得原価をもとにした金額。' }
        },
        {
          title: '10原則の総まとめ（1〜5）',
          table: {
            caption: 'B1(a) の10の原則',
            head: ['原則', 'ひとことで', '例'],
            rows: [
              ['継続企業（going concern）', 'この先も続くと仮定', '機械は原価−減価償却'],
              ['発生主義（accrual accounting）', '現金の出入りでなく、起きた期に計上', '12月分の未払家賃を今年の費用に'],
              ['重要性（materiality）', '判断を変えうる情報か', '$15 のホッチキスは費用'],
              ['相殺（offsetting）', '原則として差し引かない', '預金と別銀行の借越は別々'],
              ['継続性（consistency）', '毎期同じ方針と表示', '在庫は毎年 FIFO']
            ]
          }
        },
        {
          title: '10原則の総まとめ（6〜10）',
          table: {
            caption: 'B1(a) の10の原則（続き）',
            head: ['原則', 'ひとことで', '例'],
            rows: [
              ['慎重性（prudence）', '不確実なときは注意深く', '在庫は原価と NRV の低い方'],
              ['二重性（duality）', '取引には必ず2つの面', '借方と貸方が同じ金額'],
              ['企業実体（business entity）', 'お店とオーナーは別', '私用の支払いは drawings'],
              ['取得原価と現在価値（historical cost and current value）', '何の金額で測るか', '土地の再評価'],
              ['実質優先（substance over form）', '形より実質', '買戻し付きの売却は借入']
            ]
          }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取得原価＝手に入れたときに払った金額。客観的だが古くなる', '現在価値＝今の金額（公正価値・現在原価・使用価値など）。最新だが見積りが入る', '10原則は「名前・ひとこと・例」をセットで言えるようにする']
        },
        {
          title: '英単語',
          words: [
            ['historical cost', 'ヒストリカル・コスト', '取得原価'],
            ['current value', 'カレント・バリュー', '現在価値'],
            ['fair value', 'フェア・バリュー', '公正価値（今売る値段）'],
            ['current cost / replacement cost', 'カレント・コスト / リプレイスメント・コスト', '現在原価（今買い直す値段）'],
            ['value in use', 'バリュー・イン・ユース', '使用価値'],
            ['measurement basis', '', '測定基礎（何の金額で測るか）'],
            ['accrual accounting', '', '発生主義会計'],
            ['duality', 'デュアリティ', '二重性']
          ]
        }
      ],
      quiz: [
        { q: 'A company bought land for $300,000. The land is now worth $380,000. At what amount is the land shown under the historical cost basis?', choices: ['$380,000', '$300,000', '$80,000', '$680,000'], answer: 1, explain: '取得原価は払った金額のまま $300,000。土地は減価償却しない。$380,000 は現在価値（公正価値）。' },
        { q: '上の土地（原価 $300,000、公正価値 $380,000）を再評価モデルで公正価値に再評価した。再評価剰余金はいくら？', type: 'number', answer: 80000, unit: '$', explain: '$380,000 − $300,000 ＝ $80,000。この増加は利益ではなく、OCI を通して再評価剰余金（資本）に入る。' },
        { q: '物価が上がり続けているとき、取得原価で作った財務諸表はどう見える？', choices: ['資産が実際より大きく、利益が小さく見える', '資産が実際より小さく、減価償却費が古い安い金額なので利益が大きく見える', '何も影響しない', '負債だけが大きく見える'], answer: 1, explain: '昔の安い原価のままなので資産は小さく見える。減価償却費も昔の原価で計算するので費用が小さく、利益は大きく見える。' },
        { q: 'The owner of a business pays for a family holiday from the business bank account and the amount is recorded as drawings. Which concept is being applied?', choices: ['Business entity', 'Going concern', 'Materiality', 'Offsetting'], answer: 0, explain: 'お店とオーナーは別の人なので、私用の支払いはお店の費用ではなく引出し（drawings）。business entity（企業実体）。' },
        { q: 'Which concept means that every transaction has two equal and opposite effects?', choices: ['Duality', 'Consistency', 'Accrual accounting', 'Prudence'], answer: 0, explain: '取引には必ず2つの面があり、借方と貸方が同じ金額になる。これが duality（二重性）。' },
        { q: '原則と例の組み合わせで正しいものは？', choices: ['発生主義 ― 12月分の家賃を1月に払ったら、1月の費用にする', '慎重性 ― 在庫を原価と NRV の低い方で測る', '相殺 ― 預金と別銀行の当座借越を純額で表示する', '継続性 ― 毎年、利益が大きくなる方法を選ぶ'], answer: 1, explain: '発生主義なら12月分は12月（今年）の費用。相殺は原則禁止なので別々に表示。継続性は同じ方針を続けること。' }
      ]
    },
    {
      id: 'L116',
      no: 116,
      title: '質的特性: 目的適合性・忠実な表現',
      goal: '有用な財務情報の2つの基本的な質的特性を定義し、具体例がそれを満たすかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['B2(a)i', 'B2(a)ii'],
      slides: [
        {
          title: '中古車を買うときの情報',
          paras: ['中古車を選ぶとき、欲しい情報は2種類ある。', '1つは、決めるのに関係がある情報。走行距離や年式は「あと何年乗れそうか」を考えるのに役立つ。車の色の正式名称は、たいてい決め手にならない。', 'もう1つは、本当のことが偏りなく書かれていること。事故歴を隠したり、良いところだけ並べたりした説明は信用できない。']
        },
        {
          title: '役に立つ情報の6つの特性',
          svg: `<svg viewBox="0 0 440 396" role="img" aria-label="基本的な質的特性2つと補強的な質的特性4つ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">有用な財務情報の質的特性</text><rect x="20" y="52" width="400" height="112" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">基本的な質的特性（fundamental）</text><rect x="40" y="96" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="118" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">目的適合性</text><text x="125" y="138" text-anchor="middle" font-size="12.5" fill="var(--quiet)">relevance</text><rect x="230" y="96" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="118" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">忠実な表現</text><text x="315" y="138" text-anchor="middle" font-size="12.5" fill="var(--quiet)">faithful representation</text><text x="220" y="190" text-anchor="middle" fill="var(--ink)">これを満たした情報を、さらに役立つものにする</text><rect x="20" y="206" width="400" height="170" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="234" font-size="16" font-weight="600" fill="var(--ink)">補強的な質的特性（enhancing）</text><rect x="40" y="250" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="272" text-anchor="middle" font-size="15" fill="var(--ink)">比較可能性</text><text x="125" y="292" text-anchor="middle" font-size="12.5" fill="var(--quiet)">comparability</text><rect x="230" y="250" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="272" text-anchor="middle" font-size="15" fill="var(--ink)">検証可能性</text><text x="315" y="292" text-anchor="middle" font-size="12.5" fill="var(--quiet)">verifiability</text><rect x="40" y="310" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="125" y="332" text-anchor="middle" font-size="15" fill="var(--ink)">適時性</text><text x="125" y="352" text-anchor="middle" font-size="12.5" fill="var(--quiet)">timeliness</text><rect x="230" y="310" width="170" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="332" text-anchor="middle" font-size="15" fill="var(--ink)">理解可能性</text><text x="315" y="352" text-anchor="middle" font-size="12.5" fill="var(--quiet)">understandability</text></svg>`,
          caption: '概念フレームワーク（Conceptual Framework）の分け方。このレッスンは上の2つ、次のレッスンで下の4つを学ぶ。'
        },
        {
          title: '目的適合性（relevance）',
          paras: ['利用者の意思決定に違いを生むことができる情報は、目的適合性がある。そのために、次の2つの価値のどちらか（または両方）を持つ。'],
          list: ['予測価値（predictive value）: 将来を予測するのに使える。例: 今年の売上 $500,000 を見て、来年の売上を予測する', '確認価値（confirmatory value）: 過去の予測や評価を確かめ、直すのに使える。例: 去年「$480,000」と予測していたのを、実績 $500,000 と比べて見直す'],
          after: '同じ売上の数字が、予測にも確認にも使える。'
        },
        {
          title: '重要性は目的適合性の一部',
          paras: ['前に学んだ重要性（materiality）は、目的適合性の「会社ごとに違う側面」と位置づけられている。', '利用者の判断を変えうる情報は重要で、目的適合性がある。判断を変えない小さな情報は、細かく載せなくてよい。大きな会社の $50 の文房具代が、その例。']
        },
        {
          title: '忠実な表現（faithful representation）',
          paras: ['表そうとしている出来事や状態を、言葉と数字で忠実に表すこと。完璧な忠実さに近づくために、次の3つを満たす。'],
          list: ['完全（complete）: 理解するのに必要な情報（説明を含む）が全部ある', '中立（neutral）: 偏りがない。良く見せる（悪く見せる）ために選んだり、強調したりしない', '誤りがない（free from error）: 説明に誤りや漏れがなく、数字を作る手順にも誤りがない'],
          after: '形より実質で記録する実質優先も、忠実な表現の一部。慎重性は中立性を支える。'
        },
        {
          title: '見積りでも忠実な表現になる',
          paras: ['減価償却の耐用年数や貸倒引当金は見積り（estimate）で、本当の答えは後にならないと分からない。', 'それでも、合理的な方法で見積り、見積りであることや方法の限界が説明されていれば、忠実な表現になりうる。「誤りがない」は「100%正確」という意味ではない。']
        },
        {
          title: 'たこ焼きチェーンで確かめる',
          list: ['Takoya Ltd が大きな訴訟で負けそうなのに、引当金も注記もしない → 完全でない', '回収が怪しい売掛金を、楽観的に全額回収できる前提で載せる → 中立でない', '在庫の数量を数え間違えて載せる → 誤りがある', '買戻し付きの土地の「売却」を売上として載せる → 実質を表していない'],
          after: 'どれも、忠実な表現が欠けた情報になる。'
        },
        {
          title: 'なぜ？ 2つともそろう必要がある理由',
          paras: ['関係のある情報でも、事実と違えば判断を誤らせる。正確な情報でも、判断に関係なければ役に立たない。', '中古車の走行距離が書いてあっても、メーターが巻き戻されていたら意味がない。だから目的適合性と忠実な表現は、両方そろって初めて「役に立つ情報」になる。この2つを基本的な質的特性（fundamental qualitative characteristics）という。'],
          note: { kind: 'warn', text: 'よくある間違い: 「忠実な表現＝100%正確」「目的適合性＝金額が大きいこと」と考える。見積りも説明があれば忠実な表現になりうる。目的適合性は「判断を変えうるか」で決まる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['基本的な質的特性は、目的適合性と忠実な表現の2つ', '目的適合性: 判断に違いを生む。予測価値・確認価値を持つ。重要性はその一部', '忠実な表現: 完全・中立・誤りがない']
        },
        {
          title: '英単語',
          words: [
            ['qualitative characteristics', '', '質的特性'],
            ['fundamental / enhancing', 'ファンダメンタル / エンハンシング', '基本的な / 補強的な'],
            ['relevance', 'レレバンス', '目的適合性'],
            ['predictive value', '', '予測価値'],
            ['confirmatory value', '', '確認価値'],
            ['faithful representation', '', '忠実な表現'],
            ['complete / neutral / free from error', '', '完全 / 中立 / 誤りがない'],
            ['Conceptual Framework', '', '概念フレームワーク']
          ]
        }
      ],
      quiz: [
        { q: 'Which TWO of the following are the fundamental qualitative characteristics of useful financial information?', choices: ['Relevance and faithful representation', 'Comparability and verifiability', 'Timeliness and understandability', 'Prudence and consistency'], answer: 0, explain: '基本的な（fundamental）特性は relevance と faithful representation。比較可能性・検証可能性・適時性・理解可能性は補強的な（enhancing）特性。prudence と consistency は原則（concepts）。' },
        { q: 'Financial information that helps users to predict future outcomes is said to have:', choices: ['Predictive value', 'Confirmatory value', 'Verifiability', 'Neutrality'], answer: 0, explain: '将来の予測に使えるのが predictive value。過去の予測を確かめるのは confirmatory value。' },
        { q: '忠実な表現の3つの要素は？', choices: ['完全・中立・誤りがない', '完全・慎重・検証可能', '正確・迅速・簡単', '比較可能・適時・理解可能'], answer: 0, explain: 'complete・neutral・free from error の3つ。4つ目の選択肢は補強的な特性で、別のグループ。' },
        { q: "The directors decide not to disclose a large legal claim against the company because it would make the results look worse. Which qualitative characteristic is most clearly breached?", choices: ['Faithful representation', 'Timeliness', 'Comparability', 'Understandability'], answer: 0, explain: '都合の悪い情報を省くと、完全でも中立でもなくなる。忠実な表現（faithful representation）に反する。' },
        { q: '貸倒引当金のような見積りについて、正しいものは？', choices: ['見積りを含む情報は、忠実な表現にならない', '合理的に見積り、見積りであることを説明すれば、忠実な表現になりうる', '見積りはできるだけ楽観的にする', '見積りは確定するまで載せない'], answer: 1, explain: '「誤りがない」は100%正確という意味ではない。楽観的にするのは中立性に反する。' },
        { q: '去年立てた売上予測と今年の実績を比べ、予測のしかたを見直した。今年の実績が持つのは？', choices: ['予測価値', '確認価値', '検証可能性', '理解可能性'], answer: 1, explain: '過去の予測を確かめ、直すのに使えるのが確認価値（confirmatory value）。' }
      ]
    },
    {
      id: 'L117',
      no: 117,
      title: '質的特性: 比較可能性・検証可能性・適時性・理解可能性',
      goal: '4つの補強的な質的特性を定義し、財務諸表のどんな工夫がどの特性を高めるかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['B2(a)iii', 'B2(a)iv', 'B2(a)v', 'B2(a)vi'],
      slides: [
        {
          title: 'スマホを選ぶとき',
          list: ['比較サイトで、どの機種も同じ基準で電池の持ちが書いてある → 比べられる', '何人ものレビューが、だいたい同じ結論になっている → 確かめられる', '2年前のレビューより、発売直後のレビューが欲しい → 間に合う', '専門用語だらけでなく、整理して書いてある → 分かる'],
          after: '正しくて関係のある情報が、この4つでさらに役立つものになる。'
        },
        {
          title: '補強的な質的特性（enhancing）',
          paras: ['前のレッスンの2つ（目的適合性・忠実な表現）を満たした情報を、さらに役立つものにする特性が4つある。'],
          table: {
            caption: '補強的な質的特性',
            head: ['特性', 'ひとことで'],
            rows: [
              ['比較可能性（comparability）', '似ている点と違う点を見分けられる'],
              ['検証可能性（verifiability）', '別々の人が確かめて、同じ結論になる'],
              ['適時性（timeliness）', '判断に間に合う'],
              ['理解可能性（understandability）', '明確で簡潔に表示されている']
            ]
          },
          after: '補強的な特性だけでは、役に立たない（関係がない、事実と違う）情報を役立つものにはできない。'
        },
        {
          title: '比較可能性（comparability）',
          paras: ['項目どうしの似ている点と違う点を見分けて理解できること。比べる方向は2つある。'],
          list: ['同じ会社の期間どうし: 去年と今年', '他の会社どうし: 同業の A 社と B 社'],
          after: '支える仕組みは、継続性（毎期同じ方針）、前期の数字（比較情報、comparative information）を並べること、会計方針の開示。比較可能性は「全社が同じ方法を使う（uniformity）」という意味ではない。'
        },
        {
          title: '例: 前期の数字を並べる',
          table: {
            caption: 'Takoya Ltd の損益計算書（抜粋）',
            head: ['項目', '20X2 $', '20X1 $'],
            rows: [
              ['売上（revenue）', '520,000', '480,000'],
              ['売上原価（cost of sales）', '(312,000)', '(300,000)']
            ],
            total: ['売上総利益（gross profit）', '208,000', '180,000']
          },
          after: '前期の列があるから、売上が $40,000 伸び、売上総利益も $28,000 増えたと分かる。財務諸表に前期の数字を載せるのは、比較可能性のため。'
        },
        {
          title: '検証可能性（verifiability）',
          paras: ['知識があり独立した別々の人が確かめたとき、その情報が忠実な表現だと合意できること。完全に同じ数字にならなくてもよい。'],
          list: ['直接の検証: 手元の現金を実際に数える', '間接の検証: 計算に使った数字（数量・単価）を確かめ、同じ方法（例: FIFO）で計算し直す'],
          after: '検証できる情報は、利用者が「本当にそうだ」と安心して使える。'
        },
        {
          title: '適時性（timeliness）',
          paras: ['判断する人が、判断に影響を受けられるうちに情報を手にできること。期末から2年後に出た財務諸表は、投資の判断にはもう遅い。', '一般に、古い情報ほど役に立ちにくい。ただし、何年分も並べて傾向を見るときは、古い情報も役に立つ。'],
          note: { kind: 'tip', text: '早く出すほど見積りが増え、正確さが下がることがある。適時性と忠実な表現は、ときどき引っ張り合う。' }
        },
        {
          title: '理解可能性（understandability）',
          paras: ['情報を分類し、特徴を示し、明確で簡潔に表示すると、理解しやすくなる。', '想定する利用者は、事業と経済について合理的な知識があり、情報を注意深く読む人。専門家でなくてもよいが、まったくの素人でもない。', '複雑な取引を「分かりにくいから」と省いてはいけない。省くと情報が不完全になり、誤解を招く。']
        },
        {
          title: 'なぜ？ 「補強」と呼ぶ理由',
          paras: ['比べられても、確かめられても、間に合っても、分かりやすくても、中身が判断に関係なかったり事実と違ったりすれば役に立たない。だから土台は基本的な2つで、4つはその上で効く「上乗せ」。', 'また、情報を作って報告するにはお金と手間がかかる。報告のコストは、その情報から得られる便益に見合う必要がある（コストの制約、cost constraint）。'],
          note: { kind: 'warn', text: 'よくある間違い: 「理解可能性のために複雑な取引は省く」「比較可能性＝全社が同じ方法」「検証可能性＝全員の数字が完全一致」。どれも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['補強的な特性は、比較可能性・検証可能性・適時性・理解可能性の4つ', '比較可能性は継続性と前期の数字で支える。全社同じ方法という意味ではない', '理解可能性のために情報を省いてはいけない。利用者は合理的な知識があり、注意深く読む前提']
        },
        {
          title: '英単語',
          words: [
            ['comparability', 'コンパラビリティ', '比較可能性'],
            ['comparative information', '', '比較情報（前期の数字）'],
            ['verifiability', 'ベリファイアビリティ', '検証可能性'],
            ['timeliness', 'タイムリネス', '適時性'],
            ['understandability', 'アンダースタンダビリティ', '理解可能性'],
            ['uniformity', 'ユニフォーミティ', '画一性（全部同じにすること）'],
            ['cost constraint', '', 'コストの制約']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an enhancing qualitative characteristic of useful financial information?', choices: ['Relevance', 'Faithful representation', 'Verifiability', 'Materiality'], answer: 2, explain: 'verifiability は補強的な（enhancing）特性。relevance と faithful representation は基本的な（fundamental）特性。materiality は目的適合性の一部。' },
        { q: 'Financial statements show the figures for the previous year alongside those for the current year. Which qualitative characteristic does this mainly support?', choices: ['Comparability', 'Timeliness', 'Verifiability', 'Understandability'], answer: 0, explain: '前期の数字（comparative information）を並べるのは、期間どうしを比べるため。comparability（比較可能性）。' },
        { q: '複雑なデリバティブ取引を「読む人に分かりにくいから」財務諸表から省いた。正しい評価は？', choices: ['理解可能性が高まるので適切', '情報が不完全になり誤解を招くので不適切', '金額に関係なく省いてよい', '適時性を高めるので必要'], answer: 1, explain: '複雑でも重要な情報は省かない。利用者は合理的な知識があり注意深く読む前提。省くと完全性（忠実な表現）が損なわれる。' },
        { q: 'Different knowledgeable and independent observers could reach consensus, although not necessarily complete agreement, that a particular depiction is a faithful representation. This describes:', choices: ['Verifiability', 'Comparability', 'Relevance', 'Timeliness'], answer: 0, explain: 'verifiability（検証可能性）の定義そのもの。「完全一致でなくてよい」がポイント。' },
        { q: '期末から18か月後にやっと財務諸表を公表した。最も損なわれる特性は？', choices: ['適時性', '検証可能性', '比較可能性', '中立性'], answer: 0, explain: '判断に間に合わないので timeliness（適時性）が損なわれる。中身が正しくても遅すぎると役に立ちにくい。' },
        { q: '比較可能性を支える原則（前の部で学んだもの）は？', choices: ['継続性（consistency）', '相殺（offsetting）', '企業実体（business entity）', '二重性（duality）'], answer: 0, explain: '毎期同じ方針を使うから、去年と今年を比べられる。継続性が比較可能性を支える。ただし2つは同じものではない。比較可能性が目的で、継続性はそのための手段。' }
      ]
    }
  ],
  cards: [
    { id: 'L112-1', lesson: 'L112', q: '財務諸表を作る責任は誰にある？', a: '取締役（directors）。監査人ではない' },
    { id: 'L112-2', lesson: 'L112', q: '監査人（auditors）の役割は？', a: '財務諸表が真実かつ公正か、意見（opinion）を出すこと。作成はしない' },
    { id: 'L112-3', lesson: 'L112', q: '取締役の、記録と内部統制の責任は？', a: '適切な会計記録をつけ、内部統制で不正・誤りを防ぎ見つけ、資産を守る' },
    { id: 'L112-4', lesson: 'L112', q: 'なぜ取締役は株主に報告する責任がある？', a: '株主のお金を預かって経営しているから（受託責任、stewardship）' },
    { id: 'L112-5', lesson: 'L112', q: '財務諸表を作るとき取締役が判断すること3つは？', a: '会計方針の選択と継続、合理的で慎重な見積り、継続企業の前提が適切か' },
    { id: 'L112-6', lesson: 'L112', q: '作業を経理部長に任せたら、財務諸表の責任は？', a: '取締役に残る。任せても責任は移らない' },
    { id: 'L113-1', lesson: 'L113', q: 'going concern（継続企業）とは？', a: '予見可能な将来も事業を続けると仮定して財務諸表を作る考え方' },
    { id: 'L113-2', lesson: 'L113', q: '継続企業の前提が成り立たないときは？', a: '清算基準（break-up basis）で作る。資産は今売れる見込みの額で測る' },
    { id: 'L113-3', lesson: 'L113', q: '重要な（material）情報とは？', a: '省いたり誤ったりすると、利用者の判断に影響すると合理的に予想される情報' },
    { id: 'L113-4', lesson: 'L113', q: '重要性は何で判断する？', a: '大きさ（size）と性質（nature）。会社ごとに違い、決まった%はない' },
    { id: 'L113-5', lesson: 'L113', q: 'offsetting（相殺）のルールは？', a: '資産と負債、収益と費用は、IFRS が求めるか認める場合を除き差し引かない' },
    { id: 'L113-6', lesson: 'L113', q: 'X 銀行の預金 $8,000 と Y 銀行の当座借越 $3,000 の表示は？', a: '流動資産 $8,000 と流動負債 $3,000 を別々に載せる' },
    { id: 'L113-7', lesson: 'L113', q: '継続企業の前提を疑うサインの例は？', a: '借入や仕入代金を払えない、銀行が融資を打ち切る、大口の得意先を失う。赤字だけでは疑わない' },
    { id: 'L114-1', lesson: 'L114', q: 'consistency（継続性）とは？', a: '同じ種類の取引には、毎期同じ会計方針と表示を使うこと' },
    { id: 'L114-2', lesson: 'L114', q: '会計方針を変えてよいのは？', a: 'IFRS が求めるとき、または変えた方が目的適合的で信頼できる情報になるとき' },
    { id: 'L114-3', lesson: 'L114', q: 'prudence（慎重性）とは？', a: '不確実なとき注意深く判断し、資産・収益を過大に、負債・費用を過小にしない' },
    { id: 'L114-4', lesson: 'L114', q: '慎重性でもやってはいけないことは？', a: 'わざと利益を小さくすること（過大な引当金など）。中立でなくなる' },
    { id: 'L114-5', lesson: 'L114', q: 'substance over form（実質優先）とは？', a: '法律上の形ではなく、経済的な実質で記録すること' },
    { id: 'L114-6', lesson: 'L114', q: '後で買い戻す約束付きの「売却」はどう記録する？', a: '実質は担保付きの借入。資産は残し、受け取った現金は負債。差額は利息' },
    { id: 'L115-1', lesson: 'L115', q: 'historical cost（取得原価）とは？', a: '資産を手に入れたときに払った金額で測る方法' },
    { id: 'L115-2', lesson: 'L115', q: 'current value（現在価値）の主な種類は？', a: '公正価値（今売る値段）、現在原価（今買い直す値段）、使用価値' },
    { id: 'L115-3', lesson: 'L115', q: '取得原価の長所と短所は？', a: '客観的で確かめやすいが、時間がたつと今の価値とずれる' },
    { id: 'L115-4', lesson: 'L115', q: '物価上昇時、取得原価だと利益はどう見える？', a: '減価償却費が古い安い原価で計算されるので、大きく見える' },
    { id: 'L115-5', lesson: 'L115', q: '原価 $200,000 の土地を公正価値 $260,000 に再評価。差額は？', a: '再評価剰余金 $60,000（OCI を通して資本へ）' },
    { id: 'L115-6', lesson: 'L115', q: 'B1(a) の10原則の名前は？', a: '継続企業・発生主義・重要性・相殺・継続性・慎重性・二重性・企業実体・取得原価と現在価値・実質優先' },
    { id: 'L116-1', lesson: 'L116', q: '基本的な質的特性2つは？', a: '目的適合性（relevance）と忠実な表現（faithful representation）' },
    { id: 'L116-2', lesson: 'L116', q: 'relevance（目的適合性）とは？', a: '利用者の意思決定に違いを生む情報。予測価値・確認価値を持つ' },
    { id: 'L116-3', lesson: 'L116', q: '予測価値と確認価値の違いは？', a: '将来の予測に使える／過去の予測を確かめ、直すのに使える' },
    { id: 'L116-4', lesson: 'L116', q: '忠実な表現の3つの要素は？', a: '完全（complete）・中立（neutral）・誤りがない（free from error）' },
    { id: 'L116-5', lesson: 'L116', q: 'free from error は「100%正確」の意味？', a: 'いいえ。説明や手順に誤り・漏れがないこと。説明のある見積りは可' },
    { id: 'L116-6', lesson: 'L116', q: '重要性と目的適合性の関係は？', a: '重要性は目的適合性のうち、会社ごとに違う側面' },
    { id: 'L117-1', lesson: 'L117', q: '補強的な質的特性4つは？', a: '比較可能性・検証可能性・適時性・理解可能性' },
    { id: 'L117-2', lesson: 'L117', q: 'comparability（比較可能性）とは？', a: '期間どうし・他社どうしで、似ている点と違う点を見分けられること' },
    { id: 'L117-3', lesson: 'L117', q: 'verifiability（検証可能性）とは？', a: '知識ある独立した別々の人が、忠実な表現だと合意できること' },
    { id: 'L117-4', lesson: 'L117', q: 'timeliness（適時性）とは？', a: '判断に影響を与えられるうちに、情報を手にできること' },
    { id: 'L117-5', lesson: 'L117', q: 'understandability で想定する利用者は？', a: '事業と経済に合理的な知識があり、注意深く読む人。複雑な情報も省かない' },
    { id: 'L117-6', lesson: 'L117', q: '補強的な特性だけで役立つ情報になる？', a: 'ならない。まず目的適合性と忠実な表現が必要' },
    { id: 'L117-7', lesson: 'L117', q: '継続性（consistency）と比較可能性は同じもの？', a: '違う。比較可能性が目的で、継続性はそれを支える手段' }
  ]
});
