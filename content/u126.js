(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 126,
  part: 7,
  partTitle: '予算',
  lessons: [
    {
      id: 'M108',
      no: 108,
      title: '投資の計画と統制、資産と費用のちがい',
      goal: '資産項目と費用項目を見分け、投資の計画と統制がなぜ大切かを説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C3(a)', 'K2:C3(b)'],
      slides: [
        {
          title: '車を買うお金、ガソリンのお金',
          paras: ['300万円の車を買うと、10年くらい使える。一方、今月のガソリン代1万円は、今月走ったら終わりだ。', '車は一度買うと簡単には買い直せない。だから家族で「いつ・どの車を・どのお金で買うか」をよく考える。会社も同じで、長く使う物への支出は、毎月の費用とは分けて計画する。']
        },
        {
          title: '資産項目と費用項目',
          list: ['資産項目（capital expenditure）: 非流動資産を買う・改良するための支出。効果が2期以上続く。財政状態計算書に資産として載せ、減価償却で数年に分けて費用にする', '費用項目（revenue expenditure）: 営業のための支出や、今ある資産の能力を保つための支出（修理・保守など）。その期の損益計算書の費用になる'],
          after: 'シラバスでは asset items（資産項目）と expense items（費用項目）と呼ぶ。K1 で学んだ有形固定資産の取得原価の考え方と同じ。'
        },
        {
          title: 'パン工場の支出を分ける',
          table: { caption: '資産項目か、費用項目か', head: ['支出', '区分'], rows: [['新しいオーブンの購入代', '資産'], ['オーブンの運送費・据付費・試運転費', '資産'], ['工場の増築（作れる量が増える）', '資産'], ['購入時の弁護士・専門家の手数料', '資産'], ['オーブンの故障の修理', '費用'], ['工場の外壁の塗り直し', '費用'], ['新しいオーブンの使い方の研修', '費用'], ['小麦粉・給料・電気代・保険料', '費用']] }
        },
        {
          title: '境目のルール',
          list: ['資産を「使える状態」にするまでの費用（運送・据付・試運転・専門家の手数料）は資産', '能力や寿命を増やす改良（増築・性能アップ）は資産', '元の状態に戻すだけの修理・保守は、金額が大きくても費用', '研修費・一般の管理費は、資産と一緒に払っても費用'],
          note: { kind: 'tip', text: '迷ったら「この支出の効果は、来年以降も続く新しい力を生むか？」と問う。元に戻すだけなら費用。' }
        },
        {
          title: '同じ支出でも行き先が違う',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="資産項目は財政状態計算書に資産として載り、減価償却で数年に分けて費用になる。費用項目はその年の損益計算書に全額費用として載る" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">支出の行き先</text><rect x="20" y="48" width="190" height="58" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="73" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">資産項目</text><text x="115" y="95" text-anchor="middle" font-size="12.5" fill="var(--ink)">capital expenditure</text><rect x="230" y="48" width="190" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="73" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">費用項目</text><text x="325" y="95" text-anchor="middle" font-size="12.5" fill="var(--quiet)">revenue expenditure</text><line x1="115" y1="108" x2="115" y2="132" stroke="var(--edge)" stroke-width="1.5"/><polygon points="109,130 121,130 115,140" fill="var(--edge)"/><line x1="325" y1="108" x2="325" y2="132" stroke="var(--edge)" stroke-width="1.5"/><polygon points="319,130 331,130 325,140" fill="var(--edge)"/><rect x="20" y="144" width="190" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="168" text-anchor="middle" fill="var(--ink)">財政状態計算書に</text><text x="115" y="190" text-anchor="middle" fill="var(--ink)">資産として載る</text><rect x="230" y="144" width="190" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="168" text-anchor="middle" fill="var(--ink)">今年の損益計算書に</text><text x="325" y="190" text-anchor="middle" fill="var(--ink)">費用として全額載る</text><line x1="115" y1="204" x2="115" y2="228" stroke="var(--edge)" stroke-width="1.5"/><polygon points="109,226 121,226 115,236" fill="var(--edge)"/><rect x="20" y="240" width="190" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="265" text-anchor="middle" fill="var(--ink)">減価償却で数年に配る</text><text x="325" y="265" text-anchor="middle" fill="var(--quiet)">その年だけで終わる</text></svg>`,
          caption: '現金は、どちらも払った月に出ていく。違うのは利益への載り方だ。'
        },
        {
          title: '例題: オーブンを買う年の予算',
          example: {
            problem: 'パン工場が1月に新しいオーブンを買い、全部その年に現金で払う。本体 $40,000、運送費 $1,000、据付費 $2,000、社員の研修費 $1,500、1年目の保守契約 $800。耐用年数5年、残存価額0、定額法、会計年度は1月〜12月。設備投資予算に入る額、今年の予算損益計算書の費用、今年の現金の支出は？',
            steps: ['資産項目: 本体 $40,000 ＋ 運送 $1,000 ＋ 据付 $2,000 ＝ $43,000（設備投資予算）', '費用項目: 研修 $1,500 ＋ 保守 $800 ＝ $2,300', '減価償却費: $43,000 ÷ 5年 ＝ $8,600', '予算損益計算書の費用: $8,600 ＋ $2,300 ＝ $10,900', '現金の支出: $43,000 ＋ $2,300 ＝ $45,300（現金予算）'],
            answer: '設備投資予算 $43,000、予算損益計算書の費用 $10,900、現金の支出 $45,300'
          }
        },
        {
          title: '投資の計画と統制はなぜ大切？',
          list: ['金額が大きい: 1件で会社の利益の何年分にもなりうる', '長く縛られる: 何年も使い、将来の生産能力とコストを決める', 'やり直しにくい: 買った機械を売っても、払った額はまず戻らない', '資金が限られる: 全部の案はできないので、選ぶ必要がある', '現金と資金調達に響く: 大きな支払に備えて、借入などを前もって手配する'],
          after: 'まちがった投資は、何年も会社の重荷になる。だから毎月の費用より、ずっと慎重に計画し管理する。'
        },
        {
          title: '計画と統制では何をする？',
          list: ['計画（planning）: 長期の計画・戦略に合わせて、必要な投資を洗い出し、評価して選ぶ。販売・製造の予算に必要な能力とも合わせる', '統制（control）: 支出の前に承認（authorisation）を受ける。実行中は実際の支出と進み具合を予算と比べ、予算超過（overrun）や遅れを調べる', '完成後の見直し（post-completion audit）: 実際の結果を最初の見積もりと比べ、次の計画に生かす'],
          after: '手順のくわしい流れは次のレッスンで学ぶ。'
        },
        {
          title: 'なぜ？ 資産と費用を分ける',
          paras: ['オーブンは5年使う。もし $43,000 を買った年の費用に全部入れると、その年の利益は小さくなり、後の4年は大きく見える。工場長の成績も、年ごとの比較もゆがむ。', '効果が続く期間に費用を配れば、毎年の利益を公平に比べられる。また予算では、資産項目は設備投資予算と現金予算に、費用項目は機能別の予算に入れる。分けないと予算の数字がまちがう。'],
          note: { kind: 'warn', text: '「金額が大きいから資産」ではない。$10,000 の修理でも、元に戻すだけなら費用。逆に据付費は小さくても資産。もう1つ、資産を買った年の予算損益計算書に載るのは減価償却費だけ。購入代の全額を載せない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['資産項目＝効果が2期以上続く支出（取得・改良、使える状態にする費用）。費用項目＝営業の支出と、元に戻す修理・保守', '資産項目は設備投資予算と現金予算へ。予算損益計算書には減価償却費だけが載る', '投資は金額が大きく、長く縛られ、やり直しにくく、資金も限られる。だから計画（選ぶ）と統制（承認・比較・完成後の見直し）が大切']
        },
        {
          title: '英単語',
          words: [
            ['capital expenditure', 'キャピタル エクスペンディチャー', '資産項目への支出（設備投資）'],
            ['revenue expenditure', 'レベニュー エクスペンディチャー', '費用項目への支出'],
            ['asset item / expense item', '', '資産項目 / 費用項目'],
            ['investment planning and control', '', '投資の計画と統制'],
            ['authorisation', 'オーソライゼーション', '承認（支出してよいという許可）'],
            ['overrun', 'オーバーラン', '予算超過・計画の遅れ'],
            ['post-completion audit', 'ポスト コンプリーション オーディット', '完成後の見直し（事後監査）'],
            ['improvement / repair', '', '改良（資産） / 修理（費用）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following items would be treated as capital expenditure?', choices: ['Repairs to a machine after a breakdown', 'Training staff to use a new machine', 'The cost of installing a new machine', 'Annual insurance on factory machinery'], answer: 2, explain: '据付費は機械を使える状態にするための費用なので、取得原価に入る資産項目。故障の修理は元に戻すだけ、研修は人への支出、保険料は毎年の支出で、どれも費用項目。研修は機械と一緒に払っても資産には入らない。' },
        { q: 'A company buys a machine for $40,000. It also pays delivery costs of $1,000, installation costs of $2,000, staff training costs of $1,500 and a first-year maintenance contract of $800. What amount should be included in the capital expenditure budget for the machine?', type: 'number', answer: 43000, unit: '$', explain: '資産項目は本体 $40,000 ＋ 運送 $1,000 ＋ 据付 $2,000 ＝ $43,000。研修 $1,500 と保守 $800 は費用項目なので入れない。全部足した $45,300 は現金の支出額で、設備投資予算の額ではない。' },
        { q: 'Which of the following is NOT a reason why investment planning and control is important?', choices: ['Large amounts of money are usually involved', 'Capital expenditure is charged in full to the statement of profit or loss in the year of purchase', 'Investment decisions are often difficult to reverse', 'Funds available for investment are usually limited'], answer: 1, explain: '資産項目は買った年に全額を費用にしない。財政状態計算書に載せ、減価償却で数年に分ける。だから「買った年に全額を損益計算書の費用にする」という文は事実として誤りで、理由にならない。金額が大きい、やり直しにくい、資金が限られる、はどれも投資を慎重に計画・統制する理由。' },
        { q: '次のうち、費用項目（revenue expenditure）になるものは？', choices: ['倉庫を増築して保管できる量を増やす工事代 $12,000', '新しい配送用のバンの購入代', '工場の土地を買うときの弁護士の手数料', '壊れた屋根を元どおりに直す修理代 $12,000'], answer: 3, explain: '元の状態に戻すだけの修理は、金額が大きくても費用項目。増築は能力を増やす改良なので資産。バンの購入は非流動資産の取得。土地を買うときの専門家の手数料は取得原価に入るので資産。' },
        { q: '1月に機械を $60,000 で買い、1月に現金で払う。耐用年数5年、残存価額0、定額法、会計年度は1月〜12月。今年の予算損益計算書に、この機械について載る費用は？', choices: ['$60,000（購入代の全額）', '$12,000（減価償却費）', '$5,000', '$0（現金で払ったので費用はない）'], answer: 1, explain: '予算損益計算書に載るのは減価償却費 $60,000 ÷ 5年 ＝ $12,000 だけ。$60,000 は1月の現金予算の支出と、設備投資予算に載る額。$5,000 は $60,000 を12か月で割った数で、耐用年数とは関係ない。' }
      ]
    },
    {
      id: 'M109',
      no: 109,
      title: '設備投資予算の作り方',
      goal: '設備投資予算を作るときに考えることと、作る手順を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C3(c)'],
      slides: [
        {
          title: '家族の「大きな買い物リスト」',
          paras: ['5年のうちに、車とエアコンと冷蔵庫を買い替えたい。全部を今年買うと貯金が足りない。だから「いつ・いくら・どのお金で」を数年分のリストにして、優先順位をつける。', '買う前に家族の了承を取り、買った後には「本当に電気代が下がったか」を振り返る。会社の設備投資予算も、これと同じ流れで作る。']
        },
        {
          title: '設備投資予算（capital expenditure budget）とは',
          paras: ['計画期間に買う・作る非流動資産の一覧と、その金額と支払の時期をまとめた予算。シラバスでは asset expenditure budget と呼ぶ。'],
          list: ['普通は1年の予算より長い、数年先までを見る', 'その年の予算には、その年に払う分を入れる', 'すでに承認されて進んでいる案（継続分）と、新しい案の両方を入れる']
        },
        {
          title: '考えること①: お金と戦略',
          list: ['会社の目標・長期の計画（戦略）に合っているか', '使える資金はいくらか。全部の案はできないとき、どれを選ぶか（資金の制約 capital rationing）', 'お金をどこから用意するか: 手元の資金、借入、リースなど', 'いつ払うか: 支払の時期は現金予算に直接響く', '投資の効果: 返ってくる現金はいくらか。回収期間や NPV で評価する（第10部で学ぶ）']
        },
        {
          title: '考えること②: ほかへの影響とリスク',
          list: ['ほかの予算への影響: 作れる量（生産能力）、必要な人員、保守費、減価償却費、借入の利息', '資産の寿命と取り替えの時期。技術が変わってすぐ古くならないか', 'リスク: 見積もりが外れたらどうなるか', 'お金以外の要素（non-financial factors）: 安全、法律や規制、環境・サステナビリティ、品質、社員や顧客への影響']
        },
        {
          title: '作る手順',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="設備投資予算の7つの手順。必要な投資を洗い出す、提案を集め見積もる、評価する、資金の範囲で選び予算にまとめる、承認を得る、実行中に予算と比べる、完成後に見直す。完成後の見直しを強調" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">設備投資予算の7つの手順</text><rect x="20" y="46" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="63" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="68" text-anchor="middle" fill="var(--ink)">1</text><text x="64" y="68" fill="var(--ink)">必要な投資を洗い出す</text><rect x="20" y="86" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="103" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="108" text-anchor="middle" fill="var(--ink)">2</text><text x="64" y="108" fill="var(--ink)">提案を集め、金額と時期を見積もる</text><rect x="20" y="126" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="143" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="148" text-anchor="middle" fill="var(--ink)">3</text><text x="64" y="148" fill="var(--ink)">財務面・非財務面で評価する</text><rect x="20" y="166" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="183" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="188" text-anchor="middle" fill="var(--ink)">4</text><text x="64" y="188" fill="var(--ink)">資金の範囲で選び、予算にまとめる</text><rect x="20" y="206" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="223" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="228" text-anchor="middle" fill="var(--ink)">5</text><text x="64" y="228" fill="var(--ink)">承認を得る（authorisation）</text><rect x="20" y="246" width="400" height="34" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><circle cx="40" cy="263" r="12" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="268" text-anchor="middle" fill="var(--ink)">6</text><text x="64" y="268" fill="var(--ink)">実行中、実際を予算と比べる</text><rect x="20" y="286" width="400" height="34" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><circle cx="40" cy="303" r="12" fill="none" stroke="var(--ink)" stroke-width="1.25"/><text x="40" y="308" text-anchor="middle" fill="var(--ink)">7</text><text x="64" y="308" fill="var(--ink)">完成後に見直す（post-completion audit）</text></svg>`,
          caption: '1〜4が計画、5〜7が統制。7は忘れやすいので強調した。'
        },
        {
          title: '手順を言葉で',
          numbered: ['洗い出す: 長期の計画、能力が足りないという機能別予算の結果、古くなった資産の取り替えから、必要な投資を見つける', '提案と見積もり: 各部門が案を出し、金額・支払の時期・期待する効果を見積もる', '評価: お金の面（返ってくる現金）とお金以外の面で評価する', '選んで予算化: 資金の範囲で優先順位をつけ、いつ・いくら払うかを予算にまとめる', '承認: 取締役会などが承認する。金額が大きいほど上の人の承認がいる', '比べる: 実行中は実際の支出と進み具合を予算と比べ、超過や遅れを調べる', '見直す: 完成後に、実際の結果を見積もりと比べる']
        },
        {
          title: '例題: 支払の時期を四半期に分ける',
          example: {
            problem: '承認された投資は2つ。機械 $90,000 は、注文した第1四半期に30%を払い、残りは納品の第3四半期に払う。配送用のバン $30,000 は、第2四半期に全額払う。四半期ごとの設備投資の支払額は？',
            steps: ['機械の手付金: $90,000 × 30% ＝ $27,000（第1四半期）', '機械の残り: $90,000 − $27,000 ＝ $63,000（第3四半期）', 'バン: $30,000（第2四半期）', '四半期ごと: 第1 $27,000、第2 $30,000、第3 $63,000', '確かめ: $27,000 ＋ $30,000 ＋ $63,000 ＝ $120,000 ＝ $90,000 ＋ $30,000'],
            answer: '第1四半期 $27,000、第2四半期 $30,000、第3四半期 $63,000。この数字がそのまま現金予算の支払に入る'
          }
        },
        {
          title: '承認した後の統制',
          list: ['承認の権限: 「$10,000 までは工場長、それを超えたら取締役会」のように、金額で決めておく', '予算超過（overrun）: 実際の支出が予算を超えたら、理由を調べて報告する。大きく超えるときは、もう一度承認を取る', '完成後の見直し（post-completion audit）: 見積もりが正しかったかを確かめ、次の見積もりを良くする。後で比べられると分かっていれば、提案者が見積もりを甘く出しにくくなる']
        },
        {
          title: 'なぜ？ 1年の予算とは別に作る',
          paras: ['設備投資は、支払も効果も何年にもわたる。1年の予算だけで考えると、来年の大きな支払や、5年後の取り替えが見えない。', 'しかも設備投資予算は、ほかの予算の土台になる。支払の時期は現金予算へ、買った資産は予算財政状態計算書へ、減価償却費は予算損益計算書へ流れる。だから数年分を見通して別に作り、ほかの予算とつなげる。'],
          note: { kind: 'warn', text: '承認したら終わり、ではない。実行中に比べること、完成後に見直すことまでが手順に入る。また、設備投資予算の支払額をそのまま予算損益計算書の費用にしない。損益計算書に入るのは減価償却費だ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['設備投資予算＝買う非流動資産の金額と支払の時期の一覧。数年先まで見る', '考えること: 戦略との一致、資金の量と調達、支払の時期、ほかの予算への影響、リスクとお金以外の要素', '手順: 洗い出す → 見積もる → 評価する → 選んで予算化 → 承認 → 実行中に比べる → 完成後に見直す']
        },
        {
          title: '英単語',
          words: [
            ['capital expenditure budget', '', '設備投資予算'],
            ['asset expenditure budget', '', '設備投資予算（シラバスの言い方）'],
            ['capital rationing', 'キャピタル ラショニング', '資金の制約（使える資金に上限がある）'],
            ['source of finance', '', '資金の調達先（借入・リースなど）'],
            ['non-financial factors', '', 'お金以外の要素（安全・環境・法律など）'],
            ['authorisation', 'オーソライゼーション', '承認'],
            ['post-completion audit', 'ポスト コンプリーション オーディット', '完成後の見直し']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT normally a step in preparing and controlling a capital expenditure budget?', choices: ['Identifying investment opportunities and needs', 'Evaluating proposals using financial and non-financial criteria', 'Obtaining authorisation for the expenditure', 'Charging the full cost of approved projects to the budgeted statement of profit or loss'], answer: 3, explain: '承認した投資の全額を予算損益計算書に入れることはしない。損益計算書に入るのは減価償却費。洗い出す、財務面・非財務面で評価する、承認を得る、はどれも設備投資予算の手順に入る。' },
        { q: 'When preparing a capital expenditure budget, which of the following issues should be considered? (1) The availability of finance (2) The timing of payments (3) The effect on other functional budgets', choices: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 and 3 only'], answer: 2, explain: '3つとも考える。資金の量（1）で選べる案が決まり、支払の時期（2）は現金予算に響き、新しい機械は生産能力・人員・保守費・減価償却費など、ほかの予算（3）を変える。' },
        { q: 'A capital expenditure budget includes a machine costing $80,000. 25% is paid when the order is placed in quarter 1 and the balance is paid on delivery in quarter 3. A computer system costing $24,000 will also be paid for in quarter 3. What is the budgeted capital expenditure payment in quarter 3?', type: 'number', answer: 84000, unit: '$', explain: '機械の残り: $80,000 × 75% ＝ $60,000。これにコンピュータ $24,000 を足して $84,000。手付金 $20,000（$80,000 × 25%）は第1四半期の支払なので入れない。機械の全額 $80,000 を足して $104,000 とするのは間違い。' },
        { q: '完成後の見直し（post-completion audit）の主な目的は？', choices: ['投資を始める前に、どの案を選ぶかを決める', '完成した投資の実際の結果を見積もりと比べ、今後の計画と見積もりに生かす', '毎月の材料費の差異を調べる', '買った資産の減価償却費を計算する'], answer: 1, explain: '完成後の見直しは統制の最後の手順で、実際の結果を最初の見積もりと比べる。次の見積もりが良くなり、甘い見積もりを防ぐ効果もある。案を選ぶのは手順4（選んで予算化）で、完成前の話。' },
        { q: '使える資金は $150,000 なのに、部門から出た設備投資の提案は合計 $180,000 ある。最も適切な対応は？', choices: ['全部承認し、足りない分は払う時に考える', '金額が小さい案から順に、資金に入るだけ承認する', '戦略への合い方と評価の結果で優先順位をつけ、資金の範囲で選ぶ', '提案した部門の数で資金を均等に分ける'], answer: 2, explain: '資金に上限がある（capital rationing）ときは、会社の戦略に合い、効果が大きい案から選ぶ。全部承認すると現金が足りなくなる。金額の小ささや部門の数は、会社にとっての価値と関係がない。' }
      ]
    },
    {
      id: 'M110',
      no: 110,
      title: '固定予算と変動予算: どちらが向いている？',
      goal: '固定予算と変動予算のちがいを説明し、それぞれが向いている場面を見分けられるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:C4(a)'],
      slides: [
        {
          title: '食費の予算と、泊まりに来た親',
          paras: ['家族3人で、食費の予算は1人2万円 × 3人 ＝ 6万円。ところが今月は親が1か月泊まりに来て4人になり、食費は7.5万円かかった。', '「予算より1.5万円使いすぎ」と言うのは公平だろうか。4人なら目安は2万円 × 4人 ＝ 8万円。それと比べれば、むしろ5千円節約している。比べる相手を実際の人数に合わせると、本当の姿が見える。']
        },
        {
          title: '固定予算（fixed budget）',
          paras: ['1つの活動量（予定した生産量や販売量）だけを前提に作る予算。実際の量が予定と違っても、金額を直さない。'],
          after: '年度の初めに作るマスター予算（総合予算）は、ふつう固定予算だ。「固定予算＝固定費の予算」ではない。固定予算にも変動費は入っている。'
        },
        {
          title: '変動予算（flexible budget）',
          paras: ['原価の動き（固定費・変動費・準変動費）を使い、活動量が変わると金額も変わるように作る予算。'],
          formula: '変動予算の原価 ＝ 固定費 ＋ 1単位の変動費 × 活動量',
          after: '実際の活動量に合わせて作り直した予算を flexed budget（実際の量に合わせた予算）と呼ぶ。実績はこれと比べる。作り方は次のレッスンでくわしく学ぶ。'
        },
        {
          title: 'どれと比べる？',
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="材料費の比較。固定予算は10,000個で50,000ドル。実際の量12,000個に合わせた変動予算は60,000ドル。実績は12,000個で57,600ドル。変動予算を強調" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">材料費: どれと比べる？</text><line x1="30" y1="230" x2="420" y2="230" stroke="var(--edge)" stroke-width="1.25"/><rect x="55" y="105" width="80" height="125" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="95" y="95" text-anchor="middle" fill="var(--ink)">$50,000</text><rect x="180" y="80" width="80" height="150" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">$60,000</text><rect x="305" y="86" width="80" height="144" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="345" y="76" text-anchor="middle" fill="var(--ink)">$57,600</text><text x="95" y="252" text-anchor="middle" fill="var(--ink)">固定予算</text><text x="220" y="252" text-anchor="middle" fill="var(--ink)">変動予算</text><text x="345" y="252" text-anchor="middle" fill="var(--ink)">実績</text><text x="95" y="272" text-anchor="middle" font-size="12.5" fill="var(--quiet)">10,000個</text><text x="220" y="272" text-anchor="middle" font-size="12.5" fill="var(--quiet)">12,000個</text><text x="345" y="272" text-anchor="middle" font-size="12.5" fill="var(--quiet)">12,000個</text><text x="220" y="300" text-anchor="middle" font-size="15" fill="var(--ink)">同じ12,000個どうしで比べる</text></svg>`,
          caption: '固定予算と比べると $7,600 の使いすぎに見える。同じ量の変動予算と比べると $2,400 少ない。'
        },
        {
          title: '例題: 固定予算と比べるとどう見える？',
          example: {
            problem: '予算は10,000個。材料費は1個 $5 で $50,000、固定費（工場の家賃など）は $20,000。実際は12,000個作り、材料費 $57,600、固定費 $20,500 だった。固定予算と比べた差と、実際の量に合わせた予算と比べた差は？',
            steps: ['固定予算と比べる: 材料費 $57,600 − $50,000 ＝ $7,600 多い（不利に見える）', '実際の量に合わせる: 材料費 12,000個 × $5 ＝ $60,000', '材料費: $57,600 は $60,000 より $2,400 少ない（有利）', '固定費は量で変わらないので、予算は $20,000 のまま: $20,500 − $20,000 ＝ $500 多い（不利）', '合計: 固定予算 $70,000 より $8,100 多いが、実際の量の予算 $80,000 よりは $1,900 少ない'],
            answer: '本当の成果は、材料費 $2,400 の有利と固定費 $500 の不利。固定予算との差 $8,100 は、作った量が多かった影響が混ざった数字'
          }
        },
        {
          title: '固定予算が向いている場面',
          list: ['計画の段階: 目標を決め、各部門の予算をまとめて調整する（マスター予算）', '活動量がほぼ予定どおりになり、ぶれが小さいとき', '原価のほとんどが固定費で、量によって変わらないとき（管理部門の費用、家賃など）', '上限を決めて使い方を任せる裁量的な費用（広告費、研修費、研究開発費など）']
        },
        {
          title: '変動予算が向いている場面',
          list: ['活動量が予定から大きく変わりやすいとき（需要が読みにくい、季節で変わる）', '変動費・準変動費の割合が大きいとき（材料費、出来高払いの労務費、電力など）', '統制の段階: 実績と比べて管理者の成果を評価するとき', '計画の段階でも、量がいくつかの水準になりうるとき（例: 80%・100%・120%）、それぞれの結果を前もって見ておく']
        },
        {
          title: 'なぜ？ 統制は同じ量どうしで比べる',
          paras: ['作る量が増えれば、材料費が増えるのは当たり前だ。固定予算と比べると、「量が違ったための差」と「材料を安く買えた・無駄なく使えた差」が混ざってしまう。', '工場長は、ふつう販売量（需要）を決められない。量の影響を取り除き、管理者が責任を持てる部分だけで評価するために、実際の量に合わせた予算と比べる。'],
          note: { kind: 'warn', text: '実際の量に合わせるとき、固定費まで量に比例させて増やす間違いが多い。固定費は関連範囲（relevant range）の中なら、量が変わっても予算の額は同じ。量に合わせて直すのは変動費（と準変動費の変動部分）だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['固定予算＝1つの活動量だけで作り、直さない。計画、量が安定、原価がほぼ固定費、裁量的な費用に向く', '変動予算＝原価の動きを使い、量に合わせて金額が変わる。量がぶれる、変動費が大きい、統制・成果評価に向く', '統制では、実際の量に合わせた予算（flexed budget）と実績を比べる。固定費は直さない']
        },
        {
          title: '英単語',
          words: [
            ['fixed budget', 'フィクスト バジェット', '固定予算（1つの活動量で作る）'],
            ['flexible budget', 'フレキシブル バジェット', '変動予算（量に合わせて変わる）'],
            ['flexed budget', 'フレックスト バジェット', '実際の量に合わせて作り直した予算'],
            ['level of activity', '', '活動量（生産量・販売量など）'],
            ['cost behaviour', 'コスト ビヘイビア', '原価の動き（固定費・変動費など）'],
            ['discretionary cost', 'ディスクレショナリー コスト', '裁量的な費用（広告・研修など）'],
            ['relevant range', 'レレバント レンジ', '関連範囲（固定費が一定でいられる量の幅）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a flexible budget?', choices: ['A budget which is prepared for a single level of activity and is not changed', 'A budget which, by recognising different cost behaviour patterns, is designed to change as the volume of activity changes', 'A budget which is continuously updated by adding a further period when the earliest period has expired', 'A budget which is prepared with the participation of the managers responsible for meeting it'], answer: 1, explain: '変動予算は、原価の動きを使って活動量に合わせて金額が変わる予算。1つの活動量だけで作るのは固定予算。期間が過ぎるたびに1期間を足していくのは継続予算（rolling budget）、管理者が作成に加わるのは参加型予算で、どちらも別の話。' },
        { q: 'In which of the following situations would a fixed budget be most appropriate for control purposes?', choices: ['A production department whose output varies widely from month to month', 'A department whose main cost is direct materials', 'An administration department whose costs are mainly fixed and do not vary with output', 'A sales team whose commission depends on the volume of sales'], answer: 2, explain: '原価がほぼ固定費で量によって変わらないなら、量に合わせて直す必要がなく、固定予算のままで比べられる。生産量が大きくぶれる部門、材料費が中心の部門、売上に応じた歩合の営業は、どれも原価が量で変わるので変動予算が向く。' },
        { q: 'A budget was prepared for 8,000 units with variable costs of $4 per unit and fixed costs of $30,000. Actual output was 9,500 units. What is the total cost in the flexed budget?', type: 'number', answer: 68000, unit: '$', explain: '変動費: 9,500個 × $4 ＝ $38,000。固定費は量で変わらず $30,000。合計 $68,000。予算の量 8,000個で計算した $62,000 は固定予算の額。固定費まで 9,500 ÷ 8,000 倍した $73,625 は、固定費を比例させる間違い。' },
        { q: '電力費の予算は1個あたり $3 で、予算の生産量4,000個に対して $12,000。実際は5,000個作り、電力費は $14,000 だった。正しい見方は？', choices: ['予算 $12,000 より $2,000 多いので、使いすぎ（不利）', '量が増えたので、差はすべて無視してよい', '実際の量に合わせた予算も $12,000 なので、$2,000 の不利', '実際の量に合わせた予算は $15,000 なので、$1,000 少なく済んだ（有利）'], answer: 3, explain: '電力費は量に比例する変動費なので、5,000個 × $3 ＝ $15,000 と比べる。実際は $14,000 で $1,000 少ない。固定予算 $12,000 と比べた $2,000 の不利は、作った量が多かった影響が混ざった数字。差を無視せず、同じ量どうしで比べる。' },
        { q: '統制（成果の評価）に、固定予算より変動予算が向いている一番の理由は？', choices: ['活動量の違いによる差を取り除き、管理者が責任を持てる差だけを見られる', '作る手間が少なく、1回作れば直さなくてよい', '実際の固定費が必ず予算と一致するようになる', '目標の販売量を決めなくても予算が作れる'], answer: 0, explain: '量が増えれば変動費が増えるのは当然なので、同じ量の予算と比べて初めて、効率や価格の良し悪しが見える。変動予算は量に合わせて作り直すので、手間はむしろ増える。固定費の実績が予算と一致する保証はない。計画の段階では目標の量を決める。' }
      ]
    }
  ],
  cards: [
    { id: 'M108-1', lesson: 'M108', q: '資産項目（capital expenditure）とは？', a: '非流動資産を買う・改良する支出。効果が2期以上続き、資産に載せて減価償却する' },
    { id: 'M108-2', lesson: 'M108', q: '費用項目（revenue expenditure）とは？', a: '営業のための支出と、今ある資産の能力を保つ修理・保守。その期の費用になる' },
    { id: 'M108-3', lesson: 'M108', q: '修理と改良の見分け方は？', a: '元に戻すだけなら修理で費用。能力や寿命を増やすなら改良で資産。金額の大きさは関係ない' },
    { id: 'M108-4', lesson: 'M108', q: '機械の運送費・据付費・研修費はどちら？', a: '運送費・据付費は資産（使える状態にする費用）。研修費は費用' },
    { id: 'M108-5', lesson: 'M108', q: '投資の計画と統制が大切な理由は？', a: '金額が大きい、長く縛られる、やり直しにくい、資金が限られる、現金と資金調達に響く' },
    { id: 'M108-6', lesson: 'M108', q: '機械を買った年、予算のどこに何が出る？', a: '設備投資予算と現金予算に購入額。予算損益計算書には減価償却費だけ' },
    { id: 'M109-1', lesson: 'M109', q: '設備投資予算（asset expenditure budget）とは？', a: '買う非流動資産の金額と支払の時期の一覧。普通は数年先まで見る' },
    { id: 'M109-2', lesson: 'M109', q: '設備投資予算で考えることは？', a: '戦略との一致、資金の量と調達、支払の時期、ほかの予算への影響、リスクとお金以外の要素' },
    { id: 'M109-3', lesson: 'M109', q: '設備投資予算の7つの手順は？', a: '洗い出す→見積もる→評価→選んで予算化→承認→実行中に比べる→完成後に見直す' },
    { id: 'M109-4', lesson: 'M109', q: 'post-completion audit とは？', a: '完成後に実際の結果を見積もりと比べる見直し。次の計画を良くし、甘い見積もりを防ぐ' },
    { id: 'M109-5', lesson: 'M109', q: '設備投資予算はどの予算につながる？', a: '支払の時期は現金予算、資産は予算財政状態計算書、減価償却費は予算損益計算書' },
    { id: 'M110-1', lesson: 'M110', q: '固定予算（fixed budget）とは？', a: '1つの活動量だけで作り、実際の量が変わっても直さない予算' },
    { id: 'M110-2', lesson: 'M110', q: '変動予算（flexible budget）とは？', a: '原価の動きを使い、活動量が変わると金額も変わるように作る予算' },
    { id: 'M110-3', lesson: 'M110', q: '固定予算が向く場面は？', a: '計画段階、量が安定、原価がほぼ固定費、広告・研修などの裁量的な費用' },
    { id: 'M110-4', lesson: 'M110', q: '変動予算が向く場面は？', a: '量がぶれやすい、変動費が大きい、統制で管理者の成果を評価するとき' },
    { id: 'M110-5', lesson: 'M110', q: 'なぜ統制では実際の量に合わせた予算と比べる？', a: '量の違いによる差を除き、管理者が責任を持てる差だけを見るため' },
    { id: 'M110-6', lesson: 'M110', q: '実際の量に合わせるとき、固定費は？', a: '関連範囲の中なら直さない。量に合わせるのは変動費だけ' }
  ]
});
