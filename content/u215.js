(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 215,
  part: 5,
  partTitle: '会社の法人格・設立・定款',
  lessons: [
    {
      id: 'B060',
      no: 60,
      title: '定款の変更',
      goal: '定款（articles of association）を変える決議の要件を数えて判定し、変更を止める法律と判例のルールを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D3(d)'],
      slides: [
        {
          title: 'マンションの管理規約を変えるには',
          paras: ['マンションの管理規約（ペット可かどうか、ゴミ出しのルールなど）は、住民の集会で4分の3以上が賛成すれば変えられる。1人でも反対したら変えられない、では何も決まらない。でも過半数で簡単に変わると、少数の住民が困る。', '英国の会社の定款も同じ発想になっている。多数決で変えられるが、ハードルは高め。そして、多数派が少数派をいじめる変更には歯止めがある。']
        },
        {
          title: '基本ルール: 特別決議で変える',
          paras: ['会社は、株主の特別決議（special resolution）で定款を変えられる（Companies Act 2006 s21）。取締役会だけでは変えられない。'],
          table: { caption: '2種類の決議（CA 2006 s282・s283）', head: ['決議', '必要な賛成'], rows: [['普通決議（ordinary resolution）', '過半数（50% を超える）'], ['特別決議（special resolution）', '75% 以上']] },
          formula: '定款の変更 ＝ 特別決議（賛成 75% 以上）'
        },
        {
          title: '75% は何の 75% か',
          list: ['総会で投票（poll）: 投票した株主の議決権の 75% 以上。棄権や欠席は数えない', '総会で挙手（show of hands）: 投票した株主の人数の 75% 以上', '書面決議（written resolution、私会社だけ）: 議決権を持つ株主全員の議決権の 75% 以上。返事をしない人は、反対と同じ結果になる'],
          example: {
            problem: '議決権は全部で 1,000票。(1) 総会の投票で、賛成 150票・反対 50票、残りは欠席。(2) 書面決議で、賛成の返事が 700票。それぞれ特別決議は成立する？',
            steps: ['(1) 投票した票: 150 ＋ 50 ＝ 200票', '(1) 賛成の割合: 150 ÷ 200 ＝ 75%。75% 以上なので成立', '(2) 書面決議は全議決権が分母: 1,000票 × 75% ＝ 750票が必要', '(2) 700票は 750票に届かないので不成立（70%）'],
            answer: '(1) 成立、(2) 不成立'
          }
        },
        {
          title: '変更の流れ',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="定款を変更する3つの手順" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">定款を変える手順</text><rect x="20" y="50" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="80" fill="var(--ink)">1 取締役が変更案を株主に出す</text><rect x="20" y="114" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="144" font-weight="600" fill="var(--ink)">2 株主の特別決議（75% 以上）</text><rect x="20" y="178" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="208" fill="var(--ink)">3 15日以内に登記所へ提出</text><text x="220" y="254" text-anchor="middle" fill="var(--quiet)">変更後の定款（s26）と</text><text x="220" y="278" text-anchor="middle" fill="var(--quiet)">特別決議の写し（s30）</text></svg>`,
          caption: '提出を怠ると、会社と責任のある役員が罰金の対象になる。会社の目的（objects）を絞る・変える定款の変更も、同じく特別決議で行い、登記所に届け出る（s31）。'
        },
        {
          title: '法律の歯止め（CA 2006）',
          list: ['変更できない条項（entrenched provisions、s22）: 「この条項は全員一致でないと変えられない」のように、特別決議より厳しい条件を付けた条項。会社を作るときの定款か、株主全員が合意した変更でしか設けられない', 'それでも、株主全員の合意か裁判所の命令があれば変えられる（s22(3)）。設けたら登記所に通知する（s23）', '負担を増やす変更（s25）: 株主になった後の変更で、株式を追加で買わせたり、会社への責任を増やしたりする変更は、その株主が書面で同意しない限り、その株主を拘束しない']
        },
        {
          title: '判例の歯止め: 会社全体の利益のために善意で',
          paras: ['変更は、会社全体の利益のために善意（bona fide for the benefit of the company as a whole）で行う必要がある。', 'Allen v Gold Reefs of West Africa（1900）: 全額払込済みの株式にも会社の先取特権（lien）を広げる変更は有効。結果として影響を受けたのが1人の株主だけでも、善意の変更ならよい。', 'Greenhalgh v Arderne Cinemas（1951）: 「会社全体」とは、仮の一人の株主（hypothetical member）にとっての利益を意味する。株主が株を外部の人に売るとき、ほかの株主が先に買える権利（pre-emption right on transfer）を外す変更も有効とされた。']
        },
        {
          title: '少数株主を追い出す変更は？',
          table: { caption: '株主を追い出す定款変更の判例', head: ['判例', '結果と理由'], rows: [['Sidebottom v Kershaw Leese（1920）', '有効。会社と競合する事業をする株主に株を売らせる条項は、会社の利益になる'], ['Brown v British Abrasive Wheel（1919）', '無効。多数派が少数派の株を強制的に買える条項は、会社の利益でなく多数派のため'], ['Dafen Tinplate v Llanelly Steel（1920）', '無効。理由を問わず、どの株主の株も取り上げられる広すぎる条項']] },
          after: '見分け方は、変更が「会社のため」か「多数派の都合のため」か。'
        },
        {
          title: '外部の契約とぶつかったら',
          paras: ['会社は、外部の契約を理由に定款の変更そのものを止められない。ただし、変更によって別の契約を破れば、損害賠償の責任を負う。', 'Southern Foundries v Shirlaw（1940）: 10年契約の業務執行取締役（managing director）が、後から変更された定款の解任権限で解任された。変更も解任も有効だが、会社は契約違反の損害賠償を払った。']
        },
        {
          title: 'なぜ？ 多数決なのに歯止めがある理由',
          paras: ['会社は何十年も続く。事業が変われば、ルールも変える必要がある。全員一致を求めると、1人の反対で会社が動けなくなる。だから 75% で変えられる。', 'ただ、多数派は株主総会を思いどおりに動かせる。少数派の財産を取り上げる道具に定款が使われないよう、「会社全体の利益」と「善意」という条件で裁判所がチェックする。'],
          note: { kind: 'warn', text: '日本の株式会社の特別決議は「出席した議決権の3分の2以上」。英国の特別決議は 75% で、書面決議では全議決権の 75%。日本の感覚で 2/3 と答えない。また、取締役会だけで定款は変えられない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['定款は特別決議（75% 以上）で変える。総会は投票した票、書面決議は全議決権が分母。15日以内に登記所へ', '変更できない条項は会社設立時か全員の合意でだけ作れる。負担を増やす変更は本人の書面同意が必要', '変更は会社全体の利益のための善意が条件。外部の契約を破れば損害賠償']
        },
        {
          title: '英単語',
          words: [
            ['alteration of articles', 'オルタレイション', '定款の変更'],
            ['special resolution', 'スペシャル レゾリューション', '特別決議（75% 以上）'],
            ['ordinary resolution', 'オーディナリー', '普通決議（過半数）'],
            ['written resolution', 'リトゥン', '書面決議（私会社のみ）'],
            ['entrenched provision', 'エントレンチト', '変更に厳しい条件を付けた条項'],
            ['bona fide for the benefit of the company as a whole', 'ボナ ファイディ', '会社全体の利益のために善意で']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Companies Act 2006, how may a company alter its articles of association?', choices: ['By ordinary resolution of the members', 'By a resolution of the board of directors', 'By special resolution of the members', 'Only with the unanimous consent of all the members'], answer: 2, explain: 's21。特別決議（75% 以上）。普通決議（過半数）では足りない。取締役会には変更の権限がない。全員一致が必要なのは、変更できない条項（entrenched provision）を後から設けるときなど、限られた場合だけ。' },
        { q: 'A private company has members holding a total of 2,400 votes. It proposes to alter its articles by written resolution. What is the minimum number of votes that must be cast in favour for the resolution to be passed?', type: 'number', answer: 1800, unit: '', explain: '書面決議は、議決権を持つ株主全員の議決権の 75% 以上が必要。2,400 × 75% ＝ 1,800票。返事をしない株主の票も分母に入る。' },
        { q: 'At a general meeting, a special resolution to alter the articles is put to a poll. Members holding 160 votes vote in favour, members holding 40 votes vote against, and members holding 30 votes abstain. Is the resolution passed?', choices: ['No, because only about 70% of the votes held by those present are in favour', 'Yes, because 80% of the votes cast are in favour', 'No, because a special resolution requires unanimous approval at a meeting', 'Yes, but only if the directors also approve it'], answer: 1, explain: '総会の投票では、投票した票だけで割合を出す。160 ÷（160 ＋ 40）＝ 80%。棄権の 30票は数えない（160 ÷ 230 ≒ 70% と計算するのは誤り）。' },
        { q: '定款に「この条項は、株主全員の同意がなければ変更できない」という条項（entrenched provision）がある。正しいものはどれ？', choices: ['特別決議（75% 以上）があれば変更できる', 'この条項は、どんな方法でも二度と変更できない', '取締役会の決議で外すことができる', '株主全員の合意か、裁判所の命令があれば変更できる'], answer: 3, explain: 's22。特別決議より厳しい条件を付けた条項なので、75% では変えられない。ただし s22(3) で、全員の合意か裁判所の命令による変更は妨げられない。' },
        { q: 'The majority shareholders of a company, holding 90% of the shares, alter the articles so that they can compulsorily buy the shares of any minority shareholder at any time, without any benefit to the company. Which of the following is most likely?', choices: ['The alteration is valid, because it was passed by a special resolution', 'The alteration is valid, because the majority hold more than 75% of the shares', 'The alteration is invalid, because it is not made bona fide for the benefit of the company as a whole', 'The alteration is invalid, because articles can never be altered after registration'], answer: 2, explain: 'Brown v British Abrasive Wheel（1919）や Dafen Tinplate（1920）の考え方。特別決議の要件を満たしても、多数派の都合だけの変更は無効になりうる。一方、会社と競合する株主を外す変更は有効とされた（Sidebottom v Kershaw Leese）。' },
        { q: '会社は 10年契約の業務執行取締役を、後から変更した定款の解任権限で解任した。Southern Foundries v Shirlaw（1940）によると、どうなる？', choices: ['外部の契約があるので、定款の変更そのものが無効になる', '定款の変更と解任は有効だが、会社は契約違反の損害賠償を払う', '定款の変更は有効で、会社は何の責任も負わない', '取締役の同意がない限り、解任は無効になる'], answer: 1, explain: '会社は定款を変える法律上の権限を奪われない。ただし、変更によって別の契約を破れば、その契約違反の責任（損害賠償）は残る。' }
      ]
    },
    {
      id: 'B061',
      no: 61,
      title: '会社名の規制',
      goal: '登記できない会社名、登記後に名前の変更を命じられる場合、会社名の異議の手続き、社名変更の方法を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: '名前には決まりがある',
          paras: ['子どもの名前でも、使える字には決まりがあり、ふさわしくない名前は役所で受理されないことがある。', '会社の名前も同じ。英国では、誰かと同じ名前、人を不快にさせる名前、政府と関係があるように見せる名前は登記できない。名前は、取引相手が「誰と取引しているか」を知る大事な手がかりだから。']
        },
        {
          title: '名前の最後に付ける言葉',
          table: { caption: '会社の種類を名前で示す（CA 2006 s58・s59）', head: ['会社の種類', '名前の最後'], rows: [['公開有限会社（public company）', "'public limited company' または 'plc'"], ['私有限会社（private limited company）', "'limited' または 'Ltd'"]] },
          after: 'ウェールズの会社はウェールズ語の表記（ccc、cyf）も使える。一定の条件を満たす慈善・教育などの目的の私会社は、limited を付けなくてよい（s60）。逆に、有限責任でない会社や個人が limited を名乗ることは許されない（s65）。'
        },
        {
          title: '登記できない名前',
          svg: `<svg viewBox="0 0 440 318" role="img" aria-label="会社名が登記されるまでの4つのチェック" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">名前の4つのチェック</text><rect x="20" y="50" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="77" fill="var(--ink)">1 最後に Ltd・plc が正しく付いている</text><rect x="20" y="102" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="129" fill="var(--ink)">2 登記簿に同じ名前がない（s66）</text><rect x="20" y="154" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="181" fill="var(--ink)">3 犯罪になる・不快な名前でない（s53）</text><rect x="20" y="206" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="233" fill="var(--ink)">4 特別な語は大臣の承認あり（s54・55）</text><rect x="90" y="262" width="260" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="288" text-anchor="middle" font-weight="600" fill="var(--ink)">登記できる</text></svg>`,
          caption: '「同じ」は、Ltd と Limited、& と and、記号や空白の違いなどを無視して比べる。Sakura Ltd があれば Sakura Limited は同じ名前とされる。'
        },
        {
          title: '承認が必要な語（sensitive words）',
          list: ['政府や公的機関とつながりがあるように見える名前（s54）', '規則で指定された特別な語・表現（s55）。例: Royal、Bank、University、Chartered など', 'これらは大臣（Secretary of State）の承認が必要。語によっては、所管する機関の意見も事前に求める'],
          after: '「信用がありそう」に見える語を勝手に使わせると、取引相手や消費者が誤解するから。'
        },
        {
          title: '登記の後で、名前の変更を命じられる場合',
          table: { caption: '大臣・裁定人による変更の命令', head: ['理由', '期限など'], rows: [['登記簿の名前に似すぎている（too like、s67）', '登記から12か月以内に命令できる'], ['登記の時に誤解を招く情報を出した（s75）', '登記から5年以内に命令できる'], ['事業の内容をひどく誤解させ、公衆に害が出そう（s76）', '6週間以内に変更。会社は3週間以内に裁判所へ取消しを申し立てられる'], ['他人ののれんのある名前と同じか似ている（s69）', '会社名の裁定人への異議（次のスライド）']] }
        },
        {
          title: '会社名の裁定人（company names adjudicator）',
          paras: ['ある名前に評判（goodwill）を持つ人は、その名前と同じか、つながりがあると誤解させるほど似た名前で登記した会社に異議を出せる（s69）。会社が次のどれかを示せば、異議は退けられる。'],
          list: ['相手が評判を得る前から、その名前で登記していた', 'その名前で営業している、または営業の準備で大きな費用をかけた', '会社設立の業者が、売るために普通の条件で登記した', '善意でその名前を選んだ', '相手の利益をほとんど害していない'],
          after: 'ただし、最初の3つを示しても、相手からお金を取る、または相手がその名前で登記するのを妨げることが主な目的だったと示されれば、異議が認められる（s69(5)）。裁定人は名前の変更を命じ、従わなければ新しい名前を決める（s73）。'
        },
        {
          title: '会社が自分で名前を変えるとき',
          list: ['株主の特別決議（75% 以上）で変える。定款で別の方法を決めていれば、その方法でもよい（s77）', '登記所に届け出ると、新しい名前の登記の証明書（certificate of incorporation）が出る', '変更の効力は、新しい証明書が出た日から（s81(1)）', '名前が変わっても、会社は同じ人。権利・義務や進行中の裁判には影響しない（s81(2)(3)）']
        },
        {
          title: '名前の規制の外側にある守り',
          list: ['パッシング・オフ（passing off）: 他人の評判にただ乗りし、客を誤解させる名前は、裁判所で使用を止められる。Ewing v Buttercup Margarine（1917）では、既存の店とまぎらわしい名前の会社に差止めが認められた。第10部で詳しく学ぶ', '倒産した会社の名前の再使用（Insolvency Act 1986 s216）: 債務超過で清算（insolvent liquidation）した会社で、清算前の12か月に取締役だった人は、原則として清算から5年間、同じか似た名前の会社を経営できない。違反すると犯罪になり、個人で債務の責任を負う（s217）', '表示の義務: 会社は登記した名前を、登記住所や手紙・注文書・ウェブサイトに表示する']
        },
        {
          title: 'なぜ？ そして日本との違い',
          paras: ['会社は有限責任なので、取引相手は「相手が誰で、責任に限りがあるか」を名前で知る必要がある。だから Ltd・plc を付けさせ、同じ名前やまぎらわしい名前を排除する。'],
          note: { kind: 'warn', text: '日本の商業登記では、同じ住所でなければ同じ商号でも登記できる。英国は違い、登記簿全体で同じ名前は登記できない。また「似すぎた名前」は登記の時ではなく、登記後12か月以内の命令や異議で扱う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['公開会社は plc、私会社は Ltd で終わる。同じ名前・不快な名前は登記できず、特別な語は大臣の承認が要る', '似すぎた名前は12か月以内に変更命令。のれんのある人は会社名の裁定人に異議を出せる', '社名変更は特別決議。効力は新しい証明書の日から。権利・義務はそのまま']
        },
        {
          title: '英単語',
          words: [
            ['company name', '', '会社名（商号）'],
            ['sensitive words and expressions', 'センシティヴ', '承認が必要な特別な語'],
            ['too like', 'トゥー ライク', '（既存の名前に）似すぎている'],
            ['company names adjudicator', 'アジュディケイター', '会社名の裁定人'],
            ['goodwill', 'グッドウィル', 'のれん（顧客をひきつける評判）'],
            ['passing off', 'パッシング オフ', '他人の商品・事業と誤認させる行為']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Companies Act 2006, with which words must the name of a public company end?', choices: ["'limited' or 'Ltd'", "'incorporated' or 'Inc'", "'company' or 'Co'", "'public limited company' or 'plc'"], answer: 3, explain: 's58。Ltd で終わるのは私有限会社（s59）。Inc や Co は英国の会社の種類を示す表示ではない。' },
        { q: '登記簿にすでに「Sakura Trading Ltd」がある。新しい会社が「Sakura Trading Limited」で登記を申請した。どうなる？', choices: ['Ltd と Limited で違う名前なので、登記できる', '住所が違えば登記できる', '同じ名前とみなされ、登記できない', '登記はできるが、5年以内に変更を命じられる'], answer: 2, explain: 's66。同じかどうかは、Ltd と Limited の違いなどを無視して比べる。住所が違えば同じ商号でも登記できるのは日本の商業登記のルールで、英国では使えない。' },
        { q: 'A company is registered with a name which is too like a name already on the registrar\'s index. Within what period after registration may the Secretary of State direct the company to change its name?', type: 'number', answer: 12, unit: 'か月', explain: 's67。似すぎた名前（too like）の変更命令は、登記から12か月以内。登記の時に誤解を招く情報を出した場合（s75）は5年以内。' },
        { q: 'A person with goodwill in a name objects to the company names adjudicator about a company with a similar name. Which of the following would cause the objection to be upheld, even if the company could otherwise show a defence?', choices: ['The company adopted the name in good faith', 'The main purpose of registering the name was to obtain money from the objector or to prevent the objector from registering the name', 'The company was operating under the name before the objector acquired goodwill', 'The interests of the objector are not adversely affected to any significant extent'], answer: 1, explain: 's69(5)。ほかの3つは会社側の反論（defence）になる。お金を取る、または相手の登記を妨げるのが主な目的だったと示されれば、反論があっても異議は認められる。' },
        { q: 'A private company passes a special resolution to change its name. When does the change of name take effect?', choices: ['From the date on which the new certificate of incorporation is issued', 'From the date on which the special resolution is passed', 'From the date on which the members are notified', '15 days after the resolution is passed'], answer: 0, explain: 's81(1)。決議の日ではなく、登記所が新しい名前の証明書を出した日から。名前が変わっても、会社の権利・義務や進行中の裁判には影響しない。' }
      ]
    },
    {
      id: 'B062',
      no: 62,
      title: '第5部 総合演習：会社の設立と定款',
      goal: '新会社の設立の場面で、会社の種類と資本、小会社の判定、法人格のベール、登記と帳簿、定款の効力と変更、会社名を順に判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D2(b)', 'K3:D2(c)', 'K3:D2(d)', 'K3:D3(a)', 'K3:D3(b)', 'K3:D3(c)', 'K3:D3(d)', 'K3:G1(a)'],
      slides: [
        {
          title: '今日の場面',
          paras: ['第5部で学んだルールを、1つの会社の設立から成長までの流れで使う。試験では1問ずつ独立した問題になるが、この順番で整理しておくと迷わない。'],
          list: ['Aiko と Ben が、英国で弁当の製造会社を作る', '最初は私会社 Hikari Foods Ltd として始める', 'まだ私会社のうちに、株主の Carl が会社を辞めて競合の会社を作る', '数年後に工場を増やし、株式を広く公募するため公開会社（plc）にしたい']
        },
        {
          title: '手順1: 登記に出すもの（D3(a)）',
          list: ['登記の申請書（会社名、登記住所が England and Wales などのどこか、有限責任か、私会社か公開会社か）', '定款: 基本定款（memorandum、設立者が株主になる意思を示す）と付属定款（articles）。articles を出さなければモデル定款が使われる', '資本と最初の株主の明細（statement of capital）、最初の役員の明細、支配する人（PSC）の明細', '適法性の声明（statement of compliance）', '登記所が登記の証明書（certificate of incorporation）を出した日に、会社が生まれる']
        },
        {
          title: '手順2: 帳簿と届出（D3(b)）',
          list: ['株主名簿、取締役名簿、支配する人（PSC）の名簿を備える', '総会・取締役会の議事録と、会計記録を残す（会計記録は私会社3年、公開会社6年）', '確認書（confirmation statement）: 少なくとも12か月に1回、登記所の情報が正しいことを確認し、期間の終わりから14日以内に出す', '年次の財務諸表を登記所に出す（私会社は期末から9か月、公開会社は6か月以内）']
        },
        {
          title: '手順3: 小会社の判定（D2(c)）',
          paras: ['小会社（small company）: 次の3つのうち2つ以上を満たす（CA 2006 s382、2025年4月6日以降に始まる事業年度）。ただし公開会社はいつも対象外（s384）。'],
          table: { caption: '小会社の基準', head: ['基準', '上限'], rows: [['売上高（turnover）', '£15m 以下'], ['貸借対照表の合計（balance sheet total）', '£7.5m 以下'], ['従業員の平均人数', '50人以下']] },
          after: '最初の事業年度は、その年に満たせば小会社。その後は、2年続けて満たす（満たさない）まで区分は変わらない。小会社は簡略な決算書の提出、監査の免除（s477）などが使える。小グループ（small group、s383）も同じ考え方で、満たせば親会社はグループ決算書を作らなくてよい。'
        },
        {
          title: '例題1: Hikari Foods Ltd は小会社か',
          example: {
            problem: '1年目（最初の事業年度）: 売上 £16.0m、総資産 £7.0m、従業員 45人。2年目: 売上 £14.0m、総資産 £8.0m、従業員 55人。3年目: 売上 £18.0m、総資産 £8.4m、従業員 48人。各年は小会社か？',
            steps: ['1年目: 売上は超過、総資産と従業員は満たす → 3つ中2つ → 最初の年なので小会社', '2年目: 満たすのは売上だけ → 3つ中1つ → 満たさないのは1年だけなので、まだ小会社', '3年目: 満たすのは従業員だけ → 3つ中1つ → 2年続けて満たさないので、小会社でなくなる'],
            answer: '1年目と2年目は小会社、3年目は小会社でない'
          }
        },
        {
          title: '手順4: 公開会社にするとき（D2(b)）',
          table: { caption: '私会社（Ltd）と公開会社（plc）', head: ['項目', '私会社 / 公開会社'], rows: [['株式の公募', 'できない / できる'], ['最低の資本', 'なし / 割り当てた株式の額面 £50,000 以上'], ['払込み', '自由 / 各株式の額面の4分の1以上と、プレミアム全額'], ['取締役の人数', '1人以上 / 2人以上'], ['会社秘書役', '任意 / 資格のある人が必須'], ['書面決議', '使える / 使えない']] },
          after: '私会社から公開会社への変更（re-registration）は、特別決議（s90）と上の資本の条件が必要で、名前の最後も Ltd から plc に変える。最初から公開会社として設立した会社だけは、取引開始の証明書（trading certificate）を受けるまで事業も借入れもできない（s761）。登記し直した Hikari には不要。'
        },
        {
          title: '例題2: plc の最低の払込み',
          example: {
            problem: 'Hikari Foods plc は、額面 £1 の株式 60,000株を、1株 £1.20 で割り当てる。最低資本の条件を満たすか。割当ての時に、最低いくら払い込まれている必要があるか？',
            steps: ['割り当てた額面の合計: 60,000株 × £1 ＝ £60,000。£50,000 以上なので最低資本を満たす', 'プレミアム: £1.20 − £1 ＝ 1株 £0.20', '1株の最低の払込み: 額面の4分の1 £0.25 ＋ プレミアム全額 £0.20 ＝ £0.45', '合計: 60,000株 × £0.45 ＝ £27,000'],
            answer: '最低資本は満たす。最低 £27,000 の払込みが必要'
          }
        },
        {
          title: '手順5: Carl の競合会社とベール（D2(d)）',
          paras: ['会社は株主と別の人（Salomon v Salomon & Co Ltd、1897）。株主の責任は、自分の株式の未払込額まで。原則として、会社の後ろにいる人には責任が及ばない。', 'しかし Carl は、Hikari と結んだ競業避止の約束を逃れるために、自分が支配する新会社を作って同じ事業を始めた。これは義務を逃れるための見せかけ（sham）。Gilford Motor Co v Horne（1933）と同じく、裁判所はベールを取り払い、Carl と新会社の両方に差止めを命じうる。']
        },
        {
          title: '手順6: 定款の効力と変更（D3(c)(d)）',
          list: ['定款は、会社と株主の間、株主どうしの間の契約になる（s33）。ただし株主としての立場の権利だけ。定款に名前が書かれた顧問弁護士でも、外部者としては強制できない（Eley v Positive Government Security Life Assurance、1876）', 'モデル定款では、取締役が事業を経営し、株主は特別決議で取締役に指示できる', '競合する株主に株を売らせる条項を追加するのは、会社全体の利益のためなら有効（Sidebottom v Kershaw Leese）'],
          example: {
            problem: '私会社のうちに、その条項を入れる特別決議を総会の投票で行った。賛成 1,350票、反対 450票、棄権 200票。同じ株主（全議決権 2,000票）が書面決議で行い、賛成が 1,350票だったら？',
            steps: ['総会: 1,350 ÷（1,350 ＋ 450）＝ 1,350 ÷ 1,800 ＝ 75%。75% 以上なので成立', '書面決議: 全議決権の 75% ＝ 2,000 × 75% ＝ 1,500票が必要', '1,350票は 1,500票に届かないので不成立', 'plc になった後なら、書面決議はそもそも使えない。総会を開く'],
            answer: '総会なら成立、書面決議なら不成立。成立したら15日以内に登記所へ'
          }
        },
        {
          title: 'なぜ？ と よくある間違い',
          paras: ['ルールの多くは、会社と取引する人を守るため。plc は誰でも株を買えるので、最低資本・払込み・取締役2人・資格のある秘書役で守りを厚くする。小会社は相手への影響が小さいので、決算書と監査を軽くして負担を減らす。'],
          note: { kind: 'warn', text: '公開会社は規模が小さくても小会社にならない。小会社の判定は「3つ全部」ではなく「3つ中2つ」。1年だけ基準を外れても区分は変わらない。plc の払込みは額面の4分の1だけでなく、プレミアムは全額。特別決議の分母は、総会なら投票した票、書面決議なら全議決権。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['登記は申請書・定款・資本の明細・役員と PSC の明細・適法性の声明。会社は証明書の日に生まれる', '小会社は3つ中2つ（£15m・£7.5m・50人）、2年続けて変わる。公開会社は対象外。plc は額面 £50,000 以上、4分の1以上とプレミアム全額を払込み', '会社は別の人。見せかけの会社ならベールを取り払う。定款は株主としての契約で、変更は特別決議と善意']
        }
      ],
      quiz: [
        { q: 'A public company allots 100,000 ordinary shares with a nominal value of 50p each at a price of 80p per share. What is the minimum amount that must be paid up on allotment (in GBP)?', type: 'number', answer: 42500, unit: '£', explain: '額面の合計は 100,000 × £0.50 ＝ £50,000 で最低資本を満たす。1株の最低の払込みは、額面の4分の1 £0.125 ＋ プレミアム全額 £0.30 ＝ £0.425。100,000 × £0.425 ＝ £42,500。プレミアムを忘れて £12,500 とするのは誤り。' },
        { q: 'Hikari Foods Ltd, a private company limited by shares, re-registers as a public company. Which of the following statements is correct?', choices: ['It must obtain a trading certificate from the registrar before it can do business', 'It may continue to pass resolutions as written resolutions', 'Its articles and name may be changed by ordinary resolution', 'Its name must be changed to end with \'public limited company\' or \'plc\''], answer: 3, explain: '公開会社の名前は plc で終わる（s58）。re-registration は特別決議（s90）。trading certificate が必要なのは、最初から公開会社として設立した会社だけ（s761）。公開会社は書面決議を使えない。' },
        { q: 'Which of the following companies CANNOT take advantage of the small companies regime under the Companies Act 2006?', choices: ['A private company with a turnover of GBP 16m, a balance sheet total of GBP 7m and 45 employees in its first financial year', 'A private company with a turnover of GBP 9m, a balance sheet total of GBP 4m and 60 employees in its first financial year', 'A public company with a turnover of GBP 3m, a balance sheet total of GBP 2m and 20 employees', 'A private company with a turnover of GBP 12m, a balance sheet total of GBP 9m and 30 employees in its first financial year'], answer: 2, explain: '公開会社はどんなに小さくても、小会社の制度（small companies regime）を使えない（s384）。ほかの3社は、いずれも3つ中2つの基準（£15m・£7.5m・50人）を満たすので、最初の事業年度から小会社。' },
        { q: 'A former employee is bound by a valid restraint of trade clause. To avoid it, he forms a company which he controls and the company carries on the competing business. Which of the following is most likely?', choices: ['The court cannot act against the company, because it is a separate legal person', 'The court will lift the veil of incorporation and grant an injunction against both the former employee and the company', 'The company is bound only if it agreed to the restraint of trade clause itself', 'The former employee is liable only up to the amount unpaid on his shares'], answer: 1, explain: 'Gilford Motor Co v Horne（1933）。義務を逃れるための見せかけ（sham）の会社なら、別個の法人格を理由に逃げることは許されない。Salomon の原則には、この例外がある。' },
        { q: 'Under section 33 Companies Act 2006, the articles of association form a contract between which parties?', choices: ['The company and its directors, in their capacity as employees', 'The company and any person named in the articles, such as its solicitor', 'The company and its creditors, in relation to the share capital', 'The company and its members, and the members among themselves, in their capacity as members'], answer: 3, explain: 's33。株主としての立場の権利だけが強制できる。定款に名前のある弁護士が外部者として強制できなかったのが Eley v Positive Government Security Life Assurance（1876）。' },
        { q: 'Which of the following must be delivered to the registrar in order to register a company limited by shares?', choices: ['An application for registration, a memorandum of association, a statement of capital and initial shareholdings, a statement of proposed officers and a statement of compliance', 'A memorandum of association and a trading certificate only', 'Audited financial statements for the first financial year', 'A confirmation statement and the register of members'], answer: 0, explain: 'articles を出さなければモデル定款が使われる。trading certificate は、公開会社が登記の後に事業を始めるために受けるもの。確認書や財務諸表は、設立後に出すもの。' }
      ]
    }
  ],
  cards: [
    { id: 'B060-1', lesson: 'B060', q: '定款（articles）はどうやって変える？', a: '株主の特別決議（75% 以上）。s21。取締役会だけでは変えられない' },
    { id: 'B060-2', lesson: 'B060', q: '特別決議の 75% の分母は？', a: '総会は投票した票（棄権は除く）。書面決議は全議決権' },
    { id: 'B060-3', lesson: 'B060', q: '定款を変えた後、登記所へいつまでに何を出す？', a: '15日以内に、変更後の定款と特別決議の写し' },
    { id: 'B060-4', lesson: 'B060', q: '変更できない条項（entrenched provision）はいつ作れる？', a: '会社設立時の定款か、株主全員が合意した変更でだけ' },
    { id: 'B060-5', lesson: 'B060', q: '判例上、定款変更が有効になる条件は？', a: '会社全体の利益のために善意で行うこと（Allen v Gold Reefs）' },
    { id: 'B060-6', lesson: 'B060', q: 'なぜ？ 定款変更に判例の歯止めがある', a: '多数派が少数派の財産を取り上げる道具に使わせないため' },
    { id: 'B061-1', lesson: 'B061', q: '公開会社と私会社の名前の最後は？', a: '公開会社は plc（public limited company）、私会社は Ltd（limited）' },
    { id: 'B061-2', lesson: 'B061', q: '登記できない会社名は？', a: '登記簿と同じ名前、犯罪になる・不快な名前。特別な語は承認が必要' },
    { id: 'B061-3', lesson: 'B061', q: '似すぎた（too like）名前の変更命令の期限は？', a: '登記から12か月以内（s67）' },
    { id: 'B061-4', lesson: 'B061', q: '会社名の裁定人に異議を出せるのは誰？', a: 'その名前に評判（goodwill）を持つ人' },
    { id: 'B061-5', lesson: 'B061', q: '社名変更の方法と効力の発生日は？', a: '特別決議。新しい登記の証明書が出た日から' },
    { id: 'B061-6', lesson: 'B061', q: '日本と英国の会社名のルールの違いは？', a: '日本は住所が違えば同じ商号も可。英国は登記簿全体で同じ名前は不可' },
    { id: 'B062-1', lesson: 'B062', q: '小会社の3つの基準（2025年4月以降）は？', a: '売上 £15m・総資産 £7.5m・従業員 50人以下のうち2つ以上' },
    { id: 'B062-2', lesson: 'B062', q: '小会社の区分が変わるのはいつ？', a: '基準を2年続けて満たした（外れた）とき。公開会社は常に対象外' },
    { id: 'B062-3', lesson: 'B062', q: 'plc の株式を割り当てる時の最低の払込みは？', a: '額面の4分の1以上とプレミアム全額' },
    { id: 'B062-4', lesson: 'B062', q: '確認書（confirmation statement）の頻度と期限は？', a: '少なくとも12か月に1回、期間の終わりから14日以内' },
    { id: 'B062-5', lesson: 'B062', q: '義務逃れの会社のベールを取り払った判例は？', a: 'Gilford Motor Co v Horne（1933）' },
    { id: 'B062-6', lesson: 'B062', q: '定款の契約（s33）で強制できる権利は？', a: '株主としての立場の権利だけ（Eley v Positive Life）' },
    { id: 'B062-7', lesson: 'B062', q: '私会社が公開会社に登記し直すとき、trading certificate は必要？', a: '不要。必要なのは最初から公開会社として設立した会社だけ。特別決議と名前を plc に' }
  ]
});
