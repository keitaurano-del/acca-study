(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 205,
  part: 2,
  partTitle: '国際物品売買（ウィーン売買条約 CISG）',
  lessons: [
    {
      id: 'B015',
      no: 15,
      title: '申込み（offer）：成立の第一歩',
      goal: 'CISG で申込みになる条件を判定し、申込みの効力が生じる時、取りやめ・撤回ができる時、申込みが消える時を判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(b)'],
      slides: [
        {
          title: 'フリマの投稿と、個別のメッセージ',
          paras: ['フリマアプリのタイムラインに「自転車、1万円で売ります」と投稿する。これは誰にでも向けた宣伝で、見た人に「買いたい」と言ってもらうための呼びかけ。', 'Aさんに「この自転車を1万円で売るよ。買うならOKして」と送るのは違う。Aさんが「OK」と返せば決まる。契約の第一歩になるこの提案を、申込み（offer）という。']
        },
        {
          title: '申込みになる3つの条件（Art 14(1)）',
          list: ['特定の相手（one or more specific persons）に向けている', '十分に確定（sufficiently definite）している: 物品を示し、数量と代金を決めているか、決め方を示している（明示でも黙示でもよい）', '承諾されたら拘束される意思（intention to be bound）を示している'],
          formula: '申込み ＝ 特定の相手 ＋ 物品・数量・代金が確定 ＋ 拘束される意思'
        },
        {
          title: '申込みの誘引（Art 14(2)）',
          paras: ['特定の相手に向けていない提案は、原則として申込みの誘引（invitation to make offers）にすぎない。カタログ、ウェブサイトの価格表、業界誌の広告がこれに当たる。', 'この場合、それを見た買主の注文が申込みになり、売主が承諾して初めて契約が成立する。ただし、提案者が「これは申込みだ」という意思をはっきり示していれば、申込みになる。']
        },
        {
          title: 'お茶の輸出で確かめる',
          paras: ['日本の茶葉メーカー「みどり茶園」が、ドイツのカフェにメールを2通送った。日本もドイツも CISG の締約国。'],
          table: { caption: 'メールA「抹茶200kgを1kgあたり$50、9月出荷で売ります。返事は6月30日までに」、メールB「良い抹茶をお安く提供できます。ご興味があればご連絡を」', head: ['条件', 'メールA', 'メールB'], rows: [['特定の相手', 'ある', 'ある'], ['物品', '抹茶', '抹茶'], ['数量', '200kg', 'なし'], ['代金', '$50/kg', 'なし'], ['結果', '申込み', '申込みではない']] },
          after: '代金は「出荷日の当社価格表の値段で」のように、決め方を示すだけでもよい。引渡しの日や支払の条件が書かれていなくても、それだけで申込みでなくなることはない。'
        },
        {
          title: '効力は到達で生じる（Art 15・16(1)）',
          paras: ['申込みは、相手に到達した時に効力が生じる。到達する前なら、取りやめ（withdrawal）の通知が申込みより先か同時に届けば、取りやめられる。到達した後は、相手が承諾を発信する前に撤回（revocation）の通知が届けば、撤回できる。'],
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="申込みの到達前は取りやめ、到達後から承諾の発信までは撤回ができる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">申込みを止められる2つの期間</text><text x="70" y="66" text-anchor="middle" fill="var(--ink)">①申込み</text><text x="70" y="86" text-anchor="middle" fill="var(--ink)">発信</text><text x="205" y="66" text-anchor="middle" fill="var(--ink)">②申込みが</text><text x="205" y="86" text-anchor="middle" fill="var(--ink)">到達</text><text x="345" y="66" text-anchor="middle" fill="var(--ink)">③承諾を</text><text x="345" y="86" text-anchor="middle" fill="var(--ink)">発信</text><line x1="40" y1="110" x2="420" y2="110" stroke="var(--edge)" stroke-width="1.5"/><circle cx="70" cy="110" r="5" fill="var(--ink)"/><circle cx="205" cy="110" r="5" fill="var(--ink)"/><circle cx="345" cy="110" r="5" fill="var(--ink)"/><rect x="74" y="128" width="127" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="209" y="128" width="132" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="349" y="128" width="71" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="137" y="152" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">取りやめ可</text><text x="137" y="172" text-anchor="middle" font-size="12.5" fill="var(--quiet)">withdrawal</text><text x="275" y="152" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">撤回可</text><text x="275" y="172" text-anchor="middle" font-size="12.5" fill="var(--quiet)">revocation</text><text x="384" y="152" text-anchor="middle" font-size="15" fill="var(--ink)">撤回不可</text><text x="384" y="172" text-anchor="middle" font-size="12.5" fill="var(--quiet)">too late</text><text x="220" y="216" text-anchor="middle" fill="var(--ink)">②の到達で申込みの効力が生じる（Art 15(1)）</text><text x="220" y="244" text-anchor="middle" fill="var(--ink)">撤回の締切は承諾の「発信」まで（Art 16(1)）</text></svg>`,
          caption: '承諾は到達で効力が生じるが、撤回の締切はそれより早い「承諾の発信」になる。'
        },
        {
          title: '撤回できない申込み（Art 16(2)）',
          list: ['(a) 撤回できないことを示した申込み: 「6月30日までに返事を」と承諾の期限を決めた、または「この申込みは取消不能」と書いた', '(b) 相手が撤回されないと信じたのがもっともで、それに頼って行動した申込み: 例えば、申込みを前提に工場の生産ラインを空けた、材料を発注した'],
          after: '撤回できない申込みでも、相手に到達する前の取りやめはできる（Art 15(2)）。まだ相手は何も知らず、頼りようがないから。'
        },
        {
          title: '申込みが消えるとき（Art 17・18(2)）',
          list: ['拒絶（rejection）が申込者に到達した時。撤回できない申込みでも消える', '承諾の期限が過ぎた時。期限がなければ、合理的な期間が過ぎた時', '口頭の申込みは、事情から別と分からない限り、その場で承諾しないと消える'],
          after: '拒絶した後で気が変わって「やっぱり買います」と送っても、元の申込みはもうない。その返事は新しい申込みになる。'
        },
        {
          title: 'なぜ？ 期限付きの申込みは撤回できない',
          paras: ['国際取引では、申込みを受けた側は返事の前から、運送・資金・在庫の準備を始めることが多い。申込者がいつでも引っ込められると、信じて準備した側だけが損をする。CISG は、信頼した相手を守るほうを選んだ。', '日本の民法も、承諾の期間を定めた申込みは原則として撤回できない（民法523条）。一方、英米のコモン・ローでは、対価（consideration）がなければ期限付きの申込みでも撤回できるのが原則で、ここが CISG と違う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'カタログや広告を申込みだと思い込む。不特定の人への提案は、原則として申込みの誘引。もう1つは、取りやめと撤回の混同。到達前に止めるのが取りやめ、到達後に止めるのが撤回。撤回の締切は、承諾の「到達」ではなく「発信」。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['申込み＝特定の相手へ、物品・数量・代金が確定、拘束される意思（Art 14）', '到達で効力が生じる。到達前は取りやめ、到達後は承諾の発信まで撤回できる（Art 15・16(1)）', '期限付き・取消不能・相手が信頼して行動した申込みは撤回できない。拒絶が届けば消える（Art 16(2)・17）']
        },
        {
          title: '英単語',
          words: [
            ['offer', 'オファー', '申込み'],
            ['offeror / offeree', 'オフェラー / オフェリー', '申込者 / 申込みを受けた相手'],
            ['invitation to make offers', '', '申込みの誘引（英国法では invitation to treat）'],
            ['sufficiently definite', '', '十分に確定している'],
            ['withdrawal', 'ウィズドローアル', '（到達前の）取りやめ'],
            ['revocation', 'レヴォケーション', '（到達後の）撤回'],
            ['irrevocable offer', '', '撤回できない申込み'],
            ['rejection', 'リジェクション', '拒絶'],
            ['reach', 'リーチ', '到達する']
          ]
        }
      ],
      quiz: [
        { q: 'ドイツの会社が業界誌に「部品X、1個$3、在庫限り」と広告を出した。日本の会社がそれを見て「500個買います」とメールした。CISG ではどうなる？', choices: ['広告が申込みで、注文のメールで契約が成立する', '広告も注文も申込みの誘引で、まだ何も始まっていない', '広告は申込みの誘引で、日本の会社の注文が申込みになる', '広告を見た時点で契約が成立する'], answer: 2, explain: '不特定の人に向けた広告は、原則として申込みの誘引（Art 14(2)）。注文は特定の相手への確定した提案なので申込みになり、ドイツの会社が承諾すれば契約が成立する。広告を申込みとみるのは、広告主が申込みの意思をはっきり示した場合だけ。' },
        { q: 'Under the CISG, which of the following is required for a proposal to be sufficiently definite?', choices: ['It states the goods, the quantity, the price and the delivery date', 'It indicates the goods and expressly or implicitly fixes or makes provision for determining the quantity and the price', 'It is made in writing and signed by the offeror', 'It indicates the goods and the price, but the quantity may be left open'], answer: 1, explain: 'Art 14(1) が求めるのは、物品・数量・代金（決め方でもよい）。引渡しの日は要件ではない。書面や署名も不要（CISG は方式自由）。数量を空けたままでは確定とはいえない。' },
        { q: 'On 1 May, S sent an offer to B. The offer reached B on 3 May. B dispatched an acceptance on 6 May, which reached S on 9 May. A revocation sent by S reached B on 7 May. The offer was not irrevocable. Under the CISG, which statement is correct?', choices: ['No contract was concluded, because the revocation reached B before the acceptance reached S', 'A contract was concluded on 6 May, when B dispatched the acceptance', 'No contract was concluded, because the offer was withdrawn', 'A contract was concluded on 9 May, because the revocation reached B after B had dispatched the acceptance'], answer: 3, explain: '撤回は、相手が承諾を発信する前に届く必要がある（Art 16(1)）。7日の撤回は6日の発信より後なので無効。契約は承諾が到達した9日に成立する（Art 18(2)・23）。6日（発信の日）ではない。申込みはすでに到達していたので、取りやめ（withdrawal）でもない。' },
        { q: 'An offer states that it is irrevocable. A notice cancelling the offer reaches the offeree at the same time as the offer itself. What is the effect under the CISG?', choices: ['The offer is effectively withdrawn', 'The offer cannot be cancelled because it is irrevocable', 'The offer is revoked, but the offeror must pay damages', 'The offer remains open until the offeree replies'], answer: 0, explain: '撤回できない申込みでも、取りやめの通知が申込みより先か同時に届けば取りやめられる（Art 15(2)）。まだ効力が生じておらず、相手が頼る前だから。取消不能が効くのは、到達した後の撤回に対してだけ。' },
        { q: '期限の書かれていない申込みが届いた。相手は、この申込みは撤回されないと信じるのがもっともな状況で、その日のうちに材料を発注した。翌日、申込者の撤回の通知が届いた。承諾はまだ発信していない。撤回は？', choices: ['撤回できる。承諾をまだ発信していないから', '撤回できる。期限が書かれていない申込みは、いつでも撤回できるから', '撤回できない。撤回されないと信じるのがもっともで、それに頼って行動したから', '撤回できない。申込みは到達した時点で必ず撤回できなくなるから'], answer: 2, explain: 'Art 16(2)(b) の場合に当たる。承諾の発信前でも撤回できない。「承諾をまだ発信していないから撤回できる」「期限がなければいつでも撤回できる」は、Art 16(1) の原則だけを見た答え。「到達した時点で必ず撤回できなくなる」も誤りで、原則は承諾の発信まで撤回できる。' },
        { q: '承諾の期限が6月30日の申込みに、6月10日に「お断りします」と返信し、到達した。6月20日に気が変わって「承諾します」と送り、到達した。契約は？', choices: ['成立する。期限内に承諾したから', '自動的には成立しない。拒絶の到達で申込みは消え、6月20日の返事は新しい申込みになる', '成立する。期限付きの申込みは撤回できないので、拒絶でも消えないから', '成立しない。期限付きの申込みには、期限の日にしか承諾できないから'], answer: 1, explain: '拒絶が申込者に到達すると、撤回できない申込みでも消える（Art 17）。撤回できないのは申込者の側の話で、相手が断れば終わり。6月20日の返事に申込者が承諾すれば、改めて契約が成立する。' }
      ]
    },
    {
      id: 'B016',
      no: 16,
      title: '承諾（acceptance）：いつ契約が成立するか',
      goal: '承諾になる言葉や行為を見分け、到達のルールで契約の成立時期を判断し、承諾の期間、遅れた承諾、承諾の取りやめを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(b)'],
      slides: [
        {
          title: '既読スルーは「OK」ではない',
          paras: ['友達に「土曜に引越しを手伝ってくれたらピザをおごる」と送った。既読がついても、返事がなければ「OK」とは言えない。「OK」が届いて初めて約束が決まる。', '友達が「OK」を書いて送る前に消せば、何もなかったことになる。CISG の承諾（acceptance）も、この感覚で考えると分かりやすい。']
        },
        {
          title: '承諾とは（Art 18(1)）',
          formula: '承諾 ＝ 申込みに同意することを示す言葉か行為',
          list: ['言葉（statement）: 「ご注文を承ります」とメールする', '行為（conduct）: 物品を発送する、代金を払うなど、同意を示す行動', '沈黙・何もしない（silence or inactivity）: それだけでは承諾にならない'],
          after: '申込みに「返事がなければ承諾とみなす」と書いても、相手を沈黙で縛ることはできない。ただし、当事者の間で「返事がなければ承諾」という慣行がすでにあれば別。'
        },
        {
          title: '承諾が届いた時に契約が成立する',
          paras: ['承諾は、同意の表示が申込者に到達した時に効力が生じ（Art 18(2)）、その時に契約が成立する（Art 23）。「到達」とは、口頭で伝えた時、または本人・営業所・郵便の宛先（どれもなければ常居所）に届けた時（Art 24）。相手が読んだかどうかは問わない。'],
          table: { caption: 'みどり茶園の申込み（承諾の期限6月30日）への返事', head: ['返事のしかた', '到達', '結果'], rows: [['メールで承諾（6/25送信）', '6/25', '6/25に契約成立'], ['郵便で承諾（6/28発送）', '7/2', '期限後の到達。原則として効力なし'], ['返事をしない', '—', '承諾ではない']] }
        },
        {
          title: '承諾の期限と期間の数え方（Art 18(2)・20）',
          list: ['期限あり: その期限までに到達する。期限なし: 合理的な期間内（通信手段の速さなども考える）', '口頭の申込み: 事情から別と分からない限り、その場ですぐ承諾する'],
          table: { caption: '「10日以内に承諾を」の数え始め（Art 20(1)）', head: ['申込みの方法', '数え始め'], rows: [['手紙', '手紙に書かれた日付（なければ封筒の日付）'], ['電報', '発信のために渡した時'], ['電話など即時の手段', '申込みが相手に到達した時']] },
          after: '期間中の休日も数える。最終日が申込者の営業地の休日で承諾を届けられないときは、次の営業日まで延びる（Art 20(2)）。'
        },
        {
          title: '行為による承諾（Art 18(3)）',
          paras: ['申込みの中で認めた場合、当事者の間の慣行（practices）がある場合、または慣習（usage）がある場合は、通知をせずに行為だけで承諾できる。このとき承諾は、行為をした時に効力が生じる（期限内に限る）。', '例: 買主の申込み「急ぎです。承諾なら連絡は不要、すぐ発送してください」。売主が3月4日に発送すれば、物品が届くのが3月20日でも、契約は3月4日に成立する。']
        },
        {
          title: '遅れた承諾（Art 21）',
          table: { caption: '遅れの原因で、原則が逆になる', head: ['遅れの原因', '結果'], rows: [['承諾する側が遅く出した', '原則は無効。申込者が遅滞なく「有効とする」と伝えれば有効（Art 21(1)）'], ['普通なら間に合う時に出したが、配達が遅れた（手紙などから分かる）', '原則は有効。申込者が遅滞なく「申込みは失効した」と伝えれば無効（Art 21(2)）']] },
          after: '配達の遅れは承諾した側のせいではない。だから原則は有効にし、困る申込者のほうに「すぐ断る」手間を負わせる。'
        },
        {
          title: '承諾の取りやめ（Art 22）',
          paras: ['承諾は、取りやめの通知が承諾の到達より先か同時に届けば、取りやめられる。承諾が届いた後は契約が成立しているので、もう取りやめられない。'],
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="承諾の発信から到達までの間、申込者はもう撤回できないが、承諾者はまだ取りやめができる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">承諾の発信から到達までの間</text><text x="80" y="68" text-anchor="middle" fill="var(--ink)">承諾を発信</text><text x="300" y="68" text-anchor="middle" fill="var(--ink)">承諾が到達</text><line x1="30" y1="90" x2="420" y2="90" stroke="var(--edge)" stroke-width="1.5"/><circle cx="80" cy="90" r="5" fill="var(--ink)"/><circle cx="300" cy="90" r="5" fill="var(--ink)"/><rect x="84" y="108" width="212" height="80" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="190" y="140" text-anchor="middle" fill="var(--ink)">申込者: もう撤回できない</text><text x="190" y="166" text-anchor="middle" fill="var(--ink)">承諾者: まだ取りやめできる</text><rect x="304" y="108" width="116" height="80" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="362" y="132" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">契約成立</text><text x="362" y="156" text-anchor="middle" fill="var(--ink)">どちらも</text><text x="362" y="176" text-anchor="middle" fill="var(--ink)">止められない</text><text x="220" y="222" text-anchor="middle" fill="var(--ink)">撤回の締切は発信、取りやめの締切は到達</text></svg>`,
          caption: '承諾の発信から到達までの間は、承諾した側だけがまだ引き返せる。'
        },
        {
          title: 'なぜ？ 到達で成立する理由',
          paras: ['承諾が届かなければ、申込者は契約したことを知らず、準備もできない。届くまでの紛失や遅れの危険は、送る側が負うのが公平。日本の民法も2020年の改正で、承諾は到達した時に効力が生じる形になった。', '一方、英米のコモン・ローには、郵便の承諾は投函した時に成立する郵便ルール（postal rule）がある。CISG はこれを採らない。撤回の締切だけを「承諾の発信」にして、承諾した側を守っている。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '承諾を送った日を成立の日と答えてしまう。成立は届いた日（行為による承諾が認められる場合だけ、行為の日）。また、日本の商法には、いつも取引する商人からの申込みに返事をしないと承諾とみなす規定がある（商法509条）。CISG が適用される取引では、沈黙だけでは承諾にならない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['承諾＝同意を示す言葉か行為。沈黙だけでは承諾にならない（Art 18(1)）', '承諾は到達した時に効力が生じ、契約もその時に成立する（Art 18(2)・23）。慣行などで認められた行為による承諾は、行為の時（Art 18(3)）', '遅れた承諾は申込者の通知で決まる（Art 21）。承諾は到達するまでなら取りやめられる（Art 22）']
        },
        {
          title: '英単語',
          words: [
            ['acceptance', 'アクセプタンス', '承諾'],
            ['indication of assent', '', '同意の表示'],
            ['silence or inactivity', '', '沈黙や何もしないこと'],
            ['conduct', 'コンダクト', '行為'],
            ['dispatch', 'ディスパッチ', '発信する、発送する'],
            ['conclude a contract', '', '契約を締結する（成立させる）'],
            ['late acceptance', '', '遅れた承諾'],
            ['lapse', 'ラプス', '（申込みが）効力を失う'],
            ['place of business', '', '営業所']
          ]
        }
      ],
      quiz: [
        { q: '申込みに「10日以内に返事がなければ、承諾したものとみなします」と書いた。相手は返事をしなかった。両者の間に、それまでの取引の慣行はない。CISG では？', choices: ['10日が過ぎた時に契約が成立する', '申込者が10日後に確認の通知を送れば成立する', '相手が商人なら、返事をしないと承諾とみなされる', '契約は成立しない。沈黙だけでは承諾にならない'], answer: 3, explain: '沈黙や何もしないことは、それだけでは承諾にならない（Art 18(1)）。申込者が一方的に沈黙を承諾と決めることはできない。「相手が商人なら承諾とみなされる」は日本の商法509条の考え方で、CISG が適用される取引では使えない。' },
        { q: 'Under the CISG, when does an acceptance by a statement become effective?', choices: ['When the indication of assent reaches the offeror', 'When the offeree dispatches the acceptance', 'When the offeror reads the acceptance', 'When the goods are delivered to the buyer'], answer: 0, explain: '承諾は、同意の表示が申込者に到達した時に効力が生じる（Art 18(2)）。発信の時に成立するのは英米法の郵便ルールで、CISG は採らない。到達は相手に届けばよく、読んだかどうかは問わない（Art 24）。' },
        { q: 'An offer required acceptance by 10 June. The offeree posted a letter of acceptance on 3 June, which in normal circumstances would have arrived by 6 June. The letter showed when it had been sent. Because of a postal strike, it arrived on 12 June. The offeror did nothing. Under the CISG, which statement is correct?', choices: ['The acceptance is not effective, because it arrived after 10 June', 'The acceptance became effective on 3 June, when it was posted', 'The acceptance is effective, because the offeror did not inform the offeree without delay that the offer had lapsed', 'The acceptance is effective only if the offeror confirms it in writing'], answer: 2, explain: '普通なら期限内に届くはずだったのに配達が遅れた場合、遅れた承諾は原則として有効。申込者が遅滞なく「失効した」と伝えた場合だけ無効になる（Art 21(2)）。「10日より後に届いたから無効」は、承諾者が遅く出した場合（Art 21(1)）の原則。「投函した3日に有効」は英米法の郵便ルールで、CISG は採らない。' },
        { q: '承諾の手紙を発送した後で気が変わり、メールで取りやめを送った。メールは手紙より先に申込者に届いた。どうなる？', choices: ['手紙を発送した時に契約が成立しているので、取りやめは無効', '取りやめは有効で、契約は成立しない', '申込者が同意した場合だけ、取りやめは有効', '取りやめはできず、損害賠償で解決する'], answer: 1, explain: '承諾は、取りやめの通知が承諾の到達より先か同時に届けば取りやめられる（Art 22）。承諾はまだ到達していないので、契約も成立していない。「発送した時に成立している」は、発信で成立すると考えた間違い（英米法の郵便ルール）。' },
        { q: "A buyer's offer states: 'If you accept, ship the goods at once. No confirmation is needed.' Within the time for acceptance, the seller ships the goods on 4 March without notifying the buyer. The goods arrive on 20 March. Under the CISG, when was the contract concluded?", choices: ['20 March, when the goods arrived', 'No contract was concluded, because the seller did not notify the buyer', 'When the buyer pays the price', '4 March, when the goods were shipped'], answer: 3, explain: '申込みが通知なしの行為による承諾を認めているので、承諾は行為をした時に効力が生じる（Art 18(3)）。発送した3月4日に成立する。到着日でも、通知がないから不成立でもない。' },
        { q: '手紙で申込みをした。手紙の日付は5月1日、封筒の消印は5月2日、相手に届いたのは5月6日。手紙に「10日以内に承諾を」と書いてある。期間はいつから数える？', choices: ['5月2日（封筒の日付）', '5月6日（相手に届いた日）', '5月1日（手紙の日付）', '相手が承諾を発信した日'], answer: 2, explain: '手紙で決めた期間は、手紙に書かれた日付から数える（Art 20(1)）。封筒の日付を使うのは、手紙に日付がない時だけ。到達の時から数えるのは、電話など即時の手段の場合。' }
      ]
    },
    {
      id: 'B017',
      no: 17,
      title: '条件を変えた承諾と書式の戦い',
      goal: '条件を変えた返事が拒絶・反対申込みか承諾かを Art 19 で判定し、書式の戦いでどちらの条件の契約が成立するかを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(b)'],
      slides: [
        {
          title: '「45万円なら買う」は合意ではない',
          paras: ['中古車を「50万円で売る」と言われて、「45万円なら買う」と返した。これは合意ではなく、こちらからの新しい提案。相手が「45万円でいいよ」と言えば決まる。', '相手に断られたあとで「やっぱり50万円で買う」と言っても、最初の話はもう消えている。CISG もこれと同じ考え方をする。']
        },
        {
          title: '原則：変更つきの承諾は反対申込み（Art 19(1)）',
          paras: ['承諾のつもりの返事でも、追加・制限・その他の変更（additions, limitations or other modifications）を含んでいれば、申込みの拒絶であり、反対申込み（counter-offer）になる。'],
          formula: '変更つきの承諾 ＝ 拒絶 ＋ 反対申込み',
          after: '元の申込みは、この拒絶が届いた時に消える（Art 17）。反対申込みに相手が承諾すれば、反対申込みの条件で契約が成立する。'
        },
        {
          title: '例外：実質的でない変更なら承諾（Art 19(2)）',
          paras: ['変更が申込みの内容を実質的に変えない（do not materially alter）なら、その返事は承諾になる。ただし申込者が遅滞なく、口頭で異議を述べるか、その旨の通知を発すれば、承諾にならず契約は成立しない。', '異議がなければ、契約の内容は「申込み＋返事の変更」。例: 「承諾します。請求書は2通お送りください」。請求書を2通送ることも契約の内容になる。']
        },
        {
          title: '実質的な変更の例（Art 19(3)）',
          table: { caption: 'みどり茶園の申込み「抹茶200kg、$50/kg、前払い、9月出荷」への返事', head: ['変更の対象', '返事に入った変更の例'], rows: [['代金', '$48/kg なら'], ['支払', '出荷後60日の後払いで'], ['品質・数量', '180kg にしてください'], ['引渡しの場所・時期', '10月出荷で'], ['一方の責任の範囲', '損害賠償は代金の10%まで'], ['紛争の解決', '紛争はシンガポールで仲裁']] },
          after: 'この一覧は「among other things（などの）」で、例にすぎない。範囲がとても広いので、ほとんどの変更は実質的と考えるのが基本。実質的でないのは、請求書の通数のような事務的な小さい追加。'
        },
        {
          title: '例題：変更つきの返事のやりとり',
          example: {
            problem: 'みどり茶園が6月1日に申込み（抹茶200kg、$50/kg、9月出荷）。カフェは6月5日に「承諾します。ただし10月出荷で」と返信した。みどり茶園は6月8日に「10月出荷で了解しました」と返信し、届いた。契約は成立したか。条件は？',
            steps: ['6月5日の返事: 引渡しの時期を変えている → 実質的な変更（Art 19(3)）', 'だから承諾ではなく、拒絶＋反対申込み（Art 19(1)）。元の申込み（9月出荷）は消える', '6月8日の返事: 反対申込みに変更なしで同意 → 承諾', '承諾がカフェに届いた時に契約が成立（Art 18(2)・23）。内容は反対申込みの条件'],
            answer: '6月8日の返事が届いた時に成立。抹茶200kg、$50/kg、10月出荷'
          }
        },
        {
          title: '返事が届いたら：成立チェック',
          svg: `<svg viewBox="0 0 440 322" role="img" aria-label="返事が申込みと同じなら承諾、実質的な変更なら反対申込み、実質的でない変更は申込者が異議を述べなければ承諾" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">返事が届いたら：成立チェック</text><rect x="20" y="50" width="200" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="78" text-anchor="middle" font-size="15" fill="var(--ink)">①返事は申込みと同じ？</text><rect x="270" y="50" width="150" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="345" y="68" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">承諾</text><text x="345" y="90" text-anchor="middle" fill="var(--ink)">到達で成立</text><line x1="220" y1="73" x2="262" y2="73" stroke="var(--ink)" stroke-width="1.25"/><polygon points="270,73 261,68 261,78" fill="var(--ink)"/><text x="245" y="64" text-anchor="middle" fill="var(--ink)">はい</text><line x1="120" y1="96" x2="120" y2="112" stroke="var(--ink)" stroke-width="1.25"/><polygon points="120,120 115,111 125,111" fill="var(--ink)"/><text x="130" y="112" fill="var(--quiet)">いいえ</text><rect x="20" y="120" width="200" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="140" text-anchor="middle" font-size="15" fill="var(--ink)">②変更は実質的？</text><text x="120" y="158" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 19(3)</text><rect x="270" y="120" width="150" height="46" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="345" y="138" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">拒絶＋</text><text x="345" y="160" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">反対申込み</text><line x1="220" y1="143" x2="262" y2="143" stroke="var(--ink)" stroke-width="1.25"/><polygon points="270,143 261,138 261,148" fill="var(--ink)"/><text x="245" y="134" text-anchor="middle" fill="var(--ink)">はい</text><line x1="120" y1="166" x2="120" y2="182" stroke="var(--ink)" stroke-width="1.25"/><polygon points="120,190 115,181 125,181" fill="var(--ink)"/><text x="130" y="182" fill="var(--quiet)">いいえ</text><rect x="20" y="190" width="200" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="218" text-anchor="middle" font-size="15" fill="var(--ink)">③申込者が遅滞なく異議？</text><rect x="270" y="190" width="150" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="345" y="210" text-anchor="middle" fill="var(--ink)">契約は</text><text x="345" y="228" text-anchor="middle" fill="var(--ink)">成立しない</text><line x1="220" y1="213" x2="262" y2="213" stroke="var(--ink)" stroke-width="1.25"/><polygon points="270,213 261,208 261,218" fill="var(--ink)"/><text x="245" y="204" text-anchor="middle" fill="var(--ink)">はい</text><line x1="120" y1="236" x2="120" y2="252" stroke="var(--ink)" stroke-width="1.25"/><polygon points="120,260 115,251 125,251" fill="var(--ink)"/><text x="130" y="252" fill="var(--quiet)">いいえ</text><rect x="20" y="260" width="200" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="120" y="280" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">承諾（Art 19(2)）</text><text x="120" y="300" text-anchor="middle" fill="var(--ink)">申込み＋変更の内容で成立</text></svg>`,
          caption: '反対申込みになったら、今度は相手の返事を同じ手順でチェックする。'
        },
        {
          title: '書式の戦い（battle of the forms）',
          paras: ['会社どうしの取引では、裏面に自社の一般条件（standard terms）を印刷した注文書と注文請書を送り合う。条件がぶつかったまま、物品が届き、代金が払われることが多い。'],
          svg: `<svg viewBox="0 0 440 304" role="img" aria-label="買主の注文書が申込み、売主の注文請書が反対申込み、買主の受領と支払が承諾になり、売主の条件で契約が成立する" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">最後に出した書式が勝ちやすい</text><text x="40" y="62" font-size="16" font-weight="600" fill="var(--ink)">買主</text><text x="400" y="62" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">売主</text><text x="220" y="88" text-anchor="middle" fill="var(--ink)">①注文書（条件A）＝申込み</text><line x1="40" y1="100" x2="392" y2="100" stroke="var(--ink)" stroke-width="1.25"/><polygon points="400,100 391,95 391,105" fill="var(--ink)"/><text x="220" y="136" text-anchor="middle" fill="var(--ink)">②注文請書（条件B）＝反対申込み</text><line x1="48" y1="148" x2="400" y2="148" stroke="var(--ink)" stroke-width="1.25"/><polygon points="40,148 49,143 49,153" fill="var(--ink)"/><text x="220" y="184" text-anchor="middle" fill="var(--ink)">③売主が物品を出荷</text><line x1="48" y1="196" x2="400" y2="196" stroke="var(--ink)" stroke-width="1.25"/><polygon points="40,196 49,191 49,201" fill="var(--ink)"/><rect x="40" y="214" width="360" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="238" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">④買主が受け取って支払う＝承諾</text><text x="220" y="260" text-anchor="middle" fill="var(--ink)">契約の条件は B（売主の条件）</text><text x="220" y="294" text-anchor="middle" fill="var(--ink)">条約に専用の条文はなく、各国の扱いは分かれる</text></svg>`,
          caption: '条件Bに責任の制限などがあれば実質的な変更なので、②は反対申込み。買主の受領と支払が行為による承諾になる（Art 18(1)）。これを last shot rule という。'
        },
        {
          title: 'なぜ？ 変更つきは原則として拒絶',
          paras: ['契約は、両方が同じ内容に合意して初めて成り立つ。承諾は申込みを鏡に映したように一致する必要がある（mirror image rule）。中身が違えば、まだ合意ではない。', 'ただ、ささいな書き足しまで拒絶にすると、取引全体が宙に浮く。そこで Art 19(2) が小さな変更を救う。日本の民法528条は、変更を加えた承諾をすべて新たな申込みとみなす。小さな変更なら承諾になる点が、日本の感覚と違う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「承諾します」と書いてあれば承諾だと思い込む。見出しではなく中身で判断する。代金・数量・引渡し・責任・紛争解決などを1つでも変えれば、原則として反対申込み。また、反対申込みの後で元の申込みに戻って承諾することはできない。元の申込みは拒絶で消えている。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['変更つきの承諾は、拒絶＋反対申込み（Art 19(1)）', '実質的でない変更なら、申込者が遅滞なく異議を述べない限り承諾。内容は申込み＋変更（Art 19(2)）', '代金・支払・品質・数量・引渡しの場所と時期・責任の範囲・紛争解決の変更は実質的（Art 19(3)）。書式の戦いでは最後の書式が勝ちやすい']
        },
        {
          title: '英単語',
          words: [
            ['counter-offer', 'カウンターオファー', '反対申込み'],
            ['additions, limitations or other modifications', '', '追加・制限・その他の変更'],
            ['materially alter', 'マテリアリー オルター', '実質的に変更する'],
            ['without undue delay', '', '遅滞なく'],
            ['mirror image rule', 'ミラー イメージ ルール', '承諾は申込みと一致する必要があるという考え方'],
            ['battle of the forms', 'バトル オブ ザ フォームズ', '書式の戦い'],
            ['standard terms', 'スタンダード タームズ', '一般条件（約款）'],
            ['last shot rule', 'ラスト ショット ルール', '最後に出した書式の条件で成立するという考え方'],
            ['knock-out rule', 'ノックアウト ルール', '両方の書式の一致する部分だけを契約とする考え方（採る裁判所もある）']
          ]
        }
      ],
      quiz: [
        { q: "S offered to sell 1,000 units to B at $20 each for delivery in May. B replied: 'We accept your offer, but delivery must be in April.' Under the CISG, what is the effect of B's reply?", choices: ['It is an acceptance, and the contract is for delivery in April', 'It is a rejection of the offer and a counter-offer', 'It is an acceptance, and the contract is for delivery in May', 'It is an acceptance unless S objects without undue delay'], answer: 1, explain: '引渡しの時期の変更は実質的な変更（Art 19(3)）。だから拒絶＋反対申込み（Art 19(1)）で、契約はまだない。「S が遅滞なく異議を述べなければ承諾」は実質的でない変更のときのルール（Art 19(2)）で、ここには当てはまらない。' },
        { q: 'Which of the following additional terms in a reply to an offer would NOT be considered to materially alter the terms of the offer under the CISG?', choices: ["A clause limiting the seller's liability for defective goods", 'A clause requiring disputes to be settled by arbitration', 'A change to the date of payment', 'A request that two copies of the invoice be sent'], answer: 3, explain: '責任の範囲、紛争の解決、支払は、Art 19(3) が実質的な変更として挙げている。請求書の通数は事務的な小さい追加で、実質的な変更に当たらない。' },
        { q: '申込み「ボールペン5,000本、1本$1、7月出荷」への返事は「承諾します。請求書は2通送ってください」。申込者は何も言わずに出荷の準備を始めた。CISG では？', choices: ['返事は反対申込みなので、契約は成立していない', '契約は成立するが、請求書についての追加は無視される', '契約は成立し、内容は申込みに「請求書2通」を加えたもの', '申込者が書面で同意するまで、契約は成立しない'], answer: 2, explain: '実質的でない変更を含む返事は、申込者が遅滞なく異議を述べない限り承諾になる。契約の内容は、申込みに返事の変更を加えたもの（Art 19(2)）。追加が無視されるわけではない。' },
        { q: "B sent S a purchase order on B's standard terms. S replied with an acknowledgement on S's own standard terms, which limited S's liability. B said nothing, but took delivery of the goods and paid for them. Applying Article 19 of the CISG, on whose terms was the contract most likely concluded?", choices: ["S's terms, because S's acknowledgement was a counter-offer which B accepted by conduct", "B's terms, because B made the first offer", 'No contract, because the terms of the two forms never matched', "B's terms, because a limitation of liability is not a material alteration"], answer: 0, explain: '責任の制限は実質的な変更なので、S の注文請書は反対申込み。B が黙って受け取り支払ったことは、行為による承諾（Art 18(1)）。最後に書式を出した S の条件で成立する（last shot）。物品が受け渡されているので、契約がないとは考えにくい。' },
        { q: '売主の申込み「$50/kg、承諾の期限6月30日」に、買主は「$45なら買う」と返し、届いた。売主は断った。買主は6月20日に「では$50で承諾します」と送り、届いた。契約は？', choices: ['成立する。期限内に元の条件で承諾したから', '成立する。期限付きの申込みは撤回できず、ずっと有効だから', '成立しない。一度でも反対申込みをした相手とは、契約できないから', '自動的には成立しない。元の申込みは拒絶で消えており、6月20日の返事は新しい申込みになる'], answer: 3, explain: '「$45なら」は代金の変更なので、拒絶＋反対申込み。拒絶が届いた時に元の申込みは消える（Art 17）。6月20日の返事は新しい申込みで、売主が承諾すれば改めて契約が成立する。「反対申込みをした相手とは契約できない」という禁止はない。' },
        { q: '実質的でない変更を含む返事が届いた。申込者はこの内容では契約したくない。どうすればよい？', choices: ['何もしない。変更つきの返事は承諾にならないから', '遅滞なく口頭で異議を述べるか、その旨の通知を発する', '30日以内に書面で契約を解除する', '裁判所に契約の無効を申し立てる'], answer: 1, explain: '実質的でない変更の場合、何もしないと承諾として契約が成立してしまう。止めるには、遅滞なく口頭で異議を述べるか、通知を発する（Art 19(2)）。通知は発すればよく、到達は条件になっていない。' }
      ]
    }
  ],
  cards: [
    { id: 'B015-1', lesson: 'B015', q: 'CISG で申込み（offer）になる3つの条件は？', a: '特定の相手に向ける、物品・数量・代金が確定、拘束される意思を示す（Art 14(1)）' },
    { id: 'B015-2', lesson: 'B015', q: 'カタログ・ウェブの価格表・広告は申込み？', a: '原則は申込みの誘引。申込みの意思がはっきり示されていれば申込み（Art 14(2)）' },
    { id: 'B015-3', lesson: 'B015', q: '申込みの効力が生じるのはいつ？', a: '相手に到達した時（Art 15(1)）' },
    { id: 'B015-4', lesson: 'B015', q: 'withdrawal と revocation の違いは？', a: '到達前に止める＝取りやめ（Art 15(2)）。到達後、承諾の発信前に止める＝撤回（Art 16(1)）' },
    { id: 'B015-5', lesson: 'B015', q: '撤回できない申込みになる2つの場合は？', a: '期限や取消不能を示した／撤回されないと信じるのがもっともで、相手がそれに頼って行動した（Art 16(2)）' },
    { id: 'B015-6', lesson: 'B015', q: '撤回できない申込みでも消えるのは？', a: '拒絶が申込者に到達した時（Art 17）。到達前の取りやめもできる' },
    { id: 'B016-1', lesson: 'B016', q: '沈黙は承諾になる？', a: 'それだけでは承諾にならない（Art 18(1)）。当事者間の慣行があれば別' },
    { id: 'B016-2', lesson: 'B016', q: '承諾の効力が生じ、契約が成立するのはいつ？', a: '同意の表示が申込者に到達した時（Art 18(2)・23）' },
    { id: 'B016-3', lesson: 'B016', q: 'CISG の「到達」とは？', a: '口頭で伝えた時、または本人・営業所・郵便の宛先（なければ常居所）に届けた時（Art 24）。読んだかは問わない' },
    { id: 'B016-4', lesson: 'B016', q: '行為による承諾はいつ効力が生じる？', a: '申込み・慣行・慣習で認められていれば、期限内に行為をした時（Art 18(3)）' },
    { id: 'B016-5', lesson: 'B016', q: '遅れた承諾の2つのルールは？', a: '遅く出した→申込者が認めれば有効。配達の遅れ→申込者が断らなければ有効（Art 21）' },
    { id: 'B016-6', lesson: 'B016', q: '撤回の締切と、承諾の取りやめの締切は？', a: '撤回は承諾の発信まで（Art 16(1)）。承諾の取りやめは承諾の到達まで（Art 22）' },
    { id: 'B017-1', lesson: 'B017', q: '変更を加えた承諾の原則は？', a: '申込みの拒絶であり、反対申込みになる（Art 19(1)）' },
    { id: 'B017-2', lesson: 'B017', q: '実質的でない変更を含む返事はどうなる？', a: '申込者が遅滞なく異議を述べなければ承諾。内容は申込み＋変更（Art 19(2)）' },
    { id: 'B017-3', lesson: 'B017', q: 'Art 19(3) が挙げる実質的な変更の対象は？', a: '代金・支払・品質・数量・引渡しの場所と時期・責任の範囲・紛争解決' },
    { id: 'B017-4', lesson: 'B017', q: '反対申込みの後で、元の申込みに承諾できる？', a: 'できない。元の申込みは拒絶の到達で消えている（Art 17）' },
    { id: 'B017-5', lesson: 'B017', q: '書式の戦いに Art 19 を当てはめると？', a: '後の書式が反対申込み、受領や支払が行為による承諾。最後の書式の条件で成立（last shot）' },
    { id: 'B017-6', lesson: 'B017', q: '日本の民法528条と CISG の違いは？', a: '民法は変更があればすべて新たな申込み。CISG は実質的でない変更なら承諾になる' }
  ]
});
