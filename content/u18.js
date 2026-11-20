(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 18,
  part: 11,
  partTitle: '照合',
  lessons: [
    {
      id: 'L85',
      no: 85,
      title: '財務諸表に載せる銀行残高',
      goal: '銀行勘定調整の結果から、財務諸表に載せる銀行残高を正しく選んで表示できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['E1(f)', 'K1:D1(d)'],
      slides: [
        {
          title: '家計簿と銀行アプリ、正しいのは？',
          paras: ['家計簿アプリの残高は5万円、銀行アプリは6万円。昨日払った家賃の振込が、まだ銀行で処理されていないのかもしれない。逆に、自分が知らないサブスクの引落しが銀行にはあるかもしれない。', '本当の残高は、家計簿に「知らなかった引落し」などを足し引きした金額。銀行の数字は、処理が遅れている分だけずれている。']
        },
        {
          title: '照合のおさらい',
          paras: ['L82〜84 でやったことを1枚にまとめる。違いは2つの種類に分かれる。'],
          list: ['帳簿（cash book）を直すもの: 銀行手数料、自動引落し、不渡り小切手、振込入金、帳簿の記入ミス', '帳簿は直さず、明細の側で調整するもの: 未取付小切手（unpresented cheques）、未達の預け入れ（outstanding lodgements）、銀行の誤り']
        },
        {
          title: '2つの道が同じ残高に着く',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="帳簿を直した残高と、明細を調整した残高が同じ1,260ドルになり、それを財政状態計算書に載せる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">2つの道が、同じ残高に着く</text><rect x="20" y="52" width="190" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">帳簿の残高</text><text x="115" y="110" text-anchor="middle" font-size="18" fill="var(--ink)">$1,250</text><rect x="230" y="52" width="190" height="72" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="80" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">銀行明細の残高</text><text x="325" y="110" text-anchor="middle" font-size="18" fill="var(--ink)">$1,890</text><text x="115" y="152" text-anchor="middle" fill="var(--ink)">帳簿を直す</text><text x="115" y="176" text-anchor="middle" fill="var(--ink)">−40 −300 −150 +500</text><text x="325" y="152" text-anchor="middle" fill="var(--ink)">明細の側で調整</text><text x="325" y="176" text-anchor="middle" fill="var(--ink)">+400 −1,030</text><path d="M115 188L180 214M325 188L260 214" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="80" y="216" width="280" height="72" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="246" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">正しい残高 $1,260</text><text x="220" y="272" text-anchor="middle" fill="var(--ink)">これを SFP に載せる</text><text x="220" y="316" text-anchor="middle" fill="var(--ink)">帳簿を直した後の残高が、会社の本当の残高</text></svg>`,
          caption: '左は帳簿だけが知らなかったもの、右は銀行だけがまだ知らないもの。両方そろえると同じ金額になる。'
        },
        {
          title: 'SFP に載せるのは修正後の帳簿残高',
          paras: ['財政状態計算書（SFP）に載せる銀行残高は、帳簿を直した後の残高（adjusted cash book balance）。銀行明細の残高でも、直す前の帳簿の残高でもない。', 'プラスなら流動資産の cash at bank（銀行預金）として載せる。'],
          formula: 'SFP の銀行残高 ＝ 修正後の帳簿残高'
        },
        {
          title: 'なぜ？ 明細の残高を使わない理由',
          paras: ['未取付小切手は、もう仕入先に渡した支払い。会社はお金を手放す約束を済ませていて、銀行の処理が遅いだけ。未達の預け入れも、もう銀行に預けたお金。', '銀行明細は「銀行の処理の速さ」で決まる数字。修正後の帳簿には、会社が知っている取引と、銀行だけが知っていた取引の両方が入っている。だから会社の本当の残高になる。']
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋の帳簿の銀行残高は借方 $1,250。12月31日の銀行明細は $1,890（プラス）。(1) 銀行手数料 $40 と (2) 自動引落し $300 が帳簿にない。(3) お客さんの小切手 $150 が不渡り。(4) お客さんからの振込入金 $500 が帳簿にない。(5) 仕入先に渡した小切手 $1,030 がまだ銀行に呈示されていない。(6) 12月31日に預けた $400 が明細にまだない。SFP に載せる銀行残高は？',
            steps: ['帳簿を直すのは (1)〜(4)。$1,250 − 40 − 300 − 150 ＋ 500 ＝ $1,260', '(5)(6) は時間差なので帳簿は直さない', '明細の側で確かめる: $1,890 ＋ 400 − 1,030 ＝ $1,260', '両方が $1,260 で一致。これが SFP の金額'],
            answer: '流動資産の cash at bank $1,260（明細の $1,890 でも、直す前の $1,250 でもない）'
          }
        },
        {
          title: 'マイナスなら当座借越',
          paras: ['修正後の帳簿が貸方残高なら、口座のお金はマイナス。銀行から借りているのと同じなので、流動負債（current liabilities）の当座借越（bank overdraft）として載せる。', '例: 帳簿は貸方 $600、銀行手数料 $50 が未記帳。手数料で貸方が増えて $650。'],
          table: { caption: '財政状態計算書（抜粋）', head: ['項目', '$'], rows: [['Current liabilities（流動負債）', ''], ['Bank overdraft（当座借越）', '650']] },
          note: { kind: 'tip', text: '銀行明細では、プラスの残高が credit（銀行から見ると預かり金＝負債）と書かれる。会社の帳簿とは借方・貸方が逆になる。' }
        },
        {
          title: 'よくある間違い',
          list: ['銀行明細の残高をそのまま SFP に載せる', '直す前の帳簿の残高を載せる', '銀行の誤りを、会社の帳簿で直す（明細の側で調整するだけ。SFP の金額は変わらない）', '当座借越を「資産のマイナス」として流動資産に書く'],
          note: { kind: 'warn', text: '試験の選択肢には、明細の残高と修正前の帳簿残高がよく並ぶ。必ず「帳簿を直した後」の数字を選ぶ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SFP に載せるのは、修正後の帳簿残高（adjusted cash book balance）', '未取付小切手・未達の預け入れ・銀行の誤りは、SFP の金額を変えない', '修正後がプラスなら流動資産、マイナスなら当座借越として流動負債']
        },
        {
          title: '英単語',
          words: [
            ['adjusted cash book balance', '', '修正後の帳簿残高（SFP に載せる）'],
            ['cash at bank', 'キャッシュ・アット・バンク', '銀行預金（流動資産）'],
            ['bank overdraft', 'バンク・オーバードラフト', '当座借越（流動負債）'],
            ['unpresented cheques', 'アンプレゼンティッド・チェックス', '未取付小切手'],
            ['outstanding lodgements', 'アウトスタンディング・ロッジメンツ', '未達の預け入れ（銀行がまだ記録していない入金）'],
            ['bank error', 'バンク・エラー', '銀行の誤り'],
            ['current liabilities', '', '流動負債']
          ]
        }
      ],
      quiz: [
        { q: '財政状態計算書（SFP）に載せる銀行残高は？', choices: ['銀行明細の残高', '直す前の帳簿の残高', '帳簿を直した後の残高', '明細と帳簿の平均'], answer: 2, explain: 'SFP は修正後の帳簿残高。明細の残高は、未取付小切手などの時間差の分だけずれている。直す前の帳簿は、手数料や引落しが抜けている。' },
        { q: 'The cash book of a business shows a debit balance of $3,200. The bank statement shows a balance of $4,150 in credit. Bank charges of $70 and a direct debit of $280 have not been entered in the cash book. Unpresented cheques total $1,300. What figure should be reported as cash at bank in the statement of financial position?', choices: ['$2,850', '$4,150', '$3,200', '$3,550'], answer: 0, explain: '帳簿を直す: $3,200 − 70 − 280 ＝ $2,850。明細で確認: $4,150 − 1,300 ＝ $2,850。$4,150 は明細の残高、$3,200 は直す前の帳簿。$3,550 は手数料と引落しを足してしまった間違い。' },
        { q: 'The cash book shows an overdraft of $900. Bank charges of $60 have not been recorded in the cash book. A cheque payment of $250 was recorded in the cash book as $520. What is the bank overdraft to be reported in the statement of financial position?', type: 'number', answer: 690, unit: '$', explain: '手数料で借越が増える: $900 ＋ 60 ＝ $960。支払いを $270（520 − 250）多く書いていたので、その分借越が減る: $960 − 270 ＝ $690。流動負債の bank overdraft $690。' },
        { q: 'Which of the following items would NOT change the bank balance reported in the statement of financial position?', choices: ['Bank charges not yet recorded in the cash book', 'A customer cheque that was dishonoured', 'A cheque paid to a supplier that has not yet been presented', 'A direct debit not yet recorded in the cash book'], answer: 2, explain: '未取付小切手は時間差。帳簿はもう正しく、明細の側で調整するだけなので SFP の金額は変わらない。ほかの3つは帳簿を直すので SFP の金額が変わる。' },
        { q: '修正後の帳簿の銀行残高が貸方 $650。SFP ではどう表示する？', choices: ['流動資産に −$650 と書く', '流動負債に当座借越 $650', '載せない', '資本から $650 引く'], answer: 1, explain: '貸方残高は口座のお金がマイナス＝銀行から借りているのと同じ。流動負債の bank overdraft にする。資産のマイナスとして書くのはよくある間違い。' },
        { q: '銀行が、別の会社の引落し $200 を誤ってこの会社の口座から引いた。SFP の銀行残高への影響は？', choices: ['$200 減らす', '$200 増やす', '影響しない（明細の側で調整する）', '$400 減らす'], answer: 2, explain: '銀行の誤りは会社の取引ではないので、帳簿は直さない。照合表の明細の側で $200 を足し戻すだけ。SFP の金額は修正後の帳簿残高のまま。帳簿から引くと、会社が払っていないお金を払ったことになってしまう。' }
      ]
    },
    {
      id: 'L86',
      no: 86,
      title: '買掛金統制勘定と複式簿記',
      goal: '買掛金統制勘定が何のためにあり、複式簿記とどうつながるかを説明し、期末残高を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['E2(a)', 'K1:D2(a)'],
      slides: [
        {
          title: 'カード明細の「合計」と「内訳」',
          paras: ['クレジットカードの明細には、「今月の利用合計 8万円」と、お店ごとの内訳（コンビニ2万円、通販5万円、ガソリン1万円）がある。', '合計があれば「全部でいくら払う？」にすぐ答えられる。内訳があれば「どこにいくら？」に答えられる。2つが合っていれば、書き漏れがないと安心できる。']
        },
        {
          title: '買掛金にも「合計」と「内訳」',
          list: ['買掛金元帳（payables ledger）: 仕入先ごとの勘定。L14 で見た内訳', '買掛金統制勘定（payables control account）: 総勘定元帳の中にある、全仕入先の合計の勘定'],
          after: 'シラバスは統制勘定を payables general ledger account、K1 は trade payables general ledger account と呼ぶ。中身は同じ。売掛金にも同じ形の統制勘定がある。'
        },
        {
          title: '1つの請求書が2か所へ',
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="仕入日記帳から、合計は統制勘定へ、1件ずつは買掛金元帳へ転記され、両者の合計は一致する" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">1つの請求書が2か所へ</text><rect x="20" y="52" width="400" height="88" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="78" font-size="15" font-weight="600" fill="var(--ink)">仕入日記帳（purchases day book）</text><text x="40" y="104" fill="var(--ink)">A社 $300</text><text x="160" y="104" fill="var(--ink)">B社 $500</text><text x="280" y="104" fill="var(--ink)">C社 $200</text><text x="40" y="128" font-weight="600" fill="var(--ink)">合計 $1,000</text><path d="M115 140L115 184M325 140L325 184" fill="none" stroke="var(--edge)" stroke-width="1.5"/><text x="123" y="166" fill="var(--ink)">合計だけ</text><text x="333" y="166" fill="var(--ink)">1件ずつ</text><rect x="20" y="184" width="190" height="128" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="212" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">買掛金統制勘定</text><text x="115" y="234" text-anchor="middle" font-size="12.5" fill="var(--ink)">payables control</text><text x="115" y="266" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">$1,000</text><text x="115" y="298" text-anchor="middle" fill="var(--ink)">複式簿記の中</text><rect x="230" y="184" width="190" height="128" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="212" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">買掛金元帳</text><text x="325" y="234" text-anchor="middle" font-size="12.5" fill="var(--quiet)">payables ledger</text><text x="325" y="260" text-anchor="middle" fill="var(--ink)">A社 300　B社 500</text><text x="325" y="280" text-anchor="middle" fill="var(--ink)">C社 200</text><text x="325" y="302" text-anchor="middle" fill="var(--ink)">メモ（複式簿記の外）</text><text x="220" y="344" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">左の合計 ＝ 右の合計 のはず</text></svg>`,
          caption: '同じ請求書を、統制勘定には合計で、買掛金元帳には1件ずつ書く。'
        },
        {
          title: '複式簿記とのつながり',
          paras: ['仕入日記帳の合計 $1,000 は、総勘定元帳に仕訳で転記する。統制勘定は、この借方・貸方の片方になる。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '1,000' },
            { side: 'Cr', account: 'Payables control（買掛金統制勘定）', amount: '1,000' }
          ],
          after: 'A社・B社・C社の勘定には、請求書を1件ずつ貸方に書く。これはメモ（memorandum）で、仕訳の一部ではない。両方を複式簿記に入れると、買掛金を2回数えてしまう。'
        },
        {
          title: '統制勘定に入るもの',
          list: ['貸方（増える）: 前期繰越、掛け仕入（仕入日記帳の合計）', '借方（減る）: 仕入先への支払い（現金出納帳）、仕入戻し（仕入戻し日記帳）、受けた割引、売掛金との相殺（contra、L75）', 'たまに出る: 払いすぎた分を仕入先から返してもらった（refund）→ 貸方'],
          after: '請求書は売上税込みの金額で入る。現金で買った仕入（cash purchases）は、買掛金が生まれないので入らない。',
          note: { kind: 'tip', text: '統制勘定は「買掛金のT勘定」そのもの。負債なので、増えたら貸方、減ったら借方（L13）。' }
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋の買掛金統制勘定。期首残高 $4,200（貸方）。1年間に、掛け仕入 $18,600、現金仕入 $2,000、仕入先への支払い $15,900、仕入戻し $700、受けた割引 $300、売掛金との相殺 $400。期末残高は？',
            steps: ['貸方（増える）: $4,200 ＋ 18,600 ＝ $22,800', '現金仕入 $2,000 は買掛金と関係ないので入れない', '借方（減る）: $15,900 ＋ 700 ＋ 300 ＋ 400 ＝ $17,300', '期末残高: $22,800 − 17,300 ＝ $5,500（貸方）'],
            answer: '期末の買掛金 $5,500。貸方が多いので、借方に Balance c/d $5,500 を書いて締める'
          }
        },
        {
          title: 'T勘定で見る',
          tAccount: {
            name: 'Payables control',
            debit: [['Cash（支払い）', '15,900'], ['Purchase returns', '700'], ['Discounts received', '300'], ['Contra – receivables', '400']],
            credit: [['Balance b/d', '4,200'], ['Purchases（掛け）', '18,600']],
            balance: { side: 'debit', label: 'Balance c/d', amount: '5,500' }
          },
          paras: ['両側の合計はどちらも $22,800。翌期は貸方に Balance b/d $5,500 が出る。']
        },
        {
          title: 'なぜ？ わざわざ統制勘定を持つ理由',
          list: ['試算表や SFP に、買掛金の合計がすぐ出る。何百社分を毎回足さなくてよい', '統制勘定と内訳の合計を比べて、計算や転記の誤りを見つけられる', '2つを別の人が担当すると、不正をしにくくなる（内部統制）', 'ずれたとき、誤りのある場所を絞り込める']
        },
        {
          title: 'よくある間違い',
          list: ['現金仕入を統制勘定に入れる', '支払い・仕入戻し・受けた割引を貸方に書く（減るのは借方）', '買掛金元帳の勘定も試算表に入れて、買掛金を2回数える', '与えた割引（discounts allowed）を買掛金の側に入れる。これは売掛金の話'],
          note: { kind: 'warn', text: '統制勘定に入るのは「掛け」の取引だけ。現金で済んだ取引は出てこない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['統制勘定は総勘定元帳の中の合計の勘定で、複式簿記の一部。買掛金元帳はメモ', '貸方: 期首残高・掛け仕入。借方: 支払い・仕入戻し・受けた割引・相殺', '目的: 合計がすぐ出る、誤りが見つかる、不正を防ぐ']
        },
        {
          title: '英単語',
          words: [
            ['payables control account', '', '買掛金統制勘定'],
            ['payables general ledger account', '', '統制勘定のシラバスでの呼び方'],
            ['payables ledger', '', '買掛金元帳（purchase ledger とも）'],
            ['memorandum account', 'メモランダム・アカウント', 'メモの勘定（複式簿記の外）'],
            ['purchases day book', '', '仕入日記帳'],
            ['contra', 'コントラ', '売掛金と買掛金の相殺'],
            ['internal control', 'インターナル・コントロール', '内部統制']
          ]
        }
      ],
      quiz: [
        { q: '総勘定元帳の中にあり、複式簿記の一部になっているのはどれ？', choices: ['買掛金統制勘定', '買掛金元帳のA社の勘定', '仕入日記帳', '取引先明細書'], answer: 0, explain: '統制勘定は総勘定元帳の勘定で、仕訳の片方になる。仕入先ごとの勘定はメモ。仕入日記帳は最初の記録の帳簿、取引先明細書は仕入先が作る外部の書類。' },
        { q: 'Which of the following would be recorded on the debit side of the payables control account?', choices: ['Credit purchases from the purchases day book', 'Discounts received', 'Cash purchases', 'The opening balance owed to suppliers'], answer: 1, explain: '受けた割引は買掛金を減らすので借方。掛け仕入と期首残高は貸方。現金仕入は買掛金が生まれないので統制勘定に入らない。' },
        { q: 'A business has opening trade payables of $6,300. During the year, credit purchases were $41,500, cash purchases were $3,200, payments to credit suppliers were $38,900, purchase returns were $1,100 and discounts received were $650. What is the closing balance on the payables control account?', type: 'number', answer: 7150, unit: '$', explain: '貸方: $6,300 ＋ 41,500 ＝ $47,800。借方: $38,900 ＋ 1,100 ＋ 650 ＝ $40,650。残高 $47,800 − 40,650 ＝ $7,150。現金仕入 $3,200 を入れると間違える。' },
        { q: '仕入先ごとの勘定（買掛金元帳）がメモの扱いになっている理由は？', choices: ['統制勘定と両方を複式簿記に入れると、買掛金を2回数えてしまうから', '仕入先ごとの勘定は不正確だから', '仕入先ごとの勘定は外部の書類だから', '法律でメモにすると決まっているから'], answer: 0, explain: '同じ請求書が統制勘定（合計）と個別の勘定（1件ずつ）の両方に書かれる。片方だけを複式簿記に入れないと二重になる。個別の勘定も自分で作る正確な記録。' },
        { q: 'Which of the following is NOT a purpose of maintaining a payables control account?', choices: ['It provides a total payables figure quickly for the trial balance', 'It helps to detect errors in posting to the payables ledger', 'It helps to deter fraud when different staff maintain the two records', 'It shows the amount owed to each individual supplier'], answer: 3, explain: '仕入先ごとの金額を示すのは買掛金元帳の役目。統制勘定は合計だけを持つ。ほかの3つは統制勘定の目的。' }
      ]
    },
    {
      id: 'L87',
      no: 87,
      title: '取引先明細書との照合の目的と作成',
      goal: '取引先明細書と照合する目的を説明し、照合表を作って正しい買掛金残高を出せるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['E2(b)', 'E2(c)', 'K1:D2(a)', 'K1:D2(b)'],
      slides: [
        {
          title: '酒屋の「ツケ」のお知らせ',
          paras: ['近所の酒屋でツケ（後払い）で買っている。月末に酒屋から「今月のツケは3万円」とお知らせが来た。自分のメモでは2万2千円。', '差の8千円は、昨日払った分がまだ酒屋に届いていないだけかもしれない。自分がメモし忘れた買い物かもしれない。原因によって、直す場所が変わる。']
        },
        {
          title: '取引先明細書のおさらい',
          paras: ['取引先明細書（supplier statement）は、仕入先が作る「うちの帳簿では、あなたの残高はこうです」という書類（L76）。期間中の請求・入金・貸方票と、月末の残高が並ぶ。', '会社は、仕入先ごとに買掛金元帳の勘定とこの明細書を比べる。これが照合（reconciliation）。直した結果は統制勘定にも反映する（L88）。']
        },
        {
          title: 'なぜ？ 外部の書類と比べる理由',
          list: ['明細書は第三者が独立して作った記録。自分の記録が正しいかを確かめる証拠になる', '請求書の記帳漏れ・金額の写し間違いを見つけられる', '払いすぎや二重払いを防げる', '食い違い（値段・返品の争い）を早く見つけて、仕入先との関係を保てる', '期末の買掛金を漏れなく SFP に載せられる']
        },
        {
          title: '違いの原因は2種類',
          list: ['時間差（timing difference）: 相手がまだ記録していないだけ。月末に送った支払いがまだ届いていない（payment in transit）、返品の貸方票がまだ出ていない、など', '誤り・漏れ: 自分が請求書を記帳し忘れた、金額を写し間違えた、別の仕入先の勘定に書いた。相手の誤りもある'],
          after: '相手の誤りなら、自分の帳簿は直さず、仕入先に連絡して直してもらう。'
        },
        {
          title: '直す場所の決め方',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="時間差なら明細書の側で調整し、自分の誤りや漏れなら自分の帳簿を直す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">違いの原因で、直す場所が決まる</text><rect x="70" y="52" width="300" height="48" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="82" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">明細書と帳簿の金額が違う</text><path d="M160 100L115 140M280 100L325 140" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="140" width="190" height="112" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="168" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">時間差</text><text x="115" y="194" text-anchor="middle" fill="var(--ink)">相手がまだ記録</text><text x="115" y="214" text-anchor="middle" fill="var(--ink)">していないだけ</text><text x="115" y="240" text-anchor="middle" font-weight="600" fill="var(--ink)">明細書の側で調整</text><rect x="230" y="140" width="190" height="112" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="168" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">自分の誤り・漏れ</text><text x="325" y="194" text-anchor="middle" fill="var(--ink)">請求書の記帳漏れ</text><text x="325" y="214" text-anchor="middle" fill="var(--ink)">金額の写し間違い</text><text x="325" y="240" text-anchor="middle" font-weight="600" fill="var(--ink)">自分の帳簿を直す</text><text x="220" y="284" text-anchor="middle" fill="var(--ink)">直した帳簿の残高が、正しい買掛金</text></svg>`,
          caption: '銀行勘定調整（L83）と同じ考え方。自分の誤りは自分の帳簿を直し、相手がまだ知らないだけのものは相手の数字の側で調整する。'
        },
        {
          title: 'ほかによく出る違い',
          table: { head: ['違い', '種類', '直す場所'], rows: [['期末にまだ届いていない商品の請求書', '時間差', '明細書から引く'], ['自分が引いた割引を、仕入先が認めない', '自分の誤り', '帳簿に足し戻す'], ['請求書を帳簿に2回書いた', '自分の誤り', '帳簿から引く'], ['他社あての請求書が明細書にある', '相手の誤り', '明細書から引き、連絡']] },
          after: '商品が届く前は、まだ払う義務がない。割引は支払期限を守って初めて受けられるので、遅れて払ったのに引いていたら、Dr Discounts received / Cr Payables で取り消す。'
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋の買掛金元帳で、仕入先 Kai社の残高は貸方 $1,420。Kai社の12月31日の明細書は $2,990。(1) 12月29日に送った支払い $800 が明細書にない。(2) 12月30日に返品した $120 は記帳済みだが、Kai社はまだ貸方票を出していない。(3) 明細書の12月20日の請求書 $650 が帳簿にない。商品は届いて使っている。正しい残高は？',
            steps: ['(3) は自分の記帳漏れ。帳簿を直す: $1,420 ＋ 650 ＝ $2,070', '(1) は相手に届いていない支払い＝時間差。明細書から引く', '(2) も相手がまだ記録していない返品＝時間差。明細書から引く', '明細書の側: $2,990 − 800 − 120 ＝ $2,070', '両方が $2,070 で一致'],
            answer: 'Kai社への正しい買掛金は $2,070。帳簿には請求書 $650 を追加で記録する'
          }
        },
        {
          title: '照合表の形',
          paras: ['例題を照合表（reconciliation）にまとめるとこうなる。上は自分の帳簿を直した結果、下はそれと明細書を結ぶ計算。'],
          table: { caption: 'Kai社の照合表（12月31日）', head: ['項目', '$'], rows: [['Balance per payables ledger', '1,420'], ['Add: invoice not recorded', '650'], ['Corrected ledger balance', '2,070'], ['Balance per supplier statement', '2,990'], ['Less: payment in transit', '(800)'], ['Less: returns not yet credited', '(120)']], total: ['Agrees with corrected balance', '2,070'] }
        },
        {
          title: 'よくある間違い',
          list: ['明細書の残高 $2,990 をそのまま正しい残高にする', '時間差の支払い $800 を、自分の帳簿から引いて直す（帳簿はもう正しい）', '記帳漏れの請求書を、明細書の側で引いて済ませる（自分の帳簿を直すべき）'],
          note: { kind: 'warn', text: '明細書に載っていて帳簿にない請求書は、商品がもう届いているなら自分の記帳漏れ。期末の買掛金に入れる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['目的: 第三者の独立した記録と比べ、漏れ・誤り・払いすぎを見つける', '時間差（届いていない支払い・まだ出ていない貸方票）は明細書の側で調整', '自分の誤り・漏れは自分の帳簿を直す。直した残高が正しい買掛金']
        },
        {
          title: '英単語',
          words: [
            ['supplier statement', 'サプライヤー・ステートメント', '取引先明細書'],
            ['reconciliation', 'レコンシリエーション', '照合、照合表'],
            ['timing difference', 'タイミング・ディファレンス', '時間差'],
            ['payment in transit', '', 'まだ相手に届いていない支払い'],
            ['credit note', 'クレジット・ノート', '貸方票（返品などで請求を減らす書類）'],
            ['transposition error', '', '数字の並びの写し間違い（790 を 970 など）'],
            ['third party', 'サード・パーティー', '第三者']
          ]
        }
      ],
      quiz: [
        { q: '取引先明細書と照合する一番の目的は？', choices: ['第三者が独立して作った記録と比べ、自分の買掛金の漏れや誤りを見つけるため', '仕入先の帳簿の誤りを直してあげるため', '売上税の金額を決めるため', '明細書の残高をそのまま SFP に載せるため'], answer: 0, explain: '明細書は外部の独立した証拠。自分の記録を確かめるために使う。相手の誤りは連絡するだけで、目的の中心ではない。SFP に載せるのは自分の直した残高。' },
        { q: 'A supplier statement shows a balance of $5,600 at 30 June. A payment of $1,400 sent on 30 June is not on the statement. An invoice of $300 on the statement has not been recorded in the payables ledger, which shows a balance of $3,900. What is the correct balance owed to the supplier at 30 June?', type: 'number', answer: 4200, unit: '$', explain: '帳簿を直す: $3,900 ＋ 300 ＝ $4,200。明細書の側: $5,600 − 1,400 ＝ $4,200。一致する。' },
        { q: 'Which of the following is a timing difference when reconciling a supplier statement to the payables ledger?', choices: ['An invoice recorded twice in the payables ledger', 'A payment sent to the supplier on the last day of the month that the supplier received after the month end', 'An invoice entered in the wrong supplier account', 'A transposition error in recording an invoice'], answer: 1, explain: '月末に送った支払いが相手に後から届くのは時間差。ほかの3つは自分の誤りなので、自分の帳簿を直す。' },
        { q: '明細書にある請求書 $450 が自分の帳簿にない。商品はもう届いて使っている。どうする？', choices: ['自分の帳簿に記録する（記帳漏れ）', '時間差として明細書の側で引く', '何もしない', '仕入先に明細書を直してもらう'], answer: 0, explain: '商品を受け取っていれば、もう払う義務がある。記帳漏れなので自分の帳簿に入れる。明細書の側で引くと、期末の買掛金が足りなくなる。' },
        { q: 'A supplier statement shows a balance of $8,200. The payables ledger shows $6,950. A payment of $1,500 was sent before the year end but is not on the statement. A credit note for $250 for goods returned is on the statement but has not been recorded in the payables ledger. What is the correct balance?', choices: ['$6,700', '$6,950', '$7,200', '$8,200'], answer: 0, explain: '貸方票は自分の記帳漏れ。買掛金を減らす: $6,950 − 250 ＝ $6,700。明細書の側: $8,200 − 1,500 ＝ $6,700。$7,200 は貸方票を足してしまった間違い。' },
        { q: 'A supplier statement shows a balance of $3,900 at 31 December. The payables ledger account shows $3,280. The differences are: an invoice for $420 dated 30 December for goods that were not received until 4 January, and a settlement discount of $200 deducted by the business which the supplier has disallowed because payment was made late. What is the correct balance owed to the supplier at 31 December?', choices: ['$3,480', '$3,900', '$3,280', '$3,700'], answer: 0, explain: '割引は受けられなかったので、自分の帳簿に足し戻す: $3,280 ＋ 200 ＝ $3,480。商品は1月に届いたので、12月31日にはまだ払う義務がない＝時間差。明細書から引く: $3,900 − 420 ＝ $3,480。$3,900 は請求書まで帳簿に入れた間違い、$3,700 は割引を直さず請求書を入れた間違い。' }
      ]
    },
    {
      id: 'L88',
      no: 88,
      title: '照合で見つかる誤りの修正と、載せる買掛金残高',
      goal: '統制勘定と残高一覧のずれから誤りを見つけて直し、財務諸表に載せる買掛金を決められるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['E2(d)', 'E2(e)', 'K1:D2(c)', 'K1:D2(d)'],
      slides: [
        {
          title: '部費の合計ノートと名簿',
          paras: ['部活の会計係。合計ノートには「集めた部費 5万円」、部員ごとの名簿を足すと4万8千円。', '合計ノートの足し算ミスなら、直すのは合計ノート。名簿の書き漏れなら、直すのは名簿。どちらが間違っているかを調べてから直す。']
        },
        {
          title: '統制勘定と残高一覧を比べる',
          paras: ['期末に、買掛金元帳の残高を全部書き出した一覧（list of payables ledger balances）を作る。その合計と、統制勘定の残高を比べる。', '同じ請求書から作った記録なので、一致するはず。ずれていれば、どこかに誤りがある。誤りの場所によって直し方が違う。']
        },
        {
          title: '誤りの3つの場所',
          svg: `<svg viewBox="0 0 440 316" role="img" aria-label="統制勘定だけの誤りは仕訳で、一覧だけの誤りは一覧で、両方の誤りは両方を直す" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">誤りの場所で、直し方が違う</text><rect x="20" y="52" width="400" height="76" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="80" font-size="15" font-weight="600" fill="var(--ink)">統制勘定だけがずれる</text><text x="400" y="80" text-anchor="end" font-weight="600" fill="var(--ink)">→ 仕訳で直す</text><text x="40" y="108" fill="var(--ink)">日記帳の合計ミス、統制勘定への転記漏れ</text><rect x="20" y="140" width="400" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="168" font-size="15" font-weight="600" fill="var(--ink)">個別勘定・一覧だけがずれる</text><text x="400" y="168" text-anchor="end" font-weight="600" fill="var(--ink)">→ 一覧を直す</text><text x="40" y="196" fill="var(--ink)">個別勘定への転記ミス、一覧の書き漏れ</text><rect x="20" y="228" width="400" height="76" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="256" font-size="15" font-weight="600" fill="var(--ink)">両方が同じだけずれる</text><text x="400" y="256" text-anchor="end" font-weight="600" fill="var(--ink)">→ 両方を直す</text><text x="40" y="284" fill="var(--ink)">日記帳への記入漏れ（照合では見つからない）</text></svg>`,
          caption: '一覧だけの誤りはメモの側の話なので、仕訳はいらない。両方が同じだけずれる誤りは、照合では差が出ない。取引先明細書との照合（L87）で見つける。'
        },
        {
          title: '統制勘定を直す仕訳',
          paras: ['例: 仕入日記帳の合計が $500 少なく足されていた。その合計で仕入と統制勘定を転記したので、両方 $500 少ない。'],
          journal: [
            { side: 'Dr', account: 'Purchases（仕入）', amount: '500' },
            { side: 'Cr', account: 'Payables control（買掛金統制勘定）', amount: '500' }
          ],
          list: ['受けた割引を総勘定元帳に転記し忘れた → Dr Payables control / Cr Discounts received', '売掛金との相殺を統制勘定に記録し忘れた → Dr Payables control / Cr Receivables control']
        },
        {
          title: '一覧を直す（仕訳はいらない）',
          list: ['請求書を個別勘定に違う金額で書いた（790 を 970 など）', '仕入先1社の残高を一覧に書き漏れた、2回書いた', '個別勘定の左右を逆に書いた、個別勘定の足し算ミス', '借方残高（払いすぎ）を、一覧に貸方残高として入れた → 金額の2倍ずれる'],
          after: '別の仕入先の勘定に書いた誤りは、一覧の合計が変わらないので照合では見つからない。それでも正しい仕入先の勘定に直す。'
        },
        {
          title: '例題',
          example: {
            problem: 'Ume社の期末。買掛金統制勘定は貸方 $12,450、残高一覧の合計は $11,900。(1) 仕入日記帳の合計が $500 少なかった（個別の転記は正しい）。(2) 貸方票 $260 を仕入戻し日記帳と統制勘定に記録したが、個別勘定に転記し忘れた。(3) 残高 $1,140 の仕入先が一覧から漏れた。(4) 売掛金との相殺 $350 を個別勘定には書いたが、統制勘定に書かなかった。(5) 請求書 $790 を個別勘定に $970 と書いた。修正後の残高は？',
            steps: ['統制勘定に関係するのは (1)(4)。$12,450 ＋ 500 − 350 ＝ $12,600', '仕訳: (1) Dr Purchases 500 / Cr Payables control 500。(4) Dr Payables control 350 / Cr Receivables control 350', '一覧に関係するのは (2)(3)(5)。(2) 個別勘定が $260 多い → −260。(3) ＋1,140。(5) $180 多い → −180', '一覧: $11,900 − 260 ＋ 1,140 − 180 ＝ $12,600', '両方が $12,600 で一致'],
            answer: '修正後の買掛金は $12,600。SFP の流動負債に trade payables $12,600'
          }
        },
        {
          title: '例題を表で見る',
          table: { caption: 'Ume社の照合（期末）', head: ['項目', '統制勘定 $', '一覧 $'], rows: [['修正前', '12,450', '11,900'], ['(1) 日記帳の合計不足', '500', '–'], ['(2) 貸方票の転記漏れ', '–', '(260)'], ['(3) 一覧の書き漏れ', '–', '1,140'], ['(4) 相殺の記帳漏れ', '(350)', '–'], ['(5) 個別勘定の写し間違い', '–', '(180)']], total: ['修正後', '12,600', '12,600'] }
        },
        {
          title: 'SFP に載せる買掛金',
          paras: ['財政状態計算書に載せる買掛金（trade payables）は、誤りを直して一覧と一致した後の統制勘定の残高。直す前の統制勘定でも、一覧でも、取引先明細書の合計でもない。', '明細書の合計は、届いていない支払いなどの時間差の分だけずれている。'],
          formula: 'SFP の買掛金 ＝ 修正後の統制勘定の残高',
          note: { kind: 'tip', text: '一覧に大きな借方残高（仕入先に払いすぎた分）があれば、厳密には買掛金から引かず流動資産（その他の債権）に分けて載せる。計算問題では、ふつう修正後の統制勘定の残高を答えればよい。' }
        },
        {
          title: 'よくある間違い',
          list: ['一覧だけの誤り（個別勘定への転記ミス）に仕訳を書く', '借方残高 $70 を貸方として一覧に入れた誤りを、$70 だけ直す（正しくは $140 減らす）', '日記帳への記入漏れを「照合で見つかる」と考える'],
          note: { kind: 'warn', text: '仕訳がいるのは、総勘定元帳（統制勘定・仕入など）が間違っているときだけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['統制勘定の誤りは仕訳で直す。一覧・個別勘定の誤りは一覧を直す（仕訳なし）', '日記帳への記入漏れ・別の仕入先への記帳は、照合では差が出ない', 'SFP の買掛金は、修正後の統制勘定の残高']
        },
        {
          title: '英単語',
          words: [
            ['list of payables ledger balances', '', '買掛金元帳の残高一覧'],
            ['undercast / overcast', 'アンダーキャスト／オーバーキャスト', '合計を少なく／多く足した誤り'],
            ['casting error', 'キャスティング・エラー', '足し算の誤り'],
            ['misposting', 'ミスポスティング', '転記ミス'],
            ['trade payables', 'トレード・ペイヤブルズ', '買掛金（SFP の流動負債）'],
            ['debit balance', 'デビット・バランス', '借方残高'],
            ['omission', 'オミッション', '記入漏れ']
          ]
        }
      ],
      quiz: [
        { q: 'The total of the purchases day book was undercast by $800. The total was used to post both the purchases account and the payables control account. Which journal entry corrects the error?', choices: ['Dr Purchases $800, Cr Payables control $800', 'Dr Payables control $800, Cr Purchases $800', 'No journal is needed; adjust the list of payables ledger balances only', 'Dr Payables control $800, Cr Cash $800'], answer: 0, explain: '合計が少なかったので、仕入（費用）も統制勘定（負債）も $800 足りない。仕入を借方、統制勘定を貸方で増やす。2つ目は左右が逆。総勘定元帳の誤りなので一覧を直すだけでは足りない。' },
        { q: 'Which of the following errors would cause a difference between the payables control account and the list of payables ledger balances?', choices: ['An invoice was omitted from the purchases day book', 'An invoice was posted to the wrong supplier account in the payables ledger', 'A supplier balance of $420 was omitted from the list of balances', 'An invoice was recorded at the wrong amount in the purchases day book'], answer: 2, explain: '一覧の書き漏れは一覧だけが減る。日記帳への記入漏れと日記帳の金額違いは、統制勘定と個別勘定の両方が同じだけずれるので差が出ない。別の仕入先への記帳は一覧の合計が変わらない。' },
        { q: 'The payables control account shows a credit balance of $9,640. The list of payables ledger balances totals $9,550. Discounts received of $160 were recorded in the individual supplier accounts but were not posted in the general ledger. The purchases day book was overcast by $200. A supplier balance of $180 was included twice in the list. An invoice of $560 was posted to the supplier account as $650. What is the corrected balance on the payables control account?', type: 'number', answer: 9280, unit: '$', explain: '統制勘定: 受けた割引で $160 減り、日記帳の多すぎで $200 減る。$9,640 − 160 − 200 ＝ $9,280。一覧で確認: $9,550 − 180 − 90（650 − 560）＝ $9,280。一致する。' },
        { q: '一覧に、仕入先の借方残高 $70 が貸方残高として入っていた。一覧の合計をどう直す？', choices: ['$140 減らす', '$70 減らす', '$70 増やす', '直さない'], answer: 0, explain: '本当は −$70 なのに ＋$70 と数えていたので、差は $140。$70 だけ減らすと 0 になるだけで、まだ足りない。' },
        { q: 'After correcting errors, the payables control account shows a credit balance of $12,600, which agrees with the list of payables ledger balances. The supplier statements total $13,400 because of payments in transit. What amount should be reported as trade payables in the statement of financial position?', choices: ['$12,600', '$13,400', '$800', '$26,000'], answer: 0, explain: 'SFP は修正後の統制勘定の残高。明細書の合計は、まだ相手に届いていない支払い $800 の分だけ多いだけ。' },
        { q: 'A社の請求書 $300 を、間違えてB社の勘定に書いた。統制勘定と一覧の照合で見つかる？', choices: ['見つからない。一覧の合計は変わらない（明細書との照合で見つかる）', '統制勘定が $300 ずれるので見つかる', '一覧が $600 ずれるので見つかる', '試算表が合わなくなるので見つかる'], answer: 0, explain: 'A社が $300 少なく、B社が $300 多いだけで、合計は同じ。A社やB社の明細書と照合すると見つかる。統制勘定は日記帳の合計から作るので正しいまま。' }
      ]
    }
  ],
  cards: [
    { id: 'L85-1', lesson: 'L85', q: 'SFP に載せる銀行残高は？', a: '修正後の帳簿残高（adjusted cash book balance）' },
    { id: 'L85-2', lesson: 'L85', q: 'なぜ銀行明細の残高を使わない？', a: '未取付小切手などは会社では済んだ取引で、銀行の処理が遅いだけだから' },
    { id: 'L85-3', lesson: 'L85', q: '修正後の帳簿が貸方残高なら、SFP では？', a: '当座借越（bank overdraft）として流動負債に載せる' },
    { id: 'L85-4', lesson: 'L85', q: '未取付小切手・銀行の誤りは SFP の銀行残高を変える？', a: '変えない。明細の側で調整するだけで、帳簿は直さない' },
    { id: 'L85-5', lesson: 'L85', q: '帳簿 $2,000（借方）、未記帳の手数料 $30、未記帳の振込入金 $400。SFP の銀行残高は？', a: '$2,370（2,000 − 30 ＋ 400）' },
    { id: 'L86-1', lesson: 'L86', q: '買掛金統制勘定と買掛金元帳の違いは？', a: '統制勘定は総勘定元帳の合計の勘定で複式簿記の一部。買掛金元帳は仕入先ごとのメモ' },
    { id: 'L86-2', lesson: 'L86', q: '買掛金統制勘定の貸方に入るものは？', a: '期首残高と掛け仕入（仕入日記帳の合計）' },
    { id: 'L86-3', lesson: 'L86', q: '買掛金統制勘定の借方に入るものは？', a: '支払い、仕入戻し、受けた割引、売掛金との相殺' },
    { id: 'L86-4', lesson: 'L86', q: '現金仕入は統制勘定に入る？', a: '入らない。買掛金が生まれないから' },
    { id: 'L86-5', lesson: 'L86', q: '統制勘定を持つ目的を3つ', a: '合計がすぐ出る、誤りが見つかる、不正を防ぐ' },
    { id: 'L86-6', lesson: 'L86', q: 'シラバスでの統制勘定の呼び方は？', a: 'payables general ledger account（K1 は trade payables general ledger account）' },
    { id: 'L87-1', lesson: 'L87', q: '取引先明細書と照合する目的は？', a: '第三者の独立した記録と比べ、漏れ・誤り・払いすぎを見つけるため' },
    { id: 'L87-2', lesson: 'L87', q: '時間差の例を2つ', a: 'まだ相手に届いていない支払い、相手がまだ出していない返品の貸方票' },
    { id: 'L87-3', lesson: 'L87', q: '時間差はどちら側で調整する？', a: '明細書の側。自分の帳簿は直さない' },
    { id: 'L87-4', lesson: 'L87', q: '明細書にあり帳簿にない請求書（商品は受取済み）は？', a: '自分の記帳漏れ。帳簿に記録して買掛金に入れる' },
    { id: 'L87-5', lesson: 'L87', q: '帳簿 $3,900、明細書 $5,600、届いていない支払い $1,400、記帳漏れの請求書 $300。正しい残高は？', a: '$4,200（3,900 ＋ 300 ＝ 5,600 − 1,400）' },
    { id: 'L87-6', lesson: 'L87', q: '期末にまだ届いていない商品の請求書が明細書にある。どうする？', a: '時間差。まだ払う義務がないので、明細書の側で引く' },
    { id: 'L87-7', lesson: 'L87', q: '自分が引いた割引を仕入先が認めない（支払いが遅れた）。どうする？', a: '自分の誤り。帳簿で割引を取り消し、買掛金を増やす' },
    { id: 'L88-1', lesson: 'L88', q: '仕訳で直すのはどんな誤り？', a: '統制勘定（総勘定元帳）の誤り。日記帳の合計ミス、統制勘定への転記漏れなど' },
    { id: 'L88-2', lesson: 'L88', q: '個別勘定への転記ミスの直し方は？', a: '一覧と個別勘定を直すだけ。仕訳はいらない' },
    { id: 'L88-3', lesson: 'L88', q: '仕入日記帳の合計が $500 少なかった。仕訳は？', a: 'Dr Purchases 500 / Cr Payables control 500' },
    { id: 'L88-4', lesson: 'L88', q: '借方残高 $70 を一覧に貸方で入れた。直し方は？', a: '一覧の合計を $140 減らす（2倍ずれている）' },
    { id: 'L88-5', lesson: 'L88', q: '統制勘定と一覧の照合で見つからない誤りは？', a: '日記帳への記入漏れ、別の仕入先の勘定への記帳' },
    { id: 'L88-6', lesson: 'L88', q: 'SFP に載せる買掛金は？', a: '誤りを直して一覧と一致した後の統制勘定の残高' }
  ]
});
