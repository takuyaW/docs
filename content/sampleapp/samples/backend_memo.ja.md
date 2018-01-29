---
title: バックエンド メモ帳アプリ
weight: 80
---

Monaca バックエンド API を使用するメモ帳アプリを作成します。

{{<import pid="5923c8f6013eb0ce4ab3b899" title="Backend Memo">}}

**テスト環境**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/16-backend-memo/www/index.html">}}

## 事前準備

バックエンドを新規にセットアップして、プロジェクトに紐付けする必要があります。新規プロジェクトの作成後、 [パート 3 : Monaca バックエンドのセットアップ](/ja /tutorials/monaca_ide/adding_backend) 記載の内容に従い、バックエンドとプロジェクトの紐付け処理を行います。

バックエンドを作成した後、次のように、`Memo` コレクションを作成します。

{{<figure src="/images/sampleapp/backend_memo/memo_collection.png">}}  

{{<note>}}
  <code>JavaScript からのアイテム追加を許可する</code> にチェックを入れます。<code>Read</code> と <code>Write</code>  オプションは必要ありません。バックエンドの作成方法の詳細は、{{<link href="/ja/products_guide/backend/control_panel" title=" バックエンド管理パネル">}} をご確認ください。
{{</note>}}

{{<note>}}
  バックエンド API にアクセスするためには、各 OS の設定ファイルを編集して、 <code>cloud.monaca.mobi</code> ドメインをアプリのホワイトリストに追加する必要があります。詳細は、 {{<link href="/ja/reference/config/android_configuration/#lt-access-gt-要素" title="Access Origin (Android)">}} と {{<link href="/ja/reference/config/ios_configuration/#lt-access-gt-要素" title="Access Origin (iOS)">}} をご確認ください。
{{</note>}}

## ファイル構成          

{{<figure src="/images/sampleapp/backend_memo/1.png">}}    

ファイル | 説明 
------|-------------
`index.html` | スタート画面のページ
`js/app.js` | アプリ内の処理を記述した JavaScript ファイル                                           

必要な JS/CSS コンポーネント
----------------------------

- `jQuerymobile`                                               

## HTML の解説                                                  

