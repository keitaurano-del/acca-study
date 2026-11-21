(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 219,
  part: 7,
  partTitle: '会社の運営（取締役・役員・株主総会）',
  lessons: [
    {
      id: 'B077',
      no: 77,
      title: '取締役の役割と種類',
      goal: '取締役会が会社を経営するしくみと、執行・非執行、法律上・事実上・影の取締役の違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(a)'],
      slides: [
        {
          title: 'マンションの管理組合と同じ形',
          paras: ['マンションの住民は、全員で毎日の管理を決めたりしない。理事を選び、日々の管理は理事会に任せる。気に入らなければ、次の総会で理事を替える。', '会社も同じ。持ち主の株主（members）が取締役（directors）を選び、経営は取締役の集まりである取締役会（board of directors）に任せる。所有と経営が分かれている。']
        },
        {
          title: '取締役と取締役会の役割',
          list: ['取締役は「名前に関係なく、取締役の地位にある人」（Companies Act 2006 s250）。肩書きではなく役割で決まる', 'モデル定款では、取締役が会社の事業の経営に責任を負い、そのために会社のすべての権限を使える（model articles art 3）', '株主が取締役に「こうしろ」と指示するには特別決議が必要（art 4）。普通決議では取締役会の経営判断を覆せない（Automatic Self-Cleansing Filter Syndicate v Cuninghame、1906年）', '取締役は会社の代理人（agent）として行動する。義務を負う相手は会社で、株主一人ひとりではない（s170(1)）'],
          note: { kind: 'tip', text: '株主の武器は「指示」ではなく「取締役を替えること」。普通決議で解任できる（次のレッスン）。' }
        },
        {
          title: '執行取締役と非執行取締役',
          table: { caption: '仕事の中身による分け方', head: ['項目', '執行取締役', '非執行取締役'], rows: [['英語', 'executive director', 'non-executive director（NED）'], ['立場', '会社に雇われ、毎日の業務を担う', '雇われていない。取締役会に出て監督する'], ['契約', '雇用契約（service contract）がある', 'ふつうは任用の書面だけ'], ['例', '財務担当取締役（finance director）', '外部の経営者や専門家']] },
          after: '上場会社向けの企業統治コードは、独立した非執行取締役を一定数置くよう求めている。日本の社外取締役に近い。'
        },
        {
          title: '非執行取締役も、義務は同じ',
          paras: ['会社法は執行と非執行を区別していない。非執行取締役も、取締役の法律上の義務（s171〜177、第7部の後半で学ぶ）を全部負う。', 'Dorchester Finance v Stebbing（1989年）では、非執行取締役が白紙の小切手に署名して執行取締役に渡していた。お金が流用され、非執行取締役も過失の責任を問われた。「たまに会議に出るだけ」は言い訳にならない。']
        },
        {
          title: '法律上の取締役と事実上の取締役',
          list: ['法律上の取締役（de jure director）: 定款と法律の手続きどおりに正式に選任された人', '事実上の取締役（de facto director）: 正式な選任はないのに、取締役として行動し、取締役として扱われている人。選任手続きに欠陥があった人もここに入る', '事実上の取締役も取締役として義務と責任を負う。資格剥奪（CDDA 1986）や不当取引（Insolvency Act 1986 s214）の対象にもなる'],
          after: '例: 選任の決議がされていないのに、名刺に「Director」と書き、取締役会に毎回出て議決にも加わっている人。'
        },
        {
          title: '影の取締役（shadow director）',
          formula: '取締役たちが、その人の指図や指示に従って行動するのが習慣になっている人（s251(1)）',
          list: ['表に出ず、裏から取締役会を動かす人。例: 支配株主や、取締役会がいつも言いなりになる大口の貸し手', '専門家としての助言（advice given in a professional capacity）に取締役が従っているだけなら、影の取締役ではない（s251(2)）。会計士や弁護士の助言など', '取締役の一般的な義務は、当てはまる範囲で影の取締役にも及ぶ（s170(5)）。不当取引や資格剥奪の対象にもなる']
        },
        {
          title: '図で整理する',
          svg: `<svg viewBox="0 0 440 312" role="img" aria-label="取締役は仕事の中身と、取締役になった経緯の2つの軸で分ける" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">取締役は2つの軸で分ける</text><text x="20" y="60" font-size="15" fill="var(--quiet)">仕事の中身</text><rect x="20" y="70" width="195" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="117" y="94" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">執行取締役</text><text x="117" y="116" text-anchor="middle" fill="var(--ink)">会社の業務を担う</text><rect x="225" y="70" width="195" height="58" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="322" y="94" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">非執行取締役</text><text x="322" y="116" text-anchor="middle" fill="var(--ink)">外から監督・助言</text><text x="20" y="158" font-size="15" fill="var(--quiet)">取締役になった経緯</text><rect x="20" y="168" width="126" height="74" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="83" y="192" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">de jure</text><text x="83" y="212" text-anchor="middle" fill="var(--ink)">正式に選任</text><text x="83" y="231" text-anchor="middle" fill="var(--ink)">された人</text><rect x="157" y="168" width="126" height="74" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="192" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">de facto</text><text x="220" y="212" text-anchor="middle" fill="var(--ink)">選任なしで</text><text x="220" y="231" text-anchor="middle" fill="var(--ink)">取締役として行動</text><rect x="294" y="168" width="126" height="74" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="357" y="192" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">shadow</text><text x="357" y="212" text-anchor="middle" fill="var(--ink)">取締役会が</text><text x="357" y="231" text-anchor="middle" fill="var(--ink)">その指示に従う人</text><text x="220" y="274" text-anchor="middle" font-size="15" fill="var(--ink)">どの種類も、取締役としての責任を負う</text><text x="220" y="298" text-anchor="middle" fill="var(--quiet)">影の取締役は、当てはまる範囲で（s170(5)）</text></svg>`,
          caption: '上の軸と下の軸は別の話。たとえば「事実上の非執行取締役」もありうる。'
        },
        {
          title: 'なぜ？ 肩書きでなく実態で決める理由',
          paras: ['もし「正式に選ばれた人だけが取締役」なら、悪い人は名前を出さずに裏から会社を動かし、失敗しても責任を逃れられる。', 'そこで法律は、実際に経営している人、取締役会を実際に動かしている人にも責任を負わせる。日本の感覚では「登記された役員だけが役員」と考えがちだが、英国法は実態を見る。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「非執行取締役は義務が軽い」は誤り。法律上の義務は同じ。また、取締役会が会計士の助言に従っているだけでは、会計士は影の取締役にならない。影の取締役は「指示に従うのが習慣になっている」相手。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['経営するのは取締役会。株主は特別決議でしか取締役に指示できず、普通決議で取締役を替えられる', '執行（業務を担う）と非執行（監督する）で義務は同じ', 'de jure は正式に選任、de facto は選任なしで取締役として行動、shadow は取締役会がその指示に従う人']
        },
        {
          title: '英単語',
          words: [
            ['board of directors', 'ボード オブ ディレクターズ', '取締役会'],
            ['executive director', 'エグゼクティブ', '執行取締役（業務を担う）'],
            ['non-executive director', 'ノン エグゼクティブ', '非執行取締役（NED）'],
            ['de jure director', 'デ ジューリ', '法律上の（正式に選任された）取締役'],
            ['de facto director', 'デ ファクト', '事実上の取締役'],
            ['shadow director', 'シャドウ', '影の取締役'],
            ['accustomed to act', 'アカスタムド', '従って行動するのが習慣になっている']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Companies Act 2006, which of the following is the definition of a shadow director?', choices: ['A person who acts as a director although never validly appointed', 'A director who is not employed by the company and attends only board meetings', 'A person in accordance with whose directions or instructions the directors of the company are accustomed to act', 'A person who gives professional advice on which the board regularly relies'], answer: 2, explain: 's251(1)。1つ目は事実上の取締役（de facto）。2つ目は非執行取締役。4つ目は s251(2) の除外：専門家としての助言に従うだけでは影の取締役にならない。' },
        { q: 'Which of the following statements regarding non-executive directors is correct?', choices: ['They owe no duties to the company because they are not its employees', 'They owe the same statutory duties to the company as executive directors', 'They are liable only if they acted fraudulently', 'They may not vote at board meetings'], answer: 1, explain: '会社法は執行と非執行を区別しない。Dorchester Finance v Stebbing では、非執行取締役も過失の責任を負った。雇用されていないことは義務と関係ない。' },
        { q: 'Tom は取締役に選任されたことがない。しかし2年間、取締役会に毎回出て議決に加わり、取引先にも取締役と名乗ってきた。Tom はどれに当たる？', choices: ['影の取締役（shadow director）', '法律上の取締役（de jure director）', 'どの取締役にも当たらない', '事実上の取締役（de facto director）'], answer: 3, explain: '正式な選任なしに、取締役として行動し扱われている人は de facto。影の取締役は表に出ず、取締役会がその指示に従う人。Tom は自分で表に出て行動している。' },
        { q: 'X社の取締役会は、外部の会計士 Kumi の税務上の助言に毎回従ってきた。Kumi はそれ以外に経営に口を出していない。Kumi は影の取締役？', choices: ['当たる。取締役会が毎回従っているから', '当たらない。専門家としての助言に従っているだけ', '当たる。会計士は必ず影の取締役として扱われる', '当たらない。影の取締役は株主しかなれない'], answer: 1, explain: 's251(2)：専門家としての立場で与えた助言に取締役が従っても、それだけでは影の取締役にならない。逆に、株主でなくても（例: 大口の貸し手）影の取締役になりうる。' },
        { q: 'A company has adopted the model articles. The shareholders disagree with a contract the board plans to sign. How can the shareholders direct the board not to sign it?', choices: ['By passing an ordinary resolution', 'By a letter signed by any one shareholder', 'By passing a special resolution', 'They cannot direct the board in any circumstances'], answer: 2, explain: 'Model articles art 4：株主は特別決議で取締役に指示できる。普通決議では経営判断を覆せない（Cuninghame 事件）。普通決議でできるのは取締役の解任。' },
        { q: 'To whom do the directors of a company owe their general duties under the Companies Act 2006?', choices: ['To the company', 'To each shareholder individually', 'To the company\'s auditors', 'To the managing director'], answer: 0, explain: 's170(1)：取締役の一般的な義務は会社に対して負う。株主一人ひとりに対してではない。だから義務違反を訴えるのも、原則は会社。' }
      ]
    },
    {
      id: 'B078',
      no: 78,
      title: '取締役の選任と退任',
      goal: '取締役の人数と資格、選任の方法、退任のしかたと、普通決議による解任の手続き（特別通知、弁明の権利、損害賠償）を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(b)'],
      slides: [
        {
          title: 'サークルの幹事の交代',
          paras: ['サークルの幹事は、部員の集まりで選ばれる。自分から辞めることもあるし、任期で交代することもある。部員の過半数が「替えたい」と言えば、いつでも交代させられる。', 'ただ、交代させられる幹事にも言い分を話す機会はほしい。会社の取締役の選任と解任は、この感覚をきちんと手続きにしたもの。']
        },
        {
          title: '人数と資格（Companies Act 2006）',
          table: { caption: '取締役の最低限のルール', head: ['ルール', '内容'], rows: [['人数（s154）', '私会社は1人以上、公開会社は2人以上'], ['自然人（s155）', '少なくとも1人は人間（会社だけでは不可）'], ['年齢（s157）', '16歳以上。上限の年齢はない'], ['株式', '株主である必要はない（定款で求めなければ）']] },
          after: '選任や退任があったら、会社は14日以内に登記所（Companies House）へ届け出て、取締役名簿（register of directors）を更新する（s162・s167）。'
        },
        {
          title: '選任のしかた',
          list: ['最初の取締役: 設立の申請書に書かれた人が、設立と同時に取締役になる', 'その後: モデル定款では、株主の普通決議か、取締役会の決定で選任できる（私会社 art 17、公開会社 art 20）', '公開会社では、取締役の選任を1人ずつ別々の決議にする（s160）。まとめて決めるには反対がないことが必要', '選任の手続きに欠陥があっても、その取締役がした行為は有効（s161）'],
          note: { kind: 'tip', text: '公開会社のモデル定款（art 21）: 最初の年次株主総会（AGM）では取締役全員が退任する。その後は、取締役会が選んだ取締役は次の AGM で退任し、再任を求める。ほかの取締役も、直前2回の AGM で選任・再任されていなければ退任する（ローテーション）。私会社のモデル定款にはローテーションはない。' }
        },
        {
          title: '取締役でなくなる場面',
          list: ['辞任: 会社に辞任の通知をする（model articles art 18）', 'ローテーションで退任し、再任されなかった', '定款の事由: 破産命令を受けた、医師が職務を果たせないと書面で意見した、など（art 18）', '法律で禁じられた: 資格剥奪（次のレッスン）', '株主による解任（s168）', '死亡、会社の清算']
        },
        {
          title: '普通決議による解任（s168）',
          list: ['株主総会の普通決議（過半数）で、任期の途中でも解任できる', '定款や、取締役との契約に反対のことが書いてあっても、この権利は奪えない', '決議を提案する株主は、総会の28日以上前に会社へ特別通知（special notice）を出す（s312）', '書面決議（written resolution）では解任できない。必ず総会を開く（s288(2)）']
        },
        {
          title: '解任の流れと、取締役の権利',
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="特別通知から株主総会での普通決議までの解任の流れ" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">s168 による解任の流れ</text><text x="70" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">特別通知</text><text x="220" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">株主へ通知</text><text x="365" y="70" text-anchor="middle" font-weight="600" fill="var(--ink)">株主総会</text><line x1="70" y1="92" x2="365" y2="92" stroke="var(--edge)" stroke-width="2"/><circle cx="70" cy="92" r="8" fill="var(--ink)"/><circle cx="220" cy="92" r="8" fill="var(--ink)"/><circle cx="365" cy="92" r="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="70" y="122" text-anchor="middle" fill="var(--ink)">会社へ</text><text x="70" y="142" text-anchor="middle" fill="var(--ink)">28日以上前</text><text x="220" y="122" text-anchor="middle" fill="var(--ink)">総会の通知と</text><text x="220" y="142" text-anchor="middle" fill="var(--ink)">一緒に（原則）</text><text x="365" y="122" text-anchor="middle" fill="var(--ink)">普通決議</text><text x="365" y="142" text-anchor="middle" fill="var(--ink)">過半数で解任</text><text x="220" y="184" text-anchor="middle" fill="var(--ink)">取締役は総会で弁明でき、書面も配布させられる</text><text x="220" y="210" text-anchor="middle" fill="var(--quiet)">書面決議（written resolution）は使えない</text></svg>`,
          paras: ['解任される取締役の権利（s169）: 特別通知の写しを受け取る。総会で発言する（be heard）。書面の意見（written representations）を株主に配らせる（権利の濫用なら裁判所が止められる）。'],
          after: '解任されても、取締役は契約違反の損害賠償などを請求できる（s168(5)）。'
        },
        {
          title: '例題: 加重議決権（Bushell v Faith）',
          example: {
            problem: '会社の株式は300株。Faith（取締役）、姉 Bushell、妹がそれぞれ100株。定款には「取締役の解任の決議では、その取締役の株式は1株3票」とある。姉と妹が Faith の解任に賛成した。可決される？',
            steps: ['解任は普通決議なので、投じられた票の過半数が必要', 'Faith の票: 100株 × 3票 ＝ 300票（反対）', '姉と妹の票: 100 ＋ 100 ＝ 200票（賛成）', '300 ＞ 200 で否決', '貴族院（1970年）は、この定款を有効とした。s168 の普通決議の権利は奪っておらず、議決権の配分を決めただけだから'],
            answer: '否決。Faith は解任されない'
          }
        },
        {
          title: 'なぜ？ 解任をいつでも、でも手続き付きにする理由',
          paras: ['取締役は株主のお金で経営している。信頼できなくなったら、任期に関係なく替えられないと、株主は自分の財産を守れない。だから定款でも奪えない。', 'その一方で、取締役が反論できないまま追い出されるのは不公平。だから28日の特別通知と弁明の機会を付け、契約上の損害賠償も残している。日本の会社法の解任（株主総会の普通決議でいつでも解任、不当な解任なら損害賠償）と考え方は近い。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '解任に特別決議（75%）は不要。普通決議で足りる。ただし書面決議では解任できない。また「解任されたら何も請求できない」も誤り。雇用契約の残りなどの損害賠償は請求できる。特別通知の28日は、株主から会社への通知の期間。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['私会社は1人以上、公開会社は2人以上。少なくとも1人は自然人で、16歳以上', '選任は普通決議か取締役会の決定。公開会社はローテーションで AGM ごとに再任を問う', '解任は s168 の普通決議。特別通知28日、総会が必要、取締役は弁明でき、損害賠償は別に請求できる']
        },
        {
          title: '英単語',
          words: [
            ['appointment', 'アポイントメント', '選任'],
            ['retirement by rotation', 'ローテーション', '輪番による退任'],
            ['resignation', 'レジグネイション', '辞任'],
            ['removal', 'リムーヴァル', '解任'],
            ['special notice', 'スペシャル ノーティス', '特別通知（28日前）'],
            ['ordinary resolution', 'オーディナリー レゾリューション', '普通決議（過半数）'],
            ['written representations', 'レプリゼンテイションズ', '書面による意見']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Companies Act 2006, how may the shareholders remove a director before the end of his period of office?', choices: ['By special resolution passed at a meeting, after special notice has been given', 'By ordinary resolution passed at a meeting, after special notice has been given', 'By written resolution signed by a simple majority of the members', 'Only if the articles of association contain a power to remove directors'], answer: 1, explain: 's168。普通決議で足りる（特別決議は不要）。書面決議は使えない（s288(2)）。定款に書いていなくても、また定款で反対のことを決めても、この権利はある。' },
        { q: 'Which of the following is a requirement of the Companies Act 2006 for the directors of a private company?', choices: ['The company must have at least two directors', 'Every director must hold at least one share in the company', 'Every director must be under the age of 70', 'The company must have at least one director who is a natural person'], answer: 3, explain: 's155。私会社の最低人数は1人（2人は公開会社、s154）。株主である必要はなく、年齢の上限もない。下限は16歳（s157）。' },
        { q: '会社の株式は500株。取締役 Ken は150株を持つ。定款には「取締役の解任の決議では、その取締役の株式は1株3票」とある。ほかの株主は全員（350株、1株1票）が解任に賛成した。Ken の反対票は何票？', type: 'number', answer: 450, unit: '票', explain: '150株 × 3票 ＝ 450票。賛成は350票なので、450 ＞ 350 で否決される。Bushell v Faith により、この加重議決権の定め（weighted voting rights）は有効。' },
        { q: 'A director is removed under section 168 two years before the end of his five-year service contract. Which of the following is correct?', choices: ['He loses all rights to compensation because the removal was lawful', 'The removal is invalid because his contract has not expired', 'He may claim damages for breach of his service contract', 'He is automatically disqualified from acting as a director of any company'], answer: 2, explain: 's168(5)：解任は有効だが、契約違反の損害賠償などの請求は奪われない。解任は資格剥奪（CDDA）とは別。' },
        { q: '公開会社（モデル定款を採用）で、前回の AGM の後に取締役会が新しい取締役を選任した。この取締役はどうなる？', choices: ['次の AGM で退任し、株主に再任を求めることができる', '次の AGM までに辞任しなければならない', '株主の承認なしに、ずっと取締役でいられる', '取締役会の選任は無効で、株主しか選任できない'], answer: 0, explain: '公開会社のモデル定款 art 21。取締役会も選任できる（art 20）が、次の AGM で退任し、再任（reappointment）を求める。私会社のモデル定款にはこの定めはない。' },
        { q: '解任の決議を提案したい株主は、会社に特別通知を何日以上前に出す？', type: 'number', answer: 28, unit: '日', explain: 's312：総会の28日以上前に会社へ。会社はそれを総会の通知と一緒に株主へ知らせる。解任される取締役には写しが送られる（s169）。' }
      ]
    },
    {
      id: 'B079',
      no: 79,
      title: '取締役の資格剥奪',
      goal: 'Company Directors Disqualification Act 1986 で資格剥奪が命じられる理由と期間、違反したときの結果を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(b)'],
      slides: [
        {
          title: '運転免許の取消しと同じ発想',
          paras: ['危険な運転をくり返した人は、免許を取り消され、何年か運転できなくなる。ほかの人を守るため。', '会社の経営も同じ。有限責任の会社を使って債権者に損をさせた人や、法律を守らない人は、一定期間、会社の経営から締め出される。これが取締役の資格剥奪（disqualification）で、Company Directors Disqualification Act 1986（CDDA）が定める。']
        },
        {
          title: '資格剥奪されると何ができないか（s1）',
          list: ['会社の取締役になれない', '直接・間接を問わず、会社の設立や経営に関わること（be concerned or take part）ができない。肩書きのない「相談役」として裏から指示するのもだめ', '倒産実務家（insolvency practitioner）や管財人として活動できない', '例外は裁判所の許可（leave of the court）を得たときだけ', '免責を受けていない破産者（undischarged bankrupt）も、裁判所の許可なしに取締役になれない。違反は犯罪（s11）'],
          after: '裁判所の命令（disqualification order）のほか、本人が国務大臣（Secretary of State）に約束する資格剥奪の誓約（disqualification undertaking）もある。裁判を省けるが、効果は命令と同じ。'
        },
        {
          title: '理由と期間',
          table: { caption: 'CDDA 1986 の主な理由', head: ['理由', '期間'], rows: [['s2 会社の設立・経営・清算に関する起訴犯罪で有罪', '最長15年（略式の裁判所なら5年）'], ['s3 届出義務の違反をくり返した', '最長5年'], ['s4 清算中に不正取引や不正行為が判明', '最長15年'], ['s5 届出違反で5年間に3回以上の略式有罪', '最長5年'], ['s6 倒産した会社の不適格な取締役', '最短2年・最長15年（必ず命令）'], ['s8 調査の結果、公益のため', '最長15年'], ['s10 不正取引・不当取引への関与', '最長15年']] },
          after: 's3 では、過去5年間に3回以上の違反と判断されていれば、くり返しの違反があったと決定的に証明される。'
        },
        {
          title: 'いちばん大事な s6: 不適格（unfitness）',
          list: ['会社が倒産（または解散）し、取締役としての行動が会社の経営に関わるのに不適格だと裁判所が判断したとき', '裁判所は必ず命令を出す（must）。期間は最短2年・最長15年', '申し立てるのは国務大臣（または破産管財官）。原則として倒産の日から3年以内（s7）', '不適格の例: 税金を払わずに営業を続けた、会計記録をつけなかった、届出をしない、支払えないと分かっていて取引を続けた、自分に有利な返済をした']
        },
        {
          title: '期間の目安（Re Sevenoaks Stationers）',
          table: { caption: '裁判所が示した3つの区分（1991年）', head: ['区分', 'どんな場合'], rows: [['10年を超える', 'とくに重大な場合。前にも資格剥奪された人など'], ['6〜10年', '重大だが、最上位ほどではない場合'], ['2〜5年', '比較的軽い場合']] },
          after: '期間は、命令の理由になった行動の重さで決まる。s6 では、どんなに軽くても2年より短くできない。'
        },
        {
          title: '例題: 税金を払わずに営業を続けた',
          example: {
            problem: 'Jo は会社の資金繰りが苦しい中、3年間、源泉税や付加価値税を払わずに営業を続け、他の債権者への支払いに回した。会社は倒産した。詐欺の証拠はない。どうなる？',
            steps: ['会社が倒産している → s6 の対象', '税金を払わず取引を続けたのは、不適格の典型例', '不適格と判断されれば、裁判所は必ず命令を出す（最短2年）', '詐欺がなく、前の資格剥奪もない → 最上位（10年超）ではない', '期間の長さ、金額、他の債権者への影響の大きさで、6〜10年（重大）か2〜5年（比較的軽い）かを決める'],
            answer: 's6 で必ず資格剥奪（2〜15年の範囲）。Sevenoaks の区分では中位か下位になる'
          }
        },
        {
          title: '違反して経営に関わったら',
          list: ['犯罪になる（s13）。正式起訴なら最長2年の拘禁刑か罰金、または両方。略式の裁判ならもっと短い拘禁刑か罰金', '資格剥奪中に経営に関わった間の会社の債務について、個人として連帯して責任を負う（s15）。有限責任の保護がなくなる', '資格剥奪中と知りながら、その人の指示に従って行動した人も同じ責任を負う', '裁判所は、資格剥奪した人に債権者への補償を命じることもできる（compensation order、s15A）']
        },
        {
          title: 'なぜ？ 罰ではなく、世の中を守るため',
          paras: ['有限責任の会社は、失敗しても株主と取締役が私財で払わなくてよいしくみ。便利な反面、悪用すると、会社をつぶしては新しい会社を作り、そのたびに債権者に損をさせられる。', '資格剥奪の目的は、本人を罰することより、取引先や一般の人を守ること。だから s6 では、不適格なら裁判所に選ぶ余地がなく、必ず2年以上締め出す。「刑事の有罪判決がなければ締め出されない」という感覚とも違い、s6 は有罪判決がなくても使われる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '資格剥奪は「その会社だけ」ではなく、すべての会社の経営に関われない。肩書きを外して裏から指示するのもだめ。また s6 は裁判所の裁量ではなく必ず命令（最短2年）。ほかの理由（s2・s3 など）は、裁判所が命令するかどうかを選べる（may）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['資格剥奪中は、裁判所の許可なく取締役にも、会社の設立・経営への関与もできない', '最長15年（s3・s5 は5年）。倒産会社の不適格な取締役（s6）は必ず命令、最短2年', '違反すると犯罪（最長2年）で、その間の会社の債務を個人で負う']
        },
        {
          title: '英単語',
          words: [
            ['disqualification order', 'ディスクオリフィケイション', '資格剥奪の命令'],
            ['disqualification undertaking', 'アンダーテイキング', '資格剥奪の誓約'],
            ['unfit', 'アンフィット', '不適格な'],
            ['persistent default', 'パーシステント ディフォルト', 'くり返しの違反'],
            ['leave of the court', 'リーヴ', '裁判所の許可'],
            ['undischarged bankrupt', 'アンディスチャージド', '免責を受けていない破産者'],
            ['jointly and severally liable', 'ジョイントリー アンド セヴェラリー', '連帯して責任を負う']
          ]
        }
      ],
      quiz: [
        { q: 'Under section 6 of the Company Directors Disqualification Act 1986, a court finds that a director of an insolvent company is unfit to be concerned in the management of a company. Which of the following is correct?', choices: ['The court may make a disqualification order for a maximum of 5 years', 'The court must make a disqualification order for a minimum of 5 years and a maximum of 10 years', 'The court must make a disqualification order for a minimum of 2 years and a maximum of 15 years', 'The court may only fine the director, as disqualification requires a criminal conviction'], answer: 2, explain: 's6 は必ず命令（mandatory）で、最短2年・最長15年。最長5年は s3・s5。刑事の有罪判決は s6 の条件ではない。' },
        { q: 'A person who is subject to a disqualification order continues to act as a director of a company. Which of the following consequences may follow?', choices: ['He is liable only to pay a civil penalty to the company', 'The company is automatically wound up', 'There is no consequence if the shareholders approved his appointment', 'He commits a criminal offence and is personally liable for the debts of the company incurred while he acted'], answer: 3, explain: 's13 で犯罪（正式起訴なら最長2年）、s15 でその間の会社の債務に個人として連帯責任。株主の承認があっても、必要なのは裁判所の許可。' },
        { q: 'CDDA 1986 の s3（届出義務の違反のくり返し）による資格剥奪の最長期間は何年？', type: 'number', answer: 5, unit: '年', explain: 's3(5)：最長5年。過去5年間に3回以上の違反と判断されていれば、くり返しの違反は決定的に証明される（s3(2)）。' },
        { q: 'Re Sevenoaks Stationers の区分で、とくに重大な場合（例: 前にも資格剥奪された人）に当てはまる期間はどれ？', choices: ['10年を超える期間', '6〜10年', '2〜5年', '1年以内'], answer: 0, explain: '10年超はとくに重大な場合、6〜10年は重大だが最上位ではない場合、2〜5年は比較的軽い場合。s6 では2年より短くできない。' },
        { q: '資格剥奪中の Aki は、友人の会社の取締役にはならず、「アドバイザー」として毎週の経営会議に出て、取締役会に方針を指示している。問題ない？', choices: ['問題ない。取締役になっていないから', '問題ある。直接・間接を問わず会社の経営に関わることが禁じられている','問題ない。友人の会社であって、自分が前に経営した会社ではないから', '問題ない。指示を受けた取締役だけが責任を負う'], answer: 1, explain: 'CDDA s1：裁判所の許可なしに、直接・間接に会社の経営に関わることはできない。どの会社でも同じ。Aki の指示に従った取締役も、知っていれば会社の債務に個人責任を負いうる（s15）。' }
      ]
    },
    {
      id: 'B080',
      no: 80,
      title: '会社を拘束する権限：取締役会・社長・個々の取締役',
      goal: '取締役会、社長（MD/CEO）、個々の取締役が会社を契約に拘束できる範囲の違いと、取引の相手方を守るルールを説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D5(c)'],
      slides: [
        {
          title: 'お店の本部・店長・アルバイト',
          paras: ['チェーン店では、本部が大きなことを決める。店長は、仕入れや人の手配など店のことを一通り決められる。アルバイトが勝手に店の名前で大きな契約をしても、ふつうは店は縛られない。', 'ただ、本部がずっと「この人が店長です」という扱いをしていたら、取引先はその人を信じてよいはず。会社の取締役の権限も、この3段階と「信じた相手を守る」ルールで考える。']
        },
        {
          title: '取締役会: 集まって決める',
          list: ['会社の権限を持つのは、取締役会という集まり（model articles art 3）。決めるのは会議での多数決などの集団の決定（art 7）', '取締役会は、権限を委員会や特定の人に任せられる（delegate、art 5）', '1人しか取締役がいない私会社では、その1人が決める'],
          note: { kind: 'tip', text: '会社と取締役の関係は、第4部で学んだ代理（agency）と同じ。会社が本人（principal）、取締役が代理人（agent）。実際の権限（actual authority）と表見的な権限（apparent authority）で考える。' }
        },
        {
          title: '社長（MD/CEO）: 任された広い権限',
          list: ['取締役会が社長（managing director / chief executive）を選び、権限を任せる。任された範囲が明示の実際の権限', 'さらに、社長という地位に通常ついてくる権限（usual authority）がある。会社の日常の商取引は、ふつう社長が決めてよい', 'Hely-Hutchinson v Brayhead（1968年）: 会長が事実上の社長として振る舞い、取締役会はそれを黙認していた。会長が会社の名で出した保証は、取締役会の態度から生まれた黙示の実際の権限（implied actual authority）で会社を拘束した']
        },
        {
          title: '個々の取締役: 地位だけでは権限なし',
          paras: ['ふつうの取締役は、取締役会の一員として決定に加わるだけ。取締役という地位だけでは、1人で会社を契約に拘束する権限はない。', '拘束できるのは、取締役会が権限を任せた（実際の権限）か、会社がその人に権限があるように見せていた（表見的な権限）ときだけ。会長（chairman）という肩書きも、それだけでは権限を生まない。']
        },
        {
          title: '例題: Freeman & Lockyer v Buckhurst Park Properties（1964年）',
          example: {
            problem: '会社の取締役 Kapoor は、社長に選任されていなかった。しかし取締役会は、Kapoor が社長のように振る舞うのを知りながら止めなかった。Kapoor は会社の名で建築家（Freeman & Lockyer）に仕事を頼んだ。会社は「Kapoor に権限はない」と言って報酬を払わない。払う必要がある？',
            steps: ['実際の権限: 取締役会は Kapoor を社長に選任していない → なし', '表見的な権限の条件1: 会社（経営の権限を持つ取締役会）が、Kapoor に権限があるように見せた → 黙認して社長として扱っていた', '条件2: 建築家はそれを信じて契約した', '条件3: 依頼の内容は、社長が通常持つ権限の範囲内', '条件がそろう → 会社は拘束される'],
            answer: '払う必要がある。表見的な権限で会社が拘束される'
          }
        },
        {
          title: '3者の比較',
          table: { caption: '会社を拘束できる範囲', head: ['誰', '範囲', '根拠'], rows: [['取締役会', '会社のすべての権限（定款の範囲で）', '定款（art 3）'], ['社長（MD/CEO）', '任された範囲と、社長に通常ついてくる日常の商取引', '委任と表見的な権限'], ['個々の取締役', '地位だけではなし', '任されたか、会社が権限があるように見せたときだけ']] },
          after: '権限のない人が結んだ契約も、取締役会が後から追認（ratify）すれば会社を拘束する。'
        },
        {
          title: '取引の相手方を守るルール',
          list: ['s40 CA 2006: 善意で会社と取引する人にとって、取締役が会社を拘束する（または他人に任せる）権限は、定款の制限がないものとみなされる', '相手方は定款の制限を調べなくてよく、善意と推定される。制限を知っていただけでは悪意にならない', '内部手続きの推定（Royal British Bank v Turquand、1856年）: 外部の人は、取締役会の定足数などの内部手続きが守られたと考えてよい', 'ただし相手方が会社の取締役やその関係者なら、s40 の保護はなく、取引は会社が取り消せる（s41）']
        },
        {
          title: 'なぜ？ 相手を守る理由',
          paras: ['取引先は、会社の定款や取締役会の議事録をいちいち見られない。そのたびに調べさせたら、会社と安心して取引できない。', 'だから、会社が自分で作った外見や、外から見えない内部の制限で、相手に不利益を与えない。一方、内部の事情を知る取締役自身は守らない。日本では代表取締役が法律で会社を代表するが、英国法には法律上の「代表取締役」はなく、取締役会からの委任と外見で権限を判断する。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '表見的な権限は、代理人本人の言葉では生まれない。「私には権限がある」と取締役が自分で言っただけでは足りず、会社（取締役会）がそう見せていたことが必要。また「取締役なら誰でも会社を拘束できる」も誤り。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['取締役会は集まって会社のすべての権限を使い、社長や委員会に任せられる', '社長は任された権限と、社長に通常ついてくる広い権限を持つ。個々の取締役は地位だけでは権限なし', '会社が見せた外見（Freeman & Lockyer）と s40 で、善意の相手方は守られる。取締役自身は s41 で守られない']
        },
        {
          title: '英単語',
          words: [
            ['managing director', 'マネージング ディレクター', '社長（業務執行の長）'],
            ['bind the company', 'バインド', '会社を（契約に）拘束する'],
            ['actual authority', 'アクチュアル オーソリティ', '実際の権限（明示・黙示）'],
            ['apparent (ostensible) authority', 'アパレント', '表見的な権限'],
            ['usual authority', 'ユージュアル', 'その地位に通常ついてくる権限'],
            ['delegate', 'デリゲイト', '権限を任せる'],
            ['in good faith', 'イン グッド フェイス', '善意で']
          ]
        }
      ],
      quiz: [
        { q: 'The board of X Ltd has never appointed a managing director, but it knowingly allows one director, Ray, to act as if he were the managing director. Ray enters into a contract on behalf of X Ltd that is within the usual authority of a managing director. Is X Ltd bound?', choices: ['No, because Ray was never formally appointed as managing director', 'No, because an individual director can never bind the company', 'Yes, but only if the shareholders later approve the contract by special resolution', 'Yes, because the board held Ray out as having authority and the other party relied on it'], answer: 3, explain: 'Freeman & Lockyer v Buckhurst Park Properties。取締役会が社長として扱っていた（holding out）ので、表見的な権限で会社が拘束される。正式な選任は不要。' },
        { q: 'Mia is an ordinary director of Y Ltd. She has no delegated authority, and the board has never held her out as having authority. She signs a contract to buy equipment in the company\'s name. Which of the following is correct?', choices: ['Y Ltd is bound because every director has authority to bind the company', 'Y Ltd is bound because Mia told the seller she had authority', 'Y Ltd is not bound unless the board ratifies the contract', 'Mia is automatically disqualified for exceeding her authority'], answer: 2, explain: '個々の取締役は地位だけでは権限がない。本人（Mia）が「権限がある」と言っても表見的な権限にはならない。取締役会が追認すれば拘束される。' },
        { q: 'Under section 40 Companies Act 2006, which of the following is correct?', choices: ['A person dealing with the company must check the articles before entering into any contract', 'In favour of a person dealing with the company in good faith, the power of the directors to bind the company is deemed free of any limitation under the company\'s constitution','A person who knows that an act is beyond the directors\' powers under the constitution is always in bad faith', 'Section 40 protects directors of the company who contract with it'], answer: 1, explain: 's40(1)・(2)。相手方は調べる義務がなく、善意と推定され、制限を知っていただけでは悪意にならない。会社の取締役が相手方なら s41 で取引は取り消しうる。' },
        { q: 'Hely-Hutchinson v Brayhead で、会長が会社の名で出した保証が会社を拘束したのは、どの権限による？', choices: ['取締役会の態度から生まれた黙示の実際の権限', '会長という肩書きに当然ついてくる権限', '株主総会の特別決議による権限', 's41 による取締役の保護'], answer: 0, explain: '取締役会は会長が事実上の社長として振る舞うのを黙認していた。この態度から黙示の実際の権限（implied actual authority）が認められた。会長という肩書きだけでは権限は生まれない。' },
        { q: '会社の定款に「$50,000 を超える契約は取締役会の承認が必要」とある。社長は承認を得ずに、善意の取引先と $80,000 の契約を結んだ。取引先は会社に契約の履行を求められる？', choices: ['求められない。定款の制限を超えているから', '求められない。取引先は定款を調べるべきだったから', '求められる。s40 で、善意の相手方には定款の制限が及ばない', '求められる。ただし $50,000 までの部分だけ'], answer: 2, explain: '社長は取締役会から権限を任された人。s40：善意の相手方にとって、取締役が会社を拘束する権限・他人に任せる権限は、定款の制限がないものとみなされる。調べる義務もない。社長は会社に対して制限違反の責任を負いうるが、取引先との契約は有効。' },
        { q: '取締役会の決定のしかたとして正しいものはどれ？（モデル定款）', choices: ['取締役が1人ずつ、それぞれ会社の全権限を使える', '株主総会の承認がないと、取締役会は何も決められない', '会長が1人ですべてを決める', '取締役会という集まりで、会議の多数決などで決める。権限は委員会や社長に任せられる'], answer: 3, explain: 'Model articles art 3・5・7。権限は取締役会という集まりにある。取締役が1人の私会社では、その1人が決める。' }
      ]
    }
  ],
  cards: [
    { id: 'B077-1', lesson: 'B077', q: 'モデル定款で、会社の経営に責任を負うのは誰？', a: '取締役会。会社のすべての権限を使える（art 3）' },
    { id: 'B077-2', lesson: 'B077', q: '株主が取締役会に指示するには？', a: '特別決議が必要（art 4）。普通決議では経営判断を覆せない' },
    { id: 'B077-3', lesson: 'B077', q: '執行取締役と非執行取締役の違いは？ 義務は？', a: '執行は業務を担い、非執行は監督する。法律上の義務は同じ' },
    { id: 'B077-4', lesson: 'B077', q: 'de facto director とは？', a: '正式な選任なしに、取締役として行動し扱われている人' },
    { id: 'B077-5', lesson: 'B077', q: 'shadow director の定義は？（s251）', a: '取締役たちがその指図・指示に従うのが習慣になっている人' },
    { id: 'B077-6', lesson: 'B077', q: '会計士の助言に取締役会が従うと、会計士は影の取締役？', a: 'ならない。専門家としての助言は除かれる（s251(2)）' },
    { id: 'B077-7', lesson: 'B077', q: '取締役の一般的な義務は誰に対して負う？', a: '会社に対して（s170(1)）。株主一人ひとりに対してではない' },
    { id: 'B078-1', lesson: 'B078', q: '取締役の最低人数は？', a: '私会社1人、公開会社2人。少なくとも1人は自然人' },
    { id: 'B078-2', lesson: 'B078', q: '取締役の年齢の条件は？', a: '16歳以上。上限はない' },
    { id: 'B078-3', lesson: 'B078', q: 's168 の解任に必要な決議と通知は？', a: '総会での普通決議。会社への特別通知は28日以上前' },
    { id: 'B078-4', lesson: 'B078', q: '解任で書面決議は使える？', a: '使えない。必ず総会を開く' },
    { id: 'B078-5', lesson: 'B078', q: '解任される取締役の権利は？', a: '総会での発言、書面の意見の配布、契約違反の損害賠償の請求' },
    { id: 'B078-6', lesson: 'B078', q: 'Bushell v Faith のポイントは？', a: '解任決議だけ取締役の株を加重する定款は有効' },
    { id: 'B079-1', lesson: 'B079', q: '資格剥奪中にできないことは？', a: '裁判所の許可なく、取締役になること、会社の設立・経営への直接・間接の関与' },
    { id: 'B079-2', lesson: 'B079', q: 's6（倒産会社の不適格な取締役）の期間は？', a: '必ず命令。最短2年・最長15年' },
    { id: 'B079-3', lesson: 'B079', q: 's3（届出義務違反のくり返し）の最長期間は？', a: '5年。5年間に3回以上の違反で決定的に証明' },
    { id: 'B079-4', lesson: 'B079', q: '資格剥奪に違反して経営に関わったら？', a: '犯罪（最長2年）。その間の会社の債務を個人で連帯して負う' },
    { id: 'B079-5', lesson: 'B079', q: 'Sevenoaks の3つの区分は？', a: '10年超：とくに重大、6〜10年：重大、2〜5年：比較的軽い' },
    { id: 'B079-6', lesson: 'B079', q: 'なぜ？ 資格剥奪の目的は', a: '有限責任の悪用から債権者や一般の人を守るため' },
    { id: 'B080-1', lesson: 'B080', q: '個々の取締役は地位だけで会社を拘束できる？', a: 'できない。任されたか、会社が権限があるように見せたときだけ' },
    { id: 'B080-2', lesson: 'B080', q: '社長（MD/CEO）の権限は？', a: '任された権限と、社長に通常ついてくる日常の商取引の権限' },
    { id: 'B080-3', lesson: 'B080', q: 'Freeman & Lockyer のポイントは？', a: '取締役会が社長として扱った人の契約は、表見的な権限で会社を拘束' },
    { id: 'B080-4', lesson: 'B080', q: 'Hely-Hutchinson v Brayhead のポイントは？', a: '取締役会の黙認から黙示の実際の権限が生まれた' },
    { id: 'B080-5', lesson: 'B080', q: 's40 CA 2006 の内容は？', a: '善意の相手方には、取締役の権限に定款の制限がないとみなす' },
    { id: 'B080-6', lesson: 'B080', q: '相手方が会社の取締役なら？', a: 's40 の保護はなく、会社は取引を取り消せる（s41）' }
  ]
});
