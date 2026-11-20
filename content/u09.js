(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 9,
  part: 6,
  partTitle: '有形固定資産と減価償却',
  lessons: [
    // ---------------------------------------------------------------- L41
    {
      id: 'L41',
      no: 41,
      title: '非流動資産とは、流動資産との違い',
      goal: '資産を流動資産と非流動資産に分けて、その理由を説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D4(a)', 'D4(b)'],
      slides: [
        {
          title: '冷蔵庫と、中の食材',
          paras: ['冷蔵庫の中の牛乳や卵は、1週間ほどで使い切る。冷蔵庫そのものは、10年近く台所で働き続ける。', 'どちらも自分の持ち物（資産）だが、役割がまったく違う。会計でも、資産をこの2種類に分ける。'],
          list: ['すぐ使い切る・お金に戻る → 流動資産（current assets）', '長く使い続ける → 非流動資産（non-current assets）']
        },
        {
          title: '2つの定義',
          paras: ['非流動資産（non-current assets）は、事業で使うために持ち、1年を超えて使う予定の資産。売るために持っているのではない。', '流動資産（current assets）は、1年以内（または通常の営業の流れの中）に売る・使う・現金になる資産と、現金そのもの。流動資産に当てはまらない資産は、すべて非流動資産になる。'],
          after: '「通常の営業の流れ」（operating cycle）は、商品を仕入れて、売って、代金を回収するまでのひと回りのこと。',
          formula: '非流動資産 ＝ 使うために持つ ＋ 1年を超えて使う'
        },
        {
          title: 'たこ焼き屋で分けてみる',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="1年以内に売る・使うものは流動資産、1年を超えて使うものは非流動資産" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">分かれ目は「1年」と「持つ目的」</text><text x="20" y="62" fill="var(--quiet)">今日</text><text x="220" y="62" text-anchor="middle" fill="var(--quiet)">1年後</text><text x="420" y="62" text-anchor="end" fill="var(--quiet)">その先</text><line x1="20" y1="78" x2="410" y2="78" stroke="var(--edge)" stroke-width="1.5"/><path d="M410 72L420 78L410 84z" fill="var(--edge)"/><line x1="20" y1="70" x2="20" y2="86" stroke="var(--edge)" stroke-width="1.5"/><line x1="220" y1="70" x2="220" y2="86" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="100" width="192" height="170" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="128" font-size="16" font-weight="600" fill="var(--ink)">流動資産</text><text x="36" y="148" font-size="12.5" fill="var(--quiet)">current assets</text><text x="36" y="176" fill="var(--ink)">1年以内に売る・使う</text><text x="36" y="204" fill="var(--ink)">・在庫（小麦粉・たこ）</text><text x="36" y="228" fill="var(--ink)">・売掛金</text><text x="36" y="252" fill="var(--ink)">・現金</text><rect x="228" y="100" width="192" height="170" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="244" y="128" font-size="16" font-weight="600" fill="var(--ink)">非流動資産</text><text x="244" y="148" font-size="12.5" fill="var(--ink)">non-current assets</text><text x="244" y="176" fill="var(--ink)">1年を超えて使う</text><text x="244" y="204" fill="var(--ink)">・たこ焼き器</text><text x="244" y="228" fill="var(--ink)">・店舗の建物</text><text x="244" y="252" fill="var(--ink)">・配達用バイク</text></svg>`,
          caption: '形のある非流動資産を、有形固定資産（property, plant and equipment, PPE）という。この部ではこれを学ぶ。'
        },
        {
          title: '有形固定資産の主な種類',
          paras: ['試験では、有形固定資産を種類ごとに別の勘定で記録する。英語の名前で出るので、そのまま覚える。'],
          list: ['land and buildings: 土地と建物（店舗、倉庫）', 'plant and machinery: 機械・設備（たこ焼き器、工場の機械）', 'motor vehicles: 車両（配達用のバン）', 'fixtures and fittings: 備品・内装（棚、カウンター）', 'office equipment: 事務機器・パソコン'],
          after: '形のない非流動資産（ソフトウェアの権利など）は無形資産（intangible assets）といい、第7部で学ぶ。'
        },
        {
          title: '分かれ目は「何のために持つか」',
          paras: ['同じ車でも、持つ目的で分類が変わる。'],
          list: ['車の販売店が、売るために並べている車 → 在庫（inventory）なので流動資産', '同じ販売店が、お客さんへの配達に使うバン → 非流動資産', '不動産会社が売るために持つ土地 → 在庫。自社のオフィスが建っている土地 → 非流動資産'],
          note: { kind: 'warn', text: '「高いもの＝非流動資産」ではない。$50,000 の車でも、売り物なら在庫で流動資産。逆に安い棚でも、何年も店で使うなら、原則は非流動資産になる。決め手は値段ではなく、持つ目的と使う期間。' }
        },
        {
          title: '財政状態計算書での並び',
          paras: ['財政状態計算書では、資産を非流動資産と流動資産に分けて書く。ACCA の形では非流動資産が先。'],
          table: { caption: 'たこ焼き屋の財政状態計算書（資産の部、抜粋）', head: ['区分', '項目', '$'], rows: [['Non-current assets', 'Property, plant and equipment', '25,000'], ['Current assets', 'Inventory', '3,000'], ['', 'Trade receivables', '2,000'], ['', 'Cash', '1,000']], total: ['Total assets', '', '31,000'] },
          after: '流動資産は、現金に変わるのが遅いものから順に（在庫 → 売掛金 → 現金）並べることが多い。'
        },
        {
          title: 'なぜ？ 分けて見せる理由',
          paras: ['銀行がお店にお金を貸すとき、気になるのは「来月の支払いができるか」。支払いに使えるのは、すぐ現金になる流動資産。たこ焼き器を売ってしまうと商売ができないので、支払いには回せない。', '一方、非流動資産は「これから何年も稼ぐための道具」。分けておくと、「すぐ払える力」と「長く稼ぐ土台」の両方が一目で分かる。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['非流動資産＝事業で使うために持ち、1年を超えて使う資産', '流動資産＝1年以内に売る・使う・現金になる資産と、現金', '分類は値段ではなく「何のために持つか」で決まる']
        },
        {
          title: '英単語',
          words: [
            ['non-current assets', 'ノンカレント・アセッツ', '非流動資産'],
            ['current assets', 'カレント・アセッツ', '流動資産'],
            ['property, plant and equipment (PPE)', '', '有形固定資産'],
            ['tangible', 'タンジブル', '形のある'],
            ['motor vehicles', 'モーター・ビークルズ', '車両'],
            ['fixtures and fittings', 'フィクスチャーズ・アンド・フィッティングズ', '備品・内装'],
            ['operating cycle', 'オペレーティング・サイクル', '仕入れ → 販売 → 回収のひと回り']
          ]
        }
      ],
      quiz: [
        { q: 'たこ焼き屋が持つもののうち、非流動資産はどれ？', choices: ['仕入れた小麦粉', 'お客さんへの売掛金', '店で5年使う冷蔵庫', '銀行口座の現金'], answer: 2, explain: '冷蔵庫は使うために持ち、1年を超えて使う。小麦粉（在庫）・売掛金・現金は1年以内に使う・回収するので流動資産。' },
        { q: 'Which of the following is a current asset of a car dealer?', choices: ['The cars held for sale in the showroom', 'The showroom building', 'The delivery van used by the dealer', 'The computer system used by the accounts department'], answer: 0, explain: '売るために持つ車は在庫（inventory）なので流動資産。同じ「車」でも、販売店が自分で使う配達用のバンは非流動資産。' },
        { q: 'Which of the following best defines a non-current asset?', choices: ['An asset costing more than $10,000', 'An asset held for use in the business and expected to be used for more than one year', 'An asset that will be sold within twelve months', 'Any asset that has a physical form'], answer: 1, explain: '決め手は「使うために持つ」と「1年を超えて使う」。金額は関係ない。形があるかどうかも関係ない（形のない無形資産も非流動資産。形のある在庫は流動資産）。' },
        { q: 'A property developer owns land that it intends to sell, and the land on which its head office is built. How should the two pieces of land be classified?', choices: ['Both as non-current assets', 'Both as current assets', 'Land for sale as current (inventory); head office land as non-current', 'Land for sale as non-current; head office land as current'], answer: 2, explain: '売るための土地は不動産会社にとって商品（在庫）なので流動資産。本社の土地は自分で使うので非流動資産。同じ土地でも目的で分かれる。' },
        { q: '財政状態計算書の資産の部の並びとして、ACCA の形で正しいのは？', choices: ['流動資産が先、非流動資産が後', '非流動資産が先。流動資産は在庫・売掛金・現金の順', '金額の大きい順に1列で並べる', '現金が先頭、次に非流動資産、最後に在庫'], answer: 1, explain: '非流動資産を先、流動資産を後に分けて書く。流動資産は現金に変わるのが遅い順に並べることが多い。' },
        { q: '在庫の部で学んだ期末在庫（closing inventory）は、財政状態計算書のどこに載る？', choices: ['非流動資産', '流動資産', '負債', '損益計算書だけに載り、財政状態計算書には載らない'], answer: 1, explain: '期末在庫は売るために持ち、1年以内に売る予定なので流動資産。損益計算書では売上原価を減らし、財政状態計算書では流動資産として載る。' }
      ]
    },
    // ---------------------------------------------------------------- L42
    {
      id: 'L42',
      no: 42,
      title: '資産にするか費用にするか',
      goal: '支出を資産にする分と費用にする分に分けて、資産の取得原価を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D4(c)', 'D4(d)'],
      slides: [
        {
          title: '車を買う、ガソリンを入れる',
          paras: ['車を200万円で買った。これから7年乗る。ガソリン代は毎月1万円で、その月に使い切る。', '同じ「車にかかるお金」でも性質が違う。車の代金は何年も役に立つ。ガソリン代はその月で役目が終わる。'],
          list: ['何年も役に立つ支出 → 資産にする（資産計上する、capitalise）', 'その期間で役目が終わる支出 → 費用にする']
        },
        {
          title: '2つの支出の名前',
          list: ['資産にする支出（capital expenditure）: 非流動資産を買う・作る・性能を上げるための支出', '費用にする支出（revenue expenditure）: 事業を回し、資産を今の状態に保つための支出（修理、保守、燃料、保険など）'],
          after: '資産にした支出は財政状態計算書に資産として載る。費用にした支出は、その期の損益計算書に費用として載る。シラバスでは asset expenditure（資産にする支出）と expenses charged to profit or loss（損益計算書の費用にするもの）という言い方も出る。意味は同じ。'
        },
        {
          title: 'なぜ？ 支出の行き先を分ける理由',
          paras: ['200万円の車を買った年に全部を費用にすると、その年だけ費用が大きすぎ、次の年からは車の費用がゼロになる。でも車は7年間、毎年同じように役に立つ。', '何年も役に立つものは資産にして、使う年に少しずつ費用にする。そうすると毎年のもうけが実際の働きに合う。これが次の「減価償却」につながる。'],
          svg: `<svg viewBox="0 0 440 316" role="img" aria-label="資産にする支出は財政状態計算書に載り少しずつ費用になる。費用にする支出は今年の損益計算書に載る" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">支出の行き先は2つ</text><rect x="20" y="52" width="192" height="60" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">資産にする支出</text><text x="116" y="99" text-anchor="middle" font-size="12.5" fill="var(--ink)">capital expenditure</text><rect x="228" y="52" width="192" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="78" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">費用にする支出</text><text x="324" y="99" text-anchor="middle" font-size="12.5" fill="var(--quiet)">revenue expenditure</text><line x1="116" y1="112" x2="116" y2="134" stroke="var(--edge)" stroke-width="1.5"/><path d="M110 134L116 144L122 134z" fill="var(--edge)"/><line x1="324" y1="112" x2="324" y2="134" stroke="var(--edge)" stroke-width="1.5"/><path d="M318 134L324 144L330 134z" fill="var(--edge)"/><rect x="20" y="146" width="192" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="172" text-anchor="middle" fill="var(--ink)">財政状態計算書に</text><text x="116" y="194" text-anchor="middle" fill="var(--ink)">資産として載る</text><rect x="228" y="146" width="192" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="324" y="172" text-anchor="middle" fill="var(--ink)">損益計算書に</text><text x="324" y="194" text-anchor="middle" fill="var(--ink)">今年の費用として載る</text><line x1="116" y1="206" x2="116" y2="228" stroke="var(--edge)" stroke-width="1.5"/><path d="M110 228L116 238L122 228z" fill="var(--edge)"/><rect x="20" y="240" width="192" height="60" rx="10" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="116" y="266" text-anchor="middle" fill="var(--ink)">使う年に少しずつ費用へ</text><text x="116" y="288" text-anchor="middle" fill="var(--ink)">（減価償却）</text><text x="324" y="268" text-anchor="middle" fill="var(--quiet)">今年の利益から全額引く</text></svg>`,
          caption: 'どちらも最後は費用になる。違うのは「いつ費用になるか」だけ。'
        },
        {
          title: '取得原価に含めるもの（IAS 16）',
          paras: ['有形固定資産のルール IAS 16 では、資産の取得原価（cost）は「買った値段」＋「使える状態にするまでに直接かかった費用」（directly attributable costs）。'],
          list: ['購入価格（取引値引きを引いた後）', '輸入関税（import duties）', '運送費（delivery costs）', '据付費（installation）と設置場所の準備費（site preparation）', '使う前の試運転の費用（testing）', '専門家の報酬（建物購入の法律費用、建築家の設計料など）']
        },
        {
          title: '含めないもの（費用にする）',
          list: ['従業員の研修費（staff training）', '保守契約・定期点検（maintenance, servicing）', '修理（repairs）', '保険料、自動車税などの維持費', '一般管理費・広告費・開店の費用（general overheads, advertising）','取り戻せる売上税（recoverable sales tax）'],
          after: '見分けるコツは「使える状態になるまで」に直接かかったかどうか。使い始めた後に動かし続けるためのお金は費用。売上税は、取り戻せるなら売上税の勘定へ。取り戻せない場合だけ原価に含める。'
        },
        {
          title: '例題: 焼き機の取得原価',
          example: {
            problem: 'たこ焼き屋が新しい焼き機を買った。定価 $10,000、取引値引き 10%、運送費 $500、据付費 $800、スタッフ研修 $300、1年間の保守契約 $600。売上税 $1,800 は取り戻せる。資産にする金額（取得原価）はいくら？',
            steps: ['定価から取引値引きを引く: $10,000 − $1,000 ＝ $9,000', '使える状態にする費用を足す: 運送費 $500 と据付費 $800', '研修 $300 と保守契約 $600 は使い始めた後のための支出なので費用', '取り戻せる売上税 $1,800 は原価に入れない', '$9,000 ＋ $500 ＋ $800 ＝ $10,300'],
            answer: '取得原価は $10,300。費用は $300 ＋ $600 ＝ $900'
          }
        },
        {
          title: '直すのか、良くするのか',
          paras: ['すでに持っている資産にかけるお金も、2つに分かれる。'],
          list: ['性能を上げる・寿命を延ばす（改良、improvement）→ 資産: 店舗の増築、機械を改造して生産量を増やす', '元の状態に戻す・保つ（修理、repair）→ 費用: 割れた窓の交換、店の塗り直し、定期点検'],
          note: { kind: 'tip', text: '迷ったら「前より良くなったか、元に戻っただけか」を考える。良くなったなら資産、戻っただけなら費用。' }
        },
        {
          title: '法律で必要になった安全設備',
          paras: ['家のたとえ: 法律で火災警報器が義務になり、新しく付けた。家に前は無かったものが加わる。電池交換や点検は今の状態を保つだけ。'],
          list: ['法律や規制で必要な新しい安全・環境の設備（例: 機械に安全カバー safety guard を付ける）→ 資産。前は無かったものが加わり、無いと機械を使い続けられないから', 'すでにある安全カバーの修理・点検 → 費用。今の状態を保つだけ'],
          note: { kind: 'warn', text: '「生産量が増えないから費用」は間違い。もうけを直接増やさなくても、法律で必要な新しい設備は資産。' }
        },
        {
          title: '間違えると、どちらにずれる？',
          note: { kind: 'warn', text: '資産にすべき支出を費用にすると、今年の利益が小さすぎ、資産も小さすぎる（過少）。費用にすべき修理を資産にすると、利益も資産も大きすぎる（過大）。試験では「どちらにいくらずれるか」がよく出る。' },
          example: {
            problem: '修理代 $2,000 を、間違えて機械（資産）として記録した。今年の利益と資産への影響は？（減価償却は考えない）',
            steps: ['正しくは費用 $2,000 で、利益が $2,000 減るはずだった', '資産にしたので、費用が $2,000 少ない', 'だから利益は $2,000 多すぎる。資産も $2,000 多すぎる'],
            answer: '利益も資産も $2,000 過大'
          }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['何年も役に立つ支出は資産、その期間で役目が終わる支出は費用', '取得原価＝購入価格（値引き後）＋使える状態にするまでの直接費', '研修・保守・修理・保険は費用。改良と、法律で必要な新しい安全設備は資産']
        },
        {
          title: '英単語',
          words: [
            ['capital expenditure', 'キャピタル・エクスペンディチャー', '資産にする支出'],
            ['revenue expenditure', 'レベニュー・エクスペンディチャー', '費用にする支出'],
            ['asset expenditure', 'アセット・エクスペンディチャー', '資産にする支出（capital expenditure と同じ）'],
            ['capitalise', 'キャピタライズ', '資産として計上する'],
            ['directly attributable costs', '', '使える状態にするまでに直接かかった費用'],
            ['installation', 'インストレーション', '据付'],
            ['repairs and maintenance', '', '修理・保守'],
            ['improvement', 'インプルーブメント', '改良（性能を上げる）'],
            ['safety guard', 'セーフティ・ガード', '機械の安全カバー']
          ]
        }
      ],
      quiz: [
        { q: 'A company bought a machine for $40,000. Delivery cost $1,000, installation cost $2,000, staff training cost $500 and a two-year maintenance contract cost $3,000. At what amount should the machine be recorded?', type: 'number', answer: 43000, unit: '$', explain: '$40,000 ＋ $1,000 ＋ $2,000 ＝ $43,000。研修 $500 と保守契約 $3,000 は使い始めた後のための支出なので費用。全部足した $46,500 や、保守契約まで入れた $46,000 は引っかけ。' },
        { q: 'Which of the following should be treated as capital expenditure?', choices: ['Repainting the outside of the shop', 'Building an extension to the shop to add a new seating area', 'Annual servicing of the delivery van', 'Insurance on a new machine'], answer: 1, explain: '増築は店の能力を上げる改良なので資産。塗り直しと点検は元の状態を保つための支出、保険は維持費なので、どれも費用。' },
        { q: 'New safety regulations require a company to fit safety guards to its existing machines. The guards cost $8,000. Later in the year, $600 was spent repairing one of the guards. How should these amounts be treated?', choices: ['Both amounts are capital expenditure', '$8,000 capital expenditure and $600 revenue expenditure', '$8,000 revenue expenditure and $600 capital expenditure', 'Both amounts are revenue expenditure, because the guards do not increase output'], answer: 1, explain: '法律で必要になった新しい安全カバー $8,000 は資産。機械が前は持っていなかったものが加わり、それが無いと機械を使い続けられないから。カバーの修理 $600 は今の状態を保つだけなので費用。1つ目は修理まで資産にしている。3つ目は逆。4つ目の「生産量が増えないから費用」は、よくある間違い。' },
        { q: 'Which of the following costs should NOT be included in the cost of a new machine?', choices: ['Import duties', 'Cost of testing the machine before use', 'Cost of training staff to use the machine', 'Site preparation costs'], answer: 2, explain: '研修費は機械そのものではなく人にかかる費用なので、原価に入れずに費用にする。関税・試運転・設置場所の準備は、使える状態にするための直接費。' },
        { q: '修理代 $1,500 を、間違えて資産として記録した。正しい処理と比べて、今年の利益はどうなる？（減価償却は考えない）', choices: ['$1,500 過大', '$1,500 過少', '変わらない', '$3,000 過大'], answer: 0, explain: '本来は費用で利益が $1,500 減るはずだった。資産にしたので費用が足りず、利益が $1,500 多すぎる。資産も $1,500 多すぎる。' },
        { q: '売上税に登録しているお店が機械を買い、売上税 $600 を払った。この $600 はどうする？', choices: ['機械の原価に含める', '売上税の勘定に入れて、預かった売上税から差し引く', '費用にする', '資本から差し引く'], answer: 1, explain: '登録事業者は払った売上税を取り戻せるので、原価にも費用にもならない。売上税のレッスンと同じ考え方。取り戻せない場合だけ原価に含める。' }
      ]
    },
    // ---------------------------------------------------------------- L43
    {
      id: 'L43',
      no: 43,
      title: '取得の記帳',
      goal: '有形固定資産を買ったときの仕訳を書き、原価の勘定に記録できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['D4(e)'],
      slides: [
        {
          title: '車をローンで買う日',
          paras: ['車を200万円で買う。頭金50万円を払い、残り150万円はローンにする。', 'この日に起きたことは3つ。車が手に入る（持ち物が増える）。貯金が50万円減る。借金が150万円増える。', '会計の記録も、この動きをそのまま書くだけ。']
        },
        {
          title: '基本の仕訳',
          paras: ['有形固定資産を買ったら、その資産の勘定を借方に書く。資産が増えるときは借方だった。貸方は、払い方で決まる。'],
          journal: [
            { side: 'Dr', account: 'Plant and machinery（機械）', amount: '5,000' },
            { side: 'Cr', account: 'Bank', amount: '5,000' }
          ],
          list: ['現金・銀行で払った → Cr Cash / Bank', '後払いにした → Cr Other payables（その他の未払金）', 'ローンで払った → Cr Loan（借入金）']
        },
        {
          title: '勘定は種類ごと・原価で',
          paras: ['有形固定資産は、種類ごとに勘定を分ける（Land and buildings、Plant and machinery、Motor vehicles など）。', 'この勘定には取得原価（cost）だけを記録する。使って減った分（減価償却）は、あとで学ぶ別の勘定に記録する。原価の勘定はそのまま残す。'],
          tAccount: { name: 'Motor vehicles – cost', debit: [['Balance b/d', '30,000'], ['Bank（新しいバン）', '20,500']], credit: [], balance: { side: 'credit', label: 'Balance c/d', amount: '50,500' } }
        },
        {
          title: '「仕入」と「買掛金」は使わない',
          note: { kind: 'warn', text: '機械を買ったときに Purchases（仕入）の勘定を使うのは間違い。仕入は売るための商品の勘定で、売上原価になる。自分で使う機械は有形固定資産の勘定へ。同じく、機械を後払いで買ったときの未払いは Trade payables（買掛金）ではなく Other payables にする。買掛金は商品の仕入代金のための勘定だから。' }
        },
        {
          title: '例題: バンを買った',
          example: {
            problem: '1月1日、配達用のバンを買い、全額を銀行から払った。車両価格 $20,000、車両にかかる売上税 $4,000（取り戻せる）、運送費 $500、1年分の自動車税 $300、保険料 $600。仕訳は？',
            steps: ['原価に入るもの: 車両価格 $20,000 ＋ 運送費 $500 ＝ $20,500 → Dr Motor vehicles', '取り戻せる売上税 $4,000 → Dr Sales tax', '自動車税と保険料は維持費: $300 ＋ $600 ＝ $900 → Dr Motor expenses（車両費）', '払った合計: $20,500 ＋ $4,000 ＋ $900 ＝ $25,400 → Cr Bank'],
            answer: 'Dr Motor vehicles $20,500、Dr Sales tax $4,000、Dr Motor expenses $900 ／ Cr Bank $25,400'
          }
        },
        {
          title: '例題の仕訳',
          journal: [
            { side: 'Dr', account: 'Motor vehicles（車両）', amount: '20,500' },
            { side: 'Dr', account: 'Sales tax（売上税）', amount: '4,000' },
            { side: 'Dr', account: 'Motor expenses（車両費）', amount: '900' },
            { side: 'Cr', account: 'Bank', amount: '25,400' }
          ],
          paras: ['借方の合計 $25,400 と貸方の合計 $25,400 が一致する。1つの取引でも、行き先が3つに分かれることがある。']
        },
        {
          title: '自社の社員が取り付けたら',
          paras: ['機械の据付を、外の業者ではなく自社の社員がやることがある。その社員の給料は、ふだんどおり Wages（給料）の費用に記録されている。', 'でもその分は「使える状態にするまでの直接費」なので、機械の原価に移す。'],
          journal: [
            { side: 'Dr', account: 'Plant and machinery', amount: '1,200' },
            { side: 'Cr', account: 'Wages', amount: '1,200' }
          ],
          after: '試験では「給料の中に、機械を据え付けた社員の分 $1,200 が含まれている」という形で出る。費用から資産へ移すので、利益は $1,200 増える。'
        },
        {
          title: 'なぜ？ 取得原価で記録する理由',
          paras: ['取得原価は実際に払った金額なので、請求書や領収書で確かめられる。「今売ったらいくら？」は人によって答えが違う。', 'だから IAS 16 では、まず取得原価で記録する。その後も原価をもとに記録し続ける方法を原価モデル（cost model）という。時価で見直す方法（再評価）もあり、あとのレッスンで学ぶ。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['買ったら Dr 資産の勘定（Plant and machinery など）。貸方は払い方で決まる', '原価の勘定には取得原価だけ。Purchases は使わない', '後払いの未払いは Other payables。社員の据付の給料は Wages から資産へ移す']
        },
        {
          title: '英単語',
          words: [
            ['acquisition', 'アクイジション', '取得'],
            ['cost', 'コスト', '取得原価'],
            ['other payables', 'アザー・ペイアブルズ', 'その他の未払金（商品以外の後払い）'],
            ['loan', 'ローン', '借入金'],
            ['wages', 'ウェイジズ', '給料'],
            ['motor expenses', 'モーター・エクスペンシズ', '車両費（維持費）'],
            ['cost model', 'コスト・モデル', '原価モデル（取得原価で記録する方法）']
          ]
        }
      ],
      quiz: [
        { q: 'お店が、自分の店で使う冷蔵庫 $3,000 を後払いで買った。正しい仕訳は？', choices: ['Dr Purchases $3,000 / Cr Trade payables $3,000', 'Dr Plant and equipment $3,000 / Cr Other payables $3,000', 'Dr Other payables $3,000 / Cr Plant and equipment $3,000', 'Dr Plant and equipment $3,000 / Cr Cash $3,000'], answer: 1, explain: '自分で使う資産なので有形固定資産の勘定を借方に。後払いなので貸方は Other payables。Purchases と Trade payables は売るための商品のための勘定。現金はまだ払っていないので Cr Cash も誤り。' },
        { q: 'A business paid $15,000 by bank transfer for a new machine. Which journal entry records this?', choices: ['Dr Bank $15,000, Cr Plant and machinery $15,000', 'Dr Plant and machinery $15,000, Cr Bank $15,000', 'Dr Purchases $15,000, Cr Bank $15,000', 'Dr Machinery expense $15,000, Cr Bank $15,000'], answer: 1, explain: '資産が増えるので Dr Plant and machinery、銀行預金が減るので Cr Bank。1つ目は借方と貸方が逆。機械は商品でも今期だけの費用でもない。' },
        { q: 'The wages expense of a company includes $5,000 paid to its own staff for installing a new machine. Which adjustment is needed?', choices: ['Dr Wages $5,000, Cr Plant and machinery $5,000', 'Dr Plant and machinery $5,000, Cr Wages $5,000', 'No adjustment: wages are always an expense', 'Dr Plant and machinery $5,000, Cr Bank $5,000'], answer: 1, explain: '据付の給料は直接費なので、費用（Wages）から資産へ移す。Cr Bank にすると、給料をもう一度払ったことになってしまう。' },
        { q: '機械の外部への支払いは $18,000。据付を自社の社員が行い、その給料 $2,400 は Wages に記録されている。修正後の機械の原価は？', type: 'number', answer: 20400, unit: '$', explain: '$18,000 ＋ $2,400 ＝ $20,400。Dr Plant and machinery $2,400 / Cr Wages $2,400 で費用から資産へ移す。' },
        { q: 'バン $12,000、バンにかかる売上税 $2,400（取り戻せる）、運送費 $300、1年分の保険料 $500 を、まとめて銀行から払った。Cr Bank の金額は？', type: 'number', answer: 15200, unit: '$', explain: '払った合計なので $12,000 ＋ $2,400 ＋ $300 ＋ $500 ＝ $15,200。借方は Motor vehicles $12,300、Sales tax $2,400、Motor expenses $500。' },
        { q: 'The motor vehicles cost account had an opening balance of $40,000. During the year a van costing $15,000 was bought. There were no disposals. What is the closing balance on the cost account?', type: 'number', answer: 55000, unit: '$', explain: '期首 $40,000 ＋ 取得 $15,000 ＝ $55,000。原価の勘定は、売らない限り減らない（減価償却は別の勘定に記録する）。' }
      ]
    },
    // ---------------------------------------------------------------- L44
    {
      id: 'L44',
      no: 44,
      title: '減価償却の目的',
      goal: '減価償却がなんのためにあるかと、何ではないかを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D5(a)'],
      slides: [
        {
          title: 'スマホ代を1年あたりで考える',
          paras: ['12万円のスマホを一括で買って、4年使う。「今年はスマホに12万円使った、来年からは0円」と考えると、1年目だけ出費が多すぎる。', '実際には毎年同じように使っている。だから「1年あたり3万円ぶん使った」と考える方が実感に近い。会計では、これを減価償却（depreciation）という。'],
          formula: '12万円 ÷ 4年 ＝ 1年あたり3万円'
        },
        {
          title: '減価償却の定義',
          paras: ['減価償却は、資産の「償却する金額」（depreciable amount）を、耐用年数にわたって規則的に費用に配分すること（IAS 16）。'],
          list: ['償却する金額＝取得原価 − 残存価額', '耐用年数（useful life）: その会社が資産を使う予定の期間。壊れるまでの年数ではない', '残存価額（residual value）: 使い終わったときに売って戻ると見込む金額（処分の費用を引いた後）']
        },
        {
          title: 'たこ焼き器で図にする',
          paras: ['原価 $10,000 のたこ焼き器を4年使い、最後に $2,000 で売れる見込み。'],
          svg: `<svg viewBox="0 0 440 252" role="img" aria-label="原価1万ドルのうち残存価額2千ドルを除いた8千ドルを4年に分けて毎年2千ドルずつ費用にする" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">原価を、使う年に分けて費用にする</text><text x="220" y="62" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">取得原価 $10,000</text><path d="M20 80V72H420V80" fill="none" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="86" width="80" height="56" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="100" y="86" width="80" height="56" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="180" y="86" width="80" height="56" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="260" y="86" width="80" height="56" fill="none" stroke="var(--edge)" stroke-width="1.25"/><rect x="340" y="86" width="80" height="56" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="60" y="109" text-anchor="middle" fill="var(--ink)">1年目</text><text x="60" y="131" text-anchor="middle" fill="var(--ink)">$2,000</text><text x="140" y="109" text-anchor="middle" fill="var(--ink)">2年目</text><text x="140" y="131" text-anchor="middle" fill="var(--ink)">$2,000</text><text x="220" y="109" text-anchor="middle" fill="var(--ink)">3年目</text><text x="220" y="131" text-anchor="middle" fill="var(--ink)">$2,000</text><text x="300" y="109" text-anchor="middle" fill="var(--ink)">4年目</text><text x="300" y="131" text-anchor="middle" fill="var(--ink)">$2,000</text><text x="380" y="109" text-anchor="middle" font-weight="600" fill="var(--ink)">残存価額</text><text x="380" y="131" text-anchor="middle" font-weight="600" fill="var(--ink)">$2,000</text><path d="M20 150V158H340V150" fill="none" stroke="var(--edge)" stroke-width="1.5"/><text x="180" y="180" text-anchor="middle" fill="var(--ink)">毎年の減価償却費（費用）</text><text x="380" y="180" text-anchor="middle" fill="var(--quiet)">売って戻る</text><text x="220" y="214" text-anchor="middle" fill="var(--ink)">償却する金額 ＝ 原価 − 残存価額</text><text x="220" y="236" text-anchor="middle" font-size="12.5" fill="var(--quiet)">depreciable amount = cost − residual value</text></svg>`,
          caption: '($10,000 − $2,000) ÷ 4年 ＝ 毎年 $2,000。毎年の減価償却費は損益計算書の費用になる。'
        },
        {
          title: 'なぜ？ 使った年に費用を合わせる',
          paras: ['たこ焼き器は4年間、毎年たこ焼きを焼いて売上を生む。売上が出た年に、それを生むために使った分の費用を並べると、その年の本当のもうけが分かる。これを費用と収益の対応（matching）という。この考え方のもとになるのが発生主義（accruals concept）で、あとのレッスンでくわしく学ぶ。試験で「減価償却はどの原則の例？」と聞かれたら accruals concept。']
        },
        {
          title: '資産は何によって働く力を失う？',
          paras: ['資産は使うほどすり減り（wear and tear）、古くなって役に立たなくなり（obsolescence）、時間とともに働く力を使い切る。その「使った分」を毎年の費用にするのが減価償却。'],
          list: ['すり減り（wear and tear）: たこ焼き器の鉄板が、毎日焼くうちに傷んでいく', '陳腐化（obsolescence）: もっと速く焼ける新型が出て、古い型の出番が減る', '時の経過: 借りた土地に建てた店は、借りる期間が終われば使えなくなる']
        },
        {
          title: '帳簿価額',
          paras: ['これまでの減価償却費の合計を、減価償却累計額（accumulated depreciation）という。財政状態計算書には、取得原価から累計額を引いた残りを載せる。これを帳簿価額（carrying amount）という。'],
          formula: 'carrying amount ＝ cost − accumulated depreciation',
          table: { caption: 'たこ焼き器（原価 $10,000、毎年 $2,000）', head: ['項目', '1年目末 $', '2年目末 $'], rows: [['取得原価', '10,000', '10,000'], ['減価償却累計額', '(2,000)', '(4,000)'], ['帳簿価額', '8,000', '6,000']] }
        },
        {
          title: '減価償却ではないもの',
          list: ['時価（今売れる値段）を示すものではない。帳簿価額 $6,000 の機械が $9,000 で売れることもある。時価が上がっていても、使っている限り減価償却は続ける','買い替えのお金を貯める仕組みではない。現金はどこにも取り置かれない', '現金が出ていく費用ではない。現金は買った日に出ている。減価償却は記録の上の費用'],
          note: { kind: 'warn', text: '試験の定番は「減価償却の目的はどれ？」。正解は「原価（から残存価額を引いた額）を耐用年数にわたって配分すること」。「資産を時価で示すため」「買い替えの資金を用意するため」は引っかけ。' }
        },
        {
          title: '土地はふつう減価償却しない',
          paras: ['土地は使ってもすり減らず、耐用年数に限りがない。だからふつうは減価償却しない。建物は古くなるので減価償却する。土地付きの建物を買ったら、土地と建物の金額を分けて、建物の分だけ減価償却する。'],
          example: {
            problem: '店舗を土地込みで $300,000 で買った。うち土地は $100,000。建物の耐用年数は50年、残存価額は0。1年の減価償却費は？',
            steps: ['土地 $100,000 は減価償却しない', '建物 ＝ $300,000 − $100,000 ＝ $200,000', '$200,000 ÷ 50年 ＝ $4,000'],
            answer: '1年あたり $4,000（土地まで含めた $6,000 は間違い）'
          }
        },
        {
          title: 'もうけと現金は違う',
          paras: ['たこ焼き器を $10,000 で買った年、現金は $10,000 減る。でもその年の費用は減価償却費の $2,000 だけ。次の年からは現金が減らないのに、費用は毎年 $2,000 ずつ出る。', 'だから「もうけ＝現金の増えた分」とは限らない。もうけは働きに合わせた計算、現金は実際のお金の出入り。']
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['減価償却＝（原価 − 残存価額）を耐用年数にわたって配分すること', '目的は、資産を使った年にその分の費用を合わせること。時価を示すためでも、買い替え資金のためでもない', '帳簿価額＝原価 − 減価償却累計額。土地はふつう減価償却しない']
        },
        {
          title: '英単語',
          words: [
            ['depreciation', 'ディプリシエーション', '減価償却（費）'],
            ['accumulated depreciation', '', '減価償却累計額'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額'],
            ['useful life', 'ユースフル・ライフ', '耐用年数'],
            ['residual value', 'レジデュアル・バリュー', '残存価額'],
            ['depreciable amount', '', '償却する金額（原価 − 残存価額）'],
            ['wear and tear', 'ウェア・アンド・テア', '使うことによるすり減り'],
            ['obsolescence', 'オブソレッセンス', '陳腐化（古くなって役に立たなくなること）'],
            ['accruals concept', 'アクルーアルズ・コンセプト', '発生主義（費用を使った期間に合わせる考え方）']
          ]
        }
      ],
      quiz: [
        { q: 'What is the purpose of depreciation?', choices: ['To show non-current assets at their market value', 'To set aside cash to replace the asset at the end of its life', 'To allocate the cost less residual value of an asset over its useful life', 'To reduce the amount of cash paid for the asset'], answer: 2, explain: '減価償却は原価（から残存価額を引いた額）を、使う年に配分するためのもの。時価を示すものでも、買い替え資金を貯めるものでもない。現金の支払額も変わらない。' },
        { q: '取得原価 $12,000、減価償却累計額 $4,500。帳簿価額は？', type: 'number', answer: 7500, unit: '$', explain: '帳簿価額＝原価 − 累計額 ＝ $12,000 − $4,500 ＝ $7,500。' },
        { q: 'Which of the following is normally NOT depreciated?', choices: ['Buildings', 'Freehold land', 'Motor vehicles', 'Computer equipment'], answer: 1, explain: 'freehold land は会社が所有している土地。すり減らず耐用年数に限りがないので、ふつうは減価償却しない。建物は減価償却する。' },
        { q: '耐用年数（useful life）の意味として正しいのは？', choices: ['資産が物理的に壊れるまでの年数', 'その会社が資産を使う予定の期間', '税金の計算で決められた一律の年数', 'ローンを返し終わるまでの年数'], answer: 1, explain: '耐用年数は、その会社が使う予定の期間。まだ動いても3年で買い替える方針なら、耐用年数は3年。' },
        { q: 'A business has an annual depreciation charge of $3,000. Which statement is correct?', choices: ['Cash decreases by $3,000 each year', 'Profit decreases by $3,000 each year but cash is not affected', 'Both profit and cash decrease by $3,000 each year', 'Neither profit nor cash is affected'], answer: 1, explain: '減価償却費は費用なので利益は減る。でも現金は買った日に出ていっていて、減価償却で新たに出ていくことはない。' },
        { q: '倉庫を土地込みで $500,000 で買った。うち土地は $150,000。建物の耐用年数は40年、残存価額は0。1年の減価償却費は？', type: 'number', answer: 8750, unit: '$', explain: '建物 ＝ $500,000 − $150,000 ＝ $350,000。$350,000 ÷ 40年 ＝ $8,750。土地まで含めて $500,000 ÷ 40 ＝ $12,500 にするのは間違い。' }
      ]
    },
    // ---------------------------------------------------------------- L45
    {
      id: 'L45',
      no: 45,
      title: '定額法',
      goal: '定額法で毎年の減価償却費と帳簿価額を計算できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D5(b)'],
      slides: [
        {
          title: 'ケーキを同じ大きさに切る',
          paras: ['ホールケーキを4日で食べるなら、4等分して毎日同じ大きさを食べるのがいちばん分かりやすい。', '定額法（straight-line method）も同じ。償却する金額を耐用年数で割って、毎年同じ額を費用にする。']
        },
        {
          title: '定額法の式',
          formula: '(cost − residual value) ÷ useful life',
          paras: ['毎年の減価償却費＝（取得原価 − 残存価額）÷ 耐用年数。', '毎年の費用が同じなので、帳簿価額は一直線に下がる。だから英語で straight-line（直線）という。'],
          after: 'このレッスンでは、資産を年の初めに買った前提で計算する。年の途中で買った場合は、あとのレッスンで学ぶ。'
        },
        {
          title: '例題①: オーブン',
          example: {
            problem: 'たこ焼き屋がオーブンを $12,000 で買った。耐用年数5年、残存価額 $2,000。毎年の減価償却費と、3年目末の帳簿価額は？',
            steps: ['償却する金額: $12,000 − $2,000 ＝ $10,000', '毎年の減価償却費: $10,000 ÷ 5年 ＝ $2,000', '3年目末の減価償却累計額: $2,000 × 3 ＝ $6,000', '帳簿価額: $12,000 − $6,000 ＝ $6,000'],
            answer: '毎年 $2,000。3年目末の帳簿価額は $6,000'
          }
        },
        {
          title: '帳簿価額は一直線に下がる',
          table: { caption: 'オーブン（原価 $12,000、残存価額 $2,000、5年）', head: ['年', '減価償却費 $', '年末の帳簿価額 $'], rows: [['1年目', '2,000', '10,000'], ['2年目', '2,000', '8,000'], ['3年目', '2,000', '6,000'], ['4年目', '2,000', '4,000'], ['5年目', '2,000', '2,000']], total: ['合計', '10,000', ''] },
          after: '5年目末の帳簿価額は、残存価額の $2,000 とぴったり同じになる。'
        },
        {
          title: '率（%）で出る問題',
          paras: ['試験では「年 20%、straight-line basis」のように率で出ることも多い。これは「毎年、取得原価の 20%」という意味（on cost と書かれることもある）。原価にそのまま率をかけ、残存価額は引かない。償却が終わると帳簿価額は0になる。', '20% なら 100% ÷ 20% ＝ 5年で償却が終わる。25% なら4年、10% なら10年。'],
          example: {
            problem: '機械 $30,000 を、年 20% の straight-line で減価償却する。毎年の減価償却費と、3年目末の帳簿価額は？',
            steps: ['$30,000 × 20% ＝ $6,000（毎年同じ）', '3年分の累計額: $6,000 × 3 ＝ $18,000', '帳簿価額: $30,000 − $18,000 ＝ $12,000'],
            answer: '毎年 $6,000。3年目末の帳簿価額は $12,000'
          }
        },
        {
          title: '仕訳（先取り）',
          paras: ['毎年の減価償却費は、次の仕訳で記録する。原価の勘定は触らず、累計額の勘定に積み上げていく。'],
          journal: [
            { side: 'Dr', account: 'Depreciation expense（減価償却費）', amount: '2,000' },
            { side: 'Cr', account: 'Accumulated depreciation（減価償却累計額）', amount: '2,000' }
          ],
          after: '費用が増えるので借方。累計額は資産を減らす側の勘定なので貸方。現金は動かない。勘定への記録と財務諸表での見せ方は、あとのレッスンでくわしく学ぶ。'
        },
        {
          title: 'なぜ？ 定額法が合う資産',
          paras: ['毎年だいたい同じように働く資産には、定額法が合う。建物、棚やカウンター（備品）など。毎年同じだけ役に立つなら、費用も毎年同じにするのが自然。', '計算がかんたんで、誰が計算しても同じ答えになるのも長所。どの方法を選ぶかは、資産の働き方に合わせる（あとのレッスンでくわしく比べる）。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '残存価額を引き忘れて「原価 ÷ 年数」にする（$12,000 ÷ 5 ＝ $2,400 は間違い）。また、帳簿価額を聞かれているのに、減価償却費や累計額を答えてしまう。問題が charge（その年の費用）、accumulated depreciation（累計）、carrying amount（残り）のどれを聞いているか、先に確かめる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['定額法＝（原価 − 残存価額）÷ 耐用年数。毎年同じ額', '「年 20% straight-line」は毎年、原価の 20%（5年で償却が終わる）', '帳簿価額＝原価 − 毎年の額 × 経過年数']
        },
        {
          title: '英単語',
          words: [
            ['straight-line method', 'ストレートライン・メソッド', '定額法'],
            ['depreciation charge', '', 'その年の減価償却費'],
            ['depreciation expense', '', '減価償却費（費用の勘定）'],
            ['per annum', 'パー・アナム', '1年あたり'],
            ['on cost', 'オン・コスト', '取得原価に対して（率をかける）']
          ]
        }
      ],
      quiz: [
        { q: 'A machine cost $50,000. It has an estimated residual value of $5,000 and a useful life of 9 years. It is depreciated on a straight-line basis. What is its carrying amount at the end of year 4?', choices: ['$27,778', '$30,000', '$20,000', '$25,000'], answer: 1, explain: '($50,000 − $5,000) ÷ 9 ＝ $5,000。4年分で $20,000。帳簿価額は $50,000 − $20,000 ＝ $30,000。$27,778 は残存価額を引き忘れた答え、$20,000 は累計額、$25,000 は残存価額を二重に引いた答え。' },
        { q: 'パソコン $2,400、耐用年数3年、残存価額 $300。定額法で毎年の減価償却費は？', type: 'number', answer: 700, unit: '$', explain: '($2,400 − $300) ÷ 3 ＝ $2,100 ÷ 3 ＝ $700。$800 は残存価額を引き忘れた答え。' },
        { q: 'A van cost $24,000 and is depreciated at 25% per annum on a straight-line basis. What is the depreciation charge for year 3?', choices: ['$6,000', '$3,375', '$18,000', '$4,500'], answer: 0, explain: '定額法は毎年、原価の 25%。$24,000 × 25% ＝ $6,000 で、3年目も同じ。$18,000 は3年分の累計額。$4,500 と $3,375 は、残りに率をかける別の方法（次のレッスン）で計算したときの2年目と3年目。' },
        { q: '「年 10%、straight-line」の資産は、何年で償却が終わる？', choices: ['5年', '10年', '20年', 'ずっと終わらない'], answer: 1, explain: '毎年、原価の 10% なので、100% ÷ 10% ＝ 10年で終わる。' },
        { q: 'Equipment costing $16,000 with a residual value of $1,000 is depreciated on a straight-line basis over 5 years. What is the accumulated depreciation at the end of year 2?', type: 'number', answer: 6000, unit: '$', explain: '($16,000 − $1,000) ÷ 5 ＝ $3,000。2年分で $6,000。帳簿価額 $10,000 ではなく、累計額を聞いている。' },
        { q: '減価償却費 $2,000 を記録する仕訳として正しいのは？', choices: ['Dr Accumulated depreciation / Cr Depreciation expense', 'Dr Depreciation expense / Cr Accumulated depreciation', 'Dr Depreciation expense / Cr Cash', 'Dr Plant and machinery / Cr Accumulated depreciation'], answer: 1, explain: '費用が増えるので Dr Depreciation expense、累計額が増えるので Cr Accumulated depreciation。1つ目は逆。現金は出ていかないので Cr Cash も誤り。' }
      ]
    },
    // ---------------------------------------------------------------- L46
    {
      id: 'L46',
      no: 46,
      title: '定率法（逓減残高法）',
      goal: '定率法で毎年の減価償却費と帳簿価額を計算し、定額法との違いを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D5(b)'],
      slides: [
        {
          title: '残りの4分の1を食べる',
          paras: ['ケーキを「毎日、残っている分の4分の1を食べる」と決める。1日目は大きく食べるが、残りが減るほど1切れは小さくなる。', '定率法（reducing balance method）は、この食べ方。毎年、残っている帳簿価額に同じ率をかけて、減価償却費にする。']
        },
        {
          title: '定率法の式',
          formula: '減価償却費 ＝ 率 × 期首の帳簿価額',
          paras: ['期首の帳簿価額＝取得原価 − 前の年までの減価償却累計額。', '残存価額は引かない。率は「耐用年数の終わりに、だいたい残存価額が残る」ように決められていて、残存価額はすでに率の中に入っているから。残りが毎年減るので、減価償却費も毎年小さくなる。英語では reducing balance（残高が減っていく）、または diminishing balance ともいう。']
        },
        {
          title: '例題①: バン',
          example: {
            problem: 'バンを $16,000 で買った。定率法、年 25%。1〜3年目の減価償却費と、3年目末の帳簿価額は？',
            steps: ['1年目: $16,000 × 25% ＝ $4,000 → 残り $12,000', '2年目: $12,000 × 25% ＝ $3,000 → 残り $9,000', '3年目: $9,000 × 25% ＝ $2,250 → 残り $6,750'],
            answer: '減価償却費は $4,000、$3,000、$2,250。3年目末の帳簿価額は $6,750'
          }
        },
        {
          title: '毎年「残り」から削る',
          svg: `<svg viewBox="0 0 440 294" role="img" aria-label="帳簿価額は1万6千ドルから毎年25パーセントずつ削られ、1万2千ドル、9千ドル、6千750ドルになる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">毎年「残り」の25%を削る</text><text x="20" y="75" fill="var(--ink)">取得時</text><rect x="100" y="52" width="220" height="36" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="328" y="75" fill="var(--ink)">$16,000</text><text x="20" y="127" fill="var(--ink)">1年目末</text><rect x="100" y="104" width="165" height="36" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="273" y="127" fill="var(--ink)">$12,000（−$4,000）</text><text x="20" y="179" fill="var(--ink)">2年目末</text><rect x="100" y="156" width="124" height="36" rx="4" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="232" y="179" fill="var(--ink)">$9,000（−$3,000）</text><text x="20" y="231" fill="var(--ink)">3年目末</text><rect x="100" y="208" width="93" height="36" rx="4" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="201" y="231" font-weight="600" fill="var(--ink)">$6,750（−$2,250）</text><text x="220" y="276" text-anchor="middle" fill="var(--quiet)">削る額は年々小さくなり、ゼロにはならない</text></svg>`,
          caption: '毎年同じ 25% でも、かける相手（残り）が小さくなるので、削る額も小さくなる。'
        },
        {
          title: '例題②: 累計額が分かっているとき',
          paras: ['試験では「原価と、期首の減価償却累計額」が与えられることが多い。まず残り（帳簿価額）を出してから率をかける。'],
          example: {
            problem: '機械: 原価 $80,000、期首の減価償却累計額 $30,000。定率法、年 20%。今年の減価償却費と、年末の帳簿価額は？',
            steps: ['期首の帳簿価額: $80,000 − $30,000 ＝ $50,000', '今年の減価償却費: $50,000 × 20% ＝ $10,000', '年末の累計額: $30,000 ＋ $10,000 ＝ $40,000', '年末の帳簿価額: $80,000 − $40,000 ＝ $40,000'],
            answer: '減価償却費 $10,000、帳簿価額 $40,000（$80,000 × 20% ＝ $16,000 は間違い）'
          }
        },
        {
          title: '定額法と比べる',
          paras: ['同じ $16,000 の車両に、同じ 25% を使っても、結果は違う。1年目は同じで、差は2年目から出る。'],
          table: { caption: '原価 $16,000 の車両（$）', head: ['年', '定額法（原価の25%）', '定率法（残りの25%）'], rows: [['1年目の費用', '4,000', '4,000'], ['2年目の費用', '4,000', '3,000'], ['3年目の費用', '4,000', '2,250'], ['3年目末の帳簿価額', '4,000', '6,750']] }
        },
        {
          title: 'なぜ？ 定率法が合う資産',
          paras: ['車やパソコンは、新しいうちほどよく働き、古くなると故障が増えて出番が減る。働きが前半に多いなら、費用も前半に多く配るのが、使った年に費用を合わせる（matching）考え方に合う。', 'また、古くなると修理代が増える。減価償却費を前半に多く、後半に少なくすると、修理代と合わせた毎年の費用がならされる。']
        },
        {
          title: '近道の式',
          formula: 'n年後の帳簿価額 ＝ 原価 ×（1 − 率）をn回かけたもの',
          paras: ['3年後なら $16,000 × 0.75 × 0.75 × 0.75 ＝ $6,750。1年ずつ計算しても同じ答えになる。'],
          note: { kind: 'tip', text: '電卓で「× 0.75」を年数の回数だけ押せば、帳簿価額をすぐ確かめられる。その年の費用は「期首の帳簿価額 × 率」で出す。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '①毎年、取得原価に率をかける（それは定額法）。②先に残存価額を引いてから率をかける（定率法では引かない）。③「その年の費用」を聞かれているのに、帳簿価額や累計額を答える。表を1年ずつ書けば防げる。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['定率法＝率 × 期首の帳簿価額（原価 − 前の年までの累計額）', '残存価額は引かない。費用は毎年小さくなり、帳簿価額はゼロにならない', '新しいうちほどよく働く資産（車両、パソコン）に合う']
        },
        {
          title: '英単語',
          words: [
            ['reducing balance method', 'リデューシング・バランス・メソッド', '定率法（逓減残高法）'],
            ['diminishing balance method', 'ディミニッシング・バランス・メソッド', '定率法の別名'],
            ['brought forward (b/f)', 'ブロート・フォワード', '前の期から繰り越した（期首の）'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額（原価 − 累計額）'],
            ['annual rate', 'アニュアル・レート', '年率']
          ]
        }
      ],
      quiz: [
        { q: 'A machine was bought for $40,000 on 1 January 20X1. It is depreciated at 20% per annum on the reducing balance basis. What is the depreciation charge for the year ended 31 December 20X3?', choices: ['$8,000', '$6,400', '$5,120', '$20,480'], answer: 2, explain: '20X1: $40,000 × 20% ＝ $8,000（残り $32,000）。20X2: $32,000 × 20% ＝ $6,400（残り $25,600）。20X3: $25,600 × 20% ＝ $5,120。$8,000 は毎年原価にかけた間違い、$6,400 は2年目、$20,480 は20X3年末の帳簿価額。' },
        { q: 'Equipment cost $50,000 and is depreciated at 30% per annum on the reducing balance basis. What is its carrying amount at the end of year 2?', type: 'number', answer: 24500, unit: '$', explain: '1年目: $50,000 × 30% ＝ $15,000（残り $35,000）。2年目: $35,000 × 30% ＝ $10,500（残り $24,500）。近道: $50,000 × 0.7 × 0.7 ＝ $24,500。' },
        { q: '機械: 原価 $60,000、期首の減価償却累計額 $15,000。定率法、年 20%。今年の減価償却費は？', choices: ['$12,000', '$9,000', '$3,000', '$36,000'], answer: 1, explain: '期首の帳簿価額 $60,000 − $15,000 ＝ $45,000。$45,000 × 20% ＝ $9,000。$12,000 は原価にかけた間違い、$3,000 は累計額にかけた間違い、$36,000 は年末の帳簿価額。' },
        { q: '定率法の説明として正しいものは？', choices: ['毎年同じ額を費用にする', '毎年、期首の帳簿価額に同じ率をかけるので、費用は年々小さくなる', '残存価額を引いてから率をかける', '最後の年に帳簿価額がちょうどゼロになる'], answer: 1, explain: '同じ率を、毎年小さくなる残りにかけるので費用は年々小さくなる。毎年同じ額は定額法。残存価額は引かず、帳簿価額はゼロにならない。' },
        { q: 'A van costs $20,000. In year 2, which gives the higher depreciation charge: 25% straight-line on cost, or 25% reducing balance?', choices: ['Straight-line: $5,000', 'Reducing balance: $3,750', 'Reducing balance: $5,000', 'They are equal: $5,000'], answer: 0, explain: '定額法は毎年 $20,000 × 25% ＝ $5,000。定率法の2年目は ($20,000 − $5,000) × 25% ＝ $3,750。1年目はどちらも $5,000 で、差は2年目から出る。' },
        { q: '定率法で計算した今年の減価償却費 $4,000 を記録する仕訳は？', choices: ['Dr Depreciation expense / Cr Accumulated depreciation', 'Dr Accumulated depreciation / Cr Motor vehicles', 'Dr Motor vehicles / Cr Depreciation expense', 'Dr Depreciation expense / Cr Bank'], answer: 0, explain: '計算の方法が変わっても、仕訳は定額法と同じ。費用を借方、累計額を貸方。原価の勘定（Motor vehicles）は触らず、現金も動かない。' }
      ]
    }
  ],
  cards: [
    { id: 'L41-1', lesson: 'L41', q: '非流動資産の定義は？', a: '事業で使うために持ち、1年を超えて使う予定の資産' },
    { id: 'L41-2', lesson: 'L41', q: '流動資産の定義は？', a: '1年以内（または通常の営業の流れの中）に売る・使う・現金になる資産と、現金' },
    { id: 'L41-3', lesson: 'L41', q: '車の販売店が売るために並べた車は？', a: '在庫なので流動資産。分類は持つ目的で決まる' },
    { id: 'L41-4', lesson: 'L41', q: 'なぜ流動と非流動を分けて見せる？', a: 'すぐ払える力（流動）と、長く稼ぐ土台（非流動）を区別して見せるため' },
    { id: 'L41-5', lesson: 'L41', q: 'property, plant and equipment の訳は？', a: '有形固定資産。形のある非流動資産' },
    { id: 'L41-6', lesson: 'L41', q: '財政状態計算書の資産の並び順は？', a: '非流動資産が先、流動資産が後' },
    { id: 'L42-1', lesson: 'L42', q: 'capital expenditure と revenue expenditure の違いは？', a: 'capital: 非流動資産を買う・作る・良くする支出で資産に。revenue: 今の状態を保つ支出で費用に' },
    { id: 'L42-3', lesson: 'L42', q: 'IAS 16 で取得原価に含めるものは？', a: '購入価格（値引き後）＋使える状態にするまでの直接費（運送・据付・試運転など）' },
    { id: 'L42-4', lesson: 'L42', q: '研修費や保守契約は機械の原価に入る？', a: '入らない。使い始めた後の支出なので費用' },
    { id: 'L42-5', lesson: 'L42', q: '改良と修理の見分け方は？', a: '前より良くなった（改良）なら資産、元に戻っただけ（修理）なら費用' },
    { id: 'L42-6', lesson: 'L42', q: '資産にすべき支出を費用にすると？', a: '今年の利益と資産が、どちらも過少になる' },
    { id: 'L42-7', lesson: 'L42', q: 'なぜ何年も使うものは資産にする？', a: '使う年に少しずつ費用にして、毎年のもうけを実際の働きに合わせるため' },
    { id: 'L42-8', lesson: 'L42', q: '法律で必要になった新しい安全カバーを機械に付ける支出は？', a: '資産。前は無かったものが加わり、無いと機械を使えない。既存カバーの修理は費用' },
    { id: 'L43-1', lesson: 'L43', q: '有形固定資産を銀行払いで買った仕訳は？', a: 'Dr 資産の勘定（例 Plant and machinery）/ Cr Bank' },
    { id: 'L43-2', lesson: 'L43', q: '機械を後払いで買ったときの貸方は？', a: 'Other payables（Trade payables ではない）' },
    { id: 'L43-3', lesson: 'L43', q: 'なぜ機械の購入に Purchases を使わない？', a: 'Purchases は売るための商品の勘定で、売上原価になるから' },
    { id: 'L43-4', lesson: 'L43', q: '自社の社員が機械を据え付けた分の給料は？', a: 'Dr 機械の勘定 / Cr Wages で、費用から資産へ移す' },
    { id: 'L43-5', lesson: 'L43', q: '原価の勘定に記録するのは？', a: '取得原価だけ。減価償却は別の勘定（累計額）に記録する' },
    { id: 'L43-6', lesson: 'L43', q: '原価の勘定の期末残高は？', a: '期首残高＋取得（売却があれば、その原価を引く）' },
    { id: 'L44-1', lesson: 'L44', q: '減価償却の定義は？', a: '償却する金額（原価 − 残存価額）を耐用年数にわたって規則的に費用に配分すること' },
    { id: 'L44-2', lesson: 'L44', q: '減価償却の目的は？', a: '資産を使った年に、その分の費用を合わせること（発生主義 accruals concept の適用）' },
    { id: 'L44-3', lesson: 'L44', q: '減価償却は資産の時価を示す？', a: '示さない。帳簿価額と売れる値段は別物' },
    { id: 'L44-4', lesson: 'L44', q: '帳簿価額の式は？', a: '取得原価 − 減価償却累計額' },
    { id: 'L44-5', lesson: 'L44', q: '土地を減価償却しない理由は？', a: 'すり減らず、耐用年数に限りがないから' },
    { id: 'L44-6', lesson: 'L44', q: '減価償却費が出た年、現金は減る？', a: '減らない。現金は買った日に出ている。記録の上の費用' },
    { id: 'L44-7', lesson: 'L44', q: '耐用年数とは？', a: 'その会社が資産を使う予定の期間（壊れるまでの年数ではない）' },
    { id: 'L45-1', lesson: 'L45', q: '定額法の式は？', a: '（原価 − 残存価額）÷ 耐用年数' },
    { id: 'L45-2', lesson: 'L45', q: '「年 25%、straight-line」の意味は？', a: '毎年、取得原価の 25%。4年で償却が終わる' },
    { id: 'L45-3', lesson: 'L45', q: '原価 $12,000、残存価額 $2,000、5年。定額法の毎年の額は？', a: '$2,000（$10,000 ÷ 5）' },
    { id: 'L45-4', lesson: 'L45', q: '定額法が合う資産は？', a: '毎年同じように働く資産（建物、備品など）' },
    { id: 'L45-5', lesson: 'L45', q: '減価償却費の仕訳は？', a: 'Dr Depreciation expense / Cr Accumulated depreciation' },
    { id: 'L45-6', lesson: 'L45', q: '定額法でいちばん多い計算ミスは？', a: '残存価額を引き忘れて「原価 ÷ 年数」にすること' },
    { id: 'L46-1', lesson: 'L46', q: '定率法の式は？', a: '率 × 期首の帳簿価額（原価 − 前の年までの累計額）' },
    { id: 'L46-2', lesson: 'L46', q: '定率法で残存価額は引く？', a: '引かない。率の中に織り込まれている' },
    { id: 'L46-3', lesson: 'L46', q: '$16,000 を年 25% の定率法。2年目の減価償却費は？', a: '$3,000（$12,000 × 25%）' },
    { id: 'L46-4', lesson: 'L46', q: '定率法が合う資産は？', a: '新しいうちほどよく働く資産（車両、パソコンなど）' },
    { id: 'L46-5', lesson: 'L46', q: '定率法の費用はどう変わる？', a: '最初が大きく、年々小さくなる。帳簿価額はゼロにならない' },
    { id: 'L46-6', lesson: 'L46', q: '同じ率の定額法と定率法、差が出るのは何年目から？', a: '2年目から。1年目はどちらも「原価 × 率」で同じ' }
  ]
});
