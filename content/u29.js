(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 29,
  part: 18,
  partTitle: 'キャッシュフロー計算書',
  lessons: [
    {
      id: 'L142',
      no: 142,
      title: '営業CF（直接法）',
      goal: '現金の出入りを項目ごとに集める方法（直接法）で、営業活動によるキャッシュフローを計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G5(e)i', 'K1:F3(d)'],
      slides: [
        {
          title: '通帳を見れば一発で分かる',
          paras: ['今月、生活のお金がいくら増えたかを知る方法は2つある。', '1つは通帳を見て「給料が30万円入った、家賃8万円とカード代12万円を払った」と、入ったお金と出たお金をそのまま足し引きする方法。', 'もう1つは、家計簿の黒字から出発して「カードで買ってまだ払っていない分」などを調整する方法。前のレッスンの間接法がこちら。今回は1つ目の直接法（direct method）を学ぶ。']
        },
        {
          title: '直接法の形',
          paras: ['直接法は、営業活動の現金の出入りを項目ごとに並べる。たこ焼き屋 Tako Co の例で見る。'],
          table: {
            caption: '直接法の営業CF（Tako Co）',
            head: ['項目', '$'],
            rows: [
              ['Cash receipts from customers（顧客からの入金）', '48,000'],
              ['Cash paid to suppliers（仕入先への支払）', '(30,500)'],
              ['Cash paid to employees（従業員への支払）', '(7,000)'],
              ['Cash paid for other expenses（その他の費用の支払）', '(3,000)'],
              ['Cash generated from operations（営業から生じた現金）', '7,500'],
              ['Interest paid（利息の支払）', '0'],
              ['Income taxes paid（法人税の支払）', '(1,200)']
            ],
            total: ['Net cash from operating activities', '6,300']
          },
          after: '直接法と間接法で違うのは「営業から生じた現金」まで。その下の利息と税金の支払は、どちらの方法でも同じ。Tako Co は借入がないので、利息の支払は 0。',
          note: { kind: 'tip', text: 'ACCA の標準の形では、利息の支払は営業活動に入れる。IAS 7 は、利息の支払を財務活動に入れることも認めている。試験で計算書の形（proforma）が示されたら、その形に従う。' }
        },
        {
          title: '顧客からの入金を計算する',
          paras: ['売上（revenue）は「売った金額」で、入金とは違う。掛けで売った分は、まだ現金になっていない。', '売掛金の T勘定で考える。売上は $50,000、売掛金は期首 $6,000、期末 $8,000。'],
          tAccount: { name: 'Trade receivables', debit: [['Balance b/d', '6,000'], ['Revenue', '50,000']], credit: [['Cash received（逆算）', '48,000']], balance: { side: 'credit', label: 'Balance c/d', amount: '8,000' } },
          formula: '入金 ＝ 期首売掛金 ＋ 売上 − 期末売掛金',
          note: { kind: 'tip', text: '貸倒れ（irrecoverable debts）で消した売掛金は、現金が入らないのに売掛金を減らす。出てきたら、入金の計算からも引く。' }
        },
        {
          title: '仕入先への支払は2段階',
          paras: ['売上原価（cost of sales）は「売れた分の原価」。まず在庫の増減で仕入（purchases）に直し、次に買掛金の増減で支払に直す。'],
          example: {
            problem: 'Tako Co の売上原価は $30,000。在庫は期首 $4,000、期末 $5,000。買掛金は期首 $3,000、期末 $3,500。仕入先への支払は？',
            steps: ['① 仕入を出す。売上原価＝期首在庫＋仕入−期末在庫 なので、仕入＝売上原価＋期末在庫−期首在庫', '$30,000 ＋ $5,000 − $4,000 ＝ $31,000', '② 支払を出す。支払＝期首買掛金＋仕入−期末買掛金', '$3,000 ＋ $31,000 − $3,500 ＝ $30,500'],
            answer: '仕入先への支払は $30,500'
          }
        },
        {
          title: 'その他の費用の支払',
          paras: ['費用のうち、現金が出ていかないものは入れない。代表は減価償却費（depreciation）。固定資産の売却損や、貸倒引当金の増加も現金は動かない。', '未払費用（accruals）や前払費用（prepayments）があれば調整する。'],
          list: ['未払費用: 支払＝費用＋期首未払−期末未払', '前払費用: 支払＝費用−期首前払＋期末前払'],
          after: 'Tako Co の給料は $7,000（未払なし）。その他の費用 $5,000 には減価償却費 $2,000 が入っているので、支払は $3,000。'
        },
        {
          title: 'なぜ？ 2つの方法で答えが同じになる',
          paras: ['直接法も間接法も、同じ1年間の現金の動きを別の方向から見ているだけ。だから答えは必ず同じになる。'],
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="直接法と間接法は同じ7,500ドルにたどり着く" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">2つの道で、同じ答えにたどり着く</text><rect x="20" y="52" width="190" height="176" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="80" font-size="16" font-weight="600" fill="var(--ink)">直接法</text><text x="194" y="80" text-anchor="end" font-size="12.5" fill="var(--quiet)">direct</text><text x="36" y="108" fill="var(--ink)">入金</text><text x="194" y="108" text-anchor="end" fill="var(--ink)">48,000</text><text x="36" y="132" fill="var(--ink)">仕入先</text><text x="194" y="132" text-anchor="end" fill="var(--ink)">−30,500</text><text x="36" y="156" fill="var(--ink)">給料</text><text x="194" y="156" text-anchor="end" fill="var(--ink)">−7,000</text><text x="36" y="180" fill="var(--ink)">その他の費用</text><text x="194" y="180" text-anchor="end" fill="var(--ink)">−3,000</text><rect x="230" y="52" width="190" height="176" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="246" y="80" font-size="16" font-weight="600" fill="var(--ink)">間接法</text><text x="404" y="80" text-anchor="end" font-size="12.5" fill="var(--quiet)">indirect</text><text x="246" y="108" fill="var(--ink)">税引前利益</text><text x="404" y="108" text-anchor="end" fill="var(--ink)">8,000</text><text x="246" y="132" fill="var(--ink)">減価償却費</text><text x="404" y="132" text-anchor="end" fill="var(--ink)">+2,000</text><text x="246" y="156" fill="var(--ink)">在庫の増加</text><text x="404" y="156" text-anchor="end" fill="var(--ink)">−1,000</text><text x="246" y="180" fill="var(--ink)">売掛金の増加</text><text x="404" y="180" text-anchor="end" fill="var(--ink)">−2,000</text><text x="246" y="204" fill="var(--ink)">買掛金の増加</text><text x="404" y="204" text-anchor="end" fill="var(--ink)">+500</text><path d="M115 228L185 256" stroke="var(--edge)" stroke-width="1.25" fill="none"/><path d="M325 228L255 256" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="90" y="256" width="260" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="280" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">営業から生じた現金</text><text x="220" y="302" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">$7,500</text></svg>`,
          caption: '税引前利益 $8,000 は $50,000 − $30,000 − $7,000 − $5,000。直接法は「何に払ったか」が、間接法は「利益と現金がなぜずれたか」が見える。'
        },
        {
          title: 'どちらを使う？',
          list: ['IAS 7（キャッシュフロー計算書の基準）は、直接法をすすめている（encourages）。現金の出入りの中身がそのまま分かるから', '実務では間接法が多い。帳簿の数字からすぐ作れて、利益と現金のつながりも見えるから', 'どちらも認められる。試験ではどちらの計算も出る']
        },
        {
          title: 'よくある間違い',
          list: ['売上をそのまま入金にする（売掛金の増減を忘れる）', '売上原価をそのまま仕入先への支払にする（在庫と買掛金の2段階を忘れる）', '減価償却費を「費用の支払」に入れる（現金は出ていない）'],
          note: { kind: 'warn', text: '直接法に「減価償却費を足し戻す」行は無い。足し戻しは間接法だけ。直接法は最初から現金の出入りだけを書く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接法＝営業の現金の出入り（入金と支払）を項目ごとに並べる', '入金＝期首売掛金＋売上−期末売掛金。支払は「売上原価→仕入→支払」の2段階', '直接法と間接法で、営業から生じた現金は必ず同じになる']
        },
        {
          title: '英単語',
          words: [
            ['direct method', 'ダイレクト メソッド', '直接法（現金の出入りを並べる）'],
            ['indirect method', 'インダイレクト メソッド', '間接法（利益から調整する）'],
            ['cash receipts from customers', '', '顧客からの入金'],
            ['cash paid to suppliers and employees', '', '仕入先と従業員への支払'],
            ['cash generated from operations', '', '営業から生じた現金（シラバスでは cash from operating activities before income taxes）'],
            ['net cash from operating activities', '', '営業活動によるキャッシュフロー（純額）'],
            ['IAS 7', '', 'キャッシュフロー計算書の会計基準']
          ]
        }
      ],
      quiz: [
        { q: 'A company had trade receivables of $12,000 at the start of the year and $15,000 at the end. Credit sales for the year were $90,000. What were the cash receipts from customers?', type: 'number', answer: 87000, unit: '$', explain: '$12,000 + $90,000 − $15,000 ＝ $87,000。期首と期末を逆にすると $93,000 になる。売掛金が増えた＝売ったのにまだ回収していない分がある、なので入金は売上より少ない。' },
        { q: 'Cost of sales was $60,000. Inventory increased from $8,000 to $10,000. Trade payables decreased from $7,000 to $6,000. What was the cash paid to suppliers?', choices: ['$57,000', '$59,000', '$63,000', '$61,000'], answer: 2, explain: '仕入＝$60,000 + $10,000 − $8,000 ＝ $62,000。支払＝$7,000 + $62,000 − $6,000 ＝ $63,000。$61,000 は買掛金の向きが逆、$59,000 は在庫の向きが逆、$57,000 は両方逆。' },
        { q: '直接法の営業CFに出てこないものは？', choices: ['顧客からの入金', '従業員への支払', '減価償却費の足し戻し', '法人税の支払'], answer: 2, explain: '減価償却費の足し戻しは間接法だけ。直接法は現金の出入りだけを並べるので、そもそも減価償却費は出てこない。法人税の支払はどちらの方法でも下に出る。' },
        { q: '給料（wages）の費用は $20,000。未払給料は期首 $1,000、期末 $1,500。給料の現金支払は？', type: 'number', answer: 19500, unit: '$', explain: '$20,000 + $1,000 − $1,500 ＝ $19,500。期首の未払分は今年払い、期末の未払分はまだ払っていない。' },
        { q: 'Opening trade receivables were $20,000 and closing trade receivables were $18,000. Credit sales were $100,000 and irrecoverable debts of $3,000 were written off. What cash was received from customers?', choices: ['$102,000', '$99,000', '$95,000', '$105,000'], answer: 1, explain: '$20,000 + $100,000 − $3,000 − $18,000 ＝ $99,000。貸倒れは現金が入らずに売掛金が減った分なので引く。$102,000 は貸倒れを忘れた、$105,000 は貸倒れを足した、$95,000 は期首と期末が逆。' },
        { q: '直接法で計算した「営業から生じた現金」が $40,000 だった。同じ会社の同じ年を間接法で計算すると？', choices: ['$40,000 になる', '税引前利益と同じ額になる', '減価償却費の分だけ多くなる', '減価償却費の分だけ少なくなる'], answer: 0, explain: '2つの方法は同じ現金の動きを別の方向から見ているだけなので、答えは必ず同じ。利益と現金は別物なので、利益と同じ額にはならない。' }
      ]
    },
    {
      id: 'L143',
      no: 143,
      title: '投資CF（固定資産の取得・売却の逆算）',
      goal: '固定資産の購入額と売却収入を財政状態計算書の増減から逆算して、投資活動によるキャッシュフローを作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G5(e)ii', 'K1:F3(c)', 'K1:F3(d)'],
      slides: [
        {
          title: '車を買い替えるとき',
          paras: ['古い車を50万円で売って、新しい車を200万円で買った。現金は200万円出て、50万円入った。', '古い車の帳簿上の値打ちが60万円なら、売却損は10万円。でも入ってきた現金は50万円。損が出ても、入ってくるのは売った値段そのもの。', '投資のキャッシュフローは、この「買った額」と「売った値段」を見る。']
        },
        {
          title: '投資活動に入るもの',
          paras: ['投資活動（investing activities）は、長く使う資産や投資を買ったり売ったりする現金の動き。'],
          table: {
            head: ['項目', '向き'],
            rows: [
              ['Purchase of property, plant and equipment（有形固定資産の購入）', '出る'],
              ['Proceeds from sale of PPE（有形固定資産の売却収入）', '入る'],
              ['Purchase of intangible assets（無形資産の購入）', '出る'],
              ['Interest received（受取利息）', '入る'],
              ['Dividends received（受取配当）', '入る']
            ]
          },
          after: 'ACCA の標準の形では、受取利息と受取配当は投資活動に入れる（IAS 7 は営業活動に入れることも認めている）。利息の支払は営業活動（L144）。'
        },
        {
          title: '売却収入を逆算する',
          paras: ['問題には、売却収入（proceeds）そのものではなく「帳簿価額」と「売却損益」が書かれていることが多い。', '帳簿価額が無ければ、取得原価（cost）−減価償却累計額で出す。'],
          formula: '売却収入 ＝ 帳簿価額 ＋ 売却益（売却損なら引く）',
          example: {
            problem: '帳簿価額（carrying amount）$6,000 の機械を売って、売却損（loss on disposal）$1,500 が出た。売却収入は？',
            steps: ['損が出た＝帳簿価額より安く売った', '$6,000 − $1,500 ＝ $4,500'],
            answer: '売却収入は $4,500。投資CFに入金 $4,500 と書く'
          }
        },
        {
          title: '購入額は増減から逆算する',
          paras: ['購入額も、直接は書かれていないことが多い。有形固定資産（PPE）の帳簿価額の増減を並べて、足りない数字として逆算する。'],
          formula: '期首 ＋ 購入 ＋ 再評価 − 減価償却 − 売却分 ＝ 期末',
          list: ['再評価（revaluation）で増えた分は、現金を使っていないので購入に含めない。再評価剰余金（revaluation surplus）の増加を見れば分かる', '再評価がなければ、取得原価（cost）で考えてもよい: 期首原価＋購入−売却した資産の原価＝期末原価', '減価償却費が書かれていなければ累計額で逆算: 期首累計額＋償却費−売却分の累計額＝期末累計額']
        },
        {
          title: '例題: PPE の購入額',
          example: {
            problem: 'PPE の帳簿価額は期首 $80,000、期末 $95,000。今年の減価償却費は $12,000。帳簿価額 $6,000 の機械を $4,500 で売った。土地の再評価で $10,000 増えた。PPE の購入額は？',
            steps: ['期首 $80,000 に再評価 $10,000 を足す → $90,000', '減価償却 $12,000 と売却分 $6,000 を引く → $72,000', '期末は $95,000。足りない分が購入: $95,000 − $72,000 ＝ $23,000', '検算: $80,000 ＋ $23,000 ＋ $10,000 − $12,000 − $6,000 ＝ $95,000'],
            answer: '購入額は $23,000'
          },
          tAccount: { name: 'PPE（carrying amount）', debit: [['Balance b/d', '80,000'], ['Revaluation', '10,000'], ['Additions（逆算）', '23,000']], credit: [['Depreciation', '12,000'], ['Disposal', '6,000']], balance: { side: 'credit', label: 'Balance c/d', amount: '95,000' } }
        },
        {
          title: '投資CFにまとめる',
          table: {
            caption: 'Cash flows from investing activities',
            head: ['項目', '$'],
            rows: [
              ['Purchase of property, plant and equipment', '(23,000)'],
              ['Proceeds from sale of property, plant and equipment', '4,500']
            ],
            total: ['Net cash used in investing activities', '(18,500)']
          },
          after: '買った額と売った額は相殺せず、別々の行に書く（IAS 7 は投資と財務の入金と支払を総額で示すよう求めている）。'
        },
        {
          title: 'なぜ？ 売却損を営業CFで足し戻す理由',
          paras: ['売却で入った現金 $4,500 は、投資CFに全額書く。', '一方、損益計算書の利益からは売却損 $1,500 が引かれている。でもこの損は現金の動きではない。間接法は利益からスタートするので、売却損は足し戻し、売却益なら引く。', 'こうしないと、売却の影響を「利益」と「売却収入」の両方で数えてしまう。']
        },
        {
          title: 'よくある間違い',
          list: ['売却益（profit on disposal）だけを投資CFの入金にする。入るのは売却収入の全額', '再評価の増加まで購入額に含めてしまう', '購入と売却を相殺して1行にする'],
          note: { kind: 'warn', text: '「売却損が出たから現金が出ていった」ではない。損が出ても、売った値段の分だけ現金は入る。売却収入＝帳簿価額±売却損益。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['投資CF＝固定資産や投資の購入（出る）と売却（入る）。受取利息・受取配当もここ', '売却収入＝帳簿価額＋売却益（売却損なら引く）', '購入額は逆算: 期首＋購入＋再評価−償却−売却分＝期末']
        },
        {
          title: '英単語',
          words: [
            ['investing activities', 'インベスティング アクティビティーズ', '投資活動'],
            ['purchase of property, plant and equipment', '', '有形固定資産の購入'],
            ['proceeds from sale', 'プロシーズ', '売却収入（売って入った現金）'],
            ['carrying amount', 'キャリング アマウント', '帳簿価額'],
            ['profit / loss on disposal', 'ディスポーザル', '売却益 / 売却損'],
            ['additions', 'アディションズ', '（固定資産の）購入、追加'],
            ['net cash used in investing activities', '', '投資活動に使った現金（純額）']
          ]
        }
      ],
      quiz: [
        { q: 'During the year, a company sold a machine that had cost $25,000 and had accumulated depreciation of $10,000. A profit on disposal of $3,000 was made. What were the sale proceeds?', type: 'number', answer: 18000, unit: '$', explain: '帳簿価額は $25,000 − $10,000 ＝ $15,000。売却収入は $15,000 + $3,000 ＝ $18,000。益が出た＝帳簿価額より高く売った。$3,000 だけを入金にする、原価 $25,000 から始めて $28,000 にするのはよくある間違い。' },
        { q: 'The cost of property, plant and equipment was $120,000 at the start of the year and $150,000 at the end. During the year, assets that had cost $20,000 were sold. How much was spent on new property, plant and equipment?', choices: ['$30,000', '$10,000', '$50,000'], answer: 2, explain: '$120,000 + 購入 − $20,000 ＝ $150,000 なので、購入は $50,000。$30,000 は期首と期末の差だけで、売った分の $20,000 を足し戻し忘れている。' },
        { q: '投資活動によるキャッシュフロー（ACCA の標準の形）に入るものは？', choices: ['支払った利息', '受け取った配当', '株主に払った配当', '借入の返済'], answer: 1, explain: '受取配当と受取利息は投資活動。支払った利息は営業活動、株主への配当と借入の返済は財務活動。' },
        { q: 'PPE の帳簿価額は期首 $200,000、期末 $260,000。減価償却費 $30,000、売った資産の帳簿価額 $10,000、再評価による増加 $25,000。PPE の購入額は？', type: 'number', answer: 75000, unit: '$', explain: '$260,000 − $200,000 + $30,000 + $10,000 − $25,000 ＝ $75,000。検算: $200,000 + $75,000 + $25,000 − $30,000 − $10,000 ＝ $260,000。再評価を引き忘れると $100,000 になる。' },
        { q: 'A company made a loss of $2,000 on the disposal of equipment. How is this shown in a statement of cash flows prepared using the indirect method?', choices: ['Added back in operating activities, with the full sale proceeds in investing activities', 'Deducted in operating activities, with the full sale proceeds in investing activities', 'Shown as a $2,000 cash outflow in investing activities', 'Not shown anywhere'], answer: 0, explain: '売却損は現金の動きではないので、間接法では利益に足し戻す。売って入った現金は全額を投資活動に書く。損を投資CFの支払にするのは間違い。' },
        { q: 'Accumulated depreciation was $40,000 at the start of the year and $48,000 at the end. Assets with accumulated depreciation of $15,000 were disposed of. What was the depreciation charge for the year?', type: 'number', answer: 23000, unit: '$', explain: '$40,000 + 償却費 − $15,000 ＝ $48,000 なので、償却費は $23,000。差の $8,000 だけだと、売った資産の累計額を足し戻し忘れている。' }
      ]
    },
    {
      id: 'L144',
      no: 144,
      title: '財務CF（株式・借入・配当）',
      goal: '株式の発行、借入と返済、配当の支払を計算して、財務活動によるキャッシュフローを作れるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G5(e)iii', 'K1:F3(c)', 'K1:F3(d)'],
      slides: [
        {
          title: 'お金の出どころとのやりとり',
          paras: ['家を買うとき、親から300万円の援助をもらい、銀行で住宅ローンを借りた。その後は毎月ローンを返す。', 'これは「生活」（営業）でも「買い物」（投資）でもない。お金の出どころとのやりとり。会社ではこれを財務活動（financing activities）と呼ぶ。']
        },
        {
          title: '財務活動に入るもの',
          paras: ['株主と、お金を貸した人との間の現金の動きが財務活動。'],
          table: {
            head: ['項目', '向き'],
            rows: [
              ['Proceeds from issue of shares（株式発行による収入）', '入る'],
              ['Proceeds from loans / loan notes（借入による収入）', '入る'],
              ['Repayment of loans / loan notes（借入の返済）', '出る'],
              ['Dividends paid（配当の支払）', '出る']
            ]
          },
          note: { kind: 'tip', text: 'ACCA の標準の形では、利息の支払（interest paid）は営業活動、配当の支払は財務活動に入れる。IAS 7 は、利息の支払を財務活動に入れることも認めている。試験で計算書の形（proforma）が示されたら、その形に従う。' }
        },
        {
          title: '株式発行による収入',
          paras: ['株を発行して入った現金は、株式資本（share capital）と株式払込剰余金（share premium）に分けて記録されている。だから2つの合計の増加を見る。'],
          formula: '株式発行の収入 ＝（期末 SC ＋ SP）−（期首 SC ＋ SP）',
          note: { kind: 'warn', text: '無償増資（bonus issue）は現金が入らない。株式払込剰余金を使った無償増資なら合計は変わらないので、そのままでよい。利益剰余金を使った無償増資なら、その分を増加から引く。' }
        },
        {
          title: '例題: 株式発行による収入',
          example: {
            problem: '期首: 株式資本 $100,000、株式払込剰余金 $20,000。期末: 株式資本 $150,000、株式払込剰余金 $15,000。今年、株式払込剰余金を使って $20,000 の無償増資をした。株式発行による収入は？',
            steps: ['期首の合計: $100,000 ＋ $20,000 ＝ $120,000', '期末の合計: $150,000 ＋ $15,000 ＝ $165,000', '増加は $45,000', '無償増資は剰余金から株式資本へ移しただけ。合計は変わらないので、引くものはない', '中身: 株式資本の増加 $50,000 のうち $20,000 は無償、$30,000 は現金で発行した額面。それに剰余金 $15,000'],
            answer: '株式発行による収入は $45,000（額面 $30,000 ＋ 株式払込剰余金 $15,000）'
          }
        },
        {
          title: '借入と返済',
          paras: ['借入（loans、loan notes）は、期首と期末の残高の差を見る。増えていれば借りた（入る）、減っていれば返した（出る）。'],
          list: ['期首 $40,000 → 期末 $30,000: 返済 $10,000（出る）', '期首 $40,000 → 期末 $55,000: 借入 $15,000（入る）'],
          after: '1年以内に返す分が流動負債に分けて書かれていたら、流動と非流動を合計してから比べる。'
        },
        {
          title: '配当の支払は利益剰余金から逆算',
          paras: ['配当（dividends）の支払額が持分変動計算書（SOCE）に書いてあれば、それを使う。無ければ利益剰余金（retained earnings）の動きから逆算する。', 'ほかに利益剰余金が動く取引（利益剰余金を使った無償増資など）があれば、それも引いてから逆算する。'],
          formula: '配当 ＝ 期首利益剰余金 ＋ 当期利益 − 期末利益剰余金',
          example: {
            problem: '利益剰余金は期首 $60,000、期末 $73,000。当期利益（profit for the year、税引後）は $25,000。配当の支払は？',
            steps: ['期首 $60,000 ＋ 当期利益 $25,000 ＝ $85,000', 'ところが期末は $73,000', '$85,000 − $73,000 ＝ $12,000 が配当で出ていった'],
            answer: '配当の支払は $12,000'
          }
        },
        {
          title: '財務CFにまとめる',
          paras: ['ここまでの例をまとめる（借入は $40,000 → $30,000 で返済 $10,000）。'],
          table: {
            caption: 'Cash flows from financing activities',
            head: ['項目', '$'],
            rows: [
              ['Proceeds from issue of shares', '45,000'],
              ['Repayment of loan notes', '(10,000)'],
              ['Dividends paid', '(12,000)']
            ],
            total: ['Net cash from financing activities', '23,000']
          }
        },
        {
          title: 'なぜ？ 財務を分けて見る理由',
          paras: ['営業で稼いだ現金が足りないとき、会社は株や借金で補う。財務CFを分けて見ると、「この会社の現金は自分で稼いだのか、借りてきたのか」が分かる。', '営業CFが毎年マイナスで、それを借入のプラスで埋めている会社は、借金で回っているだけかもしれない。だから区分を分けて見せる。']
        },
        {
          title: 'よくある間違い',
          list: ['株式資本の増加だけを見て、株式払込剰余金を忘れる', '無償増資を現金での発行として数える', '配当の逆算に税引前利益を使う（使うのは当期利益＝税引後）'],
          note: { kind: 'warn', text: '形が示されていないのに、利息の支払を財務CFに書いてしまう。ACCA の標準の形では、利息の支払は営業活動に入れる（IAS 7 は財務活動に入れることも認めている）。財務CFに入るのは配当の支払。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['財務CF＝株主と貸し手との現金のやりとり（株の発行、借入と返済、配当の支払）', '株式発行の収入＝株式資本と株式払込剰余金の合計の増加（無償増資は現金ゼロ）', '配当＝期首利益剰余金＋当期利益−期末利益剰余金']
        },
        {
          title: '英単語',
          words: [
            ['financing activities', 'ファイナンシング アクティビティーズ', '財務活動'],
            ['proceeds from issue of shares', '', '株式発行による収入'],
            ['repayment of borrowings', 'リペイメント', '借入の返済'],
            ['dividends paid', '', '配当の支払'],
            ['bonus issue', 'ボーナス イシュー', '無償増資（現金は入らない）'],
            ['retained earnings', 'リテインド アーニングズ', '利益剰余金'],
            ['net cash from financing activities', '', '財務活動によるキャッシュフロー（純額）']
          ]
        }
      ],
      quiz: [
        { q: 'Retained earnings were $80,000 at the start of the year and $98,000 at the end. Profit for the year was $30,000. What dividends were paid in the year?', type: 'number', answer: 12000, unit: '$', explain: '$80,000 + $30,000 − $98,000 ＝ $12,000。期首と期末の差 $18,000 を答えにするのはよくある間違い。利益の分だけ増えるはずが $12,000 足りない、その分が配当。' },
        { q: 'Share capital increased from $50,000 to $70,000 and share premium increased from $10,000 to $18,000. There was no bonus issue. What were the proceeds from the issue of shares?', choices: ['$20,000', '$28,000', '$8,000', '$88,000'], answer: 1, explain: '($70,000 + $18,000) − ($50,000 + $10,000) ＝ $28,000。$20,000 は株式資本だけ、$8,000 は剰余金だけを見た間違い。' },
        { q: '財務活動によるキャッシュフロー（ACCA の標準の形）に入らないものは？', choices: ['株主割当増資（rights issue）による収入', '社債（loan notes）の返済', '配当の支払', '利息の支払'], answer: 3, explain: '利息の支払は営業活動に入れる。株主割当増資は現金で株を発行するので、財務活動の入金になる。' },
        { q: '借入金は期首に非流動 $50,000・流動 $10,000、期末に非流動 $45,000・流動 $10,000。財務CFの借入の行は？', choices: ['返済 $5,000（出る）', '返済 $15,000（出る）', '借入 $5,000（入る）', '動きなし'], answer: 0, explain: '合計で比べる。期首 $60,000 → 期末 $55,000 なので、返済 $5,000。' },
        { q: 'A company made a bonus issue of $10,000 using retained earnings. Share capital increased from $40,000 to $65,000 and share premium increased from $5,000 to $12,000. What were the cash proceeds from the issue of shares?', choices: ['$32,000', '$22,000', '$25,000', '$15,000'], answer: 1, explain: '合計の増加 ($65,000 + $12,000) − ($40,000 + $5,000) ＝ $32,000。そのうち $10,000 は利益剰余金を使った無償増資で現金ゼロなので、$32,000 − $10,000 ＝ $22,000。' },
        { q: '営業CFが3年続けてマイナスで、毎年の借入で現金を保っている会社。読み取れることは？', choices: ['自分で稼いだ現金で事業が回っている', '借りたお金で現金不足を埋めている', '固定資産をたくさん売っている', '株主にたくさん配当を払っている'], answer: 1, explain: '営業で現金を生めず、財務（借入）のプラスで埋めている。区分を分けて見ると、こうした危うさが分かる。' }
      ]
    },
    {
      id: 'L145',
      no: 145,
      title: 'CF計算書を作る（総合）',
      goal: '財政状態計算書2期分と損益計算書から、間接法のキャッシュフロー計算書を1枚完成させられるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['G5(f)', 'K1:F3(d)'],
      slides: [
        {
          title: '1年分の家計を3つに分けて振り返る',
          paras: ['1年の終わりに、口座の残高が12万円から4.5万円に減っていた。何にお金が動いたのかを3つに分けて振り返る。'],
          list: ['生活（給料と生活費）→ 営業', '買い物（車や家電の購入・売却）→ 投資', '借りた・返した・親からの援助 → 財務'],
          after: '3つを足すと、残高の変化（−7.5万円）にぴったり一致する。キャッシュフロー計算書（statement of cash flows）は、これを会社でやったもの。営業 → 投資 → 財務の順に作り、最後に現金の増減と照らし合わせる。'
        },
        {
          title: '「現金」の範囲と当座借越',
          paras: ['ここでの「現金」は、現金及び現金同等物（cash and cash equivalents）。現金と預金に、すぐ現金にできて値動きの小さい短期の投資（ふつう満期まで3か月以内）を足したもの。', '総合口座は、残高が足りないと自動で貸してくれて、通帳がマイナスになる。会社の当座借越（bank overdraft）も同じ「マイナスの預金」で、日々の資金繰りの一部。だから求めればすぐ返す（repayable on demand）当座借越は、現金及び現金同等物から必ず差し引く（L140）。'],
          formula: '現金及び現金同等物 ＝ 現金・預金 ＋ 現金同等物 − 当座借越',
          note: { kind: 'warn', text: '当座借越の増減を、財務CFの借入や返済に書かない。差し引くのは CF計算書の中だけで、財政状態計算書では預金と当座借越を別々に載せる。' }
        },
        {
          title: '問題: Tako Co の財政状態計算書',
          table: {
            caption: '12月31日現在',
            head: ['項目', '20X5 $', '20X4 $'],
            rows: [
              ['PPE（帳簿価額）', '130,000', '100,000'],
              ['Inventory', '22,000', '18,000'],
              ['Trade receivables', '25,000', '28,000'],
              ['Cash at bank', '6,500', '13,000'],
              ['Share capital', '60,000', '50,000'],
              ['Share premium', '15,000', '10,000'],
              ['Retained earnings', '50,500', '36,500'],
              ['Loan notes', '30,000', '40,000'],
              ['Trade payables', '16,000', '14,000'],
              ['Interest payable', '1,000', '500'],
              ['Tax payable', '9,000', '7,000'],
              ['Bank overdraft', '2,000', '1,000']
            ]
          },
          after: '上の4行が資産、下の8行が資本と負債。どちらの年も合計は一致する（20X5 $183,500、20X4 $159,000）。当座借越は求めればすぐ返す約束。'
        },
        {
          title: '問題: 損益計算書と追加情報',
          table: {
            caption: '20X5年の損益計算書',
            head: ['項目', '$'],
            rows: [
              ['Revenue', '200,000'],
              ['Cost of sales', '(120,000)'],
              ['Operating expenses', '(44,000)'],
              ['Finance costs', '(4,000)'],
              ['Profit before tax', '32,000'],
              ['Income tax expense', '(8,000)']
            ],
            total: ['Profit for the year', '24,000']
          },
          after: '営業費用には減価償却費 $15,000 と、設備の売却損 $2,000 が入っている。売った設備の帳簿価額は $6,000。法人税費用 $8,000 は、今年の見積もり $9,000 から前期の過大計上 $1,000 を引いた額。配当は払ったが、金額は書かれていない。'
        },
        {
          title: '例題①: 営業CF（間接法）',
          formula: '利息・税金の支払 ＝ 期首の未払 ＋ 今年の費用 − 期末の未払',
          example: {
            problem: 'Tako Co の営業活動によるキャッシュフローを間接法で作る。',
            steps: ['税引前利益 $32,000 からスタート', '現金が動かない費用を足し戻す: 減価償却費 ＋$15,000、売却損 ＋$2,000', '財務費用 ＋$4,000 も足し戻す（実際に払った利息を下で別に引くため）。ここまでで $53,000', '在庫の増加 −$4,000、売掛金の減少 ＋$3,000、買掛金の増加 ＋$2,000 → 営業から生じた現金 $54,000', '利息の支払: $500 ＋ $4,000 − $1,000 ＝ $3,500（ACCA の標準の形では営業活動に入れる。IAS 7 は、利息の支払を財務活動に入れることも認めている）', '税金の支払: $7,000 ＋ $8,000 − $9,000 ＝ $6,000（費用は過大計上を引いた後の $8,000 をそのまま使う）'],
            answer: '$54,000 − $3,500 − $6,000 ＝ 営業CF $44,500'
          },
          note: { kind: 'warn', text: '当期利益（税引後 $24,000）から始めない。スタートは税引前利益。税金は「実際に払った額」を下で引く。' }
        },
        {
          title: '税金の支払は「費用の合計」で逆算する',
          paras: ['損益計算書の法人税費用（income tax expense）には、前期の過少計上（under-provision）や過大計上（over-provision）の調整が入っている（L128）。支払の逆算には、この費用の合計をそのまま使う。'],
          example: {
            problem: '未払法人税は期首 $7,000、期末 $8,000（今年の見積もり）。法人税費用は $8,500 で、前期の過少計上 $500 を含む。今年払った税金は？',
            steps: ['費用は合計の $8,500 を使う（過少計上 $500 を外さない）', '$7,000 ＋ $8,500 − $8,000 ＝ $7,500', '中身: 去年の税金を $7,000 と見積もったが、実際は $500 多い $7,500 を今年払った'],
            answer: '税金の支払は $7,500。今年の見積もり $8,000 だけで計算すると $7,000 になり、$500 ずれる'
          },
          tAccount: { name: 'Tax payable', debit: [['Cash paid（逆算）', '7,500']], credit: [['Balance b/d', '7,000'], ['SPL tax charge', '8,500']], balance: { side: 'debit', label: 'Balance c/d', amount: '8,000' } }
        },
        {
          title: '例題②: 投資CFと財務CF',
          example: {
            problem: 'Tako Co の投資活動と財務活動のキャッシュフローを作る。',
            steps: ['売却収入: 帳簿価額 $6,000 − 売却損 $2,000 ＝ $4,000', 'PPE の購入: $130,000 − $100,000 ＋ 償却 $15,000 ＋ 売却分 $6,000 ＝ $51,000', '投資CF: −$51,000 ＋ $4,000 ＝ −$47,000', '株式発行: （$60,000 ＋ $15,000）−（$50,000 ＋ $10,000）＝ $15,000', '社債の返済: $40,000 − $30,000 ＝ $10,000', '配当: $36,500 ＋ $24,000 − $50,500 ＝ $10,000'],
            answer: '投資CF −$47,000、財務CF $15,000 − $10,000 − $10,000 ＝ −$5,000'
          }
        },
        {
          title: '完成形①: 営業活動',
          table: {
            caption: 'Tako Co: Statement of cash flows for the year ended 31 December 20X5',
            head: ['Cash flows from operating activities', '$'],
            rows: [
              ['Profit before tax', '32,000'],
              ['Depreciation', '15,000'],
              ['Loss on disposal of PPE', '2,000'],
              ['Finance costs', '4,000'],
              ['Increase in inventory', '(4,000)'],
              ['Decrease in trade receivables', '3,000'],
              ['Increase in trade payables', '2,000'],
              ['Cash generated from operations', '54,000'],
              ['Interest paid', '(3,500)'],
              ['Income taxes paid', '(6,000)']
            ],
            total: ['Net cash from operating activities', '44,500']
          }
        },
        {
          title: '完成形②: 投資・財務と現金の照合',
          table: {
            head: ['項目', '$'],
            rows: [
              ['Net cash from operating activities', '44,500'],
              ['Purchase of property, plant and equipment', '(51,000)'],
              ['Proceeds from sale of PPE', '4,000'],
              ['Net cash used in investing activities', '(47,000)'],
              ['Proceeds from issue of shares', '15,000'],
              ['Repayment of loan notes', '(10,000)'],
              ['Dividends paid', '(10,000)'],
              ['Net cash used in financing activities', '(5,000)'],
              ['Net decrease in cash and cash equivalents', '(7,500)'],
              ['Cash and cash equivalents at 1 January 20X5', '12,000']
            ],
            total: ['Cash and cash equivalents at 31 December 20X5', '4,500']
          },
          after: '照合: 期首 $12,000 ＝ 預金 $13,000 − 当座借越 $1,000。期末 $4,500 ＝ 預金 $6,500 − 当座借越 $2,000。どちらも財政状態計算書と一致する。これで完成。'
        },
        {
          title: 'なぜ？ 最後に現金と照らし合わせる',
          paras: ['3つの区分の合計は、期首から期末までの現金の増減と必ず一致する。だから最後に財政状態計算書の現金と比べれば、答え合わせができる。合わなければ、どこかで＋と−が逆か、足し忘れがある。'],
          svg: `<svg viewBox="0 0 440 312" role="img" aria-label="営業、投資、財務の合計が現金の増減になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">3つを足すと、現金の増減になる</text><rect x="20" y="52" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" fill="var(--ink)">営業活動</text><text x="120" y="80" font-size="12.5" fill="var(--quiet)">operating</text><text x="400" y="81" text-anchor="end" font-size="17" font-weight="600" fill="var(--ink)">+44,500</text><rect x="20" y="104" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="132" font-size="16" fill="var(--ink)">投資活動</text><text x="120" y="132" font-size="12.5" fill="var(--quiet)">investing</text><text x="400" y="133" text-anchor="end" font-size="17" font-weight="600" fill="var(--ink)">−47,000</text><rect x="20" y="156" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="184" font-size="16" fill="var(--ink)">財務活動</text><text x="120" y="184" font-size="12.5" fill="var(--quiet)">financing</text><text x="400" y="185" text-anchor="end" font-size="17" font-weight="600" fill="var(--ink)">−5,000</text><path d="M20 214L420 214" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="226" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="254" font-size="16" font-weight="600" fill="var(--ink)">現金の増減</text><text x="400" y="255" text-anchor="end" font-size="17" font-weight="600" fill="var(--ink)">−7,500</text><text x="220" y="298" text-anchor="middle" font-size="15" fill="var(--ink)">期首 12,000 − 7,500 ＝ 期末 4,500</text></svg>`,
          note: { kind: 'tip', text: '利益は $24,000 出たのに、現金は $7,500 減った。利益と現金は別物。設備の購入と返済・配当に現金を使ったから。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['順番は 営業（税引前利益から間接法）→ 投資 → 財務 → 期首の現金に足して期末と照合', '利息・税金の支払＝期首の未払＋損益計算書の費用（前期の過少・過大計上を含む）−期末の未払', '現金及び現金同等物は、すぐ返す当座借越を差し引いた額。当座借越は財務CFに書かない']
        },
        {
          title: '英単語',
          words: [
            ['statement of cash flows', '', 'キャッシュフロー計算書'],
            ['cash and cash equivalents', 'キャッシュ イクイバレンツ', '現金及び現金同等物'],
            ['bank overdraft', 'オーバードラフト', '当座借越（すぐ返すものは現金から差し引く）'],
            ['repayable on demand', 'リペイアブル オン ディマンド', '求められたらすぐ返す'],
            ['under-provision / over-provision', '', '前期の過少計上 / 過大計上（法人税費用に入っている）'],
            ['profit before tax', '', '税引前利益（間接法のスタート）'],
            ['interest paid / income taxes paid', '', '利息の支払 / 法人税の支払'],
            ['net increase / decrease in cash', '', '現金の純増加 / 純減少']
          ]
        }
      ],
      quiz: [
        { q: 'Profit before tax was $50,000 and depreciation was $8,000. Inventory increased by $3,000, trade receivables decreased by $2,000 and trade payables decreased by $1,000. There was no interest. What was the cash generated from operations?', choices: ['$40,000', '$52,000', '$56,000', '$60,000'], answer: 2, explain: '$50,000 + $8,000 − $3,000 + $2,000 − $1,000 ＝ $56,000。売掛金の減少は回収が進んだので足す。$52,000 は売掛金の向きが逆、$60,000 は運転資本の向きが全部逆、$40,000 は減価償却費を引いてしまった。' },
        { q: 'Tax payable was $12,000 at the start of the year and $15,000 at the end (the estimate for the current year). The income tax expense in the statement of profit or loss was $14,000, after deducting an over-provision of $1,000 for the previous year. How much tax was paid in the year?', type: 'number', answer: 11000, unit: '$', explain: '$12,000 + $14,000 − $15,000 ＝ $11,000。費用は過大計上を引いた後の $14,000 をそのまま使う。去年の負債 $12,000 を、$1,000 少ない $11,000 で払い終えた。見積もりの $15,000 を費用に使うと $12,000、過大計上をもう一度引くと $10,000 になる。' },
        { q: 'At 31 December a company had cash at bank of $9,000, a short-term deposit of $3,000 maturing in two months, and a bank overdraft of $2,500 that is repayable on demand. What were its cash and cash equivalents?', type: 'number', answer: 9500, unit: '$', explain: '$9,000 + $3,000 − $2,500 ＝ $9,500。すぐ返す当座借越は差し引く。当座借越を無視すると $12,000、足してしまうと $14,500。2か月で満期の預金は現金同等物に入る。' },
        { q: 'Which of the following is correctly classified, using the standard ACCA format for a statement of cash flows?', choices: ['Interest received - financing activities', 'Dividends paid - financing activities', 'Purchase of intangible assets - operating activities', 'Increase in a bank overdraft repayable on demand - financing activities'], answer: 1, explain: '配当の支払は財務活動。受取利息と無形資産の購入は投資活動。すぐ返す当座借越は現金及び現金同等物の中で差し引くので、増えても財務活動の借入には書かない。' },
        { q: 'Tako Co（売上 $200,000、売掛金 期首 $28,000・期末 $25,000）を直接法で計算すると、顧客からの入金はいくら？', type: 'number', answer: 203000, unit: '$', explain: '$28,000 + $200,000 − $25,000 ＝ $203,000。仕入先への支払は 仕入 $124,000（$120,000 + $22,000 − $18,000）から $14,000 + $124,000 − $16,000 ＝ $122,000。費用の支払は $44,000 − $15,000 − $2,000 ＝ $27,000。$203,000 − $122,000 − $27,000 ＝ $54,000 で、間接法と同じになる。' },
        { q: 'Which of the following would be added to profit before tax when calculating cash generated from operations using the indirect method?', choices: ['Profit on disposal of PPE', 'Increase in trade receivables', 'Decrease in inventory', 'Increase in prepayments'], answer: 2, explain: '在庫が減った＝買わずに手持ちを売ったので、現金は利益より多い。だから足す。売却益は引く。売掛金と前払費用の増加は、現金が出ていった（または入っていない）ので引く。' }
      ]
    }
  ],
  cards: [
    { id: 'L142-1', lesson: 'L142', q: '直接法とは？', a: '営業活動の現金の出入り（入金と支払）を項目ごとにそのまま並べる方法' },
    { id: 'L142-2', lesson: 'L142', q: '顧客からの入金の式は？', a: '期首売掛金＋売上−（貸倒れ）−期末売掛金' },
    { id: 'L142-3', lesson: 'L142', q: '仕入先への支払を出す2段階は？', a: '①仕入＝売上原価＋期末在庫−期首在庫 ②支払＝期首買掛金＋仕入−期末買掛金' },
    { id: 'L142-4', lesson: 'L142', q: 'なぜ直接法と間接法の答えは同じ？', a: '同じ1年の現金の動きを、入出金の側と利益の側から見ているだけだから' },
    { id: 'L142-5', lesson: 'L142', q: 'IAS 7 がすすめる方法と、実務で多い方法は？', a: 'すすめるのは直接法。実務で多いのは間接法' },
    { id: 'L142-6', lesson: 'L142', q: '直接法で減価償却費はどう扱う？', a: '何も書かない。現金が出ていないので支払に入れない' },
    { id: 'L143-1', lesson: 'L143', q: '投資活動に入る主なものは？', a: 'PPE・無形資産の購入、PPE の売却収入、受取利息、受取配当' },
    { id: 'L143-2', lesson: 'L143', q: '売却収入の式は？', a: '帳簿価額（原価−累計額）＋売却益（売却損なら引く）' },
    { id: 'L143-3', lesson: 'L143', q: 'PPE の購入額の逆算（帳簿価額）は？', a: '期首＋購入＋再評価−減価償却−売却分の帳簿価額＝期末' },
    { id: 'L143-4', lesson: 'L143', q: 'なぜ再評価の増加は購入額から除く？', a: '帳簿上の値打ちが上がっただけで、現金を使っていないから' },
    { id: 'L143-5', lesson: 'L143', q: '購入と売却は1行にまとめてよい？', a: 'いいえ。購入（出る）と売却収入（入る）は別々の行に書く' },
    { id: 'L144-1', lesson: 'L144', q: '財務活動に入る主なものは？', a: '株式発行の収入、借入の収入と返済、配当の支払' },
    { id: 'L144-2', lesson: 'L144', q: '株式発行による収入の出し方は？', a: '株式資本＋株式払込剰余金の合計の増加。無償増資は現金ゼロ' },
    { id: 'L144-3', lesson: 'L144', q: '配当の支払の逆算は？', a: '期首利益剰余金＋当期利益−期末利益剰余金' },
    { id: 'L144-4', lesson: 'L144', q: 'ACCA の標準の形で、利息の支払と配当の支払はどこ？', a: '利息の支払は営業CF（IAS 7 は財務CFも認める）、配当の支払は財務CF' },
    { id: 'L144-5', lesson: 'L144', q: '借入の増減を見るときの注意は？', a: '流動と非流動に分かれていたら、合計してから比べる' },
    { id: 'L145-1', lesson: 'L145', q: 'CF計算書を作る順番は？', a: '営業（間接法）→投資→財務→期首の現金に足して期末と照合' },
    { id: 'L145-2', lesson: 'L145', q: '税金・利息の支払の逆算は？', a: '期首の未払＋損益計算書の費用（税金は前期の過少・過大計上を含む）−期末の未払' },
    { id: 'L145-3', lesson: 'L145', q: '間接法で財務費用を足し戻す理由は？', a: '実際に払った利息を下で別に引くから。足し戻さないと二重に引く' },
    { id: 'L145-4', lesson: 'L145', q: '現金及び現金同等物とは？当座借越は？', a: '現金・預金＋満期3か月以内などの短期投資。すぐ返す当座借越は差し引く' },
    { id: 'L145-5', lesson: 'L145', q: '3区分の合計は何と一致する？', a: '期首から期末までの現金及び現金同等物の増減' },
    { id: 'L145-6', lesson: 'L145', q: '間接法のスタートは？', a: '税引前利益（profit before tax）。当期利益（税引後）ではない' },
    { id: 'L145-7', lesson: 'L145', q: '税金の支払の逆算で、前期の過少・過大計上は？', a: '外さない。損益計算書の法人税費用（調整後の合計）をそのまま使う' }
  ]
});
