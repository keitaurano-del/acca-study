(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 216,
  part: 6,
  partTitle: '会社の資本と資金調達',
  lessons: [
    {
      id: 'B063',
      no: 63,
      title: '会社の資本の種類',
      goal: '額面・発行済・払込請求済・払込済・未請求・留保資本・借入資本の違いを説明し、株主があといくら払う責任を負うかを計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(a)'],
      slides: [
        {
          title: '分割払いの入会金',
          paras: ['スポーツクラブの入会金が1人10万円。ただしクラブは「まず6万円だけ払って。残りは必要になったら請求する」と言う。', 'このとき、約束した額は10万円、請求された額は6万円、実際に払った額は人によって違う。会社の株式資本も、この3つを分けて数える。']
        },
        {
          title: '資本（capital）の2つの意味',
          list: ['株式資本（share capital）: 株主が株式と引換えに出す（出すと約束した）お金。会社は返さなくてよい', '借入資本（loan capital）: 社債（debentures）などで借りたお金。利息を払い、期限に返す。詳しくは B070〜B072'],
          after: 'K1 の財政状態計算書で、資本の部の share capital（額面の合計）と share premium（額面を超えて払われた分）を学んだ。法律の「株式資本」は、このうち額面の部分を指す。'
        },
        {
          title: '額面（nominal value）',
          paras: ['英国の会社の株式には、必ず決まった額面（nominal value または par value）がある（Companies Act 2006 s542）。額面のない株式の割当ては無効。', '額面は株価（market value）とは別物。額面 $1 の株を $3 で発行すれば、$1 が株式資本、$2 が株式払込剰余金（share premium）になる。株主が負う責任の上限は、額面とプレミアムのうち、まだ払っていない分。']
        },
        {
          title: '株式資本の5つの言葉',
          table: { caption: '株式資本の区分', head: ['用語', '意味'], rows: [['issued（allotted）share capital 発行済', '実際に株主に割り当てた株式の額面の合計'], ['called-up share capital 払込請求済', '会社が払込みを請求した額（払われたかは問わない）'], ['paid-up share capital 払込済', '実際に払い込まれた額'], ['uncalled capital 未請求', 'まだ請求していない額。会社が後で請求できる'], ['reserve capital 留保資本', '未請求のうち、特別決議で清算のときだけ請求すると決めた分']] }
        },
        {
          title: '図: 発行済・払込請求済・払込済',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="発行済20万ドルのうち、払込請求済16万ドル、払込済15万8千ドルの関係" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">額面 $1 の株式 200,000株</text><text x="20" y="58" fill="var(--quiet)">発行済（issued）</text><rect x="20" y="66" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="89" text-anchor="middle" fill="var(--ink)">$200,000</text><text x="20" y="128" fill="var(--quiet)">払込請求済（called up）</text><text x="380" y="128" text-anchor="middle" fill="var(--quiet)">未請求</text><rect x="20" y="136" width="320" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="180" y="159" text-anchor="middle" fill="var(--ink)">$160,000</text><rect x="344" y="136" width="76" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="5 4"/><text x="382" y="159" text-anchor="middle" font-size="14" fill="var(--quiet)">$40,000</text><text x="20" y="198" fill="var(--quiet)">払込済（paid up）</text><rect x="20" y="206" width="316" height="34" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="178" y="229" text-anchor="middle" font-weight="600" fill="var(--ink)">$158,000</text><text x="20" y="266" font-size="14" fill="var(--quiet)">請求済だが未払い（calls in arrear）$2,000</text></svg>`,
          caption: '200,000株のうち、10,000株の株主だけが請求額の一部を払っていない場合（次の例題）'
        },
        {
          title: '例題: 各区分の金額と株主の責任',
          example: {
            problem: 'Kaede Ltd は額面 $1 の普通株 200,000株を額面で発行した。会社は1株あたり $0.80 の払込みを請求した。10,000株を持つ Aoki さんだけが1株 $0.60 しか払っていない。ほかの株主は請求額を全部払った。発行済・払込請求済・払込済・未請求の額と、Aoki さんがあと払う責任の上限は？',
            steps: ['発行済: 200,000 × $1 ＝ $200,000', '払込請求済: 200,000 × $0.80 ＝ $160,000（払われたかは関係ない）', '未払いの請求額: 10,000 × ($0.80 − $0.60) ＝ $2,000', '払込済: $160,000 − $2,000 ＝ $158,000', '未請求: $200,000 − $160,000 ＝ $40,000', 'Aoki さんの残りの責任: 10,000 × ($1 − $0.60) ＝ $4,000'],
            answer: '発行済 $200,000、払込請求済 $160,000、払込済 $158,000、未請求 $40,000。Aoki さんの責任の上限は $4,000'
          }
        },
        {
          title: '授権資本と公開会社の払込み',
          list: ['授権資本（authorised share capital）: 昔は定款で「発行できる上限」を決める必要があった。Companies Act 2006 では不要。古い会社では定款の制限として残っていることがある', '公開会社（plc）は、株式を割り当てるとき、額面の4分の1以上とプレミアムの全額が払い込まれていなければならない（s586）',
            '公開会社には最低資本（authorised minimum）がある。割当済みの株式資本の額面が £50,000 以上必要（s763）。授権資本とは別の話', '会社は株式を割り当てると、株式の数・額面の合計・払込済と未払の額を示す資本の明細（statement of capital）を登記所に出す']
        },
        {
          title: 'なぜ？ 未払い分は会社に払う',
          paras: ['株主の未払い分の責任は、会社（company）に対するもの。会社の財産に払い込む義務で、債権者が株主を直接訴えることはできない。', '会社が続いている間は取締役が、清算（winding up）では清算人（liquidator）が、会社の名前で払込みを請求する。集めたお金は会社の財産になり、そこから債権者に払う（Insolvency Act 1986 s74）。だから「あといくら集められるか」を示す未請求の額が大事になる。'],
          formula: '責任の相手 → 会社　清算で請求する人 → 清算人'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「払込請求済＝実際に払われた額」は誤り。請求した額で、払われたかは問わない。払われた額は払込済。また、株主の責任は株価ではなく、額面（とプレミアム）のうち未払いの分で決まる。未払い分は債権者に直接払うものでもない。払う相手は会社。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['発行済 ≧ 払込請求済 ≧ 払込済。発行済 − 払込請求済 ＝ 未請求', '株主の責任の上限は、自分の株式の未払いの分。払う相手は会社で、清算では清算人が請求する', '株式資本は返さなくてよい出資、借入資本は利息を払って返す借金']
        },
        {
          title: '英単語',
          words: [
            ['nominal value / par value', 'ノミナル / パー', '額面'],
            ['issued (allotted) share capital', 'イシュード / アロッティド', '発行済株式資本'],
            ['called-up share capital', 'コールド アップ', '払込請求済株式資本'],
            ['paid-up share capital', 'ペイド アップ', '払込済株式資本'],
            ['uncalled capital', 'アンコールド', '未請求の資本'],
            ['reserve capital', 'リザーブ', '留保資本（清算時だけ請求できる）'],
            ['loan capital', 'ローン', '借入資本'],
            ['authorised share capital', 'オーソライズド', '授権資本（現在は不要）'],
            ['call', 'コール', '払込みの請求（会社が株主に求める）'],
            ['liquidator', 'リクイデイター', '清算人（清算で会社のために未払い分を請求する）']
          ]
        }
      ],
      quiz: [
        { q: '額面 $0.50 の株式 300,000株を額面で発行した。会社は1株 $0.40 の払込みを請求した。20,000株の株主だけが1株 $0.25 しか払っておらず、ほかは全額払った。払込済株式資本（paid-up share capital）はいくら？', type: 'number', answer: 117000, unit: '$', explain: '払込請求済は 300,000 × $0.40 ＝ $120,000。未払いは 20,000 × ($0.40 − $0.25) ＝ $3,000。払込済は $120,000 − $3,000 ＝ $117,000。' },
        { q: 'Shares in a company are partly paid. To whom is a shareholder liable for the amount unpaid on the shares?', choices: ['The company\'s creditors', 'The directors personally', 'The company', 'The Registrar of Companies'], answer: 2, explain: '未払い分の責任は会社に対するもので、会社の財産に払い込む義務。債権者は株主を直接訴えられない（お金は会社の財産を通して債権者に回る）。取締役は会社の名前で請求するだけで、取締役個人に払うのではない。登記所（Registrar）は記録を受け取るだけ。' },
        { q: 'A company is in insolvent liquidation. Some of its shares are partly paid. Who will call up the unpaid amount from the shareholders?', choices: ['The liquidator, acting for the company', 'The company\'s creditors, each for its own debt', 'The directors, at a board meeting', 'The Registrar of Companies'], answer: 0, explain: '清算では清算人が会社の名前で未払い分を請求し、集めたお金を会社の財産に加えて債権者に分ける（Insolvency Act 1986 s74）。債権者が個別に取り立てることはできない。清算人が選ばれると取締役の権限は止まるので、取締役は請求しない。' },
        { q: 'A shareholder holds 5,000 ordinary shares of $1 each, issued at par, on which $0.60 per share has been paid. The company goes into insolvent liquidation. What is the maximum further amount the shareholder can be required to pay?', choices: ['$3,000', '$2,000', '$5,000', 'Nothing, because the shareholder has limited liability'], answer: 1, explain: '責任の上限は未払いの分: 5,000 × ($1 − $0.60) ＝ $2,000。有限責任は「責任ゼロ」ではなく「未払い分まで」。$3,000 は払った額、$5,000 は額面の合計。' },
        { q: '公開会社（plc）が額面 $1 の株式を1株 $1.40 で割り当てる。割当てのときに最低限払い込まれていなければならない1株あたりの額は？', type: 'number', answer: 0.65, unit: '$', explain: 's586: 額面の4分の1以上とプレミアムの全額。$1 × 1/4 ＝ $0.25、プレミアム $0.40。合計 $0.65。' },
        { q: 'Companies Act 2006 のもとでの授権資本（authorised share capital）について正しいのは？', choices: ['すべての会社は定款で授権資本を定めなければならない', '授権資本は払込済株式資本と同じ意味である', '公開会社だけは授権資本の上限まで必ず株式を発行しなければならない', '会社は授権資本を定める必要がない。古い会社では定款の制限として残っていることがある'], answer: 3, explain: '2006年法で授権資本の仕組みはなくなった。昔の会社の上限は、定款による割当ての制限として扱われる。授権資本は「発行できる上限」で、払込済とは別。' }
      ]
    },
    {
      id: 'B064',
      no: 64,
      title: '株式の種類：普通株と優先株',
      goal: '普通株と優先株の権利の違い、優先株についての推定（累積的・非参加的など）、償還株式のルールを説明し、累積配当を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(b)'],
      slides: [
        {
          title: '指定席と自由席',
          paras: ['ライブのチケットに、指定席と自由席がある。指定席は席が約束されているが、前に出て盛り上がる自由はない。自由席は保証がないが、うまくいけば一番前に行ける。', '優先株は指定席、普通株は自由席に近い。優先株は決まった配当を先にもらえる代わりに、上振れの分け前は少ない。']
        },
        {
          title: '種類株（class of shares）とは',
          paras: ['会社は、権利の違う株式を何種類も発行できる。付いている権利がすべての点で同じ株式が、1つの種類（class）になる（Companies Act 2006 s629）。', '権利の中身は、主に定款（articles）と発行の条件で決まる。法律は、書いていないときの「推定」を判例で補っている。', '中心は普通株と優先株。ほかに、議決権のない普通株（non-voting shares）や、普通株に決まった額の配当が出た後でしか配当を受けない劣後株（deferred shares）もある。']
        },
        {
          title: '普通株と優先株の比べ方',
          table: { caption: '典型的な権利（定款で変えられる）', head: ['項目', '普通株 ordinary', '優先株 preference'], rows: [['配当', '優先配当の後の残りから。率は決まっていない', '決まった率で先に受け取る'], ['議決権', 'ふつうある', 'ふつうない（定款しだい）'], ['清算時の資本の返還', '最後。残った財産を全部受け取る', '定款で優先とされていれば先に、額面まで'], ['追加の配当・残余財産', '受け取る', '権利が書かれていれば、それ以上はない'], ['リスクとリターン', '高い', '低い']] }
        },
        {
          title: '優先株についての推定（定款に書いていないとき）',
          list: ['累積的（cumulative）と推定する。払われなかった年の配当は翌年以降に繰り越す（Webb v Earle, 1875）', '配当の権利が書かれていれば、それ以上の配当には参加しない（Will v United Lankat Plantations, 1914）', '清算で資本を返した後の余りにも参加しない（Scottish Insurance v Wilsons & Clyde Coal, 1949）', '資本の返還の優先は、はっきり書かれているときだけ。書いていなければ普通株と同じ順位'],
          after: '追加の配当に参加できる優先株を参加的優先株（participating preference shares）という。'
        },
        {
          title: '例題: 累積的優先株の配当',
          example: {
            problem: 'Kaede Ltd は、額面 $1 の6%累積的優先株 100,000株と、普通株 500,000株を発行している。20X1年と20X2年は配当がなかった。20X3年、取締役は分配可能利益から配当の総額 $40,000 を宣言した。優先株と普通株はそれぞれいくら受け取る？',
            steps: ['優先配当1年分: 100,000 × $1 × 6% ＝ $6,000', '累積的なので、20X1年・20X2年の未払い分も先に払う: $6,000 × 3年 ＝ $18,000', '普通株へ: $40,000 − $18,000 ＝ $22,000', '普通株1株あたり: $22,000 ÷ 500,000 ＝ $0.044', '比較: 非累積的なら優先株は20X3年分の $6,000 だけ。普通株は $34,000'],
            answer: '優先株 $18,000、普通株 $22,000（1株 $0.044）'
          }
        },
        {
          title: '配当は「宣言」されないともらえない',
          list: ['優先株でも、配当は会社の借金ではない。分配可能利益があり、配当が宣言（declare）されて初めて請求できる', '累積的なら未払い分（arrears）は消えずに積み上がり、普通株への配当より先に払われる', '清算のとき、宣言されていない未払いの累積配当は、定款に定めがなければ受け取れない']
        },
        {
          title: '償還株式（redeemable shares）',
          paras: ['決まった日や、会社・株主の選択で、会社が買い戻すことを前提に発行する株式。優先株でも普通株でもよい（s684）。'],
          list: ['私会社: 定款で禁止・制限していなければ発行できる', '公開会社: 定款が認めているときだけ発行できる', '償還株式以外の株式が1株もない状態では発行できない', '償還は全額払込済の株式だけ。財源は原則、分配可能利益か新株発行の手取り（私会社は資本からも可。B073）']
        },
        {
          title: 'なぜ？ 優先株に推定がある理由',
          paras: ['優先株主は「安定した配当」と引換えに、議決権や上振れを手放した投資家。だから配当は累積的と推定して守る一方、決められた権利を超える分け前は与えないと推定する。', '日本の感覚では「優先」と聞くと何でも先にもらえそうだが、英国法では、優先されるのは書かれた権利だけ。資本の返還の優先も、書いていなければない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「優先株は配当を必ずもらえる」は誤り。利益がなく配当が宣言されなければ、優先株主も会社に請求できない。累積的なら繰り越されるだけ。また、累積的かどうか書いていなければ「非累積的」ではなく「累積的」と推定する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['普通株は議決権と残りの全部、優先株は決まった配当を先に。ほかの権利は定款しだい', '優先株は、書いていなければ累積的で、追加の配当や余りには参加しないと推定する', '償還株式は、償還株式以外の株式がないと発行できず、公開会社は定款の許可が必要']
        },
        {
          title: '英単語',
          words: [
            ['ordinary shares', 'オーディナリー', '普通株'],
            ['preference shares', 'プレファレンス', '優先株'],
            ['cumulative', 'キュミュラティブ', '累積的（未払い配当を繰り越す）'],
            ['participating', 'パーティシペイティング', '参加的（追加の分け前を受ける）'],
            ['arrears of dividend', 'アリアーズ', '未払いの累積配当'],
            ['redeemable shares', 'リディーマブル', '償還株式'],
            ['class rights', 'クラス ライツ', '種類株式に付いた権利'],
            ['surplus assets', 'サープラス', '清算で残った財産']
          ]
        }
      ],
      quiz: [
        { q: '額面 $0.50 の8%累積的優先株 200,000株がある。3年間配当がなく、4年目に取締役が配当の総額 $50,000 を宣言した。普通株主が受け取る総額は？', type: 'number', answer: 18000, unit: '$', explain: '1年分: 200,000 × $0.50 × 8% ＝ $8,000。未払い3年分と4年目の分で $8,000 × 4 ＝ $32,000 を先に優先株へ。普通株へは $50,000 − $32,000 ＝ $18,000。' },
        { q: 'The articles of Lime Ltd state that its preference shares carry a dividend of 7% per year, but say nothing about whether the dividend is cumulative. No dividend was paid last year. Which of the following is correct?', choices: ['The preference shares are presumed to be non-cumulative, so last year\'s dividend is lost', 'The preference shares are presumed to be cumulative, so last year\'s dividend must be paid before any ordinary dividend', 'The preference shareholders can sue the company for last year\'s dividend as a debt', 'The preference shares automatically become participating shares'], answer: 1, explain: '書いていなければ累積的と推定する（Webb v Earle）。ただし配当は借金ではないので、宣言されていない配当を訴えて取ることはできない。' },
        { q: 'On a winding up, preference shareholders are entitled to a return of capital in priority to ordinary shareholders. The articles say nothing more. After all capital has been repaid, there is a surplus. Which of the following is correct?', choices: ['The surplus is shared equally between preference and ordinary shareholders', 'The surplus goes to the preference shareholders first', 'The surplus must be paid to the creditors', 'The surplus goes to the ordinary shareholders only'], answer: 3, explain: '資本の返還の権利が定められている優先株は、余りに参加しないと推定する（Scottish Insurance v Wilsons & Clyde Coal）。債権者は資本の返還より前にすでに払われている。' },
        { q: '償還株式（redeemable shares）について正しいのは？', choices: ['公開会社は、定款に定めがなくても償還株式を発行できる', '償還株式は優先株でなければならない', '償還株式以外の株式が1株もない状態では、償還株式を発行できない', '一部しか払い込まれていない株式も償還できる'], answer: 2, explain: 's684(4)。公開会社は定款の許可が必要（s684(3)）。償還株式は普通株でもよい。償還できるのは全額払込済の株式だけ（s686）。' },
        { q: '6%非累積的優先株（額面 $1、100,000株）について、去年は配当がなかった。今年、配当の総額 $40,000 が宣言された。優先株主が今年受け取るのは？', choices: ['$6,000', '$12,000', '$40,000', '$0'], answer: 0, explain: '非累積的なので去年の分は消える。今年の分 100,000 × $1 × 6% ＝ $6,000 だけ。$12,000 は累積的と取り違えた額。' }
      ]
    },
    {
      id: 'B065',
      no: 65,
      title: '自己株式（treasury shares）',
      goal: '会社が自社の株式を買い戻して金庫株として持つ条件、持っている間の制限、売却・消却したときの扱いを説明し、計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(b)'],
      slides: [
        {
          title: '会員権を買い取って金庫にしまう',
          paras: ['会員制のゴルフクラブが、退会したい人の会員権を買い取った。破り捨てずに金庫にしまっておき、新しい入会希望者が来たら売る。', 'ただ、金庫の中の会員権でクラブ自身が総会に投票したり、自分に配当を払ったりはしない。会社の自己株式（treasury shares、金庫株）も同じ考え方。']
        },
        {
          title: '自社の株を買うのは原則禁止',
          paras: ['会社は原則として自社の株式を取得できない（s658、Trevor v Whitworth, 1887 の原則）。株主にお金を返すと、債権者のための資本が減るから。', '例外として、Companies Act 2006 Part 18 の条件を守れば、自社の株式を買い戻せる（purchase of own shares）。買い戻す株式は全額払込済のものに限り、代金は買取りのときに払う。']
        },
        {
          title: '金庫株にできるのは、分配可能利益で買ったときだけ',
          table: { caption: '買戻しの財源と、その後', head: ['財源', '買い戻した株式'], rows: [['分配可能利益（distributable profits）', '金庫株として持てる（s724）。消却してもよい'], ['新株発行の手取り', '消却する'], ['資本（私会社だけ可）', '消却する']] },
          after: '分配可能利益で買うのは、配当を払うのと同じく、債権者のための資本を減らさないため。'
        },
        {
          title: '金庫株の入口と出口',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="分配可能利益で買い戻した株式を金庫株として持ち、売却・従業員株式制度への移転・消却のどれかに進む図" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">金庫株の入口と出口</text><rect x="20" y="44" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="69" text-anchor="middle" fill="var(--ink)">分配可能利益で自社の株式を買い戻す</text><line x1="220" y1="84" x2="220" y2="104" stroke="var(--edge)" stroke-width="1.5"/><rect x="60" y="104" width="320" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="128" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">金庫株として保有</text><text x="220" y="150" text-anchor="middle" font-size="14" fill="var(--ink)">議決権・配当なし（s726）</text><line x1="220" y1="160" x2="82" y2="196" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="160" x2="220" y2="196" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="160" x2="358" y2="196" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="196" width="124" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="221" text-anchor="middle" fill="var(--ink)">現金で売る</text><rect x="158" y="196" width="124" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="221" text-anchor="middle" fill="var(--ink)">従業員制度へ</text><rect x="296" y="196" width="124" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="358" y="221" text-anchor="middle" fill="var(--ink)">消却する</text><text x="82" y="260" text-anchor="middle" font-size="14" fill="var(--quiet)">超過分→剰余金</text><text x="220" y="260" text-anchor="middle" font-size="14" fill="var(--quiet)">株式制度に使う</text><text x="358" y="260" text-anchor="middle" font-size="14" fill="var(--quiet)">額面→CRRへ</text></svg>`,
          caption: '売却・移転（s727）と消却（s729）はいつでもできる。持ち続けてもよい。'
        },
        {
          title: '金庫株を持っている間のルール（s726）',
          list: ['会社は、金庫株に付いた議決権などの権利を一切使えない。使っても無効', '金庫株には配当も、ほかの分配（清算時を含む）もしない', '例外: 全額払込済のボーナス株（bonus shares）は割り当てられる。それも金庫株になる', '会社は株主名簿に、その株式の持ち主として載る（s724）']
        },
        {
          title: '売ったとき・消却したときのお金の扱い',
          list: ['売却代金が買った値段以下: 代金の全額を実現利益（realised profit）として扱う。分配可能利益に戻る（s731）', '売却代金が買った値段を超える: 買った値段までが実現利益。超えた分は株式払込剰余金（share premium）へ', '消却: 株式資本が額面の分だけ減る（s729）。同じ額を資本償還準備金（capital redemption reserve、CRR）に移す（s733）']
        },
        {
          title: '例題: 買って、一部売って、残りを消却',
          example: {
            problem: 'Hinoki plc は額面 $1 の自社の普通株 10,000株を1株 $3 で、分配可能利益から買い戻し、金庫株にした。後で 6,000株を1株 $4 で売り、残り 4,000株を消却した。それぞれのお金の扱いは？',
            steps: ['買戻し: 10,000 × $3 ＝ $30,000。分配可能利益から払う', '売却代金: 6,000 × $4 ＝ $24,000', '売った株の買った値段: 6,000 × $3 ＝ $18,000 → 実現利益として扱う', '超えた分: $24,000 − $18,000 ＝ $6,000 → 株式払込剰余金へ', '消却: 4,000 × $1 ＝ $4,000 だけ株式資本が減り、$4,000 を資本償還準備金へ'],
            answer: '実現利益 $18,000、株式払込剰余金 $6,000、株式資本 −$4,000 と資本償還準備金 ＋$4,000'
          }
        },
        {
          title: 'なぜ？ 議決権も配当もない理由',
          paras: ['金庫株に議決権があると、会社のお金で買った票を取締役が使えてしまう。株主が取締役を見張る仕組みが崩れる。配当も、会社が自分に払うだけで意味がない。', '一方で、消却せずに持っておけるので、必要なときに売って資金を戻したり、従業員の株式制度に回したりできる。新株を一から発行するより手早い。ただし売却は新株の割当てと同じく、既存株主の先買権（B067）の対象になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「金庫株にも議決権がある」「定足数や3/4の計算に数える」は誤り。権利は一切使えず、種類株主の同意の計算などでも除く。また、新株発行の手取りや資本で買い戻した株式は金庫株にできず、消却する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['分配可能利益で買い戻した株式だけを金庫株として持てる', '金庫株には議決権も配当もない。例外はボーナス株の割当て', '売却は買った値段まで実現利益、超過分は剰余金。消却は額面を資本償還準備金へ']
        },
        {
          title: '英単語',
          words: [
            ['treasury shares', 'トレジャリー', '自己株式（金庫株）'],
            ['purchase of own shares', '', '自己株式の買戻し'],
            ['distributable profits', 'ディストリビュータブル', '分配可能利益'],
            ['cancel', 'キャンセル', '消却する'],
            ['capital redemption reserve', 'リデンプション', '資本償還準備金'],
            ['realised profit', 'リアライズド', '実現利益'],
            ['employees\' share scheme', 'スキーム', '従業員株式制度']
          ]
        }
      ],
      quiz: [
        { q: '会社は自社の株式 20,000株を1株 $2.50 で、分配可能利益から買い戻して金庫株にした。後でそのうち 8,000株を1株 $3.20 で売った。株式払込剰余金（share premium）に移す額は？', type: 'number', answer: 5600, unit: '$', explain: '売却代金 8,000 × $3.20 ＝ $25,600。買った値段 8,000 × $2.50 ＝ $20,000 は実現利益。超えた $5,600 を剰余金へ（s731）。' },
        { q: 'Which of the following statements about treasury shares is correct?', choices: ['Dividends are paid on them to the company and added to its profits', 'They count towards the quorum at a general meeting', 'The company cannot exercise any voting rights attached to them', 'They may be held for a maximum of one year before they must be cancelled'], answer: 2, explain: 's726: 権利は一切使えず、配当もない。定足数にも数えない。保有の期限はなく、いつでも売却・消却できる。' },
        { q: 'A company wishes to purchase its own shares and hold them in treasury. Out of which of the following must the purchase be financed?', choices: ['The proceeds of a fresh issue of shares', 'Distributable profits', 'Capital, if the company is a private company', 'The share premium account'], answer: 1, explain: '金庫株にできるのは分配可能利益で買った株式だけ（s724）。新株発行の手取りや資本で買った株式は消却する。' },
        { q: '金庫株の額面 $1 の株式 4,000株を消却した。正しい扱いは？', choices: ['株式資本が $4,000 減り、$4,000 を分配可能利益に加える', '株式資本は変わらず、金庫株の勘定だけが消える', '消却するには裁判所の確認が必要である', '株式資本が $4,000 減り、$4,000 を資本償還準備金に移す'], answer: 3, explain: 's729 で額面分だけ資本が減り、s733 で同額を資本償還準備金へ。減った資本を配当に回せるようにはしない。消却に裁判所の確認はいらない。' },
        { q: '金庫株 5,000株（買った値段は1株 $4）を、1株 $3.60 で全部売った。正しい扱いは？', choices: ['代金 $18,000 の全額を実現利益として扱う', '$20,000 を実現利益、損失 $2,000 は剰余金から引く', '代金 $18,000 の全額を株式払込剰余金に移す', '買った値段を下回る売却は禁止されている'], answer: 0, explain: '代金 5,000 × $3.60 ＝ $18,000 は買った値段 $20,000 以下なので、全額を実現利益として扱う（s731(2)）。剰余金へ移すのは、買った値段を超えたときだけ。' }
      ]
    },
    {
      id: 'B066',
      no: 66,
      title: '種類株主の権利の変更',
      goal: '種類株主の権利を変えるための同意の手続、反対した株主の裁判所への異議申立て、何が「変更」に当たるかを説明し、必要な株数を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(b)'],
      slides: [
        {
          title: 'マンションの店舗区画の権利',
          paras: ['マンションの1階の店舗区画だけに「看板を出す権利」が認められている。住民全体の多数決だけでこの権利を取り上げられたら、店舗のオーナーはたまらない。', 'そこで、その権利を変えるには店舗区画のオーナーたち自身の同意も必要にする。会社の種類株主の権利（class rights）の保護も同じ考え方。']
        },
        {
          title: 'なぜ特別な手続がいるのか',
          paras: ['優先株の配当率などの権利は、ふつう定款に書いてある。定款は特別決議（75%）で変えられる（B060）。普通株主が多数なら、優先株主の権利を勝手に削れてしまう。', 'それを防ぐため、Companies Act 2006 s630 は、その種類の株主自身の同意を求めている。']
        },
        {
          title: '変更の手続（s630・s633）',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="定款に手続があればそれに従い、なければ種類株主の書面同意か特別決議が必要。その後、15%以上の非賛成株主は21日以内に裁判所へ異議を申し立てられる" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">種類株主の権利を変える手続</text><rect x="20" y="44" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="72" text-anchor="middle" fill="var(--ink)">定款に変更の手続があるか？</text><line x1="115" y1="88" x2="115" y2="128" stroke="var(--edge)" stroke-width="1.5"/><line x1="325" y1="88" x2="325" y2="128" stroke="var(--edge)" stroke-width="1.5"/><text x="125" y="114" fill="var(--quiet)">ある</text><text x="335" y="114" fill="var(--quiet)">ない</text><rect x="20" y="128" width="190" height="90" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="166" text-anchor="middle" fill="var(--ink)">定款の手続に</text><text x="115" y="190" text-anchor="middle" fill="var(--ink)">従う</text><rect x="230" y="128" width="190" height="90" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="154" text-anchor="middle" font-size="14" fill="var(--ink)">書面同意：額面の3/4以上</text><text x="325" y="177" text-anchor="middle" font-size="14" fill="var(--quiet)">または</text><text x="325" y="200" text-anchor="middle" font-size="14" fill="var(--ink)">種類株主総会で特別決議</text><line x1="115" y1="218" x2="115" y2="250" stroke="var(--edge)" stroke-width="1.5"/><line x1="325" y1="218" x2="325" y2="250" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="250" width="400" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="276" text-anchor="middle" fill="var(--ink)">賛成しなかった15%以上の株主は</text><text x="220" y="300" text-anchor="middle" fill="var(--ink)">21日以内に裁判所へ異議（s633）</text></svg>`,
          caption: '定款がより厳しい条件を定めていれば、それにも従う（s630(3)）'
        },
        {
          title: '同意の数え方の細かいルール',
          list: ['書面同意: その種類の発行済株式全体の額面の 3/4 以上。出席者や株主の人数ではない。金庫株は除く', '種類株主総会（class meeting）: 特別決議＝投じられた票の 75% 以上', '種類株主総会の定足数: その種類の額面の 1/3 以上を持つ2人。延会では1人でよい（s334）', '定款の「変更の手続」の条項を変えること自体も変更に当たる（s630(5)）。権利をなくす（abrogation）ことも含む（s630(6)）']
        },
        {
          title: '反対した株主の異議申立て（s633）',
          list: ['申し立てられる人: その種類の発行済株式の合計 15% 以上を持ち、同意も賛成票もしなかった株主（金庫株は除く）', '期限: 同意や決議の日から 21 日以内。代表者に書面で任せてもよい', '申し立てられると、裁判所が確認するまで変更は効力がない', '裁判所は、その種類の株主を不公正に害する（unfairly prejudice）と認めれば変更を取り消す。そうでなければ確認する']
        },
        {
          title: '例題: 必要な株数を数える',
          example: {
            problem: 'Sumire plc は額面 $0.50 の7%優先株 400,000株を発行している（金庫株なし）。配当率を5%に下げたい。定款に変更の手続はない。(1) 書面同意で進めるには何株分の同意が必要？ (2) 290,000株分の同意しか集まらなかった。足りる？ (3) 代わりに種類株主総会を開いた。240,000株分が出席して投票（poll）し、賛成 190,000株、反対 50,000株。決議は成立？ (4) 誰が裁判所に異議を申し立てられる？',
            steps: ['額面の合計: 400,000 × $0.50 ＝ $200,000。3/4 は $150,000 ＝ 300,000株分', '(2) 290,000 ÷ 400,000 ＝ 72.5%。3/4 に足りない', '(3) 定足数: 額面の1/3（$66,667 ＝ 133,334株分）以上を持つ2人以上。240,000株分の出席で満たす', '(3) 賛成 190,000 ÷ 投票 240,000 ＝ 79.2%。75% 以上なので特別決議は成立', '(4) 15% は 400,000 × 15% ＝ 60,000株。反対の 50,000株（12.5%）だけでは足りない', '(4) 投票しなかった 160,000株の株主も「賛成していない」ので合算できる。10,000株分以上が加われば、21日以内に申し立てられる'],
            answer: '(1) 300,000株分 (2) 足りない (3) 成立 (4) 賛成しなかった株主の合計 60,000株以上で、21日以内'
          }
        },
        {
          title: '何が「変更」に当たるか',
          paras: ['裁判所は「変更」を狭く読む。権利そのもの（rights）が変わるときだけ変更で、権利の値打ち（enjoyment）が下がるだけなら変更ではない。'],
          table: { caption: '典型例', head: ['出来事', '変更に当たるか'], rows: [['優先配当の率を下げる', '当たる'], ['議決権や清算時の優先をなくす', '当たる'], ['普通株主に新しい株式を発行し、優先株主の議決力が薄まる（White v Bristol Aeroplane, 1953）', '当たらない'], ['他の株式を分割して票数が増え、相対的に議決力が下がる（Greenhalgh v Arderne Cinemas, 1946）', '当たらない']] }
        },
        {
          title: 'なぜ？ 権利と値打ちを分ける理由',
          paras: ['会社は新株の発行などで日々資本を動かす。値打ちに影響するたびに種類株主の同意がいるなら、会社は身動きがとれない。だから、書かれた権利そのものだけを守る。', '日本の感覚では「不利になるなら変更だ」と考えがちだが、英国法ではそうならない。投資家は、定款に「同順位の株式の発行も変更とみなす」などと書いて自分を守る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '書面同意の3/4を「出席者の3/4」や「株主の人数の3/4」で数えるのは誤り。その種類の発行済株式全体の額面で数える。種類株主総会の特別決議は投票の75%。異議申立ての15%には、反対票だけでなく投票しなかった株主も入る。期限は21日。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['定款の手続、なければ書面で額面の3/4以上の同意か、種類株主総会の特別決議（s630）', '賛成しなかった15%以上の株主は、21日以内に裁判所へ。不公正に害するなら取り消される（s633）', '変更は権利そのものが変わるときだけ。値打ちが下がるだけでは当たらない']
        },
        {
          title: '英単語',
          words: [
            ['variation of class rights', 'ヴァリエーション', '種類株主の権利の変更'],
            ['consent in writing', 'コンセント', '書面による同意'],
            ['separate general meeting of the holders of that class', '', '種類株主総会'],
            ['three-quarters in nominal value', 'スリー クォーターズ', '額面で4分の3'],
            ['special resolution', 'スペシャル レゾリューション', '特別決議（75%）'],
            ['unfairly prejudice', 'アンフェアリー プレジュディス', '不公正に害する'],
            ['abrogation', 'アブロゲイション', '（権利の）廃止']
          ]
        }
      ],
      quiz: [
        { q: 'ある種類株式は額面 $0.20 の 500,000株（金庫株なし）。定款に変更の手続はない。書面同意で権利を変えるとき、最低何株分の株主の同意が必要？', type: 'number', answer: 375000, unit: '株', explain: '額面の合計 500,000 × $0.20 ＝ $100,000。3/4 は $75,000。$75,000 ÷ $0.20 ＝ 375,000株分。' },
        { q: 'The articles of Wisteria Ltd contain no provision for the variation of class rights. Under the Companies Act 2006, how may the rights attached to its preference shares be varied?', choices: ['By a special resolution of all the members of the company at a general meeting', 'By an ordinary resolution at a separate meeting of preference shareholders', 'Only with the unanimous consent of the preference shareholders', 'With the written consent of holders of at least three-quarters in nominal value of the issued preference shares, or a special resolution at a separate meeting of preference shareholders'], answer: 3, explain: 's630(4)。会社全体の特別決議だけでは足りない（それでは普通株主だけで決められてしまう）。普通決議でも全員一致でもない。' },
        { q: 'The rights of a class of shares have been varied under section 630. Which of the following may apply to the court to have the variation cancelled?', choices: ['Holders of at least 10% of the issued shares of the class, within 28 days', 'Holders of at least 15% of the issued shares of the class who did not consent to or vote for the variation, within 21 days', 'Any shareholder of the class who voted against, within 21 days', 'Holders of at least 25% of the issued shares of the class, within 14 days'], answer: 1, explain: 's633: 15% 以上、賛成していない株主、21日以内。1人の反対者だけでは申し立てられない。' },
        { q: '会社が普通株主にボーナス株として新しい株式を発行した。既存の優先株主の議決力は相対的に薄まったが、優先株の権利の文言は変わっていない。種類株主の権利の変更に当たる？', choices: ['当たる。優先株主に不利な影響があるから', '当たる。新株の発行は常に変更とみなされるから', '当たらない。権利の値打ちに影響しただけで、権利そのものは変わっていない', '当たらない。ボーナス株の発行には株主総会の決議がいらないから'], answer: 2, explain: 'White v Bristol Aeroplane（1953）。不利になっても権利そのものが変わらなければ変更ではない。定款で「変更とみなす」と書いてあれば別。' },
        { q: '優先株 260,000株（金庫株なし）の権利が変更された。裁判所に異議を申し立てるには、賛成しなかった株主が合計で最低何株を持っている必要がある？', type: 'number', answer: 39000, unit: '株', explain: '260,000 × 15% ＝ 39,000株。反対票の株主に、投票しなかった株主を合算してよい。' },
        { q: '優先株の種類株主総会で、120,000株分の株主が投票（poll）した。特別決議を成立させるのに必要な最低の賛成株数は？', type: 'number', answer: 90000, unit: '株', explain: '特別決議は投票の 75% 以上。120,000 × 75% ＝ 90,000株。書面同意と違い、全体ではなく投票された数で数える。' }
      ]
    }
  ],
  cards: [
    { id: 'B063-1', lesson: 'B063', q: '発行済・払込請求済・払込済の違いは？', a: '発行済＝割り当てた額面の合計、払込請求済＝請求した額、払込済＝実際に払われた額' },
    { id: 'B063-2', lesson: 'B063', q: '未請求の資本（uncalled capital）の求め方は？', a: '発行済 − 払込請求済' },
    { id: 'B063-3', lesson: 'B063', q: '留保資本（reserve capital）とは？', a: '未請求のうち、特別決議で清算のときだけ請求すると決めた分' },
    { id: 'B063-4', lesson: 'B063', q: '有限責任の株主があと払う責任の上限は？', a: '自分の株式の未払いの分（額面とプレミアムのうち払っていない額）' },
    { id: 'B063-5', lesson: 'B063', q: '公開会社が株式を割り当てるとき、最低限払い込まれている必要がある額は？（s586）', a: '額面の4分の1以上とプレミアムの全額' },
    { id: 'B063-6', lesson: 'B063', q: '公開会社の最低資本（authorised minimum）は？（s763）', a: '割当済みの株式資本の額面が £50,000 以上' },
    { id: 'B063-7', lesson: 'B063', q: '未払いの株式資本は、だれに対する責任？清算ではだれが請求する？（Unpaid share capital: owed to whom / who collects in liquidation?）', a: '会社に対する責任。清算では清算人が会社の名前で請求する' },
    { id: 'B064-1', lesson: 'B064', q: '定款に書いていないとき、優先株の配当は累積的？非累積的？', a: '累積的と推定する（Webb v Earle）' },
    { id: 'B064-2', lesson: 'B064', q: '権利が定められた優先株は、追加の配当や清算時の余りに参加できる？', a: '参加しないと推定する。参加させるなら定款に書く（参加的優先株）' },
    { id: 'B064-3', lesson: 'B064', q: '優先株主は、宣言されていない配当を会社に請求できる？', a: 'できない。配当は宣言されて初めて請求でき、累積的なら繰り越されるだけ' },
    { id: 'B064-4', lesson: 'B064', q: '償還株式を発行できない状態は？', a: '償還株式以外の株式が1株もないとき（s684(4)）' },
    { id: 'B064-5', lesson: 'B064', q: '公開会社と私会社で、償還株式の発行の条件はどう違う？', a: '公開会社は定款の許可が必要。私会社は定款が禁止・制限していなければ可' },
    { id: 'B064-6', lesson: 'B064', q: '6%累積的優先株（額面$1、10万株）、2年無配の後の年に先に払う額は？', a: '$6,000 × 3年 ＝ $18,000' },
    { id: 'B065-1', lesson: 'B065', q: '買い戻した株式を金庫株にできる条件は？', a: '分配可能利益で買い戻したとき（s724）' },
    { id: 'B065-2', lesson: 'B065', q: '金庫株に議決権や配当はある？', a: 'ない（s726）。例外は全額払込済のボーナス株の割当て' },
    { id: 'B065-3', lesson: 'B065', q: '金庫株を買った値段より高く売ったときの扱いは？', a: '買った値段までが実現利益、超えた分は株式払込剰余金へ（s731）' },
    { id: 'B065-4', lesson: 'B065', q: '金庫株を消却したときの扱いは？', a: '株式資本が額面分減り、同額を資本償還準備金へ移す' },
    { id: 'B065-5', lesson: 'B065', q: 'なぜ金庫株に議決権がない？', a: '会社のお金で買った票を取締役が使えてしまうから' },
    { id: 'B066-1', lesson: 'B066', q: '定款に手続がないとき、種類株主の権利を変える方法は？（s630）', a: '額面の3/4以上の書面同意か、種類株主総会の特別決議' },
    { id: 'B066-2', lesson: 'B066', q: '書面同意の3/4は何で数える？', a: 'その種類の発行済株式全体の額面（金庫株を除く）' },
    { id: 'B066-3', lesson: 'B066', q: '変更に異議を申し立てられる人と期限は？（s633）', a: '賛成しなかった15%以上の株主。21日以内に裁判所へ' },
    { id: 'B066-4', lesson: 'B066', q: '裁判所が変更を取り消すのはどんなとき？', a: 'その種類の株主を不公正に害する（unfairly prejudice）と認めたとき' },
    { id: 'B066-5', lesson: 'B066', q: '新株発行で優先株主の議決力が薄まるのは、権利の変更？', a: '当たらない。値打ちが下がるだけ（White v Bristol Aeroplane）' },
    { id: 'B066-6', lesson: 'B066', q: '種類株主総会の定足数は？（s334）', a: '額面の1/3以上を持つ2人。延会では1人' }
  ]
});
