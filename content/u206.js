(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 206,
  part: 2,
  partTitle: '国際物品売買（ウィーン売買条約 CISG）',
  lessons: [
    {
      id: 'B018',
      no: 18,
      title: '重大な契約違反と契約の解除（avoidance）',
      goal: '違反が重大な契約違反（fundamental breach）に当たるかを Art 25 の2つの要件で判断し、解除は通知で行うことを説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)', 'K3:B2(b)'],
      slides: [
        {
          title: 'ケーキが式の翌日に届いたら',
          paras: ['結婚式用のケーキを注文した。届いたのは式の翌日。これでは注文した意味がない。お金も払いたくないし、契約ごとやめたいと思うのが自然。', '一方、飾りが1つ少しずれていただけなら、式には使える。やめるほどではなく、少し値引きしてもらえば足りる。違反にも「重い」と「軽い」がある。']
        },
        {
          title: 'Art 25：重大な違反の定義',
          paras: ['CISG は違反を、重大な契約違反（fundamental breach）とそれ以外に分ける。違反によって、相手が契約上期待できたものを実質的に奪うほどの不利益（detriment）を与えたら、重大な違反になる。', 'ただし、違反した側がその結果を予見せず、同じ種類の合理的な人（reasonable person）が同じ状況でも予見しなかったはずなら、重大にはならない。'],
          formula: '重大な違反 ＝ 期待を実質的に奪う ＋ その結果が予見できた'
        },
        {
          title: '2つの問いで判断する',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="重大な契約違反かを2つの問いで判断する流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">重大な違反かを2つの問いで判断</text><rect x="20" y="46" width="400" height="48" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="76" text-anchor="middle" font-size="15" fill="var(--ink)">① 期待できたものを実質的に奪ったか？</text><line x1="110" y1="94" x2="110" y2="120" stroke="var(--ink)" stroke-width="1.5"/><polygon points="104,118 116,118 110,127" fill="var(--ink)"/><text x="122" y="114" fill="var(--ink)">はい</text><text x="330" y="114" text-anchor="middle" fill="var(--quiet)">いいえ → 重大ではない</text><rect x="20" y="128" width="400" height="66" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="155" text-anchor="middle" font-size="15" fill="var(--ink)">② 違反した側も、同じ立場の合理的な人も</text><text x="220" y="181" text-anchor="middle" font-size="15" fill="var(--ink)">その結果を予見できなかったか？</text><line x1="110" y1="194" x2="110" y2="220" stroke="var(--ink)" stroke-width="1.5"/><polygon points="104,218 116,218 110,227" fill="var(--ink)"/><text x="122" y="214" fill="var(--ink)">いいえ</text><text x="330" y="214" text-anchor="middle" fill="var(--quiet)">はい → 重大ではない</text><rect x="20" y="228" width="400" height="48" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="258" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">重大な契約違反（fundamental breach）</text><text x="220" y="308" text-anchor="middle" fill="var(--ink)">→ 相手に通知して契約を解除できる（Art 26）</text></svg>`,
          caption: '「予見できなかった」と主張して示すのは、違反した側。本人が予見しなかっただけでは足りない。'
        },
        {
          title: '茶器メーカーの例で確かめる',
          paras: ['京都の茶器メーカー Kyoto Ceramics（売主）が、パリの雑貨店 Paris Maison（買主）にクリスマス用の茶器セット 2,000 個を $40,000 で売った。契約には「12月1日必着。クリスマス商戦用」と書いてある。'],
          list: ['1月10日に届いた → 売る時期を逃し、期待した利益を実質的に奪われた。目的は契約に書いてあり予見できた → 重大な違反', '期日どおり届いたが、20個に小さなキズ → 残りは売れる → 重大な違反ではない。代金減額や損害賠償で調整する']
        },
        {
          title: 'Art 26：解除は通知で',
          paras: ['重大な違反があっても、契約は自動では終わらない。解除の意思表示（declaration of avoidance）を相手に通知して、はじめて効果が出る。', '契約成立後の通知は、状況に合った方法で送れば、遅れても届かなくても、送った側はその通知に頼れる（Art 27）。到達で効力が出る申込み・承諾とは逆になる。']
        },
        {
          title: '解除できる2つの入口',
          table: { caption: '解除の入口（くわしくは B022・B024）', head: ['入口', '買主が解除', '売主が解除'], rows: [['重大な違反', 'Art 49(1)(a)', 'Art 64(1)(a)'], ['付加期間を過ぎても履行がない', '引渡しがない（Art 49(1)(b)）', '支払か引取りがない（Art 64(1)(b)）']] },
          paras: ['2つ目の入口は、期限を決めて催促したのに、それでも履行しない相手との契約をやめられるようにする仕組み。決める追加の期限を付加期間（additional period）という。']
        },
        {
          title: 'なぜ？ 解除のハードルが高い理由',
          paras: ['国際取引では、物品はすでに海を渡っていることが多い。解除して送り返すと、運賃も時間も無駄になる。売主は遠い国で売り先を探し直すことになる。', 'そこで CISG は、できるだけ契約を生かし、損害賠償・代金減額・修理で調整することを優先する。解除は「契約の目的がだめになった」ときの最後の手段にしている。']
        },
        {
          title: 'avoidance は「避ける」でも「無効」でもない',
          paras: ['英語の avoid は「避ける」だが、CISG の avoidance of the contract は契約の解除のこと。解除すると両方ともこれからの義務がなくなり、受け取った物やお金は返し合う（Art 81、B028 で学ぶ）。損害賠償の請求は残る。', '日本の日常感覚では「約束を破られたら、すぐやめていい」と思いがち。CISG では、軽い違反なら損害賠償などは請求できても、契約はやめられない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「違反があった＝解除できる」ではない。重大な違反か、付加期間を過ぎた不履行が必要。重大な違反でも、通知しなければ契約は続いている。予見できなかったと言うには、違反した本人だけでなく、同じ立場の合理的な人も予見できなかったことが必要。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['重大な違反 ＝ 相手の期待を実質的に奪う違反。ただし本人も合理的な人も予見できなかったなら除く（Art 25）', '解除は相手への通知で行う。自動では終わらない（Art 26）', '解除の入口は、重大な違反と、付加期間を過ぎた不履行の2つ']
        },
        {
          title: '英単語',
          words: [
            ['fundamental breach', 'ファンダメンタル ブリーチ', '重大な契約違反'],
            ['detriment', 'デトリメント', '不利益'],
            ['substantially deprive', 'サブスタンシャリー ディプライヴ', '実質的に奪う'],
            ['foresee / foreseeable', 'フォーシー', '予見する／予見できる'],
            ['reasonable person', 'リーズナブル パーソン', '合理的な人（同じ種類・同じ状況の）'],
            ['avoidance of the contract', 'アヴォイダンス', '契約の解除'],
            ['declaration of avoidance', 'デクラレーション オブ アヴォイダンス', '解除の意思表示（通知で行う）']
          ]
        }
      ],
      quiz: [
        { q: 'クリスマス用の商品を「12月1日必着。クリスマス商戦用」と契約した。売主は1月10日に届け、「遅れがそんなに困るとは思わなかった」と言う。CISG ではどう考える？', choices: ['売主本人が予見しなかったので、重大な違反にはならない', '目的が契約に書いてあり、合理的な売主なら予見できたので、重大な違反になりうる', '引渡しの遅れは、どんな場合でも重大な違反になる', '代金を払う前なら、遅れは違反にならない'], answer: 1, explain: '本人が予見しなかったという言い分だけでは足りない。同じ立場の合理的な人も予見できなかったことが必要。目的が契約に書いてあれば予見できた。「どんな場合でも重大」は言い過ぎで、数日の遅れなど軽い遅れは重大ではないことが多い。' },
        { q: 'Under the CISG, a breach of contract is fundamental if it:', choices: ['causes the other party any loss, however small', 'is committed deliberately by the party in breach', 'relates to a term which the contract describes as a condition', 'substantially deprives the other party of what it was entitled to expect under the contract, and the result was foreseeable'], answer: 3, explain: '基準は損害の有無ではなく、期待を実質的に奪うかどうか。わざとかどうかは要件ではない。condition という区別は英国の国内契約法の考え方で、CISG の定義ではない。' },
        { q: 'Under the CISG, how does a party avoid the contract after a fundamental breach by the other party?', choices: ['By giving notice of avoidance to the other party', 'The contract is avoided automatically when the breach occurs', 'Only by obtaining a court order', 'Only by a written notice signed by both parties'], answer: 0, explain: 'Art 26。解除は相手への通知で行う。自動では終わらない。裁判所の命令も、書面や両者の署名も要らない。' },
        { q: "A seller argues that its breach was not fundamental because it did not foresee the serious result. Under Article 25 of the CISG, what else must be true for the seller's argument to succeed?", choices: ['The buyer did not suffer any financial loss', 'The seller offered to pay damages to the buyer', 'A reasonable person of the same kind in the same circumstances would not have foreseen the result either', 'The contract did not contain a fixed delivery date'], answer: 2, explain: '予見可能性は2段で見る。違反した本人が予見せず、かつ同じ種類・同じ状況の合理的な人も予見しなかった場合だけ、重大な違反にならない。' },
        { q: '契約成立後、買主が状況に合った方法で解除の通知を送ったが、郵便の事故で売主に届かなかった。CISG では？', choices: ['届いていないので、解除の効果は出ない', '状況に合った方法で送っていれば、買主はその通知に頼れる', '解除に通知は要らないので関係ない', '通知が届かなかった場合、契約は自動で解除される'], answer: 1, explain: 'Art 27。契約の履行の場面（第3部）の通知は、適切な方法で送れば、届かなくても送った側が頼れる。申込み・承諾（第2部）は到達で効力が出るので、混同しやすい。' }
      ]
    },
    {
      id: 'B019',
      no: 19,
      title: '売主の義務①：物品の引渡しと書類の交付',
      goal: '売主の3つの基本義務（Art 30）と、引渡しの場所（Art 31）・運送に関する義務（Art 32）・時期（Art 33）・書類の交付（Art 34）を当てはめられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)'],
      slides: [
        {
          title: '宅配便に預けたら、送る側の役目は終わり',
          paras: ['フリマアプリで売れた本を、コンビニから宅配便で送る。売った人の仕事は「荷物を預けて発送する」まで。自分でトラックを運転して相手の家まで届けるわけではない。', 'CISG の引渡しも、運送を使う売買ではこの考え方になる。「相手の手元に届いた時」ではない点が、日本語の「引渡し」の感覚と違う。']
        },
        {
          title: 'Art 30：売主の3つの義務',
          list: ['物品を引き渡す（deliver the goods）', '物品に関する書類を交付する（hand over documents）', '物品の所有権を移す（transfer the property）'],
          after: 'どれも「契約と条約が求めるとおりに」行う。ただし、所有権が実際にいつ移るかは CISG は決めていない（Art 4）。それは各国の法律による。'
        },
        {
          title: 'Art 31：どこで引き渡すか',
          paras: ['契約に場所の定めがあれば、それに従う。定めがないときは、次の順に当てはめる。'],
          table: { caption: '引渡しの場所（契約に定めがないとき）', head: ['場面', '引渡しのしかた'], rows: [['(a) 契約が運送を伴う', '買主に送るため、最初の運送人（first carrier）に物品を渡す'], ['(b) 特定の物・特定の在庫から出す物・これから作る物で、契約時に両者がその場所を知っていた', 'その場所で、物品を買主の処分にゆだねる'], ['(c) それ以外', '契約時の売主の営業所で、買主の処分にゆだねる']] },
          after: '買主の処分にゆだねる（place at the buyer\'s disposal）＝ 買主が取りに来れば受け取れる状態にすること。'
        },
        {
          title: '例題：引渡しはいつ終わる？',
          example: {
            problem: 'Kyoto Ceramics（京都）が Paris Maison（パリ）に茶器を売った。契約に引渡し場所の定めはなく、売主が運送を手配する。茶器は京都で運送会社のトラックに積まれて神戸港へ運ばれ、そこから船会社の船でフランスへ向かう。引渡しはどの時点で終わる？',
            steps: ['契約に場所の定めがあるか → ない', '契約は運送を伴うか → 京都からパリへ運ぶので伴う → Art 31(a)', '最初の運送人はだれか → 神戸港の船会社ではなく、京都で荷物を受け取るトラックの運送会社', 'ラベルや書類で、どの荷が契約の物か分からなければ、発送の通知も送る（Art 32(1)）'],
            answer: '京都でトラックの運送会社に茶器を渡した時点で、引渡しの義務は果たされる'
          }
        },
        {
          title: 'なぜ？ 届いた時ではなく、渡した時',
          paras: ['海を渡る間、売主は荷物に手を出せない。管理できない運送中のことまで、到着するまで売主に責任を負わせるのは重すぎる。', 'そこで売主の役目は「運送人に渡す」までにして、運送中の事故には、運送人への請求や保険で備える。運送中の損失をだれが負担するか（危険の移転）は B029 で学ぶ。']
        },
        {
          title: 'Art 32：運送にまつわる3つの義務',
          list: ['発送の通知: 荷物のラベルや船積書類などで、どれが契約の物か分からないときは、品目を特定した発送の通知（notice of consignment）を買主に送る', '運送契約: 売主が運送を手配する約束なら、状況に合った方法と通常の条件で、決めた場所までの運送契約を結ぶ', '保険の情報: 売主に保険をかける義務がなくても、買主に頼まれたら、保険をかけるのに必要な手持ちの情報を渡す']
        },
        {
          title: 'Art 33：いつ引き渡すか',
          table: { caption: '引渡しの時期', head: ['契約の定め', '引き渡す時期'], rows: [['日付が決まっている（決められる）', 'その日'], ['期間が決まっている（例: 3月中）', '期間内のいつでもよい。ただし買主が日を選ぶ約束なら、その日'], ['何も決まっていない', '契約締結後の合理的な期間内（within a reasonable time）']] }
        },
        {
          title: 'Art 34：書類の交付',
          paras: ['書類を交付する義務があれば、契約で決めた時期・場所・形式で渡す。国際取引の書類は、船荷証券（bill of lading）、インボイス、保険証券、原産地証明書など（第3部で学ぶ）。', '期限より前に渡した書類に不備があれば、売主は期限までに直せる。ただし、買主に不合理な不便や費用をかけない場合に限る。直しても、買主は損害賠償を請求できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '運送を伴う売買で「荷物が買主に届いた時が引渡し」と答えるのはよくある間違い。最初の運送人に渡した時。船に積んだ時でもない（最初の運送人がトラックならトラック）。また「3月中」の約束なら、買主が日を選ぶ約束がない限り、3月のどの日でもよい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売主の義務は、物品の引渡し・書類の交付・所有権の移転（Art 30）', '運送を伴う売買では、最初の運送人に渡せば引渡し完了（Art 31(a)）', '時期は、決まった日 → 決まった期間内 → 合理的な期間内（Art 33）']
        },
        {
          title: '英単語',
          words: [
            ['deliver the goods', 'デリバー ザ グッズ', '物品を引き渡す'],
            ['hand over documents', 'ハンド オーバー ドキュメンツ', '書類を交付する'],
            ['transfer the property', 'トランスファー ザ プロパティ', '所有権を移す'],
            ['first carrier', 'ファースト キャリア', '最初の運送人'],
            ["place at the buyer's disposal", 'ディスポーザル', '買主の処分にゆだねる'],
            ['notice of consignment', 'ノーティス オブ コンサインメント', '発送の通知'],
            ['within a reasonable time', '', '合理的な期間内に']
          ]
        }
      ],
      quiz: [
        { q: 'A seller in Japan sells goods to a buyer in France. The contract involves carriage of the goods but does not state a place of delivery. Under the CISG, how does the seller deliver the goods?', choices: ['By handing the goods over to the first carrier for transmission to the buyer', "By placing the goods at the buyer's place of business in France", 'By loading the goods onto the ocean vessel at the port of shipment', "By handing the shipping documents to the buyer's bank"], answer: 0, explain: 'Art 31(a)。運送を伴う売買では、最初の運送人に渡すことが引渡し。買主の営業所まで届ける必要はない。最初の運送人がトラックなら、船に積む前の時点で引渡しが終わる。' },
        { q: 'A contract states that the goods are to be delivered during March. Nothing indicates that the buyer is to choose the date. Under the CISG, when must the seller deliver?', choices: ['On 1 March', 'On 31 March', 'At any time within March', 'Within a reasonable time after the contract was concluded'], answer: 2, explain: 'Art 33(b)。期間が決まっていれば、期間内のいつでもよい（買主が日を選ぶ約束がなければ）。「契約後の合理的な期間内」は、時期が何も決まっていない場合のルール（Art 33(c)）。' },
        { q: '運送を伴わない売買で、物品の場所について両者が知っていた事情もない。契約に引渡し場所の定めもない。売主はどこで引き渡す？', choices: ['買主の営業所に届ける', '契約締結時の売主の営業所で、買主の処分にゆだねる', '最寄りの港で船に積む', '買主が後から指定した倉庫に届ける'], answer: 1, explain: 'Art 31(c)。運送もなく (b) の事情もなければ、契約時の売主の営業所で、買主が受け取れる状態にする。買主の所まで届ける義務はない。' },
        { q: '契約上、保険をかけるのは買主。買主が売主に、保険に必要な情報（重さ、発送日など）を教えてほしいと頼んだ。売主は？', choices: ['保険の義務がないので、断ってよい', '売主が代わりに保険をかけなければならない', '手持ちの情報のうち、保険に必要なものを渡す必要がある', '保険料の半分を負担しなければならない'], answer: 2, explain: 'Art 32(3)。保険をかける義務がない売主でも、頼まれたら保険に必要な情報を渡す。保険をかける義務や保険料の負担までは生じない。' },
        { q: '売主が期限の2週間前に書類を渡したが、インボイスの数量に誤りがあった。直しても買主に不合理な不便や費用はかからない。正しいのは？', choices: ['期限まで直せる。直しても、買主は損害があれば賠償を請求できる', 'すでに違反なので、売主はもう直せない', '期限まで直せる。直せば、買主は一切請求できない', '買主はすぐに契約を解除できる'], answer: 0, explain: 'Art 34。期限前に渡した書類の不備は、期限まで直せる。ただし買主の損害賠償の権利は残る。小さな誤りは重大な違反ではないので、すぐ解除はできない。' },
        { q: "Which of the following is NOT one of the seller's obligations under Article 30 of the CISG?", choices: ['Delivering the goods', 'Handing over any documents relating to the goods', 'Transferring the property in the goods', 'Taking delivery of the goods'], answer: 3, explain: '引取り（taking delivery）は買主の義務（Art 53・60、B023 で学ぶ）。売主の3つは、引渡し・書類の交付・所有権の移転。' }
      ]
    },
    {
      id: 'B020',
      no: 20,
      title: '売主の義務②：物品の適合性と検査・通知',
      goal: '物品が契約に適合しているかを Art 35・36 で判断し、買主の検査（Art 38）と通知（Art 39）の期限を当てはめられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)'],
      slides: [
        {
          title: '「雨のキャンプで使う」と伝えて選んでもらった',
          paras: ['アウトドア店で「雨のキャンプで使う」と伝えて、店員にライトを選んでもらった。雨で壊れたら「目的を伝えたのに」と言いたくなる。', 'ただし、箱も開けずに放っておき、2年半後に「最初から壊れていた」と言っても、店は困る。CISG も、適合性（conformity）のルールと、買主の検査・通知の義務をセットで決めている。']
        },
        {
          title: 'Art 35：契約の中身と4つの基準',
          paras: ['まず、契約が求める数量・品質・種類（description）・包装に合うこと（Art 35(1)）。数量の不足も不適合（lack of conformity）。さらに、別の合意がなければ次の4つも満たす（Art 35(2)）。'],
          list: ['(a) 同じ種類の物品が通常使われる目的に合う（ordinary purpose）', '(b) 契約時に売主に伝えた特定の目的に合う（particular purpose）。ただし買主が売主の技能や判断に頼っていなかった、または頼るのが不合理なら除く', '(c) 売主が示した見本（sample）・ひな型（model）の品質がある', '(d) 通常の方法で、なければ保存・保護に足りる方法で包装されている']
        },
        {
          title: '茶器メーカーの例で確かめる',
          paras: ['Paris Maison は Kyoto Ceramics に「レストランに売るので、業務用食洗機で洗える湯のみが必要」と伝え、商品選びを任せた。届いた湯のみは家庭用なら問題ないが、業務用食洗機で割れた。', '特定の目的が伝えられ、買主は売主の専門知識に頼っていた → (b) の不適合。逆に、買主が自分で型番を指定し「食洗機の件はこちらで確かめる」と言っていたなら、売主に頼っていないので (b) は使えない。']
        },
        {
          title: '売主が責任を負わない場合と、基準の時点',
          list: ['Art 35(3): 契約時に、買主が不適合を知っていた、または知らないはずがなかった場合は、(2)(a)〜(d) の責任を負わない', 'Art 36(1): 基準は、危険が買主に移った時。その時にあった不適合なら、後で表に出ても売主の責任', 'Art 36(2): 危険の移転後に生じた不適合でも、売主の義務違反（例: 「1年間は性能を保つ」という保証）が原因なら責任を負う']
        },
        {
          title: 'Art 38：買主の検査',
          paras: ['買主は、状況に応じてできるだけ短い期間（as short a period as is practicable）のうちに、物品を検査する（または検査させる）。', '運送を伴う契約なら、検査は仕向地（destination）に着くまで延ばせる。運送中に行き先を変えたり買主が転送したりして検査の機会がなく、売主が契約時にその可能性を知っていた（知るべきだった）なら、新しい行き先に着くまで延ばせる。']
        },
        {
          title: 'Art 39：通知の期限',
          paras: ['不適合を発見した時、または発見すべきだった時から合理的な期間内に、内容を特定して（specifying the nature）売主に通知しないと、その不適合を主張できなくなる。どんな場合も、実際に引き渡された日から2年が上限。'],
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="引渡しから検査、発見、通知、2年の上限までの流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">検査と通知のタイムライン</text><line x1="40" y1="110" x2="400" y2="110" stroke="var(--ink)" stroke-width="1.5"/><rect x="250" y="102" width="90" height="16" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><circle cx="50" cy="110" r="5" fill="var(--ink)"/><circle cx="140" cy="110" r="5" fill="var(--ink)"/><circle cx="250" cy="110" r="5" fill="var(--ink)"/><circle cx="390" cy="110" r="5" fill="var(--ink)"/><text x="50" y="90" text-anchor="middle" fill="var(--ink)">引渡し</text><text x="140" y="90" text-anchor="middle" fill="var(--ink)">検査</text><text x="250" y="90" text-anchor="middle" fill="var(--ink)">発見（すべき時）</text><text x="390" y="90" text-anchor="middle" fill="var(--ink)">2年</text><text x="95" y="140" text-anchor="middle" fill="var(--quiet)">できるだけ</text><text x="95" y="158" text-anchor="middle" fill="var(--quiet)">短い期間</text><text x="295" y="140" text-anchor="middle" fill="var(--ink)">合理的な</text><text x="295" y="158" text-anchor="middle" fill="var(--ink)">期間内に通知</text><text x="390" y="140" text-anchor="middle" fill="var(--quiet)">上限</text><text x="220" y="200" text-anchor="middle" fill="var(--ink)">2年は「実際に引き渡された日」から数える</text><text x="220" y="226" text-anchor="middle" fill="var(--ink)">運送があれば、検査は到着地まで延ばせる</text><text x="220" y="252" text-anchor="middle" fill="var(--ink)">保証期間の定めと合わなければ、保証期間による</text></svg>`
        },
        {
          title: '例題：2年の上限',
          example: {
            problem: 'Paris Maison は 2028年5月10日に茶器を受け取った。内側のひびは、使い込まないと分からない隠れた欠陥だった。2030年6月20日に初めて見つかり、すぐ通知した。契約に保証期間の定めはない。買主は不適合を主張できる？',
            steps: ['2年の起点は、実際に引き渡された日: 2028年5月10日', '上限は 2030年5月10日', '通知は 2030年6月20日 → 上限を過ぎている', '見つけてすぐ通知したかどうかは関係ない。2年の上限が先に来る。通知の遅れに合理的な理由があっても、Art 44 で2年の上限は延びない', '例外の確認: 売主がひびを知っていた（知らないはずがなかった）のに黙っていたなら、売主は Art 38・39 を主張できない（Art 40）'],
            answer: '原則として主張できない（2年の上限を過ぎた）。売主が知っていて（知らないはずがなくて）黙っていた場合だけは別'
          }
        },
        {
          title: 'なぜ？ 買主に検査・通知の義務がある理由',
          paras: ['売主は遠い国にいる。早く知らされれば、証拠を確かめ、代わりの品を送り、自分の仕入先に請求できる。何年も後に言われても、原因を調べようがない。', '例外もある。売主が知っていた（知らないはずがなかった）のに言わなかった不適合なら、売主は検査・通知の遅れを主張できない（Art 40）。通知しなかったことに合理的な理由（reasonable excuse）がある買主は、代金減額か、逸失利益を除く損害賠償なら請求できる（Art 44）。ただし Art 44 は「合理的な期間」の遅れを救うだけで、2年の上限は救わない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '日本の感覚で「不良品なら、いつでも文句を言える」と考えない。CISG では通知が遅れると、不適合を主張する権利そのものを失う。「品質が悪い」だけの通知では足りず、どんな不適合かを特定する。2年は「発見した日から」ではなく「実際に引き渡された日から」。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['適合性は、契約の中身 ＋ 通常の目的・伝えた特定の目的・見本・包装（Art 35）', '基準は危険が移った時。その時の不適合なら後で分かっても売主の責任（Art 36）', '検査はできるだけ早く、通知は発見から合理的な期間内、引渡しから2年が上限（Art 38・39）']
        },
        {
          title: '英単語',
          words: [
            ['conformity / lack of conformity', 'コンフォーミティ', '適合性／不適合'],
            ['fit for the purpose', 'フィット フォー ザ パーパス', '目的に合う'],
            ['particular purpose', 'パティキュラー パーパス', '特定の目的'],
            ['sample or model', 'サンプル オア モデル', '見本・ひな型'],
            ['examine / examination', 'イグザミン', '検査する／検査'],
            ['give notice specifying the nature', 'スペシファイング', '内容を特定して通知する'],
            ['contractual period of guarantee', 'ギャランティー', '契約上の保証期間']
          ]
        }
      ],
      quiz: [
        { q: "When the contract was made, a buyer told the seller that the machines would be used to process frozen food, and relied on the seller's expertise in choosing the model. The machines work normally but cannot handle frozen food. Under the CISG, do the goods conform with the contract?", choices: ['Yes, because the machines are fit for their ordinary purpose', 'No, because they are not fit for a particular purpose made known to the seller, on which the buyer reasonably relied', 'Yes, because the contract did not state the purpose as a condition', 'No, because any defect makes the contract void'], answer: 1, explain: 'Art 35(2)(b)。契約時に伝えた特定の目的に合わず、買主は売主の専門知識に頼っていた。通常の目的に合うだけでは足りない。不適合で契約が無効になることはない。' },
        { q: 'Unless a contractual period of guarantee provides otherwise, what is the latest time by which a buyer must give notice of a lack of conformity under the CISG?', choices: ['Within two years from the date on which the goods were actually handed over to the buyer', 'Within two years from the date on which the buyer discovered the lack of conformity', 'Within one year from the conclusion of the contract', 'There is no time limit if the defect was hidden'], answer: 0, explain: 'Art 39(2)。起点は実際に引き渡された日。発見した日ではない。隠れた欠陥でも2年の上限はかかる（売主が知っていて黙っていた場合は Art 40 で別）。' },
        { q: '契約時、買主は見本を見て「少し色ムラがある」と気づいたうえで契約した。届いた品にも同じ色ムラがあった。売主は Art 35(2) の責任を負う？', choices: ['負う。色ムラは品質の不適合だから', '負う。見本どおりでも、通常の目的に合わないから', '負わない。買主は契約時にその不適合を知っていた', '買主が通知さえすれば、必ず負う'], answer: 2, explain: 'Art 35(3)。契約時に買主が知っていた（知らないはずがなかった）不適合について、Art 35(2) の責任は負わない。見本どおりの品なので (c) の点でも適合している。' },
        { q: '運送を伴う契約で、物品は神戸港から船でマルセイユに向かう。買主はいつ検査すればよい？', choices: ['神戸港で船に積んだ時点ですぐ', '引渡しから2年以内ならいつでも', '売主から求められた時', '仕向地のマルセイユに着いてから、できるだけ短い期間のうちに'], answer: 3, explain: 'Art 38(2)。運送を伴うなら、検査は仕向地に着くまで延ばせる。着いた後はできるだけ短い期間で検査する。2年は通知の上限で、検査の期限ではない。' },
        { q: '危険が買主に移った時点で、内部の部品にすでに欠陥があった。欠陥が表に出たのは3か月後。売主の責任は？', choices: ['危険が移った時にあった不適合なので、責任を負う', '危険が移った後に分かったので、責任はない', '売主が欠陥を知っていた場合だけ責任を負う', '買主が保険をかけていれば、責任はない'], answer: 0, explain: 'Art 36(1)。基準は不適合が存在した時点。危険の移転時にあった不適合なら、後で表に出ても売主の責任。売主が知っていたかは関係ない。' },
        { q: 'Art 39 の通知として、いちばん足りないのはどれ？', choices: ['「500個のうち40個の取っ手にひびがある」と伝えた', '写真を付けて「釉薬がはがれている」と伝えた', '検査報告書を添えて欠陥の種類を示した', '「品質に問題がある」とだけ書いて送った'], answer: 3, explain: '通知は不適合の内容を特定する必要がある（specifying the nature）。「問題がある」だけでは、売主は何を調べ、どう直せばよいか分からない。' }
      ]
    },
    {
      id: 'B021',
      no: 21,
      title: '売主の義務③：第三者の権利・請求',
      goal: '物品に第三者の権利や請求がついていた場合の売主の責任（Art 41）、知的財産権の請求の限定（Art 42）、買主の通知（Art 43）を当てはめられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)'],
      slides: [
        {
          title: '買った自転車に「持ち主」が現れたら',
          paras: ['中古の自転車を買った。数日後、知らない人が「それは盗まれた私の自転車だ。返して」と言ってきた。自転車はちゃんと走るのに、安心して使えない。', '物そのものに傷がなくても、ほかの人の権利や言い分がついていたら困る。CISG は、物品の適合性（B020）とは別に、第三者の権利・請求についての売主の義務を決めている。']
        },
        {
          title: 'Art 41：第三者の権利・請求から自由な物品',
          paras: ['売主は、第三者の権利（right）や請求（claim）がついていない物品を引き渡さなければならない。買主がその権利・請求つきで受け取ることに同意していた場合は別。', '条文は権利だけでなく請求も挙げている。第三者が権利を主張してくるだけで、買主は争いに巻き込まれるから。売主がその権利を知っていたかどうかは問われない。']
        },
        {
          title: 'どんな権利・請求が問題になるか',
          list: ['所有権: 物品が実は他人の物だった（盗品、仕入先がまだ所有権を持っている など）', '担保権: 売主の銀行が物品に担保権（security interest）を持っていた', '知的財産権: 特許・商標・著作権・意匠などの侵害だと言われる'],
          after: '知的財産権にもとづく権利・請求だけは、Art 41 ではなく Art 42 の特別なルールで扱う。'
        },
        {
          title: 'Art 42：知的財産権は範囲を絞る',
          paras: ['売主が責任を負うのは、契約時に売主が知っていた、または知らないはずがなかった権利・請求だけ。さらに、どの国の法律による知的財産権かでも絞られる。'],
          list: ['(a) 契約時に、物品を転売・使用する国として両者が想定していた国の法律', '(b) それ以外は、買主の営業所がある国の法律'],
          after: '責任を負わない場合（Art 42(2)）: 契約時に買主がその権利・請求を知っていた（知らないはずがなかった）とき。買主が渡した図面・設計・仕様に売主が従った結果のとき。'
        },
        {
          title: 'Art 41 と Art 42 の違い',
          table: { caption: '第三者の権利・請求', head: ['比べる点', 'Art 41（所有権・担保など）', 'Art 42（知的財産権）'], rows: [['売主が知っていた必要', 'なし', 'あり（知らないはずがない、を含む）'], ['どの国の権利か', '限定なし', '想定した転売・使用の国、なければ買主の国'], ['売主が責任を負わない場合', '買主が権利つきで受け取ることに同意', '買主が知っていた／買主の図面・仕様に従った']] }
        },
        {
          title: '例題：どの請求に責任を負う？',
          example: {
            problem: 'Kyoto Ceramics が Paris Maison に急須を売った。契約時、両者はフランスで転売すると想定していた。その後、(1) フランスで商標を持つ会社と、(2) ドイツで意匠権を持つ会社が、それぞれ侵害だと請求してきた。売主は (1) の商標を契約時に知っていた。売主は責任を負う？',
            steps: ['(1) フランスの商標: 想定した転売の国はフランス → Art 42(1)(a) の範囲内', '売主は契約時に知っていた → (1) は責任を負う', '(2) ドイツの意匠権: ドイツは想定した転売の国でも、買主の営業所の国でもない → 範囲外', 'ただし、急須の形が Paris Maison の渡した図面どおりなら、(1) でも責任を負わない（Art 42(2)(b)）'],
            answer: '(1) は責任を負う。(2) は負わない'
          }
        },
        {
          title: 'なぜ？ 知的財産権だけ範囲を絞る理由',
          paras: ['知的財産権は国ごとに登録・保護される。売主が世界中の特許や商標を調べ尽くすのは無理。そこで、売主が知り得た権利と、取引で想定した国に限っている。', '買主が自分で図面や仕様を渡したなら、その設計を選んだ買主がリスクを負うのが公平。一方、所有権や担保は売主の手元で起きる問題なので、売主が知らなくても責任を負う（Art 41）。']
        },
        {
          title: 'Art 43：買主の通知',
          paras: ['買主は、第三者の権利・請求に気づいた（気づくべきだった）時から合理的な期間内に、その内容を特定して売主に通知しないと、Art 41・42 を主張できなくなる。', 'ただし、売主がその権利・請求と内容を知っていたなら、売主は通知がなかったことを主張できない（Art 43(2)）。通知しなかった合理的な理由がある買主は、代金減額か、逸失利益を除く損害賠償なら請求できる（Art 44）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'Art 41 は売主が知らなくても責任を負う。知的財産権（Art 42）は、売主が知っていた（知らないはずがなかった）権利だけ。2つを逆に覚えてしまいやすいので注意。また、Art 43 の通知には、Art 39 のような「引渡しから2年」の上限は書かれていない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売主は、第三者の権利・請求がついていない物品を引き渡す。買主の同意があれば別（Art 41）', '知的財産権は、売主が知っていた権利で、想定した転売・使用の国か買主の国の法律によるものだけ（Art 42）', '買主は、気づいてから合理的な期間内に内容を特定して通知する（Art 43）']
        },
        {
          title: '英単語',
          words: [
            ['right or claim of a third party', 'サードパーティ', '第三者の権利・請求'],
            ['free from', 'フリー フロム', '〜がついていない'],
            ['security interest', 'セキュリティ インタレスト', '担保権'],
            ['industrial or intellectual property', 'インテレクチュアル プロパティ', '工業所有権・知的財産'],
            ['infringe / infringement', 'インフリンジ', '侵害する／侵害'],
            ['could not have been unaware', 'アンアウェア', '知らないはずがなかった'],
            ['technical drawings, designs, formulae or specifications', '', '図面・設計・処方・仕様']
          ]
        }
      ],
      quiz: [
        { q: "A seller delivers goods which, without the seller's knowledge, are subject to a security interest held by the seller's bank. The buyer did not agree to take the goods subject to it. Under the CISG, which statement is correct?", choices: ['The seller is not in breach because it did not know of the security interest', 'The seller is in breach only if the bank enforces its security', 'The CISG does not deal with rights of third parties', 'The seller is in breach because the goods must be free from any right or claim of a third party'], answer: 3, explain: 'Art 41。売主が知っていたかは問われない。権利だけでなく請求も対象なので、銀行が実際に担保を実行するまで待つ必要もない。売主が知っていたことが必要なのは知的財産権（Art 42）のほう。' },
        { q: 'A Japanese seller sells goods to a buyer whose place of business is in France. When the contract was concluded, both parties contemplated that the goods would be resold in Italy. Under Article 42 of the CISG, the law of which State is relevant for an intellectual property claim?', choices: ['Japan', 'France', 'Italy', 'Any State in which the goods are later sold'], answer: 2, explain: 'Art 42(1)(a)。契約時に転売・使用の国として想定していた国の法律。想定がなければ買主の営業所の国（ここではフランス）。売主の国やその後たまたま売った国ではない。' },
        { q: '買主が渡した図面どおりに作った製品について、買主の国の特許を侵害していると第三者が請求してきた。売主は Art 42 の責任を負う？', choices: ['負わない。買主の図面・仕様に従った結果の請求だから', '負う。知的財産権の請求からも自由な物品を渡す義務があるから','負う。ただし売主が特許を知らなかった場合は半分だけ', '買主が通知すれば、必ず負う'], answer: 0, explain: 'Art 42(2)(b)。買主が渡した図面・設計・仕様に従った結果の請求なら、売主は責任を負わない。設計を選んだのは買主だから。' },
        { q: '買主は第三者の請求に気づいてから長い間、売主に通知しなかった。ただし売主は、その請求の存在と内容を最初から知っていた。売主は「通知がなかった」ことを理由に責任を免れる？', choices: ['免れる。Art 43(1) の通知がないから', '免れる。引渡しから2年を過ぎていれば必ず', '免れない。売主が請求とその内容を知っていたから', '請求が正しいかどうかだけで決まる'], answer: 2, explain: 'Art 43(2)。売主が権利・請求とその内容を知っていたなら、通知がなかったことを主張できない。Art 43 には2年の上限の定めもない。' },
        { q: 'Art 41 と Art 42 の違いとして正しいのは？', choices: ['Art 41 は売主が知っていた権利だけ、Art 42 は知らなくても責任を負う', 'Art 41 は売主が知らなくても責任を負い、Art 42 は売主が知っていた（知らないはずがない）権利だけ', 'どちらも売主が知っていた権利だけ', 'どちらも、どの国の法律による権利かの限定がある'], answer: 1, explain: '所有権や担保は売主の手元の問題なので、知らなくても責任を負う。知的財産権は国ごとの権利で調べ尽くせないので、売主の認識と国で絞っている。国の限定があるのも Art 42 だけ。' }
      ]
    },
    {
      id: 'B022',
      no: 22,
      title: '売主が違反したとき：買主の救済',
      goal: '売主の違反に対して買主が使える救済（Art 45〜52）を条件で選び分け、代金減額（Art 50）を計算できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)'],
      slides: [
        {
          title: 'レストランで注文と違う料理が来たら',
          paras: ['注文と違う料理が来たら、客の選択肢はいくつかある。作り直してもらう、足りない物を足してもらう、値引きしてもらう、食べずに店を出る、迷惑料を求める。', 'CISG の買主の救済（remedies）も、これと同じメニューになっている。どれを選べるかは、違反の重さと種類で変わる。']
        },
        {
          title: '買主の救済メニュー（Art 45〜52）',
          paras: ['損害賠償（Art 74〜77）は、ほかの救済と一緒に請求できる（Art 45(2)）。履行の請求は条約上の権利だが、裁判所は、自国の法律で同じような売買なら命じない場合、履行を命じる判決を出さなくてよい（Art 28）。'],
          table: { caption: '救済と使える条件', head: ['救済', '使える条件'], rows: [['履行の請求（Art 46(1)）', '解除など、矛盾する救済を選んでいない'], ['代替品の引渡し（Art 46(2)）', '不適合が重大な違反に当たる。通知と同時か、その後の合理的な期間内に請求'], ['修補（Art 46(3)）', '状況から見て不合理でない。通知と同時か、その後の合理的な期間内に請求'], ['付加期間の設定（Art 47）', '合理的な長さの追加の期限を決めて催促する'], ['解除（Art 49）', '重大な違反、または引渡しがなく付加期間も過ぎた'], ['代金減額（Art 50）', '物品が不適合。代金を払ったかどうかは問わない']] }
        },
        {
          title: '付加期間（Art 47）と解除（Art 49(1)）',
          paras: ['買主は、合理的な長さの追加の期限（additional period of time）を決めて履行を求められる。その期間中は、売主から「期間内に履行しない」と通知されない限り、ほかの救済は使えない。ただし遅れによる損害賠償は請求できる。裁判所や仲裁廷が売主に猶予を与えることはできない（Art 45(3)）。', '引渡しがない（non-delivery）なら、付加期間を過ぎても引き渡さないか、引き渡さないと言われた時点で解除できる（Art 49(1)(b)）。品質の不適合にはこの入口は使えず、重大な違反が必要。']
        },
        {
          title: '売主の追完権（Art 48）と解除の期限（Art 49(2)）',
          paras: ['売主は、引渡しの期日を過ぎた後でも、不合理な遅れなく、買主に不合理な不便（立て替えた費用が返ってくるか分からない不安を含む）をかけずに直せるなら、自分の費用で直せる。買主の損害賠償の権利は残る。条文は「Art 49 に従う」と書いており、重大な違反なら買主の解除権は残る。ただ、すぐ直せる欠陥なら、そもそも重大な違反にならないことが多い。', '物品が引き渡された後は、合理的な期間内に解除しないと解除権を失う。遅れた引渡しなら引渡しを知った時から、その他の違反なら違反を知った（知るべきだった）時などから数える。']
        },
        {
          title: 'Art 50：代金減額',
          paras: ['物品が不適合なら、買主は代金を減らせる。すでに払っていれば、払いすぎた分を返してもらう。減らし方は差額ではなく割合で、引渡し時の価値で比べる。'],
          formula: '減額後の代金 ＝ 契約代金 × 実際の物品の価値 ÷ 適合した物品の価値（どちらも引渡し時）',
          after: 'ただし、売主が Art 37・48 に従って直した場合や、買主がそれに従った売主の追完を受け入れなかった場合は、減額できない。'
        },
        {
          title: '例題：代金減額の計算',
          example: {
            problem: 'Paris Maison は A級の湯のみ 1,000 個を $20,000 で買った。届いたのは B級品だった。引渡し時の価値は、A級 1,000 個なら $24,000、届いた B級品は $18,000。Art 50 で減額すると、代金はいくら？',
            steps: ['A級の約束に B級品 → 品質の不適合（Art 35(1)）', '比べるのは引渡し時の価値: 適合品 $24,000、実際の品 $18,000', '割合: $18,000 ÷ $24,000 ＝ 0.75', '減額後の代金: $20,000 × 0.75 ＝ $15,000', '減額の幅: $20,000 − $15,000 ＝ $5,000'],
            answer: '代金は $15,000（$5,000 の減額）。価値の差 $6,000 を引いて $14,000 にするのは誤り'
          }
        },
        {
          title: 'なぜ？ 差額でなく割合で減らす理由',
          paras: ['この取引は、$24,000 の価値の物を $20,000（価値の約83%）で買えた得な契約だった。割合で減らすと、届いた B級品も同じく価値の約83%（$15,000 ÷ $18,000）の値段になる。契約の得・損がそのまま残る。', '差額で減らすと $14,000 で、B級品を価値の約78% で買えたことになる。契約になかった得が買主に生まれる。だから「価値の比率」で減らす。']
        },
        {
          title: '一部だけの違反、早すぎ・多すぎ',
          list: ['Art 51: 一部だけ届かない・一部だけ不適合 → 救済はその部分に使う。契約全体を解除できるのは、契約全体の重大な違反になる場合だけ', 'Art 37: 期日前に引き渡した売主は、期日までなら、不足分を足したり代わりの品を送ったりして直せる（買主に不合理な不便・費用をかけない場合）', 'Art 52(1): 期日より前に届いた → 買主は受け取っても断ってもよい', 'Art 52(2): 約束より多く届いた → 超過分は受け取っても断ってもよい。受け取れば契約の単価で払う'],
          after: '例: 1,000 kg を $3/kg で注文し、1,200 kg 届いた。全部受け取れば $3,600、超過の 200 kg を断れば $3,000 を払う。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '代金減額を「価値の差額を引く」で計算しない。割合で、引渡し時の価値で比べる。代替品の請求は重大な違反のときだけ（修補は不合理でなければ使える）。付加期間による解除は「引渡しがない」場合だけで、品質の不適合には使えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['救済は、履行請求・代替品（重大な違反のみ）・修補・付加期間・解除・代金減額。損害賠償はいつでも併用できる', '代金減額 ＝ 契約代金 × 実際の価値 ÷ 適合品の価値（引渡し時）', '売主は期日後でも、不合理な遅れや不便がなければ自費で直せる（Art 48）']
        },
        {
          title: '英単語',
          words: [
            ['remedy', 'レメディ', '救済（違反への対応手段）'],
            ['require performance', 'リクワイア パフォーマンス', '履行を請求する'],
            ['substitute goods', 'サブスティテュート グッズ', '代替品'],
            ['repair', 'リペア', '修補'],
            ['additional period of time', 'アディショナル ピリオド', '付加期間'],
            ['reduce the price', 'リデュース ザ プライス', '代金を減額する'],
            ['non-delivery', 'ノン デリバリー', '引渡しがないこと']
          ]
        }
      ],
      quiz: [
        { q: 'The contract price is $50,000. At the time of delivery, conforming goods would have been worth $40,000, but the non-conforming goods actually delivered were worth $30,000. Under Article 50 of the CISG, what reduced price ($) must the buyer pay?', type: 'number', answer: 37500, unit: '$', explain: '$50,000 × $30,000 ÷ $40,000 ＝ $50,000 × 0.75 ＝ $37,500。価値の差 $10,000 を引いた $40,000 は誤り。割合で減らすので、市場価格が下がっていても契約代金の 75% になる。' },
        { q: 'Paris Maison は茶器を $80,000 で買った。引渡し時、適合した茶器なら $100,000 の価値だが、実際に届いた茶器は $70,000 の価値だった。Art 50 で減らせる金額（減額の幅）はいくら？', type: 'number', answer: 24000, unit: '$', explain: '減額後の代金: $80,000 × $70,000 ÷ $100,000 ＝ $56,000。減額の幅: $80,000 − $56,000 ＝ $24,000。価値の差 $30,000 をそのまま減らすのは誤り。' },
        { q: 'Under the CISG, in which situation may a buyer require the seller to deliver substitute goods?', choices: ['Whenever the goods do not conform with the contract', 'Only where the seller agrees to deliver substitute goods', 'Only where the lack of conformity constitutes a fundamental breach and the request is made in time', 'Only where the buyer has not yet paid the price'], answer: 2, explain: 'Art 46(2)。代替品の請求は、不適合が重大な違反に当たり、通知と同時かその後の合理的な期間内に求めた場合だけ。軽い不適合なら修補（Art 46(3)）や代金減額を使う。' },
        { q: 'A buyer fixes an additional period of 14 days for the seller to deliver goods which have not been delivered. The seller has not said that it will not perform. During those 14 days, which of the following may the buyer do?', choices: ['Claim damages for the delay in performance', 'Declare the contract avoided', 'Reduce the price', 'Refuse to accept the goods if they arrive on day 10'], answer: 0, explain: 'Art 47(2)。付加期間中は、売主が「履行しない」と通知しない限り、ほかの救済は使えない。ただし遅れの損害賠償は請求できる。期間内に届いた物を断ることもできない。' },
        { q: '1,000 kg を $3/kg で注文したところ、売主が 1,200 kg を届けた。買主が全部受け取った場合、正しいのは？', choices: ['$3,000 を払う。超過分は無償でもらえる', '超過分を受け取ったので、契約全体を解除できる', '買主は超過分を必ず断らなければならない', '$3,600 を払う。超過分も契約の単価で払う'], answer: 3, explain: 'Art 52(2)。超過分は受け取っても断ってもよい。受け取ったら契約の単価で払う: 1,200 kg × $3 ＝ $3,600。' },
        { q: '品質の不適合（重大な違反ではない）について、買主が付加期間を決めたが、売主は期間内に直さなかった。買主は Art 49(1)(b) で解除できる？', choices: ['できる。付加期間を過ぎたから', 'できない。付加期間による解除は、引渡しがない場合だけ', 'できる。品質の不適合はすべて重大な違反だから', 'できない。付加期間を決めると、損害賠償も請求できなくなる'], answer: 1, explain: 'Art 49(1)(b) は non-delivery（引渡しがない）の場合だけ。品質の不適合で解除するには、重大な違反（Art 49(1)(a)）が必要。損害賠償や代金減額は使える。' }
      ]
    }
  ],
  cards: [
    { id: 'B018-1', lesson: 'B018', q: 'fundamental breach の定義（Art 25）は？', a: '相手が契約上期待できたものを実質的に奪う違反。結果を予見できなかった場合は除く' },
    { id: 'B018-2', lesson: 'B018', q: '「予見できなかった」と言えるための条件は？', a: '違反した本人だけでなく、同じ種類・同じ状況の合理的な人も予見しなかったこと' },
    { id: 'B018-3', lesson: 'B018', q: 'CISG で契約を解除する方法は？', a: '相手への通知（Art 26）。重大な違反でも自動では終わらない' },
    { id: 'B018-4', lesson: 'B018', q: '解除できる2つの入口は？', a: '①重大な違反 ②付加期間を過ぎても引渡し（売主側なら支払・引取り）がない' },
    { id: 'B018-5', lesson: 'B018', q: 'なぜ CISG は解除のハードルを高くしている？', a: '国際取引では送り返す費用と時間が大きい。契約を生かし、お金や修理で調整するため' },
    { id: 'B018-6', lesson: 'B018', q: 'avoidance of the contract の意味は？', a: '契約の解除。これからの義務がなくなり、物・お金を返し合う。損害賠償は残る' },
    { id: 'B019-1', lesson: 'B019', q: 'Art 30 の売主の3つの義務は？', a: '物品の引渡し、書類の交付、所有権の移転' },
    { id: 'B019-2', lesson: 'B019', q: '運送を伴う売買の引渡し（Art 31(a)）は？', a: '買主に送るため、最初の運送人に物品を渡すこと' },
    { id: 'B019-3', lesson: 'B019', q: '場所の定めも運送もない場合の引渡し（Art 31(c)）は？', a: '契約締結時の売主の営業所で、買主の処分にゆだねる' },
    { id: 'B019-4', lesson: 'B019', q: '「3月中に引渡し」の約束。いつ引き渡せばよい？', a: '3月中のいつでもよい。買主が日を選ぶ約束なら、その日（Art 33(b)）' },
    { id: 'B019-5', lesson: 'B019', q: '期限前に渡した書類に不備があった。売主は？', a: '期限まで直せる（不合理な不便・費用がなければ）。買主の損害賠償請求は残る' },
    { id: 'B019-6', lesson: 'B019', q: 'なぜ引渡しは「届いた時」ではなく「渡した時」？', a: '運送中の荷物は売主が管理できないから。運送中の事故には保険などで備える' },
    { id: 'B020-1', lesson: 'B020', q: 'Art 35(2) の4つの基準は？', a: '通常の目的、伝えた特定の目的、見本・ひな型の品質、通常の（保護に足りる）包装' },
    { id: 'B020-2', lesson: 'B020', q: '特定の目的の基準（Art 35(2)(b)）が使えないのは？', a: '買主が売主の技能・判断に頼っていない、または頼るのが不合理だった場合' },
    { id: 'B020-3', lesson: 'B020', q: '不適合かどうかを判断する時点（Art 36）は？', a: '危険が買主に移った時。その時にあった不適合なら、後で表に出ても売主の責任' },
    { id: 'B020-4', lesson: 'B020', q: '買主の検査の時期（Art 38）は？', a: 'できるだけ短い期間のうち。運送を伴うなら仕向地に着くまで延ばせる' },
    { id: 'B020-5', lesson: 'B020', q: '不適合の通知の期限（Art 39）は？', a: '発見（すべき時）から合理的な期間内に内容を特定して。引渡しから2年が上限' },
    { id: 'B020-6', lesson: 'B020', q: '通知が遅れても主張できるのは？', a: '売主が知っていた（知らないはずがない）のに黙っていた不適合（Art 40）。合理的理由があれば減額か逸失利益を除く賠償（Art 44）' },
    { id: 'B021-1', lesson: 'B021', q: 'Art 41 の売主の義務は？', a: '第三者の権利・請求のない物品を渡す。買主の同意があれば別。売主の認識は問わない' },
    { id: 'B021-2', lesson: 'B021', q: 'Art 42 で売主が責任を負う知的財産権は？', a: '売主が知っていた（知らないはずがない）権利で、想定した転売・使用の国、なければ買主の国の法律によるもの' },
    { id: 'B021-3', lesson: 'B021', q: 'Art 42(2) で売主が責任を負わない場合は？', a: '契約時に買主が知っていた場合と、買主の図面・設計・仕様に従った結果の場合' },
    { id: 'B021-4', lesson: 'B021', q: 'なぜ知的財産権だけ範囲を絞る？', a: '国ごとの権利で、売主が世界中を調べ尽くせないから' },
    { id: 'B021-5', lesson: 'B021', q: 'Art 43 の買主の通知は？', a: '気づいた（気づくべき）時から合理的な期間内に内容を特定。売主が知っていれば通知なしでも可' },
    { id: 'B022-1', lesson: 'B022', q: '売主の違反に対する買主の救済は？', a: '履行請求・代替品・修補・付加期間・解除・代金減額。損害賠償はいつでも併用できる' },
    { id: 'B022-2', lesson: 'B022', q: '代替品を請求できる条件（Art 46(2)）は？', a: '不適合が重大な違反に当たり、通知と同時かその後の合理的な期間内に請求すること' },
    { id: 'B022-3', lesson: 'B022', q: '付加期間中に買主ができないこと・できることは？', a: 'ほかの救済は使えない（売主が履行しないと通知した場合を除く）。遅れの損害賠償は請求できる' },
    { id: 'B022-4', lesson: 'B022', q: '付加期間を過ぎたことで解除できるのはどんな違反？', a: '引渡しがない場合だけ（Art 49(1)(b)）。品質の不適合は重大な違反が必要' },
    { id: 'B022-5', lesson: 'B022', q: '代金減額（Art 50）の式は？', a: '契約代金 × 実際の物品の価値 ÷ 適合品の価値（どちらも引渡し時）' },
    { id: 'B022-6', lesson: 'B022', q: 'なぜ代金減額は差額でなく割合？', a: '契約で決めた得・損（値段と価値の比率）をそのまま残すため' },
    { id: 'B022-7', lesson: 'B022', q: '約束より多く届いたとき（Art 52(2)）は？', a: '超過分は受け取っても断ってもよい。受け取れば契約の単価で払う' }
  ]
});
