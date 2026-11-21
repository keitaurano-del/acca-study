(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 140,
  part: 10,
  partTitle: '長期の意思決定（投資の評価）',
  lessons: [
    {
      id: 'M161',
      no: 161,
      title: '割引回収期間法',
      goal: 'キャッシュフローを割り引いてから回収期間を数え、割引回収期間を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(f)'],
      slides: [
        {
          title: '貸したお金は「本当に」いつ戻った？',
          paras: ['友だちに10万円を貸し、毎年少しずつ返してもらう。3年で合計10万円が戻った。でも3年後の1万円は、今の1万円より価値が小さい。今受け取れば、その間に預金して利息がつくからだ。', '戻ったお金を「今の価値」に直して数えると、元が取れるまでの期間はもっと長くなる。これが割引回収期間法の考え方。']
        },
        {
          title: '割引回収期間法（discounted payback）とは',
          paras: ['各年のキャッシュフローを資本コスト（cost of capital）で割り引いて現在価値（present value）にしてから、累積額がゼロになるまでの期間を数える方法。', '普通の回収期間法（M157）とのちがいは、割り引くかどうかだけ。数え方は同じ。'],
          formula: '割引回収期間 ＝ 割り引いた累積キャッシュフローがゼロになるまでの期間',
          after: '0年目（今すぐ払う投資額）は割り引かない。割引係数は 1.000。'
        },
        {
          title: '手順',
          numbered: ['各年のキャッシュフロー × 割引係数 ＝ 現在価値', '0年目から順に足して、累積額を出す', '累積がマイナスからプラスに変わる年を見つける', 'その年の中では現金が均等に入ると仮定し、端数 ＝ その年の初めの不足額 ÷ その年の現在価値', '月で答えるときは、端数 × 12']
        },
        {
          title: '例題: 割引回収期間を出す',
          example: {
            problem: '機械に $50,000 を投資する。キャッシュインフローは1年目 $20,000、2年目 $20,000、3年目 $18,000、4年目 $15,000（毎年末）。資本コストは 10%（割引係数 0.909、0.826、0.751、0.683）。割引回収期間は？',
            steps: ['現在価値: 20,000 × 0.909 ＝ 18,180、20,000 × 0.826 ＝ 16,520、18,000 × 0.751 ＝ 13,518、15,000 × 0.683 ＝ 10,245', '累積: −50,000 → −31,820 → −15,300 → −1,782 → ＋8,463', '3年目の終わりで、まだ 1,782 足りない。4年目の途中でプラスになる', '端数: 1,782 ÷ 10,245 ＝ 0.17年（4年目の現在価値で割る）', '月に直す: 0.17 × 12 ＝ 約2か月'],
            answer: '割引回収期間は約 3.2年（3年2か月）'
          }
        },
        {
          title: '表で比べる: 割り引く前と後',
          table: { caption: '例題の累積キャッシュフロー（$）', head: ['年', '割り引く前の累積', '割り引いた後の累積'], rows: [['0', '(50,000)', '(50,000)'], ['1', '(30,000)', '(31,820)'], ['2', '(10,000)', '(15,300)'], ['3', '8,000', '(1,782)'], ['4', '23,000', '8,463']] },
          after: '普通の回収期間は 2 ＋ 10,000 ÷ 18,000 ＝ 2.6年。割り引くと 3.2年に延びる。'
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="割引後の累積キャッシュフローの棒グラフ。0年目マイナス50,000、1年目マイナス31,820、2年目マイナス15,300、3年目マイナス1,782、4年目プラス8,463。ゼロを超える4年目の棒を強調" font-size="14"><text x="20" y="26" font-size="16" font-weight="600" fill="var(--ink)">割引後の累積キャッシュフロー（$）</text><line x1="20" y1="90" x2="420" y2="90" stroke="var(--ink)" stroke-width="1.5"/><text x="24" y="84" fill="var(--quiet)">0</text><rect x="44" y="90" width="48" height="150" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="124" y="90" width="48" height="95" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="204" y="90" width="48" height="46" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="284" y="90" width="48" height="5" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="364" y="65" width="48" height="25" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="68" y="258" text-anchor="middle" fill="var(--ink)">−50,000</text><text x="148" y="203" text-anchor="middle" fill="var(--ink)">−31,820</text><text x="228" y="154" text-anchor="middle" fill="var(--ink)">−15,300</text><text x="308" y="113" text-anchor="middle" fill="var(--ink)">−1,782</text><text x="388" y="58" text-anchor="middle" font-weight="600" fill="var(--ink)">＋8,463</text><text x="68" y="288" text-anchor="middle" fill="var(--quiet)">0年</text><text x="148" y="288" text-anchor="middle" fill="var(--quiet)">1年</text><text x="228" y="288" text-anchor="middle" fill="var(--quiet)">2年</text><text x="308" y="288" text-anchor="middle" fill="var(--quiet)">3年</text><text x="388" y="288" text-anchor="middle" fill="var(--quiet)">4年</text></svg>`,
          caption: '3年目の終わりでは、まだ 1,782 足りない。4年目の途中で累積がゼロを超える。'
        },
        {
          title: 'なぜ割り引いて数える？',
          paras: ['普通の回収期間は、1年目の $1 と4年目の $1 を同じ価値として数えてしまう。割引回収期間は、お金の時間価値（time value of money）を入れて数える。', 'だから資本コストがプラスなら、割引回収期間は必ず普通の回収期間より長くなる。', '弱点は残る。回収した後のキャッシュフローは見ない。なお、割引回収期間がプロジェクトの期間内に収まり、その後にマイナスのキャッシュフローが無ければ、NPV はプラスになる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '端数は、割り引いた後のその年の額で割る（例題なら 10,245。割り引く前の 15,000 で割らない）。0年目の投資額は割り引かない。0.17年を「1.7か月」と読まない（× 12 で月に直す）。毎年同じ額が入っても、割り引くと年ごとに額が変わるので「投資額 ÷ 年間の額」は使えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['割引回収期間 ＝ 割り引いた累積キャッシュフローがゼロになるまでの期間', '端数 ＝ その年の初めの不足額 ÷ その年の割引後の額。月で答えるなら × 12', '時間価値を入れるので普通の回収期間より長い。回収後のキャッシュフローは見ない']
        },
        {
          title: '英単語',
          words: [
            ['discounted payback period', 'ディスカウンティッド ペイバック ピリオド', '割引回収期間'],
            ['payback period', 'ペイバック ピリオド', '（普通の）回収期間'],
            ['cumulative cash flow', 'キュミュラティブ キャッシュ フロー', '累積キャッシュフロー'],
            ['present value (PV)', 'プレゼント バリュー', '現在価値'],
            ['discount factor', 'ディスカウント ファクター', '割引係数'],
            ['cost of capital', 'コスト オブ キャピタル', '資本コスト（割引に使う率）'],
            ['time value of money', 'タイム バリュー オブ マネー', 'お金の時間価値']
          ]
        }
      ],
      quiz: [
        { q: 'A project costs $40,000 and is expected to generate cash inflows of $15,000 a year for four years, received at the end of each year. The cost of capital is 10% (discount factors: year 1 0.909, year 2 0.826, year 3 0.751, year 4 0.683). What is the discounted payback period, in years, to one decimal place?', type: 'number', answer: 3.3, unit: '年', explain: '現在価値: 13,635、12,390、11,265、10,245。累積: −40,000 → −26,365 → −13,975 → −2,710 → ＋7,535。3 ＋ 2,710 ÷ 10,245 ＝ 3.26 → 3.3年。普通の回収期間（40,000 ÷ 15,000 ＝ 2.7年）より長い。' },
        { q: 'Which of the following statements about the discounted payback method is correct?', choices: ['It takes account of all the cash flows over the life of a project', 'It gives a shorter payback period than the non-discounted payback method', 'It takes account of the time value of money but ignores cash flows after the payback point', 'It measures the increase in shareholder wealth from a project'], answer: 2, explain: '割引回収期間は時間価値を入れるが、回収した後のキャッシュフローは見ない。割り引くと額が小さくなるので、期間は普通の回収期間より長くなる（短くはならない）。すべてのキャッシュフローを入れて富の増加を測るのは NPV。' },
        { q: '例題（4年目の現在価値 10,245、3年目の終わりの累積 −1,782）で、4年目の端数を出す正しい式は？', choices: ['1,782 ÷ 15,000', '1,782 ÷ 10,245', '15,300 ÷ 13,518', '8,463 ÷ 10,245'], answer: 1, explain: '端数は「その年の初めの不足額 ÷ その年の割引後の額」。1,782 ÷ 15,000 は割り引く前の額で割ったまちがい。15,300 ÷ 13,518 は3年目の計算で、3年目ではまだ回収できていない。8,463 は年末にプラスになった額で、不足額ではない。' },
        { q: 'A project has a discounted payback period of 3.4 years. The cost of capital is positive and all annual cash inflows are positive. Which of the following describes the non-discounted payback period of the same project?', choices: ['It cannot be found without the NPV', 'Longer than 3.4 years', 'Exactly 3.4 years', 'Shorter than 3.4 years'], answer: 3, explain: '割り引くと各年の額は小さくなるので、元を取るのに時間がかかる。だから割り引かない普通の回収期間のほうが短い。' },
        { q: '割り引いた累積キャッシュフローが、2年目の終わりで −4,500。3年目の割り引いた後のキャッシュフローは 9,000。割引回収期間は何年？', type: 'number', answer: 2.5, unit: '年', explain: '3年目の途中でプラスになる。端数 ＝ 4,500 ÷ 9,000 ＝ 0.5。2 ＋ 0.5 ＝ 2.5年（2年6か月）。' }
      ]
    },
    {
      id: 'M162',
      no: 162,
      title: '内部収益率（IRR）',
      goal: 'IRR の意味を説明し、2つの割引率の NPV から補間法で IRR を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(f)'],
      slides: [
        {
          title: '利回り何％の預金と同じ？',
          paras: ['$100 を預けて1年後に $110 戻るなら、利回りは 10%。投資も同じように、「この投資は年何％で回っているか」を1つの率で表せる。', 'それが内部収益率（IRR）。計算の上では、NPV がちょうどゼロになる割引率のこと。']
        },
        {
          title: 'IRR（internal rate of return）とは',
          paras: ['NPV ＝ 0 になる割引率。言いかえると、その投資が生む利回り（収益率）。'],
          formula: 'IRR ＝ NPV がゼロになる割引率',
          list: ['IRR ＞ 資本コスト → 投資する（そのとき NPV はプラス）', 'IRR ＜ 資本コスト → 投資しない（そのとき NPV はマイナス）'],
          after: '割引率を上げるほど、将来の現金の現在価値は小さくなり、NPV は下がる。どこかでゼロになる。その率が IRR。'
        },
        {
          title: '求め方: 2つの率の NPV を直線でつなぐ（補間法）',
          numbered: ['1つ目の率（例 10%）で NPV を出す', 'プラスなら高い率、マイナスなら低い率で、2つ目の NPV を出す（プラスとマイナスを1つずつ作る）', '下の式で、NPV がゼロになる率を推定する'],
          formula: 'IRR ≈ a ＋ NPVa ÷（NPVa − NPVb）×（b − a）',
          after: 'a は低いほうの率、b は高いほうの率。NPVb がマイナスなら、NPVa − NPVb は2つの大きさの和になる。この方法を補間法（interpolation）という。'
        },
        {
          title: '例題のデータ',
          table: { caption: '投資のキャッシュフロー（$）と割引係数', head: ['年', 'キャッシュフロー', '係数 10% / 20%'], rows: [['0', '(60,000)', '1.000 / 1.000'], ['1', '25,000', '0.909 / 0.833'], ['2', '25,000', '0.826 / 0.694'], ['3', '20,000', '0.751 / 0.579'], ['4', '10,000', '0.683 / 0.482']] },
          after: '会社の資本コストは 10%。'
        },
        {
          title: '例題: IRR を補間法で出す',
          example: {
            problem: '上の投資の IRR を、10% と 20% の NPV から推定する。投資するべきか？',
            steps: ['10% の現在価値: 25,000 × 0.909 ＝ 22,725、25,000 × 0.826 ＝ 20,650、20,000 × 0.751 ＝ 15,020、10,000 × 0.683 ＝ 6,830、合計 65,225', 'NPV(10%) ＝ 65,225 − 60,000 ＝ ＋5,225。プラスなので、もっと高い率で試す', '20% の現在価値: 20,825 ＋ 17,350 ＋ 11,580 ＋ 4,820 ＝ 54,575', 'NPV(20%) ＝ 54,575 − 60,000 ＝ −5,425', 'IRR ≈ 10 ＋ 5,225 ÷（5,225 ＋ 5,425）×（20 − 10）', '＝ 10 ＋ 0.49 × 10 ＝ 14.9%'],
            answer: 'IRR は約 14.9%。資本コスト 10% より高いので投資する'
          },
          note: { kind: 'tip', text: '問題に出る2つの NPV が両方プラスでも、符号をつけたまま同じ式に入れれば推定できる。例: 10% で 5,000、15% で 1,000 → 10 ＋ 5,000 ÷（5,000 − 1,000）× 5 ＝ 16.25%。' }
        },
        {
          title: '図で見る',
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="NPVと割引率のグラフ。割引率を上げるとNPVは曲線を描いて下がる。10%でプラス5,225、20%でマイナス5,425。2点を結ぶ直線がゼロと交わる約14.9%を強調" font-size="14"><text x="20" y="34" fill="var(--ink)">NPV</text><line x1="60" y1="40" x2="60" y2="220" stroke="var(--edge)" stroke-width="1.25"/><line x1="60" y1="160" x2="420" y2="160" stroke="var(--ink)" stroke-width="1.5"/><text x="40" y="165" fill="var(--quiet)">0</text><text x="372" y="152" fill="var(--quiet)">割引率</text><polyline points="60,60 130,100 200,133.9 270,162.4 340,187.1 410,208.3" fill="none" stroke="var(--ink)" stroke-width="2"/><line x1="200" y1="133.9" x2="340" y2="187.1" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="200" cy="133.9" r="4" fill="var(--ink)"/><circle cx="340" cy="187.1" r="4" fill="var(--ink)"/><circle cx="268.7" cy="160" r="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="212" y="126" fill="var(--ink)">10%: ＋5,225</text><text x="332" y="210" text-anchor="end" fill="var(--ink)">20%: −5,425</text><text x="278" y="150" font-weight="600" fill="var(--ink)">IRR ≈ 14.9%</text></svg>`,
          caption: '実線が本当の NPV、点線が2点を結んだ直線。NPV は曲線なので、直線での推定（14.9%）は本当の IRR（約14.5%）より少し高く出る。試験では補間法で出した値を答える。'
        },
        {
          title: '毎年同じ額なら: 年金現価係数で探す',
          paras: ['毎年のキャッシュフローが同じなら近道がある。NPV ＝ 0 のとき、投資額 ＝ 年間の額 × 年金現価係数（annuity factor）。だから 投資額 ÷ 年間の額 を出し、年金現価表のその年数の行で、同じ係数の率を探す。'],
          example: {
            problem: '$37,910 を投資し、5年間、毎年末に $10,000 入る。IRR は？（5年の年金現価係数: 10% 3.791）',
            steps: ['年金現価係数 ＝ 37,910 ÷ 10,000 ＝ 3.791', '5年の行で 3.791 になるのは 10%', '10% で割り引くと NPV がちょうどゼロ'],
            answer: 'IRR ＝ 10%'
          },
          after: '永久に続く場合（永久年金）は、IRR ＝ 年間の額 ÷ 投資額。例: $50,000 で毎年 $4,000 が永久に入るなら 8%。'
        },
        {
          title: 'なぜ IRR を使う？',
          paras: ['NPV は「いくら増えるか（$）」、IRR は「何％で回るか（%）」。率なので直感的に分かりやすく、経営者に好まれる。', 'IRR は、資本コストがどこまで上がっても損をしないかの余裕も示す。例題なら、資本コストが約 14.9% までは NPV がプラスのまま。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'NPVb がマイナスなのに、分母を 5,225 − 5,425 と計算しない（正しくは 5,225 ＋ 5,425 ＝ 10,650）。最後に低いほうの率 a を足し忘れない（4.9% は答えではない）。2つ目の率は、NPV がプラスなら高く、マイナスなら低くする。IRR を資本コストと混同しない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['IRR ＝ NPV がゼロになる割引率。IRR ＞ 資本コストなら投資する', 'IRR ≈ a ＋ NPVa ÷（NPVa − NPVb）×（b − a）', '毎年同じ額なら、投資額 ÷ 年間の額 ＝ 年金現価係数 を表で探す']
        },
        {
          title: '英単語',
          words: [
            ['internal rate of return (IRR)', 'インターナル レート オブ リターン', '内部収益率（NPV がゼロになる割引率）'],
            ['interpolation', 'インターポレーション', '補間法（2点を直線でつないで推定）'],
            ['discount rate', 'ディスカウント レート', '割引率'],
            ['annuity factor', 'アニュイティ ファクター', '年金現価係数（cumulative discount factor）'],
            ['perpetuity', 'パーペチュイティ', '永久年金（ずっと続く同じ額）'],
            ['net present value (NPV)', 'ネット プレゼント バリュー', '正味現在価値']
          ]
        }
      ],
      quiz: [
        { q: 'ある投資の NPV は、割引率 10% で ＋3,000、15% で −2,000。補間法で求めた IRR は何％？', type: 'number', answer: 13, unit: '%', explain: 'IRR ≈ 10 ＋ 3,000 ÷（3,000 ＋ 2,000）×（15 − 10）＝ 10 ＋ 0.6 × 5 ＝ 13%。' },
        { q: 'A project has an NPV of $4,800 at a discount rate of 12% and an NPV of $(1,200) at 18%. What is the estimated internal rate of return of the project?', choices: ['13.2%', '16.8%', '20.0%', '15.0%'], answer: 1, explain: '12 ＋ 4,800 ÷（4,800 ＋ 1,200）× 6 ＝ 12 ＋ 4.8 ＝ 16.8%。13.2% は分子にマイナスの側の 1,200 を使ったまちがい。20.0% は分母を 4,800 − 1,200 ＝ 3,600 と引き算したまちがい。15.0% は単に2つの率の真ん中。' },
        { q: 'Which of the following best describes the internal rate of return of a project?', choices: ['The discount rate at which the project pays back its initial investment', 'The cost of capital of the company undertaking the project', 'The average annual accounting profit as a percentage of the investment', 'The discount rate at which the net present value of the project is zero'], answer: 3, explain: 'IRR は NPV がゼロになる割引率。資本コストは比べる相手で、IRR そのものではない。平均利益 ÷ 投資額は ROCE。回収期間は「何年で戻るか」で、率ではない。' },
        { q: 'An investment of $24,870 will generate cash inflows of $10,000 a year at the end of each of the next three years. The three-year annuity factors are: 8% 2.577, 10% 2.487, 12% 2.402. What is the IRR of the investment (%)?', type: 'number', answer: 10, unit: '%', explain: '毎年同じ額なので、年金現価係数 ＝ 24,870 ÷ 10,000 ＝ 2.487。3年の行で 2.487 は 10%。だから IRR ＝ 10%。' },
        { q: '10% で NPV を計算したら −2,400 だった。補間法で IRR を出すため、2つ目に試す割引率として適切なのは？', choices: ['もう一度 10% で計算する', '10% より高い率（例 15%）', '10% より低い率（例 5%）', '会社の資本コストと同じ率'], answer: 2, explain: '割引率を下げると NPV は上がる。マイナスの NPV をプラスにするには低い率で試し、プラスとマイナスの2点を作る。高い率にすると NPV はさらにマイナスになる。' },
        { q: 'ある投資は今 $80,000 を払い、1年後から毎年 $6,000 が永久に入る。IRR は？', choices: ['7.5%', '13.3%', '6.0%', '8.0%'], answer: 0, explain: '永久年金の IRR ＝ 年間の額 ÷ 投資額 ＝ 6,000 ÷ 80,000 ＝ 7.5%。13.3 は 80,000 ÷ 6,000 と逆に割ったまちがい。6.0% と 8.0% は、金額の数字（6,000 と 80,000）をそのまま率と読んだまちがい。' }
      ]
    },
    {
      id: 'M163',
      no: 163,
      title: '結果を読んで投資するか決める',
      goal: 'NPV・IRR・ROCE・回収期間の結果を読み、投資するかどうかを理由とともに判断できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(h)'],
      slides: [
        {
          title: '家を選ぶときの物差し',
          paras: ['家を買うとき、「全部でいくら得か」「利回り何％か」「何年で元が取れるか」と、いくつかの物差しで比べる。物差しによって順番が変わることもある。', '投資の評価も同じ。NPV・IRR・ROCE・回収期間の4つの結果を読み、最後に1つの結論を出す。']
        },
        {
          title: '判断のルール',
          table: { caption: '投資する（accept）条件', head: ['方法', '投資する条件', '見ているもの'], rows: [['NPV', 'プラス（ゼロなら損得なし）', '今の価値で増える額（$）'], ['IRR', '資本コストより高い', '投資の利回り（%）'], ['ROCE', '目標の ROCE より高い', '会計上の利益率（%）'], ['回収期間（普通・割引）', '目標の期間より短い', '元が取れるまでの年数']] },
          after: 'ROCE と回収期間の目標は会社が決める。問題文から読み取る。'
        },
        {
          title: '結果の意味を読む',
          list: ['NPV ＋$12,000: 資本コストを払ったうえで、今の価値で株主の富（shareholder wealth）が $12,000 増える', 'NPV ＝ 0: 利回りがちょうど資本コストと同じ。損も得もない', 'IRR 15%（資本コスト 10%）: 資本コストが 15% まで上がっても NPV はマイナスにならない', 'ROCE 18%（目標 20%）: 会計上の利益率は目標に届かない', '割引回収期間がプロジェクトの期間内: その後にマイナスが無ければ NPV はプラス']
        },
        {
          title: '4つの方法の長所と短所',
          list: ['NPV: 時間価値とすべてのキャッシュフローを入れ、富の増加を金額で示す。短所は資本コストを決める必要があること', 'IRR: 率なので分かりやすく、資本コストの余裕が分かる。短所は投資の規模を無視すること。途中でまたマイナスの現金がある投資では IRR が2つ出ることもあり、補間法の値は近似', 'ROCE: 財務諸表と同じ利益で計算でき、なじみがある。短所は時間価値を無視し、計算方法が複数あること', '回収期間: 簡単で、早く戻る＝リスクと資金繰りの目安になる。短所は回収後を無視すること（普通の方は時間価値も無視）']
        },
        {
          title: '答えがぶつかったら NPV を優先',
          paras: ['方法によって答えがちがうときは NPV を優先する。どちらか1つしか選べない案（mutually exclusive projects、互いに排他的な案）でも、IRR が高いほうではなく NPV が大きいほうを選ぶ。'],
          table: { caption: '排他的な2つの案（資本コスト 10%）', head: ['案', 'NPV', 'IRR'], rows: [['A（投資 $10,000）', '$4,000', '30%'], ['B（投資 $50,000）', '$9,000', '18%']] },
          after: 'IRR は A が上だが、選ぶのは B。B は富を $5,000 多く増やす。IRR は率なので規模を見ていない。'
        },
        {
          title: '例題: 2つの案から1つ選ぶ',
          example: {
            problem: '資本コスト 10%。案 P: 今 $30,000、3年間 毎年末 $12,000（3年の年金現価係数 2.487）。案 Q: 今 $30,000、1年目 $5,000・2年目 $10,000・3年目 $25,000（割引係数 0.909、0.826、0.751）。会社は回収期間3年以内を求める。どちらを選ぶ？',
            steps: ['P の NPV: 12,000 × 2.487 ＝ 29,844。29,844 − 30,000 ＝ −156', 'Q の NPV: 4,545 ＋ 8,260 ＋ 18,775 ＝ 31,580。31,580 − 30,000 ＝ ＋1,580', 'P の回収期間: 30,000 ÷ 12,000 ＝ 2.5年', 'Q の回収期間: 累積 5,000 → 15,000 → 40,000。2 ＋ 15,000 ÷ 25,000 ＝ 2.6年', 'どちらも3年以内。回収は P が早いが、P の NPV はマイナス', 'NPV を優先する'],
            answer: 'Q を選ぶ（NPV ＋$1,580）。P は NPV −$156 で、資本コストに届かない'
          }
        },
        {
          title: 'なぜ NPV が最優先？',
          paras: ['会社の目的は株主の富を増やすこと。NPV は「この投資で今の価値がいくら増えるか」をそのまま測る。', 'ROCE は会計上の利益なので、現金がいつ入るかを無視する。回収期間は回収後を無視する。IRR は率なので規模が分からない。どれも一部しか見ていない。', 'ただし回収期間は、資金繰りが苦しいときやリスクが高い投資で、補助の判断材料として役に立つ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'IRR が高い案が、いつもよい案ではない（排他的な案は NPV で選ぶ）。ROCE は資本コストではなく、会社の目標 ROCE と比べる。回収期間が目標より長いだけで、NPV がプラスの投資を自動的に捨てない（理由を添えて判断する）。NPV ＝ 0 は「損」ではなく、ちょうど資本コストどおり。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['投資する条件: NPV ＞ 0、IRR ＞ 資本コスト、ROCE ＞ 目標 ROCE、回収期間 ＜ 目標期間', '答えがぶつかったら NPV を優先。排他的な案は NPV が大きいほう', '最初に支出・後で収入の普通の投資なら、NPV がプラス ⇔ IRR ＞ 資本コスト（同じことの裏表）']
        },
        {
          title: '英単語',
          words: [
            ['investment viability', 'インベストメント ヴァイアビリティ', '投資の採算性（やる価値があるか）'],
            ['accept / reject', 'アクセプト / リジェクト', '投資する / 投資しない'],
            ['mutually exclusive projects', 'ミューチュアリー エクスクルーシブ プロジェクツ', '互いに排他的な案（1つしか選べない）'],
            ['shareholder wealth', 'シェアホルダー ウェルス', '株主の富'],
            ['target payback period', 'ターゲット ペイバック ピリオド', '目標の回収期間'],
            ['target ROCE', 'ターゲット アールオーシーイー', '目標の投下資本利益率']
          ]
        }
      ],
      quiz: [
        { q: 'A project has a positive NPV of $8,500 when discounted at the company\'s cost of capital of 11%. Which of the following statements is correct?', choices: ['The ROCE of the project is higher than 11%', 'The IRR of the project is lower than 11%', 'The project will pay back within the target payback period', 'The IRR of the project is higher than 11%'], answer: 3, explain: '資本コスト 11% で NPV がプラスなら、NPV がゼロになる率（IRR）はもっと高い。回収期間や ROCE は別の物差しで、NPV からは分からない。' },
        { q: 'Two mutually exclusive projects are being considered. Project X has an NPV of $15,000 and an IRR of 22%. Project Y has an NPV of $21,000 and an IRR of 17%. The cost of capital is 10%. Which project should be chosen?', choices: ['Project X, because it has the higher IRR', 'Project Y, because it has the higher NPV', 'Both projects, because both have a positive NPV', 'Neither project, because the two IRRs give different answers'], answer: 1, explain: '1つしか選べないので、富を多く増やす NPV の大きい Y を選ぶ。IRR は率で、規模を無視する。両方は選べない（排他的）。' },
        { q: 'A project requires an investment of $18,000 now and will generate $6,000 a year for four years, received at the end of each year. The cost of capital is 10% and the four-year annuity factor at 10% is 3.170. What is the NPV of the project ($)?', type: 'number', answer: 1020, unit: '$', explain: '6,000 × 3.170 ＝ 19,020。19,020 − 18,000 ＝ 1,020。NPV がプラスなので投資する。' },
        { q: 'ある投資の結果: NPV ＋$6,000（資本コスト 10%）、IRR 13%、ROCE 14%（目標 16%）、回収期間 3.5年（目標 3年）。最も適切な結論は？', choices: ['IRR が ROCE より低いので投資しない', 'ROCE も回収期間も目標に届かないので投資しない', 'NPV がプラスなので投資する。ただし回収が遅い点はリスクとして伝える', '方法によって答えがぶつかるので判断できない'], answer: 2, explain: 'ぶつかったら NPV を優先する。NPV がプラスで IRR も資本コストより高い。回収の遅さは補助の情報として伝える。IRR と ROCE は計算の基礎が違うので、両者を比べても意味はない。' },
        { q: 'IRR 14%、資本コスト 10% の投資がある。資本コストが何ポイント上がるまでなら、NPV はマイナスにならない？', type: 'number', answer: 4, unit: '%', explain: 'NPV がゼロになるのは割引率が IRR 14% のとき。14 − 10 ＝ 4 ポイントまで上がっても NPV はマイナスにならない。' },
        { q: 'Which of the following is a disadvantage of the ROCE method of investment appraisal?', choices: ['It is based on accounting profit and ignores the timing of cash flows', 'It ignores all cash flows after the payback period', 'It cannot be calculated unless the cost of capital is known', 'It gives the result as an absolute amount rather than a percentage'], answer: 0, explain: 'ROCE は会計上の利益を使い、現金がいつ入るかを無視する。回収後を無視するのは回収期間法。資本コストが要るのは NPV。ROCE は％で表す。' }
      ]
    },
    {
      id: 'M164',
      no: 164,
      title: '総合演習①: NPV と回収期間（Section B 形式）',
      goal: '1つの状況から関連キャッシュフローを選び、NPV・回収期間・年金の現在価値を順に計算して判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(b)', 'K2:E2(d)', 'K2:E2(f)', 'K2:E2(g)', 'K2:E2(h)'],
      slides: [
        {
          title: '新しい機械を買うか（Section B 形式）',
          paras: ['本番の Section B は 10点の問題が3問。1問に小問がいくつもあり、同じ状況を使って順に答える。この演習では、関連キャッシュフローを選ぶ → NPV → 回収期間 → 年金 → 判断 の順に解く。'],
          table: { caption: 'ある工場の新しい機械', head: ['項目', '金額', '時期'], rows: [['機械の購入', '$80,000', '今（0年目）'], ['機械の残存価額', '$8,000', '4年目の終わり'], ['運転資本', '$10,000', '今出て、4年目の終わりに戻る'], ['増える貢献利益', '$36,000・$42,000・$40,000・$25,000', '1〜4年目'], ['増える固定費（現金）', '毎年 $6,000', '1〜4年目']] }
        },
        {
          title: 'そのほかの情報',
          list: ['先月払った市場調査費 $5,000', '本社費の配賦 毎年 $4,000（会社全体の本社費は変わらない）', '機械の減価償却費 毎年 $18,000（定額法）', '機械を買うための借入の利息 毎年 $5,000', '資本コスト 10%（割引係数 0.909、0.826、0.751、0.683）。会社の目標回収期間（割り引かない回収期間）は3年', '現金は毎年末に動く']
        },
        {
          title: '小問1: どれを NPV に入れる？',
          example: {
            problem: '上の項目のうち、NPV の計算に入れるものはどれ？',
            steps: ['機械 $80,000・残存価額 $8,000: この決定で動く現金 → 入れる', '運転資本: 0年目に出て、4年目に戻る現金 → 入れる', '増える貢献利益・増える固定費: 決定で増える現金 → 入れる', '市場調査費: もう払った埋没原価 → 入れない', '本社費の配賦: 会社全体では増えない → 入れない', '減価償却費: 現金が動かない。機械の現金は購入額と残存価額で入れてある → 入れない', '借入利息: お金のコストは割引率（資本コスト）に入っている。二重に引かない → 入れない'],
            answer: '入れるのは、機械・残存価額・運転資本・増える貢献利益・増える固定費の5つ'
          },
          after: '機会原価（opportunity cost）も入れる。例: 空いている倉庫をこの機械に使い、毎年 $3,000 の家賃収入をあきらめるなら、毎年 $3,000 の流出として入れる。'
        },
        {
          title: '小問2: 毎年の正味キャッシュフロー',
          table: { caption: '正味キャッシュフロー（$）', head: ['年', '計算', '正味キャッシュフロー'], rows: [['0', '−80,000 − 10,000', '(90,000)'], ['1', '36,000 − 6,000', '30,000'], ['2', '42,000 − 6,000', '36,000'], ['3', '40,000 − 6,000', '34,000'], ['4', '25,000 − 6,000 ＋ 8,000 ＋ 10,000', '37,000']] },
          after: '4年目には、残存価額と戻ってくる運転資本を足す。'
        },
        {
          title: '小問3: NPV',
          example: {
            problem: '資本コスト 10% で NPV を計算する。',
            steps: ['割引係数 ＝ 1 ÷（1 ＋ 0.10）の年数乗。例: 3年目は 1 ÷ 1.331 ＝ 0.751', '1年目: 30,000 × 0.909 ＝ 27,270', '2年目: 36,000 × 0.826 ＝ 29,736', '3年目: 34,000 × 0.751 ＝ 25,534', '4年目: 37,000 × 0.683 ＝ 25,271', '現在価値の合計: 107,811', 'NPV ＝ 107,811 − 90,000 ＝ ＋17,811'],
            answer: 'NPV ＋$17,811'
          }
        },
        {
          title: '小問4: 回収期間と割引回収期間',
          example: {
            problem: '普通の回収期間と、割引回収期間を年で出す（小数1桁）。',
            steps: ['普通の累積: −90,000 → −60,000 → −24,000 → ＋10,000', '回収期間: 2 ＋ 24,000 ÷ 34,000 ＝ 2.7年', '割引後の累積: −90,000 → −62,730 → −32,994 → −7,460 → ＋17,811', '割引回収期間: 3 ＋ 7,460 ÷ 25,271 ＝ 3.3年'],
            answer: '回収期間 2.7年（目標3年以内）、割引回収期間 3.3年'
          }
        },
        {
          title: '小問5: 年金と永久年金',
          example: {
            problem: '(a) 保守契約が必要だと分かった。1〜4年目の毎年末に $4,000 払う（4年の年金現価係数 3.170）。NPV はいくらになる？ (b) 別に、1年後から毎年 $1,500 が永久に入る特許の使用料がある。10% での現在価値は？',
            steps: ['(a) 毎年同じ額なので年金: 4,000 × 3.170 ＝ 12,680', '(a) NPV: 17,811 − 12,680 ＝ ＋5,131', '(b) 永久年金の現在価値 ＝ 年間の額 ÷ 割引率', '(b) 1,500 ÷ 0.10 ＝ 15,000'],
            answer: '(a) NPV ＋$5,131 (b) 現在価値 $15,000'
          }
        },
        {
          title: '小問6: 投資するか？',
          paras: ['NPV ＋$17,811 なので投資する。資本コスト 10% を払ったうえで、今の価値で約 $17,800 富が増える。', '回収期間 2.7年は目標の3年以内。割引回収期間 3.3年は機械の使用期間4年の内に収まり、NPV がプラスという結果と合う。', '保守契約を入れても NPV は ＋$5,131 で、プラスのまま。判断は変わらない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '減価償却費をキャッシュフローから引かない（機械の購入額と二重になる）。借入利息を引かない（割引で入っている）。運転資本を最後に戻し忘れない。埋没原価や配賦された本社費を入れない。0年目は割り引かない（係数 1.000）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['入れるのは、決定で動く将来の現金だけ。埋没原価・配賦費・減価償却費・利息は入れない', '運転資本は始めに出て、終わりに戻る。残存価額は最後の年に入れる', '同じ額が続くなら 年間の額 × 年金現価係数、永久なら 年間の額 ÷ 割引率']
        },
        {
          title: '英単語',
          words: [
            ['multi-task question (MTQ)', 'マルチタスク クエスチョン', '小問がいくつもある Section B の問題'],
            ['relevant cash flow', 'レレバント キャッシュ フロー', '関連キャッシュフロー（決定で動く将来の現金）'],
            ['working capital', 'ワーキング キャピタル', '運転資本'],
            ['scrap value / residual value', 'スクラップ バリュー', '残存価額（最後に設備を売る代金）'],
            ['sunk cost', 'サンク コスト', '埋没原価（もう払った原価）'],
            ['finance costs / interest', 'ファイナンス コスト', '借入の利息（NPV には入れない）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following should be included in the cash flows used to calculate the NPV of a new project?', choices: ['Depreciation on the new equipment', 'Interest payments on a loan taken out to finance the project', 'Working capital required at the start of the project and released at the end', 'A feasibility study carried out and paid for last year'], answer: 2, explain: '運転資本は実際に出て戻る現金なので入れる。利息は資本コストで割り引くことで入っているので、二重に引かない。減価償却費は現金が動かない。去年払った調査費は埋没原価。' },
        { q: 'A project requires an investment of $70,000 now. Net cash inflows are $25,000 in year 1, $30,000 in year 2, $25,000 in year 3 and $20,000 in year 4. The cost of capital is 10% (discount factors: 0.909, 0.826, 0.751, 0.683). What is the NPV of the project ($)?', type: 'number', answer: 9940, unit: '$', explain: '22,725 ＋ 24,780 ＋ 18,775 ＋ 13,660 ＝ 79,940。79,940 − 70,000 ＝ 9,940。' },
        { q: 'For the same project (investment $70,000; inflows $25,000, $30,000, $25,000, $20,000), what is the non-discounted payback period, in years, to one decimal place?', type: 'number', answer: 2.6, unit: '年', explain: '累積: −45,000 → −15,000 → ＋10,000。2 ＋ 15,000 ÷ 25,000 ＝ 2.6年。' },
        { q: 'For the same project, using the 10% discount factors, what is the discounted payback period, in years, to one decimal place?', type: 'number', answer: 3.3, unit: '年', explain: '割引後の累積: −47,275 → −22,495 → −3,720 → ＋9,940。3 ＋ 3,720 ÷ 13,660 ＝ 3.27 → 3.3年。' },
        { q: 'An investment will pay $2,400 a year in perpetuity, starting in one year\'s time. The cost of capital is 8%. What is the present value of the perpetuity ($)?', type: 'number', answer: 30000, unit: '$', explain: '永久年金の現在価値 ＝ 年間の額 ÷ 割引率 ＝ 2,400 ÷ 0.08 ＝ 30,000。' },
        { q: 'この演習の機械（NPV ＋$17,811、回収期間 2.7年、割引回収期間 3.3年、目標回収期間 3年）について、正しい判断は？', choices: ['投資しない。割引回収期間 3.3年が目標の3年を超えている', '投資する。NPV がプラスで、回収期間も目標以内', '投資しない。減価償却費を引くと利益が小さくなる', '判断できない。IRR を出さないと決められない'], answer: 1, explain: '目標の3年は普通の回収期間の基準で、2.7年で達している。何より NPV がプラス。減価償却費は現金ではないので判断には入れない。IRR が無くても NPV で判断できる。' }
      ]
    },
    {
      id: 'M165',
      no: 165,
      title: '総合演習②: 関連キャッシュフロー・IRR・ROCE と判断（Section B 形式）',
      goal: '利益の予測から関連キャッシュフローを作り、IRR と ROCE を計算して、投資するかを判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E2(c)', 'K2:E2(d)', 'K2:E2(f)', 'K2:E2(h)'],
      slides: [
        {
          title: '新しい製品ラインの設備（Section B 形式）',
          paras: ['今度は、会計上の利益の予測が与えられている。利益を現金に直してから IRR を出し、利益のまま ROCE を出す。'],
          table: { caption: '設備の投資', head: ['項目', '金額', '時期'], rows: [['設備の購入', '$60,000', '今（0年目）'], ['設備の残存価額', '$6,000', '3年目の終わり'], ['予想される利益（減価償却後）', '$4,000・$7,000・$6,000', '1〜3年目']] }
        },
        {
          title: 'そのほかの情報',
          list: ['利益は、設備の減価償却費 毎年 $18,000（定額法）を引いた後の金額', '去年行った調査の費用 $4,000（支払い済み）', '資本コスト 10%。会社の目標 ROCE は 15%（平均投資額で計算）', '割引係数 10%: 0.909・0.826・0.751、20%: 0.833・0.694・0.579', '減価償却費のほかは、利益と同じ年に現金が動く']
        },
        {
          title: '小問1: 利益と現金のちがい',
          paras: ['利益は発生主義（accruals）で計算し、設備の支出は減価償却費として使う年に分ける。キャッシュフローは、現金が実際に動く時期で見る。'],
          table: { caption: '同じ設備の見え方', head: ['項目', '利益', 'キャッシュフロー'], rows: [['設備 $60,000', '毎年 $18,000 の費用', '0年目に一度に出る'], ['残存価額 $6,000', '減価償却費を小さくする', '3年目の終わりに入る'], ['3年間の合計', '$17,000', '−60,000 ＋ 77,000 ＝ $17,000']] },
          after: '合計は同じでも、いつ動くかがちがう。時間価値を入れるには「いつ」が要るので、投資の評価は現金で見る。現金は減価償却の方法などの会計方針でも変わらない。'
        },
        {
          title: '小問2: 関連キャッシュフローを作る',
          example: {
            problem: '利益の予測から、毎年の関連キャッシュフローを作る。',
            steps: ['減価償却費 $18,000 は現金が動かないので、利益に足し戻す', '調査費 $4,000 はもう払った埋没原価なので入れない', '1年目: 4,000 ＋ 18,000 ＝ 22,000', '2年目: 7,000 ＋ 18,000 ＝ 25,000', '3年目: 6,000 ＋ 18,000 ＋ 残存価額 6,000 ＝ 30,000'],
            answer: '0年目 (60,000)、1年目 22,000、2年目 25,000、3年目 30,000'
          }
        },
        {
          title: '小問3: IRR',
          example: {
            problem: '10% と 20% の NPV から、補間法で IRR を推定する。',
            steps: ['10%: 22,000 × 0.909 ＝ 19,998、25,000 × 0.826 ＝ 20,650、30,000 × 0.751 ＝ 22,530', '合計 63,178。NPV(10%) ＝ ＋3,178', '20%: 18,326 ＋ 17,350 ＋ 17,370 ＝ 53,046。NPV(20%) ＝ −6,954', 'IRR ≈ 10 ＋ 3,178 ÷（3,178 ＋ 6,954）× 10', '＝ 10 ＋ 0.31 × 10 ＝ 13.1%'],
            answer: 'IRR は約 13.1%'
          }
        },
        {
          title: '小問4: ROCE（平均投資額）',
          formula: 'ROCE ＝ 平均利益 ÷ 平均投資額 × 100、平均投資額 ＝（初期投資 ＋ 残存価額）÷ 2',
          example: {
            problem: '平均投資額をもとに ROCE を出す。',
            steps: ['平均利益: (4,000 ＋ 7,000 ＋ 6,000) ÷ 3 ＝ 5,667', '確かめ: 現金の流入（残存価額を除く）22,000 ＋ 25,000 ＋ 24,000 ＝ 71,000 から減価償却費の合計 54,000 を引くと 17,000。3年で割ると同じ 5,667', '平均投資額: (60,000 ＋ 6,000) ÷ 2 ＝ 33,000', 'ROCE: 5,667 ÷ 33,000 × 100 ＝ 17.2%'],
            answer: 'ROCE 17.2%（目標 15% より高い）'
          }
        },
        {
          title: '小問5: 投資するか？',
          list: ['NPV(10%) ＋$3,178: プラス → 投資する', 'IRR 13.1% ＞ 資本コスト 10% → 投資する', 'ROCE 17.2% ＞ 目標 15% → 投資する'],
          after: '3つとも「投資する」なので投資する。ただし IRR と資本コストの差は約3ポイントで、余裕は大きくない。売上が予測より少し下がると NPV がマイナスになりうるので、予測の確かさを確かめる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'IRR は現金で、ROCE は利益で計算する。逆にしない。ROCE を資本コストと比べない（目標 ROCE と比べる）。平均投資額に残存価額を足し忘れない。問題が「初期投資」で ROCE を求めたら、5,667 ÷ 60,000 ＝ 9.4% になる。補間法の IRR は近似で、本当の IRR（約12.9%）より少し高く出る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['利益 → 現金: 減価償却費を足し戻し、残存価額を最後の年に入れ、埋没原価は入れない', 'ROCE ＝ 平均利益 ÷ 平均投資額 × 100。平均投資額 ＝（初期投資 ＋ 残存価額）÷ 2', 'NPV プラス・IRR ＞ 資本コスト・ROCE ＞ 目標 なら投資する。ぶつかれば NPV を優先']
        },
        {
          title: '英単語',
          words: [
            ['accruals basis', 'アクルーアルズ ベーシス', '発生主義（利益の計算の基礎）'],
            ['return on capital employed (ROCE)', 'リターン オン キャピタル エンプロイド', '投下資本利益率'],
            ['average investment', 'アベレージ インベストメント', '平均投資額'],
            ['initial investment', 'イニシャル インベストメント', '初期投資'],
            ['non-cash item', 'ノンキャッシュ アイテム', '現金が動かない項目（減価償却費など）'],
            ['add back', 'アド バック', '足し戻す']
          ]
        }
      ],
      quiz: [
        { q: 'Why are cash flows rather than accounting profits used in investment appraisal?', choices: ['Cash flows are always higher than accounting profits', 'Cash flows include depreciation, which reflects the cost of using the asset', 'Accounting profits ignore the cost of the investment completely', 'Cash flows show when money is actually received and paid, which is needed to apply the time value of money'], answer: 3, explain: '時間価値を入れるには、現金がいつ動くかが必要。キャッシュフローには減価償却費は入らない。利益も投資の費用を減価償却費として入れている。キャッシュフローがいつも利益より大きいわけではない（0年目は大きなマイナス）。' },
        { q: 'A project is expected to make a profit of $9,000 in year 2, after charging depreciation of $12,000 on new equipment and an apportionment of existing head office costs of $1,500. Total head office costs will not change as a result of the project. The project will also use a warehouse that could otherwise be rented out for $2,000 a year; this has not been included in the profit figure. What is the relevant net cash inflow for year 2 ($)?', type: 'number', answer: 20500, unit: '$', explain: '減価償却費は現金が動かないので足し戻す（＋12,000）。本社費の配賦は会社全体では増えないので関連せず、足し戻す（＋1,500）。倉庫の家賃をあきらめるのは機会原価なので引く（−2,000）。9,000 ＋ 12,000 ＋ 1,500 − 2,000 ＝ 20,500。' },
        { q: 'A project has an NPV of $6,200 at 10% and an NPV of $(3,100) at 16%. What is the estimated IRR of the project (%)?', type: 'number', answer: 14, unit: '%', explain: '10 ＋ 6,200 ÷（6,200 ＋ 3,100）×（16 − 10）＝ 10 ＋ 0.667 × 6 ＝ 14.0%。' },
        { q: 'Equipment costing $90,000 will have a scrap value of $10,000 at the end of its four-year life. The project will generate total net cash inflows of $140,000 over the four years, excluding the scrap value. Using the average investment, what is the ROCE (%)?', type: 'number', answer: 30, unit: '%', explain: '減価償却費の合計 ＝ 90,000 − 10,000 ＝ 80,000。利益の合計 ＝ 140,000 − 80,000 ＝ 60,000、平均利益 ＝ 15,000。平均投資額 ＝（90,000 ＋ 10,000）÷ 2 ＝ 50,000。ROCE ＝ 15,000 ÷ 50,000 ＝ 30%。' },
        { q: 'この演習の設備で、ROCE を「初期投資」で計算すると何％？', choices: ['9.4%', '17.2%', '18.9%', '28.3%'], answer: 0, explain: '平均利益 5,667 ÷ 初期投資 60,000 ＝ 9.4%。17.2% は平均投資額で割った値。18.9% は平均投資額を 60,000 ÷ 2 ＝ 30,000 として残存価額を足し忘れた値。28.3% は3年分の利益 17,000 を平均せずに割った値。' },
        { q: 'A project has an NPV of $3,178 at a cost of capital of 10%, an IRR of 13.1%, and a ROCE of 17.2% compared with a target ROCE of 15%. Which conclusion is most appropriate?', choices: ['Reject the project, as the NPV is small compared with the investment', 'Reject the project, as the IRR is lower than the ROCE', 'Accept the project, as all three measures show that it is financially viable', 'Accept the project only if the IRR is higher than the target ROCE'], answer: 2, explain: 'NPV がプラス、IRR が資本コストより高い、ROCE が目標より高い。3つとも投資する結果。IRR は資本コストと、ROCE は目標 ROCE と比べるので、IRR と ROCE どうしを比べない。NPV はプラスであれば富が増える。' }
      ]
    }
  ],
  cards: [
    { id: 'M161-1', lesson: 'M161', q: '割引回収期間とは？', a: '割り引いた累積キャッシュフローがゼロになるまでの期間。' },
    { id: 'M161-2', lesson: 'M161', q: '割引回収期間の端数の出し方は？', a: 'その年の初めの不足額 ÷ その年の割引後のキャッシュフロー。' },
    { id: 'M161-3', lesson: 'M161', q: '割引回収期間と普通の回収期間、どちらが長い？', a: '割引回収期間（時間価値で額が小さくなるから）。' },
    { id: 'M161-4', lesson: 'M161', q: '割引回収期間の弱点は？', a: '回収した後のキャッシュフローを見ない。' },
    { id: 'M161-5', lesson: 'M161', q: '0年目の投資額の割引係数は？', a: '1.000（割り引かない）。' },
    { id: 'M162-1', lesson: 'M162', q: 'IRR（内部収益率）とは？', a: 'NPV がゼロになる割引率。投資の利回り。' },
    { id: 'M162-2', lesson: 'M162', q: 'IRR で投資するかの判断は？', a: 'IRR ＞ 資本コストなら投資する。' },
    { id: 'M162-3', lesson: 'M162', q: '補間法の IRR の式は？', a: 'IRR ≈ a ＋ NPVa ÷（NPVa − NPVb）×（b − a）。' },
    { id: 'M162-4', lesson: 'M162', q: 'NPV が 10% で ＋3,000、15% で −2,000。IRR は？', a: '13%（10 ＋ 3,000 ÷ 5,000 × 5）。' },
    { id: 'M162-5', lesson: 'M162', q: '毎年同じ額のときの IRR の求め方は？', a: '投資額 ÷ 年間の額 ＝ 年金現価係数を、その年数の行で探す。' },
    { id: 'M162-6', lesson: 'M162', q: '永久年金の IRR は？', a: '年間の額 ÷ 投資額。' },
    { id: 'M163-1', lesson: 'M163', q: '4つの方法で「投資する」条件は？', a: 'NPV ＞ 0、IRR ＞ 資本コスト、ROCE ＞ 目標 ROCE、回収期間 ＜ 目標期間。' },
    { id: 'M163-2', lesson: 'M163', q: '方法の答えがぶつかったら？', a: 'NPV を優先する。' },
    { id: 'M163-3', lesson: 'M163', q: 'なぜ NPV を優先する？', a: '時間価値と全キャッシュフローを入れ、株主の富の増加を金額で示すから。' },
    { id: 'M163-4', lesson: 'M163', q: '排他的な案（1つしか選べない）はどれを選ぶ？', a: 'NPV が大きいほう。IRR が高いほうではない。' },
    { id: 'M163-5', lesson: 'M163', q: 'NPV ＝ 0 の意味は？', a: '利回りがちょうど資本コストと同じ。損も得もない。' },
    { id: 'M163-6', lesson: 'M163', q: '回収期間法の役割は？', a: '早く戻る＝リスクと資金繰りの目安。補助の判断材料。' },
    { id: 'M164-1', lesson: 'M164', q: '投資の NPV に入れないものは？', a: '埋没原価、配賦された本社費、減価償却費、借入利息。' },
    { id: 'M164-2', lesson: 'M164', q: '借入利息を NPV に入れないのはなぜ？', a: 'お金のコストは割引率（資本コスト）で入っている。二重に引かない。' },
    { id: 'M164-3', lesson: 'M164', q: '運転資本の扱いは？', a: '始めに出ていく現金、終わりに戻る現金として入れる。' },
    { id: 'M164-4', lesson: 'M164', q: '割引係数の式は？', a: '1 ÷（1 ＋ r）の n 乗。' },
    { id: 'M164-5', lesson: 'M164', q: '年金と永久年金の現在価値は？', a: '年金＝年間の額×年金現価係数。永久年金＝年間の額÷r。' },
    { id: 'M165-1', lesson: 'M165', q: '投資の評価で利益でなく現金を見る理由は？', a: 'いつ動くかが分かり時間価値を入れられる。会計方針で変わらない。' },
    { id: 'M165-2', lesson: 'M165', q: '利益から関連キャッシュフローへの直し方は？', a: '減価償却費と増えない配賦費を足し戻し、機会原価は引き、残存価額を最後の年に入れる。' },
    { id: 'M165-3', lesson: 'M165', q: '平均投資額は？', a: '（初期投資 ＋ 残存価額）÷ 2。' },
    { id: 'M165-4', lesson: 'M165', q: 'ROCE（平均投資額）の式は？', a: '平均利益 ÷ 平均投資額 × 100。' },
    { id: 'M165-5', lesson: 'M165', q: 'IRR と ROCE、それぞれ何をもとに計算する？', a: 'IRR は現金（キャッシュフロー）、ROCE は会計上の利益。' }
  ]
});
