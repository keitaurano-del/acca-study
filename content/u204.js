(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 204,
  part: 2,
  partTitle: '国際物品売買（ウィーン売買条約 CISG）',
  lessons: [
    {
      id: 'B012',
      no: 12,
      title: 'ウィーン売買条約（CISG）とは：いつ適用されるか',
      goal: 'ある国際取引に CISG が適用されるかを、営業所の国と締約国かどうかから Art 1 に沿って判定できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(a)'],
      slides: [
        {
          title: 'サッカーの国際試合は共通ルール',
          paras: ['日本とドイツが試合をするとき、Jリーグの規則でもドイツの国内リーグの規則でもなく、世界共通のルールで戦う。どちらにも有利・不利がないから、安心して試合ができる。', '国をまたぐ物の売り買いにも、同じような共通ルールがある。それがウィーン売買条約（CISG）。']
        },
        {
          title: 'CISG とは',
          paras: ['正式名は United Nations Convention on Contracts for the International Sale of Goods（国際物品売買契約に関する国際連合条約）。UNCITRAL（B010）が作り、1980年にウィーンで採択、1988年に発効した。', '締約国（Contracting State）は90か国を超える。日本は2008年に加入し、2009年8月1日から日本でも効力がある。英国は締約国ではない（2026年時点）。'],
          after: 'CISG が決めるのは、契約の成立と、売主・買主の権利と義務の2つ。'
        },
        {
          title: '適用の条件（Art 1(1)）',
          formula: '営業所が異なる国にある当事者の、物品売買契約に適用する',
          list: ['(a) 両方の国が締約国のとき', '(b) 国際私法（private international law）のルールで、締約国の法律が使われることになるとき'],
          after: '(a) が基本の道。(b) は、片方の国が締約国でなくても、使う法律が締約国の法律になれば CISG が使われる、という広げ方。'
        },
        {
          title: '大阪の部品メーカーで確かめる',
          paras: ['Osaka Parts（営業所は日本）がポンプ部品を売る。相手によって答えが変わる。'],
          table: { caption: 'Osaka Parts の3つの取引', head: ['相手', 'CISG'], rows: [['ハンブルクの会社（ドイツ）', '適用：両国とも締約国（(a)）'], ['ロンドンの会社（英国）', '(b) 次第：日本法が使われれば適用'], ['東京の会社（日本）', '不適用：同じ国の中の取引']] },
          after: '英国との取引では (a) は使えない。国際私法で日本法が使われることになれば、日本法の一部である CISG が適用される。英国法になれば適用されない。'
        },
        {
          title: '判定の順番',
          svg: `<svg viewBox="0 0 440 370" role="img" aria-label="CISGが適用されるかを判定する3つの質問の流れ図" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">CISG は使われる？ 3つの質問</text><rect x="20" y="48" width="230" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="79" text-anchor="middle" fill="var(--ink)">① 営業所は別々の国？</text><rect x="310" y="48" width="110" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="79" text-anchor="middle" fill="var(--quiet)">適用しない</text><line x1="250" y1="73" x2="304" y2="73" stroke="var(--edge)" stroke-width="1.5"/><polygon points="302,68 302,78 309,73" fill="var(--edge)"/><text x="278" y="64" text-anchor="middle" font-size="14" fill="var(--quiet)">いいえ</text><line x1="135" y1="98" x2="135" y2="120" stroke="var(--edge)" stroke-width="1.5"/><polygon points="130,119 140,119 135,126" fill="var(--edge)"/><text x="146" y="117" font-size="14" fill="var(--quiet)">はい</text><rect x="20" y="126" width="230" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="157" text-anchor="middle" fill="var(--ink)">② 両国とも締約国？</text><rect x="310" y="126" width="110" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="365" y="148" text-anchor="middle" font-weight="600" fill="var(--ink)">適用する</text><text x="365" y="167" text-anchor="middle" font-size="12.5" fill="var(--ink)">Art 1(1)(a)</text><line x1="250" y1="151" x2="304" y2="151" stroke="var(--edge)" stroke-width="1.5"/><polygon points="302,146 302,156 309,151" fill="var(--edge)"/><text x="278" y="142" text-anchor="middle" font-size="14" fill="var(--quiet)">はい</text><line x1="135" y1="176" x2="135" y2="198" stroke="var(--edge)" stroke-width="1.5"/><polygon points="130,197 140,197 135,204" fill="var(--edge)"/><text x="146" y="195" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="204" width="230" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="235" text-anchor="middle" fill="var(--ink)">③ 国際私法で締約国の法？</text><rect x="310" y="204" width="110" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="226" text-anchor="middle" fill="var(--ink)">適用する</text><text x="365" y="245" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 1(1)(b)</text><line x1="250" y1="229" x2="304" y2="229" stroke="var(--edge)" stroke-width="1.5"/><polygon points="302,224 302,234 309,229" fill="var(--edge)"/><text x="278" y="220" text-anchor="middle" font-size="14" fill="var(--quiet)">はい</text><line x1="135" y1="254" x2="135" y2="276" stroke="var(--edge)" stroke-width="1.5"/><polygon points="130,275 140,275 135,282" fill="var(--edge)"/><text x="146" y="273" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="282" width="230" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="310" text-anchor="middle" fill="var(--quiet)">適用しない</text><text x="20" y="356" font-size="14" fill="var(--ink)">適用でも、次は除外の確認（次のレッスン）</text></svg>`,
          caption: '米国のように「(b) には縛られない」と宣言した国（Art 95）の裁判所では、③ の道は使われない。'
        },
        {
          title: '国籍や「商人」かどうかは関係ない',
          paras: ['当事者の国籍（nationality）や、当事者・契約が民事か商事か（civil or commercial character）は考えない（Art 1(3)）。見るのは営業所（place of business）がどこにあるか。', 'ドイツ人が東京だけで経営する会社と、大阪の会社の取引は、営業所がどちらも日本なので CISG は使われない。日本の商法でいう「商人」かどうかも関係ない。']
        },
        {
          title: '外国の相手だと分からなかったら（Art 1(2)）',
          paras: ['営業所が別の国にあることが、契約、それまでのやりとり、契約時までに示された情報のどこからも分からない場合、その事実は無視される。', 'たとえば買主の営業所が実は海外にあっても、売主に一切分からなかったなら、国内の取引として扱う。相手が予想できなかったルールに縛られないようにするため。']
        },
        {
          title: 'なぜ？ 共通ルールが必要な理由',
          paras: ['国をまたぐ取引では、まず「どの国の法律を使うか」（法の抵触、B008）で揉める。売主も買主も、自分の国の法律を使いたい。', '共通のルールがあれば、相手の国の法律を調べる手間とリスクが減る。どちらの国にも偏らない中立のルールなので、合意もしやすい。国籍でなく営業所で判断するのは、取引が実際に行われる場所が大事だから。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '国籍で判断しない。見るのは営業所の国。また「片方が非締約国なら絶対に適用されない」も間違い。国際私法で締約国の法律が使われることになれば、Art 1(1)(b) で適用される。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['営業所が別々の国にある当事者の物品売買に適用する（Art 1(1)）', '(a) 両国とも締約国、または (b) 国際私法で締約国の法律が使われるとき', '国籍や、民事か商事かは関係ない（Art 1(3)）']
        },
        {
          title: '英単語',
          words: [
            ['CISG', 'シーアイエスジー', 'ウィーン売買条約（UN Convention on Contracts for the International Sale of Goods）'],
            ['Contracting State', 'コントラクティング ステイト', '締約国'],
            ['place of business', 'プレイス オブ ビジネス', '営業所'],
            ['sale of goods', 'セール オブ グッズ', '物品の売買'],
            ['private international law', 'プライベート インターナショナル ロー', '国際私法（どの国の法を使うかを決めるルール）'],
            ['sphere of application', 'スフィア オブ アプリケーション', '適用範囲'],
            ['nationality', 'ナショナリティ', '国籍']
          ]
        }
      ],
      quiz: [
        { q: '大阪の会社（日本）が、ハンブルクの会社（ドイツ）にポンプを売る契約を結んだ。日本もドイツも締約国。契約書には適用法の定めがない。CISG は？', choices: ['日本の会社が売主なので、日本の民法だけが適用される', '契約書で CISG を選んだときだけ適用される', 'Art 1(1)(a) により適用される', '両社が商人なので、商法が優先して適用されない'], answer: 2, explain: '営業所が別々の国にあり、両国とも締約国なので Art 1(1)(a) で適用される。当事者が選ばなくても自動的に使われる（外したいなら Art 6 で排除する。次のレッスン）。商人かどうかは関係ない（Art 1(3)）。' },
        { q: 'X Co has its place of business in Japan and Y Co has its place of business in the United Kingdom. Japan is a Contracting State to the CISG but the UK is not. Which of the following statements is correct?', choices: ['The CISG can never apply to their contract because the UK is not a Contracting State', 'The CISG will apply if the rules of private international law lead to the application of Japanese law', 'The CISG will apply because X Co is a Japanese company', 'The CISG will apply only if both parties are merchants'], answer: 1, explain: 'Art 1(1)(b)。片方が非締約国でも、国際私法で締約国（日本）の法律が使われることになれば適用される。「can never apply」は (b) の道を忘れた間違い。X Co が日本の会社であること（国籍）や、merchants かどうかは Art 1(3) で考えない。' },
        { q: 'Which of the following are NOT taken into consideration in determining whether the CISG applies? (1) The nationality of the parties (2) Whether the parties or the contract are civil or commercial in character (3) The States in which the parties have their places of business', choices: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'], answer: 0, explain: 'Art 1(3) は国籍と、民事・商事の性格を考えないと定める。営業所の国（3）は Art 1(1) の判定の中心なので、むしろ必ず考える。' },
        { q: 'ドイツ人が東京だけに営業所を持って経営する会社が、大阪の会社に部品を売った。CISG は？', choices: ['適用される。売主の経営者がドイツ人だから', '適用される。日本もドイツも締約国だから', '売主の国籍が決まるまで判断できない', '適用されない。営業所がどちらも日本にある'], answer: 3, explain: '見るのは営業所の国。両方とも日本なので国際取引ではない。経営者や会社の国籍は Art 1(3) で考えない。' },
        { q: '買主の営業所は海外にあったが、そのことは契約にも、それまでのやりとりにも、契約時までの情報にも一切出ていなかった。売主の営業所は日本。CISG の扱いは？', choices: ['実際に営業所が別の国なので、必ず適用される', '営業所が別の国にあるという事実は無視され、国内取引として扱う', '後で分かった時点から適用される', '売主が選べば適用される'], answer: 1, explain: 'Art 1(2)。営業所が別の国にあることが、契約・やりとり・事前の情報のどこからも分からなければ、その事実は無視する。相手が予想できないルールに縛られないようにするため。' }
      ]
    },
    {
      id: 'B013',
      no: 13,
      title: 'CISGが適用されない取引と事項',
      goal: 'Art 2〜6 に沿って、CISG の対象外になる売買・契約・事項を見分け、当事者が CISG を外せることを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(a)'],
      slides: [
        {
          title: '引越し業者でも運ばない物がある',
          paras: ['引越し業者の約款には「現金・株券・ペットは運びません」のような例外がある。トラックで普通に運ぶ家具と性質が違い、別の扱いが必要だから。', 'CISG も同じ。国際的な物品売買でも、条約が「これは扱わない」と決めている取引と事項がある。']
        },
        {
          title: 'Art 2：適用されない6つの売買',
          table: { caption: '次の売買には CISG を使わない', head: ['除外（Art 2）', '例'], rows: [['(a) 個人・家族・家庭用の物品', '自宅用のテレビ'], ['(b) 競売（auction）', 'オークションでの落札'], ['(c) 強制執行など法律による売却', '差し押さえた物の売却'], ['(d) 株式・投資証券・流通証券・通貨', '株、手形、外貨'], ['(e) 船舶・ホバークラフト・航空機', 'タンカー、旅客機'], ['(f) 電気', '電力の売買']] },
          caption: '物の種類（d〜f）だけでなく、用途（a）や売り方（b, c）でも除外される。そもそも物品（goods）は、動かせる形のある物と一般に考えられている。土地・建物の売買は対象外。'
        },
        {
          title: '家庭用の除外には例外がある',
          paras: ['個人・家族・家庭用（personal, family or household use）に買った物品は除外。ただし売主が、契約時までにその用途を知らず、知るべきでもなかった場合は除外されない。', '同じパソコンでも、会社が業務用に買えば適用。個人が自宅用に買い、売主もそれが分かる状況なら除外。消費者は各国の消費者保護の法律で守る、という役割分担。']
        },
        {
          title: '作ってもらう契約・サービス付きの契約（Art 3）',
          table: { caption: '売買か、そうでないか', head: ['契約', 'CISG'], rows: [['売主が自分の材料で機械を作って売る', '適用（売買とみなす）'], ['買主が材料の重要な部分（substantial part）を出し、加工だけ頼む', '不適用（Art 3(1)）'], ['機械を売って設置もする。代金の大部分は機械', '適用'], ['売主の義務の主要な部分（preponderant part）が労働・サービス', '不適用（Art 3(2)）']] }
        },
        {
          title: '売買でも CISG が扱わない事項（Art 4・5）',
          paras: ['CISG が扱うのは、契約の成立と、売主・買主の権利義務だけ。条約に明記がない限り、次は扱わない。'],
          list: ['契約の有効性（validity）：詐欺・強迫・違法な契約・行為能力など', '売った物品の所有権（property in the goods）への影響', '物品が原因の、人の死亡・身体の傷害についての売主の責任（Art 5）'],
          after: 'これらは、国際私法で決まる国の国内法で判断する。'
        },
        {
          title: '当事者は CISG を外せる（Art 6）',
          paras: ['当事者は合意で、CISG の適用を全部排除（exclude）したり、一部の規定を変更（derogate from, vary）したりできる。ただし Art 12（書面の要件、次のレッスン）だけは変えられない。', 'CISG は、当事者が何も決めなかったときのデフォルトのルール。契約で決めたことが優先する。'],
          note: { kind: 'tip', text: '契約書に「日本法による」と書くだけでは、CISG を排除したことにならないと一般に考えられている。日本は締約国なので CISG も日本法の一部だから。外すなら「CISG は適用しない」と明記する。' }
        },
        {
          title: '例題：この取引に CISG は使われる？',
          example: {
            problem: 'ハンブルクの会社（ドイツ）が、Osaka Parts（日本）から工場用ロボット1台を買う。代金 $500,000 のうち、ロボット本体が $450,000、設置作業が $50,000。契約書に CISG を外す定めはない。CISG は適用される？',
            steps: ['営業所：ドイツと日本で別々の国。両国とも締約国 → Art 1(1)(a)', 'Art 2：工場用で家庭用ではない。競売・強制執行・株式・船舶・電気でもない → 除外なし', 'Art 3(2)：代金の90％（$450,000 ÷ $500,000）は物品。労働・サービスは主要な部分ではない', 'Art 6：当事者は排除していない'],
            answer: '適用される'
          }
        },
        {
          title: 'なぜ？ 除外がある理由',
          paras: ['消費者の売買には、各国が強い消費者保護の法律を持っている。競売や強制執行には特別な手続きがある。株式・通貨には金融の法律、船や航空機には登録の制度がある。', '契約の有効性や所有権は、国ごとの考え方の差が大きく、統一できなかった。人身損害は各国の製造物責任などに任せた。CISG は各国が合意できた範囲だけの共通ルール。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '所有権（property）がいつ移るかは CISG では決まらない。一方、危険（risk）がいつ移るかは CISG が決める（後の B2(d)）。所有権と危険を混同しない。また、家庭用の除外は「売主が用途を知っていた・知るべきだった」ときだけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['Art 2 の除外：家庭用、競売、強制執行、株式・証券・通貨、船舶・航空機、電気', '有効性・所有権・人身損害は CISG の外（Art 4・5）', '当事者は CISG を排除・変更できる（Art 6）。ただし Art 12 は変えられない']
        },
        {
          title: '英単語',
          words: [
            ['personal, family or household use', 'パーソナル ファミリー オア ハウスホールド ユース', '個人・家族・家庭用'],
            ['auction', 'オークション', '競売'],
            ['execution', 'エクセキューション', '強制執行'],
            ['negotiable instruments', 'ネゴシアブル インストゥルメンツ', '流通証券（手形・小切手など）'],
            ['validity', 'バリディティ', '（契約の）有効性'],
            ['property in the goods', 'プロパティ イン ザ グッズ', '物品の所有権'],
            ['exclude / derogate from', 'エクスクルード / デロゲート フロム', '（条約を）排除する / 一部を変更する'],
            ['preponderant part', 'プリポンデラント パート', '主要な部分（大部分）']
          ]
        }
      ],
      quiz: [
        { q: '次の国際的な売買のうち、CISG が適用されるのはどれ？（当事者の国はすべて締約国、契約で CISG は外していない）', choices: ['個人が自宅用のカメラを海外の店から買い、店も自宅用と知っていた', '海運会社がタンカーを1隻買う', '会社が業務用のパソコン100台を買う', '投資家が海外の会社の株式を買う'], answer: 2, explain: '業務用の物品の売買は対象になる。自宅用のカメラは家庭用で、店も知っていたので除外（Art 2(a)）。タンカーは船舶（Art 2(e)）、株式は Art 2(d) で除外。' },
        { q: 'Which of the following sales are excluded from the CISG? (1) A sale by auction (2) A sale of electricity (3) A sale of aircraft (4) A sale of raw materials to a manufacturer for use in its factory', choices: ['(1) and (2) only', '(1), (2) and (3) only', '(2), (3) and (4) only', '(1), (2), (3) and (4)'], answer: 1, explain: '競売（Art 2(b)）、電気（Art 2(f)）、航空機（Art 2(e)）は除外。工場で使う原材料の売買は、ふつうの物品売買なので対象になる。' },
        { q: 'Except as otherwise expressly provided in the Convention, which of the following matters is the CISG concerned with?', choices: ['The validity of the contract', 'The effect of the contract on the property in the goods sold', 'The liability of the seller for death or personal injury caused by the goods', 'The rights and obligations of the seller and the buyer arising from the contract'], answer: 3, explain: 'Art 4 により CISG が扱うのは契約の成立と、売主・買主の権利義務。有効性と所有権は Art 4 で、人身損害は Art 5 で対象外。' },
        { q: 'A consumer in France buys a television for use at home from an online seller in Germany. The seller knew that the television was for home use. Does the CISG apply?', choices: ['Yes, because France and Germany are both Contracting States', 'No, because goods bought for personal, family or household use are excluded', 'Yes, because the nationality of the parties is irrelevant', 'No, because sales made online are always excluded'], answer: 1, explain: 'Art 2(a)。売主が家庭用だと知っていたので除外。締約国どうしでも、除外に当たれば適用されない。ネットでの売買そのものは除外されていない。' },
        { q: '買主が材料の重要な部分を売主に渡し、「この材料で部品を作ってほしい」と注文した。CISG は？', choices: ['適用される。部品という物品を受け取るから', '適用される。作る作業が少ないから', '適用されない。買主が材料の重要な部分を出しているので売買とみなされない', '材料の代金が $10,000 を超えるときだけ適用される'], answer: 2, explain: 'Art 3(1)。作って売る契約は原則として売買だが、注文した側が材料の重要な部分（substantial part）を出すなら売買とみなさない。金額の基準は条約にない。' },
        { q: '締約国どうしの会社が、契約書に「本契約には CISG を適用しない」と書いた。この定めは？', choices: ['無効。締約国どうしの取引には必ず CISG が適用される', '一部の条文を変えることはできるが、全部は外せない', '裁判所の許可があれば有効になる', '有効。当事者は CISG の適用を排除できる（Art 6）'], answer: 3, explain: 'Art 6 により、全部の排除も一部の変更もできる。変えられないのは Art 12（書面の要件）だけ。' }
      ]
    },
    {
      id: 'B014',
      no: 14,
      title: 'CISGの一般規定：解釈・慣習・方式自由',
      goal: 'Art 7〜13 の一般規定（条約と当事者の言葉の解釈、慣習、営業所、方式の自由と Art 96 の例外）を説明し、場面に当てはめられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(a)'],
      slides: [
        {
          title: '契約書がなくても約束は約束',
          paras: ['友人に「そのギター、3万円で買うよ」「いいよ」と言えば、紙がなくても売買の約束になる。日本の会社では「契約書に押印して初めて契約」という感覚が強いが、CISG は国際取引でも書面のない合意を契約として扱う。'],
          formula: '売買契約は書面で結ぶ必要も、書面で証明する必要もない。証人を含むどんな方法でも証明できる（Art 11）',
          after: 'Osaka Parts の担当者が、ハンブルクの買主と電話だけで「部品1,000個、単価 $20」と合意しても、契約は成立し得る（成立の細かいルールは B015〜B017）。'
        },
        {
          title: '例外：書面を求める国（Art 96・Art 12）',
          paras: ['国内法で売買契約に書面を求める締約国は、Art 11 などの方式の自由を使わないと宣言できる（Art 96）。どちらかの営業所がその国にあれば、方式の自由は使われない（Art 12）。アルゼンチンなど一部の国が宣言している。日本は宣言していない。', 'Art 12 は、当事者が合意で変えられない唯一の規定（Art 6 の例外）。また CISG でいう書面（writing）には、電報とテレックスを含む（Art 13）。']
        },
        {
          title: '条約の読み方（Art 7）',
          list: ['(1) 条約を解釈するときは、国際的な性格（international character）、適用の統一（uniformity）、国際取引での信義（good faith）の遵守を考える', '(2) 条約が扱う事項なのに明文がない問題は、まず条約の一般原則（general principles）で、それもなければ国際私法で決まる法律で解決する'],
          after: '自国の法律の感覚で条約を読むと、国ごとに結論がばらばらになる。だから他国の判例も参考にして、統一的に読む。'
        },
        {
          title: '相手の言葉をどう読むか（Art 8）',
          numbered: ['相手がその意図を知っていた、または知らないはずがなかった → 本人の意図（intent）で読む', 'そうでなければ → 相手と同じ種類の合理的な人（reasonable person）が同じ状況でどう理解するかで読む', 'どちらも、交渉の経緯、当事者間の慣行、慣習、その後の行動など、すべての事情を考える']
        },
        {
          title: '例題：通貨が書いていない注文',
          example: {
            problem: 'Osaka Parts とシドニーの買主は、これまで5回、すべて米ドル建てで取引してきた。今回の注文書には「単価 20」とだけあり、通貨が書いていない。豪ドルか米ドルか？',
            steps: ['通貨の記載がない → 文言だけでは決まらない', 'Art 8(3)：当事者間で確立した慣行（practices）も考える', '過去5回すべて米ドル → 同じ立場の合理的な人なら米ドルと理解する（Art 8(2)）', '「単価 20」は1個 US$20 と読む'],
            answer: '米ドル（1個 US$20）。過去の取引の慣行から解釈する'
          }
        },
        {
          title: '慣習と慣行（Art 9）',
          list: ['(1) 当事者は、合意した慣習（usage）と、当事者間で確立した慣行（practices）に拘束される', '(2) さらに、当事者が知っていた・知るべきだった慣習で、その種類の国際取引をする人に広く知られ、普通に守られているものは、別の合意がない限り、黙って契約に取り入れたとみなす'],
          after: 'インコタームズ（第3部）も、契約に取り入れれば当事者を拘束する。'
        },
        {
          title: '営業所が複数あるとき（Art 10）',
          paras: ['営業所が2つ以上あれば、契約とその履行に最も密接な関係（closest relationship）がある営業所を使う。契約時までに当事者が知っていた・想定していた事情で判断する。営業所がなければ常居所（habitual residence）を使う。', '例：Osaka Parts の本社は大阪。でもフランクフルト支店がパリの買主と交渉し、ドイツから出荷する。営業所はドイツになり、ドイツとフランスの取引として Art 1 を当てはめる。']
        },
        {
          title: 'なぜ？ 方式の自由と統一した解釈',
          paras: ['国際取引は速さが大事。電話やメッセージで決めた取引を「書類がないから」と無効にすると、取引が止まってしまう。だから形式よりも、実際に合意したかを重視する。', '条約を作っても、各国の裁判所が自国流に読めば、共通ルールの意味がなくなる。Art 7 の「国際的な性格」と「統一」は、共通ルールを本当に共通に保つための仕組み。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '書面がないから契約は不成立、とは考えない（Art 11）。例外は Art 96 の宣言をした国に営業所がある場合だけ。また、条約に明文がないとき、いきなり国内法を使わない。まず条約の一般原則を探す（Art 7(2)）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['書面は不要、どんな方法でも証明できる（Art 11）。例外は Art 96 宣言国（Art 12）', '言葉は本人の意図、それが相手に分からなければ合理的な人の理解で読む（Art 8）', '合意した慣習・確立した慣行・広く知られた国際慣習に拘束される（Art 9）']
        },
        {
          title: '英単語',
          words: [
            ['international character', 'インターナショナル キャラクター', '国際的な性格'],
            ['uniformity', 'ユニフォーミティ', '（適用の）統一'],
            ['good faith', 'グッド フェイス', '信義（誠実）'],
            ['reasonable person', 'リーズナブル パーソン', '合理的な人'],
            ['usage / practices', 'ユーセージ / プラクティシズ', '慣習 / 当事者間の慣行'],
            ['habitual residence', 'ハビチュアル レジデンス', '常居所（ふだん住んでいる所）'],
            ['writing', 'ライティング', '書面（電報・テレックスを含む）']
          ]
        }
      ],
      quiz: [
        { q: '日本の売主とドイツの買主（どちらの国も Art 96 の宣言をしていない）が、電話だけで売買に合意した。書面はない。CISG のもとでは？', choices: ['書面がないので契約は成立しない', '書面がなくても契約は成立し得る。証人などどんな方法でも証明できる', '公証人の認証があれば成立する', '代金が一定額以下なら口頭でも成立する'], answer: 1, explain: 'Art 11 の方式の自由。書面で結ぶ必要も、書面で証明する必要もない。書面が必要になり得るのは、Art 96 の宣言をした国に営業所がある場合（Art 12）。' },
        { q: 'Under Article 8 of the CISG, how are the statements of a party interpreted where the other party could not have been unaware of what that party intended?', choices: ['According to the understanding of a reasonable person of the same kind as the other party', 'According to the literal meaning of the words used, ignoring all other circumstances', 'According to the intent of the party making the statements', 'According to the domestic law of the country of the seller'], answer: 2, explain: 'Art 8(1)。相手が意図を知っていた、または知らないはずがなかったなら本人の意図で読む。「a reasonable person of the same kind」は Art 8(2) で、(1) が使えないときの基準。Art 8(3) により、文言だけでなく全部の事情を考えるので、literal meaning だけで読むのも間違い。' },
        { q: 'Under Article 9 of the CISG, the parties are bound by which of the following? (1) Any usage to which they have agreed (2) Any practices which they have established between themselves (3) Unless otherwise agreed, a usage widely known and regularly observed in their international trade, of which they knew or ought to have known', choices: ['(1) only', '(1) and (2) only', '(1), (2) and (3)', '(2) and (3) only'], answer: 2, explain: 'Art 9(1) で (1)(2)、Art 9(2) で (3) に拘束される。(3) は「黙って契約に取り入れた」とみなされるもので、当事者が別の合意をすれば外せる。' },
        { q: 'Osaka Parts（本社は大阪）のフランクフルト支店が、パリの買主と交渉し、ドイツから出荷する契約を結んだ。CISG を当てはめるとき、売主の営業所はどの国？', choices: ['日本（本社がある国）', '日本とドイツの両方', 'フランス（買主の国）', 'ドイツ（契約と履行に最も密接な営業所）'], answer: 3, explain: 'Art 10(a)。営業所が複数あれば、契約とその履行に最も密接な関係がある営業所を使う。本社の所在地で決まるわけではない。' },
        { q: 'CISG が扱う事項なのに、条約に明文の規定がない問題が起きた。どう解決する？', choices: ['すぐに売主の国の国内法で解決する', 'まず条約の一般原則で解決し、それもなければ国際私法で決まる法律による', '裁判をしている国の国内法で必ず解決する', '裁判官が信義に従って自由に決める'], answer: 1, explain: 'Art 7(2)。いきなり国内法に行かず、まず条約の一般原則を探す。それでも決まらないときに、国際私法で決まる法律を使う。' },
        { q: 'For the purposes of the CISG, the term writing expressly includes which of the following?', choices: ['Telegram and telex', 'Only documents signed by both parties', 'Only documents certified by a notary', 'Oral statements made in front of witnesses'], answer: 0, explain: 'Art 13 は、書面に電報とテレックスを含むと定める。署名や公証は要件ではない。口頭の発言は書面ではない（ただし Art 11 により、契約の証明には証人も使える）。' }
      ]
    }
  ],
  cards: [
    { id: 'B012-1', lesson: 'B012', q: 'CISG が適用される基本の条件は？（Art 1(1)）', a: '営業所が別々の国の物品売買で、(a) 両国が締約国、または (b) 国際私法で締約国の法が使われるとき' },
    { id: 'B012-2', lesson: 'B012', q: 'CISG の適用で考えないものは？（Art 1(3)）', a: '当事者の国籍と、当事者・契約が民事か商事か' },
    { id: 'B012-3', lesson: 'B012', q: '日本と英国は CISG の締約国？', a: '日本は締約国（2009年8月1日から）。英国は締約国ではない' },
    { id: 'B012-4', lesson: 'B012', q: '営業所が別の国だと契約時までに分からなかったら？（Art 1(2)）', a: 'その事実は無視し、国内取引として扱う' },
    { id: 'B012-5', lesson: 'B012', q: 'なぜ CISG のような共通ルールが必要？', a: 'どの国の法を使うかの争いを避け、中立のルールで調べる手間とリスクを減らすため' },
    { id: 'B013-1', lesson: 'B013', q: 'Art 2 で CISG が使われない売買は？', a: '家庭用、競売、強制執行、株式・証券・通貨、船舶・航空機、電気' },
    { id: 'B013-2', lesson: 'B013', q: '家庭用の物品でも CISG が使われるのはどんなとき？', a: '売主が契約時までにその用途を知らず、知るべきでもなかったとき' },
    { id: 'B013-3', lesson: 'B013', q: '作ってもらう契約が売買にならないのは？（Art 3）', a: '注文者が材料の重要な部分を出すとき。義務の主要な部分が労働・サービスのときも不適用' },
    { id: 'B013-4', lesson: 'B013', q: 'CISG が扱わない事項は？（Art 4・5）', a: '契約の有効性、所有権への影響、物品による死亡・身体の傷害の売主責任' },
    { id: 'B013-5', lesson: 'B013', q: '当事者は CISG を外せる？（Art 6）', a: '全部の排除も一部の変更もできる。ただし Art 12 は変えられない' },
    { id: 'B013-6', lesson: 'B013', q: '所有権と危険の移転、CISG が決めるのは？', a: '危険の移転だけ。所有権の移転は国内法で決まる' },
    { id: 'B014-1', lesson: 'B014', q: 'CISG で売買契約に書面は必要？（Art 11）', a: '不要。書面での証明も不要で、証人を含むどんな方法でも証明できる' },
    { id: 'B014-2', lesson: 'B014', q: 'Art 96 の宣言をした国に営業所があると？', a: '方式の自由（Art 11 など）が使われない（Art 12）。Art 12 は当事者も変えられない' },
    { id: 'B014-3', lesson: 'B014', q: 'CISG でいう「書面（writing）」に含まれるのは？（Art 13）', a: '電報とテレックス' },
    { id: 'B014-4', lesson: 'B014', q: '当事者の言葉の読み方は？（Art 8）', a: '相手が意図を知り得たなら本人の意図、そうでなければ同じ種類の合理的な人の理解' },
    { id: 'B014-5', lesson: 'B014', q: '当事者が拘束される慣習は？（Art 9）', a: '合意した慣習、当事者間の慣行、知り得た・広く知られて守られる国際慣習' },
    { id: 'B014-6', lesson: 'B014', q: '営業所が複数あるとき、どれを使う？（Art 10）', a: '契約とその履行に最も密接な関係がある営業所。なければ常居所' },
    { id: 'B014-7', lesson: 'B014', q: '条約に明文がない問題の解決順は？（Art 7(2)）', a: 'まず条約の一般原則、なければ国際私法で決まる法律' }
  ]
});
