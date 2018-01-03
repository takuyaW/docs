---
title: TODO 管理アプリ
weight: 100
---

TODO 一覧に、TODO を追加するアプリです。

{{<import pid="5923a0bf013eb0662bca5a15" title="TODO App">}}

**テスト環境**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/19-todo-app/www/index.html">}}                              
                                                                                            
## ファイル構成                                                                              

ファイル | 説明
--------------|-----------------------------------
`index.html` | スタート画面のページ           
`js/app.js` | アプリで使用する JavaScript ファイル

## 必要な JS/CSS コンポーネント

- `jQuerymobile`

## HTML の解説

HTML の &lt;body&gt; 内の記述は、次のとおりです。

{{<highlight html>}}
<div data-role="page" id="list-page">
  <div data-role="header" data-position="fixed">
    <h1>Monaca TODO</h1>
    <a href="#add-page" data-icon="add" class="ui-btn-right">Add</a>
  </div>
  <div data-role="content">
    <ul data-role="listview" data-inset="true" id="todo-list"></ul>
  </div>
</div>
<div data-role="page" id="add-page">
  <div data-role="header">
    <h1>Add TODO</h1>
  </div>
  <div data-role="content">
    <input id="todo-title" type="text" placeholder="TODO Title">
    <textarea id="todo-body" style="height: 8em" placeholder="Description"></textarea>
    <input id="add-button" type="button" value="Save" onclick="addTodo()">
    <input id="add-button" type="button" value="Picture And Save" onclick="addTodoPicture()"  data-theme="b">
  </div>
</div>
{{</highlight>}}

このサンプルでは、jQuery Mobile を使用するため、HTML
の記法もそれに従ったものとなります。 `data-role`、`data-position` など、`data-` で記述が始まる属性は、jQuery Mobile 特有のものです。

jQuery Mobile では、複数のページを、1 つの HTML
ファイル内にまとめて記述できます。このアプリでも、メモ一覧画面とメモ追加画面の両方を、
`index.html` の中で定義しています。 `data-role` が `page` となっている
`div` タグが、1 ページを構成します。このように `data-role`
属性を使って、 `div タグ` 毎に、役割を決定できます。`data-role`
には、他にも、`header`、`content`、`listview` を指定できます。

jQuery Mobile のタグとコンポーネントについては、 [jQuery Mobile デモ](http://jquerymobile.com/demos/1.2.0/) をご確認ください。

JavaScript の解説
-----------------

JavaScript コードを解説します。

{{<highlight javascript>}}
monaca.viewport({ width: 320 });
function addTodoPicture() {
  navigator.camera.getPicture(addTodo,
  function() {
    alert("Failed to get camera.");
  }, {
    quality : 50,
    destinationType : Camera.DestinationType.FILE_URI,
    targetWidth : 100,
    targetHeight : 100
  });
};
function addTodo(camera_url) {
  var title = $("#todo-title").val();
  var body = $("#todo-body").val();
  var img_tag = "";
  if (camera_url) {
    img_tag = "<img src='" + camera_url + "'>";
  }
  $.mobile.changePage($("#list-page"));
  $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
  $("#todo-list").listview('refresh');
};
{{</highlight>}}

`addTodoPicture` と `addTodo` の 2
つの関数を定義しています。前者は写真撮影とデータの保存を行い、後者はデータの保存のみ行います
( コードを参照のこと )。

`addTodoPicture` 関数では、`navigator.camera.getPicture` 関数を使用して、写真撮影を行います。この関数 ( `getPicture` ) は、基本 Cordova プラグイン提供のものです。カメラの起動・撮影に成功した場合、`*addTodo`
関数を実行し、失敗の場合には、警告メッセージを表示します。また、撮影オプションとして、画像サイズの指定および戻り値の型を指定しています。

`addTodo` 関数は、 `camera_url` を引数として取ります。`navigator.camera.getPicture`
関数を呼び出し、撮影が成功した場合、画像の参照先がこの引数に格納されています。

jQuery ライブラリー群を使用することにより、これらの関数内で DOM
操作を簡単に行えます。たとえば、次のコードでは、 `todo-title` の ID
を持つ要素の値を取得して、 `title` 変数に代入しています。

{{<highlight javascript>}}
var title = $("#todo-title").val();
{{</highlight>}}

`14～19` 行目で、取得した値を読み取り、`title`、`body`、`img_tag`
変数に、それぞれ代入しています。次に、`$.mobile.changePage`
関数を使用して、次のページに遷移し、一覧に行を追加しています。最後に、一覧を再描画し、プログラムを終了します。
