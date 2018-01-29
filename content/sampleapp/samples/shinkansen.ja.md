---
title: 電車図鑑アプリ
weight: 110
---

このサンプルアプリは、東海道から東北区間で運行されている車両を表示する電車図鑑です。

{{<import pid="5923ccc5ff2af20e3acb2dd1" title="Train Catalog App">}}

**テスト環境**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/20-train-catalog/www/index.html">}}
                                                                              
## ファイル構成           

{{<figure src="/images/sampleapp/shinkansen/3.png">}}                                                                    

ファイル | 説明
--------|-------------------
`index.html`     | スタート画面のページ 
`css/style.css`  | アプリのスタイルシート
`images/*.jpg`   | アプリで使用する画像ファイル 

必要な JS/CSS コンポーネント
----------------------------

-  `jQuerymobile`   

HTML の解説
-----------

このサンプルでは、Monaca のネイティブ関数を使用するので、複数の HTML
ページを用意しています。 `index.html` ファイル内の記述 ( HTML の
&lt;body&gt; 内 ) は、次のとおりです。

{{<highlight html>}}
<div data-role="content">
  <ul data-role="listview">
    <li data-role="list-divider">Tokaido Shinkansen Trains</li>
    <li><a href="#" onclick="showDetail('0kei', 'Series 0')">Series 0</a></li>
    <li><a href="#" onclick="showDetail('300kei', 'Series 300')">Series 300</a></li>
    <li><a href="#" onclick="showDetail('700kei', 'Series 700')">Series 700</a></li>
    <li><a href="#" onclick="showDetail('n700kei', 'Series N700')">Series N700</a></li>
  </ul>
  <p id="attribution">Photos by <a href="#" onclick="monaca.invokeBrowser('http://www.flickr.com/photos/kimuchi583/')">kimuchi583</a></p>
</div>
{{</highlight>}}

このサンプルでは、jQuery Mobile
を使用して、一覧画面を表示します。一覧画面の各行をタップすると、
`showDetail`
関数を呼び出します。この関数で、ページの遷移を行います。また、 `a`
タグの `onclick` 属性内で、 `monaca.invokeBrowser`
関数を使用しています。この関数は、ブラウザーを起動させ、指定した URL
を表示します。

JavaScript の解説
-----------------

トップ画面の JavaScript を解説します。

{{<highlight javascript>}}
function showDetail(filename, trainname) {
  monaca.pushPage("detail.html", {}, {filename : filename, trainname : trainname})
}
{{</highlight>}}

`showDetail` 関数は、一覧の行をタップすると呼び出されます。2
つの引数を取り、画像ファイル名 ( `filename` 変数 ) と列車名 (
`trainname` 変数 ) の変数にそれぞれ代入されます。

`monaca.pushPage`
関数を使用して、次のページを表示します。この関数では、Monaca
のネイティブ関数を使用した、ページの表示処理と次ページへ渡す変数 (
第三引数 ) の定義をしています。次ページへ渡す値は、 `monaca.queryParams`
変数を使用して取得します。
