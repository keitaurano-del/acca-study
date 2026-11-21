(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 123,
  part: 7,
  partTitle: '予算',
  lessons: [
    {
      id: 'M095',
      no: 95,
      title: 'なぜ予算を作るのか',
      goal: '予算の意味と予測とのちがいを説明し、会社が予算を作る目的を8つ挙げられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C1(a)'],
      slides: [
        {
          title: '家計の1か月予算',
          paras: ['手取り25万円の家庭が、月の初めに「家賃8万、食費5万、貯金3万…」と決める。これが家計の予算。', '決めておくと、使い道を前もって考えられる。家族で同じ目標を共有できる。月末に「食費が1万円多かった」と比べられる。会社の予算も、この3つの働きを大きな規模でする。']
        },
        {
          title: '予算（budget）とは',
          paras: ['予算は、これからの期間に会社が何をするつもりかを、金額や数量で表した計画。英語では a quantified plan of action for a forthcoming period という。', '予算の期間（budget period）はふつう1年。それを月や4週間ごとの統制の期間（control period）に分けて、実績と比べる。'],
          formula: '予算 ＝ これからの期間の計画を、数字で表したもの'
        },
        {
          title: '予算と予測（forecast）はちがう',
          paras: ['予測は「何が起きそうか」の見込み。予算は「何を起こすつもりか」という計画で、目標を含む。', '椅子工房の例: 市場を調べた予測では、来年の需要は11,000脚。でも広告を増やすつもりなので、予算では12,000脚を売る計画にした。予測は、予算を作るための材料になる。']
        },
        {
          title: '予算の8つの目的',
          paras: ['どれも、会社の目標（objectives）を達成するための働き。試験では「予算の目的でないものはどれ？」の形でよく出る。'],
          table: { caption: '会社が予算を作る理由', head: ['目的', 'English', '中身'], rows: [['計画させる', 'planning', '先の問題を前もって考えさせる'], ['調整', 'co-ordination', '部門どうしの計画をそろえる'], ['伝達', 'communication', '目標と計画を全員に知らせる'], ['責任', 'responsibility', '誰がどの数字に責任をもつか決める'], ['統制', 'control', '実績と比べる基準になる'], ['動機づけ', 'motivation', '目標を示してやる気を引き出す'], ['評価', 'evaluation', '管理者の業績を測る物差しになる'], ['権限', 'authorisation', '予算の範囲で使ってよいと認める']] }
        },
        {
          title: '椅子工房で見る「調整」',
          paras: ['営業部は12,000脚売る計画。製造部は10,000脚だけ作る計画。購買部は8,000脚分の木材だけ買う計画。', 'このままだと、売れるのに作れない。作りたくても材料がない。予算を作る途中で数字を突き合わせると、このずれが前もって見つかる。全社で1つの予算にまとめることが、調整（co-ordination）の働き。']
        },
        {
          title: 'なぜ？ 予算が必要になる理由',
          paras: ['会社が大きくなると、全員が社長の頭の中を知ることはできない。数字にした共通の計画がないと、部門ごとにばらばらに動いてしまう。', 'また、基準がないと「よかったか、悪かったか」が言えない。予算は、計画（前もって決める）と統制（後で比べて手を打つ）をつなぐ道具になる。'],
          list: ['病院・学校・慈善団体（charity）など利益を目的としない組織も、予算を作る', 'お金が限られているので、使い道を前もって決めて認める「権限」の働きが特に大きい']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「予算＝予測」ではない。予測は見込み、予算は会社が実現するつもりの計画。「予算は費用を削るためだけのもの」も誤り。計画・調整・伝達・評価など目的は多い。「作ったら終わり」も誤り。期間中ずっと実績と比べる（統制）ために使う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予算＝これからの期間の計画を、金額や数量で表したもの', '予測は「起きそうなこと」、予算は「起こすつもりのこと」', '目的は8つ: 計画・調整・伝達・責任・統制・動機づけ・評価・権限']
        },
        {
          title: '英単語',
          words: [
            ['budget', 'バジェット', '予算（数字で表した計画）'],
            ['forecast', 'フォーキャスト', '予測（起きそうなことの見込み）'],
            ['budget period', 'バジェット ピリオド', '予算の期間（ふつう1年）'],
            ['control period', 'コントロール ピリオド', '統制の期間（月・4週など）'],
            ['co-ordination', 'コーオーディネーション', '調整（部門の計画をそろえる）'],
            ['communication', 'コミュニケーション', '伝達'],
            ['performance evaluation', 'パフォーマンス エバリュエーション', '業績の評価'],
            ['authorisation', 'オーソリゼーション', '権限を与えること（使ってよいと認める）']
          ]
        }
      ],
      quiz: [
        { q: '予算（budget）の説明として正しいのはどれ？', choices: ['過去1年の実績を、決まった形でまとめたもの', '将来に起きそうなことを、計画を入れずに見積もったもの', 'これからの期間の計画を、金額や数量で表したもの', '株主に毎年報告する義務がある書類'], answer: 2, explain: '「過去1年の実績をまとめたもの」は財務諸表、「計画を入れずに見積もったもの」は予測（forecast）の説明。予測は予算の材料だが、予算は会社が実現するつもりの計画を含む。予算は社内のもので、株主への報告義務はない。' },
        { q: 'Which of the following is NOT a purpose of budgeting?', choices: ['To co-ordinate the activities of different departments', 'To communicate targets to managers', 'To provide a basis for evaluating managers\' performance', 'To ensure that the financial statements comply with IFRS'], answer: 3, explain: '調整・伝達・評価は予算の目的。財務諸表が IFRS に合っているかは財務会計と監査の話で、予算（管理会計）の目的ではない。' },
        { q: 'Which of the following statements is/are correct?\n(1) A budget is a quantified plan of action for a future period.\n(2) A forecast and a budget always contain the same figures.', choices: ['(1) only', '(2) only', 'Both (1) and (2)', 'Neither (1) nor (2)'], answer: 0, explain: '(1) は予算の定義そのもの。(2) は誤り。予測は起きそうなことの見込み、予算は目標を含む計画なので、数字がちがうことはよくある（予測 11,000脚、予算 12,000脚など）。' },
        { q: '営業部・製造部・購買部の計画の数字を突き合わせ、食い違いをなくす。予算のどの目的？', choices: ['権限（authorisation）', '評価（evaluation）', '調整（co-ordination）', '動機づけ（motivation）'], answer: 2, explain: '部門どうしの計画をそろえるのは調整。権限は「この範囲で使ってよい」と認めること、評価は後で業績を測ること。' },
        { q: 'A charity\'s budget states that the project manager may spend up to $20,000 on equipment this year without further approval. Which purpose of budgeting does this mainly illustrate?', choices: ['Co-ordination', 'Authorisation', 'Motivation', 'Communication'], answer: 1, explain: '予算の範囲で使ってよいと前もって認めているので、権限（authorisation）。お金が限られた非営利組織では特に大事な働き。' }
      ]
    },
    {
      id: 'M096',
      no: 96,
      title: '計画と統制のサイクル: フィードバックとフィードフォワード',
      goal: '計画と統制のサイクルの7段階を順に言え、フィードバックとフィードフォワードの例を見分けられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C1(b)'],
      slides: [
        {
          title: 'カーナビの2つの働き',
          paras: ['道をまちがえると、カーナビが「ルートを外れました」と言い、元の道に戻す。起きた後に比べて直すので、これはフィードバック。', '出発前に渋滞の予報を見て、別の道を選ぶこともある。起きる前に予測して手を打つので、これはフィードフォワード。会社の予算でも、この2つを使う。']
        },
        {
          title: '計画と統制のサイクル（7段階）',
          numbered: ['目標を決める（identify objectives）', '目標を達成する方法の候補を挙げる（identify potential strategies）', '候補を評価する（evaluate strategies）', '方法を選ぶ（choose alternative courses of action）', '長期の計画を年度の予算にして実行する（implement the long-term plan in the form of the annual budget）', '実績を測り、計画と比べる（measure actual results and compare with the plan）', 'ずれに対応する（respond to divergences from the plan）'],
          after: '1〜5が計画、6〜7が統制。7の結果は、次の計画に戻る。'
        },
        {
          svg: `<svg viewBox="0 0 440 366" role="img" aria-label="計画と統制のサイクル。7のずれへの対応から、実行へ戻るフィードバックと、計画の見直しへ戻る線がある" font-size="14"><defs><marker id="m96a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--quiet)"/></marker></defs><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">計画と統制のサイクル</text><rect x="120" y="44" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="69" text-anchor="middle" font-size="15" fill="var(--ink)">1 目標を決める</text><rect x="120" y="104" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="129" text-anchor="middle" font-size="15" fill="var(--ink)">2〜4 方法を選ぶ</text><rect x="120" y="164" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="189" text-anchor="middle" font-size="15" fill="var(--ink)">5 予算にして実行する</text><rect x="120" y="224" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="249" text-anchor="middle" font-size="15" fill="var(--ink)">6 実績と比べる</text><rect x="120" y="284" width="200" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="309" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">7 ずれに手を打つ</text><line x1="220" y1="84" x2="220" y2="102" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m96a)"/><line x1="220" y1="144" x2="220" y2="162" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m96a)"/><line x1="220" y1="204" x2="220" y2="222" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m96a)"/><line x1="220" y1="264" x2="220" y2="282" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m96a)"/><polyline points="320,304 350,304 350,184 324,184" fill="none" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m96a)"/><text x="358" y="240" fill="var(--ink)">フィード</text><text x="358" y="258" fill="var(--ink)">バック</text><polyline points="120,304 90,304 90,64 116,64" fill="none" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#m96a)"/><text x="20" y="176" fill="var(--ink)">計画を</text><text x="20" y="194" fill="var(--ink)">見直す</text><text x="220" y="352" text-anchor="middle" fill="var(--quiet)">1〜5 は計画、6〜7 は統制</text></svg>`,
          caption: '実行のやり方を直すのがふつうのフィードバック。計画そのものが非現実的なら、点線のように計画を見直す。'
        },
        {
          title: 'フィードバック（feedback）',
          paras: ['実績を予算と比べた結果を管理者に戻し、それをもとに手を打つこと。比べるのは、起きた後（after the event）。', '椅子工房の3月: 材料費の実績 $26,000、予算 $24,000。差異は $2,000 の不利（adverse）。原因を調べると木材の値上がりだったので、4月から仕入先を変えた。'],
          formula: 'フィードバック: 実績 と 予算 を比べる（起きた後）'
        },
        {
          title: 'フィードバックの種類',
          list: ['負のフィードバック（negative feedback）: ずれを小さくして、計画に戻す手を打つ。例: 材料費が予算を超えたので、使い方を見直す', '正のフィードバック（positive feedback）: ずれを保つ、または広げる手を打つ。例: 予算より売れているので、広告を増やしてさらに売る', '一重ループ（single loop）: やり方を直して、実績を計画に合わせる', '二重ループ（double loop）: 計画（予算）そのものを直す']
        },
        {
          title: 'フィードフォワード（feedforward）',
          paras: ['これから起きそうな結果を予測し、目標（予算）と比べる。ずれそうなら、起きる前に手を打つ。', '椅子工房の4月: 現金の予測を作ると、6月末に現金が $15,000 足りなくなると分かった。そこで4月のうちに銀行と当座借越（overdraft）の枠を約束し、機械の購入を7月にずらした。'],
          formula: 'フィードフォワード: 予測 と 目標 を比べる（起きる前）'
        },
        {
          title: '2つを比べる',
          table: { caption: 'フィードバックとフィードフォワード', head: ['観点', 'フィードバック', 'フィードフォワード'], rows: [['比べるもの', '実績 と 予算', '予測 と 目標（予算）'], ['いつ', '起きた後', '起きる前'], ['強み', '事実にもとづく', '先回りして損を防げる'], ['弱み', '手を打つのが遅れる', '予測が外れることがある']] }
        },
        {
          title: 'なぜ？ 両方が必要な理由',
          paras: ['フィードバックだけだと、問題が起きてから気づく。現金が尽きてからでは、借入れの交渉も間に合わない。', 'フィードフォワードだけだと、予測が当たったかどうか分からない。実績で確かめて次の予測と計画を良くするのは、フィードバックの役目。サイクルを回し続けることで、計画と実績の差が小さくなっていく。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「負のフィードバック＝悪い知らせ」ではない。負・正は、ずれを小さくする手か、広げる手かの区別。また「今月の実績を予算と比べる」はフィードバック。フィードフォワードは、まだ起きていない予測を使う。比べただけで手を打たないなら、統制は終わっていない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['サイクル: 目標→方法の候補→評価→選ぶ→予算で実行→実績と比べる→ずれに対応', 'フィードバック＝実績と予算を比べ、起きた後に手を打つ。負は計画に戻す、正はずれを広げる', 'フィードフォワード＝予測と目標を比べ、起きる前に手を打つ（例: 現金不足を予測して借入れを手配）']
        },
        {
          title: '英単語',
          words: [
            ['planning and control cycle', 'プランニング アンド コントロール サイクル', '計画と統制のサイクル'],
            ['feedback', 'フィードバック', '実績を計画と比べた結果を戻すこと'],
            ['feedforward control', 'フィードフォワード コントロール', '予測を使い、起きる前に手を打つ統制'],
            ['negative feedback', 'ネガティブ フィードバック', 'ずれを小さくし計画に戻す手'],
            ['positive feedback', 'ポジティブ フィードバック', 'ずれを保つ・広げる手'],
            ['divergence', 'ダイバージェンス', '（計画からの）ずれ'],
            ['adverse / favourable', 'アドバース / フェイバラブル', '不利な / 有利な（差異）'],
            ['overdraft', 'オーバードラフト', '当座借越']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is an example of feedforward control?', choices: ['Comparing the actual material cost for March with the budget for March', 'Preparing a cash forecast which shows an overdraft in June, and arranging a loan in April', 'Investigating an adverse labour variance at the end of the quarter', 'Rewarding a manager whose department spent less than its budget last year'], answer: 1, explain: 'フィードフォワードは、まだ起きていない予測を目標と比べ、前もって手を打つ。1つ目と3つ目は実績と予算を比べるフィードバック。4つ目は過去の実績で業績を評価している。' },
        { q: 'In the planning and control cycle, which stage comes immediately after "implement the long-term plan in the form of the annual budget"?', choices: ['Identify objectives', 'Respond to divergences from the plan', 'Measure actual results and compare with the plan', 'Evaluate strategies'], answer: 2, explain: '5 予算にして実行 → 6 実績を測り計画と比べる → 7 ずれに対応する。比べる前に、ずれに対応することはできない。目標と戦略の評価はサイクルの前半。' },
        { q: '予算より売上がかなり多かった。そこで広告費を増やして、さらに売上を伸ばすことにした。これはどれ？', choices: ['負のフィードバック', '正のフィードバック', 'フィードフォワード', '主要予算要因'], answer: 1, explain: 'ずれ（予算より多い売上）を広げる方向に手を打っているので、正のフィードバック。ずれを小さくして計画に戻すのが負のフィードバック。実績を見ているので、フィードフォワードではない。' },
        { q: 'Which of the following statements about feedback is/are correct?\n(1) Feedback involves comparing actual results with the budget.\n(2) Feedback allows managers to act before any deviation from the plan has occurred.', choices: ['(1) only', '(2) only', 'Both (1) and (2)', 'Neither (1) nor (2)'], answer: 0, explain: '(1) は正しい。(2) はフィードフォワードの説明。フィードバックは実績が出た後に比べるので、ずれが起きる前には手を打てない。' },
        { q: '毎月大きな不利差異が出るので調べたら、予算そのものが非現実的だった。そこで次の期間の予算を作り直した。これはどれ？', choices: ['一重ループのフィードバック', 'フィードフォワード', '正のフィードバック', '二重ループのフィードバック'], answer: 3, explain: '計画（予算）そのものを直すのは二重ループ。やり方を直して実績を計画に合わせるのが一重ループ。どちらも実績を見た後なのでフィードバック。' }
      ]
    },
    {
      id: 'M097',
      no: 97,
      title: '予算づくりの手順',
      goal: '予算を作る8つの手順を順に言え、予算委員会・予算担当者・予算マニュアルの役割を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C1(c)'],
      slides: [
        {
          title: '家族旅行の計画',
          paras: ['まず「使えるのは30万円」「休みは3日」という制約を確かめる。次に行き先を決め、交通・宿・食事の内訳を作る。', '家族で話し合って調整し、最後に決める。旅行中も、使った額を毎晩見直す。会社の予算づくりも、ほぼ同じ順番で進む。']
        },
        {
          title: '予算を作る人と道具',
          list: ['予算委員会（budget committee）: 各部門の責任者で作る会議。社長などが長になり、予算全体を調整して承認に向けてまとめる', '予算担当者（budget officer）: 委員会の事務局。日程を管理し、各部門の予算をとりまとめる。ふつうは管理会計の担当者', '予算マニュアル（budget manual）: 予算の作り方を書いた手引き。全員が同じルールで作るためのもの']
        },
        {
          title: '予算マニュアルの中身',
          list: ['予算の目的と、予算づくりの方針', '組織図: 誰がどの予算に責任をもつか', '予算委員会のメンバーと役割','主な予算の種類と、そのつながり', '日程表（timetable）: どの予算をいつまでに出すか', '使う書式（forms）と手続き'],
          after: '実績の数字は入らない。予算マニュアルは「作り方」の本で、結果の報告書ではない。'
        },
        {
          title: '予算づくりの8つの手順',
          numbered: ['予算の方針と指針を伝える（予算マニュアル）', '主要予算要因（principal budget factor）を決める', '販売予算を作る（ふつうは販売が制約になる）', '各部門の予算の原案を作る（製造・材料・労務・間接費）', '原案を上司と話し合う（negotiation）', '全体を調整して見直す（co-ordination and review）', '最終承認し、総合予算（master budget）にまとめる', '期間中、実績と比べて見直し続ける（budget review）']
        },
        {
          svg: `<svg viewBox="0 0 440 350" role="img" aria-label="販売予算から製造予算、材料・労務費・製造間接費の予算、現金予算を経て総合予算にまとまる流れ" font-size="14"><defs><marker id="m97a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--quiet)"/></marker></defs><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">予算のつながり（販売が制約のとき）</text><rect x="140" y="44" width="160" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="68" text-anchor="middle" font-size="15" fill="var(--ink)">販売予算</text><line x1="220" y1="82" x2="220" y2="100" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><text x="232" y="96" fill="var(--quiet)">在庫の増減を調整</text><rect x="140" y="102" width="160" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="126" text-anchor="middle" font-size="15" fill="var(--ink)">製造予算</text><line x1="200" y1="140" x2="90" y2="158" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><line x1="220" y1="140" x2="220" y2="158" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><line x1="240" y1="140" x2="350" y2="158" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><rect x="20" y="160" width="128" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="84" y="182" text-anchor="middle" fill="var(--ink)">材料</text><text x="84" y="202" text-anchor="middle" fill="var(--ink)">使用量・購入</text><rect x="156" y="160" width="128" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="192" text-anchor="middle" fill="var(--ink)">労務費</text><rect x="292" y="160" width="128" height="52" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="356" y="192" text-anchor="middle" fill="var(--ink)">製造間接費</text><line x1="90" y1="212" x2="196" y2="230" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><line x1="220" y1="212" x2="220" y2="230" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><line x1="350" y1="212" x2="244" y2="230" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><rect x="140" y="232" width="160" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="256" text-anchor="middle" font-size="15" fill="var(--ink)">現金予算</text><line x1="220" y1="270" x2="220" y2="288" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m97a)"/><rect x="20" y="290" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="317" text-anchor="middle" font-weight="600" fill="var(--ink)">総合予算: 予算損益計算書・予算財政状態計算書</text></svg>`,
          caption: '販売予算から入金が、材料・労務費・間接費の予算から支払いが決まり、現金予算になる。最後に全部をまとめたものが総合予算。'
        },
        {
          title: '椅子工房で流れを見る',
          paras: ['販売予算: 来年12,000脚を売る。製品の在庫は期首500脚、期末は800脚にしたい。', '製造予算: 12,000 ＋ 800 − 500 ＝ 12,300脚を作る。材料の予算: 1脚に木材4kg なので、12,300 × 4 ＝ 49,200kg を使う。ここから購入量・労務費・間接費が決まり、入金と支払いの時期から現金予算ができる。計算のしかたは次のユニットで学ぶ。']
        },
        {
          title: '総合予算（master budget）',
          paras: ['部門ごとの予算を機能別予算（functional budgets）という。販売・製造・材料・労務・間接費など。', 'これらと現金予算（cash budget）をまとめて、予算損益計算書（budgeted statement of profit or loss）と予算財政状態計算書（budgeted statement of financial position）を作る。これが総合予算。現金予算も総合予算に含めて考えることが多い。']
        },
        {
          title: 'なぜ？ この順番になる理由',
          paras: ['何脚売るかが決まらないと、何脚作るか、木材を何kg買うか、何人働くかが決まらない。だから制約になっている要因の予算を最初に作り、ほかはそれに合わせる。', '話し合いと調整を入れるのは、現場の情報を入れて実行できる予算にし、部門どうしの食い違いを消すため。期間中に見直し続けるのは、状況が変わり、予算が実態とずれていくから。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「いつも販売予算が最初」は誤り。最初に作るのは主要予算要因の予算。販売が制約のとき（いちばん多い）だけ販売が最初になる。現金予算は機能別予算の後に作る。入金と支払いの金額が、それらの予算から決まるから。最終承認で終わりではなく、期間中の見直しも手順に入る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['手順: 方針を伝える→主要予算要因→販売→部門の原案→話し合い→調整・見直し→承認→見直し続ける', '予算委員会が全体を調整し、予算担当者が事務局、予算マニュアルが作り方の手引き', '機能別予算 → 現金予算 → 総合予算（予算損益計算書・予算財政状態計算書）']
        },
        {
          title: '英単語',
          words: [
            ['budget committee', 'バジェット コミッティー', '予算委員会'],
            ['budget officer', 'バジェット オフィサー', '予算担当者（委員会の事務局）'],
            ['budget manual', 'バジェット マニュアル', '予算マニュアル（作り方の手引き）'],
            ['functional budget', 'ファンクショナル バジェット', '機能別予算（部門ごとの予算）'],
            ['cash budget', 'キャッシュ バジェット', '現金予算'],
            ['master budget', 'マスター バジェット', '総合予算'],
            ['budget review', 'バジェット レビュー', '予算の見直し'],
            ['negotiation', 'ネゴシエーション', '話し合い（交渉）']
          ]
        }
      ],
      quiz: [
        { q: 'The following are stages in the budgeting process:\n(1) Prepare the sales budget\n(2) Identify the principal budget factor\n(3) Prepare the master budget\n(4) Prepare the functional budgets\nIn which order are they normally carried out?', choices: ['(1), (2), (4), (3)', '(1), (4), (2), (3)', '(2), (1), (4), (3)', '(2), (4), (1), (3)'], answer: 2, explain: '最初に主要予算要因を見つけ、それ（ふつうは販売）の予算を作る。次に製造・材料などの機能別予算、最後に総合予算。販売予算を先にすると、制約を無視した販売計画になるおそれがある。' },
        { q: 'Which of the following would normally be included in a budget manual?\n(1) An organisation chart showing who is responsible for each budget\n(2) A timetable for the preparation of budgets\n(3) The actual results for the budget period\n(4) The forms to be used in preparing budgets', choices: ['(1) and (2) only', '(1), (2) and (4) only', '(2), (3) and (4) only', '(1), (2), (3) and (4)'], answer: 1, explain: '予算マニュアルは予算の作り方の手引きなので、責任の分担・日程・書式は入る。実績（3）は期間が終わってから出る数字で、マニュアルには入らない。' },
        { q: '予算委員会の事務局として日程を管理し、各部門の予算をとりまとめるのは誰？', choices: ['外部の監査人', '株主', '営業部長だけ', '予算担当者（budget officer）'], answer: 3, explain: '予算担当者はふつう管理会計の担当者で、委員会の事務局を務める。監査人と株主は社外の人で、予算づくりには入らない。営業部長は自分の部門の予算を作る側。' },
        { q: '現金予算を、販売や材料などの機能別予算より後に作るのはなぜ？', choices: ['現金予算は財務諸表なので、最後に作る決まりがあるから', '入金と支払いの金額が、機能別予算から決まるから','現金予算はいちばん重要度が低いから', '現金予算は予算委員会が承認しないから'], answer: 1, explain: '売上の回収（入金）や材料の購入・給料（支払い）の金額は、販売・材料・労務の予算から出てくる。だから現金予算はその後になる。重要度が低いわけではない。' },
        { q: 'Which of the following is normally prepared last in the budgeting process?', choices: ['Sales budget', 'Production budget', 'Materials purchases budget', 'Budgeted statement of financial position'], answer: 3, explain: '予算財政状態計算書は総合予算の一部で、ほかのすべての予算（現金予算を含む）の数字を使うので最後になる。販売 → 製造 → 材料購入 の順に作る。' }
      ]
    },
    {
      id: 'M098',
      no: 98,
      title: '主要予算要因（principal budget factor）',
      goal: '主要予算要因の意味と重要性を説明し、数字から主要予算要因と予算の最大数量を求められるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(a)'],
      slides: [
        {
          title: '人気のラーメン屋',
          paras: ['1日に300人が食べに来そうな人気店。でも席は20席で、1日に回せるのは200人まで。', 'スープや麺をいくら用意しても、売れるのは200杯。仕入れもアルバイトの人数も、200人に合わせて決めるのが正しい。計画は、いちばん厳しい限界から決まる。']
        },
        {
          title: '主要予算要因とは',
          paras: ['会社の活動の量を制限する要因を、主要予算要因（principal budget factor）という。key budget factor、limiting budget factor ともいう。', 'いちばん多いのは販売の需要（sales demand）。作れても売れなければ意味がないから。ほかに、機械の時間、熟練した人の労働時間、材料の量、現金、倉庫の広さなどがなる。病院や慈善団体では、使えるお金（補助金や寄付）がなることが多い。'],
          formula: '主要予算要因 ＝ 活動の量を制限している要因'
        },
        {
          example: {
            problem: '椅子工房の来年の需要は12,000脚。1脚に機械2時間・木材4kg・労働1.5時間がかかる。使える量は、機械22,000時間、木材52,000kg、労働21,000時間。主要予算要因と、予算の数量は？',
            steps: ['需要: 12,000脚まで売れる', '機械: 22,000 ÷ 2 ＝ 11,000脚まで作れる', '木材: 52,000 ÷ 4 ＝ 13,000脚まで作れる', '労働: 21,000 ÷ 1.5 ＝ 14,000脚まで作れる', 'いちばん少ないのは機械の11,000脚'],
            answer: '主要予算要因は機械の時間。予算の生産と販売は11,000脚（製品の在庫の増減がないとき）'
          }
        },
        {
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="制約ごとに作れる脚数の棒グラフ。需要12,000、機械11,000、木材13,000、労働14,000で、機械がいちばん短い" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">何脚まで？（制約ごと）</text><text x="20" y="66" fill="var(--ink)">需要</text><rect x="110" y="48" width="188.6" height="26" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="306" y="66" fill="var(--ink)">12,000脚</text><text x="20" y="106" fill="var(--ink)">機械の時間</text><rect x="110" y="88" width="172.9" height="26" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="291" y="106" font-weight="600" fill="var(--ink)">11,000脚</text><text x="20" y="146" fill="var(--ink)">木材</text><rect x="110" y="128" width="204.3" height="26" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="146" fill="var(--ink)">13,000脚</text><text x="20" y="186" fill="var(--ink)">労働の時間</text><rect x="110" y="168" width="220" height="26" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="338" y="186" fill="var(--ink)">14,000脚</text><line x1="282.9" y1="42" x2="282.9" y2="204" stroke="var(--quiet)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="282.9" y="228" text-anchor="middle" fill="var(--ink)">予算は 11,000脚</text></svg>`,
          caption: 'いちばん短い棒が全体を決める。単位のちがう上限（時間・kg）は、作れる脚数にそろえてから比べる。'
        },
        {
          title: '最初に作る予算が変わる',
          list: ['販売の需要が制約: 販売予算を最初に作り、製造などをそれに合わせる（いちばん多い形）', '機械の時間が制約: 機械で作れる量（製造予算）を先に決め、販売予算はそれに合わせて11,000脚にする', '現金が制約: 使えるお金の範囲で、作る量や設備の購入を決める'],
          after: '予算づくりの手順で「主要予算要因を決める」が販売予算より前にあるのは、このため。'
        },
        {
          title: 'なぜ？ 最初に見つける理由',
          paras: ['制約を見落として12,000脚の販売予算を組むと、作れない1,000脚の分まで木材を買い、人を雇い、入金を見込んでしまう。在庫と人件費が無駄になり、現金予算も狂う。', '予算はすべてつながっているので、1か所の無理が全部の予算に広がる。だから最初に主要予算要因を見つけ、そこから組み立てる。']
        },
        {
          title: '制約は変わる',
          paras: ['主要予算要因は毎年同じとは限らない。機械を買い足して機械の時間を26,000時間にすると、13,000脚まで作れる。すると次にきつい需要の12,000脚が、新しい主要予算要因になる。', '外注（subcontracting）や残業で制約をゆるめることもできる。制約があり、製品が複数あるときに、どれを優先して作るかは、意思決定の部で学ぶ（限られた資源の分析）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「主要予算要因はいつも販売」は誤り。いちばん多いだけで、機械・労働・材料・現金のこともある。上限の数字どうし（22,000時間と52,000kg）をそのまま比べるのも誤り。必ず「使える量 ÷ 1単位に要る量」で作れる数にそろえ、いちばん少ないものを選ぶ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['主要予算要因＝活動の量を制限する要因。いちばん多いのは販売の需要', '見つけ方: 制約ごとに「使える量 ÷ 1単位に要る量」を出し、いちばん少ないもの', 'その予算を最初に作り、ほかの予算をすべて合わせる。見落とすと達成できない予算になる']
        },
        {
          title: '英単語',
          words: [
            ['principal budget factor', 'プリンシパル バジェット ファクター', '主要予算要因'],
            ['key budget factor', 'キー バジェット ファクター', '主要予算要因（別の呼び方）'],
            ['limiting factor', 'リミティング ファクター', '制約となる要因'],
            ['sales demand', 'セールス ディマンド', '販売の需要'],
            ['machine hours', 'マシン アワーズ', '機械の時間'],
            ['skilled labour', 'スキルド レイバー', '熟練した労働者'],
            ['subcontracting', 'サブコントラクティング', '外注']
          ]
        }
      ],
      quiz: [
        { q: 'What is the principal budget factor?', choices: ['The budget with the largest total cost', 'The first budget to be approved by the board of directors', 'The factor which limits the activities of an organisation', 'The difference between budgeted profit and actual profit'], answer: 2, explain: '主要予算要因は、活動の量を制限する要因。その予算を最初に作る。金額がいちばん大きい予算や、利益の差とは関係ない。' },
        { q: 'A company can sell 8,000 units of its product next year. Each unit requires 3 kg of material and 0.5 labour hours. Only 21,000 kg of material and 5,000 labour hours are available. What is the maximum number of units that should be included in the production budget?', type: 'number', answer: 7000, unit: '', explain: '需要 8,000個。材料 21,000 ÷ 3 ＝ 7,000個。労働 5,000 ÷ 0.5 ＝ 10,000個。いちばん少ない 7,000個が上限。0.5 を掛けて 2,500 とするのは誤り（1個に0.5時間なので割る）。' },
        { q: 'Using the same data (sales demand 8,000 units; material for 7,000 units; labour hours for 10,000 units), what is the principal budget factor?', choices: ['Sales demand', 'Material', 'Labour hours', 'There is no principal budget factor'], answer: 1, explain: '作れる数がいちばん少ないのは材料（7,000個）なので、材料が主要予算要因。需要は8,000個なので、材料が先に足りなくなる。' },
        { q: '主要予算要因が機械の時間のとき、最初に作る予算は？', choices: ['需要どおりの販売予算', '機械で作れる量に合わせた製造予算', '現金予算', '予算財政状態計算書'], answer: 1, explain: '制約になっている要因の予算を最初に作る。需要どおりの販売予算を先に作ると、作れない分まで売る計画になる。現金予算と予算財政状態計算書は最後のほう。' },
        { q: '機械を買い足したので、機械の時間は制約でなくなった。主要予算要因はどうなる？', choices: ['主要予算要因はなくなる', '機械の時間のまま変わらない', '予算を作る必要がなくなる', '次にきつい制約（例: 需要）が新しい主要予算要因になる'], answer: 3, explain: '活動の量には必ず何かの限界がある。1つの制約がなくなると、次にきつい制約が主要予算要因になる。だから毎年見直す必要がある。' }
      ]
    }
  ],
  cards: [
    { id: 'M095-1', lesson: 'M095', q: '予算（budget）とは？', a: 'これからの期間の計画を、金額や数量で表したもの' },
    { id: 'M095-2', lesson: 'M095', q: '予算と予測（forecast）のちがいは？', a: '予測＝起きそうなことの見込み。予算＝起こすつもりのこと（目標を含む計画）' },
    { id: 'M095-3', lesson: 'M095', q: '予算の8つの目的は？', a: '計画・調整・伝達・責任・統制・動機づけ・評価・権限' },
    { id: 'M095-4', lesson: 'M095', q: 'なぜ調整（co-ordination）が要る？', a: '部門ごとの計画がばらばらだと、売れるのに作れない・材料がないなどの食い違いが起きるから' },
    { id: 'M095-5', lesson: 'M095', q: 'authorisation（権限）とは？', a: '予算の範囲で、使ってよいと前もって認めること' },
    { id: 'M096-1', lesson: 'M096', q: '計画と統制のサイクルの7段階は？', a: '目標→方法の候補→評価→選ぶ→予算で実行→実績と比べる→ずれに対応' },
    { id: 'M096-2', lesson: 'M096', q: 'フィードバック（feedback）とは？', a: '実績を予算と比べた結果を戻し、起きた後に手を打つこと' },
    { id: 'M096-3', lesson: 'M096', q: 'フィードフォワード（feedforward）とは？', a: '将来の予測を目標と比べ、ずれが起きる前に手を打つこと' },
    { id: 'M096-4', lesson: 'M096', q: '負のフィードバックと正のフィードバックのちがいは？', a: '負＝ずれを小さくし計画に戻す手。正＝ずれを保つ・広げる手' },
    { id: 'M096-5', lesson: 'M096', q: '一重ループと二重ループのちがいは？', a: '一重＝やり方を直して計画に合わせる。二重＝計画（予算）そのものを直す' },
    { id: 'M096-6', lesson: 'M096', q: 'フィードフォワードの典型的な例は？', a: '現金予算で将来の現金不足を予測し、前もって借入れを手配する' },
    { id: 'M097-1', lesson: 'M097', q: '予算づくりの8つの手順は？', a: '方針を伝える→主要予算要因→販売→部門の原案→話し合い→調整・見直し→承認→見直し続ける' },
    { id: 'M097-2', lesson: 'M097', q: '予算委員会（budget committee）の役割は？', a: '各部門の責任者で作り、予算全体を調整してまとめる' },
    { id: 'M097-3', lesson: 'M097', q: '予算担当者（budget officer）の役割は？', a: '委員会の事務局。日程を管理し、各部門の予算をとりまとめる' },
    { id: 'M097-4', lesson: 'M097', q: '予算マニュアルに入るものは？', a: '目的と方針、組織と責任、予算の種類とつながり、日程、書式と手続き（実績は入らない）' },
    { id: 'M097-5', lesson: 'M097', q: '総合予算（master budget）とは？', a: '予算損益計算書と予算財政状態計算書（現金予算も含めることが多い）' },
    { id: 'M097-6', lesson: 'M097', q: '現金予算を機能別予算の後に作る理由は？', a: '入金と支払いの金額が、販売・材料・労務などの予算から決まるから' },
    { id: 'M098-1', lesson: 'M098', q: '主要予算要因（principal budget factor）とは？', a: '活動の量を制限する要因。最初に見つけ、その予算から作る' },
    { id: 'M098-2', lesson: 'M098', q: 'いちばん多い主要予算要因は？ ほかの例は？', a: '販売の需要。ほかに機械の時間、熟練労働、材料、現金、倉庫の広さ' },
    { id: 'M098-3', lesson: 'M098', q: '主要予算要因の見つけ方は？', a: '制約ごとに「使える量 ÷ 1単位に要る量」で作れる数を出し、いちばん少ないもの' },
    { id: 'M098-4', lesson: 'M098', q: 'なぜ主要予算要因を最初に見つける？', a: '見落とすと達成できない予算になり、つながったほかの予算もすべて狂うから' },
    { id: 'M098-5', lesson: 'M098', q: '制約が1つなくなったらどうなる？', a: '次にきつい制約が、新しい主要予算要因になる' }
  ]
});
