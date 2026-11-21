(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 212,
  part: 4,
  partTitle: '代理とパートナーシップ',
  lessons: [
    {
      id: 'B046',
      no: 46,
      title: 'パートナーシップの法律：3つの形',
      goal: 'パートナーシップを決める3つの法律と、一般パートナーシップ・リミテッド・パートナーシップ・LLP の違い（法人格・責任・登記）を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(d)'],
      slides: [
        {
          title: '友だちと店を開くとき、どの形にする？',
          paras: ['友だち3人でカフェを開くとする。気軽に始めるなら、合意だけで一緒にやればよい。ただ、店がつぶれたら、店の借金を自分の貯金や家で払うことになるかもしれない。', '「お金だけ出して、店はまかせたい人」もいる。「全員、責任は出したお金までにしたい」こともある。イギリス法は、この3つの希望に合わせて3つの形を用意している。']
        },
        {
          title: '3つの形と、それぞれの法律',
          svg: `<svg viewBox="0 0 440 346" role="img" aria-label="一般パートナーシップ、リミテッド・パートナーシップ、LLPの3つの形と根拠法の比較" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">パートナーシップの3つの形</text><rect x="20" y="46" width="400" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="72" font-size="16" font-weight="600" fill="var(--ink)">一般パートナーシップ</text><text x="36" y="94" font-size="12.5" fill="var(--quiet)">Partnership Act 1890</text><text x="36" y="120" fill="var(--ink)">法人格なし・登記不要・全員が無限責任</text><rect x="20" y="144" width="400" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="170" font-size="16" font-weight="600" fill="var(--ink)">リミテッド・パートナーシップ</text><text x="36" y="192" font-size="12.5" fill="var(--quiet)">Limited Partnerships Act 1907</text><text x="36" y="218" fill="var(--ink)">登記が必要・無限責任の人が最低1人</text><rect x="20" y="242" width="400" height="86" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="268" font-size="16" font-weight="600" fill="var(--ink)">有限責任パートナーシップ（LLP）</text><text x="36" y="290" font-size="12.5" fill="var(--quiet)">Limited Liability Partnerships Act 2000</text><text x="36" y="316" fill="var(--ink)">法人・メンバーは原則として出資額まで</text></svg>`,
          caption: '法人格があるのは LLP だけ。以下、イングランドの法律をモデルに学ぶ。'
        },
        {
          title: '一般パートナーシップ（general partnership）',
          list: ['法律: Partnership Act 1890（PA 1890）', '2人以上が、利益を目的に共同で事業をすると成立する。登記はいらない', 'イングランドでは、事務所（firm）に法人格がない。事務所の債務は、パートナー全員の債務', 'パートナーは無限責任。事務所の財産で足りなければ、個人の財産で払う'],
          note: { kind: 'tip', text: 'firm は「パートナーシップの事務所・商会」の意味。会社（company）とは使い分ける。' }
        },
        {
          title: 'リミテッド・パートナーシップ（limited partnership）',
          list: ['法律: Limited Partnerships Act 1907（LPA 1907）', '無限責任の general partner が最低1人と、有限責任の limited partner が1人以上', 'limited partner の責任は、出資した額まで', '登記官（Registrar of Companies）への登記が必要。登記しないと一般パートナーシップとして扱われ、全員が無限責任になる', '法人格はない（イングランド）']
        },
        {
          title: 'limited partner の約束ごと',
          list: ['経営に参加してはいけない。参加すると、その間に生じた事務所の債務について、無限責任を負う', '事務所を拘束する権限（代理権）はない', '出資を途中で引き出してはいけない。引き出すと、その額まで責任を負う', '帳簿を見たり、経営について助言したりはできる'],
          after: 'つまり「お金は出すが、経営には口を出さない」投資家のための形。'
        },
        {
          title: '有限責任パートナーシップ（LLP）',
          list: ['法律: Limited Liability Partnerships Act 2000（LLPA 2000）', '登記して設立する法人（body corporate）。メンバーとは別の「人」', '契約の当事者は LLP 自身。債務も LLP の財産から払う', 'メンバーの責任は、原則として出資した額まで。しかも全員が経営に参加できる', '名前の最後に limited liability partnership または LLP を付ける']
        },
        {
          title: '例題: 残った借金は誰が払う？',
          example: {
            problem: 'A と B が事業をしていた。事務所の財産をすべて使っても、債務が $100,000 残った。A と B は $25,000 ずつ出資していた（出資はすでに事務所の財産として使われた）。契約書はない。(1) 一般パートナーシップ (2) A が limited partner、B が general partner のリミテッド・パートナーシップ (3) LLP の場合、残りの $100,000 は誰が負担する？',
            steps: ['(1) 一般: A も B も無限責任。債権者はどちらにも全額を請求できる。2人の間では、契約がなく出資額も同じなので、均等に $50,000 ずつ負担する', '(2) リミテッド: A は出資の $25,000 を失うだけで、それ以上は払わない。general partner の B が $100,000 を全部負担する', '(3) LLP: 債務は LLP のもの。メンバーは出資を失うだけ。残りの $100,000 は債権者が回収できない'],
            answer: '(1) A と B（内部では $50,000 ずつ） (2) B が $100,000 (3) 誰も払わず、債権者の損になる'
          }
        },
        {
          title: 'なぜ？ 3つも形がある理由',
          paras: ['一般パートナーシップは手軽だが、全員が無限責任。大きな事務所では、ほかのパートナーの失敗で自分の家まで失いかねない。', '1907年法は、経営しない投資家を守るための形。2000年法の LLP は、会計事務所や法律事務所のような大きな専門家の事務所が、パートナーシップの柔軟さを保ちながら有限責任を得るために作られた。責任を限る代わりに、登記と決算書の公開が求められる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'LLP を「リミテッド・パートナーシップの一種」と考えない。limited partner は経営に参加できず、法人格もない。LLP は法人で、メンバー全員が経営に参加しても有限責任のまま。また、日本の有限責任事業組合（日本版 LLP）には法人格がない。イギリスの LLP とは別物。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['一般パートナーシップ（PA 1890）: 登記不要、法人格なし、全員が無限責任', 'リミテッド・パートナーシップ（LPA 1907）: 登記が必要。無限責任の general partner が最低1人。limited partner は経営に参加しない', 'LLP（LLPA 2000）: 登記で設立する法人。メンバーは経営に参加でき、責任は原則として出資額まで']
        },
        {
          title: '英単語',
          words: [
            ['general partnership', 'ジェネラル パートナーシップ', '一般パートナーシップ'],
            ['limited partnership', 'リミテッド パートナーシップ', 'リミテッド・パートナーシップ'],
            ['limited liability partnership (LLP)', '', '有限責任パートナーシップ'],
            ['general partner / limited partner', '', '無限責任パートナー / 有限責任パートナー'],
            ['unlimited liability', 'アンリミテッド ライアビリティ', '無限責任'],
            ['body corporate', 'ボディ コーポレート', '法人'],
            ['firm', 'ファーム', '（パートナーシップの）事務所・商会']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about a limited partnership under the Limited Partnerships Act 1907 is correct?', choices: ['All of its partners may have their liability limited to the amount of their capital contribution', 'It must have at least one general partner with unlimited liability for the debts of the firm', 'It is a body corporate with a legal personality separate from its partners', 'A limited partner may take part in management without losing limited liability'], answer: 1, explain: 'リミテッド・パートナーシップには、無限責任の general partner が最低1人必要。全員を有限責任にしたいなら LLP を使う。リミテッド・パートナーシップに法人格はない（法人なのは LLP）。limited partner が経営に参加すると、その間の債務に無限責任を負う。' },
        { q: 'Which of the following is a feature of a limited liability partnership (LLP) under the Limited Liability Partnerships Act 2000?', choices: ['At least one member must have unlimited liability for its debts', 'It can be formed by oral agreement without any registration', 'Its members cannot take part in management without losing limited liability', 'It is a separate legal person, so contracts are made by the LLP itself'], answer: 3, explain: 'LLP は登記で設立する法人（body corporate）で、契約の当事者は LLP。無限責任のメンバーは不要で、これがリミテッド・パートナーシップとの違い。口約束だけで成立するのは一般パートナーシップ。LLP のメンバーは経営に参加しても有限責任のまま。' },
        { q: 'リミテッド・パートナーシップに、general partner の G と、limited partner の L1（出資 $20,000）・L2（出資 $30,000）がいる。事務所の財産（出資を含む）をすべて使っても、債務が $70,000 残った。G が個人で払う額は？', type: 'number', answer: 70000, unit: '$', explain: 'limited partner の責任は出資額まで。L1 と L2 は出資をすでに失っていて、それ以上は払わない。残りの $70,000 は、無限責任の general partner の G が全部負担する。$20,000 ＋ $30,000 を引く必要はない（出資はすでに事務所の財産として使われている）。' },
        { q: '3人が、登記も契約書もなしに、利益を目的に一緒にリフォーム業を始めた。この事業の形と責任は？', choices: ['LLP。登記がなくても責任は出資額まで', 'リミテッド・パートナーシップ。出資の少ない人は有限責任', '一般パートナーシップ。全員が無限責任を負う', 'まだ何の形でもないので、事業の債務は誰も負わない'], answer: 2, explain: '利益を目的に共同で事業をすれば、手続きなしで一般パートナーシップが成立し、全員が無限責任を負う。LLP もリミテッド・パートナーシップも登記が必要。登記しないリミテッド・パートナーシップは一般パートナーシップとして扱われる。' },
        { q: 'リミテッド・パートナーシップの limited partner の D が、事務所の大口の仕入れを自分で決めて交渉した。D の責任はどうなる？', choices: ['経営に参加した期間に生じた債務について、無限責任を負う', '登記してあるので、出資額までの責任のまま変わらない', 'D の責任は、出資額の2倍までに広がる', 'リミテッド・パートナーシップが自動的に LLP に変わる'], answer: 0, explain: 'limited partner は経営に参加してはいけない。参加すると、その期間に生じた事務所の債務について、general partner と同じように無限責任を負う（LPA 1907）。登記していても守られない。' }
      ]
    },
    {
      id: 'B047',
      no: 47,
      title: 'パートナーシップの成立',
      goal: 'パートナーシップが成立する3つの要素（PA 1890 s1）、成立を判断するときのルール（s2）、契約で決めることと、契約がないときの法律のルール（s24）を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(e)'],
      slides: [
        {
          title: '気づいたら「パートナー」になっている',
          paras: ['友だちと週末にキッチンカーを出している。売上から材料費を引いた残りを半分ずつ分けている。契約書も登記もない。', '日本の感覚だと「ただの手伝い合い」かもしれない。でもイギリス法では、これだけでパートナーシップが成立しうる。成立すると、相手が事業のために作った借金にも責任を負う。']
        },
        {
          title: 'パートナーシップの定義（PA 1890 s1）',
          svg: `<svg viewBox="0 0 440 298" role="img" aria-label="事業、共同、利益目的の3つの要素がそろうとパートナーシップが成立する" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">3つの要素がそろうと成立（s1）</text><rect x="20" y="46" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="74" fill="var(--ink)">① 事業を営む</text><text x="404" y="74" text-anchor="end" font-size="12.5" fill="var(--quiet)">carrying on a business</text><rect x="20" y="100" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="128" fill="var(--ink)">② 共同で</text><text x="404" y="128" text-anchor="end" font-size="12.5" fill="var(--quiet)">in common</text><rect x="20" y="154" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="182" fill="var(--ink)">③ 利益を目的に</text><text x="404" y="182" text-anchor="end" font-size="12.5" fill="var(--quiet)">with a view of profit</text><text x="220" y="222" text-anchor="middle" font-size="14" fill="var(--quiet)">全部そろうと</text><rect x="20" y="234" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="264" text-anchor="middle" font-weight="600" fill="var(--ink)">パートナーシップが成立（書面も登記も不要）</text></svg>`,
          caption: '"Partnership is the relation which subsists between persons carrying on a business in common with a view of profit."（s1(1)）。会社（company）はパートナーシップに当たらない（s1(2)）。'
        },
        {
          title: '3つの要素をくわしく',
          list: ['事業（business）: 商売・職業・専門職をすべて含む（s45）。1回だけの取引でも当たることがある', '共同で（in common）: 全員のために事業をしている。全員が実際に働く必要はない', '利益を目的に（with a view of profit）: 利益をねらっていればよい。実際に赤字でも成立する'],
          after: '準備だけの段階は、まだ事業ではない。Keith Spicer Ltd v Mansell（1970）では、会社を作る準備中に1人が商品を注文しただけで、パートナーシップは成立していないとされた。'
        },
        {
          title: '成立を判断するヒント（s2）',
          list: ['財産を共同で持っているだけでは、パートナーシップにならない（s2(1)）', '売上（gross returns）を分けるだけでも、ならない（s2(2)）', '利益（profits）を分けていれば、有力な証拠（prima facie evidence）になる。ただし、それだけで決まるわけではない（s2(3)）'],
          after: '例: 利益の一部を給与として受け取る従業員、利益から返済を受ける貸し手、亡くなったパートナーの遺族で利益から年金を受け取る人は、それだけではパートナーにならない。'
        },
        {
          title: '手続きはいらない。でも契約は作る',
          paras: ['一般パートナーシップは、口約束でも、書面でも、行動だけでも成立する。登記も決まった書類もいらない。', 'ただ実務では、後でもめないように書面のパートナーシップ契約（partnership agreement）を作るのがふつう。主に次のことを決める。'],
          list: ['出資額と、利益・損失の分け方', 'パートナーの給与（salary）と出資の利息（interest on capital）', '経営の決め方、新しいパートナーの加入、退職', '競業の禁止、解散のときの扱い']
        },
        {
          title: '契約がないときのルール（s24）',
          table: { caption: 'PA 1890 s24 の主なルール', head: ['項目', '法律のルール'], rows: [['利益と資本', '均等に分ける。損失も均等に負担（s24(1)）'], ['出資の利息', 'なし（s24(4)）'], ['給与', 'なし（s24(6)）'], ['出資を超えて事務所に貸したお金', '年5%の利息（s24(3)）'], ['経営', '全員が参加できる（s24(5)）'], ['ふつうの事項', '多数決。事業の種類を変えるのは全員一致（s24(8)）'], ['新しいパートナー', '全員の同意が必要（s24(7)）']] },
          note: { kind: 'tip', text: '多数決でパートナーを追い出すことはできない。契約で決めてあれば別（s25）。' }
        },
        {
          title: '例題: K1 の会計とつなげる',
          example: {
            problem: 'A・B・C の3人のパートナーシップ。契約書はない。A は出資 $50,000、B と C は $20,000 ずつ。A は出資とは別に、事務所へ $10,000 を1年間貸している。A への利息を引く前の今年の利益は $96,500。A が受け取る額は？',
            steps: ['契約がないので、出資の利息も給与もない（s24(4)(6)）', '出資を超えて貸した $10,000 には年5%の利息: $10,000 × 5% ＝ $500（s24(3)）。これは事務所の費用', '分ける利益: $96,500 − $500 ＝ $96,000', '利益は出資額に関係なく均等: $96,000 ÷ 3 ＝ $32,000', 'A の合計: $32,000 ＋ $500 ＝ $32,500'],
            answer: 'A は $32,500（利益の分配 $32,000 ＋ 貸付けの利息 $500）'
          }
        },
        {
          title: 'なぜ？ 手続きなしで成立させる理由',
          paras: ['パートナーシップのルールは、取引相手を守るためのものでもある。一緒に事業をして利益を分けている人たちが「契約書がないからパートナーではない」と言って責任を逃れられたら、相手は困る。', 'そこで法律は、形式ではなく実態（何をしているか）で判断する。「書類がないから関係ない」は通じない。行動が関係を作る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'K1 で習った給与や出資の利息は、契約で決めたときだけ付く。契約がなければ、出資額が違っても利益は均等に分ける。出資額の比率で分けるのは、そう決めたときだけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['成立の3要素: 事業を、共同で、利益を目的に（s1）。登記も書面もいらない', '利益を分けているのは有力な証拠だが、それだけでは決まらない（s2）', '契約がなければ s24: 利益は均等、給与と出資の利息なし、出資を超えた貸付けに年5%']
        },
        {
          title: '英単語',
          words: [
            ['partnership agreement', 'パートナーシップ アグリーメント', 'パートナーシップ契約'],
            ['carrying on a business in common', '', '共同で事業を営む'],
            ['with a view of profit', '', '利益を目的として'],
            ['share of profits', '', '利益の分配'],
            ['prima facie evidence', 'プライマ フェイシ エビデンス', '一応の証拠（反対の証拠がなければ認められる）'],
            ['interest on capital', '', '出資の利息']
          ]
        }
      ],
      quiz: [
        { q: 'D と E の2人のパートナーシップ。契約書はない。D は出資とは別に、事務所へ $20,000 を1年間貸している。D への利息を引く前の利益は $61,000。D が受け取る合計は？', type: 'number', answer: 31000, unit: '$', explain: '貸付けの利息: $20,000 × 5% ＝ $1,000（s24(3)）。分ける利益: $61,000 − $1,000 ＝ $60,000。均等に $30,000 ずつ。D の合計: $30,000 ＋ $1,000 ＝ $31,000。' },
        { q: 'Under the Partnership Act 1890, which of the following is NOT one of the elements in the definition of a partnership?', choices: ['Carrying on a business', 'Registration with the Registrar of Companies', 'Doing so in common', 'With a view of profit'], answer: 1, explain: 's1 の定義は「利益を目的に、共同で事業を営む者の間の関係」。登記は定義に入っていない。一般パートナーシップは登記なしで成立する。登記が必要なのはリミテッド・パートナーシップと LLP。' },
        { q: 'In the absence of any partnership agreement, which of the following applies under the Partnership Act 1890?', choices: ['Partners share profits in the ratio of their capital contributions', 'Partners are entitled to interest on their capital at 5% per annum', 'Each partner is entitled to a salary for working in the business', 'Partners share profits equally, even if they contributed different amounts of capital'], answer: 3, explain: 's24(1) で利益は均等。出資の比率で分けるのは契約で決めたときだけ。出資の利息はない（s24(4)）。年5%が付くのは、出資を超えて事務所に貸したお金（s24(3)）で、出資そのものではない。給与もない（s24(6)）。' },
        { q: 'PA 1890 s2 の考え方で、それだけではパートナーにならない人は？', choices: ['利益を均等に分け、一緒に店を経営している友人', '出資して、共同で事業の方針を決めている兄弟', '利益の一部を給与として受け取る従業員', '利益を目的に、2人で続けて輸入販売をしている人'], answer: 2, explain: '利益を分けることは有力な証拠だが、それだけでは決まらない（s2(3)）。従業員が給与として利益の一部を受け取っても、それだけではパートナーにならない。ほかの3つは、共同で利益を目的に事業をしているので、パートナーシップに当たる。' },
        { q: 'F と G は会社を作るつもりで準備をしていた。会社の設立前に、G が事業用の備品を注文した。F はパートナーとして代金の責任を負う？', choices: ['ふつうは負わない。会社の準備をしていただけで、事業を共同で営んでいない', '負う。利益を目的に一緒に計画していたから', '負う。口約束だけでもパートナーシップは成立するから', '負わない。パートナーシップは書面がないと成立しないから'], answer: 0, explain: 'Keith Spicer Ltd v Mansell（1970）と同じ場面。準備だけではまだ「事業を営む」に当たらない。口約束でも成立するのは正しいが、事業を始めていることが必要。書面がないと成立しない、は誤り。' },
        { q: 'Under the Partnership Act 1890, in the absence of agreement, which of the following requires the consent of ALL the partners?', choices: ['Ordering stock in the ordinary course of business', 'Changing the nature of the partnership business', 'Deciding the opening hours of the office', 'Hiring a junior member of staff'], answer: 1, explain: 'ふつうの事項は多数決で決めるが、事業の種類を変えるには全員の同意が必要（s24(8)）。新しいパートナーの加入も全員の同意（s24(7)）。在庫の注文や営業時間、職員の採用はふつうの事項。' }
      ]
    },
    {
      id: 'B048',
      no: 48,
      title: 'パートナーの権限と責任',
      goal: 'パートナーが事務所を拘束する範囲（s5）と、事務所の債務への責任（無限・連帯）、新しく加わった人・退職した人・パートナーと名乗った人の責任を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(f)'],
      slides: [
        {
          title: '1人のサインで、全員が縛られる',
          paras: ['シェアハウスの仲間の1人が、共用の冷蔵庫を「シェアハウス名義」で買ってきた。自分は知らなくても、代金を分担することになりそう。', 'パートナーシップはもっと強い。パートナーの1人が事務所の事業として結んだ契約は、事務所とパートナー全員を拘束する。しかも責任に上限がない。']
        },
        {
          title: 'パートナーは事務所の代理人（s5）',
          paras: ['PA 1890 s5: パートナーはそれぞれ、事業の目的のために、事務所と他のパートナーの代理人（agent）になる。前のレッスンで学んだ代理の考え方がそのまま使える。'],
          list: ['実際の権限（actual authority）: パートナーシップ契約や合意で与えられた権限', '通常の権限（usual authority）: その種類の事業をふつうのやり方で行う行為なら、相手に対して事務所を拘束する。表見的な権限の一種']
        },
        {
          title: '事務所が拘束されるかを判断する',
          svg: `<svg viewBox="0 0 440 352" role="img" aria-label="実際の権限、ふつうの事業の範囲、相手の認識の3つの問いで事務所が拘束されるかを判断する流れ" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">事務所は拘束されるか（s5）</text><rect x="20" y="46" width="240" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="76" fill="var(--ink)">① 実際の権限がある？</text><line x1="260" y1="70" x2="280" y2="70" stroke="var(--edge)" stroke-width="1.25"/><rect x="280" y="46" width="140" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="76" text-anchor="middle" font-size="14" fill="var(--ink)">はい：拘束する</text><line x1="140" y1="94" x2="140" y2="122" stroke="var(--edge)" stroke-width="1.25"/><text x="150" y="113" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="122" width="240" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="152" fill="var(--ink)">② ふつうの事業の範囲内？</text><line x1="260" y1="146" x2="280" y2="146" stroke="var(--edge)" stroke-width="1.25"/><rect x="280" y="122" width="140" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="152" text-anchor="middle" font-size="14" fill="var(--ink)">いいえ：拘束しない</text><line x1="140" y1="170" x2="140" y2="198" stroke="var(--edge)" stroke-width="1.25"/><text x="150" y="189" font-size="14" fill="var(--quiet)">はい</text><rect x="20" y="198" width="240" height="66" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="226" font-size="14" fill="var(--ink)">③ 相手は権限がないと知っていた</text><text x="34" y="250" font-size="14" fill="var(--ink)">またはパートナーと知らない？</text><line x1="260" y1="231" x2="280" y2="231" stroke="var(--edge)" stroke-width="1.25"/><rect x="280" y="198" width="140" height="66" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="236" text-anchor="middle" font-size="14" fill="var(--ink)">はい：拘束しない</text><line x1="140" y1="264" x2="140" y2="292" stroke="var(--edge)" stroke-width="1.25"/><text x="150" y="283" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="292" width="400" height="46" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="321" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">事務所と全パートナーが拘束される</text></svg>`,
          caption: 'パートナーどうしで決めた権限の制限は、それを知らない相手には主張できない（s8）。事務所の事業と関係がないと見える目的で事務所の信用を使っても、特に権限を与えていなければ拘束しない（s7）。'
        },
        {
          title: '「ふつうの事業の範囲」とは',
          list: ['どの事務所でも: 事業用の物品の売買、代金の受取り、従業員の雇用など', '物品を売買する事務所（trading partnership）: 借入れや手形の振出しまで含むのがふつう', '会計・法律などの専門職の事務所: 借入れは、ふつうは含まれない'],
          after: 'Mercantile Credit Co Ltd v Garrod（1962）: 自動車修理の事務所で、契約では車の売買を禁じていた。パートナーの1人が車を売って代金を受け取った（車は他人のものだった）。車の売買は修理工場のふつうの事業の範囲内で、買主は制限を知らなかったので、もう1人のパートナーも代金の返還に責任を負った。'
        },
        {
          title: '責任: 上限なし、しかも連帯',
          list: ['契約の債務: パートナーである間に生じた事務所の債務について、全員が連帯して（jointly）責任を負う（s9）', 'パートナーが事業のふつうの範囲で起こした不法行為（過失など）: 事務所が責任を負い、パートナーは連帯して、かつ個別に（jointly and severally）責任を負う（s10・s12）', '債権者は、事務所の財産で足りなければ、パートナー1人の個人財産から全額を回収できる。払ったパートナーは、他のパートナーに分担を求める']
        },
        {
          title: '例題: 誰がいくら払う？',
          example: {
            problem: 'P・Q・R の一般パートナーシップ。契約書はなく、3人の出資額は同じ。事業をやめたとき、事務所の財産をすべて使っても債務が $90,000 残った。債権者は、いちばん財産の多い P から $90,000 を全額回収した。P は Q と R にいくら請求できる？',
            steps: ['3人は無限・連帯で責任を負うので、債権者は P 1人に全額を請求できる', '契約がないので、損失はパートナーの間で均等に負担する（s24(1)）: $90,000 ÷ 3 ＝ $30,000', 'P の本来の負担は $30,000。払いすぎたのは $90,000 − $30,000 ＝ $60,000', 'これを Q と R に $30,000 ずつ請求する'],
            answer: 'Q と R にそれぞれ $30,000（合計 $60,000）を請求できる'
          }
        },
        {
          title: '加わった人、やめた人',
          table: { caption: 'パートナーが変わったときの責任', head: ['場面', '責任'], rows: [['新しく加わったパートナー', '加入前の債務は負わない（s17(1)）'], ['退職したパートナー（退職前の債務）', '残る（s17(2)）。免れるには債権者との合意（novation）が必要'], ['退職後の債務（以前からの取引先）', '退職を実際に通知するまで責任が残る（s36(1)）'], ['退職後の債務（新しい取引先）', 'London Gazette に公告すれば負わない（s36(2)）']] },
          note: { kind: 'warn', text: 'よくある間違い: 退職しただけでは、退職前の債務からは逃れられない。また Gazette の公告で足りるのは、退職前に事務所と取引がなかった相手だけ。以前からの取引先には、実際に通知する。' }
        },
        {
          title: 'パートナーと名乗った人（holding out, s14）',
          paras: ['パートナーでない人でも、自分がパートナーだと言ったり、知っていて名乗らせたりすると、それを信じて事務所に信用を与えた相手に対して、パートナーと同じ責任を負う。', 'Tower Cabinet Co Ltd v Ingram（1949）: 退職した Ingram の名前が入った古い便箋が、本人の知らないうちに使われた。相手は退職前の事務所と取引がなく、Ingram がパートナーだったことも知らなかった。知っていて名乗らせたわけではないので、Ingram は責任を負わなかった。']
        },
        {
          title: 'なぜ？ 全員がそこまで責任を負う理由',
          paras: ['一般パートナーシップには法人格がない。取引の相手方は、事務所という「人」ではなくパートナーたち自身。だから債務はパートナー全員のものになる。', '取引相手は、パートナーと話すたびに「この人に権限があるか」を確かめられない。ふつうの事業の範囲なら信じてよいことにすると、取引が速く安全になる。その代わり、パートナーは信頼できる人だけを仲間に選ぶ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['パートナーは事務所の代理人（s5）。ふつうの事業の範囲の行為は、制限を知らない相手に対して事務所を拘束する', '責任は上限なしで連帯（s9・s12）。債権者は1人から全額を取れ、払った人は他のパートナーに分担を求める', '新人は加入前の債務を負わない。退職者は退職前の債務が残り、通知しないと退職後の債務も負う。名乗った人も責任を負う（s14）']
        },
        {
          title: '英単語',
          words: [
            ['usual authority', 'ユージュアル オーソリティ', '通常の権限（その事業のふつうの範囲の権限）'],
            ['jointly liable', 'ジョイントリー ライアブル', '連帯して責任を負う'],
            ['jointly and severally liable', 'ジョイントリー アンド セベラリー', '連帯して、かつ個別にも責任を負う'],
            ['incoming partner / retiring partner', '', '新しく加わるパートナー / 退職するパートナー'],
            ['novation', 'ノベーション', '債務者の入れ替え（債権者を含む合意）'],
            ['holding out', 'ホールディング アウト', 'パートナーだと名乗る・名乗らせること']
          ]
        }
      ],
      quiz: [
        { q: 'Ann, Bob and Cal are partners in a firm of car dealers. The partnership agreement states that no partner may buy a vehicle costing more than $30,000 without the consent of the others. Bob buys a car for $45,000 from Dan, who is unaware of the restriction. Which of the following is correct?', choices: ['The firm is not bound, because Bob acted in breach of the partnership agreement', 'Only Bob is liable to Dan, because he exceeded his actual authority', 'The firm is bound only if Ann and Cal later ratify the contract', 'The firm is bound, because buying cars is within the usual business of the firm and Dan had no notice of the restriction'], answer: 3, explain: '車の売買は車販売店のふつうの事業の範囲内なので、s5 で事務所が拘束される。内部の制限は、知らない相手には主張できない（s8）。Bob は内部では契約違反になり、他のパートナーに対して責任を問われうるが、それは Dan との関係とは別。追認がなくても拘束される。' },
        { q: 'Eve retired from a partnership. She did not notify existing customers, and no notice was placed in the Gazette. After her retirement, the firm incurred a debt to Fox Ltd, which had regularly dealt with the firm before Eve retired and knew she was a partner. Is Eve liable for the debt?', choices: ['No, because a retired partner is never liable for debts incurred after retirement', 'No, because Fox Ltd should have checked a public register of partners', 'Yes, because Fox Ltd had dealt with the firm before and had no notice of her retirement', 'Yes, but only up to the amount of her capital in the firm'], answer: 2, explain: '以前からの取引先は、変更の通知を受けるまで、前のパートナーをまだパートナーとして扱える（s36(1)）。一般パートナーシップにはパートナーの公的な登記簿がない。責任は出資額までではなく、上限がない。' },
        { q: 'X と Y の一般パートナーシップ（契約書なし、2人の出資額は同じ）。事務所の財産をすべて使っても債務 $50,000 が残り、債権者は X から全額を回収した。X が Y に請求できる額は？', type: 'number', answer: 25000, unit: '$', explain: '債権者は X 1人から全額を取れる（無限・連帯）。2人の間では、契約がないので損失を均等に負担する（s24(1)）。X の負担は $50,000 ÷ 2 ＝ $25,000。払いすぎた $25,000 を Y に請求できる。' },
        { q: 'G は2月1日に事務所のパートナーになった。H 社への $8,000 の債務は、1月に生じたもの。この債務についての G の責任は？', choices: ['負わない。加入前の債務は、新しいパートナーには及ばない', '負う。パートナーは事務所のすべての債務に責任を負う', '出資額の範囲でなら負う', '加入から6か月たつと負うようになる'], answer: 0, explain: '新しく加わったパートナーは、加入前に生じた事務所の債務について責任を負わない（s17(1)）。加入後の債務には上限なしで責任を負う。' },
        { q: 'I は事務所のパートナーではないが、取引先にパートナーだと名乗った。取引先はそれを信じて、事務所に掛けで商品を売った。I の責任は？', choices: ['パートナーではないので、一切責任を負わない', 'その取引先に対して、パートナーと同じ責任を負う', '事務所が責任を負うので、I は責任を負わない', 'パートナー全員が同意したときだけ責任を負う'], answer: 1, explain: 's14 の holding out。自分でパートナーだと名乗り、相手がそれを信じて信用を与えたので、I はパートナーと同じ責任を負う。Tower Cabinet v Ingram との違いは、本人が自分で名乗っている（または知っていて名乗らせている）こと。' },
        { q: 'Under the Partnership Act 1890, which of the following statements about the liability of partners is correct?', choices: ['A retiring partner is automatically released from all debts incurred before retirement', 'Partners are liable for the firm\'s debts only up to the amount of capital they contributed', 'Only the partner who made a contract is liable for the resulting debt', 'A new partner is not liable for debts incurred by the firm before he or she became a partner'], answer: 3, explain: '加入前の債務は負わない（s17(1)）。退職者は退職前の債務から自動的には外れない。免れるには債権者を含む合意（novation）が必要（s17(2)(3)）。一般パートナーシップのパートナーの責任に上限はなく、契約した本人だけでなく全員が責任を負う（s9）。' }
      ]
    },
    {
      id: 'B049',
      no: 49,
      title: 'LLPのメンバーの権限と責任',
      goal: 'LLP の設立手続、メンバーが LLP を拘束する範囲、メンバーの責任とその例外を、一般パートナーシップと比べて説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(d)', 'K3:D1(f)'],
      slides: [
        {
          title: 'お店そのものが「人」になる',
          paras: ['一般パートナーシップでは、店の借金はパートナーたちの借金だった。LLP では、店そのものが法律上の「人」になる。借金をするのも払うのも店。', 'たとえるなら、みんなでお金を出し合って作った「別の財布」が、自分の名前で契約できるようなもの。メンバーが失うのは、原則としてその財布に入れたお金まで。']
        },
        {
          title: '設立: 登記で生まれる',
          list: ['利益を目的に適法な事業をする2人以上が、設立書類（incorporation document）に署名する', '登記官（Registrar of Companies）に届け、登録されると LLP が成立する', '指定メンバー（designated member）が最低2人必要。指定しないと、メンバー全員が指定メンバーになる', '名前の最後は limited liability partnership または LLP'],
          after: '指定メンバーは、決算書（accounts）の署名と提出、毎年の確認書（confirmation statement）やメンバーの変更の届出などを担当する。LLP の決算書は会社と同じように公開される。'
        },
        {
          title: 'メンバーは LLP の代理人（LLPA 2000 s6）',
          paras: ['すべてのメンバーは LLP の代理人（agent）。メンバーが LLP のために結んだ契約の当事者は LLP で、メンバー個人ではない。', 'ただし、メンバーに実際の権限がなく、相手がそれを知っているか、その人をメンバーだと知らない（信じていない）なら、LLP は拘束されない（s6(2)）。パートナーシップの s5 と同じ考え方。'],
          note: { kind: 'tip', text: 'やめたメンバーも、相手が退任を知るか、登記官に届け出られるまでは、相手に対してまだメンバーとして扱われる（s6(3)）。' }
        },
        {
          title: '一般パートナーシップと LLP',
          table: { caption: '主な違い', head: ['項目', '一般パートナーシップ', 'LLP'], rows: [['法律', 'PA 1890', 'LLPA 2000'], ['法人格', 'なし（イングランド）', 'あり（body corporate）'], ['成立', '合意だけ。登記なし', '設立書類の登記'], ['代理', 'パートナーは事務所と他のパートナーの代理人', 'メンバーは LLP の代理人'], ['事務所の債務', 'パートナーが上限なし・連帯で負う', 'LLP が負う。メンバーは原則として出資額まで'], ['決算書', '公開しない', '登記官に提出し、公開される']] }
        },
        {
          title: 'メンバーの責任の例外',
          paras: ['メンバーは LLP の債務を個人で払わないのが原則。ただし、次の場合は個人の財産が危なくなる。'],
          list: ['自分の過失（negligence）で相手に損害を与えた: LLP のほかに、本人も責任を問われることがある', 'LLP が払えなくなると知りながら（知るべきなのに）、清算前2年以内にお金を引き出した: 返還を命じられることがある（Insolvency Act 1986 s214A）', '会社の取締役と同じく、不正取引・不当取引の責任を負うことがある（第9部で学ぶ）', 'メンバーが1人だけになったまま6か月を超えて事業を続けた: それを知っていた残りの1人は、6か月を過ぎた後の債務について LLP と連帯して責任を負う']
        },
        {
          title: '例題: メンバーはいくら払う？',
          example: {
            problem: 'Kato と Lee は LLP のメンバーで、それぞれ $30,000 を出資した。LLP は支払不能になり、LLP の財産（出資を含む）をすべて使っても債務が $80,000 残った。2人とも過失はなく、お金の引出しも不当取引もない。(1) Kato が個人で払う額は？ (2) 同じことが一般パートナーシップ（契約なし）で起きたら？',
            steps: ['LLP は別の法人なので、債務は LLP のもの', '出資した $30,000 ずつは、LLP の財産としてすでに使われた。これが各メンバーの損失', '例外に当たる事情がないので、残りの $80,000 を個人で払う必要はない → (1) $0', '一般パートナーシップなら、2人が上限なし・連帯で $80,000 を負う。債権者はどちらにも全額を請求でき、内部では $80,000 ÷ 2 ＝ $40,000 ずつ負担する'],
            answer: '(1) $0（失うのは出資の $30,000 まで） (2) 2人で $80,000。内部の負担は $40,000 ずつ'
          }
        },
        {
          title: 'LLP の中のルール',
          paras: ['メンバーどうしの関係（利益の分け方、経営、加入・脱退）は、メンバーの合意（LLP agreement）で自由に決める。合意がないときは、規則（LLP Regulations 2001）のルールが入る。'],
          list: ['資本と利益は均等に分ける', '全員が経営に参加できる。報酬はない', '新しいメンバーの加入と、事業の種類の変更は全員の同意', '多数決でメンバーを追い出すことはできない（合意があれば別）'],
          after: '一般パートナーシップの s24 とよく似ている。'
        },
        {
          title: 'なぜ？ パートナーシップなのに法人にした理由',
          paras: ['大きな専門家の事務所には、何百人ものパートナーがいる。一般パートナーシップのままだと、会ったこともない別のパートナーのミスで、自分の家まで失いかねない。', 'LLP は、会社の利点（法人にして責任を限る）と、パートナーシップの利点（中のルールを自由に決められ、税金はメンバーに直接かかる）を組み合わせた形。その代わりに、登記と決算書の公開という負担を受け入れる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'LLP のメンバーの責任は「何があっても出資額まで」ではない。自分の過失による責任、清算前の引出しの返還、不当取引の責任はありうる。また、LLP のメンバーは limited partner と違い、全員が経営に参加しても有限責任を失わない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['LLP は登記で設立する法人。2人以上のメンバーと、最低2人の指定メンバーが必要', 'メンバーは LLP の代理人（s6）。契約の当事者は LLP。権限がなくても、相手が知らなければ LLP を拘束しうる', 'メンバーの責任は原則として出資額まで。例外は自分の過失、清算前の引出し、不当取引など']
        },
        {
          title: '英単語',
          words: [
            ['member (of an LLP)', 'メンバー', 'LLP の構成員'],
            ['designated member', 'デジグネイティッド メンバー', '指定メンバー'],
            ['incorporation document', 'インコーポレーション ドキュメント', '設立書類'],
            ['Registrar of Companies', 'レジストラー', '登記官（会社の登記を扱う役所）'],
            ['separate legal personality', 'セパレート リーガル パーソナリティ', '別個の法人格'],
            ['negligence', 'ネグリジェンス', '過失']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is required to form a limited liability partnership (LLP)?', choices: ['At least one member must agree to accept unlimited liability for the debts of the LLP', 'A written partnership agreement signed by all members, without any registration', 'At least two persons must subscribe to an incorporation document, which is delivered to the Registrar', 'At least seven members, of whom two must be designated members'], answer: 2, explain: 'LLP は、2人以上が設立書類に署名し、登記官に届けて登録されることで成立する。無限責任のメンバーはいらない（それはリミテッド・パートナーシップ）。登記なしで成立するのは一般パートナーシップ。必要なメンバーは2人以上で、7人という決まりはない。' },
        { q: 'Mia is a member of Ray LLP. She makes a contract with Sol Ltd on behalf of the LLP, within the usual business of the LLP but without actual authority. Sol Ltd knew she was a member, but did not know that she lacked authority. Which of the following is correct?', choices: ['Ray LLP is bound, because every member is an agent of the LLP', 'Ray LLP is not bound, because Mia had no actual authority', 'Mia is personally liable on the contract instead of the LLP', 'All members of Ray LLP are liable on the contract without limit'], answer: 0, explain: 'メンバーは全員 LLP の代理人（s6(1)）。拘束されないのは、権限がなく、しかも相手がそれを知っているかメンバーだと知らないときだけ（s6(2)）。Sol Ltd はどちらにも当たらないので LLP が拘束される。契約の当事者は LLP で、メンバーが上限なしの責任を負うことはない。' },
        { q: 'T と U は LLP のメンバーで、T は $25,000、U は $15,000 を出資した。LLP は清算され、LLP の財産をすべて使っても債務が $60,000 残った。T に過失はなく、清算前の引出しも不当取引もない。T が出資とは別に個人で払う額は？', choices: ['$30,000（残りを2人で均等に負担）', '$0（失うのは出資の $25,000 まで）', '$37,500（出資の比率 25:15 で按分）', '$60,000（債権者はどのメンバーにも全額を請求できる）'], answer: 1, explain: 'LLP の債務は LLP のもの。メンバーは原則として出資を失うだけで、例外の事情もない。均等や出資比率で分けるのは、一般パートナーシップの内部の負担の考え方。全額を1人に請求できるのは一般パートナーシップ。$60,000 × 25 ÷ 40 ＝ $37,500 は比率の計算としては正しいが、LLP には当てはまらない。' },
        { q: 'LLP の指定メンバー（designated member）について正しいのは？', choices: ['最低1人必要で、その人だけが無限責任を負う', '指定メンバーだけが、LLP を代理して契約できる', '指定メンバーは、決算書の提出に関わらない', '最低2人必要。指定しないと、メンバー全員が指定メンバーになる'], answer: 3, explain: '指定メンバーは最低2人。指定がなければ全員が指定メンバー（LLPA 2000 s8）。指定メンバーも有限責任で、無限責任を負う人はいない。代理人になるのはメンバー全員（s6）。決算書の署名・提出は指定メンバーの役割。' },
        { q: 'LLP のメンバー V は、顧客への助言で、自分の過失により顧客に損害を与えた。正しいのは？', choices: ['LLP は法人なので、V が個人で責任を問われることは一切ない', 'メンバー全員が上限なし・連帯で責任を負う', 'LLP が責任を負うほか、V も個人で責任を問われることがある', 'V だけが責任を負い、LLP は一切責任を負わない'], answer: 2, explain: '事業の中でのメンバーの過失について、LLP は責任を負う（s6(4)）。それとは別に、過失をした本人は不法行為の責任を問われることがある。ほかのメンバーが上限なしで責任を負うのは一般パートナーシップの考え方で、LLP では違う。' },
        { q: 'Which of the following is a difference between a limited partner in a limited partnership and a member of an LLP?', choices: ['An LLP member may take part in management without losing limited liability, but a limited partner may not', 'A limited partnership is a body corporate, but an LLP is not', 'An LLP member has unlimited liability, but a limited partner does not', 'A limited partner must be a designated member, but an LLP member need not be'], answer: 0, explain: 'limited partner は経営に参加すると、その間の債務に無限責任を負う。LLP のメンバーは経営に参加しても有限責任のまま。法人なのは LLP で、リミテッド・パートナーシップではない。designated member は LLP の用語。' }
      ]
    },
    {
      id: 'B050',
      no: 50,
      title: '個人事業主・パートナーシップ・会社の違い',
      goal: '個人事業主・パートナーシップ・会社を、法人格・責任・設立・経営・継続性・資金調達・公開・課税で比べ、場面に合う形を選べるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(a)'],
      slides: [
        {
          title: '屋台、仲間との店、会社',
          paras: ['1人で屋台を出すなら、今日から始められる。もうけも借金も全部自分のもの。仲間と店を開けば相談はできるが、仲間の失敗も自分の責任になる。', '会社にすると、店そのものが「人」になる。手続きと公開の手間は増えるが、出したお金より多くは失わない。どれがよいかは、規模とリスクで変わる。']
        },
        {
          title: '3つの形',
          list: ['個人事業主（sole trader）: 1人で事業をする個人。事業と本人は、法律上同じ人', 'パートナーシップ（partnership）: 2人以上が、利益を目的に共同で事業をする関係（PA 1890）。ここでは一般パートナーシップ', '会社（company）: 登記で設立される法人。ここでは株式有限責任会社（company limited by shares）'],
          after: 'LLP は、法人格と有限責任の点では会社に近い。中のルールを自由に決められ、税金がメンバーにかかる点ではパートナーシップに近い。'
        },
        {
          title: '比べる①: 法律上の性格',
          table: { caption: '法人格と責任', head: ['項目', '個人事業主・パートナーシップ', '会社'], rows: [['法人格', 'なし。事業＝本人たち', 'あり。会社は株主と別の人'], ['事業の債務', '本人たちが上限なしで負う', '会社が負う。株主が失うのは出資額まで（未払込額があれば払う義務だけ）'], ['事業の財産の持ち主', '本人たち', '会社'], ['続くか', '本人の死亡で終わる。パートナーシップは、契約で別に決めない限りパートナーの死亡・破産で解散', '株主が変わっても、死亡しても続く（perpetual succession）']] }
        },
        {
          title: '比べる②: 手続きと運営',
          table: { caption: '設立・経営・公開', head: ['項目', '個人事業主・パートナーシップ', '会社'], rows: [['設立', '手続きなし（税金の届出などは別）', '登記官への登記が必要'], ['経営', '本人たちが自分で経営', '取締役が経営。所有者（株主）と分かれることがある'], ['持分を移す', 'パートナーの地位は、全員の同意がないと他人に移せない', '株式は原則として譲渡できる（定款の制限は別）'], ['公開', '決算書を公開しない', '決算書などを登記官に提出し、公開される'], ['規制', '少ない', 'Companies Act 2006 の多くのルール']] }
        },
        {
          title: '比べる③: お金',
          table: { caption: '資金・引出し・税金', head: ['項目', '個人事業主・パートナーシップ', '会社'], rows: [['資金集め', '本人たちの資金と借入れ', '株式を発行できる。浮動担保（floating charge）を付けて借りられる'], ['お金を引き出す', '自由に引き出せる（契約の範囲で）', '資本維持のルールで制限。配当は分配可能な利益から'], ['課税（概略）', '事業の利益に本人たちの所得税', '会社に法人税。株主は受け取った配当に課税']] },
          note: { kind: 'tip', text: '浮動担保は、在庫のように入れ替わる財産全体にかける担保。付けられるのは会社と LLP で、個人事業主と一般パートナーシップは付けられない。' }
        },
        {
          title: '個人事業主とパートナーシップの違い',
          list: ['人数: 個人事業主は1人。パートナーシップは2人以上', '代理: パートナーは互いの代理人。他のパートナーの契約にも縛られる。個人事業主は自分の契約だけ', '決め方: パートナーシップは契約や s24 で決める。個人事業主は1人で決める', '責任: どちらも上限なし。パートナーは、他のパートナーが作った事務所の債務にも連帯して責任を負う']
        },
        {
          title: '例題: 場面に合う形を選ぶ',
          example: {
            problem: 'Nina はウェブデザインの仕事を1人で始めたい。初期費用は小さく、手続きや決算書の公開は避けたい。数年後には投資家から $500,000 を集めたい。そのときは、事業がうまくいかなくても自宅は守りたい。今と数年後、どの形が合う？',
            steps: ['今: 1人で小さく始め、手続きと公開を避けたい → 個人事業主。ただし事業の債務は上限なしで負う', '数年後: 投資家からお金を集める → 株式を発行できる会社が向く', '自宅を守りたい → 有限責任の会社。株主が失うのは出資額まで', '代わりに、登記・決算書の公開・Companies Act の規制を受け入れる'],
            answer: '今は個人事業主、規模が大きくなったら株式有限責任会社'
          }
        },
        {
          title: 'なぜ？ 全部を会社にしない理由',
          paras: ['有限責任は、事業の失敗のリスクを債権者に移すこと。だから法律は、会社に登記・決算書の公開・資本維持などの「代わりの守り」を求める。', '小さな事業には、この負担が重い。個人事業主やパートナーシップは自由で安いが、責任が重い。法律は、自由と責任の組み合わせを選べるようにしている。実際には、銀行が小さな会社に貸すとき、取締役の個人保証を求めることが多い。その分だけ、有限責任の効果は弱まる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '有限責任なのは株主であって、会社ではない。会社自身は自分の債務を全額払う責任がある。会社の財産で足りなければ、債権者が損をする。また、取締役が個人保証をすれば、その範囲では個人で払う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['個人事業主とパートナーシップ: 法人格なし、責任に上限なし、設立の手続きと公開がない', '会社: 登記で生まれる法人。株主は有限責任で、株主が変わっても会社は続く', '会社の代わりの負担: 登記、決算書の公開、資本維持など Companies Act の規制']
        },
        {
          title: '英単語',
          words: [
            ['sole trader', 'ソール トレーダー', '個人事業主'],
            ['company limited by shares', '', '株式有限責任会社'],
            ['limited liability', 'リミテッド ライアビリティ', '有限責任'],
            ['perpetual succession', 'パーペチュアル サクセション', '（会社が）永続すること'],
            ['floating charge', 'フローティング チャージ', '浮動担保'],
            ['shareholder / member', '', '株主 / 社員（会社の構成員）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a characteristic of a company limited by shares but NOT of a sole trader?', choices: ['Its owner is personally liable without limit for the debts of the business', 'It has a legal personality separate from its owners', 'It can be started without any registration formalities', 'Its accounts do not need to be filed on a public register'], answer: 1, explain: '会社は登記で生まれる法人で、所有者（株主）と別の人。ほかの3つは個人事業主の特徴。個人事業主は上限なしで責任を負い、登記がいらず、決算書も公開しない。' },
        { q: 'Which of the following can create a floating charge over its assets?', choices: ['A sole trader', 'A general partnership', 'A limited partner in a limited partnership', 'A company limited by shares'], answer: 3, explain: '浮動担保を付けられるのは会社（と LLP）。個人事業主や一般パートナーシップは付けられない。これは会社にする利点の1つで、借入れがしやすくなる。' },
        { q: '契約に特別な定めのないパートナーシップで、パートナーの1人が亡くなった。会社で株主が亡くなった場合と比べて、正しいのは？', choices: ['パートナーシップも会社も解散する', 'パートナーシップも会社も、そのまま続く', 'パートナーシップは解散する。会社は株式が相続されて続く', 'パートナーシップは続き、会社は解散する'], answer: 2, explain: 'パートナーシップは、契約で別に決めていなければ、パートナーの死亡や破産で解散する（PA 1890 s33）。会社は株主と別の人なので、株主が亡くなっても続く（perpetual succession）。' },
        { q: '「有限責任」について正しいのは？', choices: ['株主が失うのは出資額まで。会社自身は債務を全額負う', '会社の債務の額が、資本金の額までに限られる', '取締役の責任が、報酬の額までに限られる', '会社が倒産すると、会社の債務がすべて消える'], answer: 0, explain: '有限責任なのは株主。会社自身の責任に上限はなく、会社の財産で払えない部分は債権者の損になる。債務が資本金までに限られるわけでも、消えるわけでもない。取締役の責任は別の話。' },
        { q: 'Which of the following statements about partnerships and companies is correct?', choices: ['Partners in a general partnership have limited liability once the firm has been registered', 'Shares in a company are generally transferable, but a partner cannot make another person a partner without the consent of all the partners', 'A company is managed by its shareholders, who must all take part in management', 'A sole trader must file annual accounts on a public register'], answer: 1, explain: '株式は原則として譲渡できる。新しいパートナーの加入には全員の同意が必要（s24(7)）。一般パートナーシップは登記しないし、責任に上限もない。会社を経営するのは取締役。個人事業主は決算書を公開しない。' },
        { q: 'Omar は1人で事業をしていて、銀行から $40,000 を借りた。事業の財産は $10,000 しかない。残りの $30,000 のために、Omar の自宅は差押えの対象になる？', choices: ['ならない。事業の財産 $10,000 の範囲でしか責任を負わない', 'ならない。個人事業主の事業は本人と別の法人だから', '銀行が担保の登記をしていなければ、ならない', 'なる。個人事業主は事業の債務に上限なしで責任を負う'], answer: 3, explain: '個人事業主に法人格はなく、事業の債務は本人の債務。事業の財産で足りない $30,000 は、自宅を含む個人の財産から払う。担保の登記の有無は、債務を払う義務そのものとは関係ない。' }
      ]
    },
    {
      id: 'B051',
      no: 51,
      title: '第4部 総合演習：代理とパートナーシップ',
      goal: '1つの事務所の場面で、代理の成立と権限、パートナーの責任、LLP への移行、事業の形の違いをまとめて問う英語の OT 問題に答えられるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(a)', 'K3:D1(b)', 'K3:D1(c)', 'K3:D1(d)', 'K3:D1(e)', 'K3:D1(f)', 'K3:D2(a)'],
      slides: [
        {
          title: '場面: 3人の設計事務所',
          paras: ['Ana・Ben・Chloe の3人は、建築設計の事務所 ABC Design を一般パートナーシップで営んでいる。書面の契約はない。', '事務の仕事は、外部の Dev に代理人として任せている。3人は来年、LLP に変えることを考えている。この場面で第4部の全体を復習する。']
        },
        {
          title: '代理のおさらい①: 役割と成立',
          list: ['代理人（agent）は、本人（principal）のために第三者と契約する。契約の当事者は本人と第三者で、代理人はふつう外に出る', '例: パートナーは事務所の、LLP のメンバーは LLP の、取締役は会社の代理人', '成立: 合意（明示・黙示）、追認（ratification）、必要による代理（agency of necessity）、禁反言（estoppel）']
        },
        {
          title: '代理のおさらい②: 追認の条件',
          list: ['代理人が契約した時に、本人が存在し、契約する能力があった', '代理人が、本人のために行動していると相手に示していた', '本人が合理的な期間内に、契約全体を追認する（一部だけは不可）'],
          after: '追認すると、最初から権限があったことになる。相手（第三者）の同意はいらない。'
        },
        {
          title: '代理のおさらい③: 権限と責任',
          table: { caption: '代理人が契約したとき、誰が責任を負うか', head: ['場面', '責任を負う人'], rows: [['実際の権限（明示・黙示）の範囲内', '本人。代理人はふつう責任なし'], ['表見的な権限（本人が権限があるように見せ、相手が信じた）', '本人'], ['実際の権限も表見的な権限もない（追認もない）', '代理人。権限保証違反（breach of warranty of authority）'], ['代理人が自分の名前で契約した、本人を隠していた', '代理人も責任を負うことがある']] }
        },
        {
          title: '代理は第4部の土台',
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="代理の考え方がパートナー、LLPメンバー、取締役に共通して使われることを示す図" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">代理は第4部の土台</text><rect x="120" y="46" width="200" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="74" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">代理（agency）</text><line x1="220" y1="90" x2="80" y2="150" stroke="var(--edge)" stroke-width="1.25"/><line x1="220" y1="90" x2="220" y2="150" stroke="var(--edge)" stroke-width="1.25"/><line x1="220" y1="90" x2="360" y2="150" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="150" width="120" height="84" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="178" text-anchor="middle" fill="var(--ink)">パートナー</text><text x="80" y="200" text-anchor="middle" font-size="14" fill="var(--ink)">→ 事務所</text><text x="80" y="222" text-anchor="middle" font-size="12.5" fill="var(--quiet)">PA 1890 s5</text><rect x="160" y="150" width="120" height="84" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="178" text-anchor="middle" fill="var(--ink)">LLPメンバー</text><text x="220" y="200" text-anchor="middle" font-size="14" fill="var(--ink)">→ LLP</text><text x="220" y="222" text-anchor="middle" font-size="12.5" fill="var(--quiet)">LLPA 2000 s6</text><rect x="300" y="150" width="120" height="84" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="178" text-anchor="middle" fill="var(--ink)">取締役</text><text x="360" y="200" text-anchor="middle" font-size="14" fill="var(--ink)">→ 会社</text><text x="360" y="222" text-anchor="middle" font-size="14" fill="var(--quiet)">第7部で学ぶ</text></svg>`,
          caption: 'どれも「権限の範囲内の行為は本人（事務所・LLP・会社）を拘束する」という同じ考え方で動く。'
        },
        {
          title: 'パートナーシップのおさらい',
          list: ['形: 一般（PA 1890、全員が無限責任）、リミテッド（LPA 1907、general partner が最低1人）、LLP（LLPA 2000、法人）', '成立: 事業を、共同で、利益を目的に（s1）。契約がなければ s24（利益は均等など）', '権限: パートナーは事務所の代理人（s5）。内部の制限は知らない相手に効かない（s8）', '責任: 上限なし・連帯。新人は加入前の債務なし。退職者は通知まで責任が残る（s17・s36）。名乗った人も責任（s14）']
        },
        {
          title: 'LLP に変えると何が変わるか',
          list: ['事務所が法人になり、変えた後の契約の当事者は LLP になる', 'メンバーの責任は、原則として出資額まで。自分の過失などは別', '登記官への登記、最低2人の指定メンバー、決算書の公開が必要になる', 'メンバーは全員、経営に参加できる（limited partner との違い）'],
          note: { kind: 'warn', text: 'よくある間違い: LLP に変えても、変える前の一般パートナーシップの債務への個人の責任は、債権者との合意（novation）がない限り消えない。有限責任になるのは、LLP になった後の債務。' }
        },
        {
          title: '解き方のコツ（K3 の OT 問題）',
          numbered: ['まず「誰と誰の関係か」を決める。本人・代理人・第三者か、事務所・パートナー・債権者か', '次に「どの形か」を確かめる。一般・リミテッド・LLP・会社で、責任のルールが全部変わる', '最後に「相手は何を知っていたか」を見る。権限の制限、退職、パートナーかどうか'],
          after: '英語の選択肢では、never・always・automatically・only のような言い切りの語がある文は、例外がないか疑う。'
        },
        {
          title: 'なぜ？ 代理を先に学んだ理由',
          paras: ['事務所も LLP も会社も、自分で手を動かせない。実際に契約するのは、パートナー・メンバー・取締役という「人」。だから、誰の行為が誰を縛るかを決める代理のルールが、事業の法律の土台になる。', '第三者を守る考え方も共通している。権限があるように見え、相手がそれを信じたなら、本人が責任を負う。この見方は、第7部の取締役の権限でもそのまま使う。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['代理人は、本人と第三者の間に契約を作る人。パートナーは事務所の、LLP のメンバーは LLP の、取締役は会社の代理人', '本人が拘束されるのは、実際の権限か表見的な権限があるとき、または追認したとき。どれもなければ代理人が責任を負う', '責任は形で決まる。一般パートナーは上限なし・連帯。limited partner・LLP のメンバー・株主は原則として出資額まで']
        },
        {
          title: '英単語',
          words: [
            ['principal / agent / third party', '', '本人 / 代理人 / 第三者'],
            ['ratification', 'ラティフィケーション', '追認'],
            ['agency of necessity', '', '必要による代理'],
            ['apparent (ostensible) authority', 'アパレント（オステンシブル）オーソリティ', '表見的な権限'],
            ['breach of warranty of authority', 'ブリーチ オブ ウォランティ', '権限保証違反'],
            ['estoppel', 'エストッペル', '禁反言']
          ]
        }
      ],
      quiz: [
        { q: 'Without any authority, Dev agreed to buy software for $2,000 from Fin Ltd, telling Fin Ltd that he was acting on behalf of ABC Design. Two weeks later, the partners decided that they wanted the software. Which of the following is NOT required for the partners to ratify the contract?', choices: ['ABC Design must have existed when Dev made the contract', 'Dev must have indicated that he was acting for ABC Design', 'Fin Ltd must agree to the ratification', 'The ratification must take place within a reasonable time'], answer: 2, explain: '追認の条件は、契約の時に本人が存在し能力があったこと、代理人が本人のためと示していたこと、合理的な期間内に契約全体を追認すること。第三者（Fin Ltd）の同意はいらない。追認すると、最初から権限があったことになる。' },
        { q: 'Dev, claiming to act for ABC Design, ordered furniture from Gil Ltd. Dev had no actual authority, and the partners had never represented that he had authority. The partners refuse to ratify the contract. Which of the following is correct?', choices: ['Dev is liable to Gil Ltd for breach of warranty of authority', 'ABC Design is bound by the contract because Dev is its agent', 'Gil Ltd has no claim against anyone', 'Ana, Ben and Chloe are each liable on the contract up to their capital'], answer: 0, explain: '実際の権限も表見的な権限（本人が権限があるように見せること）もなく、追認もないので、事務所は拘束されない。権限があると示して契約した Dev が、権限保証違反で Gil Ltd に責任を負う。Gil Ltd に救済がないわけではない。' },
        { q: 'Chloe retires from ABC Design at the end of March. The firm notifies all its existing clients and suppliers and places a notice of her retirement in the London Gazette. In May, Ben orders goods on credit from Hal Ltd, a new supplier that had never dealt with the firm. Is Chloe liable for this debt?', choices: ['Yes, because a retired partner remains liable for all debts of the firm', 'No, because the notice in the Gazette is notice to persons who had no dealings with the firm before her retirement', 'Yes, unless Hal Ltd checked a public register of partners before contracting', 'Yes, because she was a partner when the firm was originally formed'], answer: 1, explain: '退職後の債務。退職前に取引がなかった相手には、Gazette の公告で通知したことになる（s36(2)）。以前からの取引先にも実際に通知しているので、Chloe は責任を負わない。退職前の債務なら責任が残る（s17(2)）が、この債務は5月に生じた。' },
        { q: 'ABC Design made a profit of $129,000 for the year. Ana contributed capital of $60,000, Ben $30,000 and Chloe $10,000. There is no partnership agreement, and no partner has made any loan to the firm. What is Ana\'s share of the profit?', type: 'number', answer: 43000, unit: '$', explain: '契約がないので、出資額に関係なく利益は均等（s24(1)）。$129,000 ÷ 3 ＝ $43,000。出資の比率（60:30:10）で分けると $77,400 になるが、それは契約で決めたときだけ。' },
        { q: 'ABC Design converts into ABC Design LLP. Which of the following statements is correct?', choices: ['The partners are released from all debts of the old partnership, without any agreement with the creditors', 'The LLP must have at least one member with unlimited liability for its debts', 'The LLP is not required to file its accounts with the Registrar', 'Contracts made after the conversion are made by the LLP, and members are not generally liable for its debts beyond their capital'], answer: 3, explain: 'LLP は法人で、変えた後の契約の当事者は LLP。メンバーの責任は原則として出資額まで。変える前の債務への個人の責任は、債権者との合意（novation）がなければ残る。無限責任のメンバーは不要。決算書は登記官に提出する。' },
        { q: 'Ana is thinking of leaving the firm to work as a sole trader. Compared with operating through a company limited by shares, which of the following is a feature of operating as a sole trader?', choices: ['She will have a legal personality separate from her business', 'Her business will continue automatically after her death', 'There are no registration formalities, but she will have unlimited liability for the debts of the business', 'She will be able to raise finance by issuing shares to investors'], answer: 2, explain: '個人事業主は手続きなしで始められるが、事業の債務に上限なしで責任を負う。法人格、本人の死亡後も続くこと（perpetual succession）、株式の発行は、どれも会社の特徴。' }
      ]
    }
  ],
  cards: [
    { id: 'B046-1', lesson: 'B046', q: '一般パートナーシップの根拠法と、責任の特徴は？', a: 'Partnership Act 1890。登記不要、法人格なし、全員が無限責任' },
    { id: 'B046-2', lesson: 'B046', q: 'リミテッド・パートナーシップに最低限必要な人は？', a: '無限責任の general partner 1人以上と、limited partner 1人以上（LPA 1907）' },
    { id: 'B046-3', lesson: 'B046', q: 'limited partner が経営に参加するとどうなる？', a: 'その間に生じた事務所の債務について、無限責任を負う' },
    { id: 'B046-4', lesson: 'B046', q: 'LLP の根拠法と、法律上の性格は？', a: 'Limited Liability Partnerships Act 2000。登記で設立する法人（body corporate）' },
    { id: 'B046-5', lesson: 'B046', q: 'リミテッド・パートナーシップを登記しないと？', a: '一般パートナーシップとして扱われ、limited partner も無限責任になる' },
    { id: 'B046-6', lesson: 'B046', q: 'なぜ LLP が作られた？', a: '大きな専門家の事務所が、パートナーシップの柔軟さのまま有限責任を得るため' },
    { id: 'B047-1', lesson: 'B047', q: 'PA 1890 s1 のパートナーシップの定義は？', a: '利益を目的に、共同で事業を営む者の間の関係' },
    { id: 'B047-2', lesson: 'B047', q: '一般パートナーシップの成立に、登記や書面は必要？', a: 'いらない。口約束や行動だけでも成立する' },
    { id: 'B047-3', lesson: 'B047', q: '利益を分けていれば、必ずパートナー？', a: '有力な証拠だが、それだけでは決まらない（s2(3)）' },
    { id: 'B047-4', lesson: 'B047', q: '契約がないときの利益の分け方は？', a: '出資額に関係なく均等（s24(1)）。給与・出資の利息はなし' },
    { id: 'B047-5', lesson: 'B047', q: '出資を超えて事務所に貸したお金の利息は？（契約なし）', a: '年5%（s24(3)）' },
    { id: 'B047-6', lesson: 'B047', q: '契約がないとき、全員の同意が必要なことは？', a: '事業の種類の変更と、新しいパートナーの加入（s24(8)(7)）' },
    { id: 'B048-1', lesson: 'B048', q: 'PA 1890 s5 の内容は？', a: '各パートナーは事務所の代理人。ふつうの事業の範囲の行為は事務所を拘束する' },
    { id: 'B048-2', lesson: 'B048', q: 's5 で事務所が拘束されないのは？', a: '実際の権限がなく、相手がそれを知っているか、パートナーと知らないとき' },
    { id: 'B048-3', lesson: 'B048', q: 'Mercantile Credit v Garrod のポイントは？', a: '内部で禁じた車の売買も、ふつうの事業の範囲で相手が知らなければ事務所を拘束' },
    { id: 'B048-4', lesson: 'B048', q: '新しく加わったパートナーは、加入前の債務を負う？', a: '負わない（s17(1)）' },
    { id: 'B048-5', lesson: 'B048', q: '退職パートナーが退職後の債務を免れるには？', a: '以前からの取引先には実際の通知、新しい相手には Gazette の公告（s36）' },
    { id: 'B048-6', lesson: 'B048', q: 'holding out（s14）とは？', a: 'パートナーと名乗った（知っていて名乗らせた）人は、信じた相手にパートナーとして責任を負う' },
    { id: 'B049-1', lesson: 'B049', q: 'LLP の設立に必要なことは？', a: '2人以上が設立書類に署名し、登記官に届けて登録される' },
    { id: 'B049-2', lesson: 'B049', q: '指定メンバー（designated member）は何人必要？', a: '最低2人。指定しないとメンバー全員が指定メンバー' },
    { id: 'B049-3', lesson: 'B049', q: 'LLPA 2000 s6 の内容は？', a: 'メンバーはすべて LLP の代理人。契約の当事者は LLP' },
    { id: 'B049-4', lesson: 'B049', q: 'LLP のメンバーが出資額を超えて責任を負う例は？', a: '自分の過失、清算前2年以内の引出し（IA 1986 s214A）、不当取引など' },
    { id: 'B049-5', lesson: 'B049', q: 'limited partner と LLP メンバーの最大の違いは？', a: 'LLP のメンバーは経営に参加しても有限責任のまま' },
    { id: 'B049-6', lesson: 'B049', q: 'LLP が有限責任の代わりに受け入れる負担は？', a: '登記と、決算書の提出・公開' },
    { id: 'B050-1', lesson: 'B050', q: '個人事業主の法人格と責任は？', a: '法人格なし。事業の債務に本人が上限なしで責任を負う' },
    { id: 'B050-2', lesson: 'B050', q: '会社の株主の責任は？', a: '失うのは出資額まで（有限責任）。会社自身は債務を全額負う' },
    { id: 'B050-3', lesson: 'B050', q: 'perpetual succession とは？', a: '株主が変わっても死亡しても、会社が続くこと' },
    { id: 'B050-4', lesson: 'B050', q: '浮動担保（floating charge）を付けられるのは？', a: '会社と LLP。個人事業主と一般パートナーシップは不可' },
    { id: 'B050-5', lesson: 'B050', q: '会社にする代わりの負担は？', a: '登記、決算書の公開、資本維持など Companies Act の規制' },
    { id: 'B050-6', lesson: 'B050', q: '課税の違い（概略）は？', a: '個人事業主・パートナーは所得税。会社は法人税、株主は配当に課税' },
    { id: 'B051-1', lesson: 'B051', q: '代理人の役割を一言で言うと？', a: '本人のために第三者と契約し、本人と第三者を契約で結ぶ人' },
    { id: 'B051-2', lesson: 'B051', q: '追認（ratification）の条件は？', a: '契約時に本人が存在し能力あり、本人のためと示した、合理的な期間内に全体を追認' },
    { id: 'B051-3', lesson: 'B051', q: '権限も表見的な権限もない代理人の責任は？', a: '権限保証違反（breach of warranty of authority）で第三者に責任を負う' },
    { id: 'B051-4', lesson: 'B051', q: '一般パートナーシップを LLP に変えても残る責任は？', a: '変える前の債務への個人の責任（債権者との novation がなければ）' },
    { id: 'B051-5', lesson: 'B051', q: 'K3 の OT 問題を解く順番は？', a: '誰と誰の関係か → どの形か → 相手は何を知っていたか' }
  ]
});
