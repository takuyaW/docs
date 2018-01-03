---
title: メモ帳アプリ
weight: 60
---

localStorage を使用して、メモ帳アプリを作成するサンプルアプリです。

{{<import pid="5923c5a6013eb09f3fb07bc7" title="Memo Application">}}

**テスト環境** 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/4-jqm-memo/www/index.html">}}    
                                                                                                 
## ファイル構成                                                                                   

ファイル | 説明 
------|-------------
`index.html` | スタート/ホーム画面のページ
`js/memo.js` | localStorage 内のデータを処理する JavaScript ファイル
`js/app.js` | アプリ内でさまざまな処理を行う JavaScript ファイル

必要な JS/CSS コンポーネント
----------------------------

-  `jQuery`          
-  `jQuery Mobile`   

HTML の解説
-----------

このサンプルアプリのユーザーインターフェイスには、jQuery Mobile
を使用しています。jQuery Mobile では、複数のページを 1 つの HTML
ファイル内にまとめて記述できます。このアプリでも、 index.html
内に、すべてのページ ( トップページ、メモ追加ページ、詳細ページ )
を定義しています。`div` タグの `data-role` 属性に、`page`
を指定して、ページを定義します。jQuery Mobile では、このように、
`data-role` 属性を使用して、各タグの役割を設定します。 `data-role`
には、他にも、`header`、`content`、`listview` などを設定できます。jQuery
Mobile のタグとコンポーネントに関しては、 [jQuery Mobile Demo ( 英語ページ )](http://demos.jquerymobile.com/) をご確認ください。

`index.html` ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) は ...

{{<highlight html>}}
<body>
  <!-- TOP Page -->
  <div data-role="page" id="TopPage">
    <header data-role="header" data-position="fixed">
      <h1>Monaca Memo</h1>
      <a href="#AddPage" data-icon="plus" class="ui-btn-right">Add</a>
    </header>
    <section data-role="content">
      <ul id="TopListView" data-role="listview"
        data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-split-icon="delete">
      </ul>
    </section>
  </div>
  ...
</body>
{{</highlight>}}

次のスクリーンショット ( スタート/ホーム画面のページ )
のようになります。こちらのページから、メモの追加、閲覧、削除を行えます。

{{<figure src="/images/sampleapp/memo_application/memo_3.png" width="300">}}   

`index.html` ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) は ...

{{<highlight html>}}
<body>
  ...
  <!-- Add Memo Page -->
  <div data-role="page" id="AddPage">
    <header data-role="header" data-position="fixed">
      <a data-role="button" data-rel="back" data-icon="back">Back</a>
      <h1>Add Memo</h1>
    </header>
    <section data-role="content">
      <label for="Memo">Memo:</label>
      <textarea id="Memo"></textarea>
      <a data-role="button" data-icon="check" id="SaveBtn">Save</a>
    </section>
  </div>
  ...
</body>
{{</highlight>}}

次のスクリーンショット ( メモ追加のページ )
のようになります。こちらのページから、メモの追加と保存を行えます。

{{<figure src="/images/sampleapp/memo_application/memo_2.png" width="300">}} 

`index.html` ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) は ...

{{<highlight html>}}
<body>
  ...
  <!-- Detail Page -->
  <div data-role="page" id="ShowPage">
    <header data-role="header" data-position="fixed">
      <a data-role="button" data-rel="back" data-icon="back">Back</a>
      <h1></h1>
    </header>
    <section data-role="content">
      <p></p>
    </section>
  </div>
</body>
{{</highlight>}}

次のスクリーンショット ( 詳細閲覧ページ )
のようになります。こちらのページから、各メモの詳細を閲覧できます。

{{<figure src="/images/sampleapp/memo_application/memo_5.png" width="300">}}

JavaScript の解説
-----------------

### app.js

`app.js` は、アプリ内のさまざまな処理を行う JavaScript ファイルです。

アプリを起動すると `initTopPage()` 関数を直ちに呼び出します。この関数を使用して、トップページ ( ホーム画面のページ ) の初期化を行います。ここでの初期化処理とは、保存されているメモを取得して、一覧で表示することです ( 取得処理は、`memo.js` ファイル内で定義されている `getMemoList()` 関数を経由して行われます )。アプリの初回起動時など、既存のメモがない場合には、「 `No memo found` 」 が表示されます （ 下のスクリーンショットを参照のこと ）。

