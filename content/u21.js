(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 21,
  part: 14,
  partTitle: '不完全記録',
  lessons: [
    {
      id: 'L101',
      no: 101,
      title: '会計等式で利益を求める',
      goal: '帳簿がなくても、期首と期末の純資産・引出し・資本の拠出から1年の利益（または損失）を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['G6(a)i'],
      slides: [
        {
          title: '家計簿がなくても、増え方は分かる',
          paras: ['去年の1月1日、貯金からカードの支払い残りを引いた「正味の財産」は80万円だった。今年の1月1日は130万円。1年で50万円増えた。', 'ただし途中で、親から20万円もらい、旅行で30万円使った。'],
          after: 'もらった20万円は、自分で稼いだお金ではない。旅行の30万円は、稼いだあとに出ていった。だから旅行に使う前の稼ぎは 50 − 20 ＋ 30 ＝ 60万円。'
        },
        {
          title: '帳簿のないお店',
          paras: ['たこ焼き屋のオーナーが、1年間ちゃんと記録をつけていなかった。売上も費用も分からない。こういう状態を不完全記録（incomplete records）という。', 'それでも、期首と期末に「何を持っていて、いくら借りているか」は、数えたり請求書を見たりすれば分かる。そこから利益を出す。']
        },
        {
          title: '期首と期末の純資産を数える',
          paras: ['純資産（net assets）は資産 − 負債。L02 のとおり、これは資本と同じ額になる。かっこの数字は負債で、引く。'],
          table: {
            caption: 'たこ焼き屋の純資産',
            head: ['項目', '期首 $', '期末 $'],
            rows: [
              ['Equipment（設備）', '8,000', '7,000'],
              ['Inventory（在庫）', '2,000', '2,600'],
              ['Trade receivables', '1,500', '1,900'],
              ['Bank', '3,000', '4,300'],
              ['Trade payables', '(1,200)', '(1,800)'],
              ['Loan（借入金）', '(4,000)', '(3,000)']
            ],
            total: ['Net assets', '9,300', '11,000']
          },
          after: 'このように、ある日の資産と負債を並べて資本を出す表を statement of affairs という。期首の純資産は、そのまま期首資本（opening capital）になる。'
        },
        {
          title: '資本が動く理由は3つだけ',
          paras: ['L05 の式を思い出す。資本は、資本の拠出（増える）、利益（増える）、引出し（減る）の3つでしか動かない。'],
          svg: `<svg viewBox="0 0 440 350" role="img" aria-label="期首の純資産に拠出と利益を足し引出しを引くと期末の純資産になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">純資産の動きから利益を出す</text><rect x="20" y="52" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="15" fill="var(--ink)">期首の純資産</text><text x="400" y="80" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$9,300</text><rect x="20" y="104" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="132" font-size="15" fill="var(--ink)">＋ 資本の拠出</text><text x="400" y="132" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$1,000</text><rect x="20" y="156" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="184" font-size="15" font-weight="600" fill="var(--ink)">＋ 利益（分からない）</text><text x="400" y="184" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">？</text><rect x="20" y="208" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="236" font-size="15" fill="var(--ink)">− 引出し</text><text x="400" y="236" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$6,400</text><rect x="20" y="260" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="288" font-size="15" font-weight="600" fill="var(--ink)">＝ 期末の純資産</text><text x="400" y="288" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$11,000</text><text x="220" y="334" text-anchor="middle" fill="var(--ink)">分からないのは利益だけ → 差し引きで出る</text></svg>`,
          caption: '5つのうち4つは数えるか、オーナーに聞けば分かる。残る1つが利益。'
        },
        {
          title: 'なぜ？ 差し引きで利益が出る',
          paras: ['期首と期末の純資産は数えれば分かる。オーナーが入れた額と持ち出した額も、本人に聞けば分かる。残る「分からないもの」は利益だけ。だから L05 の式を並べ替えれば利益が出る。'],
          formula: 'profit ＝ closing net assets − opening net assets ＋ drawings − capital introduced',
          after: '引出しを足すのは、持ち出す前にお店が稼いでいた分だから。拠出を引くのは、稼がずにオーナーが入れて増えた分だから。'
        },
        {
          example: {
            problem: 'たこ焼き屋の純資産は期首 $9,300、期末 $11,000。オーナーは1年で現金 $6,000 を持ち出し、さらに原価 $400 の材料を家で使った。遺産から $1,000 をお店に入れた。利益はいくら？',
            steps: ['純資産の増加: $11,000 − $9,300 ＝ $1,700', '引出しの合計: 現金 $6,000 ＋ 商品 $400 ＝ $6,400。自分用に持ち出した商品（goods taken for own use）も、原価で引出しになる', '利益 ＝ $1,700 ＋ $6,400 − $1,000 ＝ $7,100', '検算: $9,300 ＋ $1,000 ＋ $7,100 − $6,400 ＝ $11,000'],
            answer: '利益は $7,100'
          }
        },
        {
          title: '答えがマイナスなら損失',
          paras: ['純資産が期首 $5,000、期末 $4,000、引出し $2,000、拠出 $3,000 なら、$4,000 − $5,000 ＋ $2,000 − $3,000 ＝ −$2,000。$2,000 の損失（loss）になる。', '逆に、利益が分かっていて引出しや拠出が分からない問題も出る。同じ式で、分からない1つを差し引きで出す。']
        },
        {
          title: 'この方法でできないこと',
          paras: ['会計等式で分かるのは、利益の合計だけ。売上がいくら、費用がいくら、という内訳は出ない。内訳を出すには、次のレッスンから学ぶ元帳や現金の要約の方法を使う。', 'K1 では、不完全記録は財政状態計算書や損益計算書を作る問題の中で使う技法として出る。中身は FA と同じ。'],
          note: { kind: 'warn', text: 'よくある間違い: ①資本の拠出を足してしまう（引くのが正しい） ②自分用に持ち出した商品を引出しに入れ忘れる ③純資産でなく資産の合計で計算して、負債を引き忘れる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['純資産（資産 − 負債）は資本と同じ額', '利益 ＝ 期末純資産 − 期首純資産 ＋ 引出し − 資本の拠出', '自分用に持ち出した商品は、原価で引出しに入れる']
        },
        {
          title: '英単語',
          words: [
            ['incomplete records', 'インコンプリート・レコーズ', '不完全記録'],
            ['net assets', 'ネット・アセッツ', '純資産（資産 − 負債）'],
            ['opening capital / closing capital', '', '期首資本 / 期末資本'],
            ['capital introduced', '', '資本の拠出（元入れ）'],
            ['drawings', 'ドローイングス', '引出し'],
            ['goods taken for own use', '', '自分用に持ち出した商品（原価で引出し）'],
            ['statement of affairs', '', 'ある日の資産と負債の一覧（資本を出す表）']
          ]
        }
      ],
      quiz: [
        { q: 'The net assets of a sole trader were $12,000 at the start of the year and $15,500 at the end. Drawings were $4,000 and capital introduced was $2,500. What was the profit for the year?', choices: ['$10,000', '$2,000', '$5,000', '$3,500'], answer: 2, explain: '$15,500 − $12,000 ＋ $4,000 − $2,500 ＝ $5,000。$10,000 は拠出を足してしまった答え。$2,000 は引出しと拠出の符号を逆にした答え。$3,500 は純資産の増加だけ。' },
        { q: 'Opening capital was $20,000 and closing net assets were $18,000. During the year the owner took cash of $9,000 and goods costing $600 for own use. No capital was introduced. What was the profit for the year?', type: 'number', answer: 7600, unit: '$', explain: '引出しは $9,000 ＋ $600 ＝ $9,600。利益 ＝ $18,000 − $20,000 ＋ $9,600 ＝ $7,600。純資産は減っていても、引出しが多いので利益は出ている。商品 $600 を忘れると $7,000 になる。' },
        { q: '純資産が期首 $10,000、期末 $8,000。引出し $1,000、資本の拠出 $2,000。1年の結果は？', choices: ['$1,000 の損失', '$3,000 の損失', '$1,000 の利益', '$5,000 の利益'], answer: 1, explain: '$8,000 − $10,000 ＋ $1,000 − $2,000 ＝ −$3,000。マイナスなので損失。引出しと拠出の符号を逆にすると $1,000 の損失になってしまう。' },
        { q: 'Opening capital was $15,000 and closing capital was $17,000. Profit for the year was $8,000 and no capital was introduced. What were the drawings?', choices: ['$10,000', '$2,000', '$25,000', '$6,000'], answer: 3, explain: '期末資本 ＝ 期首資本 ＋ 利益 − 引出し。$17,000 ＝ $15,000 ＋ $8,000 − 引出し なので、引出しは $6,000。$10,000 は資本の増加 $2,000 を利益に足した間違い。' },
        { q: '会計等式で利益を出すとき、資本の拠出を引くのはなぜ？', choices: ['拠出は費用だから', '拠出は負債だから', 'オーナーが入れたお金で純資産が増えただけで、お店が稼いだ分ではないから', '拠出はいつか返すお金だから'], answer: 2, explain: '拠出は純資産（資本）を増やすが、稼いだ結果ではない。だから純資産の増加から取り除く。費用でも負債でもない（L05）。' }
      ]
    },
    {
      id: 'L102',
      no: 102,
      title: '元帳で売上・仕入を逆算する',
      goal: '売掛金・買掛金・費用の勘定を使い、差額から掛け売上・掛け仕入・費用を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G6(a)ii'],
      slides: [
        {
          title: '「払った額」と「使った額」は違う',
          paras: ['スマホ代は月末に締めて、翌月に払う。1月1日の時点で、12月分の 8,000円 をまだ払っていない。', '1年間で払ったのは 100,000円。12月31日には、今年の12月分 9,000円 が残っている。'],
          after: '1年間に使った額 ＝ 100,000 − 8,000 ＋ 9,000 ＝ 101,000円。払った額から去年の分を引き、来年払う分を足す。'
        },
        {
          title: '勘定は左右が必ず同じ',
          paras: ['T勘定は、左右の合計が必ず同じになる（L18）。だから、分からない数字が1つだけなら、差し引きで出せる。差し引きで出す数字を balancing figure（差額）という。'],
          formula: '期首残高 ＋ 増えた分 ＝ 減った分 ＋ 期末残高'
        },
        {
          title: '売掛金の勘定で掛け売上を出す',
          paras: ['たこ焼き屋の売掛金は期首 $3,200、期末 $4,100。掛けのお客さんからの入金は $41,500、貸倒れの償却は $600。掛け売上が分からない。'],
          tAccount: { name: 'Receivables control account（売掛金）', debit: [['Balance b/d', '3,200'], ['Credit sales（差額）', '43,000']], credit: [['Bank', '41,500'], ['Irrecoverable debts', '600'], ['Balance c/d', '4,100']] },
          caption: '右の合計は $46,200。左も $46,200 になるので、掛け売上 ＝ $46,200 − $3,200 ＝ $43,000。現金売上 $12,000 を足すと、売上は $55,000。'
        },
        {
          title: '勘定のどちら側に書く？',
          table: {
            caption: '売掛金・買掛金の勘定に入るもの',
            head: ['勘定', '借方（左）', '貸方（右）'],
            rows: [
              ['売掛金', '期首残高、掛け売上', '入金、貸倒れ、売上戻り、相殺（contra）、使わないと見込んだのに使われた早期支払割引、期末残高'],
              ['買掛金', '支払い、受けた割引、仕入戻し、相殺（contra）、期末残高', '期首残高、掛け仕入']
            ]
          },
          after: '売上の合計は、掛け売上に現金売上を足す。売上戻りや、あとで使われた早期支払割引（L27 で売上を直す分）は、損益計算書の売上収益から引いて載せる。'
        },
        {
          example: {
            problem: 'たこ焼き屋の買掛金は期首 $2,100、期末 $2,500。仕入先への支払い $30,400、受けた割引 $300。掛け仕入はいくら？',
            steps: ['買掛金の勘定を書く。期首残高と掛け仕入は貸方（右）、支払い・受けた割引・期末残高は借方（左）', '借方の合計: $30,400 ＋ $300 ＋ $2,500 ＝ $33,200', '貸方も $33,200 になるはず。掛け仕入 ＝ $33,200 − $2,100 ＝ $31,100'],
            answer: '掛け仕入は $31,100'
          }
        },
        {
          title: '費用の勘定でも同じ',
          paras: ['電気代の支払いは $2,000。期首に未払い $300、期末に未払い $450 がある（L63）。'],
          tAccount: { name: 'Electricity（電気代）', debit: [['Bank', '2,000'], ['Accrual c/d（期末の未払い）', '450']], credit: [['Accrual b/d（期首の未払い）', '300'], ['SPL expense（差額）', '2,150']] },
          caption: '費用 ＝ $2,000 − $300 ＋ $450 ＝ $2,150。前払い（L64）なら逆で、期首の前払いを足し、期末の前払いを引く。家賃の支払い $5,000、期首前払 $400、期末前払 $500 なら $4,900。'
        },
        {
          title: '設備の勘定でも同じ',
          paras: ['設備の帳簿価額（carrying amount）は期首 $10,000、期末 $12,000。減価償却は $1,500、売却はない。買った設備の額が分からない。'],
          tAccount: { name: 'Equipment（帳簿価額）', debit: [['Balance b/d', '10,000'], ['Additions（差額）', '3,500']], credit: [['Depreciation', '1,500'], ['Balance c/d', '12,000']] },
          caption: '右の合計は $13,500。購入 ＝ $13,500 − $10,000 ＝ $3,500。どの勘定でも「1つだけ分からない」なら差額で出る。'
        },
        {
          title: 'なぜ？ T勘定を書くと迷わない',
          paras: ['「足すのか引くのか」を丸暗記すると、すぐ逆になる。T勘定を書けば、どの数字がどちら側かは、増えるか減るかで決まる。', '売掛金は資産なので、増える掛け売上は借方、減る入金や貸倒れは貸方。期末残高（balance c/d）は、左右をそろえるために合計が少ない側に書く。売掛金なら貸方、買掛金なら借方。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①貸倒引当金（allowance for receivables）の増減を売掛金の勘定に入れる。引当金は別の勘定なので入れない ②現金売上を売掛金の勘定に入れる ③期首と期末を逆にする ④受けた割引を買掛金の勘定に入れ忘れる。' },
          paras: ['貸倒れの償却（irrecoverable debt written off）は、お客さんへの請求そのものを消すので売掛金の勘定に入る。引当金は「回収できないかも」という見積りなので入らない（L73）。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['分からない数字は、T勘定の左右の差額（balancing figure）で出す', '掛け売上 ＝ 入金 ＋ 貸倒れ など ＋ 期末売掛金 − 期首売掛金', '売上 ＝ 掛け売上 ＋ 現金売上。貸倒引当金は売掛金の勘定に入れない']
        },
        {
          title: '英単語',
          words: [
            ['balancing figure', 'バランシング・フィギュア', '左右の差額で出す数字'],
            ['receivables control account', '', '売掛金統制勘定'],
            ['payables control account', '', '買掛金統制勘定'],
            ['credit sales / cash sales', '', '掛け売上 / 現金売上'],
            ['credit purchases', '', '掛け仕入'],
            ['irrecoverable debts written off', '', '貸倒れの償却'],
            ['sales returns / purchase returns', '', '売上戻り / 仕入戻し'],
            ['contra', 'コントラ', '売掛金と買掛金の相殺']
          ]
        }
      ],
      quiz: [
        { q: 'Trade receivables were $5,000 at the start of the year and $6,500 at the end. Cash received from credit customers was $48,000 and irrecoverable debts of $700 were written off. What were the credit sales for the year?', type: 'number', answer: 50200, unit: '$', explain: '右側（入金 $48,000 ＋ 貸倒れ $700 ＋ 期末 $6,500）＝ $55,200。掛け売上 ＝ $55,200 − 期首 $5,000 ＝ $50,200。' },
        { q: 'Trade payables were $4,000 at the start of the year and $3,600 at the end. Payments to suppliers were $27,000 and discounts received were $500. What were the credit purchases for the year?', choices: ['$26,600', '$27,100', '$27,900', '$26,100'], answer: 1, explain: '$27,000 ＋ $500 ＋ $3,600 − $4,000 ＝ $27,100。受けた割引を忘れると $26,600、割引を引くと $26,100、期首と期末を逆にすると $27,900。' },
        { q: '売掛金の勘定（receivables control account）に入れないものは？', choices: ['掛け売上', 'お客さんからの入金', '貸倒れの償却', '貸倒引当金の増加'], answer: 3, explain: '貸倒引当金は「回収できないかも」という見積りで、別の勘定に記録する。売掛金そのものは減らさないので、売掛金の勘定には入れない。' },
        { q: '家賃の支払いは $6,000。期首に前払い $500、期末に前払い $800 がある。損益計算書の家賃は？', choices: ['$6,300', '$6,000', '$5,700', '$7,300'], answer: 2, explain: '$500 ＋ $6,000 − $800 ＝ $5,700。期首の前払いは今年の費用になり、期末の前払いは来年の分。$6,300 は前払いの足し引きを逆にした答え。' },
        { q: 'At the start of the year a business owed $200 for electricity. During the year it paid $1,800. At the end of the year it owed $350. What is the electricity expense for the year?', choices: ['$1,650', '$1,950', '$2,350', '$1,800'], answer: 1, explain: '$1,800 − $200 ＋ $350 ＝ $1,950。期首の未払い $200 は去年の費用なので引き、期末の未払い $350 は今年の費用なので足す。$1,650 は逆、$2,350 は両方足した答え。' }
      ]
    },
    {
      id: 'L103',
      no: 103,
      title: '現金・預金の要約で不明額を求める',
      goal: 'レジの現金と銀行預金の1年間の動きをまとめ、差額から現金売上・引出し・盗まれた現金などを計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G6(a)iii'],
      slides: [
        {
          title: '財布から消えたお金',
          paras: ['朝、財布に 5,000円 あった。ATM で 10,000円 下ろした。昼ごはん 1,200円 と本 1,800円 のレシートがある。夜に数えたら 3,000円 だった。'],
          after: '入った 15,000円 から、分かっている出費 3,000円 と残り 3,000円 を引くと 9,000円。これが「どこに使ったか記録がない」お金になる。'
        },
        {
          title: 'レジのお金を追いかける',
          paras: ['たこ焼き屋は現金売上をレジに入れる。そこから賃金や材料の一部を現金で払い、オーナーも生活費を抜く。残りは銀行に預ける。これを預け入れ（bankings）という。', 'レジには、お釣り用の現金（float）を少し残しておく。'],
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="レジに入ったお金と出ていったお金は同じ額" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">レジのお金の1年間</text><text x="105" y="62" text-anchor="middle" fill="var(--quiet)">入ってきた</text><text x="335" y="62" text-anchor="middle" fill="var(--quiet)">出ていった・残った</text><rect x="20" y="76" width="170" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="102" text-anchor="middle" fill="var(--ink)">期首のレジ</text><text x="105" y="124" text-anchor="middle" font-weight="600" fill="var(--ink)">$200</text><rect x="20" y="148" width="170" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="105" y="174" text-anchor="middle" fill="var(--ink)">現金売上</text><text x="105" y="196" text-anchor="middle" font-weight="600" fill="var(--ink)">？</text><path d="M196 178H236" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M244 178L234 172V184Z" fill="var(--edge)"/><rect x="250" y="76" width="170" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="99" text-anchor="middle" fill="var(--ink)">預け入れ $32,000</text><rect x="250" y="120" width="170" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="143" text-anchor="middle" fill="var(--ink)">賃金 $4,800</text><rect x="250" y="164" width="170" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="187" text-anchor="middle" fill="var(--ink)">仕入 $1,500</text><rect x="250" y="208" width="170" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="231" text-anchor="middle" fill="var(--ink)">オーナー $6,000</text><rect x="250" y="252" width="170" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="275" text-anchor="middle" fill="var(--ink)">期末のレジ $300</text><text x="220" y="322" text-anchor="middle" fill="var(--ink)">入った合計 ＝ 出た合計 ＝ $44,600</text></svg>`,
          caption: '右の合計は $44,600。左も同じになるので、現金売上 ＝ $44,600 − $200 ＝ $44,400。'
        },
        {
          title: '現金の要約（cash summary）',
          paras: ['レジの1年をT勘定にまとめたものが現金の要約。期首と入ってきたお金は借方、出ていったお金と期末は貸方に書く。'],
          tAccount: { name: 'Cash（レジ）', debit: [['Balance b/d', '200'], ['Cash sales（差額）', '44,400']], credit: [['Bank（預け入れ）', '32,000'], ['Wages', '4,800'], ['Purchases', '1,500'], ['Drawings', '6,000'], ['Balance c/d', '300']] },
          formula: '現金売上 ＝ 預け入れ ＋ 現金での支払い ＋ 引出し ＋ 期末 − 期首'
        },
        {
          example: {
            problem: 'たこ焼き屋の預金は期首 $1,800、期末 $2,300。入金はレジからの預け入れ $32,000 と、掛けのお客さんから $15,000。支払いは仕入先 $28,000、家賃 $6,000、その他の費用 $3,500。オーナーが銀行から引き出した額は？',
            steps: ['預金の要約（bank summary）を書く。期首と入金は借方、支払いと期末は貸方', '借方の合計: $1,800 ＋ $32,000 ＋ $15,000 ＝ $48,800', '分かっている貸方: $28,000 ＋ $6,000 ＋ $3,500 ＋ $2,300 ＝ $39,800', '引出し ＝ $48,800 − $39,800 ＝ $9,000', 'レジから抜いた $6,000 と合わせて、1年の引出しは $15,000'],
            answer: '銀行からの引出しは $9,000（引出しの合計は $15,000）'
          }
        },
        {
          title: 'なぜ？ 預け入れは2回数えない',
          paras: ['レジから銀行へ $32,000 を預けても、お店のお金は1円も増えていない。現金が預金に場所を変えただけ。', 'だから現金の要約では貸方（出ていく）、預金の要約では借方（入ってくる）に同じ額を書く。2つを合わせると打ち消し合う。売上として数えるのは、レジに入った現金売上だけ。']
        },
        {
          title: '差額は売上とは限らない',
          paras: ['差額で出るのは、その要約で「1つだけ分からない数字」。現金売上が分からなければ現金売上、引出しが分からなければ引出しになる。', '現金売上が別の方法（次のレッスンの利益率）で分かっているのに、レジのお金が足りないことがある。その差額は、盗まれた現金（cash stolen）か、記録しなかった引出しと考える。', '盗まれた現金なら損益計算書の費用（損失）にする。オーナーが抜いたなら引出しに足す。どちらかは問題文で判断する。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①期首が当座借越（overdraft、銀行から借りている状態）なのに借方に書く。借越は負債なので貸方 ②預け入れを売上に足して2回数える ③レジから抜いた引出しを忘れて、引出しの合計を少なく出す。' },
          paras: ['当座借越の例: 期首に $1,000 の借越なら、預金の要約の貸方に Balance b/d $1,000 と書く。期末が借越なら、期末残高は借方に書いて左右をそろえる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期首 ＋ 入ってきた ＝ 出ていった ＋ 期末（現金も預金も同じ）', '預け入れは、現金では貸方、預金では借方。売上には足さない', '引出しの合計 ＝ レジから ＋ 銀行から']
        },
        {
          title: '英単語',
          words: [
            ['cash summary / bank summary', '', '現金の要約 / 預金の要約'],
            ['cash takings', 'キャッシュ・テイキングス', 'レジに入った現金売上'],
            ['bankings', 'バンキングス', '銀行への預け入れ'],
            ['float', 'フロート', 'レジに残すお釣り用の現金'],
            ['overdraft', 'オーバードラフト', '当座借越（銀行への借り）'],
            ['cash stolen / missing cash', '', '盗まれた現金 / 足りない現金']
          ]
        }
      ],
      quiz: [
        { q: 'A shopkeeper pays some expenses from the till and banks the rest of the takings. Cash in the till was $150 at the start of the year and $250 at the end. Bankings were $25,000, wages paid in cash were $3,000 and the owner took $4,000 from the till. What were the cash sales for the year?', type: 'number', answer: 32100, unit: '$', explain: '右側（預け入れ $25,000 ＋ 賃金 $3,000 ＋ 引出し $4,000 ＋ 期末 $250）＝ $32,250。現金売上 ＝ $32,250 − 期首 $150 ＝ $32,100。' },
        { q: 'A business had an opening bank overdraft of $1,000. Receipts were $40,000. Payments to suppliers were $30,000 and expenses paid were $5,000. The closing bank balance was $2,500 (not overdrawn). All other payments were drawings. What were the drawings?', choices: ['$3,500', '$6,500', '$8,500', '$1,500'], answer: 3, explain: '借方: 入金 $40,000。貸方: 期首の借越 $1,000 ＋ $30,000 ＋ $5,000 ＋ 期末 $2,500 ＝ $38,500。引出し ＝ $40,000 − $38,500 ＝ $1,500。借越を借方に書くと $3,500 になる。' },
        { q: 'レジから銀行へ $500 を預けた。現金の要約と預金の要約では、どう書く？', choices: ['現金は借方、預金は貸方', '現金は貸方、預金は借方', '両方とも借方（収入）', 'どちらにも書かない'], answer: 1, explain: '現金は出ていくので貸方、預金は入ってくるので借方。場所が変わっただけなので、売上としては数えない。' },
        { q: '現金売上は利益率から $30,000 と分かっている。レジは期首 $100、期末 $200。預け入れ $25,000、現金で払った費用 $2,000、記録された引出し $2,500。説明できない（足りない）現金は？', choices: ['$400', '$300', '$200', '$600'], answer: 0, explain: '借方 $100 ＋ $30,000 ＝ $30,100。貸方 $25,000 ＋ $2,000 ＋ $2,500 ＋ $200 ＝ $29,700。差額 $400 が足りない現金（盗難か記録漏れの引出し）。期首を忘れると $300、期末を忘れると $600。' },
        { q: 'Which of the following would appear on the credit side of the cash account (the till)?', choices: ['Cash sales', 'Opening cash float', 'Cash banked', 'Capital introduced in cash'], answer: 2, explain: '銀行に預けた現金はレジから出ていくので貸方。現金売上・期首のお釣り・オーナーが入れた現金は、レジに入ってくるので借方。' }
      ]
    },
    {
      id: 'L104',
      no: 104,
      title: 'マークアップと売上総利益率',
      goal: 'マークアップ（mark-up）と売上総利益率（margin）を区別して変換し、売上・売上原価・期末在庫・失った在庫を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G6(a)iv'],
      slides: [
        {
          title: 'フリマで服を売る',
          paras: ['1,000円で仕入れた服を 1,250円 で売った。もうけは 250円。', 'この 250円 を「仕入れ値の何%？」と見ると 25%。「売り値の何%？」と見ると 20%。同じもうけでも、比べる相手で%が変わる。']
        },
        {
          title: 'マークアップとマージン',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="マークアップは原価、マージンは売上と比べる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">同じもうけ $25 を、何と比べる？</text><text x="20" y="66" font-size="15" font-weight="600" fill="var(--ink)">マークアップ（mark-up）</text><rect x="20" y="78" width="320" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="180" y="103" text-anchor="middle" fill="var(--ink)">原価 $100</text><rect x="340" y="78" width="80" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="380" y="103" text-anchor="middle" font-weight="600" fill="var(--ink)">$25</text><path d="M20 124V130H340V124" stroke="var(--ink)" stroke-width="1.25" fill="none"/><text x="20" y="152" fill="var(--ink)">25 ÷ 原価 100 ＝ 25%</text><text x="20" y="196" font-size="15" font-weight="600" fill="var(--ink)">売上総利益率（margin）</text><rect x="20" y="208" width="320" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="180" y="233" text-anchor="middle" fill="var(--ink)">原価 $100</text><rect x="340" y="208" width="80" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="380" y="233" text-anchor="middle" font-weight="600" fill="var(--ink)">$25</text><path d="M20 254V260H420V254" stroke="var(--ink)" stroke-width="1.25" fill="none"/><text x="220" y="280" text-anchor="middle" fill="var(--ink)">売上 $125</text><text x="20" y="314" fill="var(--ink)">25 ÷ 売上 125 ＝ 20%</text></svg>`,
          caption: 'マークアップ（mark-up）は原価が基準。売上総利益率（gross profit margin、単に margin）は売上が基準。'
        },
        {
          title: '基準を 100 と置いて表にする',
          paras: ['試験では、基準になる方を 100 と置いた表（cost structure、原価構成）を書くと間違えない。売上 ＝ 売上原価 ＋ 売上総利益（L96）。'],
          table: {
            caption: '25% mark-up と 20% margin は同じ形',
            head: ['項目', 'mark-up 25%', 'margin 20%'],
            rows: [
              ['Sales', '125', '100'],
              ['Cost of sales', '100', '80'],
              ['Gross profit', '25', '20']
            ]
          },
          after: 'mark-up ＝ 売上総利益 ÷ 売上原価、margin ＝ 売上総利益 ÷ 売上。左の列で 25 ÷ 125 ＝ 20%、右の列で 20 ÷ 80 ＝ 25%。同じお店の値付けを、2通りに言っているだけ。'
        },
        {
          title: '分数で変換する',
          list: ['mark-up 1/4（25%）→ margin 1/5（20%）: 分母に分子を足す', 'margin 1/5（20%）→ mark-up 1/4（25%）: 分母から分子を引く', 'mark-up 1/2（50%）→ margin 1/3（33⅓%）', 'margin 1/3（33⅓%）→ mark-up 1/2（50%）'],
          formula: '売上原価 ＝ 売上 × (1 − margin) ＝ 売上 ÷ (1 ＋ mark-up)',
          after: '例: 売上 $60,000、margin 25% なら売上原価は $45,000。mark-up 50% で売上原価 $30,000 なら、売上は $45,000。'
        },
        {
          example: {
            problem: 'たこ焼き屋の倉庫が12月31日に火事になった。売上 $60,000、margin 25%。期首在庫 $5,000、仕入 $46,000。火事のあと残った在庫は原価 $1,500。燃えた在庫の原価は？',
            steps: ['売上原価 ＝ $60,000 × 75% ＝ $45,000', '売上原価 ＝ 期首在庫 ＋ 仕入 − 期末在庫（L34）。だから本来あるはずの期末在庫 ＝ $5,000 ＋ $46,000 − $45,000 ＝ $6,000', '燃えた在庫 ＝ $6,000 − $1,500 ＝ $4,500'],
            answer: '燃えた在庫の原価は $4,500'
          }
        },
        {
          example: {
            problem: '期首在庫 $4,000、仕入 $36,000、期末在庫 $5,000。お店はいつも原価に 40% を上乗せして売る（mark-up 40%）。売上はいくらのはず？ 記録された売上が $46,000 なら、差額は？',
            steps: ['売上原価 ＝ $4,000 ＋ $36,000 − $5,000 ＝ $35,000', '売上総利益 ＝ $35,000 × 40% ＝ $14,000（mark-up は原価に掛ける）', '売上 ＝ $35,000 ＋ $14,000 ＝ $49,000', '記録との差額 ＝ $49,000 − $46,000 ＝ $3,000。レジの現金が盗まれたか、記録しなかった引出しの可能性がある（L103）'],
            answer: 'あるはずの売上は $49,000、差額は $3,000'
          }
        },
        {
          title: '燃えた在庫はどう記録する？',
          paras: ['燃えた $4,500 は売れていないので、売上原価から外す。仕入（Purchases）を貸方で減らす。保険で戻るなら、借方は保険金の未収（流動資産）。'],
          journal: [
            { side: 'Dr', account: 'Insurance claim receivable（保険金の未収）', amount: '4,500' },
            { side: 'Cr', account: 'Purchases（仕入）', amount: '4,500' }
          ],
          after: '保険がなければ、借方は損失の費用（損益計算書）。一部だけ戻るなら、残りが費用。売上原価は $5,000 ＋ ($46,000 − $4,500) − $1,500 ＝ $45,000 で、margin から出した額と合う。',
          note: { kind: 'tip', text: 'オーナーが商品を持ち出していたら（Dr Drawings / Cr Purchases、L34）、あるはずの在庫からも引く: 期首 ＋ 仕入 − 売上原価 − 持ち出し（原価）。' }
        },
        {
          title: 'なぜ？ 利益率で穴がうまる',
          paras: ['小さなお店は、毎回ほぼ同じ値付けをする。だから売上と売上原価の比率は、1年を通してほぼ一定になる。', '売上か売上原価のどちらか一方が分かれば、比率からもう一方が出る。そこから期末在庫、燃えたり盗まれたりした在庫、足りない現金まで逆算できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'mark-up 25% なのに、売上 × 25% で売上総利益を出す。mark-up は原価に掛ける。売上から出すなら margin（20%）に直すか、売上 ÷ 1.25 で売上原価を出す。また、失った在庫は「あるはずの在庫 − 実際に残った在庫」で、残った在庫そのものではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['mark-up は原価が基準、margin は売上が基準', '25% mark-up ＝ 20% margin。分数で変換する', 'あるはずの期末在庫 − 実際の在庫 ＝ 失った在庫']
        },
        {
          title: '英単語',
          words: [
            ['mark-up', 'マークアップ', '原価に対する売上総利益の割合'],
            ['gross profit margin', '', '売上総利益率（売上に対する割合）'],
            ['cost structure', '', '原価構成（基準を100と置いた表）'],
            ['cost of sales', '', '売上原価'],
            ['gross profit', '', '売上総利益'],
            ['inventory lost / destroyed', '', '失った在庫 / 燃えた・壊れた在庫'],
            ['insurance claim receivable', '', '保険金の未収（受け取る予定の保険金）']
          ]
        }
      ],
      quiz: [
        { q: 'A business sells its goods at a mark-up of 25%. What is its gross profit margin?', choices: ['25%', '33%', '20%', '75%'], answer: 2, explain: '原価 100 に 25 を乗せて売上 125。25 ÷ 125 ＝ 20%。25% はマークアップのまま答えた間違い。' },
        { q: 'Sales for the year were $80,000 and the gross profit margin is 30%. What was the cost of sales?', type: 'number', answer: 56000, unit: '$', explain: '売上原価 ＝ $80,000 × (1 − 30%) ＝ $56,000。売上総利益は $24,000。' },
        { q: 'Opening inventory was $6,000 and purchases were $50,000. Sales were $64,000 and the business uses a mark-up of 25%. A fire destroyed inventory on the last day of the year. Inventory costing $1,800 was undamaged. What was the cost of the inventory destroyed?', choices: ['$6,200', '$3,000', '$4,800', '$1,800'], answer: 1, explain: '売上原価 ＝ $64,000 ÷ 1.25 ＝ $51,200。あるはずの在庫 ＝ $6,000 ＋ $50,000 − $51,200 ＝ $4,800。燃えた分 ＝ $4,800 − $1,800 ＝ $3,000。25% を margin として使うと $6,200 になる。$4,800 は残った在庫を引き忘れた答え。' },
        { q: 'margin が 1/3（33⅓%）のとき、mark-up は？', choices: ['33⅓%', '25%', '66⅔%', '50%'], answer: 3, explain: '売上 3 のうち利益 1、原価 2。mark-up ＝ 1 ÷ 2 ＝ 50%。分母から分子を引いて 1/2。' },
        { q: '売上原価 $40,000、mark-up 30%。売上は？', choices: ['$52,000', '$57,143', '$12,000', '$28,000'], answer: 0, explain: '売上総利益 ＝ $40,000 × 30% ＝ $12,000。売上 ＝ $40,000 ＋ $12,000 ＝ $52,000。$57,143 は 30% を margin と取り違えた答え（$40,000 ÷ 0.7）。$12,000 は利益だけ。' },
        { q: 'Inventory costing $2,000 was destroyed by a flood. The insurance company has agreed to pay the full cost. Which journal entry records this?', choices: ['Dr Purchases $2,000 / Cr Insurance claim receivable $2,000', 'Dr Insurance claim receivable $2,000 / Cr Purchases $2,000', 'Dr Insurance claim receivable $2,000 / Cr Revenue $2,000', 'No entry is needed until the cash is received'], answer: 1, explain: '保険金はこれから受け取るので資産が増えて借方。売れていない在庫を売上原価から外すため、仕入を貸方で減らす。売ったわけではないので Revenue は使わない。入金を待たずに、保険会社が払うと決まった時点で記録する。' }
      ]
    },
    {
      id: 'L105',
      no: 105,
      title: '不完全記録の総合演習',
      goal: '4つの技法を順番につなぎ、記録の少ないお店の損益計算書を作って、会計等式で検算できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['G6(a)', 'K1:F1(b)', 'K1:F2(b)'],
      slides: [
        {
          title: 'レシート箱と通帳だけで決算する',
          paras: ['ジグソーパズルは、ピースが何枚か無くても、周りのピースから形が分かる。不完全記録の総合問題も同じ。', '分かっている数字を、ここまでの4つの技法（会計等式・元帳・現金と預金の要約・利益率）で順番につなぐと、損益計算書まで作れる。FA の長い問題（Section B）でも、K1 の財務諸表を作る問題でも、このつなぎ方が問われる。']
        },
        {
          title: '解く順番',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="不完全記録の総合問題を解く6つの手順" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">解く順番</text><rect x="20" y="50" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="74" font-weight="600" fill="var(--ink)">1</text><text x="68" y="74" fill="var(--ink)">買掛金の勘定 → 掛け仕入</text><rect x="20" y="96" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="120" font-weight="600" fill="var(--ink)">2</text><text x="68" y="120" fill="var(--ink)">売掛金の勘定 → 掛け売上</text><rect x="20" y="142" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="166" font-weight="600" fill="var(--ink)">3</text><text x="68" y="166" fill="var(--ink)">預金の要約 → 預け入れ</text><rect x="20" y="188" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="212" font-weight="600" fill="var(--ink)">4</text><text x="68" y="212" fill="var(--ink)">現金の要約 → 現金売上（＋掛け売上＝売上）</text><rect x="20" y="234" width="400" height="36" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="258" font-weight="600" fill="var(--ink)">5</text><text x="68" y="258" font-weight="600" fill="var(--ink)">margin で売上原価 → 期末在庫</text><rect x="20" y="280" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="304" font-weight="600" fill="var(--ink)">6</text><text x="68" y="304" fill="var(--ink)">損益計算書 → 会計等式で検算</text></svg>`,
          caption: 'なぜこの順番？ 1つの勘定で分からない数字が1つだけになるように進めるから。預け入れが分からないと現金の要約に不明が2つ残るので、預金を先に解く。'
        },
        {
          title: '資料①: 期首と期末',
          paras: ['たこ焼き屋の20X5年。オーナーは記録をほとんどつけていない。'],
          table: {
            caption: '分かっている残高',
            head: ['項目', '1 Jan $', '31 Dec $'],
            rows: [
              ['Trade receivables', '2,400', '2,900'],
              ['Trade payables', '1,800', '2,200'],
              ['Inventory', '3,000', '？'],
              ['Cash in till（レジ）', '200', '300'],
              ['Bank', '1,500', '2,800'],
              ['Rent prepaid（前払家賃）', '400', '600'],
              ['Equipment（帳簿価額）', '10,000', '？']
            ]
          }
        },
        {
          title: '資料②: 1年の動き',
          list: ['預金: 掛けのお客さんから入金 $20,000、レジからの預け入れ ？、仕入先へ支払い $49,000、家賃 $4,800、引出し $9,000', 'レジ: 現金売上 ？。賃金を現金で $5,000 払い、残りは期末のレジ以外すべて預け入れた', '受けた割引 $400、貸倒れの償却 $300', 'margin はいつも 30%。設備の売買はなく、定率法 10% で減価償却する。ほかの資産・負債はない']
        },
        {
          example: {
            problem: 'ステップ1・2: 掛け仕入と掛け売上を出す。',
            steps: ['買掛金の借方: 支払い $49,000 ＋ 受けた割引 $400 ＋ 期末 $2,200 ＝ $51,600', '掛け仕入 ＝ $51,600 − 期首 $1,800 ＝ $49,800', '売掛金の貸方: 入金 $20,000 ＋ 貸倒れ $300 ＋ 期末 $2,900 ＝ $23,200', '掛け売上 ＝ $23,200 − 期首 $2,400 ＝ $20,800'],
            answer: '仕入 $49,800、掛け売上 $20,800'
          }
        },
        {
          example: {
            problem: 'ステップ3・4: 預け入れと現金売上を出し、売上の合計を出す。',
            steps: ['預金の貸方: 仕入先 $49,000 ＋ 家賃 $4,800 ＋ 引出し $9,000 ＋ 期末 $2,800 ＝ $65,600', '預け入れ ＝ $65,600 − 期首 $1,500 − お客さんから $20,000 ＝ $44,100', 'レジの貸方: 預け入れ $44,100 ＋ 賃金 $5,000 ＋ 期末 $300 ＝ $49,400', '現金売上 ＝ $49,400 − 期首 $200 ＝ $49,200', '売上 ＝ 掛け売上 $20,800 ＋ 現金売上 $49,200 ＝ $70,000'],
            answer: '売上（revenue）は $70,000'
          }
        },
        {
          example: {
            problem: 'ステップ5: margin 30% から売上原価と期末在庫を出す。',
            steps: ['売上原価 ＝ $70,000 × 70% ＝ $49,000', '期末在庫 ＝ 期首 $3,000 ＋ 仕入 $49,800 − 売上原価 $49,000 ＝ $3,800', '売上総利益 ＝ $70,000 − $49,000 ＝ $21,000（$70,000 × 30% と一致）'],
            answer: '期末在庫は $3,800、売上総利益は $21,000'
          }
        },
        {
          title: 'ステップ6: 損益計算書',
          table: {
            caption: 'Statement of profit or loss（20X5年）',
            head: ['項目', '$', '$'],
            rows: [
              ['Revenue', '', '70,000'],
              ['Opening inventory', '3,000', ''],
              ['Purchases', '49,800', ''],
              ['Closing inventory', '(3,800)', ''],
              ['Cost of sales', '', '(49,000)'],
              ['Gross profit', '', '21,000'],
              ['Discounts received', '', '400'],
              ['Wages', '5,000', ''],
              ['Rent（400 ＋ 4,800 − 600）', '4,600', ''],
              ['Depreciation（10,000 × 10%）', '1,000', ''],
              ['Irrecoverable debts', '300', ''],
              ['Total expenses', '', '(10,900)']
            ],
            total: ['Profit for the year', '', '10,500']
          }
        },
        {
          title: '会計等式で検算する',
          table: {
            caption: '純資産（資本）',
            head: ['項目', '1 Jan $', '31 Dec $'],
            rows: [
              ['Equipment', '10,000', '9,000'],
              ['Inventory', '3,000', '3,800'],
              ['Trade receivables', '2,400', '2,900'],
              ['Rent prepaid', '400', '600'],
              ['Cash in till', '200', '300'],
              ['Bank', '1,500', '2,800'],
              ['Trade payables', '(1,800)', '(2,200)']
            ],
            total: ['Net assets', '15,700', '17,200']
          },
          formula: '15,700 ＋ 利益 10,500 − 引出し 9,000 ＝ 17,200',
          after: '期首資本に利益を足し、引出しを引くと、期末の純資産とぴったり合う。合わなければ、どこかのステップで数字を取り違えている。'
        },
        {
          title: 'よくある間違いと K1',
          note: { kind: 'warn', text: '①家賃を支払った $4,800 のまま費用にする（前払いを調整して $4,600） ②預け入れ $44,100 を売上に足して2回数える ③margin 30% を mark-up と取り違え、売上 ÷ 1.3 で売上原価を出す ④減価償却や貸倒れなど、現金が動かない費用を入れ忘れる。' },
          paras: ['K1 では、不完全記録は独立した項目ではない。財政状態計算書や損益計算書を作る問題の中で「不完全記録の技法を使う」形で出る。技法は FA と同じ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['1つの勘定で分からない数字が1つになるように、順番に解く', '買掛金・売掛金 → 預金 → 現金 → 利益率 → 損益計算書', '最後に「期首資本 ＋ 利益 − 引出し ＝ 期末の純資産」で検算する'],
          words: [
            ['balancing figure', '', '差額で出す数字'],
            ['bankings', '', '銀行への預け入れ'],
            ['gross profit margin', '', '売上総利益率'],
            ['profit for the year', '', '当期利益']
          ]
        }
      ],
      quiz: [
        { q: 'Trade receivables were $3,000 at the start of the year and $3,500 at the end. Cash received from credit customers was $30,000 and irrecoverable debts of $400 were written off. Cash sales were $10,000. What was the total sales revenue for the year?', type: 'number', answer: 40900, unit: '$', explain: '掛け売上 ＝ $30,000 ＋ $400 ＋ $3,500 − $3,000 ＝ $30,900。売上 ＝ $30,900 ＋ 現金売上 $10,000 ＝ $40,900。' },
        { q: 'Sales were $40,000 and the gross profit margin is 25%. Opening inventory was $4,000 and purchases were $31,000. What was the closing inventory?', choices: ['$3,000', '$10,000', '$5,000', '$35,000'], answer: 2, explain: '売上原価 ＝ $40,000 × 75% ＝ $30,000。期末在庫 ＝ $4,000 ＋ $31,000 − $30,000 ＝ $5,000。25% を mark-up と取り違えて $40,000 ÷ 1.25 ＝ $32,000 にすると $3,000 になる。$10,000 は売上総利益。' },
        { q: '預金の要約では「預け入れ」だけが分からない。現金の要約では「預け入れ」と「現金売上」の2つが分からない。どう解く？', choices: ['先に現金の要約で現金売上を出す', '先に預金の要約で預け入れを出し、それを現金の要約に入れて現金売上を出す','預け入れを現金売上と同じ額と考える', '預け入れは無視して現金売上だけ出す'], answer: 1, explain: '1つの勘定で分からない数字が1つなら差額で出せる。現金の要約は不明が2つなので、先に預金で預け入れを出す。' },
        { q: 'Opening capital was $20,000 and closing capital was $24,000. Drawings were $7,000 and capital introduced was $1,000. What was the profit for the year?', choices: ['$12,000', '$4,000', '$3,000', '$10,000'], answer: 3, explain: '$24,000 − $20,000 ＋ $7,000 − $1,000 ＝ $10,000。$12,000 は拠出を足した答え、$3,000 は引出しを足し忘れた答え、$4,000 は資本の増加だけ。' },
        { q: '家賃の支払いは $7,200。期首に未払い $300、期末に未払い $600 がある。損益計算書の家賃はいくら？', type: 'number', answer: 7500, unit: '$', explain: '$7,200 − 期首の未払い $300 ＋ 期末の未払い $600 ＝ $7,500。期首の未払いは去年の費用を今年払った分なので引く。' },
        { q: '総合問題で、預け入れ $44,100 を現金売上 $49,200 と掛け売上 $20,800 に足して、売上を $114,100 とした。何が間違い？', choices: ['預け入れはレジの現金が銀行に移っただけで、売上をもう一度数えている', '掛け売上を足してはいけない', '現金売上を足してはいけない', '間違いはない'], answer: 0, explain: '預け入れの中身は、すでに数えた現金売上の一部。足すと2回数えになる。正しい売上は $20,800 ＋ $49,200 ＝ $70,000。' }
      ]
    }
  ],
  cards: [
    { id: 'L101-1', lesson: 'L101', q: '会計等式で利益を出す式は？', a: '利益 ＝ 期末純資産 − 期首純資産 ＋ 引出し − 資本の拠出' },
    { id: 'L101-2', lesson: 'L101', q: '純資産（net assets）とは？', a: '資産 − 負債。資本と同じ額' },
    { id: 'L101-3', lesson: 'L101', q: 'なぜ引出しを足す？', a: '持ち出す前に、お店が稼いでいた分だから' },
    { id: 'L101-4', lesson: 'L101', q: 'なぜ資本の拠出を引く？', a: '稼いだのではなく、オーナーが入れて純資産が増えただけだから' },
    { id: 'L101-5', lesson: 'L101', q: 'オーナーが商品を自分用に持ち出したら？', a: '原価で引出しに含める（goods taken for own use）' },
    { id: 'L101-6', lesson: 'L101', q: '会計等式の方法の弱点は？', a: '利益の合計しか分からず、売上や費用の内訳は出ない' },
    { id: 'L102-1', lesson: 'L102', q: 'balancing figure とは？', a: 'T勘定の左右の差額で出す、1つだけ分からない数字' },
    { id: 'L102-2', lesson: 'L102', q: '掛け売上を逆算する式は？', a: '入金 ＋ 貸倒れ など ＋ 期末売掛金 − 期首売掛金' },
    { id: 'L102-3', lesson: 'L102', q: '掛け仕入を逆算する式は？', a: '支払い ＋ 受けた割引 など ＋ 期末買掛金 − 期首買掛金' },
    { id: 'L102-4', lesson: 'L102', q: '貸倒引当金の増減は売掛金の勘定に入る？', a: '入らない。別の勘定。貸倒れの償却は入る' },
    { id: 'L102-5', lesson: 'L102', q: '期首未払い・期末未払いがある費用の計算は？', a: '支払額 − 期首の未払い ＋ 期末の未払い（前払いなら逆）' },
    { id: 'L102-6', lesson: 'L102', q: '売上の合計は？', a: '掛け売上 ＋ 現金売上' },
    { id: 'L102-7', lesson: 'L102', q: '設備の購入額が分からない。どう出す？', a: '期末帳簿価額 ＋ 減価償却 ＋ 売却分の帳簿価額 − 期首帳簿価額' },
    { id: 'L103-1', lesson: 'L103', q: '現金・預金の要約の基本の形は？', a: '期首 ＋ 入ってきた ＝ 出ていった ＋ 期末' },
    { id: 'L103-2', lesson: 'L103', q: '現金売上を逆算する式は？', a: '預け入れ ＋ 現金での支払い ＋ 引出し ＋ 期末 − 期首' },
    { id: 'L103-3', lesson: 'L103', q: '預け入れ（bankings）はどちら側？', a: '現金の要約では貸方、預金の要約では借方。売上には足さない' },
    { id: 'L103-4', lesson: 'L103', q: '期首が当座借越（overdraft）なら？', a: '預金の要約の貸方に期首残高を書く' },
    { id: 'L103-5', lesson: 'L103', q: '現金売上が分かっているのにレジの現金が足りない。差額は？', a: '盗まれた現金（費用）か、記録しなかった引出し' },
    { id: 'L103-6', lesson: 'L103', q: '引出しの合計は？', a: 'レジから抜いた分 ＋ 銀行から引き出した分' },
    { id: 'L104-1', lesson: 'L104', q: 'mark-up とは？', a: '売上総利益 ÷ 売上原価。原価が基準' },
    { id: 'L104-2', lesson: 'L104', q: 'margin（gross profit margin）とは？', a: '売上総利益 ÷ 売上。売上が基準' },
    { id: 'L104-3', lesson: 'L104', q: '25% mark-up を margin にすると？', a: '20%（原価100・利益25・売上125）' },
    { id: 'L104-4', lesson: 'L104', q: '分数での変換のコツは？', a: 'mark-up→margin は分母に分子を足す。margin→mark-up は分母から分子を引く' },
    { id: 'L104-5', lesson: 'L104', q: '売上 $60,000、margin 25% の売上原価は？', a: '$45,000（$60,000 × 75%）' },
    { id: 'L104-6', lesson: 'L104', q: '火事や盗難で失った在庫の計算は？', a: 'あるはずの期末在庫（期首 ＋ 仕入 − 売上原価）− 実際に残った在庫' },
    { id: 'L104-7', lesson: 'L104', q: '燃えた在庫に保険金が出るときの仕訳は？', a: 'Dr Insurance claim receivable / Cr Purchases（原価で）。保険がなければ借方は費用' },
    { id: 'L105-1', lesson: 'L105', q: '不完全記録の総合問題を解く順番は？', a: '買掛金・売掛金 → 預金 → 現金 → 利益率 → 損益計算書 → 検算' },
    { id: 'L105-2', lesson: 'L105', q: 'なぜ預金の要約を現金の要約より先に解く？', a: '預け入れを出すと、現金の要約の不明が現金売上だけになるから' },
    { id: 'L105-3', lesson: 'L105', q: '最後の検算の式は？', a: '期首資本 ＋ 利益 − 引出し ＝ 期末の純資産' },
    { id: 'L105-4', lesson: 'L105', q: '家賃の支払い $4,800、期首前払 $400、期末前払 $600。費用は？', a: '$4,600（$400 ＋ $4,800 − $600）' },
    { id: 'L105-5', lesson: 'L105', q: 'K1 で不完全記録はどう出る？', a: '財務諸表を作る問題の中で、技法として使う形で出る' }
  ]
});
