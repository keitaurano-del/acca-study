(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 213,
  part: 5,
  partTitle: '会社の法人格・設立・定款',
  lessons: [
    {
      id: 'B052',
      no: 52,
      title: '会社の種類：私会社と公開会社',
      goal: '株式有限責任・保証有限責任・無限責任の3種類と、私会社（Ltd）と公開会社（plc）のちがい（最低資本、公募、取締役、会社秘書役、取引開始の証明書など）を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(b)'],
      slides: [
        {
          title: '仲間のカフェと、全国チェーン',
          paras: ['友人3人でカフェを開き、お金を出し合ったとする。出資者は顔見知りだけなので、細かいルールがなくても困らない。', '全国チェーンを作るなら、知らない多くの人から出資を集めたい。知らない人を守るには、厳しいルールが要る。英国の会社法は、この2つを私会社（private company）と公開会社（public company）に分け、公開会社に重いルールを課す。']
        },
        {
          title: '会社の種類の地図',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="会社は株主の責任で3種類、株式を公募できるかで私会社と公開会社の2種類に分かれる" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">会社の種類（2つの切り口）</text><text x="20" y="60" font-size="15" fill="var(--ink)">① 株主の責任の範囲</text><rect x="20" y="72" width="124" height="56" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><rect x="158" y="72" width="124" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="296" y="72" width="124" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="96" text-anchor="middle" fill="var(--ink)">株式有限責任</text><text x="82" y="116" text-anchor="middle" font-size="12.5" fill="var(--quiet)">by shares</text><text x="220" y="96" text-anchor="middle" fill="var(--ink)">保証有限責任</text><text x="220" y="116" text-anchor="middle" font-size="12.5" fill="var(--quiet)">by guarantee</text><text x="358" y="96" text-anchor="middle" fill="var(--ink)">無限責任</text><text x="358" y="116" text-anchor="middle" font-size="12.5" fill="var(--quiet)">unlimited</text><text x="20" y="156" font-size="15" fill="var(--ink)">② 株式を公衆に売り出せるか</text><rect x="20" y="168" width="193" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="227" y="168" width="193" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="192" text-anchor="middle" font-size="15" fill="var(--ink)">私会社（Ltd）</text><text x="116" y="214" text-anchor="middle" fill="var(--ink)">公募できない</text><text x="116" y="234" text-anchor="middle" font-size="13" fill="var(--quiet)">最低資本なし</text><text x="323" y="192" text-anchor="middle" font-size="15" fill="var(--ink)">公開会社（plc）</text><text x="323" y="214" text-anchor="middle" fill="var(--ink)">公募できる</text><text x="323" y="234" text-anchor="middle" font-size="13" fill="var(--quiet)">最低資本 £50,000</text><text x="220" y="276" text-anchor="middle" fill="var(--ink)">公開会社になれるのは、株式資本のある有限責任会社だけ</text></svg>`,
          caption: '英国の会社の大半は「株式有限責任の私会社（Ltd）」になる。'
        },
        {
          title: '① 株主の責任で3種類',
          list: ['株式有限責任会社（company limited by shares）: 株主の責任は、持っている株式の未払込額まで。いちばん多い形', '保証有限責任会社（company limited by guarantee）: 株主は、会社の清算のときに出すと約束した額（保証額）まで責任を負う。慈善団体やクラブに多い', '無限責任会社（unlimited company）: 株主の責任に上限がない。数は少ない'],
          after: '2006年会社法（Companies Act 2006、CA 2006）の下では、株式資本のある保証有限責任会社は新しく作れない（s5）。'
        },
        {
          title: '② 私会社と公開会社：お金の集め方',
          table: { caption: 'CA 2006 のルール', head: ['項目', '私会社 private', '公開会社 public'], rows: [['名前の最後', 'Limited / Ltd', 'plc'], ['最低資本', 'なし', '£50,000 以上'], ['払込', '決まりなし', '各株の額面の1/4と、プレミアム全額'], ['株式の公募', 'できない（s755）', 'できる'], ['取引開始の証明書', '不要', '必要（s761）']] }
        },
        {
          title: '② 私会社と公開会社：運営のルール',
          table: { caption: 'CA 2006 のルール', head: ['項目', '私会社 private', '公開会社 public'], rows: [['株主の数', '1人以上', '1人以上'], ['取締役の数', '1人以上', '2人以上'], ['会社秘書役', '置かなくてよい', '必ず置く（資格が必要）'], ['年次総会（AGM）', '不要', '毎年必要'], ['決算書の提出期限', '期末から9か月', '期末から6か月'], ['書面決議', '使える', '使えない']] },
          after: 'どちらの会社でも、取締役のうち少なくとも1人は個人（natural person）でなければならない。'
        },
        {
          title: '例題: 公開会社の最低資本',
          example: {
            problem: 'Alpha plc は設立時に £1 株を 60,000 株、額面どおり（プレミアムなし）で割り当てた。最低資本の基準を満たすか。また、割当のときに最低いくら払い込まれている必要があるか。',
            steps: ['割り当てた株式の額面合計: 60,000 × £1 ＝ £60,000', '最低資本 £50,000 以上なので、基準を満たす', '払込の最低: 各株の額面の1/4 ＋ プレミアム全額', '60,000 × £1 × 1/4 ＝ £15,000。プレミアムはないので £0'],
            answer: '基準を満たす。最低 £15,000 の払込が必要'
          }
        },
        {
          title: '取引開始の証明書（trading certificate）',
          paras: ['最初から公開会社として設立した会社は、登記所（Registrar of Companies）から取引開始の証明書をもらうまで、事業を始めたり借入をしたりできない（s761）。登記所は、最低資本 £50,000 を満たしていることを確かめてから発行する。', '証明書なしで取引すると、会社と取締役は罪になる。ただし結んだ契約は無効にならない。会社が求められてから21日以内に義務を果たさないと、取締役が相手方の損失を連帯して補償する責任を負う（s767）。']
        },
        {
          title: 'なぜ？ 公開会社だけ厳しい理由',
          paras: ['公開会社は、株式を広く公衆に売り出せる。買う人の多くは、経営者に会ったこともなく、会社の中身を自分で調べる力もない。', 'そこで法律は、最低資本、2人以上の取締役、資格のある会社秘書役、毎年の総会、早い決算書の提出を求めて、知らない投資家を守る。私会社は株式を公募できない代わりに、ルールが軽く、少人数で手早く運営できる。']
        },
        {
          title: '日本の感覚とのずれ',
          list: ['日本の会社法の「公開会社」は、株式の譲渡制限がない会社のこと。英国の public company は「plc として登記された会社」で、意味がちがう', 'plc ＝ 上場会社ではない。上場していない plc も多い。ただし、株式を上場できるのは公開会社だけ', '株主は私会社も公開会社も1人でよい'],
          note: { kind: 'warn', text: '「公開会社は株主が2人以上必要」は誤り。2人以上必要なのは取締役。また、私会社を公開会社に変える（特別決議と資本の条件が必要）ことも、その逆もできる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株主の責任で3種類: 株式有限責任・保証有限責任・無限責任', '公開会社（plc）: 最低資本 £50,000（各株の1/4とプレミアム全額を払込）、取締役2人以上、会社秘書役、取引開始の証明書', '私会社（Ltd）は株式を公募できない。取締役1人でよく、秘書役も総会も不要']
        },
        {
          title: '英単語',
          words: [
            ['private company (Ltd)', 'プライベート カンパニー', '私会社'],
            ['public company (plc)', 'パブリック カンパニー', '公開会社'],
            ['company limited by shares', '', '株式有限責任会社'],
            ['company limited by guarantee', 'ギャランティー', '保証有限責任会社'],
            ['unlimited company', 'アンリミテッド', '無限責任会社'],
            ['authorised minimum', 'オーソライズド ミニマム', '公開会社の最低資本（£50,000）'],
            ['trading certificate', 'トレーディング サーティフィケイト', '取引開始の証明書'],
            ['company secretary', 'セクレタリー', '会社秘書役']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements regarding a public limited company is correct?', choices: ['Its shares must be listed on a stock exchange', 'It must have a minimum allotted share capital of £50,000', 'It must have at least two members', 'It may begin trading as soon as it receives its certificate of incorporation'], answer: 1, explain: '最低資本は £50,000。plc でも上場していない会社は多い。2人以上必要なのは取締役で、株主（member）は1人でよい。最初から公開会社として設立した会社は、取引開始の証明書（trading certificate）がないと取引を始められない。' },
        { q: 'Which of the following statements is correct?\n(1) A private company must have at least two directors.\n(2) A private company is not required to appoint a company secretary.', choices: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], answer: 1, explain: '(1) は誤り。私会社の取締役は1人でよく、2人以上必要なのは公開会社。(2) は正しい。会社秘書役が必ず要るのは公開会社だけ。' },
        { q: 'Beta plc allots 100,000 ordinary shares of £1 each at a price of £1.50 per share. What is the minimum amount (in £) that must be paid up on allotment?', type: 'number', answer: 75000, unit: '£', explain: '額面の1/4: 100,000 × £1 × 1/4 ＝ £25,000。プレミアムは全額: 100,000 × £0.50 ＝ £50,000。合計 £75,000。額面の1/4だけ（£25,000）や、発行価額全体の1/4（£37,500）にしてしまう間違いが多い。' },
        { q: 'Which of the following may be registered as a public company?', choices: ['An unlimited company', 'A company limited by guarantee without a share capital', 'A limited liability partnership', 'A company limited by shares'], answer: 3, explain: '公開会社になれるのは、株式資本のある有限責任会社だけ。無限責任会社と、株式資本のない保証有限責任会社はなれない。LLP は会社ではなく、別の法律（LLP Act 2000）で作られる。' },
        { q: '保証有限責任会社（company limited by guarantee）の説明として正しいものは？', choices: ['株主は、株式の未払込額まで責任を負う', '株主は、会社の清算のときに出すと約束した額まで責任を負う', '株主の責任に上限はない', '銀行が会社の借入を保証する会社のこと'], answer: 1, explain: '保証額は、清算のときに出すと約束した額。慈善団体やクラブに多い。未払込額までは株式有限責任会社、上限なしは無限責任会社。銀行の保証とは関係がない。' },
        { q: '日本の会社法の「公開会社」と、英国の public company の関係として正しいものは？', choices: ['同じ意味で、どちらも上場会社のこと', '英国では株式の譲渡制限がない会社を public company という', '意味がちがう。英国の public company は plc として登記された会社のこと', '英国では株主が2人以上いる会社を public company という'], answer: 2, explain: '日本の「公開会社」は譲渡制限の有無の話。英国の public company は登記で決まる。plc でも上場しているとは限らない。株主の数は関係ない。' }
      ]
    },
    {
      id: 'B053',
      no: 53,
      title: '小会社と小グループ',
      goal: '小会社（small company）と小グループの基準（3つのうち2つ、2年ルール、按分、総額と純額）で会社の規模を判定し、小会社になると何が軽くなるかを説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(c)'],
      slides: [
        {
          title: '小さな店に、大企業と同じ書類？',
          paras: ['商店街の八百屋に、大企業と同じ分厚い報告書と監査を求めたらどうなるか。作る手間と費用で、店がつぶれてしまう。', '英国の会社法は、規模の小さい会社に軽いルールを用意している（small companies regime）。どの会社が「小さい」かは、数字の基準で決まる。']
        },
        {
          title: '小会社（small company）の基準',
          formula: '小会社 ＝ 3つの基準のうち2つ以上を満たす会社（CA 2006 s382）',
          table: { caption: '2025年4月6日以後に始まる事業年度', head: ['基準', '小会社', '（参考）中会社'], rows: [['売上高 turnover', '£15m 以下', '£54m 以下'], ['貸借対照表の合計', '£7.5m 以下', '£27m 以下'], ['従業員数（平均）', '50人以下', '250人以下']] },
          note: { kind: 'tip', text: 'それより前の年度は £10.2m・£5.1m・50人だった。さらに小さい micro-entity（£1m・£500k・10人）もある。' }
        },
        {
          title: '数え方のルール',
          list: ['売上高（turnover）: 付加価値税（VAT）を含めない', '貸借対照表の合計（balance sheet total）: 資産の合計。負債を引く前の金額で、純資産ではない', '従業員数: 年間の平均（月ごとの人数を平均する）。期末の人数ではない', '事業年度が12か月でないときは、売上高の基準を月数で按分する。例: 9か月なら £15m × 9/12 ＝ £11.25m']
        },
        {
          title: '2年ルール',
          paras: ['最初の事業年度は、その年だけで判定する。その後は、基準を満たす・満たさないが2年続いたときにだけ、小会社かどうかが変わる。'],
          table: { caption: '基準を満たしたか（○×）と判定', head: ['年度', '基準', '小会社か'], rows: [['1年目', '○', '小会社（初年度）'], ['2年目', '○', '小会社'], ['3年目', '×', '小会社のまま（1年だけ）'], ['4年目', '×', '小会社でなくなる'], ['5年目', '○', '小会社でない（1年だけ）'], ['6年目', '○', '小会社にもどる']] }
        },
        {
          title: '例題1: 小会社か',
          example: {
            problem: 'Gamma Ltd（親会社ではない私会社）。事業年度は2026年1月1日から12か月。前の年度も同じ結果だった。売上高 £16.4m、資産の合計 £8.1m、負債 £3.1m、従業員の年間平均 48人。小会社か。',
            steps: ['売上高 £16.4m は £15m を超える → ×', '貸借対照表の合計は資産の合計 £8.1m。£7.5m を超える → ×（純資産 £5.0m で判定しない）', '従業員 48人は 50人以下 → ○', '満たした基準は1つだけ。2つに届かない'],
            answer: '小会社ではない（純資産で判定すると、誤って2つ満たしたことになる）'
          }
        },
        {
          title: '小グループ（small group）',
          paras: ['親会社と子会社をまとめたグループにも、同じ形の基準がある（s383）。グループの数字を合計し、3つのうち2つ以上を満たせば小グループ。2年ルールも同じ。'],
          table: { caption: '2025年4月6日以後に始まる事業年度', head: ['基準', '純額 net', '総額 gross'], rows: [['売上高', '£15m 以下', '£18m 以下'], ['貸借対照表の合計', '£7.5m 以下', '£9m 以下'], ['従業員数（平均）', '50人以下', '50人以下']] },
          after: '純額はグループ内の取引を消した後、総額は消す前の数字。基準ごとにどちらを使ってもよい。'
        },
        {
          title: '例題2: 小グループか',
          example: {
            problem: 'Parent Ltd のグループ（前の年度も同じ結果）。売上高は総額 £17.0m・純額 £15.8m。貸借対照表の合計は総額 £9.6m・純額 £7.3m。従業員の年間平均は 70人。小グループか。',
            steps: ['売上高: 純額 £15.8m は £15m を超える。総額 £17.0m は £18m 以下 → ○', '貸借対照表の合計: 総額 £9.6m は £9m を超える。純額 £7.3m は £7.5m 以下 → ○', '従業員 70人は 50人を超える → ×', '基準ごとに純額と総額を選べるので、2つを満たす'],
            answer: '小グループ。Parent Ltd はグループの連結財務諸表を作らなくてよい'
          }
        },
        {
          title: '小会社・小グループになると何が軽くなるか',
          list: ['決算書を簡単な形で作れる。注記も少ない', '戦略報告書（strategic report）が要らない', '登記所に出す書類を減らせる（2028年4月からは損益計算書の提出が必要になる予定）', '監査の免除（s477）。ただし株主の10%以上が求めれば監査が必要（s476）', '小グループの親会社は、連結財務諸表を作らなくてよい'],
          after: 'なぜ？ 小さな会社の決算書を読むのは、主に経営者自身や少数の関係者。手間と費用を、得られる情報の価値に見合う量に抑える。'
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '公開会社（plc）は、数字が小さくても小会社のルールを使えない（s384）。銀行や保険会社も同じ。また、親会社が小会社になれるのは、グループ全体が小グループの基準を満たすときだけ。3つ全部ではなく2つで足りる点も間違えやすい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['売上高 £15m・資産の合計 £7.5m・従業員 50人のうち2つ以上で小会社', '判定が変わるのは2年続いたときだけ。売上は月数で按分。資産は負債を引く前', '効果: 簡単な決算書、監査の免除、小グループは連結不要。plc は使えない']
        },
        {
          title: '英単語',
          words: [
            ['small company', 'スモール カンパニー', '小会社'],
            ['small group', 'スモール グループ', '小グループ'],
            ['small companies regime', 'レジーム', '小会社のための軽いルール一式'],
            ['turnover', 'ターンオーバー', '売上高'],
            ['balance sheet total', 'バランスシート トータル', '貸借対照表の合計（資産の合計）'],
            ['audit exemption', 'オーディット イグゼンプション', '監査の免除'],
            ['group accounts', 'グループ アカウンツ', '連結財務諸表']
          ]
        }
      ],
      quiz: [
        { q: 'Delta Ltd, a private company which is not a parent company, has the following figures for a financial year beginning on 1 January 2026 (the position was the same in the previous year): turnover £14 million, total assets £8 million, net assets £5 million, average number of employees 60.\nDoes Delta Ltd qualify as a small company?', choices: ['Yes, because its turnover and its net assets are both within the limits', 'No, because it meets only one of the three conditions', 'Yes, because its turnover does not exceed £15 million', 'No, because its balance sheet total exceeds £5.1 million'], answer: 1, explain: '満たすのは売上高（£14m ≤ £15m）の1つだけ。貸借対照表の合計は資産の合計 £8m で、£7.5m を超える（純資産 £5m で判定するのは誤り）。従業員 60人は 50人を超える。小会社には2つ以上が必要。£5.1m は2025年4月より前の古い基準で、理由として誤り。' },
        { q: 'Which of the following companies cannot take advantage of the small companies regime, even if it meets the size conditions?', choices: ['A private company limited by guarantee', 'A private company with only one director', 'A public company', 'A private company with a single member'], answer: 2, explain: '公開会社は小会社のルールを使えない（s384）。保証有限責任の私会社、取締役1人の会社、株主1人の会社は、数字の基準を満たせば使える。' },
        { q: 'A newly formed company has a first financial period of 9 months. What is the turnover threshold (in £ million) that it must not exceed to meet the turnover condition for a small company?', type: 'number', answer: 11.25, unit: '£m', explain: '12か月でないときは売上高の基準を按分する。£15m × 9/12 ＝ £11.25m。£15m のまま使うと誤り。' },
        { q: 'Epsilon Ltd は2026年度と2027年度に小会社の基準を満たし、小会社だった。2028年度は売上高と従業員数の基準を超えた（資産の合計の基準だけ満たした）。2028年度の判定は？', choices: ['小会社のまま。基準を満たさないのが1年だけなので', '小会社でなくなる。2つの基準を超えたので', '小会社でなくなる。売上高の基準を超えたので', '2029年度にさかのぼって判定する'], answer: 0, explain: '2年ルール。小会社でなくなるのは、基準を満たさない年が2年続いたとき。2029年度も満たさなければ、2029年度から小会社でなくなる。' },
        { q: 'Kappa Ltd is the parent company of a group. The group has the following aggregate figures for a financial year beginning on 1 January 2026 (the position was the same in the previous year): turnover £16 million net and £17.5 million gross; balance sheet total £8 million net and £9.5 million gross; average number of employees 45.\nDoes the group qualify as a small group?', choices: ['No, because its net turnover and its net balance sheet total both exceed the limits', 'No, because a parent company can never take advantage of the small companies regime', 'Yes, because it meets all three conditions', 'Yes, because it meets the turnover condition (on the gross figure) and the employees condition'], answer: 3, explain: '売上高: 純額 £16m は £15m を超えるが、総額 £17.5m は £18m 以下 → 満たす。貸借対照表の合計: 純額 £8m は £7.5m を、総額 £9.5m は £9m を超える → 満たさない。従業員 45人 → 満たす。2つなので小グループ。純額だけで判定すると、誤って「満たさない」になる。基準ごとに純額と総額を選べる（s383）。' },
        { q: '小会社が監査の免除を受けていても監査が必要になるのは、どんなときか。', choices: ['取締役が1人だけのとき', '株主の10%以上が監査を求めたとき', '従業員が1人でも増えたとき', '会社が借入をしているとき'], answer: 1, explain: '発行株式の額面の10%以上を持つ株主（株式のない会社は株主数の10%以上）が求めれば、監査が必要になる（s476）。' }
      ]
    },
    {
      id: 'B054',
      no: 54,
      title: '有限責任と別個の法人格',
      goal: '会社が株主とは別の「人」であること（Salomon 事件）と、株主の有限責任（未払込額まで）の意味を説明し、株主の追加負担を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(d)'],
      slides: [
        {
          title: '屋台を会社にしたら',
          paras: ['お祭りの屋台を、自分で株式会社にして始めたとする。会社が借金を残してつぶれても、自分の家や貯金までは取られない。', '理由は2つある。会社は法律上、自分とは別の「人」（法人）であること。そして、株主の責任は出資した分までに限られること。この2つが、会社法のいちばんの土台になる。']
        },
        {
          title: '別個の法人格（separate legal personality）',
          formula: '会社 ＝ 株主・取締役とは別の、法律上の人（legal person）',
          list: ['自分の名前で財産を持つ。会社の財産は株主のものではない', '自分の名前で契約し、訴え、訴えられる', '借金は会社自身の借金', '株主が入れ替わったり亡くなったりしても、会社は続く（perpetual succession、永続性）']
        },
        {
          title: '有限責任（limited liability）',
          formula: '株主の責任 ＝ 持っている株式の未払込額まで（株式有限責任会社）',
          paras: ['全額払い込んだ株主は、会社がつぶれても追加で払う必要はない。まだ払っていない分があれば、その分だけ払う。保証有限責任会社なら、約束した保証額まで（B052）。', '有限なのは株主の責任で、会社自身の責任ではない。会社は自分の借金を、財産がある限り全部返す責任を負う。']
        },
        {
          title: '例題: 株主の追加負担',
          example: {
            problem: 'A さんは Eta Ltd の £1 株を 5,000 株持っている。1株あたり 60p しか払い込んでいない。Eta Ltd は £1m の借金を残して清算された。A さんが追加で払う最大の額は？',
            steps: ['1株あたりの未払込額: £1 − £0.60 ＝ £0.40', '未払込額の合計: 5,000 × £0.40 ＝ £2,000', '会社の借金 £1m は会社の借金。A さんの責任は未払込額まで'],
            answer: '£2,000（全額払込済みなら £0）'
          }
        },
        {
          title: 'Salomon 事件の構造',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="Salomon さん個人と Salomon 社は別の人。Salomon さんは株主であり、担保付きの社債を持つ債権者でもあった" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">Salomon 事件の構造</text><rect x="110" y="48" width="220" height="50" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="79" text-anchor="middle" font-size="15" fill="var(--ink)">Salomon さん（個人）</text><line x1="220" y1="98" x2="220" y2="184" stroke="var(--ink)" stroke-width="1.5"/><polygon points="214,176 226,176 220,188" fill="var(--ink)"/><text x="232" y="122" fill="var(--ink)">事業を会社に売却</text><text x="232" y="144" fill="var(--ink)">株主（ほぼ全株）</text><text x="232" y="166" fill="var(--ink)">担保付き社債 £10,000</text><rect x="110" y="190" width="220" height="50" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="221" text-anchor="middle" font-size="15" fill="var(--ink)">Salomon 社（別の法人）</text><text x="220" y="268" text-anchor="middle" fill="var(--ink)">会社の借金は会社のもの</text><text x="220" y="290" text-anchor="middle" fill="var(--quiet)">Salomon さんは担保付きの債権者として先に返済を受けた</text></svg>`,
          caption: 'Salomon v A Salomon & Co Ltd（1897年、貴族院）'
        },
        {
          title: 'Salomon 事件の判断',
          paras: ['靴職人の Salomon さんは、自分の事業を新しい会社に売り、代金として株式と担保付きの社債（debenture）を受け取った。株式は Salomon さんがほぼ全部、妻と子ども5人が1株ずつ持った。会社は約1年後につぶれ、担保のない債権者には十分に払えなかった。', '債権者側は「会社は Salomon さんの分身だから、本人が払え」と主張した。貴族院は、会社は正しく設立された別の人であり、Salomon さんに会社の借金を払う責任はないと判断した。担保付きの債権者として、先に返済を受けることも認めた。']
        },
        {
          title: '別個の法人格は両方向に効く',
          list: ["Lee v Lee’s Air Farming Ltd（1961年、枢密院）: Lee さんはほぼ全株を持つ取締役だったが、会社に雇われたパイロットでもあった。会社と本人は別の人なので、本人は会社の従業員になれる", 'Macaura v Northern Assurance Co Ltd（1925年）: 会社の木材に、ほぼ全株を持つ株主が自分の名前で保険をかけた。木材は会社の財産なので、株主には保険の利益（insurable interest）がなく、保険金は出なかった'],
          after: '別の人だという原則は、株主を守るだけでなく、株主に不利に働くこともある。'
        },
        {
          title: 'なぜ？ 法人格と有限責任がある理由',
          paras: ['失敗したら家まで失うなら、新しい事業に挑む人は減る。責任を出資額までに限れば、多くの人が安心して出資でき、大きな事業にお金が集まる。', 'K1 で学んだ事業体の概念（business entity concept）は、会計上「店と店主を分けて記録する」考え方だった。個人事業主の場合、法律上は店と店主は同じ人で、借金は店主が全部負う。会社は会計上だけでなく、法律上も別の人になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「有限責任会社は、借金を一部しか返さなくてよい」は誤り。会社は自分の借金を、財産がある限り全部返す。有限なのは株主の責任。また、取締役が銀行の借入を個人保証すれば、保証の契約によって個人として責任を負う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['会社は株主とは別の人。財産・契約・借金は会社のもの（Salomon 事件）', '株主の責任は株式の未払込額まで。全額払込済みなら追加負担なし', '原則は両方向に効く: 株主は従業員になれる（Lee）、会社の財産に保険をかけられない（Macaura）']
        },
        {
          title: '英単語',
          words: [
            ['separate legal personality', 'パーソナリティ', '別個の法人格'],
            ['legal person', 'リーガル パーソン', '法人（法律上の人）'],
            ['limited liability', 'リミテッド ライアビリティ', '有限責任'],
            ['perpetual succession', 'パーペチュアル サクセッション', '永続性（株主が替わっても会社は続く）'],
            ['debenture', 'ディベンチャー', '社債（会社の借入の証書）'],
            ['insurable interest', 'インシュアラブル インタレスト', '保険をかけられる利益'],
            ['amount unpaid on shares', '', '株式の未払込額']
          ]
        }
      ],
      quiz: [
        { q: 'Which case established that a company is a separate legal person from its members, even where one person holds almost all of its shares?', choices: ['Salomon v A Salomon & Co Ltd', 'Gilford Motor Co Ltd v Horne', 'Adams v Cape Industries plc', 'Jones v Lipman'], answer: 0, explain: 'Salomon 事件（1897年）が別個の法人格の原則を確立した。Gilford と Jones v Lipman は、逆にベールを取り払った例。Adams v Cape はグループ会社でもベールを取り払わなかった例（B055）。' },
        { q: 'B holds 20,000 ordinary shares of 50p each in Theta Ltd. 20p per share has been paid. Theta Ltd has gone into liquidation with large debts. What is the maximum further amount (in £) that B can be required to contribute?', type: 'number', answer: 6000, unit: '£', explain: '未払込額は1株 50p − 20p ＝ 30p。20,000 × £0.30 ＝ £6,000。払込済みの £4,000 や、額面の合計 £10,000 と答える間違いが多い。' },
        { q: 'M owned almost all the shares in a company and was also its creditor. M insured the company’s timber in his own name. The timber was destroyed by fire. Which of the following is correct?', choices: ['The insurer must pay M, because M owned almost all the shares', 'The insurer must pay M, because M was a creditor of the company', 'The insurer need not pay M, because the timber belonged to the company and M had no insurable interest', 'The insurer need not pay M, because a member may never insure any property'], answer: 2, explain: 'Macaura v Northern Assurance（1925年）。木材は会社の財産で、株主の財産ではない。株主にも債権者にも、会社の個別の財産について保険の利益はないとされた。株主が自分の財産に保険をかけるのは当然できる。' },
        { q: '株式有限責任会社について正しいものは？', choices: ['会社は借金の一部だけを返せばよい', '会社は自分の借金を全部返す責任を負い、株主の責任が未払込額までに限られる', '株主は会社の借金を全部返す責任を負う', '取締役は会社の借金を必ず個人で返す'], answer: 1, explain: '有限なのは株主の責任。会社自身は財産がある限り借金を全部返す。取締役は、個人保証や不正などの例外がなければ、会社の借金を個人で負わない。' },
        { q: 'Lee v Lee’s Air Farming Ltd で示されたことは？', choices: ['ほぼ全株を持つ取締役でも、会社に雇われた従業員になれる', '株主が1人の会社は、別個の法人格を持たない', '取締役は会社の従業員になれない', '会社が事故を起こしたら、株主が全部責任を負う'], answer: 0, explain: '会社と本人は別の人なので、本人が会社と雇用契約を結べる。Lee さんは仕事中の墜落事故で亡くなり、妻は従業員の死亡への補償を受けられた。' },
        { q: 'Which of the following describes "perpetual succession"?', choices: ['A company may issue shares to the public', 'A company continues in existence even if its members change or die', 'A company must hold a general meeting every year', 'A company’s directors are appointed for life'], answer: 1, explain: '永続性は、株主の入れ替わりや死亡に関係なく会社が続くこと。別個の法人格から生まれる性質。株式の公募や年次総会は公開会社のルール（B052）。' }
      ]
    },
    {
      id: 'B055',
      no: 55,
      title: '法人格のベールを取り払うとき',
      goal: '法人格のベール（veil of incorporation）が法律と裁判所によって取り払われる場面を、条文と判例（Gilford、Jones v Lipman、Prest、Adams v Cape など）で見分けられるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(d)'],
      slides: [
        {
          title: '布の向こうの人',
          paras: ['ベール（veil）は顔を覆う薄い布。会社という布の向こうには、実際に会社を動かしている株主や取締役がいる。', 'ふだん法律は、この布をめくらない（Salomon 事件、B054）。でも、布を悪だくみの隠れみのに使ったときなどは、例外としてめくり、中の人に責任を負わせる。これを「ベールを取り払う（lifting / piercing the veil）」という。']
        },
        {
          title: 'ベールのイメージ',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="債権者は通常は会社までしか責任を問えない。例外のときだけ、ベールを越えて株主や取締役の個人に届く" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">法人格のベール</text><rect x="20" y="48" width="290" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="165" y="76" text-anchor="middle" font-size="15" fill="var(--ink)">会社の債権者・相手方</text><rect x="20" y="106" width="290" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="165" y="134" text-anchor="middle" font-size="15" fill="var(--ink)">会社（別個の法人）</text><line x1="20" y1="166" x2="420" y2="166" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="8 6"/><text x="165" y="188" text-anchor="middle" fill="var(--ink)">ベール（veil of incorporation）</text><rect x="20" y="200" width="290" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="165" y="228" text-anchor="middle" font-size="15" fill="var(--ink)">株主・取締役（個人）</text><text x="368" y="64" text-anchor="middle" fill="var(--ink)">例外だけ</text><line x1="368" y1="72" x2="368" y2="198" stroke="var(--ink)" stroke-width="1.5"/><polygon points="362,190 374,190 368,202" fill="var(--ink)"/><text x="220" y="268" text-anchor="middle" fill="var(--quiet)">通常は会社で止まる。例外のときだけ個人に届く</text></svg>`,
          caption: '取り払う道は2つ: 法律（statute）によるものと、裁判所（courts）によるもの。'
        },
        {
          title: '法律による場合①：会社が清算されるとき',
          list: ['不正取引（fraudulent trading、Insolvency Act 1986 s213）: 債権者をだます目的で事業が行われたとき、それを知って関わった人に、裁判所が会社の財産への拠出を命じる', '不当取引（wrongful trading、IA 1986 s214）: 支払不能の清算を避けられないと知るべきだったのに、取締役が取引を続けたとき', 'つぶれた会社の名前の再使用（IA 1986 s216・s217）: 支払不能で清算された会社の、清算前12か月以内の取締役が、清算から5年以内に同じか似た名前の会社の経営に関わると、その間のその会社の借金を個人で負う（phoenix company の対策）'],
          after: '不正取引と不当取引の詳しい要件は B107 で学ぶ。'
        },
        {
          title: '法律による場合②：そのほか',
          list: ['資格剥奪中の取締役（Company Directors Disqualification Act 1986 s15）: 資格を剥奪された人が経営に関わると、その間の会社の借金を個人で連帯して負う', '取引開始の証明書のない公開会社（CA 2006 s767）: 会社が21日以内に義務を果たさないと、取締役が相手方の損失を連帯して補償する（B052）', '連結財務諸表（CA 2006 s399）: 会計上、親会社と子会社を1つのグループとして報告させる']
        },
        {
          title: '裁判所による場合①：見せかけの会社',
          list: ['Gilford Motor Co Ltd v Horne（1933年）: 元社長の Horne は、退職後に元の会社の顧客を勧誘しない約束をしていた。そこで会社を作り、その会社を通して勧誘した。裁判所は、会社を義務逃れの見せかけ（sham / façade）とみて、本人と会社の両方に勧誘の差止めを命じた', 'Jones v Lipman（1962年）: Lipman は土地を Jones に売る契約をした後、売りたくなくなり、自分が支配する会社に土地を移した。裁判所は、本人と会社の両方に、契約どおり土地を引き渡すよう命じた（特定履行）']
        },
        {
          title: '裁判所による場合②：Prest 事件のルール',
          paras: ['Prest v Petrodel Resources Ltd（2013年、最高裁判所）は、裁判所がベールを取り払える場面をはっきり限定した。', 'すでにある法律上の義務や制限から逃れるため、または、その実行を妨げるために、自分が支配する会社をわざと間に入れたとき（evasion principle、回避の原則）。この場合に限り、その不正な利益を奪うのに必要な範囲で取り払う。']
        },
        {
          title: 'Prest 事件の結論と「隠蔽」との区別',
          paras: ['会社が本当の当事者を隠しているだけのとき（concealment principle、隠蔽の原則）は、裁判所は会社の後ろの事実を見る。でも、これはベールを取り払うことではない。', 'この事件の夫は、離婚の前から家を会社名義にしていた。逃れる義務がまだなかったので回避にあたらず、ベールは取り払われなかった。ただし家は夫のために信託で保有されていたと判断され、妻への財産分与に使えた。']
        },
        {
          title: '裁判所による場合③：グループ会社と戦時',
          list: ['Adams v Cape Industries plc（1990年）: 親会社と子会社が1つの経済単位（single economic unit）として動いていても、それだけではベールを取り払わない。将来の責任を子会社に負わせるためにグループを組むことも正当とされた', 'DHN Food Distributors v Tower Hamlets（1976年）はグループを1つとみたが、Woolfson v Strathclyde Regional Council（1978年、貴族院）で疑問視され、今は頼れない', 'Daimler Co Ltd v Continental Tyre and Rubber Co（1916年）: 戦時に、英国の会社を支配しているのが敵国の人なら、会社を敵性（enemy character）があると扱った']
        },
        {
          title: 'なぜ？ 裁判所がめったにめくらない理由',
          paras: ['ベールを簡単にめくれるなら、有限責任を信じて出資する人がいなくなる。取引の相手方も、会社と取引していると分かって契約している。だから原則は Salomon 事件のとおり、会社と株主を分ける。', '一方で、すでに負っている義務から逃げる道具に会社を使うことまでは許さない。英国の裁判所は「義務逃れ」に絞って例外を認める。日本にも法人格否認の法理があるが、英国の例外はかなり狭いと考えておく。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「グループ会社は1つの経済単位なので、親会社が子会社の借金を負う」は誤り（Adams v Cape）。また、会社がつぶれて取締役が個人保証の責任を負うのは、保証の契約によるもので、ベールを取り払ったわけではない。会社を使って将来の責任を避けることは正当で、すでにある義務から逃げることが問題になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['法律による例: 不正取引 s213、不当取引 s214、名前の再使用 s216・s217、資格剥奪中の取締役 CDDA s15、取引開始の証明書 s767', '裁判所による例: 義務逃れの見せかけ（Gilford、Jones v Lipman）。Prest で回避の原則に限定', 'グループというだけでは取り払わない（Adams v Cape）']
        },
        {
          title: '英単語',
          words: [
            ['veil of incorporation', 'ヴェール', '法人格のベール'],
            ['lifting / piercing the veil', 'リフティング / ピアシング', 'ベールを取り払う'],
            ['sham / façade', 'シャム / ファサード', '見せかけ・隠れみの'],
            ['evasion principle', 'イヴェイジョン', '回避の原則（Prest 事件）'],
            ['single economic unit', 'エコノミック ユニット', '1つの経済単位'],
            ['fraudulent trading', 'フロードゥレント', '不正取引'],
            ['wrongful trading', 'ロングフル', '不当取引']
          ]
        }
      ],
      quiz: [
        { q: 'H, the former managing director of a company, had agreed not to solicit the company’s customers after leaving. He then formed a new company, which solicited those customers. Which of the following is most likely?', choices: ['No remedy is available, because the new company is a separate legal person', 'An injunction may be granted against H only, not the new company', 'An injunction may be granted against both H and the new company, because the company is a sham to evade H’s obligation', 'The new company must be wound up, but H is not affected'], answer: 2, explain: 'Gilford Motor Co Ltd v Horne（1933年）。会社は義務逃れの見せかけとされ、本人と会社の両方に差止めが命じられた。別個の法人格を理由に何もできない、とはならない。' },
        { q: 'Which of the following best states the decision in Adams v Cape Industries plc?', choices: ['A parent company is always liable for the debts of its subsidiaries', 'The court will not lift the veil merely because a group operates as a single economic unit', 'The veil will be lifted whenever it is in the interests of justice', 'A company with one shareholder has no separate personality'], answer: 1, explain: 'Adams v Cape では、1つの経済単位というだけでは取り払わないとされた。「正義のためならいつでも」という広い基準は否定されている。株主1人の会社も別の人（Salomon）。' },
        { q: 'Which of the following is an example of the veil of incorporation being lifted by statute?', choices: ['A director who personally guarantees a bank loan to the company', 'A person who acts as a director while disqualified, making him personally liable for the company’s debts incurred during that time', 'A shareholder who has paid in full for his shares', 'A company which sues its own director for breach of duty'], answer: 1, explain: 'CDDA 1986 s15 は、法律によってベールを取り払う例。個人保証は契約による責任で、ベールとは関係がない。全額払込済みの株主は追加負担がない。会社が取締役を訴えるのは、会社が別の人だからできること。' },
        { q: 'Prest v Petrodel Resources Ltd（2013年）で示された、裁判所がベールを取り払える場面は？', choices: ['すでにある義務や制限から逃れるため、自分が支配する会社をわざと間に入れたとき', '親会社と子会社が1つの経済単位として動いているとき', '会社が借金を返せなくなったとき', '株主が1人しかいないとき'], answer: 0, explain: 'Prest は回避の原則（evasion principle）に限定した。グループであること、支払不能、株主1人は、それだけでは理由にならない。' },
        { q: 'Jones v Lipman で、土地を自分が支配する会社に移した Lipman に対して裁判所が命じたことは？', choices: ['会社は別の人なので、何も命じなかった', 'Lipman だけに損害賠償を命じた', '会社を清算するよう命じた', 'Lipman と会社の両方に、契約どおり土地を引き渡すよう命じた'], answer: 3, explain: '会社は契約から逃げるための見せかけとされ、本人と会社の両方に特定履行（specific performance）が命じられた。' },
        { q: 'つぶれた会社の取締役が、清算から5年以内に同じか似た名前の新会社の経営に関わったときの効果は？', choices: ['何も問題はない', '新会社の借金を、その取締役が個人で負う', '新会社が自動的に清算される', '元の会社の借金だけを負う'], answer: 1, explain: 'IA 1986 s216・s217 の名前の再使用（phoenix company の問題）。関わった間の新会社の借金を個人で負う。法律によってベールを取り払う例。' }
      ]
    }
  ],
  cards: [
    { id: 'B052-1', lesson: 'B052', q: '株主の責任で分けた会社の3種類は？', a: '株式有限責任（by shares）・保証有限責任（by guarantee）・無限責任（unlimited）' },
    { id: 'B052-2', lesson: 'B052', q: '公開会社（plc）の最低資本と払込のルールは？', a: '割当済みの額面 £50,000 以上。各株は額面の1/4以上とプレミアム全額を払込' },
    { id: 'B052-3', lesson: 'B052', q: '取締役の最低人数は？（私会社・公開会社）', a: '私会社1人、公開会社2人。どちらも株主は1人でよい' },
    { id: 'B052-4', lesson: 'B052', q: 'trading certificate とは？', a: '公開会社として設立した会社が、事業や借入を始める前に登記所から受ける証明書（s761）' },
    { id: 'B052-5', lesson: 'B052', q: '私会社ができないことは？', a: '株式を公衆に売り出すこと（公募、s755）。上場もできない' },
    { id: 'B052-6', lesson: 'B052', q: 'なぜ公開会社だけルールが厳しい？', a: '株式を広く売り出すので、会社を調べられない知らない投資家を守るため' },
    { id: 'B053-1', lesson: 'B053', q: '小会社の3つの基準（2025年4月6日以後の年度）は？', a: '売上高 £15m・資産の合計 £7.5m・従業員平均50人。2つ以上で小会社' },
    { id: 'B053-2', lesson: 'B053', q: '小会社の判定が変わるのはいつ？', a: '基準を満たす（満たさない）年が2年続いたとき。初年度はその年だけで判定' },
    { id: 'B053-3', lesson: 'B053', q: 'balance sheet total とは？', a: '資産の合計。負債を引く前の金額（純資産ではない）' },
    { id: 'B053-4', lesson: 'B053', q: '6か月の事業年度の売上高の基準は？', a: '£15m × 6/12 ＝ £7.5m（月数で按分）' },
    { id: 'B053-5', lesson: 'B053', q: '小グループの基準（純額 / 総額）は？', a: '売上高 £15m / £18m、資産の合計 £7.5m / £9m、従業員50人。基準ごとに選べる' },
    { id: 'B053-6', lesson: 'B053', q: '小会社・小グループになる主な効果は？', a: '簡単な決算書、戦略報告書不要、監査の免除、小グループの親は連結不要' },
    { id: 'B053-7', lesson: 'B053', q: '数字が小さくても小会社のルールを使えない会社は？', a: '公開会社（plc）。銀行や保険会社も使えない（s384）' },
    { id: 'B054-1', lesson: 'B054', q: '別個の法人格を確立した判例は？', a: 'Salomon v A Salomon & Co Ltd（1897年、貴族院）' },
    { id: 'B054-2', lesson: 'B054', q: '株式有限責任会社の株主の責任は？', a: '持っている株式の未払込額まで。全額払込済みなら追加負担なし' },
    { id: 'B054-3', lesson: 'B054', q: '有限なのは誰の責任？', a: '株主の責任。会社自身は財産がある限り借金を全部返す' },
    { id: 'B054-4', lesson: 'B054', q: 'Lee v Lee’s Air Farming のポイントは？', a: 'ほぼ全株を持つ取締役でも、会社の従業員になれる' },
    { id: 'B054-5', lesson: 'B054', q: 'Macaura v Northern Assurance のポイントは？', a: '会社の財産は株主のものではない。株主に保険の利益はない' },
    { id: 'B054-6', lesson: 'B054', q: 'perpetual succession とは？', a: '株主が替わったり亡くなったりしても、会社が続くこと' },
    { id: 'B055-1', lesson: 'B055', q: 'ベールを取り払う2つの道は？', a: '法律（statute）による場合と、裁判所（courts）による場合' },
    { id: 'B055-2', lesson: 'B055', q: '法律によってベールを取り払う例を3つ', a: '不正取引 s213、不当取引 s214、資格剥奪中の取締役 CDDA s15（ほか s216・s767）' },
    { id: 'B055-3', lesson: 'B055', q: 'Gilford Motor v Horne のポイントは？', a: '勧誘禁止の義務から逃げるための会社は見せかけ。本人と会社に差止め' },
    { id: 'B055-4', lesson: 'B055', q: 'Prest v Petrodel の回避の原則とは？', a: 'すでにある義務から逃れるため、支配する会社をわざと間に入れたときに限り取り払う' },
    { id: 'B055-5', lesson: 'B055', q: 'Adams v Cape Industries のポイントは？', a: 'グループが1つの経済単位というだけでは、ベールを取り払わない' },
    { id: 'B055-6', lesson: 'B055', q: '取締役の個人保証は、ベールを取り払うことか？', a: 'ちがう。保証の契約によって個人が責任を負うだけ' },
    { id: 'B055-7', lesson: 'B055', q: 'Prest の「回避」と「隠蔽」のちがいは？', a: '回避＝既存の義務から逃げる→取り払う。隠蔽＝後ろの事実を見るだけで取り払わない' }
  ]
});
