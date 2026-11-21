(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 203,
  part: 1,
  partTitle: '法と法体系',
  lessons: [
    {
      id: 'B008',
      no: 8,
      title: '法の抵触と国際的な法規制が必要な理由',
      goal: '国をまたぐ争いで「どの国の裁判所か」「どの国の法律か」が問題になる理由と、国際的な統一ルールが必要な理由を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A2(a)'],
      slides: [
        {
          title: '海外通販でトラブルになったら',
          paras: ['海外のサイトで買った靴が偽物だった。日本の法律で文句を言えると思いがち。ところがサイトの規約に「この契約はカリフォルニア州法に従い、同州の裁判所で争う」と書いてあることがある。', 'どの国のルールで、どこの裁判所で決着をつけるのか。国をまたぐと、まずここから争いになる。']
        },
        {
          title: '法の抵触（conflict of laws）とは',
          paras: ['1つの取引に2つ以上の国が関わり、国ごとに法律の中身が違うとき、どの国の法律を使うかがぶつかる。これを法の抵触（conflict of laws）という。', 'この問題を解くための各国のルールを国際私法（private international law）という。試験では、この2つはほぼ同じ意味で出る。'],
          note: { kind: 'tip', text: '国際公法（public international law）は国と国の関係のルールで、別もの。法の抵触は、会社や個人どうしの争いに外国の要素がある場面の話。' }
        },
        {
          title: '国をまたぐ争いの3つの問い',
          svg: `<svg viewBox="0 0 440 370" role="img" aria-label="国をまたぐ争いでは、管轄、準拠法、承認と執行の3つが問題になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">国をまたぐ争いで出る3つの問い</text><rect x="20" y="50" width="170" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="80" text-anchor="middle" font-size="15" fill="var(--ink)">さくら精機（日本）</text><rect x="250" y="50" width="170" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="335" y="80" text-anchor="middle" font-size="15" fill="var(--ink)">買い手（ブラジル）</text><line x1="190" y1="75" x2="250" y2="75" stroke="var(--ink)" stroke-width="1.5"/><text x="220" y="122" text-anchor="middle" fill="var(--quiet)">代金 $200,000 が払われない</text><rect x="20" y="136" width="400" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="158" font-size="15" font-weight="600" fill="var(--ink)">① 管轄（jurisdiction）</text><text x="36" y="180" fill="var(--ink)">どの国の裁判所で争う？</text><rect x="20" y="200" width="400" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="222" font-size="15" font-weight="600" fill="var(--ink)">② 準拠法（applicable law）</text><text x="36" y="244" fill="var(--ink)">どの国の法律で判断する？</text><rect x="20" y="264" width="400" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="286" font-size="15" font-weight="600" fill="var(--ink)">③ 承認と執行（enforcement）</text><text x="36" y="308" fill="var(--ink)">勝った判決を相手の国で強制できる？</text><text x="220" y="352" text-anchor="middle" fill="var(--ink)">裁判所の国と法律の国は別でもよい</text></svg>`,
          caption: '日本の裁判所が外国の法律を使って判断することもある。'
        },
        {
          title: '会社の例: さくら精機の代金未払い',
          paras: ['大阪の機械メーカー「さくら精機」が、ブラジルの会社に機械を $200,000 で売った。代金が払われない。', '日本で訴えるか、ブラジルで訴えるか。日本法とブラジル法のどちらで判断するか。日本で勝っても、相手の財産はブラジルにある。日本の判決でブラジルの財産を差し押さえられるかは、ブラジルの法律しだい。']
        },
        {
          title: '契約で先に決めておく',
          paras: ['争いを避けるため、国際契約には次の2つの条項を入れることが多い。'],
          list: ['準拠法条項（choice of law clause）: 例 "This contract shall be governed by the laws of Japan."', '管轄条項（jurisdiction clause）: どの国の裁判所で争うかを決める'],
          after: '多くの国は、当事者が選んだ法律を尊重する（当事者自治 party autonomy）。日本では法の適用に関する通則法、EU ではローマI規則が定めている。選んでいないときは、裁判所が自国の国際私法で決める。多くの国では、契約に最も密接に関係する国（closest connection）の法律になる。'
        },
        {
          title: 'なぜ？ 国際的な法規制が必要な理由',
          list: ['国ごとに法律が違う。例: 英米法では契約の成立に約因（consideration）がいるが、大陸法ではいらない', '相手の国の法律を調べるのはお金と時間がかかる。言葉の壁もある', 'どの国の法律になるか前もって分からず、結果が読めない', '有利な国の裁判所を選ぶ駆け引き（forum shopping）が起きる', '判決が外国で執行できないことがある'],
          after: 'どれも取引のコストとリスクを上げ、国際取引を減らす。だから国をこえて共通のルールを作る。'
        },
        {
          title: '共通のルールを作る道具',
          table: { caption: '国際的な法規制の主な道具', head: ['道具', '効き方', '例'], rows: [['条約・コンベンション（treaty, convention）', '批准した国を拘束する', 'CISG'], ['モデル法（model law）', '各国が国内法に取り込むひな形', 'UNCITRAL 仲裁モデル法'], ['民間の統一規則・原則', '当事者が契約に入れると適用', 'インコタームズ、UCP 600、UNIDROIT 原則']] },
          after: '同じ法律にそろえることを統一（unification）、違いを小さくすることを調和（harmonisation）という。昔から商人の慣習から生まれたルール（lex mercatoria、商人法）もある。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「日本の会社だから日本法」「日本の裁判所に訴えたから日本法」ではない。準拠法は、当事者の選択か、裁判所の国の国際私法で決まる。また、統一ルールができても国の法律は消えない。条約が扱わない点や、条約に入っていない国との取引では、準拠法の問題が残る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['法の抵触＝外国の要素がある争いで、どの国の法律・裁判所かを決める問題（国際私法）', '3つの問い: 管轄、準拠法、判決の承認と執行', '法の違いはコストと不確かさを生む。だから条約・モデル法・統一規則で国際的に規制する']
        },
        {
          title: '英単語',
          words: [
            ['conflict of laws', 'コンフリクト オブ ローズ', '法の抵触'],
            ['private international law', 'プライベート インターナショナル ロー', '国際私法'],
            ['public international law', 'パブリック インターナショナル ロー', '国際公法（国と国の関係のルール）'],
            ['jurisdiction', 'ジュリスディクション', '管轄（どの裁判所が扱えるか）'],
            ['applicable law / governing law', '', '準拠法'],
            ['choice of law clause', '', '準拠法条項'],
            ['enforcement', 'エンフォースメント', '（判決の）執行'],
            ['harmonisation / unification', '', '調和 ／ 統一']
          ]
        }
      ],
      quiz: [
        { q: '法の抵触（conflict of laws）で問題になる3つの問いに入らないものは？', choices: ['どの国の裁判所が事件を扱うか', 'どの国の法律で判断するか', '外国の判決を相手の国で執行できるか', '国が被告人を処罰するかどうか'], answer: 3, explain: '処罰は刑事法の話。法の抵触は、会社や個人どうしの争い（私法）に外国の要素がある場面で、管轄・準拠法・判決の承認と執行を決めるルール。' },
        { q: 'Which of the following best describes the conflict of laws?', choices: ['The rules used to decide which country\'s courts have jurisdiction and which country\'s law applies where a dispute has a foreign element', 'The body of law governing relations between sovereign states', 'The situation where a statute and a judicial precedent within one country contradict each other', 'The rules for resolving disputes between the legislature and the judiciary'], answer: 0, explain: '2つ目は国際公法（public international law）。3つ目は1つの国の中の法源の優先順位の話。4つ目は三権分立の話。' },
        { q: 'A contract between a Japanese seller and a German buyer states: "This contract shall be governed by the laws of England." What is the main effect of this clause?', choices: ['It requires any dispute to be heard by the English courts', 'It makes the contract subject to the CISG', 'It chooses the law that will be applied to the contract', 'It requires any dispute to be referred to arbitration in London'], answer: 2, explain: '準拠法条項（choice of law clause）は、どの国の法律を使うかを決めるだけ。どこの裁判所で争うかは管轄条項（jurisdiction clause）で別に決める。CISG を選ぶ条項でも、仲裁を決める条項でもない。' },
        { q: 'さくら精機がブラジルの会社を日本の裁判所で訴えた。裁判所が判断に使う法律は？', choices: ['必ず日本法', '日本の国際私法のルールで決まる国の法律（外国法のこともある）', '必ず被告の国の法律', '必ず契約書の言語の国の法律'], answer: 1, explain: '裁判所の国と準拠法の国は一致しなくてよい。日本の裁判所は、法の適用に関する通則法に従って準拠法を決める。当事者が選んでいればその法律になる。' },
        { q: 'Which of the following is NOT a reason for the international regulation of trade law?', choices: ['Differences between national laws increase the cost and risk of cross-border trade', 'Parties may not know in advance which law will apply to their contract', 'A judgment obtained in one country may be difficult to enforce in another', 'International regulation removes the need for any national law of contract'], answer: 3, explain: '国際的なルールは国内法をなくすものではない。条約が扱わない点などは、引き続き国内法と国際私法で決める。ほかの3つは、統一ルールが必要な理由そのもの。' }
      ]
    },
    {
      id: 'B009',
      no: 9,
      title: '条約・コンベンション・モデル法の働き',
      goal: '条約・コンベンションとモデル法の作られ方、拘束力、国内での効き方の違いを説明し、どれに当たるか見分けられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A2(b)'],
      slides: [
        {
          title: '協定と、配られたひな形',
          paras: ['町内会で「ゴミ出しの協定」を結ぶ。署名して正式に参加した家は、守る義務を負う。参加しなかった家は縛られない。', '一方、市役所が「マンション管理規約のひな形」を配ることもある。各マンションはそのまま使っても、直して使っても、使わなくてもよい。前者が条約、後者がモデル法のイメージ。']
        },
        {
          title: '条約（treaty）とコンベンション（convention）',
          paras: ['条約は、国と国との書面の合意で、国際法に従うもの。名前が treaty でも convention でも agreement でも、法的な性質は同じ（条約法に関するウィーン条約 1969年）。', '2か国の条約を bilateral、多くの国の条約を multilateral という。コンベンションは、国際機関の会議で作られ、多くの国に開かれた多国間条約を指すことが多い。CISG（国際物品売買契約に関する国連条約）がその例。']
        },
        {
          title: '条約が国を縛るまで',
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="条約は採択、署名、批准または加入、発効の順に進み、批准で初めて国が拘束される" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">条約が国を縛るまで</text><rect x="20" y="50" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="79" font-size="15" font-weight="600" fill="var(--ink)">① 採択（adoption）</text><text x="404" y="79" text-anchor="end" fill="var(--quiet)">会議で条文が決まる</text><line x1="220" y1="98" x2="220" y2="116" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="116" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="145" font-size="15" font-weight="600" fill="var(--ink)">② 署名（signature）</text><text x="404" y="145" text-anchor="end" fill="var(--quiet)">まだ原則拘束されない</text><line x1="220" y1="164" x2="220" y2="182" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="182" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="211" font-size="15" font-weight="600" fill="var(--ink)">③ 批准・加入（ratification）</text><text x="404" y="211" text-anchor="end" fill="var(--ink)">ここで国が拘束される</text><line x1="220" y1="230" x2="220" y2="248" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="248" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="277" font-size="15" font-weight="600" fill="var(--ink)">④ 発効（entry into force）</text><text x="404" y="277" text-anchor="end" fill="var(--quiet)">所定の批准で効力</text></svg>`,
          caption: 'CISG は1980年にウィーンで採択、10か国の批准がそろって1988年1月1日に発効。日本は2008年に加入し、2009年8月1日から日本で効力をもった。署名しなかった国は、後から加入（accession）で参加できる。'
        },
        {
          title: '条約が会社に効くには',
          paras: ['条約が縛るのは国。会社や個人の取引に効くには、その国の国内法の一部になる必要がある。なり方は国によって違う。'],
          list: ['一元論（monist）: 批准すると、そのまま国内法としても効く。日本では CISG は国内法として直接使われている', '二元論（dualist）: 議会が法律を作って取り込まないと、国内では効かない。英国がこの型'],
          after: '条約が認める範囲で、一部の条文に従わないと宣言することもできる。これを留保（reservation）という。CISG にも留保の規定がある。'
        },
        {
          title: 'モデル法（model law）',
          paras: ['モデル法は、国際機関が作る法律のひな形。各国は自分の国の法律を作るときに使う。そのまま採用しても、変えても、一部だけ使ってもよい。批准はなく、採用しなくても国際法上の義務違反にならない。', '例: UNCITRAL の国際商事仲裁モデル法（1985年、2006年改正）。日本の仲裁法（2003年）はこれを基にしている。ほかに電子商取引モデル法（1996年）、国境を越える倒産に関するモデル法（1997年）がある。']
        },
        {
          title: '条約とモデル法の比べ方',
          table: { caption: '拘束力と統一の度合い', head: ['項目', '条約・コンベンション', 'モデル法'], rows: [['正体', '国と国の合意', '立法のひな形'], ['拘束力', '批准した国を拘束', '拘束しない（採用は自由）'], ['中身の変更', 'できない（留保の範囲だけ）', '自由に変えてよい'], ['各国のルールのそろい方', '高い', '低い（国ごとに差が出る）'], ['広まりやすさ', '批准に時間がかかる', '柔軟で採用しやすい'], ['例', 'CISG', 'UNCITRAL 仲裁モデル法']] }
        },
        {
          title: 'なぜ？ 道具が何種類もある理由',
          paras: ['条約は各国のルールを同じにできる。でも国は自分で法律を決める権限（主権）を手放したがらず、批准がなかなか進まない。CISG の前の1964年のハーグ統一売買法は、批准した国が少なかった。', 'モデル法は自国の事情に合わせて直せるので採用されやすい。その代わり国ごとに中身がずれる。さらに、国ではなく当事者が契約で選ぶ統一規則や原則（インコタームズ、UNIDROIT 原則）もある。法律ではないので soft law と呼ばれる。']
        },
        {
          title: '例題: どれに当たる？',
          example: {
            problem: 'X国は UNCITRAL のモデル法を基に法律を作ったが、2つの条文を削った。Y国は CISG に署名したが、まだ批准していない。X国とY国は国際法上の義務に違反しているか。',
            steps: ['X国: モデル法は条約ではない。批准もなく、どう取り込むかは各国の自由', 'だから条文を削っても義務違反にはならない（ただし各国のルールのそろい方は下がる）', 'Y国: 条約は署名だけでは原則として拘束しない', '批准（または加入）していないので、CISG を守る義務はまだない'],
            answer: 'どちらも違反していない。モデル法は拘束力がなく、条約は批准して初めて拘束する'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「署名した＝守る義務がある」ではない。国を縛るのは批准（または加入）。また「モデル法も条約と同じように批准する」も間違い。モデル法は各国が自由に取り込むひな形で、批准という手続はない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['条約・コンベンション＝国と国の合意。批准（加入）した国だけを拘束する', 'モデル法＝立法のひな形。各国が自由に変えて国内法にする。拘束力はない', '条約は統一度が高いが広まりにくい。モデル法は柔軟だが国ごとにずれる']
        },
        {
          title: '英単語',
          words: [
            ['treaty', 'トリーティ', '条約'],
            ['convention', 'コンベンション', '条約（多国間の条約によく使う名前）'],
            ['model law', 'モデル ロー', 'モデル法（立法のひな形）'],
            ['ratification', 'ラティフィケーション', '批准'],
            ['accession', 'アクセッション', '加入（署名していない国が後から参加）'],
            ['entry into force', 'エントリー イントゥ フォース', '発効'],
            ['reservation', 'リザベーション', '留保'],
            ['bilateral / multilateral', 'バイラテラル ／ マルチラテラル', '2国間 ／ 多国間']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about a model law is correct?', choices: ['A model law binds a state as soon as the state signs it', 'A model law is an agreement between states governed by international law', 'A model law applies to a contract only if both parties are in states that have ratified it', 'A state that adopts a model law may modify it to suit its own legal system'], answer: 3, explain: 'モデル法は立法のひな形で、各国が自由に変えて使える。署名や批准の手続はない。「国と国の合意」「批准した国の当事者だけに適用」は条約（コンベンション）の説明。' },
        { q: 'At which stage does a state normally become bound by an international convention?', choices: ['When it takes part in negotiating the text', 'When its representative signs the text', 'When it ratifies or accedes to the convention', 'When the convention is adopted at a diplomatic conference'], answer: 2, explain: '交渉・採択・署名の段階では、原則としてまだ拘束されない。批准（ratification）か加入（accession）で拘束される。' },
        { q: '条約とモデル法を比べたとき、正しいのは？', choices: ['モデル法の方が、各国のルールが同じになりやすい', 'どちらも当事者が契約で選んだときだけ適用される', 'モデル法は国連の総会で批准される', '条約の方が、各国のルールが同じになりやすい'], answer: 3, explain: '条約は批准した国が同じ条文に従うので、統一の度合いが高い。モデル法は各国が直して取り込むので差が出る。当事者が選んで初めて使うのは、インコタームズなどの民間の規則。' },
        { q: '二元論（dualist）の国が条約を批准した。その国の裁判所で、会社どうしの争いにその条約のルールが使われるために必要なものは？', choices: ['議会が条約を国内法に取り込む法律を作ること', '何も必要ない', '取引する会社が条約に署名すること', '国連の許可を受けること'], answer: 0, explain: '二元論の国（英国など）では、条約は国を縛るだけで、議会の立法がないと国内では効かない。一元論の国なら、批准でそのまま国内法としても効く。' },
        { q: 'The United Nations Convention on Contracts for the International Sale of Goods (CISG) is an example of which of the following?', choices: ['A model law', 'An international convention', 'A set of standard trade terms issued by the ICC', 'A judicial precedent'], answer: 1, explain: 'CISG は国連の条約（コンベンション）。批准・加入した国（日本を含む90か国以上）を拘束する。インコタームズは ICC の民間の規則。' }
      ]
    },
    {
      id: 'B010',
      no: 10,
      title: '国際取引を支える機関：UNCITRAL・ICC・UNIDROIT',
      goal: 'UNCITRAL・ICC・UNIDROIT が、どんな組織で何を目的にし、どの文書を作ったかを見分けられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A2(c)'],
      slides: [
        {
          title: 'ルールを作る3つの工房',
          paras: ['日本でたとえると、国の代表が集まって法律の案を作る会議、業界団体が作る「業界の標準ルール」、法学者の研究所が作る「お手本の教科書」がある。', '国際取引のルール作りも同じ。国連の委員会（UNCITRAL）、民間の団体（ICC）、政府間の研究機関（UNIDROIT）の3つが、試験に出る主役。']
        },
        {
          title: '3つの機関の地図',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="UNCITRALは国連の委員会、ICCは民間の団体、UNIDROITは政府間の機関" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">誰が作り、何を作ったか</text><rect x="20" y="50" width="124" height="210" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="158" y="50" width="124" height="210" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="296" y="50" width="124" height="210" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">UNCITRAL</text><text x="82" y="108" text-anchor="middle" fill="var(--ink)">国連の委員会</text><text x="82" y="132" text-anchor="middle" fill="var(--ink)">政府間の機関</text><text x="82" y="156" text-anchor="middle" fill="var(--quiet)">事務局ウィーン</text><line x1="32" y1="172" x2="132" y2="172" stroke="var(--edge)" stroke-width="1"/><text x="82" y="198" text-anchor="middle" fill="var(--ink)">CISG</text><text x="82" y="222" text-anchor="middle" fill="var(--ink)">モデル法</text><text x="220" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ICC</text><text x="220" y="108" text-anchor="middle" fill="var(--ink)">国際商業会議所</text><text x="220" y="132" text-anchor="middle" fill="var(--ink)">民間の団体</text><text x="220" y="156" text-anchor="middle" fill="var(--quiet)">本部パリ</text><line x1="170" y1="172" x2="270" y2="172" stroke="var(--accent)" stroke-width="1"/><text x="220" y="198" text-anchor="middle" fill="var(--ink)">Incoterms</text><text x="220" y="222" text-anchor="middle" fill="var(--ink)">UCP 600</text><text x="358" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">UNIDROIT</text><text x="358" y="108" text-anchor="middle" fill="var(--ink)">私法統一国際協会</text><text x="358" y="132" text-anchor="middle" fill="var(--ink)">政府間の機関</text><text x="358" y="156" text-anchor="middle" fill="var(--quiet)">本部ローマ</text><line x1="308" y1="172" x2="408" y2="172" stroke="var(--edge)" stroke-width="1"/><text x="358" y="198" text-anchor="middle" fill="var(--ink)">契約原則</text><text x="358" y="222" text-anchor="middle" fill="var(--ink)">条約</text><text x="220" y="288" text-anchor="middle" fill="var(--ink)">国が集まる2つと、民間の1つ</text></svg>`,
          caption: 'ICC だけが民間。国の代表でなく、世界の企業や商工会議所の集まり。'
        },
        {
          title: 'UNCITRAL（国連国際商取引法委員会）',
          paras: ['United Nations Commission on International Trade Law。1966年に国連総会が作った委員会で、委員は国連加盟国から選ばれる。目的は、国際取引法の調和と統一を進めること（progressive harmonisation and unification of the law of international trade）。', '条約も、モデル法も、契約で使うルールも作る。各国の裁判所が UNCITRAL の文書をどう解釈したかを集めたデータベース（CLOUT）も公開し、解釈がずれないようにしている。']
        },
        {
          title: 'UNCITRAL が作った主な文書',
          table: { caption: 'UNCITRAL の代表作', head: ['文書', '種類', '年'], rows: [['国際物品売買契約に関する国連条約（CISG）', '条約', '1980'], ['海上物品運送条約（ハンブルク・ルール）', '条約', '1978'], ['UNCITRAL 仲裁規則', '当事者が選ぶ手続ルール', '1976'], ['国際商事仲裁モデル法', 'モデル法', '1985'], ['電子商取引モデル法', 'モデル法', '1996'], ['国境を越える倒産に関するモデル法', 'モデル法', '1997']] }
        },
        {
          title: 'ICC（国際商業会議所）',
          paras: ['International Chamber of Commerce。1919年設立、本部パリ。世界の企業や商工会議所が集まる民間の団体（非政府組織）で、国の機関ではない。', '作るのは法律ではなく、取引の実務をまとめた統一規則と標準条件。当事者が契約に「Incoterms 2020 による」「UCP 600 に従う」と書いて初めて適用される。'],
          list: ['インコタームズ（Incoterms）: 貿易条件。1936年に初版、現行は Incoterms 2020', 'UCP 600: 信用状統一規則（2007年版）', 'URC 522: 取立統一規則', 'ICC 国際仲裁裁判所（1923年）: 名前は裁判所だが国の裁判所ではなく、仲裁を運営する機関']
        },
        {
          title: 'UNIDROIT（私法統一国際協会）',
          paras: ['International Institute for the Unification of Private Law。1926年に国際連盟の補助機関として作られ、1940年に独立した政府間機関として再出発した。本部ローマ。日本も加盟国。', '目的は、国々の私法、特に商取引法を近代化・調和・調整する方法を研究し、統一ルールを作ること。'],
          list: ['国際商事契約原則（UNIDROIT Principles of International Commercial Contracts）: 1994年初版、最新は2016年版', '国際ファクタリング条約、国際ファイナンス・リース条約（1988年）', '1964年のハーグ統一売買法の準備（CISG の前身）']
        },
        {
          title: 'UNIDROIT 原則の使われ方',
          paras: ['UNIDROIT 原則は条約ではなく、法律でもない（soft law）。それでも次のように使われる。'],
          list: ['当事者が「この契約は UNIDROIT 原則による」と選んだとき', '当事者が「国際取引の一般原則」や lex mercatoria によると決めたとき', 'CISG などの条約や国内法の解釈を補うとき', '国が法律を作るときのお手本として']
        },
        {
          title: 'なぜ？ 3つが補い合う理由',
          paras: ['国の法律を変えられるのは国だけ。だから UNCITRAL と UNIDROIT は、国の代表が集まって条約やモデル法を作る。ただし条約は批准に年月がかかる。', 'ICC は商売の現場の慣行を素早くまとめ、実務に合わせて改訂する（インコタームズはおよそ10年ごと）。契約で選べばすぐ使える。国の法と民間のルールの両方があるから、国際取引が回る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'ICC を国連の機関だと思う間違いが多い。ICC は民間の団体で、インコタームズや UCP 600 は法律ではない。もう1つは UNCITRAL と UNIDROIT の取り違え。CISG を作ったのは UNCITRAL。UNIDROIT は CISG の前身（1964年ハーグ統一売買法）と国際商事契約原則。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['UNCITRAL＝国連の委員会（1966年）。CISG とモデル法', 'ICC＝民間の団体（1919年、パリ）。インコタームズと UCP 600。契約に入れて初めて適用', 'UNIDROIT＝ローマの政府間機関。国際商事契約原則（soft law）']
        },
        {
          title: '英単語',
          words: [
            ['UNCITRAL', 'アンシトラル', '国連国際商取引法委員会'],
            ['International Chamber of Commerce (ICC)', '', '国際商業会議所'],
            ['UNIDROIT', 'ユニドロワ', '私法統一国際協会'],
            ['intergovernmental', 'インターガバメンタル', '政府間の（国が集まる）'],
            ['non-governmental organisation', '', '民間の団体（NGO）'],
            ['soft law', 'ソフト ロー', '拘束力のない規範（原則やガイドなど）'],
            ['Principles of International Commercial Contracts', '', '（UNIDROIT）国際商事契約原則']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following organisations is a private, non-governmental body representing business?', choices: ['The International Chamber of Commerce (ICC)', 'UNCITRAL', 'UNIDROIT', 'The United Nations General Assembly'], answer: 0, explain: 'ICC は世界の企業や商工会議所の集まりで、民間の団体。UNCITRAL は国連の委員会、UNIDROIT は政府間の機関で、どちらも国が集まる組織。' },
        { q: 'Which organisation prepared the United Nations Convention on Contracts for the International Sale of Goods (CISG)?', choices: ['The International Chamber of Commerce', 'UNIDROIT', 'UNCITRAL', 'The World Trade Organization'], answer: 2, explain: 'CISG は UNCITRAL が作った。UNIDROIT が準備したのは前身の1964年ハーグ統一売買法。WTO は関税など国どうしの貿易のルールの機関で、会社間の契約法は作らない。' },
        { q: 'Which of the following is issued by the International Chamber of Commerce?', choices: ['The Principles of International Commercial Contracts', 'The Model Law on International Commercial Arbitration', 'The Uniform Customs and Practice for Documentary Credits (UCP 600)', 'The Convention on Contracts for the International Sale of Goods'], answer: 2, explain: 'UCP 600 は ICC の信用状統一規則。国際商事契約原則は UNIDROIT、仲裁モデル法と CISG は UNCITRAL。' },
        { q: 'UNIDROIT の国際商事契約原則が契約に使われる主な場面は？', choices: ['当事者が契約でその原則を選んだとき', 'UNIDROIT の加盟国の会社どうしなら、常に', 'ICC が承認したとき', '国連総会で採択されたので、世界中で常に'], answer: 0, explain: 'UNIDROIT 原則は条約ではない soft law。当事者が選んだとき、条約や国内法の解釈を補うとき、立法のお手本として使われる。加盟国だからといって自動的には適用されない。' },
        { q: 'インコタームズ（Incoterms）について正しいものは？', choices: ['条約なので、批准した国では自動的に適用される', '民間の規則で、当事者が契約に取り入れると適用される', 'UNCITRAL のモデル法である', '日本では国会が法律として制定している'], answer: 1, explain: 'インコタームズは ICC（民間の団体）が作った貿易条件。法律でも条約でもないので、契約に「Incoterms 2020 による」と書いて初めて当事者を縛る。' },
        { q: 'Which TWO of the following are intergovernmental bodies made up of states? (1) UNCITRAL (2) ICC (3) UNIDROIT', choices: ['1 and 2', '1 and 3', '2 and 3', '1 only'], answer: 1, explain: 'UNCITRAL（国連の委員会）と UNIDROIT（独立した政府間機関）は国が集まる組織。ICC は民間の企業団体。' }
      ]
    },
    {
      id: 'B011',
      no: 11,
      title: '第1部 総合演習：法と法体系',
      goal: '第1部の内容（法の種類、政治と法、三権分立、3つの法体系、法の抵触と国際機関）を、本番形式の英語の問題で解けるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(a)', 'K3:A1(b)', 'K3:A1(c)', 'K3:A1(d)', 'K3:A2(a)', 'K3:A2(b)', 'K3:A2(c)'],
      slides: [
        {
          title: '本番の形を思い出す',
          paras: ['K3 は2時間のコンピュータ試験。1問2点の問題が50問で100点。合格は50点。長い記述問題はない。1問あたり約2.4分（120分÷50問）。', '問題は英語。1つの選択肢を選ぶ形のほか、「Which TWO」のように2つ選ぶ形もある。このレッスンでは、1つの会社の場面から第1部を全部ふり返る。'],
          note: { kind: 'tip', text: '設問の NOT、TWO、best describes に先に印をつける。NOT を読み落とすのが一番もったいない失点。' }
        },
        {
          title: '第1部の地図',
          table: { caption: '押さえる点', head: ['項目', '押さえる点'], rows: [['法とは（A1(a)）', '国家が強制できるルール。公法と私法、刑事と民事、国内法と国際法'], ['政治と法（A1(b)）', '政治体制が法の作り方と中身を決める。法の支配'], ['三権分立（A1(c)）', '立法・行政・司法を分け、互いに抑える。司法の独立'], ['3つの法体系（A1(d)）', 'コモン・ロー＝判例、シビル・ロー＝法典、シャリーア＝コーランなど'], ['法の抵触（A2(a)）', '管轄・準拠法・判決の執行'], ['条約とモデル法（A2(b)）', '批准で拘束 ／ 自由に取り込むひな形'], ['3つの機関（A2(c)）', 'UNCITRAL・ICC・UNIDROIT']] }
        },
        {
          title: '場面1: 社員の横領（刑事と民事）',
          example: {
            problem: 'さくら精機の経理担当者が、会社のお金 $30,000 を自分の口座に移した。この出来事は刑事法と民事法のどちらの問題になるか。',
            steps: ['刑事: 国（検察）が被告人を訴追し、処罰（刑罰）を目的にする', '刑事の立証基準は「合理的な疑いを超える」（beyond reasonable doubt）', '民事: 会社が原告（claimant）として、お金の返還や損害賠償を求める', '民事の立証基準は「蓋然性の優越」（balance of probabilities）'],
            answer: '両方になる。1つの出来事が、刑事事件と民事の請求の両方になりうる'
          }
        },
        {
          title: '場面2: 3つの国の取引先（法体系）',
          example: {
            problem: 'さくら精機は英国、フランス、サウジアラビアの会社と取引を始める。それぞれの国の主な法源は何か。',
            steps: ['英国: コモン・ロー。判例と制定法。上位の裁判所の判決の ratio decidendi が下位の裁判所を拘束する（stare decisis）。obiter dicta は拘束しない', 'フランス: シビル・ロー。体系的な法典（民法典 1804年）が中心。裁判官は法典を当てはめる', 'サウジアラビア: シャリーア法。コーラン、スンナ、イジュマー（学者の合意）、キヤース（類推）', 'シャリーアでは利息（riba）が禁止されるので、取引の組み方に影響する'],
            answer: '英国＝判例と制定法、フランス＝法典、サウジアラビア＝コーランなど宗教上の法源'
          }
        },
        {
          title: '場面3: 法律と裁判所の力関係（三権分立）',
          paras: ['三権分立（separation of powers）は、法を作る立法（legislature）、法を実行する行政（executive）、法を解釈・適用する司法（judiciary）を分け、互いに抑え合わせる考え方。司法が独立していることが法の支配の土台になる。', '英国では大臣はふつう議員でもあり、立法と行政が重なる。議会主権（parliamentary sovereignty）なので、裁判所は議会の法律を無効にできない。行政の行為は司法審査（judicial review）で審査できる。米国は分立が厳しく、最高裁は法律を憲法違反として無効にできる（違憲審査）。']
        },
        {
          title: '場面: 進出先の政治体制（政治と法）',
          paras: ['さくら精機は、裁判所が与党の言いなりの国に工場を建てるか迷っている。政治体制は、法を誰がどう作るか、法の中身、使われ方を決める。', '民主制で法の支配（rule of law）がある国では、政府も法に縛られ、独立した裁判所で争える。権威主義の国では法が支配者の道具になりやすく（rule by law）、国有化や急な規制変更のリスク（political risk）が高い。']
        },
        {
          title: '場面4: ブラジルへの輸出（国際取引）',
          example: {
            problem: 'さくら精機がブラジルの会社に機械を売る契約を作る。第1部の知識で、契約前に考えることを整理する。',
            steps: ['法の抵触: 準拠法条項と管轄条項を入れて、どの国の法律・裁判所かを決めておく', '条約: 日本もブラジルも CISG に加入している。CISG は UNCITRAL が作った条約', '貿易条件: ICC のインコタームズを契約に入れると、費用と危険の分け方が決まる', '契約の一般ルール: 当事者が選べば UNIDROIT 原則も使える（soft law）'],
            answer: '準拠法と管轄を決め、CISG（UNCITRAL）、インコタームズ（ICC）、UNIDROIT 原則の役割を区別する'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '刑事と民事の立証基準の取り違え（刑事＝合理的な疑いを超える、民事＝蓋然性の優越）。ratio と obiter の逆。ICC を国連の機関とする間違い。署名だけで条約に縛られるという思い込み。選択肢に「必ず」「常に」とあるものは疑う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['刑事＝国が訴追・処罰・合理的な疑いを超える。民事＝原告が救済を求める・蓋然性の優越', 'コモン・ロー＝判例（ratio が拘束）、シビル・ロー＝法典、シャリーア＝コーラン・スンナ・イジュマー・キヤース', '国際: 準拠法と管轄、条約は批准で拘束、UNCITRAL＝CISG、ICC＝インコタームズ、UNIDROIT＝契約原則']
        },
        {
          title: '英単語',
          words: [
            ['beyond reasonable doubt', '', '合理的な疑いを超える（刑事の立証基準）'],
            ['balance of probabilities', '', '蓋然性の優越（民事の立証基準）'],
            ['stare decisis', 'スターレ デシシス', '先例拘束の原則'],
            ['ratio decidendi', 'レイシオ デシデンダイ', '判決理由（後の事件を拘束する部分）'],
            ['obiter dicta', 'オビタ ディクタ', '傍論（拘束しない部分）'],
            ['separation of powers', '', '三権分立'],
            ['judicial review', 'ジューディシャル レビュー', '司法審査（行政の行為などが法の範囲内かを裁判所が審査）'],
            ['parliamentary sovereignty', 'パーラメンタリー ソブリンティ', '議会主権'],
            ['rule of law', 'ルール オブ ロー', '法の支配']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a feature of civil law, as opposed to criminal law?', choices: ['The action is brought by the state against the accused', 'The standard of proof is beyond reasonable doubt', 'The action is brought by a claimant and the usual remedy is damages', 'The main purpose is to punish the wrongdoer'], answer: 2, explain: '民事は原告（claimant）が訴え、主な救済は損害賠償。立証基準は蓋然性の優越。ほかの3つは刑事法の特徴。' },
        { q: 'Which of the following is a characteristic of a civil law system?', choices: ['Judges are bound by the ratio decidendi of earlier decisions of higher courts', 'The main sources of law are the Quran and the Sunnah', 'Law is developed mainly by judges deciding cases one by one', 'The main source of law is a comprehensive written code'], answer: 3, explain: 'シビル・ローは法典が中心。ratio decidendi に拘束される・判例で法を育てるのはコモン・ロー（先例拘束）、コーランとスンナはシャリーア法の特徴。' },
        { q: 'Which of the following is most likely to be a feature of a liberal democracy rather than an authoritarian regime?', choices: ['The judiciary is independent of the executive', 'The executive can overrule court decisions that it dislikes', 'Laws are made by a ruler without an elected legislature', 'Political parties other than the ruling party are banned'], answer: 0, explain: '司法の独立は三権分立と法の支配の土台で、自由民主主義の特徴。残りは権力が一か所に集まる権威主義の特徴。' },
        { q: 'Which of the following statements about the conflict of laws is correct?', choices: ['A court always applies the law of the country in which it sits', 'The parties to an international contract may usually choose the law that will govern their contract', 'A choice of law clause also decides which court has jurisdiction', 'The conflict of laws applies only to disputes between states'], answer: 1, explain: '多くの国は当事者が選んだ準拠法を尊重する。裁判所の国と準拠法の国は別でもよい。管轄は別の条項で決める。国と国の関係は国際公法。' },
        { q: 'Which of the following statements is correct?', choices: ['A state is bound by a convention once its representative has signed it', 'A state may adapt a model law when incorporating it into its national law', 'A model law must be ratified before it can be used', 'A convention can be modified freely by each state that adopts it'], answer: 1, explain: 'モデル法は各国が直して取り込める。条約は批准（加入）で拘束し、中身は留保の範囲でしか変えられない。モデル法に批准の手続はない。' },
        { q: 'Which of the following pairs of organisation and instrument is correct?', choices: ['ICC - CISG', 'UNIDROIT - Incoterms', 'UNCITRAL - Model Law on International Commercial Arbitration', 'UNCITRAL - UCP 600'], answer: 2, explain: '仲裁モデル法は UNCITRAL。CISG も UNCITRAL。インコタームズと UCP 600 は ICC。UNIDROIT の代表作は国際商事契約原則。' }
      ]
    }
  ],
  cards: [
    { id: 'B008-1', lesson: 'B008', q: '法の抵触（conflict of laws）とは？', a: '外国の要素がある争いで、どの国の裁判所・どの国の法律かを決める問題。国際私法とも' },
    { id: 'B008-2', lesson: 'B008', q: '国をまたぐ争いで出る3つの問いは？', a: '管轄（jurisdiction）、準拠法（applicable law）、判決の承認と執行' },
    { id: 'B008-3', lesson: 'B008', q: '準拠法条項と管轄条項の違いは？', a: '準拠法条項＝どの国の法律で判断するか。管轄条項＝どの国の裁判所で争うか' },
    { id: 'B008-4', lesson: 'B008', q: '契約で準拠法を選んでいないときは？', a: '裁判所が自国の国際私法で決める。多くは契約に最も密接に関係する国の法律' },
    { id: 'B008-5', lesson: 'B008', q: 'なぜ国際的な法規制が必要？', a: '国ごとに法が違い、調べるコスト・結果の不確かさ・判決執行の難しさが取引を妨げるから' },
    { id: 'B008-6', lesson: 'B008', q: '国際公法と国際私法の違いは？', a: '国際公法＝国と国の関係のルール。国際私法＝私人どうしの争いの準拠法・管轄のルール' },
    { id: 'B009-1', lesson: 'B009', q: '条約（treaty）とは？', a: '国と国の書面の合意で、国際法に従うもの。convention という名前でも性質は同じ' },
    { id: 'B009-2', lesson: 'B009', q: '国が条約に拘束されるのはいつ？', a: '批准（ratification）か加入（accession）をしたとき。署名だけでは原則拘束されない' },
    { id: 'B009-3', lesson: 'B009', q: 'モデル法（model law）とは？', a: '国際機関が作る立法のひな形。各国は自由に変えて国内法にできる。批准はない' },
    { id: 'B009-4', lesson: 'B009', q: '条約とモデル法の長所は？', a: '条約＝各国のルールが同じになりやすい。モデル法＝柔軟で採用されやすい（ただし国ごとに差）' },
    { id: 'B009-5', lesson: 'B009', q: '一元論と二元論の違いは？', a: '一元論＝批准で国内法としても効く。二元論＝議会の立法で取り込む必要がある（英国）' },
    { id: 'B009-6', lesson: 'B009', q: 'CISG の採択と発効は？', a: '1980年にウィーンで採択、1988年1月1日発効。日本では2009年8月1日から効力' },
    { id: 'B010-1', lesson: 'B010', q: 'UNCITRAL とは？', a: '国連国際商取引法委員会。1966年に国連総会が設立。国際取引法の調和と統一。CISG・モデル法' },
    { id: 'B010-2', lesson: 'B010', q: 'ICC とは？', a: '国際商業会議所。1919年設立、本部パリの民間団体。インコタームズ・UCP 600' },
    { id: 'B010-3', lesson: 'B010', q: 'UNIDROIT とは？', a: '私法統一国際協会。本部ローマの政府間機関。国際商事契約原則' },
    { id: 'B010-4', lesson: 'B010', q: 'CISG を作ったのは？', a: 'UNCITRAL。前身の1964年ハーグ統一売買法は UNIDROIT が準備した' },
    { id: 'B010-5', lesson: 'B010', q: 'インコタームズが当事者を縛るのはなぜ？', a: '法律ではなく、当事者が契約に取り入れるから' },
    { id: 'B010-6', lesson: 'B010', q: 'UNIDROIT 原則はどう使われる？', a: '当事者が選んだとき／条約や国内法の解釈を補うとき／立法のお手本として' },
    { id: 'B011-1', lesson: 'B011', q: '刑事と民事の立証基準は？', a: '刑事＝合理的な疑いを超える。民事＝蓋然性の優越' },
    { id: 'B011-2', lesson: 'B011', q: 'コモン・ローとシビル・ローの主な法源は？', a: 'コモン・ロー＝判例（先例拘束）と制定法。シビル・ロー＝体系的な法典' },
    { id: 'B011-3', lesson: 'B011', q: 'シャリーア法の4つの法源は？', a: 'コーラン、スンナ、イジュマー（合意）、キヤース（類推）' },
    { id: 'B011-4', lesson: 'B011', q: '三権分立の3つの権力は？', a: '立法（法を作る）、行政（法を執行する）、司法（法を解釈・適用する）' },
    { id: 'B011-5', lesson: 'B011', q: '英国と米国で、裁判所と法律の関係はどう違う？', a: '英国＝議会主権で法律を無効にできない。米国＝違憲審査で無効にできる' },
    { id: 'B011-6', lesson: 'B011', q: '機関と文書の組み合わせは？', a: 'UNCITRAL＝CISG・モデル法、ICC＝インコタームズ・UCP 600、UNIDROIT＝契約原則' },
    { id: 'B011-7', lesson: 'B011', q: '法の支配（rule of law）と法による支配（rule by law）の違いは？', a: '法の支配＝政府も法に縛られる。法による支配＝法が支配者の道具で、支配者は縛られない' }
  ]
});
