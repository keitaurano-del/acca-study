(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 19,
  part: 12,
  partTitle: '誤謬と仮勘定',
  lessons: [
    {
      id: 'L89',
      no: 89,
      title: '誤謬の種類',
      goal: '帳簿の誤り（誤謬）を種類ごとに見分けて、英語の名前で言えるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['F2(a)'],
      slides: [
        {
          title: '家計簿の書き間違い',
          paras: ['家計簿アプリで、お金を出した「財布」と、使い道の「食費」「交通費」などの2か所に記録しているとする。', '間違え方にはパターンがある。書き忘れる、使い道を取り違える、金額を打ち間違える。会計の誤り（誤謬、error）も同じで、種類ごとに英語の名前が付いている。']
        },
        {
          title: '左右がそろったままの誤り①',
          paras: ['複式簿記では、借方と貸方に同じ金額を書く。次の誤りは、借方と貸方の金額はそろっているのに、中身が間違っている。'],
          table: {
            caption: 'たこ焼き屋の例',
            head: ['種類', '例'],
            rows: [
              ['記帳漏れ（error of omission）', '掛けで仕入れた小麦粉 $300 の請求書を、借方も貸方もまったく記録しなかった'],
              ['勘定の取り違え（error of commission）', '電気代 $540 を、正しい金額で通信費（telephone）の勘定に記録した。同じ「費用」どうしの取り違え'],
              ['原則の誤り（error of principle）', '焼き器の修理代 $800（費用）を、有形固定資産の勘定に記録した。費用と資産という、種類の違う勘定への取り違え']
            ]
          }
        },
        {
          title: '左右がそろったままの誤り②',
          table: {
            caption: 'たこ焼き屋の例（続き）',
            head: ['種類', '例'],
            rows: [
              ['原始記入の誤り（error of original entry）', '$1,250 の売上請求書を最初から $1,520 と打ち、売上も売掛金も $1,520 で記録した'],
              ['貸借の逆記入（reversal of entries）', '現金売上 $300 を、Dr Sales・Cr Cash と逆に記録した。勘定も金額も正しいが、向きが逆'],
              ['相殺する誤り（compensating errors）', '売上勘定の合計を $100 多く計算し、家賃勘定の合計も $100 多く計算した。2つの誤りが打ち消し合う']
            ]
          }
        },
        {
          title: '左右がずれる誤り',
          paras: ['次の誤りは、借方の合計と貸方の合計がずれる。'],
          list: [
            '片側だけの記入（single-sided entry）: 入金を現金には記録したが、売掛金には記録しなかった',
            '金額違い（unequal amounts）: 借方は $1,520、貸方は $1,250 と書いた。片側だけの数字の入れ替わり（transposition error）もこれ',
            '同じ側に2回（two debits / two credits）',
            '合計の誤り（casting error）: 勘定の合計を多く（overcast）または少なく（undercast）計算した',
            '写し間違い（extraction error）: 勘定の残高を試算表に違う額で写した、反対側に写した、写し忘れた'
          ]
        },
        {
          title: 'commission と principle の違い',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="勘定の取り違えと原則の誤りの違い" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">取り違えた勘定の種類で分かれる</text><rect x="20" y="52" width="190" height="180" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="84" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">勘定の取り違え</text><text x="115" y="104" text-anchor="middle" font-size="12.5" fill="var(--quiet)">error of commission</text><text x="115" y="140" text-anchor="middle" fill="var(--ink)">費用 → 別の費用</text><text x="115" y="166" text-anchor="middle" fill="var(--ink)">電気代を通信費に</text><text x="115" y="206" text-anchor="middle" fill="var(--quiet)">同じ種類の中</text><rect x="230" y="52" width="190" height="180" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="84" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">原則の誤り</text><text x="325" y="104" text-anchor="middle" font-size="12.5" fill="var(--quiet)">error of principle</text><text x="325" y="140" text-anchor="middle" fill="var(--ink)">費用 → 資産</text><text x="325" y="166" text-anchor="middle" fill="var(--ink)">修理代を固定資産に</text><text x="325" y="206" text-anchor="middle" fill="var(--ink)">違う種類へ</text><text x="220" y="266" text-anchor="middle" fill="var(--ink)">どちらも試算表の左右はそろったまま</text></svg>`,
          caption: '資産・負債・資本・収益・費用の5つの種類のうち、同じ種類の中での取り違えが commission。費用を資産にする、引出しを費用にするなど、種類をまたぐと principle。'
        },
        {
          title: 'なぜ？ 種類に分けて覚える理由',
          paras: ['種類によって「見つけ方」と「直し方」が変わるから。', '左右がずれる誤りは、試算表の合計が合わないので見つかる。左右がそろった誤りは、試算表を作っても見つからない。照合や見直しで探すしかない。', 'また、費用を資産にした原則の誤りは利益を変えるが、費用どうしの取り違えは利益を変えない。種類が分かれば、影響も読める。']
        },
        {
          title: 'コンピュータ会計で起きる誤り',
          paras: ['会計ソフトは、借方と貸方が同額でない仕訳を受け付けず、合計も自動で計算する。だから片側だけの記入や合計の誤りは、ほとんど起きない。人が入力する誤りは残る。'],
          list: ['入力し忘れる（omission）', '勘定コードを選び間違える（commission・principle）。顧客Aの入金を顧客Bの売掛金に入れるのも commission', '金額を打ち間違える（original entry）', '借方と貸方を逆にする（reversal）', '同じ請求書を2回入力する（duplication、二重計上）']
        },
        {
          title: 'よくある間違い',
          paras: ['費用を別の費用にしたら commission、費用を資産にしたら principle。「種類をまたいだか」で決める。'],
          note: { kind: 'warn', text: '原始記入の誤りと金額違いを混同しやすい。最初の書類から両側とも $1,520 なら原始記入の誤り（左右はそろう）。借方 $1,520・貸方 $1,250 のように片側だけ違えば金額違い（左右がずれる）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['左右がそろう誤り: 記帳漏れ・勘定の取り違え・原則の誤り・原始記入の誤り・逆記入・相殺する誤り', '左右がずれる誤り: 片側だけの記入・金額違い・同じ側に2回・合計の誤り・写し間違い', '同じ種類の勘定どうしの取り違えは commission、費用と資産など種類をまたぐと principle']
        },
        {
          title: '英単語',
          words: [
            ['error of omission', 'エラー オブ オミッション', '記帳漏れ（取引をまったく記録しない）'],
            ['error of commission', 'エラー オブ コミッション', '勘定の取り違え（同じ種類の別の勘定へ）'],
            ['error of principle', 'エラー オブ プリンシプル', '原則の誤り（種類の違う勘定へ）'],
            ['error of original entry', 'エラー オブ オリジナル エントリー', '原始記入の誤り（最初から金額が違う）'],
            ['reversal of entries', 'リバーサル オブ エントリーズ', '貸借の逆記入'],
            ['compensating errors', 'コンペンセイティング エラーズ', '打ち消し合う誤り'],
            ['transposition error', 'トランスポジション エラー', '数字の入れ替わり'],
            ['casting error', 'キャスティング エラー', '合計の誤り（cast＝合計する）'],
            ['duplication', 'デュプリケーション', '二重計上']
          ]
        }
      ],
      quiz: [
        { q: 'オーナーの個人的な買い物 $200 を、お店の消耗品費（費用）として記録した。誤りの種類は？', choices: ['勘定の取り違え（error of commission）', '原則の誤り（error of principle）', '記帳漏れ（error of omission）', '原始記入の誤り（error of original entry）'], answer: 1, explain: '本当は引出し（drawings、資本の減少）。それを費用にしたので、種類をまたぐ取り違え＝principle。費用どうしの取り違えではないので commission ではない。金額は正しく記録されているので original entry でもない。' },
        { q: 'A payment of $450 for telephone charges was debited to the electricity account. What type of error is this?', choices: ['An error of principle', 'An error of commission', 'An error of omission', 'A compensating error'], answer: 1, explain: '通信費も電気代も同じ「費用」。同じ種類の中の取り違えなので commission。種類をまたいでいないので principle ではない。' },
        { q: 'A sales invoice for $2,340 was entered as $2,430 in both the sales account and the trade receivables account. What type of error is this?', choices: ['A transposition error on one side only', 'An error of original entry', 'An error of commission', 'A casting error'], answer: 1, explain: '数字は入れ替わっているが、両側とも同じ $2,430 で記録したので、最初の金額からの誤り＝original entry。片側だけなら左右がずれるが、今回はそろっている。' },
        { q: '現金売上 $250 を、Dr Sales $250・Cr Cash $250 と記録した。誤りの種類は？', choices: ['貸借の逆記入（reversal of entries）', '片側だけの記入（single-sided entry）', '相殺する誤り（compensating errors）', '原則の誤り（error of principle）'], answer: 0, explain: '正しくは Dr Cash・Cr Sales。勘定も金額も正しく、向きだけが逆なので reversal。両側とも書いてあるので片側だけの記入ではない。' },
        { q: '会計ソフトを使っている会社で、ほとんど起きない誤りは？', choices: ['同じ請求書を2回入力する', '勘定コードを選び間違える', '勘定の合計を計算し間違える（casting error）', '取引を入力し忘れる'], answer: 2, explain: '合計はソフトが自動で計算し、借方と貸方の一致も確かめるので、casting error はほぼ起きない。二重入力・コードの選び間違い・入力漏れは、人の入力ミスなので起きる。' }
      ]
    },
    {
      id: 'L90',
      no: 90,
      title: '試算表で見つかる誤り・見つからない誤り',
      goal: 'ある誤りで試算表の合計が合わなくなるかを判断し、合わないときの差額を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['F2(b)'],
      slides: [
        {
          title: 'レジ締めで分かること',
          paras: ['お店のレジを締めるとき、レシートの合計と引き出しの現金を比べる。合計が合えば、ひとまず安心。', 'でも、500円の焼きそばを、同じ500円のラムネのボタンで打っても、合計は合う。合計のチェックで見つかるのは「合計がずれる間違い」だけ。']
        },
        {
          title: '試算表が確かめるのは1つだけ',
          paras: ['試算表（trial balance）は、元帳の全部の勘定の残高を並べて、借方の合計と貸方の合計が同じかを確かめる表。', '確かめているのは合計だけ。どの勘定に、正しい向きで、正しい金額で記録したかまでは見ていない。'],
          formula: 'total debits ＝ total credits'
        },
        {
          title: '見分け方',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="試算表で見つかる誤りの見分け方" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">試算表で見つかる誤りの見分け方</text><rect x="60" y="50" width="320" height="52" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">その誤りで、借方と貸方の額は同じ？</text><path d="M220 102L115 140M220 102L325 140" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="140" width="190" height="150" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="168" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">同じ</text><text x="115" y="196" text-anchor="middle" fill="var(--ink)">試算表は合う</text><text x="115" y="220" text-anchor="middle" fill="var(--ink)">見つからない</text><text x="115" y="252" text-anchor="middle" fill="var(--quiet)">記帳漏れ・取り違え</text><text x="115" y="274" text-anchor="middle" fill="var(--quiet)">原則・逆記入など</text><rect x="230" y="140" width="190" height="150" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="168" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">違う</text><text x="325" y="196" text-anchor="middle" fill="var(--ink)">試算表が合わない</text><text x="325" y="220" text-anchor="middle" fill="var(--ink)">見つかる</text><text x="325" y="252" text-anchor="middle" fill="var(--ink)">片側記入・金額違い</text><text x="325" y="274" text-anchor="middle" fill="var(--ink)">合計の誤りなど</text><text x="220" y="322" text-anchor="middle" fill="var(--ink)">合わないときの差額は仮勘定へ（あとで学ぶ）</text></svg>`,
          caption: '判断のコツは「その誤りで、借方に入った金額と貸方に入った金額が同じかどうか」だけを見ること。'
        },
        {
          title: '試算表が合ったままの誤り',
          table: {
            caption: '試算表では見つからない',
            head: ['誤り', '試算表が合う理由'],
            rows: [
              ['記帳漏れ（omission）', '借方も貸方も記録していない'],
              ['勘定の取り違え（commission）', '借方と貸方に同じ金額がある'],
              ['原則の誤り（principle）', '借方と貸方に同じ金額がある'],
              ['原始記入の誤り（original entry）', '両側とも同じ間違った金額'],
              ['逆記入（reversal）', '向きが逆でも金額は同じ'],
              ['相殺する誤り（compensating）', 'ずれが打ち消し合う']
            ]
          }
        },
        {
          title: '試算表が合わなくなる誤り',
          table: {
            caption: '試算表で見つかる',
            head: ['誤り', '差額の大きさ'],
            rows: [
              ['片側だけの記入', 'その金額'],
              ['金額違い（片側だけの転置を含む）', '2つの金額の差'],
              ['同じ側に2回', '金額の2倍'],
              ['勘定の合計の誤り', '多すぎた・少なすぎた額'],
              ['残高を試算表に写し忘れた', 'その残高'],
              ['残高を試算表の反対側に写した', '残高の2倍']
            ]
          }
        },
        {
          title: '差額を計算する',
          example: {
            problem: '現金売上 $300 を、Dr Cash $300・Dr Sales $300 と、両方とも借方に記録した。試算表のどちらの合計が、いくら多くなる？',
            steps: ['正しくは Dr Cash $300・Cr Sales $300。', '実際は、貸方に入るはずの $300 が借方に入った。', '借方は正しい状態より $300 多く、貸方は $300 少ない。', '差は $300 ＋ $300 ＝ $600。'],
            answer: '借方の合計が、貸方の合計より $600 多くなる'
          }
        },
        {
          title: '転置の差は9で割り切れる',
          paras: ['数字の順番が入れ替わる誤りを転置（transposition）という。$1,250 を $1,520 と書くなど。', '入れ替わったときの差は、必ず9で割り切れる。$1,520 − $1,250 ＝ $270 ＝ 9 × 30。', '試算表の差額が9で割り切れたら、片側だけの転置を疑うと探しやすい。両側とも同じ数字に入れ替えたなら原始記入の誤りなので、試算表は合う。']
        },
        {
          title: 'なぜ？ 合っている試算表でも安心できない',
          paras: ['試算表は「借方と貸方に同じ金額を書く」というルールが守られたかを確かめる道具。ルールを守ったまま勘定や金額を間違えた誤りは、見抜けない。', 'だから、銀行勘定調整や取引先明細書との照合、勘定の見直しが別に必要になる。'],
          note: { kind: 'warn', text: '記帳漏れ（error of omission）と「残高を試算表に写し忘れた」は別物。記帳漏れは両側とも記録がないので試算表は合う。写し忘れは片側の残高だけが抜けるので合わない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['試算表が確かめるのは「借方の合計＝貸方の合計」だけ', '見つからない: 記帳漏れ・取り違え・原則・原始記入・逆記入・相殺', '見つかる: 片側記入・金額違い・同じ側に2回・合計の誤り・写し間違い。転置の差は9で割り切れる']
        },
        {
          title: '英単語',
          words: [
            ['trial balance', 'トライアル バランス', '試算表'],
            ['agree', 'アグリー', '（試算表の合計が）合う'],
            ['reveal / highlight', 'リビール / ハイライト', '（誤りを）明らかにする'],
            ['single-sided entry', 'シングルサイデッド エントリー', '片側だけの記入'],
            ['overcast / undercast', 'オーバーキャスト / アンダーキャスト', '合計を多く／少なく計算する'],
            ['extraction error', 'エクストラクション エラー', '試算表への写し間違い'],
            ['omitted from the trial balance', '', '試算表に写し忘れた']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following errors would cause a trial balance NOT to agree?', choices: ['A purchase invoice was omitted from the accounting records', 'Rent paid was debited to the insurance account', 'The sales account was undercast by $400', 'A cash sale was debited to sales and credited to cash'], answer: 2, explain: '売上の合計を $400 少なく計算すると、貸方の合計だけが $400 少なくなるので試算表が合わない。記帳漏れ（omission）、家賃を保険料に（commission）、逆記入（reversal）は、借方と貸方の金額がそろったままなので見つからない。' },
        { q: 'Which of the following errors would NOT be revealed by extracting a trial balance?', choices: ['A receipt from a customer was posted to the cash account only', 'Repairs of $600 were debited to the motor vehicles account', 'The balance on the rent account was omitted from the trial balance', 'Purchases of $420 were debited as $240 to purchases and credited as $420 to payables'], answer: 1, explain: '修理費を車両の勘定に入れたのは原則の誤り。借方と貸方に $600 ずつあるので試算表は合う。片側だけの記入、残高の写し忘れ、金額違いは、どれも合計がずれる。' },
        { q: '仕入 $700 を、Dr Purchases $700・Cr Trade payables $70 と記録した。試算表はどうなる？', choices: ['合う', '借方の合計が $630 多い', '貸方の合計が $630 多い', '借方の合計が $700 多い'], answer: 1, explain: '借方は $700、貸方は $70 しか入っていない。差は $700 − $70 ＝ $630 で、借方が多い。$700 は貸方を丸ごと書き忘れたときの差。' },
        { q: '貸方にあるべき受けた割引（discounts received）の残高 $150 を、試算表の借方に写した。どうなる？', choices: ['合う', '借方の合計が $150 多い', '借方の合計が $300 多い', '貸方の合計が $300 多い'], answer: 2, explain: '借方に $150 余計に入り、貸方から $150 抜ける。差は $150 × 2 ＝ $300 で、借方が多い。反対側に写すと差は2倍になる。' },
        { q: '試算表の差額が $540 だった。最初に疑うとよい誤りは？', choices: ['片側だけの数字の入れ替わり（転置）', '貸借の逆記入', '勘定の取り違え', '記帳漏れ'], answer: 0, explain: '$540 ＝ 9 × 60 で9で割り切れるので、片側だけの転置が候補になる。逆記入・取り違え・記帳漏れは、そもそも試算表の合計をずらさない。' }
      ]
    },
    {
      id: 'L91',
      no: 91,
      title: '訂正仕訳',
      goal: '誤りの種類を見て、正しい状態に戻す訂正仕訳を書けるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['F2(c)'],
      slides: [
        {
          title: '消さずに、直す記録を足す',
          paras: ['ネット銀行で間違った相手に振り込んでも、元の振込の記録は消えない。組み戻しという「逆向きの取引」がもう1本記録される。', '会計も同じ。元帳の誤りを消したり上書きしたりせず、誤りを打ち消す仕訳を1本足す。これを訂正仕訳（correcting journal entry）という。']
        },
        {
          title: '訂正仕訳の3ステップ',
          numbered: ['実際に記録された仕訳を書く（what was done）', '本来あるべき仕訳を書く（what should have been done）', '1を2に変えるための差を、仕訳にする'],
          formula: '訂正仕訳 ＝ 正しい仕訳 − 実際の仕訳'
        },
        {
          title: '仕訳（journal）の書き方',
          paras: ['訂正は、手で入力する仕訳（manual journal）として記録する。日付、借方の勘定と金額、貸方の勘定と金額、理由を書いた説明文（narrative）をそろえる。'],
          journal: [
            { side: 'Dr', account: 'Electricity expense（電気代）', amount: '540' },
            { side: 'Cr', account: 'Telephone expense（通信費）', amount: '540' }
          ],
          after: '説明文の例:「電気代 $540 を通信費に誤って記録したため訂正」。勘定の取り違えは、間違った勘定から正しい勘定へ移すだけ。'
        },
        {
          title: '例題1: 原則の誤り',
          example: {
            problem: '焼き器の修理代 $800 を現金で払い、Dr Plant and equipment（有形固定資産）$800・Cr Cash $800 と記録した。訂正仕訳は？',
            steps: ['実際: Dr Plant and equipment 800 / Cr Cash 800', '正しい: Dr Repairs expense 800 / Cr Cash 800', '現金の記録は正しいので、触らない', '資産を貸方で $800 減らし、修理費を借方で $800 増やす'],
            answer: 'Dr Repairs expense $800 / Cr Plant and equipment $800'
          }
        },
        {
          title: '例題2: 逆記入は2倍で直す',
          example: {
            problem: '現金売上 $300 を、Dr Sales $300・Cr Cash $300 と逆に記録した。訂正仕訳は？',
            steps: ['実際: 現金が $300 減り、売上も $300 減っている', '正しい: 現金は $300 増え、売上も $300 増えるはず', '現金は −$300 から ＋$300 へ。動かす幅は $600', '売上も同じく $600 動かす'],
            answer: 'Dr Cash $600 / Cr Sales $600'
          }
        },
        {
          title: '例題3: 原始記入の誤り',
          example: {
            problem: '$1,250 の掛け売上を最初から $1,520 と打って、Dr Trade receivables $1,520・Cr Sales $1,520 と記録した。訂正仕訳は？',
            steps: ['実際: 売掛金・売上とも $1,520', '正しい: 売掛金・売上とも $1,250', '両方とも $1,520 − $1,250 ＝ $270 多すぎる', '多すぎた分を、元と反対側に書いて取り消す'],
            answer: 'Dr Sales $270 / Cr Trade receivables $270'
          }
        },
        {
          title: '誤りの種類ごとの直し方',
          table: {
            head: ['誤り', '訂正仕訳'],
            rows: [
              ['記帳漏れ', '正しい仕訳をそのまま記録する'],
              ['勘定の取り違え', '間違った勘定から正しい勘定へ移す'],
              ['原則の誤り', '間違った種類の勘定から正しい勘定へ移す'],
              ['原始記入の誤り', '金額の差だけを足すか、取り消す'],
              ['逆記入', '金額の2倍で、正しい向きに記録する'],
              ['相殺する誤り', 'それぞれの誤りを別々に直す']
            ]
          },
          after: '片側記入・金額違い・合計の誤りなど、試算表の合計をずらした誤りの訂正には仮勘定を使う。L93 で練習する。'
        },
        {
          title: 'なぜ？ 消さずに仕訳を足す理由',
          paras: ['あとから誰が見ても「何を間違えて、いつ、誰が、どう直したか」が分かるようにするため。この記録の跡を監査証跡（audit trail）という。', '上書きできると、不正も隠しやすくなる。だから手入力の仕訳は説明文を付けて責任者が承認する。会計ソフトも、記録済みの仕訳は消さず、訂正仕訳で直す作りになっている。']
        },
        {
          title: 'よくある間違い',
          paras: ['訂正仕訳の向きを逆にしやすい。間違って記入した勘定は、元の記入と反対側に書いて取り消す。借方に誤って入れた $800 は、貸方で取り消す。'],
          note: { kind: 'warn', text: '逆記入を元の金額 $300 で直してしまう。$300 では「ゼロ」に戻るだけで、正しい $300 にはならない。逆記入は必ず2倍。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['訂正仕訳は「正しい仕訳 − 実際の仕訳」。元の記録は消さない', '取り違え・原則の誤りは、間違った勘定から正しい勘定へ移す', '逆記入は金額の2倍。原始記入の誤りは差額だけ直す']
        },
        {
          title: '英単語',
          words: [
            ['correcting journal entry', 'コレクティング ジャーナル エントリー', '訂正仕訳'],
            ['journal', 'ジャーナル', '仕訳、仕訳帳'],
            ['manual journal', 'マニュアル ジャーナル', '手で入力する仕訳'],
            ['narrative', 'ナラティブ', '仕訳の説明文'],
            ['audit trail', 'オーディット トレイル', '監査証跡（直した跡の記録）'],
            ['repairs expense', 'リペアーズ エクスペンス', '修理代、修繕費']
          ]
        }
      ],
      quiz: [
        { q: '家賃 $450 を現金で払い、Dr Cash $450・Cr Rent expense $450 と逆に記録した。訂正仕訳 Dr Rent expense / Cr Cash の金額は？', type: 'number', answer: 900, unit: '$', explain: '逆記入なので2倍。現金は −$450 のはずが ＋$450 になっているので $900 戻し、家賃も $900 動かす。$450 で直すとゼロに戻るだけ。' },
        { q: 'Repairs to a delivery van costing $1,200 were debited to the motor vehicles account. Which journal entry corrects the error?', choices: ['Dr Repairs expense $1,200, Cr Motor vehicles $1,200', 'Dr Motor vehicles $1,200, Cr Repairs expense $1,200', 'Dr Repairs expense $1,200, Cr Cash $1,200', 'Dr Repairs expense $2,400, Cr Motor vehicles $2,400'], answer: 0, explain: '原則の誤り。車両（資産）に入った $1,200 を貸方で取り消し、修理費（費用）を借方に記録する。現金の記録は正しいので Cr Cash は二重に払ったことになる。2倍にするのは逆記入のときだけ。' },
        { q: 'A credit sale of $860 was recorded as $680 in both the sales account and the trade receivables account. Which journal entry corrects the error?', choices: ['Dr Sales $180, Cr Trade receivables $180', 'Dr Trade receivables $180, Cr Sales $180', 'Dr Trade receivables $860, Cr Sales $860', 'Dr Trade receivables $360, Cr Sales $360'], answer: 1, explain: '原始記入の誤り。両方とも $860 − $680 ＝ $180 少ないので、売掛金と売上を $180 ずつ増やす。$860 を全部入れると二重になる。向きを逆にすると、さらに減ってしまう。' },
        { q: 'オーナーが店の現金 $500 を私用に持ち出し、Dr Wages expense $500・Cr Cash $500 と記録した。訂正仕訳は？', choices: ['Dr Drawings $500 / Cr Wages expense $500', 'Dr Wages expense $500 / Cr Drawings $500', 'Dr Drawings $500 / Cr Cash $500', 'Dr Drawings $1,000 / Cr Wages expense $1,000'], answer: 0, explain: '費用（給料）にしたのは原則の誤り。給料を貸方で取り消し、引出しを借方に記録する。現金の減少は正しく記録済みなので Cr Cash は不要。逆記入ではないので2倍にしない。' },
        { q: '掛けで届いた保険料の請求書 $360 を、まったく記録していなかった。訂正仕訳は？', choices: ['Dr Insurance expense $360 / Cr Payables $360', 'Dr Payables $360 / Cr Insurance expense $360', 'Dr Insurance expense $720 / Cr Payables $720', '試算表は合っているので訂正は不要'], answer: 0, explain: '記帳漏れは、正しい仕訳をそのまま記録して直す。試算表が合っていても誤りは誤りなので、訂正は必要。' }
      ]
    },
    {
      id: 'L92',
      no: 92,
      title: '仮勘定の目的と発生原因',
      goal: '仮勘定を使う理由と、どんな誤りで仮勘定が生まれるかを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['F3(a)', 'F3(b)'],
      slides: [
        {
          title: '引越しの「保留」の箱',
          paras: ['引越しの片付けで、どこに置くか決まらない物が出てくる。そのたびに手を止めていたら終わらない。', 'そこで「保留」と書いた箱にいったん入れて、作業を先に進める。あとで1つずつ正しい場所に運び、箱が空になったら片付け完了。会計でこの箱の役目をするのが仮勘定（suspense account）。']
        },
        {
          title: '仮勘定とは',
          paras: ['仮勘定は、正しい行き先が決まるまで、金額を一時的に置いておく勘定。使う場面は2つある。'],
          list: ['試算表の借方の合計と貸方の合計が合わないとき、その差額を入れて合計をそろえる', '入金や支払があったのに、どの勘定に記録すればよいか分からないとき'],
          after: 'どちらも、原因が分かったら正しい勘定へ移す。'
        },
        {
          title: '試算表の差額で開く',
          paras: ['試算表の合計が借方 $100,500、貸方 $100,000 だった。貸方が $500 足りない。足りない側の貸方に仮勘定 $500 を入れて、合計をそろえる。'],
          table: {
            caption: '試算表（抜粋）',
            head: ['項目', 'Dr $', 'Cr $'],
            rows: [['各勘定の合計', '100,500', '100,000'], ['Suspense account', '', '500']],
            total: ['合計', '100,500', '100,500']
          },
          formula: '仮勘定は、合計が少ない側に入れる'
        },
        {
          title: '行き先の分からない入金',
          paras: ['銀行に $150 の入金があったが、誰からの何のお金か分からない。現金が増えたのは確かなので借方 Cash に記録し、貸方は仮勘定に置いておく。'],
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '150' },
            { side: 'Cr', account: 'Suspense（仮勘定）', amount: '150' }
          ],
          after: 'あとで顧客Aからの売掛金の回収と分かったら、Dr Suspense $150・Cr Trade receivables $150 で正しい勘定へ移す。'
        },
        {
          title: '仮勘定が生まれる誤り',
          paras: ['試算表の合計がずれる誤りが、仮勘定を生む。前のレッスンの「見つかる誤り」と同じ。'],
          list: ['片側だけの記入', '借方と貸方の金額違い（片側だけの転置を含む）', '同じ側に2回の記入', '勘定の合計の誤り（overcast・undercast）', '試算表への写し間違い・写し忘れ', '行き先の分からない記入'],
          after: '記帳漏れ・取り違え・原則の誤りなど、左右がそろった誤りでは仮勘定は生まれない。'
        },
        {
          title: '仮勘定の流れ',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="仮勘定は開いて、移して、閉じる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">仮勘定の流れ</text><rect x="20" y="50" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="75" font-size="16" font-weight="600" fill="var(--ink)">① 開く</text><text x="40" y="98" fill="var(--ink)">試算表の差額を、合計が少ない側に入れる</text><path d="M220 112L220 126M214 120L220 127L226 120" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="130" width="400" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="155" font-size="16" font-weight="600" fill="var(--ink)">② 移す</text><text x="40" y="178" fill="var(--ink)">誤りが分かるたびに、正しい勘定へ移す</text><path d="M220 192L220 206M214 200L220 207L226 200" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="210" width="400" height="60" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="235" font-size="16" font-weight="600" fill="var(--ink)">③ 閉じる</text><text x="40" y="258" fill="var(--ink)">残高0で完了。財務諸表には残さない</text></svg>`,
          caption: '開く → 移す → 閉じる。次のレッスンで、②の仕訳の書き方を練習する。'
        },
        {
          title: 'なぜ？ 仮勘定を使う理由',
          paras: ['誤りを全部見つけるには時間がかかる。そのあいだ決算の作業を止めると、財務諸表の締切に間に合わない。', '差額を仮勘定に置けば、まだ見つかっていない誤りの金額がはっきりし、下書きの作業も進められる。誤りが見つかるたびに仮勘定から移していけば、残高は0に近づく。']
        },
        {
          title: '最後は必ず0にする',
          paras: ['仮勘定は資産でも負債でもない、ただの一時置き場。完成した財務諸表に載せてはいけない。残高が残っているのは、まだ誤りがある証拠。', '会計ソフトでは試算表はふつう合うが、行き先の分からない入金を自動で仮勘定に入れることがある。これも期末までに片付ける。'],
          note: { kind: 'warn', text: '向きを逆にしやすい。借方の合計が多いとき、仮勘定は貸方に入れる。「多い側」ではなく「足りない側」に足す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仮勘定（suspense account）は、行き先が決まるまでの一時置き場', '試算表の差額は、合計が少ない側に入れて開く', '合計がずれる誤りと、行き先の分からない記入で生まれる。最後は必ず0にする']
        },
        {
          title: '英単語',
          words: [
            ['suspense account', 'サスペンス アカウント', '仮勘定'],
            ['temporary', 'テンポラリー', '一時的な'],
            ['trial balance difference', '', '試算表の差額'],
            ['open a suspense account', '', '仮勘定を開く（差額を入れる）'],
            ['clear a suspense account', '', '仮勘定を解消する（0にする）'],
            ['unidentified receipt', 'アンアイデンティファイド レシート', '誰からか分からない入金']
          ]
        }
      ],
      quiz: [
        { q: 'What is the main purpose of a suspense account?', choices: ['To record the private transactions of the owner', 'To hold a trial balance difference or an unclear entry temporarily until it is investigated and corrected', 'To record all cash sales', 'To show amounts owed by customers in the financial statements'], answer: 1, explain: '仮勘定は、試算表の差額や行き先の分からない記入を一時的に置く場所。オーナーの私用は引出し、顧客からの未回収額は売掛金で、どちらも仮勘定ではない。' },
        { q: 'A trial balance has total debits of $96,400 and total credits of $95,800. Which entry is needed to make the trial balance agree?', choices: ['Debit suspense account $600', 'Credit suspense account $600', 'Debit suspense account $1,200', 'Credit suspense account $1,200'], answer: 1, explain: '$96,400 − $95,800 ＝ $600 で、貸方が足りない。足りない側の貸方に $600 を入れる。多い借方に入れると差が $1,200 に広がる。' },
        { q: '仮勘定が生まれる誤りはどれ？', choices: ['掛け仕入 $400 をまったく記録しなかった', '電気代 $200 を通信費の勘定に記録した', '顧客からの入金 $380 を、現金だけに記録して売掛金に記録しなかった', '修理費 $600 を有形固定資産に記録した'], answer: 2, explain: '片側だけの記入なので、借方が $380 多くなり試算表が合わない。記帳漏れ・取り違え・原則の誤りは左右がそろったままなので、仮勘定は生まれない。' },
        { q: '完成間近の財務諸表に、仮勘定の残高 $120 が残っていた。正しい考え方は？', choices: ['小さい額なので資産に含めてよい', 'まだ見つかっていない誤りがあるので、原因を探して0にする', '負債として表示する', 'その他の費用に入れて消す'], answer: 1, explain: '仮勘定は資産でも負債でもない一時置き場。残高は未発見の誤りの証拠なので、原因を見つけて正しい勘定へ移す。' },
        { q: '試算表で、借方の合計が貸方の合計より $300 少なかった。仮勘定はどうする？', choices: ['借方に $300 入れる', '貸方に $300 入れる', '借方に $600 入れる', '仮勘定は使わない'], answer: 0, explain: '足りない側の借方に $300 入れると、合計がそろう。貸方に入れると差が $600 に広がる。' }
      ]
    },
    {
      id: 'L93',
      no: 93,
      title: '仮勘定への記入と解消仕訳',
      goal: '誤りごとに仮勘定を使うかを判断し、訂正仕訳を書いて仮勘定を0にできるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['F3(c)', 'F3(d)'],
      slides: [
        {
          title: '保留の箱を空にする',
          paras: ['引越しの最後は、保留の箱から1つずつ取り出して、正しい部屋に運ぶ。全部運び終わって箱が空になれば完了。', '仮勘定も同じ。誤りを1つずつ見つけて、訂正仕訳で正しい勘定へ移す。全部終わると残高は0になる。これを仮勘定の解消（clearing the suspense account）という。']
        },
        {
          title: '仮勘定を使うのは「ずれた誤り」だけ',
          paras: ['訂正仕訳に仮勘定が入るのは、その誤りが試算表の合計をずらしていたときだけ。', '片側の記入は正しく、もう片側が足りない・多すぎるなら、直す側だけを書き、反対側を仮勘定にする。左右がそろった誤り（取り違え・原則など）は、仮勘定を使わない普通の訂正仕訳で直す。'],
          formula: '片側だけ直す → 反対側は Suspense'
        },
        {
          title: '解き方の手順',
          numbered: ['この誤りで、試算表の合計はずれた？', 'ずれていない → 仮勘定を使わない訂正仕訳', 'ずれている → 間違った勘定を直す側を書き、反対側を仮勘定にする', '仮勘定の T勘定に書き込み、残高が0になるか確かめる'],
          after: '仮勘定の向きを逆にしやすい。先に「直す側の勘定」の向きを決め、仮勘定はその反対側に書く。'
        },
        {
          title: '例題1: 片側だけの記入',
          example: {
            problem: '顧客からの入金 $380 を Dr Cash に記録したが、売掛金には記録しなかった。訂正仕訳は？',
            steps: ['試算表: 借方だけが $380 多く、合計がずれている', '現金の記録は正しい', '足りないのは Cr Trade receivables $380', '反対側の借方は仮勘定にする'],
            answer: 'Dr Suspense $380 / Cr Trade receivables $380'
          }
        },
        {
          title: '例題2: 金額違いと合計の誤り',
          example: {
            problem: '(a) 家賃 $1,250 を払い、現金は正しく記録したが、家賃の勘定には $1,520 と記録した。(b) 仕入の勘定の合計を $200 少なく計算した（undercast）。それぞれの訂正仕訳は？',
            steps: ['(a) 家賃が $1,520 − $1,250 ＝ $270 多すぎる。家賃を貸方で $270 減らす', '(a) 反対側は仮勘定: Dr Suspense $270 / Cr Rent $270', '(b) 仕入（借方の勘定）が $200 足りない。仕入を借方で $200 増やす', '(b) 反対側は仮勘定: Dr Purchases $200 / Cr Suspense $200'],
            answer: '(a) Dr Suspense 270 / Cr Rent 270、(b) Dr Purchases 200 / Cr Suspense 200'
          }
        },
        {
          title: '例題3: 仮勘定を0にする',
          example: {
            problem: '試算表は借方 $86,400、貸方 $85,950 で合わず、差額を仮勘定に入れた。見つかった誤りは、例題1の入金 $380、例題2の家賃と仕入、そして電気代 $200 を通信費の勘定に記録した誤り。仮勘定は0になる？',
            steps: ['開いたとき: 貸方が $450 足りない → Cr Suspense $450', '入金 $380 と家賃 $270 → Dr Suspense（合計 $650）', '仕入 $200 → Cr Suspense $200', '電気代は左右がそろった誤り → 仮勘定を使わない（Dr Electricity 200 / Cr Telephone 200）', '貸方は $450 ＋ $200 ＝ $650。借方も $650'],
            answer: '借方と貸方がどちらも $650。仮勘定の残高は0になる'
          }
        },
        {
          title: '仮勘定の T勘定',
          tAccount: {
            name: 'Suspense account',
            debit: [['Trade receivables', '380'], ['Rent', '270']],
            credit: [['Trial balance difference', '450'], ['Purchases', '200']]
          },
          paras: ['借方の合計 $650、貸方の合計 $650。残高は0で、仮勘定は解消された。試験では、このように T勘定を作って0になるかを確かめる。']
        },
        {
          title: 'なぜ？ 反対側が仮勘定になる理由',
          paras: ['仮勘定を開いた時点で、ずれの金額は全部仮勘定に入っている。片側だけの誤りを直すと、そのずれが消える。だから、同じ金額を仮勘定から取り出すのが正しい反対側になる。', '残高の写し忘れも同じ。保険料の残高 $400 を写し忘れたら、Dr Insurance $400 / Cr Suspense $400。元帳は正しいので、試算表に $400 を戻して仮勘定を消す、という意味の仕訳。']
        },
        {
          title: '例題4: 同じ側に2回（3行の仕訳）',
          example: {
            problem: '通信費 $400 を現金で払った。Cr Cash $400 は正しい。ところが通信費の借方に書かず、電気代の勘定の貸方に Cr Electricity $400 と書いた。訂正仕訳は？',
            steps: ['実際: Cr Cash 400、Cr Electricity 400。貸方に2回で、貸方が $800 多い', '正しい: Dr Telephone 400 / Cr Cash 400', '電気代の貸方 $400 を取り消す → Dr Electricity 400', '抜けている通信費を記録する → Dr Telephone 400', '借方は合計 $800。反対側は仮勘定 → Cr Suspense 800'],
            answer: 'Dr Telephone $400 / Dr Electricity $400 / Cr Suspense $800'
          },
          note: { kind: 'warn', text: '取り違えや原則の誤りにも仮勘定を使ってしまう間違いが多い。左右がそろった誤りに仮勘定は関係ない。使うと、かえって残高が0にならなくなる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仮勘定を使うのは、試算表の合計をずらした誤りだけ', '直す側の勘定を先に書き、反対側を仮勘定にする', '最後に仮勘定の T勘定を作り、残高が0になるか確かめる']
        },
        {
          title: '英単語',
          words: [
            ['clear', 'クリア', '（仮勘定を）解消する、0にする'],
            ['post', 'ポスト', '転記する'],
            ['not posted', 'ノット ポスティッド', '転記されていない'],
            ['undercast / overcast', 'アンダーキャスト / オーバーキャスト', '合計を少なく／多く計算した'],
            ['debit balance / credit balance', '', '借方残高 / 貸方残高'],
            ['remaining balance', '', '残りの残高']
          ]
        }
      ],
      quiz: [
        { q: 'A cash payment of $650 for electricity was correctly entered in the cash account but was not posted to the electricity account. Which journal entry corrects this error?', choices: ['Dr Electricity $650, Cr Suspense $650', 'Dr Suspense $650, Cr Electricity $650', 'Dr Electricity $650, Cr Cash $650', 'No suspense entry is needed because the cash entry is correct'], answer: 0, explain: '貸方（Cash）は記録済みで、借方の電気代が足りない。電気代を借方に書き、反対側は仮勘定。Cr Cash にすると現金を二重に減らす。片側だけの誤りなので、仮勘定は必要。' },
        { q: 'Which of the following errors would require an entry to the suspense account to correct it?', choices: ['A purchase invoice of $500 was omitted from the records', 'Telephone expenses of $300 were debited to the rent account', 'The sales account was undercast by $500', 'Repairs of $700 were debited to the plant account'], answer: 2, explain: '合計の誤りは貸方の合計だけを少なくするので、仮勘定が必要（Dr Suspense $500 / Cr Sales $500）。記帳漏れ・取り違え・原則の誤りは左右がそろっているので、仮勘定は使わない。' },
        { q: 'A suspense account has a debit balance of $1,240. The following errors are found: (1) Electricity of $650 paid in cash was not posted to the electricity account. (2) A credit sale of $420 was correctly credited to sales but was debited to trade receivables as $240. After correcting these errors, what is the remaining balance on the suspense account?', type: 'number', answer: 410, unit: '$', explain: '(1) Dr Electricity 650 / Cr Suspense 650。(2) 売掛金が $420 − $240 ＝ $180 足りないので Dr Trade receivables 180 / Cr Suspense 180。仮勘定は $1,240 − $650 − $180 ＝ $410 の借方残高が残る。まだ見つかっていない誤りがある。' },
        { q: '試算表の合計が借方 $52,700、貸方 $53,180 だった。仮勘定の最初の残高は？', choices: ['借方 $480', '貸方 $480', '借方 $960', '貸方 $960'], answer: 0, explain: '$53,180 − $52,700 ＝ $480 で、借方が足りない。足りない側の借方に $480。$960 は差を2倍にしてしまった間違い。' },
        { q: '受けた割引（discounts received）$90 を、買掛金には正しく記録したが、割引の勘定には記録しなかった。訂正仕訳は？', choices: ['Dr Suspense $90 / Cr Discounts received $90', 'Dr Discounts received $90 / Cr Suspense $90', 'Dr Trade payables $90 / Cr Discounts received $90', 'Dr Suspense $180 / Cr Discounts received $180'], answer: 0, explain: '正しくは Dr Trade payables / Cr Discounts received。買掛金の借方は記録済みで、貸方の割引が足りない。割引を貸方に書き、反対側は仮勘定。Dr Trade payables をもう一度書くと買掛金を二重に減らす。' },
        { q: 'Rent of $500 paid in cash was correctly credited to the cash account but was also credited to the rent account. Which journal entry corrects the error?', choices: ['Dr Rent $500, Cr Suspense $500', 'Dr Rent $1,000, Cr Suspense $1,000', 'Dr Suspense $1,000, Cr Rent $1,000', 'Dr Rent $500, Cr Cash $500'], answer: 1, explain: '家賃は Dr 500 のはずが Cr 500 になっている。−$500 から ＋$500 へ動かすので $1,000。貸方に2回で貸方が $1,000 多いので、反対側は Cr Suspense $1,000。$500 ではゼロに戻るだけ。Cr Cash を書くと現金を二重に減らす。' }
      ]
    },
    {
      id: 'L94',
      no: 94,
      title: '誤謬が利益と財政状態に与える影響',
      goal: '誤りを直すと、利益と財政状態計算書の金額がどう変わるかを計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['F2(d)'],
      slides: [
        {
          title: '冷蔵庫を食費に書いていたら',
          paras: ['家計簿で、10万円の冷蔵庫を「食費」に書いていた。今月の出費が10万円多く見えて、赤字に見える。', '本当は、冷蔵庫は何年も使う持ち物。正しく直すと、今月の出費は10万円減り、持ち物は10万円増える。誤りを直すと、「動画」（損益計算書）と「写真」（財政状態計算書）の両方の数字が変わる。']
        },
        {
          title: '利益が変わるかの見分け方',
          paras: ['訂正仕訳に、収益か費用の勘定が入っているかを見る。'],
          table: {
            head: ['訂正仕訳に入る勘定', '利益'],
            rows: [
              ['Dr 費用（費用が増える）', '減る'],
              ['Cr 費用（費用が減る）', '増える'],
              ['Dr 収益（収益が減る）', '減る'],
              ['Cr 収益（収益が増える）', '増える'],
              ['両側とも資産・負債・資本・仮勘定', '変わらない']
            ]
          }
        },
        {
          title: '財政状態計算書への影響',
          paras: ['訂正仕訳のもう片側を見ると、どの資産・負債が変わるかが分かる。修理代の誤りなら Dr Repairs expense・Cr PPE で、利益が減り、PPE も同じだけ減る。', '利益は資本（個人事業なら capital、会社なら利益剰余金）に入る。利益が $800 減れば資本も $800 減り、資産＝資本＋負債はそろったまま。']
        },
        {
          title: '例題の6つの誤り',
          paras: ['たこ焼き屋の下書きの利益は $24,000。決算の見直しで、次の誤りが見つかった。3〜6 は前のレッスンの仮勘定の例と同じ。'],
          numbered: ['修理代 $800 を機械（PPE）に記録し、それに減価償却費 $80 も計上していた', '期末在庫を $1,500 多く数えていた', '家賃の勘定に $270 多く記録していた', '仕入の勘定を $200 少なく合計していた', '電気代 $200 を通信費の勘定に記録していた', '顧客からの入金 $380 を、売掛金に記録していなかった']
        },
        {
          title: '例題: 訂正後の利益を計算する',
          example: {
            problem: '前のスライドの6つの誤りを直すと、利益はいくらになる？ 下書きの利益は $24,000。',
            steps: ['(1) 修理代を費用にする → −$800。その減価償却費 $80 を取り消す → ＋$80', '(2) 期末在庫が減ると売上原価が増える → −$1,500', '(3) 家賃の費用が減る → ＋$270', '(4) 仕入の費用が増える → −$200', '(5) 費用どうしの移動 → 影響なし', '(6) 売掛金と仮勘定の間の訂正 → 影響なし', '$24,000 − $800 ＋ $80 − $1,500 ＋ $270 − $200 ＝ $21,850'],
            answer: '訂正後の利益は $21,850'
          }
        },
        {
          title: '利益の調整表',
          table: {
            caption: '試験ではこの形で計算する（かっこはマイナス）',
            head: ['項目', '$'],
            rows: [
              ['下書きの利益', '24,000'],
              ['(1) 修理代を費用にする', '(800)'],
              ['(1) 修理代の減価償却を取り消す', '80'],
              ['(2) 期末在庫の過大', '(1,500)'],
              ['(3) 家賃の過大', '270'],
              ['(4) 仕入の不足', '(200)'],
              ['(5)(6) 影響なし', '0']
            ],
            total: ['訂正後の利益', '21,850']
          }
        },
        {
          title: '同じ例の財政状態計算書',
          list: ['PPE: 原価 −$800、減価償却累計額 −$80 → 帳簿価額 −$720', '在庫: −$1,500', '売掛金: −$380', '仮勘定: 貸方にあった $450 が消えて0', '資本（今年の利益）: −$2,150（$24,000 → $21,850）'],
          after: '確かめ算: 左の資産は $720 ＋ $1,500 ＋ $380 ＝ $2,600 減る。右は資本 $2,150 と仮勘定 $450 で、合わせて $2,600 減る。左右はそろったまま。'
        },
        {
          title: '在庫の誤りは翌年にも響く',
          paras: ['今年の期末在庫は、そのまま翌年の期首在庫になる。', '今年の期末在庫を $1,500 多く数えると、今年の売上原価が $1,500 少なくなり、今年の利益は $1,500 多すぎる。翌年は期首在庫が $1,500 多いので売上原価が増え、翌年の利益は $1,500 少なすぎる。2年の合計では打ち消し合う。']
        },
        {
          title: 'なぜ？ 利益と財政状態は一緒に動く',
          paras: ['利益は、1年間で資本がどれだけ増えたかを表す。だから費用や収益の誤りを直すと資本も同じだけ変わり、資産か負債のどれかも動く。', '一方、売掛金と仮勘定のように財政状態計算書の中だけで動く訂正は、利益を変えない。'],
          note: { kind: 'warn', text: '費用を減らす訂正（Cr 費用）は利益を増やす。符号を逆にしやすい。また、電気代と通信費のような費用どうしの取り違えは、利益を変えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['訂正仕訳に収益・費用があれば利益が変わる。資産・負債・仮勘定だけなら変わらない', 'Dr 費用・Dr 収益は利益を減らし、Cr 費用・Cr 収益は利益を増やす', '期末在庫の過大は、今年の利益を多く、翌年の利益を少なくする']
        },
        {
          title: '英単語',
          words: [
            ['draft profit', 'ドラフト プロフィット', '下書きの利益（訂正前）'],
            ['corrected / adjusted profit', '', '訂正後の利益'],
            ['overstated / understated', 'オーバーステイティッド / アンダーステイティッド', '多すぎる / 少なすぎる'],
            ['net assets', 'ネット アセッツ', '純資産（資産 − 負債）'],
            ['closing inventory / opening inventory', '', '期末在庫 / 期首在庫'],
            ['carrying amount', 'キャリング アマウント', '帳簿価額']
          ]
        }
      ],
      quiz: [
        { q: 'A business has a draft profit of $45,600. The following errors are found: (1) Closing inventory was understated by $2,300. (2) Repairs of $1,800 were debited to the machinery account. No depreciation was charged on them. (3) Cash of $600 received from a customer was credited to the sales account. What is the corrected profit?', type: 'number', answer: 45500, unit: '$', explain: '(1) 期末在庫が増えると売上原価が減る → ＋$2,300。(2) 修理費を費用にする → −$1,800。(3) Dr Sales / Cr Trade receivables で売上が減る → −$600。$45,600 ＋ $2,300 − $1,800 − $600 ＝ $45,500。' },
        { q: 'Which of the following error corrections has no effect on profit?', choices: ['Dr Trade receivables, Cr Suspense', 'Dr Repairs expense, Cr Plant and equipment', 'Dr Suspense, Cr Sales', 'Dr Rent expense, Cr Suspense'], answer: 0, explain: '売掛金も仮勘定も財政状態計算書の中の項目なので、利益は変わらない。修理費・家賃（費用）の借方は利益を減らし、売上（収益）の貸方は利益を増やす。' },
        { q: 'Closing inventory at 31 December 20X5 was overstated by $1,000. Closing inventory at 31 December 20X6 was correct. What was the effect on reported profit?', choices: ['20X5 overstated by $1,000; 20X6 understated by $1,000', '20X5 understated by $1,000; 20X6 overstated by $1,000', '20X5 overstated by $1,000; 20X6 not affected', '20X5 overstated by $2,000; 20X6 not affected'], answer: 0, explain: '20X5 は売上原価が少なすぎて利益が多すぎる。その在庫が 20X6 の期首在庫になるので、20X6 は売上原価が多すぎて利益が少なすぎる。翌年への影響を忘れやすい。' },
        { q: '修理費 $800 を有形固定資産（PPE）に記録していた（減価償却は計上していない）。訂正すると、利益と純資産はどうなる？', choices: ['利益も純資産も $800 減る', '利益は $800 減り、純資産は変わらない', '利益は変わらず、純資産が $800 減る', '利益も純資産も $800 増える'], answer: 0, explain: 'Dr Repairs expense / Cr PPE。費用が増えて利益が $800 減り、資産の PPE も $800 減る。利益が減れば資本も減るので、純資産も同じだけ減る。' },
        { q: '電気代 $300 を通信費の勘定に記録していた。訂正すると利益はどうなる？', choices: ['$300 増える', '$300 減る', '$600 減る', '変わらない'], answer: 3, explain: 'Dr Electricity / Cr Telephone で、費用の中で移るだけ。費用の合計は同じなので、利益は変わらない。' }
      ]
    }
  ],
  cards: [
    { id: 'L89-1', lesson: 'L89', q: 'error of omission とは？', a: '取引を、借方も貸方もまったく記録しないこと' },
    { id: 'L89-2', lesson: 'L89', q: 'error of commission とは？', a: '正しい金額で、同じ種類の別の勘定に記録すること（電気代を通信費に）' },
    { id: 'L89-3', lesson: 'L89', q: 'error of principle とは？', a: '種類の違う勘定に記録すること（修理費を固定資産に、引出しを費用に）' },
    { id: 'L89-4', lesson: 'L89', q: 'error of original entry とは？', a: '最初の段階で金額を間違え、両側とも同じ間違った金額で記録すること' },
    { id: 'L89-5', lesson: 'L89', q: 'compensating errors とは？', a: '2つ以上の誤りが、金額で打ち消し合うこと' },
    { id: 'L89-6', lesson: 'L89', q: '会計ソフトでほとんど起きない誤りは？', a: '片側だけの記入や合計の誤り。ソフトが左右の一致と合計を確かめるから' },
    { id: 'L90-1', lesson: 'L90', q: '試算表が確かめていることは？', a: '借方の合計と貸方の合計が同じかどうか、だけ' },
    { id: 'L90-2', lesson: 'L90', q: '試算表で見つからない6つの誤りは？', a: '記帳漏れ・勘定の取り違え・原則・原始記入・逆記入・相殺' },
    { id: 'L90-3', lesson: 'L90', q: '同じ側に2回記入したときの差額は？', a: '金額の2倍' },
    { id: 'L90-4', lesson: 'L90', q: '片側だけの転置（数字の入れ替わり）の特徴は？', a: '試算表の差額が9で割り切れる' },
    { id: 'L90-5', lesson: 'L90', q: '記帳漏れと「残高の写し忘れ」の違いは？', a: '記帳漏れは両側なしで試算表は合う。写し忘れは片側だけ抜けて合わない' },
    { id: 'L90-6', lesson: 'L90', q: 'なぜ合っている試算表でも正しいとは限らない？', a: '左右が同じ金額のまま勘定や金額を間違える誤りは、見抜けないから' },
    { id: 'L91-1', lesson: 'L91', q: '訂正仕訳の3ステップは？', a: '実際の仕訳を書く → 正しい仕訳を書く → その差を仕訳にする' },
    { id: 'L91-2', lesson: 'L91', q: '逆記入の直し方は？', a: '正しい向きで、元の金額の2倍を記録する' },
    { id: 'L91-3', lesson: 'L91', q: '修理費 $800 を PPE に記録した。訂正仕訳は？', a: 'Dr Repairs expense 800 / Cr PPE 800' },
    { id: 'L91-4', lesson: 'L91', q: '$1,250 の売上を両側 $1,520 で記録した。訂正仕訳は？', a: 'Dr Sales 270 / Cr Trade receivables 270（差額だけ取り消す）' },
    { id: 'L91-5', lesson: 'L91', q: 'なぜ誤りを消さずに訂正仕訳を足す？', a: '何をいつ誰が直したかの跡（audit trail）を残し、不正を防ぐため' },
    { id: 'L91-6', lesson: 'L91', q: '手入力の仕訳（manual journal）に必要なものは？', a: '日付、借方と貸方の勘定と金額、説明文（narrative）、承認' },
    { id: 'L92-1', lesson: 'L92', q: '仮勘定（suspense account）とは？', a: '行き先が決まるまで、金額を一時的に置く勘定' },
    { id: 'L92-2', lesson: 'L92', q: '仮勘定を使う2つの場面は？', a: '試算表の合計が合わないとき／記録する勘定が分からないとき' },
    { id: 'L92-3', lesson: 'L92', q: '試算表が Dr $100,500・Cr $100,000。仮勘定は？', a: '貸方に $500（足りない側に足す）' },
    { id: 'L92-4', lesson: 'L92', q: 'なぜ仮勘定を使う？', a: '誤りを探すあいだも決算を進め、未発見の誤りの金額を見えるようにするため' },
    { id: 'L92-5', lesson: 'L92', q: '仮勘定は財務諸表に載せてよい？', a: '載せない。最後は必ず0にする' },
    { id: 'L92-6', lesson: 'L92', q: '仮勘定を生まない誤りの例は？', a: '記帳漏れ・勘定の取り違え・原則の誤りなど、左右がそろった誤り' },
    { id: 'L93-1', lesson: 'L93', q: '訂正仕訳で仮勘定を使うのはいつ？', a: 'その誤りが試算表の合計をずらしていたときだけ' },
    { id: 'L93-2', lesson: 'L93', q: '入金 $380 を現金だけに記録し、売掛金は未記録。訂正仕訳は？', a: 'Dr Suspense 380 / Cr Trade receivables 380' },
    { id: 'L93-3', lesson: 'L93', q: '仕入の勘定が $200 undercast。訂正仕訳は？', a: 'Dr Purchases 200 / Cr Suspense 200' },
    { id: 'L93-4', lesson: 'L93', q: '保険料の残高 $400 を試算表に写し忘れた。仕訳は？', a: 'Dr Insurance 400 / Cr Suspense 400' },
    { id: 'L93-5', lesson: 'L93', q: '仮勘定の訂正仕訳を書く順番は？', a: '先に直す側の勘定と向きを決め、反対側を仮勘定にする' },
    { id: 'L93-6', lesson: 'L93', q: '仮勘定が解消できたかの確かめ方は？', a: 'T勘定の借方と貸方の合計が同じ（残高0）になること' },
    { id: 'L93-7', lesson: 'L93', q: '通信費 $400 を電気代の貸方に記録（現金は正しい）。訂正仕訳は？', a: 'Dr Telephone 400 / Dr Electricity 400 / Cr Suspense 800' },
    { id: 'L94-1', lesson: 'L94', q: '誤りの訂正で利益が変わるのはどんなとき？', a: '訂正仕訳に収益か費用の勘定が入っているとき' },
    { id: 'L94-2', lesson: 'L94', q: 'Cr 費用の訂正は、利益をどう変える？', a: '増やす（費用が減るから）' },
    { id: 'L94-3', lesson: 'L94', q: '期末在庫を多く数えると、今年と翌年の利益は？', a: '今年は多すぎ、翌年は少なすぎ（同じ額）' },
    { id: 'L94-4', lesson: 'L94', q: '修理費 $800 を PPE にしていた。訂正の影響は？', a: '利益 −$800、PPE −$800、純資産も −$800' },
    { id: 'L94-5', lesson: 'L94', q: '売掛金と仮勘定の間の訂正は、利益に影響する？', a: 'しない。財政状態計算書の中だけで動く' },
    { id: 'L94-6', lesson: 'L94', q: '訂正後の利益の求め方は？', a: '下書きの利益に、各訂正の増減を足し引きする' }
  ]
});
