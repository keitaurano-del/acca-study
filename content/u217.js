(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 217,
  part: 6,
  partTitle: '会社の資本と資金調達',
  lessons: [
    {
      id: 'B067',
      no: 67,
      title: '株式の割当てと株主の先買権',
      goal: '取締役が新株を割り当てるのに必要な権限と、今の株主の先買権（s561）の中身・例外・外し方を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(c)'],
      slides: [
        {
          title: '友だちと始めたお店に、勝手に出資者が増えたら',
          paras: ['友だち4人でお金を出し合ってお店を始めた。1人1/4ずつの持ち分。ある日、代表の1人が勝手に新しい出資者を10人入れたら、自分の取り分も発言力も一気に小さくなる。', '会社でも同じことが起こる。新しい株式を出すと、今の株主の持株比率は薄まる（dilution）。だから法律は「誰が株式を出せるか」と「今の株主に先に買う機会を与えるか」の2つを決めている。']
        },
        {
          title: '割当て（allotment）とは',
          paras: ['割当て（allotment）は、会社が新しい株式を特定の人に与えると決めること。株主名簿に載ると、その人は株主（member）になる。K1 で学んだ「株式の発行（issue of shares）」の法律面がこれ。', '割当てを決めるのは取締役。ただし取締役は、法律が認めた権限がある場合だけ割り当てられる（Companies Act 2006 s549）。英国の会社法をモデルに学ぶ。', '割り当てたら、1か月以内に割当ての届出（return of allotments）を登記所に出す（s555）。']
        },
        {
          title: '取締役の割当権限：2つの道',
          table: { caption: '割当ての権限の根拠', head: ['会社', '権限の根拠'], rows: [['私会社で株式が1種類だけ', '定款が禁止していなければ、取締役が割り当てられる（s550）'], ['それ以外（公開会社、種類株式のある私会社）', '定款か普通決議（ordinary resolution）による授権が必要（s551）']] },
          after: 's551 の授権には、割り当てられる株式の上限と期限（5年以内）を書く。更新もできる。権限がないと知りながら割り当てた（または認めた）取締役は犯罪になるが、割当て自体は無効にならない（s549）。'
        },
        {
          title: '先買権（pre-emption rights）: s561',
          paras: ['会社が現金と引換えに普通株などの持分証券（equity securities）を割り当てるときは、まず今の普通株主に申し出る。持株比率に応じた数を、同じかそれ以上に有利な条件で。'],
          list: ['申し出を受けられる期間は14日以上（s562）', '株主が断るか、期間が過ぎたら、残りを外部の人に割り当てられる', '目的: 今の株主の持株比率（支配力と配当の取り分）を守る']
        },
        {
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="新株の割当ては取締役の権限と株主の先買権の2つの関門を通る" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">新株を割り当てるときの2つの関門</text><rect x="20" y="46" width="400" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="70" fill="var(--ink)">関門1: 取締役に割当ての権限があるか</text><text x="36" y="93" font-size="14" fill="var(--quiet)">s550（私会社で1種類）か s551（授権）</text><line x1="220" y1="104" x2="220" y2="124" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="124" width="400" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="148" fill="var(--ink)">関門2: 現金で普通株などを割り当てるか</text><text x="36" y="171" font-size="14" fill="var(--quiet)">先買権（s561）の対象になるか</text><line x1="115" y1="182" x2="115" y2="202" stroke="var(--edge)" stroke-width="1.5"/><line x1="325" y1="182" x2="325" y2="202" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="202" width="190" height="84" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="226" text-anchor="middle" font-weight="600" fill="var(--ink)">はい</text><text x="115" y="250" text-anchor="middle" font-size="14" fill="var(--ink)">今の株主に比率で先に</text><text x="115" y="272" text-anchor="middle" font-size="14" fill="var(--ink)">申し出る（14日以上）</text><rect x="230" y="202" width="190" height="84" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="226" text-anchor="middle" font-weight="600" fill="var(--ink)">いいえ</text><text x="325" y="250" text-anchor="middle" font-size="14" fill="var(--ink)">先買権は働かない</text><text x="325" y="272" text-anchor="middle" font-size="14" fill="var(--quiet)">ボーナス株・現物出資</text></svg>`,
          caption: '権限がない割当ても有効だが、取締役は罰せられる。先買権の違反も割当ては有効で、会社と役員が賠償する。'
        },
        {
          title: '先買権が働かない場合と、外す方法',
          list: ['働かない（例外）: ボーナス株（s564）、現金以外で払う割当て＝現物出資（s565）、従業員株式制度（s566）', '私会社は、定款で先買権を排除（exclude）できる（s567）', '定款か特別決議（special resolution）で、先買権を適用しない（disapply）こともできる（s569〜571）。公開会社が外すのはこの方法'],
          after: '違反して割り当てても割当ては有効。ただし会社と、知りながら認めた役員は、損をした株主に賠償する（s563、2年以内に請求）。'
        },
        {
          title: '例題: 何株を先に申し出るか',
          example: {
            problem: 'Hikari Ltd の発行済普通株は 200,000 株。株主の Aoki さんは 30,000 株を持つ。会社は現金で普通株 40,000 株を新しく発行する。先買権は排除も不適用もされていない。Aoki さんに先に申し出る株数は？',
            steps: ['Aoki さんの持株比率: 30,000 ÷ 200,000 ＝ 15%', '新株のうち 15% を申し出る: 40,000 × 15% ＝ 6,000 株', 'Aoki さんが全部買えば 36,000 ÷ 240,000 ＝ 15%。比率は変わらない', '断れば 30,000 ÷ 240,000 ＝ 12.5% に薄まる'],
            answer: '6,000 株（14日以上の期間を付けて申し出る）'
          }
        },
        {
          title: 'なぜ？ 先買権がある理由',
          paras: ['株主は、持株比率に応じて総会での発言力と配当の取り分を持つ。取締役が好きな相手に新株を出せたら、反対する株主の比率を薄めて会社を支配できてしまう。', '先買権は「新株を出すなら、まず今の株主に同じ割合で買う機会を」という公平のルール。一方で、急いで外部から資金を集めたい会社もあるので、特別決議で外す道も用意されている。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '先買権の対象は「現金で」払う「持分証券（普通株など）」の割当てだけ。現物出資やボーナス株には働かない。配当が決まった額までの優先株（非参加型）は普通株に当たらないので、その株主は先買権を持たない。先買権を外すのは普通決議ではなく、特別決議（または定款）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取締役が割り当てるには権限が必要。私会社で1種類なら s550、それ以外は定款か普通決議の授権（s551、5年以内）', '現金で普通株を出すときは、今の株主に持株比率で先に申し出る（s561、14日以上）', 'ボーナス株・現物出資には働かない。私会社は定款で排除でき、特別決議で外すこともできる']
        },
        {
          title: '英単語',
          words: [
            ['allotment', 'アロットメント', '割当て'],
            ['pre-emption rights', 'プリエンプション ライツ', '先買権（新株引受権）'],
            ['equity securities', 'エクイティ セキュリティーズ', '持分証券（普通株など）'],
            ['dilution', 'ダイリューション', '持株比率が薄まること'],
            ['disapply', 'ディサプライ', '（規定を）適用しない'],
            ['ordinary resolution / special resolution', '', '普通決議 / 特別決議']
          ]
        }
      ],
      quiz: [
        { q: 'Midori Ltd の発行済普通株は 500,000 株。株主 B は 40,000 株を持つ。会社は現金で普通株 125,000 株を発行する。先買権に従って B に先に申し出る株数は？', type: 'number', answer: 10000, unit: '株', explain: 'B の持株比率は 40,000 ÷ 500,000 ＝ 8%。新株のうち 125,000 × 8% ＝ 10,000 株を申し出る。全部買えば 50,000 ÷ 625,000 ＝ 8% のまま。' },
        { q: 'Under the Companies Act 2006, which of the following allotments is subject to the statutory pre-emption rights of existing shareholders?', choices: ['A bonus issue of ordinary shares', 'An issue of ordinary shares in exchange for a building transferred to the company', 'An issue of ordinary shares for cash', "An allotment of shares under an employees' share scheme"], answer: 2, explain: '先買権（s561）は現金で払う持分証券の割当てだけが対象。ボーナス株（s564）、建物などの現物出資（s565）、従業員株式制度（s566）は例外になる。' },
        { q: "The directors of Delta plc wish to allot new ordinary shares. The company's articles do not give them authority to allot shares. Which of the following is required?", choices: ['Authorisation by an ordinary resolution of the members', 'Authorisation by a special resolution of the members', 'No authorisation, as the directors of a public company may always allot shares', 'Approval of the court'], answer: 0, explain: '公開会社の取締役は、定款か普通決議の授権（s551）がないと割り当てられない。授権は普通決議でよく、特別決議はいらない。裁判所の許可も不要。' },
        { q: 'Which of the following correctly describes how a public company may allot equity securities for cash without first offering them to existing shareholders?', choices: ['By passing an ordinary resolution to disapply the pre-emption rights', 'By a decision of the board of directors alone', 'It is not possible for a public company to disapply pre-emption rights', 'By passing a special resolution to disapply the pre-emption rights'], answer: 3, explain: '先買権を外す（disapply）には、定款か特別決議が必要（s570・s571）。普通決議では足りない。取締役会だけでは決められない。定款での排除（exclude、s567）は私会社だけの方法。' },
        { q: '取締役が、割当ての権限を持たないまま新株を割り当てた。正しいものは？', choices: ['割当ては無効になり、株主は株式を失う', '割当ては有効だが、知りながら違反した取締役は犯罪になる', '割当ては有効で、取締役には何の責任もない', '株主総会が追認するまで割当ては保留になる'], answer: 1, explain: 's549：権限のない割当てでも割当て自体は有効。知りながら違反した、または認めた取締役が犯罪になる。「無効」と思いがちだが、株式を受け取った人を守るために有効とされる。' }
      ]
    },
    {
      id: 'B068',
      no: 68,
      title: 'ライツ・イシューとボーナス・イシュー',
      goal: 'ライツ・イシューとボーナス・イシューの違いを法律と数字の両方で説明し、発行後の株数・資本・準備金を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(c)'],
      slides: [
        {
          title: 'お金を払って増やすか、タダで分け直すか',
          paras: ['ピザを4切れに分けていたのを8切れに切り直しても、ピザの量は増えない。自分の取り分も同じ。これがボーナス・イシュー。', '一方、「追加でお金を出した人の分だけ、もう1枚ピザを焼く」なら、ピザ自体が増える。これがライツ・イシュー。どちらも今の株主に持株比率で配るが、会社にお金が入るかどうかが違う。']
        },
        {
          title: 'ライツ・イシュー（rights issue）',
          list: ['今の株主に、持株比率に応じて新株を買う権利を与える（例: 4株につき1株＝1 for 4）', '株主はお金を払って買う。会社には現金が入る', '価格はふつう市場価格より安くする。ただし額面より安くはできない（次のレッスン）', '買いたくない株主は、その権利（rights）を他人に売れることが多い'],
          after: '先買権（s561）を満たす典型的な方法がライツ・イシュー。日本語では株主割当増資。'
        },
        {
          title: 'ボーナス・イシュー（bonus issue）',
          list: ['今の株主に、持株比率に応じて新株を無償で配る。capitalisation issue、scrip issue とも言う', '会社に現金は入らない。準備金（reserves）を株式資本に振り替えて（資本組入れ）、新株を払込済みにする', '使える準備金: 株式払込剰余金（share premium）、資本償還準備金（capital redemption reserve）、利益剰余金など', 'モデル定款では、普通決議の授権を受けて取締役が行う'],
          after: '先買権は働かない（s564）。もともと全員に比率どおり配るから。日本語では無償増資。'
        },
        {
          title: '2つを比べる',
          table: { caption: 'ライツ・イシューとボーナス・イシュー', head: ['項目', 'ライツ・イシュー', 'ボーナス・イシュー'], rows: [['株主の支払い', 'あり（現金）', 'なし'], ['会社の現金', '増える', '変わらない'], ['資本の合計', '払い込んだ分だけ増える', '変わらない（中身の振替だけ）'], ['先買権（s561）', '働く（これで満たす）', '働かない（s564）'], ['持株比率', '全員が買えば変わらない', '変わらない']] }
        },
        {
          title: '例題①: ボーナス・イシュー',
          example: {
            problem: 'Kaze Ltd の資本の部: 株式資本（額面 $1）$400,000、株式払込剰余金 $50,000、利益剰余金 $300,000。4株につき1株のボーナス・イシューをする。株式払込剰余金を先に使う。発行後の資本の部は？',
            steps: ['新株数: 400,000 ÷ 4 ＝ 100,000 株。額面 $1 なので $100,000 を資本に組み入れる', 'まず株式払込剰余金 $50,000 を全部使う', '残り $100,000 − $50,000 ＝ $50,000 は利益剰余金から', '株式資本 $500,000、株式払込剰余金 $0、利益剰余金 $250,000', '合計は前も後も $750,000。中身が移っただけ'],
            answer: '株式資本 $500,000、株式払込剰余金 $0、利益剰余金 $250,000（合計 $750,000 のまま）'
          }
        },
        {
          title: 'ボーナス・イシューの仕訳（K1 の復習）',
          journal: [
            { side: 'Dr', account: 'Share premium（株式払込剰余金）', amount: '50,000' },
            { side: 'Dr', account: 'Retained earnings（利益剰余金）', amount: '50,000' },
            { side: 'Cr', account: 'Share capital（株式資本）', amount: '100,000' }
          ],
          after: 'お金が動かないので、Cash の行がない。資本の部の中で、準備金から株式資本へ振り替えるだけ。'
        },
        {
          title: '例題②: ライツ・イシュー',
          example: {
            problem: 'Kaze Ltd（ボーナス・イシュー後 500,000 株、額面 $1）が、5株につき1株のライツ・イシューを1株 $1.60 で行い、全株主が応じた。現金、株式資本、株式払込剰余金はいくら増える？',
            steps: ['新株数: 500,000 ÷ 5 ＝ 100,000 株', '現金: 100,000 × $1.60 ＝ $160,000', '株式資本（額面分）: 100,000 × $1 ＝ $100,000', '株式払込剰余金（額面を超える分）: 100,000 × $0.60 ＝ $60,000', '資本の合計: $750,000 ＋ $160,000 ＝ $910,000'],
            answer: '現金 ＋$160,000、株式資本 ＋$100,000、株式払込剰余金 ＋$60,000'
          }
        },
        {
          title: 'なぜ？ 2つの方法がある理由',
          paras: ['ライツ・イシューは、お金が必要なときに使う。今の株主に先に買う機会を与えるので、比率を守りながら資金を集められる。市場価格より安くするのは、株主が応じやすくし、確実に集めるため。', 'ボーナス・イシューはお金を集めない。株価が高くなりすぎた株を細かくして取引しやすくする、配当に回さない利益を資本として固める、といった目的で使う。現金が外に出ないので、債権者にとっても安全な取引になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'ボーナス・イシューで株主が得をするわけではない。株数が増えても会社の中身は同じなので、1株あたりの価値が下がる。また、ライツ・イシューで株主に渡すのは株そのものではなく「買う権利」。買わなければお金は払わないが、持株比率は薄まる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ライツ・イシュー: 今の株主に比率で有償で売る。現金と資本が増える。先買権を満たす方法', 'ボーナス・イシュー: 準備金を資本に組み入れて無償で配る。現金も資本の合計も変わらない。先買権は働かない', '新株数 ＝ 今の株数 ÷ 比率。額面分が株式資本、額面を超える分が株式払込剰余金']
        },
        {
          title: '英単語',
          words: [
            ['rights issue', 'ライツ イシュー', '株主割当増資'],
            ['bonus issue', 'ボーナス イシュー', '無償増資'],
            ['capitalisation issue / scrip issue', 'キャピタライゼーション／スクリップ', 'ボーナス・イシューの別名'],
            ['capitalise reserves', 'キャピタライズ', '準備金を資本に組み入れる'],
            ['nominal value', 'ノミナル バリュー', '額面'],
            ['fully paid', 'フーリー ペイド', '全額払込済み']
          ]
        }
      ],
      quiz: [
        { q: 'Sora Ltd は額面 $0.50 の株式を 600,000 株発行している。3株につき1株のボーナス・イシューを行う。株式資本はいくら増える？', type: 'number', answer: 100000, unit: '$', explain: '新株数は 600,000 ÷ 3 ＝ 200,000 株。額面 $0.50 なので 200,000 × $0.50 ＝ $100,000 を準備金から株式資本に組み入れる。資本の合計は変わらない。' },
        { q: 'Taiyo plc has 800,000 ordinary shares of $1 each in issue. It makes a 1 for 4 rights issue at $2.50 per share, which is fully taken up. By how much will the share premium account increase?', type: 'number', answer: 300000, unit: '$', explain: '新株数は 800,000 ÷ 4 ＝ 200,000 株。額面を超える分は $2.50 − $1 ＝ $1.50。200,000 × $1.50 ＝ $300,000。現金は $500,000、株式資本は $200,000 増える。' },
        { q: 'Which of the following statements about a bonus issue of shares is correct?', choices: ['It raises new cash from existing shareholders in proportion to their holdings', 'It must first be offered to existing shareholders under the statutory pre-emption rules before it can be made', 'It increases the total equity of the company by the nominal value of the new shares', 'It is made by capitalising reserves, and no cash is received by the company'], answer: 3, explain: 'ボーナス・イシューは準備金の資本組入れで、現金は入らない。現金を集めるのはライツ・イシュー。ボーナス株は先買権の対象外（s564）。資本の部の中の振替なので、資本の合計は変わらない。' },
        { q: 'ある株主は 1,200 株を持つ。会社は4株につき1株のライツ・イシューを1株 $3 で行う。この株主が権利をすべて使うと、払う金額は？', type: 'number', answer: 900, unit: '$', explain: '買える株数は 1,200 ÷ 4 ＝ 300 株。300 × $3 ＝ $900 を払う。ボーナス・イシューなら同じ300株を無償で受け取る。' },
        { q: 'ライツ・イシューに応じない株主について、正しいものは？', choices: ['持株比率は変わらない。ボーナス・イシューと同じだから', 'お金は払わないが、持株比率は下がる。権利を他人に売れることが多い', '会社は、応じない株主に払込みを強制できる', '応じない株主の株式は、会社が買い取らなければならない'], answer: 1, explain: 'ライツ・イシューは買う「権利」を与えるだけなので、払込みの義務はない。ただし他の人が新株を買うので、自分の比率は薄まる。比率が変わらないのは、全員が同じ割合で受け取るボーナス・イシュー。' }
      ]
    },
    {
      id: 'B069',
      no: 69,
      title: '株式の割引発行の禁止とプレミアム付き発行',
      goal: '株式を額面より安く発行できない理由と違反の結果、プレミアム付き発行での株式払込剰余金の計算と使い道を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(d)'],
      slides: [
        {
          title: '1,000円の商品券を800円で売ったら',
          paras: ['1,000円と書かれた商品券を800円で売ると、お店は200円分を受け取らずに1,000円分を約束したことになる。', '株式の額面（nominal value）も同じ。額面 $1 の株式は「この会社には1株につき $1 の資本が入っている」という表示。それより安く出すと、帳簿にある資本が実際には入っていないことになる。だから法律は割引発行を禁止している。']
        },
        {
          title: '割引発行の禁止（s580）',
          list: ['株式は額面より安く割り当ててはならない（must not be allotted at a discount）', '違反しても割当ては無効にならない。株式を受け取った人（allottee）が、割引分と利息（年5%）を会社に払う（s580(2)、s592）', 'その株式を後で取得した人も同じ責任を負う。ただし事情を知らずに対価を払って買った人は除く（s588）', '会社と責任のある役員は罰金の対象（s590）'],
          after: '判例: Ooregum Gold Mining Co of India v Roper (1892)。株価が額面を下回っていても、額面未満の発行は認められなかった。'
        },
        {
          title: '「割引」の基準は額面。市場価格ではない',
          table: { caption: '額面 $1、市場価格 $3 の株式', head: ['発行価格', '扱い'], rows: [['$0.80', '割引発行（禁止）'], ['$1.00', '額面発行（at par）'], ['$2.40', 'プレミアム付き。市場価格より安いが適法'], ['$3.50', 'プレミアム付き']] },
          after: 'ライツ・イシューを市場価格より安くするのは問題ない。比べる相手は市場価格ではなく額面。'
        },
        {
          title: '例題①: 割引発行の後始末',
          example: {
            problem: 'Umi Ltd は額面 $1 の株式 10,000 株を1株 $0.80 で Kato さんに割り当てた。1年後に違反が分かった。Kato さんが会社に払う額は？（利率は年5%）',
            steps: ['割引分: ($1.00 − $0.80) × 10,000 ＝ $2,000', '利息: $2,000 × 5% × 1年 ＝ $100', '合計: $2,000 ＋ $100 ＝ $2,100'],
            answer: '$2,100（割当て自体は有効のまま）'
          }
        },
        {
          title: 'プレミアム付き発行（s610）',
          paras: ['額面より高く発行したときの差額をプレミアム（premium）という。会社は差額を株式払込剰余金（share premium account）に入れる。'],
          list: ['株式払込剰余金は、払込済みの株式資本と同じように扱われる。配当には使えない（s610(4)）', '使い道は2つだけ: ①その株式の発行費用・手数料の処理（s610(2)）、②全額払込済みのボーナス株の払込み（s610(3)）', 'それ以外で減らすには、減資の手続きが必要（B073）']
        },
        {
          title: '例題②: プレミアム付き発行',
          example: {
            problem: 'Mori Ltd は額面 $0.50 の株式 200,000 株を1株 $1.20 で発行した。発行費用は $6,000。株式資本と株式払込剰余金はいくら増える？',
            steps: ['現金の受取り: 200,000 × $1.20 ＝ $240,000', '株式資本（額面分）: 200,000 × $0.50 ＝ $100,000', 'プレミアム: 200,000 × ($1.20 − $0.50) ＝ $140,000', '発行費用 $6,000 は株式払込剰余金で処理できる: $140,000 − $6,000 ＝ $134,000', '現金の純増: $240,000 − $6,000 ＝ $234,000'],
            answer: '株式資本 ＋$100,000、株式払込剰余金 ＋$134,000'
          }
        },
        {
          title: 'お金以外で払うときと、公開会社の払込み',
          list: ['私会社: 現金以外（土地、のれん、ノウハウなど）でも払える。取締役の評価は、明らかに不当でなければ裁判所は問わない（Re Wragg Ltd 1897）', '公開会社: 現金以外の対価は、割当て前6か月以内の独立した評価が必要（s593）。労務の提供の約束では払えない（s585）', '公開会社: 割当て時に、額面の1/4以上と、プレミアムの全額が払い込まれていること（s586）'],
          after: '高すぎる評価で株式を渡すと、実質は割引発行になる。公開会社の評価ルールはそれを防ぐため。'
        },
        {
          title: 'なぜ？ 額面にこだわる理由',
          paras: ['株式資本は、債権者にとって「会社に最低これだけの財産が払い込まれている」という目安。株主は有限責任で守られる代わりに、約束した資本は必ず払い込む。これが資本維持の考え方（B073）につながる。', 'プレミアムも株主が払い込んだお金なので、利益のように配当で返すことはできない。使い道を発行費用とボーナス株に限っているのはそのため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '株式払込剰余金を配当に回したり、損失の穴埋めに自由に使ったりはできない。ほかの株式の発行費用や、社債の償還プレミアムにも使えない（2006年法で使い道が狭くなった）。また、社債（debenture）は額面より安く発行してよい。禁止されているのは株式の割引発行だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株式は額面未満で発行できない（s580）。受け取った人が割引分と年5%の利息を会社に払う', '市場価格より安くても、額面以上なら割引ではない', 'プレミアムは株式払込剰余金へ。使い道はその発行費用とボーナス株だけで、配当はできない']
        },
        {
          title: '英単語',
          words: [
            ['issue at a discount', '', '割引発行（額面未満で発行）'],
            ['issue at a premium', '', 'プレミアム付き発行（額面を超えて発行）'],
            ['at par', 'アット パー', '額面で'],
            ['share premium account', 'シェア プレミアム アカウント', '株式払込剰余金'],
            ['allottee', 'アロッティー', '株式を割り当てられた人'],
            ['consideration', 'コンシダレーション', '対価']
          ]
        }
      ],
      quiz: [
        { q: 'Kumo plc は額面 $1 の株式 100,000 株を1株 $1.50 で発行する。公開会社として、割当て時に最低限払い込まれていなければならない金額は？', type: 'number', answer: 75000, unit: '$', explain: 's586：額面の1/4以上とプレミアムの全額。額面分 100,000 × $1 × 1/4 ＝ $25,000、プレミアム 100,000 × $0.50 ＝ $50,000。合計 $75,000。プレミアムは1/4ではなく全額なので注意。' },
        { q: 'Hana Ltd issues 50,000 ordinary shares of $0.25 each at $0.90 per share. Issue expenses of $2,500 are written off against the share premium account. What is the balance on the share premium account arising from this issue?', type: 'number', answer: 30000, unit: '$', explain: 'プレミアムは 1株 $0.90 − $0.25 ＝ $0.65。50,000 × $0.65 ＝ $32,500。発行費用 $2,500 を差し引いて $30,000。' },
        { q: 'A company allots 20,000 shares of $1 nominal value at a price of $0.70 per share. Which of the following is the legal consequence under the Companies Act 2006?', choices: ['The allotment is void and the shares must be cancelled', 'The directors must pay the company $14,000', 'The allottee is liable to pay the company $6,000 plus interest', 'There is no consequence if the market value of the shares was $0.70'], answer: 2, explain: '割引分は ($1 − $0.70) × 20,000 ＝ $6,000。s580(2)：割当ては有効のまま、受け取った人が割引分と利息を払う。$14,000 は払込額で、割引分ではない。市場価格が額面を下回っていても割引発行は禁止（Ooregum Gold Mining v Roper）。' },
        { q: 'For which of the following purposes may a company use its share premium account under the Companies Act 2006?', choices: ['To pay a dividend to ordinary shareholders', 'To write off the expenses of any previous share issue', 'To provide for the premium payable on the redemption of debentures', 'To pay up new shares to be allotted to members as fully paid bonus shares'], answer: 3, explain: '使い道はボーナス株の払込みと、その株式（今回発行した株式）の発行費用・手数料の処理だけ（s610）。配当は不可。過去の別の発行の費用や、社債の償還プレミアムには使えない。' },
        { q: '額面 $1、市場価格 $4 の株式を、ライツ・イシューで1株 $2.50 で発行した。正しいものは？', choices: ['市場価格より安いので割引発行になり、違法', '額面以上なので適法。1株 $1.50 が株式払込剰余金になる', '市場価格との差 $1.50 を、株主が会社に払う必要がある', '額面以上だが市場価格未満なので、裁判所の許可が必要'], answer: 1, explain: '割引かどうかは額面と比べる。$2.50 は額面 $1 を超えるのでプレミアム付き発行で、$2.50 − $1 ＝ $1.50 が株式払込剰余金。市場価格より安いのは割引ではない。' }
      ]
    },
    {
      id: 'B070',
      no: 70,
      title: '借入資本と社債（debenture）',
      goal: '借入資本と社債の意味、社債の発行の形（単独・シリーズ・社債信託証書）と社債権者の立場を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(e)'],
      slides: [
        {
          title: '家を買うお金：自分の貯金か、銀行のローンか',
          paras: ['家を買うとき、自分の貯金（自己資金）と銀行のローンを組み合わせる。ローンは毎月の返済と利息が決まっていて、収入が減っても払わなければならない。', '会社も同じ。株主から集めるお金が株式資本、借りるお金が借入資本（loan capital）。借入の証書の代表が社債（debenture）。']
        },
        {
          title: '借入資本（loan capital）とは',
          list: ['会社が長期で借りたお金。社債、ローン・ノート（loan notes）、銀行からの長期借入など', '貸した人は会社の債権者（creditor）。株主（member）ではない', '利息（interest）は契約で決まり、利益がなくても払う義務がある', '元本は約束の日に返す。返済日のない永久社債も認められている（s739）']
        },
        {
          title: '社債（debenture）の意味',
          paras: ['社債は、会社の借入を作り出す、または借入を認める書面。判例: Levy v Abercorris Slate and Slab Co (1887)。', '法律の定義も広く、社債、ボンド、その他の会社の証券を含み、会社の財産に担保が付いているかどうかは問わない（Companies Act 2006 s738）。'],
          note: { kind: 'tip', text: '日本語の「社債」は大勢から集める債券をイメージしがち。英国法の debenture は、銀行1行からの借入の証書も含む広い言葉。' }
        },
        {
          title: '単独の社債と、シリーズの社債',
          table: { caption: '社債の発行の形', head: ['種類', '特徴'], rows: [['単独の社債（single debenture）', '1人の貸し手（ふつうは銀行）への借入の証書'], ['シリーズの社債（series of debentures）', '多くの人に同じ条件で発行する。同じ順位で扱う'], ['ディベンチャー・ストック（debenture stock）', '1つの大きな借入を細かい単位に分け、多くの人が持つ']] },
          after: '多くの人に発行するときは、社債信託証書（debenture trust deed）で受託者（trustee）を選ぶのがふつう。'
        },
        {
          title: '社債信託証書（debenture trust deed）と受託者',
          list: ['受託者（trustee）は、多数の社債権者の代わりに会社を見張り、担保を持ち、必要なら担保を実行する', '信託証書には、元本・利息・返済日、担保の内容、会社の約束（借入の上限など）、受託者の権限を書く'],
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="会社と多数の社債権者の間に受託者が入り、まとめて権利を守る" font-size="15"><rect x="20" y="88" width="96" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="68" y="119" text-anchor="middle" fill="var(--ink)">会社</text><line x1="116" y1="114" x2="164" y2="114" stroke="var(--edge)" stroke-width="1.5"/><text x="140" y="78" text-anchor="middle" font-size="14" fill="var(--quiet)">信託証書</text><rect x="164" y="88" width="112" height="52" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="119" text-anchor="middle" font-weight="600" fill="var(--ink)">受託者</text><line x1="276" y1="114" x2="324" y2="48" stroke="var(--edge)" stroke-width="1.5"/><line x1="276" y1="114" x2="324" y2="114" stroke="var(--edge)" stroke-width="1.5"/><line x1="276" y1="114" x2="324" y2="180" stroke="var(--edge)" stroke-width="1.5"/><rect x="324" y="28" width="96" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="372" y="53" text-anchor="middle" fill="var(--ink)">社債権者</text><rect x="324" y="94" width="96" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="372" y="119" text-anchor="middle" fill="var(--ink)">社債権者</text><rect x="324" y="160" width="96" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="372" y="185" text-anchor="middle" fill="var(--ink)">社債権者</text><text x="220" y="226" text-anchor="middle" font-size="14" fill="var(--quiet)">受託者が担保を持ち、多数の社債権者をまとめて守る</text></svg>`
        },
        {
          title: '会社の借入権限と、社債の発行',
          list: ['2006年法の会社は、定款で目的を制限しなければ何でもできる（s31）。借入もできる', '実際に借りると決めるのは取締役。モデル定款では取締役が会社の権限を使える。定款で借入の上限を決めることもある', '社債は額面より安く（割引で）発行してよい。株式とは違う', 'ただし、すぐ額面で株式に転換できる社債を割引で出すと、実質は株式の割引発行になるので無効（Mosely v Koffyfontein Mines 1904）']
        },
        {
          title: '社債権者の権利',
          list: ['約束どおりの利息を受け取り、約束の日に元本を返してもらう', '払われなければ、債権者として訴えたり、会社の清算を申し立てたりできる', '担保付きなら、担保を実行できる（次のレッスン）', '年次の財務諸表の写しを受け取れる（s423）', '総会での議決権はない']
        },
        {
          title: 'なぜ？ 会社が借入を使う理由',
          paras: ['借入なら、株主の持株比率は変わらず、支配が薄まらない。利息は費用として利益から差し引かれるので、ふつうは税金を減らす効果もある。', 'その代わり、利益が出なくても利息を払う。払えなければ、債権者が担保を実行したり清算を申し立てたりする。借入は支配を守れてコストも低めだが、会社にとってはリスクの大きい資金。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '社債権者は会社の「持ち主」ではなく「貸し手」。議決権はなく、配当ももらわない。逆に、社債の利息は利益がなくても払う。また、「株式の割引発行は禁止」を社債に当てはめない。社債は割引で発行できる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['借入資本は会社が借りたお金。貸し手は債権者で、利息は利益がなくても払う', '社債（debenture）は借入を作る・認める書面。担保の有無を問わず、銀行1行の借入も含む', '多数に発行するときは社債信託証書で受託者を選び、受託者がまとめて社債権者を守る']
        },
        {
          title: '英単語',
          words: [
            ['loan capital', 'ローン キャピタル', '借入資本'],
            ['debenture', 'ディベンチャー', '社債（借入の証書）'],
            ['debenture holder', '', '社債権者'],
            ['debenture trust deed', 'トラスト ディード', '社債信託証書'],
            ['trustee', 'トラスティー', '受託者'],
            ['loan notes', 'ローン ノーツ', 'ローン・ノート（借入の証券）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a debenture?', choices: ['A certificate showing that the holder is a member of the company', "A document which must always be secured by a charge over the company's assets", 'A document which creates or acknowledges a debt owed by a company', 'A share which carries a fixed dividend but no vote'], answer: 2, explain: 'Levy v Abercorris：社債は借入を作る・認める書面。社債権者は株主（member）ではない。担保は付かないこともある（s738 は担保の有無を問わない）。固定配当の株式は優先株で、社債ではない。' },
        { q: 'Which of the following statements regarding debentures is correct?', choices: ['Debenture holders are entitled to vote at general meetings of the company', 'Interest on debentures may only be paid out of distributable profits', 'A company cannot issue debentures that have no fixed date for repayment', 'Debentures may be issued at a discount to their nominal value'], answer: 3, explain: '社債は割引発行できる（禁止は株式だけ）。社債権者に議決権はない。利息は契約上の債務なので、分配可能利益がなくても払う。返済日のない永久社債も認められている（s739）。' },
        { q: '多くの投資家に社債を発行するとき、社債信託証書で受託者を選ぶ主な理由は？', choices: ['受託者が、会社の代わりに社債の利息を払うため', '多数の社債権者に代わって担保を持ち、会社を見張り、権利をまとめて実行するため', '社債権者に総会での議決権を与えるため', '社債を株式に変えるために必要だから'], answer: 1, explain: '受託者は社債権者の代表。数千人の社債権者が1人ずつ会社と交渉するのは無理なので、受託者が担保を持ってまとめて動く。利息を払うのは会社のまま。' },
        { q: '会社 X は額面 $100 の社債を1口 $95 で発行し、すぐに額面 $1 の株式100株に転換できる条件を付けた。この転換の条件の扱いは？', choices: ['実質的に株式の割引発行になるので、転換の条件は無効', '社債は割引で発行できるので、問題はない', '社債権者が転換を選べば、追加の払込みなしで有効になる', '株主総会の普通決議があれば有効になる'], answer: 0, explain: '$95 で額面合計 $100 の株式を手に入れることになり、$5 の割引発行と同じ（Mosely v Koffyfontein Mines）。社債の割引発行自体は適法だが、株式の割引発行の禁止をすり抜けることはできない。' },
        { q: '社債権者の権利として誤っているものは？', choices: ['約束どおりの利息を受け取れる', '年次の財務諸表の写しを受け取れる', '株主総会で議決権を行使できる', '払われなければ、債権者として清算を申し立てられる'], answer: 2, explain: '社債権者は債権者なので議決権はない。財務諸表の写しは社債権者も受け取れる（s423）。払われなければ債権者として訴えや清算の申立てができる。' }
      ]
    },
    {
      id: 'B071',
      no: 71,
      title: '担保：固定担保と浮動担保',
      goal: '担保（charge）の意味、固定担保と浮動担保の違い、結晶化、登録と優先順位を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(e)'],
      slides: [
        {
          title: '住宅ローンと、お店の在庫を担保にした借入',
          paras: ['住宅ローンを組むと、家に抵当権が付く。返せなければ銀行が家を売って回収する。ローンが残っている間、家を勝手に売ることはできない。', 'でも、お店が「在庫を担保に」借りたら？在庫は毎日売れて入れ替わる。売るたびに銀行の同意を取るのは無理。そこで英国法は、2種類の担保を使い分ける。']
        },
        {
          title: '担保（charge）とは',
          paras: ['担保（charge）は、借入の返済を確実にするため、会社の財産に付ける権利。会社が返さなければ、担保権者（chargeholder）はその財産から先に回収できる。担保のない債権者（unsecured creditors）より有利になる。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="固定担保は特定の資産に最初から付き、浮動担保は入れ替わる資産全体に付き結晶化で固定される" font-size="15"><rect x="20" y="20" width="190" height="220" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="48" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">固定担保</text><rect x="45" y="66" width="140" height="44" rx="6" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="115" y="94" text-anchor="middle" fill="var(--ink)">土地・建物</text><text x="115" y="150" text-anchor="middle" font-size="14" fill="var(--ink)">この資産に</text><text x="115" y="172" text-anchor="middle" font-size="14" fill="var(--ink)">最初から付く</text><text x="115" y="210" text-anchor="middle" font-size="14" fill="var(--quiet)">売るには同意が必要</text><rect x="230" y="20" width="190" height="220" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="48" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">浮動担保</text><rect x="250" y="62" width="150" height="56" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/><text x="325" y="86" text-anchor="middle" font-size="14" fill="var(--ink)">在庫・売掛金など</text><text x="325" y="107" text-anchor="middle" font-size="14" fill="var(--ink)">入れ替わる資産全体</text><line x1="325" y1="120" x2="325" y2="152" stroke="var(--edge)" stroke-width="1.5"/><path d="M319 144 L325 152 L331 144" fill="none" stroke="var(--edge)" stroke-width="1.5"/><text x="336" y="141" font-size="14" fill="var(--quiet)">結晶化</text><text x="325" y="182" text-anchor="middle" font-size="14" fill="var(--ink)">その時点の資産に</text><text x="325" y="204" text-anchor="middle" font-size="14" fill="var(--ink)">固定される</text><text x="220" y="272" text-anchor="middle" font-size="14" fill="var(--quiet)">結晶化までは、通常の営業の中で自由に売れる</text></svg>`
        },
        {
          title: '固定担保（fixed charge）',
          list: ['特定の、はっきり分かる資産に付く（土地、建物、大きな機械など）', '作った時点から、その資産に付いている', '会社はその資産を、担保権者の同意なしに売ったり処分したりできない', '清算では、その資産を売ったお金から、ほかの債権者より先に回収できる']
        },
        {
          title: '浮動担保（floating charge）',
          paras: ['判例 Re Yorkshire Woolcombers Association (1903) は、浮動担保の特徴を3つ挙げた。'],
          numbered: ['今ある資産と将来の資産の「種類」全体に付く', 'その種類の資産は、通常の営業の中で入れ替わる', '何かが起きるまで、会社はその資産を通常どおり使い、売れる'],
          after: '例: 在庫、売掛金、会社の事業と財産全体（undertaking）。'
        },
        {
          title: '結晶化（crystallisation）',
          paras: ['浮動担保は、ある出来事が起きると、その時点で会社が持っている資産に固定される。これを結晶化という。以後、会社はその資産を自由に売れない。主な出来事は次のとおり。'],
          list: ['会社の清算（liquidation）', '会社が事業をやめた', '担保権者が財産管理人（receiver）を選ぶなどして介入した', '担保の契約で決めた出来事が起きた（自動結晶化条項）']
        },
        {
          title: '担保の登録（21日以内）',
          list: ['担保を作った日の翌日から21日以内に、会社か担保権者が内容を登記所（Registrar of Companies）に届け出る（s859A）。届け出ないこと自体に罰則はないが、次の不利益がある', '期限内に届け出なければ、担保は清算人・管理人・ほかの債権者に対して無効（void）', '借金そのものは無効にならない。担保のない借金として残り、すぐに返す義務が生じる（s859H）', '登録は誰でも見られる。これから貸す人は、すでにどんな担保があるかを調べられる']
        },
        {
          title: '優先順位',
          list: ['固定担保は浮動担保より優先する。浮動担保のほうが先に作られていても同じ', '同じ種類どうしは、原則として先に作られたほうが優先する（登録した日ではなく、作った日で比べる）', '浮動担保は清算で、清算費用・優先債権（従業員の給料の一部など）・無担保債権者のための留保分（prescribed part）よりも後になる（第8部）'],
          after: '浮動担保の契約に「後で、より優先する担保を作らない」という条項（negative pledge clause）を入れることがある。後の担保権者がそれを知っていれば、優先できない。'
        },
        {
          title: '例題: 誰がいくら回収するか',
          example: {
            problem: 'Tsuki Ltd が清算した。Bank A は工場の建物に固定担保 $250,000、Bank B は会社の財産全体に浮動担保 $200,000 を持つ。浮動担保のほうが先に作られた。建物は $300,000、在庫などは $120,000 で売れた。清算費用・優先債権・留保分はないものとする。2行はいくら回収できる？',
            steps: ['建物の $300,000 から、固定担保の Bank A が先に $250,000 全額を回収する（作られた順番は関係ない）', '建物の残り $300,000 − $250,000 ＝ $50,000 は、浮動担保の対象になる', 'Bank B は $120,000 ＋ $50,000 ＝ $170,000 を回収する', 'Bank B の残り $200,000 − $170,000 ＝ $30,000 は、無担保の債権として残る'],
            answer: 'Bank A $250,000（全額）、Bank B $170,000（残り $30,000 は無担保の債権）'
          }
        },
        {
          title: 'なぜ？ 2種類の担保がある理由',
          paras: ['固定担保は資産を縛るので、担保権者には安全だが、会社は動きにくい。浮動担保なら、在庫や売掛金のように入れ替わる資産も担保にでき、会社は普段どおり商売を続けられる。その代わり、担保権者の立場は弱く、順位も低い。'],
          note: { kind: 'warn', text: '名前ではなく実態で決まる。契約に fixed と書いてあっても、会社が担保の資産（売掛金の回収金など）を自由に使えるなら浮動担保とされる（National Westminster Bank v Spectrum Plus 2005）。また、登録しなかった担保が無効になっても、借金自体は消えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['固定担保は特定の資産に付き、同意なしに処分できない。浮動担保は入れ替わる資産全体に付き、通常の営業では自由に処分できる', '浮動担保は、清算や事業の停止などで結晶化し、その時点の資産に固定される', '担保は作った翌日から21日以内に登録。しないと清算人などに無効。固定担保は浮動担保より優先']
        },
        {
          title: '英単語',
          words: [
            ['charge', 'チャージ', '担保（担保権）'],
            ['fixed charge', 'フィクスト チャージ', '固定担保'],
            ['floating charge', 'フローティング チャージ', '浮動担保'],
            ['crystallisation', 'クリスタライゼーション', '結晶化'],
            ['secured / unsecured creditor', '', '担保付き／無担保の債権者'],
            ['negative pledge clause', 'ネガティブ プレッジ', 'より優先する担保を後で作らない約束']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a characteristic of a floating charge?', choices: ['It attaches to a specific asset from the moment it is created', 'The company may deal with the charged assets in the ordinary course of business until crystallisation', 'It always ranks ahead of a fixed charge created later over the same assets', 'It is typically taken over land and buildings'], answer: 1, explain: 'Re Yorkshire Woolcombers の3つ目の特徴。特定の資産に最初から付く、土地・建物に付けるのは固定担保の特徴。固定担保は浮動担保より優先するので、「後に作られた固定担保より常に優先する」も誤り。' },
        { q: 'A company created a charge over its assets but the particulars were not delivered to the Registrar of Companies within 21 days. What is the effect?', choices: ['The charge remains valid but the directors commit a criminal offence', 'Both the charge and the underlying debt are void', 'The charge is valid against everyone because registration is only for information', 'The charge is void against a liquidator, an administrator and creditors, but the debt remains payable'], answer: 3, explain: 's859H：担保は清算人・管理人・債権者に対して無効になるが、借金は残り、すぐに返す義務が生じる。今の法律では、登録しないこと自体は犯罪ではない。登録は単なるお知らせではなく、担保の効力に関わる。' },
        { q: 'In January a company created a floating charge over all its assets in favour of Bank X. In June it created a fixed charge over its factory in favour of Bank Y. The floating charge contains no restriction on later charges. Which charge has priority over the factory?', choices: ['Bank Y, because a fixed charge ranks ahead of a floating charge', 'Bank X, because its charge was created first', 'Both banks rank equally', 'Neither, until the floating charge crystallises'], answer: 0, explain: '固定担保は浮動担保より優先する。浮動担保が先に作られていても同じ。「先に作った方が優先」は同じ種類どうしのルール。浮動担保に negative pledge clause があり、Bank Y がそれを知っていた場合は別。' },
        { q: '次のうち、浮動担保が結晶化する出来事に当たらないものは？', choices: ['会社が清算に入った', '会社が事業をやめた', '会社が在庫を、通常の取引で顧客に売った', '担保権者が財産管理人（receiver）を選んで介入した'], answer: 2, explain: '通常の営業で資産を売るのは、浮動担保が認めている行為そのもの。結晶化は起きない。清算、事業の停止、担保権者の介入は、結晶化の典型的な出来事。' },
        { q: '銀行は会社の建物に固定担保 $80,000 だけを持つ。会社が清算し、建物は $60,000 で売れた。銀行の残りの $20,000 はどうなる？', choices: ['会社のほかの財産からも、すべての債権者より先に回収できる', '取締役が個人として払う', '担保が足りなかったので、回収できず消える', '担保のない債権として、無担保の債権者と同じ順位で請求する'], answer: 3, explain: '固定担保で優先されるのは、担保の資産（建物）の売却代金まで。足りない分は無担保の債権として残る。消えるわけではないが、ほかの財産で優先されることもない。' }
      ]
    },
    {
      id: 'B072',
      no: 72,
      title: '株式と借入資本の違い：株主と社債権者の権利',
      goal: '株式資本と借入資本の違い、株主と社債権者の権利の違いを、比較表を使って説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(f)'],
      slides: [
        {
          title: '共同オーナーと、お金を貸した人',
          paras: ['友だちのカフェに100万円出資すると、共同オーナーになる。もうかれば分け前が増え、つぶれたら出資は戻らないかもしれない。経営にも口を出せる。', '同じ100万円を貸すなら、決まった利息と返済を受ける。もうかっても利息は同じ。でも、つぶれたときはオーナーより先に返してもらえる。株主と社債権者の違いはこれ。']
        },
        {
          title: '立場と見返りの違い',
          table: { caption: '株主と社債権者', head: ['項目', '株主（shareholder）', '社債権者（debenture holder）'], rows: [['立場', '会社の構成員（member）、所有者', '会社の債権者（creditor）'], ['見返り', '配当（dividend）', '利息（interest）'], ['払われる条件', '分配可能利益があり、配当が決まったときだけ', '契約どおり。利益がなくても払う'], ['議決権', '普通株はあり', 'なし']] }
        },
        {
          title: '清算・担保・資本の違い',
          table: { caption: '株式資本と借入資本', head: ['項目', '株式資本', '借入資本'], rows: [['清算での順位', '最後。債権者に全部払った残り', '株主より先。担保付きならさらに先'], ['担保', '付けられない', '固定担保・浮動担保を付けられる'], ['返すこと', '資本維持の原則で、自由に返せない', '約束どおり返せる'], ['割引発行', '禁止', 'できる'], ['会社による買戻し', '厳しい制限がある', '原則として自由']] }
        },
        {
          title: '清算で払われる順番',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="清算では債権者に上から順に払い、株主は最後" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">清算で払われる順番（おおまか）</text><text x="44" y="72" text-anchor="middle" fill="var(--quiet)">1</text><rect x="70" y="48" width="330" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="235" y="72" text-anchor="middle" fill="var(--ink)">固定担保の債権者</text><text x="44" y="118" text-anchor="middle" fill="var(--quiet)">2</text><rect x="70" y="94" width="330" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="235" y="118" text-anchor="middle" fill="var(--ink)">清算費用・優先債権</text><text x="44" y="164" text-anchor="middle" fill="var(--quiet)">3</text><rect x="70" y="140" width="330" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="235" y="164" text-anchor="middle" fill="var(--ink)">浮動担保の債権者</text><text x="44" y="210" text-anchor="middle" fill="var(--quiet)">4</text><rect x="70" y="186" width="330" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="235" y="210" text-anchor="middle" fill="var(--ink)">無担保の債権者（取引先など）</text><text x="44" y="256" text-anchor="middle" fill="var(--quiet)">5</text><rect x="70" y="232" width="330" height="36" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="235" y="256" text-anchor="middle" font-weight="600" fill="var(--ink)">株主（優先株 → 普通株）</text><text x="220" y="296" text-anchor="middle" font-size="14" fill="var(--quiet)">株主は、債権者に全部払った残りだけ</text><text x="220" y="318" text-anchor="middle" font-size="14" fill="var(--quiet)">留保分など細かい順位は第8部で学ぶ</text></svg>`,
          caption: '社債は、担保の種類によって1・3・4のどこかに入る。株主はいつも最後。'
        },
        {
          title: '株主の主な権利',
          list: ['総会に出席し、議決権を行使する（普通株）', '配当が決まれば受け取る', '年次の財務諸表の写しを受け取る', '現金で発行される新株の先買権（B067）', '清算で、債権者に払った後の残り（残余財産）を受け取る', '不当に不利益な扱いを受けたら、裁判所に救済を求める（s994）']
        },
        {
          title: '社債権者の主な権利',
          list: ['約束どおりの利息を受け取る', '約束の日に元本を返してもらう', '払われなければ、債権者として訴え、清算を申し立てる', '担保付きなら担保を実行する。会社の財産全体に浮動担保を持つなら、管理人（administrator）を選べる', '年次の財務諸表の写しを受け取る（s423）'],
          after: '社債権者は、経営に口を出す権利（議決権）は持たない。守られるのは契約と担保を通じて。'
        },
        {
          title: '利息と配当、税金の違い',
          paras: ['利息は費用として利益から差し引かれ、ふつうは税金の計算でも差し引ける。配当は税引後の利益からの分配で、費用ではない。', '会社から見ると、借入は持株比率を変えずに使え、コストも下げやすい。株主から見ると、借入が多い会社（gearing が高い会社）は、利息を先に払う分、利益が減ったときに配当がなくなりやすい。']
        },
        {
          title: 'なぜ？ 株主が最後になる理由',
          paras: ['株主は、もうかったときの分け前に上限がない。その代わり、損をしたときのリスクも最後まで負う。債権者は、もうけの上限（利息）を受け入れる代わりに、先に返してもらう。', 'リスクの大きさと見返りの大きさを釣り合わせた仕組み。資本維持の原則（B073）で株主に資本を自由に返せないのも、「債権者が先」という順番を守るため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '優先株（preference shares）は配当が先でも「株式」。株主なので、清算ではすべての債権者の後。逆に、社債は無担保でも債権者なので、どの株主よりも先。また、社債の利息は「利益が出たら払う」ものではない。配当と混同しない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株主は所有者（member）、社債権者は債権者（creditor）。議決権は株主（普通株）だけ', '配当は分配可能利益があり、決まったときだけ。利息は利益がなくても契約どおり払う', '清算では債権者が先、株主は最後。社債には担保を付けられ、割引発行もできる']
        },
        {
          title: '英単語',
          words: [
            ['shareholder / member', '', '株主／会社の構成員'],
            ['creditor', 'クレディター', '債権者'],
            ['dividend', 'ディビデンド', '配当'],
            ['gearing', 'ギアリング', '借入への依存度'],
            ['preference shares', 'プレファレンス シェアズ', '優先株'],
            ['surplus assets', 'サープラス アセッツ', '残余財産（債権者に払った残り）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a right of a debenture holder but NOT of an ordinary shareholder?', choices: ['To vote at general meetings of the company', 'To receive a copy of the annual accounts', 'To receive any surplus assets in a winding up after all creditors are paid', 'To be paid interest whether or not the company makes a profit'], answer: 3, explain: '利息は契約上の債務なので、利益がなくても払われる。議決権と残余財産は株主の権利。財務諸表の写しは株主も社債権者も受け取れる（s423）ので、社債権者だけの権利ではない。' },
        { q: 'Which of the following statements comparing share capital and loan capital is correct?', choices: ['Dividends on shares are a contractual debt payable whether or not there are profits', "Loan capital may be secured by a charge over the company's assets, whereas share capital cannot", 'Debenture holders rank after preference shareholders on a winding up', 'Shares, like debentures, may be issued at a discount'], answer: 1, explain: '担保を付けられるのは借入資本だけ。配当は分配可能利益があり決まったときだけで、契約上の債務ではない。社債権者は債権者なので優先株主より先。株式の割引発行は禁止（s580）。' },
        { q: '会社 Y が清算した。次の4人のうち、最後に払われるのは？', choices: ['優先株主', '無担保の社債権者', '普通株主', '無担保の取引先（買掛金の債権者）'], answer: 2, explain: '債権者（無担保の社債権者・取引先）は株主より先。株主の中では優先株が普通株より先なので、普通株主が最後。' },
        { q: '社債の利息と株式の配当について、正しいものは？', choices: ['利息は費用として利益から差し引かれ、配当は税引後の利益からの分配', '利息も配当も、分配可能利益がなければ払えない', '配当は契約上の義務なので、利益がなくても払う', '利息の額は、株主総会の決議で毎年決まる'], answer: 0, explain: '利息は契約で決まる費用で、利益の有無に関係なく払う。分配可能利益が必要なのは配当だけ。利息の額は総会ではなく、社債の契約で決まっている。' },
        { q: 'Which of the following is a right of an ordinary shareholder?', choices: ['To receive a fixed rate of interest each year', 'To be offered new ordinary shares issued for cash in proportion to existing holdings, unless pre-emption rights are excluded or disapplied', "To enforce a charge over the company's assets", 'To be repaid the nominal value of the shares on a fixed date'], answer: 1, explain: '先買権（s561）は普通株主の権利。決まった利息、担保の実行、決まった日の返済は社債権者の権利。株主は資本維持の原則のため、決まった日に払い戻しを受ける権利を持たない。' }
      ]
    }
  ],
  cards: [
    { id: 'B067-1', lesson: 'B067', q: '取締役が新株を割り当てる権限の根拠（2つ）は？', a: '私会社で株式1種類なら s550（定款が禁止しなければ可）。それ以外は定款か普通決議の授権（s551）' },
    { id: 'B067-2', lesson: 'B067', q: 's551 の授権に書くことは？', a: '割り当てられる株式の上限と期限（5年以内）。更新もできる' },
    { id: 'B067-3', lesson: 'B067', q: '先買権（s561）の中身は？', a: '現金で持分証券を割り当てるとき、今の普通株主に持株比率で先に申し出る。期間は14日以上' },
    { id: 'B067-4', lesson: 'B067', q: '先買権が働かない3つの場合は？', a: 'ボーナス株、現金以外で払う割当て（現物出資）、従業員株式制度' },
    { id: 'B067-5', lesson: 'B067', q: 'なぜ先買権がある？', a: '新株で今の株主の持株比率（支配力・配当の取り分）が薄められるのを防ぐため' },
    { id: 'B067-6', lesson: 'B067', q: '先買権を外す方法は？', a: '私会社は定款で排除できる。定款か特別決議で不適用にもできる（公開会社はこちら）' },
    { id: 'B068-1', lesson: 'B068', q: 'ライツ・イシューとは？', a: '今の株主に持株比率で新株を有償で買う権利を与える増資。現金と資本が増える' },
    { id: 'B068-2', lesson: 'B068', q: 'ボーナス・イシューとは？', a: '準備金を資本に組み入れ、今の株主に比率で新株を無償で配る。現金も資本合計も不変' },
    { id: 'B068-3', lesson: 'B068', q: 'ボーナス・イシューに使える準備金の例は？', a: '株式払込剰余金、資本償還準備金、利益剰余金など' },
    { id: 'B068-4', lesson: 'B068', q: 'ボーナス・イシューの仕訳は？', a: 'Dr 準備金（Share premium など）／Cr Share capital（額面 × 新株数）' },
    { id: 'B068-5', lesson: 'B068', q: 'ライツ・イシューで額面を超えて払い込まれた分はどこへ？', a: '株式払込剰余金（share premium）' },
    { id: 'B068-6', lesson: 'B068', q: '先買権はライツとボーナスのどちらで働く？', a: 'ライツ（現金での割当て）。ボーナス株は s564 で対象外' },
    { id: 'B069-1', lesson: 'B069', q: '割引発行の禁止のルールは？', a: '株式は額面未満で割り当てられない（s580）' },
    { id: 'B069-2', lesson: 'B069', q: '割引発行に違反したときの結果は？', a: '割当ては有効。受け取った人が割引分と年5%の利息を払う。会社と役員は罰金' },
    { id: 'B069-3', lesson: 'B069', q: '「割引」かどうかの基準は市場価格？額面？', a: '額面。市場価格より安くても、額面以上なら適法' },
    { id: 'B069-4', lesson: 'B069', q: '株式払込剰余金の使い道は？', a: 'その株式の発行費用・手数料の処理と、全額払込のボーナス株の払込みだけ' },
    { id: 'B069-5', lesson: 'B069', q: '公開会社の割当て時の最低払込みは？', a: '額面の1/4以上と、プレミアムの全額（s586）' },
    { id: 'B069-6', lesson: 'B069', q: '公開会社が現金以外の対価で株式を出すときは？', a: '割当て前6か月以内の独立した評価が必要（s593）。労務の約束では払えない' },
    { id: 'B070-1', lesson: 'B070', q: '借入資本とは？', a: '会社が長期で借りたお金（社債、ローン・ノート、銀行借入など）。貸し手は債権者' },
    { id: 'B070-2', lesson: 'B070', q: '社債（debenture）の意味は？', a: '会社の借入を作る、または認める書面（Levy v Abercorris）。担保の有無を問わない' },
    { id: 'B070-3', lesson: 'B070', q: '社債信託証書の受託者の役割は？', a: '多数の社債権者に代わって担保を持ち、会社を見張り、権利を実行する' },
    { id: 'B070-4', lesson: 'B070', q: '社債は割引で発行できる？', a: 'できる（株式と違う）。ただし額面で株式にすぐ転換できる条件なら無効（Mosely）' },
    { id: 'B070-5', lesson: 'B070', q: '社債の利息は、利益がなければ払わなくてよい？', a: 'いいえ。契約上の債務なので、利益の有無にかかわらず払う' },
    { id: 'B071-1', lesson: 'B071', q: '担保（charge）とは？', a: '返済を確実にするため会社の財産に付ける権利。担保権者は無担保債権者より先に回収' },
    { id: 'B071-2', lesson: 'B071', q: '固定担保の特徴は？', a: '特定の資産に付き、会社は担保権者の同意なしにその資産を処分できない' },
    { id: 'B071-3', lesson: 'B071', q: '浮動担保の3つの特徴（Re Yorkshire Woolcombers）は？', a: '今と将来の資産の種類全体に付く／通常の営業で入れ替わる／結晶化まで自由に使える' },
    { id: 'B071-4', lesson: 'B071', q: '結晶化が起きる主な出来事は？', a: '清算、事業の停止、担保権者の介入（receiver の選任など）、契約で決めた出来事' },
    { id: 'B071-5', lesson: 'B071', q: '担保の登録期限と、しないときの結果は？', a: '作った翌日から21日以内。しないと清算人・管理人・債権者に無効。借金は残り即時返済' },
    { id: 'B071-6', lesson: 'B071', q: '固定担保と浮動担保、どちらが優先？', a: '固定担保。浮動担保が先に作られていても同じ' },
    { id: 'B072-1', lesson: 'B072', q: '株主と社債権者の立場の違いは？', a: '株主は会社の構成員（所有者）、社債権者は会社の債権者（貸し手）' },
    { id: 'B072-2', lesson: 'B072', q: '配当と利息の、払う条件の違いは？', a: '配当は分配可能利益があり決まったときだけ。利息は利益がなくても契約どおり' },
    { id: 'B072-3', lesson: 'B072', q: '清算での株主の順位は？', a: 'すべての債権者の後。優先株も債権者の後で、普通株が最後' },
    { id: 'B072-4', lesson: 'B072', q: '借入資本にはできて、株式資本にはできないことは？', a: '担保を付ける、割引で発行する、約束どおり返す・原則自由に買い戻す' },
    { id: 'B072-5', lesson: 'B072', q: '社債権者が持たない権利は？', a: '総会での議決権（経営に口を出す権利）' },
    { id: 'B072-6', lesson: 'B072', q: '株主・社債権者の両方が持つ権利は？', a: '年次の財務諸表の写しを受け取る権利（s423）' }
  ]
});
