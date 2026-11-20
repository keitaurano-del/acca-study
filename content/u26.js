(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 26,
  part: 17,
  partTitle: '会社の財務諸表',
  lessons: [
    // ---------------------------------------------------------------- L128
    {
      id: 'L128',
      no: 128,
      title: '法人税費用と前期の過大・過少計上',
      goal: '期末の税金の見積もりと、前年の見積もりとの差（過少・過大計上）を使って、法人税費用と未払法人税を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G2(c)'],
      slides: [
        {
          title: 'フリーランスの税金の取り置き',
          paras: ['フリーランスは、年末に「来年3月に払う税金は30万円くらい」と見積もって、お金を取り置いておく。', '3月に実際の金額が決まると、32万円だったりする。足りない2万円は、その年（3月の年）に追加で払うことになる。', '会社の法人税も同じ形。期末に見積もり、翌年に本当の金額で精算する。']
        },
        {
          title: '会社は自分で税金を払う',
          paras: ['会社は法律上オーナー（株主）とは別の人なので、自分のもうけに対して法人税（income tax）を払う。', '個人事業では、税金はオーナー個人が払う。お店のお金で払っても引出し（drawings）になるだけ。だから個人事業の損益計算書には税金の行がなかった。', '会社の税金は、期末日にはまだ金額が確定していない。そこで期末に見積もって記録する。']
        },
        {
          title: '期末の仕訳',
          paras: ['20X1年の利益に対する税金を $5,000 と見積もった。費用を増やし、まだ払っていないので負債（未払法人税）も増やす。'],
          journal: [
            { side: 'Dr', account: 'Income tax expense（法人税費用）', amount: '5,000' },
            { side: 'Cr', account: 'Tax payable（未払法人税）', amount: '5,000' }
          ],
          after: '翌年、実際に払ったときは Dr Tax payable / Cr Cash。未払法人税は流動負債（current liabilities）に入る。'
        },
        {
          title: '見積もりと実際はずれる',
          svg: `<svg viewBox="0 0 440 324" role="img" aria-label="法人税は期末に見積もり、翌年に払った額との差を翌年の費用で調整する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">税金は「見積もって、翌年に精算」</text><rect x="20" y="52" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="15" font-weight="600" fill="var(--ink)">① 20X1年末: 見積もり $5,000</text><text x="40" y="102" font-size="12.5" fill="var(--quiet)">Dr Income tax expense / Cr Tax payable</text><line x1="220" y1="118" x2="220" y2="134" stroke="var(--edge)" stroke-width="2"/><path d="M214 134L220 144L226 134z" fill="var(--edge)"/><rect x="20" y="148" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="176" font-size="15" font-weight="600" fill="var(--ink)">② 20X2年: 実際に払ったのは $5,400</text><text x="40" y="198" font-size="12.5" fill="var(--quiet)">Dr Tax payable / Cr Cash</text><line x1="220" y1="214" x2="220" y2="230" stroke="var(--edge)" stroke-width="2"/><path d="M214 230L220 240L226 230z" fill="var(--edge)"/><rect x="20" y="244" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="272" font-size="15" font-weight="600" fill="var(--ink)">③ 足りなかった $400 は20X2年の費用</text><text x="40" y="294" font-size="12.5" fill="var(--ink)">under-provision（見積もり不足）</text></svg>`,
          caption: '見積もりが少なすぎたら過少計上（under-provision）、多すぎたら過大計上（over-provision）。差は過去に戻って直さず、精算した年（今年）の費用で調整する。'
        },
        {
          title: '今年の法人税費用の式',
          formula: '法人税費用 ＝ 今年の見積もり ＋ 前年の不足（− 前年の余り）',
          paras: ['SFP の未払法人税は「今年の見積もり」だけ。前年の分は払い終わっているので残らない。'],
          tAccount: { name: 'Tax payable（20X2年）', debit: [['Cash（実際の支払い）', '5,400']], credit: [['Balance b/d（前年の見積もり）', '5,000'], ['Income tax expense', '6,400']], balance: { side: 'debit', label: 'Balance c/d（今年の見積もり）', amount: '6,000' } }
        },
        {
          title: '例題1: 見積もりが足りなかった',
          example: {
            problem: 'Tako Co は20X1年の税金を $5,000 と見積もった。20X2年に実際に払ったのは $5,400。20X2年の利益への税金は $6,000 と見積もった。20X2年の法人税費用と、20X2年末の未払法人税は？',
            steps: ['前年の差: 払った $5,400 − 見積もり $5,000 ＝ $400 の不足（under-provision）', '不足分は今年の費用に足す: $6,000 ＋ $400 ＝ $6,400', '期末の負債は今年の見積もりだけ: $6,000', '仕訳は Dr Income tax expense 6,400 / Cr Tax payable 6,400。支払い後に借方に $400 残っていた勘定が、貸方 $6,000 になる'],
            answer: '法人税費用 $6,400（損益計算書）、未払法人税 $6,000（財政状態計算書）'
          }
        },
        {
          title: '例題2: 試算表に残高があるとき',
          paras: ['試算表の Income tax 勘定に残高が出ていたら、それは前年の差。借方残高＝見積もりより多く払った＝見積もり不足（足す）。貸方残高＝見積もりが余った＝過大（引く）。'],
          example: {
            problem: '20X3年末の試算表に Income tax $700（貸方残高）がある。20X3年の税金の見積もりは $7,500。法人税費用と未払法人税は？',
            steps: ['貸方残高の意味: 前年の負債 $6,000 に対して、払ったのは $5,300 だけ。$700 が余った（over-provision）', '余りは今年の費用から引く: $7,500 − $700 ＝ $6,800', '期末の負債は今年の見積もり: $7,500', '仕訳 Dr Income tax expense 6,800 / Cr Tax payable 6,800 → 勘定は $700 ＋ $6,800 ＝ $7,500 の貸方残高'],
            answer: '法人税費用 $6,800、未払法人税 $7,500'
          }
        },
        {
          title: 'なぜ？ 見積もりで記録して、翌年に調整する理由',
          paras: ['1つ目: 発生主義。税金は「その年のもうけ」から生まれる費用なので、払うのが翌年でも、もうけた年の費用にする。待っていたら決算が出せない。', '2つ目: 見積もりの差は「間違い」ではなく、より良い情報が後から来ただけ。だから前の年の数字は直さず、分かった年（今年）の費用で調整する。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '試算表の Income tax 残高を、そのまま SFP の負債に入れない。それは前年の差なので、損益計算書の法人税費用で調整して消える。SFP に出すのは今年の見積もりだけ。' },
          list: ['借方残高（不足）を引いてしまう → 足すのが正しい', '法人税費用＝今年の見積もり、とだけ書いてしまう → 前年の差を忘れている', '売上税（sales tax）と混同する → 売上税はお客さんから預かるお金で、会社の費用ではない']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期末: Dr Income tax expense / Cr Tax payable で見積もりを記録', '法人税費用＝今年の見積もり ＋ 前年の不足（− 前年の余り）', 'SFP の未払法人税は今年の見積もりだけ']
        },
        {
          title: '英単語',
          words: [
            ['income tax expense', '', '法人税費用（損益計算書）'],
            ['tax payable', '', '未払法人税（流動負債）'],
            ['under-provision', 'アンダー・プロビジョン', '前年の見積もり不足。今年の費用に足す'],
            ['over-provision', 'オーバー・プロビジョン', '前年の見積もり過大。今年の費用から引く'],
            ['estimate', 'エスティメイト', '見積もり'],
            ['prior year', 'プライアー・イヤー', '前年']
          ]
        }
      ],
      quiz: [
        { q: '前年の税金の見積もりは $8,000、実際に払ったのは $8,600。今年の見積もりは $9,000。今年の法人税費用はいくら？', type: 'number', answer: 9600, unit: '$', explain: '前年は $600 足りなかった（under-provision）ので足す。$9,000 ＋ $600 ＝ $9,600。' },
        { q: 'Bean Co estimates its income tax for 20X5 at $12,000. The trial balance at 31 December 20X5 shows a credit balance of $1,500 on the income tax account, relating to the previous year. What is the income tax expense for 20X5?', choices: ['$13,500', '$10,500', '$12,000', '$1,500'], answer: 1, explain: '貸方残高は前年の過大計上（over-provision）。今年の費用から引くので $12,000 − $1,500 ＝ $10,500。$13,500 は借方と貸方を逆に考えて足してしまった答え。' },
        { q: 'Bean Co estimates its income tax for 20X5 at $12,000. The previous year tax was over-provided by $1,500. What is the tax payable in the statement of financial position at 31 December 20X5?', choices: ['$10,500', '$13,500', '$12,000', '$1,500'], answer: 2, explain: '負債に残るのは今年の見積もり $12,000 だけ。前年の差 $1,500 は損益計算書の費用で調整済み。$10,500 は費用と負債を取り違えた答え。' },
        { q: '試算表に Income tax の借方残高 $400 がある。これは何？', choices: ['前年の見積もり不足（under-provision）', '前年の見積もり過大（over-provision）', '今年の税金の未払い', '売上税の預かり'], answer: 0, explain: '前年の負債より多く払ったので、借方に残った。今年の費用に $400 を足す。' },
        { q: 'Which journal records the estimated income tax at the year end?', choices: ['Dr Income tax expense, Cr Tax payable', 'Dr Tax payable, Cr Income tax expense', 'Dr Tax payable, Cr Cash', 'Dr Retained earnings, Cr Tax payable'], answer: 0, explain: '費用（借方）を増やし、まだ払っていない負債（貸方）を増やす。Dr Tax payable / Cr Cash は翌年に払ったときの仕訳。' },
        { q: '個人事業の損益計算書に税金の行がなかった理由は？', choices: ['事業とオーナーは別に扱い、税金はオーナー個人が払うから', '個人事業はもうけに税金がかからないから', '税金は資産になるから', '税金は売上から直接引かれるから'], answer: 0, explain: '個人事業の税金はオーナー個人のもの。お店のお金で払っても引出し（drawings）になる。会社は法律上別の人なので、自分の法人税を費用にする。' }
      ]
    },
    // ---------------------------------------------------------------- L129
    {
      id: 'L129',
      no: 129,
      title: 'SPL 本体で別掲する項目',
      goal: '損益計算書の本体に必ず別の行で出す項目と、出さない項目を見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'fa',
      outcomes: ['G2(d)'],
      slides: [
        {
          title: '家計簿アプリのホーム画面',
          paras: ['家計簿アプリのホーム画面には、収入、家賃、税金など大事な数字だけが大きく出る。細かい明細は、タップした先の画面にある。', '会社の損益計算書も同じ。表の本体（face、フェイス）に出す行と、注記（notes）に回す内訳がある。']
        },
        {
          title: '本体と注記',
          list: ['本体（face of the statement）: 損益計算書そのものに並ぶ行', '注記（notes）: 本体の数字の内訳や説明を、後ろのページにまとめたもの（L132 で学ぶ）'],
          after: 'どの行を本体に出すかは会社の自由ではない。IFRS（今は IFRS 18、以前は IAS 1）が「必ず本体に出す行」を決めている。'
        },
        {
          title: '本体に必ず出す主な行',
          list: ['売上収益（revenue）', '法人税費用（income tax expense）', '関連会社の利益の持分（share of profit or loss of associates。第19部で学ぶ）', 'やめた事業の損益（discontinued operations）を1行にまとめた金額', '当期利益（profit or loss for the year）'],
          after: '段階利益の営業利益（operating profit）と財務・法人税前利益（profit before financing and income taxes）も本体に出す。試験の書式では、財務費用（finance costs、借入の利息）も別の行で出る。'
        },
        {
          title: 'その他の包括利益も本体に',
          paras: ['損益及びその他の包括利益計算書（SPLOCI）では、当期利益の下に、その他の包括利益（OCI）の項目と、包括利益合計（total comprehensive income）を出す。', 'FA の OCI の代表は、土地建物を再評価したときの再評価益（gain on revaluation）。もうけ（当期利益）には入れず、OCI に入れる。']
        },
        {
          title: '重要な項目は別に見せる',
          paras: ['重要（material）な収益や費用は、性質（何か）と金額を別に示す。本体に1行で出すか、注記に書く。'],
          list: ['在庫を正味実現可能価額まで大きく評価減した', '有形固定資産を売って、大きな売却益・売却損が出た', '工場を閉めるリストラの費用', '裁判の和解金、引当金の取り崩し'],
          after: '管理費の中に混ぜて隠すと、利用者が「毎年くり返すもうけ」を読み違えるから。'
        },
        {
          title: '費用の分け方は2通り',
          table: {
            caption: '費用の分け方（どちらも IFRS で認められる）',
            head: ['分け方', '行の例'],
            rows: [
              ['機能別（by function）', '売上原価、販売費（distribution costs）、管理費（administrative expenses）'],
              ['性質別（by nature）', '原材料費、人件費（employee benefits）、減価償却費（depreciation）']
            ]
          },
          after: 'ACCA の問題は機能別がほとんど。機能別の会社は、減価償却費や人件費などの金額を注記で示す。減価償却費は本体の独立した1行にはならず、販売費や管理費に振り分ける。'
        },
        {
          title: 'たこ焼き会社で確かめる',
          paras: ['Tako Co の今年の取引。損益計算書の本体ではどうなる？'],
          list: ['売上 $480,000 → 本体に必ず1行（revenue）', '法人税 $23,000 → 本体に必ず1行（income tax expense）', '店の減価償却 $20,000 → 販売費と管理費に振り分け、金額は注記へ', '株主への配当 $20,000 → 損益計算書には出さない。持分変動計算書（SOCE）へ', '再評価益 $15,000 → OCI の行']
        },
        {
          title: 'なぜ？ 本体に出す行が決まっている理由',
          paras: ['1つ目: 比べやすさ（comparability）。どの会社も売上・税金・当期利益が同じ場所にあれば、投資家はすぐに比べられる。', '2つ目: お金の行き先が分かる。財務費用はお金を貸した人へ、税金は国へ、残った当期利益が株主の取り分。本体を見るだけで、もうけの分け前が読める。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '配当（dividends paid）は費用ではない。もうけを株主に分けただけなので、損益計算書には入れず、持分変動計算書（SOCE）で利益剰余金から引く。' },
          list: ['再評価益を当期利益に入れる → OCI に入れる', '取締役の報酬を配当と同じに扱う → 報酬は働いた対価なので費用（管理費）', '「重要な項目は注記だけ」と覚える → 本体に出してもよい。隠さないことが大事']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['本体に必ず出す: 売上収益・法人税費用・当期利益（＋関連会社の持分・やめた事業）', '重要な収益・費用は、性質と金額を別に示す', '配当は損益計算書に入れない（SOCE へ）']
        },
        {
          title: '英単語',
          words: [
            ['face of the statement', 'フェイス', '計算書の本体'],
            ['separate disclosure', 'セパレート・ディスクロージャー', '別に表示すること（別掲）'],
            ['material', 'マテリアル', '重要な（利用者の判断を変えうる）'],
            ['by function / by nature', '', '機能別 / 性質別'],
            ['discontinued operations', '', 'やめた事業（廃止事業）'],
            ['finance costs', 'ファイナンス・コスツ', '財務費用、借入の利息']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following must be presented as a separate line on the face of the statement of profit or loss?', choices: ['Income tax expense', 'Dividends paid', 'Depreciation for each class of asset', 'Names of the directors'], answer: 0, explain: '法人税費用は本体に必ず出す行。配当は SOCE、減価償却の内訳は注記に回る。' },
        { q: 'Which of the following does NOT appear in the statement of profit or loss?', choices: ['Revenue', 'Finance costs', 'Dividends paid', 'Income tax expense'], answer: 2, explain: '配当はもうけの分配で費用ではない。持分変動計算書（SOCE）に出る。' },
        { q: '今年、在庫を $50,000 評価減した。会社にとって重要な金額。どう表示する？', choices: ['性質と金額を別に示す（本体の行か注記）', '管理費に混ぜれば十分', 'その他の包括利益（OCI）に入れる', '前の年の数字を直す'], answer: 0, explain: '重要な費用は中身が分かるように別に示す。混ぜて隠すと利用者が毎年のもうけを読み違える。OCI は再評価益などで、在庫の評価減は入れない。' },
        { q: '費用を機能別（by function）で分けた損益計算書の行は？', choices: ['売上原価・販売費・管理費', '原材料費・人件費・減価償却費', '現金・売掛金・在庫', '資本金・利益剰余金'], answer: 0, explain: '機能別は「何のための費用か」で分ける。原材料費・人件費・減価償却費は性質別。3つ目と4つ目は SFP の項目。' },
        { q: '土地建物の再評価益 $15,000 は、SPLOCI のどこに出る？', choices: ['その他の包括利益（OCI）', '売上収益', '営業利益の中の管理費のマイナス', '出さない'], answer: 0, explain: '再評価益は売って得たもうけではないので、当期利益には入れず OCI に出す。包括利益合計には含まれる。' }
      ]
    },
    // ---------------------------------------------------------------- L130
    {
      id: 'L130',
      no: 130,
      title: '会社の SPLOCI を作る',
      goal: '試算表と期末の情報から、会社の損益及びその他の包括利益計算書を作り、段階利益をすべて計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G2(a)', 'G2(b)'],
      slides: [
        {
          title: '給与明細の「手取り」までの段',
          paras: ['給与明細は、総支給額から始まって、税金、社会保険料と順に引き、最後に手取りが出る。途中の数字を見れば、どこにいくら行ったか分かる。', '会社の損益計算書も同じ。売上から始めて、段ごとに引いて、途中の利益（段階利益）を出していく。']
        },
        {
          title: '個人事業から増えるもの',
          list: ['法人税費用（L128）: 会社は自分で税金を払う', '財務費用（finance costs）: 借入や社債（loan notes）の利息', '取締役の報酬: 働いた対価なので費用（管理費）。引出しではない', 'その他の包括利益（OCI）: 再評価益など', '配当は入れない（SOCE へ）']
        },
        {
          title: '5つの区分で読む',
          svg: `<svg viewBox="0 0 440 384" role="img" aria-label="損益計算書は営業・投資・財務・法人税・その他の包括利益の5つの区分で読む" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">損益計算書は5つの区分で読む</text><rect x="20" y="52" width="400" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="76" font-size="15" font-weight="600" fill="var(--ink)">営業（operating）</text><text x="400" y="76" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">→ 営業利益</text><text x="40" y="98" fill="var(--ink)">売上・売上原価・販売費・管理費</text><rect x="20" y="118" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="142" font-size="15" font-weight="600" fill="var(--ink)">投資（investing）</text><text x="400" y="142" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">→ 財務・法人税前利益</text><text x="40" y="164" fill="var(--quiet)">受取利息・受取配当</text><rect x="20" y="184" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="208" font-size="15" font-weight="600" fill="var(--ink)">財務（financing）</text><text x="400" y="208" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">→ 税引前利益</text><text x="40" y="230" fill="var(--quiet)">借入・社債の利息（財務費用）</text><rect x="20" y="250" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="274" font-size="15" font-weight="600" fill="var(--ink)">法人税（income taxes）</text><text x="400" y="274" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">→ 当期利益</text><text x="40" y="296" fill="var(--quiet)">法人税費用（前年の過不足を含む）</text><rect x="20" y="316" width="400" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="340" font-size="15" font-weight="600" fill="var(--ink)">その他の包括利益（OCI）</text><text x="400" y="340" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">→ 包括利益合計</text><text x="40" y="362" fill="var(--quiet)">土地建物の再評価益など</text></svg>`,
          caption: '上から順に足し引きして、各区分の終わりで段階利益を出す。受取利息など本業以外の投資のもうけは、営業利益の下に入る。'
        },
        {
          title: '書式（形を覚える）',
          table: {
            caption: '会社の SPLOCI（機能別）',
            head: ['English', '日本語'],
            rows: [
              ['Revenue', '売上収益'],
              ['Cost of sales', '売上原価（−）'],
              ['Gross profit', '売上総利益'],
              ['Distribution costs', '販売費（−）'],
              ['Administrative expenses', '管理費（−）'],
              ['Operating profit', '営業利益'],
              ['Investment income', '投資収益（＋）'],
              ['Profit before financing and income taxes', '財務・法人税前利益'],
              ['Finance costs', '財務費用（−）'],
              ['Profit before income taxes', '税引前利益'],
              ['Income tax expense', '法人税費用（−）'],
              ['Profit for the year', '当期利益'],
              ['Other comprehensive income', 'その他の包括利益（＋）'],
              ['Total comprehensive income for the year', '包括利益合計']
            ]
          },
          note: { kind: 'tip', text: '古い教材では、営業利益を profit from operations、税引前利益を profit before tax と書く。中身は同じ。' }
        },
        {
          title: 'Tako Co の試算表（一部）',
          table: {
            caption: 'Trial balance extract at 31 December 20X5',
            head: ['Account', '$'],
            rows: [
              ['Revenue', '480,000'],
              ['Inventory at 1 January 20X5', '30,000'],
              ['Purchases', '250,000'],
              ['Distribution costs', '52,000'],
              ['Administrative expenses', '60,000'],
              ['Interest received', '2,000'],
              ['10% loan notes', '100,000'],
              ['Loan note interest paid', '5,000'],
              ['Income tax（借方残高）', '1,000'],
              ['Dividends paid', '20,000']
            ]
          },
          after: '社債（loan notes）は1年中借りていた。'
        },
        {
          title: '例題: SPLOCI を作る',
          example: {
            problem: '上の試算表と次の情報から Tako Co の SPLOCI を作る。期末在庫 $40,000。減価償却 $20,000（販売費に40%、管理費に60%）。今年の税金の見積もり $22,000。土地建物の再評価益 $15,000。',
            steps: ['売上原価 ＝ 期首在庫 $30,000 ＋ 仕入 $250,000 − 期末在庫 $40,000 ＝ $240,000。売上総利益 ＝ $480,000 − $240,000 ＝ $240,000', '減価償却を振り分け: 販売費 $52,000 ＋ $8,000 ＝ $60,000、管理費 $60,000 ＋ $12,000 ＝ $72,000', '営業利益 ＝ $240,000 − $60,000 − $72,000 ＝ $108,000', '受取利息を足す: 財務・法人税前利益 ＝ $108,000 ＋ $2,000 ＝ $110,000', '財務費用は1年分: $100,000 × 10% ＝ $10,000（払ったのは $5,000、残り $5,000 は未払）。税引前利益 ＝ $100,000', '法人税費用 ＝ $22,000 ＋ 前年の不足 $1,000 ＝ $23,000。当期利益 ＝ $77,000', '再評価益 $15,000 は OCI。包括利益合計 ＝ $92,000。配当 $20,000 は入れない'],
            answer: '当期利益 $77,000、包括利益合計 $92,000'
          }
        },
        {
          title: '完成した SPLOCI',
          table: {
            caption: 'Tako Co: SPLOCI for the year ended 31 December 20X5',
            head: ['Item', '$'],
            rows: [
              ['Revenue', '480,000'],
              ['Cost of sales', '(240,000)'],
              ['Gross profit', '240,000'],
              ['Distribution costs', '(60,000)'],
              ['Administrative expenses', '(72,000)'],
              ['Operating profit', '108,000'],
              ['Investment income', '2,000'],
              ['Profit before financing and income taxes', '110,000'],
              ['Finance costs', '(10,000)'],
              ['Profit before income taxes', '100,000'],
              ['Income tax expense', '(23,000)'],
              ['Profit for the year', '77,000'],
              ['Other comprehensive income: gain on revaluation', '15,000']
            ],
            total: ['Total comprehensive income for the year', '92,000']
          }
        },
        {
          title: 'なぜ？ 段階利益を分けて見せる理由',
          paras: ['営業利益は「本業がどれだけ稼いだか」。お金をどこから借りているか、税金がいくらかに左右されないので、借入の多い会社と少ない会社を同じ物差しで比べられる。', '財務費用と税金を後ろに分けると、もうけが「貸した人」「国」「株主」にどう分かれたかが見える。再評価益は売って得たもうけではないので、当期利益と分けて OCI に置く。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '財務費用は「払った額」ではなく「1年分の額」。社債 $100,000 × 10% ＝ $10,000 なのに、試算表の支払額 $5,000 だけを書く間違いが多い。差額は未払費用（accrual）になる。' },
          list: ['配当を費用として引く → SOCE に入れる', '前年の税金の不足を忘れる → 法人税費用に足す', '減価償却を1行で出す → 販売費と管理費に振り分ける', '受取利息を売上に入れる → 営業利益の下の投資収益']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上 → 売上総利益 → 営業利益 → 財務・法人税前利益 → 税引前利益 → 当期利益 → 包括利益合計', '財務費用は1年分（未払も含める）、法人税費用は前年の過不足で調整', '配当は入れない。再評価益は OCI']
        },
        {
          title: '英単語',
          words: [
            ['gross profit', 'グロス・プロフィット', '売上総利益'],
            ['operating profit', 'オペレーティング・プロフィット', '営業利益'],
            ['profit before financing and income taxes', '', '財務・法人税前利益'],
            ['profit before income taxes', '', '税引前利益'],
            ['loan notes', 'ローン・ノーツ', '社債（会社が出す借用証書）'],
            ['total comprehensive income', '', '包括利益合計'],
            ['investment income', '', '投資収益（受取利息・受取配当）']
          ]
        }
      ],
      quiz: [
        { q: 'A company has revenue $300,000, cost of sales $180,000, distribution costs $25,000, administrative expenses $40,000, finance costs $6,000 and income tax expense $12,000. What is the operating profit?', type: 'number', answer: 55000, unit: '$', explain: '$300,000 − $180,000 − $25,000 − $40,000 ＝ $55,000。財務費用と税金は営業利益より下で引くので、ここでは引かない。' },
        { q: 'Using the same figures (operating profit $55,000, finance costs $6,000, income tax expense $12,000), what is the profit for the year?', choices: ['$37,000', '$49,000', '$43,000', '$55,000'], answer: 0, explain: '$55,000 − $6,000 − $12,000 ＝ $37,000。$49,000 は税金を、$43,000 は財務費用を引き忘れた答え。' },
        { q: '10% の社債 $80,000 を1年中借りている。試算表の支払利息は $4,000。損益計算書の財務費用はいくら？', type: 'number', answer: 8000, unit: '$', explain: '1年分 $80,000 × 10% ＝ $8,000。払ったのは $4,000 なので、残り $4,000 は未払費用として負債に入れる。' },
        { q: '今年、株主に配当 $10,000 を払った。損益計算書への影響は？', choices: ['影響しない（SOCE で利益剰余金から引く）', '管理費が $10,000 増える', '財務費用が $10,000 増える', '売上が $10,000 減る'], answer: 0, explain: '配当はもうけの分配で、費用ではない。損益計算書は通らない。' },
        { q: 'Profit for the year is $37,000 and there is a gain on revaluation of property of $8,000. What is the total comprehensive income for the year?', choices: ['$45,000', '$37,000', '$29,000', '$8,000'], answer: 0, explain: '包括利益合計 ＝ 当期利益 ＋ OCI ＝ $37,000 ＋ $8,000 ＝ $45,000。$37,000 は OCI を足し忘れた答え。' },
        { q: '銀行預金の受取利息 $2,000 は、損益計算書のどこに入る？', choices: ['営業利益の下、財務・法人税前利益の前（投資収益）', '売上収益', '財務費用から引く', 'その他の包括利益'], answer: 0, explain: '本業以外の投資から生まれた収益なので投資の区分。営業利益を出した後に足す。' }
      ]
    },
    // ---------------------------------------------------------------- L131
    {
      id: 'L131',
      no: 131,
      title: '会社の SFP を作る',
      goal: '期末の残高と SPLOCI の結果から、会社の財政状態計算書を作り、資本と負債を正しい区分に並べられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['G1(b)'],
      slides: [
        {
          title: '自分の持ち物リストを2段に分ける',
          paras: ['自分の財産を書き出すとき、「すぐ使えるもの（財布、普通預金）」と「長く持つもの（車、家）」に分けると分かりやすい。', '借金も「今月のカード払い」と「あと30年の住宅ローン」では重さが違う。会社の財政状態計算書（SFP）も、この「すぐ」と「長く」で分ける。']
        },
        {
          title: '会社の SFP の形',
          table: {
            caption: '会社の SFP の区分と中身',
            head: ['区分', '主な中身'],
            rows: [
              ['非流動資産', '有形固定資産（PPE）、無形資産'],
              ['流動資産', '棚卸資産、売掛金とその他の債権（前払費用を含む）、現金'],
              ['資本（equity）', '株式資本、株式払込剰余金、再評価剰余金、利益剰余金'],
              ['非流動負債', '1年より先に返す社債・借入、長期の引当金'],
              ['流動負債', '買掛金とその他の債務（未払費用を含む）、未払法人税、未払配当、当座借越、1年以内に返す借入']
            ]
          },
          after: '個人事業の「capital」の1行が、会社では4つの資本の行に分かれる。'
        },
        {
          title: '「すぐ」の境目は12か月',
          formula: '期末日から12か月以内に現金になる・払う → current',
          paras: ['期末日から12か月以内に現金になる資産は流動資産（current assets）、12か月以内に払う負債は流動負債（current liabilities）。', 'なぜ分ける？ 銀行や取引先が知りたいのは「近いうちの支払いを、近いうちに入るお金で払えるか」。分けておくと一目で分かる。']
        },
        {
          title: '損益と配当はここに入る',
          svg: `<svg viewBox="0 0 440 380" role="img" aria-label="当期利益と配当は利益剰余金へ、再評価益は再評価剰余金へ、税金の見積もりと未払利息は流動負債へ入る" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">損益と配当は SFP のここに入る</text><text x="108" y="62" text-anchor="middle" fill="var(--quiet)">SPLOCI・SOCE</text><text x="332" y="62" text-anchor="middle" fill="var(--quiet)">SFP</text><rect x="20" y="76" width="176" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="108" y="105" text-anchor="middle" font-weight="600" fill="var(--ink)">当期利益 $77,000</text><rect x="244" y="76" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="105" text-anchor="middle" fill="var(--ink)">利益剰余金（＋）</text><rect x="20" y="136" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="165" text-anchor="middle" fill="var(--ink)">配当 $20,000</text><rect x="244" y="136" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="165" text-anchor="middle" fill="var(--ink)">利益剰余金（−）</text><rect x="20" y="196" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="225" text-anchor="middle" fill="var(--ink)">再評価益 $15,000</text><rect x="244" y="196" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="225" text-anchor="middle" fill="var(--ink)">再評価剰余金</text><rect x="20" y="256" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="285" text-anchor="middle" fill="var(--ink)">税の見積もり $22,000</text><rect x="244" y="256" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="285" text-anchor="middle" fill="var(--ink)">未払法人税</text><rect x="20" y="316" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="345" text-anchor="middle" fill="var(--ink)">未払の利息 $5,000</text><rect x="244" y="316" width="176" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="332" y="345" text-anchor="middle" fill="var(--ink)">買掛金とその他の債務</text><path d="M200 100H232M232 94L240 100L232 106z" stroke="var(--edge)" stroke-width="2" fill="var(--edge)"/><path d="M200 160H232M232 154L240 160L232 166z" stroke="var(--edge)" stroke-width="2" fill="var(--edge)"/><path d="M200 220H232M232 214L240 220L232 226z" stroke="var(--edge)" stroke-width="2" fill="var(--edge)"/><path d="M200 280H232M232 274L240 280L232 286z" stroke="var(--edge)" stroke-width="2" fill="var(--edge)"/><path d="M200 340H232M232 334L240 340L232 346z" stroke="var(--edge)" stroke-width="2" fill="var(--edge)"/></svg>`,
          caption: 'L130 の Tako Co の数字。利益剰余金の動きは持分変動計算書（SOCE、L127）で見せる。'
        },
        {
          title: 'Tako Co の期末の残高',
          table: {
            caption: '31 December 20X5（L130 の結果は除く）',
            head: ['Item', '$'],
            rows: [
              ['PPE（再評価・減価償却の後の帳簿価額）', '325,000'],
              ['Inventory（期末）', '40,000'],
              ['Trade receivables', '50,000'],
              ['Allowance for receivables', '2,000'],
              ['Prepayments', '3,000'],
              ['Cash', '16,000'],
              ['Share capital（$1 shares）', '100,000'],
              ['Share premium', '30,000'],
              ['Revaluation surplus at 1 January', '10,000'],
              ['Retained earnings at 1 January', '53,000'],
              ['10% loan notes（20X9年に返す）', '100,000'],
              ['Trade payables', '38,000'],
              ['Other accruals', '2,000']
            ]
          },
          after: 'L130 から: 当期利益 $77,000、配当 $20,000、再評価益 $15,000、未払利息 $5,000、税の見積もり $22,000。'
        },
        {
          title: '例題: SFP を作る',
          example: {
            problem: '上の残高と L130 の結果から、Tako Co の20X5年末の SFP を作る。資産合計と、資本・負債の合計が一致することを確かめる。',
            steps: ['売掛金とその他の債権 ＝ $50,000 − 貸倒引当金 $2,000 ＋ 前払 $3,000 ＝ $51,000', '資産合計 ＝ $325,000 ＋ $40,000 ＋ $51,000 ＋ $16,000 ＝ $432,000', '再評価剰余金 ＝ $10,000 ＋ $15,000 ＝ $25,000', '利益剰余金 ＝ $53,000 ＋ 当期利益 $77,000 − 配当 $20,000 ＝ $110,000', '資本合計 ＝ $100,000 ＋ $30,000 ＋ $25,000 ＋ $110,000 ＝ $265,000', '流動負債 ＝ 買掛金等（$38,000 ＋ $2,000 ＋ 未払利息 $5,000 ＝ $45,000）＋ 未払法人税 $22,000 ＝ $67,000', '負債合計 ＝ 社債 $100,000 ＋ $67,000 ＝ $167,000。$265,000 ＋ $167,000 ＝ $432,000 で資産合計と一致'],
            answer: '資産合計 $432,000 ＝ 資本 $265,000 ＋ 負債 $167,000'
          }
        },
        {
          title: '完成した SFP（資産）',
          table: {
            caption: 'Tako Co: SFP at 31 December 20X5',
            head: ['Assets', '$'],
            rows: [
              ['Non-current assets', ''],
              ['Property, plant and equipment', '325,000'],
              ['Current assets', ''],
              ['Inventories', '40,000'],
              ['Trade and other receivables', '51,000'],
              ['Cash and cash equivalents', '16,000'],
              ['Total current assets', '107,000']
            ],
            total: ['Total assets', '432,000']
          }
        },
        {
          title: '完成した SFP（資本と負債）',
          table: {
            caption: 'Tako Co: SFP at 31 December 20X5',
            head: ['Equity and liabilities', '$'],
            rows: [
              ['Share capital', '100,000'],
              ['Share premium', '30,000'],
              ['Revaluation surplus', '25,000'],
              ['Retained earnings', '110,000'],
              ['Total equity', '265,000'],
              ['Non-current liabilities: 10% loan notes', '100,000'],
              ['Current liabilities', ''],
              ['Trade and other payables', '45,000'],
              ['Tax payable', '22,000'],
              ['Total current liabilities', '67,000']
            ],
            total: ['Total equity and liabilities', '432,000']
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '利益剰余金は「期首 ＋ 当期利益 − 配当」。期首の残高をそのまま書いたり、包括利益合計（再評価益込み）を足したりしない。再評価益は再評価剰余金へ行く。' },
          list: ['未払法人税に法人税費用（$23,000）を書く → 今年の見積もり $22,000', '当座借越（bank overdraft）を現金から引いて隠す → 流動負債に出す', '分割で返す借入を全部、非流動負債にする → 12か月以内に返す分は流動負債', '貸倒引当金を負債に入れる → 売掛金から引く']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['12か月以内に現金になる・払うものが current', '利益剰余金 ＝ 期首 ＋ 当期利益 − 配当、再評価剰余金 ＝ 期首 ＋ 再評価益', '未払法人税は今年の見積もり、未払利息は流動負債']
        },
        {
          title: '英単語',
          words: [
            ['current assets / current liabilities', '', '流動資産 / 流動負債（12か月以内）'],
            ['non-current liabilities', '', '非流動負債（12か月より先）'],
            ['trade and other receivables', '', '売掛金とその他の債権'],
            ['trade and other payables', '', '買掛金とその他の債務'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（流動負債）'],
            ['total equity and liabilities', '', '資本と負債の合計']
          ]
        }
      ],
      quiz: [
        { q: '期首の利益剰余金 $40,000、当期利益 $25,000、配当 $8,000、再評価益 $6,000。期末の利益剰余金はいくら？', type: 'number', answer: 57000, unit: '$', explain: '$40,000 ＋ $25,000 − $8,000 ＝ $57,000。再評価益 $6,000 は再評価剰余金に行くので、ここには足さない。' },
        { q: 'At 31 December 20X6 a company has a loan of $60,000, repayable in equal annual instalments of $12,000 starting on 30 June 20X7. How is the loan shown in the statement of financial position?', choices: ['Current liabilities $12,000, non-current liabilities $48,000', 'Non-current liabilities $60,000', 'Current liabilities $60,000', 'Current liabilities $48,000, non-current liabilities $12,000'], answer: 0, explain: '12か月以内（20X7年6月）に返す $12,000 が流動負債、残りの $48,000 が非流動負債。' },
        { q: 'Which of the following is shown under current liabilities?', choices: ['Bank overdraft', 'Loan notes repayable in five years', 'Share premium', 'Revaluation surplus'], answer: 0, explain: '当座借越はいつでも返済を求められる借入なので流動負債。株式払込剰余金と再評価剰余金は資本で、負債ではない。' },
        { q: '今年の税金の見積もり $22,000、前年の見積もり不足 $1,000。SFP の未払法人税は？', choices: ['$22,000', '$23,000', '$21,000', '$1,000'], answer: 0, explain: '負債は今年の見積もりだけ。$23,000 は損益計算書の法人税費用（L128）。' },
        { q: '社債の利息のうち期末に未払の $5,000 は、SFP のどこ？', choices: ['流動負債（買掛金とその他の債務）', '非流動負債（社債と同じ行）', '資本から引く', '財務費用から引く'], answer: 0, explain: '利息は12か月以内に払うので流動負債。社債の元本とは分けて考える。' },
        { q: 'Trade receivables are $50,000, the allowance for receivables is $2,000 and prepayments are $3,000. What is the figure for trade and other receivables?', choices: ['$51,000', '$55,000', '$53,000', '$47,000'], answer: 0, explain: '$50,000 − $2,000 ＋ $3,000 ＝ $51,000。$55,000 は引当金を足してしまった答え、$47,000 は前払費用を引いてしまった答え。' }
      ]
    },
    // ---------------------------------------------------------------- L132
    {
      id: 'L132',
      no: 132,
      title: '注記の目的、棚卸資産・固定資産の注記',
      goal: '注記がなぜあるかを説明し、有形固定資産・無形資産・棚卸資産の注記に何を書くかを言え、固定資産の注記の数字を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['G3(a)', 'G3(b)i', 'G3(b)iv'],
      slides: [
        {
          title: 'スマホ代の明細',
          paras: ['スマホの請求書に「今月 8,000円」とだけ書いてあっても、納得できない。基本料金、通話料、端末の分割代という内訳と、「どの料金プランで計算したか」が書いてあって初めて分かる。', '財務諸表の注記（notes）は、この内訳と説明にあたる。']
        },
        {
          title: '注記の目的',
          list: ['本体の数字の内訳を見せる（例: PPE $325,000 の中身と1年の動き）', 'どんなルールで数字を作ったか（会計方針）を書く。例: 定額法、先入先出法', '本体の数字にならない情報を伝える。例: 偶発負債、後発事象'],
          after: 'なぜ？ 同じ $325,000 でも作り方は会社ごとに違う。方針と内訳がないと、利用者は他社と比べられず、数字を信じる根拠もない。本体を見やすく保ちながら、詳しい情報を届けるために注記がある。'
        },
        {
          title: '有形固定資産の注記に書くこと',
          paras: ['種類（class）ごとに書く。例: 土地建物、機械。'],
          list: ['測定の基礎（原価か再評価額か）', '減価償却の方法（定額法など）と、耐用年数または償却率', '期首と期末の取得原価（または評価額）と減価償却累計額', '期首から期末への帳簿価額の動き: 取得、売却、再評価、減価償却', '再評価した場合: 再評価日、独立した鑑定人（independent valuer）が関わったか、原価のままなら帳簿価額はいくらだったか、再評価剰余金の動き']
        },
        {
          title: '注記の表の形',
          table: {
            caption: 'Tako Co: Plant and equipment（機械）',
            head: ['Item', '$'],
            rows: [
              ['Cost: at 1 January 20X5', '70,000'],
              ['Additions', '20,000'],
              ['Disposals', '(10,000)'],
              ['Cost: at 31 December 20X5', '80,000'],
              ['Accumulated depreciation: at 1 January 20X5', '30,000'],
              ['Charge for the year', '12,000'],
              ['Disposals', '(6,000)'],
              ['Accumulated depreciation: at 31 December 20X5', '36,000'],
              ['Carrying amount: at 31 December 20X4', '40,000']
            ],
            total: ['Carrying amount: at 31 December 20X5', '44,000']
          },
          after: 'L130 の減価償却 $20,000 のうち $12,000 が機械、残り $8,000 が建物。SFP の PPE $325,000 は、建物 $281,000 ＋ 機械 $44,000。'
        },
        {
          title: '例題: 注記の数字を埋める',
          example: {
            problem: 'Tako Co の機械の取得原価は期首 $70,000。今年 $20,000 の機械を買い、原価 $10,000（減価償却累計額 $6,000）の機械を売った。期首の減価償却累計額は $30,000。減価償却は期末の取得原価の15%（定額法。買った年は1年分、売った年はゼロ）。今年の減価償却費と、期末の帳簿価額は？',
            steps: ['期末の取得原価 ＝ $70,000 ＋ $20,000 − $10,000 ＝ $80,000', '今年の減価償却費 ＝ $80,000 × 15% ＝ $12,000', '期末の減価償却累計額 ＝ $30,000 ＋ $12,000 − 売った機械の分 $6,000 ＝ $36,000', '期末の帳簿価額 ＝ $80,000 − $36,000 ＝ $44,000', '検算: 期首の帳簿価額 $40,000 ＋ $20,000 − 売った機械の帳簿価額 $4,000 − $12,000 ＝ $44,000'],
            answer: '減価償却費 $12,000、期末の帳簿価額 $44,000'
          }
        },
        {
          title: '帳簿価額の動きを図で',
          svg: `<svg viewBox="0 0 440 332" role="img" aria-label="期首の帳簿価額に取得を足し、売却と減価償却を引くと期末の帳簿価額になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">帳簿価額の動きを注記で見せる</text><rect x="20" y="52" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="78" font-size="15" fill="var(--ink)">期首の帳簿価額</text><text x="400" y="78" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$40,000</text><rect x="20" y="100" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="126" font-size="15" fill="var(--ink)">＋ 取得（additions）</text><text x="400" y="126" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$20,000</text><rect x="20" y="148" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="174" font-size="15" fill="var(--ink)">− 売った機械の帳簿価額</text><text x="400" y="174" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$4,000</text><rect x="20" y="196" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="222" font-size="15" fill="var(--ink)">− 今年の減価償却</text><text x="400" y="222" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$12,000</text><rect x="20" y="244" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="270" font-size="15" font-weight="600" fill="var(--ink)">期末の帳簿価額</text><text x="400" y="270" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">$44,000</text><text x="220" y="314" text-anchor="middle" fill="var(--quiet)">期首 ＋ 取得 − 売却 − 減価償却 ＝ 期末</text></svg>`,
          caption: '売った機械の帳簿価額 ＝ 原価 $10,000 − 累計額 $6,000 ＝ $4,000。注記では原価と累計額の両方から消す。'
        },
        {
          title: '無形資産の注記に書くこと',
          paras: ['種類ごとに、社内で作ったもの（開発費など）と買ったものを分けて書く。'],
          list: ['耐用年数が有限か、決まっていない（indefinite）か。有限なら耐用年数か償却率と、償却（amortisation）の方法', '期首と期末の取得原価と償却累計額、帳簿価額の動き', '償却費が損益計算書のどの行に入っているか', 'その年に費用にした研究開発費（research and development）の合計額']
        },
        {
          title: '棚卸資産の注記に書くこと',
          list: ['会計方針: 原価と正味実現可能価額の低い方で測ること、原価の計算方法（先入先出法 FIFO、加重平均法など）', '帳簿価額の合計と、種類ごとの内訳（原材料、仕掛品、製品など）', 'その年に費用にした棚卸資産の額（ふつうは売上原価）', '評価減した額、評価減を戻した額とその理由', '借入の担保に入れた棚卸資産の帳簿価額'],
          after: '例: Tako Co の在庫 $40,000 ＝ 原材料 $12,000 ＋ 製品（冷凍たこ焼き）$28,000。先入先出法で計算。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '注記は「間違った数字を説明で直す場所」ではない。費用や負債にすべきものは本体に記録する。注記は本体の数字を説明し、補うためのもの。' },
          list: ['売却で原価だけ消して、減価償却累計額を消し忘れる', '今年の減価償却費を取得原価の行に入れる → 累計額の行', '棚卸資産の注記に「売値」や「仕入先の名前」が必要と思う → 求められていない']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['注記＝本体の数字の内訳・会計方針・本体にない情報', 'PPE の注記: 期首 ＋ 取得 − 売却 − 減価償却 ＝ 期末（原価と累計額それぞれで）', '棚卸資産の注記: 方針（低い方・FIFO 等）、種類ごとの額、費用にした額、評価減']
        },
        {
          title: '英単語',
          words: [
            ['notes to the financial statements', '', '注記（disclosure notes）'],
            ['accounting policies', 'アカウンティング・ポリシーズ', '会計方針（数字の作り方のルール）'],
            ['additions / disposals', 'アディションズ / ディスポーザルズ', '取得 / 売却'],
            ['class of assets', '', '資産の種類（土地建物、機械など）'],
            ['independent valuer', 'インディペンデント・ヴァリュアー', '独立した鑑定人'],
            ['cost formula', '', '原価の計算方法（FIFO など）']
          ]
        }
      ],
      quiz: [
        { q: '財務諸表の注記の主な目的は？', choices: ['本体の数字の内訳や会計方針、本体にない情報を伝える', '本体で間違えた数字を説明で直す', '税務署だけに見せる情報を書く', '翌年の予算を示す'], answer: 0, explain: '注記は本体を補うもの。間違いは本体で直す。利用者全体に向けた情報で、予算は書かない。' },
        { q: 'PPE の注記: 期首の取得原価 $200,000、取得 $50,000、売却した資産の原価 $30,000。期首の減価償却累計額 $80,000、今年の減価償却費 $34,000、売却した資産の累計額 $18,000。期末の帳簿価額はいくら？', type: 'number', answer: 124000, unit: '$', explain: '期末の原価 $200,000 ＋ $50,000 − $30,000 ＝ $220,000。期末の累計額 $80,000 ＋ $34,000 − $18,000 ＝ $96,000。帳簿価額 $220,000 − $96,000 ＝ $124,000。' },
        { q: 'Which of the following is NOT required to be disclosed for inventories?', choices: ['The selling price of each product', 'The cost formula used, for example FIFO', 'The total carrying amount of inventories', 'The amount of any write-down recognised as an expense'], answer: 0, explain: '棚卸資産の注記に売値は求められない。方針（原価の計算方法）、帳簿価額の合計、評価減の額は書く。' },
        { q: 'Which of the following must be disclosed for each class of property, plant and equipment?', choices: ['The depreciation methods used', 'The name of the supplier of each asset', 'The insurance cost of each asset', 'The market value of every asset held at cost'], answer: 0, explain: '種類ごとに、減価償却の方法、耐用年数または償却率、期首・期末の原価と累計額、帳簿価額の動きを書く。仕入先や保険料は求められない。' },
        { q: 'A company revalued its land and buildings during the year. Which of the following must be disclosed in the notes?', choices: ['The effective date of the revaluation and whether an independent valuer was involved', 'The name of the bank that holds the title deeds', 'The expected selling price of the buildings next year', 'Nothing, because the revaluation gain is shown in other comprehensive income'], answer: 0, explain: '再評価したら、再評価日と独立した鑑定人が関わったかを注記に書く（原価のままの帳簿価額と再評価剰余金の動きも）。OCI に出すだけでは足りない。来年の売値は求められない。' },
        { q: '無形資産の注記に特有の項目は？', choices: ['その年に費用にした研究開発費の合計額', '原価の計算方法（先入先出法など）', '再評価した鑑定人の名前', '借入の担保にした在庫の額'], answer: 0, explain: '研究開発費の合計額は無形資産（IAS 38）の注記。原価の計算方法と担保の在庫は棚卸資産の注記。' }
      ]
    }
  ],
  cards: [
    { id: 'L128-1', lesson: 'L128', q: '期末に法人税を見積もる仕訳は？', a: 'Dr Income tax expense / Cr Tax payable' },
    { id: 'L128-2', lesson: 'L128', q: '法人税費用の式は？', a: '今年の見積もり ＋ 前年の不足（− 前年の余り）' },
    { id: 'L128-3', lesson: 'L128', q: 'SFP の未払法人税に入れる金額は？', a: '今年の見積もりだけ（前年の差は入れない）' },
    { id: 'L128-4', lesson: 'L128', q: '試算表の Income tax が借方残高なら？', a: '前年の見積もり不足（under-provision）。今年の費用に足す' },
    { id: 'L128-5', lesson: 'L128', q: 'なぜ見積もりの差を前年に戻して直さない？', a: '間違いではなく後から良い情報が来ただけなので、分かった年の費用で調整する' },
    { id: 'L128-6', lesson: 'L128', q: '見積もり $5,000、払ったのは $5,400、今年の見積もり $6,000。法人税費用は？', a: '$6,400（不足 $400 を足す）' },
    { id: 'L129-1', lesson: 'L129', q: '損益計算書の本体に必ず出す主な行は？', a: '売上収益・法人税費用・当期利益（＋関連会社の持分・やめた事業）' },
    { id: 'L129-2', lesson: 'L129', q: '配当は損益計算書に入る？', a: '入らない。SOCE で利益剰余金から引く' },
    { id: 'L129-3', lesson: 'L129', q: '重要な収益・費用はどう示す？', a: '性質と金額を別に示す（本体の行か注記）' },
    { id: 'L129-4', lesson: 'L129', q: '機能別（by function）の費用の行は？', a: '売上原価・販売費・管理費' },
    { id: 'L129-5', lesson: 'L129', q: 'なぜ本体に出す行が決まっている？', a: 'どの会社も同じ場所に大事な数字があれば比べやすいから' },
    { id: 'L130-1', lesson: 'L130', q: '段階利益の順番は？', a: '売上総利益 → 営業利益 → 財務・法人税前利益 → 税引前利益 → 当期利益 → 包括利益合計' },
    { id: 'L130-2', lesson: 'L130', q: '社債 $100,000（10%）、支払利息 $5,000。財務費用は？', a: '$10,000（1年分。残り $5,000 は未払）' },
    { id: 'L130-3', lesson: 'L130', q: '受取利息はどこに入る？', a: '営業利益の下の投資収益（investment income）' },
    { id: 'L130-4', lesson: 'L130', q: '包括利益合計の式は？', a: '当期利益 ＋ その他の包括利益（再評価益など）' },
    { id: 'L130-5', lesson: 'L130', q: 'なぜ営業利益を分けて出す？', a: '借入や税金に左右されない本業の稼ぎで、会社どうしを比べられるから' },
    { id: 'L130-6', lesson: 'L130', q: 'profit from operations / profit before tax とは？', a: '古い書式の呼び方。営業利益 / 税引前利益と同じ' },
    { id: 'L131-1', lesson: 'L131', q: '流動（current）の境目は？', a: '期末日から12か月以内に現金になる・払うもの' },
    { id: 'L131-2', lesson: 'L131', q: '期末の利益剰余金の式は？', a: '期首 ＋ 当期利益 − 配当' },
    { id: 'L131-3', lesson: 'L131', q: '再評価益はSFPのどこに入る？', a: '再評価剰余金（資本）' },
    { id: 'L131-4', lesson: 'L131', q: '当座借越はどこ？', a: '流動負債。現金から引いて隠さない' },
    { id: 'L131-5', lesson: 'L131', q: '会社の資本の4つの行は？', a: '株式資本・株式払込剰余金・再評価剰余金・利益剰余金' },
    { id: 'L131-6', lesson: 'L131', q: '分割返済の借入の表示は？', a: '12か月以内に返す分は流動負債、残りは非流動負債' },
    { id: 'L132-1', lesson: 'L132', q: '注記の目的は？', a: '本体の数字の内訳、会計方針、本体にない情報を伝えること' },
    { id: 'L132-2', lesson: 'L132', q: 'PPE の帳簿価額の動き（注記）は？', a: '期首 ＋ 取得 − 売却 − 減価償却 ＝ 期末' },
    { id: 'L132-3', lesson: 'L132', q: '再評価した PPE の注記に追加で書くことは？', a: '再評価日、独立した鑑定人が関わったか、原価のままの帳簿価額' },
    { id: 'L132-4', lesson: 'L132', q: '棚卸資産の注記の主な中身は？', a: '方針（低い方・FIFO 等）、種類ごとの額、費用にした額、評価減' },
    { id: 'L132-5', lesson: 'L132', q: '無形資産の注記に特有の項目は？', a: '耐用年数が有限か、償却費の行、費用にした研究開発費の合計' },
    { id: 'L132-6', lesson: 'L132', q: '資産を売ったとき、注記ではどこから消す？', a: '取得原価と減価償却累計額の両方' }
  ]
});
