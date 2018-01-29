---
title: おみくじ占いアプリ
weight: 140
---

おみくじは、英語で 「 ランダムフォーチュン 」 と呼びます。Monaca
でのアプリ開発も、Web ページの開発と同じく、HTML と JavaScript
を使用します。JavaScript
は、簡素な構文と関数群でプログラムを構築できるスクリプト言語です。他の言語と比較すると、スマートフォーン向けの開発のときに、多く使用されています。

{{<import pid="5923a1c28034511f6d8a8fe3" title="Omikuji Fortune Telling App">}}

**テスト環境**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/23-omikuji/www/index.html">}}

## ファイル構成                                           

{{<figure src="/images/sampleapp/omikuji/1.png">}}                                

ファイル | 説明
--------------|-----------------------------------
`index.html` | スタート画面のページ           
`images/*.png` | アプリで使用する画像ファイル   

HTML の解説
-----------

HTML の &lt;body&gt; 内の記述は、次のとおりです。

{{<highlight html>}}
<div id="hako">
    <img id="saisyo" src="images/omikuji-box.png" />
    <img id="kekka" style="display : none;"/>
</div>
<div id="bottombar">
    <img id="button" src="images/omikuji-btn-hajimeru.png" onclick="omikuji()">
</div>
{{</highlight>}}

`1～4` 行目と `5～7` 行目を `div` タグでそれぞれ囲み、ID として、`hako` と
`bottombar` をそれぞれ設定します。これらの ＩＤ
は、後述するスタイルシートで参照されます。

`div`
タグは、他のタグを括り、グループ化するときに使用するタグです。サンプルでは、
`hako` の ID を持つ `div` タグに、さらに、 `saisyo` と `kekka` の ID
を持つ `img` タグが配置されています。 `img`
タグは画像を表示するときに使用するタグです。おみくじ箱 ( 起動直後に表示
) とおみくじ結果の画像を表示するときに使用しています。

おみくじ箱の画像を起動時に表示するため、ID が `saisyo` の `img`
タグに、`src` 属性を使用して、画像を指定しています。一方、 `kekka` の
`img` タグには、 `src` 属性はなく、代わりに `style=\"display: none\"`
という属性を指定しています。 この記法は、後述するスタイルシートの定義を
HTML 内に組み込んだもので、ファイルを読み込んだ段階では 「 表示をしない
」 ことを意味します。占い結果の画像は、後述する JavaScript
プログラムを使用して表示します。

同様に、`bottombar` を ID に指定した `div` タグでも `img`
タグを囲っています。また、 `src` 属性に加えて、 `onclick`
属性も記述します。 `onclick`
属性には、画像をクリックまたはタップしたときに呼び出す JavaScript
コードを指定します。このサンプルでは、おみくじ開始ボタンをタップしたときに、JavaScript
の `omikuji()` 関数を呼び出します。 `omikuji()`
関数を使用し、おみくじ結果を計算して、結果を画面に表示します。

スタイルシートの解説
--------------------

スタイルシートは、 `style` タグを使用して、HTML の `head`
タグ内にインクルード ( include ) されます。次に例を示します。それぞれ、
`body` タグに適用するスタイル、 `hako` の ID
を持つタグに適用するスタイル、 `bottombar` の ID
を持つタグに適用するスタイルとなります。

{{<highlight css>}}
body {
    background: url("images/omikuji-bg.png") 100% 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}
#hako {
    position: absolute;
    width: 100%;
    top: 10%;
}
#bottombar {
    position: absolute;
    bottom: 30px;
    width: 100%;
}
{{</highlight>}}

`body`
タグに適用するスタイルとして、`background`、`margin`、`padding`、`text-align`
の 4 つのプロパティーを使用します。 `background`
プロパティーは、背景を指定するもので、今回は、 `body` タグ ( ページ全体
)　に対して、images/omikuji-bg.png を画面全体に引き延ばして表示します。
`margin` と `padding`
プロパティーでは、余白を指定します。今回は、いずれも `0`
を指定しているため、余白はありません。 `text-align`
プロパティーは、行揃えを指定します。今回は、中央寄せになるように指定しています。

上述の 「 HTML の解説 」 のとおり、おみくじ箱と結果画像の表示用の `div`
タグと 「 はじめる 」 ボタンを表示するための `div`
タグを識別するために、それぞれ、`#hako` と `#bottombar`
を使用しています。また、今回のスタイルシートの定義では、`position`、`bottom`、`top`、`width`
プロパティーを使用しています。 `position` プロパティーに `absolute`
を指定すると、絶対座標を使用した配置になります。今回の場合、いずれも親タグである
`body` タグに対する座標となります。 `bottom` と `top`
プロパティーを使用して、下と上から始まる位置を、それぞれ指定します。

{{<note>}}
  このアプリでは、外部のスタイルシート (  <code>components/loader.css</code> ) ファイルを参照しています。こちらのファイルは、Monaca プラグインで読み込んだライブラリーが使用するスタイルシートを記述しておくファイルです。今回のサンプルでは、スタイルシートを使用する Monaca プラグインを使用していないため、特に意味はありません。
{{</note>}}

JavaScript の解説
-----------------

JavaScript コードを解説します。

{{<highlight javascript>}}
function omikuji (){
  var dice = Math.floor(Math.random() * 3);
  var image_name;
  if (dice == 0) {
      image_name = "omikuji-daikichi.png";
  } else if  (dice == 1) {
      image_name = "omikuji-chuukichi.png";
  } else {
      image_name = "omikuji-hei.png";
  }

  document.getElementById("saisyo").style["display"] = "none";
  document.getElementById("kekka").src = "images/" + image_name;
  document.getElementById("kekka").style["display"] = "inline";
  document.getElementById("button").src = "images/omikuji-btn-yarinaosu.png";
}
{{</highlight>}}

`1～16` 行目は、`omikuji` 関数の定義です。\[ はじめる \]
ボタンをタップすると、この関数が実行されます。2 行目では `Math.floor`
関数と `Math.random` 関数を組み合わせ、0 から 3 までの乱数を生成し、
`dice` 変数に代入します。4～11 行目では、 `dice`
変数の値に応じて、画像ファイル名を、 *image\_name* 変数に代入します。

`12～15` 行目では、 `document.getElementById`
関数を使用して、スタイルシートの変更と画像の差し替えを行います。この処理は、DOM
( Document Object Model ) 操作と呼ばれ、HTML
の内容を、動的に書き換える仕組みです。次の例では、 `kekka` の ID
を持つ要素 ( HTML タグ ) の `src` 属性を変更しています。

{{<highlight javascript>}}
document.getElementById("kekka").src = "images/" + image_name;
{{</highlight>}}

上述したように、`image_name`
変数には、おみくじ結果を反映した画像ファイル名が指定されるため、この記法を使用して、おみくじ結果のイメージを、画面上に表示できます。
