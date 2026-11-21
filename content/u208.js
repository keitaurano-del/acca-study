(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K3',
  unit: 208,
  part: 2,
  partTitle: '国際物品売買（ウィーン売買条約 CISG）',
  lessons: [
    {
      id: 'B027',
      no: 27,
      title: '利息と免責',
      goal: '支払いが遅れたときの利息を計算し、支配を超える障害で損害賠償を免れる条件と、その効果を説明できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(c)'],
      slides: [
        {
          title: '遅れたお金と、台風で守れなかった約束',
          paras: ['友だちに貸した10万円が、約束の日から2か月遅れて返ってきた。遅れた分、利息くらいはもらいたいと思うのが自然。', '逆に、台風で電車が全部止まって約束の時間に行けなかったら、責められるのは酷だと感じる。CISG にもこの2つのルールがある。利息（Art 78）と免責（Art 79）。']
        },
        {
          title: '利息（interest）: Art 78',
          list: ['代金やそのほかの支払うべきお金が遅れたら、相手は利息を請求できる', '損害賠償（Art 74）とは別に、合わせて請求できる（without prejudice to damages）', '遅れたという事実だけで発生する。損害の証明はいらない', '利率は条約に書いていない。契約や、適用される国内法などで決まる'],
          formula: '利息 ＝ 遅れた金額 × 年利 × 遅れた日数 ÷ 365',
          note: { kind: 'tip', text: '条約に利率がないので、計算問題では利率と日数の数え方が問題文で与えられる。与えられたとおりに使う。' }
        },
        {
          title: '例題: 代金の支払いが遅れた',
          example: {
            problem: '日本の Sakura Co がドイツの買主に物品を売った。代金 $36,500 の支払期日は3月1日。買主は60日遅れて払った。契約で利率は年5%、1年は365日と決めてある。遅れのせいで、Sakura Co には予見できた $200 の損害（為替の不利な動き）も出た。Sakura Co が請求できる額は？',
            steps: ['利息: $36,500 × 5% ＝ 1年で $1,825', '1日あたり: $1,825 ÷ 365 ＝ $5', '60日分: $5 × 60 ＝ $300', '予見できた損害 $200 は、利息とは別に損害賠償として請求できる（Art 78 は Art 74 の損害賠償を妨げない）', '合計: $300 ＋ $200 ＝ $500'],
            answer: '利息 $300 ＋ 損害賠償 $200 ＝ $500'
          }
        },
        {
          title: '代金を返すときにも利息が付く',
          paras: ['契約が解除されて、売主が受け取った代金を返すときは、代金を受け取った日からの利息も付けて返す（Art 84(1)）。お金を使えた期間の分を戻すため。次のレッスンで詳しく学ぶ。'],
          example: {
            problem: '売主は代金 $73,000 を受け取っていたが、146日後に契約が解除された。利率は年5%、1年365日。返す利息は？',
            steps: ['$73,000 × 5% ＝ 1年で $3,650', '1日あたり $3,650 ÷ 365 ＝ $10', '$10 × 146日 ＝ $1,460'],
            answer: '代金 $73,000 に利息 $1,460 を付けて返す'
          }
        },
        {
          title: '免責（exemption）: Art 79',
          paras: ['義務を果たせなかった当事者は、次の条件を自分で証明できれば、責任を負わない。証明するのは、果たせなかった側。'],
          svg: `<svg viewBox="0 0 440 352" role="img" aria-label="免責の4つの条件がそろうと損害賠償だけが免責される" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">免責の4つの条件（Art 79(1)）</text><rect x="20" y="50" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="76" fill="var(--ink)">① 自分の支配を超える障害（impediment）</text><rect x="20" y="100" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="126" fill="var(--ink)">② 契約した時に考慮できなかった</text><rect x="20" y="150" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="176" fill="var(--ink)">③ 避けることも、乗り越えることもできない</text><rect x="20" y="200" width="400" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="226" fill="var(--ink)">④ 果たせなかったのは、その障害のせい</text><text x="220" y="264" text-anchor="middle" fill="var(--quiet)">全部そろったら</text><rect x="60" y="276" width="320" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="304" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">損害賠償だけを免れる</text><text x="220" y="342" text-anchor="middle" font-size="14" fill="var(--quiet)">解除や代金減額などは相手に残る（Art 79(5)）</text></svg>`
        },
        {
          title: '免責の細かいルール',
          list: ['効果は障害が続く間だけ（Art 79(3)）。障害がなくなれば、また履行の義務が戻る', '障害と、それが履行に与える影響を相手に通知する。合理的な期間内に届かなければ、通知がなかったことで生じた損害を賠償する（Art 79(4)）', '下請けなど履行を任せた第三者のせいなら、自分と第三者の両方が条件を満たす必要がある（Art 79(2)）', '相手の不履行が自分の行為のせいなら、それを理由に相手を責められない（Art 80）']
        },
        {
          title: '当たる例、当たらない例',
          table: { caption: 'Art 79 の障害になるか', head: ['出来事', '障害に当たるか'], rows: [['予想できない大地震で工場が全壊', '当たりうる'], ['政府が突然その物品の輸出を禁止', '当たりうる'], ['原材料が値上がりして赤字になる', 'ふつうは当たらない'], ['自社の機械の故障・人手不足', 'ふつうは当たらない']] },
          after: '値上がりや自社の故障は、契約した時に引き受けた商売上のリスクと考えられる。Art 80 の例: 買主が仕様を送らなかったので売主が作れなかったなら、買主は売主の遅れを責められない。'
        },
        {
          title: 'なぜ？ 免責を狭くしている理由',
          paras: ['CISG の損害賠償は、違反した側の落ち度（過失）を問わない。約束を守れなかったら、原則として賠償する。日本の感覚だと「自分に落ち度がなければ責任はない」と考えがちだが、CISG はそうではない。', 'その代わり、本当にどうしようもない障害だけを Art 79 で救う。条件を厳しくしておくと、相手は「約束は守られる」と信じて取引できる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '免責＝すべての責任が消える、ではない。消えるのは損害賠償だけ。相手は契約の解除や代金減額をまだ使える。また、免責されても契約は自動では終わらない。解除するなら別に通知する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['支払いが遅れたら利息を請求できる。損害賠償とも併用でき、利率は条約にない', 'Art 79 の免責は、支配を超え、予見も回避もできない障害だけ。証明は果たせなかった側', '免責されるのは損害賠償だけで、障害が続く間だけ。相手への通知が必要']
        },
        {
          title: '英単語',
          words: [
            ['interest', 'インタレスト', '利息'],
            ['sum in arrears', 'サム イン アリアーズ', '支払いが遅れているお金'],
            ['without prejudice to', 'ウィズアウト プレジュディス', '〜を妨げずに（〜とは別に）'],
            ['exemption', 'イグゼンプション', '免責'],
            ['impediment beyond his control', 'インペディメント', '支配を超える障害'],
            ['conclusion of the contract', '', '契約の締結（成立）']
          ]
        }
      ],
      quiz: [
        { q: '売主は年6%（1年365日）の利率で利息を請求できる。代金 $54,750 の支払いが40日遅れた。利息はいくら？', type: 'number', answer: 360, unit: '$', explain: '$54,750 × 6% ＝ 1年で $3,285。1日あたり $3,285 ÷ 365 ＝ $9。40日で $9 × 40 ＝ $360。' },
        { q: 'Under the UN Convention on Contracts for the International Sale of Goods (CISG), which of the following statements regarding interest is correct?', choices: ['Interest is payable at a rate of 5% per year, as fixed by the Convention', 'A claim for interest replaces any claim for damages caused by the late payment', 'A party is entitled to interest on the price or any other sum in arrears, without prejudice to any claim for damages', 'Interest is only payable if the seller has first made a formal request for payment'], answer: 2, explain: '利率は条約に定めがないので「5%と条約で決まっている」は誤り。利息は損害賠償と併用できるので「損害賠償の代わりになる」も誤り。代金は請求や手続きがなくても払う義務がある（Art 59）ので「正式な請求が先に必要」も誤り。' },
        { q: 'A seller fails to deliver because an unforeseeable earthquake destroyed its factory. The seller satisfies the conditions of Article 79 CISG. Which of the following remains available to the buyer?', choices: ['Claiming damages for the non-delivery', 'Declaring the contract avoided', 'Claiming damages for the loss of profit on resale', 'None, because the contract is automatically terminated'], answer: 1, explain: 'Art 79 で免れるのは損害賠償だけ（Art 79(5)）。逸失利益も損害賠償なので請求できない。契約は自動では終わらないので、買主は解除を通知して代金の支払いを免れることができる。' },
        { q: '売主は、原材料が契約時より30%値上がりし、約束の価格で売ると赤字になるので引渡しを拒んだ。CISG の Art 79 で免責される？', choices: ['免責される。売主の支配を超える出来事だから', '免責される。売主に落ち度がないから', '買主が値上げに応じなければ、自動的に免責される', 'ふつうは免責されない。値上がりは契約した時に引き受けた商売上のリスク'], answer: 3, explain: '値上がりは予見でき、高く買ってでも履行すれば乗り越えられるので、ふつうは障害に当たらない。CISG の賠償責任は落ち度を問わないので「落ち度がない」だけでは免責されない。' },
        { q: 'A seller is prevented from delivering by a government export ban. It does not inform the buyer for three months. Under Article 79 CISG, what is the consequence of the delay in giving notice?', choices: ['The seller is liable for damages resulting from the buyer not receiving the notice within a reasonable time', 'The seller loses the exemption and is liable for all damages caused by the non-delivery', 'Nothing, because notice is not required under Article 79', 'The contract is treated as avoided by the seller'], answer: 0, explain: '通知が遅れても免責そのものは失わない。責任を負うのは、通知が届かなかったことで生じた損害だけ（Art 79(4)）。たとえば、早く知れば別の仕入先を探せたのに探せなかった損害。' },
        { q: '売主は受け取った代金 $73,000 を返す。代金を受け取ってから返すまで146日。利率は年5%、1年365日。代金に付けて返す利息は？', type: 'number', answer: 1460, unit: '$', explain: 'Art 84(1)：代金を返すときは、受け取った日からの利息を付ける。$73,000 × 5% ÷ 365 ＝ 1日 $10。$10 × 146 ＝ $1,460。' }
      ]
    },
    {
      id: 'B028',
      no: 28,
      title: '解除の効果と物品の保存',
      goal: '契約を解除した後に何が消え何が残るか、返還のルール、相手の物品を手元に持つ側の保存・寄託・売却の義務を説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(c)'],
      slides: [
        {
          title: 'キャンセルしたら、お互いに元に戻す',
          paras: ['通販で注文したソファが、頼んだものと全然違った。注文をキャンセルすると、払ったお金は戻り、届いたソファは返す。', 'ただ、返すまでの間、ソファを雨ざらしにしてはいけない。キャンセルしても「待たされた分の損」は請求したい。CISG の解除の効果と物品の保存は、この感覚をルールにしたもの。']
        },
        {
          title: '解除（avoidance）で何が消え、何が残るか',
          list: ['消える: 双方のまだ果たしていない義務（Art 81(1)）。売主は引き渡さなくてよく、買主は払わなくてよい', '残る: 損害賠償の請求（subject to any damages which may be due）', '残る: 紛争解決の条項（仲裁条項など）と、解除後の権利義務を決めた条項'],
          after: 'すでに履行した側は、渡したものの返還（restitution）を請求できる。双方が返す場合は、同時に返す（concurrently、Art 81(2)）。'
        },
        {
          title: '受け取った状態で返せないと、解除できない',
          paras: ['買主は、受け取ったときとほぼ同じ状態（substantially in the condition）で返せないと、解除や代替品の請求ができない（Art 82(1)）。例外は3つ（Art 82(2)）。'],
          list: ['返せない原因が、買主の行為や不作為ではない', 'Art 38 の検査で、物品が壊れたり傷んだりした', '不適合に気づく（気づくべき）前に、通常の商売で売った、または通常の使い方で消費・加工した'],
          after: '解除できなくなっても、代金減額や損害賠償などほかの救済は残る（Art 83）。'
        },
        {
          title: '返すときは、得たものも返す',
          paras: ['Art 84 は、解除の後に得をした分も戻させる。'],
          list: ['売主が代金を返すとき: 代金を受け取った日からの利息も付ける（Art 84(1)）', '買主が物品を返すとき: 物品から得た利益（benefits）を売主に返す。たとえば、機械を他社に貸して得た賃料（Art 84(2)）', '物品を返せないのに解除や代替品の請求をしたときも、得た利益を返す']
        },
        {
          title: '物品の保存（preservation）: 誰がするか',
          paras: ['解除や引取りの遅れで、相手の物品を手元に持つことがある。そのときは、持っている側が合理的な措置で物品を守る。かかった費用は相手から払ってもらうまで、物品を手元にとどめておける（retain）。'],
          table: { caption: '保存の義務', head: ['場面', '保存する人'], rows: [['買主が引取りを遅らせた。または代金と引換えの約束なのに払わない（Art 85）', '物品を持つ売主'], ['受け取った物品を買主が拒絶するつもり（Art 86(1)）', '物品を持つ買主'], ['仕向地で買主の自由にされた物品を、買主が拒絶する（Art 86(2)）', '買主が売主のために占有する']] }
        },
        {
          title: '仕向地で拒絶するときの細かい条件',
          paras: ['Art 86(2) の場合、買主が売主のために物品を占有するのは、代金を払わずに、しかも不合理な不便や費用なしにできるときだけ。', '売主本人や、売主の代わりに物品を管理できる人が仕向地にいるなら、この義務はない。その人に任せればよい。']
        },
        {
          title: '倉庫に預ける、売る（Art 87・88）',
          list: ['倉庫に預ける: 第三者の倉庫に、相手の費用で預けられる。費用が不合理でなければ（Art 87）', '売ってよい: 相手が引取り・引取り直し・代金や保存費用の支払いを不合理に遅らせたら、売ると合理的に通知した上で売れる（Art 88(1)）', '売らなければならない: すぐ傷む物や、保存に不合理な費用がかかる物は、売る合理的な措置をとる。できるだけ通知する（Art 88(2)）', '売った代金から保存と売却の合理的な費用を差し引き、残りは相手に渡す（Art 88(3)）']
        },
        {
          title: '例題: 拒絶したマンゴー',
          example: {
            problem: 'ドイツの買主は、届いた生マンゴーが不適合なので拒絶した。売主の代理人は現地にいない。マンゴーは数日で腐る。買主はマンゴーを $9,000 で売った。冷蔵保管に $500、売却に $700 かかった。買主はどうすべきで、売主にいくら渡す？',
            steps: ['拒絶するつもりの買主には保存の義務がある（Art 86）', 'すぐ傷む物なので、売る合理的な措置をとる義務がある。できるだけ売主に通知する（Art 88(2)）', '差し引ける費用: $500 ＋ $700 ＝ $1,200（Art 88(3)）', '売主に渡す残り: $9,000 − $1,200 ＝ $7,800'],
            answer: '買主はマンゴーを売り、費用 $1,200 を差し引いた $7,800 を売主に渡す'
          }
        },
        {
          title: 'なぜ？ 持っている側に守らせる理由',
          paras: ['国際取引では、物品と持ち主が何千キロも離れている。持ち主が自分で守りに来るのは時間もお金もかかる。いま物品のそばにいる人が守るのが、いちばん安くて早い。', 'ただ、守る人が損をしないように、費用は相手に払わせ、払うまで物品を手元にとどめられる。物品をむだにしないことが、両方の得になる。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「解除したら全部白紙で、損害賠償も請求できない」は誤り。損害賠償と紛争解決条項は残る。「拒絶した物品は放っておいてよい」も誤り。拒絶する側でも、手元にあれば守る義務がある。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['解除で未履行の義務は消えるが、損害賠償と紛争解決条項は残る。履行済みのものは同時に返し合う', '買主は、ほぼ受け取った状態で返せないと解除できない（例外あり）。返すときは利息や利益も戻す', '相手の物品を持つ側は保存する。費用を払うまで留め置け、倉庫への寄託や売却もできる']
        },
        {
          title: '英単語',
          words: [
            ['avoidance of the contract', 'アヴォイダンス', '契約の解除'],
            ['restitution', 'レスティテューション', '原状回復（渡したものの返還）'],
            ['concurrently', 'コンカレントリー', '同時に'],
            ['preservation of the goods', 'プリザヴェイション', '物品の保存'],
            ['retain', 'リテイン', '手元にとどめておく'],
            ['deposit in a warehouse', 'デポジット', '倉庫に寄託する'],
            ['subject to rapid deterioration', 'ディテリオレイション', 'すぐに傷む']
          ]
        }
      ],
      quiz: [
        { q: 'Under the CISG, what is the effect of avoidance of the contract?', choices: ['It ends all claims between the parties, including claims for damages', 'It releases both parties from their obligations under the contract, subject to any damages which may be due', 'It also ends the arbitration clause in the contract', 'It allows the seller to keep any part of the price already paid'], answer: 1, explain: 'Art 81(1)。損害賠償は残る。紛争解決の条項も解除で消えない。すでに払われた代金は返還（restitution）の対象になる。' },
        { q: 'A buyer cannot return goods substantially in the condition in which it received them. In which situation does the buyer still keep the right to declare the contract avoided under the CISG?', choices: ['The buyer damaged the goods through careless storage', 'After discovering the defect, the buyer decided to use part of the goods for its own purposes', 'The buyer repainted the goods in its own colours after notifying the defect', 'The goods were consumed in normal use before the buyer discovered, or ought to have discovered, the lack of conformity'], answer: 3, explain: 'Art 82(2)(c) の例外。ほかの3つは、買主自身の行為で返せなくなったので解除できない。ただし代金減額や損害賠償は残る（Art 83）。' },
        { q: '買主が引取りに来ないため、売主の倉庫に物品が残っている。売主はどうする？', choices: ['合理的な措置で物品を保存し、費用を払ってもらうまで物品を留め置ける', '買主の物品なので、売主は何もしなくてよい', 'すぐに通知なしで売って、代金は全部自分のものにできる', '物品を廃棄して、代金全額を請求できる'], answer: 0, explain: 'Art 85。売る場合も、不合理な遅れがあるときに、売ることを合理的に通知してから（Art 88(1)）。売った代金は費用を差し引いて残りを相手に渡す。' },
        { q: '買主は拒絶した生花を売るしかなかった。売却代金は $12,000、保存費用は $900、売却費用は $600 だった。買主が売主に渡す残りはいくら？', type: 'number', answer: 10500, unit: '$', explain: 'Art 88(3)：合理的な保存と売却の費用を差し引き、残りを相手に渡す。$12,000 −（$900 ＋ $600）＝ $10,500。' },
        { q: 'A contract is avoided after the seller has received the price. Under Article 84 CISG, what must the seller pay to the buyer?', choices: ['The price only, with no interest', 'The price, together with interest from the date of avoidance only', 'The price, together with interest from the date on which the price was paid', 'The price, less the costs of the seller in preparing the goods'], answer: 2, explain: '利息は代金を受け取った日から（Art 84(1)）。解除の日からではない。売主の準備費用は、損害賠償の問題であって返す代金からは差し引けない。' },
        { q: '仕向地で物品を拒絶する買主が、売主のために物品を占有しなくてよいのはどれ？', choices: ['物品の価値が $1,000 を超えるとき', '買主が物品を気に入らないとき', '売主の代わりに物品を管理できる人が仕向地にいるとき', '契約がすでに解除されたとき'], answer: 2, explain: 'Art 86(2)。売主本人や売主の代わりの人が仕向地にいれば、その人が管理すればよい。代金を払わずに、不合理な費用なしに占有できないときも義務はない。' }
      ]
    },
    {
      id: 'B029',
      no: 29,
      title: '危険の移転：いつ買主の負担になるか',
      goal: '運送を伴う売買・運送中の売買・その他の場合に、物品の偶然の滅失や損傷の負担（危険）がいつ買主に移るかを判断できるようになる',
      minutes: 16,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(d)'],
      slides: [
        {
          title: '「届くまで店の責任」ではない',
          paras: ['ネット通販で買ったコップが配送中に割れたら、店が新しいものを送ってくれる。日本の買い物ではこれが当たり前の感覚。', '国際的な会社どうしの売買は違う。運送を伴う売買では、売主が最初の運送業者に渡した時から、途中で壊れても買主の負担になるのが原則。この「負担」を危険（risk）という。']
        },
        {
          title: '危険（risk）とは',
          paras: ['売主のせいでも買主のせいでもなく、物品がなくなったり壊れたりしたとき（嵐、盗難、火事など）、その損を誰がかぶるか。'],
          formula: '危険が移った後に物品が滅失・損傷しても、買主は代金を払う（Art 66）',
          after: 'ただし、その滅失や損傷が売主の行為や不作為のせいなら別。危険は所有権とは別の話。CISG は所有権の移転を扱わない（Art 4）。'
        },
        {
          title: '運送を伴う売買（Art 67）',
          list: ['売主が特定の場所で渡す義務がない: 最初の運送人（first carrier）に渡した時に移る', '売主が特定の場所で運送人に渡す義務がある（例: 神戸港で船会社に）: その場所で渡すまで移らない', '売主が船荷証券など処分を支配する書類を手元に置いていても、危険の移転には影響しない', '物品が契約の物と特定される（identified）まで移らない。荷印、船積書類、通知などで特定する（Art 67(2)）']
        },
        {
          title: '図で見る: 最初の運送人で移る',
          svg: `<svg viewBox="0 0 440 270" role="img" aria-label="最初の運送人に渡した時に危険が買主に移るタイムライン" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">運送を伴う売買の危険（Art 67(1)）</text><rect x="20" y="52" width="145" height="34" rx="6" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="92" y="74" text-anchor="middle" fill="var(--ink)">売主の負担</text><rect x="165" y="52" width="255" height="34" rx="6" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="292" y="74" text-anchor="middle" font-weight="600" fill="var(--ink)">買主の負担</text><line x1="40" y1="130" x2="400" y2="130" stroke="var(--edge)" stroke-width="2"/><circle cx="60" cy="130" r="7" fill="var(--ink)"/><circle cx="165" cy="130" r="7" fill="var(--ink)"/><circle cx="275" cy="130" r="7" fill="var(--ink)"/><circle cx="380" cy="130" r="7" fill="var(--ink)"/><text x="60" y="160" text-anchor="middle" fill="var(--ink)">売主の倉庫</text><text x="165" y="160" text-anchor="middle" fill="var(--ink)">最初の運送人</text><text x="165" y="180" text-anchor="middle" fill="var(--quiet)">（トラック）</text><text x="275" y="160" text-anchor="middle" fill="var(--ink)">港・船</text><text x="380" y="160" text-anchor="middle" fill="var(--ink)">買主に到着</text><line x1="165" y1="44" x2="165" y2="196" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="220" y="222" text-anchor="middle" fill="var(--ink)">最初の運送人に渡した時に移る</text><text x="220" y="252" text-anchor="middle" fill="var(--ink)">船の上で壊れても、代金は払う（Art 66）</text></svg>`,
          caption: '港や船ではなく、最初の運送人に渡した時点。売主が神戸港で渡すと決めていれば、神戸港で移る。'
        },
        {
          title: '運送中の売買と、その他の場合',
          table: { caption: '危険が移る時', head: ['場面', '移る時'], rows: [['運送を伴う売買（Art 67）', '最初の運送人に渡した時'], ['すでに運送中の物品を売る（Art 68）', '契約が成立した時'], ['買主が売主の営業所で引き取る（Art 69(1)）', '買主が引き取った時。遅れたら、物品が買主の自由にされ、引き取らない違反をした時'], ['売主の営業所以外で引き取る（Art 69(2)）', '引渡しの時期が来て、買主の自由にされたことを買主が知った時']] },
          after: 'Art 68 では、事情によっては、運送書類を出した運送人に渡した時にさかのぼる。ただし契約時に売主が滅失を知っていて（知るべきで）黙っていたら、その損は売主が負う。'
        },
        {
          title: '例題: 船の上で壊れた照明',
          example: {
            problem: '大阪の売主が、ハンブルクの買主に照明 2,000台を売った。契約は運送を伴い、売主が特定の場所で渡す義務はない。売主は1月10日、買主あての荷印を付けた照明を大阪でトラック会社に渡した。トラック会社は神戸港で船に積み替え、2月に嵐で300台が壊れた。誰の負担？',
            steps: ['運送を伴う売買か → はい。Art 67 を使う', '特定の場所で渡す義務 → ない。最初の運送人（大阪のトラック会社）に渡した時に移る', '特定されているか → 買主あての荷印があるので特定済み（Art 67(2)）', '嵐は売主のせいではない → Art 66 で、買主は代金を全額払う', '買主は保険会社や運送人に請求する'],
            answer: '1月10日に危険は買主に移っている。買主は代金を払う'
          }
        },
        {
          title: '売主が重大な違反をしていたら（Art 70）',
          paras: ['売主が重大な契約違反（fundamental breach）をしていた場合、危険が移っていても、買主の救済は失われない。', '例: 注文と全く違う型の照明が送られ、運送中に嵐で壊れた。危険は運送人に渡した時に移っているが、買主は重大な違反を理由に契約を解除し、代金を払わなくてよい。']
        },
        {
          title: 'なぜ？ 運送人に渡した時に移す理由',
          paras: ['運送が始まると、売主も買主も物品をそばで見張れない。どこで壊れたかの証明も難しい。そこで、分かりやすい一点で線を引く。', '運送中の保険は、物品を受け取る買主がかけるのが自然。危険を負う人が保険をかければ、事故が起きても誰かが損を埋める。実務では、契約にインコタームズ（FOB、CIF など）を入れて、このルールを上書きすることが多い（Art 6・Art 9）。第3部で学ぶ。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '危険＝所有権ではない。所有権がまだ売主にあっても、危険は買主に移りうる。また「港で船に積んだ時」「買主に届いた時」は、CISG の Art 67(1) の答えではない。答えは最初の運送人に渡した時。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['危険が移った後の滅失・損傷でも、買主は代金を払う（売主のせいなら別）', '運送を伴う売買は最初の運送人に渡した時、運送中の売買は契約成立の時、その他は買主が引き取った時に移る', '特定されるまで危険は移らない。売主の重大な違反があれば、買主の救済は残る']
        },
        {
          title: '英単語',
          words: [
            ['passing of risk', 'パッシング オブ リスク', '危険の移転'],
            ['first carrier', 'ファースト キャリアー', '最初の運送人'],
            ['goods sold in transit', 'イン トランジット', '運送中に売られた物品'],
            ['clearly identified to the contract', 'アイデンティファイド', '契約の物品として特定された'],
            ['placed at his disposal', 'ディスポーザル', '買主の自由に使える状態に置かれた'],
            ['fundamental breach', 'ファンダメンタル ブリーチ', '重大な契約違反']
          ]
        }
      ],
      quiz: [
        { q: 'A contract of sale involves carriage of the goods, and the seller is not bound to hand them over at any particular place. Under the CISG, when does the risk pass to the buyer?', choices: ['When the goods are loaded on board the ship at the port of shipment', 'When the goods are handed over to the first carrier for transmission to the buyer', 'When the buyer receives the goods at its own premises', 'When ownership of the goods passes to the buyer'], answer: 1, explain: 'Art 67(1)。船に積んだ時や到着時ではない。危険と所有権は別で、CISG は所有権の移転を扱わない。' },
        { q: 'Under the CISG, when does the risk in respect of goods sold in transit normally pass to the buyer?', choices: ['From the time the goods arrive at the port of destination', 'From the time the buyer pays the price', 'From the time the goods were originally loaded, in all cases', 'From the time of the conclusion of the contract'], answer: 3, explain: 'Art 68 の原則は契約成立の時。事情によっては運送書類を出した運送人に渡した時にさかのぼるが、いつもではない。売主が滅失を知って黙っていたら売主の負担。' },
        { q: '危険が買主に移った後、物品が火事で焼けた。売主にも買主にも落ち度はない。買主は代金を払う？', choices: ['払う。危険が移った後の滅失だから', '払わない。物品を受け取っていないから', '半分だけ払う', '払わない。売主が保険をかけるべきだったから'], answer: 0, explain: 'Art 66。危険が移った後の滅失・損傷は、売主の行為や不作為が原因でない限り、代金を払う義務を消さない。' },
        { q: '売主は、複数の買主向けの小麦をまとめて1隻の船に積んだ。どの買主の分か、荷印も書類も通知もない。運送中に一部が海水で傷んだ。この買主に危険は移っている？', choices: ['移っている。最初の運送人に渡したから', '移っていない。契約の物品として特定されていないから', '移っている。運送中の売買だから', '移っていない。買主がまだ代金を払っていないから'], answer: 1, explain: 'Art 67(2)。荷印・船積書類・通知などで特定されるまで、危険は移らない。代金の支払いは危険の移転と関係ない。' },
        { q: 'A buyer agreed to collect goods from the seller\'s premises on 1 May but failed to do so, in breach of contract. On 5 May the goods were destroyed in a fire that was not the fault of either party. Who bears the loss under the CISG?', choices: ['The seller, because the goods were still in its possession', 'The seller, because risk passes only when the buyer takes over the goods', 'The loss is shared equally between the parties', 'The buyer, because the goods were placed at its disposal and it committed a breach by failing to take delivery'], answer: 3, explain: 'Art 69(1)。原則は引き取った時だが、期限に引き取らなければ、物品が自由にされ引き取らない違反をした時から買主の負担。' },
        { q: '売主が注文と全く違う型の物品を送り（重大な違反）、運送中に嵐で壊れた。危険はすでに買主に移っている。買主はどうできる？', choices: ['重大な違反を理由に契約を解除できる（Art 70）', '危険が移ったので、代金を全額払うしかない', '危険が移ったので、損害賠償も請求できない', '売主に新しい物品を送らせることはできるが、解除はできない'], answer: 0, explain: 'Art 70。売主が重大な違反をしていれば、Art 67〜69 で危険が移っていても、買主の救済は失われない。' }
      ]
    },
    {
      id: 'B030',
      no: 30,
      title: '第2部 総合演習①：成立と売主・買主の義務',
      goal: '1つの輸出取引で、CISG が適用されるか、契約がいつどんな条件で成立したか、売主と買主が何をする義務かを順に判断できるようになる',
      minutes: 18,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B1(a)', 'K3:B1(b)', 'K3:B2(a)', 'K3:B2(b)'],
      slides: [
        {
          title: '今日の取引',
          paras: ['ここまで学んだ条文を、1つの取引で順番に使う。試験の問題も、この順番で考えると迷わない。'],
          list: ['売主: Sakura Lighting Co（営業所は大阪、日本）', '買主: Rhein Licht GmbH（営業所はハンブルク、ドイツ）', '物品: 店舗用の LED 照明 2,000台、1台 $20、合計 $40,000', '日本もドイツも CISG の締約国。契約は海上運送を伴う']
        },
        {
          title: '考える順番',
          svg: `<svg viewBox="0 0 440 286" role="img" aria-label="CISG の問題を解く4つの手順" font-size="15"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">いつもこの順番で確かめる</text><rect x="20" y="50" width="400" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="36" y="78" font-weight="600" fill="var(--ink)">1 CISG が適用されるか（Art 1〜6）</text><rect x="20" y="106" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="134" fill="var(--ink)">2 契約は成立したか、条件は（Art 14〜24）</text><rect x="20" y="162" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="190" fill="var(--ink)">3 誰が何をする義務か（Art 30〜60）</text><rect x="20" y="218" width="400" height="44" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="36" y="246" fill="var(--ink)">4 違反と救済・危険（次のレッスン）</text><text x="220" y="280" text-anchor="middle" font-size="14" fill="var(--quiet)">前の答えが次の前提になる</text></svg>`
        },
        {
          title: '手順1: 適用されるか',
          list: ['営業所が異なる国にあり、両国とも締約国 → Art 1(1)(a) で適用', '国籍や、商人かどうかは関係ない（Art 1(3)）', '店舗用なので、個人・家庭用の除外（Art 2(a)）に当たらない。競売・株式・船舶・電気の除外にも当たらない', '契約で CISG を排除していない（Art 6）'],
          note: { kind: 'tip', text: '買主が英国（非締約国）なら Art 1(1)(a) は使えない。国際私法で締約国（日本など）の法が指定されれば、Art 1(1)(b) で適用されうる。' }
        },
        {
          title: '手順2: 契約はいつ成立したか',
          table: { caption: '3月のやりとり', head: ['日付', '出来事と意味'], rows: [['3月1日', 'Rhein が申込み: 2,000台、1台 $20、4月30日までに引渡し。3月10日まで有効'], ['3月4日', 'Sakura が「承諾します。ただし引渡しは5月31日」と返信 → 引渡し時期の変更は重要な変更。申込みの拒絶＋反対申込み（Art 19(1)(3)）'], ['3月6日', 'Rhein が「了承」と返信し、同日 Sakura に届く → 承諾が到達して契約成立（Art 18(2)・23）']] },
          after: '契約の引渡し期日は5月31日（反対申込みの条件）。3月4日の拒絶が届いた時点で、Rhein の最初の申込みは失効している（Art 17）。'
        },
        {
          title: 'もし変更が小さかったら',
          paras: ['Sakura の返信が「承諾します。出荷のときに品番の一覧表を同封します」だったら？ 一覧表の同封は、代金・支払・品質・数量・引渡しの場所と時期・責任の範囲・紛争解決のどれでもない。重要でない追加と考えられる（Art 19(3)）。', 'この場合、Rhein が遅滞なく異議を述べなければ、返信は承諾になり、契約はその追加を含んで成立する（Art 19(2)）。成立は、その返信が Rhein に届いた時（Art 18(2)）。']
        },
        {
          title: '手順3: 売主 Sakura の義務',
          list: ['引渡し: 運送を伴うので、最初の運送人に渡すことで引き渡す（Art 31(a)）。期日は5月31日まで（Art 33）', '書類: 船荷証券や送り状など、契約どおりの書類を渡す（Art 34）', '適合性: 数量・品質・種類・包装が契約どおり。通常の目的に合う。Rhein が「屋外の看板用」と伝えていれば、その特定の目的にも合う（Art 35）', '第三者の権利: 他社の所有権や、知っていたはずの知的財産権の請求がない物品を渡す（Art 41・42）']
        },
        {
          title: '手順3: 買主 Rhein の義務',
          list: ['代金 $40,000 を払う（Art 53）。送金手続きなどの準備も含む（Art 54）', '場所: 原則は売主の営業所。書類と引換えなら、その引渡しの場所（Art 57）', '時期: 物品か書類が買主の自由にされた時（Art 58）。請求がなくても払う（Art 59）', '引取り: 必要なことをし、物品を引き取る（Art 60）', '検査と通知: 早く検査し、不適合は合理的な期間内に通知。上限は現実の引渡しから2年（Art 38・39）']
        },
        {
          title: 'なぜ？ 順番を飛ばさない理由',
          paras: ['CISG が適用されなければ、どの条文も使えない。契約が成立していなければ、義務も違反もない。成立した条件が分からなければ、期日に遅れたかどうかも決まらない。', 'この例では、引渡し期日が4月30日か5月31日かで、5月中旬の引渡しが違反になるかが変わる。だから成立の判断が先。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「承諾します」と書いてあれば承諾、ではない。引渡し時期・代金・数量などを変えた返信は、言葉に関係なく反対申込み。また、元の申込みは拒絶で失効するので、後から「やはり元の条件で承諾」と言っても契約は成立しない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['適用 → 成立 → 義務 → 違反の順に確かめる', '重要な変更（代金・支払・品質・数量・引渡しの場所と時期・責任・紛争解決）を含む返信は反対申込み', '売主は引渡し・書類・適合性、買主は代金の支払いと引取り']
        },
        {
          title: '英単語',
          words: [
            ['place of business', 'プレイス オブ ビジネス', '営業所'],
            ['Contracting State', 'コントラクティング ステイト', '締約国'],
            ['counter-offer', 'カウンター オファー', '反対申込み'],
            ['materially alter', 'マテリアリー', '重要な変更を加える'],
            ['conformity of the goods', 'コンフォーミティ', '物品の適合性'],
            ['take delivery', 'テイク デリバリー', '引き取る']
          ]
        }
      ],
      quiz: [
        { q: 'Sakura Lighting Co (place of business in Japan) agrees to sell LED lamps for use in shops to Rhein Licht GmbH (place of business in Germany). Both Japan and Germany are Contracting States. The contract says nothing about the applicable law. Does the CISG apply?', choices: ['No, because the parties have not expressly chosen the CISG in the contract', 'Yes, but only because both parties are companies rather than individuals', 'Yes, because the parties have their places of business in different Contracting States', 'No, because the goods are to be carried by sea'], answer: 2, explain: 'Art 1(1)(a)。CISG は選ばなくても適用され、排除したいときに排除する（Art 6）。商人かどうかは関係ない（Art 1(3)）。運送の方法も関係ない。' },
        { q: 'On 1 March Rhein offers to buy 2,000 lamps at $20 each for delivery by 30 April. On 4 March Sakura replies: "We accept, but delivery will be by 31 May". On 6 March Rhein replies "Agreed", which reaches Sakura the same day. When was the contract concluded?', choices: ['1 March', '4 March', '6 March', '31 May'], answer: 2, explain: '3月4日の返信は引渡し時期を変えたので反対申込み（Art 19）。Rhein の「了承」が Sakura に届いた3月6日に契約成立（Art 18(2)・23）。条件は5月31日引渡し。' },
        { q: '上の例で、Rhein が3月6日に返事をせず、3月8日に Sakura が「やはり元の4月30日の条件で承諾します」と送った。Rhein の申込みは3月10日まで有効と書いてあった。契約は成立する？', choices: ['成立する。申込みは3月10日まで有効だったから', '成立しない。3月4日の拒絶が届いた時に、元の申込みは失効した', '成立する。Sakura が承諾と書いたから', '3月10日になれば自動的に成立する'], answer: 1, explain: 'Art 17：申込みは、拒絶が申込者に届いた時に失効する。有効期限が残っていても同じ。3月8日の通知は新しい申込みとして扱われ、Rhein が承諾すれば成立する。' },
        { q: 'The contract involves carriage of the goods and does not require Sakura to deliver at any particular place. How does Sakura perform its obligation to deliver?', choices: ['By delivering the goods to Rhein\'s warehouse in Hamburg', 'By loading the goods on board the ship at the port of destination', 'By sending the invoice to Rhein', 'By handing the goods over to the first carrier for transmission to Rhein'], answer: 3, explain: 'Art 31(a)。運送を伴う売買では、最初の運送人に渡せば引渡しの義務を果たしたことになる。送り状の送付は書類の交付（Art 34）で、引渡しそのものではない。' },
        { q: 'Rhein discovers that some lamps do not work. Under the CISG, by when must Rhein give notice of the lack of conformity to keep its right to rely on it?', choices: ['Within a reasonable time after it discovered or ought to have discovered it, and at the latest within two years of the goods being actually handed over', 'Within 30 days of the conclusion of the contract', 'Within six years of the delivery of the goods', 'There is no time limit once the buyer has paid the price'], answer: 0, explain: 'Art 39。合理的な期間内に、内容を示して通知する。上限は現実の引渡しから2年（契約で決めた保証期間と合わない場合は別）。代金を払ったかどうかは関係ない。' },
        { q: 'Sakura は引渡しの後、送り状は送ったが、支払いの催促をしていない。Rhein は「催促がないので払わなくてよい」と言う。正しい？', choices: ['正しい。売主が催促するまで支払義務は生じない', '正しくない。買主は請求や手続きがなくても期日に払う義務がある（Art 59）', '正しい。代金は物品を全部使った後に払えばよい', '正しくない。ただし、利息は催促した日からしか付かない'], answer: 1, explain: 'Art 59。支払いに売主の請求は不要。遅れれば、Art 78 の利息は遅れた日から請求できる（催促の日からではない）。' }
      ]
    },
    {
      id: 'B031',
      no: 31,
      title: '第2部 総合演習②：救済・損害賠償・危険',
      goal: '同じ輸出取引の続きで、違反に応じた救済を選び、代金減額と損害賠償を計算し、危険の負担と免責を判断できるようになる',
      minutes: 20,
      recall: true,
      exam: 'both',
      outcomes: ['K3:B2(a)', 'K3:B2(b)', 'K3:B2(c)', 'K3:B2(d)'],
      slides: [
        {
          title: '取引の続き: 5つの出来事',
          paras: ['Sakura（日本）と Rhein（ドイツ）の照明の取引。契約後に次のことが起きた。1つずつ救済を考える。'],
          list: ['A: 届いた 2,000台のうち 200台の調光が不安定。修理はできる', 'B: 別の契約の 1,000台（1台 $20）を Sakura が期日に送らない', 'C: 1回目の出荷の途中、海上の嵐で 300台が壊れた', 'D: もし Sakura の工場が予想できない地震で全壊していたら？', 'E: 1回目の代金を Rhein が期日に払わない']
        },
        {
          title: '出来事A: 一部の不適合',
          paras: ['200台は通常の目的に合わず、Art 35 の不適合。ただし全体の1割で修理もできるので、Rhein が期待できたものを実質的に奪うほどではない。重大な違反（Art 25）ではないと考えられる。'],
          table: { caption: '使える救済', head: ['救済', '使えるか'], rows: [['修理の請求（Art 46(3)）', '使える'], ['代金減額（Art 50）', '使える'], ['損害賠償（Art 74）', '使える。ほかの救済と併用できる'], ['代替品の請求・契約全体の解除', '使えない。重大な違反が必要']] }
        },
        {
          title: '例題1: 代金減額',
          example: {
            problem: '契約代金は $40,000。引渡しの時点で、不適合を含む実際の物品の価値は $39,600、契約どおりの物品だったら価値は $44,000（市場価格が上がっていた）。Rhein が代金減額を選ぶと、払う代金はいくら？',
            steps: ['Art 50: 実際の物品の価値と、適合した物品の価値の比率で代金を減らす', '比率: $39,600 ÷ $44,000 ＝ 0.9', '減額後の代金: $40,000 × 0.9 ＝ $36,000', '減額は $4,000。価値の差 $4,400 をそのまま引くのではない'],
            answer: '払う代金は $36,000'
          },
          note: { kind: 'warn', text: '代金減額は「価値の差を引く」ではなく「比率で減らす」。$40,000 − $4,400 ＝ $35,600 は誤り。' }
        },
        {
          title: '出来事B: 引き渡さない',
          list: ['期日（6月30日）を過ぎても引き渡さない。Rhein は7月15日までの付加期間を定めた（Art 47）', '付加期間内にも届かない → 重大な違反かどうかを問わず解除できる（Art 49(1)(b)）。Rhein は解除を通知した（Art 26）', '原因は Sakura の自社の生産ラインの故障 → 支配を超える障害ではないので、Art 79 で免責されない']
        },
        {
          title: '例題2: 代替品を買ったときの損害賠償',
          example: {
            problem: '解除の後、Rhein は合理的な期間内の7月25日に、別の会社から同じ照明 1,000台を1台 $23 で買った。追加の運送費 $400 もかかった。解除の時の市場価格は1台 $24 だった。Rhein の損害賠償は？',
            steps: ['代替品を買ったので Art 75 を使う（Art 76 の時価は使わない）', '契約代金: 1,000台 × $20 ＝ $20,000', '代替品の代金: 1,000台 × $23 ＝ $23,000', '差額: $23,000 − $20,000 ＝ $3,000', '追加の運送費 $400 は、予見できた損害として Art 74 で加える', '合計: $3,000 ＋ $400 ＝ $3,400'],
            answer: '損害賠償 $3,400'
          },
          note: { kind: 'warn', text: '代替品を買ったなら Art 75（実際に買った価格）。買っていないなら Art 76（解除した時の時価）。この例で時価 $24 を使って $4,000 とするのは誤り。' }
        },
        {
          title: '損害を広げない義務（Art 77）',
          paras: ['別の筋書き: Rhein は代替品を探さずに待ち、照明がないため新店舗の開店が遅れて、利益 $6,000 を失った。7月25日に代替品を買っていれば、失う利益は $2,000 ですんだ。', '損害を主張する側は、損害を減らす（mitigate）合理的な措置をとる義務がある。とらなかったら、減らせた分は賠償から差し引かれる。ここでは $6,000 − $2,000 ＝ $4,000 が差し引かれ、利益の損として認められるのは $2,000。']
        },
        {
          title: '出来事C: 運送中の嵐',
          paras: ['契約は運送を伴い、Sakura が特定の場所で渡す義務はない。Rhein あての荷印を付けた照明を大阪の運送会社に渡した時点で、危険は Rhein に移っている（Art 67）。', '嵐は Sakura のせいではない。Rhein は壊れた 300台の分も代金を払う（Art 66）。損は保険会社や運送人に請求する。ただし、もし Sakura の違反が重大なものだったら、Rhein の救済は残る（Art 70）。']
        },
        {
          title: '出来事D: 予想できない地震だったら',
          list: ['支配を超え、契約時に考慮できず、避けられない障害 → Art 79 で損害賠償を免れる', 'それでも Rhein は、解除の条件（重大な違反、または付加期間の経過）を満たせば解除できる。損害賠償以外の権利は残る（Art 79(5)）', 'Sakura は地震と影響を Rhein に通知する。遅れれば、通知がなかったための損害を賠償する', '工場が再開すれば、免責は終わる（障害が続く間だけ）']
        },
        {
          title: '出来事E: Rhein が代金を払わない',
          paras: ['今度は買主の違反。売主の救済（Art 61〜65）は次のとおり。'],
          list: ['支払いを求める（Art 62）', '付加期間を定めて待つ（Art 63）。その間はほかの救済を使えない。遅れの損害賠償は請求できる', '期間内にも払わない、または不払いが重大な違反 → 解除（Art 64(1)）', '損害賠償と利息（Art 78）は併用できる'],
          after: '例: $40,000 が73日遅れ、年5%なら利息は $40,000 × 5% × 73 ÷ 365 ＝ $400。'
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['代金減額 ＝ 契約代金 × 実際の物品の価値 ÷ 適合した物品の価値（どちらも引渡し時）', '解除後に代替品を買えば Art 75、買わなければ Art 76。どちらも損害を広げない義務（Art 77）がある', '危険が移った後の偶然の損は買主が負う。免責されても損害賠償以外の救済は残る']
        },
        {
          title: '英単語',
          words: [
            ['reduce the price', 'リデュース ザ プライス', '代金を減額する'],
            ['substitute transaction', 'サブスティテュート トランザクション', '代替取引（代わりに買う・売る）'],
            ['current price', 'カレント プライス', '時価'],
            ['mitigate the loss', 'ミティゲイト', '損害を軽減する'],
            ['additional period of time', 'アディショナル ピリオド', '付加期間'],
            ['require performance', 'リクワイア パフォーマンス', '履行を求める']
          ]
        }
      ],
      quiz: [
        { q: '契約代金 $30,000。引渡し時の価値は、実際の物品が $27,000、契約どおりの物品なら $36,000。買主が代金減額（Art 50）を選んだ。買主が払う代金はいくら？', type: 'number', answer: 22500, unit: '$', explain: '比率 $27,000 ÷ $36,000 ＝ 0.75。$30,000 × 0.75 ＝ $22,500。価値の差 $9,000 を契約代金から引く（$21,000）のは誤り。' },
        { q: 'A seller fails to deliver 500 units at a contract price of $40 per unit, and the buyer avoids the contract. Within a reasonable time the buyer buys 500 replacement units from another supplier at $46 per unit and incurs extra transport costs of $250, which were foreseeable. What damages can the buyer recover under the CISG (in $)?', type: 'number', answer: 3250, unit: '$', explain: 'Art 75：（$46 − $40）× 500 ＝ $3,000。Art 74 で予見できた追加の運送費 $250 を加えて $3,250。' },
        { q: 'A buyer avoids a contract for non-delivery but does not buy replacement goods. The contract price was $50,000 and the current price of the goods at the time of avoidance was $56,000. Under Article 76 CISG, what damages can the buyer recover, before any further damages under Article 74 (in $)?', type: 'number', answer: 6000, unit: '$', explain: '代替品を買っていないので Art 76：解除時の時価 $56,000 − 契約代金 $50,000 ＝ $6,000。' },
        { q: 'Goods are handed over to the first carrier under a contract involving carriage. They are clearly marked with the buyer\'s name. They are then damaged at sea in a storm that was not caused by either party. Which of the following is correct under the CISG?', choices: ['The buyer need not pay, because it never received the goods', 'The seller must deliver replacement goods at its own cost', 'The buyer may reduce the price by the value of the damaged goods', 'The buyer must still pay the price, because the risk had passed to it'], answer: 3, explain: 'Art 67(1) で最初の運送人に渡した時に危険が移り、Art 66 で代金を払う義務は消えない。荷印で特定もされている。' },
        { q: 'A buyer fails to pay the price on the due date. The seller fixes an additional period of 15 days for payment, and the buyer has not said that it will not pay. Under the CISG, which of the following is correct during that additional period?', choices: ['The seller may declare the contract avoided immediately', 'The seller loses its right to interest on the late payment', 'The seller may not resort to any remedy for breach of contract, but it keeps any right to claim damages for delay in performance', 'The seller must deliver any further goods due under the contract without payment'], answer: 2, explain: 'Art 63(2)。付加期間中は待つのが原則。ただし遅れの損害賠償の権利は失わない。すぐ解除できるのは、不払いが重大な違反のときか、付加期間が過ぎたとき（Art 64(1)）。利息（Art 78）も失わない。' },
        { q: '出来事Aで、Rhein は 200台の不適合を理由に、2,000台全部の契約を解除したいと言う。できる？', choices: ['ふつうはできない。1割の修理可能な不適合は重大な違反ではない', 'できる。不適合が1台でもあれば解除できる', 'できる。付加期間を定めれば、どんな違反でも解除できる', 'できない。CISG には解除の制度がない'], answer: 0, explain: '売主の違反で解除できるのは、重大な違反のとき（Art 49(1)(a)）か、引渡しがない場合に付加期間を過ぎたとき（Art 49(1)(b)）。不適合の物品が届いた場合、付加期間の道は使えない。修理・代金減額・損害賠償を使う。' }
      ]
    }
  ],
  cards: [
    { id: 'B027-1', lesson: 'B027', q: 'CISG の利息（Art 78）は何に付く？ 損害賠償との関係は？', a: '支払いが遅れた代金などに付く。損害賠償とは別に併用できる' },
    { id: 'B027-2', lesson: 'B027', q: 'CISG に利息の利率は書いてある？', a: '書いていない。契約や適用される国内法などで決まる' },
    { id: 'B027-3', lesson: 'B027', q: '利息の計算式（年利、1年365日）は？', a: '遅れた金額 × 年利 × 遅れた日数 ÷ 365' },
    { id: 'B027-4', lesson: 'B027', q: 'Art 79 の免責の条件は？', a: '支配を超える障害で、契約時に考慮できず、回避も克服もできず、それが不履行の原因' },
    { id: 'B027-5', lesson: 'B027', q: 'Art 79 で免責されると、何を免れる？', a: '損害賠償だけ。相手は解除や代金減額をまだ使える。障害が続く間だけ' },
    { id: 'B027-6', lesson: 'B027', q: 'なぜ？ 値上がりは免責の障害にふつう当たらない', a: '契約した時に引き受けた商売上のリスクで、高くても履行すれば乗り越えられるから' },
    { id: 'B028-1', lesson: 'B028', q: '解除（avoidance）で消えるもの、残るものは？', a: '未履行の義務は消える。損害賠償と紛争解決条項は残る' },
    { id: 'B028-2', lesson: 'B028', q: '買主が解除できなくなるのはどんなとき？（Art 82）', a: '受け取ったときとほぼ同じ状態で返せないとき（検査で壊れた等の例外あり）' },
    { id: 'B028-3', lesson: 'B028', q: '解除後、売主が代金を返すときに付けるものは？', a: '代金を受け取った日からの利息（Art 84(1)）' },
    { id: 'B028-4', lesson: 'B028', q: '相手の物品を手元に持つ側の義務と権利は？', a: '合理的に保存する。費用を払ってもらうまで物品を留め置ける' },
    { id: 'B028-5', lesson: 'B028', q: 'すぐ傷む物品を保存する側はどうする？（Art 88(2)）', a: '売る合理的な措置をとり、できるだけ通知する。費用を引いた残りは相手へ' },
    { id: 'B028-6', lesson: 'B028', q: 'deposit in a warehouse の意味と費用負担は？', a: '倉庫に寄託する。費用は相手持ち（不合理でなければ）。Art 87' },
    { id: 'B029-1', lesson: 'B029', q: '危険が移った後に物品が滅失したら、買主は代金を払う？', a: '払う（Art 66）。滅失が売主の行為や不作為のせいなら別' },
    { id: 'B029-2', lesson: 'B029', q: '運送を伴う売買で、危険が移るのはいつ？', a: '最初の運送人に渡した時（特定の場所で渡す約束ならその場所）' },
    { id: 'B029-3', lesson: 'B029', q: '運送中の物品を売った場合（Art 68）、危険が移るのはいつ？', a: '原則は契約成立の時' },
    { id: 'B029-4', lesson: 'B029', q: '物品が特定されていないと危険はどうなる？', a: '特定（荷印・書類・通知など）されるまで移らない' },
    { id: 'B029-5', lesson: 'B029', q: '危険と所有権の関係は？', a: '別もの。CISG は所有権の移転を扱わない' },
    { id: 'B029-6', lesson: 'B029', q: 'なぜ？ 最初の運送人に渡した時に危険を移す', a: '運送中は誰も見張れず証明が難しい。買主が保険をかけるのが自然だから' },
    { id: 'B030-1', lesson: 'B030', q: 'CISG の問題を解く順番は？', a: '適用 → 成立 → 義務 → 違反と救済・危険' },
    { id: 'B030-2', lesson: 'B030', q: '引渡し時期を変えた「承諾します」の返信は？', a: '重要な変更なので、申込みの拒絶＋反対申込み（Art 19）' },
    { id: 'B030-3', lesson: 'B030', q: '拒絶が届いた後に元の申込みを承諾したら？', a: '契約は成立しない。元の申込みは拒絶で失効している（Art 17）' },
    { id: 'B030-4', lesson: 'B030', q: '一方の当事者が非締約国（英国など）にいると CISG は？', a: 'Art 1(1)(a) は使えない。国際私法で締約国の法が指定されれば (b) で適用' },
    { id: 'B030-5', lesson: 'B030', q: '買主の代金支払いに売主の請求は必要？', a: '不要。請求や手続きがなくても期日に払う（Art 59）' },
    { id: 'B031-1', lesson: 'B031', q: '代金減額（Art 50）の計算は？', a: '契約代金 × 実際の物品の価値 ÷ 適合した物品の価値（引渡し時）' },
    { id: 'B031-2', lesson: 'B031', q: '解除後に代替品を買ったときの損害賠償は？', a: 'Art 75: 代替品の価格 − 契約代金 ＋ その他の予見できた損害' },
    { id: 'B031-3', lesson: 'B031', q: '代替品を買わなかったときの損害賠償は？', a: 'Art 76: 解除時の時価 − 契約代金 ＋ その他の損害' },
    { id: 'B031-4', lesson: 'B031', q: '損害を広げない義務（Art 77）を怠ると？', a: '減らせたはずの損害の分、賠償が減らされる' },
    { id: 'B031-5', lesson: 'B031', q: '一部の不適合で使えない買主の救済は？', a: '代替品の請求と契約全体の解除（重大な違反が必要）' },
    { id: 'B031-6', lesson: 'B031', q: '買主が代金を払わないときの売主の救済は？', a: '支払いの請求、付加期間、解除（重大な違反か期間経過）、損害賠償、利息' }
  ]
});