このサンプルアプリの UI には、jQuery Mobile を使います。jQuery Mobile では複数のページを、1 つの HTML ファイル内にまとめて記述できます。このアプリでは、例えば、ログイン画面と登録画面の両方を index.html に定義しています。各ページは、 `data-role` 属性が `page` と指定されている `div` タグを使用して、定義します。このように、 `data-role` 属性を使用して、 `div タグ` ごとに役割を決定できます。 `data-role` には、他にも、`header`、`content`、`listview` などの値を指定できます。jQuery Mobile のタグ定義とコンポーネントについては、 [jQuery Mobile デモ](http://jquerymobile.com/demos/1.2.0/) に詳細がありますので、こちらをご確認ください。

次の記述 ( HTML の <body> 内 ) は ...

{{<highlight html>}}
<body>
  <!-- Login Page -->
  <div data-role="page" id="LoginPage">
    <header data-role="header" data-position="fixed">
      <h1>Monaca Memo</h1>
    </header>
      <section data-role="content">
      <h1>Sign in</h1>
      Email:
        <input type="text" id="login_email">
      Password:
        <input type="password" id="login_password">
      New to Monaca Memo?
        <a href="#RegisterPage" data-role="button" data-mini="true" data-inline="true" data-theme="b">Register</a>
        <a href="#" id="LoginBtn" data-role="button" data-inline="false" data-theme="b">Login</a>
      </section>
  </div>
  ...
</body>
{{</highlight>}}

次のバックエンド メモ帳アプリのログイン画面となります ( ユーザー登録が済んでいる場合 )。

{{<figure src="/images/sampleapp/backend_memo/login.png" width="300">}}      

次の記述 ( HTML の <body> 内 ) は ...

{{<highlight html>}}
...
<!-- Register Page -->
<div data-role="page" id="RegisterPage">
  <header data-role="header" data-position="fixed">
    <h1>Monaca Memo</h1>
  </header>
    <section data-role="content">
    <h1>Sign up</h1>
    Email:
      <input type="text" id="reg_email">
    Password:
      <input type="password" id="reg_password">
      <a href="#" id="RegisterBtn" data-role="button" data-inline="false" data-theme="b">Register</a>
    </section>
</div>
...
{{</highlight>}}

次のバックエンド メモ帳アプリのユーザー登録画面となります。

{{<figure src="/images/sampleapp/backend_memo/signup.png" width="300">}}  

この HTML 中では、他にも複数のページを定義しています。スクリーンショットを次に示します。

{{<multi_figures>}}
  {{<img src="/images/sampleapp/backend_memo/list_memo.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/confirm_logout.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/confirm_delete.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/add_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/add_success.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/view_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/edit_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/update_success.png" width="180">}}
{{</multi_figures>}}

## JavaScript の解説                                            

このアプリは、7 つの機能を実装しています。 *ログイン* 、*ログアウト* 、*ユーザー登録* 、*メモ追加* 、*メモ編集* 、*メモ削除* 、*メモ閲覧* です。
                                        
### 新規ユーザー登録

`onRegisterBtn()` は、*ユーザー登録ページ* で Register
ボタンを押したときに呼ばれる関数です。`monaca.cloud.User.register()`
関数の引数として、入力された `email` と `password`
が使われます。この関数を使用して、 Monaca
バックエンドにユーザーを登録できます。登録が成功した場合、ユーザーは自動的にログイン済みの状態になります。ユーザー登録時の
JavaScript コードを次に記します。

{{<highlight javascript>}}
function onRegisterBtn()
{
  var email = $("#reg_email").val();
  var password = $("#reg_password").val();

  MC.User.register(email, password)
    .done(function()
    {
      console.log('Registration is success!');
    })
    .fail(function(err)
    {
      console.log(err.text);
      console.log('Registration failed!');
    });
}
{{</highlight>}}

### ログイン と コレクションデータの取得

{{<guilabel name="Login">}} ボタンを押したときに、 `onLoginBtn()`
を呼び出します。この関数では、 `monaca.cloud.User.login()` ( Monaca
バックエンド API ) を使用して、既存ユーザーのログインを行います。Monaca
バックエンド内にユーザーが存在する場合には、 `getMemoList()`
関数を使用して、そのユーザーに紐づけされているメモの一覧ページにリダイレクトします。
`getMemoList()` 関数内では、 `monaca.cloud.Collection().findMine()`
関数を使用して、対象のユーザーのメモの一覧を取得します。この例では、`Memo`
コレクションがすでに作成されていることを前提として、解説を進めます。メモは、動的に、一覧ページ中の
`TopListView` に追加されます。この機能の JavaScript
コードを次に記します。

{{<highlight javascript>}}
function onLoginBtn()
{
  var email = $("#login_email").val();
  var password = $("#login_password").val();

  MC.User.login(email, password)
    .done(function()
    {
      console.log('Login is success!');
      getMemoList();
      $.mobile.change('#ListPage');
    })
    .fail(function(err)
    {
      console.log(err.message);
      alert('Login failed!');
    });
}

function getMemoList()
{
  console.log('Refresh List');
  var memo = MC.Collection("Memo");
  memo.findMine()
    .done(function(items, totalItems)
    {
      $("#ListPage #TopListView").empty();
      var list = items.items;

      for (var i in list)
      {
        var memo = list[i];
        var d = new Date(memo._createdAt);
        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        $li = $("<li><a href='javascript:onShowLink(\"" + memo._id + "\",\"" + memo.title + "\",\"" + memo.content + "\")' class='show'><h3></h3><p></p></a><a href='javascript:onDeleteBtn(\"" + memo._id + "\")' class='delete'>Delete</a></li>");
        $li.find("h3").text(date);
        $li.find("p").text(memo.title);
        $("#TopListView").prepend($li);
      }
      if (list.length == 0) {
        $li = $("<li>No memo found</li>");
        $("#TopListView").prepend($li);
      }
      $("#ListPage #TopListView").listview("refresh");
    })
  .fail(function(err){ alert('failed to find the collection' + err.text); return null; });
}
{{</highlight>}}

結果として、次のような一覧ページが表示されます。

{{<figure src="/images/sampleapp/backend_memo/no_memo.png" width="300">}}  

### ログアウト処理

`monaca.cloud.User.logout()` 関数を使用して、ユーザーのログアウトを行います。ユーザーが正常にログアウトできた場合、ログインページにリダイレクトされます。

{{<highlight javascript>}}
function onLogoutBtn()
{
  MC.User.logout()
    .done(function()
    {
      console.log('Logout is success!');
      $.mobile.changePage('#LoginPage');
    })
    .fail(function(err)
    {
      console.log(err.message);
      alert('Logout failed!');
    });
}
{{</highlight>}}

### メモの追加

追加ページ上で Save ボタンを押したときに、`onSaveBtn()`
を呼び出します。次に、ページ上で入力された `title` と `content` の値を、
`addMemo()` 関数に渡します。

この関数では、 `monaca.cloud.Collection().insert()` ( Monaca
バックエンド API ) を使用して、 `Memo`
コレクションに、コレクションアイテムを挿入します。

{{<highlight javascript>}}
function onSaveBtn()
{
  var title = $("#title").val();
  var content = $("#content").val();
  if (title != '')
  {
    addMemo(title,content);
  }
}

function addMemo(title,content) {
  var memo = MC.Collection("Memo");

  memo.insert({ title: title, content: content})
  .done(function(insertedItem)
  {
    console.log('Insert is success!');
    $("#title").val("");
    $("#content").val("");
    //display a dialog stating that the inserting is success
    $( "#okDialog_add" ).popup("open", {positionTo: "origin"}).click(function(event)
    {
      event.stopPropagation();
      event.preventDefault();
      getMemoList();
      $.mobile.changePage('#ListPage');
    });
  })
  .fail(function(err){ console.log('Insert failed!');})
}
{{</highlight>}}

### メモの更新

`monaca.cloud.Collection().findMine()`
関数を使用して、更新対象のメモを見つけ、更新を行います。ここでは、コレクションアイテムの
`_id` プロパティーは既知のものとします。次に、
`monaca.cloud.collectionItem.update()` を呼び出して、 `Memo`
コレクション中の対象アイテムを更新します。

{{<highlight javascript>}}
function onEditBtn()
{
  var title = $("#title_show").text();
  var content = $("#content_show").text();
  $("#title_edit").val(title);
  $("#content_edit").text(content);
  $.mobile.changePage("#EditPage");
}

function onUpdateBtn()
{
  var new_title = $("#title_edit").val();
  var new_content = $("#content_edit").val();
  var id = currentMemoID;
  if (new_title != '') {
    editMemo(id, new_title, new_content);
  }
}

function editMemo(id, new_title, new_content){
  var memo = MC.Collection("Memo");
  memo.findMine(MC.Criteria("_id==?", [id]))
    .done(function(items, totalItems)
    {
      items.items[0].title = new_title;
      items.items[0].content = new_content;
      items.items[0].update()
        .done(function(updatedItem)
        {
          console.log('Updating is success!');
          //display a dialog stating that the updating is success
          $( "#okDialog_edit" ).popup("open", {positionTo: "origin"}).click(function(event)
          {
            event.stopPropagation();
            event.preventDefault();
            getMemoList();
            location.href='#ListPage';
          });
        })
        .fail(function(err){ console.log(JSON.stringify(err)); return null; });
    })
    .fail(function(err){ console.log(JSON.stringify(err)); return null; });
}
{{</highlight>}}

### メモの削除

メモの更新と同じように、 `monaca.cloud.Collection().findMine()`
関数を使用して、コレクションアイテムを取得します。次に、
`monaca.cloud.collectionItem.delete()`
関数を使用して、メモを削除します。

{{<highlight javascript>}}
function onDeleteBtn(id)
{
  currentMemoID = id;
  $( "#yesNoDialog_delete" ).popup("open", {positionTo: "origin"})
}

function deleteMemo()
{
  var memo = MC.Collection("Memo");
  memo.findMine(MC.Criteria("_id==?", [currentMemoID]))
    .done(function(items, totalItems)
    {
      items.items[0].delete();
      console.log('The memo is deleted!');
      getMemoList();
      $.mobile.changePage("#ListPage");
    })
    .fail(function(err){ console.log(JSON.stringify(err)); return null; });
}
{{</highlight>}}
