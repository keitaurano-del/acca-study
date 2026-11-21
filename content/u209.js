(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 209,
  part: 3,
  partTitle: '国際輸送条件と貿易書類',
  lessons: [
    {
      id: 'B032',
      no: 32,
      title: 'インコタームズとは：何を決めて何を決めないか',
      goal: 'インコタームズが誰の作ったどんなルールで、売買契約のどの部分（引渡し・危険・費用・通関・運送と保険の手配）を決め、どの部分（所有権・代金・救済など）を決めないかを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C1(a)'],
      slides: [
        {
          title: 'ネット通販の「送料込み」',
          paras: ['ネットで買い物をすると「送料込み」「店頭受取」「着払い」のような短い言葉で、送料は誰が払うか、どこで受け取るかが決まる。', '国をまたぐ売買では、決めることがもっと多い。トラック代と船賃は誰が払うか。輸出と輸入の手続は誰がするか。途中で荷物が壊れたら、誰の損になるか。', 'これを毎回、長い文章で書くのは大変で、誤解も生まれる。そこで使うのが、3文字の共通の略語、インコタームズ（Incoterms）になる。']
        },
        {
          title: 'インコタームズとは',
          paras: ['国際商業会議所（ICC: International Chamber of Commerce）が作った、物品売買の取引条件（trade terms）の国際ルール。EXW や FOB、CIF のような3文字の規則が11ある。', '現行の版は Incoterms 2020（2020年1月1日から）。ICC はおよそ10年ごとに改訂していて、次の版（2030年版の見込み）を準備している。発表時期はまだ公表されていない。', 'ICC は民間の団体なので、インコタームズは国の法律でも条約でもない。'],
          formula: '規則 ＋ 指定地 ＋ 版　例: FOB Yokohama Incoterms 2020'
        },
        {
          title: '契約に組み込んで初めて使われる',
          paras: ['インコタームズは、当事者が売買契約に組み込んだ（incorporate）ときに、その契約の条件として効力をもつ。法律のように自動的に適用されるわけではない。', '組み込むときは、規則と指定地（named place）と版を書く。指定地は港や町の名前だけでなく、できるだけ正確に書く。版を書くのは、古い版（Incoterms 2010 など）を選ぶこともできるため。', 'インコタームズは事業者どうし（business-to-business）の物品売買のためのルール。国際取引が中心だが、国内の取引にも使える。']
        },
        {
          title: 'インコタームズが決めること',
          table: { caption: '売主と買主の間で、次のことを分ける', head: ['事項', '内容'], rows: [['引渡し（delivery）', 'どこで・いつ売主の引渡しが終わるか'], ['危険の移転（transfer of risk）', '物品の滅失・損傷の損が、いつ買主に移るか'], ['費用の分担（costs）', '運賃・積込み・荷降ろし・通関などの費用を誰が払うか'], ['運送と保険の手配', '運送契約・保険契約を誰が結ぶか'], ['通関（customs clearance）', '輸出の手続と輸入の手続を誰がするか'], ['書類と通知', '引渡しの証拠の書類や、相手への通知']] },
          after: 'Incoterms 2020 では、各規則が売主の義務 A1〜A10 と買主の義務 B1〜B10 の対になって書かれている。'
        },
        {
          title: 'インコタームズが決めないこと',
          list: ['所有権（property / title）がいつ買主に移るか', '代金の額、支払の時期・方法', '契約違反の救済、遅れの結果', '免責（不可抗力など）', '紛争の解決方法と準拠法', 'そもそも契約が成立したか'],
          after: 'これらは、売買契約のほかの条項と、契約に適用される法（国際物品売買なら CISG など）が決める。所有権の移転は CISG も扱わない（Art 4(b)）ので、適用される国内法で決まる。'
        },
        {
          title: '契約の中での位置',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="インコタームズは売買契約の一部の部品で、運送契約や所有権の移転は扱わない" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">インコタームズは売買契約の部品</text><rect x="20" y="50" width="400" height="152" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" font-size="15" font-weight="600" fill="var(--ink)">売買契約（sale contract）</text><rect x="36" y="90" width="178" height="96" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="125" y="118" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">インコタームズ</text><text x="125" y="144" text-anchor="middle" fill="var(--ink)">引渡し・危険</text><text x="125" y="168" text-anchor="middle" fill="var(--ink)">費用・通関・手配</text><rect x="226" y="90" width="178" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="118" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">ほかの条項と</text><text x="315" y="144" text-anchor="middle" fill="var(--ink)">準拠法（CISGなど）</text><text x="315" y="168" text-anchor="middle" fill="var(--ink)">代金・支払・救済</text><text x="20" y="230" fill="var(--quiet)">運送人との運送契約は、別の契約</text><text x="20" y="254" fill="var(--quiet)">所有権の移転は、適用される国内法</text></svg>`,
          caption: 'インコタームズが拘束するのは売主と買主だけ。船会社やトラック会社との運送契約の中身は決めない。'
        },
        {
          title: '「危険」の意味',
          paras: ['危険（risk）とは、物品が事故などで偶然に滅失・損傷したとき、その損を誰が負うか、ということ。', '危険が買主に移った後で物品が嵐で失われても、買主は代金を払わなければならない（CISG Art 66）。買主は、保険会社や運送人に請求して損を取り戻すことになる。', '日本の感覚では「持ち主が損をかぶる」と考えがち。国際売買では、危険の移転と所有権の移転は切り離して考える。インコタームズが決めるのは危険のほうだけ。']
        },
        {
          title: 'なぜ？ 共通の定義が必要な理由',
          paras: ['「FOB」という言葉は昔から使われていたが、国や業界によって意味が少しずつ違った。売主は「船に載せるまで」、買主は「船の中で荷を整えるまで」と考えていれば、事故のたびに争いになる。', 'ICC が1つの定義を決め、世界中の売主・買主・銀行・保険会社・運送人が同じ意味で使えば、誤解と紛争が減る。3文字を書くだけで、長い条項を契約に入れたのと同じ効果がある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'インコタームズが所有権の移転時期も決めると思い込む（決めない）。また、インコタームズを法律や条約だと思う。ICC は民間の団体で、契約に組み込まなければ当事者を拘束しない。さらに、インコタームズを運送人との運送契約のルールと混同しない。決めるのは売主と買主の間の分担だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['インコタームズは ICC が作った取引条件の規則（11個、現行は Incoterms 2020）。契約に組み込んで初めて使われる', '決めるのは、引渡し・危険の移転・費用・運送と保険の手配・通関・書類', '決めないのは、所有権・代金と支払・違反の救済・免責・紛争解決。これらは契約と準拠法（CISG など）が決める']
        },
        {
          title: '英単語',
          words: [
            ['Incoterms', 'インコタームズ', 'ICC の取引条件の規則（International Commercial Terms）'],
            ['International Chamber of Commerce (ICC)', '', '国際商業会議所'],
            ['trade terms', 'トレード タームズ', '取引条件'],
            ['named place', 'ネームド プレイス', '指定地（規則の後に書く場所）'],
            ['incorporate', 'インコーポレイト', '（契約に）組み込む'],
            ['transfer of risk', '', '危険の移転'],
            ['allocation of costs', '', '費用の分担'],
            ['customs clearance', 'カスタムズ クリアランス', '通関（輸出・輸入の手続）'],
            ['transfer of property (title)', '', '所有権の移転']
          ]
        }
      ],
      quiz: [
        { q: "Which of the following matters is NOT dealt with by the ICC Incoterms 2020 rules?", choices: ["The point at which risk of loss or damage passes from seller to buyer", "The allocation of costs between seller and buyer", "Which party must carry out export clearance", "The transfer of property in the goods from seller to buyer"], answer: 3, explain: 'インコタームズは所有権（property / title）の移転を扱わない。所有権は適用される国内法で決まる。危険の移転、費用の分担、輸出通関を誰がするかは、どれもインコタームズが決める中心の事項。' },
        { q: "Which of the following statements about the Incoterms rules is correct?", choices: ["They are an international convention which binds every state that ratifies it", "They apply to a contract of sale when the parties incorporate them into that contract", "They govern the contract of carriage between the shipper and the carrier", "They apply automatically to every international sale of goods"], answer: 1, explain: 'インコタームズは民間団体 ICC のルールで、当事者が契約に組み込んで初めて使われる。条約ではない（条約の例は CISG）。運送人との運送契約は別の契約で、インコタームズの対象外。自動的に全ての国際売買に適用されることもない。' },
        { q: 'インコタームズを作っている団体はどれ？', choices: ['国際商業会議所（ICC）', '国連国際商取引法委員会（UNCITRAL）', '私法統一国際協会（UNIDROIT）', '世界貿易機関（WTO）'], answer: 0, explain: 'インコタームズと信用状のルール UCP 600 は、民間の ICC が作る。UNCITRAL は CISG やモデル法を作った国連の委員会。UNIDROIT は国際商事契約原則を作った政府間の機関。WTO は国どうしの貿易ルール（関税など）を扱う。' },
        { q: '危険（risk）が買主に移った後で、運送中の船が嵐にあい、物品がすべて失われた。売主に落ち度はない。買主はどうなる？', choices: ['物品を受け取っていないので、代金を払わなくてよい', '代金の半分だけ払えばよい', '代金を払う義務は残る。損は保険会社や運送人に請求して取り戻す', '所有権がまだ売主にあれば、必ず売主の損になる'], answer: 2, explain: '危険が移った後の偶然の滅失は買主の損で、代金を払う義務は消えない（CISG Art 66）。だから買主は保険をかけておく。危険の移転は所有権とは切り離されているので、「所有権がまだ売主にあるから売主の損」とはならない。' },
        { q: "A contract of sale states: 'CIP Rotterdam Incoterms 2020'. Which element of this term tells the parties which version of the rules applies?", choices: ["CIP", "Rotterdam", "Incoterms 2020", "The term does not identify a version"], answer: 2, explain: '規則（CIP）＋指定地（Rotterdam）＋版（Incoterms 2020）の順に書く。版を書くのは、古い版を選ぶこともできるため。CIP は規則の名前、Rotterdam は指定地。' }
      ]
    },
    {
      id: 'B033',
      no: 33,
      title: 'どの輸送手段でも使える7つの規則',
      goal: 'EXW・FCA・CPT・CIP・DAP・DPU・DDP について、危険が移る地点、費用の負担、通関・保険・荷降ろしの分担を説明し、事故が起きたときにどちらの負担かを判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C1(a)'],
      slides: [
        {
          title: 'ピザの受け取り方',
          paras: ['ピザは、店で受け取ることも、家の玄関まで届けてもらうこともできる。店で受け取れば安いが、運ぶ手間と途中で落とす心配は自分持ち。配達なら高くなるが、玄関までは店の責任になる。', 'インコタームズの7つの規則も同じ考え方。売主の負担（仕事・費用・危険）が大きくなるほど、売主はその分を代金に上乗せする。', 'この7つは、トラック・鉄道・飛行機・船、どの輸送手段でも、複数を組み合わせても使える（any mode or modes of transport）。']
        },
        {
          title: '7つの規則：売主の負担が小さい順',
          table: { caption: 'どの輸送手段でも使える規則', head: ['規則', '日本語の名前', '売主の引渡し（危険が移る時）'], rows: [['EXW Ex Works', '工場渡し', '売主の施設などで、積み込まずに買主の自由にした時'], ['FCA Free Carrier', '運送人渡し', '買主が指定した運送人に渡した時'], ['CPT Carriage Paid To', '輸送費込み', '売主が手配した最初の運送人に渡した時'], ['CIP Carriage and Insurance Paid To', '輸送費保険料込み', '同上（CPT と同じ）'], ['DAP Delivered at Place', '仕向地持込渡し', '仕向地で、荷降ろしせずに買主の自由にした時'], ['DPU Delivered at Place Unloaded', '荷卸込持込渡し', '仕向地で、荷降ろしして買主の自由にした時'], ['DDP Delivered Duty Paid', '関税込持込渡し', '仕向地で、輸入通関を済ませ、荷降ろしせずに買主の自由にした時']] },
          after: '頭文字で覚える: E＝出発地で渡すだけ、F＝主な運送は買主が手配、C＝主な運送の費用は売主（危険は出発地で移る）、D＝到着地まで売主が運ぶ。'
        },
        {
          title: '危険が移る地点の地図',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="7つの規則で危険が移る4つの地点。CPTとCIPは費用が仕向地まで売主" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">危険が移る地点（7つの規則）</text><text x="60" y="66" text-anchor="middle" fill="var(--ink)">売主の</text><text x="60" y="86" text-anchor="middle" fill="var(--ink)">施設</text><text x="170" y="66" text-anchor="middle" fill="var(--ink)">最初の</text><text x="170" y="86" text-anchor="middle" fill="var(--ink)">運送人</text><text x="290" y="66" text-anchor="middle" fill="var(--ink)">仕向地</text><text x="290" y="86" text-anchor="middle" fill="var(--ink)">降ろす前</text><text x="390" y="66" text-anchor="middle" fill="var(--ink)">仕向地</text><text x="390" y="86" text-anchor="middle" fill="var(--ink)">降ろし後</text><line x1="60" y1="108" x2="390" y2="108" stroke="var(--edge)" stroke-width="2"/><circle cx="60" cy="108" r="7" fill="var(--ink)"/><circle cx="170" cy="108" r="7" fill="var(--ink)"/><circle cx="290" cy="108" r="7" fill="var(--ink)"/><circle cx="390" cy="108" r="7" fill="var(--ink)"/><text x="60" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">EXW</text><text x="170" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">FCA</text><text x="170" y="162" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">CPT</text><text x="170" y="184" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">CIP</text><text x="290" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">DAP</text><text x="290" y="162" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">DDP</text><text x="390" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">DPU</text><rect x="20" y="204" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="228" font-size="15" fill="var(--ink)">CPT・CIP は、危険は運送人に渡した時に移るが</text><text x="36" y="250" font-size="15" fill="var(--ink)">運送費（CIP は保険も）は仕向地まで売主</text></svg>`,
          caption: 'E と F の規則は出発地で、D の規則は到着地で、危険と費用の両方が移る。C の規則だけは、危険が移る地点と、売主の費用が終わる地点が分かれる。'
        },
        {
          title: '両端の2つ：EXW と DDP',
          paras: ['EXW（工場渡し）は売主の負担が最も小さい。売主は自分の施設などで物品を買主の自由にするだけで、トラックへの積込みの義務もない。輸出通関も買主がする（売主は必要な情報を提供して協力する）。', 'DDP（関税込持込渡し）は売主の負担が最も大きい。仕向地まで運び、輸入通関をして関税も払う。'],
          formula: '輸出通関は売主（EXW だけ例外）／輸入通関は買主（DDP だけ例外）',
          note: { kind: 'tip', text: 'EXW は、買主が売主の国で輸出の手続をできないと使いにくい。DDP は、売主が買主の国で輸入の手続をできないと使いにくい。' }
        },
        {
          title: 'FCA（運送人渡し）',
          paras: ['売主は、買主が指定した運送人（carrier）に物品を渡す。輸出通関は売主。運送契約は買主が結ぶ。', '引渡しの時点は場所で変わる。売主の施設が指定地なら、買主が用意したトラックなどに積み込んだ時。それ以外の場所なら、売主のトラックに載ったまま、荷降ろしできる状態で運送人の自由にした時。', 'Incoterms 2020 では、海上輸送のときに、買主が運送人に指示して、船積みの記載のある船荷証券（on board bill of lading）を売主に出させる、と合意できるようになった。銀行の信用状取引で使いやすくするため。']
        },
        {
          title: 'C の規則：CPT と CIP',
          paras: ['売主が運送契約を結び、指定した仕向地までの運送費を払う。それでも危険は、最初の運送人に渡した時点（出発地側）で買主に移る。費用の地点と危険の地点が違う「2つの重要な地点」がある規則。', 'CIP はこれに保険が加わる。売主が買主のために貨物保険をかける。最低条件は、広い補償の協会貨物約款（A）（Institute Cargo Clauses (A)）相当で、保険金額は少なくとも契約代金の110%。'],
          note: { kind: 'tip', text: 'なぜ？ 売主は運送の手配と支払を「サービス」として引き受けるだけで、運送中の事故の損までは引き受けない、という分け方。だから運送中の損傷は買主が保険で取り戻す。' }
        },
        {
          title: 'D の規則：DAP・DPU・DDP',
          paras: ['どれも売主が仕向地まで運び、到着までの危険を負う（到着地の売買）。違いは荷降ろしと輸入通関。'],
          table: { caption: 'D の規則の違い', head: ['規則', '荷降ろし', '輸入通関・関税'], rows: [['DAP', '買主', '買主'], ['DPU', '売主', '買主'], ['DDP', '買主', '売主']] },
          after: 'DPU は、売主が仕向地で荷降ろしまでする唯一の規則。Incoterms 2010 の DAT（ターミナル持込渡し）の名前を変え、ターミナル以外の場所でも使えるようにした。'
        },
        {
          title: '例題: どちらの負担か',
          example: {
            problem: '大阪の売主 S が、シカゴの買主 B に機械を売った。S は大阪の工場で独立した運送会社に機械を渡し、運送会社がトラック・船・鉄道で運んだ。太平洋の上で機械が損傷した。(1) 契約が CPT Chicago Incoterms 2020 なら、損傷は誰の負担か。シカゴまでの運賃は誰が払うか。(2) DAP Chicago Incoterms 2020 ならどうか。',
            steps: ['(1) CPT では、売主が手配した最初の運送人に渡した時（大阪の工場）に危険が移る', '太平洋での損傷は危険が移った後 → 買主 B の負担。B は代金を払い、自分の保険などで取り戻す', 'CPT の運賃はシカゴまで売主 S が払う（危険と費用の地点が分かれる）', '(2) DAP では、シカゴで荷降ろし前に買主の自由にした時に危険が移る', '太平洋での損傷はその前 → 売主 S の負担。S はまだ引渡しを終えていない'],
            answer: '(1) 損傷は B の負担、運賃は S。(2) 損傷は S の負担（運賃も S）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'CPT・CIP の C を見て「売主が仕向地まで費用を払うのだから、危険も仕向地まで売主」と思い込む。危険は最初の運送人に渡した時に移る。また、DAP でも売主が荷降ろしをすると思う（荷降ろしまでするのは DPU だけ）。さらに、EXW でも輸出通関は売主と思い込まない。EXW だけは買主がする。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売主の負担が小さい順に EXW → FCA → CPT → CIP → DAP → DPU → DDP。どの輸送手段でも使える', 'E・F は出発地、D は到着地で危険と費用が移る。C（CPT・CIP）は危険は出発地、費用は仕向地まで売主', '輸出通関は売主（EXW 以外）、輸入通関は買主（DDP 以外）。荷降ろしは DPU だけ売主。保険は CIP が協会貨物約款（A）相当・110%']
        },
        {
          title: '英単語',
          words: [
            ['Ex Works (EXW)', 'エクス ワークス', '工場渡し'],
            ['Free Carrier (FCA)', 'フリー キャリア', '運送人渡し'],
            ['Carriage Paid To (CPT)', 'キャリッジ ペイド トゥ', '輸送費込み'],
            ['Carriage and Insurance Paid To (CIP)', '', '輸送費保険料込み'],
            ['Delivered at Place (DAP)', '', '仕向地持込渡し'],
            ['Delivered at Place Unloaded (DPU)', '', '荷卸込持込渡し'],
            ['Delivered Duty Paid (DDP)', '', '関税込持込渡し'],
            ['carrier', 'キャリア', '運送人'],
            ['place of destination', '', '仕向地'],
            ['Institute Cargo Clauses (A)', '', '協会貨物約款（A）（広い補償の貨物保険の条件）']
          ]
        }
      ],
      quiz: [
        { q: "Under the Incoterms 2020 rules, which is the only rule that requires the seller to unload the goods at the place of destination?", choices: ["DAP", "DDP", "DPU", "CIP"], answer: 2, explain: 'DPU（Delivered at Place Unloaded）だけが、売主に仕向地での荷降ろしを求める。DAP と DDP は、荷降ろしせずに買主の自由にした時に引渡しが終わる。CIP は出発地側で危険が移る規則。' },
        { q: "Under the CPT rule (Incoterms 2020), when does risk of loss or damage to the goods pass from the seller to the buyer?", choices: ["When the goods are handed over to the first carrier contracted by the seller", "When the goods arrive at the named place of destination", "When the goods are loaded on board a vessel at the port of shipment", "When the buyer clears the goods for import"], answer: 0, explain: 'CPT は、売主が手配した最初の運送人に渡した時に危険が移る。運賃は仕向地まで売主が払うが、危険は出発地側で移る。仕向地で移るのは D の規則。本船の船上で移るのは FOB・CFR・CIF で、CPT は船以外の輸送にも使える。' },
        { q: "Under which of the following Incoterms 2020 rules is the BUYER responsible for export clearance?", choices: ["FCA", "EXW", "DAP", "DDP"], answer: 1, explain: '輸出通関は原則として売主の仕事で、例外は EXW だけ。FCA・DAP・DDP では売主が輸出通関をする。DDP では売主が輸入通関までする。' },
        { q: 'CIP で売主が買主のためにかける保険の最低条件として正しいものは？', choices: ['協会貨物約款（C）相当で、契約代金の100%', '協会貨物約款（A）相当で、契約代金の少なくとも110%', '保険をかける義務はない', '保険は買主がかけ、費用だけ売主が払う'], answer: 1, explain: 'Incoterms 2020 の CIP は、広い補償の協会貨物約款（A）相当、保険金額は少なくとも代金の110%。協会貨物約款（C）は CIF の最低条件で、保険金額も110%が最低。保険を手配するのは売主自身。' },
        { q: '契約は DAP Hamburg Incoterms 2020。トラックがハンブルクの買主の倉庫に着いた後、買主の作業員が荷降ろし中に物品を落として壊した。損傷は誰の負担？', choices: ['売主。DAP は仕向地までの全てを売主が負担するから', '運送会社。荷降ろしはいつも運送会社の責任だから', '買主。DAP では荷降ろし前の状態で危険が移り、荷降ろしは買主がするから', '売主と買主で半分ずつ'], answer: 2, explain: 'DAP は、仕向地で荷降ろしせずに買主の自由にした時に引渡しが終わり、危険が移る。荷降ろしは買主の仕事で、その間の事故は買主の負担。売主が荷降ろしまで負担したければ DPU を選ぶ。' },
        { q: "Which of the following Incoterms 2020 rules places the GREATEST obligations on the seller?", choices: ["EXW", "CIP", "DDP", "DPU"], answer: 2, explain: 'DDP は、仕向地まで運び、輸入通関をして関税も払う。売主の負担が最も大きい。EXW は売主の負担が最も小さい。DPU は売主が荷降ろしまでするが、輸入通関は買主。CIP は運送費と保険料を払うが、危険は最初の運送人に渡した時に移る。' }
      ]
    },
    {
      id: 'B034',
      no: 34,
      title: '海上・内陸水路用の4つの規則',
      goal: 'FAS・FOB・CFR・CIF について、危険が移る地点、運送と保険の手配、費用の負担、指定地の書き方を説明し、CIF の最低保険金額を計算できるようになる。コンテナ輸送では FCA・CPT・CIP が適する理由も説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C1(a)'],
      slides: [
        {
          title: 'フェリーに荷物を預ける',
          paras: ['離島の親戚に荷物を送るとき、港でフェリーに荷物を載せてもらう場面を考える。船に載るまでは自分の責任、船に載ったら先は相手の責任、と分けると分かりやすい。', '海上輸送のための4つの規則は、まさにこの「船」を境目にしている。船（vessel）で運ぶとき、海か内陸の水路（川や運河）で運ぶときだけに使う。']
        },
        {
          title: '4つの規則',
          table: { caption: '海上・内陸水路の輸送だけに使う規則', head: ['規則', '日本語の名前', '売主の引渡し（危険が移る時）'], rows: [['FAS Free Alongside Ship', '船側渡し', '積地の港で、買主が指定した本船の横（船側）に置いた時'], ['FOB Free On Board', '本船渡し', '積地の港で、買主が指定した本船の船上に置いた時'], ['CFR Cost and Freight', '運賃込み', '積地の港で、本船の船上に置いた時'], ['CIF Cost, Insurance and Freight', '運賃保険料込み', '同上（CFR と同じ）']] },
          after: '4つとも、輸出通関は売主、輸入通関は買主がする。'
        },
        {
          title: '船の上で危険が移る',
          svg: `<svg viewBox="0 0 440 258" role="img" aria-label="FASは本船の横、FOB・CFR・CIFは本船の船上で危険が移る" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">積地の港で、どこに置けば引渡しか</text><rect x="20" y="146" width="150" height="40" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="172" text-anchor="middle" fill="var(--ink)">岸壁（積地の港）</text><rect x="140" y="118" width="26" height="26" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="153" y="108" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">FAS</text><polygon points="190,132 410,132 388,182 212,182" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="300" y="164" text-anchor="middle" fill="var(--ink)">本船</text><rect x="287" y="104" width="26" height="26" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="300" y="94" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">FOB CFR CIF</text><line x1="176" y1="188" x2="420" y2="188" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="6 5"/><text x="20" y="220" fill="var(--ink)">FAS: 本船の横（船側）に置いた時</text><text x="20" y="244" fill="var(--ink)">FOB・CFR・CIF: 本船の船上に置いた時</text></svg>`,
          caption: '昔の FOB は「船の手すり（ship\'s rail）を越えた時」と言われたが、Incoterms 2010 からは「船上に置いた時」になった。'
        },
        {
          title: '指定地の書き方に注意',
          paras: ['FAS と FOB は、積地の港（port of shipment）を書く。例: FOB Yokohama。', 'CFR と CIF は、仕向港（port of destination）を書く。例: CIF Los Angeles。これは売主が運賃（と保険料）を払う終点の港。', 'それでも CFR・CIF の危険は、積地の港で本船の船上に置いた時に移る。CIF Los Angeles と書いてあっても、ロサンゼルスで危険が移るわけではない。']
        },
        {
          title: 'FOB と FAS：買主が船を手配する',
          paras: ['FAS と FOB では、買主が運送契約を結んで本船を手配し、船の名前・積込みの場所・時期を売主に知らせる。運賃は買主が払う。保険をかける義務はどちらにもないが、船積み後の危険は買主にあるので、ふつう買主が自分のために保険をかける。', '買主が船を指定しない、または指定した船が期日に来ない・積み込めない場合は、物品が契約の物として特定されていれば、合意した引渡しの日から買主に危険が移る。買主が約束を守らない不利益は、買主が負う。']
        },
        {
          title: 'CFR と CIF：売主が船を手配する',
          paras: ['CFR と CIF では、売主が仕向港までの運送契約を結び、運賃を払う。CIF ではさらに、売主が買主のために貨物保険をかける。'],
          list: ['最低条件は協会貨物約款（C）（Institute Cargo Clauses (C)）相当。補償の範囲が限られた、最も狭い条件', '保険金額は少なくとも契約代金の110%、契約の通貨で', 'もっと広い補償（協会貨物約款（A）など）は、当事者が合意すれば求められる（費用は買主）'],
          after: 'CIP（どの輸送手段でも使える規則）の最低条件は協会貨物約款（A）相当。CIF は（C）、CIP は（A）と区別する。'
        },
        {
          title: '例題: CIF の最低保険金額',
          example: {
            problem: '売主 S は、物品を CIF Singapore Incoterms 2020、契約代金 $200,000 で売った。S がかけなければならない保険の最低の保険金額と、最低の補償条件は？',
            steps: ['CIF では売主が買主のために保険をかける', '保険金額は少なくとも契約代金の110%', '$200,000 × 110% ＝ $220,000', '補償の最低条件は協会貨物約款（C）相当（合意がなければ、それより広い補償は求められない）'],
            answer: '保険金額 $220,000 以上、協会貨物約款（C）相当以上'
          }
        },
        {
          title: 'なぜ？ コンテナには FCA・CPT・CIP',
          paras: ['コンテナ輸送では、売主はふつう、港から離れたコンテナターミナルで運送人にコンテナを渡す。船に積まれるのは何日も後になる。', 'このとき FOB・CFR・CIF を使うと、売主の手を離れて運送人が預かっている間も、船上に置かれるまで危険が売主に残る。売主には確かめようも防ぎようもない危険になる。', 'そこで ICC は、コンテナ輸送では、運送人に渡した時に危険が移る FCA・CPT・CIP を使うよう勧めている（FOB → FCA、CFR → CPT、CIF → CIP）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'CIF Los Angeles を見て「ロサンゼルスまで売主の危険」と思い込む。CIF の危険は積地の港で船上に置いた時に移る。また、CIF の保険を「全部の危険を補償する保険」と思わない。最低条件は補償の狭い協会貨物約款（C）で、（A）が最低なのは CIP。さらに、この4つの規則を飛行機やトラックの輸送に使わない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['FAS は本船の横、FOB・CFR・CIF は本船の船上に置いた時に危険が移る（いずれも積地の港）', 'FAS・FOB は買主が船を手配（指定地は積地）。CFR・CIF は売主が仕向港までの運賃を払う（指定地は仕向港）', 'CIF の保険は売主がかける。最低は協会貨物約款（C）相当、代金の110%。コンテナ輸送では FCA・CPT・CIP を使う']
        },
        {
          title: '英単語',
          words: [
            ['Free Alongside Ship (FAS)', 'フリー アロングサイド シップ', '船側渡し'],
            ['Free On Board (FOB)', 'フリー オン ボード', '本船渡し'],
            ['Cost and Freight (CFR)', 'コスト アンド フレイト', '運賃込み'],
            ['Cost, Insurance and Freight (CIF)', '', '運賃保険料込み'],
            ['vessel', 'ヴェッセル', '（本）船'],
            ['on board', 'オン ボード', '船上に'],
            ['port of shipment / port of destination', '', '積地の港（船積港） / 仕向港'],
            ['freight', 'フレイト', '運賃'],
            ['Institute Cargo Clauses (C)', '', '協会貨物約款（C）（補償の狭い貨物保険の条件）'],
            ['sea and inland waterway transport', '', '海上・内陸水路の輸送']
          ]
        }
      ],
      quiz: [
        { q: "Under a contract on CIF terms (Incoterms 2020), at what point does risk pass from the seller to the buyer?", choices: ["When the goods are placed alongside the vessel at the port of shipment", "When the vessel arrives at the named port of destination", "When the buyer receives the insurance policy", "When the goods are placed on board the vessel at the port of shipment"], answer: 3, explain: 'CIF の危険は、積地の港で本船の船上に置いた時に移る。指定地は仕向港だが、そこは運賃と保険の終点で、危険の地点ではない。本船の横に置いた時は FAS。保険証券を受け取った時という基準はない。' },
        { q: "A seller agrees to sell goods 'CIF Singapore Incoterms 2020' at a contract price of $80,000. What is the minimum amount ($) for which the seller must insure the goods?", type: 'number', answer: 88000, unit: '$', explain: 'CIF の保険金額は少なくとも契約代金の110%。$80,000 × 110% ＝ $88,000。$80,000（100%）では足りない。補償の最低条件は協会貨物約款（C）相当。' },
        { q: "Goods packed in containers are to be handed over to the carrier at an inland container terminal, several days before they are loaded on board the ship. Which Incoterms 2020 rule does the ICC regard as more appropriate than FOB in this situation?", choices: ["FAS", "FCA", "CFR", "EXW"], answer: 1, explain: 'コンテナを運送人に渡した時に危険が移る FCA が適する（FOB → FCA）。FAS と CFR は FOB と同じく海上用の規則で、問題は解決しない。EXW は売主の負担を最小にする別の規則で、輸出通関まで買主に移ってしまう。' },
        { q: 'FOB Yokohama Incoterms 2020 の契約で、運送契約を結んで本船を指定し、運賃を払うのは誰？', choices: ['売主', '買主', '横浜港の港湾当局', '売主と買主が半分ずつ'], answer: 1, explain: 'FAS・FOB では買主が運送契約を結び、本船を指定して売主に知らせ、運賃を払う。売主が運賃を払って船を手配するのは CFR・CIF。' },
        { q: 'FAS と FOB の違いとして正しいものは？', choices: ['FAS は本船の横（船側）に置いた時、FOB は本船の船上に置いた時に引渡しが終わる', 'FAS は仕向港で、FOB は積地の港で引渡しが終わる', 'FAS は売主が保険をかけ、FOB は買主が保険をかける', 'FAS はどの輸送手段でも使え、FOB は海上だけで使える'], answer: 0, explain: 'どちらも積地の港での引渡しで、違いは「船の横」か「船の上」か。どちらも保険をかける義務はない（売主に保険の義務があるのは CIF と CIP）。FAS も FOB も海上・内陸水路用の規則。' }
      ]
    },
    {
      id: 'B035',
      no: 35,
      title: 'インコタームズとCISGの組み合わせ',
      goal: 'CISG の危険の移転のルール（Art 66〜70）と、契約で選んだインコタームズの規則との関係（Art 6・Art 9）を説明し、同じ事故について CISG だけの場合とインコタームズを使った場合の結論の違いを判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C1(a)', 'K3:B2(d)'],
      slides: [
        {
          title: 'スマホの初期設定',
          paras: ['スマホには最初から初期設定（デフォルト）が入っている。自分で設定を変えれば、その部分だけは自分の設定が優先し、変えなかった部分は初期設定のまま動く。', 'CISG の危険の移転のルールは、この初期設定にあたる。契約でインコタームズの規則を選ぶと、引渡しと危険の部分は、その規則の内容に置き換わる。代金の支払や救済のように、インコタームズが決めない部分は CISG のまま残る。']
        },
        {
          title: 'CISG の危険のルール（おさらい）',
          table: { caption: '危険が買主に移る時（CISG）', head: ['場合', '危険が移る時'], rows: [['運送を伴う売買（Art 67(1)）', '売主が特定の場所で渡す義務がなければ、最初の運送人に渡した時。特定の場所で渡す義務があれば、その場所で運送人に渡した時'], ['運送中の物品の売買（Art 68）', '原則は契約を結んだ時。事情によっては、運送書類を出した運送人に渡した時にさかのぼる'], ['買主が売主の営業所で引き取る（Art 69(1)）', '買主が引き取った時（期限に引き取らなければ、買主の自由にされ、引取りを怠った時）'], ['売主の営業所以外で引き取る（Art 69(2)）', '引渡しの期限が来て、その場所で買主の自由にされたことを買主が知った時']] },
          after: '危険が移った後の滅失・損傷でも、売主の作為・不作為によるものでない限り、買主は代金を払う（Art 66）。物品が契約の物として特定されるまでは危険は移らない（Art 67(2)）。売主が書類を手元に残しても、危険の移転には影響しない（Art 67(1)）。'
        },
        {
          title: 'なぜインコタームズが優先するのか',
          paras: ['Art 6: 当事者は CISG の適用を排除し、またはその規定の効果を変更できる（Art 12 の書面の留保を除く）。インコタームズの規則を選ぶことは、引渡しの場所（Art 31）や危険の移転（Art 67〜69）を契約で変更することにあたる。', 'Art 9(1): 当事者は、合意した慣習（usage）に拘束される。Art 9(2): 国際取引で広く知られ、その種類の取引で通常守られている慣習で、当事者が知っていた（知るべきだった）ものは、黙って契約に入れたとみなされる。インコタームズはこの慣習にあたるとされることがある。'],
          note: { kind: 'tip', text: '試験では、まず「契約で選んだインコタームズの規則が、その範囲で CISG の危険のルールに優先する（Art 6）」を押さえる。版や指定地まで書いて、はっきり組み込むのが確実。' }
        },
        {
          title: '役割分担：どちらが決めるか',
          table: { caption: 'CISG の契約にインコタームズを組み込んだとき', head: ['事項', '決めるもの'], rows: [['契約の成立', 'CISG'], ['引渡しの場所・危険の移転', 'インコタームズ（CISG を上書き）'], ['費用・運送と保険の手配・通関', 'インコタームズ'], ['物品の適合性・代金の支払', 'CISG（と契約の条項）'], ['違反の救済・損害賠償・免責', 'CISG'], ['所有権の移転', 'どちらでもない（国内法）']] }
        },
        {
          title: '同じ輸送で比べる',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="CISGだけ、FOB横浜、DAP仕向地で、危険が移る地点が工場、横浜の船上、仕向地と変わる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">同じ輸送でも危険が移る地点が変わる</text><text x="70" y="62" text-anchor="middle" fill="var(--ink)">工場</text><text x="200" y="62" text-anchor="middle" fill="var(--ink)">横浜で船上</text><text x="380" y="62" text-anchor="middle" fill="var(--ink)">仕向地</text><line x1="70" y1="76" x2="380" y2="76" stroke="var(--edge)" stroke-width="2"/><circle cx="70" cy="76" r="5" fill="var(--ink)"/><circle cx="200" cy="76" r="5" fill="var(--ink)"/><circle cx="380" cy="76" r="5" fill="var(--ink)"/><text x="135" y="98" text-anchor="middle" font-size="12.5" fill="var(--quiet)">トラック</text><text x="290" y="98" text-anchor="middle" font-size="12.5" fill="var(--quiet)">海上</text><text x="20" y="130" fill="var(--ink)">CISG だけ: 最初の運送人に渡した時</text><line x1="70" y1="148" x2="380" y2="148" stroke="var(--edge)" stroke-width="1.25"/><circle cx="70" cy="148" r="8" fill="var(--ink)"/><text x="20" y="184" fill="var(--ink)">FOB Yokohama: 横浜で船上に置いた時</text><line x1="70" y1="202" x2="380" y2="202" stroke="var(--edge)" stroke-width="1.25"/><circle cx="200" cy="202" r="9" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2.5"/><text x="20" y="238" fill="var(--ink)">DAP（仕向地）: 仕向地で降ろす前</text><line x1="70" y1="256" x2="380" y2="256" stroke="var(--edge)" stroke-width="1.25"/><circle cx="380" cy="256" r="8" fill="var(--ink)"/><text x="20" y="288" fill="var(--quiet)">● より左の事故は売主、右の事故は買主の負担</text></svg>`,
          caption: '工場から横浜港へのトラックでの事故は、CISG だけなら買主の負担、FOB Yokohama なら売主の負担になる。'
        },
        {
          title: '例題: トラックの事故',
          example: {
            problem: '東京の売主 S が、カナダの買主 B に機械（代金 $50,000）を売った。日本もカナダも CISG の締約国。S は自分の工場で独立した運送会社に機械を渡し、横浜港まで運ばせた。途中の事故で機械は全損した。S に落ち度はない。(1) 契約に取引条件の定めも、特定の場所で渡す定めもない場合、B は代金を払う必要があるか。(2) 契約が FOB Yokohama Incoterms 2020 ならどうか。',
            steps: ['(1) 契約は運送を伴い、売主に特定の場所で渡す義務はない → Art 67(1)', '危険は最初の運送人（工場で渡した運送会社）に渡した時に B に移っている', '事故は危険が移った後で、S の作為・不作為によるものではない → Art 66 で B は $50,000 を払う', '(2) FOB を選んだので、Art 6 により危険の移転は FOB の内容に置き換わる', 'FOB の危険は横浜港で本船の船上に置いた時に移る。トラックの事故はその前 → S の負担。S はまだ引渡しを終えておらず、B は全損した機械の代金を払わなくてよい'],
            answer: '(1) B は $50,000 を払う（危険は B）。(2) 損は S が負う（B は払わなくてよい）'
          }
        },
        {
          title: '危険が移った後でも売主の責任になる場合',
          list: ['Art 66: 滅失・損傷が売主の作為・不作為（例: 不十分な梱包）による場合、買主は代金の支払を免れうる', 'Art 36: 危険が移った時点ですでにあった不適合は、後で分かっても売主の責任', 'Art 70: 売主が重大な契約違反（fundamental breach）をしていれば、危険が移っていても、買主の救済（解除など）は失われない'],
          after: 'インコタームズで危険の地点を決めても、これらのルールは CISG のまま働く。インコタームズは適合性や救済を決めないから。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '契約で FOB などを選んでいるのに、CISG Art 67 の「最初の運送人」で答えてしまう。選んだ規則が優先する（Art 6）。逆に、インコタームズを選べば CISG 全体が使われなくなる、と考えるのも誤り。置き換わるのは引渡し・危険・費用などの部分だけで、支払・適合性・救済は CISG のまま。所有権はどちらも決めない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['CISG の危険のルールは初期設定: 運送を伴えば最初の運送人に渡した時（Art 67）、運送中の売買は契約時（Art 68）、その他は受取り時（Art 69）', '契約で選んだインコタームズの規則が、引渡し・危険の部分で CISG に優先する（Art 6、慣習として Art 9）', 'インコタームズが決めない支払・適合性・救済は CISG のまま。危険が移っても、売主の行為による損傷（Art 66）や重大な違反（Art 70）は売主の責任']
        },
        {
          title: '英単語',
          words: [
            ['passing of risk', 'パッシング オブ リスク', '危険の移転'],
            ['contract involving carriage of the goods', '', '物品の運送を伴う契約'],
            ['handed over to the first carrier', '', '最初の運送人に渡された'],
            ['goods sold in transit', '', '運送中の物品の売買'],
            ['clearly identified to the contract', '', '契約の物として明確に特定された'],
            ['derogate from / vary the effect of', '', '（規定）から離れる / 効果を変更する'],
            ['usage', 'ユーセージ', '（取引の）慣習'],
            ['act or omission of the seller', '', '売主の作為・不作為']
          ]
        }
      ],
      quiz: [
        { q: "A Japanese seller and a Canadian buyer make a contract governed by the CISG on the terms 'FOB Yokohama Incoterms 2020'. The goods are destroyed in a road accident while an independent haulier is taking them from the seller's factory to Yokohama port. The seller was not at fault. Who bears the loss?", choices: ["The buyer, because under Article 67 of the CISG risk passes when the goods are handed over to the first carrier", "The buyer, because property passed when the goods left the factory", "The seller, because under FOB risk does not pass until the goods are placed on board the vessel", "The haulier, because risk always passes to the carrier during transport"], answer: 2, explain: 'FOB を選んだので、Art 6 により危険の移転は FOB の内容になる。FOB の危険は横浜港で船上に置いた時に移るので、その前のトラックの事故は売主の負担。Art 67 の「最初の運送人」は、取引条件を決めていないときの初期設定。所有権は危険の移転とは別の問題。運送人に危険が移るという考え方はない（売主・買主のどちらの危険かの問題）。' },
        { q: "Which article of the CISG allows the parties to derogate from or vary the effect of the Convention's rules on the passing of risk, for example by agreeing an Incoterms rule?", choices: ["Article 66", "Article 25", "Article 6", "Article 79"], answer: 2, explain: 'Art 6 は、当事者が CISG の適用を排除し、規定の効果を変更できると定める。Art 66 は危険が移った後の代金支払義務、Art 25 は重大な契約違反の定義、Art 79 は支配を超える障害による免責。' },
        { q: "A contract of sale governed by the CISG involves carriage of the goods. It contains no trade term and the seller is not bound to hand the goods over at a particular place. The seller keeps the bill of lading until the price is paid. When does risk pass to the buyer?", choices: ["When the buyer pays the price and receives the bill of lading", "When the goods are handed over to the first carrier for transmission to the buyer", "When the goods arrive at the buyer's place of business", "When the contract is concluded"], answer: 1, explain: 'Art 67(1) で、危険は最初の運送人に渡した時に移る。売主が書類（船荷証券など）を手元に残しても、危険の移転には影響しない（Art 67(1) の最後の文）。到着時は CISG の運送を伴う売買のルールではない。契約時に移るのは運送中の物品の売買（Art 68）。' },
        { q: 'CISG が適用される契約に CIF の規則を組み込んだ。次のうち、引き続き CISG が決めるものはどれ？', choices: ['危険が買主に移る時点', '貨物保険を誰がかけるか', '輸出通関を誰がするか', '買主が代金を払わないときの売主の救済'], answer: 3, explain: 'インコタームズは違反の救済を決めないので、代金不払いの救済は CISG（Art 61〜65、74〜77）のまま。危険の移転、保険、輸出通関は CIF の規則が決める。' },
        { q: '物品は CFR の条件で船積みされ、危険は買主に移った。その後、売主の梱包が不十分だったために、航海中に物品が壊れた。CISG ではどうなる？', choices: ['危険が移った後なので、買主は必ず代金を全額払う', '損傷が売主の作為・不作為によるので、買主は代金の支払義務を免れうる', '船の上の事故なので、運送人だけが責任を負う', 'CFR を選んだので、CISG のルールは一切使えない'], answer: 1, explain: 'Art 66 のただし書き: 危険が移った後でも、滅失・損傷が売主の作為・不作為によるものなら、買主は代金の支払を免れうる。不十分な梱包は売主の義務違反でもある（Art 35(2)(d)）。CFR は危険の地点を決めるだけで、CISG のほかのルールは残る。' },
        { q: '運送中（海上）の物品を売る契約を結んだ。契約に取引条件の定めはない。CISG では、危険は原則としていつ買主に移る？', choices: ['契約を結んだ時', '物品を船に積んだ時', '物品が仕向港に着いた時', '買主が代金を払った時'], answer: 0, explain: 'Art 68: 運送中の物品の売買では、原則として契約締結時に危険が移る。事情によっては、運送書類を出した運送人に渡した時にさかのぼる。ただし、売主が契約時に滅失・損傷を知っていた（知るべきだった）のに知らせなかった場合、その損は売主の負担。' }
      ]
    }
  ],
  cards: [
    { id: 'B032-1', lesson: 'B032', q: 'インコタームズを作っているのは？ 現行の版は？', a: '国際商業会議所（ICC）。現行は Incoterms 2020（11の規則）' },
    { id: 'B032-2', lesson: 'B032', q: 'インコタームズはどうすれば契約に使われる？', a: '当事者が契約に組み込んだとき。規則＋指定地＋版を書く（例 FOB Yokohama Incoterms 2020）' },
    { id: 'B032-3', lesson: 'B032', q: 'インコタームズが決めることは？', a: '引渡し・危険の移転・費用の分担・運送と保険の手配・通関・書類と通知' },
    { id: 'B032-4', lesson: 'B032', q: 'インコタームズが決めないことは？', a: '所有権の移転・代金と支払・違反の救済・免責・紛争解決と準拠法' },
    { id: 'B032-5', lesson: 'B032', q: '危険（risk）とは？', a: '物品が偶然に滅失・損傷したときの損を誰が負うか。所有権とは別に移る' },
    { id: 'B032-6', lesson: 'B032', q: 'インコタームズは運送人との運送契約を決める？', a: '決めない。拘束するのは売買契約の売主と買主だけ' },
    { id: 'B033-1', lesson: 'B033', q: 'どの輸送手段でも使える7つの規則（売主の負担が小さい順）は？', a: 'EXW・FCA・CPT・CIP・DAP・DPU・DDP' },
    { id: 'B033-2', lesson: 'B033', q: 'CPT・CIP で危険が移る時と、売主の運送費の終点は？', a: '危険は最初の運送人に渡した時。運送費は指定した仕向地まで売主' },
    { id: 'B033-3', lesson: 'B033', q: '通関の原則と例外は？', a: '輸出通関は売主（EXW だけ買主）、輸入通関は買主（DDP だけ売主）' },
    { id: 'B033-4', lesson: 'B033', q: '仕向地で売主が荷降ろしまでする規則は？', a: 'DPU だけ（DAP・DDP は荷降ろし前に引渡し）' },
    { id: 'B033-5', lesson: 'B033', q: 'CIP の保険の最低条件は？', a: '協会貨物約款（A）相当、保険金額は代金の110%以上' },
    { id: 'B033-6', lesson: 'B033', q: 'EXW の売主の義務の範囲は？', a: '自分の施設などで、積み込まずに買主の自由にするだけ。輸出通関も買主' },
    { id: 'B034-1', lesson: 'B034', q: '海上・内陸水路用の4つの規則は？', a: 'FAS・FOB・CFR・CIF' },
    { id: 'B034-2', lesson: 'B034', q: 'FAS と FOB・CFR・CIF の危険が移る地点は？', a: 'FAS は積地の港で本船の横、FOB・CFR・CIF は本船の船上に置いた時' },
    { id: 'B034-3', lesson: 'B034', q: 'CIF Los Angeles の Los Angeles は何を表す？', a: '仕向港（運賃・保険の終点）。危険は積地の港の船上で移る' },
    { id: 'B034-4', lesson: 'B034', q: 'CIF の保険の最低条件は？', a: '協会貨物約款（C）相当、代金の110%以上。売主がかける' },
    { id: 'B034-5', lesson: 'B034', q: 'CIF・代金 $200,000 の最低保険金額は？', a: '$200,000 × 110% ＝ $220,000' },
    { id: 'B034-6', lesson: 'B034', q: 'コンテナ輸送で FOB・CFR・CIF の代わりに使う規則と理由は？', a: 'FCA・CPT・CIP。船積み前に運送人に渡すので、渡した時に危険を移すため' },
    { id: 'B035-1', lesson: 'B035', q: 'CISG で運送を伴う売買の危険が移る時は？（Art 67）', a: '最初の運送人に渡した時（特定の場所で渡す義務があればその場所で）' },
    { id: 'B035-2', lesson: 'B035', q: '運送中の物品の売買の危険が移る時は？（Art 68）', a: '原則は契約締結時。事情によっては運送書類を出した運送人に渡した時' },
    { id: 'B035-3', lesson: 'B035', q: 'インコタームズが CISG の危険のルールに優先する根拠は？', a: 'Art 6（当事者は規定の効果を変更できる）。慣習として Art 9 も' },
    { id: 'B035-4', lesson: 'B035', q: 'CIF を組み込んでも CISG のまま残るものは？', a: '契約の成立・適合性・代金の支払・違反の救済・損害賠償・免責' },
    { id: 'B035-5', lesson: 'B035', q: '危険が移った後の損傷でも買主が代金を免れうるのは？（Art 66）', a: '損傷が売主の作為・不作為（不十分な梱包など）による場合' }
  ]
});
