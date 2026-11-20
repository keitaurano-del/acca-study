(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 27,
  part: 17,
  partTitle: '会社の財務諸表',
  lessons: [
    {
      id: 'L133',
      no: 133,
      title: '後発事象の定義',
      goal: '後発事象（events after the reporting period）がいつからいつまでの出来事かを、IAS 10 の定義どおりに言えるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['G4(a)'],
      slides: [
        {
          title: '健康診断の結果は後から届く',
          paras: ['3月31日に健康診断を受けた。血液検査の結果が届いたのは4月10日。', '結果が届いたのは4月でも、教えてくれるのは「3月31日の体の状態」。一方、4月5日に転んで骨折したのは、3月31日の体とは関係のない新しい出来事。', '会社の財務諸表でも、これとそっくりなことが起きる。']
        },
        {
          title: '財務諸表はすぐには完成しない',
          paras: ['Tako Co の決算日（reporting date）は 20X5年12月31日。でも財務諸表は、その日に完成するわけではない。', '数字を集めて、監査を受けて、取締役会（board of directors）が「これで発行してよい」と承認するのは 20X6年3月15日。', 'この2か月半の間にも、会社ではいろいろなことが起きる。これを後発事象（events after the reporting period）という。']
        },
        {
          title: '後発事象の期間',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="後発事象は決算日から承認日までの出来事" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">後発事象は「決算日〜承認日」の出来事</text><text x="20" y="62" fill="var(--quiet)">財務諸表を作っている間に起きたこと</text><text x="65" y="118" text-anchor="middle" fill="var(--quiet)">当期の取引</text><rect x="110" y="80" width="220" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="108" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">後発事象</text><text x="220" y="132" text-anchor="middle" fill="var(--ink)">良いことも悪いことも</text><text x="375" y="118" text-anchor="middle" fill="var(--quiet)">対象外</text><path d="M20 170L420 170" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M110 160L110 180M330 160L330 180" stroke="var(--ink)" stroke-width="2" fill="none"/><text x="110" y="202" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">決算日</text><text x="110" y="222" text-anchor="middle" fill="var(--ink)">12月31日</text><text x="330" y="202" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">承認日</text><text x="330" y="222" text-anchor="middle" fill="var(--ink)">翌年3月15日</text><text x="20" y="254" fill="var(--ink)">承認日＝取締役会が財務諸表の発行を承認した日</text><text x="20" y="276" font-size="12.5" fill="var(--quiet)">date the financial statements are authorised for issue</text></svg>`,
          caption: '決算日より前は当期の取引として普通に記録する。承認日より後の出来事は、この財務諸表では扱わない（翌年の財務諸表で扱う）。'
        },
        {
          title: 'IAS 10 の定義',
          paras: ['後発事象のルールは IAS 10（Events after the Reporting Period）にある。定義を日本語にするとこうなる。'],
          formula: '決算日から発行の承認日までに起きた、有利・不利の出来事',
          after: 'Events after the reporting period are those events, favourable and unfavourable, that occur between the end of the reporting period and the date when the financial statements are authorised for issue.'
        },
        {
          title: '定義の3つのポイント',
          list: ['始まり: 決算日（the end of the reporting period）の後', '終わり: 財務諸表の発行が承認された日（authorised for issue）。株主総会の日や、実際に公表した日ではない', '中身: 良いこと（favourable）も悪いこと（unfavourable）も両方入る'],
          after: '会社では、ふつう取締役会が承認する。承認日と、誰が承認したかは注記で開示する。'
        },
        {
          title: '後発事象は2種類',
          list: ['修正後発事象（adjusting events）: 決算日にすでにあった状態の証拠。健康診断の結果と同じ。財務諸表の数字を直す', '非修正後発事象（non-adjusting events）: 決算日の後に生じた状態。骨折と同じ。数字は直さず、重要なら注記で知らせる'],
          after: '試験の英語: adjusting は "provide evidence of conditions that existed at the end of the reporting period"、non-adjusting は "indicative of conditions that arose after the reporting period"。分け方は次のレッスンで練習する。'
        },
        {
          title: 'なぜ？ 後発事象のルールがある理由',
          paras: ['財務諸表は「決算日の写真」。でも作るのに何か月もかかる。', 'その間に届いた情報が「決算日の本当の姿」を教えてくれるなら、使えば写真がより正確になる。', '一方、決算日の後に起きたことを写真に描き足すと、別の日の写真になってしまう。だから「いつの状態か」で扱いを分ける。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「後発事象＝悪いニュース」ではない。大きな注文が入った、のような良いニュースも入る。また、期間の終わりは株主総会の日ではなく、財務諸表の発行が承認された日。決算日の当日（12月31日）に起きたことは後発事象ではなく、当期の出来事。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['後発事象＝決算日から発行の承認日までに起きた出来事（良いことも悪いことも）', '期間の終わりは「財務諸表の発行が承認された日」', '決算日にあった状態の証拠なら修正、決算日の後に生じた状態なら非修正']
        },
        {
          title: '英単語',
          words: [
            ['events after the reporting period', '', '後発事象'],
            ['end of the reporting period', '', '決算日（reporting date とも）'],
            ['authorised for issue', 'オーソライズド・フォー・イシュー', '発行が承認された'],
            ['favourable / unfavourable', 'フェイバラブル', '有利な / 不利な'],
            ['adjusting event', 'アジャスティング・イベント', '修正後発事象'],
            ['non-adjusting event', '', '非修正後発事象'],
            ['IAS 10', '', '後発事象の基準']
          ]
        }
      ],
      quiz: [
        { q: 'Tako Co の決算日は 20X5年12月31日、財務諸表の発行の承認は 20X6年3月15日。後発事象になるのはどれ？', choices: ['20X5年12月20日の倉庫の火事', '20X6年2月10日の倉庫の火事', '20X6年4月1日の倉庫の火事', '20X5年6月30日に始まった裁判'], answer: 1, explain: '後発事象は決算日の後から承認日まで。12月20日と6月30日は当期の出来事。4月1日は承認日の後なので、この財務諸表の対象外。' },
        { q: 'According to IAS 10, events after the reporting period are events that occur between:', choices: ['The end of the reporting period and the date the financial statements are authorised for issue', 'The start and the end of the reporting period', 'The end of the reporting period and the date of the annual general meeting', 'The end of the reporting period and the date the tax return is submitted'], answer: 0, explain: '終わりは「発行が承認された日」。株主総会（annual general meeting）の日と混同しやすいので注意。' },
        { q: 'Which of the following statements about events after the reporting period is TRUE?', choices: ['They include only unfavourable events', 'They include both favourable and unfavourable events', 'They always require the figures in the financial statements to be changed', 'They include events after the financial statements are authorised for issue'], answer: 1, explain: '定義に favourable and unfavourable とある。数字を直すのは修正後発事象だけ。承認日の後の出来事は入らない。' },
        { q: '3月31日の健康診断の結果が4月10日に届いた。会計でいうとどちら？', choices: ['決算日にすでにあった状態の証拠（修正後発事象）', '決算日の後に生じた状態（非修正後発事象）'], answer: 0, explain: '届いたのは後でも、分かるのは「3月31日の体の状態」。決算日にあった状態の証拠なので修正後発事象にあたる。' },
        { q: 'An event after the reporting period which provides evidence of conditions that existed at the end of the reporting period is:', choices: ['An adjusting event', 'A non-adjusting event', 'Not an event after the reporting period', 'A contingent liability'], answer: 0, explain: '決算日にすでにあった状態（conditions that existed at the end of the reporting period）の証拠なら修正後発事象。決算日の後に生じた状態（conditions that arose after the reporting period）なら非修正。' },
        { q: '後発事象の期間が「発行の承認日」で終わる理由として正しいのは？', choices: ['承認した後は財務諸表が確定して発行され、利用者に渡るから', '株主総会は必ず承認日より前に開かれるから', '承認日の後に起きた出来事は会社に影響しないから', '承認日を過ぎると税金の計算が終わるから'], answer: 0, explain: '承認日で中身が確定する。その後の出来事は翌年の財務諸表で扱う。会社に影響しないわけではない。' }
      ]
    },
    {
      id: 'L134',
      no: 134,
      title: '修正後発事象と非修正後発事象を分ける',
      goal: '後発事象を修正（adjusting）と非修正（non-adjusting）に分け、修正するときの金額を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G4(b)'],
      slides: [
        {
          title: 'アパートの退去で考える',
          paras: ['3月31日にアパートを退去した。4月に大家さんから連絡が2つ来た。'],
          list: ['「壁に大きな傷があったので、修理代3万円を払ってください」→ 傷は退去日にもうあった。払うのは自分', '「4月10日の地震で壁が割れました」→ 退去した後の出来事。自分には関係ない'],
          after: '連絡が来たのは同じ4月でも、「その状態はいつからあったか」で答えが変わる。'
        },
        {
          title: '分ける質問は1つだけ',
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="その状態が決算日にあったかで修正と非修正に分ける" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">分ける質問は1つだけ</text><rect x="20" y="50" width="400" height="66" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">その状態は決算日にもうあった？</text><text x="220" y="102" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Did the condition exist at the reporting date?</text><path d="M115 116L115 148M325 116L325 148" stroke="var(--edge)" stroke-width="1.5" fill="none"/><text x="125" y="138" fill="var(--ink)">はい</text><text x="335" y="138" fill="var(--ink)">いいえ</text><rect x="20" y="148" width="190" height="152" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="176" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">修正後発事象</text><text x="115" y="196" text-anchor="middle" font-size="12.5" fill="var(--quiet)">adjusting event</text><text x="115" y="228" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">数字を直す</text><text x="115" y="256" text-anchor="middle" fill="var(--ink)">例: 得意先の倒産</text><text x="115" y="280" text-anchor="middle" fill="var(--ink)">例: 在庫の安売り</text><rect x="230" y="148" width="190" height="152" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="176" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">非修正後発事象</text><text x="325" y="196" text-anchor="middle" font-size="12.5" fill="var(--quiet)">non-adjusting event</text><text x="325" y="228" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">数字は直さない</text><text x="325" y="256" text-anchor="middle" fill="var(--ink)">重要なら注記</text><text x="325" y="280" text-anchor="middle" fill="var(--ink)">例: 火事、配当の宣言</text></svg>`,
          caption: '「いつ分かったか」ではなく、「その状態がいつからあったか」で考える。'
        },
        {
          title: '修正後発事象の例',
          paras: ['決算日にあった状態を、後から教えてくれる出来事。'],
          list: ['決算日に裁判中だった件の判決が出た（決算日に払う義務があったと分かった）', '決算日に売掛金があった得意先が倒産した（決算日にもう払えない状態だった）', '決算日の在庫を、原価より安く売った（決算日の正味実現可能価額が低かった証拠）', '決算日の前に買った資産の値段や、売った資産の代金が後で決まった', '決算日の前の不正や誤りが見つかった']
        },
        {
          title: '非修正後発事象の例',
          paras: ['決算日の後に新しく生じた状態。'],
          list: ['決算日の後の火事・洪水で、工場や在庫が壊れた', '決算日の後に、持っている投資（株など）の値段が下がった', '決算日の後に配当を宣言した（declared）', '決算日の後に株式を発行した、大きな会社や資産を買った、事業をやめる・大きく組み替えると発表した', '決算日の後に税率や為替レートが大きく変わった', '決算日の後に起きたことが原因で、新しく裁判を起こされた']
        },
        {
          title: '例題1: 在庫を安く売った',
          example: {
            problem: 'Tako Co の決算日は 20X5年12月31日。期末の在庫に、原価 $8,000 の冷凍たこ焼きがある。20X6年1月、包装の欠陥（12月からあった）のため $5,000 でしか売れず、販売にかかった費用は $500。在庫はいくらで載せる？',
            steps: ['欠陥は決算日にもうあった。1月の販売は、その証拠 → 修正後発事象', '正味実現可能価額（NRV）＝ 売値 $5,000 − 販売費用 $500 ＝ $4,500', '在庫は原価 $8,000 と NRV $4,500 の低い方 → $4,500', '評価損 ＝ $8,000 − $4,500 ＝ $3,500。20X5年の売上原価が増え、利益が $3,500 減る'],
            answer: '在庫は $4,500。20X5年の利益は $3,500 減る'
          }
        },
        {
          title: '例題2: 裁判の判決が出た',
          example: {
            problem: '決算日に Tako Co は客から訴えられていて、引当金（provision）を $20,000 計上していた。財務諸表の承認前の 20X6年2月、判決で $26,000 払うことに決まった。どう直す？',
            steps: ['訴えられた原因は決算日の前。判決は「決算日に義務があった」ことと、その金額を確かめただけ → 修正後発事象', '引当金を $26,000 に直す。増やす額 ＝ $26,000 − $20,000 ＝ $6,000', '仕訳: Dr 費用 $6,000 / Cr Provision $6,000。20X5年の利益が $6,000 減る'],
            answer: '引当金は $26,000。利益は $6,000 減る'
          }
        },
        {
          title: '例題3: 2つを分ける',
          example: {
            problem: '承認前に次のことが起きた。修正か非修正か。20X5年の利益への影響は？ (1) 20X6年2月、決算日に $6,000 の売掛金があった得意先 Ika Co が倒産し、まったく回収できない (2) 20X6年1月20日、倉庫の火事で原価 $12,000 の在庫が焼けた',
            steps: ['(1) 決算日に Ika Co はすでに払えない状態だった、と分かった → 修正。貸倒れ（irrecoverable debt）$6,000。利益 −$6,000', '(2) 決算日に在庫は無事だった。火事は決算日の後 → 非修正。利益は変わらない。重要なら注記する', '合計: 20X5年の利益は $6,000 減る'],
            answer: '(1) 修正で −$6,000、(2) 非修正で $0。合計 −$6,000'
          }
        },
        {
          title: 'なぜ？ 決算日後の配当は非修正',
          paras: ['配当は、取締役会が「払う」と宣言して初めて、払う義務が生まれる。', '20X6年2月に宣言した配当は、12月31日にはまだ義務がなかった。決算日の状態ではないので、20X5年の負債にはしない。', '同じ「お金が出ていく話」でも、原因が決算日にあったかどうかで扱いが決まる。'],
          note: { kind: 'tip', text: '得意先の倒産は、ふつう「決算日にもう払えない状態だった」証拠なので修正。ただし倒産の原因が決算日の後の出来事（例: 2月の火事）だとはっきりしていれば非修正になる。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「決算日の後に分かったから非修正」は間違い。分かった日ではなく、状態がいつからあったかで決める（12月に盗まれていた在庫に1月に気づいたら修正）。逆に、決算日の後の投資の値下がりや、決算日の後に宣言した配当を、数字に入れてしまうのもよくある間違い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['質問は1つ: その状態は決算日にもうあった？', 'はい → 修正: 数字を直す（得意先の倒産、在庫の安売り、裁判の確定、不正の発見）', 'いいえ → 非修正: 数字は直さない（火事、投資の値下がり、配当の宣言、株式の発行）']
        },
        {
          title: '英単語',
          words: [
            ['adjusting event', '', '修正後発事象'],
            ['non-adjusting event', '', '非修正後発事象'],
            ['condition', 'コンディション', '状態'],
            ['insolvency / liquidation', 'インソルベンシー / リクイデーション', '支払不能 / 清算（会社をたたむこと）'],
            ['dividend declared', 'ディクレアド', '宣言された配当'],
            ['net realisable value (NRV)', '', '正味実現可能価額'],
            ['settlement of a court case', 'セトルメント', '裁判の決着']
          ]
        }
      ],
      quiz: [
        { q: 'At 31 December 20X5 inventory cost $15,000. In January 20X6 it was sold for $11,000, and selling costs were $600. At what amount should this inventory be included in the statement of financial position at 31 December 20X5?', type: 'number', answer: 10400, unit: '$', explain: '決算日後の安売りは、決算日の NRV の証拠なので修正後発事象。NRV ＝ $11,000 − $600 ＝ $10,400。原価 $15,000 より低いので $10,400。$11,000 は販売費用を引き忘れた答え。' },
        { q: 'Which of the following events after the reporting period is an adjusting event?', choices: ['A fire destroyed a warehouse two weeks after the year end', 'A customer who owed money at the year end was declared bankrupt', 'The company issued new ordinary shares after the year end', 'The market value of an investment fell after the year end'], answer: 1, explain: '得意先の倒産は、決算日にもう払えない状態だった証拠なので修正。火事・株式の発行・決算日後の値下がりは、どれも決算日の後に生じたことなので非修正。' },
        { q: 'Which of the following is a non-adjusting event?', choices: ['Inventory held at the year end was sold below cost after the year end', 'A court case open at the year end was settled for more than the provision', 'A fraud was discovered which showed that the financial statements were incorrect', 'The directors declared an ordinary dividend after the year end'], answer: 3, explain: '配当は宣言して初めて義務になる。決算日には義務がなかったので非修正。ほかの3つは、決算日にあった状態を教えてくれるので修正。' },
        { q: '決算日に引当金 $20,000 を計上していた裁判で、承認前に $26,000 払う判決が出た。20X5年の利益への影響は？', choices: ['利益が $6,000 減る', '利益が $26,000 減る', '影響なし（注記だけ）', '利益が $6,000 増える'], answer: 0, explain: '修正後発事象。引当金をすでにある $20,000 から $26,000 に増やすので、追加の費用は差額の $6,000。$26,000 全額ではない。' },
        { q: '20X5年12月20日に倉庫の在庫 $3,000 が盗まれていた。気づいたのは 20X6年1月8日（承認日の前）。どう扱う？', choices: ['修正: 20X5年の在庫を $3,000 減らす', '非修正: 注記だけ', '気づいたのが決算日の後なので、20X6年の損失にする', '後発事象ではないので何もしない'], answer: 0, explain: '盗まれたのは決算日の前。決算日にその在庫はもうなかった。気づいた日ではなく、状態がいつからあったかで決めるので修正。' },
        { q: 'A customer owing $6,000 at 31 December 20X5 went into liquidation in February 20X6, before the financial statements were authorised for issue. The liquidator expects to pay 30% of the debt. What amount should be written off as irrecoverable in the financial statements for the year ended 31 December 20X5?', type: 'number', answer: 4200, unit: '$', explain: '修正後発事象。回収できるのは $6,000 × 30% ＝ $1,800。回収できない $6,000 − $1,800 ＝ $4,200 を貸倒れにする。$1,800 は回収できる方を答えてしまった間違い。' }
      ]
    },
    {
      id: 'L135',
      no: 135,
      title: '後発事象の報告と注記',
      goal: '修正・非修正の後発事象を財務諸表でどう報告するかを説明し、注記を書き、利益への影響を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['G4(c)', 'G3(b)iii'],
      slides: [
        {
          title: '家計簿を家族に見せる前に',
          paras: ['3月末で家計簿を締めて、家族に見せるのは4月10日。その間に2つのことがあった。'],
          list: ['4月2日: 3月に使ったカードの請求が、思っていたより5,000円多いと分かった → 3月の家計簿の数字を直す', '4月5日: 車をぶつけて、修理代が10万円かかる → 3月の家計簿は直さない。でも大きな話なので、見せるときに「実は4月に…」と伝える'],
          after: '会社の後発事象も、この2つの扱いになる。'
        },
        {
          title: '2つの扱いを比べる',
          table: {
            caption: '修正後発事象と非修正後発事象の報告のしかた',
            head: ['項目', '修正後発事象', '非修正後発事象'],
            rows: [
              ['数字', '直す（金額を認識・修正する）', '直さない'],
              ['注記', '関係する注記も新しい情報で直す', '重要なら注記で開示する'],
              ['例', '得意先の倒産、在庫の安売り、裁判の確定', '火事、配当の宣言、株式の発行']
            ]
          }
        },
        {
          title: 'なぜ？ 直すものと、メモで知らせるもの',
          paras: ['財務諸表は決算日の写真。修正後発事象は、写真に写っていたのにピンぼけだった部分を、後から届いた情報でくっきりさせるだけ。', '非修正後発事象は写真の後の出来事。描き足すと「決算日の姿」がうそになる。', 'でも、知らないと株主や銀行が判断を誤るほど大きいなら、メモ（注記）で知らせる。']
        },
        {
          title: '非修正後発事象の注記に書くこと',
          list: ['出来事の内容（the nature of the event）', '財務的な影響の見積り（an estimate of its financial effect）。見積れないときは「見積れない」と書く'],
          after: '書くのは重要（material）なものだけ。また、後発事象があってもなくても、財務諸表の発行が承認された日と、承認した人（ふつうは取締役会）を開示する。利用者が「いつまでの出来事が反映されているか」を知るため。'
        },
        {
          title: '例題1: 注記を書く',
          example: {
            problem: 'Tako Co の決算日は 20X5年12月31日、取締役会の承認は 20X6年3月15日。20X6年1月20日に倉庫が火事になり、原価 $12,000 の在庫が焼けた。保険で $4,000 戻る見込み。金額は重要。どう扱い、注記に何を書く？',
            steps: ['火事は1月20日。決算日に在庫は無事だった → 決算日の後に生じた状態 → 非修正後発事象', '財務諸表の数字は直さない。12月31日の在庫は $12,000 を含めたまま', '重要なので注記する。内容: 1月20日の倉庫の火事で在庫が焼けた', '影響の見積り: $12,000 − 保険 $4,000 ＝ 損失 $8,000'],
            answer: '注記の例: On 20 January 20X6 a fire at the warehouse destroyed inventory costing $12,000. The company expects to recover $4,000 from its insurers, so the estimated loss is $8,000. No adjustment has been made in these financial statements.'
          }
        },
        {
          title: '決算日後に宣言した配当',
          paras: ['20X6年2月15日、取締役会が20X5年度の配当として1株 $0.10 を宣言した。株数は100,000株なので $10,000。', '12月31日には、まだ誰も払うと決めていない。払う義務がなかったので、20X5年の負債にはしない。20X5年の財務諸表では注記で開示するだけ。', '記帳するのは宣言した 20X6年。そのとき持分変動計算書（SOCE）で利益剰余金から引く。'],
          formula: '決算日後に宣言した配当 → 負債にしない・注記で開示'
        },
        {
          title: '例外: 会社をたたむと決めたら',
          paras: ['20X6年2月に、取締役会が「会社を清算する（たたむ）」と決めた。または、そうするしかなくなった。', 'これは決算日の後の出来事だが、注記だけでは済まない。財務諸表を継続企業（going concern）の前提で作ってはいけない。', '継続企業の前提は「これからも事業が続く」ことが土台。その土台が崩れたので、財務諸表の作り方そのものが変わる。']
        },
        {
          title: '例題2: 利益への影響を計算する',
          example: {
            problem: 'Tako Co の修正前の利益は $50,000。承認前に次のことが起きた。(1) 決算日の在庫（原価 $3,000）を1月に $2,200 で売った（販売費用なし）(2) 2月に工場が火事で、機械 $9,000 が壊れた (3) 決算日に裁判中で引当金 $7,000。1月に $9,000 払う判決が出た (4) 2月に配当 $10,000 を宣言した。修正後の利益は？',
            steps: ['(1) 決算日の在庫の値打ちの証拠 → 修正。$3,000 − $2,200 ＝ $800 の評価損。利益 −$800', '(2) 決算日の後の火事 → 非修正。利益は変わらない（重要なら注記）', '(3) 決算日にあった義務の金額が確定 → 修正。引当金を $2,000 増やす。利益 −$2,000', '(4) 決算日に払う義務はない → 非修正。利益は変わらない（注記）', '$50,000 − $800 − $2,000 ＝ $47,200'],
            answer: '修正後の利益は $47,200'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「非修正なら何もしない」は間違い。重要なら注記が必要。決算日後に宣言した配当を流動負債にするのも間違い（決算日に義務がない）。決算日後の火事の損失を引当金にするのも間違い（決算日には義務も損失もなかった）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['修正 → 金額を直す。関係する注記も新しい情報で直す', '非修正 → 金額は直さない。重要なら「内容」と「影響の見積り（できなければその旨）」を注記', '決算日後に宣言した配当は負債にしない。清算を決めたら継続企業の前提で作らない']
        },
        {
          title: '英単語',
          words: [
            ['disclosure note', 'ディスクロージャー・ノート', '注記'],
            ['nature of the event', 'ネイチャー', '出来事の内容'],
            ['estimate of its financial effect', 'エスティメット', '財務的な影響の見積り'],
            ['material', 'マテリアル', '重要な（利用者の判断を変えるほど）'],
            ['going concern', 'ゴーイング・コンサーン', '継続企業'],
            ['liquidate / cease trading', 'リクイデイト', '清算する / 営業をやめる'],
            ['board of directors', '', '取締役会']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following correctly describes the treatment of a material non-adjusting event after the reporting period?', choices: ['Adjust the amounts in the financial statements', 'Disclose the nature of the event and an estimate of its financial effect', 'Ignore it, because it happened after the year end', 'Recognise a provision for its full amount'], answer: 1, explain: '非修正なので金額は直さない。でも重要なので無視はできず、内容と影響の見積りを注記する。決算日に義務がないので引当金にもならない。' },
        { q: 'On 15 February 20X6 the directors of Tako Co declared a final dividend of $10,000 for the year ended 31 December 20X5. How should this be treated in the financial statements for the year ended 31 December 20X5?', choices: ['As a current liability of $10,000', 'Deducted from retained earnings in the statement of changes in equity', 'Disclosed in a note only', 'As an expense in the statement of profit or loss'], answer: 2, explain: '決算日には払う義務がなかったので、負債にも SOCE の控除にもしない。注記だけ。SOCE で利益剰余金から引くのは、宣言した 20X6年の財務諸表。配当は費用ではない。' },
        { q: 'The draft profit of Tako Co for the year ended 31 December 20X5 is $80,000. Before the financial statements were authorised for issue: (1) inventory which cost $5,000 was sold for $3,500, with selling costs of $200; (2) a flood destroyed inventory which cost $6,000; (3) a court case, provided for at $10,000 at the year end, was settled for $8,000. What is the revised profit?', type: 'number', answer: 80300, unit: '$', explain: '(1) 修正: NRV ＝ $3,500 − $200 ＝ $3,300、評価損 $1,700。(2) 非修正: 影響なし。(3) 修正: 引当金が $2,000 多すぎたので戻す（利益 ＋$2,000）。$80,000 − $1,700 ＋ $2,000 ＝ $80,300。洪水を引いて $74,300 にするのは、非修正を数字に入れた間違い。' },
        { q: '20X6年2月、Tako Co の取締役会は会社を清算すると決めた（決算日は 20X5年12月31日、承認前）。どうする？', choices: ['継続企業の前提で作り、注記で知らせるだけ', '継続企業の前提では財務諸表を作らない', '決算日の後の出来事なので何もしない', '20X6年の財務諸表で直す'], answer: 1, explain: '後発事象の例外。決算日の後でも、清算を決めた（またはそうするしかない）なら、継続企業の前提が崩れるので、その前提で作ってはいけない。' },
        { q: 'どの会社も財務諸表で開示する「承認」の情報はどれ？', choices: ['発行が承認された日と、誰が承認したか', '発行が承認された日だけ（誰かは不要）', '後発事象がなければ何も開示しない', '株主総会の日と出席者の数'], answer: 0, explain: '利用者が「いつまでの出来事が反映されているか」を知るため、承認日と承認した人（ふつうは取締役会）を開示する。後発事象がなくても開示する。' },
        { q: '1月20日の火事で原価 $12,000 の在庫が焼け、保険で $4,000 戻る見込み。注記に書く財務的な影響の見積りは？', choices: ['$12,000', '$8,000', '$16,000', '$4,000'], answer: 1, explain: '損失の見積りは $12,000 − $4,000 ＝ $8,000。$16,000 は保険を足してしまった間違い。数字は直さず、注記に書くだけ。' }
      ]
    },
    {
      id: 'L136',
      no: 136,
      title: '会社の総合演習（Section B 形式）',
      goal: '試算表と期末の追加情報から、会社の損益及びその他の包括利益計算書と財政状態計算書を Section B の形式で作れるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['G1(b)', 'G2(b)'],
      slides: [
        {
          title: '材料・下ごしらえ・盛り付け',
          paras: ['料理は、材料をそろえ、下ごしらえをして、盛り付ける。財務諸表も同じ。材料＝試算表、下ごしらえ＝期末の調整、盛り付け＝SPLOCI と SFP。', '試験の Section B では、これが15点の問題で出る。「売上原価はいくら？」のような小問に分かれている。'],
          numbered: ['追加情報を1つずつ読み、どの2か所が動くか書き出す', '売上原価・管理費などの集計表（workings）を作る', 'SPLOCI を上から作る', '利益を利益剰余金に足し、SFP を作って左右の一致を確かめる']
        },
        {
          title: '試算表（材料）',
          table: {
            caption: 'Tako Co 試算表（20X5年12月31日）',
            head: ['勘定', 'Dr $', 'Cr $'],
            rows: [
              ['Revenue', '', '400,000'],
              ['Purchases', '210,000', ''],
              ['Inventory at 1 January 20X5', '30,000', ''],
              ['Distribution costs', '40,000', ''],
              ['Administrative expenses', '52,000', ''],
              ['Loan note interest paid', '3,000', ''],
              ['Income tax（前期の過大計上の残り）', '', '1,000'],
              ['Dividend paid', '8,000', ''],
              ['Buildings at cost', '200,000', ''],
              ['Buildings: accumulated depreciation', '', '40,000'],
              ['Plant at cost', '80,000', ''],
              ['Plant: accumulated depreciation', '', '32,000'],
              ['Trade receivables', '45,000', ''],
              ['Allowance for receivables', '', '1,500'],
              ['Cash at bank', '55,500', ''],
              ['Trade payables', '', '28,000'],
              ['10% loan notes', '', '60,000'],
              ['Ordinary shares of $1', '', '100,000'],
              ['Share premium', '', '20,000'],
              ['Retained earnings at 1 January 20X5', '', '41,000']
            ],
            total: ['合計', '723,500', '723,500']
          }
        },
        {
          title: '追加情報①',
          list: ['(1) 期末の在庫は原価 $36,000。うち原価 $4,000 の品は12月から包装に欠陥があり、20X6年1月に $2,500 で売れた（販売費用なし）', '(2) 減価償却: 建物は取得原価の4%（定額法、管理費へ）。機械は25%の定率法（売上原価へ）', '(3) 減価償却の後、20X5年12月31日に建物を $190,000 に再評価した', '(4) 20X6年2月、決算日に $3,000 の売掛金があった得意先が倒産し、全額回収できない。貸倒引当金は残りの売掛金の4%にする（どちらも管理費へ）']
        },
        {
          title: '追加情報②',
          list: ['(5) 管理費には、20X5年7月1日に払った1年分の保険料 $2,400 が入っている', '(6) 10% loan notes は1年中あった。利息は半年分の $3,000 しか払っていない', '(7) 今年の法人税の見積りは $15,000', '(8) 20X6年2月10日の火事で、帳簿価額 $5,000 の機械が壊れた。また2月20日に、取締役会が配当 $5,000 を宣言した'],
          after: '財務諸表の発行の承認は 20X6年3月15日。'
        },
        {
          title: '例題1: 売上原価',
          example: {
            problem: 'Tako Co の売上原価（cost of sales）を求める。',
            steps: ['(1) 欠陥は決算日にもうあった → 修正後発事象。NRV $2,500 が原価 $4,000 より低い', '期末在庫 ＝ $36,000 − $4,000 ＋ $2,500 ＝ $34,500', '(2) 機械の減価償却 ＝ ($80,000 − $32,000) × 25% ＝ $12,000', '売上原価 ＝ 期首 $30,000 ＋ 仕入 $210,000 − 期末 $34,500 ＋ 減価償却 $12,000'],
            answer: '売上原価は $217,500'
          }
        },
        {
          title: '例題2: 管理費と再評価',
          example: {
            problem: 'Tako Co の管理費（administrative expenses）と、建物の再評価の利得を求める。',
            steps: ['(2) 建物の減価償却 ＝ $200,000 × 4% ＝ $8,000', '(5) 保険は7月〜翌6月の分。20X6年1月〜6月の6か月分 $1,200 は前払い → 管理費から引く', '(4) 貸倒れ $3,000（修正後発事象）。引当金 ＝ ($45,000 − $3,000) × 4% ＝ $1,680。増やす額 ＝ $1,680 − $1,500 ＝ $180', '管理費 ＝ $52,000 − $1,200 ＋ $8,000 ＋ $3,000 ＋ $180 ＝ $61,980', '(3) 建物の帳簿価額 ＝ $200,000 − $40,000 − $8,000 ＝ $152,000。$190,000 との差 $38,000 が再評価の利得（その他の包括利益）'],
            answer: '管理費は $61,980、再評価の利得は $38,000'
          }
        },
        {
          title: '例題3: 財務費用と法人税',
          example: {
            problem: 'Tako Co の財務費用（finance costs）、法人税費用（income tax expense）、未払法人税（tax payable）を求める。',
            steps: ['(6) 利息 ＝ $60,000 × 10% ＝ $6,000。払ったのは $3,000 → 未払い $3,000 を足す。財務費用は $6,000', '試算表の法人税 $1,000 は貸方 ＝ 前期の見積りが多すぎた（過大計上）', '(7) 法人税費用 ＝ 今年の見積り $15,000 − 過大計上 $1,000 ＝ $14,000', 'SFP の未払法人税は、今年の見積りの $15,000 だけ'],
            answer: '財務費用 $6,000、法人税費用 $14,000、未払法人税 $15,000'
          }
        },
        {
          title: '盛り付け①: SPLOCI',
          table: {
            caption: 'Tako Co 損益及びその他の包括利益計算書（20X5年12月31日に終わる年度）',
            head: ['項目', '$'],
            rows: [
              ['Revenue', '400,000'],
              ['Cost of sales', '(217,500)'],
              ['Gross profit', '182,500'],
              ['Distribution costs', '(40,000)'],
              ['Administrative expenses', '(61,980)'],
              ['Profit from operations', '80,520'],
              ['Finance costs', '(6,000)'],
              ['Profit before tax', '74,520'],
              ['Income tax expense', '(14,000)'],
              ['Profit for the year', '60,520'],
              ['Other comprehensive income: gain on revaluation', '38,000']
            ],
            total: ['Total comprehensive income for the year', '98,520']
          }
        },
        {
          title: '盛り付け②: SFP',
          table: {
            caption: 'Tako Co 財政状態計算書（20X5年12月31日）',
            head: ['項目', '$', '$'],
            rows: [
              ['Property, plant and equipment', '', '226,000'],
              ['Inventories', '34,500', ''],
              ['Trade and other receivables', '41,520', ''],
              ['Cash and cash equivalents', '55,500', ''],
              ['流動資産 計', '', '131,520'],
              ['Total assets', '', '357,520'],
              ['Share capital', '100,000', ''],
              ['Share premium', '20,000', ''],
              ['Revaluation surplus', '38,000', ''],
              ['Retained earnings', '93,520', ''],
              ['資本 計', '', '251,520'],
              ['10% loan notes（非流動負債）', '', '60,000'],
              ['Trade and other payables', '31,000', ''],
              ['Tax payable', '15,000', ''],
              ['流動負債 計', '', '46,000']
            ],
            total: ['Total equity and liabilities', '', '357,520']
          },
          paras: ['PPE ＝ 建物は再評価額 $190,000（再評価で累計額は消える）＋ 機械 $80,000 − 累計額 ($32,000 ＋ $12,000) ＝ $226,000。売掛金等 ＝ $45,000 − $3,000 − $1,680 ＋ 前払 $1,200 ＝ $41,520。買掛金等 ＝ $28,000 ＋ 未払利息 $3,000。利益剰余金 ＝ $41,000 ＋ $60,520 − 配当 $8,000 ＝ $93,520。']
        },
        {
          title: 'なぜ？ (8) は数字に入れない',
          paras: ['2月の火事は決算日の後に生じた状態。2月に宣言した配当は、決算日に払う義務がなかった。どちらも非修正後発事象なので数字には入れず、重要なら注記で開示する。', '一方、20X5年中に払った配当 $8,000 は費用ではない。オーナーへのもうけの分配なので、持分変動計算書（SOCE）で利益剰余金から引く。'],
          note: { kind: 'warn', text: 'よくある間違い: 法人税費用を $15,000 や $16,000 にする（過大計上の $1,000 は引く）。払った配当を費用に入れる。再評価の利得 $38,000 を利益剰余金に入れる（正しくは再評価剰余金）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['追加情報は1つずつ「どの2か所が動くか」を書いてから集計する', '法人税費用 ＝ 今年の見積り ＋ 前期の過少計上（− 過大計上）。SFP の未払法人税は今年の見積りだけ', '利益剰余金 ＝ 期首 ＋ 当期利益 − 支払配当。再評価の利得は OCI と再評価剰余金へ']
        },
        {
          title: '英単語',
          words: [
            ['multi-task question (MTQ)', '', 'Section B の15点問題'],
            ['workings', 'ワーキングス', '計算の下書き（集計表）'],
            ['profit from operations', '', '営業利益'],
            ['finance costs', 'ファイナンス・コスト', '財務費用'],
            ['income tax expense', '', '法人税費用'],
            ['tax payable', '', '未払法人税'],
            ['total comprehensive income', '', '包括利益合計']
          ]
        }
      ],
      quiz: [
        { q: 'Opening inventory was $20,000 and purchases were $150,000. Closing inventory at cost was $25,000, but items costing $3,000 were sold after the year end for $1,800, with no selling costs. Plant depreciation of $7,000 is charged to cost of sales. What is cost of sales?', type: 'number', answer: 153200, unit: '$', explain: '期末在庫 ＝ $25,000 − $3,000 ＋ $1,800 ＝ $23,800（修正後発事象）。売上原価 ＝ $20,000 ＋ $150,000 − $23,800 ＋ $7,000 ＝ $153,200。在庫を直さないと $152,000 になる。' },
        { q: 'The trial balance shows a debit balance of $1,500 on the income tax account, which is an under-provision for the previous year. The estimated tax for the current year is $22,000. What is the income tax expense in the statement of profit or loss?', type: 'number', answer: 23500, unit: '$', explain: '借方残高は前期の過少計上（払いが見積りより多かった）。今年の費用に足す: $22,000 ＋ $1,500 ＝ $23,500。SFP の未払法人税は $22,000。引いて $20,500 にするのは過大計上と取り違えた間違い。' },
        { q: 'At the year end, buildings were revalued upwards. Where is the gain on revaluation reported?', choices: ['In profit for the year', 'In other comprehensive income, and in the revaluation surplus in equity', 'In retained earnings only', 'As revenue'], answer: 1, explain: '再評価の利得は、売って得たもうけではないので当期利益には入れない。SPLOCI のその他の包括利益（OCI）に載せ、SFP では再評価剰余金に積む。' },
        { q: '20X5年中に払った配当 $8,000 は、財務諸表のどこに載る？', choices: ['損益計算書の管理費', '持分変動計算書（SOCE）で利益剰余金から引く', '財政状態計算書の流動負債', '損益計算書の財務費用'], answer: 1, explain: '配当は費用ではなく、オーナーへのもうけの分配。SOCE で利益剰余金から引く。もう払ったので負債でもない。' },
        { q: 'Retained earnings at 1 January were $25,000. Profit for the year was $48,000, a revaluation gain of $12,000 was recognised, and dividends of $10,000 were paid. What are retained earnings at 31 December?', type: 'number', answer: 63000, unit: '$', explain: '$25,000 ＋ $48,000 − $10,000 ＝ $63,000。再評価の利得 $12,000 は再評価剰余金に入るので、利益剰余金には足さない（足すと $75,000 の間違い）。' },
        { q: '8% loan notes of $50,000 were in issue throughout the year. Interest paid during the year was $2,000. What is the finance cost in the statement of profit or loss?', type: 'number', answer: 4000, unit: '$', explain: '1年分の利息 ＝ $50,000 × 8% ＝ $4,000。払ったのは $2,000 なので、未払い $2,000 を流動負債に載せ、財務費用は $4,000。払った額だけの $2,000 は間違い。' }
      ]
    }
  ],
  cards: [
    { id: 'L133-1', lesson: 'L133', q: '後発事象（events after the reporting period）の定義は？', a: '決算日から財務諸表の発行が承認される日までに起きた、有利・不利の出来事' },
    { id: 'L133-2', lesson: 'L133', q: '後発事象の期間の終わりは？', a: '財務諸表の発行が承認された日（authorised for issue）。株主総会の日ではない' },
    { id: 'L133-3', lesson: 'L133', q: '後発事象に良いニュースは入る？', a: '入る。favourable も unfavourable も両方' },
    { id: 'L133-4', lesson: 'L133', q: '修正後発事象とは？', a: '決算日にすでにあった状態の証拠になる出来事。数字を直す' },
    { id: 'L133-5', lesson: 'L133', q: '非修正後発事象とは？', a: '決算日の後に生じた状態を示す出来事。数字は直さず、重要なら注記' },
    { id: 'L133-6', lesson: 'L133', q: 'なぜ後発事象で数字を直すことがある？', a: '財務諸表は決算日の写真。後から届いた情報で、その写真をより正確にできるから' },
    { id: 'L133-7', lesson: 'L133', q: '"conditions that existed at the end of the reporting period" の証拠になる出来事は？', a: '修正後発事象（adjusting event）。arose after なら非修正' },
    { id: 'L134-1', lesson: 'L134', q: '修正か非修正かを決める質問は？', a: 'その状態は決算日にもうあったか（分かった日ではない）' },
    { id: 'L134-2', lesson: 'L134', q: '決算日に売掛金がある得意先が、決算日後に倒産したら？', a: 'ふつう修正後発事象。貸倒れとして数字を直す' },
    { id: 'L134-3', lesson: 'L134', q: '決算日の在庫を、決算日後に原価より安く売ったら？', a: '修正後発事象。NRV の証拠なので在庫を NRV まで下げる' },
    { id: 'L134-4', lesson: 'L134', q: '決算日後の火事で工場が焼けたら？', a: '非修正後発事象。数字は直さず、重要なら注記' },
    { id: 'L134-5', lesson: 'L134', q: '決算日後に宣言した配当は修正？非修正？', a: '非修正。決算日には払う義務がなかったから' },
    { id: 'L134-6', lesson: 'L134', q: '在庫の原価 $8,000。決算日後に $5,000 で売れ、販売費 $500。評価損は？', a: '$3,500（NRV ＝ $5,000 − $500 ＝ $4,500）' },
    { id: 'L135-1', lesson: 'L135', q: '修正後発事象の報告は？', a: '金額を直す。関係する注記も新しい情報で直す' },
    { id: 'L135-2', lesson: 'L135', q: '非修正後発事象の報告は？', a: '金額は直さない。重要なら注記で開示する' },
    { id: 'L135-3', lesson: 'L135', q: '非修正後発事象の注記に書く2つは？', a: '出来事の内容と、財務的な影響の見積り（できなければその旨）' },
    { id: 'L135-4', lesson: 'L135', q: '決算日後に宣言した配当の扱いは？', a: '負債にしない。注記で開示する' },
    { id: 'L135-5', lesson: 'L135', q: '決算日後に会社の清算を決めたら？', a: '例外。継続企業の前提で財務諸表を作らない' },
    { id: 'L135-6', lesson: 'L135', q: 'どの会社も開示する「承認」の情報は？', a: '財務諸表の発行が承認された日と、承認した人' },
    { id: 'L135-7', lesson: 'L135', q: '修正前利益 $50,000。在庫評価損 $800、引当金の追加 $2,000、決算日後の火事 $9,000。修正後の利益は？', a: '$47,200（火事は非修正なので引かない）' },
    { id: 'L136-1', lesson: 'L136', q: 'Section B の会社の総合問題の解き方は？', a: '動く2か所を書く → 集計表 → SPLOCI → 利益剰余金 → SFP で一致を確認' },
    { id: 'L136-2', lesson: 'L136', q: '法人税費用の計算は？', a: '今年の見積り ＋ 前期の過少計上（− 過大計上）' },
    { id: 'L136-3', lesson: 'L136', q: '試算表の法人税が貸方残高なら、それは何？', a: '前期の過大計上。今年の法人税費用から引く' },
    { id: 'L136-4', lesson: 'L136', q: 'SFP の未払法人税（tax payable）はいくら？', a: '今年の見積りの金額だけ（前期の過大・過少は入れない）' },
    { id: 'L136-5', lesson: 'L136', q: '期中に払った配当はどこに載る？', a: 'SOCE で利益剰余金から引く。費用ではない' },
    { id: 'L136-6', lesson: 'L136', q: '建物の再評価の利得はどこに載る？', a: 'SPLOCI のその他の包括利益（OCI）と、SFP の再評価剰余金' },
    { id: 'L136-7', lesson: 'L136', q: '期末の利益剰余金の式は？', a: '期首 ＋ 当期利益 − 支払配当' }
  ]
});
