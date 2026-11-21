(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 223,
  part: 9,
  partTitle: '企業・金融犯罪',
  lessons: [
    {
      id: 'B097',
      no: 97,
      title: 'インサイダー取引：誰が何をすると犯罪か',
      goal: '1993年刑事司法法 第5部の内部情報・内部者・取引の場の条件と、取引・勧誘・開示の3つの犯罪を説明し、場面から誰がどの犯罪に当たるかを判断できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F1(a)'],
      slides: [
        {
          title: '先に答えを知っている人とのじゃんけん',
          paras: ['フリマで古い絵を出したら、鑑定士から内々に「本物の名画だ」と聞いた人が、何も言わずに安く買っていった。売った人は、知らないまま大損をする。', '株の市場も同じ。会社の中の人だけが知る未公表のニュースで売り買いすると、相手は勝ち目のない勝負をさせられる。これを犯罪にしたのがインサイダー取引（insider dealing）。']
        },
        {
          title: '全体像: 条件と3つの犯罪',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="内部情報を内部者として持つ個人が、取引・勧誘・開示をすると犯罪になる。取引は規制市場かプロの仲介者を通す場合に限る" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">インサイダー取引の条件（CJA 1993）</text><rect x="20" y="48" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" fill="var(--ink)">① 内部情報（inside information）</text><rect x="20" y="102" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="130" fill="var(--ink)">② それを内部者として持つ（insider）</text><rect x="20" y="156" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="184" fill="var(--ink)">③ 取引なら: 規制市場かプロの仲介者</text><line x1="220" y1="204" x2="220" y2="232" stroke="var(--ink)" stroke-width="1.5"/><path d="M214 232 L220 240 L226 232 Z" fill="var(--ink)"/><rect x="20" y="244" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="274" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">3つの犯罪: 取引・勧誘・開示</text><text x="220" y="318" text-anchor="middle" font-size="14" fill="var(--quiet)">犯罪になるのは個人（individual）だけ</text></svg>`,
          caption: 'K3 Global は国を指定しないが、このコースは英国の1993年刑事司法法（Criminal Justice Act 1993）第5部をモデルに教える。'
        },
        {
          title: '① 内部情報（s56）の4つの条件',
          numbered: ['特定の証券、または特定の発行会社に関する情報。証券全般・会社全般の情報ではない（例: 金利が上がりそう、は当たらない）', '具体的または正確（specific or precise）。ただのうわさや「調子が悪いらしい」程度ではない', '公表されていない（not made public）', '公表されれば、証券の価格に重大な影響（significant effect on price）を与えそう'],
          after: '影響を受ける証券（price-affected securities）は自社の株とは限らない。買収の相手先の株や社債、オプションなども含む。'
        },
        {
          title: '「公表された」とは（s58）',
          list: ['規制市場のルールに従って発表された', '会社登記所の記録など、誰でも見られる記録に載っている', '取引しそうな人が、すぐに手に入れられる', '公表された情報から導ける'],
          after: '次の場合も公表されたと扱われうる: 調べる努力や専門知識が要る、一部の人にだけ伝えた、見ればわかる（観察）だけ、有料でしか手に入らない、英国外でだけ公表された。',
          note: { kind: 'tip', text: '公開の資料を自分で分析して「この会社は伸びる」と判断して買うのは、内部情報ではない。努力と専門知識で得た判断は守られる。' }
        },
        {
          title: '② 内部者（s57）: 情報の出どころ',
          paras: ['内部者とは、それが内部情報だと知っていて、かつ内部の情報源（inside source）から得たと知っている人。情報源は次の3つ。'],
          list: ['① 証券の発行会社の取締役・従業員・株主であることから得た', '② 仕事・役職・職業によって情報に接した（その会社の人でなくてよい。例: 監査人、顧問の弁護士、銀行員、印刷会社の社員）', '③ 直接・間接の情報源が、① か ② の人（情報を聞いた家族や友人。tippee と呼ぶ）'],
          after: '①② を一次的な内部者、③ を二次的な内部者と呼ぶことがある。どれも同じ犯罪の対象になる。'
        },
        {
          title: '3つの犯罪（s52）と取引の場',
          list: ['取引（dealing）: 影響を受ける証券を買う・売る。自分のためでも代理でも、他人に買わせる・売らせる（procure）ことも含む（s55）', '勧誘（encouraging）: 他人に取引を勧める。その取引が条件の場で行われると知っているか、そう信じる合理的な理由がある。相手が実際に取引しなくても成立する。理由を話す必要もない', '開示（disclosing）: 仕事・役職・職業の正当な遂行以外で、内部情報を他人に伝える。相手が取引しなくても成立する'],
          after: '取引の場の条件（s52(3)）: 規制市場（regulated market）で取引する、またはプロの仲介者（professional intermediary。証券会社など）に頼る・自分がそうである。友人同士で直接売り買いする場合は、この犯罪に当たらない。開示の犯罪には、この場の条件はない。'
        },
        {
          title: '例題: 誰がどの犯罪か',
          example: {
            problem: '田中は Alpha plc の財務担当取締役。Alpha が来月、上場会社 Beta plc に今の株価より高い値段で買収提案をすると知った（未公表）。田中は夕食で弟の健に話した。健は兄が取締役で、未公表の話だと知っている。健は証券会社を通して Beta の株を買い、友人の美香に「理由は言えないが Beta 株を買うといい」と勧めた。美香は買わなかった。',
            steps: ['情報: 特定の会社（Beta）、具体的、未公表、公表されれば Beta の株価は大きく上がる → 内部情報。Beta 株は影響を受ける証券（自社株でなくてよい）', '田中: 取締役として知った → 内部者 ①。仕事の正当な遂行ではなく弟に話した → 開示の犯罪', '健: 情報源が田中で、それを知っている → 内部者 ③。証券会社（プロの仲介者）を通して買った → 取引の犯罪', '健が美香に勧めた → 勧誘の犯罪。美香が買わなくても成立する', '美香: 何も取引せず、内部情報も知らない → 犯罪なし'],
            answer: '田中は開示、健は取引と勧誘。美香は犯罪なし（抗弁は次のレッスン）'
          }
        },
        {
          title: 'なぜ？ 取引しなくても犯罪にする理由',
          paras: ['市場は、みんなが同じ公表された情報で勝負する前提で動いている。一部の人が抜け駆けできるとわかれば、普通の投資家は市場から離れ、会社はお金を集めにくくなる。', '情報は一度漏れると止められない。だから、漏らす（開示）・勧める（勧誘）という手前の段階で止める。'],
          note: { kind: 'warn', text: 'よくある間違い: 「自社株でなければ大丈夫」→ 買収の相手先の株も対象。「実際に取引しないと犯罪にならない」→ 勧誘と開示は取引がなくても成立。「会社もこの犯罪で処罰される」→ CJA の犯罪は個人だけ。「家族から聞いただけなら関係ない」と考えるのも誤り。情報を受けた人も内部者になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['内部情報は4条件: 特定の証券・会社、具体的、未公表、価格に重大な影響', '内部者は知っていて内部の情報源から得た個人。取締役・従業員・株主、仕事で接した人、その人から聞いた人', '犯罪は取引・勧誘・開示の3つ。取引は規制市場かプロの仲介者を通す場合。勧誘と開示は取引がなくても成立']
        },
        {
          title: '英単語',
          words: [
            ['insider dealing', 'インサイダー ディーリング', 'インサイダー取引'],
            ['inside information', 'インサイド インフォメーション', '内部情報'],
            ['price-affected securities', 'プライス アフェクテッド セキュリティーズ', '情報で価格が影響を受ける証券'],
            ['made public', 'メイド パブリック', '公表された'],
            ['inside source', 'インサイド ソース', '内部の情報源'],
            ['encouraging', 'エンカレッジング', '（取引の）勧誘'],
            ['professional intermediary', 'プロフェッショナル インターミディアリー', 'プロの仲介者（証券会社など）']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Criminal Justice Act 1993, which of the following is NOT a requirement for information to be inside information?', choices: ['It relates to particular securities or to a particular issuer of securities', 'It is specific or precise', 'It was obtained from a director of the company whose securities are affected', 'If it were made public, it would be likely to have a significant effect on the price of securities'], answer: 2, explain: '内部情報の4条件は、特定の証券・会社、具体的、未公表、価格に重大な影響。誰から得たかは「内部者」の条件（s57）で、情報の条件ではない。従業員や監査人から得た情報も内部情報になりうる。' },
        { q: 'Carol works for a firm of accountants advising Y plc on a takeover bid. She learns the details of the bid before it is announced. Which of the following is correct?', choices: ['Carol cannot be an insider because she is not a director or employee of Y plc', 'Carol is an insider because she has access to the information by virtue of her employment', 'Carol is an insider only if she also holds shares in Y plc', 'Carol is an insider only if she deals on her own account'], answer: 1, explain: 's57(2)(a)(ii): 仕事・役職・職業によって情報に接した人は、その会社の人でなくても内部者。顧問の会計士、弁護士、銀行員などが当たる。株主であることは条件ではない。他人に勧めたり話したりしても犯罪になりうる。' },
        { q: 'Ann, a director of X plc, tells her brother at dinner that X plc is about to announce a large loss. Her brother does not deal in any shares. Which offence may Ann have committed?', choices: ['Insider dealing by dealing in securities', 'Market manipulation', 'Insider dealing by disclosing inside information', 'No offence, because no dealing took place'], answer: 2, explain: '仕事の正当な遂行以外で内部情報を伝えたので、開示の犯罪になりうる。開示の犯罪は、相手が取引しなくても成立する。ただし「誰かが取引するとは予想しなかった」という抗弁がありうる（次のレッスン）。' },
        { q: '上場会社の取締役が、未公表の好決算を知ったまま、証券会社を通さず、友人と直接会って自社株を売り買いした。1993年刑事司法法のインサイダー取引の犯罪に当たる？', choices: ['当たる。内部者が内部情報を持って取引したから', '当たる。上場会社の株は、どこで売り買いしても規制市場の取引になるから', '当たらない。規制市場でもプロの仲介者を通した取引でもないから', '当たらない。取締役は自社株を売り買いしてよいから'], answer: 2, explain: '取引の犯罪には、規制市場での取引かプロの仲介者を通すことが必要（s52(3)）。友人同士の直接の売買は外れる。ただし、市場の濫用（UK MAR）の民事の制度は対象にしうる（B099）。' },
        { q: 'A 社の社員が、A 社が近く B 社を高値で買収すると知り、B 社の株を証券会社で買った。正しいのはどれ？', choices: ['犯罪になりうる。影響を受ける証券は自社株に限らない', '犯罪にならない。B 社の内部者ではないから', '犯罪にならない。自分の会社の株ではないから', '犯罪になるのは A 社の株を買った場合だけ'], answer: 0, explain: '買収の情報は、相手の B 社の株価に重大な影響を与える。B 社株は影響を受ける証券。社員は A 社の従業員として情報を得たので内部者。自社株でないことは関係ない。' },
        { q: '1993年刑事司法法のインサイダー取引の犯罪を犯しうるのは誰？', choices: ['個人と会社の両方', '個人だけ', '会社だけ', '上場会社の取締役だけ'], answer: 1, explain: 's52 は「個人（an individual）」と定める。会社の行為は、市場の濫用の民事の制度（B099）で扱う。取締役だけでなく、従業員、顧問、情報を聞いた家族なども対象。' }
      ]
    },
    {
      id: 'B098',
      no: 98,
      title: 'インサイダー取引の抗弁と罰則',
      goal: '取引・勧誘・開示それぞれの一般的な抗弁と特別な抗弁を説明し、場面から抗弁が使えるかを判断でき、罰則の上限を答えられるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F1(a)'],
      slides: [
        {
          title: '前から決めていた売却',
          paras: ['家を買う頭金にするため、3か月前から「来週、持ち株を売る」と決めていた。売る前日、たまたま会社の悪いニュースを知ってしまった。予定どおり売ったら犯罪？', '内部情報を持っていても、それを使ったとは言えない取引がある。法律はそういう場合のために抗弁（defence）を用意している。']
        },
        {
          title: '一般的な抗弁（s53）',
          table: { caption: '本人が示す（he shows）必要がある', head: ['犯罪', '抗弁'], rows: [['取引・勧誘', '(a) 情報による利益を予想していなかった'], ['取引・勧誘', '(b) 情報が十分に開示され、相手が不利にならないと合理的に信じた'], ['取引・勧誘', '(c) 情報がなくても同じことをした'], ['開示', '(a) 伝えたことで誰かが取引するとは予想しなかった'], ['開示', '(b) 取引は予想したが、情報による利益は予想しなかった']] },
          after: '抗弁は、被告人（本人）が示す。検察が「抗弁がない」ことを証明するのではない。'
        },
        {
          title: '抗弁のポイント',
          list: ['利益には、損を避けること（avoidance of a loss）も含む（s53(6)）。悪いニュースの前に売って損を避けたのは、利益を得たのと同じ', '判断するのは取引した時点の予想。結果として損をしたかどうかではない', '(b) は、取引の相手も同じ情報を持っていたような場面。例: 相手方もその情報を知っている会社どうしの取引', '(c) は、情報と関係なく決めていた取引。例: 前から決めていた売却、急な支払いのためにどうしても売る必要があった'],
          note: { kind: 'tip', text: '抗弁の3つは「利益を狙っていない」「相手も知っていた」「情報がなくてもやった」と覚える。開示の抗弁は「取引を予想しなかった」「利益を予想しなかった」の2つ。' }
        },
        {
          title: '特別な抗弁（Schedule 1）',
          list: ['マーケットメイカー（market maker）: 証券の売り買いを常に引き受ける業者が、その業務として誠実に（in good faith）取引した', '市場の情報（market information）: 取引をしようとしていること自体の情報など。例: 買収を計画する会社の担当者が、買収を進めるために相手の株を買い集める（知っているのは自分たちの買収計画だけ）', '価格の安定化（price stabilisation）: 新しい証券の発行のときに、ルールに従って価格を安定させる取引'],
          after: 'どれも、市場が普通に動くために必要な取引を守るためのもの。'
        },
        {
          title: '例題: 抗弁は使えるか',
          example: {
            problem: '3人とも、未公表の内部情報を知っていた。(a) 佐藤は、内部情報を知る前に決めていた子どもの学費の支払いのため、予定どおり株を売った。(b) 鈴木はマーケットメイカーで、いつもの業務として誠実にその株の売買を続けた。(c) 高橋は、悪い決算の発表前に株を売り、「利益は出ていない。損を避けただけ」と言っている。',
            steps: ['(a) 情報と関係なく前から決めていた → 情報がなくても同じことをした（s53(1)(c)）。抗弁が使える', '(b) マーケットメイカーとして誠実に業務をした → 特別な抗弁（Schedule 1）が使える', '(c) 損を避けることも利益に含む（s53(6)）→ 利益を予想しなかったとは言えない', '(c) 情報がなくても売ったと示せる事情もない → 抗弁なし'],
            answer: '佐藤と鈴木は抗弁あり。高橋は抗弁なし'
          }
        },
        {
          title: '罰則と民事上の効果',
          table: { caption: '1993年刑事司法法 s61（イングランド）', head: ['手続き', '上限'], rows: [['略式（治安判事裁判所）', '6か月の拘禁、または上限までの罰金、または両方'], ['正式起訴（刑事法院）', '10年の拘禁、または上限のない罰金、または両方']] },
          after: '正式起訴の10年は2021年11月1日から（2021年金融サービス法。以前は7年）。古い教材の「7年」に注意。また、インサイダー取引だけを理由に契約が無効や執行不能になることはない（s63）。売買そのものはそのまま有効。'
        },
        {
          title: 'なぜ？ 抗弁を本人に示させる',
          paras: ['取引した理由は本人の頭の中にある。検察が「利益を狙っていなかったわけではない」と外から証明するのは難しい。だから、内部者が内部情報を持って取引した事実がそろえば犯罪とし、理由の説明は本人にさせる。', '一方で、情報を持つ人の取引をすべて禁じると、役員は株を売れず、市場の業者も動けない。抗弁は、情報を使っていない取引を逃がすための出口。'],
          note: { kind: 'warn', text: 'よくある間違い: 「結果的に損をしたから無罪」→ 見るのは取引の時点の予想。「売って損を避けただけだから利益はない」→ 損を避けることも利益。「インサイダー取引の売買契約は無効」→ 無効にならない（s63）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取引・勧誘の抗弁は3つ: 利益を予想しなかった、十分に開示されたと合理的に信じた、情報がなくても同じことをした。損を避けるのも利益', '開示の抗弁は2つ。特別な抗弁はマーケットメイカー・市場の情報・価格の安定化', '罰則: 正式起訴で最長10年の拘禁と上限のない罰金。略式は6か月。契約は無効にならない']
        },
        {
          title: '英単語',
          words: [
            ['defence', 'ディフェンス', '抗弁'],
            ['avoidance of a loss', 'アヴォイダンス', '損を避けること（利益に含む）'],
            ['market maker', 'マーケット メイカー', '売り買いを常に引き受ける業者'],
            ['price stabilisation', 'スタビライゼーション', '価格の安定化'],
            ['summary conviction', 'サマリー コンヴィクション', '略式手続きでの有罪'],
            ['conviction on indictment', 'インダイトメント', '正式起訴での有罪']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is a general defence to the offence of insider dealing by dealing in securities?', choices: ['The individual made a loss on the dealing', 'The individual would have done what he did even if he had not had the information', 'The individual dealt through a professional intermediary', 'The individual did not know that insider dealing was a criminal offence'], answer: 1, explain: 's53(1)(c)。結果の損は関係ない（見るのは取引の時点の予想）。プロの仲介者を通すことは犯罪になる条件の1つで、抗弁ではない。法律を知らなかったことは抗弁にならない。' },
        { q: 'What is the maximum term of imprisonment, in years, for insider dealing on conviction on indictment under the Criminal Justice Act 1993?', type: 'number', answer: 10, unit: '年', explain: 's61(1)(b)。2021年11月1日から10年（以前は7年）。罰金は上限なし。略式手続きでは6か月の拘禁か上限までの罰金。' },
        { q: 'Dan, a director of Z plc, sold his shares in Z plc one week before Z plc announced a large fall in profits. He knew about the fall when he sold. Which of the following statements is correct?', choices: ['Dan has a defence because he made no profit and only avoided a loss', 'Dan has a defence because the information concerned his own company', 'For the purposes of the defences, avoiding a loss counts as making a profit', 'Dan has a defence because selling shares is not dealing'], answer: 2, explain: 's53(6): 利益には損を避けることも含む。だから「利益は予想しなかった」の抗弁は使えない。自社の情報であることは関係ない。売ることも取引（dealing）に当たる（s55）。' },
        { q: '証券の売り買いを常に引き受ける業者が、内部情報を知っていたが、いつもの業務として誠実に取引した。使える可能性のある抗弁は？', choices: ['特別な抗弁（マーケットメイカー）', '開示の一般的な抗弁', '抗弁はない。内部情報を知っていたから', '価格の安定化の抗弁'], answer: 0, explain: 'Schedule 1 の特別な抗弁。業者が市場の値付けを止めると、市場が動かなくなるため。価格の安定化は、新しい証券の発行のときの別の抗弁。' },
        { q: '取締役が同僚に内部情報を話した。話したとき、同僚が株を取引するとはまったく予想していなかった。どうなる？', choices: ['抗弁はない。開示した時点で必ず犯罪になる', '同僚が実際に取引しなかった場合だけ抗弁がある', '開示の抗弁で、取引による利益を予想しなかったことを検察が証明する必要がある', '開示の抗弁（誰かが取引するとは予想しなかった）を本人が示せば、犯罪にならない'], answer: 3, explain: 's53(3)(a)。抗弁は本人が示す（he shows）。検察が抗弁のないことを証明するのではない。同僚が実際に取引したかどうかではなく、話した時点の予想で判断する。' },
        { q: 'インサイダー取引の犯罪に当たる売買をした。その売買契約の効力は？', choices: ['無効になる', '相手方が取り消せる', '無効にも執行不能にもならない', '裁判所の判断で無効になる'], answer: 2, explain: 's63: インサイダー取引の規定に反したことだけを理由に、契約は無効・執行不能にならない。市場の取引をあとから巻き戻すと、無関係な人まで混乱するため。罰は刑事罰で与える。' }
      ]
    },
    {
      id: 'B099',
      no: 99,
      title: '市場の濫用（market abuse）',
      goal: 'インサイダー取引の刑事罰とは別の、市場の濫用の民事・規制上の制度（UK MAR）の3つの行為と FCA の制裁を説明し、場面から当てはまる行為を判断できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F1(b)'],
      slides: [
        {
          title: '警察を呼ばなくても審判が止める',
          paras: ['サッカーの反則は、ほとんどが警察沙汰にはならない。それでも審判がその場でカードを出し、試合の公平を守る。', '株の市場も同じ。インサイダー取引の刑事罰は、裁判で重い証明が要る。そこで英国には、規制当局の FCA（金融行為監督機構、Financial Conduct Authority）が制裁金を科す、民事・規制上の制度もある。これが市場の濫用（market abuse）。']
        },
        {
          title: '2本立ての規制',
          table: { caption: '同じ行為が両方の対象になりうる', head: ['項目', '刑事（CJA 1993 など）', '市場の濫用（UK MAR）'], rows: [['対象', '個人だけ', '個人も会社も'], ['証明の基準', '合理的な疑いを超える', '蓋然性の優越（より確からしい）'], ['主な結果', '拘禁・罰金', '上限のない制裁金・公表'], ['決める人', '刑事裁判所', 'FCA（不服は審判所へ）']] },
          after: 'UK MAR は、EU の市場濫用規則（Market Abuse Regulation）を英国法に引き継いだもの。FCA は2000年金融サービス・市場法（FSMA）s123 で制裁金を科す。'
        },
        {
          title: '市場の濫用になる3つの行為',
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="市場の濫用は、インサイダー取引、内部情報の不正な開示、相場操縦の3つ" font-size="15"><rect x="20" y="20" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="50" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">市場の濫用（market abuse）</text><line x1="82" y1="68" x2="82" y2="98" stroke="var(--ink)" stroke-width="1.5"/><line x1="220" y1="68" x2="220" y2="98" stroke="var(--ink)" stroke-width="1.5"/><line x1="358" y1="68" x2="358" y2="98" stroke="var(--ink)" stroke-width="1.5"/><rect x="20" y="98" width="124" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="82" y="134" text-anchor="middle" font-size="14" fill="var(--ink)">インサイダー</text><text x="82" y="156" text-anchor="middle" font-size="14" fill="var(--ink)">取引</text><text x="82" y="180" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 8, 14</text><rect x="158" y="98" width="124" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="134" text-anchor="middle" font-size="14" fill="var(--ink)">内部情報の</text><text x="220" y="156" text-anchor="middle" font-size="14" fill="var(--ink)">不正な開示</text><text x="220" y="180" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 10, 14</text><rect x="296" y="98" width="124" height="96" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="358" y="134" text-anchor="middle" font-size="14" fill="var(--ink)">相場操縦</text><text x="358" y="156" text-anchor="middle" font-size="14" fill="var(--ink)">（操作）</text><text x="358" y="180" text-anchor="middle" font-size="12.5" fill="var(--quiet)">Art 12, 15</text><text x="220" y="226" text-anchor="middle" font-size="14" fill="var(--quiet)">FCA は s123 FSMA で制裁金・公表</text></svg>`,
          caption: 'インサイダー取引には、内部情報で注文を取り消す・変えること、他人に勧める・させることも含む。不正な開示は、仕事・職業・職務の通常の遂行以外で内部情報を伝えること。'
        },
        {
          title: '相場操縦（market manipulation）の中身',
          list: ['需要・供給・価格について、誤った・誤解を招くシグナルを出す取引や注文。例: 自分で売って自分で買う見せかけの売買（wash trade）', '価格を異常・人為的な水準に固定する取引（この2つは、正当な理由があり、認められた市場慣行に従う場合は除く）', '架空の仕組みやだましを使う取引', 'インターネットや報道で、誤った・誤解を招く情報やうわさを広める。偽りだと知っていた、または知るべきだった場合', '指標（benchmark）に偽りの情報やデータを出す'],
          after: '株価をあおって高値で売り抜ける行為（pump and dump）は、典型的な相場操縦。'
        },
        {
          title: '規制の網の広さと会社の義務',
          list: ['内部情報（Art 7）: 正確な性質で、未公表で、発行会社や金融商品に直接・間接に関係し、公表されれば価格に重大な影響を与えそうな情報', '刑事と違い、取引の場所は問わない。規制市場に上場した金融商品に関する行為なら、市場の外の取引も対象', '内部情報だと知るべきだった（ought to know）人も対象になる'],
          after: '発行会社の義務: 内部情報をできるだけ早く公表する（Art 17）。内部情報を知る人の一覧（insider list）を作る（Art 18）。経営の責任者（PDMR）は自社株の取引を届け出て、中間・年次の報告の公表前30日間（closed period）は原則取引できない（Art 19）。'
        },
        {
          title: '例題: どの行為に当たるか',
          example: {
            problem: '次の行為は市場の濫用のどれに当たるか。(a) トレーダーが、上場会社に買収提案が来るといううそを SNS に流し、上がったところで持ち株を売った。(b) 投資会社が、内部情報を知って、すでに出していた売り注文を取り消した。(c) ある人が、自分の2つの口座の間で同じ株を何度も売り買いし、取引が活発に見えるようにした。',
            steps: ['(a) うその情報を広めて価格をゆがめた → 相場操縦（情報の流布）。偽りだと知っていた', '(b) 内部情報を使って注文を取り消した → インサイダー取引。会社（法人）も対象になる', '(c) 持ち主が変わらない見せかけの売買で、需要について誤ったシグナルを出した → 相場操縦（wash trade）', 'どれも FCA が制裁金を科しうる。(a)(c) は2012年金融サービス法の刑事罰の対象にもなりうる'],
            answer: '(a) 相場操縦、(b) インサイダー取引、(c) 相場操縦'
          }
        },
        {
          title: 'FCA の制裁と刑事罰',
          list: ['制裁金（penalty）: 金額の上限なし。FCA が適切と考える額（s123 FSMA）', '公表（public censure）: 制裁金の代わりに、違反を公に発表する', 'ほかに、裁判所の差止め（injunction）や、得た利益・与えた損の回復（restitution）、金融業務からの排除もありうる'],
          after: '相場操縦には刑事罰もある。2012年金融サービス法の、誤解を招く陳述（s89）と誤解を招く印象（s90）。正式起訴で最長10年の拘禁。'
        },
        {
          title: 'なぜ？ 民事の制度も置く理由',
          paras: ['刑事のインサイダー取引は、合理的な疑いを超える証明が必要で、対象は個人だけ、取引の場も限られる。悪質でも有罪にできない例が多かった。', '民事の制度なら、証明は「より確からしい」でよく、会社も対象にでき、FCA が自分で制裁できる。日本の金融商品取引法の課徴金（行政の制裁）に近い発想。'],
          note: { kind: 'warn', text: 'よくある間違い: 「市場の濫用＝インサイダー取引」→ 不正な開示と相場操縦も含む3つ。「民事だから軽い」→ 制裁金に上限はない。「会社は処罰されない」→ 市場の濫用は会社も対象。刑事の CJA と混同しない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['市場の濫用（UK MAR）は3つ: インサイダー取引、内部情報の不正な開示、相場操縦', '刑事との違い: 会社も対象、証明は蓋然性の優越、取引の場を問わない、FCA が制裁', 'FCA の制裁は上限のない制裁金か公表。相場操縦の刑事罰は2012年金融サービス法 s89・s90（最長10年）']
        },
        {
          title: '英単語',
          words: [
            ['market abuse', 'マーケット アビューズ', '市場の濫用'],
            ['market manipulation', 'マニピュレーション', '相場操縦'],
            ['unlawful disclosure of inside information', 'アンローフル ディスクロージャー', '内部情報の不正な開示'],
            ['Financial Conduct Authority (FCA)', 'エフシーエー', '金融行為監督機構（英国の規制当局）'],
            ['public censure', 'パブリック センシャー', '違反の公表'],
            ['balance of probabilities', 'プロバビリティーズ', '蓋然性の優越（民事の証明の基準）'],
            ['misleading impression', 'ミスリーディング インプレッション', '誤解を招く印象']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a form of market abuse under the Market Abuse Regulation?', choices: ['Insider dealing', 'Unlawful disclosure of inside information', 'Market manipulation', 'Wrongful trading by the directors of an insolvent company'], answer: 3, explain: '市場の濫用は3つ: インサイダー取引、内部情報の不正な開示、相場操縦。不当取引（wrongful trading）は倒産した会社の取締役の責任で、別の制度（この部の後のレッスン）。' },
        { q: 'Which of the following statements about the civil market abuse regime is correct, compared with the criminal offence of insider dealing?', choices: ['It applies only to individuals and must be proved beyond reasonable doubt', 'It can apply to companies as well as individuals and is decided on the balance of probabilities', 'It allows the FCA itself to impose imprisonment of up to ten years', 'It applies only to dealings on a regulated market or through a professional intermediary'], answer: 1, explain: '民事の制度は会社も対象で、証明は蓋然性の優越。拘禁は刑事裁判所だけが科せる。FCA の制裁は制裁金と公表。取引の場の制限（規制市場・プロの仲介者）は刑事の CJA の条件。' },
        { q: 'A trader posts false rumours on social media that a listed company is about to receive a takeover bid, and then sells his own shares in the company at the higher price. Which form of market abuse is this?', choices: ['Market manipulation', 'Insider dealing', 'Unlawful disclosure of inside information', 'None, because the information was false and so cannot be inside information'], answer: 0, explain: '誤った情報やうわさを広めて価格に誤ったシグナルを出すのは相場操縦（Art 12）。うその情報は内部情報ではないので、インサイダー取引や不正な開示ではない。だから「該当なし」ではなく相場操縦になる。' },
        { q: 'FCA が市場の濫用をした人に対してできることは？', choices: ['最長10年の拘禁を自分で命じる', '上限のない制裁金を科すか、制裁金の代わりに違反を公表する', '£500,000 を上限とする制裁金を科す', '取引の契約を無効にする'], answer: 1, explain: 's123 FSMA: 制裁金は FCA が適切と考える額で、法律上の上限はない。代わりに公表（public censure）もできる。拘禁は刑事裁判所だけが科せる。' },
        { q: 'ある人が、自分の2つの口座の間で同じ株を何度も売り買いし、取引が活発に見えるようにした。当たるものは？', choices: ['インサイダー取引', '内部情報の不正な開示', '相場操縦', 'どれにも当たらない。持ち主は変わっていないから'], answer: 2, explain: '見せかけの売買（wash trade）は、需要や取引の量について誤ったシグナルを出すので相場操縦。持ち主が変わらないことこそが、見せかけの証拠になる。内部情報は使っていない。' },
        { q: '上場会社の経営の責任者（PDMR）が自社株を原則取引できない期間（closed period）は？', choices: ['中間・年次の報告を公表する前の30日間', '決算日の後の14日間', '株主総会の前の21日間', '内部情報を知ってから1年間'], answer: 0, explain: 'UK MAR Art 19 の closed period は、中間・年次の報告の公表前30日間。内部情報の早期公表（Art 17）、内部者の一覧（Art 18）とあわせて、市場の濫用を防ぐ会社側の仕組み。' }
      ]
    }
  ],
  cards: [
    { id: 'B097-1', lesson: 'B097', q: '内部情報（inside information）の4つの条件は？', a: '特定の証券・会社に関する、具体的・正確、未公表、公表されれば価格に重大な影響' },
    { id: 'B097-2', lesson: 'B097', q: '内部の情報源（inside source）の3つは？', a: '発行会社の取締役・従業員・株主として、仕事・職業で接して、その人たちから聞いて' },
    { id: 'B097-3', lesson: 'B097', q: 'インサイダー取引の3つの犯罪は？', a: '取引（dealing）、勧誘（encouraging）、開示（disclosing）' },
    { id: 'B097-4', lesson: 'B097', q: '取引の犯罪になる取引の場の条件（s52(3)）は？', a: '規制市場での取引か、プロの仲介者を通す（自分が仲介者）場合' },
    { id: 'B097-5', lesson: 'B097', q: '勧誘・開示の犯罪は、相手が取引しないと成立しない？', a: 'いいえ。相手が取引しなくても成立する' },
    { id: 'B097-6', lesson: 'B097', q: 'なぜ開示や勧誘も犯罪にする？', a: '情報は漏れたら止められない。抜け駆けを手前の段階で防ぎ、市場の信頼を守るため' },
    { id: 'B098-1', lesson: 'B098', q: '取引・勧誘の一般的な抗弁3つは？', a: '利益を予想しなかった、十分に開示されたと合理的に信じた、情報がなくても同じことをした' },
    { id: 'B098-2', lesson: 'B098', q: '開示の一般的な抗弁2つは？', a: '誰かが取引すると予想しなかった、取引は予想したが利益は予想しなかった' },
    { id: 'B098-3', lesson: 'B098', q: '抗弁の「利益」に、損を避けることは含む？', a: '含む（s53(6)）。悪材料の前に売った場合も利益を得たと扱う' },
    { id: 'B098-4', lesson: 'B098', q: '特別な抗弁（Schedule 1）の3つは？', a: 'マーケットメイカー、市場の情報、価格の安定化' },
    { id: 'B098-5', lesson: 'B098', q: 'インサイダー取引の罰則の上限（正式起訴）は？', a: '10年の拘禁、上限のない罰金、または両方（2021年11月から。以前は7年）' },
    { id: 'B098-6', lesson: 'B098', q: 'インサイダー取引の売買契約は無効になる？', a: 'ならない（s63）。無効にも執行不能にもならない' },
    { id: 'B099-1', lesson: 'B099', q: '市場の濫用（UK MAR）の3つの行為は？', a: 'インサイダー取引、内部情報の不正な開示、相場操縦' },
    { id: 'B099-2', lesson: 'B099', q: '市場の濫用の制度が、刑事のインサイダー取引と違う点は？', a: '会社も対象、蓋然性の優越で判断、取引の場を問わない、FCA が制裁する' },
    { id: 'B099-3', lesson: 'B099', q: 'FCA が市場の濫用に科せる制裁は？', a: '上限のない制裁金か、その代わりの公表（public censure）（s123 FSMA）' },
    { id: 'B099-4', lesson: 'B099', q: 'wash trade や、うそのうわさを広める行為は何に当たる？', a: '相場操縦（market manipulation）' },
    { id: 'B099-5', lesson: 'B099', q: '相場操縦の刑事罰を定める法律と条文は？', a: '2012年金融サービス法 s89（誤解を招く陳述）・s90（誤解を招く印象）。最長10年' },
    { id: 'B099-6', lesson: 'B099', q: 'PDMR の closed period は？', a: '中間・年次の報告を公表する前の30日間（UK MAR Art 19）' }
  ]
});
