(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 130,
  part: 8,
  partTitle: '標準原価計算と差異分析',
  lessons: [
    {
      id: 'M123',
      no: 123,
      title: '固定製造間接費の差異②: 操業度差異を能率差異と生産能力差異に分ける',
      goal: '固定製造間接費の操業度差異を、能率差異と生産能力差異に分けて計算し、意味を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(e)'],
      slides: [
        {
          title: '借りた作業場の「使い方」',
          paras: ['作業場を月10万円で借りた。予定では月100時間使うので、1時間あたり1,000円の計算になる。', '実際は110時間使えた。予定より10時間多いのは良いこと（＋1万円分）。ただ、その110時間でできた仕事は、標準なら95時間で終わる量だった。15時間はむだ（−1.5万円分）。', '差し引くと、できた仕事は95時間分で、予定より5,000円分少ない。この5,000円の中身を「働いた時間」と「時間の使い方」に分けるのが、今回の話。']
        },
        {
          title: 'おさらい: 操業度差異（volume variance）',
          formula: '操業度差異 ＝（実際の生産量 − 予算の生産量）× 1個の標準固定製造間接費',
          paras: ['全部原価計算（absorption costing）では、固定製造間接費を配賦率で製品に配る。予算より多く作れば配る額が増えて有利（F）、少なければ不利（A）。', '時間で書いても同じになる: （実際の生産量の標準時間 − 予算時間）× 1時間の配賦率。今回はこの時間の式を2つに割る。']
        },
        {
          title: '操業度差異を2つに分ける',
          svg: `<svg viewBox="0 0 440 264" role="img" aria-label="固定製造間接費の総差異は予算差異と操業度差異に分かれる。操業度差異はさらに能率差異と生産能力差異に分かれる。操業度差異を強調" font-size="15"><rect x="110" y="16" width="220" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="40" text-anchor="middle" fill="var(--ink)">固定製造間接費の総差異</text><text x="220" y="60" text-anchor="middle" font-size="12.5" fill="var(--quiet)">total variance</text><line x1="190" y1="70" x2="110" y2="110" stroke="var(--edge)" stroke-width="1.25"/><line x1="250" y1="70" x2="310" y2="110" stroke="var(--edge)" stroke-width="1.25"/><rect x="30" y="110" width="160" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="134" text-anchor="middle" fill="var(--ink)">予算差異</text><text x="110" y="154" text-anchor="middle" font-size="12.5" fill="var(--quiet)">expenditure</text><rect x="230" y="110" width="160" height="54" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="310" y="134" text-anchor="middle" font-weight="600" fill="var(--ink)">操業度差異</text><text x="310" y="154" text-anchor="middle" font-size="12.5" fill="var(--quiet)">volume</text><line x1="290" y1="164" x2="250" y2="200" stroke="var(--edge)" stroke-width="1.25"/><line x1="330" y1="164" x2="365" y2="200" stroke="var(--edge)" stroke-width="1.25"/><rect x="200" y="200" width="100" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="250" y="224" text-anchor="middle" fill="var(--ink)">能率差異</text><text x="250" y="244" text-anchor="middle" font-size="12.5" fill="var(--quiet)">efficiency</text><rect x="310" y="200" width="110" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="224" text-anchor="middle" fill="var(--ink)">生産能力差異</text><text x="365" y="244" text-anchor="middle" font-size="12.5" fill="var(--quiet)">capacity</text><text x="110" y="200" text-anchor="middle" font-size="14" fill="var(--quiet)">使った額と</text><text x="110" y="220" text-anchor="middle" font-size="14" fill="var(--quiet)">予算の額の差</text></svg>`,
          caption: '操業度差異 ＝ 能率差異 ＋ 生産能力差異。この分け方は全部原価計算のときだけ使う。'
        },
        {
          title: '2つの式',
          formula: '能率差異 ＝（実際の生産量の標準時間 − 実際時間）× 1時間の配賦率',
          list: ['能率差異（volume efficiency variance）: 働いた時間の中で、標準どおりの速さで作れたか。実際時間が標準時間より多いと不利', '生産能力差異（volume capacity variance）: （実際時間 − 予算時間）× 1時間の配賦率。予定より長く働けた（工場の能力を使えた）か。実際時間が予算時間より多いと有利'],
          after: '2つとも、掛けるのは「1時間の配賦率」。1個あたりの額ではない。'
        },
        {
          title: '例題: 椅子工房の固定製造間接費',
          example: {
            problem: '予算: 1,000脚、1脚2時間で予算時間2,000時間、固定製造間接費 $16,000。実際: 1,100脚を作り、2,300時間働いた。操業度差異と、その能率差異・生産能力差異は？',
            steps: ['配賦率: $16,000 ÷ 2,000時間 ＝ 1時間 $8（1脚なら2時間 × $8 ＝ $16）', '操業度差異: (1,100 − 1,000) × $16 ＝ $1,600 F（予算より多く作った）', '実際の生産量の標準時間: 1,100脚 × 2時間 ＝ 2,200時間', '能率差異: (2,200 − 2,300) × $8 ＝ $800 A（標準より100時間多くかかった）', '生産能力差異: (2,300 − 2,000) × $8 ＝ $2,400 F（予算より300時間多く働いた）', '確かめ: $2,400 F − $800 A ＝ $1,600 F。操業度差異と一致する'],
            answer: '操業度差異 $1,600 F ＝ 能率差異 $800 A ＋ 生産能力差異 $2,400 F'
          }
        },
        {
          title: '固定製造間接費の差異をまとめる',
          table: { caption: '椅子工房（実際の固定製造間接費は $16,500）', head: ['差異', '計算', '$'], rows: [['予算差異', '$16,500 − $16,000', '500 A'], ['能率差異', '(2,200 − 2,300) × $8', '800 A'], ['生産能力差異', '(2,300 − 2,000) × $8', '2,400 F']], total: ['総差異', '配賦 $17,600 − 実際 $16,500', '1,100 F'] },
          after: '配賦した額は 1,100脚 × $16 ＝ $17,600。実際より $1,100 多く配った（過大配賦）ので、総差異は有利。3つの差異の合計と一致する。'
        },
        {
          title: 'なぜ？ 分けると原因と責任者が見える',
          paras: ['操業度差異だけでは、量が増えた・減った理由がわからない。働く時間そのものが足りなかったのか、時間はあったのに作るのが遅かったのか。', '時間が足りない原因は、受注不足、ストライキ、機械の故障、人手不足など。これは生産計画や人員の担当者の話になる。作るのが遅い原因は、未熟な作業員、質の悪い材料、段取りの悪さなど。これは現場の監督の話になる。原因と責任者が違うので、分けて報告する。'],
          note: { kind: 'tip', text: '固定製造間接費を労働時間で配賦しているとき、能率差異は労務費の能率差異と同じ時間（標準時間と実際に作業した時間）で計算する。だから向きはいつも同じになる。労務費の能率差異が不利なら、固定製造間接費の能率差異も不利。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '2つの式は時間を引く向きが逆。能率差異は「標準時間 − 実際時間」で、実際が多いと不利。生産能力差異は「実際時間 − 予算時間」で、実際が多いと有利。向きを取り違えると符号が逆になる。また、時間の差に1個あたりの額（例の $16）を掛ける間違いも多い。時間には1時間の配賦率（$8）を掛ける。' },
          paras: ['標準直接原価計算（marginal costing）では、固定製造間接費を製品に配らない。だから操業度差異も、その内訳の能率差異・生産能力差異も出ない。出るのは予算差異だけ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['操業度差異 ＝ 能率差異 ＋ 生産能力差異（全部原価計算のときだけ）', '能率差異 ＝（実際の生産量の標準時間 − 実際時間）× 1時間の配賦率。実際時間が多いと不利', '生産能力差異 ＝（実際時間 − 予算時間）× 1時間の配賦率。実際時間が多いと有利']
        },
        {
          title: '英単語',
          words: [
            ['fixed overhead volume variance', '', '固定製造間接費の操業度差異'],
            ['fixed overhead volume efficiency variance', '', '操業度差異のうち能率の部分（能率差異）'],
            ['fixed overhead volume capacity variance', '', '操業度差異のうち働いた時間の部分（生産能力差異）'],
            ['fixed overhead expenditure variance', '', '固定製造間接費の予算差異'],
            ['budgeted hours', 'バジェッテッド アワーズ', '予算時間'],
            ['standard hours for actual production', '', '実際の生産量の標準時間'],
            ['overhead absorption rate (OAR)', '', '配賦率（1時間あたりなど）']
          ]
        }
      ],
      quiz: [
        { q: 'A company budgeted fixed production overheads of $120,000 and 40,000 labour hours. The standard time is 4 hours per unit and budgeted output was 10,000 units. Actual output was 9,500 units and 38,500 hours were worked. What is the fixed overhead volume capacity variance?', choices: ['$1,500 adverse', '$4,500 favourable', '$4,500 adverse', '$6,000 adverse'], answer: 2, explain: '配賦率は $120,000 ÷ 40,000時間 ＝ $3。生産能力差異 ＝（実際 38,500 − 予算 40,000）× $3 ＝ $4,500。予算より働いた時間が少ないので不利。$1,500 A は能率差異（(38,000 − 38,500) × $3）、$6,000 A は2つを足した操業度差異。有利にするのは、時間を引く向きの取り違え。' },
        { q: 'A company budgeted fixed production overheads of $120,000 and 40,000 labour hours. The standard time is 4 hours per unit and budgeted output was 10,000 units. Actual output was 9,500 units and 38,500 hours were worked. The fixed overhead volume efficiency variance is adverse. What is its amount?', type: 'number', answer: 1500, unit: '$', explain: '実際の生産量の標準時間: 9,500個 × 4時間 ＝ 38,000時間。能率差異 ＝（38,000 − 38,500）× $3 ＝ $1,500 A。標準より500時間多くかかった。配賦率でなく1個あたり $12 を掛けると $6,000 になってしまう。' },
        { q: '操業度差異が $3,000 F、能率差異が $1,200 A だった。生産能力差異はいくら？（有利の金額を入力）', type: 'number', answer: 4200, unit: '$', explain: '操業度差異 ＝ 能率差異 ＋ 生産能力差異。$3,000 F ＝ −$1,200 ＋ 生産能力差異 なので、生産能力差異は $4,200 F。$3,000 − $1,200 ＝ $1,800 とするのは、不利を足し引きする向きの間違い。' },
        { q: '実際に働いた時間は予算時間より多かったのに、固定製造間接費の操業度差異は不利だった。最も考えられる理由は？', choices: ['固定製造間接費を予算より多く使った', '作るのが遅く、働いた時間のわりに作れた量が少なかった（能率差異が大きく不利）', '生産能力差異が不利だった', '配賦率を予算より高く設定した'], answer: 1, explain: '実際時間が予算時間より多いので、生産能力差異は有利。それでも操業度差異が不利なら、能率差異がそれ以上に不利だったことになる。固定費を多く使ったのは予算差異の話で、操業度差異とは別。' },
        { q: 'A company uses standard marginal costing. Which fixed overhead variance will appear in its operating statement?', choices: ['Volume variance only', 'Expenditure and volume variances', 'Volume efficiency and volume capacity variances only', 'Expenditure variance only'], answer: 3, explain: '直接原価計算では固定製造間接費を製品に配らないので、配り過ぎ・配り不足から生まれる操業度差異（とその内訳の能率差異・生産能力差異）はない。出るのは、実際の支出と予算の差である予算差異だけ。' }
      ]
    },
    {
      id: 'M124',
      no: 124,
      title: '差異から実際の数字や標準を逆算する',
      goal: '差異の金額が与えられたとき、実際の価格・量・時間や、標準・予算の数字を逆算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(f)'],
      slides: [
        {
          title: 'レシートをなくした買い物',
          paras: ['卵は1パック200円のつもりで、10パック買った。レシートはなくしたが、「予定より300円多く払った」ことだけは覚えている。', '予定の支払は 200円 × 10 ＝ 2,000円。300円多いので実際は2,300円。1パックなら 2,300 ÷ 10 ＝ 230円。差と、残りの数字が分かれば、元の数字は戻せる。差異の逆算はこれと同じ。']
        },
        {
          title: '差異の式は「2つの数字の差」',
          svg: `<svg viewBox="0 0 440 230" role="img" aria-label="材料費の3つの数字。実際量×実際価格、実際量×標準価格、標準量×標準価格。左2つの差が価格差異、右2つの差が数量差異。真ん中を強調" font-size="15"><text x="20" y="28" font-size="16" font-weight="600" fill="var(--ink)">3つのうち2つが分かれば、残りが出る</text><rect x="20" y="50" width="120" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="80" y="80" text-anchor="middle" fill="var(--ink)">AQ × AP</text><text x="80" y="105" text-anchor="middle" font-size="14" fill="var(--ink)">実際の支払額</text><rect x="160" y="50" width="120" height="70" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="80" text-anchor="middle" font-weight="600" fill="var(--ink)">AQ × SP</text><text x="220" y="105" text-anchor="middle" font-size="14" fill="var(--ink)">実際量の標準額</text><rect x="300" y="50" width="120" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="360" y="80" text-anchor="middle" fill="var(--ink)">SQ × SP</text><text x="360" y="105" text-anchor="middle" font-size="14" fill="var(--ink)">標準量の標準額</text><path d="M80 128 V142 H215 V128" fill="none" stroke="var(--edge)" stroke-width="1.25"/><path d="M225 128 V142 H360 V128" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="147" y="166" text-anchor="middle" fill="var(--ink)">価格差異</text><text x="147" y="184" text-anchor="middle" font-size="12.5" fill="var(--quiet)">price</text><text x="292" y="166" text-anchor="middle" fill="var(--ink)">数量差異</text><text x="292" y="184" text-anchor="middle" font-size="12.5" fill="var(--quiet)">usage</text><text x="220" y="216" text-anchor="middle" fill="var(--ink)">労務費も、時間と賃率で同じ形</text></svg>`,
          caption: 'AQ＝実際量、AP＝実際価格、SQ＝実際の生産量の標準量、SP＝標準価格。真ん中の箱は、資料からほぼ必ず計算できる。'
        },
        {
          title: '向きのルール',
          formula: '有利（F）＝ 実際が標準より会社に得',
          list: ['原価の差異が不利（A）: 実際の額 ＝ 標準の額 ＋ 差異', '原価の差異が有利（F）: 実際の額 ＝ 標準の額 − 差異', '売上価格差異が有利（F）: 実際の売価は標準より高い', '売上数量差異が有利（F）: 実際の販売量は予算より多い'],
          after: '迷ったら「不利なら実際の原価は多い、有利なら少ない」と言葉で確かめてから足し引きする。'
        },
        {
          title: '例題1: 材料の実際の価格',
          example: {
            problem: '標準: 1個に材料4kg、1kg $5。今月1,000個作り、材料4,200kgを買って全部使った。材料の価格差異は $840 A。実際の1kgの価格と、数量差異は？',
            steps: ['真ん中の箱: AQ × SP ＝ 4,200kg × $5 ＝ $21,000', '価格差異が不利なので、実際の支払は多い: $21,000 ＋ $840 ＝ $21,840', '実際の1kgの価格: $21,840 ÷ 4,200kg ＝ $5.20', '近道: $840 ÷ 4,200kg ＝ 1kgあたり $0.20 高い → $5 ＋ $0.20 ＝ $5.20', '数量差異: 標準量は 1,000個 × 4kg ＝ 4,000kg。(4,000 − 4,200) × $5 ＝ $1,000 A'],
            answer: '実際の価格 $5.20/kg、数量差異 $1,000 A'
          }
        },
        {
          title: '例題2: 1個の標準時間',
          example: {
            problem: '標準賃率は1時間 $12。今月2,000個作り、実際に7,800時間働いた。労務費の能率差異は $2,400 F。1個の標準時間は？',
            steps: ['時間の差: $2,400 ÷ 標準賃率 $12 ＝ 200時間', '有利なので、実際の時間は標準より少ない: 標準時間 ＝ 7,800 ＋ 200 ＝ 8,000時間', '1個の標準時間: 8,000時間 ÷ 2,000個 ＝ 4時間', '確かめ: (8,000 − 7,800) × $12 ＝ $2,400 F'],
            answer: '1個の標準時間は4時間'
          }
        },
        {
          title: '例題3: 予算の生産量と実際の生産量',
          example: {
            problem: '固定製造間接費は1個 $8 で配賦する。実際の固定製造間接費は $93,000、予算差異は $1,000 A、操業度差異は $4,000 A。予算の生産量と実際の生産量は？',
            steps: ['予算差異が不利なので、実際は予算より多く使った: 予算額 ＝ $93,000 − $1,000 ＝ $92,000', '予算の生産量: $92,000 ÷ $8 ＝ 11,500個', '操業度差異の量: $4,000 ÷ $8 ＝ 500個', '不利なので、予算より少なく作った: 11,500 − 500 ＝ 11,000個'],
            answer: '予算の生産量 11,500個、実際の生産量 11,000個'
          }
        },
        {
          title: '何で割れば、何が出る？',
          table: { caption: '差異 ÷ 割る数 ＝ 分かるもの', head: ['差異', '割る数', '分かるもの'], rows: [['材料の価格差異', '実際の購入量', '1kgの価格の差'], ['材料の数量差異', '1kgの標準価格', '使った量の差'], ['労務費の賃率差異', '実際の支払時間', '1時間の賃率の差'], ['労務費の能率差異', '1時間の標準賃率', '時間の差'], ['操業度差異', '1個の標準固定費', '生産量の差'], ['売上価格差異', '実際の販売量', '1個の売価の差'], ['売上数量差異', '1個の標準利益', '販売量の差']] },
          after: '変動製造間接費の予算差異は実際時間で、能率差異は1時間の標準配賦率で割る。全部原価計算でない（直接原価計算の）売上数量差異は、1個の標準貢献利益で割る。'
        },
        {
          title: 'なぜ？ 割り算で戻せる理由',
          paras: ['どの差異も「単価の差 × 実際の量」か「量の差 × 標準の単価」の形をしている。だから、差異をもう一方の数で割れば、差の部分が取り出せる。', '試験では、差異の報告書だけが残っていて元の数字を探す問題がよく出る。式を覚えるより、この形を理解しておけば、どの差異でも同じ手順で解ける。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '1つ目は向きの逆。不利なのに標準から引いてしまう。2つ目は割る数の取り違え。価格差異は実際の量で割る（標準量ではない）。3つ目は、数量差異や能率差異の比べる相手を「予算の生産量の標準量」にしてしまうこと。比べるのは実際の生産量の標準量（例題1なら 1,000個 × 4kg）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['分かっている数字を差異の式に入れ、残り1つを解く。真ん中の AQ × SP から始める', '差異 ÷ もう一方の数 ＝ 差の部分。価格の差なら実際の量で、量の差なら標準の単価で割る', '原価の差異は、不利なら実際＝標準＋差異、有利なら実際＝標準−差異']
        },
        {
          title: '英単語',
          words: [
            ['actual quantity (AQ)', '', '実際の量'],
            ['actual price (AP)', '', '実際の価格'],
            ['standard quantity (SQ)', '', '実際の生産量の標準の量'],
            ['standard price (SP)', '', '標準価格'],
            ['standard hours (SH)', '', '実際の生産量の標準時間'],
            ['favourable / adverse', 'フェイバラブル / アドバース', '有利（F）／不利（A）']
          ]
        }
      ],
      quiz: [
        { q: 'The standard price of material X is $6 per kg. During March, 4,500 kg were purchased and the material price variance was $900 adverse. What was the total actual cost of the material purchased?', type: 'number', answer: 27900, unit: '$', explain: '実際量の標準額: 4,500kg × $6 ＝ $27,000。価格差異が不利なので、実際の支払はそれより多い: $27,000 ＋ $900 ＝ $27,900。$900 を引いた $26,100 は向きの逆。' },
        { q: 'The labour rate variance for a period was $1,300 adverse. 2,600 hours were paid at a total cost of $40,300. What was the standard rate per hour?', choices: ['$16.00', '$15.50', '$15.00', '$0.50'], answer: 2, explain: '不利なので、実際の賃金は標準より多い。支払時間の標準額 ＝ $40,300 − $1,300 ＝ $39,000。標準賃率 ＝ $39,000 ÷ 2,600時間 ＝ $15.00。$16.00 は差異を足した向きの逆、$15.50 は実際の賃率（差異を使っていない）、$0.50 は1時間あたりの差だけ。' },
        { q: '標準: 1個に材料5kg、1kg $2。今月800個作り、材料の数量差異は $600 F だった。実際に使った材料は何kg？', type: 'number', answer: 3700, unit: 'kg', explain: '標準量: 800個 × 5kg ＝ 4,000kg。量の差: $600 ÷ $2 ＝ 300kg。有利なので標準より少なく使った: 4,000 − 300 ＝ 3,700kg。4,300kg は向きの逆。' },
        { q: 'Budgeted sales were 2,000 units at a standard selling price of $50 per unit. Actual sales were 1,800 units and the sales price variance was $3,600 favourable. What was the actual selling price per unit?', type: 'number', answer: 52, unit: '$', explain: '売上価格差異は実際の販売量で計算する。1個の差: $3,600 ÷ 1,800個 ＝ $2。有利なので実際の売価は標準より高い: $50 ＋ $2 ＝ $52。予算の2,000個で割ると $1.80 の差になり、間違い。' },
        { q: '1個の標準固定製造間接費は $6。操業度差異は $1,800 F、実際の生産量は5,300個だった。予算の生産量は？', choices: ['5,600個', '5,000個', '5,300個', '300個'], answer: 1, explain: '生産量の差: $1,800 ÷ $6 ＝ 300個。有利なので、実際は予算より多く作った: 予算 ＝ 5,300 − 300 ＝ 5,000個。5,600個は向きの逆、300個は差だけ。' }
      ]
    },
    {
      id: 'M125',
      no: 125,
      title: '予算利益から実際利益へ（標準全部原価計算）',
      goal: '標準全部原価計算で、予算利益から差異を足し引きして実際利益につなぐ調整表を作れるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(g)'],
      slides: [
        {
          title: '貯金の予定と実際',
          paras: ['今月は5万円貯金する予定だった。実際は4.8万円。2,000円足りない理由を並べてみる。', '残業代が増えた（＋1万円）、外食が増えた（−1.5万円）、電気代が安かった（＋3,000円）。5万 ＋ 1万 − 1.5万 ＋ 0.3万 ＝ 4.8万円。予定から実際まで、理由ごとの足し引きでつながる。会社の利益でこれをやるのが、今回の調整表。']
        },
        {
          title: '調整表（operating statement）の型',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="調整表の流れ。予算利益24,000ドルに売上数量差異2,400ドル有利を足して、実際の販売量での標準利益26,400ドル。売上価格差異2,200ドル不利と原価の差異1,400ドル不利を引いて、実際利益22,800ドル。標準利益の段を強調" font-size="15"><rect x="40" y="16" width="360" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="41" text-anchor="middle" fill="var(--ink)">予算利益  $24,000</text><line x1="80" y1="56" x2="80" y2="88" stroke="var(--edge)" stroke-width="1.25"/><polygon points="74,86 80,96 86,86" fill="var(--edge)"/><text x="100" y="81" font-size="14" fill="var(--ink)">＋ 売上数量差異  $2,400 F</text><rect x="40" y="96" width="360" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="121" text-anchor="middle" font-weight="600" fill="var(--ink)">実際の販売量での標準利益  $26,400</text><line x1="80" y1="136" x2="80" y2="208" stroke="var(--edge)" stroke-width="1.25"/><polygon points="74,206 80,216 86,206" fill="var(--edge)"/><text x="100" y="165" font-size="14" fill="var(--ink)">− 売上価格差異  $2,200 A</text><text x="100" y="192" font-size="14" fill="var(--ink)">− 原価の差異（純額）$1,400 A</text><rect x="40" y="216" width="360" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="241" text-anchor="middle" fill="var(--ink)">実際利益  $22,800</text><text x="220" y="280" text-anchor="middle" font-size="14" fill="var(--quiet)">有利（F）は足し、不利（A）は引く</text></svg>`,
          caption: '予算利益から始めて、差異を1つずつ足し引きし、実際利益で終わる。英語では reconciliation of budgeted profit with actual profit、または operating statement と呼ぶ。'
        },
        {
          title: '例題の資料①: 標準と予算',
          table: { caption: '椅子工房の標準原価カード（1脚）', head: ['項目', '標準', '$'], rows: [['材料', '4kg × $5', '20'], ['労務費', '2時間 × $12', '24'], ['変動製造間接費', '2時間 × $3', '6'], ['固定製造間接費', '2時間 × $8', '16']], total: ['標準原価（全部原価）', '', '66'] },
          after: 'M117 と同じ椅子のカード。標準売価は $90 なので、1脚の標準利益は $90 − $66 ＝ $24。予算は1,000脚で、予算利益は 1,000 × $24 ＝ $24,000（固定製造間接費の予算 $16,000、予算時間2,000時間）。'
        },
        {
          title: '例題の資料②: 実際',
          list: ['1,100脚を作り、全部を1脚 $88 で売った（売上 $96,800。M118 の例題と同じ）', '材料4,600kgを $22,080 で買い、全部使った', '2,300時間働き、賃金は $28,750', '変動製造間接費 $6,670、固定製造間接費 $16,500'],
          after: '実際の原価の合計は $74,000。実際利益 ＝ $96,800 − $74,000 ＝ $22,800。予算より $1,200 少ない。この $1,200 の中身を差異で説明する。作った量と売った量は同じで、在庫は残っていない。'
        },
        {
          title: '例題: 売上の差異',
          example: {
            problem: '売上数量差異、実際の販売量での標準利益、売上価格差異は？',
            steps: ['売上数量差異: (1,100 − 1,000)脚 × 標準利益 $24 ＝ $2,400 F', '実際の販売量での標準利益: $24,000 ＋ $2,400 ＝ $26,400（＝ 1,100脚 × $24）', '売上価格差異: ($88 − $90) × 1,100脚 ＝ $2,200 A'],
            answer: '売上数量差異 $2,400 F、実際の販売量での標準利益 $26,400、売上価格差異 $2,200 A'
          }
        },
        {
          title: '例題: 原価の差異',
          example: {
            problem: '原価の差異を全部出す。実際の生産量の標準は、材料 1,100 × 4 ＝ 4,400kg、時間 1,100 × 2 ＝ 2,200時間。',
            steps: ['材料の価格差異: 4,600 × $5 ＝ $23,000、実際 $22,080 → $920 F', '材料の数量差異: (4,400 − 4,600) × $5 ＝ $1,000 A', '労務費の賃率差異: 2,300 × $12 ＝ $27,600、実際 $28,750 → $1,150 A', '労務費の能率差異: (2,200 − 2,300) × $12 ＝ $1,200 A', '変動製造間接費の予算差異: 2,300 × $3 ＝ $6,900、実際 $6,670 → $230 F', '変動製造間接費の能率差異: (2,200 − 2,300) × $3 ＝ $300 A', '固定製造間接費の予算差異: $16,500 − $16,000 ＝ $500 A', '固定製造間接費の操業度差異: (1,100 − 1,000) × $16 ＝ $1,600 F'],
            answer: '有利 $2,750、不利 $4,150。原価の差異は純額で $1,400 A'
          }
        },
        {
          title: '調整表を完成させる',
          table: { caption: '椅子工房の調整表（標準全部原価計算）', head: ['項目', 'F/A', '$'], rows: [['予算利益', '', '24,000'], ['売上数量差異', 'F', '2,400'], ['実際の販売量での標準利益', '', '26,400'], ['売上価格差異', 'A', '(2,200)'], ['材料の価格差異', 'F', '920'], ['材料の数量差異', 'A', '(1,000)'], ['労務費の賃率差異', 'A', '(1,150)'], ['労務費の能率差異', 'A', '(1,200)'], ['変動間接費の予算差異', 'F', '230'], ['変動間接費の能率差異', 'A', '(300)'], ['固定間接費の予算差異', 'A', '(500)'], ['固定間接費の操業度差異', 'F', '1,600']], total: ['実際利益', '', '22,800'] },
          after: '操業度差異 $1,600 F は、能率差異 $800 A と生産能力差異 $2,400 F の2行に分けて書いてもよい。合計は同じ。'
        },
        {
          title: 'なぜ？ 売上数量差異を標準利益で測る',
          paras: ['予算より1脚多く売ったとき、原価が標準どおりなら、利益は1脚の標準利益 $24 だけ増える。売価 $90 を全部足すと、その1脚の原価まで利益に数えてしまう。原価のずれは、原価の差異が別に受け持つ。こうして1つの原因を1つの差異だけで数え、二重に数えない。', '全部原価計算では、固定製造間接費を1脚 $16 で配っている。量が予算とずれると、配った固定費が予算額とずれる。そのずれを直すのが操業度差異なので、調整表に入る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '全部原価計算の売上数量差異を、売価（$90）や貢献利益（$40）で計算してしまう。全部原価計算では標準利益（$24）で測る。また、固定製造間接費の操業度差異を入れ忘れると、調整表が実際利益に合わない。有利を引き、不利を足す向きの逆にも注意。' },
          paras: ['作った量と売った量が違う場合も型は同じ。原価の差異は作った量で、売上の差異は売った量で計算する。在庫は標準原価で評価するので、差異は増えない。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['順番: 予算利益 → 売上数量差異 → 実際の販売量での標準利益 → 売上価格差異 → 原価の差異 → 実際利益', '全部原価計算の売上数量差異 ＝（実際の販売量 − 予算の販売量）× 1個の標準利益', '原価の差異には固定製造間接費の予算差異と操業度差異も入る。有利は足し、不利は引く']
        },
        {
          title: '英単語',
          words: [
            ['operating statement', 'オペレーティング ステートメント', '予算利益と実際利益をつなぐ調整表'],
            ['reconciliation', 'リコンシリエーション', '調整（2つの数字をつなぐこと）'],
            ['budgeted profit', '', '予算利益'],
            ['standard profit on actual sales', '', '実際の販売量での標準利益'],
            ['sales volume profit variance', '', '売上数量差異（標準利益で測る）'],
            ['standard absorption costing', '', '標準全部原価計算']
          ]
        }
      ],
      quiz: [
        { q: 'A company\'s budgeted profit for a period was $50,000. The sales volume profit variance was $4,000 adverse, the sales price variance was $2,500 favourable and the total cost variances were $3,000 adverse. What was the actual profit?', type: 'number', answer: 45500, unit: '$', explain: '$50,000 − $4,000 ＋ $2,500 − $3,000 ＝ $45,500。不利は引き、有利は足す。全部を引いて $40,500 とする、全部を足して $59,500 とするのは間違い。' },
        { q: 'A company uses standard absorption costing. The standard selling price is $40 per unit, the standard full production cost is $28 per unit and the standard variable cost is $18 per unit. Budgeted sales were 5,000 units and actual sales were 5,400 units. What is the sales volume variance?', choices: ['$8,800 favourable', '$4,800 favourable', '$16,000 favourable', '$4,800 adverse'], answer: 1, explain: '全部原価計算では標準利益で測る: $40 − $28 ＝ $12。400個 × $12 ＝ $4,800。予算より多く売ったので有利。$8,800 は貢献利益（$22）を使った直接原価計算の答え、$16,000 は売価を使った間違い。' },
        { q: '調整表で、予算利益に売上数量差異を足し引きした小計は何と呼ぶ？', choices: ['実際利益', '実際の売上高', '予算の貢献利益', '実際の販売量での標準利益'], answer: 3, explain: '予算利益を、実際の販売量に置き直した数字。英語で standard profit on actual sales。ここから売上価格差異と原価の差異を足し引きして、初めて実際利益になる。' },
        { q: '1個の標準利益は $15、予算の販売量は2,000個、実際の販売量は2,400個だった。実際の販売量での標準利益はいくら？', type: 'number', answer: 36000, unit: '$', explain: '2,400個 × $15 ＝ $36,000。予算利益 $30,000（2,000 × $15）に売上数量差異 $6,000 F（400 × $15）を足しても同じ。' },
        { q: '標準全部原価計算の調整表に、固定製造間接費の差異はどう入れる？', choices: ['予算差異だけを入れる', '操業度差異だけを入れる', '予算差異と操業度差異を入れる（操業度差異は能率差異と生産能力差異に分けてもよい）', '固定費は予算どおりとみなし、何も入れない'], answer: 2, explain: '全部原価計算では、使った額のずれ（予算差異）と、配った額のずれ（操業度差異）の両方が利益に響く。予算差異だけにするのは直接原価計算のやり方。' }
      ]
    },
    {
      id: 'M126',
      no: 126,
      title: '予算の貢献利益から実際へ（標準直接原価計算）',
      goal: '標準直接原価計算で、予算の貢献利益（または予算利益）から実際の貢献利益・実際利益につなぐ調整表を作れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D2(h)'],
      slides: [
        {
          title: 'フリマの出店',
          paras: ['フリマの出店料は3,000円で、何個売れても同じ。1個1,000円で売り、仕入と送料が1個600円かかる。1個売るごとに400円が手元に残る。', '20個売る予定なら 20 × 400 − 3,000 ＝ 5,000円の利益。実際は25個売れたら、5個 × 400円 ＝ 2,000円多い。出店料は変わらないので、量の差は「1個で残る400円」で測ればよい。これが直接原価計算の考え方。']
        },
        {
          title: '標準直接原価計算（standard marginal costing）のポイント',
          list: ['1個の標準原価は変動費だけ（材料・労務費・変動製造間接費）。固定製造間接費は製品に配らない', '売上数量差異は、1個の標準貢献利益（売価 − 標準変動費）で測る', '固定製造間接費は期間の費用。差異は予算差異だけで、操業度差異はない'],
          after: '変動費の差異（材料・労務費・変動製造間接費）と売上価格差異は、全部原価計算と同じ金額になる。'
        },
        {
          title: '椅子工房を直接原価計算で見る',
          table: { caption: '同じ椅子工房（1脚）', head: ['項目', '計算', '$'], rows: [['標準売価', '', '90'], ['標準変動費', '$20 ＋ $24 ＋ $6', '(50)'], ['標準貢献利益', '$90 − $50', '40']] },
          after: '予算の貢献利益 ＝ 1,000脚 × $40 ＝ $40,000。ここから固定製造間接費の予算 $16,000 を引くと、予算利益 $24,000。全部原価計算の予算利益と同じになる。'
        },
        {
          title: '例題: 調整表の数字を出す',
          example: {
            problem: '実際は前のレッスンと同じ（1,100脚を $88 で販売、変動費の差異も同じ、固定製造間接費は $16,500）。直接原価計算で実際利益までつなぐ。',
            steps: ['売上数量差異: (1,100 − 1,000) × 標準貢献利益 $40 ＝ $4,000 F', '実際の販売量での標準貢献利益: $40,000 ＋ $4,000 ＝ $44,000', '売上価格差異: ($88 − $90) × 1,100 ＝ $2,200 A', '変動費の差異（6つ）: 有利 $920 ＋ $230 ＝ $1,150、不利 $1,000 ＋ $1,150 ＋ $1,200 ＋ $300 ＝ $3,650 → 純額 $2,500 A', '実際の貢献利益: $44,000 − $2,200 − $2,500 ＝ $39,300（確かめ: 売上 $96,800 − 実際の変動費 $57,500）', '固定費: 予算 $16,000 と予算差異 $500 A を引く → 実際利益 $39,300 − $16,000 − $500 ＝ $22,800'],
            answer: '実際の貢献利益 $39,300、実際利益 $22,800（全部原価計算と同じ）'
          }
        },
        {
          title: '調整表（標準直接原価計算）',
          table: { caption: '椅子工房の調整表', head: ['項目', 'F/A', '$'], rows: [['予算の貢献利益', '', '40,000'], ['売上数量差異', 'F', '4,000'], ['実際の販売量での標準貢献利益', '', '44,000'], ['売上価格差異', 'A', '(2,200)'], ['材料の差異（価格＋数量）', 'A', '(80)'], ['労務費の差異（賃率＋能率）', 'A', '(2,350)'], ['変動間接費の差異（予算＋能率）', 'A', '(70)'], ['実際の貢献利益', '', '39,300'], ['固定製造間接費の予算', '', '(16,000)'], ['固定間接費の予算差異', 'A', '(500)']], total: ['実際利益', '', '22,800'] },
          after: 'ここでは画面に収めるため2つずつまとめた。本番の解答では6つの差異を1行ずつ書く（$920 F、$1,000 A、$1,150 A、$1,200 A、$230 F、$300 A）。'
        },
        {
          title: '全部原価計算と比べる',
          table: { caption: '同じ椅子工房の2つの調整表', head: ['項目', '全部原価計算', '直接原価計算'], rows: [['出発点', '予算利益', '予算の貢献利益（予算利益でも可）'], ['売上数量差異の単価', '標準利益 $24', '標準貢献利益 $40'], ['売上数量差異', '$2,400 F', '$4,000 F'], ['固定間接費の差異', '予算差異と操業度差異', '予算差異だけ'], ['実際利益', '$22,800', '$22,800']] },
          after: '予算利益から始める場合: $24,000 ＋ $4,000 − $2,200 − $2,500 − $500 ＝ $22,800。'
        },
        {
          title: '$1,600 の差はどこへ行った？',
          svg: `<svg viewBox="0 0 440 214" role="img" aria-label="直接原価計算の売上数量差異4,000ドル有利は、全部原価計算の売上数量差異2,400ドルと固定製造間接費の操業度差異1,600ドルの合計と同じ。操業度差異の部分を強調" font-size="15"><text x="40" y="50" font-size="14" fill="var(--ink)">直接原価計算: $40 × 100脚</text><rect x="40" y="60" width="360" height="36" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="84" text-anchor="middle" fill="var(--ink)">売上数量差異 $4,000 F</text><text x="40" y="132" font-size="14" fill="var(--ink)">全部原価計算</text><rect x="40" y="142" width="216" height="36" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="148" y="166" text-anchor="middle" fill="var(--ink)">売上数量 $2,400</text><rect x="256" y="142" width="144" height="36" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="328" y="166" text-anchor="middle" font-weight="600" fill="var(--ink)">操業度 $1,600</text><text x="148" y="202" text-anchor="middle" font-size="14" fill="var(--quiet)">$24 × 100脚</text><text x="328" y="202" text-anchor="middle" font-size="14" fill="var(--quiet)">$16 × 100脚</text><text x="20" y="24" font-size="16" font-weight="600" fill="var(--ink)">同じ100脚の増加を、どこで数えるか</text></svg>`,
          caption: '作った量と売った量が同じなら、直接原価計算の売上数量差異 ＝ 全部原価計算の売上数量差異 ＋ 操業度差異。1個の標準固定費 $16 の分を、どちらの行で数えるかの違い。'
        },
        {
          title: 'なぜ？ 直接原価計算に操業度差異がない',
          paras: ['直接原価計算では、固定製造間接費は製品に配らず、その期の費用として予算額をそのまま引く。配っていないので、配り過ぎ・配り不足（操業度差異）は起こらない。残る差は、実際に払った額と予算の差（予算差異）だけ。', '固定費は売る量で変わらないので、1脚多く売れたときに増える利益は貢献利益 $40 全部になる。だから売上数量差異は標準貢献利益で測る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '直接原価計算の調整表に、固定製造間接費の操業度差異を入れてしまう。直接原価計算には操業度差異がない。また、売上数量差異を標準利益（$24）で計算するのも間違い。直接原価計算では標準貢献利益（$40）で測る。実際の貢献利益から実際利益に進むときは、固定費の予算額と予算差異の両方を引く。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['直接原価計算の売上数量差異 ＝（実際の販売量 − 予算の販売量）× 1個の標準貢献利益', '固定製造間接費の差異は予算差異だけ。操業度差異はない', '流れ: 予算の貢献利益 → 売上数量差異 → 売上価格差異 → 変動費の差異 → 実際の貢献利益 → 固定費（予算額と予算差異）→ 実際利益']
        },
        {
          title: '英単語',
          words: [
            ['standard marginal costing', '', '標準直接原価計算'],
            ['standard contribution per unit', '', '1個の標準貢献利益'],
            ['sales volume contribution variance', '', '売上数量差異（標準貢献利益で測る）'],
            ['budgeted contribution', '', '予算の貢献利益'],
            ['actual contribution', '', '実際の貢献利益'],
            ['fixed overhead expenditure variance', '', '固定製造間接費の予算差異']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following variances appears in a standard absorption costing operating statement but NOT in a standard marginal costing operating statement?', choices: ['Fixed overhead expenditure variance', 'Sales price variance', 'Fixed overhead volume variance', 'Variable overhead efficiency variance'], answer: 2, explain: '操業度差異は、固定製造間接費を製品に配る全部原価計算だけで出る。固定費の予算差異、売上価格差異、変動製造間接費の能率差異は、どちらの方法でも同じ金額で出る。' },
        { q: 'A company uses standard marginal costing. The standard contribution is $25 per unit. Budgeted sales were 3,000 units and actual sales were 2,800 units. The sales volume contribution variance is adverse. What is its amount?', type: 'number', answer: 5000, unit: '$', explain: '(2,800 − 3,000)個 × $25 ＝ $5,000。予算より200個少なく売ったので不利。売価や標準利益ではなく、標準貢献利益を掛ける。' },
        { q: '予算の貢献利益は $80,000、予算の固定費は $30,000。売上数量差異 $6,000 A、売上価格差異 $2,000 F、変動費の差異は純額 $1,500 A、固定費の予算差異は $1,000 F だった。実際利益はいくら？', type: 'number', answer: 45500, unit: '$', explain: '実際の貢献利益: $80,000 − $6,000 ＋ $2,000 − $1,500 ＝ $74,500。固定費: 予算 $30,000 から有利な予算差異 $1,000 を引いて、実際は $29,000。実際利益 ＝ $74,500 − $29,000 ＝ $45,500。予算差異の向きを逆にすると $43,500 になる。' },
        { q: '標準直接原価計算で、売上数量差異の計算に使う1個あたりの金額は？', choices: ['1個の標準利益（標準売価 − 標準の全部原価）', '1個の標準貢献利益（標準売価 − 標準変動費）', '1個の標準売価', '1個の標準固定製造間接費'], answer: 1, explain: '直接原価計算では、固定費は売る量で変わらないので、1個多く売れると利益は貢献利益の分だけ増える。標準利益を使うのは全部原価計算のとき。売価を使うと原価まで利益に数えてしまう。' },
        { q: 'Under standard absorption costing, the sales volume variance was $1,200 favourable. The standard profit is $12 per unit and the standard fixed production overhead is $6 per unit. What would the sales volume variance be under standard marginal costing?', choices: ['$600 favourable', '$1,200 favourable', '$1,800 adverse', '$1,800 favourable'], answer: 3, explain: '販売量の差: $1,200 ÷ $12 ＝ 100個多い。標準貢献利益 ＝ 標準利益 $12 ＋ 標準固定費 $6 ＝ $18。100個 × $18 ＝ $1,800 F。$600 は固定費を足さずに引いた間違い。量が多いので不利にはならない。' }
      ]
    }
  ],
  cards: [
    { id: 'M123-1', lesson: 'M123', q: '固定製造間接費の操業度差異を2つに分けると？', a: '能率差異（volume efficiency）＋ 生産能力差異（volume capacity）' },
    { id: 'M123-2', lesson: 'M123', q: '固定製造間接費の能率差異の式は？', a: '（実際の生産量の標準時間 − 実際時間）× 1時間の配賦率。実際が多いと不利' },
    { id: 'M123-3', lesson: 'M123', q: '生産能力差異の式は？', a: '（実際時間 − 予算時間）× 1時間の配賦率。実際が多いと有利' },
    { id: 'M123-4', lesson: 'M123', q: '操業度差異を分ける理由は？', a: '量の差が「働いた時間」と「作る速さ」のどちらから来たかを分け、責任者を分けるため' },
    { id: 'M123-5', lesson: 'M123', q: '直接原価計算での固定製造間接費の差異は？', a: '予算差異だけ。固定費を製品に配らないので操業度差異はない' },
    { id: 'M124-1', lesson: 'M124', q: '差異から元の数字を出す基本は？', a: '分かっている数字を式に入れて残り1つを解く。差異は「差 × 単価」なので割って戻す' },
    { id: 'M124-2', lesson: 'M124', q: '原価の差異が不利（A）なら、実際の額は？', a: '標準の額 ＋ 差異（有利なら 標準の額 − 差異）' },
    { id: 'M124-3', lesson: 'M124', q: '価格差異から実際の単価を出すとき、割る数は？', a: '実際の量（材料なら実際の購入量、労務費なら実際の支払時間）' },
    { id: 'M124-4', lesson: 'M124', q: '数量差異から実際の使用量を出すには？', a: '差異 ÷ 標準価格で量の差を出す。不利なら標準量に足し、有利なら引く' },
    { id: 'M124-5', lesson: 'M124', q: '操業度差異から予算の生産量を出すには？', a: '差異 ÷ 1個の標準固定費で量の差。有利なら予算は実際より少なく、不利なら多い' },
    { id: 'M125-1', lesson: 'M125', q: '調整表（operating statement）とは？', a: '予算利益に差異を足し引きして、実際利益につなぐ表' },
    { id: 'M125-2', lesson: 'M125', q: '調整表の順番は？', a: '予算利益 → 売上数量差異 → 実際の販売量での標準利益 → 売上価格差異 → 原価の差異 → 実際利益' },
    { id: 'M125-3', lesson: 'M125', q: '全部原価計算の売上数量差異の単価は？', a: '1個の標準利益（標準売価 − 標準の全部原価）' },
    { id: 'M125-4', lesson: 'M125', q: '調整表で有利・不利はどう扱う？', a: '有利（F）は足し、不利（A）は引く' },
    { id: 'M125-5', lesson: 'M125', q: '全部原価計算の調整表に入る固定間接費の差異は？', a: '予算差異と操業度差異（操業度差異は能率と生産能力に分けてもよい）' },
    { id: 'M125-6', lesson: 'M125', q: '売上数量差異を標準利益で測る理由は？', a: '原価が標準どおりなら1個多く売っても増える利益は標準利益だけ。原価のずれは原価の差異で数える' },
    { id: 'M126-1', lesson: 'M126', q: '標準直接原価計算の1個の標準原価に入るものは？', a: '変動費だけ（材料・労務費・変動製造間接費）。固定費は入れない' },
    { id: 'M126-2', lesson: 'M126', q: '直接原価計算の売上数量差異の単価は？', a: '1個の標準貢献利益（標準売価 − 標準変動費）' },
    { id: 'M126-3', lesson: 'M126', q: '直接原価計算の調整表の流れは？', a: '予算の貢献利益 → 売上の差異 → 変動費の差異 → 実際の貢献利益 → 固定費（予算額と予算差異）→ 実際利益' },
    { id: 'M126-4', lesson: 'M126', q: '2つの方法の売上数量差異の差は？', a: '1個の標準固定費 × 販売量の差。生産量＝販売量なら操業度差異と同じ額' },
    { id: 'M126-5', lesson: 'M126', q: '直接原価計算に操業度差異がない理由は？', a: '固定費を製品に配らず、予算額をそのまま期間の費用にするから' }
  ]
});
