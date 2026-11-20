(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 17,
  part: 11,
  partTitle: '照合',
  lessons: [
    // ---------------------------------------------------------------- L81
    {
      id: 'L81',
      no: 81,
      title: '銀行勘定調整の目的と差異の原因',
      goal: '銀行勘定調整をする理由を説明し、帳簿と銀行明細書の残高がずれる原因を3つのグループに分けられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['E1(a)', 'E1(b)'],
      slides: [
        {
          title: '家計簿と通帳が合わない',
          paras: ['月末、家計簿の残高は 120,000円。でも通帳を記帳すると 125,280円。', '理由を探すと、ATM 手数料 220円を書き忘れていた。土曜の夜に振り込んだ 10,000円は、通帳では月曜の扱いで、まだ引かれていなかった。家計簿に 3,800円と書いた買い物が、本当は 8,300円だった。', '差を1つずつ説明できれば、家計簿は信頼できる。']
        },
        {
          title: '同じお金に、記録が2つ',
          paras: ['会社の銀行口座のお金には、記録が2つある。', '1つは会社が書く銀行勘定（bank general ledger account）。cash book（現金出納帳）とも呼ぶ（L28）。もう1つは銀行が作る銀行明細書（bank statement）。今はネットバンキングの取引履歴（internet banking records）のことも多い。', 'この2つの残高を比べ、差の理由を全部説明する作業を、銀行勘定調整（bank reconciliation）という。']
        },
        {
          title: '何のためにやるのか',
          list: ['会社の帳簿（cash book）の記入漏れや誤りを見つけて直す', '銀行側の誤りを見つける', '横領などの不正を早く見つける（内部統制、internal control）', '財務諸表に載せる銀行残高を正しくする', '長く決済されない古い小切手などに気づく'],
          after: 'お金は一番ごまかしやすい資産。外の第三者（銀行）の記録と照らすので、強い確認になる。'
        },
        {
          title: '差が出る理由は3つのグループ',
          svg: `<svg viewBox="0 0 440 335" role="img" aria-label="帳簿と銀行明細書の差は、時間差、明細書で初めて分かるもの、誤りの3つに分かれる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">差が出る3つの理由</text><rect x="20" y="48" width="400" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="74" font-size="16" font-weight="600" fill="var(--ink)">1. 時間差（timing differences）</text><text x="36" y="98" fill="var(--ink)">未取付小切手・未達の預け入れ</text><text x="36" y="120" fill="var(--quiet)">帳簿は正しい。調整表で説明する</text><rect x="20" y="144" width="400" height="84" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="170" font-size="16" font-weight="600" fill="var(--ink)">2. 明細書で初めて分かるもの</text><text x="36" y="194" fill="var(--ink)">手数料・利息・自動引落し・不渡り</text><text x="36" y="216" fill="var(--quiet)">帳簿（cash book）を直す</text><rect x="20" y="240" width="400" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="266" font-size="16" font-weight="600" fill="var(--ink)">3. 誤り（errors）</text><text x="36" y="290" fill="var(--ink)">会社の帳簿の誤り → cash book を直す</text><text x="36" y="312" fill="var(--ink)">銀行の誤り → 調整表で説明する</text></svg>`,
          caption: '直すのは「2」と「帳簿の誤り」だけ。「1」と「銀行の誤り」は帳簿を直さず、調整表で説明する。'
        },
        {
          title: '時間差①: 未取付小切手',
          paras: ['小切手（cheque）は「この紙を持ってきた人に、私の口座から $X 払って」と銀行に頼む紙。', '会社は仕入先に小切手を渡した日に、cash book に出金を書く（Cr Bank）。でも仕入先が銀行に持ち込み、お金が引かれるまで数日かかる。', '期末にまだ引かれていない小切手を、未取付小切手（unpresented cheques）という。明細書の残高は、まだ高いまま。']
        },
        {
          title: '時間差②: 未達の預け入れ',
          paras: ['お店が受け取った現金や小切手を銀行に預けることを、預け入れ（lodgement）という。cash book には預けた日に入金を書く（Dr Bank）。', '期末日の夕方に預けると、明細書に載るのは翌日以降になる。これを未達の預け入れ（outstanding lodgements）という。明細書の残高は、まだ低いまま。'],
          note: { kind: 'tip', text: '時間差はどちらも、会社の帳簿が正しく、銀行が数日遅れているだけ。放っておいても翌月に銀行が追いつく。' }
        },
        {
          title: '明細書で初めて分かるもの',
          table: {
            caption: '銀行が先に処理し、会社がまだ書いていないもの',
            head: ['項目', 'cash book の残高'],
            rows: [
              ['銀行手数料（bank charges）', '減らす'],
              ['当座借越の利息（overdraft interest）', '減らす'],
              ['自動引落し・定期払い（direct debit / standing order）', '減らす'],
              ['不渡りの小切手（dishonoured cheque）', '減らす'],
              ['受取利息（interest received）', '増やす'],
              ['お客さんからの振込（direct credit / BACS receipt）', '増やす']
            ]
          }
        },
        {
          title: '不渡りの小切手とは',
          paras: ['お客さんから $400 の小切手を受け取り、銀行に預けた。cash book には Dr Bank 400 / Cr Trade receivables 400 と書いた。', 'ところがお客さんの口座にお金がなく、銀行は入金を取り消した。これが不渡り（dishonoured cheque）。お金は入っていないので、cash book を元に戻す。お客さんへの売掛金も復活する。'],
          journal: [
            { side: 'Dr', account: 'Trade receivables（売掛金）', amount: '400' },
            { side: 'Cr', account: 'Bank（銀行）', amount: '400' }
          ]
        },
        {
          title: '明細書は借方・貸方が逆',
          paras: ['L28 で見たとおり、預金は銀行にとって「返すお金」＝負債。だから明細書では、入金が Credit、出金が Debit と書かれる。', '明細書で残高が Credit（in funds）なら、口座にお金がある。Debit や O/D（overdrawn）なら当座借越。cash book では借方残高が預金、貸方残高が借越になる。'],
          note: { kind: 'warn', text: '明細書の「Cr $500」を cash book の貸方残高（借越）と取り違えない。明細書の Cr は「お金がある」側。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['銀行勘定調整は、cash book と銀行明細書の差を全部説明して、帳簿の誤りと不正を見つける作業', '差の理由は「時間差」「明細書で初めて分かるもの」「誤り」の3つ', '帳簿を直すのは、明細書で初めて分かるものと帳簿の誤りだけ']
        },
        {
          title: '英単語',
          words: [
            ['bank reconciliation', 'バンク・リコンシリエーション', '銀行勘定調整'],
            ['bank statement', 'バンク・ステートメント', '銀行明細書'],
            ['unpresented cheques', 'アンプレゼンティッド・チェックス', '未取付小切手（銀行でまだ引かれていない）'],
            ['outstanding lodgements', 'アウトスタンディング・ロッジメンツ', '未達の預け入れ（uncleared lodgements とも）'],
            ['timing difference', 'タイミング・ディファレンス', '時間差'],
            ['dishonoured cheque', 'ディスオナード・チェック', '不渡りの小切手'],
            ['standing order / direct debit', 'スタンディング・オーダー／ダイレクト・デビット', '定期払い／自動引落し'],
            ['in funds / overdrawn', 'イン・ファンズ／オーバードローン', '預金がある／借越している']
          ]
        }
      ],
      quiz: [
        {
          q: 'Which of the following is a timing difference in a bank reconciliation?',
          choices: ['Bank charges not yet recorded in the cash book', 'Unpresented cheques', 'A dishonoured cheque from a customer', 'A standing order not yet recorded in the cash book'],
          answer: 1,
          explain: '未取付小切手は、cash book には正しく記録済みで、銀行が後から引くだけの時間差。銀行手数料・不渡り・定期払いは、銀行が先に処理していて cash book に未記入のもの。こちらは cash book を直す必要がある。'
        },
        {
          q: 'Which of the following items require an entry in the cash book? (1) bank charges (2) unpresented cheques (3) outstanding lodgements (4) a standing order',
          choices: ['(1) and (4) only', '(2) and (3) only', '(1), (2) and (4) only', 'All four items'],
          answer: 0,
          explain: '帳簿に書くのは、明細書で初めて分かる (1) 銀行手数料と (4) 定期払い。(2)(3) は時間差なので cash book はすでに正しい。ここに記入すると二重に記録してしまう。'
        },
        {
          q: '銀行勘定調整の目的として正しくないものはどれ？',
          choices: ['cash book の記入漏れや誤りを見つける', '試算表の借方と貸方の合計を一致させる', '銀行側の誤りを見つける', '財務諸表に載せる銀行残高を正しくする'],
          answer: 1,
          explain: '銀行勘定調整が比べるのは、cash book と銀行明細書の2つだけ。試算表の合計とは関係がない。ほかの3つは、どれも銀行勘定調整の目的。'
        },
        {
          q: 'お客さんの小切手 $250 が不渡りになった。cash book への影響は？',
          choices: ['$250 減る（Dr Trade receivables / Cr Bank）', '$250 増える（Dr Bank / Cr Trade receivables）', '時間差なので何もしない', '$250 減る（Dr Irrecoverable debts / Cr Bank）'],
          answer: 0,
          explain: '預けたときに Dr Bank と書いたが、お金は入っていない。だから Cr Bank で取り消し、売掛金を復活させる。まだ回収できる見込みがあるので、この時点で貸倒れ（irrecoverable debts）にはしない。'
        },
        {
          q: '銀行明細書の期末残高が「$500 O/D」となっている。どういう意味？',
          choices: ['口座に $500 ある（cash book では借方残高）', '$500 の当座借越（cash book では貸方残高）', '銀行が $500 の手数料を引いた', '未取付小切手が $500 ある'],
          answer: 1,
          explain: 'O/D は overdrawn（借越）の略。口座がマイナスで、銀行からお金を借りている状態。cash book では貸方残高、財務諸表では負債になる。'
        }
      ]
    },
    // ---------------------------------------------------------------- L82
    {
      id: 'L82',
      no: 82,
      title: '銀行元帳を修正する',
      goal: '明細書で見つかった記入漏れと帳簿の誤りを仕訳で直し、修正後の cash book 残高を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['E1(c)'],
      slides: [
        {
          title: '家計簿を書き足す',
          paras: ['通帳に ATM 手数料 220円が載っていた。本当に払ったお金なので、家計簿に書き足す。', '家計簿に 3,800円と書いた買い物は、レシートを見ると 8,300円だった。4,500円分、支出を書き足りていない。これも直す。', 'でも、まだ通帳に載っていない月曜の振込は直さない。家計簿の方が正しいから。']
        },
        {
          title: 'まず cash book を直す',
          paras: ['銀行勘定調整では、最初に cash book を直す。直すのは次の2種類だけ。'],
          list: ['明細書にあって、cash book にまだないもの（手数料・利息・自動引落し・振込・不渡りなど）', 'cash book 自体の誤り（金額の書き間違い、借方と貸方の逆など）'],
          formula: '修正後の残高 ＝ 修正前の残高 ＋ 増やす項目 − 減らす項目',
          after: '時間差（未取付小切手・未達の預け入れ）は直さない。'
        },
        {
          title: '記入漏れの仕訳',
          table: {
            caption: 'どれも本当に起きた取引なので、仕訳で記録する',
            head: ['項目', '仕訳'],
            rows: [
              ['銀行手数料', 'Dr Bank charges / Cr Bank'],
              ['借越の利息', 'Dr Interest expense / Cr Bank'],
              ['自動引落し・定期払い（保険料など）', 'Dr Insurance など / Cr Bank'],
              ['不渡りの小切手', 'Dr Trade receivables / Cr Bank'],
              ['受取利息', 'Dr Bank / Cr Interest income'],
              ['お客さんからの振込', 'Dr Bank / Cr Trade receivables']
            ]
          },
          after: '定期払いが買掛金の支払いなら、借方は Trade payables になる。'
        },
        {
          title: '帳簿の誤りの直し方',
          paras: ['3ステップで考える。(1) 本当はどう書くべきだったか。(2) 実際はどう書いたか。(3) その差を直す仕訳。', '例: 仕入先への支払い $1,270 を、$1,720 と書いた（数字の入れ替え、transposition error）。出金を $450 多く書いている。だから $450 戻す。'],
          journal: [
            { side: 'Dr', account: 'Bank（銀行）', amount: '450' },
            { side: 'Cr', account: 'Trade payables（買掛金）', amount: '450' }
          ]
        },
        {
          title: '借方と貸方の逆は2倍ずれる',
          paras: ['お客さんからの入金 $200 を、出金として書いてしまった。本当は残高が $200 増えるはずが、$200 減っている。', '差は $200 ＋ $200 ＝ $400。cash book を $400 増やす（Dr Bank 400 / Cr Trade receivables 400）。'],
          note: { kind: 'warn', text: '逆に書いた誤りを $200 だけ直すと、まだ $200 ずれる。「消す分」と「正しく書く分」で2倍になる。' }
        },
        {
          title: 'なぜ？ 時間差は直さない',
          paras: ['手数料や振込は、期末までに本当に起きた取引。会社の帳簿にないのは、会社が知らなかっただけ。だから記録しないと、財務諸表が間違う。', '一方、未取付小切手は会社が正しく書いた取引。銀行が遅れているだけなので、帳簿を直すと二重に記録してしまう。']
        },
        {
          title: '例題',
          example: {
            problem: 'Kiwi社の12月31日の cash book は借方残高 $3,460。明細書と比べて次が分かった。(1) 銀行手数料 $85 が未記入 (2) 保険料の定期払い $240 が未記入 (3) お客さんからの振込 $1,150 が未記入 (4) お客さんの小切手 $410 が不渡り (5) 仕入先への小切手 $630 を $360 と記入していた (6) 未取付小切手 $900 (7) 未達の預け入れ $1,200 (8) 銀行が他社の小切手 $150 を誤って Kiwi社の口座から引いていた。修正後の残高は？',
            steps: ['(6)(7) は時間差、(8) は銀行の誤り。どれも cash book は正しいので、ここでは何もしない（L83 の調整表で使う）','増やす項目: (3) 振込 $1,150', '減らす項目: (1) $85 ＋ (2) $240 ＋ (4) $410 ＝ $735', '(5) 出金を $630 − $360 ＝ $270 少なく書いている。$270 減らす', '減らす合計: $735 ＋ $270 ＝ $1,005', '修正後: $3,460 ＋ $1,150 − $1,005 ＝ $3,605'],
            answer: '$3,605（借方残高＝預金）'
          }
        },
        {
          title: '修正後の銀行勘定',
          paras: ['例題の修正を勘定に書くと、こうなる。'],
          tAccount: {
            name: 'Bank（cash book、修正）',
            debit: [['Balance b/d', '3,460'], ['Trade receivables（振込）', '1,150']],
            credit: [['Bank charges', '85'], ['Insurance', '240'], ['Trade receivables（不渡り）', '410'], ['Trade payables（誤り）', '270']],
            balance: { side: 'credit', label: 'Balance c/d', amount: '3,605' }
          },
          after: '借方の合計 $4,610 ＝ 貸方の合計 $1,005 ＋ 次期繰越 $3,605。'
        },
        {
          title: '残高が借越のとき',
          paras: ['cash book が貸方残高（当座借越）$500 のときに、手数料 $60 が見つかった。借越はマイナスとして計算する。'],
          formula: '−500 − 60 ＝ −560 → 当座借越 $560',
          note: { kind: 'warn', text: '借越 $500 から手数料を引いて「借越 $440」にするのは間違い。お金が出ていけば、借越は大きくなる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['先に cash book を直す。直すのは記入漏れと帳簿の誤りだけ', '誤りは「本当は」と「実際」の差を直す。借方と貸方の逆は2倍', '借越はマイナスとして計算する']
        },
        {
          title: '英単語',
          words: [
            ['corrected (adjusted) cash book balance', 'コレクティッド・キャッシュブック・バランス', '修正後の cash book 残高'],
            ['omission', 'オミッション', '記入漏れ'],
            ['transposition error', 'トランスポジション・エラー', '数字の入れ替えの誤り（1,270 → 1,720）'],
            ['direct credit / BACS', 'ダイレクト・クレジット／バックス', '口座への直接の振込'],
            ['interest received', 'インタレスト・レシーブド', '受取利息'],
            ['bank charges', 'バンク・チャージズ', '銀行手数料']
          ]
        }
      ],
      quiz: [
        {
          q: 'The cash book of Pear Co shows a debit balance of $2,300. Bank charges of $50 and a direct debit of $120 have not been recorded. A cheque for $400 received from a customer has been dishonoured. What is the corrected cash book balance?',
          type: 'number',
          answer: 1730,
          unit: '$',
          explain: '3つとも cash book を減らす項目。$2,300 − $50 − $120 − $400 ＝ $1,730（借方残高）。不渡りは、入ったと思ったお金が入っていないので減らす。'
        },
        {
          q: 'A cheque payment of $940 to a supplier was entered in the cash book as $490. Which journal entry corrects this error?',
          choices: ['Dr Trade payables 450, Cr Bank 450', 'Dr Bank 450, Cr Trade payables 450', 'Dr Trade payables 940, Cr Bank 940', 'No entry, because it is a timing difference'],
          answer: 0,
          explain: '本当は $940 出金するはずが、$490 しか書いていない。出金が $450 足りないので、さらに Cr Bank 450（相手は買掛金の減少 Dr Trade payables）。Dr Bank にすると、残高をさらにずらしてしまう。$940 全額を書くと、すでに書いた $490 と二重になる。'
        },
        {
          q: 'Which of the following would NOT be entered in the cash book when preparing a bank reconciliation?',
          choices: ['Interest received shown on the bank statement', 'An unpresented cheque', 'A standing order shown on the bank statement', 'A dishonoured cheque'],
          answer: 1,
          explain: '未取付小切手は、会社が渡した日にすでに cash book に記入している。銀行が遅れているだけの時間差なので、もう一度書くと二重になる。ほかの3つは明細書で初めて分かるもので、cash book に記入する。'
        },
        {
          q: 'cash book は貸方残高 $800（当座借越）。銀行手数料 $40 とお客さんからの振込 $300 が未記入だった。修正後の残高は？',
          choices: ['$540 の当座借越', '$1,060 の当座借越', '$540 の預金（借方残高）', '$1,140 の当座借越'],
          answer: 0,
          explain: '借越はマイナスで計算する。−800 − 40 ＋ 300 ＝ −540 → 借越 $540。$1,060 は借越を預金のようにプラスで扱った間違い（800 − 40 ＋ 300）。$1,140 は振込まで借越を増やす方向にした間違い。'
        },
        {
          q: 'お客さんからの入金 $250 を、cash book の出金側に書いてしまった。修正で cash book の残高をいくら増やす？',
          type: 'number',
          answer: 500,
          unit: '$',
          explain: '本当は $250 増えるはずが、$250 減っている。差は $250 ＋ $250 ＝ $500。Dr Bank 500 / Cr Trade receivables 500 で直す。$250 だけでは、まだ $250 ずれたまま。'
        }
      ]
    },
    // ---------------------------------------------------------------- L83
    {
      id: 'L83',
      no: 83,
      title: '銀行勘定調整表を作る',
      goal: '明細書の残高から時間差と銀行の誤りを調整して、修正後の cash book 残高と一致させる調整表を作れるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['E1(d)'],
      slides: [
        {
          title: '通帳は数日遅れている',
          paras: ['L82 で家計簿を直したら、残高は 115,280円（120,000 − 220 − 4,500）。通帳は 125,280円で、まだ 10,000円ずれている。', '原因は、土曜の夜に振り込んだ 10,000円。家計簿には書いたが、通帳で引かれるのは月曜。', '「通帳 125,280円 − まだ引かれていない 10,000円 ＝ 115,280円」と説明できれば、家計簿は正しいと確かめられる。']
        },
        {
          title: '調整表の形',
          paras: ['帳簿を直したあとに残る差は、時間差と銀行の誤りだけ。これを並べた表が、銀行勘定調整表（bank reconciliation statement）。明細書の残高から始めるのが基本。'],
          table: {
            caption: '銀行勘定調整表の型',
            head: ['項目', '$'],
            rows: [
              ['明細書の残高（balance per bank statement）', 'X'],
              ['加算: 未達の預け入れ（outstanding lodgements）', 'X'],
              ['減算: 未取付小切手（unpresented cheques）', '(X)'],
              ['加算または減算: 銀行の誤り（bank errors）', 'X'],
            ],
            total: ['修正後の cash book 残高（balance per cash book）', 'X']
          }
        },
        {
          title: 'なぜ足す？ なぜ引く？',
          paras: ['未達の預け入れ: お金はもう預けたのに、銀行がまだ記録していない。明細書は低すぎるので、足す。', '未取付小切手: 小切手はもう渡したのに、銀行がまだ引いていない。明細書は高すぎるので、引く。', '銀行が帳簿に追いついたら、明細書はどうなるか、と考えれば迷わない。']
        },
        {
          title: '銀行の誤り',
          paras: ['銀行が、他社の小切手 $150 を間違えてこの会社の口座から引いた。明細書の残高は $150 低すぎる。', 'これは会社の取引ではないので、cash book は直さない。調整表で明細書の残高に $150 足し戻し、銀行に訂正を頼む。', '逆に、他社への入金が誤ってこの口座に入っていたら、明細書が高すぎるので引く。'],
          note: { kind: 'tip', text: '会社の誤り → cash book を直す。銀行の誤り → 調整表で明細書の残高を直す。誰が間違えたかで、直す場所が決まる。' }
        },
        {
          title: '例題',
          example: {
            problem: 'L82 の Kiwi社。修正後の cash book は $3,605（借方）。12月31日の明細書の残高は $3,155（預金）。未達の預け入れ $1,200、未取付小切手 $900。さらに、銀行が他社の小切手 $150 を誤って Kiwi社の口座から引いていた。調整表を作り、一致を確かめよう。',
            steps: ['明細書の残高から始める: $3,155', '未達の預け入れを足す: $3,155 ＋ $1,200 ＝ $4,355', '未取付小切手を引く: $4,355 − $900 ＝ $3,455', '銀行の誤りは明細書が低すぎるので足す: $3,455 ＋ $150 ＝ $3,605', '修正後の cash book $3,605 と一致する'],
            answer: '調整後 $3,605 ＝ 修正後の cash book $3,605。一致したので照合完了'
          }
        },
        {
          title: 'Kiwi社の調整表',
          table: {
            caption: 'Bank reconciliation statement at 31 December',
            head: ['Item', '$'],
            rows: [
              ['Balance per bank statement', '3,155'],
              ['Add: outstanding lodgements', '1,200'],
              ['Less: unpresented cheques', '(900)'],
              ['Add: bank error', '150']
            ],
            total: ['Balance per corrected cash book', '3,605']
          }
        },
        {
          title: '借越のときはマイナスで',
          paras: ['明細書が借越 $1,000（O/D）なら −1,000 から始める。未達の預け入れ $1,500、未取付小切手 $300 なら:'],
          formula: '−1,000 ＋ 1,500 − 300 ＝ ＋200 → cash book は借方残高 $200',
          after: '答えがマイナスなら当座借越、プラスなら預金。最後に向きを必ず書く。'
        },
        {
          title: '財務諸表に載るのはどっち？',
          paras: ['財政状態計算書に載せるのは、修正後の cash book の残高。Kiwi社なら $3,605 を流動資産（cash and cash equivalents）に載せる。明細書の $3,155 ではない。', '修正後の残高が貸方（借越）なら、流動負債に載せる。詳しくは L85 で学ぶ。'],
          note: { kind: 'tip', text: '明細書から始める型のほかに、cash book から始めて明細書に合わせる型もある。そのときは足し引きが全部逆（未取付小切手を足し、未達の預け入れを引く）。' }
        },
        {
          title: 'よくある間違い',
          list: ['未取付小切手や未達の預け入れを、cash book にも記入してしまう（二重記録）', '未達の預け入れを引き、未取付小切手を足す（逆）', 'cash book を直す前に調整表を作り始める', '借越をプラスの数字として計算する'],
          note: { kind: 'warn', text: '調整表の項目は、仕訳しない。帳簿に書くのは L82 の修正だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['明細書の残高 ＋ 未達の預け入れ − 未取付小切手 ± 銀行の誤り ＝ 修正後の cash book', '調整表の項目は帳簿に書かない', '財務諸表に載るのは修正後の cash book の残高']
        },
        {
          title: '英単語',
          words: [
            ['bank reconciliation statement', 'バンク・リコンシリエーション・ステートメント', '銀行勘定調整表'],
            ['balance per bank statement', 'バランス・パー・バンク・ステートメント', '明細書の残高'],
            ['balance per cash book', 'バランス・パー・キャッシュブック', '帳簿（cash book）の残高'],
            ['add / less', 'アド／レス', '加算／減算'],
            ['bank error', 'バンク・エラー', '銀行の誤り'],
            ['cash and cash equivalents', 'キャッシュ・アンド・キャッシュ・イクイバレンツ', '現金及び現金同等物']
          ]
        }
      ],
      quiz: [
        {
          q: 'The bank statement of Lime Co shows a balance of $4,200 in funds. Unpresented cheques total $1,350 and outstanding lodgements total $900. There are no other differences. What is the balance per the corrected cash book?',
          type: 'number',
          answer: 3750,
          unit: '$',
          explain: '$4,200 ＋ $900（未達の預け入れ）− $1,350（未取付小切手）＝ $3,750（借方残高）。未取付小切手は、銀行がまだ引いていないので明細書から引く。'
        },
        {
          q: 'In a bank reconciliation that starts with the balance per bank statement, how are unpresented cheques and outstanding lodgements treated?',
          choices: ['Deduct unpresented cheques and add outstanding lodgements', 'Add unpresented cheques and deduct outstanding lodgements', 'Add both', 'Deduct both'],
          answer: 0,
          explain: '銀行が追いついたらどうなるかで考える。未取付小切手はこれから引かれるので引く。未達の預け入れはこれから入るので足す。逆の組み合わせは、cash book から始める型のときの足し引き。'
        },
        {
          q: 'The bank statement shows a debit balance of $600. Outstanding lodgements are $1,000 and unpresented cheques are $250. What is the correct cash book balance?',
          choices: ['$150 debit (cash at bank)', '$1,350 debit (cash at bank)', '$1,350 credit (overdraft)', '$150 credit (overdraft)'],
          answer: 0,
          explain: '明細書は銀行から見た記録なので、debit 残高は当座借越 $600（L81）。借越はマイナス。−600 ＋ 1,000 − 250 ＝ ＋150 なので、借方残高 $150（預金）。$1,350 debit は借越をプラスで扱った間違い（600 ＋ 1,000 − 250）。$1,350 credit は足し引きを逆にした間違い。'
        },
        {
          q: '銀行が他社の小切手 $300 を、誤ってこの会社の口座から引いていた。正しい扱いは？',
          choices: ['調整表で明細書の残高に $300 足す。cash book は直さない', 'cash book を Cr Bank 300 で減らす', 'cash book を Dr Bank 300 で増やす', '時間差なので何もしない'],
          answer: 0,
          explain: '会社の取引ではないので、会社の帳簿は正しい。誤っているのは明細書で、$300 低すぎる。だから調整表で足し戻し、銀行に訂正を頼む。cash book を直すと、本当はない取引を記録してしまう。'
        },
        {
          q: '財政状態計算書に載せる銀行残高はどれ？',
          choices: ['修正後の cash book の残高', '期末日の銀行明細書の残高', '修正前の cash book の残高', '明細書と cash book の残高の平均'],
          answer: 0,
          explain: '修正後の cash book には、期末までに本当に起きた取引が全部入っている。明細書の残高は、未取付小切手などの時間差がまだ反映されていないので使わない。'
        }
      ]
    },
    // ---------------------------------------------------------------- L84
    {
      id: 'L84',
      no: 84,
      title: '残高を逆算する',
      goal: '調整項目から逆にたどって、明細書の残高や修正前の cash book 残高を求められるようになる',
      minutes: 14,
      recall: true,
      exam: 'fa',
      outcomes: ['E1(e)'],
      slides: [
        {
          title: '濡れた家計簿',
          paras: ['家計簿にコーヒーをこぼして、月末の残高が読めなくなった。でも通帳の残高は 50,000円と分かる。', 'まだ引かれていない振込が 8,000円あることも分かっている。それなら家計簿の残高は 50,000円 − 8,000円 ＝ 42,000円 のはず。', '差の理由が分かっていれば、片方の残高からもう片方を逆算できる。']
        },
        {
          title: '3つの残高をつなぐ',
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="銀行明細書の残高、修正後のcash book、修正前のcash bookの3つは調整項目でつながっていて、どちらの向きにもたどれる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">3つの残高をつなぐ</text><rect x="20" y="48" width="180" height="58" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="74" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">銀行明細書の残高</text><text x="110" y="94" text-anchor="middle" font-size="12.5" fill="var(--quiet)">bank statement</text><path d="M110 118V156" stroke="var(--edge)" stroke-width="1.5"/><polygon points="104,120 110,110 116,120" fill="var(--edge)"/><polygon points="104,154 110,164 116,154" fill="var(--edge)"/><text x="130" y="132" fill="var(--ink)">＋未達の預け入れ −未取付小切手</text><text x="130" y="152" fill="var(--ink)">±銀行の誤り</text><rect x="20" y="170" width="180" height="58" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="110" y="196" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">修正後の cash book</text><text x="110" y="216" text-anchor="middle" font-size="12.5" fill="var(--quiet)">corrected cash book</text><text x="215" y="204" fill="var(--quiet)">まずここを出す（中心）</text><path d="M110 240V278" stroke="var(--edge)" stroke-width="1.5"/><polygon points="104,242 110,232 116,242" fill="var(--edge)"/><polygon points="104,276 110,286 116,276" fill="var(--edge)"/><text x="130" y="254" fill="var(--ink)">記入漏れ・帳簿の誤りの修正</text><text x="130" y="274" fill="var(--ink)">（逆にたどるときは取り消す）</text><rect x="20" y="292" width="180" height="58" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="318" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">修正前の cash book</text><text x="110" y="338" text-anchor="middle" font-size="12.5" fill="var(--quiet)">original cash book</text></svg>`,
          caption: 'どこから出発しても、まず真ん中の「修正後の cash book」を求めると迷わない。'
        },
        {
          title: '逆算の手順',
          numbered: ['借越はマイナス、預金はプラスの数字にする', '分かっている側から、修正後の cash book 残高を出す', '求める残高の方へ進む。L82・L83 と逆向きに進むときは、足し引きを全部逆にする', '答えの符号から、預金（借方）か借越（貸方）かを書く']
        },
        {
          title: '例題①: 明細書の残高を出す',
          example: {
            problem: 'Plum社の修正前の cash book は借方残高 $1,890。未記入: 銀行手数料 $70、お客さんからの振込 $500。未取付小切手 $1,240、未達の預け入れ $660。明細書の残高は？',
            steps: ['修正後の cash book: $1,890 − $70 ＋ $500 ＝ $2,320', '調整表の式: 明細書 ＋ $660 − $1,240 ＝ $2,320', '逆にたどる: 明細書 ＝ $2,320 − $660 ＋ $1,240 ＝ $2,900', '検算: $2,900 ＋ $660 − $1,240 ＝ $2,320'],
            answer: '$2,900（プラスなので預金、in funds）'
          }
        },
        {
          title: '例題②: 修正前の cash book を出す',
          example: {
            problem: 'Fig社の明細書は借越 $2,100。未取付小切手 $800、未達の預け入れ $1,500。銀行手数料 $45 と不渡りの小切手 $310 が cash book に未記入だった。修正前の cash book の残高は？',
            steps: ['明細書をマイナスにする: −2,100', '修正後の cash book: −2,100 ＋ 1,500 − 800 ＝ −1,400', '修正では cash book を 45 ＋ 310 ＝ 355 減らしたはず', '逆にたどるので 355 を足し戻す: −1,400 ＋ 355 ＝ −1,045', '検算: −1,045 − 355 ＝ −1,400'],
            answer: '貸方残高 $1,045（当座借越）'
          }
        },
        {
          title: 'わからない項目を1つだけ出す',
          paras: ['試験では、残高ではなく項目の方を聞かれることもある。式に当てはめて、□ を求めるだけ。', '例: 明細書 $3,000（預金）、修正後の cash book $2,400（借方）、未達の預け入れ $500。未取付小切手は？'],
          formula: '3,000 ＋ 500 − □ ＝ 2,400 → □ ＝ 1,100',
          after: '未取付小切手は $1,100。'
        },
        {
          title: 'よくある間違い',
          list: ['逆向きに進んでいるのに、足し引きを逆にし忘れる', '借越をプラスの数字のまま計算する', '問題が聞いているのが「修正前」か「修正後」かを読み違える', '時間差を cash book の修正に入れてしまう'],
          note: { kind: 'warn', text: '最後に、出した答えから順方向にもう一度計算して、元の数字に戻るか検算する。逆算は検算で間違いがすぐ見つかる。' }
        },
        {
          title: 'なぜ？ 逆算が出る理由',
          paras: ['逆算ができるのは、項目ごとに「どちらの残高が、なぜ高いのか」を本当に分かっているときだけ。型の暗記では解けない。', 'だから試験は、逆算で理解を確かめる。迷ったら「銀行が追いついたら？」「会社が書き足したら？」と、お金の動きに戻って考える。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['真ん中の「修正後の cash book」を最初に出す', '逆向きに進むときは、足し引きを全部逆にする', '借越はマイナス。最後に順方向で検算する']
        },
        {
          title: '英単語',
          words: [
            ['derive', 'ディライブ', '（与えられた情報から）求める、逆算する'],
            ['balance before adjustments', 'バランス・ビフォー・アジャストメンツ', '修正前の残高'],
            ['overdrawn balance', 'オーバードローン・バランス', '借越の残高'],
            ['balance in funds', 'バランス・イン・ファンズ', '預金がある残高'],
            ['missing figure', 'ミッシング・フィギュア', 'わからない数字（求める項目）']
          ]
        }
      ],
      quiz: [
        {
          q: 'At 30 June, the corrected cash book of Olive Co shows a debit balance of $5,200. Unpresented cheques were $1,700 and outstanding lodgements were $2,300. There are no other differences. What balance was shown on the bank statement?',
          type: 'number',
          answer: 4600,
          unit: '$',
          explain: '式は「明細書 ＋ 2,300 − 1,700 ＝ 5,200」。逆にたどると 明細書 ＝ 5,200 − 2,300 ＋ 1,700 ＝ $4,600（預金）。検算: 4,600 ＋ 2,300 − 1,700 ＝ 5,200。'
        },
        {
          q: 'The bank statement of Peach Co shows an overdraft of $1,200. Unpresented cheques are $400 and outstanding lodgements are $900. Bank charges of $30 have not yet been entered in the cash book. What was the cash book balance before the bank charges were entered?',
          choices: ['$670 overdraft', '$730 overdraft', '$700 overdraft', '$1,730 overdraft'],
          answer: 0,
          explain: '修正後: −1,200 ＋ 900 − 400 ＝ −700。手数料は修正で 30 減らしたはずなので、逆にたどって 30 足し戻す: −700 ＋ 30 ＝ −670 → 借越 $670。$730 は足し戻さずに引いた間違い。$700 は修正後の残高で、問題は修正前を聞いている。$1,730 は足し引きを全部逆にした間違い（−1,200 − 900 ＋ 400 − 30）。'
        },
        {
          q: '明細書の残高は $2,600（預金）、修正後の cash book は $1,950（借方）、未達の預け入れは $450。ほかに差はない。未取付小切手の合計は？',
          type: 'number',
          answer: 1100,
          unit: '$',
          explain: '2,600 ＋ 450 − □ ＝ 1,950 なので、□ ＝ 2,600 ＋ 450 − 1,950 ＝ $1,100。'
        },
        {
          q: '修正後の cash book から、修正前の残高を逆算する。修正のときに書き足した「お客さんからの振込 $300」はどう扱う？',
          choices: ['$300 引く（修正で足した分を取り消す）', '$300 足す（修正と同じ向き）', '時間差なので無視する', '$600 引く（2倍ずれる）'],
          answer: 0,
          explain: '修正では、振込で cash book を $300 増やした。逆にたどるときは、その分を取り消すので $300 引く。2倍になるのは、借方と貸方を逆に書いた誤りを直すときだけ。'
        },
        {
          q: 'Quince Co: the cash book before adjustments shows a debit balance of $900. A direct credit of $250 and a standing order of $180 have not been recorded in the cash book. Unpresented cheques are $600 and outstanding lodgements are $300. What is the balance on the bank statement?',
          type: 'number',
          answer: 1270,
          unit: '$',
          explain: '修正後の cash book: 900 ＋ 250 − 180 ＝ 970。明細書 ＋ 300 − 600 ＝ 970 なので、明細書 ＝ 970 − 300 ＋ 600 ＝ $1,270（預金）。検算: 1,270 ＋ 300 − 600 ＝ 970。'
        }
      ]
    }
  ],
  cards: [
    { id: 'L81-1', lesson: 'L81', q: '銀行勘定調整（bank reconciliation）とは？', a: 'cash book と銀行明細書の残高を比べ、差の理由を全部説明する作業' },
    { id: 'L81-2', lesson: 'L81', q: '銀行勘定調整の目的を3つ', a: '帳簿の誤り・漏れを直す、銀行の誤りや不正を見つける、財務諸表の残高を正しくする' },
    { id: 'L81-3', lesson: 'L81', q: '差が出る理由の3グループは？', a: '時間差／明細書で初めて分かるもの／誤り（帳簿または銀行）' },
    { id: 'L81-4', lesson: 'L81', q: '未取付小切手（unpresented cheques）とは？', a: '会社が渡して cash book に記入済みだが、銀行でまだ引かれていない小切手' },
    { id: 'L81-5', lesson: 'L81', q: '未達の預け入れ（outstanding lodgements）とは？', a: '会社が預けて記入済みだが、明細書にまだ載っていない入金' },
    { id: 'L81-6', lesson: 'L81', q: 'お客さんの小切手が不渡り。仕訳は？', a: 'Dr Trade receivables / Cr Bank（入金を取り消し、売掛金を復活）' },
    { id: 'L82-1', lesson: 'L82', q: '調整表の前に cash book で直すものは？', a: '明細書で初めて分かる記入漏れと、cash book 自体の誤り' },
    { id: 'L82-2', lesson: 'L82', q: 'なぜ未取付小切手で cash book を直さない？', a: '帳簿は正しく、銀行が遅れているだけ。直すと二重記録になる' },
    { id: 'L82-3', lesson: 'L82', q: '支払い $1,270 を $1,720 と記入。修正仕訳は？', a: 'Dr Bank 450 / Cr Trade payables 450' },
    { id: 'L82-4', lesson: 'L82', q: '入金 $200 を出金側に記入。残高をいくら直す？', a: '$400 増やす（逆の記入は2倍ずれる）' },
    { id: 'L82-5', lesson: 'L82', q: '借越 $500 に手数料 $60。修正後は？', a: '−500 − 60 ＝ −560。当座借越 $560' },
    { id: 'L82-6', lesson: 'L82', q: 'お客さんからの入金 $300 を cash book に二重に記入。修正仕訳は？', a: 'Dr Trade receivables 300 / Cr Bank 300（多い分を取り消す）' },
    { id: 'L83-1', lesson: 'L83', q: '明細書から始める調整表の式は？', a: '明細書 ＋ 未達の預け入れ − 未取付小切手 ± 銀行の誤り ＝ 修正後の cash book' },
    { id: 'L83-2', lesson: 'L83', q: 'なぜ未取付小切手は明細書から引く？', a: '銀行がまだ引いていないので、明細書の残高が高すぎるから' },
    { id: 'L83-3', lesson: 'L83', q: '銀行の誤りはどこで直す？', a: '調整表で明細書の残高を直す。cash book は直さない' },
    { id: 'L83-4', lesson: 'L83', q: '財政状態計算書に載せる銀行残高は？', a: '修正後の cash book の残高（明細書の残高ではない）' },
    { id: 'L83-5', lesson: 'L83', q: '明細書 借越 $600、未達 $1,000、未取付 $250。cash book は？', a: '−600 ＋ 1,000 − 250 ＝ ＋150。借方残高 $150' },
    { id: 'L84-1', lesson: 'L84', q: '逆算で最初に求める残高は？', a: '真ん中の「修正後の cash book」' },
    { id: 'L84-2', lesson: 'L84', q: '修正後から修正前へ逆にたどるときのルールは？', a: '修正で足した項目は引き、引いた項目は足す' },
    { id: 'L84-3', lesson: 'L84', q: '修正後 $2,320、未達 $660、未取付 $1,240。明細書は？', a: '2,320 − 660 ＋ 1,240 ＝ $2,900（預金）' },
    { id: 'L84-4', lesson: 'L84', q: '修正後 借越 $1,400。手数料 $45 と不渡り $310 を修正済み。修正前は？', a: '−1,400 ＋ 355 ＝ −1,045。借越 $1,045' },
    { id: 'L84-5', lesson: 'L84', q: 'derive の意味は？', a: '与えられた情報から求める（逆算する）' }
  ]
});
