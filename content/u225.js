(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 225,
  part: 9,
  partTitle: '企業・金融犯罪',
  lessons: [
    {
      id: 'B104',
      no: 104,
      title: '脱税ほう助の防止懈怠と不正防止懈怠',
      goal: '関係者の犯罪を会社が「防げなかった」ことを罰する2つの罪（脱税ほう助の防止懈怠、不正防止懈怠）の要件、relevant body の意味、防止手続の抗弁を説明できるようになる',
      minutes: 17,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F4(a)'],
      slides: [
        {
          title: 'アルバイトの不正、店の責任は？',
          paras: ['コンビニのアルバイトが、知り合いの客のために、レジで割引を不正に打ち込んでいた。店長はルールも研修も用意していなかった。', '悪いのはアルバイトと客。でも「防ぐしくみを何も作っていなかった店」にも責任はないか。英国法は、ここを会社の犯罪にしている。これが防止懈怠（failure to prevent）の罪。']
        },
        {
          title: '防止懈怠の罪と relevant body',
          list: ['会社の関係者が犯罪をした → 会社が「それを防げなかった」こと自体が会社の犯罪になる', '経営陣が知らなくても、関わっていなくても成立する（厳格責任、strict liability）', '会社が逃れる道は1つ。防止の手続きを整えていたと証明すること', '対象の会社は relevant body: 法人（body corporate）かパートナーシップ。どこで設立されたかは問わない。LLP は法人なので入る'],
          note: { kind: 'tip', text: '同じ型の罪は3つある。贈賄防止の懈怠（Bribery Act 2010 s7、B103）、脱税ほう助の防止懈怠（Criminal Finances Act 2017）、不正防止懈怠（Economic Crime and Corporate Transparency Act 2023）。' }
        },
        {
          title: '脱税ほう助の防止懈怠（Criminal Finances Act 2017）',
          svg: `<svg viewBox="0 0 440 318" role="img" aria-label="脱税ほう助の防止懈怠が成立する3つの段階" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">3つの段階がそろうと成立</text><rect x="20" y="44" width="400" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="68" font-size="15" font-weight="600" fill="var(--ink)">段階1 納税者の脱税（犯罪）</text><text x="36" y="92" fill="var(--ink)">例: 顧客が意図的に売上を隠す</text><line x1="220" y1="104" x2="220" y2="122" stroke="var(--edge)" stroke-width="2"/><polygon points="214,118 226,118 220,128" fill="var(--edge)"/><rect x="20" y="128" width="400" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="152" font-size="15" font-weight="600" fill="var(--ink)">段階2 関係者が故意にほう助</text><text x="36" y="176" fill="var(--ink)">従業員・代理人・業務を行う人</text><line x1="220" y1="188" x2="220" y2="206" stroke="var(--edge)" stroke-width="2"/><polygon points="214,202 226,202 220,212" fill="var(--edge)"/><rect x="20" y="212" width="400" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="236" font-size="15" font-weight="600" fill="var(--ink)">段階3 会社が防げなかった</text><text x="36" y="260" fill="var(--ink)">抗弁: 合理的な防止手続があった</text><text x="220" y="302" text-anchor="middle" fill="var(--quiet)">経営陣が知らなくても成立する</text></svg>`,
          list: ['関係者（associated person）: 従業員、代理人、会社のために業務を行う人で、その立場で行動したもの（s44）', '英国の税の脱税なら s45。外国の税なら s46（英国とのつながりがあり、その国でも英国でも犯罪になる場合）', '段階1・2は犯罪であることが必要。でも納税者や関係者が起訴・有罪になっていなくても、会社の罪は成立する']
        },
        {
          title: '例題: 会計事務所の従業員が顧客を手伝った',
          example: {
            problem: 'Fenwick LLP（英国の会計事務所）の従業員 Ann は、顧客 Bob が売上を隠して所得税を逃れるために、架空の経費の書類を作った。Fenwick には脱税ほう助を防ぐ手続きが何もない。パートナーたちは何も知らなかった。Fenwick の責任は？',
            steps: ['段階1: Bob は意図的に売上を隠した → 犯罪としての脱税（節税ではない）', '段階2: Ann は従業員として仕事の中で、故意に脱税を手伝った → 脱税ほう助の犯罪', 'Fenwick は LLP ＝ 法人なので relevant body。Ann は関係者（従業員）', '段階3: パートナーが知らなかったことは関係ない', '抗弁: 合理的な防止手続を整えていたか → 何もない'],
            answer: 'Fenwick は s45 の罪で有罪になりうる。罰金に上限はない。Ann と Bob もそれぞれ自分の犯罪の責任を負う'
          }
        },
        {
          title: '不正防止懈怠（ECCTA 2023 s199）',
          list: ['2025年9月1日から施行。対象は relevant body のうち大規模組織（large organisation）だけ', '大規模組織: 前の事業年度に次の3つのうち2つ以上を満たす。売上高 £36m 超、総資産 £18m 超、従業員 250人超（s201）', '関係者（従業員、代理人、子会社、会社のために業務を行う人）が、対象の詐欺の罪を犯す', 'その関係者が、会社か、会社が仕える顧客に利益を与える意図を持っていた', '会社自身が被害者（またはその予定）だった場合は成立しない', '対象の罪の例: 詐欺（Fraud Act 2006）、虚偽の会計（false accounting）、不正取引（CA 2006 s993）、国の歳入をだます罪']
        },
        {
          title: '3つの防止懈怠を比べる',
          table: { caption: 'どれも罰金の上限なし', head: ['項目', '脱税ほう助（CFA 2017）', '不正（ECCTA 2023）'], rows: [['対象の会社', 'すべての relevant body', '大規模組織だけ'], ['関係者の犯罪', '脱税をほう助する罪', '詐欺などの罪'], ['関係者の目的', '会社の利益を図る必要はない（ほう助の故意は必要）', '会社か顧客の利益を図る意図が必要'], ['抗弁', '合理的な防止手続（reasonable prevention procedures）', '合理的な不正防止手続']] },
          after: '贈賄（Bribery Act s7）の抗弁は「適切な手続（adequate procedures）」。言い回しの違いが選択肢で問われる。'
        },
        {
          title: '防止手続の6つの原則',
          paras: ['政府の手引きは、3つの罪で同じ6つの原則を示している。'],
          numbered: ['リスクの評価（risk assessment）', 'リスクに見合った手続（proportionate procedures）', '経営トップの関与（top-level commitment）', '取引先・関係者の確認（due diligence）', '周知と研修（communication and training）', 'モニタリングと見直し（monitoring and review）']
        },
        {
          title: 'なぜ？ 会社に「防ぐ責任」を負わせる理由',
          paras: ['昔の英国法では、会社を有罪にするには、会社の「頭脳」にあたる上級の人の関与を示す必要があった。大きな会社ほど、現場の不正と経営陣が切り離され、会社は責任を逃れやすかった。', 'そこで「防げなかった」こと自体を罪にした。会社は罰を避けたければ、自分で不正を防ぐしくみを作るしかない。罰より予防が狙い。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「経営陣が知らなかったから会社は無罪」は誤り。知らなくても成立し、抗弁は防止手続だけ。また、合法な節税（tax avoidance）を手伝っても脱税ほう助ではない。前提は犯罪としての脱税（tax evasion）。不正防止懈怠は大規模組織だけが対象で、脱税ほう助の防止懈怠は規模を問わない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['relevant body ＝ 法人かパートナーシップ（設立地を問わない）。関係者の犯罪を防げないと会社の罪', '脱税ほう助（CFA 2017 s45・s46）は全規模。不正（ECCTA s199）は2つ以上の基準を超える大規模組織で、会社か顧客の利益を図る詐欺', '抗弁は合理的な防止手続を整えていたこと。罰金は上限なし']
        },
        {
          title: '英単語',
          words: [
            ['failure to prevent', 'フェイリャー トゥ プリヴェント', '防止しなかったこと（防止懈怠）'],
            ['facilitation of tax evasion', 'ファシリテイション', '脱税のほう助'],
            ['relevant body', 'レレヴァント ボディ', '対象となる法人・パートナーシップ'],
            ['associated person', 'アソシエイテッド', '関係者（従業員・代理人など）'],
            ['reasonable prevention procedures', 'プリヴェンション', '合理的な防止手続'],
            ['large organisation', 'ラージ', '大規模組織'],
            ['tax avoidance', 'アヴォイダンス', '合法な節税（脱税ではない）']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Criminal Finances Act 2017, which of the following is a defence for a relevant body charged with failing to prevent the facilitation of UK tax evasion?', choices: ['That its senior management did not know about the facilitation', 'That it had in place such prevention procedures as it was reasonable in all the circumstances to expect it to have', 'That the taxpayer has not yet been convicted of tax evasion', 'That it had adequate procedures designed to prevent bribery'], answer: 1, explain: 's45(2) の抗弁は合理的な防止手続（または手続を求めるのが合理的でなかった）。経営陣が知らなかったことは抗弁にならない。納税者がまだ有罪になっていなくても会社の罪は成立する。贈賄防止の手続を整えていても、脱税ほう助を防ぐ手続にはならない。' },
        { q: 'Which of the following organisations is a large organisation for the purposes of the failure to prevent fraud offence, based on its previous financial year?', choices: ['Turnover £40m, balance sheet total £10m, 200 employees', 'Turnover £30m, balance sheet total £20m, 300 employees', 'Turnover £20m, balance sheet total £20m, 100 employees', 'Turnover £40m, balance sheet total £15m, 240 employees'], answer: 1, explain: '基準は売上高 £36m 超、総資産 £18m 超、従業員250人超のうち2つ以上。2つ目は総資産と従業員の2つを満たす。1つ目と4つ目は売上高だけ、3つ目は総資産だけで1つしか満たさない。' },
        { q: 'Criminal Finances Act 2017 の relevant body に当たらないものは？', choices: ['海外で設立された会社', '有限責任事業組合（LLP）', '個人で営業する税理士（sole trader）', 'パートナーシップ'], answer: 2, explain: 'relevant body は法人かパートナーシップで、設立地を問わない。LLP は法人。個人事業主は relevant body ではない（本人がほう助すれば本人の犯罪になる）。' },
        { q: '銀行の従業員が、顧客が法律で認められた制度を使って税金を減らすのを手伝った。銀行は脱税ほう助の防止懈怠の罪に問われる？', choices: ['問われる。税金が減ったから', '問われる。防止手続がなければ必ず有罪', '問われない。従業員は代理人ではないから', '問われない。前提となる犯罪としての脱税がない'], answer: 3, explain: '段階1の「犯罪としての脱税」がなければ成立しない。合法な節税（tax avoidance）は対象外。従業員は関係者に当たるので、「従業員は代理人ではない」という理由は誤り。' },
        { q: 'An employee of Large plc, which is a large organisation, dishonestly inflates his own expense claims, intending to benefit only himself at the expense of Large plc. Which of the following is correct?', choices: ['Large plc is guilty because the employee is an associated person', 'Large plc is guilty unless it proves its senior managers did not know', 'Large plc is not guilty of failure to prevent fraud, because the fraud was not intended to benefit it and it was the intended victim', 'Large plc is guilty only if the employee is convicted first'], answer: 2, explain: 's199 は、関係者が会社か顧客の利益を図って詐欺をした場合の罪。会社自身が被害者の場合は成立しない（s199(3)）。経営陣が知らなかったことは抗弁にならない。' }
      ]
    },
    {
      id: 'B105',
      no: 105,
      title: '会社の運営と清算で起こりうる犯罪',
      goal: '会社の運営中と清算の前後に起こりうる主な犯罪と、会社そのものと役員個人の刑事責任を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F4(a)'],
      slides: [
        {
          title: '夜逃げの前に荷物を隠す',
          paras: ['借金で家を手放すことになった人が、その前に家具を親戚の家に運び、家計簿を書き換えた。貸した人たちに分けるはずの財産が消える。', '会社でも同じことが起こる。英国法は、会社を動かす人が帳簿や財産で不正をすることを、時期ごとに犯罪として決めている。']
        },
        {
          title: '誰が罰せられるか',
          list: ['会社そのもの: 罰金。経済犯罪では、上級管理職（senior manager）が権限の範囲で犯罪をすれば、会社も有罪になる（ECCTA 2023 s196）', '役員個人: 多くの会社法の罪は「違反をした役員（officer in default）」を罰する', 'officer in default: 違反を認めた、許した、加わった、または防ぐための合理的な手段を取らなかった役員（CA 2006 s1121）'],
          note: { kind: 'tip', text: '会社は株主や取締役とは別の法人格を持つ。でも犯罪では、会社と、実際に動いた人の両方が罰せられうる。' }
        },
        {
          title: '運営中の主な犯罪',
          table: { caption: '帳簿・説明・資格に関するもの', head: ['犯罪', '中身'], rows: [['会計記録の不備（CA 2006 s387）', '十分な会計記録（s386）を残さない。誠実に行動し、事情がやむを得なければ抗弁になる'], ['監査人への虚偽（s501）', '監査人に、故意か無謀に、誤解させる説明をする'], ['虚偽の会計（Theft Act 1968 s17）', '不正に利益を得るなどの目的で、会計記録を破棄・改ざんする'], ['役員の虚偽の説明（Theft Act s19）', '株主や債権者をだます目的で、虚偽の書面を出す'], ['詐欺（Fraud Act 2006）', '虚偽の表示などでお金を得る'], ['不正取引（CA 2006 s993）', '債権者をだます目的で事業を行う（B107）']] }
        },
        {
          title: '資格と会社名に関する犯罪',
          list: ['資格剥奪命令に違反して取締役になる、経営に関わる（CDDA 1986 s13）', 'さらに、その間の会社の債務を個人で負う（CDDA s15）。資格剥奪中と知りながらその人の指示に従った人も同じ', '破産者が、裁判所の許可なく取締役になる（CDDA s11）', '支払不能の清算に入った会社で、清算前12か月以内に取締役だった人が、その後5年間、同じか似た名前の会社に関わる（IA 1986 s216）。犯罪で、その会社の債務も個人で負う（s217）']
        },
        {
          title: '清算の前後の犯罪（Insolvency Act 1986）',
          table: { caption: '役員（過去の役員も含む）が対象', head: ['条文', '中身'], rows: [['s206 清算を見越した不正', '清算開始前12か月以内に、会社の財産を隠す・持ち出す、帳簿を隠す・破棄・改ざんする'], ['s207 債権者を害する取引', '会社の財産を贈与・譲渡したり担保に入れたりする。清算開始前5年以内の行為が対象。だます意図がなかったと示せば罪にならない'], ['s208 清算中の不正行為', '清算人に財産や帳簿を開示しない・引き渡さない'], ['s209 清算中の帳簿の改ざん', '清算中に、だます目的で帳簿を破棄・改ざんする'], ['s210 財産状況の説明書の重要な漏れ', '説明書（statement of affairs）から重要な事項を落とす'], ['s211 債権者への虚偽', '債権者の同意を得るために嘘をつく']] },
          after: 'ほかに、合理的な根拠のない支払能力の声明（s89、B092）も犯罪。'
        },
        {
          title: '図で整理する: いつ起きたか',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="運営中、清算前12か月、清算中に分けた主な犯罪" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">犯罪は起きた時期で分ける</text><rect x="20" y="44" width="190" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="70" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">運営中</text><rect x="216" y="44" width="110" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="271" y="70" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">清算前12か月</text><rect x="332" y="44" width="88" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="376" y="70" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">清算中</text><text x="30" y="112" fill="var(--ink)">会計記録の不備</text><text x="30" y="136" fill="var(--ink)">監査人への虚偽</text><text x="30" y="160" fill="var(--ink)">false accounting</text><text x="30" y="184" fill="var(--ink)">資格剥奪中の経営</text><text x="271" y="112" text-anchor="middle" fill="var(--ink)">財産の隠匿</text><text x="271" y="136" text-anchor="middle" fill="var(--ink)">帳簿の破棄</text><text x="271" y="160" text-anchor="middle" fill="var(--quiet)">s206</text><text x="376" y="112" text-anchor="middle" fill="var(--ink)">清算人に</text><text x="376" y="136" text-anchor="middle" fill="var(--ink)">財産を隠す</text><text x="376" y="160" text-anchor="middle" fill="var(--quiet)">s208</text><line x1="20" y1="208" x2="420" y2="208" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="236" text-anchor="middle" fill="var(--ink)">不正取引（s993）は時期を問わない</text></svg>`,
          caption: 's206 は清算開始前12か月の行為が対象。清算が始まってからの行為も含む。'
        },
        {
          title: '例題: どの犯罪に当たる？',
          example: {
            problem: 'Kite Ltd は8月1日に債権者による任意清算に入った。取締役 Ray は、(1) 前年の5月に在庫 £40,000 を自宅の倉庫に移していた。(2) 3月に、在庫の移動を記録した帳簿のページを破棄した。(3) 清算人に聞かれても在庫のことを話さなかった。',
            steps: ['清算開始は8月1日。その前12か月は前年の8月1日から', '(1) 前年5月は12か月より前 → s206 の範囲外。でも5年以内の財産の移転なので s207 を検討（だます意図がなかったと示せなければ罪）', '(2) 3月は12か月以内。帳簿の破棄 → s206。清算が始まる前なので、清算中の罪である s209 ではない', '(3) 清算人に財産を開示しない → s208'],
            answer: '(1) は s207 の可能性、(2) は s206、(3) は s208。Ray 個人の犯罪'
          }
        },
        {
          title: 'なぜ？ 時期で分けて細かく決める理由',
          paras: ['会社が倒れそうになると、取締役には「財産を自分の手元に逃がしたい」という誘惑が一番強くなる。清算の直前と最中は、債権者の財産が一番危ない時期。', 'そこで法律は、清算の前12か月と清算中の行為を特に重く見る。帳簿の改ざんも犯罪にするのは、帳簿がなければ清算人が財産の行方を追えないから。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「会社が罰金を払えば、取締役個人は罰せられない」は誤り。会社と officer in default の両方が罰せられうる。また、不当取引（s214、B107）は民事の責任で犯罪ではない。不正取引には刑事（s993）と民事（s213）の両方がある。資格剥奪中に経営に関わると、犯罪と個人の債務の責任が両方つく。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['会社と役員（officer in default）の両方が罰せられうる。上級管理職の経済犯罪は会社の犯罪にもなる（ECCTA s196）', '運営中: 会計記録の不備、監査人への虚偽、虚偽の会計、資格剥奪中の経営（CDDA s13・s15）', '清算: 開始前12か月の財産隠し・帳簿破棄（s206）、清算中に清算人へ隠す（s208）など']
        },
        {
          title: '英単語',
          words: [
            ['officer in default', 'オフィサー イン ディフォルト', '違反をした役員'],
            ['accounting records', 'アカウンティング レコーズ', '会計記録'],
            ['false accounting', 'フォールス', '虚偽の会計'],
            ['in anticipation of winding up', 'アンティシペイション', '清算を見越して'],
            ['conceal', 'コンシール', '隠す'],
            ['falsification', 'フォルシフィケイション', '改ざん'],
            ['senior manager', 'シニア マネージャー', '上級管理職']
          ]
        }
      ],
      quiz: [
        { q: 'Within the 12 months before the commencement of its winding up, a director of a company concealed company property from its creditors. Under the Insolvency Act 1986, this is:', choices: ['Wrongful trading, which gives rise to civil liability only', 'A criminal offence of fraud in anticipation of winding up', 'Not an offence, because the winding up had not yet begun', 'An offence only if the director has already been disqualified'], answer: 1, explain: 's206：清算開始前12か月以内の財産の隠匿は犯罪。清算の前の行為でも対象になる。不当取引（s214）は取引を続けたことへの民事の責任で、別の話。' },
        { q: 'For the purposes of the Companies Act 2006, which of the following is an officer in default?', choices: ['Any director in office when the company is wound up', 'Any shareholder holding more than 25% of the shares', 'An officer who authorises, permits, participates in, or fails to take all reasonable steps to prevent the contravention', 'Any officer who has previously been disqualified by the court'], answer: 2, explain: 's1121 の定義。違反に関わったか、防ぐ手段を取らなかった役員が対象。清算時に在任していただけ、株主であるだけでは当たらない。' },
        { q: '資格剥奪命令を受けている Sam が、友人の会社の経営に実際に関わり、その会社が借金を残して倒れた。Sam の責任は？', choices: ['責任はない。正式な取締役ではないから', '犯罪になるだけで、借金の責任はない', '借金の責任を負うだけで、犯罪にはならない', '犯罪になり（CDDA s13）、その間の会社の債務も個人で負う（s15）'], answer: 3, explain: '資格剥奪中に経営に関わることは犯罪で、さらにその間の会社の債務を個人で負う。正式な選任がなくても、経営に関わること自体が禁じられている。' },
        { q: '取締役が十分な会計記録を残していなかった（CA 2006 s387）。取締役が罪を免れる抗弁は？', choices: ['誠実に行動し、事情からみてやむを得なかったと示す', '会社に損害が出なかったと示す', '監査人が問題を指摘しなかったと示す', '株主の過半数が了承していたと示す'], answer: 0, explain: 's387 の抗弁は、誠実に行動し、その事情のもとで違反がやむを得なかったこと。損害の有無、監査人の見落とし、株主の了承は抗弁にならない。' },
        { q: '大企業の財務担当の上級管理職が、会社の利益を上げるために、取引先をだます詐欺を行った。2023年の法改正の後、会社そのものはどうなる？', choices: ['会社は法人なので、刑事責任を負わない', '上級管理職だけが罰せられ、会社は罰せられない', '上級管理職が権限の範囲で行った経済犯罪なので、会社も有罪になりうる', '会社は、株主総会で承認した場合だけ有罪になる'], answer: 2, explain: 'ECCTA 2023 s196：上級管理職が実際の権限か外見上の権限の範囲で経済犯罪を行えば、会社にも帰属する。会社も罰金の対象になる。' }
      ]
    },
    {
      id: 'B106',
      no: 106,
      title: 'コンピュータの不正使用とサイバー犯罪',
      goal: 'Computer Misuse Act 1990 の主な罪と、サイバー犯罪の種類、会社が取るべき対応を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F5(a)'],
      slides: [
        {
          title: '合鍵で他人の家に入る',
          paras: ['拾った合鍵で他人の家に入った。何も盗まず、何も壊さず出てきた。それでも住居侵入になる。', 'コンピュータも同じ。パスワードを盗み見てシステムに入れば、データを持ち出さなくても犯罪になる。英国ではこれを Computer Misuse Act 1990（CMA）が決めている。']
        },
        {
          title: 'CMA 1990 の主な罪',
          table: { caption: '刑の上限（起訴された場合）', head: ['条文', '何をすると犯罪か', '上限'], rows: [['s1', '権限のないアクセス（unauthorised access）', '2年'], ['s2', 'さらに別の犯罪をする目的で、権限のないアクセス', '5年'], ['s3', '権限のない行為で、コンピュータの動作を妨げる（故意か無謀）', '10年'], ['s3ZA', '人の福祉・環境・経済・国の安全に深刻な損害を与える権限のない行為', '14年（人命や国の安全は終身）'], ['s3A', 'これらの罪に使う道具（マルウェアなど）を作る・渡す・手に入れる', '2年']] }
        },
        {
          title: 's1: 入っただけで犯罪',
          list: ['コンピュータのプログラムやデータへのアクセスを確保しようとして、コンピュータを動かした', 'そのアクセスに権限がなかった', '権限がないと知っていた', '何かを盗む、壊すといった結果は要らない'],
          after: '従業員でも犯罪になる。R v Bow Street Magistrates, ex p Allison（1999、貴族院）では、一部のデータにだけアクセスを許された従業員が、許されていないデータを見て s1 の罪とされた。'
        },
        {
          title: 's2 と s3',
          list: ['s2: 詐欺や窃盗など重い罪（刑の上限が5年以上）をするつもりでアクセスした。その罪を後で行うつもりでも、実際には実行できなくても成立する', 's3: データの削除や改ざん、ウイルスの送り込み、システムを止める攻撃など。動作を妨げる故意か、無謀（recklessness）があればよい', 'DPP v Lennon（2006）: 元の勤め先に約50万通のメールを送りつけた。1通ずつは誰でも送れるメールでも、システムを止めるための大量送信は許されていない → s3']
        },
        {
          title: 'サイバー犯罪の2つの種類',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="サイバー依存型とサイバー利用型の犯罪の例" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">サイバー犯罪は2つに分ける</text><rect x="20" y="44" width="195" height="170" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="117" y="70" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">サイバー依存型</text><text x="117" y="90" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cyber-dependent</text><text x="117" y="118" text-anchor="middle" fill="var(--ink)">不正アクセス</text><text x="117" y="142" text-anchor="middle" fill="var(--ink)">マルウェア</text><text x="117" y="166" text-anchor="middle" fill="var(--ink)">DDoS 攻撃</text><text x="117" y="190" text-anchor="middle" fill="var(--ink)">ランサムウェア</text><rect x="225" y="44" width="195" height="170" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="70" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">サイバー利用型</text><text x="322" y="90" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cyber-enabled</text><text x="322" y="118" text-anchor="middle" fill="var(--ink)">フィッシング詐欺</text><text x="322" y="142" text-anchor="middle" fill="var(--ink)">なりすましメール</text><text x="322" y="166" text-anchor="middle" fill="var(--ink)">オンライン詐欺</text><text x="322" y="190" text-anchor="middle" fill="var(--ink)">盗んだデータの売買</text><text x="220" y="244" text-anchor="middle" fill="var(--ink)">左は主に CMA、右は詐欺などの法律</text></svg>`,
          list: ['依存型: コンピュータがなければ起こらない犯罪。CMA で罰する', '利用型: 昔からある犯罪（詐欺など）を、ネットで大規模・速くしたもの。Fraud Act 2006 などで罰する。1つの事件で両方に当たることも多い']
        },
        {
          title: '例題: どの罪に当たる？',
          example: {
            problem: 'Zed は銀行を装ったメールを送り、顧客 Mia にパスワードを入力させた（フィッシング）。Zed はそのパスワードで Mia の口座にログインし、送金しようとしたが、銀行に止められた。さらに銀行のシステムにランサムウェアを送り込み、データを暗号化して身代金を求めた。',
            steps: ['偽のメールでパスワードを入力させた → 虚偽の表示による詐欺（Fraud Act 2006 s2）。サイバー利用型', 'Mia のパスワードで無断ログイン → s1 の権限のないアクセス', 'ログインの目的は送金（窃盗・詐欺） → s2。送金が止められても成立', 'ランサムウェアでデータを暗号化 → s3（動作の妨害）。身代金の要求は恐喝（blackmail）にもなる'],
            answer: '詐欺、CMA s1・s2・s3、恐喝。1つの事件で複数の罪に当たる'
          }
        },
        {
          title: '会社が取るべき対応',
          list: ['予防: アクセス権限を仕事に必要な範囲に絞る、多要素認証、研修（フィッシングの見分け方）、バックアップ', '発覚したら: システムの隔離、証拠の保全、警察への届出', '個人データが漏れたら: 個人に危険が及ぶおそれがあれば、気づいてから72時間以内に情報コミッショナー（ICO）へ報告する（UK GDPR）', '守りが甘いと、会社は被害者であっても、データ保護の法律で制裁金を受けうる']
        },
        {
          title: 'なぜ？ 「入っただけ」で罰する理由',
          paras: ['ハッキングは、侵入した時点で被害が始まっている。中のデータがいつ盗まれ、壊されるか分からず、会社は全部調べ直す費用を負う。', 'また、被害が出るまで待つと、犯人はもう海外に逃げている。だから CMA は、段階ごとに罪を作った。入る（s1）、さらに犯罪をする目的で入る（s2）、壊す（s3）と、悪さが増すほど刑が重くなる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「社員だから、会社のシステムを何に使っても犯罪にならない」は誤り。許された範囲を超えたアクセスは s1。また s2 は、目的の犯罪が実行されなくても成立する。フィッシングで相手をだましてお金を得るのは、CMA ではなく主に詐欺の罪。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['s1 権限のないアクセス（2年）、s2 別の犯罪の目的で（5年）、s3 動作の妨害（10年）、s3A 道具（2年）', '権限の範囲を超えた従業員も s1（Allison）。大量メールでシステムを止めるのも s3（Lennon）', 'サイバー依存型は CMA、利用型は詐欺などの法律。個人データの漏えいは72時間以内に ICO へ']
        },
        {
          title: '英単語',
          words: [
            ['unauthorised access', 'アンオーソライズド アクセス', '権限のないアクセス'],
            ['computer misuse', 'ミスユース', 'コンピュータの不正使用'],
            ['impair the operation', 'インペア', '動作を妨げる'],
            ['recklessness', 'レックレスネス', '無謀（危険を知りながら行う）'],
            ['cyber-dependent crime', 'ディペンデント', 'サイバー依存型の犯罪'],
            ['cyber-enabled crime', 'エネイブルド', 'サイバー利用型の犯罪'],
            ['phishing', 'フィッシング', '偽のメール等で情報をだまし取ること']
          ]
        }
      ],
      quiz: [
        { q: 'An employee of a bank is authorised to view customer records for her own branch only. Out of curiosity, she deliberately views the records of customers of another branch. Under the Computer Misuse Act 1990, she has:', choices: ['Committed no offence, because she was authorised to use the computer system', 'Committed unauthorised access to computer material', 'Committed an offence only if she uses the data to commit fraud', 'Committed an offence only if the data is altered or deleted'], answer: 1, explain: 's1 は権限のないアクセス自体が罪。システムの一部への権限があっても、許されていないデータを見れば当たる（Allison）。使う目的があれば s2、改ざんなどは s3 の話。' },
        { q: 'Which of the following is an example of a cyber-dependent crime?', choices: ['Selling counterfeit goods through a website', 'Sending a fake email that persuades a customer to pay an invoice into a fraudster\'s account', 'A ransomware attack that encrypts a company\'s files', 'Harassing a person through social media'], answer: 2, explain: 'ランサムウェアはコンピュータがなければ起こらない依存型。偽物の販売、偽の請求メールによる詐欺、ネット上の嫌がらせは、昔からある犯罪をネットで行う利用型。' },
        { q: 'Leo は他人の口座から送金するつもりで、盗んだパスワードで銀行のシステムにログインした。送金の前に気づかれ、お金は動かなかった。CMA の最も重い罪は？', choices: ['罪にならない。お金が動いていない', 's1 だけ。目的の犯罪が実行されていない', 's3。システムの動作を妨げた', 's2。別の犯罪をする目的での権限のないアクセス'], answer: 3, explain: 's2 は、詐欺や窃盗をする目的でアクセスすれば、実行できなくても成立する。システムの動作を妨げていないので s3 ではない。' },
        { q: 'A former employee sends hundreds of thousands of emails to his former employer\'s email server, intending to stop it working. Each email on its own could lawfully be sent by any member of the public. Which offence is most likely committed?', choices: ['Unauthorised acts with intent to impair the operation of a computer', 'No offence, because sending emails is authorised', 'Unauthorised access with intent to commit further offences', 'Making an article for use in computer misuse'], answer: 0, explain: 'DPP v Lennon：1通ずつは許されたメールでも、システムを止める目的の大量送信は許されていない → s3。システムに入っていないので s1・s2 ではない。道具を作ったわけでもない。' },
        { q: '会社のシステムが攻撃され、顧客の個人データが盗まれた。顧客に危険が及ぶおそれがある。会社は情報コミッショナー（ICO）にいつまでに報告する？', choices: ['気づいてから30日以内', '報告は不要。会社は被害者だから', '気づいてから72時間以内', '警察の捜査が終わってから'], answer: 2, explain: 'UK GDPR では、個人に危険が及ぶおそれのある漏えいは、気づいてから72時間以内に ICO へ報告する。被害者であっても報告義務は消えない。' }
      ]
    },
    {
      id: 'B107',
      no: 107,
      title: '不正取引と不当取引',
      goal: '不正取引（刑事 s993・民事 s213）と不当取引（民事 s214）の要件、責任を負う人、判断基準、抗弁、拠出額の考え方を比べて説明できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F6(a)'],
      slides: [
        {
          title: '幹事が注文を続けた',
          paras: ['飲み会の幹事 A は、最初から払うつもりがなく、店をだまして注文した。幹事 B は、会費が足りないと分かるはずの場面で、確かめもせず注文を続けた。', 'どちらも店は損をする。でも A はだます気があった。B はだます気はなく、気づくべきことに気づかなかった。会社法では、A が不正取引（fraudulent trading）、B が不当取引（wrongful trading）に近い。']
        },
        {
          title: '不正取引: 2つの顔',
          list: ['会社の事業が、債権者をだます目的か、その他の不正な目的で行われた', 'それを知って関わった人（knowingly parties）が対象。取締役に限らない', '刑事: CA 2006 s993。会社が清算されていなくても成立。拘禁は最長10年、罰金も', '民事: IA 1986 s213。清算の中で、清算人が裁判所に申し立て、会社の財産への拠出（contribution）を命じてもらう'],
          after: 'Re Gerald Cooper Chemicals（1978）: 別の債権者をだまして得たお金と知りながら、その中から弁済を受けた債権者も、関わった人として責任を負った。'
        },
        {
          title: '不正取引の「だます意図」',
          list: ['実際の不正（dishonesty）が必要。「真に道徳的に非難されるべき」程度（Re Patrick and Lyon、1933年）', 'R v Grantham（1984）: 期日に払えるとする正当な理由がないと知りながら、借りを作り続けることも、だます意図になりうる', 'このため立証が難しい。そこで、だます意図が要らない不当取引の制度が作られた（現在の IA 1986 s214）']
        },
        {
          title: '不当取引（IA 1986 s214）の要件',
          numbered: ['会社が支払不能の清算（insolvent liquidation）に入った。財産で、債務と清算の費用を払いきれない状態', '清算開始の前のある時点で、その人が「会社が支払不能の清算を避けられる合理的な見込みはない」と知っていたか、そう結論づけるべきだった', 'その時点で、その人は取締役だった（影の取締役、事実上の取締役も含む）'],
          after: '申し立てるのは清算人（管理手続なら管理人）。債権者が直接訴えるのではない。民事の責任で、犯罪ではない。'
        },
        {
          title: '判断の基準と抗弁',
          list: ['基準（s214(4)）: 同じ職務を担う人に合理的に期待される知識・技能・経験（客観）＋本人が実際に持つ知識・技能・経験（主観）', '最低ラインは客観。本人が会計士などで能力が高ければ、基準はさらに上がる。「能力が低かった」は言い訳にならない', '抗弁（s214(3)）: 債権者の損失を最小にするために取るべきあらゆる措置（every step）を取った', '措置の例: 専門家の助言を受ける、新しい借りを作らない、取締役会で記録を残す、管理手続や清算を検討する。黙って辞任するだけでは足りないことが多い']
        },
        {
          title: '図で見る: どこから責任が生まれるか',
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="気づくべき日から清算開始までに増えた不足額が拠出の目安になる" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">不当取引の時間の流れ</text><text x="60" y="66" text-anchor="middle" fill="var(--ink)">営業中</text><text x="220" y="66" text-anchor="middle" font-weight="600" fill="var(--ink)">気づくべき日</text><text x="380" y="66" text-anchor="middle" fill="var(--ink)">清算開始</text><line x1="40" y1="90" x2="400" y2="90" stroke="var(--edge)" stroke-width="2"/><circle cx="60" cy="90" r="7" fill="var(--ink)"/><circle cx="220" cy="90" r="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><circle cx="380" cy="90" r="7" fill="var(--ink)"/><text x="220" y="124" text-anchor="middle" fill="var(--ink)">不足額 X</text><text x="380" y="124" text-anchor="middle" fill="var(--ink)">不足額 Y</text><line x1="220" y1="146" x2="380" y2="146" stroke="var(--edge)" stroke-width="1.25"/><line x1="220" y1="140" x2="220" y2="152" stroke="var(--edge)" stroke-width="1.25"/><line x1="380" y1="140" x2="380" y2="152" stroke="var(--edge)" stroke-width="1.25"/><text x="300" y="172" text-anchor="middle" fill="var(--ink)">この間に増えた損失</text><text x="220" y="212" text-anchor="middle" fill="var(--ink)">拠出の目安 ＝ Y − X（裁判所の裁量）</text></svg>`,
          caption: '拠出は罰ではなく、債権者の損失を埋めるためのもの。会社の財産に入り、債権者全体のために使われる。'
        },
        {
          title: '例題: 拠出額の目安',
          example: {
            problem: 'Pine Ltd は12月31日に支払不能の清算に入った。清算人の調べでは、取締役たちは3月31日の時点で、清算を避けられないと結論づけるべきだった。その日の不足額（債務 − 財産）は £120,000。清算開始の日の不足額は £310,000。取締役が取引を続けたことで増えた損失として、拠出を求められる額の目安は？',
            steps: ['基準の日 ＝ 結論づけるべきだった3月31日', 'その日から清算開始までに増えた不足額を測る', '£310,000 − £120,000 ＝ £190,000', '最終的な額は裁判所が決める。Re Produce Marketing Consortium（1989）では取締役2人に £75,000 の拠出が命じられた'],
            answer: '目安は £190,000（裁判所の裁量で決まる）'
          }
        },
        {
          title: '不正取引と不当取引を比べる',
          table: { caption: '試験で一番問われる比較', head: ['項目', '不正取引', '不当取引'], rows: [['条文', '刑事 CA s993、民事 IA s213', '民事 IA s214 だけ'], ['必要な心の状態', 'だます意図（不正）', '要らない。気づくべきだったで足りる'], ['対象', '知って関わった人すべて', '取締役（影・事実上を含む）'], ['清算が必要？', '刑事は不要、民事は清算（か管理手続）が必要', '支払不能の清算（か管理手続）が必要'], ['抗弁', '不正がなかったと争う', 'あらゆる措置を取った']] }
        },
        {
          title: 'なぜ？ と よくある間違い',
          paras: ['有限責任のもとでは、会社が倒れても取締役の財産は守られる。だから取締役は「どうせ損は債権者持ち」と、望みのない取引を続けたくなる。不当取引の責任は、このつけを債権者に回させないためにある。'],
          note: { kind: 'warn', text: '不当取引は犯罪ではない（拠出の命令と資格剥奪の対象）。不正取引にだけ刑事がある。また不当取引の責任は取締役だけで、取引先や銀行は負わない。不正取引は知って関わった人なら誰でも負う。基準は「本人が知っていたこと」だけでなく「知るべきだったこと」。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['不正取引: だます意図で事業を行い、知って関わった人すべて。刑事 s993（最長10年）と民事 s213', '不当取引: 支払不能の清算を避けられないと知るべきだった後も続けた取締役。民事 s214、基準は客観＋本人の能力', '不当取引の抗弁は、債権者の損失を最小にするあらゆる措置。拠出の目安は、その後に増えた不足額']
        },
        {
          title: '英単語',
          words: [
            ['fraudulent trading', 'フロードゥレント トレーディング', '不正取引'],
            ['wrongful trading', 'ロングフル トレーディング', '不当取引'],
            ['intent to defraud creditors', 'ディフロード', '債権者をだます意図'],
            ['knowingly parties', 'ノウイングリー', '知って関わった人'],
            ['no reasonable prospect', 'プロスペクト', '合理的な見込みがない'],
            ['insolvent liquidation', 'インソルベント', '支払不能の清算'],
            ['contribution', 'コントリビューション', '（会社の財産への）拠出']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a defence available to a director in a claim for wrongful trading under the Insolvency Act 1986?', choices: ['That the director did not intend to defraud creditors', 'That the director took every step with a view to minimising the potential loss to the company\'s creditors that he ought to have taken', 'That the director was a non-executive director', 'That the director resigned as soon as the company went into liquidation'], answer: 1, explain: 's214(3) の抗弁。不当取引はだます意図が要らないので、意図がなかったことは抗弁にならない。非執行取締役も責任を負う。清算に入ってからの辞任では遅い。' },
        { q: 'In a claim for fraudulent trading under s213 Insolvency Act 1986, which of the following persons may be ordered to contribute to the company\'s assets?', choices: ['Only the directors of the company', 'Only the directors and shadow directors of the company', 'Only persons who held shares in the company', 'Any persons who were knowingly parties to the carrying on of the business with intent to defraud creditors'], answer: 3, explain: '不正取引は「知って関わった人」すべて。取締役に限らず、事情を知って弁済を受けた債権者も対象になる（Re Gerald Cooper Chemicals）。取締役だけに限られるのは不当取引。' },
        { q: '取締役たちは6月30日の時点で、会社の支払不能の清算は避けられないと結論づけるべきだった。その日の不足額は £80,000、清算開始の日の不足額は £230,000 だった。取締役が拠出を求められる額の目安は？（£）', type: 'number', answer: 150000, unit: '£', explain: '£230,000 − £80,000 ＝ £150,000。結論づけるべきだった日から清算開始までに増えた不足額が目安。最終的な額は裁判所が決める。' },
        { q: 'Fay is the finance director of a company and a qualified accountant. In deciding whether she ought to have concluded that insolvent liquidation could not be avoided, the court will judge her by:', choices: ['The knowledge, skill and experience reasonably expected of a person carrying out her functions, together with her own greater knowledge, skill and experience', 'Her own knowledge, skill and experience only', 'The standard of an ordinary director with no accounting knowledge', 'The standard of a licensed insolvency practitioner'], answer: 0, explain: 's214(4)：客観の基準（同じ職務の人）に、本人が実際に持つ能力を加える。会計士の財務担当取締役は、ふつうの取締役より高い基準で判断される。' },
        { q: '次のうち、犯罪（刑事の責任）になるのはどれ？', choices: ['不当取引（IA 1986 s214）', '不正取引（CA 2006 s993）', '不正取引の民事の責任（IA 1986 s213）', 'どれも犯罪にならない'], answer: 1, explain: '刑事の罪は s993 の不正取引だけ。s213 は同じ行為への民事の責任、s214 の不当取引も民事。' },
        { q: '会社が支払不能の清算に入った。不当取引を理由に取締役へ拠出を求める申立てをするのは、原則として誰？', choices: ['損をした債権者が、それぞれ直接', '会社の株主', '清算人', '登記所（Companies House）'], answer: 2, explain: 's214 の申立ては清算人が行う（管理手続なら管理人）。拠出されたお金は会社の財産に入り、債権者全体のために配られる。' }
      ]
    },
    {
      id: 'B108',
      no: 108,
      title: '第9部 総合演習：企業・金融犯罪',
      goal: '会計事務所とその顧客の場面で、インサイダー取引、市場の濫用、マネーロンダリング、贈賄、防止懈怠、サイバー犯罪、不正取引・不当取引のどれに当たるかを判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F1(a)', 'K3:F1(b)', 'K3:F2(a)', 'K3:F3(a)', 'K3:F4(a)', 'K3:F5(a)', 'K3:F6(a)'],
      slides: [
        {
          title: '今日の場面',
          paras: ['第9部の内容を、1つの会計事務所とその顧客で順番に使う。'],
          list: ['Ledger LLP: 英国の会計事務所。従業員300人、売上高 £40m', 'Orbit plc: 上場会社。Ledger の監査の顧客', 'Delta Ltd: 小さな私会社。Ledger の会計の顧客。業績が悪い', 'Vix: Ledger のパートナーで、海外の案件の担当']
        },
        {
          title: '考える順番',
          numbered: ['誰が、何をしたか（行為）', 'どの法律のどの罪か（要件を1つずつ当てる）', '心の状態は要るか（故意・不正・知るべきだった）', '抗弁はあるか', '会社も責任を負うか（防止懈怠、上級管理職）']
        },
        {
          title: '第9部の地図',
          table: { caption: 'F1〜F6 の主な罪', head: ['テーマ', '法律', '要点'], rows: [['インサイダー取引（F1）', 'CJA 1993', '内部者が内部情報で取引・勧誘・開示'], ['市場の濫用（F1）', 'UK MAR（FCA）', '民事・規制の制裁。相場操縦も'], ['マネロン（F2）', 'POCA 2002、規則', '隠す・関与・取得。通報と内報の罪'], ['贈賄（F3）', 'Bribery Act 2010', '贈賄・収賄・外国公務員・防止懈怠（s7）'], ['防止懈怠（F4）', 'CFA 2017、ECCTA 2023', '脱税ほう助・不正。合理的な手続'], ['サイバー（F5）', 'CMA 1990', 's1 アクセス、s2 目的、s3 妨害'], ['不正・不当取引（F6）', 'CA s993、IA s213・s214', '意図あり／知るべきだった']] }
        },
        {
          title: '場面1: Orbit plc の買収の話',
          list: ['Orbit の財務担当取締役が、未公表の買収計画を友人 Gus に話した → 内部者による情報の開示（disclosing）の罪', 'Gus はその情報で Orbit の株を買った → 情報源から情報を得た内部者による取引（dealing）の罪', 'Gus が兄にも買うよう勧めた → 取引の勧誘（encouraging）の罪', '同じ行為は、FCA による市場の濫用（market abuse）の民事の制裁の対象にもなる']
        },
        {
          title: '場面2: Ledger の中で起きたこと',
          list: ['Delta の社長が大量の現金を持ち込み、いくつもの会社を経由させていた。担当の Ledger の従業員 Pam は疑いを持った → マネロンの疑い。Pam はマネロン報告責任者（MLRO）に報告する。報告しないと、規制対象業種の通報しない罪', 'Pam は社長に「報告したよ」と言ってはいけない → 内報（tipping off）の罪', 'Vix が海外の公務員にお金を渡して契約を取った → 外国公務員への贈賄（s6）。Ledger も贈賄防止の懈怠（s7）。抗弁は適切な手続', 'Ledger の別の従業員が、顧客の売上隠しを手伝った → Ledger に脱税ほう助の防止懈怠（CFA s45）']
        },
        {
          title: '場面3: サイバー攻撃と Delta の最後',
          list: ['Ledger の元従業員が、残っていたパスワードで顧客のデータを見た → CMA s1。データを売るつもりなら s2', 'Ledger のシステムにランサムウェア → s3。顧客の個人データが漏れたら72時間以内に ICO へ', 'Delta の取締役は、1年前に清算は避けられないと結論づけるべきだったのに、借りを増やし続けた → 支払不能の清算に入れば不当取引（s214）', 'Delta の取締役が清算の3か月前に在庫を隠した → s206。払う気がないのに仕入れを続けていたなら不正取引（s993・s213）']
        },
        {
          title: 'Ledger は大規模組織か',
          example: {
            problem: 'Ledger LLP の前の事業年度: 売上高 £40m、総資産 £12m、従業員300人。Ledger の従業員が、顧客の利益のために顧客の取引先をだます詐欺をした。Ledger は不正防止懈怠（ECCTA s199）の対象か？',
            steps: ['LLP は法人なので relevant body', '基準: 売上高 £36m 超 → 満たす（£40m）', '総資産 £18m 超 → 満たさない（£12m）', '従業員250人超 → 満たす（300人）', '2つ以上を満たすので大規模組織', '従業員は関係者。会社が仕える顧客の利益を図った詐欺 → 要件を満たす'],
            answer: '対象になる。合理的な不正防止手続を示せなければ有罪'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '罪の名前が似ていても、心の状態と対象者が違う。不当取引は「知るべきだった」で足り、取締役だけ、民事だけ。不正取引は不正な意図が要り、誰でも、刑事もある。防止懈怠は会社の罪で、経営陣が知らなくても成立する。抗弁の言い回しは、贈賄が適切な手続、脱税ほう助と不正が合理的な手続。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['まず「誰が・何をした」を分け、罪の要件を1つずつ当てる', '会社の責任は2つの道。防止懈怠（贈賄・脱税ほう助・不正）と、上級管理職の経済犯罪の帰属', '倒産の場面は、だます意図があれば不正取引、知るべきだっただけなら不当取引、財産や帳簿を隠せば s206・s208']
        },
        {
          title: '英単語',
          words: [
            ['dealing / encouraging / disclosing', 'ディーリング', '取引・勧誘・開示（インサイダー取引の3つの罪）'],
            ['tipping off', 'ティッピング オフ', '内報（相手に知らせる罪）'],
            ['money laundering reporting officer', 'エムエルアールオー', 'マネロン報告責任者（MLRO）'],
            ['adequate procedures', 'アデクワット', '適切な手続（贈賄防止の抗弁）'],
            ['market abuse', 'マーケット アビューズ', '市場の濫用']
          ]
        }
      ],
      quiz: [
        { q: 'The finance director of Orbit plc tells a friend about an unannounced takeover bid. The friend buys shares in Orbit plc before the announcement. Under the Criminal Justice Act 1993, which offences have been committed?', choices: ['The director has committed disclosing and the friend has committed dealing', 'Only the friend has committed an offence, because the director did not deal', 'Only the director has committed an offence, because the friend is not an insider', 'Neither, because the information was passed in a private conversation'], answer: 0, explain: '取締役は内部者で、情報を職務の外で開示した。友人は内部者から情報を得た情報源経由の内部者で、取引した。私的な会話でも罪になる。' },
        { q: 'Pam, an employee of Ledger LLP, suspects that a client is laundering money. Which of the following actions would be an offence?', choices: ['Reporting her suspicion to the money laundering reporting officer', 'Telling the client that she has made a report, so that the client can explain', 'Continuing to keep records of the client\'s transactions', 'Asking the client for evidence of identity under customer due diligence'], answer: 1, explain: '報告したことを相手に知らせるのは内報（tipping off）の罪。MLRO への報告は義務で、記録の保存と顧客の確認もマネロン対策の一部。' },
        { q: 'Vix, a partner in Ledger LLP, pays a foreign public official to win a contract for Ledger LLP. Ledger LLP has no anti-bribery policies. Which of the following is correct?', choices: ['Only Vix commits an offence, because Ledger LLP did not know of the payment', 'Ledger LLP commits no offence because the payment was made outside the UK', 'Ledger LLP commits the offence of failing to prevent bribery and cannot rely on the adequate procedures defence', 'Ledger LLP is guilty only if its members approved the payment'], answer: 2, explain: 'Vix は外国公務員への贈賄（s6）。Ledger は関係者の贈賄を防げなかった（s7）。会社が知らなくても成立し、抗弁の適切な手続（adequate procedures）がない。' },
        { q: 'Last year Ledger LLP had turnover of £40m, a balance sheet total of £12m and 300 employees. An employee commits fraud intending to benefit a client of Ledger LLP. Which of the following is correct?', choices: ['Ledger LLP is outside the failure to prevent fraud offence because its balance sheet total is below £18m', 'Ledger LLP is outside the offence because the fraud benefited the client, not Ledger LLP', 'Ledger LLP is guilty only if a senior manager knew of the fraud', 'Ledger LLP may be guilty of failure to prevent fraud unless it had reasonable fraud prevention procedures'], answer: 3, explain: '3つの基準のうち売上高と従業員の2つを満たすので大規模組織。顧客の利益を図る詐欺も対象。経営陣が知らなくても成立し、抗弁は合理的な不正防止手続。' },
        { q: 'A former employee of Ledger LLP uses a password that was never disabled to log into Ledger LLP\'s system and copy client files, intending to sell them to a fraudster. Under the Computer Misuse Act 1990, the most serious offence committed is:', choices: ['Unauthorised access with intent to commit or facilitate further offences', 'Unauthorised access to computer material only', 'No offence, because the password had not been disabled', 'Unauthorised acts causing serious damage to national security'], answer: 0, explain: '退職後のアクセスに権限はない。パスワードが残っていても権限にはならない。データを売って詐欺に使わせる目的があるので s2。国家の安全への深刻な損害（s3ZA）ではない。' },
        { q: 'The directors of Delta Ltd continued to trade and take credit when they ought to have concluded that insolvent liquidation could not be avoided. They had no intention to defraud creditors. Delta Ltd is now in insolvent liquidation. The directors are most likely liable for:', choices: ['Fraudulent trading under s993 Companies Act 2006', 'Fraud in anticipation of winding up under s206 Insolvency Act 1986', 'Wrongful trading under s214 Insolvency Act 1986', 'Failure to prevent fraud under the Economic Crime and Corporate Transparency Act 2023'], answer: 2, explain: 'だます意図がないので不正取引ではない。知るべきだった後も取引を続けたので不当取引（民事）。財産を隠したわけではないので s206 でもない。Delta は小さな私会社で、防止懈怠の話でもない。' }
      ]
    }
  ],
  cards: [
    { id: 'B104-1', lesson: 'B104', q: 'relevant body とは？', a: '法人かパートナーシップ。設立された国は問わない（LLP も入る）' },
    { id: 'B104-2', lesson: 'B104', q: '脱税ほう助の防止懈怠の3段階は？', a: '①納税者の犯罪としての脱税 ②関係者の故意のほう助 ③会社が防げなかった' },
    { id: 'B104-3', lesson: 'B104', q: '不正防止懈怠の大規模組織の基準は？', a: '売上高 £36m 超・総資産 £18m 超・従業員250人超のうち2つ以上' },
    { id: 'B104-4', lesson: 'B104', q: '不正防止懈怠が成立する関係者の意図は？', a: '会社か、会社が仕える顧客に利益を与える意図。会社が被害者なら不成立' },
    { id: 'B104-5', lesson: 'B104', q: '防止懈怠の抗弁の言い回しは？', a: '脱税ほう助・不正は合理的な防止手続、贈賄は適切な手続' },
    { id: 'B104-6', lesson: 'B104', q: 'なぜ？ 「防げなかった」を会社の罪にする', a: '経営陣の関与を示さなくても会社を罰し、予防のしくみを作らせるため' },
    { id: 'B104-7', lesson: 'B104', q: '脱税ほう助の防止懈怠に、納税者の有罪判決は必要？', a: '不要。犯罪としての脱税と、故意のほう助があればよい' },
    { id: 'B105-1', lesson: 'B105', q: 'officer in default とは？', a: '違反を認めた・許した・加わった、または防ぐ合理的な手段を取らなかった役員' },
    { id: 'B105-2', lesson: 'B105', q: 'ECCTA 2023 s196 で会社が有罪になる場合は？', a: '上級管理職が権限の範囲で経済犯罪をしたとき' },
    { id: 'B105-3', lesson: 'B105', q: 'IA 1986 s206 の対象の期間と行為は？', a: '清算開始前12か月以内（と清算中）の財産の隠匿・帳簿の破棄など' },
    { id: 'B105-4', lesson: 'B105', q: '清算人に財産を開示しない罪は？', a: 'IA 1986 s208（清算中の不正行為）' },
    { id: 'B105-5', lesson: 'B105', q: '資格剥奪中に経営に関わると？', a: '犯罪（CDDA s13）＋その間の会社の債務を個人で負う（s15）' },
    { id: 'B105-6', lesson: 'B105', q: '清算前の帳簿の破棄と、清算中の帳簿の改ざんの条文は？', a: '清算前12か月以内は s206、清算中にだます目的なら s209' },
    { id: 'B106-1', lesson: 'B106', q: 'CMA 1990 の s1・s2・s3 の中身と上限は？', a: 's1 無権限アクセス2年、s2 別の犯罪の目的5年、s3 動作の妨害10年' },
    { id: 'B106-2', lesson: 'B106', q: '許された範囲を超えてデータを見た従業員は？', a: 's1 の罪（Allison、1999年）' },
    { id: 'B106-3', lesson: 'B106', q: 's2 は目的の犯罪が実行されないと成立しない？', a: '成立する。後で行うつもりや、実行できなくてもよい' },
    { id: 'B106-4', lesson: 'B106', q: 'サイバー依存型と利用型の違いは？', a: '依存型はコンピュータなしでは起きない（CMA）。利用型は詐欺などをネットで' },
    { id: 'B106-5', lesson: 'B106', q: '個人データの漏えいの ICO への報告期限は？', a: '個人に危険のおそれがあれば、気づいてから72時間以内（UK GDPR）' },
    { id: 'B107-1', lesson: 'B107', q: '不正取引の刑事と民事の条文は？', a: '刑事 CA 2006 s993（最長10年）、民事 IA 1986 s213' },
    { id: 'B107-2', lesson: 'B107', q: '不正取引の責任を負うのは？', a: '債権者をだます事業に、知って関わった人すべて（取締役に限らない）' },
    { id: 'B107-3', lesson: 'B107', q: '不当取引（s214）の要件は？', a: '支払不能の清算＋清算を避けられないと知る・知るべきだった＋その時に取締役' },
    { id: 'B107-4', lesson: 'B107', q: '不当取引の判断基準（s214(4)）は？', a: '同じ職務の人の客観的な基準＋本人が実際に持つ能力' },
    { id: 'B107-5', lesson: 'B107', q: '不当取引の抗弁は？', a: '債権者の損失を最小にするために取るべきあらゆる措置を取った' },
    { id: 'B107-6', lesson: 'B107', q: '不当取引の拠出額の目安は？', a: '知るべきだった日から清算開始までに増えた不足額（裁判所の裁量）' },
    { id: 'B108-1', lesson: 'B108', q: '犯罪の問題を解く順番は？', a: '誰が何をした → どの罪の要件 → 心の状態 → 抗弁 → 会社の責任' },
    { id: 'B108-2', lesson: 'B108', q: '会社が刑事責任を負う2つの道は？', a: '防止懈怠（贈賄・脱税ほう助・不正）と、上級管理職の経済犯罪の帰属' },
    { id: 'B108-3', lesson: 'B108', q: 'マネロンを疑った従業員がすべきこと・してはいけないことは？', a: 'MLRO に報告する。相手に報告を知らせる（tipping off）のは罪' },
    { id: 'B108-4', lesson: 'B108', q: '倒産の場面での3つの見分け方は？', a: 'だます意図→不正取引、知るべきだった→不当取引、財産・帳簿を隠す→s206・s208' }
  ]
});
