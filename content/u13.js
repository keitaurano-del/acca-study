(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 13,
  part: 8,
  partTitle: '見越しと繰延',
  lessons: [
    {
      id: 'L62',
      no: 62,
      title: '発生主義の考え方',
      goal: 'お金が動いた時ではなく、発生した期間に収益と費用を記録する理由を説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['B1(a)ii', 'D7(a)'],
      slides: [
        {
          title: 'スマホ代は「使った月」の出費',
          paras: ['11月に使ったスマホ代は、12月に引き落とされる。「11月にいくら使った？」と聞かれたら、11月に使った分を答えるのが自然。', 'お金が出ていった日ではなく、使った月で数える。会計ではこの考え方を発生主義（accrual accounting）という。']
        },
        {
          title: '2つの数え方',
          list: ['現金主義（cash basis）: お金が入った・出た時に記録する', '発生主義（accruals basis）: 取引の効果が生じた期間に記録する。お金の出入りが別の期間でもかまわない'],
          after: '会社の財務諸表は発生主義で作る。国際的な会計ルール（IFRS）がそう決めている。ただし、お金の動きそのものを見せるキャッシュフロー計算書だけは別。',
          formula: '収益と費用は「お金が動いた時」ではなく「発生した時」に記録する'
        },
        {
          title: 'たこ焼き屋の12月の電気代',
          paras: ['たこ焼き屋の決算日（year end）は12月31日。12月に使った電気代 $200 の請求書は1月に届き、1月に払う。', '現金主義なら 20X2年の費用。発生主義では、電気を使った 20X1年の費用になる。'],
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="12月の電気代は使った年の費用になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">電気代は「使った年」の費用</text><rect x="20" y="52" width="192" height="164" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="228" y="52" width="192" height="164" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">20X1年</text><text x="324" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">20X2年</text><rect x="34" y="96" width="164" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="122" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">12月に電気を使う</text><text x="116" y="146" text-anchor="middle" fill="var(--ink)">費用 $200 はここ</text><rect x="242" y="96" width="164" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="122" text-anchor="middle" font-size="15" fill="var(--ink)">1月に請求・支払い</text><text x="324" y="146" text-anchor="middle" fill="var(--quiet)">現金が出るだけ</text><text x="116" y="194" text-anchor="middle" fill="var(--ink)">発生主義はこちら</text><text x="324" y="194" text-anchor="middle" fill="var(--quiet)">現金主義だとこちら</text><line x1="220" y1="44" x2="220" y2="228" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="220" y="250" text-anchor="middle" fill="var(--ink)">決算日 12月31日</text><text x="220" y="278" text-anchor="middle" fill="var(--ink)">お金が動いた日ではなく、使った期間で数える</text></svg>`
        },
        {
          title: '売上も同じ。実はもう使っている',
          paras: ['12月に掛けでたこ焼きを $500 売り、代金は1月に入る。これは 20X1年の売上になる。', '掛け売上を「売った時」に記録したのは、発生主義そのもの。この第8部では、費用や家賃・利息の収入についても同じことを、期末にまとめて確かめる。']
        },
        {
          title: 'なぜ？ 発生した期間で数える理由',
          paras: ['その期間のもうけを正しく出すため。売上と、その売上を稼ぐためにかかった費用を同じ期間に並べる。これを対応（matching）という。', '12月に家賃を3か月分まとめて払ったとする。現金主義だと12月だけ大赤字、1月と2月は家賃ゼロで大もうけに見える。お店の実力は毎月同じなのに、数字がぶれて比べられない。']
        },
        {
          title: '利益と現金は別もの',
          paras: ['発生主義では、もうけ（利益）と現金の増え方がずれる。12月の電気代 $200 は 20X1年の費用になるが、12月31日の現金はまだ減っていない。', 'これまでの例では、もうけと同じだけ現金が増えていた。いつもそうとは限らない。現金の動きは、あとで学ぶキャッシュフロー計算書で別に見る。']
        },
        {
          title: '期末に直す4つのずれ',
          paras: ['決算日をまたぐと、お金の時期と発生の時期がずれる。ずれは4種類しかない。次のレッスンから1つずつ学ぶ。'],
          table: { caption: '4つのずれ', head: ['ずれ', '名前'], rows: [['費用をまだ払っていない', '未払費用（accruals）'], ['費用を先に払った', '前払費用（prepayments）'], ['収益をまだもらっていない', '未収収益（accrued income）'], ['収益を先にもらった', '前受収益（deferred income）']] }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「払った＝費用」「請求書が来た＝費用」ではない。費用になるのは、サービスを使った期間。請求書がまだ来ていなくても、使った分は今年の費用になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['発生主義＝お金が動いた時ではなく、発生した期間に記録する', '売上とそのための費用を同じ期間に並べる（matching）', '利益と現金の増え方は一致しないことがある']
        },
        {
          title: '英単語',
          words: [
            ['accrual accounting', 'アクルーアル アカウンティング', '発生主義会計'],
            ['accruals basis', 'アクルーアルズ ベーシス', '発生主義（accruals concept とも）'],
            ['cash basis', 'キャッシュ ベーシス', '現金主義'],
            ['matching', 'マッチング', '対応（収益と費用を同じ期間に並べる）'],
            ['reporting period', '', '報告期間（会計期間）'],
            ['year end', 'イヤー エンド', '決算日']
          ]
        }
      ],
      quiz: [
        { q: '決算日が12月31日のお店。12月に使った電気代の請求書が翌年1月に届き、1月に払った。発生主義では、どの年の費用？', choices: ['電気を使った 20X1年', 'お金を払った 20X2年', '請求書が届いた 20X2年', '半分ずつ'], answer: 0, explain: '費用になるのは使った期間。支払いや請求書の時期ではない。' },
        { q: 'Which of the following best describes accrual accounting?', choices: ['Transactions are recorded when cash is received or paid', 'The effects of transactions are recorded in the periods in which they occur, even if the cash is received or paid in a different period', 'Assets are recorded at the amount originally paid for them', 'The business is assumed to continue trading for the foreseeable future'], answer: 1, explain: '1つ目は現金主義。3つ目は取得原価（historical cost）、4つ目は継続企業（going concern）の説明で、どちらも別の原則。' },
        { q: 'Which financial statement is NOT prepared using the accruals basis?', choices: ['Statement of profit or loss', 'Statement of financial position', 'Statement of cash flows', 'Statement of changes in equity'], answer: 2, explain: 'キャッシュフロー計算書は現金の出入りそのものを見せるので、発生主義では作らない。IFRS もこれだけを例外にしている。' },
        { q: 'ある月、発生主義で計算したもうけが $1,000 だった。その月、現金も必ず $1,000 増えている？', choices: ['必ず $1,000 増えている', '増えるとは限らない', '必ず減っている'], answer: 1, explain: '掛け売上や未払いの費用があると、もうけと現金の動きはずれる。' },
        { q: '発生主義でいう「対応（matching）」とは？', choices: ['売上と、それを稼ぐための費用を同じ期間に記録すること', '借方と貸方の金額を一致させること', '現金の残高と帳簿の残高を一致させること', '費用を、お金を払った月に記録すること'], answer: 0, explain: '2つ目は複式簿記、3つ目は銀行の残高照合の話。4つ目は現金主義で、発生主義とは逆の考え方。' }
      ]
    },
    {
      id: 'L63',
      no: 63,
      title: '未払費用（accruals）',
      goal: '使ったのにまだ払っていない費用を計算し、買掛金・未払金と区別して、仕訳と今年の費用の額を出せるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['D7(a)', 'D7(b)'],
      slides: [
        {
          title: 'まだ払っていない、でも使った',
          paras: ['12月のスマホ代 8,000円は1月に引き落とされる。12月31日の時点で、使ったのにまだ払っていない。', '年末に家計を締めるなら、この8,000円も今年の出費に入れて、「1月に払う借り」とメモしておく。これが未払費用の考え方。']
        },
        {
          title: '未払費用（accruals）とは',
          paras: ['期間中に発生した（使った）のに、決算日までに払っていない費用。決算日の時点で請求書がまだ届いていない（帳簿に記録していない）ので、金額は見積もる。', '期末に、その金額を費用に足し、同じ金額を負債にする。たこ焼き屋の12月の電気代 $200 なら、次の仕訳になる。'],
          journal: [
            { side: 'Dr', account: 'Electricity expense（電気代）', amount: '200' },
            { side: 'Cr', account: 'Accruals（未払費用）', amount: '200' }
          ]
        },
        {
          title: 'なぜ？ 費用に足して負債にする理由',
          paras: ['費用に足すのは、電気を使ったのが今年だから（発生主義）。足さないと今年の費用が少なすぎて、もうけが多く見える。', '負債にするのは、使った電気の代金を後で払う義務があるから。未払費用はふつう1年以内に払うので、流動負債（current liabilities）に入る。']
        },
        {
          title: '請求書が決算日をまたぐとき',
          paras: ['電気代やガス代は、使った後でまとめて請求される（in arrears、後払い）。最後に払った請求書が決算日より前で終わっていたら、そこから決算日までの分を足す。'],
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="11月から1月の請求のうち11月と12月の分が今年の未払費用" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">3か月の請求のうち、2か月は今年の分</text><rect x="40" y="60" width="240" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><line x1="160" y1="60" x2="160" y2="116" stroke="var(--accent)" stroke-width="1.25"/><rect x="286" y="60" width="114" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="100" y="94" text-anchor="middle" font-size="16" fill="var(--ink)">11月</text><text x="220" y="94" text-anchor="middle" font-size="16" fill="var(--ink)">12月</text><text x="343" y="94" text-anchor="middle" font-size="16" fill="var(--ink)">1月</text><line x1="283" y1="48" x2="283" y2="130" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="283" y="150" text-anchor="middle" fill="var(--ink)">決算日 12/31</text><text x="160" y="184" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">今年の費用 $300（未払）</text><text x="343" y="184" text-anchor="middle" fill="var(--quiet)">来年の費用 $150</text><text x="220" y="222" text-anchor="middle" fill="var(--ink)">請求 $450（11月〜1月分）は2月に届く</text></svg>`,
          caption: '請求額を月数で割り、決算日までの月数をかける。'
        },
        {
          title: '例題: 1年目の電気代',
          example: {
            problem: 'たこ焼き屋は 20X1年1月1日に開業、決算日は12月31日。20X1年中に払った電気代は $1,200（1月〜10月分）。11月〜1月の3か月分の請求書 $450 は 20X2年2月に届いた。20X1年の電気代（費用）と未払費用は？',
            steps: ['決算日までで、まだ請求されていない月を数える: 11月と12月の2か月', '1か月あたり: $450 ÷ 3 ＝ $150', '未払費用: $150 × 2 ＝ $300', '今年の費用: 払った $1,200 ＋ 未払 $300 ＝ $1,500', '仕訳: Dr Electricity expense $300 / Cr Accruals $300'],
            answer: '電気代 $1,500、未払費用（流動負債）$300'
          }
        },
        {
          title: 'いつも使える式と、2年目の例題',
          formula: '今年の費用 ＝ 支払額 − 期首の未払 ＋ 期末の未払',
          example: {
            problem: '20X2年中に払った電気代は $1,750。この中には、2月に払った請求書 $450（うち $300 は 20X1年の分）が入っている。20X2年12月31日の未払費用は $400。20X2年の電気代は？',
            steps: ['払った $1,750 のうち、20X1年の分 $300 は去年すでに費用にした → 引く', '今年使ったのに、まだ払っていない $400 → 足す', '$1,750 − $300 ＋ $400 ＝ $1,850'],
            answer: '20X2年の電気代は $1,850（式: $1,750 − $300 ＋ $400）'
          }
        },
        {
          title: '請求書が届いたら、未払費用ではない',
          paras: ['立て替えてもらった飲み代は、金額を聞く前は「たぶん4,000円」と見込みでメモする。レシートで金額が決まれば、確定した借りになる。', '未払費用は、決算日までに請求書が届いていない（記帳していない）費用で、金額は見積もる。請求書を受け取って元帳に記録した後の借りは、買掛金（trade payables）やその他の未払金（other payables）になる。']
        },
        {
          title: '商品が届いて、請求書はまだ',
          paras: ['12月29日、たこ焼き屋に小麦粉 $600 が届いた。請求書は1月に届く。商品は今年受け取ったので、今年の仕入に含める。請求書がないので、買掛金ではなく未払費用にする。', '年末に使わずに残っていれば、期末在庫（closing inventory）にも数える。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '600' },
            { side: 'Cr', account: 'Accruals（未払費用）', amount: '600' }
          ]
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '請求額 $450 を全部、未払費用にしない。1月分は来年の費用。期首の未払費用を足してしまう間違いも多い。期首は引く、期末は足す。また、受け取って記帳済みの請求書は、未払費用ではなく買掛金・未払金。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['未払費用＝使ったのに払っておらず、請求書も未記帳の費用（見積もる）。記帳済みなら payables', '仕訳は Dr 費用 / Cr Accruals。未払費用は流動負債', '今年の費用 ＝ 支払額 − 期首の未払 ＋ 期末の未払']
        },
        {
          title: '英単語',
          words: [
            ['accrual', 'アクルーアル', '未払費用（1件分）'],
            ['goods received not invoiced', '', '届いたが請求書がまだの商品（仕入に含め、未払費用にする）'],
            ['trade payables / other payables', '', '買掛金 / その他の未払金（請求書を記帳済みの借り）'],
            ['accruals', 'アクルーアルズ', '未払費用（財政状態計算書の科目名）'],
            ['accrued expense', 'アクルード エクスペンス', '未払費用（同じ意味）'],
            ['in arrears', 'イン アリアーズ', '後払いで'],
            ['current liabilities', '', '流動負債'],
            ['charge', 'チャージ', '損益計算書に載せる費用の額']
          ]
        }
      ],
      quiz: [
        { q: 'A business has a year end of 31 December 20X1. Its electricity bills are paid quarterly in arrears. The last bill paid covered the period to 31 October 20X1. The next bill, for the three months to 31 January 20X2, was $1,200. What accrual should be made at 31 December 20X1?', type: 'number', answer: 800, unit: '$', explain: '11月と12月の2か月分。$1,200 ÷ 3 × 2 ＝ $800。$1,200 全額にすると、1月分（来年の費用）まで入ってしまう。' },
        { q: 'Rent paid during the year was $9,000. The opening accrual was $1,000 and the closing accrual was $1,500. What is the rent expense for the year?', choices: ['$9,500', '$8,500', '$11,500', '$6,500'], answer: 0, explain: '$9,000 − $1,000 ＋ $1,500 ＝ $9,500。$8,500 は期首と期末の足し引きを逆にした答え。$11,500 は両方足した答え。' },
        { q: '12月分の水道代 $80 がまだ払われていない。決算の仕訳は？', choices: ['Dr Water expense $80 / Cr Accruals $80', 'Dr Accruals $80 / Cr Water expense $80', 'Dr Water expense $80 / Cr Cash $80', 'Dr Prepayments $80 / Cr Water expense $80'], answer: 0, explain: '費用を増やし（借方）、負債の未払費用を増やす（貸方）。2つ目は逆。まだ払っていないので Cash は使わない。4つ目は前払費用の仕訳。' },
        { q: '未払費用は財政状態計算書のどこに入る？', choices: ['流動資産', '流動負債', '非流動負債', '資本'], answer: 1, explain: '後で払う義務なので負債。ふつう1年以内に払うので流動負債。' },
        { q: '20X1年中に払った電話代は $1,050。期首（1月1日）の未払費用は $80、期末（12月31日）の未払費用は $110。20X1年の電話代（費用）はいくら？', type: 'number', answer: 1080, unit: '$', explain: '$1,050 − $80 ＋ $110 ＝ $1,080。期首の $80 は去年の費用なので引き、期末の $110 は今年の費用なので足す。' },
        { q: 'At 31 December 20X1 a business has these unpaid items: (1) electricity used in December, for which no invoice had been received by the year end; (2) goods received on 29 December, for which the supplier\'s invoice had not been received; (3) a supplier\'s invoice for November goods, received and recorded in the payables ledger. Which items should be included in accruals?', choices: ['(1) and (2) only', '(1) only', '(1), (2) and (3)', '(2) and (3) only'], answer: 0, explain: '(1) と (2) は決算日に請求書が届いていないので、見積もって未払費用にする。(2) の商品は今年受け取ったので、今年の仕入にも含める。(3) は請求書を受け取り記帳済みなので、未払費用ではなく買掛金（trade payables）。(1) only は届いた商品を見落とした答え。(1), (2) and (3) は記帳済みの請求書まで未払費用にした答え。' }
      ]
    },
    {
      id: 'L64',
      no: 64,
      title: '前払費用（prepayments）',
      goal: '先に払った費用のうち来年の分を計算し、仕訳と今年の費用の額を出せるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D7(a)', 'D7(b)'],
      slides: [
        {
          title: '定期券の残りは「まだ使える権利」',
          paras: ['10月1日に6か月分の定期券を6万円で買った。12月31日までに使ったのは10月〜12月の3か月分、3万円。', '残りの3万円分（1月〜3月）はまだ使っていない。お金はもう出ているが、来年使える権利が残っている。これが前払費用の考え方。']
        },
        {
          title: '前払費用（prepayments）とは',
          paras: ['すでに払ったけれど、次の期間に属する費用。保険料（insurance）や家賃（rent）のように、先に払うもの（in advance）でよく出てくる。', 'たこ焼き屋が10月1日に、1年分の保険料 $1,200 を払った。'],
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="1年分の保険料のうち9か月分は前払費用" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">保険料 $1,200 を10月1日に払った</text><rect x="20" y="60" width="100" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="124" y="60" width="296" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="70" y="86" text-anchor="middle" fill="var(--ink)">10〜12月</text><text x="70" y="108" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$300</text><text x="272" y="86" text-anchor="middle" fill="var(--ink)">1〜9月（9か月）</text><text x="272" y="108" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">$900</text><line x1="122" y1="48" x2="122" y2="134" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="122" y="154" text-anchor="middle" fill="var(--ink)">決算日 12/31</text><text x="70" y="190" text-anchor="middle" fill="var(--ink)">今年の費用</text><text x="272" y="190" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">来年の分＝前払費用（資産）</text><text x="70" y="212" text-anchor="middle" font-size="12.5" fill="var(--quiet)">expense</text><text x="272" y="212" text-anchor="middle" font-size="12.5" fill="var(--quiet)">prepayment</text></svg>`,
          caption: '12か月のうち今年に入るのは3か月。残り9か月分 $900 は来年の費用で、今年末は前払費用（資産）になる。'
        },
        {
          title: '期末の仕訳',
          paras: ['払ったとき、$1,200 全額を保険料（費用）に記録している。期末に、来年の分 $900 を費用から引いて、資産に移す。'],
          journal: [
            { side: 'Dr', account: 'Prepayments（前払費用）', amount: '900' },
            { side: 'Cr', account: 'Insurance expense（保険料）', amount: '900' }
          ],
          after: '今年の保険料は $1,200 − $900 ＝ $300 になる。前払費用は1年以内に使い切るので、流動資産（current assets）に入る。'
        },
        {
          title: 'なぜ？ 前払費用が資産になる理由',
          paras: ['資産は「将来、役に立つもの」。お店はあと9か月、保険に守られる。この権利は、お金を払って手に入れた持ち物と同じ。', '費用から引くのは、今年使ったのが3か月分だけだから（発生主義）。引かないと今年の費用が多すぎて、もうけが少なく見える。']
        },
        {
          title: '例題: 倉庫の家賃（1年目）',
          example: {
            problem: 'たこ焼き屋（決算日12月31日）は倉庫を借り、20X1年4月1日に1年分の家賃 $12,000（20X1年4月〜20X2年3月）を前払いした。20X1年の家賃（費用）と、12月31日の前払費用は？',
            steps: ['1か月あたり: $12,000 ÷ 12 ＝ $1,000', '今年の分: 4月〜12月の9か月 → $9,000', '来年の分: 1月〜3月の3か月 → $3,000（前払費用）', '仕訳: Dr Prepayments $3,000 / Cr Rent expense $3,000'],
            answer: '家賃 $9,000、前払費用（流動資産）$3,000'
          }
        },
        {
          title: '例題: 2年目は期首の前払と値上げ',
          example: {
            problem: '20X2年4月1日に、次の1年分の家賃 $14,400 を払った（値上げ）。20X2年の家賃（費用）と、12月31日の前払費用は？',
            steps: ['1月〜3月: 去年払った前払費用 $3,000 が、今年の費用になる', '4月〜12月: $14,400 ÷ 12 ＝ 月 $1,200。9か月で $10,800', '今年の家賃: $3,000 ＋ $10,800 ＝ $13,800', '期末の前払費用: 20X3年1月〜3月の3か月 × $1,200 ＝ $3,600'],
            answer: '家賃 $13,800、前払費用 $3,600'
          }
        },
        {
          title: 'いつも使える式',
          formula: '今年の費用 ＝ 支払額 ＋ 期首の前払 − 期末の前払',
          paras: ['確かめる: $14,400 ＋ $3,000 − $3,600 ＝ $13,800。', '期首の前払費用は、去年払った今年の分。だから足す。期末の前払費用は、今年払った来年の分。だから引く。未払費用の式とは、足し引きが逆になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '一番多いのは月数の数え間違い。10月1日から12月31日は「10・11・12月」の3か月。もう1つは、期末の前払費用を費用に足してしまう間違い。期末の前払は引く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['前払費用＝払ったけれど、来年に属する費用', '仕訳は Dr Prepayments / Cr 費用。前払費用は流動資産', '今年の費用 ＝ 支払額 ＋ 期首の前払 − 期末の前払']
        },
        {
          title: '英単語',
          words: [
            ['prepayment', 'プリペイメント', '前払費用'],
            ['prepaid expense', 'プリペイド エクスペンス', '前払費用（同じ意味）'],
            ['in advance', 'イン アドバンス', '前払いで'],
            ['current assets', '', '流動資産'],
            ['insurance', 'インシュアランス', '保険料'],
            ['premium', 'プレミアム', '保険の掛け金'],
            ['rent', 'レント', '家賃']
          ]
        }
      ],
      quiz: [
        { q: 'A business with a year end of 31 December paid an annual insurance premium of $2,400 on 1 September 20X1, covering the following 12 months. What is the prepayment at 31 December 20X1?', type: 'number', answer: 1600, unit: '$', explain: '9月〜12月の4か月が今年、20X2年1月〜8月の8か月が来年。$2,400 ÷ 12 × 8 ＝ $1,600。$800 は今年の費用の方。' },
        { q: 'Rent paid during the year was $15,000. The opening prepayment was $2,000 and the closing prepayment was $3,000. What is the rent expense for the year?', choices: ['$14,000', '$16,000', '$20,000', '$10,000'], answer: 0, explain: '$15,000 ＋ $2,000 − $3,000 ＝ $14,000。$16,000 は未払費用の式（期首を引き期末を足す）を使ってしまった答え。' },
        { q: '期末に、来年分の保険料 $500 が前払いになっている。仕訳は？', choices: ['Dr Prepayments $500 / Cr Insurance expense $500', 'Dr Insurance expense $500 / Cr Prepayments $500', 'Dr Insurance expense $500 / Cr Accruals $500', 'Dr Prepayments $500 / Cr Cash $500'], answer: 0, explain: '資産を増やし（借方）、費用を減らす（貸方）。2つ目は逆、3つ目は未払費用の仕訳。お金はもう払っているので Cash は動かない。' },
        { q: '前払費用は財務諸表のどこに載る？', choices: ['財政状態計算書の流動資産', '財政状態計算書の流動負債', '財政状態計算書の非流動資産', '損益計算書の費用'], answer: 0, explain: '来年サービスを受ける権利なので資産。1年以内に使うので流動資産。名前に「費用」とあっても損益計算書ではない。' },
        { q: '決算日は12月31日。1年分の保険料を毎年7月1日に払う。20X1年7月1日に $1,000、20X2年7月1日に $1,200 を払った。20X2年の保険料（費用）はいくら？', type: 'number', answer: 1100, unit: '$', explain: '1月〜6月は 20X1年に払った分: $1,000 × 6/12 ＝ $500。7月〜12月は 20X2年に払った分: $1,200 × 6/12 ＝ $600。合計 $1,100。' }
      ]
    },
    {
      id: 'L65',
      no: 65,
      title: '未収収益・前受収益',
      goal: '家賃や利息などの収入のずれを計算し、仕訳と今年の収益の額を出せるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D7(a)', 'D7(b)'],
      slides: [
        {
          title: 'もらう側にも、ずれがある',
          paras: ['家庭教師をしていて、12月分の謝礼 1万円を1月にもらう。12月に教えたので、12月の稼ぎに入る。', '逆に、3か月分 3万円を12月に先にもらった。まだ教えていない1月・2月の分は、もらいすぎの「借り」。教えるか、返す必要がある。']
        },
        {
          title: '未収収益（accrued income）',
          paras: ['稼いだのに、決算日までにまだもらっていない収益。たこ焼き屋は2階の部屋の1つを、月 $500 の後払いで貸している。12月分の家賃を1月に受け取るなら、12月分は今年の収益になる。'],
          journal: [
            { side: 'Dr', account: 'Accrued income（未収収益）', amount: '500' },
            { side: 'Cr', account: 'Rental income（受取家賃）', amount: '500' }
          ],
          after: '後でお金を受け取る権利なので流動資産。売掛金に似ているが、家賃や利息など本業の売上以外の収入でよく使う。'
        },
        {
          title: '前受収益（deferred income）',
          paras: ['先にもらったのに、決算日までにまだ稼いでいない収益。2階のもう1部屋も、別の人に月 $500 で貸している。この人は12月1日に3か月分 $1,500（12月〜2月）を先に払い、全額を受取家賃に記録した。今年稼いだのは12月分 $500 だけ。'],
          journal: [
            { side: 'Dr', account: 'Rental income（受取家賃）', amount: '1,000' },
            { side: 'Cr', account: 'Deferred income（前受収益）', amount: '1,000' }
          ],
          after: '部屋を貸す義務（貸せなければ返す義務）なので流動負債。名前に「収益」とあっても負債になる。'
        },
        {
          title: '4つのずれの全体図',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="費用と収益それぞれの、お金が後と先のずれ4種類" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">決算日をまたぐ4つのずれ</text><text x="185" y="68" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">お金が後</text><text x="343" y="68" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">お金が先</text><text x="60" y="138" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">費用</text><text x="60" y="246" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">収益</text><rect x="108" y="82" width="154" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="266" y="82" width="154" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="108" y="190" width="154" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="266" y="190" width="154" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="185" y="118" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">未払費用</text><text x="185" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">accruals</text><text x="185" y="166" text-anchor="middle" font-size="15" fill="var(--ink)">負債</text><text x="343" y="118" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">前払費用</text><text x="343" y="140" text-anchor="middle" font-size="12.5" fill="var(--quiet)">prepayments</text><text x="343" y="166" text-anchor="middle" font-size="15" fill="var(--ink)">資産</text><text x="185" y="226" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">未収収益</text><text x="185" y="248" text-anchor="middle" font-size="12.5" fill="var(--quiet)">accrued income</text><text x="185" y="274" text-anchor="middle" font-size="15" fill="var(--ink)">資産</text><text x="343" y="226" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">前受収益</text><text x="343" y="248" text-anchor="middle" font-size="12.5" fill="var(--quiet)">deferred income</text><text x="343" y="274" text-anchor="middle" font-size="15" fill="var(--ink)">負債</text><text x="220" y="318" text-anchor="middle" fill="var(--ink)">資産は、先に払った費用と後でもらう収益</text></svg>`,
          caption: '費用は「後で払う」と負債、「先に払う」と資産。収益はその逆になる。'
        },
        {
          title: 'なぜ？ 収益も「稼いだ期間」で数える',
          paras: ['収益は、商品やサービスを渡して稼いだ期間に記録する。お金をもらった日ではない。', '前払費用と前受収益は、同じ取引の裏表。たこ焼き屋が先に受け取った家賃は、部屋を借りている人の帳簿では前払費用（資産）になる。']
        },
        {
          title: '例題: 受取家賃（未収収益あり）',
          example: {
            problem: '後払いの部屋（月 $500）。20X2年中に受け取った家賃は $5,500。1月1日の未収収益（去年12月分）は $500、12月31日の未収収益（11月・12月分）は $1,000。20X2年の受取家賃（収益）は？',
            steps: ['受け取った $5,500 のうち、$500 は去年の収益 → 引く', '今年稼いだのに、まだもらっていない $1,000 → 足す', '$5,500 − $500 ＋ $1,000 ＝ $6,000', '確かめ: 月 $500 × 12か月 ＝ $6,000'],
            answer: '受取家賃 $6,000、期末の未収収益（流動資産）$1,000'
          }
        },
        {
          title: '例題: 受講料（前受収益あり）',
          example: {
            problem: 'たこ焼き教室の受講料は先払い。20X2年中に受け取った額は $9,000。1月1日の前受収益は $1,200、12月31日の前受収益は $1,800。20X2年の受講料収入は？',
            steps: ['期首の前受 $1,200 は、去年もらって今年教えた分 → 足す', '期末の前受 $1,800 は、今年もらって来年教える分 → 引く', '$9,000 ＋ $1,200 − $1,800 ＝ $8,400'],
            answer: '受講料収入 $8,400、期末の前受収益（流動負債）$1,800'
          }
        },
        {
          title: '収益の式',
          formula: '収益 ＝ 受取額 − 期首の未収 ＋ 期末の未収 ＋ 期首の前受 − 期末の前受',
          paras: ['未収収益: 期首は引き、期末は足す。前受収益: 期首は足し、期末は引く。', '形は費用の式と同じ。「後でもらう」は未払費用と、「先にもらう」は前払費用と、足し引きが同じになる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '前受収益を資産、未収収益を負債と逆に覚えてしまう。名前ではなく理由で考える。「後でお金が入る権利」は資産、「まだサービスを渡していない義務」は負債。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['未収収益＝稼いだのにまだもらっていない収益。流動資産', '前受収益＝もらったのにまだ稼いでいない収益。流動負債', '収益も、お金をもらった日ではなく稼いだ期間で数える']
        },
        {
          title: '英単語',
          words: [
            ['accrued income', 'アクルード インカム', '未収収益'],
            ['deferred income', 'ディファード インカム', '前受収益'],
            ['income received in advance', '', '前受収益（同じ意味）'],
            ['rental income', 'レンタル インカム', '受取家賃'],
            ['interest receivable', '', '受け取る予定の利息（未収利息）'],
            ['subscriptions', 'サブスクリプションズ', '会費・購読料（前受になりやすい）'],
            ['rent in arrears (owed by tenant)', '', '借り手が滞納している家賃＝未収収益']
          ]
        }
      ],
      quiz: [
        { q: 'At 31 December, a tenant owed a business $700 of rent for December. Which journal entry is needed?', choices: ['Dr Accrued income $700, Cr Rental income $700', 'Dr Rental income $700, Cr Accrued income $700', 'Dr Rental income $700, Cr Deferred income $700', 'Dr Deferred income $700, Cr Rental income $700'], answer: 0, explain: '稼いだのにまだもらっていない → 未収収益（資産）を増やし、収益を増やす。2つ目は逆。3つ目は前受収益の仕訳。' },
        { q: 'During the year a business received rent of $12,000 from a tenant. At the start of the year the tenant owed $1,000 of rent. At the end of the year the tenant had paid $2,000 in advance. What is the rental income for the year?', type: 'number', answer: 9000, unit: '$', explain: '受け取った $12,000 には、去年の分 $1,000（期首の未収）と来年の分 $2,000（期末の前受）が入っている。$12,000 − $1,000 − $2,000 ＝ $9,000。' },
        { q: '12月1日に、部屋の家賃3か月分 $900（12月〜2月）を受け取った。決算日12月31日の前受収益はいくら？', type: 'number', answer: 600, unit: '$', explain: '1か月 $300。今年稼いだのは12月分 $300 だけ。1月・2月の $600 が前受収益。' },
        { q: '前受収益は財務諸表のどこに載る？', choices: ['財政状態計算書の流動資産', '財政状態計算書の流動負債', '損益計算書の収益', '資本'], answer: 1, explain: '名前に「収益」があっても、まだ稼いでいないので今年の収益ではない。サービスを渡す義務＝負債。' },
        { q: '次のうち、どちらも資産になる組み合わせは？', choices: ['未収収益と前払費用', '前受収益と未払費用', '未収収益と前受収益', '前払費用と未払費用'], answer: 0, explain: '後でお金が入る権利（未収収益）と、来年サービスを受ける権利（前払費用）は資産。前受収益と未払費用は負債。' },
        { q: 'A magazine publisher receives annual subscriptions in advance. How should subscriptions received for the next year be treated at the year end?', choices: ['As deferred income (a current liability)', 'As accrued income (a current asset)', 'As revenue for the current year', 'As a prepayment (a current asset)'], answer: 0, explain: '先にもらって、雑誌はまだ届けていない → 前受収益（流動負債）。今年の収益にはしない。前払費用は自分が先に払った側で使う言葉。' }
      ]
    },
    {
      id: 'L66',
      no: 66,
      title: '仕訳と翌期の振り戻し、元帳での調整',
      goal: '4つのずれの期末仕訳と翌期の振り戻しを書き、試算表に残った去年の残高を差額で直し、元帳の勘定から今年の金額を出せるようになる',
      minutes: 17,
      recall: true,
      exam: 'both',
      outcomes: ['D7(c)', 'D7(d)'],
      slides: [
        {
          title: '家計簿のメモは、年が明けたら消す',
          paras: ['年末に「12月のスマホ代 8,000円、未払い」とメモして、今年の出費に入れた。1月に実際に8,000円を払う。', 'このとき、また「出費 8,000円」と書くと、同じ出費を2回数えてしまう。だから年が明けたら、去年のメモを打ち消す。これが振り戻し（reversal）。']
        },
        {
          title: '期末調整の流れと仕訳4種類',
          numbered: ['試算表を見る。費用・収益は、ふつう払った・受け取った額のまま', '4つのずれを計算し、期末の仕訳を書いて元帳に転記する', '調整後の費用・収益は損益計算書へ、残高は財政状態計算書へ', '翌期の初日に、期末の仕訳を逆にして振り戻す'],
          table: { caption: '期末の調整仕訳', head: ['ずれ', '借方（Dr）', '貸方（Cr）'], rows: [['未払費用', '費用', 'Accruals'], ['前払費用', 'Prepayments', '費用'], ['未収収益', 'Accrued income', '収益'], ['前受収益', '収益', 'Deferred income']] }
        },
        {
          title: '翌期の初日に振り戻す',
          paras: ['20X2年1月1日、去年末の未払費用 $300（電気代、11月・12月分）を振り戻す。期末の仕訳とちょうど逆になる。'],
          journal: [
            { side: 'Dr', account: 'Accruals（未払費用）', amount: '300' },
            { side: 'Cr', account: 'Electricity expense（電気代）', amount: '300' }
          ],
          after: '2月に請求書 $450 を払い、全額を電気代にしても、貸方 $300 と相殺され、残るのは1月分の $150 だけ。前払費用 $3,000 も同じく Dr Rent expense / Cr Prepayments で戻し、1月〜3月の家賃が今年の費用になる。'
        },
        {
          title: '試算表に去年の残高が残っているとき',
          paras: ['家計簿に去年の「未払い 300円」のメモが残っていて、今年の正解は400円。消して書き直しても、100円書き足しても、最後は400円で同じ。', '振り戻しをしていないと、調整前の試算表に去年末の残高が残る。必要な期末残高との差額だけを仕訳する。'],
          example: {
            problem: '調整前の試算表: 電気代 $1,750（今年の支払額）、Accruals $300（去年末の残高のまま）。今年末に必要な未払費用は $400。仕訳と、今年の電気代は？',
            steps: ['差額を出す: 必要な $400 − 試算表の $300 ＝ $100 増やす', '仕訳: Dr Electricity expense $100 / Cr Accruals $100', '電気代: $1,750 ＋ $100 ＝ $1,850。Accruals は $300 ＋ $100 ＝ $400', '確かめ（振り戻して書き直す方法）: Dr Accruals $300 / Cr 電気代 $300、Dr 電気代 $400 / Cr Accruals $400。電気代 $1,750 − $300 ＋ $400 ＝ $1,850 で同じ'],
            answer: 'Dr Electricity expense $100 / Cr Accruals $100。電気代 $1,850、未払費用 $400'
          }
        },
        {
          title: '1つの勘定で調整する（未払費用）',
          paras: ['試験では、費用の勘定1つの中に、期首と期末の残高を書く形がよく出る。電気代 20X2年: 期首の未払 $300、支払 $1,750、期末の未払 $400。'],
          tAccount: { name: 'Electricity expense 20X2', debit: [['Cash（支払）', '1,750'], ['Balance c/d（期末の未払）', '400']], credit: [['Balance b/d（期首の未払）', '300'], ['Profit or loss（今年の費用）', '1,850']] },
          after: '貸方の Balance b/d $300 は、振り戻しと同じ効果。両側の合計は $2,150。損益計算書への $1,850 は差額で出す。'
        },
        {
          title: '1つの勘定で調整する（前払費用）',
          paras: ['倉庫の家賃 20X2年: 期首の前払 $3,000、支払 $14,400、期末の前払 $3,600。前払費用は資産なので、期首の残高（b/d）は借方に来る。'],
          tAccount: { name: 'Rent expense 20X2', debit: [['Balance b/d（期首の前払）', '3,000'], ['Cash（支払）', '14,400']], credit: [['Profit or loss（今年の費用）', '13,800'], ['Balance c/d（期末の前払）', '3,600']] },
          after: '両側の合計は $17,400。損益計算書への $13,800 は、前のレッスンの式で出した答えと同じ。'
        },
        {
          title: '1つの勘定で調整する（収益）',
          paras: ['後払いの部屋の受取家賃 20X2年: 期首の未収 $500、受取 $5,500、期末の未収 $1,000。未収収益は資産なので、b/d は借方に来る。'],
          tAccount: { name: 'Rental income 20X2', debit: [['Balance b/d（期首の未収）', '500'], ['Profit or loss（今年の収益）', '6,000']], credit: [['Cash（受取）', '5,500'], ['Balance c/d（期末の未収）', '1,000']] },
          after: '両側の合計は $6,500。収益の勘定では、損益計算書への振替は借方に来る。前受収益は負債なので、b/d は貸方、c/d は借方になる。'
        },
        {
          title: '例題: 期首は未払、期末は前払',
          example: {
            problem: '家賃の勘定。期首の未払費用 $1,000、20X2年中の支払 $13,000、期末の前払費用 $1,500。損益計算書の家賃は？',
            steps: ['借方: Cash $13,000', '貸方: Balance b/d（期首の未払）$1,000 … 去年の費用を今年払った分', '貸方: Balance c/d（期末の前払）$1,500 … 来年の分', '損益計算書へ（差額）: $13,000 − $1,000 − $1,500 ＝ $10,500'],
            answer: '家賃 $10,500'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '振り戻しを忘れると、去年の未払費用が今年も費用になり、二重計上になる。b/d と c/d で迷ったら、残高の側から考える。未払・前受は負債で貸方残高、前払・未収は資産で借方残高。b/d は残高の側、c/d はその反対側に書く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期末の仕訳: 費用・収益を今年の額に直し、資産か負債を作る', '翌期の初日に振り戻す。振り戻さず試算表に残高が残っていたら、差額だけ仕訳する','元帳では b/d と c/d を書き、損益計算書への金額は差額で出す']
        },
        {
          title: '英単語',
          words: [
            ['reversal', 'リバーサル', '振り戻し'],
            ['reverse', 'リバース', '振り戻す'],
            ['balance b/d (brought down)', '', '前期繰越'],
            ['balance c/d (carried down)', '', '次期繰越'],
            ['transfer to profit or loss', '', '損益計算書への振替'],
            ['adjusting entry', '', '期末の調整仕訳'],
            ['unadjusted trial balance', '', '調整前の試算表']
          ]
        }
      ],
      quiz: [
        { q: 'On 1 January 20X2, an accrual of $500 for electricity made at 31 December 20X1 is reversed. Which journal entry is made?', choices: ['Dr Accruals $500, Cr Electricity expense $500', 'Dr Electricity expense $500, Cr Accruals $500', 'Dr Electricity expense $500, Cr Cash $500', 'Dr Prepayments $500, Cr Electricity expense $500'], answer: 0, explain: '振り戻しは、期末の仕訳（Dr 費用 / Cr Accruals）の逆。2つ目は期末の仕訳そのもの。' },
        { q: 'The insurance account has an opening prepayment of $600. Payments during the year were $4,000 and the closing prepayment is $900. What amount is transferred to the statement of profit or loss?', type: 'number', answer: 3700, unit: '$', explain: '$4,000 ＋ $600 − $900 ＝ $3,700。期首の前払は今年の費用なので足し、期末の前払は来年の分なので引く。' },
        { q: 'The rent account shows an opening accrual of $300, payments during the year of $5,000 and a closing prepayment of $400. What is the rent expense for the year?', choices: ['$4,300', '$5,700', '$5,100', '$4,900'], answer: 0, explain: '$5,000 − $300 − $400 ＝ $4,300。期首の未払は去年の費用、期末の前払は来年の費用なので、どちらも引く。$5,700 は両方足した答え。' },
        { q: 'The trial balance at 31 December 20X2 shows prepayments for rent of $500. This is last year\'s closing balance, which was not reversed. The prepayment required at 31 December 20X2 is $350. Which journal entry is needed?', choices: ['Dr Rent expense $150, Cr Prepayments $150', 'Dr Prepayments $150, Cr Rent expense $150', 'Dr Prepayments $350, Cr Rent expense $350', 'Dr Rent expense $500, Cr Prepayments $500'], answer: 0, explain: '必要な $350 に対し、試算表には $500 ある。前払費用（資産）を差額 $150 だけ減らし（貸方）、その分を今年の家賃に足す（借方）。2つ目は向きが逆。3つ目は試算表の $500 を無視して $350 を足した答えで、前払費用が $850 になる。4つ目は振り戻しだけで、今年末の $350 を計上し直していない。' },
        { q: 'The rental income account has an opening debit balance b/d of $500 (rent owed by the tenant). Rent received during the year was $5,500. At the year end, the tenant had paid $300 of rent in advance. What is the rental income for the year?', choices: ['$4,700', '$6,300', '$5,300', '$5,700'], answer: 0, explain: '期首の未収 $500 は去年の収益、期末の前受 $300 は来年の収益。どちらも引く: $5,500 − $500 − $300 ＝ $4,700。勘定では借方に b/d $500・c/d $300・損益への振替 $4,700、貸方に受取 $5,500。$6,300 は両方足した答え、$5,300 と $5,700 は片方の足し引きを逆にした答え。' },
        { q: '費用の勘定で、期首の Balance b/d が貸方にある。期首にあった調整は？', choices: ['未払費用', '前払費用'], answer: 0, explain: '未払費用は負債なので貸方残高。b/d は残高の側に書く。前払費用なら借方に b/d が来る。' }
      ]
    },
    {
      id: 'L67',
      no: 67,
      title: '利益・純資産への影響と財務諸表での表示',
      goal: '4つの調整や記帳ミスが利益と純資産をいくら動かすかを計算し、財務諸表の正しい場所に載せられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D7(e)', 'D7(f)'],
      slides: [
        {
          title: 'メモを忘れると、残ったお金を多く見積もる',
          paras: ['年末に家計を締めるとき、12月のスマホ代 8,000円の未払いを忘れた。今年の出費が少なく見えて、「思ったより残った」と勘違いする。', 'しかも、1月に払う借りも忘れている。自分の本当の取り分を、8,000円多く見積もっていることになる。']
        },
        {
          title: '4つの調整と利益・純資産',
          table: { caption: '調整を計上したときの動き', head: ['調整', '利益', '純資産'], rows: [['未払費用', '減る', '減る'], ['前払費用', '増える', '増える'], ['未収収益', '増える', '増える'], ['前受収益', '減る', '減る']] },
          after: '純資産（net assets）＝資産 − 負債。どの調整も、利益と純資産は同じ向きに同じ金額だけ動く。'
        },
        {
          title: 'なぜ？ 利益と純資産が同じだけ動く理由',
          paras: ['調整仕訳は、片方が費用か収益（利益が動く）、もう片方が資産か負債（純資産が動く）。', 'もうけは資本に入り、資本＝資産 − 負債＝純資産だった。だから利益が $300 減れば、純資産も $300 減る。会計等式がいつも成り立つのは、このため。']
        },
        {
          title: '例題: 修正後の利益',
          example: {
            problem: 'たこ焼き屋の調整前の利益（draft profit）は $20,000。次の調整がまだ: 期末の未払費用 $300、期末の前払費用 $3,000、未収収益 $500、前受収益 $1,000。修正後の利益は？',
            steps: ['未払費用は費用が増える → $300 を引く', '前払費用は費用が減る → $3,000 を足す', '未収収益は収益が増える → $500 を足す', '前受収益は収益が減る → $1,000 を引く', '$20,000 − $300 ＋ $3,000 ＋ $500 − $1,000 ＝ $22,200'],
            answer: '修正後の利益 $22,200（純資産も同じく $2,200 増える）'
          }
        },
        {
          title: '例題: 記帳ミスの影響',
          example: {
            problem: '前払費用 $400 を、誤って未払費用として記録した。利益と純資産への影響は？',
            steps: ['正しくは: 費用を $400 減らし、資産を $400 作る', '誤りでは: 費用を $400 増やし、負債を $400 作った', '費用の差は $400 ＋ $400 ＝ $800。費用が $800 多すぎる', '利益は $800 少なすぎる。純資産も、資産 $400 不足と負債 $400 過大で $800 少なすぎる'],
            answer: '利益・純資産とも $800 過小（understated）'
          }
        },
        {
          title: '試算表から財務諸表へ',
          paras: ['たこ焼き屋の 20X1年。試算表には払った額だけが入っている。調整を足し引きして、財務諸表の金額にする。'],
          table: { caption: '20X1年の調整', head: ['項目', '試算表', '財務諸表'], rows: [['電気代（SPL）', '1,200', '1,500'], ['倉庫の家賃（SPL）', '12,000', '9,000'], ['未払費用（SFP 負債）', '－', '300'], ['前払費用（SFP 資産）', '－', '3,000']] },
          after: '電気代は未払 $300 を足し、家賃は前払 $3,000 を引く。足し引きした分が、財政状態計算書の残高になる。'
        },
        {
          title: '財務諸表での表示',
          paras: ['損益計算書には、調整後の費用・収益（今年の分）を載せる。未払・前払などの残高は、財政状態計算書に載せる。'],
          table: { caption: '財政状態計算書（抜粋）', head: ['項目', '$'], rows: [['Current assets（流動資産）', ''], ['Prepayments（前払費用）', '3,000'], ['Accrued income（未収収益）', '500'], ['Current liabilities（流動負債）', ''], ['Accruals（未払費用）', '300'], ['Deferred income（前受収益）', '1,000']] },
          after: '実際の財務諸表では、前払・未収は trade and other receivables に、未払・前受は trade and other payables にまとめて載せることも多い。'
        },
        {
          title: '翌年にも影響する',
          note: { kind: 'tip', text: '期末の調整を忘れると、翌年の利益にも逆向きに響く。20X1年末の未払費用 $500 を忘れると、20X1年の利益は $500 過大。20X2年は請求額が全部費用になるので、20X2年の利益は $500 過小。2年合計では打ち消し合う。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「前払費用」は名前に「費用」とあるが、損益計算書ではなく財政状態計算書の資産。「前受収益」も収益ではなく負債。名前ではなく、資産か負債かで置き場所を決める。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['未払費用・前受収益は利益も純資産も減らす。前払費用・未収収益は両方増やす', '利益と純資産は、同じ向きに同じ金額だけ動く', '損益計算書には今年の額、財政状態計算書には残高を載せる']
        },
        {
          title: '英単語',
          words: [
            ['net assets', 'ネット アセッツ', '純資産（資産 − 負債）'],
            ['draft profit', 'ドラフト プロフィット', '調整前の利益'],
            ['overstated / understated', '', '過大 / 過小'],
            ['omitted', 'オミッティド', '記録が漏れた'],
            ['trade and other receivables', '', '売掛金及びその他の債権'],
            ['trade and other payables', '', '買掛金及びその他の債務']
          ]
        }
      ],
      quiz: [
        { q: 'A business has a draft profit of $45,000. It has not yet accounted for a closing accrual of $1,200 and a closing prepayment of $800. What is the revised profit?', type: 'number', answer: 44600, unit: '$', explain: '$45,000 − $1,200 ＋ $800 ＝ $44,600。未払費用は費用を増やす（利益を減らす）、前払費用は費用を減らす（利益を増やす）。' },
        { q: 'An accrual of $600 for electricity was omitted from the financial statements. What is the effect of this error?', choices: ['Profit and net assets are both overstated by $600', 'Profit and net assets are both understated by $600', 'Profit is overstated by $600 and net assets are understated by $600', 'Profit is overstated by $600 and net assets are not affected'], answer: 0, explain: '費用 $600 が漏れ → 利益が多すぎる。負債 $600 も漏れ → 純資産も多すぎる。利益と純資産は同じ向きに動く。' },
        { q: 'How should deferred income be presented in the financial statements?', choices: ['As a current liability in the statement of financial position', 'As a current asset in the statement of financial position', 'As income in the statement of profit or loss', 'As an expense in the statement of profit or loss'], answer: 0, explain: 'まだ稼いでいないので収益ではない。サービスを渡す義務＝流動負債。' },
        { q: '前払費用 $400 を、誤って未払費用として記録した。利益は何ドル過小になっている？', type: 'number', answer: 800, unit: '$', explain: '本当は費用を $400 減らすところ、$400 増やした。差は $800。$400 と答えるのは、片側だけ見た間違い。' },
        { q: '未収収益 $500 を計上すると、利益と純資産はどうなる？', choices: ['利益も純資産も $500 増える', '利益は増え、純資産は減る', '利益は変わらず、純資産が増える', '利益も純資産も $500 減る'], answer: 0, explain: '収益が増えて利益が増え、資産（未収収益）が増えて純資産も増える。' },
        { q: '20X1年末の未払費用 $500 を計上し忘れた。20X2年に請求書を払ったとき、全額を費用にした。20X2年の利益への影響は？', choices: ['$500 過小', '$500 過大', '影響なし'], answer: 0, explain: '20X1年の分 $500 まで 20X2年の費用に入るので、20X2年の費用が多すぎ、利益は $500 過小。20X1年は逆に $500 過大。' }
      ]
    }
  ],
  cards: [
    { id: 'L62-1', lesson: 'L62', q: '発生主義（accrual accounting）とは？', a: 'お金の出入りではなく、取引の効果が生じた期間に収益・費用を記録すること' },
    { id: 'L62-2', lesson: 'L62', q: '現金主義（cash basis）とは？', a: 'お金が入った・出た時に記録するやり方' },
    { id: 'L62-3', lesson: 'L62', q: 'matching（対応）とは？', a: '売上と、それを稼ぐための費用を同じ期間に並べること' },
    { id: 'L62-4', lesson: 'L62', q: 'なぜ発生主義を使う？', a: '支払いの時期で数字がぶれず、その期間の本当のもうけが分かるから' },
    { id: 'L62-5', lesson: 'L62', q: '発生主義で作らない財務諸表は？', a: 'キャッシュフロー計算書' },
    { id: 'L62-6', lesson: 'L62', q: '期末に直すずれ4種類は？', a: '未払費用・前払費用・未収収益・前受収益' },
    { id: 'L63-1', lesson: 'L63', q: '未払費用（accruals）とは？', a: '使ったのに決算日までに払っておらず、請求書も未着・未記帳の費用（金額は見積もる）' },
    { id: 'L63-2', lesson: 'L63', q: '未払費用の期末仕訳は？', a: 'Dr 費用 / Cr Accruals' },
    { id: 'L63-3', lesson: 'L63', q: '未払費用は財政状態計算書のどこ？', a: '流動負債' },
    { id: 'L63-4', lesson: 'L63', q: 'なぜ未払費用は負債？', a: '使ったサービスの代金を後で払う義務があるから' },
    { id: 'L63-5', lesson: 'L63', q: '今年の費用の式（未払費用あり）は？', a: '支払額 − 期首の未払 ＋ 期末の未払' },
    { id: 'L63-6', lesson: 'L63', q: '3か月分の請求 $600、うち決算日までの分が1か月。未払費用は？', a: '$200（$600 ÷ 3 × 1）' },
    { id: 'L63-7', lesson: 'L63', q: '未払費用（accrual）と買掛金・未払金（payables）の分かれ目は？', a: '決算日に請求書が未着・未記帳なら見積もって accrual（届いた商品も同じ）。記帳済みなら payables' },
    { id: 'L64-1', lesson: 'L64', q: '前払費用（prepayments）とは？', a: '払ったけれど、来年に属する費用' },
    { id: 'L64-2', lesson: 'L64', q: '前払費用の期末仕訳は？', a: 'Dr Prepayments / Cr 費用' },
    { id: 'L64-3', lesson: 'L64', q: 'なぜ前払費用は資産？', a: '来年サービスを受ける権利が残っていて、将来役に立つから' },
    { id: 'L64-4', lesson: 'L64', q: '今年の費用の式（前払費用あり）は？', a: '支払額 ＋ 期首の前払 − 期末の前払' },
    { id: 'L64-5', lesson: 'L64', q: '10月1日に1年分の保険料 $1,200 を払った。12月31日の前払費用は？', a: '$900（1月〜9月の9か月分）' },
    { id: 'L64-6', lesson: 'L64', q: '未払と前払で、式の足し引きはどう違う？', a: '未払: 期首を引き期末を足す。前払: 期首を足し期末を引く' },
    { id: 'L65-1', lesson: 'L65', q: '未収収益（accrued income）とは？', a: '稼いだのに、決算日までにもらっていない収益。流動資産' },
    { id: 'L65-2', lesson: 'L65', q: '前受収益（deferred income）とは？', a: 'もらったのに、決算日までに稼いでいない収益。流動負債' },
    { id: 'L65-3', lesson: 'L65', q: '未収収益の期末仕訳は？', a: 'Dr Accrued income / Cr 収益' },
    { id: 'L65-4', lesson: 'L65', q: '前受収益の期末仕訳は？', a: 'Dr 収益 / Cr Deferred income' },
    { id: 'L65-5', lesson: 'L65', q: 'なぜ前受収益は負債？', a: 'サービスを渡す義務（できなければ返す義務）があるから' },
    { id: 'L65-6', lesson: 'L65', q: '収益の式は？', a: '受取額 − 期首の未収 ＋ 期末の未収 ＋ 期首の前受 − 期末の前受' },
    { id: 'L66-1', lesson: 'L66', q: '振り戻し（reversal）とは？', a: '翌期の初日に、期末の調整仕訳を逆にして打ち消すこと' },
    { id: 'L66-2', lesson: 'L66', q: 'なぜ振り戻す？', a: '翌期に払った額を全額記録しても、二重計上にならないように' },
    { id: 'L66-3', lesson: 'L66', q: '未払費用 $500 と前払費用 $200 の振り戻し仕訳は？', a: 'Dr Accruals $500 / Cr 費用 $500、Dr 費用 $200 / Cr Prepayments $200' },
    { id: 'L66-4', lesson: 'L66', q: '費用の勘定で、期首の未払費用（b/d）と前払費用（b/d）はどちら側？', a: '未払費用は貸方（負債）、前払費用は借方（資産）' },
    { id: 'L66-6', lesson: 'L66', q: '元帳で損益計算書に振り替える額はどう出す？', a: 'ほかの行を全部書いた後の差額' },
    { id: 'L66-7', lesson: 'L66', q: '収益の勘定で、期首の未収収益（b/d）はどちら側？ 前受収益は？', a: '未収収益は借方（資産）、前受収益は貸方（負債）' },
    { id: 'L66-8', lesson: 'L66', q: '試算表に去年の未払費用 $300 が残り、今年末の必要額は $400。仕訳は？', a: 'Dr 費用 $100 / Cr Accruals $100。差額だけ（振り戻して書き直しても結果は同じ）' },
    { id: 'L67-1', lesson: 'L67', q: '未払費用を計上すると、利益と純資産は？', a: 'どちらも同じ額だけ減る' },
    { id: 'L67-2', lesson: 'L67', q: '前払費用を計上すると、利益と純資産は？', a: 'どちらも同じ額だけ増える' },
    { id: 'L67-3', lesson: 'L67', q: 'なぜ利益と純資産は同じだけ動く？', a: '仕訳の片方が費用・収益、もう片方が資産・負債だから' },
    { id: 'L67-4', lesson: 'L67', q: '前払費用 $400 を未払費用と誤記。利益への影響は？', a: '$800 過小（$400 ＋ $400）' },
    { id: 'L67-5', lesson: 'L67', q: '前払費用・未収収益はどこに載る？', a: '財政状態計算書の流動資産（trade and other receivables に含めることも）' },
    { id: 'L67-6', lesson: 'L67', q: '未払費用・前受収益はどこに載る？', a: '財政状態計算書の流動負債（trade and other payables に含めることも）' }
  ]
});
