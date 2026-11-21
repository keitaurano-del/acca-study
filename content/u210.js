(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 210,
  part: 3,
  partTitle: '国際輸送条件と貿易書類',
  lessons: [
    {
      id: 'B036',
      no: 36,
      title: '船荷証券（B/L）の3つの働き',
      goal: '船荷証券の3つの働き（受取証・運送契約の証拠・権原証券）を説明し、誰が物品を受け取れるかを判断できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C2(a)'],
      slides: [
        {
          title: 'クリーニング店の引換券',
          paras: ['服を預けると引換券をもらう。この券には3つの役目がある。', '1つ目は「確かに預かった」という証拠。2つ目は、仕上がり日や料金など、預かる約束の中身が書いてあること。3つ目は、券を持ってきた人に服を返すこと。券を友達に渡せば、友達が服を受け取れる。', '海の輸送で、この引換券にあたるのが船荷証券（bill of lading、B/L）。']
        },
        {
          title: '登場人物',
          paras: ['日本のサクラ社（売主）が、機械部品をカナダのメープル社（買主）に売る。部品は横浜から船で運ぶ。'],
          list: ['荷送人（shipper）: 物品を船会社に預ける人。ふつうは売主', '運送人（carrier）: 物品を運ぶ船会社。B/L を発行する', '荷受人（consignee）: 到着地で物品を受け取る人として B/L に書かれる人。ふつうは買主か、代金を立て替える銀行'],
          after: '運送人は物品を船に積むと、荷送人に B/L を発行する。'
        },
        {
          title: '書類と物品の流れ',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="荷送人が物品を預けてB/Lを受け取り、B/Lを荷受人に渡し、荷受人がB/Lと引換えに物品を受け取る" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">B/L が物品の「引換券」になる</text><rect x="20" y="50" width="130" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="78" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">荷送人</text><text x="85" y="100" text-anchor="middle" fill="var(--quiet)">売主・横浜</text><rect x="290" y="50" width="130" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="78" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">運送人</text><text x="355" y="100" text-anchor="middle" fill="var(--quiet)">船会社</text><text x="220" y="66" text-anchor="middle" fill="var(--ink)">① 物品</text><line x1="156" y1="74" x2="278" y2="74" stroke="var(--ink)" stroke-width="1.5"/><polygon points="286,74 276,69 276,79" fill="var(--ink)"/><line x1="164" y1="96" x2="284" y2="96" stroke="var(--ink)" stroke-width="1.5"/><polygon points="156,96 166,91 166,101" fill="var(--ink)"/><text x="220" y="116" text-anchor="middle" fill="var(--ink)">② B/L を発行</text><line x1="85" y1="114" x2="85" y2="228" stroke="var(--accent)" stroke-width="2.5"/><polygon points="85,236 80,226 90,226" fill="var(--accent)"/><text x="97" y="170" fill="var(--ink)">③ B/L を渡す</text><text x="97" y="192" fill="var(--quiet)">（裏書・銀行経由）</text><rect x="20" y="240" width="130" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="268" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">荷受人</text><text x="85" y="290" text-anchor="middle" fill="var(--quiet)">買主・到着港</text><rect x="290" y="240" width="130" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="355" y="268" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">運送人</text><text x="355" y="290" text-anchor="middle" fill="var(--quiet)">到着港</text><text x="220" y="256" text-anchor="middle" fill="var(--ink)">④ B/L を出す</text><line x1="156" y1="264" x2="278" y2="264" stroke="var(--ink)" stroke-width="1.5"/><polygon points="286,264 276,259 276,269" fill="var(--ink)"/><line x1="164" y1="286" x2="284" y2="286" stroke="var(--ink)" stroke-width="1.5"/><polygon points="156,286 166,281 166,291" fill="var(--ink)"/><text x="220" y="318" text-anchor="middle" fill="var(--ink)">⑤ 物品</text></svg>`,
          caption: '物品が海の上にある間、物品そのものではなく B/L という紙が動く。到着港の運送人は、B/L の原本を出した人に物品を渡す。'
        },
        {
          title: '働き1: 受取証（receipt）',
          paras: ['B/L は、運送人が物品を受け取ったことの証拠になる。数量・重さ・荷印（marks）と、外から見た状態（apparent order and condition）、船に積んだ日が書かれる。', '荷送人と運送人の間では、反対の証拠があれば覆せる（prima facie evidence）。ただし B/L を信じて善意で譲り受けた第三者に対しては、運送人は「本当は違った」と言えない（国際的な海上運送のルールであるヘーグ・ヴィスビー・ルール）。'],
          note: { kind: 'tip', text: '受取証の働きがあるから、買主や銀行は物品を見なくても、B/L を見れば「何が・どんな状態で・いつ積まれたか」が分かる。次のレッスンの clean や shipped の区別はここにつながる。' }
        },
        {
          title: '働き2: 運送契約の証拠（evidence of the contract of carriage）',
          paras: ['運送の契約は、ふつう B/L が出る前、船の予約（booking）のときに成立している。だから荷送人と運送人の間では、B/L は契約そのものではなく、契約の中身の「証拠」にすぎない。', '英国の The Ardennes（1951年）では、荷送人に口頭で「ロンドンへ直行する」と約束した運送人が、B/L の「寄り道してよい」という条項を持ち出したが、口頭の約束が優先された。', '一方、B/L を裏書で譲り受けた人（indorsee）にとっては、B/L に書かれた条件が運送人との契約の条件になる。']
        },
        {
          title: '働き3: 権原証券（document of title）',
          paras: ['B/L の正当な所持人（holder）は、到着港で運送人から物品の引渡しを受けられる。運送人は、B/L の原本と引換えでなければ物品を渡してはいけない。', 'B/L を裏書して渡せば、物品を受け取る権利（占有の権利）も一緒に移る。物品が海の上にあっても、紙を渡すだけで物品を転売したり、銀行の担保に入れたりできる。'],
          formula: 'B/L を持つ人＝物品を受け取れる人（物品の「鍵」）'
        },
        {
          title: 'なぜ？ 紙が物品の代わりになる理由',
          paras: ['船の輸送は数週間かかる。その間、売主は「代金をもらうまで物品を手放したくない」、買主は「本当に積まれたと分かるまで払いたくない」と考える。', 'B/L があれば、売主は銀行を通して「B/L と引換えに代金」を求められる。買主は B/L を受け取れば、物品が積まれたこと（受取証）と、到着港で受け取れること（権原証券）を確かめられる。次のレッスンで学ぶ信用状は、この仕組みの上に乗っている。']
        },
        {
          title: '原本は1通とは限らない',
          paras: ['B/L はふつう同じ原本を何通か（よく3通）まとめて発行する。これを full set という。到着港では、運送人は原本1通を出した人に物品を渡し、残りの原本は効力を失う。', 'だから銀行や買主は、原本を全部（full set）渡すよう求める。1通でも売主の手元に残ると、別の人がそれで物品を受け取るおそれがある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「B/L は運送契約そのもの」と答える。荷送人と運送人の間では契約の証拠にすぎない。また、権原証券を「所有権の証明書」と思い込む。B/L の引渡しで確実に移るのは物品を受け取る権利で、所有権がいつ移るかは売買契約の意思で決まる。航空運送状（air waybill）と海上運送状（sea waybill）は、受取証と契約の証拠にはなるが、権原証券ではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['B/L の3つの働き: 受取証・運送契約の証拠・権原証券', '運送人は B/L 原本と引換えに物品を渡す。B/L を渡せば、海の上の物品を売ったり担保にしたりできる', '荷送人との間では契約の「証拠」にすぎない。B/L を譲り受けた人には B/L の条件が契約になる']
        },
        {
          title: '英単語',
          words: [
            ['bill of lading (B/L)', 'ビル オブ レイディング', '船荷証券'],
            ['shipper', 'シッパー', '荷送人'],
            ['carrier', 'キャリア', '運送人（船会社）'],
            ['consignee', 'コンサイニー', '荷受人'],
            ['receipt for the goods', '', '物品の受取証'],
            ['evidence of the contract of carriage', '', '運送契約の証拠'],
            ['document of title', 'ドキュメント オブ タイトル', '権原証券'],
            ['full set', 'フル セット', '原本一式']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a function of a bill of lading?', choices: ['A receipt for the goods shipped', 'A guarantee by the carrier that the buyer will pay the price', 'Evidence of the contract of carriage', 'A document of title to the goods'], answer: 1, explain: 'B/L の働きは、受取証・運送契約の証拠・権原証券の3つ。運送人は代金の支払を保証しない。代金の支払を銀行が約束するのは信用状（次のレッスン以降）。' },
        { q: 'A bill of lading is described as a document of title. This means that:', choices: ['The bill is the contract of sale between the seller and the buyer', 'The carrier becomes the owner of the goods until delivery', 'Transfer of the bill transfers the right to take delivery of the goods from the carrier', 'The bill proves that the goods conform with the contract of sale'], answer: 2, explain: '権原証券とは、B/L を渡すと物品を受け取る権利も移ること。B/L は売買契約ではない（売買契約は売主と買主の間、B/L は運送の書類）。運送人は物品を預かるだけで所有者にならない。B/L は外から見た状態しか示さず、売買契約への適合までは証明しない。' },
        { q: '到着港で、運送人は誰に物品を渡すべき？', choices: ['B/L の原本を出した正当な所持人', '売買契約書に買主として書かれた会社', '最初に港へ受け取りに来た人', '荷送人が電話で指示した人'], answer: 0, explain: 'B/L は権原証券なので、運送人は原本と引換えに物品を渡す。売買契約書は運送人とは関係がない。原本なしで渡すと、正当な所持人から責任を問われる。' },
        { q: 'B/L の原本が3通発行された。そのうち1通で物品の引渡しが済んだ。残りの2通はどうなる？', choices: ['残りの2通でも、もう一度物品を受け取れる', '3通そろわないと引渡しはできなかった', '運送人に返せば代金が戻る', '効力を失う'], answer: 3, explain: '原本のうち1通で引渡しが済めば、残りは効力を失う。だから銀行や買主は full set（原本全部）を求める。3通そろわないと渡せない、というルールではない。' },
        { q: 'Which of the following transport documents is a document of title?', choices: ['An air waybill', 'A sea waybill', 'A bill of lading', 'A commercial invoice'], answer: 2, explain: '権原証券になるのは B/L。air waybill と sea waybill は受取証と契約の証拠にはなるが、権原証券ではない（物品は名前の書かれた荷受人に渡される）。commercial invoice（商業送り状）は売主の請求書で、運送書類ではない。' },
        { q: '荷送人と運送人の間で、B/L の条項と、それより前に口頭で合意した内容が食い違った。英国の判例（The Ardennes）ではどちらが優先された？', choices: ['B/L の条項。B/L が契約そのものだから', '先に口頭で合意した内容', 'どちらも無効になる', '運送人が選んだ方'], answer: 1, explain: '荷送人と運送人の間では、B/L は契約の証拠にすぎない。契約は B/L より前に成立しているので、口頭の約束が優先された。B/L を譲り受けた第三者との関係では、B/L の条件が契約になる点と区別する。' }
      ]
    },
    {
      id: 'B037',
      no: 37,
      title: '船荷証券の種類',
      goal: '船積式と受取式、無故障と故障付、指図式・記名式・持参人式の違いと、銀行が無故障の船積式を求める理由を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C2(a)'],
      slides: [
        {
          title: '宅配便の伝票で考える',
          paras: ['宅配便を出すとき、窓口で受け付けた時点の控えと、トラックに積んだ後の記録は違う。箱がへこんでいれば、受付票に「破損あり」と書かれることもある。', 'コンサートのチケットにも、名前入りで本人しか入れないものと、誰が持っていても入れるものがある。', 'B/L も、この3つの見方（いつ・どんな状態で・誰に）で種類が分かれる。']
        },
        {
          title: '3つの分け方',
          table: { caption: '船荷証券の種類', head: ['見方', '種類'], rows: [['いつ発行したか', '船積式（shipped / on board）と受取式（received for shipment）'], ['物品の状態', '無故障（clean）と故障付（claused、dirty、foul）'], ['誰が受け取れるか', '指図式（order）、記名式（straight）、持参人式（bearer）']] },
          after: '同じ B/L が「無故障・船積式・指図式」のように、3つの見方の組み合わせで呼ばれる。'
        },
        {
          title: '船積式と受取式',
          paras: ['船積式（shipped / on board B/L）: 物品を名前の決まった船に積んだ後に発行する。物品が実際に船に乗ったことの証拠になる。', '受取式（received for shipment B/L）: 運送人が港の倉庫やコンテナターミナルで物品を受け取った時点で発行する。まだ船に積まれていない。コンテナ輸送ではよく使われる。'],
          note: { kind: 'tip', text: '受取式でも、後で船に積んだ日付と船名を書き込めば（on board notation）、船積式として扱われる。' }
        },
        {
          title: '無故障と故障付',
          paras: ['無故障 B/L（clean B/L）: 物品や包装に欠陥があると書いた記載がないもの。「clean」という言葉が書かれている必要はない。', '故障付 B/L（claused / dirty / foul B/L）: 「3箱 破損」「ドラム缶2本 液漏れ」のように、物品や包装の欠陥をはっきり書いた記載があるもの。'],
          note: { kind: 'tip', text: '「荷送人の申告による（said to contain）」「荷送人の積付・計数（shipper\'s load and count）」は、運送人が中身を確かめていないという断り書き。欠陥を示すものではないので、これだけでは故障付にならない（UCP 600 Art 26）。' }
        },
        {
          title: '指図式・記名式・持参人式',
          table: { caption: '誰が物品を受け取れるか', head: ['種類', '書き方', '譲渡'], rows: [['指図式（order）', '「to order」「to the order of X」', '裏書と引渡しで譲渡できる'], ['記名式（straight）', '荷受人の名前だけ', '裏書で譲渡できない'], ['持参人式（bearer）', '「to bearer」、または白地裏書', '渡すだけで譲渡できる']] },
          paras: ['指図式の裏書には、相手の名前を書く記名式裏書（special indorsement）と、署名だけの白地裏書（blank indorsement）がある（記名式 B/L とは別の話）。白地裏書をすると、持参人式と同じになる。持参人式は、なくしたり盗まれたりすると拾った人が物品を受け取れるので危ない。']
        },
        {
          title: '「流通性がある」の本当の意味',
          paras: ['指図式の B/L は negotiable（流通性がある）と呼ばれる。ここでの意味は「裏書で次々に譲渡できる」こと。', '為替手形のような本当の流通証券とは違い、譲り受けた人は、譲り渡した人が持っていた以上の権利を取得しない。例えば B/L を盗んだ人から譲り受けても、正当な権利は手に入らない。'],
          note: { kind: 'warn', text: 'negotiable を「前の持ち主より強い権利が手に入る」と読まない。B/L の negotiable は transferable（譲渡できる）に近い。' }
        },
        {
          title: 'なぜ？ 銀行が「無故障の船積式」を求める理由',
          paras: ['信用状で支払う銀行は、物品を見ずに書類だけで払う。そして買主が払わなければ、B/L を持って物品を売り、お金を取り戻すしかない。'],
          list: ['船積式: 物品が倉庫ではなく、本当に船に乗ったと分かる', '無故障: 積んだときに、外から見て傷みがなかったと分かる', '指図式（銀行の指図など）: 銀行が物品を押さえ、必要なら転売できる'],
          after: 'UCP 600 も、運送書類は無故障のものしか受け取らない（Art 27）、B/L は船に積んだことを示すもの（Art 20）と定めている。'
        },
        {
          title: '例: どの B/L なら銀行が受け取る？',
          example: {
            problem: '信用状の条件は「無故障の船積式 B/L、原本一式、発行銀行の指図式」。売主が持ってきた B/L は次の3つのどれか。銀行が受け取れるのはどれ？ (1) 受取式で、船積みの記載なし (2) 船積式で「said to contain 500 cartons」の記載あり (3) 船積式で「12 cartons wet」の記載あり',
            steps: ['(1) まだ船に積んだことが示されていない。船積みの記載（on board notation）がないので受け取れない', '(2) said to contain は断り書きで、欠陥を書いたものではない。無故障のまま', '(3) 「12箱が濡れている」は包装・物品の欠陥の記載。故障付になる', '残るのは (2)。原本一式で発行銀行の指図式なら条件に合う'],
            answer: '(2) だけ。(1) は船積みの記載がなく、(3) は故障付'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「clean と書いていないから故障付」と判断する。clean の文字は要らない。欠陥をはっきり書いた記載があるかで決まる。また、記名式（straight）を指図式と取り違えない。荷受人の名前だけの B/L は、裏書で転売できない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['船積式＝船に積んだ後、受取式＝船に積む前。受取式も船積みの記載で船積式になる', '故障付＝物品・包装の欠陥をはっきり書いたもの。said to contain だけなら無故障', '指図式は裏書で譲渡できる（ただし前の持ち主以上の権利は得ない）。記名式は譲渡できない']
        },
        {
          title: '英単語',
          words: [
            ['shipped (on board) bill of lading', '', '船積式船荷証券'],
            ['received for shipment bill of lading', '', '受取式船荷証券'],
            ['on board notation', 'オン ボード ノーテーション', '船積みの記載'],
            ['clean bill of lading', 'クリーン', '無故障船荷証券'],
            ['claused (dirty, foul) bill of lading', 'クローズド', '故障付船荷証券'],
            ['order bill / straight bill', 'オーダー / ストレート', '指図式 / 記名式'],
            ['indorsement', 'インドースメント', '裏書'],
            ['negotiable', 'ネゴシアブル', '流通性がある（譲渡できる）']
          ]
        }
      ],
      quiz: [
        { q: 'A bill of lading bears the notation "4 drums leaking". This bill of lading is best described as:', choices: ['A clean bill of lading', 'A received for shipment bill of lading', 'A straight bill of lading', 'A claused bill of lading'], answer: 3, explain: '物品・包装の欠陥をはっきり書いた記載があるので、故障付（claused）。受取式かどうかは船積みのタイミング、記名式かどうかは受取人の書き方の話で、この記載とは関係がない。' },
        { q: 'Which of the following bills of lading can be transferred by indorsement and delivery?', choices: ['A bill made out "to the order of" the shipper', 'A bill made out to a named consignee only', 'A sea waybill', 'A bill which states that it is non-negotiable'], answer: 0, explain: '指図式（to the order of）は裏書と引渡しで譲渡できる。荷受人の名前だけの記名式（straight）は裏書で譲渡できない。sea waybill はそもそも権原証券ではない。non-negotiable と書かれたものも譲渡できない。' },
        { q: '信用状で支払う銀行が、受取式ではなく船積式の B/L を求める主な理由は？', choices: ['船積式の方が運賃が安いから', '物品が倉庫ではなく、実際に船に積まれたことを確かめるため', '船積式なら物品の品質が契約どおりだと保証されるから', '受取式は法律で禁止されているから'], answer: 1, explain: '船積式は物品が船に乗ったことの証拠になる。運賃とは関係がない。B/L は外から見た状態しか示さず、契約どおりの品質までは保証しない。受取式も合法で、船積みの記載を加えれば船積式として使える。' },
        { q: 'B/L に「said to contain 200 cartons」とだけ書かれている。この B/L は？', choices: ['故障付になる。数量を保証していないから', '受取式になる', '無故障のまま。中身を確かめていないという断り書きにすぎない', '無効になる'], answer: 2, explain: 'said to contain は運送人が中身を確かめていないという断り書きで、欠陥を示すものではない（UCP 600 Art 26）。故障付になるのは、物品や包装の欠陥をはっきり書いた記載があるとき。' },
        { q: "In what sense is an order bill of lading described as 'negotiable'?", choices: ['It can be transferred by indorsement, but the transferee generally obtains no better title than the transferor', 'It gives the transferee a better title than the transferor in every case', 'It cannot be transferred to anyone other than the named consignee', 'It becomes a bill of exchange once it is indorsed'], answer: 0, explain: 'B/L の negotiable は「裏書で譲渡できる」という意味。為替手形のように前の持ち主より強い権利が手に入るわけではない。名前の荷受人にしか渡せないのは記名式。B/L が為替手形に変わることはない。' }
      ]
    },
    {
      id: 'B038',
      no: 38,
      title: '信用状（L/C）の仕組み',
      goal: '信用状の当事者と流れを説明し、独立抽象性と書類取引の原則（銀行は物品ではなく書類を見て払う）を事例に当てはめられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C2(b)'],
      slides: [
        {
          title: '知らない相手との初めての取引',
          paras: ['海外の会社に初めて商品を売る。先に送ったら、代金を払ってもらえないかもしれない。でも買主の側も、先に払ったら商品が届かないかもしれない、と心配する。', 'そこで、信用できる銀行が間に入る。銀行が「この書類がそろえば私が払う」と約束する。これが信用状（letter of credit、L/C。正式には documentary credit）。']
        },
        {
          title: '当事者',
          table: { caption: '信用状の当事者（UCP 600 Art 2）', head: ['当事者', 'だれ・何をする'], rows: [['発行依頼人（applicant）', '買主。自分の銀行に信用状の発行を頼む'], ['発行銀行（issuing bank）', '買主の銀行。売主に支払を約束する'], ['受益人（beneficiary）', '売主。書類を出せば支払を受けられる'], ['通知銀行（advising bank）', '売主の国の銀行。信用状を売主に伝える'], ['確認銀行（confirming bank）', '発行銀行に加えて、自分も支払を約束する銀行']] },
          after: '支払の方法も信用状に書く（Art 6）: 書類と引換えにすぐ払う一覧払い（sight payment）、後日払い（deferred payment）、為替手形の引受（acceptance）、買取（negotiation）。'
        },
        {
          title: '信用状の流れ',
          svg: `<svg viewBox="0 0 440 380" role="img" aria-label="信用状の6つの手順" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">信用状の流れ</text><rect x="20" y="50" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="78" fill="var(--ink)">① 買主が発行銀行に信用状の開設を頼む</text><rect x="20" y="104" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="132" fill="var(--ink)">② 発行銀行が発行し、通知銀行が売主に伝える</text><rect x="20" y="158" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="186" fill="var(--ink)">③ 売主が物品を船に積み、B/L を受け取る</text><rect x="20" y="212" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="240" fill="var(--ink)">④ 売主が書類を銀行に出す（呈示）</text><rect x="20" y="266" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="34" y="294" font-weight="600" fill="var(--ink)">⑤ 書類が条件どおりなら、銀行が支払う</text><rect x="20" y="320" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="348" fill="var(--ink)">⑥ 買主は代金を払って書類を受け取り、物品を引き取る</text></svg>`,
          caption: '⑥ で買主が受け取る書類の中に B/L がある。買主はその B/L を到着港の運送人に出して、物品を受け取る。'
        },
        {
          title: '書類取引の原則（UCP 600 Art 5）',
          formula: '銀行は書類を扱う。物品は扱わない',
          paras: ['銀行は、出された書類が、見た目のうえで（on their face）信用状の条件に合っているかだけを調べる（Art 14）。物品を見に行くことはしない。', '条件に合った呈示（complying presentation）なら、発行銀行は支払う（honour）義務を負う（Art 7）。']
        },
        {
          title: '独立抽象性の原則（UCP 600 Art 4）',
          paras: ['信用状は、もとになった売買契約とは別の取引になる。信用状の中で売買契約に触れていても、銀行は売買契約に縛られない。', 'だから買主は「物品が不良品だった」という売買契約上の言い分で、銀行の支払を止めることはできない。物品の問題は、買主が売主に対して売買契約（CISG など）で請求する。これを autonomy（独立抽象性）という。']
        },
        {
          title: '例: 物品が不良でも銀行は払う？',
          example: {
            problem: 'サクラ社はメープル社に機械部品を $100,000 で売り、信用状で支払を受ける。必要書類は、商業送り状・無故障の船積式 B/L（原本一式）・保険証券。サクラ社は条件どおりの書類を出した。ところが届いた部品の一部が、梱包の不備で錆びていた。メープル社は発行銀行に「払わないで」と頼んだ。',
            steps: ['銀行が調べるのは書類だけ（Art 5・14）。書類は条件どおり', '信用状は売買契約とは別の取引（Art 4）。物品の不良は銀行が支払を拒む理由にならない', '発行銀行は $100,000 を支払う義務を負う（Art 7）', 'メープル社は、売買契約にもとづいてサクラ社に不適合の救済（損害賠償など）を求める'],
            answer: '銀行は $100,000 を支払う。物品の問題は、売主と買主の売買契約の問題として別に解決する'
          }
        },
        {
          title: 'なぜ？ 銀行が書類だけで払う理由',
          paras: ['銀行は機械部品やコーヒー豆の専門家ではない。物品を調べて払うなら、時間もお金もかかり、判断もぶれる。', '書類だけで決めるから、売主は「書類さえそろえれば確実に払われる」と安心して船に積める。買主も「物品が積まれたことを示す書類が出るまでは払われない」と安心できる。互いを知らない相手でも取引ができるのは、この割り切りのおかげ。'],
          note: { kind: 'tip', text: '例外は、受益人（売主）自身の詐欺。英国の United City Merchants v Royal Bank of Canada（1983年、貴族院）は、売主自身が詐欺に関わっていれば銀行は支払を拒めるが、売主の知らない第三者が B/L の日付を偽っただけなら銀行は払わなければならない、とした。例外の範囲はとても狭い。' }
        },
        {
          title: 'UCP 600 とは',
          paras: ['UCP 600（信用状統一規則、Uniform Customs and Practice for Documentary Credits）は、ICC（国際商業会議所）が作った民間の規則。2007年から使われている。', '法律でも条約でもない。信用状の本文に「UCP 600 に従う」と書いてあるときに適用される（Art 1）。世界の信用状の大半がこれを取り入れている。'],
          note: { kind: 'tip', text: '通知銀行は、信用状が本物らしいかを確かめて売主に伝えるだけで、自分では支払を約束しない（Art 9）。支払を約束するのは発行銀行と、確認した場合の確認銀行。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「銀行は物品を検査してから払う」「買主は物品が悪ければ銀行の支払を止められる」と考える。どちらも誤り。銀行は書類だけを見て、書類が条件どおりなら払う。また、受益人（beneficiary）を買主と取り違えやすい。受益人は支払を受ける売主、発行依頼人（applicant）が買主。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['当事者: 買主＝発行依頼人、売主＝受益人、買主の銀行＝発行銀行、売主の国の銀行＝通知（確認）銀行', '銀行は書類を扱い、物品は扱わない（Art 5）。条件どおりの書類なら支払う', '信用状は売買契約と別の取引（Art 4）。物品の不良は売買契約で解決する']
        },
        {
          title: '英単語',
          words: [
            ['letter of credit / documentary credit', 'レター オブ クレジット', '信用状'],
            ['applicant', 'アプリカント', '発行依頼人（買主）'],
            ['beneficiary', 'ベネフィシャリー', '受益人（売主）'],
            ['issuing bank', 'イシューイング バンク', '発行銀行'],
            ['advising bank', 'アドバイジング バンク', '通知銀行'],
            ['complying presentation', 'コンプライング プレゼンテーション', '条件に合った書類の呈示'],
            ['honour', 'オナー', '（信用状にもとづいて）支払う'],
            ['autonomy of the credit', 'オートノミー', '信用状の独立抽象性']
          ]
        }
      ],
      quiz: [
        { q: 'In a documentary credit transaction, the buyer who requests its bank to issue the credit is known as the:', choices: ['Beneficiary', 'Advising bank', 'Confirming bank', 'Applicant'], answer: 3, explain: '発行を頼む買主は applicant（発行依頼人）。beneficiary（受益人）は支払を受ける売主。advising bank と confirming bank は売主側の銀行。' },
        { q: 'A seller presents documents which comply with the terms of an irrevocable credit. The buyer then tells the issuing bank that the goods are defective. Which of the following is correct?', choices: ['The issuing bank must refuse payment on the instructions of the buyer', 'The issuing bank must inspect the goods before deciding whether to pay', 'The issuing bank must honour the credit, because banks deal with documents and not with goods', 'The issuing bank may pay only the value of the goods which are not defective'], answer: 2, explain: '書類取引の原則（Art 5）と独立抽象性（Art 4）により、条件どおりの書類なら発行銀行は支払う。買主の指示で止めることはできず、物品の検査もしない。一部だけ払うルールもない。物品の不良は売買契約で解決する。' },
        { q: '信用状の受益人（beneficiary）はだれ？', choices: ['買主', '売主', '発行銀行', '運送人'], answer: 1, explain: '受益人は信用状にもとづいて支払を受ける人、つまり売主。買主は発行依頼人（applicant）。' },
        { q: '通知銀行（advising bank）について正しいものは？', choices: ['発行銀行と同じように、必ず支払を約束する', '買主の代わりに物品を検査する', '売買契約の当事者になる', '信用状が本物らしいかを確かめて売主に伝えるが、それだけでは支払を約束しない'], answer: 3, explain: 'UCP 600 Art 9 により、通知銀行は支払の約束なしに信用状を通知する。自分も支払を約束するのは、確認をした確認銀行（次のレッスン）。物品の検査はどの銀行もしない。' },
        { q: 'Which of the following statements about UCP 600 is correct?', choices: ['They are rules issued by the ICC which apply to a credit when its text expressly indicates that it is subject to them', 'They are a United Nations convention which applies automatically to every international sale', 'They are an English statute which applies to all bills of lading', 'They are rules issued by UNCITRAL which apply only to sea transport'], answer: 0, explain: 'UCP 600 は ICC の民間の規則で、信用状に「UCP 600 に従う」と書いたときに適用される（Art 1）。国連の条約でも英国の法律でもない。UNCITRAL が作ったのは CISG など。' },
        { q: '（B023 の復習）売買契約で「信用状で払う」と決めた。支払日はまだ先だが、買主は約束の期限までに信用状を開設しなかった。CISG ではどうなる？', choices: ['支払日が来ていないので、まだ違反ではない', '支払の準備の手続をしなかったので、代金を支払う義務の違反になる', '信用状は銀行の問題なので、買主の義務とは関係がない', '売主が物品を引き渡すまでは、何の問題もない'], answer: 1, explain: 'CISG Art 54 は、契約で決めた支払の手続（信用状の開設など）も代金を支払う義務に含める。支払日の前でも違反になりうる。信用状の開設は、買主が自分の銀行に頼んで行うもの。' }
      ]
    },
    {
      id: 'B039',
      no: 39,
      title: '信用状の種類と書類の不一致',
      goal: '取消不能信用状と確認信用状の違いを説明し、書類の厳格一致の原則と、書類が条件と違うときの結果を事例に当てはめられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C2(b)'],
      slides: [
        {
          title: '役所の手続で考える',
          paras: ['役所の窓口では、書類の名前の漢字が1字違うだけで受け付けてもらえないことがある。「同じ人だと分かるでしょう」と言っても通らない。', '信用状の銀行も同じように厳しい。そのうえで、売主は「その約束は取り消されないか」「その銀行は本当に払えるか」も気にする。このレッスンでは、約束の強さ（信用状の種類）と、書類の厳しさ（厳格一致）を学ぶ。']
        },
        {
          title: '取消不能信用状（irrevocable credit）',
          paras: ['UCP 600 では、信用状は、そう書いていなくても取消不能になる（Art 3）。', '一度発行したら、発行銀行・確認銀行（ある場合）・受益人の全員が同意しない限り、変更も取消しもできない（Art 10）。買主や発行銀行の都合だけで、売主への約束を取り消すことはできない。'],
          note: { kind: 'tip', text: '昔の取消可能信用状（revocable credit）は、発行銀行がいつでも取り消せたので、売主にはほとんど安心にならなかった。UCP 600 は取消可能信用状を定めていない。' }
        },
        {
          title: '確認信用状（confirmed credit）',
          paras: ['取消不能でも、発行銀行が倒産したり、買主の国が外貨の送金を止めたりすれば、売主は払ってもらえないかもしれない。', 'そこで、売主の国の銀行（ふつうは通知銀行）が、発行銀行の依頼で確認（confirmation）を加える。確認銀行は、発行銀行とは別に、自分も支払を約束する（Art 8）。'],
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="確認信用状では発行銀行と確認銀行の2つの銀行が売主に支払を約束する" font-size="14"><rect x="20" y="40" width="180" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="68" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">発行銀行</text><text x="110" y="90" text-anchor="middle" fill="var(--quiet)">買主の国</text><rect x="240" y="40" width="180" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="330" y="68" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">確認銀行</text><text x="330" y="90" text-anchor="middle" fill="var(--ink)">売主の国</text><line x1="110" y1="104" x2="181" y2="160" stroke="var(--ink)" stroke-width="1.5"/><polygon points="190,167 177,164 184,155" fill="var(--ink)"/><line x1="330" y1="104" x2="259" y2="160" stroke="var(--ink)" stroke-width="1.5"/><polygon points="250,167 263,164 256,155" fill="var(--ink)"/><text x="220" y="132" text-anchor="middle" fill="var(--ink)">支払の約束</text><rect x="140" y="170" width="160" height="52" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="202" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">売主（受益人）</text></svg>`,
          caption: '売主は、よく知る自国の銀行に書類を出して払ってもらえる。発行銀行が払えなくなっても、確認銀行の約束が残る。'
        },
        {
          title: '売主にとっての安心の強さ',
          table: { caption: '信用状の主な種類', head: ['種類', '中身', '安心・用途'], rows: [['取消可能', '発行銀行がいつでも取り消せる（UCP 600 にはない）', '低い'], ['取消不能（確認なし）', '発行銀行だけが約束', '中くらい'], ['確認付き取消不能', '発行銀行と確認銀行の2つが約束', 'いちばん高い'], ['譲渡可能（transferable）', '「transferable」と明記したときだけ、受益人が別の人（仕入先など）に権利を譲れる（Art 38）', '仲介業者向け'], ['バック・トゥ・バック（back-to-back）', '仲介業者が、自分あての信用状を裏付けに、仕入先あての2つ目の信用状を開いてもらう', '仲介業者向け'], ['スタンドバイ（standby）', '物品の代金ではなく、相手が義務を果たさないときに払う約束', '保証の代わり']] },
          after: '確認には手数料がかかる。誰が負担するかは当事者の取決めで決める。'
        },
        {
          title: '書類の厳格一致の原則（doctrine of strict compliance）',
          paras: ['銀行は、書類が信用状の条件に厳密に合っているときだけ払う。英国の Equitable Trust Co of New York v Dawson Partners（1927年）では「ほとんど同じ書類や、同じくらい役に立つ書類の入る余地はない」と述べられた。', 'J H Rayner v Hambro\'s Bank（1943年）では、信用状は「Coromandel groundnuts」、B/L は「machine-shelled groundnut kernels」だった。業界では同じものだと分かっていても、銀行は支払を拒めるとされた。'],
          note: { kind: 'tip', text: 'UCP 600 では、商業送り状の物品の記述は信用状と一致しなければならない（Art 18）。ほかの書類は、矛盾しなければ一般的な書き方でもよい（Art 14）。' }
        },
        {
          title: '期限のルール（UCP 600 Art 14・16）',
          list: ['B/L などの運送書類の原本は、船積みの日から21暦日以内、かつ信用状の有効期限までに呈示する', '銀行が書類を調べる期間は、呈示の翌日から最長5銀行営業日', '支払を拒むなら、不一致（discrepancy）を全部書いた1回の通知を、その5銀行営業日目の終わりまでに出す。出さなければ、後で「不一致だった」と言えなくなる'],
          example: {
            problem: '物品の船積みは5月10日。信用状の有効期限は6月15日。運送書類を呈示できる最後の日は？',
            steps: ['船積みの日から21暦日: 5月10日＋21日＝5月31日', '有効期限は6月15日。5月31日の方が早い', '2つの期限のうち早い方が最後の日になる'],
            answer: '5月31日。有効期限が後でも、21日の期限を過ぎた呈示は不一致になる'
          }
        },
        {
          title: '書類が条件と違ったらどうなる',
          list: ['銀行は支払を拒める（Art 16）。売主は「確実に払ってもらえる」という銀行の約束を失う', '期限内なら、売主は書類を直して出し直せる', '発行銀行は、買主に「不一致があっても受け入れるか」を聞ける。買主が受け入れれば払われる。ただし相場が下がっていると、買主は値引きを求めたり断ったりしやすい', '断られたら、売主は売買契約にもとづいて買主に代金を求めるしかない。物品は到着港で止まり、保管料もかかる'],
          after: 'よくある不一致: 呈示の遅れ、故障付や受取式の B/L、金額の超過、保険の金額不足、書類どうしの食い違い。'
        },
        {
          title: 'なぜ？ 厳しく合わせる理由',
          paras: ['発行銀行は、買主の指示（委任）を受けて払う立場にある。指示と違う書類で払うと、買主からお金を返してもらえない。', 'また銀行は物品の専門家ではない。「業界では同じ意味」を銀行に判断させると、速くて確実な支払という信用状の良さが失われる。文字どおり比べるから、誰が調べても同じ結論になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「小さな違いだから払ってもらえるはず」と考える。不一致があれば、銀行は支払を拒める。逆に、すべての書類が一字一句同じでなければならないわけでもない。物品の記述を信用状と一致させるのは商業送り状で、ほかの書類は矛盾しなければよい。また「取消不能」と「確認付き」を同じものと思わない。取消不能は約束を取り消せないこと、確認は2つ目の銀行の約束が加わること。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['UCP 600 の信用状は書いていなくても取消不能（Art 3）。売主にいちばん安心なのは確認付き取消不能信用状', '厳格一致: ほとんど同じ書類では足りない。不一致なら銀行は支払を拒める', '期限: 船積みから21暦日以内かつ有効期限まで。銀行の審査は最長5銀行営業日、拒むなら不一致を全部書いて1回で通知']
        },
        {
          title: '英単語',
          words: [
            ['irrevocable credit', 'イリヴォーカブル', '取消不能信用状'],
            ['confirmed credit', 'コンファームド', '確認信用状'],
            ['confirming bank', 'コンファーミング バンク', '確認銀行'],
            ['transferable credit', 'トランスファラブル', '譲渡可能信用状'],
            ['strict compliance', 'ストリクト コンプライアンス', '厳格一致'],
            ['discrepancy', 'ディスクレパンシー', '書類の不一致'],
            ['expiry date', 'エクスパイアリー デイト', '有効期限'],
            ['banking day', 'バンキング デイ', '銀行営業日']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following types of documentary credit gives the seller the greatest security of payment?', choices: ['An unconfirmed irrevocable credit', 'A revocable credit', 'A confirmed irrevocable credit', 'A transferable credit'], answer: 2, explain: '確認付き取消不能信用状は、発行銀行と確認銀行の2つが支払を約束するので、売主にいちばん安心。確認なしは発行銀行だけの約束。取消可能は取り消されうる。譲渡可能は権利を譲れるという性質で、安心の強さとは別の話。' },
        { q: 'A credit requires a commercial invoice describing the goods as "100 tonnes Brazilian green coffee beans". The invoice presented describes the goods as "100 tonnes coffee". Which of the following is correct?', choices: ['The bank is entitled to refuse the documents, because the description in the invoice must correspond with the credit', 'The bank must pay, because the quantity is correct', 'The bank must pay, because traders would understand that the goods are the same', 'The bank must inspect the goods to decide whether they are Brazilian green coffee beans'], answer: 0, explain: '商業送り状の物品の記述は信用状と一致しなければならない（UCP 600 Art 18）。厳格一致の原則により、数量が合っていても、業界で同じと分かっても、銀行は拒める（J H Rayner v Hambro\'s Bank）。銀行は物品を調べない。' },
        { q: '物品の船積みは5月10日、信用状の有効期限は6月15日。UCP 600 では、B/L の原本を呈示できる最後の日は5月何日？', type: 'number', answer: 31, unit: '日', explain: '船積みの日から21暦日以内、かつ有効期限まで（Art 14(c)）。5月10日＋21日＝5月31日。有効期限の6月15日より早いので、5月31日が最後の日。6月15日と答えるのは、21日のルールを忘れた間違い。' },
        { q: '銀行が書類の不一致を理由に支払を拒むとき、正しいやり方は？', choices: ['有効期限までなら、いつ通知してもよい', '不一致を1つ見つけるたびに、別々に通知すればよい', '口頭で売主に伝えれば足りる', '呈示の翌日から5銀行営業日目の終わりまでに、不一致を全部書いた1回の通知を出す'], answer: 3, explain: 'UCP 600 Art 16 は、不一致を全部書いた1回の通知を、呈示の翌日から5銀行営業日目の終わりまでに出すよう求める。これを守らないと、銀行は後で「書類が条件に合っていない」と言えなくなる（Art 16(f)）。' },
        { q: 'Under UCP 600, a credit which does not state whether it is revocable or irrevocable is:', choices: ['Revocable', 'Void', 'Irrevocable', 'Automatically confirmed'], answer: 2, explain: 'UCP 600 Art 3 は、書いていなくても信用状は取消不能とする。取消可能になるわけでも、無効になるわけでもない。確認は別の銀行が加えるもので、自動では付かない。' },
        { q: '確認信用状で、確認銀行の役割として正しいものは？', choices: ['信用状を売主に伝えるだけで、支払は約束しない', '発行銀行とは別に、自分も条件どおりの書類に対して支払を約束する', '買主の代わりに物品の品質を確認する', '発行銀行が支払った後で、その支払を保証する'], answer: 1, explain: '確認銀行は、発行銀行に加えて独立に支払を約束する（Art 8）。伝えるだけなのは通知銀行。品質の確認はどの銀行もしない。「確認」は品質の確認ではなく、支払の約束を加えること。' }
      ]
    },
    {
      id: 'B040',
      no: 40,
      title: '念書（letter of comfort）：法的な約束か',
      goal: '念書が保証とどう違うか、裁判所が法的拘束力をどう判断するかを、Kleinwort Benson v Malaysia Mining Corporation の事例とあわせて説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C2(b)'],
      slides: [
        {
          title: '子どもの部屋を借りるとき',
          paras: ['大学生の子どもが部屋を借りる。大家が親に連帯保証人になってほしいと頼んだ。親は保証人になるのは断り、代わりに手紙を書いた。「うちの子はきちんと家賃を払う子です。私たちも見守っています」。', '家賃が払われなかったとき、大家はこの手紙を理由に親に請求できるか。保証の署名とは違い、手紙は「安心してほしい」という気持ちを伝えただけかもしれない。']
        },
        {
          title: '念書（letter of comfort）とは',
          paras: ['会社の世界では、子会社が銀行からお金を借りるとき、銀行が親会社に保証（guarantee）を求めることがある。親会社が保証を出したくないとき、代わりに出すのが念書（letter of comfort、comfort letter）。', '中身は「子会社の借入を承知している」「子会社を支える方針である」といった、安心材料（comfort）を与える文章が多い。'],
          formula: '念書＝ふつうは意図や方針の表明。法的な支払義務を負う保証とは違う'
        },
        {
          title: '保証との違い',
          table: { caption: '保証と念書', head: ['項目', '保証（guarantee）', '念書（letter of comfort）'], rows: [['中身', '子会社が払わなければ自分が払うという約束', '承知している、支える方針だ、という表明'], ['法的拘束力', 'ある', 'ふつうはない（書き方による）'], ['銀行の扱い', '確実な回収手段', '弱い。その分、金利や手数料を高くすることが多い'], ['親会社の負担', '支払義務を負う', 'ふつうは評判上・道徳上の責任だけ']] }
        },
        {
          title: '判断の基準：法的関係をつくる意思',
          paras: ['契約になるには、当事者が法的関係をつくる意思（intention to create legal relations）を持っていることが必要。会社どうしの取引では、ふつうはこの意思があると推定される。', 'だから念書でも、文章が「将来こうする」という約束（promise）になっていれば、契約として拘束される可能性がある。逆に「今の方針はこうだ」という事実の表明（statement of present fact）なら、約束ではない。裁判所は、念書の段落ごとに言葉を読んで判断する。']
        },
        {
          title: '書き方で決まる',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="念書は書き方によって拘束力のない表明から拘束力のある約束まで分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">念書の言葉で決まる</text><line x1="20" y1="66" x2="410" y2="66" stroke="var(--ink)" stroke-width="1.5"/><polygon points="420,66 408,60 408,72" fill="var(--ink)"/><text x="20" y="92" fill="var(--quiet)">拘束力なし</text><text x="420" y="92" text-anchor="end" fill="var(--quiet)">拘束力あり</text><rect x="20" y="112" width="124" height="120" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="146" text-anchor="middle" fill="var(--ink)">子会社の借入を</text><text x="82" y="168" text-anchor="middle" fill="var(--ink)">承知している</text><text x="82" y="208" text-anchor="middle" font-size="12.5" fill="var(--quiet)">awareness</text><rect x="158" y="112" width="124" height="120" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="146" text-anchor="middle" fill="var(--ink)">支えるのが</text><text x="220" y="168" text-anchor="middle" fill="var(--ink)">当社の方針だ</text><text x="220" y="208" text-anchor="middle" font-size="12.5" fill="var(--ink)">policy</text><rect x="296" y="112" width="124" height="120" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="358" y="146" text-anchor="middle" fill="var(--ink)">必ず返済させる</text><text x="358" y="168" text-anchor="middle" fill="var(--ink)">と約束する</text><text x="358" y="208" text-anchor="middle" font-size="12.5" fill="var(--quiet)">promise</text></svg>`,
          caption: '真ん中の「方針だ」は、次の Kleinwort Benson 事件で拘束力がないとされた書き方。「約束する」とはっきり書けば、保証に近づく。'
        },
        {
          title: '判例: Kleinwort Benson v Malaysia Mining Corporation（1989年、英国控訴院）',
          paras: ['銀行 Kleinwort Benson は、Malaysia Mining Corporation（MMC）の子会社に融資した。MMC は保証を断り、念書を出した。銀行はそれを受け入れ、その分高い金利をとった。', '念書には「子会社が常に貴行への債務を払える状態にあるようにするのが、当社の方針である（it is our policy to ensure...）」とあった。その後、錫（すず）の相場が崩れて子会社は清算に入った。銀行は MMC に支払を求めた。', '控訴院は、この文は念書を出した時点の方針という事実の表明で、将来の行動の約束ではないとした。銀行の請求は認められなかった。']
        },
        {
          title: 'なぜ？ 念書が使われる理由',
          paras: ['親会社は、保証を出すと支払義務を負い、偶発負債として開示が必要になったり、借入の枠を圧迫したりする。念書なら法的な負担を避けながら、子会社を応援する姿勢を示せる。', '銀行も、拘束力が弱いことを承知のうえで、高い金利や、親会社が評判を守ろうとする圧力を頼りに受け入れる。法的に守られたいなら、保証を求めるべきだった。Kleinwort Benson 事件の教訓はここにある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「念書は絶対に法的拘束力がない」と覚える。正しくは、ふつうは拘束力がないが、言葉が将来の行動をはっきり約束していれば契約になりうる。もう1つは、念書を保証と同じものと考えること。念書は名前のとおり「安心させる」手紙で、支払を肩代わりする約束ではない。また、念書は信用状とも違う。信用状は銀行の支払の約束、念書はふつう親会社の方針の表明。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['念書＝保証の代わりに親会社などが出す手紙。ふつうは法的拘束力のない方針や意図の表明', '拘束力は言葉で決まる。将来の約束なら契約になりうる。今の方針の表明なら約束ではない', 'Kleinwort Benson v MMC（1989年）:「当社の方針である」は事実の表明で、銀行は親会社に請求できなかった']
        },
        {
          title: '英単語',
          words: [
            ['letter of comfort', 'レター オブ カンフォート', '念書'],
            ['guarantee', 'ギャランティー', '保証'],
            ['parent company / subsidiary', '', '親会社 / 子会社'],
            ['intention to create legal relations', '', '法的関係をつくる意思'],
            ['statement of present fact', '', '現在の事実の表明'],
            ['contractual promise', '', '契約上の約束'],
            ['moral obligation', 'モラル オブリゲーション', '道徳上の責任']
          ]
        }
      ],
      quiz: [
        { q: 'A parent company refuses to guarantee a loan made by a bank to its subsidiary, but writes to the bank stating: "It is our policy to ensure that our subsidiary is at all times in a position to meet its liabilities to you." Following Kleinwort Benson v Malaysia Mining Corporation, this statement is most likely to be treated as:', choices: ['A binding guarantee of the subsidiary\'s debts', 'A confirmed letter of credit', 'A promise which makes the parent company liable for all the debts of the subsidiary to every creditor', 'A statement of present fact which does not amount to a contractual promise'], answer: 3, explain: 'Kleinwort Benson 事件で、控訴院は「当社の方針である」は念書を出した時点の方針という事実の表明で、将来の約束ではないとした。保証にはならない。信用状は銀行の支払の約束で、まったく別のもの。すべての債権者への責任も生じない。' },
        { q: 'Which of the following best describes a letter of comfort?', choices: ['A document, usually from a parent company, giving assurance about a subsidiary\'s borrowing, which is normally not legally binding', 'A guarantee under which the parent company must pay if the subsidiary defaults', 'A document of title to goods carried by sea', 'An undertaking by a bank to pay the seller against documents'], answer: 0, explain: '念書は、ふつう親会社が子会社の借入について安心材料を与える手紙で、通常は法的拘束力がない。支払義務を負うのは保証。権原証券は船荷証券。書類と引換えに銀行が払うのは信用状。' },
        { q: '念書に法的拘束力があるかどうかを、裁判所はどう判断する？', choices: ['「念書」という題名なら、必ず拘束力がないとする', '念書の言葉が、将来の行動の約束か、今の方針や事実の表明かを読んで判断する', '会社どうしの文書なので、必ず拘束力があるとする', '銀行が高い金利をとったかどうかだけで判断する'], answer: 1, explain: '法的関係をつくる意思の問題で、言葉を段落ごとに読む。題名だけでは決まらない。会社どうしなら意思は推定されるが、言葉が約束になっていなければ契約にはならない。金利は事情の1つにすぎない。' },
        { q: 'Kleinwort Benson 事件で、銀行が念書を受け入れたときにしていたことは？', choices: ['親会社に保証の署名もさせた', '念書を信用状に切り替えた', '保証よりも弱い手段なので、その分高い金利をとった', '子会社の物品を担保にとった'], answer: 2, explain: '銀行は MMC に保証を断られ、念書を受け入れて、その分高い金利をとった。裁判所は、銀行が保証より弱い手段だと承知していたことも踏まえた。保証の署名があれば、そもそも念書は問題にならなかった。' },
        { q: '保証（guarantee）と念書（letter of comfort）の違いとして正しいものは？', choices: ['保証は子会社が払わなければ自分が払う約束で、念書はふつう方針や意図の表明にとどまる', 'どちらも必ず法的拘束力がある', 'どちらも法的拘束力はなく、道徳上の責任だけである', '念書の方が保証より強い支払義務を生む'], answer: 0, explain: '保証は法的な支払の約束。念書はふつう拘束力のない表明で、書き方によっては約束になりうる。念書が保証より強いということはない。' }
      ]
    },
    {
      id: 'B041',
      no: 41,
      title: '第3部 総合演習：輸出取引を通して見る',
      goal: 'CIF 契約・船荷証券・確認信用状を使う1件の輸出取引で、危険と費用の分担、必要な書類、支払の流れを判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:C1(a)', 'K3:C2(a)', 'K3:C2(b)', 'K3:B2(d)'],
      slides: [
        {
          title: '今回の取引',
          table: { caption: 'サクラ社の輸出', head: ['項目', '内容'], rows: [['売主', 'サクラ社（日本、名古屋の工場）'], ['買主', 'メープル社（カナダ）'], ['物品と代金', '機械部品、$200,000'], ['貿易条件', 'CIF Vancouver（Incoterms 2020）'], ['支払', '確認付き取消不能信用状（UCP 600）。発行銀行はカナダの銀行、確認銀行は東京の銀行'], ['適用される条約', 'CISG（日本もカナダも締約国）']] },
          after: '第2部（CISG）、第3部（インコタームズ・B/L・信用状）の知識を、この1件に順番に当てはめていく。'
        },
        {
          title: 'ステップ1: CIF で決まること（インコタームズ）',
          list: ['売主: 横浜からバンクーバーまでの運送契約を結び、運賃を払う', '売主: 運送中の保険をかけ、保険料を払う。最低の補償（協会貨物約款 C）で、金額は代金の110%以上', '売主: 輸出の通関。買主: 輸入の通関', '危険: 横浜で物品が本船の船上に置かれた時に買主へ移る'],
          note: { kind: 'tip', text: 'C グループは「費用の分かれ目（到着港まで売主）」と「危険の分かれ目（積出港の船上）」が別の場所にある。インコタームズは所有権の移転や代金の支払方法は決めない。それは売買契約と信用状の役目。' }
        },
        {
          title: '危険と費用の分かれ目',
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="CIF Vancouver では危険は横浜の船上で買主に移り、運賃と保険料はバンクーバーまで売主が払う" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">CIF Vancouver：危険と費用</text><text x="60" y="94" text-anchor="middle" fill="var(--ink)">工場</text><text x="180" y="94" text-anchor="middle" fill="var(--ink)">横浜で船上</text><text x="370" y="94" text-anchor="middle" fill="var(--ink)">バンクーバー港</text><line x1="40" y1="116" x2="400" y2="116" stroke="var(--edge)" stroke-width="2"/><circle cx="60" cy="116" r="7" fill="var(--ink)"/><circle cx="180" cy="116" r="9" fill="var(--accent)"/><circle cx="370" cy="116" r="7" fill="var(--ink)"/><rect x="40" y="140" width="140" height="36" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="163" text-anchor="middle" fill="var(--ink)">危険は売主</text><rect x="180" y="140" width="220" height="36" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="290" y="163" text-anchor="middle" fill="var(--ink)">危険は買主</text><rect x="40" y="192" width="330" height="36" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="205" y="215" text-anchor="middle" fill="var(--ink)">運賃と保険料は売主（バンクーバーまで）</text></svg>`,
          caption: '運送中に物品が傷んでも、危険はもう買主にある。だから CIF では、売主がかけた保険が買主を守る形になる（ただし最低の補償の範囲だけ）。'
        },
        {
          title: 'ステップ2: 危険の移転（CISG とインコタームズ）',
          paras: ['CISG だけなら、運送を伴う売買では、物品を最初の運送人に渡した時に危険が移る（Art 67(1)）。売主が特定の場所（例えば横浜）で運送人に渡す義務を負っていなければ、名古屋の工場で独立したトラック会社に渡した時点で買主の危険になる。', '今回は CIF を選んだ。CISG は当事者の合意を優先する（Art 6）ので、危険は横浜の船上で移る。工場から横浜までのトラック事故は、売主の危険になる。', '危険が移った後の滅失や損傷なら、売主のせいでない限り、買主は代金を払う義務を免れない（Art 66）。']
        },
        {
          title: 'ステップ3: 必要な書類',
          list: ['商業送り状（commercial invoice）: 物品の記述を信用状と一致させる', 'B/L: 無故障・船積式・原本一式。信用状の求める指図式で', '保険証券: 代金の110%以上。日付は船積みの日より後にしない（補償が船積みの日から始まると示していれば別）', '期限: 船積みの日から21暦日以内、かつ信用状の有効期限まで'],
          after: 'CIF の売主は、買主が到着港で物品を受け取れる運送書類を渡す義務も負う。B/L が権原証券だから、メープル社は書類を受け取れば、物品が海の上にあっても転売できる。'
        },
        {
          title: '例: 保険をいくらかけるか',
          example: {
            problem: 'CIF の代金は $200,000。信用状は保険の金額を指定していない。サクラ社がかける保険の金額は、最低いくら？',
            steps: ['インコタームズの CIF は、代金の110%以上の保険を求める', 'UCP 600 も、指定がなければ CIF 価額の110%以上を求める（Art 28）', '$200,000 × 110% ＝ $220,000'],
            answer: '$220,000 以上。$200,000 ちょうどでは不足で、書類の不一致になる'
          }
        },
        {
          title: 'ステップ4: 支払の流れ',
          numbered: ['サクラ社が書類を東京の確認銀行に呈示する', '確認銀行は呈示の翌日から最長5銀行営業日で、書類を見た目のうえで審査する', '条件どおりなら、確認銀行が支払う。カナダの発行銀行が倒れていても、確認銀行の約束は残る', '確認銀行は発行銀行から払い戻しを受け、発行銀行はメープル社から代金を受けて書類を渡す', 'メープル社が B/L の原本をバンクーバーの運送人に出し、物品を受け取る']
        },
        {
          title: 'うまくいかない場面',
          list: ['B/L に「20 cartons crushed」: 故障付。確認銀行は支払を拒める。メープル社が不一致を受け入れなければ、サクラ社は売買契約にもとづいて代金を求めるしかない', '航海中の船の火災で物品が傷んだが、書類は条件どおり: 銀行は払う。危険は買主に移っているので損失はメープル社の負担。メープル社は保険会社に請求する', 'メープル社が「物品が悪い」と銀行に支払停止を頼む: 独立抽象性により止められない。売買契約の救済で争う']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '3つのルールの役割を混ぜる。インコタームズは危険・費用・手続の分担（所有権と支払方法は決めない）。B/L は物品の受取証・運送契約の証拠・権原証券。信用状は売買契約とは別の、銀行の支払の約束。また、CIF で売主が保険と運賃を払うからといって、運送中の危険まで売主にあると考えない。危険は横浜の船上で移る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['CIF: 運賃と保険（110%以上、最低の補償）は売主、危険は積出港の船上で買主へ。CISG の Art 67 より契約の条件が優先', '書類: 無故障の船積式 B/L 原本一式、一致した商業送り状、保険証券を21日以内かつ有効期限内に', '確認付き取消不能信用状なら、書類が条件どおりである限り、確認銀行が支払う']
        },
        {
          title: '英単語',
          words: [
            ['CIF (cost, insurance and freight)', 'シーアイエフ', '運賃・保険料込み'],
            ['port of shipment / port of destination', '', '積出港 / 仕向港'],
            ['on board the vessel', 'オン ボード', '本船の船上に'],
            ['passing of risk', 'パッシング オブ リスク', '危険の移転'],
            ['commercial invoice', 'コマーシャル インボイス', '商業送り状'],
            ['insurance document', '', '保険証券（保険書類）']
          ]
        }
      ],
      quiz: [
        { q: 'Sakura Co sells goods to Maple Inc on CIF Vancouver (Incoterms 2020) terms. The goods are shipped from Yokohama. When does the risk of loss of or damage to the goods pass to Maple Inc?', choices: ['When the goods arrive at the port of Vancouver', 'When Maple Inc pays the price under the letter of credit', 'When the bill of lading is transferred to Maple Inc', 'When the goods are placed on board the vessel at Yokohama'], answer: 3, explain: 'CIF では、危険は積出港で本船の船上に置かれた時に移る。バンクーバーまでなのは運賃と保険料の負担で、危険とは分かれ目が違う。代金の支払や B/L の移転は、危険の移転とは関係がない。' },
        { q: 'During the voyage from Yokohama to Vancouver, the goods are damaged by a fire on board the ship. The documents presented under the confirmed irrevocable credit comply with its terms. Which of the following is correct?', choices: ['The confirming bank must refuse payment because the goods are damaged', 'Maple Inc may refuse to reimburse the issuing bank because the goods are damaged', 'The confirming bank must pay, and Maple Inc bears the loss but may claim under the insurance policy', 'Sakura Co must replace the goods because it arranged the insurance'], answer: 2, explain: '書類が条件どおりなので、銀行は払う（書類取引・独立抽象性）。危険は船上で買主に移っているので、損傷は買主の負担で、代金も払う（CISG Art 66）。損失は、売主がかけた保険で取り戻す（火災は最低の補償にも含まれる）。保険を手配したのが売主でも、危険まで売主に残るわけではない。' },
        { q: 'The CIF price is $200,000 and the credit does not state the amount of insurance cover. What is the minimum amount of insurance cover, in $, which the insurance document must show?', type: 'number', answer: 220000, unit: '$', explain: 'CIF（インコタームズ）も UCP 600 Art 28 も、指定がなければ代金（CIF 価額）の110%以上を求める。$200,000 × 110% ＝ $220,000。$200,000 と答えるのは、10%の上乗せを忘れた間違い。' },
        { q: 'After the goods are shipped, the issuing bank in Canada becomes insolvent. Sakura Co presents complying documents to the confirming bank in Tokyo. Which of the following is correct?', choices: ['The confirming bank need not pay, because it only advised the credit', 'The confirming bank must honour the credit, because it has given its own undertaking to pay', 'Sakura Co can only claim in the insolvency of the issuing bank', 'The credit is automatically cancelled because the issuing bank is insolvent'], answer: 1, explain: '確認銀行は発行銀行とは別に、自分も支払を約束している（UCP 600 Art 8）。だから発行銀行が倒れても、条件どおりの書類なら確認銀行が払う。これが確認信用状の目的。通知だけなのは確認のない通知銀行。信用状が自動で取り消されることもない。' },
        { q: 'The contract does not include any Incoterms rule and is governed by the CISG. Sakura Co is not bound to hand the goods over to a carrier at any particular place. It hands the goods to an independent road haulier at its factory in Nagoya for carriage to Yokohama, where they are to be loaded onto a ship. The goods are damaged in a road accident before reaching Yokohama. Who bears the risk?', choices: ['Sakura Co, because risk passes only when the goods are on board the ship', 'Sakura Co, because risk passes only when the buyer receives the goods', 'The road haulier, because it caused the accident', 'Maple Inc, because risk passed when the goods were handed over to the first carrier'], answer: 3, explain: 'インコタームズがなければ CISG Art 67(1) で、運送を伴う売買では最初の運送人（ここでは独立したトラック会社）に渡した時に危険が移る。もし売主が横浜で運送人に渡す義務を負っていれば、横浜で渡すまで危険は移らない。船上で移るのは CIF などを選んだ場合。運送人が責任を負うかは運送契約の別の問題で、売主と買主の間の危険の分担とは別。' },
        { q: 'サクラ社が呈示した B/L に「20 cartons crushed」と書かれていた。ほかの書類は条件どおり。確認銀行はどうできる？', choices: ['故障付の B/L で条件に合わないので、支払を拒める', '20箱は全体の一部なので、支払わなければならない', '物品を調べて、本当につぶれているか確かめてから決める', '代金から20箱分を差し引いて支払う'], answer: 0, explain: '物品・包装の欠陥をはっきり書いた記載があるので故障付になり、無故障を求める条件に合わない（UCP 600 Art 27）。厳格一致の原則により、一部だけでも不一致。銀行は物品を調べず、一部だけ払うこともしない。' }
      ]
    }
  ],
  cards: [
    { id: 'B036-1', lesson: 'B036', q: '船荷証券（B/L）の3つの働きは？', a: '受取証（receipt）、運送契約の証拠、権原証券（document of title）' },
    { id: 'B036-2', lesson: 'B036', q: '権原証券（document of title）とは？', a: 'B/L を渡すと、運送人から物品を受け取る権利も移ること' },
    { id: 'B036-3', lesson: 'B036', q: '到着港で運送人は誰に物品を渡す？', a: 'B/L の原本を出した正当な所持人' },
    { id: 'B036-4', lesson: 'B036', q: '荷送人と運送人の間で、B/L は契約そのもの？', a: 'いいえ。契約の証拠にすぎない（The Ardennes）。譲り受けた人には B/L の条件が契約になる' },
    { id: 'B036-5', lesson: 'B036', q: '航空運送状・海上運送状は権原証券？', a: 'いいえ。受取証と契約の証拠にはなるが、権原証券ではない' },
    { id: 'B036-6', lesson: 'B036', q: 'なぜ銀行は B/L の原本一式（full set）を求める？', a: '原本1通で引渡しが済むと残りは無効。1通でも他人の手にあると物品を取られうるから' },
    { id: 'B037-1', lesson: 'B037', q: '船積式と受取式の違いは？', a: '船積式＝船に積んだ後に発行、受取式＝運送人が受け取った時点（船に積む前）に発行' },
    { id: 'B037-2', lesson: 'B037', q: '故障付（claused）B/L とは？', a: '物品や包装の欠陥をはっきり書いた記載がある B/L' },
    { id: 'B037-3', lesson: 'B037', q: '「said to contain」だけの記載がある B/L は？', a: '無故障のまま。中身を確かめていない断り書きにすぎない' },
    { id: 'B037-4', lesson: 'B037', q: '指図式と記名式の違いは？', a: '指図式（to order）は裏書で譲渡できる。記名式（straight）は裏書で譲渡できない' },
    { id: 'B037-5', lesson: 'B037', q: 'B/L が negotiable というときの意味は？', a: '裏書で譲渡できること。前の持ち主以上の権利は得ない' },
    { id: 'B037-6', lesson: 'B037', q: 'なぜ銀行は無故障の船積式 B/L を求める？', a: '物品が本当に船に乗り、外見上傷みがなかったと分かり、担保として売れるから' },
    { id: 'B038-1', lesson: 'B038', q: '信用状の applicant と beneficiary は？', a: 'applicant＝発行依頼人（買主）、beneficiary＝受益人（売主）' },
    { id: 'B038-2', lesson: 'B038', q: '書類取引の原則（UCP 600 Art 5）とは？', a: '銀行は書類を扱い、物品は扱わない。書類が条件どおりなら払う' },
    { id: 'B038-3', lesson: 'B038', q: '独立抽象性（autonomy、Art 4）とは？', a: '信用状は売買契約と別の取引。物品の不良を理由に支払を止められない' },
    { id: 'B038-4', lesson: 'B038', q: '通知銀行は支払を約束する？', a: 'しない。本物らしいかを確かめて売主に伝えるだけ（Art 9）' },
    { id: 'B038-5', lesson: 'B038', q: 'UCP 600 が適用されるのはいつ？', a: '信用状の本文で UCP 600 に従うと明示したとき（ICC の民間の規則）' },
    { id: 'B039-1', lesson: 'B039', q: '取消不能と書いていない信用状は（UCP 600）？', a: '取消不能（Art 3）' },
    { id: 'B039-2', lesson: 'B039', q: '確認信用状とは？', a: '発行銀行に加え、確認銀行（ふつう売主の国）も独立に支払を約束する信用状' },
    { id: 'B039-3', lesson: 'B039', q: '売主にいちばん安心な信用状は？', a: '確認付き取消不能信用状' },
    { id: 'B039-4', lesson: 'B039', q: '厳格一致の原則とは？', a: '書類が条件に厳密に合うときだけ払う。ほとんど同じでは足りない' },
    { id: 'B039-5', lesson: 'B039', q: '運送書類の呈示の期限は？', a: '船積みの日から21暦日以内、かつ有効期限まで（早い方）' },
    { id: 'B039-6', lesson: 'B039', q: '銀行が書類を拒むときのルールは？', a: '呈示の翌日から5銀行営業日目の終わりまでに、不一致を全部書いた1回の通知' },
    { id: 'B039-7', lesson: 'B039', q: 'バック・トゥ・バック信用状とは？', a: '仲介業者が自分あての信用状を裏付けに、仕入先あてに開いてもらう2つ目の信用状' },
    { id: 'B040-1', lesson: 'B040', q: '念書（letter of comfort）とは？', a: '保証の代わりに親会社などが出す手紙。ふつうは拘束力のない方針や意図の表明' },
    { id: 'B040-2', lesson: 'B040', q: '念書の拘束力は何で決まる？', a: '言葉。将来の約束なら契約になりうる。今の方針・事実の表明なら約束ではない' },
    { id: 'B040-3', lesson: 'B040', q: 'Kleinwort Benson v MMC（1989年）の結論は？', a: '「当社の方針である」は事実の表明で約束ではない。銀行は親会社に請求できなかった' },
    { id: 'B040-4', lesson: 'B040', q: '保証と念書の違いは？', a: '保証＝払わなければ自分が払う法的約束。念書＝ふつうは方針の表明' },
    { id: 'B040-5', lesson: 'B040', q: '親会社が念書を選ぶ理由は？', a: '保証の支払義務（偶発負債）を避けつつ、子会社を支える姿勢を示せるから' },
    { id: 'B041-1', lesson: 'B041', q: 'CIF で危険が移るのは？', a: '積出港で物品が本船の船上に置かれた時' },
    { id: 'B041-2', lesson: 'B041', q: 'CIF の売主が負う費用は？', a: '仕向港までの運賃と保険料（代金の110%以上、最低の補償）、輸出通関' },
    { id: 'B041-3', lesson: 'B041', q: 'インコタームズがない CISG の売買で、運送を伴うと危険はいつ移る？', a: '物品を最初の運送人に渡した時（Art 67(1)）。特定の場所で渡す義務があれば、そこで渡した時' },
    { id: 'B041-4', lesson: 'B041', q: '代金 $200,000 の CIF。保険の最低額は？', a: '$220,000（110%）' },
    { id: 'B041-5', lesson: 'B041', q: '発行銀行が倒れたら、確認信用状の売主は？', a: '条件どおりの書類を出せば、確認銀行が支払う' }
  ]
});
