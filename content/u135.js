(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  subject: 'K2',
  unit: 135,
  part: 9,
  partTitle: '短期の意思決定',
  lessons: [
    {
      id: 'M142',
      no: 142,
      title: '売価や原価が変わると損益分岐点はどう動く？',
      goal: '売価・変動費・固定費・販売量が変わったときの損益分岐点と安全余裕を計算し、その動きを説明できるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(c)(iv)'],
      slides: [
        {
          title: '家賃を払うための副業',
          paras: ['手作りのアクセサリーを1個 3,000円で売る。材料は1個 1,000円なので、1個売るごとに 2,000円が残る。作業場の家賃は月 90,000円。', '家賃を払い切るには 90,000 ÷ 2,000 ＝ 45個 売ればよい。では、値段や材料費や家賃が変わると、何個で元が取れるのか。']
        },
        {
          title: '1つ変わると必要な数が変わる',
          table: { caption: '何個売れば家賃を払えるか', head: ['変化', '1個で残る額', '必要な数'], rows: [['今のまま', '2,000円', '45個'], ['売価を 3,500円に上げる', '2,500円', '36個'], ['材料費が 1,500円に上がる', '1,500円', '60個'], ['家賃が 100,000円に上がる', '2,000円', '50個']] },
          after: '1個で残る額（貢献利益）が増えると必要な数は減る。家賃（固定費）が増えると必要な数は増える。'
        },
        {
          title: '復習: 4つの式',
          list: ['損益分岐点の数量 ＝ 固定費 ÷ 1個の貢献利益', '損益分岐点の売上高 ＝ 固定費 ÷ C/S 比率', '安全余裕（margin of safety）＝ 予算の販売量 − 損益分岐点の販売量', '安全余裕率 ＝ 安全余裕 ÷ 予算の販売量 × 100%'],
          note: { kind: 'tip', text: '変化の問題は、この式に「変化した後の数字」を入れ直すだけ。順番は 新しい貢献利益 → 新しい損益分岐点 → 新しい安全余裕。' }
        },
        {
          title: 'ボトル工場の今の計画',
          paras: ['保温ボトルを作る工場。ここから数字を1つずつ変えてみる。'],
          table: { caption: '今の計画（1年）', head: ['項目', '金額・数量'], rows: [['売価', '$25'], ['1個の変動費', '$15'], ['1個の貢献利益', '$10'], ['固定費', '$60,000'], ['予算の販売量', '8,000個'], ['損益分岐点 60,000 ÷ 10', '6,000個'], ['安全余裕 8,000 − 6,000', '2,000個（25%）'], ['利益 10 × 8,000 − 60,000', '$20,000']] }
        },
        {
          title: 'ひとつずつ変えてみる',
          table: { caption: 'ほかの数字は今の計画のまま', head: ['変化', '損益分岐点', '安全余裕'], rows: [['今の計画', '6,000個', '2,000個（25%）'], ['売価 $25 → $30', '4,000個', '4,000個（50%）'], ['変動費 $15 → $17', '7,500個', '500個（6.25%）'], ['固定費 ＋$12,000', '7,200個', '800個（10%）'], ['予算の販売量 8,000 → 9,000個', '6,000個', '3,000個（33.3%）'], ['機械化: 変動費 $15 → $10、固定費 ＋$45,000', '7,000個', '1,000個（12.5%）']] },
          after: '売価 $30 なら貢献利益 $15、変動費 $17 なら貢献利益 $8 で割り直した。2つ同時に変わるときも、両方入れて割り直す（機械化は $105,000 ÷ $15）。予算の販売量だけが変わっても、損益分岐点は動かない。'
        },
        {
          title: 'なぜ？ 売価の変化は大きく効く',
          paras: ['損益分岐点は「固定費の山を、1個ごとの貢献利益で何回すくえば空になるか」の回数になる。1回にすくう量が増えれば、回数は減る。', '売価を $5 上げても変動費は同じなので、貢献利益も $5 まるごと増える。売価は 20% 上がっただけだが、貢献利益は $10 → $15 で 50% 増える。だから損益分岐点は 6,000個 → 4,000個 と大きく下がる。変動費が上がるときは逆に、同じ額だけ貢献利益が削られる。']
        },
        {
          title: '例題: 値上げで販売量が減るとき',
          example: {
            problem: 'ボトル工場（売価 $25、変動費 $15、固定費 $60,000、予算 8,000個）が売価を $30 に上げる。すると予算の販売量は 6,000個に減る。新しい損益分岐点（数量と売上高）、安全余裕と安全余裕率、利益は？ 値上げするべきか？',
            steps: ['新しい貢献利益: $30 − $15 ＝ $15（C/S 比率 15 ÷ 30 ＝ 50%）', '損益分岐点の数量: $60,000 ÷ $15 ＝ 4,000個', '損益分岐点の売上高: $60,000 ÷ 50% ＝ $120,000（4,000個 × $30 でも同じ）', '安全余裕: 6,000 − 4,000 ＝ 2,000個。売上高では 2,000 × $30 ＝ $60,000', '安全余裕率: 2,000 ÷ 6,000 ＝ 33.3%（今は 25%）', '利益: $15 × 6,000 − $60,000 ＝ $30,000（今は $20,000）'],
            answer: '損益分岐点 4,000個・$120,000、安全余裕 2,000個（33.3%）、利益 $30,000。利益も安全余裕率も上がるので、数字の上では値上げが有利'
          }
        },
        {
          title: '安全余裕は新しい予算で出す',
          list: ['安全余裕率は、変化した後の予算の販売量で割る。例題では 2,000個は今と同じでも、2,000 ÷ 6,000 ＝ 33.3% になる', '確かめ: 安全余裕の数量 × 1個の貢献利益 ＝ 利益。2,000 × $15 ＝ $30,000', '損益分岐点の売上高は、新しい売価か新しい C/S 比率で出す。古い売価 $25 を使わない']
        },
        {
          title: 'C/S 比率で出題されたとき',
          paras: ['売上高と C/S 比率だけが与えられることもある。売価が上がって数量と原価が同じなら、変動費の総額は変わらない。売上高と貢献利益が同じ額だけ増える。', '例: 売上 $100,000、C/S 40%（変動費 $60,000）、固定費 $30,000。売価が 10% 上がると売上 $110,000、変動費 $60,000、貢献利益 $50,000、C/S ＝ 45.45%。損益分岐点の売上高 ＝ $30,000 ÷ 0.4545 ＝ $66,000（今は $75,000）。'],
          note: { kind: 'warn', text: 'C/S 比率を 40% × 1.1 ＝ 44% としない。変動費は値上げしても増えないので、C/S 比率は 新しい貢献利益 ÷ 新しい売上 で計算し直す。' }
        },
        {
          title: 'よくある間違い',
          note: { kind: 'warn', text: '売価が 10% 上がったとき、貢献利益にも 10% をかけてしまう。増えるのは売価の増加額そのもの（$25 → $27.50 なら貢献利益は $10 → $12.50）。また、値上げで販売量が減るのに、古い予算の販売量で安全余裕を出してしまう。' },
          paras: ['変化の問題では、何が変わり何が変わらないかを先に書き出す。売価と変動費は貢献利益を、固定費は割られる山の大きさを、予算の販売量は安全余裕だけを動かす。']
        },
        {
          title: '覚えるのは3つ',
          numbered: ['売価・変動費が変わったら、まず新しい1個の貢献利益を出し、固定費を割り直す', '売価↑・変動費↓ なら損益分岐点は下がり、固定費↑ なら上がる。予算の販売量だけ変わっても動かない', '安全余裕と安全余裕率は、変化した後の予算の販売量で出す'],
          words: [['break-even point', 'ブレークイーブン・ポイント', '損益分岐点'], ['margin of safety', 'マージン・オブ・セーフティ', '安全余裕'], ['contribution per unit', '', '1単位の貢献利益'], ['C/S ratio (contribution to sales ratio)', '', '貢献利益率'], ['budgeted sales volume', '', '予算の販売量'], ['selling price per unit', '', '1単位の売価']]
        }
      ],
      quiz: [
        { q: 'A company sells a single product for $40 per unit. Variable costs are $24 per unit and fixed costs are $96,000 per year. Budgeted sales are 8,000 units. If the selling price is increased by 10% and costs are unchanged, what is the new break-even point in units?', choices: ['5,455 units', '6,000 units', '4,800 units', '2,182 units'], answer: 2, explain: '新しい売価 $44、貢献利益 $44 − $24 ＝ $20。$96,000 ÷ $20 ＝ 4,800個。5,455個は貢献利益 $16 に 10% をかけて $17.60 にした答え。6,000個は今の損益分岐点。2,182個は売価 $44 で割った答え（割るのは貢献利益）。' },
        { q: 'A company sells a single product for $40 per unit with variable costs of $24 per unit. Budgeted sales are 8,000 units. Fixed costs increase from $96,000 to $112,000. What is the new margin of safety as a percentage of budgeted sales?', type: 'number', answer: 12.5, unit: '%', explain: '貢献利益は $16 のまま。損益分岐点 ＝ $112,000 ÷ $16 ＝ 7,000個。安全余裕 ＝ 8,000 − 7,000 ＝ 1,000個。1,000 ÷ 8,000 ＝ 12.5%（今は 2,000個・25%）。' },
        { q: 'Budgeted sales revenue is $200,000, the C/S ratio is 40% and fixed costs are $60,000. If selling prices increase by 10% and sales volume and costs per unit stay the same, what is the new break-even sales revenue?', choices: ['$136,364', '$132,000', '$150,000', '$165,000'], answer: 1, explain: '変動費 ＝ $200,000 × 60% ＝ $120,000 は変わらない。新しい売上 $220,000、貢献利益 $100,000、C/S ＝ 100,000 ÷ 220,000 ＝ 45.45%。$60,000 ÷ 0.4545 ＝ $132,000。$136,364 は C/S を 40% × 1.1 ＝ 44% とした答え。$150,000 は今の損益分岐点の売上高。$165,000 は今の値に 1.1 をかけた答え。' },
        { q: '売価 $40、変動費 $24、固定費 $96,000、予算 8,000個の会社。売価を $36 に下げると、販売量は 10,000個に増える見込み。値下げ後の安全余裕率は何%？', type: 'number', answer: 20, unit: '%', explain: '貢献利益 $36 − $24 ＝ $12。損益分岐点 ＝ $96,000 ÷ $12 ＝ 8,000個。安全余裕 ＝ 10,000 − 8,000 ＝ 2,000個。2,000 ÷ 10,000 ＝ 20%。今は 2,000 ÷ 8,000 ＝ 25% なので下がる。利益も $12 × 10,000 − $96,000 ＝ $24,000 で、今の $32,000 より少ない。' },
        { q: 'A company sells a single product for $40 per unit. Variable costs are $24 per unit, fixed costs are $96,000 per year and budgeted sales are 8,000 units. The company plans to automate production. Variable cost per unit will fall by $4 and fixed costs will rise by $44,000 per year. What will the break-even point be in units after automation?', type: 'number', answer: 7000, unit: '個', explain: '新しい変動費 $20、貢献利益 $40 − $20 ＝ $20。新しい固定費 $96,000 ＋ $44,000 ＝ $140,000。$140,000 ÷ $20 ＝ 7,000個（今は 6,000個）。安全余裕は 8,000 − 7,000 ＝ 1,000個（12.5%）に減る。片方だけ変えて $96,000 ÷ $20 ＝ 4,800個 や $140,000 ÷ $16 ＝ 8,750個 にしないこと。' },
        { q: 'Which of the following changes, considered on its own, would increase the margin of safety in units?', choices: ['An increase in variable cost per unit', 'A decrease in the selling price per unit', 'A decrease in budgeted sales volume', 'A decrease in fixed costs'], answer: 3, explain: '固定費が減ると損益分岐点が下がり、予算の販売量との差が広がる。変動費の上昇と売価の値下げは貢献利益を減らし、損益分岐点を上げる。予算の販売量が減ると、損益分岐点は同じでも差は縮む。' }
      ]
    },
    {
      id: 'M143',
      no: 143,
      title: '損益分岐図と利益図（P/V 図）を読む',
      goal: '損益分岐図と利益図から、損益分岐点・安全余裕・固定費・利益・C/S 比率を読み取れるようになる',
      minutes: 15,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(c)(vi)'],
      slides: [
        {
          title: '月の家計をグラフにする',
          paras: ['ひと月の固定の支出（家賃・通信費など）が 90,000円。バイトは1日 10,000円の手取り。1日も働かなければ −90,000円、9日働けば ±0、それより多く働けば黒字になる。', '横軸に働いた日数、縦軸に手元に残るお金をとって線を引くと、−90,000円から始まる右上がりの直線になる。線が横軸を越える9日目が、元が取れる日になる。会社でも同じ考え方の図を使う。']
        },
        {
          title: '損益分岐図の3本の線',
          paras: ['損益分岐図（break-even chart）は、横軸に販売量（または売上高）、縦軸に金額をとる。'],
          list: ['固定費線（fixed cost line）: 固定費の高さで水平にのびる', '総原価線（total cost line）: 固定費の高さから始まり、1個の変動費の傾きで上がる', '売上高線（sales revenue line）: 原点（0）から始まり、売価の傾きで上がる']
        },
        {
          title: 'ボトル工場の損益分岐図',
          svg: `<svg viewBox="0 0 440 324" role="img" aria-label="損益分岐図。横軸は販売量、縦軸は金額。固定費線は60,000ドルで水平、総原価線は60,000ドルから右上がり、売上高線は原点から右上がり。2本は6,000個・150,000ドルで交わる。予算8,000個との差2,000個が安全余裕" font-size="14"><text x="20" y="22" fill="var(--quiet)">金額（$）</text><line x1="80" y1="30" x2="80" y2="260" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="260" x2="420" y2="260" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="128" x2="278" y2="128" stroke="var(--edge)" stroke-width="1" stroke-dasharray="4 4"/><line x1="278" y1="128" x2="278" y2="260" stroke="var(--edge)" stroke-width="1" stroke-dasharray="4 4"/><line x1="344" y1="84" x2="344" y2="260" stroke="var(--edge)" stroke-width="1" stroke-dasharray="4 4"/><line x1="80" y1="207.2" x2="410" y2="207.2" stroke="var(--quiet)" stroke-width="2" stroke-dasharray="7 4"/><line x1="80" y1="207.2" x2="410" y2="75.2" stroke="var(--ink)" stroke-width="2"/><line x1="80" y1="260" x2="410" y2="40" stroke="var(--ink)" stroke-width="2.5"/><circle cx="278" cy="128" r="6" fill="var(--accent)"/><text x="404" y="34" text-anchor="end" fill="var(--ink)">売上高</text><text x="404" y="114" text-anchor="end" fill="var(--ink)">総原価</text><text x="404" y="200" text-anchor="end" fill="var(--quiet)">固定費</text><text x="268" y="120" text-anchor="end" font-weight="600" fill="var(--ink)">損益分岐点</text><text x="74" y="132" text-anchor="end" font-size="12.5" fill="var(--quiet)">150,000</text><text x="74" y="211" text-anchor="end" font-size="12.5" fill="var(--quiet)">60,000</text><text x="80" y="278" text-anchor="middle" font-size="12.5" fill="var(--quiet)">0</text><text x="278" y="278" text-anchor="middle" font-size="12.5" fill="var(--quiet)">6,000</text><text x="344" y="278" text-anchor="middle" font-size="12.5" fill="var(--quiet)">8,000</text><line x1="278" y1="290" x2="344" y2="290" stroke="var(--ink)" stroke-width="1.5"/><line x1="278" y1="284" x2="278" y2="296" stroke="var(--ink)" stroke-width="1.5"/><line x1="344" y1="284" x2="344" y2="296" stroke="var(--ink)" stroke-width="1.5"/><text x="311" y="314" text-anchor="middle" fill="var(--ink)">安全余裕 2,000個</text><text x="420" y="314" text-anchor="end" fill="var(--quiet)">数量</text></svg>`,
          caption: '売価 $25、変動費 $15、固定費 $60,000、予算 8,000個。売上高線と総原価線は 6,000個・$150,000 で交わる。'
        },
        {
          title: '損益分岐図の読み方',
          list: ['売上高線と総原価線の交点: 損益分岐点（数量は横軸、売上高は縦軸で読む）', '交点より右: 売上高線が上。2本の線の間の幅が利益', '交点より左: 総原価線が上。2本の線の間の幅が損失', '損益分岐点と予算の販売量の横の距離: 安全余裕', '総原価線が縦軸と交わる高さ: 固定費'],
          after: '8,000個では売上高 $200,000、総原価 $60,000 ＋ $15 × 8,000 ＝ $180,000。線の間の幅 $20,000 が利益。'
        },
        {
          title: '貢献利益型の損益分岐図',
          paras: ['もう1つの描き方がある。貢献利益型の損益分岐図（contribution break-even chart）では、変動費線を原点から引き、その上に固定費の分だけ平行に総原価線を引く。'],
          list: ['売上高線と変動費線の間の幅: 貢献利益', '売上高線と総原価線の交点: 損益分岐点（位置はふつうの図と同じ）'],
          after: 'ふつうの図では貢献利益は見えないが、こちらでは見える。損益分岐点・安全余裕・利益は、どちらの図でも同じに読める。'
        },
        {
          title: '利益図（P/V 図）',
          svg: `<svg viewBox="0 0 440 280" role="img" aria-label="利益図。横軸は販売量、縦軸は利益。利益線はマイナス60,000ドルから始まり、6,000個で横軸と交わり、8,000個で利益20,000ドルになる。傾きは1個の貢献利益10ドル" font-size="14"><text x="20" y="22" fill="var(--quiet)">利益（$）</text><line x1="80" y1="30" x2="80" y2="260" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="120" x2="420" y2="120" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="80" x2="344" y2="80" stroke="var(--edge)" stroke-width="1" stroke-dasharray="4 4"/><line x1="344" y1="80" x2="344" y2="120" stroke="var(--edge)" stroke-width="1" stroke-dasharray="4 4"/><line x1="80" y1="240" x2="410" y2="40" stroke="var(--ink)" stroke-width="2.5"/><circle cx="278" cy="120" r="6" fill="var(--accent)"/><text x="404" y="34" text-anchor="end" fill="var(--ink)">利益線</text><text x="270" y="108" text-anchor="end" font-weight="600" fill="var(--ink)">損益分岐点 6,000個</text><text x="74" y="84" text-anchor="end" font-size="12.5" fill="var(--quiet)">+20,000</text><text x="74" y="124" text-anchor="end" font-size="12.5" fill="var(--quiet)">0</text><text x="74" y="244" text-anchor="end" font-size="12.5" fill="var(--quiet)">−60,000</text><text x="344" y="138" text-anchor="middle" font-size="12.5" fill="var(--quiet)">8,000</text><text x="420" y="114" text-anchor="end" fill="var(--quiet)">数量</text><text x="420" y="200" text-anchor="end" fill="var(--ink)">傾き ＝ 1個の貢献利益 $10</text><text x="92" y="266" fill="var(--ink)">売上ゼロ ＝ 固定費の損失</text></svg>`,
          caption: '同じボトル工場の利益図。横軸（利益ゼロの線）より上が利益、下が損失。'
        },
        {
          title: '利益図の読み方',
          paras: ['利益図（profit/volume chart、P/V chart）は、横軸に販売量か売上高、縦軸に利益をとり、1本の線で描く。'],
          list: ['縦軸との交点: 売上ゼロのときの損失 ＝ 固定費（−$60,000）', '横軸との交点: 損益分岐点（6,000個）', '線の傾き: 1個の貢献利益（$10）。横軸が売上高なら C/S 比率', '予算の販売量での線の高さ: 利益（8,000個で $20,000）'],
          note: { kind: 'tip', text: '2つの売上水準の利益が分かれば線が引ける。傾き ＝ 利益の差 ÷ 売上の差。高低点法と同じ考え方。' }
        },
        {
          title: '例題: 利益図から数字を読む',
          example: {
            problem: 'いくつもの製品を売る会社全体の利益図。製品ごとの数量は足せないので、横軸は売上高にする。利益線は縦軸の −$48,000 から始まり、売上高 $120,000 で横軸と交わる。予算の売上高は $180,000。固定費、C/S 比率、予算の利益、安全余裕率は？',
            steps: ['固定費: 縦軸との交点の大きさ ＝ $48,000', 'C/S 比率（線の傾き）: 売上が $0 → $120,000 で、利益が −$48,000 → $0。$48,000 ÷ $120,000 ＝ 40%', '予算の利益: $180,000 × 40% − $48,000 ＝ $72,000 − $48,000 ＝ $24,000', '安全余裕: $180,000 − $120,000 ＝ $60,000', '安全余裕率: $60,000 ÷ $180,000 ＝ 33.3%（確かめ: $60,000 × 40% ＝ $24,000 ＝ 利益）'],
            answer: '固定費 $48,000、C/S 比率 40%、予算の利益 $24,000、安全余裕率 33.3%'
          }
        },
        {
          title: '数字が変わると図はどう動く？',
          table: { caption: 'ほかの数字は同じとき', head: ['変化', '損益分岐図', 'P/V 図'], rows: [['売価が上がる', '売上高線が急になる', '線が急になり、分岐点が左へ'], ['変動費単価が上がる', '総原価線が急になる', '線がゆるくなり、分岐点が右へ'], ['固定費が増える', '固定費線と総原価線が上へ平行に動く', '線が下へ平行に動き、分岐点が右へ']] },
          after: 'P/V 図の傾きは貢献利益、縦軸との交点は固定費。この2つが動くと、横軸との交点（損益分岐点）も動く。'
        },
        {
          title: 'なぜ？ 2つの図を使い分ける',
          paras: ['損益分岐図は、売上・原価・固定費の大きさがそれぞれ見えるので、全体のしくみを説明するのに向く。', '利益図は線が1本で、どの販売量でいくら利益が出るかを直接読める。「売価を上げたら」「固定費が増えたら」と線を動かして比べやすい。'],
          note: { kind: 'warn', text: '損益分岐図の売上高線と総原価線の間を「貢献利益」と読むのはまちがい。それは利益。貢献利益が見えるのは貢献利益型の図の売上高線と変動費線の間。P/V 図の縦軸との交点は 0 ではなく −固定費。' }
        },
        {
          title: '覚えるのは3つ',
          numbered: ['損益分岐図: 売上高線と総原価線の交点が損益分岐点。交点より右の線の間が利益', '利益図: 縦軸との交点 ＝ −固定費、横軸との交点 ＝ 損益分岐点、傾き ＝ 1個の貢献利益（売上高の軸なら C/S 比率）', '固定費が変わると線は平行に動き、売価・変動費が変わると傾きが変わる'],
          words: [['break-even chart', 'ブレークイーブン・チャート', '損益分岐図'], ['contribution break-even chart', '', '貢献利益型の損益分岐図'], ['profit/volume (P/V) chart', 'プロフィット・ボリューム・チャート', '利益図'], ['total cost line', '', '総原価線'], ['sales revenue line', '', '売上高線'], ['gradient', 'グレイディエント', '傾き']]
        }
      ],
      quiz: [
        { q: 'On a profit/volume (P/V) chart for a single product, what does the point where the profit line cuts the vertical (profit) axis represent?', choices: ['The break-even point', 'A loss equal to total fixed costs', 'A profit equal to total contribution', 'The margin of safety'], answer: 1, explain: '売上ゼロでは貢献利益もゼロなので、固定費がそのまま損失になる。線は −固定費 から始まる。損益分岐点は横軸との交点。安全余裕は損益分岐点と予算の販売量の横の距離。縦軸との交点は貢献利益とは関係しない。' },
        { q: 'In a conventional break-even chart, what does the vertical distance between the sales revenue line and the total cost line at the budgeted level of activity represent?', choices: ['Total contribution', 'Margin of safety', 'Total fixed costs', 'Budgeted profit'], answer: 3, explain: '売上高 − 総原価 ＝ 利益。貢献利益が見えるのは、貢献利益型の図の売上高線と変動費線の間。安全余裕は横の距離（数量や売上高）。固定費は固定費線の高さ。' },
        { q: 'A profit/volume chart for a single product business shows the profit line cutting the vertical axis at a loss of $45,000 and cutting the horizontal axis at sales revenue of $180,000. What is the profit at sales revenue of $240,000?', type: 'number', answer: 15000, unit: '$', explain: '傾き（C/S 比率）＝ $45,000 ÷ $180,000 ＝ 25%。利益 ＝ $240,000 × 25% − $45,000 ＝ $60,000 − $45,000 ＝ $15,000。安全余裕 $60,000 × 25% でも同じ答えになる。' },
        { q: '損益分岐図で、総原価線は縦軸の $30,000 から始まる。5,000個のところで、売上高線は $100,000、総原価線は $90,000 を示している。損益分岐点は何個？', type: 'number', answer: 3750, unit: '個', explain: '固定費 ＝ 縦軸の $30,000。売価 ＝ $100,000 ÷ 5,000 ＝ $20。変動費 ＝（$90,000 − $30,000）÷ 5,000 ＝ $12。貢献利益 $8。$30,000 ÷ $8 ＝ 3,750個。$90,000 ÷ 5,000 ＝ $18 を変動費にしないこと（固定費が混ざっている）。' },
        { q: '固定費だけが増えた。P/V 図の利益線はどう動く？', choices: ['傾きがゆるくなり、損益分岐点は右へ動く', '傾きは同じまま上へ平行に動き、損益分岐点は左へ動く', '傾きは同じまま下へ平行に動き、損益分岐点は右へ動く', '線は動かず、縦軸との交点だけが下がる'], answer: 2, explain: '縦軸との交点は −固定費 なので、固定費が増えると交点が下がる。傾き（貢献利益）は同じなので線は下へ平行に動き、横軸と交わる点（損益分岐点）は右へ動く。傾きが変わるのは売価か変動費が変わったとき。' },
        { q: 'P/V 図で、売上高 $100,000 のとき損失 $10,000、売上高 $200,000 のとき利益 $30,000 になっている。損益分岐点の売上高は？', type: 'number', answer: 125000, unit: '$', explain: '傾き（C/S 比率）＝（$30,000 −（−$10,000））÷（$200,000 − $100,000）＝ $40,000 ÷ $100,000 ＝ 40%。固定費 ＝ $100,000 × 40% ＋ $10,000 ＝ $50,000。損益分岐点 ＝ $50,000 ÷ 40% ＝ $125,000。' }
      ]
    },
    {
      id: 'M144',
      no: 144,
      title: 'CVP 分析の前提',
      goal: 'CVP 分析が置いている前提と、前提が崩れると答えがどうずれるかを説明できるようになる',
      minutes: 12,
      recall: true,
      exam: 'both',
      outcomes: ['K2:E1(c)(vii)'],
      slides: [
        {
          title: 'カーナビの到着予想',
          paras: ['カーナビは「この先も今の速さで走り続ける」と考えて到着時刻を出す。渋滞や信号待ちが変われば、予想はずれる。それでも、だいたいの目安としてはとても役に立つ。', 'CVP 分析（cost-volume-profit analysis）も同じ。いくつかの前提（assumptions）の上に立っていて、前提が崩れると答えがずれる。']
        },
        {
          title: 'CVP は直線の世界',
          paras: ['損益分岐点が 固定費 ÷ 1個の貢献利益 の1回の割り算で出るのは、売上も原価も販売量に比例して「まっすぐ」動くと考えているから。', 'まっすぐなら、1個目も 9,000個目も同じ $10 の貢献利益を生む。前提とは、この「まっすぐ」を保証する約束のこと。']
        },
        {
          title: '前提①: 売上と原価の動き',
          list: ['売価: 1単位の売価は、販売量にかかわらず一定（たくさん売るための値引きがない）', '変動費: 1単位の変動費は一定（大量仕入れの割引や、慣れによる効率化がない）', '固定費: 総額は関連範囲（relevant range）の中で一定', '原価の分解: すべての原価を固定費と変動費に正確に分けられる']
        },
        {
          title: '前提②: 製品・在庫・期間',
          list: ['製品: 1種類だけ、または複数でも販売の組み合わせ（sales mix）が一定', '在庫: 生産量 ＝ 販売量（在庫の増減がない）', '要因: 原価と売上を動かすのは販売量だけ（物価や効率は変わらない）', '期間: 短期で、ふだんの活動量の近く（関連範囲の中）を考える']
        },
        {
          title: '前提が崩れる例',
          table: { caption: '現実によくある場面', head: ['前提', '崩れる例'], rows: [['売価が一定', '大口の客に値引きする'], ['変動費単価が一定', '大量に買うと材料が安くなる、作業に慣れて速くなる'], ['固定費の総額が一定', '生産を増やすため機械や工場を追加で借りる'], ['生産量 ＝ 販売量', '売れ残りが在庫として残る'], ['組み合わせが一定', '利益率の低い製品の割合が増える']] }
        },
        {
          title: '例: 値引きで前提が崩れると',
          example: {
            problem: 'ボトル工場（売価 $25、変動費 $15、固定費 $60,000）。8,000個を超えて売るには、全部のボトルを $22 に値下げしなければならない。10,000個売るとき、CVP の直線の予測と実際の利益は？',
            steps: ['直線の予測: $10 × 10,000 − $60,000 ＝ $40,000', '実際: 貢献利益 $22 − $15 ＝ $7。$7 × 10,000 − $60,000 ＝ $10,000', '差: $40,000 − $10,000 ＝ $30,000 も予測が大きすぎる'],
            answer: '予測 $40,000 に対して実際は $10,000。売価が一定という前提が崩れると、CVP の答えは大きくずれる'
          }
        },
        {
          title: '直線が当てはまる範囲',
          svg: `<svg viewBox="0 0 440 290" role="img" aria-label="CVPの直線と実際の売上の線。関連範囲の中では2本はほぼ重なるが、範囲の外では実際の線が直線より下に離れていく" font-size="14"><rect x="150" y="40" width="180" height="220" fill="var(--accent-bg)"/><text x="20" y="22" fill="var(--quiet)">売上高（$）</text><text x="240" y="62" text-anchor="middle" font-weight="600" fill="var(--ink)">関連範囲</text><line x1="80" y1="30" x2="80" y2="260" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="260" x2="420" y2="260" stroke="var(--edge)" stroke-width="1.5"/><line x1="80" y1="260" x2="410" y2="40" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4"/><path d="M80,260 L160,204 L240,151 L320,100 Q365,74 410,68" fill="none" stroke="var(--ink)" stroke-width="2.5"/><text x="404" y="30" text-anchor="end" fill="var(--ink)">CVP の直線</text><text x="404" y="112" text-anchor="end" fill="var(--ink)">実際の売上</text><text x="420" y="280" text-anchor="end" fill="var(--quiet)">数量</text></svg>`,
          caption: '関連範囲の中では、実際の線は直線とほぼ重なる。範囲の外では値引きや仕入れの割引、固定費の増加で、直線から離れていく。'
        },
        {
          title: '関連範囲と固定費',
          paras: ['固定費が一定なのは関連範囲の中だけ。ボトル工場の機械で作れるのが 12,000個までなら、それを超えると機械をもう1台借りる費用がかかる。固定費は階段のように上がる（段階固定費、stepped fixed cost）。', '例: ここでは値引きはなく、売価 $25・変動費 $15 のままとする。12,000個までは固定費 $60,000、超えると $75,000。13,000個売ると、利益 ＝ $10 × 13,000 − $75,000 ＝ $55,000。固定費を $60,000 のままにすると $70,000 と多く見込んでしまう。'],
          note: { kind: 'warn', text: '「1個あたりの固定費が一定」は前提ではない。一定なのは総額で、1個あたりは作る数で変わる（$60,000 ÷ 6,000個 ＝ $10、÷ 8,000個 ＝ $7.50）。試験ではまちがった前提を選ぶ問題でよく出る。' }
        },
        {
          title: '在庫と全部原価計算',
          paras: ['CVP は、作った分は全部その期に売れると考える。生産量と販売量が違うと、全部原価計算（absorption costing）では固定製造間接費の一部が在庫に入り、次の期へ繰り越される。', 'すると、その期の費用になる固定費が変わり、報告される利益が CVP の予測とずれる。CVP の利益は、固定費を全部その期の費用にする直接原価計算（marginal costing）の利益と同じ考え方になる。']
        },
        {
          title: 'なぜ？ それでも CVP を使う',
          paras: ['現実は完全な直線ではない。それでも、短い期間で、ふだんの活動量の近く（関連範囲の中）なら、直線はかなり良い近似になる。', 'しかも計算が速く、「売価を上げたら」「固定費が増えたら」をすぐ比べられる。だから CVP は、細かい予測ではなく短期の判断の目安として使う。前提が大きく崩れる場面では、数字をそのまま信じない。']
        },
        {
          title: '覚えるのは3つ',
          numbered: ['1単位の売価と1単位の変動費は一定、固定費は関連範囲の中で総額が一定（売上も原価も直線）', '製品は1種類か組み合わせが一定、生産量 ＝ 販売量、原価と売上を動かすのは販売量だけ', '前提が崩れると答えはずれる。CVP は短期・関連範囲の中の目安として使う'],
          words: [['CVP analysis (cost-volume-profit analysis)', '', '原価・営業量・利益の分析'], ['assumption', 'アサンプション', '前提'], ['relevant range', 'レレバント・レンジ', '関連範囲'], ['sales mix', 'セールス・ミックス', '販売の組み合わせ'], ['linear', 'リニア', '直線的な'], ['stepped fixed cost', '', '段階固定費']]
        }
      ],
      quiz: [
        { q: 'Which of the following is NOT an assumption of cost-volume-profit (CVP) analysis?', choices: ['The selling price per unit is constant at all levels of activity', 'Variable cost per unit is constant at all levels of activity', 'The volume of production equals the volume of sales', 'Fixed costs per unit remain constant at all levels of activity'], answer: 3, explain: '1個あたりの固定費は、数量が増えると小さくなる。CVP の前提は「固定費の総額が関連範囲の中で一定」。ほかの3つ（売価一定・変動費単価一定・生産量 ＝ 販売量）はどれも CVP の前提。' },
        { q: 'A company gives customers a discount on the selling price of every unit when they buy in large quantities. Which assumption of CVP analysis does this break?', choices: ['Fixed costs are constant in total within the relevant range', 'Selling price per unit is constant at all levels of activity', 'Production volume equals sales volume', 'Variable cost per unit is constant at all levels of activity'], answer: 1, explain: '数量が多いと売価が下がるので「1単位の売価は一定」が崩れ、売上高線が直線でなくなる。ほかの選択肢は固定費・在庫・変動費についての前提。変動費単価の前提が崩れるのは、会社が材料を大量に買って割引を受けるとき。' },
        { q: 'Which of the following statements about CVP analysis is true?', choices: ['It can be used without splitting costs into fixed and variable elements', 'It assumes that total fixed costs rise in proportion to output', 'It is most reliable over the short term and within the relevant range', 'It assumes that the sales mix of several products changes with volume'], answer: 2, explain: '直線の近似が当てはまるのは、短期で関連範囲の中。原価を固定費と変動費に分けることは CVP の前提そのもの。固定費の総額は一定、組み合わせも一定と考えるので、残りの2つは逆。' },
        { q: '今期は作った数が売った数より多く、在庫が増えた。会社は全部原価計算で利益を報告している。CVP で予測した利益と比べると、報告された利益はどうなりやすい？', choices: ['固定製造間接費の一部が在庫に入るので、CVP の予測より大きくなる', '固定製造間接費の一部が在庫に入るので、CVP の予測より小さくなる', '在庫は利益に関係しないので、必ず一致する', '変動費が在庫に入らないので、CVP の予測より小さくなる'], answer: 0, explain: '在庫が増えると、全部原価計算では固定製造間接費の一部が期末在庫に入り、次の期へ繰り越される。今期の費用が減るので、固定費を全部その期の費用にする CVP（直接原価計算と同じ）の予測より利益が大きくなる。変動費はどちらの方法でも在庫に入る。' },
        { q: 'ボトル工場（売価 $25、変動費 $15 は一定）。12,000個までは固定費 $60,000 だが、超えると機械をもう1台借りて固定費が $75,000 になる。12,500個売るときの利益は？', type: 'number', answer: 50000, unit: '$', explain: '12,500個は 12,000個を超えるので固定費は $75,000。利益 ＝ $10 × 12,500 − $75,000 ＝ $125,000 − $75,000 ＝ $50,000。固定費を $60,000 のままにすると $65,000 と予測してしまう。関連範囲を超えると、固定費の総額は一定でなくなる。' }
      ]
    }
  ],
  cards: [
    { id: 'M142-1', lesson: 'M142', q: '売価が上がると（数量は同じ）損益分岐点と安全余裕は？', a: '1個の貢献利益が増えるので損益分岐点は下がり、安全余裕は増える' },
    { id: 'M142-2', lesson: 'M142', q: '1単位の変動費が上がると？', a: '貢献利益が減るので損益分岐点は上がり、安全余裕は減る' },
    { id: 'M142-3', lesson: 'M142', q: '固定費が増えると？', a: '貢献利益は同じ。割られる固定費が大きくなり、損益分岐点が上がる' },
    { id: 'M142-4', lesson: 'M142', q: '売価が 10% 上がると、貢献利益も 10% 増える？', a: 'いいえ。売価の増加額がまるごと増える（$25→$27.50 なら $10→$12.50）' },
    { id: 'M142-5', lesson: 'M142', q: '変化の問題を解く順番は？', a: '新しい貢献利益 → 新しい損益分岐点 → 新しい予算の販売量で安全余裕' },
    { id: 'M142-6', lesson: 'M142', q: '売価が変わると C/S 比率は？', a: '変わる。新しい貢献利益 ÷ 新しい売価で出し直す' },
    { id: 'M143-1', lesson: 'M143', q: '損益分岐図で損益分岐点はどこ？', a: '売上高線と総原価線が交わる点' },
    { id: 'M143-2', lesson: 'M143', q: '損益分岐図で、交点より右の2本の線の間は？', a: '利益（交点より左なら損失）' },
    { id: 'M143-3', lesson: 'M143', q: 'P/V 図で利益線が縦軸と交わる点は？', a: '売上ゼロのときの損失。大きさは固定費と同じ' },
    { id: 'M143-4', lesson: 'M143', q: 'P/V 図の線の傾きは？', a: '1個の貢献利益。横軸が売上高なら C/S 比率' },
    { id: 'M143-5', lesson: 'M143', q: '貢献利益型の損益分岐図で貢献利益が見える場所は？', a: '売上高線と変動費線の間' },
    { id: 'M143-6', lesson: 'M143', q: '固定費が増えると P/V 図の線は？', a: '傾きは同じで下へ平行に動き、損益分岐点が右へ動く' },
    { id: 'M144-1', lesson: 'M144', q: 'CVP の前提: 売価と変動費は？', a: '1単位の売価も1単位の変動費も、販売量にかかわらず一定' },
    { id: 'M144-2', lesson: 'M144', q: 'CVP の前提: 固定費は？', a: '関連範囲の中で総額が一定。1個あたりは数量で変わる' },
    { id: 'M144-3', lesson: 'M144', q: 'CVP の前提: 在庫と製品は？', a: '生産量 ＝ 販売量。製品は1種類か、組み合わせ（sales mix）が一定' },
    { id: 'M144-4', lesson: 'M144', q: '関連範囲（relevant range）とは？', a: '固定費の総額や変動費単価が一定と言える活動量の幅' },
    { id: 'M144-5', lesson: 'M144', q: 'なぜ CVP には前提が要る？', a: '売上と原価を直線にするため。直線なら割り算1回で答えが出る' },
    { id: 'M144-6', lesson: 'M144', q: '大口の値引きはどの前提を崩す？', a: '1単位の売価は販売量にかかわらず一定、という前提' },
    { id: 'M144-7', lesson: 'M144', q: '関連範囲を超えて生産すると固定費は？', a: '機械の追加などで階段のように上がる（段階固定費）。超えた後は新しい固定費で利益を計算し直す' }
  ]
});
