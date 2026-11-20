# ACCA FA/K1 入門アプリ 執筆ガイド（全ライター共通）

学習者: Keita。会計ゼロ、34歳、1日15〜20分、スマホで学ぶ。物忘れが多く理解に時間がかかると本人が言っている。目標は ACCA FA（2027年7月以降は後継の K1）に合格すること。教材だけで公式試験見本に合格できる水準を目指す。後で「この教材だけを使う」条件で公式試験を解かせて検証するので、試験に出る知識は全部レッスンの中で明示的に教えること。

## 絶対ルール
- 公式の試験見本（work/acca-research/exam/, work/acca-research/sitting/, work/acca-research/official/cbe*, work/acca-research/official/k1spec/, *specimen* という名前のファイル）は開かない。読んでよいのはシラバス（work/acca-research/official/fa_syllabus_s26_j27.txt と k1_syllabus_jul27_aug28.txt）、コース計画（work/acca-research/coverage_audit.md の「4. コース全体の順番案」）、このガイド、glossary、既存の content.js。
- 担当のレッスンだけを書く。他のユニットのファイルは触らない。
- 内容は ACCA FA の考え方（IFRS ベース、英語の試験用語）に正確に合わせる。日本の簿記の慣行と違う点は ACCA に従う（例: 売掛金は trade receivables、貸倒れは irrecoverable debts、貸倒引当金は allowance for receivables、早期支払割引は IFRS 15 の変動対価として扱う）。迷ったらシラバスの文言に戻る。
- 金額や計算はすべて自分で検算する。クイズの正解・解説・カードの答えが本文と一致していること。

## 1レッスンの型（スライドの順番）
1. 身近なたとえ（給料、家賃、家とローン、スマホ代、コンビニ、引越しなど生活の例。金額は円でよい）
2. お店・会社の例で確かめる（ACCA に合わせて $。たこ焼き屋など同じお店を使い回してよい）
3. 図や表（構造があるものは図にする）
4. 「なぜ？」: そのルールがある理由、本質。暗記ではなく理解させる
5. 計算するレッスン（計画表で ✎）は、例題を必ず入れる: example スライドで問題 → 手順 → 答え。さらに類題をクイズに入れる
6. よくある間違い（note, kind: 'warn'）
7. 覚えるのは3つだけ（numbered、ちょうど3つ）
8. 英単語（words、試験に出る英語の用語）

スライドは 6〜11 枚。1枚はスマホ1画面で読める量（本文は合計 120〜200 字が目安、長い説明は2枚に分ける）。

## クイズ（lesson.quiz）
- 4〜6問。1問は前のレッスンとのつながりを問う、でもよい。
- 少なくとも2問は ACCA 本番と同じ英語の問題（数字・選択肢とも英語）。
- 計算レッスンは少なくとも1問を type: 'number'（数値入力）にする。
- ひっかけの選択肢は、初心者が実際にやりがちな間違いから作る（借方と貸方の逆、足し算と引き算の逆など）。explain でなぜそれが間違いかも書く。

## 復習カード（cards）
- 1レッスンにつき 4〜7 枚。定義、ルール、「なぜ？」、計算の手順、英単語を混ぜる。
- 答えは短く（60字以内が目安）。

## データ形式
各ユニットは work/acca-study/content/uNN.js（NN は2桁のユニット番号）に書く。中身は次の形だけ（ほかのコードは書かない）:

```js
(window.ACCA_UNITS = window.ACCA_UNITS || []).push({
  unit: 5,                // ユニット番号（数値）
  part: 3,                // 部の番号（K1 拡張は 21）
  partTitle: '売上・仕入・現金',
  lessons: [ /* レッスン */ ],
  cards: [ /* 復習カード */ ]
});
```

