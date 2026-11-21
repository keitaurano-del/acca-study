(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 128,
  part: 8,
  partTitle: '標準原価計算と差異分析',
  lessons: [
    {
      id: 'M115',
      no: 115,
      title: '標準原価計算の目的としくみ',
      goal: '標準原価の意味と決め方、4つの種類、標準原価計算の目的を説明し、向く場面を見分けられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D1(a)'],
      slides: [
        {
          title: 'ラーメン1杯の「あるべき原価」',
          paras: ['ラーメン店の店長が「1杯に麺 150g、チャーシュー2枚。材料費は 300円のはず」と決めている。', '月末に 1,000杯売って材料費が 33万円なら、「本当は 30万円のはず。3万円多い」とすぐ分かる。目安がないと、33万円が多いのか少ないのか言えない。会社が製品ごとに前もって決めるこの目安が、標準原価。']
        },
        {
          title: '標準原価（standard cost）とは',
          paras: ['製品1単位を作るのに「かかるはず」の原価を、前もって決めたもの。直接材料・直接労務・変動製造間接費・固定製造間接費の要素ごとに、量と単価を決めてかけ合わせる。', '標準原価で予算を作り、実績と比べて差異を出し、在庫の評価にも使うやり方を、標準原価計算（standard costing）という。'],
          formula: '標準原価 ＝ 標準の量 × 標準の単価（要素ごと）'
        },
        {
          title: '椅子1脚の標準原価カード',
          table: { caption: '標準原価カード（standard cost card）', head: ['要素', '標準の量 × 単価', '$'], rows: [['直接材料（木材）', '4kg × $5', '20'], ['直接労務', '2時間 × $12', '24'], ['変動製造間接費', '2時間 × $3', '6'], ['固定製造間接費', '2時間 × $8', '16']], total: ['1脚の標準原価', '', '66'] },
          after: '1脚の標準売価は $90。標準利益は1脚 $24（$90 − $66）。このカードは M116〜M118 でも使う。'
        },
        {
          title: '標準は誰がどう決める？',
          list: ['材料の量: 設計の仕様書（何をどれだけ使うか）。ふつうに出る削りくずなどの減損（正常減損）も含める', '材料の単価: 購買部門。値上がりの見込みや大量購入の値引きも考える', '作業の時間: 作業研究（work study）で、1個を作る標準の時間を測る', '賃率: 人事部門。賃金の取り決めをもとにする', '製造間接費: 予算の金額 ÷ 予算の作業時間 で配賦率を出す']
        },
        {
          title: '標準原価計算の流れ',
          svg: `<svg viewBox="0 0 440 366" role="img" aria-label="標準原価計算の流れ。標準原価を決め、予算を作り、実際の原価を記録し、実際の生産量の標準と比べ、差異の原因を調べて手を打つ。標準そのものも定期的に見直す" font-size="15"><defs><marker id="m115a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--quiet)"/></marker></defs><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">標準原価計算の流れ</text><rect x="80" y="44" width="300" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="230" y="69" text-anchor="middle" fill="var(--ink)">1 標準原価を決める（1個あたり）</text><rect x="80" y="104" width="300" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="230" y="129" text-anchor="middle" fill="var(--ink)">2 予算を作る（標準 × 予定の量）</text><rect x="80" y="164" width="300" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="230" y="189" text-anchor="middle" fill="var(--ink)">3 実際の原価を記録する</text><rect x="80" y="224" width="300" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="230" y="249" text-anchor="middle" fill="var(--ink)">4 実際の生産量の標準と比べる</text><rect x="80" y="284" width="300" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="230" y="309" text-anchor="middle" font-weight="600" fill="var(--ink)">5 差異の原因を調べ、手を打つ</text><line x1="230" y1="84" x2="230" y2="102" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m115a)"/><line x1="230" y1="144" x2="230" y2="162" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m115a)"/><line x1="230" y1="204" x2="230" y2="222" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m115a)"/><line x1="230" y1="264" x2="230" y2="282" stroke="var(--quiet)" stroke-width="1.5" marker-end="url(#m115a)"/><polyline points="80,304 50,304 50,64 76,64" fill="none" stroke="var(--quiet)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#m115a)"/><text x="230" y="352" text-anchor="middle" font-size="14" fill="var(--quiet)">点線: 標準そのものも定期的に見直す</text></svg>`,
          caption: '4 が大事。実績は「実際に作った量なら、標準ではいくらのはずか」と比べる。'
        },
        {
          title: '標準原価計算の目的',
          list: ['予算を作る: 標準 × 予定の量 が予算の原価になる', '統制（control）: 実績と比べて差異を出し、大きな差異だけを調べる（例外による管理 management by exception）', '在庫の評価: 在庫を標準原価で評価でき、記録が簡単になる', '価格を決める: 売価を決める基礎になる', '動機づけと評価: 目標になり、管理者の業績を測る物差しになる'],
          after: '向くのは、同じ製品を同じ作業で繰り返し作る会社（大量生産、チェーン店の定番メニュー）。1点ずつ違う注文品や、製品・技術がすぐ変わる環境には向かない。'
        },
        {
          title: '標準の4つの種類',
          table: { caption: 'どのくらい厳しい標準か', head: ['種類', '中身', 'やる気への影響'], rows: [['理想標準（ideal）', '無駄・故障・休止が一切ない最高の条件', '届かず、やる気が下がる'], ['達成可能標準（attainable）', 'ふつうの減損・休止は許すが、努力が要る', '最もやる気が出やすい'], ['現状標準（current）', '今の条件（今の無駄も含む）のまま', '改善の動機が弱い'], ['基準標準（basic）', '長期間変えない。傾向を見るため', '古くなり目標にならない']] },
          after: 'ふつうは達成可能標準を使う。標準は1年に1回など定期的に見直す。'
        },
        {
          title: 'なぜ？ 標準が必要な理由',
          paras: ['実際の原価 $70,000 だけを見ても、よいか悪いかは言えない。1,000脚作ったなら標準では $66,000 のはず、と分かって初めて「$4,000 多い」と言える。', '比べる相手は、いつも「実際に作った量の標準」。たくさん作れば原価が増えるのは当たり前だから。そして大きな差だけを調べれば、管理者は少ない時間で問題を見つけられる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「標準＝理想の原価」ではない。ふつうは努力すれば届く達成可能標準を使う。「標準原価計算なら実際の原価は記録しない」も誤り。実際の原価を記録して標準と比べる。また、実績を予算の生産量の原価（固定予算）と比べると、作った量の違いまで差異に混ざってしまう。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['標準原価＝1単位に「かかるはず」の原価。要素ごとに 標準の量 × 標準の単価', '目的: 予算・統制（差異と例外による管理）・在庫の評価・価格決定・動機づけと評価', '種類: 理想・達成可能・現状・基準。やる気が出やすいのは達成可能標準']
        },
        {
          title: '英単語',
          words: [
            ['standard cost', 'スタンダード コスト', '標準原価（1単位にかかるはずの原価）'],
            ['standard costing', 'スタンダード コスティング', '標準原価計算'],
            ['standard cost card', 'スタンダード コスト カード', '標準原価カード'],
            ['ideal standard', 'アイディアル スタンダード', '理想標準'],
            ['attainable standard', 'アテイナブル スタンダード', '達成可能標準'],
            ['current standard', 'カレント スタンダード', '現状標準'],
            ['basic standard', 'ベーシック スタンダード', '基準標準（長期間変えない）'],
            ['management by exception', '', '例外による管理（大きな差異だけ調べる）']
          ]
        }
      ],
      quiz: [
        { q: '標準原価（standard cost）の説明として正しいのはどれ？', choices: ['期末に、実際にかかった原価を作った数で割ったもの', '次の1年に会社全体で使う費用の合計の計画', '製品1単位にかかるはずの原価を、要素ごとに前もって決めたもの', '同業他社の製品1単位の平均の原価'], answer: 2, explain: '「実際の原価 ÷ 作った数」は実際原価で、後から集計する数字。「会社全体の費用の計画」は予算で、総額の計画。標準原価は1単位あたりで、前もって決める。「同業他社の平均」も違う。標準は自社の仕様と作業から決める。' },
        { q: 'Which type of standard makes allowances for expected wastage, machine breakdowns and idle time, but still requires efficient working?', choices: ['Ideal standard', 'Attainable standard', 'Current standard', 'Basic standard'], answer: 1, explain: '達成可能標準（attainable）。理想標準は無駄や休止を一切許さない。現状標準は今の無駄をそのまま含み、努力を求めない。基準標準は長期間変えない標準で、傾向を見るためのもの。' },
        { q: 'Which of the following is NOT a purpose of standard costing?', choices: ['To provide a basis for preparing budgets', 'To value inventory', 'To control costs by comparing actual results with standards', 'To avoid the need to record actual costs'], answer: 3, explain: '予算・在庫の評価・統制は標準原価計算の目的。実際の原価は記録し続ける。記録しないと標準と比べられず、差異が出せない。' },
        { q: '理想標準（ideal standard）を目標に使うと、起きやすいことは？', choices: ['いつも不利差異が出て、従業員のやる気が下がる', 'いつも有利差異が出て、改善の動機がなくなる', '差異がほとんど出ず、統制が楽になる', '在庫の評価額が実際原価よりいつも高くなる'], answer: 0, explain: '理想標準は無駄ゼロが前提なので、実績はほぼ必ず標準を上回り、不利差異が続く。有利差異が出やすいのは甘い標準。在庫を標準で評価すると、むしろ実際より低めになりやすい。' },
        { q: 'Standard costing is LEAST suitable for which of the following organisations?', choices: ['A factory mass-producing identical bottles', 'A fast-food chain selling a standard menu', 'A shipyard building one-off yachts to individual customer designs', 'A bakery producing the same loaves every day'], answer: 2, explain: '1点ずつ設計が違う注文品は、同じ標準を繰り返し使えないので向かない。ほかの3つは同じ製品を同じ作業で繰り返し作るので、標準原価計算が向く。' },
        { q: '椅子1脚の標準原価は $66。予算の生産量は 1,200脚だったが、ある月に実際に作ったのは 1,000脚、実際の原価は $70,000 だった。実際の原価と比べるべき標準の原価は？', choices: ['$79,200（予算の量 × 標準）', '$66,000（実際に作った量 × 標準）', '$70,000（実際の原価そのもの）', '$66（1脚分の標準）'], answer: 1, explain: '1,000脚 × $66 ＝ $66,000 と比べ、差は $4,000。$79,200 と比べると、作った量が少ない分まで「節約」に見えてしまう。量の差を除いて比べるのが標準原価計算の基本。' }
      ]
    },
    {
      id: 'M116',
      no: 116,
      title: '標準原価・全部原価・直接原価のちがい',
      goal: '標準原価計算と、全部原価計算・直接原価計算の関係を説明し、椅子の例で原価と在庫の評価の違いを示せるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D1(b)'],
      slides: [
        {
          title: 'お弁当の原価、2つの決めごと',
          paras: ['手作り弁当1個の原価を出すとき、決めることが2つある。', '1つ目は、どの値段を使うか。「ふだんの値段（目安）」か、「今日のレシートの値段」か。2つ目は、何を入れるか。食材だけか、ガス代や台所の家賃の割り当ても入れるか。この2つは別々の問いで、どの組み合わせも作れる。']
        },
        {
          title: '3つの言葉',
          list: ['標準原価計算（standard costing）: 前もって決めた標準の数字で製品の原価をつけ、実績との差を差異として出す。「どの数字を使うか」の答え', '全部原価計算（absorption costing）: 固定製造間接費も製品の原価に入れる', '直接原価計算（marginal costing）: 変動の製造原価（直接材料・直接労務・変動製造間接費）だけを製品の原価にし、固定費はその期の費用（期間原価）にする']
        },
        {
          title: '2つの軸で整理する',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="2つの軸の表。横は全部原価計算と直接原価計算、縦は実際の数字と標準の数字。標準全部原価は椅子1脚66ドル、標準直接原価は50ドル" font-size="15"><text x="20" y="28" font-size="16" font-weight="600" fill="var(--ink)">2つの軸は別々の問い</text><text x="200" y="62" text-anchor="middle" font-weight="600" fill="var(--ink)">全部原価計算</text><text x="200" y="82" text-anchor="middle" font-size="13" fill="var(--quiet)">固定費も入れる</text><text x="350" y="62" text-anchor="middle" font-weight="600" fill="var(--ink)">直接原価計算</text><text x="350" y="82" text-anchor="middle" font-size="13" fill="var(--quiet)">変動費だけ入れる</text><text x="20" y="126" font-weight="600" fill="var(--ink)">実際の数字</text><text x="20" y="146" font-size="13" fill="var(--quiet)">後で集計する</text><rect x="130" y="96" width="140" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="200" y="126" text-anchor="middle" fill="var(--ink)">実際全部原価</text><text x="200" y="148" text-anchor="middle" font-size="13" fill="var(--quiet)">実際の額で計算</text><rect x="280" y="96" width="140" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="126" text-anchor="middle" fill="var(--ink)">実際直接原価</text><text x="350" y="148" text-anchor="middle" font-size="13" fill="var(--quiet)">実際の額で計算</text><text x="20" y="210" font-weight="600" fill="var(--ink)">標準の数字</text><text x="20" y="230" font-size="13" fill="var(--quiet)">前もって決める</text><rect x="130" y="180" width="140" height="70" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="200" y="210" text-anchor="middle" font-weight="600" fill="var(--ink)">標準全部原価</text><text x="200" y="232" text-anchor="middle" fill="var(--ink)">椅子 $66</text><rect x="280" y="180" width="140" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="210" text-anchor="middle" fill="var(--ink)">標準直接原価</text><text x="350" y="232" text-anchor="middle" fill="var(--ink)">椅子 $50</text><text x="20" y="280" font-size="14" fill="var(--ink)">横＝何を入れるか、縦＝どの数字を使うか</text></svg>`,
          caption: '標準原価計算は、全部原価計算とも直接原価計算とも組み合わせられる。K2 では両方の形が出る。'
        },
        {
          title: '椅子で比べる（M115 のカード）',
          table: { caption: '1脚の標準原価', head: ['要素', '標準全部原価', '標準直接原価'], rows: [['直接材料', '$20', '$20'], ['直接労務', '$24', '$24'], ['変動製造間接費', '$6', '$6'], ['固定製造間接費', '$16', '―']], total: ['1脚の標準原価', '$66', '$50'] },
          after: '標準売価 $90 から引くと、全部原価なら標準利益 $24、直接原価なら標準貢献利益 $40。'
        },
        {
          title: '例題: 期末在庫を評価する',
          example: {
            problem: '椅子の期末在庫が 300脚ある。標準全部原価計算と標準直接原価計算で、在庫はそれぞれいくらで評価する？',
            steps: ['標準全部原価計算: 300脚 × $66 ＝ $19,800', '標準直接原価計算: 300脚 × $50 ＝ $15,000', '差: $19,800 − $15,000 ＝ $4,800', 'これは 300脚 × 固定製造間接費 $16 ＝ $4,800 と一致する'],
            answer: '全部原価 $19,800、直接原価 $15,000。差は在庫に入った固定製造間接費だけ'
          }
        },
        {
          title: '標準原価計算と実際原価計算のちがい',
          paras: ['ある月、木材が値上がりして、1脚あたりの実際の材料費が $21 になった。', '実際原価計算なら、在庫の椅子は実際の $21 を含む原価で評価する。標準原価計算では、在庫は標準の $20 のまま評価し、1脚 $1 の差は材料費の差異として、その月の損益計算書に出す。だから在庫の金額は月ごとにぶれず、どこで差が出たかがはっきり分かる。']
        },
        {
          title: '損益計算書の形も変わる',
          table: { caption: '標準全部原価計算と標準直接原価計算', head: ['項目', '標準全部原価', '標準直接原価'], rows: [['製品・在庫の原価', '$66（固定費を含む）', '$50（変動費だけ）'], ['出発点の予算の数字', '予算利益', '予算の貢献利益'], ['売上数量差異の単価', '標準利益 $24', '標準貢献利益 $40'], ['固定製造間接費の差異', '予算差異 ＋ 操業度差異', '予算差異だけ']] },
          after: '売上数量差異は M118、固定製造間接費の差異は M122、利益の調整表は M125〜M126 で学ぶ。'
        },
        {
          title: 'なぜ？ 2つの軸が別になる理由',
          paras: ['標準原価計算が答えるのは「何と比べるか」。前もって基準を決めておけば、実績のずれを差異として見つけられる。全部原価か直接原価かが答えるのは「固定費を製品に持たせるか」。', 'だから組み合わせは自由。直接原価計算では固定費を1脚ずつに配らないので、作った量が予算とずれても配賦の過不足が出ない。固定製造間接費の操業度差異が全部原価計算にしかないのは、このため。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「標準原価計算は全部原価計算の一種」ではない。どちらとも組める。標準直接原価に変動製造間接費を入れ忘れる（直接材料と直接労務だけにする）のも誤り。直接原価計算でも固定費は消えない。製品に入れず、その期の費用として全額を引く。販売費は変動費でも、製品の原価（在庫）には入れない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['標準原価計算＝どの数字を使うか（前もって決めた標準）。全部・直接＝固定製造間接費を製品に入れるか', '標準直接原価 ＝ 直接材料＋直接労務＋変動製造間接費。標準全部原価 ＝ それ ＋ 固定製造間接費', '標準直接原価計算では、売上数量差異を標準貢献利益で測り、固定費の操業度差異は出ない']
        },
        {
          title: '英単語',
          words: [
            ['standard absorption costing', '', '標準全部原価計算'],
            ['standard marginal costing', '', '標準直接原価計算'],
            ['actual costing', 'アクチュアル コスティング', '実際原価計算'],
            ['absorption costing', 'アブソープション コスティング', '全部原価計算'],
            ['marginal costing', 'マージナル コスティング', '直接原価計算'],
            ['standard profit', '', '標準利益（標準売価 − 標準全部原価）'],
            ['standard contribution', '', '標準貢献利益（標準売価 − 標準変動費）'],
            ['period cost', 'ピリオド コスト', '期間原価（その期の費用にする）']
          ]
        }
      ],
      quiz: [
        { q: 'A company uses standard marginal costing. Which costs are included in the standard cost per unit?', choices: ['Direct materials and direct labour only', 'Direct materials, direct labour, variable and fixed production overhead', 'Direct materials, direct labour and variable production overhead', 'Variable production overhead and variable selling costs only'], answer: 2, explain: '標準直接原価は変動の製造原価すべて。変動製造間接費を落とすのはよくある間違い。固定製造間接費まで入れると標準全部原価。販売費は製品の原価に入れない。' },
        { q: 'A standard cost card shows the following per unit: direct materials $8, direct labour $10, variable production overhead $4 and fixed production overhead $6. Closing inventory is 500 units. What is the value of closing inventory under standard absorption costing?', type: 'number', answer: 14000, unit: '$', explain: '標準全部原価は $8 ＋ $10 ＋ $4 ＋ $6 ＝ $28。500 × $28 ＝ $14,000。標準直接原価計算なら $22 × 500 ＝ $11,000 で、差 $3,000 は 500 × 固定費 $6。' },
        { q: '標準原価計算と、全部原価計算・直接原価計算の関係として正しいのは？', choices: ['標準原価計算は全部原価計算の一種で、直接原価計算とは組み合わせられない', '標準原価計算は、全部原価計算とも直接原価計算とも組み合わせられる','標準原価計算を使うと、固定製造間接費は製品の原価に入らない', '直接原価計算を使うと、標準を決めることができない'], answer: 1, explain: '標準原価計算は「どの数字を使うか」、全部・直接は「固定費を製品に入れるか」の問い。別の軸なので、標準全部原価計算も標準直接原価計算もある。' },
        { q: 'Which of the following statements is/are correct?\n(1) Under standard marginal costing, there is no fixed overhead volume variance.\n(2) Under standard costing, inventory is valued at actual cost.', choices: ['(1) only', '(2) only', 'Both (1) and (2)', 'Neither (1) nor (2)'], answer: 0, explain: '(1) は正しい。直接原価計算では固定費を製品に配賦しないので、量のずれによる配賦の過不足（操業度差異）が出ない。(2) は誤り。標準原価計算では在庫を標準原価で評価し、実際との差は差異として当期の損益に出す。' },
        { q: '標準売価 $90、標準全部原価 $66、標準直接原価 $50。標準直接原価計算で売上数量差異を計算するとき、1脚あたりいくらで測る？', choices: ['$24', '$90', '$16', '$40'], answer: 3, explain: '標準直接原価計算では標準貢献利益 $90 − $50 ＝ $40 で測る。$24 は標準全部原価計算で使う標準利益。$90 は売価で、売価で測るのは誤り（M118）。$16 は固定製造間接費で、利益ではない。' }
      ]
    },
    {
      id: 'M117',
      no: 117,
      title: '1単位の標準原価を出す（全部原価と直接原価）',
      goal: '標準原価カードを作り、正常減損・遊休時間・固定費の配賦率を入れて、1単位の標準全部原価と標準直接原価を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D1(c)'],
      slides: [
        {
          title: 'カレー1皿の原価を積み上げる',
          paras: ['カレー1皿の原価を出すとき、材料を1つずつ書き出す。米 100g、ルー1かけ、肉 80g…。それぞれ量 × 単価を計算して足す。', '肉は焼くと縮むので、80g 出したいなら 100g 買う必要がある。標準原価カードも同じ。量 × 単価を要素ごとに積み上げ、ふつうに出る無駄の分も量に入れる。']
        },
        {
          title: '標準原価カードの型',
          table: { caption: '1単位あたり', head: ['要素', '計算', 'ポイント'], rows: [['直接材料', '標準の投入量 × 標準単価', '正常減損の分も量に含める'], ['直接労務', '支払う時間 × 標準賃率', '遊休時間の分も含める'], ['変動製造間接費', '標準時間 × 変動費の配賦率', '時間あたりの変動費'], ['固定製造間接費', '標準時間 × 固定費の配賦率', '予算の固定費 ÷ 予算の時間']] },
          after: '直接材料＋直接労務＋変動製造間接費＝標準直接原価。そこに固定製造間接費を足すと標準全部原価。'
        },
        {
          title: '例題1: 椅子の標準原価カード',
          example: {
            problem: '椅子1脚に木材 4kg（$5/kg）と直接作業 2時間（$12/時間）が要る。変動製造間接費は作業1時間 $3。固定製造間接費の年間予算は $80,000、予算の生産量は 5,000脚で、作業時間を基準に配賦する。標準全部原価と標準直接原価は？',
            steps: ['直接材料: 4kg × $5 ＝ $20', '直接労務: 2時間 × $12 ＝ $24', '変動製造間接費: 2時間 × $3 ＝ $6', '標準直接原価: $20 ＋ $24 ＋ $6 ＝ $50', '固定費の配賦率: 予算の作業時間は 5,000脚 × 2時間 ＝ 10,000時間。$80,000 ÷ 10,000時間 ＝ 1時間 $8', '固定製造間接費: 2時間 × $8 ＝ $16', '標準全部原価: $50 ＋ $16 ＝ $66'],
            answer: '標準全部原価 $66、標準直接原価 $50'
          }
        },
        {
          title: '標準利益と標準貢献利益',
          paras: ['標準原価カードには、ふつう標準売価も書く。椅子の標準売価は $90。'],
          table: { caption: '1脚あたり', head: ['項目', '全部原価計算', '直接原価計算'], rows: [['標準売価', '$90', '$90'], ['標準原価', '($66)', '($50)']], total: ['標準利益／標準貢献利益', '$24', '$40'] },
          after: 'この $24 と $40 は、M118 の売上数量差異で使う。'
        },
        {
          title: '例題2: 正常減損があるときの材料',
          example: {
            problem: '完成した椅子には木材 3.6kg が入っている。加工中に、投入した木材の 10% が削りくずとして失われる（正常減損 normal loss）。標準の投入量と、標準の材料費（$5/kg）は？',
            steps: ['失われるのは「投入量」の 10%。完成品に残るのは投入量の 90%', '投入量 × 0.9 ＝ 3.6kg', '投入量 ＝ 3.6kg ÷ 0.9 ＝ 4kg', '標準の材料費: 4kg × $5 ＝ $20', '確かめ: 4kg の 10% ＝ 0.4kg が失われ、残りは 3.6kg'],
            answer: '標準の投入量 4kg、標準の材料費 $20'
          }
        },
        {
          title: '例題3: 遊休時間があるときの労務',
          example: {
            problem: '机1台の実作業は 2.7時間。支払う時間の 10% は、段取り待ちなどの遊休時間（idle time）になると見込む。賃率は $12/時間。標準の労務費は？',
            steps: ['遊休時間は「支払う時間」の 10%。実作業は支払う時間の 90%', '支払う時間 × 0.9 ＝ 2.7時間', '支払う時間 ＝ 2.7 ÷ 0.9 ＝ 3時間', '標準の労務費: 3時間 × $12 ＝ $36', '確かめ: 3時間の 10% ＝ 0.3時間が遊休、実作業は 2.7時間'],
            answer: '支払う時間 3時間、標準の労務費 $36'
          },
          note: { kind: 'tip', text: '遊休時間にも賃金は払うが、変動製造間接費（機械の電気代など）はふつう実際に作業した時間にだけかかる。問題文の指示がなければ、変動製造間接費は作業時間 × 率で出す。' }
        },
        {
          title: 'なぜ？ 正常減損や遊休時間を標準に入れる理由',
          paras: ['削りくずが出ない加工や、待ち時間がゼロの工場はない。ふつうに出る分まで差異にすると、毎月必ず不利差異が出て、本当の問題（材料の盗難、故障の続発）と見分けがつかない。', '正常減損と、ふつうの範囲の遊休時間を標準に入れておけば、差異は「ふつうを超えた分」だけになる。これが M115 の達成可能標準の考え方。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '10% の減損を「3.6kg × 1.1 ＝ 3.96kg」とする。10% は投入量に対する割合なので ÷ 0.9 が正しい（3.96kg の 10% は 0.396kg で、残りが 3.564kg になり合わない）。固定費の配賦率を、予算でなく実際の生産量で出すのも誤り。標準直接原価に固定製造間接費を入れるのも誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['各要素 ＝ 標準の量 × 標準の単価。固定費の配賦率 ＝ 予算の固定製造間接費 ÷ 予算の作業時間（または生産量）', '標準直接原価 ＝ 直接材料＋直接労務＋変動製造間接費。標準全部原価 ＝ それ ＋ 固定製造間接費', '投入量の 10% が正常減損、支払う時間の 10% が遊休時間なら ÷ 0.9（× 1.1 ではない）']
        },
        {
          title: '英単語',
          words: [
            ['standard quantity', '', '標準の量'],
            ['standard price', '', '標準の単価（材料）'],
            ['standard rate', '', '標準の賃率（労務）'],
            ['normal loss', 'ノーマル ロス', '正常減損（ふつうに出ると見込む減損）'],
            ['idle time', 'アイドル タイム', '遊休時間（払っているが作業しない時間）'],
            ['overhead absorption rate (OAR)', '', '製造間接費の配賦率'],
            ['standard selling price', '', '標準売価']
          ]
        }
      ],
      quiz: [
        { q: 'Product P has the following standard data per unit: direct materials 5 kg at $4 per kg; direct labour 3 hours at $10 per hour; variable production overhead $2 per direct labour hour. Budgeted fixed production overhead is $120,000 and budgeted direct labour hours are 40,000. Overheads are absorbed on direct labour hours. What is the standard absorption cost per unit?', type: 'number', answer: 65, unit: '$', explain: '材料 5 × $4 ＝ $20、労務 3 × $10 ＝ $30、変動製造間接費 3 × $2 ＝ $6。固定費の配賦率 $120,000 ÷ 40,000 ＝ 1時間 $3、3時間で $9。合計 $20 ＋ $30 ＋ $6 ＋ $9 ＝ $65。' },
        { q: 'Using the same data for product P, what is the standard marginal cost per unit?', choices: ['$65', '$56', '$50', '$59'], answer: 1, explain: '$20 ＋ $30 ＋ $6 ＝ $56。$65 は固定費まで入れた標準全部原価。$50 は変動製造間接費を入れ忘れた額。$59 は変動費の代わりに固定費 $9 を入れた額。' },
        { q: '完成品1個には材料 2.7kg が入っている。投入した材料の 10% が正常減損（normal loss）で失われる。1個あたりの標準の投入量は何kg？', type: 'number', answer: 3, unit: 'kg', explain: '完成品に残るのは投入量の 90%。2.7kg ÷ 0.9 ＝ 3kg。確かめ: 3kg の 10% ＝ 0.3kg が失われ、残り 2.7kg。2.7 × 1.1 ＝ 2.97kg とすると足りない。' },
        { q: 'Each unit of product Q requires 4.5 hours of active labour time. Idle time is expected to be 10% of total hours paid. The standard wage rate is $14 per hour. What is the standard direct labour cost per unit?', type: 'number', answer: 70, unit: '$', explain: '支払う時間 ＝ 4.5 ÷ 0.9 ＝ 5時間。5 × $14 ＝ $70。4.5 × 1.1 × $14 ＝ $69.30 は割合の基準を取り違えた答え。4.5 × $14 ＝ $63 は遊休時間を入れ忘れている。' },
        { q: 'Budgeted fixed production overhead is $240,000. Budgeted output is 12,000 units and each unit takes 2 machine hours. Fixed overhead is absorbed on machine hours. What is the standard fixed production overhead cost per unit?', choices: ['$10', '$5', '$20', '$40'], answer: 2, explain: '予算の機械時間 12,000 × 2 ＝ 24,000時間。配賦率 $240,000 ÷ 24,000 ＝ 1時間 $10。1個 2時間なので $20。$10 は1時間あたりの率のまま。$5 は 2 で割ってしまった額、$40 は 2 を二重にかけた額。' },
        { q: '標準売価 $120。標準原価カードは直接材料 $30、直接労務 $25、変動製造間接費 $10、固定製造間接費 $15。標準利益（全部原価）と標準貢献利益は？', choices: ['標準利益 $55、標準貢献利益 $40', '標準利益 $40、標準貢献利益 $65', '標準利益 $25、標準貢献利益 $55', '標準利益 $40、標準貢献利益 $55'], answer: 3, explain: '標準全部原価 $80 → 標準利益 $120 − $80 ＝ $40。標準変動費 $65 → 標準貢献利益 $120 − $65 ＝ $55。「標準利益 $55、標準貢献利益 $40」は2つを逆にした答え。貢献利益 $65 は、変動製造間接費を入れ忘れて $120 − $55 とした額。標準利益 $25 は固定費を2回引いた額（$120 − $80 − $15）。' }
      ]
    },
    {
      id: 'M118',
      no: 118,
      title: '売上価格差異と売上数量差異',
      goal: '売上価格差異と売上数量差異を計算し、全部原価計算と直接原価計算で数量差異の測り方を使い分けられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(a)'],
      slides: [
        {
          title: '文化祭の焼きそば屋',
          paras: ['1パック 300円で 100パック売る計画。1パックのもうけは 120円の見込み。', '実際は 280円に値下げして、120パック売れた。値下げで減った分と、多く売れて増えたもうけを、分けて見たい。値段の影響と、数の影響。売上の差異も、この2つに分ける。']
        },
        {
          title: '売上価格差異（sales price variance）',
          paras: ['売価が標準と違ったことによる差。標準売価（standard selling price）は、予算で決めた売価のこと。実際に売った量で計算する。'],
          formula: '（実際の売価 − 標準売価）× 実際の販売量',
          after: '実際の売価が高ければ有利（favourable, F）、低ければ不利（adverse, A）。「実際の売上 − 実際の販売量 × 標準売価」でも同じ答えになる。'
        },
        {
          title: '売上数量差異（sales volume variance）',
          paras: ['売れた量が予算と違ったことによる、利益への影響。量の差に、1単位あたりの標準の利益をかける。'],
          formula: '（実際の販売量 − 予算の販売量）× 標準利益',
          after: '予算より多く売れれば有利、少なければ不利。全部原価計算では標準利益、直接原価計算では標準貢献利益をかける（M116）。1単位の標準利益が書かれていないときは、予算利益 ÷ 予算の販売量 で出す。'
        },
        {
          title: '例題1: 椅子の3月',
          example: {
            problem: '予算: 1,000脚を標準売価 $90 で売る。標準全部原価 $66、標準直接原価 $50。実際: 1,100脚を売り、売上は $96,800 だった。売上価格差異と売上数量差異（全部原価計算・直接原価計算）は？',
            steps: ['実際の売価: $96,800 ÷ 1,100 ＝ $88', '価格差異: （$88 − $90）× 1,100 ＝ $2,200 不利（A）', '確かめ: $96,800 − 1,100 × $90 ＝ $96,800 − $99,000 ＝ −$2,200', '標準利益 $90 − $66 ＝ $24。数量差異（全部原価）: （1,100 − 1,000）× $24 ＝ $2,400 有利（F）', '標準貢献利益 $90 − $50 ＝ $40。数量差異（直接原価）: 100 × $40 ＝ $4,000 有利（F）'],
            answer: '価格差異 $2,200 A。数量差異は全部原価なら $2,400 F、直接原価なら $4,000 F'
          }
        },
        {
          title: '例題1を図で見る',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="3段の箱。実際の量と実際の売価で96,800ドル、実際の量と標準売価で99,000ドル、予算の量と標準売価で90,000ドル。上の2段の差が価格差異2,200ドル不利。量の差100脚に標準利益24ドルをかけた2,400ドル有利が数量差異" font-size="14"><text x="20" y="28" font-size="16" font-weight="600" fill="var(--ink)">椅子の3月: 売上の差異を分ける</text><rect x="20" y="44" width="240" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="66" fill="var(--ink)">実際の量 × 実際の売価</text><text x="32" y="88" fill="var(--ink)">1,100 × $88 ＝ $96,800</text><rect x="20" y="120" width="240" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="142" fill="var(--ink)">実際の量 × 標準売価</text><text x="32" y="164" fill="var(--ink)">1,100 × $90 ＝ $99,000</text><rect x="20" y="196" width="240" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="218" fill="var(--ink)">予算の量 × 標準売価</text><text x="32" y="240" fill="var(--ink)">1,000 × $90 ＝ $90,000</text><path d="M268,72 H280 V144 H268" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><text x="292" y="104" font-weight="600" fill="var(--ink)">価格差異</text><text x="292" y="124" fill="var(--ink)">$2,200 不利</text><path d="M268,152 H280 V224 H268" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><rect x="286" y="154" width="134" height="72" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="296" y="176" font-weight="600" fill="var(--ink)">数量差異</text><text x="296" y="196" fill="var(--ink)">100脚 × $24</text><text x="296" y="216" fill="var(--ink)">＝ $2,400 有利</text><text x="20" y="282" fill="var(--ink)">量の差は、売価でなく標準利益で測る</text></svg>`,
          caption: '下の2段の売上の差 $9,000 は使わない。100脚の差に標準利益 $24 をかける。'
        },
        {
          title: '例題2: 予算より売れなかった月',
          example: {
            problem: '製品Zの予算: 5,000個を標準売価 $40 で売る。標準全部原価は $28（うち固定製造間接費 $6）。実際: 4,600個を売り、売上は $193,200。2つの差異は？',
            steps: ['価格差異: $193,200 − 4,600 × $40 ＝ $193,200 − $184,000 ＝ $9,200 有利（実際の売価は $42）', '標準利益 $40 − $28 ＝ $12。数量差異（全部原価）: （4,600 − 5,000）× $12 ＝ $4,800 不利', '標準変動費 $28 − $6 ＝ $22、標準貢献利益 $18。数量差異（直接原価）: 400 × $18 ＝ $7,200 不利'],
            answer: '価格差異 $9,200 F。数量差異は全部原価 $4,800 A、直接原価 $7,200 A'
          }
        },
        {
          title: 'なぜ？ 2つに分ける理由',
          paras: ['売上の合計だけ見ると、値段の効果と数の効果が混ざる。例題1では売上が予算より $6,800 多いが、値下げで $2,200 失い、数で取り返している。', '数量差異を売価でなく利益で測るのは、1脚多く売って増えるのが売上 $90 ではなく、原価を引いたもうけだから。価格差異は値付けの結果、数量差異は売った量の結果として、分けて責任を問える。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '数量差異に売価をかける（100脚 × $90 ＝ $9,000）。数量差異は標準利益（直接原価計算なら標準貢献利益）で測る。価格差異に予算の販売量をかける（$2 × 1,000）のも誤り。実際の販売量を使う。生産量を使うのも誤り。売上の差異は、作った量でなく売った量で計算する。有利・不利の向きも毎回確かめる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上価格差異 ＝（実際の売価 − 標準売価）× 実際の販売量', '売上数量差異 ＝（実際の販売量 − 予算の販売量）× 標準利益（直接原価計算なら標準貢献利益）', '高く売れた・多く売れた＝有利（F）。安く・少なく＝不利（A）']
        },
        {
          title: '英単語',
          words: [
            ['sales price variance', '', '売上価格差異'],
            ['sales volume variance', '', '売上数量差異'],
            ['sales volume profit variance', '', '売上数量差異（標準利益で測る）'],
            ['sales volume contribution variance', '', '売上数量差異（標準貢献利益で測る）'],
            ['favourable (F)', 'フェイバラブル', '有利（利益を増やす）'],
            ['adverse (A)', 'アドバース', '不利（利益を減らす）'],
            ['standard profit per unit', '', '1単位あたり標準利益']
          ]
        }
      ],
      quiz: [
        { q: 'A company budgeted to sell 2,000 units at a standard selling price of $50 per unit. Actual sales were 2,200 units for total revenue of $105,600. What was the sales price variance?', choices: ['$4,400 favourable', '$4,400 adverse', '$4,000 adverse', '$5,600 favourable'], answer: 1, explain: '実際の売価 $105,600 ÷ 2,200 ＝ $48。（$48 − $50）× 2,200 ＝ $4,400 不利。標準より安く売ったので、向きは不利（favourable ではない）。確かめ: $105,600 − 2,200 × $50 ＝ −$4,400。$4,000 は予算の販売量 2,000 をかけた答え。$5,600 は実際の売上と予算の売上 $100,000 の差で、量の効果が混ざっている。' },
        { q: 'Using the same data, the budgeted profit was $30,000 under standard absorption costing. The sales volume variance is favourable. What is its amount?', type: 'number', answer: 3000, unit: '$', explain: '標準利益 ＝ 予算利益 $30,000 ÷ 予算の販売量 2,000 ＝ 1単位 $15（標準全部原価は $50 − $15 ＝ $35）。（2,200 − 2,000）× $15 ＝ $3,000 有利。200 × 売価 $50 ＝ $10,000 とするのは、売価で測る間違い。' },
        { q: 'Using the same data, the standard variable cost per unit is $27. What was the sales volume variance under standard marginal costing?', choices: ['$3,000 favourable', '$10,000 favourable', '$4,600 favourable', '$4,600 adverse'], answer: 2, explain: '標準貢献利益 $50 − $27 ＝ $23。200 × $23 ＝ $4,600。予算より多く売れたので有利。$3,000 は全部原価計算の標準利益で測った額。$10,000 は売価で測った額。' },
        { q: '予算: 800個を標準売価 $60 で売る。実際: 750個を $63 で売った。売上価格差異（有利）はいくら？', type: 'number', answer: 2250, unit: '$', explain: '（$63 − $60）× 750 ＝ $2,250 有利。予算の販売量 800 をかけて $2,400 とするのは誤り。価格差異は実際に売った量で計算する。' },
        { q: '3月に椅子を 1,300脚作り、1,100脚売った。予算の販売量は 1,000脚、標準利益は1脚 $24。売上数量差異（全部原価計算）は？', choices: ['$7,200 有利', '$9,000 有利', '$4,800 有利', '$2,400 有利'], answer: 3, explain: '売った量で計算する: （1,100 − 1,000）× $24 ＝ $2,400 有利。$7,200 は生産量 1,300 を使った答え。$9,000 は 100脚に売価 $90 をかけた答え。$4,800 は生産量と販売量の差 200脚を使った答え。' },
        { q: 'A sales manager cut the selling price below standard and, as a result, sold more units than budgeted. Which combination of sales variances is most likely?', choices: ['Favourable price variance and favourable volume variance', 'Adverse price variance and favourable volume variance', 'Favourable price variance and adverse volume variance', 'Adverse price variance and adverse volume variance'], answer: 1, explain: '標準より安く売ったので価格差異は不利。その結果、予算より多く売れたので数量差異は有利。2つの差異はつながっていて、片方だけで良し悪しを判断しない。' }
      ]
    }
  ],
  cards: [
    { id: 'M115-1', lesson: 'M115', q: '標準原価（standard cost）とは？', a: '製品1単位に「かかるはず」の原価を、要素ごとに前もって決めたもの' },
    { id: 'M115-2', lesson: 'M115', q: '標準原価の各要素の出し方は？', a: '標準の量 × 標準の単価（例: 木材 4kg × $5 ＝ $20）' },
    { id: 'M115-3', lesson: 'M115', q: '標準原価計算の目的を5つ', a: '予算づくり・統制（差異分析）・在庫の評価・価格決定・動機づけと評価' },
    { id: 'M115-4', lesson: 'M115', q: '標準の4つの種類は？', a: '理想（ideal）・達成可能（attainable）・現状（current）・基準（basic）' },
    { id: 'M115-5', lesson: 'M115', q: '最もやる気を引き出しやすい標準と、その理由は？', a: '達成可能標準。ふつうの無駄は許すが、努力すれば届く目標だから' },
    { id: 'M115-6', lesson: 'M115', q: 'なぜ実績は「実際に作った量の標準」と比べる？', a: '量が違えば原価が違うのは当然。量の差を除き、効率や単価の差だけを見るため' },
    { id: 'M116-1', lesson: 'M116', q: '標準原価計算と、全部・直接原価計算は何が違う？', a: '標準＝どの数字を使うか。全部・直接＝固定製造間接費を製品に入れるか' },
    { id: 'M116-2', lesson: 'M116', q: '標準直接原価に入るものは？', a: '直接材料・直接労務・変動製造間接費（固定費と販売費は入れない）' },
    { id: 'M116-3', lesson: 'M116', q: '標準原価計算での在庫の評価は？', a: '標準原価で評価する。実際との差は差異として当期の損益に出す' },
    { id: 'M116-4', lesson: 'M116', q: '標準全部原価と標準直接原価の在庫評価の差は？', a: '在庫の個数 × 1単位あたり固定製造間接費' },
    { id: 'M116-5', lesson: 'M116', q: '固定製造間接費の操業度差異が出るのはどちら？', a: '標準全部原価計算だけ。直接原価計算は固定費を配賦しないので出ない' },
    { id: 'M117-1', lesson: 'M117', q: '固定製造間接費の配賦率の出し方は？', a: '予算の固定製造間接費 ÷ 予算の作業時間（または予算の生産量）' },
    { id: 'M117-2', lesson: 'M117', q: '投入量の10%が正常減損。完成品に3.6kg必要なら投入量は？', a: '3.6 ÷ 0.9 ＝ 4kg（× 1.1 ではない）' },
    { id: 'M117-3', lesson: 'M117', q: '支払う時間の10%が遊休時間。実作業2.7時間なら支払う時間は？', a: '2.7 ÷ 0.9 ＝ 3時間（× 1.1 ではない）' },
    { id: 'M117-4', lesson: 'M117', q: '標準直接原価の中身は？', a: '直接材料＋直接労務＋変動製造間接費' },
    { id: 'M117-5', lesson: 'M117', q: '標準利益と標準貢献利益の違いは？', a: '標準利益＝標準売価−標準全部原価。標準貢献利益＝標準売価−標準変動費' },
    { id: 'M117-6', lesson: 'M117', q: 'なぜ正常減損や遊休時間を標準に入れる？', a: 'ふつう出る分まで差異にすると、本当の問題と見分けられないから' },
    { id: 'M118-1', lesson: 'M118', q: '売上価格差異の式は？', a: '（実際の売価 − 標準売価）× 実際の販売量' },
    { id: 'M118-2', lesson: 'M118', q: '売上数量差異の式は？（全部原価計算）', a: '（実際の販売量 − 予算の販売量）× 標準利益' },
    { id: 'M118-3', lesson: 'M118', q: '標準直接原価計算の売上数量差異は何で測る？', a: '標準貢献利益（標準売価 − 標準変動費）' },
    { id: 'M118-4', lesson: 'M118', q: '売上数量差異を売価で測ってはいけない理由は？', a: '1個多く売って増えるのは売上でなく、原価を引いたもうけだから' },
    { id: 'M118-5', lesson: 'M118', q: '売上の差異に使う量は、生産量？販売量？', a: '販売量。作った量は使わない' },
    { id: 'M118-6', lesson: 'M118', q: '値下げして予算より多く売れた。差異の組み合わせは？', a: '価格差異は不利、数量差異は有利' }
  ]
});
