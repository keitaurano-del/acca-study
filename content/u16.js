(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 16,
  part: 10,
  partTitle: '引当金と偶発事象',
  lessons: [
    // ---------------------------------------------------------------- L77
    {
      id: 'L77',
      no: 77,
      title: '引当金・偶発負債・偶発資産の定義',
      goal: '引当金・偶発負債・偶発資産の定義を IAS 37 の言葉で言え、身近な例をどれに当たるか見分けられるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D9(a)'],
      slides: [
        {
          title: '友達の車をこすってしまった',
          paras: ['駐車場で友達の車をこすった。まだ請求書は来ていないが、修理代を払うのはほぼ確実。金額は5〜8万円くらいで、いつ払うかも決まっていない。', 'この「払うのは確実だけど、金額や時期がはっきりしない借金」が、会計でいう引当金（provision）になる。']
        },
        {
          title: 'ほかに2つのパターンがある',
          list: ['隣の人に「塀を壊された」と言われた。でも弁護士は「たぶん払わなくてよい」と言う → 払う「かもしれない」義務。偶発負債（contingent liability）', '自分も別の人を訴えていて、お金をもらえるかもしれない → もらえる「かもしれない」財産。偶発資産（contingent asset）'],
          after: '3つとも「原因は過去にあり、結果は未来に決まる」という点が同じ。'
        },
        {
          title: '負債のおさらいと、引当金の定義',
          paras: ['負債（liability）は、過去の出来事から生じた今の義務で、払うと会社からお金などの資源が出ていくもの。', '引当金は、その負債のうち、時期か金額がはっきりしないもの。ルールは国際会計基準の IAS 37 で決まっている。'],
          formula: 'provision ＝ a liability of uncertain timing or amount'
        },
        {
          title: '原因は過去、支払いは未来',
          svg: `<svg viewBox="0 0 440 268" role="img" aria-label="引当金は過去の出来事が原因で、支払いは未来。期末日に負債に入れる" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">引当金は「原因は過去、支払いは未来」</text><line x1="40" y1="130" x2="396" y2="130" stroke="var(--edge)" stroke-width="2"/><path d="M396 124L408 130L396 136z" fill="var(--edge)"/><circle cx="80" cy="130" r="8" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="220" cy="130" r="8" fill="var(--ink)"/><circle cx="360" cy="130" r="8" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="3 3"/><text x="80" y="104" text-anchor="middle" font-weight="600" fill="var(--ink)">過去の出来事</text><text x="220" y="104" text-anchor="middle" font-weight="600" fill="var(--ink)">期末日</text><text x="360" y="104" text-anchor="middle" font-weight="600" fill="var(--ink)">将来の支払い</text><text x="80" y="160" text-anchor="middle" font-size="12.5" fill="var(--quiet)">past event</text><text x="220" y="160" text-anchor="middle" font-size="12.5" fill="var(--quiet)">reporting date</text><text x="360" y="160" text-anchor="middle" font-size="12.5" fill="var(--quiet)">outflow</text><text x="80" y="186" text-anchor="middle" fill="var(--ink)">売った・事故</text><text x="220" y="186" text-anchor="middle" fill="var(--ink)">まだ払っていない</text><text x="360" y="186" text-anchor="middle" fill="var(--ink)">金額・時期が未定</text><rect x="20" y="208" width="400" height="44" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="236" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">期末日に「今の義務」として負債に入れる</text></svg>`,
          caption: 'たとえば保証付きで売った商品は、売った時点（過去）で修理の義務が生まれる。期末日にはまだ払っていなくても、負債として記録する。'
        },
        {
          title: '3つの定義',
          table: {
            caption: 'IAS 37 の3つの用語',
            head: ['用語', '意味'],
            rows: [
              ['provision（引当金）', '時期か金額が不確かな負債。今の義務がある'],
              ['contingent liability（偶発負債）', '①過去の出来事から生じ、あるかどうかが未来の出来事で決まる「かもしれない」義務。②今の義務でも、払う可能性が高くない、または金額を信頼できる形で見積もれないもの'],
              ['contingent asset（偶発資産）', '過去の出来事から生じ、あるかどうかが未来の出来事で決まる「かもしれない」資産']
            ]
          },
          after: '「未来の出来事」は、会社が自分で完全には決められないもの（裁判の判決など）を指す。'
        },
        {
          title: '「今の義務」には2種類ある',
          list: ['法的義務（legal obligation）: 契約や法律で決まっている義務。例: 売買契約に書いた1年保証', '推定的義務（constructive obligation）: 法律の決まりはないが、いつものやり方や公表した方針のせいで、相手が「やってくれる」と当然期待している義務。例: 「レシートがあれば30日以内は返金します」と店に掲示している'],
          after: '義務を生んだ過去の出来事を、債務発生事象（obligating event）という。'
        },
        {
          title: 'たこ焼き屋で確かめる',
          paras: ['たこ焼き屋は家庭用のたこ焼き器セットも売っている。期末日は12月31日。'],
          list: ['1年保証つきで売ったセットの修理代 → 払うのはほぼ確実で、金額も見積もれる。引当金', 'お客さんが「やけどした」と店を訴えた。弁護士は「店が負ける可能性は低い」→ 偶発負債', '店が油の仕入先を「不良品だった」と訴えた。弁護士は「勝てそう」→ 偶発資産']
        },
        {
          title: 'なぜ？ 引当金にルールがある理由',
          paras: ['1つ目: 費用は原因が起きた期に入れる（発生主義）。保証の修理代は、売った年の売上のための費用。払う年まで待つと、売った年の利益が大きく見えすぎる。', '2つ目: 昔は、もうかった年に大きな引当金を作り、苦しい年に取り崩して利益を平らに見せる会社があった。IAS 37 は「今の義務がある」ときだけ計上させて、これを防いでいる。']
        },
        {
          title: 'よくある間違い',
          paras: ['未払費用（accruals）との違いに注意。電気代の未払いは金額も時期もほぼ決まっているので未払費用。引当金は「不確かさ」が大きいもの。', '貸倒引当金（allowance for receivables）は名前が似ているが、売掛金を減らす項目。IAS 37 の引当金（負債）ではない。'],
          note: { kind: 'warn', text: '偶発負債と偶発資産は、帳簿に記録しない（仕訳を切らない）。財務諸表の数字には入らず、必要なときに注記で説明するだけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['引当金＝時期か金額が不確かな負債（今の義務がある）', '偶発負債＝払う「かもしれない」義務、偶発資産＝もらえる「かもしれない」資産', '今の義務は、法的義務と推定的義務の2種類']
        },
        {
          title: '英単語',
          words: [
            ['provision', 'プロビジョン', '引当金。時期か金額が不確かな負債'],
            ['contingent liability', 'コンティンジェント・ライアビリティ', '偶発負債'],
            ['contingent asset', 'コンティンジェント・アセット', '偶発資産'],
            ['present obligation', 'プレゼント・オブリゲーション', '今の義務（現在の債務）'],
            ['past event', '', '過去の出来事'],
            ['obligating event', '', '債務発生事象（義務を生んだ出来事）'],
            ['legal obligation', '', '法的義務（契約・法律による）'],
            ['constructive obligation', 'コンストラクティブ・オブリゲーション', '推定的義務（いつものやり方・公表した方針による）'],
            ['IAS 37', '', '引当金・偶発負債・偶発資産の国際会計基準']
          ]
        }
      ],
      quiz: [
        { q: '引当金（provision）の説明として正しいのはどれ？', choices: ['時期か金額が不確かな負債', 'あるかどうかが未来の出来事で決まる、かもしれない義務', '売掛金の帳簿価額を減らす項目', '金額も時期も決まっている未払いの費用'], answer: 0, explain: '引当金は今の義務がある負債で、時期か金額が不確かなもの。2つ目は偶発負債、3つ目は貸倒引当金、4つ目は未払費用（accruals）の説明。' },
        { q: 'IAS 37 defines a provision as:', choices: ['A liability of uncertain timing or amount', 'A possible obligation whose existence will be confirmed only by uncertain future events', 'A possible asset that arises from past events', 'An amount transferred from retained earnings'], answer: 0, explain: '引当金は「時期か金額が不確かな負債」。2つ目は偶発負債、3つ目は偶発資産の定義。利益剰余金からの振替は引当金ではない。' },
        { q: 'Which of the following is a constructive obligation?', choices: ['A shop has a published policy of giving refunds within 30 days, although the law does not require it', 'A company plans to repaint its offices next year', 'A company must repay a bank loan under the loan agreement', 'A company expects to make operating losses next year'], answer: 0, explain: '公表した返金方針のせいで、お客さんは返金を当然期待している。これが推定的義務。2つ目は自分の判断でやめられる計画で、義務ではない。3つ目は契約による法的義務。4つ目の将来の赤字は義務ではない。' },
        { q: 'お客さんに訴えられたが、弁護士は「会社が負ける可能性は低い」と言っている。これは何に当たる？', choices: ['引当金', '偶発負債', '偶発資産', '未払費用'], answer: 1, explain: '払うかどうかが裁判の結果（未来の出来事）で決まり、払う可能性も高くない。だから偶発負債。払うのがほぼ確実なら引当金になる。' },
        { q: '前の部で学んだ貸倒引当金（allowance for receivables）と、この部の引当金（provision）の違いは？', choices: ['貸倒引当金は売掛金を減らす項目、provision は負債', 'どちらも負債の一種で、同じもの', '貸倒引当金は負債、provision は資産を減らす項目', 'どちらも注記に書くだけで、帳簿には記録しない'], answer: 0, explain: '貸倒引当金は資産（売掛金）を減らす項目。IAS 37 の provision は、いつか払う負債。名前が似ているので混同しやすい。どちらも帳簿に記録する。' }
      ]
    },
    // ---------------------------------------------------------------- L78
    {
      id: 'L78',
      no: 78,
      title: '3つに分類して処理を決める',
      goal: '可能性の高さと3つの条件から、引当金・偶発負債・偶発資産・何もしない、のどれかに分類して処理を決められるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['D9(b)', 'D9(c)'],
      slides: [
        {
          title: '降水確率で考える',
          paras: ['出かける前に天気予報を見る。降水確率90%なら傘を持っていく。30%なら折りたたみ傘を「念のため」かばんに入れる。5%なら何もしない。', '負債になりそうなものも同じで、払う可能性の高さによって扱いを変える。']
        },
        {
          title: '引当金を計上する3つの条件',
          numbered: ['過去の出来事から生じた今の義務がある（法的義務か推定的義務）', '払う可能性が高い（probable）。「50%を超える」という意味', '金額を信頼できる形で見積もれる（reliable estimate）'],
          after: '3つが全部そろったら、引当金として負債に計上（recognise）する。1つでも欠けたら計上しない。'
        },
        {
          title: '払う側の判断の流れ',
          svg: `<svg viewBox="0 0 440 372" role="img" aria-label="払う側は3つの質問で引当金かどうかを決める" font-size="14"><text x="20" y="32" font-size="17" font-weight="600" fill="var(--ink)">払う側: 3つの質問で決める</text><text x="130" y="58" text-anchor="middle" fill="var(--quiet)">「はい」なら下へ</text><text x="350" y="58" text-anchor="middle" fill="var(--quiet)">「いいえ」なら</text><rect x="20" y="70" width="220" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="94" fill="var(--ink)">① 過去の出来事による</text><text x="50" y="116" fill="var(--ink)">今の義務がある？</text><line x1="240" y1="98" x2="272" y2="98" stroke="var(--edge)" stroke-width="1.5"/><path d="M272 93L280 98L272 103z" fill="var(--edge)"/><rect x="280" y="70" width="140" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="94" text-anchor="middle" fill="var(--ink)">何もしない</text><text x="350" y="116" text-anchor="middle" fill="var(--quiet)">※例外は下に</text><line x1="130" y1="126" x2="130" y2="141" stroke="var(--edge)" stroke-width="1.5"/><path d="M125 141L130 148L135 141z" fill="var(--edge)"/><rect x="20" y="148" width="220" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="172" fill="var(--ink)">② 払う可能性が高い？</text><text x="50" y="194" fill="var(--ink)">（50%超＝probable）</text><line x1="240" y1="176" x2="272" y2="176" stroke="var(--edge)" stroke-width="1.5"/><path d="M272 171L280 176L272 181z" fill="var(--edge)"/><rect x="280" y="148" width="140" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="172" text-anchor="middle" fill="var(--ink)">注記（偶発負債）</text><text x="350" y="194" text-anchor="middle" fill="var(--quiet)">remote なら不要</text><line x1="130" y1="204" x2="130" y2="219" stroke="var(--edge)" stroke-width="1.5"/><path d="M125 219L130 226L135 219z" fill="var(--edge)"/><rect x="20" y="226" width="220" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="32" y="250" fill="var(--ink)">③ 金額を信頼できる形で</text><text x="50" y="272" fill="var(--ink)">見積もれる？</text><line x1="240" y1="254" x2="272" y2="254" stroke="var(--edge)" stroke-width="1.5"/><path d="M272 249L280 254L272 259z" fill="var(--edge)"/><rect x="280" y="226" width="140" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="350" y="259" text-anchor="middle" fill="var(--ink)">注記（偶発負債）</text><line x1="130" y1="282" x2="130" y2="297" stroke="var(--edge)" stroke-width="1.5"/><path d="M125 297L130 304L135 297z" fill="var(--edge)"/><rect x="20" y="304" width="400" height="48" rx="10" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="334" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">3つとも「はい」→ 引当金（負債）を計上</text></svg>`,
          caption: '①が「いいえ」なら基本は何もしない。例外は、義務があるかどうか自体が未来の出来事（判決など）で決まる「かもしれない」義務。これは偶発負債として注記する。②か③で止まったときも偶発負債として注記。どの場合も、払う可能性がほぼ無い（remote）なら注記も要らない。金額が見積もれないケースはとてもまれ。'
        },
        {
          title: '可能性の4段階と処理',
          paras: ['払う側ともらう側で、線を引く場所がちがう。'],
          table: {
            caption: 'IAS 37 の処理のまとめ',
            head: ['可能性', '払う側', 'もらう側'],
            rows: [
              ['ほぼ確実 virtually certain', '引当金を計上', '資産を計上'],
              ['高い probable（50%超）', '引当金を計上', '注記（偶発資産）'],
              ['ある possible', '注記（偶発負債）', '何もしない'],
              ['ほぼ無い remote', '何もしない', '何もしない']
            ]
          },
          after: '公式の数字があるのは probable（50%超）だけ。目安として、ほぼ確実は95%以上、ほぼ無いは5%未満くらいと考えるとよい。'
        },
        {
          title: 'なぜ？ もらう側だけ厳しい理由',
          paras: ['もらえるかどうか分からないお金を資産に入れると、利益や資産が大きく見えすぎる。後で「もらえなかった」となると、決算を信じた銀行や投資家が損をする。', 'だから、悪い知らせ（払う）は早めに、良い知らせ（もらう）はほぼ確実になってから記録する。これが慎重性（prudence）の考え方。']
        },
        {
          title: '例題',
          example: {
            problem: 'たこ焼き屋（期末日12月31日）の4つの項目を分類する。(1) 1年保証つきで売ったたこ焼き器の修理代。毎年修理の依頼が来ている。(2) やけどの訴訟。弁護士は「店が負ける可能性は30%」。(3) 店が仕入先を訴えた。弁護士は「勝つ可能性は80%」。(4) 来年、店を $20,000 で改装する予定。',
            steps: ['(1) 売った時点で保証の義務がある。払う可能性は高く、過去の実績で見積もれる → 引当金を計上', '(2) 30%は「ある（possible）」で、高くはない → 偶発負債。注記に書く', '(3) 80%は「高い（probable）」が「ほぼ確実」ではない → 偶発資産。注記に書く', '(4) 改装は来年の自分の判断で、やめることもできる。今の義務がない → 何もしない'],
            answer: '(1) 引当金 (2) 偶発負債として注記 (3) 偶発資産として注記 (4) 何もしない'
          }
        },
        {
          title: '引当金にならないもの',
          list: ['将来の営業損失（future operating losses）: 来年赤字になりそうでも、過去の出来事による義務ではない', '予定している修繕・改装・設備の入れ替え: 自分の判断でやめられるので、今の義務ではない', '法律で「来年6月までに換気設備を付ける」と決まったが、まだ付けていない: 店を閉めるなど将来の行動で避けられるので、取付費用は引当金にならない'],
          after: '合言葉は「将来の自分の行動で避けられるなら、今の義務ではない」。'
        },
        {
          title: '判断は毎期やり直す',
          paras: ['期末日ごとに、可能性と金額を見直す。', '去年は「負ける可能性がある（possible）」で注記だけだった訴訟が、今年「負ける可能性が高い（probable）」になったら、今年に引当金を計上する。', '偶発資産も、もらえるのが「ほぼ確実」になったら、その期に資産として計上する。']
        },
        {
          title: 'よくある間違い',
          paras: ['払う側の possible を「何もしない」にしてしまうのも間違い。偶発負債は注記が必要で、注記も要らないのは remote のときだけ。'],
          note: { kind: 'warn', text: 'もらえる可能性が高い（probable）偶発資産を、資産に計上してしまう。probable なら注記だけ。資産に入れるのは virtually certain（ほぼ確実）になってから。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['引当金の3条件: 今の義務・払う可能性が高い・金額を見積もれる', '払う側: probable 以上→計上、possible→注記、remote→何もしない', 'もらう側: virtually certain→計上、probable→注記、それ以下→何もしない']
        },
        {
          title: '英単語',
          words: [
            ['recognise', 'レコグナイズ', '計上する（財務諸表の数字に入れる）'],
            ['disclose / disclosure', 'ディスクロウズ／ディスクロージャー', '注記で開示する／開示'],
            ['probable', 'プロバブル', '可能性が高い（50%超、more likely than not）'],
            ['possible', 'ポッシブル', '可能性はあるが高くはない'],
            ['remote', 'リモート', '可能性がほぼ無い'],
            ['virtually certain', 'ヴァーチャリー・サートゥン', 'ほぼ確実'],
            ['reliable estimate', '', '信頼できる見積り'],
            ['future operating losses', '', '将来の営業損失（引当金にしない）']
          ]
        }
      ],
      quiz: [
        { q: 'A company is being sued by a customer. At the reporting date, its lawyers say it is probable that the company will lose and that damages will be about $40,000. How should this be treated?', choices: ['Recognise a provision of $40,000', 'Disclose a contingent liability in a note only', 'Disclose a contingent asset in a note', 'No recognition or disclosure is needed'], answer: 0, explain: '今の義務（原因は過去）、払う可能性が高い、金額を見積もれる、の3条件がそろうので引当金。注記だけにするのは、可能性が possible のとき。' },
        { q: 'A company has been sued. Its lawyers say it is possible, but not probable, that the company will have to pay damages. What is the correct treatment?', choices: ['Recognise a provision', 'Disclose a contingent liability in a note', 'Recognise a contingent asset', 'No recognition or disclosure'], answer: 1, explain: '払う側の possible は偶発負債として注記する。計上はしない。何もしないでよいのは remote のときだけ。' },
        { q: 'A company is suing a supplier. Its lawyers say the company will probably win $25,000. What is the correct treatment?', choices: ['Recognise an asset of $25,000', 'Disclose a contingent asset in a note', 'Disclose a contingent liability in a note', 'No disclosure is required'], answer: 1, explain: 'もらう側は probable なら注記だけ。資産に計上するのは virtually certain のとき。払う側と同じく「probable で計上」と思い込むのが典型的な間違い。' },
        { q: '期末日12月31日。(a) 今年売った商品の保証修理。払う可能性が高く、見積りは $8,000。(b) お客さんからの訴訟。負ける可能性は possible で、負ければ $20,000。(c) 来年の春に店を $15,000 で改装する予定（業者とは未契約）。(d) 店が仕入先を訴えていて、勝つ可能性は probable、もらえる額は $5,000。財政状態計算書に計上する引当金の合計はいくら？', type: 'number', answer: 8000, unit: '$', explain: '計上するのは (a) の $8,000 だけ。(b) は possible なので偶発負債として注記。(c) は自分の判断でやめられるので今の義務がなく、何もしない。(d) はもらう側の probable なので偶発資産として注記。$28,000 と答えるのは (b) を、$43,000 は (c) も足してしまったときの間違い。' },
        { q: '引当金を計上する条件にふくまれないものは？', choices: ['過去の出来事から生じた今の義務がある', '払う可能性が高い（probable）', '金額を信頼できる形で見積もれる', '支払う相手と支払日が決まっている'], answer: 3, explain: '相手や日付が決まっていなくてもよい。時期や金額が不確かだからこそ引当金になる。決まっているなら、未払費用などのふつうの負債。' },
        { q: 'Which of the following should be recognised as a provision at 31 December?', choices: ['Expected operating losses of $50,000 for next year', 'A major repair of machinery planned for next year costing $10,000', 'Repairs under a one-year warranty on goods sold this year, which past experience shows will be claimed', 'A legal claim which the lawyers consider remote'], answer: 2, explain: '保証は売った時点で義務が生まれ、実績から払う可能性が高いと分かる。将来の営業損失と予定の修理は今の義務ではない。remote の訴訟は何もしない。' }
      ]
    },
    // ---------------------------------------------------------------- L79
    {
      id: 'L79',
      no: 79,
      title: '引当金の計算と増減の仕訳',
      goal: '最も可能性の高い金額と期待値で引当金を計算し、計上・増減・使用・戻しの仕訳を書けるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['D9(d)', 'D9(e)'],
      slides: [
        {
          title: '修理代はいくらとメモする？',
          paras: ['友達の車の修理代。見積もりは「6万円の可能性が一番高い。8万円になることも少しある」。メモに書くなら6万円。1件だけのことは、一番起きそうな金額で考える。', 'でも、レンタカー屋のように何百台も貸していると、「全体で平均いくらかかるか」で考えた方が正確になる。']
        },
        {
          title: '最善の見積り（best estimate）',
          paras: ['引当金の金額は、期末日に義務を片付けるとしたら払うのが妥当な金額にする。これを最善の見積り（best estimate）という。計算のしかたは2つ。'],
          list: ['1件だけの義務（訴訟など）→ 最も可能性の高い金額（most likely outcome）', 'たくさんの同じような義務（保証など）→ 期待値（expected value）'],
          formula: 'expected value ＝（金額 × 確率）を全部足したもの'
        },
        {
          title: '例題1: 保証の期待値',
          example: {
            problem: 'たこ焼き屋は今年、1年保証つきのたこ焼き器セットを2,000台売った。過去の経験では、80%は故障なし、15%は小さな修理（1台 $20）、5%は大きな修理（1台 $100）。期末の保証引当金は？',
            steps: ['たくさんの同じような義務なので、期待値を使う', '小さな修理: 2,000台 × 15% ＝ 300台。300 × $20 ＝ $6,000', '大きな修理: 2,000台 × 5% ＝ 100台。100 × $100 ＝ $10,000', '故障なし: $0', '合計: $6,000 ＋ $10,000 ＝ $16,000'],
            answer: '保証引当金（warranty provision）は $16,000'
          }
        },
        {
          title: '1件だけなら「一番ありそうな金額」',
          paras: ['店がお客さんに訴えられた。弁護士の見立ては、60%の確率で $50,000、40%の確率で $10,000 を払う。', '1件だけの義務なので、最も可能性の高い $50,000 を引当金にする。期待値の $34,000（$30,000＋$4,000）は実際には起こらない金額なので、ここでは使わない。']
        },
        {
          title: '仕訳: 作る・増やす・減らす',
          paras: ['作るとき・増やすときは、費用を借方、引当金（負債）を貸方。費用の勘定は内容で選ぶ（保証費用、訴訟費用など）。'],
          journal: [
            { side: 'Dr', account: 'Warranty expense（保証費用・SPL）', amount: '16,000' },
            { side: 'Cr', account: 'Warranty provision（保証引当金・SFP）', amount: '16,000' }
          ],
          after: '翌年は増えた分・減った分だけを仕訳する。期中に使った分がなければ、必要額が $19,000 なら増加 $3,000（Dr 費用 / Cr 引当金）。$12,000 なら減少 $4,000（Dr 引当金 / Cr 費用）で、費用が減る分だけ利益が増える。'
        },
        {
          title: 'お金を払ったら、引当金を使う',
          paras: ['期中に実際の修理代 $9,000 を払った。これは前に費用にした分の支払いなので、引当金を減らす。損益計算書には入れない。'],
          journal: [
            { side: 'Dr', account: 'Warranty provision（保証引当金）', amount: '9,000' },
            { side: 'Cr', account: 'Cash（現金）', amount: '9,000' }
          ]
        },
        {
          title: '引当金の勘定で1年を見る',
          paras: ['期首 $16,000、期中に使った $9,000、期末に必要な額 $19,000。貸方の差額が今年の費用になる。'],
          tAccount: { name: 'Warranty provision', debit: [['Cash (used)', '9,000'], ['Balance c/d', '19,000']], credit: [['Balance b/d', '16,000']], balance: { side: 'credit', label: 'SPL charge（差額）', amount: '12,000' } },
          formula: 'SPL charge ＝ 期末 − 期首 ＋ 使った分（$19,000 − $16,000 ＋ $9,000 ＝ $12,000）'
        },
        {
          title: '例題2: 裁判が終わったとき',
          example: {
            problem: '去年の期末に、訴訟の引当金 $30,000 を計上した。今年、裁判が終わり $25,000 を現金で払った。今年の仕訳は？ 払った額が $34,000 だったら？',
            steps: ['引当金 $30,000 を全部なくす: Dr Provision 30,000', '払った現金を貸方に: Cr Cash 25,000', '余った $5,000 は使わなかった分。費用を戻す: Cr 訴訟費用 5,000（利益が増える）', '$34,000 払った場合: Dr Provision 30,000、Dr 訴訟費用 4,000、Cr Cash 34,000。足りない $4,000 は今年の費用'],
            answer: '$25,000 なら Dr 引当金 30,000 / Cr 現金 25,000 / Cr 費用 5,000。$34,000 なら Dr 引当金 30,000 / Dr 費用 4,000 / Cr 現金 34,000'
          }
        },
        {
          title: 'なぜ？ 増減だけを仕訳する理由',
          paras: ['引当金の勘定には、去年までに費用にした分がもう入っている。毎年、必要な額を丸ごと費用にすると、同じ費用を2回数えてしまう。', '払ったときに損益計算書を通さないのも同じ理由。費用は引当金を作った年にもう入れてある。前の部の貸倒引当金と同じ考え方。'],
          note: { kind: 'warn', text: '期末に必要な額（$19,000）をそのまま今年の費用にするのは間違い。費用になるのは、使った分も考えたうえでの増減だけ。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['金額: 1件なら最も可能性の高い金額、たくさんなら期待値', '作る・増やす: Dr 費用 / Cr 引当金。減らす: その逆', '払ったら Dr 引当金 / Cr 現金。損益計算書は通らない']
        },
        {
          title: '英単語',
          words: [
            ['best estimate', 'ベスト・エスティメイト', '最善の見積り'],
            ['expected value', 'エクスペクテッド・バリュー', '期待値（金額×確率の合計）'],
            ['most likely outcome', '', '最も可能性の高い結果'],
            ['warranty', 'ウォランティ', '保証'],
            ['charge to profit or loss', '', '損益計算書に費用として入れる'],
            ['amounts used / utilised', '', '使った額（支払いにあてた分）'],
            ['unused amounts reversed / released', '', '使わずに戻した額（費用を減らす）']
          ]
        }
      ],
      quiz: [
        { q: 'たこ焼き屋は1年保証つきのセットを5,000台売った。経験では、90%は故障なし、8%は小さな修理（1台 $30）、2%は大きな修理（1台 $150）。保証引当金はいくら？', type: 'number', answer: 27000, unit: '$', explain: '小さな修理: 5,000 × 8% ＝ 400台、400 × $30 ＝ $12,000。大きな修理: 5,000 × 2% ＝ 100台、100 × $150 ＝ $15,000。合計 $27,000。' },
        { q: 'A company is being sued. Its lawyers estimate a 70% chance of paying $80,000 and a 30% chance of paying $20,000. What provision should be recognised?', choices: ['$80,000', '$62,000', '$20,000', '$0'], answer: 0, explain: '1件だけの義務なので、最も可能性の高い $80,000。$62,000（$56,000＋$6,000）は期待値で、たくさんの同じような義務のときに使う方法。' },
        { q: 'At 1 January a warranty provision was $45,000. At 31 December the provision required is $38,000. No claims were charged to the provision during the year. What is the journal entry?', choices: ['Dr Provision $7,000, Cr Profit or loss $7,000', 'Dr Profit or loss $7,000, Cr Provision $7,000', 'Dr Profit or loss $38,000, Cr Provision $38,000', 'Dr Provision $38,000, Cr Profit or loss $38,000'], answer: 0, explain: '必要額が $45,000 から $38,000 に減ったので、引当金を $7,000 減らす（借方）。相手は費用の戻し（損益計算書の貸方）で、利益が増える。2つ目は増えたときの仕訳で、借方と貸方が逆。3つ目と4つ目は増減でなく残高全部を仕訳している。' },
        { q: 'A warranty provision was $20,000 at 1 January. During the year, claims of $6,000 were paid and charged to the provision. The provision required at 31 December is $24,000. What is the charge to profit or loss for the year?', type: 'number', answer: 10000, unit: '$', explain: '$24,000 − $20,000 ＋ $6,000 ＝ $10,000。使った $6,000 で引当金は $14,000 まで減っているので、$24,000 にするには $10,000 足す。$4,000 と答えるのは、使った分を忘れたときの間違い。' },
        { q: '去年、訴訟の引当金 $30,000 を計上した。今年、$34,000 を現金で払って裁判が終わった。今年の仕訳は？', choices: ['Dr 引当金 30,000 / Dr 訴訟費用 4,000 / Cr 現金 34,000', 'Dr 訴訟費用 34,000 / Cr 現金 34,000', 'Dr 引当金 34,000 / Cr 現金 34,000', 'Dr 引当金 30,000 / Cr 現金 30,000 / Cr 訴訟費用 4,000'], answer: 0, explain: '引当金 $30,000 は全部使い切ってなくす。足りない $4,000 は今年の費用。2つ目は去年の $30,000 をもう一度費用にしてしまう。3つ目は引当金が $4,000 マイナスになる。4つ目は払った額が合わない。' }
      ]
    },
    // ---------------------------------------------------------------- L80
    {
      id: 'L80',
      no: 80,
      title: '引当金の報告と注記',
      goal: '引当金を財務諸表のどこに載せるかを言え、引当金の増減の注記を作り、偶発負債・偶発資産の注記に書くことを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['D9(f)', 'G3(b)ii'],
      slides: [
        {
          title: '家計簿のメモ欄',
          paras: ['家計簿の「借金」欄に、友達の車の修理代6万円を書いた。でも数字だけだと、後で見たとき「これ何だっけ？」となる。', 'そこで横のメモ欄に「8月の事故。年内に払う予定。8万円になるかも」と書いておく。会社の成績表では、このメモ欄が注記（notes）にあたる。']
        },
        {
          title: '財政状態計算書: 負債に載せる',
          paras: ['引当金は負債の部に載せる。12か月以内に払う見込みなら流動負債（current liabilities）、それより先なら非流動負債（non-current liabilities）。'],
          table: {
            caption: '財政状態計算書（負債の部の抜粋）',
            head: ['Liabilities', '$'],
            rows: [
              ['Non-current liabilities', ''],
              ['Loan', '50,000'],
              ['Provisions（3年後に決着しそうな訴訟）', '12,000'],
              ['Current liabilities', ''],
              ['Trade payables', '18,000'],
              ['Provisions（1年保証）', '7,000']
            ]
          }
        },
        {
          title: '損益計算書と偶発事象',
          list: ['引当金の増減は、内容に合う費用の行に入れる。どの行かは、試験では問題文が指示する', '使わずに戻した分は、費用を減らす', '偶発負債・偶発資産は、損益計算書にも財政状態計算書にも数字が載らない。注記だけ']
        },
        {
          title: '注記とは',
          paras: ['注記（notes to the financial statements）は、財務諸表の数字の内訳や、数字にできない情報を説明する部分。', '引当金なら、数字だけでは分からない「何の義務か」「いつ払いそうか」「どれくらい不確かか」を、利用者に伝える。']
        },
        {
          title: '引当金の注記に書くこと',
          paras: ['引当金の種類（保証、訴訟など）ごとに、次を書く。'],
          list: ['期首と期末の帳簿価額（carrying amount）', '今年新しく計上した額（今ある引当金を増やした額もふくむ）', '使った額（実際の支払いにあてた分）', '使わずに戻した額', '内容の説明: どんな義務か、いつ払いそうか、金額や時期の不確かさ。保険などで戻ってくる見込みの額があれば、その額も']
        },
        {
          title: '例題',
          example: {
            problem: '保証引当金: 1月1日の残高 $10,000。今年の売上分として新しく $6,000 を計上した。期中の修理代 $3,000 を引当金から払った。去年の保証のうち、期限切れで不要になった $2,000 を戻した。12月31日の残高と、今年の損益計算書の費用は？',
            steps: ['期首 $10,000 ＋ 新しく計上 $6,000 ＝ $16,000', '使った額を引く: $16,000 − $3,000 ＝ $13,000', '戻した額を引く: $13,000 − $2,000 ＝ $11,000（期末残高）', '費用は「新しく計上 − 戻した額」: $6,000 − $2,000 ＝ $4,000', '確かめ: 期末 − 期首 ＋ 使った分 ＝ $11,000 − $10,000 ＋ $3,000 ＝ $4,000'],
            answer: '期末残高 $11,000、今年の費用 $4,000'
          }
        },
        {
          title: '注記の形にする',
          paras: ['例題を注記の形にするとこうなる。'],
          table: {
            caption: 'Note: Provisions',
            head: ['Warranty provision', '$'],
            rows: [
              ['At 1 January', '10,000'],
              ['Additional provisions', '6,000'],
              ['Amounts used', '(3,000)'],
              ['Unused amounts reversed', '(2,000)']
            ],
            total: ['At 31 December', '11,000']
          },
          after: 'この下に説明の文章を付ける。例:「1年保証の修理費用。大部分は来年中に払う見込み。過去の修理率をもとに見積もった」'
        },
        {
          title: '偶発負債・偶発資産の注記',
          list: ['偶発負債: 内容の簡単な説明。できれば金額への影響の見積り、金額や時期の不確かさ、保険などで戻ってくる可能性も書く。remote なら何も書かない', '偶発資産: probable のときだけ書く。内容の簡単な説明と、できれば金額への影響の見積り。もらえると誤解させない書き方にする']
        },
        {
          title: 'なぜ？ 注記まで書く理由',
          paras: ['偶発負債は帳簿には載らないが、裁判に負ければ大きなお金が出ていく。注記がなければ、銀行や投資家はその危険を知らないまま判断してしまう。', '引当金の数字も見積りにすぎない。何の義務で、どれくらい不確かかを書くことで、利用者は数字をどこまで信じてよいか判断できる。'],
          note: { kind: 'warn', text: '注記の「使った額 $3,000」を今年の費用だと思わない。費用は「新しく計上した額 − 戻した額」。使った額は現金の支払いで、その費用は前に計上済み。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['引当金は負債の部へ。12か月以内なら流動、それより先なら非流動', '注記の流れ: 期首＋新しく計上−使った−戻した＝期末', '偶発負債は remote 以外なら注記、偶発資産は probable のときだけ注記']
        },
        {
          title: '英単語',
          words: [
            ['notes to the financial statements', '', '財務諸表の注記'],
            ['disclosure note', '', '開示注記'],
            ['carrying amount', 'キャリング・アマウント', '帳簿価額'],
            ['additional provisions', '', '新しく計上した引当金'],
            ['amounts used', '', '使った額'],
            ['unused amounts reversed', '', '使わずに戻した額'],
            ['current / non-current liabilities', '', '流動負債 / 非流動負債']
          ]
        }
      ],
      quiz: [
        { q: '訴訟引当金: 期首 $15,000、新しく計上 $8,000、使った額 $5,000、戻した額 $1,000。期末残高は？', type: 'number', answer: 17000, unit: '$', explain: '$15,000 ＋ $8,000 − $5,000 − $1,000 ＝ $17,000。使った額も戻した額も、引当金を減らす。' },
        { q: 'A provision note shows: at 1 January $25,000; additional provisions $9,000; amounts used $7,000; unused amounts reversed $4,000. What is the net charge to profit or loss for the year?', type: 'number', answer: 5000, unit: '$', explain: '費用は新しく計上した $9,000 − 戻した $4,000 ＝ $5,000。期末残高は $25,000 ＋ $9,000 − $7,000 − $4,000 ＝ $23,000 で、$23,000 − $25,000 ＋ $7,000 ＝ $5,000 と一致する。使った $7,000 は費用ではない。' },
        { q: 'Which of the following is NOT required in the note for each class of provision?', choices: ['The carrying amount at the beginning and end of the period', 'Amounts used during the period', 'Unused amounts reversed during the period', 'The name of each customer who has made a claim'], answer: 3, explain: '注記に書くのは期首・期末の帳簿価額、新しく計上した額、使った額、戻した額と、内容・時期・不確かさの説明。お客さんの名前は要らない。' },
        { q: '弁護士が「負ける可能性はある（possible）が、高くはない」と言う訴訟。財務諸表ではどう扱う？', choices: ['財政状態計算書に負債として載せる', '注記に偶発負債として書く', '損益計算書に費用として入れる', 'どこにも書かない'], answer: 1, explain: '偶発負債は数字に入れず、注記だけ。どこにも書かないのは remote のとき。負債や費用に入れるのは probable で引当金になるとき。' },
        { q: 'A provision is expected to be settled in three years. Where should it be presented in the statement of financial position?', choices: ['Non-current liabilities', 'Current liabilities', 'Non-current assets', 'Equity'], answer: 0, explain: '12か月より先に払う見込みの負債なので非流動負債。引当金は負債なので、資産や資本には載らない。' }
      ]
    }
  ],
  cards: [
    { id: 'L77-1', lesson: 'L77', q: '引当金（provision）の定義は？', a: '時期か金額が不確かな負債（a liability of uncertain timing or amount）' },
    { id: 'L77-2', lesson: 'L77', q: '偶発負債の2つの意味は？', a: '①過去の出来事から生じ、未来の出来事で決まる「かもしれない」義務 ②今の義務だが、払う可能性が高くない・金額を見積もれないもの' },
    { id: 'L77-3', lesson: 'L77', q: '偶発資産とは？', a: '過去の出来事から生じ、あるかどうかが未来の出来事で決まる「かもしれない」資産' },
    { id: 'L77-4', lesson: 'L77', q: '法的義務と推定的義務の違いは？', a: '法的＝契約・法律による。推定的＝いつものやり方や公表した方針で、相手が当然期待しているもの' },
    { id: 'L77-5', lesson: 'L77', q: 'なぜ IAS 37 は「今の義務」があるときだけ引当金を認める？', a: 'もうかった年に作り、苦しい年に取り崩して利益を平らに見せるのを防ぐため' },
    { id: 'L77-6', lesson: 'L77', q: '偶発負債・偶発資産は仕訳する？', a: 'しない。必要なときに注記で説明するだけ' },
    { id: 'L78-1', lesson: 'L78', q: '引当金を計上する3つの条件は？', a: '今の義務がある・払う可能性が高い（probable）・金額を信頼できる形で見積もれる' },
    { id: 'L78-2', lesson: 'L78', q: '払う側で可能性が possible のときは？', a: '偶発負債として注記する。計上はしない' },
    { id: 'L78-3', lesson: 'L78', q: 'もらう側で可能性が probable のときは？', a: '偶発資産として注記する。資産に計上するのは virtually certain のとき' },
    { id: 'L78-4', lesson: 'L78', q: 'なぜもらう側だけ線が厳しい？', a: '不確かな利益で資産や利益を大きく見せないため（慎重性）' },
    { id: 'L78-5', lesson: 'L78', q: '来年の改装予定や将来の営業損失は引当金になる？', a: 'ならない。将来の自分の行動で避けられるので、今の義務ではない' },
    { id: 'L78-6', lesson: 'L78', q: 'remote のときは？', a: '払う側ももらう側も何もしない（注記も要らない）' },
    { id: 'L79-1', lesson: 'L79', q: '1件だけの義務（訴訟など）の引当金の金額は？', a: '最も可能性の高い金額（most likely outcome）' },
    { id: 'L79-2', lesson: 'L79', q: 'たくさんの同じような義務（保証など）の金額は？', a: '期待値。金額×確率を全部足す' },
    { id: 'L79-3', lesson: 'L79', q: '引当金を作る・増やすときの仕訳は？', a: 'Dr 費用（SPL） / Cr 引当金（SFP）。減らすときは逆' },
    { id: 'L79-4', lesson: 'L79', q: '引当金を使って払ったときの仕訳は？', a: 'Dr 引当金 / Cr 現金。損益計算書は通らない' },
    { id: 'L79-5', lesson: 'L79', q: '今年の費用（SPL charge）の求め方は？', a: '期末 − 期首 ＋ 使った分' },
    { id: 'L79-6', lesson: 'L79', q: 'なぜ増減だけを費用にする？', a: '去年までの分はもう費用にしてあり、全額だと2回数えてしまうから' },
    { id: 'L80-1', lesson: 'L80', q: '引当金は財政状態計算書のどこに載せる？', a: '負債。12か月以内に払うなら流動負債、それより先なら非流動負債' },
    { id: 'L80-2', lesson: 'L80', q: '引当金の注記の数字の流れは？', a: '期首 ＋ 新しく計上 − 使った額 − 戻した額 ＝ 期末' },
    { id: 'L80-3', lesson: 'L80', q: '注記から今年の費用を出すには？', a: '新しく計上した額 − 戻した額' },
    { id: 'L80-4', lesson: 'L80', q: '偶発負債の注記に書くことは？', a: '内容の簡単な説明。できれば金額への影響、不確かさ、戻ってくる可能性' },
    { id: 'L80-5', lesson: 'L80', q: '偶発資産を注記するのはいつ？', a: 'probable のときだけ。virtually certain なら資産に計上する' },
    { id: 'L80-6', lesson: 'L80', q: 'なぜ注記が必要？', a: '数字だけでは分からない内容や、帳簿に載らない偶発負債の危険を利用者に伝えるため' }
  ]
});
