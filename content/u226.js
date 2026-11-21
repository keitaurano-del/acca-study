(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 226,
  part: 10,
  partTitle: '知的財産法',
  lessons: [
    {
      id: 'B109',
      no: 109,
      title: '知的財産とは：権利の全体像',
      goal: '知的財産権の種類ごとに、何を守るか、登録が要るか、どれくらい続くかを区別できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: 'ラーメン屋の財産は何か',
          paras: ['ある店主が、何年もかけてスープを完成させ、店の名前を有名にした。隣に同じ名前・同じ看板の店ができたら、客を取られる。自分で考えた麺の機械を勝手にまねされても困る。', '名前、評判、発明は、手で触れる「物」ではない。頭で生み出した価値になる。法律はこれを知的財産（intellectual property, IP）として守る。']
        },
        {
          title: '知的財産も「財産」になる',
          list: ['形のない財産（intangible property）。土地や機械と同じように持ち主がいる', '売れる: 譲渡（assignment）。著作権・特許・登録商標の譲渡は、書面で譲る側が署名しないと効力がない', '貸せる: 利用の許諾（licence）。独占的（exclusive）にも、ほかの人と一緒（non-exclusive）にも許せる', '国ごとの権利（territorial）。英国の権利は英国の中だけで効く']
        },
        {
          title: '英国の知的財産権の地図',
          table: { caption: '権利ごとの比較', head: ['権利', '守るもの', '登録と期間'], rows: [['著作権（copyright）', '作品の表現（文章・音楽・絵・ソフトウェア）', '登録なし。作者の死後70年'], ['特許（patent）', '新しい発明（仕組み・製法）', '登録が必要。出願から最長20年'], ['商標（trade mark）', '商品・サービスの目印（名前・ロゴ）', '登録が必要。10年ごとの更新で無期限'], ['意匠（design）', '製品の見た目（形・模様）', '登録意匠は最長25年。非登録は最長15年'], ['パッシング・オフ（passing off）', '評判（goodwill）へのただ乗りを防ぐ', '登録なし。評判がある限り'], ['会社名の規制', 'まぎらわしい会社名を防ぐ', '会社の登記の制度（B061）']] }
        },
        {
          title: '登録が要るか、要らないか',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="登録が必要な知的財産権と自動で生まれる知的財産権の比較" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">登録が要る権利・要らない権利</text><rect x="20" y="50" width="190" height="196" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="80" text-anchor="middle" font-weight="600" fill="var(--ink)">登録が必要</text><text x="115" y="116" text-anchor="middle" fill="var(--ink)">特許</text><text x="115" y="148" text-anchor="middle" fill="var(--ink)">商標</text><text x="115" y="180" text-anchor="middle" fill="var(--ink)">登録意匠</text><text x="115" y="226" text-anchor="middle" fill="var(--quiet)">UKIPO に出願</text><rect x="230" y="50" width="190" height="196" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="325" y="80" text-anchor="middle" font-weight="600" fill="var(--ink)">自動で生まれる</text><text x="325" y="116" text-anchor="middle" fill="var(--ink)">著作権</text><text x="325" y="148" text-anchor="middle" fill="var(--ink)">非登録の意匠権</text><text x="325" y="180" text-anchor="middle" fill="var(--ink)">パッシング・オフ</text><text x="325" y="226" text-anchor="middle" fill="var(--quiet)">作った・使った時点</text><text x="220" y="284" text-anchor="middle" fill="var(--quiet)">登録が要る権利は、先に出願した人が強い</text></svg>`,
          caption: '登録先は英国知的財産庁（UK Intellectual Property Office、UKIPO）。会社の登記所（Companies House）とは別の役所になる。'
        },
        {
          title: '根拠になる法律',
          paras: ['K3 Global のシラバスは国を指定していないが、この講座では英国（イングランド）の法律をモデルにする。'],
          list: ['著作権と非登録の意匠権: Copyright, Designs and Patents Act 1988（CDPA）', '特許: Patents Act 1977', '商標: Trade Marks Act 1994', '登録意匠: Registered Designs Act 1949', 'パッシング・オフ: 法律の条文ではなく、判例（コモン・ロー）が作った不法行為（tort）']
        },
        {
          title: '例題: 1つの商品に、いくつもの権利',
          example: {
            problem: 'Hana Ltd が新しい水筒を発売する。(1) 中の新しい保温の仕組み、(2) 水筒の独特な丸い形、(3) 商品名「AquaHana」、(4) 説明書の文章と写真。それぞれ主にどの権利で守る？',
            steps: ['(1) 新しい技術的な仕組みは、発明として特許で守る', '(2) 製品の見た目（形）は、意匠で守る。登録すれば最長25年', '(3) 商品の出所を示す名前は、商標で守る。登録していなければパッシング・オフに頼る', '(4) 文章と写真は、作った時点で著作権が自動的に生まれる'],
            answer: '(1) 特許、(2) 意匠、(3) 商標、(4) 著作権'
          }
        },
        {
          title: 'なぜ？ 独占を認める理由と、期間がある理由',
          paras: ['時間とお金をかけた成果を、すぐにまねされたら、誰も新しいものを作らなくなる。だから一定の独占を認める。', 'しかし、独占が永遠に続くと競争が止まり、社会がその成果を使えない。だから権利ごとに条件と期間を決めて、バランスをとる。特許は「発明を公開する代わりに20年の独占」。商標は客が出所を見分ける目印なので、使い続ける限り更新できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'アイデアそのものは、どの権利でも守られない。著作権が守るのは表現、特許が守るのは条件を満たした発明だけ。また、英国には著作権の登録制度がない。日本には文化庁の登録制度があるが、日本でも権利の発生に登録は不要。「登録しないと著作権がない」と答えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['登録が必要なのは特許・商標・登録意匠。著作権・非登録の意匠権・パッシング・オフは登録なしで生まれる', '期間: 著作権は作者の死後70年、特許は出願から20年、商標は10年ごとに更新で無期限、登録意匠は最長25年', '知的財産は財産。譲渡は書面と署名、利用は許諾（licence）。英国の権利は英国だけで効く']
        },
        {
          title: '英単語',
          words: [
            ['intellectual property (IP)', 'インテレクチュアル プロパティ', '知的財産'],
            ['registered / unregistered right', '', '登録が必要な権利 / 登録なしで生まれる権利'],
            ['assignment', 'アサインメント', '譲渡（書面と署名が必要）'],
            ['licence', 'ライセンス', '利用の許諾'],
            ['UK Intellectual Property Office (UKIPO)', '', '英国知的財産庁'],
            ['passing off', 'パッシング オフ', '他人の商品・事業と誤認させる不法行為']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following intellectual property rights arises automatically in the UK, without any need for registration?', choices: ['A patent', 'Copyright', 'A registered trade mark', 'A registered design'], answer: 1, explain: '著作権は、作品を作って記録した時点で自動的に生まれる。英国には著作権の登録制度がない。特許・登録商標・登録意匠は、UKIPO に出願して登録されて初めて権利になる。' },
        { q: 'A company has developed a new and inventive process for manufacturing glass. Which intellectual property right is most appropriate to protect the process itself?', choices: ['Copyright', 'A trade mark', 'A patent', 'Passing off'], answer: 2, explain: '新しい技術的な製法は特許で守る。著作権が守るのは製法を説明した文章の表現だけで、製法そのものではない。商標とパッシング・オフは名前や評判（出所の目印）を守るもの。' },
        { q: 'ある会社は、自社の商品名を商標登録していない。他社がまぎらわしい名前で似た商品を売り始めた。会社が頼れる可能性が最も高いものはどれ？', choices: ['パッシング・オフ（評判へのただ乗りを止める不法行為）', '特許', '著作権の登録', '何も頼れない。登録していない名前は守られない'], answer: 0, explain: '登録していない商標は、商標法（Trade Marks Act 1994）では守られないが、パッシング・オフの訴えで守られうる（s2(2)）。評判（goodwill）、誤認させる表示、損害が必要になる（詳しくは B114）。' },
        { q: 'Which of the following statements about the assignment of a UK copyright, patent or registered trade mark is correct?', choices: ['It may be made orally, provided that the price has been paid', 'It is effective only once it is registered at Companies House', 'It must be in writing and signed by or on behalf of the assignor', 'These rights cannot be transferred; they can only be licensed'], answer: 2, explain: '著作権（CDPA s90(3)）、特許（Patents Act 1977 s30(6)）、登録商標（TMA 1994 s24(3)）とも、譲渡は書面で、譲る側（または代理人）が署名しないと効力がない。知的財産は財産なので、譲渡も許諾もできる。' },
        { q: '期間の組合せとして正しいものはどれ？', choices: ['商標: 登録から20年で、更新はできない', '著作権（小説）: 発表から20年', '登録意匠: 最長10年', '特許: 出願から最長20年'], answer: 3, explain: '特許は出願日から最長20年。商標は10年ごとに何度でも更新できる。小説の著作権は作者の死後70年（死亡した年の末から）。登録意匠は5年ごとの更新で最長25年。' }
      ]
    },
    {
      id: 'B110',
      no: 110,
      title: '著作権',
      goal: '著作権が何を、いつから、いつまで、誰のために守り、何が侵害になるかを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: 'ブログに書いた旅行記',
          paras: ['ある人が旅行記をブログに書いた。登録も申請もしていないが、書いた瞬間から、その文章の著作権はその人のものになる。他人が丸ごとコピーして自分の名前で本にすれば、やめさせられる。', 'ただ、「家族で南の島を旅する」という企画（アイデア）自体は、誰でも同じテーマで書ける。守られるのは、その人の書き方（表現）だけ。']
        },
        {
          title: '何が守られるか（CDPA s1）',
          table: { caption: '著作権の対象', head: ['種類', '例'], rows: [['文芸の著作物（literary）', '小説、記事、報告書、コンピュータ・プログラム、データベース'], ['演劇（dramatic）', '脚本、ダンスの振付'], ['音楽（musical）', '曲（歌詞は文芸の著作物）'], ['美術（artistic）', '絵、写真、彫刻、建物、地図'], ['録音・映画・放送', 'CD の音源、映画、テレビ放送'], ['版面（typographical arrangement）', '出版物の文字のレイアウト']] },
          after: '文芸・演劇・音楽・美術は「独自の（original）」もの、つまり作者自身の知的な創作であることが条件。文芸・演劇・音楽は、紙やファイルなどに記録されて初めて守られる（s3(2)）。'
        },
        {
          title: '自動的に生まれ、表現だけを守る',
          paras: ['著作権は、作品を作って記録した時点で自動的に生まれる。英国には登録の制度がない。© の表示も必要ない（表示は「権利があります」という警告として役に立つだけ）。', 'Baigent v Random House（2007）: 小説『ダ・ヴィンチ・コード』は、先に出た本の歴史上の説やテーマを使っていたが、侵害ではないとされた。アイデアや事実は守られず、守られるのは表現になる。']
        },
        {
          title: 'いつまで続くか',
          table: { caption: '著作権の期間（CDPA s12〜s15）', head: ['作品', '期間'], rows: [['文芸・演劇・音楽・美術', '作者が死亡した年の末から70年'], ['映画', '監督・脚本・せりふ・映画用の音楽の作者のうち、最後に死亡した人の死亡年の末から70年'], ['録音', '作った年の末から50年（その間に発行されれば、発行した年の末から70年）'], ['放送', '放送した年の末から50年'], ['版面', '最初に発行した年の末から25年']] },
          formula: '文芸・演劇・音楽・美術 ＝ 死亡した年の末 ＋ 70年'
        },
        {
          title: '例題: いつまで守られるか',
          example: {
            problem: 'ある小説家が 1940年に小説を書き、1960年8月14日に死亡した。この小説の著作権は、いつまで続く？',
            steps: ['文芸の著作物なので、期間は作者の死亡から数える。書いた年（1940年）は関係ない', '死亡した年の末: 1960年12月31日', 'そこから70年: 1960 ＋ 70 ＝ 2030年の12月31日まで', '2031年1月1日からは、誰でも許可なく使える（public domain）'],
            answer: '2030年12月31日まで'
          },
          after: '共同で書いた作品（共同著作物）は、最後に死亡した作者から数える。'
        },
        {
          title: '誰のものか（所有者）',
          list: ['原則: 最初の所有者は作者（author、s11(1)）', '従業員が雇用の業務の中（in the course of employment）で作った文芸・演劇・音楽・美術の著作物と映画は、雇用者が最初の所有者になる（s11(2)）。契約で別に決めることもできる', '外注（フリーランス・制作会社）の作品は、依頼してお金を払っても、原則として作者のもの。依頼者が欲しければ、契約に書面の譲渡（assignment、s90(3)）を入れる'],
          after: '作者は、著作権を譲った後も著作者人格権（moral rights）を持つ。作者として名前を表示させる権利（あらかじめ主張しておく必要がある）、作品を傷つける改変に反対する権利など。譲渡はできないが、書面で放棄（waive）できる。'
        },
        {
          title: '侵害になる行為（s16〜s23）',
          list: ['権利者の許可なく、作品の全部か実質的な部分（substantial part）について次のことをすると侵害（primary infringement）: コピーする、公衆に配る、貸す、公衆の前で演奏・上映する、インターネットなどで公衆に送信する、翻案する（翻訳・編曲など）', '実質的かどうかは、量でなく質で判断する（Designers Guild v Russell Williams、2000）。短くても大事な部分ならあてはまる', '侵害品だと知りながら（または知るべき理由がありながら）、輸入する・営業で持つ・売る行為は二次侵害（secondary infringement）'],
          after: '侵害になるのは「まねした（copying）」ときだけ。まねせずに、偶然同じものを独自に作った人は侵害にならない。'
        },
        {
          title: '許される利用（fair dealing など）',
          list: ['営利目的でない研究、私的な学習', '批評・論評（criticism or review）と引用（quotation）。出典を十分に表示する', '時事の報道（ただし写真は除く）', 'パロディ・風刺・パスティーシュ'],
          after: 'どれも公正な扱い（fair dealing）の範囲に限られる。使う量が多すぎる、元の作品の販売の邪魔になる、といった使い方は外れる。'
        },
        {
          title: 'なぜ？ 自動で生まれる理由',
          paras: ['作品は毎日、大量に生まれる。一つ一つ審査して登録するのは無理なので、作った時点で自動的に守る。', 'そのかわり、守るのは「まねされたこと」だけ。独自に同じものを作った人まで止めると、知らずに書いた人が困るから。ここが、独自の発明でも止められる特許との大きな違いになる。'],
          note: { kind: 'warn', text: '「お金を払って作ってもらったロゴは自分のもの」は間違い。外注した作品の著作権は、書面で譲り受けない限り作者に残る。また日本の職務著作では会社が「著作者」になるが、英国では従業員が作者のままで、雇用者は「最初の所有者」になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['著作権は記録した時点で自動的に生まれ、表現だけを守る。文芸・音楽・美術などは作者が死亡した年の末から70年', '最初の所有者は作者。雇用の業務の中で作れば雇用者。外注は書面の譲渡がない限り作者のもの', '許可なく全部か実質的な部分をコピー・配布・送信・翻案すると侵害。独自に作ったものや fair dealing は侵害でない']
        },
        {
          title: '英単語',
          words: [
            ['copyright', 'コピーライト', '著作権'],
            ['original', 'オリジナル', '独自の（作者自身の知的な創作）'],
            ['author / first owner', 'オーサー', '作者 / 最初の所有者'],
            ['in the course of employment', '', '雇用の業務の中で'],
            ['infringement / substantial part', 'インフリンジメント', '侵害 / 実質的な部分'],
            ['fair dealing', 'フェア ディーリング', '公正な扱い（許される利用）'],
            ['moral rights', 'モラル ライツ', '著作者人格権']
          ]
        }
      ],
      quiz: [
        { q: 'Under the Copyright, Designs and Patents Act 1988, for how long does copyright in a literary work normally last?', choices: ['70 years from the date on which the work was first published', '50 years from the end of the calendar year in which the work was made', '70 years from the end of the calendar year in which the author dies', '20 years from the date on which the work was registered'], answer: 2, explain: '文芸・演劇・音楽・美術の著作物は、作者が死亡した年の末から70年（s12）。発表の日から数えるのは誤り。50年は放送や録音（発行されない場合）の期間。英国の著作権には登録がない。' },
        { q: 'A musical work was composed in 1950. The composer died on 20 March 1975. In which year does copyright in the work expire (at the end of that year)?', type: 'number', answer: 2045, unit: '', explain: '作曲した年（1950年）ではなく、死亡した年から数える。1975年の末から70年なので、1975 ＋ 70 ＝ 2045年の末に消える。1950 ＋ 70 ＝ 2020 とするのは誤り。' },
        { q: 'Ann, a freelance designer, is paid by B Ltd to design a logo. There is no written agreement about copyright. Who is the first owner of the copyright in the logo?', choices: ['B Ltd, because it paid for the work', 'Ann, because she is the author and did not create the logo in the course of employment', 'B Ltd, because a logo is protected only as a trade mark', 'Nobody, because copyright arises only on registration'], answer: 1, explain: '最初の所有者は作者（s11(1)）。雇用者が所有者になるのは、従業員が雇用の業務の中で作った場合だけ。お金を払っても、書面の譲渡（s90(3)）がなければ移らない。なお事情によっては、裁判所が依頼者に利用の許諾や実質的な権利を認めることもある。' },
        { q: 'C は、他人の小説と同じテーマ（ある王家の秘密を追う）で、筋も文章も自分で考えた新しい小説を書いた。正しいものはどれ？', choices: ['同じテーマなので、著作権の侵害になる', '元の作者が著作権を登録していれば、侵害になる', '侵害にならない。守られるのは表現で、アイデアやテーマは守られない', '元の小説の発表から10年以内なら、侵害になる'], answer: 2, explain: 'Baigent v Random House（2007）の考え方。テーマや歴史上の説といったアイデアは誰でも使える。英国には著作権の登録がなく、期間も作者の死後70年なので、ほかの選択肢は誤り。' },
        { q: 'Which of the following acts is LEAST likely to infringe copyright?', choices: ['Uploading a copy of a film to a public website without permission', 'Translating a novel and selling the translation without permission', 'Copying a short but distinctive and important part of a song for a commercial advertisement', 'Quoting a short passage from a book in a published review of that book, with sufficient acknowledgement'], answer: 3, explain: '批評・論評のための引用は、出典を表示した公正な扱い（fair dealing）として許される。公衆への送信、翻案（翻訳）は許可が必要な行為。短くても質的に重要な部分は「実質的な部分」になる（Designers Guild v Russell Williams）。' },
        { q: 'D は、他人の著作物の違法なコピーだと知りながら、それを海外から輸入して自分の店で売った。D は自分ではコピーしていない。正しいものはどれ？', choices: ['二次侵害（secondary infringement）になる', '自分でコピーしていないので、責任はない', '輸入は侵害になるが、販売は侵害にならない', '刑事の責任だけで、民事の責任は負わない'], answer: 0, explain: '侵害品だと知りながら（または知るべき理由がありながら）、輸入・営業での所持・販売をするのは二次侵害（CDPA s22・s23）。コピーした本人でなくても責任を負う。' }
      ]
    },
    {
      id: 'B111',
      no: 111,
      title: '特許',
      goal: '特許になる4つの条件、出願と期間、特許権の中身と侵害、従業員の発明が誰のものかを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: '公開と引き換えの独占',
          paras: ['ある人が、自転車の新しいブレーキを発明した。秘密にしておいても、製品を分解されればまねされる。', 'そこで国に出願して、発明の中身を公開する。そのかわり最長20年、ほかの人はその発明を勝手に作ったり売ったりできない。公開と引き換えに独占（monopoly）をもらう。これが特許（patent）になる。']
        },
        {
          title: '特許になる4つの条件（Patents Act 1977 s1(1)）',
          svg: `<svg viewBox="0 0 440 318" role="img" aria-label="発明が特許になるための4つの条件" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">特許になる4つの条件</text><rect x="20" y="50" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="77" fill="var(--ink)">1 新しい（新規性、novelty、s2）</text><rect x="20" y="102" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="129" fill="var(--ink)">2 簡単に思いつかない（進歩性、s3）</text><rect x="20" y="154" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="181" fill="var(--ink)">3 産業で作れる・使える（s4）</text><rect x="20" y="206" width="400" height="42" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="233" fill="var(--ink)">4 除外されるものでない（s1(2)(3)）</text><rect x="90" y="262" width="260" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="288" text-anchor="middle" font-weight="600" fill="var(--ink)">特許を付与できる</text></svg>`,
          caption: '4つ全部を満たす必要がある。1つでも欠ければ特許にならない。'
        },
        {
          title: '新規性と進歩性',
          list: ['新規性（novelty）: 出願日（外国で先に出願していればその日。優先日、priority date）より前に、世界のどこかで、文書・口頭・使用などによって公衆に知られていないこと。すでに知られた技術を「先行技術（state of the art）」と呼ぶ', '発明者自身が発表しても、新規性はなくなる。出願前は、秘密保持契約（NDA）を結んだ相手にだけ見せる', '進歩性（inventive step）: その分野の普通の技術者（person skilled in the art）にとって、先行技術から明らか（obvious）でないこと', '産業上の利用可能性（industrial application）: 農業を含む何らかの産業で、作れる・使えること']
        },
        {
          title: '特許にならないもの（除外）',
          table: { caption: 'Patents Act 1977 s1(2)(3)・s4A など', head: ['除外されるもの', '例'], rows: [['発見・科学の理論・数学の方法', '新しい鉱物の発見、物理の法則'], ['美的な創作', '小説、音楽、絵（著作権で守る）'], ['頭の中の手順・ゲームのルール・事業の方法・コンピュータ・プログラム「そのもの」', '新しい会計処理の手順、ボードゲームのルール'], ['情報の提示', '表やグラフの見せ方'], ['公の秩序・道徳に反する発明', '社会的に許されないもの'], ['人や動物の手術・治療・診断の方法', '手術の手順（薬や医療機器は対象になりうる）'], ['植物・動物の品種', '別の制度（植物品種の権利）で守る']] },
          after: '「そのもの（as such）」に注意。プログラムを使って、機械の技術的な問題を解く発明なら、特許になりうる。'
        },
        {
          title: '出願から権利の終わりまで',
          list: ['英国知的財産庁（UKIPO）に出願する。出願日が基準になる', '出願から約18か月で、発明の内容が公開される', '調査と審査（search and examination）を経て、特許が付与（grant）される', '期間は出願日から最長20年（s25）。付与の日からではない', '出願から4年たった時点から、毎年更新料（renewal fee）を払う。払わなければ権利は消える', '英国の特許は英国だけで効く。外国で守るには、その国でも出願する']
        },
        {
          title: '例題: いつまで続くか',
          example: {
            problem: '2024年6月1日に出願し、2027年3月10日に特許が付与された。更新料は全部払っている。この特許はいつ終わる？',
            steps: ['期間は付与の日（2027年）ではなく、出願日から数える', '出願日 2024年6月1日 ＋ 20年 ＝ 2044年6月1日', '更新料は、出願から4年たった2028年6月から、毎年払う。1回でも払わなければ、20年より前に消える'],
            answer: '2044年6月1日（出願から20年）で終わる'
          }
        },
        {
          title: '特許権の中身と侵害（s60）',
          list: ['権利者の同意なく英国で、特許の製品を作る・売る・売ると申し出る・使う・輸入する・保管すると侵害', '特許の方法（製法）を使う、その方法で直接作った製品を売ることも侵害', 'まねしていなくても、独自に同じ発明をした人の実施も侵害になる（著作権との違い）', '侵害にならない: 私的で営利目的でない行為、発明そのものを試す実験（experimental purposes）', '出願日より前から善意でその発明を使っていた人は、使い続けられる（s64）']
        },
        {
          title: '従業員の発明は誰のものか（s39〜s42）',
          list: ['原則は発明者（従業員）のもの', '雇用者のものになる場合: (a) 普段の業務か特に任された業務の中でなされ、その業務から発明が生まれると合理的に期待できた、(b) 取締役など、雇用者の利益を図る特別な義務がある人の発明', '雇用者のものになった発明（特許）が雇用者に「非常に大きな利益（outstanding benefit）」をもたらしたら、従業員は補償（compensation）を請求できる（s40）', '従業員のこれらの権利を減らす契約の条項は、効力がない（s42）'],
          after: 'Shanks v Unilever（2019）: 最高裁は、Unilever がその特許から得た利益は非常に大きいと認め、発明した元従業員に約200万ポンドの補償を命じた。'
        },
        {
          title: 'なぜ？ 公開と独占の取引',
          paras: ['発明が秘密のままだと、技術が社会に広がらない。公開されれば、ほかの人がそれを土台に改良できる。そのごほうびが20年の独占で、期限が来れば誰でも使える。', '逆に、秘密を守り続けられるもの（飲み物のレシピなど）は、あえて特許を取らず、営業秘密として守る会社もある。特許にすると公開され、20年で切れるから。'],
          note: { kind: 'warn', text: '日本には、自分で発表してから1年以内なら出願できる例外（新規性喪失の例外）がある。英国には一般的な猶予期間がない（秘密を破られて漏れた場合などの、ごく限られた例外だけ）。展示会やSNSで先に発表すると、原則としてもう特許を取れない。また期間は付与日でなく出願日から20年。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['特許の4条件: 新規性、進歩性、産業上の利用可能性、除外対象でない。出願前の自分の発表でも新規性を失う', 'UKIPO に出願して付与。期間は出願日から最長20年、出願4年後から毎年更新料。独自に同じ発明をした人の実施も侵害', '業務の中の発明は雇用者のもの。非常に大きな利益が出たら、従業員は補償を請求できる']
        },
        {
          title: '英単語',
          words: [
            ['patent', 'パテント', '特許'],
            ['novelty / state of the art', 'ノヴェルティ', '新規性 / 先行技術'],
            ['inventive step', 'インヴェンティヴ ステップ', '進歩性（明らかでないこと）'],
            ['person skilled in the art', '', 'その分野の普通の技術者'],
            ['industrial application', 'インダストリアル', '産業上の利用可能性'],
            ['renewal fee', 'リニューアル フィー', '更新料'],
            ['outstanding benefit', 'アウトスタンディング', '非常に大きな利益（従業員の補償の条件）']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT a requirement for an invention to be patentable under the Patents Act 1977?', choices: ['The invention must be new', 'The invention must involve an inventive step', 'The invention must be capable of industrial application', 'The invention must have been sold commercially before the application is made'], answer: 3, explain: '4条件は、新規性・進歩性・産業上の利用可能性・除外対象でないこと（s1(1)）。出願前に売ると、むしろ公衆に知られて新規性を失う。' },
        { q: 'A patent application was filed on 1 March 2025 and the patent was granted on 1 September 2027. All renewal fees are paid. In which year will the patent expire?', type: 'number', answer: 2045, unit: '', explain: '特許の期間は出願日から最長20年（s25）。2025年3月1日 ＋ 20年 ＝ 2045年3月1日。付与の日から数えて 2047 とするのは誤り。' },
        { q: 'An inventor posts a full description of her new device on her public website. One month later, she applies for a UK patent. What is the most likely result?', choices: ['The application will succeed, because she made the disclosure herself', 'The application will succeed, because it was filed within 12 months of the disclosure', 'The application will fail, because the invention is no longer new', 'The application will succeed, provided that the device involves an inventive step'], answer: 2, explain: '出願前に公衆に知られた時点で、発明は先行技術（state of the art）に入り、新規性を失う。発明者自身の発表でも同じ。英国には日本のような1年の猶予の例外が一般にはない。' },
        { q: '次のうち、それ「そのもの」としては特許にならないものはどれ？', choices: ['燃費を良くするエンジンの新しい部品', '会員から料金を集める新しい事業の方法', '新しい薬の化合物', '布を速く染める新しい製法'], answer: 1, explain: '事業の方法（method of doing business）は、それ自体としては除外される（s1(2)(c)）。部品・化合物・製法は、4条件を満たせば特許になりうる。' },
        { q: 'Raj is employed by T Ltd as a research engineer to develop new batteries. While doing this work, he invents a new battery design. His contract says nothing about inventions. Who is entitled to the patent?', choices: ['T Ltd, because the invention was made in the course of his normal duties and might reasonably be expected to result from them', 'Raj, because he is the inventor and his contract is silent', 'Raj and T Ltd jointly, in equal shares', 'Nobody, because inventions made by employees cannot be patented'], answer: 0, explain: 's39(1)(a)。普段の業務の中で、発明が生まれると期待できた場合は、契約に書いてなくても雇用者のもの。ただし特許が雇用者に非常に大きな利益（outstanding benefit）をもたらせば、Raj は補償を請求できる（s40）。' },
        { q: '特許と著作権の違いとして正しいものはどれ？', choices: ['特許も著作権も、出願して登録しないと権利が生まれない', '特許は作者の死後70年、著作権は出願から20年続く', '特許はアイデアそのものを守るので、発見や数学の方法も特許になる', '特許はまねせず独自に同じ発明をした人の実施も侵害になるが、著作権は独自に作った作品なら侵害にならない'], answer: 3, explain: '特許は独占権なので、独自に同じ発明をしても侵害になる。著作権はまねしたこと（copying）が必要。著作権は登録なしで生まれ、作者の死後70年。発見や数学の方法は特許から除外される。' }
      ]
    },
    {
      id: 'B112',
      no: 112,
      title: '商標',
      goal: '商標として登録できる標識と拒絶される理由、期間と更新、侵害の3つの型、® と ™ の違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: 'ロゴを見て選んでいる',
          paras: ['コンビニでお茶を買うとき、ラベルのロゴを見て「いつものあれ」と選ぶ。中身を飲んで確かめてから買う人はいない。', 'ロゴや名前は、その商品がどの会社から来たか（出所）を示す目印になる。この目印を守るのが商標（trade mark）。偽物に同じロゴを付けられたら、会社の信用も客の信頼も傷つく。']
        },
        {
          title: '商標とは（Trade Marks Act 1994 s1(1)）',
          paras: ['商標は、ある事業者の商品・サービスを、ほかの事業者のものと区別できる標識（sign）。登録簿の上で、何を守るのかがはっきりと正確に分かる形で表せる必要がある。'],
          list: ['言葉（人の名前を含む）、ロゴ、文字、数字', '色、音（コマーシャルの短いメロディなど）', '商品や包装の形（瓶の独特の形など）'],
          after: 'Société des Produits Nestlé v Cadbury（2013、控訴院）: チョコレートの包装の紫色は、「主な色として使う」という書き方があいまいで、はっきりした1つの標識といえないとして、登録が認められなかった。'
        },
        {
          title: '絶対的な拒絶理由（s3）',
          table: { caption: 'その標識そのものに問題がある場合', head: ['理由', '例'], rows: [['識別力がない（devoid of distinctive character）', 'ありふれた模様、ただの「Best」'], ['商品の説明にすぎない（descriptive）', 'チョコレートに「Sweet」、産地名だけ'], ['業界で普通に使われる言葉（generic）', 'パソコンに「Laptop」'], ['形が商品の性質から生じる・技術的な機能に必要', '機能のためだけの部品の形'], ['公の秩序・道徳に反する、人をだます（deceptive）', '有機でない商品に「Organic」'], ['悪意の出願（bad faith）', '使うつもりがなく、他人を妨げるための出願']] },
          after: '識別力がない・説明的・普通の言葉の3つは、長く使われて客が「その会社の目印」と認識するようになれば（acquired distinctiveness）登録できる。「Apple」はパソコンには登録できるが、りんごには登録できない。'
        },
        {
          title: '相対的な拒絶理由（s5）',
          paras: ['先にある他人の権利とぶつかる場合も、登録できない。'],
          list: ['先に登録された商標と、同じ標識・同じ商品', '同じか似た標識で、同じか似た商品。客が混同するおそれ（likelihood of confusion）がある', '英国で評判（reputation）のある先の商標の、不当な利用や害になる（商品が似ていなくてもよい）', '先の権利（パッシング・オフで守られる名前、著作権など）とぶつかる'],
          after: 'UKIPO は相対的な理由では自分から拒絶せず、先の商標の権利者に知らせる。権利者が異議（opposition）を出して止める仕組み。'
        },
        {
          title: '登録・期間・更新',
          list: ['UKIPO に出願し、守る商品・サービスの区分（class、全45区分）を指定する', '登録の日は、出願の日とされる（s40(3)）', '期間は登録の日（＝出願日）から10年（s42）。10年ごとに更新すれば、何度でも続く（s43）', '登録の後、正当な理由なく5年続けて使わないと、他人の申立てで取り消されることがある（s46）'],
          example: {
            problem: '2021年4月10日に出願し、2022年1月20日に登録が完了した。最初の更新の期限はいつ？',
            steps: ['登録の日は、出願の日（2021年4月10日）とされる', '10年後: 2021 ＋ 10 ＝ 2031年4月10日が最初の期限', '更新すれば、次は 2041年4月10日'],
            answer: '2031年4月10日'
          }
        },
        {
          title: '侵害の3つの型（s10）',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="商標の侵害の3つの型" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">商標の侵害の3つの型（s10）</text><rect x="20" y="50" width="400" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" font-weight="600" fill="var(--ink)">s10(1) 同じ標識 × 同じ商品</text><text x="36" y="100" fill="var(--quiet)">混同の証明は不要</text><rect x="20" y="124" width="400" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="150" font-weight="600" fill="var(--ink)">s10(2) 同じか似た標識・商品</text><text x="36" y="174" fill="var(--quiet)">混同のおそれが必要</text><rect x="20" y="198" width="400" height="62" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="224" font-weight="600" fill="var(--ink)">s10(3) 英国で評判のある商標</text><text x="36" y="248" fill="var(--ink)">商品が違っても、不当な利用・害なら侵害</text><text x="220" y="286" text-anchor="middle" fill="var(--quiet)">どれも営業の中での使用が前提</text></svg>`,
          caption: '「似た標識」の混同には、「同じ会社の別ブランドだろう」と結びつけて考えるおそれ（likelihood of association）も含まれる。'
        },
        {
          title: '侵害の要件と例外',
          list: ['営業の中（in the course of trade）での使用であること。個人的な使用は対象外', '使用の例: 商品や包装に付ける、売る・売ると申し出る、輸入・輸出する、看板や広告に使う', '侵害にならない: 権利者（または同意を得た人）が英国か EEA で市場に出した本物を転売する（権利の消尽、exhaustion、s12）', '侵害にならない: 個人が自分の名前を使う、品質・産地などの説明として使う。どちらも商売上の正直な慣行に従う場合（s11）']
        },
        {
          title: '® と ™ の違い',
          table: { caption: '表示のルール', head: ['表示', '意味とルール'], rows: [['®（registered）', '登録した商標にだけ付けられる。登録していないのに付けて登録済みに見せると犯罪（s95）'], ['™（trade mark）', '法律上の意味はない。「商標として使っている」という主張で、登録がなくても付けられる']] },
          after: '登録していない商標は商標法では守られず、パッシング・オフで守る（s2(2)）。出願中でも、まだ ® は付けられない。'
        },
        {
          title: 'なぜ？ 商標には期限がない',
          paras: ['特許は発明を守るので、20年で社会に開放する。商標が守るのは、客が出所を見分けるための目印。目印として使われ続ける限り、守る意味がある。', 'だから10年ごとの更新で無期限に続く。逆に使わない商標は目印の役目を果たしていないので、5年の不使用で取り消されうる。'],
          note: { kind: 'warn', text: '「似た名前なら必ず侵害」ではない。同じ標識・同じ商品なら混同を証明しなくても侵害だが、似ている場合は混同のおそれが必要。一方、評判のある商標は、商品が違っても守られることがある。また10年は、登録の手続きが終わった日ではなく出願日から数える。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['商標は商品・サービスを区別できる標識。識別力がない・説明的・普通の言葉などは拒絶（使用で識別力を得れば例外）', '期間は出願日から10年、10年ごとの更新で無期限。5年使わなければ取り消されうる', '侵害は3型: 同じ×同じは混同不要、似ているなら混同のおそれ、評判のある商標は商品が違っても。® は登録済みだけ']
        },
        {
          title: '英単語',
          words: [
            ['trade mark', 'トレードマーク', '商標'],
            ['sign', 'サイン', '標識'],
            ['distinctive character', 'ディスティンクティヴ', '識別力'],
            ['absolute / relative grounds for refusal', '', '絶対的 / 相対的な拒絶理由'],
            ['likelihood of confusion', 'ライクリフッド', '混同のおそれ'],
            ['reputation', 'レピュテーション', '評判'],
            ['in the course of trade', '', '営業の中で']
          ]
        }
      ],
      quiz: [
        { q: 'For how long does a UK trade mark registration last before it must be renewed?', choices: ['20 years from the date of filing, with no renewal', '10 years from the date of registration (the filing date), renewable for further periods of 10 years', 'For the life of the owner plus 70 years', '5 years, renewable once only'], answer: 1, explain: '登録の日は出願日とされ、そこから10年（s40(3)・s42）。10年ごとに何度でも更新できる（s43）。20年で更新なしは特許、死後70年は著作権の考え方。' },
        { q: 'A company applies to register the word SWEET as a trade mark for chocolate. It has not used the word before. On which ground is the application most likely to be refused?', choices: ['It conflicts with an earlier registered trade mark', 'It is contrary to public policy or morality', 'It consists exclusively of a sign which describes a characteristic of the goods', 'Words cannot be registered as trade marks'], answer: 2, explain: '商品の性質（品質）を説明するだけの言葉は、絶対的な理由で拒絶される（s3(1)(c)）。先の商標とぶつかるのは相対的な理由（s5）。言葉は商標として登録できる。長く使って識別力を得れば例外になる。' },
        { q: 'X Ltd owns the registered trade mark ZEPHYR for bicycles. Without consent, Y Ltd sells bicycles in the course of trade under the identical sign ZEPHYR. Which of the following is correct?', choices: ['Y Ltd infringes the trade mark, and X Ltd does not need to prove a likelihood of confusion', 'Y Ltd infringes only if X Ltd proves that customers were actually confused', 'Y Ltd does not infringe if it acted in good faith', 'Y Ltd does not infringe unless it copied the logo of X Ltd'], answer: 0, explain: 's10(1)。同じ標識を同じ商品に使えば、混同を証明しなくても侵害。善意（知らなかった）は侵害を否定しない。混同のおそれが必要なのは、標識や商品が「似ている」場合（s10(2)）。' },
        { q: 'LUMINA is a registered trade mark for watches with a substantial reputation in the UK. Without due cause, another company starts selling cat food under the sign LUMINA, taking unfair advantage of the reputation of the mark. Which of the following is correct?', choices: ['There can be no infringement, because cat food and watches are not similar goods', 'There is infringement only if the cat food was manufactured by the watch maker', 'There can be no infringement, because the mark is registered only for watches', 'This may be infringement, even though the goods are not similar'], answer: 3, explain: 's10(3)。英国で評判のある商標は、商品が似ていなくても、正当な理由なく評判を不当に利用したり害したりする使用から守られる。' },
        { q: '自社のロゴを商標登録していない会社が、ロゴに ® を付けて商品を売った。正しいものはどれ？', choices: ['® は誰でも自由に付けられるので、問題ない', '登録済みだと偽って示すことになり、犯罪になる', '™ と同じ意味なので、問題ない', '出願中であれば、® を付けてよい'], answer: 1, explain: '® は登録済みの商標だけ。登録していないのに登録済みと示すと犯罪（s95）。™ は法律上の意味がなく、登録がなくても付けられる。出願中はまだ登録ではない。' },
        { q: 'A trade mark application was filed on 15 July 2026 and the mark was entered on the register on 20 January 2027. In which year is the first renewal due?', type: 'number', answer: 2036, unit: '', explain: '登録の日は出願日（2026年7月15日）とされる（s40(3)）。2026 ＋ 10 ＝ 2036年7月15日が最初の期限。登録完了の 2027年から数えて 2037 とするのは誤り。' }
      ]
    }
  ],
  cards: [
    { id: 'B109-1', lesson: 'B109', q: '登録が必要な知的財産権は？', a: '特許・商標・登録意匠（UKIPO に出願）' },
    { id: 'B109-2', lesson: 'B109', q: '登録なしで生まれる知的財産権は？', a: '著作権・非登録の意匠権・パッシング・オフ' },
    { id: 'B109-3', lesson: 'B109', q: '著作権・特許・商標の期間は？', a: '著作権は作者の死後70年、特許は出願から20年、商標は10年ごと更新で無期限' },
    { id: 'B109-4', lesson: 'B109', q: '著作権・特許・登録商標の譲渡の方式は？', a: '書面で、譲る側（または代理人）が署名する' },
    { id: 'B109-5', lesson: 'B109', q: 'なぜ？ 知的財産権に期間がある', a: '創作の動機は守りつつ、永遠の独占で競争を止めないため' },
    { id: 'B110-1', lesson: 'B110', q: '著作権が守るのは表現とアイデアのどちら？', a: '表現だけ。アイデア・テーマ・事実は守られない（Baigent v Random House）' },
    { id: 'B110-2', lesson: 'B110', q: '小説の著作権の期間は？', a: '作者が死亡した年の末から70年' },
    { id: 'B110-3', lesson: 'B110', q: '従業員が業務の中で作った作品の最初の所有者は？', a: '雇用者（s11(2)）。契約で別に決められる' },
    { id: 'B110-4', lesson: 'B110', q: '外注したロゴの著作権は誰のもの？', a: '書面の譲渡がない限り、作者（フリーランス）のもの' },
    { id: 'B110-5', lesson: 'B110', q: '「実質的な部分」はどう判断する？', a: '量でなく質で判断する（Designers Guild v Russell Williams）' },
    { id: 'B110-6', lesson: 'B110', q: '著作権の侵害にならない利用の例は？', a: '出典を示した批評・引用、非営利の研究、時事報道（写真以外）、パロディ' },
    { id: 'B111-1', lesson: 'B111', q: '特許の4条件は？', a: '新規性・進歩性・産業上の利用可能性・除外対象でないこと' },
    { id: 'B111-2', lesson: 'B111', q: '出願前に発明者が自分で発表したら？', a: '新規性を失い、原則として特許を取れない（英国に一般的な猶予なし）' },
    { id: 'B111-3', lesson: 'B111', q: '特許の期間はいつから何年？', a: '出願日から最長20年。出願から4年たった時点から毎年更新料' },
    { id: 'B111-4', lesson: 'B111', q: '特許にならない除外対象の例は？', a: '発見、数学の方法、事業の方法・プログラム「そのもの」、治療方法など' },
    { id: 'B111-5', lesson: 'B111', q: '従業員の発明が雇用者のものになるのは？', a: '業務の中で発明が期待できたとき、または取締役など特別な義務があるとき' },
    { id: 'B111-6', lesson: 'B111', q: '従業員が補償を請求できる条件は？', a: '発明（特許）が雇用者に非常に大きな利益（outstanding benefit）をもたらしたとき' },
    { id: 'B112-1', lesson: 'B112', q: '商標とは？', a: 'ある事業者の商品・サービスをほかと区別できる、はっきり表せる標識' },
    { id: 'B112-2', lesson: 'B112', q: '絶対的な拒絶理由の例は？', a: '識別力がない、説明的、普通の言葉、人をだます、悪意の出願など' },
    { id: 'B112-3', lesson: 'B112', q: '商標の期間と更新は？', a: '出願日から10年。10年ごとに何度でも更新できる' },
    { id: 'B112-4', lesson: 'B112', q: '商標を使わないとどうなる？', a: '登録後5年続けて使わないと、取り消されることがある（s46）' },
    { id: 'B112-5', lesson: 'B112', q: '同じ標識・同じ商品の侵害で、混同の証明は要る？', a: '要らない（s10(1)）。似ている場合は混同のおそれが必要' },
    { id: 'B112-6', lesson: 'B112', q: '® と ™ の違いは？', a: '® は登録済みだけ（偽ると犯罪）。™ は登録なしでも付けられる' }
  ]
});
