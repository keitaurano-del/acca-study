(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 133,
  part: 9,
  partTitle: '短期の意思決定',
  lessons: [
    {
      id: 'M133',
      no: 133,
      title: '関連原価とは: 将来の、現金の、増える原価',
      goal: '関連原価の3つの条件を説明し、決定に関係する原価と関係しない原価を見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(a)(i)'],
      slides: [
        {
          title: '遊園地に行くか、迷うとき',
          paras: ['週末に遊園地へ行くか迷っている。先月買った年間パス（2万円）は、行っても行かなくても戻らない。毎月のスマホ代も変わらない。', '変わるのは、行けば増える電車代とお昼代だけだ。行くかどうかは、この「行くと変わる分」だけで比べればよい。会社の決定も、これと同じ考え方をする。']
        },
        {
          title: '関連原価（relevant cost）とは',
          paras: ['ある決定によって変わる、これからの現金の出入り。ACCA は「決定の直接の結果として生じる、将来の、増える（incremental）現金の流れ」と定義する。'],
          list: ['将来（future）: これから起きる。もう払った分は入らない', '現金（cash flow）: 実際にお金が動く。減価償却費は入らない', '増える（incremental）: 決定で増える・減る。どの案でも同じ額なら入らない'],
          formula: '関連原価 ＝ 将来の、現金の、決定で増える（減る）原価'
        },
        {
          title: '3つ全部を満たすものだけ',
          svg: `<svg viewBox="0 0 440 220" role="img" aria-label="未来に起きる、現金が動く、決定で増減する、の3つの条件をすべて満たすものが関連原価になる。関連原価を強調" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">3つの条件をすべて満たす</text><rect x="20" y="44" width="120" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="72" text-anchor="middle" fill="var(--ink)">未来に起きる</text><text x="80" y="96" text-anchor="middle" font-size="12.5" fill="var(--quiet)">future</text><rect x="160" y="44" width="120" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="72" text-anchor="middle" fill="var(--ink)">現金が動く</text><text x="220" y="96" text-anchor="middle" font-size="12.5" fill="var(--quiet)">cash flow</text><rect x="300" y="44" width="120" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="72" text-anchor="middle" fill="var(--ink)">決定で増減する</text><text x="360" y="96" text-anchor="middle" font-size="12.5" fill="var(--quiet)">incremental</text><line x1="80" y1="108" x2="80" y2="134" stroke="var(--edge)" stroke-width="1.5"/><polygon points="74,132 86,132 80,142" fill="var(--edge)"/><line x1="220" y1="108" x2="220" y2="134" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,132 226,132 220,142" fill="var(--edge)"/><line x1="360" y1="108" x2="360" y2="134" stroke="var(--edge)" stroke-width="1.5"/><polygon points="354,132 366,132 360,142" fill="var(--edge)"/><rect x="20" y="146" width="400" height="60" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="171" text-anchor="middle" font-weight="600" fill="var(--ink)">関連原価（relevant cost）</text><text x="220" y="194" text-anchor="middle" font-size="14" fill="var(--ink)">決定のときに比べるのは、これだけ</text></svg>`,
          caption: '1つでも欠けたら、その原価は決定に関係しない（non-relevant）。'
        },
        {
          title: '関連しない原価',
          list: ['埋没原価（sunk cost）: もう払った過去の支出', 'コミット原価（committed cost）: 将来払うが、契約などで変えられない支出', '現金が動かない費用: 減価償却費（depreciation）など', '名目上の原価（notional cost）: 見なし家賃・見なし利息など、帳簿の上だけの費用', '配賦された一般の固定費（general fixed overheads）: どの案でも総額が同じ本社費など', '昔の購入価格（historical cost）']
        },
        {
          title: 'たこ焼き屋の例: イベントに出店する？',
          paras: ['本店は日曜の夕方は休み。その時間に地域のイベントへ出店するか考える。売上の見込みは $500。'],
          table: { caption: '出店に関する原価', head: ['項目', '$', '関連？'], rows: [['イベントの出店料（新たに払う）', '150', '関連する'], ['追加で買う材料', '120', '関連する'], ['臨時アルバイトの給料', '80', '関連する'], ['屋台の減価償却費', '30', '関連しない'], ['先週払った下見の交通費', '20', '関連しない'], ['本店の家賃の配賦分', '60', '関連しない']] },
          after: '関連原価は $150 ＋ $120 ＋ $80 ＝ $350。出店すれば現金が $500 − $350 ＝ $150 増えるので、出店するほうがよい。6つ全部の $460 で比べて「$40 しか残らない」と考えるのは誤り。'
        },
        {
          title: 'なぜ？ 将来の現金だけを見る',
          paras: ['決定で変えられるのは未来だけだ。過去に払ったお金は、どの案を選んでも戻らない。比べても答えは変わらない。', '会社が豊かになるかは、最後は現金で決まる。減価償却費や配賦された固定費は利益の計算では大切だが、この決定で総額が変わらない。比べる数字に入れると、得な案を捨ててしまうことがある。']
        },
        {
          title: '差額原価と回避可能原価',
          list: ['差額原価（differential cost）: 2つの案の原価の差。関連原価は、案と案の差だけを見る考え方', '回避可能原価（avoidable cost）: その案をやめれば払わずにすむ原価。関連する', '回避不能原価（unavoidable cost）: やめても払い続ける原価。関連しない'],
          note: { kind: 'tip', text: '1行ずつ「この案を選ぶと、選ばないときと比べて現金がいくら変わる？」と問う。答えが0なら、その行は関連しない。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「固定費はいつも関係ない」「変動費はいつも関係ある」は誤り。この決定のために新しく借りる倉庫の家賃（固定費）は関連する。手が空いていても払い続ける給料は関連しない。基準は費用の種類ではなく「この決定で現金が変わるか」。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['関連原価＝将来の、現金の、決定で増える（減る）原価', '埋没原価・コミット原価・減価償却費・名目上の原価・配賦された一般の固定費は関連しない', '比べるのは案と案の差。やめれば消える原価（回避可能原価）は関連する']
        },
        {
          title: '英単語',
          words: [
            ['relevant cost', 'レレバント コスト', '関連原価（決定で変わる将来の現金の原価）'],
            ['incremental cost', 'インクリメンタル コスト', '決定によって増える原価'],
            ['differential cost', 'ディファレンシャル コスト', '差額原価（2つの案の原価の差）'],
            ['avoidable / unavoidable cost', 'アボイダブル', '回避可能原価 / 回避不能原価'],
            ['sunk cost', 'サンク コスト', '埋没原価（もう払った原価）'],
            ['committed cost', 'コミッティッド コスト', 'コミット原価（払うと決まっている原価）'],
            ['notional cost', 'ノーショナル コスト', '名目上の原価（見なしの原価）'],
            ['non-relevant cost', '', '決定に関係しない原価']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a relevant cost for a decision on whether to accept a one-off order?', choices: ['Depreciation on a machine that will be used for the order', 'A share of head office costs apportioned to the order', 'Extra materials that must be purchased if the order is accepted', 'Market research carried out last month'], answer: 2, explain: '注文を受けたときだけ買う材料は、将来の、現金の、増える原価なので関連する。減価償却費は現金が動かない。本社費の配賦は受けても総額が変わらない。先月の市場調査は埋没原価。' },
        { q: 'Which of the following best describes a relevant cost?', choices: ['Any cost recorded in the accounting records for the period', 'A future, incremental cash flow arising as a direct consequence of a decision', 'A cost that has already been incurred and cannot be recovered', 'The full cost of a product, including absorbed fixed overheads'], answer: 1, explain: '関連原価は将来の、増える、現金の流れ。帳簿の全部の費用には減価償却費や配賦額も入る。もう払って戻らない原価は埋没原価で、関連原価の反対。全部原価には配賦された固定費が入るので、決定には使わない。' },
        { q: 'たこ焼き屋が別のイベントに出店するか考える。出店料 $200、追加の材料 $90、臨時スタッフ $70、屋台の減価償却費 $25、本店の家賃の配賦分 $40。関連原価の合計は？', type: 'number', answer: 360, unit: '$', explain: '関連するのは新しく払う出店料 $200 ＋ 材料 $90 ＋ 臨時スタッフ $70 ＝ $360。減価償却費は現金が動かず、家賃の配賦分は出店してもしなくても同じなので入れない。全部足した $425 は誤り。' },
        { q: 'ある注文のためだけに、倉庫を月 $3,000 で新しく借りる必要がある。この家賃は関連原価になる？', choices: ['なる。決定によって新しく現金が出ていくから', 'ならない。固定費だから', 'ならない。家賃は配賦される費用だから', 'ならない。毎月同じ額だから'], answer: 0, explain: '固定費でも、この決定のために新しく払うなら関連原価になる。基準は「決定で現金が変わるか」。毎月同じ額かどうか、固定費かどうかは関係ない。' },
        { q: 'ある製品をやめると、その製品専任の監督者の給料 $20,000 がなくなる。工場全体の家賃から配賦されていた $15,000 は、やめても会社が払い続ける。やめる判断で関連するのは？', choices: ['家賃の配賦分 $15,000 だけ', '両方の合計 $35,000', 'どちらも固定費なので関連しない', '監督者の給料 $20,000 だけ'], answer: 3, explain: '監督者の給料はやめれば払わずにすむ回避可能原価なので関連する。家賃は工場全体で払い続ける回避不能原価なので関連しない。どちらも固定費だが、扱いは違う。' }
      ]
    },
    {
      id: 'M134',
      no: 134,
      title: '埋没原価・コミット原価・機会原価',
      goal: '埋没原価・コミット原価・機会原価・名目上の原価を見分け、関連原価を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(a)(i)'],
      slides: [
        {
          title: 'つまらない映画、出る？ 見続ける？',
          paras: ['1,800円の映画を見始めたら、30分でつまらないと分かった。払った1,800円は、出ても見続けても戻らない。これを埋没原価という。', '出れば、読みたかった本を本屋で読める。見続けると、その楽しみをあきらめることになる。あきらめた、次に良い選択の価値を機会原価という。']
        },
        {
          title: '4つの原価',
          list: ['埋没原価（sunk cost）: 過去にもう払った原価。どの案でも戻らない', 'コミット原価（committed cost）: 将来払うが、契約などでもう払うことが決まっている原価', '機会原価（opportunity cost）: ある案を選ぶことであきらめる、次に良い案から得られたはずの利益', '名目上の原価（notional cost）: 実際には現金が出ない、計算上の原価（自社の建物の見なし家賃、見なし利息など）']
        },
        {
          title: '関連するのはどれ？',
          table: { caption: '判断の基準は「決定で将来の現金が変わるか」', head: ['原価', '将来の現金は変わる？', '関連？'], rows: [['埋没原価', '変わらない（もう払った）', '関連しない'], ['コミット原価', '変わらない（払うと決定済み）', '関連しない'], ['機会原価', '変わる（入るはずの現金が消える）', '関連する'], ['名目上の原価', '変わらない（帳簿の上だけ）', '関連しない'], ['回避可能原価', '変わる（払わずにすむ）', '関連する']] },
          after: '名目上の原価でも、本当にあきらめる収入（例: 他社に貸せば入る家賃）があるなら、その額を機会原価として入れる。'
        },
        {
          title: 'なぜ？ 帳簿にない機会原価が入る',
          paras: ['機会原価は帳簿に一度も載らない。それでも関連原価になるのは、ある案を選ぶと、別の案で入るはずの現金が入らなくなるからだ。現金の差で比べるなら、入ってこない現金も、出ていく現金と同じ重さになる。', 'コミット原価は将来の支出だが、どの案でも払う。差が出ないので、比べる意味がない。「将来か」だけでなく「決定で変わるか」が鍵になる。']
        },
        {
          title: '例題1: 1回だけの契約',
          example: {
            problem: '契約を $25,000 で受けるか考えている。①先月払った事前調査費 $3,000 ②今いる監督者の給料の配分 $4,000（受けても受けなくても同じ）③使う機械の減価償却費 $1,500 ④本社費の配賦 $2,500 ⑤追加で買う材料 $9,000 ⑥追加の電力 $800 ⑦使う倉庫の空き場所は、受けなければ他社に $2,000 で貸せる。関連原価の合計と、受けると増える現金は？',
            steps: ['① 事前調査費: 埋没原価 → $0', '② 監督者の給料: 受けても変わらない → $0', '③ 減価償却費・④ 本社費の配賦: 現金が変わらない → $0', '⑤ 材料 $9,000 と ⑥ 電力 $800: 新しく払う → 関連する', '⑦ 賃貸収入 $2,000 をあきらめる: 機会原価 → 関連する', '関連原価: $9,000 ＋ $800 ＋ $2,000 ＝ $11,800', '受けると: $25,000 − $11,800 ＝ $13,200 現金が増える'],
            answer: '関連原価 $11,800。受けると現金が $13,200 増えるので、受けるほうがよい'
          }
        },
        {
          title: '帳簿の費用で比べると、判断を誤る',
          paras: ['例題1の①〜⑥を全部足すと $20,800。もし価格が $18,000 なら、帳簿の費用では「$2,800 の損」に見えて、断ってしまう。', '関連原価で見れば $18,000 − $11,800 ＝ $6,200 の現金が増える。受けたほうが会社は豊かになる。']
        },
        {
          title: '例題2: 持っている機械を使う',
          example: {
            problem: '使っていない古い機械がある。帳簿価額 $8,000、年間の減価償却費 $2,000。今売れば $5,000、1年の計画に使った後なら $3,500 で売れる。この機械を計画に使う関連原価は？（お金の時間価値は考えない）',
            steps: ['帳簿価額 $8,000: 過去の購入額の残り → 埋没原価なので使わない', '減価償却費 $2,000: 現金が動かない → 使わない', '使わなければ、今 $5,000 で売れる', '使えば、1年後に $3,500 でしか売れない', '関連原価: $5,000 − $3,500 ＝ $1,500（売却価値が減る分）'],
            answer: '$1,500'
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '機会原価に入れるのは「次に良い案」1つだけ。あきらめる案が2つあっても、足さずに大きい方を使う。また、将来の支出でも、契約で決まっていて変えられないコミット原価は入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['埋没原価（過去）とコミット原価（変えられない将来）は関連しない', '機会原価（次に良い案であきらめる利益）は、帳簿になくても関連する', '帳簿価額や減価償却費ではなく、決定で変わる現金（売却価値の差など）を見る']
        },
        {
          title: '英単語',
          words: [
            ['sunk cost', 'サンク コスト', '埋没原価'],
            ['committed cost', 'コミッティッド コスト', 'コミット原価（払うと決まっている原価）'],
            ['opportunity cost', 'オポチュニティ コスト', '機会原価（あきらめる、次に良い案の利益）'],
            ['notional cost', 'ノーショナル コスト', '名目上の原価（見なし家賃・見なし利息）'],
            ['next best alternative', '', '次に良い案'],
            ['benefit forgone', 'フォーゴーン', 'あきらめる利益'],
            ['carrying amount / disposal value', '', '帳簿価額 / 売却価値']
          ]
        }
      ],
      quiz: [
        { q: 'A company is deciding whether to accept a one-off contract. Which of the following is a sunk cost?', choices: ['Materials that must be bought for the contract', 'Rent that could be earned by letting the space instead', 'Overtime that must be paid to complete the contract', 'A feasibility study carried out last month'], answer: 3, explain: '先月の調査はもう払っていて、受けても断っても戻らないので埋没原価。材料と残業代は受けると新しく払う関連原価。貸せば入る家賃は機会原価で、これも関連する。' },
        { q: 'A company owns a machine with a carrying amount of $12,000. If it is not used for a new project, it could be sold now for $7,000. If it is used, it could be sold for $4,000 at the end of the project. Ignoring the time value of money, what is the relevant cost of using the machine on the project?', type: 'number', answer: 3000, unit: '$', explain: '使うことで売却価値が $7,000 から $4,000 に下がる。関連原価は $7,000 − $4,000 ＝ $3,000。帳簿価額 $12,000 は埋没原価なので使わない。$7,000 だけ答えるのは、後で $4,000 で売れることを忘れている。' },
        { q: 'A business has unused factory space. If a new product is not made, the space could be let to another company for $6,000 a year or used for storage, saving $4,000 a year in warehouse rent. What is the opportunity cost of using the space for the new product?', choices: ['$4,000', '$6,000', '$10,000', '$0'], answer: 1, explain: '機会原価は次に良い案1つの利益。貸す（$6,000）と倉庫に使う（$4,000）は同時にできないので、大きい $6,000。足して $10,000 は誤り。空いているから $0 というのも、貸せる以上は誤り。' },
        { q: 'コミット原価（committed cost）の説明として正しいのは？', choices: ['過去にもう払ってしまった原価', 'ある案を選ぶことであきらめる、別の案の利益', '将来払うが、契約などですでに払うことが決まっていて、決定で変わらない原価', '実際には現金が出ない、計算上の見なしの原価'], answer: 2, explain: 'コミット原価は将来の支出だが、もう変えられない。だから関連しない。過去の支出は埋没原価、あきらめる利益は機会原価、見なしの原価は名目上の原価。' },
        { q: '契約を $14,000 で受けるか考えている。済んだ事前調査 $2,000、追加の材料 $6,500、機械の減価償却費 $1,200、受けると他社に貸せなくなる倉庫の家賃収入 $1,500、本社費の配賦 $1,800。受けると現金はいくら増える？', type: 'number', answer: 6000, unit: '$', explain: '関連原価は材料 $6,500 ＋ あきらめる家賃収入 $1,500 ＝ $8,000。$14,000 − $8,000 ＝ $6,000。事前調査は埋没原価、減価償却費と本社費の配賦は現金が変わらないので入れない。' }
      ]
    },
    {
      id: 'M135',
      no: 135,
      title: '材料の関連原価: 在庫があるとき・他に使い道があるとき',
      goal: '在庫の有無や使い道に応じて、材料の関連原価を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(a)(ii)'],
      slides: [
        {
          title: '冷蔵庫のチーズは何円分？',
          paras: ['冷蔵庫に、去年1パック300円で買ったチーズがある。今は同じチーズが400円する。今夜これでピザを作ると、何円分を使ったことになる？', 'いつも使うチーズなら、明日400円で買い直すので400円。もう使わず捨てるしかないなら0円。友だちが200円で買ってくれるなら200円。どの場合も、買ったときの300円は関係ない。']
        },
        {
          title: '材料の関連原価のルール',
          table: { caption: 'materials の関連原価', head: ['状況', '関連原価'], rows: [['在庫にない（これから買う）', '今の購入価格'], ['在庫にあり、いつも使う材料', '今の購入価格（使えば買い直す）'], ['在庫にあり、他に使い道がない', '売却・処分の価値'], ['在庫にあり、他に使い道がある', '売却価値と、他の用途で得する額の高い方'], ['在庫が足りない分', '今の購入価格']] },
          after: '今の購入価格は replacement cost（買い直す値段）ともいう。昔の購入価格（historical cost）は、どの場合も関連しない。'
        },
        {
          title: '迷ったら順番に問う',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="在庫にあるか、いつも使う材料か、他に使い道があるかを順に問う流れ図。在庫になければ今の購入価格、いつも使うなら今の購入価格、他に使い道があれば売却価値と他の用途で得する額の高い方を強調、なければ売却・処分の価値" font-size="15"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">在庫の材料の関連原価</text><rect x="20" y="44" width="180" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="69" text-anchor="middle" fill="var(--ink)">在庫にある？</text><line x1="200" y1="64" x2="252" y2="64" stroke="var(--edge)" stroke-width="1.5"/><polygon points="250,58 260,64 250,70" fill="var(--edge)"/><text x="230" y="56" text-anchor="middle" font-size="14" fill="var(--quiet)">いいえ</text><rect x="260" y="44" width="160" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="340" y="61" text-anchor="middle" fill="var(--ink)">今の購入価格</text><text x="340" y="78" text-anchor="middle" font-size="12.5" fill="var(--quiet)">current purchase price</text><line x1="110" y1="84" x2="110" y2="102" stroke="var(--edge)" stroke-width="1.5"/><polygon points="104,100 116,100 110,110" fill="var(--edge)"/><text x="120" y="101" font-size="14" fill="var(--quiet)">はい</text><rect x="20" y="110" width="180" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="135" text-anchor="middle" fill="var(--ink)">いつも使う材料？</text><line x1="200" y1="130" x2="252" y2="130" stroke="var(--edge)" stroke-width="1.5"/><polygon points="250,124 260,130 250,136" fill="var(--edge)"/><text x="230" y="122" text-anchor="middle" font-size="14" fill="var(--quiet)">はい</text><rect x="260" y="110" width="160" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="340" y="126" text-anchor="middle" fill="var(--ink)">今の購入価格</text><text x="340" y="146" text-anchor="middle" font-size="13" fill="var(--quiet)">使えば買い直す</text><line x1="110" y1="150" x2="110" y2="168" stroke="var(--edge)" stroke-width="1.5"/><polygon points="104,166 116,166 110,176" fill="var(--edge)"/><text x="120" y="167" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="176" width="180" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="201" text-anchor="middle" fill="var(--ink)">他に使い道がある？</text><line x1="200" y1="196" x2="252" y2="196" stroke="var(--edge)" stroke-width="1.5"/><polygon points="250,190 260,196 250,202" fill="var(--edge)"/><text x="230" y="188" text-anchor="middle" font-size="14" fill="var(--quiet)">はい</text><rect x="260" y="170" width="160" height="52" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="340" y="192" text-anchor="middle" font-size="14" fill="var(--ink)">売却価値と、他の用途</text><text x="340" y="212" text-anchor="middle" font-size="14" fill="var(--ink)">で得する額の高い方</text><line x1="110" y1="216" x2="110" y2="234" stroke="var(--edge)" stroke-width="1.5"/><polygon points="104,232 116,232 110,242" fill="var(--edge)"/><text x="120" y="233" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="242" width="180" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="264" text-anchor="middle" fill="var(--ink)">売却・処分の価値</text><text x="110" y="283" text-anchor="middle" font-size="12.5" fill="var(--quiet)">scrap / resale value</text></svg>`,
          caption: '必要な量が在庫より多いときは、足りない分を今の購入価格で計算し、在庫の分と足す。'
        },
        {
          title: 'なぜ？ 使うと現金がどう変わるか',
          paras: ['いつも使う材料をこの仕事に使えば、すぐに買い直す。だから今の値段の現金が出ていく。', 'いつもは使わない材料なら、この仕事に使うと、売れば入ったはずの現金や、別の仕事で浮いたはずのお金をあきらめる（機会原価）。会社は得な方を選ぶはずなので、高い方を使う。昔の購入価格は埋没原価なので入らない。']
        },
        {
          title: '例題1: 在庫が足りず、他に使い道もある',
          example: {
            problem: '契約に材料X が 500kg 要る。X は 300kg 在庫がある（買ったときは1kg $4）。今の購入価格は1kg $6。X はいつもは使わない材料で、売れば1kg $2。ただし別の仕事で材料Y の代わりに使え、そのときは1kg あたり $3.50 得をする。X の関連原価は？',
            steps: ['在庫の 300kg: いつもは使わない → 売却価値 $2 と他の用途 $3.50 の高い方、$3.50', '300kg × $3.50 ＝ $1,050', '足りない 200kg: 新しく買う → 今の購入価格 $6', '200kg × $6 ＝ $1,200', '合計: $1,050 ＋ $1,200 ＝ $2,250', '買ったときの $4 は埋没原価なので使わない'],
            answer: '$2,250'
          }
        },
        {
          title: '例題2: いつも使う材料',
          example: {
            problem: '材料Z が 400kg 要る。Z はいつも使う材料で、在庫が 250kg ある（買ったときは1kg $3）。今の購入価格は1kg $3.60、売れば1kg $1。Z の関連原価は？',
            steps: ['いつも使う材料 → 使った分はすぐ買い直す', 'だから在庫の 250kg も、足りない 150kg も、全部今の購入価格 $3.60', '400kg × $3.60 ＝ $1,440'],
            answer: '$1,440（売却価値 $1 も、買ったときの $3 も使わない）'
          }
        },
        {
          title: '処分にお金がかかる材料',
          paras: ['使い道がなく、捨てるのに費用がかかる在庫もある。例えば処分に $500 かかる材料を仕事に使えば、その $500 を払わずにすむ。'],
          note: { kind: 'tip', text: 'このとき関連原価はマイナス（−$500）になる。使うことで現金が $500 浮く、という意味。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '在庫の材料に、買ったときの値段（historical cost）を使うのは誤り。また、いつも使う材料に売却価値を使うのも誤り。いつも使うなら、使った分は買い直すので今の購入価格になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['在庫にない・いつも使う材料 → 今の購入価格（買い直す値段）', 'いつもは使わない在庫 → 売却価値と他の用途で得する額の高い方（使い道がなければ売却・処分の価値）', '在庫が足りない分は今の購入価格。昔の購入価格は使わない']
        },
        {
          title: '英単語',
          words: [
            ['current purchase price', '', '今の購入価格'],
            ['replacement cost', 'リプレイスメント コスト', '買い直す値段（再調達原価）'],
            ['historical cost', 'ヒストリカル コスト', '昔の購入価格（取得原価）'],
            ['scrap value / resale value', 'スクラップ', '処分の価値 / 売却価値'],
            ['used regularly', 'レギュラリー', 'いつも使っている'],
            ['alternative use', 'オルタナティブ', '他の使い道'],
            ['substitute', 'サブスティチュート', '代わりに使う材料']
          ]
        }
      ],
      quiz: [
        { q: 'A company needs 1,000 kg of material M for a one-off contract. It has 600 kg in inventory, which cost $5 per kg. The current purchase price is $7 per kg and the inventory could be sold for $4 per kg. Material M is not used regularly and has no other use. What is the relevant cost of material M for the contract?', type: 'number', answer: 5200, unit: '$', explain: '在庫の 600kg は使い道がないので売却価値 $4: 600 × $4 ＝ $2,400。足りない 400kg は今の購入価格 $7: 400 × $7 ＝ $2,800。合計 $5,200。在庫に $5 を使うと $5,800、全部 $7 にすると $7,000 で、どちらも誤り。' },
        { q: 'Material Q is used regularly by a company. There are 200 kg in inventory, bought at $10 per kg. The current purchase price is $12 per kg and the resale value is $8 per kg. A contract needs 200 kg of Q. What is the relevant cost of Q for the contract?', choices: ['$2,000', '$2,400', '$1,600', '$0'], answer: 1, explain: 'いつも使う材料は、使えば買い直すので今の購入価格 $12。200 × $12 ＝ $2,400。$2,000 は昔の購入価格、$1,600 は売却価値で計算している。在庫にあるから $0、も誤り。' },
        { q: '在庫に、いつもは使わない材料がある。売れば1kg $3。別の仕事で他の材料の代わりに使えば、1kg あたり $5 得をする。この材料を新しい注文に使うときの1kg の関連原価は？', choices: ['$3（売却価値）', '$8（両方の合計）', '$5（他の用途で得する額）', '$0（もう買ってあるから）'], answer: 2, explain: '使い道が2つあるときは、会社が選ぶはずの得な方、つまり高い方 $5 をあきらめることになる。売ることと他の仕事に使うことは同時にできないので、足して $8 にしない。' },
        { q: '在庫に使い道のない材料がある。そのまま捨てると処分に $300 かかる。この材料を全部、新しい注文に使う。この材料の関連原価は？', choices: ['$0', '$300', '買ったときの値段', '−$300（使えば処分費が浮く）'], answer: 3, explain: '使えば処分費 $300 を払わずにすむので、関連原価はマイナス $300（得になる）。処分費をプラスの原価として入れるのは向きが逆。買ったときの値段は埋没原価。' },
        { q: '在庫の材料の「買ったときの値段」が関連原価にならない理由は？', choices: ['過去に払った埋没原価で、どの案を選んでも戻らないから', '今の購入価格より必ず安いから', '帳簿に載っていないから', '材料費は固定費だから'], answer: 0, explain: '買ったときの値段は過去の支出（埋没原価）で、決定によって変わらない。今の値段より高いことも安いこともある。帳簿には載っている。材料費はふつう変動費。' }
      ]
    },
    {
      id: 'M136',
      no: 136,
      title: '労務費の関連原価: 手が空いているとき・足りないとき',
      goal: '手の空き具合に応じて、労務費の関連原価を計算できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(a)(ii)'],
      slides: [
        {
          title: 'お店の手伝い1時間の「本当の値段」',
          paras: ['友だちがお店で働いていて、毎日暇な時間がある。時給はそのままもらう。その暇な時間に別の作業を頼んでも、お店の支払は増えない。', '暇がなく残業してもらうなら、残業代が増える。ほかの仕事を止めて手伝ってもらうなら、その仕事でかせげたはずの利益も失う。同じ1時間でも、状況で本当の値段が変わる。']
        },
        {
          title: '労務費の関連原価のルール',
          table: { caption: 'labour の関連原価（1時間あたり）', head: ['状況', '関連原価'], rows: [['手が空いている（給料は払い続ける）', '$0（支払は増えない）'], ['人を追加で雇う・残業してもらう', '追加で払う額（臨時の時給・残業代）'], ['人手が足りず、他の仕事から回す', '時給 ＋ その仕事で失う1時間の貢献利益']] },
          after: '人手が足りないとき、方法が2つ以上（回す・残業・外から雇う）あるなら、会社は安い方を選ぶ。関連原価は、その安い方の額になる。'
        },
        {
          title: 'なぜ？ 時給と貢献利益を足す',
          paras: ['他の製品を作っていた人を回すと、その製品が作れなくなる。失うのは、その製品の売上から材料などを引いた額だ。', '他の製品の貢献利益は、給料を引いた後の数字。給料はどちらにしても払うので、失う額は「給料 ＋ 貢献利益」になる。時給 $15、他の製品の1時間の貢献利益 $10 なら、1時間回すごとに $25 を失う。']
        },
        {
          title: '例題1: 手が空いている作業者',
          example: {
            problem: '契約に、未熟練の作業者の作業が 300 時間要る。作業者には今、手の空いている時間（idle time）が 100 時間ある。給料は保証されていて、作業がなくても払う。残りは臨時の作業者を時給 $12 で雇う。未熟練の労務費の関連原価は？',
            steps: ['空いている 100 時間: 給料はどちらにしても払う → $0', '残りの 200 時間: 臨時の作業者を新しく雇う → 200 × $12 ＝ $2,400', '合計: $0 ＋ $2,400 ＝ $2,400'],
            answer: '$2,400'
          }
        },
        {
          title: '例題2: 人手が足りない作業者',
          example: {
            problem: '同じ契約に、熟練の作業者の作業も 200 時間要る。熟練の作業者は時給 $15 で、今は全員が製品P を作っている。製品P の貢献利益は、作業1時間あたり $10（給料を引いた後）。方法は2つ。A: 製品P の作業から回す。B: 残業してもらう（割増 50%、時給 $22.50）。熟練の労務費の関連原価は？',
            steps: ['A: 1時間 $15 ＋ $10 ＝ $25。200時間で $5,000', 'B: 1時間 $22.50。200時間で $4,500（製品P は減らない）', '会社は安い B を選ぶ', '熟練の労務費の関連原価: $4,500'],
            answer: '$4,500（例題1と合わせた労務費の関連原価は $2,400 ＋ $4,500 ＝ $6,900）'
          }
        },
        {
          title: '貢献利益が「1個あたり」で出てきたら',
          paras: ['試験では、失う貢献利益が製品1個あたりで書かれていることが多い。そのまま時給に足さず、まず1時間あたりに直す。'],
          formula: '1時間の貢献利益 ＝ 1個の貢献利益 ÷ 1個に必要な時間',
          after: '例: 1個の貢献利益 $30、1個に2時間かかる → 1時間 $15。時給 $16 なら、関連原価は1時間 $16 ＋ $15 ＝ $31。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '手が空いている作業者の給料を関連原価に入れるのは誤り。給料は仕事を受けても受けなくても同じ。逆に、人手が足りないときに時給だけを入れて、失う貢献利益を忘れるのもよくある間違い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['手が空いていて給料を払い続けるなら $0', '追加で雇う・残業なら、追加で払う額', '他の仕事から回すなら、時給 ＋ 失う貢献利益。方法が複数あるなら安い方']
        },
        {
          title: '英単語',
          words: [
            ['idle time', 'アイドル タイム', '手が空いている時間'],
            ['spare capacity', 'スペア キャパシティ', '使っていない余りの能力'],
            ['overtime premium', 'オーバータイム プレミアム', '残業の割増分'],
            ['time and a half', '', '1.5倍の時給（割増 50%）'],
            ['scarce / in short supply', 'スケアス', '足りない（不足している）'],
            ['contribution forgone', 'フォーゴーン', '失う貢献利益'],
            ['temporary staff', 'テンポラリー', '臨時の作業者']
          ]
        }
      ],
      quiz: [
        { q: 'Skilled labour is in short supply. Workers are paid $12 per hour and would have to be moved from making Product K, which earns a contribution of $8 per labour hour after charging labour costs. What is the relevant cost per hour of using skilled labour on a new contract?', choices: ['$8', '$12', '$20', '$0'], answer: 2, explain: '他の仕事から回すときは、時給 $12 ＋ 失う貢献利益 $8 ＝ $20。$8 だけでは、貢献利益が給料を引いた後の数字であることを忘れている。$12 だけでは、失う利益を忘れている。' },
        { q: 'A contract requires 500 hours of labour. The workforce currently has 150 hours of idle time, which is paid at the normal rate of $12 per hour. The remaining hours will be worked as overtime at time and a half. What is the relevant labour cost of the contract?', type: 'number', answer: 6300, unit: '$', explain: '空いている 150 時間はどちらにしても払うので $0。残り 350 時間は残業で、時給 $12 × 1.5 ＝ $18。350 × $18 ＝ $6,300。500 時間全部に $18 をかけた $9,000 は誤り。' },
        { q: '作業者は時給 $14 で、手が空いている時間が十分にある。給料は保証されている。新しい注文に 80 時間使うときの関連原価は？', choices: ['$1,120', '$0', '$560', '時給と貢献利益の合計'], answer: 1, explain: '給料は注文を受けても受けなくても払うので、増える現金は $0。$1,120 は 80 × $14 で、もう払うと決まっている給料を入れてしまっている。手が空いているので、失う貢献利益もない。' },
        { q: '熟練の作業が 100 時間要る。社内の作業者は時給 $20 で、回すと他の製品の貢献利益を1時間 $15 失う。外から派遣の作業者を時給 $30 で雇うこともできる。関連原価は？', type: 'number', answer: 3000, unit: '$', explain: '回すと1時間 $20 ＋ $15 ＝ $35、100 時間で $3,500。派遣は1時間 $30、100 時間で $3,000。会社は安い派遣を選ぶので、関連原価は $3,000。' },
        { q: '人手が足りないとき、他の仕事から回す以外に、残業という方法もある。関連原価はどう決める？', choices: ['高い方の方法の額', '2つの方法の平均', 'いつも時給だけ', '会社が選ぶはずの、安い方の方法の額'], answer: 3, explain: '会社は得な方を選ぶはずなので、関連原価は安い方の方法の額になる。高い方や平均を使うと、実際には払わない額で判断してしまう。' },
        { q: 'Skilled labour is paid $16 per hour and is fully employed making Product J. Product J earns a contribution of $30 per unit after charging labour costs, and each unit needs 2 hours of skilled labour. What is the relevant cost per hour of using skilled labour on a new contract?', choices: ['$31', '$46', '$15', '$16'], answer: 0, explain: 'まず1時間の貢献利益に直す: $30 ÷ 2時間 ＝ $15。関連原価は時給 $16 ＋ $15 ＝ $31。1個の $30 をそのまま足した $46 は、1時間あたりに直すのを忘れている。$15 だけ、$16 だけはそれぞれ片方を忘れている。' }
      ]
    },
    {
      id: 'M137',
      no: 137,
      title: '関連原価で決める: 特別注文と事業の中止',
      goal: '関連原価を使って、特別注文を受けるか、製品や部門をやめるかを判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(a)(ii)'],
      slides: [
        {
          title: '空いている部屋を安く貸す？',
          paras: ['家の空いている部屋を、週末だけ1泊3,000円で貸してほしいと頼まれた。家賃は毎月同じだけ払う。貸すと増えるのは、掃除とシーツの洗濯代1,000円だけだ。', '家賃を部屋数で割ると1部屋1泊4,000円になるが、それは関係ない。3,000円が1,000円より多いので、貸したほうが手元のお金は増える。']
        },
        {
          title: '特別注文（special order）',
          list: ['1回だけの注文で、ふだんより安い値段を求められることが多い', 'まず生産能力に余り（spare capacity）があるか確かめる', '増える収入と、増える原価（関連原価）を比べる', '配賦している固定費は、受けても総額が変わらないので入れない'],
          formula: '注文の収入 ＞ 関連原価 なら受ける（最低の価格 ＝ 関連原価）'
        },
        {
          title: '例題1: いすの特別注文',
          example: {
            problem: 'いす工場の1脚の売価は $50、変動費 $30、配賦している固定費 $12（全部原価 $42）。生産能力に余りがある。ある客が 1,000脚を1脚 $38 で買いたいという。特別な包装が1脚 $2、1回だけのデザイン費が $3,000 かかる。受けると利益はいくら変わる？ 最低の価格は1脚いくら？',
            steps: ['増える収入: 1,000 × $38 ＝ $38,000', '変動費: 1,000 × $30 ＝ $30,000', '包装: 1,000 × $2 ＝ $2,000', 'デザイン費: $3,000（この注文のためだけの固定費なので関連する）', '関連原価の合計: $30,000 ＋ $2,000 ＋ $3,000 ＝ $35,000', '配賦している固定費 $12 は、受けても工場の固定費の総額が変わらないので入れない', '利益の増加: $38,000 − $35,000 ＝ $3,000。最低の価格: $35,000 ÷ 1,000 ＝ $35'],
            answer: '利益は $3,000 増える。最低の価格は1脚 $35。全部原価 $42 より安くても、お金の面では受けてよい'
          }
        },
        {
          title: '例題2: 生産能力に余りがないとき',
          example: {
            problem: '例題1と同じ注文（1,000脚を1脚 $38）。ただし余っている能力は 600脚分だけで、客は 1,000脚まとめてでないと買わない。受けると、ふだんの客への販売（1脚 $50）を 400脚あきらめる。受けると利益はいくら変わる？ 最低の価格は？',
            steps: ['例題1の関連原価: $35,000', 'ふだんの1脚の貢献利益: $50 − $30 ＝ $20', 'あきらめる 400脚の貢献利益: 400 × $20 ＝ $8,000（機会原価）', '関連原価の合計: $35,000 ＋ $8,000 ＝ $43,000', '利益の変化: $38,000 − $43,000 ＝ −$5,000', '最低の価格: $43,000 ÷ 1,000 ＝ $43'],
            answer: '利益は $5,000 減るので、$38 では受けない。最低の価格は1脚 $43'
          }
        },
        {
          title: '特別注文でお金以外に考えること',
          list: ['ふだんの客が知って、同じ値下げを求めてこないか', 'この客から次の注文が来る見込みはあるか', '品質や納期を、ふだんの注文と同じように守れるか', '安い値段で売り続けると、固定費を回収できなくなる']
        },
        {
          title: '事業の中止（shutdown）',
          paras: ['赤字に見える製品や部門をやめるか（shutdown / discontinuance）も、関連原価で決める。比べるのは2つだけ。'],
          list: ['失うもの: その製品の貢献利益', '得るもの: やめれば払わずにすむ固定費（回避可能な固定費）'],
          formula: '利益の変化 ＝ 回避可能な固定費 − 失う貢献利益'
        },
        {
          title: '製品B は赤字に見える',
          table: { caption: '製品A・B・C を作る会社（$）', head: ['項目', '製品B', '会社全体'], rows: [['売上', '80,000', '300,000'], ['変動費', '(56,000)', '(186,000)'], ['貢献利益', '24,000', '114,000'], ['固定費（配賦後）', '(30,000)', '(90,000)']], total: ['利益', '(6,000)', '24,000'] },
          after: 'B の固定費 $30,000 のうち、B 専任の監督者の給料 $10,000 だけが、やめれば消える。残り $20,000 は本社費の配賦で、やめても会社は払い続ける。'
        },
        {
          title: '例題3: 製品B をやめる？',
          example: {
            problem: '上の表で、製品B をやめるべきか。やめた後の会社の利益は？',
            steps: ['失う: B の貢献利益 $24,000', '払わずにすむ: B 専任の監督者の給料 $10,000', '本社費の配賦 $20,000 は残る → 関連しない', '利益の変化: $10,000 − $24,000 ＝ −$14,000', 'やめた後の利益: $24,000 − $14,000 ＝ $10,000', '確かめ: A と C の貢献利益 $90,000 − 残る固定費 $80,000 ＝ $10,000'],
            answer: 'やめると利益が $14,000 減る。B は赤字に見えても続けるほうがよい'
          }
        },
        {
          title: 'なぜ？ そしてよくある間違い',
          paras: ['B の「赤字 $6,000」は本社費を配った後の数字だ。B をやめても本社費 $20,000 は消えず、A と C が代わりに背負うだけ。B の貢献利益 $24,000 が回避可能な固定費 $10,000 より大きい限り、続けるほうが会社全体の利益は大きい。'],
          note: { kind: 'warn', text: '「全部原価より安いから断る」「全部原価で赤字だからやめる」は誤り。比べるのは関連原価と貢献利益。中止では解雇・閉鎖の費用（関連する）、一緒に買う客を通じた他の製品の売上への影響、社員の士気なども考える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['特別注文: 収入が関連原価より大きければ受ける。配賦固定費は入れず、能力に余りがなければ失う貢献利益を足す。最低の価格＝関連原価', '事業の中止: 失う貢献利益と、払わずにすむ固定費を比べる', 'どちらも、ふだんの客・生産能力・次の注文・他の製品・社員など、お金以外の点も考える']
        },
        {
          title: '英単語',
          words: [
            ['special order / one-off contract', 'ワンオフ', '特別注文 / 1回だけの契約'],
            ['minimum price', 'ミニマム プライス', '最低の価格（＝関連原価）'],
            ['spare capacity', 'スペア キャパシティ', '生産能力の余り'],
            ['shutdown / discontinuance', 'シャットダウン', '事業の中止'],
            ['avoidable fixed costs', 'アボイダブル', 'やめれば払わずにすむ固定費'],
            ['apportioned head office costs', 'アポーションド', '配賦された本社費'],
            ['non-financial factors', '', 'お金以外に考える点']
          ]
        }
      ],
      quiz: [
        { q: 'A company makes a product with a selling price of $60, a variable cost of $35 and fixed overhead absorbed at $15 per unit. It has spare capacity. A customer offers to buy 2,000 units at $40 per unit as a one-off order. Extra delivery costs of $4,000 in total would be incurred. By how much would profit increase if the order is accepted?', type: 'number', answer: 6000, unit: '$', explain: '収入 2,000 × $40 ＝ $80,000。関連原価は変動費 2,000 × $35 ＝ $70,000 ＋ 配送費 $4,000 ＝ $74,000。利益は $6,000 増える。配賦固定費 $15 を入れると 2,000 × ($40 − $50) − $4,000 ＝ −$24,000 となり、得な注文を断ってしまう。' },
        { q: 'Division Z reports a loss of $5,000 after charging $35,000 of fixed costs. Of these fixed costs, $15,000 would be saved if the division were closed; the rest is apportioned head office cost. What would be the effect on company profit of closing Division Z?', choices: ['Profit would rise by $5,000', 'Profit would fall by $15,000', 'Profit would fall by $30,000', 'Profit would rise by $15,000'], answer: 1, explain: 'Z の貢献利益は $35,000 − $5,000 ＝ $30,000。やめると $30,000 を失い、固定費 $15,000 を払わずにすむ。利益の変化は $15,000 − $30,000 ＝ −$15,000。赤字 $5,000 が消えると考えるのは、本社費の配賦も消えると誤解している。' },
        { q: 'A one-off order needs materials with a relevant cost of $8,000 and labour with a relevant cost of $3,000. The company would also apportion $2,000 of general fixed overheads to the order. What is the minimum price the company should quote for the order?', choices: ['$13,000', '$8,000', '$11,000', '$9,000'], answer: 2, explain: '最低の価格は関連原価の合計 $8,000 ＋ $3,000 ＝ $11,000。一般の固定費の配賦 $2,000 は受けても総額が変わらないので入れない。$13,000 はそれを足してしまっている。' },
        { q: 'ある製品をやめると、その製品の貢献利益 $18,000 を失い、回避可能な固定費 $25,000 を払わずにすむ。会社の利益はいくら増える？', type: 'number', answer: 7000, unit: '$', explain: '利益の変化 ＝ 回避可能な固定費 $25,000 − 失う貢献利益 $18,000 ＝ $7,000 の増加。この場合は、お金の面ではやめたほうがよい。ただし他の製品への影響などお金以外の点も確かめる。' },
        { q: '特別注文を安い値段で受けるときに考えるべき、お金以外の点として最も適切なものは？', choices: ['本社費の配賦額がいくらになるか', '使う機械の帳簿価額', '先月払った見積もりの費用', 'ふだんの客が同じ値下げを求めてこないか'], answer: 3, explain: 'ふだんの客との関係は、数字に出にくいが大切な点。本社費の配賦額は受けても総額が変わらない。帳簿価額と先月の見積もり費用は埋没原価で、どれも判断に使わない。' },
        { q: 'A company has spare capacity for only 500 units. A customer offers to buy 800 units at $30 per unit as a one-off order and will not accept part of the order. The variable cost is $22 per unit and the normal selling price is $35 per unit. If the order is accepted, 300 units of normal sales will be lost. By how much would profit increase if the order is accepted?', type: 'number', answer: 2500, unit: '$', explain: '収入 800 × $30 ＝ $24,000。変動費 800 × $22 ＝ $17,600。あきらめる 300個の貢献利益 300 × ($35 − $22) ＝ $3,900（機会原価）。$24,000 − $17,600 − $3,900 ＝ $2,500 の増加なので受ける。失う貢献利益を忘れると $6,400 になり、増える額を大きく見すぎる。' }
      ]
    }
  ],
  cards: [
    { id: 'M133-1', lesson: 'M133', q: '関連原価の3つの条件は？', a: '将来の、現金の、決定で増える（減る）原価であること' },
    { id: 'M133-2', lesson: 'M133', q: '関連しない原価の例は？', a: '埋没原価、コミット原価、減価償却費、名目上の原価、配賦された一般の固定費' },
    { id: 'M133-3', lesson: 'M133', q: 'なぜ減価償却費は関連しない？', a: '現金が動かない費用だから。現金は機械を買ったときにもう出ている' },
    { id: 'M133-4', lesson: 'M133', q: '固定費は関連原価にならない？', a: 'なることもある。この決定で新しく払う・やめれば消える固定費は関連する' },
    { id: 'M133-5', lesson: 'M133', q: 'avoidable cost とは？', a: 'その案をやめれば払わずにすむ原価。関連原価になる' },
    { id: 'M134-1', lesson: 'M134', q: 'sunk cost とは？', a: '過去にもう払った原価。どの案でも戻らないので関連しない' },
    { id: 'M134-2', lesson: 'M134', q: 'committed cost とは？', a: '将来払うが、契約などで決まっていて変えられない原価。関連しない' },
    { id: 'M134-3', lesson: 'M134', q: 'opportunity cost とは？', a: 'ある案を選んであきらめる、次に良い案の利益。関連する' },
    { id: 'M134-4', lesson: 'M134', q: '帳簿にない機会原価が関連するのはなぜ？', a: '入るはずの現金が入らなくなり、現金の差になるから' },
    { id: 'M134-5', lesson: 'M134', q: '持っている機械を使う関連原価は？', a: '帳簿価額ではなく、使うことで減る売却価値（今の売却価値 − 後の売却価値）' },
    { id: 'M134-6', lesson: 'M134', q: '機会原価に入れる案はいくつ？', a: '次に良い案1つだけ。複数を足さない' },
    { id: 'M135-1', lesson: 'M135', q: '在庫にない材料の関連原価は？', a: '今の購入価格' },
    { id: 'M135-2', lesson: 'M135', q: 'いつも使う在庫材料の関連原価は？', a: '今の購入価格。使った分を買い直すから' },
    { id: 'M135-3', lesson: 'M135', q: '使い道のない在庫材料の関連原価は？', a: '売却・処分の価値（使うとあきらめる売却代）' },
    { id: 'M135-4', lesson: 'M135', q: '他に使い道がある在庫材料の関連原価は？', a: '売却価値と、他の用途で得する額の高い方' },
    { id: 'M135-5', lesson: 'M135', q: '必要量が在庫より多いときは？', a: '在庫の分はルールどおり、足りない分は今の購入価格で計算して足す' },
    { id: 'M135-6', lesson: 'M135', q: '処分に費用がかかる材料を使うと、関連原価は？', a: '処分費が浮くので、マイナスになる' },
    { id: 'M136-1', lesson: 'M136', q: '手が空いている作業者の関連原価は？', a: '$0。給料は受けても受けなくても払うから' },
    { id: 'M136-2', lesson: 'M136', q: '追加で雇う・残業のときの関連原価は？', a: '追加で払う額（臨時の時給・残業代）' },
    { id: 'M136-3', lesson: 'M136', q: '人手が足りず他の仕事から回すときの関連原価は？', a: '時給 ＋ その仕事で失う1時間の貢献利益' },
    { id: 'M136-4', lesson: 'M136', q: '方法が2つ以上あるときの関連原価は？', a: '会社が選ぶはずの、安い方の額' },
    { id: 'M136-5', lesson: 'M136', q: 'なぜ失う貢献利益を時給に足す？', a: '貢献利益は給料を引いた後の数字で、給料はどちらでも払うから' },
    { id: 'M136-6', lesson: 'M136', q: '失う貢献利益が1個あたりで与えられたら？', a: '1個に必要な時間で割り、1時間あたりに直してから時給に足す' },
    { id: 'M137-1', lesson: 'M137', q: '特別注文を受ける判断は？', a: '注文の収入が関連原価より大きければ受ける' },
    { id: 'M137-2', lesson: 'M137', q: '特別注文の最低の価格は？', a: '関連原価の合計。配賦した固定費は入れない' },
    { id: 'M137-3', lesson: 'M137', q: '生産能力が余っていないときの特別注文は？', a: 'ふだんの注文で失う貢献利益も関連原価に入れる' },
    { id: 'M137-4', lesson: 'M137', q: '製品をやめる判断で比べるのは？', a: '失う貢献利益と、払わずにすむ（回避可能な）固定費' },
    { id: 'M137-5', lesson: 'M137', q: '配賦された本社費が中止の判断で関連しないのは？', a: 'やめても会社全体の総額は変わらず、他の製品が背負うだけだから' },
    { id: 'M137-6', lesson: 'M137', q: '中止で考えるお金以外の点は？', a: '他の製品の売上への影響、解雇・社員の士気、顧客、評判など' },
    { id: 'M137-7', lesson: 'M137', q: '能力に余りがない特別注文の最低の価格は？', a: '（関連原価 ＋ あきらめる貢献利益）÷ 注文の数量' }
  ]
});
