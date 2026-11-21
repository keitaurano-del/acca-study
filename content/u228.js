(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 228,
  part: 11,
  partTitle: '総合演習（全範囲）',
  lessons: [
    {
      id: 'B117',
      no: 117,
      title: '総合演習①：法体系と国際取引',
      goal: '第1〜3部（法と法体系、CISG、インコタームズと貿易書類）を混ぜた本番形式の問題を、1問2分半以内で解き、代金減額・損害賠償・利息を計算できるようになる',
      minutes: 25,
      recall: true,
      exam: 'both',
      outcomes: ['K3:A1(a)', 'K3:A1(b)', 'K3:A1(c)', 'K3:A1(d)', 'K3:A2(a)', 'K3:A2(b)', 'K3:A2(c)', 'K3:B1(a)', 'K3:B1(b)', 'K3:B2(a)', 'K3:B2(b)', 'K3:B2(c)', 'K3:B2(d)', 'K3:C1(a)', 'K3:C2(a)', 'K3:C2(b)'],
      slides: [
        {
          title: '本番と同じ形で解く',
          paras: ['運転免許の学科試験のように、K3 の本番は短い問題が続く。1問2点が50問、時間は2時間。部の順番には出ず、全部の部から混ざって出る。', '1問にかけられる時間は 120分 ÷ 50問 ＝ 2.4分（2分24秒）。このレッスンでは第1〜3部を混ぜて、本番の速さで解く練習をする。'],
          note: { kind: 'tip', text: '迷った問題は印を付けて先へ進み、最後に戻る。1問に5分かけると、ほかの問題の時間がなくなる。' }
        },
        {
          title: '第1部の要点（法と法体系）',
          table: { caption: 'A1・A2 で問われること', head: ['テーマ', '押さえること'], rows: [
            ['法の定義（A1(a)）', '国家が作るか認め、強制できるルール。公法と私法。刑事の立証は beyond reasonable doubt、民事は balance of probabilities'],
            ['政治と法（A1(b)）', '政治体制が、誰がどう法を作るかと法の中身を決める。法の支配では政府も法に従う'],
            ['三権分立（A1(c)）', '立法・行政・司法。英国は議会主権で裁判所は法律を無効にできない。米国は違憲審査（Marbury v Madison）'],
            ['法の抵触（A2(a)）', '管轄・準拠法・判決の執行の3つの問い。国ごとの差が取引の障害になる'],
            ['条約とモデル法（A2(b)）', '条約は批准した国を拘束。モデル法はひな形で、各国が変えて国内法にする'],
            ['3つの機関（A2(c)）', 'UNCITRAL＝CISG・モデル法、ICC＝インコタームズ・UCP 600、UNIDROIT＝国際商事契約原則']
          ] }
        },
        {
          title: '3つの法体系（A1(d)）',
          table: { caption: '主な法源と特徴', head: ['法体系', '主な法源と特徴'], rows: [
            ['コモン・ロー（英国・米国など）', '判例と制定法。先例拘束（stare decisis）で ratio decidendi が後の事件を拘束。制定法が判例に優先'],
            ['シビル・ロー（フランス・ドイツ・日本など）', '体系的な法典（code）。判決は原則その事件だけを拘束。裁判官が主導する職権主義'],
            ['シャリーア法', 'コーラン → スンナ → イジュマー（学者の合意）→ キヤース（類推）。利息（riba）の禁止が商取引に影響']
          ] },
          after: '「civil law」は、刑事法に対する民事法の意味でも使う。問題文の文脈で読み分ける。'
        },
        {
          title: '今日の取引: 適用と成立（B1）',
          list: ['売主: Kaede Tools Co（大阪）。買主: Lyon Machines SA（フランス）。両国とも CISG の締約国', '物品は工場で使う切削工具。家庭用の除外（Art 2(a)）に当たらない → Art 1(1)(a) で適用', '2月1日 Lyon が申込み。2月3日 Kaede が「承諾。ただし支払は90日後」と返信 → 支払条件の変更は重要な変更で、反対申込み（Art 19）', '2月5日 Lyon の「了承」が Kaede に届く → 到達した時に成立（Art 18(2)・23）'],
          note: { kind: 'tip', text: '契約に書面は要らない（Art 11）。CISG を使いたくなければ、当事者が排除できる（Art 6）。' }
        },
        {
          title: '義務と救済（B2(a)(b)）',
          table: { caption: '売主と買主を並べて見る', head: ['項目', '売主', '買主'], rows: [
            ['基本の義務', '引渡し・書類の交付・所有権の移転（Art 30）。適合した物品（Art 35）', '代金の支払（請求は不要、Art 59）と引取り（Art 53・60）'],
            ['相手の違反への救済', '履行請求、付加期間（Art 63）、解除（Art 64）、損害賠償', '履行請求・代替品・修補、付加期間（Art 47）、解除（Art 49）、代金減額（Art 50）、損害賠償'],
            ['解除できるとき', '重大な違反、または付加期間内に払わない・引き取らない', '重大な違反、または付加期間内に引き渡さない']
          ] },
          after: '解除は相手への通知で行う（Art 26）。損害賠償はほかの救済と一緒に使える。'
        },
        {
          title: '共通の規定と危険（B2(c)(d)）',
          list: ['履行期前: 相手が重要な部分を果たさないと明らかなら停止できる（Art 71）。重大な違反が確実なら解除（Art 72）', '分割履行: 違反した回だけ解除が原則（Art 73）', '免責（Art 79）: 支配を超え、予見も回避もできない障害。免れるのは損害賠償だけ', '解除の効果: 未履行の義務が消え、受け取った物とお金を返す（Art 81）。手元の物品は保存する（Art 85〜88）', '危険: 運送を伴えば最初の運送人に渡した時（Art 67）。インコタームズを入れればそちらが優先（Art 6）']
        },
        {
          title: '例題1: 代金減額',
          example: {
            problem: 'Lyon への工具の代金は $60,000。届いた工具の一部が硬さの規格に合わない。引渡し時の価値は、実際の物品が $45,000、契約どおりなら $75,000。Lyon が代金減額（Art 50）を選ぶと、払う代金はいくら？',
            steps: ['比率: 実際の価値 ÷ 適合品の価値 ＝ $45,000 ÷ $75,000 ＝ 0.6', '減額後の代金: $60,000 × 0.6 ＝ $36,000', '減る額は $24,000。価値の差 $30,000 をそのまま代金から引く（$30,000 になる）のは誤り'],
            answer: '払う代金は $36,000'
          }
        },
        {
          title: '例題2: 損害賠償と利息',
          example: {
            problem: '別の注文（800個、1個 $50）を Kaede が期日に引き渡さず、Lyon は付加期間の後に解除した。Lyon は合理的な期間内に1個 $56 で800個を買い直し、予見できた追加費用 $600 がかかった。損害賠償は？ また Lyon が前の請求 $40,000 を73日遅れて払った場合、年5%の利息は？',
            steps: ['代替品を買ったので Art 75: ($56 − $50) × 800個 ＝ $4,800', 'Art 74 の予見できた追加費用を足す: $4,800 ＋ $600 ＝ $5,400', '利息（Art 78）: 利率は条約になく、契約や国内法で決まる。ここでは年5%', '$40,000 × 5% × 73 ÷ 365 ＝ $2,000 × 0.2 ＝ $400。利息は損害賠償とは別に請求できる'],
            answer: '損害賠償 $5,400、利息 $400'
          }
        },
        {
          title: '貿易の条件と書類（C1・C2）',
          list: ['CIF Le Havre: Le Havre は仕向港。危険は積出港（大阪）で本船の船上に置いた時に移る。運賃と保険は仕向港まで売主', 'CIF の保険: 代金の110%以上、協会貨物約款（C）相当。$60,000 なら $66,000 以上', '船荷証券（B/L）: 受取証・運送契約の証拠・権原証券。銀行は無故障の船積式を求める', '確認付き取消不能信用状: 発行銀行と確認銀行の両方が支払を約束。書類が厳格に一致すれば払う', '念書（letter of comfort）: ふつうは方針の表明で、保証のような法的な約束ではない'],
          after: 'なぜ？ 銀行は物品を見ずに書類だけで払う（UCP 600 Art 4・5）。物品の良し悪しは判断できず、売買の争いに巻き込まれると、信用状の速さと確実さがなくなるから。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '代金減額は差額ではなく比率で減らす。代替品を買ったら Art 75、買っていなければ Art 76（解除時の時価）。CIF の後の地名は仕向港で、危険が移る場所ではない。モデル法は条約と違い、そのままでは国を拘束しない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['1問2.4分。迷ったら印を付けて先へ', 'CISG は 適用 → 成立 → 義務 → 救済・危険 の順。インコタームズがあれば危険はそちらで決まる', '計算は3つ: 代金減額（比率）、Art 75・76 の差額＋予見できた損害、利息 ＝ 金額 × 年利 × 日数 ÷ 365']
        },
        {
          title: '英単語',
          words: [
            ['model law', 'モデル ロー', 'モデル法（各国が取り込むひな形）'],
            ['ratify', 'ラティファイ', '（条約を）批准する'],
            ['price reduction', 'プライス リダクション', '代金減額'],
            ['substitute transaction', 'サブスティテュート', '代替取引'],
            ['passing of risk', 'パッシング オブ リスク', '危険の移転'],
            ['confirmed letter of credit', 'コンファームド', '確認信用状']
          ]
        }
      ],
      quiz: [
        { q: '契約代金 $80,000。引渡し時の価値は、実際の物品が $54,000、契約どおりの物品なら $90,000。買主が代金減額（Art 50）を選んだ。払う代金はいくら？', type: 'number', answer: 48000, unit: '$', explain: '比率 $54,000 ÷ $90,000 ＝ 0.6。$80,000 × 0.6 ＝ $48,000。価値の差 $36,000 を代金から引いて $44,000 とするのは誤り。' },
        { q: 'Which of the following statements regarding a model law is correct?', choices: ['It binds every state that has signed it, even without ratification', 'It is a treaty that takes effect automatically in all member states of the United Nations', 'It does not bind any state unless the state adopts it into its national law, and the state may modify it when doing so', 'It can be adopted only by states with a civil law system'], answer: 2, explain: 'モデル法は立法のひな形で、批准はない。各国が自由に変えて国内法にする。署名や批准で国を拘束するのは条約。法体系の種類は関係ない。' },
        { q: 'A seller in Japan sells a dishwasher to a buyer in Germany. Both are Contracting States. At the time of the contract the seller knew that the buyer was buying it for use in his own home. Does the CISG apply?', choices: ['Yes, because the parties are in different Contracting States', 'No, because goods bought for personal, family or household use are excluded', 'Yes, but only if the contract is in writing', 'No, because the buyer is not a merchant'], answer: 1, explain: 'Art 2(a)：家庭用の売買は除外。売主が用途を知っていたので例外にも当たらない。商人かどうかは関係なく（Art 1(3)）、書面も要らない（Art 11）。' },
        { q: 'Goods are sold CIF Le Havre (Incoterms 2020) and shipped from Osaka. At what point does the risk of loss of or damage to the goods pass from the seller to the buyer?', choices: ['When the goods arrive at the port of Le Havre', 'When the buyer pays the price under the letter of credit', 'When the bill of lading is transferred to the buyer', 'When the goods are placed on board the vessel at the port of shipment in Osaka'], answer: 3, explain: 'CIF では積出港で本船の船上に置いた時に危険が移る。Le Havre は運賃と保険の終点（仕向港）。代金の支払や B/L の譲渡は危険の移転と関係ない。' },
        { q: 'A seller fails to deliver 1,000 units at a contract price of $30 per unit, and the buyer avoids the contract. Within a reasonable time the buyer buys 1,000 replacement units at $34 per unit and incurs extra foreseeable costs of $500. What damages can the buyer recover under the CISG (in $)?', type: 'number', answer: 4500, unit: '$', explain: 'Art 75：（$34 − $30）× 1,000 ＝ $4,000。Art 74 の予見できた追加費用 $500 を足して $4,500。' },
        { q: 'In a civil law system, which of the following is the main source of law?', choices: ['Comprehensive codes enacted by the legislature', 'Judicial precedent which binds lower courts under stare decisis', 'The Quran and the Sunnah', 'Model laws prepared by UNCITRAL'], answer: 0, explain: 'シビル・ローの主な法源は法典。先例拘束はコモン・ロー、コーランとスンナはシャリーア法。モデル法は国が取り込むまで法源にならない。' }
      ]
    },
    {
      id: 'B118',
      no: 118,
      title: '総合演習②：代理・パートナーシップ・会社の設立',
      goal: '第4〜5部（代理、パートナーシップ、会社の種類・法人格・登記・定款）を混ぜた本番形式の問題で、誰が誰を拘束し、誰が責任を負うかを判断できるようになる',
      minutes: 22,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D1(a)', 'K3:D1(b)', 'K3:D1(c)', 'K3:D1(d)', 'K3:D1(e)', 'K3:D1(f)', 'K3:D2(a)', 'K3:D2(b)', 'K3:D2(c)', 'K3:D2(d)', 'K3:D3(a)', 'K3:D3(b)', 'K3:D3(c)', 'K3:D3(d)'],
      slides: [
        {
          title: '今日の舞台',
          paras: ['友達に「ついでに牛乳を買ってきて」と頼むと、その友達はあなたの代わりに店と取引する。これが代理。事務所のパートナーも会社の取締役も、この「代わりに取引する人」になる。'],
          list: ['Ann・Ben・Cara の3人が、会計の事務所 ABC Partners を営む（一般パートナーシップ、書面の契約なし）', '事業が大きくなり、ABC Advisory Ltd（私会社）を作る予定', '第4〜5部を混ぜて、本番形式で問う']
        },
        {
          title: '代理（D1(a)〜(c)）',
          table: { caption: '代理の4つの論点', head: ['論点', 'ルール'], rows: [
            ['成立', '合意（明示・黙示）、追認、必要、禁反言。追認は、契約時に本人が存在し能力があり、本人のためと示したことが条件'],
            ['実際の権限', '明示と黙示（付随・通常の権限）。Hely-Hutchinson v Brayhead'],
            ['表見的な権限', '本人の表示を第三者が信頼し、権限のなさを知らない。Freeman and Lockyer v Buckhurst Park'],
            ['代理人の責任', '権限がなく追認もない → 権限保証違反で第三者に賠償（Collen v Wright）']
          ] }
        },
        {
          title: 'パートナーシップ（D1(d)〜(f)）',
          list: ['定義: 利益を目的に共同で事業を営む者の関係（PA 1890 s1）。登記も書面も要らない', '契約がないとき: 利益は均等、出資を超える貸付に年5%、新しいパートナーの加入と事業の変更は全員の同意（s24）', '各パートナーは事務所の代理人。ふつうの事業の範囲の行為は、相手が権限のなさを知らなければ事務所を拘束（s5）', '新しいパートナーは加入前の債務を負わない（s17）。退職者は、以前からの取引先に通知し Gazette に公告しないと責任が残る（s36）', 'LP（1907年法）: 無限責任の general partner が1人以上。LLP（2000年法）: 登記で設立する法人で、メンバーは有限責任']
        },
        {
          title: '事業の形の比較（D2(a)）',
          table: { caption: '3つの形', head: ['項目', '個人事業主・パートナーシップ', '会社'], rows: [
            ['法人格', 'なし（LLP はあり）', 'あり。株主と別の人'],
            ['責任', '無限責任', '株主は未払込額まで'],
            ['設立', '手続きは要らない', '登記が必要'],
            ['公開と規制', '少ない', '決算書の公開など多い'],
            ['資金調達', '浮動担保は付けられない', '株式・社債・浮動担保']
          ] }
        },
        {
          title: '会社の種類と小会社（D2(b)(c)）',
          list: ['株式有限責任・保証有限責任・無限責任の3種類', '公開会社（plc）: 割当済みの額面 £50,000 以上、各株は額面の1/4以上とプレミアム全額を払込み。取締役2人以上、秘書役は必須。営業開始証明書（s761）が要る。株式を公衆に売り出せる', '私会社（Ltd）: 取締役1人以上、秘書役は任意。公募はできない', '小会社（2025年4月6日以後の年度）: 売上 £15m 以下・総資産 £7.5m 以下・従業員50人以下のうち2つ以上。区分が変わるのは2年続いたとき。公開会社は対象外', '小グループ（small group、s383）: グループの合計で同じ3基準の2つ以上（総額で見るなら売上 £18m・資産 £9m 以下）', '効果: 簡単な決算書、戦略報告書が不要、監査の免除。小グループの親会社は連結財務諸表が要らない']
        },
        {
          title: '例題: 小会社の判定',
          example: {
            problem: 'ABC Advisory Ltd の最初の事業年度（12か月）: 売上 £14m、総資産 £8m、従業員の平均45人。小会社に当たる？ もし公開会社だったら？',
            steps: ['売上 £14m は £15m 以下 → 満たす', '総資産 £8m は £7.5m を超える → 満たさない', '従業員45人は50人以下 → 満たす', '3つのうち2つを満たす。最初の年度はその年だけで判定する', '公開会社（plc）は、数字に関係なく小会社のルールを使えない'],
            answer: '私会社なら小会社で、監査の免除なども使える。公開会社なら対象外'
          }
        },
        {
          title: '法人格のベール（D2(d)）',
          paras: ['Salomon v A Salomon and Co Ltd（1897年）: 会社は株主と別の人。株主の責任は未払込額まで。'],
          list: ['法律で取り払う: 不正取引（IA 1986 s213）、不当取引（s214）、資格剥奪中の取締役（CDDA s15）', '裁判所が取り払う: 義務から逃げるための見せかけの会社（Gilford Motor v Horne、Jones v Lipman）。Prest v Petrodel の回避の原則', '取り払わない: グループが1つの経済単位というだけ（Adams v Cape）'],
          after: 'なぜ？ 有限責任は、事業に挑戦しやすくするための仕組み。今ある義務から逃げる道具に使うことまでは守らないので、例外はごく狭い。'
        },
        {
          title: '登記と記録（D3(a)(b)）',
          list: ['登記の書類: 申請書、基本定款（memorandum）、定款（なければモデル定款）、資本の明細、役員と PSC の明細、適合の声明', '設立証明書の日から法人として存在する（s16）。証明書は正しく登記された決定的な証拠', '株主名簿を備える（株主は無料で閲覧）。会計記録は私会社3年・公開会社6年、議事録は10年保存', '確認書は少なくとも12か月ごと、期間の終わりから14日以内。決算書の提出は期末から私会社9か月・公開会社6か月', '担保は作った翌日から21日以内に登録']
        },
        {
          title: '定款とその変更（D3(c)(d)）',
          list: ['定款は会社と株主、株主どうしの契約（s33）。守られるのは株主としての権利だけ。外部の人（Eley v Positive Life の弁護士）は使えない', '目的を書かなければ、会社の目的は無制限（s31）', 'モデル定款: 経営は取締役会（art 3）、株主の指示は特別決議（art 4）、期末配当は株主の普通決議（取締役の勧告額まで）', '変更は特別決議（75%以上、s21）。会社全体の利益のために善意で（Allen v Gold Reefs）。15日以内に登記所へ', '変更できない条項（entrenchment）は、設立時か株主全員の合意で作る']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'パートナーシップは書面がなくても成立する。「契約書がないからパートナーではない」は誤り。特別決議の75%は、総会では投票された票（棄権を除く）で数える。賛成70・反対25・棄権5なら 70 ÷ 95 ＝ 約73.7% で否決。代理（誰が会社を拘束するか）とベール（株主が責任を負うか）は別の問題として考える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['代理は「本人が権限を与えたか、与えたように見せたか」。見せたなら表見的な権限で本人が拘束される', 'パートナーは無限責任で事務所の代理人。LLP と会社は法人で、メンバー・株主は有限責任', '会社は登記で生まれ、定款は特別決議で変える。小会社は3基準のうち2つ（公開会社は対象外）']
        },
        {
          title: '英単語',
          words: [
            ['apparent authority', 'アパレント オーソリティ', '表見的な権限'],
            ['ratification', 'ラティフィケーション', '追認'],
            ['holding out', 'ホールディング アウト', 'パートナーと名乗る（名乗らせる）こと'],
            ['lifting the veil', 'リフティング ザ ヴェール', '法人格のベールを取り払うこと'],
            ['certificate of incorporation', 'サーティフィケット', '設立証明書'],
            ['entrenched provision', 'エントレンチト', '変更に条件を付けた条項']
          ]
        }
      ],
      quiz: [
        { q: 'Ann is a partner in ABC Partners, a firm of accountants. The partners have agreed among themselves that no partner may buy equipment costing more than $5,000 without the consent of the others. Ann buys a computer system for the firm for $8,000 from a supplier who knows that Ann is a partner but does not know of the restriction. Which of the following is correct?', choices: ['The firm is not bound, because Ann had no actual authority', 'The firm is bound, because buying office equipment is within the usual way of business and the supplier did not know of the restriction', 'Only Ann is liable, because she breached the partnership agreement', 'The contract is void because it was not approved by all the partners'], answer: 1, explain: 'PA 1890 s5。ふつうの事業の範囲の行為は、相手が権限のなさを知らなければ事務所を拘束する（Mercantile Credit v Garrod と同じ考え方）。Ann は内部の約束違反で、ほかのパートナーに責任を負う。' },
        { q: 'Before ABC Advisory Ltd was incorporated, Ben signed a contract with a landlord, stating that he was acting on behalf of the company. After incorporation the company wishes to ratify the contract. Which of the following is correct?', choices: ['The company can ratify the contract within a reasonable time after incorporation', 'The contract binds the company automatically on incorporation', 'The company can ratify the contract if the board passes a resolution', 'The company cannot ratify the contract, because it did not exist when the contract was made'], answer: 3, explain: '追認には、契約時に本人が存在していることが必要（Kelner v Baxter）。会社は新しく同じ内容の契約を結ぶしかない。英国の会社法では、契約した Ben が個人で責任を負う。' },
        { q: 'Which of the following companies qualifies as small for its first financial year?', choices: ['A public company with turnover of £5 million, total assets of £3 million and 20 employees', 'A private company with turnover of £16 million, total assets of £8 million and 45 employees', 'A private company with turnover of £14 million, total assets of £8 million and 45 employees', 'A private company with turnover of £16 million, total assets of £7 million and 60 employees'], answer: 2, explain: '売上 £14m・資産 £8m・45人の私会社は、売上と従業員の2つを満たすので小会社。公開会社は数字が小さくても対象外。売上 £16m の2社は、従業員45人だけ、または資産 £7m だけの1つしか満たさない（£15m・£7.5m・50人が基準）。' },
        { q: 'Cara は ABC Advisory Ltd を辞めるとき「1年間は顧客を勧誘しない」と約束した。辞めた直後、妻を唯一の株主・取締役にした新会社を作り、その会社を通じて顧客を勧誘した。裁判所はどうしうる？', choices: ['新会社は義務から逃げる見せかけとして、Cara と新会社の両方に差止めを命じうる（Gilford Motor v Horne）', '新会社は別の法人なので、Cara の約束は及ばない（Salomon）', 'グループの会社として1つの経済単位とみなし、親会社に責任を負わせる', 'Cara は新会社の株主ではないので、どんな場合も責任を負わない'], answer: 0, explain: '今ある義務から逃げるために会社を間に入れた場合、裁判所はベールを取り払う。Salomon の原則はここでは盾にならない。1つの経済単位というだけでは取り払わない（Adams v Cape）ので、親会社に責任を負わせる選択肢も誤り。' },
        { q: 'At a general meeting of ABC Advisory Ltd, a special resolution to alter the articles is proposed. Votes cast in favour: 70,000. Votes cast against: 25,000. A further 5,000 votes abstain. Which of the following is correct?', choices: ['The resolution is passed, because more than 70% of all the votes were in favour', 'The resolution is passed, because a simple majority voted in favour', 'The resolution is not passed, because less than 75% of the votes cast were in favour', 'The resolution is not passed, because abstentions count as votes against'], answer: 2, explain: '70,000 ÷（70,000 ＋ 25,000）＝ 約73.7%。75% に届かないので否決。棄権は分母に入れないが、反対票として数えるわけでもない。過半数は普通決議の基準。' },
        { q: 'Ben は ABC Partners を退職した。長年の取引先 Kite には何も知らせず、Gazette にだけ公告した。退職後、Ann が事務所の名前で Kite から物品を掛けで買った。Kite は Ben にも請求できる？', choices: ['できない。Gazette に公告したので、すべての人に対して責任はなくなる', 'できる。以前からの取引先には実際の通知が必要で、公告だけでは足りない（s36）', 'できない。退職したパートナーは、退職前の債務も含めて責任を負わない', 'できる。退職したパートナーは、退職後5年間はすべての債務を負う'], answer: 1, explain: 'PA 1890 s36。公告で足りるのは、以前に取引のなかった相手。Kite のような取引先には個別の通知が要る。退職前の債務への責任は、退職しても残る。' }
      ]
    },
    {
      id: 'B119',
      no: 119,
      title: '総合演習③：資本と会社の運営',
      goal: '第6〜7部（資本・資金調達、取締役・役員・監査人・総会）を混ぜた本番形式の問題を解き、増資・分配可能額・決議の％を計算できるようになる',
      minutes: 25,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(a)', 'K3:D4(b)', 'K3:D4(c)', 'K3:D4(d)', 'K3:D4(e)', 'K3:D4(f)', 'K3:D4(g)', 'K3:D4(h)', 'K3:D5(a)', 'K3:D5(b)', 'K3:D5(c)', 'K3:D5(d)', 'K3:D5(e)', 'K3:D5(f)', 'K3:D5(g)', 'K3:D5(h)', 'K3:D5(i)'],
      slides: [
        {
          title: '家計にたとえると',
          paras: ['株式は「家族が出し合ったお金」、社債は「銀行からの借金」、取締役は「家計を任された人」、株主総会は「家族会議」。第6〜7部は、この関係を問う。今日は Maple plc（公開会社）と子会社の Birch Ltd（私会社）で考える。'],
          table: { caption: '資本と株式（D4(a)(b)）', head: ['論点', 'ルール'], rows: [
            ['資本の種類', '発行済・払込請求済・払込済・未請求。株主の追加の責任は未払込額まで'],
            ['優先株', '定款に書かなければ累積的と推定（Webb v Earle）。追加の配当には参加しないと推定'],
            ['金庫株', '分配可能利益で買い戻した株式。議決権・配当なし（s726）'],
            ['種類株主の権利の変更', '定款の手続か、額面3/4以上の書面同意か、種類株主総会の特別決議（s630）。反対の15%以上は21日以内に裁判所へ（s633）']
          ] }
        },
        {
          title: '株式の発行（D4(c)(d)）',
          list: ['割当ての権限: 株式が1種類の私会社は取締役（s550）。それ以外は定款か普通決議の授権（s551、5年以内）', '先買権: 現金で割り当てるなら、今の株主に持株比率で14日以上先に申し出る（s561）。ボーナス株と現物出資は対象外', 'ライツ・イシュー＝今の株主に有償。ボーナス・イシュー＝準備金を資本に組み入れて無償', '割引発行の禁止（s580）: 額面未満は不可。受け取った人が差額と年5%の利息を払う', 'プレミアム（額面を超える分）は株式払込剰余金へ。使えるのは発行費用とボーナス株だけ']
        },
        {
          title: '例題1: ライツとボーナス',
          example: {
            problem: 'Maple plc の資本の部: 株式資本 £400,000（額面 £1 の株式 400,000株）、株式払込剰余金 £150,000、利益剰余金 £300,000。①4株につき1株のライツ・イシューを1株 £2.50 で行い、全部払い込まれた。②その後、5株につき1株のボーナス・イシューを株式払込剰余金から行った。それぞれの後の金額は？',
            steps: ['① 新株: 400,000 ÷ 4 ＝ 100,000株。現金は 100,000 × £2.50 ＝ £250,000 入る', '① 株式資本 ＋£100,000 → £500,000。プレミアム 100,000 × £1.50 ＝ £150,000 → 株式払込剰余金 £300,000', '② 新株: 500,000 ÷ 5 ＝ 100,000株。株式資本 ＋£100,000 → £600,000', '② 株式払込剰余金 −£100,000 → £200,000。ボーナスでは現金は入らず、資本の部の合計 £1,100,000 も変わらない', 'ライツは現金での割当てなので先買権が働く。ボーナス株には働かない'],
            answer: '最後は 株式資本 £600,000、株式払込剰余金 £200,000、利益剰余金 £300,000（合計 £1,100,000）'
          }
        },
        {
          title: '借入資本と担保（D4(e)(f)）',
          table: { caption: '株主と社債権者', head: ['項目', '株式', '社債（借入資本）'], rows: [
            ['立場', '構成員（所有者）', '債権者'],
            ['リターン', '配当: 分配可能利益があり、宣言されたとき', '利息: 利益がなくても契約どおり'],
            ['議決権', 'あり（普通株）', 'なし'],
            ['清算の順位', 'すべての債権者の後', '株主より先。担保があればさらに先'],
            ['担保・割引', '担保なし。割引発行は禁止', '担保を付けられる。割引で発行できる']
          ] },
          after: '固定担保は特定の資産、浮動担保は入れ替わる資産全体に付き、結晶化までは会社が自由に使える。担保は21日以内に登録。'
        },
        {
          title: '資本維持と配当（D4(g)(h)）',
          paras: ['資本は法律の手続なしに株主へ返せない。減資は、私会社なら特別決議＋取締役の支払能力の声明か裁判所の確認、公開会社なら特別決議＋裁判所の確認。'],
          list: ['分配可能利益（s830）＝ 累積実現利益 − 累積実現損失', '公開会社は純資産テスト（s831）もある。計算では未実現の純損失も引く', '違法配当と知っていた（知るべきだった）株主は返す（s847）'],
          after: 'なぜ？ 株主は有限責任で、債権者は株主に請求できない。会社に残る資本が債権者の頼りなので、配当は利益からだけにする。'
        },
        {
          title: '例題2: 分配可能額',
          example: {
            problem: 'Birch Ltd（私会社）の累積の数字: 実現利益 £400,000、実現損失 £150,000、未実現の利益（再評価）£30,000、未実現の損失 £70,000。分配可能額は？ もし公開会社だったら？',
            steps: ['私会社（s830）: 実現利益 − 実現損失 ＝ £400,000 − £150,000 ＝ £250,000。未実現のものは使わない', '公開会社（s831）: 未実現の純額を確かめる。£30,000 − £70,000 ＝ £40,000 の純損失', '純損失は引く: £250,000 − £40,000 ＝ £210,000', '未実現が純利益のときは、足さずに無視する'],
            answer: '私会社 £250,000、公開会社なら £210,000'
          }
        },
        {
          title: '取締役（D5(a)〜(d)）',
          list: ['種類: 執行・非執行（義務は同じ）、de jure・de facto、影の取締役（その指示に従うのが習慣になっている人、s251。専門家の助言は除く）', '人数: 私会社1人以上、公開会社2人以上。16歳以上で、1人は自然人', '選任: 最初の取締役は登記の書類で届ける。その後は普通決議か取締役会（モデル定款）', '解任: 普通決議＋28日前の特別通知（s168）。書面決議は不可。ほかに辞任・資格剥奪（CDDA、2〜15年）でも地位を失う', '権限: 取締役会が経営。社長は通常の権限を持つ。個々の取締役は、権限を与えられなければ会社を拘束しない。表見的な権限（Freeman and Lockyer）、善意の相手は s40 で保護', '義務: s171〜177 の7つ。実質的財産取引（純資産の10%超かつ £5,000 超、または £100,000 超）と取締役への貸付は株主の承認が要る']
        },
        {
          title: '秘書役・監査人・注意義務（D5(e)〜(g)）',
          list: ['秘書役: 公開会社は必須で資格が要る。取締役が選ぶ。仕事は登記簿の管理、登記所への届出、総会の事務など。事務的な契約には表見的な権限（Panorama v Fidelis）', '監査人: 最初と欠員は取締役が選び、以後は株主の普通決議。帳簿の閲覧、説明の要求、総会への出席と発言の権利', '監査人の解任: 普通決議＋28日前の特別通知。書面決議は不可で、監査人は意見を述べられる。辞めるときは状況の説明書を出す', '注意義務: Caparo v Dickman の3段階（予見可能性・近接性・公平で合理的）。法定監査の報告は株主全体のためで、個々の投資家の株の購入には責任を負わない']
        },
        {
          title: '総会と決議（D5(h)(i)）',
          table: { caption: '数字で覚えるルール', head: ['項目', 'ルール'], rows: [
            ['招集', '取締役。払込済みの議決権株式の5%を持つ株主が請求すれば、21日以内に招集し、通知から28日以内に開く'],
            ['通知期間', '総会14日。公開会社の AGM は21日で、期末から6か月以内（AGM は公開会社だけ必須）'],
            ['短縮の同意', '株主の人数の過半数で、かつ議決権株式の 私会社90%（定款で95%まで上げられる）、公開会社の総会95%。AGM は全員'],
            ['普通・特別決議', '普通は過半数、特別は75%以上。総会では投票された票で数える'],
            ['書面決議', '私会社だけ。全議決権に対する％で数える。取締役・監査人の解任には使えない']
          ] },
          after: '例: 全議決権 1,000,000、総会で賛成 460,000・反対 140,000 なら 460,000 ÷ 600,000 ＝ 約76.7% で特別決議は可決。同じ賛成票でも書面決議なら 460,000 ÷ 1,000,000 ＝ 46% で、普通決議にも届かない。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '先買権が働くのは現金での割当てで、ボーナス・イシューには働かない。特別決議の75%は、総会では投票された票、書面決議では全議決権で数える。取締役・監査人の解任に書面決議は使えない。公開会社の配当では、未実現の純損失を引き忘れない（未実現の純利益は足さない）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株式は額面未満で発行できず、プレミアムは株式払込剰余金へ。ライツは有償で先買権あり、ボーナスは準備金から無償', '配当は分配可能利益から。公開会社は未実現の純損失も引く', '解任は普通決議＋28日の特別通知（書面決議は不可）。特別決議は75%、通知は総会14日・公開会社の AGM 21日']
        },
        {
          title: '英単語',
          words: [
            ['rights issue', 'ライツ イシュー', '株主割当ての有償増資'],
            ['bonus issue', 'ボーナス イシュー', '準備金を使う無償の株式発行'],
            ['pre-emption rights', 'プリエンプション ライツ', '先買権'],
            ['distributable profits', 'ディストリビュータブル プロフィッツ', '分配可能利益'],
            ['special notice', 'スペシャル ノーティス', '特別通知（28日前）'],
            ['substantial property transaction', 'サブスタンシャル', '実質的財産取引']
          ]
        }
      ],
      quiz: [
        { q: 'Maple plc, a public company, has accumulated realised profits of £600,000, accumulated realised losses of £200,000, unrealised profits of £50,000 and unrealised losses of £110,000. What is the maximum dividend it may lawfully pay (in £)?', type: 'number', answer: 340000, unit: '£', explain: '実現利益 − 実現損失 ＝ £400,000。未実現の純額は £50,000 − £110,000 ＝ £60,000 の純損失なので引く。£400,000 − £60,000 ＝ £340,000。私会社なら £400,000。' },
        { q: '額面 £1 の株式 500,000株を発行している会社が、5株につき1株のライツ・イシューを1株 £1.80 で行い、全部払い込まれた。株式払込剰余金はいくら増える？', type: 'number', answer: 80000, unit: '£', explain: '新株 500,000 ÷ 5 ＝ 100,000株。1株あたりのプレミアム £1.80 − £1 ＝ £0.80。100,000 × £0.80 ＝ £80,000。株式資本は £100,000 増える。' },
        { q: 'The members of Birch Ltd wish to remove a director before the end of his term of office. Which of the following is correct?', choices: ['A special resolution is required, and it may be passed as a written resolution', 'The director can be removed only by the board of directors', 'An ordinary resolution must be passed at a meeting, and special notice of 28 days must be given to the company', 'An ordinary written resolution signed by members holding a majority of the votes is sufficient'], answer: 2, explain: 's168：総会での普通決議と、会社への28日前の特別通知。取締役が弁明できるよう、書面決議は使えない。定款に別の方法があっても s168 の権利はなくならない。' },
        { q: 'At a general meeting, 300,000 votes are cast in favour of a special resolution and 110,000 votes are cast against. Holders of a further 50,000 votes abstain. Which of the following is correct?', choices: ['The resolution is not passed, because about 73% of the votes cast were in favour', 'The resolution is passed, because more than 50% of the votes cast were in favour', 'The resolution is passed, because abstentions are ignored and the majority voted in favour', 'The resolution is not passed, because a special resolution needs 90% of the votes'], answer: 0, explain: '300,000 ÷（300,000 ＋ 110,000）＝ 約73.2%。特別決議の75% に届かない。過半数は普通決議の基準。90% は私会社の短縮通知の同意の割合。' },
        { q: 'The net assets of a company are £2,000,000. A director proposes to buy a property from the company for £150,000. Which of the following is correct?', choices: ['No approval is needed, because the value does not exceed 10% of net assets', 'Approval of the board is sufficient because the director will pay the full market value', 'Approval of the members is required only if the company is a public company', 'Approval of the members is required, because the value exceeds £100,000'], answer: 3, explain: '純資産の10% は £200,000 で超えないが、£100,000 を超えるので実質的な資産に当たる（s191）。時価で買っても株主の承認が要る。私会社にも適用される。' },
        { q: 'Maple plc の監査済みの財務諸表を見て、投資家 X が市場で Maple plc の株を買い、損をした。監査には過失があった。X は監査人に損害賠償を請求できる？', choices: ['できる。監査人は財務諸表を読むすべての人に注意義務を負う', 'ふつうはできない。法定監査の報告は株主全体が会社を監督するためで、投資の判断のためではない（Caparo v Dickman）', 'できる。X は株を買った時点で株主になったから', 'できない。監査人はどんな場合も会社以外に責任を負わない'], answer: 1, explain: 'Caparo では近接性と「公平で合理的」の要件を満たさず、注意義務はなかった。株を買い増すための信頼は保護されない。ただし、特定の相手が特定の目的に使うと知って示した場合は、責任を負いうる（Hedley Byrne）ので、「どんな場合も会社以外に責任を負わない」も誤り。' }
      ]
    },
    {
      id: 'B120',
      no: 120,
      title: '総合演習④：倒産・犯罪・知的財産',
      goal: '第8〜10部（清算と管理手続、企業・金融犯罪、知的財産）を混ぜた本番形式の問題を解き、清算の配当と留保分を計算できるようになる',
      minutes: 25,
      recall: true,
      exam: 'both',
      outcomes: ['K3:E1(a)', 'K3:E1(b)', 'K3:E1(c)', 'K3:E1(d)', 'K3:F1(a)', 'K3:F1(b)', 'K3:F2(a)', 'K3:F3(a)', 'K3:F4(a)', 'K3:F5(a)', 'K3:F6(a)', 'K3:G1(a)', 'K3:G1(b)'],
      slides: [
        {
          title: '今日の地図',
          paras: ['お店にたとえると、第8部は「お店のたたみ方」、第9部は「お店でしてはいけないこと」、第10部は「お店の名前やアイデアの守り方」。どれも、損をする人（債権者・投資家・社会・作った人）を守るルール。'],
          list: ['会社: Quill Ltd（文具の製造）。経営が苦しくなっている', '取引先の上場会社 Ink plc と、会計事務所 Ledger LLP も登場する', '数値の問題は、清算の配当と留保分']
        },
        {
          title: '倒産の手続（E1(a)(b)(d)）',
          table: { caption: '4つの手続', head: ['手続', 'ポイント'], rows: [
            ['MVL（株主の任意清算）', '取締役の支払能力の声明（決議前5週間以内、12か月以内に全額返済）＋特別決議'],
            ['CVL（債権者の任意清算）', '払えない会社。特別決議で始め、債権者の候補が清算人になる'],
            ['強制清算', '裁判所の命令。理由は s122(1)（支払えない、正当かつ公平など）。£750 を超える法定の支払請求を3週間放置すると支払えないとみなす。開始は申立ての時'],
            ['管理手続', '会社の救済が第1の目的。裁判所・適格浮動担保権者・会社と取締役が選ぶ。モラトリアムで訴訟や担保の実行が止まる']
          ] }
        },
        {
          title: '清算の配当の順番（E1(c)）',
          numbered: ['固定担保（その資産の売却代金から）', '清算の費用', '優先債権: まず従業員（清算前4か月の給与で1人 £800 まで）、次に HMRC（VAT・PAYE など）', '留保分（prescribed part）: 純財産の最初の £10,000 の50%＋残りの20%（上限 £800,000）。無担保債権者だけのもの', '浮動担保', '無担保債権者（按分）', '劣後の債権、最後に株主'],
          after: '純財産＝浮動担保の資産から、費用と優先債権を払った残り。'
        },
        {
          title: '例題: Quill Ltd の配当',
          example: {
            problem: 'Quill Ltd が強制清算になった。工場（Lender L の固定担保、債権 £150,000）は £200,000 で売れた。銀行の浮動担保は全財産にかかり、債権 £200,000。ほかの資産 £150,000。清算の費用 £20,000。従業員10人の未払給与は1人 £1,200（清算前4か月以内）。HMRC の VAT と PAYE £12,000。仕入先など無担保 £171,000。',
            steps: ['固定担保: £200,000 から Lender L に £150,000。余り £50,000 は浮動担保の資産へ', '浮動担保の資産: £50,000 ＋ £150,000 ＝ £200,000。費用を引いて £180,000', '優先: 従業員 10人 × £800 ＝ £8,000、HMRC £12,000。計 £20,000。純財産 £160,000', '留保分: £10,000 × 50% ＋（£160,000 − £10,000）× 20% ＝ £5,000 ＋ £30,000 ＝ £35,000', '銀行: £160,000 − £35,000 ＝ £125,000。不足の £75,000 は留保分からはもらえない', '無担保: 仕入先 £171,000 ＋ 給与の超過分 10人 × £400 ＝ £4,000 → £175,000。£35,000 ÷ £175,000 ＝ 0.2'],
            answer: '無担保債権者は1ポンドにつき20ペンス。£10,000 の仕入先は £2,000。株主は0'
          }
        },
        {
          title: 'インサイダー取引と市場の濫用（F1）',
          list: ['内部情報: 特定の証券や発行会社に関する、具体的で、公表されておらず、公表されれば価格に大きく影響する情報（Criminal Justice Act 1993）', '内部者: 取締役・従業員・株主として、または仕事を通じて情報を得た人と、その人から情報を得たと知っている人', '3つの罪: 価格に影響する証券の取引、他人への取引の勧誘、仕事の適切な遂行以外での情報の開示', '抗弁: 利益を期待しなかった、十分に公表されていると信じた、情報がなくても同じことをした', '市場の濫用: 英国では UK MAR に基づく FCA の民事・規制上の制度。インサイダー取引、内部情報の不正な開示、相場操縦。上限のない制裁金など']
        },
        {
          title: 'マネロンと贈収賄（F2・F3）',
          list: ['マネロンの3段階: placement（入れる）→ layering（重ねる）→ integration（戻す）', '主な罪（POCA 2002）: 隠匿・変換など（s327）、取決めへの関与（s328）、取得・使用・所持（s329）', '規制対象業種（会計士を含む）: 疑いを報告しない罪と、相手に知らせる内報（tipping off）の罪。報告は MLRO から NCA へ', '5つの仕組み: リスク管理、内部統制、顧客の確認（CDD・厳格・簡易）、依拠と記録の保存（関係の終了から5年）、モニタリングと社内への周知', 'Bribery Act 2010: 贈賄（s1）、収賄（s2）、外国公務員への贈賄（s6）、営利団体の防止懈怠（s7、十分な手続の抗弁）。ファシリテーション・ペイメントも違法']
        },
        {
          title: '会社の犯罪（F4〜F6）',
          table: { caption: '誰が・何をすると罪か', head: ['罪', 'ポイント'], rows: [
            ['脱税ほう助の防止懈怠（CFA 2017）', 'relevant body（法人とパートナーシップ）の関係者が脱税をほう助した。合理的な防止手続の抗弁。上限のない罰金'],
            ['不正防止懈怠（ECCTA 2023、2025年9月1日から）', '大規模な組織が対象: 従業員250人超・売上・総資産の3基準のうち2つ（2025年4月6日以後の年度は売上 £54m 超・総資産 £27m 超、それより前は £36m・£18m 超）。関係者が組織の利益のために不正をした。合理的な手続の抗弁'],
            ['運営・清算中の犯罪', '記録の改ざん、清算前の財産の隠匿、帳簿の破棄、清算した会社の名前の再使用（IA 1986 s216）など'],
            ['コンピュータの不正使用（CMA 1990）', '無権限のアクセス、さらに犯罪をする目的のアクセス、無権限の改変・妨害'],
            ['不正取引と不当取引', '不正取引＝債権者をだます意図（民事 IA s213、刑事 CA s993）。不当取引＝取締役が支払不能を避けられないと知るべきだった（民事 s214、抗弁はあらゆる措置）']
          ] }
        },
        {
          title: '知的財産（G1(a)）',
          table: { caption: '登録・守るもの・期間', head: ['権利', '守るもの・ポイント'], rows: [
            ['著作権', '表現（アイデアではない）。登録なしで自動的に生まれる。文芸・美術などは作者の死後70年'],
            ['特許', '新規性・進歩性・産業上の利用可能性。登録が必要で、出願から最長20年'],
            ['商標', '商品・役務を見分ける標識。登録で10年、何度でも更新できる'],
            ['意匠', '製品の外観。登録意匠は最長25年。登録しなくても非登録の意匠権で一定の保護'],
            ['パッシング・オフ', '登録のない名前や外観も守る。のれん・誤認させる表示・損害の3要件（Jif Lemon 事件）'],
            ['会社名', '同じ名前は登記できない。のれんを持つ人は会社名の裁定人に異議を出せる']
          ] }
        },
        {
          title: '無断で使われたときの救済（G1(b)）',
          list: ['差止め: 裁判の途中の仮の差止めと、判決での本案の差止め', '損害賠償か利益の返還（account of profits）: どちらか一方を選ぶ', '侵害品の引渡し・廃棄', '偽造品・海賊版の取引は犯罪にもなる。税関で輸入を止めることもできる'],
          after: 'なぜ？ 侵害による売上やブランドの損は、後から金額にしにくい。だから、損害賠償を待つより、差止めで侵害を早く止めることが重視される。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '不当取引（s214）は、だます意図がなくても成立する。対象は取締役だけで、民事だけ。不正取引は意図が必要で、関わった誰でも対象になり、刑事の罪もある。留保分は、浮動担保権者の不足分には使えない。損害賠償と利益の返還は、両方は取れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['配当は 固定担保 → 費用 → 優先 → 留保分 → 浮動担保 → 無担保 → 株主。留保分は純財産から計算', '犯罪は「誰が・何を知って・何をしたか」で区別する。防止懈怠の罪の抗弁は、十分な（合理的な）手続', '知的財産は 登録が要るか・何を守るか・期間 で比べる。救済は差止め、損害賠償か利益の返還、引渡し・廃棄']
        },
        {
          title: '英単語',
          words: [
            ['prescribed part', 'プリスクライブド パート', '留保分（無担保債権者のための分）'],
            ['wrongful trading', 'ロングフル トレーディング', '不当取引'],
            ['inside information', 'インサイド インフォメーション', '内部情報'],
            ['tipping off', 'ティッピング オフ', '内報（相手に知らせること）'],
            ['adequate procedures', 'アデクワット プロシージャーズ', '十分な（防止の）手続'],
            ['account of profits', 'アカウント オブ プロフィッツ', '利益の返還']
          ]
        }
      ],
      quiz: [
        { q: 'A company in liquidation has net property of £310,000. Its floating charge was created in 2022. What is the prescribed part (in £)?', type: 'number', answer: 65000, unit: '£', explain: '£10,000 × 50% ＝ £5,000。残り £300,000 × 20% ＝ £60,000。合計 £65,000（上限 £800,000 以下）。' },
        { q: 'The directors of Quill Ltd continued trading for six months when they ought to have concluded that there was no reasonable prospect of avoiding insolvent liquidation. There is no evidence of any intention to defraud creditors. Which of the following is correct?', choices: ['The directors are guilty of the criminal offence of fraudulent trading', 'The directors cannot be liable because they had no intention to defraud', 'Only individual creditors may sue the directors for wrongful trading', 'The liquidator may apply to the court for the directors to contribute to the company\'s assets for wrongful trading'], answer: 3, explain: 'IA 1986 s214。知るべきだった（客観と主観の基準）なら、だます意図がなくても不当取引。申し立てるのは清算人（管理手続なら管理人）。不正取引は意図が必要。' },
        { q: 'An employee of Ink plc pays a bribe to a foreign official to win a contract for Ink plc. Ink plc is charged with failing to prevent bribery under section 7 of the Bribery Act 2010. Which defence is available to Ink plc?', choices: ['That the payment was only a small facilitation payment', 'That it had adequate procedures in place designed to prevent persons associated with it from bribing', 'That the board of directors did not know of the bribe', 'That the bribe was paid outside the UK'], answer: 1, explain: 's7 の抗弁は十分な手続だけ。ファシリテーション・ペイメントも贈賄に当たる。取締役会が知らなくても成立し、外国での贈賄も対象。' },
        { q: 'A director of Ink plc learns that the company will announce a large loss next week. He tells a friend, who then sells her shares in Ink plc before the announcement. The director does not deal in the shares himself. Which offence has the director committed under the Criminal Justice Act 1993?', choices: ['Dealing in price-affected securities', 'Market manipulation only', 'Disclosing inside information otherwise than in the proper performance of his employment', 'No offence, because he did not deal in the shares himself'], answer: 2, explain: '取締役は仕事と関係なく内部情報を伝えたので、開示の罪。自分で取引していなくても罪になる。情報源が内部者と知って売った友人は、取引の罪に当たりうる。' },
        { q: 'Quill Ltd has sold pens under the name Quillmark for 20 years but has never registered it as a trade mark. A competitor starts selling pens under a confusingly similar name. What must Quill Ltd prove in an action for passing off?', choices: ['Goodwill attached to its goods, a misrepresentation likely to deceive the public, and damage or likely damage to its goodwill', 'That the name is registered as a trade mark and has been renewed', 'That the competitor intended to deceive the public', 'That the name is a new invention involving an inventive step'], answer: 0, explain: 'Jif Lemon 事件の3要件。パッシング・オフは登録がなくても使える。相手のだます意図は要件ではない。新規性と進歩性は特許の要件。' },
        { q: 'Ledger LLP の会計士は、顧客の取引にマネロンの疑いを持ち、MLRO に報告した。そのあと顧客に「あなたの取引を報告しました」と伝えた。この会計士は？', choices: ['報告はもう済んでいるので、何を伝えても罪にならない', '顧客への説明義務を果たしたので、適切な行動', '内報（tipping off）の罪に当たりうる。調査を損なうおそれのある開示をしたから', '疑いを報告しない罪に当たる'], answer: 2, explain: '報告したこと自体は正しいが、それを顧客に知らせると内報の罪になりうる。報告は済んでいるので、報告しない罪には当たらない。' }
      ]
    }
  ],
  cards: [
    { id: 'B117-1', lesson: 'B117', q: 'K3 の本番で1問にかけられる時間は？', a: '120分 ÷ 50問 ＝ 2.4分（2分24秒）' },
    { id: 'B117-2', lesson: 'B117', q: '条約とモデル法の拘束力の違いは？', a: '条約は批准した国を拘束。モデル法は国が国内法に取り込むまで拘束しない' },
    { id: 'B117-3', lesson: 'B117', q: '3つの法体系の主な法源は？', a: 'コモン・ロー＝判例と制定法、シビル・ロー＝法典、シャリーア＝コーラン・スンナ・イジュマー・キヤース' },
    { id: 'B117-4', lesson: 'B117', q: '代替品を買ったとき・買わないときの損害賠償の条文は？', a: '買った＝Art 75（代替価格との差）、買わない＝Art 76（解除時の時価との差）' },
    { id: 'B117-5', lesson: 'B117', q: 'CISG の利息の計算は？', a: '遅れた金額 × 年利 × 日数 ÷ 365。利率は条約になく、契約や国内法で決まる' },
    { id: 'B117-6', lesson: 'B117', q: 'CIF で危険が移る場所と、保険の最低額は？', a: '積出港で本船の船上。保険は代金の110%以上（協会貨物約款（C）相当）' },
    { id: 'B118-1', lesson: 'B118', q: '表見的な権限で本人が拘束される条件は？', a: '本人の表示、第三者の信頼、第三者が権限のなさを知らない' },
    { id: 'B118-2', lesson: 'B118', q: '設立前の会社のための契約を、会社は追認できる？', a: 'できない。契約時に本人が存在しない（Kelner v Baxter）' },
    { id: 'B118-3', lesson: 'B118', q: '契約がないときのパートナーの利益の分け方は？', a: '出資に関係なく均等（PA 1890 s24）' },
    { id: 'B118-4', lesson: 'B118', q: '退職パートナーが責任を免れるための通知は？', a: '以前からの取引先には実際の通知、ほかの人には Gazette の公告（s36）' },
    { id: 'B118-5', lesson: 'B118', q: '公開会社の設立の条件（資本・人数）は？', a: '割当済み額面 £50,000 以上（1/4以上払込）、取締役2人以上、秘書役、営業開始証明書' },
    { id: 'B118-6', lesson: 'B118', q: '総会の特別決議の75% の分母は？', a: '投票された票。棄権は数えない' },
    { id: 'B118-7', lesson: 'B118', q: '定款変更の判例上の歯止めは？', a: '会社全体の利益のために善意で行うこと（Allen v Gold Reefs）' },
    { id: 'B119-1', lesson: 'B119', q: 'ライツ・イシューとボーナス・イシュー、現金と先買権は？', a: 'ライツは現金が入り先買権あり。ボーナスは現金なし、先買権なし' },
    { id: 'B119-2', lesson: 'B119', q: '株式払込剰余金の使い道は？', a: 'その株式の発行費用と、全額払込のボーナス株だけ' },
    { id: 'B119-3', lesson: 'B119', q: '公開会社の分配可能額の計算は？', a: '実現利益 − 実現損失 − 未実現の純損失（純利益は足さない）' },
    { id: 'B119-4', lesson: 'B119', q: '取締役の解任の手続は？', a: '総会の普通決議＋28日前の特別通知（s168）。書面決議は不可' },
    { id: 'B119-5', lesson: 'B119', q: '実質的財産取引の基準は？', a: '純資産の10%超かつ £5,000 超、または £100,000 超で株主の承認' },
    { id: 'B119-6', lesson: 'B119', q: '総会と公開会社の AGM の通知期間は？', a: '総会14日、公開会社の AGM 21日' },
    { id: 'B119-7', lesson: 'B119', q: '監査人が個々の投資家に責任を負わない根拠は？', a: 'Caparo v Dickman。監査報告は株主全体が会社を監督するため' },
    { id: 'B120-1', lesson: 'B120', q: 'MVL と CVL の分かれ目は？', a: '取締役が12か月以内の全額返済の支払能力の声明を出せるか' },
    { id: 'B120-2', lesson: 'B120', q: '強制清算で支払えないとみなされる法定の支払請求は？', a: '£750 を超える請求を3週間放置したとき' },
    { id: 'B120-3', lesson: 'B120', q: '留保分の計算と、受け取れる人は？', a: '純財産の最初の £10,000 の50%＋残りの20%（上限 £800,000）。無担保債権者だけ' },
    { id: 'B120-4', lesson: 'B120', q: 'インサイダー取引の3つの罪は？', a: '取引、取引の勧誘、仕事の適切な遂行以外での情報の開示' },
    { id: 'B120-5', lesson: 'B120', q: '不正取引と不当取引の違いは？', a: '不正＝だます意図・誰でも・刑事もあり。不当＝意図不要・取締役だけ・民事だけ' },
    { id: 'B120-6', lesson: 'B120', q: '防止懈怠の罪（贈賄・脱税ほう助・不正）の抗弁は？', a: '十分な（合理的な）防止の手続があったこと' },
    { id: 'B120-7', lesson: 'B120', q: 'パッシング・オフの3要件は？', a: 'のれん、誤認させる表示、損害（Jif Lemon 事件）' }
  ]
});
