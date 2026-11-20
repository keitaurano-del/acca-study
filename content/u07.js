(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 7,
  part: 5,
  partTitle: '棚卸資産',
  lessons: [
    {
      id: 'L33',
      no: 33,
      title: 'なぜ期末に在庫を調整するのか',
      goal: '売れ残った商品を期末に調整する理由と、調整しないと利益がどう狂うかを説明できるようになる',
      minutes: 10,
      recall: true,
      exam: 'both',
      outcomes: ['D3(a)'],
      slides: [
        {
          title: '冷蔵庫の中身で考える',
          paras: ['今月、食材を3万円買った。月末、冷蔵庫にまだ5,000円分が残っている。', '今月の食費は3万円？ 実際に食べたのは2万5,000円分。残りの5,000円分は来月食べるので、来月の食費になる。', '「買った金額」と「使った金額」はちがう。お店でもまったく同じことが起きる。']
        },
        {
          title: 'お店の売れ残り',
          paras: ['Tシャツ屋が1年目（20X1年）に、Tシャツを1,000枚、1枚 $10 で仕入れた（仕入 $10,000）。そのうち600枚を1枚 $25 で売った（売上 $15,000）。', '年末に400枚が売れ残っている。このように、売るために持っている商品を棚卸資産（inventory、在庫）という。']
        },
        {
          title: '調整しないと利益が狂う',
          table: {
            caption: '仕入を全部その年の費用にした場合と比べる',
            head: ['項目', '調整なし', '調整あり'],
            rows: [
              ['売上', '$15,000', '$15,000'],
              ['費用にした仕入', '$10,000', '$6,000'],
              ['利益', '$5,000', '$9,000'],
              ['資産としての在庫', '$0', '$4,000']
            ]
          },
          after: '正しいのは「調整あり」。売れた600枚分の $6,000 だけを費用にする。この費用を売上原価（cost of sales）という。'
        },
        {
          title: 'なぜ？ 売上と、そのための費用を同じ年に並べる',
          paras: ['利益は「その年の売上」から「その売上のためにかかった費用」を引いて求める。売れていない400枚は、今年の売上に何も貢献していない。', '売れ残りまで今年の費用にすると、今年の利益は小さすぎ、来年は費用なしで売上だけが立って大きすぎになる。年ごとの成績を正しく比べるために、売れた分だけを費用にする。'],
          note: { kind: 'tip', text: '売上と費用を同じ期間に並べるこの考え方を matching（対応）という。後で学ぶ発生主義（accruals basis）の一部。' }
        },
        {
          title: '売れ残りは資産になる',
          paras: ['400枚は来年売れて、お金になる見込みがある。だから年末の財政状態計算書に資産として載せる。1年以内にお金に変わる資産なので、流動資産（current asset）に入る。'],
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="売れ残った在庫は資産として翌年に持ち越し、売れた年の売上原価になる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">売れ残りは来年に持ち越す</text><text x="110" y="64" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">20X1年</text><text x="330" y="64" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">20X2年</text><line x1="220" y1="48" x2="220" y2="316" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="4 4"/><rect x="20" y="80" width="180" height="60" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="106" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">仕入 $10,000</text><text x="110" y="128" text-anchor="middle" fill="var(--quiet)">1,000枚 × $10</text><path d="M104 148L116 148L110 158z" fill="var(--quiet)"/><rect x="20" y="166" width="180" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="192" text-anchor="middle" fill="var(--ink)">売れた600枚</text><text x="110" y="216" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">売上原価 $6,000</text><rect x="20" y="242" width="180" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="110" y="268" text-anchor="middle" fill="var(--ink)">残った400枚</text><text x="110" y="292" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期末在庫 $4,000</text><path d="M204 274L228 274" stroke="var(--ink)" stroke-width="1.5"/><path d="M228 268L240 274L228 280z" fill="var(--ink)"/><rect x="240" y="242" width="180" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="268" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期首在庫 $4,000</text><text x="330" y="292" text-anchor="middle" fill="var(--ink)">売れたら売上原価</text><text x="330" y="160" text-anchor="middle" fill="var(--quiet)">年が変わると</text><text x="330" y="184" text-anchor="middle" fill="var(--quiet)">期首の在庫になる</text><text x="220" y="344" text-anchor="middle" fill="var(--ink)">費用になるのは「売れた年」</text></svg>`,
          caption: '今年の期末在庫（closing inventory）は、来年の期首在庫（opening inventory）になる。'
        },
        {
          title: '期末在庫はどうやって知る？',
          paras: ['ふだんは、商品を買うたびに仕入（purchases）の勘定に記録するだけ。在庫の勘定は1年間動かさない（年末にまとめて数えるやり方。もう1つのやり方は後で学ぶ）。', 'そこで年末に、実際に商品を数える。これを棚卸（inventory count）という。'],
          list: ['数量: 年末に実際に数える', '単価: 仕入れたときの原価（何を含めるかは後で学ぶ）', '傷んだ商品や流行遅れの商品は、原価より低い金額にすることがある']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「仕入＝その年の費用」ではない。費用になるのは売れた分（売上原価）だけで、売れ残りは資産。また、期末在庫を多く数えすぎると、売上原価が小さくなって利益が大きく出すぎる。少なく数えると、利益が小さく出すぎる。その期末在庫は翌年の期首在庫になるので、翌年の利益は逆向きに同じ額だけ狂う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売れ残った商品は棚卸資産（inventory）。年末に数えて流動資産にする', '費用になるのは売れた分だけ（売上原価）', '今年の期末在庫は、来年の期首在庫になる']
        },
        {
          title: '英単語',
          words: [
            ['inventory', 'インベントリー', '棚卸資産、在庫'],
            ['closing inventory', '', '期末在庫（年末の売れ残り）'],
            ['opening inventory', '', '期首在庫（年の初めにあった在庫）'],
            ['purchases', 'パーチェシズ', '仕入'],
            ['cost of sales', '', '売上原価（売れた分の原価）'],
            ['inventory count', '', '棚卸（年末に実際に数えること）'],
            ['current asset', '', '流動資産（1年以内にお金に変わる資産）'],
            ['matching', 'マッチング', '対応（売上と費用を同じ期間に並べる）']
          ]
        }
      ],
      quiz: [
        { q: 'Tシャツを $8,000 仕入れ、そのうち $5,000 分が売れた。今年の売上原価は？', choices: ['$8,000', '$5,000', '$3,000', '$13,000'], answer: 1, explain: '費用になるのは売れた分の $5,000 だけ。$8,000 は仕入を全部費用にしてしまう間違い。残りの $3,000 は期末在庫（資産）。' },
        { q: '年末の売れ残り（期末在庫）は、財政状態計算書のどこに載る？', choices: ['流動資産', '負債', '資本', 'どこにも載らない（費用になる）'], answer: 0, explain: '来年売れてお金になる見込みがあるので資産。1年以内にお金に変わるので流動資産。' },
        { q: 'Unsold goods held by a business at the end of the year are best described as:', choices: ['An expense of the year', 'A current asset', 'A liability', 'Part of capital'], answer: 1, explain: '売れ残りは来年売れる見込みがあるので資産（current asset）。今年の費用にすると、今年の利益が小さく出すぎる。' },
        { q: 'Closing inventory at 31 December 20X1 was counted too high (overstated). What is the effect on the profit for 20X1?', choices: ['Profit is overstated', 'Profit is understated', 'There is no effect on profit', 'Only liabilities are affected'], answer: 0, explain: '期末在庫が大きすぎる → 売上原価が小さすぎる → 利益が大きすぎる。資産（在庫）も大きすぎになる。' },
        { q: '期中に商品を掛けで仕入れた（年末にまとめて数えるやり方）。仕訳は？', choices: ['Dr Purchases / Cr Trade payables', 'Dr Inventory / Cr Trade payables', 'Dr Trade payables / Cr Purchases', 'Dr Purchases / Cr Inventory'], answer: 0, explain: '期中は仕入勘定（purchases）に記録し、在庫の勘定（Inventory）は年末まで動かさない。Dr Trade payables / Cr Purchases は借方と貸方が逆。Dr Purchases / Cr Inventory は、期中には使わない在庫の勘定を動かしてしまう間違い。' },
        { q: 'Closing inventory at 31 December 20X1 was overstated by $2,000. The error was not corrected. What is the effect on the profit for the year ended 31 December 20X2?', choices: ['Profit for 20X2 is understated by $2,000', 'Profit for 20X2 is overstated by $2,000', 'There is no effect on the profit for 20X2', 'Profit for 20X2 is overstated by $4,000'], answer: 0, explain: '20X1年の期末在庫は、20X2年の期首在庫になる。期首在庫が $2,000 大きすぎる → 20X2年の売上原価が大きすぎる → 20X2年の利益は $2,000 小さすぎる。20X1年は逆に $2,000 大きすぎたので、2年合計では打ち消し合う。' }
      ]
    },
    {
      id: 'L34',
      no: 34,
      title: '売上原価＝期首在庫＋仕入−期末在庫',
      goal: '売上原価と売上総利益を計算し、期首・期末在庫の仕訳を書けるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D3(b)'],
      slides: [
        {
          title: '冷蔵庫の式',
          paras: ['月初、冷蔵庫に食材が2,000円分あった。今月3万円買い足した。月末に5,000円分残っている。', '今月食べた分は 2,000 ＋ 30,000 − 5,000 ＝ 2万7,000円。「最初にあった」＋「買い足した」−「残っている」で、使った分が分かる。'],
          formula: 'cost of sales ＝ opening inventory ＋ purchases − closing inventory'
        },
        {
          title: '売上総利益',
          paras: ['売上から売上原価を引いた残りを、売上総利益（gross profit）という。家賃や給料など他の費用を引く前の、「商品そのもの」のもうけ。', '前のレッスンの売れ残り $4,000 は、2年目（20X2年）の期首在庫になる。2年目の数字で計算してみる。'],
          formula: 'gross profit ＝ revenue − cost of sales'
        },
        {
          title: '例題: 売上原価と売上総利益',
          example: {
            problem: 'Tシャツ屋の20X2年。売上 $45,000、期首在庫 $4,000、仕入 $30,000、仕入戻し $1,000、仕入運賃 $500、期末在庫 $6,000。売上原価と売上総利益は？',
            steps: ['仕入から仕入戻しを引く: 30,000 − 1,000 ＝ 29,000', '仕入運賃（carriage inwards）は商品を店まで運ぶ費用なので足す: 29,000 ＋ 500 ＝ 29,500', '期首在庫を足す: 4,000 ＋ 29,500 ＝ 33,500（今年売れる可能性があった商品の合計）', '期末在庫を引く: 33,500 − 6,000 ＝ 27,500（売上原価）', '売上総利益: 45,000 − 27,500 ＝ 17,500'],
            answer: '売上原価 $27,500、売上総利益 $17,500'
          }
        },
        {
          title: '損益計算書ではこう書く',
          table: {
            caption: 'Tシャツ屋 損益計算書（抜粋） 20X2年12月31日終了年度',
            head: ['項目', '$', '$'],
            rows: [
              ['Revenue（売上）', '', '45,000'],
              ['Opening inventory', '4,000', ''],
              ['Purchases', '30,000', ''],
              ['Purchase returns', '(1,000)', ''],
              ['Carriage inwards', '500', ''],
              ['Closing inventory', '(6,000)', ''],
              ['Cost of sales', '', '(27,500)']
            ],
            total: ['Gross profit', '', '17,500']
          },
          after: 'カッコは引き算を表す。ACCA の答案でもこの並びで書く。'
        },
        {
          title: '年末の仕訳',
          paras: ['期中は仕入勘定に記録するだけ。年末に、数えた期末在庫 $6,000 を資産として記録し、同じ額だけ売上原価を減らす。'],
          journal: [
            { side: 'Dr', account: 'Inventory（棚卸資産・財政状態計算書）', amount: '6,000' },
            { side: 'Cr', account: 'Cost of sales（売上原価・損益計算書）', amount: '6,000' }
          ],
          after: '期首在庫 $4,000 は逆向きで、Dr Cost of sales / Cr Inventory として売上原価に移す。仕入（戻しと仕入運賃を調整して $29,500）も、Dr Cost of sales / Cr Purchases などで売上原価に集める。'
        },
        {
          title: 'なぜ？ 期末在庫は2か所に出てくる',
          paras: ['期末在庫 $6,000 は、損益計算書では売上原価から引かれ、財政状態計算書では流動資産に載る。1つの仕訳の借方と貸方が、それぞれの成績表に行くから。', '試算表（trial balance）にある在庫は、期首在庫の方。期末在庫は試算表を作った後に数えて分かるので、問題文では試算表とは別に「期末在庫は $6,000」のように与えられることが多い。']
        },
        {
          title: '運賃と、オーナーが持ち帰った商品',
          list: ['仕入運賃（carriage inwards）: 商品を店まで運ぶ費用。売上原価に入れる', '販売運賃（carriage outwards）: お客さんに届ける費用。売上原価ではなく販売費（distribution costs）', 'オーナーが商品を自分用に持ち帰った: 原価で Dr Drawings / Cr Purchases。売れていないので仕入から外す']
        },
        {
          title: '例題: 年末より後に数えたとき',
          example: {
            problem: '棚卸を年末ではなく20X3年1月5日に行い、在庫は原価で $9,000 だった。1月1日〜5日に原価 $1,200 の商品が売れ、原価 $700 の商品が入荷した。20X2年12月31日の在庫は？',
            steps: ['年末の後に売れた商品は、12月31日にはまだ店にあった → 足す: 9,000 ＋ 1,200 ＝ 10,200', '年末の後に入荷した商品は、12月31日にはまだ店に無かった → 引く: 10,200 − 700 ＝ 9,500'],
            answer: '$9,500'
          },
          note: { kind: 'tip', text: '年末の後の売上が売価で与えられることもある。足すのは原価なので、先に原価に直す。例: 売価 $1,500、原価は売価の80% → 足すのは $1,200。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '期首在庫と期末在庫の足し引きを逆にする。期首は「足す」、期末は「引く」。期末在庫の仕訳は Dr Inventory / Cr Cost of sales で、逆ではない。販売運賃（carriage outwards）を売上原価に入れない。仕入戻しは仕入から引く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上原価＝期首在庫＋仕入−期末在庫', '期末在庫の仕訳は Dr Inventory / Cr Cost of sales', '仕入運賃は売上原価に入れ、販売運賃は入れない']
        },
        {
          title: '英単語',
          words: [
            ['cost of sales', '', '売上原価'],
            ['gross profit', 'グロス・プロフィット', '売上総利益（売上 − 売上原価）'],
            ['opening inventory', '', '期首在庫'],
            ['closing inventory', '', '期末在庫'],
            ['carriage inwards', 'キャリッジ・インワーズ', '仕入運賃（売上原価に入れる）'],
            ['carriage outwards', 'キャリッジ・アウトワーズ', '販売運賃（販売費にする）'],
            ['purchase returns', '', '仕入戻し（returns outwards とも）'],
            ['distribution costs', '', '販売費']
          ]
        }
      ],
      quiz: [
        { q: '期首在庫 $7,200、仕入 $52,000、仕入運賃 $600、期末在庫 $8,400。売上原価はいくら？', type: 'number', answer: 51400, unit: '$', explain: '7,200 ＋ 52,000 ＋ 600 − 8,400 ＝ 51,400。仕入運賃は売上原価に入れる。' },
        { q: 'Which journal entry records closing inventory?', choices: ['Dr Inventory, Cr Cost of sales', 'Dr Cost of sales, Cr Inventory', 'Dr Purchases, Cr Inventory', 'Dr Inventory, Cr Revenue'], answer: 0, explain: '期末在庫は資産（借方 Inventory）になり、その分だけ売上原価が減る（貸方 Cost of sales）。Dr Cost of sales / Cr Inventory は期首在庫を売上原価に移すときの形。' },
        { q: 'Revenue was $80,000. Opening inventory was $6,000, purchases were $50,000 and closing inventory was $9,000. What was the gross profit?', choices: ['$33,000', '$27,000', '$30,000', '$39,000'], answer: 0, explain: '売上原価＝6,000 ＋ 50,000 − 9,000 ＝ 47,000。売上総利益＝80,000 − 47,000 ＝ 33,000。$27,000 は期首と期末を逆にした答え、$30,000 は仕入だけを引いた答え、$39,000 は期首在庫を足し忘れた答え。' },
        { q: 'お客さんに商品を届けるための運送料（carriage outwards）は？', choices: ['売上原価に入れる', '販売費（distribution costs）にする', '期末在庫に足す', '仕入から引く'], answer: 1, explain: '商品を手に入れるための費用ではなく、売るための費用なので販売費。売上原価に入るのは仕入運賃（carriage inwards）の方。' },
        { q: 'The inventory count was carried out on 4 January 20X2 and valued inventory at $15,000 at cost. Between 31 December 20X1 and 4 January 20X2, goods costing $2,000 were sold and goods costing $1,500 were received from suppliers. What was the inventory at 31 December 20X1?', choices: ['$15,500', '$14,500', '$18,500', '$11,500'], answer: 0, explain: '年末の後に売れた分はまだ店にあったので足し、年末の後に入荷した分は引く: 15,000 ＋ 2,000 − 1,500 ＝ 15,500。$14,500 は足し引きを逆にした答え。' },
        { q: 'オーナーが原価 $300 の商品を自分用に持ち帰った。正しい仕訳は？', choices: ['Dr Drawings $300 / Cr Purchases $300', 'Dr Purchases $300 / Cr Drawings $300', 'Dr Drawings $300 / Cr Revenue $300', '売れていないので記録しない'], answer: 0, explain: '引出し（drawings）が増えて借方。売るために仕入れた商品ではなくなったので、仕入を貸方で減らす。売上ではないので Revenue は使わない。' }
      ]
    },
    {
      id: 'L35',
      no: 35,
      title: '在庫の原価に含めるもの',
      goal: '在庫の原価に入れる費用と入れない費用を見分けて、在庫の金額を計算できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D3(d)'],
      slides: [
        {
          title: '古着を仕入れて売るとしたら',
          paras: ['ネットで古着を3,000円で買い、送料500円を払った。届いてから、すそ直しに1,000円かかった。この古着の原価は4,500円。売れる状態で手元にそろうまでにかかったお金だから。', '一方、フリマの出品手数料や、押し入れの保管料は原価に入れない。売るため・持ち続けるための費用で、古着そのものの価値は増えないから。']
        },
        {
          title: 'ルール: IAS 2',
          paras: ['在庫のルールは、国際会計基準の IAS 2「棚卸資産（Inventories）」にある。在庫の原価（cost）は次の3つの合計。'],
          list: ['購入原価（costs of purchase）: 買うためにかかったお金', '加工費（costs of conversion）: 自分で作ったり手を加えたりするお金', 'その他、今の場所・今の状態にするまでにかかったお金'],
          formula: 'cost ＝ 今の場所・今の状態にするまでの費用'
        },
        {
          title: '入れる・入れないの全体像',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="在庫の原価に入れる費用と入れない費用の一覧" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">在庫の原価に入れる・入れない</text><rect x="20" y="52" width="196" height="232" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="118" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">入れる</text><text x="118" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">include</text><text x="36" y="130" fill="var(--ink)">仕入値（値引き後）</text><text x="36" y="158" fill="var(--ink)">輸入関税</text><text x="36" y="186" fill="var(--ink)">仕入運賃</text><text x="36" y="214" fill="var(--ink)">加工の人件費</text><text x="36" y="242" fill="var(--ink)">工房・工場の間接費</text><rect x="224" y="52" width="196" height="232" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="80" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">入れない</text><text x="322" y="100" text-anchor="middle" font-size="12.5" fill="var(--quiet)">exclude</text><text x="240" y="130" fill="var(--ink)">完成品の保管料</text><text x="240" y="158" fill="var(--ink)">広告・販売手数料</text><text x="240" y="186" fill="var(--ink)">販売運賃（発送）</text><text x="240" y="214" fill="var(--ink)">本社の管理費</text><text x="240" y="242" fill="var(--ink)">異常な仕損</text><text x="240" y="270" fill="var(--ink)">取り戻せる売上税</text><text x="220" y="314" text-anchor="middle" fill="var(--ink)">境目は「売れる状態で店に並ぶまで」</text></svg>`,
          caption: '左は商品と一緒に資産になり、売れた年に売上原価になる。右は発生した年の費用になる。'
        },
        {
          title: '購入原価の中身',
          list: ['仕入値。取引値引き（trade discount）は先に引く', '輸入関税（import duties）', '仕入運賃（carriage inwards）や荷役の費用', '取り戻せない税金'],
          after: '売上税（sales tax）のうち、税務署から取り戻せるものは原価に入れない。売上税のレッスンで学んだとおり、お店の負担ではないから。'
        },
        {
          title: '加工費の中身',
          paras: ['Tシャツ屋は、無地のTシャツを仕入れてプリントしてから売る。このプリントにかかる費用が加工費。'],
          list: ['プリントする人の給料（direct labour、直接労務費）', '工房の電気代・家賃など、作ることに関係する間接費（production overheads、製造間接費）。ふだんの生産量（normal capacity）を基準に割り当てる'],
          after: '機械の故障で大量に失敗したような、ふだんは起きないムダ（abnormal wastage、異常な仕損）は原価に入れず、その年の費用にする。'
        },
        {
          title: '入れないもの',
          list: ['保管料（storage costs）: できあがった商品を倉庫に置いておく費用（作る途中でどうしても必要な保管は例外）', '販売費（selling costs）: 広告費、販売手数料、お客さんへの運送料（carriage outwards）', '管理費（administrative overheads）: 本社の事務員の給料など、作ることに関係ない費用', '異常な仕損（abnormal wastage）'],
          after: 'これらは在庫に入れず、発生した年の費用にする。'
        },
        {
          title: 'なぜ？ 境目は「売れる状態で店に並ぶまで」',
          paras: ['在庫の原価は「この商品を今の場所・今の状態にするのに、いくらかかったか」。そこまでの費用は商品の価値の一部なので、商品と一緒に資産にして、売れた年に売上原価にする。', 'その後の保管・宣伝・配送は、商品の価値を増やさない。だからその年の費用にする。もし何でも在庫に入れてよいなら、費用を来年に先送りして、今年の利益を大きく見せられてしまう。']
        },
        {
          title: '例題: 在庫の原価',
          example: {
            problem: 'Tシャツ屋が無地Tシャツ500枚を仕入れてプリントした。定価 $4,000（取引値引き10%）、取り戻せる売上税 $720、輸入関税 $300、仕入運賃 $200、プリント担当の給料 $1,000、工房の電気代・家賃 $400、完成品の倉庫代 $150、広告費 $500、お客さんへの送料 $250、本社事務員の給料 $600。在庫の原価は？ 1枚あたりは？',
            steps: ['仕入値: 4,000 − 10%（400）＝ 3,600', '取り戻せる売上税 $720 は入れない', '購入原価: 3,600 ＋ 輸入関税 300 ＋ 仕入運賃 200 ＝ 4,100', '加工費: 給料 1,000 ＋ 工房の電気代・家賃 400 ＝ 1,400', '合計: 4,100 ＋ 1,400 ＝ 5,500', '倉庫代・広告費・送料・本社の給料は入れない（その年の費用）', '1枚あたり: 5,500 ÷ 500 ＝ 11'],
            answer: '在庫の原価 $5,500（1枚 $11）'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「運賃」はどれも同じではない。仕入運賃（carriage inwards）は入れ、販売運賃（carriage outwards）は入れない。取り戻せる売上税、完成品の保管料、本社の管理費も入れない。取引値引きを引き忘れない。迷ったら「売れる状態で店に並ぶ前か後か」で判断する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['在庫の原価＝今の場所・今の状態にするまでにかかった費用', '入れる: 仕入値（値引き後）・輸入関税・仕入運賃・加工の人件費・製造間接費', '入れない: 保管料・販売費・管理費・異常な仕損・取り戻せる売上税']
        },
        {
          title: '英単語',
          words: [
            ['IAS 2 Inventories', '', '棚卸資産の国際会計基準'],
            ['costs of purchase', '', '購入原価'],
            ['costs of conversion', '', '加工費（作る・手を加える費用）'],
            ['import duties', 'インポート・デューティーズ', '輸入関税'],
            ['direct labour', 'ダイレクト・レイバー', '直接労務費（作る人の給料）'],
            ['production overheads', '', '製造間接費'],
            ['storage costs', '', '保管料'],
            ['selling costs', '', '販売費'],
            ['administrative overheads', '', '管理費'],
            ['abnormal wastage', '', '異常な仕損（ふだんは出ないムダ）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following costs should be included in the cost of inventory under IAS 2 Inventories?', choices: ['Carriage outwards', 'Import duties on goods purchased', 'Storage costs of finished goods', 'Advertising costs'], answer: 1, explain: '輸入関税は商品を手に入れるための費用なので入れる。販売運賃・完成品の保管料・広告費は、手に入れた後の売るため・持ち続けるための費用なので入れない。' },
        { q: 'A business purchased goods with a list price of $10,000, less a 5% trade discount. It paid carriage inwards of $300 and carriage outwards of $200. What is the cost of the inventory?', choices: ['$9,800', '$10,300', '$10,000', '$9,500'], answer: 0, explain: '10,000 − 5%（500）＝ 9,500。仕入運賃 300 を足して 9,800。$10,300 は値引きを引き忘れた答え、$10,000 は販売運賃まで足した答え、$9,500 は仕入運賃を足し忘れた答え。' },
        { q: '1個 $20 の部品を100個仕入れた。輸入関税 $150、組み立て担当の給料 $500、工場の電気代 $250、販売手数料 $300、取り戻せる売上税 $400。在庫の原価の合計は？', type: 'number', answer: 2900, unit: '$', explain: '2,000 ＋ 150 ＋ 500 ＋ 250 ＝ 2,900。販売手数料は売るための費用、取り戻せる売上税はお店の負担ではないので入れない。' },
        { q: '機械の故障で、ふだんは出ない大量の失敗品が出た。その費用は？', choices: ['在庫の原価に入れる', 'その年の費用にする', '翌年の費用にする', '負債にする'], answer: 1, explain: '異常な仕損（abnormal wastage）は商品の価値を増やさないので、在庫に入れずにその年の費用にする。在庫に入れると、ムダの分だけ資産と利益が大きく出すぎる。' },
        { q: '取り戻せる売上税（sales tax）を在庫の原価に入れない理由は？', choices: ['税務署から取り戻せて、お店の負担ではないから', '金額が小さいから', '売上税は資本だから', '売上税は年末にまとめて払うから'], answer: 0, explain: '売上税のレッスンで学んだとおり、仕入にかかる売上税は取り戻せる。お店が最終的に負担しないお金は、商品の原価ではない。' }
      ]
    },
    {
      id: 'L36',
      no: 36,
      title: '原価と正味実現可能価額の低い方',
      goal: '正味実現可能価額を計算し、在庫を原価との低い方で評価できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D3(c)'],
      slides: [
        {
          title: 'フリマで考える',
          paras: ['去年8,000円で買ったジャケット。流行が終わり、フリマでは6,000円でしか売れない。しかも手数料が600円かかる。', '手元に入るのは 6,000 − 600 ＝ 5,400円。このジャケットを「8,000円の財産」と考えるのは言いすぎで、本当の価値は5,400円。', '逆に12,000円で売れそうでも、売れるまでは「12,000円の財産」とは言わない。買った値段の8,000円のまま。']
        },
        {
          title: 'ルール: 原価と NRV の低い方',
          paras: ['IAS 2 では、在庫は原価（cost）と正味実現可能価額（net realisable value、NRV）の低い方で評価する。'],
          list: ['原価の方が低い → 原価のまま（もうけはまだ計上しない）', 'NRV の方が低い → NRV まで下げる（損はすぐ計上する）'],
          formula: 'inventory ＝ lower of cost and NRV',
          note: { kind: 'tip', text: '原価の計算方法として IAS 2 が認めるのは FIFO（先入先出）と加重平均（AVCO）。LIFO（後入先出）は認められない。くわしくは後のレッスンで学ぶ。' }
        },
        {
          title: '正味実現可能価額（NRV）とは',
          paras: ['商品を売ったときに、最終的に手元に残ると見込まれる金額。'],
          formula: 'NRV ＝ 見込み売価 − 完成までの費用 − 売るための費用',
          list: ['見込み売価: estimated selling price', '完成までの費用: 修理、仕上げなど（costs of completion）', '売るための費用: 販売手数料、配送料など（costs necessary to make the sale）']
        },
        {
          title: 'NRV が原価より下がるのはどんなとき？',
          list: ['商品が傷んだ・壊れた', '流行遅れになった・古くなった', '売価が下がった（値下げ、競争）', '修理や販売にかかる費用が増えた'],
          after: '年末の後、決算をまとめる前に安い値段で売れたら、それは年末の時点の NRV の証拠になる。年末の後に分かった情報も使って判断する。',
          note: { kind: 'tip', text: '下げた後に NRV がまた上がったら、上がった分だけ戻す。ただし元の原価が上限。例: 原価 $800 を $650 に下げた後、NRV が $900 に戻ったら $800 まで（$900 ではない）。' }
        },
        {
          title: '例題: 品目ごとに評価する',
          example: {
            problem: 'Tシャツ屋の期末在庫は3品目。①無地T: 原価 $2,000、売価 $3,000、販売費 $100。②汚れのあるプリントT: 原価 $1,500、クリーニング $200 をすれば $1,600 で売れる。販売手数料は売価の10%。③去年のデザイン: 原価 $800、売価 $700、配送料 $50。期末在庫の金額は？',
            steps: ['①無地T: NRV ＝ 3,000 − 100 ＝ 2,900。原価 2,000 の方が低い → $2,000', '②プリントT: 手数料 ＝ 1,600 × 10% ＝ 160', '②NRV ＝ 1,600 − 200 − 160 ＝ 1,240。原価 1,500 より低い → $1,240', '③去年のデザイン: NRV ＝ 700 − 50 ＝ 650。原価 800 より低い → $650', '合計: 2,000 ＋ 1,240 ＋ 650 ＝ 3,890'],
            answer: '期末在庫 $3,890（原価の合計 $4,300 より $410 低い）'
          }
        },
        {
          title: '合計どうしで比べない',
          table: {
            caption: '品目ごとに低い方を選んで足す',
            head: ['品目', '原価 / NRV', '採用する額'],
            rows: [
              ['①無地T', '$2,000 / $2,900', '$2,000'],
              ['②プリントT', '$1,500 / $1,240', '$1,240'],
              ['③去年のデザイン', '$800 / $650', '$650']
            ],
            total: ['合計', '$4,300 / $4,790', '$3,890']
          },
          after: '合計どうしで比べると、低い方は原価の $4,300 になってしまう。これは間違い。値上がりした①の余裕で、値下がりした②③の損が隠れてしまうから。'
        },
        {
          title: '評価を下げると利益はどうなる？',
          paras: ['すでに期末在庫を原価 $4,300 で記録していたなら、差額 $410 を下げる。売上原価が $410 増え、利益が $410 減る。'],
          journal: [
            { side: 'Dr', account: 'Cost of sales（売上原価）', amount: '410' },
            { side: 'Cr', account: 'Inventory（棚卸資産）', amount: '410' }
          ],
          after: '最初から $3,890 で期末在庫を記録しても（Dr Inventory 3,890 / Cr Cost of sales 3,890）、結果は同じになる。'
        },
        {
          title: 'なぜ？ 損は早く、もうけは売れてから',
          paras: ['資産は「将来お金になる見込みの額」より大きく載せてはいけない。$1,500 と書いても $1,240 しか戻らないなら、読む人に実際より良く見せてしまう。', 'だから見込みの損はすぐ計上し、見込みのもうけは売れるまで待つ。この慎重な姿勢を慎重性（prudence）という。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '合計どうしで比べてしまう（品目ごとが正しい）。売価から修理費や販売費を引き忘れる。今買い直したらいくらか（replacement cost、再調達原価）を NRV と取り違える。売価が原価より高いのに、売価まで上げてしまう。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['在庫は原価と NRV の低い方で評価する（品目ごと）', 'NRV ＝ 見込み売価 − 完成までの費用 − 売るための費用', '評価を下げた分だけ売上原価が増え、利益が減る']
        },
        {
          title: '英単語',
          words: [
            ['net realisable value (NRV)', '', '正味実現可能価額'],
            ['lower of cost and NRV', '', '原価と NRV の低い方'],
            ['estimated selling price', '', '見込み売価'],
            ['costs of completion', '', '完成までの費用'],
            ['costs necessary to make the sale', '', '売るための費用'],
            ['write-down', 'ライトダウン', '評価の切り下げ（評価損）'],
            ['replacement cost', '', '再調達原価（NRV ではない）'],
            ['prudence', 'プルーデンス', '慎重性']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is the definition of net realisable value?', choices: ['Estimated selling price less estimated costs of completion and costs necessary to make the sale', 'The cost of replacing the item at the year end', 'Estimated selling price less the original cost of the item', 'Original cost plus estimated costs of completion'], answer: 0, explain: 'NRV は売ったときに手元に残る見込みの額。買い直す値段（replacement cost）ではない。売価から原価を引いたものは「もうけ」で、NRV ではない。' },
        { q: 'At the year end a business holds three lines of inventory: X (cost $1,200, NRV $1,500), Y (cost $900, NRV $700) and Z (cost $2,000, NRV $1,800). At what amount should inventory be stated?', choices: ['$3,700', '$4,000', '$4,100', '$4,400'], answer: 0, explain: '品目ごとに低い方: 1,200 ＋ 700 ＋ 1,800 ＝ 3,700。$4,000 は NRV の合計で、合計どうしで比べた答え（原価の合計 4,100 と NRV の合計 4,000 の低い方）。$4,100 は原価の合計のまま、$4,400 は品目ごとに高い方を選んだ答え。' },
        { q: '原価 $30 の商品が200個ある。売価は1個 $32 だが、売る前に1個 $3 の修理と、1個 $2 の配送料がかかる。期末在庫の金額は？', type: 'number', answer: 5400, unit: '$', explain: 'NRV は1個 32 − 3 − 2 ＝ 27。原価 30 より低いので 27 を使う: 27 × 200 ＝ 5,400。' },
        { q: 'Last year an item costing $500 was written down to its NRV of $350. It is still unsold at this year end, and its NRV has risen to $560. At what amount should the item be stated this year?', choices: ['$500', '$560', '$350', '$410'], answer: 0, explain: 'NRV が戻ったので、去年下げた $150 を戻す（今年の売上原価が $150 減り、利益が増える）。ただし上限は元の原価 $500。$560 は原価を超えて上げた答え（もうけを先に計上してしまう）。$350 は戻し忘れ。$410 は原価を超えた分 $60 だけ戻した答え。' },
        { q: 'Closing inventory at cost is $12,000. This includes an item that cost $1,000. The item can be sold for $700, but selling costs of $100 will be incurred. At what amount should closing inventory be stated?', choices: ['$11,600', '$11,700', '$11,000', '$12,000'], answer: 0, explain: 'その品目の NRV は 700 − 100 ＝ 600。原価との差 400 を下げる: 12,000 − 400 ＝ 11,600。$11,700 は販売費を引き忘れた答え、$11,000 は品目を丸ごと消した答え。' },
        { q: '期末在庫の評価を $300 下げた。その年の利益は？', choices: ['$300 減る', '$300 増える', '変わらない（資産だけ減る）', '翌年に $300 減る'], answer: 0, explain: '期末在庫が減ると、その分だけ売上原価が増える（Dr Cost of sales / Cr Inventory）。だから利益も $300 減る。資産だけでなく利益にも響く。' }
      ]
    }
  ],
  cards: [
    { id: 'L33-1', lesson: 'L33', q: '棚卸資産（inventory）とは？', a: '売るために持っている商品。年末の売れ残り' },
    { id: 'L33-2', lesson: 'L33', q: '仕入のうち、その年の費用になるのは？', a: '売れた分だけ（売上原価 cost of sales）' },
    { id: 'L33-3', lesson: 'L33', q: 'なぜ売れ残りを今年の費用にしない？', a: '今年の売上に貢献していないから。売上と、そのための費用を同じ年に並べる（matching）' },
    { id: 'L33-4', lesson: 'L33', q: '期末在庫は財政状態計算書のどこに載る？', a: '流動資産（current asset）' },
    { id: 'L33-5', lesson: 'L33', q: '今年の期末在庫は、来年どうなる？', a: '来年の期首在庫になり、売れた年の売上原価になる' },
    { id: 'L33-6', lesson: 'L33', q: '期末在庫を多く数えすぎると、利益は？', a: '大きく出すぎる（売上原価が小さくなるため）。翌年の利益は同じ額だけ小さく出る' },
    { id: 'L34-1', lesson: 'L34', q: '売上原価の式は？', a: 'opening inventory ＋ purchases − closing inventory' },
    { id: 'L34-2', lesson: 'L34', q: '売上総利益（gross profit）の式は？', a: 'revenue − cost of sales' },
    { id: 'L34-3', lesson: 'L34', q: '期末在庫の仕訳は？', a: 'Dr Inventory（財政状態計算書） / Cr Cost of sales（損益計算書）' },
    { id: 'L34-4', lesson: 'L34', q: '期末在庫が出てくる2か所は？', a: '損益計算書の売上原価（マイナス）と、財政状態計算書の流動資産' },
    { id: 'L34-5', lesson: 'L34', q: 'carriage inwards と carriage outwards の扱いは？', a: 'inwards は売上原価に入れる。outwards は販売費' },
    { id: 'L34-6', lesson: 'L34', q: '年末より後に棚卸したとき、年末の在庫を求めるには？', a: 'その間に売れた分を原価で足し（売価なら原価に直す）、入荷した分を引く' },
    { id: 'L34-7', lesson: 'L34', q: 'オーナーが商品を自分用に持ち帰ったときの仕訳は？', a: '原価で Dr Drawings / Cr Purchases' },
    { id: 'L35-1', lesson: 'L35', q: '在庫の原価（IAS 2）とは？', a: '今の場所・今の状態にするまでの費用（購入原価＋加工費＋その他）' },
    { id: 'L35-2', lesson: 'L35', q: '購入原価に入るものは？', a: '仕入値（取引値引き後）、輸入関税、仕入運賃、荷役の費用' },
    { id: 'L35-3', lesson: 'L35', q: '加工費に入るものは？', a: '直接労務費（作る人の給料）と製造間接費' },
    { id: 'L35-4', lesson: 'L35', q: '在庫の原価に入れないものは？', a: '保管料、販売費、管理費、異常な仕損、取り戻せる売上税' },
    { id: 'L35-5', lesson: 'L35', q: 'なぜ広告費は在庫の原価に入れない？', a: '商品の価値を増やさない「売るための費用」だから。その年の費用にする' },
    { id: 'L35-6', lesson: 'L35', q: '定価 $1,000、取引値引き10%、仕入運賃 $50。在庫の原価は？', a: '$950（1,000 − 100 ＋ 50）' },
    { id: 'L36-1', lesson: 'L36', q: '在庫はどう評価する？', a: '原価と正味実現可能価額（NRV）の低い方。品目ごとに比べる' },
    { id: 'L36-2', lesson: 'L36', q: 'NRV の式は？', a: '見込み売価 − 完成までの費用 − 売るための費用' },
    { id: 'L36-3', lesson: 'L36', q: '売価が原価より高いとき、在庫の金額は？', a: '原価のまま。もうけは売れるまで計上しない（prudence）' },
    { id: 'L36-4', lesson: 'L36', q: '在庫を NRV まで下げると、利益は？', a: '下げた分だけ売上原価が増え、利益が減る' },
    { id: 'L36-5', lesson: 'L36', q: '合計どうしで比べてはいけない理由は？', a: '値下がりした品目の損が、値上がりした品目の余裕で隠れてしまうから' },
    { id: 'L36-6', lesson: 'L36', q: 'replacement cost は NRV？', a: '違う。今買い直す値段（再調達原価）で、在庫の評価には使わない' },
    { id: 'L36-7', lesson: 'L36', q: '一度 NRV まで下げた在庫の NRV が、また上がったら？', a: '上がった分だけ戻す（利益が増える）。ただし元の原価が上限' }
  ]
});
