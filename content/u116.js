(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 116,
  part: 5,
  partTitle: '個別・総合・サービスの原価計算',
  lessons: [
    {
      id: 'M062',
      no: 62,
      title: 'サービス原価計算: 特徴と使いどころ',
      goal: 'サービスの4つの特徴を説明し、サービス原価計算を使う場面を見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(c)(i)', 'K2:B5(c)(ii)'],
      slides: [
        {
          title: '美容院のカット1回の原価は？',
          paras: ['美容院でカット1回の原価を考える。シャンプーやワックスは少ししか使わない。原価の大半は、美容師の給料と店の家賃だ。', '予約が入らなかった1時間は、取っておいて明日売ることができない。それでも給料と家賃は払う。形のある製品とは、原価の考え方がかなり違う。']
        },
        {
          title: 'サービス原価計算（service costing）とは',
          paras: ['形のある製品ではなく、サービスの原価を計算する方法。シラバスでは service/operation costing と呼ぶ。使う場面は大きく2つある。'],
          list: ['外部に売るサービス業: ホテル、バス・鉄道・運送、病院、会計事務所、学校、レストランなど', '会社の中の補助部門（社内サービス）: IT部門、社員食堂、保全、人事など。使った部門に費用を請求（charge out）する'],
          after: '同じ種類の作業を、連続して・くり返し提供する活動（operation）に向いている。'
        },
        {
          title: 'サービスの4つの特徴',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="サービスの4つの特徴。同時性、異質性、無形性、消滅性。消滅性を強調" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">サービスの4つの特徴（SHIP）</text><rect x="20" y="48" width="196" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="118" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Simultaneity</text><text x="118" y="104" text-anchor="middle" fill="var(--ink)">提供と消費が同時</text><text x="118" y="128" text-anchor="middle" fill="var(--quiet)">作り置きできない</text><rect x="224" y="48" width="196" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Heterogeneity</text><text x="322" y="104" text-anchor="middle" fill="var(--ink)">毎回少しずつ違う</text><text x="322" y="128" text-anchor="middle" fill="var(--quiet)">品質をそろえにくい</text><rect x="20" y="158" width="196" height="100" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="118" y="188" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Intangibility</text><text x="118" y="214" text-anchor="middle" fill="var(--ink)">形がなく触れない</text><text x="118" y="238" text-anchor="middle" fill="var(--quiet)">品質を測りにくい</text><rect x="224" y="158" width="196" height="100" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="322" y="188" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Perishability</text><text x="322" y="214" text-anchor="middle" fill="var(--ink)">取っておけない</text><text x="322" y="238" text-anchor="middle" fill="var(--quiet)">空室は在庫にならない</text><text x="220" y="286" text-anchor="middle" font-size="15" fill="var(--ink)">だから「どれだけ使われたか」が大事</text></svg>`,
          caption: '頭文字をつなげて SHIP と覚える。'
        },
        {
          title: '4つの特徴を言葉で',
          list: ['同時性（simultaneity）: 提供した瞬間に客が使う。前もって作っておけない', '異質性（heterogeneity）: 担当者や日によって中身が少しずつ違う。標準の原価を決めにくい', '無形性（intangibility）: 形がない。何を1単位と数えるかを決めにくい', '消滅性（perishability）: 使われなかった能力（空席・空室・空き時間）は、後で売れずに消える'],
          note: { kind: 'tip', text: 'simultaneity は inseparability（不可分性）、heterogeneity は variability（ばらつき）と呼ばれることもある。意味は同じ。' }
        },
        {
          title: 'ホテルの原価で確かめる',
          paras: ['50室のホテルの1年分の原価。'],
          table: { caption: '1年間', head: ['項目', '$', '性質'], rows: [['スタッフの給料', '300,000', '固定'], ['建物の家賃', '180,000', '固定'], ['光熱費', '60,000', '一部変動'], ['清掃用品・アメニティ', '36,000', '変動']], total: ['合計', '576,000', ''] },
          after: '固定費（給料と家賃 $480,000）が8割を超える。客が少ない夜も、費用はほとんど減らない。直接材料はほぼなく、在庫もない。'
        },
        {
          title: 'サービス業の原価の特徴',
          list: ['固定費・間接費の割合が高い', '人件費（staff costs）が大きいことが多い', '在庫がほとんどないので、在庫の評価はいらない', '原価の単位（cost unit）が分かりにくい。そこで「乗客 × km」のように2つの量をかけた複合単位（composite cost unit）をよく使う（次のレッスン）']
        },
        {
          title: '何に使う？',
          list: ['料金を決める（pricing）: 1室1泊の原価に利益を乗せる', '計画と管理（planning and control）: 予算の単位原価と実際を比べる', '比較（performance comparison）: 前年・他の支店・同業他社と単位原価を比べる', '社内の請求: IT部門の「対応1件あたり」の原価で、各部門に費用を配る']
        },
        {
          title: 'なぜ？ 製品の原価計算をそのまま使えない',
          paras: ['工場では、作った製品が倉庫に残る。だから製品1個の原価を出して、在庫と売上原価に分ける必要があった。', 'サービスは作り置きできず、在庫が残らない。知りたいのは「1単位を提供するのに平均いくらかかったか」。その数字で料金を決め、無駄がないかを比べる。だから、総原価を「提供したサービスの量」で割る、という単純な形になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'サービス原価計算は「サービス業だけのもの」と思い込む。製造業の会社の中にある食堂・IT部門・保全部門のような社内サービスにも使う。また、4つの特徴の H は heterogeneity（ばらつきがある）。homogeneity（どれも同じ）と取り違えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['サービスの特徴は SHIP: 同時性・異質性・無形性・消滅性', '使う場面は、サービス業と、社内の補助部門（社内サービス）', 'サービスの原価は固定費・間接費・人件費が大きく、在庫がない。複合単位で原価を測る']
        },
        {
          title: '英単語',
          words: [
            ['service costing', 'サービス コスティング', 'サービス原価計算'],
            ['operation costing', 'オペレーション コスティング', '連続してくり返す作業（サービス）の原価計算'],
            ['simultaneity', 'サイマルテイニアティ', '同時性（提供と消費が同時）'],
            ['heterogeneity', 'ヘテロジェニーアティ', '異質性（毎回少しずつ違う）'],
            ['intangibility', 'インタンジビリティ', '無形性（形がない）'],
            ['perishability', 'ペリシャビリティ', '消滅性（取っておけない）'],
            ['composite cost unit', 'コンポジット コスト ユニット', '複合単位（2つの量をかけた原価の単位）'],
            ['internal service', '', '社内サービス（IT部門・食堂など）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a characteristic of services?', choices: ['Intangibility', 'Perishability', 'Homogeneity', 'Simultaneity'], answer: 2, explain: 'サービスの特徴は heterogeneity（毎回少しずつ違う）で、homogeneity（どれも同じ）ではない。形がない（intangibility）、取っておけない（perishability）、提供と消費が同時（simultaneity）は、どれもサービスの特徴。' },
        { q: 'Which of the following organisations would most appropriately use service costing?', choices: ['A builder making an extension to a house to the customer’s own design', 'An oil refinery', 'A furniture maker producing 500 identical chairs in one run', 'A hotel'], answer: 3, explain: 'ホテルは形のないサービスを提供するので、サービス原価計算。客の注文どおりの増築は1件ごとに中身が違うので個別原価計算（job costing）。石油の精製は連続した工程なので総合原価計算（process costing）。同じ椅子500脚をまとめて作るのはバッチ原価計算（batch costing）。' },
        { q: 'A hotel cannot sell tonight’s empty rooms tomorrow. Which characteristic of services does this describe?', choices: ['Intangibility', 'Perishability', 'Heterogeneity', 'Simultaneity'], answer: 1, explain: '使われなかった能力が後で売れずに消えるのは消滅性（perishability）。無形性は「形がない」、異質性は「毎回違う」、同時性は「提供と消費が同時」で、どれも空室が持ち越せないこと自体を表す言葉ではない。' },
        { q: '製造業の会社で、IT部門が社内の各部門に「問い合わせ対応1件あたり $25」で費用を請求している。これは何の例？', choices: ['個別原価計算（job costing）の例', '総合原価計算（process costing）の例', '社内サービスにサービス原価計算を使う例', '直接原価計算（marginal costing）の例'], answer: 2, explain: 'IT部門は社内にサービスを提供する補助部門。その原価を「対応1件」という単位で測り、使った部門に配るのはサービス原価計算の使い方。製造業の会社でも、社内サービスには使える。直接原価計算は固定費を製品原価に入れるかどうかの話で、ここでは関係ない。' },
        { q: 'サービス業の原価の特徴として、最も正しいものは？', choices: ['直接材料費が原価の大半をしめる', '固定費・間接費と人件費の割合が高く、在庫はほとんどない','期末の在庫をどう評価するかが一番大切', '原価の単位は必ず「1個」になる'], answer: 1, explain: 'サービスは人と設備で提供するので、給料・家賃などの固定費が大きく、作り置きできないので在庫もほとんどない。直接材料費が大半なのは製造業。原価の単位は「1室1泊」「乗客km」など業種ごとに選ぶ。' }
      ]
    },
    {
      id: 'M063',
      no: 63,
      title: 'サービスの単位原価（1泊あたり・乗客1kmあたりなど）',
      goal: '業種に合った原価の単位を選び、1単位あたりの原価を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(c)(iii)'],
      slides: [
        {
          title: '電車の運賃はどう決まる？',
          paras: ['電車は、遠くまで乗るほど運賃が高い。乗る人が多いほど、会社の仕事も多い。だから鉄道会社の仕事量は「何人を何km運んだか」で測るのがいちばん正確だ。', '引越し業者なら「何トンの荷物を何km運んだか」。ホテルなら「何室が何泊使われたか」。サービスでは、こうした原価の単位（cost unit）をまず選ぶ。']
        },
        {
          title: '単位あたり原価の式',
          formula: '単位あたり原価 ＝ その期間の総原価 ÷ その期間に提供したサービス単位の数',
          paras: ['式は単純。難しいのは「何で割るか」を選ぶことと、割る数（単位の数）を正しく数えること。'],
          after: '単位は、原価を動かす主な要因を表し、前年や他の店と比べられるものを選ぶ。'
        },
        {
          title: '業種ごとの原価の単位',
          table: { caption: 'よく出る組み合わせ', head: ['業種・部門', '原価の単位', '英語'], rows: [['ホテル', '使われた1室1泊', 'occupied room-night'], ['病院', '患者1人1日', 'patient-day'], ['バス・鉄道・航空', '乗客1人1km', 'passenger-km'], ['運送・トラック', '1トン1km', 'tonne-km'], ['会計事務所・法律事務所', '請求できる1時間', 'chargeable hour'], ['社員食堂・レストラン', '提供した1食', 'meal served'], ['学校', '学生1人', 'student'], ['発電所', '1キロワット時', 'kilowatt-hour']] }
        },
        {
          title: '複合単位（composite cost unit）',
          svg: `<svg viewBox="0 0 440 190" role="img" aria-label="乗客30人かける25キロメートルは750乗客キロメートル" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">複合単位: 2つの量をかける</text><rect x="20" y="52" width="110" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="84" text-anchor="middle" font-size="16" fill="var(--ink)">乗客 30人</text><text x="75" y="106" text-anchor="middle" font-size="12.5" fill="var(--quiet)">passengers</text><text x="145" y="94" text-anchor="middle" font-size="20" fill="var(--ink)">×</text><rect x="160" y="52" width="110" height="70" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="215" y="84" text-anchor="middle" font-size="16" fill="var(--ink)">25 km</text><text x="215" y="106" text-anchor="middle" font-size="12.5" fill="var(--quiet)">distance</text><text x="285" y="94" text-anchor="middle" font-size="20" fill="var(--ink)">＝</text><rect x="300" y="52" width="120" height="70" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="360" y="84" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink)">750</text><text x="360" y="106" text-anchor="middle" font-size="12.5" fill="var(--ink)">passenger-km</text><text x="220" y="160" text-anchor="middle" font-size="15" fill="var(--ink)">1人を1km運ぶ仕事を「1」と数える</text></svg>`,
          caption: '2つの量をかけた単位を複合単位という。room-night（室 × 泊）、patient-day（人 × 日）、tonne-km（トン × km）も同じ。'
        },
        {
          title: '例題1: ホテルの1室1泊あたり原価',
          example: {
            problem: 'ホテルは40室で、年に360日営業する。平均の客室稼働率（occupancy）は75%。1年の総原価は $648,000。使われた1室1泊（occupied room-night）あたりの原価は？',
            steps: ['使える室数 × 日数: 40室 × 360日 ＝ 14,400 room-nights（これは「使えた」数）', '実際に使われた数: 14,400 × 75% ＝ 10,800 room-nights', '1室1泊あたり原価: $648,000 ÷ 10,800 ＝ $60', '確かめ: $60 × 10,800 ＝ $648,000'],
            answer: '$60。使われた部屋の数で割る'
          }
        },
        {
          title: '例題2: バスの乗客1kmあたり原価',
          example: {
            problem: 'バス会社の路線は片道25km。1日に6便走り、1便の平均乗客は30人。年300日運行し、1年の総原価は $405,000。乗客1kmあたり（passenger-km）の原価は？',
            steps: ['1便の passenger-km: 30人 × 25km ＝ 750', '1日分: 750 × 6便 ＝ 4,500', '1年分: 4,500 × 300日 ＝ 1,350,000 passenger-km', '1 passenger-km あたり原価: $405,000 ÷ 1,350,000 ＝ $0.30'],
            answer: '$0.30。50km乗る客1人の原価は $0.30 × 50 ＝ $15'
          }
        },
        {
          title: '例題3: トラックの tonne-km',
          example: {
            problem: 'トラック1台が今週3回運んだ。① 10トンを積んで60km先で4トンを下ろし、残り6トンをさらに100km運んだ。② 4トンを250km運んだ。③ 7トンを200km運び、帰りの200kmは空で戻った。今週の原価は $4,320（空で走った分も含む）。1 tonne-km あたりの原価は？',
            steps: ['区間ごとに「その区間で積んでいたトン × km」を出す: ① 10 × 60 ＋ 6 × 100 ＝ 600 ＋ 600 ＝ 1,200', '② 4 × 250 ＝ 1,000', '③ 7 × 200 ＝ 1,400。空で戻った 200km は 0トンなので 0', '合計: 1,200 ＋ 1,000 ＋ 1,400 ＝ 3,600 tonne-km', '1 tonne-km あたり原価: $4,320 ÷ 3,600 ＝ $1.20。空で走った費用も、運んだ tonne-km が負担する'],
            answer: '$1.20。区間ごとに、積んでいた量でかけてから足す'
          }
        },
        {
          title: 'なぜ？ 2つの量をかける',
          paras: ['「乗客1人あたり」だけだと、3km乗る人と300km乗る人が同じ1になる。燃料も運転手の時間も全然違うのに、原価が同じに見えてしまう。', '「1kmあたり」だけだと、空のバスも満員のバスも同じ1になる。2つをかけると「どれだけの仕事をしたか」を1つの数で表せる。だから料金を決めるときも、路線どうしを比べるときも公平になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '例題3の①を、最初の 10トン × 全部の 160km ＝ 1,600 とする（下ろした4トンは後の 100km を運ばれていない）。トンの合計と km の合計をまとめてかけるのも間違い。正しくは区間ごとにかけてから足す（3,600）。また例題1で、使えた部屋の数 14,400 で割って $45 とするのも間違い。空室は仕事をしていないので、使われた 10,800 で割る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['単位あたり原価 ＝ 総原価 ÷ 提供したサービス単位の数', '業種に合う単位を選ぶ: ホテル＝室泊、病院＝患者日、輸送＝乗客km・トンkm、事務所＝請求時間', '複合単位は区間ごとにかけてから足す（空の走行は0）。使われた分（稼働率をかけた数）で割る']
        },
        {
          title: '英単語',
          words: [
            ['cost per unit', '', '単位あたり原価'],
            ['room-night', 'ルーム ナイト', '1室1泊'],
            ['occupancy', 'オキュパンシー', '稼働率（客室・病床などが使われた割合）'],
            ['patient-day', 'ペイシェント デイ', '患者1人1日（bed-day とも）'],
            ['passenger-km', 'パッセンジャー キロメートル', '乗客1人を1km運ぶこと'],
            ['tonne-km', 'トン キロメートル', '1トンを1km運ぶこと'],
            ['chargeable hour', 'チャージャブル アワー', '客に請求できる作業時間'],
            ['meal served', '', '提供した食事1食'],
            ['unload / return empty', '', '荷を下ろす／空で戻る（空の区間は tonne-km が0）']
          ]
        }
      ],
      quiz: [
        { q: 'A hotel has 50 rooms and is open for 360 days a year. Average room occupancy is 80%. Total annual costs are $792,000. What is the cost per occupied room-night?', type: 'number', answer: 55, unit: '$', explain: '使われた室泊数: 50 × 360 × 80% ＝ 14,400。$792,000 ÷ 14,400 ＝ $55。使えた部屋の数 18,000（50 × 360）で割ると $44 になり、空室まで仕事をしたことになってしまう。' },
        { q: 'Which cost unit is most appropriate for a road haulage company?', choices: ['Patient-day', 'Chargeable hour', 'Tonne-kilometre', 'Meal served'], answer: 2, explain: '荷物を運ぶ仕事量は「重さ × 距離」で決まるので tonne-km。patient-day は病院、chargeable hour は会計事務所など、meal served は食堂の単位。' },
        { q: 'A lorry made three journeys this month. (1) It carried 6 tonnes for 100 km, unloaded 2 tonnes and carried the remaining 4 tonnes a further 50 km. (2) It carried 9 tonnes for 50 km and then returned empty for 50 km. (3) It carried 3 tonnes for 150 km. How many tonne-km did the lorry deliver this month?', type: 'number', answer: 1700, unit: '', explain: '区間ごとにかける: (1) 6 × 100 ＋ 4 × 50 ＝ 800、(2) 9 × 50 ＝ 450（空の帰りは0）、(3) 3 × 150 ＝ 450。合計 1,700 tonne-km。(1) を 6トン × 150km ＝ 900 とすると、下ろした2トンまで最後まで運んだことになり 1,800 になる。' },
        { q: 'A hospital ward has 30 beds. In a 30-day month the average bed occupancy was 90% and the ward’s total costs were $162,000. What was the cost per patient-day?', type: 'number', answer: 200, unit: '$', explain: '患者日数: 30床 × 30日 × 90% ＝ 810 patient-days。$162,000 ÷ 810 ＝ $200。稼働率をかけ忘れて 900 で割ると $180 になる。' },
        { q: '会計事務所が、スタッフの仕事の原価を測るのに最も適した単位は？', choices: ['スタッフ1人', '処理した書類1枚', '事務所の床面積1㎡', '客に請求できる1時間（chargeable hour）'], answer: 3, explain: '会計事務所の原価の大半はスタッフの給料で、仕事量は客のために働いた時間で決まる。だから chargeable hour。スタッフ1人だと働いた量の差が見えない。書類の枚数は仕事の重さを表さない。床面積は家賃の按分には使うが、提供したサービスの量ではない。' },
        { q: 'A coach company has a cost of $0.30 per passenger-km and adds a mark-up of 20% on cost to set fares. What fare should it charge one passenger for a 50 km journey?', type: 'number', answer: 18, unit: '$', explain: '1人50kmの原価: $0.30 × 50 ＝ $15。原価に20%を上乗せ: $15 × 1.2 ＝ $18。マークアップは原価に対する割合なので、$15 × 20% ＝ $3 を足す。' }
      ]
    },
    {
      id: 'M064',
      no: 64,
      title: '総合演習: 原価計算の方法を選んで計算する',
      goal: '場面に合った原価計算の方法を選び、ジョブ・総合・連産品・追加加工・サービスの計算を一通りできるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K2:B5(a)(iii)', 'K2:B5(b)(iii)', 'K2:B5(b)(vi)', 'K2:B5(b)(vii)', 'K2:B5(c)(iii)'],
      slides: [
        {
          title: '料理の頼み方で考える',
          paras: ['結婚式の特注ケーキは、1つずつ中身が違う。パン屋の食パンは、同じものを1回に100斤ずつ焼く。ジュース工場では、同じジュースが機械の中を止まらずに流れる。レストランの食事は、形が残らないサービスだ。', '頼み方が違えば、原価の集め方と「何で割るか」も違う。ここで第5部の方法を全部まとめて使う。']
        },
        {
          title: '方法の選び方',
          table: { caption: '場面と方法', head: ['場面', '方法', '割る単位'], rows: [['注文ごとに中身が違う（修理、建築、特注家具）', '個別原価計算（job）', '1件のジョブ'], ['同じ物をまとめて何個も作る（パン、靴、部品）', 'バッチ原価計算（batch）', '1バッチ → ÷ 個数'], ['同じ物が工程を連続して流れる（石油、飲料、化学品）', '総合原価計算（process）', '1kg・1リットル'], ['形のないサービス（ホテル、輸送、病院、社内IT）', 'サービス原価計算', '室泊・乗客kmなど']] },
          after: 'なぜ方法が分かれるのか: どの方法も「原価を集めて、単位で割る」点は同じ。違うのは、1単位が見分けられるか（ジョブ）、同じ物の集まりか（バッチ・総合）、形がないか（サービス）だけ。'
        },
        {
          title: '例題1: ジョブの原価と売価',
          example: {
            problem: 'ジョブ42: 直接材料費 $1,200、直接労務 40時間 × $15、製造間接費は直接労務1時間 $20 で配賦。販売費・一般管理費は製造原価の10%を加える。売価の20%が利益になるように（profit margin 20%）売価を決める。売価と利益は？ (2) 別の注文で部品 500個を1バッチで作り、バッチの総原価が $1,250 だった。部品1個の原価は？',
            steps: ['直接労務費: 40 × $15 ＝ $600', '製造間接費: 40時間 × $20 ＝ $800', '製造原価: $1,200 ＋ $600 ＋ $800 ＝ $2,600', '販売費・一般管理費: $2,600 × 10% ＝ $260 → 総原価 $2,860', '利益が売価の20%なので、原価は売価の80%: $2,860 ÷ 0.8 ＝ $3,575', '利益: $3,575 − $2,860 ＝ $715（$3,575 × 20% と一致）', '(2) バッチは、バッチ全体を1つのジョブとして原価を集め、個数で割る: $1,250 ÷ 500個 ＝ $2.50'],
            answer: '(1) 売価 $3,575、利益 $715　(2) 部品1個 $2.50'
          }
        },
        {
          title: '例題2: 正常減損と異常減損',
          example: {
            problem: '工程に 2,000kg を投入し、原価は $18,400。正常減損（normal loss）は投入量の10%で、減損は1kg $2 で売れる（処分価値、scrap value）。実際の完成品は 1,700kg。1kgあたり原価、完成品と異常減損の金額は？',
            steps: ['正常減損: 2,000 × 10% ＝ 200kg、処分価値 200 × $2 ＝ $400', '予定産出量（expected output）: 2,000 − 200 ＝ 1,800kg', '1kgあたり原価: ($18,400 − $400) ÷ 1,800 ＝ $10', '異常減損（abnormal loss）: 1,800 − 1,700 ＝ 100kg → 100 × $10 ＝ $1,000', '完成品: 1,700 × $10 ＝ $17,000'],
            answer: '1kg $10、完成品 $17,000、異常減損 $1,000'
          }
        },
        {
          title: '工程勘定（process account）で確かめる',
          tAccount: { name: 'Process account', debit: [['Input 2,000kg', '18,400']], credit: [['Normal loss 200kg', '400'], ['Abnormal loss 100kg', '1,000'], ['Output 1,700kg', '17,000']] },
          paras: ['貸方の合計 $18,400 が借方と一致する。正常減損は、処分価値だけで記入する。異常減損は、完成品と同じ1kg $10 で評価する。'],
          after: '異常減損 100kg も処分価値 100 × $2 ＝ $200 で売れる。これは異常減損勘定で差し引くので、損益計算書の費用は $1,000 − $200 ＝ $800。実際の産出が 1,800kg を超えたら、超えた分は異常増加（abnormal gain）として同じ $10 で評価する。'
        },
        {
          title: '例題3: 連産品と副産物',
          example: {
            problem: '結合工程の原価は $44,000。分離点で P 4,000kg、Q 2,000kg、副産物 R ができる。P は追加加工費 $8,000 をかけて1kg $12 で売る。Q は分離点で1kg $15 で売る。R の正味実現可能価額（NRV）は $2,000 で、結合原価から引く。P と Q への配分を、NRV 法と物量法（weight）で。',
            steps: ['副産物を引く: $44,000 − $2,000 ＝ $42,000 を配分する', 'P の NRV: 4,000 × $12 − $8,000 ＝ $40,000', 'Q の NRV: 2,000 × $15 ＝ $30,000（合計 $70,000）', 'NRV 法: P ＝ $42,000 × 40/70 ＝ $24,000、Q ＝ $42,000 × 30/70 ＝ $18,000', '物量法: $42,000 ÷ 6,000kg ＝ 1kg $7 → P $28,000、Q $14,000（副産物 R の重さは入れない）'],
            answer: 'NRV 法 P $24,000・Q $18,000、物量法 P $28,000・Q $14,000'
          }
        },
        {
          title: '例題4: Q をさらに加工する？',
          example: {
            problem: '例題3の Q 2,000kg は、分離点で1kg $15 で売れる。さらに1kgあたり $6 かけて加工すると、1kg $19 で売れる。加工するべきか？',
            steps: ['増える収益: ($19 − $15) × 2,000 ＝ $8,000', '増える費用: $6 × 2,000 ＝ $12,000', '差: $8,000 − $12,000 ＝ −$4,000', 'Q に配分した結合原価 $18,000 は、加工してもしなくても同じだけかかっている。だから判断に入れない'],
            answer: '加工しない。加工すると利益が $4,000 減る'
          }
        },
        {
          title: '例題5: サービスの単位原価',
          example: {
            problem: '会計事務所のスタッフは6人。1人あたり年 1,500時間を客に請求できる。1年の総原価は $360,000。請求できる1時間（chargeable hour）あたりの原価は？ 原価の50%を上乗せすると、1時間の請求額は？',
            steps: ['請求できる時間: 6人 × 1,500時間 ＝ 9,000時間', '1時間あたり原価: $360,000 ÷ 9,000 ＝ $40', '50%のマークアップ: $40 × 1.5 ＝ $60'],
            answer: '原価 1時間 $40、請求額 1時間 $60'
          }
        },
        {
          title: 'よくある間違い',
          list: ['ジョブ: 売価の20%（margin）を、原価の20%（mark-up）で計算する（$2,860 × 1.2 ＝ $3,432 は間違い）', '総合: 異常減損を、処分価値で評価する', '連産品: 追加加工費を引かずに、最終の売価で比率を出す', '追加加工: 配分した結合原価を判断に入れる', 'サービス: 空室や空席まで含めた数で割る'],
          note: { kind: 'warn', text: 'どの計算も、最後に「合計が元の原価に戻るか」を確かめると間違いに気づける。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['方法は場面で選ぶ: 1件ずつ違う＝ジョブ、まとめて＝バッチ、流れ作業＝総合、形がない＝サービス', '総合原価計算の1kg原価 ＝（投入原価 − 正常減損の処分価値）÷ 予定産出量。異常減損・異常増加も同じ単価で評価', '連産品の NRV ＝ 最終売価 − 分離点後の費用。追加加工は「増える収益 − 増える費用」だけで判断する']
        },
        {
          title: '英単語',
          words: [
            ['job costing', 'ジョブ コスティング', '個別原価計算'],
            ['batch costing', 'バッチ コスティング', 'バッチ原価計算'],
            ['process costing', 'プロセス コスティング', '総合原価計算'],
            ['normal loss', 'ノーマル ロス', '正常減損（予想どおりの減り）'],
            ['abnormal loss / gain', 'アブノーマル ロス／ゲイン', '異常減損／異常増加'],
            ['expected output', 'エクスペクテッド アウトプット', '予定産出量（投入 − 正常減損）'],
            ['scrap value', 'スクラップ ヴァリュー', '処分価値（減損を売って入る額）'],
            ['joint products / by-product', 'ジョイント プロダクツ／バイプロダクト', '連産品／副産物'],
            ['split-off point', 'スプリット オフ ポイント', '分離点'],
            ['net realisable value (NRV)', 'ネット リアライザブル バリュー', '正味実現可能価額'],
            ['profit margin / mark-up', 'マージン／マークアップ', '売価に対する利益率／原価に対する上乗せ率']
          ]
        }
      ],
      quiz: [
        { q: 'Job 17 requires direct materials of $800 and 20 direct labour hours at $14 per hour. Production overhead is absorbed at $25 per direct labour hour. Non-production overhead is added at 20% of total production cost. The selling price is set to give a profit margin of 25% of the selling price. What is the selling price of Job 17?', type: 'number', answer: 2528, unit: '$', explain: '労務費 20 × $14 ＝ $280、製造間接費 20 × $25 ＝ $500、製造原価 $800 ＋ $280 ＋ $500 ＝ $1,580。販売費等 $1,580 × 20% ＝ $316 → 総原価 $1,896。利益が売価の25%なので $1,896 ÷ 0.75 ＝ $2,528。原価に25%を上乗せすると $2,370 で、マージンとマークアップの取り違え。' },
        { q: 'A process has an input of 5,000 litres costing $28,000. Normal loss is 8% of input and can be sold as scrap for $1 per litre. Actual output was 4,500 litres. What is the value of the abnormal loss?', type: 'number', answer: 600, unit: '$', explain: '正常減損 5,000 × 8% ＝ 400リットル（処分価値 $400）。予定産出量 4,600。1リットル原価 ($28,000 − $400) ÷ 4,600 ＝ $6。異常減損 4,600 − 4,500 ＝ 100リットル × $6 ＝ $600。処分価値の $1 で評価して $100 とするのは間違い。' },
        { q: 'Joint costs of $27,000 are incurred to produce 3,000 kg of X and 1,000 kg of Y. X is sold at the split-off point for $8 per kg. Y is processed further at a cost of $4,000 and then sold for $16 per kg. Using the net realisable value method, how much of the joint cost is apportioned to X?', choices: ['$20,250', '$16,200', '$18,000', '$24,000'], answer: 2, explain: 'X の NRV 3,000 × $8 ＝ $24,000、Y の NRV 1,000 × $16 − $4,000 ＝ $12,000。X ＝ $27,000 × 24/36 ＝ $18,000。$20,250 は重さで分けた物量法。$16,200 は Y の追加加工費を引かずに最終売価 $16,000 で比率を出した答え。$24,000 は X の NRV そのもの。' },
        { q: 'Y 1,000kg は分離点で1kg $10 で売れる。追加加工費 $4,000 をかけると1kg $16 で売れる。Y に配分した結合原価は $9,000。加工すると利益はいくら増える？（減るならマイナスで答える）', type: 'number', answer: 2000, unit: '$', explain: '増える収益 ($16 − $10) × 1,000 ＝ $6,000、増える費用 $4,000。差は ＋$2,000 なので加工する。結合原価 $9,000 は加工してもしなくてもかかるので、判断に入れない（入れると −$7,000 と誤る）。' },
        { q: '次のうち、総合原価計算（process costing）が最も合うのは？', choices: ['工務店が、客の設計どおりに家を1軒建てる', '飲料工場で、同じジュースを毎日連続して作る', 'パン屋が、クロワッサンを1回に200個ずつ焼く', '病院が、入院患者の看護をする'], answer: 1, explain: '同じ製品が工程を連続して流れるのは総合原価計算。家1軒は注文ごとに違うので個別原価計算。200個ずつまとめて作るのはバッチ原価計算。看護は形のないサービスなのでサービス原価計算（単位は patient-day）。' },
        { q: 'A staff canteen serves 250 meals a day and is open for 240 days a year. Its total annual cost is $270,000. What is the cost per meal served?', type: 'number', answer: 4.5, unit: '$', explain: '提供した食数 250 × 240 ＝ 60,000食。$270,000 ÷ 60,000 ＝ $4.50。社員食堂は社内サービスで、単位は meal served。' }
      ]
    }
  ],
  cards: [
    { id: 'M062-1', lesson: 'M062', q: 'サービスの4つの特徴（SHIP）は？', a: '同時性・異質性・無形性・消滅性（simultaneity, heterogeneity, intangibility, perishability）' },
    { id: 'M062-2', lesson: 'M062', q: 'サービス原価計算を使う2つの場面は？', a: 'サービス業（ホテル・輸送・病院など）と、社内の補助部門（IT・食堂など）' },
    { id: 'M062-3', lesson: 'M062', q: '消滅性（perishability）とは？', a: '使われなかった能力（空室・空席）は後で売れずに消えること' },
    { id: 'M062-4', lesson: 'M062', q: 'サービス業の原価の特徴は？', a: '固定費・間接費と人件費の割合が高く、在庫がほとんどない' },
    { id: 'M062-5', lesson: 'M062', q: 'なぜサービスは「総原価 ÷ サービス量」で考える？', a: '作り置きできず在庫が残らないので、1単位の平均原価で料金と効率を見るから' },
    { id: 'M063-1', lesson: 'M063', q: 'サービスの単位あたり原価の式は？', a: '総原価 ÷ 提供したサービス単位の数' },
    { id: 'M063-2', lesson: 'M063', q: '複合単位（composite cost unit）とは？ 例は？', a: '2つの量をかけた原価の単位。乗客km、トンkm、室泊、患者日など' },
    { id: 'M063-3', lesson: 'M063', q: 'tonne-km の合計の出し方は？', a: '区間ごとに「積んでいたトン × km」を出して足す。空の区間は0' },
    { id: 'M063-4', lesson: 'M063', q: 'ホテルの1室1泊あたり原価は、何で割る？', a: '使われた室泊数（室数 × 日数 × 稼働率）。空室は含めない' },
    { id: 'M063-5', lesson: 'M063', q: '病院・会計事務所・運送会社の原価の単位は？', a: '病院＝patient-day、会計事務所＝chargeable hour、運送＝tonne-km' },
    { id: 'M064-1', lesson: 'M064', q: '4つの原価計算の方法の選び方は？', a: '1件ずつ違う＝ジョブ、まとめて作る＝バッチ、流れ作業＝総合、形がない＝サービス' },
    { id: 'M064-2', lesson: 'M064', q: '総合原価計算の1単位あたり原価の式は？', a: '（投入原価 − 正常減損の処分価値）÷ 予定産出量' },
    { id: 'M064-3', lesson: 'M064', q: '異常減損・異常増加はいくらで評価する？', a: '完成品と同じ1単位あたり原価（処分価値ではない）' },
    { id: 'M064-4', lesson: 'M064', q: '連産品の NRV は？ 副産物の NRV は多くの場合どうする？', a: 'NRV ＝ 最終売価 − 分離点後の費用。副産物の NRV は結合原価から引く' },
    { id: 'M064-5', lesson: 'M064', q: '追加加工するかの判断基準は？', a: '増える収益 − 増える費用 がプラスなら加工。結合原価は関係ない' },
    { id: 'M064-6', lesson: 'M064', q: '総原価 $2,860、売価の20%を利益にする（margin）。売価は？', a: '$2,860 ÷ 0.8 ＝ $3,575' }
  ]
});
