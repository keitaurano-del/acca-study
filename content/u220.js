(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 220,
  part: 7,
  partTitle: '会社の運営（取締役・役員・株主総会）',
  lessons: [
    {
      id: 'B081',
      no: 81,
      title: '取締役の7つの義務',
      goal: '2006年会社法 s171〜s177 の7つの一般的義務の中身と判例を説明し、場面からどの義務の違反かと、違反した結果を判断できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(d)'],
      slides: [
        {
          title: '旅行の幹事を任されたら',
          paras: ['友だち10人から旅行の幹事を頼まれ、みんなのお金20万円を預かった。決めた目的に使う。みんなのためになるように選ぶ。誰かの言いなりにならない。ちゃんと注意して手配する。', 'さらに、自分の得とぶつかる場面を避ける。旅行会社からこっそりお礼を受け取らない。自分の店を使うなら先に言う。取締役の7つの義務は、これを法律にしたもの。']
        },
        {
          title: '全体像: 2006年会社法の一般的義務',
          svg: `<svg viewBox="0 0 440 392" role="img" aria-label="取締役の7つの一般的義務 s171からs177、すべて会社に対して負う" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">取締役の7つの一般的義務（CA 2006）</text><rect x="20" y="50" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="73" fill="var(--quiet)">s171</text><text x="90" y="73" fill="var(--ink)">権限の範囲内で、正しい目的で行動</text><rect x="20" y="90" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="113" fill="var(--quiet)">s172</text><text x="90" y="113" fill="var(--ink)">会社の成功を促進する</text><rect x="20" y="130" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="153" fill="var(--quiet)">s173</text><text x="90" y="153" fill="var(--ink)">独立した判断をする</text><rect x="20" y="170" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="193" fill="var(--quiet)">s174</text><text x="90" y="193" fill="var(--ink)">合理的な注意・技能・勤勉</text><rect x="20" y="210" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="233" fill="var(--quiet)">s175</text><text x="90" y="233" fill="var(--ink)">利益相反を避ける</text><rect x="20" y="250" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="273" fill="var(--quiet)">s176</text><text x="90" y="273" fill="var(--ink)">第三者から利益を受け取らない</text><rect x="20" y="290" width="400" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="313" fill="var(--quiet)">s177</text><text x="90" y="313" fill="var(--ink)">取引上の利益を開示する</text><rect x="20" y="338" width="400" height="42" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="365" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">すべて会社に対して負う（s170）</text></svg>`,
          caption: '義務は会社に対するもの。個々の株主に対してではない（Percival v Wright）。だから違反を訴えるのは原則として会社。'
        },
        {
          title: 's171 権限内での行動、s172 会社の成功の促進',
          list: ['s171: 定款（constitution）に従い、権限を与えられた目的のためだけに使う。Howard Smith v Ampol Petroleum: 買収を成立させるため、多数派の持分を薄める目的で新株を発行した。私利がなくても、目的が不当なので違反', 's172: 株主全体の利益のために、会社の成功を促進すると自分が誠実に（in good faith）考える方法で行動する'],
          after: 's172 では、特に次を考慮する: 長期的な結果、従業員の利益、仕入先・顧客との関係、地域社会と環境への影響、高い事業倫理の評判、株主の間の公平。会社が支払不能に近いときは、債権者の利益も考える。'
        },
        {
          title: 's173 独立した判断、s174 注意・技能・勤勉',
          list: ['s173: 自分で判断する。大株主や他人の言いなりにならない。会社が正式に結んだ契約に従う場合や、定款が認める場合は違反ではない', 's174: 合理的な注意・技能・勤勉（reasonable care, skill and diligence）。基準は2つ重ねて使う'],
          formula: '客観: その職務の人に合理的に期待される水準 ＋ 主観: その取締役が実際に持つ水準',
          after: '客観基準が最低ライン。会計士など能力の高い人は、主観基準で上がる。Re D\'Jan of London: 保険の申込書を読まずに署名し、誤りで保険金が出なかった取締役は注意義務違反とされた。'
        },
        {
          title: 's175 利益相反を避ける、s176 第三者からの利益',
          list: ['s175: 会社の利益とぶつかる（ぶつかりうる）状況を避ける。特に、会社の財産・情報・機会を自分のために使うこと。会社がその機会を使えたかどうかは関係ない', 'Regal (Hastings) v Gulliver: 会社が買えなかった子会社株式を取締役が自分で買い、売って利益を得た。誠実でも、利益を会社に返す', 'IDC v Cooley: 会社には出さないと言われた契約を、病気と偽って辞め、自分で受けた。利益を会社に返す', '利益相反は、利害のない取締役が承認できる。私会社は定款が禁じなければ可、公開会社は定款が認める場合だけ', 's176: 取締役であることを理由に、第三者から利益（賄賂、謝礼）を受け取らない。取締役会では承認できない'],
          after: '辞めた後も続く（s170(2)）: s175 は在任中に知った財産・情報・機会を使うことについて、s176 は在任中にしたこと・しなかったことについて。'
        },
        {
          title: 's177 取引上の利益の開示',
          paras: ['会社がこれから結ぶ取引に、取締役が直接・間接の利害を持つとき、その性質と範囲を、会社が取引をする前に他の取締役に開示する。取締役会で述べるか、書面の通知でする。'],
          list: ['開示しなくてよい: 利益相反を生むと合理的に考えられないとき、他の取締役がすでに知っている（知るべき）とき、取締役会が検討した自分の役務契約の条件', 'すでに結んだ取引の利害は、別に s182 で開示する。こちらを怠ると刑事罰（罰金）'],
          note: { kind: 'tip', text: 's177 の開示をしても、次のレッスンの取引（実質的財産取引・貸付など）に必要な株主の承認は省けない。' }
        },
        {
          title: '例題: どの義務の違反か',
          example: {
            problem: '佐藤は Hikari Ltd の取締役。顧客の X 社が Hikari に工事を頼もうとしたが、Hikari とは取引しないと言い、佐藤個人になら頼むと言った。佐藤は取締役会に言わず、自分の会社で工事を受けて £30,000 の利益を得た。どの義務の違反で、どうなる？',
            steps: ['取締役としての立場で知った機会を、自分のために使った → s175（利益相反を避ける）', 'Hikari がその機会を使えなかったことは関係ない（IDC v Cooley、Regal）', '利害のない取締役の承認を受けていない → 違反', '結果: 佐藤は利益 £30,000 を Hikari に返す（account for profits）'],
            answer: 's175 の違反。利益 £30,000 を会社に返す'
          }
        },
        {
          title: '違反した結果（s178）',
          list: ['損害の賠償（会社に生じた損害を埋める）', '得た利益を会社に返す（account for profits）', '会社の財産を返す。会社は取締役と結んだ契約を取り消せる（rescission）', '差止め（injunction）で違反を止める'],
          after: '株主総会の普通決議で、違反を追認（ratification）できる。その取締役と関係者の株主の票は数えない（s239）。誠実かつ合理的に行動した取締役は、裁判所が責任を免除しうる（s1157）。会社が訴えないとき、株主が会社のために訴える派生訴訟（derivative claim）もある。'
        },
        {
          title: 'なぜ？ 厳しいルールにする理由',
          paras: ['取締役は、他人（株主）のお金を預かって経営する。株主は毎日の経営を見張れない。だから、結果的に会社が損をしていなくても、自分の得とぶつかる行動そのものを禁じる。', '会社が使えなかった機会でも利益を返させるのは、「どうせ会社は使えなかった」と取締役が自分で判断できると、抜け道になるから。'],
          note: { kind: 'warn', text: '「会社に損がなければ違反ではない」「誠実なら違反ではない」は誤り。Regal も Cooley も会社に損はなかったが、利益を返した。もう1つ、義務は株主個人ではなく会社に対して負う。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['7つの義務: 権限内（s171）・成功の促進（s172）・独立した判断（s173）・注意（s174）・利益相反の回避（s175）・第三者の利益の禁止（s176）・取引の利益の開示（s177）', '注意義務は客観＋主観の二重基準。利益相反は会社が使えない機会でも違反', '義務は会社に負う。違反なら損害賠償・利益の返還・取消し。追認は普通決議（本人の票は除く）']
        },
        {
          title: '英単語',
          words: [
            ['general duties of directors', '', '取締役の一般的義務'],
            ['promote the success of the company', 'プロモート', '会社の成功を促進する'],
            ['independent judgement', 'インディペンデント ジャッジメント', '独立した判断'],
            ['reasonable care, skill and diligence', 'ディリジェンス', '合理的な注意・技能・勤勉'],
            ['conflict of interest', 'コンフリクト', '利益相反'],
            ['account for profits', 'アカウント', '得た利益を返す'],
            ['ratification', 'ラティフィケイション', '追認']
          ]
        }
      ],
      quiz: [
        { q: 'Under section 174 of the Companies Act 2006, against which standard is a director\'s care, skill and diligence measured?', choices: ['Only the general knowledge, skill and experience that the director actually has', 'The general knowledge, skill and experience reasonably expected of a person carrying out the functions of that director, and the general knowledge, skill and experience that the director actually has', 'Only the general knowledge, skill and experience reasonably expected of an ordinary person', 'The standard of a professional auditor, for every director'], answer: 1, explain: 's174 は客観基準と主観基準を重ねる。主観だけだと、能力の低い人ほど責任が軽くなる。客観だけだと、専門家の高い能力が反映されない。全員を監査人の水準で測るわけではない。' },
        { q: 'A managing director is told by a client that it will not contract with his company but will contract with him personally. He resigns and takes the contract for himself. Which duty has he most likely breached?', choices: ['The duty to exercise independent judgement', 'The duty to act within powers', 'The duty to avoid conflicts of interest', 'No duty, because the company could not have obtained the contract'], answer: 2, explain: 'IDC v Cooley と同じ場面。s175 は会社がその機会を使えたかどうかを問わない。在任中に知った機会なので、辞めた後も義務が続く（s170(2)）。' },
        { q: '取締役会は、会社を買収しようとする者に反対の多数派株主の持分を薄めるために、新株を発行した。取締役は会社のためになると誠実に信じていた。どの義務の違反になりうる？', choices: ['s176（第三者から利益を受け取らない義務）', 's177（取引上の利益を開示する義務）', 'どの義務の違反にもならない。誠実に信じていたから', 's171（権限を与えられた目的のために使う義務）'], answer: 3, explain: 'Howard Smith v Ampol Petroleum。株式の発行の権限は資金を集めるためのもの。持分を操作する目的で使えば、私利がなく誠実でも s171 の違反。' },
        { q: 'A supplier offers a director of a company an expensive holiday because of the contracts he places with it as a director. Which of the following is correct?', choices: ['Accepting it would breach section 176, and the board of directors has no power to authorise it', 'Accepting it is permitted if the other directors authorise it under section 175', 'Accepting it is permitted if he discloses it at the next board meeting', 'Accepting it is permitted because the company suffers no loss'], answer: 0, explain: '取締役としての立場を理由に第三者から受け取る利益は s176。s175 と違い、取締役会の承認で許す仕組みがない。会社に損がなくても違反になる。' },
        { q: '取締役の一般的義務（s171〜s177）は、誰に対して負う？', choices: ['個々の株主', '会社の債権者', '会社', '会社の従業員'], answer: 2, explain: 's170(1)。Percival v Wright でも、取締役は個々の株主に義務を負わないとされた。従業員や債権者の利益は s172 で「考慮する」ものだが、義務の相手ではない。' },
        { q: '会社が、取締役が株を持つ別の会社から物品を買う予定だ。取締役は s177 の開示をいつ、誰にする？', choices: ['取引をした後の年次株主総会で、株主に', '会社が取引をする前に、他の取締役に', '取引をする前に、会社の監査人に', '取引をした後14日以内に、会社登記所に'], answer: 1, explain: 's177 はこれから結ぶ取引の開示で、取引の前に他の取締役にする。取締役会で述べるか、書面で通知する。すでに結んだ取引は s182 で開示する。' }
      ]
    },
    {
      id: 'B082',
      no: 82,
      title: '取締役と会社の取引の規制',
      goal: '長期の役務契約・実質的財産取引・貸付・退任時の支払いに株主の承認が要るかを、金額基準で判定し、承認がないときの結果を説明できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(d)'],
      slides: [
        {
          title: '自分にお金を貸す管理人',
          paras: ['マンション管理組合の理事長が、組合の積立金から自分に100万円を貸し、組合の土地を自分に安く売ったら？ ほかの住民は「先に聞いてほしい」と思う。', '会社でも同じ。取締役が会社と取引すると、会社に不利な条件でも自分で決められてしまう。そこで2006年会社法は、一定の取引に株主の承認を求める。']
        },
        {
          title: '株主の承認が要る4つの取引',
          table: { caption: '2006年会社法 第10部 第4章', head: ['取引', '承認が要る場合'], rows: [['長期の役務契約（s188）', '保証された在任期間が2年を超える'], ['実質的財産取引（s190）', '取締役と会社の間の、実質的な非現金資産の売買'], ['貸付など（s197〜s203）', '取締役への貸付や保証。少額などの例外あり'], ['退任時の支払い（s217）', '£200 を超える支払い。法的な義務の支払いは除く']] },
          after: '承認は株主の決議（ふつうは普通決議）。長期の役務契約は、契約の要点を書いた書面を総会の前15日以上、登記上の事務所で閲覧できるようにする。承認がなければその期間の条項は無効になり、会社はいつでも合理的な予告で契約を終えられる（s189）。'
        },
        {
          title: '実質的財産取引（substantial property transaction）',
          paras: ['取締役（または関係者）が会社から実質的な非現金資産を買う、または会社に売るときは、株主の決議による事前の承認が要る。承認を条件にした契約でもよい。'],
          svg: `<svg viewBox="0 0 440 356" role="img" aria-label="資産が実質的かどうかの判定の流れ" font-size="15"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">実質的な資産か（s191）</text><rect x="20" y="48" width="270" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" fill="var(--ink)">① 価値が £100,000 を超える？</text><line x1="290" y1="70" x2="316" y2="70" stroke="var(--ink)" stroke-width="1.5"/><path d="M316 64 L324 70 L316 76 Z" fill="var(--ink)"/><text x="302" y="60" font-size="14" text-anchor="middle" fill="var(--quiet)">はい</text><rect x="326" y="48" width="94" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="373" y="76" text-anchor="middle" fill="var(--ink)">実質的</text><line x1="155" y1="92" x2="155" y2="112" stroke="var(--ink)" stroke-width="1.5"/><path d="M149 112 L155 120 L161 112 Z" fill="var(--ink)"/><text x="168" y="110" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="120" width="270" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="146" fill="var(--ink)">② 純資産の10%を超え、</text><text x="36" y="170" fill="var(--ink)">かつ £5,000 を超える？</text><line x1="290" y1="152" x2="316" y2="152" stroke="var(--ink)" stroke-width="1.5"/><path d="M316 146 L324 152 L316 158 Z" fill="var(--ink)"/><text x="302" y="142" font-size="14" text-anchor="middle" fill="var(--quiet)">はい</text><rect x="326" y="120" width="94" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="373" y="158" text-anchor="middle" fill="var(--ink)">実質的</text><line x1="155" y1="184" x2="155" y2="204" stroke="var(--ink)" stroke-width="1.5"/><path d="M149 204 L155 212 L161 204 Z" fill="var(--ink)"/><text x="168" y="202" font-size="14" fill="var(--quiet)">いいえ</text><rect x="20" y="212" width="270" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="240" fill="var(--ink)">実質的ではない（承認不要）</text><rect x="20" y="276" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="304" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">実質的 → 株主の決議で事前に承認</text><text x="220" y="344" text-anchor="middle" font-size="14" fill="var(--quiet)">純資産は直近の法定財務諸表の数字</text></svg>`,
          caption: '財務諸表をまだ作っていない会社は、払込請求済みの株式資本（called-up share capital）を使う。価値は取引をする時点で判定する。'
        },
        {
          title: '例題1: 実質的財産取引か',
          example: {
            problem: 'Hikari Ltd の直近の法定財務諸表の純資産は £600,000。次の取引に株主の承認は要るか。(a) 取締役が会社のバン（価値 £40,000）を買う。(b) 取締役が自分の土地（価値 £75,000）を会社に売る。(c) 取締役の妻が会社の機械（価値 £110,000）を買う。',
            steps: ['純資産の10%: £600,000 × 10% ＝ £60,000', '(a) £40,000 は £60,000 以下で、£100,000 以下 → 実質的ではない。承認不要', '(b) £75,000 は £60,000 を超え、£5,000 も超える → 実質的。承認が要る', '(c) 妻は取締役の関係者（connected person）。£110,000 は £100,000 を超える → 実質的。承認が要る'],
            answer: '(a) 不要、(b) 必要、(c) 必要'
          }
        },
        {
          title: '取締役への貸付（loans）',
          list: ['すべての会社: 取締役（親会社の取締役も含む）への貸付と、取締役の借金への保証・担保の提供には、株主の決議が要る（s197）', '公開会社と、公開会社と同じグループの会社（relevant company）は、さらに次にも承認が要る: 準貸付（s198）、信用取引（s201）、関係者への貸付（s200）', '準貸付（quasi-loan）: 取締役の代わりに会社が支払い、後で取締役が返す。例: 会社のカードで取締役の私的な買い物を払う', '信用取引（credit transaction）: 代金の後払いで物品やサービスを取締役に提供する'],
          after: '株主に、取引の性質・金額・目的・会社の負う責任を書いた書面を示してから承認を受ける。'
        },
        {
          title: '承認が要らない主な例外',
          table: { caption: '貸付などの例外（合計額で判定）', head: ['例外', '上限'], rows: [['会社の仕事の費用（出張費など）を賄う（s204）', '£50,000 まで'], ['取締役が訴えられたときの弁護費用（s205）', '上限なし（有罪なら返す）'], ['少額の貸付・準貸付（s207(1)）', '£10,000 まで'], ['少額の信用取引（s207(2)）', '£15,000 まで'], ['通常の事業での、ふつうの条件の信用取引（s207(3)）', '上限なし']] },
          after: '上限は、その取引と、同じ例外で取締役（と関係者）に行ったほかの取引の合計で判定する。'
        },
        {
          title: '例題2: 貸付の合計で判定する',
          example: {
            problem: 'Sora Ltd（私会社。公開会社のグループではない）は、取締役の青木にすでに £6,000 を貸している。青木は私用の車を買うため、さらに £5,000 を借りたい。株主の承認は要るか。承認なしで追加で貸せるのは最大いくら？',
            steps: ['私用の貸付なので、会社の仕事の費用の例外（s204）は使えない', '少額の例外（s207(1)）は合計 £10,000 まで', '合計: £6,000 ＋ £5,000 ＝ £11,000。£10,000 を超える → 承認が要る', '承認なしの上限: £10,000 − £6,000 ＝ £4,000'],
            answer: '承認が要る。承認なしで追加できるのは £4,000 まで'
          }
        },
        {
          title: '承認なしで取引したら',
          list: ['実質的財産取引（s195）・貸付など（s213）: 会社の側から取り消せる（voidable）', 'ただし取り消せない場合: 返還ができない、会社の損が埋め合わされた、事情を知らずに対価を払って権利を得た第三者がいる。実質的財産取引は、株主が合理的な期間内に追認すれば取り消せない（s196）', '取り消すかどうかにかかわらず、その取締役・関係者・取引を承認した取締役は、得た利益を会社に返し、会社の損を連帯して埋める'],
          after: '関係者（connected person）: 取締役の配偶者・同居のパートナー・子・親、取締役が株式の20%以上に関係する会社など。取締役本人でなくても、関係者を通した取引は規制される。'
        },
        {
          title: 'なぜ？ 個別に株主の承認を求める理由',
          paras: ['取締役は会社の側でも交渉相手の側でもある。自分の得になる条件を、自分で決められる。一般的な義務（s175・s177）だけでは、他の取締役どうしで「お互いさま」で承認してしまうおそれがある。', '金額が大きい取引や貸付は、会社の財産が直接流れ出る。だから、本当の持ち主である株主に先に判断させる。少額の例外は、日常の業務を止めないため。'],
          note: { kind: 'warn', text: '基準は「10%か£100,000の小さい方」ではない。10%を超え、かつ£5,000を超える。または£100,000を超える。また、私会社でも取締役への貸付には承認が要る。公開会社のグループでない私会社で承認が要らないのは、準貸付・信用取引・関係者への貸付。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['株主の承認が要る: 2年を超える役務契約・実質的財産取引・貸付・£200を超える退任時の支払い', '実質的: 純資産の10%を超え、かつ£5,000を超える。または£100,000を超える', '貸付の例外は会社の仕事の費用£50,000、少額£10,000（信用取引£15,000）。違反は取消し可、利益の返還と損の補填']
        },
        {
          title: '英単語',
          words: [
            ['substantial property transaction', 'サブスタンシャル', '実質的財産取引'],
            ['non-cash asset', 'ノンキャッシュ アセット', '現金以外の資産'],
            ['quasi-loan', 'クウェイザイ ローン', '準貸付'],
            ['credit transaction', 'クレジット トランザクション', '信用取引（後払いでの提供）'],
            ['connected person', 'コネクティッド パーソン', '取締役の関係者'],
            ['voidable', 'ヴォイダブル', '取り消すことができる'],
            ['payment for loss of office', 'ロス オブ オフィス', '退任時の支払い（退職慰労金など）']
          ]
        }
      ],
      quiz: [
        { q: 'The net assets of Ash Ltd in its most recent statutory accounts are £1,200,000. A director wishes to buy a non-cash asset from Ash Ltd. Above what value (in £) would the asset be a substantial asset, so that members\' approval is required?', type: 'number', answer: 100000, unit: '£', explain: '10%は £120,000。しかし £100,000 を超えれば10%に関係なく実質的（s191(2)(b)）。だから基準は £100,000。£120,000 と答えるのは、£100,000 の基準を忘れる間違い。' },
        { q: '直近の法定財務諸表の純資産が £420,000 の会社がある。取締役が会社に資産を売る。資産の価値がいくらを超えると、株主の承認が要る実質的な資産になる？（£）', type: 'number', answer: 42000, unit: '£', explain: '10%は £42,000。£5,000 を超えており、£100,000 より小さいので、£42,000 を超えれば実質的。' },
        { q: 'A private company which is not associated with a public company makes a loan of £8,000 to one of its directors to buy a personal car. The director has no other loans from the company. Is members\' approval required?', choices: ['Yes, because every loan to a director requires members\' approval', 'No, because private companies may make loans of any amount to directors', 'No, because the loan does not exceed £10,000', 'Yes, because the loan is not for the purposes of the company\'s business'], answer: 2, explain: 's207(1) の少額の例外。ほかの貸付と合わせて £10,000 以下なら承認は要らない。私会社でも £10,000 を超える私用の貸付には承認が要る。' },
        { q: '私会社が取締役にすでに £7,500 を貸している（私用）。株主の承認なしに、同じ取締役に私用でさらに貸せるのは最大いくら？（£）', type: 'number', answer: 2500, unit: '£', explain: '少額の例外は合計 £10,000 まで。£10,000 − £7,500 ＝ £2,500。£10,000 と答えるのは、すでにある貸付を合計に入れ忘れる間違い。' },
        { q: 'A company buys land from one of its directors. The land is a substantial asset, but members\' approval was not obtained. Which of the following correctly states the consequence under the Companies Act 2006?', choices: ['The transaction is automatically void, and the director commits a criminal offence', 'The transaction is valid, because the director disclosed his interest to the board', 'The transaction is voidable at the instance of the director only', 'The transaction is voidable at the instance of the company, and the director is liable to account for any gain and to indemnify the company for any loss'], answer: 3, explain: 's195。自動的に無効ではなく、会社の側から取り消せる。s177 で取締役会に開示しても、株主の承認は省けない（s180）。' },
        { q: '会社が、株主の承認なしに、取締役と「3年間は解任しない」と保証した役務契約を結んだ。この条項はどうなる？', choices: ['有効。取締役会が承認していれば足りる', '無効になり、会社はいつでも合理的な予告で契約を終えられる', '2年分だけ有効になり、残り1年分が無効になる', '契約全体が無効になり、取締役は退任する'], answer: 1, explain: 's188・s189。2年を超える保証期間は株主の承認が要る。承認がなければその条項は無効で、契約には「会社はいつでも合理的な予告で終了できる」という条件があるものとされる。' }
      ]
    },
    {
      id: 'B083',
      no: 83,
      title: '会社秘書役（company secretary）',
      goal: '会社秘書役が必要な会社、公開会社の秘書役の資格、選任の方法、職務と、会社を拘束する権限の範囲を説明できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(e)'],
      slides: [
        {
          title: '部活のマネージャー',
          paras: ['部活では、試合の作戦は監督と部長が決める。名簿を作り、大会に申し込み、ミーティングの連絡をして記録を残すのはマネージャー。', '会社なら、経営を決めるのは取締役。名簿（登録簿）や役所への届出、総会の連絡と議事録を担うのが会社秘書役（company secretary）。']
        },
        {
          title: '誰に必要か',
          table: { caption: '2006年会社法', head: ['会社', '秘書役'], rows: [['私会社（private company）', '置かなくてよい（s270）。定款で置くことにしてもよい'], ['公開会社（public company）', '必ず置く（s271）。資格が必要（s273）']] },
          after: '私会社が秘書役を置かないときも、届出などの仕事はなくならない。取締役か、取締役が認めた人が行う。'
        },
        {
          title: '公開会社の秘書役の資格（s273）',
          paras: ['取締役は、秘書役が必要な知識と経験を持つように、合理的な手段をとる。さらに、次のどれかに当たる人でなければならない。'],
          list: ['選任の直前5年のうち3年以上、公開会社の秘書役だった', '定められた会計・秘書の団体の会員（ACCA、ICAEW、ICAS、CIMA、CIPFA、アイルランド勅許会計士協会、勅許秘書協会）', '英国の法廷弁護士（barrister）や事務弁護士（solicitor）', 'ほかの地位や資格から、職務を果たせると取締役が判断した人']
        },
        {
          title: '選任・解任と登録',
          list: ['選任と解任は取締役（取締役会）が行う。株主総会ではない', '個人だけでなく、会社などの法人も秘書役になれる。共同の秘書役も置ける', '会社は秘書役の登録簿（register of secretaries）を備える（s275）', '選任・退任・登録事項の変更は、14日以内に会社登記所（Registrar of Companies）に届ける（s276）'],
          after: '秘書役は会社の役員（officer）の1人（s1173）。届出などを怠ると、責任のある役員（officer in default）として罰金を受けることがある。'
        },
        {
          title: '主な職務',
          list: ['法定の登録簿（株主名簿、取締役の登録簿など）を管理する', '確認書（confirmation statement）や財務諸表、役員の変更などを登記所に届ける', '取締役会と株主総会の通知を出し、議事録を作って保管する', '株式の譲渡の手続きをする', '取締役に、会社法やガバナンスの手続きを助言する'],
          after: '職務の中身は法律に一覧がない。取締役会が決め、契約で定める。'
        },
        {
          title: '会社を拘束する権限: Panorama 事件',
          example: {
            problem: 'Panorama Developments v Fidelis Furnishing Fabrics（1971）。Fidelis の秘書役は「会社の顧客を空港に迎えに行く」と言って、Panorama からレンタカーを何度も借りた。実際は私用に使った。Fidelis は代金を払う必要があるか？',
            steps: ['秘書役に車を借りる実際の権限はなかった', 'しかし現代の秘書役は「単なる事務員」ではなく、会社の重要な役員', '車を借りる、事務員を雇うなど、会社の事務的な運営の契約には、表見的な権限（apparent authority）がある', 'Panorama はそれを信じて貸した → 会社が拘束される'],
            answer: 'Fidelis は代金を払う。会社は秘書役の私的な流用の損を、秘書役に請求する'
          }
        },
        {
          title: 'なぜ？ 事務的な契約だけ会社を拘束する',
          paras: ['取引先から見れば、秘書役は会社の事務を任された役員。事務の契約のたびに、取締役会の議事録を見せてもらうのは現実的ではない。外から見て当然の範囲は、信じた相手を守る。', '一方、借入れや事業の売却、株式の発行のような経営の判断は取締役の仕事。秘書役がそれをできると信じる理由はふつうない。だから権限は事務的な範囲にとどまる。'],
          note: { kind: 'warn', text: '「秘書役は株主総会で選ぶ」は誤り。取締役が選び、解任する。また「私会社にも秘書役が必須」も誤り（2006年会社法から任意）。公開会社だけが必須で、資格の条件がある。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['私会社は任意、公開会社は必須。公開会社は資格（公開会社で5年中3年、ACCA などの会員、弁護士など）', '選任・解任は取締役。登録簿に載せ、変更は14日以内に登記所へ', '職務は登録簿・届出・総会の事務。事務的な契約には表見的な権限がある（Panorama）']
        },
        {
          title: '英単語',
          words: [
            ['company secretary', 'カンパニー セクレタリー', '会社秘書役'],
            ['register of secretaries', 'レジスター', '秘書役の登録簿'],
            ['Registrar of Companies', 'レジストラー', '会社登記所（登記官）'],
            ['confirmation statement', 'コンファメーション ステートメント', '確認書（毎年の登記事項の確認）'],
            ['apparent authority', 'アパレント オーソリティ', '表見的な権限'],
            ['officer in default', 'オフィサー イン ディフォルト', '義務違反に責任のある役員']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements regarding company secretaries under the Companies Act 2006 is correct?', choices: ['Every company must have a company secretary with a professional qualification', 'A public company may choose not to have a company secretary', 'The company secretary of a private company must be appointed by the members', 'A private company is not required to have a company secretary'], answer: 3, explain: 's270。私会社は任意。公開会社は必須（s271）で、資格の条件は公開会社だけ（s273）。選任はどちらも取締役。' },
        { q: 'The company secretary of Q Ltd hires cars from a car hire firm in the company\'s name, saying they are to collect the company\'s customers. In fact he uses them for his own purposes. The board did not authorise this. Is Q Ltd liable to pay the car hire firm?', choices: ['No, because a company secretary is merely a clerk with no authority to bind the company', 'Yes, because a company secretary has apparent authority to make contracts connected with the administrative side of the company\'s business', 'No, because the board did not give the secretary express authority', 'Yes, but only if the members ratify the contract by special resolution'], answer: 1, explain: 'Panorama v Fidelis。車を借りるのは事務的な契約なので、表見的な権限で会社が拘束される。「単なる事務員」という古い見方は、この判決で改められた。' },
        { q: 'Which of the following contracts is a company secretary most likely to have apparent authority to make on behalf of the company?', choices: ['Borrowing money from a bank to buy a new factory', 'Selling the company\'s main trading business', 'Ordering office equipment for the company\'s head office', 'Allotting new shares to an outside investor'], answer: 2, explain: '秘書役の表見的な権限は事務的な運営の範囲。借入れ、事業の売却、株式の割当ては経営の判断で、取締役の権限。' },
        { q: '公開会社の秘書役の資格として、s273 に挙げられているのはどれ？', choices: ['選任の直前5年のうち3年以上、公開会社の秘書役だった', '選任の直前5年のうち3年以上、私会社の取締役だった', '会社の株式を5%以上持っている', '株主総会の普通決議で承認された'], answer: 0, explain: 's273(2)。ほかに ACCA などの団体の会員、英国の弁護士、ほかの地位から職務を果たせると取締役が判断した人。株式の保有や総会の承認は資格ではない。' },
        { q: '公開会社の秘書役を選任し、解任するのは誰？', choices: ['株主総会の普通決議', '株主総会の特別決議', '会社登記所', '取締役（取締役会）'], answer: 3, explain: '秘書役は取締役が選び、解任する。登記所には選任・退任を14日以内に届けるだけで、登記所が選ぶわけではない。' }
      ]
    },
    {
      id: 'B084',
      no: 84,
      title: '会計監査人：選任・権利・義務',
      goal: '会計監査人を誰がいつ選任するか、なれる人の条件、監査報告の義務、帳簿の閲覧や総会への出席などの権利を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(f)'],
      slides: [
        {
          title: '管理組合の会計を外の人が確かめる',
          paras: ['マンションの管理組合では、理事会が1年の会計報告を作る。住民は毎日の出入金を見られないので、理事でない人に帳簿と領収書を確かめてもらい、「正しい」と報告してもらう。', '会社ではこれが会計監査人（auditor）。K1 で作った財務諸表を、外の専門家が確かめて株主に報告する。']
        },
        {
          title: '監査が要る会社、要らない会社',
          list: ['原則: 会社の年次の財務諸表は監査を受ける', '免除されうる: 小会社（small company、s477）、休眠会社（dormant company、s480）、一定の子会社', '公開会社は、小会社の基準に当たっても監査の免除を受けられない', '免除される会社でも、株式資本（またはある種類の株式）の10%以上を持つ株主が請求すれば、監査を受ける（s476）']
        },
        {
          title: '誰がいつ選任するか',
          table: { caption: '監査人の選任', head: ['場面', '選ぶ人'], rows: [['最初の監査人', '取締役'], ['途中で欠けた（casual vacancy）', '取締役'], ['私会社の2年目以降', '株主の普通決議。選任期間（28日）内に'], ['公開会社の2年目以降', '株主の普通決議。財務諸表を報告する総会（accounts meeting）で'], ['誰も選ばない', '国務大臣（Secretary of State）が選べる']] },
          after: '私会社の監査人は、決議がなくても自動的に再任されたものとされる（s487）。ただし、取締役が選んだ監査人、定款が毎回の選任を求めるとき、議決権の5%以上を持つ株主が反対の通知をしたとき（s488）などは除く。公開会社の監査人の任期は、選ばれた総会の終わりから次の accounts meeting の終わりまで。'
        },
        {
          title: '例題: 私会社の選任期間',
          example: {
            problem: 'Midori Ltd（私会社）は、前年度の財務諸表を株主に6月10日に送った。法律上の送付の期限はこれより後。株主が新しい監査人を普通決議で選ぶ期間はいつまで？ 何もしなかったら？',
            steps: ['選任期間は、送付の期限か実際に送った日の早い方から始まる28日間（s485(2)）', '早い方は6月10日。6月10日を1日目として数える', '6月10日〜30日で21日。残り7日で7月7日まで', '何もしなければ、今の監査人が自動的に再任されたものとされる（s487）'],
            answer: '6月10日〜7月7日。何もしなければ今の監査人が再任される'
          }
        },
        {
          title: '誰が監査人になれるか',
          list: ['認められた監督団体（recognised supervisory body）の会員で、その規則で資格がある人（s1212）。ACCA や ICAEW など', '独立していること（s1214）: その会社（または関連する会社）の役員や従業員、その人のパートナーや従業員はなれない', '個人だけでなく、監査法人（firm）もなれる'],
          after: '監査報酬（remuneration）は、選んだ人が決める。株主が選んだら普通決議か決議で定めた方法で、取締役が選んだら取締役が決める（s492）。'
        },
        {
          title: '監査人の義務',
          formula: '監査報告: 財務諸表が真実かつ公正な概観（true and fair view）を示しているか',
          list: ['株主（members）に報告する（s495）。適用される会計の枠組み（IFRS など）と会社法に従って作られているかも述べる', '戦略報告書・取締役報告書が財務諸表と合っているかを述べる（s496）', '適切な会計記録があるか、財務諸表が記録と一致するかを調べる。そうでなければ報告書に書く（s498）', '必要な情報と説明を全部得られなかったときも、報告書に書く']
        },
        {
          title: '監査人の権利',
          list: ['いつでも、会社の帳簿・会計記録・証憑（books, accounts and vouchers）を閲覧できる（s499）', '役員・従業員や、英国の子会社などに、必要な情報と説明を求められる', '株主総会の通知を受け、出席し、監査人としての事項について発言できる（s502）', '私会社の書面決議の案も受け取る', '解任されるときや辞任するときの権利もある（次のレッスン）'],
          after: '監査人に、重要な点で誤解を招く説明を、知りながら、または無謀に（recklessly）すると、刑事罰の対象になる（s501）。'
        },
        {
          title: 'なぜ？ 株主が選び、株主に報告する',
          paras: ['会社では、持ち主（株主）と経営する人（取締役）が分かれている。財務諸表を作るのは取締役。自分の成績表を自分で採点させると、甘くなるおそれがある。', 'だから、監査人は株主が選び、株主に報告する。会社の役員や従業員を除くのも、帳簿を見る強い権利を与えるのも、取締役から独立して確かめられるようにするため。取締役が選べるのは、最初の時と途中で欠けた時だけ。'],
          note: { kind: 'warn', text: '「監査人は取締役のために報告する」は誤り。報告先は株主。また、総会に出席して発言できるが、取締役会に出席する権利はない。発言できるのも監査人に関係する事項について。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['最初と欠けた時は取締役、2年目以降は株主の普通決議（私会社は28日の選任期間、自動再任あり。公開会社は accounts meeting）', '監督団体の会員で、独立していること（役員・従業員は不可）', '義務は true and fair を株主に報告。権利は帳簿の閲覧・情報の要求・総会への出席と発言']
        },
        {
          title: '英単語',
          words: [
            ['auditor', 'オーディター', '会計監査人'],
            ['casual vacancy', 'カジュアル ヴェイカンシー', '途中で欠けた地位'],
            ['period for appointing auditors', '', '監査人の選任期間（私会社、28日）'],
            ['deemed reappointment', 'ディームド', '自動的に再任されたとみなすこと'],
            ['recognised supervisory body', 'スーパーヴァイザリー', '認められた監督団体'],
            ['true and fair view', 'トゥルー アンド フェア', '真実かつ公正な概観'],
            ['books, accounts and vouchers', 'ヴァウチャーズ', '帳簿・会計記録・証憑']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a statutory right of a company\'s auditor under the Companies Act 2006?', choices: ['A right of access at all times to the company\'s books, accounts and vouchers', 'A right to require information and explanations from the company\'s officers and employees', 'A right to attend and vote at meetings of the board of directors', 'A right to attend general meetings and be heard on business which concerns the auditor'], answer: 2, explain: '監査人の権利は s499（閲覧と情報の要求）と s502（総会の通知・出席・発言）。取締役会に出席したり、議決したりする権利はない。監査人は経営から独立しているため。' },
        { q: 'The auditor of a private company resigns in the middle of a financial year, creating a casual vacancy. Who may appoint a new auditor to fill the vacancy?', choices: ['The company secretary', 'The directors', 'The Registrar of Companies', 'Only the members, by special resolution'], answer: 1, explain: 's485(3)。途中で欠けた地位は取締役が埋められる（取締役が選ばなければ株主が普通決議で選べる）。特別決議は要らない。登記所や秘書役には選ぶ権限がない。' },
        { q: 'Which of the following persons may NOT be appointed as the auditor of B Ltd?', choices: ['A firm of accountants with no other connection to B Ltd', 'A member of ICAEW who is eligible under its rules and is independent of B Ltd', 'A sole practitioner who audited B Ltd\'s accounts last year', 'An employee of B Ltd who is a member of ACCA and eligible under its rules'], answer: 3, explain: 's1214 の独立性。ACCA の会員で資格があっても、その会社の従業員は監査人になれない。去年も監査した人は、独立していれば続けてよい。' },
        { q: '私会社の2年目以降の監査人の選任期間は、財務諸表の送付の期限か実際に送った日の早い方から何日間？', type: 'number', answer: 28, unit: '日', explain: 's485(2)。この28日の間に株主が普通決議で選ぶ。何もしなければ、今の監査人が自動的に再任されたものとされる（s487）。' },
        { q: '小会社なので監査を免除されている私会社がある。株式資本の何％以上を持つ株主が請求すれば、監査を受けなければならない？', type: 'number', answer: 10, unit: '%', explain: 's476。株式資本の額面（またはある種類の株式）の10%以上を持つ株主が請求すれば、免除は使えない。私会社の自動再任を止める通知の5%と混同しない。' },
        { q: '監査人の報告書は、誰に対して何を報告する？', choices: ['株主に対して、財務諸表が真実かつ公正な概観を示しているか', '取締役会に対して、財務諸表が真実かつ公正な概観を示しているか', '株主に対して、会社に不正が1件もないこと', '会社登記所に対して、会社の税金の計算が正しいか'], answer: 0, explain: 's495(1)。報告先は株主（members）。監査は不正がないことを保証するものではない。税務の計算の証明もしない。' }
      ]
    }
  ],
  cards: [
    { id: 'B081-1', lesson: 'B081', q: '取締役の7つの一般的義務（s171〜s177）は？', a: '権限内・成功の促進・独立した判断・注意・利益相反の回避・第三者の利益の禁止・取引の利益の開示' },
    { id: 'B081-2', lesson: 'B081', q: 's174 の注意義務の基準は？', a: '客観（その職務に期待される水準）と主観（本人が持つ水準）の二重基準' },
    { id: 'B081-3', lesson: 'B081', q: 'Regal (Hastings) v Gulliver の要点は？', a: '会社が使えない機会でも、取締役が得た利益は会社に返す（誠実でも）' },
    { id: 'B081-4', lesson: 'B081', q: 'Howard Smith v Ampol の要点は？', a: '持分を操作する目的の株式発行は、私利がなくても不当な目的で s171 違反' },
    { id: 'B081-5', lesson: 'B081', q: '取締役の義務は誰に対して負う？', a: '会社（s170）。個々の株主ではない（Percival v Wright）' },
    { id: 'B081-6', lesson: 'B081', q: '義務違反の追認（ratification）の方法は？', a: '株主の普通決議。違反した取締役と関係者の票は数えない（s239）' },
    { id: 'B081-7', lesson: 'B081', q: 'なぜ？ 会社に損がなくても利益を返させる', a: '「会社は使えなかった」と取締役が自分で判断できると抜け道になるから' },
    { id: 'B082-1', lesson: 'B082', q: '実質的な資産（s191）の基準は？', a: '純資産の10%を超え、かつ£5,000を超える。または£100,000を超える' },
    { id: 'B082-2', lesson: 'B082', q: '株主の承認が要る長期の役務契約は？', a: '保証された在任期間が2年を超えるもの（s188）' },
    { id: 'B082-3', lesson: 'B082', q: '取締役への貸付の主な例外の上限は？', a: '会社の仕事の費用£50,000、少額の貸付£10,000、少額の信用取引£15,000' },
    { id: 'B082-4', lesson: 'B082', q: '私会社で承認が要らないのは？', a: '準貸付・信用取引・関係者への貸付（公開会社のグループだけ規制）。取締役への貸付は要る' },
    { id: 'B082-5', lesson: 'B082', q: '承認なしの実質的財産取引や貸付の結果は？', a: '会社が取り消せる。取締役は利益を返し、会社の損を埋める' },
    { id: 'B082-6', lesson: 'B082', q: '退任時の支払いに承認が要らない少額の上限は？', a: '£200（法的な義務の支払いも承認不要）' },
    { id: 'B083-1', lesson: 'B083', q: '会社秘書役を必ず置くのはどの会社？', a: '公開会社だけ（s271）。私会社は任意（s270）' },
    { id: 'B083-2', lesson: 'B083', q: '公開会社の秘書役の資格（s273）は？', a: '公開会社で5年中3年以上、ACCA 等の会員、英国の弁護士、取締役が能力ありと判断' },
    { id: 'B083-3', lesson: 'B083', q: '秘書役を選任・解任するのは？', a: '取締役（取締役会）。変更は14日以内に登記所へ届ける' },
    { id: 'B083-4', lesson: 'B083', q: 'Panorama v Fidelis の要点は？', a: '秘書役は事務的な契約に表見的な権限があり、会社を拘束する' },
    { id: 'B083-5', lesson: 'B083', q: '秘書役の主な職務は？', a: '登録簿の管理、登記所への届出、総会の通知と議事録' },
    { id: 'B084-1', lesson: 'B084', q: '監査人を取締役が選べるのはいつ？', a: '最初の監査人と、途中で欠けた時（casual vacancy）' },
    { id: 'B084-2', lesson: 'B084', q: '私会社の2年目以降の監査人の選任は？', a: '28日の選任期間内に株主の普通決議。何もしなければ自動再任（s487）' },
    { id: 'B084-3', lesson: 'B084', q: '監査人になれない人の例は？', a: 'その会社の役員や従業員（独立性、s1214）' },
    { id: 'B084-4', lesson: 'B084', q: '監査人の報告の中身と相手は？', a: '財務諸表が true and fair view を示すかを株主に報告（s495）' },
    { id: 'B084-5', lesson: 'B084', q: '監査人の主な権利は？', a: '帳簿の閲覧、情報と説明の要求、総会の通知・出席・発言' },
    { id: 'B084-6', lesson: 'B084', q: '監査免除の会社に監査を求められる株主は？', a: '株式資本（またはある種類の株式）の10%以上を持つ株主（s476）' }
  ]
});
