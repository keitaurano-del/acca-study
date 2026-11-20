(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 34,
  part: 21,
  partTitle: 'K1拡張',
  lessons: [
    {
      id: 'X01',
      no: 'X1',
      title: '給与: 人件費と従業員控除の計算',
      goal: '給与明細の数字から、手取り・天引き・会社の人件費・税務当局に払う金額を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:C2(a)'],
      slides: [
        {
          title: '給与明細を思い出す',
          paras: ['給与明細には「額面30万円」と「振込額24万円」がある。差の6万円は、所得税や社会保険料として会社が先に引いた分（天引き）。', '引かれた6万円も、あなたの給料の一部。会社が本人の代わりに国や年金に払っている。さらに会社は、自分の負担分の社会保険料も別に払っている。']
        },
        {
          title: '3つの言葉',
          list: ['総支給額（gross pay）: 引かれる前の給料。基本給（basic pay）＋残業代（overtime）＋賞与（bonus）など', '控除（deductions）: 総支給額から引く分', '手取り（net pay）: 本人の口座に振り込まれる金額'],
          formula: 'net pay ＝ gross pay − employee deductions'
        },
        {
          title: '従業員から引くもの',
          list: ['所得税（income tax）: 会社が給料から先に引いて国に払う（英国では PAYE と呼ぶ）', '従業員負担の社会保険料（employee\'s social security contributions）', '従業員負担の年金掛金（employee\'s pension contributions）', '任意の控除（voluntary deductions）: 労働組合費、寄付など本人が頼んだもの'],
          after: 'どれも「本人の給料から払う」お金。会社の負担は増えない。'
        },
        {
          title: '会社が上乗せで払うもの',
          paras: ['会社自身の負担もある。給料からは引かず、会社が上乗せで払う。'],
          list: ['会社負担の社会保険料（employer\'s social security contributions）', '会社負担の年金掛金（employer\'s pension contributions）'],
          formula: 'staff costs ＝ gross pay ＋ employer\'s contributions'
        },
        {
          title: 'たこ焼き屋の店員1人分',
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="人件費2808ドルは、総支給額2400ドルと会社負担408ドル。総支給額は手取り1728ドルと天引き672ドルに分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">人件費 $2,808 の中身</text><rect x="20" y="52" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="86" font-size="15" font-weight="600" fill="var(--ink)">人件費（staff costs）</text><text x="400" y="86" text-anchor="end" font-size="18" font-weight="600" fill="var(--ink)">$2,808</text><rect x="20" y="124" width="300" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="148" font-size="15" font-weight="600" fill="var(--ink)">総支給額（gross pay）</text><text x="36" y="170" fill="var(--ink)">$2,400</text><rect x="330" y="124" width="90" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="375" y="148" text-anchor="middle" fill="var(--ink)">会社負担</text><text x="375" y="170" text-anchor="middle" fill="var(--ink)">$408</text><rect x="20" y="196" width="210" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="220" font-size="15" font-weight="600" fill="var(--ink)">手取り（net pay）</text><text x="36" y="242" fill="var(--ink)">$1,728</text><rect x="240" y="196" width="80" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="280" y="220" text-anchor="middle" fill="var(--ink)">天引き</text><text x="280" y="242" text-anchor="middle" fill="var(--ink)">$672</text><text x="125" y="286" text-anchor="middle" fill="var(--ink)">↓ 従業員へ</text><text x="330" y="286" text-anchor="middle" fill="var(--ink)">↓ 税務当局・年金基金へ</text></svg>`,
          caption: '基本給 $2,100 ＋ 残業 $300 ＝ $2,400。天引き $672（所得税 360・社会保険 192・年金 120）。会社負担 $408（社会保険 288・年金 120）。'
        },
        {
          title: '例題',
          example: {
            problem: '店員の今月の給与。基本給 $2,100、残業10時間（時給 $20 の1.5倍）。所得税 $360。従業員の社会保険料は総支給額の8%、会社の社会保険料は12%。年金掛金は従業員5%、会社5%。(1) 手取り (2) 人件費 (3) 税務当局に払う額 (4) 年金基金に払う額は？',
            steps: ['残業代: 10 × $20 × 1.5 ＝ $300。総支給額 $2,100 ＋ 300 ＝ $2,400', '従業員の控除: 所得税 360、社会保険 2,400 × 8% ＝ 192、年金 2,400 × 5% ＝ 120。合計 $672', '(1) 手取り: $2,400 − 672 ＝ $1,728', '会社負担: 社会保険 2,400 × 12% ＝ 288、年金 2,400 × 5% ＝ 120。合計 $408', '(2) 人件費: $2,400 ＋ 408 ＝ $2,808', '(3) 税務当局: 360 ＋ 192 ＋ 288 ＝ $840　(4) 年金: 120 ＋ 120 ＝ $240'],
            answer: '(1) $1,728 (2) $2,808 (3) $840 (4) $240。確かめ: 1,728 ＋ 840 ＋ 240 ＝ 2,808'
          }
        },
        {
          title: '$2,808 の行き先',
          table: { caption: '人件費は3か所に払われる', head: ['払う相手', '中身', '$'], rows: [['従業員', '手取り', '1,728'], ['税務当局', '所得税 360 ＋ 社会保険 192 ＋ 288', '840'], ['年金基金', '年金 120 ＋ 120', '240']], total: ['合計', '＝ 人件費', '2,808'] }
        },
        {
          title: 'なぜ？ 天引きを人件費に足さない理由',
          paras: ['天引きは、総支給額 $2,400 の中から払う本人のお金。会社は預かって、本人の代わりに払うだけ。だから人件費は増えない。', '会社負担は、人を雇うことで会社自身にかかる追加のコスト。だから総支給額に上乗せする。人件費は「その人を1か月雇うのに会社が払う全部」と考える。']
        },
        {
          title: 'よくある間違い',
          list: ['人件費を手取り $1,728 にする（天引きも給料の一部）', '天引き $672 を総支給額にもう一度足す（二重に数える）', '会社負担 $408 を忘れて、人件費を $2,400 にする', '残業代を時給 × 時間だけで出し、割増（1.5倍）を忘れる'],
          note: { kind: 'warn', text: '税務当局に払う額には、会社負担の社会保険料も入る。天引きの分だけではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['手取り ＝ 総支給額 − 従業員の控除', '人件費 ＝ 総支給額 ＋ 会社負担の社会保険料・年金', '天引きは本人のお金を預かっているだけ。人件費には足さない']
        },
        {
          title: '英単語',
          words: [
            ['payroll', 'ペイロール', '給与（の計算と支払い）'],
            ['gross pay', 'グロス・ペイ', '総支給額（額面）'],
            ['net pay', 'ネット・ペイ', '手取り'],
            ['deductions', 'ディダクションズ', '控除、天引き'],
            ['income tax', 'インカム・タックス', '所得税'],
            ['social security contributions', '', '社会保険料'],
            ['employer\'s contributions', '', '会社負担の掛金'],
            ['staff costs', 'スタッフ・コスツ', '人件費']
          ]
        }
      ],
      quiz: [
        { q: 'An employee has gross pay of $3,000. Income tax of $450 and employee\'s social security contributions of $240 are deducted. Employer\'s social security contributions are $330. What is the employee\'s net pay?', type: 'number', answer: 2310, unit: '$', explain: '手取り ＝ $3,000 − 450 − 240 ＝ $2,310。会社負担 $330 は給料から引かないので、手取りには関係ない。' },
        { q: 'An employee has gross pay of $3,000. Income tax of $450 and employee\'s social security of $240 are deducted. Employer\'s social security is $330. What is the total staff cost charged to the statement of profit or loss?', choices: ['$3,330', '$2,310', '$3,000', '$4,020'], answer: 0, explain: '人件費 ＝ 総支給額 $3,000 ＋ 会社負担 $330。$4,020 は天引き $690 をもう一度足した間違い。$2,310 は手取り、$3,000 は会社負担を忘れている。' },
        { q: 'Gross pay is $3,000. Income tax of $450 and employee\'s social security of $240 are deducted. Employer\'s social security is $330. How much must the employer pay to the tax authorities?', choices: ['$1,020', '$690', '$780', '$570'], answer: 0, explain: '所得税 450 ＋ 従業員の社会保険 240 ＋ 会社の社会保険 330 ＝ $1,020。$690 は会社負担を忘れている。' },
        { q: '基本給 $1,800。残業が8時間あり、残業は時給 $15 の1.5倍で払う。総支給額は？', choices: ['$1,980', '$1,920', '$1,860', '$2,700'], answer: 0, explain: '残業代 8 × $15 × 1.5 ＝ $180。$1,800 ＋ 180 ＝ $1,980。$1,920 は割増を忘れた金額。$1,860 は割増の 0.5 倍分だけを足している。' },
        { q: '給料から天引きした所得税 $450。会社の人件費はどうなる？', choices: ['増えない。総支給額にもう入っている', '$450 増える', '$450 減る', '会社負担の社会保険料に含める'], answer: 0, explain: '天引きは本人の給料から払うお金。会社は預かって代わりに払うだけなので、人件費は総支給額のまま。' }
      ]
    },
    {
      id: 'X02',
      no: 'X2',
      title: '給与の仕訳',
      goal: '給与の支払いと、天引き・会社負担の支払いを仕訳し、期末に残る未払いを示せるようになる',
      minutes: 14,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:C2(b)'],
      slides: [
        {
          title: '集金を預かる係',
          paras: ['町内会の会費を、近所の人から預かったとする。そのお金は自分の財布に入っていても、自分のものではない。あとで町内会に渡す義務がある。', '給料から天引きした税金も同じ。会社のお金ではなく、税務当局に渡すまで預かっているだけ。だから負債になる。']
        },
        {
          title: '給料日の仕訳',
          paras: ['X1 の店員の例。人件費 $2,808 を費用にして、払う相手ごとに貸方を分ける。手取りはすぐ振り込み、税金と年金は翌月払う。', '組合費などの任意の控除があれば、その相手への負債（other payables）も貸方に足す。'],
          journal: [
            { side: 'Dr', account: 'Staff costs（人件費）', amount: '2,808' },
            { side: 'Cr', account: 'Bank（手取り）', amount: '1,728' },
            { side: 'Cr', account: 'Tax authority payable（未払税金）', amount: '840' },
            { side: 'Cr', account: 'Pension payable（未払年金）', amount: '240' }
          ]
        },
        {
          title: '翌月、税金と年金を払う',
          paras: ['預かっていたお金を渡すので、負債が減り、銀行も減る。費用はもう給料日に記録したので、ここでは増えない。'],
          journal: [
            { side: 'Dr', account: 'Tax authority payable', amount: '840' },
            { side: 'Dr', account: 'Pension payable', amount: '240' },
            { side: 'Cr', account: 'Bank', amount: '1,080' }
          ]
        },
        {
          title: '賃金統制勘定を使う形',
          paras: ['試験では賃金統制勘定（wages control account）を通す形も出る。まず人件費の全額を貸方に入れ、行き先ごとに借方へ出す。全部出し終わると残高は0になる。'],
          tAccount: {
            name: 'Wages control',
            debit: [['Bank（手取り）', '1,728'], ['Tax authority', '840'], ['Pension fund', '240']],
            credit: [['Staff costs', '2,808']]
          },
          after: '仕訳は Dr Staff costs 2,808 / Cr Wages control 2,808。次に Dr Wages control / Cr Bank・Tax authority・Pension。'
        },
        {
          title: '例題',
          example: {
            problem: 'Ume社の12月の給与。総支給額 $10,000、所得税 $1,800、従業員の社会保険料 $900、従業員の年金 $500、会社の社会保険料 $1,100、会社の年金 $600。手取りは12月31日に振り込み、税金と年金は1月19日に払う。(1) 12月の仕訳 (2) 12月31日の SFP に残る負債は？',
            steps: ['手取り: $10,000 − 1,800 − 900 − 500 ＝ $6,800', '人件費: $10,000 ＋ 1,100 ＋ 600 ＝ $11,700', '税務当局: 1,800 ＋ 900 ＋ 1,100 ＝ $3,800。年金: 500 ＋ 600 ＝ $1,100', '仕訳: Dr Staff costs 11,700 / Cr Bank 6,800 / Cr Tax authority payable 3,800 / Cr Pension payable 1,100', '確かめ: 6,800 ＋ 3,800 ＋ 1,100 ＝ 11,700', '12月31日にはまだ払っていない: 3,800 ＋ 1,100 ＝ $4,900'],
            answer: '(1) Dr Staff costs 11,700 / Cr Bank 6,800 / Cr Tax authority payable 3,800 / Cr Pension payable 1,100 (2) 流動負債に $4,900（税務当局 $3,800、年金 $1,100）。12月の SPL の人件費は $11,700'
          }
        },
        {
          title: 'なぜ？ 費用は給料日、負債は払うまで',
          paras: ['人件費は、働いてもらった月の費用（発生主義）。税金をいつ払うかは関係ない。', '天引きした税金は、本人の代わりに払う義務。払うまでは会社が預かっている負債。期末にまだ払っていなければ、SFP の流動負債（other payables）に載せる。']
        },
        {
          title: 'よくある間違い',
          list: ['人件費を手取りの $6,800 だけにする', '天引きした税金を、会社の収益や費用の戻しにする', '税金を払うときに、もう一度 Dr Staff costs にする（費用を2回数える）', '会社負担の社会保険料を、未払税金に入れ忘れる'],
          note: { kind: 'warn', text: '天引きは「Cr 負債」。給料日に費用は総額で一度だけ記録する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['給料日: Dr Staff costs（総支給額＋会社負担）', '貸方は相手ごと: Bank（手取り）、Tax authority payable、Pension payable', '税金・年金を払ったら Dr 負債 / Cr Bank。期末に未払いなら流動負債']
        },
        {
          title: '英単語',
          words: [
            ['wages control account', '', '賃金統制勘定'],
            ['tax authority payable', '', '未払税金（税務当局への負債）'],
            ['pension payable', '', '未払年金掛金'],
            ['wages / salaries', 'ウェイジズ／サラリーズ', '賃金／給料'],
            ['other payables', '', 'その他の未払金（流動負債）'],
            ['payslip', 'ペイスリップ', '給与明細']
          ]
        }
      ],
      quiz: [
        { q: 'Employer\'s social security contributions of $500 are due to the tax authorities next month. Which entry records them?', choices: ['Dr Staff costs $500, Cr Tax authority payable $500', 'Dr Tax authority payable $500, Cr Staff costs $500', 'Dr Staff costs $500, Cr Net pay $500', 'No entry until the amount is paid'], answer: 0, explain: '会社負担は会社の費用なので借方、まだ払っていないので負債を貸方。2つ目は左右が逆。発生主義なので、払うまで待たない。' },
        { q: 'Gross pay for the month is $8,000. Income tax of $1,200 and employee\'s social security of $640 are deducted. Employer\'s social security is $880. Net pay is paid immediately; all amounts due to the tax authorities are paid next month. What is the liability to the tax authorities at the month end?', type: 'number', answer: 2720, unit: '$', explain: '1,200 ＋ 640 ＋ 880 ＝ $2,720。天引き分だけの $1,840 にすると、会社負担を忘れている。' },
        { q: 'Gross pay for the month is $8,000. Income tax of $1,200 and employee\'s social security of $640 are deducted. Employer\'s social security is $880. What is the total charged to staff costs?', choices: ['$8,880', '$8,000', '$6,160', '$10,720'], answer: 0, explain: '総支給額 $8,000 ＋ 会社負担 $880。$6,160 は手取り。$10,720 は天引き $1,840 をもう一度足した間違い。' },
        { q: 'Net pay of $6,160 is paid to employees by bank transfer. Using a wages control account, which entry records the payment?', choices: ['Dr Wages control $6,160, Cr Bank $6,160', 'Dr Bank $6,160, Cr Wages control $6,160', 'Dr Staff costs $6,160, Cr Bank $6,160', 'Dr Wages control $6,160, Cr Staff costs $6,160'], answer: 0, explain: '賃金統制勘定は人件費の全額を貸方に持っている。払ったら借方に出し、銀行を減らす。費用はもう記録済みなので Dr Staff costs にすると二重になる。' },
        { q: '先月天引きした所得税を、今月税務当局に払った。正しい仕訳は？', choices: ['Dr 未払税金（Tax authority payable）/ Cr Bank', 'Dr Staff costs / Cr Bank', 'Dr Bank / Cr 未払税金', 'Dr 未払税金 / Cr Staff costs'], answer: 0, explain: '預かっていた負債を払って消すだけ。費用は給料日に記録済みなので、Dr Staff costs にすると費用を2回数える。' }
      ]
    },
    {
      id: 'X03',
      no: 'X3',
      title: '小口現金の計算と仕訳',
      goal: '小口現金出納帳から費用を仕訳し、レジの現金の動きから売上や不足額を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:C3(b)'],
      slides: [
        {
          title: '家計簿アプリの「分類」',
          paras: ['レシートを家計簿アプリに入れると、食費・交通費・日用品に分けて、月末に分類ごとの合計が出る。1枚ずつではなく、合計で振り返れる。', '小口現金も同じ。伝票を種類ごとの列に分けて書き、月末に列の合計を総勘定元帳に転記する。これが小口現金出納帳（petty cash book）。L29 の定額資金前渡制の続き。']
        },
        {
          title: '今月の伝票',
          paras: ['たこ焼き屋の定額は $200。売上税がかかるのはタクシー代だけ（20%込み）。'],
          table: { caption: '小口現金伝票（月末に手元の現金 $52）', head: ['伝票', '区分', '$'], rows: [['1 コピー用紙', 'Stationery', '36'], ['2 タクシー（税込み）', 'Travel', '54'], ['3 窓の清掃', 'Cleaning', '40'], ['4 切手', 'Postage', '18']], total: ['合計', '', '148'] }
        },
        {
          title: '列の合計を仕訳する',
          paras: ['タクシー代を分ける: $54 ÷ 1.2 ＝ $45 が交通費、$9 が取り戻せる売上税。費用と売上税を借方、減った小口現金を貸方にする。補充は Dr Petty cash 148 / Cr Bank 148。'],
          journal: [
            { side: 'Dr', account: 'Stationery', amount: '36' },
            { side: 'Dr', account: 'Travel', amount: '45' },
            { side: 'Dr', account: 'Sales tax', amount: '9' },
            { side: 'Dr', account: 'Cleaning', amount: '40' },
            { side: 'Dr', account: 'Postage', amount: '18' },
            { side: 'Cr', account: 'Petty cash', amount: '148' }
          ]
        },
        {
          title: '期末の小口現金と仮払い',
          list: ['期末が補充の前なら、SFP に載せる小口現金は手元にある $52。伝票の $148 は今期の費用にする。補充を待たない', '従業員に「後で精算」と渡したお金（IOU、仮払い）は、費用ではなく債権。Dr Other receivables / Cr Petty cash'],
          after: '小口現金も現金なので、SFP では cash and cash equivalents（現金及び現金同等物）に含める。'
        },
        {
          title: 'レジの現金',
          paras: ['お店のレジにも現金がある。朝はお釣り用の現金（float）を入れておき、夜に数える。レジから何も払っていなければ、その日の現金売上 ＝ 夜の現金 − 朝のお釣り用の現金。', '売上金を銀行に預けたら、現金が銀行に移るだけ: Dr Bank / Cr Cash。レジから払った費用や引出しは Cr Cash。']
        },
        {
          title: 'なぜ？ 現金勘定から逆算できる理由',
          paras: ['現金は「入った分 − 出た分 ＝ 残り」が必ず成り立つ。しかも現金はマイナスにならない。', 'だから、入った・出た・残りのうち1つが分からなくても、残りの数字から逆算できる。売上の記録がない小さなお店で、現金売上を出すときによく使う。'],
          formula: '期首の現金 ＋ 現金売上 − 預け入れ − 現金での支払い ＝ 期末の現金'
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋は現金売上をレジに入れ、一部をレジから払ってから銀行に預ける。1年間: 銀行への預け入れ $38,600、レジから払ったアルバイト代 $1,200、レジから払った仕入 $900、オーナーがレジから取った現金 $2,000。レジの現金は期首 $180、期末 $220。現金売上は？',
            steps: ['出ていった現金を全部足す: 38,600 ＋ 1,200 ＋ 900 ＋ 2,000 ＝ $42,700', '期末に残った現金も「使い道」に足す: 42,700 ＋ 220 ＝ $42,920', '期首からあった現金を引く: 42,920 − 180 ＝ $42,740', '確かめ: 180 ＋ 42,740 − 42,700 ＝ 220'],
            answer: '現金売上 $42,740。オーナーの $2,000 は引出し（Dr Drawings / Cr Cash）'
          }
        },
        {
          title: '現金勘定で見る',
          tAccount: {
            name: 'Cash（レジの現金）',
            debit: [['Balance b/d', '180'], ['Cash sales（差額）', '42,740']],
            credit: [['Bank（預け入れ）', '38,600'], ['Wages', '1,200'], ['Purchases', '900'], ['Drawings', '2,000']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '220' }
          },
          note: { kind: 'tip', text: '売上が分かっていて、期末の現金が計算より少なければ、その差が不足（盗難など）。不足額は費用か、責任者への債権にする。' }
        },
        {
          title: 'よくある間違い',
          list: ['期末の小口現金を、補充後の定額 $200 で SFP に載せる（載せるのは手元の $52）', '仮払い（IOU）を費用にする（返してもらう債権）', '銀行への預け入れを売上にする（現金が銀行に移っただけ）', '現金売上の逆算で、期首と期末を逆に足し引きする'],
          note: { kind: 'warn', text: 'オーナーがレジから取った現金を忘れると、現金売上が少なく出る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['小口現金出納帳の列の合計で費用を仕訳する。Cr Petty cash、補充は Dr Petty cash / Cr Bank', '期末の小口現金は手元の現金。仮払いは債権', '現金売上 ＝ 預け入れ ＋ 現金での支払い ＋ 期末の現金 − 期首の現金']
        },
        {
          title: '英単語',
          words: [
            ['petty cash book', 'ペティ・キャッシュ・ブック', '小口現金出納帳'],
            ['analysis columns', 'アナリシス・コラムズ', '分類用の列'],
            ['IOU', 'アイ・オー・ユー', '仮払いのメモ（借用書）'],
            ['cash takings', 'キャッシュ・テイキングズ', 'レジの売上金'],
            ['cash banked', '', '銀行に預けた現金'],
            ['cash in hand', 'キャッシュ・イン・ハンド', '手元の現金'],
            ['cash and cash equivalents', '', '現金及び現金同等物']
          ]
        }
      ],
      quiz: [
        { q: 'A shop banks all its cash takings after paying some expenses from the till. During the year it banked $51,200 and paid wages of $2,400, sundry expenses of $350 and drawings of $1,800 from the till. Cash in the till was $250 at the start of the year and $300 at the end. What were the cash sales for the year?', choices: ['$55,800', '$55,700', '$54,000', '$51,200'], answer: 0, explain: '51,200 ＋ 2,400 ＋ 350 ＋ 1,800 ＋ 300 − 250 ＝ $55,800。$55,700 は期首と期末を逆にした間違い。$54,000 は引出し $1,800 を忘れている。' },
        { q: 'Cash sales for the month were $25,000. Cash in the till was $300 at the start of the month. During the month $23,800 was banked and expenses of $600 were paid from the till. The cash counted at the month end was $500. How much cash is missing?', type: 'number', answer: 400, unit: '$', explain: 'あるはずの現金: 300 ＋ 25,000 − 23,800 − 600 ＝ $900。数えた現金は $500 なので、$400 足りない。' },
        { q: 'A petty cash voucher shows a taxi fare of $72, including sales tax at 20%. Which amounts are debited?', choices: ['Travel $60, Sales tax $12', 'Travel $72', 'Travel $57.60, Sales tax $14.40', 'Travel $60, Sales tax $12, Petty cash $72'], answer: 0, explain: '$72 ÷ 1.2 ＝ $60 が費用、$12 が売上税。$72 × 20% ＝ $14.40 は税込み金額に税率をかけた間違い。小口現金は減るので貸方。' },
        { q: '定額 $300 の小口現金。期末（補充前）に、伝票 $110 と手元の現金 $190 がある。SFP に載せる小口現金は？', choices: ['$190', '$300', '$110', '$0'], answer: 0, explain: '期末に実際にある現金は $190。伝票 $110 は今期の費用にする。補充後の $300 にすると、まだ無いお金を載せてしまう。' },
        { q: '従業員に出張の仮払いとして小口現金から $40 を渡し、IOU を受け取った。正しい仕訳は？', choices: ['Dr Other receivables 40 / Cr Petty cash 40', 'Dr Travel 40 / Cr Petty cash 40', 'Dr Petty cash 40 / Cr Other receivables 40', '仕訳しない'], answer: 0, explain: 'まだ費用は決まっていない。従業員から返してもらう（精算する）お金なので債権。費用にするのは、使った領収書が出てきたとき。' },
        { q: 'Cash takings of $1,500 are paid into the bank. Which entry is correct?', choices: ['Dr Bank $1,500, Cr Cash $1,500', 'Dr Bank $1,500, Cr Revenue $1,500', 'Dr Cash $1,500, Cr Bank $1,500', 'Dr Revenue $1,500, Cr Cash $1,500'], answer: 0, explain: '売上は現金を受け取ったときに記録済み。預け入れは現金が銀行に移るだけ。Cr Revenue にすると売上を2回数える。' }
      ]
    },
    {
      id: 'X04',
      no: 'X4',
      title: '借入と受取配当の仕訳',
      goal: '借入の受取り・利息・返済と、受け取る配当（未収を含む）を計算して仕訳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:C10(f)', 'K1:C10(g)'],
      slides: [
        {
          title: '車のローンと株の配当',
          paras: ['車をローンで買うと、銀行から借りたお金が入り、毎月「元金＋利息」を返す。利息は借りたことのコスト、元金の返済は借りたものを返すだけ。', '株を持っていると、会社から配当が振り込まれる。これは持っていることで得られる収入。'],
          note: { kind: 'warn', text: '借りたお金は売上でも資本でもない。返す義務があるので負債。' }
        },
        {
          title: '借入の3つの仕訳と表示',
          list: ['借りた: Dr Bank / Cr Loan（借入金、負債）', '利息: Dr Finance costs / Cr Bank（期末に未払いなら Cr Interest payable、L126）', '元金を返した: Dr Loan / Cr Bank'],
          after: '社債（loan notes）を発行したときも同じ形: Dr Bank / Cr Loan notes。',
          note: { kind: 'tip', text: 'SFP では、期末から12か月以内に返す元金は流動負債、それより後の分は非流動負債に分ける。' }
        },
        {
          title: '例題: 借入',
          example: {
            problem: 'Kombu社は20X1年4月1日に $60,000 を年利8%で借りた。元金は20X2年3月31日から毎年 $10,000 ずつ返す。利息は毎年3月31日に1年分を払う。決算日は12月31日。(1) 借りた日の仕訳 (2) 20X1年の利息 (3) 12月31日の SFP の表示は？',
            steps: ['(1) Dr Bank 60,000 / Cr Loan 60,000', '(2) 4月〜12月の9か月分: 60,000 × 8% × 9/12 ＝ $3,600', 'まだ払っていないので未払い: Dr Finance costs 3,600 / Cr Interest payable 3,600', '(3) 次の1年（20X2年3月31日）に返す元金 $10,000 は流動負債', '残りの元金 60,000 − 10,000 ＝ $50,000 は非流動負債'],
            answer: '流動負債: 借入金 $10,000、未払利息 $3,600。非流動負債: 借入金 $50,000'
          }
        },
        {
          title: '返済日の仕訳',
          paras: ['20X2年3月31日に $14,800 を払った。1年分の利息は 60,000 × 8% ＝ $4,800。そのうち $3,600 は前期に未払いで計上済み、1〜3月の $1,200 が今期の費用。'],
          journal: [
            { side: 'Dr', account: 'Loan（元金）', amount: '10,000' },
            { side: 'Dr', account: 'Interest payable（前期の未払利息）', amount: '3,600' },
            { side: 'Dr', account: 'Finance costs（今期の利息）', amount: '1,200' },
            { side: 'Cr', account: 'Bank', amount: '14,800' }
          ]
        },
        {
          title: '配当を受け取る側',
          paras: ['ほかの会社の株を持っていると、その会社が決めた配当を受け取る。受取配当（dividend income）は SPL の収益。', '金額は「持っている株数 × 1株あたりの配当」。決算日までに配当が正式に決まり（受け取る権利が確定し）、まだ入金がなければ未収にする: Dr Dividend receivable / Cr Dividend income。'],
          formula: '受取配当 ＝ 持っている株数 × 1株あたりの配当'
        },
        {
          title: '払う側と受け取る側',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="配当を払う会社では利益剰余金が減り費用にはならない。受け取る会社では収益になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">同じ配当でも、立場で扱いが違う</text><rect x="20" y="52" width="190" height="200" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">払う会社</text><text x="115" y="112" text-anchor="middle" fill="var(--ink)">Dr Retained earnings</text><text x="115" y="134" text-anchor="middle" fill="var(--ink)">Cr Bank</text><text x="115" y="176" text-anchor="middle" fill="var(--ink)">費用ではない</text><text x="115" y="200" text-anchor="middle" fill="var(--ink)">利益剰余金が減る</text><text x="115" y="228" text-anchor="middle" font-size="12.5" fill="var(--quiet)">SOCE に出る（L125）</text><path d="M214 152L226 152" fill="none" stroke="var(--edge)" stroke-width="2"/><path d="M222 146L230 152L222 158" fill="none" stroke="var(--edge)" stroke-width="2"/><rect x="230" y="52" width="190" height="200" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">受け取る会社</text><text x="325" y="112" text-anchor="middle" fill="var(--ink)">Dr Bank</text><text x="325" y="134" text-anchor="middle" fill="var(--ink)">Cr Dividend income</text><text x="325" y="176" text-anchor="middle" fill="var(--ink)">収益になる</text><text x="325" y="200" text-anchor="middle" fill="var(--ink)">利益が増える</text><text x="325" y="228" text-anchor="middle" font-size="12.5" fill="var(--ink)">SPL に出る</text><text x="220" y="278" text-anchor="middle" fill="var(--ink)">決まったのに未入金なら、払う側は未払・受け取る側は未収</text></svg>`,
          caption: '払う配当はオーナーへの利益の分配なので費用ではない。受け取る配当は、投資から得た稼ぎなので収益。'
        },
        {
          title: '例題: 配当',
          example: {
            problem: 'たこ焼き社は Kombu社の株を40,000株持っている。Kombu社は6月に中間配当1株 $0.08 を払い、12月15日に期末配当1株 $0.12 を決めた（入金は翌年1月20日）。たこ焼き社自身も、自社株100,000株に1株 $0.10 の配当を払った。決算日は12月31日。仕訳と今期の受取配当は？',
            steps: ['6月: 40,000 × $0.08 ＝ $3,200。Dr Bank 3,200 / Cr Dividend income 3,200', '12月: 40,000 × $0.12 ＝ $4,800。決算日前に決まったので未収: Dr Dividend receivable 4,800 / Cr Dividend income 4,800', '今期の受取配当: 3,200 ＋ 4,800 ＝ $8,000（SPL の収益）', '自社の配当: 100,000 × $0.10 ＝ $10,000。Dr Retained earnings 10,000 / Cr Bank 10,000（費用ではない）'],
            answer: '受取配当 $8,000、うち $4,800 は SFP の流動資産（未収）'
          }
        },
        {
          title: 'なぜ？ 利息は費用、元金は費用ではない',
          paras: ['元金の返済は、借りたものを返すだけ。会社の持ち物（銀行）と借り（負債）が同じだけ減り、利益は変わらない。', '利息は、お金を使わせてもらった期間のコスト。だから使った期間に合わせて費用にする（発生主義）。配当も同じで、受け取る権利が決算日までに確定していれば、入金を待たずに収益にする。']
        },
        {
          title: 'よくある間違い',
          list: ['返済額 $14,800 を全部費用にする（元金 $10,000 は負債を減らすだけ）', '借入金を全部非流動にする（12か月以内に返す分は流動）', '受け取った配当を利益剰余金に直接入れる（受け取る側では収益）', '決算日の後に決まった配当を、期末に未収にする（まだ権利がない）'],
          note: { kind: 'tip', text: '償還優先株（redeemable preference shares）は負債（L118）。その配当は払う側で finance costs（費用）になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['借入: Dr Bank / Cr Loan。返済: Dr Loan / Cr Bank。利息は Dr Finance costs', '12か月以内に返す元金は流動負債、残りは非流動負債', '受取配当 ＝ 株数 × 1株の配当。収益にし、決算日までに決まって未入金なら未収']
        },
        {
          title: '英単語',
          words: [
            ['borrowings', 'ボロウイングズ', '借入金'],
            ['loan notes', 'ローン・ノーツ', '社債'],
            ['finance costs', 'ファイナンス・コスツ', '金融費用（支払利息など）'],
            ['instalment', 'インストールメント', '分割払いの1回分'],
            ['current / non-current liabilities', '', '流動負債／非流動負債'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（銀行からの借入、流動負債）'],
            ['investment income', 'インベストメント・インカム', '投資収益（受取配当が入る SPL の行）'],
            ['dividend income', 'ディビデンド・インカム', '受取配当（収益）'],
            ['dividend receivable', '', '未収配当'],
            ['dividend per share', '', '1株あたりの配当']
          ]
        }
      ],
      quiz: [
        { q: 'A company receives a bank loan of $50,000, repayable in five years. Which entry records the receipt?', choices: ['Dr Bank $50,000, Cr Loan (non-current liability) $50,000', 'Dr Bank $50,000, Cr Revenue $50,000', 'Dr Bank $50,000, Cr Share capital $50,000', 'Dr Loan $50,000, Cr Bank $50,000'], answer: 0, explain: '借りたお金は返す義務があるので負債。売上でも株式資本でもない。4つ目は返済のときの仕訳。' },
        { q: 'A company took out a loan of $80,000 on 1 July 20X5 at 6% per year. Interest is paid annually on 30 June. What is the finance cost for the year ended 31 December 20X5?', type: 'number', answer: 2400, unit: '$', explain: '7月〜12月の6か月分: 80,000 × 6% × 6/12 ＝ $2,400。まだ払っていないが、発生主義で今期の費用（未払利息）にする。1年分の $4,800 にしないこと。' },
        { q: 'At 31 December 20X5, a loan of $45,000 is outstanding. It is repayable in five equal annual instalments, the first on 30 June 20X6. How is the loan presented?', choices: ['Current $9,000, non-current $36,000', 'Current $45,000', 'Non-current $45,000', 'Current $36,000, non-current $9,000'], answer: 0, explain: '1回分は 45,000 ÷ 5 ＝ $9,000。20X6年6月30日の分だけが12か月以内なので流動。4つ目は流動と非流動が逆。' },
        { q: 'A company holds 30,000 shares in X Co. On 10 December 20X5, X Co declared a dividend of 20c per share, payable on 15 January 20X6. Which entry should the company make at 31 December 20X5?', choices: ['Dr Dividend receivable $6,000, Cr Dividend income $6,000', 'Dr Retained earnings $6,000, Cr Dividend payable $6,000', 'No entry until the cash is received', 'Dr Dividend income $6,000, Cr Dividend receivable $6,000'], answer: 0, explain: '30,000 × $0.20 ＝ $6,000。決算日前に決まったので受け取る権利がある。未収の資産と収益を計上する。2つ目は配当を払う側の仕訳。' },
        { q: '分割返済 $14,800（元金 $10,000、利息 $4,800）を払った。利息に前期の未払いはない。今期の費用になるのは？', choices: ['$4,800', '$14,800', '$10,000', '$0'], answer: 0, explain: '元金の返済は負債を減らすだけで費用ではない。費用になるのは利息だけ。$14,800 は元金まで費用にした間違い。' },
        { q: '決算日（12月31日）の後、1月20日に投資先の会社が配当を決めた。12月31日の帳簿では？', choices: ['未収にしない。決算日にはまだ受け取る権利がない', '未収配当として計上する', '受取配当を負債にする', '利益剰余金を増やす'], answer: 0, explain: '受取配当を計上するのは、受け取る権利が確定したとき。決算日の時点で配当はまだ決まっていない。' }
      ]
    },
    {
      id: 'X05',
      no: 'X5',
      title: '売掛金の照合（得意先への明細書）',
      goal: '売掛金統制勘定・得意先元帳・得意先の記録を照合して誤りを直し、SFP に載せる売掛金を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:D2(a)', 'K1:D2(b)', 'K1:D2(c)', 'K1:D2(d)'],
      slides: [
        {
          title: '友達に貸したお金のメモ',
          paras: ['友達に貸したお金をメモしている。自分のメモでは「Aさんに3,000円」。Aさんのメモでは「借りているのは2,000円」。', '昨日Aさんが1,000円を振り込んで、まだ自分が見ていないだけかもしれない。自分の書き間違いかもしれない。L87 の買掛金の照合を、今度は貸している側（売掛金）でやる。']
        },
        {
          title: '売掛金統制勘定',
          paras: ['売掛金にも、合計の勘定（receivables control account）と、得意先ごとのメモ（receivables ledger）がある。売掛金は資産なので、増えると借方、減ると貸方。'],
          tAccount: {
            name: 'Receivables control',
            debit: [['Balance b/d', '5,200'], ['Credit sales（掛け売上）', '46,000'], ['Dishonoured cheque（不渡り）', '200']],
            credit: [['Bank（回収）', '43,100'], ['Sales returns', '900'], ['Irrecoverable debts', '400'], ['Contra – payables', '300']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '6,700' }
          },
          after: '得意先が見込み外に使った早期支払割引も貸方（Dr Revenue / Cr Receivables control、L27）。',
          note: { kind: 'warn', text: '現金売上と貸倒引当金（allowance for receivables）は入らない。引当金は別の勘定で持つ（L73）。' }
        },
        {
          title: 'なぜ？ 照合する理由',
          list: ['得意先の記録は第三者の独立した証拠。自分の売掛金が正しいかを確かめられる', '記帳漏れ・転記ミスを見つけ、正しい金額を請求・回収できる', '値段や返品の争いに早く気づける', 'SFP に載せる売掛金を正しくできる'],
          after: '会社は得意先に毎月、取引と残高をまとめた明細書（statement of account）を送る。得意先からの残高確認の返事や入金の通知と、自分の帳簿を比べる。'
        },
        {
          title: '違いの原因',
          list: ['時間差: 得意先が月末に払ったお金がまだ届いていない（cash in transit）。月末に送った請求書・商品がまだ得意先に届いていない。出した貸方票を得意先がまだ記録していない', '自分の誤り: 貸方票や入金の記帳漏れ、別の得意先の勘定への記帳、金額の写し間違い', '得意先側の誤りや争い: 得意先に連絡して解決する'],
          after: '時間差と相手の誤りは、相手の数字の側で調整する。自分の誤りだけ、自分の帳簿を直す。'
        },
        {
          title: '例題: 得意先との照合',
          example: {
            problem: '得意先 Ika社の元帳残高は $3,450。Ika社の記録では $1,980。(1) Ika社が12月30日に送った $800 が、1月3日に届いた。(2) 12月31日に送った請求書 $350 を、Ika社はまだ受け取っていない。(3) Ika社に出した貸方票 $120 を記帳し忘れた。(4) Tako社への請求書 $200 を、Ika社の勘定に書いた。正しい残高は？',
            steps: ['自分の誤りは (3)(4)。元帳を直す: 3,450 − 120 − 200 ＝ $3,130', '(1) は届いていない入金＝時間差。期末にはまだ受け取っていないので、自分の帳簿は直さない', '(2) も時間差。Ika社の記録の側に足す', 'Ika社の側: 1,980 ＋ 800 ＋ 350 ＝ $3,130', '両方が $3,130 で一致'],
            answer: 'Ika社の売掛金は $3,130。(4) の $200 は Tako社の勘定に移す（合計は変わらない）'
          }
        },
        {
          title: '照合表の形',
          table: { caption: 'Ika社の照合表（12月31日）', head: ['項目', '$'], rows: [['Balance per receivables ledger', '3,450'], ['Less: credit note not recorded', '(120)'], ['Less: invoice posted to wrong account', '(200)'], ['Corrected ledger balance', '3,130'], ['Balance per customer records', '1,980'], ['Add: cash in transit', '800'], ['Add: invoice not yet received by customer', '350']], total: ['Agrees with corrected balance', '3,130'] }
        },
        {
          title: '統制勘定の誤りは仕訳で直す',
          paras: ['統制勘定と残高一覧（list of receivables ledger balances）も比べる。L88 と同じく、総勘定元帳の誤りだけ仕訳で直す。'],
          list: ['売上日記帳の合計が少ない → Dr Receivables control / Cr Revenue', '貸倒れを個別勘定だけで償却した → Dr Irrecoverable debts / Cr Receivables control', '買掛金との相殺を統制勘定に入れ忘れた → Dr Payables control / Cr Receivables control', '不渡りを記録していない → Dr Receivables control / Cr Bank'],
          after: '個別勘定や一覧だけの誤りは、一覧を直すだけで仕訳はいらない。'
        },
        {
          title: '例題: 統制勘定と一覧',
          example: {
            problem: '統制勘定は借方 $28,750、一覧の合計は $29,400。(1) 売上日記帳の合計が $1,000 少なかった（個別の転記は正しい）。(2) 貸倒れ $430 を個別勘定では償却したが、総勘定元帳に記録していない。(3) 貸方残高 $150 の得意先を、一覧に借方で入れた。(4) 残高 $310 の得意先が一覧から漏れた。(5) 入金 $540 を個別勘定に $450 と書いた。修正後の残高は？',
            steps: ['統制勘定は (1)(2): 28,750 ＋ 1,000 − 430 ＝ $29,320', '仕訳: Dr Receivables control 1,000 / Cr Revenue 1,000。Dr Irrecoverable debts 430 / Cr Receivables control 430', '一覧は (3)(4)(5): (3) −150 を ＋150 で数えた → −300。(4) ＋310。(5) 入金を $90 少なく引いた → −90', '一覧: 29,400 − 300 ＋ 310 − 90 ＝ $29,320', '両方が $29,320 で一致'],
            answer: '修正後の売掛金 $29,320'
          }
        },
        {
          title: 'SFP に載せる売掛金',
          paras: ['SFP の売掛金（trade receivables）は、修正後の統制勘定の残高から貸倒引当金を引いた金額。得意先の記録の合計でも、直す前の残高でもない。', '例: 修正後 $29,320、貸倒引当金 $1,320 なら、SFP には $28,000。'],
          formula: 'SFP の売掛金 ＝ 修正後の統制勘定 − allowance for receivables',
          note: { kind: 'warn', text: '届いていない入金（cash in transit）を、期末の売掛金から引かない。お金は期末にはまだ届いていない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['統制勘定の借方: 掛け売上・不渡り。貸方: 回収・売上戻り・貸倒れ・相殺。引当金と現金売上は入らない', '時間差は得意先の側で調整、自分の誤りは自分の帳簿を直す。総勘定元帳の誤りだけ仕訳', 'SFP の売掛金 ＝ 修正後の統制勘定 − 貸倒引当金']
        },
        {
          title: '英単語',
          words: [
            ['receivables control account', '', '売掛金統制勘定'],
            ['receivables ledger', '', '得意先元帳（sales ledger とも）'],
            ['statement of account', 'ステートメント・オブ・アカウント', '得意先に送る取引・残高の明細書'],
            ['cash in transit', 'キャッシュ・イン・トランジット', 'まだ届いていない入金'],
            ['dishonoured cheque', 'ディスオナード・チェック', '不渡りの小切手'],
            ['credit balance', 'クレジット・バランス', '貸方残高（得意先の払いすぎなど）'],
            ['sales day book', '', '売上日記帳']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is recorded on the credit side of the receivables control account?', choices: ['Irrecoverable debts written off', 'Credit sales', 'A dishonoured cheque from a customer', 'An increase in the allowance for receivables'], answer: 0, explain: '貸倒れの償却は売掛金を減らすので貸方。掛け売上と不渡りは売掛金を増やすので借方。引当金は別の勘定なので統制勘定には入らない。' },
        { q: 'A business has opening trade receivables of $12,400. During the year, credit sales were $86,000, cash sales were $9,000, cash received from credit customers was $81,500, sales returns were $1,700 and irrecoverable debts written off were $900. The allowance for receivables was increased by $300. What is the closing balance on the receivables control account?', type: 'number', answer: 14300, unit: '$', explain: '借方: 12,400 ＋ 86,000 ＝ $98,400。貸方: 81,500 ＋ 1,700 ＋ 900 ＝ $84,100。残高 $14,300。現金売上と引当金の増加は統制勘定に入らない。' },
        { q: 'When reconciling a customer\'s records with the receivables ledger, which of the following is a timing difference?', choices: ['Goods invoiced on 31 December which the customer received on 2 January', 'A credit note issued to the customer but not recorded in the receivables ledger', 'An invoice posted to the wrong customer account', 'A receipt recorded twice in the receivables ledger'], answer: 0, explain: '月末に送った請求書が年明けに届くのは時間差。ほかの3つは自分の帳簿の誤りなので、自分の帳簿を直す。' },
        { q: 'An irrecoverable debt of $430 was written off in the customer\'s individual account but was not recorded in the general ledger. Which journal entry corrects this?', choices: ['Dr Irrecoverable debts $430, Cr Receivables control $430', 'Dr Receivables control $430, Cr Irrecoverable debts $430', 'Dr Allowance for receivables $430, Cr Receivables control $430', 'No journal is needed; adjust the list of balances only'], answer: 0, explain: '総勘定元帳で、費用の記録と売掛金の減少が漏れている。費用を借方、統制勘定を貸方。2つ目は左右が逆。個別勘定はもう正しいので一覧は直さない。' },
        { q: 'After correcting errors, the receivables control account shows $45,600. The allowance for receivables is $2,100. Customer records total $44,000 because of cash in transit. What amount is reported as trade receivables in the statement of financial position?', choices: ['$43,500', '$45,600', '$44,000', '$41,900'], answer: 0, explain: '修正後の統制勘定 $45,600 − 引当金 $2,100 ＝ $43,500。得意先の記録の合計は、届いていない入金の分だけ少ないだけで使わない。$41,900 は得意先の記録から引当金を引いた間違い。' },
        { q: '得意先が12月30日に払ったお金が、1月3日に届いた。12月31日の自分の帳簿はどうする？', choices: ['直さない。得意先の記録の側で足して調整する', '売掛金から引く', '銀行の残高に足す', '売上を減らす'], answer: 0, explain: '期末にはまだお金を受け取っていないので、売掛金は残ったまま。時間差なので相手の数字の側で調整する。' }
      ]
    }
  ],
  cards: [
    { id: 'X01-1', lesson: 'X01', q: '手取り（net pay）の計算は？', a: '総支給額 − 従業員の控除（所得税・社会保険料・年金など）' },
    { id: 'X01-2', lesson: 'X01', q: '人件費（staff costs）の計算は？', a: '総支給額 ＋ 会社負担の社会保険料・年金' },
    { id: 'X01-3', lesson: 'X01', q: 'なぜ天引きを人件費に足さない？', a: '本人の給料から払うお金を会社が預かるだけだから' },
    { id: 'X01-4', lesson: 'X01', q: '税務当局に払う額に入るものは？', a: '所得税＋従業員の社会保険料＋会社の社会保険料' },
    { id: 'X01-5', lesson: 'X01', q: '残業10時間、時給 $20 の1.5倍。残業代は？', a: '10 × 20 × 1.5 ＝ $300' },
    { id: 'X01-6', lesson: 'X01', q: 'gross pay / net pay の意味は？', a: '総支給額（額面）／手取り' },
    { id: 'X02-1', lesson: 'X02', q: '給料日の仕訳の形は？', a: 'Dr Staff costs / Cr Bank（手取り）・Tax authority payable・Pension payable' },
    { id: 'X02-2', lesson: 'X02', q: '天引きした税金はなぜ負債？', a: '税務当局に渡すまで、会社が預かっているお金だから' },
    { id: 'X02-3', lesson: 'X02', q: '天引きした税金を払ったときの仕訳は？', a: 'Dr Tax authority payable / Cr Bank（費用は増やさない）' },
    { id: 'X02-4', lesson: 'X02', q: '賃金統制勘定の貸方と借方には何が入る？', a: '貸方に人件費の全額、借方に手取り・税金・年金の行き先' },
    { id: 'X02-5', lesson: 'X02', q: '期末に未払いの税金・年金は SFP のどこ？', a: '流動負債（other payables）' },
    { id: 'X03-1', lesson: 'X03', q: '小口現金出納帳の列の合計はどう仕訳する？', a: 'Dr 各費用・売上税 / Cr Petty cash' },
    { id: 'X03-2', lesson: 'X03', q: '期末（補充前）の小口現金は SFP にいくら？', a: '手元にある現金の額。定額ではない' },
    { id: 'X03-3', lesson: 'X03', q: '仮払い（IOU）は何として扱う？', a: '費用ではなく債権（Dr Other receivables / Cr Petty cash）' },
    { id: 'X03-4', lesson: 'X03', q: 'レジの売上金を銀行に預けた仕訳は？', a: 'Dr Bank / Cr Cash（売上は増やさない）' },
    { id: 'X03-5', lesson: 'X03', q: '現金売上の逆算式は？', a: '預け入れ＋現金での支払い＋期末の現金 − 期首の現金' },
    { id: 'X03-6', lesson: 'X03', q: '現金の不足額の出し方は？', a: 'あるはずの現金（期首＋売上−預け入れ−支払い）− 数えた現金' },
    { id: 'X04-1', lesson: 'X04', q: '借入を受けた・返したときの仕訳は？', a: '借りた: Dr Bank / Cr Loan。返した: Dr Loan / Cr Bank' },
    { id: 'X04-2', lesson: 'X04', q: '借入金の流動・非流動の分け方は？', a: '期末から12か月以内に返す分が流動、残りが非流動' },
    { id: 'X04-3', lesson: 'X04', q: 'なぜ元金の返済は費用にならない？', a: '借りたものを返すだけで、資産と負債が同じだけ減るから' },
    { id: 'X04-4', lesson: 'X04', q: '受取配当の計算は？', a: '持っている株数 × 1株あたりの配当' },
    { id: 'X04-5', lesson: 'X04', q: '決算日前に決まり、未入金の受取配当の仕訳は？', a: 'Dr Dividend receivable / Cr Dividend income' },
    { id: 'X04-6', lesson: 'X04', q: '払う配当と受け取る配当の違いは？', a: '払う側は利益剰余金を減らす（費用でない）。受け取る側は SPL の収益' },
    { id: 'X05-1', lesson: 'X05', q: '売掛金統制勘定の貸方に入るものは？', a: '回収、売上戻り、貸倒れの償却、買掛金との相殺、得意先が使った割引' },
    { id: 'X05-2', lesson: 'X05', q: '売掛金統制勘定に入らないものは？', a: '現金売上と貸倒引当金' },
    { id: 'X05-3', lesson: 'X05', q: '得意先の記録と照合する目的は？', a: '第三者の独立した記録と比べ、誤りを見つけて正しく回収・表示するため' },
    { id: 'X05-4', lesson: 'X05', q: '届いていない入金（cash in transit）はどう扱う？', a: '時間差。得意先の記録の側で調整し、自分の帳簿は直さない' },
    { id: 'X05-5', lesson: 'X05', q: '貸倒れを総勘定元帳に記録し忘れた。直す仕訳は？', a: 'Dr Irrecoverable debts / Cr Receivables control' },
    { id: 'X05-6', lesson: 'X05', q: 'SFP に載せる売掛金は？', a: '修正後の統制勘定の残高 − 貸倒引当金' }
  ]
});
