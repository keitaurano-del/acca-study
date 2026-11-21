(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 214,
  part: 5,
  partTitle: '会社の法人格・設立・定款',
  lessons: [
    {
      id: 'B056',
      no: 56,
      title: '会社の登記の手続き',
      goal: '会社を登記するときに出す書類、設立証明書の効果、公開会社だけに必要な営業開始証明書、既製会社を買う方法を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D3(a)'],
      slides: [
        {
          title: '会社にも「出生届」がある',
          paras: ['赤ちゃんは出生届を出すと戸籍に載り、法律上の「人」として扱われる。会社も同じで、決められた書類を登記所に出して登記（registration）されると、法人（body corporate）として生まれる。', 'イングランドのモデル（Companies Act 2006、以下 CA 2006）では、書類を出す先は会社登記官（Registrar of Companies）。役所の名前は Companies House。']
        },
        {
          title: '登記官に出す書類',
          table: { caption: '登記で出す主な書類', head: ['書類', '中身'], rows: [['登記の申請書（application for registration, s9）', '会社名、登記上の住所（registered office）の地域、有限責任か（株式か保証か）、非公開会社（private）か公開会社（public）か'], ['登記上の住所と登記用メールアドレスの明細（s9）', '実際の住所（どこの地域かだけでは足りない）と、登記所からの連絡用メール'], ['基本定款（memorandum of association, s8）', '発起の署名者（subscribers）が会社をつくり、株主になり、1株以上引き受けることに同意する'], ['定款（articles of association）', '会社の内部のルール。出さなければモデル定款が使われる（s20）'], ['資本と最初の株主の明細（statement of capital and initial shareholdings, s10）', '株式の数・種類・金額と、誰が何株持つか。保証有限会社なら保証の明細（s11）'], ['役員の明細（statement of proposed officers, s12）', '最初の取締役（と秘書役）と、就任の同意'], ['重要な支配者の明細（statement of initial significant control, s12A）', '会社を実際に支配する人（PSC）'], ['適合の声明（statement of compliance, s13）', '登記の要件を満たし、会社を適法な目的（lawful purpose）でつくると述べる']] }
        },
        {
          title: '2024年以降に加わったこと',
          list: ['登記上の住所は、郵便が届き人に渡せる「適切な住所」でなければならない。私書箱（PO Box）は不可（2024年3月から）', '登記用のメールアドレス（registered email address）も届け出る。公開はされない', '取締役と PSC は本人確認（identity verification）が必要。2025年11月18日から、取締役が本人確認を済ませていないと会社を設立できない'],
          note: { kind: 'tip', text: 'これらは Economic Crime and Corporate Transparency Act 2023（ECCTA）による改正。目的は、架空の会社や不正な目的の会社を減らすこと。' }
        },
        {
          title: '登記から会社が生まれるまで',
          svg: `<svg viewBox="0 0 440 344" role="img" aria-label="書類を出し、登記され、設立証明書が出て会社が生まれる。公開会社は営業開始証明書も必要" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">会社が生まれるまで（CA 2006）</text><rect x="20" y="50" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="77" fill="var(--ink)">1 書類を登記官に出す（s9〜13）</text><line x1="220" y1="92" x2="220" y2="108" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="108" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="135" fill="var(--ink)">2 登記官が確かめて登記する（s14）</text><line x1="220" y1="150" x2="220" y2="166" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="166" width="400" height="42" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="193" font-weight="600" fill="var(--ink)">3 設立証明書が出る＝会社が生まれる</text><text x="220" y="234" text-anchor="middle" font-size="14" fill="var(--quiet)">private はここから営業できる</text><line x1="220" y1="242" x2="220" y2="258" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="258" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="285" fill="var(--ink)">4 public は営業開始証明書も必要（s761）</text><text x="220" y="330" text-anchor="middle" font-size="14" fill="var(--quiet)">£50,000 以上を割り当て、各株の1/4以上を払込み</text></svg>`,
          caption: '設立証明書が出た日（date of incorporation）から会社は存在する。公開会社は、さらに営業開始証明書をもらうまで営業も借入れもできない。'
        },
        {
          title: '設立証明書（certificate of incorporation）',
          list: ['記載: 会社名、登記番号、設立日、有限か無限か、private か public か、登記上の住所の地域（s15）', '設立証明書は、登記の要件が守られ、会社が正しく登記されたことの決定的な証拠（conclusive evidence, s15(4)）', '効果（s16）: 設立日から会社は法人になる。署名者は株主（members）になり、明細に書いた人は取締役・秘書役になる'],
          note: { kind: 'tip', text: '「決定的な証拠」なので、後から「書類に不備があったから会社は存在しない」とは争えない。取引の相手が安心できる。' }
        },
        {
          title: '公開会社の営業開始証明書（trading certificate）',
          paras: ['公開会社として設立された会社は、登記官から営業開始証明書をもらうまで、営業（do business）も借入れもしてはいけない（s761）。条件は次の2つ。'],
          list: ['割り当てた株式の額面の合計が、最低資本金（authorised minimum）£50,000 以上（s763）', '各株式について、額面の1/4以上と、プレミアム（額面を超える部分）の全額が払い込まれている（s586）'],
          after: 'もらわずに営業すると、会社と責任ある役員に罰金（s767）。取引そのものは有効。ただし会社が求められてから21日以内に義務を果たさないと、取締役が連帯して相手の損害を補償する。1年以内にもらえないと、裁判所が会社の清算を命じうる。'
        },
        {
          title: '例題: 最低いくら払い込めばよいか',
          example: {
            problem: '公開会社として設立する Fuji plc は、額面 £1 の株式 60,000株を、1株 £1.20 で割り当てる。営業開始証明書をもらうには、最低いくら払い込まれている必要がある？',
            steps: ['額面の合計: 60,000株 × £1 ＝ £60,000。£50,000 以上なので最低資本金の条件は満たす', '額面の1/4: £60,000 × 1/4 ＝ £15,000', 'プレミアム（1株 £0.20）は全額: 60,000株 × £0.20 ＝ £12,000', '合計: £15,000 ＋ £12,000 ＝ £27,000'],
            answer: '最低 £27,000 の払込みが必要'
          }
        },
        {
          title: '非公開会社と公開会社の登記の違い',
          table: { caption: '登記のときに違う点', head: ['項目', '非公開（private）', '公開（public）'], rows: [['取締役の人数（s154）', '1人以上', '2人以上'], ['秘書役（secretary）', 'いなくてよい（s270）', '必要。資格の条件あり（s271・s273）'], ['最低資本金', 'なし', '額面 £50,000 以上（s763）'], ['営業開始証明書', '不要', '必要（s761）'], ['名前の末尾（s58・s59）', 'limited / Ltd', 'public limited company / plc']] },
          after: 'どちらも株主は1人からつくれる（s7）。取締役のうち少なくとも1人は、会社ではなく人（natural person）でなければならない（s155）。'
        },
        {
          title: '既製会社（off-the-shelf company）を買う',
          paras: ['会社設立代行業者（formation agent）が、すでに登記した会社をたくさん持っている。それを買えば、すぐに会社を使える。'],
          table: { caption: '既製会社の長所と短所', head: ['長所', '短所'], rows: [['すぐに営業を始められる', '会社名・定款・取締役を自分用に変える手間がある'], ['登記の手続きを自分でしなくてよい', '名前の変更は特別決議などが必要。変更は登記所に届け出る'], ['設立前に会社の名前で契約し、発起人が個人で責任を負う心配が少ない', '定款の目的や条項が事業に合わないことがある']] }
        },
        {
          title: 'なぜ？ 登記をこんなに細かく求める理由',
          paras: ['会社の株主は、原則として出資した額までしか責任を負わない（有限責任）。取引の相手から見ると、会社が倒れても株主個人には請求できない。', 'その代わりに、誰が会社をつくり、誰が動かし、誰が支配し、資本はいくらかを、登記で誰でも見られるようにする。公開会社は一般の人から広くお金を集めるので、最低資本金と営業開始証明書で、さらに守りを固めている。']
        },
        {
          title: 'よくある間違いと、覚えるのは3つだけ',
          note: { kind: 'warn', text: '「どの会社も営業開始証明書が必要」は誤り。必要なのは公開会社として設立された会社だけ。また、証明書なしの取引は無効ではない。有効で、罰則と取締役の補償責任で抑える。' },
          numbered: ['申請書に、基本定款・定款（なければモデル定款）・資本・役員・PSC・適合の声明を付けて登記官に出す', '設立証明書の日から会社が存在する。証明書は正しく登記されたことの決定的な証拠', '公開会社は営業開始証明書（額面 £50,000 以上を割り当て、1/4とプレミアム全額を払込み）まで営業できない']
        },
        {
          title: '英単語',
          words: [
            ['Registrar of Companies', 'レジストラー', '会社登記官'],
            ['application for registration', 'アプリケイション', '登記の申請書'],
            ['memorandum of association', 'メモランダム', '基本定款'],
            ['statement of compliance', 'コンプライアンス', '適合の声明'],
            ['certificate of incorporation', 'インコーポレイション', '設立証明書'],
            ['trading certificate', 'トレーディング', '営業開始証明書'],
            ['authorised minimum', 'オーソライズド ミニマム', '公開会社の最低資本金'],
            ['off-the-shelf company', 'オフ ザ シェルフ', '既製会社']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT required to be delivered to the Registrar of Companies on an application to register a private company limited by shares?', choices: ['A statement of capital and initial shareholdings', 'A statement of the company\'s proposed officers', 'A trading certificate', 'A statement of compliance'], answer: 2, explain: '営業開始証明書は、公開会社が登記の後に登記官から「もらう」もの。非公開会社には不要で、申請のときに出す書類でもない。ほかの3つは申請に付ける書類（s10・s12・s13）。' },
        { q: 'From what date does a newly registered company exist as a body corporate?', choices: ['The date on which the application for registration is sent to the Registrar', 'The date of incorporation stated in the certificate of incorporation', 'The date on which the first directors\' meeting is held', 'The date on which a trading certificate is issued'], answer: 1, explain: 's16。設立証明書の設立日から法人になる。申請書を送った日ではない。営業開始証明書は公開会社が営業を始める条件で、法人になる日とは別。' },
        { q: 'A company registered as a public company enters into a contract before it has obtained a trading certificate. Which of the following statements is correct?', choices: ['The contract is void and cannot be enforced by either party', 'The contract is voidable at the option of the company only', 'The contract binds the directors personally instead of the company', 'The contract is valid, but the directors may be jointly and severally liable to indemnify the other party if the company fails to comply with its obligations within 21 days of being called on to do so'], answer: 3, explain: 's767。取引は有効。会社と役員に罰金があり、会社が求められてから21日以内に義務を果たさなければ、取締役が連帯して補償する。無効や取消しにはならない。' },
        { q: '公開会社として設立する会社が、額面 £1 の株式 80,000株を、1株 £1.50 で割り当てる。営業開始証明書をもらうために、最低いくら（£）払い込まれている必要がある？', type: 'number', answer: 60000, unit: '£', explain: '額面の合計 £80,000（£50,000 以上なので OK）。額面の1/4 ＝ £20,000。プレミアム £0.50 × 80,000株 ＝ £40,000 は全額。合計 £20,000 ＋ £40,000 ＝ £60,000。' },
        { q: 'Which of the following is required on the registration of a public company but NOT on the registration of a private company limited by shares?', choices: ['At least two directors and a company secretary', 'A statement of compliance', 'A statement of proposed officers', 'At least one member'], answer: 0, explain: '公開会社は取締役2人以上（s154）と秘書役（s271）が必要。非公開会社は取締役1人でよく、秘書役はいなくてもよい（s270）。適合の声明と役員の明細はどちらの会社も出す。株主はどちらも1人からでよい（s7）。' },
        { q: '既製会社（off-the-shelf company）を買う一番の利点はどれ？', choices: ['会社名と定款は変えられず、そのまま使う必要がある', 'すでに登記されているので、すぐに営業を始められる', '公開会社でも営業開始証明書がいらない', '最低資本金を払い込まなくてよい'], answer: 1, explain: '既製会社は登記済みなので早い。ただし名前や定款、取締役を自分用に変える必要がよくある。公開会社の条件（営業開始証明書・最低資本金）は、既製会社でも変わらない。' }
      ]
    },
    {
      id: 'B057',
      no: 57,
      title: '会社が備える帳簿・記録・届出',
      goal: '会社が自分で備える名簿と記録、会計記録の保存のルール、登記所への定期的な届出と期限、それぞれを誰が見られるかを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D3(b)'],
      slides: [
        {
          title: 'マンションの管理組合を思い出す',
          paras: ['管理組合は住人の名簿を持ち、総会の議事録を残し、お金の出入りを帳簿につける。会社も、法律で決められた名簿や記録（statutory books and records）を備え、届出（returns）を登記所に出す。'],
          table: { caption: '会社の記録と届出', head: ['かたまり', '主なもの'], rows: [['会社が自分で備える名簿・記録', '株主名簿、議事録、担保の書類の写し、取締役の勤務契約'], ['会計記録（accounting records）', '取引を示し、財政状態が分かる記録'], ['登記所への届出（returns）', '確認書、年次の財務諸表、変更の届出']] }
        },
        {
          title: '株主名簿（register of members, s113）',
          list: ['中身: 株主の名前と住所、株主になった日・やめた日。株式会社なら持株の数と種類、払込済みの額', '置き場所: 登記上の住所か、届け出た別の1か所（SAIL）', '株主は無料で、ほかの人は手数料を払って見られる（s116）', '見たい人は目的を書いて請求する。会社は5営業日以内に応じるか、裁判所に申し立てる。正当な目的でなければ裁判所は閲覧を止められる（s117）']
        },
        {
          title: '2025年11月の改正で変わったこと',
          paras: ['以前は、取締役名簿・取締役の住所の名簿・秘書役名簿・重要な支配者（PSC）の名簿も、会社が自分で持つ義務があった。ECCTA による改正で、この4つを会社が持つ義務は2025年11月18日になくなった。'],
          list: ['情報は登記所（Companies House）に届け出て、そこで公開される。取締役や PSC の変更は14日以内に届け出る', '株主名簿は今も会社が自分で持つ。登記所の名簿で代わりにする選択肢はなくなった'],
          note: { kind: 'tip', text: 'PSC（person with significant control）は、25%を超える株式か議決権を持つ人、取締役の過半数を選任・解任できる人など、会社を実際に支配する人。' }
        },
        {
          title: '会社が備えるほかの記録',
          list: ['議事録と決議の記録: 株主総会（s355）と取締役会（s248）。どちらも10年保存', '担保（charge）の書類の写し（s859P）。担保は、つくってから21日以内に登記所に登録する（s859A）', '取締役の勤務契約（service contracts）の写し（s228）。株主は見られる', '取締役の補償に関する定め（s237）']
        },
        {
          title: '会計記録（accounting records, s386）',
          list: ['目的: 取引を示して説明でき、いつでも財政状態がかなり正確に分かり、取締役が法に合った財務諸表を作れること', '中身: 毎日の入出金、資産と負債。物品を売る会社は期末の棚卸の記録も', '置き場所: 登記上の住所か、取締役が適当と考える場所。役員（officers）はいつでも見られる（s388(1)）', '保存: 非公開会社は3年、公開会社は6年（s388(4)）'],
          note: { kind: 'warn', text: '株主には会計記録を見る法律上の権利がない。モデル定款（art 50）も、法律・取締役・普通決議が認めない限り見られないとしている。' }
        },
        {
          title: '登記所への届出（returns）',
          table: { caption: '主な届出と期限', head: ['届出', '期限'], rows: [['確認書（confirmation statement, s853A）', '少なくとも12か月に1回。確認期間の終わりから14日以内'], ['年次の財務諸表と報告書（s441・s442）', '会計期間の末日から、非公開会社は9か月、公開会社は6か月以内'], ['取締役・秘書役の変更（s167・s276）', '14日以内'], ['特別決議の写し（s30）', '15日以内'], ['担保の登録（s859A）', 'つくってから21日以内'], ['株式の割当ての届出（s555）', '1か月以内']] }
        },
        {
          title: '確認書（confirmation statement）',
          paras: ['確認書は、登記所にある会社の情報（取締役、登記上の住所、資本、株主、PSC など）が正しいことを確かめる届出。2016年に年次報告（annual return）に代わった。'],
          list: ['変わったことがあれば、同時に届け出る', '今後の事業が適法であることの声明（lawful purpose）も含める（2024年から）', '出さないと会社と役員の犯罪になり、登記から抹消（strike off）されることもある']
        },
        {
          title: '例題: 財務諸表をいつまでに出すか',
          example: {
            problem: '会計期間の末日が 2027年3月31日の会社がある。最初の会計期間ではない。(1) 非公開会社なら、(2) 公開会社なら、財務諸表を登記所に出す期限はいつ？',
            steps: ['非公開会社は末日から9か月: 3月31日 → 12月31日', '公開会社は末日から6か月: 3月31日 → 9月30日', '公開会社の方が短い。一般の投資家が早く情報を必要とするから'],
            answer: '(1) 2027年12月31日、(2) 2027年9月30日'
          }
        },
        {
          title: '誰が何を見られるか',
          table: { caption: '閲覧できる人', head: ['記録', '見られる人'], rows: [['株主名簿', '株主は無料。ほかの人も手数料と目的の記載で'], ['株主総会の議事録・決議', '株主（無料）'], ['取締役会の議事録', '取締役。株主に法律上の権利はない'], ['会計記録', '役員。株主には法律上の権利はない'], ['登記所の公開情報', '誰でも（オンライン）']] }
        },
        {
          title: 'なぜ？ 記録と届出が必要な理由',
          paras: ['有限責任の会社では、取引の相手は株主個人に請求できない。だから相手は、会社が誰のもので、誰が動かし、どれだけ財産と借入れがあるかを知る必要がある。', '名簿と届出は、有限責任を使わせてもらう代わりの「透明さ」。会計記録の保存は、税務や後の調査で取引をさかのぼれるようにするため。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株主名簿は会社が持つ（株主は無料、ほかの人は手数料と目的で閲覧）。取締役名簿や PSC 名簿は2025年11月から登記所への届出だけ', '会計記録は役員が見られる。保存は非公開会社3年、公開会社6年。議事録は10年', '確認書は12か月ごと（14日以内）、財務諸表は非公開9か月・公開6か月以内に出す'],
          words: [
            ['statutory books', 'スタチュトリー', '法律で備える名簿・記録'],
            ['register of members', 'レジスター', '株主名簿'],
            ['person with significant control (PSC)', 'シグニフィカント', '重要な支配を持つ者'],
            ['accounting records', 'アカウンティング', '会計記録'],
            ['confirmation statement', 'コンファメイション', '確認書'],
            ['minutes', 'ミニッツ', '議事録'],
            ['charge', 'チャージ', '担保']
          ]
        }
      ],
      quiz: [
        { q: 'Following the changes made by the Economic Crime and Corporate Transparency Act 2023, which of the following registers must a company still keep itself, at its registered office or a single alternative inspection location?', choices: ['The register of directors', 'The register of people with significant control', 'The register of secretaries', 'The register of members'], answer: 3, explain: '2025年11月18日から、取締役・取締役の住所・秘書役・PSC の名簿を会社が持つ義務はなくなり、登記所への届出に一本化された。株主名簿は今も会社が持つ。' },
        { q: 'A person who is not a member asks to inspect a company\'s register of members. Which of the following is correct?', choices: ['Only members may inspect the register of members', 'Anyone may inspect it free of charge and need not give any reason', 'The person may inspect it on payment of a fee, but must state the purpose for which the information will be used', 'The person needs the approval of an ordinary resolution of the members'], answer: 2, explain: 's116。株主以外も手数料で見られるが、請求には目的を書く。会社は正当な目的でないと考えれば裁判所に申し立て、裁判所は閲覧を止められる（s117）。' },
        { q: 'How often must a company deliver a confirmation statement to the Registrar of Companies?', choices: ['Only when there is a change in its directors', 'At least once in every 12 months, within 14 days after the end of each review period', 'Every six months, together with its accounts', 'Every three years'], answer: 1, explain: 's853A。変更がなくても、少なくとも12か月ごとに、確認期間の終わりから14日以内に出す。取締役の変更は別に14日以内に届け出る。' },
        { q: '非公開会社（最初の会計期間ではない）が年次の財務諸表を登記所に出す期限は、会計期間の末日から何か月以内？', type: 'number', answer: 9, unit: 'か月', explain: 's442。非公開会社は9か月、公開会社は6か月。' },
        { q: '公開会社は会計記録を何年保存する？ また、株主はそれを見る法律上の権利がある？', choices: ['3年。株主はいつでも見られる', '10年。株主は手数料を払えば見られる', '6年。株主に法律上の閲覧権はない', '6年。株主は無料で見られる'], answer: 2, explain: 's388(4)：非公開会社3年、公開会社6年。閲覧できるのは役員（s388(1)）。10年は議事録の保存期間。' },
        { q: '会社が銀行のために自社の工場に担保（charge）をつくった。登記所への登録の期限は？', choices: ['つくった日の翌日から21日以内', '14日以内', '次の確認書のとき', '登録は任意で、期限はない'], answer: 0, explain: 's859A。21日以内に登録する。14日は取締役の変更や確認書の期限なので混同しないこと。担保の書類の写しは会社も備える（s859P）。' }
      ]
    },
    {
      id: 'B058',
      no: 58,
      title: '会社の憲章：定款の法的な効力',
      goal: '会社の憲章に何が含まれるか、目的条項の効果、定款が会社と株主・株主どうしの契約になること（s33）と、その限界を判例で説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D3(c)'],
      slides: [
        {
          title: 'マンションの管理規約と同じ',
          paras: ['マンションの管理規約は、住人全員と管理組合が守るルール。住人どうしでも「規約を守って」と言える。新しく入った住人も、自動的に縛られる。', 'でも、規約に「清掃は A 社に頼む」と書いてあっても、A 社が規約を根拠に仕事を要求することはできない。A 社は住人ではないから。会社の定款の効力も、ほぼこの形になっている。']
        },
        {
          title: '会社の憲章（constitution）とは（s17）',
          list: ['定款（articles of association）', '憲章に影響する決議や合意（s29）。特別決議など'],
          after: '基本定款（memorandum）は、CA 2006 では署名者の同意を記録するだけの書類で、憲章の一部ではない。2009年10月より前の会社の基本定款に書かれていた条項（目的など）は、定款の条項として扱われる（s28）。',
          note: { kind: 'tip', text: '会社は定款を必ず持つ（s18）。自社の定款を出さなかった部分には、モデル定款が使われる（s20）。中身は次のレッスン。' }
        },
        {
          title: '目的条項（objects）と会社の能力',
          list: ['定款が目的を特に制限しなければ、会社の目的は無制限（s31）', '制限していても、会社の行為の効力は、憲章を理由に「能力がない」とは争えない（s39）', '善意で取引する相手に対しては、取締役の権限は憲章による制限がないものとみなされる（s40）'],
          after: 'それでも目的の制限には意味がある。株主は事前なら差止め（injunction）を求められる。制限を破った取締役は、権限内で行動する義務（s171）に違反し、会社に責任を負う。'
        },
        {
          title: '定款は契約になる（s33）',
          formula: '憲章は、会社と各株主が守ると約束したかのように、会社と株主を縛る（s33(1)）',
          paras: ['つまり定款は、①会社と株主の間、②株主どうしの間の契約として働く。株式を買って新しく株主になった人も、自動的に縛られる。']
        },
        {
          title: '図で見る: 定款が届く範囲',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="定款は会社と株主、株主どうしを縛るが、外部の人には及ばない" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">定款は誰と誰の契約か（s33）</text><rect x="160" y="52" width="120" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="77" text-anchor="middle" fill="var(--ink)">会社</text><rect x="30" y="170" width="120" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="195" text-anchor="middle" fill="var(--ink)">株主A</text><rect x="290" y="170" width="120" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="195" text-anchor="middle" fill="var(--ink)">株主B</text><line x1="195" y1="92" x2="110" y2="170" stroke="var(--ink)" stroke-width="1.5"/><line x1="245" y1="92" x2="330" y2="170" stroke="var(--ink)" stroke-width="1.5"/><line x1="150" y1="190" x2="290" y2="190" stroke="var(--accent)" stroke-width="3"/><text x="88" y="132" text-anchor="middle" font-size="14" fill="var(--ink)">会社と株主</text><text x="352" y="132" text-anchor="middle" font-size="14" fill="var(--ink)">会社と株主</text><text x="220" y="240" text-anchor="middle" font-size="14" fill="var(--ink)">株主どうしも縛る（Rayfield v Hands）</text><text x="220" y="282" text-anchor="middle" font-size="14" fill="var(--quiet)">外部の人や、株主以外の立場には及ばない</text></svg>`,
          caption: '線の上の関係なら定款を根拠に請求できる。線の外（外部の人、取締役や弁護士としての立場）では請求できない。'
        },
        {
          title: '判例で確かめる',
          table: { caption: 's33 の契約の範囲', head: ['判例', '分かること'], rows: [['Hickman v Kent or Romney Marsh Sheepbreeders\' Association（1915）', '会社は株主に定款を守らせられる。紛争は仲裁でという定款に従い、株主の訴えは止められた'], ['Rayfield v Hands（1960）', '株主どうしも定款で縛られる。株主が売りたい株を取締役（株主でもある）が買う定款の義務を、株主が直接求められた'], ['Eley v Positive Government Security Life Assurance Co（1876）', '定款で「終身の弁護士」とされた人は、外部の人として定款を根拠に請求できない（のちに株主になっても同じ）'], ['Beattie v E & F Beattie Ltd（1938）', '取締役は、取締役の立場では定款の仲裁条項を使えない']] }
        },
        {
          title: 's33 の契約のふつうでない点',
          list: ['株主としての権利（議決権、決まった配当を受ける権利など）にだけ及ぶ。弁護士・取締役・従業員としての権利には及ばない', '会社は特別決議（75%）で定款を変えられる（s21）。反対した株主も、変わった定款に縛られる', '後から株主になった人も、署名しなくても自動的に縛られる'],
          after: '外部の人が定款の内容で権利を持つには、定款とは別の契約（たとえば勤務契約）が必要。その契約が定款を取り込むことはある。'
        },
        {
          title: '例題: 定款で約束された会計士',
          example: {
            problem: 'Hana Ltd の定款には「Ken を会社の会計士として10年間雇う」とある。Ken は株主でもある。3年後、会社は別の会計士に替えた。Ken は定款を根拠に会社を訴えられる？',
            steps: ['定款は s33 で会社と株主の契約になる', 'ただし及ぶのは株主としての権利だけ。会計士として雇われる権利は、株主としての権利ではない', 'Eley の事件と同じ形: 株主であっても、外部の立場の権利は定款では守られない', 'Ken が会社と別の契約（業務委託契約など）を結んでいれば、その契約で請求できる可能性がある'],
            answer: '定款を根拠には訴えられない。別の契約があればそちらで請求する'
          }
        },
        {
          title: 'なぜ？ 外部の人を定款で守らない理由',
          paras: ['定款は、会社の内部のルールで、株主の多数決（特別決議）でいつでも変えられる。そんなものを外部の人との約束に使うと、約束がいつ変わるか分からず、かえって不安定になる。', '外部の人との約束は、相手と交渉して結ぶふつうの契約で守るのが筋。だから定款の効力は、会社の仲間（株主）としての関係に限られる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「定款に名前が書いてあれば、その人は定款で守られる」は誤り（Eley）。株主であっても、株主以外の立場の権利は守られない（Beattie）。また、目的の外の取引も、相手が善意なら原則有効。日本の感覚で「目的外の行為は無効」と考えないこと（s39・s40）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['憲章＝定款＋憲章に影響する決議。定款が目的を制限しなければ目的は無制限で、目的の外でも取引の効力は争えない', '定款は会社と株主、株主どうしの契約（s33。Hickman、Rayfield v Hands）', '外部の人や株主以外の立場には及ばない（Eley、Beattie）。特別決議で変えられる'],
          words: [
            ['constitution', 'コンスティテューション', '会社の憲章'],
            ['articles of association', 'アーティクルズ', '定款'],
            ['objects', 'オブジェクツ', '会社の目的'],
            ['capacity', 'キャパシティ', '会社の能力'],
            ['outsider', 'アウトサイダー', '外部の人（株主としての立場でない人）'],
            ['in the capacity of a member', '', '株主としての立場で']
          ]
        }
      ],
      quiz: [
        { q: 'What is the effect of section 33 of the Companies Act 2006 regarding a company\'s constitution?', choices: ['It binds the company and any person named in the articles, whether or not that person is a member', 'It binds the company and its members as if there were covenants by the company and by each member to observe its provisions', 'It binds only the directors and the company', 'It binds the members only after each member has signed the articles'], answer: 1, explain: 's33(1)。会社と株主、株主どうしの契約になる。定款に名前があるだけの外部の人は縛られず、請求もできない（Eley）。後から株主になった人は署名しなくても縛られる。' },
        { q: 'The articles of X Ltd state that Y will be the company\'s solicitor. Y later becomes a member of X Ltd. X Ltd stops using Y as its solicitor. Can Y sue X Ltd for breach of the articles?', choices: ['Yes, because Y is now a member and the articles form a contract with the members', 'Yes, because Y is named in the articles', 'No, because the articles do not give enforceable rights to a person in a capacity other than as a member', 'No, because the articles bind the members only and never the company'], answer: 2, explain: 'Eley v Positive Government Security Life Assurance Co（1876）。株主になっても、弁護士としての権利は株主としての権利ではない。会社も定款に縛られるので4つ目は誤り。' },
        { q: 'Under the Companies Act 2006, what are the objects of a company whose articles do not specifically restrict them?', choices: ['Limited to the business described in the memorandum of association', 'Limited to the business carried on at the date of incorporation', 'Limited to activities approved by special resolution', 'Unrestricted'], answer: 3, explain: 's31(1)。定款が特に制限しなければ、会社の目的は無制限。CA 2006 の基本定款には目的を書かない。' },
        { q: '定款に「株を売りたい株主は、取締役に知らせ、取締役は時価で買い取る」とある。取締役（全員株主）が買取りを拒んだ。売りたい株主 P は、定款を根拠に取締役に買取りを求められる？', choices: ['求められる。定款は株主どうしも縛る（Rayfield v Hands）', '求められない。定款は会社と株主の間だけの契約', '求められない。取締役の義務は定款では決められない', '求められる。ただし会社が先に訴えた場合に限る'], answer: 0, explain: 'Rayfield v Hands（1960）。取締役は株主としての立場で定款に縛られ、株主どうしの契約として P は直接求められた。' },
        { q: '定款で目的を「家具の製造」に制限している会社の取締役が、何も知らない業者と不動産開発の契約を結んだ。この契約は？', choices: ['無効。会社の目的の外だから', '有効。会社の能力は憲章を理由に争えず、善意の相手には取締役の権限の制限も及ばない', '業者が目的を確かめなかったので取り消せる', '株主総会の特別決議で承認されるまで無効'], answer: 1, explain: 's39・s40。取引は有効。ただし株主は事前なら差止めを求められ、取締役は権限内で行動する義務（s171）に違反したとして会社に責任を負う。' },
        { q: 'Which of the following correctly describes the constitution of a company formed under the Companies Act 2006?', choices: ['The memorandum of association only', 'The memorandum of association and the certificate of incorporation', 'The articles of association and any resolutions and agreements affecting the constitution', 'The articles of association and the register of members'], answer: 2, explain: 's17。基本定款は CA 2006 では署名者の同意を記録するだけの書類で、憲章に入らない。設立証明書や株主名簿も憲章ではない。' }
      ]
    },
    {
      id: 'B059',
      no: 59,
      title: 'モデル定款の主な中身',
      goal: 'モデル定款がいつ使われるかと、取締役の権限と決め方、取締役の選任、株式と配当、株主総会の手続きについての主な定めを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D3(c)'],
      slides: [
        {
          title: 'スマホの初期設定と同じ',
          paras: ['新しいスマホは、何も変えなければ初期設定のまま動く。気に入らない所だけ変えればよい。', '会社の定款も同じ。国が用意したひな形（モデル定款、model articles）があり、自社の定款で変えなかった部分には、自動的にモデル定款が使われる（s20）。']
        },
        {
          title: 'モデル定款の種類と使い方',
          list: ['Companies (Model Articles) Regulations 2008 に3種類ある: 株式有限の非公開会社用、保証有限の非公開会社用、公開会社用', '2009年10月1日以降に設立した有限会社で、定款を出さない・一部しか定めない場合に、その分が適用される', '選び方は3つ: そのまま全部使う、一部を変えて使う、自社で全部書く'],
          after: '以下は、特に断りがなければ株式有限の非公開会社用（private companies limited by shares）の条文番号。'
        },
        {
          title: '取締役の権限（art 3〜5）',
          list: ['art 3: 取締役は会社の事業の経営に責任を持ち、会社のすべての権限を使える', 'art 4: 株主は特別決議で、取締役に特定のことをするよう、またはしないよう指示できる（株主の留保権限、reserve power）', 'art 5: 取締役は、委員会や個人に権限を任せられる'],
          note: { kind: 'tip', text: '株主は普通決議で経営に口を出せない。指示するには特別決議（75%）が要る。ただし、それまでに取締役がしたことは無効にならない。一方、取締役を辞めさせる（解任）だけなら、法律で普通決議でできる（s168、後のレッスン）。' }
        },
        {
          title: '取締役の決め方（art 7〜14）',
          list: ['決定は、会議での多数決か、全員一致の決定（art 7・8）。取締役が1人だけなら、その1人で決められる', '会議の定足数（quorum）は取締役が決めるが、2人未満にはできない。決めていなければ2人（art 11）', '賛否が同数なら、議長が決定票（casting vote）を持つ（art 13）', '自分に利害がある議題では、原則として定足数にも議決にも数えない（art 14）']
        },
        {
          title: '取締役の選任と報酬',
          table: { caption: '選任・報酬の定め', head: ['項目', 'モデル定款'], rows: [['選任（art 17）', '普通決議、または取締役の決定で選べる'], ['報酬（art 19）', '取締役が決める'], ['任期の終わり（art 18）', '法律で禁じられた、破産した、辞任を通知したときなど'], ['公開会社の輪番退任（公開会社用 art 21）', '最初の年次総会で全員退任。その後は、前回の総会後に取締役が選んだ人と、直前2回の総会で選ばれていない人が退任し、再任を求める']] }
        },
        {
          title: '株式と配当',
          list: ['株主の責任は、持株の未払込の額まで（art 2）', '非公開会社用: 株式は額面以上で全額払込みで発行する（art 21）。種類株式も発行できる（art 22）', '取締役は株式の譲渡の登録を拒める（art 26(5)）。拒むときは理由を伝える（CA 2006 s771）', '配当: 株主が普通決議で宣言する。取締役が額を勧告していることが必要で、勧告額を超えられない。中間配当は取締役が決める（art 30）'],
          after: '公開会社用は、一部払込みの株式も認め、追加払込みの請求（call）、留置権（lien）、失権（forfeiture）も定める。'
        },
        {
          title: '例題: 配当はいくらまで',
          example: {
            problem: 'Kaze Ltd（モデル定款）の発行済株式は 200,000株。取締役は期末配当を1株 10p と勧告した。株主総会で、株主は1株 15p にしたいと言う。総会で宣言できる配当の総額は最大いくら？',
            steps: ['配当は株主が普通決議で宣言する（art 30(1)）', 'ただし取締役の勧告額を超えられない（art 30(2)）。上限は1株 10p', '総額: 200,000株 × £0.10 ＝ £20,000', '株主は額を下げることはできるが、上げることはできない'],
            answer: '最大 £20,000（1株 10p）'
          }
        },
        {
          title: '株主総会の手続き',
          list: ['定足数: 法律で2人（株主が1人の会社は1人、s318）。定足数がなければ、議長を選ぶ以外の議事はできない（art 38）', '議長: 取締役会の議長か、ほかの取締役。いなければ株主が選ぶ（art 39）', '採決はまず挙手（show of hands）。投票（poll）は、議長、取締役、議決権のある2人以上、議決権の10%以上を持つ人が求められる（art 44）', '株主は代理人（proxy）に投票させられる（art 45）']
        },
        {
          title: 'なぜ？ モデル定款がある理由',
          paras: ['小さな会社の多くは、弁護士に定款を書いてもらう余裕がない。モデル定款があれば、何も書かなくても「誰が経営し、どう決め、配当をどう決めるか」の基本がそろう。', '中身は「経営は取締役、最後の歯止めは株主」という分担。取締役に日々の経営を任せつつ、株主には特別決議の指示、取締役の選任、配当の上限の承認などで歯止めを残している。']
        },
        {
          title: 'よくある間違いと、覚えるのは3つだけ',
          note: { kind: 'warn', text: '「配当は株主総会が自由に決める」は誤り。株主は取締役の勧告額を超えられない。「株主は普通決議で取締役に指示できる」も誤り。特別決議が必要。' },
          numbered: ['自社の定款で変えなかった部分には、会社の種類に合うモデル定款が使われる（s20）', '経営は取締役（art 3）。株主は特別決議で指示（art 4）。取締役は普通決議か取締役の決定で選ぶ（art 17）', '配当は普通決議で宣言、取締役の勧告額まで。中間配当は取締役。公開会社は輪番退任']
        },
        {
          title: '英単語',
          words: [
            ['model articles', 'モデル アーティクルズ', 'モデル定款'],
            ['reserve power', 'リザーヴ パワー', '株主の留保権限'],
            ['quorum', 'クォーラム', '定足数'],
            ['casting vote', 'キャスティング ヴォート', '可否同数のときの議長の決定票'],
            ['retirement by rotation', 'ローテイション', '輪番退任'],
            ['interim dividend', 'インテリム', '中間配当'],
            ['poll', 'ポール', '投票による採決'],
            ['proxy', 'プロキシー', '代理人']
          ]
        }
      ],
      quiz: [
        { q: 'Under the model articles for private companies limited by shares, how may a person be appointed as a director?', choices: ['By special resolution only', 'By a decision of the directors only', 'By ordinary resolution or by a decision of the directors', 'By the Registrar of Companies on the application of the members'], answer: 2, explain: 'art 17(1)。普通決議でも、取締役の決定でも選べる。特別決議は要らない。' },
        { q: 'The directors of a company which has adopted the model articles recommend a final dividend of 8p per share. At the general meeting the members wish to declare a dividend of 12p per share. Which of the following is correct?', choices: ['The members may declare a dividend of 12p per share by ordinary resolution', 'The members may declare a dividend of no more than 8p per share', 'The members may declare a dividend of 12p per share only by special resolution', 'The members have no power to declare dividends, which are decided only by the directors'], answer: 1, explain: 'art 30。株主は普通決議で宣言するが、取締役の勧告額を超えられない。特別決議でも超えられない。中間配当は取締役が決めるが、期末配当は株主が宣言する。' },
        { q: 'A company with the model articles has 500,000 shares in issue. The directors recommend a final dividend of 6p per share, and the members declare the maximum dividend they are permitted to declare. What is the total dividend (in GBP)?', type: 'number', answer: 30000, unit: '£', explain: '上限は勧告額の1株 6p。500,000株 × £0.06 ＝ £30,000。' },
        { q: 'Under the model articles, by what type of resolution may the shareholders direct the directors to take, or refrain from taking, specified action?', choices: ['Ordinary resolution', 'Written resolution signed by any one shareholder', 'Unanimous resolution of all shareholders', 'Special resolution'], answer: 3, explain: 'art 4 の留保権限。特別決議（75%）が必要。それまでに取締役がしたことは、この指示で無効にはならない。' },
        { q: 'モデル定款（非公開会社用）で、取締役会の定足数について正しいのはどれ？', choices: ['取締役が決められるが2人未満にはできず、決めていなければ2人', '取締役の過半数', '常に取締役全員', '1人いれば常に足りる'], answer: 0, explain: 'art 11(2)。取締役が1人だけの会社では、その1人で決められる（art 7(2)）が、それは定足数の話とは別の定め。' },
        { q: '公開会社用モデル定款の輪番退任で、年次総会で退任して再任を求める必要があるのは誰？', choices: ['全取締役の3分の1', '在任3年以上の取締役だけ', '前回の総会の後に取締役が選んだ人と、直前2回の総会で選任・再任されていない人', '非公開会社と同じく、誰も退任しない'], answer: 2, explain: '公開会社用 art 21。最初の年次総会では全員が退任する。「3分の1」は昔の定款（Table A）の仕組みで、今のモデル定款ではない。非公開会社用には輪番退任がない。' }
      ]
    }
  ],
  cards: [
    { id: 'B056-1', lesson: 'B056', q: '会社を登記するとき、申請書に付ける主な書類は？', a: '基本定款、定款（なければモデル定款）、資本の明細、役員の明細、PSC の明細、適合の声明' },
    { id: 'B056-2', lesson: 'B056', q: '会社はいつから法人として存在する？', a: '設立証明書に書かれた設立日から（s16）' },
    { id: 'B056-3', lesson: 'B056', q: '設立証明書の証拠としての効力は？', a: '正しく登記されたことの決定的な証拠（s15(4)）' },
    { id: 'B056-4', lesson: 'B056', q: '営業開始証明書をもらう条件は？', a: '額面 £50,000 以上を割り当て、各株の額面1/4以上とプレミアム全額を払込み' },
    { id: 'B056-5', lesson: 'B056', q: '公開会社が営業開始証明書なしで結んだ取引は？', a: '有効。罰金のほか、21日以内に義務を果たさないと取締役が連帯して補償' },
    { id: 'B056-6', lesson: 'B056', q: 'なぜ？ 登記で役員・資本・PSC を公開させる', a: '有限責任で株主に請求できない相手が、会社の実態を確かめられるようにするため' },
    { id: 'B056-7', lesson: 'B056', q: '公開会社の登記で必要な取締役と秘書役は？', a: '取締役2人以上と秘書役。非公開会社は取締役1人、秘書役は任意' },
    { id: 'B057-1', lesson: 'B057', q: '株主名簿は誰が見られる？', a: '株主は無料。ほかの人は手数料を払い、目的を書いて請求する' },
    { id: 'B057-2', lesson: 'B057', q: '2025年11月18日から会社が持たなくてよくなった名簿は？', a: '取締役・取締役の住所・秘書役・PSC の名簿。登記所への届出だけになった' },
    { id: 'B057-3', lesson: 'B057', q: '会計記録の保存期間は？', a: '非公開会社3年、公開会社6年' },
    { id: 'B057-4', lesson: 'B057', q: '確認書（confirmation statement）の頻度と期限は？', a: '少なくとも12か月ごと。確認期間の終わりから14日以内' },
    { id: 'B057-5', lesson: 'B057', q: '財務諸表を登記所に出す期限は？', a: '会計期間の末日から非公開会社9か月、公開会社6か月' },
    { id: 'B057-6', lesson: 'B057', q: '議事録の保存期間と、担保の登録期限は？', a: '議事録は10年。担保は21日以内に登録' },
    { id: 'B058-1', lesson: 'B058', q: '会社の憲章（constitution）に含まれるものは？', a: '定款と、憲章に影響する決議・合意（特別決議など）' },
    { id: 'B058-2', lesson: 'B058', q: '定款が目的を制限しないとき、会社の目的は？', a: '無制限（s31）' },
    { id: 'B058-3', lesson: 'B058', q: 's33 で定款は誰と誰の契約になる？', a: '会社と株主、株主どうし' },
    { id: 'B058-4', lesson: 'B058', q: 'Eley v Positive Government Security Life Assurance Co の要点は？', a: '定款で弁護士とされた外部の人は、定款を根拠に請求できない' },
    { id: 'B058-5', lesson: 'B058', q: 'Rayfield v Hands の要点は？', a: '定款は株主どうしも縛り、株主は他の株主に直接守らせられる' },
    { id: 'B058-6', lesson: 'B058', q: 'なぜ？ 定款で外部の人を守らない', a: '定款は特別決議でいつでも変わる内部ルール。外部との約束は別の契約で守るのが筋' },
    { id: 'B059-1', lesson: 'B059', q: 'モデル定款が使われるのはいつ？', a: '自社の定款を出さないか、定款で変えなかった部分（s20）' },
    { id: 'B059-2', lesson: 'B059', q: '株主が取締役に経営の指示をするには？', a: '特別決議（art 4 の留保権限）' },
    { id: 'B059-3', lesson: 'B059', q: '取締役の選任方法は（モデル定款）？', a: '普通決議、または取締役の決定（art 17）' },
    { id: 'B059-4', lesson: 'B059', q: '期末配当と中間配当は誰が決める？', a: '期末は株主が普通決議で（勧告額まで）。中間は取締役' },
    { id: 'B059-5', lesson: 'B059', q: '取締役会の定足数は（モデル定款）？', a: '取締役が決めるが2人未満は不可。決めていなければ2人' },
    { id: 'B059-6', lesson: 'B059', q: '投票（poll）を求められるのは？', a: '議長、取締役、議決権のある2人以上、議決権の10%以上を持つ人' }
  ]
});
