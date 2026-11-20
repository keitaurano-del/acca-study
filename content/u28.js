(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 28,
  part: 18,
  partTitle: 'キャッシュフロー計算書',
  lessons: [
    {
      id: 'L137',
      no: 137,
      title: '利益と現金は違う',
      goal: '利益と現金の増減がずれる理由を説明し、同じ1年の利益と現金の増減を両方計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['G5(a)', 'K1:F3(a)'],
      slides: [
        {
          title: '家計簿は黒字、なのに口座は減った',
          paras: ['1年間の家計簿をつけたら、黒字は50万円だった。', 'ところが通帳を見ると、残高は1年前より30万円減っていた。', '理由は、100万円の車を現金で買ったから。車は5年使うので、家計簿では1年分の20万円だけを費用にした。でも現金は、買った日に100万円まとめて出ていった。50 ＋ 20 − 100 ＝ −30万円。']
        },
        {
          title: '利益と現金は別のものさし',
          paras: ['利益（profit）は「1年間でどれだけ稼いだか」。売上は売ったとき、費用は使ったときに数える。これが発生主義（accruals basis）。', '現金（cash）は「実際にお金が入った・出た」の記録。お金が動いた日に数える。', 'だから同じ1年でも、利益と現金の増減はふつう一致しない。'],
          formula: '利益 ≠ 現金の増減'
        },
        {
          title: 'L02 の例をここで訂正する',
          paras: ['L02 では「もうけが $50 出た → 現金も $50 増えた」と説明した。', 'これは、たこ焼きを全部その場の現金で売り、材料も家賃も全部その場の現金で払った場合だけ成り立つ、単純化した話。', '実際のお店は、掛けで売る、在庫を持つ、設備を買う、お金を借りる。そのたびに利益と現金がずれていく。'],
          note: { kind: 'tip', text: 'L02 の「もうけが出ると資本が増える」は正しい。増えるのは資本で、現金とは限らない。' }
        },
        {
          title: 'ずれる理由は大きく4つ',
          list: ['タイミング: 掛けで売った売上は利益に入るが、現金は後で入る。掛けの仕入、未払費用・前払費用も同じ', '在庫: 仕入れて払った現金のうち、売れ残りの分は費用にならない', '固定資産: 買った日に現金が全額出るが、費用は減価償却で何年かに分ける', '利益に関係ない現金: 借入と返済、株の発行、配当、引出しは現金だけが動く'],
          after: 'さらに、減価償却費・貸倒れ・引当金・売却損のように、費用なのに現金が出ていかないものもある。'
        },
        {
          title: '例題: 利益と現金を両方計算する',
          example: {
            problem: 'たこ焼き屋 Tako は、現金 $5,000 で1年目を始めた。売上 $20,000（うち $4,000 は年末にまだ未回収）。材料を $9,000 現金で仕入れ、年末に $1,000 分が売れ残った。家賃などの費用 $3,000 を現金で払った。屋台を $6,000 現金で買い、減価償却費は $2,000。利益と、現金の増減は？',
            steps: ['① 利益: 売上原価は $9,000 − $1,000 ＝ $8,000', '利益 ＝ $20,000 − $8,000 − $3,000 − $2,000 ＝ $7,000', '② 現金: 入金は $20,000 − $4,000 ＝ $16,000', '出金は 材料 $9,000 ＋ 家賃など $3,000 ＋ 屋台 $6,000 ＝ $18,000', '現金の増減 ＝ $16,000 − $18,000 ＝ −$2,000（年末の現金は $3,000）'],
            answer: '利益は $7,000 の黒字。でも現金は $2,000 減った'
          }
        },
        {
          title: 'ずれを1つずつ直す',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="利益7,000ドルから、ずれを直すと現金の増減マイナス2,000ドルになる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">利益 $7,000 から現金の増減へ</text><rect x="20" y="52" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" font-size="15" fill="var(--ink)">利益（profit）</text><text x="404" y="77" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">+7,000</text><rect x="20" y="96" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="120" font-size="15" fill="var(--ink)">減価償却費（現金は出ない）</text><text x="404" y="121" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">+2,000</text><rect x="20" y="140" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="164" font-size="15" fill="var(--ink)">売掛金（まだ入っていない）</text><text x="404" y="165" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">−4,000</text><rect x="20" y="184" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="208" font-size="15" fill="var(--ink)">売れ残りの在庫（払い済み）</text><text x="404" y="209" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">−1,000</text><rect x="20" y="228" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="252" font-size="15" fill="var(--ink)">屋台を現金で買った</text><text x="404" y="253" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">−6,000</text><path d="M20 278L420 278" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="288" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="314" font-size="16" font-weight="600" fill="var(--ink)">現金の増減</text><text x="404" y="315" text-anchor="end" font-size="17" font-weight="600" fill="var(--ink)">−2,000</text></svg>`,
          caption: '利益から出発して、現金とのずれを足し引きすると、現金の増減になる。この直し方が、あとで学ぶ間接法（indirect method）の考え方。本物のキャッシュフロー計算書では、屋台の購入は投資活動という別の区分に書く（L140）。'
        },
        {
          title: 'なぜ？ 2つとも必要な理由',
          paras: ['利益は「稼ぐ力」を測る。屋台 $6,000 を買った年に全額を費用にすると、その年だけ大赤字に見えて実力が分からない。だから費用を使う年に分ける。', '一方、給料や借金の返済は現金でしか払えない。利益が出ていても、現金が尽きればお店は続けられない。', 'よく「利益は意見、現金は事実」と言われる。利益は減価償却の年数などの見積もりで変わるが、現金の出入りは変わらない。']
        },
        {
          title: 'よくある間違い',
          list: ['「利益が出た＝現金が増えた」と考える', '「現金が増えた＝もうかった」と考える。お金を借りても現金は増える', '減価償却費を「現金で払った費用」だと思う'],
          note: { kind: 'warn', text: '減価償却は、固定資産の費用を何年かに分けて利益から引くだけ。その年に現金は1円も出ていかない。現金が出たのは、買った日。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['利益＝稼いだ力（発生主義）、現金＝実際の出入り。ふつう一致しない', 'ずれの原因は 掛け・在庫・固定資産・借入や配当・現金の出ない費用', '利益が出ても、現金が尽きればお店は続かない。だから両方を見る']
        },
        {
          title: '英単語',
          words: [
            ['profit', 'プロフィット', '利益（発生主義で数える）'],
            ['cash flow', 'キャッシュ フロー', '現金の流れ（入った・出た）'],
            ['cash inflow / outflow', 'インフロー / アウトフロー', '現金の入り / 出'],
            ['accruals basis', 'アクルーアルズ ベーシス', '発生主義'],
            ['non-cash expense', 'ノンキャッシュ', '現金が出ない費用（減価償却費など）'],
            ['statement of cash flows', '', 'キャッシュフロー計算書']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following increases profit but has no effect on cash when it happens?', choices: ['A sale of goods on credit', 'A bank loan received', 'Payment to a credit supplier', 'Purchase of a machine for cash'], answer: 0, explain: '掛け売上は売上として利益に入るが、現金は回収したときに入る。借入は現金だけ増えて利益は変わらない。買掛金の支払は現金だけ減る。機械の現金購入も現金だけ減る（費用は減価償却で後から）。' },
        { q: '売上 $12,000 のうち $2,000 は年末にまだ未回収。費用 $7,000 は全部現金で払った。この年の現金の増加は？', type: 'number', answer: 3000, unit: '$', explain: '入金 $12,000 − $2,000 ＝ $10,000、出金 $7,000 なので、現金の増加は $3,000。利益は $12,000 − $7,000 ＝ $5,000。未回収の $2,000 だけ、現金が利益より少ない。' },
        { q: 'A business reports a profit of $40,000 but its bank balance fell during the year. Which of the following could explain this?', choices: ['It bought new equipment for cash', 'It charged depreciation of $5,000', 'Its trade payables increased', 'It received a new bank loan'], answer: 0, explain: '設備を現金で買うと現金は全額減るが、費用は減価償却で少しずつ。減価償却費は現金を減らさない。買掛金の増加は支払を遅らせた＝現金は減らない方向。借入は現金を増やす。' },
        { q: 'L02 の「もうけ $50 → 現金も $50 増えた」が成り立つのは？', choices: ['売上も費用も全部その場の現金だった場合', '掛けで売った場合', '屋台を現金で買った場合', 'どんな場合でも必ず成り立つ'], answer: 0, explain: '全部その場の現金で売り買いしたときだけ、利益と現金の増減が一致する。掛け・在庫・固定資産などがあると、ずれる。' },
        { q: 'Which of the following reduces profit but does not reduce cash?', choices: ['Depreciation of equipment', 'Payment of rent for the current year', 'Repayment of a bank loan', 'Payment of a dividend'], answer: 0, explain: '減価償却費は費用だが現金は出ない。今年の家賃の支払は利益も現金も減らす。借入の返済と配当の支払は現金だけ減って、利益（損益計算書）には入らない。' }
      ]
    },
    {
      id: 'L138',
      no: 138,
      title: '経営者が現金を管理する理由を知る',
      goal: '黒字でも会社が潰れる理由と、経営者が現金を見張り、足りなくも余らせすぎもしないように管理する方法を説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'fa',
      outcomes: ['G5(b)'],
      slides: [
        {
          title: '年収は多いのに、引き落としで困る',
          paras: ['年収600万円の人でも、給料日が25日で、家賃とカードの引き落としが20日なら困る。20日に口座のお金が足りなければ延滞になる。', '大事なのは「1年でいくら」だけでなく「支払の日にいくらあるか」。お店や会社もまったく同じ。']
        },
        {
          title: '黒字でも潰れる',
          paras: ['利益が出ているのに、支払う現金がなくなって潰れることを、日本語で黒字倒産という。英語の試験では「a profitable business can fail if it runs out of cash」のように書かれる。','会社が止まるのは、赤字のときではなく現金が尽きたとき。仕入先・従業員・銀行・税務署への支払は、利益ではなく現金でしかできない。'],
          formula: '会社を止めるのは、赤字ではなく現金切れ'
        },
        {
          title: '現金が必要な場面',
          list: ['仕入先への支払（買掛金）', '給料・家賃などの経費', '借入の利息と返済', '税金', '配当（会社）や引出し（個人事業）', '設備の買い替え'],
          after: 'どれも期日が決まっている。期日に払えないと、仕入を止められたり、銀行の信用を失ったりする。'
        },
        {
          title: '多すぎる現金も問題',
          paras: ['現金を必要以上に寝かせておくのも、もったいない。預金の利息はわずかで、ほかに使えばもっと稼げたかもしれない。', '余った現金は、借入の返済、設備への投資、短期の預金、オーナーへの配当などに回せる。', '管理とは「足りなくならず、余らせすぎない」ようにすること。']
        },
        {
          title: '例: 月ごとの現金の見通し',
          table: {
            caption: 'Tako Co の現金の見通し（期首残高 $1,500）',
            head: ['月', '入出金 $', '月末残高 $'],
            rows: [
              ['1月', '+1,000', '2,500'],
              ['2月（大口の仕入）', '−3,000', '(500)'],
              ['3月（代金を回収）', '+2,500', '2,000']
            ]
          },
          after: '3か月の合計は ＋$500 なのに、2月末だけ $500 足りなくなる。前もって分かれば、銀行に当座借越（overdraft）の枠を頼む、支払日を交渉する、などの手が打てる。この見通しを資金繰り予測（cash flow forecast）という。'
        },
        {
          title: '現金を管理する方法',
          list: ['資金繰り予測（cash flow forecast、cash budget）を作り、足りなくなる時期を先に知る', '売掛金を早く回収する（与信の管理、督促、早期支払割引）', '買掛金は約束の期日を守りつつ、早すぎずに払う', '在庫を持ちすぎない。在庫は現金が形を変えたもの', '大きな設備の購入は時期を選ぶ。借入や当座借越の枠を前もって用意する']
        },
        {
          title: '急成長の落とし穴（overtrading）',
          paras: ['注文が急に増えると、先に材料を仕入れ、在庫を増やし、掛けで売る。現金が入るのは、その後。', '売上も利益も伸びているのに、手元の現金が追いつかずに支払えなくなる。これを過大取引（overtrading）という。', '成長しているときこそ、現金の管理が大事になる。']
        },
        {
          title: 'なぜ？ 利益とは別に見張る理由',
          paras: ['利益は発生主義で数えるので、「いつ現金が動くか」は分からない。利益だけを見ていると、支払の日の現金不足に気づけない。', '現金が尽きると、事業を続けられなくなる（継続企業、going concern として続かない）。だから経営者は、利益とは別に現金を見張る。']
        },
        {
          title: 'よくある間違い',
          list: ['「利益が出ているから、支払は大丈夫」と考える', '「現金は多ければ多いほど良い」と考える。使い道のない現金は寝かせずに活かす'],
          note: { kind: 'warn', text: '黒字でも潰れる。管理するのは「1年の合計」ではなく、支払の日ごとの現金。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['会社が潰れるのは現金が尽きたとき。黒字でも潰れる', '現金は足りなくても、余らせすぎても問題', '管理の道具は、資金繰り予測と、売掛金・買掛金・在庫の管理']
        },
        {
          title: '英単語',
          words: [
            ['cash flow forecast', 'フォーキャスト', '資金繰り予測'],
            ['cash budget', 'キャッシュ バジェット', '現金予算（資金繰り予測と同じ考え方）'],
            ['overtrading', 'オーバートレーディング', '過大取引（成長に現金が追いつかない）'],
            ['liquidity', 'リクイディティ', '流動性（支払にあてる現金の余裕）'],
            ['bank overdraft', 'オーバードラフト', '当座借越'],
            ['credit control', 'クレジット コントロール', '与信・回収の管理'],
            ['going concern', 'ゴーイング コンサーン', '継続企業']
          ]
        }
      ],
      quiz: [
        { q: 'Why might a profitable business fail?', choices: ['It runs out of cash to pay its debts when they fall due', 'Its depreciation charge is too high', 'It has too many non-current assets', 'Its profit is lower than last year'], answer: 0, explain: '利益が出ていても、期日に払う現金がなければ事業は止まる（黒字倒産）。減価償却費は現金を減らさない。利益が前年より少ないだけで潰れるわけではない。' },
        { q: '期首の現金 $2,000。1月 ＋$1,500、2月 −$4,000、3月 ＋$3,000。2月末の残高は？（足りなければマイナスで答える）', type: 'number', answer: -500, unit: '$', explain: '$2,000 ＋ $1,500 − $4,000 ＝ −$500。3か月の合計は ＋$500 でも、2月末は $500 足りない。前もって当座借越の枠などを用意しておく必要がある。' },
        { q: 'Which of the following would help a business to improve its cash position?', choices: ['Collecting amounts from credit customers more quickly', 'Increasing inventory levels', 'Paying suppliers earlier than required', 'Allowing customers longer credit periods'], answer: 0, explain: '売掛金を早く回収すれば現金は早く入る。在庫を増やす、支払を早める、得意先の支払期間を延ばすのは、どれも現金を減らす（または入りを遅らせる）方向。' },
        { q: '使い道のない現金がたくさんある会社。望ましくないのは？', choices: ['利息がほとんどつかない口座に、何年もそのまま置いておく', '借入の一部を早めに返す', '新しい設備に投資する', '株主に配当を払う'], answer: 0, explain: '現金は余らせすぎても問題。寝かせておくと、ほかに使えば得られた稼ぎを逃す。返済・投資・配当などに回すのが管理。' },
        { q: '売上が急に3倍になった会社が、仕入先への支払の現金に困っている。この状態を何と呼ぶ？', choices: ['過大取引（overtrading）', '企業実体の公準（business entity concept）', '慎重性（prudence）', '取引値引き（trade discount）'], answer: 0, explain: '成長のための在庫や売掛金に現金が取られ、手元の現金が追いつかない状態が過大取引。売上と利益は伸びていても、支払えなくなるおそれがある。' }
      ]
    },
    {
      id: 'L139',
      no: 139,
      title: 'CF計算書の利点と欠点を見分ける',
      goal: 'キャッシュフロー計算書が利用者にとって役立つ点と限界を挙げ、損益計算書と並べて見る理由を説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['G5(c)', 'K1:F3(b)'],
      slides: [
        {
          title: '友だちにお金を貸す前に',
          paras: ['友だちに「10万円貸して」と頼まれた。「年収は高いよ」と言われても、通帳が毎月マイナスなら、返してもらえるか不安になる。', '年収（利益）と通帳（現金）を並べると、本当の状態が見える。会社の損益計算書とキャッシュフロー計算書（statement of cash flows）の関係も同じ。']
        },
        {
          title: '誰が何を知りたい？',
          list: ['銀行などの貸し手: 利息と元本を現金で返せるか', '仕入先: 期日どおりに代金を払ってもらえるか', '投資家（株主）: 配当を払う現金を生み出せるか', '従業員: 給料を払い続けられるか'],
          after: 'どれも「現金」についての質問。損益計算書だけでは答えにくい。'
        },
        {
          title: '利点（benefits）',
          list: ['客観的（objective）: 現金の出入りは事実。減価償却の年数などの見積もりや会計方針に左右されにくい', '比べやすい: 会計方針の違う会社どうしでも比べやすい', '返済力が分かる: 返済・配当・設備投資にあてる現金を生めているか（流動性、liquidity）', 'お金の流れが分かる: 現金がどこから来て、何に使われたか', '利益の質が分かる: 利益が現金を伴っているか確かめられる']
        },
        {
          title: '利点（続き）',
          list: ['将来の予測に役立つ: 過去の現金の動きは、将来どれだけ現金を生めるかを考える土台になる', '分かりやすい: 「入った・出た」は、発生主義の利益より理解しやすい'],
          note: { kind: 'tip', text: '「将来の予測に役立つ」は利点。でも計算書が見せるのは過去の現金だけで、将来の現金そのものは載っていない。「shows future cash flows」という選択肢は間違い。' }
        },
        {
          title: '例: 利益は同じ、中身は別',
          table: {
            caption: '営業の現金の抜粋（税金の前まで）',
            head: ['項目', 'A社 $', 'B社 $'],
            rows: [
              ['営業利益', '50,000', '50,000'],
              ['減価償却費（足し戻し）', '5,000', '5,000'],
              ['売掛金の増加', '(2,000)', '(60,000)']
            ],
            total: ['営業から生じた現金', '53,000', '(5,000)']
          },
          after: 'B社は利益が出ているのに、売った代金が入ってきていない。回収できない得意先が多いのかもしれない。損益計算書だけでは、2社は同じに見える。'
        },
        {
          title: '欠点（drawbacks）',
          list: ['過去の情報: 将来の現金を約束するものではない', '期末だけ見栄えを良くできる: 年末の支払を翌月に遅らせると、現金は多く見える（window dressing）', '稼ぐ力は測れない: 収益と費用を対応させていない。大きな設備を買った年は現金が大きく減るが、将来のための投資かもしれない', '全部は載らない: 株を渡して資産を手に入れるなど、現金が動かない大きな取引は計算書の本体に出てこない']
        },
        {
          title: '例: 年末の支払を遅らせると',
          paras: ['12月31日に払う予定だった仕入代金 $8,000 を、1月3日に払った。', '期末の現金は $8,000 多く見え、営業の現金の流れも $8,000 良く見える。', 'でも実際は、払うべきお金（買掛金）が $8,000 多く残っているだけ。会社の力は何も変わっていない。財政状態計算書の買掛金と合わせて見ると気づける。']
        },
        {
          title: 'なぜ？ 2つを並べて見る',
          paras: ['損益計算書は「稼ぐ力」を、キャッシュフロー計算書は「現金を生む力と使い道」を見せる。どちらにも弱点があり、片方だけでは判断を誤る。', '利益が出ていて本業の現金もプラスなら健全。利益は出ているのに本業の現金が続けてマイナスなら、回収や在庫に問題があるかもしれない。', 'だから、2つの計算書を並べて分析する。']
        },
        {
          title: 'よくある間違い',
          list: ['「現金が増えた＝良い会社」と考える。借入や資産の売却でも現金は増える', '「現金が減った＝悪い会社」と考える。成長のための設備投資かもしれない'],
          note: { kind: 'warn', text: '見るのは現金の増減の大きさだけでなく、何で増えた・減ったか。本業で稼いだのか、借りたのか、資産を売ったのか。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['利点: 客観的で比べやすく、返済力・お金の流れ・利益の質が分かる。将来の予測の土台になる', '欠点: 過去の情報、期末の見栄えを操作できる、稼ぐ力は測れない、現金の動かない取引は載らない','損益計算書と並べて見ると、弱点を補い合える']
        },
        {
          title: '英単語',
          words: [
            ['statement of cash flows', '', 'キャッシュフロー計算書'],
            ['objective', 'オブジェクティブ', '客観的（見積もりに左右されない）'],
            ['liquidity', 'リクイディティ', '流動性（支払える余裕）'],
            ['quality of profit', 'クオリティ', '利益の質（現金を伴っているか）'],
            ['window dressing', 'ウィンドウ ドレッシング', '期末の見栄えを良くする操作'],
            ['historical', 'ヒストリカル', '過去の（情報）'],
            ['comparability', 'コンパラビリティ', '比較可能性']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an advantage of a statement of cash flows to users of the financial statements?', choices: ['Cash flows are less affected by accounting policies and estimates than profit', 'It shows the future cash flows of the business', 'It shows the profitability of the business', 'It cannot be affected by the timing of payments'], answer: 0, explain: '現金の出入りは事実なので、減価償却の年数などの見積もりや会計方針に左右されにくい。将来の現金は示さない（過去の情報）。稼ぐ力は損益計算書。支払の時期をずらすと見栄えは変わる。' },
        { q: 'Which of the following is a drawback of a statement of cash flows?', choices: ['It is based on past transactions', 'It is objective', 'It shows how cash was raised and used', 'It helps users to assess liquidity'], answer: 0, explain: '過去の取引の記録なので、将来を約束するものではない。ほかの3つは利点。' },
        { q: '2社とも営業利益は $30,000。本業から生じた現金は C社 $32,000、D社 −$8,000。D社について考えられることは？', choices: ['売掛金や在庫が大きく増えて、現金が入ってきていない', 'D社の方が利益の質が高い', '減価償却費が多いので現金が減った', '2社の状態はまったく同じ'], answer: 0, explain: '利益が現金を伴っていない。売掛金の回収や在庫に問題があるかもしれない。減価償却費は現金を減らさない（むしろ足し戻す）。利益の質が高いのは C社。' },
        { q: '年末に払う予定の仕入代金を、翌月に遅らせて払った。期末のキャッシュフロー計算書はどう見える？', choices: ['現金が実際の力より良く見える', '現金が実際の力より悪く見える', '利益が増える', '何も変わらない'], answer: 0, explain: '期末の現金が多く残るので良く見える（window dressing）。でも買掛金が同じだけ残っていて、会社の力は変わっていない。支払を遅らせても利益は変わらない。' },
        { q: 'キャッシュフロー計算書で、今年の現金が大きく減っていた。正しい見方は？', choices: ['何に使ったかを見てから判断する。設備投資なら将来のためかもしれない', '現金が減ったので、必ず悪い会社', '利益も同じだけ減っている', 'キャッシュフロー計算書で現金が減ることはない'], answer: 0, explain: '現金の増減の理由が大事。成長のための投資で減ったのか、本業で稼げずに減ったのかで意味がまったく違う。利益と現金は別物なので、利益が同じだけ減るとは限らない。' }
      ]
    },
    {
      id: 'L140',
      no: 140,
      title: '取引を営業・投資・財務に分類する',
      goal: '取引が現金に与える影響を判断し、キャッシュフロー計算書の営業・投資・財務のどこに入るか（または入らないか）を見分けられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G5(d)', 'G5(g)', 'K1:F3(c)'],
      slides: [
        {
          title: '家計を3つの財布に分ける',
          paras: ['1年のお金の動きを、3つの財布に分けてみる。'],
          list: ['生活の財布: 給料が入り、食費や家賃が出る', '大きな買い物の財布: 車や家電を買う、古い車を売る', '借りる・返す財布: ローンを借りる、毎月返す'],
          after: '生活の財布がプラスなら、自分の稼ぎで暮らせている。マイナスを借金で埋めているなら危ない。分けると、お金の動きの意味が見えてくる。'
        },
        {
          title: '3つの区分の定義',
          paras: ['キャッシュフロー計算書は、現金の動きを3つに分ける（IAS 7 の定義）。'],
          list: ['営業活動（operating activities）: 本業で売上を生む活動。投資にも財務にも入らないものはここ', '投資活動（investing activities）: 固定資産などの長く使う資産や投資を、買う・売る', '財務活動（financing activities）: 株主の出資や借入の大きさ・中身が変わる（株の発行、借入、返済、利息と配当の支払）']
        },
        {
          title: 'どこに何が入るか',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="営業、投資、財務の3つの区分と、それぞれに入る主な項目" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">現金の動きを3つの箱に分ける</text><rect x="20" y="52" width="128" height="200" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="84" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">営業活動</text><text x="84" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">operating</text><text x="84" y="130" text-anchor="middle" fill="var(--ink)">顧客からの入金</text><text x="84" y="156" text-anchor="middle" fill="var(--ink)">仕入先への支払</text><text x="84" y="182" text-anchor="middle" fill="var(--ink)">給料の支払</text><text x="84" y="208" text-anchor="middle" fill="var(--ink)">法人税の支払</text><rect x="156" y="52" width="128" height="200" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">投資活動</text><text x="220" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">investing</text><text x="220" y="130" text-anchor="middle" fill="var(--ink)">固定資産の購入</text><text x="220" y="156" text-anchor="middle" fill="var(--ink)">固定資産の売却</text><text x="220" y="182" text-anchor="middle" fill="var(--ink)">受取利息</text><text x="220" y="208" text-anchor="middle" fill="var(--ink)">受取配当</text><rect x="292" y="52" width="128" height="200" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="356" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">財務活動</text><text x="356" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">financing</text><text x="356" y="130" text-anchor="middle" fill="var(--ink)">株式の発行</text><text x="356" y="156" text-anchor="middle" fill="var(--ink)">借入・返済</text><text x="356" y="182" text-anchor="middle" fill="var(--ink)">利息の支払</text><text x="356" y="208" text-anchor="middle" fill="var(--ink)">配当の支払</text><text x="220" y="284" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">3つの合計 ＝ 現金の増減</text></svg>`,
          caption: '法人税の支払は営業、受取利息と受取配当は投資、利息の支払と配当の支払は財務に入れる。個人事業なら、資本の拠出（capital introduced）と引出し（drawings）が財務に入る。'
        },
        {
          title: '利息と配当は迷いやすい',
          table: {
            caption: '今の IAS 7（IFRS 18 による改正後）',
            head: ['項目', '区分'],
            rows: [
              ['Interest paid（利息の支払）', '財務'],
              ['Interest received（受取利息）', '投資'],
              ['Dividends received（受取配当）', '投資'],
              ['Dividends paid（配当の支払）', '財務'],
              ['Income taxes paid（法人税の支払）', '営業']
            ]
          },
          after: '利息の支払は、借りたお金のコストなので借入と同じ財務。受取利息・受取配当は、投資から得た稼ぎなので投資。',
          note: { kind: 'warn', text: '古い IAS 7 は選択を認めていたので、古い教材では利息の支払が営業に入っていることがある。ACCA は2025年9月から、IFRS 18 で改正された上の表の形で出題している。' }
        },
        {
          title: '現金が動かない取引は載せない',
          paras: ['キャッシュフロー計算書に載るのは、現金が実際に動いた取引だけ。次のものはどの区分にも入らない。'],
          list: ['減価償却費、貸倒れ、引当金の計上', '無償増資（bonus issue）、固定資産の再評価', '掛けの売上・掛けの仕入（現金は回収・支払のときに動く）', '株を渡して資産を手に入れる、社債を株に替える'],
          after: '現金とすぐ現金にできる短期の預金（現金同等物、cash equivalents）の間の移し替えも、現金の中での移動なので載せない。'
        },
        {
          title: '利益と現金への影響',
          table: {
            head: ['取引', '利益', '現金'],
            rows: [
              ['現金で売る', '増える', '増える'],
              ['掛けで売る', '増える', '変わらない'],
              ['売掛金を回収する', '変わらない', '増える'],
              ['買掛金を払う', '変わらない', '減る'],
              ['減価償却費を計上する', '減る', '変わらない'],
              ['設備を現金で買う', '変わらない', '減る'],
              ['お金を借りる', '変わらない', '増える'],
              ['配当を払う', '変わらない', '減る']
            ]
          },
          after: '「現金」の列が動くものだけが、キャッシュフロー計算書に載る。'
        },
        {
          title: '例題: 3つに分けて合計する',
          example: {
            problem: 'Tako Co の今年の現金の動き: ①顧客からの入金 $60,000 ②仕入先と従業員への支払 $41,000 ③法人税の支払 $3,000 ④利息の支払 $1,000 ⑤オーブンの購入 $15,000 ⑥古いバンの売却 $4,000（売却益 $500）⑦受取利息 $200 ⑧株式の発行 $10,000 ⑨借入の返済 $6,000 ⑩配当の支払 $2,500。ほかに減価償却費 $5,000。3つの区分と現金の増減は？',
            steps: ['営業: ①②③ → $60,000 − $41,000 − $3,000 ＝ $16,000', '投資: ⑤⑥⑦ → −$15,000 ＋ $4,000 ＋ $200 ＝ −$10,800', '売却益 $500 は別の行にしない。入った現金 $4,000 の中に含まれている', '財務: ④⑧⑨⑩ → −$1,000 ＋ $10,000 − $6,000 − $2,500 ＝ $500', '減価償却費 $5,000 は現金が動かないので、どこにも入らない', '合計: $16,000 − $10,800 ＋ $500 ＝ $5,700'],
            answer: '営業 ＋$16,000、投資 −$10,800、財務 ＋$500。現金は $5,700 増えた'
          }
        },
        {
          title: 'なぜ？ 3つに分ける理由',
          paras: ['同じ「現金 ＋$5,700」でも、中身で意味が変わる。', '営業がプラスなら、本業で現金を生めている。投資のマイナスは、将来のために設備を買っている印。財務は、足りない分を株主や銀行からどう集めたか、余った分をどう返したかを示す。', '営業がマイナスで、それを借入で埋め続けている会社は危ない。分けて初めて、それが見える。']
        },
        {
          title: 'よくある間違い',
          list: ['配当の支払を投資活動に入れる（正しくは財務）', '利息の支払を営業活動に入れる（古い形。今は財務）', '受取利息を財務活動に入れる（正しくは投資）', '固定資産の売却収入を営業に入れる（正しくは投資）', '売却益だけを投資の入金にする（入るのは売った代金の全額）'],
          note: { kind: 'warn', text: '減価償却費や無償増資を「どこかの区分」に入れようとしない。現金が動いていないので、どこにも載らない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['営業＝本業、投資＝長く使う資産や投資の売買、財務＝株主と貸し手とのやりとり', '税金の支払は営業、受取利息・受取配当は投資、利息の支払と配当の支払は財務', '現金が動かない取引（減価償却・無償増資・再評価・掛け取引）は載せない']
        },
        {
          title: '英単語',
          words: [
            ['operating activities', 'オペレーティング アクティビティーズ', '営業活動'],
            ['investing activities', 'インベスティング アクティビティーズ', '投資活動'],
            ['financing activities', 'ファイナンシング アクティビティーズ', '財務活動'],
            ['interest paid / received', '', '利息の支払 / 受取利息'],
            ['dividends paid / received', '', '配当の支払 / 受取配当'],
            ['cash equivalents', 'キャッシュ イクイバレンツ', '現金同等物（すぐ現金にできる短期の預金など）'],
            ['non-cash transaction', '', '現金が動かない取引']
          ]
        }
      ],
      quiz: [
        { q: 'In which section of the statement of cash flows is interest received shown?', choices: ['Investing activities', 'Operating activities', 'Financing activities', 'It is not shown'], answer: 0, explain: '受取利息は投資活動（投資から得た稼ぎ）。利息の支払と配当の支払は財務活動なので、混同しやすい。' },
        { q: 'In which section of the statement of cash flows is interest paid by a trading company shown?', choices: ['Financing activities', 'Operating activities', 'Investing activities', 'It is not shown'], answer: 0, explain: '利息の支払は、借りたお金のコストなので財務活動（IFRS 18 で改正された今の IAS 7）。営業活動は古い IAS 7 で認められていた形で、今の試験では間違い。' },
        { q: 'Which of the following transactions does NOT appear in a statement of cash flows?', choices: ['A bonus issue of shares', 'A rights issue of shares', 'Repayment of a bank loan', 'Purchase of a vehicle for cash'], answer: 0, explain: '無償増資は剰余金を株式資本に移すだけで、現金は動かない。株主割当増資は現金で株を発行するので財務活動の入金。借入の返済は財務、車の購入は投資。' },
        { q: 'Tako Co は今年、設備を $12,000 で現金購入し、古い設備を $3,000 で売った（売却益 $500）。受取利息は $400。投資活動によるキャッシュフロー（純額）は？（マイナスならマイナスで答える）', type: 'number', answer: -8600, unit: '$', explain: '−$12,000 ＋ $3,000 ＋ $400 ＝ −$8,600。売却益 $500 は売った代金 $3,000 に含まれているので、別に足さない。足すと −$8,100 になる。' },
        { q: '財務活動に入るものは？', choices: ['配当の支払', '受取配当', '法人税の支払', '固定資産の売却収入'], answer: 0, explain: '配当の支払は株主とのやりとりなので財務。受取配当と売却収入は投資、法人税の支払は営業。「配当」という言葉だけで判断せず、払うのか受け取るのかを見る。' },
        { q: '顧客からの入金 $50,000、仕入先と従業員への支払 $32,000、法人税の支払 $4,000、利息の支払 $1,500、銀行からの借入 $10,000。営業活動によるキャッシュフローは？', type: 'number', answer: 14000, unit: '$', explain: '$50,000 − $32,000 − $4,000 ＝ $14,000。利息の支払 $1,500 と借入 $10,000 は財務活動なので入れない。利息も引くと $12,500（古い形）、借入も入れると $24,000 になる。' }
      ]
    },
    {
      id: 'L141',
      no: 141,
      title: '営業CFを間接法で計算する',
      goal: '営業利益から出発して調整し、営業活動によるキャッシュフローを間接法で計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G5(e)i', 'K1:F3(d)'],
      slides: [
        {
          title: '家計簿の黒字から、通帳の増減を出す',
          paras: ['今月の家計簿は8万円の黒字。でも通帳は5万円しか増えていない。ずれを調べると、2つ見つかった。'],
          list: ['フリマで売った4万円を収入に入れたが、代金はまだもらっていない → −4万円', 'カードで買った服1万円を費用に入れたが、引き落としは来月 → ＋1万円'],
          after: '8 − 4 ＋ 1 ＝ 5万円。利益から出発して、現金とのずれを足し引きで直す。これが間接法（indirect method）。'
        },
        {
          title: '間接法の形',
          table: {
            caption: 'Cash flows from operating activities',
            head: ['行', '向き'],
            rows: [
              ['Operating profit（営業利益）', 'スタート'],
              ['Depreciation / amortisation（減価償却費）', '＋'],
              ['Loss on disposal（売却損）', '＋'],
              ['Profit on disposal（売却益）', '−'],
              ['(Increase) / decrease in inventories', '増えたら− 減ったら＋'],
              ['(Increase) / decrease in trade receivables', '増えたら− 減ったら＋'],
              ['Increase / (decrease) in trade payables', '増えたら＋ 減ったら−'],
              ['Cash from operating activities before income taxes', '小計'],
              ['Income taxes paid（法人税の支払）', '−']
            ],
            total: ['Net cash from operating activities', '合計']
          }
        },
        {
          title: 'スタートは営業利益',
          paras: ['今の IAS 7（IFRS 18 による改正後）では、間接法は営業利益（operating profit）から始める。ACCA は2025年9月からこの形で出題している。', '営業利益は、財務費用（finance costs）と受取利息・配当（investment income）より上の利益。だから営業の区分では、利息を調整しなくてよい。利息の支払は財務、受取利息・配当は投資に書く。'],
          formula: '営業利益 ＝ 税引前利益 ＋ 財務費用 − 受取利息・配当',
          note: { kind: 'tip', text: '問題に税引前利益（profit before tax）しかないときは、この式で営業利益に直してから始める。古い教材の「税引前利益から始めて利息を足し戻す」形は、今の試験では使わない。' }
        },
        {
          title: '① 現金が動かない損益を戻す',
          paras: ['利益からは引かれているが、現金は出ていない費用を足し戻す。逆に、利益に入っているが現金ではない収益は引く。'],
          list: ['減価償却費・無形資産の償却: 足す', '固定資産の売却損: 足す。売却益: 引く（売った代金は全額を投資活動に書く）', '引当金（provision）の増加: 足す。費用にしたが、まだ払っていない', '売掛金は貸倒引当金を引いた後の純額で比べれば、引当金を別に調整しなくてよい'],
          note: { kind: 'warn', text: '減価償却費を足すのは「減価償却で現金が増える」からではない。利益を計算するときに引いた、現金の出ない費用を元に戻しているだけ。' }
        },
        {
          title: '② 運転資本の増減を直す（なぜ？）',
          paras: ['在庫・売掛金・買掛金のような日々の商売で動く資産と負債を、運転資本（working capital）という。'],
          formula: '運転資本の資産が増えたら引く、負債が増えたら足す',
          list: ['在庫が増えた: 仕入れて払ったのに、売れ残りは費用に入っていない → 引く', '売掛金が増えた: 売上は利益に入ったが、代金はまだ → 引く', '買掛金が増えた: 費用は引いたが、まだ払っていない → 足す'],
          after: '減ったときはすべて逆。前払費用（prepayments）は資産、未払費用（accruals）は負債と同じ向きで直す。'
        },
        {
          title: '例題①: Tako Co の営業CF',
          example: {
            problem: 'Tako Co の営業利益は $8,000（財務費用・受取利息はないので、税引前利益も $8,000）。減価償却費 $2,000。在庫は $4,000 → $5,000、売掛金は $6,000 → $8,000、買掛金は $3,000 → $3,500。未払法人税は期首 $1,000・期末 $1,300、今年の法人税費用は $1,500。営業活動によるキャッシュフローは？',
            steps: ['営業利益 $8,000 からスタート', '減価償却費を足し戻す: ＋$2,000 → $10,000', '在庫が $1,000 増えた: −$1,000 → $9,000', '売掛金が $2,000 増えた: −$2,000 → $7,000', '買掛金が $500 増えた: ＋$500 → 営業から生じた現金（cash from operating activities before income taxes）$7,500', '法人税の支払: $1,000 ＋ $1,500 − $1,300 ＝ $1,200'],
            answer: '$7,500 − $1,200 ＝ 営業CF $6,300'
          }
        },
        {
          title: '税金は「払った額」を引く',
          paras: ['営業利益は税金を引く前の利益。だから小計の下で、今年実際に払った法人税を引く。費用の額ではない。', '利息の支払も同じ式で計算できる。ただし書くのは財務活動（L144）。'],
          formula: '支払額 ＝ 期首の未払 ＋ 今年の費用 − 期末の未払',
          tAccount: { name: 'Tax payable', debit: [['Cash paid（逆算）', '1,200']], credit: [['Balance b/d', '1,000'], ['SPL tax expense', '1,500']], balance: { side: 'debit', label: 'Balance c/d', amount: '1,300' } }
        },
        {
          title: '例題②: 税引前利益しか分からない場合',
          example: {
            problem: '税引前利益 $45,000（財務費用 $3,000 を引いた後、受取利息 $1,000 を足した後）。減価償却費 $9,000、設備の売却益 $2,000。在庫は $4,000 減少、売掛金は $6,000 増加、買掛金は $3,000 減少。未払利息は期首 $500・期末 $800。未払法人税は期首 $7,000・期末 $8,000、法人税費用 $10,000。営業CFは？',
            steps: ['営業利益に直す: $45,000 ＋ 財務費用 $3,000 − 受取利息 $1,000 ＝ $47,000', '減価償却費 ＋$9,000、売却益 −$2,000 → $54,000', '在庫の減少 ＋$4,000、売掛金の増加 −$6,000、買掛金の減少 −$3,000 → 営業から生じた現金 $49,000', '税金の支払: $7,000 ＋ $10,000 − $8,000 ＝ $9,000', '利息の支払 $500 ＋ $3,000 − $800 ＝ $2,700 は財務活動へ。受取利息 $1,000 は投資活動へ'],
            answer: '$49,000 − $9,000 ＝ 営業CF $40,000'
          }
        },
        {
          title: 'よくある間違い',
          list: ['税引前利益や当期利益からそのまま始める。スタートは営業利益', '運転資本の符号を逆にする（売掛金の増加を足すなど）', '売却益を足してしまう。売却益は引き、売却損は足す', '利息の支払を営業の区分で引く（古い形。今は財務）'],
          note: { kind: 'warn', text: '税金は、損益計算書の費用ではなく「実際に払った額」を引く。期首と期末の未払で調整する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['営業利益から出発し、現金の動かない損益（減価償却・売却損益）を戻す', '運転資本の資産が増えたら引く、負債が増えたら足す（在庫・売掛金・買掛金）', '税金は実際に払った額（期首未払＋費用−期末未払）を引く。利息の支払は財務へ']
        },
        {
          title: '英単語',
          words: [
            ['indirect method', 'インダイレクト メソッド', '間接法（利益から調整する）'],
            ['operating profit', 'オペレーティング プロフィット', '営業利益（間接法のスタート）'],
            ['working capital', 'ワーキング キャピタル', '運転資本（在庫・売掛金・買掛金など）'],
            ['cash from operating activities before income taxes', '', '営業から生じた現金（小計。古い名前は cash generated from operations）'],
            ['finance costs / investment income', '', '財務費用 / 受取利息・配当（どちらも営業利益の下）'],
            ['income taxes paid', '', '法人税の支払'],
            ['net cash from operating activities', '', '営業活動によるキャッシュフロー']
          ]
        }
      ],
      quiz: [
        { q: 'Operating profit was $30,000 and depreciation was $5,000. Inventory increased by $2,000, trade receivables decreased by $1,500 and trade payables increased by $1,000. What was the cash from operating activities before income taxes?', choices: ['$35,500', '$32,500', '$33,500', '$25,500'], answer: 0, explain: '$30,000 + $5,000 − $2,000 + $1,500 + $1,000 ＝ $35,500。$32,500 は売掛金の向きが逆、$33,500 は買掛金の向きが逆、$25,500 は減価償却費を引いてしまった間違い。' },
        { q: 'Tax payable was $4,000 at the start of the year and $5,500 at the end. The income tax expense for the year was $6,000. How much tax was paid during the year?', type: 'number', answer: 4500, unit: '$', explain: '$4,000 + $6,000 − $5,500 ＝ $4,500。費用の $6,000 をそのまま支払にしない。期末の未払 $5,500 はまだ払っていない。' },
        { q: 'Which of the following is deducted from operating profit when calculating cash from operating activities using the indirect method?', choices: ['An increase in trade receivables', 'The depreciation charge', 'An increase in trade payables', 'A loss on disposal of equipment'], answer: 0, explain: '売掛金が増えた＝売上は利益に入ったが代金が入っていない、なので引く。減価償却費と売却損は現金が出ない費用なので足す。買掛金の増加はまだ払っていないので足す。' },
        { q: '財務費用（支払利息）は $2,400。未払利息は期首 $300、期末 $500。今年の利息の支払は？', type: 'number', answer: 2200, unit: '$', explain: '$300 ＋ $2,400 − $500 ＝ $2,200。税金と同じ式。利息の支払 $2,200 は営業ではなく財務活動に書く。' },
        { q: '営業利益には設備の売却益 $3,000 が含まれている。間接法ではどうする？', choices: ['利益から $3,000 を引き、売った代金の全額を投資活動に書く', '利益に $3,000 を足す', '何もしない', '$3,000 を投資活動の入金にする'], answer: 0, explain: '売却益は現金の動きではない。利益から引いておき、実際に入った売却代金を投資活動に全額書く。足すと、売却の効果を二重に数える。' },
        { q: 'Profit before tax was $20,000, after deducting finance costs of $2,000 and adding investment income of $500. Depreciation was $3,000, there were no working capital changes and income taxes paid were $4,000. What was the net cash from operating activities?', type: 'number', answer: 20500, unit: '$', explain: '営業利益 ＝ $20,000 ＋ $2,000 − $500 ＝ $21,500。＋減価償却費 $3,000 ＝ $24,500、−税金 $4,000 ＝ $20,500。税引前利益から始めると $19,000 になる。利息の支払は財務、受取利息・配当は投資に書く。' }
      ]
    }
  ],
  cards: [
    { id: 'L137-1', lesson: 'L137', q: '利益と現金の増減がずれる主な理由は？', a: '掛け取引、在庫、固定資産の購入と減価償却、借入や配当、現金の出ない費用' },
    { id: 'L137-2', lesson: 'L137', q: '発生主義（accruals basis）とは？', a: '売上は売ったとき、費用は使ったときに数える。現金が動いた日ではない' },
    { id: 'L137-3', lesson: 'L137', q: '減価償却費はその年の現金を減らす？', a: '減らさない。現金が出たのは固定資産を買った日' },
    { id: 'L137-4', lesson: 'L137', q: '掛けで売ると、利益と現金はどうなる？', a: '利益は増えるが、現金は回収するまで増えない' },
    { id: 'L137-5', lesson: 'L137', q: '「利益は意見、現金は事実」の意味は？', a: '利益は見積もり（償却年数など）で変わるが、現金の出入りは変わらない' },
    { id: 'L137-6', lesson: 'L137', q: 'L02 の「もうけ＝現金の増加」が成り立つのは？', a: '全部その場の現金で売り買いした場合だけ' },
    { id: 'L138-1', lesson: 'L138', q: '会社が潰れるのはどんなとき？', a: '赤字のときではなく、期日に払う現金が尽きたとき（黒字でも潰れる）' },
    { id: 'L138-2', lesson: 'L138', q: '資金繰り予測（cash flow forecast）の役割は？', a: '現金が足りなくなる時期を先に知り、借入などの手を前もって打つ' },
    { id: 'L138-3', lesson: 'L138', q: '現金を増やす管理の方法は？', a: '売掛金を早く回収、買掛金は期日まで待って払う、在庫を持ちすぎない' },
    { id: 'L138-4', lesson: 'L138', q: '過大取引（overtrading）とは？', a: '急成長で在庫と売掛金に現金が取られ、支払の現金が足りなくなること' },
    { id: 'L138-5', lesson: 'L138', q: '現金が多すぎると何が問題？', a: '寝かせた現金は稼がない。返済・投資・配当などに回せたはず' },
    { id: 'L139-1', lesson: 'L139', q: 'CF計算書の主な利点は？', a: '客観的で比べやすい。返済力・お金の流れ・利益の質が分かる' },
    { id: 'L139-2', lesson: 'L139', q: 'CF計算書の主な欠点は？', a: '過去の情報。期末の見栄えを操作できる。稼ぐ力は測れない。現金の動かない取引は載らない' },
    { id: 'L139-3', lesson: 'L139', q: 'window dressing の例は？', a: '年末の支払を翌月に遅らせて、期末の現金を多く見せる' },
    { id: 'L139-4', lesson: 'L139', q: '利益が出ても本業の現金がマイナス。考えられることは？', a: '売掛金や在庫が増えて、利益が現金を伴っていない（利益の質が低い）' },
    { id: 'L139-5', lesson: 'L139', q: 'なぜ損益計算書と並べて見る？', a: '稼ぐ力と現金を生む力は別。両方の弱点を補い合えるから' },
    { id: 'L139-6', lesson: 'L139', q: 'CF計算書は将来の現金を示す？', a: '示さない（過去の情報）。ただ将来の現金を予測する土台にはなる（利点）' },
    { id: 'L140-1', lesson: 'L140', q: '営業・投資・財務の中身は？', a: '営業＝本業、投資＝長く使う資産や投資の売買、財務＝株主と貸し手とのやりとり' },
    { id: 'L140-2', lesson: 'L140', q: '利息と配当の区分は？（今の IAS 7）', a: '利息の支払・配当の支払は財務、受取利息・受取配当は投資' },
    { id: 'L140-3', lesson: 'L140', q: 'CF計算書に載らない取引の例は？', a: '減価償却、無償増資、再評価、掛けの売上（回収まで）' },
    { id: 'L140-4', lesson: 'L140', q: '法人税の支払の区分は？', a: '営業活動' },
    { id: 'L140-5', lesson: 'L140', q: '固定資産の売却益は投資CFにどう書く？', a: '別の行にしない。売った代金の全額を売却収入として書く' },
    { id: 'L141-1', lesson: 'L141', q: '間接法のスタートは？', a: '営業利益（operating profit）。税引前利益なら財務費用を足し、受取利息・配当を引いて直す' },
    { id: 'L141-2', lesson: 'L141', q: '運転資本の増減の符号のルールは？', a: '資産（在庫・売掛金）が増えたら引く、負債（買掛金）が増えたら足す' },
    { id: 'L141-3', lesson: 'L141', q: '売却損益は間接法でどうする？', a: '売却損は足す、売却益は引く。代金は投資活動に書く' },
    { id: 'L141-4', lesson: 'L141', q: '間接法で財務費用・利息の支払はどう扱う？', a: '営業利益の下なので調整しない。利息の支払は財務活動に書く' },
    { id: 'L141-5', lesson: 'L141', q: '税金・利息の支払額の計算は？', a: '期首の未払 ＋ 今年の費用 − 期末の未払' },
    { id: 'L141-6', lesson: 'L141', q: '在庫が増えたら、なぜ引く？', a: '仕入れて現金を払ったが、売れ残りは費用に入っていないから' }
  ]
});
