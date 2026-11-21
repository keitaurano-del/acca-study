(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 211,
  part: 4,
  partTitle: '代理とパートナーシップ',
  lessons: [
    {
      id: 'B042',
      no: 42,
      title: '代理とは：本人・代理人・第三者',
      goal: '代理（agency）の3者の関係と、代理人が結んだ契約の当事者がだれになるかを説明し、パートナーや取締役が代理人である意味を例で示せるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(a)'],
      slides: [
        {
          title: '友人に車を売ってもらう',
          paras: ['海外出張の間に、自分の中古車を売りたい。そこで友人に「$8,000 以上なら売っていい」と頼んだ。友人は買い手を見つけ、$8,000 で売る契約を結んだ。', 'この売買契約の売主はだれか。友人ではなく自分。友人は自分の代わりに話をまとめた橋渡し役で、代金を受け取る権利も、車を引き渡す義務も自分にある。', 'これが代理（agency）の基本の形。']
        },
        {
          title: '代理とは',
          paras: ['代理（agency）は、代理人（agent）が本人（principal）のために、第三者（third party）との法律関係、主に契約を作る関係。'],
          formula: '代理人が権限の範囲内で結んだ契約 → 当事者は本人と第三者。代理人は原則として契約から外れる（drops out）',
          after: '代理人は、契約にもとづく権利も責任も原則として持たない。代理人の報酬や義務は、本人と代理人の間の別の関係で決まる。'
        },
        {
          title: '3者の関係',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="本人・代理人・第三者の三角形。契約は本人と第三者の間に成立する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">代理の三角形</text><rect x="150" y="50" width="140" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="76" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">本人</text><text x="220" y="96" text-anchor="middle" font-size="12.5" fill="var(--quiet)">principal</text><rect x="20" y="180" width="140" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="206" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">代理人</text><text x="90" y="226" text-anchor="middle" font-size="12.5" fill="var(--quiet)">agent</text><rect x="280" y="180" width="140" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="206" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">第三者</text><text x="350" y="226" text-anchor="middle" font-size="12.5" fill="var(--quiet)">third party</text><line x1="170" y1="106" x2="110" y2="180" stroke="var(--edge)" stroke-width="1.25"/><text x="24" y="140" fill="var(--ink)">権限を与える</text><line x1="160" y1="208" x2="280" y2="208" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="200" text-anchor="middle" fill="var(--ink)">交渉・署名</text><line x1="270" y1="106" x2="330" y2="180" stroke="var(--accent)" stroke-width="2.5"/><text x="318" y="140" fill="var(--ink)">契約の当事者</text><text x="220" y="268" text-anchor="middle" fill="var(--ink)">契約は本人と第三者の間に成立する</text></svg>`,
          caption: '代理人は交渉して署名するが、契約の線は本人と第三者を直接つなぐ。代理人と本人の間にあるのは、権限を与える内部の関係。'
        },
        {
          title: 'なぜ代理が必要か',
          paras: ['一人で全部の契約を自分で結ぶのは無理。お店の仕入れ、営業、採用を、オーナー一人がすべてこなすことはできない。', 'もっと根本的な理由もある。会社は法律が作った人（法人）で、手も口もない。会社が契約するには、人間がだれか会社のために動くしかない。つまり会社は、代理人を通してしか取引できない。']
        },
        {
          title: '取締役は会社の代理人',
          paras: ['会社は株主とは別の人（separate legal person）。会社の取引は、取締役（directors）などの代理人が会社のために行う。契約の当事者は会社で、権限内で動いた取締役は原則として個人的な責任を負わない。', '取締役は会社の代理人で、株主一人ひとりの代理人ではない。'],
          note: { kind: 'tip', text: '日本では「代表取締役が会社を代表する」と覚えるが、イングランドのモデルでは、会社の権限はまず取締役会（board）全体にある。個々の取締役や MD（managing director）がどこまで会社を拘束できるかは、第7部で学ぶ。' }
        },
        {
          title: 'パートナーは事務所の代理人',
          paras: ['パートナーシップ法（Partnership Act 1890）s5 では、すべてのパートナーは、事業の目的のために、事務所（firm）とほかのパートナーの代理人になる。', 'パートナーがその種類の事業を通常の方法で行う行為（例: 会計事務所のパートナーが顧客と業務契約を結ぶ）は、事務所とほかのパートナーを拘束する。だから一人のパートナーの契約に、全員が責任を負うことがある。詳しくは次のユニットで学ぶ。']
        },
        {
          title: 'いろいろな代理人',
          table: { caption: '代理人の主な種類', head: ['種類', '役割'], rows: [['不動産仲介業者（estate agent）', '買い手を探して紹介する。ふつうは売買契約を結ぶ権限はない'], ['競売人（auctioneer）', '競売で売主のために物品を売る'], ['ブローカー（broker）', '物品を預からずに、売り手と買い手の取引をまとめる'], ['ファクター（factor）', '本人の物品を預かり、自分の名前で売ることもできる'], ['保証代理人（del credere agent）', '追加の手数料と引換えに、第三者の支払を本人に保証する'], ['従業員（employee）', '仕事の範囲で雇い主の代理人になる（店員、購買担当など）']] }
        },
        {
          title: 'だれが代理人になれるか',
          paras: ['契約は本人の契約なので、契約する能力（capacity）が必要なのは本人。代理人には、完全な契約能力がなくてもよい。例えば未成年でも代理人になれる。', '代理人は人間でも会社でもよい。会計事務所や不動産会社が、会社として代理人になることも多い。']
        },
        {
          title: '例題: だれがだれを訴える？',
          example: {
            problem: 'P は自分の車を売るため、A に「$8,000 以上なら売ってよい」と頼んだ。A は T と $8,000 で売る契約を結び、車を T に渡した。ところが T が代金を払わない。(1) T に代金を請求できるのはだれか。(2) A は T に対して責任を負うか。',
            steps: ['A は P から与えられた権限の範囲内（$8,000 以上）で契約した', '権限内の代理なので、売買契約の当事者は P と T', '(1) 代金を請求する権利は P にある。A は契約の当事者ではないので、原則として A が T を訴えるのではない', '(2) A は契約から外れるので、T に対して責任を負わない。A の報酬は P との合意で決まる'],
            answer: '(1) P が T に請求する。(2) 負わない（代理人は契約から外れる）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '代理人も契約の当事者になると思い込む。権限内で本人のためと示して結んだ契約なら、当事者は本人と第三者だけ。また、取締役を株主の代理人と考えるのも誤り（会社の代理人）。不動産仲介業者が当然に売買契約まで結べると考えるのも誤りで、ふつうは買い手を探す権限しかない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['代理人が権限内で結んだ契約の当事者は本人と第三者。代理人は原則として外れる', '取締役は会社の代理人。会社は代理人を通してしか取引できない', 'パートナーは事務所とほかのパートナーの代理人（PA 1890 s5）']
        },
        {
          title: '英単語',
          words: [
            ['agency', 'エイジェンシー', '代理（関係）'],
            ['principal', 'プリンシパル', '本人'],
            ['agent', 'エイジェント', '代理人'],
            ['third party', 'サード パーティ', '第三者'],
            ['bind the principal', 'バインド', '本人を拘束する（本人に契約の効果を及ぼす）'],
            ['the agent drops out', '', '代理人は契約から外れる'],
            ['del credere agent', 'デル クレデレ', '保証代理人（第三者の支払を保証）'],
            ['factor / broker', 'ファクター／ブローカー', '物品を預かる代理人／預からず仲介する代理人']
          ]
        }
      ],
      quiz: [
        { q: "An agent, acting within their authority, makes a contract with a third party on behalf of a principal. Between whom is the contract created?", choices: ["Between the agent and the third party only", "Between the principal and the third party", "Between the agent and the principal only", "Between the principal, the agent and the third party jointly"], answer: 1, explain: '権限内の代理なら、契約は本人と第三者の間に成立し、代理人は外れる（drops out）。代理人と第三者の契約と考えるのは、署名した人が当事者だという日常の感覚による誤り。本人と代理人の間にあるのは権限を与える内部の関係で、売買契約ではない。3者の共同契約でもない。' },
        { q: "Which of the following statements regarding partners is correct under the Partnership Act 1890?", choices: ["Only the senior partner is an agent of the firm", "A partner is an agent of the firm only if appointed as such in writing", "Every partner is an agent of the firm and of the other partners for the purpose of the business of the partnership", "Partners are employees of the firm and therefore cannot be its agents"], answer: 2, explain: 'PA 1890 s5。すべてのパートナーが、事業の目的のために事務所とほかのパートナーの代理人になる。書面での任命は要らない。シニア・パートナーだけ、という制限もない。パートナーは従業員ではなく事業の共同経営者。' },
        { q: "An agent who, in return for an additional commission, guarantees to the principal that the third parties introduced will pay for the goods is known as:", choices: ["A del credere agent", "A factor", "A broker", "An estate agent"], answer: 0, explain: '保証代理人（del credere agent）は、追加の手数料と引換えに第三者の支払を本人に保証する。ファクターは物品を預かって売る代理人、ブローカーは物品を預からずに仲介する代理人。不動産仲介業者はふつう買い手を探すだけ。' },
        { q: '会社の取締役についての説明で正しいものは？', choices: ['取締役は株主一人ひとりの代理人なので、契約の当事者は株主になる', '会社は株主とは別の人だが手足がないので、取締役などの代理人を通して契約する', '取締役は自分の名前で契約するので、会社はその契約と関係がない', '取締役は会社の従業員にすぎず、代理人になることはない'], answer: 1, explain: '会社は株主とは別の法人で、取締役などの代理人を通してしか取引できない。取締役は会社の代理人で、株主の代理人ではない。権限内の契約の当事者は会社で、取締役ではない。' },
        { q: '17歳の A は、会社 P の依頼で、P のために T と事務用品の購入契約を結んだ。A は権限の範囲内で動いた。この契約について正しいものは？', choices: ['A に完全な契約能力がないので、契約は必ず無効になる', 'A が成人するまで、契約は効力を持たない', '契約は本人 P の契約なので、P に契約能力があれば P と T を拘束しうる', 'A が個人で契約の責任を負い、P は関係がない'], answer: 2, explain: '契約能力が必要なのは本人。代理人には完全な能力がなくてもよい。契約は P と T の間に成立する。A の年齢を理由に無効になるわけではない。' }
      ]
    },
    {
      id: 'B043',
      no: 43,
      title: '代理関係はどうやって生まれるか',
      goal: '代理関係が生まれる4つの道（合意・追認・必要・禁反言）を区別し、追認と必要による代理の条件を事例に当てはめられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(b)'],
      slides: [
        {
          title: '「代わりにやって」はいろいろな形で生まれる',
          list: ['頼んで引き受けてもらう（合意）', '頼んでいないのに友人が限定チケットを買っておいてくれた。後で「ありがとう、それ私が買う」と認める（追認）', '旅行中、家の管理を任されていた隣人が、水道管の破裂に気づいた。連絡もつかないので業者を呼ぶ（必要）', '「この人が私の代わりです」と取引先に言っておいた（禁反言）'],
          after: '法律も、代理関係が生まれる道をこの4つに整理している。'
        },
        {
          title: '4つの道',
          table: { caption: '代理関係が生まれる方法', head: ['方法', '中身'], rows: [['合意（agreement）', '本人と代理人の合意。明示（express）でも黙示（implied）でもよい'], ['追認（ratification）', '権限なしで結ばれた契約を、本人が後から認める'], ['必要（necessity）', '緊急事態で、本人のために行動するしかない場合'], ['禁反言（estoppel）', '本人が「代理人だ」という外観を作り、第三者が信頼した']] },
          after: 'ふつうは合意で生まれる。ほかの3つは、合意がない、または権限を超えた場合の例外。'
        },
        {
          title: '合意による代理',
          paras: ['明示の合意（express agreement）: 口頭でも書面でもよい。例外として、代理人に証書（deed）への署名をさせる権限は、証書の形の委任状（power of attorney）で与える。', '黙示の合意（implied agreement）: 言葉にしなくても、本人と代理人のふるまいや関係から代理関係が認められる。例えば店長として雇えば、店の仕入れを任せたと考えられる。', 'どちらも、本人と代理人の双方が同意している点が共通。']
        },
        {
          title: '追認（ratification）とは',
          paras: ['代理人が権限なしに、または権限を超えて、本人のためと称して契約した。本人はその契約に縛られないのが原則。しかし本人が後から認めれば（追認）、最初から権限があったのと同じになる。', '追認は明示でも、ふるまい（届いた物品を使う、代金を払うなど）による黙示でもよい。本人の自由で、第三者の同意は要らない。追認できる条件は次のとおり。'],
          numbered: ['代理人が、本人のために行動していると示していた（本人の名前か、特定できる本人）', '契約の時に、本人が存在していた', '本人が、契約の時と追認の時の両方で、契約する能力を持っていた', '合理的な期間内に追認する。また契約の全部を追認する（都合のよい部分だけは不可）'],
          after: '本人は、重要な事実を知ったうえで追認する（知らなくても認める意思があれば別）。'
        },
        {
          title: '条件にかかわる判例',
          paras: ['Kelner v Baxter (1866): 発起人が、まだ設立されていない会社のためにワインを買う契約をした。設立後の会社は追認できなかった。契約の時に本人（会社）が存在していなかったから。発起人が個人で責任を負った。', 'Keighley, Maxsted & Co v Durant (1901): 代理人が権限を超えた価格で、自分の名前で小麦を買った。内心では本人のためのつもりだったが、本人のためと示していなかった。本人は追認できなかった。隠れた本人（undisclosed principal）は追認できない。'],
          note: { kind: 'tip', text: 'なぜ条件があるか: 本人が自分で望んで認めるなら、最初から権限があったと扱ってもだれも困らない。しかし本人が存在しない、能力がない、本人のためと示していない場合まで認めると、第三者は相手がだれか分からないまま契約したことになる。' }
        },
        {
          title: '追認はさかのぼって効く',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="追認は最初の契約の日にさかのぼって効く。間の撤回は効かない" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">追認はさかのぼって効く</text><line x1="40" y1="120" x2="400" y2="120" stroke="var(--edge)" stroke-width="1.5"/><circle cx="80" cy="120" r="6" fill="var(--ink)"/><circle cx="220" cy="120" r="6" fill="var(--ink)"/><circle cx="360" cy="120" r="6" fill="var(--ink)"/><text x="80" y="100" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">1日</text><text x="220" y="100" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">5日</text><text x="360" y="100" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">9日</text><text x="80" y="148" text-anchor="middle" fill="var(--ink)">代理人が</text><text x="80" y="168" text-anchor="middle" fill="var(--ink)">無断で承諾</text><text x="220" y="148" text-anchor="middle" fill="var(--ink)">第三者が</text><text x="220" y="168" text-anchor="middle" fill="var(--ink)">申込みを撤回</text><text x="360" y="148" text-anchor="middle" fill="var(--ink)">本人が</text><text x="360" y="168" text-anchor="middle" fill="var(--ink)">追認</text><path d="M360 186 Q220 250 80 186" fill="none" stroke="var(--accent)" stroke-width="2"/><polygon points="80,186 91,186 87,195" fill="var(--accent)"/><text x="220" y="256" text-anchor="middle" fill="var(--ink)">契約は1日から有効。5日の撤回は効かない</text><text x="220" y="282" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Bolton Partners v Lambert (1889)</text></svg>`,
          caption: 'Bolton Partners v Lambert (1889): 第三者の申込みを、権限のない取締役が会社のために承諾した。第三者は撤回したが、その後で会社が追認した。追認は承諾の日にさかのぼるので、撤回の前に契約は成立していたことになり、第三者は拘束された。'
        },
        {
          title: '必要による代理（agency of necessity）',
          paras: ['すでに本人の物品を預かっている人が、緊急事態で、本人のために行動する場合。次の条件がそろう必要がある。'],
          list: ['本当の緊急事態（genuine emergency）がある', '本人と連絡をとる実際的な方法がない', '本人の利益のために、誠実に（bona fide）行動した', '本人の物品をすでに預かっていた'],
          after: '裁判所はこの代理をせまく認める。本人の物を預かっていない通りすがりの人は、ふつう必要による代理人にならない。Great Northern Railway v Swaffield (1874): 鉄道会社が運んだ馬を受取人が引き取りに来ないので、馬小屋に預けた。代理人として費用を本人に請求できた。Springer v Great Western Railway (1921): 鉄道会社が遅れたトマトを売ったが、荷主に連絡できたのにしなかった。必要による代理にならず、責任を負った。'
        },
        {
          title: '禁反言による代理（agency by estoppel）',
          paras: ['本人が、言葉かふるまいで「この人は私の代理人だ」と第三者に示し（representation）、第三者がそれを信頼して取引した。', 'この場合、本人は後から「代理人ではなかった」と言うことを許されない（estopped）。本人と代理人の間に合意がなくても、第三者との関係では代理人として扱われる。これが次のレッスンの表見的な権限（apparent authority）につながる。', 'なぜ？ 外観を作ったのは本人で、第三者はその外観しか見られない。信じた第三者に損をさせるより、外観を作った本人に負担させる方が公平。必要による代理も同じく、緊急時に本人の財産を守った人を守るためにある。']
        },
        {
          title: '例題: どの道で代理関係が生まれた？',
          example: {
            problem: '(1) 会社 P の社長が、取引先 T に「今後の注文は Q がします」と書いたメールを送った。実際には P は Q に注文の権限を与えていなかったが、Q は T に注文した。(2) 運送業者 C が運ぶ魚が、事故で港に止まった。腐りかけており、荷主には何時間も連絡がつかない。C は魚を地元で売った。(3) A が無断で P のために T から機械を買った。翌週、P は機械を受け取り、使い始めた。',
            steps: ['(1) 本人 P の表示を T が信頼して取引した → 禁反言による代理。P は Q の注文に拘束されうる', '(2) 本当の緊急事態・連絡不能・物品を預かっていた・誠実な行動 → 必要による代理', '(3) A は本人 P のためと示して契約し、P は機械を使って認めた → ふるまいによる追認（黙示）。契約は最初から P の契約になる'],
            answer: '(1) 禁反言 (2) 必要 (3) 追認'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '追認に第三者の同意が要ると考える（要らない）。設立前の会社が後から追認できると考える（本人が存在しないのでできない。Kelner v Baxter）。隠れた本人も追認できると考える（できない。Keighley, Maxsted v Durant）。必要による代理を「急いでいれば成立する」と広く考える。本人に連絡できたなら成立しない（Springer）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['代理関係は合意（明示・黙示）・追認・必要・禁反言で生まれる', '追認の条件: 本人のためと示した、本人が存在した、両時点で能力あり、合理的な期間内に全部を。効果は契約の日にさかのぼる', '必要による代理: 本当の緊急事態・連絡不能・誠実・物品を預かっていた']
        },
        {
          title: '英単語',
          words: [
            ['express / implied agreement', '', '明示の合意／黙示の合意'],
            ['ratification', 'ラティフィケーション', '追認'],
            ['ratify', 'ラティファイ', '追認する'],
            ['relate back', 'リレイト バック', '（追認の効果が）さかのぼる'],
            ['agency of necessity', 'ネセシティ', '必要による代理'],
            ['agency by estoppel', 'エストッペル', '禁反言による代理'],
            ['undisclosed principal', 'アンディスクローズド', '隠れた本人（存在を示されていない本人）'],
            ['power of attorney', 'パワー オブ アトーニー', '委任状（証書による代理権の付与）']
          ]
        }
      ],
      quiz: [
        { q: "Which of the following is NOT a requirement for a principal to ratify a contract made by an agent who lacked authority?", choices: ["The principal must have been in existence when the contract was made", "The agent must have indicated that they were acting on behalf of the principal", "The third party must consent to the ratification", "The principal must have had capacity both when the contract was made and when it is ratified"], answer: 2, explain: '追認は本人が一方的にできる。第三者の同意は要らない。ほかの3つは条件: 本人の存在（Kelner v Baxter）、本人のためと示したこと（Keighley, Maxsted v Durant）、両時点での能力。' },
        { q: "Before X Ltd was incorporated, its promoters entered into a contract to buy equipment on its behalf. After incorporation, the board of X Ltd resolved to ratify the contract. Which of the following is correct under the common law of agency?", choices: ["X Ltd cannot ratify the contract because it did not exist when the contract was made", "X Ltd can ratify the contract because the board has passed a resolution", "X Ltd can ratify the contract provided it does so within a reasonable time", "X Ltd can ratify the contract with the consent of the seller"], answer: 0, explain: 'Kelner v Baxter (1866)。契約の時に本人が存在していなければ追認できない。取締役会の決議があっても、合理的な期間内でも、売主が同意しても、この条件は満たせない。会社が契約に入るには、設立後に新しく契約を結ぶ。' },
        { q: "On 1 March, T offered to buy land from P Co. On 3 March, A, a director of P Co with no authority to do so, accepted the offer on P Co's behalf. On 6 March, T withdrew the offer. On 10 March, P Co ratified A's acceptance. Which of the following is correct?", choices: ["There is no contract, because T withdrew before P Co ratified", "There is a contract only from 10 March, so T's withdrawal was effective", "There is no contract, because a director can never accept an offer on behalf of a company", "There is a binding contract, because ratification relates back to 3 March"], answer: 3, explain: 'Bolton Partners v Lambert (1889)。追認は代理人が契約した日（3月3日）にさかのぼる。6日の撤回の時点ではすでに契約が成立していたので、撤回は効かない。「追認の日から有効」と考えるのがよくある誤り。' },
        { q: '運送会社がトマトを運んでいたが、ストライキで駅に足止めされた。トマトは傷みかけていた。会社は荷主に電報で連絡できたのに、連絡せずにトマトを地元で売った。会社は必要による代理人として扱われる？', choices: ['扱われる。トマトが傷みかけていたので緊急事態に当たる', '扱われない。本人と連絡をとる実際的な方法があったのに、しなかった', '扱われる。運送会社は荷主の物品を預かっていた', '扱われない。必要による代理は人の命にかかわる場合にしか認められない'], answer: 1, explain: 'Springer v Great Western Railway (1921)。必要による代理には、本人と連絡がとれないことが必要。緊急事態や物品の預かりがあっても、連絡できたのにしなければ成立しない。命にかかわる場合に限る、というルールはない（Swaffield は馬の預け先の事例）。' },
        { q: '会社 P は取引先 T に「今後の発注は Q が当社を代表して行います」と書面で伝えた。実際には P は Q に契約の権限を与えていなかったが、T はそれを知らずに Q と契約した。P が「Q は代理人ではない」と主張できない根拠は？', choices: ['必要による代理', '黙示の合意による代理', '追認', '禁反言による代理'], answer: 3, explain: '本人 P が「Q は代理人だ」という表示をし、T がそれを信頼して取引したので、P は後から否定できない（estoppel）。緊急事態ではないので必要による代理ではない。P と Q の間に合意はないので、黙示の合意でもない。P は認めていないので追認でもない。' },
        { q: '代理人 A は権限を超えて、本人 P のためと示して T から材料を買った。P は届いた材料を工場で使い始めた。正しいものは？', choices: ['P は材料を使ったことで追認したと扱われうる。契約は最初から P の契約になる', '追認は書面でしかできないので、P は契約に縛られない', 'P が使ったのは材料だけで、契約は A と T の間に残る', 'P が追認するには T の同意が必要'], answer: 0, explain: '追認は明示でも、ふるまいによる黙示でもよい。物品を受け取って使えば、追認と扱われうる。効果は契約の日にさかのぼる。書面の要件や第三者の同意は要らない。' }
      ]
    },
    {
      id: 'B044',
      no: 44,
      title: '代理人の権限：実際の権限と表見的な権限',
      goal: '実際の権限（明示・黙示）と表見的な権限の違いと成立の条件を説明し、本人が第三者に拘束されるかどうかを判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(c)'],
      slides: [
        {
          title: '「店長」の名札',
          paras: ['チェーン店のオーナーが店長に「$1,000 を超える仕入れは私の許可を取って」と内部で指示していた。ところが店長は、許可なしに業者と $1,500 の仕入れ契約を結んだ。', '業者から見ると、相手は「店長」の名札をつけ、オーナーが店を任せている人。$1,500 くらいの仕入れは店長なら当然できそうに見える。', 'オーナーはこの契約に縛られるか。ここで「実際の権限」と「見かけの権限」を分けて考える。']
        },
        {
          title: '権限は2種類',
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="権限は実際の権限（明示・黙示）と表見的な権限に分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">代理人の権限の種類</text><rect x="135" y="48" width="170" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="74" text-anchor="middle" font-size="15" fill="var(--ink)">権限（authority）</text><line x1="220" y1="88" x2="220" y2="104" stroke="var(--edge)" stroke-width="1.25"/><line x1="115" y1="104" x2="325" y2="104" stroke="var(--edge)" stroke-width="1.25"/><line x1="115" y1="104" x2="115" y2="120" stroke="var(--edge)" stroke-width="1.25"/><line x1="325" y1="104" x2="325" y2="120" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="120" width="190" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="144" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">実際の権限</text><text x="115" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">actual authority</text><rect x="230" y="120" width="190" height="54" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="144" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">表見的な権限</text><text x="325" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">apparent / ostensible</text><line x1="115" y1="174" x2="115" y2="190" stroke="var(--edge)" stroke-width="1.25"/><line x1="65" y1="190" x2="165" y2="190" stroke="var(--edge)" stroke-width="1.25"/><line x1="65" y1="190" x2="65" y2="204" stroke="var(--edge)" stroke-width="1.25"/><line x1="165" y1="190" x2="165" y2="204" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="204" width="90" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="65" y="228" text-anchor="middle" font-size="15" fill="var(--ink)">明示</text><text x="65" y="248" text-anchor="middle" font-size="12.5" fill="var(--quiet)">express</text><rect x="120" y="204" width="90" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="165" y="228" text-anchor="middle" font-size="15" fill="var(--ink)">黙示</text><text x="165" y="248" text-anchor="middle" font-size="12.5" fill="var(--quiet)">implied</text><line x1="325" y1="174" x2="325" y2="204" stroke="var(--edge)" stroke-width="1.25"/><rect x="230" y="204" width="190" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="226" text-anchor="middle" fill="var(--ink)">本人の表示を</text><text x="325" y="246" text-anchor="middle" fill="var(--ink)">第三者が信頼</text><text x="20" y="288" fill="var(--ink)">左：本人と代理人の間の合意で決まる</text><text x="20" y="310" fill="var(--ink)">右：本人が第三者に見せた外観で決まる</text></svg>`,
          caption: 'どちらの権限で結んだ契約でも、本人は第三者に拘束される。違いは、代理人が本人に対して責任を負うかどうか（次のレッスン）。'
        },
        {
          title: '実際の権限①：明示の権限',
          paras: ['明示の権限（express authority）は、本人が代理人に言葉や書面ではっきり与えた権限。「この車を $8,000 以上で売ってよい」「月 $5,000 まで備品を買ってよい」など。', '明示の権限の外の行為は、次の黙示の権限か、表見的な権限がなければ本人を拘束しない。']
        },
        {
          title: '実際の権限②：黙示の権限',
          paras: ['黙示の権限（implied authority）は、言葉にしなくても代理人が持つと認められる権限。次の3つから生まれる。'],
          list: ['付随する権限（incidental）: 明示の権限を果たすのに必要なこと。家を売る権限があれば、売買の書類に署名するなど', '通常の・慣習上の権限（usual / customary）: その地位や業界の代理人がふつう持つ権限。店長なら日常の仕入れ。Watteau v Fenwick (1893) では、葉巻の掛け買いを禁じられていた酒場の支配人が葉巻を買い、支配人がふつう持つ権限の範囲内として、オーナーが拘束された', '本人と代理人のふるまい（conduct）: 本人が代理人の行動を黙って認め続けた'],
          after: 'Hely-Hutchinson v Brayhead Ltd (1968): 会長が取締役会の黙認のもとで、事実上の MD としてふるまい、保証の契約に署名した。会長には黙示の実際の権限があり、会社は拘束された。'
        },
        {
          title: '表見的な権限（apparent / ostensible authority）',
          paras: ['代理人に実際の権限がなくても、本人が「この人には権限がある」という外観を作り、第三者がそれを信頼したなら、本人は拘束される。前のレッスンの禁反言による代理と同じ考え方。'],
          list: ['本人による表示（representation）がある。言葉でも、代理人をその地位につけて行動させることでもよい', '第三者がその表示を信頼して契約した', '第三者は、権限がない・制限があることを知らなかった'],
          after: '表示は本人から出たものでなければならない。代理人が自分で「権限がある」と言っただけでは足りない（Armagas v Mundogas, 1986）。'
        },
        {
          title: '判例: Freeman & Lockyer v Buckhurst Park Properties (1964)',
          paras: ['会社の取締役 K は、MD に任命されていなかったが、取締役会はそれを知りながら、K に MD のようにふるまわせていた。K は会社のために建築家と契約した。', '会社は「K に権限はない」と支払を拒んだが、裁判所は会社を拘束した。取締役会が K を MD として行動させたこと自体が、MD の権限があるという会社の表示になり、建築家はそれを信頼したから。'],
          note: { kind: 'tip', text: 'Hely-Hutchinson は「黙示の実際の権限」、Freeman & Lockyer は「表見的な権限」の代表例。どちらも本人（取締役会）の黙認がカギ。' }
        },
        {
          title: '会社の秘書の権限',
          paras: ['Panorama Developments v Fidelis Furnishing Fabrics (1971): 会社の秘書（company secretary）が、会社の客を送迎すると偽って車を借り、私的に使った。', '秘書は会社の事務の責任者で、車の手配のような事務的な契約を結ぶ権限があるように見える。会社は拘束され、レンタカー代を払う責任を負った。地位からふつう予想される範囲の権限が、第三者との関係で認められた例。']
        },
        {
          title: '権限を制限・終了したとき',
          paras: ['本人が代理人の権限を内部で制限しても、それを知らない第三者との関係では、表見的な権限が残りうる。', '代理人を解任しても同じ。それまで取引していた相手に解任を知らせなければ、相手から見ると権限はまだあるように見える。だから本人は、取引先に終了を通知しておく必要がある。'],
          note: { kind: 'tip', text: 'なぜ？ 第三者は本人と代理人の内部の約束を見られない。見えるのは本人が作った外観（地位、肩書、それまでの取引）だけ。本人は代理人の選び方・監督・取引先への通知でこの危険を防げるので、本人に負担させる方が公平。' }
        },
        {
          title: '例題: オーナーは拘束されるか',
          example: {
            problem: 'オーナー P は店長 A に「$1,000 を超える仕入れは許可を取ること」と内部で指示していた。A は許可なしに業者 T と $1,500 の仕入れ契約を結んだ。(1) T が制限を知らなかった場合。(2) T が以前 P から制限を聞いていた場合。(3) A が「自分には $5,000 まで権限がある」と T に言っただけで、P は A を店長にしていなかった場合。',
            steps: ['(1) 明示の制限を超えたので、実際の権限はない', '(1) P が A を店長にした → 店長がふつう持つ権限があるという P の表示。T は信頼し、制限を知らなかった → 表見的な権限で P は拘束される', '(2) T は制限を知っていた → 表見的な権限は成立しない → P は拘束されない（P が追認すれば別）', '(3) 表示は A 自身から出ただけで、P の表示がない → 表見的な権限は成立しない'],
            answer: '(1) 拘束される (2) 拘束されない (3) 拘束されない'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '表見的な権限の「表示」を、代理人が自分で言ったことで足りると考える（本人の表示が必要）。権限の制限を知っていた第三者も守られると考える（守られない）。内部で権限を制限すれば、第三者に対しても当然に効くと考える（知らない第三者には効かないことがある）。黙示の権限と表見的な権限を混同する。黙示は本人と代理人の間の本当の権限、表見的は外観。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['実際の権限 ＝ 明示（言われたこと）＋黙示（付随・通常の権限・ふるまい）', '表見的な権限: 本人の表示 → 第三者の信頼 → 制限を知らない。この3つで本人が拘束される', '内部の制限や解任は、知らない第三者には効かないことがある。取引先に通知する']
        },
        {
          title: '英単語',
          words: [
            ['actual authority', 'アクチュアル オーソリティ', '実際の権限'],
            ['express authority', 'エクスプレス', '明示の権限'],
            ['implied authority', 'インプライド', '黙示の権限'],
            ['usual / customary authority', 'ユージュアル／カスタマリー', '通常の権限／慣習上の権限'],
            ['apparent (ostensible) authority', 'アパレント（オステンシブル）', '表見的な権限'],
            ['representation', 'レプリゼンテーション', '（本人による）表示'],
            ['reliance', 'リライアンス', '（第三者の）信頼'],
            ['hold out', 'ホールド アウト', '（ある地位にあるように）見せる']
          ]
        }
      ],
      quiz: [
        { q: "K, a director of B Ltd, was never appointed managing director, but with the knowledge of the board he acted as if he were the managing director. K engaged a firm of architects on behalf of B Ltd. Which of the following best describes the basis on which B Ltd is bound by the contract?", choices: ["K had express actual authority", "K had apparent (ostensible) authority", "The contract was made under agency of necessity", "B Ltd is not bound because K was never appointed managing director"], answer: 1, explain: 'Freeman & Lockyer v Buckhurst Park Properties (1964)。取締役会が K を MD のようにふるまわせたことが会社の表示になり、建築家はそれを信頼した。明示の任命はないので明示の権限ではない。緊急事態でもない。任命がないから拘束されない、というのは外観を作った本人の責任を見落とした答え。' },
        { q: "Which of the following is NOT required for a principal to be bound on the basis of apparent authority?", choices: ["A representation by the principal that the agent has authority", "Reliance on that representation by the third party", "The third party not knowing that the agent lacked authority", "Actual authority given by the principal to the agent for that transaction"], answer: 3, explain: '表見的な権限は、実際の権限がないときに使う考え方。実際の権限は要らない。必要なのは、本人の表示、第三者の信頼、第三者が権限のないことを知らないこと。' },
        { q: "An agent is expressly authorised to sell a house. The agent signs the documents needed to complete the sale. The authority to sign these documents is best described as:", choices: ["Apparent authority", "Incidental implied authority", "Authority by ratification", "Agency of necessity"], answer: 1, explain: '明示の権限（家を売る）を果たすのに必要なことをする権限は、付随する黙示の権限（incidental）。本人と代理人の間の本当の権限なので、外観による表見的な権限ではない。後からの追認も、緊急事態も関係ない。' },
        { q: '会社の秘書が、会社の客を送迎すると偽って車を借り、私的に使った。レンタカー会社は事情を知らなかった。会社は代金を払う責任を負う？', choices: ['負わない。秘書は会社のためでなく自分のために車を使った', '負う。会社の秘書には、車の手配のような事務的な契約を結ぶ権限があるように見える', '負わない。会社を拘束できるのは取締役会だけ', '負う。ただし秘書が先に私的に使ったと認めた場合に限る'], answer: 1, explain: 'Panorama Developments v Fidelis Furnishing Fabrics (1971)。事務の責任者である秘書は、事務的な契約について権限があるように見え、会社は拘束された。秘書の内心の目的は、知らないレンタカー会社には関係がない。取締役会しか会社を拘束できない、というのも誤り。' },
        { q: '会社 P は営業担当 A を解任したが、A と長く取引してきた T には知らせなかった。解任後、A は P のためと称して T から商品を注文した。T は解任を知らない。正しいものは？', choices: ['A の実際の権限は終わったので、P は必ず拘束されない', '代理関係の終了は、知らせなくても全員に効く', 'P が通知しなかったので、A の表見的な権限が残り、P が拘束されうる', 'T は A 個人とだけ契約したことになり、P には関係がない'], answer: 2, explain: '実際の権限は解任で終わるが、P が作った外観（それまでの取引）を信じた T との関係では、表見的な権限が残りうる。だから本人は取引先に終了を通知する。終了が知らない第三者にも当然に効く、というのは誤り。' },
        { q: '取締役会は、会長が何年も事実上の MD としてふるまうのを黙認していた。会長は会社のために保証の契約に署名した。Hely-Hutchinson v Brayhead (1968) で、会社が拘束された根拠は？', choices: ['黙示の実際の権限', '必要による代理', '権限保証違反', '追認'], answer: 0, explain: '取締役会の黙認というふるまいから、会長には本人と代理人の間の本当の権限（黙示の実際の権限）があったと判断された。Freeman & Lockyer（表見的な権限）と並べて覚える。権限保証違反は、権限がないときの代理人の責任の話。' }
      ]
    },
    {
      id: 'B045',
      no: 45,
      title: '本人と代理人の責任',
      goal: '本人が責任を負う場合と代理人が個人で責任を負う場合（権限保証違反・隠れた本人・個人の契約）を区別し、代理人が本人に負う義務を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(c)'],
      slides: [
        {
          title: '頼まれていない物を買ってきた',
          paras: ['友人に「$100 までのワインを買ってきて」と頼んだら、$400 のワインを「あなたの注文です」と言って店の付けで買ってきた。', '店はだれに代金を請求できるか。頼んだ自分か、買ってきた友人か。友人に本当に権限があったか、店から見て権限があるように見えたか、自分が後で認めたか。答えはこの順番で決まる。']
        },
        {
          title: '原則と判断の流れ',
          formula: '権限内（実際・表見的）→ 本人と第三者が契約の当事者。代理人は原則として責任を負わない',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="権限と追認の有無で、第三者が本人と代理人のどちらに請求できるかを決める流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">第三者はだれに請求できるか</text><rect x="20" y="48" width="230" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="75" text-anchor="middle" font-size="15" fill="var(--ink)">実際の権限があった？</text><rect x="290" y="48" width="130" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="75" text-anchor="middle" font-size="15" fill="var(--ink)">本人が責任</text><line x1="250" y1="70" x2="282" y2="70" stroke="var(--ink)" stroke-width="1.5"/><polygon points="290,70 280,65 280,75" fill="var(--ink)"/><text x="268" y="62" text-anchor="middle" fill="var(--ink)">はい</text><line x1="135" y1="92" x2="135" y2="120" stroke="var(--ink)" stroke-width="1.5"/><polygon points="135,128 130,118 140,118" fill="var(--ink)"/><text x="145" y="114" fill="var(--ink)">いいえ</text><rect x="20" y="128" width="230" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="155" text-anchor="middle" font-size="15" fill="var(--ink)">表見的な権限があった？</text><rect x="290" y="128" width="130" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="155" text-anchor="middle" font-size="15" fill="var(--ink)">本人が責任</text><line x1="250" y1="150" x2="282" y2="150" stroke="var(--ink)" stroke-width="1.5"/><polygon points="290,150 280,145 280,155" fill="var(--ink)"/><text x="268" y="142" text-anchor="middle" fill="var(--ink)">はい</text><line x1="135" y1="172" x2="135" y2="200" stroke="var(--ink)" stroke-width="1.5"/><polygon points="135,208 130,198 140,198" fill="var(--ink)"/><text x="145" y="194" fill="var(--ink)">いいえ</text><rect x="20" y="208" width="230" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="235" text-anchor="middle" font-size="15" fill="var(--ink)">本人が追認した？</text><rect x="290" y="208" width="130" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="235" text-anchor="middle" font-size="15" fill="var(--ink)">本人が責任</text><line x1="250" y1="230" x2="282" y2="230" stroke="var(--ink)" stroke-width="1.5"/><polygon points="290,230 280,225 280,235" fill="var(--ink)"/><text x="268" y="222" text-anchor="middle" fill="var(--ink)">はい</text><line x1="135" y1="252" x2="135" y2="280" stroke="var(--ink)" stroke-width="1.5"/><polygon points="135,288 130,278 140,278" fill="var(--ink)"/><text x="145" y="274" fill="var(--ink)">いいえ</text><rect x="20" y="288" width="400" height="40" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="313" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">代理人が責任（権限保証違反）</text></svg>`,
          caption: '3つの問いのどれかに「はい」なら本人が契約に拘束される。全部「いいえ」なら本人は拘束されず、第三者は代理人に請求する。なお、表見的な権限だけで契約した代理人は本人の指示を破っている。本人は第三者に払ったうえで、代理人に損害の賠償を求められる。'
        },
        {
          title: '権限保証違反（breach of warranty of authority）',
          paras: ['本人のためと称して契約する代理人は、「自分には権限がある」と第三者に暗に保証している。権限がなく、本人も追認しないなら、代理人はこの保証の違反で第三者に損害を賠償する。', '代理人が正直に権限があると信じていても責任を負う。Collen v Wright (1857): 代理人は本人の土地を貸す権限があると誠実に信じて契約したが、権限はなかった。代理人が責任を負った。', 'Yonge v Toynbee (1910): 依頼人が精神の障害で能力を失い、弁護士の権限は終わっていた。弁護士はそれを知らずに訴訟を続け、責任を負った。'],
          note: { kind: 'tip', text: 'なぜ過失を問わない？ 第三者は代理人の言葉を信じるしかなく、権限を確かめられるのは代理人の方だから。' }
        },
        {
          title: '本人を示したか、示さなかったか',
          table: { caption: '本人の開示と責任', head: ['場合', '第三者が知っていること', '責任'], rows: [['開示された本人（名前あり）', '本人の存在と名前', '本人'], ['開示された本人（名前なし）', '本人がいること（名前は知らない）', '本人'], ['隠れた本人（undisclosed）', '何も知らない。代理人が当事者だと思っている', '代理人。本人が分かれば本人も（選択）']] }
        },
        {
          title: '隠れた本人（undisclosed principal）のルール',
          list: ['代理人に実際の権限があることが前提。第三者は本人を知らないので、表見的な権限は生まれない', '第三者は、代理人と契約したと思っているので、代理人に請求できる', '本人がだれか分かったら、第三者は本人か代理人のどちらかを選んで請求できる。どちらかをはっきり選んだら、もう一方には請求できない', '本人も契約に介入して権利を行使できる。ただし契約が介入を禁じている場合や、第三者が代理人個人と契約することに意味があった場合は別'],
          note: { kind: 'tip', text: '日本の民法では、代理人が本人のためと示さないと、原則として代理人自身の契約になる（顕名。民法100条。商取引には商法の例外がある）。イングランド法では、隠れた本人も後から契約の当事者として出てこられる。ここは日本の感覚と違う。' }
        },
        {
          title: '代理人が個人で責任を負うその他の場合',
          list: ['代理人が自分も当事者になることに同意した、または自分の名前で署名し、本人のためと示さなかった', '存在しない本人のために契約した（Kelner v Baxter: 設立前の会社のための契約で、発起人が個人で責任）', '業界の慣習で、代理人が個人で責任を負うことになっている'],
          after: 'これらの場合も、本人が別に責任を負うことはありうる。第三者の請求先が増えるだけで、本人が免れるとは限らない。'
        },
        {
          title: '代理人が本人に負う義務',
          numbered: ['指示に従う（obedience）。Turpin v Bilton (1843): 船に保険をかけるよう指示された代理人がかけず、船が沈んだ。代理人が損害を賠償した', '合理的な注意と技能（reasonable care and skill）を尽くす', '自分で行う。許可なく他人に任せない（personal performance）', '利益相反を避ける。Armstrong v Jackson (1917): 株の購入を頼まれたブローカーが自分の株を売りつけた。本人は取引を取り消せた', '秘密の利益やわいろを受け取らない。Boston Deep Sea Fishing v Ansell (1888): MD が秘密の手数料を受け取り、解任され、返還を命じられた', '本人のお金と記録を区別して管理し、報告する（account）']
        },
        {
          title: '代理人の権利',
          list: ['報酬（remuneration）: 明示か黙示の合意がある場合', '費用の補償（indemnity）: 権限内で正当に払った費用を本人から返してもらう', '留置権（lien）: 支払を受けるまで、本人の物品を手元に留めておける'],
          after: 'なぜ代理人の義務は厳しい？ 本人は代理人を信頼して自分の財産や取引を任せている（信認関係、fiduciary relationship）。代理人が自分の利益を優先すると、本人は気づくことすら難しいから。'
        },
        {
          title: '例題: だれが責任を負う？',
          example: {
            problem: '(1) A は P のためと示して、権限がないのに T と契約した。P は追認を拒んだ。A は権限があると本当に信じていた。(2) B は P から実際の権限を得て、P の名前を出さずに自分の名前で T から物品を買った。T は後で P の存在を知った。(3) C は P の店長として、内部の上限を超える仕入れをした。T は上限を知らなかった。',
            steps: ['(1) 実際の権限なし・表見的な権限の事情なし・追認なし → P は拘束されない。A は権限保証違反で T に責任。誠実でも免れない（Collen v Wright）', '(2) 隠れた本人。B は実際の権限あり → T は B か P のどちらかを選んで請求できる', '(3) 表見的な権限 → P は T に拘束される。C は指示違反で P に損害を賠償する責任を負う'],
            answer: '(1) A (2) B か P（T が選ぶ） (3) T に対しては P。C は P に対して責任'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '代理人が誠実なら権限保証違反の責任を免れると考える（免れない）。隠れた本人の場合、第三者が本人と代理人の両方に重ねて請求できると考える（選択する）。表見的な権限で本人が拘束されたら、代理人は何の責任もないと考える（本人に対して責任を負う）。保証代理人でない代理人も第三者の支払を保証する、と考えるのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['権限内（実際・表見的）なら本人が責任。権限なし・追認なしなら代理人が権限保証違反（誠実でも）', '隠れた本人: 第三者は代理人に請求でき、本人が分かればどちらかを選ぶ', '代理人の義務: 指示に従う・注意と技能・自分で行う・利益相反と秘密の利益の禁止・報告']
        },
        {
          title: '英単語',
          words: [
            ['breach of warranty of authority', 'ウォランティ オブ オーソリティ', '権限保証違反'],
            ['disclosed / undisclosed principal', 'ディスクローズド', '開示された本人／隠れた本人'],
            ['election', 'イレクション', '（第三者による請求先の）選択'],
            ['fiduciary duty', 'フィデューシャリー', '信認義務（忠実に行動する義務）'],
            ['secret profit / bribe', 'シークレット プロフィット／ブライブ', '秘密の利益／わいろ'],
            ['conflict of interest', 'コンフリクト オブ インタレスト', '利益相反'],
            ['remuneration / indemnity', 'リミュネレーション／インデムニティ', '報酬／費用の補償'],
            ['lien', 'リーン', '留置権']
          ]
        }
      ],
      quiz: [
        { q: "A, honestly but wrongly believing that he had authority to do so, entered into a contract with T on behalf of P. P refuses to ratify the contract. Which of the following is correct?", choices: ["Neither P nor A is liable to T, because A acted honestly", "P is liable to T, because A believed he had authority", "A is liable to T for breach of warranty of authority, even though A acted honestly", "A is liable to T only if A acted fraudulently"], answer: 2, explain: 'Collen v Wright (1857)。代理人は権限があると暗に保証しており、権限がなく追認もなければ、誠実でも第三者に責任を負う。P は実際の権限も表見的な権限も与えておらず追認もしないので拘束されない。詐欺の場合に限る、というのは過失を問わない責任であることを見落とした答え。' },
        { q: "B, acting within his actual authority, bought goods from T in his own name without disclosing that he was acting for P. T has now discovered that P was the principal. Which of the following is correct?", choices: ["T may sue only B, because T contracted with B", "T may sue only P, because P is the real party to the contract", "T may sue both B and P and recover the full price from each", "T may elect to sue either B or P, but once T has clearly elected, T cannot then sue the other"], answer: 3, explain: '隠れた本人の場合、第三者は本人が分かれば、代理人か本人のどちらかを選んで請求できる。はっきり選んだら、もう一方には請求できない。両方から全額を取り立てることはできない。B だけ、P だけ、という答えはどちらも選択のルールを見落としている。' },
        { q: "Which of the following is NOT a duty owed by an ordinary agent to the principal?", choices: ["To guarantee that third parties introduced will pay for the goods", "To obey the principal's lawful instructions", "Not to make a secret profit from the agency", "To exercise reasonable care and skill"], answer: 0, explain: '第三者の支払を保証するのは、追加の手数料を受け取る保証代理人（del credere agent）だけ。ふつうの代理人の義務ではない。指示に従う、秘密の利益の禁止、合理的な注意と技能は、どれも代理人の義務。' },
        { q: '店長 C は、内部の上限 $1,000 を超えて、$1,500 の仕入れ契約を業者 T と結んだ。T は上限を知らなかった。正しいものは？', choices: ['C に実際の権限がないので、店のオーナーは T に責任を負わない', 'オーナーは表見的な権限で T に拘束される。C は指示違反でオーナーに損害を賠償する責任を負う', 'オーナーは T に拘束され、C はオーナーに対して何の責任も負わない', 'T は C 個人にしか請求できない'], answer: 1, explain: '第三者との関係では、表見的な権限で本人が拘束される。ただし本人と代理人の間では、C は実際の権限を超えたので、指示に従う義務の違反になる。「本人が拘束されたら代理人は無責任」はよくある誤り。' },
        { q: '会社の購買担当 A は、仕入先から「うちを選んでくれたら $2,000 渡す」と言われ、会社に黙って受け取った。会社ができることは？', choices: ['何もできない。会社は損をしていない', '受け取った $2,000 の返還を求め、A を解任できる', 'A に注意することだけができ、お金は A のものになる', '仕入先との契約を当然に無効にするしかない'], answer: 1, explain: 'Boston Deep Sea Fishing v Ansell (1888)。秘密の利益やわいろを受け取ることは、代理人の信認義務の違反。本人は返還を求め、代理人を解任できる。本人に目に見える損がなくても違反になる。' },
        { q: '日本の民法とイングランド法の代理の違いとして正しいものは？', choices: ['イングランド法では、本人のためと示さない代理は必ず代理人自身の契約になり、本人は出てこられない', 'イングランド法には、表見的な権限の考え方がない', '日本の民法には、権限のない代理人が責任を負う制度がない', 'イングランド法では、隠れた本人（undisclosed principal）も、後から契約の当事者として権利を行使できることがある'], answer: 3, explain: 'イングランド法では、代理人に実際の権限があれば、隠れた本人も契約に介入できる（介入が禁じられている場合などを除く）。日本の民法は顕名を原則とする（100条）点が違う。表見的な権限（apparent authority）はイングランド法の重要な考え方。日本の民法にも無権代理人の責任（117条）がある。' }
      ]
    }
  ],
  cards: [
    { id: 'B042-1', lesson: 'B042', q: '代理人が権限内で結んだ契約の当事者は？', a: '本人と第三者。代理人は原則として契約から外れる' },
    { id: 'B042-2', lesson: 'B042', q: '会社が代理人を必要とする根本的な理由は？', a: '会社は株主と別の法人で手足がなく、代理人を通してしか取引できないから' },
    { id: 'B042-3', lesson: 'B042', q: 'PA 1890 s5 でパートナーはだれの代理人？', a: '事業の目的のために、事務所（firm）とほかのパートナーの代理人' },
    { id: 'B042-4', lesson: 'B042', q: '取締役はだれの代理人？', a: '会社の代理人（株主の代理人ではない）' },
    { id: 'B042-5', lesson: 'B042', q: 'del credere agent とは？', a: '追加の手数料と引換えに、第三者の支払を本人に保証する代理人' },
    { id: 'B042-6', lesson: 'B042', q: '契約能力が必要なのは本人と代理人のどちら？', a: '本人。代理人は完全な能力がなくてもよい（未成年も可）' },
    { id: 'B043-1', lesson: 'B043', q: '代理関係が生まれる4つの道は？', a: '合意（明示・黙示）、追認、必要、禁反言' },
    { id: 'B043-2', lesson: 'B043', q: '追認の4つの条件は？', a: '本人のためと示した、本人が存在した、両時点で能力あり、合理的な期間内に全部を' },
    { id: 'B043-3', lesson: 'B043', q: '設立前の会社のための契約を、設立後に追認できる？', a: 'できない。契約時に本人が存在しない（Kelner v Baxter）' },
    { id: 'B043-4', lesson: 'B043', q: '追認の効果はいつから？（Bolton Partners v Lambert）', a: '代理人が契約した日にさかのぼる。その間の第三者の撤回は効かない' },
    { id: 'B043-5', lesson: 'B043', q: '必要による代理の4つの条件は？', a: '本当の緊急事態、本人と連絡不能、誠実な行動、物品を預かっていた' },
    { id: 'B043-6', lesson: 'B043', q: '隠れた本人は追認できる？', a: 'できない（Keighley, Maxsted v Durant）' },
    { id: 'B044-1', lesson: 'B044', q: '実際の権限の2種類は？', a: '明示の権限と黙示の権限（付随・通常の権限・ふるまい）' },
    { id: 'B044-2', lesson: 'B044', q: '表見的な権限の3つの要件は？', a: '本人の表示、第三者の信頼、第三者が権限の欠如を知らない' },
    { id: 'B044-3', lesson: 'B044', q: '代理人が自分で「権限がある」と言えば表見的な権限になる？', a: 'ならない。表示は本人から出たものが必要' },
    { id: 'B044-4', lesson: 'B044', q: 'Freeman & Lockyer と Hely-Hutchinson の違いは？', a: '前者は表見的な権限、後者は黙示の実際の権限' },
    { id: 'B044-5', lesson: 'B044', q: '代理人を解任したのに取引先に知らせないと？', a: '知らない取引先との関係で表見的な権限が残りうる' },
    { id: 'B044-6', lesson: 'B044', q: 'Panorama v Fidelis で会社が拘束された理由は？', a: '会社の秘書には事務的な契約の権限があるように見えるから' },
    { id: 'B044-7', lesson: 'B044', q: 'Watteau v Fenwick で本人が拘束された根拠は？', a: '通常の権限（usual authority）。内部の禁止を超えても、支配人がふつう持つ範囲内だった' },
    { id: 'B045-1', lesson: 'B045', q: '権限なし・追認なしの代理人の責任は？', a: '権限保証違反で第三者に賠償。誠実でも免れない（Collen v Wright）' },
    { id: 'B045-2', lesson: 'B045', q: '隠れた本人が分かった後、第三者はだれに請求できる？', a: '代理人か本人のどちらかを選ぶ。選んだら他方には請求できない' },
    { id: 'B045-3', lesson: 'B045', q: '表見的な権限だけで契約した代理人の責任は？', a: '本人は第三者に拘束されるが、代理人は指示違反で本人に責任を負う' },
    { id: 'B045-4', lesson: 'B045', q: '代理人の主な義務は？', a: '指示に従う、注意と技能、自分で行う、利益相反と秘密の利益の禁止、報告' },
    { id: 'B045-5', lesson: 'B045', q: '代理人の3つの権利は？', a: '報酬（合意があれば）、費用の補償（indemnity）、留置権（lien）' },
    { id: 'B045-6', lesson: 'B045', q: 'Turpin v Bilton の教訓は？', a: '指示（保険をかける）に従わなかった代理人は、本人の損害を賠償する' }
  ]
});
