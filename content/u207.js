(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 207,
  part: 2,
  partTitle: '国際物品売買（ウィーン売買条約 CISG）',
  lessons: [
    {
      id: 'B023',
      no: 23,
      title: '買主の義務：代金の支払と引取り',
      goal: 'CISG の買主の2つの義務（代金の支払と引取り）を、支払の準備・価格・場所・時期・催告不要のルールとあわせて説明し、事例に当てはめられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(b)'],
      slides: [
        {
          title: 'ネットで家具を買ったとき',
          paras: ['ソファを注文すると、お店には「届ける」義務がある。では自分には何の義務があるか。', '1つは代金を払うこと。もう1つは、配達の日に家にいて、ソファを受け取ること。お金を払っても、受け取らずに放っておくと、お店はトラックを空回りさせ、倉庫代もかかる。', 'CISG も、買主の義務をこの2つにまとめている。']
        },
        {
          title: '買主の基本義務（Art 53）',
          formula: '買主は、契約と条約に従って、代金を支払い（pay the price）、物品を引き取る（take delivery）',
          paras: ['前のレッスンまでの売主の義務（引渡し・書類の交付・適合性）と対になる。', 'この2つの義務のどちらかを果たさないと、買主の契約違反（breach of contract by the buyer）になり、次のレッスンで学ぶ売主の救済が使える。']
        },
        {
          title: '支払の準備も義務に入る（Art 54）',
          paras: ['代金を払う義務には、支払ができるように必要な手続をとることも含まれる。契約や法令が求める手続が対象になる。', '例: 契約で「信用状（letter of credit）で払う」と決めたなら、買主は期限までに銀行で信用状を開設する。外国に送金するのに国の許可が要るなら、その許可を取る。', '支払日がまだ来ていなくても、この準備をしないこと自体が、代金を支払う義務の違反になりうる。']
        },
        {
          title: '代金が決まっていないとき（Art 55・56）',
          paras: ['契約は有効に成立したのに、代金も、その決め方も定めていない場合がある。このときは、反対の事情がない限り、契約を結んだ時点で、同じ取引分野・似た条件で、その物品に一般的に付けられていた価格を、当事者が黙って指定したものとみなす。', '代金を重さで決める場合、迷ったら正味の重さ（net weight）で計算する。箱や袋の重さは入れない。'],
          note: { kind: 'tip', text: '申込みの段階では Art 14 が代金の定め（または決め方）を求めるので、Art 55 が使われる場面は限られる。試験では「有効に成立した契約で代金が決まっていない → 締結時の一般的な価格」と覚える。' }
        },
        {
          title: 'どこで払うか（Art 57）',
          paras: ['契約に特に決めがなければ、次の場所で売主に払う。'],
          table: { caption: '支払の場所', head: ['場合', '払う場所'], rows: [['ふつう', '売主の営業所（place of business）'], ['物品や書類と引換えに払う', 'その引渡しが行われる場所']] },
          after: '契約の後で売主が営業所を移し、そのせいで支払の費用が増えたら、増えた分は売主が負担する。'
        },
        {
          title: 'いつ払うか（Art 58）',
          paras: ['特に決めがなければ、売主が物品か、物品の処分を支配する書類（船荷証券など）を、買主が自由にできる状態に置いた時に払う。売主は、支払と引換えでなければ物品や書類を渡さない、とすることができる。運送を伴う場合も、代金と引換えでなければ渡さない条件で発送できる。'],
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="売主は物品か書類を、買主は代金を、引換えに渡す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">支払と引渡しは引換えが基本</text><rect x="20" y="56" width="130" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="290" y="56" width="130" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="94" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">売主</text><text x="85" y="118" text-anchor="middle" font-size="12.5" fill="var(--quiet)">seller</text><text x="355" y="94" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">買主</text><text x="355" y="118" text-anchor="middle" font-size="12.5" fill="var(--quiet)">buyer</text><line x1="156" y1="82" x2="276" y2="82" stroke="var(--ink)" stroke-width="1.5"/><polygon points="284,82 274,77 274,87" fill="var(--ink)"/><text x="220" y="72" text-anchor="middle" fill="var(--ink)">物品か書類</text><line x1="164" y1="120" x2="284" y2="120" stroke="var(--ink)" stroke-width="1.5"/><polygon points="156,120 166,115 166,125" fill="var(--ink)"/><text x="220" y="140" text-anchor="middle" fill="var(--ink)">代金</text><rect x="20" y="164" width="400" height="70" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="193" font-size="15" fill="var(--ink)">時期：物品か書類を買主の自由にした時</text><text x="36" y="220" font-size="15" fill="var(--ink)">場所：引換えなら、その引渡しの場所</text></svg>`,
          caption: '売主は代金をもらうまで物品を手放したくない。買主は物品を受け取れるまで払いたくない。同時に交換させれば、どちらも相手を信じて先に渡す危険を負わずに済む。'
        },
        {
          title: '支払う前に物品を確かめる権利',
          paras: ['買主は、物品を検査する機会を得るまでは、代金を払わなくてよい（Art 58(3)）。', 'ただし、当事者が合意した引渡しや支払の方法が、検査の機会と両立しない場合は別。例えば「書類と引換えに払う」（信用状や書類取引）と決めたなら、物品がまだ海の上にあっても、書類が届いた時点で払う。物品の検査は後になる。']
        },
        {
          title: '催促がなくても払う（Art 59）',
          paras: ['買主は、契約と条約から決まる支払日に、売主からの請求や手続がなくても代金を払わなければならない。', '日常の感覚では「請求書や督促が来てから払えばいい」と思いがち。CISG では、支払日が来れば、催促がなくても払わないこと自体が違反になる。支払日は、契約で決めた日か、決めていなければ Art 58 で決まる日。']
        },
        {
          title: '引取りの義務（Art 60）',
          list: ['(a) 売主が引渡しをできるように、買主に合理的に期待されるすべての行為をする（例: FOB 条件なら船を手配して売主に知らせる、荷を受け入れる場所や輸入の許可を用意する）', '(b) 物品を受け取る（taking over）'],
          after: '引き取っても、品質を認めたことにはならない。不適合があれば、引き取った後でも検査して通知し（Art 38・39）、買主の救済を使える。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '買主の義務を「代金の支払」だけだと思い込む。引取りも独立した義務で、引き取らなければ違反になる。また、引取り（taking delivery）を「品質の承認」と混同しない。さらに、支払に催告は要らない（Art 59）。請求書が来ないことは、支払が遅れた言い訳にならない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['買主の義務は2つ: 代金の支払（準備の手続を含む）と引取り（Art 53・54・60）', '決めがなければ、売主の営業所で、物品か書類を自由にできる状態にした時に払う。引換えならその場所（Art 57・58）', '支払日が来れば、催促がなくても払う（Art 59）']
        },
        {
          title: '英単語',
          words: [
            ['pay the price', '', '代金を支払う'],
            ['take delivery', 'テイク デリバリー', '物品を引き取る'],
            ['taking over the goods', '', '物品の受取り（引取りの一部）'],
            ['place of business', '', '営業所'],
            ['documents controlling their disposition', '', '物品の処分を支配する書類（船荷証券など）'],
            ['at the buyer\'s disposal', '', '買主が自由にできる状態に'],
            ['without the need for any request', '', '請求がなくても（Art 59）'],
            ['net weight', 'ネット ウェイト', '正味の重さ（包装を除く）']
          ]
        }
      ],
      quiz: [
        { q: 'Under the CISG, unless otherwise agreed, where must the buyer pay the price if payment is to be made against the handing over of documents?', choices: ["At the buyer's place of business", "At the seller's place of business", 'At the place where the documents are handed over', 'At the place where the goods were manufactured'], answer: 2, explain: '物品や書類と引換えに払う場合は、その引渡しの場所で払う（Art 57(1)(b)）。売主の営業所は、引換えでない場合のふつうのルール（Art 57(1)(a)）。買主の営業所や製造地は、Art 57 の支払場所のルールには出てこない。' },
        { q: "Which of the following correctly states the buyer's obligation regarding the date of payment under the CISG?", choices: ['The buyer need only pay after the seller has sent a formal demand for payment', 'The buyer must pay on the date fixed by or determinable from the contract and the Convention, without the need for any request from the seller', 'The buyer must always pay within 30 days of receiving the goods', 'The buyer need never pay until the goods have been examined, whatever payment method was agreed'], answer: 1, explain: 'Art 59 は、請求や手続がなくても支払日に払うと定める。督促を待つのは日常の感覚による誤り。30日という期限は条約にない。検査の機会のルール（Art 58(3)）は、書類と引換え払いのように合意した方法と両立しない場合には使えない。' },
        { q: "Under the CISG, the buyer's obligation to take delivery consists of which of the following?\n(1) Doing all the acts which could reasonably be expected of the buyer to enable the seller to make delivery\n(2) Examining the goods and confirming that they conform with the contract\n(3) Taking over the goods\n(4) Insuring the goods while they are in transit", choices: ['(1), (2) and (3)', '(3) only', '(2) and (4)', '(1) and (3)'], answer: 3, explain: 'Art 60 は (a) 引渡しを可能にする行為 と (b) 受取り の2つ。検査（Art 38）は引取りの義務とは別のルールで、引き取っても品質を認めたことにはならない。運送中の保険は、引取りの義務には入っていない（誰が手配するかは契約やインコタームズで決まる）。(3) only は、(a) の協力行為を見落とした答え。' },
        { q: 'ある契約は有効に成立したが、代金もその決め方も定めていなかった。CISG では代金はどう決まる？', choices: ['契約を結んだ時点で、同じ取引分野・似た条件でその物品に一般的に付けられていた価格', '物品を引き渡した時点の市場価格', '売主が後で一方的に決める価格', '代金が決まっていないので、契約は必ず無効になる'], answer: 0, explain: 'Art 55 は「契約締結時」の一般的な価格を指定したとみなす。引渡し時の価格ではない。売主が一方的に決めるルールはない。有効に成立した契約が代金がないだけで無効になるわけではない。' },
        { q: '契約では「確認信用状で支払う」と決めていた。支払日はまだ先だが、買主は銀行で信用状を開設する期限を過ぎても開設しない。CISG ではどうなる？', choices: ['実際の支払日が来ていないので、まだ何の違反もない', '支払の準備も代金を支払う義務に入るので、買主の義務の違反になる', '信用状は銀行の問題なので、買主には関係がない', '引取りの義務の違反になる'], answer: 1, explain: 'Art 54 は、支払を可能にする手続をとることも代金を支払う義務に含める。支払日前でも違反になりうる。銀行任せにはできない。これは引取りではなく、支払の義務の話。' },
        { q: '買主は物品を受け取った（引き取った）。その後の検査で品質が契約と違うと分かった。買主は救済を使える？', choices: ['使えない。引き取った時点で品質を承認したことになる', '使えない。品質の問題は引取りの前にしか言えない', '使える。ただし通知はいつでもよい', '使える。引取りは品質の承認ではないので、適切に検査・通知すれば救済を求められる'], answer: 3, explain: '引取り（Art 60）は物品を受け取る義務で、品質を認める意味はない。ただし、検査（Art 38）と合理的な期間内の通知（Art 39、最長2年）のルールは守る必要がある。「いつでもよい」は誤り。' }
      ]
    },
    {
      id: 'B024',
      no: 24,
      title: '買主が違反したとき：売主の救済',
      goal: '買主の違反に対して売主が使える救済（履行請求・付加期間・解除・仕様の指定・損害賠償）の要件を説明し、どれを使えるか判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(b)'],
      slides: [
        {
          title: '家具店の立場で考える',
          paras: ['お客がソファの代金を払わない。配達の日に家にもいない。家具店ができることは何か。', '「払ってください」と言う。「来週の金曜までは待ちます」と期限を切る。それでもだめなら契約をやめて、別のお客に売る。かかった損は請求する。', 'CISG の売主の救済も、この流れでできている。']
        },
        {
          title: '救済の全体図（Art 61）',
          paras: ['買主が契約や条約の義務を果たさないとき、売主は Art 62〜65 の権利を使え、Art 74〜77 で損害賠償を請求できる。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="売主の救済4つと、どれとも併用できる損害賠償" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">買主が違反したときの売主の救済</text><rect x="120" y="50" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="76" text-anchor="middle" font-size="15" fill="var(--ink)">買主の違反（Art 61）</text><line x1="220" y1="90" x2="220" y2="100" stroke="var(--edge)" stroke-width="1.25"/><line x1="67" y1="100" x2="373" y2="100" stroke="var(--edge)" stroke-width="1.25"/><line x1="67" y1="100" x2="67" y2="110" stroke="var(--edge)" stroke-width="1.25"/><line x1="169" y1="100" x2="169" y2="110" stroke="var(--edge)" stroke-width="1.25"/><line x1="271" y1="100" x2="271" y2="110" stroke="var(--edge)" stroke-width="1.25"/><line x1="373" y1="100" x2="373" y2="110" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="110" width="94" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="122" y="110" width="94" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="224" y="110" width="94" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="326" y="110" width="94" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="67" y="142" text-anchor="middle" font-size="15" fill="var(--ink)">履行請求</text><text x="67" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 62</text><text x="169" y="142" text-anchor="middle" font-size="15" fill="var(--ink)">付加期間</text><text x="169" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 63</text><text x="271" y="142" text-anchor="middle" font-size="15" fill="var(--ink)">解除</text><text x="271" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 64</text><text x="373" y="142" text-anchor="middle" font-size="15" fill="var(--ink)">仕様の指定</text><text x="373" y="164" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 65</text><text x="220" y="204" text-anchor="middle" font-size="16" fill="var(--ink)">＋</text><rect x="20" y="214" width="400" height="62" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="240" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">損害賠償（Art 74〜77）</text><text x="220" y="264" text-anchor="middle" fill="var(--ink)">上のどれと組み合わせても請求できる</text></svg>`,
          caption: 'ほかの救済を使っても、損害賠償の権利は失わない（Art 61(2)）。また、売主が救済を求めたとき、裁判所や仲裁廷が買主に支払の猶予期間を与えることはできない（Art 61(3)）。'
        },
        {
          title: '履行請求（Art 62）',
          paras: ['売主は、買主に「代金を払え」「引き取れ」「その他の義務を果たせ」と求められる。ただし、これと矛盾する救済をすでに使った場合は別。例えば契約を解除した後で、代金の支払を求めることはできない。', 'なお、裁判所は、条約の外の同じような売買契約で自国の法なら命じない場合、履行を命じる判決（specific performance）を出さなくてよい（Art 28）。'],
          note: { kind: 'tip', text: 'Art 62 は買主側の Art 46 と対になる。ただし売主には代替品・修補・代金減額のような救済はない。それは物品に問題があるときの、買主だけの救済。' }
        },
        {
          title: '付加期間を定める（Art 63）',
          paras: ['売主は、買主が義務を果たすための合理的な長さの追加の期間（additional period）を定められる。', 'その期間中は、売主はほかの救済を使えない。待つと約束したのだから。例外は、買主から「期間内に履行しない」と通知を受けたとき。また、期間中でも、遅れによる損害の賠償を請求する権利は失わない。'],
          note: { kind: 'tip', text: 'なぜ？ 支払が数日遅れただけでは、重大な違反かどうかはっきりしない。期限を切っておけば、その期限を過ぎた時点で、はっきり解除できる線ができる（次のスライドの Art 64(1)(b)）。' }
        },
        {
          title: '契約の解除（Art 64(1)）',
          paras: ['売主が契約を解除できるのは、次のどちらかの場合。'],
          list: ['(a) 買主の義務の不履行が、重大な契約違反（fundamental breach）に当たる', '(b) 売主が Art 63 で定めた付加期間内に、買主が代金を払わないか物品を引き取らない。または、その期間内に払わない・引き取らないと宣言した'],
          after: '(b) は代金の支払と引取りの2つだけに使える。ほかの義務の違反で解除するには、(a) の重大な違反が必要。解除は相手への通知で行う（Art 26）。裁判所に行く必要はない。'
        },
        {
          title: '代金をもらった後の解除の制限（Art 64(2)）',
          paras: ['買主がすでに代金を払っていたら、売主は次の時期までに解除しないと、解除の権利を失う。'],
          list: ['遅れた履行（引取りの遅れなど）について: 履行されたと売主が知る前', 'それ以外の違反について: 違反を知った（知るべきだった）時か、付加期間が過ぎた時（買主が期間内に履行しないと宣言した時）から、合理的な期間内'],
          after: 'なぜ？ 代金を受け取れば、売主の一番大事な利益は満たされている。いつまでも解除できると、買主の立場が不安定になる。'
        },
        {
          title: '仕様の指定（Art 65）',
          paras: ['契約で、買主が物品の形・寸法などの仕様を指定することになっていたのに、決めた日までに、または売主の依頼から合理的な期間内に指定しない場合がある。', 'このとき売主は、ほかの権利を失わずに、自分が知っている買主の要望に沿って、自分で仕様を決められる。ただし、その内容を買主に知らせ、買主が別の仕様を指定できる合理的な期間を定める。買主がその期間内に指定しなければ、売主の決めた仕様が拘束力をもつ。']
        },
        {
          title: '例題: どの救済を使えるか',
          example: {
            problem: '日本の売主 S は、オーストラリアの買主 B に機械を売った。代金 $90,000 の支払日は3月1日。B は払わず、S は3月2日に「3月16日までに払ってほしい」と通知した。(1) S は3月5日に解除できるか。(2) 3月16日を過ぎても B が払わなければどうか。',
            steps: ['3月2日の通知は、Art 63 の付加期間の設定', '(1) 期間中は、B が「払わない」と通知していない限り、S はほかの救済を使えない → 3月5日には解除できない（遅れの損害賠償の権利は残る）', '(2) 付加期間内に代金を払わなかった → Art 64(1)(b) で解除できる。重大な違反かどうかを論じる必要はない', '解除は B への通知で行う（Art 26）。あわせて損害賠償も請求できる（Art 61(2)）'],
            answer: '(1) できない。(2) Art 64(1)(b) で解除でき、損害賠償も請求できる'
          }
        },
        {
          title: '買主の救済との対比',
          table: { caption: '売主の救済と買主の救済', head: ['救済', '売主（買主の違反）', '買主（売主の違反）'], rows: [['入口の条文', 'Art 61', 'Art 45'], ['履行請求', 'Art 62', 'Art 46（代替品・修補も）'], ['付加期間', 'Art 63', 'Art 47'], ['解除', 'Art 64', 'Art 49'], ['その側だけの救済', '仕様の指定（Art 65）', '代金減額（Art 50）'], ['損害賠償', 'Art 74〜77', 'Art 74〜77'], ['裁判所の猶予期間', '与えられない（61(3)）', '与えられない（45(3)）']] }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '付加期間を定めたのに、期間中に解除してしまう（Art 63(2) で原則できない）。また、Art 64(1)(b) の付加期間ルートを、支払・引取り以外の義務の違反にも使えると思い込む。さらに、解除すると損害賠償を請求できなくなる、という誤解も多い。解除と損害賠償は併用できる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売主の救済: 履行請求・付加期間・解除・仕様の指定（Art 62〜65）＋どれとも併用できる損害賠償（Art 61）', '解除できるのは、重大な違反のときか、付加期間内に代金を払わない・引き取らないとき（Art 64(1)）', '代金を受け取った後は、決まった時期までに解除しないと解除の権利を失う（Art 64(2)）']
        },
        {
          title: '英単語',
          words: [
            ['remedies for breach of contract by the buyer', '', '買主の契約違反に対する（売主の）救済'],
            ['require performance', '', '履行を請求する'],
            ['additional period of time of reasonable length', '', '合理的な長さの付加期間'],
            ['declare the contract avoided', 'デクレア ジ アヴォイディッド', '契約の解除を宣言する'],
            ['fundamental breach', 'ファンダメンタル ブリーチ', '重大な契約違反'],
            ['specification', 'スペシフィケーション', '仕様（形・寸法など）'],
            ['period of grace', 'ピリオド オブ グレイス', '（裁判所が与える）猶予期間'],
            ['specific performance', '', '特定履行（履行を命じる判決）']
          ]
        }
      ],
      quiz: [
        { q: 'A seller has fixed an additional period of 14 days for the buyer to pay the price. The buyer has not said that it will refuse to pay. Which of the following is correct during the 14-day period?', choices: ['The seller may not resort to any remedy for breach of contract, but does not lose any right to claim damages for delay', 'The seller may declare the contract avoided immediately', 'The seller loses all rights to damages for the late payment', 'The seller may immediately sue the buyer for the price under Article 62'], answer: 0, explain: 'Art 63(2): 付加期間中は救済を使えないが、遅れによる損害賠償の権利は残る。すぐ解除できるのは、買主が「期間内に払わない」と通知した場合だけ。損害賠償の権利を失うことはない。Art 62 の履行請求（代金の請求）も救済の1つなので、期間中は使えない。待つと約束した期間だから。' },
        { q: "In which of the following circumstances may the seller declare the contract avoided under the CISG?\n(1) The buyer's failure to perform amounts to a fundamental breach of contract\n(2) The buyer fails to pay the price within an additional period fixed by the seller under Article 63\n(3) The buyer pays one day late and the delay is not a fundamental breach\n(4) The buyer fails to take delivery within an additional period fixed by the seller under Article 63", choices: ['(1) only', '(1), (2), (3) and (4)', '(1), (2) and (4)', '(2) and (4) only'], answer: 2, explain: 'Art 64(1)(a) は重大な違反、(b) は付加期間内に代金を払わない・引き取らない場合。重大でない1日の遅れだけでは解除できない。(1) only は付加期間ルートを、(2) and (4) only は重大な違反ルートを見落とした答え。' },
        { q: "A seller sues a buyer for the price. The court wishes to give the buyer an extra 60 days to pay because of the buyer's financial difficulties. Under the CISG, which is correct?", choices: ['The court may grant up to 60 days of grace', 'The court may grant any period of grace it considers reasonable', 'The court must grant a period of grace if the buyer asks for one', 'The court may not grant the buyer a period of grace when the seller resorts to a remedy for breach'], answer: 3, explain: 'Art 61(3): 売主が救済を求めたとき、裁判所や仲裁廷は買主に猶予期間を与えられない。買主側の Art 45(3) も同じ。日本の感覚で「裁判所が分割や猶予を決めてくれる」と考えると間違える。' },
        { q: '契約では、買主が部品の寸法を5月1日までに指定することになっていた。買主は、売主が依頼した後も合理的な期間内に指定しない。CISG で売主ができることは？', choices: ['自分が知っている買主の要望に沿って自分で仕様を決め、買主に知らせて、別の仕様を指定できる合理的な期間を与える', '仕様が決まらない以上、契約は自動的に終わる', '売主は好きな寸法で製造し、通知しなくてよい', '買主が指定するまで、売主は何もできない'], answer: 0, explain: 'Art 65 の仕様の指定。売主は買主の要望に沿って決め、知らせ、合理的な期間を与える。買主が期間内に別の仕様を指定しなければ、売主の仕様が拘束力をもつ。自動終了や、通知なしの製造は条約にない。' },
        { q: '売主は、代金を払わない買主との契約を解除した。売主は損害賠償も請求できる？', choices: ['できない。解除と損害賠償はどちらか一方だけ', '裁判所が認めた場合に限りできる', 'できる。ほかの救済を使っても損害賠償の権利は失わない', '解除の前に請求していた場合に限りできる'], answer: 2, explain: 'Art 61(2)。解除で契約の義務から解放されたうえで、生じた損害は Art 74〜77 で請求する。どちらか一方、という制限はない。' },
        { q: '買主は代金を全額払ったが、物品の引取りが2週間遅れた。売主は、引き取られたことを知った後で、遅れを理由に解除できる？', choices: ['できる。遅れは常に重大な違反になる', 'できない。遅れた履行については、履行されたと知る前に解除しないと権利を失う', 'できる。代金を受け取っていても、いつでも解除できる', 'できる。ただし代金の半額を返せばよい'], answer: 1, explain: 'Art 64(2)(a)。代金を受け取った後は、遅れた履行について、履行されたと知る前に解除しなければならない。遅れが常に重大な違反になるわけでもない。' }
      ]
    },
    {
      id: 'B025',
      no: 25,
      title: '履行期前の違反と分割履行契約',
      goal: '履行の停止（Art 71）、履行期前の解除（Art 72）、分割履行契約の解除（Art 73）の要件と効果を区別し、事例に当てはめられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(c)'],
      slides: [
        {
          title: '当日まで待つ必要はあるか',
          paras: ['引越しを頼んだ業者が、前日になって「トラックが全部ほかの現場に出ている」と言いだした。当日まで黙って待つより、すぐ別の業者を探したい。', 'お米の定期便で、3回目の米が傷んでいた。3回目だけ断るのか、これからの分も全部やめるのか。', 'この2つの悩みに答えるのが、今回の3つの条文。']
        },
        {
          title: '3つの道具',
          table: { caption: '履行期前の違反と分割履行', head: ['条文', '条件', 'できること'], rows: [['Art 71 停止', '相手が義務の重要な部分を履行しないことが明らかになった', '自分の履行を止める（契約は続く）'], ['Art 72 期前の解除', '履行期の前に、相手が重大な違反を犯すことが確実', '契約を解除する'], ['Art 73 分割履行', '何回かに分けて引き渡す契約で、ある回に違反', 'その回・将来の回・（買主は）全体を解除']] }
        },
        {
          title: '履行の停止（Art 71(1)）',
          paras: ['契約を結んだ後で、相手が義務の重要な部分（substantial part）を履行しないことが明らかになったら、自分の義務の履行を止められる。理由は次のどちらか。'],
          list: ['(a) 相手の履行能力か信用力に重大な欠陥がある（例: 買主が倒産しかけている、売主の工場が焼けた）', '(b) 履行の準備や履行での相手のふるまい（例: 売主が同じ物品を別の人に売ってしまった）'],
          after: '契約を結ぶ前から分かっていた事情は理由にならない。それを承知で契約したことになるから。'
        },
        {
          title: '停止したら、すぐ通知（Art 71(2)(3)）',
          paras: ['停止する側は、発送の前後を問わず、ただちに相手に通知する。相手が十分な保証（adequate assurance、例: 銀行保証や信用状）を出したら、履行を再開しなければならない。', '売主が物品をすでに発送した後に理由が分かった場合でも、買主が物品を受け取れる書類を持っていたとしても、売主は買主への引渡しを止められる。これは売主と買主の間の物品の権利の話で、第三者との関係は別に決まる。']
        },
        {
          title: '履行期前の解除（Art 72）',
          paras: ['履行期が来る前でも、相手が重大な違反（fundamental breach）を犯すことが確実（clear）なら、契約を解除できる。', '時間があれば、解除しようとする側は相手に合理的な通知をして、十分な保証を出す機会を与える。ただし、相手が「履行しない」とはっきり宣言した場合は、この通知は要らない。'],
          note: { kind: 'tip', text: '日常の感覚では「期日前だから、まだ違反ではない」と思いがち。CISG では、期日前でも違反が確実なら解除できる。待たせると損害が膨らみ、早く手を打てば代わりの取引ができるから。' }
        },
        {
          title: 'Art 71 と Art 72 の違い',
          table: { caption: '停止と期前の解除', head: ['項目', 'Art 71 停止', 'Art 72 解除'], rows: [['どれくらい', '明らか（apparent）', '確実（clear）'], ['何が', '重要な部分の不履行', '重大な違反'], ['効果', '自分の履行を止める。契約は続く', '契約を終わらせる'], ['通知', 'ただちに通知。保証があれば再開', '時間があれば合理的な通知（宣言済みなら不要）']] },
          after: 'なぜ？ 停止は「様子を見る」軽い手段なので、基準が低い。解除は契約を終わらせる重い手段なので、基準が高い。基準を満たさずに停止や解除をすると、自分の方が違反になる。'
        },
        {
          title: '分割履行契約（Art 73）',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="5回に分けた引渡しのうち3回目に重大な違反があった場合に解除できる範囲" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">分割履行契約で解除できる範囲</text><rect x="20" y="56" width="72" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="102" y="56" width="72" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="184" y="56" width="72" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="266" y="56" width="72" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="348" y="56" width="72" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="56" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">1回目</text><text x="138" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">2回目</text><text x="220" y="86" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">3回目</text><text x="302" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">4回目</text><text x="384" y="86" text-anchor="middle" font-size="15" fill="var(--ink)">5回目</text><text x="220" y="136" text-anchor="middle" fill="var(--ink)">3回目に重大な違反 → 3回目を解除</text><text x="220" y="156" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 73(1)</text><text x="220" y="190" text-anchor="middle" fill="var(--ink)">将来も続くと考える十分な理由があれば</text><text x="220" y="210" text-anchor="middle" fill="var(--ink)">4・5回目も解除（Art 73(2)）</text><text x="220" y="244" text-anchor="middle" fill="var(--ink)">相互に依存して使えないなら、1・2回目も</text><text x="220" y="264" text-anchor="middle" fill="var(--ink)">買主だけが解除できる（Art 73(3)）</text></svg>`,
          list: ['(1) ある回の違反がその回について重大な違反 → その回を解除できる', '(2) ある回の違反から、将来の回でも重大な違反が起きると考える十分な理由がある → 合理的な期間内に、将来の分を解除できる', '(3) 買主は、ある回を解除するとき、すでに受けた分や将来の分も解除できる。ただし、相互に依存していて、契約時に考えた目的に使えない場合に限る']
        },
        {
          title: '例題: 機械の部品を3回で納入',
          example: {
            problem: '買主 B は、1台の特殊な機械を組み立てるため、売主 S から部品を3回に分けて買った。部品は3回分がそろって初めて使える。1回目は受領済み。2回目の部品が契約とまったく違い、使い物にならなかった（重大な違反）。B はどこまで解除できるか。',
            steps: ['2回目の違反は2回目について重大 → Art 73(1) で2回目を解除できる', '同じ原因が続きそうで、3回目も重大な違反になると考える十分な理由があれば → Art 73(2) で、合理的な期間内に3回目も解除できる', '部品は3回分そろわないと機械にならない（相互依存）→ Art 73(3) で、2回目を解除するのと同時に、受領済みの1回目と将来の3回目もあわせて解除できる（この場合、3回目について「十分な理由」は要らない）', '比べる: 毎月届くコーヒー豆のように、各回を別々に使える物品なら、(3) で過去の分まで解除することはできない'],
            answer: '2回目は Art 73(1) で解除できる。相互依存なので、2回目と同時に1回目・3回目も含め契約全体を解除できる（Art 73(3)）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'Art 71 の停止を「解除」と混同する。停止しても契約は続き、保証が出れば再開する義務がある。Art 72 は「確実」でなければ使えず、うわさや心配だけでは足りない。Art 73(3) で過去の分まで解除できるのは買主だけで、相互依存が条件。Art 73(2) は合理的な期間内に行う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['Art 71: 重要な部分の不履行が明らか → 自分の履行を停止し、ただちに通知。十分な保証が出たら再開', 'Art 72: 履行期前でも重大な違反が確実 → 解除。時間があれば保証の機会を与える通知（宣言済みなら不要）', 'Art 73: その回の重大な違反 → その回。将来も続く十分な理由 → 将来分。相互依存なら買主は過去分も']
        },
        {
          title: '英単語',
          words: [
            ['anticipatory breach', 'アンティシパトリー ブリーチ', '履行期前の違反'],
            ['suspend performance', 'サスペンド パフォーマンス', '履行を停止する'],
            ['substantial part', 'サブスタンシャル パート', '（義務の）重要な部分'],
            ['creditworthiness', 'クレディットワージネス', '信用力（支払能力）'],
            ['adequate assurance', 'アデクワット アシュアランス', '十分な保証'],
            ['instalment contract', 'インストールメント コントラクト', '分割履行契約'],
            ['interdependence', 'インターディペンデンス', '相互依存'],
            ['it becomes apparent / it is clear', '', '明らかになる（71）／確実である（72）']
          ]
        }
      ],
      quiz: [
        { q: 'After the contract was concluded, it became apparent that the buyer has a serious deficiency in its creditworthiness and will not pay a substantial part of the price. The seller has not yet dispatched the goods. Under the CISG, what may the seller do?', choices: ['Suspend performance of its obligations and immediately give notice of the suspension to the buyer', 'Declare the contract avoided without any notice, even though breach is not certain', 'Nothing until the date for payment has passed', 'Sell the goods elsewhere and keep the contract in force'], answer: 0, explain: 'Art 71(1)(a) で停止でき、71(3) でただちに通知する。解除（Art 72）には重大な違反が「確実」であることが必要で、時間があれば通知もいる。支払日まで待つ必要はない。契約を残したまま他に売れば、売主自身が違反しうる。' },
        { q: "A seller suspended performance under Article 71 because of doubts about the buyer's ability to pay. The buyer then provided a bank guarantee covering the full price. Which is correct?", choices: ['The seller may now declare the contract avoided', 'The seller may continue to suspend performance until the price is paid in full', 'The contract is automatically terminated', 'The seller must continue with performance'], answer: 3, explain: 'Art 71(3): 相手が十分な保証を出したら、停止した側は履行を続けなければならない。銀行保証は典型的な十分な保証。停止は解除ではないので、契約は終わっていない。' },
        { q: 'A contract provides for delivery of steel bars in 10 monthly instalments. Each instalment can be used separately. The third instalment is so defective that it amounts to a fundamental breach in respect of that instalment. There is no reason to expect problems with future instalments. Under the CISG, what may the buyer do?', choices: ['Declare the whole contract avoided, including the first two instalments', 'Declare the contract avoided in respect of the third instalment only', 'Declare the contract avoided in respect of the third and all future instalments', 'Nothing, because the first two instalments were satisfactory'], answer: 1, explain: 'Art 73(1) で3回目だけ解除できる。将来分（73(2)）には、将来も重大な違反が起きると考える十分な理由が要るが、この問題ではない。過去分（73(3)）は相互依存が条件で、各回を別々に使える鉄棒では当たらない。' },
        { q: 'Art 71（停止）と Art 72（期前の解除）を比べた説明で正しいのは？', choices: ['どちらも、重大な違反が確実なときにしか使えない', 'Art 71 の方が基準が高く、使うと契約が終わる', 'Art 71 は重要な部分の不履行が「明らか」なら使え、契約は続く。Art 72 は重大な違反が「確実」なときに使え、契約が終わる', 'どちらも、履行期が過ぎてからしか使えない'], answer: 2, explain: '停止は軽い手段なので基準が低く（apparent・substantial part）、解除は重い手段なので基準が高い（clear・fundamental breach）。どちらも履行期の前から使える。' },
        { q: '売主が履行期の2か月前に「この契約の物品は一切引き渡さない」と買主に書面で宣言した。買主が Art 72 で解除するとき、保証の機会を与える通知は必要？', choices: ['必要。どんな場合でも合理的な通知が要る', '不要。相手が履行しないと宣言した場合、その通知は要らない', '必要。裁判所の許可も要る', '解除はできない。履行期が来るまで待つ'], answer: 1, explain: 'Art 72(3)。宣言した相手に保証の機会を与えても意味がないので、72(2) の通知は不要。解除そのものは相手への通知（Art 26）で行い、裁判所は要らない。' },
        { q: '売主は物品を船で発送した後で、買主が倒産しかけていると知った。買主はすでに物品を受け取れる書類を持っている。売主は買主への引渡しを止められる？', choices: ['止められる。発送後でも、売主と買主の間では引渡しを止められる（ただちに通知する）', '止められない。書類を持っている買主には必ず引き渡す', '止められない。発送した時点で売主の義務は全部終わっている', '止められるが、通知は要らない'], answer: 0, explain: 'Art 71(2)。買主が書類を持っていても、売主は買主への引渡しを止められる。ただし売主と買主の間の物品の権利の話で、第三者との関係は別。71(3) で、ただちに通知する必要がある。' }
      ]
    },
    {
      id: 'B026',
      no: 26,
      title: '損害賠償の計算',
      goal: 'CISG の損害賠償（Art 74〜77）のルールを使い分け、代替取引の差額・時価との差額・逸失利益・損害軽減による減額を計算できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(c)'],
      slides: [
        {
          title: 'レンタカーを当日キャンセルされた',
          paras: ['予約していたレンタカー会社が、当日になって「車がない」と言ってきた。仕方なく別の会社で、3,000円高い車を借りた。この3,000円は、元の会社に払ってもらうのが自然。', 'では、旅行先の商談に遅れて、大きな取引を逃した分はどうか。予約のときに、レンタカー会社はそんな事情を知らなかった。ここが損害賠償の範囲の話になる。']
        },
        {
          title: '基本ルール（Art 74）',
          formula: '損害賠償 ＝ 違反の結果として相手が受けた損失（逸失利益を含む）。ただし、契約を結んだ時に予見した・予見すべきだった範囲まで',
          paras: ['逸失利益（loss of profit）＝違反がなければ得られたはずのもうけ。これも賠償に入る。', '上限は予見可能性（foreseeability）。違反した側が、契約締結時に知っていた・知るべきだった事情から、違反の起こりうる結果として予見した（すべきだった）損失まで。違反した時点の予見ではない。']
        },
        {
          title: 'なぜ？ 予見できた範囲までにする理由',
          paras: ['損害賠償の目的は、契約がきちんと履行された場合の状態に、相手を戻すこと。だから逸失利益も入る。', 'ただし、契約を結ぶ時に知りようのない特別な損失まで負わせると、売主はどれだけのリスクを背負うか分からない。予見できた範囲なら、そのリスクを代金や保険に反映できる。特別な事情があるなら、買主は契約時に伝えておけばよい。'],
          note: { kind: 'tip', text: 'CISG では、違反した側に過失がなくても損害賠償を負う。責任を免れるのは、支配を超える障害による場合（Art 79、次のユニットで学ぶ）に限られる。' }
        },
        {
          title: 'どの条文で計算するか',
          svg: `<svg viewBox="0 0 440 336" role="img" aria-label="解除の有無と代替取引の有無で、損害賠償の条文を選ぶ流れ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">どの条文で損害賠償を計算するか</text><rect x="110" y="48" width="220" height="38" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="73" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">契約を解除した？</text><rect x="210" y="118" width="210" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="315" y="143" text-anchor="middle" font-size="15" fill="var(--ink)">代わりの取引をした？</text><line x1="150" y1="86" x2="83" y2="200" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="140" text-anchor="end" fill="var(--ink)">いいえ</text><line x1="300" y1="86" x2="315" y2="118" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="106" fill="var(--ink)">はい</text><line x1="270" y1="156" x2="220" y2="200" stroke="var(--edge)" stroke-width="1.25"/><text x="236" y="182" text-anchor="end" fill="var(--ink)">した</text><line x1="370" y1="156" x2="357" y2="200" stroke="var(--edge)" stroke-width="1.25"/><text x="372" y="182" fill="var(--ink)">しない</text><rect x="20" y="200" width="126" height="76" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="157" y="200" width="126" height="76" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="294" y="200" width="126" height="76" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="83" y="224" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Art 74</text><text x="83" y="246" text-anchor="middle" fill="var(--ink)">実際の損失</text><text x="83" y="266" text-anchor="middle" fill="var(--ink)">＋逸失利益</text><text x="220" y="224" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Art 75</text><text x="220" y="246" text-anchor="middle" fill="var(--ink)">契約価格と</text><text x="220" y="266" text-anchor="middle" fill="var(--ink)">代替価格の差</text><text x="357" y="224" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Art 76</text><text x="357" y="246" text-anchor="middle" fill="var(--ink)">契約価格と</text><text x="357" y="266" text-anchor="middle" fill="var(--ink)">時価の差</text><text x="220" y="300" text-anchor="middle" fill="var(--ink)">Art 75・76 にも Art 74 の追加の損害を足せる</text><text x="220" y="324" text-anchor="middle" fill="var(--ink)">どの場合も損害軽減義務（Art 77）で減りうる</text></svg>`,
          caption: 'Art 75 と Art 76 は、契約を解除した場合の計算方法。解除していなければ Art 74 の一般ルールで計算する。解除しても、代わりの取引をせず、物品に時価もないときは Art 74 で計算する（後の逸失利益の例題）。'
        },
        {
          title: '代替取引の差額（Art 75）',
          paras: ['契約を解除した後、合理的な方法で、合理的な期間内に、買主が代わりの物品を買った（または売主が物品を転売した）場合。', '請求できるのは、契約価格と代替取引の価格の差額＋Art 74 で認められるそれ以外の損害（追加の運賃など）。'],
          example: {
            problem: '売主 S は、部品 1,000個を1個 $50 で買主 B に売る契約をした。S が引き渡さないので、B は契約を解除し、2週間後に別の業者から同じ部品を1個 $56 で買った。急ぎの手配で追加の運賃 $1,200 がかかった（予見できた損失）。B の損害賠償は？',
            steps: ['代替取引の価格: 1,000 × $56 ＝ $56,000', '契約価格: 1,000 × $50 ＝ $50,000', '差額（Art 75）: $56,000 − $50,000 ＝ $6,000', '追加の損害（Art 74）: 運賃 $1,200', '合計: $6,000 ＋ $1,200 ＝ $7,200'],
            answer: '$7,200'
          }
        },
        {
          title: '時価との差額（Art 76）',
          paras: ['契約を解除し、物品に時価（current price）があり、Art 75 の代替取引をしていない場合。契約価格と、解除した時の時価の差額＋Art 74 の追加の損害を請求できる。', '時価は、物品を引き渡すべきだった場所の価格（なければ、運送費の差を考えたうえで、代わりになる別の場所の価格）。物品を受け取った後で解除したなら、解除時ではなく受け取った時の時価を使う。']
        },
        {
          title: '例題: 売主が請求する場合',
          example: {
            problem: '買主 B は、1個 $40 で 2,000個を買う契約をしたが、引取りも支払も拒んだ。売主 S は契約を解除したが、物品を転売していない。解除した時の、引渡し場所での時価は1個 $34。S は倉庫代 $500 も払った（予見できた損失）。S の損害賠償は？',
            steps: ['契約価格: 2,000 × $40 ＝ $80,000', '解除時の時価: 2,000 × $34 ＝ $68,000', '差額（Art 76）: $80,000 − $68,000 ＝ $12,000。売主は値下がりした分を失う', '追加の損害（Art 74）: 倉庫代 $500', '合計: $12,000 ＋ $500 ＝ $12,500'],
            answer: '$12,500'
          },
          note: { kind: 'tip', text: '向きに注意。買主が請求するときは「時価（代替価格）− 契約価格」、売主が請求するときは「契約価格 − 時価（転売価格）」。どちらも、違反した側のせいで不利になった分を取り戻す。' }
        },
        {
          title: '損害軽減義務（Art 77）',
          paras: ['違反を主張する側は、損失（逸失利益を含む）を減らすために、その状況で合理的な措置をとらなければならない。とらなかった場合、違反した側は、減らせたはずの金額だけ賠償の減額を求められる。'],
          example: {
            problem: '上の部品の例（契約価格 1,000個 × $50）。B は解除の直後なら1個 $52 で買えたのに、値上がりを待たずに放置し、2か月後に1個 $60 で買った。B が請求できる差額は？',
            steps: ['B が請求したい差額: 1,000 × ($60 − $50) ＝ $10,000', 'すぐ買っていれば: 1,000 × ($52 − $50) ＝ $2,000', '減らせたはずの金額: $10,000 − $2,000 ＝ $8,000 → 減額される', '請求できるのは $2,000', '別の見方: 2か月後の購入は、Art 75 の「合理的な期間内」の代替取引に当たらない可能性が高い。その場合は Art 76 で解除時の時価 $52 を使うので、結果は同じ $2,000'],
            answer: '$2,000（$8,000 は損害軽減義務違反で減額）'
          }
        },
        {
          title: '例題: 逸失利益と予見可能性',
          example: {
            problem: 'S は部品 1,000個を1個 $50 で B に売る契約をした。B が1個 $65 で転売する予定であることを、S は契約時に知っていた。S が引き渡さず、市場にも代わりの部品がなかったので、B は契約を解除し、転売できなかった。さらに B は、S が契約時に知らなかった特別な契約で、違約金 $20,000 を払った。B が請求できる額は？',
            steps: ['逸失利益: 転売収入 1,000 × $65 ＝ $65,000 − 払わずに済んだ代金 $50,000 ＝ $15,000', 'S は転売を知っていた → 予見できた → 請求できる', '違約金 $20,000: S は契約時に知らず、知るべきでもなかった特別な損失 → 予見可能性の範囲外', '請求できる額: $15,000'],
            answer: '$15,000（違約金 $20,000 は予見できないので請求できない）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '予見可能性を「違反した時点」で判断する（正しくは契約締結時）。Art 75・76 を、解除していない場合にも使う（解除していなければ Art 74 で計算）。Art 76 の時価を、受け取った後で解除した場合にも解除時で取る（受け取った時の時価）。損害軽減を怠っても請求がゼロになるわけではなく、減らせた分だけ減る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['Art 74: 逸失利益を含む損失を、契約締結時に予見できた範囲で賠償する', '解除した場合: 代替取引をしたら契約価格との差額（Art 75）、しなければ時価との差額（Art 76）。どちらにも Art 74 の追加損害を足せる', 'Art 77: 損失を減らす合理的な措置をとらないと、減らせた分だけ減額される']
        },
        {
          title: '英単語',
          words: [
            ['damages', 'ダメージズ', '損害賠償（金）'],
            ['loss of profit', 'ロス オブ プロフィット', '逸失利益'],
            ['foreseeability', 'フォーシーアビリティ', '予見可能性'],
            ['substitute transaction', 'サブスティテュート トランザクション', '代替取引（代わりの購入・転売）'],
            ['goods in replacement / resale', '', '代わりに買った物品／転売'],
            ['current price', 'カレント プライス', '時価'],
            ['mitigate the loss', 'ミティゲート', '損失を軽減する'],
            ['at the time of the conclusion of the contract', '', '契約を結んだ時に（予見の基準時）']
          ]
        }
      ],
      quiz: [
        { q: "S agreed to sell 500 units to B at $20 per unit. S failed to deliver. B declared the contract avoided and, in a reasonable manner and within a reasonable time, bought 500 replacement units at $23 per unit. B also incurred extra transport costs of $400, which were foreseeable. What damages can B recover under the CISG?", type: 'number', answer: 1900, unit: '$', explain: 'Art 75 の差額: 500 × ($23 − $20) ＝ $1,500。Art 74 の追加の損害（運賃）$400 を足して $1,900。$1,500 は運賃を忘れた答え、$11,900 は代替価格の総額 $11,500 に運賃を足してしまった答え。' },
        { q: "B agreed to buy 1,000 units from S at $15 per unit but refused to take delivery. S declared the contract avoided and did not resell the goods. At the time of avoidance, the current price at the place where delivery should have been made was $12 per unit. What damages can S recover under Article 76?", type: 'number', answer: 3000, unit: '$', explain: '契約価格 1,000 × $15 ＝ $15,000 と、解除時の時価 1,000 × $12 ＝ $12,000 の差額で $3,000。売主の請求なので「契約価格 − 時価」。代金全額 $15,000 ではない（売主はまだ物品を持っている）。' },
        { q: 'Under Article 74 of the CISG, which of the following losses is NOT recoverable by the buyer?', choices: ['The extra cost of buying replacement goods after avoiding the contract', 'Profit lost on a resale contract which the seller knew about when the contract was concluded', 'Reasonable storage costs foreseeably incurred as a result of the breach', 'A loss on a highly profitable special contract which the seller did not know about and could not have known about when the contract was concluded'], answer: 3, explain: '予見可能性の上限（Art 74）。契約締結時に知らず、知るべきでもなかった特別な損失は賠償の範囲外。代替購入の追加費用、売主が知っていた転売の逸失利益、予見できた保管費用は、いずれも請求できる。' },
        { q: '契約価格は1個 $40 で 2,000個。売主の違反で買主は契約を解除した。解除の直後なら1個 $43 で代わりを買えたのに、買主は2か月待ち、1個 $50 で買った。損害軽減義務（Art 77）を考えると、買主が請求できる差額はいくら？', type: 'number', answer: 6000, unit: '$', explain: 'すぐ買っていれば 2,000 × ($43 − $40) ＝ $6,000。実際の差額 2,000 × ($50 − $40) ＝ $20,000 のうち、減らせたはずの $14,000 は減額される。請求がゼロになるわけではない。' },
        { q: '売主の引渡しが3週間遅れたが、買主は契約を解除せず、遅れて届いた物品を受け取った。遅れのせいで買主は $2,000 の追加費用を払った（予見できた損失）。損害賠償はどう計算する？', choices: ['Art 75 で代替取引の差額を計算する', 'Art 76 で時価との差額を計算する', '解除していないので、Art 74 の一般ルールで実際の損失 $2,000 を請求する', '解除していないので、損害賠償は請求できない'], answer: 2, explain: 'Art 75・76 は契約を解除した場合の計算方法。解除していなくても、Art 74 で損害賠償は請求できる。' },
        { q: 'A buyer took over the goods and later declared the contract avoided because of a fundamental lack of conformity. The buyer did not buy replacement goods. Under Article 76, at what time is the current price taken?', choices: ['At the time the buyer took over the goods', 'At the time of avoidance', 'At the time the contract was concluded', 'At the date of the court judgment'], answer: 0, explain: 'Art 76(1) の後段: 物品を受け取った後で解除した場合は、解除時ではなく、受け取った時の時価を使う。契約締結時は予見可能性（Art 74）の基準時で、時価の基準時ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'B023-1', lesson: 'B023', q: 'CISG の買主の2つの基本義務は？（Art 53）', a: '代金を支払うことと、物品を引き取ること' },
    { id: 'B023-2', lesson: 'B023', q: '信用状の開設のような支払の手続は、どの義務に入る？（Art 54）', a: '代金を支払う義務に含まれる。怠れば支払日前でも違反になりうる' },
    { id: 'B023-3', lesson: 'B023', q: '有効な契約で代金が決まっていないときの代金は？（Art 55）', a: '契約締結時に、同じ取引分野・似た条件で一般的に付けられていた価格' },
    { id: 'B023-4', lesson: 'B023', q: '決めがないときの支払の場所と時期は？（Art 57・58）', a: '売主の営業所（引換えならその場所）。物品か書類を買主の自由にした時' },
    { id: 'B023-5', lesson: 'B023', q: '支払日に売主からの請求は必要？（Art 59）', a: '不要。請求や手続がなくても支払日に払う' },
    { id: 'B023-6', lesson: 'B023', q: '引取り（take delivery）の義務の中身は？（Art 60）', a: '(a) 売主が引き渡せるよう合理的に期待される行為をする、(b) 物品を受け取る' },
    { id: 'B024-1', lesson: 'B024', q: '売主の救済を4つ挙げると？（Art 62〜65）', a: '履行請求、付加期間の設定、解除、仕様の指定（＋損害賠償）' },
    { id: 'B024-2', lesson: 'B024', q: '付加期間中に売主ができないこと・できることは？（Art 63）', a: '他の救済は使えない（不履行の通知があれば別）。遅れの損害賠償は請求できる' },
    { id: 'B024-3', lesson: 'B024', q: '売主が解除できる2つの場合は？（Art 64(1)）', a: '重大な違反、または付加期間内に代金を払わない・引き取らない' },
    { id: 'B024-4', lesson: 'B024', q: '解除したら損害賠償は請求できない？', a: 'できる。他の救済を使っても損害賠償の権利は失わない（Art 61(2)）' },
    { id: 'B024-5', lesson: 'B024', q: '裁判所は買主に支払の猶予期間を与えられる？', a: '与えられない（Art 61(3)）' },
    { id: 'B024-6', lesson: 'B024', q: 'period of grace の意味は？', a: '（裁判所などが与える）猶予期間' },
    { id: 'B025-1', lesson: 'B025', q: '履行を停止できる条件は？（Art 71）', a: '契約後、相手が重要な部分を履行しないことが明らか（能力・信用力の欠陥かふるまい）' },
    { id: 'B025-2', lesson: 'B025', q: '停止した後にすべきことは？（Art 71(3)）', a: 'ただちに通知。十分な保証が出たら履行を再開する' },
    { id: 'B025-3', lesson: 'B025', q: '履行期前に解除できる条件は？（Art 72）', a: '相手が重大な違反を犯すことが確実。時間があれば保証の機会を与える通知' },
    { id: 'B025-4', lesson: 'B025', q: '分割履行で、ある回だけに重大な違反。解除できる範囲は？（Art 73(1)）', a: 'その回だけ' },
    { id: 'B025-5', lesson: 'B025', q: '分割履行で過去の分まで解除できるのは？（Art 73(3)）', a: '買主だけ。相互依存で、契約時の目的に使えない場合' },
    { id: 'B025-6', lesson: 'B025', q: 'anticipatory breach の意味は？', a: '履行期前の違反（期日前に違反が見込まれること）' },
    { id: 'B026-1', lesson: 'B026', q: 'Art 74 の損害賠償の範囲と上限は？', a: '逸失利益を含む損失。契約締結時に予見した・予見すべきだった範囲まで' },
    { id: 'B026-2', lesson: 'B026', q: '予見可能性はいつの時点で判断する？', a: '契約を結んだ時（違反の時ではない）' },
    { id: 'B026-3', lesson: 'B026', q: '解除後に代わりを買った買主の損害賠償は？（Art 75）', a: '代替価格 − 契約価格 ＋ Art 74 の追加の損害' },
    { id: 'B026-4', lesson: 'B026', q: '解除後、代替取引をしなかったときは？（Art 76）', a: '契約価格と解除時の時価の差（受取後の解除なら受取時の時価）＋追加の損害' },
    { id: 'B026-5', lesson: 'B026', q: '損害軽減義務を怠るとどうなる？（Art 77）', a: '減らせたはずの金額だけ賠償が減る（ゼロにはならない）' },
    { id: 'B026-6', lesson: 'B026', q: '1個 $20 で500個、代替購入1個 $23、予見できた運賃 $400。賠償額は？', a: '500 × $3 ＋ $400 ＝ $1,900' }
  ]
});
