(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 15,
  part: 9,
  partTitle: '売掛金と買掛金',
  lessons: [
    {
      id: 'L73',
      no: 73,
      title: '貸倒引当金の設定と増減',
      goal: '「戻らないかもしれない売掛金」の見込みを貸倒引当金として記録し、毎年の増減の仕訳を書けるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D8(h)', 'K1:C7(f)'],
      slides: [
        {
          title: 'ツケは全部は戻らない',
          paras: ['近所の居酒屋が、常連100人にツケ（後払い）で合計50万円を貸している。経験では、毎年だいたい2%、つまり1万円は戻ってこない。', 'ただ、今の時点では「誰が」払わないかは分からない。だから店主は「1万円くらいは戻らないかも」と先にメモしておく。このメモが貸倒引当金の考え方。']
        },
        {
          title: 'たこ焼き屋の売掛金',
          paras: ['たこ焼き屋は会社の会議用にケータリングを掛けで売っている。20X1年12月31日の売掛金（trade receivables）は $20,000。', 'L71 の貸倒れの償却は「この客はもう払えない」と確定したときだけ使う。今回は誰が払わないか分からないので、売掛金は消せない。', '代わりに、過去の経験から 5% の $1,000 を「戻らない見込み」として別の勘定に記録する。これが貸倒引当金（allowance for receivables）。シラバスでは allowance for irrecoverable debts とも書く。']
        },
        {
          title: '売掛金から引いて見る',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="売掛金から貸倒引当金を引いた残りが回収できそうな額" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">引当金は「戻らない分」の見込み</text><rect x="20" y="52" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">売掛金（全額）</text><text x="40" y="102" font-size="12.5" fill="var(--quiet)">trade receivables</text><text x="400" y="92" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">$20,000</text><text x="220" y="144" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">−</text><rect x="20" y="152" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="180" font-size="16" font-weight="600" fill="var(--ink)">貸倒引当金</text><text x="40" y="202" font-size="12.5" fill="var(--quiet)">allowance for receivables</text><text x="400" y="192" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">$1,000</text><text x="220" y="244" text-anchor="middle" font-size="26" font-weight="600" fill="var(--ink)">＝</text><rect x="20" y="252" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="280" font-size="16" font-weight="600" fill="var(--ink)">回収できそうな額</text><text x="40" y="302" font-size="12.5" fill="var(--ink)">net carrying amount</text><text x="400" y="292" text-anchor="end" font-size="20" font-weight="600" fill="var(--ink)">$19,000</text></svg>`,
          caption: '売掛金の勘定は $20,000 のまま。引当金は貸方残高の別の勘定で、売掛金を「控えめに見る」ための引き算の役。'
        },
        {
          title: '初めて作るときの仕訳',
          paras: ['戻らない見込みの分は、今年の費用にする。費用の増加は借方。引当金は売掛金（資産）を減らす側の勘定なので、増えるときは貸方。'],
          journal: [
            { side: 'Dr', account: 'Irrecoverable debts expense（貸倒れ費用）', amount: '1,000' },
            { side: 'Cr', account: 'Allowance for receivables（貸倒引当金）', amount: '1,000' }
          ],
          after: '売掛金（Trade receivables）の勘定には何も書かない。客ごとの売掛金はそのまま残り、これまでどおり回収を続ける。'
        },
        {
          title: '必要な額の決め方',
          paras: ['試験では、期末に必要な引当金の額（required allowance）が次のどれかで与えられる。'],
          list: ['金額そのもの（「$1,800 必要」）', '売掛金の % （償却した後の売掛金に掛ける）', '年齢別売掛金分析（L70）を使い、古い売掛金ほど高い % を掛ける'],
          table: { caption: '年齢別に率を変える例', head: ['経過日数', '売掛金 $', '引当金 $'], rows: [['30日以内', '10,000', '100（1%）'], ['31〜60日', '4,000', '200（5%）'], ['60日超', '2,000', '400（20%）']], total: ['合計', '16,000', '700'] }
        },
        {
          title: '翌年からは差額だけ動かす',
          paras: ['20X2年末の売掛金は $26,000。5% なら必要な引当金は $1,300。引当金はすでに $1,000 あるので、足りないのは $300 だけ。仕訳は Dr Irrecoverable debts expense $300 / Cr Allowance for receivables $300。'],
          formula: '今年の増減 ＝ 期末に必要な額 − 期首の引当金',
          tAccount: { name: 'Allowance for receivables（20X2）', debit: [], credit: [['Balance b/d', '1,000'], ['Irrecoverable debts expense', '300']], balance: { side: 'debit', label: 'Balance c/d', amount: '1,300' } }
        },
        {
          title: '引当金が減るとき',
          paras: ['20X3年末の売掛金は $18,000。5% なら必要なのは $900。今ある $1,300 は $400 多すぎるので、$400 減らす。'],
          journal: [
            { side: 'Dr', account: 'Allowance for receivables', amount: '400' },
            { side: 'Cr', account: 'Irrecoverable debts expense', amount: '400' }
          ],
          after: '費用の勘定が貸方に動くので、今年の費用が $400 減り、利益が $400 増える。'
        },
        {
          title: '例題: 償却と引当金を両方やる',
          example: {
            problem: '20X4年末、売掛金の元帳残高は $35,000。このうち客 Mori の $2,000 は回収できないと確定した。引当金は残りの売掛金の 4% にする。期首の引当金は $1,500。引当金の増減と、今年の貸倒れ費用の合計は？',
            steps: ['先に償却する: Dr Irrecoverable debts expense $2,000 / Cr Trade receivables $2,000。売掛金は $35,000 − $2,000 ＝ $33,000', '必要な引当金: $33,000 × 4% ＝ $1,320', '差額: $1,320 − $1,500 ＝ −$180。$180 の減少', '仕訳: Dr Allowance for receivables $180 / Cr Irrecoverable debts expense $180', '今年の貸倒れ費用: $2,000 − $180 ＝ $1,820'],
            answer: '引当金を $180 減らす。貸倒れ費用の合計は $1,820。'
          }
        },
        {
          title: 'なぜ？ 確定前に費用にする理由',
          paras: ['戻らない売掛金は、売ったその年の損失。翌年に客が倒産してから費用にすると、売上は今年、損失は来年と、ずれてしまう。発生主義で同じ年に合わせるため、見込みの段階で費用にする。', 'また、戻らないと分かっている分まで資産に数えると、会社を実際より良く見せてしまう。'],
          note: { kind: 'warn', text: 'よくある間違い: ①期末に必要な額の全部を費用にする（動かすのは差額だけ）。②償却する前の売掛金に % を掛ける。③増えるときに引当金を借方にする（増加は貸方）。④引当金を使って売掛金を減らす（償却は費用と売掛金で行う）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['引当金は「誰か分からないが戻らなさそうな分」。売掛金は直接減らさない', '増やす: Dr 貸倒れ費用 / Cr 引当金。減らす: その逆', '動かすのは「期末に必要な額 − 期首の額」。% は償却後の売掛金に掛ける']
        },
        {
          title: '英単語',
          words: [
            ['allowance for receivables', '', '貸倒引当金'],
            ['allowance for irrecoverable debts', '', '貸倒引当金（シラバスの書き方）'],
            ['irrecoverable debts expense', '', '貸倒れ費用（損益計算書の費用）'],
            ['increase / decrease in allowance', '', '引当金の増加 / 減少'],
            ['required allowance', '', '期末に必要な引当金の額'],
            ['amount charged to profit or loss in respect of the allowance', '', '引当金について今年 SPL に入る額（増減だけ）'],
            ['balance b/d (brought down)', '', '前期繰越（期首の残高）']
          ]
        }
      ],
      quiz: [
        { q: '貸倒引当金を増やすときの仕訳は？', choices: ['Dr 貸倒れ費用 / Cr 貸倒引当金', 'Dr 貸倒引当金 / Cr 貸倒れ費用', 'Dr 貸倒れ費用 / Cr 売掛金', 'Dr 売掛金 / Cr 貸倒引当金'], answer: 0, explain: '費用が増える（借方）、引当金が増える（貸方）。2つ目は減らすときの仕訳。3つ目は特定の客の貸倒れを償却するときの仕訳で、引当金とは別。' },
        { q: 'A business has trade receivables of $40,000 at 31 December 20X2. An allowance for receivables of 4% is required. The allowance brought forward is $1,200. What is the charge to the statement of profit or loss for the allowance for the year?', type: 'number', answer: 400, unit: '$', explain: '必要な額は $40,000 × 4% ＝ $1,600。すでに $1,200 あるので、費用にするのは差額の $400。$1,600 は期末残高の全部を費用にしてしまったときの間違い。' },
        { q: 'At 31 March 20X3 the allowance for receivables needs to be $1,800. The allowance at 1 April 20X2 was $2,300. Which journal entry is needed?', choices: ['Dr Allowance for receivables $500, Cr Irrecoverable debts expense $500', 'Dr Irrecoverable debts expense $500, Cr Allowance for receivables $500', 'Dr Irrecoverable debts expense $1,800, Cr Allowance for receivables $1,800', 'Dr Allowance for receivables $1,800, Cr Trade receivables $1,800'], answer: 0, explain: '$2,300 から $1,800 に $500 減らす。引当金を減らすので借方、費用が減るので貸方。2つ目は増やすときの向きで逆。3つ目は差額ではなく全額。' },
        { q: '売掛金の元帳残高 $50,000 のうち $3,000 を貸倒れとして償却する。引当金は残りの売掛金の 3%。期首の引当金は $1,200。引当金はどう動く？', choices: ['$210 増やす', '$300 増やす', '$1,410 増やす', '$210 減らす'], answer: 0, explain: '償却後の売掛金は $47,000。必要な引当金は $47,000 × 3% ＝ $1,410。$1,410 − $1,200 ＝ $210 の増加。$300 は償却前の $50,000 に % を掛けた間違い。$1,410 は差額でなく全額。' },
        { q: 'At 31 December 20X5, trade receivables are $52,000 before writing off a debt of $2,000. The allowance for receivables is to be 4% of receivables. The allowance at 1 January 20X5 was $1,500. What is the amount charged to profit or loss in respect of the allowance for receivables for the year?', choices: ['$500', '$2,000', '$2,500', '$580'], answer: 0, explain: '償却後の売掛金は $50,000。必要な引当金は $50,000 × 4% ＝ $2,000。問われているのは引当金の分だけなので、増減の $2,000 − $1,500 ＝ $500。$2,000 は期末残高そのもの（SFP の数字）。$2,500 は償却 $2,000 を足した貸倒れ費用の合計で、引当金の分だけではない。$580 は償却前の $52,000 に 4% を掛けた間違い（$2,080 − $1,500）。' },
        { q: '貸倒引当金を作るとき、売掛金（Trade receivables）の勘定を直接減らさないのはなぜ？', choices: ['どの客が払わないかまだ分からず、客ごとの売掛金を消せないから', '引当金は負債なので、売掛金とは関係ないから', '売掛金は一度記録したら減らしてはいけないから', '引当金は税金の計算だけに使うから'], answer: 0, explain: '特定の客の回収不能が確定したら売掛金を償却する（L71）。引当金は「誰か分からない見込み」なので、売掛金は残したまま別の勘定で引く。引当金は負債ではなく、資産を減らす側の勘定。' }
      ]
    },
    {
      id: 'L74',
      no: 74,
      title: '貸倒れの SPL・SFP への影響と表示',
      goal: '償却・引当金の増減・回収が利益と資産にどう効くかを説明し、損益計算書と財政状態計算書の数字を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D8(g)', 'D8(i)', 'K1:C7(e)'],
      slides: [
        {
          title: '貸したお金を数え直す',
          paras: ['友達3人に合わせて3万円を貸している。1人は連絡が取れなくなり、1万円はもう戻らない。残り2万円も、少し戻らないかもしれない。', '自分の資産を数えるとき、戻らない1万円は外し、残りも控えめに数える。そして外した分は「損した」と記録する。資産が減った分だけ、損が出る。会社でもこの2つはいつもセットで動く。']
        },
        {
          title: '4つの出来事と影響',
          paras: ['貸倒れに関係する出来事は4つ。どれも、利益と純資産（資産 − 負債）が同じ向きに同じ額だけ動く。'],
          table: { head: ['出来事', '利益', '純資産'], rows: [['貸倒れの償却', '減る', '減る（売掛金）'], ['引当金の増加', '減る', '減る（売掛金の純額）'], ['引当金の減少', '増える', '増える（売掛金の純額）'], ['償却済み債権の回収', '増える', '増える（現金）']] }
        },
        {
          title: '損益計算書では1行にまとめる',
          paras: ['損益計算書（SPL）には、4つをまとめた「貸倒れ費用（irrecoverable debts expense）」を費用として1行で載せる。会社の財務諸表では、この費用は管理費（administrative expenses）の中に含めることが多い。'],
          formula: '貸倒れ費用 ＝ 償却額 ＋ 引当金の増加（または − 減少）− 回収額',
          after: 'SPL に入るのは引当金の「今年の増減」だけ。引当金の期末残高そのものは SPL に入らない。'
        },
        {
          title: '財政状態計算書では純額',
          paras: ['財政状態計算書（SFP）では、売掛金を流動資産に載せる。金額は「償却後の売掛金 − 引当金」の純額。引当金は負債の欄には載せない。'],
          table: { caption: 'SFP（抜粋）の形', head: ['Current assets（流動資産）', '$'], rows: [['Trade receivables（償却後）', '20,000'], ['Less: allowance for receivables', '(1,000)']], total: ['Trade receivables（純額）', '19,000'] }
        },
        {
          title: '例題: 期末の調整をまとめて',
          example: {
            problem: '20X5年12月31日。調整前の売掛金は $48,500。(1) 倒産した客 Ono の $1,500 を償却する。(2) 20X4年に償却した客 Sato から $300 が入金されたが、まだ記録していない。(3) 引当金は売掛金の 3%。期首の引当金は $1,000。SPL の貸倒れ費用と、SFP の売掛金は？',
            steps: ['償却: $48,500 − $1,500 ＝ $47,000（Dr Irrecoverable debts expense / Cr Trade receivables $1,500）', '必要な引当金: $47,000 × 3% ＝ $1,410', '引当金の増加: $1,410 − $1,000 ＝ $410（Dr Irrecoverable debts expense / Cr Allowance $410）', '回収（L72）: Dr Bank $300 / Cr Irrecoverable debts expense $300。もう売掛金はないので売掛金は動かさない', 'SPL の費用: $1,500 ＋ $410 − $300 ＝ $1,610', 'SFP の売掛金: $47,000 − $1,410 ＝ $45,590'],
            answer: '貸倒れ費用は $1,610、SFP の売掛金（純額）は $45,590。'
          }
        },
        {
          title: '問われている数字を見分ける',
          paras: ['体重計で「今の体重は？」と「この1年で何kg増えた？」は別の質問。引当金も同じで、今ある残高と、今年の増減（SPL に入る額）を分けて読む。'],
          table: { caption: '例題で、問い方ごとの答え', head: ['英語の問い方', '何の数字', '$'], rows: [['amount charged to profit or loss in respect of the allowance', '引当金の増減だけ', '410'], ['total irrecoverable debts expense', '償却 1,500 ＋ 増加 410 − 回収 300', '1,610'], ['allowance for receivables (SFP)', '引当金の期末残高', '1,410'], ['net trade receivables (SFP)', '47,000 − 1,410', '45,590']] },
          after: '利益は $1,610 減る。純資産も、売掛金の純額が $47,500 から $45,590 へ $1,910 減り、現金が $300 増えて、同じ $1,610 減る。'
        },
        {
          title: 'よく出る形: 回収を売掛金に記録していた',
          paras: ['試験では「償却済みの客から $300 が入金され、Dr Bank / Cr Trade receivables と記録されていた」という形でもよく出る。売掛金はもう消してあるので、このままだと売掛金が $300 少なすぎ、費用は $300 多すぎる。', '直す仕訳で売掛金を元に戻し、費用を減らす。売掛金が変わるので、引当金の % はこの修正の後の売掛金に掛ける。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '300' },
            { side: 'Cr', account: 'Irrecoverable debts expense（貸倒れ費用）', amount: '300' }
          ]
        },
        {
          title: 'なぜ？ 純額で載せる理由',
          paras: ['財政状態計算書は、会社が持っているものを正直に伝える写真。売掛金の帳簿の合計ではなく「実際に回収できそうな額」を見せる方が、読む人にとって役に立つ（忠実な表現）。', '一方、元帳では売掛金と引当金を分けておく。客ごとの売掛金を残しておかないと、請求や回収の管理ができなくなるから。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①引当金の期末残高を SPL の費用にする（入るのは増減だけ）。②引当金を負債として載せる（売掛金から引く）。③回収を売掛金の貸方に記録したまま直さない（売掛金が少なすぎ、費用が多すぎる）。④引当金の減少を費用に足してしまう（減少は費用のマイナス）。' },
          paras: ['引当金の減少額が償却額より大きいと、貸倒れ費用はマイナス（利益を増やす側）になることもある。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SPL: 貸倒れ費用 ＝ 償却 ＋ 引当金の増加（− 減少）− 回収', 'SFP: 売掛金は「償却後の売掛金 − 引当金」の純額で流動資産に', '利益と純資産は、いつも同じ額だけ動く']
        },
        {
          title: '英単語',
          words: [
            ['irrecoverable debts expense', '', '貸倒れ費用'],
            ['write off', 'ライトオフ', '償却する（帳簿から消す）'],
            ['debt recovered', '', '償却済み債権の回収'],
            ['net trade receivables', '', '引当金を引いた後の売掛金'],
            ['current assets', '', '流動資産'],
            ['administrative expenses', '', '管理費（会社の SPL の費用区分）']
          ]
        }
      ],
      quiz: [
        { q: '貸倒引当金の期末残高は、財務諸表のどこに出る？', choices: ['SFP の流動資産で、売掛金から引く', 'SFP の負債', 'SFP の資本', 'SPL の費用（全額）'], answer: 0, explain: '引当金は売掛金を減らす側の勘定なので、流動資産の売掛金から引いて純額で示す。負債ではない。SPL に入るのは今年の増減だけで、期末残高の全額ではない。' },
        { q: 'At 31 December 20X6, trade receivables are $60,000 before writing off a debt of $2,000. The allowance for receivables is to be 5% of receivables. The allowance at 1 January 20X6 was $2,500. What is the total irrecoverable debts expense for the year?', type: 'number', answer: 2400, unit: '$', explain: '償却後の売掛金は $58,000。必要な引当金は $58,000 × 5% ＝ $2,900。増加は $2,900 − $2,500 ＝ $400。費用は $2,000 ＋ $400 ＝ $2,400。' },
        { q: 'Using the same information, what figure for trade receivables will appear in the statement of financial position at 31 December 20X6?', choices: ['$55,100', '$57,000', '$57,600', '$58,000'], answer: 0, explain: '$58,000 − $2,900 ＝ $55,100。$57,000 は償却前の $60,000 から $3,000（5%）を引いた間違い。$57,600 は増加額 $400 だけを引いた間違い。$58,000 は引当金を引き忘れている。' },
        { q: '前の年に償却した客から $200 を現金で回収した。今年の利益への影響は？', choices: ['$200 増える', '$200 減る', '影響しない（売掛金が増えるだけ）', '影響しない（現金が増えるだけ）'], answer: 0, explain: '仕訳は Dr Bank $200 / Cr Irrecoverable debts expense $200。費用が減るので、利益は $200 増える。現金・預金という資産も増えるので、純資産も同じだけ増える。' },
        { q: 'Trade receivables at 31 December 20X7 are $30,000. During the year, $500 was received from a customer whose debt had been written off in 20X6. The receipt was debited to the bank account and credited to trade receivables. The allowance for receivables is to be 2% of receivables. What figure for net trade receivables will appear in the statement of financial position?', choices: ['$29,890', '$29,400', '$28,910', '$30,500'], answer: 0, explain: '売掛金はもう消してあったので、Dr Trade receivables / Cr Irrecoverable debts expense $500 で直す。売掛金は $30,500。引当金は $30,500 × 2% ＝ $610。純額は $30,500 − $610 ＝ $29,890。$29,400 は修正を忘れた答え、$28,910 は $500 を逆に引いた答え、$30,500 は引当金を引き忘れた答え。' },
        { q: 'The allowance for receivables decreased from $3,000 to $2,200 during the year. No debts were written off or recovered. What is the effect on profit for the year?', choices: ['Profit increases by $800', 'Profit decreases by $800', 'Profit decreases by $2,200', 'No effect on profit'], answer: 0, explain: '引当金が $800 減ると、Dr Allowance / Cr Irrecoverable debts expense $800。費用のマイナスなので利益は $800 増える。$2,200 は期末残高を費用にしてしまった間違い。' }
      ]
    },
    {
      id: 'L75',
      no: 75,
      title: '売掛金と買掛金の相殺（contra）',
      goal: '同じ相手に対する売掛金と買掛金を相殺する仕訳を書き、相殺後の残高を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D8(j)'],
      slides: [
        {
          title: '友達との貸し借りを消し合う',
          paras: ['友達に1万円貸していて、同じ友達から3千円借りている。1万円を返してもらい、3千円を返すと、お金が2回行き来する。', '「3千円分は消し合って、残りの7千円だけ返して」と2人で決めれば、お金は1回で済む。これが相殺。']
        },
        {
          title: '客でもあり、仕入先でもある',
          paras: ['たこ焼き屋は、製粉所 Mill Co から小麦粉を掛けで買っていて、$900 の買掛金（trade payables）がある。', '同時に、Mill Co の社内イベントにたこ焼きを掛けで売っていて、$600 の売掛金（trade receivables）もある。', '2社が合意して、$600 分を消し合うことにした。これを contra（コントラ、相殺）という。']
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="同じ相手への売掛金と買掛金を相殺する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">貸し借りを消し合う（contra）</text><rect x="20" y="56" width="130" height="112" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">たこ焼き屋</text><text x="85" y="130" text-anchor="middle" font-size="12.5" fill="var(--quiet)">自分のお店</text><rect x="290" y="56" width="130" height="112" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Mill Co</text><text x="355" y="130" text-anchor="middle" font-size="12.5" fill="var(--quiet)">製粉所</text><text x="220" y="82" text-anchor="middle" fill="var(--ink)">買掛金 $900</text><path d="M152 92L280 92" stroke="var(--ink)" stroke-width="1.5" fill="none"/><path d="M280 86L290 92L280 98z" fill="var(--ink)"/><text x="220" y="136" text-anchor="middle" fill="var(--ink)">売掛金 $600</text><path d="M160 146L288 146" stroke="var(--ink)" stroke-width="1.5" fill="none"/><path d="M160 140L150 146L160 152z" fill="var(--ink)"/><rect x="20" y="192" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="226" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">相殺後: たこ焼き屋が $300 払うだけ</text><text x="220" y="282" text-anchor="middle" fill="var(--quiet)">お金の行き来は $1,500 から $300 に減る</text></svg>`,
          caption: '矢印はお金を払う向き。上がたこ焼き屋の支払い（買掛金）、下が Mill Co の支払い（売掛金）。'
        },
        {
          title: '仕訳',
          paras: ['買掛金（負債）が減るので借方。売掛金（資産）が減るので貸方。両方とも同じ額だけ減る。'],
          journal: [
            { side: 'Dr', account: 'Trade payables（買掛金）', amount: '600' },
            { side: 'Cr', account: 'Trade receivables（売掛金）', amount: '600' }
          ],
          after: '仕入先別・得意先別の元帳でも、Mill Co の買掛金の口座と売掛金の口座の両方を $600 ずつ減らす。'
        },
        {
          title: '相殺できるのは小さい方まで',
          paras: ['消し合えるのは、売掛金と買掛金のうち小さい方の額まで。$600 しか貸していないのに $900 を消すことはできない。'],
          table: { caption: 'Mill Co との残高', head: ['時点', '売掛金 $', '買掛金 $'], rows: [['相殺前', '600', '900'], ['contra', '(600)', '(600)']], total: ['相殺後', '0', '300'] }
        },
        {
          title: '例題',
          example: {
            problem: '年末の売掛金の合計は $25,000、買掛金の合計は $18,000。客の Yamada には $1,200 の売掛金があり、Yamada は仕入先でもあって $800 の買掛金がある。できるだけ大きな額で相殺することに合意した。仕訳と、相殺後の売掛金・買掛金の合計は？',
            steps: ['相殺できる額は小さい方: $800', '仕訳: Dr Trade payables $800 / Cr Trade receivables $800', '売掛金の合計: $25,000 − $800 ＝ $24,200', '買掛金の合計: $18,000 − $800 ＝ $17,200', 'Yamada への売掛金は $1,200 − $800 ＝ $400 残り、買掛金は 0 になる'],
            answer: '売掛金 $24,200、買掛金 $17,200。Yamada からはあと $400 を受け取る。'
          }
        },
        {
          title: 'なぜ？ 何が変わって、何が変わらない？',
          paras: ['現金を2回動かす手間と手数料をなくせる。お互いに「相手が払ってくれない」心配も減る。ただし、両方の会社の合意が必要。', '資産（売掛金）と負債（買掛金）が同じ額だけ減るので、純資産は変わらない。売上も費用も動かないので、利益も変わらない。現金も動かない。'],
          note: { kind: 'tip', text: 'あとで学ぶ統制勘定では、contra は売掛金の統制勘定の貸方と、買掛金の統制勘定の借方に出てくる。「contra を記録し忘れた」は、統制勘定の照合（K1 でも出る）の定番のずれの原因。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①借方と貸方を逆にする（Dr 売掛金 / Cr 買掛金にすると、両方が増えてしまう）。②大きい方の額で相殺する。③相殺で利益が出る・現金が動くと考える。④片方の元帳だけ直して、もう片方を忘れる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['contra＝同じ相手への売掛金と買掛金を、合意して消し合うこと', '仕訳は Dr Trade payables / Cr Trade receivables', '相殺できるのは小さい方まで。利益・現金・純資産は変わらない']
        },
        {
          title: '英単語',
          words: [
            ['contra', 'コントラ', '売掛金と買掛金の相殺'],
            ['set off', 'セットオフ', '相殺する'],
            ['contra entry', '', '相殺の仕訳'],
            ['trade receivables', '', '売掛金'],
            ['trade payables', '', '買掛金'],
            ['net assets', '', '純資産（資産 − 負債）']
          ]
        }
      ],
      quiz: [
        { q: 'A business has agreed a contra of $500 between the receivables and payables balances of a customer who is also a supplier. Which journal entry records the contra?', choices: ['Dr Trade payables $500, Cr Trade receivables $500', 'Dr Trade receivables $500, Cr Trade payables $500', 'Dr Cash $500, Cr Trade receivables $500', 'Dr Trade payables $500, Cr Cash $500'], answer: 0, explain: '負債（買掛金）を減らすので借方、資産（売掛金）を減らすので貸方。2つ目は逆で、両方を増やしてしまう。現金は動かないので3つ目と4つ目は間違い。' },
        { q: 'At 30 June, total trade payables are $9,000 and total trade receivables are $14,000. A customer, Lee, owes $1,100 and is also a supplier who is owed $1,500. A contra is agreed for the maximum possible amount. What are total trade payables after the contra?', type: 'number', answer: 7900, unit: '$', explain: '相殺できるのは小さい方の $1,100。買掛金は $9,000 − $1,100 ＝ $7,900。$7,500 は大きい方の $1,500 を引いた間違い。' },
        { q: '同じ相手に売掛金 $700 と買掛金 $400 がある。相殺できる最大の額は？', choices: ['$400', '$700', '$1,100', '$300'], answer: 0, explain: '消し合えるのは小さい方まで。$400 を相殺すると、売掛金 $300 が残り、買掛金は 0 になる。$300 は相殺後に残る額で、相殺額ではない。' },
        { q: 'What is the effect of a contra entry on the statement of financial position?', choices: ['Assets and liabilities both decrease', 'Assets decrease and liabilities increase', 'Assets and liabilities both increase', 'No effect on assets or liabilities'], answer: 0, explain: '売掛金（資産）と買掛金（負債）が同じ額だけ減る。純資産は変わらないが、資産と負債それぞれの合計は小さくなる。' },
        { q: 'contra の利益への影響は？', choices: ['影響しない', '相殺した額だけ利益が増える', '相殺した額だけ利益が減る', '売掛金が減るので貸倒れ費用が増える'], answer: 0, explain: '売上や費用の勘定は動かないので、利益は変わらない。回収できない売掛金を消す貸倒れとは違い、contra では買掛金という見返りがある。' }
      ]
    },
    {
      id: 'L76',
      no: 76,
      title: '取引先明細書の目的と照合',
      goal: '取引先明細書と得意先への請求明細の目的を説明し、明細書の残高と自分の元帳の残高を照合して正しい買掛金を求められるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D8(k)', 'K1:C7(g)', 'K1:B1(c)(iv)'],
      slides: [
        {
          title: 'カードの利用明細と家計簿',
          paras: ['クレジットカードの利用明細が月に1回届く。自分の家計簿と見比べると、金額がずれていることがある。', 'ずれの原因は2種類。昨日の買い物がまだ明細に載っていないだけ（タイミングの違い）か、どちらかが間違えているか。原因を1つずつ確かめて、正しい残高を決める。会社でも同じことをする。']
        },
        {
          title: '取引先明細書とは',
          paras: ['仕入先が毎月送ってくる、その月の取引の一覧と「いまいくら払ってほしいか」の明細。英語では supplier statement。'],
          formula: '残高 ＝ 前月からの残高 ＋ 請求書 − 貸方票 − 受け取った支払い',
          table: { caption: 'Kona Mill から届いた明細書（例）', head: ['日付', '内容', '$'], rows: [['1 Jun', '前月からの残高', '1,000'], ['5 Jun', '請求書（invoice）', '800'], ['12 Jun', '貸方票（credit note）', '(150)'], ['20 Jun', '受け取った支払い', '(1,000)']], total: ['30 Jun', '支払ってほしい残高', '650'] }
        },
        {
          title: '自分が作る側: 得意先への明細',
          paras: ['自分が掛けで売る側のときは、同じ形の明細を作って得意先に送る。英語では statement of account。'],
          list: ['前月からの残高', '今月の請求書（売上）', '貸方票（返品・値引き）', '受け取った支払い', '最後に「支払ってほしい残高」'],
          after: '目的は、得意先に支払いを促し、早く回収すること。得意先が自分の記録と比べて違いを知らせてくれるので、こちらの誤りも早く見つかる。'
        },
        {
          title: 'なぜ明細書と照合する？',
          list: ['自分の元帳（仕入先別の口座）が正しいか確かめる', '払いすぎ・払いもれを防ぎ、仕入先との関係を守る', '記録もれや転記ミスを早く見つけて直す', '期末に、正しい買掛金を財政状態計算書に載せる'],
          after: '明細書は会社の外から来る書類なので、自分の記録を確かめる材料として信頼できる。'
        },
        {
          title: 'ずれの原因と、直す場所',
          table: { head: ['原因', '例', '直す場所'], rows: [['タイミング', '送金途中の自分の支払い', '明細書の側で調整'], ['タイミング', '相手がまだ処理していない返品', '明細書の側で調整'], ['自分のミス', '請求書の記録もれ、転記ミス', '自分の元帳を修正'], ['相手のミス', '明細書の計算違い', '相手に連絡（明細書の側）']] },
          paras: ['タイミングの違いは、どちらも間違っていない。相手が追いつけば消える。自分の元帳を直すのは、自分の誤りやもれだけ。']
        },
        {
          title: '例題: Kona Mill との照合',
          example: {
            problem: '6月30日、Kona Mill の明細書の残高は $2,790。自分の元帳の Kona Mill の口座は $1,580（貸方残高）。違いは次の4つ。(1) 6月29日に送った $600 の支払いが明細書に載っていない。(2) 6月27日に届いた商品の請求書 $350 を記録していない。(3) $420 の請求書を $240 と記録していた。(4) 6月30日の返品 $80 を記録したが、相手はまだ貸方票を出していない。',
            steps: ['自分の元帳を直す: (2) 記録もれを足す → $1,580 ＋ $350 ＝ $1,930', '(3) 転記ミス: $420 − $240 ＝ $180 足りない → $1,930 ＋ $180 ＝ $2,110', '明細書の側を調整: (1) 送金途中の支払いを引く → $2,790 − $600 ＝ $2,190', '(4) 相手が未処理の返品を引く → $2,190 − $80 ＝ $2,110', '両方が $2,110 で一致したので照合は完了'],
            answer: '正しい買掛金は $2,110。自分の元帳には (2) と (3) の修正仕訳（Dr Purchases / Cr Trade payables $350 と $180）が必要。'
          }
        },
        {
          title: '照合を図で見る',
          svg: `<svg viewBox="0 0 440 296" role="img" aria-label="自分の元帳と明細書をそれぞれ調整して同じ残高にそろえる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">2つの残高を同じ数字にそろえる</text><rect x="20" y="52" width="190" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">自分の元帳</text><text x="115" y="102" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">$1,580</text><rect x="230" y="52" width="190" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">仕入先の明細書</text><text x="325" y="102" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">$2,790</text><text x="115" y="146" text-anchor="middle" fill="var(--ink)">＋ 記録もれ $350</text><text x="115" y="170" text-anchor="middle" fill="var(--ink)">＋ 転記ミス $180</text><text x="325" y="146" text-anchor="middle" fill="var(--ink)">− 送金途中 $600</text><text x="325" y="170" text-anchor="middle" fill="var(--ink)">− 未処理の返品 $80</text><path d="M115 184L190 212M325 184L250 212" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="100" y="214" width="240" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="242" text-anchor="middle" font-size="17" font-weight="600" fill="var(--ink)">正しい残高 $2,110</text><text x="220" y="266" text-anchor="middle" fill="var(--ink)">SFP に載せるのはこの額</text></svg>`,
          caption: '左は自分の誤りを直す。右は相手がまだ記録していないものを調整する。最後に同じ数字になれば照合完了。'
        },
        {
          title: 'なぜ？ 自分の修正後の額を載せる',
          paras: ['$600 はもう自分の銀行口座から出ているので、払う義務はない。$80 の商品も返したので、もう自分のものではない。相手の記録が追いついていないだけ。', 'だから財政状態計算書の買掛金には、明細書の $2,790 ではなく、自分の元帳を直した後の $2,110 を載せる。'],
          note: { kind: 'warn', text: 'よくある間違い: ①明細書の残高をそのまま買掛金にする。②送金途中の支払いを自分の元帳から引いて、二重に減らす。③タイミングの違いまで自分の元帳の修正仕訳にする。④明細書は必ず正しいと思い込む（相手も間違える）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['明細書は外から来る書類。自分の記録を確かめるために照合する', '自分の誤り・もれは自分の元帳を直す。タイミングの違いは明細書の側で調整する', '財政状態計算書に載せるのは、自分の元帳を直した後の残高']
        },
        {
          title: '英単語',
          words: [
            ['supplier statement', '', '取引先明細書（仕入先から届く）'],
            ['statement of account', '', '得意先に送る請求の明細'],
            ['payables ledger', '', '仕入先別の元帳'],
            ['reconciliation', 'レコンシリエーション', '照合（2つの残高をそろえること）'],
            ['payment in transit', '', '送金途中の支払い'],
            ['timing difference', '', 'タイミングの違い'],
            ['credit note', 'クレジットノート', '貸方票（返品・値引きの書類）']
          ]
        }
      ],
      quiz: [
        { q: '取引先明細書（supplier statement）とは何？', choices: ['仕入先が送ってくる、取引の一覧と支払ってほしい残高の明細', '自分が仕入先に送る、注文の内容を書いた書類', '銀行から届く、口座のお金の出入りの明細', '仕入先が商品と一緒に送ってくる、届いた品物の一覧'], answer: 0, explain: '取引先明細書は仕入先が作る、一定期間の請求書・貸方票・支払いと残高の一覧。2つ目は発注書、3つ目は銀行の明細、4つ目は出荷書（納品書）に近い。' },
        { q: 'The payables ledger account for supplier K shows a credit balance of $2,300. The supplier statement from K shows a balance of $3,050. Investigation shows: (1) an invoice for $450 has not been recorded in the payables ledger; (2) a payment of $300 sent to K has not yet been received by K. What is the correct balance owed to K?', type: 'number', answer: 2750, unit: '$', explain: '自分の元帳: $2,300 ＋ 記録もれ $450 ＝ $2,750。明細書: $3,050 − 送金途中 $300 ＝ $2,750。一致するので正しい残高は $2,750。$3,050 は明細書をそのまま使った間違い。' },
        { q: 'A supplier statement shows a balance of $4,200. The payables ledger account shows $3,600. The only difference is a payment of $600 sent on 30 June, which the supplier did not receive until 3 July. What payables balance should be reported at 30 June?', choices: ['$3,600', '$4,200', '$4,800', '$3,000'], answer: 0, explain: '支払いはもう自分の口座から出ているので、自分の元帳 $3,600 が正しい。差はタイミングの違いだけ。$3,000 は送金途中の支払いを自分の元帳からもう一度引いた間違い。' },
        { q: '照合で見つかった次のうち、自分の元帳を修正するものは？', choices: ['請求書を記録していなかった', '送った支払いが、まだ相手に届いていない', '返品したが、相手がまだ貸方票を出していない', '明細書の足し算を相手が間違えていた'], answer: 0, explain: '記録もれは自分の誤りなので、自分の元帳を直す。2つ目と3つ目はタイミングの違いで明細書の側を調整する。4つ目は相手の誤りなので相手に連絡する。' },
        { q: 'Which of the following would cause the supplier statement balance to be HIGHER than the balance on the payables ledger account?', choices: ['A payment sent to the supplier but not yet received by them', 'An invoice recorded twice in the payables ledger', 'Goods returned, recorded by the supplier but not yet in the payables ledger', 'A discount received, recorded by the supplier but not yet in the payables ledger'], answer: 0, explain: '送金途中の支払いは自分の元帳では減っているが、明細書ではまだ減っていないので明細書の方が大きい。ほかの3つは、どれも自分の元帳の方が大きくなる。' },
        { q: '自分が得意先に statement of account を送る主な目的は？', choices: ['支払いを促し、得意先と記録の違いを早く見つけて回収につなげるため', '得意先の在庫の数を確認するため', '売上税の納付額を計算するため', '得意先に新しい商品の値段を知らせるため'], answer: 0, explain: 'statement of account は、得意先に残高を知らせて支払いを促す明細。得意先が自分の記録と比べるので、違いが早く見つかり、売掛金の回収に役立つ。' }
      ]
    }
  ],
  cards: [
    { id: 'L73-1', lesson: 'L73', q: '貸倒引当金とは？', a: '誰か分からないが戻らなさそうな売掛金の見込み額。売掛金から引く' },
    { id: 'L73-2', lesson: 'L73', q: '貸倒引当金を増やす仕訳は？', a: 'Dr Irrecoverable debts expense / Cr Allowance for receivables（増えた分だけ）' },
    { id: 'L73-3', lesson: 'L73', q: '貸倒引当金を減らす仕訳は？', a: 'Dr Allowance for receivables / Cr Irrecoverable debts expense（利益が増える）' },
    { id: 'L73-4', lesson: 'L73', q: '今年動かす引当金の額の計算は？', a: '期末に必要な額 − 期首の引当金（差額だけ）' },
    { id: 'L73-5', lesson: 'L73', q: '引当金の % を掛ける前にすることは？', a: '先に貸倒れを償却して、売掛金を減らしておく' },
    { id: 'L73-6', lesson: 'L73', q: 'なぜ償却ではなく引当金を使う？', a: 'どの客が払わないかまだ分からず、客ごとの売掛金を消せないから' },
    { id: 'L73-7', lesson: 'L73', q: '"amount charged to profit or loss in respect of the allowance" は何の額？', a: '引当金の今年の増減だけ（期末に必要な額 − 期首）。期末残高ではない' },
    { id: 'L74-1', lesson: 'L74', q: 'SPL の貸倒れ費用の式は？', a: '償却額 ＋ 引当金の増加（− 減少）− 回収額' },
    { id: 'L74-2', lesson: 'L74', q: 'SFP での売掛金の金額は？', a: '償却後の売掛金 − 貸倒引当金 ＝ 純額。流動資産に載せる' },
    { id: 'L74-3', lesson: 'L74', q: '貸倒引当金の期末残高は負債？', a: '違う。売掛金から引く（資産のマイナス）' },
    { id: 'L74-4', lesson: 'L74', q: '償却済みの債権を回収したときの仕訳と利益への影響は？', a: 'Dr Bank / Cr Irrecoverable debts expense。利益が増える' },
    { id: 'L74-6', lesson: 'L74', q: '償却済み債権の入金を Cr Trade receivables にしていたら？', a: 'Dr Trade receivables / Cr Irrecoverable debts expense で直す。% はその後で掛ける' },
    { id: 'L74-5', lesson: 'L74', q: 'SPL に入るのは引当金の何？', a: '今年の増減だけ。期末残高そのものではない' },
    { id: 'L74-7', lesson: 'L74', q: 'total irrecoverable debts expense と、引当金の分の charge の違いは？', a: '合計は 償却 ＋ 引当金の増加（− 減少）− 回収。引当金の分は増減だけ' },
    { id: 'L75-1', lesson: 'L75', q: 'contra とは？', a: '同じ相手への売掛金と買掛金を、合意して消し合うこと' },
    { id: 'L75-2', lesson: 'L75', q: 'contra の仕訳は？', a: 'Dr Trade payables / Cr Trade receivables' },
    { id: 'L75-3', lesson: 'L75', q: '相殺できる最大の額は？', a: '売掛金と買掛金のうち小さい方' },
    { id: 'L75-4', lesson: 'L75', q: 'contra で変わらないものは？', a: '利益・現金・純資産。資産と負債は同じ額だけ減る' },
    { id: 'L75-5', lesson: 'L75', q: 'contra に必要な条件は？', a: '相手の会社と合意していること' },
    { id: 'L76-1', lesson: 'L76', q: '取引先明細書（supplier statement）とは？', a: '仕入先が送る、取引の一覧と支払ってほしい残高の明細' },
    { id: 'L76-2', lesson: 'L76', q: 'statement of account とは？', a: '自分が得意先に送る、取引の一覧と請求残高の明細' },
    { id: 'L76-3', lesson: 'L76', q: '照合で自分の元帳を直すのはどんなもの？', a: '自分の誤りやもれ（請求書の記録もれ、転記ミスなど）' },
    { id: 'L76-4', lesson: 'L76', q: '送金途中の支払いはどちらを調整する？', a: '明細書の側。自分の元帳はすでに正しい' },
    { id: 'L76-5', lesson: 'L76', q: 'SFP の買掛金に載せるのは？', a: '自分の元帳を修正した後の残高（明細書の残高ではない）' },
    { id: 'L76-6', lesson: 'L76', q: '取引先明細書と照合する目的は？', a: '誤り・もれを見つけ、正しい額を払い、正しい買掛金を載せるため' },
    { id: 'L76-7', lesson: 'L76', q: '明細書の残高（支払ってほしい額）の計算は？', a: '前月からの残高 ＋ 請求書 − 貸方票 − 受け取った支払い' }
  ]
});
