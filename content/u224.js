(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 224,
  part: 9,
  partTitle: '企業・金融犯罪',
  lessons: [
    {
      id: 'B100',
      no: 100,
      title: 'マネーロンダリング：3つの段階と主な犯罪',
      goal: 'マネーロンダリングの3つの段階を見分け、Proceeds of Crime Act 2002 の3つの主な犯罪、抗弁、罰則を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F2(a)'],
      slides: [
        {
          title: '汚れたお金を「洗う」',
          paras: ['詐欺で集めた現金が、段ボール箱に1億円ある。そのまま高級車を買えば「そのお金はどこから？」と聞かれてしまう。', 'そこで、別のお金に見せかけて出どころを分からなくする。これがマネーロンダリング（money laundering、資金洗浄）。汚れたお金を洗濯して、きれいに見せるという意味。第9部の犯罪は、英国の法律をモデルに学ぶ。']
        },
        {
          title: '3つの段階',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="マネーロンダリングは預け入れ、隠ぺい、統合の3段階で進む" font-size="15"><rect x="20" y="16" width="130" height="66" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="85" y="44" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Placement</text><text x="85" y="68" text-anchor="middle" fill="var(--ink)">預け入れ</text><text x="168" y="44" fill="var(--ink)">犯罪で得た現金を口座や</text><text x="168" y="68" fill="var(--ink)">店の売上に混ぜて入れる</text><line x1="85" y1="84" x2="85" y2="103" stroke="var(--edge)" stroke-width="1.5"/><polygon points="79,102 91,102 85,110" fill="var(--edge)"/><rect x="20" y="112" width="130" height="66" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="140" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Layering</text><text x="85" y="164" text-anchor="middle" fill="var(--ink)">隠ぺい</text><text x="168" y="140" fill="var(--ink)">送金や売買を何度も重ね、</text><text x="168" y="164" fill="var(--ink)">出どころを追えなくする</text><line x1="85" y1="180" x2="85" y2="199" stroke="var(--edge)" stroke-width="1.5"/><polygon points="79,198 91,198 85,206" fill="var(--edge)"/><rect x="20" y="208" width="130" height="66" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="85" y="236" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Integration</text><text x="85" y="260" text-anchor="middle" fill="var(--ink)">統合</text><text x="168" y="236" fill="var(--ink)">きれいに見えるお金として</text><text x="168" y="260" fill="var(--ink)">不動産や事業に戻す</text></svg>`,
          caption: '試験では、説明文を読んでどの段階に当たるかを選ぶ問題が出る。現金が金融の仕組みに最初に入る所（placement）が、いちばん見つけやすい。'
        },
        {
          title: '段階を例で見る',
          table: { caption: '盗んだ現金を、たこ焼き屋を使って洗う', head: ['段階', '例'], rows: [['Placement', '現金を毎日少しずつ売上に混ぜて入金する'], ['Layering', '海外の口座へ送り、会社の間で何度も移す'], ['Integration', '「事業の利益」として家や株を買う']] },
          after: '目印は、placement＝現金を入れる、layering＝動かして隠す、integration＝表のお金として使う。'
        },
        {
          title: '土台になる言葉：犯罪収益',
          list: ['犯罪収益（criminal property）＝犯罪行為から得た利益、またはそれを表す財産', '本人がそれを犯罪収益だと知っている、または疑っている（knows or suspects）ことが条件。疑いだけで足りる', '犯罪行為は英国で犯罪になる行為すべて（国外の行為でも、英国で行えば犯罪になるものを含む）。詐欺、窃盗、脱税も含む', '金額の下限はない'],
          after: '法律は Proceeds of Crime Act 2002（POCA、犯罪収益法）。'
        },
        {
          title: '主な犯罪は3つ',
          table: { caption: 'POCA 2002 の主な犯罪（principal offences）', head: ['犯罪', '中身'], rows: [['s327 隠匿・変換', '犯罪収益を隠す、偽装する、変換する、移す、国外へ持ち出す'], ['s328 取決めへの関与', '他人が犯罪収益を手に入れ、持ち続け、使うのを助ける取決めに関わる'], ['s329 取得・使用・所持', '犯罪収益を手に入れる、使う、持つ']] },
          after: '3つとも、最長14年の拘禁刑、上限のない罰金、またはその両方。'
        },
        {
          title: '罪にならない場合（抗弁）',
          list: ['行動する前に社内の MLRO か当局へ報告し（authorised disclosure）、同意を得てから進めた','s329 では、十分な対価（adequate consideration）を払って受け取った。例：麻薬の売人にふつうの値段でパンを売ったパン屋', '報告しなかったことに合理的な理由（reasonable excuse）がある'],
          after: '報告先の当局は、英国の国家犯罪対策庁（National Crime Agency、NCA）。'
        },
        {
          title: 'なぜ？ お金の流れを止める',
          paras: ['犯罪の多くはお金のために行われる。盗んだお金や詐欺の利益が使えなければ、犯罪をする意味が小さくなる。', 'だから法律は、犯人だけでなく、お金を隠す人・動かすのを手伝う人・受け取る人も罰する。お金の流れを止めて、犯罪の動機そのものを弱めるのがねらい。会計士や銀行はお金の流れが見える場所にいるので、次のレッスンの報告義務が課される。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「マネロン＝暴力団や麻薬の大金」と思いがちだが、英国法では脱税や小さな詐欺の利益も犯罪収益になり、金額の下限もない。犯罪をした本人が自分の利益を隠しても罪になる。「はっきり知らなかった」も言い訳にならない。疑っていれば足りる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['3つの段階：Placement（預け入れ）→ Layering（隠ぺい）→ Integration（統合）', '主な犯罪：隠匿・変換（s327）、取決めへの関与（s328）、取得・使用・所持（s329）。最長14年', '犯罪収益は、知っているか疑っている犯罪の利益。脱税も含み、金額の下限はない']
        },
        {
          title: '英単語',
          words: [
            ['money laundering', 'マネー ローンダリング', '資金洗浄'],
            ['placement', 'プレイスメント', '預け入れ（第1段階）'],
            ['layering', 'レイヤリング', '隠ぺい（第2段階）'],
            ['integration', 'インテグレイション', '統合（第3段階）'],
            ['criminal property', 'クリミナル プロパティ', '犯罪収益'],
            ['adequate consideration', 'アデクワット コンシダレイション', '十分な対価']
          ]
        }
      ],
      quiz: [
        { q: 'Which stage of money laundering involves passing funds through a series of complex transactions in order to disguise their criminal origin?', choices: ['Placement', 'Layering', 'Integration', 'Tipping off'], answer: 1, explain: '取引を重ねて出どころを隠すのは layering（隠ぺい）。placement は現金を最初に金融の仕組みに入れる段階、integration はきれいに見えるお金として使う段階。tipping off は段階ではなく、報告を相手に知らせる別の犯罪。' },
        { q: 'Tom, a drug dealer, buys a luxury flat using money which now appears to come from a legitimate business. Which stage of money laundering does this represent?', choices: ['Layering', 'Placement', 'Integration', 'Reliance'], answer: 2, explain: '表のお金に見えるようになった資金で資産を買うのは integration（統合）。layering はその前の隠す段階。reliance はマネロン対策で他社の顧客確認に頼ることで、段階ではない。' },
        { q: 'A は、友人 B のお金が詐欺の利益ではないかと疑いながら、B に頼まれて自分の口座で預かり、後で B に返した。A について正しいのは？', choices: ['罪にならない。詐欺をしたのは B だけだから', '罪にならない。疑っただけで、知ってはいなかったから', '主な犯罪（取決めへの関与など）に当たりうる', '内報の罪（tipping off）に当たる'], answer: 2, explain: '他人が犯罪収益を持ち続けるのを助ける取決めに関わっている（s328）。預かれば所持（s329）にも当たりうる。主な犯罪は「疑い」で足りる。本人が詐欺をしていなくても罪になる。内報は報告したことを相手に知らせる罪で、この場面ではない。' },
        { q: 'What is the maximum term of imprisonment, in years, for the principal money laundering offences under the Proceeds of Crime Act 2002?', type: 'number', answer: 14, unit: '年', explain: '隠匿・変換、取決めへの関与、取得・使用・所持の3つは、最長14年の拘禁刑、上限のない罰金、またはその両方。5年は通報しない罪、2年は内報の罪（次のレッスン）。' },
        { q: 'パン屋が、客が麻薬の売人だと知りながら、ふつうの値段でパンを売って代金を受け取った。取得・使用・所持の罪（s329）はどうなる？', choices: ['罪になる。売人だと知っていたから', '罪にならない。十分な対価を払って受け取ったから', '罪になる。金額の下限がないから', '罪にならない。パン屋は規制対象業種ではないから'], answer: 1, explain: 's329 には十分な対価（adequate consideration）の抗弁がある。パンという見合った物を渡して代金を受け取ったので罪にならない。規制対象業種かどうかは主な犯罪の成立とは関係ない（次のレッスンの報告義務に関係する）。' }
      ]
    },
    {
      id: 'B101',
      no: 101,
      title: 'マネロンの通報義務と内報（tipping off）',
      goal: '規制対象業種の通報しない罪、社員から MLRO、MLRO から NCA への報告の流れ、内報の罪とそれぞれの罰則を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F2(a)'],
      slides: [
        {
          title: '見て見ぬふりができない仕事',
          paras: ['コンビニの店員が、毎日同じ客がプリペイドカードを大量に現金で買っていくのに気づいた。気になるが、店員に通報の法的な義務まではない。', '会計士は違う。お客さんの帳簿や送金を見る仕事なので、マネロンに気づきやすい。そこで英国の POCA 2002 は、規制対象業種（regulated sector）の人に「疑ったら報告する」義務を課している。']
        },
        {
          title: '規制対象業種（regulated sector）',
          list: ['銀行などの金融機関', '監査人、外部の会計士、税務アドバイザー', '倒産実務家', '一部の業務をする弁護士、不動産業者、高額の物を現金で売る業者 など'],
          after: '事務所で働く会計士は、ほぼこの中に入る。ACCA の試験では、会計士が主人公の場面で出る。'
        },
        {
          title: '通報しない罪（failure to disclose、s330）',
          list: ['規制対象業種の業務の中で得た情報から', '他人がマネロンをしていると知っている、疑っている、または知る・疑う合理的な理由（reasonable grounds）があるのに', 'できるだけ早く MLRO か NCA に報告しなかった'],
          formula: '罰則：最長5年の拘禁刑、罰金、またはその両方'
        },
        {
          title: '「合理的な理由」は客観テスト',
          paras: ['本人の頭の中だけで判断しない。「同じ立場のふつうの会計士なら疑ったはず」なら、本人が気づかなかったと言っても罪になりうる。主な犯罪（前のレッスン）が「知っているか疑っている」ことを求めるのと違う点。', '抗弁は2つ。報告しなかったことに合理的な理由（reasonable excuse）がある場合。そして、本当に知らず疑ってもいなかった人が、雇い主から法律で求められる研修を受けていなかった場合（客観テストの部分だけ免れる）。']
        },
        {
          title: '報告の流れ',
          svg: `<svg viewBox="0 0 440 236" role="img" aria-label="従業員は社内の報告責任者に報告し、報告責任者が国家犯罪対策庁に疑わしい取引を報告する。顧客に知らせると内報の罪になる" font-size="15"><rect x="20" y="20" width="110" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="47" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">従業員</text><text x="75" y="71" text-anchor="middle" font-size="14" fill="var(--quiet)">疑いを持つ</text><line x1="130" y1="52" x2="158" y2="52" stroke="var(--edge)" stroke-width="1.5"/><polygon points="157,46 165,52 157,58" fill="var(--edge)"/><rect x="165" y="20" width="110" height="64" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="47" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">MLRO</text><text x="220" y="71" text-anchor="middle" font-size="14" fill="var(--ink)">報告責任者</text><line x1="275" y1="52" x2="303" y2="52" stroke="var(--edge)" stroke-width="1.5"/><polygon points="302,46 310,52 302,58" fill="var(--edge)"/><rect x="310" y="20" width="110" height="64" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="365" y="47" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">NCA</text><text x="365" y="71" text-anchor="middle" font-size="14" fill="var(--quiet)">国家犯罪対策庁</text><text x="147" y="108" text-anchor="middle" font-size="14" fill="var(--ink)">内部報告</text><text x="292" y="108" text-anchor="middle" font-size="14" fill="var(--ink)">SAR</text><line x1="75" y1="84" x2="75" y2="150" stroke="var(--edge)" stroke-width="1.5" stroke-dasharray="5 4"/><text x="75" y="124" text-anchor="middle" font-size="18" fill="var(--ink)">×</text><rect x="20" y="150" width="110" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="75" y="184" text-anchor="middle" font-size="16" fill="var(--ink)">顧客</text><text x="146" y="174" fill="var(--ink)">知らせると内報の罪</text><text x="146" y="198" font-size="14" fill="var(--quiet)">（tipping off）</text></svg>`,
          caption: '社員は社内の MLRO に報告すれば、自分の義務を果たしたことになる。NCA に疑わしい取引の報告（SAR）を出すかどうかは MLRO が判断する。'
        },
        {
          title: 'MLRO（マネロン報告責任者）の役割',
          list: ['事務所が指名する担当者（nominated officer）。MLRO（money laundering reporting officer）とも呼ぶ', '社員からの報告を受け、疑いがあると判断したら NCA に SAR（suspicious activity report）を出す', 'MLRO も、出すべきなのに出さなければ罪になる（s331、最長5年）', '主な犯罪に当たる取引を進める前は NCA の同意（consent）を求める。7営業日以内に断られなければ同意があったとみなす。断られたら、さらに31日待つ']
        },
        {
          title: '内報の罪（tipping off、s333A）',
          list: ['規制対象業種の人が', '報告をしたこと、または捜査が考えられている・行われていることを', '捜査を妨げるおそれのある形で、他人に知らせる'],
          formula: '罰則：最長2年の拘禁刑、罰金、またはその両方',
          after: '同じ事務所の中で MLRO や同僚に相談するのは、内報に当たらない。'
        },
        {
          title: 'なぜ？ 報告と沈黙はセット',
          paras: ['「あなたのことを当局に報告しました」と顧客に伝えたらどうなるか。顧客はすぐにお金を海外へ移し、書類を捨てる。せっかくの報告がむだになる。', '気づいた人には報告させ、相手には知らせない。この2つをセットにすることで、捜査が間に合うようにしている。顧客との契約を断るときも、報告したことは言わない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '日本の感覚だと、顧客に理由を正直に説明するのが誠実に見える。しかし報告や捜査のことを伝えると内報の罪になる。また「社員は自分で NCA に報告しなければならない」も誤り。社内の MLRO に報告すれば本人の義務は果たせる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['規制対象業種の人は、知る・疑う（合理的な理由がある場合を含む）とき、できるだけ早く MLRO か NCA に報告する。怠ると最長5年', '社員 → MLRO（内部報告）→ NCA（SAR）の順で報告が流れる', '報告や捜査を相手に知らせると内報の罪。最長2年']
        },
        {
          title: '英単語',
          words: [
            ['regulated sector', 'レギュレイテッド セクター', '規制対象業種'],
            ['failure to disclose', 'ディスクロウズ', '通報しない罪'],
            ['nominated officer / MLRO', 'ノミネイテッド オフィサー', 'マネロン報告責任者'],
            ['suspicious activity report (SAR)', 'サスピシャス アクティビティ', '疑わしい取引の報告'],
            ['National Crime Agency (NCA)', 'ナショナル クライム エージェンシー', '英国の国家犯罪対策庁'],
            ['tipping off', 'ティッピング オフ', '内報（報告や捜査を相手に知らせること）']
          ]
        }
      ],
      quiz: [
        { q: 'Jane, an accountant in practice, suspects that a client is laundering money. To whom should she report her suspicion in order to fulfil her own legal duty?', choices: ['The client', 'Her firm\'s money laundering reporting officer (MLRO)', 'The client\'s bank', 'The firm\'s external auditor'], answer: 1, explain: '社員は社内の MLRO（または直接 NCA）に報告すれば義務を果たせる。顧客に伝えると内報の罪になりうる。顧客の銀行や外部の監査人は報告先ではない。' },
        { q: 'After reporting to the MLRO, Jane tells the client that she has made a report and that the authorities may investigate his affairs. Which offence may Jane have committed?', choices: ['Failure to disclose', 'Insider dealing', 'Tipping off', 'Bribery'], answer: 2, explain: '報告したことや捜査のおそれを相手に知らせて、捜査を妨げるおそれを生んだので内報（tipping off）。Jane は報告はしているので、通報しない罪ではない。' },
        { q: 'What is the maximum term of imprisonment, in years, for failing to disclose knowledge or suspicion of money laundering in the regulated sector?', type: 'number', answer: 5, unit: '年', explain: '通報しない罪は最長5年。主な犯罪（14年）や内報の罪（2年）と混同しやすいので、14・5・2 をセットで覚える。' },
        { q: '規制対象業種の会計士が、顧客の送金にマネロンの疑いを持たなかった。しかし、同じ立場のふつうの会計士なら疑ったはずの状況だった。どうなる？', choices: ['罪にならない。本人が疑っていない以上、責任はない', '通報しない罪になりうる。合理的な理由は客観的に判断されるため', '罪にならない。マネロンをしたのは顧客だから', '内報の罪になる'], answer: 1, explain: '規制対象業種の通報義務には「知る・疑う合理的な理由がある」という客観テストが入っている。気づくべきだったなら罪になりうる。内報は相手に知らせる罪なので、この場面ではない。' },
        { q: 'Which of the following would NOT amount to tipping off?', choices: ['Telling the client that a suspicious activity report has been made', 'Warning the client that the police are investigating his affairs', 'Telling the client\'s business partner that an investigation is being carried out', 'An employee discussing the suspicion with the firm\'s MLRO'], answer: 3, explain: '同じ事務所の中で MLRO に相談するのは、報告の正しい道で、内報に当たらない。顧客本人だけでなく、その仕事仲間に知らせても、捜査を妨げるおそれがあれば内報になる。' },
        { q: 'MLRO が社員から報告を受け、マネロンの疑いがあると判断した。MLRO が次にすべきことは？', choices: ['顧客に事情を聞き、報告があったことを伝える', '何もしない。社員が報告した時点で、事務所の全員の義務は終わる', 'NCA に疑わしい取引の報告（SAR）を出す', '監査報告書に書く'], answer: 2, explain: 'MLRO は疑いがあれば NCA に SAR を出す。出さなければ MLRO 自身が罪になる（s331）。顧客に伝えるのは内報。' }
      ]
    },
    {
      id: 'B102',
      no: 102,
      title: 'マネロン対策の5つの仕組み',
      goal: '事務所が整えるマネロン対策の5つの方針・手続（リスク管理、内部統制、顧客の確認、依拠と記録の保存、モニタリングと周知）を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F2(a)'],
      slides: [
        {
          title: 'マンションの防犯と同じ',
          paras: ['マンションの防犯を考える。まず、どこから泥棒が入りやすいかを調べる。次に管理人を置き、出入りする人の顔を確かめ、記録を残し、ルールが守られているか見回る。', '会計事務所のマネロン対策も同じ形をしている。英国では Money Laundering Regulations 2017（MLR 2017、マネロン規則）が、規制対象業種に方針・統制・手続（policies, controls and procedures）を求めている。']
        },
        {
          title: '5つの仕組み',
          table: { caption: 'シラバスの (i)〜(v)', head: ['仕組み', '中身'], rows: [['(i) リスク管理の実務', 'どこに危険があるかを評価し、対策の強さを決める'], ['(ii) 内部統制', '責任者と MLRO を置き、社員を審査し、独立した監査をする'], ['(iii) 顧客の確認（CDD）', '顧客と実質的支配者を確かめ、取引を見続ける'], ['(iv) 依拠と記録の保存', '他社の確認を使うときのルールと、5年の記録保存'], ['(v) モニタリングと周知', '守られているかを見て直し、社員に伝えて研修する']] },
          after: 'この5項目は、MLR 2017 の規則19条が挙げる項目と同じ並び。'
        },
        {
          title: '(i) リスク管理：リスクベース・アプローチ',
          list: ['事務所全体のリスク評価（risk assessment）を書面で作り、最新に保つ', '見る要素：顧客、国や地域、商品・サービス、取引、取引の経路（対面か非対面か など）', '危険が高い所に手間をかけ、低い所は軽くする（risk-based approach）'],
          after: '方針は事務所の大きさと性質に見合ったもの（proportionate）にし、上級の経営陣が承認する。'
        },
        {
          title: '(ii) 内部統制（internal controls）',
          list: ['取締役会か上級経営陣の1人を、規則を守る責任者にする', '社員を審査する（screening）。能力と誠実さを確かめる', '独立した監査の機能（independent audit function）で、方針が十分で効果があるかを調べる', '報告を受ける担当者（nominated officer＝MLRO）を指名する'],
          after: '最初の3つは、事務所の大きさと性質から見て適切な場合に求められる。社員がおらず、ほかの人と組んで業務もしない1人の事務所なら、責任者も MLRO も要らない。'
        },
        {
          title: '(iii) 顧客の確認（customer due diligence、CDD）',
          list: ['顧客が誰かを確かめ（identify）、信頼できる独立した書類で裏付ける（verify）', '実質的支配者（beneficial owner）を確かめる。例：株式や議決権の25%超を持つ人', '取引の目的と性質を理解する', '取引が始まった後も見続ける（ongoing monitoring）'],
          after: '行う時：取引関係を始める時、一定額以上の一回限りの取引、マネロンの疑いがある時、前の確認情報が疑わしい時。'
        },
        {
          title: '確認の強さを変える',
          table: { caption: 'リスクに合わせた3段階', head: ['種類', '使う場面'], rows: [['厳格な確認（EDD）', '高リスクの国の顧客、PEP、複雑で異常に大きい取引、偽の書類が出たとき'], ['通常の確認（CDD）', 'ふつうの顧客'], ['簡易な確認（SDD）', 'リスクが低いと判断したとき（上場会社、公的機関など）']] },
          after: 'PEP＝重要な公的地位にある人とその家族・親しい人。上級経営陣の承認と、財産と資金の出どころの確認が要る。確認できない顧客とは、取引を始めない・続けない。'
        },
        {
          title: '(iv) 依拠（reliance）と記録の保存（record keeping）',
          list: ['依拠：銀行など、ほかの規制対象の会社がした顧客の確認を使ってよい', 'ただし、確認に不備があれば責任は自分の事務所に残る', '確認の情報はすぐ受け取る。書類の写しも、求めたらすぐ（immediately on request）もらえる取決めをし、相手にも5年間保存させる','顧客の確認の書類と取引の記録は、取引関係が終わってから5年間保存する。その後、個人データは原則として削除する']
        },
        {
          title: '(v) モニタリングと社内への周知',
          list: ['方針・統制・手続が守られているかを定期的に点検し、見直す（monitoring）', '方針を書面にし、社員や海外の支店・子会社に伝える（internal communication）', '社員にマネロン対策の法律とデータ保護の法律を知らせ、疑わしい取引の見分け方と対応を定期的に研修する（training）'],
          after: '研修は前のレッスンとつながる。研修をしなければ事務所の規則違反になり、社員も疑わしい取引に気づけない。'
        },
        {
          title: 'なぜ？ 気づける事務所を作る',
          paras: ['報告義務は、社員が「おかしい」と気づけて初めて働く。顧客が誰か分からず、記録もなければ、気づくことも後で当局が追うこともできない。5つの仕組みは、気づく力・報告の道・追える跡・それを保つ点検を事務所の中に作るためにある。'],
          note: { kind: 'warn', text: '「顧客の確認は最初に1回すれば終わり」は誤り。取引中も見続ける。また、銀行の確認に依拠しても責任は移らない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['5つの仕組み：リスク管理、内部統制、顧客の確認、依拠と記録の保存、モニタリングと周知', 'CDD＝顧客と実質的支配者を確かめ、目的を理解し、見続ける。高リスクは厳格な確認、低リスクは簡易な確認', '依拠しても責任は残る。記録は取引関係の終了から5年保存']
        },
        {
          title: '英単語',
          words: [
            ['customer due diligence (CDD)', 'デュー ディリジェンス', '顧客の確認'],
            ['enhanced due diligence (EDD)', 'エンハンスト', '厳格な確認'],
            ['simplified due diligence (SDD)', 'シンプリファイド', '簡易な確認'],
            ['beneficial owner', 'ベネフィシャル オーナー', '実質的支配者'],
            ['politically exposed person (PEP)', 'ポリティカリー エクスポウズド', '重要な公的地位にある人'],
            ['reliance', 'リライアンス', '依拠（他社の確認を使うこと）'],
            ['risk-based approach', 'リスク ベイスト アプローチ', 'リスクに応じて対策の強さを変える考え方']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT one of the policies, controls and procedures that a firm in the regulated sector must have in place to prevent money laundering?', choices: ['Customer due diligence', 'Reliance and record keeping', 'Obtaining the client\'s consent before making a suspicious activity report', 'Internal controls'], answer: 2, explain: '顧客の同意を取ってから報告するのは、5つの仕組みに入らないうえに、相手に知らせることになり内報の罪になりうる。ほかの3つはシラバスの5項目に入っている。' },
        { q: 'An accountancy firm takes on a new client who is a senior government minister of another country. Which level of customer due diligence should the firm apply?', choices: ['Simplified due diligence', 'No due diligence, because the client is a public official', 'Standard due diligence at the start of the relationship only', 'Enhanced due diligence'], answer: 3, explain: '外国の大臣は PEP（重要な公的地位にある人）に当たるので、厳格な確認（EDD）が必要。上級経営陣の承認と、財産と資金の出どころの確認をする。公務員だから確認を省く、は逆。' },
        { q: 'For how many years must customer due diligence records normally be kept after the business relationship has ended?', type: 'number', answer: 5, unit: '年', explain: '顧客の確認の書類と取引の記録は、取引関係が終わってから5年間保存する。' },
        { q: '会計事務所が、銀行がすでに行った顧客の確認に依拠（reliance）して新しい顧客を受け入れた。後で、確認に不備が見つかった。責任は誰にある？', choices: ['依拠した会計事務所に残る', '銀行だけが負う', '顧客だけが負う', '誰も負わない。依拠は規則で認められているから'], answer: 0, explain: '依拠は認められているが、責任までは移らない。不備の責任は依拠した側の事務所に残る。だから依拠する相手の確認の質も見ておく必要がある。' },
        { q: '顧客の確認（CDD）について正しいのは？', choices: ['契約の最初に1回確かめれば、その後は不要', '取引関係が始まった後も、取引を見続ける必要がある', '会社の顧客なら会社だけ確かめればよく、実質的支配者は不要', '確認ができなくても、手数料が払われれば取引を始めてよい'], answer: 1, explain: 'CDD には継続的な監視（ongoing monitoring）が含まれる。会社が顧客なら、株式や議決権の25%超を持つ人などの実質的支配者も確かめる。確認ができない顧客とは取引を始めない。' }
      ]
    },
    {
      id: 'B103',
      no: 103,
      title: '贈収賄と腐敗',
      goal: '腐敗の意味と Bribery Act 2010 の4つの犯罪（贈賄、収賄、外国公務員への贈賄、営利団体の防止懈怠）、抗弁、罰則を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:F3(a)'],
      slides: [
        {
          title: '「よろしく」の封筒',
          paras: ['取引先の購買部長に、契約をもらうお礼として旅行券を渡した。部長は会社のためではなく、旅行券のために業者を選ぶことになる。', '任された権力や立場を、自分の得のために使う。これが腐敗（corruption）で、よく使われる定義は abuse of entrusted power for private gain。その代表が贈収賄（bribery）。英国では Bribery Act 2010（贈収賄法）が取り締まる。']
        },
        {
          title: '4つの犯罪',
          table: { caption: 'Bribery Act 2010', head: ['犯罪', '中身'], rows: [['s1 贈賄（bribing）', '相手が仕事を不適切に行うように、またはその見返りに、金銭などの利益を申し出る・約束する・与える'], ['s2 収賄（being bribed）', '仕事を不適切に行う見返りに、利益を求める・受け取ると合意する・受け取る'], ['s6 外国公務員への贈賄', 'ビジネスを得るため、外国公務員に影響を与えようとして利益を申し出る・約束する・与える'], ['s7 営利団体の防止懈怠', '関係者が会社のために贈賄をしたのを防げなかった']] },
          note: { kind: 'warn', text: '日本の刑法の贈収賄は主に公務員が相手。英国法では民間の会社の担当者への賄賂も罪になり、申し出や約束だけでも成立する。' }
        },
        {
          title: '「不適切に行う」とは',
          paras: ['相手の仕事には、誠実に、公平に、または信頼に応えて行うという期待がある。その期待に反することが不適切な行い（improper performance）。', '判断の基準は、英国のふつうの人が何を期待するか。「現地ではよくある習慣だ」は考えに入れない。現地の成文法が認めている場合だけは別。']
        },
        {
          title: '外国公務員への贈賄（s6）',
          list: ['相手は外国の公務員。公的な立場での判断に影響を与えるねらい', 'ビジネスや取引上の有利を得る・保つ目的', '不適切な行いは要件ではない。影響を与えようとすれば足りる', '代理人などを通して渡しても同じ'],
          after: 's6 は渡す側の罪。受け取った外国公務員は、その国の法律で裁かれる。'
        },
        {
          title: '営利団体の防止懈怠（s7）',
          list: ['対象：英国で設立された会社・パートナーシップ、または英国で事業の一部を行う会社など', '関係者（associated person）＝会社のために業務をする人。社員、代理人、子会社など', '関係者が会社のビジネスのために贈賄（s1 か s6）をすると、会社の罪になる', '会社が知らなくても罪になる（strict liability）'],
          formula: '唯一の抗弁＝適切な手続（adequate procedures）を整えていた'
        },
        {
          title: '適切な手続の6つの原則',
          paras: ['英国司法省のガイダンスが、会社が整えるべき手続の考え方を6つ示している。'],
          list: ['釣り合いのとれた手続（proportionate procedures）', '経営トップの関与（top-level commitment）', 'リスク評価（risk assessment）', '取引先などの確認（due diligence）', '周知と研修（communication）', 'モニタリングと見直し（monitoring and review）']
        },
        {
          title: '罰則と責任',
          list: ['個人（s1・s2・s6）：最長10年の拘禁刑、上限のない罰金、またはその両方', '会社：上限のない罰金。s7 も上限のない罰金', '会社自身の s1・s2・s6：上級管理者（senior manager）が権限の範囲で行えば会社も罪になる（2023年の改正）','会社が s1・s2・s6 の罪を犯し、それに同意・黙認した取締役などの上級役員も罪になる（s14）', '国外での行為も、英国と強いつながりのある人や会社なら罰せられる']
        },
        {
          title: 'ファシリテーション・ペイメントと接待',
          paras: ['ファシリテーション・ペイメント（facilitation payment）は、通関などのふつうの手続を早めてもらうために役人に払う少額のお金。英国法では例外扱いされず、賄賂として罪になる。命や身体への危険から逃れるための支払いには、強迫（duress）の抗弁がありうる。', '接待や贈り物は、関係づくりのための合理的で釣り合いのとれたものなら罪にならない。豪華すぎて判断をゆがめるねらいがあれば賄賂になる。']
        },
        {
          title: 'なぜ？ 市場の公平さを守る',
          paras: ['賄賂で契約が決まると、品質や価格で勝負した会社が負ける。買う側の会社や国民は、高くて質の悪いものをつかまされ、市場と行政への信頼が崩れる。', 's7 で会社に責任を負わせるのは、賄賂を渡すのが社員や代理人でも、得をするのは会社だから。会社に「防ぐ仕組み」を作らせ、組織ぐるみの見て見ぬふりをなくすねらいがある。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['4つの犯罪：贈賄（s1）、収賄（s2）、外国公務員への贈賄（s6）、営利団体の防止懈怠（s7）', 's7 は会社が知らなくても成立し、唯一の抗弁は適切な手続（adequate procedures）', '個人は最長10年、会社は上限のない罰金。ファシリテーション・ペイメントも罪']
        },
        {
          title: '英単語',
          words: [
            ['bribery / bribe', 'ブライバリー / ブライブ', '贈収賄 / 賄賂'],
            ['corruption', 'コラプション', '腐敗'],
            ['improper performance', 'インプロパー パフォーマンス', '仕事の不適切な遂行'],
            ['foreign public official', 'フォーリン パブリック オフィシャル', '外国公務員'],
            ['associated person', 'アソシエイテッド パーソン', '会社のために業務をする関係者'],
            ['adequate procedures', 'アデクワット プロシージャーズ', '適切な手続（s7 の抗弁）'],
            ['facilitation payment', 'ファシリテイション ペイメント', '手続を早めるための少額の支払い']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Bribery Act 2010, which of the following is a defence for a commercial organisation charged with failing to prevent bribery?', choices: ['That its senior management did not know about the bribe', 'That it had adequate procedures in place designed to prevent bribery', 'That the bribe was paid by an agent rather than an employee', 'That the bribe was paid outside the UK'], answer: 1, explain: 's7 は会社が知らなくても成立する（strict liability）ので、経営陣が知らなかったは抗弁にならない。代理人も関係者（associated person）に入る。国外での贈賄も対象。唯一の抗弁は適切な手続。' },
        { q: 'X Ltd pays a small sum to a customs official in another country to speed up the routine clearance of its goods. Under the Bribery Act 2010, this payment is:', choices: ['Lawful, because facilitation payments are exempt', 'Lawful, because the payment was made outside the UK', 'A bribe, because facilitation payments are not exempt', 'Lawful, because the amount was small'], answer: 2, explain: 'ふつうの手続を早めるための少額の支払いはファシリテーション・ペイメント。英国法では例外がなく、賄賂になる。国外の行為も英国とつながりのある会社なら罰せられ、金額の下限もない。' },
        { q: 'Which of the following statements about the offence of bribing a foreign public official under the Bribery Act 2010 is correct?', choices: ['It is not necessary to prove that the official was intended to perform his functions improperly', 'The foreign official commits the same offence by accepting the payment', 'The offence is committed only where the payment is actually made, not merely offered', 'The offence applies only to payments made directly, not through an agent'], answer: 0, explain: 's6 は、公的な立場での判断に影響を与えようとすれば足り、不適切な行いは要件ではない。s6 は渡す側の罪で、受け取る外国公務員の罪ではない。申し出や約束でも成立し、代理人を通しても同じ。' },
        { q: 'What is the maximum term of imprisonment, in years, for an individual convicted of bribing another person under the Bribery Act 2010?', type: 'number', answer: 10, unit: '年', explain: '個人の贈賄・収賄・外国公務員への贈賄は、最長10年の拘禁刑、上限のない罰金、またはその両方。マネロンの主な犯罪（14年）と混同しない。' },
        { q: '英国の会社の営業担当者が、民間の取引先の購買担当者に「契約をくれたら高級時計を贈る」と申し出た。購買担当者は断った。営業担当者は？', choices: ['罪にならない。時計を実際には渡していない', '罪にならない。相手が公務員ではない', '収賄（s2）の罪になる', '贈賄（s1）の罪になりうる'], answer: 3, explain: '贈賄は申し出だけで成立し、民間の相手も対象。収賄（s2）は求めたり受け取ったりする側の罪なので、営業担当者には当たらない。' },
        { q: '取引先の担当者を、ふつうの水準のレストランでの食事に招いた。英国法ではどう扱われる？', choices: ['合理的で釣り合いのとれた接待なら罪にならない', 'どんな接待も賄賂として罪になる', '相手が民間人なら、どんなに豪華でも罪にならない', '食事の前に当局へ届け出れば、どんな接待でも罪にならない'], answer: 0, explain: '関係づくりのための合理的で釣り合いのとれた接待は罪にならない。豪華すぎて判断をゆがめるねらいがあれば、民間の相手でも賄賂になる。届け出の制度はない。' }
      ]
    }
  ],
  cards: [
    { id: 'B100-1', lesson: 'B100', q: 'マネーロンダリングの3つの段階は？', a: 'Placement（預け入れ）→ Layering（隠ぺい）→ Integration（統合）' },
    { id: 'B100-2', lesson: 'B100', q: 'Layering とは？', a: '送金や売買を重ねて、お金の出どころを追えなくする段階' },
    { id: 'B100-3', lesson: 'B100', q: 'POCA 2002 の主な3つの犯罪は？', a: '隠匿・変換（s327）、取決めへの関与（s328）、取得・使用・所持（s329）' },
    { id: 'B100-4', lesson: 'B100', q: 'マネロンの主な犯罪の罰則の上限は？', a: '最長14年の拘禁刑、上限のない罰金、またはその両方' },
    { id: 'B100-5', lesson: 'B100', q: '犯罪収益（criminal property）の条件は？', a: '犯罪行為の利益で、本人が知っているか疑っていること。脱税も含み、下限なし' },
    { id: 'B100-6', lesson: 'B100', q: 'なぜマネロンを罰するのか？', a: '犯罪の利益を使えなくして、犯罪の動機そのものを弱めるため' },
    { id: 'B101-1', lesson: 'B101', q: '規制対象業種の通報義務（s330）の中身は？', a: '業務中に知る・疑う（合理的な理由を含む）とき、できるだけ早く MLRO か NCA に報告' },
    { id: 'B101-2', lesson: 'B101', q: '通報しない罪の罰則の上限は？', a: '最長5年の拘禁刑、罰金、またはその両方' },
    { id: 'B101-3', lesson: 'B101', q: 'MLRO の役割は？', a: '社員の報告を受け、疑いがあれば NCA に SAR を出す' },
    { id: 'B101-4', lesson: 'B101', q: '内報（tipping off）とは？罰則は？', a: '報告や捜査を知らせて捜査を妨げるおそれを生むこと。最長2年' },
    { id: 'B101-5', lesson: 'B101', q: 'なぜ内報を罰するのか？', a: '相手がお金を移し証拠を消すのを防ぎ、捜査を間に合わせるため' },
    { id: 'B101-6', lesson: 'B101', q: '「合理的な理由」のテストとは？', a: 'ふつうの同業者なら疑ったはずなら、本人が気づかなくても罪になりうる' },
    { id: 'B102-1', lesson: 'B102', q: 'マネロン対策の5つの仕組みは？', a: 'リスク管理、内部統制、顧客の確認、依拠と記録の保存、モニタリングと周知' },
    { id: 'B102-2', lesson: 'B102', q: 'CDD でする4つのことは？', a: '顧客の確認と裏付け、実質的支配者の確認、目的の理解、継続的な監視' },
    { id: 'B102-3', lesson: 'B102', q: '厳格な確認（EDD）が必要な例は？', a: 'PEP、高リスクの国の顧客、複雑で異常に大きい取引' },
    { id: 'B102-4', lesson: 'B102', q: '他社の確認に依拠したときの責任は？', a: '依拠した事務所に残る。責任は移らない' },
    { id: 'B102-5', lesson: 'B102', q: '顧客の確認の記録の保存期間は？', a: '取引関係が終わってから5年' },
    { id: 'B102-6', lesson: 'B102', q: 'リスクベース・アプローチとは？', a: '危険の高い所に手間をかけ、低い所は軽くする考え方' },
    { id: 'B102-7', lesson: 'B102', q: '内部統制の例は？', a: '責任者の任命、社員の審査、独立した監査、MLRO の指名' },
    { id: 'B103-1', lesson: 'B103', q: 'Bribery Act 2010 の4つの犯罪は？', a: '贈賄（s1）、収賄（s2）、外国公務員への贈賄（s6）、営利団体の防止懈怠（s7）' },
    { id: 'B103-2', lesson: 'B103', q: 's7（防止懈怠）の唯一の抗弁は？', a: '贈賄を防ぐ適切な手続（adequate procedures）を整えていたこと' },
    { id: 'B103-3', lesson: 'B103', q: '適切な手続の6つの原則は？', a: '釣り合い、トップの関与、リスク評価、取引先の確認、周知と研修、モニタリング' },
    { id: 'B103-4', lesson: 'B103', q: 'ファシリテーション・ペイメントの扱いは？', a: '英国法では例外がなく、賄賂として罪になる' },
    { id: 'B103-5', lesson: 'B103', q: '贈収賄の罰則は？', a: '個人は最長10年の拘禁刑・上限のない罰金。会社は上限のない罰金' },
    { id: 'B103-6', lesson: 'B103', q: '腐敗（corruption）の意味は？', a: '任された権力を私的な利益のために濫用すること' },
    { id: 'B103-7', lesson: 'B103', q: 'なぜ s7 で会社を罰するのか？', a: '贈賄で得をするのは会社なので、防ぐ仕組みを作らせるため' }
  ]
});
