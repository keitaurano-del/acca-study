(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 102,
  part: 1,
  partTitle: '管理会計の入口',
  lessons: [
    {
      id: 'M004',
      no: 4,
      title: 'データと情報のちがい',
      goal: 'データ（data）と情報（information）のちがいを説明し、ある記録がデータか情報かを、使う人と目的から判断できるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A1(e)'],
      slides: [
        {
          title: 'レシートの束と家計簿',
          paras: ['財布にたまったレシートの束。1枚ずつ見ても「今月いくら使ったか」は分からない。', '家計簿アプリに入れて、食費・日用品・外食に分けて合計すると、「外食が先月より1万円多い」と分かる。これなら来月どうするか決められる。', 'レシートの束がデータ（data）、家計簿の集計が情報（information）。']
        },
        {
          title: 'データと情報の定義',
          list: ['データ（data）: まだ加工していない、生の事実・数字・記録。1件ずつの取引、測った値、アンケートの回答など', '情報（information）: データを加工して、受け取る人にとって意味があり、役に立つ形にしたもの'],
          formula: '情報 ＝ 使う人の目的に合わせて加工したデータ'
        },
        {
          title: '「加工」でやること',
          paras: ['データを情報に変える作業を加工（processing）という。管理会計でよく使う加工は次のとおり。'],
          list: ['分類する（classify）: 製品別・店舗別・費目別に分ける', '並べ替える（sort）: 多い順、日付順など', '計算・集計する（calculate, summarise）: 合計、平均、1個あたり', '比べる（compare）: 予算や前年と並べて差を出す']
        },
        {
          title: 'たこ焼き屋のレジの記録',
          paras: ['レジは会計ごとに「13:05、8個入り、$6」と記録する。1日に300件。この1件1件がデータ。', '1か月分を時間帯別・商品別に集計し、去年の同じ月と比べると、店長は「昼だけ1人増やそう」と決められる。これが情報。'],
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="データを加工して情報にし、経営者が判断に使う流れ" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">データを加工して情報にする</text><rect x="20" y="56" width="112" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="76" y="88" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">データ</text><text x="76" y="114" text-anchor="middle" fill="var(--quiet)">生の記録</text><line x1="134" y1="94" x2="152" y2="94" stroke="var(--ink)" stroke-width="1.5"/><polygon points="160,94 151,89 151,99" fill="var(--ink)"/><rect x="164" y="56" width="112" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="88" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">加工</text><text x="220" y="114" text-anchor="middle" fill="var(--quiet)">分類・集計</text><line x1="278" y1="94" x2="296" y2="94" stroke="var(--ink)" stroke-width="1.5"/><polygon points="304,94 295,89 295,99" fill="var(--ink)"/><rect x="308" y="56" width="112" height="76" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="364" y="88" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">情報</text><text x="364" y="114" text-anchor="middle" fill="var(--ink)">使える形</text><line x1="364" y1="134" x2="364" y2="158" stroke="var(--ink)" stroke-width="1.5"/><polygon points="364,166 359,157 369,157" fill="var(--ink)"/><rect x="20" y="168" width="400" height="48" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="198" text-anchor="middle" font-size="15" fill="var(--ink)">経営者が計画・統制・意思決定に使う</text><text x="220" y="246" text-anchor="middle" fill="var(--ink)">使う人の目的に合う形にして初めて情報になる</text></svg>`
        },
        {
          title: 'データと情報の例',
          table: { caption: '同じ材料から作るデータと情報', head: ['データ', '情報'], rows: [['1回ごとの会計の記録', '商品別・月別の売上の集計'], ['従業員ごとの出勤・退勤の時刻', '部門別の残業時間と前月との比較'], ['1回ごとの材料の購入記録', '部門別の材料費と予算との差'], ['アンケート1枚ずつの回答', '満足度の平均と、不満の多い項目']] }
        },
        {
          title: 'ある人の情報は、別の人のデータ',
          paras: ['A店の店長にとって、A店の週ごとの売上報告は情報。そのまま判断に使える。', '本部の経営者は、全10店の週報を集めて店どうしを比べ、地域別に合計する。本部から見ると、各店の週報はまだ加工の途中の材料、つまりデータになる。', 'データか情報かは、数字そのものではなく、使う人と目的で決まる。']
        },
        {
          title: 'なぜ？ データのままでは使えない',
          paras: ['経営者には、何千件もの記録を1件ずつ読む時間はない。生のデータは量が多すぎて、計画・統制・意思決定（レッスン2で学んだ3つの仕事）にそのままは使えない。', '管理会計の仕事の中心は、データを集めて加工し、経営者が判断に使える情報にすること。', 'ただし元のデータが間違っていれば、どれだけ上手に加工しても情報は間違う。これを garbage in, garbage out（GIGO）という。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「数字はデータ、文章は情報」ではない。お客さんの感想の文章もデータになりうるし、グラフや一言の結論も情報になりうる。分かれ目は、加工されて、使う人の目的に役立つ形になっているかどうか。データを多く集めるほど良い情報になる、というわけでもない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['データ＝まだ加工していない生の事実・数字・記録', '情報＝データを加工して、受け取る人に意味があり役立つ形にしたもの', 'データか情報かは、使う人と目的で決まる']
        },
        {
          title: '英単語',
          words: [
            ['data', 'データ', '未加工の事実・数字・記録'],
            ['information', 'インフォメーション', '情報（加工されて意味がある形になったデータ）'],
            ['raw data', 'ロー データ', '生データ'],
            ['processing', 'プロセシング', '加工・処理'],
            ['classify / summarise', 'クラシファイ / サマライズ', '分類する / 要約・集計する'],
            ['meaningful', 'ミーニングフル', '（受け取る人にとって）意味がある'],
            ['garbage in, garbage out (GIGO)', 'ガベージ イン ガベージ アウト', '入力が誤れば、出てくる情報も誤る']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes information?', choices: ['Raw facts and figures that have not yet been processed', 'Data that has been processed so that it is meaningful to the person who receives it', 'Any figures produced by a computer system', 'Facts collected from sources outside the organisation'], answer: 1, explain: '1つ目はデータの定義。コンピュータが出した数字でも、加工されて使う人に意味がある形になっていなければ情報ではない。4つ目は情報の出どころ（外部か内部か）の話で、データか情報かの区別とは関係ない。' },
        { q: 'A supermarket records every item scanned at its checkouts. Which of the following is information rather than data?', choices: ['The barcode of each item scanned', 'The time of each sale', 'A report comparing sales of each product this week with the same week last year', 'The price charged for each item'], answer: 2, explain: 'バーコード・時刻・価格は1件ずつの生の記録でデータ。製品別に集計し、前年と比べた報告は加工されていて、店長が判断に使えるので情報。' },
        { q: 'たこ焼き屋のレジに記録された「12:40、12個入り、$8」という1件の会計記録は？', choices: ['データ。まだ加工されていない1件の記録', '情報。金額が書いてあるから', '情報。コンピュータで記録されたから', 'データでも情報でもない'], answer: 0, explain: '金額が入っていても、コンピュータで記録されていても、1件の生の記録はデータ。集計や比較をして初めて情報になる。' },
        { q: 'A店の店長が判断に使っている、A店の週ごとの売上報告。本部が全店分を集めて地域別に集計するとき、本部にとってこの報告は？', choices: ['店長がすでに作ったものなので、誰にとっても情報', '本部がさらに加工する材料なので、本部にとってはデータ', '数字が入っているので、必ずデータ', '週ごとの報告なので、情報にはならない'], answer: 1, explain: 'データか情報かは、使う人と目的で決まる。店長には情報でも、全店を比べたい本部にはまだ加工の途中のデータになる。' },
        { q: 'Which of the following statements about data and information is correct?', choices: ['Data only consists of numbers, while information is always written in words', 'Processing more data always produces better information', 'If the data input is inaccurate, the information produced will also be unreliable', 'Information is only used for planning, not for control or decision making'], answer: 2, explain: 'garbage in, garbage out の考え方。1つ目は誤り（文章もデータになりうる）。2つ目も誤り（量が多ければ良いわけではない）。4つ目も誤りで、情報は計画・統制・意思決定のすべてに使う。' }
      ]
    },
    {
      id: 'M005',
      no: 5,
      title: 'よい情報の条件',
      goal: 'よい情報の8つの条件（ACCURATE）を説明し、報告に欠けている条件を見つけ、条件どうしのぶつかり合いと費用対効果を判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A1(f)'],
      slides: [
        {
          title: '明後日に届く天気予報',
          paras: ['「明日の降水確率80%」が明後日に届いたら役に立たない。どんなに正確でも、遅ければ意味がない。', '逆に、気温を小数点以下3けたまで知る必要もない。傘を持つか決めるには、雨が降りそうかどうかで足りる。', 'よい情報には条件がある。8つの条件を ACCURATE の頭文字で覚えるとよい。']
        },
        {
          title: 'よい情報の8つの条件',
          svg: `<svg viewBox="0 0 440 296" role="img" aria-label="よい情報の8つの条件 ACCURATE の一覧" font-size="14"><rect x="20" y="12" width="400" height="38" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="37" text-anchor="middle" font-size="17" font-weight="600" fill="var(--ink)">ACCURATE で覚える8つの条件</text><rect x="20" y="62" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="94" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">A</text><text x="60" y="83" font-weight="600" fill="var(--ink)">Accurate</text><text x="60" y="103" fill="var(--ink)">目的に足りる正確さ</text><rect x="230" y="62" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="248" y="94" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">C</text><text x="270" y="83" font-weight="600" fill="var(--ink)">Complete</text><text x="270" y="103" fill="var(--ink)">必要なものがそろう</text><rect x="20" y="118" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="150" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">C</text><text x="60" y="139" font-weight="600" fill="var(--ink)">Cost-beneficial</text><text x="60" y="159" fill="var(--ink)">効果がコストを上回る</text><rect x="230" y="118" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="248" y="150" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">U</text><text x="270" y="139" font-weight="600" fill="var(--ink)">User-targeted</text><text x="270" y="159" fill="var(--ink)">使う人に合わせる</text><rect x="20" y="174" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="206" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">R</text><text x="60" y="195" font-weight="600" fill="var(--ink)">Relevant</text><text x="60" y="215" fill="var(--ink)">目的に関係がある</text><rect x="230" y="174" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="248" y="206" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">A</text><text x="270" y="195" font-weight="600" fill="var(--ink)">Authoritative</text><text x="270" y="215" fill="var(--ink)">信頼できる出どころ</text><rect x="20" y="230" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="262" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">T</text><text x="60" y="251" font-weight="600" fill="var(--ink)">Timely</text><text x="60" y="271" fill="var(--ink)">判断に間に合う</text><rect x="230" y="230" width="190" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="248" y="262" text-anchor="middle" font-size="20" font-weight="600" fill="var(--ink)">E</text><text x="270" y="251" font-weight="600" fill="var(--ink)">Easy to use</text><text x="270" y="271" fill="var(--ink)">分かりやすい形</text></svg>`,
          caption: '左上から横に読むと A・C・C・U・R・A・T・E になる。',
          note: { kind: 'tip', text: '英語の問題では言い換えも出る。understandable（分かりやすい）は Easy to use、reliable（信頼できる）は Authoritative や Accurate と同じ考え方。' }
        },
        {
          title: '前半の4つ',
          list: ['Accurate（正確）: 目的に足りる正確さ。経営会議の資料は $1,000 単位で十分。細かすぎる数字はかえって読みにくい', 'Complete（完全）: 判断に必要なものがそろっている。費用だけで売上がない報告では、利益を判断できない', 'Cost-beneficial（費用対効果）: 情報から得られる効果（よりよい判断）が、作るコストを上回る', 'User-targeted（利用者向け）: 使う人に合わせる。経営トップには要約、現場の責任者には詳しい明細']
        },
        {
          title: '後半の4つ',
          list: ['Relevant（目的適合）: 目的に関係のある内容だけを入れる。関係のない数字が多いと大事な点が埋もれる（情報過多、information overload）', 'Authoritative（信頼性）: 信頼できる出どころから来ている。出典の分からない数字は判断に使いにくい', 'Timely（適時）: 判断に間に合う。月末から6週間後に届く原価報告では、手を打つのが遅れる', 'Easy to use（使いやすい）: 分かりやすい形で、正しい相手に、適切な方法で届く']
        },
        {
          title: 'たこ焼き屋のまずい報告',
          table: { caption: 'どの条件が欠けている？', head: ['まずい報告', '欠けている条件'], rows: [['オーナー向けに、全レシートを200ページ印刷して渡す', 'User-targeted, Relevant'], ['3月の材料費の報告が5月に届く', 'Timely'], ['材料費だけで、売上や予算と比べる数字がない', 'Complete'], ['出典の分からないネットの数字で売れ筋を予測する', 'Authoritative'], ['$1,000 の判断のために $3,000 かけて調べる', 'Cost-beneficial']] }
        },
        {
          title: '例題: その報告、作る価値はある？',
          example: {
            problem: 'たこ焼き屋は材料の廃棄を減らしたい。毎日の廃棄報告を作ると月 $1,500 かかり、廃棄は月 $900 減る見込み。週1回の報告なら月 $400 で、廃棄は月 $700 減る見込み。どちらを選ぶ？',
            steps: ['毎日の報告: 効果 $900 − コスト $1,500 ＝ −$600（損）', '週1回の報告: 効果 $700 − コスト $400 ＝ ＋$300（得）', '毎日の方が効果は大きいが、それ以上にコストがかかる'],
            answer: '週1回の報告を選ぶ。情報は「効果 ＞ コスト」のときだけ作る価値がある'
          }
        },
        {
          title: '条件どうしはぶつかる',
          paras: ['8つ全部を最大にはできない。', '正確さと適時性: 完璧に正確な数字を待つと遅くなる。早めの見積もりの方が役に立つことがある。', '完全さとコスト・目的適合: 何でも入れると高くつき、大事な点が埋もれる。', 'どこで折り合うかは、使う人と判断の重さで決める。']
        },
        {
          title: 'なぜ？ 物差しは「判断がよくなるか」',
          paras: ['情報の目的は、計画・統制・意思決定をよくすること。8つの条件はすべてそこから出てくる。', '遅い・不正確・関係ない・読みにくい情報では、判断はよくならない。判断がよくならなければ、作ったコストはむだになる。だから最後の物差しは「効果がコストを上回るか」になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「よい情報＝できるだけ詳しく、できるだけ正確」ではない。必要以上に詳しく正確な情報は、時間とコストがかかり、読む人を迷わせる。試験で「as detailed as possible」「completely accurate」のような選択肢が出たら、よい情報の条件としては誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['よい情報の8条件は ACCURATE（Accurate, Complete, Cost-beneficial, User-targeted, Relevant, Authoritative, Timely, Easy to use）', '正確さ・詳しさは「目的に足りる」水準でよい', '情報は、効果がコストを上回るときだけ作る価値がある']
        },
        {
          title: '英単語',
          words: [
            ['accurate', 'アキュレット', '正確な（目的に足りる程度に）'],
            ['complete', 'コンプリート', '完全な（必要なものがそろう）'],
            ['cost-beneficial', 'コスト ベネフィシャル', '効果がコストを上回る'],
            ['user-targeted', 'ユーザー ターゲテッド', '使う人に合わせた'],
            ['relevant', 'レレバント', '目的に関係がある'],
            ['authoritative', 'オーソリタティブ', '信頼できる出どころの'],
            ['timely', 'タイムリー', '適時の（判断に間に合う）'],
            ['information overload', 'インフォメーション オーバーロード', '情報過多']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT an attribute of good information?', choices: ['It is relevant to the purpose for which it is used', 'It is as detailed as possible', 'It is available in time for the decision to be made', 'The benefit of having it is greater than the cost of producing it'], answer: 1, explain: '詳しすぎる情報は大事な点を埋もれさせ、コストもかかる。必要な程度に詳しければよい。ほかの3つは Relevant、Timely、Cost-beneficial で、よい情報の条件。' },
        { q: 'A production manager receives a monthly cost report which is accurate and complete, but it arrives six weeks after the end of the month. Which attribute of good information does the report lack?', choices: ['Relevance', 'Timeliness', 'Authoritativeness', 'Completeness'], answer: 1, explain: '正確で完全でも、6週間後では手を打つのが遅れる。欠けているのは適時性（Timely）。Completeness は問題文で満たされている。' },
        { q: 'A restaurant manager can receive a daily food waste report at a cost of $250 per month. Better ordering is expected to cut waste by $600 per month. What is the net monthly benefit of the report ($)?', type: 'number', answer: 350, unit: '$', explain: '効果 $600 − コスト $250 ＝ $350。効果がコストを上回るので、この報告は作る価値がある（Cost-beneficial）。' },
        { q: 'オーナー向けの月次報告に、すべてのレシートの明細を200ページ付けた。数字は正確。主に欠けている条件は？', choices: ['正確さ（Accurate）', '信頼できる出どころ（Authoritative）', '使う人に合わせる（User-targeted）', '適時性（Timely）'], answer: 2, explain: 'オーナーに必要なのは要約。明細が正確でも、使う人に合わない。量が多すぎて大事な点が埋もれるので Relevant にも欠ける。正確さや出どころには問題がない。' },
        { q: '月末の利益の速報を翌日に出すか、すべて確定する3週間後に出すか。正しい考え方は？', choices: ['情報は100%正確になるまで出してはいけない', '早く出すほど、必ずよい情報になる', '正確さと適時性は両立するので、悩む必要はない', '判断に間に合うなら、少し粗い見積もりの速報の方が役に立つことがある'], answer: 3, explain: '正確さと適時性はぶつかることがある。どちらを優先するかは、使う人と判断の重さで決める。完璧を待つのも、正確さを無視して急ぐのも誤り。' },
        { q: 'Information which comes from a reliable source that the user can trust is described as:', choices: ['Complete', 'User-targeted', 'Authoritative', 'Cost-beneficial'], answer: 2, explain: '信頼できる出どころから来ている情報は Authoritative。Complete は必要なものがそろうこと、User-targeted は使う人に合わせること、Cost-beneficial は効果がコストを上回ること。' }
      ]
    },
    {
      id: 'M006',
      no: 6,
      title: '原価と売上の取引を正しく承認・記録・分析するしくみ',
      goal: '仕入・労務・経費・売上の取引が、どの書類としくみで承認・記録・分析されるかを説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A1(g)'],
      slides: [
        {
          title: '会社の経費精算と同じ',
          paras: ['出張の新幹線代を立て替えたとする。上司が「その出張は認める」と承認し、経理が領収書を見て記録し、部署ごとの出張費として集計する。', '会社の原価と売上の取引も同じ。承認する・記録する・分析する、の3段階で正しく扱う。']
        },
        {
          title: '3つの段階',
          list: ['承認（authorisation）: 権限のある人が、その取引をしてよいと認める。勝手な発注や値引きを防ぐ', '記録（recording）: 取引を漏れなく、二重にせず、正しい金額と期間で帳簿に記録する', '分析（analysis）: コードを付けて、部門・製品・費目別に集計し、管理情報にする'],
          formula: '承認 → 記録 → 分析。どれが欠けても原価の情報は信用できない',
          note: { kind: 'tip', text: 'しくみ（systems）は紙の書類だけではない。会計ソフトでは、パスワードと権限で承認できる人を限り、入力チェックでありえない数量や存在しないコードをはじき、だれがいつ入力したかを記録（audit trail）する。' }
        },
        {
          title: '材料を仕入れる流れ',
          paras: ['仕入先の請求書は、注文書（頼んだもの）と GRN（届いたもの）の3つを突き合わせてから支払いを承認する。これを3点照合（three-way match）という。', '最後に、どの原価センター（cost centre: 原価を集める部門などの単位。レッスン7で学ぶ）の費用かを示すコードを付けて記録する。'],
          svg: `<svg viewBox="0 0 440 370" role="img" aria-label="購買依頼書から記録までの仕入の書類の流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">仕入の書類はバトンのように渡る</text><rect x="20" y="48" width="190" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="70" text-anchor="middle" font-size="15" fill="var(--ink)">購買依頼書</text><text x="226" y="70" fill="var(--quiet)">使う部門が作り購買部へ</text><polygon points="109,86 121,86 115,93" fill="var(--ink)"/><rect x="20" y="96" width="190" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="118" text-anchor="middle" font-size="15" fill="var(--ink)">注文書</text><text x="226" y="118" fill="var(--quiet)">購買部が承認し仕入先へ</text><polygon points="109,134 121,134 115,141" fill="var(--ink)"/><rect x="20" y="144" width="190" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="166" text-anchor="middle" font-size="15" fill="var(--ink)">受入報告書（GRN）</text><text x="226" y="166" fill="var(--quiet)">倉庫が届いた物を記録</text><polygon points="109,182 121,182 115,189" fill="var(--ink)"/><rect x="20" y="192" width="190" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="214" text-anchor="middle" font-size="15" fill="var(--ink)">仕入先の請求書</text><text x="226" y="214" fill="var(--quiet)">仕入先から経理に届く</text><polygon points="109,230 121,230 115,237" fill="var(--ink)"/><rect x="20" y="240" width="190" height="34" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="262" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">3点照合・支払承認</text><text x="226" y="262" fill="var(--ink)">注文書・GRN・請求書</text><polygon points="109,278 121,278 115,285" fill="var(--ink)"/><rect x="20" y="288" width="190" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="310" text-anchor="middle" font-size="15" fill="var(--ink)">記録・コード付け</text><text x="226" y="310" fill="var(--quiet)">原価センター別に集計</text><text x="220" y="354" text-anchor="middle" fill="var(--ink)">頼んで、届いた分だけを払う</text></svg>`
        },
        {
          title: '原価の取引の書類',
          table: { caption: '仕入と材料の書類', head: ['書類', '作る人・役割'], rows: [['購買依頼書（purchase requisition）', '使う部門が作り、部門長が承認。社内の書類'], ['注文書（purchase order）', '購買部が作って承認し、仕入先へ送る'], ['受入報告書（goods received note, GRN）', '倉庫が、届いた品物と数量を記録'], ['仕入先の請求書（purchase invoice）', '仕入先から届く。注文書・GRN と照合'], ['材料出庫票（materials requisition note）', '倉庫から製造へ材料を出すとき。どの原価センターの費用かを記録']] },
          after: '労務費は、タイムカード（clock card）や作業時間票（timesheet, job card）を上司が承認してから給与を計算し、支払いも承認する。経費は、予算を持つ責任者が請求書を承認する。'
        },
        {
          title: '売上の取引の流れ',
          table: { caption: '掛けで売るときの流れ', head: ['段階', 'すること・書類'], rows: [['注文を受ける', '顧客の注文（customer order）を受け、受注書（sales order）を作る'], ['与信の確認', '掛けで売る前に、与信限度額（credit limit）以内か確かめて承認'], ['出荷', '出荷票・納品書（despatch note, delivery note）。顧客が受取りのサイン'], ['請求', '承認された価格表で売上請求書（sales invoice）を作る'], ['返品・値引き', '貸方票（credit note）は責任者の承認が必要']] },
          after: '売上は売掛金台帳と売上勘定に記録し、製品別・地域別のコードを付けて集計する。'
        },
        {
          title: '間違いと不正を防ぐしくみ',
          list: ['承認限度額（authorisation limits）: 例 $500 までは店長、超えたら財務部長が承認', '職務の分離（segregation of duties）: 発注・受取り・支払い・記録を別の人がする。1人で全部できると不正を隠せる', '連番の書類（sequentially pre-numbered documents）: 番号が飛べば漏れ、重なれば二重記録とすぐ分かる', '照合（reconciliation）: 統制勘定と補助元帳、銀行残高などを定期的に突き合わせる（K1 で学んだ）']
        },
        {
          title: '分析: コードを付けて集計する',
          paras: ['取引にはコード（code）を付けて記録する。コードを見れば、どこで何に使った原価かが分かり、コンピュータで自動的に集計できる。'],
          table: { caption: 'たこ焼き屋のコードの例', head: ['コード', '意味'], rows: [['21', 'セントラルキッチン（原価センター）'], ['22', '駅前店（原価センター）'], ['310', '材料費: タコ'], ['21-310', 'セントラルキッチンで使ったタコ']] },
          after: '集計した原価を予算と比べれば、統制に使える。コードの付け方の種類は、後のレッスンで学ぶ。'
        },
        {
          title: 'なぜ？ 正しい情報は正しい取引から',
          paras: ['承認がないと、必要のない物を買う・勝手に値引きする・架空の請求に払う、といったことが起きる。', '記録が漏れたり二重になったりすると、製品の原価も利益も間違う。分析しなければ、どの部門・どの製品にいくらかかったか分からない。', '管理会計の情報は、正しく承認・記録されたデータからしか作れない（garbage in, garbage out）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '購買依頼書と注文書を混同しない。購買依頼書は社内で「買ってほしい」と頼む書類、注文書は購買部が仕入先へ出す書類。GRN は自社の倉庫が作る受取りの記録で、仕入先が品物に付けてくる納品書（delivery note）とは別。また、発注した人が支払いの承認までするのは職務の分離に反する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['原価と売上の取引は、承認 → 記録 → 分析 の3段階で扱う', '仕入代金は、注文書・GRN・請求書の3点照合と承認の後に払う', '承認限度額・職務の分離・連番の書類・照合・コードで、正しさと分析を守る']
        },
        {
          title: '英単語',
          words: [
            ['authorisation', 'オーソライゼーション', '承認'],
            ['purchase requisition', 'パーチェス リクイジション', '購買依頼書（社内）'],
            ['purchase order', 'パーチェス オーダー', '注文書（仕入先へ）'],
            ['goods received note (GRN)', 'グッズ レシーブド ノート', '受入報告書'],
            ['three-way match', 'スリーウェイ マッチ', '3点照合（注文書・GRN・請求書）'],
            ['materials requisition note', 'マテリアルズ リクイジション ノート', '材料出庫票'],
            ['despatch note / delivery note', 'ディスパッチ ノート / デリバリー ノート', '出荷票 / 納品書'],
            ['credit limit', 'クレジット リミット', '与信限度額'],
            ['credit note', 'クレジット ノート', '貸方票（返品・値引きのとき）'],
            ['segregation of duties', 'セグリゲーション オブ デューティーズ', '職務の分離'],
            ['cost code', 'コスト コード', '原価コード'],
            ['audit trail', 'オーディット トレイル', 'だれがいつ何を入力・承認したかの記録']
          ]
        }
      ],
      quiz: [
        { q: 'Which document is prepared by a department to ask the purchasing department to buy goods?', choices: ['Purchase order', 'Purchase requisition', 'Goods received note', 'Purchase invoice'], answer: 1, explain: '購買依頼書は社内で購買部に頼む書類。注文書は購買部が仕入先へ出す書類、GRN は倉庫が受取りを記録する書類、請求書は仕入先から届く書類。' },
        { q: 'Before a supplier invoice is authorised for payment, it should be matched with which TWO documents?', choices: ['The purchase requisition and the materials requisition note', 'The purchase order and the goods received note', 'The sales order and the despatch note', 'The credit note and the purchase requisition'], answer: 1, explain: '3点照合。注文書で「頼んだもの」、GRN で「届いたもの」を確かめ、請求書と一致してから払う。材料出庫票は倉庫から製造へ出すときの書類、受注書と出荷票は売上側の書類。' },
        { q: 'Which of the following is a control over the authorisation of sales transactions?', choices: ['Using sequentially pre-numbered sales invoices', 'Coding each sales invoice by product and region', 'Checking that a credit customer is within its credit limit before accepting the order', 'Posting sales invoices to the receivables ledger'], answer: 2, explain: '与信限度額の確認は、掛けで売ってよいかを認める承認のしくみ。連番は記録の漏れや二重を見つけるしくみ、コード付けは分析、売掛金台帳への記帳は記録。' },
        { q: '小さな会社で、同じ1人が材料を発注し、届いた品物を受け取り、仕入先への支払いも承認している。一番の問題は？', choices: ['承認限度額が高すぎる', 'コードが付いていないので分析できない', '書類に連番が付いていない', '職務の分離がなく、架空の仕入や着服を1人で隠せてしまう'], answer: 3, explain: '発注・受取り・支払いを1人がすると、誰もチェックできない。承認限度額・コード・連番については問題文に書かれていない。' },
        { q: 'すべての原価の取引に「21-310」のようなコードを付ける主な目的は？', choices: ['支払いの前に、権限のある人が認める（承認）', '部門・費目別に集計して管理情報にする（分析）', '仕入先に注文の内容を伝える', '書類の漏れや二重記録を見つける'], answer: 1, explain: 'コードは分析のためのしくみ。承認は権限のある人のサイン、注文の内容は注文書で伝え、漏れや二重記録は連番の書類で見つける。' },
        { q: 'Why should sales invoices be sequentially pre-numbered?', choices: ['So that missing or duplicated invoices can be identified', 'So that customers do not exceed their credit limits', 'So that sales can be analysed by product', 'So that discounts are authorised by a manager'], answer: 0, explain: '番号が飛べば記録漏れ、同じ番号が2回あれば二重記録と分かる。与信限度額や値引きの承認は承認のしくみ、製品別の集計はコードによる分析。' }
      ]
    }
  ],
  cards: [
    { id: 'M004-1', lesson: 'M004', q: 'データ（data）とは？', a: 'まだ加工していない、生の事実・数字・記録' },
    { id: 'M004-2', lesson: 'M004', q: '情報（information）とは？', a: 'データを加工して、受け取る人に意味があり役立つ形にしたもの' },
    { id: 'M004-3', lesson: 'M004', q: 'データを情報にする加工の例を4つ', a: '分類する・並べ替える・計算して集計する・予算や前年と比べる' },
    { id: 'M004-4', lesson: 'M004', q: '各店の週報は、全店を集計する本部にとっては？', a: 'データ。データか情報かは、使う人と目的で決まる' },
    { id: 'M004-5', lesson: 'M004', q: 'garbage in, garbage out とは？', a: '元のデータが誤っていれば、加工した情報も誤ること' },
    { id: 'M004-6', lesson: 'M004', q: 'なぜデータを加工する必要がある？', a: '生のデータは量が多すぎて、計画・統制・意思決定にそのまま使えないから' },
    { id: 'M005-1', lesson: 'M005', q: 'よい情報の8条件（ACCURATE）は？', a: 'Accurate, Complete, Cost-beneficial, User-targeted, Relevant, Authoritative, Timely, Easy to use' },
    { id: 'M005-2', lesson: 'M005', q: 'Timely（適時）とは？', a: '判断に間に合うタイミングで届くこと' },
    { id: 'M005-3', lesson: 'M005', q: 'User-targeted の例は？', a: '経営トップには要約、現場の責任者には詳しい明細' },
    { id: 'M005-4', lesson: 'M005', q: '情報を作る価値があるのはどんなとき？', a: '得られる効果（よりよい判断）が、作るコストを上回るとき' },
    { id: 'M005-5', lesson: 'M005', q: '正確さと適時性の関係は？', a: 'ぶつかることがある。完璧な数字を待つより、早めの見積もりが役立つこともある' },
    { id: 'M005-6', lesson: 'M005', q: 'information overload（情報過多）とは？', a: '関係のない情報が多すぎて、大事な点が埋もれること。Relevant で防ぐ' },
    { id: 'M005-7', lesson: 'M005', q: '英語の問題での言い換え understandable / reliable は？', a: 'understandable ≒ Easy to use、reliable ≒ Authoritative・Accurate' },
    { id: 'M006-1', lesson: 'M006', q: '原価と売上の取引を扱う3つの段階は？', a: '承認（authorisation）→ 記録（recording）→ 分析（analysis）' },
    { id: 'M006-2', lesson: 'M006', q: '購買依頼書と注文書のちがいは？', a: '購買依頼書は社内で購買部に頼む書類、注文書は購買部が仕入先へ出す書類' },
    { id: 'M006-3', lesson: 'M006', q: 'GRN（goods received note）とは？', a: '受入報告書。倉庫が、届いた品物と数量を記録する自社の書類' },
    { id: 'M006-4', lesson: 'M006', q: '3点照合（three-way match）とは？', a: '注文書・GRN・仕入先の請求書を突き合わせてから支払いを承認すること' },
    { id: 'M006-5', lesson: 'M006', q: '職務の分離（segregation of duties）とは？', a: '発注・受取り・支払い・記録を別の人が行い、1人で不正を隠せなくすること' },
    { id: 'M006-6', lesson: 'M006', q: '原価コードの役割は？', a: '取引を部門・製品・費目別に集計（分析）し、予算と比べられるようにする' },
    { id: 'M006-7', lesson: 'M006', q: '掛けで売る前に承認として確かめることは？', a: '顧客が与信限度額（credit limit）以内かどうか' }
  ]
});
