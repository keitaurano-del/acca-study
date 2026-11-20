(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 25,
  part: 16,
  partTitle: '会社の資本と資金調達',
  lessons: [
    {
      id: 'L123',
      no: 123,
      title: '株主割当増資とメリット・デメリット',
      goal: '株主割当増資（rights issue）とは何かを説明し、無償増資との違いとメリット・デメリットを言えるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D10(f)'],
      slides: [
        {
          title: '「仲間に先に声をかける」追加募集',
          paras: ['友だち4人で100万円ずつ出して、カフェを作った。1人の持ち分は25%。', '新しいオーブンに200万円いる。外の人に頼む前に、まず仲間に「今の持ち分に応じて1人50万円ずつ出して。外の人より安い条件にするから」と頼む。'],
          after: '4人とも出せば、全員25%のまま。出せない人がいると、その人の割合は下がる。'
        },
        {
          title: '株主割当増資（rights issue）とは',
          paras: ['今の株主に、持っている株の数に比例して、新しい株を買う権利を渡す発行。値段はふつう、今の株価（market price）より安くする。'],
          list: ['1 for 4 at $1.20: 4株持つごとに、1株を $1.20 で買える', '株主は選べる: 買う（take up）、権利を他の人に売る（sell the rights）、何もしない（lapse）', '株主がお金を払うので、会社に現金が入る']
        },
        {
          title: 'お金と株の流れ',
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="今の株主が現金を払い、会社が新しい株を渡す" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">株主割当増資のしくみ</text><rect x="20" y="56" width="140" height="114" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="90" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">今の株主</text><text x="90" y="132" text-anchor="middle" fill="var(--ink)">4株を持つ</text><rect x="280" y="56" width="140" height="114" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">会社</text><text x="350" y="132" text-anchor="middle" fill="var(--ink)">新しい株を発行</text><text x="220" y="76" text-anchor="middle" font-weight="600" fill="var(--ink)">現金 $1.20</text><line x1="166" y1="90" x2="266" y2="90" stroke="var(--accent)" stroke-width="2.5"/><path d="M276 90L264 83L264 97z" fill="var(--accent)"/><line x1="274" y1="140" x2="176" y2="140" stroke="var(--ink)" stroke-width="1.5"/><path d="M166 140L178 133L178 147z" fill="var(--ink)"/><text x="220" y="164" text-anchor="middle" fill="var(--ink)">新しい株 1株</text><text x="20" y="212" fill="var(--ink)">1 for 4 at $1.20 ＝ 4株につき1株を $1.20 で</text><text x="20" y="240" fill="var(--quiet)">引き受けるかは株主が選ぶ（権利を売ってもよい）</text></svg>`,
          caption: '無償増資（L121）では株主は1円も払わない。株主割当増資では株主が現金を払う。ここが一番の違い。'
        },
        {
          title: '無償増資と比べる',
          table: {
            caption: 'bonus issue と rights issue の違い',
            head: ['項目', '無償増資', '株主割当増資'],
            rows: [
              ['株主が払うお金', 'なし', '割引価格で払う'],
              ['会社の現金', '変わらない', '増える'],
              ['資本の合計', '変わらない', '現金の分だけ増える'],
              ['使う勘定', '準備金 → share capital', 'Cash → share capital と share premium'],
              ['株主の割合', '変わらない', '全員が引き受ければ変わらない']
            ]
          }
        },
        {
          title: '引き受けないと割合が薄まる',
          example: {
            problem: '発行済み 10,000 株の会社で、Aさんは 2,000 株（20%）を持っている。1 for 4 の株主割当増資で、新しい株はすべて発行された（Aさんが買わない分は権利を買った人が引き受ける）。Aさんが引き受けた場合と、引き受けなかった場合の割合は？',
            steps: ['新しく発行する株: 10,000 ÷ 4 ＝ 2,500 株。発行後は 12,500 株', 'Aさんが買える株: 2,000 ÷ 4 ＝ 500 株', '引き受けた: (2,000 ＋ 500) ÷ 12,500 ＝ 20%', '引き受けなかった: 2,000 ÷ 12,500 ＝ 16%'],
            answer: '引き受ければ 20% のまま。引き受けないと 16% に薄まる（dilution）'
          }
        },
        {
          title: 'メリット（会社から見て）',
          list: ['現金が入る。借入と違い、返す義務も利息を払う義務もない', '一般の投資家に売る発行より、手間と発行費用（issue costs）が少ない', '株価より安いので買ってもらいやすく、成功しやすい', '株主が引き受ければ、今の株主の割合（支配力）が保たれる']
        },
        {
          title: 'デメリット',
          list: ['株価より安く売るので、株価どおりに売る発行より集まる現金が少ない', '株主にお金がないと引き受けられず、その株主の割合が薄まる', '安い株が増えるので、発行後の株価はふつう下がる', '全部が引き受けられないと、予定の金額が集まらないおそれがある']
        },
        {
          title: 'なぜ？ まず今の株主に声をかける理由',
          paras: ['今の株主は会社のオーナー。外の人に安く株を売ると、オーナーの割合も、1株の値打ちも下がってしまう。', 'そこで、安く買えるチャンスを先に今の株主に渡す。全員が引き受ければ割合は変わらず、損もしない。引き受けない人も、権利を売ればお金に替えられる。']
        },
        {
          title: 'よくある間違い',
          paras: ['「安く売る」は株価より安いという意味で、額面（nominal value）より安いわけではない。ふつうは額面より高いので、share premium が出る（計算は次のレッスン）。'],
          note: { kind: 'warn', text: '株主割当増資を「タダで株がもらえる」と思う。それは無償増資（bonus issue）。rights issue では株主がお金を払い、会社の現金と資本が増える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株主割当増資＝今の株主に、持ち株に比例して、株価より安く新しい株を売る', '株主がお金を払うので、会社の現金と資本が増える（無償増資との違い）', 'メリット: 現金・低コスト・成功しやすい・割合が保てる。デメリット: 集まる額が少ない・薄まる・株価が下がる']
        },
        {
          title: '英単語',
          words: [
            ['rights issue', 'ライツ イシュー', '株主割当増資'],
            ['existing shareholders', 'イグジスティング シェアホルダーズ', '今の株主'],
            ['in proportion to', 'イン プロポーション トゥ', '〜に比例して'],
            ['market price', 'マーケット プライス', '株価（市場での値段）'],
            ['at a discount', 'アット ア ディスカウント', '割り引いた値段で'],
            ['take up / lapse', 'テイク アップ / ラプス', '引き受ける / 権利を使わずに失う'],
            ['dilution', 'ダイリューション', '持ち分の割合が薄まること']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following best describes a rights issue?', choices: ['An issue of new shares to existing shareholders, in proportion to their holdings, usually at a price below market price', 'An issue of free shares to existing shareholders, funded from reserves', 'An issue of new shares to the general public at full market price', 'The right of shareholders to receive a fixed dividend each year'], answer: 0, explain: '持ち株に比例して、今の株主に、株価より安く売るのが rights issue。2つ目は無償増資（bonus issue）、4つ目は優先株の説明。' },
        { q: 'Which of the following is an advantage of a rights issue for a company?', choices: ['It does not change the total equity of the company', 'It raises cash without increasing the borrowings of the company', 'It raises more cash than an issue to the public at full market price', 'Shareholders do not have to pay for the new shares'], answer: 1, explain: '現金が入り、借入ではないので返す義務も利息もない。資本が変わらない・タダでもらえるのは無償増資。株価より安く売るので、集まる額はむしろ少ない。' },
        { q: '発行済み 10,000 株のうち、Aさんは 2,000 株を持つ。1 for 4 の株主割当増資で、Aさんだけが引き受けず、権利を他の人に売った。新しい株はすべて発行された。発行後のAさんの割合は？', choices: ['20%', '16%', '25%', '15%'], answer: 1, explain: '新しい株は 2,500 株で、発行後は 12,500 株。2,000 ÷ 12,500 ＝ 16%。20% は引き受けた場合の数字。' },
        { q: '資本の合計が増えるのはどちら？', choices: ['無償増資だけ', '株主割当増資だけ', '両方', 'どちらも増えない'], answer: 1, explain: '株主割当増資は株主が現金を払うので、その分だけ資本が増える。無償増資は資本の中で準備金を share capital に移すだけ。' },
        { q: 'Which of the following is a disadvantage of a rights issue for an existing shareholder?', choices: ['They lose the voting rights on their existing shares', 'They must pay the full market price for the new shares', 'If they cannot afford to take up the rights, their percentage holding is diluted', 'Their existing shares are converted into preference shares'], answer: 2, explain: 'お金を出せないと、自分の割合が薄まる。今の株の投票権はなくならない。払うのは株価より安い値段。' },
        { q: '額面 $0.50 の株を、株主割当増資で 1株 $1.20 で売った。差の $0.70 はどの勘定に入る？（L120 とのつながり）', choices: ['Share capital', 'Share premium', 'Retained earnings', 'Revenue'], answer: 1, explain: '額面を超える上乗せ分は share premium。株主割当増資でも、現金での発行と同じルールになる。' }
      ]
    },
    {
      id: 'L124',
      no: 124,
      title: '株主割当増資の計算と表示',
      goal: '株主割当増資で受け取る現金、share capital と share premium の増加を計算し、仕訳と SFP に載せられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D10(h)'],
      slides: [
        {
          title: '常連さんだけの割引回数券',
          paras: ['定価1,000円の回数券。常連さんは「今持っている5枚につき1枚」を800円で買える。', '10枚持っている人は 10 ÷ 5 ＝ 2枚まで買えて、払うのは 2 × 800円 ＝ 1,600円。株主割当増資の計算も、これと同じ順番で進める。']
        },
        {
          title: '計算の5ステップ',
          numbered: ['今の株数: share capital ÷ 額面', '新しい株数: 今の株数 × 比率（1 for 5 なら ÷ 5）', '受け取る現金: 新しい株数 × 発行価格（rights price）', 'share capital の増加: 新しい株数 × 額面', 'share premium の増加: 新しい株数 ×（発行価格 − 額面）'],
          formula: 'Dr Cash ／ Cr Share capital ／ Cr Share premium'
        },
        {
          title: '例題: 1 for 5 の株主割当増資',
          example: {
            problem: 'たこ焼き株式会社の資本: Share capital（$0.50 普通株）$250,000、Share premium $100,000。1 for 5 の株主割当増資を 1株 $0.80 で行い、全部引き受けられた。仕訳は？',
            steps: ['今の株数: $250,000 ÷ $0.50 ＝ 500,000 株', '新しい株数: 500,000 ÷ 5 ＝ 100,000 株', '受け取る現金: 100,000 × $0.80 ＝ $80,000', 'share capital: 100,000 × $0.50 ＝ $50,000', 'share premium: 100,000 × ($0.80 − $0.50) ＝ $30,000。検算: $50,000 ＋ $30,000 ＝ $80,000'],
            answer: 'Dr Cash $80,000 / Cr Share capital $50,000 / Cr Share premium $30,000'
          }
        },
        {
          title: '仕訳',
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '80,000' },
            { side: 'Cr', account: 'Share capital（株式資本）', amount: '50,000' },
            { side: 'Cr', account: 'Share premium（株式払込剰余金）', amount: '30,000' }
          ],
          paras: ['L120 の「現金での発行」とまったく同じ形。違うのは、買う人が今の株主に限られることと、値段が株価より安いことだけ。']
        },
        {
          title: 'SFP の資本（前と後）',
          table: {
            caption: 'たこ焼き株式会社の資本',
            head: ['Equity', '前 $', '後 $'],
            rows: [['Share capital（$0.50）', '250,000', '300,000'], ['Share premium', '100,000', '130,000'], ['Revaluation surplus', '30,000', '30,000'], ['Retained earnings', '120,000', '120,000']],
            total: ['Total equity', '500,000', '580,000']
          },
          paras: ['資本は受け取った現金の $80,000 だけ増える。株数は 500,000 株から 600,000 株になる。利益剰余金は動かない。']
        },
        {
          title: '例題: 無償増資と株主割当増資が両方ある',
          example: {
            problem: '1月1日の資本: Share capital（$1 普通株）$400,000、Share premium $150,000。3月に 1 for 4 の無償増資（share premium を使う）。7月に 1 for 5 の株主割当増資を 1株 $1.60 で行い、全部引き受けられた。12月31日の share capital と share premium は？',
            steps: ['無償増資: 400,000 株 ÷ 4 ＝ 100,000 株。Dr Share premium / Cr Share capital $100,000', '無償増資の後: share capital $500,000（500,000 株）、share premium $50,000', '株主割当増資: 500,000 株 ÷ 5 ＝ 100,000 株。現金 100,000 × $1.60 ＝ $160,000', 'share capital ＋$100,000、share premium ＋100,000 × $0.60 ＝ ＋$60,000', '期末: share capital $600,000、share premium $50,000 ＋ $60,000 ＝ $110,000'],
            answer: 'Share capital $600,000、Share premium $110,000'
          },
          note: { kind: 'tip', text: '必ず起きた順に1つずつ計算する。株主割当増資を先にすると、無償増資で配る株が増えて share premium は $78,000 になってしまう。' }
        },
        {
          title: '例題: 集まった現金から逆算する',
          example: {
            problem: '額面 $0.50 の株で、1 for 2 の株主割当増資を 1株 $0.90 で行い、$270,000 を受け取った。発行前の株数と、share premium の増加は？',
            steps: ['新しい株数: $270,000 ÷ $0.90 ＝ 300,000 株', '発行前の株数: 300,000 × 2 ＝ 600,000 株（1 for 2 なので新しい株の2倍）', 'share capital の増加: 300,000 × $0.50 ＝ $150,000', 'share premium の増加: $270,000 − $150,000 ＝ $120,000'],
            answer: '発行前 600,000 株。share premium は $120,000 増える'
          }
        },
        {
          title: 'よくある間違い',
          paras: ['問題文の「fully taken up（全部引き受けられた）」を確かめる。一部だけなら、引き受けられた株の分だけ現金と株を記帳する。', '比率は「その時点の株数」に掛ける。先に無償増資があれば、増えた後の株数に掛ける。'],
          note: { kind: 'warn', text: '現金を株価（market price）で計算する。現金は必ず rights price × 新しい株数。また、受け取った現金を全部 share capital に入れない。額面の分だけが share capital。' }
        },
        {
          title: 'なぜ？ 現金での発行と同じ記帳になる理由',
          paras: ['株主割当増資は、買い手を今の株主に限った「現金での発行」。会社に現金が入って株が増える、という中身は L120 と同じ。', 'だから share capital は「株数 × 額面」に保ち、上乗せ分は share premium に入れる。株価より安く売っても、額面より高ければ premium は出る。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['新しい株数＝今の株数 × 比率、現金＝新しい株数 × rights price', 'Dr Cash ／ Cr Share capital（額面の分）／ Cr Share premium（残り）', '無償増資と重なるときは、起きた順に1つずつ計算する']
        },
        {
          title: '英単語',
          words: [
            ['rights price', 'ライツ プライス', '株主割当増資の発行価格'],
            ['fully taken up', 'フーリー テイクン アップ', '全部引き受けられた'],
            ['1 for 5', '', '5株につき1株'],
            ['shares in issue', 'シェアズ イン イシュー', '発行済みの株'],
            ['nominal value', 'ノミナル バリュー', '額面'],
            ['proceeds', 'プロシーズ', '受け取ったお金（発行による収入）']
          ]
        }
      ],
      quiz: [
        { q: 'A company has 800,000 $0.50 ordinary shares in issue. It makes a 1 for 4 rights issue at $1.10 per share, which is fully taken up. By how much does share premium increase?', type: 'number', answer: 120000, unit: '$', explain: '新しい株数 800,000 ÷ 4 ＝ 200,000 株。1株の上乗せ $1.10 − $0.50 ＝ $0.60。200,000 × $0.60 ＝ $120,000。' },
        { q: 'A company has share capital of $600,000 ($0.25 shares) and share premium of $200,000. It makes a 1 for 3 rights issue at $0.60 per share, which is fully taken up. What are the balances on share capital and share premium after the issue?', choices: ['Share capital $1,080,000, share premium $200,000', 'Share capital $800,000, share premium $480,000', 'Share capital $650,000, share premium $270,000', 'Share capital $800,000, share premium $680,000'], answer: 1, explain: '株数 $600,000 ÷ $0.25 ＝ 2,400,000 株。新しい株 800,000 株、現金 $480,000。share capital ＋$200,000、share premium ＋$280,000。$650,000 は $600,000 を株数と取り違えた答え。$1,080,000 は現金を全部 share capital に入れた答え。$680,000 は現金を全部 share premium に足した答え。' },
        { q: '期首: Share capital（$1 株）$300,000、Share premium $120,000。3月に 1 for 3 の無償増資（share premium を使う）、その後 1 for 4 の株主割当増資を 1株 $1.50 で行い、全部引き受けられた。期末の share premium は？', type: 'number', answer: 70000, unit: '$', explain: '無償増資: 100,000 株、share premium $120,000 − $100,000 ＝ $20,000、株数 400,000 株。株主割当増資: 100,000 株、上乗せ 100,000 × $0.50 ＝ $50,000。$20,000 ＋ $50,000 ＝ $70,000。' },
        { q: '株主割当増資（全部引受け、発行価格は額面より高い）の仕訳はどれ？', choices: ['Dr Share premium ／ Cr Share capital', 'Dr Cash ／ Cr Share capital ／ Cr Share premium', 'Dr Share capital ／ Cr Cash', 'Dr Cash ／ Cr Retained earnings'], answer: 1, explain: '現金が入り（借方）、額面の分が share capital、残りが share premium（貸方）。1つ目は無償増資の仕訳。利益ではないので retained earnings は使わない。' },
        { q: 'A 1 for 3 rights issue at $1.40 per share raised $350,000. Each share has a nominal value of $1. How many shares were in issue before the rights issue?', choices: ['250,000', '350,000', '750,000', '1,000,000'], answer: 2, explain: '新しい株数 $350,000 ÷ $1.40 ＝ 250,000 株。1 for 3 なので発行前は 250,000 × 3 ＝ 750,000 株。1,000,000 は発行後の株数。350,000 は現金を額面 $1 で割り、それを発行前の株数とした間違い。' }
      ]
    },
    {
      id: 'L125',
      no: 125,
      title: '配当を計算して記帳する',
      goal: '普通株・優先株の配当を計算し、仕訳と財務諸表（SOCE・SFP）に正しく載せられるようになる。受け取る配当も記帳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D10(i)', 'K1:C10(f)'],
      slides: [
        {
          title: 'もうけのおすそ分け',
          paras: ['個人のお店では、オーナーがもうけから生活費を持ち出す。これは引出し（drawings）で、費用ではなかった。', '会社で、もうけを株主に分けるのが配当（dividend）。考え方は引出しと同じ。費用ではなく、オーナーへの分配になる。']
        },
        {
          title: '配当の決まり方',
          list: ['取締役が金額を決める（declare）。決めるまでは払う義務がない', '1株あたりで決める（dividend per share）。例: 5c per share ＝ 1株5セント', '中間配当（interim dividend）: 期の途中で払う', '期末配当（final dividend）: 決算の後に提案し、株主総会で承認されてから払う'],
          after: '配当は利益剰余金（retained earnings）から払う。share premium からは払えない。'
        },
        {
          title: '例題: 普通株の配当',
          formula: '配当 ＝ 株数 × 1株あたりの配当',
          example: {
            problem: 'たこ焼き株式会社の share capital は $300,000（$0.50 普通株）。1株5セントの中間配当を払った。配当額と仕訳は？',
            steps: ['株数: $300,000 ÷ $0.50 ＝ 600,000 株', '配当: 600,000 × $0.05 ＝ $30,000', 'もうけの分配なので、利益剰余金を減らす（いったん Dividends paid 勘定にためて、期末に retained earnings へ振り替えてもよい。結果は同じ）'],
            answer: 'Dr Retained earnings $30,000 / Cr Cash $30,000'
          }
        },
        {
          title: 'いつ・どこに記帳する？',
          list: ['期中に払った → Dr Retained earnings ／ Cr Cash', '期末までに決めたが、まだ払っていない → Dr Retained earnings ／ Cr Dividends payable（流動負債）', '期末の後に提案した期末配当 → 期末には払う義務がないので、負債にも SOCE にも入れない。注記（note）で開示するだけ'],
          after: '財務諸表では、持分変動計算書（SOCE）の利益剰余金の列から引く。損益計算書（SPL）の費用には入れない。'
        },
        {
          title: '例題: 1年分の配当を集める',
          example: {
            problem: '20X5年中に、20X4年の期末配当 1株4セントを 1,000,000 株に払った。6月に 1 for 4 の無償増資をし、その後 20X5年の中間配当 1株2セントを払った。20X6年2月に、20X5年の期末配当 1株5セントを提案した。20X5年の SOCE に載せる配当は？',
            steps: ['20X4年の期末配当（20X5年に払った）: 1,000,000 × $0.04 ＝ $40,000', '無償増資の後の株数: 1,000,000 ＋ 250,000 ＝ 1,250,000 株', '中間配当: 1,250,000 × $0.02 ＝ $25,000', '20X6年2月の提案は期末の後なので入れない（注記だけ）', '合計: $40,000 ＋ $25,000 ＝ $65,000'],
            answer: '$65,000'
          }
        },
        {
          title: '優先株の配当',
          paras: ['優先株は「額面 × 配当率」で決まる（L118）。例: 6% $1 preference shares $100,000 → $100,000 × 6% ＝ $6,000。'],
          table: {
            caption: '優先株の種類で載せる場所が変わる',
            head: ['優先株の種類', '配当の載せ方'],
            rows: [['償還しない（irredeemable）', 'SOCE で利益剰余金から引く（普通株と同じ）'], ['償還する（redeemable）', 'SPL の finance costs（費用）']]
          }
        },
        {
          title: 'K1: 配当を受け取る側',
          paras: ['会社が他の会社の株を持っていると、配当を受け取る。受け取る配当は収益（dividend income）で、SPL に入る。', '例: 他社の株 20,000 株を持ち、1株10セントの配当が決まった。入金前なら Dr Dividends receivable $2,000 ／ Cr Dividend income $2,000。入金したら Dr Cash ／ Cr Dividends receivable。']
        },
        {
          title: 'よくある間違い',
          paras: ['株数は「配当を払う時点」の株数を使う。期中に増資があれば、その後の配当は増えた株数で計算する。'],
          note: { kind: 'warn', text: '払った配当を SPL の費用に入れる。払う配当は SOCE、受け取る配当は SPL の収益。また、share capital の金額 $300,000 に5セントを掛けて $15,000 とする間違いも多い。掛けるのは株数。' }
        },
        {
          title: 'なぜ？ 配当は費用ではない',
          paras: ['費用は、売上を稼ぐために使ったもの。配当は、稼いだもうけをオーナーに分けたもの。順番が逆になる。', '借入の利息は、もうけがなくても払う義務がある。普通株の配当は、取締役が決めるまで義務がない。だから利息は費用、配当は資本の減少になる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['配当＝株数 × 1株あたりの配当（株数＝share capital ÷ 額面）', '払う配当は Dr Retained earnings ／ Cr Cash。SOCE で引き、SPL には入れない', '期末の後に提案した配当は負債にしない（注記だけ）']
        },
        {
          title: '英単語',
          words: [
            ['dividend per share', 'ディビデンド パー シェア', '1株あたりの配当'],
            ['declare', 'ディクレア', '（配当を）決める・宣言する'],
            ['interim dividend', 'インテリム ディビデンド', '中間配当'],
            ['final dividend', 'ファイナル ディビデンド', '期末配当'],
            ['dividends payable', 'ディビデンズ ペイアブル', '未払配当（流動負債）'],
            ['dividend income / dividends receivable', '', '受取配当（収益）/ 未収配当'],
            ['proposed dividend', 'プロポーズド ディビデンド', '提案された配当']
          ]
        }
      ],
      quiz: [
        { q: 'A company has share capital of $500,000 made up of $0.25 ordinary shares. It pays a dividend of 3 cents per share. What is the total dividend paid?', type: 'number', answer: 60000, unit: '$', explain: '株数 $500,000 ÷ $0.25 ＝ 2,000,000 株。2,000,000 × $0.03 ＝ $60,000。$15,000 は $500,000 に3セントを掛けた間違い。' },
        { q: 'How is an ordinary dividend paid during the year presented in the financial statements?', choices: ['As an expense in the statement of profit or loss', 'As a finance cost in the statement of profit or loss', 'As a deduction from retained earnings in the statement of changes in equity', 'As a non-current liability in the statement of financial position'], answer: 2, explain: '普通株の配当はもうけの分配。SOCE で利益剰余金から引く。finance costs になるのは、償還する優先株の配当と利息。' },
        { q: '決算日の後に、取締役が期末配当を提案した。決算日の財務諸表ではどうする？', choices: ['流動負債に入れる', 'SOCE で利益剰余金から引く', '負債にせず、注記で開示する', 'SPL の費用に入れる'], answer: 2, explain: '決算日にはまだ払う義務がない。だから負債にも SOCE にも入れず、注記で知らせるだけ。' },
        { q: 'During 20X5 a company paid the final dividend for 20X4 of 3c per share on 2,000,000 shares. A 1 for 5 bonus issue was then made, followed by payment of an interim dividend for 20X5 of 2.5c per share. A final dividend for 20X5 of 4c per share was proposed after the year end. What amount of dividends is shown in the statement of changes in equity for 20X5?', choices: ['$110,000', '$120,000', '$156,000', '$216,000'], answer: 1, explain: '20X4年の期末配当 2,000,000 × $0.03 ＝ $60,000。無償増資の後は 2,400,000 株なので中間配当 2,400,000 × $0.025 ＝ $60,000。合計 $120,000。期末の後の提案（$96,000）は入れない。$110,000 は中間配当を増資前の株数で計算した間違い。' },
        { q: '他社の株 10,000 株を持っていて、1株8セントの配当を現金で受け取った。仕訳は？（K1）', choices: ['Dr Cash $800 ／ Cr Dividend income $800', 'Dr Retained earnings $800 ／ Cr Cash $800', 'Dr Cash $800 ／ Cr Retained earnings $800', 'Dr Cash $800 ／ Cr Share capital $800'], answer: 0, explain: '10,000 × $0.08 ＝ $800。受け取る配当は収益なので SPL の dividend income。利益剰余金を直接動かすのは、払う配当のとき。' },
        { q: '7% の償還する優先株（redeemable preference shares）$100,000 の配当 $7,000 は、どこに載せる？', choices: ['SOCE で利益剰余金から引く', 'SPL の finance costs', 'share premium から引く', '載せない'], answer: 1, explain: '償還する優先株は負債なので、その配当は利息と同じ finance costs。償還しない優先株なら SOCE で引く。' }
      ]
    },
    {
      id: 'L126',
      no: 126,
      title: '支払利息を計算して記帳する',
      goal: '借入の仕訳を書き、利息を借りていた期間で計算して、未払利息を含めて元帳と財務諸表に載せられるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D10(j)', 'K1:C10(g)'],
      slides: [
        {
          title: 'ローンの利息は「借りていた期間」で決まる',
          paras: ['100万円を年利6%で借りると、1年の利息は6万円。半年で返せば3万円。', '利息は、借りていた期間で決まる。払う日が来月でも、今月までに借りていた分の利息はもう発生している。']
        },
        {
          title: '借入の記帳（K1 で明記）',
          paras: ['お金を借りたら、現金（資産）と借入（負債）が同じだけ増える。'],
          journal: [
            { side: 'Dr', account: 'Cash（現金）', amount: '200,000' },
            { side: 'Cr', account: '10% loan notes（社債・負債）', amount: '200,000' }
          ],
          list: ['返したとき: Dr Loan notes ／ Cr Cash', '12か月以内に返す分は流動負債、それより先は非流動負債']
        },
        {
          title: '利息の計算',
          formula: '利息 ＝ 借入額 × 年利 × 借りていた月数 ÷ 12',
          paras: ['「10% loan notes $200,000」なら、1年分の利息は $20,000。期の途中で借りたら、月数で按分する。', '費用にするのは「払った額」ではなく「その期に借りていた期間の分」。まだ払っていない分は未払費用（accrual）にする。']
        },
        {
          title: '払った分と、まだの分',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="9か月分のうち6か月分を払い、3か月分が未払い" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">利息は「借りていた期間」で費用にする</text><text x="40" y="76" text-anchor="middle" fill="var(--ink)">4/1</text><text x="218" y="76" text-anchor="middle" fill="var(--ink)">9/30</text><text x="307" y="76" text-anchor="middle" font-weight="600" fill="var(--ink)">12/31</text><text x="396" y="76" text-anchor="middle" fill="var(--ink)">3/31</text><line x1="40" y1="100" x2="396" y2="100" stroke="var(--edge)" stroke-width="2"/><line x1="218" y1="100" x2="307" y2="100" stroke="var(--accent)" stroke-width="8"/><circle cx="40" cy="100" r="5" fill="var(--ink)"/><circle cx="218" cy="100" r="5" fill="var(--ink)"/><circle cx="307" cy="100" r="5" fill="var(--ink)"/><circle cx="396" cy="100" r="5" fill="var(--ink)"/><text x="40" y="128" text-anchor="middle" fill="var(--quiet)">借入</text><text x="218" y="128" text-anchor="middle" fill="var(--quiet)">利払い</text><text x="307" y="128" text-anchor="middle" fill="var(--quiet)">決算日</text><text x="396" y="128" text-anchor="middle" fill="var(--quiet)">利払い</text><text x="129" y="164" text-anchor="middle" fill="var(--ink)">支払済み 6か月</text><text x="129" y="186" text-anchor="middle" fill="var(--ink)">$10,000</text><text x="262" y="164" text-anchor="middle" font-weight="600" fill="var(--ink)">未払い 3か月</text><text x="262" y="186" text-anchor="middle" font-weight="600" fill="var(--ink)">$5,000</text><text x="352" y="164" text-anchor="middle" fill="var(--quiet)">来期の分</text><text x="20" y="224" fill="var(--ink)">当期の費用＝9か月分 $15,000（4/1〜12/31）</text></svg>`,
          caption: '4月1日に借りて、9月30日に半年分を払った。12月31日の時点で、10月〜12月の3か月分はまだ払っていない。'
        },
        {
          title: '例題: 期の途中で借りた',
          example: {
            problem: 'たこ焼き株式会社は 20X5年4月1日に 10% loan notes $200,000 を発行した。利息は毎年9月30日と3月31日に半年分ずつ払う。決算日は12月31日。試算表の loan interest は $10,000。SPL の finance costs と、SFP の未払利息は？',
            steps: ['借りていた期間: 4月1日〜12月31日 ＝ 9か月', '当期の利息: $200,000 × 10% × 9/12 ＝ $15,000', '払った額: $10,000（4月〜9月の半年分）', '未払い: $15,000 − $10,000 ＝ $5,000（10月〜12月）'],
            answer: 'Finance costs $15,000、未払利息 $5,000（流動負債）。仕訳: Dr Finance costs $5,000 ／ Cr Interest payable $5,000'
          }
        },
        {
          title: '元帳と財務諸表',
          tAccount: { name: 'Finance costs（loan interest）', debit: [['Cash', '10,000'], ['Interest payable（未払）', '5,000']], credit: [['Profit or loss', '15,000']] },
          paras: ['SPL: finance costs $15,000。', 'SFP: 10% loan notes $200,000 は非流動負債（返済が12か月より先の場合）、未払利息 $5,000 は流動負債（accruals）。']
        },
        {
          title: '償還する優先株の配当も finance costs',
          paras: ['L118 のとおり、償還する優先株（redeemable preference shares）は負債。だから、その配当は利息と同じ扱いになる。', '例: 8% redeemable preference shares $50,000 → $50,000 × 8% ＝ $4,000 を finance costs に入れる。期末に払っていなければ、未払費用にする。']
        },
        {
          title: 'よくある間違い',
          paras: ['未払利息は loan notes の残高に足さない。借入とは別の流動負債として載せる。'],
          note: { kind: 'warn', text: '試算表の「払った額」をそのまま費用にする。期の途中で借りたのに12か月分で計算する。利息を SOCE に入れる。どれも誤り。利息は借りていた月数で計算し、SPL の finance costs に入れる。' }
        },
        {
          title: 'なぜ？ 利息は払った日ではなく期間で費用にする',
          paras: ['利息は、借りたお金を使わせてもらう「料金」。その期に使った分だけを、その期の費用にする（発生主義、accruals basis）。', '利息は、もうけがなくても払う義務がある。だから費用で、配当のような「もうけの分配」ではない。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['利息＝借入額 × 年利 × 月数 ÷ 12', '当期の費用と払った額の差は未払利息（Dr Finance costs ／ Cr Interest payable）', '借りたら Dr Cash ／ Cr Loan。1年以内に返す分は流動負債']
        },
        {
          title: '英単語',
          words: [
            ['loan notes', 'ローン ノーツ', '社債'],
            ['interest', 'インタレスト', '利息'],
            ['finance costs', 'ファイナンス コスツ', '財務費用（SPL の支払利息など）'],
            ['interest payable / accrued interest', 'インタレスト ペイアブル', '未払利息'],
            ['time-apportion', 'タイム アポーション', '期間（月数）で按分する'],
            ['repayable', 'リペイアブル', '返済すべき（いつ返すか）']
          ]
        }
      ],
      quiz: [
        { q: 'On 1 May 20X5 a company issued $300,000 of 8% loan notes. Interest is paid annually on 30 April. What is the finance cost for the year ended 31 December 20X5?', type: 'number', answer: 16000, unit: '$', explain: '借りていたのは5月〜12月の8か月。$300,000 × 8% × 8/12 ＝ $16,000。12か月分の $24,000 は誤り。' },
        { q: 'Using the same loan notes (issued 1 May 20X5, interest paid annually on 30 April), what liability for accrued interest is shown at 31 December 20X5?', choices: ['$0', '$8,000', '$16,000', '$24,000'], answer: 2, explain: '最初の支払いは20X6年4月30日なので、当期の $16,000 はまだ1円も払っていない。全額が未払利息（流動負債）。' },
        { q: '$100,000 の 9% 借入を1年間ずっと借りていた。試算表の支払利息は $6,000。期末の未払利息は？', type: 'number', answer: 3000, unit: '$', explain: '当期の利息 $100,000 × 9% ＝ $9,000。払ったのは $6,000 なので、$9,000 − $6,000 ＝ $3,000 が未払い。' },
        { q: '銀行から $50,000 を借りて、現金を受け取った。仕訳は？', choices: ['Dr Cash ／ Cr Bank loan', 'Dr Bank loan ／ Cr Cash', 'Dr Cash ／ Cr Share capital', 'Dr Cash ／ Cr Revenue'], answer: 0, explain: '現金（資産）が増えて借方、借入（負債）が増えて貸方。借りたお金は売上でも株でもない。2つ目は返したときの仕訳。' },
        { q: 'A company has $200,000 of 6% redeemable preference shares in issue. How is the $12,000 annual dividend on these shares presented?', choices: ['As a deduction from retained earnings in the statement of changes in equity', 'As a finance cost in the statement of profit or loss', 'As an addition to share premium', 'It is not recorded until the shares are redeemed'], answer: 1, explain: '償還する優先株は負債なので、配当は利息と同じ finance costs。SOCE で引くのは普通株と償還しない優先株の配当。' },
        { q: '銀行借入の残高が $150,000。毎年 $30,000 ずつ返し、次の返済は決算日から6か月後。SFP の流動負債に入る借入は？', choices: ['$0', '$30,000', '$120,000', '$150,000'], answer: 1, explain: '12か月以内に返す $30,000 が流動負債。残りの $120,000 は非流動負債。' }
      ]
    },
    {
      id: 'L127',
      no: 127,
      title: '持分変動計算書（SOCE）を読み書きする',
      goal: '持分変動計算書の目的と中身を説明し、資本の各列の期末残高を計算できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D10(k)', 'A3(a)iii'],
      slides: [
        {
          title: '封筒ごとの通帳',
          paras: ['L119 では、資本を封筒に分けた。家計でいえば「旅行用」「教育用」の封筒のようなもの。', '1年後に「この封筒はなぜ増えた？なぜ減った？」を封筒ごとに説明する表があると便利。それが持分変動計算書（statement of changes in equity、SOCE）。']
        },
        {
          title: 'SOCE の目的',
          paras: ['資本の各項目（share capital、share premium、revaluation surplus、retained earnings）が、期首から期末までにいくら、なぜ変わったかを示す。分けて見せるのは次の3つ。'],
          list: ['株主との取引: 株の発行、配当', '会社の成績: 当期利益、その他の包括利益', '準備金どうしの振替'],
          after: '期末の残高は、そのまま SFP の資本の欄になる。資本の「動画」にあたる財務諸表。'
        },
        {
          title: '何がどの列に入る？',
          table: {
            caption: 'SOCE に出てくる主な項目',
            head: ['項目', '入る列'],
            rows: [
              ['株の発行（issue of share capital。現金・株主割当増資）', 'share capital と share premium'],
              ['無償増資（bonus issue）', '準備金から share capital へ（合計は0）'],
              ['当期利益（profit for the year）', 'retained earnings'],
              ['その他の包括利益（other comprehensive income。再評価益）', 'revaluation surplus'],
              ['配当（dividends。普通株・償還しない優先株）', 'retained earnings から引く'],
              ['超過減価償却の振替（transfer to retained earnings）', 'revaluation surplus から retained earnings へ']
            ]
          }
        },
        {
          title: '包括利益合計（total comprehensive income）',
          paras: ['当期利益（SPL の最後の数字）と、その他の包括利益（OCI、土地の再評価益など）を足したもの。', 'SOCE ではこれを1行にまとめ、利益は retained earnings の列、OCI は revaluation surplus の列に入れる。'],
          formula: 'total comprehensive income ＝ profit for the year ＋ OCI'
        },
        {
          title: '例題: 期末残高を出す',
          example: {
            problem: 'たこ焼き株式会社の20X6年1月1日の資本: Share capital $250,000、Share premium $100,000、Revaluation surplus $30,000、Retained earnings $120,000。20X6年中: 1 for 5 の株主割当増資（$0.80、全部引受け）、配当 $30,000、当期利益 $90,000、土地の再評価益 $20,000、超過減価償却の振替 $2,000。各列の期末残高は？',
            steps: ['株主割当増資: share capital ＋$50,000、share premium ＋$30,000（L124 の例題）', 'share capital: $250,000 ＋ $50,000 ＝ $300,000', 'share premium: $100,000 ＋ $30,000 ＝ $130,000', 'revaluation surplus: $30,000 ＋ $20,000 − $2,000 ＝ $48,000', 'retained earnings: $120,000 ＋ $90,000 − $30,000 ＋ $2,000 ＝ $182,000', '合計: $300,000 ＋ $130,000 ＋ $48,000 ＋ $182,000 ＝ $660,000'],
            answer: 'Share capital $300,000、Share premium $130,000、Revaluation surplus $48,000、Retained earnings $182,000、合計 $660,000'
          }
        },
        {
          title: '完成した SOCE',
          svg: `<svg viewBox="0 0 440 360" role="img" aria-label="たこ焼き株式会社の持分変動計算書" font-size="14"><text x="20" y="28" font-size="17" font-weight="600" fill="var(--ink)">持分変動計算書（単位 $000）</text><text x="208" y="62" text-anchor="end" font-weight="600" fill="var(--ink)">SC</text><text x="260" y="62" text-anchor="end" font-weight="600" fill="var(--ink)">SP</text><text x="312" y="62" text-anchor="end" font-weight="600" fill="var(--ink)">RS</text><text x="364" y="62" text-anchor="end" font-weight="600" fill="var(--ink)">RE</text><text x="416" y="62" text-anchor="end" font-weight="600" fill="var(--ink)">合計</text><line x1="20" y1="72" x2="420" y2="72" stroke="var(--edge)" stroke-width="1.25"/><text x="28" y="98" fill="var(--ink)">期首残高</text><text x="208" y="98" text-anchor="end" fill="var(--ink)">250</text><text x="260" y="98" text-anchor="end" fill="var(--ink)">100</text><text x="312" y="98" text-anchor="end" fill="var(--ink)">30</text><text x="364" y="98" text-anchor="end" fill="var(--ink)">120</text><text x="416" y="98" text-anchor="end" fill="var(--ink)">500</text><text x="28" y="128" fill="var(--ink)">株主割当増資</text><text x="208" y="128" text-anchor="end" fill="var(--ink)">50</text><text x="260" y="128" text-anchor="end" fill="var(--ink)">30</text><text x="312" y="128" text-anchor="end" fill="var(--quiet)">–</text><text x="364" y="128" text-anchor="end" fill="var(--quiet)">–</text><text x="416" y="128" text-anchor="end" fill="var(--ink)">80</text><text x="28" y="158" fill="var(--ink)">配当</text><text x="208" y="158" text-anchor="end" fill="var(--quiet)">–</text><text x="260" y="158" text-anchor="end" fill="var(--quiet)">–</text><text x="312" y="158" text-anchor="end" fill="var(--quiet)">–</text><text x="364" y="158" text-anchor="end" fill="var(--ink)">(30)</text><text x="416" y="158" text-anchor="end" fill="var(--ink)">(30)</text><text x="28" y="188" fill="var(--ink)">包括利益合計</text><text x="208" y="188" text-anchor="end" fill="var(--quiet)">–</text><text x="260" y="188" text-anchor="end" fill="var(--quiet)">–</text><text x="312" y="188" text-anchor="end" fill="var(--ink)">20</text><text x="364" y="188" text-anchor="end" fill="var(--ink)">90</text><text x="416" y="188" text-anchor="end" fill="var(--ink)">110</text><text x="28" y="218" fill="var(--ink)">再評価剰余金の振替</text><text x="208" y="218" text-anchor="end" fill="var(--quiet)">–</text><text x="260" y="218" text-anchor="end" fill="var(--quiet)">–</text><text x="312" y="218" text-anchor="end" fill="var(--ink)">(2)</text><text x="364" y="218" text-anchor="end" fill="var(--ink)">2</text><text x="416" y="218" text-anchor="end" fill="var(--quiet)">–</text><line x1="20" y1="232" x2="420" y2="232" stroke="var(--edge)" stroke-width="1.25"/><rect x="20" y="238" width="400" height="30" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="28" y="258" font-weight="600" fill="var(--ink)">期末残高</text><text x="208" y="258" text-anchor="end" font-weight="600" fill="var(--ink)">300</text><text x="260" y="258" text-anchor="end" font-weight="600" fill="var(--ink)">130</text><text x="312" y="258" text-anchor="end" font-weight="600" fill="var(--ink)">48</text><text x="364" y="258" text-anchor="end" font-weight="600" fill="var(--ink)">182</text><text x="416" y="258" text-anchor="end" font-weight="600" fill="var(--ink)">660</text><text x="20" y="300" fill="var(--quiet)">SC 株式資本　SP 株式払込剰余金</text><text x="20" y="324" fill="var(--quiet)">RS 再評価剰余金　RE 利益剰余金</text><text x="20" y="348" fill="var(--ink)">包括利益合計 110 ＝ 当期利益 90 ＋ OCI 20</text></svg>`,
          caption: '期末残高の行が、そのまま SFP の資本になる。振替は列の間で移すだけなので、合計の列は0（–）。'
        },
        {
          title: '合計の列だけで検算する',
          formula: '期末の資本 ＝ 期首 ＋ 包括利益合計 ＋ 株の発行 − 配当',
          paras: ['例題では $500,000 ＋ $110,000 ＋ $80,000 − $30,000 ＝ $660,000。各列の合計と一致する。', '無償増資と準備金の振替は、資本の中で列を移すだけなので、合計を変えない。']
        },
        {
          title: 'SOCE に入らないもの',
          paras: ['売上や費用の1つ1つは SOCE に出てこない。それは SPL の仕事で、SOCE には結果の当期利益が1行で入るだけ。'],
          note: { kind: 'warn', text: '借入の利息、償還する優先株の配当、受け取った配当を SOCE に入れる。どれも SPL の中（当期利益の計算の中）で処理する。SOCE に直接入る配当は、払った普通株と償還しない優先株の配当だけ。' }
        },
        {
          title: 'なぜ？ 稼いだのか、払い込まれたのか',
          paras: ['資本が増えた理由が「会社が稼いだから」なのか「株主がお金を追加したから」なのかで、意味がまったく違う。', '同じ $100,000 の増加でも、稼いだなら会社の実力。追加の払い込みなら、株主のお金が増えただけ。SOCE はこの2つを分けて見せるので、オーナーが資本の動きを正しく読める。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['SOCE は資本の列ごとに、期首 → 増減 → 期末を示す', '株主との取引（株の発行・配当）と、成績（包括利益合計）を分けて載せる', '無償増資と準備金の振替は列の間の移動で、合計は変わらない']
        },
        {
          title: '英単語',
          words: [
            ['statement of changes in equity (SOCE)', '', '持分変動計算書'],
            ['total comprehensive income', 'トータル コンプリヘンシブ インカム', '包括利益合計'],
            ['other comprehensive income (OCI)', '', 'その他の包括利益'],
            ['profit for the year', 'プロフィット フォー ザ イヤー', '当期利益'],
            ['issue of share capital / dividends paid', '', '株の発行 / 払った配当（SOCE の行の名前）'],
            ['transfer', 'トランスファー', '振替'],
            ['balance at the start / end of the year', '', '期首残高 / 期末残高']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following would NOT appear in the statement of changes in equity of a company?', choices: ['Dividends paid on ordinary shares', 'A gain on the revaluation of land', 'Interest paid on loan notes', 'An issue of shares for cash'], answer: 2, explain: '社債の利息は SPL の finance costs で、当期利益の中に入る。SOCE に個別には出てこない。配当・再評価益・株の発行は SOCE に載る。' },
        { q: 'Total equity at the start of the year was $750,000. During the year: profit for the year $120,000, revaluation gain $30,000, issue of shares for cash $100,000, dividends paid $40,000, and a bonus issue of $50,000 from share premium. What is total equity at the end of the year?', type: 'number', answer: 960000, unit: '$', explain: '$750,000 ＋ $120,000 ＋ $30,000 ＋ $100,000 − $40,000 ＝ $960,000。無償増資は資本の中で列を移すだけなので、合計は変わらない。' },
        { q: '持分変動計算書（SOCE）の目的として正しいものは？', choices: ['ある1日の資産と負債を示す', '1年間の売上と費用を1つずつ示す', '資本の各項目が期首から期末までになぜ・いくら変わったかを示す', '1年間の現金の出入りを示す'], answer: 2, explain: '1つ目は SFP、2つ目は SPL、4つ目はキャッシュフロー計算書の目的。' },
        { q: '土地の再評価益（その他の包括利益）は、SOCE のどの列に入る？', choices: ['Share capital', 'Share premium', 'Revaluation surplus', 'Retained earnings'], answer: 2, explain: '再評価益は OCI で、revaluation surplus の列に入る。当期利益は retained earnings の列。' },
        { q: 'How is a bonus issue funded from share premium shown in the statement of changes in equity?', choices: ['An increase in share capital and an increase in total equity', 'A decrease in share premium and an increase in share capital, with no change in total equity', 'A decrease in retained earnings and a decrease in cash', 'It is not shown in the statement of changes in equity'], answer: 1, explain: '無償増資は share premium から share capital へ移すだけ。現金は動かず、資本の合計も変わらない。' },
        { q: '期首の利益剰余金 $200,000、当期利益 $70,000、払った配当 $25,000、再評価剰余金からの超過減価償却の振替 $3,000。期末の利益剰余金は？', type: 'number', answer: 248000, unit: '$', explain: '$200,000 ＋ $70,000 − $25,000 ＋ $3,000 ＝ $248,000。振替は revaluation surplus から retained earnings へなので足す。' }
      ]
    }
  ],
  cards: [
    { id: 'L123-1', lesson: 'L123', q: '株主割当増資（rights issue）とは？', a: '今の株主に、持ち株に比例して、株価より安く新しい株を売る発行' },
    { id: 'L123-2', lesson: 'L123', q: '無償増資と株主割当増資の一番の違いは？', a: '株主割当増資は株主がお金を払うので、現金と資本が増える' },
    { id: 'L123-3', lesson: 'L123', q: '株主割当増資のメリットを3つ', a: '現金が入る（返済・利息なし）、発行費用が少ない、割安で成功しやすい' },
    { id: 'L123-4', lesson: 'L123', q: '株主割当増資のデメリットを3つ', a: '集まる額が少ない、引き受けない株主が薄まる、株価が下がる' },
    { id: 'L123-5', lesson: 'L123', q: 'なぜ今の株主に先に声をかける？', a: '安く売ると今のオーナーの割合と1株の値打ちが下がるので、チャンスを先に渡すため' },
    { id: 'L124-1', lesson: 'L124', q: '株主割当増資で受け取る現金の計算は？', a: '新しい株数 × rights price（株価ではない）' },
    { id: 'L124-2', lesson: 'L124', q: '株主割当増資の仕訳は？', a: 'Dr Cash ／ Cr Share capital（額面の分）／ Cr Share premium（残り）' },
    { id: 'L124-3', lesson: 'L124', q: '$0.50 株 500,000 株、1 for 5 at $0.80。share premium の増加は？', a: '100,000 株 × $0.30 ＝ $30,000' },
    { id: 'L124-4', lesson: 'L124', q: '無償増資と株主割当増資が同じ年にあるときは？', a: '起きた順に1つずつ計算する。後の比率は増えた後の株数に掛ける' },
    { id: 'L124-5', lesson: 'L124', q: '1 for 2 の発行で新しい株が 300,000 株。発行前は？', a: '600,000 株（新しい株の2倍）' },
    { id: 'L125-1', lesson: 'L125', q: '配当の計算式は？', a: '株数 × 1株あたりの配当。株数＝share capital ÷ 額面' },
    { id: 'L125-2', lesson: 'L125', q: '払った普通株の配当の仕訳と載せる場所は？', a: 'Dr Retained earnings ／ Cr Cash。SOCE で引く（SPL には入れない）' },
    { id: 'L125-3', lesson: 'L125', q: '決算日の後に提案した期末配当は？', a: '負債にしない。注記で開示するだけ' },
    { id: 'L125-4', lesson: 'L125', q: '償還する優先株の配当はどこ？', a: 'SPL の finance costs（費用）' },
    { id: 'L125-5', lesson: 'L125', q: '受け取る配当（K1）の仕訳は？', a: 'Dr Cash（または Dividends receivable）／ Cr Dividend income（SPL）' },
    { id: 'L125-6', lesson: 'L125', q: 'なぜ配当は費用ではない？', a: '稼いだもうけをオーナーに分けたものだから。決めるまで払う義務もない' },
    { id: 'L126-1', lesson: 'L126', q: '利息の計算式は？', a: '借入額 × 年利 × 借りていた月数 ÷ 12' },
    { id: 'L126-2', lesson: 'L126', q: '当期の利息より払った額が少ないときの仕訳は？', a: 'Dr Finance costs ／ Cr Interest payable（未払利息、流動負債）' },
    { id: 'L126-3', lesson: 'L126', q: '借入をしたときの仕訳は？', a: 'Dr Cash ／ Cr Loan（負債）' },
    { id: 'L126-4', lesson: 'L126', q: '4月1日に 10% $200,000 を借りた。12月決算の利息は？', a: '$200,000 × 10% × 9/12 ＝ $15,000' },
    { id: 'L126-5', lesson: 'L126', q: '借入の流動・非流動の分け方は？', a: '12か月以内に返す分は流動負債、それより先は非流動負債' },
    { id: 'L126-6', lesson: 'L126', q: 'なぜ利息は払った日でなく期間で費用にする？', a: '借りたお金を使った期間の料金だから（発生主義）' },
    { id: 'L127-1', lesson: 'L127', q: 'SOCE の目的は？', a: '資本の各項目が期首から期末までになぜ・いくら変わったかを示す' },
    { id: 'L127-2', lesson: 'L127', q: '包括利益合計（TCI）とは？', a: '当期利益 ＋ その他の包括利益（OCI）' },
    { id: 'L127-3', lesson: 'L127', q: '再評価益と当期利益は SOCE のどの列？', a: '再評価益は revaluation surplus、当期利益は retained earnings' },
    { id: 'L127-4', lesson: 'L127', q: '期末の資本の合計の検算式は？', a: '期首 ＋ 包括利益合計 ＋ 株の発行 − 配当' },
    { id: 'L127-5', lesson: 'L127', q: '無償増資と準備金の振替は、資本の合計を変える？', a: '変えない。列の間で移すだけ' },
    { id: 'L127-6', lesson: 'L127', q: 'SOCE に入らないものの例は？', a: '借入の利息、償還する優先株の配当、受け取った配当（どれも SPL の中）' }
  ]
});
