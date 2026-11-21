(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 202,
  part: 1,
  partTitle: '法と法体系',
  lessons: [
    {
      id: 'B005',
      no: 5,
      title: 'コモン・ロー：判例が法になる仕組み',
      goal: 'コモン・ローで判例がどう法になり、どの部分がだれを拘束するかを説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(d)'],
      slides: [
        {
          title: '「去年もこうした」がルールになる',
          paras: ['サッカー部で、去年の部長が「雨の日は体育館で練習」と決めた。今年も雨なら同じようにする。前の決定にそろえれば、もめないし、先も読める。', '前の判断を、次の似た場面にも使う。これを国の裁判でやるのがコモン・ロー（common law、英米法）。']
        },
        {
          title: 'コモン・ローとは',
          paras: ['1066年のノルマン征服のあと、イングランドでは国王の裁判官が各地を回り、地方ごとの慣習をまとめて国全体に共通（common）の法にした。', '法の大きな部分が、議会の条文ではなく裁判官の判決の積み重ねにある。これを判例法（case law）という。'],
          list: ['主な国: 英国（イングランド）、米国、カナダ、オーストラリア、インド、シンガポール、香港など', '旧英国領に多い']
        },
        {
          title: '先例拘束の原則（stare decisis）',
          formula: 'stare decisis ＝ 決まったことに従う。似た事件は前の判断と同じように判断する',
          paras: ['上級の裁判所の判断（binding precedent、拘束力のある先例）には、下級の裁判所が従わなければならない。英国の最高裁判所は、正しいと考えるときは自分の過去の判断を変えられる。'],
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="英国の裁判所の階層。上の裁判所の判断が下の裁判所を拘束する" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">上の裁判所の判断が、下を拘束する</text><rect x="40" y="56" width="260" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="170" y="84" text-anchor="middle" font-weight="600" fill="var(--ink)">Supreme Court（最高裁判所）</text><rect x="40" y="112" width="260" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="170" y="140" text-anchor="middle" fill="var(--ink)">Court of Appeal（控訴院）</text><rect x="40" y="168" width="260" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="170" y="196" text-anchor="middle" fill="var(--ink)">High Court（高等法院）</text><rect x="40" y="224" width="260" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="170" y="252" text-anchor="middle" font-size="14" fill="var(--ink)">下級裁判所（county court など）</text><line x1="330" y1="62" x2="330" y2="254" stroke="var(--ink)" stroke-width="1.5"/><polygon points="323,252 337,252 330,266" fill="var(--ink)"/><text x="388" y="160" text-anchor="middle" fill="var(--ink)">拘束する</text><text x="220" y="296" text-anchor="middle" font-size="14" fill="var(--ink)">拘束するのは判決理由（ratio）の部分だけ</text></svg>`,
          caption: '英国（イングランド）の例。米国なども同じ考え方で、上級審が下級審を拘束する。'
        },
        {
          title: '判決のどこが拘束するのか',
          table: { caption: '判決の2つの部分', head: ['部分', '意味', '拘束力'], rows: [['ratio decidendi（判決理由）', '結論を出すのに必要だった法的な理由', 'あり（binding）'], ['obiter dicta（傍論）', 'ついでに述べた意見や、仮定の話', 'なし（persuasive）']] },
          paras: ['例: Donoghue v Stevenson（1932年）。瓶入りのジンジャービールにカタツムリが入っていた事件で、「製造者は最終消費者に注意義務を負う」という判断が示された。過失（negligence）の責任のルールは、この判決から育った。']
        },
        {
          title: '先例に縛られない場面',
          list: ['distinguishing（区別）: 重要な事実が違うとして、先例を当てはめない', 'overruling（判例変更）: 上級の裁判所が、後の別の事件で、前の先例を誤りとして覆す', 'reversing（破棄）: 同じ事件の上訴で、上級の裁判所が下級の判決を覆す'],
          after: '拘束はしないが参考にされる先例（persuasive precedent）もある。傍論、下級の裁判所の判決、他のコモン・ローの国の判決、反対意見（dissenting judgment）など。'
        },
        {
          title: '制定法・エクイティとの関係',
          list: ['議会が作る制定法（legislation / statute）は判例法より強い。食い違えば制定法が優先する', '裁判所は制定法を解釈する。その解釈も先例になる', 'エクイティ（equity、衡平法）: コモン・ローの硬さを補うルール。救済は裁判所の裁量（injunction 差止命令、specific performance 特定履行など）。食い違えばエクイティが優先する'],
          after: '裁判は当事者主義（adversarial）。両当事者が主張と証拠を出し合い、裁判官は中立の審判役になる。'
        },
        {
          title: 'なぜ？ 先例に従う理由',
          paras: ['公平さ: 似た事件を同じように扱う。人によって結論が変わらない。', '予測できる: 結果が読めるので、会社は契約や行動を安心して計画できる。', '柔軟さ: 新しい問題が出ても、裁判官が判決でルールを少しずつ育てられる。', '弱点もある。判例が膨大で探しにくい。誤った先例も、上級の裁判所が覆すまで残る。']
        },
        {
          title: '例題: 先例を当てはめる',
          example: {
            problem: '高等法院（High Court）の裁判官が、飲料の異物で客が病気になった事件を担当する。控訴院（Court of Appeal）の過去の判決 A は、「製造者は最終消費者に注意義務を負う」と判断して製造者に責任を認めた。判決 A は、ついでに「小売店も同じ義務を負うかもしれない」とも述べていた。裁判官は何に拘束される？',
            steps: ['判決 A を出したのは控訴院。高等法院より上なので、拘束しうる', '重要な事実（製造者の製品で消費者が害を受けた）が似ているか確かめる: 似ている', '「製造者は注意義務を負う」は結論に必要な理由: ratio decidendi なので拘束される', '「小売店も…かもしれない」は結論に不要な意見: obiter dicta なので参考になるだけ'],
            answer: '製造者の注意義務には従わなければならない。小売店の部分には従わなくてよい（persuasive にとどまる）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「判例はただの参考」と考えない。コモン・ローでは上級審の ratio は法そのもので、下級審は従う。ただし拘束するのは ratio だけで、obiter は拘束しない。' },
          paras: ['日本では、上級審の判断が下級審を拘束するのは「その事件」だけ（裁判所法4条）。コモン・ローでは後の別の事件まで拘束する。', 'common law には別の意味もある。制定法と比べるときは「判例法」、エクイティと比べるときは「エクイティではない本来のルール」。文脈で読み分ける。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['コモン・ロー＝判例（case law）が主な法源。stare decisis で上級審の判断が下級審を拘束する', '拘束するのは ratio decidendi だけ。obiter dicta は persuasive', '制定法は判例法より優先する。先例は distinguishing・overruling・reversing で外れる']
        },
        {
          title: '英単語',
          words: [
            ['common law', 'コモン ロー', 'コモン・ロー（英米法）。判例を中心とする法体系'],
            ['case law / judicial precedent', '', '判例法 / 判例（先例）'],
            ['stare decisis', 'ステアリ ディサイシス', '先例拘束の原則'],
            ['ratio decidendi', 'レイシオ デシデンダイ', '判決理由（拘束する部分）'],
            ['obiter dicta', 'オビター ディクタ', '傍論（拘束しない部分）'],
            ['binding / persuasive', '', '拘束力のある / 説得的な（参考にされるだけ）'],
            ['distinguish / overrule / reverse', '', '区別する / 判例変更する / 破棄する'],
            ['legislation / statute', 'レジスレイション / スタチュート', '制定法'],
            ['equity', 'エクイティ', '衡平法'],
            ['adversarial', 'アドヴァーサリアル', '当事者主義の（当事者が争う裁判）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about judicial precedent in a common law system is correct?', choices: ['The obiter dicta of a higher court bind lower courts in later cases', 'The ratio decidendi of a higher court binds lower courts in later cases with materially similar facts', 'Decisions of lower courts bind higher courts', 'Once a precedent is set, no court can ever depart from it'], answer: 1, explain: '拘束するのは ratio decidendi。obiter dicta は説得的なだけ。拘束は上から下へで、下級審が上級審を縛ることはない。上級の裁判所は overruling で先例を覆せる。' },
        { q: 'On appeal in the same case, a higher court changes the decision made by the lower court. This is known as:', choices: ['Reversing', 'Overruling', 'Distinguishing', 'Following'], answer: 0, explain: '同じ事件の上訴で判決を覆すのは reversing。overruling は後の別の事件で前の先例を覆すこと。distinguishing は事実が違うとして先例を当てはめないこと。' },
        { q: '議会の制定法と、裁判所の判例法が食い違った。コモン・ローの国ではどうなる？', choices: ['判例法が優先する', '古いほうが優先する', '制定法が優先する', '裁判官が自由に選ぶ'], answer: 2, explain: '制定法は判例法より強い。新しい判例が出ても、制定法に反することはできない。議会は制定法で判例のルールを変えられる。' },
        { q: '高等法院の裁判官が、最高裁判所の過去の判決の中で「ついでに述べられた意見」を見つけた。この部分はどう扱う？', choices: ['最高裁の判決なので必ず従う', '高等法院より上の裁判所の意見なので、使ってはならない', '控訴院が認めた場合だけ従う', '参考にしてよいが、従う義務はない'], answer: 3, explain: 'ついでに述べた意見は obiter dicta で、persuasive（説得的）なだけ。どの裁判所の判決でも、拘束するのは ratio decidendi だけ。' },
        { q: 'Which of the following is NOT a typical feature of a common law legal system?', choices: ['Judges develop the law through their decisions', 'Lower courts follow the decisions of higher courts', 'The main source of law is a comprehensive code drafted by the legislature', 'Court procedure is largely adversarial'], answer: 2, explain: '包括的な法典が主な法源なのはシビル・ロー（次のレッスン）。コモン・ローは判例が育てる法で、裁判は当事者主義。' },
        { q: '先例と重要な事実が違うことを理由に、裁判官が先例を当てはめないことを何という？', choices: ['overruling', 'reversing', 'obiter dicta', 'distinguishing'], answer: 3, explain: 'distinguishing（区別）。先例そのものは否定しないので、上級の裁判所でなくてもできる。overruling は先例そのものを誤りとして覆すことで、上級の裁判所しかできない。' }
      ]
    },
    {
      id: 'B006',
      no: 6,
      title: 'シビル・ロー：法典が中心の法体系',
      goal: 'シビル・ローの法源と裁判官の役割を説明し、コモン・ローとの違いを比べられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(d)'],
      slides: [
        {
          title: '先に「取扱説明書」を作る',
          paras: ['新しい家電を買ったら、まず取扱説明書を開く。どんな場面でどうするかが、最初からまとめて書いてある。', 'コモン・ローが判決という経験を積み上げるのに対し、シビル・ロー（civil law、大陸法）は先に法典（code）という説明書を作り、それに従って判断する。']
        },
        {
          title: 'シビル・ローとは',
          paras: ['法の中心が、議会が作る体系的な法典にある法体系。もとはローマ法（6世紀のユスティニアヌス帝の法典）。世界で最も広く使われている。'],
          list: ['フランス民法典（Code civil、1804年、ナポレオン法典）', 'ドイツ民法典（BGB、1900年施行）', '主な国: フランス、ドイツ、イタリア、スペイン、中南米の多く、日本、韓国など']
        },
        {
          title: '法源と裁判官の役割',
          formula: 'シビル・ローの主な法源 ＝ 法典（code）などの制定法',
          list: ['法典は一般的で抽象的な原則を定める。裁判官はそれを事件の事実に当てはめる', '慣習（custom）が、法典にない部分を補う', '法学者の学説（doctrine）が、法典の解釈に強い影響を持つ', '判例は正式な法源ではない。判決が拘束するのは、その事件の当事者だけ']
        },
        {
          title: '例題: 前の判決に従う義務は？',
          example: {
            problem: 'フランスの地方の裁判所が、売買の争いを扱う。最高裁判所にあたる破毀院（Cour de cassation）は、似た事件で何度も同じ判断を示してきた。地方の裁判所は、その判断に従う法的な義務がある？',
            steps: ['主な法源を確かめる: 民法典などの法典。判例は正式な法源ではない', 'フランス民法典5条: 裁判官は判決で一般的なルールを作ってはならない。だから過去の判決は、後の別の事件を法的に拘束しない', 'ただし同じ判断が何度も続くと、確立した判例（jurisprudence constante）として強い説得力を持つ。従わないと上訴で覆されやすい'],
            answer: '法的な義務はない。裁判官は民法典を自分で事実に当てはめる。ただし確立した判例は実際には尊重され、従うことが多い'
          }
        },
        {
          title: '裁判の進め方：職権主義',
          paras: ['シビル・ローの裁判は職権主義（inquisitorial）が多い。裁判官が自分から事実を調べ、証人に質問し、手続を主導する。', 'コモン・ローは当事者主義（adversarial）。両当事者が争い、裁判官は中立の審判役になる。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="シビル・ローでは議会が法典を作り裁判官が当てはめる。コモン・ローでは裁判官の判決が先例になる" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">法を作るのはだれか</text><text x="116" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">シビル・ロー</text><text x="324" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">コモン・ロー</text><rect x="20" y="80" width="192" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="109" text-anchor="middle" font-weight="600" fill="var(--ink)">議会が法典を作る</text><rect x="20" y="150" width="192" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="179" text-anchor="middle" fill="var(--ink)">裁判官が当てはめる</text><rect x="20" y="220" width="192" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="249" text-anchor="middle" fill="var(--ink)">当事者だけを拘束</text><rect x="228" y="80" width="192" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="109" text-anchor="middle" fill="var(--ink)">裁判官が判決を出す</text><rect x="228" y="150" width="192" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="179" text-anchor="middle" fill="var(--ink)">判決理由が先例に</text><rect x="228" y="220" width="192" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="249" text-anchor="middle" fill="var(--ink)">後の事件も拘束</text><line x1="116" y1="128" x2="116" y2="142" stroke="var(--ink)" stroke-width="1.5"/><polygon points="110,140 122,140 116,149" fill="var(--ink)"/><line x1="116" y1="198" x2="116" y2="212" stroke="var(--ink)" stroke-width="1.5"/><polygon points="110,210 122,210 116,219" fill="var(--ink)"/><line x1="324" y1="128" x2="324" y2="142" stroke="var(--ink)" stroke-width="1.5"/><polygon points="318,140 330,140 324,149" fill="var(--ink)"/><line x1="324" y1="198" x2="324" y2="212" stroke="var(--ink)" stroke-width="1.5"/><polygon points="318,210 330,210 324,219" fill="var(--ink)"/></svg>`
        },
        {
          title: 'コモン・ローとの比較',
          table: { caption: '2つの法体系', head: ['項目', 'コモン・ロー', 'シビル・ロー'], rows: [['主な法源', '判例法と制定法', '法典（制定法）'], ['判例の拘束力', 'あり（stare decisis）', '原則なし（その事件だけ）'], ['裁判官の役割', '判決で法を育てる', '法典を当てはめる'], ['法の書き方', '事件ごとに具体的', '一般的な原則'], ['裁判の進め方', '当事者主義', '職権主義'], ['代表的な国', '英国・米国', 'フランス・ドイツ・日本']] }
        },
        {
          title: 'なぜ？ 法典にまとめる理由',
          paras: ['フランス革命の前、旧体制の裁判所（パルルマン、parlement）は国王の改革をたびたび妨げた。その経験から、裁判官に法を作らせない考えが強まった。法は国民の代表である議会が作り、裁判官は当てはめるだけにする。', 'もう1つは明確さと統一。法を1つの法典にまとめれば、だれでも読めて、国中で同じ法が使える。弱点は、社会の変化に法典が追いつかないと、改正まで時間がかかること。']
        },
        {
          title: '日本はシビル・ロー',
          paras: ['日本の民法（1898年施行）は、ドイツ民法の草案とフランス民法の影響を受けている。日本の「六法」という感覚は、シビル・ローの感覚そのもの。', '英国のスコットランド、米国のルイジアナ州、カナダのケベック州、南アフリカなどは、2つが混ざった混合法（mixed system）になっている。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '法体系の名前の civil law（大陸法）と、刑事法の反対の civil law（民事法）を混同しない。同じ英語でも意味が違う。「法典が中心」「common law と比べて」の文脈なら大陸法。「刑事事件と比べて」「損害賠償」の文脈なら民事法。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['シビル・ロー＝法典（code）が主な法源。ローマ法がルーツで、フランス・ドイツ・日本など', '裁判官は法典を当てはめる。判決は原則としてその事件の当事者だけを拘束する', '裁判は職権主義（inquisitorial）。コモン・ローは当事者主義（adversarial）']
        },
        {
          title: '英単語',
          words: [
            ['civil law (system)', 'シビル ロー', 'シビル・ロー（大陸法）。法典を中心とする法体系'],
            ['code / codified law', 'コード / コディファイド ロー', '法典 / 法典化された法'],
            ['Roman law', 'ローマン ロー', 'ローマ法'],
            ['custom', 'カスタム', '慣習'],
            ['doctrine', 'ドクトリン', '学説（法学者の著作）'],
            ['jurisprudence constante', 'ジュリスプリュダンス コンスタント', '確立した判例（フランス）'],
            ['inquisitorial', 'インクウィジトリアル', '職権主義の（裁判官が主導する裁判）'],
            ['mixed legal system', '', '混合法（2つ以上の法体系が混ざったもの）']
          ]
        }
      ],
      quiz: [
        { q: 'In a civil law system, what is the primary source of law?', choices: ['Codified legislation', 'Judicial precedent', 'Custom', 'Academic writings'], answer: 0, explain: '主な法源は法典などの制定法。慣習と学説はそれを補う。判例はコモン・ローの主な法源で、シビル・ローでは正式な法源ではない。' },
        { q: 'Which type of court procedure is typical of civil law systems?', choices: ['Adversarial', 'Precedent-based', 'Inquisitorial', 'Jury-led'], answer: 2, explain: 'シビル・ローは職権主義（inquisitorial）。裁判官が自分で事実を調べる。adversarial（当事者主義）はコモン・ローの特徴。' },
        { q: 'Which of the following statements about civil law systems is correct?', choices: ['Judges must follow the earlier decisions of higher courts under stare decisis', 'The law is set out as general principles in codes, which judges apply to the facts', 'The term refers only to disputes between private persons', 'The system developed from the decisions of English royal courts'], answer: 1, explain: '法典の一般原則を事実に当てはめる。stare decisis とイングランドの国王の裁判所はコモン・ローの話。「私人どうしの争いだけ」は、民事法という別の意味の civil law との混同。' },
        { q: '日本の法体系はどれに当たる？', choices: ['コモン・ロー', 'シビル・ロー', 'シャリーア法', '法体系をもたない'], answer: 1, explain: '日本は法典（六法）が中心のシビル・ロー。最高裁判例は実際には強く尊重されるが、法的に後の別の事件を拘束する先例拘束の原則はない。' },
        { q: '「刑事事件ではなく、私人どうしの損害賠償を扱う法」という意味で使う civil law は、日本語で何？', choices: ['大陸法', '英米法', '国際法', '民事法'], answer: 3, explain: 'この文脈の civil law は民事法（刑事法の反対）。法典を中心とする法体系という意味の civil law（大陸法）とは別もの。' }
      ]
    },
    {
      id: 'B007',
      no: 7,
      title: 'シャリーア法：イスラム法の法源',
      goal: 'シャリーア法の4つの法源と優先順位、商取引への影響を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(d)'],
      slides: [
        {
          title: '迷ったら、まず家訓',
          paras: ['ある家には代々の家訓がある。迷ったら、まず家訓を見る。書いていなければ、創業者が実際にどうしたかを見る。それでも決まらなければ、家族の合意。最後は「似た場面でどうしたか」から考える。', 'シャリーア法の法源も、これに近い順番で使われる。']
        },
        {
          title: 'シャリーア法とは',
          paras: ['シャリーア（Sharia）はアラビア語で「（水場への）道」。イスラム教の教えに基づく法で、宗教と法を分けないのが特徴。', '人間の法学者が法源を解釈して導いた、具体的な法の理解をフィクフ（fiqh、イスラム法学）という。'],
          list: ['ibadat（イバーダート）: 礼拝・断食など、神への義務', 'muamalat（ムアーマラート）: 契約・取引・家族・相続など、人と人の関係'],
          after: '行いは「義務・推奨・許容・忌避・禁止」の5段階で評価される。商取引は muamalat の側に入る。'
        },
        {
          title: '4つの法源と優先順位',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="シャリーア法の4つの法源。コーラン、スンナ、イジュマー、キヤースの順に強い" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">4つの法源と優先順位</text><rect x="20" y="52" width="200" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="120" y="80" text-anchor="middle" font-weight="600" fill="var(--ink)">1 コーラン（Quran）</text><text x="236" y="80" font-size="14" fill="var(--ink)">神の言葉とされる聖典</text><rect x="20" y="108" width="200" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="136" text-anchor="middle" fill="var(--ink)">2 スンナ（Sunnah）</text><text x="236" y="136" font-size="14" fill="var(--ink)">預言者の言葉と行い</text><rect x="20" y="164" width="200" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="192" text-anchor="middle" fill="var(--ink)">3 イジュマー（Ijma）</text><text x="236" y="192" font-size="14" fill="var(--ink)">法学者の合意</text><rect x="20" y="220" width="200" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="248" text-anchor="middle" fill="var(--ink)">4 キヤース（Qiyas）</text><text x="236" y="248" font-size="14" fill="var(--ink)">似た場面からの類推</text><text x="220" y="282" text-anchor="middle" font-size="14" fill="var(--quiet)">上ほど強い。下の法源は上に反してはならない</text></svg>`,
          caption: '1と2は啓示に基づく第一の法源（primary sources）。3と4は人間の推論による第二の法源（secondary sources）。'
        },
        {
          title: '法源を1つずつ',
          list: ['コーラン（Quran）: イスラム教徒が神の言葉と信じる聖典。最も上位の法源', 'スンナ（Sunnah）: 預言者ムハンマドの言葉・行い・黙認。ハディース（hadith）という記録で伝わる', 'イジュマー（Ijma）: ある問題についてのイスラム法学者の合意', 'キヤース（Qiyas）: 類推（analogy）。既存のルールを、同じ理由がある新しい場面に広げる'],
          after: '資格のある学者が自分で推論することをイジュティハード（ijtihad）、学者が示す法的な見解をファトワー（fatwa）という。'
        },
        {
          title: '例題: キヤースで考える',
          example: {
            problem: 'コーランは酒（khamr）を禁じている。ある薬物は、コーランにもスンナにも直接の言及がない。キヤースでどう判断する？',
            steps: ['元のルールを確かめる: 酒は禁止（コーラン）', '禁止の理由（原因）を探す: 人を酔わせ、判断力を失わせるから', '新しい場面に同じ理由があるか: その薬物も人を酔わせる → ある', '同じ理由があるので、同じルールを広げる'],
            answer: 'その薬物も禁止される。これがキヤース（類推）。多くの学者がこの結論で一致すれば、イジュマー（合意）にもなる'
          }
        },
        {
          title: '商取引への影響',
          list: ['リバー（riba）: 利息の禁止。ふつうの利息付きの融資や預金ができない', 'ガラル（gharar）: 過度な不確実性の禁止。目的物や代金があいまいな契約は無効になりうる', 'マイシル（maysir）: 賭博・投機の禁止', '禁じられた物（酒・豚肉など）の取引の禁止']
        },
        {
          title: 'イスラム金融の工夫',
          table: { caption: '利息を使わない取引の例', head: ['仕組み', '中身'], rows: [['murabaha（ムラバハ）', '銀行が商品を買い、上乗せ額を示して後払いで売る'], ['ijara（イジャーラ）', '銀行が資産を買って貸す（リース）'], ['mudaraba（ムダーラバ）', '一方がお金、他方が経営を出し、利益を約束の割合で分ける。損失はお金を出した側が負う'], ['musharaka（ムシャーラカ）', '共同出資。利益は約束の割合、損失は出資の割合で負う'], ['sukuk（スクーク）', '資産に裏付けられた証書（イスラム債）']] },
          paras: ['なぜ？ 利息は、リスクを負わずにお金がお金を生む不公正な利益とされる。だから実物の売買や、利益も損失も分け合うリスクの共有から利益を得る形にする。']
        },
        {
          title: 'どこまで使われているか',
          paras: ['国によって大きく違う。サウジアラビアなどは法体系の土台にしている。イスラム教徒の多い国の多くは、家族・相続などにシャリーアを使い、商取引などは法典（シビル・ロー型）やコモン・ロー型の法で決める混合型。', '裁判官（qadi、カーディー）は法源と学者の解釈を当てはめる。前の判決に縛られる先例拘束はない。法学派（madhhab）によって解釈も違い、スンナ派には4つの学派がある。']
        },
        {
          title: '3つの法体系の比較',
          table: { caption: 'A1(d) の3つの法体系', head: ['法体系', '主な法源', '裁判官の役割'], rows: [['コモン・ロー', '判例法と制定法', '先例に従い、判決で法を育てる'], ['シビル・ロー', '法典（制定法）', '法典を事実に当てはめる'], ['シャリーア法', 'コーラン、スンナ、イジュマー、キヤース', '法源と法学者の解釈を当てはめる']] },
          note: { kind: 'warn', text: '順番を逆にしない。イジュマーとキヤースは人間の推論による第二の法源で、コーランとスンナに反してはならない。また、シャリーア＝刑罰の法ではない。契約・家族・金融まで広く扱う。stare decisis はシャリーア法の法源ではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['法源は コーラン → スンナ → イジュマー（合意）→ キヤース（類推）の順に強い', '宗教と法が一体。人間の学者による法の理解がフィクフ', 'リバー（利息）禁止のため、イスラム金融は売買・リース・利益と損失の分担で利益を得る']
        },
        {
          title: '英単語',
          words: [
            ['Sharia law', 'シャリーア ロー', 'シャリーア法（イスラム法）'],
            ['Quran', 'クルアーン', 'コーラン（最上位の法源）'],
            ['Sunnah / hadith', 'スンナ / ハディース', '預言者の言行 / その記録'],
            ['Ijma', 'イジュマー', '法学者の合意'],
            ['Qiyas', 'キヤース', '類推（analogy）'],
            ['fiqh', 'フィクフ', 'イスラム法学（人間による法の理解）'],
            ['fatwa', 'ファトワー', '学者が示す法的な見解'],
            ['riba', 'リバー', '利息（禁止される）'],
            ['gharar', 'ガラル', '過度な不確実性（禁止される）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is the primary and highest source of Sharia law?', choices: ['Ijma', 'Qiyas', 'The Quran', 'A fatwa'], answer: 2, explain: '最上位はコーラン。イジュマー（合意）とキヤース（類推）は人間の推論による第二の法源。ファトワーは学者の見解で、法源の4つには入らない。' },
        { q: 'In Sharia law, Qiyas refers to which of the following?', choices: ['The consensus of Islamic scholars', 'Reasoning by analogy from an existing rule', 'The sayings and practices of the Prophet', 'A binding decision of a higher court'], answer: 1, explain: 'キヤースは類推。学者の合意（consensus）はイジュマー、預言者の言葉と行いはスンナ。上級の裁判所の拘束力ある判断はコモン・ローの binding precedent の説明で、シャリーア法の法源ではない。' },
        { q: 'Which of the following is NOT a recognised source of Sharia law?', choices: ['Sunnah', 'Ijma', 'Qiyas', 'Stare decisis'], answer: 3, explain: 'stare decisis（先例拘束）はコモン・ローの原則。シャリーア法の4つの法源は、コーラン・スンナ・イジュマー・キヤース。' },
        { q: 'イジュマー（Ijma）とは何？', choices: ['預言者ムハンマドの言葉と行い', '似た場面からの類推', 'ある問題についてのイスラム法学者の合意', '神の言葉とされる聖典'], answer: 2, explain: 'イジュマーは合意。預言者の言葉と行いはスンナ、類推はキヤース、聖典はコーラン。順番は コーラン → スンナ → イジュマー → キヤース。' },
        { q: 'Under the Sharia prohibition of riba, which of the following is NOT permitted?', choices: ['Charging a fixed rate of interest on a loan', 'Selling goods at a disclosed mark-up with deferred payment', 'Leasing an asset in return for rent', 'Sharing the profits of a joint venture'], answer: 0, explain: 'riba は利息。固定の利息を取る融資は禁止。上乗せ額を示した後払いの売買は murabaha、賃料を取る資産の貸付は ijara、共同事業の利益の分配は musharaka で、どれもイスラム金融で使われる仕組み。' },
        { q: '「法典の一般原則を裁判官が事実に当てはめ、判決は原則としてその事件の当事者だけを拘束する」。この説明に合う法体系は？', choices: ['コモン・ロー', 'シビル・ロー', 'シャリーア法', '3つすべて'], answer: 1, explain: '法典が中心なのはシビル・ロー。コモン・ローでは判決の ratio が後の事件も拘束する。シャリーア法の主な法源は法典ではなく、コーランなどの宗教上の法源。' }
      ]
    }
  ],
  cards: [
    { id: 'B005-1', lesson: 'B005', q: 'コモン・ロー（common law）とは？', a: '判例法が主な法源の法体系。イングランドで生まれ、英国・米国など旧英国領に広がった' },
    { id: 'B005-2', lesson: 'B005', q: 'stare decisis とは？', a: '先例拘束の原則。似た事件は前の判断に従い、上級審の判断が下級審を拘束する' },
    { id: 'B005-3', lesson: 'B005', q: '判決のどの部分が後の事件を拘束する？', a: 'ratio decidendi（判決理由）だけ。obiter dicta（傍論）は persuasive' },
    { id: 'B005-4', lesson: 'B005', q: 'overruling と reversing の違いは？', a: 'overruling は後の別の事件で先例を覆す。reversing は同じ事件の上訴で判決を覆す' },
    { id: 'B005-5', lesson: 'B005', q: 'distinguishing とは？', a: '重要な事実が違うとして、先例を当てはめないこと' },
    { id: 'B005-6', lesson: 'B005', q: '制定法と判例法が食い違ったら？', a: '制定法（legislation）が優先する' },
    { id: 'B005-7', lesson: 'B005', q: 'なぜ先例に従う？', a: '似た事件を同じに扱う公平さと、結果を予測できること' },
    { id: 'B006-1', lesson: 'B006', q: 'シビル・ロー（civil law）の主な法源は？', a: '法典（code）などの制定法。慣習と学説が補う' },
    { id: 'B006-2', lesson: 'B006', q: 'シビル・ローで判決はだれを拘束する？', a: '原則としてその事件の当事者だけ。確立した判例は事実上の影響力をもつ' },
    { id: 'B006-3', lesson: 'B006', q: 'inquisitorial（職権主義）とは？', a: '裁判官が主導して事実を調べる裁判の進め方。シビル・ローの特徴' },
    { id: 'B006-4', lesson: 'B006', q: '代表的な2つの法典は？', a: 'フランス民法典（1804年、ナポレオン法典）とドイツ民法典（BGB、1900年施行）' },
    { id: 'B006-5', lesson: 'B006', q: 'civil law の2つの意味は？', a: '法体系の名前なら大陸法。刑事法の反対なら民事法' },
    { id: 'B006-6', lesson: 'B006', q: 'なぜ法典にまとめる？', a: '法は議会が作り裁判官は当てはめるだけにするため。だれでも読めて国中で統一できる' },
    { id: 'B007-1', lesson: 'B007', q: 'シャリーア法の4つの法源と順番は？', a: 'コーラン → スンナ → イジュマー → キヤース' },
    { id: 'B007-2', lesson: 'B007', q: 'イジュマー（Ijma）とは？', a: 'ある問題についてのイスラム法学者の合意' },
    { id: 'B007-3', lesson: 'B007', q: 'キヤース（Qiyas）とは？', a: '類推。既存のルールを、同じ理由がある新しい場面に広げる' },
    { id: 'B007-4', lesson: 'B007', q: 'スンナ（Sunnah）とは？', a: '預言者ムハンマドの言葉・行い・黙認。ハディースで伝わる' },
    { id: 'B007-5', lesson: 'B007', q: 'リバー（riba）の禁止とは？', a: '利息の禁止。利益は売買・リース・利益と損失の分担から得る' },
    { id: 'B007-6', lesson: 'B007', q: 'murabaha とは？', a: '銀行が商品を買い、上乗せ額を示して後払いで売る仕組み' },
    { id: 'B007-7', lesson: 'B007', q: 'シャリーア法の第一の法源と第二の法源は？', a: '第一（primary）: コーランとスンナ。第二（secondary）: イジュマーとキヤース' }
  ]
});
