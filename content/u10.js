(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 10,
  part: 6,
  partTitle: '有形固定資産と減価償却',
  lessons: [
    // ───────────────────────── L47 ─────────────────────────
    {
      id: 'L47',
      no: 47,
      title: 'どちらの方法を選ぶか',
      goal: '定額法と定率法を、資産の使われ方に合わせて選び分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D5(c)'],
      slides: [
        {
          title: 'スマホと机で考える',
          paras: ['スマホは、買って最初の1年で一番値打ちが下がる。新しい機種が出て、バッテリーも弱っていく。', '一方、事務所の机は、10年使っても毎年同じように役に立つ。', '物によって「役に立つ量」の減り方が違う。減価償却の方法は、この減り方に合わせて選ぶ。']
        },
        {
          title: 'ルール: 使われ方に合わせる',
          paras: ['IAS 16（有形固定資産の基準）は、資産が役に立つ（便益を生む）パターンを映す方法を選ぶように決めている。'],
          formula: '役に立つ減り方 ＝ 減価償却の減り方',
          list: ['毎年同じだけ役に立つ → 定額法（straight-line）。建物、机や棚などの備品（fixtures and fittings）、期間の決まった借りた建物（leasehold）', '最初の数年に多く役に立つ → 定率法（reducing balance）。車両（motor vehicles）、パソコン（computer equipment）、新しいほどよく動く機械']
        },
        {
          title: 'なぜ？ 車に定率法が合う理由',
          list: ['新しいうちは故障が少なく、たくさん使う', '技術が古くなる（陳腐化、obsolescence）。パソコンは数年で性能が見劣りする', '古くなると修理代が増える。減価償却費は年々小さくなるので、「減価償却費＋修理代」の合計が毎年ならされる'],
          after: 'つまり、最初の年に多く使った分を、最初の年の費用に多く入れる。これが実態に合う。'
        },
        {
          title: '同じ資産で比べる',
          table: { caption: '原価 $8,000、耐用年数4年、残存価額 $500 の資産の減価償却費', head: ['年', '定額法 $', '定率法 50% $'], rows: [['1', '1,875', '4,000'], ['2', '1,875', '2,000'], ['3', '1,875', '1,000'], ['4', '1,875', '500']], total: ['合計', '7,500', '7,500'] },
          after: '定額法は（8,000 − 500）÷ 4 ＝ 1,875。定率法は毎年、残っている帳簿価額の50%。'
        },
        {
          title: '帳簿価額の減り方を図で見る',
          svg: `<svg viewBox="0 0 440 336" role="img" aria-label="定額法はまっすぐ、定率法は最初に大きく帳簿価額が減る" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">帳簿価額の減り方（$8,000、4年）</text><path d="M80 40V250H400" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="72" y="55" text-anchor="end" fill="var(--quiet)">$8,000</text><text x="72" y="155" text-anchor="end" fill="var(--quiet)">$4,000</text><text x="72" y="242" text-anchor="end" fill="var(--quiet)">$500</text><text x="80" y="272" text-anchor="middle" fill="var(--quiet)">0年</text><text x="160" y="272" text-anchor="middle" fill="var(--quiet)">1年</text><text x="240" y="272" text-anchor="middle" fill="var(--quiet)">2年</text><text x="320" y="272" text-anchor="middle" fill="var(--quiet)">3年</text><text x="400" y="272" text-anchor="middle" fill="var(--quiet)">4年</text><polyline points="80,50 160,96.9 240,143.8 320,190.6 400,237.5" fill="none" stroke="var(--ink)" stroke-width="2"/><polyline points="80,50 160,150 240,200 320,225 400,237.5" fill="none" stroke="var(--accent)" stroke-width="3"/><path d="M20 296H50" stroke="var(--ink)" stroke-width="2"/><text x="60" y="301" fill="var(--ink)">定額法: 毎年同じだけ減る</text><path d="M20 320H50" stroke="var(--accent)" stroke-width="3"/><text x="60" y="325" fill="var(--ink)">定率法: 最初の年に大きく減る</text></svg>`,
          caption: 'どちらも最後は残存価額 $500 にたどり着く。違うのは途中の減り方だけ。'
        },
        {
          title: '利益への影響',
          paras: ['定率法は最初の年の減価償却費が大きい。だから最初の年は利益が小さく、帳簿価額も小さくなる。後の年はその逆になる。', '耐用年数全体で見ると、費用の合計はどちらも同じ（上の例では $7,500）。方法で変わるのは「どの年の費用にするか」だけ。']
        },
        {
          title: '一度決めたら続ける',
          paras: ['同じ種類の資産には、同じ方法を毎年続けて使う（継続性、consistency）。利益をよく見せたい年だけ方法を変える、ということはできない。', '方法・耐用年数・残存価額は、少なくとも毎年度末に見直す。使われ方が本当に変わったときだけ方法を変える。'],
          note: { kind: 'tip', text: '方法の変更は「会計上の見積りの変更（change in accounting estimate）」。今の帳簿価額から新しい方法で計算し、過去の年は直さない（L50 で詳しく）。' }
        },
        {
          title: '土地は減価償却しない',
          paras: ['土地（land）は使っても減らず、耐用年数に限りがない。だから普通は減価償却しない。建物（buildings）は古くなるので減価償却する。'],
          note: { kind: 'warn', text: '「土地つき建物 $500,000（うち土地 $200,000）」なら、減価償却するのは建物の $300,000 だけ。全額に率を掛けるのはよくある間違い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['方法は、資産が役に立つパターンに合わせて選ぶ', '最初に多く役立つ物（車・パソコン）は定率法、毎年同じ物（建物・備品）は定額法', '方法を変えても合計は同じ。変わるのは費用にする年。土地は償却しない']
        },
        {
          title: '英単語',
          words: [
            ['pattern of consumption', '', '役に立つ（便益が使われる）パターン'],
            ['economic benefits', '', '経済的便益、資産が生む役立ち'],
            ['obsolescence', 'オブソレッセンス', '陳腐化、技術が古くなること'],
            ['motor vehicles', '', '車両'],
            ['fixtures and fittings', '', '備品（机・棚など）'],
            ['freehold land', '', '所有している土地（減価償却しない）'],
            ['change in accounting estimate', '', '会計上の見積りの変更']
          ]
        }
      ],
      quiz: [
        { q: '配達用のバン。新しいうちに一番よく使い、数年で古くなり修理代も増える。合う方法は？', choices: ['定額法', '定率法', '減価償却しない'], answer: 1, explain: '最初の数年に多く役立つので定率法。毎年同じだけ役立つ建物や備品なら定額法。減価償却しないのは土地。' },
        { q: 'Which of the following assets is NOT normally depreciated?', choices: ['Freehold land', 'Buildings', 'Motor vehicles', 'Computer equipment'], answer: 0, explain: '土地は耐用年数に限りがないので減価償却しない。建物は古くなるので減価償却する。' },
        { q: 'Which statement about straight-line and reducing balance depreciation is correct?', choices: ['Reducing balance gives a higher charge in the early years', 'Straight-line gives a higher charge in the early years', 'Reducing balance always gives a higher total charge over the life of the asset', 'The method should be chosen to give the lowest possible profit'], answer: 0, explain: '定率法は最初の年が一番大きい。耐用年数全体の合計は同じ（原価 − 残存価額）なので、3つ目は誤り。方法は利益の都合ではなく使われ方で選ぶ。' },
        { q: 'An entity changes its depreciation method from straight-line to reducing balance because the pattern of use of the asset has changed. How should this be treated?', choices: ['As a change in accounting estimate, applied prospectively', 'As a change in accounting policy, restating prior years', 'As a prior period error, restating prior years', 'It is not allowed under IAS 16'], answer: 0, explain: '方法の変更は会計上の見積りの変更。今後に向かって（prospectively）適用し、過去の年は作り直さない。' },
        { q: '定額法から定率法に変えた。その資産の最初の年の利益はどうなる？', choices: ['小さくなる', '大きくなる', '変わらない'], answer: 0, explain: '定率法は最初の年の減価償却費が大きいので、最初の年の利益は小さくなる。後の年は逆に費用が小さくなる。' }
      ]
    },

    // ───────────────────────── L48 ─────────────────────────
    {
      id: 'L48',
      no: 48,
      title: '減価償却費と累計額の記帳・表示',
      goal: '減価償却の仕訳を書き、損益計算書と財政状態計算書に正しく載せられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D5(d)', 'D5(g)'],
      slides: [
        {
          title: '車のレシートとメーター',
          paras: ['200万円で車を買った。レシートの金額は、何年たっても200万円のまま。', 'どれだけ使ったかは、走行距離のメーターで別に数える。', '会計も同じ。買った値段（原価）は消さずに残し、使った分を「減価償却累計額」として別に積み上げる。']
        },
        {
          title: '減価償却の仕訳',
          journal: [
            { side: 'Dr', account: 'Depreciation expense（減価償却費）', amount: '4,000' },
            { side: 'Cr', account: 'Accumulated depreciation（減価償却累計額）', amount: '4,000' }
          ],
          paras: ['借方の減価償却費は費用。損益計算書（SPL）に行く。', '貸方の累計額は、資産を減らす勘定。財政状態計算書（SFP）で原価から引く。お金は動かないので、現金の勘定は出てこない。']
        },
        {
          title: 'なぜ？ 原価を直接減らさない理由',
          list: ['元の値段（原価）と、使った分（累計額）の両方が見える', '累計額 ÷ 原価で、資産がどれだけ古くなったか分かる', '固定資産の注記（増減表）には原価と累計額を分けて書く必要がある'],
          after: '累計額は資産のマイナスなので、試算表では貸方の残高になる。減価償却費は費用なので借方の残高。'
        },
        {
          title: '例題: 定額法',
          example: {
            problem: '20X1年1月1日に機械を $20,000 で買った。定額法、耐用年数5年、残存価額 $0。決算日は12月31日。20X3年の SPL の減価償却費と、20X3年12月31日の SFP の金額は？',
            steps: ['1年の減価償却費: $20,000 ÷ 5 ＝ $4,000', 'SPL に載るのは今年の分だけ: $4,000', '累計額は3年分: $4,000 × 3 ＝ $12,000', '帳簿価額: 原価 $20,000 − 累計額 $12,000 ＝ $8,000'],
            answer: 'SPL: 減価償却費 $4,000。SFP: 原価 $20,000、累計額 $12,000、帳簿価額 $8,000'
          }
        },
        {
          title: '累計額の勘定（20X3年）',
          tAccount: { name: 'Accumulated depreciation', debit: [], credit: [['Balance b/d', '8,000'], ['Depreciation expense', '4,000']], balance: { side: 'debit', label: 'Balance c/d', amount: '12,000' } },
          paras: ['期首の残高 $8,000（2年分）に、今年の $4,000 を貸方に足す。期末は $12,000 の貸方残高。', '締めるときは、少ない借方に「Balance c/d 12,000」と書いて両側を $12,000 にそろえる。翌年は貸方の「Balance b/d 12,000」から始まる（L17 と同じ締め方）。']
        },
        {
          title: '例題: 定率法を試算表から',
          example: {
            problem: '期末の試算表に Plant at cost $50,000、Accumulated depreciation $18,000（今年の分はまだ）。定率法 20%。今年の減価償却費と、期末の帳簿価額は？',
            steps: ['期首の帳簿価額: $50,000 − $18,000 ＝ $32,000', '今年の減価償却費: $32,000 × 20% ＝ $6,400', '新しい累計額: $18,000 ＋ $6,400 ＝ $24,400', '帳簿価額: $50,000 − $24,400 ＝ $25,600'],
            answer: '減価償却費 $6,400、帳簿価額 $25,600'
          }
        },
        {
          title: '財務諸表にこう載る',
          table: { caption: '財政状態計算書（抜粋）', head: ['Non-current assets', '$'], rows: [['Plant: cost', '50,000'], ['Accumulated depreciation', '(24,400)']], total: ['Carrying amount', '25,600'] },
          paras: ['損益計算書には「Depreciation expense $6,400」と費用で載る。かっこの数字はマイナスの意味。']
        },
        {
          title: '期末に締めると、2つの勘定は別の道へ',
          tAccount: { name: 'Depreciation expense', debit: [['Accumulated depreciation', '6,400']], credit: [['Profit or loss', '6,400']] },
          paras: ['減価償却費は「今年の動画」。期末に Dr Profit or loss / Cr Depreciation expense で損益へ振り替え、翌年はゼロから始まる。', '累計額は「写真」。残高を次期に繰り越して積み上げていく。資産を売るか捨てるまで消えない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '定率法の率を原価に掛ける（$50,000 × 20% ＝ $10,000 は誤り）。率は「原価 − 累計額」の帳簿価額に掛ける。ほかにも、SPL に累計額の $24,400 を書く、貸方を原価の勘定にする、借方と貸方を逆にする、の3つが多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仕訳は Dr Depreciation expense / Cr Accumulated depreciation', 'SPL は今年の減価償却費だけ。SFP は原価 − 累計額 ＝ 帳簿価額', '定率法は、原価ではなく帳簿価額に率を掛ける']
        },
        {
          title: '英単語',
          words: [
            ['depreciation expense (charge)', '', '減価償却費（今年の分）'],
            ['accumulated depreciation', '', '減価償却累計額（これまでの合計）'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額（原価 − 累計額）'],
            ['cost', 'コスト', '原価、買った値段'],
            ['charge', 'チャージ', '費用として計上する額'],
            ['non-current assets', '', '非流動資産']
          ]
        }
      ],
      quiz: [
        { q: '減価償却の正しい仕訳は？', choices: ['Dr Depreciation expense / Cr Accumulated depreciation', 'Dr Accumulated depreciation / Cr Depreciation expense', 'Dr Depreciation expense / Cr Cash', 'Dr Depreciation expense / Cr Plant at cost'], answer: 0, explain: '費用を借方、累計額を貸方。2つ目は借方と貸方が逆。お金は動かないので Cash は使わない。ACCA では原価の勘定は残して、累計額で減らす。' },
        { q: 'At 31 December 20X4, before the current year charge, the trial balance shows plant at cost $80,000 and accumulated depreciation $30,000. Depreciation is 10% per year straight-line on cost. What is the depreciation charge for 20X4?', choices: ['$8,000', '$5,000', '$38,000', '$50,000'], answer: 0, explain: '定額法は原価に掛けるので $80,000 × 10% ＝ $8,000。$5,000 は帳簿価額 $50,000 に掛けた（定率法の考え方）間違い。$38,000 は新しい累計額、$50,000 は期首の帳簿価額。' },
        { q: 'A machine cost $60,000 on 1 January 20X1. It is depreciated at 25% per year on the reducing balance basis. What is its carrying amount at 31 December 20X2?', type: 'number', answer: 33750, unit: '$', explain: '20X1: $60,000 × 25% ＝ $15,000 → 帳簿価額 $45,000。20X2: $45,000 × 25% ＝ $11,250 → 帳簿価額 $33,750。' },
        { q: 'Where is accumulated depreciation shown in the financial statements?', choices: ['In the statement of financial position, deducted from cost', 'In the statement of profit or loss, as an expense', 'In the statement of financial position, as a liability', 'In the statement of profit or loss, as income'], answer: 0, explain: '累計額は資産のマイナスとして SFP で原価から引く。SPL に載るのは今年の減価償却費だけ。負債ではない。' },
        { q: '例題の機械（原価 $20,000、定額法5年、残存価額 $0、20X1年1月1日購入）。20X4年12月31日の帳簿価額は？', type: 'number', answer: 4000, unit: '$', explain: '累計額は4年分で $4,000 × 4 ＝ $16,000。帳簿価額は $20,000 − $16,000 ＝ $4,000。' },
        { q: '前の年に $4,000 計上した Depreciation expense の勘定。新しい年の初めの残高は？', choices: ['ゼロ（期末に損益計算書へ振り替え済み）', '$4,000 から積み上げる', '$4,000 の貸方残高'], answer: 0, explain: '減価償却費は1年ごとの費用なので、毎年ゼロから始まる。積み上げていくのは累計額の勘定のほう。' }
      ]
    },

    // ───────────────────────── L49 ─────────────────────────
    {
      id: 'L49',
      no: 49,
      title: '期中に取得した資産の減価償却',
      goal: '年の途中で買った資産の減価償却費を、問題文の方針どおりに計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D5(b)'],
      slides: [
        {
          title: '4月に入社した人の1年目',
          paras: ['4月に入社した人の、その年の給料は9か月分。1月から働いていないので、12か月分はもらわない。', '機械も同じ。4月1日に買った機械は、その年は9か月しか役に立っていない。だから減価償却も9か月分にする。']
        },
        {
          title: '決め方は2つ。問題文が教えてくれる',
          list: ['月割り: 持っていた月数で割る。英語では "on a monthly basis"、"pro rata"、"time-apportioned"', '年単位: 買った年は1年分、売った年はゼロ。英語では "a full year\'s charge in the year of acquisition and none in the year of disposal"'],
          after: 'どちらで計算するかは、問題文の英語で必ず指定される。読み飛ばすと答えがずれる。'
        },
        {
          title: '図で見る: 4月1日に買った場合',
          svg: `<svg viewBox="0 0 440 200" role="img" aria-label="4月1日に買った機械は1年目に9か月分だけ減価償却する" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">4月1日に買った機械の1年目</text><rect x="20" y="50" width="400" height="40" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="120" y="50" width="300" height="40" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M53.3 50V90M86.7 50V90M153.3 50V90M186.7 50V90M220 50V90M253.3 50V90M286.7 50V90M320 50V90M353.3 50V90M386.7 50V90" stroke="var(--edge)" stroke-width="1"/><text x="36.7" y="75" text-anchor="middle" fill="var(--quiet)">1</text><text x="70" y="75" text-anchor="middle" fill="var(--quiet)">2</text><text x="103.3" y="75" text-anchor="middle" fill="var(--quiet)">3</text><text x="136.7" y="75" text-anchor="middle" fill="var(--ink)">4</text><text x="170" y="75" text-anchor="middle" fill="var(--ink)">5</text><text x="203.3" y="75" text-anchor="middle" fill="var(--ink)">6</text><text x="236.7" y="75" text-anchor="middle" fill="var(--ink)">7</text><text x="270" y="75" text-anchor="middle" fill="var(--ink)">8</text><text x="303.3" y="75" text-anchor="middle" fill="var(--ink)">9</text><text x="336.7" y="75" text-anchor="middle" fill="var(--ink)">10</text><text x="370" y="75" text-anchor="middle" fill="var(--ink)">11</text><text x="403.3" y="75" text-anchor="middle" fill="var(--ink)">12</text><text x="20" y="116" fill="var(--quiet)">1〜3月: まだ持っていない</text><text x="420" y="116" text-anchor="end" fill="var(--ink)">4〜12月: 9か月使った</text><text x="220" y="154" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">年間 $9,000 × 9/12 ＝ $6,750</text><text x="220" y="182" text-anchor="middle" fill="var(--quiet)">決算日は12月31日、数字は月</text></svg>`
        },
        {
          title: '例題: 定額法の月割り',
          example: {
            problem: '20X5年4月1日に機械を $36,000 で買った。定額法、耐用年数4年、残存価額 $0。決算日は12月31日。20X5年の減価償却費は？（①月割りの場合 ②買った年は1年分の場合）',
            steps: ['1年分: $36,000 ÷ 4 ＝ $9,000', '持っていた月: 4月〜12月 ＝ 9か月', '① 月割り: $9,000 × 9/12 ＝ $6,750', '② 買った年は1年分: $9,000'],
            answer: '① $6,750 ② $9,000'
          }
        },
        {
          title: '月の数え方',
          list: ['4月1日に買って12月31日が決算日 → 4月〜12月で9か月', '10月1日に買った → 10月〜12月で3か月', '決算日が6月30日で、9月1日に買った → 9月〜翌年6月で10か月'],
          note: { kind: 'tip', text: '買った月から決算日の月まで、指で1か月ずつ数える。「12 − 4 ＝ 8」と引き算だけすると、買った月を数え忘れて1か月少なくなる。' }
        },
        {
          title: '例題: 定率法の1年目と2年目',
          example: {
            problem: '20X5年10月1日に車両を $24,000 で買った。定率法 25%、月割り。決算日は12月31日。20X5年と20X6年の減価償却費は？',
            steps: ['20X5年は10月〜12月の3か月: $24,000 × 25% × 3/12 ＝ $1,500', '20X5年末の帳簿価額: $24,000 − $1,500 ＝ $22,500', '20X6年は1年まるごと持っている: $22,500 × 25% ＝ $5,625', '20X6年末の帳簿価額: $22,500 − $5,625 ＝ $16,875'],
            answer: '20X5年 $1,500、20X6年 $5,625'
          }
        },
        {
          title: '例題: 前からの資産＋今年買った資産',
          example: {
            problem: '20X6年1月1日の機械の原価は $100,000（全部1年中持っていた）。7月1日に $20,000 の機械を追加で買った。定額法で原価の10%（年）、月割り。決算日12月31日。20X6年の減価償却費は？',
            steps: ['前からの機械: $100,000 × 10% ＝ $10,000（12か月）', '追加の機械: 7月〜12月の6か月。$20,000 × 10% × 6/12 ＝ $1,000', '合計: $10,000 ＋ $1,000 ＝ $11,000'],
            answer: '$11,000'
          }
        },
        {
          title: 'なぜ？ 2つの決め方がある理由',
          paras: ['月割りは、費用を役に立った期間に合わせる（発生主義、accruals basis）ので一番正確。', '年単位の方針は計算が楽になる。資産をたくさん持つ会社では、毎年同じルールを続ければ差は小さく、利益を大きくゆがめない（重要性、materiality）。だからどちらも認められている。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '2年目まで月割りしてしまう（20X6年に $5,625 × 3/12 などとしない。2年目は1年分）。ほかに、月数を1か月少なく数える、定率法の2年目を原価 $24,000 に掛ける、問題の方針を読まずに月割りする、が多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['月割りは「1年分 × 持っていた月数 / 12」', '方針（月割りか、買った年は1年分か）は問題文で必ず確認する', '月割りするのは買った年（と売った年）だけ。その間の年は1年分']
        },
        {
          title: '英単語',
          words: [
            ['pro rata', 'プロ・ラタ', '期間に比例して按分する'],
            ['on a monthly basis', '', '月割りで'],
            ['time-apportioned', '', '期間で按分した'],
            ['year of acquisition', '', '取得した年'],
            ['year of disposal', '', '売却（処分）した年'],
            ['additions', 'アディションズ', '期中に追加で取得した資産']
          ]
        }
      ],
      quiz: [
        { q: '20X3年8月1日に機械を $60,000 で買った。定額法、耐用年数5年、残存価額 $0、月割り。決算日12月31日。20X3年の減価償却費は？', type: 'number', answer: 5000, unit: '$', explain: '1年分は $60,000 ÷ 5 ＝ $12,000。8月〜12月の5か月なので $12,000 × 5/12 ＝ $5,000。' },
        { q: 'An entity with a 31 December year end buys a machine for $30,000 on 1 April 20X7. Depreciation is 20% per year straight-line, and a full year\'s charge is made in the year of acquisition. What is the depreciation charge for 20X7?', choices: ['$6,000', '$4,500', '$1,500', '$24,000'], answer: 0, explain: '方針は「買った年は1年分」なので $30,000 × 20% ＝ $6,000。$4,500 は月割り（9/12）してしまった答え。$1,500 は3か月分、$24,000 は帳簿価額。' },
        { q: 'A company has a 30 June year end. It bought a vehicle for $40,000 on 1 October 20X4. Depreciation is 25% reducing balance, charged on a monthly basis. What is the depreciation charge for the year ended 30 June 20X5?', type: 'number', answer: 7500, unit: '$', explain: '10月〜翌年6月で9か月。$40,000 × 25% × 9/12 ＝ $7,500。' },
        { q: '上の車両の、20X6年6月30日に終わる年の減価償却費は？', choices: ['$8,125', '$10,000', '$7,500', '$6,094'], answer: 0, explain: '2年目は1年まるごと。帳簿価額 $40,000 − $7,500 ＝ $32,500 に 25% で $8,125。$10,000 は原価に掛けた間違い、$6,094 は2年目も 9/12 にした間違い。' },
        { q: 'Plant at cost on 1 January 20X8 was $200,000. On 1 May 20X8 plant costing $30,000 was bought. Depreciation is 10% per year straight-line on a monthly basis. What is the total depreciation charge for the year ended 31 December 20X8?', choices: ['$22,000', '$23,000', '$20,000', '$22,250'], answer: 0, explain: '前からの分 $200,000 × 10% ＝ $20,000。追加分は5月〜12月の8か月で $30,000 × 10% × 8/12 ＝ $2,000。合計 $22,000。$23,000 は追加分を1年分、$22,250 は9か月で数えた間違い、$20,000 は追加分を忘れた答え。' }
      ]
    },

    // ───────────────────────── L50 ─────────────────────────
    {
      id: 'L50',
      no: 50,
      title: '耐用年数・残存価額の変更',
      goal: '耐用年数や残存価額を見直したあとの減価償却費を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D5(f)'],
      slides: [
        {
          title: 'スマホの使う年数を見直す',
          paras: ['4年使うつもりでスマホを買った。2年たって、まだ調子がよく、あと4年は使えそうだと分かった。', '過去2年の計算をやり直す必要はない。今残っている価値を、これからの4年で割り直せばよい。', '会計の考え方もまったく同じ。']
        },
        {
          title: 'ルール: 残りを残りで割る',
          formula: '新しい償却費 ＝（帳簿価額 − 新しい残存価額）÷ 残りの耐用年数',
          paras: ['耐用年数と残存価額は、どちらも見積り（estimate）。IAS 16 では少なくとも毎年度末に見直す。', '見直して変えたら「会計上の見積りの変更」。将来に向かって（prospectively）適用し、過去の年は直さない。']
        },
        {
          title: 'なぜ？ 過去を直さない理由',
          paras: ['昔の見積りは、その時点で手に入った一番よい情報で決めたもの。間違い（誤り）ではない。', '新しい情報が入ったので、それをこれからの計算に反映するだけ。過去の財務諸表を何度も作り直すと、かえって読む人が混乱する。']
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 200" role="img" aria-label="見直し前の3年はそのまま、残りの5年で割り直す" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">見直しより前は直さない</text><text x="95" y="62" text-anchor="middle" fill="var(--quiet)">これまでの3年</text><text x="295" y="62" text-anchor="middle" fill="var(--ink)">残り5年で割り直す</text><rect x="20" y="76" width="46" height="44" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="70" y="76" width="46" height="44" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="120" y="76" width="46" height="44" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="43" y="103" text-anchor="middle" fill="var(--quiet)">5,000</text><text x="93" y="103" text-anchor="middle" fill="var(--quiet)">5,000</text><text x="143" y="103" text-anchor="middle" fill="var(--quiet)">5,000</text><rect x="170" y="76" width="250" height="44" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M220 76V120M270 76V120M320 76V120M370 76V120" stroke="var(--accent)" stroke-width="1"/><text x="195" y="103" text-anchor="middle" fill="var(--ink)">7,000</text><text x="245" y="103" text-anchor="middle" fill="var(--ink)">7,000</text><text x="295" y="103" text-anchor="middle" fill="var(--ink)">7,000</text><text x="345" y="103" text-anchor="middle" fill="var(--ink)">7,000</text><text x="395" y="103" text-anchor="middle" fill="var(--ink)">7,000</text><text x="95" y="148" text-anchor="middle" fill="var(--quiet)">累計 15,000</text><text x="295" y="148" text-anchor="middle" fill="var(--ink)">35,000 ÷ 5</text><text x="220" y="184" text-anchor="middle" fill="var(--ink)">残っている帳簿価額を、残りの年数で割る</text></svg>`,
          caption: '原価 $50,000、最初は10年で償却。3年たったところで、残り5年に見直した例（次の例題）。'
        },
        {
          title: '例題: 耐用年数の見直し',
          example: {
            problem: '20X1年1月1日に機械を $50,000 で買った。定額法、耐用年数10年、残存価額 $0。20X4年1月1日に、残りの耐用年数を5年に見直した。20X4年の減価償却費は？',
            steps: ['最初の1年分: $50,000 ÷ 10 ＝ $5,000', '20X1〜20X3年の3年分の累計額: $15,000', '20X4年1月1日の帳簿価額: $50,000 − $15,000 ＝ $35,000', '残り5年で割る: $35,000 ÷ 5 ＝ $7,000'],
            answer: '$7,000（20X4年末の帳簿価額は $28,000）'
          }
        },
        {
          title: '例題: 残存価額の見直し',
          example: {
            problem: '20X2年1月1日に車両を $30,000 で買った。定額法、耐用年数6年、残存価額 $6,000。20X4年1月1日に残存価額を $2,000 に見直した（残り4年は変わらない）。20X4年の減価償却費は？',
            steps: ['最初の1年分: ($30,000 − $6,000) ÷ 6 ＝ $4,000', '2年分の累計額: $8,000。帳簿価額: $30,000 − $8,000 ＝ $22,000', '新しい残存価額を引く: $22,000 − $2,000 ＝ $20,000', '残り4年で割る: $20,000 ÷ 4 ＝ $5,000'],
            answer: '$5,000'
          }
        },
        {
          title: '例題: 「全体で」か「残り」か',
          example: {
            problem: '20X1年1月1日に $40,000 で買った資産。定額法8年、残存価額 $0。20X3年1月1日に、耐用年数を「全体で（total）6年」に見直した。20X3年の減価償却費は？',
            steps: ['1年分: $40,000 ÷ 8 ＝ $5,000。2年分の累計額 $10,000', '帳簿価額: $40,000 − $10,000 ＝ $30,000', '全体で6年、もう2年使ったので、残りは 6 − 2 ＝ 4年', '$30,000 ÷ 4 ＝ $7,500'],
            answer: '$7,500（残り6年と読むと $5,000 になり誤り）'
          }
        },
        {
          title: '仕訳は今までと同じ',
          journal: [
            { side: 'Dr', account: 'Depreciation expense（減価償却費）', amount: '7,000' },
            { side: 'Cr', account: 'Accumulated depreciation（減価償却累計額）', amount: '7,000' }
          ],
          paras: ['過去の不足分をまとめて取り戻す仕訳は作らない。変わるのは、今年からの金額だけ。'],
          note: { kind: 'tip', text: '償却方法を変えたとき（定額法 → 定率法など）も同じ考え方。その時点の帳簿価額から、新しい方法で計算する。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '原価を残りの年数で割る（$50,000 ÷ 5 ＝ $10,000 は誤り。割るのは帳簿価額）。ほかに、過去の差額を今年の費用に足す、「全体の年数」と「残りの年数」を取り違える、新しい残存価額を引き忘れる、が多い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['見積りの変更は将来に向かって適用。過去は直さない', '新しい償却費 ＝（帳簿価額 − 新しい残存価額）÷ 残りの年数', '"total" なら、使い終わった年数を引いて残りを出す']
        },
        {
          title: '英単語',
          words: [
            ['estimate', 'エスティメイト', '見積り'],
            ['prospectively', 'プロスペクティブリー', '将来に向かって（過去は直さない）'],
            ['retrospectively', 'レトロスペクティブリー', 'さかのぼって（過去を直す）'],
            ['remaining useful life', '', '残りの耐用年数'],
            ['total useful life', '', '全体の耐用年数（買った時から）'],
            ['residual value', 'レジデュアル・バリュー', '残存価額']
          ]
        }
      ],
      quiz: [
        { q: 'A machine was bought on 1 January 20X1 for $90,000. It was depreciated straight-line over 9 years with no residual value. On 1 January 20X4 the remaining useful life was revised to 4 years. What is the depreciation charge for 20X4?', type: 'number', answer: 15000, unit: '$', explain: '1年分 $10,000 × 3年 ＝ 累計 $30,000。帳簿価額 $60,000 を残り4年で割って $15,000。' },
        { q: 'A change in the estimated useful life of an asset should be accounted for:', choices: ['Prospectively, from the date of the change', 'Retrospectively, by restating prior years', 'By including the difference for past years in this year\'s charge', 'Only if the asset has been revalued'], answer: 0, explain: '見積りの変更なので将来に向かって適用。過去の年は作り直さず、過去の差額をまとめて今年に入れることもしない。' },
        { q: '20X1年1月1日に車両を $20,000 で買った。定額法5年、残存価額 $5,000。20X3年1月1日に残存価額を $2,000 に見直した（残り3年は変わらない）。20X3年の減価償却費は？', choices: ['$4,000', '$3,600', '$6,000', '$4,667'], answer: 0, explain: '最初は ($20,000 − $5,000) ÷ 5 ＝ $3,000。2年分で累計 $6,000、帳簿価額 $14,000。($14,000 − $2,000) ÷ 3 ＝ $4,000。$3,600 は最初から計算し直した間違い、$4,667 は残存価額を引き忘れた間違い、$6,000 は累計額（費用ではない）。' },
        { q: 'An asset costing $24,000 was bought on 1 January 20X5 and depreciated straight-line over 6 years with no residual value. On 1 January 20X7 its total useful life was revised to 4 years. What is the depreciation charge for 20X7?', choices: ['$8,000', '$4,000', '$6,000', '$16,000'], answer: 0, explain: '1年分 $4,000 × 2年で累計 $8,000、帳簿価額 $16,000。全体で4年、もう2年使ったので残りは2年。$16,000 ÷ 2 ＝ $8,000。$4,000 は「残り4年」と読んだ間違い、$6,000 は原価を4で割った間違い。' },
        { q: '耐用年数を見直して、毎年の減価償却費が増えた。過去の年の不足分はどうする？', choices: ['何もしない。今年以降の償却費が変わるだけ', '過去の不足分を今年の費用にまとめて足す', '過去の財務諸表を作り直す'], answer: 0, explain: '見積りの変更は将来に向かって適用する。過去の分を取り戻す仕訳は作らない。' }
      ]
    },

    // ───────────────────────── L51 ─────────────────────────
    {
      id: 'L51',
      no: 51,
      title: '売却損益の計算と記帳',
      goal: '有形固定資産を売ったときの売却損益を計算し、売却の仕訳と勘定を書けるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D4(e)', 'D4(f)'],
      slides: [
        {
          title: '3年乗った車を売る',
          paras: ['200万円で買った車に3年乗った。帳簿の上では120万円分を使ったことにしていて、残りの帳簿価額は80万円。', 'この車が中古で100万円で売れた。得したのは 100万 − 80万 ＝ 20万円。', '「200万で買ったのに100万でしか売れなかったから100万の損」ではない。使った120万円分は、もう毎年の費用に入れてあるから。']
        },
        {
          title: 'ルール: 帳簿価額と比べる',
          formula: '売却損益 ＝ 売却代金 − 売った日の帳簿価額',
          paras: ['プラスなら売却益（profit / gain on disposal）、マイナスなら売却損（loss on disposal）。どちらも損益計算書（SPL）に載せる。', '売却益は売上収益（revenue）ではない。本業の売上とは分けて表示する。売るのに費用がかかったら、代金から引いて考える。']
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="売却代金が帳簿価額を上回った分が売却益" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">比べるのは原価ではなく帳簿価額</text><text x="20" y="83" fill="var(--ink)">帳簿価額</text><rect x="100" y="60" width="250" height="36" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="112" y="83" fill="var(--ink)">$10,000</text><text x="20" y="133" fill="var(--ink)">売却代金</text><rect x="100" y="110" width="300" height="36" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="112" y="133" fill="var(--ink)">$12,000</text><rect x="350" y="110" width="50" height="36" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><path d="M350 52V154" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><text x="420" y="176" text-anchor="end" font-weight="600" fill="var(--ink)">売却益 $2,000</text><text x="220" y="212" text-anchor="middle" font-size="15" fill="var(--ink)">売却代金 − 帳簿価額 ＝ 売却益</text></svg>`,
          caption: '次の例題のバン（原価 $25,000）の場合。'
        },
        {
          title: 'なぜ？ 売却損益の正体',
          paras: ['減価償却は見積り。実際にいくらで売れるかは、売るまで分からない。', '売却益が出たのは、結果として減価償却が多すぎたから。売却損が出たのは、減価償却が足りなかったから（見積りどおりに価値が減るとは限らない）。', 'つまり売却損益は、これまでの減価償却のズレを最後に調整する数字。だから売上とは別物になる。']
        },
        {
          title: '例題: 期首に売った場合',
          example: {
            problem: '20X1年1月1日にバンを $25,000 で買った。定額法5年、残存価額 $0。20X4年1月1日に $12,000 の現金で売った。決算日は12月31日。売却損益は？',
            steps: ['1年分の減価償却費: $25,000 ÷ 5 ＝ $5,000', '売った日までの累計額: 20X1〜20X3年の3年分で $15,000', '売った日の帳簿価額: $25,000 − $15,000 ＝ $10,000', '売却損益: $12,000 − $10,000 ＝ ＋$2,000'],
            answer: '$2,000 の売却益'
          }
        },
        {
          title: '売却の仕訳（4本）',
          journal: [
            { side: 'Dr', account: 'Disposal account（売却勘定）', amount: '25,000' },
            { side: 'Cr', account: 'Motor vehicles – cost', amount: '25,000' },
            { side: 'Dr', account: 'Accumulated depreciation', amount: '15,000' },
            { side: 'Cr', account: 'Disposal account', amount: '15,000' },
            { side: 'Dr', account: 'Cash', amount: '12,000' },
            { side: 'Cr', account: 'Disposal account', amount: '12,000' },
            { side: 'Dr', account: 'Disposal account', amount: '2,000' },
            { side: 'Cr', account: 'Profit or loss（売却益）', amount: '2,000' }
          ],
          paras: ['①原価を消す ②累計額を消す ③代金を入れる ④差額を損益へ。掛けで売ったら Cash の代わりに Other receivables（未収入金）。本業の売掛金（trade receivables）とは分ける。', '売却損のときは④が逆になり、Dr Profit or loss（売却損）/ Cr Disposal account。']
        },
        {
          title: '売却勘定で見る',
          tAccount: { name: 'Disposal account', debit: [['Motor vehicles – cost', '25,000'], ['Profit on disposal (SPL)', '2,000']], credit: [['Accumulated depreciation', '15,000'], ['Cash', '12,000']] },
          paras: ['売却勘定は、売る資産の情報を1か所に集める箱。両側の合計はどちらも $27,000。', '差額が借方側に入ったら売却益、貸方側に入ったら売却損。売った後は、原価も累計額も SFP から消える。']
        },
        {
          title: '例題: 年の途中で売った場合',
          example: {
            problem: '20X2年1月1日に機械を $40,000 で買った。定額法で原価の20%（年）、月割り。20X5年9月30日に $9,000 で売った。決算日12月31日。売却損益は？',
            steps: ['1年分: $40,000 × 20% ＝ $8,000', '20X2〜20X4年の3年分: $24,000', '20X5年は1月〜9月の9か月分: $8,000 × 9/12 ＝ $6,000。累計 $30,000', '帳簿価額 $10,000。売却損益: $9,000 − $10,000 ＝ −$1,000'],
            answer: '$1,000 の売却損（「売った年はゼロ」の方針なら累計 $24,000、帳簿価額 $16,000、売却損 $7,000）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '原価と比べる（$12,000 − $25,000 で $13,000 の損は誤り）。ほかに、売った年の減価償却（方針どおり）を忘れる、代金を売上に入れる、累計額を消し忘れる、が多い。方針で売却損益は変わるが、その年の減価償却費＋売却損の合計（上の例では $7,000）は同じになる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売却損益 ＝ 売却代金 − 売った日の帳簿価額', '売却勘定に、原価（借方）・累計額（貸方）・代金（貸方）を集め、差額が損益', '売却益は売上ではない。減価償却のズレの調整']
        },
        {
          title: '英単語',
          words: [
            ['disposal', 'ディスポーザル', '処分、売却'],
            ['disposal account', '', '売却勘定'],
            ['proceeds', 'プロシーズ', '売却代金'],
            ['profit (gain) on disposal', '', '売却益'],
            ['loss on disposal', '', '売却損'],
            ['part exchange', 'パート・エクスチェンジ', '下取り（次のレッスン）']
          ]
        }
      ],
      quiz: [
        { q: 'A vehicle was bought on 1 January 20X2 for $32,000 and depreciated at 25% per year straight-line with no residual value. It was sold on 1 January 20X5 for $10,000. What was the profit or loss on disposal? (Enter a loss as a negative number.)', type: 'number', answer: 2000, unit: '$', explain: '1年分 $8,000 × 3年 ＝ 累計 $24,000。帳簿価額 $8,000。$10,000 − $8,000 ＝ $2,000 の売却益。' },
        { q: 'Which journal entry removes the accumulated depreciation of an asset that has been sold?', choices: ['Dr Accumulated depreciation, Cr Disposal account', 'Dr Disposal account, Cr Accumulated depreciation', 'Dr Accumulated depreciation, Cr Depreciation expense', 'Dr Depreciation expense, Cr Disposal account'], answer: 0, explain: '累計額はふだん貸方残高なので、消すには借方に書く。相手は売却勘定。2つ目は逆。減価償却費の勘定は使わない。' },
        { q: '機械 原価 $50,000、20X1年1月1日に購入。定額法10年、残存価額 $0、月割り。20X4年3月31日に $30,000 で売った。決算日12月31日。売却損益は？（損失はマイナスで入力）', type: 'number', answer: -3750, unit: '$', explain: '1年分 $5,000。累計は3年分 $15,000 ＋ 20X4年の3か月分 $1,250 ＝ $16,250。帳簿価額 $33,750。$30,000 − $33,750 ＝ −$3,750（売却損）。' },
        { q: 'In the disposal account, the balancing figure needed to make the two sides agree is on the debit side. This figure is:', choices: ['A profit on disposal', 'A loss on disposal', 'Sales revenue', 'The depreciation charge for the year'], answer: 0, explain: '貸方（累計額＋代金）が借方（原価）より多いので、借方に差額を入れて合わせる。仕訳は Dr Disposal / Cr Profit or loss で、売却益。貸方側に入るなら売却損。' },
        { q: '例題の機械（原価 $40,000、年 $8,000、20X2年1月1日購入）を20X5年9月30日に $18,000 で売った。方針は「買った年は1年分、売った年はゼロ」。売却損益は？', choices: ['$2,000 の利益', '$8,000 の利益', '$22,000 の損失', '$6,000 の損失'], answer: 0, explain: '売った年はゼロなので累計は3年分 $24,000、帳簿価額 $16,000。$18,000 − $16,000 ＝ $2,000 の利益。$8,000 は月割りで計算した答え、$22,000 は原価と比べた間違い、$6,000 は累計額と比べた間違い。' },
        { q: '売却益 $2,000 は損益計算書のどこに載る？', choices: ['売上収益（revenue）に入れる', '売上とは分けて、売却益として表示する', '損益計算書には載せず、資本に直接入れる'], answer: 1, explain: '売却益は本業の売上ではなく、減価償却のズレの調整。SPL に載せるが、売上とは分けて表示する。' }
      ]
    }
  ],
  cards: [
    { id: 'L47-1', lesson: 'L47', q: '減価償却の方法を選ぶ基準は？', a: '資産が役に立つ（便益が使われる）パターンに合う方法' },
    { id: 'L47-2', lesson: 'L47', q: '定率法が向く資産と理由は？', a: '車両・パソコン。最初に多く役立ち、すぐ古くなり、後で修理代が増えるから' },
    { id: 'L47-3', lesson: 'L47', q: '定額法が向く資産の例は？', a: '建物、備品（机・棚）、期間の決まった借りた建物' },
    { id: 'L47-4', lesson: 'L47', q: '普通は減価償却しない資産は？', a: '土地。耐用年数に限りがないから' },
    { id: 'L47-5', lesson: 'L47', q: '方法を変えると何が変わり、何が変わらない？', a: '変わるのは費用にする年。耐用年数全体の合計は同じ' },
    { id: 'L47-6', lesson: 'L47', q: '償却方法を変えたらどう扱う？', a: '会計上の見積りの変更。将来に向かって適用し、過去は直さない' },
    { id: 'L48-1', lesson: 'L48', q: '減価償却の仕訳は？', a: 'Dr Depreciation expense / Cr Accumulated depreciation' },
    { id: 'L48-2', lesson: 'L48', q: '減価償却累計額はどこに、どう載る？', a: 'SFP。原価から差し引く（資産のマイナス、貸方残高）' },
    { id: 'L48-3', lesson: 'L48', q: '帳簿価額（carrying amount）の式は？', a: '原価 − 減価償却累計額' },
    { id: 'L48-4', lesson: 'L48', q: 'SPL に載る減価償却費はいくら分？', a: 'その年の分だけ（累計ではない）' },
    { id: 'L48-5', lesson: 'L48', q: '定率法の率を掛けるのは？', a: '期首の帳簿価額（原価 − 累計額）。原価ではない' },
    { id: 'L48-6', lesson: 'L48', q: 'なぜ原価の勘定を直接減らさない？', a: '元の値段と使った分の両方を残して見せるため' },
    { id: 'L49-1', lesson: 'L49', q: '期中に買った資産の減価償却、2つの方針は？', a: '月割り／買った年は1年分・売った年はゼロ' },
    { id: 'L49-2', lesson: 'L49', q: '月割りの計算式は？', a: '1年分の減価償却費 × 持っていた月数 / 12' },
    { id: 'L49-3', lesson: 'L49', q: '4月1日に買い、12月31日が決算日。何か月分？', a: '9か月（4月〜12月）' },
    { id: 'L49-4', lesson: 'L49', q: '定率法で期中に買った資産。2年目の計算は？', a: '1年目末の帳簿価額 × 率（1年分、月割りしない）' },
    { id: 'L49-5', lesson: 'L49', q: '前からの資産と期中の追加があるとき、どう計算する？', a: '前からの分は1年分、追加分は月割り。両方を足す' },
    { id: 'L50-1', lesson: 'L50', q: '耐用年数・残存価額を見直したときの扱いは？', a: '会計上の見積りの変更。将来に向かって適用し、過去は直さない' },
    { id: 'L50-2', lesson: 'L50', q: '見直し後の減価償却費の式は？', a: '（帳簿価額 − 新しい残存価額）÷ 残りの耐用年数' },
    { id: 'L50-3', lesson: 'L50', q: '「total useful life を6年に見直し」、2年使用済み。残りは？', a: '4年（6 − 2）' },
    { id: 'L50-4', lesson: 'L50', q: '耐用年数・残存価額はいつ見直す？', a: '少なくとも毎年度末（IAS 16）' },
    { id: 'L50-5', lesson: 'L50', q: 'なぜ過去の年を直さない？', a: '昔の見積りは当時の最善の情報で、誤りではないから' },
    { id: 'L51-1', lesson: 'L51', q: '売却損益の式は？', a: '売却代金 − 売った日の帳簿価額' },
    { id: 'L51-2', lesson: 'L51', q: '売却で消す2つの勘定は？', a: '資産の原価と、その減価償却累計額' },
    { id: 'L51-3', lesson: 'L51', q: '売却勘定の借方・貸方に入るものは？', a: '借方: 原価。貸方: 累計額と売却代金。差額が損益' },
    { id: 'L51-4', lesson: 'L51', q: '売却勘定の差額が借方側に入ったら？', a: '売却益（Dr Disposal / Cr Profit or loss）' },
    { id: 'L51-5', lesson: 'L51', q: '売却益が出るのはなぜ？', a: '結果として減価償却が多すぎたから（見積りのズレの調整）' },
    { id: 'L51-7', lesson: 'L51', q: '売却損のときの最後の仕訳は？', a: 'Dr Profit or loss（売却損）/ Cr Disposal account' },
    { id: 'L51-6', lesson: 'L51', q: '期中に売ったら、最初にすることは？', a: '方針どおり、売った日までの減価償却を計上する' }
  ]
});
