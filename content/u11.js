(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 11,
  part: 6,
  partTitle: '有形固定資産と減価償却',
  lessons: [
    // ---------------------------------------------------------------- L52
    {
      id: 'L52',
      no: 52,
      title: '下取り（part exchange）',
      goal: '古い資産を下取りに出して新しい資産を買ったときの、売却損益と新しい資産の取得原価を計算して記帳できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D4(f)'],
      slides: [
        {
          title: 'スマホの下取りで考える',
          paras: ['新しいスマホは15万円。古いスマホを下取りに出すと3万円引いてもらえて、払う現金は12万円になる。', 'でも、手に入れたスマホの値段は15万円のまま。古いスマホは「3万円で売って、そのお金を代金にあてた」のと同じ。']
        },
        {
          title: '2つの取引が同時に起きている',
          paras: ['下取りを英語で part exchange（パートエクスチェンジ）という。trade-in とも言う。下取りで引いてもらえる金額が、下取り額（part-exchange allowance）。', '下取りは、次の2つを一度にやっている。'],
          numbered: ['古い資産を売る。売れた金額（proceeds）＝下取り額', '新しい資産を買う。取得原価（cost）＝現金で払った額＋下取り額'],
          formula: 'new asset cost ＝ cash paid ＋ part-exchange allowance'
        },
        {
          title: 'たこ焼き屋の配達用の車',
          paras: ['古い車: 取得原価 $15,000、減価償却累計額 $9,000。帳簿価額（carrying amount）は $6,000。', '新しい車の価格は $20,000。古い車の下取り額は $5,000 で、残り $15,000 を現金で払った。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="新しい車の価格は現金と下取り額の合計" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">新しい車 $20,000 の払い方</text><rect x="20" y="56" width="150" height="200" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="95" y="140" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">新しい車</text><text x="95" y="168" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">$20,000</text><text x="95" y="192" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cost</text><text x="192" y="164" text-anchor="middle" font-size="22" font-weight="600" fill="var(--ink)">＝</text><rect x="214" y="56" width="206" height="120" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="317" y="104" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">現金で払う</text><text x="317" y="128" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$15,000</text><text x="317" y="150" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cash paid</text><rect x="214" y="184" width="206" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="317" y="214" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">下取り額 $5,000</text><text x="317" y="238" text-anchor="middle" font-size="12.5" fill="var(--quiet)">part-exchange allowance</text><text x="20" y="286" fill="var(--ink)">古い車は $5,000 で売ったのと同じ</text></svg>`,
          caption: '新しい車は、現金と下取り額を合わせた $20,000 で記録する。'
        },
        {
          title: '仕訳①: 古い車を帳簿から外す',
          paras: ['前のレッスンで学んだ売却勘定（disposal account）に、古い車の取得原価と減価償却累計額を移す。'],
          journal: [
            { side: 'Dr', account: 'Disposal account（売却勘定）', amount: '15,000' },
            { side: 'Cr', account: 'Motor vehicles – cost（車両・取得原価）', amount: '15,000' },
            { side: 'Dr', account: 'Motor vehicles – accumulated depreciation（減価償却累計額）', amount: '9,000' },
            { side: 'Cr', account: 'Disposal account', amount: '9,000' }
          ]
        },
        {
          title: '仕訳②: 新しい車を買う',
          paras: ['新しい車は定価の $20,000 で借方に入れる。貸方は2つに分かれる。現金で払った $15,000 と、下取り額の $5,000。', '下取り額の貸方は売却勘定に入れる。これが古い車の「売れた金額」になる。'],
          journal: [
            { side: 'Dr', account: 'Motor vehicles – cost（新しい車）', amount: '20,000' },
            { side: 'Cr', account: 'Cash（現金）', amount: '15,000' },
            { side: 'Cr', account: 'Disposal account（下取り額）', amount: '5,000' }
          ]
        },
        {
          title: '売却勘定で損益が分かる',
          paras: ['借方は $15,000、貸方は $9,000＋$5,000＝$14,000。足りない $1,000 が売却損（loss on disposal）で、損益計算書に費用として入る。'],
          tAccount: { name: 'Disposal account', debit: [['Motor vehicles – cost', '15,000']], credit: [['Accumulated depreciation', '9,000'], ['Part-exchange allowance', '5,000']], balance: { side: 'credit', label: 'Loss on disposal (SPL)', amount: '1,000' } },
          formula: 'gain or loss ＝ allowance − carrying amount（$5,000 − $6,000 ＝ $1,000 の損）'
        },
        {
          title: '例題',
          example: {
            problem: '古い機械: 取得原価 $40,000、減価償却累計額 $28,000。新しい機械の価格は $50,000。仕入先は古い機械を $10,000 で下取りし、残りを現金で払った。売却損益と、新しい機械の取得原価は？',
            steps: ['古い機械の帳簿価額: $40,000 − $28,000 ＝ $12,000', '売れた金額（proceeds）＝下取り額 $10,000', '売却損益: $10,000 − $12,000 ＝ −$2,000（売却損）', '現金で払った額: $50,000 − $10,000 ＝ $40,000', '新しい機械の取得原価: $40,000 ＋ $10,000 ＝ $50,000'],
            answer: '売却損 $2,000（損益計算書の費用）。新しい機械は $50,000 で記録する。'
          }
        },
        {
          title: 'なぜ？ 定価で記録する理由',
          paras: ['新しい車は、本当に $20,000 の価値がある車だから。現金分の $15,000 だけで記録すると、資産が小さく見えて、毎年の減価償却費も小さくなってしまう。', 'また、古い車を $5,000 で「売った」事実が消えて、$1,000 の売却損が見えなくなる。2つの取引に分けて記録すると、どちらも正しく見える。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '新しい資産を、現金で払った額だけ（$15,000）で記録してしまう。取得原価は「現金＋下取り額」。問題文が「定価（list price）」をくれるか「現金で払った額（cash paid）」をくれるかを読み分けて、足りない方を計算する。下取り額を新しい資産の値引きだと考えないこと。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['下取り＝古い資産の売却＋新しい資産の購入', '古い資産の売れた金額＝下取り額', '新しい資産の取得原価＝現金で払った額＋下取り額']
        },
        {
          title: '英単語',
          words: [
            ['part exchange', 'パートエクスチェンジ', '下取り'],
            ['part-exchange allowance', 'アラウアンス', '下取り額'],
            ['trade-in', 'トレードイン', '下取り（part exchange と同じ）'],
            ['disposal account', 'ディスポーザル', '売却勘定'],
            ['proceeds', 'プロシーズ', '売れた金額'],
            ['list price', 'リストプライス', '定価'],
            ['loss on disposal', '', '売却損']
          ]
        }
      ],
      quiz: [
        { q: '下取りのとき、古い資産の「売れた金額（proceeds）」として扱うのは？', choices: ['下取り額', '現金で払った額', '新しい資産の定価', '古い資産の帳簿価額'], answer: 0, explain: '古い資産は下取り額で売ったのと同じ。現金で払った額は新しい資産の代金の一部で、古い資産の売却とは関係ない。' },
        { q: 'A business part-exchanged an old van (cost $18,000, accumulated depreciation $11,000) for a new van with a list price of $25,000. It paid $19,000 in cash. What was the profit or loss on disposal of the old van?', choices: ['$1,000 loss', '$1,000 profit', '$6,000 profit', '$7,000 loss'], answer: 0, explain: '下取り額は $25,000 − $19,000 ＝ $6,000。帳簿価額は $18,000 − $11,000 ＝ $7,000。$6,000 − $7,000 ＝ $1,000 の損。$6,000 profit は下取り額を全部もうけと考えた間違い。$7,000 loss は下取り額を忘れた間違い。' },
        { q: 'In the question above, at what amount should the new van be recorded in the motor vehicles cost account?', choices: ['$25,000', '$19,000', '$31,000', '$18,000'], answer: 0, explain: '現金 $19,000 ＋下取り額 $6,000 ＝ $25,000（定価）。$19,000 は現金分だけで記録した間違い。$31,000 は定価に下取り額をもう一度足した間違い。' },
        { q: '古い機械: 取得原価 $30,000、減価償却累計額 $21,000。新しい機械（価格 $45,000）を買い、古い機械の下取り額は $12,000、残りは現金で払った。古い機械の売却益はいくら？', type: 'number', answer: 3000, unit: '$', explain: '帳簿価額は $30,000 − $21,000 ＝ $9,000。下取り額 $12,000 − $9,000 ＝ $3,000 の売却益。現金で払った $33,000 は売却益の計算には使わない。' },
        { q: '新しい車（$20,000）を、現金 $15,000 と下取り額 $5,000 で買った。下取り額 $5,000 の貸方はどの勘定？', choices: ['Disposal account（売却勘定）', 'Cash（現金）', '損益計算書の収益', 'Accumulated depreciation（減価償却累計額）'], answer: 0, explain: 'Dr 新しい車 $20,000 / Cr 現金 $15,000、Cr 売却勘定 $5,000。下取り額は古い車の「売れた金額」なので売却勘定に入れ、そこで損益を出す。いきなり収益にはしない。' }
      ]
    },
    // ---------------------------------------------------------------- L53
    {
      id: 'L53',
      no: 53,
      title: '再評価の記帳と OCI での表示',
      goal: '有形固定資産を再評価したときの再評価剰余金を計算し、仕訳と財務諸表での表示ができるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D4(g)'],
      slides: [
        {
          title: '値上がりした家で考える',
          paras: ['10年前に3,000万円で買った家が、今は4,000万円で売れると言われた。なんだかお金持ちになった気分。', 'でも、まだ売っていない。給料のように使えるお金は、1円も入ってきていない。', 'だから会計では、この値上がり分を「もうけ（利益）」とは別の場所に記録する。']
        },
        {
          title: '原価モデルと再評価モデル',
          paras: ['有形固定資産のルール（IAS 16）では、記録のしかたを2つから選べる。'],
          list: ['原価モデル（cost model）: 取得原価 − 減価償却累計額。今までのレッスンはこれ', '再評価モデル（revaluation model）: 公正価値（fair value）に書き直す。公正価値は「その日に売ったらいくらになるか」'],
          after: '再評価モデルを選んだら、同じ種類（class）の資産はまとめて全部再評価する。好きな建物だけ選ぶのはだめ。また、価値が大きくずれないように定期的に見直す。'
        },
        {
          title: 'たこ焼き屋の店舗の建物',
          paras: ['建物: 取得原価 $500,000、減価償却累計額 $100,000。帳簿価額は $400,000。', '1 Jan 20X5 に専門家が $650,000 と評価した。帳簿価額より $250,000 高い。この $250,000 が再評価剰余金（revaluation surplus）になる。'],
          formula: 'revaluation surplus ＝ fair value − carrying amount'
        },
        {
          title: '再評価の仕訳',
          paras: ['帳簿価額を $400,000 から $650,000 にする。やり方は、①減価償却累計額をゼロに戻し、②建物の勘定を $500,000 から $650,000 に書き直す。増えた合計 $250,000 を再評価剰余金に入れる。'],
          journal: [
            { side: 'Dr', account: 'Buildings – accumulated depreciation（累計額を全部消す）', amount: '100,000' },
            { side: 'Dr', account: 'Buildings – cost/valuation（500,000→650,000）', amount: '150,000' },
            { side: 'Cr', account: 'Revaluation surplus（再評価剰余金）', amount: '250,000' }
          ]
        },
        {
          title: '値上がり分の行き先',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="値上がり分は利益ではなくその他の包括利益と再評価剰余金に入る" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">値上がり分はどこへ行く？</text><rect x="110" y="52" width="220" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">値上がり分 $250,000</text><text x="220" y="102" text-anchor="middle" font-size="12.5" fill="var(--quiet)">revaluation gain</text><path d="M180 116L110 166" stroke="var(--edge)" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><path d="M260 116L330 166" stroke="var(--ink)" stroke-width="1.5" fill="none"/><path d="M322 160L334 170L336 156z" fill="var(--ink)"/><rect x="20" y="170" width="180" height="104" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="204" text-anchor="middle" font-size="15" font-weight="600" fill="var(--quiet)">利益（SPL）</text><text x="110" y="230" text-anchor="middle" font-size="15" fill="var(--quiet)">には入れない</text><text x="110" y="258" text-anchor="middle" font-size="12.5" fill="var(--quiet)">not profit</text><rect x="240" y="170" width="180" height="104" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="330" y="200" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">その他の包括利益</text><text x="330" y="222" text-anchor="middle" font-size="12.5" fill="var(--ink)">OCI</text><text x="330" y="252" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">→ 再評価剰余金</text><text x="220" y="310" text-anchor="middle" fill="var(--ink)">資産と資本が同じだけ増える</text></svg>`,
          caption: '再評価剰余金は資本（equity）の一部。資産が $250,000 増え、資本も $250,000 増えるので、資産＝資本＋負債 はそのまま成り立つ。'
        },
        {
          title: '財務諸表ではこう見える',
          paras: ['損益計算書の下に「その他の包括利益（other comprehensive income, OCI）」の部分を足した表を、損益及びその他の包括利益計算書（SPLOCI）という。値上がり分は、利益より下の OCI に載る。'],
          table: { caption: '20X5年の表示', head: ['どこに', '何を', '$'], rows: [['SPLOCI の OCI', 'Gain on revaluation', '250,000'], ['SFP の非流動資産', 'Buildings at valuation', '650,000'], ['SFP の資本', 'Revaluation surplus', '250,000']] },
          after: '持分変動計算書（SOCE）にも、再評価剰余金が $250,000 増えた動きとして出る。'
        },
        {
          title: 'なぜ？ 利益に入れない理由',
          paras: ['まだ売っていないから。値上がりは「紙の上」のもので、お金は入ってきていない。このようなもうけを、実現していない（unrealised）という。', '利益に入れると、そのお金を引出しや配当に使えると誤解される。でも資産の今の価値は見せたい。だから、利益とは別の資本の箱（再評価剰余金）に入れる。']
        },
        {
          title: '例題: 価値が下がったら',
          example: {
            problem: '土地（取得原価 $200,000）を去年 $260,000 に再評価し、再評価剰余金が $60,000 ある。今年、公正価値が (a) $230,000、(b) $180,000 に下がった。それぞれの処理は？',
            steps: ['ルール: 下がった分は、まず同じ資産の再評価剰余金から減らす。足りない分は損益計算書の費用にする', '(a) 下がった分は $260,000 − $230,000 ＝ $30,000。剰余金 $60,000 で足りる', '(a) Dr 再評価剰余金 $30,000 / Cr 土地 $30,000。費用は $0', '(b) 下がった分は $260,000 − $180,000 ＝ $80,000。剰余金は $60,000 しかない', '(b) Dr 再評価剰余金 $60,000、Dr 費用（SPL） $20,000 / Cr 土地 $80,000'],
            answer: '(a) 剰余金を $30,000 減らすだけ。(b) 剰余金 $60,000 を全部消し、残り $20,000 を損益計算書の費用にする。'
          },
          note: { kind: 'tip', text: '剰余金から減らした分は、OCI にマイナスで載る。逆に、前に費用にした値下がりを取り戻す値上がりは、その金額までは SPL の収益に戻し、超えた分だけ OCI と剰余金に入れる。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '再評価剰余金を「公正価値 − 取得原価」で計算してしまう（$650,000 − $500,000 ＝ $150,000）。比べるのは帳簿価額（$400,000）なので正しくは $250,000。もう1つは、値上がり分を損益計算書の利益に入れること。値上がりは OCI と再評価剰余金へ。また、再評価の日の途中まで減価償却がある場合は、先にその分を計上してから帳簿価額を出す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['再評価剰余金＝公正価値 − その日の帳簿価額', '値上がり分は利益ではなく OCI と再評価剰余金（資本）へ', '値下がりは、まず同じ資産の剰余金から減らし、足りない分は費用']
        },
        {
          title: '英単語',
          words: [
            ['revaluation', 'リバリュエーション', '再評価'],
            ['revaluation surplus', 'サープラス', '再評価剰余金（資本の一部）'],
            ['fair value', 'フェアバリュー', '公正価値（今売ったらいくらか）'],
            ['revaluation model / cost model', '', '再評価モデル / 原価モデル'],
            ['other comprehensive income (OCI)', '', 'その他の包括利益'],
            ['unrealised', 'アンリアライズド', 'まだ実現していない（売っていない）'],
            ['class of assets', '', '資産の種類（まとめて再評価する単位）']
          ]
        }
      ],
      quiz: [
        { q: 'A building has a cost of $400,000 and accumulated depreciation of $80,000. It is revalued to $500,000. What is the revaluation surplus?', choices: ['$180,000', '$100,000', '$500,000', '$420,000'], answer: 0, explain: '帳簿価額は $400,000 − $80,000 ＝ $320,000。$500,000 − $320,000 ＝ $180,000。$100,000 は取得原価と比べた間違い。$420,000 は評価額から累計額を引いた間違い。' },
        { q: 'Where is a gain on the revaluation of a building reported in the financial statements?', choices: ['In other comprehensive income, and in the revaluation surplus in equity', 'As income in profit for the year', 'As a current liability', 'Only as a reduction of accumulated depreciation'], answer: 0, explain: '値上がりはまだ実現していないので、利益には入れない。SPLOCI の OCI に載り、SFP では資本の再評価剰余金になる。' },
        { q: '機械: 取得原価 $80,000、減価償却累計額 $32,000。公正価値 $60,000 に再評価した。再評価剰余金はいくら？', type: 'number', answer: 12000, unit: '$', explain: '帳簿価額は $80,000 − $32,000 ＝ $48,000。$60,000 − $48,000 ＝ $12,000。取得原価 $80,000 と比べると「下がった」ように見えるが、比べるのは帳簿価額。' },
        { q: '上の機械（取得原価 $80,000 → 評価額 $60,000）の再評価の仕訳で、機械の取得原価の勘定はどう動く？', choices: ['貸方に $20,000（$80,000 から $60,000 に下げる）', '借方に $12,000', '借方に $60,000', '動かない'], answer: 0, explain: '仕訳は Dr 累計額 $32,000 / Cr 機械 $20,000、Cr 再評価剰余金 $12,000。勘定を評価額 $60,000 に合わせるので、$20,000 減る。剰余金があっても資産の勘定が減ることはある。' },
        { q: '会社が持っている建物のうち1つを再評価することにした。IAS 16 のルールは？', choices: ['同じ種類（class）の資産をまとめて全部再評価する', 'その建物だけ再評価すればよい', '機械や車も含めて、全部の非流動資産を再評価する', '再評価した建物は、もう減価償却しない'], answer: 0, explain: '良く見せたい資産だけ選べないように、同じ種類の資産はまとめて再評価する。他の種類（機械など）までは不要。再評価後も減価償却は続ける（次のレッスン）。' },
        { q: 'Land was revalued from $200,000 to $260,000 last year. This year its fair value fell to $180,000. How much is charged as an expense in profit or loss this year?', choices: ['$20,000', '$80,000', '$60,000', '$0'], answer: 0, explain: '下がった分は $80,000。まず同じ土地の剰余金 $60,000 を消し、足りない $20,000 が費用。$80,000 は剰余金を使うのを忘れた間違い。' }
      ]
    },
    // ---------------------------------------------------------------- L54
    {
      id: 'L54',
      no: 54,
      title: '再評価後の減価償却と超過償却額の振替',
      goal: '再評価した資産の減価償却費を計算し、超過償却額を再評価剰余金から利益剰余金へ振り替えられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D5(e)'],
      slides: [
        {
          title: '高く見積もり直したら、目減りも大きくなる',
          paras: ['300万円で買った車を、使える年数で割って「1年あたり何円ずつ価値が減るか」を考えていた。', 'ところが、その車の今の価値は思ったより高いと分かった。高い価値を残りの年数で割り直すと、1年あたりの目減りも大きくなる。', '再評価した資産も同じ。新しい金額をもとに減価償却をやり直す。']
        },
        {
          title: '再評価後の減価償却のルール',
          paras: ['再評価した後は、再評価額を残りの耐用年数（remaining useful life）で割る。減価償却累計額は再評価でゼロに戻ったので、ここから積み直す。'],
          formula: 'depreciation ＝ revalued amount ÷ remaining useful life'
        },
        {
          title: 'たこ焼き屋の建物の続き',
          paras: ['前のレッスンの建物。取得原価 $500,000、耐用年数50年で、毎年 $10,000 ずつ減価償却していた。10年たった 1 Jan 20X5 に $650,000 に再評価した。残りの耐用年数は40年。'],
          list: ['再評価後の減価償却: $650,000 ÷ 40 ＝ $16,250', 'もし再評価しなかったら: $500,000 ÷ 50 ＝ $10,000', '差: $16,250 − $10,000 ＝ $6,250。これが超過償却額（excess depreciation）']
        },
        {
          title: '超過償却額は剰余金から移す',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="減価償却費のうち超過償却額の分を再評価剰余金から利益剰余金へ振り替える" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">毎年の減価償却 $16,250 の中身</text><rect x="20" y="56" width="246" height="84" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="143" y="90" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">原価ベース</text><text x="143" y="114" text-anchor="middle" font-size="15" fill="var(--ink)">$10,000</text><rect x="266" y="56" width="154" height="84" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="343" y="90" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">超過償却額</text><text x="343" y="114" text-anchor="middle" font-size="15" fill="var(--ink)">$6,250</text><text x="343" y="132" text-anchor="middle" font-size="12.5" fill="var(--ink)">excess</text><rect x="20" y="186" width="170" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="220" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">再評価剰余金</text><rect x="250" y="186" width="170" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="220" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">利益剰余金</text><path d="M192 214L242 214" stroke="var(--ink)" stroke-width="1.5"/><path d="M240 208L250 214L240 220z" fill="var(--ink)"/><text x="220" y="204" text-anchor="middle" font-size="14" fill="var(--ink)">$6,250</text><text x="20" y="280" fill="var(--ink)">同じ金額を振り替える（SPLは通らない）</text></svg>`,
          caption: '減価償却費 $16,250 は全額が損益計算書の費用になる。振替はそれとは別の、資本の中だけの動き。'
        },
        {
          title: 'なぜ？ 振り替える理由',
          paras: ['再評価剰余金は「まだ実現していない」値上がり分。建物を1年使うと、値上がり分 $250,000 のうち 1/40 を使ったことになる。使った分は実現したと考える（$250,000 ÷ 40 ＝ $6,250）。', '実現した分は、利益剰余金（retained earnings）へ移す。利益剰余金は、会社がこれまでのもうけを貯めてきた資本の部分（個人事業なら capital に当たる）。どちらも資本なので、資本の合計は変わらない。']
        },
        {
          title: '20X5年の仕訳',
          journal: [
            { side: 'Dr', account: 'Depreciation expense（減価償却費・SPL）', amount: '16,250' },
            { side: 'Cr', account: 'Buildings – accumulated depreciation', amount: '16,250' },
            { side: 'Dr', account: 'Revaluation surplus（再評価剰余金）', amount: '6,250' },
            { side: 'Cr', account: 'Retained earnings（利益剰余金）', amount: '6,250' }
          ],
          note: { kind: 'tip', text: '振替は損益計算書を通らず、持分変動計算書（SOCE）で見せる。IAS 16 では「振り替えてもよい」ルールなので、試験では問題文が振替を求めているときに行う。' }
        },
        {
          title: '20X5年末の数字',
          table: { caption: '31 Dec 20X5', head: ['項目', '$'], rows: [['Buildings at valuation', '650,000'], ['Accumulated depreciation', '(16,250)'], ['Carrying amount（SFP）', '633,750'], ['Revaluation surplus: 250,000 − 6,250', '243,750']] },
          after: '20X6年も同じく、減価償却費 $16,250、振替 $6,250 を毎年くり返す。'
        },
        {
          title: '例題: 期の途中で再評価したら',
          example: {
            problem: '決算日は12月31日。建物は 1 Jan 20X1 に $400,000 で買い、耐用年数40年（毎年 $10,000）。1 Jul 20X6 に $414,000 に再評価した。20X6年の減価償却費と、振替額は？',
            steps: ['1月〜6月は元の基準: $10,000 × 6/12 ＝ $5,000', '再評価の日の累計額: 5.5年 × $10,000 ＝ $55,000。帳簿価額 $345,000。剰余金は $414,000 − $345,000 ＝ $69,000', '残りの耐用年数: 40 − 5.5 ＝ 34.5年。新しい年額: $414,000 ÷ 34.5 ＝ $12,000', '7月〜12月: $12,000 × 6/12 ＝ $6,000', '減価償却費の合計: $5,000 ＋ $6,000 ＝ $11,000', '振替: ($12,000 − $10,000) × 6/12 ＝ $1,000'],
            answer: '20X6年の減価償却費は $11,000。再評価剰余金から利益剰余金へ $1,000 を振り替える。'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '再評価額を、最初の耐用年数で割ってしまう（$650,000 ÷ 50 ＝ $13,000）。割るのは残りの年数（40年）。また、振替額を損益計算書の収益に入れたり、減価償却費を超過分 $6,250 だけにしたりする間違いも多い。費用は全額 $16,250、振替は資本の中だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['再評価後の減価償却＝再評価額 ÷ 残りの耐用年数', '超過償却額＝再評価後の減価償却 − 原価ベースの減価償却', '振替は Dr 再評価剰余金 / Cr 利益剰余金。SPL は通らない']
        },
        {
          title: '英単語',
          words: [
            ['remaining useful life', '', '残りの耐用年数'],
            ['excess depreciation', 'エクセス', '超過償却額'],
            ['retained earnings', 'リテインド・アーニングス', '利益剰余金'],
            ['reserve transfer', 'リザーブ', '資本の中での振替'],
            ['statement of changes in equity (SOCE)', '', '持分変動計算書'],
            ['realised', 'リアライズド', '実現した']
          ]
        }
      ],
      quiz: [
        { q: 'A building was revalued to $900,000 on 1 January 20X4, when its remaining useful life was 30 years. Depreciation based on its original cost was $18,000 per year. What is the depreciation charge for the year ended 31 December 20X4?', choices: ['$30,000', '$18,000', '$12,000', '$48,000'], answer: 0, explain: '$900,000 ÷ 30 ＝ $30,000。$18,000 は再評価前の金額。$12,000 は超過償却額だけ。$48,000 は2つを足した間違い。' },
        { q: 'For the building in the question above, what amount may be transferred from the revaluation surplus to retained earnings for 20X4?', choices: ['$12,000', '$30,000', '$18,000', '$48,000'], answer: 0, explain: '超過償却額＝$30,000 − $18,000 ＝ $12,000。振替は差額だけで、減価償却費の全額ではない。' },
        { q: '超過償却額の振替の仕訳はどれ？', choices: ['Dr 再評価剰余金 / Cr 利益剰余金', 'Dr 利益剰余金 / Cr 再評価剰余金', 'Dr 減価償却費 / Cr 再評価剰余金', 'Dr 再評価剰余金 / Cr 損益計算書の収益'], answer: 0, explain: '実現した分を再評価剰余金から減らし、利益剰余金を増やす。資本の中の移動なので、損益計算書は通らない。' },
        { q: '決算日は12月31日。機械（毎年の減価償却費 $8,000）を 1 Oct に $90,000 に再評価した。残りの耐用年数は5年。この年の減価償却費はいくら？', type: 'number', answer: 10500, unit: '$', explain: '1月〜9月: $8,000 × 9/12 ＝ $6,000。10月〜12月: $90,000 ÷ 5 ＝ $18,000、× 3/12 ＝ $4,500。合計 $10,500。' },
        { q: '超過償却額 $6,250 を再評価剰余金から利益剰余金へ振り替えた。資本の合計はどうなる？', choices: ['変わらない', '$6,250 増える', '$6,250 減る', '$12,500 増える'], answer: 0, explain: 'どちらも資本の中の箱。片方が減って、もう片方が同じだけ増えるので、合計は変わらない。' }
      ]
    },
    // ---------------------------------------------------------------- L55
    {
      id: 'L55',
      no: 55,
      title: '再評価した資産の売却損益',
      goal: '再評価した資産を売ったときの売却損益を計算し、残った再評価剰余金を正しく処理できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D4(h)'],
      slides: [
        {
          title: '値上がりを記録済みの家を売る',
          paras: ['3,000万円で買った家を、去年4,000万円と評価し直して記録した。値上がり分の1,000万円は、もう記録済み。', '今年4,100万円で売れた。売却益は、評価し直した4,000万円と比べて100万円。', '3,000万円と比べて1,100万円にすると、すでに記録した1,000万円をもう一度数えることになる。']
        },
        {
          title: '2つのルール',
          numbered: ['売却損益＝売れた金額 − 売る日の帳簿価額（再評価後の金額で計算した帳簿価額）', '残った再評価剰余金は、利益剰余金へ振り替える。損益計算書は通らない'],
          formula: 'gain or loss ＝ proceeds − carrying amount（再評価後）'
        },
        {
          title: 'たこ焼き屋の建物を売る',
          paras: ['前のレッスンの建物。1 Jan 20X5 に $650,000 に再評価し、毎年 $16,250 の減価償却と $6,250 の振替をしてきた。31 Dec 20X6 に $640,000 で売った。'],
          list: ['帳簿価額: $650,000 − $16,250 × 2 ＝ $617,500', '売却益: $640,000 − $617,500 ＝ $22,500', '残った剰余金: $250,000 − $6,250 × 2 ＝ $237,500']
        },
        {
          title: '売却勘定で売却益を出す',
          paras: ['取得原価の代わりに、評価額 $650,000 を売却勘定に移す。あとは普通の売却と同じ。'],
          tAccount: { name: 'Disposal account', debit: [['Buildings at valuation', '650,000']], credit: [['Accumulated depreciation', '32,500'], ['Cash (proceeds)', '640,000']], balance: { side: 'debit', label: 'Gain on disposal (SPL)', amount: '22,500' } },
          after: '貸方の合計 $672,500 が借方 $650,000 より $22,500 多い。この差が売却益で、損益計算書の収益になる。'
        },
        {
          title: '売却の仕訳',
          paras: ['T勘定と同じ内容を仕訳で書くと、こうなる。'],
          journal: [
            { side: 'Dr', account: 'Disposal account（売却勘定）', amount: '650,000' },
            { side: 'Cr', account: 'Buildings – valuation（評価額）', amount: '650,000' },
            { side: 'Dr', account: 'Buildings – accumulated depreciation', amount: '32,500' },
            { side: 'Cr', account: 'Disposal account', amount: '32,500' },
            { side: 'Dr', account: 'Cash（売れた金額）', amount: '640,000' },
            { side: 'Cr', account: 'Disposal account', amount: '640,000' },
            { side: 'Dr', account: 'Disposal account', amount: '22,500' },
            { side: 'Cr', account: 'Gain on disposal（売却益・SPL）', amount: '22,500' }
          ]
        },
        {
          title: '残った剰余金を移す',
          paras: ['建物はもうないので、建物のための再評価剰余金を残しておく理由もない。値上がり分は売ったことで実現した。残り $237,500 を利益剰余金へ移す。'],
          journal: [
            { side: 'Dr', account: 'Revaluation surplus（再評価剰余金）', amount: '237,500' },
            { side: 'Cr', account: 'Retained earnings（利益剰余金）', amount: '237,500' }
          ],
          after: '毎年の振替をしていなかった場合は、剰余金 $250,000 を全部ここで移す。'
        },
        {
          title: 'なぜ？ 剰余金を売却益に足さない理由',
          paras: ['値上がり分 $250,000 は、再評価した年にすでに OCI で記録した。売ったときに損益計算書の利益へもう一度入れると、同じ値上がりを2回数えることになる（二重計上）。', 'だから、損益計算書に出るのは「再評価した後に起きた差」の $22,500 だけ。剰余金は資本の中で利益剰余金へ移すだけにする。']
        },
        {
          title: '例題',
          example: {
            problem: '土地（取得原価 $150,000）を2年前に $210,000 に再評価した。土地は減価償却しない。今年 $230,000 で売った。売却損益と、利益剰余金へ振り替える額は？',
            steps: ['売る日の帳簿価額: 再評価額のまま $210,000（土地は減価償却しない）', '売却損益: $230,000 − $210,000 ＝ $20,000 の売却益', '再評価剰余金: $210,000 − $150,000 ＝ $60,000。毎年の振替はない（減価償却がないので）', '振替: Dr 再評価剰余金 $60,000 / Cr 利益剰余金 $60,000'],
            answer: '売却益 $20,000（損益計算書）。再評価剰余金 $60,000 を利益剰余金へ振り替える。'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '取得原価ベースの帳簿価額と比べてしまう。建物の例で、もし再評価していなかったら帳簿価額は $500,000 − $10,000 × 12年 ＝ $380,000。$640,000 − $380,000 ＝ $260,000 を売却益にするのは誤り。正しくは再評価後の帳簿価額と比べた $22,500。剰余金を売却益に足すのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売却損益は、再評価後の帳簿価額と比べる', '残った再評価剰余金は利益剰余金へ（Dr 剰余金 / Cr 利益剰余金）', '剰余金は売却益に入れない。すでに OCI で記録済みだから']
        },
        {
          title: '英単語',
          words: [
            ['gain on disposal', '', '売却益'],
            ['revalued amount', '', '再評価額'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額'],
            ['transfer to retained earnings', '', '利益剰余金への振替'],
            ['realised', 'リアライズド', '（売って）実現した']
          ]
        }
      ],
      quiz: [
        { q: 'A property was revalued three years ago, creating a revaluation surplus of $120,000. Its carrying amount at the date of disposal is $270,000 and it is sold for $290,000. What gain on disposal is reported in profit or loss?', choices: ['$20,000 gain', '$140,000 gain', '$10,000 loss', '$290,000 gain'], answer: 0, explain: '$290,000 − $270,000 ＝ $20,000。$140,000 は剰余金 $120,000 を足した間違い。剰余金は利益剰余金へ移すだけで、損益計算書には入れない。' },
        { q: 'What happens to the remaining balance on the revaluation surplus when the revalued asset is sold?', choices: ['It is transferred to retained earnings', 'It is credited to profit or loss as part of the gain', 'It stays in the revaluation surplus permanently', 'It is deducted from the sale proceeds'], answer: 0, explain: '資産がなくなり、値上がり分は実現したので、利益剰余金へ移す。損益計算書には通さない（すでに OCI で記録済み）。' },
        { q: '土地（取得原価 $150,000）を2年前に $210,000 に再評価した。今年 $195,000 で売った。売却損はいくら？（金額だけ入力）', type: 'number', answer: 15000, unit: '$', explain: '帳簿価額は再評価額の $210,000。$195,000 − $210,000 ＝ −$15,000 で、$15,000 の売却損。取得原価 $150,000 と比べて $45,000 の益にするのは誤り。' },
        { q: '上の土地で、利益剰余金へ振り替える再評価剰余金はいくら？', choices: ['$60,000', '$45,000', '$15,000', '$0'], answer: 0, explain: '剰余金は $210,000 − $150,000 ＝ $60,000。売却損が出ても、残った剰余金は全額を利益剰余金へ移す。$45,000 は売った値段と取得原価の差で、関係ない。' },
        { q: 'なぜ、残った再評価剰余金を売却益に足さないのか？', choices: ['値上がり分はすでに OCI で記録済みで、足すと二重に数えるから', '再評価剰余金は負債だから', '売った後も資産が会社に残るから', '利益を小さく見せるのがいつも正しいから'], answer: 0, explain: '再評価した年に OCI で記録したので、もう一度利益に入れると二重計上になる。剰余金は資本で、負債ではない。' }
      ]
    },
    // ---------------------------------------------------------------- L56
    {
      id: 'L56',
      no: 56,
      title: '固定資産台帳',
      goal: '固定資産台帳に何を書き、何のために使い、元帳とどう照らし合わせるかを説明できるようになる',
      minutes: 11,
      recall: true,
      exam: 'both',
      outcomes: ['D4(j)'],
      slides: [
        {
          title: '家の持ち物リストで考える',
          paras: ['火災保険に入るとき、テレビ、冷蔵庫、自転車を、いつ・いくらで買って、どこに置いてあるかをメモしておくと便利。', '「家具と家電、合計50万円」だけだと、何がどこにあるのか、なくなっていないのかが分からない。1つずつのリストがあるから確認できる。']
        },
        {
          title: '元帳は合計、台帳は1つずつ',
          paras: ['総勘定元帳の Plant and machinery 勘定には、機械全部の合計金額しか出てこない。', '固定資産台帳（non-current asset register）は、資産を1つずつ記録した一覧表。会社の機械が何百台あっても、1台ごとの情報が分かる。'],
          note: { kind: 'tip', text: '台帳は複式簿記の勘定ではない。元帳とは別の補助の記録（memorandum record）で、元帳の合計と一致するはずのもの。' }
        },
        {
          title: '台帳に書くこと（content）',
          list: ['資産の番号と説明（例: 機械 No.17、たこ焼き焼成機）', '置き場所と管理する担当者', '取得日と仕入先', '取得原価（再評価したら再評価額と日付）', '減価償却の方法、耐用年数、残存価額', '減価償却累計額と帳簿価額', '売ったとき: 売却日と売れた金額']
        },
        {
          title: '台帳の目的と役割',
          numbered: ['1つずつの減価償却を計算する。合計はそのまま元帳の減価償却費になる', '実物があるか確かめる（physical verification）。盗難・紛失・壊れて捨てた資産を見つける', '元帳の合計（取得原価・累計額）と照らし合わせて、記帳のミスを見つける'],
          after: 'ほかにも、保険をかける金額、修理や買い替えの計画にも使える。'
        },
        {
          title: '3つを照らし合わせる',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="実物と固定資産台帳と総勘定元帳を照らし合わせる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">3つを照らし合わせる</text><rect x="140" y="52" width="160" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="78" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">実物</text><text x="220" y="98" text-anchor="middle" font-size="12.5" fill="var(--quiet)">physical assets</text><rect x="20" y="170" width="170" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="105" y="198" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">固定資産台帳</text><text x="105" y="220" text-anchor="middle" font-size="12.5" fill="var(--ink)">asset register</text><rect x="250" y="170" width="170" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="198" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">総勘定元帳</text><text x="335" y="220" text-anchor="middle" font-size="12.5" fill="var(--quiet)">general ledger</text><path d="M180 108L120 170" stroke="var(--ink)" stroke-width="1.5"/><text x="166" y="146" fill="var(--ink)">1台ずつ数える</text><path d="M190 202L250 202" stroke="var(--ink)" stroke-width="1.5"/><text x="220" y="260" text-anchor="middle" fill="var(--ink)">合計を照合する</text></svg>`,
          caption: '台帳と実物、台帳と元帳を比べる。どちらかがずれていたら、原因を調べて直す。'
        },
        {
          title: '台帳と元帳がずれる理由',
          list: ['売った・捨てた資産を、台帳から消し忘れた（台帳の方が大きい）', '売った・捨てた資産を、元帳から消し忘れた（元帳の方が大きい）', '新しく買った資産を、どちらか一方にしか入れていない', '減価償却の計算や記帳のミス', '盗まれた資産を、台帳にも元帳にも記録していない（実物を数えて初めて分かる）']
        },
        {
          title: 'なぜ？ 台帳が必要な理由',
          paras: ['会社の資産は数が多く、高い。合計だけでは、どの機械がいつ古くなるのか、本当に工場にあるのかが分からない。', '1つずつ記録し、実物と元帳の両方と照らし合わせることで、ミスや不正（盗難など）を見つけられる。これを内部統制（internal control）という。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '台帳と元帳が一致していれば全部正しい、と思ってしまう。盗まれた機械を両方に記録していなければ、2つは一致していても実物とずれている。だから実物を数える確認も必要。また、台帳を複式簿記の勘定（試算表に載るもの）と考えるのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['台帳＝資産を1つずつ記録した一覧（複式簿記の外の補助記録）', '書くこと: 番号・場所・取得日・原価・償却方法・累計額・帳簿価額', '使い方: 減価償却の計算、実物の確認、元帳との照合']
        },
        {
          title: '英単語',
          words: [
            ['non-current asset register', 'レジスター', '固定資産台帳'],
            ['physical verification', 'フィジカル・ベリフィケーション', '実物の確認'],
            ['general ledger', 'ジェネラル・レジャー', '総勘定元帳'],
            ['reconcile', 'レコンサイル', '照合して一致させる'],
            ['scrapped', 'スクラップト', '壊れて捨てた'],
            ['internal control', '', '内部統制']
          ]
        }
      ],
      quiz: [
        { q: '固定資産台帳に、ふつう書かないものはどれ？', choices: ['仕入先の銀行口座の残高', '取得日と取得原価', '置き場所と担当者', '減価償却の方法と耐用年数'], answer: 0, explain: '台帳は自社の資産1つずつの記録。仕入先の銀行残高は関係ない。ほかの3つは必ず書く項目。' },
        { q: 'Which of the following is NOT a purpose of a non-current asset register?', choices: ['To record the total sales revenue for the year', 'To help confirm that assets physically exist', 'To support the calculation of depreciation for each asset', 'To check the general ledger balances for non-current assets'], answer: 0, explain: '売上の記録は台帳の目的ではない。実物の確認、1つずつの減価償却、元帳との照合が台帳の役割。' },
        { q: 'During the year a machine was sold. Its cost and accumulated depreciation were removed from the general ledger, but it was not removed from the non-current asset register. Which statement is correct?', choices: ['The register shows a higher carrying amount than the ledger', 'The ledger shows a higher carrying amount than the register', 'The register and the ledger still agree', 'The ledger must be corrected by adding the machine back'], answer: 0, explain: '売った機械が台帳に残っているので、台帳の方が大きい。直すのは台帳の方（機械を消す）。元帳は正しく処理されている。' },
        { q: '工場の機械を数えたら、台帳にある1台が見つからなかった。台帳と元帳の合計は一致している。まず考えるべきことは？', choices: ['盗難や廃棄など、記録されていない減少がある', '台帳と元帳が一致しているので問題はない', '減価償却の方法がまちがっている', '売上が多く記録されている'], answer: 0, explain: '台帳と元帳が一致していても、実物とずれていれば記録漏れか盗難がある。だから実物の確認が必要。' },
        { q: '固定資産台帳は、複式簿記の勘定（試算表に載るもの）か？', choices: ['いいえ。元帳とは別の補助の記録で、元帳と照合する', 'はい。台帳の残高がそのまま試算表に載る', 'はい。台帳に書けば、元帳には書かなくてよい'], answer: 0, explain: '台帳は複式簿記の外の補助記録（memorandum record）。仕訳と元帳への記帳は別に必要で、台帳はその確認に使う。' }
      ]
    },
    // ---------------------------------------------------------------- L57
    {
      id: 'L57',
      no: 57,
      title: '固定資産の開示（増減表）',
      goal: '有形固定資産の注記（期首から期末までの増減表）を作り、足りない数字を逆算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D4(i)', 'G3(b)i'],
      slides: [
        {
          title: '通帳と同じ形',
          paras: ['銀行の通帳は「前の残高＋入ったお金 − 出たお金＝今の残高」の形で並んでいる。だから、なぜ残高が変わったのかが分かる。', '有形固定資産も同じ形で、1年間の増え方と減り方を見せる。これが増減表。']
        },
        {
          title: '本体は1行、詳しくは注記',
          paras: ['財政状態計算書（SFP）の本体には、有形固定資産（property, plant and equipment）の帳簿価額の合計を1行で出す。', '詳しい内容は注記（notes to the financial statements）に書く。注記では、資産の種類（class）ごとに、取得原価と減価償却累計額の動きを見せる。種類の例: Land and buildings、Plant and machinery、Motor vehicles。']
        },
        {
          title: '増減表①: 取得原価',
          table: { caption: 'Plant and machinery（20X7年）', head: ['Cost', '$'], rows: [['At 1 Jan 20X7', '120,000'], ['Additions（買った）', '30,000'], ['Disposals（売った分の原価）', '(20,000)']], total: ['At 31 Dec 20X7', '130,000'] },
          after: 'Disposals には、売った機械の取得原価を書く。売れた金額ではない。'
        },
        {
          title: '増減表②: 累計額と帳簿価額',
          table: { caption: 'Plant and machinery（20X7年）', head: ['Accumulated depreciation', '$'], rows: [['At 1 Jan 20X7', '50,000'], ['Charge for the year', '13,000'], ['Disposals（売った分の累計額）', '(15,000)'], ['At 31 Dec 20X7', '48,000'], ['Carrying amount at 1 Jan 20X7', '70,000']], total: ['Carrying amount at 31 Dec 20X7', '82,000'] },
          after: '期末の帳簿価額は $130,000 − $48,000 ＝ $82,000。この $82,000 が SFP の本体に出る。'
        },
        {
          title: '再評価した年の書き方',
          paras: ['L53 の建物（$500,000、累計額 $100,000、$650,000 に再評価）を増減表に書くと、次のようになる。'],
          list: ['Cost or valuation: 期首 $500,000 ＋ Revaluation $150,000 ＝ 期末 $650,000', 'Accumulated depreciation: 期首 $100,000 − Eliminated on revaluation $100,000 ＋ Charge $16,250 ＝ 期末 $16,250', 'Carrying amount: 期首 $400,000 → 期末 $633,750'],
          after: '再評価した資産があるときは、見出しを Cost or valuation と書く。'
        },
        {
          title: 'ほかに書くこと',
          list: ['測定の方法（原価モデルか再評価モデルか）', '減価償却の方法（定額法・定率法）', '耐用年数、または減価償却率', '再評価したとき: 再評価の日、独立した鑑定人（independent valuer）が評価したかどうか、原価モデルのままだったら帳簿価額はいくらか、再評価剰余金の動き'],
          note: { kind: 'tip', text: '無形資産（intangible assets）も同じ形の注記を作る。減価償却の代わりに償却（amortisation）という言葉を使う。無形資産は次の部で学ぶ。' }
        },
        {
          title: '例題',
          example: {
            problem: 'Motor vehicles: 期首の取得原価 $60,000、累計額 $24,000。期中にバンを $18,000 で買った。取得原価 $12,000、累計額 $9,000 の車を $2,000 で売った。減価償却は期末の取得原価の20%（定額法。買った年は1年分、売った年はなし）。期末の取得原価・累計額・帳簿価額は？',
            steps: ['取得原価: $60,000 ＋ $18,000 − $12,000 ＝ $66,000', '当期の減価償却費: $66,000 × 20% ＝ $13,200', '累計額: $24,000 ＋ $13,200 − $9,000 ＝ $28,200', '帳簿価額: $66,000 − $28,200 ＝ $37,800', '確認: 期首 $36,000 ＋ $18,000 − 売った車 $3,000 − $13,200 ＝ $37,800', '売れた $2,000 と売却損 $1,000 は増減表には出ない（売却損は SPL）'],
            answer: '期末の取得原価 $66,000、累計額 $28,200、帳簿価額 $37,800。'
          }
        },
        {
          title: 'なぜ？ 増減表を見せる理由',
          paras: ['帳簿価額の合計だけでは、会社が新しい設備に投資しているのか、古い設備を使い続けているだけなのかが分からない。', '増減表があると、買った額（additions）、売った額、減価償却費が見える。投資家や銀行は、会社の設備がどれくらい新しいか、これからどれくらい買い替えが必要かを判断できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '売れた金額（proceeds）や売却損益を増減表に入れてしまう。Disposals の行は、売った資産の取得原価と累計額。また、逆算の問題で「当期の減価償却費＝期末の累計額 − 期首の累計額」として、売った資産の累計額を足し戻すのを忘れる間違いが多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期首 ＋ 増えた分 − 減った分 ＝ 期末（取得原価と累計額それぞれ）', 'Disposals は売った資産の取得原価と累計額。売れた金額ではない', '当期の減価償却費 ＝ 期末の累計額 − 期首の累計額 ＋ 売った資産の累計額']
        },
        {
          title: '英単語',
          words: [
            ['notes to the financial statements', '', '注記'],
            ['additions', 'アディションズ', '期中に買った資産'],
            ['disposals', 'ディスポーザルズ', '期中に売った・捨てた資産'],
            ['charge for the year', '', '当期の減価償却費'],
            ['cost or valuation', '', '取得原価または再評価額'],
            ['eliminated on revaluation', '', '再評価で消した累計額'],
            ['property, plant and equipment', '', '有形固定資産']
          ]
        }
      ],
      quiz: [
        { q: 'Accumulated depreciation was $50,000 at the start of the year and $62,000 at the end of the year. Assets with accumulated depreciation of $9,000 were disposed of during the year. What was the depreciation charge for the year?', type: 'number', answer: 21000, unit: '$', explain: '期首 $50,000 ＋ 当期の減価償却費 − 売った分 $9,000 ＝ 期末 $62,000。なので $62,000 − $50,000 ＋ $9,000 ＝ $21,000。差の $12,000 だけにするのは、売った分を忘れた間違い。' },
        { q: 'Which of the following is NOT shown in the property, plant and equipment disclosure note?', choices: ['The sale proceeds of assets disposed of', 'Additions during the year', 'The depreciation charge for the year', 'The carrying amount at the end of the year'], answer: 0, explain: '売れた金額は増減表に出ない。Disposals の行には、売った資産の取得原価と累計額を書く。売却損益は損益計算書に出る。' },
        { q: '機械の取得原価: 期首 $200,000、期末 $235,000。期中に取得原価 $25,000 の機械を売った。期中に買った機械（additions）はいくら？', type: 'number', answer: 60000, unit: '$', explain: '$200,000 ＋ additions − $25,000 ＝ $235,000。なので additions ＝ $235,000 − $200,000 ＋ $25,000 ＝ $60,000。' },
        { q: 'At the start of the year the carrying amount of plant was $145,000. During the year additions were $40,000, plant with a carrying amount of $12,000 was sold, and depreciation was $26,000. What was the carrying amount at the end of the year?', choices: ['$147,000', '$171,000', '$159,000', '$107,000'], answer: 0, explain: '$145,000 ＋ $40,000 − $12,000 − $26,000 ＝ $147,000。$171,000 は売った分を足した間違い。$159,000 は売った分を引き忘れた間違い。$107,000 は買った分を足し忘れた間違い。' },
        { q: '再評価をした年の増減表で、減価償却累計額の欄には何を書く？', choices: ['再評価で消した累計額を、マイナスの行（eliminated on revaluation）で書く', '再評価剰余金の金額を足す', '何も書かない。取得原価の欄だけが動く', '売れた金額を引く'], answer: 0, explain: '再評価で累計額をゼロに戻したので、その分を「eliminated on revaluation」として減らす。取得原価の欄には、評価額との差（revaluation）を足す。' },
        { q: '財政状態計算書（SFP）の本体では、有形固定資産をどう見せる？', choices: ['帳簿価額の合計を1行で示し、詳しい内容は注記に書く', '資産1つずつの取得原価と累計額を全部並べる', '取得原価の合計だけを示す', '期中に売った資産の売れた金額を示す'], answer: 0, explain: '本体はシンプルに帳簿価額。種類ごとの取得原価・累計額・増減は注記の増減表で見せる。' }
      ]
    }
  ],
  cards: [
    { id: 'L52-1', lesson: 'L52', q: '下取り（part exchange）は、どの2つの取引の組み合わせ？', a: '古い資産の売却と、新しい資産の購入' },
    { id: 'L52-2', lesson: 'L52', q: '下取りのとき、古い資産の「売れた金額」は？', a: '下取り額（part-exchange allowance）' },
    { id: 'L52-3', lesson: 'L52', q: '下取りで買った新しい資産の取得原価は？', a: '現金で払った額＋下取り額（＝定価）' },
    { id: 'L52-4', lesson: 'L52', q: '下取り額 $5,000 の仕訳はどこに入る？', a: 'Dr 新しい資産（定価の一部）/ Cr 売却勘定 $5,000' },
    { id: 'L52-5', lesson: 'L52', q: '帳簿価額 $6,000 の車を $5,000 で下取りに出した。損益は？', a: '$1,000 の売却損（$5,000 − $6,000）' },
    { id: 'L53-1', lesson: 'L53', q: '再評価剰余金の計算は？', a: '公正価値 − 再評価の日の帳簿価額（取得原価ではない）' },
    { id: 'L53-2', lesson: 'L53', q: '再評価の値上がり分はどこに載る？', a: 'SPLOCI の OCI と、SFP の資本（再評価剰余金）' },
    { id: 'L53-3', lesson: 'L53', q: 'なぜ値上がり分を利益に入れない？', a: 'まだ売っていない（実現していない）から' },
    { id: 'L53-4', lesson: 'L53', q: '値上がりの再評価の仕訳（建物）は？', a: 'Dr 累計額（全額）、Dr 建物（評価額まで）/ Cr 再評価剰余金' },
    { id: 'L53-5', lesson: 'L53', q: '1つの建物を再評価したら、ほかの建物は？', a: '同じ種類（class）の資産はまとめて全部再評価する' },
    { id: 'L53-6', lesson: 'L53', q: '再評価した資産の価値が下がったら？', a: 'まず同じ資産の剰余金を減らし、足りない分は SPL の費用' },
    { id: 'L54-1', lesson: 'L54', q: '再評価後の減価償却費の計算は？', a: '再評価額 ÷ 残りの耐用年数' },
    { id: 'L54-2', lesson: 'L54', q: '超過償却額（excess depreciation）とは？', a: '再評価後の減価償却 − 原価ベースの減価償却' },
    { id: 'L54-3', lesson: 'L54', q: '超過償却額の振替の仕訳は？', a: 'Dr 再評価剰余金 / Cr 利益剰余金（SPL は通らない）' },
    { id: 'L54-4', lesson: 'L54', q: 'なぜ超過償却額を振り替える？', a: '資産を使った分だけ、値上がり分が実現したと考えるから' },
    { id: 'L54-5', lesson: 'L54', q: '期の途中で再評価したら、減価償却費は？', a: '再評価の日までは元の基準、その後は新しい基準で月割りして足す' },
    { id: 'L55-1', lesson: 'L55', q: '再評価した資産の売却損益は？', a: '売れた金額 − 再評価後の帳簿価額' },
    { id: 'L55-2', lesson: 'L55', q: '売った資産の再評価剰余金の残りは？', a: '利益剰余金へ振り替える（Dr 剰余金 / Cr 利益剰余金）' },
    { id: 'L55-3', lesson: 'L55', q: 'なぜ剰余金を売却益に足さない？', a: 'すでに OCI で記録済みで、足すと二重計上になるから' },
    { id: 'L55-4', lesson: 'L55', q: '土地を $210,000 に再評価（原価 $150,000）。$230,000 で売ると？', a: '売却益 $20,000。剰余金 $60,000 は利益剰余金へ' },
    { id: 'L56-1', lesson: 'L56', q: '固定資産台帳とは？', a: '資産を1つずつ記録した一覧。複式簿記の外の補助記録' },
    { id: 'L56-2', lesson: 'L56', q: '台帳に書く主な内容は？', a: '番号・場所・取得日・原価・償却方法・累計額・帳簿価額' },
    { id: 'L56-3', lesson: 'L56', q: '台帳の3つの使い方は？', a: '減価償却の計算、実物の確認、元帳との照合' },
    { id: 'L56-4', lesson: 'L56', q: '売った機械を台帳から消し忘れると？', a: '台帳の方が元帳より大きくなる' },
    { id: 'L56-5', lesson: 'L56', q: '台帳と元帳が一致していても、実物を数える理由は？', a: '盗難などが両方に記録されていないかもしれないから' },
    { id: 'L57-1', lesson: 'L57', q: '有形固定資産の増減表の形は？', a: '期首＋増えた分 − 減った分＝期末（取得原価と累計額それぞれ）' },
    { id: 'L57-2', lesson: 'L57', q: '増減表の Disposals の行に書くのは？', a: '売った資産の取得原価と累計額（売れた金額ではない）' },
    { id: 'L57-3', lesson: 'L57', q: '当期の減価償却費を逆算する式は？', a: '期末の累計額 − 期首の累計額 ＋ 売った資産の累計額' },
    { id: 'L57-4', lesson: 'L57', q: '期中に買った額（additions）を逆算する式は？', a: '期末の取得原価 − 期首の取得原価 ＋ 売った資産の取得原価' },
    { id: 'L57-5', lesson: 'L57', q: '再評価した年、累計額の欄はどう動く？', a: '消した累計額を eliminated on revaluation として減らす' },
    { id: 'L57-6', lesson: 'L57', q: '増減表以外に注記に書くことは？', a: '測定の方法、償却方法、耐用年数（率）。再評価なら日付・鑑定人・原価モデルでの帳簿価額' }
  ]
});
