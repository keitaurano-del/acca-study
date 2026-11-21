(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 139,
  part: 10,
  partTitle: '長期の意思決定（投資の評価）',
  lessons: [
    {
      id: 'M156',
      no: 156,
      title: '投資を評価する4つの方法',
      goal: 'NPV・IRR・ROCE・回収期間（割引あり・なし）が何を測り、どう判断に使うかを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(e)'],
      slides: [
        {
          title: 'キッチンカーを買うか迷ったら',
          paras: ['中古のキッチンカーを買うか迷っている。気になることは人によって違う。', '「何年で元が取れる？」「払ったお金に対して、毎年の利益は何%？」「将来のもうけを今のお金に直すと、いくら得する？」', '投資の評価方法は、この質問ごとに用意されている。']
        },
        {
          title: '4つの方法（回収期間は2種類）',
          list: ['回収期間法（payback）: 投資額を現金で取り戻すまでの年数', '割引回収期間法（discounted payback）: 割り引いた現金で取り戻すまでの年数', 'ROCE（return on capital employed、投下資本利益率）: 平均の年間利益 ÷ 投資額', 'NPV（net present value、正味現在価値）: 将来の現金の現在価値の合計 − 投資額', 'IRR（internal rate of return、内部収益率）: NPV がちょうど 0 になる割引率'],
          after: '回収期間法は割引なし・割引ありの2種類があるので、シラバスでは「4つの方法」とまとめて呼ぶ。'
        },
        {
          title: '2つの分かれ目で整理する',
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="もとにする数字が現金か利益か、時間価値を考えるかどうかで分けた表。現金で時間価値なしは回収期間法、現金で時間価値ありはNPV、IRR、割引回収期間法、利益で時間価値なしはROCE。現金で時間価値ありの欄を強調" font-size="15"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">もとにする数字 × 時間価値</text><text x="190" y="56" text-anchor="middle" fill="var(--quiet)">時間価値なし</text><text x="345" y="56" text-anchor="middle" fill="var(--quiet)">時間価値あり</text><text x="30" y="110" font-weight="600" fill="var(--ink)">現金</text><text x="30" y="194" font-weight="600" fill="var(--ink)">利益</text><rect x="110" y="68" width="160" height="80" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="190" y="114" text-anchor="middle" fill="var(--ink)">回収期間法</text><rect x="274" y="68" width="146" height="80" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="347" y="94" text-anchor="middle" fill="var(--ink)">NPV・IRR</text><text x="347" y="120" text-anchor="middle" fill="var(--ink)">割引回収期間法</text><rect x="110" y="152" width="160" height="80" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="190" y="198" text-anchor="middle" fill="var(--ink)">ROCE</text><rect x="274" y="152" width="146" height="80" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="347" y="198" text-anchor="middle" fill="var(--quiet)">（なし）</text></svg>`,
          caption: 'ROCE だけが利益（減価償却を引いた後）を使う。時間価値を考えるのは、割り引く3つの方法だけ。'
        },
        {
          title: '同じ案を5つの方法で見る',
          table: { caption: '機械 $50,000、4年間の現金収入 $20,000・$18,000・$16,000・$12,000、残存価額なし、資本コスト 10%', head: ['方法', '結果', '採用の目安'], rows: [['回収期間', '2.75年', '目標の年数より短い'], ['割引回収期間', '3.60年', '目標の年数より短い'], ['ROCE（平均投資額）', '16%', '目標の率より高い'], ['NPV', '＋$3,260', 'プラス'], ['IRR', '約13%', '資本コストより高い']] },
          after: 'NPV はプラス、IRR は資本コスト 10% より高いので、この案は採用してよい。計算の仕方は次のレッスンから1つずつ学ぶ。'
        },
        {
          title: 'それぞれの判断のルール',
          list: ['回収期間・割引回収期間: 会社が決めた目標の年数（target payback）以内なら採用。短いほどよい', 'ROCE: 会社が決めた目標の率（target ROCE）を上回れば採用', 'NPV: プラスなら採用。2案から1つ選ぶなら NPV が大きいほう', 'IRR: 資本コスト（cost of capital）を上回れば採用'],
          after: '資本コストは、投資のお金を出す人が求める最低限のリターン。割り引くときの割引率に使う。'
        },
        {
          title: '長所と短所',
          table: { head: ['方法', '長所', '短所'], rows: [['回収期間', '簡単。早く現金が戻る＝資金繰りとリスクに強い', '回収後の現金と時間価値を無視'], ['ROCE', '%で分かりやすい。財務諸表と同じ利益', '利益は現金でない。時間価値を無視'], ['NPV', '時間価値と全期間の現金を見る。得する額が分かる', '資本コストが必要。説明しにくい'], ['IRR', '%で分かりやすく、時間価値も見る', '計算が手間。規模の差が見えない']] }
        },
        {
          title: 'なぜ？ NPV がいちばん理論的',
          paras: ['会社の目的は、お金を出した株主の富を増やすこと。NPV は「この投資で富が今のお金でいくら増えるか」を直接示す。現金、時間価値、全期間をすべて考えている。', 'それでも他の方法が使われるのは、質問が違うから。資金が苦しい会社は「早く戻るか」（回収期間）を、事業部の利益率で評価される責任者は「%でいくらか」（ROCE）を気にする。実務ではいくつかを組み合わせて使う。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「回収期間が短い＝もうかる案」ではない。回収期間は回収した後の現金を見ないので、後半に大きくもうかる案を低く評価する。また ROCE だけは現金ではなく利益（減価償却を引いた後）を使う。回収期間・NPV・IRR では減価償却を引かない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['回収期間・割引回収期間・ROCE・NPV・IRR。ROCE だけが利益、ほかは現金', '時間価値を考えるのは NPV・IRR・割引回収期間法。回収期間法と ROCE は考えない', '判断: 回収期間は目標以内、ROCE は目標超え、NPV はプラス、IRR は資本コスト超え']
        },
        {
          title: '英単語',
          words: [
            ['investment appraisal', 'インベストメント アプレイザル', '投資の評価'],
            ['payback period', 'ペイバック ピリオド', '回収期間'],
            ['discounted payback', 'ディスカウンティッド ペイバック', '割引回収期間'],
            ['return on capital employed (ROCE)', '', '投下資本利益率'],
            ['net present value (NPV)', 'ネット プレゼント バリュー', '正味現在価値'],
            ['internal rate of return (IRR)', 'インターナル レート オブ リターン', '内部収益率'],
            ['cost of capital', 'コスト オブ キャピタル', '資本コスト（求められる最低限のリターン）'],
            ['time value of money', 'タイム バリュー オブ マネー', 'お金の時間価値']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following investment appraisal methods does NOT take account of the time value of money?', choices: ['Net present value', 'Internal rate of return', 'Return on capital employed', 'Discounted payback'], answer: 2, explain: 'ROCE は平均の利益を投資額で割るだけで、いつ現金が入るかを考えない。NPV・IRR・割引回収期間法はどれも割り引いているので時間価値を考える。（割引なしの回収期間法も時間価値を考えない。）' },
        { q: 'Which of the following best describes the internal rate of return (IRR) of a project?', choices: ['The average annual profit as a percentage of the initial investment', 'The cost of capital of the company', 'The time taken for the project cash inflows to repay the initial investment', 'The discount rate at which the net present value of the project is zero'], answer: 3, explain: 'IRR は NPV がちょうど 0 になる割引率。「平均の年間利益 ÷ 初期投資」は ROCE、「現金収入が初期投資を取り戻すまでの時間」は回収期間の説明。資本コストは IRR と比べる相手で、IRR そのものではない。' },
        { q: '5つの評価方法のうち、現金ではなく利益（減価償却を引いた後）を使うのはどれ？', choices: ['回収期間法', 'ROCE', 'NPV', 'IRR'], answer: 1, explain: 'ROCE は財務諸表と同じ利益を使う。回収期間・NPV・IRR はすべて現金（キャッシュフロー）を使う。減価償却は現金が出ていかないので、現金の方法では引かない。' },
        { q: '「この投資で、株主の富が今のお金でいくら増えるか」を金額で直接示すのはどれ？', choices: ['NPV', 'IRR', 'ROCE', '回収期間'], answer: 0, explain: 'NPV は将来の現金を今の価値に直して投資額を引いた金額なので、富の増え方そのもの。IRR と ROCE は%、回収期間は年数で、金額の大きさは分からない。' },
        { q: '回収期間法の長所として正しいものは？', choices: ['回収した後の現金まで全部考えている', '早く現金が戻る案を選ぶので、資金繰りとリスクの面で安心できる', 'お金の時間価値を考えている', '株主の富がいくら増えるかが分かる'], answer: 1, explain: '回収期間法は「早く戻るか」に集中するので、資金に余裕がない会社や、先の予測が不確かなときに役立つ。回収後の現金と時間価値は無視するのが短所。富の増加を示すのは NPV。' }
      ]
    },
    {
      id: 'M157',
      no: 157,
      title: '回収期間法',
      goal: '毎年の現金が同じときも違うときも、回収期間を年と月で計算し、目標と比べて判断できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(f)'],
      slides: [
        {
          title: '自転車は何か月で元が取れる？',
          paras: ['¥50,000 の自転車を買うと、電車代が毎月 ¥5,000 浮く。¥50,000 ÷ ¥5,000 ＝ 10か月で元が取れる。', 'この「払ったお金を取り戻すまでの期間」が回収期間（payback period）。会社の投資でも同じように考える。']
        },
        {
          title: '回収期間とは',
          paras: ['投資の現金収入（cash inflows）の合計が、初期投資（initial investment）と同じになるまでの期間。使うのは利益ではなく現金。'],
          formula: '毎年の現金が同じとき: 回収期間 ＝ 初期投資 ÷ 毎年の現金収入',
          after: '判断: 会社が決めた目標の回収期間（target payback period）より短ければ採用。2案なら短いほうを選ぶ。'
        },
        {
          title: '例題1: 毎年の現金が同じ',
          example: {
            problem: '機械に $45,000 を投資する。毎年の現金収入は $12,000。回収期間は？',
            steps: ['回収期間 ＝ $45,000 ÷ $12,000 ＝ 3.75年', '端数を月に直す: 0.75年 × 12か月 ＝ 9か月'],
            answer: '3.75年（3年9か月）'
          }
        },
        {
          title: '毎年の現金が違うとき',
          numbered: ['0年に初期投資をマイナスで置く', '毎年の現金収入を足していき、累積キャッシュフロー（cumulative cash flow）を出す', '累積がマイナスからプラスに変わる年を見つける', 'その年の初めに残っていたマイナスの額 ÷ その年の現金収入 で、年の端数を出す'],
          after: '端数の計算では、1年の現金は年の中で均等に入ってくると仮定する。英語の問題文では「cash flows arise evenly over the year」と書かれる。'
        },
        {
          title: '例題2: 累積で数える',
          example: {
            problem: '初期投資 $50,000。現金収入は 1年目 $15,000、2年目 $20,000、3年目 $18,000、4年目 $10,000。回収期間は？',
            steps: ['1年目末の累積: −$50,000 ＋ $15,000 ＝ −$35,000', '2年目末: −$35,000 ＋ $20,000 ＝ −$15,000', '3年目末: −$15,000 ＋ $18,000 ＝ ＋$3,000 → 3年目の途中で回収', '端数: $15,000 ÷ $18,000 ＝ 0.83年。0.83 × 12 ＝ 10か月', '回収期間 ＝ 2年 ＋ 10か月'],
            answer: '2年10か月（約2.83年）'
          }
        },
        {
          title: '図で見る: 0 を超える年',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="累積キャッシュフローの棒グラフ。0年マイナス50、1年マイナス35、2年マイナス15、3年プラス3、4年プラス13（千ドル）。3年目で初めてプラスになる棒を強調" font-size="15"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">累積キャッシュフロー（千ドル）</text><line x1="20" y1="80" x2="420" y2="80" stroke="var(--edge)" stroke-width="1.5"/><text x="20" y="74" fill="var(--quiet)">0</text><rect x="50" y="80" width="50" height="100" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="198" text-anchor="middle" fill="var(--ink)">−50</text><rect x="130" y="80" width="50" height="70" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="155" y="168" text-anchor="middle" fill="var(--ink)">−35</text><rect x="210" y="80" width="50" height="30" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="235" y="128" text-anchor="middle" fill="var(--ink)">−15</text><rect x="290" y="74" width="50" height="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="315" y="66" text-anchor="middle" fill="var(--ink)">＋3</text><rect x="370" y="54" width="50" height="26" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="395" y="46" text-anchor="middle" fill="var(--ink)">＋13</text><text x="75" y="226" text-anchor="middle" fill="var(--quiet)">0年</text><text x="155" y="226" text-anchor="middle" fill="var(--quiet)">1年</text><text x="235" y="226" text-anchor="middle" fill="var(--quiet)">2年</text><text x="315" y="226" text-anchor="middle" fill="var(--quiet)">3年</text><text x="395" y="226" text-anchor="middle" fill="var(--quiet)">4年</text><text x="20" y="252" fill="var(--ink)">3年目の途中で 0 を超える → 2年10か月</text></svg>`,
          caption: '2年目末に残っている $15,000 を、3年目の $18,000 で取り戻す。15 ÷ 18 ＝ 0.83年。'
        },
        {
          title: '利益が与えられたら現金に直す',
          paras: ['問題に「利益（profit）」が書いてあるときは、減価償却（depreciation）を足し戻して現金にする。減価償却は現金が出ていかない費用だから。'],
          example: {
            problem: '$60,000 の機械、耐用年数5年、残存価額なし、定額法。毎年の利益（減価償却の後）は $8,000。回収期間は？',
            steps: ['減価償却 ＝ $60,000 ÷ 5年 ＝ 毎年 $12,000', '毎年の現金 ＝ $8,000 ＋ $12,000 ＝ $20,000', '回収期間 ＝ $60,000 ÷ $20,000 ＝ 3年'],
            answer: '3年'
          }
        },
        {
          title: 'なぜ使われる？ 長所と短所',
          paras: ['先の予測ほど当たらない。早く現金が戻る案は、それだけ危険が小さく、資金繰りも楽になる。だから回収期間は「リスクと流動性（liquidity）」のものさしとして使われる。'],
          list: ['長所: 簡単で分かりやすい。現金を使う。早い回収を重視するのでリスクが小さい案を選びやすい', '短所: 回収した後の現金を無視する。時間価値を無視する（1年目の $1 と3年目の $1 を同じに扱う）。目標の年数に根拠がない']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① 0.83年を「8か月」としない。年の端数は × 12 で月にする（0.83 × 12 ＝ 10か月）。② 端数の分母は「その年の現金収入」。累積の数字や残りの年の合計で割らない。③ 利益のまま計算しない。減価償却を足し戻して現金にする。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['回収期間＝現金収入の累積が初期投資に追いつくまでの期間。同じ額なら 初期投資 ÷ 毎年の現金', '違う額なら累積で数え、端数は「年初に残る額 ÷ その年の現金」。× 12 で月に直す', '目標より短ければ採用。回収後の現金と時間価値を無視するのが弱点']
        },
        {
          title: '英単語',
          words: [
            ['payback period', 'ペイバック ピリオド', '回収期間'],
            ['initial investment', 'イニシャル インベストメント', '初期投資'],
            ['cash inflow', 'キャッシュ インフロー', '現金収入'],
            ['cumulative cash flow', 'キュミュラティブ キャッシュ フロー', '累積キャッシュフロー'],
            ['target payback period', 'ターゲット ペイバック ピリオド', '目標の回収期間'],
            ['liquidity', 'リクイディティ', '流動性（すぐ使える現金の余裕）'],
            ['depreciation', 'デプリシエーション', '減価償却（現金が出ていかない費用）']
          ]
        }
      ],
      quiz: [
        { q: '初期投資 $80,000。現金収入は 1年目 $30,000、2年目 $25,000、3年目 $20,000、4年目 $20,000。回収期間は何年？（小数で答える）', type: 'number', answer: 3.25, unit: '年', explain: '累積: 1年目末 −$50,000、2年目末 −$25,000、3年目末 −$5,000、4年目末 ＋$15,000。4年目の途中で回収。端数 $5,000 ÷ $20,000 ＝ 0.25年。回収期間 ＝ 3 ＋ 0.25 ＝ 3.25年（3年3か月）。' },
        { q: 'A project requires an initial investment of $100,000. Cash inflows are $40,000 in year 1, $35,000 in year 2 and $30,000 in year 3. Cash flows arise evenly over each year. What is the payback period?', choices: ['2 years 8 months', '2 years 10 months', '3 years', '2 years 5 months'], answer: 1, explain: '累積: 1年目末 −$60,000、2年目末 −$25,000、3年目末 ＋$5,000。端数 $25,000 ÷ $30,000 ＝ 0.83年 × 12 ＝ 10か月。2年8か月は 0.83 を「8か月」と読んだ間違い。3年は端数を切り上げた答え。' },
        { q: 'A machine costs $72,000 and has a useful life of 6 years with no residual value. It is depreciated on a straight-line basis. It is expected to generate a profit of $6,000 per year after depreciation. What is the payback period in years?', type: 'number', answer: 4, unit: '年', explain: '減価償却 ＝ $72,000 ÷ 6 ＝ $12,000。現金 ＝ $6,000 ＋ $12,000 ＝ $18,000。回収期間 ＝ $72,000 ÷ $18,000 ＝ 4年。利益のまま割ると $72,000 ÷ $6,000 ＝ 12年になってしまう。' },
        { q: 'Which of the following is a disadvantage of the payback method of investment appraisal?', choices: ['It is based on accounting profits rather than cash flows', 'It is difficult to calculate and understand', 'It favours projects that return cash slowly', 'It ignores cash flows that arise after the payback period'], answer: 3, explain: '回収期間は回収した後の現金を見ない。回収期間法は利益ではなく現金を使うので「利益を使う」は逆。計算は簡単なので「難しい」も誤り。早く現金が戻る案を好むので「ゆっくり戻る案を好む」も逆。' },
        { q: '会社の目標の回収期間は3年。A案の回収期間は2年6か月、B案は3年4か月。正しい判断は？', choices: ['A案は不採用、B案は採用', '両方とも採用', 'A案は採用、B案は不採用', '回収期間だけでは判断できないので両方とも不採用'], answer: 2, explain: '回収期間は目標より短ければ採用。A案（2.5年）は3年以内、B案（約3.33年）は3年を超える。' }
      ]
    },
    {
      id: 'M158',
      no: 158,
      title: 'ROCE（投下資本利益率）',
      goal: '投資案の平均利益と投資額（初期投資・平均投資額）から ROCE を計算し、目標と比べて判断できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(f)'],
      slides: [
        {
          title: '預けたお金に何%つくか',
          paras: ['¥1,000,000 で小さな駐車場を買い、毎年 ¥80,000 の利益が出る。払ったお金に対して毎年 8% の利益。預金の利率と同じ感覚で比べられる。', 'これを投資案に使うのが ROCE（return on capital employed、投下資本利益率）。accounting rate of return（ARR、会計上の利益率）とも呼ぶ。']
        },
        {
          title: 'ROCE の式',
          formula: 'ROCE ＝ 平均の年間利益 ÷ 投資額 × 100%',
          list: ['平均の年間利益: 投資案の全期間の利益（減価償却の後）を、年数で割ったもの', '投資額: 初期投資（initial investment）か、平均投資額（average investment）。どちらを使うかは問題文に書いてある'],
          after: '判断: 会社の目標の ROCE（target ROCE）を上回れば採用。2案なら高いほう。'
        },
        {
          title: '利益は「現金 − 減価償却」',
          paras: ['投資案の数字は、ふつう現金収入で与えられる。ROCE は利益を使うので、減価償却を引いて利益に直す。'],
          formula: '平均の年間利益 ＝（現金収入の合計 −（取得原価 − 残存価額））÷ 年数',
          after: '（取得原価 − 残存価額）は、全期間の減価償却の合計。回収期間法とは向きが逆で、こちらは減価償却を引く。'
        },
        {
          title: '平均投資額 ＝（初期投資 ＋ 残存価額）÷ 2',
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="機械の帳簿価額は0年の100,000ドルから5年の20,000ドルまでまっすぐ減る。その平均は60,000ドルで、点線で強調" font-size="15"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">帳簿価額は毎年まっすぐ減る</text><line x1="70" y1="190" x2="410" y2="190" stroke="var(--edge)" stroke-width="1.25"/><line x1="70" y1="50" x2="400" y2="162" stroke="var(--ink)" stroke-width="2"/><line x1="70" y1="106" x2="400" y2="106" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 5"/><text x="80" y="44" fill="var(--ink)">取得 $100,000</text><text x="80" y="130" fill="var(--ink)">平均 $60,000</text><text x="420" y="182" text-anchor="end" fill="var(--ink)">残存 $20,000</text><text x="70" y="212" text-anchor="middle" fill="var(--quiet)">0年</text><text x="400" y="212" text-anchor="middle" fill="var(--quiet)">5年</text></svg>`,
          caption: '定額法なら帳簿価額はまっすぐ下がるので、始め（$100,000）と終わり（$20,000）の真ん中が平均。（100,000 ＋ 20,000）÷ 2 ＝ $60,000。'
        },
        {
          title: '例題: 2つの投資額で計算する',
          example: {
            problem: '機械 $100,000、耐用年数5年、残存価額 $20,000。現金収入は 1〜5年目に $30,000・$32,000・$34,000・$30,000・$26,000。目標の ROCE（平均投資額で計算）は 20%。ROCE は？',
            steps: ['現金収入の合計: $30,000 ＋ $32,000 ＋ $34,000 ＋ $30,000 ＋ $26,000 ＝ $152,000', '減価償却の合計: $100,000 − $20,000 ＝ $80,000', '利益の合計: $152,000 − $80,000 ＝ $72,000。平均: $72,000 ÷ 5 ＝ $14,400', '平均投資額: ($100,000 ＋ $20,000) ÷ 2 ＝ $60,000 → ROCE ＝ $14,400 ÷ $60,000 ＝ 24%', '初期投資で計算すると: $14,400 ÷ $100,000 ＝ 14.4%'],
            answer: '平均投資額で 24%（目標 20% を上回るので採用）。初期投資なら 14.4%'
          }
        },
        {
          title: '同じ基準どうしで比べる',
          paras: ['例題では、平均投資額なら 24%、初期投資なら 14.4% と、同じ案でも数字が大きく変わる。', '目標の ROCE が平均投資額で決められているなら、案の ROCE も平均投資額で計算して比べる。基準をそろえないと、正しい判断にならない。']
        },
        {
          title: 'なぜ使われる？ 長所と短所',
          paras: ['ROCE は財務諸表と同じ利益を使い、%で表す。事業部の業績を ROI（M023）で評価される責任者には、自分の成績と同じものさしなので分かりやすい。'],
          list: ['長所: %で分かりやすい。全期間の利益を見る。財務諸表の数字と合う', '短所: 利益は現金ではない。時間価値を無視する（いつ利益が出るかを見ない）。初期か平均かなど定義が1つでない。%なので投資の規模が見えない']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① 現金収入をそのまま使わない。減価償却を引いて利益にする。② 平均投資額は（初期投資 − 残存価額）÷ 2 ではなく（初期投資 ＋ 残存価額）÷ 2。③ 利益の合計を年数で割るのを忘れない。④ 目標の ROCE と同じ基準（初期か平均か）で比べる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ROCE ＝ 平均の年間利益 ÷ 投資額（初期投資 または 平均投資額）× 100%', '平均の年間利益 ＝（現金収入の合計 − 減価償却の合計）÷ 年数。平均投資額 ＝（初期投資 ＋ 残存価額）÷ 2', '目標の ROCE を上回れば採用。利益を使い、時間価値を無視するのが弱点']
        },
        {
          title: '英単語',
          words: [
            ['return on capital employed (ROCE)', '', '投下資本利益率'],
            ['accounting rate of return (ARR)', '', '会計上の利益率（ROCE の別名）'],
            ['average annual profit', 'アベレージ アニュアル プロフィット', '平均の年間利益'],
            ['average investment', 'アベレージ インベストメント', '平均投資額'],
            ['residual value / scrap value', '', '残存価額（最後に売れる額）'],
            ['target ROCE', 'ターゲット', '目標の ROCE'],
            ['straight-line depreciation', 'ストレートライン', '定額法の減価償却']
          ]
        }
      ],
      quiz: [
        { q: '機械 $50,000、耐用年数4年、残存価額 $10,000。4年間の現金収入の合計は $70,000。初期投資で計算した ROCE は何%？', type: 'number', answer: 15, unit: '%', explain: '減価償却の合計 ＝ $50,000 − $10,000 ＝ $40,000。利益の合計 ＝ $70,000 − $40,000 ＝ $30,000。平均 ＝ $30,000 ÷ 4 ＝ $7,500。ROCE ＝ $7,500 ÷ $50,000 ＝ 15%。平均投資額（($50,000 ＋ $10,000) ÷ 2 ＝ $30,000）で計算すると 25% になるので、どちらの基準かを必ず問題文で確かめる。' },
        { q: 'A project requires an investment of $200,000 in equipment with a life of 5 years and no residual value. Net cash inflows are expected to be $60,000 per year. Depreciation is charged on a straight-line basis. What is the ROCE based on the average investment?', choices: ['10%', '20%', '30%', '60%'], answer: 1, explain: '減価償却 ＝ $200,000 ÷ 5 ＝ $40,000。利益 ＝ $60,000 − $40,000 ＝ $20,000。平均投資額 ＝ ($200,000 ＋ $0) ÷ 2 ＝ $100,000。ROCE ＝ $20,000 ÷ $100,000 ＝ 20%。10% は初期投資 $200,000 で割った答え（問題が初期投資の基準なら正解）。30% は減価償却を引かずに現金を初期投資で割った間違い。60% は現金を平均投資額で割った間違い。' },
        { q: 'Which of the following is a disadvantage of ROCE as a method of investment appraisal?', choices: ['It is expressed as a percentage', 'It considers the profits over the whole life of the project', 'It ignores the time value of money', 'It is based on cash flows rather than profits'], answer: 2, explain: 'ROCE は平均の利益を使うので、利益が早く出るか遅く出るかを区別しない。%で表すこと、全期間を見ることは長所。ROCE は現金ではなく利益を使うので「現金を使う」は逆。' },
        { q: '平均投資額の式として正しいものは？', choices: ['（初期投資 − 残存価額）÷ 2', '初期投資 ÷ 耐用年数', '（初期投資 − 残存価額）÷ 耐用年数', '（初期投資 ＋ 残存価額）÷ 2'], answer: 3, explain: '帳簿価額は初期投資から残存価額まで下がるので、その真ん中が平均。（初期投資 − 残存価額）÷ 耐用年数は毎年の減価償却の額で、平均投資額ではない。' },
        { q: '目標の ROCE は平均投資額で 18%。ある案の ROCE は、平均投資額で 21%、初期投資で 12%。正しい判断は？', choices: ['平均投資額どうしで比べて 21% ＞ 18% なので採用', '初期投資の 12% は 18% より低いので不採用', '2つの平均 16.5% が 18% より低いので不採用', 'ROCE は判断に使えないので NPV だけで決める'], answer: 0, explain: '目標と同じ基準（平均投資額）で計算した ROCE と比べる。基準の違う 12% と比べるのは誤り。2つを平均する方法はない。' }
      ]
    },
    {
      id: 'M159',
      no: 159,
      title: '正味現在価値（NPV）',
      goal: '投資案のキャッシュフローを資本コストで割り引いて NPV を計算し、採用するか判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(f)'],
      slides: [
        {
          title: '今の ¥10,000 と3年後の ¥10,000',
          paras: ['今もらう ¥10,000 なら、預けて利息を稼げる。3年後の ¥10,000 は、今の ¥10,000 より価値が低い（M153 の割引）。', 'だから、将来の現金を全部「今の価値」に直してから足し、払うお金と比べる。これが正味現在価値（NPV、net present value）。']
        },
        {
          title: 'NPV の式',
          formula: 'NPV ＝ 将来の現金収入の現在価値の合計 − 初期投資',
          paras: ['正確には「入る現金の現在価値 − 出る現金の現在価値」。割り引くときの割引率には、会社の資本コスト（cost of capital）を使う。'],
          after: '割引係数（discount factor、現価係数ともいう。M153）＝ 1 ÷（1 ＋ r）ⁿ。試験では表の値（小数第3位まで）を使う。10% なら 1年 0.909、2年 0.826、3年 0.751、4年 0.683。'
        },
        {
          title: '時点のルール',
          list: ['0年（time 0）＝今。初期投資はふつう0年。0年の現金は割り引かない（係数 1.000）', '1年の間に入る・出る現金は、その年の終わりにまとめて起きると仮定する（1年目の現金は1時点）', '運転資本（working capital）は始めに出ていき、最後の年に戻ってくる', '残存価額（売却収入）は最後の年の現金収入に入れる', '減価償却は現金でないので入れない。利息の支払いも入れない（資本コストで割り引くことで考えている）']
        },
        {
          title: '例題: NPV を計算する',
          example: {
            problem: '機械に $50,000 を今払う。現金収入は 1年目 $20,000、2年目 $18,000、3年目 $16,000、4年目 $12,000。資本コスト 10%（係数 0.909・0.826・0.751・0.683）。NPV は？',
            steps: ['1年目: $20,000 × 0.909 ＝ $18,180', '2年目: $18,000 × 0.826 ＝ $14,868', '3年目: $16,000 × 0.751 ＝ $12,016', '4年目: $12,000 × 0.683 ＝ $8,196', '現在価値の合計: $18,180 ＋ $14,868 ＋ $12,016 ＋ $8,196 ＝ $53,260', 'NPV ＝ $53,260 − $50,000 ＝ ＋$3,260'],
            answer: 'NPV ＝ ＋$3,260。プラスなので採用'
          }
        },
        {
          title: '表にまとめる（試験の書き方）',
          table: { caption: '資本コスト 10%（時点の横の括弧は割引係数。マイナスの金額は括弧で表す）', head: ['時点（係数）', '現金 $', '現在価値 $'], rows: [['0（1.000）', '(50,000)', '(50,000)'], ['1（0.909）', '20,000', '18,180'], ['2（0.826）', '18,000', '14,868'], ['3（0.751）', '16,000', '12,016'], ['4（0.683）', '12,000', '8,196']], total: ['NPV', '', '3,260'] }
        },
        {
          title: '図で見る: 遠い現金ほど小さくなる',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="1年から4年の現金と現在価値の棒グラフ（千ドル）。1年20が18.2、2年18が14.9、3年16が12.0、4年12が8.2になる。現在価値の合計53,260から投資50,000を引いたNPV 3,260を強調" font-size="14"><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">そのままの額と現在価値（千ドル）</text><rect x="230" y="36" width="14" height="14" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="250" y="48" fill="var(--ink)">そのままの額</text><rect x="345" y="36" width="14" height="14" fill="var(--edge)"/><text x="365" y="48" fill="var(--ink)">現在価値</text><line x1="20" y1="180" x2="420" y2="180" stroke="var(--edge)" stroke-width="1.25"/><rect x="50" y="60" width="30" height="120" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="84" y="71" width="30" height="109" fill="var(--edge)"/><text x="65" y="56" text-anchor="middle" fill="var(--ink)">20</text><text x="99" y="67" text-anchor="middle" fill="var(--ink)">18.2</text><rect x="150" y="72" width="30" height="108" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="184" y="91" width="30" height="89" fill="var(--edge)"/><text x="165" y="68" text-anchor="middle" fill="var(--ink)">18</text><text x="199" y="87" text-anchor="middle" fill="var(--ink)">14.9</text><rect x="250" y="84" width="30" height="96" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="284" y="108" width="30" height="72" fill="var(--edge)"/><text x="265" y="80" text-anchor="middle" fill="var(--ink)">16</text><text x="299" y="104" text-anchor="middle" fill="var(--ink)">12.0</text><rect x="350" y="108" width="30" height="72" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="384" y="131" width="30" height="49" fill="var(--edge)"/><text x="365" y="104" text-anchor="middle" fill="var(--ink)">12</text><text x="399" y="127" text-anchor="middle" fill="var(--ink)">8.2</text><text x="82" y="198" text-anchor="middle" fill="var(--quiet)">1年</text><text x="182" y="198" text-anchor="middle" fill="var(--quiet)">2年</text><text x="282" y="198" text-anchor="middle" fill="var(--quiet)">3年</text><text x="382" y="198" text-anchor="middle" fill="var(--quiet)">4年</text><rect x="20" y="208" width="400" height="28" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="227" text-anchor="middle" font-size="15" fill="var(--ink)">PV 合計 53,260 − 投資 50,000 ＝ NPV 3,260</text></svg>`,
          caption: '4年目の $12,000 は、今の価値では約 $8,200。遠い年ほど係数が小さく、大きく割り引かれる。'
        },
        {
          title: '判断のルールと NPV の意味',
          list: ['NPV ＞ 0: 採用。資本コストを上回るリターンがある', 'NPV ＝ 0: ちょうど資本コストと同じリターン。どちらでもよい', 'NPV ＜ 0: 不採用。資本コストに届かない', '2案から1つしか選べない（mutually exclusive）なら、NPV が大きいほう'],
          after: 'NPV ＋$3,260 は「資本コストを払ったうえで、株主の富が今のお金で $3,260 増える」という意味。'
        },
        {
          title: 'なぜ資本コストで割り引く？',
          paras: ['投資のお金は株主や銀行から来ていて、彼らは最低限のリターン（資本コスト）を求めている。資本コストで割り引くと、その最低限のリターンを差し引いた後の価値になる。', 'だから NPV が 0 でも「もうけ 0」ではなく、「求められたリターンはちょうど稼いだ」という意味になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① 0年の初期投資まで割り引かない（係数は 1.000）。② 減価償却をキャッシュフローに入れない。③ 利息の支払いを別に引かない（割引率の中で考えている）。④ NPV は割り引く前の合計（$66,000 − $50,000 ＝ $16,000）ではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['NPV ＝ 現金収入の現在価値の合計 − 初期投資。資本コストで割り引く', '0年は今（割り引かない）。年の途中の現金は年末に起きると仮定する', 'NPV ＞ 0 なら採用。株主の富が今のお金でいくら増えるかを示す']
        },
        {
          title: '英単語',
          words: [
            ['net present value (NPV)', 'ネット プレゼント バリュー', '正味現在価値'],
            ['present value (PV)', 'プレゼント バリュー', '現在価値'],
            ['discount factor', 'ディスカウント ファクター', '現価係数（割り引くための係数）'],
            ['discount rate', 'ディスカウント レート', '割引率'],
            ['time 0 / year 0', '', '今（0年）'],
            ['mutually exclusive projects', 'ミューチュアリー エクスクルーシブ', '1つしか選べない案どうし'],
            ['shareholder wealth', 'シェアホルダー ウェルス', '株主の富']
          ]
        }
      ],
      quiz: [
        { q: '今 $30,000 を投資する。現金収入は 1年目 $12,000、2年目 $12,000、3年目 $10,000。資本コストは 8%（割引係数 1年 0.926、2年 0.857、3年 0.794）。NPV はいくら？（マイナスなら − を付ける）', type: 'number', answer: -664, unit: '$', explain: '$12,000 × 0.926 ＝ $11,112、$12,000 × 0.857 ＝ $10,284、$10,000 × 0.794 ＝ $7,940。合計 $29,336。NPV ＝ $29,336 − $30,000 ＝ −$664。マイナスなので不採用。割り引く前の合計 $34,000 で見ると得に見えるが、時間価値を入れると資本コストに届かない。' },
        { q: 'A project requires an investment of $25,000 now and will generate cash inflows of $10,000 at the end of each of years 1 to 3. The cost of capital is 10%. The discount factors are 0.909 (year 1), 0.826 (year 2) and 0.751 (year 3). What is the NPV of the project?', choices: ['$140', '$(140)', '$2,135', '$5,000'], answer: 1, explain: '$10,000 × (0.909 ＋ 0.826 ＋ 0.751) ＝ $24,860。NPV ＝ $24,860 − $25,000 ＝ −$140（括弧はマイナス）。$5,000 は割り引かずに足した答え。$2,135 は今の投資まで 0.909 で割り引いた間違い。$140 は符号の間違い。' },
        { q: 'A project has a positive NPV of $5,000 when its cash flows are discounted at the company\'s cost of capital. Which of the following statements is correct?', choices: ['The project will pay back its initial investment within one year', 'The project earns a return exactly equal to the cost of capital', 'The project earns a return higher than the cost of capital and should be accepted', 'The project will earn an accounting profit of $5,000 each year'], answer: 2, explain: 'NPV がプラス＝資本コストを上回るリターンがあり、株主の富が今のお金で $5,000 増える。回収期間や毎年の利益とは別の話。ちょうど資本コストと同じなら NPV は 0。' },
        { q: 'NPV の計算に入れるキャッシュフローとして正しいものは？', choices: ['機械の減価償却費', '投資のための借入金の利息の支払い', 'すでに払った市場調査の費用', '最後の年の機械の売却収入'], answer: 3, explain: '売却収入は将来入ってくる現金なので最後の年に入れる。減価償却は現金でない。利息は割引率（資本コスト）の中で考えているので別に引かない。すでに払った費用は埋没原価（sunk cost）で、判断に関係ない（M155）。' },
        { q: '初期投資を0年に置く理由として正しいものは？', choices: ['今支払うお金なので、割り引かずにそのままの価値で扱うため', '1年目の終わりに支払うと仮定するため', '初期投資は利益ではないので計算から外すため', '0年の現金には資本コストを2回かけるため'], answer: 0, explain: '0年は「今」。今のお金はすでに現在価値なので、係数 1.000 でそのまま使う。年の途中の現金を年末とみなすのは、1年目以降の現金のルール。' },
        { q: 'A project requires equipment costing $40,000 and working capital of $5,000, both at time 0. Net cash inflows of $16,000 per year will arise at the end of each of years 1 to 3. At the end of year 3 the equipment will be sold for $4,000 and the working capital will be released. The cost of capital is 10% (discount factors 0.909, 0.826, 0.751). What is the NPV of the project?（マイナスなら − を付ける）', type: 'number', answer: 1535, unit: '$', explain: '0年: ($40,000 ＋ $5,000) ＝ ($45,000)。1年: $16,000 × 0.909 ＝ $14,544。2年: $16,000 × 0.826 ＝ $13,216。3年: ($16,000 ＋ 売却 $4,000 ＋ 運転資本の戻り $5,000) ＝ $25,000 × 0.751 ＝ $18,775。合計 $46,535 − $45,000 ＝ ＋$1,535。運転資本は0年に出て最後の年に戻る。売却収入と運転資本の戻りを忘れると −$5,224 になり、判断が逆になる。' }
      ]
    },
    {
      id: 'M160',
      no: 160,
      title: '年金と永久年金の現在価値',
      goal: '毎年同じ額が続く現金（年金・永久年金）の現在価値を、年金現価係数と 1 ÷ r で素早く計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(g)'],
      slides: [
        {
          title: '毎年同じ額が続くとき',
          paras: ['家賃、ローンの返済、毎年同じだけ浮く電気代。同じ額が毎年続く現金はよくある。', 'この「毎年同じ額のキャッシュフロー」を年金（annuity）という。老後の年金のことではない。1年ずつ係数をかけて足すのは手間なので、まとめた係数を使う。']
        },
        {
          title: '年金現価係数（annuity factor）',
          paras: ['1年目から n年目まで毎年同じ額が入るとき、各年の割引係数を足したものが年金現価係数。試験では年金現価係数の表（annuity table）か式を使う。'],
          formula: '年金現価係数 ＝（1 −（1 ＋ r）⁻ⁿ）÷ r',
          after: '10%・4年: 1.1⁴ ＝ 1.4641、1 ÷ 1.4641 ＝ 0.683、（1 − 0.683）÷ 0.10 ＝ 3.170。係数を1つずつ足すと 3.169 になるのは丸めの差で、表の値 3.170 を使ってよい。'
        },
        {
          title: '例題1: 毎年同じ節約',
          example: {
            problem: '$40,000 の機械で、1〜4年目に毎年 $14,000 の費用が浮く。資本コスト 10%（4年の年金現価係数 3.170）。NPV は？',
            steps: ['現金収入の現在価値 ＝ $14,000 × 3.170 ＝ $44,380', 'NPV ＝ $44,380 − $40,000 ＝ ＋$4,380'],
            answer: 'NPV ＝ ＋$4,380。プラスなので採用'
          }
        },
        {
          title: '例題2: 3年目から始まる年金',
          example: {
            problem: '3〜6年目に毎年 $5,000 が入る。資本コスト 10%（年金現価係数 2年 1.736、6年 4.355）。現在価値は？',
            steps: ['1〜6年目の係数から、入らない1〜2年目の係数を引く', '4.355 − 1.736 ＝ 2.619（3〜6年目の4年分）', '$5,000 × 2.619 ＝ $13,095'],
            answer: '$13,095'
          }
        },
        {
          title: '0年から始まる年金（前払い）',
          paras: ['家賃のように最初の支払いが今（0年）のときは、0年の分は割り引かず 1.000。残りは1年目からの年金になる。'],
          formula: '0年から n回 ＝ 1 ＋（n − 1 年の年金現価係数）',
          after: '例: 毎年 $10,000 を5回、最初は今。10%。1 ＋ 3.170（4年）＝ 4.170。$10,000 × 4.170 ＝ $41,700。'
        },
        {
          title: '永久年金（perpetuity）',
          paras: ['同じ額が永久に続く現金。1年目から始まるなら、現在価値は額を資本コストで割るだけ。'],
          formula: '永久年金の現在価値 ＝ 毎年の額 ÷ r',
          list: ['1年目から毎年 $3,000、8%: $3,000 ÷ 0.08 ＝ $37,500', '0年から始まるなら、0年の分を足す: $3,000 ＋ $37,500 ＝ $40,500', '3年目から始まるなら、1〜2年目の年金現価係数を引く: (1 ÷ 0.08 − 1.783) × $3,000 ＝ 10.717 × $3,000 ＝ $32,151']
        },
        {
          title: '図で見る: どの年に入るか',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="時間の線の上に3種類の現金の入り方を示す。普通の年金は1年から4年、始まりが遅い年金は3年から6年、永久年金は1年からずっと続く。今を表す0年の列を強調" font-size="14"><rect x="28" y="36" width="24" height="176" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">現金が入る年（●）</text><text x="60" y="54" fill="var(--ink)">普通の年金: 1〜4年</text><circle cx="100" cy="72" r="6" fill="var(--ink)"/><circle cx="160" cy="72" r="6" fill="var(--ink)"/><circle cx="220" cy="72" r="6" fill="var(--ink)"/><circle cx="280" cy="72" r="6" fill="var(--ink)"/><text x="60" y="110" fill="var(--ink)">始まりが遅い年金: 3〜6年</text><circle cx="220" cy="128" r="6" fill="var(--ink)"/><circle cx="280" cy="128" r="6" fill="var(--ink)"/><circle cx="340" cy="128" r="6" fill="var(--ink)"/><circle cx="400" cy="128" r="6" fill="var(--ink)"/><text x="60" y="166" fill="var(--ink)">永久年金: 1年から ずっと</text><circle cx="100" cy="184" r="6" fill="var(--ink)"/><circle cx="160" cy="184" r="6" fill="var(--ink)"/><circle cx="220" cy="184" r="6" fill="var(--ink)"/><circle cx="280" cy="184" r="6" fill="var(--ink)"/><circle cx="340" cy="184" r="6" fill="var(--ink)"/><circle cx="400" cy="184" r="6" fill="var(--ink)"/><text x="420" y="189" text-anchor="middle" fill="var(--ink)">…</text><text x="40" y="230" text-anchor="middle" fill="var(--ink)">0</text><text x="100" y="230" text-anchor="middle" fill="var(--quiet)">1</text><text x="160" y="230" text-anchor="middle" fill="var(--quiet)">2</text><text x="220" y="230" text-anchor="middle" fill="var(--quiet)">3</text><text x="280" y="230" text-anchor="middle" fill="var(--quiet)">4</text><text x="340" y="230" text-anchor="middle" fill="var(--quiet)">5</text><text x="400" y="230" text-anchor="middle" fill="var(--quiet)">6年</text></svg>`,
          caption: 'どの係数も「今（0年）」の価値に直すためのもの。始まりが遅いときは、入らない年の分を引く。'
        },
        {
          title: 'なぜ永久年金は ÷ r でよい？',
          paras: ['$37,500 を 8% で預けると、毎年 $37,500 × 8% ＝ $3,000 の利息がつく。利息だけ受け取れば元本は減らないので、$3,000 を永久に受け取れる。', 'つまり「毎年 $3,000 が永久に続く権利」は、今の $37,500 と同じ価値。遠い将来の現金ほど係数が 0 に近づくので、永久に続いても合計は有限になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① 3〜6年目なら引くのは「2年」の係数。3年の係数を引くと1年分足りなくなる。② 0年から始まる年金に n年の係数をそのまま使わない（1 ＋ n−1年の係数）。③ 永久年金 ÷ r は1年目から始まるときの式。④ r は小数で（8% なら 0.08）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['年金（1〜n年）: 毎年の額 × 年金現価係数。係数 ＝（1 −（1 ＋ r）⁻ⁿ）÷ r', '始まりが遅い年金: 最後の年までの係数 − 始まる前の年までの係数。0年から: 1 ＋ n−1年の係数', '永久年金（1年目から）: 毎年の額 ÷ r。0年からなら毎年の額を足す']
        },
        {
          title: '英単語',
          words: [
            ['annuity', 'アニュイティ', '年金（毎年同じ額のキャッシュフロー）'],
            ['annuity factor', 'アニュイティ ファクター', '年金現価係数'],
            ['cumulative present value factor', '', '年金現価係数の別名'],
            ['perpetuity', 'パーペチュイティ', '永久年金（同じ額が永久に続く）'],
            ['in advance / in arrears', 'イン アドバンス / イン アリアーズ', '前払い（0年から）/ 後払い（1年目から）'],
            ['delayed annuity', 'ディレイド アニュイティ', '始まりが遅い年金']
          ]
        }
      ],
      quiz: [
        { q: '1〜5年目に毎年 $8,000 が入る。資本コスト 12%、5年の年金現価係数は 3.605。現在価値はいくら？', type: 'number', answer: 28840, unit: '$', explain: '$8,000 × 3.605 ＝ $28,840。1年ずつ割り引いて足しても（丸めの差を除き）同じになる。' },
        { q: 'An investment will generate $6,000 per year in perpetuity, starting in one year\'s time. The cost of capital is 12%. What is the present value of the cash inflows?', choices: ['$72,000', '$5,358', '$50,000', '$56,000'], answer: 2, explain: '1年目から始まる永久年金 ＝ $6,000 ÷ 0.12 ＝ $50,000。$72,000 は 12 をかけた間違い。$56,000 は0年から始まるときの答え（$6,000 ＋ $50,000）。$5,358 は1年分だけ割り引いた額。' },
        { q: 'A lease requires four annual payments of $20,000, with the first payment made now. The cost of capital is 10%. The 10% annuity factor is 2.487 for 3 years and 3.170 for 4 years. What is the present value of the lease payments?', choices: ['$63,400', '$69,740', '$83,400', '$49,740'], answer: 1, explain: '0年から4回 ＝ 1 ＋ 3年の係数 ＝ 1 ＋ 2.487 ＝ 3.487。$20,000 × 3.487 ＝ $69,740。$63,400 は1年目から4回とした間違い（× 3.170）。$49,740 は0年の分を足し忘れた答え。$83,400 は 1 ＋ 4年の係数で、5回分になっている。' },
        { q: '2〜5年目に毎年 $4,000 が入る。資本コスト 10%（年金現価係数 1年 0.909、5年 3.791）。現在価値はいくら？', type: 'number', answer: 11528, unit: '$', explain: '3.791 − 0.909 ＝ 2.882（2〜5年目の4年分）。$4,000 × 2.882 ＝ $11,528。入らないのは1年目だけなので、引くのは1年の係数。' },
        { q: '永久年金の現在価値が「毎年の額 ÷ r」で求められる理由は？', choices: ['永久に続くので、現在価値は無限に大きくなるから', '遠い年の現金は割り引かないから', '年金現価係数の表に無限年の値がのっているから', 'その金額を r で預ければ、利息だけで毎年同じ額を永久に受け取れるから'], answer: 3, explain: '$37,500 を 8% で預ければ毎年 $3,000 の利息がつき、元本は減らない。遠い年ほど係数が 0 に近づくので、合計は無限にならない。' },
        { q: 'An investment will generate $2,000 per year in perpetuity, with the first receipt at the end of year 3. The cost of capital is 10%. The 10% annuity factors are 0.909 (1 year), 1.736 (2 years) and 2.487 (3 years). What is the present value of the cash inflows?', choices: ['$16,528', '$18,182', '$15,026', '$20,000'], answer: 0, explain: '1年目からの永久年金の係数は 1 ÷ 0.10 ＝ 10。入らないのは1〜2年目なので、2年の係数を引く: 10 − 1.736 ＝ 8.264。$2,000 × 8.264 ＝ $16,528。$18,182 は1年分しか引かなかった間違い、$15,026 は3年分引いた間違い、$20,000 は1年目から始まるとした答え。' }
      ]
    }
  ],
  cards: [
    { id: 'M156-1', lesson: 'M156', q: '投資の評価方法（K2）を全部あげると？', a: '回収期間・割引回収期間・ROCE・NPV・IRR' },
    { id: 'M156-2', lesson: 'M156', q: '現金でなく利益を使う評価方法は？', a: 'ROCE だけ（減価償却を引いた後の利益）' },
    { id: 'M156-3', lesson: 'M156', q: '時間価値を考える評価方法は？', a: 'NPV・IRR・割引回収期間法' },
    { id: 'M156-4', lesson: 'M156', q: '各方法の採用の目安は？', a: '回収期間: 目標以内、ROCE: 目標超え、NPV: プラス、IRR: 資本コスト超え' },
    { id: 'M156-5', lesson: 'M156', q: 'なぜ NPV が理論的にいちばんよい？', a: '現金・時間価値・全期間を見て、株主の富の増加を金額で示すから' },
    { id: 'M157-1', lesson: 'M157', q: '回収期間とは？', a: '現金収入の累積が初期投資に追いつくまでの期間' },
    { id: 'M157-2', lesson: 'M157', q: '毎年の現金が違うときの端数の出し方は？', a: '年初に残っているマイナス ÷ その年の現金収入。× 12 で月に直す' },
    { id: 'M157-3', lesson: 'M157', q: '利益が与えられたときの回収期間は？', a: '減価償却を足し戻して現金にしてから計算する' },
    { id: 'M157-4', lesson: 'M157', q: '回収期間法の短所は？', a: '回収後の現金と時間価値を無視する。目標年数に根拠がない' },
    { id: 'M157-5', lesson: 'M157', q: '回収期間法が使われる理由は？', a: '早く現金が戻る案はリスクが小さく、資金繰り（流動性）が楽だから' },
    { id: 'M158-1', lesson: 'M158', q: 'ROCE の式は？', a: '平均の年間利益 ÷ 投資額（初期 または 平均）× 100%' },
    { id: 'M158-2', lesson: 'M158', q: '平均の年間利益の出し方は？', a: '（現金収入の合計 −（取得原価 − 残存価額））÷ 年数' },
    { id: 'M158-3', lesson: 'M158', q: '平均投資額の式は？', a: '（初期投資 ＋ 残存価額）÷ 2' },
    { id: 'M158-4', lesson: 'M158', q: 'ROCE での判断は？', a: '目標の ROCE を上回れば採用。同じ基準（初期か平均か）で比べる' },
    { id: 'M158-5', lesson: 'M158', q: 'ROCE の短所は？', a: '利益を使い、時間価値を無視する。定義が1つでない' },
    { id: 'M159-1', lesson: 'M159', q: 'NPV の式は？', a: '現金収入の現在価値の合計 − 初期投資（資本コストで割り引く）' },
    { id: 'M159-2', lesson: 'M159', q: '割引係数（現価係数）の式は？', a: '1 ÷（1 ＋ r）ⁿ' },
    { id: 'M159-3', lesson: 'M159', q: 'NPV の時点のルールは？', a: '0年＝今で割り引かない。年の途中の現金は年末に起きると仮定' },
    { id: 'M159-4', lesson: 'M159', q: 'NPV に入れないものは？', a: '減価償却、利息の支払い、埋没原価' },
    { id: 'M159-5', lesson: 'M159', q: 'NPV がプラスの意味は？', a: '資本コストを上回るリターンがあり、株主の富が増える。採用' },
    { id: 'M159-6', lesson: 'M159', q: 'NPV で運転資本と売却収入はどの時点に置く？', a: '運転資本は0年に支出、最後の年に戻る。売却収入は最後の年' },
    { id: 'M160-1', lesson: 'M160', q: '年金（annuity）とは？', a: '毎年同じ額が続くキャッシュフロー' },
    { id: 'M160-2', lesson: 'M160', q: '年金現価係数の式は？', a: '（1 −（1 ＋ r）⁻ⁿ）÷ r' },
    { id: 'M160-3', lesson: 'M160', q: '3〜6年目の年金の係数は？', a: '6年の係数 − 2年の係数' },
    { id: 'M160-4', lesson: 'M160', q: '0年から n回の年金の係数は？', a: '1 ＋（n − 1年の年金現価係数）' },
    { id: 'M160-5', lesson: 'M160', q: '永久年金（1年目から）の現在価値は？', a: '毎年の額 ÷ r' },
    { id: 'M160-6', lesson: 'M160', q: 'なぜ永久年金は ÷ r？', a: 'その額を r で預ければ利息だけで毎年同じ額を永久に受け取れるから' },
    { id: 'M160-7', lesson: 'M160', q: '3年目から始まる永久年金の係数は？', a: '1 ÷ r − 2年の年金現価係数' }
  ]
});
