(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 227,
  part: 10,
  partTitle: '知的財産法',
  lessons: [
    {
      id: 'B113',
      no: 113,
      title: '意匠：登録意匠と非登録意匠',
      goal: '製品の見た目を守る意匠（design）の3つの権利を見分け、要件・期間・侵害の違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: '形のよさにもお金がかかっている',
          paras: ['雑貨屋で、ひと目で欲しくなるマグカップがある。保温の仕組みは普通でも、丸みのある形や持ち手の曲線がよくて売れている。その形を考えるのに、デザイナーは何か月もかけている。', 'すぐにそっくりな形の安いカップが出回ったら、元の会社は困る。製品の「見た目」を守るのが、意匠（design）の権利になる。']
        },
        {
          title: '意匠（design）とは',
          paras: ['意匠は、製品の全体または一部の外観（appearance）のこと。線、輪郭、色、形、質感、素材、装飾といった特徴から生まれる（Registered Designs Act 1949 s1(2)）。', '守るのは見た目だけ。製品がどう動くか（機能や仕組み）は守らない。仕組みを守るのは特許になる。']
        },
        {
          title: '1つの商品に重なる権利',
          svg: `<svg viewBox="0 0 440 292" role="img" aria-label="電気ケトルの特徴ごとに使える知的財産権の対応" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">1つの商品に重なる権利（電気ケトル）</text><rect x="20" y="50" width="400" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="79" fill="var(--ink)">中の仕組み（加熱の方式）</text><text x="404" y="79" text-anchor="end" font-weight="600" fill="var(--ink)">特許</text><rect x="20" y="108" width="400" height="46" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="137" fill="var(--ink)">全体の形（注ぎ口・取っ手）</text><text x="404" y="137" text-anchor="end" font-weight="600" fill="var(--ink)">意匠</text><rect x="20" y="166" width="400" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="195" fill="var(--ink)">表面の模様</text><text x="404" y="195" text-anchor="end" font-weight="600" fill="var(--ink)">意匠・著作権</text><rect x="20" y="224" width="400" height="46" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="253" fill="var(--ink)">名前とロゴ</text><text x="404" y="253" text-anchor="end" font-weight="600" fill="var(--ink)">商標</text></svg>`,
          caption: '1つの商品を、いくつもの権利で同時に守れる。試験では「この特徴はどの権利で守るか」を分けて考える。'
        },
        {
          title: '英国の意匠の3つの権利',
          table: { caption: '登録するものと、自動で生まれるもの', head: ['権利', '守るもの', '期間'], rows: [['登録意匠（registered design）', '外観全体（形・色・模様など）。登録が必要', '登録から5年。5年ごとに更新して最長25年'], ['非登録の意匠権（UK unregistered design right）', '立体の形状・構成（shape or configuration）。自動で生まれる', '最初の販売の年末から10年か、創作の年末から15年の早い方'], ['補充的非登録意匠（supplementary unregistered design）', '外観（模様も含む）。英国で公表すると自動で生まれる', '公表から3年']] },
          after: '補充的非登録意匠は、EU を離れた後の2021年1月に作られた。流行の短い商品を手軽に守るための権利。'
        },
        {
          title: '登録意匠の要件と効力',
          list: ['新規性（novelty）: 同じ意匠や、細かい点しか違わない意匠が、出願の前に公表されていない', '独自性（individual character）: 事情に詳しい利用者（informed user）から見て、前からある意匠と全体の印象が違う', 'デザイナー自身が公表した場合は、12か月以内に出願すれば新規性を失わない（猶予期間）', '守られないもの: 技術的な機能だけで決まる特徴、他の製品とつなぐための形（must fit）、公序良俗に反する意匠'],
          formula: '登録意匠 ＝ 独占権。まねしていなくても侵害になる（s7・s7A）',
          after: '登録は英国知的財産庁（UK Intellectual Property Office）で行う。'
        },
        {
          title: '非登録の意匠権（CDPA 1988 第3部）',
          list: ['守るもの: 製品の全体または一部の、内側や外側の形状・構成。独自に作られ（original）、その分野でありふれていない（not commonplace）ものに限る（s213）', '守らないもの: 作り方の方法や原理、表面の装飾（surface decoration）、他の製品につなぐ形（must fit）、他の製品と見た目をそろえる形（must match）', '持ち主: 原則はデザイナー。従業員が仕事で作ったものは雇用者（s215）', '侵害になるのは、まねして作った場合だけ。独自に似た形を作った人は侵害にならない', '最後の5年は、使用料を払えば誰でも使える（licence of right）']
        },
        {
          title: '例題: 非登録の意匠権はいつ終わる？',
          example: {
            problem: 'ある会社が、新しいやかんの形を2026年に図面にした。この形のやかんを2028年に売り始めた。非登録の意匠権はいつ終わる？',
            steps: ['ルールは2つ。創作（図面か製品に記録した）年の年末から15年、または最初に販売した年の年末から10年。早く終わる方で終わる', '15年のルール: 2026年末 ＋ 15年 ＝ 2041年末', '10年のルール: 2028年末 ＋ 10年 ＝ 2038年末', '早い方は2038年末'],
            answer: '2038年12月31日に終わる（2034年から最後の5年は licence of right）'
          }
        },
        {
          title: 'なぜ？ 登録と非登録の違い',
          paras: ['登録意匠は、出願と費用の手間をかける代わりに、強い独占権と長い期間（最長25年）が手に入る。登録簿を見れば誰でも確かめられるので、「独自に作った」という言い訳は通らない。', '非登録の権利は手続きがいらない代わりに、まねした人にしか使えず、期間も短い。登録しない小さな会社や、売れる期間の短い商品も、最低限は守られる。'],
          note: { kind: 'warn', text: '日本の意匠法では、登録しないと意匠権は生まれない（形のまねは不正競争防止法で発売から3年守られる程度）。英国では登録しなくても非登録の意匠権が自動で生まれる。また「登録はまね不要で侵害、非登録はまねが必要」を逆に覚えない。表面の模様は非登録の意匠権の対象外。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['意匠は製品の外観を守る。仕組みは守らない（それは特許）', '登録意匠: 新規性と独自性が要件。5年ごとに更新して最長25年。まねしていなくても侵害になる', '非登録の意匠権: 立体の形状・構成を自動で守る。表面の装飾は対象外。販売から10年か創作から15年の早い方。まねした場合だけ侵害']
        },
        {
          title: '英単語',
          words: [
            ['design', 'デザイン', '意匠（製品の外観）'],
            ['registered design', 'レジスタード デザイン', '登録意匠'],
            ['unregistered design right', 'アンレジスタード', '非登録の意匠権（英国）'],
            ['novelty', 'ノヴェルティ', '新規性'],
            ['individual character', 'インディヴィジュアル キャラクター', '独自性（全体の印象が違う）'],
            ['informed user', 'インフォームド ユーザー', '事情に詳しい利用者'],
            ['shape or configuration', 'コンフィギュレーション', '形状・構成'],
            ['surface decoration', 'サーフェス デコレーション', '表面の装飾']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following is protected by UK unregistered design right?', choices: ['Surface decoration applied to an article', 'The method by which an article is constructed', 'The shape or configuration of an article', 'The idea behind the design of an article'], answer: 2, explain: 'CDPA 1988 s213。非登録の意匠権は立体の形状・構成を守る。表面の装飾と作り方の方法・原理は、はっきり対象外とされている。アイデアそのものは、どの知的財産権でも守られない。' },
        { q: 'If it is renewed at every opportunity, for how many years in total can a UK registered design be protected?', type: 'number', answer: 25, unit: '年', explain: '登録から5年。5年ごとに4回更新できるので、5 ＋ 5 × 4 ＝ 25年（RDA 1949 s8）。15年や10年は非登録の意匠権の数字。' },
        { q: 'A design for a lamp was first recorded in a design document in 2025. Lamps made to the design were first sold in 2027. When will UK unregistered design right in the design expire?', choices: ['31 December 2040', '31 December 2037', '31 December 2035', '31 December 2052'], answer: 1, explain: '15年のルールは 2025年末 ＋ 15 ＝ 2040年末。10年のルールは 2027年末 ＋ 10 ＝ 2037年末。早い方の2037年末で終わる。2035年は創作の年に10年を足した間違い。2052年は登録意匠の25年と混同した答え。' },
        { q: 'A社は登録意匠を持つ。B社は A社の意匠を一度も見ずに、たまたまそっくりな形の製品を独自に作って売った。正しいものはどれ？', choices: ['独自に作ったので、侵害にならない', '非登録の意匠権の侵害にもなる', '登録から3年たっていれば、侵害にならない', '登録意匠の侵害になる。登録意匠は独占権で、まねしたかどうかを問わない'], answer: 3, explain: '登録意匠は独占権なので、独自に作った人も侵害になる。一方、非登録の意匠権は、まねした場合だけ侵害になる。B社はまねしていないので、非登録の意匠権の侵害にはならない。' },
        { q: '英国の登録意匠の要件の組み合わせとして正しいものはどれ？', choices: ['新規性（novelty）と進歩性（inventive step）', '新規性（novelty）と独自性（individual character）', '識別力（distinctiveness）と使用の意思', '独自に作られたこと（original）と、ありふれていないこと'], answer: 1, explain: '進歩性は特許の要件。識別力は商標の考え方。「original で not commonplace」は非登録の意匠権の要件。登録意匠は新規性と独自性。' },
        { q: 'Which of the following statements about supplementary unregistered design in the UK is correct?', choices: ['It protects the appearance of a product for 25 years and does not require proof of copying', 'It arises only when the design is registered with the UK Intellectual Property Office', 'It protects the appearance of a product for three years from first disclosure in the UK, but only against copying', 'It protects only the internal shape of an article and not its surface decoration'], answer: 2, explain: '補充的非登録意匠は公表から3年で、まねされた場合だけ使える。25年でまね不要なのは登録意匠。登録が必要なものではない。模様を含む外観を守る点で、非登録の意匠権（形状・構成だけ）と違う。' }
      ]
    },
    {
      id: 'B114',
      no: 114,
      title: 'パッシング・オフと会社名',
      goal: 'パッシング・オフの3つの要件を事例に当てはめ、会社名を守る会社法の手続きとの違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)'],
      slides: [
        {
          title: 'そっくりな看板のラーメン店',
          paras: ['駅前に「麺屋ひかり」という人気のラーメン店がある。ある日、近くに「麺屋ひかり本店」という店ができた。看板の字体も色もそっくりで、客は同じ系列の店だと思って入っていく。', '最初の店が名前を商標登録していなくても、英国ではこの取り違えを止められる。それがパッシング・オフ（passing off）になる。']
        },
        {
          title: 'パッシング・オフとは',
          paras: ['パッシング・オフは、自分の商品や事業を他人のものだと思わせて売る行為。コモン・ロー（判例法）上の不法行為（tort）で、条文ではなく判例が作ってきた。', '守るのは名前やマークそのものではなく、事業の「のれん（goodwill）」。登録はいらない。商標法（Trade Marks Act 1994 s2(2)）も、パッシング・オフの訴えは別に残ると定めている。']
        },
        {
          title: '3つの要件',
          svg: `<svg viewBox="0 0 440 330" role="img" aria-label="パッシング・オフの3つの要件" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">パッシング・オフの3要件</text><rect x="20" y="50" width="400" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" font-weight="600" fill="var(--ink)">1 のれん（客を引きつける評判）</text><text x="36" y="99" font-size="13" fill="var(--quiet)">goodwill</text><rect x="20" y="124" width="400" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="150" font-weight="600" fill="var(--ink)">2 客を誤解させる表示</text><text x="36" y="173" font-size="13" fill="var(--quiet)">misrepresentation</text><rect x="20" y="198" width="400" height="62" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="224" font-weight="600" fill="var(--ink)">3 損害（またはそのおそれ）</text><text x="36" y="247" font-size="13" fill="var(--quiet)">damage</text><rect x="90" y="274" width="260" height="42" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="301" text-anchor="middle" font-weight="600" fill="var(--ink)">3つそろえば成立</text></svg>`,
          caption: 'Reckitt & Colman v Borden（1990、Jif Lemon 事件）で、貴族院はこの3つに整理した（classic trinity）。3つとも原告が証明する。'
        },
        {
          title: 'Jif Lemon 事件（1990）',
          paras: ['原告は、レモン汁をレモンの形と色のプラスチック容器に入れ、「Jif」の名前で長年売っていた。被告は、似たレモン形の容器で別のレモン汁を売ろうとした。ラベルには別の名前を書いていた。', '裁判所は、買い物客はラベルを読まず、レモン形の容器を見て Jif だと思って買うと認めた。容器の形そのものに、のれんが結びついていた。被告の販売は差し止められた。'],
          note: { kind: 'tip', text: '名前だけでなく、形や包装の見た目（get-up）でもパッシング・オフになる。ラベルの名前が違っても、客が実際に誤解するかで判断する。' }
        },
        {
          title: '3つの要件の中身',
          list: ['のれん（goodwill）: 客を引きつける力（IRC v Muller、1901）。英国内に客が必要で、海外での評判だけでは足りない（Starbucks (HK) v BSkyB、2015）', '誤解させる表示（misrepresentation）: 客が、相手の商品や事業を原告のものか、原告とつながりがあると思うこと。だますつもりは不要で、うっかりでも成立する', '損害（damage）: 売上を奪われる、粗悪品で評判が落ちる、事業を広げる機会を失うなど。損害が出るおそれでもよい']
        },
        {
          title: '会社名とパッシング・オフの判例',
          table: { caption: '会社名・ドメイン名が問題になった例', head: ['判例', '結果'], rows: [['Ewing v Buttercup Margarine（1917）', '「Buttercup Dairy」の店を持つ原告に対し、後から「Buttercup Margarine Co Ltd」と名乗った会社の名前の使用が差し止められた。事業が広がれば混同が起きるとされた'], ['Glaxo v Glaxowellcome（1996）', '合併が発表された2社の名前を合わせた会社を先に登記し、高く売ろうとした。裁判所は名前の変更を命じた'], ['BT v One in a Million（1999）', '有名企業の名前のドメイン名を取って売ろうとした。だますための道具（instrument of fraud）として差し止められた']] }
        },
        {
          title: '会社名を守る3つのルート',
          table: { caption: 'B061 の会社法の手続きとパッシング・オフ', head: ['ルート', '判断する人', '使う場面'], rows: [['似すぎた名前の変更命令（CA 2006 s67）', '大臣（Secretary of State）', '登記から12か月以内'], ['会社名の裁定人への異議（s69）', '会社名の裁定人（company names adjudicator、Company Names Tribunal）', 'その名前にのれんがある人'], ['パッシング・オフ', '裁判所', '会社名に限らず、商品名・包装も。差止めとお金の救済']] },
          after: '会社法の手続きは、登記された名前を直すだけ。パッシング・オフは、紛らわしい商売そのものを止め、損害の埋め合わせも求められる。'
        },
        {
          title: '例題: パッシング・オフは成立する？',
          example: {
            problem: 'C社は10年前から英国で「Blue Fox」という名前の手作り家具を売り、客によく知られている（商標登録はない）。D社が「Blue Fox Furniture Ltd」として登記し、似たロゴで家具を売り始めた。C社はパッシング・オフで訴えられる？',
            steps: ['① のれん: C社は英国で10年売り、客に知られている。のれんがある', '② 誤解させる表示: 同じ名前と似たロゴで同じ家具を売る。客は C社の商品か、つながりがあると思う。D社にだます意図があったかは関係ない', '③ 損害: C社の売上が奪われる。D社の品質が悪ければ評判も落ちる', '3つそろうので成立。商標登録がなくても訴えられる'],
            answer: '成立する。名前とロゴの使用の差止めと、お金の救済を求められる。会社名については s69 の異議も使える'
          }
        },
        {
          title: 'なぜ？ 登録がなくても守る理由',
          paras: ['のれんは、長年の営業で積み上げた会社の財産。登録していない小さな店にも、客の信用という財産がある。他人がそれにただ乗りして客を奪うのは不公平なので、裁判所が守ってきた。', 'ただし、守るのは客の誤解から生まれる損害だけ。名前そのものの独占権ではない。'],
          note: { kind: 'warn', text: '登録がいらない代わりに、原告がのれん・誤解・損害を全部証明する必要があり、登録商標の侵害より手間がかかる。まだ客がいない新しい事業は、のれんがないので使えない。日本の不正競争防止法は条文で決まっているが、英国のパッシング・オフは判例法。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['パッシング・オフはコモン・ローの不法行為。登録はいらず、事業ののれんを守る', '要件は、のれん・誤解させる表示・損害の3つ（Jif Lemon 事件）。だます意図は不要', '会社名は、会社法の変更命令・裁定人に加えて、パッシング・オフでも守れる（Ewing v Buttercup、Glaxo）']
        },
        {
          title: '英単語',
          words: [
            ['passing off', 'パッシング オフ', '他人の商品・事業と誤解させる行為'],
            ['goodwill', 'グッドウィル', 'のれん（客を引きつける評判）'],
            ['misrepresentation', 'ミスレプリゼンテイション', '誤解させる表示'],
            ['damage', 'ダミッジ', '損害'],
            ['tort', 'トート', '不法行為'],
            ['get-up', 'ゲットアップ', '包装・外装の見た目'],
            ['classic trinity', 'クラシック トリニティ', '3要件（のれん・誤解・損害）'],
            ['Company Names Tribunal', 'カンパニー ネームズ トリビューナル', '会社名の裁定人が s69 の異議を判断する場']
          ]
        }
      ],
      quiz: [
        { q: 'According to Reckitt and Colman v Borden (the Jif Lemon case), which three elements must a claimant prove to succeed in an action for passing off?', choices: ['Registration, use and confusion', 'Goodwill, intention to deceive and damage', 'Goodwill, misrepresentation and damage', 'Novelty, individual character and copying'], answer: 2, explain: '3要件は、のれん・誤解させる表示・損害。登録は不要。新規性と独自性は登録意匠の要件。だます意図（intention to deceive）は要件ではなく、うっかりの誤解でも成立する。' },
        { q: 'A new business has created a distinctive name and logo but has not yet started trading or acquired any customers. Another business starts using a very similar name. Why is an action for passing off likely to fail?', choices: ['Passing off only protects registered trade marks', 'The new business has no goodwill to protect', 'The other business did not intend to deceive anyone', 'Passing off only applies to company names'], answer: 1, explain: 'のれんは、客を引きつける力で、実際の営業から生まれる。客がいなければのれんがない。パッシング・オフは登録のない名前を守る仕組みで、会社名に限らない。だます意図は要件ではない。' },
        { q: 'Ewing v Buttercup Margarine（1917）の結論として正しいものはどれ？', choices: ['会社名は登記されていたので、パッシング・オフは成立しないとした', '原告は名前を商標登録していなかったので、訴えを退けた', '2社の事業が同じ地域になかったので、混同のおそれはないとした', '「Buttercup Dairy」の店を持つ原告ののれんを守り、似た名前の会社の名前の使用を差し止めた'], answer: 3, explain: '会社名を正しく登記しても、パッシング・オフの責任は免れない。原告の事業が将来広がれば客が混同するとして、差止めが認められた。商標登録は要件ではない。' },
        { q: 'Shortly after a merger of Glaxo plc and Wellcome plc was announced, two individuals registered a company called Glaxowellcome Ltd, intending to sell it to the merged group for a large sum. What did the court do?', choices: ['It refused relief because the company name had been validly registered', 'It awarded damages only, because no goods had been sold', 'It ordered the individuals to change the name of the company', 'It refused relief because more than 12 months had passed since registration'], answer: 2, explain: 'Glaxo v Glaxowellcome（1996）。名前を高く売るための登記は、だますための道具として、名前の変更を命じた。会社名の登記は有効でも、パッシング・オフから守られない。12か月の期限は大臣の変更命令（s67）の話で、裁判所の救済には関係ない。' },
        { q: 'E社は F社の評判を知らず、たまたま F社によく似た店名と看板で営業を始めた。客は E社を F社の支店だと思っている。正しいものはどれ？', choices: ['パッシング・オフは成立しうる。誤解させる表示に、だます意図は必要ない', 'E社に悪意がないので、パッシング・オフは成立しない', 'F社が商標登録していない限り、何もできない', '会社法の手続きしか使えない'], answer: 0, explain: '誤解させる表示は、客が誤解すれば足り、E社の意図は問わない。登録は不要。のれん・誤解・損害がそろえば成立する。' },
        { q: 'G Ltd has goodwill in the name "Lumen". A new company is registered as Lumen Lights Ltd, a name similar enough to suggest a connection with G Ltd. G Ltd wishes to object under s69 of the Companies Act 2006 rather than bring a court action. Who decides the objection?', choices: ['The Secretary of State, within 12 months of registration', 'A company names adjudicator of the Company Names Tribunal', 'The High Court, in an action for passing off', 'The registrar of companies, when the name is first registered'], answer: 1, explain: 's69 の異議は、会社名の裁定人（Company Names Tribunal）が判断し、名前の変更を命じられる。大臣の12か月以内の命令は s67 の「似すぎた名前」の別ルート。裁判所はパッシング・オフ。登記所は登記の時に同じ名前を断るだけで、のれんの有無は判断しない。' }
      ]
    },
    {
      id: 'B115',
      no: 115,
      title: '知的財産を無断で使われたときの救済',
      goal: '知的財産の侵害に対する民事の救済（差止め・損害賠償・利益の返還・引渡し）と刑事罰を区別し、場面に合わせて選べるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(b)'],
      slides: [
        {
          title: '自転車を盗まれたら',
          paras: ['自転車を盗まれたら、まず「返して」と言い、壊された分の弁償を求め、ひどければ警察に届ける。', '知的財産を無断で使われた（侵害された、infringement）ときも同じ。①使うのをやめさせる、②お金で埋め合わせる、③作られた偽物を取り上げる、④悪質なら刑事罰。民事の救済（civil remedies）と刑事罰の2本立てになる。']
        },
        {
          title: '侵害を見つけてからの流れ',
          svg: `<svg viewBox="0 0 440 296" role="img" aria-label="知的財産の侵害を見つけてから救済を得るまでの4つの段階" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">侵害を見つけてからの流れ</text><rect x="20" y="50" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="80" fill="var(--ink)">1 証拠を押さえる（search order）</text><rect x="20" y="110" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="140" fill="var(--ink)">2 仮差止めで販売をすぐ止める</text><rect x="20" y="170" width="400" height="48" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="200" fill="var(--ink)">3 裁判で侵害かどうかを判断</text><rect x="20" y="230" width="400" height="48" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="260" font-weight="600" fill="var(--ink)">4 差止め＋お金の救済＋引渡し</text></svg>`,
          caption: 'お金の救済は、損害賠償か利益の返還のどちらか1つを選ぶ。'
        },
        {
          title: '差止め（injunction）',
          paras: ['「侵害をやめなさい」という裁判所の命令で、救済の中心になる。判決で出る本案の差止め（final injunction）と、裁判の前に急いで止める仮差止め（interim injunction）がある。'],
          list: ['仮差止めの基準（American Cyanamid v Ethicon、1975）: 審理すべき重大な問題があるか（serious question to be tried）', '後の損害賠償で十分に埋め合わせられるか。十分なら出さない', 'どちらに出すと不都合が大きいか（balance of convenience）'],
          after: '差止めは衡平法（equity）上の救済なので、裁判所の裁量で出す。仮差止めを得た原告は、後で負けたら相手の損害を払うと約束する（cross-undertaking in damages）。'
        },
        {
          title: 'お金の救済: どちらか1つを選ぶ',
          table: { caption: '損害賠償と利益の返還', head: ['救済', '何を基準にするか'], rows: [['損害賠償（damages）', '原告が失った分。失った売上の利益や、使用料に当たる額（reasonable royalty）'], ['利益の返還（account of profits）', '侵害者が侵害で得た利益を、そのまま原告に渡させる']] },
          formula: '損害賠償 か 利益の返還（election）。両方は取れない',
          after: '著作権では、悪質な侵害に追加の損害賠償（additional damages）も認められる（CDPA 1988 s97(2)）。'
        },
        {
          title: '例題: どちらを選ぶ？',
          example: {
            problem: 'F社が、E社の著作権のあるソフトを無断でコピーして 4,000本売った。F社の利益は1本 $15。E社は、そのうち 1,000本は自社で売れたはずで、1本 $40 の利益を失った。残りの 3,000本の使用料に当たる額は1本 $5。E社はどちらを選ぶ？',
            steps: ['損害賠償: 失った利益 1,000 × $40 ＝ $40,000', '残りの分の使用料: 3,000 × $5 ＝ $15,000', '損害賠償の合計: $40,000 ＋ $15,000 ＝ $55,000', '利益の返還: 4,000 × $15 ＝ $60,000', '大きい方を選ぶ。両方を足した $115,000 にはできない'],
            answer: '利益の返還 $60,000 を選ぶ'
          }
        },
        {
          title: 'そのほかの救済と手段',
          list: ['引渡し・廃棄（delivery up / destruction）: 侵害品や偽物を作る道具を引き渡させ、廃棄させる', '確認判決（declaration）: 侵害があること、権利が有効であることを裁判所に認めてもらう', '捜索命令（search order）: 証拠を隠される前に相手の場所に入り、証拠を確保する（Anton Piller v Manufacturing Processes、1976）', '開示命令（Norwich Pharmacal order）: 侵害に関わった第三者に、侵害者の名前を明かさせる', '税関への申立て: 疑わしい輸入品を国境（Border Force）で止めてもらう'],
          after: 'ここまでの民事の救済は、著作権・特許・商標・意匠・パッシング・オフのどれでも使える。'
        },
        {
          title: '知らずに侵害した人は？',
          table: { caption: '権利があると知らず、知る合理的な理由もなかった侵害者', head: ['権利', 'お金の救済', '差止め'], rows: [['著作権（CDPA s97(1)）', '損害賠償なし。利益の返還などは可', '出せる'], ['非登録の意匠権（CDPA s233(1)）', '損害賠償なし。利益の返還などは可', '出せる'], ['登録意匠（RDA 1949 s24B）', '損害賠償なし。利益の返還は可（2014年の改正後）', '出せる'], ['特許（Patents Act 1977 s62(1)）', '損害賠償も利益の返還もなし', '出せる'], ['登録商標', '例外はなく、責任を負う', '出せる']] },
          after: '知らなかった人でも、侵害をやめさせる差止めは必ず出せる。製品に「patent」「registered」と書くだけでは、知らせたことにならない。番号か、番号を載せたウェブのリンクを付ける必要がある。'
        },
        {
          title: '刑事罰（criminal offences）',
          table: { caption: '犯罪になる侵害（2026年時点）', head: ['権利', '犯罪になる行為と刑'], rows: [['商標（Trade Marks Act 1994 s92）', '偽造品（counterfeit goods）を作る・売る・輸入する。最長10年の拘禁'], ['著作権（CDPA 1988 s107）', '海賊版を商売で作る・売る・ネットで配る。最長10年の拘禁'], ['登録意匠（RDA 1949 s35ZA）', '登録意匠を意図的にそっくりまねた製品を商売で作る・売る。最長10年の拘禁'], ['特許、非登録の意匠権', '侵害しても犯罪にはならない（民事だけ）']] },
          after: '取締りは主に地方の取引基準局（Trading Standards）や警察が行う。会社が犯罪をしたときは、同意した取締役なども罰せられる。'
        },
        {
          title: 'なぜ？ 差止めが中心になる理由',
          paras: ['知的財産は目に見えないので簡単にまねされ、一度出回ると取り返しがつかない。だから、すぐに止める差止めが中心になる。お金の救済は「原告の損」と「侵害者の得」から選べるので、侵害しても得をしない。', '偽造品や海賊版は、買う人もだまされ、安全上の危険もある。だから悪質なものは犯罪にしている。'],
          note: { kind: 'warn', text: '損害賠償と利益の返還は両方取れない。また、相手の取引先（小売店など）に根拠なく「訴えるぞ」と警告すると、逆に不当な警告（unjustified threats）として訴えられることがある（特許・商標・意匠。Intellectual Property (Unjustified Threats) Act 2017）。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['民事の救済は、差止め（仮・本案）、損害賠償か利益の返還（どちらか1つ）、引渡し・廃棄', '知らずに侵害した人: 著作権・意匠は損害賠償なし（利益の返還は可）、特許は両方なし、商標は例外なし。差止めは出せる', '商標の偽造品、著作権の海賊版、登録意匠の意図的なまねは犯罪（最長10年）。特許の侵害は犯罪ではない']
        },
        {
          title: '英単語',
          words: [
            ['infringement', 'インフリンジメント', '侵害'],
            ['injunction', 'インジャンクション', '差止め'],
            ['interim injunction', 'インテリム', '仮差止め'],
            ['damages', 'ダミッジズ', '損害賠償（金）'],
            ['account of profits', 'アカウント オブ プロフィッツ', '利益の返還'],
            ['delivery up', 'デリバリー アップ', '侵害品の引渡し'],
            ['search order', 'サーチ オーダー', '捜索命令（証拠の確保）'],
            ['counterfeit goods', 'カウンターフィット', '偽造品']
          ]
        }
      ],
      quiz: [
        { q: 'In an action for infringement of intellectual property, which of the following statements about damages and an account of profits is correct?', choices: ['The claimant may always recover both in full', 'An account of profits is only available in criminal proceedings', 'Damages are only available if an injunction is refused', 'The claimant must elect between them and cannot recover both'], answer: 3, explain: '損害賠償は原告の損、利益の返還は侵害者の得を基準にする。同じ侵害について二重に取らないよう、どちらか1つを選ぶ（election）。差止めとお金の救済は一緒に求められる。' },
        { q: 'An infringer made a profit of $12 on each of 5,000 infringing items it sold. The claimant can prove that its own losses caused by the infringement were $45,000. If the claimant chooses the more valuable monetary remedy, how much will it recover?', type: 'number', answer: 60000, unit: '$', explain: '利益の返還: 5,000 × $12 ＝ $60,000。損害賠償は $45,000。大きい方の利益の返還を選び $60,000。両方を足した $105,000 は取れない。' },
        { q: 'Infringement of which of the following is NOT a criminal offence under UK law?', choices: ['A registered trade mark, by selling counterfeit goods in the course of business', 'Copyright, by selling pirated copies in the course of business', 'A patent', 'A registered design, by intentionally copying it in the course of business'], answer: 2, explain: '特許の侵害は民事だけで、犯罪にはならない。偽造品は Trade Marks Act 1994 s92、海賊版は CDPA 1988 s107、登録意匠の意図的なまねは RDA 1949 s35ZA の犯罪で、どれも最長10年の拘禁。' },
        { q: 'A defendant infringed copyright, but shows that at the time it did not know, and had no reason to believe, that copyright subsisted in the work. Which statement is correct?', choices: ['The claimant has no remedy at all', 'The claimant cannot recover damages, but other remedies such as an injunction remain available', 'The claimant may recover additional damages for flagrancy', 'The defendant has committed a criminal offence'], answer: 1, explain: 'CDPA s97(1)。知らなかった侵害者には損害賠償を求められないが、ほかの救済（差止め、利益の返還など）は残る。悪質さ（flagrancy）による追加の損害賠償は、知らなかった場合の逆の話。' },
        { q: '裁判所が仮差止めを出すかを決める基準（American Cyanamid v Ethicon）に含まれないものはどれ？', choices: ['審理すべき重大な問題があること', '後の損害賠償で十分に埋め合わせられるかどうか', 'どちらに出すと不都合が大きいか（balance of convenience）', '原告が裁判で勝つことが確実であること'], answer: 3, explain: '仮差止めは裁判の前に出すので、勝つことの確実さまでは求めない。重大な問題があれば、損害賠償で足りるか、不都合のバランスで判断する。' },
        { q: '侵害者が、偽物の在庫や証拠になる書類を処分してしまいそうだ。証拠が消える前に、相手の場所に入って確保するための裁判所の命令はどれ？', choices: ['捜索命令（search order）', '利益の返還（account of profits）', '開示命令（Norwich Pharmacal order）', '確認判決（declaration）'], answer: 0, explain: '捜索命令（昔の名前は Anton Piller order）は、予告なしに証拠を確保する命令。開示命令は第三者に侵害者の名前を明かさせるもので、証拠の確保ではない。' }
      ]
    },
    {
      id: 'B116',
      no: 116,
      title: '第10部 総合演習：知的財産',
      goal: '新商品のどの特徴をどの知的財産権で守れるかを判断し、侵害されたときの救済を選べるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:G1(a)', 'K3:G1(b)'],
      slides: [
        {
          title: 'シナリオ: Kumo Ltd の新しいケトル',
          paras: ['英国の家電メーカー Kumo Ltd が、新しい電気ケトルを発売する。特徴は次のとおり。'],
          list: ['水を半分の時間で沸かす、新しい加熱の仕組み', '雲のような丸い独特の形', '表面に描いた雲の模様', '「KUMO」という名前とロゴ。英国で10年使い、客に知られている', '取扱説明書と広告写真']
        },
        {
          title: 'どの権利で守る？',
          table: { caption: '特徴ごとの権利と登録の要否', head: ['守りたいもの', '使える権利', '登録'], rows: [['新しい加熱の仕組み', '特許（patent）', '必要。公表の前に出願'], ['ケトルの形', '登録意匠、非登録の意匠権', '登録意匠は必要。非登録は自動'], ['表面の雲の模様', '登録意匠、著作権（美術の著作物）', '著作権は自動'], ['名前「KUMO」とロゴ', '登録商標、パッシング・オフ', '商標は必要。パッシング・オフは不要'], ['取扱説明書・広告写真', '著作権', '自動']] }
        },
        {
          title: '期間の比較',
          table: { caption: '各権利が続く期間（B110〜B114 のまとめ）', head: ['権利', '期間'], rows: [['特許', '出願から最長20年（出願4年後から毎年の更新料）'], ['登録商標', '出願日から10年。10年ごとに更新すれば、いつまでも'], ['登録意匠', '5年ごとに更新して最長25年'], ['非登録の意匠権', '販売の年末から10年か、創作の年末から15年の早い方'], ['補充的非登録意匠', '英国での公表から3年'], ['著作権（文芸・美術など）', '作者が死亡した年の末から70年'], ['パッシング・オフ', 'のれんがある限り']] }
        },
        {
          title: '侵害になるのに、まねは必要？',
          table: { caption: '侵害の判断の違い', head: ['まねしていなくても侵害', 'まねした場合だけ侵害'], rows: [['特許', '著作権'], ['登録商標', '非登録の意匠権'], ['登録意匠', '補充的非登録意匠']] },
          after: '登録が必要な権利は、登録簿で誰でも確かめられるので、独自に作っても侵害になる。パッシング・オフは、まねかどうかではなく、客が誤解するかで判断する。'
        },
        {
          title: '例題①: まねされたケトル',
          example: {
            problem: 'ライバルの L社が、Kumo のケトルの形をそっくりまねて（模様はなし）、「KUMA」という名前で売り始めた。Kumo は形を意匠登録していない。Kumo は何で訴え、何を求める？',
            steps: ['形: 登録意匠はないので、非登録の意匠権を使う。立体の形状なので対象になり、L社はまねしたので侵害。発売から3年以内なら補充的非登録意匠も使える','模様はまねされていないので、著作権や表面の装飾は問題にならない', '名前: KUMO を商標登録していれば、似た名前を同じ種類の商品に使い混同のおそれがあるので、商標の侵害', '登録がなくても、Kumo には10年ののれんがあり、客が誤解すればパッシング・オフ', '救済: 仮差止めで販売を止め、損害賠償か利益の返還の一方を選び、在庫の引渡しを求める'],
            answer: '非登録の意匠権と、登録商標またはパッシング・オフで訴える。差止め、お金の救済（1つ）、引渡しを求める'
          }
        },
        {
          title: '例題②: 偽物の輸入',
          example: {
            problem: 'M社は海外から、Kumo のロゴを付けた偽物のケトルを輸入し、商売として売っていた。Kumo の名前とロゴは商標登録してある。どうなる？',
            steps: ['登録商標と同じロゴを同じ商品に使うので、登録商標の侵害（民事）', '偽造品を商売で輸入・販売することは、Trade Marks Act 1994 s92 の犯罪にもなる（最長10年の拘禁）', '商標の侵害は、M社が知らなかったと言っても民事の責任は残る', 'Kumo は税関に申し立てて、次の輸入品を国境で止めてもらえる'],
            answer: '民事の救済（差止め、お金の救済、引渡し・廃棄）に加えて、刑事の責任も問われうる'
          }
        },
        {
          title: 'よくある間違い',
          list: ['アイデアそのものは守られない。著作権は表現を、特許は要件を満たす発明を守る', '特許は公表してから出願すると新規性を失う。登録意匠は、デザイナー自身の公表なら12か月の猶予がある', '損害賠償と利益の返還は両方取れない', '特許の侵害は犯罪ではない'],
          note: { kind: 'warn', text: '「登録していないから何もできない」と答えない。英国では、非登録の意匠権・著作権・パッシング・オフが登録なしで使える。ただし、どれもまねや誤解の証明が必要になる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['仕組みは特許、形は意匠、模様は意匠か著作権、名前とロゴは商標かパッシング・オフ、文章や写真は著作権', '特許・登録商標・登録意匠は、まねしていなくても侵害。著作権・非登録の意匠権は、まねした場合だけ', '救済は、差止め＋（損害賠償か利益の返還）＋引渡し。偽造品・海賊版・登録意匠の意図的なまねは犯罪']
        },
        {
          title: '英単語',
          words: [
            ['intellectual property', 'インテレクチュアル プロパティ', '知的財産'],
            ['infringement', 'インフリンジメント', '侵害'],
            ['proprietor', 'プロプライエター', '（権利の）持ち主'],
            ['licence', 'ライセンス', '使用の許諾'],
            ['remedy', 'レメディ', '救済'],
            ['counterfeit', 'カウンターフィット', '偽造の・偽造品']
          ]
        }
      ],
      quiz: [
        { q: 'Kumo Ltd has developed a new heating mechanism for a kettle. Which intellectual property right is most appropriate to protect the mechanism itself?', choices: ['A registered design', 'A patent', 'UK unregistered design right', 'Copyright'], answer: 1, explain: '仕組み（どう動くか）を守るのは特許。意匠は外観だけを守り、技術的な機能だけで決まる特徴は対象外。著作権は表現を守り、仕組みそのものは守らない。' },
        { q: 'Which of the following rights can be infringed even if the defendant created its product independently, without copying?', choices: ['Copyright', 'UK unregistered design right', 'Supplementary unregistered design', 'A registered design'], answer: 3, explain: '登録意匠は独占権なので、独自に作っても侵害になる。著作権・非登録の意匠権・補充的非登録意匠は、まねした場合だけ侵害になる。' },
        { q: 'A design was registered on 1 March 2027 and is renewed at every opportunity. In which year will its protection finally expire?', type: 'number', answer: 2052, unit: '', explain: '登録意匠は最長25年（5年 × 5期間）。2027 ＋ 25 ＝ 2052年。非登録の意匠権の10年・15年と混同しない。' },
        { q: 'A trader knowingly sells, in the course of business, kettles bearing a sign identical to a registered trade mark owned by Kumo Ltd. The kettles are fakes. Which statement is correct?', choices: ['Only civil remedies are available, because trade mark infringement is never a crime', 'Only criminal penalties are available, because the goods are fakes', 'The trader may face both civil remedies and criminal prosecution', 'No remedy is available unless Kumo Ltd also owns a patent'], answer: 2, explain: '登録商標の侵害なので、差止め・お金の救済・引渡しを求められる。さらに偽造品の販売は Trade Marks Act 1994 s92 の犯罪で、民事と刑事は両立する。' },
        { q: 'Kumo は名前「KUMO」を商標登録していない。新しく設立された会社が「Kumo Kitchen Ltd」と名乗り、似たロゴでケトルを売り始めた。Kumo が裁判所で使える手段として最も適切なものはどれ？', choices: ['パッシング・オフ。英国で10年使った名前にのれんがあり、客が誤解すれば成立する', '登録商標の侵害。使用している名前は自動で商標として守られる', '特許の侵害。名前とロゴも特許で守られる', '何もできない。登録のない名前は守られない'], answer: 0, explain: '登録のない名前を守るのはパッシング・オフ。商標は登録しないと登録商標の侵害は主張できない。会社名については、会社名の裁定人への異議（s69）も別に使える。' },
        { q: 'Which remedy allows a court to order an infringer to hand over infringing goods held in its possession?', choices: ['Account of profits', 'Interim injunction', 'Additional damages', 'Delivery up'], answer: 3, explain: '引渡し（delivery up）は、侵害品や偽物を作る道具を引き渡させる救済で、廃棄の命令とあわせて使われる。利益の返還はお金、仮差止めは販売を止める命令、追加の損害賠償は著作権の悪質な侵害へのお金の救済。' }
      ]
    }
  ],
  cards: [
    { id: 'B113-1', lesson: 'B113', q: '意匠（design）が守るものは？', a: '製品の全体か一部の外観（線・輪郭・色・形・質感・素材・装飾）。機能は守らない' },
    { id: 'B113-2', lesson: 'B113', q: '登録意匠の2つの要件は？', a: '新規性（novelty）と独自性（individual character）' },
    { id: 'B113-3', lesson: 'B113', q: '登録意匠の期間は？', a: '登録から5年。5年ごとに更新して最長25年' },
    { id: 'B113-4', lesson: 'B113', q: '非登録の意匠権の期間は？', a: '最初の販売の年末から10年か、創作の年末から15年の早い方' },
    { id: 'B113-5', lesson: 'B113', q: '非登録の意匠権が守らないものは？', a: '表面の装飾、作り方の方法・原理、must fit と must match の形' },
    { id: 'B113-6', lesson: 'B113', q: '登録意匠と非登録の意匠権の侵害の違いは？', a: '登録はまねしていなくても侵害。非登録はまねした場合だけ' },
    { id: 'B113-7', lesson: 'B113', q: '補充的非登録意匠（supplementary unregistered design）とは？', a: '英国での公表から3年、模様を含む外観をまねから守る' },
    { id: 'B114-1', lesson: 'B114', q: 'パッシング・オフの3要件は？', a: 'のれん（goodwill）・誤解させる表示（misrepresentation）・損害（damage）' },
    { id: 'B114-2', lesson: 'B114', q: '3要件を整理した判例は？', a: 'Reckitt & Colman v Borden（1990、Jif Lemon 事件）' },
    { id: 'B114-3', lesson: 'B114', q: 'パッシング・オフにだます意図は必要？', a: '不要。客が誤解すれば、うっかりでも成立する' },
    { id: 'B114-4', lesson: 'B114', q: 'のれん（goodwill）とは？', a: '客を引きつける力。英国内に客が必要で、海外の評判だけでは足りない' },
    { id: 'B114-5', lesson: 'B114', q: 'Ewing v Buttercup Margarine の結論は？', a: '似た名前の会社の名前の使用を差し止めた。登記してもパッシング・オフは免れない' },
    { id: 'B114-6', lesson: 'B114', q: 'なぜ登録なしでもパッシング・オフで守られる？', a: 'のれんは営業で積み上げた財産で、ただ乗りして客を奪うのは不公平だから' },
    { id: 'B114-7', lesson: 'B114', q: 's69 の会社名の異議を判断するのは誰？', a: '会社名の裁定人（company names adjudicator）。Company Names Tribunal で判断する' },
    { id: 'B115-1', lesson: 'B115', q: '知的財産の主な民事の救済は？', a: '差止め、損害賠償か利益の返還、引渡し・廃棄' },
    { id: 'B115-2', lesson: 'B115', q: '損害賠償と利益の返還は両方取れる？', a: '取れない。どちらか1つを選ぶ（election）' },
    { id: 'B115-3', lesson: 'B115', q: '仮差止めの基準（American Cyanamid）は？', a: '重大な問題があるか、損害賠償で足りるか、不都合のバランス' },
    { id: 'B115-4', lesson: 'B115', q: '著作権を知らずに侵害した人への救済は？', a: '損害賠償はなし。差止めや利益の返還などは残る（s97(1)）' },
    { id: 'B115-5', lesson: 'B115', q: '侵害が犯罪にならない権利は？', a: '特許と非登録の意匠権（民事だけ）' },
    { id: 'B115-6', lesson: 'B115', q: '捜索命令（search order）とは？', a: '証拠を隠される前に相手の場所に入り、証拠を確保する命令' },
    { id: 'B115-7', lesson: 'B115', q: '特許を知らずに侵害した人への救済は？', a: '損害賠償も利益の返還もなし。差止めは出せる（PA 1977 s62(1)）' },
    { id: 'B116-1', lesson: 'B116', q: '製品の仕組み・形・模様・名前を守る権利は？', a: '仕組み＝特許、形＝意匠、模様＝意匠か著作権、名前＝商標かパッシング・オフ' },
    { id: 'B116-2', lesson: 'B116', q: 'まねしていなくても侵害になる権利は？', a: '特許・登録商標・登録意匠' },
    { id: 'B116-3', lesson: 'B116', q: '登録商標の期間は？', a: '10年ごとに更新すれば、いつまでも続く' },
    { id: 'B116-4', lesson: 'B116', q: '特許の期間は？', a: '出願日から最長20年（出願4年後から毎年の更新料）' },
    { id: 'B116-5', lesson: 'B116', q: '偽造品を商売で売ると？', a: '民事の救済に加え、Trade Marks Act 1994 s92 の犯罪（最長10年）' }
  ]
});