レッスン:
```js
{
  id: 'L21',              // 計画の番号。L01〜L166、K1 拡張は X01〜X11
  no: 21,                 // 表示用の番号（K1 拡張は 'X1' のような文字列）
  title: '掛け売上・掛け仕入の仕訳',
  goal: '…できるようになる',
  minutes: 12,
  recall: true,           // L01 だけ false
  exam: 'both',           // 'both' | 'fa'（FA のみ、K1 では出ない）| 'k1'（K1 のみ）
  outcomes: ['D1(a)'],    // 計画表のアウトカム ID（FA。K1 拡張は 'K1:C2(a)' のように）
  slides: [ /* スライド */ ],
  quiz: [ /* 問題 */ ]
}
```

スライドのフィールド（すべて任意。1枚にいくつ組み合わせてもよいが、1画面に収まる量にする）:
- title: 見出し
- paras: ['段落', ...]
- list: ['箇条書き', ...]
- numbered: ['番号付き', ...]
- after: リストの後に続ける段落
- formula: 'assets ＝ capital ＋ liabilities'（強調ボックス。式やルールの1行）
- note: { kind: 'warn' | 'tip', text: '…' }（warn＝よくある間違い、tip＝コツ）
- table: { caption: '…', head: ['項目', '$'], rows: [['売上', '1,000'], ...], total: ['合計', '1,000'] }（列は最大3。財務諸表の抜粋などに使う。数字は文字列で、桁区切りあり）
- tAccount: { name: 'Cash', debit: [['Capital', '1,000']], credit: [['Rent', '200']], balance: { side: 'credit', label: 'Balance c/d', amount: '800' } }（T勘定。balance は任意）
- journal: [ { side: 'Dr', account: 'Rent expense', amount: '200' }, { side: 'Cr', account: 'Cash', amount: '200' } ]（仕訳。勘定科目は英語、必要なら '（家賃）' のように日本語を添える）
- example: { problem: '問題文', steps: ['手順1', '手順2', ...], answer: '答え' }（例題。アプリは手順を1つずつタップで見せる）
- svg: '<svg …>…</svg>'（図。下の図のルール参照）
- caption: 図の下の説明
- words: [['english term', 'カタカナ読み（なければ空文字）', '意味'], ...]

問題:
```js
{ q: '問題文', choices: ['…', '…', '…', '…'], answer: 1, explain: '…' }   // 選択式。answer は 0 始まり
{ q: '問題文', type: 'number', answer: 1250, unit: '$', explain: '…' }     // 数値入力。answer は数値（桁区切りなし）。unit は '$' / '%' / '日' / '' など
```

カード:
```js
{ id: 'L21-1', lesson: 'L21', q: '…', a: '…' }   // id は「レッスンid-連番」
```

## 図（svg）のルール
- viewBox="0 0 440 H"（幅は 440 固定、高さ H は自由）。width/height 属性は付けない。role="img" と aria-label を付ける。
- 色は CSS 変数だけ: 文字 var(--ink)、薄い文字 var(--quiet)、線 var(--edge)、強調 var(--accent)、強調の塗り var(--accent-bg)。16進カラーや色名は使わない。強調は1つの図に1か所。
- 文字は font-size 14 以上（補足の英語は 12.5 まで可）。日本語1文字の幅はフォントサイズとほぼ同じ（16px なら16）。行がはみ出さないように数えてから書く。左右 20 の余白を残す。
- 文字列はダブルクオートの属性で書き、JS 文字列はバッククオート（テンプレートリテラル）で囲む。${ は使わない。
- 図は「見て分かる」ためだけに使う。表で十分なものは table、T勘定は tAccount、仕訳は journal を使う。

## 文体
- 本文は普通のやさしい日本語（だ・である調ではなく、「〜になる」「〜する」のような普通の言い切り）。既存の content.js（L01, L02）の調子に合わせる。
- 1文は短く。専門用語は初出で「日本語（English）」とセットで出す。
- 絵文字は使わない。
- 用語の訳は glossary.md に合わせる。

## 自己チェック（提出前に必ず）
- `node work/acca-study/validate.js work/acca-study/content/uNN.js` がエラー0。
- 例題・クイズ・カードの数字を全部検算した。
- 担当アウトカムを、試験問題に答えられる深さで全部教えた（シラバスの文言を読み直して照合）。
