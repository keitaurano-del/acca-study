(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 125,
  part: 7,
  partTitle: '予算',
  lessons: [
    {
      id: 'M104',
      no: 104,
      title: '現金予算①: 入金（売掛金の回収の流れ）',
      goal: '売上の予算を「お金が入る月」に並べ直し、毎月の入金を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(d)'],
      slides: [
        {
          title: '仕事をした月と、お金が入る月',
          paras: ['フリーランスのデザイナーが、4月に30万円分の仕事をした。支払いは「月末締め・翌月末払い」なので、入金は5月末になる。', '4月の売上は30万円でも、4月に口座に入るお金は0円。それでも家賃は4月に払う。「売上がある」と「お金がある」は別の話だ。']
        },
        {
          title: '現金予算（cash budget）とは',
          paras: ['これから毎月いくら入り（receipts）、いくら出て（payments）、月末にいくら残るかを予想する表。予算の中でも試験によく出る。'],
          formula: '月初残高 ＋ 入金 − 支払 ＝ 月末残高',
          after: 'このレッスンは入金。販売予算（M099）の売上を「お金が入る月」に並べ直す。支払と月末残高は次のレッスン。'
        },
        {
          title: '回収のパターン',
          svg: `<svg viewBox="0 0 440 215" role="img" aria-label="4月の売上60,000ドルは、4月に20%の12,000、5月に50%の30,000、6月に30%の18,000に分かれて入金される" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">1か月の売上が3回に分かれて入る</text><rect x="20" y="80" width="130" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="106" text-anchor="middle" fill="var(--ink)">4月の売上</text><text x="85" y="130" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">$60,000</text><line x1="150" y1="112" x2="230" y2="64" stroke="var(--edge)" stroke-width="1.5"/><line x1="150" y1="112" x2="230" y2="112" stroke="var(--edge)" stroke-width="1.5"/><line x1="150" y1="112" x2="230" y2="160" stroke="var(--edge)" stroke-width="1.5"/><rect x="230" y="44" width="190" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="242" y="69" fill="var(--ink)">4月 当月 20%</text><text x="408" y="69" text-anchor="end" fill="var(--ink)">$12,000</text><rect x="230" y="92" width="190" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="242" y="117" fill="var(--ink)">5月 翌月 50%</text><text x="408" y="117" text-anchor="end" font-weight="600" fill="var(--ink)">$30,000</text><rect x="230" y="140" width="190" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="242" y="165" fill="var(--ink)">6月 翌々月 30%</text><text x="408" y="165" text-anchor="end" fill="var(--ink)">$18,000</text><text x="220" y="204" text-anchor="middle" fill="var(--ink)">売った月と、お金が入る月はずれる</text></svg>`,
          caption: 'ヒカリ社（卓上ライトの小売）は、売上の20%を当月、50%を翌月、30%を翌々月に回収する。どの月の入金にも、過去2か月の売上が混ざる。'
        },
        {
          title: '入金に入るもの・入らないもの',
          list: ['入る: 現金売上、売掛金の回収、固定資産の売却代金（proceeds）、株式の発行・借入れで入るお金、受取利息', '入らない: 減価償却、貸倒れ（irrecoverable debts）、固定資産の売却益、まだ回収していない売上'],
          after: '基準は1つ。「その月に、実際にお金が入るか」。',
          note: { kind: 'tip', text: '「売上の10%は現金売上」と出たら、先に売上を現金と掛けに分ける。現金売上は売った月に全額入る。回収の割合は掛けの分だけに掛ける。' }
        },
        {
          title: '例題1: ヒカリ社の4〜6月の入金',
          example: {
            problem: '売上予算: 2月 $40,000、3月 $50,000、4月 $60,000、5月 $70,000、6月 $80,000。回収は当月20%、翌月50%、翌々月30%。5月には古い車両（帳簿価額 $2,000）を $3,000 で売る。4〜6月の毎月の入金は？',
            steps: ['4月: 4月売上の20% 12,000 ＋ 3月売上の50% 25,000 ＋ 2月売上の30% 12,000 ＝ $49,000', '5月: 5月の20% 14,000 ＋ 4月の50% 30,000 ＋ 3月の30% 15,000 ＝ $59,000', '6月: 6月の20% 16,000 ＋ 5月の50% 35,000 ＋ 4月の30% 18,000 ＝ $69,000', '車両の売却: 入るのは代金 $3,000（売却益 $1,000 ではない）。5月の入金は 59,000 ＋ 3,000 ＝ $62,000', '3か月の合計: 49,000 ＋ 62,000 ＋ 69,000 ＝ $180,000'],
            answer: '4月 $49,000、5月 $62,000、6月 $69,000'
          }
        },
        {
          title: '入金予算の表',
          svg: `<svg viewBox="0 0 440 292" role="img" aria-label="ヒカリ社の入金予算。入金合計は4月49,000、5月62,000、6月69,000" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">入金予算（ヒカリ社）</text><text x="20" y="56" fill="var(--quiet)">売上の月</text><text x="260" y="56" text-anchor="end" fill="var(--quiet)">4月</text><text x="340" y="56" text-anchor="end" fill="var(--quiet)">5月</text><text x="420" y="56" text-anchor="end" fill="var(--quiet)">6月</text><line x1="20" y1="66" x2="420" y2="66" stroke="var(--edge)"/><text x="20" y="88" fill="var(--ink)">2月 $40,000</text><text x="260" y="88" text-anchor="end" fill="var(--ink)">12,000</text><text x="340" y="88" text-anchor="end" fill="var(--quiet)">–</text><text x="420" y="88" text-anchor="end" fill="var(--quiet)">–</text><text x="20" y="112" fill="var(--ink)">3月 $50,000</text><text x="260" y="112" text-anchor="end" fill="var(--ink)">25,000</text><text x="340" y="112" text-anchor="end" fill="var(--ink)">15,000</text><text x="420" y="112" text-anchor="end" fill="var(--quiet)">–</text><text x="20" y="136" fill="var(--ink)">4月 $60,000</text><text x="260" y="136" text-anchor="end" fill="var(--ink)">12,000</text><text x="340" y="136" text-anchor="end" fill="var(--ink)">30,000</text><text x="420" y="136" text-anchor="end" fill="var(--ink)">18,000</text><text x="20" y="160" fill="var(--ink)">5月 $70,000</text><text x="260" y="160" text-anchor="end" fill="var(--quiet)">–</text><text x="340" y="160" text-anchor="end" fill="var(--ink)">14,000</text><text x="420" y="160" text-anchor="end" fill="var(--ink)">35,000</text><text x="20" y="184" fill="var(--ink)">6月 $80,000</text><text x="260" y="184" text-anchor="end" fill="var(--quiet)">–</text><text x="340" y="184" text-anchor="end" fill="var(--quiet)">–</text><text x="420" y="184" text-anchor="end" fill="var(--ink)">16,000</text><line x1="20" y1="196" x2="420" y2="196" stroke="var(--edge)"/><text x="20" y="218" fill="var(--ink)">売掛金からの入金</text><text x="260" y="218" text-anchor="end" fill="var(--ink)">49,000</text><text x="340" y="218" text-anchor="end" fill="var(--ink)">59,000</text><text x="420" y="218" text-anchor="end" fill="var(--ink)">69,000</text><text x="20" y="242" fill="var(--ink)">車両の売却代金</text><text x="260" y="242" text-anchor="end" fill="var(--quiet)">–</text><text x="340" y="242" text-anchor="end" fill="var(--ink)">3,000</text><text x="420" y="242" text-anchor="end" fill="var(--quiet)">–</text><rect x="14" y="254" width="412" height="30" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.5"/><text x="20" y="275" font-weight="600" fill="var(--ink)">入金合計</text><text x="260" y="275" text-anchor="end" font-weight="600" fill="var(--ink)">49,000</text><text x="340" y="275" text-anchor="end" font-weight="600" fill="var(--ink)">62,000</text><text x="420" y="275" text-anchor="end" font-weight="600" fill="var(--ink)">69,000</text></svg>`,
          caption: '行は売上の月、列は入金の月。2月・3月の売上から入る 12,000 ＋ 25,000 ＋ 15,000 ＝ $52,000 は、3月末の売掛金の回収。'
        },
        {
          title: '例題2: 早期支払割引と貸倒れ',
          example: {
            problem: '6月の掛け売上は $50,000。40%の客は6月中に払い、2%の早期支払割引（settlement discount）を受ける。55%は7月に払う。残り5%は回収できない（irrecoverable debts）。6月と7月の入金は？',
            steps: ['6月: 50,000 × 40% ＝ 20,000。割引2%を引いて 20,000 × 98% ＝ $19,600', '7月: 50,000 × 55% ＝ $27,500（遅く払う客には割引なし）', '貸倒れ: 50,000 × 5% ＝ 2,500。お金は入らないので現金予算には書かない', '入金の合計 19,600 ＋ 27,500 ＝ $47,100。売上との差 2,900 は、割引 400 と貸倒れ 2,500'],
            answer: '6月 $19,600、7月 $27,500'
          }
        },
        {
          title: 'なぜ？ 売上を入金の月に並べ直す',
          paras: ['利益が出ていても、給料や仕入代金を払うお金がなければ会社は止まる。これを黒字倒産という。', '危ないのは売上が伸びる時期。売上は増えても、入金は1〜2か月遅れてくる。その間も仕入や給料は先に出ていく。だから売上の予算を入金の月に並べ直し、お金が足りなくなる月を前もって見つける。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '売上を全部その月の入金にしてしまう。割引を全部の売上から引く（引くのは早く払った客の分だけ）。貸倒れの分も入金に入れる。固定資産の売却で「売却益」を書く（書くのは売却代金）。期首の売掛金からの回収を忘れる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['入金は「売った月」ではなく「お金が入る月」に書く', '当月・翌月・翌々月の割合で、前の月の売上（期首の売掛金）からの回収も足す', '割引は早く払った分だけ引く。貸倒れ・減価償却・売却益は書かない']
        },
        {
          title: '英単語',
          words: [
            ['cash budget', 'キャッシュ バジェット', '現金予算'],
            ['cash receipts', 'キャッシュ レシーツ', '入金'],
            ['cash sales / credit sales', 'キャッシュ セールス / クレジット セールス', '現金売上 / 掛け売上'],
            ['settlement discount', 'セトルメント ディスカウント', '早期支払割引'],
            ['irrecoverable debts', 'イリカバラブル デッツ', '貸倒れ（回収できない売掛金）'],
            ['proceeds', 'プロシーズ', '売却代金（売って入るお金）'],
            ['month of sale', '', '売った月（当月）'],
            ['the month following sale', '', '売った月の翌月']
          ]
        }
      ],
      quiz: [
        { q: '売上予算: 1月 $30,000、2月 $36,000、3月 $40,000。回収は当月30%、翌月60%、翌々月10%（貸倒れなし）。3月の入金はいくら？', type: 'number', answer: 36600, unit: '$', explain: '3月売上の30% 12,000 ＋ 2月売上の60% 21,600 ＋ 1月売上の10% 3,000 ＝ 36,600。3月の売上 40,000 をそのまま入金にするのは間違い。入金の月に入るのは、3つの月の売上の一部ずつ。' },
        { q: 'A company budgets credit sales of $50,000 for June. 40% of customers will pay in June and take a 2% settlement discount. 55% will pay in July. The remaining 5% will be irrecoverable. What are the total budgeted cash receipts from June sales?', choices: ['$47,500', '$49,600', '$47,100', '$50,000'], answer: 2, explain: '6月 50,000 × 40% × 98% ＝ 19,600、7月 50,000 × 55% ＝ 27,500、合計 47,100。47,500 は割引を引き忘れた額（20,000 ＋ 27,500）。49,600 は回収できない5%まで翌月に入るとした額（19,600 ＋ 30,000）。50,000 は割引も貸倒れも無視した額。' },
        { q: 'Which of the following would be included in the cash receipts section of a cash budget?', choices: ['Profit on the sale of a non-current asset', 'Depreciation charge for the month', 'Irrecoverable debts written off', 'Proceeds from the sale of a non-current asset'], answer: 3, explain: '現金予算に書くのは実際に入るお金なので、売却代金（proceeds）が入る。売却益は「代金 − 帳簿価額」で、損益の数字。減価償却と貸倒れはお金が動かないので書かない。' },
        { q: 'Opening trade receivables are $52,000 and closing trade receivables are budgeted at $85,000. Budgeted credit sales for the period are $210,000. There are no irrecoverable debts or discounts. What are the budgeted cash receipts from customers?', type: 'number', answer: 177000, unit: '$', explain: '回収 ＝ 期首の売掛金 52,000 ＋ 掛け売上 210,000 − 期末の売掛金 85,000 ＝ 177,000。期末に残った売掛金は、まだ入っていないお金。ヒカリ社の4〜6月の売掛金からの入金（49,000 ＋ 59,000 ＋ 69,000）と同じになる。' },
        { q: '帳簿価額 $2,000 の車両を $3,000 で売る予定。現金予算の入金に書く額は？', choices: ['$1,000', '$3,000', '$2,000', '書かない（損益の話なので）'], answer: 1, explain: '現金予算は実際に入るお金を書くので、売却代金 3,000。1,000 は売却益で、予算損益計算書に書く数字。2,000 は帳簿価額で、財政状態計算書の資産が減る額。' },
        { q: 'Sales are budgeted at $30,000 in February, $40,000 in March and $50,000 in April. 10% of sales are for cash. Of the credit sales, 60% are received in the month after sale and 40% two months after sale. What are the budgeted cash receipts in April?', type: 'number', answer: 37400, unit: '$', explain: '4月の現金売上 50,000 × 10% ＝ 5,000。3月の掛け売上 40,000 × 90% ＝ 36,000 の60% ＝ 21,600。2月の掛け売上 30,000 × 90% ＝ 27,000 の40% ＝ 10,800。合計 37,400。売上の全額に60%・40%を掛けると 5,000 ＋ 24,000 ＋ 12,000 ＝ 41,000 になり、現金売上を2回数えてしまう。' }
      ]
    },
    {
      id: 'M105',
      no: 105,
      title: '現金予算②: 支払と月末残高',
      goal: '支払を「払う月」に並べ、月ごとの純キャッシュフローと月末残高を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(d)'],
      slides: [
        {
          title: '給料日と引落し日',
          paras: ['給料は25日に入る。家賃は27日、カードの引落しは10日。月の合計では黒字でも、引落しの日に口座の残高が足りなければ困る。', '会社も同じ。いつ、いくら出ていくかを月ごとに並べ、残高がマイナスになる月がないかを前もって確かめる。']
        },
        {
          title: '支払に入るものと、そのずれ方',
          list: ['仕入代金: 小売は仕入予算、製造業は材料の購入予算（M101）から。掛けなら払う月に書く。「翌月払い」なら3月の仕入を4月に払う', '給料: 当月払いが多い。「75%は当月、25%は翌月」のような分け方も出る', '諸経費: 減価償却を除いた現金の分だけ。「1か月遅れ（in arrears）」などを当てはめる', '家賃・保険料のまとめ払い: 払う月にだけ全額（前払い in advance）', '設備の購入（capital expenditure）、配当、税金、借入金の返済、支払利息'],
          after: '当座借越の利息は「月初の借越残高 × 月利」のように指定されることが多い。計算した利息は、その月の支払に1行足す。'
        },
        {
          title: '例題1: ヒカリ社の4〜6月の支払',
          example: {
            problem: '仕入予算: 3月 $33,000、4月 $39,000、5月 $45,000、6月 $51,000。仕入は翌月払い。給料は毎月 $8,000（当月払い）。諸経費は毎月 $5,000 で、うち $1,000 は減価償却。現金の分は翌月払い（3月分も同じ）。家賃は3か月分 $6,000 を4月に前払い。配当 $10,000 を4月、設備代 $12,000 を6月に払う。各月の支払は？',
            steps: ['仕入: 前の月の分を払う。4月 33,000、5月 39,000、6月 45,000', '給料: 毎月 8,000', '諸経費: 減価償却 1,000 は現金が出ない。5,000 − 1,000 ＝ 4,000 を翌月に払うので、4〜6月とも 4,000（4月は3月分）', '家賃 6,000 と配当 10,000 は4月だけ。設備代 12,000 は6月だけ', '4月: 33,000 ＋ 8,000 ＋ 4,000 ＋ 6,000 ＋ 10,000 ＝ 61,000', '5月: 39,000 ＋ 8,000 ＋ 4,000 ＝ 51,000。6月: 45,000 ＋ 8,000 ＋ 4,000 ＋ 12,000 ＝ 69,000'],
            answer: '4月 $61,000、5月 $51,000、6月 $69,000'
          }
        },
        {
          title: '月末残高をつなぐ',
          formula: '月末残高 ＝ 月初残高 ＋ 入金 − 支払',
          paras: ['入金から支払を引いたものを純キャッシュフロー（net cash flow）という。', '前の月の月末残高（closing balance）が、そのまま次の月の月初残高（opening balance）になる。マイナスは銀行からの当座借越（bank overdraft）で、表ではカッコをつけて (7,000) のように書く。']
        },
        {
          title: '例題2: 月末残高',
          example: {
            problem: 'ヒカリ社の3月末の現金は $5,000。入金は4月 49,000、5月 62,000、6月 69,000（前のレッスン）。支払は 61,000、51,000、69,000（例題1）。各月末の残高は？',
            steps: ['4月: 純キャッシュフロー 49,000 − 61,000 ＝ (12,000)。月末 5,000 − 12,000 ＝ (7,000)。当座借越', '5月: 62,000 − 51,000 ＝ 11,000。月初は4月末の (7,000)。月末 −7,000 ＋ 11,000 ＝ 4,000', '6月: 69,000 − 69,000 ＝ 0。月末 4,000 ＋ 0 ＝ 4,000', '確かめ: 5,000 ＋ 入金合計 180,000 − 支払合計 181,000 ＝ 4,000'],
            answer: '4月末 (7,000) の借越、5月末 $4,000、6月末 $4,000'
          }
        },
        {
          title: '現金予算の完成形',
          svg: `<svg viewBox="0 0 440 350" role="img" aria-label="ヒカリ社の現金予算。4月末は7,000ドルの当座借越、5月末と6月末は4,000ドル" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">現金予算（ヒカリ社）</text><text x="260" y="54" text-anchor="end" fill="var(--quiet)">4月</text><text x="340" y="54" text-anchor="end" fill="var(--quiet)">5月</text><text x="420" y="54" text-anchor="end" fill="var(--quiet)">6月</text><line x1="20" y1="64" x2="420" y2="64" stroke="var(--edge)"/><text x="20" y="86" font-weight="600" fill="var(--ink)">入金合計</text><text x="260" y="86" text-anchor="end" font-weight="600" fill="var(--ink)">49,000</text><text x="340" y="86" text-anchor="end" font-weight="600" fill="var(--ink)">62,000</text><text x="420" y="86" text-anchor="end" font-weight="600" fill="var(--ink)">69,000</text><text x="20" y="110" fill="var(--ink)">仕入代金</text><text x="260" y="110" text-anchor="end" fill="var(--ink)">33,000</text><text x="340" y="110" text-anchor="end" fill="var(--ink)">39,000</text><text x="420" y="110" text-anchor="end" fill="var(--ink)">45,000</text><text x="20" y="134" fill="var(--ink)">給料</text><text x="260" y="134" text-anchor="end" fill="var(--ink)">8,000</text><text x="340" y="134" text-anchor="end" fill="var(--ink)">8,000</text><text x="420" y="134" text-anchor="end" fill="var(--ink)">8,000</text><text x="20" y="158" fill="var(--ink)">諸経費（現金の分）</text><text x="260" y="158" text-anchor="end" fill="var(--ink)">4,000</text><text x="340" y="158" text-anchor="end" fill="var(--ink)">4,000</text><text x="420" y="158" text-anchor="end" fill="var(--ink)">4,000</text><text x="20" y="182" fill="var(--ink)">家賃</text><text x="260" y="182" text-anchor="end" fill="var(--ink)">6,000</text><text x="340" y="182" text-anchor="end" fill="var(--quiet)">–</text><text x="420" y="182" text-anchor="end" fill="var(--quiet)">–</text><text x="20" y="206" fill="var(--ink)">配当</text><text x="260" y="206" text-anchor="end" fill="var(--ink)">10,000</text><text x="340" y="206" text-anchor="end" fill="var(--quiet)">–</text><text x="420" y="206" text-anchor="end" fill="var(--quiet)">–</text><text x="20" y="230" fill="var(--ink)">設備の購入</text><text x="260" y="230" text-anchor="end" fill="var(--quiet)">–</text><text x="340" y="230" text-anchor="end" fill="var(--quiet)">–</text><text x="420" y="230" text-anchor="end" fill="var(--ink)">12,000</text><line x1="20" y1="240" x2="420" y2="240" stroke="var(--edge)"/><text x="20" y="262" font-weight="600" fill="var(--ink)">支払合計</text><text x="260" y="262" text-anchor="end" font-weight="600" fill="var(--ink)">61,000</text><text x="340" y="262" text-anchor="end" font-weight="600" fill="var(--ink)">51,000</text><text x="420" y="262" text-anchor="end" font-weight="600" fill="var(--ink)">69,000</text><text x="20" y="286" fill="var(--ink)">純キャッシュフロー</text><text x="260" y="286" text-anchor="end" fill="var(--ink)">(12,000)</text><text x="340" y="286" text-anchor="end" fill="var(--ink)">11,000</text><text x="420" y="286" text-anchor="end" fill="var(--ink)">0</text><text x="20" y="310" fill="var(--ink)">月初残高</text><text x="260" y="310" text-anchor="end" fill="var(--ink)">5,000</text><text x="340" y="310" text-anchor="end" fill="var(--ink)">(7,000)</text><text x="420" y="310" text-anchor="end" fill="var(--ink)">4,000</text><rect x="196" y="318" width="70" height="26" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="1.5"/><text x="20" y="336" font-weight="600" fill="var(--ink)">月末残高</text><text x="260" y="336" text-anchor="end" font-weight="600" fill="var(--ink)">(7,000)</text><text x="340" y="336" text-anchor="end" font-weight="600" fill="var(--ink)">4,000</text><text x="420" y="336" text-anchor="end" font-weight="600" fill="var(--ink)">4,000</text></svg>`,
          caption: '3か月の合計では入金 $180,000、支払 $181,000 でほぼ同じ。それでも月で見ると、4月だけ $7,000 足りない。'
        },
        {
          title: '足りない月・余る月への手',
          list: ['不足（cash deficit）: 前もって当座借越枠や短期の借入れを用意する。設備の購入や配当を後の月に延ばす。仕入先と交渉して支払を遅らせる。早期支払割引を出して回収を早める', '余剰（cash surplus）: 短期の預金や投資にまわす。借入金を早めに返す。設備投資に使う'],
          after: '現金予算の目的は、この手を打つ時間を作ること。'
        },
        {
          title: 'なぜ？ 月ごとに並べる',
          paras: ['3か月の合計だけを見ると、ヒカリ社のお金はほとんど減らない。でも4月だけは $7,000 足りない。', '銀行に借越枠を頼むのは、足りなくなってからでは遅い。月ごとに並べるのは「いつ・いくら」足りないかを前もって知るため。減価償却を除くのも同じ理由。現金予算が見るのは、お金の出入りだけだからだ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '減価償却を支払に入れる。毎月の月初残高に、前の月の月末残高ではなく期首の残高を使う。借越 (7,000) をプラスとして足す。掛けの仕入を「仕入れた月」の支払にする（書くのは払う月）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['支払は「払う月」に書く。減価償却など現金が出ない費用は除く', '月末残高 ＝ 月初残高 ＋ 入金 − 支払。前の月の月末が次の月の月初', 'マイナスは当座借越。足りない月には、借越枠・支払の延期・回収の前倒しで前もって備える']
        },
        {
          title: '英単語',
          words: [
            ['cash payments', 'キャッシュ ペイメンツ', '支払'],
            ['net cash flow', 'ネット キャッシュ フロー', '純キャッシュフロー（入金 − 支払）'],
            ['opening balance / closing balance', 'オープニング / クロージング バランス', '月初残高 / 月末残高'],
            ['bank overdraft', 'バンク オーバードラフト', '当座借越（残高のマイナス）'],
            ['in arrears', 'イン アリアーズ', '後払い（使った後で払う）'],
            ['in advance', 'イン アドバンス', '前払い'],
            ['capital expenditure', 'キャピタル エクスペンディチャー', '設備などの資産の購入'],
            ['cash deficit / cash surplus', '', '現金の不足 / 現金の余剰']
          ]
        }
      ],
      quiz: [
        { q: 'Purchases are budgeted at $20,000 in January, $24,000 in February and $30,000 in March. 60% of purchases are paid for in the month after purchase and 40% two months after purchase. What is the budgeted payment to suppliers in March?', type: 'number', answer: 22400, unit: '$', explain: '3月に払うのは、2月の仕入の60% 24,000 × 60% ＝ 14,400 と、1月の仕入の40% 20,000 × 40% ＝ 8,000。合計 22,400。3月の仕入 30,000 は4月と5月に払うので、3月には入らない。' },
        { q: 'Production overheads are budgeted at $15,000 each month, including depreciation of $3,000. Overheads are paid one month in arrears. What is the overhead payment in the cash budget for May?', choices: ['$15,000', '$18,000', '$12,000', '$3,000'], answer: 2, explain: '減価償却 3,000 は現金が出ないので除く。15,000 − 3,000 ＝ 12,000 を翌月に払うので、5月に払うのは4月分の 12,000。15,000 は減価償却を含めた額。18,000 は、引くべき減価償却を逆に足した間違い。3,000 は減価償却そのもの。' },
        { q: 'Wages are budgeted at $10,000 for April and $12,000 for May. 75% of wages are paid in the month they are incurred and 25% in the following month. What is the budgeted wages payment in May?', type: 'number', answer: 11500, unit: '$', explain: '5月分の75% 12,000 × 75% ＝ 9,000 と、4月分の残り25% 10,000 × 25% ＝ 2,500。合計 11,500。5月の給料 12,000 をそのまま書くと、ずれを無視したことになる。' },
        { q: '6月初めの残高は当座借越 $2,000。6月の入金は $30,000、支払は $25,000。6月末の残高は？（借越ならマイナスで答える）', type: 'number', answer: 3000, unit: '$', explain: '月末残高 ＝ 月初残高 ＋ 入金 − 支払 ＝ −2,000 ＋ 30,000 − 25,000 ＝ 3,000。借越をプラスの 2,000 として足すと 7,000 になってしまう。' },
        { q: '現金予算で、8月に大きな現金不足が出ると分かった。対応として適切でないものは？', choices: ['銀行に前もって当座借越枠を頼む', '設備の購入を9月以降に延ばす', '早期支払割引を出して売掛金の回収を早める', '減価償却費を減らして不足を埋める'], answer: 3, explain: '減価償却はもともと現金が動かない費用で、現金予算に入っていない。減らしても現金は1円も増えない。借越枠の用意、支払の延期、回収の前倒しは、どれも現金の不足に直接効く手。' },
        { q: 'The budgeted bank overdraft at the end of April is $7,000. Interest of 1% per month is charged on the overdraft balance at the start of each month and paid in the same month. May receipts are $62,000 and May payments, excluding interest, are $51,000. What is the budgeted closing cash balance at the end of May?', choices: ['$4,000', '$3,930', '$4,070', '$(3,930)'], answer: 1, explain: '利息は月初の借越 7,000 × 1% ＝ 70 で、5月の支払に足す。月末 ＝ −7,000 ＋ 62,000 −（51,000 ＋ 70）＝ 3,930。4,000 は利息を忘れた額。4,070 は利息を入金のように足した額。(3,930) は符号の間違い。' }
      ]
    },
    {
      id: 'M106',
      no: 106,
      title: '総合予算①: 予算損益計算書',
      goal: '機能別予算から予算損益計算書を作り、現金予算との違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(e)'],
      slides: [
        {
          title: '1年分の定期代',
          paras: ['1年分の通勤定期 12万円を、4月にまとめて買った。4月の口座からは12万円出ていく。', 'でも「4月の生活費は12万円だった」とは言わない。1か月あたり1万円と考えるのが自然だ。お金の出入りと、その期間の本当のコストは分けて見る。これが K1 で学んだ発生主義（accruals basis）。']
        },
        {
          title: '総合予算（master budget）',
          paras: ['部門ごとの予算（機能別予算、functional budgets）を、最後に1つにまとめたものが総合予算。'],
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="販売予算、製造などの予算、販売費管理費の予算、設備投資の予算をまとめて、予算損益計算書、予算財政状態計算書、現金予算の3つからなる総合予算を作る" font-size="14"><rect x="20" y="40" width="190" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="63" text-anchor="middle" fill="var(--ink)">販売予算</text><rect x="20" y="86" width="190" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="109" text-anchor="middle" fill="var(--ink)">製造・材料・労務・間接費</text><rect x="20" y="132" width="190" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="155" text-anchor="middle" fill="var(--ink)">販売費・管理費の予算</text><rect x="20" y="178" width="190" height="36" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="201" text-anchor="middle" fill="var(--ink)">設備投資・資金の予算</text><text x="115" y="28" text-anchor="middle" fill="var(--quiet)">機能別予算</text><line x1="214" y1="127" x2="238" y2="127" stroke="var(--quiet)" stroke-width="2"/><polygon points="238,121 248,127 238,133" fill="var(--quiet)"/><rect x="252" y="40" width="168" height="174" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="336" y="66" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">総合予算</text><text x="336" y="84" text-anchor="middle" font-size="12.5" fill="var(--quiet)">master budget</text><text x="336" y="118" text-anchor="middle" fill="var(--ink)">予算損益計算書</text><text x="336" y="150" text-anchor="middle" fill="var(--ink)">予算財政状態計算書</text><text x="336" y="182" text-anchor="middle" fill="var(--ink)">現金予算</text><text x="220" y="248" text-anchor="middle" fill="var(--ink)">部門ごとの予算を1つにまとめる</text></svg>`,
          caption: 'ACCA では、総合予算は予算損益計算書・予算財政状態計算書・現金予算の3つでできている、と考える。'
        },
        {
          title: '予算損益計算書の数字はどこから',
          table: { caption: '発生主義で作る', head: ['損益計算書の行', 'どこから持ってくる'], rows: [['売上収益', '販売予算の売上（入金ではない）'], ['売上原価', '期首在庫 ＋ 仕入（製造原価）− 期末在庫'], ['給料・家賃など', 'その期間の分（払った額ではない）'], ['減価償却費', '現金は出ないが費用に入れる'], ['固定資産の売却損益', '売却代金 − 帳簿価額']] },
          after: '入れないもの: 設備の購入代金（資産になる）、借入金の返済（負債が減るだけ）、配当（利益の分配で費用ではない）、株式の発行や借入れで入るお金。'
        },
        {
          title: '例題1: 売上と売上原価',
          example: {
            problem: 'ヒカリ社の4〜6月。売上は4月 $60,000、5月 $70,000、6月 $80,000。3月末の在庫 $18,000、6月末の在庫 $27,000。4〜6月の仕入は 39,000 ＋ 45,000 ＋ 51,000 ＝ $135,000。売上収益・売上原価・売上総利益は？',
            steps: ['売上収益: 60,000 ＋ 70,000 ＋ 80,000 ＝ $210,000（同じ期間の入金 177,000 ではない）', '売上原価: 期首在庫 18,000 ＋ 仕入 135,000 − 期末在庫 27,000 ＝ $126,000', '売上総利益: 210,000 − 126,000 ＝ $84,000（売上の40%）'],
            answer: '売上収益 $210,000、売上原価 $126,000、売上総利益 $84,000'
          }
        },
        {
          title: '例題2: 費用を引いて利益へ',
          example: {
            problem: '続き。給料は毎月 $8,000。家賃は3か月分 $6,000。諸経費は毎月 $5,000（うち減価償却 $1,000）。帳簿価額 $2,000 の車両を $3,000 で売る。配当 $10,000 を払う。6月に設備を $12,000 で買う。4〜6月の予算利益は？',
            steps: ['給料: 8,000 × 3 ＝ 24,000。家賃: 4〜6月の分 6,000', '諸経費: 現金の分 4,000 × 3 ＝ 12,000、減価償却 1,000 × 3 ＝ 3,000', '費用の合計: 24,000 ＋ 6,000 ＋ 12,000 ＋ 3,000 ＝ 45,000', '車両の売却益: 3,000 − 2,000 ＝ 1,000', '利益: 84,000 − 45,000 ＋ 1,000 ＝ $40,000。配当 10,000 と設備代 12,000 は費用にしない'],
            answer: '予算利益 $40,000'
          }
        },
        {
          title: 'ヒカリ社の予算損益計算書',
          table: { caption: '20X6年4〜6月', head: ['項目', '$'], rows: [['売上収益（revenue）', '210,000'], ['売上原価（cost of sales）', '(126,000)'], ['売上総利益（gross profit）', '84,000'], ['給料', '(24,000)'], ['家賃', '(6,000)'], ['諸経費（現金の分）', '(12,000)'], ['減価償却費', '(3,000)'], ['車両の売却益', '1,000']], total: ['利益（profit for the period）', '40,000'] }
        },
        {
          title: '製造業の売上原価',
          paras: ['製造業では、売上原価を製造・材料・労務・間接費の予算から作る。'],
          list: ['売上原価 ＝ 期首の製品在庫 ＋ 当期の製造原価 − 期末の製品在庫', '全部原価計算（absorption costing）: 1単位の製造原価に固定製造間接費も含める。在庫も同じ単価なら、売上原価 ＝ 販売量 × 1単位の製造原価', '直接原価計算（marginal costing）: 固定製造間接費は製品原価に入れず、その期間の費用として全額引く'],
          note: { kind: 'tip', text: '問題文がどちらの方法で作るかを指定する。在庫の評価額が変わるので、利益も変わる（M048〜M050 の内容）。' }
        },
        {
          title: 'なぜ？ 現金予算とは別に作る',
          paras: ['ヒカリ社の4〜6月は、利益が $40,000 出るのに、現金は $5,000 から $4,000 に減る。', '売上が伸びて売掛金と在庫がふくらみ、設備も買い、配当も払ったからだ。利益は「稼ぐ力」、現金は「払う力」を表す。片方だけでは判断を誤るので、総合予算は両方を作る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '入金の額を売上収益にする。仕入をそのまま売上原価にする（在庫の増減を忘れる）。設備の購入代金・借入金の返済・配当を費用に入れる。逆に、減価償却を「現金が出ないから」と損益計算書からも外す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['総合予算 ＝ 予算損益計算書 ＋ 予算財政状態計算書 ＋ 現金予算', '損益は発生主義。売上は販売予算から、売上原価は 期首在庫 ＋ 仕入（製造原価）− 期末在庫', '減価償却は入れる。設備の購入・借入金の返済・配当は入れない']
        },
        {
          title: '英単語',
          words: [
            ['master budget', 'マスター バジェット', '総合予算'],
            ['functional budget', 'ファンクショナル バジェット', '機能別予算（部門ごとの予算）'],
            ['budgeted statement of profit or loss', '', '予算損益計算書'],
            ['cost of sales', 'コスト オブ セールス', '売上原価'],
            ['accruals basis', 'アクルーアルズ ベーシス', '発生主義'],
            ['profit on disposal', 'プロフィット オン ディスポーザル', '固定資産の売却益'],
            ['non-cash item', '', '現金が動かない項目（減価償却など）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following would appear in a budgeted statement of profit or loss but NOT in a cash budget?', choices: ['Payment for a new machine', 'Depreciation of equipment', 'Dividend paid', 'Cash received from credit customers'], answer: 1, explain: '減価償却は費用だが現金は動かないので、損益にだけ出る。機械の購入代金と配当は現金予算にだけ出る（損益の費用ではない）。顧客からの入金も現金予算の項目で、損益に出るのは売上収益。' },
        { q: 'A master budget normally consists of:', choices: ['A sales budget, a production budget and a cash budget', 'All of the functional budgets before they are combined', 'A budgeted statement of profit or loss, a budgeted statement of financial position and a cash budget', 'A budgeted statement of profit or loss only'], answer: 2, explain: '総合予算は、機能別予算をまとめた結果の3つ（予算損益計算書・予算財政状態計算書・現金予算）。販売予算や製造予算は材料になる機能別予算で、総合予算そのものではない。' },
        { q: '期首の在庫 $10,000、予算期間の仕入 $70,000、期末の在庫 $15,000。予算の売上原価は？', type: 'number', answer: 65000, unit: '$', explain: '売上原価 ＝ 期首在庫 10,000 ＋ 仕入 70,000 − 期末在庫 15,000 ＝ 65,000。仕入 70,000 をそのまま使うと、在庫が増えた分 5,000 まで費用にしてしまう。' },
        { q: 'A company budgets revenue of $150,000, cost of sales of $90,000, cash expenses of $30,000 and depreciation of $5,000. It will also buy a machine for $20,000 and pay a dividend of $8,000. What is the budgeted profit for the period?', type: 'number', answer: 25000, unit: '$', explain: '150,000 − 90,000 − 30,000 − 5,000 ＝ 25,000。機械の購入 20,000 は資産、配当 8,000 は利益の分配なので、どちらも引かない。減価償却 5,000 は現金が出なくても費用なので引く。' },
        { q: '製造業（全部原価計算）。製品1個の製造原価は $30。期首の製品在庫 500個、製造 4,200個、期末の製品在庫 700個（在庫も1個 $30 で評価）。予算の売上原価は？', type: 'number', answer: 120000, unit: '$', explain: '販売量 ＝ 500 ＋ 4,200 − 700 ＝ 4,000個。売上原価 ＝ 4,000 × 30 ＝ 120,000。金額で 15,000 ＋ 126,000 − 21,000 ＝ 120,000 と計算しても同じ。製造量 4,200個 × 30 ＝ 126,000 は製造原価で、売上原価ではない。' }
      ]
    },
    {
      id: 'M107',
      no: 107,
      title: '総合予算②: 予算財政状態計算書',
      goal: '期首の財政状態計算書とほかの予算から、予算財政状態計算書を作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C2(e)'],
      slides: [
        {
          title: '1年後の「財産の一覧」',
          paras: ['1年後の自分の財産の一覧を予想してみる。預金はいくら、車の価値はいくら、ローンの残りはいくら。', '今の一覧に、1年間の入金・支払・買い物・返済を足し引きすれば作れる。会社の予算財政状態計算書（budgeted statement of financial position）も同じ作り方をする。']
        },
        {
          title: '作り方の基本',
          formula: '期末残高 ＝ 期首残高 ＋ 増えた分 − 減った分',
          paras: ['期首の財政状態計算書（実績）から出発して、予算期間の動きを足し引きする。動きの数字は、販売・仕入・現金・損益などほかの予算から持ってくる。自分で新しく予想する数字はほとんどない。']
        },
        {
          title: '各行の求め方',
          table: { caption: '予算財政状態計算書', head: ['行', '期末の求め方'], rows: [['非流動資産', '期首 ＋ 購入 − 売った資産の帳簿価額 − 減価償却'], ['棚卸資産', '在庫の予算の期末在庫'], ['売掛金', '期首 ＋ 掛け売上 − 回収'], ['現金', '現金予算の最後の月末残高'], ['買掛金', '期首 ＋ 仕入 − 支払'], ['未払費用', 'まだ払っていない費用'], ['株式資本', '期首 ＋ 新しく発行した株式'], ['利益剰余金', '期首 ＋ 予算利益 − 配当']] },
          after: '借入金も同じ形: 期首 ＋ 新しい借入れ − 返済。'
        },
        {
          title: '例題1: ヒカリ社の6月末の資産',
          example: {
            problem: '3月末: 非流動資産 $60,000（売る予定の車両 $2,000 を含む）、在庫 $18,000、売掛金 $52,000、現金 $5,000。4〜6月: 設備の購入 $12,000、減価償却 $3,000、車両を売却、売上（全部掛け）$210,000、売掛金からの回収 $177,000、6月末の在庫 $27,000、現金予算の6月末残高 $4,000。6月末の資産は？',
            steps: ['非流動資産: 60,000 ＋ 12,000 − 2,000 − 3,000 ＝ 67,000（売った車両は帳簿価額で減らす）', '棚卸資産: 在庫の予算から 27,000', '売掛金: 52,000 ＋ 210,000 − 177,000 ＝ 85,000（確かめ: 5月売上の30% 21,000 ＋ 6月売上の80% 64,000）', '現金: 現金予算から 4,000', '資産合計: 67,000 ＋ 27,000 ＋ 85,000 ＋ 4,000 ＝ 183,000'],
            answer: '資産合計 $183,000'
          }
        },
        {
          title: '例題2: 負債と資本',
          example: {
            problem: '続き。3月末: 買掛金 $33,000、未払の諸経費 $4,000、株式資本 $50,000、利益剰余金 $48,000。4〜6月: 仕入 $135,000、仕入の支払 $117,000、諸経費（現金の分）の発生 $12,000 と支払 $12,000、予算利益 $40,000、配当 $10,000。6月末の負債と資本は？',
            steps: ['買掛金: 33,000 ＋ 135,000 − 117,000 ＝ 51,000（6月の仕入がまだ払われていない）', '未払費用: 4,000 ＋ 12,000 − 12,000 ＝ 4,000（6月分の諸経費）', '株式資本: 新しい発行はないので 50,000', '利益剰余金: 48,000 ＋ 40,000 − 10,000 ＝ 78,000', '合計: 51,000 ＋ 4,000 ＋ 50,000 ＋ 78,000 ＝ 183,000。資産合計と一致する'],
            answer: '負債と資本の合計 $183,000（資産と一致）'
          }
        },
        {
          title: 'ヒカリ社の予算財政状態計算書',
          table: { caption: '3月末は実績、6月末は予算', head: ['項目', '3月末 $', '6月末 $'], rows: [['非流動資産', '60,000', '67,000'], ['棚卸資産', '18,000', '27,000'], ['売掛金', '52,000', '85,000'], ['現金', '5,000', '4,000'], ['資産合計', '135,000', '183,000'], ['買掛金', '33,000', '51,000'], ['未払費用', '4,000', '4,000'], ['株式資本', '50,000', '50,000'], ['利益剰余金', '48,000', '78,000']], total: ['負債と資本の合計', '135,000', '183,000'] }
        },
        {
          title: '当座借越はどこに書く？',
          paras: ['現金予算の最後の残高がマイナスなら、それは資産ではない。流動負債（current liabilities）の当座借越（bank overdraft）として書く。', '例: ヒカリ社が4月末の予算財政状態計算書を作るなら、現金は (7,000)。資産の現金を0にして、流動負債に当座借越 7,000 を書く。']
        },
        {
          title: 'なぜ？ 財政状態計算書まで作る',
          paras: ['利益と現金を見ても、まだ分からないことがある。売掛金や在庫が増えすぎていないか、借入れに頼りすぎていないか。', 'もう1つの役目は検算。資産と「負債＋資本」が一致すれば、販売・仕入・現金・損益の各予算がつじつまの合う形でつながっている。一致しなければ、どこかの予算に間違いがある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '配当を利益剰余金から引き忘れる。売った資産を売却代金で減らす（減らすのは帳簿価額）。当座借越をマイナスの資産にする。売掛金に売上をそのまま書く（回収した分を引く）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['期末残高 ＝ 期首 ＋ 増えた分 − 減った分。数字はほかの予算から持ってくる', '現金は現金予算の最後の残高（マイナスなら当座借越）、利益剰余金は 期首 ＋ 予算利益 − 配当', '資産 ＝ 負債 ＋ 資本 が一致すれば、総合予算がつながっている']
        },
        {
          title: '英単語',
          words: [
            ['budgeted statement of financial position', '', '予算財政状態計算書'],
            ['non-current assets', 'ノンカレント アセッツ', '非流動資産'],
            ['carrying amount', 'キャリング アマウント', '帳簿価額'],
            ['trade receivables / trade payables', 'トレード レシーバブルズ / ペイアブルズ', '売掛金 / 買掛金'],
            ['retained earnings', 'リテインド アーニングス', '利益剰余金'],
            ['current liabilities', 'カレント ライアビリティーズ', '流動負債'],
            ['accruals', 'アクルーアルズ', '未払費用']
          ]
        }
      ],
      quiz: [
        { q: 'Opening trade receivables are $30,000. Budgeted credit sales are $120,000 and budgeted cash receipts from customers are $110,000. What are budgeted closing trade receivables?', type: 'number', answer: 40000, unit: '$', explain: '期末の売掛金 ＝ 期首 30,000 ＋ 掛け売上 120,000 − 回収 110,000 ＝ 40,000。回収を足して売上を引くと逆になる。' },
        { q: 'Retained earnings at the start of the budget period are $60,000. Budgeted profit for the period is $25,000 and a dividend of $8,000 will be paid. What are the budgeted closing retained earnings?', type: 'number', answer: 77000, unit: '$', explain: '期首 60,000 ＋ 予算利益 25,000 − 配当 8,000 ＝ 77,000。配当は費用ではないので利益の計算では引かず、利益剰余金のところで引く。引き忘れると 85,000 になる。' },
        { q: '現金予算の最後の月末残高が (7,000) だった。予算財政状態計算書ではどう書く？', choices: ['流動資産に現金 −7,000 と書く', '流動負債に当座借越 7,000 と書く', '書かない（現金予算だけの話なので）', '利益剰余金から 7,000 を引く'], answer: 1, explain: 'マイナスの現金は銀行への借り（当座借越）なので、流動負債に書く。資産にマイナスで書くと、資産と負債の両方が小さく見えてしまう。利益剰余金は損益と配当でしか動かない。' },
        { q: '期首の非流動資産（帳簿価額）は $80,000。予算期間に設備を $20,000 で買い、帳簿価額 $4,000 の機械を $6,000 で売る。減価償却費は $6,000。期末の非流動資産は？', type: 'number', answer: 90000, unit: '$', explain: '80,000 ＋ 20,000 − 4,000 − 6,000 ＝ 90,000。売った機械は帳簿価額 4,000 で減らす。売却代金 6,000 で減らすと 88,000 になって間違い。売却益 2,000 は損益計算書の話。' },
        { q: 'How is the budgeted closing trade payables figure calculated?', choices: ['Opening payables + budgeted payments to suppliers - budgeted purchases', 'Budgeted cost of sales - budgeted payments to suppliers', 'Opening payables + budgeted cost of sales', 'Opening payables + budgeted purchases - budgeted payments to suppliers'], answer: 3, explain: '買掛金は仕入で増え、支払で減る。期末 ＝ 期首 ＋ 仕入 − 支払。「＋ payments − purchases」は足し算と引き算が逆。売上原価は在庫の増減を含むので、仕入の代わりには使えない。' }
      ]
    }
  ],
  cards: [
    { id: 'M104-1', lesson: 'M104', q: '現金予算（cash budget）とは？', a: '毎月の入金・支払と月末残高を予想する表' },
    { id: 'M104-2', lesson: 'M104', q: '入金はどの月に書く？', a: '売った月ではなく、お金が入る月' },
    { id: 'M104-3', lesson: 'M104', q: '早期支払割引を受ける客からの入金は？', a: '売上 × その客の割合 ×（1 − 割引率）' },
    { id: 'M104-4', lesson: 'M104', q: '現金予算の入金に入れないものは？', a: '減価償却・貸倒れ・売却益など、お金が動かないもの' },
    { id: 'M104-5', lesson: 'M104', q: '固定資産を売ったとき、入金に書く額は？', a: '売却代金（proceeds）。売却益ではない' },
    { id: 'M104-6', lesson: 'M104', q: 'なぜ売上を入金の月に並べ直す？', a: '入金は遅れて来るので、利益が出ても現金が足りない月を前もって見つけるため' },
    { id: 'M104-7', lesson: 'M104', q: '「売上の10%は現金売上」のときの入金の計算は？', a: '現金売上は当月に全額。回収の割合は掛け売上（90%）だけに掛ける' },
    { id: 'M105-7', lesson: 'M105', q: '当座借越の利息の扱いは？', a: '月初の借越残高 × 月利を、その月の支払に足す' },
    { id: 'M105-1', lesson: 'M105', q: '月末残高の式は？', a: '月初残高 ＋ 入金 − 支払' },
    { id: 'M105-2', lesson: 'M105', q: '現金予算で減価償却は？', a: '書かない。現金が出ない費用だから' },
    { id: 'M105-3', lesson: 'M105', q: '現金予算の (7,000) は何を表す？', a: '7,000 の当座借越（残高がマイナス）' },
    { id: 'M105-4', lesson: 'M105', q: '次の月の月初残高は？', a: '前の月の月末残高' },
    { id: 'M105-5', lesson: 'M105', q: '現金の不足が見込まれる月への手は？', a: '借越枠の用意、支払の延期、回収の前倒し' },
    { id: 'M105-6', lesson: 'M105', q: 'in arrears の意味は？', a: '後払い（使った後の月に払う）' },
    { id: 'M106-1', lesson: 'M106', q: '総合予算（master budget）の3つは？', a: '予算損益計算書・予算財政状態計算書・現金予算' },
    { id: 'M106-2', lesson: 'M106', q: '予算の売上原価（小売）の式は？', a: '期首在庫 ＋ 仕入 − 期末在庫' },
    { id: 'M106-3', lesson: 'M106', q: '予算損益計算書に入れないものは？', a: '設備の購入代金・借入金の返済・配当' },
    { id: 'M106-4', lesson: 'M106', q: '減価償却は予算損益計算書に入る？', a: '入る。現金は出ないが費用だから' },
    { id: 'M106-5', lesson: 'M106', q: '予算の売上収益は入金額？', a: 'いいえ。販売予算の売上（発生主義）' },
    { id: 'M106-6', lesson: 'M106', q: '利益が出ても現金が減るのはなぜ？', a: '売掛金・在庫の増加、設備の購入、配当などでお金が出るから' },
    { id: 'M107-1', lesson: 'M107', q: '予算財政状態計算書の作り方の基本は？', a: '期末 ＝ 期首 ＋ 増えた分 − 減った分' },
    { id: 'M107-2', lesson: 'M107', q: '期末の売掛金は？', a: '期首 ＋ 掛け売上 − 回収' },
    { id: 'M107-3', lesson: 'M107', q: '期末の利益剰余金は？', a: '期首 ＋ 予算利益 − 配当' },
    { id: 'M107-4', lesson: 'M107', q: '期末の現金はどこから持ってくる？', a: '現金予算の最後の月末残高' },
    { id: 'M107-5', lesson: 'M107', q: '現金予算の最後がマイナスなら？', a: '流動負債の当座借越として書く' },
    { id: 'M107-6', lesson: 'M107', q: '資産と「負債＋資本」が一致しないときは？', a: 'どこかの予算に間違いがある' }
  ]
});
