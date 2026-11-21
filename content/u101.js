(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 101,
  part: 1,
  partTitle: '管理会計の入口',
  lessons: [
    {
      id: 'M001',
      no: 1,
      title: '管理会計ってなに？財務会計とのちがい',
      goal: '管理会計の目的を説明し、財務会計とのちがいを7つの観点で言えるようになる',
      minutes: 12,
      recall: false,
      exam: 'both',
      outcomes: ['K2:A1(a)', 'K2:A1(b)'],
      slides: [
        {
          title: '確定申告と、家計の作戦メモ',
          paras: ['年に1回の確定申告は、税務署という「外の人」に出す書類。書き方は決まっていて、去年1年分をまとめて書く。', '一方、「来月の旅行に行けるか」を考える家計メモは自分のためのもの。形は自由で、食費の内訳や来月の予定まで細かく書く。元の記録は同じでも、目的がちがうと作り方が変わる。']
        },
        {
          title: '管理会計（management accounting）とは',
          paras: ['会社の中の経営者（managers）に、仕事に役立つ情報を出す会計。経営者の仕事は、計画（planning）・統制（control）・意思決定（decision making）の3つ。管理会計はこの3つを助ける情報を作る。', 'K1 で学んだ財務諸表を作る会計は、財務会計（financial accounting）という。こちらは社外の人に会社の状態を報告するための会計。'],
          formula: '管理会計の目的 ＝ 経営者の計画・統制・意思決定を助けること'
        },
        {
          title: 'たこ焼き屋チェーンで見る',
          paras: ['たこ焼き屋は5店舗に増えた。財務会計では、年に1回、5店まとめた財務諸表（売上 $500,000 など）を株主と銀行に出す。', '管理会計では、店ごとの毎月の売上、1舟あたりの原価、来月の予算と実績の比較、「6店目を出すべきか」の見込みを作る。店長や社長が、次に何をするか決めるための数字になる。']
        },
        {
          svg: `<svg viewBox="0 0 440 296" role="img" aria-label="同じ会計データが財務会計と管理会計の2つに使われる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">同じデータ、2つの使い道</text><rect x="120" y="46" width="200" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="74" text-anchor="middle" font-size="15" fill="var(--ink)">会計システムのデータ</text><line x1="180" y1="90" x2="116" y2="128" stroke="var(--edge)" stroke-width="1.5"/><line x1="260" y1="90" x2="324" y2="128" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="128" width="192" height="156" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="228" y="128" width="192" height="156" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="156" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">財務会計</text><text x="116" y="176" text-anchor="middle" font-size="12.5" fill="var(--quiet)">financial accounting</text><text x="116" y="206" text-anchor="middle" fill="var(--ink)">社外の株主・銀行へ</text><text x="116" y="230" text-anchor="middle" fill="var(--ink)">法律と IFRS に従う</text><text x="116" y="254" text-anchor="middle" fill="var(--ink)">過去1年をまとめて</text><text x="324" y="156" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">管理会計</text><text x="324" y="176" text-anchor="middle" font-size="12.5" fill="var(--quiet)">management accounting</text><text x="324" y="206" text-anchor="middle" fill="var(--ink)">社内の経営者へ</text><text x="324" y="230" text-anchor="middle" fill="var(--ink)">形式は自由</text><text x="324" y="254" text-anchor="middle" fill="var(--ink)">過去も未来も細かく</text></svg>`,
          caption: '元のデータは同じ。誰に、何のために出すかがちがう。'
        },
        {
          title: '7つのちがい（試験に出る）',
          table: { caption: '財務会計と管理会計', head: ['観点', '財務会計', '管理会計'], rows: [['誰のため', '社外（株主・銀行など）', '社内の経営者'], ['法律の義務', 'あり（会社は作る義務）', 'なし'], ['ルール・形式', '会計基準（IFRS）と決まった形', '自由。役に立つ形'], ['時間の向き', '過去の実績', '過去と未来（予算・予測）'], ['細かさ', '会社全体をまとめる', '製品・部門・店ごとに細かく'], ['頻度', '年1回（半年ごともある）', '必要なだけ（毎月・毎週）'], ['数字の種類', 'ほぼ金額', '金額以外も（個数・時間・苦情件数）']] }
        },
        {
          title: 'なぜ？ 2つに分かれる理由',
          paras: ['社外の人は、会社に質問できない。だから、どの会社も同じルールで作った、信頼できて比べられる報告が必要になる。これが財務会計に法律と基準がある理由。', '経営者は「今月どうするか」を決める。年1回の大まかな報告では遅すぎるし、店ごとの数字も見えない。少し見積もりが入っても、早くて細かい情報のほうが役に立つ。管理会計には法律の義務がないので、作る価値（便益）が作る手間（コスト）を上回るときに作る。']
        },
        {
          title: '共通点と、原価計算',
          list: ['どちらも、同じ会計システムの記録（売上・仕入・給料など）から作る', '原価計算（cost accounting）は、製品・サービス・活動にいくらかかったかを計算する。管理会計の一部で、K2 の大きな柱になる', '会社だけでなく、病院・学校・慈善団体（charity）など利益を目的としない組織でも、管理会計を使う']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「管理会計も IFRS に従う」は誤り。管理会計に決まったルールや法律の義務はない。「管理会計は未来だけ」も誤り。予算と比べるために過去の実績も使う。「会計の情報＝金額だけ」も誤り。管理会計は個数・時間・不良品数なども使う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['管理会計＝社内の経営者の計画・統制・意思決定を助ける情報', '財務会計＝社外向け、法律と IFRS に従う、過去1年をまとめる', '管理会計は形式自由・過去と未来・細かい・頻繁・金額以外も使う']
        },
        {
          title: '英単語',
          words: [
            ['management accounting', 'マネジメント アカウンティング', '管理会計'],
            ['financial accounting', 'フィナンシャル アカウンティング', '財務会計'],
            ['cost accounting', 'コスト アカウンティング', '原価計算'],
            ['management information', 'マネジメント インフォメーション', '経営者向けの情報（管理情報）'],
            ['internal / external users', 'インターナル / エクスターナル ユーザーズ', '社内の利用者 / 社外の利用者'],
            ['non-financial information', 'ノンフィナンシャル インフォメーション', '金額以外の情報（個数・時間など）'],
            ['statutory requirement', 'スタチュトリー リクワイアメント', '法律上の義務']
          ]
        }
      ],
      quiz: [
        { q: '管理会計の主な目的はどれ？', choices: ['株主と銀行に、法律どおりの財務諸表を出す', '税額を計算して税務署に申告する', '財務諸表が IFRS に合っているか、外部から確かめる', '経営者の計画・統制・意思決定に役立つ情報を出す'], answer: 3, explain: '株主と銀行への財務諸表は財務会計、税の申告は税務、IFRS に合っているかを外から確かめるのは監査（audit）の仕事。管理会計は社内の経営者のための情報を作る。' },
        { q: 'Which of the following statements about management accounting is correct?', choices: ['Management accounts must be prepared in accordance with IFRS', 'Management accounts are a legal requirement for all limited companies', 'Management accounts may include non-financial information and forecasts of the future', 'Management accounts are prepared mainly for shareholders and lenders'], answer: 2, explain: '管理会計には決まったルール（IFRS）も法律の義務もないので、IFRS と legal requirement の文は誤り。株主や貸し手（shareholders and lenders）向けは財務会計。管理会計は個数や時間などの金額以外の情報や、予算・予測も使う。' },
        { q: 'Which of the following are features of financial accounting rather than management accounting?\n(1) Prepared mainly for external users\n(2) Produced weekly for each department\n(3) Required by law for limited companies\n(4) Format decided by the managers who use it', choices: ['(1) and (3) only', '(2) and (4) only', '(1), (2) and (3)', '(1) and (4) only'], answer: 0, explain: '(2) 部門ごとに毎週作るのは、細かく頻繁な管理会計の特徴。(4) 形を利用者が自由に決められるのも管理会計。財務会計は社外向けで、法律の義務がある。' },
        { q: '次のうち、管理会計の情報の例はどれ？', choices: ['株主総会で配る年次の財務諸表', '税務署に出す法人税の申告書', '店舗別の先月の売上と、その予算の比較', '監査人が出す監査報告書'], answer: 2, explain: '店ごとに細かく、予算と比べる情報は、経営者が次の手を考えるためのもの。ほかの3つは社外向けの報告。' },
        { q: '「管理会計は未来の数字（予算・予測）だけを扱う」。正しい？', choices: ['正しい。過去の数字は財務会計の担当', '正しくない。過去の実績も使い、予算と比べたりする', '正しくない。管理会計は過去の数字だけを扱う'], answer: 1, explain: '管理会計は過去と未来の両方を使う。実績を予算と比べる（統制）には、過去の実績が必要になる。' }
      ]
    },
    {
      id: 'M002',
      no: 2,
      title: '経営者の3つの仕事: 計画・統制・意思決定',
      goal: '計画・統制・意思決定のそれぞれの意味と、3つのつながりを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A1(c)'],
      slides: [
        {
          title: '旅行で考える3つの仕事',
          paras: ['3泊の旅行の前に、予算10万円と行き先を決める。これが計画。旅行中は毎晩いくら使ったか確かめ、使いすぎなら次の夕食を安くする。これが統制。', '2日目に雨が降り、「予定どおり海に行くか、美術館にするか」を選ぶ。これが意思決定。会社の経営者も、毎日この3つを回している。']
        },
        {
          title: '3つの仕事の定義',
          list: ['計画（planning）: 目標（objectives）を決め、それを達成する方法を決める。数年先の長期の計画と、1年の予算（budget）のような短期の計画がある', '統制（control）: 実際の結果（actual results）を計画と比べ、ずれ（差異 variance）を見つけ、必要なら手を打つ（corrective action）', '意思決定（decision making）: いくつかの選択肢（alternatives）から1つを選ぶ']
        },
        {
          title: 'たこ焼き屋の1年',
          paras: ['計画: 来年の売上目標を $600,000 にし、2月に新しい店を開く。そのための予算を作る。', '統制: 毎月、店ごとの実績を予算と比べる。3月、A店の材料費が予算より $2,000 多かった。調べると、たこの仕入値が上がっていた。', '意思決定: 「売価を上げる」「仕入先を変える」「たこを小さくする」から、1つを選ぶ。']
        },
        {
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="計画、実行、実績と比べる、手を打つの輪の中心に意思決定がある" font-size="14"><defs><marker id="m2a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--quiet)"/></marker></defs><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">3つの仕事のつながり</text><rect x="150" y="44" width="140" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="72" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">計画する</text><rect x="300" y="132" width="120" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="160" text-anchor="middle" font-size="15" fill="var(--ink)">実行する</text><rect x="150" y="220" width="140" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="248" text-anchor="middle" font-size="15" fill="var(--ink)">実績と比べる</text><rect x="20" y="132" width="120" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="160" text-anchor="middle" font-size="15" fill="var(--ink)">手を打つ</text><rect x="165" y="134" width="110" height="40" rx="20" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="159" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">意思決定</text><line x1="290" y1="78" x2="345" y2="128" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m2a)"/><line x1="350" y1="176" x2="295" y2="226" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m2a)"/><line x1="150" y1="234" x2="95" y2="182" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m2a)"/><line x1="90" y1="132" x2="145" y2="82" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m2a)"/><text x="220" y="290" text-anchor="middle" fill="var(--ink)">統制（control）＝ 比べる ＋ 手を打つ</text></svg>`,
          caption: 'どの段階でも「どれを選ぶか」を決めるので、意思決定は真ん中にある。'
        },
        {
          title: '統制の流れ',
          numbered: ['計画（予算や目標）を決める', '実行して、実績を記録する', '実績を計画と比べ、差異を出す', '差異の原因を調べる', '手を打つ: やり方を直す。計画そのものが非現実的なら、計画を見直す'],
          after: '比べた結果を次の行動や計画に戻すことを、フィードバック（feedback）という。予算の部で詳しく学ぶ。'
        },
        {
          title: '意思決定の手順',
          numbered: ['目的をはっきりさせる（何を達成したいか）', '選択肢を挙げる', '情報を集め、選択肢ごとに評価する（原価・収益・リスク）', '1つを選んで実行する', '結果を見直す（次の計画と統制につなげる）'],
          after: '計画を立てることも、統制で手を打つことも、選ぶ場面を含む。だから意思決定は計画と統制の両方の中にある。'
        },
        {
          title: 'なぜ？ 3つで1セットの理由',
          paras: ['計画がないと、実績を比べる基準がない。「$2,000 多い」と言えるのは、予算があるから。統制がないと、計画は作りっぱなしで終わる。', '管理会計は3つそれぞれに情報を出す。計画には予算と予測、統制には実績と差異の報告、意思決定には選択肢ごとの原価と収益の見込み。K2 の第7部〜第10部は、この順で学ぶ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '予算を作るのは計画。予算と実績を比べて手を打つのが統制。比べただけで手を打たなければ、統制は終わっていない。また、差異があればいつも現場が悪いとは限らない。計画が非現実的なら計画を直すのも正しい統制。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['計画＝目標と、それを達成する方法を決める', '統制＝実績を計画と比べ、差異を見つけて手を打つ', '意思決定＝選択肢から1つを選ぶ。計画と統制のどちらにも含まれる']
        },
        {
          title: '英単語',
          words: [
            ['planning', 'プランニング', '計画'],
            ['control', 'コントロール', '統制（実績と計画を比べて手を打つ）'],
            ['decision making', 'ディシジョン メイキング', '意思決定'],
            ['objective', 'オブジェクティブ', '目標'],
            ['budget', 'バジェット', '予算'],
            ['variance', 'ヴァリアンス', '差異（実績と計画のずれ）'],
            ['corrective action', 'コレクティブ アクション', '是正措置（手を打つこと）'],
            ['alternatives', 'オルタナティブズ', '選択肢']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes the control process?', choices: ['Setting the long-term objectives of the organisation', 'Comparing actual results with plans and taking corrective action where necessary', 'Choosing between alternative courses of action', 'Preparing the annual financial statements for shareholders'], answer: 1, explain: '長期の目標を決める（setting objectives）のは計画、選択肢から選ぶ（choosing between alternatives）のは意思決定、株主向けの財務諸表は財務会計。統制は「比べる」と「手を打つ」の両方を含む。' },
        { q: '「来年の売上目標を決め、それを達成するための予算を作る」は、3つの仕事のどれ？', choices: ['計画', '統制', '財務報告'], answer: 0, explain: '目標と、達成する方法を決めるのは計画。予算と実績を比べるのは、その後の統制。' },
        { q: 'A manager compares this month\'s actual labour cost of $12,400 with the budgeted cost of $11,000. She finds that time is being wasted and arranges extra training for the workers. Which managerial process does this illustrate?', choices: ['Planning', 'Control', 'Financial reporting', 'Data collection'], answer: 1, explain: '実績 $12,400 と予算 $11,000 を比べて差異 $1,400 を見つけ、原因に手を打っている。これが統制。予算を作る段階ではないので計画ではない。' },
        { q: '意思決定の手順で、最初にすることは？', choices: ['いちばん安い選択肢を選ぶ', '実行して結果を見直す', '予算と実績を比べる', '目的（何を達成したいか）をはっきりさせる'], answer: 3, explain: '目的が決まらないと、選択肢を評価する基準がない。結果の見直しは最後。予算との比較は統制の手順。' },
        { q: '実績が予算から大きくずれた。原因を調べると、予算そのものが非現実的だった。統制として正しい対応は？', choices: ['予算は変えず、現場の担当者に予算どおりにするよう命じる', '原因が分かったので何もしない', '次からは現実的な予算に見直す', '財務諸表を作り直す'], answer: 2, explain: '手を打つ方向は2つ。やり方を直すか、計画を直すか。計画が非現実的なら、計画を見直すのが正しい統制。' }
      ]
    },
    {
      id: 'M003',
      no: 3,
      title: '戦略・戦術・業務: 計画の3つのレベルと必要な情報',
      goal: '戦略・戦術・業務の計画のちがいを説明し、それぞれに必要な情報の特徴を選べるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:A1(d)'],
      slides: [
        {
          title: '家族の計画にも3つの高さがある',
          paras: ['「10年後に家を買う。どの町に住むか」は、家族全体の長い方向を決める話。「今年は毎月5万円貯める。そのために保険を見直す」は、目標に向けたお金の使い方の話。', '「今週の食費は1万5千円。特売日に買う」は、毎日の作業の話。上ほど長く大まかで、下ほど短く細かい。会社の計画も同じ3つのレベルに分かれる。']
        },
        {
          title: '3つのレベル',
          list: ['戦略的計画（strategic planning）: 組織全体の長期の目標と方向を決める。経営トップ（取締役会など）が行う。数年先まで。例: 海外に進出する、新しい事業を始める', '戦術的計画（tactical planning）: 戦略を実現するため、人・物・お金をどう効率よく使うか決める。部門の管理者が行う。1年前後。例: 来年の部門予算、価格、人員の数', '業務的計画（operational planning）: 日々の作業を決める。現場の責任者が行う。日・週単位。例: 今週のシフト、今日の生産の順番']
        },
        {
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="戦略、戦術、業務の3段のピラミッド" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">上ほど長く、下ほど細かい</text><rect x="130" y="44" width="180" height="62" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="70" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">戦略（strategic）</text><text x="220" y="94" text-anchor="middle" fill="var(--ink)">経営トップ・数年先</text><rect x="85" y="114" width="270" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="140" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">戦術（tactical）</text><text x="220" y="164" text-anchor="middle" fill="var(--ink)">部門の管理者・1年前後</text><rect x="40" y="184" width="360" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="210" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">業務（operational）</text><text x="220" y="234" text-anchor="middle" fill="var(--ink)">現場の責任者・毎日〜毎週</text><text x="220" y="276" text-anchor="middle" fill="var(--ink)">下の段は上の段の計画を実現するためにある</text></svg>`,
          caption: '人数は下ほど多く、1つの計画が扱う範囲は上ほど広い。'
        },
        {
          title: 'たこ焼き屋チェーンの例',
          table: { caption: 'どのレベルの計画？', head: ['決めること', 'レベル'], rows: [['3年以内に冷凍たこ焼きでスーパーに進出する', '戦略'], ['来年の各店の予算と、店員の人数を決める', '戦術'], ['来年のたこ焼きの売価を決める', '戦術'], ['土曜のシフトに店員を1人増やす', '業務'], ['明日の材料を発注する', '業務']] }
        },
        {
          title: 'レベルごとの情報の特徴',
          table: { caption: '両端の比較（戦術はその中間）', head: ['特徴', '戦略', '業務'], rows: [['範囲', '組織全体', '1つの作業・係'], ['出所', '社外が多い（＋社内）', 'ほぼ社内'], ['細かさ', '大まか・要約', '細かい'], ['時間の向き', '未来（予測）', '今と過去'], ['頻度', '必要なときに不定期', '毎日・毎週と定期的'], ['正確さ', '不確か・見積もり', '正確'], ['形', '数字以外（定性的）も多い', 'ほぼ数字（定量的）']] }
        },
        {
          title: '戦術の情報と、3つの例',
          paras: ['戦術の情報は中間。主に社内で一部は社外、部門ごとに要約し、毎月など定期的に出す。過去の実績と予算の両方を使い、主に数字（定量的）で表す。'],
          list: ['戦略: 市場の大きさの予測、競合の動き、景気、新事業の長期の利益見込み', '戦術: 部門の予算と実績の差異報告、製品別の利益、店ごとの人件費', '業務: 今日の生産量、期日を過ぎた売掛金の得意先別一覧、従業員の出勤表']
        },
        {
          title: 'なぜ？ レベルで情報が変わる理由',
          paras: ['戦略は、遠い未来と社外の世界（市場・競合・景気）を相手にする。そもそも正確には分からないので、予測で大まかになる。それでも方向を決めるには役に立つ。', '業務は「今日だれに督促するか」を決める。正確で細かい今の事実がないと動けない。社長に毎日の出勤表を渡しても多すぎるし、現場に5年後の市場予測を渡しても使えない。決める範囲と期間に合った情報が、よい情報になる。']
        },
        {
          title: '例題: レベルを見分ける',
          example: {
            problem: '次の3つは、戦略・戦術・業務のどれ？ (1) 来年度の工場部門の予算（人員と残業時間の上限を含む） (2) 競合を買収するかどうか (3) 今日、機械Aで作る製品の順番',
            steps: ['手がかり1: 範囲は組織全体か、部門か、1つの作業か', '手がかり2: 期間は数年か、1年前後か、日・週か', '(1) 部門の資源の使い方、1年 → 戦術', '(2) 会社全体の方向、長期 → 戦略', '(3) 1つの作業、今日 → 業務'],
            answer: '(1) 戦術 (2) 戦略 (3) 業務'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'レベルは金額の大きさではなく、範囲（組織全体・部門・作業）と期間で決まる。また「細かく正確な情報ほどよい」とは限らない。戦略には大まかな予測で足りる。戦略の情報は社内だけでなく、社外の情報が多いことも試験でよく問われる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['戦略＝組織全体・長期・経営トップ。情報は社外が多く、予測で大まか', '戦術＝戦略を実現する資源の使い方・1年前後・部門の管理者。情報は部門ごとの要約', '業務＝日々の作業・現場の責任者。情報は社内で細かく正確、毎日・毎週']
        },
        {
          title: '英単語',
          words: [
            ['strategic planning', 'ストラテジック プランニング', '戦略的計画（長期・全体）'],
            ['tactical planning', 'タクティカル プランニング', '戦術的計画（中期・資源の使い方）'],
            ['operational planning', 'オペレーショナル プランニング', '業務的計画（日々の作業）'],
            ['senior management', 'シニア マネジメント', '経営トップ'],
            ['internal / external sources', 'インターナル / エクスターナル ソーシズ', '社内 / 社外の情報源'],
            ['ad hoc', 'アド ホック', '必要なときに、不定期に'],
            ['quantitative / qualitative', 'クオンティタティブ / クオリタティブ', '数字で表す（定量的）/ 数字で表さない（定性的）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a characteristic of information used for strategic planning?', choices: ['It is detailed and produced daily', 'It is derived mainly from internal sources', 'It is concerned with the long term and is often obtained from external sources', 'It is precise and relates only to the current period'], answer: 2, explain: '細かく毎日出る（detailed, daily）情報や、正確で今の期間だけの（precise, current period）情報は業務レベル。戦略の情報は社外が多いので、主に社内（mainly internal）も誤り。' },
        { q: 'A supervisor prepares next week\'s staff rota for a factory production line. At which level of planning is this decision made?', choices: ['Strategic', 'Tactical', 'Operational'], answer: 2, explain: '現場の責任者が、1つのラインの来週の作業を決めている。範囲が狭く期間が短いので業務レベル。' },
        { q: 'Which of the following is an example of tactical information?', choices: ['A forecast of the size of the market over the next ten years', 'A monthly report comparing actual and budgeted costs for each department', 'A list of the jobs to be done on machine A today', 'Information about a competitor\'s plans to enter a new country'], answer: 1, explain: '部門ごとに予算と実績を比べる月次の報告は、戦術の情報（主に社内・部門ごとの要約・定期的）。10年の市場予測と競合の進出計画は戦略、今日の機械Aの作業一覧は業務の情報。' },
        { q: '業務レベル（operational）の情報の特徴として正しいものは？', choices: ['大まかで、必要なときに不定期に出る', '細かく、正確で、毎日・毎週など頻繁に出る', '主に社外の情報で、未来の予測が中心', '組織全体の数年先を扱う'], answer: 1, explain: '大まか・不定期、社外・未来の予測、組織全体の数年先は、どれも戦略レベルの情報の特徴。業務は社内の今の事実を細かく使う。' },
        { q: 'Which of the following would be most useful to a credit controller planning today\'s work?', choices: ['A five-year forecast of growth in the market', 'A list of overdue customer balances, analysed by customer', 'A summary of annual profit by division', 'Annual reports published by competitors'], answer: 1, explain: '今日の督促に使うのは、得意先別の期日超過の一覧（業務の情報）。市場予測と競合の報告書は戦略、部門別の年間利益は戦術・戦略向け。' },
        { q: '戦略の情報が「不確かで大まか」になりやすいのはなぜ？', choices: ['経営トップは細かい数字を読まないから', '法律で大まかにするよう決まっているから', '管理会計は正確さを気にしないから', '遠い未来と社外の状況を扱うので、正確には分からないから'], answer: 3, explain: '未来の市場や競合は予測するしかない。大まかでも方向を決めるには役に立つ。管理会計に法律の決まりはなく、業務の情報ではむしろ正確さが大事になる。' }
      ]
    }
  ],
  cards: [
    { id: 'M001-1', lesson: 'M001', q: '管理会計（management accounting）の目的は？', a: '社内の経営者の計画・統制・意思決定に役立つ情報を出すこと' },
    { id: 'M001-2', lesson: 'M001', q: '財務会計（financial accounting）は誰のため？どんなルール？', a: '社外（株主・銀行など）のため。法律と会計基準（IFRS）に従う' },
    { id: 'M001-3', lesson: 'M001', q: '管理会計に法律の義務や決まった形式はある？', a: 'ない。便益が作るコストを上回るときに、役に立つ形で作る' },
    { id: 'M001-4', lesson: 'M001', q: '管理会計の情報の「時間の向き」と「頻度」は？', a: '過去の実績と未来の予算・予測の両方。必要なだけ頻繁に（毎月・毎週）' },
    { id: 'M001-5', lesson: 'M001', q: '管理会計は金額以外の情報も使う？', a: '使う。個数・時間・不良品数・苦情件数など（non-financial information）' },
    { id: 'M001-6', lesson: 'M001', q: '原価計算（cost accounting）とは？', a: '製品・サービス・活動の原価を計算すること。管理会計の一部' },
    { id: 'M002-1', lesson: 'M002', q: '計画（planning）とは？', a: '目標を決め、それを達成する方法を決めること（長期の計画・1年の予算）' },
    { id: 'M002-2', lesson: 'M002', q: '統制（control）とは？', a: '実績を計画と比べ、差異（variance）を見つけ、必要なら手を打つこと' },
    { id: 'M002-3', lesson: 'M002', q: '意思決定（decision making）とは？どこに含まれる？', a: '選択肢から1つを選ぶこと。計画と統制の両方の中にある' },
    { id: 'M002-4', lesson: 'M002', q: '統制で「手を打つ」2つの方向は？', a: 'やり方を直す／計画そのものが非現実的なら計画を見直す' },
    { id: 'M002-5', lesson: 'M002', q: 'なぜ計画がないと統制できない？', a: '実績と比べる基準（予算・目標）がないから' },
    { id: 'M002-6', lesson: 'M002', q: '意思決定の手順の最初と最後は？', a: '最初: 目的をはっきりさせる。最後: 結果を見直す' },
    { id: 'M003-1', lesson: 'M003', q: '戦略的計画（strategic planning）とは？', a: '組織全体の長期の目標と方向を決める。経営トップが行う' },
    { id: 'M003-2', lesson: 'M003', q: '戦術的計画（tactical planning）とは？', a: '戦略を実現するため資源の使い方を決める。部門の管理者、1年前後' },
    { id: 'M003-3', lesson: 'M003', q: '業務的計画（operational planning）とは？', a: '日々の作業を決める。現場の責任者、日・週単位' },
    { id: 'M003-4', lesson: 'M003', q: '戦略の情報の特徴は？', a: '社外が多い・未来の予測・大まか・不定期・不確か・定性的も多い' },
    { id: 'M003-5', lesson: 'M003', q: '業務の情報の特徴は？', a: '社内・細かい・正確・毎日など頻繁・今と過去・ほぼ数字' },
    { id: 'M003-6', lesson: 'M003', q: '計画のレベルは何で見分ける？', a: '範囲（組織全体・部門・作業）と期間。金額の大きさではない' }
  ]
});
