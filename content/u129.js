(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 129,
  part: 8,
  partTitle: '標準原価計算と差異分析',
  lessons: [
    {
      id: 'M119',
      no: 119,
      title: '材料費の差異: 総差異・価格差異・数量差異',
      goal: '材料費の総差異を価格差異と数量差異に分けて計算し、有利・不利を判定できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(b)'],
      slides: [
        {
          title: '米代が予定より高かった',
          paras: ['毎月の米代の目安を「10 kg × 400円 ＝ 4,000円」と決めていた。今月は 4,500円かかった。', '原因は2つ考えられる。米が値上がりした（値段の問題）か、たくさん食べた（量の問題）か。500円の差を「値段の分」と「量の分」に分けると、何を直せばよいかが分かる。材料費の差異分析は、この分け方を会社でする。']
        },
        {
          title: '椅子工房の標準と今月の実績',
          paras: ['標準原価カード（standard cost card）の材料の行を使う。今月買った材料は、全部今月使ったとする。'],
          table: { caption: '椅子1脚の材料の標準と今月の実績', head: ['項目', '標準・実績'], rows: [['1脚の標準の量', '4 kg'], ['標準価格', '$5 / kg'], ['1脚の標準材料費', '$20'], ['今月作った数', '1,900脚'], ['実際に買って使った量', '7,500 kg'], ['実際に払った額', '$39,000（$5.20 / kg）']] }
        },
        {
          title: '3つの差異の式',
          list: ['総差異（total variance）＝ 実際生産の標準原価 − 実際の原価', '価格差異（price variance）＝（標準価格 − 実際価格）× 実際の量', '数量差異（usage variance）＝（標準の量 − 実際の量）× 標準価格'],
          after: '標準の量は「実際に作った数 × 1脚の標準の量」。答えがプラスなら有利（favourable, F）、マイナスなら不利（adverse, A）。',
          formula: '総差異 ＝ 価格差異 ＋ 数量差異'
        },
        {
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="材料費の差異の3列。実際の原価と、実際の量に標準価格をかけた額の差が価格差異。それと標準の量に標準価格をかけた額の差が数量差異。両端の差が総差異" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">3列に並べて引き算する</text><rect x="20" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="66" text-anchor="middle" fill="var(--ink)">実際の原価</text><text x="80" y="90" text-anchor="middle" fill="var(--quiet)">AQ × AP</text><text x="80" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$39,000</text><rect x="160" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="66" text-anchor="middle" fill="var(--ink)">実際量×標準価格</text><text x="220" y="90" text-anchor="middle" fill="var(--quiet)">AQ × SP</text><text x="220" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$37,500</text><rect x="300" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="66" text-anchor="middle" fill="var(--ink)">標準量×標準価格</text><text x="360" y="90" text-anchor="middle" fill="var(--quiet)">SQ × SP</text><text x="360" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$38,000</text><path d="M80,134 L80,144 L220,144 L220,134" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><path d="M220,134 L220,144 L360,144 L360,134" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><text x="150" y="166" text-anchor="middle" fill="var(--ink)">価格差異</text><text x="150" y="186" text-anchor="middle" fill="var(--ink)">$1,500 A</text><text x="290" y="166" text-anchor="middle" fill="var(--ink)">数量差異</text><text x="290" y="186" text-anchor="middle" fill="var(--ink)">$500 F</text><path d="M80,198 L80,208 L360,208 L360,198" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><rect x="130" y="216" width="180" height="32" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="237" text-anchor="middle" font-weight="600" fill="var(--ink)">総差異 $1,000 A</text></svg>`,
          caption: 'AQ＝実際の量、AP＝実際価格、SQ＝実際生産に合わせた標準の量、SP＝標準価格。左の差が価格、右の差が量の分。'
        },
        {
          title: '例題: 椅子工房の材料費の差異',
          example: {
            problem: '椅子工房の今月。標準は1脚 4 kg × $5。1,900脚作り、7,500 kg を $39,000 で買って使った。総差異・価格差異・数量差異を出す。',
            steps: ['標準の量 ＝ 1,900脚 × 4 kg ＝ 7,600 kg。標準原価 ＝ 7,600 × $5 ＝ $38,000', '総差異 ＝ $38,000 − $39,000 ＝ −$1,000 → $1,000 A（不利）', '価格差異: 7,500 kg × $5 ＝ $37,500。$37,500 − $39,000 ＝ −$1,500 → $1,500 A', '数量差異:（7,600 − 7,500）× $5 ＝ $500 → $500 F（有利）', '確かめ: $1,500 A と $500 F を合わせて $1,000 A。総差異と一致'],
            answer: '総差異 $1,000 A ＝ 価格差異 $1,500 A ＋ 数量差異 $500 F'
          }
        },
        {
          title: 'なぜ？ 2つに分ける理由',
          paras: ['材料の値段は購買部（purchasing）、使う量は製造部（production）が主に責任をもつ。総差異 $1,000 A だけでは、どちらに聞けばよいか分からない。', '分けると、購買部は「なぜ $5.20 で買ったか」、製造部は「なぜ 100 kg 少なく済んだか」を説明できる。価格は実際の量で、量は標準価格で測るので、ほかの部門の結果が混ざらない。']
        },
        {
          title: '買った量と使った量がちがうとき',
          paras: ['在庫を標準原価で記録する会社では、価格差異は買ったとき（at the point of purchase）に、買った量全部で出す。在庫を実際原価で記録するなら、使った量で出す。数量差異はいつも使った量で出す。', '例: 10,000 kg を $52,000 で買い、9,000 kg 使った。標準価格 $5.40。価格差異 ＝ 10,000 × $5.40 − $52,000 ＝ $2,000 F。使った 9,000 kg で出すのではない。'],
          note: { kind: 'tip', text: '問題文に inventory is valued at standard cost とあれば、買った量で価格差異を出す合図。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '標準の量を予算の生産量（2,000脚 × 4 kg）で出すのは誤り。差異は実際に作った量（1,900脚）に合わせた標準と比べる。数量差異に実際価格（$5.20）をかけるのも誤り。数量差異はいつも標準価格で測る。向きは「実際の方が安い・少ない＝有利」で確かめる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['価格差異 ＝（標準価格 − 実際価格）× 実際の量', '数量差異 ＝（実際生産 × 1個の標準の量 − 実際の量）× 標準価格', '総差異 ＝ 価格差異 ＋ 数量差異。実際の方が安い・少なければ有利（F）']
        },
        {
          title: '英単語',
          words: [
            ['materials total variance', '', '材料費の総差異'],
            ['materials price variance', '', '材料の価格差異'],
            ['materials usage variance', '', '材料の数量差異（使用量の差異）'],
            ['standard quantity', 'スタンダード クオンティティ', '実際生産に合わせた標準の量'],
            ['favourable (F)', 'フェイバラブル', '有利（実際の原価が標準より少ない）'],
            ['adverse (A)', 'アドバース', '不利（実際の原価が標準より多い）'],
            ['standard cost card', 'スタンダード コスト カード', '標準原価カード']
          ]
        }
      ],
      quiz: [
        { q: '標準: 製品1個に材料 3 kg、1 kg $4。今月 1,000個作り、材料 3,200 kg を $12,160 で買って全部使った。材料の数量差異の金額は？（有利・不利は解説で確かめる）', type: 'number', answer: 800, unit: '$', explain: '標準の量 1,000 × 3 ＝ 3,000 kg。（3,000 − 3,200）× $4 ＝ −$800 → $800 A（不利）。価格差異は 3,200 × $4 − $12,160 ＝ $640 F、総差異は $12,000 − $12,160 ＝ $160 A。数量差異に実際価格 $3.80 をかけた $760 は誤り。' },
        { q: 'A company purchased and used 6,000 kg of material at a total cost of $33,000. The standard price is $5 per kg and the standard usage is 2 kg per unit. Actual production was 3,100 units. What is the materials usage variance?', choices: ['$1,100 favourable', '$1,000 adverse', '$1,000 favourable', '$3,000 adverse'], answer: 2, explain: '標準の量 3,100 × 2 ＝ 6,200 kg。実際は 6,000 kg で 200 kg 少ないので有利。200 × $5 ＝ $1,000 F。$1,100 は実際価格 $5.50 をかけた誤り。$3,000 A は価格差異（6,000 × $5 − $33,000）。' },
        { q: 'A company purchased 8,000 kg of material for $35,200 and used 7,000 kg in production. The standard price is $4.50 per kg. Inventory is valued at standard cost. What is the materials price variance (in $)?', type: 'number', answer: 800, unit: '$', explain: '在庫を標準原価で記録するので、価格差異は買った量で出す。8,000 × $4.50 ＝ $36,000。$36,000 − $35,200 ＝ $800 F。使った 7,000 kg で出すと 7,000 ×（$4.50 − $4.40）＝ $700 F になり誤り。' },
        { q: '材料の総差異は $2,400 A、価格差異は $3,000 F だった。数量差異は？', choices: ['$600 A', '$5,400 A', '$600 F', '$5,400 F'], answer: 1, explain: '総差異 ＝ 価格差異 ＋ 数量差異。有利をプラス、不利をマイナスにすると、−$2,400 ＝ ＋$3,000 ＋ 数量差異。数量差異 ＝ −$5,400 → $5,400 A。$600 は単純に引き算しただけで、向きを無視している。' },
        { q: 'Which of the following is the most likely cause of an adverse materials price variance together with a favourable materials usage variance?', choices: ['Buying lower quality material than standard', 'An unexpected bulk purchase discount', 'Greater wastage in production than expected', 'Buying higher quality material than standard'], answer: 3, explain: '品質のよい材料は高い（価格差異 A）が、無駄が減る（数量差異 F）。品質の悪い材料はその逆（価格 F・数量 A）。大量購入の割引は価格 F。無駄が多いのは数量 A で、価格には関係しない。' }
      ]
    },
    {
      id: 'M120',
      no: 120,
      title: '労務費の差異: 総差異・賃率差異・能率差異',
      goal: '労務費の総差異を賃率差異と能率差異に分けて計算し、遊休時間がある問題も解けるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(c)'],
      slides: [
        {
          title: 'バイト代が予定より高かった',
          paras: ['カフェの店長が、ある日のバイト代を「8時間 × 時給1,200円 ＝ 9,600円」と見積もった。実際は 9,900円かかった。', '時給が上がった（賃率の問題）のか、作業が遅くて長く働いた（時間の問題）のか。材料の「価格と量」と同じで、労務費は「時給と時間」に分ける。']
        },
        {
          title: '椅子工房の標準と今月の実績',
          table: { caption: '椅子1脚の直接労務費の標準と今月の実績', head: ['項目', '標準・実績'], rows: [['1脚の標準時間', '2時間'], ['標準賃率', '$12 / 時間'], ['1脚の標準労務費', '$24'], ['今月作った数', '1,900脚'], ['実際に払って作業した時間', '3,700時間'], ['実際に払った賃金', '$46,250（$12.50 / 時間）']] }
        },
        {
          title: '3つの差異の式',
          list: ['総差異 ＝ 実際生産の標準時間 × 標準賃率 − 実際の賃金', '賃率差異（rate variance）＝（標準賃率 − 実際賃率）× 払った時間', '能率差異（efficiency variance）＝（標準時間 − 実際の作業時間）× 標準賃率'],
          after: '材料の「価格」を「賃率（1時間の賃金）」に、「量」を「時間」に置きかえた形。標準時間は「実際に作った数 × 1脚の標準時間」。',
          formula: '総差異 ＝ 賃率差異 ＋ 能率差異'
        },
        {
          title: '例題: 椅子工房の労務費の差異',
          example: {
            problem: '標準は1脚 2時間 × $12。1,900脚作り、3,700時間働いて $46,250 払った。総差異・賃率差異・能率差異を出す。',
            steps: ['標準時間 ＝ 1,900 × 2 ＝ 3,800時間。標準原価 ＝ 3,800 × $12 ＝ $45,600', '総差異 ＝ $45,600 − $46,250 ＝ −$650 → $650 A', '賃率差異: 3,700 × $12 ＝ $44,400。$44,400 − $46,250 ＝ −$1,850 → $1,850 A', '能率差異:（3,800 − 3,700）× $12 ＝ $1,200 → $1,200 F', '確かめ: $1,850 A と $1,200 F を合わせて $650 A'],
            answer: '総差異 $650 A ＝ 賃率差異 $1,850 A ＋ 能率差異 $1,200 F'
          }
        },
        {
          title: '3列で見る',
          table: { caption: '上と下の差が賃率差異、下と最後の差が能率差異', head: ['列', '計算', '$'], rows: [['実際の賃金', '3,700 × $12.50', '46,250'], ['実際時間 × 標準賃率', '3,700 × $12', '44,400'], ['標準時間 × 標準賃率', '3,800 × $12', '45,600']] },
          paras: ['$46,250 → $44,400 の差 $1,850 A が賃率差異。$44,400 → $45,600 の差 $1,200 F が能率差異。']
        },
        {
          title: 'なぜ？ 時給と時間を分ける理由',
          paras: ['賃率は、昇給・残業手当・誰を配置するかで決まり、人事や給与の担当が主に説明する。作業時間は、段取りや腕前、材料の質で決まり、現場の責任者が説明する。', '能率差異を標準賃率で測るのは、時給の上がり下がりを混ぜずに、「何時間むだにしたか（節約したか）」だけを金額にするため。']
        },
        {
          title: '遊休時間（idle time）があるとき',
          paras: ['機械の故障や材料待ちで、賃金は払うが作業できなかった時間を遊休時間という。', '賃率差異は払った時間で出す。遊休時間差異（idle time variance）＝ 遊休時間 × 標準賃率 で、いつも不利。能率差異は実際に作業した時間（払った時間 − 遊休時間）で出す。'],
          formula: '総差異 ＝ 賃率差異 ＋ 遊休時間差異 ＋ 能率差異'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '能率差異に実際賃率（$12.50）をかけるのは誤り。いつも標準賃率。標準時間を予算の生産量（2,000脚）で出すのも誤り。遊休時間があるのに、払った時間で能率差異を出すのも誤り。能率差異は作業した時間で出す。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['賃率差異 ＝（標準賃率 − 実際賃率）× 払った時間', '能率差異 ＝（実際生産の標準時間 − 作業した時間）× 標準賃率', '遊休時間は別に「遊休時間 × 標準賃率」の不利差異にする']
        },
        {
          title: '英単語',
          words: [
            ['labour total variance', '', '労務費の総差異'],
            ['labour rate variance', 'レイト ヴァリアンス', '賃率差異（時給の差）'],
            ['labour efficiency variance', 'エフィシェンシー ヴァリアンス', '能率差異（作業時間の差）'],
            ['standard hours for actual output', '', '実際生産に合わせた標準時間'],
            ['hours paid / hours worked', '', '払った時間 / 作業した時間'],
            ['idle time variance', 'アイドル タイム ヴァリアンス', '遊休時間差異（いつも不利）']
          ]
        }
      ],
      quiz: [
        { q: '標準: 製品1個に 1.5時間、1時間 $14。今月 800個作り、1,250時間働いて $16,875 払った。労務費の能率差異の金額は？（有利・不利は解説で確かめる）', type: 'number', answer: 700, unit: '$', explain: '標準時間 800 × 1.5 ＝ 1,200時間。（1,200 − 1,250）× $14 ＝ −$700 → $700 A。賃率差異は 1,250 × $14 − $16,875 ＝ $625 F、総差異は $16,800 − $16,875 ＝ $75 A。実際賃率 $13.50 をかけた $675 は誤り。' },
        { q: 'The standard labour rate is $10 per hour and the standard time is 2 hours per unit. During May, 2,000 units were made. Labour was paid for 4,200 hours at a total cost of $44,100. What is the labour rate variance?', choices: ['$2,000 adverse', '$2,100 adverse', '$2,100 favourable', '$4,100 adverse'], answer: 1, explain: '4,200 × $10 ＝ $42,000。$42,000 − $44,100 ＝ −$2,100 → $2,100 A。$2,000 A は能率差異（（4,000 − 4,200）× $10）、$4,100 A は総差異（$40,000 − $44,100）。' },
        { q: 'A company paid for 5,500 labour hours, of which 300 hours were idle time. Actual output was 2,500 units and the standard time is 2 hours per unit. The standard rate is $9 per hour. What is the labour efficiency variance (in $)?', type: 'number', answer: 1800, unit: '$', explain: '作業した時間 ＝ 5,500 − 300 ＝ 5,200時間。標準時間 2,500 × 2 ＝ 5,000時間。（5,000 − 5,200）× $9 ＝ −$1,800 → $1,800 A。払った 5,500時間で出した $4,500 は誤り。遊休時間差異 300 × $9 ＝ $2,700 A は別に出す。' },
        { q: '時給の高いベテラン職人に作業させたところ、作業が標準より速く終わった。起きやすい組み合わせは？', choices: ['賃率差異 有利、能率差異 不利', '賃率差異 不利、能率差異 不利', '賃率差異 不利、能率差異 有利', '賃率差異 有利、能率差異 有利'], answer: 2, explain: '時給が標準より高いので賃率差異は不利。腕がよく速く終わったので能率差異は有利。時給の安い新人を使うと、その逆（賃率 有利・能率 不利）になりやすい。' },
        { q: 'Which of the following statements about labour variances is correct?', choices: ['The rate variance is calculated using the standard hours for actual output', 'Idle time variances are always favourable', 'The efficiency variance is calculated using the hours paid, including idle time', 'The efficiency variance is valued at the standard rate per hour'], answer: 3, explain: '能率差異は時間の差に標準賃率をかける。賃率差異は払った（実際の）時間で出す。遊休時間差異はいつも不利。能率差異は遊休時間を除いた作業時間で出す。' }
      ]
    },
    {
      id: 'M121',
      no: 121,
      title: '変動製造間接費の差異: 予算差異と能率差異',
      goal: '変動製造間接費の総差異を予算差異と能率差異に分けて計算し、労務費の能率差異とのつながりを説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(d)'],
      slides: [
        {
          title: 'エアコン代は使った時間で決まる',
          paras: ['電気代の目安を「1時間 30円」と決めた。100時間使えば 3,000円のはず。実際は 3,300円かかった。', '1時間あたりの料金が上がったのか、使った時間が長かったのか。工場の電気代や消耗品（変動製造間接費）も、作業時間に比例して増えると考え、同じように2つに分ける。']
        },
        {
          title: '作業時間を物差しにする',
          paras: ['変動製造間接費（variable production overhead）は、機械の電気代、潤滑油、小さな消耗品など。1脚ごとに数えにくいので、作業1時間あたりの標準配賦率で決める。', '椅子工房: 1時間 $3、1脚 2時間 → 1脚 $6。今月は 1,900脚作り、作業は 3,700時間、実際の変動製造間接費は $10,730。'],
          note: { kind: 'tip', text: '問題が機械時間（per machine hour）で配賦しているなら、差異の「時間」もすべて機械時間で数える。' }
        },
        {
          title: '3つの差異の式',
          list: ['総差異 ＝ 実際生産の標準時間 × 標準配賦率 − 実際の変動間接費', '予算差異（expenditure variance）＝ 作業した時間 × 標準配賦率 − 実際の変動間接費', '能率差異（efficiency variance）＝（標準時間 − 作業した時間）× 標準配賦率'],
          after: '形は労務費と同じ。賃率の代わりに「1時間あたりの変動間接費（標準配賦率）」を使う。',
          formula: '総差異 ＝ 予算差異 ＋ 能率差異'
        },
        {
          title: '例題: 椅子工房の変動間接費の差異',
          example: {
            problem: '標準は1時間 $3、1脚 2時間。1,900脚作り、作業 3,700時間、実際の変動間接費 $10,730。総差異・予算差異・能率差異を出す。',
            steps: ['標準時間 ＝ 1,900 × 2 ＝ 3,800時間。標準原価 ＝ 3,800 × $3 ＝ $11,400', '総差異 ＝ $11,400 − $10,730 ＝ $670 → $670 F', '予算差異: 3,700 × $3 ＝ $11,100。$11,100 − $10,730 ＝ $370 → $370 F', '能率差異:（3,800 − 3,700）× $3 ＝ $300 → $300 F', '確かめ: $370 F ＋ $300 F ＝ $670 F'],
            answer: '総差異 $670 F ＝ 予算差異 $370 F ＋ 能率差異 $300 F'
          }
        },
        {
          title: '3列で見る',
          table: { caption: '上と中の差が予算差異、中と下の差が能率差異', head: ['列', '計算', '$'], rows: [['実際の変動間接費', '実績', '10,730'], ['作業時間 × 標準配賦率', '3,700 × $3', '11,100'], ['標準時間 × 標準配賦率', '3,800 × $3', '11,400']] }
        },
        {
          title: 'なぜ？ 能率差異が労務費と同じ向きになる',
          paras: ['変動間接費は作業時間に比例すると考えている。作業が100時間早く終われば、その100時間分の電気代なども使わずに済んだとみなす。', 'だから変動間接費の能率差異は、労務費の能率差異と同じ「100時間」から出て、向きも同じになる。予算差異の方は、電気料金の値上がりや無駄づかいなど、作業した時間に対して使いすぎたか（節約したか）を表す。']
        },
        {
          title: '遊休時間があるとき',
          paras: ['遊休時間には機械が止まっていて、電気代などはかからないと考える。だから変動間接費の差異は、すべて「作業した時間」で出す。払った時間は使わない。', '例: 4,000時間払い、うち 200時間が遊休。配賦率は作業1時間 $2、実際の変動間接費 $7,900。予算差異 ＝ 3,800 × $2 − $7,900 ＝ −$300 → $300 A。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '能率差異に労務費の賃率（$12）をかけるのは誤り。変動間接費の標準配賦率（$3）をかける。遊休時間がある問題で、払った時間を使うのも誤り。また変動製造間接費には操業度差異がない。量に比例する費用なので、作る量が変わっても1単位の費用は変わらない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予算差異 ＝ 作業した時間 × 標準配賦率 − 実際の変動間接費', '能率差異 ＝（実際生産の標準時間 − 作業した時間）× 標準配賦率', '能率差異の時間は労務費と同じなので、向きも同じになる']
        },
        {
          title: '英単語',
          words: [
            ['variable production overhead', '', '変動製造間接費'],
            ['variable overhead expenditure variance', 'エクスペンディチャー ヴァリアンス', '変動間接費の予算差異（使った額の差）'],
            ['variable overhead efficiency variance', '', '変動間接費の能率差異（作業時間の差）'],
            ['variable overhead absorption rate', '', '変動間接費の標準配賦率（1時間あたり）'],
            ['hours worked', 'アワーズ ワークト', '実際に作業した時間']
          ]
        }
      ],
      quiz: [
        { q: '変動製造間接費の標準配賦率は作業1時間 $4、製品1個の標準時間は 0.5時間。今月 6,000個作り、作業は 3,100時間、実際の変動間接費は $11,800。予算差異の金額は？（有利・不利は解説で確かめる）', type: 'number', answer: 600, unit: '$', explain: '3,100 × $4 ＝ $12,400。$12,400 − $11,800 ＝ $600 F。能率差異は（3,000 − 3,100）× $4 ＝ $400 A、総差異は 3,000 × $4 − $11,800 ＝ $200 F。標準時間 3,000時間で出した $200 は総差異。' },
        { q: 'Variable production overhead is absorbed at $2.50 per direct labour hour. The standard time is 3 hours per unit. In March, 1,200 units were produced in 3,800 labour hours. Actual variable overhead was $9,000. What is the variable overhead efficiency variance?', choices: ['$500 favourable', '$0', '$500 adverse', '$6,500 adverse'], answer: 2, explain: '標準時間 1,200 × 3 ＝ 3,600時間。（3,600 − 3,800）× $2.50 ＝ −$500 → $500 A。$500 F は予算差異（3,800 × $2.50 − $9,000）。$0 は総差異（3,600 × $2.50 − $9,000）。総差異が0でも、中に有利と不利が隠れていることがある。$6,500 A は個数 1,200 を時間に直さず（1,200 − 3,800）× $2.50 とした誤り。' },
        { q: 'Labour was paid for 2,600 hours, including 100 hours of idle time. Variable overhead is absorbed at $5 per hour worked. Actual variable overhead was $12,900. What is the variable overhead expenditure variance (in $)?', type: 'number', answer: 400, unit: '$', explain: '作業した時間 ＝ 2,600 − 100 ＝ 2,500時間。2,500 × $5 ＝ $12,500。$12,500 − $12,900 ＝ −$400 → $400 A。払った 2,600時間で出すと $13,000 − $12,900 ＝ $100 F になり誤り。' },
        { q: '労務費の能率差異は $1,200 F。標準賃率は1時間 $12、変動製造間接費の標準配賦率は作業1時間 $3。変動製造間接費の能率差異は？', choices: ['$300 F', '$300 A', '$1,200 F', '$4,800 F'], answer: 0, explain: '労務費の能率差異から時間の差を出す: $1,200 ÷ $12 ＝ 100時間（標準より少ない）。変動間接費も同じ時間で出すので 100 × $3 ＝ $300 F。向きも同じ有利。$4,800 は $1,200 × $12 ÷ $3 と比を逆に使った誤り。' },
        { q: '変動製造間接費の予算差異（expenditure variance）が表すものは？', choices: ['作業が標準より遅かった（速かった）ことによる分', '予算の生産量と実際の生産量のちがいによる分', '直接材料の値上がりによる分', '実際に作業した時間に対して、変動間接費を標準より多く（少なく）使った分'], answer: 3, explain: '予算差異は「作業時間 × 標準配賦率」と実際の額の差。作業の速さは能率差異。生産量のちがいによる差は固定費の操業度差異で、変動費にはない。材料の値上がりは材料の価格差異。' }
      ]
    },
    {
      id: 'M122',
      no: 122,
      title: '固定製造間接費の差異①: 予算差異と操業度差異',
      goal: '標準全部原価計算で固定製造間接費の総差異・予算差異・操業度差異を計算し、標準直接原価計算との違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(e)'],
      slides: [
        {
          title: 'スマホの定額プランで考える',
          paras: ['月 3,000円の定額プランで、30日使う予定だった。1日あたり 100円の計算になる。', '値上げで 3,200円になったら、払った額が予定とちがう問題（予算差異）。20日しか使わなかったら、100円 × 20日 ＝ 2,000円分しか使ったことにならず、1,000円分は生かせなかった。これが使った量が予定とちがう問題（操業度差異）。']
        },
        {
          title: '固定費は配賦して原価にする',
          paras: ['固定製造間接費（fixed production overhead）は、工場の家賃や管理者の給料など、作る量で変わらない費用。標準全部原価計算では、予算の生産量で割った標準配賦率で、1脚ずつに配賦する。', '椅子工房: 今月の予算 $32,000 ÷ 予算生産量 2,000脚 ＝ 1脚 $16。1脚 2時間なので1時間 $8 で、M117 の標準原価カードと同じ配賦率。今月は 1,900脚作り、実際の固定費は $33,500。'],
          formula: '標準配賦率 ＝ 予算の固定費 ÷ 予算の生産量（または予算の時間）'
        },
        {
          title: '3つの差異の式',
          list: ['総差異 ＝ 配賦した額（実際生産 × 標準配賦率）− 実際の固定費', '予算差異（expenditure variance）＝ 予算の固定費 − 実際の固定費', '操業度差異（volume variance）＝（実際生産 − 予算生産）× 1個の標準配賦率'],
          after: '総差異は、M045 で学んだ過小配賦・過大配賦（under / over-absorption）と同じ金額になる。',
          formula: '総差異 ＝ 予算差異 ＋ 操業度差異'
        },
        {
          svg: `<svg viewBox="0 0 440 262" role="img" aria-label="固定製造間接費の差異の3列。実際の固定費と予算の固定費の差が予算差異。予算の固定費と配賦した額の差が操業度差異。両端の差が総差異" font-size="14"><text x="20" y="26" font-size="17" font-weight="600" fill="var(--ink)">固定費も3列で並べる</text><rect x="20" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="66" text-anchor="middle" fill="var(--ink)">実際の固定費</text><text x="80" y="90" text-anchor="middle" fill="var(--quiet)">actual</text><text x="80" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$33,500</text><rect x="160" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="66" text-anchor="middle" fill="var(--ink)">予算の固定費</text><text x="220" y="90" text-anchor="middle" fill="var(--quiet)">budget</text><text x="220" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$32,000</text><rect x="300" y="42" width="120" height="86" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="66" text-anchor="middle" fill="var(--ink)">配賦した額</text><text x="360" y="90" text-anchor="middle" fill="var(--quiet)">1,900 × $16</text><text x="360" y="114" text-anchor="middle" font-weight="600" fill="var(--ink)">$30,400</text><path d="M80,134 L80,144 L220,144 L220,134" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><path d="M220,134 L220,144 L360,144 L360,134" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><text x="150" y="166" text-anchor="middle" fill="var(--ink)">予算差異</text><text x="150" y="186" text-anchor="middle" fill="var(--ink)">$1,500 A</text><text x="290" y="166" text-anchor="middle" fill="var(--ink)">操業度差異</text><text x="290" y="186" text-anchor="middle" fill="var(--ink)">$1,600 A</text><path d="M80,198 L80,208 L360,208 L360,198" fill="none" stroke="var(--quiet)" stroke-width="1.5"/><rect x="130" y="216" width="180" height="32" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="237" text-anchor="middle" font-weight="600" fill="var(--ink)">総差異 $3,100 A</text></svg>`,
          caption: '真ん中が「予算の固定費」になるのが材料・労務とのちがい。総差異 $3,100 A は、固定費の過小配賦と同じ額。'
        },
        {
          title: '例題: 椅子工房の固定費の差異',
          example: {
            problem: '固定製造間接費の予算 $32,000、予算生産量 2,000脚（1脚2時間、1時間 $8）。今月は 1,900脚作り、実際の固定費は $33,500。標準全部原価計算で、総差異・予算差異・操業度差異を出す。',
            steps: ['標準配賦率 ＝ $32,000 ÷ 2,000 ＝ 1脚 $16（＝ 2時間 × $8）', '配賦した額 ＝ 1,900 × $16 ＝ $30,400。総差異 ＝ $30,400 − $33,500 ＝ −$3,100 → $3,100 A', '予算差異 ＝ $32,000 − $33,500 ＝ −$1,500 → $1,500 A', '操業度差異 ＝（1,900 − 2,000）× $16 ＝ −$1,600 → $1,600 A', '確かめ: $1,500 A ＋ $1,600 A ＝ $3,100 A'],
            answer: '総差異 $3,100 A ＝ 予算差異 $1,500 A ＋ 操業度差異 $1,600 A'
          }
        },
        {
          title: 'なぜ？ 操業度差異が出る理由',
          paras: ['$32,000 の固定費は、2,000脚作る前提で1脚 $16 ずつ回収する計画だった。実際は 1,900脚なので、配賦できたのは $30,400。足りない $1,600 が操業度差異（不利）。', '予定より多く作れば、固定費を多く配賦できるので有利になる。操業度差異は「固定費をいくら払ったか」ではなく、「工場をどれだけ使って作ったか」を表す。払った額のずれは予算差異が表す。']
        },
        {
          title: '時間で配賦するとき・直接原価計算のとき',
          paras: ['配賦率が作業1時間あたりなら、操業度差異 ＝（実際生産の標準時間 − 予算の時間）× 1時間の配賦率。椅子工房なら（3,800 − 4,000）× $8 ＝ $1,600 A で同じ答えになる。時間の差には1時間の $8、個数の差には1脚の $16（$8 × 2時間）を掛ける。', '標準直接原価計算（standard marginal costing）では固定費を配賦しないので、出るのは予算差異だけ。操業度差異は出ない。'],
          note: { kind: 'tip', text: '操業度差異は次のレッスンで、生産能力差異（capacity variance）と能率差異（efficiency variance）に分ける。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '予算差異で、予算を実際の生産量に合わせて直すのは誤り。固定費は作る量で変わらないので、元の予算 $32,000 とそのまま比べる。操業度差異に実際の配賦率（$33,500 ÷ 1,900）を使うのも誤り。いつも標準配賦率を使う。予算より少なく作ったら不利、多く作ったら有利。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['予算差異 ＝ 予算の固定費 − 実際の固定費（生産量で直さない）', '操業度差異 ＝（実際生産 − 予算生産）× 1個の標準配賦率', '総差異 ＝ 過小・過大配賦の額。直接原価計算では予算差異だけ']
        },
        {
          title: '英単語',
          words: [
            ['fixed production overhead', '', '固定製造間接費'],
            ['fixed overhead expenditure variance', '', '固定費の予算差異（払った額の差）'],
            ['fixed overhead volume variance', 'ヴォリューム ヴァリアンス', '操業度差異（作った量の差）'],
            ['budgeted output', 'バジェッテッド アウトプット', '予算の生産量'],
            ['under-absorption / over-absorption', '', '過小配賦 / 過大配賦'],
            ['standard marginal costing', '', '標準直接原価計算']
          ]
        }
      ],
      quiz: [
        { q: '固定製造間接費の予算は $60,000、予算生産量は 12,000個。今月は 12,600個作り、実際の固定費は $58,500。標準全部原価計算の操業度差異の金額は？（有利・不利は解説で確かめる）', type: 'number', answer: 3000, unit: '$', explain: '標準配賦率 $60,000 ÷ 12,000 ＝ $5。（12,600 − 12,000）× $5 ＝ $3,000 F（予算より多く作った）。予算差異は $60,000 − $58,500 ＝ $1,500 F、総差異は 12,600 × $5 − $58,500 ＝ $4,500 F（過大配賦）。' },
        { q: 'Budgeted fixed production overheads were $120,000 and actual fixed production overheads were $123,000. Budgeted output was 10,000 units and actual output was 9,500 units. Under standard absorption costing, what is the fixed overhead volume variance?', choices: ['$3,000 adverse', '$6,000 adverse', '$6,000 favourable', '$9,000 adverse'], answer: 1, explain: '標準配賦率 $120,000 ÷ 10,000 ＝ $12。（9,500 − 10,000）× $12 ＝ −$6,000 → $6,000 A。$3,000 A は予算差異（$120,000 − $123,000）、$9,000 A は総差異（9,500 × $12 − $123,000）。予算より少なく作ったので有利にはならない。' },
        { q: 'Budgeted fixed production overheads were $84,000 for a budgeted output of 7,000 units. Actual output was 6,500 units and actual fixed production overheads were $81,200. What is the total fixed overhead variance (in $)?', type: 'number', answer: 3200, unit: '$', explain: '標準配賦率 $84,000 ÷ 7,000 ＝ $12。配賦した額 6,500 × $12 ＝ $78,000。$78,000 − $81,200 ＝ −$3,200 → $3,200 A（過小配賦）。内訳は予算差異 $2,800 F と操業度差異（6,500 − 7,000）× $12 ＝ $6,000 A。' },
        { q: 'Under standard marginal costing, which fixed overhead variance(s) will be reported?', choices: ['Volume variance only', 'Both expenditure and volume variances', 'Expenditure variance only', 'No fixed overhead variances'], answer: 2, explain: '直接原価計算では固定費を製品に配賦しないので、操業度差異は出ない。予算と実際の固定費の差（予算差異）だけが出る。' },
        { q: '固定製造間接費の操業度差異が有利になるのは、どんなとき？', choices: ['実際の生産量が予算の生産量より多かったとき', '実際の固定費が予算より少なかったとき', '作業時間が実際生産の標準時間より短かったとき', '実際の配賦率が標準配賦率より低かったとき'], answer: 0, explain: '操業度差異は生産量のずれ × 標準配賦率。予算より多く作ると、固定費を予算より多く配賦できるので有利。固定費が少なかったのは予算差異。作業が速かったのは能率差異（次のレッスンで学ぶ）。' },
        { q: '固定製造間接費は作業1時間 $8 で配賦し、1脚の標準時間は2時間。予算は 2,000脚。実際は 2,100脚作った。操業度差異は？', choices: ['$800 F', '$1,600 F', '$1,600 A', '$3,200 F'], answer: 1, explain: '1脚の配賦率は $8 × 2時間 ＝ $16。（2,100 − 2,000）× $16 ＝ $1,600 F（予算より多く作った）。時間で出しても（4,200 − 4,000）× $8 ＝ $1,600 F で同じ。$800 は個数の差に1時間の $8 を掛けた誤り。$3,200 は時間の差に1脚の $16 を掛けた誤り。多く作ったので不利ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'M119-1', lesson: 'M119', q: '材料の価格差異（materials price variance）の式は？', a: '（標準価格 − 実際価格）× 実際の量' },
    { id: 'M119-2', lesson: 'M119', q: '材料の数量差異（materials usage variance）の式は？', a: '（実際生産の標準の量 − 実際の量）× 標準価格' },
    { id: 'M119-3', lesson: 'M119', q: 'なぜ材料費の差異を価格と数量に分ける？', a: '責任者がちがうため。値段は購買部、使う量は製造部が主に説明する' },
    { id: 'M119-4', lesson: 'M119', q: '在庫を標準原価で記録するとき、価格差異はどの量で出す？', a: '買った量（購入時点で全部出す）。数量差異は使った量で出す' },
    { id: 'M119-5', lesson: 'M119', q: 'favourable（F）と adverse（A）の意味は？', a: 'F＝有利（実際の原価が標準より少ない）、A＝不利（多い）' },
    { id: 'M120-1', lesson: 'M120', q: '賃率差異（labour rate variance）の式は？', a: '（標準賃率 − 実際賃率）× 払った時間' },
    { id: 'M120-2', lesson: 'M120', q: '労務費の能率差異（labour efficiency variance）の式は？', a: '（実際生産の標準時間 − 作業した時間）× 標準賃率' },
    { id: 'M120-3', lesson: 'M120', q: '遊休時間差異（idle time variance）の出し方と向きは？', a: '遊休時間 × 標準賃率。いつも不利（A）' },
    { id: 'M120-4', lesson: 'M120', q: 'なぜ能率差異は実際賃率でなく標準賃率で測る？', a: '時給の変化を混ぜず、時間のむだ・節約だけを金額にするため' },
    { id: 'M120-5', lesson: 'M120', q: '労務費の総差異と内訳の関係は？（遊休時間あり）', a: '総差異 ＝ 賃率差異 ＋ 遊休時間差異 ＋ 能率差異' },
    { id: 'M121-1', lesson: 'M121', q: '変動製造間接費の予算差異（expenditure variance）の式は？', a: '作業した時間 × 標準配賦率 − 実際の変動間接費' },
    { id: 'M121-2', lesson: 'M121', q: '変動製造間接費の能率差異の式は？', a: '（実際生産の標準時間 − 作業した時間）× 標準配賦率' },
    { id: 'M121-3', lesson: 'M121', q: 'なぜ変動間接費の能率差異は労務費の能率差異と同じ向き？', a: 'どちらも同じ作業時間の差から出すため（配賦が作業時間ベース）' },
    { id: 'M121-4', lesson: 'M121', q: '遊休時間がある問題で、変動間接費の差異に使う時間は？', a: '作業した時間（払った時間ではない）。遊休中は費用がかからないとみなす' },
    { id: 'M121-5', lesson: 'M121', q: '変動製造間接費に操業度差異はある？', a: 'ない。量に比例する費用なので、作る量が変わっても1単位の費用は同じ' },
    { id: 'M122-1', lesson: 'M122', q: '固定製造間接費の予算差異（expenditure variance）の式は？', a: '予算の固定費 − 実際の固定費（生産量に合わせて直さない）' },
    { id: 'M122-2', lesson: 'M122', q: '固定製造間接費の操業度差異（volume variance）の式は？', a: '（実際生産 − 予算生産）× 1個の標準配賦率' },
    { id: 'M122-3', lesson: 'M122', q: '固定製造間接費の総差異は、何と同じ金額？', a: '過小配賦・過大配賦の額（配賦した額 − 実際の固定費）' },
    { id: 'M122-4', lesson: 'M122', q: '標準直接原価計算で出る固定製造間接費の差異は？', a: '予算差異だけ。固定費を配賦しないので操業度差異は出ない' },
    { id: 'M122-5', lesson: 'M122', q: 'なぜ予算より少なく作ると操業度差異が不利になる？', a: '予定より配賦できる固定費が少なく、固定費を回収しきれないため' },
    { id: 'M122-6', lesson: 'M122', q: '固定費の1個あたりの配賦率と1時間あたりの関係は？', a: '1個あたり ＝ 1時間の配賦率 × 1個の標準時間（椅子: $8 × 2時間 ＝ $16）' }
  ]
});
