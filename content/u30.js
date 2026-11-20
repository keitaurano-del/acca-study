(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 30,
  part: 19,
  partTitle: '連結財務諸表',
  lessons: [
    {
      id: 'L146',
      no: 146,
      title: '親会社・子会社・支配',
      goal: '親会社・子会社・支配の意味を説明し、ある会社が別の会社を「支配している」かどうかを判断できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['H1(a)i', 'H1(a)ii', 'H1(a)iii', 'K1:G1(a)'],
      slides: [
        {
          title: '多数決で決められる人',
          paras: ['友だち5人でお金を出し合い、キッチンカーを始めた。大事なことは、出したお金の割合で多数決をする約束にした。', 'あなたが6割を出していれば、メニューも値段も店長も、あなたが決められる。ほかの4人が全員反対しても通る。', 'この「方針を自分で決められる力」が、会計でいう支配（control）のイメージになる。']
        },
        {
          title: '会社が会社を持つ',
          paras: ['たこ焼き屋の会社 Tako Co が、ソースを作る会社 Sauce Co の普通株（ordinary shares）を80%買った。', '普通株は1株＝1票。Sauce Co の株主総会では Tako Co が80%の票を持つので、取締役を選び、会社の方針を決められる。', 'このとき Tako Co を親会社（parent）、Sauce Co を子会社（subsidiary）と呼ぶ。2社を合わせてグループ（group）という。']
        },
        {
          title: '図で見るグループ',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="親会社が子会社の普通株の80%を持ち、2社でグループになる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">親会社と子会社でグループになる</text><rect x="20" y="52" width="400" height="212" rx="12" fill="none" stroke="var(--edge)" stroke-width="1.25" stroke-dasharray="6 5"/><text x="36" y="76" fill="var(--quiet)">グループ（group）</text><rect x="110" y="88" width="220" height="56" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="113" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Tako Co＝親会社</text><text x="220" y="134" text-anchor="middle" font-size="12.5" fill="var(--ink)">parent</text><path d="M220 144L220 182" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M213 176L220 188L227 176z" fill="var(--edge)"/><text x="236" y="170" fill="var(--ink)">普通株の80%を持つ</text><rect x="110" y="188" width="220" height="56" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="213" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Sauce Co＝子会社</text><text x="220" y="234" text-anchor="middle" font-size="12.5" fill="var(--quiet)">subsidiary</text><text x="220" y="288" text-anchor="middle" fill="var(--ink)">2社を1つのまとまりとして成績表を作る</text></svg>`,
          caption: '親会社が1つでも子会社を持てば、グループになる。子会社が2社、3社あってもよい。'
        },
        {
          title: '3つの言葉の定義',
          list: ['親会社（parent）: 1つ以上の子会社を支配している会社', '子会社（subsidiary）: ほかの会社（親会社）に支配されている会社', '支配（control）: 相手の会社を動かす力があり、その会社からのもうけ（リターン）を受ける立場にあって、その力でもうけの大きさを左右できること'],
          after: '会計のルールでは、支配があるかどうかで「子会社かどうか」が決まる。株を何%持つかは、支配を判断する手がかりの1つ。'
        },
        {
          title: '支配の3つの要素',
          paras: ['ルール（IFRS 10）では、次の3つがそろうと支配がある。'],
          numbered: ['力（power over the investee）: 相手の会社の大事な活動を決める力がある', 'リターン（exposure, or rights, to variable returns）: 相手の会社の調子で、自分のもうけ（配当など）が増えたり減ったりする', '力とリターンのつながり: その力を使って、自分のリターンの大きさを左右できる']
        },
        {
          title: '目安は「普通株の50%超」',
          paras: ['株主総会は多数決。議決権（voting rights）のある普通株を半分より多く持てば、取締役を選べて方針を決められる。だから、ふつうは支配がある。'],
          formula: '支配の目安 ＝ 議決権のある普通株の 50% 超',
          note: { kind: 'tip', text: '優先株（preference shares）はふつう投票権がないので数えない。また「50%超」なので、ちょうど50%は目安を満たさない。' }
        },
        {
          title: '50%以下でも支配になるとき',
          paras: ['持っている普通株が半分以下でも、次のどれかがあれば支配になる。'],
          list: ['ほかの株主との約束で、議決権の過半数を動かせる', '法律や契約で、会社の財務と営業の方針を決める力がある', '取締役会のメンバーの過半数を選んだり、辞めさせたりできる', '取締役会で過半数の票を投じられる'],
          after: '何%持つかという形より、本当に決められるかという中身で判断する。実質優先（substance over form）の考え方。'
        },
        {
          title: 'なぜ？ 「支配」で線を引く理由',
          paras: ['親会社は、子会社のお金や工場を自分の思いどおりに使える。外から見ると、2社は実質1つの会社と同じ。', 'だから親会社の株主や銀行には、グループ全体の姿を見せる必要がある。', '親会社が子会社を「買った（取得した）」と見て、子会社の資産・負債を取得日の公正価値で取り込み、のれんを計算するやり方を取得法（acquisition accounting）という。K1 はこの言葉で出る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「株を一番多く持っている株主＝親会社」ではない。たとえば普通株の35%が最大でも、ほかに権利がなければ支配はない。逆に30%でも、取締役の過半数を選べれば支配がある。優先株を足して計算するのも間違い。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['親会社＝子会社を支配する会社、子会社＝支配される会社', '支配の目安は、議決権のある普通株の50%超（優先株は数えない）', '50%以下でも、取締役の過半数を選べるなど本当に決められれば支配']
        },
        {
          title: '英単語',
          words: [
            ['parent', 'ペアレント', '親会社'],
            ['subsidiary', 'サブシディアリー', '子会社'],
            ['control', 'コントロール', '支配'],
            ['group', 'グループ', '親会社と子会社のまとまり'],
            ['voting rights', 'ボーティング・ライツ', '議決権（株主総会で投票する権利）'],
            ['variable returns', 'ヴェアリアブル・リターンズ', '変動するリターン（配当など）'],
            ['acquisition accounting', 'アクイジション・アカウンティング', '取得法（子会社を買ったものとして連結する方法）']
          ]
        }
      ],
      quiz: [
        { q: 'ある会社が別の会社を支配しているかどうかの、ふつうの目安は？', choices: ['議決権のある普通株の50%超を持つ', '優先株を含めた全部の株の50%超を持つ', '普通株の20%以上を持つ', 'ほかのどの株主よりも多くの株を持つ'], answer: 0, explain: '方針は株主総会の多数決で決まるので、票（議決権）のある普通株の半分より多くが目安。優先株はふつう票がない。20%以上は関連会社の目安。一番多くても半分以下なら決められない。' },
        { q: 'Which of the following does NOT, on its own, indicate that A Co controls B Co?', choices: ['A Co holds 60% of the ordinary (voting) shares of B Co', 'A Co can appoint or remove a majority of the board of directors of B Co', 'A Co holds 70% of the non-voting preference shares of B Co', 'A Co has power to govern the financial and operating policies of B Co under an agreement'], answer: 2, explain: '投票権のない優先株は、何%持っても方針を決める力にならない。ほかの3つは、どれも支配を示す。' },
        { q: 'C Co holds 40% of the ordinary shares of D Co and has the right to appoint 5 of the 8 directors of D Co. Which statement is correct?', choices: ['D Co is a subsidiary of C Co because C Co controls the board', 'D Co is not a subsidiary because C Co holds less than 50% of the shares', 'D Co is a subsidiary only if C Co also holds preference shares', 'C Co is a subsidiary of D Co'], answer: 0, explain: '取締役8人のうち5人（過半数）を選べるので、方針を決められる＝支配。50%以下でも子会社になる。株の割合だけで判断するのはよくある間違い。' },
        { q: '支配の3つの要素に入らないものは？', choices: ['相手の会社の大事な活動を決める力がある', '相手の会社の調子で、自分のリターンが変わる', 'その力を使って、リターンの大きさを左右できる', '相手の会社の株を100%持っている'], answer: 3, explain: '100%持つ必要はない。力・リターン・その2つのつながり、の3つがそろえば支配。' },
        { q: 'According to IFRS 10, an investor controls an investee when the investor:', choices: ['is exposed, or has rights, to variable returns from its involvement with the investee and has the ability to affect those returns through its power over the investee', 'holds more than 50% of all the shares of the investee, including preference shares', 'has significant influence over the financial and operating policies of the investee', 'holds 20% or more of the voting rights of the investee'], answer: 0, explain: '支配の定義は「力・変動するリターン・その2つのつながり」の3つ。2つ目は優先株まで数えた間違い。3つ目と4つ目は関連会社（重要な影響力、20%以上）の目安で、支配ではない。' },
        { q: 'Tako Co は Sauce Co の普通株を45%しか持たないが、契約で Sauce Co の方針を全部決められる。Sauce Co を子会社と判断する根拠になる考え方は？', choices: ['実質優先（substance over form）', '慎重性（prudence）', '継続企業（going concern）', '重要性（materiality）'], answer: 0, explain: '持ち株の割合（形）より、本当に方針を決められるか（中身）で判断する。これが実質優先の考え方。' }
      ]
    },
    {
      id: 'L147',
      no: 147,
      title: '連結財務諸表・非支配持分・単純投資',
      goal: '連結財務諸表・非支配持分・単純投資の意味と、子会社の資産・負債を100%合算する理由を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['H1(a)iv', 'H1(a)v', 'H1(a)vi', 'K1:G1(a)'],
      slides: [
        {
          title: '家族全体のお金を見る',
          paras: ['親が、子どもの名前の口座に10万円入れた。親の家計簿には「子どもの口座へ 10万円」の1行しかない。', 'でも子どもの口座では、その10万円で自転車を買い、ローンも組んでいるかもしれない。', '家族全体の本当の持ち物と借金を知るには、親と子の家計簿を合わせる必要がある。会社のグループも同じ。']
        },
        {
          title: '親会社だけの成績表では見えない',
          paras: ['Tako Co は Sauce Co の普通株の80%を $280,000 で買った。Tako Co だけの財政状態計算書（SFP）には、子会社への投資（investment in subsidiary）$280,000 が非流動資産として1行載るだけ。', 'Sauce Co の工場・在庫・借入金は、どこにも出てこない。これでは Tako Co の株主は、グループ全体の姿が分からない。']
        },
        {
          title: '連結財務諸表とは',
          paras: ['連結財務諸表（consolidated financial statements）は、親会社と子会社を1つの会社（single economic entity）として見せる財務諸表。グループ財務諸表（group financial statements）ともいう。親会社が作る。'],
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="親会社の投資の1行を、子会社の資産と負債100%に入れかえる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">投資の1行を、中身に入れかえる</text><rect x="20" y="56" width="176" height="128" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="108" y="82" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Tako Co だけ</text><text x="108" y="112" text-anchor="middle" fill="var(--ink)">自分の資産・負債</text><text x="108" y="140" text-anchor="middle" fill="var(--ink)">＋ 子会社への投資</text><text x="108" y="164" text-anchor="middle" fill="var(--quiet)">$280,000</text><path d="M202 120L232 120" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M228 113L240 120L228 127z" fill="var(--edge)"/><rect x="244" y="56" width="176" height="128" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="332" y="82" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">連結</text><text x="332" y="112" text-anchor="middle" fill="var(--ink)">Tako Co の資産・負債</text><text x="332" y="140" text-anchor="middle" fill="var(--ink)">＋ Sauce Co の</text><text x="332" y="164" text-anchor="middle" fill="var(--ink)">資産・負債 100%</text><text x="20" y="226" font-size="15" font-weight="600" fill="var(--ink)">80%しか持っていなくても、100%足す</text><text x="20" y="254" fill="var(--ink)">残り20%の持ち主の分＝非支配持分（NCI）</text><text x="20" y="280" fill="var(--ink)">資本の部に、別の行で載せる</text></svg>`
        },
        {
          title: 'なぜ？ 80%でも100%足す理由',
          paras: ['Tako Co は Sauce Co を支配している。工場の80%だけを動かせるのではなく、工場を丸ごと思いどおりに使える。だから資産と負債は100%（全部）合算する。', 'その代わり、Sauce Co の資本の20%はほかの株主のもの。この「親会社のものではない分」を、資本の中で別に示す。']
        },
        {
          title: '非支配持分（NCI）',
          paras: ['非支配持分（non-controlling interest、NCI）は、子会社の資本のうち、親会社のものではない部分。80%子会社なら、ほかの株主の20%の分。'],
          table: {
            caption: '連結 SFP の資本の部（形だけ）',
            head: ['資本（equity）', '$'],
            rows: [['株式資本（親会社の分だけ）', 'X'], ['株式払込剰余金（親会社の分だけ）', 'X'], ['利益剰余金', 'X'], ['親会社の株主に帰属する資本', 'X'], ['非支配持分（NCI）', 'X']],
            total: ['資本合計', 'X']
          },
          after: 'NCI は資本の中に、親会社の株主の分とは別の行で載る。返すお金ではないので負債ではない。'
        },
        {
          title: '損益計算書では最後に分ける',
          paras: ['連結の損益計算書（SPL）も、子会社の売上や費用を100%足す。そして一番下で、当期の利益を「親会社の株主の分（owners of the parent）」と「NCI の分」に分けて示す。'],
          example: {
            problem: 'Tako Co は Sauce Co の80%を持つ。Sauce Co の当期の利益は $50,000。NCI の分はいくら？',
            steps: ['NCI の割合は 100% − 80% ＝ 20%', 'NCI の分は $50,000 × 20% ＝ $10,000', '親会社の株主の分は $50,000 × 80% ＝ $40,000'],
            answer: 'NCI に帰属する利益は $10,000'
          }
        },
        {
          title: '単純投資（trade investment）',
          paras: ['支配も、重要な影響力（significant influence、方針の決定に加われる力。L157 で学ぶ）もない株の持ち方を、単純投資（trade investment、simple investment）という。ふつう普通株の20%未満。', '連結はしない。自分の SFP に投資（investment）として資産で載せ、受け取った配当を収益にする。'],
          table: {
            caption: '持っている普通株の割合と扱い（目安）',
            head: ['割合', '関係と扱い'],
            rows: [['50%超', '子会社 → 連結（100%合算＋NCI）'], ['20%〜50%', '関連会社（associate）→ 持分法（L157〜158）'], ['20%未満', '単純投資 → 投資として資産、配当を収益']]
          }
        },
        {
          title: 'なぜ？ 連結が必要な理由',
          paras: ['親会社だけの成績表では、子会社の資産・負債・利益が「投資」の1行に隠れてしまう。', 'たとえば借金を全部子会社に背負わせれば、親会社の成績表だけはきれいに見える。連結すれば、子会社の借金もグループの負債として表に出る。', '親会社の株主がお金を出しているのは、実質グループ全体。だからグループ全体の成績表がいる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「80%持っているから資産も80%だけ足す」は間違い。資産・負債は100%足し、20%分は NCI として資本で示す。NCI を負債に入れるのも間違い。また、連結 SFP の株式資本は親会社の分だけで、子会社の株式資本は足さない（のれんの計算で使う）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['連結財務諸表＝グループを1つの会社として見せる成績表。子会社の資産・負債は100%足す', 'NCI＝子会社の資本のうち親会社のものでない分。資本の中に別の行で載せる', '単純投資＝支配も重要な影響力もない保有（ふつう20%未満）。連結しない']
        },
        {
          title: '英単語',
          words: [
            ['consolidated financial statements', '', '連結財務諸表（グループ財務諸表）'],
            ['single economic entity', '', '1つの経済的な実体（グループを1社とみなす）'],
            ['non-controlling interest (NCI)', 'ノン・コントローリング・インタレスト', '非支配持分'],
            ['owners of the parent', '', '親会社の株主'],
            ['investment in subsidiary', '', '子会社への投資（親会社だけの SFP の資産）'],
            ['trade (simple) investment', 'トレード・インベストメント', '単純投資'],
            ['associate', 'アソシエイト', '関連会社']
          ]
        }
      ],
      quiz: [
        { q: "Tako Co owns 80% of Sauce Co. How much of Sauce Co's inventory is included in the consolidated statement of financial position?", choices: ['100%', '80%', '20%', 'None. Only the investment in Sauce Co is shown'], answer: 0, explain: '支配しているので、資産・負債は持ち株の割合に関係なく100%足す。80%は「持ち株の割合だけ足す」というよくある間違い。' },
        { q: 'How is the non-controlling interest presented in the consolidated statement of financial position?', choices: ['Within equity, separately from the equity attributable to the owners of the parent', 'As a non-current liability', 'As a current liability', 'As a deduction from non-current assets'], answer: 0, explain: 'NCI は子会社のほかの株主の取り分なので資本の一部。返すお金ではないので負債ではない。' },
        { q: "P Co owns 75% of S Co. S Co's profit for the year is $60,000. What profit is attributable to the non-controlling interest?", type: 'number', answer: 15000, unit: '$', explain: 'NCI の割合は 25%。$60,000 × 25% ＝ $15,000。$45,000 は親会社の株主の分。' },
        { q: 'X Co holds 8% of the ordinary shares of Y Co and has no other rights over Y Co. How should X Co treat its holding?', choices: ['As a trade (simple) investment', 'As a subsidiary, by consolidation', 'As an associate, using the equity method', 'It is not recorded at all'], answer: 0, explain: '8%で、ほかの権利もないので、支配も重要な影響力もない。単純投資として資産に載せ、配当を収益にする。' },
        { q: '連結財務諸表を作る一番の理由は？', choices: ['親会社だけの成績表では、子会社の資産・負債・利益が「投資」の1行に隠れてしまうから', '子会社が自分の成績表を作らなくてよくするため', 'NCI に配当を払う金額を決めるため', '親会社の税金を計算するため'], answer: 0, explain: '親会社の株主や銀行が、グループ全体の本当の姿を知るため。子会社も自分の成績表は作る。' }
      ]
    },
    {
      id: 'L148',
      no: 148,
      title: 'グループの中から子会社を見つける',
      goal: '株数や契約の情報から保有割合を計算し、どの会社が子会社・関連会社・単純投資かを判定できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['H1(b)', 'K1:G1(b)'],
      slides: [
        {
          title: 'クラスの多数決',
          paras: ['30人のクラスで多数決をする。16票あれば何でも通る。15票（ちょうど半分）では、残り15人が反対すると通らない。', '会社の株主総会も同じ。数えるのは「票の数」、つまり議決権のある普通株の株数。お金の額ではない。']
        },
        {
          title: '保有割合の出し方',
          formula: '保有割合 ＝ 持っている普通株の数 ÷ 普通株の総数',
          paras: ['問題文では、子会社の株式資本（share capital）が金額で書かれていることが多い。そのときは、まず額面（nominal value）で割って株数に直す。'],
          after: '株数 ＝ 株式資本 ÷ 1株の額面。例: 株式資本 $50,000、額面 $0.50 なら 100,000株。'
        },
        {
          title: '例題1: 額面が $1 でないとき',
          example: {
            problem: 'Tako Co は Sauce Co の普通株を 60,000株 持っている。Sauce Co の株式資本は $50,000（1株の額面 $0.50）。Sauce Co は Tako Co の子会社か？',
            steps: ['普通株の総数: $50,000 ÷ $0.50 ＝ 100,000株', '保有割合: 60,000株 ÷ 100,000株 ＝ 60%', '50%超なので、ふつうは支配がある'],
            answer: '60%を持つので、Sauce Co は子会社'
          },
          note: { kind: 'warn', text: '60,000株 ÷ $50,000 のように、株数を金額で割らない。120%のようなありえない数字になる。' }
        },
        {
          title: '例題2: グループの全体図',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="Parent Co が4つの会社の株を持つグループの全体図" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">Parent Co の4つの投資</text><rect x="20" y="46" width="160" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="100" y="72" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">Parent Co</text><path d="M40 86L40 288" stroke="var(--edge)" stroke-width="1.5" fill="none"/><path d="M40 126L60 126M40 180L60 180M40 234L60 234M40 288L60 288" stroke="var(--edge)" stroke-width="1.5" fill="none"/><rect x="60" y="104" width="360" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="76" y="132" font-size="15" font-weight="600" fill="var(--ink)">A Co</text><text x="136" y="132" fill="var(--ink)">普通株 70%、ほかの権利なし</text><rect x="60" y="158" width="360" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="76" y="186" font-size="15" font-weight="600" fill="var(--ink)">B Co</text><text x="136" y="186" fill="var(--ink)">普通株 40%、優先株 90%</text><rect x="60" y="212" width="360" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="76" y="240" font-size="15" font-weight="600" fill="var(--ink)">C Co</text><text x="136" y="240" fill="var(--ink)">普通株 30%＋取締役の過半数を選べる</text><rect x="60" y="266" width="360" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="76" y="294" font-size="15" font-weight="600" fill="var(--ink)">D Co</text><text x="136" y="294" fill="var(--ink)">普通株 15%、ほかの権利なし</text></svg>`,
          caption: 'B Co の優先株には投票権がない。どれが子会社か、次のスライドで1社ずつ判定する。'
        },
        {
          title: '例題2の答え',
          example: {
            problem: '前の図の A Co〜D Co は、Parent Co にとってそれぞれ何か？',
            steps: ['A Co: 普通株70%で50%超 → 子会社', 'B Co: 優先株は数えない。普通株は40%なので支配はない。20%〜50%なのでふつうは関連会社', 'C Co: 30%でも取締役の過半数を選べる → 支配がある → 子会社', 'D Co: 15%で、ほかの権利もない → 単純投資'],
            answer: '子会社は A Co と C Co。B Co は関連会社、D Co は単純投資'
          },
          after: 'グループの連結財務諸表には、子会社を全部（A Co と C Co の両方）連結する。'
        },
        {
          title: '例題3: 株の種類が2つあるとき',
          example: {
            problem: 'R Co は S Co の普通株 200,000株のうち 90,000株と、優先株 100,000株のうち 100,000株を持つ。ほかの権利はない。S Co は子会社か？',
            steps: ['優先株は投票権がないので外す', '普通株の割合: 90,000 ÷ 200,000 ＝ 45%', '50%超ではなく、ほかの権利もない → 支配はない'],
            answer: '子会社ではない（普通株45%。ふつうは関連会社）'
          },
          note: { kind: 'warn', text: '全部の株を足して (90,000 ＋ 100,000) ÷ 300,000 ＝ 約63% とし、「子会社」と答えるのが典型的な引っかけ。' }
        },
        {
          title: 'なぜ？ 株数（票の数）で判断する理由',
          paras: ['支配とは「方針を決められること」。株主総会では1株＝1票なので、決められるかどうかは票の数で決まる。', '額面が $1 でも $0.50 でも1株は1票。だから金額ではなく株数で比べる。優先株は票がないので、何株持っても方針は決められない。', '同じ理由で、取締役を選べる権利など「本当に決められる力」があれば、割合が低くても支配になる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['保有割合＝持っている普通株の数 ÷ 普通株の総数（金額で書かれていたら額面で割って株数に）', '優先株は数えない。ちょうど50%は「50%超」ではない', '50%超 → 子会社、20%〜50% → 関連会社、20%未満 → 単純投資。ただし取締役の過半数を選べるなどの権利があれば子会社']
        },
        {
          title: '英単語',
          words: [
            ['group structure', 'グループ・ストラクチャー', 'グループの全体図（どこが何%持つか）'],
            ['ordinary shares', 'オーディナリー・シェアズ', '普通株（議決権がある）'],
            ['preference shares', 'プリファレンス・シェアズ', '優先株（ふつう議決権がない）'],
            ['nominal value', 'ノミナル・バリュー', '額面'],
            ['share capital', 'シェア・キャピタル', '株式資本（株数 × 額面）'],
            ['board of directors', 'ボード・オブ・ディレクターズ', '取締役会']
          ]
        }
      ],
      quiz: [
        { q: 'H Co acquired 45,000 of the 60,000 $1 ordinary shares of J Co. What percentage of J Co does H Co own?', type: 'number', answer: 75, unit: '%', explain: '45,000 ÷ 60,000 ＝ 75%。50%超なので J Co は子会社。' },
        { q: 'K Co has share capital of $200,000 made up of $0.50 ordinary shares. L Co owns 300,000 of these shares. What percentage of K Co does L Co own?', choices: ['75%', '150%', '37.5%', '60%'], answer: 0, explain: '株数は $200,000 ÷ $0.50 ＝ 400,000株。300,000 ÷ 400,000 ＝ 75%。150% は株数を金額 $200,000 で割った間違い。37.5% は持ち株を金額（$150,000）に直したのに総数は株数のまま割った間違い。' },
        { q: 'M Co holds shares in four companies. Which of them is a subsidiary of M Co?', choices: ['N Co: 40% of the ordinary shares and 100% of the non-voting preference shares', 'O Co: 30% of the ordinary shares and the right to appoint or remove a majority of the directors', 'P Co: exactly 50% of the ordinary shares and no other rights', 'Q Co: 15% of the ordinary shares and no other rights'], answer: 1, explain: 'O Co は取締役の過半数を選べるので支配がある。N Co は優先株を数えないので40%。P Co はちょうど50%で「50%超」ではない。Q Co は単純投資。' },
        { q: 'R社は S社の普通株 100,000株のうち 48,000株と、優先株 50,000株の全部を持つ。ほかの権利はない。S社は R社にとって何？', choices: ['子会社ではない。普通株は48%なので、ふつうは関連会社', '子会社。全部の株の約65%を持つから', '子会社。優先株を100%持つから', '単純投資。20%未満だから'], answer: 0, explain: '優先株は投票権がないので外す。普通株は 48,000 ÷ 100,000 ＝ 48%で50%超ではない。(48,000 ＋ 50,000) ÷ 150,000 ＝ 約65% は、優先株まで足した引っかけ。' },
        { q: '親会社が子会社の普通株の52%を持つ。子会社の普通株の総数が 250,000株なら、親会社は何株持っている？', type: 'number', answer: 130000, unit: '株', explain: '250,000株 × 52% ＝ 130,000株。' }
      ]
    },
    {
      id: 'L149',
      no: 149,
      title: '取得対価の公正価値（現金・株式）',
      goal: '子会社を買うときに渡した対価（現金と株式）を、取得日の公正価値で計算し、親会社の仕訳を書けるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['H1(c)ii', 'K1:G1(c)'],
      slides: [
        {
          title: '下取りの車は今の値段で数える',
          paras: ['新しい車を、現金20万円と今乗っている車の下取りで買う。', '下取りの車は、5年前に買った値段ではなく「今売ったらいくらか」で数える。お店が受け取るのは今の車だから。', '子会社を買うときに、親会社の株で払う場合も同じ。株は今の値段（公正価値）で数える。']
        },
        {
          title: '取得対価とは',
          paras: ['取得対価（consideration transferred）は、親会社が子会社の株を手に入れるために渡したもの。試験で出るのは2種類。'],
          list: ['現金（cash）: 払った金額そのまま', '親会社が新しく発行した株（shares）: 取得日の市場価格（公正価値、fair value）で数える'],
          after: '後で払う対価（deferred consideration）や、条件しだいで払う対価（contingent consideration）は FA・K1 の範囲外。'
        },
        {
          title: '計算の式',
          formula: '取得対価 ＝ 現金 ＋ 発行した株数 × 取得日の株価',
          note: { kind: 'tip', text: '「子会社の株2株につき、親会社の株1株」のような条件が出たら、まず「取得した子会社の株数」から「発行する親会社の株数」を出す。子会社の全株数ではない。' }
        },
        {
          title: '例題: 現金と株で払う',
          example: {
            problem: '20X5年1月1日、Tako Co は Sauce Co の普通株 100,000株のうち 80,000株を取得した。1株につき現金 $1.50 を払い、さらに取得した Sauce Co 株2株につき Tako Co 株1株を発行した。Tako Co 株の額面は $1、1月1日の市場価格は $4。取得対価の公正価値は？',
            steps: ['現金: 80,000株 × $1.50 ＝ $120,000', '発行した株数: 80,000株 ÷ 2 ＝ 40,000株', '株の公正価値: 40,000株 × $4 ＝ $160,000', '合計: $120,000 ＋ $160,000 ＝ $280,000'],
            answer: '取得対価は $280,000'
          }
        },
        {
          title: 'Tako Co の仕訳',
          paras: ['子会社への投資を $280,000 で記録する。発行した株は、額面 $1 の分が株式資本、上乗せ $3（$4 − $1）の分が株式払込剰余金になる。'],
          journal: [
            { side: 'Dr', account: 'Investment in Sauce Co（子会社への投資）', amount: '280,000' },
            { side: 'Cr', account: 'Cash（現金）', amount: '120,000' },
            { side: 'Cr', account: 'Share capital（40,000 × $1）', amount: '40,000' },
            { side: 'Cr', account: 'Share premium（40,000 × $3）', amount: '120,000' }
          ]
        },
        {
          title: '連結 SFP への影響',
          paras: ['新しく発行した株は、親会社の株式資本と株式払込剰余金を増やす。連結 SFP の株式資本・株式払込剰余金は親会社の数字なので、この発行分を含めた金額になる。', '試験では「株の発行はまだ記録していない（not yet been recorded）」と書かれることがある。そのときは、自分で株式資本と株式払込剰余金に足してから答える。']
        },
        {
          title: '手数料は対価に入れない',
          paras: ['買収のときに払う弁護士や会計士の手数料（legal and professional fees）は、取得対価に入れない。払った期の費用（損益計算書）にする。', '対価は「売り手に渡したもの」だけ。手数料は売り手ではなく、弁護士などに払ったお金だから。']
        },
        {
          title: 'なぜ？ 株は額面でなく今の値段で数える理由',
          paras: ['売り手（Sauce Co の元の株主）が受け取ったのは、市場で今 $4 で売れる株。$1 の株ではない。', '親会社が本当に手放した価値も、1株 $4。額面 $1 は、株式資本にいくら記録するかを決めるための数字で、株の値打ちを表していない。', 'だから対価は、取得日の公正価値で測る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '① 株を額面で数える（40,000株 × $1 ＝ $40,000 として対価 $160,000 にしてしまう）。② 子会社の全株数 100,000株 から発行株数を出す。③ 弁護士などの手数料を対価に足す。どれも試験の選択肢に出る。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取得対価＝現金 ＋ 発行した株数 × 取得日の株価', '株は額面ではなく取得日の公正価値で数える。仕訳では額面分が株式資本、残りが株式払込剰余金', '手数料は対価に入れず費用にする']
        },
        {
          title: '英単語',
          words: [
            ['consideration transferred', 'コンシダレーション', '取得対価（子会社を買うために渡したもの）'],
            ['acquisition date', 'アクイジション・デイト', '取得日（支配を手に入れた日）'],
            ['share exchange', 'シェア・エクスチェンジ', '株式交換（株で払うこと）'],
            ['market value', 'マーケット・バリュー', '市場価格'],
            ['deferred consideration', '', '後払いの対価（範囲外）'],
            ['legal and professional fees', '', '弁護士・会計士などの手数料（費用にする）']
          ]
        }
      ],
      quiz: [
        { q: 'On 1 July 20X6 Pine Co acquired 60,000 of the 80,000 ordinary shares of Oak Co. Pine Co paid $2 cash per share acquired and issued 1 new Pine Co share for every 3 Oak Co shares acquired. Pine Co shares have a nominal value of $1 and a market value of $5 on 1 July 20X6. What is the fair value of the consideration transferred?', type: 'number', answer: 220000, unit: '$', explain: '現金 60,000 × $2 ＝ $120,000。発行株数 60,000 ÷ 3 ＝ 20,000株、20,000 × $5 ＝ $100,000。合計 $220,000。' },
        { q: 'Ash Co acquired 75% of the 200,000 ordinary shares of Elm Co by issuing 2 Ash Co shares for every 3 Elm Co shares acquired. Ash Co shares have a nominal value of $0.50 and a market value of $3 at the acquisition date. Ash Co also paid legal fees of $10,000. What is the consideration transferred?', choices: ['$300,000', '$310,000', '$50,000', '$400,000'], answer: 0, explain: '取得株数 200,000 × 75% ＝ 150,000株。発行株数 150,000 × 2/3 ＝ 100,000株。100,000 × $3 ＝ $300,000。$310,000 は手数料を足した間違い、$50,000 は額面で数えた間違い、$400,000 は全株数 200,000株 から発行株数を出した間違い。' },
        { q: '子会社を買うときに払った弁護士の手数料 $8,000 はどう扱う？', choices: ['損益計算書の費用にする', '取得対価に足す', 'のれんから引く', '株式払込剰余金に足す'], answer: 0, explain: '対価は売り手に渡したものだけ。手数料は弁護士に払ったお金なので、その期の費用にする。' },
        { q: 'Beech Co issued 50,000 $1 ordinary shares, with a market value of $2.50 each, to acquire shares in Cedar Co. How should Beech Co record the share issue?', choices: ['Dr Investment $125,000; Cr Share capital $50,000; Cr Share premium $75,000', 'Dr Investment $50,000; Cr Share capital $50,000', 'Dr Share capital $50,000; Dr Share premium $75,000; Cr Investment $125,000', 'Dr Investment $125,000; Cr Share capital $125,000'], answer: 0, explain: '投資は公正価値 50,000 × $2.50 ＝ $125,000。株式資本は額面分 $50,000、残り $75,000 が株式払込剰余金。2つ目は額面で数えた間違い、3つ目は借方と貸方が逆。' },
        { q: 'During the year Fir Co acquired 80% of Yew Co by issuing 30,000 $1 ordinary shares with a market value of $3 each. The share issue has not yet been recorded. Before recording it, Fir Co had share capital of $100,000 and share premium of $25,000. Yew Co had share premium of $10,000. What is share premium in the consolidated statement of financial position?', type: 'number', answer: 85000, unit: '$', explain: 'まだ記録していない発行を足す。上乗せは 30,000株 × ($3 − $1) ＝ $60,000。連結の株式払込剰余金は親会社の数字だけなので $25,000 ＋ $60,000 ＝ $85,000。子会社の $10,000 はのれんの計算で使い、足さない。' },
        { q: '発行した株を、額面ではなく取得日の株価で数える理由は？', choices: ['売り手が受け取ったのは今その値段で売れる株で、親会社が本当に手放した価値だから', '額面のほうが計算が面倒だから', 'のれんを小さくするため', '慎重性のため、低いほうの金額を使うから'], answer: 0, explain: '対価は「本当に渡した価値」で測る。額面は株式資本の記録に使う数字で、株の値打ちではない。' }
      ]
    },
    {
      id: 'L150',
      no: 150,
      title: 'のれんの計算（非支配持分は公正価値）',
      goal: 'のれんを「対価＋非支配持分−取得日の純資産」で計算し、連結 SFP でどう扱うかを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['H1(d)', 'K1:G1(a)', 'K1:G1(d)'],
      slides: [
        {
          title: '人気のラーメン屋を丸ごと買う',
          paras: ['人気のラーメン屋を、店ごと800万円で買った。厨房の設備や食材を全部売っても500万円にしかならない。', 'それでも800万円払ったのは、常連客・評判・秘伝のレシピ・慣れた店員があるから。どれも帳簿には載っていない。', '差の300万円が、目に見えない価値への支払い。これがのれん（goodwill）。']
        },
        {
          title: 'のれんは「買ったとき」だけ出てくる',
          paras: ['無形資産のレッスンで学んだとおり、自分で育てたのれんは資産に載せられない。値段を確かめられないから。', '会社を買うと、払った金額という確かな数字が出る。だから買ったときだけ、払った額と中身との差をのれんとして載せる。', 'のれんは連結 SFP の非流動資産（無形資産）に載る。親会社だけの SFP には出てこない。']
        },
        {
          title: 'のれんの式',
          table: {
            caption: 'のれんの計算（FA・K1 の形）',
            head: ['項目', '$'],
            rows: [['取得対価の公正価値', 'X'], ['非支配持分（NCI）の公正価値', 'X'], ['取得日の純資産の公正価値', '(X)']],
            total: ['取得時ののれん', 'X']
          },
          note: { kind: 'tip', text: 'FA・K1 では、NCI はいつも取得日の公正価値で測る。NCI の株数 × 取得日の子会社の株価で出すか、問題文に金額で書いてある。' }
        },
        {
          title: '会社全体の値段と中身を比べる',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="対価とNCIを足した会社全体の値段から純資産を引いた残りがのれん" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">のれん＝会社全体の値段 − 純資産</text><text x="20" y="68" fill="var(--quiet)">払った側（会社全体の値段 $330,000）</text><rect x="20" y="80" width="339" height="56" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="189" y="113" text-anchor="middle" fill="var(--ink)">対価 $280,000（80%）</text><rect x="359" y="80" width="61" height="56" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="389" y="104" text-anchor="middle" font-size="12.5" fill="var(--ink)">NCI</text><text x="389" y="124" text-anchor="middle" font-size="12.5" fill="var(--ink)">$50,000</text><text x="20" y="172" fill="var(--quiet)">中身（子会社の純資産 100%）</text><rect x="20" y="184" width="303" height="56" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="171" y="217" text-anchor="middle" fill="var(--ink)">純資産 $250,000</text><rect x="323" y="184" width="97" height="56" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="371" y="207" text-anchor="middle" font-weight="600" fill="var(--ink)">のれん</text><text x="371" y="227" text-anchor="middle" font-weight="600" fill="var(--ink)">$80,000</text><text x="220" y="274" text-anchor="middle" fill="var(--ink)">中身で説明できない分が、のれん</text></svg>`,
          caption: '親会社が払ったのは80%分。NCI の20%分を足して会社全体（100%）の値段にしてから、100%の純資産と比べる。'
        },
        {
          title: '純資産は取得日の資本で出す',
          paras: ['純資産（net assets）＝資産 − 負債。資本の合計と同じ金額なので、試験では子会社の資本から出すのが速い。'],
          formula: '取得日の純資産 ＝ 株式資本 ＋ 株式払込剰余金 ＋ 取得日の利益剰余金',
          after: 'ほかの剰余金（再評価剰余金など）があれば、それも足す。取得日に子会社の土地や建物の公正価値が帳簿と違うときは、その差（公正価値調整）も足す。これは次のレッスン（L151）で学ぶ。'
        },
        {
          title: '例題: のれんを計算する',
          example: {
            problem: 'Tako Co は20X5年1月1日に Sauce Co の普通株 100,000株のうち 80,000株を取得した。対価の公正価値は $280,000（前のレッスン）。1月1日の Sauce Co の株価は $2.50。この日の Sauce Co の株式資本は $100,000、利益剰余金は $150,000。NCI は公正価値で測る。のれんは？',
            steps: ['対価: $280,000', 'NCI の株数: 100,000 − 80,000 ＝ 20,000株。NCI ＝ 20,000株 × $2.50 ＝ $50,000', '取得日の純資産: $100,000 ＋ $150,000 ＝ $250,000', 'のれん: $280,000 ＋ $50,000 − $250,000 ＝ $80,000'],
            answer: 'のれんは $80,000'
          }
        },
        {
          title: '答案の書き方（ワーキング）',
          paras: ['試験の連結問題では、のれんを別の計算欄（working）にまとめると間違えにくい。'],
          table: {
            caption: 'W: Goodwill（Tako Co グループ）',
            head: ['項目', '$'],
            rows: [['Consideration（対価）', '280,000'], ['NCI at fair value（NCI）', '50,000'], ['Less: Share capital（株式資本）', '(100,000)'], ['Less: Retained earnings at acquisition', '(150,000)']],
            total: ['Goodwill（のれん）', '80,000']
          },
          after: '親会社が払った1株あたりは $3.50（$280,000 ÷ 80,000株）で、NCI の $2.50 より高い。支配を手に入れるための上乗せ（control premium）を払うことが多いから。'
        },
        {
          title: 'なぜ？ 取得日の数字を使う理由',
          paras: ['のれんは「買ったときに、中身よりいくら多く払ったか」。だから比べるのは、買った日の中身。', '取得後に子会社が稼いだ利益は、グループになってから稼いだもの。買ったときの値段とは関係ない。', 'そのため年度末の利益剰余金は使わない。取得後の利益は、連結 SFP の利益剰余金と NCI に分けて足す（L152 で学ぶ）。']
        },
        {
          title: 'のれんのその後',
          list: ['連結 SFP の非流動資産に、無形資産として載る', '償却しない。毎年、価値が下がっていないか確かめる（減損の検討、impairment review）。減損の計算は範囲外'],
          note: { kind: 'warn', text: 'よくある間違い: ① 年度末の利益剰余金で純資産を出す。② NCI を足し忘れる。③ 純資産を親会社の割合（80%）だけ引く。NCI を足しているので、純資産は100%引く。④ 対価の株を額面で数える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['のれん＝対価の公正価値 ＋ NCI の公正価値 − 取得日の純資産の公正価値', '純資産は取得日の数字（株式資本＋株式払込剰余金＋取得日の利益剰余金）。年度末ではない', 'のれんは連結 SFP の無形資産。償却せず、毎年減損の検討']
        },
        {
          title: '英単語',
          words: [
            ['goodwill', 'グッドウィル', 'のれん'],
            ['net assets at acquisition', '', '取得日の純資産'],
            ['NCI at fair value', '', '公正価値で測った非支配持分'],
            ['retained earnings at acquisition', '', '取得日の利益剰余金'],
            ['post-acquisition', 'ポスト・アクイジション', '取得後（グループになってから）'],
            ['impairment review', 'インペアメント・レビュー', '減損の検討'],
            ['working (W)', 'ワーキング', '答案の計算欄']
          ]
        }
      ],
      quiz: [
        { q: 'On 1 January 20X7 Red Co acquired 70% of the ordinary shares of Blue Co for cash of $350,000. The fair value of the non-controlling interest at that date was $140,000. At 1 January 20X7 Blue Co had share capital of $200,000 and retained earnings of $180,000. What is the goodwill arising on acquisition?', type: 'number', answer: 110000, unit: '$', explain: '純資産 $200,000 ＋ $180,000 ＝ $380,000。のれん ＝ $350,000 ＋ $140,000 − $380,000 ＝ $110,000。' },
        { q: 'Gold Co acquired 80% of Silver Co for $500,000. The fair value of the non-controlling interest at acquisition was $110,000. The net assets of Silver Co were $450,000 at acquisition and $520,000 at the year end. What is the goodwill arising on acquisition?', choices: ['$160,000', '$90,000', '$140,000', '$50,000'], answer: 0, explain: '$500,000 ＋ $110,000 − $450,000 ＝ $160,000。$90,000 は年度末の純資産を使った間違い。$140,000 は純資産の80%（$360,000）だけ引いて NCI を足さなかった間違い。$50,000 は NCI を足し忘れた間違い。' },
        { q: 'Lime Co acquired 90,000 of the 120,000 ordinary shares of Kiwi Co by issuing 1 Lime Co share for every 3 Kiwi Co shares acquired. At the acquisition date Lime Co shares had a market value of $9 each and Kiwi Co shares $2.40 each. The net assets of Kiwi Co at acquisition were $260,000. NCI is measured at fair value. What is the goodwill?', type: 'number', answer: 82000, unit: '$', explain: '発行株数 90,000 ÷ 3 ＝ 30,000株、対価 30,000 × $9 ＝ $270,000。NCI は 30,000株 × $2.40 ＝ $72,000。のれん ＝ $270,000 ＋ $72,000 − $260,000 ＝ $82,000。' },
        { q: 'After acquisition, how is goodwill treated in the consolidated financial statements?', choices: ['It is not amortised but is reviewed for impairment every year', 'It is amortised on a straight-line basis over five years', 'It is written off to profit or loss immediately', "It is shown only in the parent's own statement of financial position"], answer: 0, explain: '買ったのれんは連結 SFP の無形資産。償却せず、毎年減損の検討をする。親会社だけの SFP には「子会社への投資」が載り、のれんは出てこない。' },
        { q: 'のれんの計算で、年度末ではなく取得日の利益剰余金を使う理由は？', choices: ['取得後の利益はグループになってから稼いだもので、買ったときの値段とは関係ないから', '年度末の利益剰余金は監査が終わっていないから', 'のれんをなるべく大きく見せるため', '取得後の利益はすべて NCI のものだから'], answer: 0, explain: 'のれんは「買ったときの値段」と「買ったときの中身」の差。取得後の利益は、連結の利益剰余金と NCI に分けて足す。' },
        { q: 'のれんの計算で、子会社の純資産を100%引くのはなぜ？', choices: ['対価（親会社の分）に NCI（ほかの株主の分）を足して会社全体の値段にしているから', '親会社が子会社の株を100%持っているから', 'NCI は負債なので、純資産から除かないから', '慎重性のため、のれんを小さくするから'], answer: 0, explain: '払った側を「対価＋NCI」で会社全体（100%）にしているので、中身も100%で比べる。持ち株の割合が100%という意味ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'L146-1', lesson: 'L146', q: '親会社（parent）と子会社（subsidiary）とは？', a: '親会社＝子会社を支配する会社。子会社＝ほかの会社に支配される会社' },
    { id: 'L146-2', lesson: 'L146', q: '支配（control）の3つの要素は？', a: '相手を動かす力、変動するリターンを受ける立場、その力でリターンを左右できること' },
    { id: 'L146-3', lesson: 'L146', q: '支配のふつうの目安は？', a: '議決権のある普通株の50%超を持つこと' },
    { id: 'L146-4', lesson: 'L146', q: '50%以下でも支配になる例は？', a: '取締役の過半数を選べる・辞めさせられる、契約で方針を決められる、など' },
    { id: 'L146-5', lesson: 'L146', q: 'なぜ優先株は支配の判断で数えない？', a: 'ふつう投票権がなく、方針を決める力にならないから' },
    { id: 'L146-6', lesson: 'L146', q: '取得法（acquisition accounting）とは？', a: '親会社が子会社を買ったと見て、資産・負債を公正価値で取り込み、のれんを出す連結のやり方' },
    { id: 'L147-1', lesson: 'L147', q: '連結財務諸表とは？', a: '親会社と子会社を1つの会社として見せる財務諸表。親会社が作る' },
    { id: 'L147-2', lesson: 'L147', q: '80%子会社の資産・負債は、連結で何%足す？ なぜ？', a: '100%。支配していて、全部を思いどおりに使えるから' },
    { id: 'L147-3', lesson: 'L147', q: '非支配持分（NCI）とは？ 連結 SFP のどこに載る？', a: '子会社の資本のうち親会社のものでない分。資本の中に別の行で載る' },
    { id: 'L147-4', lesson: 'L147', q: '単純投資（trade investment）とは？', a: '支配も重要な影響力もない保有（ふつう20%未満）。投資として資産に載せ、配当を収益にする' },
    { id: 'L147-5', lesson: 'L147', q: '75%子会社の利益が $40,000。NCI の分は？', a: '$10,000（$40,000 × 25%）' },
    { id: 'L148-1', lesson: 'L148', q: '保有割合の計算式は？', a: '持っている普通株の数 ÷ 普通株の総数' },
    { id: 'L148-2', lesson: 'L148', q: '株式資本 $50,000、額面 $0.50。株数は？', a: '100,000株（$50,000 ÷ $0.50）' },
    { id: 'L148-3', lesson: 'L148', q: '普通株ちょうど50%、ほかの権利なし。子会社？', a: 'ふつうは違う。目安は50%「超」' },
    { id: 'L148-4', lesson: 'L148', q: '普通株40%＋優先株90%、ほかの権利なし。子会社？', a: '違う。優先株は数えないので40%。ふつうは関連会社' },
    { id: 'L148-5', lesson: 'L148', q: '割合ごとの扱い（目安）は？', a: '50%超＝子会社、20〜50%＝関連会社、20%未満＝単純投資' },
    { id: 'L149-1', lesson: 'L149', q: '取得対価の計算式は？', a: '現金 ＋ 発行した株数 × 取得日の株価' },
    { id: 'L149-2', lesson: 'L149', q: '対価として発行した株は、何の値段で数える？', a: '取得日の市場価格（公正価値）。額面ではない' },
    { id: 'L149-3', lesson: 'L149', q: '買収の弁護士・会計士の手数料は？', a: '対価に入れず、その期の費用にする' },
    { id: 'L149-4', lesson: 'L149', q: '株で払ったときの親会社の仕訳は？', a: 'Dr 子会社への投資 / Cr 株式資本（額面分）・株式払込剰余金（残り）' },
    { id: 'L149-5', lesson: 'L149', q: '「子会社株2株につき親会社株1株」の発行株数の出し方は？', a: '取得した子会社の株数 ÷ 2（子会社の全株数ではない）' },
    { id: 'L149-6', lesson: 'L149', q: '対価の株の発行が「まだ記録されていない」ときは？', a: '親会社の株式資本（額面分）と株式払込剰余金（上乗せ分）に自分で足す' },
    { id: 'L150-1', lesson: 'L150', q: 'のれんの計算式は？', a: '対価の公正価値 ＋ NCI の公正価値 − 取得日の純資産の公正価値' },
    { id: 'L150-2', lesson: 'L150', q: '子会社の純資産は、いつの数字を使う？', a: '取得日。年度末ではない' },
    { id: 'L150-3', lesson: 'L150', q: '取得日の純資産の出し方は？', a: '株式資本 ＋ 株式払込剰余金 ＋ 取得日の利益剰余金（＋公正価値調整）' },
    { id: 'L150-4', lesson: 'L150', q: 'なぜ NCI を足してから純資産を100%引く？', a: '会社全体（100%）の値段と、100%の中身を比べるため' },
    { id: 'L150-5', lesson: 'L150', q: 'のれんはどこに載る？ その後は？', a: '連結 SFP の無形資産（非流動）。償却せず、毎年減損の検討' },
    { id: 'L150-6', lesson: 'L150', q: '対価 $280,000、NCI $50,000、純資産 $250,000。のれんは？', a: '$80,000' }
  ]
});
