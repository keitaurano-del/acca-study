(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 33,
  part: 20,
  partTitle: '財務諸表の分析',
  lessons: [
    {
      id: 'L160',
      no: 160,
      title: '分析の使われ方と比率の目的',
      goal: '財務諸表の分析が誰にどう使われるかと、数字をそのまま見ずに比率にする理由を説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['I1(a)', 'I1(b)'],
      slides: [
        {
          title: '健康診断で考える',
          paras: ['体重 70kg と聞いても、太っているかは分からない。身長が 160cm か 190cm かで意味が変わるから。', 'そこで BMI のように「体重 ÷ 身長の2乗」と割り算をする。割り算にすると、背の高さが違う人どうしでも比べられる。', 'さらに「去年の自分」「同じ年代の平均」と比べて、はじめて良い・悪いが言える。会社の成績表の分析も、まったく同じ考え方をする。']
        },
        {
          title: '金額だけでは比べられない',
          paras: ['A社の利益は B社の5倍。では A社の方が上手に稼いでいるか？'],
          table: {
            caption: '利益の大きさと、売上に対する割合',
            head: ['項目', 'A社', 'B社'],
            rows: [
              ['売上（revenue）', '$2,000,000', '$100,000'],
              ['利益（profit）', '$100,000', '$20,000'],
              ['利益 ÷ 売上', '5%', '20%']
            ]
          },
          after: '売上 $100 あたりで見ると、A社は $5、B社は $20 残している。稼ぐ効率は B社の方が上。金額は会社の大きさに引っぱられるので、割り算（比率）にして比べる。'
        },
        {
          title: '分析と比率とは',
          paras: ['財務諸表の分析・解釈（analysis and interpretation of financial statements）は、成績表の数字から会社の調子を読み取ること。', '比率（ratio）は、ある数字を別の数字で割ったもの。表し方は4通りある。'],
          list: ['%（パーセント）: 売上総利益率 30% など', '回（times）: 利息を何回払えるか 5回 など', '日（days）: 売掛金の回収に 58日 など', '「: 1」: 流動比率 1.5 : 1 など']
        },
        {
          title: '比率は4つのグループ',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="比率は収益性、流動性、効率性、財政状態の4つのグループに分かれる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">比率の4つのグループ</text><rect x="20" y="52" width="195" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="82" font-size="16" font-weight="600" fill="var(--ink)">収益性</text><text x="38" y="104" font-size="12.5" fill="var(--quiet)">profitability</text><text x="38" y="132" fill="var(--ink)">稼ぐ力はある？</text><rect x="225" y="52" width="195" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="243" y="82" font-size="16" font-weight="600" fill="var(--ink)">流動性</text><text x="243" y="104" font-size="12.5" fill="var(--quiet)">liquidity</text><text x="243" y="132" fill="var(--ink)">すぐ払える？</text><rect x="20" y="164" width="195" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="38" y="194" font-size="16" font-weight="600" fill="var(--ink)">効率性</text><text x="38" y="216" font-size="12.5" fill="var(--quiet)">efficiency</text><text x="38" y="244" fill="var(--ink)">うまく回している？</text><rect x="225" y="164" width="195" height="100" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="243" y="194" font-size="16" font-weight="600" fill="var(--ink)">財政状態</text><text x="243" y="216" font-size="12.5" fill="var(--quiet)">position</text><text x="243" y="244" fill="var(--ink)">借金に頼りすぎ？</text><rect x="20" y="280" width="400" height="44" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="308" text-anchor="middle" fill="var(--ink)">どれも「前年」「他社」と比べて読む</text></svg>`,
          caption: '次のレッスンから、1グループずつ計算のしかたを学ぶ。'
        },
        {
          title: '何と比べる？',
          paras: ['比率は1つだけ見ても意味がない。比べる相手が必要。'],
          list: ['前年や過去数年の自社（trend、傾向）: 良くなった？悪くなった？', '同業他社・業界平均（industry average）: 同じ商売の会社より上か下か', '予算・目標（budget）: 計画どおりか'],
          note: { kind: 'tip', text: '比べる相手は同じ業種にする。スーパーと宝石店では、ふつうの比率がまったく違う。' }
        },
        {
          title: '誰が何を知りたい？',
          table: {
            caption: '利用者（user）によって見る比率が違う',
            head: ['利用者', '知りたいこと', '主に見る比率'],
            rows: [
              ['株主・投資家', 'もうかる？配当は？', '収益性'],
              ['銀行など貸し手', '返せる？利息は？', '流動性・財政状態'],
              ['仕入先（取引先）', '代金を払ってくれる？', '流動性・支払日数'],
              ['従業員', '会社は続く？給料は？', '収益性・安定性'],
              ['経営者', 'どこを直す？', '全部（特に効率性）']
            ]
          }
        },
        {
          title: 'ビジネスでの使われ方',
          list: ['経営者: 問題を見つけて手を打つ。例: 売掛金の回収が遅くなった → 請求と督促を見直す', '投資家: 株を買うか、持ち続けるか、売るかを決める', '銀行: お金を貸すか、いくら・どんな条件で貸すかを決める', '仕入先: 掛けで売るか、いくらまで掛けにするかを決める']
        },
        {
          title: 'なぜ？ 比率にする理由',
          numbered: ['大きさの違う会社や、規模が変わった年どうしを比べられるようにするため', '数字の変化に気づき、「どこを詳しく調べるべきか」を見つけるため', '利用者が判断（貸す、買う、直す）をするための材料にするため'],
          after: '比率は「答え」ではなく「質問」を出すもの。「回収日数が伸びた」と分かったら、次に「なぜ？」を他の情報で調べる。'
        },
        {
          title: '分析には限界もある',
          paras: ['比率分析（ratio analysis）は便利だが、万能ではない。'],
          list: ['過去の数字なので、未来はそのまま分からない', '会社ごとに会計方針（減価償却の方法、再評価するかなど）が違うと、比べにくい', '期末の1日の数字なので、季節や期末だけの操作（window dressing）で見え方が変わる', 'インフレや、数字に出ない情報（人材、評判、市場）は映らない'],
          note: { kind: 'warn', text: '比率が1つ悪くなっただけで「この会社はだめ」と決めつけない。理由と、ほかの比率を合わせて読む。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['金額は会社の大きさに引っぱられる。割り算（比率）にして比べる', '比率は4グループ: 収益性・流動性・効率性・財政状態。前年・他社・予算と比べる', '利用者によって見る比率が違う。比率は答えではなく質問を出す']
        },
        {
          title: '英単語',
          words: [
            ['interpretation', 'インタープリテーション', '解釈（数字の意味を読み取ること）'],
            ['ratio analysis', 'レイシオ アナリシス', '比率分析'],
            ['profitability', 'プロフィタビリティ', '収益性（稼ぐ力）'],
            ['liquidity', 'リクイディティ', '流動性（すぐ払えるか）'],
            ['efficiency', 'エフィシェンシー', '効率性（資源をうまく使えているか）'],
            ['position / gearing', 'ポジション / ギアリング', '財政状態 / 借入への依存度'],
            ['industry average', 'インダストリー アベレージ', '業界平均'],
            ['trend', 'トレンド', '傾向（年ごとの変化）']
          ]
        }
      ],
      quiz: [
        { q: 'A社の利益は $500,000、B社の利益は $100,000。これだけで言えることは？', choices: ['A社の方が稼ぐ効率が良い', 'B社の方が稼ぐ効率が良い', '会社の大きさが違うので、これだけではどちらが上手か分からない', 'A社は B社の5倍の売上がある'], answer: 2, explain: '金額は会社の大きさに引っぱられる。売上や使った資本で割った比率にしないと、稼ぐ効率は比べられない。売上が5倍とも限らない。' },
        { q: 'Which user of financial statements is MOST likely to focus on interest cover and gearing?', choices: ['A bank considering a loan to the company', 'An employee', 'A customer', 'A competitor'], answer: 0, explain: '利息を払えるか（interest cover）、借金に頼りすぎていないか（gearing）は、お金を貸す側が一番気にする。' },
        { q: 'What is the main purpose of calculating accounting ratios?', choices: ['To make figures comparable between periods and between businesses of different sizes', 'To calculate the profit for the year', 'To prove that the financial statements are free from error', 'To calculate the tax charge'], answer: 0, explain: '比率の目的は比べられるようにすること。利益の計算や誤りの証明、税金の計算は比率の目的ではない。' },
        { q: '流動性（liquidity）の比率が答える問いはどれ？', choices: ['売上に対してどれだけ稼いでいるか', '近いうちに来る支払いをきちんと払えるか', '借金に頼りすぎていないか', '在庫が何日で売れるか'], answer: 1, explain: '流動性は「すぐ払えるか」。稼ぐ力は収益性、借金への依存は財政状態、在庫の日数は効率性。' },
        { q: '比率分析の限界として正しいものはどれ？', choices: ['比率にすると会社の大きさの違いが分からなくなるので使えない', '財務諸表は過去の数字なので、未来をそのまま示すわけではない', '前年と比べることはできない', '比率は必ず業界平均と同じになる'], answer: 1, explain: '財務諸表は過去の記録。また会計方針の違い、期末1日の数字であることなども限界。前年との比較はむしろ基本の使い方。' }
      ]
    },
    {
      id: 'L161',
      no: 161,
      title: '収益性の比率',
      goal: '売上総利益率・営業利益率・ROCE を計算し、上がった・下がった理由を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['I2(a)i', 'I3(a)'],
      slides: [
        {
          title: 'カフェの1杯で考える',
          paras: ['コーヒーを1杯 500円で売り、豆とミルクに 150円かかる。1杯で 350円残る。売値に対して 70% が残る計算。', 'そこから家賃やバイト代も払う。それでも1杯あたり 50円残れば、売値の 10%。', '収益性（profitability）の比率は「売上や使ったお金に対して、どれだけ残ったか」を見る。']
        },
        {
          title: 'Tako Co の損益計算書',
          paras: ['Tako Co（たこ焼き株式会社）は 20X5年に新しい店を3つ開き、スーパーへの冷凍たこ焼きの卸売りも始めた。このパートでは、この会社の2年分を使う。'],
          table: {
            caption: 'Statement of profit or loss',
            head: ['項目', '20X5 $', '20X4 $'],
            rows: [
              ['Revenue', '500,000', '400,000'],
              ['Cost of sales', '(350,000)', '(260,000)'],
              ['Gross profit', '150,000', '140,000'],
              ['Operating expenses', '(90,000)', '(80,000)'],
              ['Operating profit', '60,000', '60,000'],
              ['Finance costs', '(12,000)', '(5,000)'],
              ['Profit before tax', '48,000', '55,000'],
              ['Tax', '(10,000)', '(11,000)'],
              ['Profit for the year', '38,000', '44,000']
            ]
          }
        },
        {
          title: '売上総利益率（gross profit margin）',
          formula: 'gross profit margin ＝ gross profit ÷ revenue × 100',
          list: ['20X5: 150,000 ÷ 500,000 × 100 ＝ 30%', '20X4: 140,000 ÷ 400,000 × 100 ＝ 35%'],
          after: '売上 $100 ごとに、仕入れ（売上原価）を引いて $30 残る。前年は $35 残っていた。商品そのものでもうける力が下がった。'
        },
        {
          title: '営業利益率（operating profit margin）',
          formula: 'operating profit margin ＝ operating profit ÷ revenue × 100',
          list: ['20X5: 60,000 ÷ 500,000 × 100 ＝ 12%', '20X4: 60,000 ÷ 400,000 × 100 ＝ 15%'],
          after: '営業利益（operating profit）は、利息と税金を引く前の利益。profit before interest and tax（PBIT）とも呼ぶ。家賃・給料・減価償却など、商売の費用を全部引いた後に残る割合を見る。',
          note: { kind: 'tip', text: '問題によっては net profit margin と呼ぶ。分子に何を使うか、問題文の定義を必ず読む。' }
        },
        {
          title: 'ROCE（使った資本の利益率）',
          paras: ['銀行に 100万円預けて1年で 2万円の利息が付けば、2%。お金を「どれだけ使って」「どれだけ稼いだか」の比率。会社でも同じことを見る。'],
          formula: 'ROCE ＝ operating profit (PBIT) ÷ capital employed × 100',
          list: ['capital employed（使用資本）＝ equity ＋ non-current liabilities', '同じ値: total assets − current liabilities', '20X5: 60,000 ÷ (250,000 ＋ 150,000) ＝ 60,000 ÷ 400,000 ＝ 15%', '20X4: 60,000 ÷ (200,000 ＋ 50,000) ＝ 60,000 ÷ 250,000 ＝ 24%']
        },
        {
          title: 'なぜ？ ROCE は利息を引く前の利益',
          paras: ['ROCE の分母（capital employed）には、株主が出したお金（equity）と、長期で借りたお金（non-current liabilities）の両方が入る。', 'その両方が生んだもうけは、貸し手に利息を払う前の利益。だから分子も利息を引く前の PBIT にする。分子と分母で「誰のお金か」をそろえる。', 'ROCE は「長く使っているお金全体で、どれだけ効率よく稼いだか」を表す。']
        },
        {
          title: '例題: 3つの比率を計算する',
          example: {
            problem: 'Mochi Co: revenue $200,000、cost of sales $120,000、operating expenses $50,000、finance costs $4,000。equity $100,000、bank loan（長期）$50,000、current liabilities $30,000。売上総利益率・営業利益率・ROCE は？',
            steps: ['売上総利益 ＝ 200,000 − 120,000 ＝ $80,000。80,000 ÷ 200,000 ＝ 40%', '営業利益 ＝ 80,000 − 50,000 ＝ $30,000（finance costs は引かない）。30,000 ÷ 200,000 ＝ 15%', 'capital employed ＝ 100,000 ＋ 50,000 ＝ $150,000（current liabilities は入れない）', 'ROCE ＝ 30,000 ÷ 150,000 ＝ 20%'],
            answer: '売上総利益率 40%、営業利益率 15%、ROCE 20%'
          }
        },
        {
          title: '変化の理由を考える',
          paras: ['Tako Co は3つとも下がった。考えられる理由を、財務諸表の情報と結びつける。'],
          list: ['売上総利益率 35% → 30%: 値下げ、材料（小麦粉・たこ）の値上がり、もうけの薄い卸売りが増えた（sales mix）、期末棚卸資産の数え間違い', '営業利益率 15% → 12%: 売上総利益率の低下が主な原因。新店の家賃や減価償却で営業費用も増えた', 'ROCE 24% → 15%: 新店と借入で使用資本が $250,000 → $400,000 に増えたが、営業利益は $60,000 のまま。期中に買った新店は、まだ1年分稼いでいない']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'ROCE の分子に税引後利益や税引前利益を使う。正しくは利息と税金の前の PBIT（営業利益）。分母に流動負債を入れる、equity だけにする、も間違い。' },
          paras: ['割る順番を逆にしない。利益率はいつも「利益 ÷ 売上」。', '期末棚卸資産を多く数えすぎると、売上原価が小さくなり、売上総利益率は上がって見える。数え間違いも比率を動かす。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上総利益率 ＝ 売上総利益 ÷ 売上。営業利益率 ＝ 営業利益（PBIT）÷ 売上', 'ROCE ＝ PBIT ÷（資本 ＋ 非流動負債）。分母は総資産 − 流動負債でも同じ', '下がったら理由を探す: 値段・仕入値・売る物の組み合わせ・費用・新しい投資']
        },
        {
          title: '英単語',
          words: [
            ['gross profit margin', 'グロス プロフィット マージン', '売上総利益率'],
            ['operating profit margin', 'オペレーティング プロフィット マージン', '営業利益率（net profit margin とも）'],
            ['PBIT (profit before interest and tax)', 'ピービット', '利息・税金を引く前の利益（営業利益）'],
            ['ROCE (return on capital employed)', 'ロウシー', '使用資本利益率'],
            ['capital employed', 'キャピタル エンプロイド', '使用資本（資本＋非流動負債）'],
            ['sales mix', 'セールス ミックス', '売る商品の組み合わせ']
          ]
        }
      ],
      quiz: [
        { q: 'Revenue is $800,000 and cost of sales is $560,000. What is the gross profit margin (%)?', type: 'number', answer: 30, unit: '%', explain: '売上総利益 ＝ 800,000 − 560,000 ＝ $240,000。240,000 ÷ 800,000 × 100 ＝ 30%。売上原価 ÷ 売上（70%）と間違えない。' },
        { q: 'A company has profit before interest and tax of $45,000, equity of $200,000, a long-term loan of $100,000 and current liabilities of $60,000. What is the return on capital employed?', choices: ['15%', '22.5%', '12.5%', '18.75%'], answer: 0, explain: 'capital employed ＝ 200,000 ＋ 100,000 ＝ $300,000。45,000 ÷ 300,000 ＝ 15%。22.5% は equity だけで割った間違い、12.5% は流動負債も足した間違い、18.75% は流動負債を引いた間違い。' },
        { q: 'ある会社の売上総利益率は2年とも 40%。営業利益率は 20% から 14% に下がった。最も考えられる理由は？', choices: ['販売価格を下げた', '仕入値が上がった', '家賃や給料などの営業費用が増えた', '借入の利息が増えた'], answer: 2, explain: '売上総利益率が同じなので、値段や仕入値は原因ではない。売上総利益から営業利益までの間にある営業費用が増えた。利息は営業利益の後で引くので、営業利益率には影響しない。' },
        { q: "Which of the following would cause a company's gross profit margin to INCREASE?", choices: ['Closing inventory is overstated', 'Suppliers increase their prices', 'Selling prices are reduced', 'Distribution costs fall'], answer: 0, explain: '期末棚卸資産が多すぎると売上原価が小さくなり、売上総利益が大きく出る。仕入値の上昇と値下げは率を下げる。配送費（distribution costs）は売上総利益の下で引くので、売上総利益率は変わらない。' },
        { q: 'Revenue is $250,000, gross profit is $100,000, operating expenses are $70,000 and finance costs are $5,000. What is the operating profit margin (%)?', type: 'number', answer: 12, unit: '%', explain: '営業利益 ＝ 100,000 − 70,000 ＝ $30,000。30,000 ÷ 250,000 ＝ 12%。finance costs は営業利益の後なので引かない（引くと 10% になる）。' },
        { q: 'ROCE の分子に、利息を引く前の利益（PBIT）を使う理由は？', choices: ['税金の計算が簡単になるから', '分母の使用資本に貸し手のお金も入っているので、貸し手への利息を払う前の利益とそろえるため', '利息は費用ではないから', 'PBIT はいつも税引後利益より小さいから'], answer: 1, explain: '使用資本 ＝ 株主のお金 ＋ 長期の借入。その全体が生んだもうけは、利息を払う前の利益。分子と分母で対象をそろえる。' }
      ]
    },
    {
      id: 'L162',
      no: 162,
      title: '流動性の比率',
      goal: '流動比率と当座比率を計算し、取引が比率をどう動かすかと、高すぎ・低すぎの意味を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['I2(a)ii', 'I3(a)'],
      slides: [
        {
          title: '来月の支払いを払える？',
          paras: ['来月、カードの請求が 15万円来る。手元にあるのは、口座の 5万円、来週入る給料 25万円、売るつもりのゲーム機。', '口座と給料で 30万円あるので払える。ゲーム機はいつ・いくらで売れるか分からないので、あてにしない方が安心。', '流動性（liquidity）は「近いうちに来る支払いを、きちんと払えるか」。']
        },
        {
          title: 'なぜ？ 利益があっても潰れる',
          paras: ['会社は、利益が出ていても、支払いの日に現金がなければ潰れる（黒字倒産）。利益と現金は違う（キャッシュフロー計算書で学んだ）。', 'そこで、1年以内に現金になるもの（流動資産）と、1年以内に払うもの（流動負債）を比べる。'],
          table: {
            caption: 'Tako Co の流動資産と流動負債（期末）',
            head: ['項目', '20X5 $', '20X4 $'],
            rows: [
              ['Inventory', '70,000', '40,000'],
              ['Trade receivables', '80,000', '40,000'],
              ['Cash', '0', '20,000'],
              ['Current assets', '150,000', '100,000'],
              ['Trade payables', '60,000', '39,000'],
              ['Bank overdraft', '30,000', '0'],
              ['Tax payable', '10,000', '11,000'],
              ['Current liabilities', '100,000', '50,000']
            ]
          }
        },
        {
          title: '流動比率（current ratio）',
          formula: 'current ratio ＝ current assets ÷ current liabilities',
          list: ['20X5: 150,000 ÷ 100,000 ＝ 1.5（1.5 : 1）', '20X4: 100,000 ÷ 50,000 ＝ 2.0（2 : 1）'],
          after: '流動負債 $1 に対して、流動資産が $1.5 ある。前年の $2 より、支払いの余裕が減った。'
        },
        {
          title: '当座比率（quick ratio）',
          paras: ['棚卸資産（在庫）は、まず売れて、さらに代金を回収して、やっと現金になる。売れ残るかもしれない。だから一番あてにしにくい流動資産として外す。酸性試験比率（acid test ratio）とも呼ぶ。'],
          formula: 'quick ratio ＝ (current assets − inventory) ÷ current liabilities',
          list: ['20X5: (150,000 − 70,000) ÷ 100,000 ＝ 0.8', '20X4: (100,000 − 40,000) ÷ 50,000 ＝ 1.2']
        },
        {
          title: '例題: 2つの比率',
          example: {
            problem: 'Mochi Co の期末: inventory $45,000、trade receivables $30,000、cash $15,000。trade payables $45,000、tax payable $15,000。流動比率と当座比率は？',
            steps: ['流動資産 ＝ 45,000 ＋ 30,000 ＋ 15,000 ＝ $90,000', '流動負債 ＝ 45,000 ＋ 15,000 ＝ $60,000', '流動比率 ＝ 90,000 ÷ 60,000 ＝ 1.5', '当座比率 ＝ (90,000 − 45,000) ÷ 60,000 ＝ 45,000 ÷ 60,000 ＝ 0.75'],
            answer: '流動比率 1.5 : 1、当座比率 0.75 : 1'
          }
        },
        {
          title: '高ければ良い？',
          paras: ['昔からの目安は、流動比率 2 : 1、当座比率 1 : 1。ただし業種で大きく違う。スーパーは現金で売り、在庫もすぐ売れるので、流動比率が 1 を下回っても困らないことが多い。'],
          list: ['低すぎ: 支払いの日に現金が足りなくなるおそれ', '高すぎ: 現金を寝かせている、在庫を持ちすぎ、回収が遅い。お金を有効に使えていない'],
          after: 'Tako Co は2つとも下がり、現金 $20,000 が当座借越 $30,000 になった。新店の費用を現金でも払い、在庫と売掛金も増えたため。当座比率 0.8 は様子を見る必要がある。'
        },
        {
          title: '取引で比率はどう動く？',
          paras: ['試験によく出る。流動比率が 1 より大きいとき、流動資産と流動負債を同じ額だけ減らすと、比率は上がる。'],
          table: {
            caption: '取引前の流動資産 $150,000、流動負債 $100,000',
            head: ['取引', '流動資産 ÷ 流動負債', '流動比率'],
            rows: [
              ['取引前', '150,000 ÷ 100,000', '1.5'],
              ['買掛金 $50,000 を現金で払う', '100,000 ÷ 50,000', '2.0'],
              ['在庫 $30,000 を掛けで買う', '180,000 ÷ 130,000', '1.38']
            ]
          },
          after: '売掛金を現金で回収しても、流動資産の中で入れ替わるだけなので流動比率は変わらない。在庫を現金で買うと、流動比率は変わらないが、当座比率は下がる（現金が減り、増えた在庫は当座比率では数えないため）。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '当座借越（bank overdraft）を資産のマイナスにする。当座借越は流動負債なので、分母に入れる。また、在庫を外すのは当座比率だけ。流動比率では外さない。' },
          paras: ['非流動資産（建物など）や非流動負債（長期の借入）は入れない。流動性は「1年以内」の話。', '答えは「1.5」「1.5 : 1」「1.5 times」のどれでも同じ意味。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['流動比率 ＝ 流動資産 ÷ 流動負債', '当座比率 ＝（流動資産 − 在庫）÷ 流動負債。在庫は現金になるのが一番遅いので外す', '低すぎは支払いの危険、高すぎはお金の寝かせすぎ。業種で目安が違う']
        },
        {
          title: '英単語',
          words: [
            ['liquidity', 'リクイディティ', '流動性（すぐ払えるか）'],
            ['current ratio', 'カレント レイシオ', '流動比率'],
            ['quick ratio / acid test ratio', 'クイック レイシオ / アシッド テスト', '当座比率'],
            ['bank overdraft', 'バンク オーバードラフト', '当座借越（流動負債）'],
            ['working capital', 'ワーキング キャピタル', '運転資本（流動資産 − 流動負債）'],
            ['insolvent', 'インソルベント', '支払い不能の']
          ]
        }
      ],
      quiz: [
        { q: 'A company has current assets of $240,000, including inventory of $90,000, and current liabilities of $120,000. What is the quick ratio?', type: 'number', answer: 1.25, unit: '', explain: '(240,000 − 90,000) ÷ 120,000 ＝ 150,000 ÷ 120,000 ＝ 1.25。在庫を外さないと流動比率の 2.0 になる。' },
        { q: 'A company has a current ratio of 1.8:1. Which of the following transactions would REDUCE its current ratio?', choices: ['Purchasing inventory on credit', 'Paying a trade payable in cash', 'Receiving cash from a trade receivable', 'Issuing shares for cash'], answer: 0, explain: '比率が 1 より大きいとき、分子と分母に同じ額を足すと比率は 1 に近づく（下がる）。買掛金の現金払いは両方を減らすので上がる。売掛金の回収は流動資産の中の入れ替えで変わらない。株の発行は流動資産だけ増えるので上がる。' },
        { q: '当座比率で棚卸資産を外す理由は？', choices: ['棚卸資産は非流動資産だから', '棚卸資産は売れて代金を回収するまで現金にならず、売れ残るおそれもあるから', '棚卸資産は負債だから', '棚卸資産の金額は毎年同じだから'], answer: 1, explain: '棚卸資産は流動資産だが、現金になるまでに「売る」「回収する」の2段階がいる。一番あてにしにくいので外す。' },
        { q: 'Current assets are $90,000 and current liabilities are $60,000. The company then pays a trade payable of $30,000 in cash. What is the current ratio after this payment?', choices: ['2.0:1', '1.5:1', '1.0:1', '3.0:1'], answer: 0, explain: '支払い後は流動資産 60,000 ÷ 流動負債 30,000 ＝ 2.0。1.5 は支払い前。1.0 は流動資産だけ減らした間違い、3.0 は流動負債だけ減らした間違い。' },
        { q: 'ある会社の流動比率は 4 : 1 と、業界平均の 1.5 : 1 よりかなり高い。考えられる問題点は？', choices: ['支払いの日に現金が足りなくなる', '現金や在庫を使わずに寝かせていて、お金を有効に使えていない', '借金が多すぎる', '売上総利益率が低い'], answer: 1, explain: '流動比率が高すぎるのは、現金のため込み・在庫の持ちすぎ・回収の遅れなど、お金が働いていないサイン。払えなくなる心配は低すぎる場合。' },
        { q: '期末に当座借越（bank overdraft）$8,000 がある。流動比率の計算ではどう扱う？', choices: ['流動資産から引く', '流動負債に入れる', '非流動負債に入れる', '計算に入れない'], answer: 1, explain: '当座借越は銀行にすぐ返すべき借りで、流動負債。分母に入れる。' }
      ]
    },
    {
      id: 'L163',
      no: 163,
      title: '効率性の比率（回転日数）',
      goal: '在庫・売掛金・買掛金の日数と資産回転率を計算し、運転資本のサイクルと変化の理由を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['I2(a)iii', 'I3(a)'],
      slides: [
        {
          title: '冷蔵庫の食材で考える',
          paras: ['1週間分ずつ買う人と、1か月分まとめて買う人。まとめ買いは、食材が傷みやすく、お金も冷蔵庫の中で眠る。', '友だちに貸したお金が、何日で返ってくるかも大事。返ってくるまで、そのお金は使えない。', '効率性（efficiency）の比率は「在庫・売掛金・資産を、どれだけうまく回しているか」を日数や回数で見る。']
        },
        {
          title: '在庫の日数（inventory holding period）',
          formula: 'inventory days ＝ inventory ÷ cost of sales × 365',
          list: ['20X5: 70,000 ÷ 350,000 × 365 ＝ 73日', '20X4: 40,000 ÷ 260,000 × 365 ＝ 56.2日'],
          after: '在庫が平均何日で売れるか。在庫は原価で記録しているので、売上ではなく売上原価で割る。回数で見る在庫回転率（inventory turnover ＝ cost of sales ÷ inventory）もある。20X5 は 5回、20X4 は 6.5回。回数は多い方が速い。'
        },
        {
          title: '売掛金の日数（receivables collection period）',
          formula: 'receivables days ＝ trade receivables ÷ credit sales × 365',
          list: ['20X5: 80,000 ÷ 500,000 × 365 ＝ 58.4日', '20X4: 40,000 ÷ 400,000 × 365 ＝ 36.5日'],
          after: '掛けで売ってから、代金を回収するまでの平均日数。現金売上は売掛金を生まないので、掛け売上（credit sales）で割る。問題に掛け売上がなければ revenue を使う（Tako Co は revenue を使った）。'
        },
        {
          title: '買掛金の日数（payables payment period）',
          formula: 'payables days ＝ trade payables ÷ credit purchases × 365',
          list: ['20X5: 60,000 ÷ 350,000 × 365 ＝ 62.6日', '20X4: 39,000 ÷ 260,000 × 365 ＝ 54.75日（約55日）'],
          after: '掛けで仕入れてから、仕入先に払うまでの平均日数。仕入高（purchases）が分からないときは、売上原価で代わりにする（Tako Co はこちら）。',
          note: { kind: 'tip', text: '期首と期末の在庫が分かれば、仕入高 ＝ 売上原価 − 期首在庫 ＋ 期末在庫 で出せる。どちらを使うかは問題の指示に従う。' }
        },
        {
          title: '資産回転率（asset turnover）',
          formula: 'asset turnover ＝ revenue ÷ capital employed',
          list: ['20X5: 500,000 ÷ 400,000 ＝ 1.25回', '20X4: 400,000 ÷ 250,000 ＝ 1.6回'],
          after: '使用資本 $1 で、売上を何ドル生んだか。多いほど資産をよく働かせている。20X5 は新店に大きく投資したが、売上はまだ追いついていない。'
        },
        {
          title: '運転資本のサイクル',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="在庫40日と売掛金45日を足し、買掛金30日を引くと、お金が出ていっている期間は55日" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">お金が戻るまでの日数</text><text x="124" y="68" text-anchor="middle" fill="var(--ink)">在庫 40日</text><path d="M40 80L209 80M40 74L40 86M209 74L209 86" stroke="var(--edge)" stroke-width="1.25" fill="none"/><text x="305" y="68" text-anchor="middle" fill="var(--ink)">売掛金 45日</text><path d="M211 80L400 80M211 74L211 86M400 74L400 86" stroke="var(--edge)" stroke-width="1.25" fill="none"/><path d="M40 130L400 130" stroke="var(--ink)" stroke-width="2" fill="none"/><circle cx="40" cy="130" r="6" fill="var(--ink)"/><circle cx="209" cy="130" r="6" fill="var(--ink)"/><circle cx="400" cy="130" r="6" fill="var(--ink)"/><circle cx="167" cy="130" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="28" y="158" fill="var(--ink)">仕入れ</text><text x="209" y="158" text-anchor="middle" fill="var(--ink)">売れる</text><text x="412" y="158" text-anchor="end" fill="var(--ink)">回収</text><path d="M40 190L167 190M40 184L40 196M167 184L167 196" stroke="var(--edge)" stroke-width="1.25" fill="none"/><text x="103" y="214" text-anchor="middle" fill="var(--ink)">買掛金 30日</text><text x="103" y="234" text-anchor="middle" font-size="12.5" fill="var(--quiet)">仕入先に払う</text><path d="M167 254L400 254M167 248L167 260M400 248L400 260" stroke="var(--accent)" stroke-width="2.5" fill="none"/><text x="283" y="280" text-anchor="middle" font-weight="600" fill="var(--ink)">お金が出たまま 55日</text><text x="220" y="316" text-anchor="middle" fill="var(--ink)">40 ＋ 45 − 30 ＝ 55日</text></svg>`,
          caption: 'working capital cycle（cash operating cycle）＝ 在庫の日数 ＋ 売掛金の日数 − 買掛金の日数。この期間が長いほど、お金が商売の中で眠り、借りる必要が出てくる。'
        },
        {
          title: '例題: 日数とサイクル',
          example: {
            problem: 'Mochi Co: revenue（全部掛け）$730,000、cost of sales $438,000（仕入高も同じ）。期末 inventory $48,000、trade receivables $90,000、trade payables $36,000。3つの日数と運転資本のサイクルは？（1年 365日）',
            steps: ['在庫の日数 ＝ 48,000 ÷ 438,000 × 365 ＝ 40日', '売掛金の日数 ＝ 90,000 ÷ 730,000 × 365 ＝ 45日', '買掛金の日数 ＝ 36,000 ÷ 438,000 × 365 ＝ 30日', 'サイクル ＝ 40 ＋ 45 − 30 ＝ 55日'],
            answer: '在庫 40日、売掛金 45日、買掛金 30日、サイクル 55日'
          }
        },
        {
          title: '変化の理由を考える',
          list: ['在庫の日数が伸びた（56 → 73日）: 売れ残り・古くなる危険、保管の費用、お金が眠る。ただし新店や卸売りに備えて多めに持った可能性もある', '売掛金の日数が伸びた（36.5 → 58.4日）: 回収の管理（credit control）が甘くなった、または大口の客（スーパー）に長い支払い期限を認めた。貸倒れの危険も増える', '買掛金の日数が伸びた（55 → 62.6日）: 仕入先のお金を長く使えて現金は助かる。ただし早期支払割引を逃す、仕入先との関係が悪くなる、取引を止められるおそれ'],
          after: 'Tako Co のサイクルは 37.9日 → 68.8日。現金が当座借越になった理由の1つになる。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '在庫と買掛金は売上原価（または仕入高）で、売掛金は売上で割る。逆にしない。日数は短いほど速いが、回転率（回）は大きいほど速い。向きを取り違えない。' },
          paras: ['問題に「平均」とあれば、平均在庫 ＝（期首 ＋ 期末）÷ 2 を使う。何も書いていなければ期末の金額を使う。', '月数で聞かれたら × 365 の代わりに × 12。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['在庫 ÷ 売上原価 × 365、売掛金 ÷ 掛け売上 × 365、買掛金 ÷ 掛け仕入 × 365', '資産回転率 ＝ 売上 ÷ 使用資本（回）', 'サイクル ＝ 在庫日数 ＋ 売掛金日数 − 買掛金日数。長いほどお金が眠る']
        },
        {
          title: '英単語',
          words: [
            ['inventory holding period', 'インベントリー ホールディング ピリオド', '在庫の日数（在庫回転期間）'],
            ['inventory turnover', 'インベントリー ターンオーバー', '在庫回転率（回）'],
            ['receivables collection period', 'レシーバブルズ コレクション ピリオド', '売掛金の回収日数'],
            ['payables payment period', 'ペイアブルズ ペイメント ピリオド', '買掛金の支払日数'],
            ['asset turnover', 'アセット ターンオーバー', '資産回転率'],
            ['working capital cycle', 'ワーキング キャピタル サイクル', '運転資本のサイクル（cash operating cycle）'],
            ['credit control', 'クレジット コントロール', '売掛金の回収管理']
          ]
        }
      ],
      quiz: [
        { q: 'Trade receivables are $72,000 and credit sales for the year are $657,000. What is the receivables collection period in days (365-day year)?', type: 'number', answer: 40, unit: '日', explain: '72,000 ÷ 657,000 × 365 ＝ 40日（657,000 ÷ 365 ＝ 1,800、72,000 ÷ 1,800 ＝ 40）。' },
        { q: 'Opening inventory was $30,000 and closing inventory was $50,000. Cost of sales was $292,000. Using AVERAGE inventory, what is the inventory holding period (365-day year)?', choices: ['50 days', '62.5 days', '37.5 days', '7.3 days'], answer: 0, explain: '平均在庫 ＝ (30,000 ＋ 50,000) ÷ 2 ＝ $40,000。40,000 ÷ 292,000 × 365 ＝ 50日。62.5日は期末、37.5日は期首だけを使った間違い。7.3 は在庫回転率（回）で、日数ではない。' },
        { q: '売掛金の日数が 30日から 50日に伸びた。考えられる理由として最も適切なのは？', choices: ['仕入先への支払いを遅らせた', '回収の管理（credit control）が甘くなった、または客に長い支払い期限を認めた', '現金で売る割合が増えた', '在庫を増やした'], answer: 1, explain: '売掛金の日数は「売ってから回収するまで」。仕入先への支払いは買掛金の日数、在庫は在庫の日数の話。現金売上が増えると売掛金は減るので、日数はむしろ短くなる。' },
        { q: 'Which of the following statements about the payables payment period is correct?', choices: ['A longer period helps cash flow but may damage relationships with suppliers', 'It is calculated using revenue', 'A longer period always means the company is in financial difficulty', 'It is calculated as trade receivables divided by cost of sales'], answer: 0, explain: '支払いを遅らせると現金は手元に残るが、割引を逃したり、仕入先に嫌われたりする。分母は仕入高（なければ売上原価）で、売上ではない。長い＝必ず経営難、とは限らない。' },
        { q: 'A company has an inventory holding period of 45 days, a receivables collection period of 38 days and a payables payment period of 50 days. What is the length of its working capital cycle in days?', type: 'number', answer: 33, unit: '日', explain: '45 ＋ 38 − 50 ＝ 33日。買掛金の日数は、仕入先のお金を使える期間なので引く。全部足すと 133日の間違いになる。' },
        { q: '売上 $600,000、使用資本 $400,000。資産回転率は？', choices: ['1.5回', '0.67回', '66.7%', '150日'], answer: 0, explain: '600,000 ÷ 400,000 ＝ 1.5回。使用資本 $1 で売上 $1.5 を生んだ。逆に割ると 0.67 になる。' }
      ]
    },
    {
      id: 'L164',
      no: 164,
      title: '財政状態の比率（ギアリングなど）',
      goal: 'ギアリング比率とインタレスト・カバーを計算し、借入に頼る度合いが高いと何が起きるかを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['I2(a)iv', 'I3(a)'],
      slides: [
        {
          title: '家のローンで考える',
          paras: ['同じ 3,000万円の家を買った2人。'],
          list: ['Aさん: 自分のお金 500万円 ＋ ローン 2,500万円', 'Bさん: 自分のお金 2,000万円 ＋ ローン 1,000万円'],
          after: '収入が減ったとき、苦しいのは Aさん。ローンの返済と利息は、収入に関係なく毎月来るから。財政状態（position）の比率は「借入にどれだけ頼っているか」と「利息を払う余裕」を見る。'
        },
        {
          title: 'Tako Co の資金の出どころ',
          table: {
            caption: '財政状態計算書の資本と負債（期末）',
            head: ['項目', '20X5 $', '20X4 $'],
            rows: [
              ['Share capital', '120,000', '100,000'],
              ['Retained earnings', '130,000', '100,000'],
              ['Total equity', '250,000', '200,000'],
              ['Bank loan (non-current)', '150,000', '50,000'],
              ['Current liabilities', '100,000', '50,000'],
              ['Total equity and liabilities', '500,000', '300,000']
            ]
          },
          after: '20X5 は新店のために $100,000 を新しく借り、株も $20,000 発行した。'
        },
        {
          title: 'ギアリング比率（gearing）',
          paras: ['借入（debt）は、利息の付く長期の借入。銀行借入、社債（loan notes）、償還する優先株（redeemable preference shares）が入る。'],
          formula: 'gearing ＝ debt ÷ (debt ＋ equity) × 100',
          list: ['20X5: 150,000 ÷ (150,000 ＋ 250,000) ＝ 37.5%', '20X4: 50,000 ÷ (50,000 ＋ 200,000) ＝ 20%'],
          after: 'もう1つの式 debt ÷ equity × 100 も使われる。20X5 は 60%、20X4 は 25%。問題で指定された式を使う。'
        },
        {
          title: 'インタレスト・カバー（interest cover）',
          formula: 'interest cover ＝ operating profit (PBIT) ÷ finance costs',
          list: ['20X5: 60,000 ÷ 12,000 ＝ 5回', '20X4: 60,000 ÷ 5,000 ＝ 12回'],
          after: '利息を払う前の利益で、利息を何回払えるか。5回なら、利益が今の5分の1まで減っても、まだ利息は払える。'
        },
        {
          title: '例題: ギアリングとカバー',
          example: {
            problem: 'Mochi Co: share capital $200,000、retained earnings $100,000、6% loan notes $120,000、6% redeemable preference shares $30,000。営業利益（PBIT）$54,000、finance costs $9,000。ギアリング（debt ÷ (debt ＋ equity)）とインタレスト・カバーは？',
            steps: ['equity ＝ 200,000 ＋ 100,000 ＝ $300,000', 'debt ＝ 120,000 ＋ 30,000 ＝ $150,000（償還する優先株は負債なので debt に入る）', 'ギアリング ＝ 150,000 ÷ (150,000 ＋ 300,000) ＝ 33.3%', 'finance costs ＝ 120,000 × 6% ＋ 30,000 × 6% ＝ 7,200 ＋ 1,800 ＝ $9,000', 'インタレスト・カバー ＝ 54,000 ÷ 9,000 ＝ 6回'],
            answer: 'ギアリング 33.3%（debt ÷ equity なら 50%）、インタレスト・カバー 6回'
          }
        },
        {
          title: 'なぜ？ 借入が多いと危ない',
          paras: ['利息は、もうかっても赤字でも払う義務がある。借入が多い会社（高ギアリング、highly geared）は、利益が少し減るだけで株主の取り分が大きく減る。追加でお金を借りるのも難しくなる。', '一方、借入は悪いだけではない。借りたお金で、利息より高い率で稼げれば（ROCE ＞ 利率）、その差は株主のもうけになる。']
        },
        {
          title: 'Tako Co をどう読む？',
          list: ['ギアリング 20% → 37.5%: 新店のための借入で、借入への依存が高まった', 'インタレスト・カバー 12回 → 5回: 利息が $5,000 → $12,000 に増えたが、営業利益は同じ $60,000。まだ5回分の余裕はある', '利息 ÷ 期末の借入は、20X5 が 12,000 ÷ 150,000 ＝ 8%、20X4 が 5,000 ÷ 50,000 ＝ 10%（期中に借りた分があるので概算）。会社全体の ROCE 15% はこれより高い', 'ただし営業利益は $60,000 のままで、新しい投資はまだ利益を増やしていない。利息が増えた分、当期利益は $44,000 → $38,000 に減った']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '買掛金や未払税金を debt に入れる。gearing の debt は利息の付く長期の借入だけ。償還しない優先株は equity、償還する優先株は debt。インタレスト・カバーの分子に、利息を引いた後の税引前利益を使うのも間違い。' },
          paras: ['equity には株式資本だけでなく、株式払込剰余金・再評価剰余金・利益剰余金も全部入れる。', '当座借越は流動負債なので、ふつうは debt に入れない（Tako Co も入れていない）。問題が「含める」と指示したときだけ入れる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ギアリング ＝ debt ÷（debt ＋ equity）。debt は利息の付く長期の借入（償還する優先株を含む）', 'インタレスト・カバー ＝ PBIT ÷ finance costs（回）', '借入が多いほど利息の負担と危険が増える。ただし ROCE が利率より高ければ株主のもうけは増える']
        },
        {
          title: '英単語',
          words: [
            ['gearing', 'ギアリング', '借入への依存度'],
            ['highly geared / low geared', 'ハイリー ギアード / ロウ ギアード', '借入が多い / 少ない'],
            ['debt', 'デット', '利息の付く長期の借入'],
            ['interest cover', 'インタレスト カバー', '利息を何回払えるか'],
            ['finance costs', 'ファイナンス コスツ', '財務費用（支払利息など）'],
            ['solvency', 'ソルベンシー', '長期の支払い能力']
          ]
        }
      ],
      quiz: [
        { q: 'A company has equity of $360,000 and 8% loan notes of $240,000. What is its gearing, calculated as debt / (debt + equity) (%)?', type: 'number', answer: 40, unit: '%', explain: '240,000 ÷ (240,000 ＋ 360,000) ＝ 240,000 ÷ 600,000 ＝ 40%。debt ÷ equity で計算すると 66.7% になる。問題の式をよく読む。' },
        { q: 'A company has profit before interest and tax of $90,000, finance costs of $15,000 and a tax charge of $20,000. What is its interest cover?', choices: ['6 times', '5 times', '4.67 times', '0.17 times'], answer: 0, explain: '90,000 ÷ 15,000 ＝ 6回。5回は利息を引いた後の利益（75,000）を使った間違い、4.67回は税金を引いた間違い、0.17 は逆に割った間違い。' },
        { q: 'ギアリング比率の debt（借入）に入るものはどれ？', choices: ['償還する優先株（redeemable preference shares）', '買掛金（trade payables）', '償還しない優先株（irredeemable preference shares）', '再評価剰余金（revaluation surplus）'], answer: 0, explain: '償還する優先株は返す義務があり負債なので debt。買掛金は利息の付かない流動負債で入れない。償還しない優先株と再評価剰余金は equity。' },
        { q: '期末に土地を再評価して、再評価剰余金が増えた。借入は変わらない。ギアリングはどうなる？', choices: ['上がる', '下がる', '変わらない'], answer: 1, explain: '再評価剰余金は equity に入る。分母の equity が増え、debt は同じなので、ギアリングは下がる。' },
        { q: 'Which of the following is the MOST likely consequence of a high level of gearing?', choices: ['Profit available to shareholders becomes more volatile because interest must be paid whatever the level of profit', 'The gross profit margin will fall', 'The current ratio will increase', 'The company will not be able to pay any dividends'], answer: 0, explain: '利息は利益に関係なく払うので、利益が少し動くだけで株主の取り分が大きく動く。売上総利益率や流動比率とは直接の関係はない。配当が必ず払えなくなるわけでもない。' }
      ]
    },
    {
      id: 'L165',
      no: 165,
      title: '比率どうしの関係',
      goal: 'ROCE を利益率と資産回転率に分けたり、流動性と効率性・ギアリングと利息のつながりを使って、比率の動きを説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['I2(b)'],
      slides: [
        {
          title: '売上は「客数 × 客単価」',
          paras: ['お店の売上が下がったとき、「客が減った」のか「1人あたりの金額が減った」のかで、打つ手が違う。売上を2つに分けると原因が見える。', '比率も同じ。ある比率を、別の比率のかけ算に分けたり、比率どうしのつながりを見たりすると、変化の原因が分かる。1つの比率だけで判断しない。']
        },
        {
          title: 'ROCE は2つに分けられる',
          formula: 'ROCE ＝ operating profit margin × asset turnover',
          paras: ['PBIT ÷ capital employed ＝（PBIT ÷ revenue）×（revenue ÷ capital employed）。右側の revenue どうしが消えるので、等しくなる。'],
          svg: `<svg viewBox="0 0 440 226" role="img" aria-label="ROCE 15%は営業利益率12%と資産回転率1.25回のかけ算" font-size="14"><rect x="120" y="10" width="200" height="50" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="42" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">ROCE 15%</text><path d="M180 60L110 100M260 60L330 100" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="100" width="180" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="110" y="126" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">営業利益率</text><text x="110" y="147" text-anchor="middle" font-size="12.5" fill="var(--quiet)">operating margin</text><text x="110" y="172" text-anchor="middle" font-size="18" fill="var(--ink)">12%</text><text x="220" y="152" text-anchor="middle" font-size="24" fill="var(--ink)">×</text><rect x="240" y="100" width="180" height="84" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="330" y="126" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">資産回転率</text><text x="330" y="147" text-anchor="middle" font-size="12.5" fill="var(--quiet)">asset turnover</text><text x="330" y="172" text-anchor="middle" font-size="18" fill="var(--ink)">1.25回</text><text x="220" y="212" text-anchor="middle" fill="var(--ink)">売上で稼ぐ力 × 資本で売る力</text></svg>`,
          caption: 'Tako Co 20X5: 12% × 1.25 ＝ 15%。20X4: 15% × 1.6 ＝ 24%。ROCE が下がった原因は、利益率と回転率の両方が下がったこと。'
        },
        {
          title: '同じ ROCE でも中身が違う',
          table: {
            caption: '営業利益率 × 資産回転率 ＝ ROCE',
            head: ['会社', '利益率 × 回転率', 'ROCE'],
            rows: [
              ['宝石店', '30% × 0.5回', '15%'],
              ['スーパー', '3% × 5回', '15%']
            ]
          },
          after: '宝石店は1つ売るともうけが大きいが、なかなか売れない。スーパーはもうけは薄いが、どんどん売れる。ROCE を上げるには「1つあたりのもうけを増やす」か「同じ資本でもっと売る」かのどちらか。'
        },
        {
          title: '売上総利益率と営業利益率',
          formula: '営業利益率 ＝ 売上総利益率 − 営業費用 ÷ 売上',
          list: ['20X4: 35% − 20%（80,000 ÷ 400,000）＝ 15%', '20X5: 30% − 18%（90,000 ÷ 500,000）＝ 12%'],
          after: 'Tako Co の営業費用は金額では増えたが、売上に対する割合は 20% → 18% に下がった。営業利益率が下がった原因は、費用ではなく売上総利益率の低下（値下げ・仕入値・卸売りの増加）と分かる。逆に、売上総利益率が同じで営業利益率だけ下がれば、原因は営業費用。'
        },
        {
          title: '流動性と効率性はつながっている',
          list: ['流動比率と当座比率の差は在庫。流動比率だけ上がって当座比率が同じなら、在庫が増えた', '在庫や売掛金の日数が伸びると、流動資産が増えて流動比率は上がって見える。でも現金は入ってこない', '運転資本のサイクルが長くなると、その間のお金を借りる必要が出て、当座借越が増える'],
          after: 'Tako Co はサイクルが 37.9日 → 68.8日に伸び、現金 $20,000 が当座借越 $30,000 になった。流動比率が高いことは、いつも良いとは限らない。'
        },
        {
          title: '借入・利息・利益のつながり',
          list: ['借入を増やす → ギアリングが上がる → 利息が増える → インタレスト・カバーが下がる', '営業利益（PBIT）は利息の前なので、借りるだけでは営業利益率や ROCE の分子は変わらない。分母の使用資本は増える', 'ROCE が借入の利率より高ければ、借りて投資した分だけ株主のもうけが増える。低ければ減る'],
          after: 'Tako Co: 全体の ROCE 15% は利率（約 8〜10%）より高い。ただ新しい投資はまだ営業利益を増やしておらず、利息が増えた分だけ当期利益は $44,000 → $38,000 に減った。新店が1年分稼ぐ来年が分かれ目。'
        },
        {
          title: '1つの出来事が何個もの比率を動かす',
          table: {
            caption: '例: 期末に建物を上方へ再評価した（借入は同じ）',
            head: ['比率', '向き', '理由'],
            rows: [
              ['ROCE', '下がる', '使用資本（equity）が増える'],
              ['資産回転率', '下がる', '同じ売上を、大きい資本で割る'],
              ['ギアリング', '下がる', 'equity が増え、debt は同じ'],
              ['（翌年以降）利益率', '下がる', '高い金額で減価償却が増える']
            ]
          },
          after: '会社が本当に変わったのではなく、会計の処理で比率が動くこともある。他社と比べるときは、会計方針の違いに注意する。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '1つの比率だけで結論を出す。たとえば「流動比率が上がったから安全になった」。在庫や売掛金がたまっただけかもしれない。関係する比率をセットで確かめる。' },
          paras: ['ROCE ＝ 利益率 × 回転率 は、同じ PBIT と同じ使用資本で計算したときだけ成り立つ。問題の定義がそろっているか確かめる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['ROCE ＝ 営業利益率 × 資産回転率', '営業利益率 ＝ 売上総利益率 − 営業費用の割合。流動比率と当座比率の差は在庫', '借入 ↑ → ギアリング ↑・インタレスト・カバー ↓。ROCE ＞ 利率なら株主に有利']
        },
        {
          title: '英単語',
          words: [
            ['interrelationship', 'インターリレーションシップ', '比率どうしのつながり'],
            ['secondary ratios', 'セカンダリー レイシオズ', 'ROCE を分けた2つ（利益率と回転率）'],
            ['overheads', 'オーバーヘッズ', '営業費用（家賃・給料など）'],
            ['accounting policies', 'アカウンティング ポリシーズ', '会計方針'],
            ['revaluation', 'リバリュエーション', '再評価']
          ]
        }
      ],
      quiz: [
        { q: 'A company has an operating profit margin of 8% and an asset turnover of 2.5 times. What is its return on capital employed (%)?', type: 'number', answer: 20, unit: '%', explain: 'ROCE ＝ 営業利益率 × 資産回転率 ＝ 8% × 2.5 ＝ 20%。足し算ではなくかけ算。' },
        { q: "A company's current ratio increased from 1.6:1 to 2.1:1, but its quick ratio stayed at 0.9:1. What is the MOST likely explanation?", choices: ['Inventory levels have increased', 'Trade receivables have increased', 'Cash balances have increased', 'Trade payables have decreased'], answer: 0, explain: '2つの比率の違いは在庫だけ。当座比率が同じで流動比率だけ上がったので、在庫が増えた。売掛金や現金が増える、買掛金が減る、だと当座比率も動く。' },
        { q: '売上総利益率は2年とも 25%。営業利益率は 12% から 9% に下がった。正しい説明は？', choices: ['販売価格を下げた', '売上に対する営業費用の割合が 13% から 16% に上がった', '仕入値が上がった', '利息が増えた'], answer: 1, explain: '営業利益率 ＝ 売上総利益率 − 営業費用の割合。25 − 13 ＝ 12、25 − 16 ＝ 9。売上総利益率が同じなので、値段や仕入値ではない。利息は営業利益の後。' },
        { q: 'At the year end a company revalues its land upwards. Its borrowings are unchanged. What is the effect on ROCE and gearing?', choices: ['ROCE decreases and gearing decreases', 'ROCE increases and gearing decreases', 'ROCE decreases and gearing increases', 'Neither ratio changes'], answer: 0, explain: '再評価剰余金で equity が増える。ROCE の分母（使用資本）が大きくなって下がり、ギアリングも equity が増えるので下がる。' },
        { q: 'ROCE が 18%、営業利益率が 6% の会社。資産回転率は何回？', type: 'number', answer: 3, unit: '回', explain: 'ROCE ＝ 利益率 × 回転率 なので、回転率 ＝ 18% ÷ 6% ＝ 3回。' },
        { q: 'ROCE 15% の会社が、利率 8% で借りたお金を今の事業に追加で投資した。同じ ROCE で稼げるとすると、株主の取り分はどうなる？', choices: ['増える。稼ぐ率（15%）が利息の率（8%）より高いから', '減る。借入が増えると必ず損をするから', '変わらない。借入は株主に関係ないから', 'ゼロになる'], answer: 0, explain: '借りたお金で 15% 稼ぎ、8% の利息を払えば、差の 7% 分が株主のもうけになる。ただしギアリングが上がり、利益が減ったときの危険も大きくなる。' }
      ]
    },
    {
      id: 'L166',
      no: 166,
      title: '結論を出して利用者に伝える',
      goal: '計算した比率から、理由と数字を添えた妥当な結論を作り、利用者に合わせて伝えられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['I3(b)'],
      slides: [
        {
          title: '健康診断の結果を伝える医者',
          paras: ['ダメな医者:「血圧 150 です」。数字を読んだだけ。', '良い医者:「血圧が去年の 130 から 150 に上がりました。塩分の多い食事が増えたからかもしれません。食事を見直して、3か月後にもう一度測りましょう」。', '良い説明には、数字・比較・理由・次にすること、がある。しかも、本人と保険会社では伝える内容が違う。財務諸表の分析も同じ。']
        },
        {
          title: '結論を作る4つの手順',
          numbered: ['利用者が気にする比率を選んで計算する', '比べて、変化を数字で書く（24% → 15% に下がった）', '理由を、財務諸表や会社の情報と結びつけて考える', 'その利用者にとっての結論と、追加で必要な情報を書く'],
          note: { kind: 'tip', text: '「上がった」「下がった」だけは説明（description）で、結論ではない。理由と「だからどうする」まで書く。' }
        },
        {
          title: 'Tako Co の比率のまとめ',
          table: {
            caption: '20X5年: 新店3つ、スーパーに卸売り開始（60日払い）、値下げ。日数は整数に四捨五入',
            head: ['比率', '20X5', '20X4'],
            rows: [
              ['売上総利益率', '30%', '35%'],
              ['営業利益率', '12%', '15%'],
              ['ROCE', '15%', '24%'],
              ['資産回転率', '1.25回', '1.6回'],
              ['流動比率', '1.5', '2.0'],
              ['当座比率', '0.8', '1.2'],
              ['在庫の日数', '73日', '56日'],
              ['売掛金の日数', '58日', '37日'],
              ['買掛金の日数', '63日', '55日'],
              ['ギアリング', '37.5%', '20%'],
              ['インタレスト・カバー', '5回', '12回']
            ]
          }
        },
        {
          title: '例題: 銀行への結論',
          example: {
            problem: 'あなたは銀行の融資担当。Tako Co から「当座借越の枠を増やしてほしい」と頼まれた。上の比率から結論を作る。',
            steps: ['銀行が見るのは、返せるか（流動性）と、借入の多さ・利息の余裕（財政状態）', '流動比率 2.0 → 1.5、当座比率 1.2 → 0.8。現金 $20,000 が当座借越 $30,000 になった', '理由: 売掛金の日数 37 → 58日（スーパーへの 60日払い）、在庫の日数 56 → 73日。新店の投資で借入 $50,000 → $150,000', 'インタレスト・カバーは 12回 → 5回だが、まだ利息の5倍の利益がある', '追加で見たい情報: 今後の資金繰りの見込み（cash flow forecast）、スーパーからの回収状況'],
            answer: '短期の支払い能力は悪化しているが、利息を払う力はまだある。資金繰りの見込みと売掛金の回収計画を出してもらい、それを条件に検討する'
          }
        },
        {
          title: '株主に伝えるなら',
          paras: ['株主が気にするのは収益性とリターン。'],
          list: ['ROCE 24% → 15%、営業利益率 15% → 12%。稼ぐ効率は下がった', '理由: 値下げと卸売りで売上総利益率が 35% → 30%。新店に投資したが、資産回転率 1.6 → 1.25回で、まだ売上が追いついていない', '売上は $400,000 → $500,000 と 25% 増えた。新店が1年まるごと営業する来年に回転率が戻るかを見る必要がある'],
          after: '結論: 今は拡大のための投資の時期で、利益率が落ちている。新しい投資はまだ営業利益を増やしておらず、当期利益は $44,000 → $38,000 に減った。ROCE 15% は借入の利率（約 8〜10%）より高いので、新店が1年分稼げば回復が見込める。新店ごとの売上と利益の情報が追加で欲しい。'
        },
        {
          title: '仕入先に伝えるなら',
          paras: ['仕入先が気にするのは「代金をきちんと払ってくれるか」。'],
          list: ['買掛金の日数 55日 → 63日。支払いが前より遅くなっている', '当座比率 0.8、当座借越あり。手元の現金は少ない', '一方、利益は出ており、売上も伸びている'],
          after: '結論: すぐに取引をやめる理由はないが、掛けで売る上限（与信限度）を見直し、支払いの遅れが続かないか見守る。'
        },
        {
          title: '妥当な結論と、言いすぎの結論',
          table: {
            caption: '同じ数字からの2つの書き方',
            head: ['言いすぎ（ダメ）', '妥当（良い）'],
            rows: [
              ['ROCE が下がったので、経営がへた', 'ROCE は 24% → 15%。新店の投資で使用資本が増えたが、まだ1年分の利益を生んでいないため'],
              ['売掛金の日数が伸びたので、来年は倒産する', '売掛金の日数は 37 → 58日。新しい 60日払いの取引と合っているが、貸倒れの危険は見守る必要がある'],
              ['流動比率が 1.5 あるので安全', '流動比率は 1.5 だが当座比率は 0.8。在庫と売掛金が増え、現金は当座借越になった']
            ]
          }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '比率を全部並べて、数字を読み上げるだけで終わる。利用者に関係の深い比率にしぼり、変化・理由・結論をセットで書く。' },
          list: ['比率1つだけで決めつける', '利用者が誰かを無視する（銀行に ROCE の話ばかりする）', '業界平均・予算・会社の事情（新店、値下げ）など、比率以外の情報を使わない', '限界を忘れる: 過去の数字、期末1日の数字、会計方針の違い']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['結論 ＝ 変化を数字で ＋ 理由 ＋ 利用者にとっての意味', '銀行は流動性と財政状態、株主は収益性、仕入先は流動性と支払日数を見る', '言いすぎない。足りない情報（資金繰りの見込み、業界平均）は「追加で必要」と書く']
        },
        {
          title: '英単語',
          words: [
            ['conclusion', 'コンクルージョン', '結論'],
            ['deteriorate / improve', 'ディテリオレイト / インプルーブ', '悪化する / 改善する'],
            ['cash flow forecast', 'キャッシュフロー フォーキャスト', '資金繰りの見込み'],
            ['credit limit', 'クレジット リミット', '与信限度（掛けで売る上限）'],
            ['expansion', 'エクスパンション', '事業の拡大'],
            ['user of financial statements', 'ユーザー', '財務諸表の利用者']
          ]
        }
      ],
      quiz: [
        { q: 'During the year a company introduced 60-day credit terms for new customers. Its receivables collection period increased from 30 days to 50 days. Which of the following is the MOST valid conclusion?', choices: ['The increase is consistent with the new credit terms, but the risk of irrecoverable debts should be monitored', "The company's credit control department is incompetent", 'The company will be unable to pay its debts next year', 'Profitability has improved because more sales are on credit'], answer: 0, explain: '新しい 60日払いの条件と、日数が伸びたことは整合する。そのうえで貸倒れの危険は見守る、が妥当。担当者が無能、来年倒産、は根拠のない言いすぎ。掛け売上が増えても利益率は改善しない。' },
        { q: '営業利益（PBIT）$48,000、finance costs $16,000 の会社。銀行が見るインタレスト・カバーは何回？', type: 'number', answer: 3, unit: '回', explain: '48,000 ÷ 16,000 ＝ 3回。利益が今の3分の1まで減ると、利息を払えなくなる。前年と比べて下がっていれば、銀行は慎重になる。' },
        { q: '仕入先が、ある会社に掛けで売り続けるかを決めたい。最も関係の深い比率の組み合わせは？', choices: ['売上総利益率と ROCE', '当座比率と買掛金の日数', '資産回転率と在庫回転率', '営業利益率とギアリング'], answer: 1, explain: '仕入先が知りたいのは「代金を払ってくれるか、どのくらいで払うか」。すぐ払える力（当座比率）と、実際の支払いの速さ（買掛金の日数）を見る。' },
        { q: "A company's gross profit margin fell from 40% to 32% while its revenue increased by 50%. The directors reduced selling prices during the year. Which conclusion is MOST valid?", choices: ['The price reduction appears to have increased sales volume but reduced the margin earned on each sale', 'Cost of sales must have been understated', 'The company has become less liquid', 'Operating expenses must have risen sharply'], answer: 0, explain: '値下げで1つあたりのもうけ（売上総利益率）は下がったが、たくさん売れて売上が増えた、と結びつけるのが妥当。売上原価の誤り、流動性、営業費用は、この情報からは言えない。' },
        { q: 'ROCE が 24% から 15% に下がった。会社は期末の少し前に新しい店の設備を買っていた。正しい見方は？', choices: ['新しい設備は使用資本に入っているが、まだ1年分の利益を生んでいないので、ROCE が一時的に低く出ている可能性がある', '設備を買うと ROCE は必ず上がるので、計算が間違っている', '経営者がお金を無駄にした証拠である', '設備は ROCE に関係しない'], answer: 0, explain: '期末に近い投資は、分母（使用資本）には全額入るが、分子（利益）にはほとんど貢献していない。だから一時的に ROCE が下がる。翌年の数字も見て判断する。' }
      ]
    }
  ],
  cards: [
    { id: 'L160-1', lesson: 'L160', q: '利益の金額だけで会社どうしを比べられない理由は？', a: '金額は会社の大きさに引っぱられるから。割り算（比率）にして比べる' },
    { id: 'L160-2', lesson: 'L160', q: '比率の4つのグループは？', a: '収益性・流動性・効率性・財政状態（profitability, liquidity, efficiency, position）' },
    { id: 'L160-3', lesson: 'L160', q: '比率を比べる3つの相手は？', a: '前年など過去の自社（trend）、同業他社・業界平均、予算・目標' },
    { id: 'L160-4', lesson: 'L160', q: '銀行など貸し手が主に見る比率は？', a: '流動性と財政状態（ギアリング、インタレスト・カバー）' },
    { id: 'L160-5', lesson: 'L160', q: '比率分析の限界を2つ', a: '過去の数字であること、会社ごとに会計方針が違うこと（ほかに期末1日の数字、インフレ）' },
    { id: 'L161-1', lesson: 'L161', q: 'gross profit margin の式は？', a: '売上総利益 ÷ 売上 × 100' },
    { id: 'L161-2', lesson: 'L161', q: 'ROCE の式は？', a: 'PBIT（営業利益）÷ capital employed × 100' },
    { id: 'L161-3', lesson: 'L161', q: 'capital employed（使用資本）とは？', a: 'equity ＋ non-current liabilities（＝ 総資産 − 流動負債）' },
    { id: 'L161-4', lesson: 'L161', q: 'なぜ ROCE は利息を引く前の利益を使う？', a: '分母に貸し手のお金も入るので、利息を払う前の利益と対象をそろえるため' },
    { id: 'L161-5', lesson: 'L161', q: '売上総利益率が下がる主な理由は？', a: '値下げ、仕入値の上昇、もうけの薄い商品の増加（sales mix）、在庫の数え間違い' },
    { id: 'L161-6', lesson: 'L161', q: 'Revenue $300,000、GP $90,000。gross profit margin は？', a: '90,000 ÷ 300,000 ＝ 30%' },
    { id: 'L162-1', lesson: 'L162', q: 'current ratio の式は？', a: '流動資産 ÷ 流動負債' },
    { id: 'L162-2', lesson: 'L162', q: 'quick ratio の式と、外すものは？', a: '（流動資産 − 在庫）÷ 流動負債。在庫は現金になるのが一番遅いので外す' },
    { id: 'L162-3', lesson: 'L162', q: '流動比率 1.5 の会社が買掛金を現金で払うと、比率は？', a: '上がる（1より大きいとき、分子と分母を同額減らすと比率は上がる）' },
    { id: 'L162-4', lesson: 'L162', q: '流動比率が高すぎると何が問題？', a: '現金の寝かせすぎ・在庫の持ちすぎ・回収の遅れ。お金が働いていない' },
    { id: 'L162-5', lesson: 'L162', q: '当座借越（bank overdraft）はどこに入る？', a: '流動負債（流動比率・当座比率の分母）' },
    { id: 'L162-6', lesson: 'L162', q: '在庫を現金で買うと、流動比率と当座比率は？', a: '流動比率は変わらない。当座比率は下がる（在庫は当座比率で数えない）' },
    { id: 'L163-1', lesson: 'L163', q: '在庫の日数の式は？', a: '在庫 ÷ 売上原価 × 365' },
    { id: 'L163-2', lesson: 'L163', q: '売掛金の日数の式は？', a: '売掛金 ÷ 掛け売上 × 365（なければ売上）' },
    { id: 'L163-3', lesson: 'L163', q: '買掛金の日数の式は？', a: '買掛金 ÷ 掛け仕入 × 365（なければ売上原価）' },
    { id: 'L163-4', lesson: 'L163', q: '運転資本のサイクルの式は？', a: '在庫の日数 ＋ 売掛金の日数 − 買掛金の日数' },
    { id: 'L163-5', lesson: 'L163', q: '資産回転率の式は？', a: '売上 ÷ 使用資本（回）' },
    { id: 'L163-6', lesson: 'L163', q: '買掛金の日数が長くなるメリットとデメリットは？', a: '現金が手元に残る。ただし割引を逃す、仕入先との関係が悪くなる' },
    { id: 'L164-1', lesson: 'L164', q: 'gearing の式（2通り）は？', a: 'debt ÷（debt ＋ equity）× 100、または debt ÷ equity × 100' },
    { id: 'L164-2', lesson: 'L164', q: 'gearing の debt に入るものは？', a: '利息の付く長期の借入（銀行借入、社債、償還する優先株）' },
    { id: 'L164-3', lesson: 'L164', q: 'interest cover の式は？', a: 'PBIT ÷ finance costs（回）' },
    { id: 'L164-4', lesson: 'L164', q: 'ギアリングが高いと何が危ない？', a: '利息は利益に関係なく払うので、株主の取り分が大きく揺れ、追加の借入も難しくなる' },
    { id: 'L164-5', lesson: 'L164', q: 'equity $300,000、debt $100,000。gearing（debt ÷ (debt ＋ equity)）は？', a: '100,000 ÷ 400,000 ＝ 25%' },
    { id: 'L165-1', lesson: 'L165', q: 'ROCE を2つの比率に分けると？', a: '営業利益率 × 資産回転率' },
    { id: 'L165-2', lesson: 'L165', q: '流動比率は上がったが当座比率は同じ。何が増えた？', a: '在庫（2つの比率の違いは在庫だけ）' },
    { id: 'L165-3', lesson: 'L165', q: '売上総利益率は同じで営業利益率だけ下がった。原因は？', a: '売上に対する営業費用の割合が上がった' },
    { id: 'L165-4', lesson: 'L165', q: '上方への再評価で ROCE とギアリングは？', a: 'どちらも下がる（equity と使用資本が増えるため）' },
    { id: 'L165-5', lesson: 'L165', q: '借りて投資すると株主に有利になる条件は？', a: 'ROCE が借入の利率より高いこと' },
    { id: 'L166-1', lesson: 'L166', q: '妥当な結論に入れる3つは？', a: '変化を数字で、理由、その利用者にとっての意味' },
    { id: 'L166-2', lesson: 'L166', q: '仕入先が主に見る比率は？', a: '当座比率などの流動性と、買掛金の日数' },
    { id: 'L166-3', lesson: 'L166', q: '「上がった・下がった」だけの文は何が足りない？', a: '理由と「だからどうする」。数字の説明だけで結論になっていない' },
    { id: 'L166-4', lesson: 'L166', q: '期末直前の大きな投資で ROCE が下がる理由は？', a: '使用資本には全額入るが、まだ1年分の利益を生んでいないから' },
    { id: 'L166-5', lesson: 'L166', q: '分析で追加に求めたい情報の例は？', a: '資金繰りの見込み（cash flow forecast）、業界平均、予算' }
  ]
});
