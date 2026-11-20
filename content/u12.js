(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 12,
  part: 7,
  partTitle: '無形資産',
  lessons: [
    {
      id: 'L58',
      no: 58,
      title: '有形と無形の違い、無形資産の種類',
      goal: '触れる資産と触れない資産の違いを説明し、資産として載せられる無形資産と載せられないものを見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D6(a)', 'D6(b)'],
      slides: [
        {
          title: 'スマホ本体と、中のアプリ',
          paras: ['スマホの本体は手で触れる。でも、お金を払って入れた買い切りの有料アプリは触れない。', 'どちらもお金を払って手に入れ、何年も使い続けて役に立つ。違うのは「触れるかどうか」だけ。']
        },
        {
          title: 'たこ焼き屋の非流動資産',
          paras: ['焼き器やワゴン車は手で触れる。前の部で学んだ有形固定資産（property, plant and equipment）。', 'たこ焼き屋が $20,000 を払って、人気チェーンの店名とレシピを5年間使う権利（フランチャイズ、franchise）を手に入れたとする。この権利は触れないが、何年も客を呼んでくれる。これが無形資産（intangible asset）。']
        },
        {
          title: '有形と無形',
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="非流動資産の主な2つは有形と無形" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">非流動資産の主な2つ</text><rect x="120" y="50" width="200" height="50" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="72" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">非流動資産</text><text x="220" y="91" text-anchor="middle" font-size="12.5" fill="var(--quiet)">non-current assets</text><path d="M220 100L115 130M220 100L325 130" stroke="var(--edge)" stroke-width="1.25" fill="none"/><rect x="20" y="130" width="190" height="150" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="158" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">有形</text><text x="115" y="178" text-anchor="middle" font-size="12.5" fill="var(--quiet)">tangible</text><text x="115" y="206" text-anchor="middle" fill="var(--ink)">形があり、触れる</text><text x="115" y="232" text-anchor="middle" fill="var(--ink)">焼き器・車・建物</text><text x="115" y="258" text-anchor="middle" fill="var(--quiet)">→ 有形固定資産</text><rect x="230" y="130" width="190" height="150" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="158" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">無形</text><text x="325" y="178" text-anchor="middle" font-size="12.5" fill="var(--quiet)">intangible</text><text x="325" y="206" text-anchor="middle" fill="var(--ink)">形がなく、触れない</text><text x="325" y="232" text-anchor="middle" fill="var(--ink)">特許・商標・ソフト</text><text x="325" y="258" text-anchor="middle" fill="var(--quiet)">→ 無形資産</text><text x="220" y="308" text-anchor="middle" fill="var(--ink)">どちらも1年を超えて役に立つ</text></svg>`,
          caption: '有形も無形も、1年を超えて使う非流動資産。物理的な形があるかどうかで分かれる（ほかに長期の投資なども非流動資産）。'
        },
        {
          title: '無形資産の定義（IAS 38）',
          paras: ['無形資産のルールは IAS 38 という基準にある。無形資産は「物理的な形のない、識別可能な非貨幣性資産」。'],
          list: ['物理的な形がない（without physical substance）', '識別可能（identifiable）: 切り離して売れる、または契約や法律で守られた権利である', '非貨幣性（non-monetary）: 現金や売掛金のような「決まった額のお金を受け取る権利」ではない']
        },
        {
          title: '資産として載せる条件',
          paras: ['財政状態計算書に資産として載せる（認識する、recognise）には、次の3つがそろう必要がある。1つ目は資産の定義そのもの、2つ目と3つ目が IAS 38 の認識の条件。'],
          list: ['会社が支配している（control）: 他の人に使わせない力がある', '将来の経済的便益（future economic benefits）が入ってくる可能性が高い', '原価（cost）を信頼できる形で測れる'],
          after: '載せるときは、最初は原価（cost）で記録する。'
        },
        {
          title: '主な無形資産',
          table: {
            caption: '試験によく出る無形資産',
            head: ['種類', '例'],
            rows: [
              ['特許権（patent）', '新しい焼き器の発明を独占する権利'],
              ['商標権・ブランド（trademark / brand）', '他社から買った店名やロゴ'],
              ['著作権（copyright）', '本・音楽・動画を独占する権利'],
              ['ライセンス・フランチャイズ（licence / franchise）', '他社の名前や技術を使う権利'],
              ['ソフトウェア（computer software）', '会計ソフト、注文アプリ'],
              ['開発費（development costs）', '条件を満たした新商品の開発費（次のレッスン）'],
              ['のれん（goodwill）', '会社を丸ごと買って、純資産より多く払った分（連結の部で学ぶ）']
            ]
          }
        },
        {
          title: '原価に入れるもの',
          paras: ['家を買うと、代金のほかに登記の費用や司法書士への報酬も払う。どれも家を手に入れるのに欠かせないので、家の値段に入れる。', '無形資産も同じ。買った特許や商標の原価は、購入代金に、名義の移転や登録に直接かかった費用（法律費用、出願料・登録料など）を足した額。この分も資産にする（資本化）。', 'ただし、自分で育てたブランドやのれんは、これまでどおり載せない（次のスライド）。'],
          example: {
            problem: 'Tako Co は他社から商標を $8,000 で買った。名義を移す法律費用 $500、商標の登録料 $300 も払った。新しい店名の広告に $2,000 使った。商標の原価と、費用にする金額は？',
            steps: ['購入代金 $8,000 は原価', '法律費用 $500 と登録料 $300 は、商標を手に入れるのに直接かかった → 原価に入れる', '原価: $8,000 ＋ $500 ＋ $300 ＝ $8,800', '広告費 $2,000 は商標を手に入れる費用ではない → 費用'],
            answer: '商標（無形資産）$8,800、費用 $2,000'
          }
        },
        {
          title: '自分で育てたものは載せない',
          paras: ['他社から買ったブランドは、払った金額という原価がはっきりしている。だから資産に載せる。', '一方、自分で何年もかけて育てた店名・ロゴ・顧客リスト・のれんは、資産に載せられない（IAS 38）。', '広告費、従業員の研修費、開業準備の費用も、使ったときに費用（expense）にする。']
        },
        {
          title: 'なぜ？ 「買ったもの」だけ載せる理由',
          paras: ['自分で育てたブランドは、いくらかかったのかを信頼できる形で測れない。広告費や接客の努力のうち、どこまでがブランドを作ったのか切り分けられないから。', '「価値がありそう」というだけで載せると、会社を実際より良く見せてしまう。売り買いされたものなら、払った金額という客観的な証拠がある。'],
          note: { kind: 'warn', text: 'よくある間違い: 「価値があるもの＝資産」と考える。有名な自社ブランドでも、自分で育てたものは載せない。逆に、他社から買ったブランドは原価で載せる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['無形資産＝物理的な形がなく、識別可能な非貨幣性資産', '特許権・商標権・著作権・ライセンス・ソフトウェア・開発費・のれんなどがある', '買ったものは原価（購入代金＋法律費用・登録料など）で載せる。自分で育てたブランドやのれんは載せない']
        },
        {
          title: '英単語',
          words: [
            ['tangible asset', 'タンジブル アセット', '有形資産（触れる資産）'],
            ['intangible asset', 'インタンジブル アセット', '無形資産（触れない資産）'],
            ['physical substance', 'フィジカル サブスタンス', '物理的な形'],
            ['identifiable', 'アイデンティファイアブル', '識別可能'],
            ['patent', 'パテント', '特許権'],
            ['trademark / brand', 'トレードマーク / ブランド', '商標権・ブランド'],
            ['copyright', 'コピーライト', '著作権'],
            ['licence / franchise', 'ライセンス / フランチャイズ', '他社の名前や技術を使う権利'],
            ['goodwill', 'グッドウィル', 'のれん'],
            ['legal fees', 'リーガル フィーズ', '弁護士などへの法律費用（原価に入れる）'],
            ['registration costs', 'レジストレーション コスツ', '出願料・登録料（原価に入れる）'],
            ['internally generated', 'インターナリー ジェネレイテッド', '自社で作り出した（自分で育てた）']
          ]
        }
      ],
      quiz: [
        { q: 'たこ焼き屋の資産のうち、無形資産（intangible asset）はどれ？', choices: ['配達用のワゴン車', '焼き器', '他社から買った店名の商標権', '店の建物'], answer: 2, explain: '商標権は物理的な形がない権利なので無形資産。車・焼き器・建物は触れるので有形固定資産。' },
        { q: 'Which of the following is an intangible non-current asset?', choices: ['A delivery van', 'A purchased patent', 'Inventory of flour', 'Trade receivables'], answer: 1, explain: '特許権は形のない非流動資産。van は有形固定資産。在庫（inventory）は流動資産。売掛金は「決まった額のお金を受け取る権利」なので貨幣性で、無形資産ではない。' },
        { q: '何年もかけて自社で育てた人気ブランド。財政状態計算書に資産として載せる？', choices: ['載せる。価値が高いから', '載せない。原価を信頼できる形で測れないから', '載せる。これまでの広告費の合計を原価にする', '載せない。ブランドは有形資産だから'], answer: 1, explain: '自分で育てたブランドは載せられない（IAS 38）。広告費のどこまでがブランドを作ったか切り分けられないので、広告費を原価にすることもできない。' },
        { q: 'Which of the following can be recognised as an intangible asset in the statement of financial position?', choices: ['A brand name developed internally over ten years', 'The cost of a staff training course', 'A licence purchased from another company to use its software', 'An advertising campaign expected to increase sales'], answer: 2, explain: '他社から買ったライセンスは原価がはっきりしているので無形資産。自社で育てたブランド、研修費、広告費は費用にする。' },
        { q: '焼き器（有形）と商標権（無形）。共通することは？', choices: ['どちらも1年を超えて使う非流動資産', 'どちらも流動資産', 'どちらも買った年に全部費用にする', 'どちらも負債'], answer: 0, explain: '形があるかどうかが違うだけで、どちらも長く役に立つ非流動資産。買った年に全部費用にはしない。' },
        { q: 'A company buys a patent for $20,000. It also pays legal fees of $1,500 to register the patent in its name, and spends $3,000 advertising the product that uses the patent. At what amount should the patent be recognised?', choices: ['$20,000', '$21,500', '$24,500', '$23,000'], answer: 1, explain: '購入代金 $20,000 ＋ 登録の法律費用 $1,500 ＝ $21,500。法律費用は特許を手に入れるのに直接かかったので資本化する。広告費 $3,000 は費用。$20,000 は法律費用を費用にした間違い、$24,500 は広告費まで入れた間違い、$23,000 は広告費を入れて法律費用を抜いた間違い。' }
      ]
    },
    {
      id: 'L59',
      no: 59,
      title: '研究と開発の定義と処理',
      goal: '研究と開発を見分け、それぞれを費用にするか資産にするかを判断できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D6(c)'],
      slides: [
        {
          title: '食べ歩きと試作の違い',
          paras: ['自分の店を開くために、いろいろな店を食べ歩いて「おいしいスープとは何か」を調べる。この段階では、役に立つかどうかまだ分からない。', 'スープの方向が決まったら、店で出すための試作を重ね、作り方と道具を決める。売る道筋が見えてきた段階。'],
          after: '前の段階が「研究」、後の段階が「開発」にあたる。'
        },
        {
          title: '研究（research）とは',
          paras: ['研究は、新しい科学的・技術的な知識や理解を得るために行う、独自の計画的な調査。', 'たこ焼き屋なら「冷めてもカリッとする生地の原理を、大学と一緒に調べる実験」。'],
          list: ['新しい知識を得るための活動', '研究の成果をどう使えるかの探索', '材料や作り方の代わりになる案を探す']
        },
        {
          title: '開発（development）とは',
          paras: ['開発は、研究の成果や他の知識を、新しい（または大きく改良した）製品や作り方の計画・設計に当てはめること。商業生産や使用が始まる前の段階。', 'たこ焼き屋なら「冷凍たこ焼きの試作品（prototype）を作り、量産用の型を設計して試験する」。'],
          list: ['量産前の試作品の設計・製作・テスト', '新しい技術を使う道具や型の設計', '試験用の工場（pilot plant）の設計・運転']
        },
        {
          title: '開発費を資産にする6つの条件',
          paras: ['開発の段階でも、次の6つを全部示せたときだけ無形資産にする（資本化、capitalise）。1つでも欠けたら費用。頭文字で PIRATE と覚える。'],
          list: ['P: 将来の経済的便益が入る可能性が高い（probable）。売れる市場があるなど', 'I: 完成させて使う・売る意図がある（intention）', 'R: 完成に必要な資金などの資源がある（resources）', 'A: 使う・売る能力がある（ability）', 'T: 技術的に完成できる（technical feasibility）', 'E: 支出を信頼できる形で測れる（expenditure）']
        },
        {
          title: '処理の流れ',
          svg: `<svg viewBox="0 0 440 340" role="img" aria-label="研究と条件前の開発は費用、条件を満たした後の開発は資産" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">研究と開発の処理の流れ</text><rect x="20" y="52" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="80" font-size="16" font-weight="600" fill="var(--ink)">研究</text><text x="40" y="102" font-size="12.5" fill="var(--quiet)">research</text><text x="400" y="91" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">費用（SPL）</text><path d="M220 120V140M213 133L220 140L227 133" stroke="var(--edge)" stroke-width="1.5" fill="none"/><rect x="20" y="144" width="400" height="64" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="40" y="172" font-size="16" font-weight="600" fill="var(--ink)">開発（条件を満たす前）</text><text x="40" y="194" font-size="12.5" fill="var(--quiet)">development</text><text x="400" y="183" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">費用（SPL）</text><path d="M220 212V232M213 225L220 232L227 225" stroke="var(--edge)" stroke-width="1.5" fill="none"/><rect x="20" y="236" width="400" height="64" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="40" y="264" font-size="16" font-weight="600" fill="var(--ink)">開発（条件を満たした後）</text><text x="40" y="286" font-size="12.5" fill="var(--quiet)">development</text><text x="400" y="275" text-anchor="end" font-size="16" font-weight="600" fill="var(--ink)">資産（SFP）</text><text x="220" y="326" text-anchor="middle" fill="var(--ink)">販売が始まったら、この資産を償却する</text></svg>`,
          caption: '研究はいつも費用。開発は、6つの条件を全部満たした後の支出だけが資産（無形資産）になる。'
        },
        {
          title: 'さらに3つのルール',
          list: ['条件を満たしたら、資産にするのは義務。会社が「費用にしたい」と選ぶことはできない', '研究の段階と開発の段階を区別できないときは、全部を研究として費用にする', '一度費用にした支出は、後で条件を満たしても資産に戻さない（さかのぼって資本化しない）']
        },
        {
          title: 'なぜ？ 研究は費用、開発は資産',
          paras: ['研究の段階では、その支出が将来お金を生むかどうか、まだ誰にも分からない。分からないものを資産に載せると、会社を実際より良く見せてしまう。だから費用にする。', '6つの条件が示せた開発は、将来の売上につながる見込みがはっきりしている。将来に役立つ「持ち物」なので資産にし、売上が出る年に少しずつ費用にする。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「開発」という言葉が付いていれば資産、と考えてしまう。条件を全部満たす前の開発費は費用。逆に、研究費はどんなに有望でも資産にならない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['研究はいつも費用（SPL）', '開発は PIRATE の6条件をすべて満たした後の支出だけ資産（SFP）。資産にするのは義務', '満たす前の支出は費用。後から資産に戻さない']
        },
        {
          title: '英単語',
          words: [
            ['research', 'リサーチ', '研究'],
            ['development', 'ディベロップメント', '開発'],
            ['capitalise', 'キャピタライズ', '資産として計上する（資本化する）'],
            ['technical feasibility', 'テクニカル フィージビリティ', '技術的に完成できること'],
            ['commercial production', 'コマーシャル プロダクション', '商業生産（本格的に作って売ること）'],
            ['prototype', 'プロトタイプ', '試作品'],
            ['IAS 38 Intangible Assets', '', '無形資産の会計基準']
          ]
        }
      ],
      quiz: [
        { q: 'たこ焼き屋が大学と組んで「冷めてもカリッとする生地の原理」を調べる実験に $5,000 使った。処理は？', choices: ['研究なので費用（SPL）', '開発なので資産（SFP）', '研究なので資産（SFP）', '結果が出る翌年まで記録しない'], answer: 0, explain: '新しい知識を得るための調査なので研究。研究はいつも費用。' },
        { q: 'Which of the following should be treated as research expenditure?', choices: ['Testing a pre-production prototype of a new machine', 'Designing tools for a new product using new technology', 'Original investigation to gain new scientific knowledge', 'Running a pilot plant before commercial production'], answer: 2, explain: '新しい科学的知識を得るための独自の調査は研究。試作品のテスト、道具の設計、試験工場は開発の例。' },
        { q: 'Development expenditure meets all the criteria in IAS 38. How should it be treated?', choices: ['It may be capitalised or expensed, at the choice of the company', 'It must be capitalised as an intangible asset', 'It must be expensed to profit or loss', 'It must be capitalised as property, plant and equipment'], answer: 1, explain: '条件を全部満たしたら、無形資産にしなければならない（義務）。会社は選べない。形がないので PPE ではない。' },
        { q: 'ある開発プロジェクトで、「完成させる資金が足りること」がまだ示せていない。ほかの5条件は満たしている。処理は？', choices: ['資産にする。5つ満たせば十分', '費用にする。6つ全部そろわないといけない', '半分だけ資産にする', '負債にする'], answer: 1, explain: '資源（resources）の条件が欠けている。1つでも欠けたら費用。' },
        { q: '前年に費用にした開発費 $8,000。今年、すべての条件を満たした。前年の $8,000 は？', choices: ['今年、資産に振り替える', '費用のまま。さかのぼって資産にしない', '今年の利益に足し戻す', '負債に振り替える'], answer: 1, explain: '一度費用にした支出は、後で条件を満たしても資産に戻さない。資産にできるのは、条件を満たした後の支出だけ。' },
        { q: 'Which of the following is NOT one of the IAS 38 criteria for capitalising development expenditure?', choices: ['Technical feasibility of completing the asset', 'Adequate resources to complete the project', 'The project will be completed within one year', 'The expenditure can be measured reliably'], answer: 2, explain: '期間の長さは条件にない。T（技術的に完成できる）、R（資源がある）、E（支出を測れる）は PIRATE の一部。' }
      ]
    },
    {
      id: 'L60',
      no: 60,
      title: '開発費の資産計上額を計算する',
      goal: '与えられた情報から、資産にする開発費と費用にする金額を計算し、仕訳できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D6(d)'],
      slides: [
        {
          title: '家の値段は、いつからの支払い？',
          paras: ['家を建てる前に住宅展示場を回った交通費や雑誌代は、家の値段に入れない。', '建てると決めて、設計と工事が始まってからの支払いが家の値段になる。', '開発費も同じ。「6つの条件をすべて満たした日」を境に、前は費用、後は資産に分ける。']
        },
        {
          title: '計算は3ステップ',
          list: ['① 研究の支出 → 全部費用', '② 開発の支出を、6条件をすべて満たした日の「前」と「後」に分ける', '③ 前の分は費用、後の分は資産（無形資産）'],
          formula: '費用＝研究＋条件前の開発　資産＝条件後の開発'
        },
        {
          title: '資産に入れる支出・入れない支出',
          paras: ['条件を満たした後でも、資産に入れるのは開発に直接かかった支出だけ。'],
          table: {
            caption: '開発費の原価',
            head: ['入れる（直接かかった）', '入れない（費用にする）'],
            rows: [
              ['材料費', '本社の家賃などの一般管理費'],
              ['開発に携わる人の給与', '販売や広告の費用'],
              ['開発で使う機械の減価償却費', '新しい工程を使う人の研修費'],
              ['特許の登録料', '最初の運転で出た損失やムダ']
            ]
          }
        },
        {
          title: '仕訳',
          paras: ['費用の分と資産の分で、借方の勘定が変わる。貸方は現金（または買掛金など）。例: 研究 $3,000 と条件後の開発 $7,000 を現金で払った。'],
          journal: [
            { side: 'Dr', account: 'Research and development expense（費用・SPL）', amount: '3,000' },
            { side: 'Dr', account: 'Development expenditure（無形資産・SFP）', amount: '7,000' },
            { side: 'Cr', account: 'Cash', amount: '10,000' }
          ]
        },
        {
          title: '例題①: 年の途中で条件を満たす',
          example: {
            problem: 'Tako Co は冷凍たこ焼きを開発中。20X5年1月〜12月の開発費は毎月 $6,000。6つの条件をすべて満たしたのは 20X5年5月1日。決算日は12月31日。20X5年に資産にする金額と、費用にする金額は？',
            steps: ['条件を満たす前: 1月〜4月の4か月', '費用: $6,000 × 4 ＝ $24,000', '条件を満たした後: 5月〜12月の8か月', '資産: $6,000 × 8 ＝ $48,000', '確認: $24,000 ＋ $48,000 ＝ $72,000（12か月分）'],
            answer: '資産（開発費）$48,000、費用 $24,000'
          }
        },
        {
          title: '例題②: 研究と開発が混ざっている',
          example: {
            problem: '20X6年、Tako Co は次の支出をした。(1) 新しい生地の原理を調べる研究 $15,000 (2) プロジェクトA（6条件をすべて満たす）の開発 $40,000 (3) プロジェクトB（売れる市場があるかまだ示せない）の開発 $12,000。資産と費用はそれぞれいくら？',
            steps: ['(1) は研究 → 費用 $15,000', '(2) は条件を満たした開発 → 資産 $40,000', '(3) は「将来の便益（P）」が示せない → 費用 $12,000', '費用の合計: $15,000 ＋ $12,000 ＝ $27,000'],
            answer: '資産 $40,000、費用 $27,000'
          }
        },
        {
          title: 'プロジェクトが失敗したら',
          paras: ['資産にした後で、技術的に完成できないと分かったり、売れる見込みがなくなったりしたら、その開発費はもう将来のお金を生まない。', 'そのときは資産の残高を全部、その年の費用にする（write off）。例: 資産にしていた $40,000 を全額落とす。'],
          journal: [
            { side: 'Dr', account: 'Development costs written off（費用・SPL）', amount: '40,000' },
            { side: 'Cr', account: 'Development expenditure（無形資産）', amount: '40,000' }
          ]
        },
        {
          title: 'なぜ？ 境目で分ける理由',
          paras: ['条件を満たした日は、将来の売上につながると「示せた」日。その前の支出は、まだ当てがない段階で使ったお金なので、後でうまくいっても資産には戻さない。', '直接かかった支出だけ入れるのは、開発費を膨らませないため。本社の家賃のように、開発がなくてもかかる支出はその年の費用にする。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '計算で多い間違いは3つ。①研究費を資産に入れる ②条件を満たす前の月まで資産に入れる ③前年に費用にした分を今年の資産に足す。どれも資産が大きくなりすぎる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['研究はすべて費用。開発は条件をすべて満たした日で前後に分ける', '資産に入れるのは、開発に直接かかった支出だけ', '失敗が分かったら、資産の残高を全部費用にする（write off）']
        },
        {
          title: '英単語',
          words: [
            ['development expenditure', '', '開発費（資産にした分を指すことが多い）'],
            ['directly attributable', 'ダイレクトリー アトリビュータブル', '直接ひもづく'],
            ['general overheads', 'ジェネラル オーバーヘッズ', '一般管理費などの間接費'],
            ['write off', 'ライト オフ', '（資産を）一括で費用にする'],
            ['criteria', 'クライテリア', '条件（単数は criterion）'],
            ['charged to profit or loss', '', '費用として損益に計上する']
          ]
        }
      ],
      quiz: [
        { q: 'Tako Co の開発費は毎月 $5,000（1月〜12月）。6つの条件をすべて満たしたのは4月1日。今年、資産にする金額は？', type: 'number', answer: 45000, unit: '$', explain: '4月〜12月の9か月 × $5,000 ＝ $45,000。1月〜3月の $15,000 は費用。' },
        { q: 'During the year a company spent $20,000 on research and $50,000 on a development project. The development project met all the IAS 38 criteria from the start. What amount should be charged to profit or loss for the year?', choices: ['$70,000', '$50,000', '$20,000', '$0'], answer: 2, explain: '研究の $20,000 だけが費用。開発の $50,000 は最初から条件を満たしているので資産。$70,000 は開発費まで費用にした間違い。' },
        { q: 'Which of the following costs can be included in capitalised development expenditure?', choices: ['Salaries of staff working directly on the project', 'General administration overheads of the head office', 'Advertising costs for the new product', 'Training costs for staff who will use the new process'], answer: 0, explain: '開発に直接携わる人の給与は入れる。一般管理費、広告費、研修費は直接かかった開発の支出ではないので費用。' },
        { q: '研究 $8,000、プロジェクトX（条件をすべて満たす）の開発 $30,000、プロジェクトY（技術的に完成できるか示せない）の開発 $10,000。今年の費用はいくら？', type: 'number', answer: 18000, unit: '$', explain: '研究 $8,000 ＋ 条件を満たさない Y の $10,000 ＝ $18,000。X の $30,000 は資産。' },
        { q: 'A company capitalised $60,000 of development costs last year. This year the project was abandoned because it is no longer technically feasible. What should the company do?', choices: ['Keep the $60,000 as an asset and amortise it', 'Write off the $60,000 to profit or loss', 'Transfer the $60,000 to property, plant and equipment', 'Leave it as an asset until the project restarts'], answer: 1, explain: 'もう将来のお金を生まないので、資産の残高を全部その年の費用にする（write off）。' },
        { q: '条件をすべて満たした開発費 $7,000 を現金で払った。正しい仕訳は？', choices: ['Dr Development expenditure（無形資産）/ Cr Cash', 'Dr Cash / Cr Development expenditure（無形資産）', 'Dr Research and development expense（費用）/ Cr Cash', 'Dr Development expenditure（無形資産）/ Cr Research and development expense'], answer: 0, explain: '資産が増えるので借方に無形資産、現金が減るので貸方に Cash。借方と貸方を逆にしないこと。費用にするのは条件を満たす前の分。' }
      ]
    },
    {
      id: 'L61',
      no: 61,
      title: '償却（amortisation）の目的と計算',
      goal: '無形資産を償却する理由を説明し、償却費と帳簿価額を計算して仕訳できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D6(e)', 'D6(f)'],
      slides: [
        {
          title: '3年パスは、いつ「使った」？',
          paras: ['3年間使える英会話アプリのパスを 36,000円で買った。買った年に全部「使った」とは言えない。', '1年ごとに 12,000円分ずつ使っていく、と考えると実感に合う。'],
          after: '形のない資産も、役に立つ期間に合わせて少しずつ費用にしていく。'
        },
        {
          title: '償却（amortisation）とは',
          paras: ['無形資産の原価を、役に立つ期間（耐用年数、useful life）にわたって少しずつ費用にすること。有形固定資産の減価償却と同じ考え方。目的は、資産が売上を生む期間に、その原価を費用として割り当てること。'],
          formula: '年間の償却費 ＝（原価 − 残存価額）÷ 耐用年数',
          list: ['ふつうは定額法（straight-line）で、残存価額はゼロ', '年の途中で始まったら月割りにする', '帳簿価額 ＝ 原価 − 償却累計額']
        },
        {
          title: '開発費の償却はいつから？（例題①）',
          paras: ['開発費は、完成して使えるようになったとき（available for use）、つまり商業生産や販売が始まったときから償却する。開発中は支出を資産に足すだけで、決算日にまだ開発中なら償却費はゼロ。'],
          example: {
            problem: 'Tako Co は開発費 $120,000 を資産にした。冷凍たこ焼きの販売は 20X7年4月1日に始まり、5年間売れる見込み。残存価額はゼロ。決算日は12月31日。20X7年の償却費と、20X7年末の帳簿価額は？',
            steps: ['年間の償却費: $120,000 ÷ 5年 ＝ $24,000', '販売開始の4月から償却する: 20X7年は4月〜12月の9か月', '償却費: $24,000 × 9/12 ＝ $18,000', '帳簿価額: $120,000 − $18,000 ＝ $102,000'],
            answer: '償却費 $18,000、帳簿価額 $102,000'
          }
        },
        {
          title: '仕訳と財務諸表での見せ方',
          journal: [
            { side: 'Dr', account: 'Amortisation expense（償却費・SPL）', amount: '18,000' },
            { side: 'Cr', account: 'Accumulated amortisation（償却累計額）', amount: '18,000' }
          ],
          table: {
            caption: '20X7年末の財政状態計算書（無形資産）',
            head: ['項目', '$'],
            rows: [['Development costs（原価）', '120,000'], ['Accumulated amortisation', '(18,000)']],
            total: ['Carrying amount（帳簿価額）', '102,000']
          },
          after: '現金は動かないので Cash は使わない。注記では有形固定資産と同じように、原価と償却累計額の期首・増減・期末を表で見せる。'
        },
        {
          title: '例題②: 買った特許',
          example: {
            problem: '20X8年1月1日、Tako Co は新しい焼き器の特許を $50,000 で買った。法律上は20年守られるが、技術が古くなるので役に立つのは10年と見込む。決算日は12月31日。20X8年の償却費と、20X9年末の帳簿価額は？',
            steps: ['耐用年数は、役に立つ10年を使う（法律上の20年ではない。「最長5年」のような上限もない）', '年間の償却費: $50,000 ÷ 10 ＝ $5,000', '20X8年は1月から丸1年なので $5,000', '20X9年末の償却累計額: $5,000 × 2 ＝ $10,000', '帳簿価額: $50,000 − $10,000 ＝ $40,000'],
            answer: '20X8年の償却費 $5,000、20X9年末の帳簿価額 $40,000'
          }
        },
        {
          title: '例題③: 全部まとめて',
          example: {
            problem: '20X9年（12月決算）の Tako Co。(1) 研究 $10,000 (2) 6条件を満たすプロジェクトD の開発 $25,000（年末もまだ開発中）(3) 例題①の開発費（原価 $120,000、5年、20X7年4月1日に販売開始）。20X9年に損益に載る費用の合計と、20X9年末の開発費の帳簿価額は？',
            steps: ['(1) 研究 → 費用 $10,000', '(2) プロジェクトD → 資産に足す。まだ開発中なので償却しない', '(3) 20X9年は丸1年: $120,000 ÷ 5 ＝ $24,000', '損益の費用: $10,000 ＋ $24,000 ＝ $34,000', '償却累計額: $18,000（20X7）＋ $24,000（20X8）＋ $24,000（20X9）＝ $66,000', '帳簿価額: ($120,000 ＋ $25,000) − $66,000 ＝ $79,000'],
            answer: '損益の費用 $34,000、帳簿価額 $79,000'
          }
        },
        {
          title: '償却期間に上限はない',
          paras: ['スマホは3年、冷蔵庫は10年と、役に立つ年数は物ごとに違う。無形資産の償却にも「最長5年」のような上限はない。'],
          list: ['限りがある（finite useful life）: その年数で償却', '限りが予見できない（indefinite useful life）: 償却せず、毎年減損の検討（impairment review）', 'のれん（goodwill）: 同じく償却せず、毎年減損の検討'],
          after: '耐用年数は毎年見直し、変わったら残りの年数で割り直す。'
        },
        {
          title: '再評価モデルはまれ',
          paras: ['中古車には相場があり、今の値段がすぐ分かる。一点物の手作り看板には相場がない。', '無形資産はふつう原価モデル（cost model）で載せる。時価に置き換える再評価モデル（revaluation model）は、活発な市場（active market）があるときだけ使える。'],
          note: { kind: 'warn', text: 'よくある間違い: 有形固定資産と同じく、自由に再評価できると思う。特許やブランドは1つずつ違って相場がないので、無形資産の再評価はまれ。' }
        },
        {
          title: 'なぜ？ 少しずつ費用にする理由',
          paras: ['特許も開発の成果も、何年も売上を生む。それなのに買った年や販売開始の年に全部を費用にすると、その年だけ利益が小さく、後の年は大きく見えてしまう。', '売上を生む期間に少しずつ費用を割り当てれば、毎年の利益が実態に合う。これが償却の目的。'],
          note: { kind: 'warn', text: 'よくある間違い: ①開発中から償却する（販売開始から）②年の途中で始まったのに1年分償却する（月割り）③法律上の保護期間や「5年」のような決まった年数を使う（役に立つ期間を使う）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['償却＝無形資産の原価を、役に立つ期間に割り当てて費用にすること。決まった上限の年数はない', '開発費は販売（商業生産）が始まってから。ふつう定額法・残存価額ゼロ・月割り', '仕訳は Dr Amortisation expense / Cr Accumulated amortisation']
        },
        {
          title: '英単語',
          words: [
            ['amortisation', 'アモタイゼーション', '償却（無形資産の原価を費用にしていく）'],
            ['accumulated amortisation', '', '償却累計額'],
            ['useful life', 'ユースフル ライフ', '耐用年数（役に立つ期間）'],
            ['finite useful life', 'ファイナイト ユースフル ライフ', '耐用年数に限りがある（その年数で償却）'],
            ['indefinite useful life', 'インデフィニット ユースフル ライフ', '耐用年数に予見できる限りがない（償却しない）'],
            ['revaluation model', 'リバリュエーション モデル', '再評価モデル（時価に置き換える方法）'],
            ['active market', 'アクティブ マーケット', '活発な市場（相場がある市場）'],
            ['impairment review', 'インペアメント レビュー', '減損の検討（価値が下がっていないか確かめる）'],
            ['carrying amount', 'キャリング アマウント', '帳簿価額'],
            ['commercial production', 'コマーシャル プロダクション', '商業生産（償却を始める合図）'],
            ['available for use', 'アベイラブル フォー ユース', '使える状態になった（償却を始める時点）']
          ]
        }
      ],
      quiz: [
        { q: 'What is the purpose of amortisation?', choices: ['To build up cash to replace the asset at the end of its life', 'To allocate the cost of an intangible asset over its useful life', 'To show the intangible asset at its market value', 'To record the fall in the market value of the asset each year'], answer: 1, explain: '償却は原価を役に立つ期間に割り当てるため。現金をためる仕組みでも、時価を示すものでもない。減価償却と同じ考え方。' },
        { q: 'Development costs of $90,000 were capitalised. Commercial production began on 1 October 20X4 and the product is expected to sell for 3 years. The year end is 31 December. What is the amortisation charge for the year ended 31 December 20X4?', type: 'number', answer: 7500, unit: '$', explain: '$90,000 ÷ 3 ＝ $30,000（1年分）。10月〜12月の3か月なので $30,000 × 3/12 ＝ $7,500。' },
        { q: 'In the year ended 31 December 20X5 a company spent $12,000 on research and $40,000 on a development project which meets all the IAS 38 criteria. The project is still in development at the year end. Development costs of $60,000 capitalised in earlier years relate to a product which went on sale on 1 January 20X4 and is amortised over 4 years. What is the total amount charged to profit or loss for the year?', type: 'number', answer: 27000, unit: '$', explain: '研究 $12,000 ＋ 販売中の開発費の償却 $60,000 ÷ 4 ＝ $15,000、合計 $27,000。$40,000 は資産で、まだ開発中なので償却もしない。' },
        { q: 'A patent was purchased for $80,000 on 1 January 20X1. It gives legal protection for 16 years, but is expected to generate benefits for only 8 years. What is the carrying amount at 31 December 20X3?', choices: ['$65,000', '$50,000', '$60,000', '$70,000'], answer: 1, explain: '役に立つ8年を使う。$80,000 ÷ 8 ＝ $10,000。3年分で累計 $30,000、帳簿価額 $50,000。$65,000 は法律上の16年を使った間違い。$60,000 は2年分しか引いていない。' },
        { q: 'Are the following statements about IAS 38 true or false? (1) Intangible assets must be amortised over a maximum period of five years. (2) The revaluation model may be used for an intangible asset only if there is an active market for it.', choices: ['(1) true, (2) true', '(1) true, (2) false', '(1) false, (2) true', '(1) false, (2) false'], answer: 2, explain: '(1) は誤り。償却期間に決まった上限はない。耐用年数に限りがあればその年数で償却し、限りが予見できないものは償却せず毎年減損の検討をする。(2) は正しい。活発な市場（相場）があるときだけ再評価でき、特許やブランドには相場がないのでまれ。' },
        { q: '会社を買ったときに生じたのれん（goodwill）は、その後どう扱う？', choices: ['毎年、定額法で償却する', '償却せず、毎年減損の検討をする', '買った年に全部費用にする', '資産に載せられない'], answer: 1, explain: '買ったのれんは無形資産として載せるが、償却しない。毎年、価値が下がっていないか確かめる。載せられないのは自分で育てたのれん。' }
      ]
    }
  ],
  cards: [
    { id: 'L58-1', lesson: 'L58', q: '無形資産の定義（IAS 38）は？', a: '物理的な形のない、識別可能な非貨幣性資産' },
    { id: 'L58-2', lesson: 'L58', q: '有形資産と無形資産の違いは？', a: '物理的な形があって触れる（有形）か、形がない（無形）か' },
    { id: 'L58-3', lesson: 'L58', q: '無形資産の例を5つ', a: '特許権、商標権、著作権、ソフトウェア、開発費（ほかにライセンス、のれん）' },
    { id: 'L58-4', lesson: 'L58', q: '自分で育てたブランドやのれんを資産に載せない理由は？', a: '原価を信頼できる形で測れず、載せると会社を良く見せすぎるから' },
    { id: 'L58-5', lesson: 'L58', q: '他社から買った無形資産は、最初いくらで記録する？', a: '原価（cost）' },
    { id: 'L58-6', lesson: 'L58', q: 'identifiable（識別可能）の意味は？', a: '切り離して売れるか、契約・法律で守られた権利であること' },
    { id: 'L58-7', lesson: 'L58', q: '買った特許・商標の原価に入れるものは？', a: '購入代金＋直接かかった費用（法律費用・出願料・登録料）。広告費は費用' },
    { id: 'L59-1', lesson: 'L59', q: '研究（research）の定義は？', a: '新しい科学的・技術的な知識を得るための、独自の計画的な調査' },
    { id: 'L59-2', lesson: 'L59', q: '開発（development）の定義は？', a: '研究成果などを、商業生産の前に新しい製品や工程の計画・設計に当てはめること' },
    { id: 'L59-3', lesson: 'L59', q: '研究費の処理は？', a: 'いつも費用（SPL）にする' },
    { id: 'L59-4', lesson: 'L59', q: 'PIRATE の6条件は？', a: '便益の可能性・完成して使う意図・資源・使う/売る能力・技術的実現可能性・支出の測定' },
    { id: 'L59-5', lesson: 'L59', q: '研究と開発の段階を区別できないときは？', a: '全部を研究として費用にする' },
    { id: 'L59-6', lesson: 'L59', q: '6条件を満たした開発費は、資産にしても費用にしてもよい？', a: 'いいえ。資産にするのは義務' },
    { id: 'L59-7', lesson: 'L59', q: 'なぜ研究費は資産にしない？', a: '将来お金を生むかが分からず、載せると会社を良く見せすぎるから' },
    { id: 'L60-1', lesson: 'L60', q: '開発費を費用と資産に分ける境目は？', a: '6つの条件をすべて満たした日' },
    { id: 'L60-2', lesson: 'L60', q: '開発費が毎月 $6,000、5月1日に条件達成（1〜12月）。資産と費用は？', a: '資産 $48,000（8か月）、費用 $24,000（4か月）' },
    { id: 'L60-3', lesson: 'L60', q: '開発費の原価に入れる支出の例は？', a: '材料費、開発に携わる人の給与、開発用機械の減価償却費' },
    { id: 'L60-4', lesson: 'L60', q: '開発費の原価に入れない支出の例は？', a: '一般管理費、販売・広告費、研修費' },
    { id: 'L60-5', lesson: 'L60', q: '資産にした開発費のプロジェクトが失敗したら？', a: '残高を全部その年の費用にする（write off）' },
    { id: 'L60-6', lesson: 'L60', q: '条件を満たした開発費を現金で払った仕訳は？', a: 'Dr Development expenditure（無形資産）/ Cr Cash' },
    { id: 'L61-1', lesson: 'L61', q: 'amortisation（償却）とは？ 目的は？', a: '無形資産の原価を耐用年数にわたって費用にすること。売上を生む期間に原価を割り当てるため' },
    { id: 'L61-2', lesson: 'L61', q: '研究 $10,000、開発中の開発費 $25,000、販売中の開発費の償却 $24,000。損益の費用合計は？', a: '$34,000（開発中の $25,000 は資産で、償却もしない）' },
    { id: 'L61-4', lesson: 'L61', q: '開発費 $120,000、5年、4月1日販売開始、12月決算。初年度の償却費は？', a: '販売開始から月割り: $120,000 ÷ 5 × 9/12 ＝ $18,000' },
    { id: 'L61-5', lesson: 'L61', q: '償却費の仕訳は？', a: 'Dr Amortisation expense / Cr Accumulated amortisation' },
    { id: 'L61-6', lesson: 'L61', q: '償却しない無形資産は？', a: 'のれんと、耐用年数に予見できる限りがないもの（毎年減損の検討）' },
    { id: 'L61-7', lesson: 'L61', q: '償却期間に「最長5年」などの上限はある？ 法律上20年・役に立つ10年の特許は？', a: '上限はない。役に立つ10年で償却する' },
    { id: 'L61-8', lesson: 'L61', q: '無形資産に再評価モデルを使えるのはどんなとき？', a: '活発な市場（相場）があるときだけ。特許やブランドには相場がなく、まれ' }
  ]
});
