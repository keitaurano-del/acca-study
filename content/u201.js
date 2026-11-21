(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 201,
  part: 1,
  partTitle: '法と法体系',
  lessons: [
    {
      id: 'B001',
      no: 1,
      title: '法とは何か：法の定義と種類',
      goal: '法（law）を道徳や慣習と区別して定義し、公法と私法・刑事法と民事法・国内法と国際法・制定法と判例法の区別を説明できるようになる',
      minutes: 14,
      recall: false,
      exam: 'both',
      outcomes: ['K3:A1(a)'],
      slides: [
        {
          title: 'マンションの規約と、法律のちがい',
          paras: ['マンションのゴミ出しルールを破ると、管理組合から注意される。でも警察は来ないし、裁判所も動かない。', '他人の自転車を盗めば警察が来る。家賃を払わなければ、大家は裁判所に訴えて支払いを命じてもらえる。この「国が最後に力ずくで守らせる」かどうかが、法とほかのルールの大きなちがいになる。']
        },
        {
          title: '法（law）の定義',
          formula: '法（law）＝ 国家が作るか認め、裁判所などを通じて強制できる社会のルール',
          list: ['社会全体に当てはまる（特定の団体の中だけではない）', '決まった手続で作られる（議会の立法、裁判所の判決など）', '破ると制裁（sanction）がある。刑罰や、損害賠償の命令など'],
          after: '道徳（morality）や慣習（custom）も行動を決めるルールだが、国家が強制しない。法と重なる部分（盗むな、など）もあるが、同じものではない。'
        },
        {
          title: 'なぜ？ 法がある理由',
          paras: ['ルールが前もって分かり、破ったときの結果も決まっていれば、人は安心して行動を計画できる。争いも、力の強い方が勝つのではなく、裁判という決まった手続で解決できる。', 'ビジネスでは特に大事になる。会ったこともない海外の会社と契約できるのは、相手が約束を破れば裁判所で守らせられる、という見込みがあるから。K3 で学ぶ内容は、ほとんどがこの「取引を支えるルール」になる。']
        },
        {
          title: '法の地図',
          paras: ['法は、いくつかの切り口で分けられる。試験では、ある法がどの種類に入るかを問われる。'],
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="法を分ける4つの切り口: 公法と私法、刑事法と民事法、国内法と国際法、制定法と判例法" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">法の分け方（4つの切り口）</text><rect x="20" y="48" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="232" y="48" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="114" y="72" text-anchor="middle" font-size="15" fill="var(--ink)">公法：国と人の関係</text><text x="114" y="92" text-anchor="middle" font-size="13" fill="var(--quiet)">public law</text><text x="326" y="72" text-anchor="middle" font-size="15" fill="var(--ink)">私法：人と人の関係</text><text x="326" y="92" text-anchor="middle" font-size="13" fill="var(--quiet)">private law</text><text x="220" y="80" text-anchor="middle" font-size="13" fill="var(--quiet)">vs</text><rect x="20" y="112" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="232" y="112" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="114" y="136" text-anchor="middle" font-size="15" fill="var(--ink)">刑事法：罪と罰</text><text x="114" y="156" text-anchor="middle" font-size="13" fill="var(--quiet)">criminal law</text><text x="326" y="136" text-anchor="middle" font-size="15" fill="var(--ink)">民事法：争いと救済</text><text x="326" y="156" text-anchor="middle" font-size="13" fill="var(--quiet)">civil law</text><text x="220" y="144" text-anchor="middle" font-size="13" fill="var(--quiet)">vs</text><rect x="20" y="176" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="232" y="176" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="114" y="200" text-anchor="middle" font-size="15" fill="var(--ink)">国内法：一つの国の中</text><text x="114" y="220" text-anchor="middle" font-size="13" fill="var(--quiet)">national (domestic) law</text><text x="326" y="200" text-anchor="middle" font-size="15" fill="var(--ink)">国際法：国と国の関係</text><text x="326" y="220" text-anchor="middle" font-size="13" fill="var(--quiet)">international law</text><text x="220" y="208" text-anchor="middle" font-size="13" fill="var(--quiet)">vs</text><rect x="20" y="240" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="232" y="240" width="188" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="114" y="264" text-anchor="middle" font-size="15" fill="var(--ink)">制定法：議会が作る</text><text x="114" y="284" text-anchor="middle" font-size="13" fill="var(--quiet)">statute (legislation)</text><text x="326" y="264" text-anchor="middle" font-size="15" fill="var(--ink)">判例法：裁判所が作る</text><text x="326" y="284" text-anchor="middle" font-size="13" fill="var(--quiet)">case law</text><text x="220" y="272" text-anchor="middle" font-size="13" fill="var(--quiet)">vs</text><rect x="20" y="308" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="334" text-anchor="middle" font-size="15" fill="var(--ink)">1つのルールが、複数の切り口に同時に入る</text></svg>`,
          caption: '例: 窃盗の罪は「公法・刑事法・国内法・制定法」に同時に入る。'
        },
        {
          title: '公法と私法、国内法と国際法',
          list: ['公法（public law）: 国と個人の関係。憲法（constitutional law）、行政法、刑事法', '私法（private law）: 個人や会社どうしの関係。契約法、不法行為法（tort）、会社法など', '国内法（national / domestic law）: 1つの国の中で効力を持つ', '国際法（international law）: 主に国と国の関係。条約（treaty）など'],
          after: '外国がからむ私人の争いでどの国の法を使うかは、国際私法（conflict of laws）の問題。B008 で学ぶ。'
        },
        {
          title: '制定法と判例法',
          paras: ['制定法（statute law / legislation）は、議会が作った成文のルール。英国では Act of Parliament という。判例法（case law）は、裁判所の判決の積み重ねから生まれるルール。', '日本では「法律＝国会が作った条文」と考えがち。しかし英国や米国などコモン・ロー（common law）の国では、裁判官の判決そのものが法になる。会社法などの多くは、条文と判例の両方を見ないと分からない。仕組みは B005 で学ぶ。']
        },
        {
          title: 'K3 試験の全体像',
          paras: ['K3 は2時間のコンピュータ試験（CBE）。2点の objective test 問題が50問で100点、全問必須、合格点は50%。長い記述問題はない。2027年7月から、好きな日に受けられる（on demand）。'],
          table: { caption: 'K3 Global の7つの部', head: ['部', '内容'], rows: [['A', '法と法体系、国際取引と法の抵触'], ['B', '国際物品売買（国連のウィーン売買条約 CISG）'], ['C', 'インコタームズ、運送書類、信用状'], ['D', '代理、パートナーシップ、会社法'], ['E', '会社の清算（倒産法）'], ['F', 'インサイダー取引、資金洗浄、贈賄などの犯罪'], ['G', '知的財産法']] }
        },
        {
          title: 'このコースの法の基準',
          paras: ['日本向けのバリアントはないので、ACCA がすすめる Global 版（K3 GLO）で学ぶ。', 'B は CISG、C は ICC のインコタームズと信用状統一規則（UCP 600）で教える。D〜G のシラバスは国を指定していないが、英国法に特有の用語で書かれている。そこでこのコースは、D〜G を英国（イングランド）の法律をモデルに教える。これは ACCA が明言したことではなく、シラバスの文言から判断したもの。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「civil law」には2つの意味がある。(1) 刑事法に対する民事法（このレッスン）。(2) フランスやドイツ、日本のような法典中心の法体系（大陸法、B006）。問題文が「刑事か民事か」を聞いているのか、「法体系の種類」を聞いているのかを文脈で見分ける。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['法＝国家が強制できる社会のルール。道徳や慣習は国家が強制しない', '公法は国と人、私法は人と人。刑事法は公法に入る', '法は制定法（議会）と判例法（裁判所）から生まれる。コモン・ローの国では判決も法']
        },
        {
          title: '英単語',
          words: [
            ['law', 'ロー', '法'],
            ['sanction', 'サンクション', '制裁（法を破ったときの不利益）'],
            ['public law / private law', '', '公法 / 私法'],
            ['national (domestic) law', 'ドメスティック', '国内法'],
            ['international law', '', '国際法'],
            ['statute / legislation', 'スタチュート / レジスレーション', '制定法（議会が作った法）'],
            ['case law', 'ケース ロー', '判例法'],
            ['tort', 'トート', '不法行為（契約違反以外の民事上の違法行為）']
          ]
        }
      ],
      quiz: [
        { q: '法（law）と道徳（morality）のいちばん大きなちがいは？', choices: ['道徳は文字で書かれていない', '法は必ず道徳より厳しい', '法は国家が強制でき、破ると制裁がある', '法は国会が作ったものだけを指す'], answer: 2, explain: '道徳は国家が強制しない。法が道徳より厳しいとは限らない（道徳に反しても違法でない行為は多い）。法には国会の制定法だけでなく、裁判所が作る判例法も入る。' },
        { q: 'Which of the following best describes law?', choices: ['A set of rules which is enforceable by the state through the courts', 'A set of moral principles which every person ought to follow', 'The customs of a community, which members follow voluntarily', 'Rules made only by Parliament in the form of written statutes'], answer: 0, explain: '道徳（moral principles）や慣習（customs）は国家が強制しない。「議会の制定法だけ」は、裁判所が作る判例法（case law）を見落としている。' },
        { q: 'Which of the following is an example of private law?', choices: ['Criminal law', 'Constitutional law', 'The law of contract', 'Administrative law'], answer: 2, explain: '契約法は個人・会社どうしの関係なので私法。刑事法・憲法・行政法は、国と個人の関係を扱う公法。' },
        { q: 'Which of the following statements is correct?\n(1) Case law is created by the decisions of judges.\n(2) International law governs only the relations between private individuals.', choices: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], answer: 0, explain: '(1) は正しい。(2) は誤り。国際法は主に国と国の関係を決める。私人どうしの国際的な争いでどの国の法を使うかは、国際私法（conflict of laws）の問題。' },
        { q: '問題文に「civil law」とあった。正しい読み方は？', choices: ['いつも刑事法に対する「民事法」の意味', '文脈で、刑事法に対する「民事法」か、法典中心の「大陸法」かを見分ける','いつもフランスやドイツの「大陸法」の意味', 'いつも「市民が作った法」の意味'], answer: 1, explain: 'civil law には2つの意味がある。刑事か民事かの話なのか、法体系の種類の話なのかで決まる。' },
        { q: 'K3 の本番試験の形式として正しいものは？', choices: ['1点の問題が100問、合格点は50%', '2点の問題が25問と記述問題、合格点は50%', '2点の問題が50問、合格点は70%', '2点の問題が50問、合格点は50%'], answer: 3, explain: 'K3 は2時間で、2点の objective test 問題が50問（100点）。合格点は50%。現行 LW のような長い問題（MTQ）はない。' }
      ]
    },
    {
      id: 'B002',
      no: 2,
      title: '刑事法と民事法の違い',
      goal: '刑事事件と民事事件を、目的・当事者・立証責任と立証基準・結果のちがいで説明し、1つの出来事が両方になる場合を判断できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(a)'],
      slides: [
        {
          title: '1つの事故、2つの裁判',
          paras: ['自転車で歩道を猛スピードで走り、歩行者にぶつかって骨折させたとする。', '国は「危険な運転をした」として罰しようとする。これが刑事（criminal）。けがをした人は「治療費と休んだ分の給料を払え」と求める。これが民事（civil）。同じ出来事から、目的のちがう2つの手続が別々に進む。']
        },
        {
          title: '刑事と民事のちがい',
          table: { caption: '英国（イングランド）の例', head: ['項目', '刑事 criminal', '民事 civil'], rows: [['目的', '社会のために罰する', '被害を受けた人を救う'], ['訴える人', '国（prosecution、訴追側）', '被害を受けた人（claimant、原告）'], ['訴えられる人', 'defendant（被告人）', 'defendant（被告）'], ['立証基準', '合理的な疑いを超えて', '蓋然性の優越'], ['結果', '有罪（guilty）なら刑罰', '責任あり（liable）なら損害賠償など'], ['事件名', 'R v Smith', 'Smith v Jones']] }
        },
        {
          title: 'どこまで証明すれば勝てるか',
          paras: ['証明する責任（burden of proof）は、訴えた側にある。刑事では訴追側、民事では原告。どこまで証明するか（standard of proof）は大きくちがう。'],
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="刑事は合理的な疑いが残らないところまで、民事は半分を超えれば勝ち" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">どこまで証明すれば勝てるか</text><text x="420" y="62" text-anchor="end" font-size="15" fill="var(--ink)">刑事：合理的な疑いが残らない</text><text x="420" y="82" text-anchor="end" font-size="13" fill="var(--quiet)">beyond reasonable doubt</text><line x1="380" y1="88" x2="380" y2="100" stroke="var(--ink)" stroke-width="1.5"/><rect x="40" y="100" width="360" height="24" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="370" y="100" width="30" height="24" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><line x1="220" y1="100" x2="220" y2="152" stroke="var(--ink)" stroke-width="1.5"/><text x="40" y="144" fill="var(--quiet)">0%</text><text x="400" y="144" text-anchor="end" fill="var(--quiet)">100%</text><text x="220" y="172" text-anchor="middle" font-size="15" fill="var(--ink)">民事：半分を超えれば勝ち</text><text x="220" y="192" text-anchor="middle" font-size="13" fill="var(--quiet)">balance of probabilities</text><text x="220" y="232" text-anchor="middle" fill="var(--ink)">％は目安。法律が数字で決めているわけではない</text></svg>`,
          caption: '民事は「どちらかといえば本当らしい（more likely than not）」で足りる。'
        },
        {
          title: 'なぜ？ 基準がちがう理由',
          paras: ['刑事では、負けると刑務所に入るなど自由を奪われることがある。相手は警察や検察を持つ国という強い存在。だから「無実の人を罰する」誤りをできるだけ避けるため、高い基準にしている。', '民事は対等な2者の争い。どちらの言い分がよりもっともらしいかで決めるのが公平になる。そのため、刑事で無罪になった人が、同じ出来事で民事では賠償を命じられることもある。']
        },
        {
          title: '結果のちがい：刑罰と救済',
          list: ['刑事の刑罰（sentence）: 罰金（fine）、拘禁（imprisonment）、社会奉仕などの社会内刑（community sentence）', '民事の救済（remedy）: 損害賠償（damages）、差止命令（injunction、行為をやめさせる）、特定履行（specific performance、約束どおりの実行を命じる）'],
          after: '罰金は国に納めるもので、被害者のお金にはならない。刑事の裁判所が被害者への賠償を命じることもあるが、被害者がお金を取り戻す中心は民事の手続になる。'
        },
        {
          title: '例題: 経理担当者の横領',
          example: {
            problem: 'X社の経理担当者が、会社の口座から $50,000 を自分の口座に移していた。どんな手続が考えられるか。',
            steps: ['刑事: 窃盗や詐欺の罪として、国が訴追する。事件名は R v（担当者の名前）', '刑事で有罪にするには、合理的な疑いを超える証明が必要', '民事: X社が原告となり、$50,000 の返還や損害賠償を求めて訴える', '民事は蓋然性の優越で足りる。刑事の結果を待たずに訴えることもできる'],
            answer: '刑事（国が訴追・刑罰）と民事（X社が訴え・お金の回復）の両方が、別々に進みうる'
          }
        },
        {
          title: '日本語の感覚とのずれ',
          list: ['日本語では刑事は「被告人」、民事は「被告」と呼び分ける。英語はどちらも defendant', '民事で負けても「有罪」とは言わない。英語では liable（責任がある）', 'not guilty は「無実が証明された」ではなく、「有罪の証明が足りなかった」という意味', '英国では、刑事の訴追は主に検察庁（Crown Prosecution Service）が国の名で行う。事件名の R は国王（Rex）または女王（Regina）を指す']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「刑事の目的は被害者に償わせること」は誤り。刑事は社会のために罰する手続で、被害者を救うのは主に民事。また、民事で訴えるのに、相手が先に刑事で有罪になっている必要はない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['刑事＝国が訴追して罰する。民事＝被害者が訴えて救済を求める', '立証責任は訴えた側。基準は刑事が「合理的な疑いを超えて」、民事が「蓋然性の優越」', '1つの出来事が、刑事と民事の両方になりうる']
        },
        {
          title: '英単語',
          words: [
            ['prosecution', 'プロセキューション', '訴追（する側）'],
            ['claimant', 'クレイマント', '原告（民事。昔は plaintiff と呼んだ）'],
            ['defendant / the accused', 'ディフェンダント / アキューズド', '被告人（刑事）・被告（民事）。the accused は刑事の被告人だけ'],
            ['convict / acquit', 'コンビクト / アクウィット', '有罪とする / 無罪とする（刑事）'],
            ['burden of proof', 'バーデン オブ プルーフ', '立証責任（証明する責任）'],
            ['beyond reasonable doubt', 'ビヨンド リーズナブル ダウト', '合理的な疑いを超えて（刑事の立証基準）'],
            ['balance of probabilities', 'バランス オブ プロバビリティーズ', '蓋然性の優越（民事の立証基準）'],
            ['liable', 'ライアブル', '（民事上の）責任がある'],
            ['damages / injunction', 'ダメージズ / インジャンクション', '損害賠償 / 差止命令']
          ]
        }
      ],
      quiz: [
        { q: 'In a civil case, which party must prove the case, and to what standard?', choices: ['The claimant, on the balance of probabilities', 'The claimant, beyond reasonable doubt', 'The defendant, on the balance of probabilities', 'The state, beyond reasonable doubt'], answer: 0, explain: '立証責任は訴えた側（民事では原告 claimant）。基準は蓋然性の優越。「合理的な疑いを超えて」は刑事の基準。' },
        { q: 'Which of the following statements is correct?\n(1) The main purpose of criminal law is to compensate the victim.\n(2) The same event may give rise to both criminal and civil proceedings.', choices: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], answer: 1, explain: '(1) は誤り。刑事は社会のために罰する手続で、被害者の救済は主に民事。(2) は正しい（自転車事故や横領の例）。' },
        { q: 'Which of the following is a civil remedy rather than a criminal sanction?', choices: ['Imprisonment', 'A fine payable to the state', 'Damages', 'A community sentence'], answer: 2, explain: '損害賠償（damages）は民事の救済で、原告に払われる。拘禁・国に払う罰金・社会内刑は刑事の刑罰。' },
        { q: '刑事裁判で無罪（not guilty）になった人が、同じ出来事について民事で訴えられた。どうなる？', choices: ['刑事と同じ出来事なので、民事では訴えられない', '刑事で無罪なので、民事でも必ず負けない', '民事では責任あり（liable）とされることがある', '民事でも合理的な疑いを超える証明が必要になる'], answer: 2, explain: '民事の基準（蓋然性の優越）は刑事より低い。刑事で証明が足りなくても、民事では足りることがある。' },
        { q: 'In criminal proceedings in England, the party which brings the case against the accused is known as the:', choices: ['claimant', 'prosecution', 'plaintiff', 'respondent'], answer: 1, explain: '刑事で訴える側は訴追側（prosecution）。claimant は民事の原告で、plaintiff はその昔の呼び方。' },
        { q: '英国の事件名「R v Brown」から分かることは？', choices: ['R と Brown の2つの会社の争い', 'R という会社が Brown を訴えた民事事件', 'Brown が国を訴えた民事事件', '国が Brown を訴追した刑事事件'], answer: 3, explain: 'R は国王（Rex）または女王（Regina）の略で、国が訴追する刑事事件を表す。民事は「原告 v 被告」の名前で書く。' }
      ]
    },
    {
      id: 'B003',
      no: 3,
      title: '政治体制と法体系のつながり',
      goal: '政治体制が法の作り方・中身・使われ方を決めることを説明し、民主制と権威主義、法の支配、経済体制と法の関係を判断できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(b)'],
      slides: [
        {
          title: '校則は、誰が決める学校か',
          paras: ['生徒会と先生が話し合って校則を決める学校と、校長が1人で決めて明日から変える学校を比べてみる。', '前者では校則は公開され、急には変わらない。後者では、校長に都合のよいルールが突然できるかもしれない。誰が力を持っているかで、ルールの作り方も中身も変わる。国の法も同じで、政治体制（political system）が法体系（legal system）を形づくる。']
        },
        {
          title: '政治体制から法へのつながり',
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="政治体制が、法の作り方、法の中身、法の使われ方を決める" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">政治体制が、法のすべてを形づくる</text><rect x="70" y="50" width="300" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="78" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">政治体制（誰が力を持つか）</text><line x1="220" y1="94" x2="220" y2="108" stroke="var(--ink)" stroke-width="1.5"/><polygon points="214,106 226,106 220,115" fill="var(--ink)"/><rect x="70" y="116" width="300" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="144" text-anchor="middle" font-size="15" fill="var(--ink)">法の作り方：誰が・どう作るか</text><line x1="220" y1="160" x2="220" y2="174" stroke="var(--ink)" stroke-width="1.5"/><polygon points="214,172 226,172 220,181" fill="var(--ink)"/><rect x="70" y="182" width="300" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="210" text-anchor="middle" font-size="15" fill="var(--ink)">法の中身：何を守り、何を禁じるか</text><line x1="220" y1="226" x2="220" y2="240" stroke="var(--ink)" stroke-width="1.5"/><polygon points="214,238 226,238 220,247" fill="var(--ink)"/><rect x="70" y="248" width="300" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="276" text-anchor="middle" font-size="15" fill="var(--ink)">法の使われ方：裁判所は独立か</text></svg>`,
          caption: '政治体制の設計図が憲法（constitution）。誰が法を作るかを決める。'
        },
        {
          title: '民主制と権威主義',
          table: { caption: '政治体制で法はこう変わる', head: ['項目', '民主制 democracy', '権威主義 authoritarian'], rows: [['法を作る人', '選挙で選ばれた議会', '支配者や1つの政党'], ['作り方', '公開の議論と決まった手続', '命令で決まり、急に変わる'], ['裁判所', '政府から独立している', '政府の指示に従いやすい'], ['政府と法', '政府も法に縛られる', '支配者が法の上に立つことがある']] },
          after: '宗教の教えを国の法の土台にする体制もある（神権政治 theocracy）。イスラム法（Sharia）は B007 で学ぶ。'
        },
        {
          title: '法の支配と、法による支配',
          paras: ['法の支配（rule of law）は、政府も含めて誰もが法に従い、法は公開され、独立した裁判所が平等に当てはめる、という考え方。', '権威主義の国にも法律はたくさんある。ただし法が支配者の道具になり、支配者自身は縛られないことがある。これを法による支配（rule by law）と呼んで区別する。'],
          formula: '法の支配＝政府も法に縛られる。法がたくさんあるだけでは足りない'
        },
        {
          title: '経済体制も法を変える',
          list: ['市場経済（market economy）: 私有財産（private property）と契約の自由（freedom of contract）を守る法が中心。会社法や競争法が発達する', '計画経済（command economy）: 国が生産や価格を決める。財産の多くは国のもので、契約の自由はせまい', '混合経済（mixed economy）: 市場が基本で、国が規制や公共サービスで関わる。多くの国はこれ'],
          after: 'どんな経済にするかを政治が決め、法がそれを形にする。'
        },
        {
          title: 'なぜ？ ビジネスに関係する理由',
          paras: ['海外で取引する会社にとって、相手国の政治体制は法のリスク（political risk）そのもの。政権が変わると、外国企業の財産を国のものにする国有化（nationalisation）や、外資規制が急に入ることがある。', '契約が守られるかどうかは、最後は裁判所しだい。裁判所が政府や与党から独立していなければ、国やその関係者を相手にした争いで公平な判断を期待しにくい。']
        },
        {
          title: '歴史が法体系を広げた',
          paras: ['世界の法体系は、大きく3つの系統で学ぶ。英国生まれのコモン・ロー（common law）、フランスやドイツで発達した法典中心の大陸法（civil law）、イスラム法（Sharia law）。', 'どれが使われるかは、政治と歴史で決まった。英国の旧植民地の多くはコモン・ロー。日本は明治時代に、フランスやドイツの法典を手本に民法などを作ったので大陸法に入る。それぞれの仕組みは B005〜B007 で学ぶ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「法律がたくさんある国＝法の支配がある国」ではない。大事なのは、政府自身が法に縛られ、独立した裁判所がそれを確かめられるかどうか。また、法体系は政治と無関係に中立なものではなく、政治体制の価値観を映す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['政治体制が、法を誰がどう作るか、中身、使われ方を決める', '法の支配＝政府も含めて全員が法に従う。権威主義の「法による支配」と区別する', '経済体制も法の中身を変える（市場経済は私有財産と契約の自由）']
        },
        {
          title: '英単語',
          words: [
            ['political system', '', '政治体制'],
            ['legal system', '', '法体系'],
            ['democracy', 'デモクラシー', '民主制'],
            ['authoritarian / totalitarian', 'オーソリテリアン / トータリテリアン', '権威主義の / 全体主義の'],
            ['rule of law', 'ルール オブ ロー', '法の支配'],
            ['constitution', 'コンスティテューション', '憲法（国の基本法、政治の設計図）'],
            ['market economy / command economy', '', '市場経済 / 計画経済'],
            ['nationalisation', 'ナショナライゼーション', '国有化']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes the relationship between political and legal systems?', choices: ['The political system decides who makes the law and how, and the law reflects its values', 'Legal systems are completely independent of the political system of a country', 'Only democratic states have a legal system, as other states rule by force', 'The legal system decides which political party will form the government'], answer: 0, explain: '法は政治体制の産物で、その価値観を映す。権威主義の国にも法体系はあるので、「民主国家だけ」は誤り。政権を決めるのは選挙などの政治の仕組みで、法体系ではない。' },
        { q: 'Which of the following is a feature of the rule of law?', choices: ['The government may act without legal authority whenever it chooses', 'Everyone, including the government, is subject to the law', 'Judges must follow the instructions of government ministers', 'Laws may be kept secret and applied only to selected people'], answer: 1, explain: '法の支配の中心は、政府も含めて全員が法に従うこと。ほかの3つは、法の支配がない状態の特徴。' },
        { q: '市場経済（market economy）の国で、特に重要になる法は？', choices: ['私有財産を守り、契約の自由を認める法', '国が生産量と価格をすべて決める法', '個人の財産をすべて国のものにする法', '外国との取引を一切禁じる法'], answer: 0, explain: '市場経済は、個人や会社が自分の財産で自由に取引することで回る。国が生産や価格を決めたり、財産を国のものにしたりするのは計画経済の特徴。' },
        { q: '権威主義（authoritarian）の国の法について、正しいものは？', choices: ['法は必ず公開の議論を経て作られる', '法律がまったく存在しない', '裁判所は必ず政府から完全に独立している', '法律はあるが、支配者が法に縛られないことがある'], answer: 3, explain: '権威主義の国にも法律はある（rule by law）。問題は、裁判所が独立せず、支配者自身が法の上に立ちうること。' },
        { q: 'A company is considering investing in a country where the courts are controlled by the ruling party. Which legal risk is the company MOST likely to face?', choices: ['It will be unable to enter into any contracts in that country', 'Its contracts may not be enforced impartially in disputes with the state','The law of its home country will automatically govern its contracts', 'All of its contracts will automatically be governed by the CISG'], answer: 1, explain: '裁判所が独立していないと、国やその関係者との争いで公平な判断を期待しにくい。契約自体は結べる。本国法や CISG が自動で適用されるわけでもない（どの国の法が使われるかは B008 で学ぶ）。' }
      ]
    },
    {
      id: 'B004',
      no: 4,
      title: '三権分立と法の支配',
      goal: '三権分立（立法・行政・司法）と抑制と均衡を説明し、それが法体系に与える影響を、米国・英国・日本の比較で判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(c)'],
      slides: [
        {
          title: '審判が選手も兼ねたら',
          paras: ['サッカーの試合で、1人がルールを作り、自分もプレーし、反則かどうかも自分で判定するとしたら。その人のチームが勝つようにルールも判定も曲げられてしまう。', '国の力も同じ。法を作る力、法を実行する力、法を当てはめて争いを裁く力を、別々の人に持たせる。これが三権分立（separation of powers）の考え方。フランスの思想家モンテスキューが『法の精神』（1748年）で説いた。']
        },
        {
          title: '3つの権力',
          svg: `<svg viewBox="0 0 440 306" role="img" aria-label="立法、行政、司法の3つの部門が互いに抑制と均衡の関係にある" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">権力を3つに分ける</text><line x1="180" y1="104" x2="105" y2="200" stroke="var(--edge)" stroke-width="1.5"/><line x1="260" y1="104" x2="335" y2="200" stroke="var(--edge)" stroke-width="1.5"/><line x1="190" y1="229" x2="250" y2="229" stroke="var(--edge)" stroke-width="1.5"/><rect x="135" y="46" width="170" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="72" text-anchor="middle" font-size="15" fill="var(--ink)">立法：法を作る</text><text x="220" y="93" text-anchor="middle" font-size="13" fill="var(--quiet)">legislature</text><rect x="20" y="200" width="170" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="226" text-anchor="middle" font-size="15" fill="var(--ink)">行政：法を実行する</text><text x="105" y="247" text-anchor="middle" font-size="13" fill="var(--quiet)">executive</text><rect x="250" y="200" width="170" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="226" text-anchor="middle" font-size="15" fill="var(--ink)">司法：法を解釈する</text><text x="335" y="247" text-anchor="middle" font-size="13" fill="var(--quiet)">judiciary</text><rect x="150" y="146" width="140" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="167" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">抑制と均衡</text><text x="220" y="187" text-anchor="middle" font-size="13" fill="var(--ink)">checks and balances</text><text x="220" y="290" text-anchor="middle" fill="var(--ink)">どの部門も、ほかの2つから見張られる</text></svg>`,
          list: ['立法（legislature）: 議会。法を作る', '行政（executive）: 政府・大臣・役所。法を実行し、政策を進める', '司法（judiciary）: 裁判所。法を解釈・適用して争いを裁く']
        },
        {
          title: 'なぜ？ 分ける理由',
          paras: ['力が1か所に集まると、その力は乱用されやすい。法を作る人が裁判もすれば、自分に都合のよい法を作り、自分に都合よく裁ける。', '分けたうえで、互いに止め合える仕組み（抑制と均衡 checks and balances）を置く。そうすれば、どこか1つが暴走しても、ほかの部門がブレーキをかけられる。目的は、個人の自由と権利を守ること。']
        },
        {
          title: '法体系への影響',
          list: ['司法の独立（judicial independence）: 裁判官は政府から独立して判断し、政府に不利な判決を出しても簡単には辞めさせられない。政府も裁判で負けうる', '司法審査（judicial review）: 行政の行為が法の与えた権限の内側か、裁判所が審査する。外れれば権限踰越（ultra vires）で無効', '違憲審査: 国によっては、裁判所が議会の法律そのものを無効にできる', '委任立法（delegated legislation）: 議会が大臣などに細かい規則づくりを任せる。分立はゆるむが、議会と裁判所が見張る']
        },
        {
          title: '会社の例：大臣の決定を争う',
          example: {
            problem: 'ある国の法律は、大臣に「安全基準を満たさない工場の操業許可を取り消す権限」を与えている。大臣は、基準を満たしている Y社の許可を、政治的な理由で取り消した。Y社はどうできるか。',
            steps: ['大臣は行政。取り消す権限は、議会が作った法律から来ている', 'Y社は裁判所に司法審査（judicial review）を求められる', '裁判所は、取消しが法律の与えた権限の内側かを確かめる', '基準を満たす工場の許可を、法律の目的と関係ない理由で取り消すのは権限の外（ultra vires）。裁判所は取消しを無効にできる'],
            answer: '司法が行政を見張る（checks and balances）。司法が独立しているから、会社は政府が相手でも公平な判断を期待できる'
          }
        },
        {
          title: '米国：はっきり分ける',
          paras: ['米国は書かれた憲法（written constitution）で三権を厳格に分ける。大統領（行政）は議員ではなく、議会とは別の選挙で選ばれる。', '抑制と均衡の例: 大統領は議会の法案を拒否（veto）できるが、議会は上下両院の3分の2の賛成で覆せる。最高裁の判事は大統領が指名し、上院が承認する。最高裁は議会の法律を憲法違反として無効にできる（1803年の Marbury v Madison 事件で確立）。']
        },
        {
          title: '英国：重なりがあり、議会が最上位',
          paras: ['英国では大臣はふつう議員でもあり、立法と行政が重なる（fusion）。1つの法典にまとめた憲法もない（uncodified constitution）。', '議会主権（parliamentary sovereignty）により、裁判所は議会の法律（Act of Parliament）を無効にできない。人権に合わない法律にも、不適合宣言（declaration of incompatibility、1998年人権法4条）を出せるだけ。', '一方で司法は分離を強めた。2005年の憲法改革法により、2009年に議会の上院（House of Lords）から独立した最高裁判所（Supreme Court）ができた。']
        },
        {
          title: '法の支配とのつながり',
          paras: ['英国の法学者ダイシー（A. V. Dicey、1885年の著作）は、法の支配を3つにまとめた。'],
          numbered: ['法に違反しない限り、誰も罰せられない（勝手な権力の否定）', '法の前の平等。政府の役人も、ふつうの人と同じ法と裁判所に従う', '個人の権利は、ふつうの裁判所の判決から生まれ守られる'],
          after: '三権分立、特に司法の独立は、法の支配を実際に働かせるための仕組みになる。'
        },
        {
          title: 'よくある間違い',
          table: { caption: '3つの国の比較', head: ['国', '立法と行政', '裁判所が法律を無効にできるか'], rows: [['米国', '分離（大統領は議員でない）', 'できる（違憲審査）'], ['英国', '重なる（大臣は議員）', 'できない（議会主権）'], ['日本', '重なる（議院内閣制）', 'できる（憲法81条）']] },
          note: { kind: 'warn', text: '日本や米国の感覚で「裁判所は法律を無効にできる」と考えると、英国では誤り。英国の裁判所が無効にできるのは行政の行為（司法審査）で、議会の法律ではない。また、3つが完全に切り離された国はない。分立は程度の差になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['立法＝作る、行政＝実行する、司法＝解釈して裁く。分けて互いに止め合わせる（checks and balances）', '影響: 司法の独立、行政への司法審査、委任立法による分立のゆるみ', '米国は厳格な分離と違憲審査。英国は立法と行政が重なり、議会主権で法律を無効にできない']
        },
        {
          title: '英単語',
          words: [
            ['separation of powers', 'セパレーション オブ パワーズ', '三権分立'],
            ['legislature / executive / judiciary', 'レジスレイチャー / エグゼキュティブ / ジューディシャリー', '立法 / 行政 / 司法'],
            ['checks and balances', 'チェックス アンド バランシズ', '抑制と均衡'],
            ['judicial independence', '', '司法の独立'],
            ['judicial review', 'ジューディシャル レビュー', '司法審査（行政の行為が法の範囲内かの審査）'],
            ['ultra vires', 'ウルトラ ヴァイリーズ', '権限踰越（与えられた権限の外）'],
            ['parliamentary sovereignty', 'パーラメンタリー ソブリンティ', '議会主権'],
            ['delegated legislation', 'デリゲーテッド レジスレーション', '委任立法']
          ]
        }
      ],
      quiz: [
        { q: 'Under the doctrine of the separation of powers, which branch of the state is responsible for interpreting the law and resolving disputes?', choices: ['The legislature', 'The executive', 'The judiciary', 'The civil service'], answer: 2, explain: '司法（裁判所）が法を解釈・適用する。立法は法を作り、行政（役所 civil service を含む）は法を実行する。' },
        { q: 'Which of the following statements about the UK constitution is correct?', choices: ['The courts can declare an Act of Parliament void if it breaches human rights', 'Government ministers are normally also members of Parliament', 'There is a strict separation of powers with no overlap between branches', 'The highest court is still a committee of the House of Lords'], answer: 1, explain: '英国では大臣はふつう議員で、立法と行政が重なる。裁判所は不適合宣言を出せるだけで法律を無効にできない。最上級裁判所は2009年に上院から独立した Supreme Court。' },
        { q: 'Which of the following best explains the purpose of the separation of powers?', choices: ['To prevent the abuse of power by stopping it from being concentrated in one body', 'To make sure that laws are passed as quickly as possible', 'To allow judges to make all of the laws of the state', 'To give the executive full control over the courts'], answer: 0, explain: '目的は権力の集中と乱用を防ぎ、自由を守ること。手続はむしろ遅くなることもある。裁判官が全部の法を作る、行政が裁判所を支配する、はどちらも権力を1か所に集める話で、逆の方向。' },
        { q: 'In the UK, a government minister makes a decision which goes beyond the powers given to the minister by an Act of Parliament. Which of the following is correct?', choices: ['The decision is valid, because ministers are normally members of Parliament', 'The courts cannot review the decision, because of parliamentary sovereignty', 'The courts may declare the decision ultra vires through judicial review', 'Only the Supreme Court may declare the Act of Parliament itself void'], answer: 2, explain: '行政の行為は司法審査の対象で、法律の与えた権限を超えれば ultra vires で無効になる。議会主権が守るのは議会の法律で、大臣の決定ではない。英国では最高裁も議会の法律そのものは無効にできない。大臣が議員であることは、決定を有効にする理由にならない。' },
        { q: '議会が法律で大臣に「細かい規則を作る権限」を与えた。三権分立から見た説明として正しいものは？', choices: ['行政が作った規則は、議会の法律より常に強い', '司法審査で、裁判所が法律を作ることになる', '議会主権に反するので、英国では認められない', '委任立法で、行政が立法の一部を担うので分立がゆるむ。議会と裁判所がコントロールする'], answer: 3, explain: '委任立法（delegated legislation）は行政が作る法。権限の範囲を超えれば、裁判所の司法審査で ultra vires として無効になりうる。議会が権限を与えているので、議会主権に反しない。' },
        { q: 'ダイシーがまとめた法の支配の考え方に入らないものは？', choices: ['緊急時には、政府の役人は通常の裁判所の判断に従わなくてよい', '法に違反しない限り、誰も罰せられない', '政府の役人も、ふつうの人と同じ法と裁判所に従う', '個人の権利は、ふつうの裁判所の判決から生まれ守られる'], answer: 0, explain: '法の前の平等により、役人も通常の法と裁判所に従う。「緊急時には従わなくてよい」はこれに反するので、法の支配の考え方ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'B001-1', lesson: 'B001', q: '法（law）とは？', a: '国家が作るか認め、裁判所などを通じて強制できる社会のルール' },
    { id: 'B001-2', lesson: 'B001', q: '法と道徳（morality）のちがいは？', a: '法は国家が強制でき、破ると制裁（sanction）がある。道徳は強制されない' },
    { id: 'B001-3', lesson: 'B001', q: '公法と私法のちがいは？', a: '公法は国と人の関係（憲法・行政法・刑事法）。私法は人と人の関係（契約・不法行為・会社法）' },
    { id: 'B001-4', lesson: 'B001', q: '制定法（statute）と判例法（case law）は、それぞれ誰が作る？', a: '制定法は議会。判例法は裁判所の判決の積み重ね' },
    { id: 'B001-5', lesson: 'B001', q: '「civil law」の2つの意味は？', a: '(1) 刑事法に対する民事法 (2) 法典中心の大陸法（法体系の種類）' },
    { id: 'B001-6', lesson: 'B001', q: 'K3 の本番の形式と合格点は？', a: '2時間、2点の問題×50問（100点）、全問必須。合格点50%' },
    { id: 'B002-1', lesson: 'B002', q: '刑事と民事、それぞれ誰が訴える？', a: '刑事は国（prosecution）。民事は被害を受けた人（claimant、原告）' },
    { id: 'B002-2', lesson: 'B002', q: '刑事と民事の立証基準は？', a: '刑事は合理的な疑いを超えて（beyond reasonable doubt）。民事は蓋然性の優越（balance of probabilities）' },
    { id: 'B002-3', lesson: 'B002', q: 'なぜ刑事の立証基準は高い？', a: '自由を奪う刑罰があり、相手は強い国。無実の人を罰する誤りを避けるため' },
    { id: 'B002-4', lesson: 'B002', q: '民事の主な救済（remedy）を3つ', a: '損害賠償（damages）、差止命令（injunction）、特定履行（specific performance）' },
    { id: 'B002-5', lesson: 'B002', q: '刑事で無罪になった人が、民事で責任ありとされることはある？', a: 'ある。民事の立証基準の方が低いため' },
    { id: 'B002-6', lesson: 'B002', q: '事件名「R v Smith」の R とは？', a: '国王（Rex）または女王（Regina）。国が訴追する刑事事件を表す' },
    { id: 'B003-1', lesson: 'B003', q: '政治体制は法の何を決める？', a: '誰がどう法を作るか、法の中身、法の使われ方（裁判所の独立など）' },
    { id: 'B003-2', lesson: 'B003', q: '法の支配（rule of law）とは？', a: '政府も含めて全員が法に従い、独立した裁判所が法を平等に当てはめること' },
    { id: 'B003-3', lesson: 'B003', q: '法の支配と「法による支配（rule by law）」のちがいは？', a: '法による支配では、法が支配者の道具になり、支配者自身は法に縛られないことがある' },
    { id: 'B003-4', lesson: 'B003', q: '市場経済の国で中心になる法は？', a: '私有財産を守り、契約の自由を認める法' },
    { id: 'B003-5', lesson: 'B003', q: 'なぜ相手国の政治体制がビジネスのリスクになる？', a: '国有化や規制で法が急に変わり、裁判所が独立していないと契約が公平に守られにくいため' },
    { id: 'B004-1', lesson: 'B004', q: '立法・行政・司法の役割は？', a: '立法＝法を作る（議会）、行政＝実行する（政府）、司法＝解釈して争いを裁く（裁判所）' },
    { id: 'B004-2', lesson: 'B004', q: 'なぜ権力を分ける？', a: '1か所に集まると乱用されるため。互いに止め合わせて（checks and balances）自由を守る' },
    { id: 'B004-3', lesson: 'B004', q: '英国の裁判所は議会の法律を無効にできる？', a: 'できない（議会主権）。人権に合わなければ不適合宣言を出せるだけ' },
    { id: 'B004-4', lesson: 'B004', q: '米国の違憲審査権を確立した判決は？', a: 'Marbury v Madison（1803年）' },
    { id: 'B004-5', lesson: 'B004', q: '司法審査（judicial review）とは？', a: '行政の行為が法の与えた権限の内側か裁判所が審査。外れれば ultra vires で無効' },
    { id: 'B004-6', lesson: 'B004', q: '委任立法（delegated legislation）が三権分立をゆるめる理由は？', a: '議会に任されて、行政が法づくりの一部を担うため' },
    { id: 'B004-7', lesson: 'B004', q: '司法の独立が、会社にとって大事な理由は？', a: '政府が相手の争いでも、裁判所の公平な判断を期待できるため' }
  ]
});
