(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 218,
  part: 6,
  partTitle: '会社の資本と資金調達',
  lessons: [
    {
      id: 'B073',
      no: 73,
      title: '資本維持の原則と減資',
      goal: '資本を株主に返せない理由と、それを守る個々のルール、私会社と公開会社の減資の手続を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(g)'],
      slides: [
        {
          title: '敷金は、入居中には返してもらえない',
          paras: ['賃貸の敷金は、家賃が払えなくなったときの備えとして大家が預かる。住んでいる間に「やっぱり返して」とは言えない。', '会社の株式資本も似ている。株主が払い込んだお金は、会社にお金を貸す人や取引先（債権者、creditors）にとっての備え。だから株主に勝手に返せない。これを資本維持の原則（capital maintenance）という。']
        },
        {
          title: '資本維持の原則とは',
          paras: ['株主の責任は有限（limited liability）。会社が借金を返せなくても、株主は払い込むと約束した額以上は出さない。債権者が頼れるのは会社の財産だけになる。', 'そこで法律は、払い込まれた資本を株主に戻すことを原則として禁じる。Trevor v Whitworth（1887）では、会社が自分の株式を買い取ることは資本の払戻しにあたり、許されないとされた。今は Companies Act 2006（CA 2006）s658 が原則禁止を定め、法律の手続に従うときだけ例外を認める。'],
          note: { kind: 'tip', text: 'このコースの会社法は、英国（イングランド）の CA 2006 をモデルに学ぶ。' }
        },
        {
          title: '資本維持を守るルールの一覧',
          table: { caption: 'どれも「資本を株主に戻さない」ための仕組み', head: ['ルール', '中身'], rows: [['割引発行の禁止', '額面より安く株式を発行できない（s580）'], ['資本と同じ扱いの準備金', '株式払込剰余金・資本償還準備金は配当できない'], ['配当の制限', '分配可能利益からだけ（s830、次のレッスン）'], ['自己株式の取得', '原則禁止。法律の手続でだけできる（s658・s690）'], ['資金援助の禁止', '公開会社は、自社の株を買う人を援助できない（s678）'], ['減資', '決められた手続でだけできる（s641）']] }
        },
        {
          title: '減資（reduction of capital）の3つの目的',
          paras: ['減資は、株式資本の額を減らすこと。s641(4) は主に次の3つを挙げる。'],
          numbered: ['まだ払い込まれていない部分の責任をなくす・減らす', '損失で失われた資本を消す（lost or unrepresented by available assets）。帳簿の欠損を消して、配当を再開しやすくする', '必要以上の資本を株主に返す（in excess of the company\'s wants）'],
          after: '1と3は、債権者のクッションが実際に減る。だから手続が厳しい。定款（articles）で減資を禁止・制限することもできる。'
        },
        {
          title: '減資の2つの方法',
          svg: `<svg viewBox="0 0 440 352" role="img" aria-label="減資の2つの方法。私会社は支払能力の声明、どの会社も裁判所の確認" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">減資の2つの方法（s641）</text><rect x="20" y="48" width="400" height="128" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="76" font-size="16" font-weight="600" fill="var(--ink)">私会社だけ: 支払能力の声明</text><text x="36" y="104" fill="var(--ink)">特別決議 ＋ 取締役全員の声明</text><text x="36" y="130" fill="var(--ink)">声明は決議の前15日以内に作る</text><text x="36" y="156" fill="var(--ink)">15日以内に登記所へ。裁判所は不要</text><rect x="20" y="192" width="400" height="128" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="220" font-size="16" font-weight="600" fill="var(--ink)">どの会社も: 裁判所の確認</text><text x="36" y="248" fill="var(--ink)">特別決議 ＋ 裁判所の確認</text><text x="36" y="274" fill="var(--ink)">資本を返すときなどは債権者が異議</text><text x="36" y="300" fill="var(--ink)">公開会社は、この方法だけ</text><text x="220" y="342" text-anchor="middle" font-size="14" fill="var(--quiet)">特別決議 ＝ 投票の 75% 以上の賛成</text></svg>`,
          caption: '支払能力の声明（solvency statement）: 今すぐ払えない借金はなく、これから12か月の間も期日どおり払えるという、取締役全員の声明。根拠なく出すと犯罪になる（s643）。減資は登記されて効力が出る。'
        },
        {
          title: '自己株式の買戻しのルール',
          list: ['定款が禁止していなければ、会社は自社株を買い戻せる（s690）。全額払込済の株式に限る', '財源は分配可能利益か、そのために新しく発行した株式の代金（s692）', '資本（capital）から払えるのは私会社だけ。特別決議・取締役の支払能力の声明・監査人の報告が必要（s709 以下）', '利益で買い戻したら、減った株式の額面と同じ額を資本償還準備金（capital redemption reserve）に移す（s733）', '分配可能利益で買った株式は、消却せず金庫株（treasury shares）として持つこともできる（B065）']
        },
        {
          title: '例題: 買い戻しても資本は減らない',
          example: {
            problem: 'Hill Ltd の株式資本は $100,000（1株 $1）、利益剰余金は $60,000。株主から 10,000株を1株 $1.50 で買い戻し、消却する。代金は分配可能利益から払う。資本と利益剰余金はどうなる？',
            steps: ['払う現金: 10,000株 × $1.50 ＝ $15,000', '株式資本は消却した額面分だけ減る: $100,000 − $10,000 ＝ $90,000', '減った額面と同じ $10,000 を利益剰余金から資本償還準備金に移す（s733）', '利益剰余金は、額面を超えて払った $5,000 と準備金への $10,000 で、合計 $15,000 減る: $60,000 − $15,000 ＝ $45,000', '資本: 株式資本 $90,000 ＋ 資本償還準備金 $10,000 ＝ $100,000'],
            answer: 'お金は利益から出ていき、債権者のクッション $100,000 は減らない'
          }
        },
        {
          title: '公開会社に特有のルール',
          list: ['資金援助の禁止: 公開会社の株を買う人に、その公開会社や子会社が、貸付・保証・贈与などで援助してはいけない（s678）。違反は犯罪。私会社には原則として適用されない', '資本の重大な損失: 純資産が払込請求済の株式資本（called-up share capital）の半分以下になったら、取締役は気づいてから28日以内に株主総会を招集する。総会の日は56日以内（s656）', '減資で最低資本 £50,000 を下回るときは、原則として私会社への組織変更が必要（s650）']
        },
        {
          title: 'なぜ？ 資本を株主に返せない理由',
          paras: ['有限責任は株主にとって大きな特典。その代わりに債権者は「払い込まれた資本は株主に引き出されない」ことを頼りに取引する。株主が先にお金を持ち出せたら、損をするのは債権者だけになる。', '日本の感覚では「自分の会社のお金は自由に使える」と思いがち。英国法では、株主に返すには、債権者を守る手続（支払能力の声明か裁判所）を通す必要がある。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '資本維持は「資本と同じ額の現金を会社に置いておく義務」ではない。事業で損をして資本を失うことは止められない。止めるのは株主への払戻し。また、私会社の減資に裁判所は不要（支払能力の声明でよい）。公開会社は必ず裁判所の確認がいる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['払い込まれた資本は債権者のクッション。株主に返すのは法律の手続によるときだけ（Trevor v Whitworth）', '減資は特別決議が必要。私会社は支払能力の声明か裁判所、公開会社は裁判所の確認', '利益で自社株を買い戻したら、額面と同じ額を資本償還準備金に移す']
        },
        {
          title: '英単語',
          words: [
            ['capital maintenance', 'キャピタル メインテナンス', '資本維持'],
            ['reduction of capital', 'リダクション オブ キャピタル', '減資'],
            ['solvency statement', 'ソルベンシー ステイトメント', '支払能力の声明'],
            ['confirmation by the court', 'コンファメイション', '裁判所の確認'],
            ['capital redemption reserve', 'リデンプション リザーブ', '資本償還準備金'],
            ['financial assistance', 'フィナンシャル アシスタンス', '自社株取得のための資金援助'],
            ['purchase of own shares', '', '自己株式の買戻し']
          ]
        }
      ],
      quiz: [
        { q: 'A private company limited by shares wishes to reduce its share capital without applying to the court. Which of the following must it do?', choices: ['Pass an ordinary resolution supported by a solvency statement made by the auditors', 'Pass a special resolution supported by a solvency statement made by a majority of the directors', 'Pass a special resolution supported by a solvency statement made by all the directors', 'Pass a board resolution and notify the creditors in writing'], answer: 2, explain: 's641・s642。特別決議（75% 以上）が必要で、普通決議では足りない。支払能力の声明は監査人ではなく取締役が、それも全員が出す。取締役会の決議だけでは減資できない。' },
        { q: 'Which of the following statements regarding a reduction of capital by a public company is correct?', choices: ['It may reduce its capital by a special resolution supported by a solvency statement', 'It must pass a special resolution and obtain the confirmation of the court', 'It may reduce its capital by ordinary resolution if its articles permit', 'A public company may never reduce its share capital'], answer: 1, explain: '支払能力の声明の方法は私会社だけ。公開会社は特別決議＋裁判所の確認（s645）。普通決議では減資できない。公開会社でも、この手続を踏めば減資できる。' },
        { q: 'Oak Ltd は自社株 20,000株（額面1株 $0.50）を1株 $2 で、分配可能利益から買い戻して消却した。資本償還準備金に移す額はいくら？', type: 'number', answer: 10000, unit: '$', explain: '資本償還準備金は、減った株式の額面と同じ額（s733）。20,000株 × $0.50 ＝ $10,000。支払額 $40,000 ではない。額面を超える $30,000 は利益剰余金から払う。' },
        { q: '資本維持の原則が禁止していることはどれ？', choices: ['事業の失敗で、資本の額を超える損失を出すこと', '利益剰余金から配当を払うこと', '社債を発行してお金を借りること', '払い込まれた資本を、法律の手続なしに株主に返すこと'], answer: 3, explain: '資本維持が止めるのは株主への払戻し。事業上の損失は止められない。分配可能利益からの配当や借入は、資本を株主に返すことではないので問題ない。' },
        { q: 'A public company\'s net assets fall to half or less of its called-up share capital. Within what period after a director becomes aware of this must the directors call a general meeting?', choices: ['14 days', '21 days', '28 days', '56 days'], answer: 2, explain: 's656。気づいてから28日以内に招集し、総会の日は56日以内にする。56日は総会の日の期限で、招集の期限ではない。' },
        { q: 'Which of the following companies is prohibited by the Companies Act 2006 from giving financial assistance for the acquisition of its own shares?', choices: ['A private company', 'A public company', 'Any company with more than 50 members', 'No company, because the prohibition was abolished in 2006'], answer: 1, explain: 's678。禁止は公開会社（とその子会社による援助）に残っている。2006年法で廃止されたのは、私会社への原則禁止のほう。株主の人数は関係ない。' }
      ]
    },
    {
      id: 'B074',
      no: 74,
      title: '配当のルール：分配可能利益',
      goal: '分配可能利益の定義を説明し、過去の損失・未実現利益・支払済みの配当を考えて、配当できる上限を計算できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(h)'],
      slides: [
        {
          title: '家計で外食に使ってよいお金',
          paras: ['貯金の元手には手をつけず、外食に使うのは実際に入ってきた黒字の範囲だけ。去年の赤字が残っていれば、先に埋める。', '持ち家の値上がりは、売るまでは現金にならない。それを当てにして使うのは危ない。会社の配当のルールは、この感覚とほとんど同じ。']
        },
        {
          title: 'ルール: 配当は分配可能利益からだけ',
          paras: ['会社は、分配に使える利益（profits available for distribution）からしか分配（distribution）できない（s830）。私会社にも公開会社にも当てはまる。'],
          formula: '分配可能利益 ＝ 累積実現利益 − 累積実現損失',
          after: '分配には、現金の配当だけでなく、物での配当も入る（s829）。ボーナス・イシュー（無償の新株）、法律の手続による減資、資本（新株の代金を含む）からの自己株式の買戻し、清算での財産の分配は、分配に当たらない。分配可能利益で自社株を買い戻すのは分配に当たり、その分だけ分配可能利益が減る。'
        },
        {
          title: '3つのキーワード',
          list: ['累積（accumulated）: 今年だけでなく、会社ができてからの合計で見る。過去の損失を先に埋める', '実現（realised）: 売る・回収するなど、実際に生じた利益。売っていない資産の値上がり（再評価益）は未実現なので入れない', 'まだ使っていない分: すでに配当した分や、ボーナス・イシューで資本に組み入れた分は引く。減資で消した損失（B073）は、もう引かない']
        },
        {
          title: '入るもの・入らないもの',
          table: { caption: '分配可能利益に入るか', head: ['項目', '扱い'], rows: [['これまでの営業の利益', '入る（実現）'], ['過去の年の営業損失', '差し引く'], ['固定資産を売って得た利益', '入る（実現）'], ['土地の再評価益（売っていない）', '入らない（未実現）'], ['株式払込剰余金・資本償還準備金', '入らない（資本と同じ扱い）'], ['すでに払った配当・資本組入れ', '差し引く']] }
        },
        {
          title: '例題1: 3年分を累積で見る',
          example: {
            problem: 'Maple Ltd（私会社）の業績: 1年目 実現利益 $30,000、2年目 実現損失 $50,000、3年目 実現利益 $45,000。1年目の後に配当 $10,000 を払った。ほかに土地の再評価剰余金 $20,000 がある。3年目の終わりに配当できる上限は？',
            steps: ['累積実現利益: $30,000 ＋ $45,000 ＝ $75,000', 'すでに配当に使った分を引く: $75,000 − $10,000 ＝ $65,000', '累積実現損失を引く: $65,000 − $50,000 ＝ $15,000', '再評価剰余金 $20,000 は未実現なので足さない'],
            answer: '上限は $15,000。今年の利益 $45,000 全部は配当できない'
          }
        },
        {
          title: '例題2: 再評価した土地を売ったら',
          example: {
            problem: 'Elm Ltd は取得価額 $100,000 の土地を $130,000 に再評価していた（再評価剰余金 $30,000、未実現）。今年その土地を $135,000 で売った。この売却で分配可能利益はいくら増える？',
            steps: ['売ったことで、値上がりは実現した', '再評価剰余金 $30,000 は、実現利益に変わる', '再評価後の額を超えた売却益: $135,000 − $130,000 ＝ $5,000', '合計: $30,000 ＋ $5,000 ＝ $35,000（取得価額との差 $135,000 − $100,000 と同じ）'],
            answer: '分配可能利益は $35,000 増える'
          }
        },
        {
          title: '誰が配当を決めるか（モデル定款）',
          list: ['期末配当（final dividend）: 取締役が金額を提案し、株主総会の普通決議で宣言する', '株主は、取締役が提案した額より多くは宣言できない（少なくはできる）', '中間配当（interim dividend）: 取締役会の判断だけで払える', '上限は、直近の計算書類（relevant accounts）の数字で判断する（s836）']
        },
        {
          title: 'なぜ？ 累積・実現で見る理由',
          paras: ['過去の損失で資本はすでに目減りしている。それを埋めずに今年の利益を配ると、債権者のクッションである資本を、さらに株主へ流すことになる。', '売っていない値上がりは、相場が下がれば消えるかもしれない。配った現金は戻ってこない。だから、確かに手に入った利益だけを配当に使わせる。日本の感覚の「今年黒字なら配当できる」は、ここでは通じない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '今年の利益（当期利益）だけで上限を出してしまう間違いが多い。会社ができてからの累積で見て、過去の損失を先に引く。再評価剰余金・株式払込剰余金・資本償還準備金は配当に使えない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['分配可能利益 ＝ 累積実現利益 − 累積実現損失（s830）。すでに配当・資本組入れした分は引く', '未実現の再評価益は入らない。資産を売れば実現して入る', '期末配当は取締役の提案額までを株主が普通決議で宣言。中間配当は取締役が決める']
        },
        {
          title: '英単語',
          words: [
            ['distribution', 'ディストリビューション', '分配（配当など）'],
            ['profits available for distribution', '', '分配可能利益'],
            ['accumulated realised profits', 'アキュミュレイテッド リアライズド', '累積実現利益'],
            ['accumulated realised losses', '', '累積実現損失'],
            ['unrealised profit', 'アンリアライズド', '未実現利益（再評価益など）'],
            ['final dividend / interim dividend', 'ファイナル / インテリム', '期末配当 / 中間配当'],
            ['capitalisation', 'キャピタライゼーション', '資本組入れ']
          ]
        }
      ],
      quiz: [
        { q: 'X Ltd has made realised profits of $80,000 in total since incorporation and realised losses of $30,000 in total. It also has an unrealised revaluation gain of $25,000. No distributions have been made. What is the maximum dividend X Ltd may lawfully pay (in $)?', type: 'number', answer: 50000, unit: '$', explain: 's830：累積実現利益 $80,000 − 累積実現損失 $30,000 ＝ $50,000。再評価益 $25,000 は未実現なので足さない（足すと $75,000 で誤り）。' },
        { q: 'Which of the following correctly describes the profits available for distribution of a private company under the Companies Act 2006?', choices: ['Accumulated realised profits less accumulated realised losses', 'Current year realised profits less current year realised losses', 'Accumulated realised and unrealised profits less accumulated realised losses', 'Current year profits, whether realised or unrealised'], answer: 0, explain: '累積（会社ができてからの合計）で、実現したものだけを見る。今年だけの利益で判断するのは誤り。未実現利益は入らない。' },
        { q: 'Birch Ltd のこれまでの実現利益の合計は $90,000 で、うち $20,000 はすでに配当した。これまでの実現損失の合計は $35,000。再評価剰余金が $40,000 ある。今配当できる上限はいくら？', type: 'number', answer: 35000, unit: '$', explain: '$90,000 − 配当済み $20,000 − 実現損失 $35,000 ＝ $35,000。再評価剰余金は未実現なので入らない。配当済みの分を引き忘れると $55,000 になり誤り。' },
        { q: 'Ash Ltd は今年 $50,000 の実現利益を出した。去年までの累積実現損失は $70,000 で、それまでの実現利益はない。今年配当できる？', choices: ['$50,000 まで配当できる。今年は黒字だから', 'できない。累積で $20,000 の損失が残っている', '$20,000 まで配当できる', '株式払込剰余金があれば、それで損失を埋めて配当できる'], answer: 1, explain: '累積で見ると $50,000 − $70,000 ＝ −$20,000。分配可能利益はない。株式払込剰余金は資本と同じ扱いで、配当には使えない。' },
        { q: 'Under the model articles for private companies, which of the following statements regarding dividends is correct?', choices: ['The members may declare a dividend of any amount by special resolution', 'The directors may not pay an interim dividend without a resolution of the members', 'The members may declare a final dividend by ordinary resolution, but not more than the amount recommended by the directors', 'A dividend may be declared without any recommendation from the directors'], answer: 2, explain: 'モデル定款では、株主は普通決議で宣言し、取締役の提案額を超えられない。中間配当は取締役が決める。取締役の提案がないと宣言できない。' },
        { q: 'Fir Ltd は取得価額 $200,000 の建物を $260,000 に再評価していた。今年その建物を $250,000 で売った。この売却で分配可能利益はいくら増える？', type: 'number', answer: 50000, unit: '$', explain: '売れば実現する。取得価額との差 $250,000 − $200,000 ＝ $50,000。内訳は、再評価剰余金 $60,000 が実現し、再評価後の額より $10,000 安く売った損 $10,000 を引いたもの。' }
      ]
    },
    {
      id: 'B075',
      no: 75,
      title: '公開会社の追加テストと違法配当',
      goal: '公開会社の純資産テストで配当の上限を計算し、私会社との違いと、違法配当を受けた株主・承認した取締役の責任を説明できるようになる',
      minutes: 17,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(h)'],
      slides: [
        {
          title: '大きな家族には、もう1つの安全装置',
          paras: ['上場しているような大きな会社（公開会社、plc）には、顔も知らない大勢の株主と債権者がいる。外から会社の中身はなかなか見えない。', 'そこで公開会社の配当には、前のレッスンのルールに加えて、もう1つの安全装置がある。売っていない資産の値下がり（未実現の損失）も、配る前に差し引く。']
        },
        {
          title: '純資産テスト（net assets test、s831）',
          paras: ['公開会社は、s830 の分配可能利益があることに加えて、次の条件を満たすときだけ配当できる。'],
          formula: '配当後の純資産 ≧ 払込請求済の株式資本 ＋ 分配不能準備金',
          list: ['分配不能準備金（undistributable reserves）: 株式払込剰余金', '資本償還準備金', '未実現利益が未実現損失を上回る分（純額）', '法律や定款で配当を禁じた準備金']
        },
        {
          title: '結局、私会社と何が違うか',
          table: { caption: '配当の上限の考え方', head: ['項目', '私会社', '公開会社'], rows: [['実現利益 − 実現損失', '見る', '見る'], ['未実現の純損失', '見ない', '差し引く'], ['未実現の純利益', '使えない', '使えない']] },
          formula: '公開会社の上限 ＝ 実現利益 − 実現損失 − 未実現の純損失'
        },
        {
          title: '例題1: 私会社と公開会社で比べる',
          example: {
            problem: 'Pine plc: 株式資本 $100,000（全額払込済）、株式払込剰余金 $20,000、累積実現利益 $80,000、累積実現損失 $30,000、未実現利益 $10,000、未実現損失 $25,000。配当はまだない。最大の配当額は？ もし私会社なら？',
            steps: ['私会社のテスト（s830）: $80,000 − $30,000 ＝ $50,000', '未実現: $10,000 − $25,000 ＝ $15,000 の純損失', '公開会社: $50,000 − $15,000 ＝ $35,000', '純資産で確かめる: $100,000 ＋ $20,000 ＋ $80,000 − $30,000 ＋ $10,000 − $25,000 ＝ $155,000', '守る額: 株式資本 $100,000 ＋ 株式払込剰余金 $20,000 ＝ $120,000（未実現は純損失なので足さない）', '$155,000 − $120,000 ＝ $35,000'],
            answer: '公開会社は $35,000、私会社なら $50,000'
          }
        },
        {
          title: '図で見る: 純資産のうち配れる部分',
          svg: `<svg viewBox="0 0 440 306" role="img" aria-label="純資産155,000ドルのうち120,000ドルは守る部分で、配当できるのは35,000ドル" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">純資産テスト（s831）: Pine plc</text><text x="20" y="64" font-size="14" fill="var(--quiet)">配当前の純資産</text><rect x="20" y="74" width="341" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="100" fill="var(--ink)">純資産 $155,000</text><text x="20" y="146" font-size="14" fill="var(--quiet)">守る部分と、配当できる部分</text><rect x="20" y="156" width="264" height="40" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="34" y="182" font-size="14" fill="var(--ink)">株式資本＋分配不能準備金</text><rect x="284" y="156" width="77" height="40" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="152" y="222" text-anchor="middle" fill="var(--ink)">$120,000</text><text x="322" y="222" text-anchor="middle" font-weight="600" fill="var(--ink)">最大 $35,000</text><text x="20" y="262" font-size="14" fill="var(--ink)">$155,000 − $120,000 ＝ $35,000</text><text x="20" y="290" font-size="14" fill="var(--quiet)">私会社なら $50,000 まで配当できる</text></svg>`,
          caption: '株式発行で増えた株式資本と払込剰余金は、純資産と守る額の両方を同じだけ増やす。だから配当の上限は変わらない。'
        },
        {
          title: '違法配当（unlawful distribution）: 株主の責任',
          paras: ['ルールに反した配当を受けた株主は、違法だと知っていたか、知るべき合理的な理由があったなら、会社に返す（s847）。知らなかった株主は返さなくてよい。', 'It\'s a Wrap (UK) Ltd v Gula（2006）: 法律を知らなかったことは言い訳にならない。違法になる事実（分配可能利益がないこと）を知っていれば、返す義務がある。']
        },
        {
          title: '違法配当: 取締役の責任',
          list: ['違法な配当を承認した取締役は、会社に対して、その額を返す責任を負う。会社の財産を守る義務の違反として、連帯して責任を負う', 'Re Exchange Banking Co, Flitcroft\'s Case（1882）: 回収できない債権を資産に入れた計算書類で、資本から配当した取締役に返済の責任が認められた', '誠実かつ合理的に行動していたなら、裁判所が責任を免除できる（s1157）']
        },
        {
          title: '例題2: 誰が返すか',
          example: {
            problem: 'Cedar plc は分配可能利益がないのに配当を払った。A は取締役で株主、計算書類が損失を示していると知っていた。B は社外の個人株主で、事情を何も知らなかった。C は事情は知っていたが「配当の法律は知らなかった」と言う。返す義務は？',
            steps: ['A: 承認した取締役として、会社に返す責任を負う。株主としても事情を知っていた', 'B: 知らず、知るべき理由もない → s847 の返還義務はない', 'C: 事実を知っていれば、法律を知らなくても返す（It\'s a Wrap v Gula）'],
            answer: 'A と C は返す義務がある。B は返さなくてよい'
          }
        },
        {
          title: 'なぜ？ 公開会社だけ未実現の損失を引く理由',
          paras: ['未実現でも、損失は資産が実際に減っていることを示す。債権者のクッションがすでに目減りしているのに配ると、結果として資本に手をつけることになる。', '公開会社は株主も債権者も多く、一人ひとりが担保をとったり交渉したりできない。だから法律が、配当後も資本の額だけは純資産が残ることを直接求める。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '公開会社の追加テストは「未実現の利益を足せる」テストではない。未実現の純利益は公開会社でも配当に使えない。違いは、未実現の純損失を差し引くことだけ。だから公開会社の上限は、私会社と同じか、それより小さい。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['公開会社は s830 に加えて、配当後の純資産 ≧ 払込請求済株式資本 ＋ 分配不能準備金（s831）', '計算では、私会社の上限から未実現の純損失を引く。未実現の純利益は足さない', '違法配当は、事実を知っていた株主が返す。承認した取締役は会社に責任を負う']
        },
        {
          title: '英単語',
          words: [
            ['net assets', 'ネット アセッツ', '純資産'],
            ['called-up share capital', 'コールド アップ', '払込請求済の株式資本'],
            ['undistributable reserves', 'アンディストリビュータブル リザーブズ', '分配不能準備金'],
            ['unlawful distribution', 'アンローフル', '違法な分配（違法配当）'],
            ['reasonable grounds to believe', '', '信じる合理的な理由'],
            ['jointly and severally liable', 'ジョイントリー アンド セヴェラリー', '連帯して責任を負う']
          ]
        }
      ],
      quiz: [
        { q: 'A public company has share capital of $200,000, a share premium account of $50,000, accumulated realised profits of $120,000, accumulated realised losses of $40,000, accumulated unrealised profits of $30,000 and accumulated unrealised losses of $60,000. What is the maximum dividend it may lawfully pay (in $)?', type: 'number', answer: 50000, unit: '$', explain: '実現: $120,000 − $40,000 ＝ $80,000。未実現の純損失 $60,000 − $30,000 ＝ $30,000 を引いて $50,000。純資産 $300,000 − 守る額（$200,000 ＋ $50,000）でも $50,000。私会社なら $80,000。' },
        { q: 'Which of the following describes the additional rule that applies to the distribution of dividends by a public company?', choices: ['It may include net unrealised profits in the amount available for distribution', 'It may pay dividends only out of the profits of the current year', 'After the distribution, its net assets must not be less than the total of its called-up share capital and undistributable reserves', 'It must obtain the confirmation of the court before paying any dividend'], answer: 2, explain: 's831 の純資産テスト。未実現の純利益は公開会社でも使えない。当期の利益だけで見るのではなく累積で見る。配当に裁判所の確認はいらない（裁判所が出てくるのは減資）。' },
        { q: 'Spruce plc: 累積実現利益 $70,000、累積実現損失 $20,000、未実現利益 $45,000、未実現損失 $15,000。配当はまだない。最大の配当額はいくら？', type: 'number', answer: 50000, unit: '$', explain: '実現: $70,000 − $20,000 ＝ $50,000。未実現は純額で $30,000 の利益。純利益は足さず、純損失でもないので引かない。上限は $50,000（$80,000 は誤り）。' },
        { q: 'A shareholder received a dividend which was paid in breach of the Companies Act 2006. In which situation must the shareholder repay it to the company?', choices: ['In every case, whatever the shareholder knew', 'If the shareholder knew, or had reasonable grounds to believe, that it was paid in contravention of the Act', 'Only if the shareholder is also a director of the company', 'Only if the shareholder knew the law on dividends, and not merely the facts'], answer: 1, explain: 's847。知らなかった株主は返さなくてよいので「いつも」は誤り。取締役かどうかは関係ない。It\'s a Wrap v Gula で、事実を知っていれば法律を知らなくても返す義務がある。' },
        { q: '分配可能利益がないのに配当を承認した取締役の責任として、正しいものは？', choices: ['株主総会が配当を宣言したので、取締役は責任を負わない', '返す責任を負うのは、受け取った株主だけ', '罰金を払えば、会社に返す責任はない', '会社に対して返す責任を負う。誠実かつ合理的なら、裁判所が免除しうる'], answer: 3, explain: '承認した取締役は会社に対して責任を負う（Flitcroft\'s Case）。株主総会の宣言は違法を正当化しない。株主の返還義務（s847）とは別に、取締役の責任がある。s1157 で裁判所が免除することはある。' },
        { q: '公開会社の分配不能準備金（undistributable reserves）に当たらないものはどれ？', choices: ['累積実現利益から累積実現損失を引いた残り', '株式払込剰余金', '資本償還準備金', '未実現利益が未実現損失を上回る分'], answer: 0, explain: '実現利益の残りは分配可能利益そのもの。ほかの3つは s831(4) の分配不能準備金で、純資産テストの「守る額」に入る。' }
      ]
    },
    {
      id: 'B076',
      no: 76,
      title: '第6部 総合演習：資本と資金調達',
      goal: '1社の資本の部と取引から、資本の種類、株式発行、種類株主の権利の変更、社債と担保、減資、配当の上限を順に判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:D4(a)', 'K3:D4(b)', 'K3:D4(c)', 'K3:D4(d)', 'K3:D4(e)', 'K3:D4(f)', 'K3:D4(g)', 'K3:D4(h)'],
      slides: [
        {
          title: '今日の会社: Heron plc',
          paras: ['第6部で学んだことを、1つの公開会社で順番に使う。Heron plc の期首の資本の部は次のとおり。'],
          table: { caption: 'Heron plc の資本の部（期首）', head: ['項目', '中身', '$'], rows: [['普通株式', '500,000株、額面 $1、全額払込済', '500,000'], ['優先株式', '100,000株、額面 $1、6% 累積的', '100,000'], ['株式払込剰余金', '過去の発行の額面超過分', '80,000'], ['累積実現利益', 'これまでの合計', '260,000'], ['累積実現損失', 'これまでの合計', '(90,000)'], ['未実現利益・損失', '利益 $40,000、損失 $55,000', '(15,000)']], total: ['資本の部の合計', '', '835,000'] }
        },
        {
          title: '手順1: 資本の種類と株主・債権者',
          list: ['株式資本（share capital）: 発行済・払込請求済・払込済とも $600,000（全額払込済なので同じ額）', '借入資本（loan capital）: 社債（debenture）などで借りたお金。株主ではなく債権者になる', '普通株は議決権と残余財産への権利、優先株は決まった率の配当を先に受け取る。累積的なので、払えなかった年の分は翌年以降に持ち越す'],
          after: '社債権者は、利益がなくても利息を受け取り、清算では株主より先に返してもらう。議決権はない。'
        },
        {
          title: '出来事A: ライツ・イシュー',
          example: {
            problem: 'Heron plc は、普通株4株につき1株の割合で、1株 $1.60 のライツ・イシューをした。全部引き受けられた。普通株式資本と株式払込剰余金はいくら増える？',
            steps: ['新株数: 500,000株 ÷ 4 ＝ 125,000株', '受け取る現金: 125,000株 × $1.60 ＝ $200,000', '株式資本は額面分: 125,000株 × $1 ＝ $125,000', '株式払込剰余金: 125,000株 ×（$1.60 − $1）＝ $75,000', '既存株主に持株比率で提示するので、先買権（pre-emption、s561）を守っている。割当てには取締役の権限（s551、普通決議か定款）が必要'],
            answer: '株式資本 ＋$125,000、株式払込剰余金 ＋$75,000'
          }
        },
        {
          title: '割引発行とボーナス・イシュー',
          list: ['もし1株 $0.90 で発行したら: 額面 $1 を下回る割引発行で禁止（s580）。引き受けた人は差額 $0.10 × 株数と利息を会社に払う', 'ボーナス・イシュー: 現金を受け取らず、準備金（株式払込剰余金など）を資本に組み入れて新株を無償で配る。株主の持分の比率は変わらない', '株式払込剰余金の使い道は、ボーナス株の払込みと、その発行の費用・手数料の償却に限られる（s610）。配当には使えない']
        },
        {
          title: '出来事B: 社債と担保',
          paras: ['Heron plc は $300,000 の社債を発行し、工場に固定担保（fixed charge）、在庫全体に浮動担保（floating charge）を付けた。'],
          list: ['固定担保: 特定の資産。会社は社債権者の同意なしに売れない', '浮動担保: 入れ替わる資産全体。通常の営業の中では自由に売れる。清算などで結晶化（crystallisation）すると固定化する', '登録: 作った日の翌日から21日以内に登記所へ（s859A）。しないと、清算人・管理人・ほかの債権者に対して担保が無効になり、借りたお金はすぐ返す必要が出る（s859H）', '優先順位: 固定担保は浮動担保より先（浮動担保が先に作られていても）。同じ種類どうしは、原則として先に作られた順']
        },
        {
          title: '出来事C: 優先株の権利の変更',
          example: {
            problem: 'Heron plc は優先株の配当率を 6% から 4% に下げたい。定款に変更の手続は書かれていない。何が必要か。優先株主のうち 18,000株を持つ人たちが反対したら？',
            steps: ['種類株主の権利の変更（variation of class rights）なので、その種類の株主の同意が必要（s630）', '方法は、優先株の額面の 3/4 以上を持つ株主の書面同意か、優先株主だけの総会での特別決議', '書面同意なら: 100,000株 × 3/4 ＝ 75,000株分以上の同意', '同意しなかった株主が合計で 15% 以上（15,000株以上）なら、同意から21日以内に裁判所に取消しを申し立てられる（s633）', '反対は 18,000株 ＝ 18% なので、申し立てられる'],
            answer: '75,000株分以上の同意が必要。18% の反対株主は21日以内に裁判所へ申し立てられる'
          }
        },
        {
          title: '出来事D: 配当の上限',
          example: {
            problem: 'ライツ・イシューの後、Heron plc は期末配当を考えている。優先株の当期の配当を払ったうえで、普通株に配当できる上限は？',
            steps: ['私会社と同じテスト（s830）: $260,000 − $90,000 ＝ $170,000', '未実現: $40,000 − $55,000 ＝ $15,000 の純損失。公開会社なので引く（s831）: $170,000 − $15,000 ＝ $155,000', 'ライツ・イシューは純資産と守る額を同じだけ増やすので、上限は変わらない', '優先株の配当を先に: $100,000 × 6% ＝ $6,000', '普通株の上限: $155,000 − $6,000 ＝ $149,000'],
            answer: '配当全体の上限は $155,000。普通株には $149,000 まで'
          }
        },
        {
          title: '出来事E: 資本を返したいとき',
          list: ['Heron plc が普通株主に払込済資本 $100,000 を返したい → 減資。公開会社なので、特別決議＋裁判所の確認（s641・s645）', '資本を返す減資なので、社債権者などの債権者は異議を述べられる（s646）', 'もし私会社なら、特別決議＋取締役全員の支払能力の声明でもできる（s642）', '別の方法は自己株式の買戻し。公開会社は資本からは買えず、分配可能利益か新株の代金で払う。利益で買えば金庫株として持てる（議決権・配当なし）', 'もし純資産が払込請求済の株式資本の半分以下に落ちたら、取締役は28日以内に総会を招集する（s656）']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: 'ライツ・イシューで入ったお金や株式払込剰余金を、配当に使えると考えるのは誤り。ライツ・イシュー（有償、現金が入る）とボーナス・イシュー（無償、準備金を組み入れる）を逆にしない。種類株主の同意は全株主の 75% ではなく、その種類の 3/4。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['額面は株式資本へ、超える分は株式払込剰余金へ。割引発行は禁止、払込剰余金は配当できない', '種類株主の権利の変更はその種類の 3/4 の同意、15% 以上の反対者は21日以内に裁判所へ。担保は21日以内に登録', '公開会社の減資は特別決議＋裁判所、配当は実現利益 − 実現損失 − 未実現の純損失まで']
        },
        {
          title: '英単語',
          words: [
            ['rights issue', 'ライツ イシュー', '既存株主への有償の新株発行'],
            ['bonus issue', 'ボーナス イシュー', '準備金を組み入れた無償の新株発行'],
            ['pre-emption rights', 'プリエンプション', '新株の先買権'],
            ['variation of class rights', 'ヴァリエイション', '種類株主の権利の変更'],
            ['fixed charge / floating charge', 'フィクスト / フローティング チャージ', '固定担保 / 浮動担保'],
            ['crystallisation', 'クリスタライゼーション', '浮動担保の結晶化（固定化）']
          ]
        }
      ],
      quiz: [
        { q: 'Heron plc has 500,000 ordinary shares of $1 each in issue. It makes a rights issue of 1 new share for every 4 held at $1.60 per share, and all the rights are taken up. By how much does the share premium account increase (in $)?', type: 'number', answer: 75000, unit: '$', explain: '新株 500,000 ÷ 4 ＝ 125,000株。額面を超える部分 $0.60 × 125,000 ＝ $75,000。受け取った現金 $200,000 全部ではない。額面分 $125,000 は株式資本に入る。' },
        { q: 'Heron plc (a public company) has accumulated realised profits of $260,000, accumulated realised losses of $90,000, accumulated unrealised profits of $40,000 and accumulated unrealised losses of $55,000. What is the maximum distribution it may lawfully make (in $)?', type: 'number', answer: 155000, unit: '$', explain: '実現: $260,000 − $90,000 ＝ $170,000。未実現の純損失 $15,000 を引いて $155,000（s831）。私会社なら $170,000。' },
        { q: 'Heron plc later makes a bonus issue of 1 share for every 5 held, using its share premium account. Which of the following statements is correct?', choices: ['The shareholders must pay the nominal value of the new shares in cash', 'The new shares must first be offered to the debenture holders', 'No cash is received, and the share premium account is reduced by the nominal value of the new shares', 'The company could instead have paid the share premium account out as a cash dividend'], answer: 2, explain: 'ボーナス・イシューは無償。準備金を資本に組み入れる。社債権者は株主ではないので関係ない。株式払込剰余金は配当には使えない（s610 の使い道に限られる）。' },
        { q: '優先株 100,000株の権利を変える。定款に手続の定めはない。優先株主の書面同意で行うとき、最低何株分の同意が必要？', type: 'number', answer: 75000, unit: '株', explain: 's630：その種類の株式の額面の 3/4 以上。100,000 × 3/4 ＝ 75,000株。全株主（普通株を含む）の 75% ではない。' },
        { q: '社債の担保を、作った日の翌日から21日以内に登録しなかった。どうなる？', choices: ['借入の契約そのものが無効になり、お金を返さなくてよい', '担保は清算人・管理人・ほかの債権者に対して無効になる。借りたお金はすぐ返す必要が出る', '担保は有効なままで、罰金を払うだけ', '社債が自動的に株式に変わる'], answer: 1, explain: 's859H。無効になるのは担保で、借金そのものは消えない。担保のない債権者になり、借りたお金はすぐ返済の対象になる。' },
        { q: 'Heron plc wishes to repay $100,000 of its paid-up share capital to its ordinary shareholders. Which procedure must it follow?', choices: ['Pass a special resolution supported by a solvency statement made by the directors', 'Pass an ordinary resolution and file it with the registrar', 'Obtain the written consent of all the debenture holders', 'Pass a special resolution and obtain the confirmation of the court'], answer: 3, explain: '公開会社の減資は特別決議＋裁判所の確認だけ。支払能力の声明の方法は私会社だけ。普通決議では足りない。社債権者は裁判所の手続で異議を述べられるが、全員の同意が手続ではない。' }
      ]
    }
  ],
  cards: [
    { id: 'B073-1', lesson: 'B073', q: '資本維持の原則（capital maintenance）とは？', a: '払い込まれた資本を、法律の手続なしに株主へ返してはいけないという原則' },
    { id: 'B073-2', lesson: 'B073', q: 'なぜ？ 資本を株主に返せない', a: '有限責任の代わりに、債権者は会社の資本を頼りに取引するから' },
    { id: 'B073-3', lesson: 'B073', q: '私会社の減資の方法は？', a: '特別決議＋取締役全員の支払能力の声明、または特別決議＋裁判所の確認' },
    { id: 'B073-4', lesson: 'B073', q: '公開会社の減資の方法は？', a: '特別決議＋裁判所の確認だけ' },
    { id: 'B073-5', lesson: 'B073', q: '利益で自社株を買い戻したとき、資本償還準備金に移す額は？', a: '減った株式の額面と同じ額（s733）' },
    { id: 'B073-6', lesson: 'B073', q: '公開会社の純資産が払込請求済株式資本の半分以下になったら？', a: '取締役は28日以内に総会を招集。総会は56日以内（s656）' },
    { id: 'B074-1', lesson: 'B074', q: '分配可能利益の定義（s830）は？', a: '累積実現利益 − 累積実現損失（配当・資本組入れ済みの分は除く）' },
    { id: 'B074-2', lesson: 'B074', q: '今年黒字でも配当できないのはどんなとき？', a: '過去の損失を含めた累積で、実現利益が実現損失を下回るとき' },
    { id: 'B074-3', lesson: 'B074', q: '再評価剰余金は配当に使える？', a: '使えない（未実現）。資産を売れば実現して使えるようになる' },
    { id: 'B074-4', lesson: 'B074', q: '株式払込剰余金・資本償還準備金は配当に使える？', a: '使えない。資本と同じ扱い' },
    { id: 'B074-5', lesson: 'B074', q: 'モデル定款で期末配当を決めるのは？', a: '取締役が提案し、株主が普通決議で宣言。提案額を超えられない' },
    { id: 'B074-6', lesson: 'B074', q: '中間配当（interim dividend）を決めるのは？', a: '取締役（株主総会の決議はいらない）' },
    { id: 'B075-1', lesson: 'B075', q: '公開会社の純資産テスト（s831）は？', a: '配当後の純資産 ≧ 払込請求済株式資本＋分配不能準備金' },
    { id: 'B075-2', lesson: 'B075', q: '分配不能準備金に入るものは？', a: '株式払込剰余金、資本償還準備金、未実現の純利益、定款等で禁じた準備金' },
    { id: 'B075-3', lesson: 'B075', q: '公開会社の配当の上限の出し方は？', a: '実現利益 − 実現損失 − 未実現の純損失（純利益は足さない）' },
    { id: 'B075-4', lesson: 'B075', q: '違法配当を返す株主は？（s847）', a: '違法だと知っていたか、知るべき合理的な理由があった株主' },
    { id: 'B075-5', lesson: 'B075', q: 'It\'s a Wrap v Gula のポイントは？', a: '事実を知っていれば、法律を知らなくても返還義務がある' },
    { id: 'B075-6', lesson: 'B075', q: '違法配当を承認した取締役の責任は？', a: '会社に返す責任。誠実かつ合理的なら裁判所が免除しうる（s1157）' },
    { id: 'B076-1', lesson: 'B076', q: 'ライツ・イシューとボーナス・イシューの違いは？', a: 'ライツは既存株主への有償発行、ボーナスは準備金を組み入れる無償発行' },
    { id: 'B076-2', lesson: 'B076', q: 'プレミアム付き発行の仕訳の考え方は？', a: '額面は株式資本、超える分は株式払込剰余金へ' },
    { id: 'B076-3', lesson: 'B076', q: '種類株主の権利の変更に必要な同意は？（s630）', a: 'その種類の額面 3/4 以上の書面同意か、種類株主総会の特別決議' },
    { id: 'B076-4', lesson: 'B076', q: '権利の変更に反対した種類株主ができることは？（s633）', a: '15% 以上なら、同意から21日以内に裁判所へ取消しを申し立てる' },
    { id: 'B076-5', lesson: 'B076', q: '担保の登録の期限と、しなかった結果は？', a: '翌日から21日以内。怠ると担保は清算人等に無効、借金はすぐ返済対象' },
    { id: 'B076-6', lesson: 'B076', q: '社債権者と株主の違い（3つ）は？', a: '社債権者は債権者で議決権なし、利益がなくても利息、清算で先に返済' }
  ]
});
