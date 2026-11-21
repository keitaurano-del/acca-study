(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 107,
  part: 3,
  partTitle: '材料費・労務費・製造間接費',
  lessons: [
    {
      id: 'M025',
      no: 25,
      title: '材料の管理サイクル: 発注・受入・保管・払出',
      goal: '材料を注文してから製造に渡すまでの4つの段階と、各段階の書類・承認のしくみを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(i)', 'K2:A1(g)'],
      slides: [
        {
          title: 'コンビニの棚が空にならないしくみ',
          paras: ['コンビニのおにぎりの棚は、ほとんど空にならない。店長が必要な数を注文し、届いたら数を確かめ、バックヤードにしまい、売り場に出す。', 'この流れが崩れると、頼んでいない品が届いたり、届いた数と払うお金が合わなかったりする。工場の材料も、同じ流れで管理する。']
        },
        {
          title: '材料の管理サイクル（material control cycle）',
          paras: ['発注（ordering）→ 受入（receiving）→ 保管（storing）→ 払出（issuing）の4段階。どの段階にも書類と承認がある。'],
          svg: `<svg viewBox="0 0 440 336" role="img" aria-label="材料の管理サイクルの4段階と各段階の書類" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">4つの段階と書類</text><rect x="20" y="48" width="120" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="70" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">発注</text><text x="80" y="86" text-anchor="middle" font-size="12.5" fill="var(--quiet)">ordering</text><text x="156" y="68" fill="var(--ink)">購買依頼書 → 注文書（PO）</text><text x="156" y="88" font-size="12.5" fill="var(--quiet)">purchase requisition → purchase order</text><line x1="80" y1="94" x2="80" y2="106" stroke="var(--ink)" stroke-width="1.5"/><polygon points="74,104 80,113 86,104" fill="var(--ink)"/><rect x="20" y="114" width="120" height="46" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="80" y="136" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">受入</text><text x="80" y="152" text-anchor="middle" font-size="12.5" fill="var(--quiet)">receiving</text><text x="156" y="134" fill="var(--ink)">納品書と照合 → 受入報告書</text><text x="156" y="154" font-size="12.5" fill="var(--quiet)">delivery note → goods received note</text><line x1="80" y1="160" x2="80" y2="172" stroke="var(--ink)" stroke-width="1.5"/><polygon points="74,170 80,179 86,170" fill="var(--ink)"/><rect x="20" y="180" width="120" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="202" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">保管</text><text x="80" y="218" text-anchor="middle" font-size="12.5" fill="var(--quiet)">storing</text><text x="156" y="200" fill="var(--ink)">在庫カードと材料元帳に記録</text><text x="156" y="220" font-size="12.5" fill="var(--quiet)">bin card / stores ledger account</text><line x1="80" y1="226" x2="80" y2="238" stroke="var(--ink)" stroke-width="1.5"/><polygon points="74,236 80,245 86,236" fill="var(--ink)"/><rect x="20" y="246" width="120" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="268" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">払出</text><text x="80" y="284" text-anchor="middle" font-size="12.5" fill="var(--quiet)">issuing</text><text x="156" y="266" fill="var(--ink)">材料出庫票で払い出す</text><text x="156" y="286" font-size="12.5" fill="var(--quiet)">materials requisition note</text><text x="220" y="322" text-anchor="middle" fill="var(--ink)">請求書は、注文書と受入報告書と照合して払う</text></svg>`,
          caption: '試験では「この場面で使う書類はどれか」がよく問われる。'
        },
        {
          title: '発注と受入の書類',
          list: ['購買依頼書（purchase requisition）: 倉庫係や部門長が「これを買ってほしい」と購買部に頼む社内の書類', '注文書（purchase order, PO）: 購買部が仕入先を選び、品名・数量・価格を書いて仕入先に送る。権限のある人が承認する', '納品書（delivery note）: 仕入先が品物と一緒に送ってくる', '受入報告書（goods received note, GRN）: 倉庫が、届いた数と状態を確かめて作る社内の書類']
        },
        {
          title: '払う前に3つを照合する',
          paras: ['請求書（purchase invoice）が届いても、すぐには払わない。注文書で「頼んだ品と価格か」、受入報告書で「本当に届いた数か」を確かめる。', '3つが一致して初めて支払いを承認する。これを3点照合（three-way match、レッスン6）という。傷んだ品を仕入先に返すときは、返品票（goods returned note）を作る。'],
          formula: '請求書 ⇔ 注文書 ⇔ 受入報告書 が一致したら支払う'
        },
        {
          title: '保管と払出の書類',
          list: ['在庫カード（bin card）: 倉庫の棚ごとに置き、受入・払出・残りの「数量」だけを記録する', '材料元帳（stores ledger account、stores ledger card とも）: 経理が材料ごとに「数量・単価・金額」を記録する', '材料出庫票（materials requisition note）: 製造部門が倉庫に材料を請求する。使う製品や部門のコードを書き、責任者が承認する', '材料戻入票（materials returned note）: 使わなかった材料を倉庫に戻す', '材料振替票（materials transfer note）: 材料を別のジョブに移す']
        },
        {
          title: '実物と帳簿を合わせる',
          paras: ['受入・払出のたびに残りを更新し続ける記録のしかたを、継続記録法（perpetual inventory system）という。', '帳簿の残りと実物が合っているかは、実際に数えて確かめる（実地棚卸、stocktaking）。年に1回まとめて数える periodic stocktaking と、毎日少しずつ品目を変えて数え、1年で全品目を数える continuous stocktaking がある。差があれば原因を調べる。']
        },
        {
          title: 'なぜ？ 書類と承認がこんなに多い理由',
          paras: ['材料はお金と同じ価値がある。1人で注文も受取も支払もできると、架空の注文や持ち出しを隠せる。だから、注文する人・受け取る人・支払いを承認する人を分ける（職務の分離、segregation of duties）。', '書類には通し番号をつけて抜けを見つけやすくする。材料出庫票のコードで、どの製品・部門の原価かを分析できる。承認・記録・分析の3つを、書類がつないでいる。']
        },
        {
          title: '売上の取引も同じ考え方',
          paras: ['売上の側にも同じしくみがある。顧客の注文を受けたら、信用限度（credit limit）を確かめて受注を承認する。出荷のときに出荷票（despatch note）を作り、それをもとに請求書（sales invoice）を出す。', '原価でも売上でも「承認してから動かす」「書類で記録する」「コードで集計して分析する」を守る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '納品書（delivery note）と受入報告書（GRN）を混同しない。納品書は仕入先が作り、GRN は自社の倉庫が確かめて作る。購買依頼書（社内で購買部に頼む）と注文書（仕入先に送る）、購買依頼書（purchase requisition）と材料出庫票（materials requisition note）も別もの。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['発注・受入・保管・払出の4段階。どれにも書類と承認がある', '請求書は注文書と受入報告書と照合してから払う（3点照合）', '在庫カードは数量だけ、材料元帳は数量と金額。実地棚卸で実物と照合する']
        },
        {
          title: '英単語',
          words: [
            ['material control cycle', '', '材料の管理サイクル'],
            ['purchase requisition', 'パーチェス リクイジション', '購買依頼書（社内）'],
            ['purchase order (PO)', 'パーチェス オーダー', '注文書（仕入先へ）'],
            ['delivery note', 'デリバリー ノート', '納品書（仕入先が作る）'],
            ['goods received note (GRN)', '', '受入報告書（自社の倉庫が作る）'],
            ['bin card / stores ledger account', 'ビン カード', '在庫カード（数量）/ 材料元帳（数量と金額）'],
            ['materials requisition note', '', '材料出庫票'],
            ['segregation of duties', 'セグリゲーション', '職務の分離']
          ]
        }
      ],
      quiz: [
        { q: '材料を買うときの書類の順番として正しいのは？', choices: ['注文書 → 購買依頼書 → 請求書の照合 → 受入報告書', '購買依頼書 → 受入報告書 → 注文書 → 請求書の照合', '購買依頼書 → 注文書 → 受入報告書 → 請求書の照合', '材料出庫票 → 注文書 → 納品書 → 購買依頼書'], answer: 2, explain: '社内で頼み（購買依頼書）、仕入先に注文し（注文書）、届いたら確かめ（受入報告書）、最後に請求書を2つと照合して払う。材料出庫票は製造部門が倉庫から材料をもらう書類で、購入の流れには入らない。' },
        { q: 'Which document is prepared by the stores department to record the quantity and condition of materials received from a supplier?', choices: ['Delivery note', 'Goods received note', 'Purchase order', 'Materials requisition note'], answer: 1, explain: 'GRN は自社の倉庫が作る。delivery note は仕入先が品物と一緒に送ってくる書類なので、作る人がちがう。purchase order は注文、materials requisition note は製造部門への払出に使う。' },
        { q: 'Before a supplier\'s invoice is approved for payment, it should be matched with which TWO documents?', choices: ['Purchase requisition and delivery note', 'Materials requisition note and bin card', 'Purchase order and materials requisition note', 'Purchase order and goods received note'], answer: 3, explain: '注文書で頼んだ品と価格を、GRN で実際に届いた数を確かめる（3点照合）。purchase requisition は社内の依頼にすぎず、価格の約束ではない。' },
        { q: '製造部門が、ジョブ No.15 に使う材料を倉庫から受け取るときに使う書類は？', choices: ['購買依頼書（purchase requisition）', '材料出庫票（materials requisition note）', '受入報告書（goods received note）', '材料戻入票（materials returned note）'], answer: 1, explain: '倉庫から材料をもらうのは材料出庫票。ジョブ No.15 のコードを書くので、その材料費をジョブ No.15 の原価にできる。購買依頼書は「買ってほしい」と購買部に頼む書類で、名前が似ているので混同しやすい。' },
        { q: '在庫カード（bin card）に記録されるのは？', choices: ['数量と金額', '金額だけ', '受入・払出・残りの数量だけ', '仕入先の名前と請求額'], answer: 2, explain: '在庫カードは倉庫の棚で数量だけを記録する。数量と金額の両方を記録するのは、経理の材料元帳（stores ledger account）。' },
        { q: '材料の購入で不正を防ぐしくみとして、最も適切なのは？', choices: ['注文する人・受け取る人・支払いを承認する人を分ける', '責任をはっきりさせるため、1人に注文から支払いまで任せる', '手間を減らすため、書類の通し番号をやめる', '実地棚卸は不正が見つかったときだけ行う'], answer: 0, explain: '職務の分離（segregation of duties）。1人に全部任せると、架空の注文や持ち出しを1人で隠せてしまう。通し番号は抜けを見つけるためにあり、実地棚卸は定期的に行う。' }
      ]
    },
    {
      id: 'M026',
      no: 26,
      title: '材料費の仕訳',
      goal: '材料の購入・払出・戻し・返品の仕訳を書き、材料勘定の残高を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(ii)'],
      slides: [
        {
          title: '冷蔵庫を通ってから料理になる',
          paras: ['スーパーで買った食材は、まず冷蔵庫に入る。この時点では、まだ「今日の夕食の費用」ではない。', '夕食に使った分だけが夕食の材料費になる。お弁当に使った分はお弁当の材料費。原価計算の材料も同じで、買ったらいったん材料の在庫に入れ、使った時に使い道へ移す。']
        },
        {
          title: 'K1 の仕入と何がちがう？',
          paras: ['K1 の財務会計では、買った商品は仕入（Purchases）という費用に記録し、期末に在庫を調整した。', '原価計算では、材料を買ったらまず材料勘定（material inventory account、stores account ともいう）という資産の勘定に入れる。払い出したときに、使い道の勘定へ移す。どの製品にいくら材料を使ったかを追うためで、残高は倉庫にあるはずの材料の金額になる。']
        },
        {
          title: '材料費の流れ',
          svg: `<svg viewBox="0 0 440 284" role="img" aria-label="材料から仕掛品、製品、売上原価への流れと、間接材料が製造間接費を通る流れ" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">材料費の流れ</text><rect x="20" y="48" width="110" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="72" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">材料</text><text x="75" y="92" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Materials</text><rect x="165" y="48" width="110" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="72" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">仕掛品</text><text x="220" y="92" text-anchor="middle" font-size="12.5" fill="var(--quiet)">WIP</text><rect x="310" y="48" width="110" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="72" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">製品</text><text x="365" y="92" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Finished goods</text><line x1="130" y1="76" x2="156" y2="76" stroke="var(--ink)" stroke-width="1.5"/><polygon points="155,70 165,76 155,82" fill="var(--ink)"/><line x1="275" y1="76" x2="301" y2="76" stroke="var(--ink)" stroke-width="1.5"/><polygon points="300,70 310,76 300,82" fill="var(--ink)"/><rect x="20" y="150" width="140" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="174" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">製造間接費</text><text x="90" y="194" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Production overhead</text><line x1="75" y1="104" x2="75" y2="141" stroke="var(--ink)" stroke-width="1.5"/><polygon points="69,140 75,150 81,140" fill="var(--ink)"/><text x="84" y="132" fill="var(--ink)">間接材料</text><polyline points="160,178 220,178 220,114" fill="none" stroke="var(--ink)" stroke-width="1.5"/><polygon points="214,114 220,104 226,114" fill="var(--ink)"/><text x="228" y="150" fill="var(--ink)">配賦</text><rect x="310" y="150" width="110" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="174" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">売上原価</text><text x="365" y="194" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Cost of sales</text><line x1="365" y1="104" x2="365" y2="141" stroke="var(--ink)" stroke-width="1.5"/><polygon points="359,140 365,150 371,140" fill="var(--ink)"/><text x="356" y="132" text-anchor="end" fill="var(--ink)">売れたら</text><text x="220" y="242" text-anchor="middle" fill="var(--ink)">直接材料は仕掛品へ、間接材料は製造間接費へ</text><text x="220" y="266" text-anchor="middle" fill="var(--ink)">製造間接費は、あとで仕掛品に配賦する</text></svg>`,
          caption: '製品が完成したら仕掛品から製品へ、売れたら製品から売上原価へ移る。'
        },
        {
          title: '材料の取引と仕訳',
          table: { caption: '材料の取引と仕訳', head: ['取引', 'Dr（借方）', 'Cr（貸方）'], rows: [['掛けで購入', 'Material inventory', 'Trade payables'], ['現金で購入', 'Material inventory', 'Cash'], ['直接材料の払出', 'Work in progress', 'Material inventory'], ['間接材料の払出', 'Production overhead', 'Material inventory'], ['製造から倉庫へ戻す', 'Material inventory', 'Work in progress'], ['仕入先へ返品', 'Trade payables', 'Material inventory']] }
        },
        {
          title: 'なぜ？ 直接と間接で行き先が違う理由',
          paras: ['直接材料（direct materials）は、どの製品に使ったかが材料出庫票のコードで分かる。だから仕掛品（work in progress）に直接入れる。', '間接材料（indirect materials）は、機械の油や清掃用品のように、どの製品の分かを測れない。そこで製造間接費にいったん集め、あとで決めた基準で製品に配賦（absorb）する。', '材料がいつも材料勘定を通るので、帳簿の残高と倉庫の実物を比べられる。']
        },
        {
          title: '例題: 材料勘定の残高',
          example: {
            problem: 'ある工場の1月の材料の取引。期首残高 $4,000、掛けで購入 $20,000、直接材料の払出 $15,000、間接材料の払出 $2,000、使わなかった直接材料を製造部門から倉庫へ戻した $500、仕入先への返品 $800。1月末の材料勘定の残高と、仕掛品に入る材料費は？',
            steps: ['借方（増える）: 期首 $4,000 ＋ 購入 $20,000 ＋ 戻し $500 ＝ $24,500', '貸方（減る）: 直接 $15,000 ＋ 間接 $2,000 ＋ 返品 $800 ＝ $17,800', '期末残高: $24,500 − $17,800 ＝ $6,700', '仕掛品に入る材料費: 直接材料の払出 $15,000 − 戻し $500 ＝ $14,500', '間接材料 $2,000 は仕掛品ではなく製造間接費へ'],
            answer: '期末残高 $6,700。仕掛品の材料費は差し引き $14,500（間接材料 $2,000 は製造間接費）'
          }
        },
        {
          title: '材料勘定にまとめると',
          paras: ['借方（左）が増える取引、貸方（右）が減る取引。合計はどちらも $24,500 になる。'],
          tAccount: { name: 'Material inventory', debit: [['Balance b/d', '4,000'], ['Trade payables', '20,000'], ['Work in progress（戻し）', '500']], credit: [['Work in progress', '15,000'], ['Production overhead', '2,000'], ['Trade payables（返品）', '800']], balance: { side: 'credit', label: 'Balance c/d', amount: '6,700' } }
        },
        {
          title: '数が合わないとき',
          paras: ['実地棚卸で、実物が帳簿より少ないことがある。保管中の目減りや破損など、通常の範囲の減耗は、製造にかかる費用として製造間接費に入れる。たとえば $150 足りなかったら次の仕訳になる。', '火事や盗難のような、ふだん起きない大きな損失（abnormal loss）は製品の原価に入れず、損益計算書の費用（Dr Statement of profit or loss）にする。'],
          journal: [
            { side: 'Dr', account: 'Production overhead（製造間接費）', amount: '150' },
            { side: 'Cr', account: 'Material inventory（材料）', amount: '150' }
          ]
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '払出は材料勘定の貸方（Cr Material inventory）。資産の材料が減るから。借方は、直接材料なら Work in progress、間接材料なら Production overhead で、取り違えやすい。倉庫への戻しは払出の逆、仕入先への返品は購入の逆になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['材料は買ったらまず Dr Material inventory', '直接材料の払出は Dr Work in progress、間接材料は Dr Production overhead。どちらも Cr Material inventory', '期末残高 ＝ 期首 ＋ 購入 ＋ 戻し − 払出 − 返品']
        },
        {
          title: '英単語',
          words: [
            ['material inventory account', '', '材料勘定（stores account とも）'],
            ['work in progress (WIP)', 'ワーク イン プログレス', '仕掛品'],
            ['production overhead control account', '', '製造間接費勘定'],
            ['direct materials / indirect materials', '', '直接材料 / 間接材料'],
            ['returns to stores', '', '製造部門から倉庫への戻し'],
            ['finished goods', 'フィニッシュト グッズ', '製品'],
            ['issue', 'イシュー', '払出（倉庫から材料を出すこと）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is the correct entry for the issue of indirect materials to production?', choices: ['Dr Work in progress, Cr Material inventory', 'Dr Cost of sales, Cr Material inventory', 'Dr Production overhead control, Cr Material inventory', 'Dr Material inventory, Cr Production overhead control'], answer: 2, explain: '間接材料はどの製品の分か測れないので、製造間接費に集める。WIP に借方記入するのは直接材料。Dr Material inventory, Cr Production overhead control は貸借が逆。売上原価に入るのは製品が売れたときで、払出の時点ではない。' },
        { q: 'The material inventory account had an opening balance of $6,000. During the month, materials of $30,000 were purchased on credit, direct materials of $24,000 and indirect materials of $3,500 were issued to production, and direct materials of $1,200 were returned from production to stores. What is the closing balance on the material inventory account?', type: 'number', answer: 9700, unit: '$', explain: '増える: $6,000 ＋ $30,000 ＋ $1,200 ＝ $37,200。減る: $24,000 ＋ $3,500 ＝ $27,500。残高 $37,200 − $27,500 ＝ $9,700。倉庫への戻しを引いてしまうと $7,300 になる。' },
        { q: '直接材料 $8,000 を製造部門に払い出した。仕訳は？', choices: ['Dr Material inventory $8,000 / Cr Work in progress $8,000', 'Dr Work in progress $8,000 / Cr Material inventory $8,000', 'Dr Production overhead $8,000 / Cr Material inventory $8,000', 'Dr Work in progress $8,000 / Cr Trade payables $8,000'], answer: 1, explain: '材料が減り（貸方）、仕掛品が増える（借方）。Dr Material inventory / Cr Work in progress は逆向きで、倉庫への戻しの仕訳。Dr Production overhead は間接材料の仕訳。Cr Trade payables は、倉庫を通さずジョブのために直接買ったときの形で、払出ではない。' },
        { q: '製造部門で使わなかった直接材料 $300 を倉庫に戻した。仕訳は？', choices: ['Dr Work in progress $300 / Cr Material inventory $300', 'Dr Trade payables $300 / Cr Material inventory $300', 'Dr Material inventory $300 / Cr Production overhead $300', 'Dr Material inventory $300 / Cr Work in progress $300'], answer: 3, explain: '戻しは払出の逆。材料が増え（借方）、仕掛品が減る（貸方）。Dr Work in progress / Cr Material inventory は払出そのものの仕訳。Dr Trade payables は仕入先への返品の仕訳で、ここでは材料は社内にとどまっている。直接材料なので Production overhead は使わない。' },
        { q: 'Materials costing $500, which had been bought on credit, were returned to the supplier because they were damaged. Which entry records this return?', choices: ['Dr Material inventory, Cr Trade payables', 'Dr Work in progress, Cr Material inventory', 'Dr Trade payables, Cr Material inventory', 'Dr Material inventory, Cr Work in progress'], answer: 2, explain: '購入の逆。仕入先への借り（買掛金）が減り、材料も減る。Dr Material inventory, Cr Trade payables は掛けでの購入の仕訳。Work in progress を使う2つは社内の払出と戻しで、仕入先への返品ではない。' }
      ]
    },
    {
      id: 'M027',
      no: 27,
      title: '発注費・保管費と安全在庫',
      goal: '在庫にかかる発注費・保管費・在庫切れの費用を区別し、安全在庫を含めた年間の発注費と保管費を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(iii)'],
      slides: [
        {
          title: 'トイレットペーパーをいつ買う？',
          paras: ['毎週少しずつ買うと、そのたびに店へ行く手間がかかる。1年分をまとめて買えば手間は1回だが、置き場所をとり、お金も先に出ていく。', '切らすと本当に困るので、いつも1パックは予備を置いておく。会社の在庫も、この3つの悩みをお金で比べる。']
        },
        {
          title: '在庫にかかる3つの費用',
          list: ['発注費（ordering costs）: 注文1回ごとにかかる。注文の事務、運送費、受入時の検査など。1回の量が多くても少なくても、1回分はほぼ同じ', '保管費（holding costs）: 在庫を持っているあいだかかる。在庫に寝ている資金の利息（機会費用）、倉庫代、保険、劣化・陳腐化・盗難など', '在庫切れの費用（stockout costs）: 売り逃した貢献利益、信用の低下、生産の停止、割高な緊急発注'],
          after: 'これに材料そのものの購入費（purchase costs）が加わる。'
        },
        {
          title: '在庫の量は「のこぎり」の形',
          svg: `<svg viewBox="0 0 440 298" role="img" aria-label="在庫量はQずつ補充され一定のペースで減り、平均在庫は安全在庫にQの半分を足した量" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">在庫の量の動き</text><text x="46" y="60" fill="var(--quiet)">在庫量</text><line x1="40" y1="66" x2="40" y2="230" stroke="var(--ink)" stroke-width="1.5"/><line x1="40" y1="230" x2="330" y2="230" stroke="var(--ink)" stroke-width="1.5"/><polyline points="40,80 130,200 130,80 220,200 220,80 310,200 310,80 330,106.7" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="40" y1="200" x2="330" y2="200" stroke="var(--edge)" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="40" y1="140" x2="330" y2="140" stroke="var(--accent)" stroke-width="2.5"/><line x1="40" y1="80" x2="330" y2="80" stroke="var(--edge)" stroke-width="1" stroke-dasharray="2 4"/><text x="338" y="85" fill="var(--ink)">最大</text><text x="338" y="145" font-weight="600" fill="var(--ink)">平均在庫</text><text x="338" y="205" fill="var(--ink)">安全在庫</text><text x="300" y="130" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">Q</text><text x="330" y="250" text-anchor="end" fill="var(--quiet)">時間</text><text x="220" y="282" text-anchor="middle" font-size="15" fill="var(--ink)">平均在庫 ＝ 安全在庫 ＋ Q ÷ 2</text></svg>`,
          caption: 'Q（1回の発注量）が届くと増え、使うにつれて一定のペースで減る。安全在庫の線まで減ったところで、次の Q が届く。'
        },
        {
          title: '年間の費用の式',
          list: ['年間の発注費 ＝ 年間需要量 ÷ Q × 1回の発注費', '年間の保管費 ＝ 平均在庫 × 1単位あたりの年間保管費', '平均在庫 ＝ 安全在庫 ＋ Q ÷ 2'],
          formula: '年間の在庫コスト ＝ 発注費 ＋ 保管費（＋ 購入費）',
          after: '保管費が「購入価格の◯%」と与えられたら、まず単価にかけて1単位あたりの金額にする。'
        },
        {
          title: 'なぜ？ 平均在庫が Q の半分になる理由',
          paras: ['Q が届いた直後は、安全在庫の上に Q がある。次が届く直前には、安全在庫だけが残る。そのあいだ一定のペースで減るので、Q の部分の平均はちょうど半分。', '安全在庫（buffer inventory、safety inventory）は、需要や納期（lead time）がぶれたときのための予備で、ふだんは手をつけない。だから半分にせず、そのまま平均に足す。多すぎれば保管費、少なすぎれば在庫切れの費用が増える。']
        },
        {
          title: '例題: 年間の発注費と保管費',
          example: {
            problem: '年間需要 12,000 単位。1回に 1,000 単位ずつ発注する。1回の発注費は $50。購入価格は $15 で、保管費は年間で購入価格の 20%。安全在庫を 200 単位持つ。年間の発注費と保管費の合計は？',
            steps: ['1単位の年間保管費: $15 × 20% ＝ $3', '発注回数: 12,000 ÷ 1,000 ＝ 12回', '発注費: 12 × $50 ＝ $600', '平均在庫: 200 ＋ 1,000 ÷ 2 ＝ 700 単位', '保管費: 700 × $3 ＝ $2,100（うち安全在庫の分 200 × $3 ＝ $600）', '合計: $600 ＋ $2,100 ＝ $2,700'],
            answer: '年間の発注費 $600、保管費 $2,100、合計 $2,700'
          }
        },
        {
          title: '発注量を変えると',
          table: { caption: '同じ条件で Q だけ変える（安全在庫 200）', head: ['1回の発注量', '発注費 $', '保管費 $'], rows: [['500', '1,200', '1,350'], ['1,000', '600', '2,100'], ['2,000', '300', '3,600']] },
          after: '合計は 500 単位で $2,550、1,000 単位で $2,700、2,000 単位で $3,900。Q を増やすと発注費は減り、保管費は増える。合計が最も小さくなる Q を求めるのが、次のレッスンの EOQ。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '平均在庫に Q をそのまま使わない（Q ÷ 2）。安全在庫は半分にしない（そのまま足す）。保管費が「価格の20%」なら、20% を単価にかけてから使う。年間の費用を出すので、月の需要や月あたりの保管費は12倍して年にそろえる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['発注費は注文1回ごと、保管費は持っている量と期間に比例、在庫切れの費用は足りないときに出る', '年間の発注費 ＝ 年間需要 ÷ Q × 1回の発注費', '年間の保管費 ＝（安全在庫 ＋ Q ÷ 2）× 1単位の年間保管費']
        },
        {
          title: '英単語',
          words: [
            ['ordering costs', 'オーダリング コスツ', '発注費'],
            ['holding costs', 'ホールディング コスツ', '保管費（carrying costs とも）'],
            ['stockout costs', 'ストックアウト コスツ', '在庫切れの費用'],
            ['buffer inventory / safety inventory', 'バッファー', '安全在庫'],
            ['average inventory', '', '平均在庫'],
            ['lead time', 'リード タイム', '注文してから届くまでの期間'],
            ['annual demand', 'アニュアル', '年間需要量'],
            ['obsolescence', 'オブソレセンス', '陳腐化（古くなって使えなくなること）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a holding cost of inventory?', choices: ['Clerical cost of processing a purchase order', 'Lost contribution when inventory runs out', 'Delivery charge paid on each order', 'Insurance of inventory held in the warehouse'], answer: 3, explain: '倉庫にある在庫の保険は、持っているあいだかかる保管費。注文の事務と注文ごとの運送費は発注費。売り逃した貢献利益は在庫切れの費用。' },
        { q: 'A company uses 18,000 units a year. It orders 1,500 units at a time and holds a buffer inventory of 300 units. Each order costs $40 to place and the holding cost is $2 per unit per year. What is the total annual cost of ordering and holding inventory?', type: 'number', answer: 2580, unit: '$', explain: '発注: 18,000 ÷ 1,500 ＝ 12回 × $40 ＝ $480。平均在庫: 300 ＋ 1,500 ÷ 2 ＝ 1,050 単位、保管費 1,050 × $2 ＝ $2,100。合計 $2,580。安全在庫を忘れると $1,980 になる。' },
        { q: '1回の発注量が 800 単位、安全在庫が 100 単位。平均在庫は？', choices: ['400 単位', '500 単位', '900 単位', '450 単位'], answer: 1, explain: '100 ＋ 800 ÷ 2 ＝ 500。400 は安全在庫を忘れた答え。900 は Q を半分にしていない答え。450 は安全在庫まで半分にした答え。' },
        { q: '在庫切れの費用（stockout costs）に当たらないのは？', choices: ['売り逃した製品の貢献利益', '急いで取り寄せた緊急発注の割増料金', '倉庫にある在庫の保険料', '材料がなくて生産ラインが止まった損失'], answer: 2, explain: '保険料は在庫を持っているからかかる保管費。ほかの3つは、在庫が足りないときに生じる。' },
        { q: '購入価格は $30。保管費は年間で購入価格の 10%。平均在庫が 600 単位のとき、年間の保管費はいくら？', type: 'number', answer: 1800, unit: '$', explain: '1単位の年間保管費: $30 × 10% ＝ $3。600 × $3 ＝ $1,800。10% を平均在庫にかけて 60 としないこと。' },
        { q: 'If a company increases its buffer inventory and all other factors stay the same, which of the following will happen?', choices: ['Annual ordering costs will rise and the risk of stockouts will fall', 'Annual holding costs will rise and the risk of stockouts will fall', 'Annual holding costs will fall and the risk of stockouts will rise', 'Annual ordering costs will fall and annual holding costs will rise'], answer: 1, explain: '安全在庫は平均在庫に丸ごと足されるので、保管費が増える。その代わり在庫切れは起きにくくなる。発注量と回数は変わらないので、発注費は変わらない。' }
      ]
    },
    {
      id: 'M028',
      no: 28,
      title: '経済的発注量（EOQ）',
      goal: 'EOQ の式で最適な1回の発注量を計算し、その意味と前提を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(iv)'],
      slides: [
        {
          title: 'お米は何kgずつ買う？',
          paras: ['2kg ずつ買うと、毎週お米を買いに行くことになる。30kg をまとめて買うと、置き場所に困り、味も落ちる。', 'その間に「手間と置き場所の合計がいちばん小さい量」がある。前のレッスンの表でも、発注量によって合計が変わった。その最も安い量を式で求める。']
        },
        {
          title: 'EOQ（economic order quantity）とは',
          paras: ['年間の発注費と保管費の合計が最小になる、1回の発注量のこと。'],
          formula: 'EOQ ＝ √（2 × Co × D ÷ Ch）',
          list: ['Co: 1回の発注費', 'D: 年間需要量（1年に使う量）', 'Ch: 1単位を1年間持つ保管費'],
          after: '式は覚えておく。大事なのは記号の意味と、D と Ch を「1年あたり」にそろえること。'
        },
        {
          title: '合計が最小になる点',
          svg: `<svg viewBox="0 0 440 292" role="img" aria-label="保管費は発注量に比例して増え、発注費は減り、合計が最小になる発注量がEOQ" font-size="14"><text x="20" y="24" font-size="17" font-weight="600" fill="var(--ink)">合計が最小になる量が EOQ</text><text x="52" y="56" text-anchor="end" fill="var(--quiet)">費用</text><line x1="60" y1="40" x2="60" y2="230" stroke="var(--ink)" stroke-width="1.5"/><line x1="60" y1="230" x2="330" y2="230" stroke="var(--ink)" stroke-width="1.5"/><line x1="60" y1="230" x2="330" y2="108.5" stroke="var(--ink)" stroke-width="2"/><polyline points="105,47.8 120,93.3 135,120.7 150,138.9 165,151.9 180,161.7 195,169.3 210,175.3 225,180.3 240,184.4 255,187.9 270,190.9 285,193.6 300,195.8 315,197.8 330,199.6" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4"/><polyline points="110,43.5 120,66.3 130,81.3 140,91.5 150,98.4 160,103 170,105.9 180,107.7 190,108.4 200,108.4 210,107.8 220,106.7 230,105.3 240,103.4 250,101.3 260,99 270,96.4 280,93.7 290,90.8 300,87.8 310,84.7 320,81.5 330,78.1" fill="none" stroke="var(--ink)" stroke-width="2.5"/><line x1="195" y1="108.5" x2="195" y2="230" stroke="var(--edge)" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="195" cy="108.5" r="6" fill="var(--accent)"/><text x="195" y="96" text-anchor="middle" font-weight="600" fill="var(--ink)">最小</text><text x="336" y="83" font-weight="600" fill="var(--ink)">総費用</text><text x="336" y="113" fill="var(--ink)">保管費</text><text x="336" y="204" fill="var(--ink)">発注費</text><text x="195" y="250" text-anchor="middle" font-weight="600" fill="var(--ink)">EOQ</text><text x="330" y="250" text-anchor="end" fill="var(--quiet)">発注量 Q</text><text x="220" y="278" text-anchor="middle" fill="var(--ink)">発注費と保管費が等しいところで合計が最小</text></svg>`,
          caption: '保管費（直線）は Q に比例して増え、発注費（点線）は回数が減るので下がる。'
        },
        {
          title: 'なぜ？ 式の正体',
          paras: ['年間の発注費は D ÷ Q × Co、保管費は Q ÷ 2 × Ch（安全在庫を除く）。Q を増やすと発注費は減り、保管費は増える。', 'この2つの形の場合、合計が最小になるのは2つが等しくなる点。D ÷ Q × Co ＝ Q ÷ 2 × Ch を Q について解くと、Q × Q ＝ 2 × Co × D ÷ Ch。だから平方根が出てくる。EOQ では発注費と保管費が必ず等しくなるので、検算に使える。']
        },
        {
          title: '例題①: EOQ を求める',
          example: {
            problem: '年間需要 40,000 単位。1回の発注費 $50。購入価格 $25 で、保管費は年間で購入価格の 16%。EOQ と、そのときの年間の発注費・保管費は？',
            steps: ['Ch: $25 × 16% ＝ $4', '2 × Co × D ＝ 2 × 50 × 40,000 ＝ 4,000,000', '÷ Ch: 4,000,000 ÷ 4 ＝ 1,000,000', '√1,000,000 ＝ 1,000 単位', '発注費: 40,000 ÷ 1,000 ＝ 40回 × $50 ＝ $2,000', '保管費: 1,000 ÷ 2 × $4 ＝ $2,000（発注費と等しい）'],
            answer: 'EOQ は 1,000 単位。発注費 $2,000、保管費 $2,000、合計 $4,000'
          }
        },
        {
          title: '例題②: 月の需要が与えられたら',
          example: {
            problem: '毎月 1,000 単位使う。1回の発注費 $60、1単位の年間保管費 $4。EOQ は？',
            steps: ['年間需要にそろえる: 1,000 × 12 ＝ 12,000 単位', '2 × 60 × 12,000 ＝ 1,440,000', '÷ 4 ＝ 360,000', '√360,000 ＝ 600 単位'],
            answer: 'EOQ は 600 単位（月の 1,000 のまま計算すると約 173 単位になり、誤り）'
          }
        },
        {
          title: '前提と、結果の読み方',
          list: ['需要は一定で、前もって分かっている', '納期（lead time）は一定', '購入単価は一定（数量割引はない）', 'Co と Ch は一定', '在庫切れは起こさず、1回分がまとめて届く'],
          after: '総費用の曲線は EOQ の近くでは平ら。例題①で 1,250 単位ずつ頼んでも、合計は $1,600 ＋ $2,500 ＝ $4,100 で、$100 しか増えない。だから実務では、箱の単位などに合わせて EOQ を丸めても大きな損はない。'
        },
        {
          title: '条件が変わると EOQ は？',
          list: ['需要 D が増える → EOQ は増える。ただし平方根なので、D が4倍で EOQ は2倍', '発注費 Co が上がる → まとめて頼む方が得 → EOQ は増える', '保管費 Ch が上がる → 少しずつ頼む方が得 → EOQ は減る', '安全在庫 → EOQ は変わらない。保管費に「安全在庫 × Ch」が一定額で足されるだけ']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'D と Ch の期間をそろえ忘れる（月の需要は12倍、月あたりの保管費も12倍）。Ch が「価格の%」なら単価にかけてから使う。式の「2」を忘れる、平方根をとり忘れる。D と Ch を逆に入れる（Ch は割る側）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['EOQ ＝ √（2 × Co × D ÷ Ch）。D と Ch は年単位', 'EOQ では年間の発注費と保管費が等しい（検算に使う）', '前提は需要・納期・単価・Co・Ch が一定。割引があれば次のレッスンの方法で比べる']
        },
        {
          title: '英単語',
          words: [
            ['economic order quantity (EOQ)', 'エコノミック オーダー クオンティティ', '経済的発注量'],
            ['cost of placing an order (Co)', '', '1回の発注費'],
            ['cost of holding one unit for one year (Ch)', '', '1単位の年間保管費'],
            ['annual demand (D)', '', '年間需要量'],
            ['reorder quantity', 'リオーダー', '1回に発注する量'],
            ['optimal', 'オプティマル', '最適な']
          ]
        }
      ],
      quiz: [
        { q: 'A company has annual demand of 9,000 units. The cost of placing an order is $20 and the cost of holding one unit in inventory for a year is $4. What is the economic order quantity (in units)?', type: 'number', answer: 300, unit: '', explain: '√（2 × 20 × 9,000 ÷ 4）＝ √90,000 ＝ 300。検算: 発注 30回 × $20 ＝ $600、保管 150 × $4 ＝ $600 で等しい。' },
        { q: 'Which of the following is an assumption of the basic EOQ model?', choices: ['The purchase price falls as the order size increases', 'Stockouts are allowed to occur', 'Demand is constant and known', 'Lead time varies from order to order'], answer: 2, explain: 'EOQ は需要が一定で分かっていると仮定する。単価は一定（割引なし）、在庫切れは起こさない、納期は一定、がほかの前提なので、残りの3つは逆。' },
        { q: '毎月 500 単位の材料を使う。1回の発注費は $75。購入価格は $25 で、保管費は年間で購入価格の 10%。EOQ は何単位？', type: 'number', answer: 600, unit: '', explain: 'D ＝ 500 × 12 ＝ 6,000。Ch ＝ $25 × 10% ＝ $2.50。√（2 × 75 × 6,000 ÷ 2.5）＝ √360,000 ＝ 600。月の 500 のまま計算すると約 173 になる。' },
        { q: 'EOQ で発注するとき、年間の発注費と保管費（安全在庫の分を除く）の関係は？', choices: ['発注費が保管費の2倍', '保管費のほうが必ず大きい', '決まった関係はない', '等しい'], answer: 3, explain: 'EOQ の式は、発注費 ＝ 保管費 を解いて作られている。計算した EOQ が正しいかの検算に使える。' },
        { q: 'If annual demand doubles and all other factors remain unchanged, the EOQ will:', choices: ['Double', 'Increase by about 41%', 'Stay the same', 'Halve'], answer: 1, explain: 'D は平方根の中にあるので、EOQ は √2 倍（約 1.41 倍）、つまり約 41% 増える。2倍になるのは D が4倍のとき。' },
        { q: '在庫切れを防ぐため、安全在庫を 200 単位持つことにした。EOQ はどうなる？', choices: ['200 単位増える', '100 単位増える', '変わらない', '200 単位減る'], answer: 2, explain: '安全在庫の保管費（200 × Ch）は、発注量にかかわらず毎年同じ額が足されるだけ。発注費と保管費のバランスの点は動かないので、EOQ は変わらない。' }
      ]
    },
    {
      id: 'M029',
      no: 29,
      title: '数量割引があるときの最適な発注量',
      goal: '数量割引があるとき、購入費・発注費・保管費の合計を比べて、最適な発注量を選べるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B3(a)(iv)'],
      slides: [
        {
          title: 'ケース買いは本当に得？',
          paras: ['お茶を24本のケースで買うと、1本あたり安くなる。でも、置き場所をとり、飲みきる前に期限が近づくかもしれない。', '割引で得する額と、多く持つことで増える負担を比べて決める。会社の材料も同じ。']
        },
        {
          title: 'EOQ だけでは決められない理由',
          paras: ['EOQ の式は、購入単価が一定だと仮定している。数量割引（bulk purchase discount）があると、1回の量によって購入費そのものが変わる。', 'そこで、購入費まで含めた1年間の合計で比べる。'],
          formula: '年間の総費用 ＝ 購入費 ＋ 発注費 ＋ 保管費'
        },
        {
          title: '手順',
          numbered: ['EOQ を計算し、その量での単価で年間の総費用を出す', 'EOQ より大きい割引ごとに、割引が始まる最小の量で年間の総費用を出す', '総費用が最も小さい量を選ぶ'],
          after: '割引を受けるなら、割引が始まる最小の量で頼む。それより増やしても単価は同じで、保管費が増えるだけ。保管費が単価の%で与えられたら、割引後の単価で計算し直す。EOQ がすでに割引の範囲に入っていれば、割引後の単価のまま EOQ で頼めばよい。'
        },
        {
          title: '例題: どの量で頼む？',
          example: {
            problem: '年間需要 40,000 単位、1回の発注費 $50、購入価格 $25、保管費は年間で単価の 16%（前のレッスンと同じで EOQ は 1,000 単位）。1回 2,000 単位以上なら 2% 引き、10,000 単位以上なら 3% 引き。割引は買った全数にかかる。何単位ずつ頼むのがよい？',
            steps: ['1,000 単位（$25、Ch $4）: 購入 40,000 × $25 ＝ $1,000,000、発注 40回 × $50 ＝ $2,000、保管 500 × $4 ＝ $2,000、計 $1,004,000', '2,000 単位（$24.50、Ch $3.92）: 購入 $980,000、発注 20回 × $50 ＝ $1,000、保管 1,000 × $3.92 ＝ $3,920、計 $984,920', '10,000 単位（$24.25、Ch $3.88）: 購入 $970,000、発注 4回 × $50 ＝ $200、保管 5,000 × $3.88 ＝ $19,400、計 $989,600', 'いちばん小さいのは 2,000 単位の $984,920'],
            answer: '2,000 単位ずつ頼む。EOQ のままより年 $19,080 安い'
          }
        },
        {
          title: '結果をまとめると',
          table: { caption: '1回の発注量ごとの年間の総費用', head: ['1回の発注量', '単価 $', '年間の総費用 $'], rows: [['1,000（EOQ）', '25.00', '1,004,000'], ['2,000', '24.50', '984,920'], ['10,000', '24.25', '989,600']] },
          after: '保管費が「1単位 $4」のように金額で与えられたら、割引があっても Ch は変わらない。「単価の◯%」のときだけ、割引後の単価で Ch を計算し直す。'
        },
        {
          title: 'なぜ？ 大きい割引が負けた理由',
          paras: ['2,000 単位から 10,000 単位に増やすと、購入費は $10,000、発注費は $800 減る。ところが平均在庫が 1,000 から 5,000 単位に増え、保管費が $15,480 も増える。', '差し引き $4,680 の損になる。割引率が大きいほど得、とは限らない。割引の得と保管費の増加を、金額で比べて決める。']
        },
        {
          title: '数字以外に考えること',
          list: ['倉庫に置き場所があるか', '劣化・陳腐化のおそれ（流行や仕様の変更で使えなくなる）', '在庫にお金が寝るので、手元の資金が足りるか', '1つの仕入先にまとめて頼むことの危険']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '購入費を比べ忘れる（発注費と保管費だけだと、割引の得が見えない）。割引後の単価で保管費を計算し直し忘れる。割引が始まる量より多い量で比べる（最小の量でよい）。割引は、割引の量を超えた分だけでなく全数にかかる前提で計算する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['割引があるときは、購入費 ＋ 発注費 ＋ 保管費 の年間合計で比べる', '比べる量は、EOQ と、EOQ より大きい各割引が始まる最小の量', '大きい割引でも、保管費の増加が割引の得を上回れば損']
        },
        {
          title: '英単語',
          words: [
            ['bulk purchase discount', 'バルク パーチェス ディスカウント', '数量割引（大量購入の割引）'],
            ['quantity discount', 'クオンティティ ディスカウント', '数量割引'],
            ['total annual cost', '', '年間の総費用'],
            ['purchase cost', '', '購入費'],
            ['threshold', 'スレッショルド', '割引が始まる量（境目）'],
            ['deterioration', 'ディテリオレーション', '劣化']
          ]
        }
      ],
      quiz: [
        { q: 'Annual demand is 9,000 units. The ordering cost is $20 per order and the holding cost is $4 per unit per year. The purchase price is $10 per unit, but a discount of 1% is available on orders of 600 units or more. What is the total annual cost (purchase, ordering and holding costs) if the company orders 600 units at a time?', type: 'number', answer: 90600, unit: '$', explain: '購入: 9,000 × $9.90 ＝ $89,100。発注: 9,000 ÷ 600 ＝ 15回 × $20 ＝ $300。保管: 600 ÷ 2 × $4 ＝ $1,200。合計 $90,600。' },
        { q: '前の問題と同じ条件。EOQ は 300 単位で、そのときの年間の総費用は $91,200（購入 $90,000、発注 $600、保管 $600）。どちらの量で頼むのがよい？', choices: ['300 単位。年 $600 安い', '600 単位。年 $600 安い', '600 単位。年 $900 安い', 'どちらも同じ'], answer: 1, explain: '$91,200 − $90,600 ＝ $600。$900 は購入費の差（割引の得）だけを見た答えで、発注費が $300 減り保管費が $600 増える分を入れていない。' },
        { q: 'When deciding whether to accept a bulk purchase discount, which costs should be compared?', choices: ['Ordering and holding costs only', 'Purchase costs only', 'Holding and stockout costs only', 'Purchase, ordering and holding costs'], answer: 3, explain: '割引は購入費を下げ、発注回数を減らし、平均在庫を増やす。3つ全部が動くので、合計で比べる。発注費と保管費だけだと割引の得が入らない。' },
        { q: '割引を受けると決めたとき、1回の発注量はどうする？', choices: ['割引が始まる量の2倍にする', '1年分をまとめて頼む', '割引が始まる最小の量にする', 'EOQ のままにする'], answer: 2, explain: '最小の量でも割引は同じだけ受けられる。それより増やすと平均在庫が増え、保管費だけが増える。EOQ のままでは、EOQ が割引の量より小さい限り割引を受けられない。' },
        { q: '購入価格は $50。1回 1,000 単位以上なら 4% 引き。保管費は年間で購入価格の 20%。割引を受けたときの1単位の年間保管費はいくら？', type: 'number', answer: 9.6, unit: '$', explain: '割引後の単価: $50 × 96% ＝ $48。保管費: $48 × 20% ＝ $9.60。割引前の単価で計算すると $10 になる。' },
        { q: 'Which of the following is a disadvantage of ordering larger quantities to obtain a bulk purchase discount?', choices: ['Higher annual ordering costs', 'Higher risk of deterioration and obsolescence', 'Higher purchase price per unit', 'More frequent deliveries'], answer: 1, explain: '多く持つほど、劣化や陳腐化のおそれが増える。大量に頼むと発注回数は減るので、発注費は下がり、配達の回数も減る。単価は割引で下がる。' }
      ]
    }
  ],
  cards: [
    { id: 'M025-1', lesson: 'M025', q: '材料の管理サイクルの4段階は？', a: '発注（ordering）・受入（receiving）・保管（storing）・払出（issuing）' },
    { id: 'M025-2', lesson: 'M025', q: '受入報告書（GRN）とは？', a: '自社の倉庫が、届いた材料の数と状態を確かめて作る書類' },
    { id: 'M025-3', lesson: 'M025', q: '請求書を払う前に照合する2つの書類は？', a: '注文書（purchase order）と受入報告書（GRN）。3点照合' },
    { id: 'M025-4', lesson: 'M025', q: '在庫カードと材料元帳のちがいは？', a: 'bin card は数量だけ（倉庫）。stores ledger account は数量と金額（経理）' },
    { id: 'M025-5', lesson: 'M025', q: '製造部門が倉庫から材料をもらう書類は？', a: '材料出庫票（materials requisition note）。使う製品・部門のコードを書く' },
    { id: 'M025-6', lesson: 'M025', q: 'なぜ注文・受取・支払承認の担当を分ける？', a: '1人で全部できると、架空の注文や持ち出しを隠せるから（職務の分離）' },
    { id: 'M026-1', lesson: 'M026', q: '掛けで材料を買った仕訳は？', a: 'Dr Material inventory / Cr Trade payables' },
    { id: 'M026-2', lesson: 'M026', q: '直接材料を払い出した仕訳は？', a: 'Dr Work in progress / Cr Material inventory' },
    { id: 'M026-3', lesson: 'M026', q: '間接材料を払い出した仕訳は？', a: 'Dr Production overhead / Cr Material inventory' },
    { id: 'M026-4', lesson: 'M026', q: '使わなかった材料を倉庫に戻した仕訳は？', a: 'Dr Material inventory / Cr Work in progress（払出の逆）' },
    { id: 'M026-5', lesson: 'M026', q: 'なぜ間接材料は仕掛品に直接入れない？', a: 'どの製品の分か測れないので、製造間接費に集めて後で配賦する' },
    { id: 'M026-6', lesson: 'M026', q: '材料勘定の期末残高の求め方は？', a: '期首 ＋ 購入 ＋ 戻し − 払出 − 返品' },
    { id: 'M026-7', lesson: 'M026', q: '火事や盗難のような異常な材料の損失は？', a: '製品の原価に入れず、損益計算書の費用にする（通常の減耗は製造間接費）' },
    { id: 'M027-1', lesson: 'M027', q: '発注費（ordering costs）の例は？', a: '注文の事務、注文ごとの運送費、受入時の検査など' },
    { id: 'M027-2', lesson: 'M027', q: '保管費（holding costs）の例は？', a: '在庫に寝た資金の利息、倉庫代、保険、劣化・陳腐化・盗難' },
    { id: 'M027-3', lesson: 'M027', q: '平均在庫の式は？', a: '安全在庫 ＋ 1回の発注量 Q ÷ 2' },
    { id: 'M027-4', lesson: 'M027', q: '年間の発注費の式は？', a: '年間需要 ÷ Q × 1回の発注費' },
    { id: 'M027-5', lesson: 'M027', q: '安全在庫（buffer inventory）の目的は？', a: '需要や納期のぶれによる在庫切れを防ぐ。そのぶん保管費は増える' },
    { id: 'M027-6', lesson: 'M027', q: '1回の発注量を増やすと？', a: '発注費は減り、保管費は増える' },
    { id: 'M028-1', lesson: 'M028', q: 'EOQ の式は？', a: '√（2 × Co × D ÷ Ch）。Co 1回の発注費、D 年間需要、Ch 年間保管費' },
    { id: 'M028-2', lesson: 'M028', q: 'EOQ とは？', a: '年間の発注費と保管費の合計が最小になる1回の発注量' },
    { id: 'M028-3', lesson: 'M028', q: 'EOQ のとき、発注費と保管費の関係は？', a: '等しくなる（安全在庫の分を除く）。検算に使える' },
    { id: 'M028-4', lesson: 'M028', q: '需要が月単位で与えられたら？', a: '12倍して年間にそろえる。Ch も1年あたりにする' },
    { id: 'M028-5', lesson: 'M028', q: '需要が4倍になると EOQ は？', a: '2倍（平方根の中にあるから）' },
    { id: 'M028-6', lesson: 'M028', q: 'EOQ の主な前提は？', a: '需要・納期・購入単価・Co・Ch が一定。在庫切れなし' },
    { id: 'M029-1', lesson: 'M029', q: '数量割引があるとき、何を比べる？', a: '購入費 ＋ 発注費 ＋ 保管費 の年間合計' },
    { id: 'M029-2', lesson: 'M029', q: '比べる発注量はどれ？', a: 'EOQ と、EOQ より大きい各割引が始まる最小の量' },
    { id: 'M029-3', lesson: 'M029', q: '保管費が単価の%のとき、割引を受けたら？', a: '割引後の単価で保管費を計算し直す' },
    { id: 'M029-4', lesson: 'M029', q: '大きい割引が損になる理由は？', a: '平均在庫が増え、保管費の増加が割引の得を上回ることがあるから' },
    { id: 'M029-5', lesson: 'M029', q: '大量購入の数字以外の注意点は？', a: '置き場所、劣化・陳腐化、資金が在庫に寝ること' },
    { id: 'M029-6', lesson: 'M029', q: '保管費が「1単位 $4」と金額で与えられたら、割引で Ch は？', a: '変わらない。単価の%で与えられたときだけ割引後の単価で計算し直す' }  ]
});