{{<figure src="/images/sampleapp/memo_application/memo_1.png" width="300">}}

この関数のソースコードを次に記します。

{{<highlight javascript>}}
...
///// Initialize top page
function initTopPage() {
    $("#TopListView").empty();

    var list = getMemoList();
    for (var i in list) {
        var memo = list[i];
        var d = new Date(memo.time);
        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

        $li = $("<li><a href='#' class='show'><h3></h3><p></p></a><a href='#' class='delete'>Delete</a></li>");
        $li.data("id", memo.id);
        $li.find("h3").text(date);
        $li.find("p").text(memo.text);
        $("#TopListView").prepend($li);
    }
    if (list.length == 0) {
        $li = $("<li>No memo found</li>");
        $("#TopListView").prepend($li);
    }
    $("#TopListView").listview("refresh");  // Call refresh after manipulating list
}
...
{{</highlight>}}

トップページ上で {{<guilabel name="+Add">}} ボタンをクリックすると、Add Memo ( メモ追加 )
ページを表示します。メモを入力して {{<guilabel name="Save">}} ボタンをクリックすると
`onSaveBtn()` 関数を呼び出します。この関数内に記述された `addMemo()`
関数 ( `memo.js` ファイルで定義 ) を経由して、localStorage
に入力テキストが保存されます。そして、更新されたメモの一覧をトップページ上に表示します。この関数のソースコードを次に記します。

{{<highlight javascript>}}
///// Save memo and return to top page
function onSaveBtn() {
    var text = $("#Memo").val();
    if (text != '') {
        // Save to local storage
        addMemo(text);
        // Clear form
        $("#Memo").val("");
        // Initialize top page
        initTopPage();
    }
    $.mobile.changePage("#TopPage", { reverse: true });
}
{{</highlight>}}

トップページ上で一覧上のアイテムをクリックすると、 `onShowLink()` 関数 ( `memo.js` ファイルで定義 ) を呼び出します。この関数を使用して、選択したアイテムの詳細閲覧ページとタイトル ( または、内容 ) を表示します。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/memo_application/memo_5.png" width="300">}}

この関数のソースコードを次に記します。

{{<highlight javascript>}}
///// Move to detail page
function onShowLink() {
    var $li = $(this).parent();
    var memoTitle = $li.find("h3").text();
    var memoHtml = $li.find("p").html().replace(/\n/g, "<br>");

    $("#ShowPage h1").text(memoTitle);
    $("#ShowPage p").html(memoHtml);
    $.mobile.changePage("#ShowPage");
}
{{</highlight>}}

トップページ上で、各アイテムの右端に表示された delete
アイコンをクリックすると、一覧上のアイテムを削除できます。アイコンをクリックすると、
`onDeleteLink()` 関数を呼び出します。この関数を使用して、削除を続行するかユーザーに確認するメッセージを表示します
( 下のスクリーンショットを参照のこと ) 。{{<guilabel name="OK">}} をクリックすると、`deleteMemo()` 関数 ( `memo.js` ファイルで定義 ) を経由して、localStorage から選択したアイテムを削除します。そして、更新したメモの一覧を、トップページ上に表示します。

{{<figure src="/images/sampleapp/memo_application/memo_4.png" width="300">}}

この関数のソースコードを次に記します。

{{<highlight javascript>}}
///// Delete memo
function onDeleteLink() {
    if (!confirm("Are you sure to delete this memo?")) {
      return;
    }
    var $li = $(this).parent();
    var id = $li.data("id");
    deleteMemo(id);

    initTopPage();

    // Return to top
    $.mobile.changePage("#TopPage", { reverse: true });
}
{{</highlight>}}

### memo.js

`memo.js` ファイルは、localStorage に対する一連のデータ処理を行う
JavaScript ファイルです。このファイル内で、次の 4
つの関数を定義しています。

1.  `getMemoList()`: localStorage に保存されたメモの一覧を取得します。
2.  `saveMemoList()`: メモの一覧を localStorage に保存します。
3.  `AddMemo()`: 新規のメモを一覧に追加して、localStorage
    に新規の一覧を保存します。このとき、 `saveMemoList()`
    関数を使用します。
4.  `deleteMemo()`: メモの一覧から指定されたメモを削除して、localStorage
    に削除後の一覧を保存します。このとき、 `saveMemoList()`
    関数を使用します。

