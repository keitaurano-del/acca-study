(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 35,
  part: 21,
  partTitle: 'K1拡張',
  lessons: [
    {
      id: 'X06',
      no: 'X6',
      title: 'パートナーシップとパートナーシップ契約',
      goal: 'パートナーシップとは何かを説明し、パートナーシップ契約の目的と、契約に書く内容をあげられるようになる',
      minutes: 11,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:H1(a)', 'K1:H1(b)'],
      slides: [
        {
          title: 'ルームシェアで考える',
          paras: ['友達と2人でルームシェアを始める。家賃は半分ずつ？ 広い部屋の人が多く払う？ 家具を買った人には、そのお礼をする？', '最初に決めておかないと、後で必ずもめる。2人以上で事業をするときも同じ。お金の出し方と、もうけの分け方を先に決めておく。']
        },
        {
          title: 'パートナーシップとは',
          paras: ['L106 で見たとおり、パートナーシップ（partnership）は「2人以上が、利益のために一緒に事業をする関係」。英語の定義は "two or more persons carrying on a business in common with a view to profit"。一緒に事業をする人をパートナー（partner）と呼ぶ。'],
          list: ['法律上は、パートナー本人と別の人ではない（会社とちがう）', '事業の借金が返せないと、パートナーが個人の財産からも払う。これを無限責任（unlimited liability）という', '1人のパートナーが事業のために結んだ契約に、パートナー全員が縛られる']
        },
        {
          title: 'たこ焼き屋がパートナーシップになる',
          paras: ['たこ焼き屋のオーナー Aki が、友達の Ben と一緒にお店をやることにした。Aki は $40,000、Ben は $20,000 を出す。Aki は週3日、Ben は毎日お店に立つ。', 'もうけはどう分ける？ 出したお金も働く量もちがうので、ただ半分ずつにすると、どちらかが不公平だと感じる。だから2人は、分け方を約束として書いておく。']
        },
        {
          title: 'パートナーシップ契約（partnership agreement）',
          paras: ['パートナーどうしの権利と義務を決めた約束。目的は、もめごとを防ぐこと。口約束でも成り立つが、ふつうは書面にする。主な中身は次のとおり。'],
          list: ['各パートナーが出す資本（capital）の額', '残りの利益・損失を分ける割合（profit-sharing ratio）', '資本への利息（interest on capital）の率', 'パートナーへの給与（partners’ salaries）', '引出しへの利息（interest on drawings）の率と、引出しの上限', 'パートナーの加入・脱退のときの扱い（のれんの評価など）', 'もめたときの解決方法、事業をやめるときの手順']
        },
        {
          title: 'お金の分け方を決める4つの道具',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="利益の分け方を決める4つの道具: 給与、資本への利息、引出しへの利息、残りを分ける割合" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">利益の分け方を決める4つの道具</text><rect x="20" y="52" width="192" height="124" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="82" font-size="16" font-weight="600" fill="var(--ink)">① 給与</text><text x="34" y="104" font-size="12.5" fill="var(--quiet)">salary</text><text x="34" y="132" fill="var(--ink)">多く働いた人に</text><text x="34" y="154" fill="var(--ink)">先に渡す</text><rect x="228" y="52" width="192" height="124" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="242" y="82" font-size="16" font-weight="600" fill="var(--ink)">② 資本への利息</text><text x="242" y="104" font-size="12.5" fill="var(--quiet)">interest on capital</text><text x="242" y="132" fill="var(--ink)">多く出資した人に</text><text x="242" y="154" fill="var(--ink)">先に渡す</text><rect x="20" y="188" width="192" height="124" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="218" font-size="16" font-weight="600" fill="var(--ink)">③ 引出しへの利息</text><text x="34" y="240" font-size="12.5" fill="var(--quiet)">interest on drawings</text><text x="34" y="268" fill="var(--ink)">早く持ち出した人</text><text x="34" y="290" fill="var(--ink)">が払う</text><rect x="228" y="188" width="192" height="124" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="242" y="218" font-size="16" font-weight="600" fill="var(--ink)">④ 残りを分ける割合</text><text x="242" y="240" font-size="12.5" fill="var(--quiet)">profit-sharing ratio</text><text x="242" y="268" fill="var(--ink)">残った利益を</text><text x="242" y="290" fill="var(--ink)">決めた割合で分ける</text></svg>`,
          caption: 'どれを使うか、率や割合をいくつにするかは契約しだい。次のレッスン（X7）で、この4つを使って実際に計算する。'
        },
        {
          title: 'なぜ？ 契約が必要な理由',
          paras: ['パートナーシップは、人と人の約束でできた事業。会社のように、法律が細かい形を決めているわけではない。', 'パートナーごとに、出したお金・働く量・持ち出したお金がちがう。決まりがないと「誰がいくらもらうか」で必ずもめる。契約に書いておけば、会計ではその約束どおりに計算するだけでよい。', '試験の問題文に出る「A と B は 3:2 で利益を分ける」「資本に 5% の利息」などは、全部この契約の中身。']
        },
        {
          title: '契約で決めていないことは？',
          paras: ['契約に書いていないことは、その国の法律の決まりに従う。たとえば英国の法律（Partnership Act 1890）では、利益は均等に分け、資本への利息・パートナーへの給与・引出しへの利息は付かない。パートナーが資本とは別に貸したお金（借入金）には、年 5% の利息が付く。'],
          note: { kind: 'tip', text: '試験では、ふつう問題文に契約の中身（割合・率・給与）が書いてある。書いてある数字だけを使って計算する。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①パートナーへの給与を、従業員の給料と同じ費用だと思う（利益の分け方の1つ。費用ではない）。②パートナーシップも会社と同じく有限責任だと思う（パートナーは個人の財産でも借金の責任を負う）。③利益は必ず半分ずつだと思う（契約で決めた割合で分ける）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['パートナーシップ＝2人以上が利益のために一緒に事業をする関係。法律上は別の人ではなく、パートナーは無限責任', '契約の目的＝パートナーの権利と義務を決めて、もめごとを防ぐ', '契約の中身＝資本の額、利益を分ける割合、給与、資本への利息、引出しへの利息、加入・脱退の扱い']
        },
        {
          title: '英単語',
          words: [
            ['partnership', 'パートナーシップ', '2人以上が利益のために一緒にする事業'],
            ['partner', 'パートナー', '一緒に事業をする人（持ち主）'],
            ['partnership agreement', '', 'パートナーシップ契約'],
            ['profit-sharing ratio (PSR)', '', '残りの利益・損失を分ける割合'],
            ['unlimited liability', '', '無限責任（個人の財産でも借金を払う）'],
            ['interest on capital', '', '資本への利息'],
            ['interest on drawings', '', '引出しへの利息'],
            ['partners’ salaries', '', 'パートナーへの給与（費用ではない）']
          ]
        }
      ],
      quiz: [
        { q: 'What is the main purpose of a partnership agreement?', choices: ['To set out the rights and duties of the partners and reduce the risk of disputes', 'To give the partnership a separate legal identity from its partners', 'To limit the liability of each partner to the capital they invested', 'To meet a legal requirement to publish financial statements'], answer: 0, explain: '契約の目的は、権利と義務を決めてもめごとを防ぐこと。2つ目と3つ目は会社の特徴で、契約を結んでもパートナーシップは別の人にならず、無限責任のまま。' },
        { q: 'Which of the following would NOT normally be included in a partnership agreement?', choices: ['The profit-sharing ratio', 'The rate of interest on capital', 'The dividends payable to shareholders', 'Salaries payable to partners'], answer: 2, explain: '配当（dividends）と株主（shareholders）は会社の言葉。パートナーシップには株も株主もない。ほかの3つは契約の代表的な中身。' },
        { q: 'パートナーシップの借金を、事業のお金で返せなくなった。どうなる？', choices: ['パートナーが個人の財産からも払う責任を負う', 'パートナーは出した資本の額までしか責任を負わない', '事業は別の人なので、パートナーは責任を負わない', '貸した銀行があきらめるしかない'], answer: 0, explain: 'パートナーは無限責任。2つ目は有限責任（会社の株主）の説明。3つ目は「会計では別」と「法律でも別」を混ぜた引っかけ。' },
        { q: 'パートナーへの給与（partner’s salary）とは何？', choices: ['利益の分け方の1つ', '損益計算書の人件費（費用）', 'パートナーからの借入金', '引出しと同じもの'], answer: 0, explain: 'パートナーは持ち主なので、給与は利益を分ける道具の1つ。従業員の給料のような費用ではない。引出しは実際にお金を持ち出すことで、別のもの。' },
        { q: '法律上は別の人ではないのに、会計ではパートナーシップとパートナー個人を分けて記録する。理由は？', choices: ['企業実体の公準（business entity concept）があるから', '法律上も別の人だから', 'パートナーシップが法人税を払うから', '株主に報告する必要があるから'], answer: 0, explain: 'L02 と L106 で学んだ企業実体の公準。事業の成績をパートナーの家計と混ぜないため。法律上別なのは会社だけ。' }
      ]
    },
    {
      id: 'X07',
      no: 'X7',
      title: '利益の分配（給与・引出しへの利息・資本への利息・残り）',
      goal: 'パートナーシップの利益を、給与・資本への利息・引出しへの利息・残りの分配の順に計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:H1(c)'],
      slides: [
        {
          title: 'バンドのギャラで考える',
          paras: ['2人組のバンドが、ライブで10万円もらった。曲を全部作った人に、先に2万円。機材のお金を多く出した人に、そのお礼を先に。ライブ前に前借りしていた人は、その分の負担をする。', 'そして残りを、決めた割合で分ける。「特別な分を先に調整して、残りを分ける」。パートナーシップの利益の分け方は、これと同じ形。']
        },
        {
          title: '利益の分配（appropriation）',
          paras: ['損益計算書で出した当期の利益を、パートナーに配り分けることを appropriation of profit（利益の分配）という。使う道具は4つ。'],
          list: ['給与（salary）: 決まった額。多く働くパートナーへ', '資本への利息（interest on capital）: 資本 × 率。多く出資したパートナーへ', '引出しへの利息（interest on drawings）: 引出し × 率（日付があれば月割り）。持ち出したパートナーが払う', '残り（residual profit）: 決めた割合（profit-sharing ratio）で分ける']
        },
        {
          title: '分ける順番',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="当期の利益に引出しへの利息を足し、給与と資本への利息を引いた残りを割合で分ける" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">利益を分ける順番（Aki と Ben の例）</text><rect x="20" y="50" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="80" font-size="15" font-weight="600" fill="var(--ink)">当期の利益</text><text x="404" y="80" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$60,000</text><rect x="20" y="112" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="142" font-size="15" fill="var(--ink)">＋ 引出しへの利息（パートナーが払う）</text><text x="404" y="142" text-anchor="end" font-size="15" fill="var(--ink)">$1,000</text><rect x="20" y="174" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="204" font-size="15" fill="var(--ink)">− 給与 − 資本への利息（先に渡す）</text><text x="404" y="204" text-anchor="end" font-size="15" fill="var(--ink)">$13,000</text><rect x="20" y="236" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="266" font-size="15" font-weight="600" fill="var(--ink)">＝ 残り → 3:2 で分ける</text><text x="404" y="266" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$48,000</text></svg>`,
          formula: '残り ＝ 当期の利益 ＋ 引出しへの利息 − 給与 − 資本への利息'
        },
        {
          title: 'なぜ？ この順番と、費用ではない理由',
          paras: ['出したお金・働いた量・持ち出した時期の差を先に調整して、残りを公平に分けるため。資本への利息は「そのお金を銀行に預けていたらもらえた利息」の代わり。早く持ち出した人は事業のお金を先に使ったので、その分の利息を払う。払ったお金は分ける利益に足す。', 'パートナーは持ち主なので、給与も資本への利息も「利益の分け方」で、費用ではない。当期の利益を出した後で使う。'],
          note: { kind: 'tip', text: 'ただし、パートナーが資本とは別に事業へ貸したお金（借入金）の利息は費用になる（X9 でくわしく）。' }
        },
        {
          title: '引出しへの利息①: 日付がないとき',
          paras: ['引出しが「毎月 $500」「1年で $6,000」のように日付なしで書いてあれば、1年の引出しの合計に率をそのままかける。月割りはしない。', 'たとえば家族の財布から毎月前借りして、年に1回「前借りの合計の 10%」を戻す約束。いつ借りたかは見ず、合計で計算する。'],
          formula: '日付なし: 引出しへの利息 ＝ 1年の引出しの合計 × 率',
          example: { problem: 'パートナーの Eri は毎月 $500 を引き出した（日付は書いていない）。引出しへの利息は年 10%。引出しへの利息はいくら？', steps: ['1年の合計: $500 × 12 ＝ $6,000', '率をそのままかける: $6,000 × 10% ＝ $600', '日付がないので月割りしない'], answer: '$600' }
        },
        {
          title: '引出しへの利息②: 日付があるとき',
          paras: ['引き出した日付が書いてあるとき、または問題文が月割りを指示するときだけ、決算日までの月数で月割りする。早く持ち出した人ほど多く払う。'],
          example: { problem: '（Aki と Ben とは別の例）パートナーの Dan は 4月1日に $12,000 を引き出した。決算日は12月31日、引出しへの利息は年 10%。引出しへの利息はいくら？', steps: ['引き出した日から決算日まで: 4月1日〜12月31日で 9か月', '1年分の利息: $12,000 × 10% ＝ $1,200', '9か月分: $1,200 × 9/12 ＝ $900'], answer: '$900。Dan の取り分から引き、分ける利益に足す' },
          note: { kind: 'tip', text: '資本への利息は、ふつう期首の資本 × 率。期中に資本を増やしたら、増やした分は月割り。例: 7月1日に $10,000 追加、率 5% なら $10,000 × 5% × 6/12 ＝ $250 が加わる。' }
        },
        {
          title: '例題: 2人の取り分',
          example: { problem: 'Aki と Ben はパートナー。当期の利益 $60,000。資本は Aki $40,000、Ben $20,000 で、資本への利息は年 5%。Ben に給与 $10,000。引出しへの利息は Aki $600、Ben $400。残りは Aki:Ben＝3:2 で分ける。それぞれの取り分は？', steps: ['資本への利息: Aki $40,000 × 5% ＝ $2,000、Ben $20,000 × 5% ＝ $1,000', '残り: $60,000 ＋ $1,000（引出しへの利息）− $10,000（給与）− $3,000（資本への利息）＝ $48,000', '3:2 で分ける: Aki $48,000 × 3/5 ＝ $28,800、Ben $48,000 × 2/5 ＝ $19,200', 'Aki: $2,000 ＋ $28,800 − $600 ＝ $30,200', 'Ben: $10,000 ＋ $1,000 ＋ $19,200 − $400 ＝ $29,800', '確かめ: $30,200 ＋ $29,800 ＝ $60,000（当期の利益と一致）'], answer: 'Aki $30,200、Ben $29,800' }
        },
        {
          title: '分配表にまとめる',
          table: {
            caption: 'Appropriation statement（利益分配表）',
            head: ['項目', 'Aki $', 'Ben $'],
            rows: [
              ['Salary', '–', '10,000'],
              ['Interest on capital', '2,000', '1,000'],
              ['Interest on drawings', '(600)', '(400)'],
              ['Residual profit (3:2)', '28,800', '19,200']
            ],
            total: ['Total', '30,200', '29,800']
          },
          after: '2人の合計 $60,000 が当期の利益と一致すれば正しい。引出しへの利息はパートナーが払うので、かっこ（マイナス）で書く。'
        },
        {
          title: '残りがマイナスになったら',
          example: { problem: '当期の利益 $20,000。X に給与 $15,000。資本への利息は X $3,000、Y $4,000。残りは X:Y＝1:1。それぞれの取り分は？', steps: ['残り: $20,000 − $15,000 − $3,000 − $4,000 ＝ −$2,000（損失）', 'マイナスも 1:1 で負担: X −$1,000、Y −$1,000', 'X: $15,000 ＋ $3,000 − $1,000 ＝ $17,000', 'Y: $4,000 − $1,000 ＝ $3,000', '確かめ: $17,000 ＋ $3,000 ＝ $20,000'], answer: 'X $17,000、Y $3,000' },
          after: '給与と利息は利益が足りなくても契約どおり先に配る。足りない分（residual loss）を、決めた割合で負担する。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①給与や資本への利息を費用として利益から引き、さらに分配でも引く（二重に引いている）。②引出しへの利息を、分ける利益から引く（パートナーが払うので足す）。③最初に利益全部を 3:2 で分ける（給与と利息が先）。④日付が書いてある引出しを月割りしない（日付があれば月割り。日付がなければ年の合計 × 率）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['順番: 給与と資本への利息を先に渡し、引出しへの利息を足し、残りを割合で分ける', '残り＝当期の利益＋引出しへの利息−給与−資本への利息。マイナスでも割合で負担する', '全員の取り分の合計は、当期の利益と必ず一致する']
        },
        {
          title: '英単語',
          words: [
            ['appropriation of profit', 'アプロプリエーション', '利益の分配'],
            ['appropriation statement', '', '利益分配表'],
            ['residual profit / loss', 'レジデュアル', '給与・利息を調整した後の残りの利益・損失'],
            ['profit-sharing ratio', '', '残りを分ける割合'],
            ['interest on capital', '', '資本への利息（パートナーに渡す）'],
            ['interest on drawings', '', '引出しへの利息（パートナーが払う）'],
            ['salary', 'サラリー', 'パートナーへの給与（分配の1つ）']
          ]
        }
      ],
      quiz: [
        { q: 'C and D are in partnership, sharing residual profits 2:1. Profit for the year was $45,000. D is entitled to a salary of $6,000. Interest on capital is $3,000 for C and $2,000 for D. Interest on drawings is $1,200 for C and $800 for D. What is the total share of profit for C?', type: 'number', answer: 25800, unit: '$', explain: '残り＝$45,000 ＋ $2,000 − $6,000 − $5,000 ＝ $36,000。C は 2/3 で $24,000。C の合計＝$3,000 ＋ $24,000 − $1,200 ＝ $25,800。D は $6,000 ＋ $2,000 ＋ $12,000 − $800 ＝ $19,200 で、合計 $45,000 と一致する。' },
        { q: 'Which of the following is correct when calculating the residual profit of a partnership?', choices: ['Interest on drawings is added; partner salaries and interest on capital are deducted', 'Interest on drawings is deducted; partner salaries and interest on capital are added', 'Interest on drawings, partner salaries and interest on capital are all deducted', 'Only partner salaries are deducted; interest is ignored'], answer: 0, explain: '引出しへの利息はパートナーが払うので足す。給与と資本への利息はパートナーに渡すので引く。2つ目は足し算と引き算が逆。3つ目は引出しへの利息の向きを間違えている。' },
        { q: 'Ben は 7月1日に $8,000 を引き出した。決算日は12月31日、引出しへの利息は年 5%。引出しへの利息はいくら？', type: 'number', answer: 200, unit: '$', explain: '日付が書いてあるので月割りする。7月1日〜12月31日で 6か月。$8,000 × 5% × 6/12 ＝ $200。月割りしないと $400 になってしまう。' },
        { q: 'G is a partner. During the year ended 31 December 20X6, G made drawings of $750 per month. Interest on drawings is charged at 8% per annum. No dates are given for the individual drawings. What is the interest on drawings charged to G?', type: 'number', answer: 720, unit: '$', explain: '日付がないので、1年の合計に率をかける。$750 × 12 ＝ $9,000、$9,000 × 8% ＝ $720。平均して半年分とみて $360 にしたり、1か月分だけ $750 × 8% ＝ $60 にしたりしない。' },
        { q: '当期の利益 $12,000。P に給与 $8,000。資本への利息は P $2,000、Q $4,000。残りは P:Q＝1:1。Q の取り分は？', choices: ['$3,000', '$4,000', '$5,000', '$6,000'], answer: 0, explain: '残り＝$12,000 − $8,000 − $6,000 ＝ −$2,000。1:1 で各 −$1,000。Q＝$4,000 − $1,000 ＝ $3,000。$4,000 は損失の負担を忘れたとき、$5,000 はマイナスを足してしまったとき、$6,000 は利益全部を半分にしたとき。' },
        { q: 'How should salaries payable to partners be treated in partnership accounts?', choices: ['As an appropriation of profit', 'As an expense in the statement of profit or loss', 'As a liability in the statement of financial position', 'As a reduction of the capital account'], answer: 0, explain: 'パートナーへの給与は利益の分配。費用にすると、利益を出すときと分けるときで二重に引くことになる。' }
      ]
    },
    {
      id: 'X08',
      no: 'X8',
      title: '資本勘定と当座勘定',
      goal: 'パートナーの資本勘定と当座勘定のちがいを説明し、2つの勘定を記入して残高を出せるようになる',
      minutes: 14,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:H2(a)', 'K1:H2(b)'],
      slides: [
        {
          title: '定期預金と財布を分ける',
          paras: ['長く置いておくお金は定期預金、毎月出し入れするお金は財布。2つを分けておくと、「約束どおり貯めているか」と「今月使いすぎていないか」が、それぞれすぐ分かる。', 'パートナーのお金も、同じように2つの勘定に分けて記録する。']
        },
        {
          title: '2つの勘定',
          list: ['資本勘定（capital account）: 契約で決めた、長く事業に入れておく元手。金額はふつう固定（fixed capital）。動くのは、資本を追加・引き上げたときと、のれんの調整（X10）のときだけ', '当座勘定（current account）: 毎年の取り分と引出しを記録する。貸方（増える）に給与・資本への利息・残りの利益の取り分。借方（減る）に引出し・引出しへの利息・残りの損失の取り分'],
          note: { kind: 'tip', text: 'ここの current account は、銀行の当座預金とは別物。パートナーごとの「その年の取り分の精算口座」。' }
        },
        {
          title: '2つをくらべる',
          table: {
            caption: '資本勘定と当座勘定',
            head: ['項目', '資本勘定', '当座勘定'],
            rows: [
              ['記録するもの', '長く入れておく元手', '毎年の取り分と引出し'],
              ['よく動く？', 'ほとんど動かない', '毎年動く'],
              ['貸方（増える）', '資本の追加、のれんの分', '給与、利息、利益の取り分'],
              ['借方（減る）', '資本の引き上げ', '引出し、引出しへの利息、損失']
            ]
          },
          after: '契約で資本を固定しない場合は、1つの資本勘定に全部を記録する（fluctuating capital）。個人事業の資本勘定と同じ形になる。'
        },
        {
          title: 'なぜ？ 2つに分ける理由',
          paras: ['資本への利息は、資本の額をもとに計算する。毎年の利益や引出しで資本が動くと、計算の土台がぶれてしまう。', '約束した出資（資本勘定）と、毎年の取り分・引出し（当座勘定）を分けておくと、約束どおり出資しているか、取り分より多く持ち出していないかが、ひと目で分かる。個人事業では1つの資本勘定に利益も引出しも入れたが、パートナーシップでは2つに分ける。']
        },
        {
          title: '例題: Aki の当座勘定',
          example: { problem: 'X7 の続き。Aki の当座勘定の期首残高は $1,500（貸方）。今年の資本への利息 $2,000、残りの利益の取り分 $28,800。引出し $15,000、引出しへの利息 $600。期末残高は？', steps: ['貸方（増える）: $1,500 ＋ $2,000 ＋ $28,800 ＝ $32,300', '借方（減る）: $15,000 ＋ $600 ＝ $15,600', '残高: $32,300 − $15,600 ＝ $16,700（貸方残高）'], answer: '$16,700 の貸方残高。Aki の資本勘定は $40,000 のまま' }
        },
        {
          title: 'T勘定で見る',
          tAccount: { name: 'Current account – Aki', debit: [['Drawings', '15,000'], ['Interest on drawings', '600']], credit: [['Balance b/d', '1,500'], ['Interest on capital', '2,000'], ['Share of residual profit', '28,800']], balance: { side: 'debit', label: 'Balance c/d', amount: '16,700' } },
          after: '借方の合計 $15,600 ＋ $16,700 ＝ $32,300 が、貸方の合計と一致する。'
        },
        {
          title: '借方残高になることもある',
          paras: ['Ben は期首に $700 の借方残高（前の年に持ち出しすぎた）。今年は給与 $10,000、資本への利息 $1,000、残りの利益 $19,200。年末近くにまとめて $31,000 を引き出し、引出しへの利息は $400。'],
          tAccount: { name: 'Current account – Ben', debit: [['Balance b/d', '700'], ['Drawings', '31,000'], ['Interest on drawings', '400']], credit: [['Salary', '10,000'], ['Interest on capital', '1,000'], ['Share of residual profit', '19,200']], balance: { side: 'credit', label: 'Balance c/d', amount: '1,900' } },
          after: '借方 $32,100、貸方 $30,200 なので $1,900 の借方残高。Ben は取り分より多く持ち出していて、事業に借りがある状態。'
        },
        {
          title: '仕訳で見る（Aki）',
          journal: [
            { side: 'Dr', account: 'Appropriation account（利益分配）', amount: '30,800' },
            { side: 'Cr', account: 'Current account – Aki', amount: '30,800' },
            { side: 'Dr', account: 'Current account – Aki', amount: '600' },
            { side: 'Cr', account: 'Appropriation account（利益分配）', amount: '600' },
            { side: 'Dr', account: 'Current account – Aki', amount: '15,000' },
            { side: 'Cr', account: 'Drawings（引出し）', amount: '15,000' }
          ],
          after: '1つ目は資本への利息 $2,000 と残りの取り分 $28,800 を渡す仕訳。2つ目は引出しへの利息を負担させる仕訳。3つ目は、年の途中で記録した引出し（Dr Drawings / Cr Bank）を年末に当座勘定へ移す仕訳。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①固定資本なのに、利益の取り分を資本勘定に入れる（当座勘定に入れる）。②引出しを貸方に書く（減るので借方）。③当座勘定の借方残高を、プラスの残高として扱う（持ち出しすぎの状態）。④銀行の当座預金と混同する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['資本勘定＝長く入れておく元手（固定）。当座勘定＝毎年の取り分と引出し', '当座勘定の貸方: 給与・資本への利息・利益の取り分。借方: 引出し・引出しへの利息・損失の取り分', '当座勘定の借方残高＝取り分より多く持ち出した状態']
        },
        {
          title: '英単語',
          words: [
            ['capital account', '', '資本勘定（長く入れておく元手）'],
            ['current account', 'カレント・アカウント', '当座勘定（毎年の取り分と引出し）'],
            ['fixed capital', '', '固定資本（資本勘定を動かさない方法）'],
            ['fluctuating capital', '', '変動資本（1つの資本勘定に全部入れる方法）'],
            ['share of residual profit', '', '残りの利益の取り分'],
            ['debit balance', '', '借方残高（当座勘定なら持ち出しすぎ）']
          ]
        }
      ],
      quiz: [
        { q: "Which of the following would be credited to a partner's current account?", choices: ['Drawings', 'Interest on drawings', 'Interest on capital', 'Share of residual loss'], answer: 2, explain: '資本への利息はパートナーの取り分なので貸方。引出し、引出しへの利息、損失の取り分は取り分を減らすので借方。' },
        { q: 'At the start of the year, partner E had a credit balance of $2,000 on her current account. During the year her salary was $8,000, interest on capital was $1,500 and her share of residual profit was $12,000. Her drawings were $20,000 and interest on drawings was $500. What is the closing credit balance on her current account?', type: 'number', answer: 3000, unit: '$', explain: '貸方: $2,000 ＋ $8,000 ＋ $1,500 ＋ $12,000 ＝ $23,500。借方: $20,000 ＋ $500 ＝ $20,500。残高は $3,000 の貸方。' },
        { q: '年末に、あるパートナーの当座勘定が借方残高になった。意味は？', choices: ['その年までの取り分より多く引き出した', '取り分より少なく引き出した', '資本を追加で入れた', '事業がそのパートナーに借りがある'], answer: 0, explain: '当座勘定は貸方が取り分、借方が持ち出し。借方が多い＝持ち出しすぎで、パートナーが事業に借りがある。4つ目は貸借が逆。' },
        { q: '固定資本（fixed capital）の方法で、資本勘定が動くのはどれ？', choices: ['パートナーが資本を追加で入れたとき', '利益の取り分を記録するとき', '引出しをしたとき', '資本への利息を記録するとき'], answer: 0, explain: '固定資本では、資本勘定は資本の追加・引き上げ（とのれんの調整）でしか動かない。ほかの3つは当座勘定に記録する。' },
        { q: '資本への利息 $2,000 を記録する場所は（固定資本の方法）？', choices: ['当座勘定の貸方', '当座勘定の借方', '資本勘定の貸方', '損益計算書の費用'], answer: 0, explain: 'パートナーの取り分が増えるので当座勘定の貸方。資本勘定は動かさない。費用ではない（X7）。' }
      ]
    },
    {
      id: 'X09',
      no: 'X9',
      title: 'パートナーシップの財務諸表',
      goal: 'パートナーシップの損益計算書と財政状態計算書に何が載るかを、個人事業・会社とくらべて説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:H3(a)'],
      slides: [
        {
          title: 'シェアハウスの家計簿',
          paras: ['シェアハウスの家計簿も、収入と支出の書き方は1人暮らしと同じ。ちがうのは最後の「残ったお金を誰のものにするか」と「誰がいくら入れているか」の欄だけ。', 'パートナーシップの財務諸表も、個人事業とほとんど同じ。ちがうのはオーナー（パートナー）に関係する部分だけ。']
        },
        {
          title: '損益計算書（SPL）',
          paras: ['売上から売上原価と費用を引いて、当期の利益を出すまでは個人事業と同じ。'],
          table: {
            caption: 'Aki and Ben　Statement of profit or loss（抜粋）',
            head: ['項目', '$'],
            rows: [
              ['Revenue', '300,000'],
              ['Cost of sales', '(180,000)'],
              ['Gross profit', '120,000'],
              ['Operating expenses', '(58,000)'],
              ['Finance cost（Ben からの借入金の利息）', '(2,000)']
            ],
            total: ['Profit for the year', '60,000']
          }
        },
        {
          title: '利益の下に分配を付ける',
          table: {
            caption: 'Appropriation of profit（利益の分配）',
            head: ['項目', '$'],
            rows: [
              ['Profit for the year', '60,000'],
              ['Add: interest on drawings', '1,000'],
              ['Less: salary (Ben)', '(10,000)'],
              ['Less: interest on capital', '(3,000)']
            ],
            total: ['Residual profit (3:2)', '48,000']
          },
          after: 'Aki に $28,800、Ben に $19,200（X7 と同じ数字）。分配は「どう分けたか」を見せるだけで、当期の利益 $60,000 は変わらない。'
        },
        {
          title: '費用になるもの・ならないもの',
          table: {
            caption: 'SPL での扱い',
            head: ['項目', '扱い'],
            rows: [
              ['パートナーへの給与', '分配（費用ではない）'],
              ['資本への利息', '分配（費用ではない）'],
              ['パートナーからの借入金の利息', '費用（finance cost）'],
              ['従業員の給料', '費用'],
              ['パートナーの引出し', 'SPL に出ない（当座勘定で減らす）']
            ]
          },
          after: 'パートナーシップの利益にかかる税は、ふつう各パートナーが個人として払う。そのため SPL に法人税の費用（会社の tax expense）は出てこない。'
        },
        {
          title: 'パートナーからの借入金',
          paras: ['パートナーが資本とは別に、事業へお金を貸すことがある（loan from a partner）。これは資本ではなく負債。返す期限が1年より先なら非流動負債。', 'Ben が $20,000 を年 10% で貸していれば、利息 $2,000 は費用（finance cost）。借入金は約束どおり返してもらうお金で、利息も契約で決まっているので、ほかの借入金と同じに扱う。']
        },
        {
          title: '財政状態計算書（SFP）',
          paras: ['資産と負債の部分は個人事業と同じ。ちがうのは資本の部で、パートナーごとに資本勘定と当座勘定の残高を並べる（X8 の数字）。'],
          table: {
            caption: 'Partners’ capital and current accounts',
            head: ['項目', '$'],
            rows: [
              ['Capital account – Aki', '40,000'],
              ['Capital account – Ben', '20,000'],
              ['Current account – Aki', '16,700'],
              ['Current account – Ben', '(1,900)']
            ],
            total: ['パートナーの持分の合計', '74,800']
          },
          after: 'Ben の当座勘定は借方残高なので、かっこ（マイナス）で差し引く。この合計が「資産−負債」と一致する。'
        },
        {
          title: 'なぜ？ 会社とくらべると分かる',
          table: {
            caption: '会社とパートナーシップ',
            head: ['項目', '会社', 'パートナーシップ'],
            rows: [
              ['オーナーの持分', '株式資本・剰余金', '資本勘定・当座勘定'],
              ['オーナーへの支払い', '配当', '引出し'],
              ['利益の行き先', '利益剰余金', '各パートナーの当座勘定'],
              ['税金', 'SPL に法人税', 'ふつう SPL に出ない']
            ]
          },
          after: 'パートナーシップには株も株主もいない。利益は毎年全部パートナーに分けて当座勘定に入れるので、利益剰余金という欄が無い。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①パートナーへの給与や資本への利息を費用に入れ、当期の利益を小さくする。②引出しを SPL の費用にする（当座勘定から引く）。③当座勘定の借方残高をプラスで足す。④パートナーからの借入金を資本に入れる（負債）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SPL は当期の利益まで個人事業と同じ。その下に利益の分配を付ける', 'SFP の資本の部は、パートナーごとの資本勘定と当座勘定（借方残高はマイナス）', '給与・資本への利息は分配。パートナーからの借入金の利息は費用']
        },
        {
          title: '英単語',
          words: [
            ['appropriation of profit', '', '利益の分配（SPL の下に付ける）'],
            ['partners’ capital accounts', '', 'パートナーの資本勘定'],
            ['partners’ current accounts', '', 'パートナーの当座勘定'],
            ['loan from a partner', '', 'パートナーからの借入金（負債）'],
            ['finance cost', 'ファイナンス・コスト', '借入金の利息（費用）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an expense in the statement of profit or loss of a partnership?', choices: ['Interest on a loan made by a partner to the partnership', 'Interest on capital allowed to the partners', 'A salary allocated to a partner', 'Drawings made by a partner'], answer: 0, explain: 'パートナーからの借入金の利息は、ほかの借入金と同じ費用（finance cost）。資本への利息と給与は利益の分配、引出しは当座勘定を減らすもので、どれも費用ではない。' },
        { q: "At the year end, partner G has a debit balance of $1,900 on his current account. How is this shown in the statement of financial position?", choices: ["As a deduction within the partners' capital and current accounts", "As an addition to the partners' capital and current accounts", 'As a current liability', 'As an expense for the year'], answer: 0, explain: '借方残高は持ち出しすぎなので、資本の部でマイナスにする。プラスで足すと持分が大きく見えてしまう。費用は SPL の項目で、SFP の残高ではない。' },
        { q: '資本勘定は P $50,000、Q $30,000。当座勘定は P $4,000（貸方残高）、Q $2,500（借方残高）。パートナーの持分の合計は？', type: 'number', answer: 81500, unit: '$', explain: '$50,000 ＋ $30,000 ＋ $4,000 − $2,500 ＝ $81,500。Q の借方残高を足すと $86,500 になる引っかけ。' },
        { q: 'パートナーシップの財務諸表に出てこないものは？', choices: ['配当（dividends）', '当座勘定（current account）', '資本勘定（capital account）', '売上原価（cost of sales）'], answer: 0, explain: '配当は会社が株主に払うもの。パートナーシップでは引出しになる。' },
        { q: 'X7 の Aki と Ben。費用を引いた後の利益が $60,000、Ben への給与が $10,000。損益計算書の「当期の利益」はいくら？', choices: ['$60,000', '$50,000', '$70,000', '$48,000'], answer: 0, explain: '給与は当期の利益の下の分配なので、当期の利益は $60,000 のまま。$50,000 は給与を費用にした間違い。$48,000 は分配後の残りで、当期の利益ではない。' }
      ]
    },
    {
      id: 'X10',
      no: 'X10',
      title: '新パートナーの加入とのれんの扱い',
      goal: '新しいパートナーが加わるときの、利益の月割り、資本の払込み、のれんの調整を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:H3(b)'],
      slides: [
        {
          title: '人気ラーメン店に後から入る',
          paras: ['10年かけて常連客をつかんだラーメン店に、新しい共同経営者が入る。新しい人は、明日から常連客のもうけを分けてもらえる。', 'でも、常連客や評判を作ったのは前からいる人たち。その「評判の値段」を、前からいる人たちに払うのが公平。これがのれん（goodwill）の調整。']
        },
        {
          title: 'のれん（goodwill）とは',
          paras: ['事業の評判、常連客、立地、腕のよさなど、目に見えないが将来のもうけを生む価値。事業全体の価値と、1つ1つの資産・負債の合計の差として表れる。', 'パートナーシップの中で自然にできたのれんは、ふつう財務諸表に資産として残さない。無形資産のレッスンで学んだとおり、自分で作ったのれんは資産にできないから。'],
          note: { kind: 'tip', text: '試験では、のれんの金額は問題文に書いてある。のれんそのものを計算する問題は出ない。問われるのは、その金額を使った資本勘定の調整。' }
        },
        {
          title: '加入で起きる3つのこと',
          numbered: ['利益を分ける割合が変わる。加入日より前の利益は古い割合、後の利益は新しい割合で分ける（月数で按分）', '新しいパートナーが資本を払い込む（Dr Bank / Cr Capital account – 新パートナー）', 'のれんを、前からのパートナーの資本に古い割合で入れ、全員の資本から新しい割合で消す'],
          after: '問題文で加入時に資産を評価し直す（revaluation）と言われたら、増えた分ものれんと同じく、前からのパートナーの資本に古い割合で入れる。加入前に増えた価値は、前からの人のものだから。'
        },
        {
          title: '例題①: 加入した年の利益',
          example: { problem: '次の年、Aki と Ben（3:2）のお店に、10月1日から Chika が加わった。新しい割合は Aki:Ben:Chika＝2:2:1。決算日は12月31日、当期の利益は $60,000（1年を通して同じペースで出た）。給与や利息は無いものとする。それぞれの取り分は？', steps: ['加入前 1月〜9月＝9か月: $60,000 × 9/12 ＝ $45,000', '3:2 で分ける: Aki $27,000、Ben $18,000', '加入後 10月〜12月＝3か月: $60,000 × 3/12 ＝ $15,000', '2:2:1 で分ける: Aki $6,000、Ben $6,000、Chika $3,000', '合計: Aki $33,000、Ben $24,000、Chika $3,000（計 $60,000）'], answer: 'Aki $33,000、Ben $24,000、Chika $3,000' },
          note: { kind: 'tip', text: '給与や資本への利息が「年 $8,000」のように年額で決まっていれば、それも月数で按分する。例: 加入後の3か月だけ Chika に年 $8,000 の給与 → $8,000 × 3/12 ＝ $2,000。' }
        },
        {
          title: '例題②: のれんの調整',
          example: { problem: 'Chika は現金 $30,000 を払い込んで加わる。加入時ののれんは $50,000 と評価された。のれんは帳簿に残さない。古い割合は Aki:Ben＝3:2、新しい割合は Aki:Ben:Chika＝2:2:1。各パートナーの資本勘定はどう動く？', steps: ['払込み: Dr Bank $30,000 / Cr Capital – Chika $30,000', 'のれんを入れる（古い割合 3:2）: Dr Goodwill $50,000 / Cr Capital – Aki $30,000、Capital – Ben $20,000', 'のれんを消す（新しい割合 2:2:1）: Dr Capital – Aki $20,000、Ben $20,000、Chika $10,000 / Cr Goodwill $50,000', '差し引き: Aki ＋$10,000、Ben ±0、Chika は $30,000 − $10,000 ＝ $20,000'], answer: 'Aki の資本が $10,000 増え、Ben は変わらず、Chika の資本は $20,000' },
          tAccount: { name: 'Capital account – Chika', debit: [['Goodwill（消す）', '10,000']], credit: [['Bank（払込み）', '30,000']], balance: { side: 'debit', label: 'Balance c/d', amount: '20,000' } }
        },
        {
          title: '受け取る分と払う分',
          table: {
            caption: 'のれん $50,000 の配り方',
            head: ['パートナー', '入れる（古い 3:2）', '消す（新しい 2:2:1）'],
            rows: [
              ['Aki', '30,000', '20,000'],
              ['Ben', '20,000', '20,000'],
              ['Chika', '0', '10,000']
            ],
            total: ['合計', '50,000', '50,000']
          },
          after: '差し引きで Aki ＋$10,000、Ben 0、Chika −$10,000。Chika が、のれんの持ち分 $10,000 を Aki に払った形になる。現金は動かず、資本勘定の付け替えだけ。'
        },
        {
          title: 'なぜ？ Aki だけが受け取る理由',
          paras: ['のれんを作ったのは前からの2人。加入で Aki の割合は 3/5（60%）から 2/5（40%）に下がり、のれんの 20% を手放した。$50,000 × 20% ＝ $10,000。', 'Ben は 2/5 から 2/5 で変わらないので 0。Chika は何も持っていなかったのに 1/5 をもらうので、$10,000 を払う。割合を手放した人が、その分ののれんを受け取る。']
        },
        {
          title: 'のれんを帳簿に残す場合（例外）',
          paras: ['問題文に「のれんを残す（goodwill is to be retained）」とあるときだけ、入れる仕訳だけ行う。$50,000 が SFP に残り、Aki ＋$30,000、Ben ＋$20,000、Chika は $30,000 のまま。', '「残さない（eliminated）」とあるか、指示がなければ、2つの仕訳を両方行う。'],
          note: { kind: 'warn', text: '残すのは例外。IAS 38 では自分で作ったのれんは資産にしない（L58）。パートナーシップの問題で、問題文がそう言うときだけ従う。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①のれんを新しい割合で前からのパートナーに入れる（入れるのは古い割合）。②新パートナーの資本を払込み額のままにする（のれんを消すと減る）。③加入前の利益まで新しい割合で分ける（月数で分けて古い割合）。④のれんの調整で現金が動くと思う（資本勘定の付け替えだけ）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['加入前の利益は古い割合、加入後は新しい割合（月数で按分）', 'のれん: 古い割合で前からのパートナーの資本に入れ、新しい割合で全員の資本から消す', '割合を手放したパートナーが、手放した割合 × のれん を受け取る']
        },
        {
          title: '英単語',
          words: [
            ['admission of a new partner', 'アドミッション', '新パートナーの加入'],
            ['goodwill', 'グッドウィル', 'のれん（評判などの見えない価値）'],
            ['old / new profit-sharing ratio', '', '古い割合・新しい割合'],
            ['time apportionment', '', '月数での按分'],
            ['retained / eliminated', '', '（のれんを）帳簿に残す・消す'],
            ['capital introduced', '', '資本の拠出（元入れ・払込み）'],
            ['revaluation of assets', '', '資産の評価し直し（増えた分は古い割合で）']
          ]
        }
      ],
      quiz: [
        { q: "H and J share profits 1:1. K is admitted as a partner and the new profit-sharing ratio is H:J:K 2:2:1. Goodwill is valued at $40,000 and is not to be retained in the books. K introduces $25,000 cash as capital. What is the balance on K's capital account after the admission?", type: 'number', answer: 17000, unit: '$', explain: 'のれんを消すとき、K は新しい割合 1/5 で $40,000 × 1/5 ＝ $8,000 を負担する。$25,000 − $8,000 ＝ $17,000。H と J は $20,000 を受け取り $16,000 を負担するので、それぞれ ＋$4,000。' },
        { q: 'A new partner is admitted and goodwill is not to be retained. Which entry eliminates the goodwill?', choices: ["Dr all partners' capital accounts in the new profit-sharing ratio, Cr Goodwill", "Dr Goodwill, Cr the old partners' capital accounts in the old profit-sharing ratio", "Dr all partners' capital accounts in the old profit-sharing ratio, Cr Goodwill", "Dr Goodwill, Cr all partners' current accounts in the new profit-sharing ratio"], answer: 0, explain: '消すときは新しい割合で全員の資本から引く。2つ目はのれんを入れる仕訳で、消す仕訳ではない。3つ目は割合が古いまま。のれんの調整は当座勘定ではなく資本勘定で行う。' },
        { q: 'M と N（1:1）のお店に、7月1日から P が加わった。新しい割合は M:N:P＝2:2:1。決算日は12月31日、当期の利益は $48,000（1年を通して同じペース）。P の取り分は？', type: 'number', answer: 4800, unit: '$', explain: '加入後は 6か月なので $48,000 × 6/12 ＝ $24,000。P は 1/5 で $4,800。1年分の $48,000 を 2:2:1 で分けて $9,600 にするのは、加入前まで新しい割合で分けた間違い。' },
        { q: "Under IAS 38, internally generated goodwill is not recognised as an asset. When should goodwill remain in a partnership's books after a new partner is admitted?", choices: ['Only when the question states that goodwill is to be retained', 'Always, because goodwill was valued at the date of admission', 'Always, because the new partner has paid for a share of it', 'Never, even when the question states that it is to be retained'], answer: 0, explain: '自分で作ったのれんは IAS 38 では資産にしないので、残すのは問題文が「残す」と言うときだけの例外。評価した・新パートナーが払った、は残す理由にならない。4つ目は逆に、問題文の指示を無視している。のれんの調整そのものは、前からの人が作った評判を新パートナーが分けてもらうために行う。' },
        { q: '古い割合 A:B＝1:1、新しい割合 A:B:C＝1:1:1。のれんは $30,000 で、帳簿に残さない。A の資本はどうなる？', choices: ['$5,000 増える', '$5,000 減る', '$15,000 増える', '変わらない'], answer: 0, explain: 'A は古い割合で $15,000 を受け取り、新しい割合で $10,000 を負担する。差し引き ＋$5,000。手放した割合 1/2 − 1/3 ＝ 1/6、$30,000 × 1/6 ＝ $5,000 でも確かめられる。$15,000 は消す仕訳を忘れたとき。' },
        { q: 'L and M share profits 1:1. N was admitted as a partner on 1 April 20X5. From that date the profit-sharing ratio is L:M:N 2:2:1 and N receives a salary of $12,000 per annum. Profit for the year ended 31 December 20X5 was $80,000 and accrued evenly. What is N\'s total share of profit for the year?', type: 'number', answer: 19200, unit: '$', explain: '加入後は 4月〜12月の 9か月。利益 $80,000 × 9/12 ＝ $60,000。給与も按分して $12,000 × 9/12 ＝ $9,000。残り $60,000 − $9,000 ＝ $51,000 の 1/5 で $10,200。N の合計＝$9,000 ＋ $10,200 ＝ $19,200。給与を1年分 $12,000 にすると $21,600 になる間違い。' }
      ]
    },
    {
      id: 'X11',
      no: 'X11',
      title: '財務分析の限界',
      goal: '財務諸表の分析（比率分析を含む）の大切さと目的を説明し、その限界を具体例とともにあげられるようになる',
      minutes: 12,
      recall: true,
      exam: 'k1',
      outcomes: ['K1:I1(a)'],
      slides: [
        {
          title: '健康診断の数字で考える',
          paras: ['健康診断の数字は便利。前の年とくらべれば、体の変化に気づける。', 'でも限界もある。前の日に飲みすぎていれば、その日だけ数字が悪い。病院によって測り方がちがう。数字が悪くても、原因までは教えてくれない。財務分析の比率も、これとまったく同じ。']
        },
        {
          title: '分析の大切さと目的（おさらい）',
          paras: ['財務諸表の数字だけを見ても、大きいのか小さいのか分からない。比率（ratio）にして、前の年・他社・業界平均（industry average）とくらべると、収益性・流動性・効率性・財政状態が見えてくる。', '投資家は投資するか、銀行は貸すか、経営者はどこを直すかを決めるのに使う。だから大切。ただし、次の限界を知ったうえで使う。']
        },
        {
          title: '限界①: 過去の数字と古い値段',
          list: ['財務諸表は過去の結果。将来も同じになるとは限らない', '何年も前に安く買った資産は、帳簿価額が小さい。物価が上がっている（インフレ）と、今の価値よりずっと小さく見える', 'すると使用資本が小さくなり、ROCE が高く見える。古い設備の会社ほど効率がよいように見えてしまう']
        },
        {
          title: '限界②: 期末の1日だけの写真',
          paras: ['財政状態計算書は、決算日1日の写真。季節で大きく動く事業では、その日の数字がふだんの姿とちがう。', 'たとえばおもちゃ屋の決算日がクリスマス後なら、在庫は1年で一番少なく、現金は一番多い。流動比率や在庫回転日数は、1年の平均とかけ離れる。']
        },
        {
          title: '限界③: 会計方針のちがい',
          paras: ['同じ取引でも、選んだ会計方針で数字が変わる。減価償却は定額法か定率法か、在庫は先入先出法（FIFO）か加重平均法か、建物は原価のままか再評価するか。'],
          example: { problem: 'P社とQ社は同じ建物を持ち、営業利益（profit before interest and tax）はどちらも $60,000。P社は建物を再評価して使用資本が $600,000、Q社は原価のままで $300,000。ROCE は？', steps: ['P社: $60,000 ÷ $600,000 ＝ 10%', 'Q社: $60,000 ÷ $300,000 ＝ 20%', '中身は同じなのに、方針のちがいだけで ROCE が2倍ちがう'], answer: 'P社 10%、Q社 20%。Q社の方が優秀とは言えない' }
        },
        {
          title: '限界④: 見せかけ（window dressing）',
          paras: ['決算日の前後だけ取引を工夫して、期末の数字をよく見せること。違法でなくても、比率がふだんの姿を表さなくなる。'],
          example: { problem: '流動資産 $200,000、流動負債 $100,000。決算日の直前に、買掛金 $50,000 を現金でまとめて支払った。流動比率はどう変わる？', steps: ['支払い前: $200,000 ÷ $100,000 ＝ 2.0', '支払い後: 流動資産 $150,000、流動負債 $50,000', '$150,000 ÷ $50,000 ＝ 3.0'], answer: '2.0 から 3.0 に上がる。事業の中身はほとんど変わっていない' }
        },
        {
          title: '限界⑤: くらべる相手と計算式',
          list: ['業種がちがうと「ふつう」の比率がちがう（スーパーと不動産会社など）', '規模や決算日がちがう会社は、そのままくらべにくい', '業界平均は多くの会社の平均で、目安にすぎない', '比率の計算式がちがうとくらべられない（ギアリングを 借入÷資本 にするか、借入÷（借入＋資本）にするか など）', '一度きりの特別な取引（大きな資産の売却益など）があると、その年の比率がゆがむ']
        },
        {
          title: '限界⑥: 数字は症状で、原因ではない',
          paras: ['比率は「売上総利益率が下がった」とは教えてくれるが、なぜ下がったかは教えない。値下げをしたのか、仕入値が上がったのか。', '原因を知るには、数字以外の情報（市場や景気、競争相手、製品の質、従業員、経営者の計画）も一緒に見る。また、減価償却の年数や貸倒引当金のように見積りが入るので、数字そのものにも判断が含まれている。']
        },
        {
          title: 'なぜ？ 限界を知る理由',
          paras: ['比率は「質問を見つける道具」で、答えそのものではない。限界を知らずに比率だけで判断すると、よい会社を悪く、悪い会社をよく見てしまう。'],
          note: { kind: 'warn', text: 'よくある間違い: ①比率が高い＝必ずよい、と思う。②方針のちがう会社の比率をそのままくらべる。③期末の数字が1年中同じだと思う。④比率を見れば原因まで分かると思う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['目的: 比率でくらべて、投資・融資・経営の判断に役立てる', '限界: 過去の数字、期末の1日、会計方針のちがい、古い資産とインフレ、見せかけ、くらべる相手と計算式、一度きりの取引', '比率は原因を教えない。数字以外の情報も合わせて見る']
        },
        {
          title: '英単語',
          words: [
            ['limitations', 'リミテーションズ', '限界'],
            ['ratio analysis', '', '比率分析'],
            ['accounting policies', '', '会計方針'],
            ['window dressing', 'ウィンドウ・ドレッシング', '期末だけ数字をよく見せること'],
            ['historical cost', '', '取得原価（買ったときの値段）'],
            ['inflation', 'インフレーション', '物価の上昇'],
            ['seasonal', 'シーズナル', '季節で変わる'],
            ['industry average', '', '業界平均']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a limitation of ratio analysis?', choices: ['Different companies may use different accounting policies', 'Ratios allow comparison with previous years', 'Ratios can be compared with industry averages', 'Ratios summarise a large amount of information'], answer: 0, explain: '会計方針がちがうと、同じ中身でも比率が変わる。ほかの3つは比率分析の利点（目的）で、限界ではない。' },
        { q: 'Company X revalues its property upwards, while Company Y keeps an identical property at historical cost. Both have the same profit before interest and tax. Which statement is correct?', choices: ['X will show a lower return on capital employed than Y', 'X will show a higher return on capital employed than Y', 'Both will show the same return on capital employed', 'Revaluation has no effect on any ratio'], answer: 0, explain: '再評価で X の使用資本が大きくなり、同じ利益を大きな数で割るので ROCE は下がる。2つ目は割り算の向きを逆に考えた間違い。' },
        { q: '流動資産 $90,000、流動負債 $60,000。決算日の直前に、買掛金 $30,000 を現金で支払った。支払い後の流動比率は？', type: 'number', answer: 2, unit: '', explain: '支払い後は流動資産 $60,000、流動負債 $30,000。$60,000 ÷ $30,000 ＝ 2.0。支払い前の 1.5 より高く見える。これが window dressing の典型。' },
        { q: 'おもちゃ屋の決算日はクリスマス後で、期末の在庫は1年で一番少ない。このときの限界はどれ？', choices: ['期末の1日の数字が、ふだんの姿を表していない', '会計方針が他社とちがう', 'インフレで資産が小さく見える', '比率の計算式がちがう'], answer: 0, explain: '季節で動く事業では、決算日の写真が1年の平均とかけ離れる。ほかの3つも限界だが、この例の原因ではない。' },
        { q: '売上総利益率が去年より下がった。比率分析だけで分かることは？', choices: ['下がったという事実（原因はほかの情報で調べる）', '原因が値下げだということ', '原因が仕入値の上昇だということ', '来年も下がるということ'], answer: 0, explain: '比率は症状を示すだけで、原因は教えない。来年どうなるかも分からない（過去の数字）。' },
        { q: 'Which of the following best describes window dressing?', choices: ['Arranging transactions near the year end to make the financial statements look better', 'Applying the same accounting policies every year', 'Comparing ratios with an industry average', 'Revaluing property to its fair value'], answer: 0, explain: 'window dressing は、期末の前後だけ取引を工夫して数字をよく見せること。2つ目は継続性、3つ目は比較の方法、4つ目は会計方針の選択。' }
      ]
    }
  ],
  cards: [
    { id: 'X06-1', lesson: 'X06', q: 'パートナーシップの定義は？', a: '2人以上が利益のために一緒に事業をする関係' },
    { id: 'X06-2', lesson: 'X06', q: 'パートナーシップは法律上、パートナーと別の人？', a: '別ではない。パートナーは個人の財産でも借金の責任を負う（無限責任）' },
    { id: 'X06-3', lesson: 'X06', q: 'パートナーシップ契約の目的は？', a: '権利と義務を決めて、もめごとを防ぐ' },
    { id: 'X06-4', lesson: 'X06', q: '契約で決める「利益の分け方」の4つの道具は？', a: '給与、資本への利息、引出しへの利息、残りを分ける割合' },
    { id: 'X06-5', lesson: 'X06', q: 'profit-sharing ratio とは？', a: '給与・利息を調整した後の、残りの利益（損失）を分ける割合' },
    { id: 'X07-1', lesson: 'X07', q: '利益を分ける順番は？', a: '給与・資本への利息を先に渡し、引出しへの利息を足し、残りを割合で分ける' },
    { id: 'X07-2', lesson: 'X07', q: '残りの利益の式は？', a: '当期の利益＋引出しへの利息−給与−資本への利息' },
    { id: 'X07-3', lesson: 'X07', q: '引出しへの利息の計算は？', a: '日付なし: 年の引出しの合計 × 率。日付あり: 引出し × 率 × 決算日までの月数/12' },
    { id: 'X07-4', lesson: 'X07', q: 'なぜ引出しへの利息は、分ける利益に足す？', a: 'パートナーが事業に払うお金なので、分ける利益が増えるから' },
    { id: 'X07-5', lesson: 'X07', q: 'パートナーへの給与は費用？', a: '費用ではない。利益の分配（appropriation）の1つ' },
    { id: 'X07-6', lesson: 'X07', q: '残りがマイナスになったら？', a: '損失も決めた割合で各パートナーが負担する' },
    { id: 'X07-7', lesson: 'X07', q: '引出しが「毎月 $500」とだけあり（日付なし）、率は年 10%。引出しへの利息は？', a: '$500 × 12 × 10% ＝ $600。日付がないので月割りしない' },
    { id: 'X08-1', lesson: 'X08', q: '資本勘定（capital account）とは？', a: '長く入れておく元手。固定資本なら追加・引き上げ・のれんの調整でだけ動く' },
    { id: 'X08-2', lesson: 'X08', q: '当座勘定（current account）とは？', a: '毎年の取り分と引出しを記録する、パートナーごとの勘定' },
    { id: 'X08-3', lesson: 'X08', q: '当座勘定の貸方に入るものは？', a: '給与、資本への利息、残りの利益の取り分' },
    { id: 'X08-4', lesson: 'X08', q: '当座勘定の借方に入るものは？', a: '引出し、引出しへの利息、残りの損失の取り分' },
    { id: 'X08-5', lesson: 'X08', q: '当座勘定の借方残高の意味は？', a: '取り分より多く持ち出した（事業に借りがある）状態' },
    { id: 'X08-6', lesson: 'X08', q: 'なぜ資本勘定と当座勘定を分ける？', a: '資本への利息の土台を固定し、約束の出資と毎年の動きを分けて見るため' },
    { id: 'X09-1', lesson: 'X09', q: 'パートナーシップの SPL の特徴は？', a: '当期の利益までは個人事業と同じ。その下に利益の分配を付ける' },
    { id: 'X09-2', lesson: 'X09', q: 'パートナーシップの SFP の資本の部には何が並ぶ？', a: 'パートナーごとの資本勘定と当座勘定の残高' },
    { id: 'X09-3', lesson: 'X09', q: 'パートナーからの借入金とその利息の扱いは？', a: '借入金は負債、利息は費用（finance cost）' },
    { id: 'X09-4', lesson: 'X09', q: '当座勘定の借方残高は SFP でどう書く？', a: '資本の部で、かっこ（マイナス）にして差し引く' },
    { id: 'X09-5', lesson: 'X09', q: '利益の行き先は、会社とパートナーシップでどうちがう？', a: '会社は利益剰余金、パートナーシップは各パートナーの当座勘定' },
    { id: 'X10-1', lesson: 'X10', q: 'のれん（goodwill）とは？', a: '評判や常連客など、目に見えないが将来のもうけを生む価値' },
    { id: 'X10-2', lesson: 'X10', q: '加入した年の利益の分け方は？', a: '月数で按分し、加入前は古い割合、加入後は新しい割合で分ける' },
    { id: 'X10-3', lesson: 'X10', q: 'のれんを入れる仕訳は？', a: 'Dr Goodwill / Cr 前からのパートナーの資本（古い割合）' },
    { id: 'X10-4', lesson: 'X10', q: 'のれんを消す仕訳は？', a: 'Dr 全員の資本（新しい割合） / Cr Goodwill' },
    { id: 'X10-5', lesson: 'X10', q: 'のれんの調整で資本が増えるのは誰？', a: '割合を手放したパートナー。手放した割合 × のれん だけ増える' },
    { id: 'X10-6', lesson: 'X10', q: '試験で、のれんについて問題文から読み取る2つのことは？', a: '金額（計算しない）と残すかどうか。残すのは「残す」とあるときだけ（IAS 38 の例外）' },
    { id: 'X10-7', lesson: 'X10', q: '加入した年の、年額の給与や資本への利息は？', a: '加入前・加入後の月数で按分してから分ける' },
    { id: 'X11-1', lesson: 'X11', q: '財務分析の目的は？', a: '比率でくらべて、投資・融資・経営の判断に役立てること' },
    { id: 'X11-2', lesson: 'X11', q: '会計方針のちがいが限界になる理由は？', a: '同じ中身でも数字が変わり、他社とそのままくらべられないから' },
    { id: 'X11-3', lesson: 'X11', q: '古い資産とインフレは ROCE にどう影響する？', a: '帳簿価額が小さく使用資本が小さく見えるので、ROCE が高く出る' },
    { id: 'X11-4', lesson: 'X11', q: 'window dressing とは？', a: '期末だけ数字をよく見せる工夫。例: 直前に買掛金を払い流動比率を上げる' },
    { id: 'X11-5', lesson: 'X11', q: '季節で動く事業の限界は？', a: '決算日1日の数字が、ふだんの姿とちがうことがある' },
    { id: 'X11-6', lesson: 'X11', q: '比率分析だけでは分からないことは？', a: '原因。数字以外の情報も合わせて見る' }
  ]
});
