(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 131,
  part: 8,
  partTitle: '標準原価計算と差異分析',
  lessons: [
    {
      id: 'M127',
      no: 127,
      title: '差異を読み解く: 有利と不利の意味',
      goal: '差異が有利か不利かを判断し、それぞれの差異が何を示し、誰の責任かを読み取れるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D3(a)'],
      slides: [
        {
          title: '食費が予算より少なかった月',
          paras: ['今月の食費の予算は3万円。実際は2万7千円だった。3千円浮いたので、家計にとっては「有利」だ。', 'でも、理由が「忙しくて昼ごはんを抜いた」なら、喜んでよいとは言えない。数字の向きと、良い・悪いは別の話だ。差異を読むときは、この2つを分けて考える。']
        },
        {
          title: '有利（F）と不利（A）',
          paras: ['差異（variance）は、実際の結果と標準（standard）・予算との差。向きは「利益にどう響くか」だけで決める。'],
          list: ['有利差異（favourable variance, F）: 実際の利益が、標準どおりだった場合より大きくなる向き', '不利差異（adverse variance, A）: 実際の利益が、標準どおりだった場合より小さくなる向き'],
          note: { kind: 'tip', text: '費用は「少ないほど有利」、売上は「多いほど有利」。迷ったら「利益は増えた？減った？」と問う。' }
        },
        {
          title: '向きの決まり方',
          svg: `<svg viewBox="0 0 440 320" role="img" aria-label="実際を標準と比べ、利益が増える向きなら有利、減る向きなら不利。有利の例は費用が標準より少ない、売上価格が標準より高い、販売数量が予算より多い。不利はその逆。どちらも良い悪いとは限らない" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">有利・不利は利益への向きで決まる</text><rect x="120" y="46" width="200" height="40" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="220" y="71" text-anchor="middle" font-size="15" fill="var(--ink)">実際を標準と比べる</text><line x1="180" y1="88" x2="115" y2="114" stroke="var(--edge)" stroke-width="1.5"/><line x1="260" y1="88" x2="325" y2="114" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="116" width="190" height="78" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="115" y="142" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">有利（F）</text><text x="115" y="161" text-anchor="middle" font-size="12.5" fill="var(--ink)">favourable</text><text x="115" y="183" text-anchor="middle" fill="var(--ink)">利益が増える向き</text><rect x="230" y="116" width="190" height="78" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="142" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">不利（A）</text><text x="325" y="161" text-anchor="middle" font-size="12.5" fill="var(--quiet)">adverse</text><text x="325" y="183" text-anchor="middle" fill="var(--ink)">利益が減る向き</text><text x="115" y="222" text-anchor="middle" fill="var(--ink)">費用が標準より少ない</text><text x="115" y="246" text-anchor="middle" fill="var(--ink)">売上価格が標準より高い</text><text x="115" y="270" text-anchor="middle" fill="var(--ink)">販売数量が予算より多い</text><text x="325" y="222" text-anchor="middle" fill="var(--ink)">費用が標準より多い</text><text x="325" y="246" text-anchor="middle" fill="var(--ink)">売上価格が標準より低い</text><text x="325" y="270" text-anchor="middle" fill="var(--ink)">販売数量が予算より少ない</text><text x="220" y="306" text-anchor="middle" fill="var(--quiet)">どちらも「良い・悪い」とは限らない</text></svg>`,
          caption: 'F は favourable、A は adverse の頭文字。試験の答えでもこの記号を使う。'
        },
        {
          title: 'それぞれの差異が言っていること（売上・材料・労務）',
          table: { caption: '何がずれたか、主に誰の責任か', head: ['差異', '何がずれたか', '主な責任'], rows: [['売上価格差異（sales price）', '1個あたりの売値', '営業部門'], ['売上数量差異（sales volume）', '売れた数（全部原価なら標準利益、直接原価なら標準貢献利益で評価）', '営業部門'], ['材料価格差異（material price）', '材料1kgあたりの値段', '購買部門'], ['材料数量差異（material usage）', '使った材料の量', '製造部門'], ['賃率差異（labour rate）', '1時間あたりの賃金', '人事部門'], ['労働能率差異（labour efficiency）', 'かかった作業時間', '製造部門']] }
        },
        {
          title: 'それぞれの差異が言っていること（製造間接費）',
          table: { caption: '何がずれたか、主に誰の責任か', head: ['差異', '何がずれたか', '主な責任'], rows: [['変動製造間接費の予算差異（expenditure）', '1時間あたりの変動間接費', '各費用の担当者'], ['変動製造間接費の能率差異（efficiency）', 'かかった時間（労働能率と同じ時間）', '製造部門'], ['固定製造間接費の予算差異（expenditure）', '固定間接費の総額', '各費用の担当者'], ['固定製造間接費の操業度差異（volume）', '作った量（全部原価計算のときだけ出る）', '製造部門・営業部門'], ['操業度差異のうち能率差異（volume efficiency）', '作業の速さ（労働能率と同じ時間）', '製造部門'], ['操業度差異のうち生産能力差異（volume capacity）', '実際に働いた時間と予算の時間の差', '製造部門・経営者']] },
          note: { kind: 'tip', text: '操業度差異（volume variance）は、お金の使いすぎではない。作った量が予算と違い、配賦した固定費が多すぎた・少なすぎたことを示す。予算より多く作れば有利。生産能力差異は、予算より長く働けた（工場を多く使えた）なら有利。直接原価計算では、固定費の差異は予算差異だけ。' }
        },
        {
          title: '例題: パン工場の差異報告を読む',
          example: {
            problem: '3月の報告。実際の生産量に対する標準原価は、材料費 $30,000、労務費 $18,000。差異は 材料価格 $600 F、材料数量 $2,400 A、賃率 $900 A、労働能率 $540 F。どの差異がいちばん大きく、合計で利益にどう響いたか？',
            steps: ['標準原価に対する割合を出す: 材料価格 $600 ÷ $30,000 ＝ 2%', '材料数量 $2,400 ÷ $30,000 ＝ 8%', '賃率 $900 ÷ $18,000 ＝ 5%、労働能率 $540 ÷ $18,000 ＝ 3%', 'いちばん大きいのは材料数量差異 8% の不利。まず製造部門に理由を聞く', '合計: $600 ＋ $540 − $2,400 − $900 ＝ −$2,160。有利から不利を引くとマイナスなので不利'],
            answer: '最も大きいのは材料数量差異（8% A）。合計 $2,160 A で、利益は標準より $2,160 少ない'
          }
        },
        {
          title: 'なぜ？ 有利でも良いとは限らない',
          paras: ['差異は「どこで計画とずれたか」を教える手がかりで、良い・悪いの判定ではない。', '安い材料を買えば価格差異は有利になる。でも品質が下がって、くずが増え、お客様の返品が増えるかもしれない。研修や保守を削っても費用は有利になるが、後で困る。逆に、物価が上がって標準が古くなっただけなら、不利でも現場の失敗ではない。だから数字の向きだけで人を褒めたり責めたりしない。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '「有利＝良い仕事、不利＝悪い仕事」と決めつける。操業度差異の有利を「固定費を節約した」と読む（作った量が多かっただけ）。売上数量差異を売値の差で計算する（標準の利益か貢献利益で評価する）。小さい額でも、標準原価に対する割合で大きさを見ずに判断する。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['有利（F）は利益が増える向き、不利（A）は減る向き。費用は少ないほど、売上は多いほど有利', '差異ごとに「何がずれたか」と「誰の責任か」がある（価格→購買、数量・能率→製造、賃率→人事、売上→営業）', '向きは良い・悪いの判定ではない。原因を調べて初めて評価できる。大きさは標準に対する割合で見る']
        },
        {
          title: '英単語',
          words: [
            ['variance', 'バリアンス', '差異（実際と標準・予算の差）'],
            ['favourable (F)', 'フェイバラブル', '有利（利益が増える向き）'],
            ['adverse (A)', 'アドバース', '不利（利益が減る向き）'],
            ['interpret', 'インタープリット', '（差異の意味を）読み解く'],
            ['responsibility', 'レスポンシビリティ', '責任（誰が管理できるか）'],
            ['volume variance', 'ボリューム バリアンス', '操業度差異（作った量のずれ）'],
            ['standard cost of actual output', '', '実際の生産量に対する標準原価']
          ]
        }
      ],
      quiz: [
        { q: 'Which of the following statements about a favourable variance is correct?', choices: ['It always shows that the manager responsible has performed well', 'It means that actual costs were higher than standard costs', 'It means that actual profit is higher than it would have been if actual results had matched the standard', 'It never needs to be investigated'], answer: 2, explain: '有利差異は、利益が標準どおりの場合より大きくなる向きのこと。良い仕事とは限らない（安い低品質の材料など）。費用が標準より多いのは不利。有利な差異も、大きければ原因を調べる。' },
        { q: 'The standard material cost of actual production was $40,000. The material usage variance was $3,000 adverse. What is the material usage variance as a percentage of the standard material cost?', type: 'number', answer: 7.5, unit: '%', explain: '$3,000 ÷ $40,000 × 100 ＝ 7.5%。大きさは金額だけでなく、標準原価に対する割合で見る。$43,000（標準＋差異）で割るのは間違い。' },
        { q: 'Which variance would normally be the responsibility of the purchasing manager?', choices: ['Material usage variance', 'Material price variance', 'Labour efficiency variance', 'Sales volume variance'], answer: 1, explain: '材料をいくらで買うかを決めるのは購買部門なので、材料価格差異は購買の責任。材料数量差異と労働能率差異は製造部門、売上数量差異は営業部門の責任になるのが普通。' },
        { q: '標準全部原価計算で、固定製造間接費の操業度差異が有利（F）だった。正しい読み方は？', choices: ['固定製造間接費の実際の支出が、予算より少なかった', '作業員が標準より短い時間で作った', '売れた数が予算より多かった', '実際に作った量が、予算の生産量より多かった'], answer: 3, explain: '操業度差異は作った量のずれ。予算より多く作ると、配賦される固定費が予算額より多くなり有利になる。支出の少なさは予算差異（expenditure variance）、作業時間は能率差異、売れた数は売上数量差異が示す。' },
        { q: '次のうち、有利差異なのに会社にとって良くない可能性が高いのはどれ？', choices: ['安くて品質の低い材料を買い、材料価格差異が有利になった。その後、お客様の返品が増えた', '新しい機械で作業が速くなり、労働能率差異が有利になった', '値上げしても客が減らず、売上価格差異が有利になった', '仕入先と交渉して同じ品質の材料を安く買い、材料価格差異が有利になった'], answer: 0, explain: '品質を落として得た有利な価格差異は、くず・返品・信用の低下で後から損を生みうる。ほかの3つは、品質を保ったまま利益が増えている。有利かどうかと、良いかどうかは別に考える。' },
        { q: 'A company uses standard absorption costing. Its fixed overhead capacity variance for the period was favourable. Which of the following explains this variance?', choices: ['Actual fixed overhead expenditure was less than budgeted', 'Actual hours worked were less than the standard hours for actual output', 'Actual hours worked were greater than budgeted hours', 'Actual production was less than budgeted production'], answer: 2, explain: '生産能力差異は（実際に働いた時間 − 予算の時間）× 配賦率。予算より長く働けた（工場を多く使えた）ので有利。支出の少なさは予算差異、標準時間より短く作れたのは能率差異、予算より少なく作ったのは操業度差異の不利の説明。' }
      ]
    },
    {
      id: 'M128',
      no: 128,
      title: '調べる前に考えること、差異の原因と対策',
      goal: '差異を調べるかどうか決めるときに考えることと、主な差異の原因、とるべき対策を説明できるようになる',
      minutes: 14,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D3(b)'],
      slides: [
        {
          title: '体重が少し増えたら病院へ行く？',
          paras: ['体重計に乗ったら、先週より0.3kg増えていた。これで病院へは行かない。毎日少しは上下するものだからだ。', 'でも毎月1kgずつ増え続けていたら、理由を考える。体重計が壊れているだけかもしれない。会社の差異も同じで、全部は調べない。大きさ・傾向・原因を見て、調べる価値があるものを選ぶ。']
        },
        {
          title: '差異が出る原因は4種類',
          list: ['記録・測定のまちがい（measurement errors）: 数え間違い、別の製品の材料として記録した、など', '標準が古い・現実に合わない（out-of-date standards）: 物価や賃金が変わった、作り方が変わった', '現場の効率・非効率（efficient or inefficient operations）: 無駄、事故、うまい工夫など', '偶然のばらつき（random fluctuations）: 毎月の自然な上下'],
          after: '調べるのは、どれが原因かを突き止めるため。原因ごとに、とるべき対策が違う。'
        },
        {
          title: '調べる前に考えること',
          list: ['大きさ（materiality）: 標準原価に対する割合。例: 標準の5%を超えたら調べる', '傾向（trend）: 小さくても、毎月同じ向きに大きくなっていないか', '管理できるか（controllability）: 社内で手を打てるか。国全体の賃上げなどは現場では防げない', '調べる費用と効果（cost and benefit）: 調べる費用が、直して得られる節約より大きければ調べない', '標準の種類: 無駄ゼロを前提にした理想標準（ideal standard）なら、小さな不利はいつも出る', 'ほかの差異とのつながり（interrelationship）: 1つの原因が複数の差異を生んでいないか']
        },
        {
          title: '調べるかを決める流れ',
          svg: `<svg viewBox="0 0 440 300" role="img" aria-label="差異を調べるか決める流れ。重要な大きさか、管理できる差異か、効果が調査費用を上回るかの3つにはいと答えたら、調べて原因を探し対策をとる。いいえならそれぞれ記録して様子見、標準を見直す、調べない" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">調べる前の3つの質問</text><rect x="20" y="46" width="230" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="70" text-anchor="middle" font-size="15" fill="var(--ink)">① 重要な大きさか？</text><text x="264" y="70" fill="var(--quiet)">いいえ→記録して様子見</text><line x1="135" y1="86" x2="135" y2="104" stroke="var(--edge)" stroke-width="1.5"/><polygon points="129,102 141,102 135,110" fill="var(--edge)"/><text x="145" y="102" fill="var(--quiet)">はい</text><rect x="20" y="112" width="230" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="136" text-anchor="middle" font-size="15" fill="var(--ink)">② 管理できる差異か？</text><text x="264" y="136" fill="var(--quiet)">いいえ→標準を見直す</text><line x1="135" y1="152" x2="135" y2="170" stroke="var(--edge)" stroke-width="1.5"/><polygon points="129,168 141,168 135,176" fill="var(--edge)"/><text x="145" y="168" fill="var(--quiet)">はい</text><rect x="20" y="178" width="230" height="38" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="135" y="202" text-anchor="middle" font-size="15" fill="var(--ink)">③ 効果が調査費用を上回る？</text><text x="264" y="202" fill="var(--quiet)">いいえ→調べない</text><line x1="135" y1="218" x2="135" y2="236" stroke="var(--edge)" stroke-width="1.5"/><polygon points="129,234 141,234 135,242" fill="var(--edge)"/><text x="145" y="234" fill="var(--quiet)">はい</text><rect x="20" y="244" width="230" height="44" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="135" y="271" text-anchor="middle" font-size="15" fill="var(--ink)">調べて原因を探し、対策</text></svg>`,
          caption: '①は「標準の±5%まで」のような許容範囲（tolerance limit）を決めて判断することが多い。割合だけでなく傾向も見る。小さくても毎月大きくなる差異は「重要」と考える。'
        },
        {
          title: '例題: 小さいけれど増えていく差異',
          example: {
            problem: '会社のルールは「標準原価の5%を超えた差異だけ調べる」。材料の標準原価は毎月 $20,000。材料数量差異は 1月 $300 A、2月 $560 A、3月 $820 A。調べるべきか？',
            steps: ['1月: $300 ÷ $20,000 ＝ 1.5%', '2月: $560 ÷ $20,000 ＝ 2.8%', '3月: $820 ÷ $20,000 ＝ 4.1%', 'どの月も5%以下なので、ルールだけなら調べない', 'でも毎月同じ向きに約1.3%ずつ増えている。このままなら4月は5%を超えそうだ'],
            answer: '5%のルールには当たらないが、不利が増え続ける傾向があるので、早めに調べる価値がある'
          }
        },
        {
          title: '主な原因（材料・労務）',
          table: { caption: '有利と不利、それぞれのよくある原因', head: ['差異', '有利（F）の原因', '不利（A）の原因'], rows: [['材料価格', '値引き・大量購入、安い仕入先、品質の低い材料', '値上げ、急ぎの購入、品質の高い材料'], ['材料数量', '品質の高い材料、腕のよい作業員、無駄の削減', '品質の低い材料、くず・不良、盗難、未熟な作業員'], ['賃率', '予定より低い等級（安い）の作業員を使った', '賃上げ、高い等級の作業員、予定外の残業代'], ['労働能率', '腕のよい作業員、良い材料、良い機械、やる気', '未熟な作業員、品質の低い材料、機械の故障、材料待ち']] }
        },
        {
          title: '主な原因（間接費・売上）',
          table: { caption: '有利と不利、それぞれのよくある原因', head: ['差異', '有利（F）の原因', '不利（A）の原因'], rows: [['製造間接費の予算差異', '電気代などの値下がり、使用量の節約', '値上がり、使いすぎ'], ['固定製造間接費の操業度差異', '予算より多く作った（需要増、能率向上）', '予算より少なく作った（需要減、ストライキ、故障）'], ['売上価格', '予定外の値上げ', '値下げ・割引で客を集めた'], ['売上数量', '需要の増加、値下げの効果', '需要の減少、競合の攻勢、品質の悪化']] }
        },
        {
          title: '原因に合わせた対策（control action）',
          list: ['記録のまちがい → 記録と集計を直す。現場の対策はいらない', '標準が古い・管理できない変化 → 標準を見直す（revise the standard）。今後の予算にも反映', '非効率な作業 → 現場を直す: 研修、仕入先の変更、機械の保守、材料の管理を強める', '偶然のばらつき → 何もしない。記録して次の月も見る', 'うまくいった工夫（有利） → ほかの部署にも広げる。標準をきびしくすることも考える']
        },
        {
          title: 'なぜ？ 全部は調べない',
          paras: ['調べるには人の時間とお金がかかる。小さな差異まで全部追うと、本当に大事な差異が埋もれる。', 'また、管理できない差異（国全体の賃上げ、原料の相場）で現場を責めると、やる気が下がり、標準づくりに協力しなくなる。だから「大きい・管理できる・調べる価値がある」ものから調べ、原因に合う対策をとる。'],
          note: { kind: 'warn', text: '有利な差異は調べなくてよい、ではない。品質を落とした結果かもしれないし、良い工夫ならほかに広げられる。また、年の平均価格で標準を決めると、物価が上がる年は前半に有利、後半に不利が出る。これは現場のせいではない。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['原因は4種類: 記録のまちがい、標準が古い、現場の効率・非効率、偶然のばらつき', '調べる前に考える: 大きさ（割合）と傾向、管理できるか、調べる費用と効果、標準の種類、ほかの差異とのつながり', '対策は原因次第: 記録を直す、標準を見直す、現場を直す、何もしない']
        },
        {
          title: '英単語',
          words: [
            ['investigate', 'インベスティゲート', '（差異の原因を）調べる'],
            ['materiality', 'マテリアリティ', '重要性（差異の大きさ）'],
            ['tolerance limit', 'トレランス リミット', '許容範囲（これを超えたら調べる線）'],
            ['trend', 'トレンド', '傾向（毎月の動きの向き）'],
            ['controllability', 'コントローラビリティ', '管理できるかどうか'],
            ['cost of investigation', '', '調査の費用'],
            ['random fluctuation', 'ランダム フラクチュエーション', '偶然のばらつき'],
            ['measurement error', 'メジャメント エラー', '記録・測定のまちがい'],
            ['control action', 'コントロール アクション', '差異に対してとる対策'],
            ['revise the standard', '', '標準を見直す']
          ]
        }
      ],
      quiz: [
        { q: 'A labour rate variance is adverse because a national pay increase was agreed after the standard was set. What is the most appropriate action?', choices: ['Discipline the production manager', 'Investigate the efficiency of the workforce', 'Take no action and keep the existing standard', 'Revise the standard labour rate for future periods'], answer: 3, explain: '国全体の賃上げは社内で管理できない変化で、標準が古くなったのが原因。今後の標準を見直す。製造部長の責任ではない。能率（作業時間）とは関係ない。標準をそのままにすると、毎月意味のない不利差異が出続ける。' },
        { q: 'A company investigates any variance which is more than 5% of standard cost. Material price variance: $1,800 adverse (standard cost $40,000). Labour efficiency variance: $2,600 favourable (standard cost $50,000). Variable overhead expenditure variance: $900 adverse (standard cost $12,000). Which variances should be investigated?', choices: ['Material price and variable overhead expenditure only', 'Labour efficiency and variable overhead expenditure only', 'Variable overhead expenditure only', 'All three variances'], answer: 1, explain: '割合は 材料価格 $1,800 ÷ $40,000 ＝ 4.5%、労働能率 $2,600 ÷ $50,000 ＝ 5.2%、変動製造間接費の予算差異 $900 ÷ $12,000 ＝ 7.5%。5%を超えるのは労働能率と変動製造間接費。有利な労働能率差異も対象。「不利だけ」を選ぶのは間違い。' },
        { q: 'Which of the following would be a possible cause of a favourable material usage variance?', choices: ['Purchase of a higher quality of material', 'Theft of materials from the stores', 'Use of less skilled workers', 'An unexpected increase in the price of materials'], answer: 0, explain: '品質の高い材料はくずや不良が少なく、使う量が減る。盗難と未熟な作業員は使用量を増やす（不利）。値上がりは量ではなく材料価格差異の不利の原因。' },
        { q: '労働能率差異が不利（A）になった原因として、最もありそうなものは？', choices: ['予定より腕のよい作業員を使った', '仕入先と交渉して材料を安く買えた', '古い機械が何度も故障し、作業が止まった', '国全体の賃上げで1時間あたりの賃金が上がった'], answer: 2, explain: '機械の故障で作業時間が延びると、能率差異は不利になる。腕のよい作業員は普通、能率を有利にする。材料を安く買えたのは材料価格差異、賃金の上昇は賃率差異の原因で、作業時間とは関係ない。' },
        { q: '材料数量差異の原因を調べたら、倉庫の担当者が別の製品の材料を、この製品に使ったと記録していただけだった。とるべき対策は？', choices: ['材料の標準使用量を増やす', '製造部長に作業のやり方を改めさせる', '仕入先を変える', '記録を直す。製造現場の対策はいらない'], answer: 3, explain: '原因は記録のまちがい（measurement error）。実際の作業には問題がないので、記録と集計を直せばよい。標準や現場、仕入先を変えると、問題のない所をいじることになる。' },
        { q: '会社は無駄や故障がまったくないことを前提にした理想標準（ideal standard）を使っている。毎月、小さな不利差異が出る。正しい考え方は？', choices: ['理想標準なら差異は出ないはずなので、毎月必ず全部調べる', '小さな不利差異は前提から当然出るので、それだけで現場の失敗とは言えない', '理想標準では有利差異が出やすい', '標準の種類は、調べるかどうかの判断に関係ない'], answer: 1, explain: '理想標準は普通の無駄も許さないので、小さな不利はいつも出る。だから調べるかを決めるときは標準の種類も考える。理想標準で出やすいのは不利差異。' }
      ]
    },
    {
      id: 'M129',
      no: 129,
      title: '差異どうしのつながり',
      goal: '1つの原因が複数の差異を生むしくみを理解し、差異を組み合わせて正しく評価できるようになる',
      minutes: 13,
      recall: true,
      exam: 'both',
      outcomes: ['K2:D3(c)'],
      slides: [
        {
          title: '安い靴を買ったら',
          paras: ['いつもの靴は8千円。セールで3千円の靴を買い、5千円得をした。ところが2か月で底がはがれ、また買い直した。歩きにくくて足も疲れた。', '買った瞬間の「得」だけ見ると成功だが、全部を合わせると損だった。差異も同じで、1つの判断がいくつもの差異に分かれて出てくる。']
        },
        {
          title: '差異はつながっている',
          paras: ['差異どうしのつながり（interrelationship of variances）とは、1つの原因が、別々の部門の複数の差異に同時に現れること。', 'ある差異が有利になった代わりに、別の差異が不利になることが多い。だから1つの差異だけを見て評価してはいけない。']
        },
        {
          title: '1つの判断が複数の差異を生む',
          svg: `<svg viewBox="0 0 440 310" role="img" aria-label="安くて品質の低い材料を買うと、材料価格差異は有利になるが、材料数量差異が不利になり、労働能率差異が不利になり、それにつれて変動製造間接費の能率差異も不利になる。合計では損になることが多い" font-size="14"><text x="20" y="30" font-size="17" font-weight="600" fill="var(--ink)">1つの判断が複数の差異を生む</text><rect x="70" y="46" width="300" height="40" rx="8" fill="var(--accent-bg)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="71" text-anchor="middle" font-size="15" fill="var(--ink)">安くて品質の低い材料を買う</text><line x1="160" y1="88" x2="115" y2="114" stroke="var(--edge)" stroke-width="1.5"/><line x1="280" y1="88" x2="325" y2="114" stroke="var(--edge)" stroke-width="1.5"/><rect x="20" y="116" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">材料価格差異</text><text x="115" y="162" text-anchor="middle" fill="var(--ink)">有利（F）</text><rect x="230" y="116" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="140" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">材料数量差異</text><text x="325" y="162" text-anchor="middle" fill="var(--ink)">不利（A）くずが増える</text><line x1="325" y1="174" x2="325" y2="194" stroke="var(--edge)" stroke-width="1.5"/><polygon points="319,192 331,192 325,200" fill="var(--edge)"/><rect x="230" y="202" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="325" y="226" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">労働能率差異</text><text x="325" y="248" text-anchor="middle" fill="var(--ink)">不利（A）手間が増える</text><line x1="228" y1="230" x2="218" y2="230" stroke="var(--edge)" stroke-width="1.5"/><polygon points="220,224 220,236 212,230" fill="var(--edge)"/><rect x="20" y="202" width="190" height="56" rx="8" fill="none" stroke="var(--edge)" stroke-width="1.25"/><text x="115" y="226" text-anchor="middle" fill="var(--ink)">変動製造間接費の</text><text x="115" y="248" text-anchor="middle" fill="var(--ink)">能率差異も不利（A）</text><text x="220" y="292" text-anchor="middle" fill="var(--quiet)">合計で見ると、損になることが多い</text></svg>`,
          caption: '購買部の「得」が、製造部の「損」として出てくる。'
        },
        {
          title: '試験によく出るつながり',
          table: { caption: '原因と、一緒に動く差異', head: ['原因', '有利になりやすい', '不利になりやすい'], rows: [['安い低品質の材料', '材料価格', '材料数量、労働能率'], ['高い高品質の材料', '材料数量、労働能率', '材料価格'], ['腕のよい（高い）作業員', '労働能率、材料数量', '賃率'], ['未熟な（安い）作業員', '賃率', '労働能率、材料数量'], ['値下げ', '売上数量', '売上価格'], ['値上げ', '売上価格', '売上数量'], ['機械の故障', '（なし）', '遊休時間、労働能率、生産能力（固定間接費）']] },
          after: '労働能率差異と変動製造間接費の能率差異は、どちらも同じ作業時間から出すので、同じ向きに動く（間接費を作業時間で配賦する場合）。固定製造間接費の能率差異も同じ。'
        },
        {
          title: '例題①: 安い材料は得だったか',
          example: {
            problem: '標準: 1個に材料 2kg（$5/kg）、作業 0.5時間（$12/時間）。1,000個作った。安い材料を $4.50/kg で 2,300kg 買って全部使い、作業は 560時間かかった（賃率は標準どおり）。安い材料の判断は、合計で得だったか？',
            steps: ['材料価格差異: ($5 − $4.50) × 2,300kg ＝ $1,150 F', '材料数量差異: 標準は 1,000個 × 2kg ＝ 2,000kg。(2,000 − 2,300) × $5 ＝ $1,500 A', '労働能率差異: 標準は 1,000個 × 0.5 ＝ 500時間。(500 − 560) × $12 ＝ $720 A', '合計: $1,150 − $1,500 − $720 ＝ −$1,070'],
            answer: '合計 $1,070 A。価格では $1,150 得したが、くずと手間でそれ以上を失った'
          }
        },
        {
          title: '例題②: 値下げは得だったか',
          example: {
            problem: '標準の売値 $50、標準の貢献利益は1個 $20、予算の販売数量 2,000個（標準直接原価計算）。売値を $46 に下げたら 2,600個売れた。値下げの判断は得だったか？',
            steps: ['売上価格差異: ($46 − $50) × 2,600個 ＝ $10,400 A', '売上数量差異: (2,600 − 2,000) × 標準の貢献利益 $20 ＝ $12,000 F', '合計: $12,000 − $10,400 ＝ $1,600'],
            answer: '合計 $1,600 F。売上価格差異は不利でも、売上数量差異の有利がそれを上回り、値下げは得だった'
          }
        },
        {
          title: 'なぜ？ 部門ごとの評価がゆがむ',
          paras: ['例題①では、購買部長は $1,150 の有利で褒められ、製造部長は $2,220 の不利で叱られかねない。でも原因は購買の判断だ。', '差異を部門ごとに切り離して評価すると、自分の差異だけ良く見せて、会社全体では損をする行動が起きる。だから原因が同じ差異はまとめて調べ、判断した人がその合計の結果に責任を持つようにする。']
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '有利な差異だけを見て「成功」と判断する（必ず相手の差異と合計を見る）。賃率差異と労働能率差異を逆に結びつける（腕のよい人は賃率が不利で能率が有利）。不利差異が出た部門を、原因を調べずに責める。' }
        },
        {
          title: '覚えるのは3つだけ',
          numbered: ['1つの原因が複数の差異に出る。片方が有利なら、もう片方が不利になりやすい', '定番: 安い材料→価格F・数量A・能率A。腕のよい人→賃率A・能率F。値下げ→価格A・数量F。労働能率と間接費の能率は同じ向き', '評価は合計で。つながった差異はまとめて調べ、原因を作った人が責任を持つ']
        },
        {
          title: '英単語',
          words: [
            ['interrelationship of variances', 'インターリレーションシップ', '差異どうしのつながり'],
            ['trade-off', 'トレードオフ', 'こちらを得ると、あちらを失う関係'],
            ['lower grade of material', '', '品質の低い材料'],
            ['more highly skilled labour', '', '腕のよい（等級の高い）作業員'],
            ['net effect', 'ネット エフェクト', '差異を合計した利益への影響'],
            ['knock-on effect', 'ノックオン エフェクト', 'ほかへの波及効果']
          ]
        }
      ],
      quiz: [
        { q: 'A company decided to buy a cheaper, lower grade of material. Which combination of variances is most likely to result?', choices: ['Adverse material price variance and favourable material usage variance', 'Favourable material price variance and favourable labour efficiency variance', 'Adverse material price variance and adverse labour efficiency variance', 'Favourable material price variance and adverse material usage variance'], answer: 3, explain: '安く買えば価格差異は有利。品質が低いとくずや不良が増えて使う量が増え、数量差異は不利になる。作業にも手間がかかるので、労働能率差異も普通は不利。' },
        { q: 'A production manager used more highly skilled workers than the standard assumed. Which combination of variances is most likely?', choices: ['Adverse labour rate variance and favourable labour efficiency variance', 'Favourable labour rate variance and adverse labour efficiency variance', 'Adverse labour rate variance and adverse labour efficiency variance', 'Favourable labour rate variance and favourable labour efficiency variance'], answer: 0, explain: '腕のよい作業員は時給が高いので賃率差異は不利。でも速く作れるので能率差異は有利（材料の無駄も減りやすい）。安い未熟な作業員なら、その逆になる。' },
        { q: 'In a period the material price variance was $2,400 favourable, the material usage variance was $3,100 adverse and the labour efficiency variance was $900 adverse. All three variances were caused by buying cheaper material. By how much was profit lower as a result of this decision?', type: 'number', answer: 1600, unit: '$', explain: '$2,400 − $3,100 − $900 ＝ −$1,600。合計は $1,600 の不利で、利益はそのぶん少ない。価格差異の有利だけを見ると、判断を見誤る。' },
        { q: '変動製造間接費を直接作業時間で配賦している。労働能率差異が不利（A）なら、変動製造間接費の能率差異はどうなる？', choices: ['必ず有利（F）になる', '差異は出ない', '同じく不利（A）になる', '材料数量差異で決まる'], answer: 2, explain: 'どちらも「標準の時間と実際の時間の差」から出す。作業時間が標準より長ければ、労務費も変動製造間接費も多くかかる。だから同じ向きに動く。' },
        { q: '売値を下げたところ、売上価格差異が $10,400 A、売上数量差異が $12,000 F になった。正しい読み方は？', choices: ['売上価格差異が不利なので、営業部長の判断は失敗だった', '2つは同じ判断から出ている。合計 $1,600 F なので、値下げは利益を増やした', '2つは関係がないので、別々に評価する', '売上数量差異の有利は製造部門の成果である'], answer: 1, explain: '値下げで売値の差異は不利、売れた数の差異は有利になった。原因が同じなので合計で見る: $12,000 − $10,400 ＝ $1,600 F。売上の差異は営業部門の判断の結果。' },
        { q: '購買部長が安い材料に切り替え、材料価格差異が有利、材料数量差異と労働能率差異が不利になった。業績評価の考え方として最もよいのは？', choices: ['購買部長は有利なので褒め、製造部長は不利なので責める', '有利と不利が打ち消し合うので、調べる必要はない', '材料数量差異だけを調べる', '原因が同じなので、3つの差異を合わせて購買部長の判断を評価する'], answer: 3, explain: 'つながった差異は、原因を作った人の判断の結果としてまとめて評価する。部門ごとに切り離すと、製造部長が責任のない不利で責められる。打ち消し合っても、合計が不利なら損をしているので調べる。' }
      ]
    }
  ],
  cards: [
    { id: 'M127-1', lesson: 'M127', q: '有利差異（favourable, F）と不利差異（adverse, A）の決め方は？', a: '利益への向きで決める。利益が標準どおりより増えれば F、減れば A' },
    { id: 'M127-2', lesson: 'M127', q: '費用の差異と売上の差異、それぞれ何が有利？', a: '費用は実際が標準より少ないと有利。売上は価格・数量が標準より多いと有利' },
    { id: 'M127-3', lesson: 'M127', q: 'なぜ？ 有利差異でも良いとは限らない', a: '品質を落とした安い材料や、研修・保守の削減でも有利になるから。原因を見て評価する' },
    { id: 'M127-4', lesson: 'M127', q: '材料価格差異・数量差異・賃率差異の主な責任者は？', a: '材料価格→購買部門、材料数量→製造部門、賃率→人事部門' },
    { id: 'M127-5', lesson: 'M127', q: '固定製造間接費の操業度差異が有利、の意味は？', a: '予算より多く作った（固定費を多く配賦した）。支出の節約ではない' },
    { id: 'M127-6', lesson: 'M127', q: '差異の大きさはどう見る？', a: '標準原価に対する割合で見る。例: $3,000 ÷ 標準 $40,000 ＝ 7.5%' },
    { id: 'M127-7', lesson: 'M127', q: '固定製造間接費の生産能力差異（capacity）が有利、の意味は？', a: '実際に働いた時間が予算の時間より長かった（工場を多く使えた）' },
    { id: 'M128-1', lesson: 'M128', q: '差異が出る原因の4種類は？', a: '記録・測定のまちがい、標準が古い、現場の効率・非効率、偶然のばらつき' },
    { id: 'M128-2', lesson: 'M128', q: '差異を調べる前に考えることは？', a: '大きさ（割合）と傾向、管理できるか、調べる費用と効果、標準の種類、差異どうしのつながり' },
    { id: 'M128-3', lesson: 'M128', q: '国全体の賃上げで賃率差異が不利。対策は？', a: '管理できない変化なので、標準を見直す（revise the standard）。現場は責めない' },
    { id: 'M128-4', lesson: 'M128', q: 'なぜ？ 全部の差異は調べない', a: '調べる費用がかかり、大事な差異が埋もれるから。効果が費用を上回るものを調べる' },
    { id: 'M128-5', lesson: 'M128', q: '労働能率差異が不利になる主な原因は？', a: '未熟な作業員、品質の低い材料、機械の故障、材料待ち、やる気の低下' },
    { id: 'M128-6', lesson: 'M128', q: '記録のまちがいが原因の差異への対策は？', a: '記録と集計を直す。現場の作業を変える必要はない' },
    { id: 'M129-1', lesson: 'M129', q: '差異どうしのつながり（interrelationship）とは？', a: '1つの原因が、複数の差異に同時に現れること。有利の裏で別の不利が出やすい' },
    { id: 'M129-2', lesson: 'M129', q: '安い低品質の材料を買うと、どの差異が出やすい？', a: '材料価格 F、材料数量 A、労働能率 A（変動製造間接費の能率も A）' },
    { id: 'M129-3', lesson: 'M129', q: '腕のよい（時給の高い）作業員を使うと？', a: '賃率差異 A、労働能率差異 F（材料数量差異も F になりやすい）' },
    { id: 'M129-4', lesson: 'M129', q: '値下げをすると、売上の差異はどうなりやすい？', a: '売上価格差異 A、売上数量差異 F。合計で得か損かを見る' },
    { id: 'M129-5', lesson: 'M129', q: 'なぜ？ つながった差異は合計で評価する', a: '部門ごとに切ると、原因を作った人が褒められ、関係ない人が責められるから' },
    { id: 'M129-6', lesson: 'M129', q: '価格 $1,150 F、数量 $1,500 A、能率 $720 A。合計は？', a: '$1,150 − $1,500 − $720 ＝ $1,070 A' }
  ]
});
