(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 221,
  part: 7,
  partTitle: '会社の運営（取締役・役員・株主総会）',
  lessons: [
    {
      id: 'B085',
      no: 85,
      title: '会計監査人の解任と辞任',
      goal: '監査人を任期の途中で解任する手続き（普通決議と特別通知）、解任される監査人の権利、辞任と理由の説明書、辞任する監査人の総会の請求を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(f)'],
      slides: [
        {
          title: '厳しい点検係を、黙って替えられたら',
          paras: ['マンションの管理組合で、会計を確かめる係が「この支出はおかしい」と言い出した。理事会が住民に知らせずに、その係をこっそり替えたら、点検の意味がなくなる。', '会社の監査人も同じ。だから会社法は、監査人を替えるときや監査人が辞めるときに、監査人の言い分が株主に届くしくみを用意している。']
        },
        {
          title: '監査人がその地位を離れる形',
          list: ['解任（removal）: 任期の途中で、株主がやめさせる', '再任しない: 任期の終わりに、別の人を監査人に選ぶ', '辞任（resignation）: 監査人が自分から辞める', '資格を失う: 独立性を失うなど、監査人になれない状態になったら、ただちに退く（s1213・s1215）'],
          after: '株主が選んだ監査人を、取締役会だけでやめさせることはできない。'
        },
        {
          title: '解任（s510〜s512）',
          list: ['株主総会の普通決議（ordinary resolution）で、任期の途中でもいつでも解任できる（s510）', '決議には特別通知（special notice）が必要。提案する株主が、総会の28日以上前に会社へ予告する（s511、s312）', '書面決議（written resolution）では解任できない。必ず総会を開く（s288(2)）', '解任されても、契約上の報酬や損害賠償の請求権は失わない（s510(3)）', '解任の決議をしたら、会社は14日以内に登記所へ届ける（s512）']
        },
        {
          title: '解任の流れと、監査人の権利（s511）',
          svg: `<svg viewBox="0 0 440 372" role="img" aria-label="特別通知から解任と届出までの流れ" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">監査人の解任の流れ</text><rect x="20" y="48" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="74" fill="var(--ink)">① 株主が会社へ特別通知（28日前）</text><line x1="220" y1="88" x2="220" y2="104" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,102 226,102 220,108" fill="var(--quiet)"/><rect x="20" y="108" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="134" fill="var(--ink)">② 会社はすぐ写しを監査人へ送る</text><line x1="220" y1="148" x2="220" y2="164" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,162 226,162 220,168" fill="var(--quiet)"/><rect x="20" y="168" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="194" fill="var(--ink)">③ 監査人は書面の意見を出せる</text><line x1="220" y1="208" x2="220" y2="224" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,222 226,222 220,228" fill="var(--quiet)"/><rect x="20" y="228" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="254" fill="var(--ink)">④ 株主に配る（遅れたら総会で読み上げ）</text><line x1="220" y1="268" x2="220" y2="284" stroke="var(--edge)" stroke-width="1.5"/><polygon points="214,282 226,282 220,288" fill="var(--quiet)"/><rect x="20" y="288" width="400" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="314" font-weight="600" fill="var(--ink)">⑤ 総会で発言 → 普通決議で解任</text><text x="220" y="358" text-anchor="middle" fill="var(--quiet)">可決したら14日以内に登記所へ届出</text></svg>`,
          caption: '意見を配るのが中傷の宣伝のためなら、会社などの申立てで裁判所が止められる。解任された監査人は、本来の任期が終わるはずだった総会にも出席して発言できる（s513）。'
        },
        {
          title: '任期の終わりに別の人を選ぶとき',
          list: ['公開会社の総会で、退任する監査人以外の人を監査人に選ぶ決議にも、特別通知が要る（s515）', '退任する監査人には写しが送られ、書面の意見を株主に配らせられる', '私会社が書面決議で別の人を選ぶときも、退任する監査人に案の写しを送り、意見を一緒に配らせられる（s514）'],
          note: { kind: 'tip', text: '「解任」でも「再任しない」でも、監査人の声が株主に届くしくみは同じ。違うのは、途中でやめさせるか、任期の終わりに替えるか。' }
        },
        {
          title: '辞任（s516〜s519）',
          list: ['登記上の事務所（registered office）に書面の通知を届けて辞任する。総会の決議は要らない（s516）', '効力は通知が届いた日か、通知に書いたそれより後の日から。理由の説明書が必要なのに添えていない通知は効力がない（s516(2)）', '会社は辞任の通知の写しを14日以内に登記所へ送る（s517）', '辞める監査人は、理由の説明書（statement of reasons）を会社に送る（s519）。古い呼び名は statement of circumstances'],
          after: '説明書に株主や債権者に知らせるべき事項があれば、会社は14日以内に写しを全株主に送る（中傷だとして裁判所に申し立てる道もある、s520）。監査人も写しを登記所へ送る（s521）。'
        },
        {
          title: '辞任する監査人は総会を請求できる（s518）',
          paras: ['理由の説明書を出して辞任する監査人は、辞任の通知と一緒に、取締役に臨時の総会の招集を請求できる。辞任の理由を株主に直接説明するため。ただし公益性の高い会社以外で、説明書に「知らせるべき事項はない」と書いた場合は請求できない。'],
          table: { caption: '請求された取締役の期限', head: ['すること', '期限'], rows: [['総会を招集する', '請求を受けてから21日以内'], ['総会を開く', '招集の通知の日から28日以内']] },
          note: { kind: 'tip', text: '理由の説明書が要らない例外もある。上場会社・銀行・保険会社などの公益性の高い会社（public interest company）では、いつ、どんな理由で辞めても必ず出す。ほかの会社でも、任期の途中で辞めるときは原則として出す。' }
        },
        {
          title: 'なぜ？ 監査人の声を必ず株主に届ける',
          paras: ['監査人は、取締役にとって都合の悪いことを見つける立場にある。取締役が気に入らない監査人を黙って替えたり、問題に気づいた監査人が黙って去ったりすると、株主と債権者は危険を知らないまま。', 'だから、解任そのものは株主の普通決議でいつでもできるが、監査人の意見は必ず株主に届く。日本の感覚では「辞めるのは本人の自由で、理由は言わなくてよい」と思いがちだが、監査人の辞任は株主と債権者への警報になる。'],
          note: { kind: 'warn', text: '解任は特別決議ではなく、普通決議＋特別通知。特別通知（special notice）と特別決議（special resolution）は別物。書面決議では解任できない。辞任は書面の通知だけで効力が生じ、株主の承認は要らない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['解任は総会の普通決議＋特別通知（28日）。書面決議は不可。監査人は意見を配らせ、総会で発言できる', '辞任は書面の通知だけで効力。会社は14日以内に登記所へ。監査人は理由の説明書（statement of reasons）を出す', '辞任する監査人は総会を請求できる。取締役は21日以内に招集し、28日以内に開く']
        },
        {
          title: '英単語',
          words: [
            ['removal of auditor', 'リムーバル', '監査人の解任'],
            ['special notice', 'スペシャル ノーティス', '特別通知（28日前の予告）'],
            ['written representations', 'リプリゼンテーションズ', '書面の意見'],
            ['resignation', 'レジグネーション', '辞任'],
            ['statement of reasons / statement of circumstances', '', '辞める理由の説明書'],
            ['requisition a general meeting', 'リクイジション', '総会の招集を請求する'],
            ['registered office', 'レジスタード オフィス', '登記上の事務所']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following correctly describes how the members of a company may remove its auditor before the end of the auditor\'s term of office?', choices: ['By special resolution passed at a general meeting, after special notice has been given', 'By written resolution agreed by members holding 75% of the voting rights', 'By ordinary resolution passed at a general meeting, after special notice has been given', 'By a resolution of the board of directors'], answer: 2, explain: 's510・s511。普通決議でよいが、特別通知（28日）が必要。特別決議と特別通知を混同しない。書面決議では解任できず（s288(2)）、取締役会にはそもそも解任の権限がない。' },
        { q: 'An auditor resigns by depositing notice at the company\'s registered office, together with a statement of reasons containing matters which the auditor believes should be brought to the attention of the members. Which of the following is the auditor entitled to do?', choices: ['Attend and vote at the next meeting of the board of directors', 'Require the directors to convene a general meeting to receive an explanation of the reasons for the resignation', 'Insist that the members pass a special resolution accepting the resignation', 'Appoint a successor auditor to fill the vacancy'], answer: 1, explain: 's518。取締役は21日以内に招集し、総会は通知から28日以内に開く。監査人は取締役会で議決できない。辞任は通知だけで効力があり、株主の承認は要らない。後任を選ぶのは取締役（途中で欠けた時）か株主で、辞める監査人ではない。' },
        { q: '株主総会で監査人の解任の決議をした。会社は何日以内に登記所へ届ける？', type: 'number', answer: 14, unit: '日', explain: 's512。14日以内。辞任のときも、会社は辞任の通知の写しを14日以内に登記所へ送る（s517）。特別通知の28日と混同しない。' },
        { q: 'Sora Ltd（私会社）の取締役は、厳しい指摘をする監査人を替えたい。正しいのはどれ？', choices: ['私会社なので、書面決議で解任できる', '解任された監査人は、契約上の損害賠償を一切請求できない', '解任される監査人は、総会に出席して発言できない', '取締役会の決議だけでは解任できない。株主総会の普通決議が要る'], answer: 3, explain: '監査人を任期の途中で解任できるのは株主の普通決議だけ（s510）。私会社でも書面決議は使えない（s288(2)）。損害賠償の請求権は残り（s510(3)）、総会で発言する権利もある（s511）。' },
        { q: '辞任した監査人が総会を請求した。取締役は請求を受けてから何日以内に総会を招集しなければならない？', type: 'number', answer: 21, unit: '日', explain: 's518。21日以内に招集し、総会は招集の通知の日から28日以内に開く。28日は「開く」期限。' }
      ]
    },
    {
      id: 'B086',
      no: 86,
      title: '会計士と監査人の注意義務',
      goal: '過失の3つの要件と、会計士・監査人が誰に注意義務を負うか（Caparo の3段階テスト、Hedley Byrne）、責任の制限のしかたを説明できるようになる',
      minutes: 17,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(g)'],
      slides: [
        {
          title: '整備士の友人の「大丈夫」',
          paras: ['友人から頼まれて中古車を点検した整備士が、見落としをして「大丈夫」と言った。後で故障したら、責任を感じるのは自然。', 'では、その答えを又聞きした知らない人が、同じ車を高く買って損をしたら？ そこまで責任を負うのは重すぎる。専門家の責任でいちばん問題になるのは「誰に対して」責任を負うか。']
        },
        {
          title: '責任の2つの道',
          list: ['契約（contract）: 依頼主（client）に対して。会計士や監査人は、合理的な注意と技能（reasonable care and skill）で仕事をする義務を負う', '不法行為の過失（tort of negligence）: 契約のない第三者に対しても、責任を負うことがある'],
          note: { kind: 'tip', text: '監査人の契約の相手は会社。個々の株主・銀行・投資家とは契約していない。だから彼らが監査人を訴えるときは、過失（negligence）を使う。そこで「注意義務があるか」が争いになる。' }
        },
        {
          title: '過失の3つの要件',
          formula: 'negligence ＝ duty of care ＋ breach ＋ resulting loss',
          numbered: ['注意義務（duty of care）がある', '義務違反（breach）: 同じ職業の合理的に有能な人に期待される水準を下回った', '損害（loss）: 違反が原因で損害が生じた（因果関係）。損害が遠すぎない'],
          after: '3つとも訴える側（原告、claimant）が証明する。監査人は「番犬であって、猟犬ではない（a watchdog, not a bloodhound）」（Re Kingston Cotton Mill、1896年）。疑う理由がなければ説明をある程度信じてよいが、疑わしい点があれば徹底的に調べる。今は監査基準に従ったかも判断材料になる。'
        },
        {
          title: '例題: Hedley Byrne v Heller（1964年）',
          example: {
            problem: '広告会社 Hedley Byrne は、取引先 Easipower の信用を、Easipower の銀行 Heller に問い合わせた。Heller は「信用できる」と答えたが、「責任は負わない（without responsibility）」と書き添えていた。Easipower が倒産し、Hedley Byrne は損をした。Heller は責任を負うか？',
            steps: ['助言をした人と受けた人の間に契約はない', '貴族院: 専門的な技能を持つ人が、相手が頼ることを知りながら情報や助言を与えたら「特別な関係（special relationship）」があり、注意義務を負いうる', 'その場合、過失のある説明（negligent misstatement）による純粋な経済的損失（pure economic loss）も賠償されうる', 'ただしこの事件では、はっきりした免責の文言があったので、Heller は責任を負わなかった'],
            answer: '原則として責任を負いうる（特別な関係）。この事件では免責の文言があったので責任なし'
          },
          note: { kind: 'tip', text: '今は、過失の責任を外す文言は、合理的な場合だけ有効（Unfair Contract Terms Act 1977）。' }
        },
        {
          title: 'Caparo の3段階テスト',
          svg: `<svg viewBox="0 0 440 336" role="img" aria-label="予見可能性、近い関係、公正で合理的の3つがそろえば注意義務がある" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">注意義務があるか（Caparo）</text><rect x="20" y="46" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="70" fill="var(--ink)">① 損害が合理的に予見できた</text><text x="36" y="90" font-size="13" fill="var(--quiet)">foreseeability of damage</text><rect x="20" y="112" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="136" fill="var(--ink)">② 当事者の間に十分に近い関係がある</text><text x="36" y="156" font-size="13" fill="var(--quiet)">proximity of relationship</text><rect x="20" y="178" width="400" height="54" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="202" fill="var(--ink)">③ 責任を負わせるのが公正・正当・合理的</text><text x="36" y="222" font-size="13" fill="var(--quiet)">fair, just and reasonable</text><text x="220" y="260" text-anchor="middle" fill="var(--quiet)">3つ全部そろったら</text><rect x="60" y="272" width="320" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="300" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">注意義務あり（duty of care）</text></svg>`,
          caption: '会計士や監査人の第三者への責任は、この3段階で判断する。'
        },
        {
          title: '例題: Caparo Industries v Dickman（1990年）',
          example: {
            problem: 'Caparo は Fidelity 社の株主だった。監査済みの財務諸表を見て Fidelity の株を買い増し、買収した。財務諸表は利益を多く見せていて、Caparo は損をした。監査人（Touche Ross）は Caparo に注意義務を負うか？',
            steps: ['貴族院: 法定の監査の目的は、株主が全体として（as a body）取締役の経営を監督できるようにすること', '個々の人の投資判断を助けるためではない', 'だから監査人は、会社と株主全体には義務を負う', '株を買い増す個々の株主や、外部の投資家には、原則として注意義務を負わない（近い関係がなく、公正・合理的でもない）'],
            answer: '注意義務なし。Caparo の請求は認められなかった'
          }
        },
        {
          title: '責任を負う相手、負わない相手',
          table: { caption: '監査人の注意義務', head: ['頼った人', '注意義務'], rows: [['会社（契約の相手）', 'ある'], ['株主全体（経営の監督のため）', 'ある'], ['個々の株主が株を買う判断', '原則なし（Caparo）'], ['外部の投資家・買収者・銀行', '原則なし'], ['特定の人が特定の目的で頼ると知り、その人に直接表明した', 'ありうる']] },
          after: 'ADT v BDO Binder Hamlyn（1995年）: 監査のパートナーが、買収を考えている ADT に「監査済みの財務諸表は正しい」と直接言った。高等法院は監査人の責任を認めた。逆に JEB Fasteners v Marks Bloom（1983年）では、正しい数字を知っていても買収していたので、過失と損害の因果関係がなく責任なし。'
        },
        {
          title: '責任の制限（s532〜s538）',
          list: ['監査人の過失の責任を会社が免除する約束は、原則として無効（s532）', '例外: 監査人が訴訟に勝ったときなどの防御の費用は、会社が補償してよい（s533）', '例外: 責任制限の合意（liability limitation agreement）。1つの会計年度の監査だけが対象で、株主の決議で承認する。制限できるのは公正で合理的な（fair and reasonable）額まで（s534〜s537）', '結んだら財務諸表の注記で開示する（s538）'],
          after: '第三者への責任に備えて、監査報告書に「会社と株主全体のために作った。それ以外の人には責任を負わない」と書く実務も広まっている。'
        },
        {
          title: 'なぜ？ 責任の相手を絞る理由',
          paras: ['監査済みの財務諸表は、誰でも見られる。読んだ人全員に責任を負うとしたら、監査人は「決まらない額を、決まらない期間、決まらない相手に」負うことになる。そんな仕事を引き受ける人はいなくなる。', 'だから英国法は「その情報は誰のために作られたか」で線を引く。日本の感覚では「間違えたら誰にでも責任がある」と考えがちだが、過失の責任は、近い関係の相手に絞られる。'],
          note: { kind: 'warn', text: '「Caparo で、監査人は株主に責任を負わないとされた」は誤り。会社と株主全体には負う。負わないのは、個人として投資の判断をした株主や外部の投資家。また、過失があっても、損害の原因でなければ責任はない（JEB Fasteners）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['過失＝注意義務＋違反＋その違反による損害。3つとも原告が証明する', '注意義務は Caparo の3段階（予見・近い関係・公正で合理的）。監査人は会社と株主全体に負い、個々の投資判断には原則負わない', '特定の相手が頼ると知って表明すれば責任が生じうる（Hedley Byrne、ADT）。責任制限の合意は株主の承認で、公正で合理的な額まで']
        },
        {
          title: '英単語',
          words: [
            ['negligence', 'ネグリジェンス', '過失（不法行為）'],
            ['duty of care', 'デューティ オブ ケア', '注意義務'],
            ['negligent misstatement', 'ミスステイトメント', '過失のある説明（不実表示）'],
            ['pure economic loss', 'エコノミック ロス', '純粋な経済的損失'],
            ['proximity', 'プロクシミティ', '近い関係'],
            ['fair, just and reasonable', '', '公正・正当・合理的'],
            ['liability limitation agreement', 'ライアビリティ', '責任制限の合意']
          ]
        }
      ],
      quiz: [
        { q: 'In Caparo Industries plc v Dickman (1990), to whom did the House of Lords hold that the auditors owed a duty of care in respect of the audited financial statements?', choices: ['Any existing shareholder who bought further shares in reliance on the financial statements', 'The company and its shareholders as a body', 'Any potential investor who might read the financial statements', 'The company\'s creditors and lenders generally'], answer: 1, explain: '法定の監査の目的は、株主全体が経営を監督すること。個々の株主の買い増しや、外部の投資家・債権者の判断のためではないので、原則として義務はない。' },
        { q: 'Which of the following is NOT one of the three stages of the test for establishing a duty of care set out in Caparo Industries plc v Dickman?', choices: ['The loss must have been reasonably foreseeable', 'There must be a relationship of sufficient proximity between the parties', 'It must be fair, just and reasonable to impose a duty', 'The defendant must have received payment from the claimant'], answer: 3, explain: '3段階は、予見可能性・近い関係・公正で合理的。お金を受け取ったかどうかは要件ではない。Hedley Byrne でも、無料の助言で注意義務が生じうるとされた。' },
        { q: 'In Hedley Byrne & Co Ltd v Heller & Partners Ltd (1964), why was the bank NOT liable for its negligent statement about the creditworthiness of its customer?', choices: ['The statement was given with an express disclaimer of responsibility', 'A bank can never owe a duty of care to a person who is not its customer', 'Liability in negligence can never extend to pure economic loss', 'The claimant had not paid the bank for the information'], answer: 0, explain: '貴族院は、特別な関係があれば注意義務を負いうるとした。純粋な経済的損失も対象になりうる。銀行が責任を免れたのは、「責任は負わない」という文言があったから。' },
        { q: '監査人は過失で在庫を多く見せた財務諸表に意見を出した。監査人は X 社が買収の判断に使うと知り、X 社に直接「数字は正しい」と伝えていた。X 社は買収して損をしたが、正しい数字を知っていても、同じ値段で買収していたと分かった。監査人は責任を負う？', choices: ['負う。過失があった以上、必ず責任を負う', '負う。財務諸表は誰でも見られるから', '負わない。違反が損害の原因になっていない', '負わない。監査人は、株主以外には絶対に責任を負わないから'], answer: 2, explain: '直接表明しているので注意義務は認められうる（ADT）。しかし過失には損害との因果関係が必要。どのみち買収していたなら、違反が損害の原因ではない（JEB Fasteners）。株主以外に「絶対に」負わない、も誤り。' },
        { q: '監査人との責任制限の合意（liability limitation agreement）について、正しいのはどれ？', choices: ['取締役会の決議だけで結べ、何年分でもまとめて決められる', '監査人の過失の責任を全部免除する約束も有効', '株主の決議で承認し、制限できるのは公正で合理的な額まで', '合意したことは、どこにも開示しなくてよい'], answer: 2, explain: 's534〜s538。1つの会計年度の監査だけが対象で、株主の承認が要る。全部の免除は無効（s532）。財務諸表の注記で開示する。' }
      ]
    },
    {
      id: 'B087',
      no: 87,
      title: '株主総会と年次株主総会',
      goal: '年次株主総会（AGM）とその他の総会の違い、誰が総会を招集できるか、通知期間と短縮通知の同意の割合を説明し、日付と％を計算できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(h)'],
      slides: [
        {
          title: '通常総会と臨時総会',
          paras: ['マンションの管理組合には、毎年決まった時期に開く「通常総会」と、問題が起きたときに開く「臨時総会」がある。', '会社の株主総会も同じ2つ。年次株主総会（annual general meeting、AGM）と、それ以外の総会（general meeting、GM）。違いは、開く義務・時期・通知の日数・短くするための同意の割合。']
        },
        {
          title: 'AGM とその他の総会',
          table: { caption: 'Companies Act 2006 の違い', head: ['項目', 'AGM', 'その他の総会'], rows: [['開く義務', '公開会社は毎年必ず', '必要なときだけ'], ['時期', '期末から6か月以内（s336）', 'いつでも'], ['通知期間', '21日以上（s307）', '14日以上（s307）'], ['短縮通知の同意', '議決権のある株主の全員（s337）', '株主の過半数で、議決権株式の90%以上（公開会社は95%）']] },
          after: '私会社には AGM の義務がない（定款で求めれば別）。総会を開かず、書面決議（次のレッスン）で決めることもできる。定款で通知期間を長くはできるが、短くはできない。'
        },
        {
          title: 'AGM で何をするか',
          list: ['公開会社の取締役は、年次の財務諸表と報告書を総会に提出する（s437）。K1 で作った財務諸表を株主に報告する場', '取締役の再任（公開会社のモデル定款のローテーション）', '監査人の選任と報酬の決定', '配当の承認'],
          note: { kind: 'tip', text: '公開会社が期限までに AGM を開かないと、責任のある役員（officers in default）が犯罪になる（s336）。' }
        },
        {
          title: '誰が総会を招集できるか',
          list: ['取締役（s302）: ふつうはこれ', '株主の請求（requisition、s303〜s305）: 払込済みの議決権付き資本の5%以上を持つ株主。取締役は請求から21日以内に招集し、総会は通知の日から28日以内に開く。取締役がしなければ、請求した株主が自分で招集でき（3か月以内）、費用は会社に払わせられる', '裁判所（s306）: 総会を開くのが実際にできないとき。例: 一部の株主が欠席を続けて定足数を満たさせない', '辞任する監査人（s518、前のレッスン）'],
          after: '公開会社の純資産が払込済み資本（called-up share capital）の半分以下になったら、取締役は28日以内に総会を招集し、56日以内に開く（s656）。'
        },
        {
          title: '日数は「間の日数」で数える',
          svg: `<svg viewBox="0 0 440 150" role="img" aria-label="通知の日と総会の日を除いた間の日数を数える" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">14日の通知（clear days）</text><text x="60" y="66" text-anchor="middle" fill="var(--ink)">3月5日</text><text x="380" y="66" text-anchor="middle" fill="var(--ink)">3月20日</text><line x1="40" y1="90" x2="400" y2="90" stroke="var(--edge)" stroke-width="1.5"/><line x1="60" y1="76" x2="60" y2="104" stroke="var(--ink)" stroke-width="2"/><line x1="380" y1="76" x2="380" y2="104" stroke="var(--ink)" stroke-width="2"/><rect x="80" y="82" width="280" height="16" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="60" y="122" text-anchor="middle" fill="var(--quiet)">通知の日</text><text x="380" y="122" text-anchor="middle" fill="var(--quiet)">総会の日</text><text x="220" y="140" text-anchor="middle" fill="var(--ink)">3月6日〜19日 ＝ 14日</text></svg>`,
          list: ['通知の日と総会の日は数えない（clear days、s360）', '定足数（quorum）: 有資格者（株主本人・代理人・法人の代表者）2人。株主1人の会社は1人（s318）', '通知は全株主と全取締役に送り（s310）、監査人にも送る（s502）。日時・場所・議題の概要を書く（s311）']
        },
        {
          title: '例題1: 通知を出す最後の日',
          example: {
            problem: 'Hana plc（公開会社）の期末は2027年12月31日。① AGM を開ける最後の日は？ ② その日に AGM を開くには、通知を遅くともいつ出す？ ③ 別に、臨時の総会を2028年3月20日に開くには、通知をいつまでに出す？',
            steps: ['① 期末から6か月以内 → 2028年6月30日', '② AGM は21日。通知の日と総会の日の「間」に21日必要', '6月9日〜29日がちょうど21日 → 通知は6月8日まで', '③ その他の総会は14日。3月6日〜19日がちょうど14日 → 通知は3月5日まで'],
            answer: '① 6月30日 ② 6月8日 ③ 3月5日'
          },
          note: { kind: 'tip', text: '郵送した通知は、送ってから48時間後に届いたとみなされる（s1147）。計算問題では、問題文が「通知した日」として示す日を使う。' }
        },
        {
          title: '例題2: 短縮通知と請求の％',
          example: {
            problem: 'Kaze Ltd（私会社）の議決権付き株式は100,000株（全額払込済み）。株主は5人: A 40,000株、B 30,000株、C 15,000株、D 10,000株、E 5,000株。定款に別の定めはない。① A・B・C が同意すれば、短い通知で総会を開ける？ ② D も同意したら？ ③ E だけで総会を請求できる？',
            steps: ['私会社の短縮通知: 株主の過半数（人数）で、かつ議決権株式の90%以上', '① 人数: 5人中3人で過半数。株式: 40,000＋30,000＋15,000＝85,000 → 85%。90%に届かず不可', '② 人数: 4人。株式: 85,000＋10,000＝95,000 → 95%。90%以上で可', '③ 請求は払込済み議決権資本の5%以上。E は 5,000 ÷ 100,000 ＝ 5% → ちょうど5%で可'],
            answer: '① 不可（85%） ② 可（95%） ③ 可（5%以上）'
          },
          after: 'Kaze Ltd が公開会社なら、②の95%でぎりぎり足りる（公開会社は95%）。AGM なら5人全員の同意が要る。'
        },
        {
          title: 'なぜ？ 通知期間を守らせる理由',
          paras: ['通知期間は、株主が議題を知り、考え、出席や代理人の手配をする時間。これを短くすると、損をするのは株主自身。だから短くするには、守られる株主のほぼ全員の同意が要る。', 'AGM は、取締役が年に一度、財務諸表を示して株主に説明する場。だから全員の同意がなければ短くできない。また、5%の株主に総会を開かせる道を残し、取締役が総会を開かずに逃げるのを防いでいる。'],
          note: { kind: 'warn', text: 'AGM の短縮通知は90%や95%ではなく全員の同意。私会社に AGM の義務はない。日数は通知の日と総会の日を含めずに数える。総会の請求は5%で、監査免除の会社に監査を求める10%とは別物。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['AGM は公開会社だけの義務。期末から6か月以内、通知21日、短縮は全員の同意', 'その他の総会は通知14日。短縮は株主の過半数で議決権株式の90%以上（公開会社は95%）', '招集はふつう取締役。株主は5%以上で請求でき、取締役は21日以内に招集し、28日以内に開く']
        },
        {
          title: '英単語',
          words: [
            ['general meeting', 'ジェネラル ミーティング', '株主総会'],
            ['annual general meeting (AGM)', 'アニュアル', '年次株主総会'],
            ['notice', 'ノーティス', '招集の通知'],
            ['clear days', 'クリア デイズ', '通知の日と総会の日を除いた日数'],
            ['short notice', 'ショート ノーティス', '短縮通知'],
            ['requisition', 'リクイジション', '株主による招集の請求'],
            ['quorum', 'クォーラム', '定足数']
          ]
        }
      ],
      quiz: [
        { q: 'A public company has a financial year end of 31 March 2028. By which date must it hold its annual general meeting?', choices: ['31 December 2028', '31 March 2029', '30 June 2028', '30 September 2028'], answer: 3, explain: 's336：公開会社は期末から6か月以内に AGM を開く。3月31日の6か月後は9月30日。9か月（12月31日）は私会社の財務諸表の提出期限との混同。私会社に AGM の義務はない。' },
        { q: 'What is the minimum period of notice required to call the annual general meeting of a public company, unless all the members entitled to attend and vote agree to short notice?', choices: ['14 days', '21 days', '28 days', '7 days'], answer: 1, explain: 's307(2)：公開会社の AGM は21日。その他の総会は14日。28日は特別通知の期間。' },
        { q: 'A private company has issued 200,000 fully paid voting shares. Its articles do not change the statutory percentage. What is the minimum number of shares which must be held by the members agreeing to hold a general meeting on short notice?', type: 'number', answer: 180000, unit: '株', explain: '私会社は90%（s307(6)）。200,000 × 90% ＝ 180,000株。さらに、同意する株主が人数の過半数であることも必要。公開会社なら95%で190,000株。' },
        { q: '公開会社 Yama plc の払込済みの議決権付き資本は £600,000。株主が総会の招集を請求するには、最低いくら分の払込済み議決権付き資本を持っている必要がある？', type: 'number', answer: 30000, unit: '£', explain: 's303：5%以上。£600,000 × 5% ＝ £30,000。10%（£60,000）や90%と混同しない。' },
        { q: '私会社の臨時の総会を5月25日に開く。短縮通知の同意はない。通知は遅くとも何日に出す？', choices: ['5月10日', '5月11日', '5月12日', '5月4日'], answer: 0, explain: '14日の clear days。通知の日と総会の日を数えないので、5月11日〜24日の14日が必要。通知は5月10日まで。5月11日だと間が13日しかない。' },
        { q: '株主が適法に総会の招集を請求したのに、取締役が21日以内に招集しなかった。どうなる？', choices: ['株主はあきらめるしかない', '会社登記所が代わりに招集する', '監査人が招集しなければならない', '請求した株主が自分で招集でき、かかった費用は会社に払わせられる'], answer: 3, explain: 's305。請求した株主（またはその議決権の過半数を持つ人たち）が、3か月以内に開く総会を自分で招集できる。費用は会社が払い、会社は怠った取締役の報酬から取り戻せる。' }
      ]
    },
    {
      id: 'B088',
      no: 88,
      title: '決議の種類：普通・特別・書面',
      goal: '普通決議・特別決議・書面決議の違いと使い道、特別通知との違いを説明し、票の数から可決か否決かを判定できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(i)'],
      slides: [
        {
          title: '出し物は多数決、規則の変更はもっと多く',
          paras: ['クラスで文化祭の出し物を決めるなら、多数決でよい。でも、クラスの規則そのものを変えるなら、もっと多くの賛成を求めたくなる。', '会社の決議（resolution）も同じ。大事なことほどハードルが高い。決議は3種類。普通決議・特別決議・書面決議。']
        },
        {
          title: '3つの決議',
          table: { caption: 'Companies Act 2006 s282・s283・s288', head: ['決議', '可決の条件', '主な使い道'], rows: [['普通決議（ordinary）', '投じられた票の過半数（50%を超える）', '取締役・監査人の選任と解任、配当の承認'], ['特別決議（special）', '投じられた票の75%以上', '定款の変更、社名の変更、減資'], ['書面決議（written）', '全議決権の過半数（普通）か75%以上（特別）', '私会社だけ。総会を開かずに決める']] },
          after: '50%ちょうどは過半数ではないので、普通決議は否決。75%ちょうどは「以上」なので、特別決議は可決。総会の通知期間は、普通決議も特別決議も同じ（14日。公開会社の AGM は21日）。特別決議に21日が要ったのは昔の法律（CA 1985）なので、古い教材に注意。'
        },
        {
          title: '特別決議が要る主な場面',
          list: ['定款（articles）の変更（s21）', '社名の変更（s77。定款に別の方法があればそれでもよい）', '減資（capital reduction、s641）', '私会社から公開会社への再登録（s90）', '既存株主の新株引受権（pre-emption rights）を外す（s570・s571）', '株主による任意清算（Insolvency Act 1986 s84）'],
          after: '特別決議は、総会の通知に決議の文と「特別決議として提案する」ことを書く（s283(6)）。特別決議の写しは15日以内に登記所へ送る（s30）。普通決議の例: 取締役の解任（s168）、監査人の解任（s510）、取締役との取引の承認（s190・s197）、義務違反の追認（s239）、株式を発行する権限を取締役に与える（s551）。'
        },
        {
          title: '票の数え方',
          list: ['挙手（show of hands）: 出席した株主1人1票。持っている株の数は関係ない', '投票（poll）: 1株1票（定款どおり）。一定の株主は投票を求められ、定款でもこの権利は奪えない（5人以上、または議決権の10%以上など、s321）', '総会の決議は「投じられた票」で数える。欠席や棄権は分母に入らない', '書面決議は1株1票で、分母は「議決権を持つ全株主の全議決権」'],
          formula: '総会: 賛成 ÷（賛成＋反対）　書面決議: 賛成 ÷ 全議決権'
        },
        {
          title: '例題1: 同じ賛成票で結果が変わる',
          example: {
            problem: 'Tori Ltd（私会社）の株式は1,000,000株（1株1票）。総会の投票（poll）で賛成520,000票、反対180,000票。残り300,000株の株主は欠席した。① 普通決議として可決？ ② 特別決議として可決？ ③ 同じ株主だけが賛成する書面決議なら？',
            steps: ['投じられた票: 520,000 ＋ 180,000 ＝ 700,000', '賛成の割合: 520,000 ÷ 700,000 ＝ 74.3%', '① 50%を超える → 普通決議は可決', '② 75%に届かない（700,000 × 75% ＝ 525,000票が必要。あと5,000票足りない）→ 特別決議は否決', '③ 書面決議の分母は全議決権1,000,000。普通は500,000を超えればよく、520,000で可決。特別は750,000以上が必要で否決'],
            answer: '① 可決 ② 否決 ③ 普通なら可決、特別なら否決'
          }
        },
        {
          title: '例題2: 挙手と投票',
          example: {
            problem: 'Kumo Ltd の株主は3人だけで、全員が総会に出席した。X（600株）は賛成、Y（100株）と Z（100株）は反対。① 挙手ではどうなる？ ② X が投票を求めたら、普通決議と特別決議はどうなる？',
            steps: ['① 挙手は1人1票。賛成1、反対2 → 否決', '② 投票は1株1票。賛成600、反対200', '600 ÷ 800 ＝ 75%', '普通決議: 50%を超える → 可決', '特別決議: 75%ちょうどは「75%以上」に当たる → 可決'],
            answer: '挙手では否決。投票なら普通決議も特別決議も可決'
          },
          note: { kind: 'tip', text: 'X は全議決権800のうち600（75%）を持つので、10%以上の基準で投票を求められる。大株主が挙手で負けたら、投票を求めるのがふつう。' }
        },
        {
          title: '書面決議（written resolution）のルール',
          list: ['私会社だけ。公開会社は使えない（s281・s288）', '取締役か、議決権の5%以上を持つ株主が提案できる（s288・s292）', '議決権を持つ株主全員に案を送る（s291）。監査人にも写しを送る（s502）', '必要な数の賛成が集まった時点で可決（s296）。全員一致は要らない', '定款に定めがなければ、送った日から28日以内に可決しないと失効する（s297）', '使えないのは2つ: 取締役の解任（s168）と、監査人の任期途中の解任（s510）（s288(2)）。本人が総会で弁明する機会を守るため']
        },
        {
          title: '特別通知は「決議の種類」ではない',
          formula: 'special notice ＝ 総会の28日以上前に、株主が会社へ出す予告（s312）',
          list: ['取締役の解任（s168）', '監査人の解任（s511）', '退任する監査人以外の人を監査人に選ぶ（s515）'],
          after: 'どれも決議そのものは普通決議。会社はそれを総会の通知と一緒に株主へ知らせる（できなければ14日以上前の広告など）。'
        },
        {
          title: 'なぜ？ 75%と「全議決権」の理由',
          paras: ['定款・社名・資本の減少は、会社のルールそのものや、少数株主・債権者に影響する。大株主だけで変えられると、ほかの株主が不利益を受ける。だから75%。25%を超えて持つ株主は、特別決議を1人で止められる。', '書面決議は、総会で議論する機会がない。だから分母を全議決権にし、返事をしない株主は実質的に反対と同じになる。慎重に決めるためと考えるとわかりやすい。'],
          note: { kind: 'warn', text: '総会の決議は「投じられた票」、書面決議は「全議決権」で割る。普通決議の50%ちょうどは否決、特別決議の75%ちょうどは可決。28日前の特別通知を特別決議と混同しない。取締役・監査人の解任は書面決議ではできない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['普通決議は投じられた票の過半数、特別決議は75%以上（定款・社名・減資など）', '書面決議は私会社だけ。全議決権の過半数か75%以上で、28日で失効。取締役・監査人の解任には使えない', '挙手は1人1票、投票は1株1票。特別通知は決議の種類ではなく、28日前の予告']
        },
        {
          title: '英単語',
          words: [
            ['ordinary resolution', 'オーディナリー レゾリューション', '普通決議（過半数）'],
            ['special resolution', 'スペシャル レゾリューション', '特別決議（75%以上）'],
            ['written resolution', 'リトゥン レゾリューション', '書面決議（私会社のみ）'],
            ['simple majority', 'シンプル マジョリティ', '過半数（50%を超える）'],
            ['show of hands', 'ショー オブ ハンズ', '挙手（1人1票）'],
            ['poll', 'ポール', '投票（1株1票）'],
            ['eligible members', 'エリジブル メンバーズ', '議決権を持つ株主（書面決議の分母）']
          ]
        }
      ],
      quiz: [
        { q: 'At a general meeting of K Ltd, a special resolution is put to a poll. Votes cast in favour are 600,000 and votes cast against are 240,000. Members holding a further 160,000 votes do not vote. What is the minimum number of votes in favour which would have been required for the special resolution to be passed?', type: 'number', answer: 630000, unit: '票', explain: '投じられた票は 600,000 ＋ 240,000 ＝ 840,000。その75%は630,000。実際の600,000（71.4%）では否決。投票しなかった160,000は分母に入れない（入れると750,000になる）。' },
        { q: 'Which of the following CANNOT be passed as a written resolution of a private company?', choices: ['A special resolution to change the company\'s articles of association', 'A special resolution to change the company\'s name', 'A resolution to remove a director before the end of his period of office', 'An ordinary resolution to appoint a new director'], answer: 2, explain: 's288(2)：取締役の解任（s168）と監査人の解任（s510）は書面決議では決められない。総会で本人が弁明する機会を守るため。定款や社名の変更は、書面の特別決議でできる。' },
        { q: 'A private company has 2,000,000 shares, each carrying one vote, all held by eligible members. A special resolution is proposed as a written resolution. What is the minimum number of votes which must be cast in favour for it to be passed?', type: 'number', answer: 1500000, unit: '票', explain: '書面の特別決議は、全議決権の75%以上（s283(2)）。2,000,000 × 75% ＝ 1,500,000。返事をした人の票だけで割らない。' },
        { q: 'Mori Ltd の総会の投票で、賛成450,000票、反対450,000票だった。普通決議はどうなる？', choices: ['可決。50%に達している', '否決。過半数（50%を超える）に届いていない', '欠席した株主の票を賛成として数えて決める', '特別決議に切り替えれば可決する'], answer: 1, explain: '普通決議は投じられた票の過半数、つまり50%を超える必要がある。同数はちょうど50%なので否決。欠席者は分母にも入れない。特別決議はさらに高い75%なので、切り替えても通らない。' },
        { q: '特別決議（special resolution）が必要なのはどれ？', choices: ['取締役の解任', '監査人の選任', '取締役への貸付の承認', '定款（articles of association）の変更'], answer: 3, explain: '定款の変更は s21 で特別決議。取締役の解任（s168）と監査人の選任は普通決議（解任には特別通知が要る）。取締役への貸付の承認（s197）も普通決議。' },
        { q: '定款に定めがない場合、私会社の書面決議は、案を送った日から何日以内に可決しないと失効する？', type: 'number', answer: 28, unit: '日', explain: 's297。28日以内に必要な賛成が集まらなければ失効する。集まった時点で可決し、全員一致は要らない。' }
      ]
    },
    {
      id: 'B089',
      no: 89,
      title: '第7部 総合演習①：取締役',
      goal: '取締役の種類・選任と解任・資格剥奪・会社を拘束する権限・義務と取引の規制を、本番形式の英語の問題で使いこなせるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(a)', 'K3:D5(b)', 'K3:D5(c)', 'K3:D5(d)'],
      slides: [
        {
          title: 'この演習の進め方',
          paras: ['B077〜B082 で学んだ取締役のルールを、1つの会社 Aoba Ltd の場面で確かめる。', '本番の K3 は、1問2点の OT 問題が50問。英語の言い回しに慣れながら、「どのルールを使う問題か」を素早く見分ける練習をする。']
        },
        {
          title: '早見表①: 種類・選任・解任・資格剥奪',
          table: { caption: '取締役の基本ルール', head: ['論点', 'ルール'], rows: [['de jure / de facto', '正式に選任された / 選任なしで取締役として行動'], ['shadow director', '取締役会がその指示に従う人（専門家としての助言は除く）'], ['人数（s154・s155）', '私会社1人以上、公開会社2人以上。1人は自然人'], ['年齢（s157）', '16歳以上'], ['解任（s168）', '普通決議＋特別通知28日。書面決議は不可'], ['資格剥奪（CDDA 1986）', '最長15年。s6 の不適格は必ず命令、最短2年']] }
        },
        {
          title: '早見表②: 権限・義務・取引の規制',
          table: { caption: '会社を拘束する権限と義務', head: ['論点', 'ルール'], rows: [['取締役会', '集まって会社の全権限を使う（model articles art 3）'], ['社長（MD/CEO）', '任された権限＋社長に通常ついてくる権限'], ['個々の取締役', '地位だけでは権限なし（表見的な権限は別）'], ['s40', '善意の相手方には、定款の制限が及ばない'], ['7つの義務', 's171〜s177。会社に対して負う'], ['実質的財産取引（s190）', '純資産の10%超かつ£5,000超、または£100,000超で株主の承認'], ['取締役への貸付（s197）', '株主の承認。合計£10,000以下は不要']] }
        },
        {
          title: '例題1: 取締役の解任',
          example: {
            problem: 'Aoba Ltd（私会社）の株式は1,000株（1株1票）。取締役 Ken が300株、Mina が400株、Jun が300株を持つ。定款に加重議決権の定めはない。Mina と Jun は Ken を任期の途中で解任したい。どうすればよい？ Ken に何が残る？',
            steps: ['解任は s168 の普通決議でできる。定款や契約で奪えない', '提案する株主は、総会の28日以上前に会社へ特別通知を出す', '書面決議は使えない。総会を開く', 'Ken は特別通知の写しを受け、書面の意見を配らせ、総会で発言できる（s169）', '投票: 賛成700、反対300 → 70%。50%を超えるので可決', 'Ken は、雇用契約の残りなどの損害賠償を別に請求できる'],
            answer: '特別通知のうえ総会の普通決議で解任できる。Ken には弁明の権利と損害賠償の請求権が残る'
          }
        },
        {
          title: '例題2: 会社は契約に拘束されるか',
          example: {
            problem: 'Aoba Ltd の取締役 Sara は社長に選任されていない。しかし取締役会は、Sara が2年間社長として振る舞うのを知りながら止めなかった。Sara は会社の名で、仕入先と £60,000 の契約を結んだ。定款には「£50,000 を超える契約は取締役会の承認が必要」とある。仕入先はそれを知らなかった。会社は拘束される？',
            steps: ['Sara に社長としての実際の権限はない', 'しかし取締役会は、Sara を社長として扱う外見を作った → 表見的な権限（apparent authority、Freeman & Lockyer）', '定款の £50,000 の制限: 善意の相手方には及ばない（s40）', '仕入先は外部の人で善意 → 保護される', 'Sara は、制限を超えたことについて会社に責任を負いうる'],
            answer: '会社は拘束される。責任の問題は会社と Sara の間に残る'
          }
        },
        {
          title: '例題3: 実質的財産取引か（数字）',
          example: {
            problem: 'Aoba Ltd の直近の法定財務諸表の純資産は £350,000。取締役 Ken が会社から中古の機械を買う。機械の価値が ① £40,000 ② £30,000 のとき、株主の承認は要る？ ③ 純資産 £30,000 の別の会社で、価値 £4,800 の資産なら？',
            steps: ['基準（s191）: 純資産の10%を超え、かつ£5,000を超える。または£100,000を超える', '① 10%は£35,000。£40,000 はこれを超え、£5,000 も超える → 承認が要る', '② £30,000 は£35,000以下で、£100,000以下 → 承認は要らない', '③ 10%は£3,000。£4,800 は10%を超えるが、£5,000以下 → 承認は要らない'],
            answer: '① 要る ② 要らない ③ 要らない（£5,000以下）'
          }
        },
        {
          title: '例題4: 義務違反',
          example: {
            problem: 'Aoba Ltd の取締役 Jun は、取締役として出た打合せで大きな仕事の話を知った。相手は「Aoba Ltd とは取引しない」と言った。Jun は辞任し、その仕事を自分で引き受けて利益を得た。義務違反か？',
            steps: ['利益相反を避ける義務（s175）の問題', '会社がその機会を使えなかったかどうかは関係ない', '退任後も、在任中に知った機会を使うことには s175 が及ぶ（s170(2)）', 'Jun は得た利益を会社に返す（account for profits）', '株主は普通決議で追認できるが、Jun とその関係者の票は数えない（s239）'],
            answer: 's175 の違反。辞任しても免れず、利益を会社に返す'
          },
          note: { kind: 'tip', text: '問題文から先に拾うもの: どの決議か（ordinary / special / written）、相手方は善意の外部の人か、資産の価値と純資産、その人は取締役か（de facto / shadow）。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '取締役の解任に特別決議は要らない（普通決議＋特別通知）。個々の取締役には、地位だけで会社を拘束する権限はない。s175 は、会社が機会を使えなくても違反になる。資格剥奪は、すべての会社の経営への関与を禁じる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['種類は実態で決まる（de jure・de facto・shadow）。解任は普通決議＋特別通知、書面決議は不可', '会社を拘束するのは取締役会と社長。外見（表見的な権限）と s40 で善意の相手方が守られる', '義務は s171〜s177。財産取引は「10%超かつ£5,000超、または£100,000超」、貸付は£10,000を超えたら株主の承認']
        },
        {
          title: '英単語',
          words: [
            ['executive / non-executive director', 'エグゼクティブ', '執行取締役 / 非執行取締役'],
            ['apparent (ostensible) authority', 'アパレント', '表見的な権限'],
            ['substantial property transaction', 'サブスタンシャル', '実質的財産取引'],
            ['account for profits', 'アカウント フォー', '得た利益を会社に返す'],
            ['ratification', 'ラティフィケーション', '追認']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements regarding a shadow director is correct?', choices: ['A shadow director is a person who has not been validly appointed but who openly acts as a director', 'A professional adviser whose advice, given in a professional capacity, is followed by the board is a shadow director', 'A shadow director is a person in accordance with whose directions or instructions the directors of the company are accustomed to act', 'A shadow director owes none of the general duties of directors to the company'], answer: 2, explain: 's251。「選任されていないが表立って取締役として行動する人」は de facto director の説明。専門家としての助言をする人は除かれる（s251(2)）。一般的義務は、当てはまる範囲で影の取締役にも及ぶ（s170(5)）。' },
        { q: 'The members of P Ltd wish to remove a director, Q, before the end of his period of office. Which of the following statements is correct?', choices: ['Q can be removed by a written resolution agreed by members holding 75% of the voting rights', 'Special notice of the resolution must be given to the company at least 28 days before the meeting', 'A special resolution is required to remove Q', 'Q loses any right to claim damages for breach of his service contract'], answer: 1, explain: 's168・s312。決議は普通決議で、特別通知（28日）が必要。書面決議は使えない（s288(2)）。損害賠償の請求権は残る（s168(5)）。' },
        { q: 'R Ltd\'s most recent statutory accounts show net assets of £420,000. A director proposes to buy a non-cash asset from the company. Above what value (in £) will the transaction require the approval of the members as a substantial property transaction?', type: 'number', answer: 42000, unit: '£', explain: 's191：純資産の10%を超え、かつ£5,000を超えると実質的。£420,000 × 10% ＝ £42,000。これを超えれば承認が要る（£42,000 ちょうどは超えていない）。£100,000 を超えれば純資産に関係なく要る。' },
        { q: 'S, a director of T Ltd, has never been appointed managing director, but the board has allowed him to act as managing director for several years. S contracts on T Ltd\'s behalf with U Ltd, which is unaware of any limit on his authority. Which of the following is correct?', choices: ['T Ltd is bound because S has apparent (ostensible) authority', 'T Ltd is not bound because S was never formally appointed managing director', 'T Ltd is bound only if the members ratify the contract by special resolution', 'S is personally liable on the contract and T Ltd is not bound'], answer: 0, explain: 'Freeman & Lockyer v Buckhurst Park Properties。取締役会が社長として扱う外見を作り、相手方がそれを信じたので、会社は拘束される。正式な選任がないことは、善意の外部の人には関係ない。' },
        { q: 'V, a director of W Ltd, learned of a valuable contract opportunity while acting as a director. The client made it clear that it would not deal with W Ltd. V resigned and took the contract personally. Which of the following is correct?', choices: ['V has not breached any duty because W Ltd could not have obtained the contract', 'V has not breached any duty because the duties end when a director resigns', 'V has breached only the duty to exercise reasonable care, skill and diligence', 'V has breached the duty to avoid conflicts of interest and must account for the profit'], answer: 3, explain: 's175 は、会社がその機会を使えたかどうかに関係なく適用される。在任中に知った機会は、退任後も s175 の対象（s170(2)）。注意義務（s174）の問題ではない。' },
        { q: 'ある私会社は取締役に £7,000 を貸している。さらに £4,000 を貸したい。株主の承認は？', choices: ['不要。今回の £4,000 は £10,000 以下だから', '不要。私会社では取締役への貸付の規制がない', '必要。合計 £11,000 が £10,000 を超える', '必要。どんな少額でも、必ず承認が要る'], answer: 2, explain: 's207(1)：少額の例外は、ほかの貸付と合計して£10,000以下のとき。£7,000 ＋ £4,000 ＝ £11,000 で超える。私会社でも貸付（loan）は規制される（準貸付・信用取引の規制は公開会社などだけ）。' }
      ]
    },
    {
      id: 'B090',
      no: 90,
      title: '第7部 総合演習②：役員・監査人・総会',
      goal: '会社秘書役・監査人・総会・決議のルールを組み合わせて、本番形式の英語の問題と、日数・％・票の計算を解けるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(e)', 'K3:D5(f)', 'K3:D5(g)', 'K3:D5(h)', 'K3:D5(i)'],
      slides: [
        {
          title: 'この演習の進め方',
          paras: ['B083〜B088 で学んだ秘書役・監査人・総会・決議を組み合わせる。', '計算問題では、日数・％・票の数を1つずつ確かめる。法律の問題でも、数字の分母や境界を1つ間違えると答えが逆になる。']
        },
        {
          title: '早見表①: 秘書役と監査人',
          table: { caption: '役員と監査人', head: ['論点', 'ルール'], rows: [['会社秘書役', '公開会社は必須、私会社は任意（s270・s271）。取締役が選任。事務的な契約に表見的な権限（Panorama）'], ['監査人の選任', '最初と途中で欠けた時は取締役。以後は株主の普通決議'], ['監査人の権利', '帳簿の閲覧、情報の要求、総会の通知・出席・発言'], ['監査人の解任', '普通決議＋特別通知。書面決議は不可。意見を配らせる'], ['監査人の辞任', '書面の通知。理由の説明書。総会を請求できる'], ['注意義務', 'Caparo: 会社と株主全体に負う。個々の投資判断には原則負わない']] }
        },
        {
          title: '早見表②: 総会と決議',
          table: { caption: '総会と決議の数字', head: ['論点', 'ルール'], rows: [['AGM', '公開会社だけ。期末から6か月以内。通知21日。短縮は全員'], ['その他の総会', '通知14日。短縮は過半数で90%以上（公開会社95%）'], ['株主の請求', '5%以上。21日以内に招集、28日以内に開催'], ['普通決議', '投じられた票の過半数'], ['特別決議', '投じられた票の75%以上'], ['書面決議', '私会社だけ。全議決権の過半数か75%以上。28日で失効'], ['特別通知', '28日前の予告。取締役・監査人の解任など']] }
        },
        {
          title: '例題1: 監査人を任期の途中で替える',
          example: {
            problem: 'Sumi plc の株主 Ota は、監査人 Lee を任期の途中で解任したい。総会は7月31日に開く予定。① Ota が会社に特別通知を出す最後の日は？ ② 必要な決議は？ ③ 可決したら、会社は何日以内に登記所へ届ける？',
            steps: ['特別通知は28日。通知の日と総会の日は数えない（clear days）', '7月3日〜30日がちょうど28日 → 7月2日まで', '② 総会の普通決議（公開会社なので書面決議はそもそも使えない。私会社でも解任には使えない）', '会社は写しをすぐ Lee に送る。Lee は書面の意見を配らせ、総会で発言できる', '③ 14日以内（s512）'],
            answer: '① 7月2日 ② 普通決議（特別通知つき） ③ 14日以内'
          }
        },
        {
          title: '例題2: 請求から決議まで（％と票）',
          example: {
            problem: 'Nami Ltd（私会社）の議決権付き株式は500,000株（全額払込済み、1株1票）。株主は P 200,000株、Q 150,000株、R 125,000株、S 25,000株。① S は1人で総会を請求できる？ ② 定款を変える決議を総会で投票した。P・Q が賛成、R が反対、S は欠席。可決？ ③ 同じ決議を書面決議にしたら？ ④ P・Q・R が同意すれば、短い通知で総会を開ける？',
            steps: ['① 請求は5%以上。S は 25,000 ÷ 500,000 ＝ 5% → 請求できる', '② 定款の変更は特別決議。投じられた票 200,000＋150,000＋125,000＝475,000', '賛成 350,000 ÷ 475,000 ＝ 73.7% → 75%未満で否決', '③ 書面の特別決議は全議決権の75%＝375,000票が必要。350,000では否決', '④ 人数は4人中3人で過半数。株式 475,000 ÷ 500,000 ＝ 95% → 90%以上で可'],
            answer: '① 可 ② 否決（73.7%） ③ 否決（375,000票必要） ④ 可（95%）'
          }
        },
        {
          title: '例題3: 監査人は誰に責任を負うか',
          example: {
            problem: '監査人は過失で、利益を多く見せた財務諸表に意見を出した。① 株主 Ito は財務諸表を読んで株を買い増し、損をした。② 銀行は融資の判断に使った。監査人は、銀行が融資のために頼ると知っていて、銀行に直接「数字は正しい」と手紙を出していた。それぞれ責任は？',
            steps: ['Caparo の3段階: 予見・近い関係・公正で合理的', '① 個々の株主の投資判断 → 監査の目的の外。原則として注意義務なし', '② 特定の相手が特定の目的で頼ると知り、直接表明した → 近い関係があり、注意義務が生じうる（Hedley Byrne、ADT）', '② でも、損害が過失によって生じたこと（因果関係）が必要'],
            answer: '① 原則として責任なし ② 損害の因果関係があれば責任を負いうる'
          }
        },
        {
          title: '数字の問題で最初に確かめる3つ',
          list: ['分母: 総会は投じられた票。書面決議は全議決権。短縮通知と請求は議決権付き株式（払込済み資本）', '境界: 普通決議は50%を超える。特別決議は75%以上。請求は5%以上。短縮通知は90%以上（公開会社95%）', '日数: 通知期間は、通知の日と総会の日を数えない（clear days）'],
          note: { kind: 'warn', text: '特別通知（28日の予告）と特別決議（75%）は別物。秘書役は取締役が選び、監査人は株主が選ぶ（最初と欠けた時は取締役）。私会社には AGM も秘書役も義務ではない。書面決議は公開会社では使えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['秘書役は公開会社だけ必須で取締役が選ぶ。監査人は株主が選び、解任は普通決議＋特別通知、辞任は理由の説明書', '監査人の注意義務は Caparo の3段階。会社と株主全体には負い、直接表明した特定の相手にも負いうる', 'AGM 21日・その他14日。普通は過半数・特別は75%以上。書面決議は全議決権が分母']
        },
        {
          title: '英単語',
          words: [
            ['company secretary', 'セクレタリー', '会社秘書役'],
            ['casual vacancy', 'カジュアル ヴェイカンシー', '途中で欠けた地位'],
            ['statement of reasons', '', '辞める理由の説明書'],
            ['votes cast', 'ヴォーツ キャスト', '投じられた票'],
            ['total voting rights', 'ヴォーティング ライツ', '全議決権']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements regarding the company secretary is correct under the Companies Act 2006?', choices: ['Every company, whether public or private, must have a company secretary', 'A public company must have a company secretary, but a private company need not', 'The company secretary is appointed by the members by ordinary resolution', 'The company secretary has no authority to bind the company in any contract'], answer: 1, explain: 's270・s271。私会社は任意。秘書役を選ぶのは取締役。事務的な運営の契約には表見的な権限があり、会社を拘束しうる（Panorama v Fidelis）。' },
        { q: 'X plc, a public company, wishes to hold a general meeting (other than an AGM) on short notice. What is the minimum percentage of the nominal value of the voting shares which must be held by the members agreeing to short notice?', type: 'number', answer: 95, unit: '%', explain: 's307(6)：公開会社は95%。私会社は90%（定款で95%まで上げられる）。AGM なら全員の同意が要る。' },
        { q: 'Y Ltd, a private company, has 800,000 shares, each carrying one vote. An ordinary resolution is circulated as a written resolution. Members holding 350,000 shares agree to it and members holding 100,000 shares reject it. The other members do not respond. What is the minimum total number of votes in favour required for the resolution to be passed?', type: 'number', answer: 400001, unit: '票', explain: '書面の普通決議は全議決権の過半数（50%を超える）。800,000 の半分は400,000なので、それを1票でも超える400,001票が必要。返事をした450,000票の過半数（225,001）で判定するのは総会のやり方で、書面決議では誤り。' },
        { q: 'The members of A plc propose to remove the company\'s auditor before the end of its term of office. Which of the following is NOT a right of the auditor?', choices: ['To receive a copy of the notice of the proposed resolution', 'To make written representations and request that they are notified to members', 'To attend the general meeting and be heard', 'To veto the resolution if the auditor has held office for less than one year'], answer: 3, explain: 's511。写しを受け取る、書面の意見を配らせる、総会で発言する、が監査人の権利。決議を拒否する権利はない。解任は株主がいつでも普通決議でできる。' },
        { q: '監査人 B は過失のある財務諸表に意見を出した。外部の投資家 C は公開された財務諸表を読んで株を買い、損をした。B と C の間に特別なやり取りはない。正しいのはどれ？', choices: ['B は C に、原則として注意義務を負わない（Caparo）', 'B は C に必ず責任を負う。過失があったから', 'B は C に責任を負う。財務諸表は誰でも見られるから', 'B が責任を負わない理由は、C と契約がないことだけ'], answer: 0, explain: 'Caparo：監査は株主全体が経営を監督するためのもので、外部の投資家の判断のためではない。近い関係がなく、注意義務がない。契約がなくても過失の責任はありうるので、「契約がないことだけ」は誤り。' },
        { q: '私会社 D Ltd は今年 AGM を開かなかった。定款に AGM の定めはない。正しいのはどれ？', choices: ['違法。すべての会社は毎年 AGM を開かなければならない', '違法。私会社は期末から9か月以内に AGM を開く', '問題ない。私会社に AGM の義務はない', '問題ない。ただし、総会の決議は一切できなくなる'], answer: 2, explain: 's336 の AGM の義務は公開会社だけ。9か月は私会社の財務諸表の提出期限との混同。私会社は必要なときに総会を開くか、書面決議で決められる。' }
      ]
    }
  ],
  cards: [
    { id: 'B085-1', lesson: 'B085', q: '監査人を任期の途中で解任する方法は？', a: '総会の普通決議＋特別通知（28日）。書面決議は不可（s510・s288(2)）' },
    { id: 'B085-2', lesson: 'B085', q: '解任される監査人の権利は？', a: '通知の写し、書面の意見を配らせる（遅れたら読み上げ）、総会で発言' },
    { id: 'B085-3', lesson: 'B085', q: '監査人の辞任の方法は？', a: '登記上の事務所に書面の通知。決議は不要。会社は14日以内に登記所へ' },
    { id: 'B085-4', lesson: 'B085', q: 'statement of reasons とは？', a: '辞める監査人が出す、理由と株主・債権者に知らせるべき事項の説明書' },
    { id: 'B085-5', lesson: 'B085', q: '辞任する監査人が総会を請求したときの期限は？', a: '取締役は21日以内に招集、総会は通知から28日以内に開く（s518）' },
    { id: 'B085-6', lesson: 'B085', q: 'なぜ？ 監査人の声を株主に届ける', a: '都合の悪い監査人を黙って替えたり、問題を隠して去るのを防ぐため' },
    { id: 'B086-1', lesson: 'B086', q: '過失（negligence）の3つの要件は？', a: '注意義務、義務違反、その違反による損害（因果関係）' },
    { id: 'B086-2', lesson: 'B086', q: 'Caparo の3段階テストは？', a: '損害の予見可能性、近い関係、公正・正当・合理的' },
    { id: 'B086-3', lesson: 'B086', q: 'Caparo v Dickman の結論は？', a: '監査人は会社と株主全体に負う。個々の投資判断や外部投資家には原則負わない' },
    { id: 'B086-4', lesson: 'B086', q: 'Hedley Byrne v Heller の要点は？', a: '頼られると知って助言すれば注意義務が生じうる。この事件は免責文言で責任なし' },
    { id: 'B086-5', lesson: 'B086', q: '責任制限の合意の条件は？', a: '1会計年度分、株主の決議で承認、公正で合理的な額まで、注記で開示' },
    { id: 'B086-6', lesson: 'B086', q: 'なぜ？ 監査人の責任の相手を絞る', a: '読んだ全員に無限の責任を負うと、監査を引き受ける人がいなくなるから' },
    { id: 'B087-1', lesson: 'B087', q: 'AGM を開く義務と期限は？', a: '公開会社だけ。期末から6か月以内（s336）' },
    { id: 'B087-2', lesson: 'B087', q: '総会の通知期間は？', a: 'AGM は21日、その他の総会は14日（clear days）' },
    { id: 'B087-3', lesson: 'B087', q: '短縮通知に必要な同意は？', a: 'その他の総会: 株主の過半数で株式90%以上（公開会社95%）。AGM: 全員' },
    { id: 'B087-4', lesson: 'B087', q: '株主が総会を請求する要件と期限は？', a: '払込済み議決権資本の5%以上。21日以内に招集、28日以内に開催' },
    { id: 'B087-5', lesson: 'B087', q: 'clear days とは？', a: '通知の日と総会の日を数えない日数（s360）' },
    { id: 'B087-6', lesson: 'B087', q: '総会の定足数（quorum）は？', a: '有資格者2人。株主1人の会社は1人（s318）' },
    { id: 'B088-1', lesson: 'B088', q: '普通決議と特別決議の条件は？', a: '普通: 投じられた票の過半数（50%超）。特別: 75%以上' },
    { id: 'B088-2', lesson: 'B088', q: '特別決議が要る主な場面は？', a: '定款の変更、社名の変更、減資、任意清算、新株引受権の排除' },
    { id: 'B088-3', lesson: 'B088', q: '書面決議の分母は？', a: '議決権を持つ全株主の全議決権（返事のない株主も分母に入る）' },
    { id: 'B088-4', lesson: 'B088', q: '書面決議で決められないのは？', a: '取締役の解任（s168）と監査人の任期途中の解任（s510）' },
    { id: 'B088-5', lesson: 'B088', q: '挙手と投票の違いは？', a: '挙手は出席株主1人1票。投票は1株1票' },
    { id: 'B088-6', lesson: 'B088', q: '特別通知と特別決議の違いは？', a: '特別通知は28日前の予告。取締役・監査人の解任の決議自体は普通決議' },
    { id: 'B089-1', lesson: 'B089', q: 'de facto と shadow director の違いは？', a: 'de facto は表で取締役として行動。shadow は裏で取締役会に指示を従わせる' },
    { id: 'B089-2', lesson: 'B089', q: '取締役の解任の手続きのセットは？', a: '普通決議・特別通知28日・総会が必要・本人の弁明・損害賠償は別に請求可' },
    { id: 'B089-3', lesson: 'B089', q: '表見的な権限で会社が拘束される条件は？', a: '取締役会が権限があるような外見を作り、相手方がそれを信じて取引した' },
    { id: 'B089-4', lesson: 'B089', q: '実質的財産取引の判定のしかたは？', a: '純資産の10%と£5,000の両方を超えるか、または£100,000を超えるか' },
    { id: 'B089-5', lesson: 'B089', q: '辞任した取締役と s175 の関係は？', a: '在任中に知った機会を使えば、退任後も s175 が及ぶ（s170(2)）' },
    { id: 'B090-1', lesson: 'B090', q: '決議の計算で最初に確かめる3つは？', a: '分母（投じた票か全議決権か）、境界（超えるか以上か）、日数（clear days）' },
    { id: 'B090-2', lesson: 'B090', q: '特別通知が要る決議は？', a: '取締役の解任、監査人の解任、退任する監査人以外の人を選ぶ' },
    { id: 'B090-3', lesson: 'B090', q: '公開会社だけの義務は（会社の運営）？', a: 'AGM と会社秘書役。逆に書面決議は私会社だけ' },
    { id: 'B090-4', lesson: 'B090', q: '書面の普通決議の最低賛成票（全800,000票）は？', a: '400,001票（全議決権の50%を超える）' },
    { id: 'B090-5', lesson: 'B090', q: '監査人が第三者に責任を負いうるのは？', a: '特定の相手が特定の目的で頼ると知り、その人に直接表明したとき' }
  ]
});
