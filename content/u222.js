(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 222,
  part: 8,
  partTitle: '倒産法（清算と管理手続）',
  lessons: [
    {
      id: 'B091',
      no: 91,
      title: '清算とは：会社の終わり方',
      goal: '清算（liquidation）で何が起きるか、清算人の役割、清算の3つの種類の違いを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(a)'],
      slides: [
        {
          title: 'お店を閉めるときの後片付け',
          paras: ['商店街の雑貨屋が店を閉めることになった。棚の商品を売り、家賃と仕入先と店員の給料を払い、残ったお金があれば持ち主が受け取る。最後に看板を下ろす。', '会社にも同じ後片付けがある。これを清算（liquidation、winding up とも言う）という。第8部では、英国の Insolvency Act 1986（倒産法）をモデルに学ぶ。']
        },
        {
          title: '清算で起きる4つのこと',
          numbered: ['清算人（liquidator）が会社の財産と経営を引き継ぐ', '財産を売って現金にする（realise the assets）', '決められた順番で債務を払う', '余りがあれば株主に分け、会社を登記から消して解散させる（dissolution）'],
          formula: '清算 ＝ 換金 → 支払い → 株主への分配 → 解散',
          after: '解散は、清算人の最終報告が登記されてから3か月後。それまでは会社はまだ存在している。'
        },
        {
          title: '清算人（liquidator）の仕事',
          list: ['資格のある倒産実務家（insolvency practitioner）が就く', '強制清算では、最初は国の職員である公的管財人（Official Receiver）が清算人になる', '財産の回収と換金、債権者の請求の確認、配当', '会社が失敗した原因と取締役の行動を調べる（不正取引などは第9部）'],
          after: '清算人が就くと、取締役の経営の権限はふつう止まる。会社の手綱は清算人に移る。'
        },
        {
          title: '清算の3つの種類',
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="清算は任意清算と強制清算に分かれ、任意清算は株主による清算と債権者による清算に分かれる" font-size="15"><rect x="120" y="16" width="200" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="44" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">清算（liquidation）</text><line x1="220" y1="60" x2="115" y2="98" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="60" x2="325" y2="98" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="98" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="122" text-anchor="middle" font-weight="600" fill="var(--ink)">任意清算</text><text x="115" y="144" text-anchor="middle" font-size="14" fill="var(--quiet)">株主の特別決議で開始</text><rect x="230" y="98" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="122" text-anchor="middle" font-weight="600" fill="var(--ink)">強制清算</text><text x="325" y="144" text-anchor="middle" font-size="14" fill="var(--quiet)">裁判所の清算命令</text><line x1="115" y1="154" x2="66" y2="190" stroke="var(--edge)" stroke-width="1.5"/><line x1="115" y1="154" x2="164" y2="190" stroke="var(--edge)" stroke-width="1.5"/><line x1="325" y1="154" x2="325" y2="190" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="190" width="92" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="66" y="214" text-anchor="middle" font-weight="600" fill="var(--ink)">MVL</text><text x="66" y="236" text-anchor="middle" font-size="14" fill="var(--ink)">支払能力あり</text><rect x="118" y="190" width="92" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="164" y="214" text-anchor="middle" font-weight="600" fill="var(--ink)">CVL</text><text x="164" y="236" text-anchor="middle" font-size="14" fill="var(--ink)">支払不能</text><rect x="230" y="190" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="214" text-anchor="middle" font-size="14" fill="var(--ink)">多くは支払不能の会社</text><text x="325" y="236" text-anchor="middle" font-size="14" fill="var(--ink)">債権者などが申し立てる</text></svg>`,
          caption: 'MVL＝株主による任意清算（members\' voluntary liquidation）。CVL＝債権者による任意清算（creditors\' voluntary liquidation）。'
        },
        {
          title: '3種類を表で比べる',
          table: { caption: '清算の種類', head: ['種類', '始まり方', '主導する人'], rows: [['MVL（支払える会社）', '株主の特別決議', '株主'], ['CVL（支払えない会社）', '株主の特別決議', '債権者'], ['強制清算', '裁判所の清算命令', '裁判所と清算人']] },
          after: '任意清算は裁判所を通さずに始まる。強制清算は、債権者などが裁判所に申立て（petition）をして始まる。'
        },
        {
          title: '清算が始まるとどうなるか',
          list: ['会社は解散まで存在するが、目的は後片付けだけになる', '債権者は個別に取り立てるのではなく、清算人に債権を届け出る（prove their debts）', '財産は清算人が集めて、法律の順番どおりに配る', '取締役は経営できなくなる。清算人は取締役の責任も調べる']
        },
        {
          title: 'なぜ？ 1人の清算人にまとめる理由',
          paras: ['払えない会社で、債権者が早い者勝ちで取り合うとどうなるか。足の速い1社が全部持っていき、ほかは何ももらえない。機械も1台ずつ差し押さえられて、まとめて売るより安くなる。', '清算は、中立な清算人が財産を全部集め、決まった順番と割合で配る集団的な手続き（collective procedure）。公平さと、財産の価値を守るためにある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '日本の感覚だと「借金で会社がつぶれる＝破産」だが、英国の会社では破産（bankruptcy）は個人に使う言葉。会社は liquidation（清算）。しかも清算は、払えない会社だけでなく、全部払える会社にも使う（MVL）。「清算＝支払不能」と決めつけない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['清算＝清算人が財産を換金し、順番どおりに払い、余りを株主に分けて会社を解散させる', '種類は3つ。株主による任意清算（MVL）、債権者による任意清算（CVL）、強制清算', '任意清算は株主の特別決議、強制清算は裁判所の命令で始まる']
        },
        {
          title: '英単語',
          words: [
            ['liquidation / winding up', 'リクイデーション', '清算'],
            ['liquidator', 'リクイデイター', '清算人'],
            ['insolvency practitioner', 'インソルヴェンシー', '倒産実務家（清算人などになる資格者）'],
            ['Official Receiver', 'オフィシャル レシーヴァー', '公的管財人'],
            ['dissolution', 'ディソリューション', '解散（会社が消えること）'],
            ['prove a debt', 'プルーヴ', '債権を届け出る']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes the liquidation of a company?', choices: ['A creditor obtains a court order to collect its own debt from the company\'s bank account', 'An administrator manages the company with the aim of rescuing it as a going concern', 'A liquidator realises the company\'s assets, pays its debts in a set order, distributes any surplus to members and the company is then dissolved', 'The directors continue to run the business while the creditors agree to wait for payment'], answer: 2, explain: '清算は換金・支払い・分配・解散の手続き。会社の救済を目指すのは管理手続（administration）。1社が自分の債権だけを取り立てるのは個別の取立て。取締役が経営を続けて債権者が待つだけなら、清算ではない。' },
        { q: 'Which type of liquidation is used when the company is solvent?', choices: ['Creditors\' voluntary liquidation', 'Members\' voluntary liquidation', 'Compulsory liquidation', 'Administration'], answer: 1, explain: '支払能力のある会社は株主による任意清算（MVL）。CVL は支払不能の会社。強制清算は裁判所の命令で、多くは支払不能の会社。管理手続は清算ではない。' },
        { q: '英国の会社が債務を払えなくなって終わる手続きを、英語で何と呼ぶ？', choices: ['administration', 'bankruptcy', 'dissolution だけ', 'liquidation（winding up）'], answer: 3, explain: 'bankruptcy（破産）は個人に使う言葉。dissolution は清算の最後に会社が消えることで、手続き全体ではない。administration は会社を救うための別の手続き。' },
        { q: '清算人が財産を配り終え、最終報告が登記された。会社はどうなる？', choices: ['3か月後に解散し、会社は存在しなくなる', '株主の会社としてそのまま続く', '清算人の個人の会社になる', '休眠会社として登記に残り続ける'], answer: 0, explain: '最終報告の登記から3か月後に解散（dissolution）する。それまでは会社は存在する。' },
        { q: 'In a compulsory liquidation, who normally becomes the liquidator when the winding-up order is first made?', choices: ['The largest shareholder', 'The company\'s auditor', 'The Official Receiver', 'The managing director'], answer: 2, explain: '強制清算では、清算命令が出ると公的管財人（Official Receiver）がまず清算人になる。その後、債権者が倒産実務家を選ぶことがある。監査人や取締役は清算人にならない。' }
      ]
    },
    {
      id: 'B092',
      no: 92,
      title: '任意清算：株主による清算と債権者による清算',
      goal: '株主による任意清算（MVL）と債権者による任意清算（CVL）の始め方、支払能力の声明、清算人の選び方の違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(a)'],
      slides: [
        {
          title: '部屋を引き払う2人',
          paras: ['引越しで部屋を引き払う。家賃も光熱費も全部払える人は、自分で段取りを決めてよい。払いきれない人は、そうはいかない。大家さんや電力会社と相談しながら、手元のお金の分け方を決めることになる。', '任意清算（voluntary liquidation）も同じ。会社が全部払えるかどうかで、誰が主導するかが変わる。']
        },
        {
          title: '任意清算の共通点',
          list: ['株主総会の特別決議（special resolution、75%以上）で始まる（定款で決めた存続期間が終わったときは普通決議でもよい）','始まる時は、決議が可決された時（IA 1986 s86）', '決議は14日以内に官報（Gazette）で公告する', '裁判所の命令はいらない'],
          after: '違いは、取締役が「全部払える」と声明を出せるかどうか。出せれば MVL、出せなければ CVL。'
        },
        {
          title: '株主による任意清算（MVL）：支払能力の声明',
          list: ['取締役が支払能力の声明（declaration of solvency）を出す（s89）。取締役が3人以上なら過半数で', '内容: 会社を十分に調べた結果、利息も含めて全債務を一定の期間内に払えると考える。期間は清算開始から12か月以内', '決議の前5週間以内（または決議の日の可決前）に出し、資産と負債の明細を付ける', '決議後15日以内に登記所に提出する'],
          after: 'その後、株主が総会で清算人を選ぶ。債権者は全額払われる前提なので、主導権は株主にある。'
        },
        {
          title: '声明を軽く出すと犯罪になる',
          paras: ['合理的な根拠なく声明を出した取締役は、罰金や拘禁の対象になる。', 'さらに、声明の期間内に債務が全額払われなかったら、取締役には合理的な根拠がなかったと推定される。取締役のほうが「根拠はあった」と示さなければならない。']
        },
        {
          title: '債権者による任意清算（CVL）',
          list: ['支払能力の声明が出せない会社が使う', '株主の特別決議で始まる（ここは MVL と同じ）', '取締役は財産状況の説明書（statement of affairs）を作る（s99）', '会社は債権者に清算人の候補を出してもらう。株主と債権者で候補が違えば、債権者の候補が清算人になる（s100）', '債権者は清算委員会（liquidation committee）を作って清算人を監督できる']
        },
        {
          title: 'MVL と CVL を比べる',
          table: { caption: '2つの任意清算', head: ['項目', 'MVL', 'CVL'], rows: [['会社の状態', '全部払える', '払えない'], ['取締役の声明', '支払能力の声明が必要', 'なし（説明書を作る）'], ['始まり方', '株主の特別決議', '株主の特別決議'], ['清算人を選ぶ', '株主', '債権者の候補が優先'], ['主導する人', '株主', '債権者']] }
        },
        {
          title: 'MVL が途中で CVL に変わる',
          example: {
            problem: 'Maple Ltd の取締役は「10か月以内に全債務を払える」と声明を出し、株主が特別決議で任意清算を始めた。清算人が調べると、売れると思った在庫が古く、全額は払えないと分かった。どうなる？',
            steps: ['MVL は、期間内に全額払えることが前提', '清算人は、全額は払えないと判断した → 債権者に知らせる手続きをとる（s95）', '以後は債権者による任意清算（CVL）として続く（s96）', '期間内に払えなければ、声明を出した取締役は合理的な根拠がなかったと推定される'],
            answer: 'MVL から CVL に切り替わり、債権者が主導する'
          }
        },
        {
          title: 'なぜ？ 払えるかどうかで主導が変わる理由',
          paras: ['全部払える会社なら、債権者は必ず全額もらえる。残りは株主のもの。だから株主が自分たちで進めてよい。', '払えない会社では、財産は実質的に債権者のお金になっている。株主の取り分はもうない。だから債権者が清算人を選び、監督する。お金の本当の持ち主に決めさせる、という考え方。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「任意清算＝支払える会社」は誤り。CVL も任意清算で、株主の特別決議で始まる。違いは支払能力の声明があるかと、誰が清算人を選ぶか。また、任意清算の開始は清算人の選任や官報の公告の時ではなく、決議が可決された時。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['任意清算はどちらも株主の特別決議で始まり、可決の時に開始する', 'MVL は取締役の支払能力の声明（決議前5週間以内、12か月以内に全額）が必要。株主が清算人を選ぶ', 'CVL は声明なし。債権者の候補が清算人になり、債権者が主導する']
        },
        {
          title: '英単語',
          words: [
            ['members\' voluntary liquidation (MVL)', 'メンバーズ ヴォランタリー', '株主による任意清算'],
            ['creditors\' voluntary liquidation (CVL)', 'クレディターズ ヴォランタリー', '債権者による任意清算'],
            ['declaration of solvency', 'ソルヴェンシー', '支払能力の声明'],
            ['statement of affairs', 'ステイトメント オブ アフェアーズ', '財産状況の説明書'],
            ['liquidation committee', 'コミッティー', '清算委員会'],
            ['special resolution', 'スペシャル レゾリューション', '特別決議（75%以上）']
          ]
        }
      ],
      quiz: [
        { q: 'In a members\' voluntary liquidation, the directors\' declaration of solvency must state that the company will be able to pay its debts in full, together with interest, within a specified period. What is the maximum period?', choices: ['6 months from the commencement of the winding up', '12 months from the commencement of the winding up', '5 weeks from the date of the declaration', '3 years from the date of the resolution'], answer: 1, explain: 's89：最大12か月。5週間は「決議の前の何週間以内に声明を出すか」の期限で、払う期間ではない。' },
        { q: 'In a creditors\' voluntary liquidation, the members nominate X as liquidator and the creditors nominate Y. Who becomes the liquidator?', choices: ['The Official Receiver', 'X, the person nominated by the members', 'X and Y jointly in all cases', 'Y, the person nominated by the creditors'], answer: 3, explain: 's100：債権者の候補が優先する。払えない会社では、財産は実質的に債権者のお金だから。公的管財人が就くのは強制清算。' },
        { q: 'When does a voluntary winding up commence?', choices: ['When notice of the resolution is published in the Gazette', 'When the liquidator is appointed', 'At the time the resolution for voluntary winding up is passed', 'When the declaration of solvency is delivered to the registrar'], answer: 2, explain: 's86：決議が可決された時。官報の公告は14日以内、声明の提出は15日以内の後追いの手続き。' },
        { q: 'MVL を始めた後、清算人は「声明の期間内に全額は払えない」と判断した。どうなる？', choices: ['債権者による任意清算（CVL）に切り替わり、債権者が主導する', '株主が追加の資金を出す義務を負い、MVL のまま続く', '自動的に管理手続（administration）に移る', '清算は無効になり、会社は元の営業に戻る'], answer: 0, explain: 's95・96。MVL は全額払えることが前提なので、払えないと分かれば CVL になる。株主に追加の出資義務はない（有限責任）。' },
        { q: '取締役が十分に調べずに支払能力の声明を出した。期間内に債務は全額払われなかった。取締役は？', choices: ['声明は株主の決議で承認されたので、責任はない', '合理的な根拠がなかったと推定され、罰金や拘禁の対象になりうる', '会社が払えなかっただけなので、取締役個人には何も起きない', '清算人が代わりに責任を負う'], answer: 1, explain: 's89(4)(5)。根拠のない声明は犯罪。期間内に払われなければ根拠がなかったと推定され、取締役の側が反証する。' }
      ]
    },
    {
      id: 'B093',
      no: 93,
      title: '強制清算：理由と手続き',
      goal: '裁判所が清算を命じる理由（特に支払不能の判定）、申し立てられる人、命令までの流れと効果を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(b)'],
      slides: [
        {
          title: '何度頼んでも払ってくれないとき',
          paras: ['家を貸している人が、何か月も家賃を払わない借主に困っている。自分で家財を運び出すことはできない。裁判所に頼むしかない。', '会社の債権者も同じ。会社が払わず、自分から清算もしないなら、裁判所に清算を命じてもらう。これが強制清算（compulsory liquidation）。']
        },
        {
          title: '強制清算とは',
          paras: ['裁判所への申立て（petition）→ 裁判所の清算命令（winding-up order）で清算になる。誰が申し立てるかは、理由でだいたい決まる。'],
          table: { caption: '理由と、ふつう申し立てる人（s124）', head: ['理由', 'ふつう申し立てる人', 'ポイント'], rows: [['支払えない（s122(1)(f)）', '債権者', '会社や取締役も可。最も多い申立て'], ['正当かつ公平（s122(1)(g)）', '出資者（contributory、株主）', '株主を守る理由。お金を取り立てたい債権者は「支払えない」を使う'], ['公益（s124A）', '国務大臣', '調査の結果による別のルート。(g) の正当かつ公平とは別'], ['裁判所による清算の特別決議（s122(1)(a)）', '会社', '株主の特別決議がもと']] },
          after: '株主の申立ては、ふつう直近18か月のうち6か月以上の保有が必要。命令を出すかは裁判所が決め、理由に当たっても必ず出るとは限らない。'
        },
        {
          title: '裁判所が清算を命じる理由（s122(1)）',
          numbered: ['会社が特別決議で、裁判所による清算を決めた', '最初から公開会社として登記したのに、1年以上たっても取引開始の証明書（trading certificate）がない', '登記から1年以内に事業を始めない、または丸1年事業を休止した', '会社が債務を支払えない（unable to pay its debts）', '正当かつ公平（just and equitable）と裁判所が考える'],
          after: 'このほか古い形態の公開会社（old public company）の規定もあるが、試験で中心になるのは上の5つ。特に4と5。'
        },
        {
          title: '「支払えない」の判定（s123）',
          list: ['£750 を超える支払期限の来た債務について、債権者が法定の支払請求（statutory demand）を送り、会社が3週間放置した', '会社に対する判決の強制執行が、全部または一部うまくいかなかった', '期限の来た債務を払えないと証明された（キャッシュフロー・テスト）', '資産の価額が負債（将来の負債や不確定な負債を含む）より少ないと証明された（バランスシート・テスト）'],
          formula: '£750 を超える請求 ＋ 3週間放置 → 支払えないとみなす'
        },
        {
          title: '例題: いつから「支払えない」になる？',
          example: {
            problem: '部品メーカーは Oak Ltd に £4,200 の支払期限の来た売掛金がある。3月1日に法定の支払請求を Oak Ltd に届けた。Oak Ltd は支払いも担保の提供も和解もしない。いつから強制清算を申し立てられる？',
            steps: ['金額: £4,200 は £750 を超える → 法定の支払請求が使える', '期間: 届いてから3週間＝21日', '3月1日 ＋ 21日 ＝ 3月22日', '3月22日以降、Oak Ltd は支払えないとみなされる（s123(1)(a)）', 'これで s122(1)(f) の理由がそろい、申立てができる'],
            answer: '3月22日以降に申し立てられる。命令を出すかは裁判所が決める'
          }
        },
        {
          title: '正当かつ公平（just and equitable）',
          paras: ['会社がお金を払えても、続けることが不公平な場合に使う。株主を守るための理由なので、ふつうは株主（出資者）が申し立てる。'],
          list: ['経営陣が対立して何も決められない（deadlock）', '会社の本来の目的が果たせなくなった', '会社が詐欺の目的で作られた', '実質は信頼で結びついた共同経営（quasi-partnership）なのに、1人が経営から締め出された（Ebrahimi v Westbourne Galleries Ltd、1973）'],
          note: { kind: 'tip', text: '「正当かつ公平を理由に、ふつう申し立てるのは誰？」と聞かれたら、答えは株主（contributories）。債権者は「支払えない」、国務大臣は公益（s124A）のルートを使う。' }
        },
        {
          title: '申立てから命令までの流れ',
          numbered: ['申立て（petition）を裁判所に出す', '必要なら、命令までの間の仮の清算人（provisional liquidator）が選ばれる', '審理のうえ、裁判所が清算命令を出す', '公的管財人がまず清算人になり、会社の失敗の原因を調べる。債権者が倒産実務家を清算人に選ぶこともある', '換金と配当の後、会社は解散する']
        },
        {
          title: '清算命令の効果',
          list: ['清算の開始は、命令の日ではなく申立ての時にさかのぼる（s129(2)）。先に任意清算の決議があれば、その時', '開始の後の会社財産の処分は、裁判所が認めない限り無効（s127）', '会社への訴訟は、裁判所の許可なしに始めたり続けたりできない（s130(2)）', '従業員は解雇されたことになり、取締役の権限は終わる'],
          after: 'なぜさかのぼる？ 申立てから命令まで数週間かかる。その間に財産を親族に安く売られたら、債権者の取り分が消える。開始を申立ての時にして、その抜け道をふさぐ。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「強制清算を申し立てられるのは債権者だけ」は誤り。会社、取締役、株主、国務大臣なども申し立てられる。「£750 以下の債権者は何もできない」も誤り。法定の支払請求は使えないが、期限の来た債務を払えないこと（キャッシュフロー）などを別に証明すればよい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['強制清算は申立て → 裁判所の清算命令。主な理由は「支払えない」（ふつう債権者）と「正当かつ公平」（ふつう株主）', '支払えない: £750 を超える法定の支払請求を3週間放置、執行の不奏功、キャッシュフロー、バランスシート', '開始は申立ての時にさかのぼり、その後の財産の処分は裁判所が認めない限り無効']
        },
        {
          title: '英単語',
          words: [
            ['compulsory liquidation', 'コンパルソリー', '強制清算'],
            ['petition', 'ペティション', '（裁判所への）申立て'],
            ['winding-up order', 'ワインディング アップ オーダー', '清算命令'],
            ['statutory demand', 'スタチュートリー ディマンド', '法定の支払請求'],
            ['just and equitable', 'ジャスト アンド エクイタブル', '正当かつ公平'],
            ['contributory', 'コントリビュートリー', '出資者（株主など）'],
            ['Secretary of State', 'セクレタリー オブ ステート', '国務大臣（公益の申立て）'],
            ['provisional liquidator', 'プロヴィジョナル', '仮の清算人']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a ground on which the court may order the compulsory winding up of a company under the Insolvency Act 1986?', choices: ['The court is of the opinion that it is just and equitable that the company should be wound up', 'The company has passed a special resolution that it be wound up by the court', 'The company has not commenced business within a year of its incorporation', 'The company has made a loss in each of its last two financial years'], answer: 3, explain: '赤字だけでは理由にならない。期限の来た債務を払えない、などの「支払えない」に当たるかが問題。ほかの3つは s122(1) の理由。' },
        { q: '法定の支払請求（statutory demand）が会社に届いた。会社が何もしないまま何日たつと、支払えないとみなされる？', type: 'number', answer: 21, unit: '日', explain: 's123(1)(a)：3週間＝21日。請求額は £750 を超えている必要がある。' },
        { q: 'A supplier is owed £600 by a company, which is now due. Which of the following statements is correct?', choices: ['The supplier cannot petition for a winding up under any circumstances', 'The supplier may serve a statutory demand and, after three weeks, the company is deemed unable to pay its debts', 'The supplier cannot rely on a statutory demand, but may still petition if it can prove that the company is unable to pay its debts as they fall due', 'The supplier must first obtain the consent of the company\'s members before petitioning'], answer: 2, explain: '法定の支払請求のルートは £750 を超える債務だけ。£600 ではそのルートは使えないが、キャッシュフロー・テストなど別の方法で支払えないことを証明できる。株主の同意は不要。' },
        { q: 'A creditor presents a petition on 10 May, and the court makes a winding-up order on 20 June. No resolution for voluntary winding up was passed earlier. When is the winding up deemed to commence?', choices: ['20 June, the date of the winding-up order', '10 May, the date the petition was presented', 'The date the Official Receiver becomes liquidator', 'The date the order is registered at Companies House'], answer: 1, explain: 's129(2)：強制清算の開始は申立ての時にさかのぼる。財産の持ち出しを防ぐため。' },
        { q: 'Which party would normally petition for the compulsory winding up of a company on the just and equitable ground?', choices: ['The company\'s shareholders (contributories)', 'An unpaid trade creditor', 'The Secretary of State', 'The Official Receiver'], answer: 0, explain: '正当かつ公平（s122(1)(g)）は株主を守るための理由なので、ふつう株主（出資者）が申し立てる。払ってもらえない取引先などの債権者は、「支払えない」（s122(1)(f)、法定の支払請求など）を理由に申し立てる。国務大臣は、調査の結果をもとに公益（s124A）という別のルートで申し立てる。公的管財人は、ふつう清算命令の後に最初の清算人になる立場で、正当かつ公平の申立ての典型ではない。' },
        { q: '3人で作った小さな会社。信頼で結びついた共同経営だったが、2人が残り1人を取締役から外し、経営から締め出した。締め出された株主が求められる清算の理由は？', choices: ['取引開始の証明書がない', '支払えない（unable to pay its debts）', '1年以内に事業を始めない', '正当かつ公平（just and equitable）'], answer: 3, explain: 'Ebrahimi v Westbourne Galleries Ltd（1973）。会社はお金を払えても、実質的な共同経営の信頼が壊れたなら、正当かつ公平として清算を命じられる。' }
      ]
    },
    {
      id: 'B094',
      no: 94,
      title: '清算時に誰から先に払われるか',
      goal: '清算で債務が払われる順番を説明し、優先債権・留保分（prescribed part）・按分を使って各債権者が受け取る額を計算できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(c)'],
      slides: [
        {
          title: 'お金の行列に並ぶ順番',
          paras: ['会社が倒れると、会社にお金を貸した人や売った人が、残ったお金の前に行列を作る。全員には行き渡らない。並ぶ順番は、法律が決めている。', '早く来た人が先、ではない。担保を持っているか、どんな種類の債権かで順番が決まる。第6部で学んだ固定担保と浮動担保が、ここで効いてくる。']
        },
        {
          title: '担保の復習',
          list: ['固定担保（fixed charge）: 工場や土地など特定の資産にかかる。その資産を売ったお金から、真っ先に回収できる', '浮動担保（floating charge）: 在庫や売掛金など入れ替わる資産全体にかかる。清算で結晶化（crystallise）するが、順番はずっと後ろ', '固定担保の資産を売っても足りない分は、無担保の債権として後ろに並ぶ']
        },
        {
          title: '払われる順番',
          numbered: ['固定担保権者（その資産を売ったお金から）', '清算の費用（清算人の報酬など）', '優先債権者（preferential creditors）: まず従業員、次に税務当局 HMRC の一部の税金', '留保分（prescribed part）を浮動担保の資産から取り分け、無担保債権者に回す', '浮動担保権者', '無担保債権者（unsecured creditors）。足りなければ同じ割合で按分', '株主としての未払いの金額（宣言済みの未払配当など）', '株主（種類株式の権利に従う）'],
          after: '6 まで全額払えて余れば、債務の利息を払ってから 7・8 に進む。'
        },
        {
          title: '図で見る: 2つの財布',
          svg: `<svg viewBox="0 0 440 402" role="img" aria-label="固定担保の資産は固定担保権者へ。それ以外の資産は費用、優先債権、留保分、浮動担保権者、無担保債権者、株主の順に流れる" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">清算のお金の流れ</text><rect x="20" y="44" width="170" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="105" y="70" text-anchor="middle" fill="var(--ink)">固定担保の資産</text><line x1="190" y1="64" x2="244" y2="64" stroke="var(--ink)" stroke-width="1.5"/><polygon points="244,58 254,64 244,70" fill="var(--ink)"/><rect x="256" y="44" width="164" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="338" y="70" text-anchor="middle" fill="var(--ink)">固定担保権者</text><text x="20" y="114" fill="var(--ink)">それ以外の資産（浮動担保の対象など）</text><rect x="20" y="126" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="150" fill="var(--ink)">① 清算の費用</text><rect x="20" y="170" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="194" fill="var(--ink)">② 優先債権（従業員 → HMRC）</text><rect x="20" y="214" width="400" height="36" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="238" font-weight="600" fill="var(--ink)">③ 留保分を取り分け → 無担保債権者へ</text><rect x="20" y="258" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="282" fill="var(--ink)">④ 浮動担保権者</text><rect x="20" y="302" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="326" fill="var(--ink)">⑤ 無担保債権者（同じ割合で按分）</text><rect x="20" y="346" width="400" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="370" fill="var(--ink)">⑥ 未払配当など → ⑦ 株主</text><text x="220" y="398" text-anchor="middle" font-size="14" fill="var(--quiet)">上が全額もらえてから、次に回る</text></svg>`
        },
        {
          title: '優先債権の中身',
          table: { caption: '優先されるもの、されないもの', head: ['区分', '中身'], rows: [['通常の優先（先）', '従業員の給与（清算前4か月分、1人 £800 まで）、休暇手当、年金の掛金'], ['第2順位の優先（後）', 'HMRC が預かった形の税金: VAT、従業員の給与から天引きした所得税（PAYE）と社会保険料（NIC）など'], ['優先されない', '法人税、会社負担の社会保険料、1人 £800 を超えた給与 → 無担保債権']] },
          after: 'HMRC の第2順位の優先は、2020年12月1日以降の清算から。足りなければ、同じ区分の中で按分する。'
        },
        {
          title: '留保分（prescribed part）',
          paras: ['浮動担保の資産から、無担保債権者のために一部を取り分けるしくみ（IA 1986 s176A）。計算のもとは純財産（net property）＝浮動担保の資産から費用と優先債権を払った残り。'],
          formula: '留保分 ＝ 最初の £10,000 の 50% ＋ 残りの 20%（上限 £800,000）',
          list: ['上限 £800,000 は、2020年4月6日以降に設定された浮動担保の場合（それより前の担保は £600,000）', '浮動担保権者は、足りない分を留保分から受け取れない。留保分は無担保債権者のもの', '純財産が £10,000 未満で、配る費用が見合わないなら、留保分は取り分けないことがある']
        },
        {
          title: '例題: Willow Ltd の清算',
          example: {
            problem: 'Willow Ltd が強制清算された。工場は £300,000 で売れた（銀行Aの固定担保、債権 £300,000）。それ以外の資産は £260,000（銀行Bの浮動担保、2022年設定、債権 £200,000）。清算の費用 £20,000。従業員30人の未払給与 £30,000（全員 £800 以上）。HMRC: VAT と PAYE £16,000、法人税 £10,000。仕入先 £156,000。各債権者はいくら受け取る？',
            steps: ['固定担保: 工場 £300,000 → 銀行Aに £300,000。全額回収', 'それ以外の資産 £260,000 − 費用 £20,000 ＝ £240,000', '優先: 従業員 30人 × £800 ＝ £24,000、次に HMRC の VAT と PAYE £16,000。計 £40,000。残り（純財産）£200,000', '留保分: £10,000 × 50% ＋ £190,000 × 20% ＝ £5,000 ＋ £38,000 ＝ £43,000', '銀行B: £200,000 − £43,000 ＝ £157,000 を受け取る。足りない £43,000 は留保分からはもらえない', '無担保: 給与の超過分 £6,000 ＋ 法人税 £10,000 ＋ 仕入先 £156,000 ＝ £172,000', '按分: £43,000 ÷ £172,000 ＝ 0.25。1ポンドにつき25ペンス。仕入先は £156,000 × 0.25 ＝ £39,000'],
            answer: '銀行A £300,000、費用 £20,000、優先 £40,000、銀行B £157,000、無担保は1ポンドにつき25ペンス、株主は0'
          }
        },
        {
          title: 'なぜ？ この順番になっている理由',
          paras: ['固定担保は「この工場が担保」と特定し、登録して公開されている。だから最優先。浮動担保は、会社が在庫を自由に売り買いできる代わりに、従業員や税金より後ろに置かれる。', '従業員は生活がかかっていて、貸す相手を選べない。だから優先。それでも銀行が浮動担保で全部持っていくと、取引先には何も残らない。留保分は、その取引先などの無担保債権者に少しでも回すためにある。株主は会社のもうけを受け取る立場なので、損も最後にかぶる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「担保があれば必ず最優先」は誤り。最優先は固定担保だけで、浮動担保は費用・優先債権・留保分の後。留保分を浮動担保権者や優先債権者に回すのも誤り。また、宣言済みの未払配当は株主としての請求なので、取引先などの無担保債権者より後になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['固定担保 → 費用 → 優先（従業員、次に HMRC）→ 留保分 → 浮動担保 → 無担保 → 未払配当など → 株主', '優先の給与は清算前4か月分で1人 £800 まで。超えた分は無担保', '留保分＝純財産の最初の £10,000 の50%＋残りの20%、上限 £800,000。無担保債権者だけのもの']
        },
        {
          title: '英単語',
          words: [
            ['fixed charge / floating charge', 'チャージ', '固定担保 / 浮動担保'],
            ['preferential creditors', 'プリファレンシャル', '優先債権者'],
            ['secondary preferential creditors', 'セカンダリー', '第2順位の優先債権者（HMRC）'],
            ['prescribed part', 'プリスクライブド パート', '留保分（無担保債権者のための取り分）'],
            ['net property', 'ネット プロパティ', '純財産（留保分の計算のもと）'],
            ['unsecured creditors', 'アンセキュアード', '無担保債権者'],
            ['pari passu', 'パリ パス', '同じ割合で（按分して）']
          ]
        }
      ],
      quiz: [
        { q: '浮動担保（2021年設定）の資産から費用と優先債権を払った残り（純財産）が £60,000 だった。留保分（prescribed part）はいくら？', type: 'number', answer: 15000, unit: '£', explain: '£10,000 × 50% ＝ £5,000。残り £50,000 × 20% ＝ £10,000。合計 £15,000。' },
        { q: 'A company in liquidation has net property of £4,010,000. Its floating charge was created in 2022. What is the prescribed part to be set aside for unsecured creditors (in £)?', type: 'number', answer: 800000, unit: '£', explain: '£10,000 × 50% ＋ £4,000,000 × 20% ＝ £5,000 ＋ £800,000 ＝ £805,000。2020年4月6日以降の浮動担保なので上限 £800,000。' },
        { q: 'From the assets not subject to a fixed charge, in which order are the following paid on liquidation?', choices: ['The floating charge holder, then preferential creditors, then unsecured creditors, then members', 'Preferential creditors, then the floating charge holder, then unsecured creditors, then members', 'Unsecured creditors, then preferential creditors, then the floating charge holder, then members', 'Preferential creditors, then unsecured creditors, then members, then the floating charge holder'], answer: 1, explain: '費用の後、優先債権、（留保分を取り分けて）浮動担保、無担保、株主。浮動担保は優先債権より後ろ。株主はいつも最後。' },
        { q: '清算前4か月の未払給与が £2,000 ある従業員がいる。このうち無担保債権になる額は？', type: 'number', answer: 1200, unit: '£', explain: '優先は1人 £800 まで。£2,000 − £800 ＝ £1,200 は無担保債権者として並ぶ。' },
        { q: 'Which of the following debts owed by a company in liquidation is a secondary preferential debt?', choices: ['Wages of £600 owed to an employee for the last month', 'Corporation tax owed to HMRC', 'VAT owed to HMRC', 'An unpaid invoice from a trade supplier'], answer: 2, explain: 'VAT は HMRC の第2順位の優先債権。法人税は無担保。£800 以内の給与は通常の優先（第2順位より先）。仕入先は無担保。' },
        { q: '清算前に宣言されたが、まだ払われていない配当がある。清算では、どこに並ぶ？', choices: ['固定担保権者の次', '優先債権者と同じ順位', '無担保債権者と同じ順位で按分', '無担保債権者が全額払われた後（株主としての請求）'], answer: 3, explain: '株主としての立場で受け取るお金（宣言済み未払配当など）は、債権者と競えない。無担保債権者の後で、株主への残余の分配の前。' }
      ]
    },
    {
      id: 'B095',
      no: 95,
      title: '管理手続（administration）：清算に代わる道',
      goal: '管理手続の目的の順番、管理人の選ばれ方、モラトリアムの効果、管理人の役割と手続きの終わり方を、清算と比べて説明できるようになる',
      minutes: 17,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(d)'],
      slides: [
        {
          title: '集中治療室に入る会社',
          paras: ['重い病気の人を、すぐにあきらめはしない。集中治療室に入れて、外からの面会を止め、専門の医師が治療する。回復すれば退院、だめなら次の手を考える。', '会社の管理手続（administration）もこれに近い。すぐに清算せず、債権者の取立てを止めて、専門家の管理人（administrator）が立て直しを試みる。']
        },
        {
          title: '管理手続とは',
          list: ['IA 1986 の Schedule B1 の手続き', '管理人（administrator）は資格のある倒産実務家。裁判所の職員（officer of the court）として扱われる', '管理人は、選んだ人のためではなく、債権者全体（creditors as a whole）の利益のために動く', '会社は解散せず、事業を続けたまま進められる']
        },
        {
          title: '管理人が目指す順番（Sch B1 para 3）',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="管理手続の目的は、会社の救済、清算よりよい結果、担保・優先債権者への配当の順に目指す" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">目的は3段階。上から順に目指す</text><rect x="20" y="46" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="76" font-weight="600" fill="var(--ink)">① 会社を継続企業として救う</text><text x="220" y="120" text-anchor="middle" font-size="14" fill="var(--quiet)">無理なとき、または②の方が債権者によいとき</text><rect x="20" y="134" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="164" fill="var(--ink)">② 清算より債権者全体によい結果を出す</text><text x="220" y="208" text-anchor="middle" font-size="14" fill="var(--quiet)">①も②も無理なときだけ</text><rect x="20" y="222" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="252" fill="var(--ink)">③ 担保・優先債権者に配るため換金する</text><text x="220" y="292" text-anchor="middle" font-size="14" fill="var(--quiet)">③でも債権者全体を不必要に害さないこと</text></svg>`,
          caption: '②の例: 会社は救えなくても、事業をまとめて売れば、ばらばらに売る清算より高く売れる。'
        },
        {
          title: '管理人の選ばれ方は3通り',
          table: { caption: '選任のルート', head: ['選ぶ人', '方法', 'ポイント'], rows: [['裁判所', '会社・取締役・債権者などの申立て', '会社が支払えない（またはそうなりそう）で、目的を達成できそうなこと'], ['適格浮動担保権者（QFCH）', '裁判所を通さずに選ぶ', '会社の財産のほぼ全部にかかる浮動担保の持ち主'], ['会社または取締役', '裁判所を通さずに選ぶ', 'QFCH に5営業日前に通知。QFCH は自分の候補を選べる']] },
          after: '会社・取締役は、会社・取締役が始めた前の管理手続が終わってから12か月以内の場合や、清算の申立てが係属中の場合は、裁判所を通さずに選べない。'
        },
        {
          title: 'モラトリアム（取立ての一時停止）',
          list: ['会社を清算する決議も、清算命令も出せない', '管理人の同意か裁判所の許可がなければ、担保権を実行できない', '同じく、リースや割賦販売（hire purchase）で貸した物を取り戻せない', '同じく、会社への訴訟や強制執行を始めたり続けたりできない'],
          after: '選任の申立てや通知をした時点から、仮のモラトリアム（interim moratorium）が働く。会社に息をつく時間を与えるためのしくみ。'
        },
        {
          title: '管理人の役割と、手続きの終わり方',
          list: ['会社の事業と財産を管理する。取締役の権限は、管理人の同意がないと使えない。取締役の解任・選任もできる', '浮動担保の資産は自由に売れる（担保権者は売却代金に同じ順位を持つ）。固定担保の資産は裁判所の命令で売れる', '8週間以内に債権者に計画（proposals）を示し、債権者が承認する', '従業員は自動的には解雇されない', '1年で自動的に終わる。裁判所の命令か債権者の同意で延長できる'],
          after: '出口: 立ち直れば取締役に経営を戻す。ほかに債権者による任意清算（CVL）、強制清算、そのまま解散など。'
        },
        {
          title: '清算と管理手続を比べる',
          table: { caption: '2つの手続き', head: ['項目', '清算', '管理手続'], rows: [['目的', '会社を終わらせる', 'まず会社を救う'], ['担当', '清算人', '管理人'], ['事業', 'ふつうは止める', '続けながら進める'], ['債権者の取立て', '強制清算では訴訟に許可が必要', 'モラトリアムで広く止まる'], ['最後', '解散', '救済、清算、解散など']] }
        },
        {
          title: 'なぜ？ 清算の前に救う道を作った理由',
          paras: ['動いている会社は、ばらばらの機械や在庫の合計より価値がある。お客や従業員、ノウハウがそろっているから。すぐ清算すると、その価値が消え、債権者の回収も減る。', '以前は浮動担保を持つ銀行が自分のために管財人（administrative receiver）を送り込み、自分の回収だけを優先できた。Enterprise Act 2002 で、2003年9月15日以降に設定された浮動担保では原則としてこれを使えなくし、債権者全体のために動く管理手続に置き換えた。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「管理人を選んだ銀行のために働く」は誤り。誰が選んでも、管理人は債権者全体のために動く。「管理手続＝清算の一種で、会社は必ず消える」も誤り。最初の目的は会社の救済。モラトリアムで守られるのは会社で、取締役個人の責任が消えるわけではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['目的の順番: ①会社の救済 → ②清算よりよい結果 → ③担保・優先債権者への配当', '選任は裁判所、適格浮動担保権者（QFCH）、会社・取締役（QFCH に5営業日前の通知）の3通り', 'モラトリアムで清算・担保の実行・訴訟が止まる。管理人は債権者全体のために動き、1年で終わる（延長可）']
        },
        {
          title: '英単語',
          words: [
            ['administration', 'アドミニストレーション', '管理手続'],
            ['administrator', 'アドミニストレイター', '管理人'],
            ['rescue the company as a going concern', 'ゴーイング コンサーン', '会社を継続企業として救う'],
            ['qualifying floating charge holder (QFCH)', 'クオリファイング', '適格浮動担保権者'],
            ['moratorium', 'モラトリアム', '（取立てなどの）一時停止'],
            ['creditors as a whole', 'アズ ア ホール', '債権者全体'],
            ['proposals', 'プロポーザルズ', '管理人の計画（債権者が承認）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is the objective that an administrator must pursue first, if reasonably practicable?', choices: ['Rescuing the company as a going concern', 'Realising property in order to make a distribution to secured or preferential creditors', 'Achieving the best possible return for the holder of the floating charge who appointed the administrator', 'Winding up the company as quickly as possible'], answer: 0, explain: 'Sch B1 para 3。まず会社の救済。担保・優先債権者への配当は、救済も清算よりよい結果も無理なときだけ。管理人は選んだ人ではなく債権者全体のために動く。' },
        { q: 'A company has entered administration. A bank holding a fixed charge over the company\'s factory wishes to enforce its security. Which of the following is correct?', choices: ['The bank may never enforce its security once the company is in administration', 'The bank may enforce its security immediately because a fixed charge is not affected by administration', 'The bank may enforce its security only with the consent of the administrator or the permission of the court', 'The bank may enforce its security only after the company has been dissolved'], answer: 2, explain: 'モラトリアム（Sch B1 para 43）。固定担保でも、管理人の同意か裁判所の許可がなければ実行できない。担保が消えるわけではない。' },
        { q: 'Unless extended, when does an administration automatically come to an end?', choices: ['After eight weeks', 'After one year', 'After three months', 'After five years'], answer: 1, explain: '1年で自動的に終わる。裁判所の命令か債権者の同意で延長できる。8週間は、管理人が債権者に計画を示す期限。' },
        { q: '取締役が裁判所を通さずに管理人を選ぶとき、会社の財産のほぼ全部に浮動担保を持つ銀行に事前に通知する。なぜ？', choices: ['通知は不要で、選んだ後に知らせればよい', '銀行の同意がないと、会社は清算されるから', '銀行が管理人の報酬を払うから', '銀行（適格浮動担保権者）は、5営業日の間に自分の候補を管理人に選べるから'], answer: 3, explain: 'Sch B1 para 26。取締役は5営業日前に通知する。適格浮動担保権者はその間に自分の選んだ人を管理人にできる。' },
        { q: '銀行（適格浮動担保権者）が管理人を選んだ。管理人は誰の利益のために動く？', choices: ['株主', '選んだ銀行だけ', '債権者全体', '取締役'], answer: 2, explain: '管理人は誰に選ばれても、債権者全体の利益のために職務を行う（Sch B1 para 3(2)）。裁判所の職員として扱われる。' }
      ]
    },
    {
      id: 'B096',
      no: 96,
      title: '第8部 総合演習：清算と管理手続',
      goal: '経営難の1社について、手続きの選択、強制清算の理由と開始、管理手続の効果、清算での配当額を順に判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(a)', 'K3:E1(b)', 'K3:E1(c)', 'K3:E1(d)'],
      slides: [
        {
          title: '今日の会社: Hollow Ltd',
          paras: ['第8部の内容を、1つの会社で順番に使う。'],
          list: ['家具を作る私会社。従業員20人', '主力の取引先を失い、期限の来た請求を払えなくなっている', '銀行に借入 £150,000。会社の全財産に浮動担保（2021年設定）', 'Lender L に借入 £120,000。倉庫に固定担保', '仕入先の1社 Birch は £12,000 の支払いを待っている']
        },
        {
          title: '考える順番',
          numbered: ['会社は全部払えるか（支払能力）', '会社を救うか、終わらせるか', '誰が手続きを始めるか（株主・債権者・裁判所・担保権者）', '清算なら、誰がいくら受け取るか']
        },
        {
          title: '場面1: 取締役が会社を閉じたい',
          table: { caption: '取締役が選べる道', head: ['選択', '使えるか', '理由'], rows: [['MVL', '使えない', '12か月以内に全額払えるという支払能力の声明が出せない'], ['CVL', '使える', '株主の特別決議で始め、債権者の候補が清算人になる'], ['管理手続', '使える', '事業を救える見込みがあれば。取締役が選ぶなら銀行に5営業日前の通知']] },
          after: '払えないと知りながら声明を出して MVL にすると、取締役の犯罪になりうる。'
        },
        {
          title: '場面2: 仕入先 Birch が動いた',
          paras: ['取締役が迷っている間に、Birch が6月1日に £12,000 の法定の支払請求を届けた。Hollow Ltd は3週間放置した。'],
          list: ['£750 を超え、3週間放置 → 6月22日以降、支払えないとみなされる', 'Birch は強制清算を申し立てられる（s122(1)(f)）', '命令が出れば、清算の開始は申立ての時にさかのぼる', '申立ての後に会社財産を処分すると、裁判所が認めない限り無効']
        },
        {
          title: '場面3: 銀行が管理手続を選んだら',
          list: ['銀行は全財産に浮動担保を持つ適格浮動担保権者（QFCH）なので、裁判所を通さずに管理人を選べる', 'モラトリアムで、管理人の同意か裁判所の許可がなければ Birch の訴訟も Lender L の担保の実行も止まる', '管理人はまず会社の救済を目指し、債権者全体のために動く。8週間以内に計画を示す', '救えなければ、事業をまとめて売ったり、清算に移ったりする']
        },
        {
          title: '場面4: 結局、清算になった',
          example: {
            problem: '倉庫は £150,000 で売れた（Lender L の債権 £120,000）。それ以外の資産は £270,000。銀行の浮動担保は全財産にかかるので、倉庫の余りもその対象。清算の費用 £30,000。従業員20人の未払給与 £22,000（全員 £800 以上）。HMRC: VAT と PAYE £14,000、法人税 £24,000。仕入先 £150,000（Birch を含む）。銀行の債権 £150,000。',
            steps: ['固定担保: £150,000 → Lender L に £120,000。余り £30,000 は浮動担保の資産に加わる', '浮動担保の資産: £30,000 ＋ £270,000 ＝ £300,000。費用を引いて £270,000', '優先: 20人 × £800 ＝ £16,000、HMRC £14,000。計 £30,000。純財産 £240,000', '留保分: £5,000 ＋（£240,000 − £10,000）× 20% ＝ £5,000 ＋ £46,000 ＝ £51,000', '銀行: £240,000 − £51,000 ＝ £189,000 から £150,000 を全額回収。余り £39,000', '無担保に回るお金: £51,000 ＋ £39,000 ＝ £90,000', '無担保の債権: 仕入先 £150,000 ＋ 給与の超過分 £6,000 ＋ 法人税 £24,000 ＝ £180,000。£90,000 ÷ £180,000 ＝ 0.5'],
            answer: '無担保債権者は1ポンドにつき50ペンス。Birch は £12,000 × 0.5 ＝ £6,000。株主は0'
          }
        },
        {
          title: '結果のまとめ',
          table: { caption: 'Hollow Ltd の配当', head: ['債権者', '債権', '受け取る額'], rows: [['Lender L（固定担保）', '£120,000', '£120,000'], ['清算の費用', '£30,000', '£30,000'], ['従業員（優先分）', '£16,000', '£16,000'], ['HMRC（VAT・PAYE）', '£14,000', '£14,000'], ['銀行（浮動担保）', '£150,000', '£150,000'], ['無担保債権者', '£180,000', '£90,000'], ['株主', '―', '0']] },
          after: '浮動担保権者が全額回収できたときは、留保分も残りも、すべて無担保債権者に回る。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '留保分の計算は、浮動担保の資産の総額ではなく、費用と優先債権を払った後の純財産から。固定担保の資産の余りがどこに行くかも、問題文の担保の範囲で確かめる。また、従業員の給与は £800 までが優先で、超えた分は無担保に入れ忘れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['払えない会社は MVL を使えない。閉じるなら CVL、救うなら管理手続', '£750 超の法定の支払請求を3週間放置で支払えないとみなされ、強制清算の申立てができる。開始は申立ての時', '配当は 固定担保 → 費用 → 優先 → 留保分 → 浮動担保 → 無担保 → 株主。留保分は純財産から計算']
        },
        {
          title: '英単語',
          words: [
            ['unable to pay its debts', 'アンエイブル', '債務を支払えない'],
            ['deemed', 'ディームド', '〜とみなされる'],
            ['commencement of the winding up', 'コメンスメント', '清算の開始'],
            ['distribution', 'ディストリビューション', '配当（分配）'],
            ['pence in the pound', 'ペンス イン ザ パウンド', '1ポンドにつき何ペンス（按分の割合）']
          ]
        }
      ],
      quiz: [
        { q: 'The directors of Hollow Ltd believe that the company cannot pay its debts and wish to bring it to an end without applying to the court. Which procedure should be used?', choices: ['A creditors\' voluntary liquidation', 'A members\' voluntary liquidation', 'A compulsory liquidation', 'An administration with the purpose of rescuing the company'], answer: 0, explain: '払えない会社は支払能力の声明が出せないので MVL は使えない。裁判所を通さずに終わらせるのは CVL。強制清算は裁判所の命令、管理手続は救済が目的。' },
        { q: 'Birch, a supplier owed £12,000, served a statutory demand on Hollow Ltd on 1 June. Hollow Ltd has neither paid nor secured the debt. Which of the following statements is correct?', choices: ['Birch must wait six months before it can petition the court', 'After three weeks Hollow Ltd is deemed unable to pay its debts, and Birch may petition the court for a winding-up order', 'Hollow Ltd is automatically wound up when the statutory demand is served', 'Birch may petition only if the members of Hollow Ltd pass a special resolution'], answer: 1, explain: 's123(1)(a)：£750 を超える請求を3週間放置すると支払えないとみなされ、s122(1)(f) の理由で申し立てられる。請求だけで自動的に清算になるわけではない。' },
        { q: 'A company in liquidation has net property of £510,000. Its floating charge was created in 2021. What is the prescribed part (in £)?', type: 'number', answer: 105000, unit: '£', explain: '£10,000 × 50% ＝ £5,000。残り £500,000 × 20% ＝ £100,000。合計 £105,000（上限 £800,000 以下）。' },
        { q: '例題の Hollow Ltd の清算で、無担保債権者は1ポンドにつき50ペンスを受け取る。£10,000 の債権を持つ仕入先が受け取る額は？', type: 'number', answer: 5000, unit: '£', explain: '£90,000 ÷ £180,000 ＝ 0.5。£10,000 × 0.5 ＝ £5,000。' },
        { q: 'The bank, as qualifying floating charge holder, appoints an administrator of Hollow Ltd. Birch then wishes to continue its petition for a winding-up order. Which of the following is correct?', choices: ['The appointment is invalid because a creditor had already served a statutory demand', 'Birch may continue because a creditor\'s petition is not affected by administration', 'The administrator must immediately apply for a winding-up order', 'The moratorium prevents a winding-up order being made while the company is in administration'], answer: 3, explain: '管理手続のモラトリアムで、会社の清算の決議も清算命令も出せない。適格浮動担保権者が選任すると、係属中の Birch の申立ては、管理手続の間は止まる。法定の支払請求や申立てがあっても、適格浮動担保権者の選任は妨げられない。' },
        { q: '例題で、もし銀行の債権が £150,000 ではなく £230,000 だったら、銀行が受け取る額は？（純財産 £240,000、留保分 £51,000）', type: 'number', answer: 189000, unit: '£', explain: '銀行が受け取れるのは純財産から留保分を引いた £189,000 まで。足りない £41,000 は留保分からはもらえない。この場合、無担保債権者に回るのは留保分 £51,000 だけになる。' }
      ]
    }
  ],
  cards: [
    { id: 'B091-1', lesson: 'B091', q: '清算（liquidation）で起きる4つのことは？', a: '清算人が引き継ぐ → 換金 → 順番どおりに支払い → 余りを株主へ、会社は解散' },
    { id: 'B091-2', lesson: 'B091', q: '清算の3つの種類は？', a: '株主による任意清算（MVL）、債権者による任意清算（CVL）、強制清算' },
    { id: 'B091-3', lesson: 'B091', q: '強制清算で最初に清算人になるのは？', a: '公的管財人（Official Receiver）' },
    { id: 'B091-4', lesson: 'B091', q: '英国で bankruptcy と liquidation の使い分けは？', a: 'bankruptcy は個人、会社は liquidation。清算は支払える会社にも使う' },
    { id: 'B091-5', lesson: 'B091', q: 'なぜ？ 1人の清算人が財産をまとめて配る', a: '早い者勝ちの取り合いを防ぎ、公平に配り、財産の価値を守るため' },
    { id: 'B092-1', lesson: 'B092', q: '任意清算はどう始まり、いつ開始する？', a: '株主の特別決議で始まり、決議が可決された時に開始する' },
    { id: 'B092-2', lesson: 'B092', q: '支払能力の声明（MVL）の条件は？', a: '取締役（3人以上なら過半数）が、決議前5週間以内に、12か月以内の全額支払いを声明' },
    { id: 'B092-3', lesson: 'B092', q: 'CVL で株主と債権者の清算人の候補が違ったら？', a: '債権者の候補が清算人になる' },
    { id: 'B092-4', lesson: 'B092', q: 'MVL で全額払えないと分かったら？', a: '債権者による任意清算（CVL）に切り替わる' },
    { id: 'B092-5', lesson: 'B092', q: 'なぜ？ 払えない会社では債権者が主導する', a: '財産は実質的に債権者のお金で、株主の取り分はもうないから' },
    { id: 'B093-1', lesson: 'B093', q: '強制清算の主な理由（s122(1)）は？', a: '特別決議、取引開始証明なし1年、1年事業なし・休止、支払えない、正当かつ公平' },
    { id: 'B093-2', lesson: 'B093', q: '法定の支払請求で「支払えない」となる条件は？', a: '£750 を超える期限の来た債務の請求を、3週間放置した' },
    { id: 'B093-3', lesson: 'B093', q: '強制清算の開始はいつ？', a: '申立ての時にさかのぼる（先に任意清算の決議があればその時）' },
    { id: 'B093-4', lesson: 'B093', q: '開始後の会社財産の処分はどうなる？', a: '裁判所が認めない限り無効（s127）' },
    { id: 'B093-5', lesson: 'B093', q: '正当かつ公平の理由になる例は？', a: '経営の行き詰まり、目的の消滅、詐欺目的、共同経営からの締め出し（Ebrahimi）' },
    { id: 'B093-6', lesson: 'B093', q: '正当かつ公平を理由に、ふつう強制清算を申し立てるのは？', a: '株主（出資者、contributories）。債権者は「支払えない」、国務大臣は公益（s124A）を使う' },
    { id: 'B094-1', lesson: 'B094', q: '清算の弁済順位は？', a: '固定担保→費用→優先→留保分→浮動担保→無担保→未払配当など→株主' },
    { id: 'B094-2', lesson: 'B094', q: '従業員の給与の優先の範囲は？', a: '清算前4か月分で1人 £800 まで。超えた分は無担保' },
    { id: 'B094-3', lesson: 'B094', q: 'HMRC の第2順位の優先債権になる税金は？', a: 'VAT、給与から天引きした所得税（PAYE）と社会保険料など。法人税は無担保' },
    { id: 'B094-4', lesson: 'B094', q: '留保分（prescribed part）の計算は？', a: '純財産の最初の £10,000 の50%＋残りの20%。上限 £800,000' },
    { id: 'B094-5', lesson: 'B094', q: '留保分は誰のもの？', a: '無担保債権者だけ。浮動担保権者は足りない分をここから受け取れない' },
    { id: 'B094-6', lesson: 'B094', q: 'なぜ？ 浮動担保は優先債権より後ろ', a: '会社が資産を自由に売買できる担保だから。従業員などを守るため' },
    { id: 'B095-1', lesson: 'B095', q: '管理手続の目的の順番は？', a: '①会社の救済 ②清算よりよい結果 ③担保・優先債権者への配当' },
    { id: 'B095-2', lesson: 'B095', q: '管理人を選べるのは？', a: '裁判所、適格浮動担保権者（QFCH）、会社・取締役' },
    { id: 'B095-3', lesson: 'B095', q: 'モラトリアムで止まるものは？', a: '清算の決議と命令、担保の実行、リース物の取戻し、訴訟（同意か許可がなければ）' },
    { id: 'B095-4', lesson: 'B095', q: '管理人は誰の利益のために動く？', a: '債権者全体。選んだ銀行のためではない' },
    { id: 'B095-5', lesson: 'B095', q: '管理手続の期間と計画の期限は？', a: '1年で自動終了（延長可）。計画は8週間以内に債権者へ' },
    { id: 'B096-1', lesson: 'B096', q: '払えない会社を裁判所なしで閉じる手続きは？', a: '債権者による任意清算（CVL）。MVL は使えない' },
    { id: 'B096-2', lesson: 'B096', q: '留保分の計算のもとになる純財産とは？', a: '浮動担保の資産から、清算の費用と優先債権を払った残り' },
    { id: 'B096-3', lesson: 'B096', q: '浮動担保権者が全額回収できたら、残りは？', a: '留保分も残りも、すべて無担保債権者に回る' },
    { id: 'B096-4', lesson: 'B096', q: '無担保債権者の按分の計算は？', a: '回るお金 ÷ 無担保債権の合計 ＝ 1ポンドあたりの割合' }
  ]
});
