(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 24,
  part: 16,
  partTitle: '会社の資本と資金調達',
  lessons: [
    {
      id: 'L118',
      no: 118,
      title: '会社の資本構成（普通株・優先株・借入）',
      goal: '会社がお金を集める3つの方法（普通株・優先株・借入）の違いを説明し、どれが資本でどれが負債かを見分けられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D10(a)', 'K1:C10(a)'],
      slides: [
        {
          title: 'お金の集め方は2通り',
          paras: ['友だちとカフェを始めるとする。お金の集め方は大きく2つある。'],
          list: ['仲間になってもらう: 「お金を出すから、もうかったら分け前をちょうだい。お店のことにも口を出すよ」', 'お金を借りる: 「5年後に返して。それまで毎年5%の利息をちょうだい」'],
          after: '仲間のお金は返さなくてよいが、もうけを分ける。借りたお金は、もうかっても赤字でも、利息を払って返す。'
        },
        {
          title: '会社の3つの資金源',
          paras: ['有限責任会社（limited liability company）は、株（shares）を売ったり、お金を借りたりして資金を集める。この組み合わせを資本構成（capital structure）という。'],
          table: {
            caption: '3つの資金源と、財政状態計算書（SFP）での区分',
            head: ['資金源', 'SFP での区分'],
            rows: [
              ['普通株（ordinary shares）', '資本（equity）'],
              ['優先株（preference shares）', '償還しない → 資本、償還する → 負債'],
              ['借入（borrowings）', '負債（liability）']
            ]
          }
        },
        {
          title: '普通株（ordinary shares）＝会社のオーナー',
          list: ['株主総会で投票できる（vote）。取締役を選べる', '配当（dividend）の額は決まっていない。もうけが多ければ増え、取締役が払うと決めなければゼロのこともある', '会社をたたむとき、返してもらう順番は最後。でも、借金などを返した後の残りは全部もらえる'],
          after: '普通株は equity shares とも呼ぶ。株には額面（nominal value、par value）があり、$1 や $0.50 のように決まっている。'
        },
        {
          title: '優先株（preference shares）',
          paras: ['配当が「額面の何%」と決まっていて、普通株より先にもらえる株。'],
          list: ['例: 6% $1 preference shares → 1株につき毎年 $0.06', '普通株の配当より先に払う。会社をたたむときも普通株より先に返す', 'ふつうは投票権がない'],
          formula: '優先株の配当 ＝ 株数 × 額面 × 配当率'
        },
        {
          title: '償還する優先株は「負債」',
          list: ['償還しない優先株（irredeemable）: 会社が返す必要がない → 資本（equity）。配当は普通株と同じく、もうけの分配（持分変動計算書に載る）', '償還する優先株（redeemable）: 決まった日に会社が買い戻して返す → 負債（liability）。配当は支払利息と同じ扱いで、損益計算書の財務費用（finance costs）に入れる。SFP では借入と同じく、ふつうは非流動負債（12か月以内に償還するなら流動負債）'],
          note: { kind: 'tip', text: '償還（redeem、リディーム）＝会社がお金を返して、株を買い戻すこと。' }
        },
        {
          title: '借入（borrowings）',
          paras: ['銀行借入（bank loan）や社債（loan notes）。例えば「10% loan notes 2030」は、2030年に返す約束で、毎年額面の10%の利息を払う社債。$50,000 なら利息は毎年 $5,000。', '利息（interest）は、もうけがなくても必ず払う。利息は損益計算書の財務費用（finance costs）になる。', '返すのが12か月より先なら非流動負債、12か月以内なら流動負債。']
        },
        {
          title: '返してもらう順番',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="会社をたたむとき、借入、優先株主、普通株主の順に返す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">会社をたたむとき、返す順番</text><rect x="20" y="52" width="400" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="82" font-size="16" font-weight="600" fill="var(--ink)">① 貸した人（借入）</text><text x="400" y="82" text-anchor="end" font-size="12.5" fill="var(--quiet)">borrowings</text><text x="40" y="108" fill="var(--ink)">利息は、もうけがなくても払う</text><path d="M220 124L220 140" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="140" width="400" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="170" font-size="16" font-weight="600" fill="var(--ink)">② 優先株主</text><text x="400" y="170" text-anchor="end" font-size="12.5" fill="var(--quiet)">preference shares</text><text x="40" y="196" fill="var(--ink)">決まった率の配当を先にもらう</text><path d="M220 212L220 228" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="228" width="400" height="72" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="258" font-size="16" font-weight="600" fill="var(--ink)">③ 普通株主</text><text x="400" y="258" text-anchor="end" font-size="12.5" fill="var(--quiet)">ordinary shares</text><text x="40" y="284" fill="var(--ink)">最後。でも残りは全部もらえる</text><text x="220" y="328" text-anchor="middle" fill="var(--ink)">下ほどリスクが高く、見返りも大きい</text></svg>`,
          caption: '普通株主は一番後回しになる代わりに、会社が大きくもうければ配当も株の値打ちも大きく増える。'
        },
        {
          title: 'なぜ？ 「払う義務」があるかで分ける',
          paras: ['資本と負債を分ける本質は、名前ではなく「会社に払う義務があるか」。', '借入は、利息も元本も払う義務がある。だから負債。普通株の配当は、取締役が決めるまで払う義務がない。だから資本。', '償還する優先株は名前に「株」と付くが、決まった日に返す義務がある。中身は借金と同じなので負債にする。形より中身を優先する考え方（実質優先、substance over form）。']
        },
        {
          title: 'よくある間違い',
          paras: ['普通株や償還しない優先株の配当は、費用ではない。もうけを株主に分けただけなので、損益計算書には入れず、持分変動計算書で資本から引く。'],
          note: { kind: 'warn', text: '「preference shares だから資本」と決めつける。redeemable（償還する）なら負債で、配当は finance costs。irredeemable（償還しない）なら資本で、配当は持分変動計算書。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['資金源は3つ: 普通株・優先株・借入', '普通株と償還しない優先株は資本。償還する優先株と借入は負債', '借入の利息と、償還する優先株の配当は finance costs（費用）']
        },
        {
          title: '英単語',
          words: [
            ['capital structure', 'キャピタル ストラクチャー', '資本構成（資金の集め方の組み合わせ）'],
            ['ordinary shares / equity shares', 'オーディナリー シェアズ', '普通株'],
            ['preference shares', 'プレファレンス シェアズ', '優先株'],
            ['redeemable / irredeemable', 'リディーマブル / イリディーマブル', '償還する / 償還しない'],
            ['nominal value / par value', 'ノミナル バリュー / パー バリュー', '額面'],
            ['dividend', 'ディビデンド', '配当'],
            ['borrowings / loan notes', 'ボロウイングズ / ローン ノーツ', '借入 / 社債'],
            ['finance costs', 'ファイナンス コスツ', '財務費用（支払利息など）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is classified as a liability in the statement of financial position?', choices: ['Ordinary shares', 'Irredeemable preference shares', 'Redeemable preference shares', 'None of these'], answer: 2, explain: '償還する優先株は、決まった日に返す義務があるので負債。普通株と償還しない優先株は資本（equity）。' },
        { q: 'A company has 400,000 7% $0.50 preference shares in issue. What is the annual preference dividend?', type: 'number', answer: 14000, unit: '$', explain: '400,000 × $0.50 × 7% ＝ $14,000。額面を $1 と思い込むと $28,000 になるので注意。配当率は額面に掛ける。' },
        { q: '普通株主について正しいものは？', choices: ['配当の額が「額面の何%」と決まっている', '会社をたたむとき、借入より先に返してもらえる', '株主総会で投票でき、配当はもうけと取締役の判断で変わる', '利息を必ず受け取れる'], answer: 2, explain: '配当率が決まっているのは優先株。普通株主は返してもらう順番が最後。利息は借入に払うもの。' },
        { q: 'Dividends on redeemable preference shares are presented as:', choices: ['A deduction in the statement of changes in equity', 'Finance costs in the statement of profit or loss', 'An increase in share capital', 'Other comprehensive income'], answer: 1, explain: '償還する優先株は負債なので、その配当は支払利息と同じく finance costs。持分変動計算書で引くのは、普通株と償還しない優先株の配当。' },
        { q: '10% loan notes $50,000 の利息について正しいものは？', choices: ['もうけが出た年だけ払えばよい', '毎年 $5,000 を払う義務があり、財務費用になる', '資本の一部なので配当として扱う', '毎年 $500 を払う'], answer: 1, explain: '$50,000 × 10% ＝ $5,000。利息はもうけに関係なく払う義務があり、finance costs として損益計算書に入れる。' },
        { q: '会社をたたむとき、お金を返してもらう順番として正しいのは？', choices: ['普通株主 → 優先株主 → 貸した人', '貸した人 → 優先株主 → 普通株主', '優先株主 → 貸した人 → 普通株主'], answer: 1, explain: 'まず借入を返し、次に優先株主、最後に普通株主。普通株主は最後だが、残りは全部もらえる。' }
      ]
    },
    {
      id: 'L119',
      no: 119,
      title: '資本の中身（利益剰余金・株式払込剰余金・再評価剰余金）',
      goal: '会社の資本（equity）の中身を言い分け、その他の資本の構成要素を見つけて仕訳できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D10(b)', 'D10(c)', 'K1:C10(b)', 'K1:C10(c)'],
      slides: [
        {
          title: 'お金を封筒に分ける',
          paras: ['家計の貯金を、出どころ別に封筒に分けておくとする。「親から出してもらった分」「自分で稼いで残した分」「持っている土地が値上がりした分」。', '合計は同じでも、封筒を分けておくと「どれなら自由に使ってよいか」がひと目で分かる。会社の資本も、これと同じように出どころ別に分けて記録する。']
        },
        {
          title: '資本（equity）とは',
          paras: ['資本は、資産から負債を全部引いた残り。株主の取り分（residual interest）。'],
          formula: 'equity ＝ assets − liabilities',
          after: '個人事業では、オーナーの取り分を capital 勘定1つにまとめた。会社では、株式資本（share capital）と、それ以外の準備金（reserves）に分ける。'
        },
        {
          title: '資本の中身はどこから来た？',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="株の発行から株式資本と株式払込剰余金、値上がりから再評価剰余金、もうけから利益剰余金ができる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">資本の中身はどこから来た？</text><text x="95" y="62" text-anchor="middle" fill="var(--quiet)">出どころ</text><text x="315" y="62" text-anchor="middle" fill="var(--quiet)">資本の勘定</text><rect x="20" y="72" width="150" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="103" text-anchor="middle" font-size="15" fill="var(--ink)">株を発行</text><path d="M172 98L202 98" stroke="var(--edge)" stroke-width="1.25" fill="none"/><path d="M206 98L198 93L198 103z" fill="var(--edge)"/><rect x="210" y="72" width="210" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="94" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">株式資本</text><text x="315" y="115" text-anchor="middle" fill="var(--ink)">＋ 株式払込剰余金</text><rect x="20" y="140" width="150" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="171" text-anchor="middle" font-size="15" fill="var(--ink)">土地の値上がり</text><path d="M172 166L202 166" stroke="var(--edge)" stroke-width="1.25" fill="none"/><path d="M206 166L198 161L198 171z" fill="var(--edge)"/><rect x="210" y="140" width="210" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="171" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">再評価剰余金</text><rect x="20" y="208" width="150" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="239" text-anchor="middle" font-size="15" fill="var(--ink)">もうけ − 配当</text><path d="M172 234L202 234" stroke="var(--edge)" stroke-width="1.25" fill="none"/><path d="M206 234L198 229L198 239z" fill="var(--edge)"/><rect x="210" y="208" width="210" height="52" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="315" y="239" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">利益剰余金</text><text x="220" y="288" text-anchor="middle" fill="var(--ink)">4つを合わせたものが資本（equity）</text></svg>`,
          caption: '配当に使えるのは、強調した利益剰余金だけ（理由は後のスライド）。'
        },
        {
          title: '4つの中身',
          list: ['株式資本（share capital）: 発行した株の額面の合計。株数 × 額面', '株式払込剰余金（share premium）: 株を額面より高く発行したときの上乗せ分', '再評価剰余金（revaluation surplus）: 土地・建物を再評価して値上がりした分。まだ売っていないので実現していない', '利益剰余金（retained earnings）: これまでのもうけのうち、配当せずに会社に残した分の累計'],
          after: '株式資本と利益剰余金以外（share premium、revaluation surplus など）を、その他の資本の構成要素（other components of equity）と呼ぶ。'
        },
        {
          title: 'SFP の資本はこう並ぶ',
          table: {
            caption: 'たこ焼き株式会社の資本（20X5年12月31日）',
            head: ['Equity', '$'],
            rows: [
              ['Share capital（$0.50 ordinary shares）', '200,000'],
              ['Share premium', '30,000'],
              ['Revaluation surplus', '30,000'],
              ['Retained earnings', '120,000']
            ],
            total: ['Total equity', '380,000']
          }
        },
        {
          title: '利益剰余金の動き',
          formula: '期首 RE ＋ 当期の利益 − 配当 ＝ 期末 RE',
          paras: ['個人事業の「資本 ＋ 利益 − 引出し」と同じ形。会社で引出しにあたるのが、株主への配当（dividends）。', '例: 期首 $100,000、当期の利益 $35,000、配当 $15,000 → 期末 $100,000 ＋ $35,000 − $15,000 ＝ $120,000。']
        },
        {
          title: '再評価剰余金の仕訳',
          paras: ['土地を帳簿価額 $170,000 から $200,000 に再評価した。値上がりの $30,000 は損益計算書の利益にせず、再評価剰余金に入れる（その他の包括利益、OCI を通る）。資本が増えるので貸方。'],
          journal: [
            { side: 'Dr', account: 'Land（土地）', amount: '30,000' },
            { side: 'Cr', account: 'Revaluation surplus（再評価剰余金）', amount: '30,000' }
          ],
          after: '建物を再評価した場合は、値上がりで増えた分の減価償却（excess depreciation）を毎年、再評価剰余金から利益剰余金へ移す: Dr Revaluation surplus / Cr Retained earnings。有形固定資産の部で学んだ処理。'
        },
        {
          title: '準備金どうしの振替',
          paras: ['取締役が「このもうけは配当に回さず会社に残す」と決め、利益剰余金の一部を任意積立金（general reserve）に移すことがある。'],
          journal: [
            { side: 'Dr', account: 'Retained earnings（利益剰余金）', amount: '10,000' },
            { side: 'Cr', account: 'General reserve（任意積立金）', amount: '10,000' }
          ],
          after: '現金は動かない。資本の中で封筒を入れ替えるだけなので、資本の合計は変わらない。'
        },
        {
          title: 'なぜ？ 封筒を分ける理由',
          paras: ['株主に配当として払ってよい分を、はっきりさせるため。', '利益剰余金は実際に稼いだもうけの残りなので、配当に使える（distributable）。', '株式払込剰余金は株主が払い込んだ元手、再評価剰余金はまだ売っていない値上がり。どちらも配当には使えない（non-distributable）。元手を配ってしまうと、貸した人を守るための会社の財産が減るから。'],
          note: { kind: 'warn', text: 'よくある間違い: 準備金（reserves）を現金だと思う。利益剰余金が $120,000 あっても、現金が $120,000 あるとは限らない。もうけは建物や在庫に姿を変えていることが多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['資本＝資産 − 負債。株式資本・株式払込剰余金・再評価剰余金・利益剰余金に分ける', '利益剰余金＝期首 ＋ 当期の利益 − 配当', '資本が増えるときは貸方。配当に使えるのは利益剰余金だけ']
        },
        {
          title: '英単語',
          words: [
            ['equity', 'エクイティ', '資本（株主の取り分）'],
            ['reserves', 'リザーブズ', '準備金（株式資本以外の資本）'],
            ['share capital', 'シェア キャピタル', '株式資本'],
            ['share premium', 'シェア プレミアム', '株式払込剰余金'],
            ['revaluation surplus', 'リバリュエーション サープラス', '再評価剰余金'],
            ['retained earnings', 'リテインド アーニングズ', '利益剰余金'],
            ['other components of equity', '', 'その他の資本の構成要素'],
            ['general reserve', 'ジェネラル リザーブ', '任意積立金'],
            ['distributable', 'ディストリビュータブル', '配当に使える']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a component of equity?', choices: ['Share premium', 'Revaluation surplus', 'Retained earnings', 'Loan notes'], answer: 3, explain: 'loan notes（社債）は返す義務があるので負債。ほかの3つは資本の構成要素。' },
        { q: 'Retained earnings at 1 January were $84,000. Profit for the year was $26,000 and dividends paid were $12,000. What are retained earnings at 31 December?', type: 'number', answer: 98000, unit: '$', explain: '$84,000 ＋ $26,000 − $12,000 ＝ $98,000。配当を足してしまうと $122,000 になる。配当はもうけを株主に渡すので、利益剰余金を減らす。' },
        { q: '土地を $40,000 値上がりで再評価した。正しい仕訳は？', choices: ['Dr Land $40,000 / Cr Revaluation surplus $40,000', 'Dr Land $40,000 / Cr Revenue $40,000', 'Dr Revaluation surplus $40,000 / Cr Land $40,000', 'Dr Cash $40,000 / Cr Revaluation surplus $40,000'], answer: 0, explain: '資産（土地）が増えるので借方、資本（再評価剰余金）が増えるので貸方。まだ売っていないので収益（損益計算書）にはしない。現金も動かない。' },
        { q: 'Which reserve can normally be used to pay a cash dividend?', choices: ['Share premium', 'Revaluation surplus', 'Retained earnings', 'Share capital'], answer: 2, explain: '配当に使えるのは、稼いだもうけの残りである利益剰余金。share premium は株主の元手、revaluation surplus はまだ実現していない値上がりなので使えない。' },
        { q: '利益剰余金が $50,000 ある。正しいのは？', choices: ['会社の金庫に現金 $50,000 がある', 'これまでのもうけのうち配当せずに残した累計で、現金とは限らない', '株主が払い込んだお金の合計', '来年の利益の見込み'], answer: 1, explain: '準備金は現金ではない。もうけは建物や在庫などに姿を変えていることが多い。株主が払い込んだお金は株式資本と株式払込剰余金。' },
        { q: '資産 $500,000、負債 $180,000、株式資本 $200,000、株式払込剰余金 $40,000 の会社。ほかに準備金がないとき、利益剰余金はいくら？', type: 'number', answer: 80000, unit: '$', explain: '資本＝$500,000 − $180,000 ＝ $320,000。利益剰余金＝$320,000 − $200,000 − $40,000 ＝ $80,000。' }
      ]
    },
    {
      id: 'L120',
      no: 120,
      title: '株式発行と株式払込剰余金',
      goal: '新しい株を現金で発行したときの株式資本と株式払込剰余金の増え方を計算し、仕訳できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D10(d)', 'K1:C10(d)(i)', 'K1:C10(e)'],
      slides: [
        {
          title: 'チケットに「プレミア」がつく',
          paras: ['ライブのチケットに「5,000円」と印刷されている。人気が出て、8,000円で売れたとする。', '印刷された5,000円は変わらない。上乗せの3,000円が、いわゆる「プレミア」。株にもまったく同じ考え方がある。']
        },
        {
          title: '額面と発行価格',
          list: ['額面（nominal value / par value）: 株に決められた金額。$1、$0.50、$0.25 など。発行の後も変わらない', '発行価格（issue price）: 実際に株を売った値段。会社の人気や業績で決まる', '上乗せ分（premium）: 発行価格 − 額面'],
          formula: '1株の premium ＝ issue price − nominal value'
        },
        {
          title: '2つの勘定に分けて記録する',
          paras: ['株を発行して受け取った現金は、全額を share capital に入れない。'],
          list: ['額面の部分 → 株式資本（share capital）', '上乗せの部分 → 株式払込剰余金（share premium）'],
          after: 'こうすると、share capital の残高はいつも「発行済みの株数 × 額面」になる。'
        },
        {
          title: '例題: 株を発行した',
          example: {
            problem: 'たこ焼き株式会社が、額面 $0.50 の普通株 100,000 株を 1株 $1.20 で発行し、全額を現金で受け取った。仕訳は？',
            steps: ['受け取った現金: 100,000 × $1.20 ＝ $120,000', '株式資本（額面の部分）: 100,000 × $0.50 ＝ $50,000', '株式払込剰余金（上乗せの部分）: 100,000 × ($1.20 − $0.50) ＝ $70,000', '検算: $50,000 ＋ $70,000 ＝ $120,000（受け取った現金と一致）'],
            answer: 'Dr Cash $120,000 / Cr Share capital $50,000 / Cr Share premium $70,000'
          }
        },
        {
          title: '仕訳と T 勘定',
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '120,000' },
            { side: 'Cr', account: 'Share capital（株式資本）', amount: '50,000' },
            { side: 'Cr', account: 'Share premium（株式払込剰余金）', amount: '70,000' }
          ],
          tAccount: { name: 'Share premium', debit: [], credit: [['Balance b/d', '30,000'], ['Cash（株の発行）', '70,000']], balance: { side: 'credit', label: 'Balance c/d', amount: '100,000' } },
          note: { kind: 'tip', text: '株の発行にかかった費用（issue costs）は、費用にせず share premium から差し引く: Dr Share premium / Cr Cash。' }
        },
        {
          title: '発行の前と後（SFP の資本）',
          table: {
            caption: 'たこ焼き株式会社の資本',
            head: ['Equity', '前 $', '後 $'],
            rows: [
              ['Share capital（$0.50）', '200,000', '250,000'],
              ['Share premium', '30,000', '100,000'],
              ['Revaluation surplus', '30,000', '30,000'],
              ['Retained earnings', '120,000', '120,000']
            ],
            total: ['Total equity', '380,000', '500,000']
          },
          paras: ['資本は、受け取った現金の $120,000 だけ増える。利益剰余金は動かない（もうけではないから）。株数は 400,000 株から 500,000 株になる。']
        },
        {
          title: '例題: 増えた分から逆算する',
          example: {
            problem: 'Share capital（額面 $0.25）が $300,000 から $400,000 に、share premium が $50,000 から $250,000 に増えた。現金での発行は1回だけ。発行した株数と、1株の発行価格は？',
            steps: ['増えた株式資本: $400,000 − $300,000 ＝ $100,000', '発行した株数: $100,000 ÷ $0.25 ＝ 400,000 株', '増えた株式払込剰余金: $250,000 − $50,000 ＝ $200,000', '受け取った現金: $100,000 ＋ $200,000 ＝ $300,000', '1株の発行価格: $300,000 ÷ 400,000 株 ＝ $0.75'],
            answer: '400,000 株を 1株 $0.75 で発行した（受け取った現金 $300,000）'
          },
          note: { kind: 'tip', text: 'この逆算は、あとでキャッシュフロー計算書の「株式発行による収入」を出すときにも使う。' }
        },
        {
          title: '現金で株を発行するメリット・デメリット',
          list: ['メリット: まとまった現金が入る。借入と違い、返す必要も利息を払う義務もない', 'メリット: 借金が増えないので、会社の財務の安全性が上がる', 'デメリット: 新しい株主が入ると、今の株主の持ち分の割合（支配力）が薄まる（dilution）', 'デメリット: 発行の手間と費用がかかる。株主は将来の配当を期待する'],
          after: '発行価格の全額をその場で払い込んでもらう発行を、全額払込の発行（fully paid issue for cash）という。'
        },
        {
          title: 'なぜ？ 額面と上乗せを分ける理由',
          paras: ['share capital を「株数 × 額面」に保つと、何株発行したかがすぐ分かる。だから額面の分だけを入れる。', '上乗せ分も株主が払い込んだ元手で、会社のもうけではない。だから損益計算書にも利益剰余金にも入れず、share premium にまとめる。配当には使えない。'],
          note: { kind: 'warn', text: 'よくある間違い: 受け取った現金を全額 share capital に入れる。または額面を $1 と思い込む。問題文の「$0.50 shares」「$0.25 shares」を必ず確認する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['share capital には額面（株数 × 額面）だけを入れる', 'share premium ＝ 株数 ×（発行価格 − 額面）', '仕訳は Dr Cash / Cr Share capital / Cr Share premium']
        },
        {
          title: '英単語',
          words: [
            ['issue price', 'イシュー プライス', '発行価格'],
            ['nominal value / par value', 'ノミナル バリュー / パー バリュー', '額面'],
            ['share premium', 'シェア プレミアム', '株式払込剰余金（額面を超える上乗せ分）'],
            ['issue of shares', 'イシュー オブ シェアズ', '株式の発行'],
            ['fully paid', 'フーリー ペイド', '全額払込済み'],
            ['dilution', 'ダイリューション', '持ち分の割合が薄まること'],
            ['issue costs', 'イシュー コスツ', '株の発行費用']
          ]
        }
      ],
      quiz: [
        { q: 'A company issues 200,000 $0.25 ordinary shares at $0.90 each, fully paid in cash. By how much does the share premium account increase?', type: 'number', answer: 130000, unit: '$', explain: '200,000 × ($0.90 − $0.25) ＝ $130,000。受け取った現金 $180,000 のうち、額面の $50,000 は share capital、残りが share premium。' },
        { q: 'Which journal entry records an issue of 50,000 $1 shares at $1.60 each for cash?', choices: ['Dr Cash $80,000, Cr Share capital $80,000', 'Dr Cash $80,000, Cr Share capital $50,000, Cr Share premium $30,000', 'Dr Cash $80,000, Cr Share capital $30,000, Cr Share premium $50,000', 'Dr Share capital $50,000, Dr Share premium $30,000, Cr Cash $80,000'], answer: 1, explain: '現金 50,000 × $1.60 ＝ $80,000。額面 50,000 × $1 ＝ $50,000 が share capital、上乗せ $30,000 が share premium。全額を share capital に入れる、額面と上乗せを逆にする、借方と貸方を逆にする、がよくある間違い。' },
        { q: 'Share capital（額面 $0.50）が $100,000 から $160,000 に、share premium が $20,000 から $110,000 に増えた（現金での発行1回）。受け取った現金はいくら？', type: 'number', answer: 150000, unit: '$', explain: '増えた share capital $60,000 ＋ 増えた share premium $90,000 ＝ $150,000。株数は $60,000 ÷ $0.50 ＝ 120,000 株、1株 $1.25 で発行したことになる。' },
        { q: '株を現金で発行するデメリットとして正しいものは？', choices: ['利息を必ず払う必要がある', '新しい株主が入り、今の株主の持ち分の割合が薄まる', '現金が入らない', '借金が増えて財務の安全性が下がる'], answer: 1, explain: '利息の義務や借金の増加は借入のデメリット。株の発行では現金が入り、借金は増えない。代わりに、今の株主の割合が薄まる（dilution）。' },
        { q: 'A company has share capital of $600,000 made up of $0.50 ordinary shares. How many shares are in issue?', choices: ['300,000', '600,000', '1,200,000', '1,500,000'], answer: 2, explain: '$600,000 ÷ $0.50 ＝ 1,200,000 株。額面を $1 と思い込むと 600,000 株、掛け算すると 300,000 株になってしまう。' },
        { q: '株を額面より高く発行した。上乗せ分はどこに入る？', choices: ['利益剰余金（もうけだから）', '損益計算書の収益', '株式払込剰余金', '再評価剰余金'], answer: 2, explain: '上乗せ分は株主が払い込んだ元手で、もうけではない。だから収益にも利益剰余金にも入れず、share premium に入れる。' }
      ]
    },
    {
      id: 'L121',
      no: 121,
      title: '無償増資とメリット・デメリット',
      goal: '無償増資（bonus issue）とは何かを説明し、会社と株主にとってのメリット・デメリットを言えるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D10(e)', 'K1:C10(d)(ii)'],
      slides: [
        {
          title: 'ピザの切り方を変える',
          paras: ['ピザを4等分しても5等分しても、ピザの大きさは変わらない。1切れが小さくなるだけ。', '1万円札1枚を5千円札2枚に両替しても、お金は増えない。無償増資は、これと同じことを株でする。']
        },
        {
          title: '無償増資（bonus issue）とは',
          paras: ['今の株主に、持っている株数に応じて、新しい株をタダで配ること。株主はお金を払わない。'],
          list: ['例: 1 for 4（4株につき1株）→ 4株持っている人に1株を配る', '新しい株の額面の分だけ、準備金（reserves）を株式資本（share capital）に振り替える', '別名: capitalisation issue（資本組入れ）、scrip issue']
        },
        {
          title: '切り方が変わるだけ',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="無償増資の前は4株、後は5株。全体の大きさは同じ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">無償増資: 切り方が変わるだけ</text><text x="20" y="66" fill="var(--ink)">前: 4株に分けている</text><rect x="20" y="78" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M120 78L120 126M220 78L220 126M320 78L320 126" stroke="var(--edge)" stroke-width="1.25" fill="none"/><text x="70" y="108" text-anchor="middle" fill="var(--ink)">1株</text><text x="170" y="108" text-anchor="middle" fill="var(--ink)">1株</text><text x="270" y="108" text-anchor="middle" fill="var(--ink)">1株</text><text x="370" y="108" text-anchor="middle" fill="var(--ink)">1株</text><text x="20" y="160" fill="var(--ink)">後: 1 for 4 で5株に</text><rect x="20" y="172" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M100 172L100 220M180 172L180 220M260 172L260 220M340 172L340 220" stroke="var(--accent)" stroke-width="1.25" fill="none"/><text x="60" y="202" text-anchor="middle" fill="var(--ink)">1株</text><text x="140" y="202" text-anchor="middle" fill="var(--ink)">1株</text><text x="220" y="202" text-anchor="middle" fill="var(--ink)">1株</text><text x="300" y="202" text-anchor="middle" fill="var(--ink)">1株</text><text x="380" y="202" text-anchor="middle" fill="var(--ink)">1株</text><text x="220" y="254" text-anchor="middle" fill="var(--ink)">株は増えても、資本の合計は同じ</text></svg>`,
          caption: '帯の長さ（会社の中身＝資本の合計）は同じ。株数が増えた分、1株の値打ちが小さくなる。'
        },
        {
          title: '何が変わって、何が変わらない？',
          table: {
            caption: '無償増資の前と後をくらべる',
            head: ['項目', '無償増資の後'],
            rows: [
              ['株数', '増える'],
              ['株式資本（share capital）', '増える'],
              ['準備金（share premium など）', '同じ額だけ減る'],
              ['資本の合計（total equity）', '変わらない'],
              ['現金', '変わらない（お金は動かない）'],
              ['1株の株価', 'ふつうは下がる']
            ]
          }
        },
        {
          title: '振り替えに使う準備金',
          paras: ['新しい株の額面の分は、準備金から株式資本に移す。試験では、まず株式払込剰余金（share premium）を使い、足りない分を利益剰余金（retained earnings）から使うのが基本。問題文に指示があれば（例: 「再評価剰余金を使う」）、それに従う。', 'share premium はもともと配当に使えない。先に使えば、配当に使える利益剰余金をなるべく残せる。']
        },
        {
          title: '株主の割合は変わらない',
          paras: ['株数 1,000,000 株の会社で、Aさんが 100,000 株（10%）を持っている。1 for 4 の無償増資で、会社の株は 1,250,000 株、Aさんの株は 125,000 株になる。', 'Aさんの割合は 125,000 ÷ 1,250,000 ＝ 10% のまま。全員が同じ比率でもらうので、誰の割合も変わらない。']
        },
        {
          title: 'メリット',
          list: ['株価が下がって1株が買いやすくなり、株が売り買いされやすくなる（marketability が上がる）', '現金を使わずに株主に株を渡せる。現金配当の代わりにもなる', '株主の持ち分の割合は変わらない（支配力が薄まらない）', '配当に使える利益剰余金を株式資本に固めるので、元手が会社に残り、貸した人の安心材料になる', '会社が将来に自信を持っているという合図（signal）になる']
        },
        {
          title: 'デメリット',
          list: ['新しい現金は1円も入らない（資金調達にはならない）', '株の発行や手続きの費用がかかる', '1株あたりの配当を前と同じにすると、株数が増えた分、配当の総額が増える', '利益剰余金を使うと、配当に使える準備金が減る', '株主は「タダで得をした」と思いやすいが、持っている株全体の値打ちは同じ']
        },
        {
          title: 'なぜ？ タダで株を配っても値打ちが増えない',
          paras: ['株の値打ちの元は、会社の中身（資産 − 負債）。無償増資では現金も資産も負債も動かないので、会社の中身は同じ。', '同じ中身を、前より多い株数で分けるだけ。だから1株の株価が下がり、株主が持つ株全体の値打ちは変わらない。'],
          note: { kind: 'warn', text: 'よくある間違い: 無償増資で「現金が入る」「資本の合計が増える」と考える。動くのは資本の中の勘定だけ（準備金 → 株式資本）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['無償増資＝今の株主に、持ち株に応じて新しい株をタダで配ること', '準備金（まず share premium）を株式資本に振り替える。現金と資本の合計は変わらない', 'メリットは株の売買のしやすさと割合が変わらないこと。デメリットは現金が入らないこと']
        },
        {
          title: '英単語',
          words: [
            ['bonus issue', 'ボーナス イシュー', '無償増資'],
            ['capitalisation issue', 'キャピタライゼーション イシュー', '資本組入れ（bonus issue の別名）'],
            ['scrip issue', 'スクリップ イシュー', 'bonus issue の別名'],
            ['1 for 4', 'ワン フォー フォー', '4株につき1株'],
            ['marketability', 'マーケタビリティ', '売り買いのしやすさ'],
            ['market price', 'マーケット プライス', '株価（市場での値段）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is the effect of a bonus issue?', choices: ['Cash increases and share capital increases', 'Share capital increases and reserves decrease by the same amount', 'Total equity increases', 'Retained earnings increase'], answer: 1, explain: '無償増資は準備金を株式資本に振り替えるだけ。現金は入らず、資本の合計も変わらない。準備金は減る側なので、retained earnings が増えることはない。' },
        { q: '無償増資のメリットとして正しいものは？', choices: ['会社に新しい現金が入る', '借入を返せる', '株価が下がって、株が売り買いされやすくなる', '資本の合計が増える'], answer: 2, explain: '株数が増えて1株の株価が下がり、買いやすくなる。現金は入らないので、借入の返済にも使えない。資本の合計も変わらない。' },
        { q: 'A shareholder owns 2,000 shares. The company makes a 1 for 4 bonus issue. How many shares will the shareholder own after the issue?', choices: ['2,500', '8,000', '2,250', '10,000'], answer: 0, explain: '新しい株は 2,000 ÷ 4 ＝ 500 株。合計 2,500 株。8,000 や 10,000 は「1株につき4株」と逆に読んだときの間違い。' },
        { q: '無償増資で振り替えに使う準備金。試験での基本の順番は？', choices: ['利益剰余金 → share premium', 'share premium → 利益剰余金', '現金 → 利益剰余金', '再評価剰余金だけ'], answer: 1, explain: 'まず配当に使えない share premium を使い、足りない分を利益剰余金から使う。現金は準備金ではない。再評価剰余金は、問題文で使うと指示されたときだけ使う。' },
        { q: 'Which of the following is a disadvantage of a bonus issue?', choices: ['It dilutes the control of existing shareholders', 'It does not raise any new cash', 'It increases the borrowings of the company', 'It reduces total equity'], answer: 1, explain: '株主はお金を払わないので、新しい現金は入らない。全員が同じ比率でもらうので割合は薄まらない。借入も資本の合計も変わらない。' },
        { q: 'Aさんは会社の株の 10% を持っている。1 for 5 の無償増資の後、Aさんの割合は？', choices: ['10%', '12%', '8%', '15%'], answer: 0, explain: '全員が持ち株に応じて同じ比率でもらうので、割合は 10% のまま。現金で新しい株主に発行した場合（前のレッスン）と違い、薄まらない。' }
      ]
    },
    {
      id: 'L122',
      no: 122,
      title: '無償増資の計算と表示',
      goal: '無償増資で配る株数と振替額を計算し、仕訳と財政状態計算書の資本を作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D10(g)', 'K1:C10(e)'],
      slides: [
        {
          title: '「4個買うと1個おまけ」',
          paras: ['お店の「4個買うと1個おまけ」。20個買った人は、20 ÷ 4 ＝ 5個のおまけをもらい、合わせて25個になる。', '無償増資の「1 for 4」も同じ計算。今の株数を4で割ると、配る株数になる。']
        },
        {
          title: '計算の4ステップ',
          numbered: ['今の株数を出す: share capital ÷ 額面', '新しく配る株数: 今の株数 × 比率（1 for 4 なら ÷ 4）', '振替額: 新しい株数 × 額面（発行価格や株価は使わない）', '仕訳: 準備金を借方、share capital を貸方'],
          formula: '振替額 ＝ 新しい株数 × 額面'
        },
        {
          title: '例題: 1 for 4 の無償増資',
          example: {
            problem: 'ある会社の資本: Share capital（$0.50 普通株）$500,000、Share premium $80,000、Retained earnings $300,000。1 for 4 の無償増資をした。share premium をできるだけ使う。仕訳は？',
            steps: ['今の株数: $500,000 ÷ $0.50 ＝ 1,000,000 株', '新しく配る株数: 1,000,000 ÷ 4 ＝ 250,000 株', '振替額: 250,000 × $0.50 ＝ $125,000', 'share premium は $80,000 しかないので全部使う', '足りない分: $125,000 − $80,000 ＝ $45,000 を retained earnings から使う'],
            answer: 'Dr Share premium $80,000 / Dr Retained earnings $45,000 / Cr Share capital $125,000'
          }
        },
        {
          title: '仕訳',
          journal: [
            { side: 'Dr', account: 'Share premium（株式払込剰余金）', amount: '80,000' },
            { side: 'Dr', account: 'Retained earnings（利益剰余金）', amount: '45,000' },
            { side: 'Cr', account: 'Share capital（株式資本）', amount: '125,000' }
          ],
          paras: ['現金の行がない。株主は1円も払わないから。'],
          note: { kind: 'tip', text: '近道: 振替額は share capital × 比率 でも出る（$500,000 ÷ 4 ＝ $125,000）。額面がいくらでも同じ答えになる。ただし株数を聞かれたら、必ず額面で割る。' }
        },
        {
          title: 'SFP の資本（前と後）',
          table: {
            caption: '無償増資の前と後',
            head: ['Equity', '前 $', '後 $'],
            rows: [
              ['Share capital（$0.50）', '500,000', '625,000'],
              ['Share premium', '80,000', '0'],
              ['Retained earnings', '300,000', '255,000']
            ],
            total: ['Total equity', '880,000', '880,000']
          },
          paras: ['資本の合計は $880,000 のまま。株数は $625,000 ÷ $0.50 ＝ 1,250,000 株になる。']
        },
        {
          title: '例題: share premium で足りる場合',
          example: {
            problem: '額面 $0.25 の普通株が 2,000,000 株ある。Share premium $150,000、Retained earnings $400,000。1 for 5 の無償増資をした（share premium を使う）。発行後の share capital と share premium は？',
            steps: ['今の share capital: 2,000,000 × $0.25 ＝ $500,000', '新しく配る株数: 2,000,000 ÷ 5 ＝ 400,000 株', '振替額: 400,000 × $0.25 ＝ $100,000', 'share premium で全部まかなえる: $150,000 − $100,000 ＝ $50,000', 'share capital: $500,000 ＋ $100,000 ＝ $600,000'],
            answer: 'Share capital $600,000、Share premium $50,000（retained earnings は $400,000 のまま）'
          }
        },
        {
          title: '比率の読み方',
          list: ['1 for 4: 4株につき1株を足す → 新しい株数＝今の株数 ÷ 4。発行後は今の 5/4 倍', '2 for 5: 5株につき2株を足す → 新しい株数＝今の株数 × 2 ÷ 5', '「1 for 4 の発行後に 1,250,000 株」なら、発行前は 1,250,000 × 4 ÷ 5 ＝ 1,000,000 株。配った株は 250,000 株'],
          after: '問題文の株数が「発行前」か「発行後」かを、まず確かめる。'
        },
        {
          title: 'よくある間違い',
          paras: ['仕訳に現金を入れるのも間違い。無償増資では株主は1円も払わないので、Cash の行は出てこない。'],
          note: { kind: 'warn', text: '振替額を株価（market price）で計算する。無償増資は額面で振り替える。また、1 for 4 を「1株につき4株」と逆に読む間違いも多い。' }
        },
        {
          title: 'なぜ？ 額面で振り替える理由',
          paras: ['share capital は「株数 × 額面」と決まっている。株が増えた分、額面の分だけ share capital を増やせば、この関係が保たれる。', '新しいお金は入っていないので、資本の合計は増やせない。だから同じ額を準備金から持ってくる。資本の中で封筒を移しているだけ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['新しい株数＝今の株数 × 比率、振替額＝新しい株数 × 額面', '仕訳は Dr Share premium（足りなければ Retained earnings）/ Cr Share capital', '資本の合計と現金は変わらない']
        },
        {
          title: '英単語',
          words: [
            ['bonus issue', 'ボーナス イシュー', '無償増資'],
            ['1 for 4 / 2 for 5', '', '4株につき1株 / 5株につき2株'],
            ['transfer', 'トランスファー', '振替（勘定から勘定へ移すこと）'],
            ['shares in issue', 'シェアズ イン イシュー', '発行済みの株'],
            ['as far as possible', '', 'できるだけ（share premium をできるだけ使う、など）'],
            ['market price', 'マーケット プライス', '株価（振替額には使わない）']
          ]
        }
      ],
      quiz: [
        { q: 'A company has 3,000,000 $0.50 ordinary shares in issue. It makes a 1 for 3 bonus issue. What is the balance on the share capital account after the issue?', type: 'number', answer: 2000000, unit: '$', explain: '今の share capital は 3,000,000 × $0.50 ＝ $1,500,000。新しい株は 3,000,000 ÷ 3 ＝ 1,000,000 株で、振替額は 1,000,000 × $0.50 ＝ $500,000。発行後は $1,500,000 ＋ $500,000 ＝ $2,000,000。' },
        { q: 'A company has share capital of $400,000 ($1 shares), share premium of $60,000 and retained earnings of $500,000. It makes a 1 for 5 bonus issue, using the share premium as far as possible. What are retained earnings after the issue?', choices: ['$480,000', '$420,000', '$500,000', '$440,000'], answer: 0, explain: '新しい株は 400,000 ÷ 5 ＝ 80,000 株、振替額 $80,000。share premium $60,000 を全部使い、残り $20,000 を retained earnings から使う。$500,000 − $20,000 ＝ $480,000。$420,000 は全額を retained earnings から使った場合。$440,000 は share premium の $60,000 を retained earnings から引いてしまった間違い。' },
        { q: '無償増資の仕訳の形として正しいのは？', choices: ['Dr Cash / Cr Share capital', 'Dr Share premium / Cr Share capital', 'Dr Share capital / Cr Share premium', 'Dr Share capital / Cr Cash'], answer: 1, explain: '準備金（share premium）を減らして借方、share capital を増やして貸方。お金は動かないので Cash は出てこない。Dr Cash / Cr Share capital は現金で株を発行したときの形。' },
        { q: '額面 $0.25 の株が 800,000 株ある。2 for 5 の無償増資をする。share capital に振り替える額は？', type: 'number', answer: 80000, unit: '$', explain: '新しい株は 800,000 × 2 ÷ 5 ＝ 320,000 株。振替額は 320,000 × $0.25 ＝ $80,000。近道: share capital $200,000 × 2/5 ＝ $80,000。' },
        { q: 'After a bonus issue, which of the following is true?', choices: ['Total equity is unchanged', 'Cash has increased', 'Total equity has increased by the nominal value of the new shares', 'Liabilities have decreased'], answer: 0, explain: '準備金から share capital へ移すだけなので、資本の合計は同じ。現金も負債も動かない。' },
        { q: '1 for 4 の無償増資の後、株数が 1,500,000 株になった。配った株数は？', type: 'number', answer: 300000, unit: '株', explain: '発行前は 1,500,000 × 4 ÷ 5 ＝ 1,200,000 株。配った株は 1,200,000 ÷ 4 ＝ 300,000 株。1,500,000 ÷ 4 ＝ 375,000 は、発行後の株数で割ってしまった間違い。' }
      ]
    }
  ],
  cards: [
    { id: 'L118-1', lesson: 'L118', q: '会社の3つの資金源は？', a: '普通株・優先株・借入' },
    { id: 'L118-2', lesson: 'L118', q: '普通株の特徴は？', a: '投票できる。配当は決まっていない。たたむとき最後だが残りは全部もらえる' },
    { id: 'L118-3', lesson: 'L118', q: '6% $1 preference shares 100,000株の年間配当は？', a: '$6,000（100,000 × $1 × 6%）' },
    { id: 'L118-4', lesson: 'L118', q: 'redeemable preference shares は SFP のどこ？ 配当は？', a: '負債。配当は finance costs（支払利息と同じ）' },
    { id: 'L118-5', lesson: 'L118', q: 'なぜ償還する優先株は負債になる？', a: '決まった日に返す義務があり、中身が借金と同じだから（実質優先）' },
    { id: 'L118-6', lesson: 'L118', q: '借入の利息は、もうけがない年も払う？', a: '払う。義務なので、借入は負債、利息は finance costs' },
    { id: 'L119-1', lesson: 'L119', q: '資本（equity）の定義は？', a: '資産 − 負債。株主の取り分' },
    { id: 'L119-2', lesson: 'L119', q: '会社の資本の4つの中身は？', a: '株式資本・株式払込剰余金・再評価剰余金・利益剰余金' },
    { id: 'L119-3', lesson: 'L119', q: '利益剰余金の動きの式は？', a: '期首 ＋ 当期の利益 − 配当 ＝ 期末' },
    { id: 'L119-4', lesson: 'L119', q: '土地の値上がり（再評価）の仕訳は？', a: 'Dr Land / Cr Revaluation surplus（OCI を通る）' },
    { id: 'L119-5', lesson: 'L119', q: '配当に使える準備金は？', a: '利益剰余金だけ。share premium と revaluation surplus は使えない' },
    { id: 'L119-6', lesson: 'L119', q: 'other components of equity とは？', a: '株式資本と利益剰余金以外の資本（share premium、revaluation surplus など）' },
    { id: 'L120-1', lesson: 'L120', q: '株を現金で発行したときの仕訳は？', a: 'Dr Cash（受取額）/ Cr Share capital（株数×額面）/ Cr Share premium（残り）' },
    { id: 'L120-2', lesson: 'L120', q: 'share premium の増加額の計算は？', a: '株数 ×（発行価格 − 額面）' },
    { id: 'L120-3', lesson: 'L120', q: 'share capital の残高はいつも何になる？', a: '発行済みの株数 × 額面' },
    { id: 'L120-4', lesson: 'L120', q: 'SC と SP の増加から、受け取った現金を出すには？', a: '増えた share capital ＋ 増えた share premium' },
    { id: 'L120-5', lesson: 'L120', q: '現金で株を発行するメリットとデメリットは？', a: '返済も利息も不要で借金が増えない／今の株主の割合が薄まる、費用がかかる' },
    { id: 'L120-6', lesson: 'L120', q: '株の発行費用（issue costs）の処理は？', a: '費用にせず share premium から差し引く（Dr Share premium / Cr Cash）' },
    { id: 'L121-1', lesson: 'L121', q: '無償増資（bonus issue）とは？', a: '今の株主に持ち株に応じて新しい株をタダで配ること。準備金を株式資本に振り替える' },
    { id: 'L121-2', lesson: 'L121', q: '無償増資で、資本の合計と現金はどうなる？', a: 'どちらも変わらない' },
    { id: 'L121-3', lesson: 'L121', q: '「1 for 4」の意味は？', a: '4株につき1株を新しく配る' },
    { id: 'L121-4', lesson: 'L121', q: '振り替えに使う準備金の基本の順番は？', a: 'まず share premium、足りない分は retained earnings' },
    { id: 'L121-5', lesson: 'L121', q: '無償増資のメリットは？', a: '株価が下がり売買しやすい。現金を使わない。株主の割合が変わらない' },
    { id: 'L121-6', lesson: 'L121', q: '無償増資のデメリットは？', a: '新しい現金が入らない。手続き費用。将来の配当総額が増えうる' },
    { id: 'L121-7', lesson: 'L121', q: 'bonus issue の別名は？', a: 'capitalisation issue、scrip issue' },
    { id: 'L122-1', lesson: 'L122', q: '無償増資の計算の手順は？', a: '今の株数 → 新しい株数（× 比率）→ 振替額（× 額面）→ 仕訳' },
    { id: 'L122-2', lesson: 'L122', q: '無償増資の振替額は株価で計算する？', a: 'しない。新しい株数 × 額面で計算する' },
    { id: 'L122-3', lesson: 'L122', q: '無償増資の仕訳は？', a: 'Dr Share premium（足りなければ Retained earnings）/ Cr Share capital' },
    { id: 'L122-4', lesson: 'L122', q: '振替額の近道は？', a: 'share capital × 比率（1 for 4 なら ÷ 4）' },
    { id: 'L122-5', lesson: 'L122', q: '1 for 4 の発行後に 1,250,000 株。発行前の株数は？', a: '1,000,000 株（1,250,000 × 4 ÷ 5）' },
    { id: 'L122-6', lesson: 'L122', q: 'SC $500,000（$0.50）、SP $80,000。1 for 4 で RE から使う額は？', a: '$45,000（振替 $125,000 − SP $80,000）' }
  ]
});
