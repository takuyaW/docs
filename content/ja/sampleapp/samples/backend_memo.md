バックエンド メモ帳アプリ
=========================

Monaca バックエンド API を使用するメモ帳アプリを作成します。

  *テスト環境* Android 7.0                                   iOS 10.1.1                                              
  ---------------------------------------------------------- ------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                     
  .. raw:: html                                                                                                      
  &lt;div class="iframe-sample                               s"&gt;                                                  
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa                            tes/16-backend-memo/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                                                       
  事前準備                                                                                                           
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                                           
  バックエンドを新規にセットアップして、プロジェクトに紐     付けする必要があります。新規プロジェクトの作成後、 :r   ef:cloud\_ide\_adding\_backend 記載の内容に従い、バックエンドとプロジェクトの紐付け処理を行います。
  バックエンドを作成した後、次のように、`Memo`               コレクションを作成します。                              
  .. image:: images/backend\_m                               emo/memo\_collection.png                                
  :width: 320px                                                                                                      
  .. note:: :guilabel:\`JavaSc                               ript からのアイテム追加を許可する\` にチェックを入      れます。Read と Write オプションは必要ありません。
                                                                                                                     
  バックエンドの作成方法の詳細は、 :ref:\`backe              nd\_control\_panel\` をご確認ください。                 
                                                                                                                     
  .. note:: バックエンド API にアクセスする                  ためには、各 OS の設定ファイルを編集して、\`\`clo       ud.monaca.mobi\`\` ドメインをアプリのホワイトリストに追加する必要があります。詳細は、 Access Origin ( Android ) &lt;access\_origin\_android&gt; と Access Origin ( iOS ) &lt;access\_origin&gt; をご確認ください。
                                                                                                                     
  ファイル構成                                                                                                       
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                                           
  .. image:: images/backend\_m                               emo/1.png                                               
  :width: 210px                                                                                                      
  :align: center                                                                                                     
  ================== ========                                ============================                            ======================================================================================================
  `index.html` スタート画面の                                ページ                                                  
  `js/app.js` アプリ内の処理                                 を記述した JavaScript ファイル                          

必要な JS/CSS コンポーネント
----------------------------

  `jQuerymobile`                                               
  ------------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                               
  HTML の解説                                                  
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                 
  このサンプルアプリの UI には、jQuery Mobi                    le を使います。jQuery Mobile では複数のページを、1 つの HTML ファイル内にまとめて記述できます。このアプリでは、例えば、ログイン画面と登録画面の両方を index.html に定義しています。各ページは、 `data-role` 属性が `page` と指定されている `div` タグを使用して、定義します。このように、 `data-role` 属性を使用して、 `div タグ` ごとに役割を決定できます。 `data-role` には、他にも、`header`、`content`、`listview` などの値を指定できます。jQuery Mobile のタグ定義とコンポーネントについては、 [jQuery Mobile デモ](http://jquerymobile.com/demos/1.2.0/) に詳細がありますので、こちらをご確認ください。
  次の記述 ( HTML の &lt;body&gt; 内 ) は .                    ..
  ::                                                           
  &lt;body&gt;                                                 
  &lt;!-- Login Page --&gt;                                    
  &lt;div data-role="page" id=                                 "LoginPage"&gt;
  &lt;header data-role="head                                   er" data-position="fixed"&gt;
  &lt;h1&gt;Monaca Memo&lt;/h1&gt;                             
  &lt;/header&gt;                                              
  &lt;section data-role="c                                     ontent"&gt;
  &lt;h1&gt;Sign in&lt;/h1&gt;                                 
  Email:                                                       
  &lt;input type="text"                                        id="login\_email"&gt;
  Password:                                                    
  &lt;input type="passwo                                       rd" id="login\_password"&gt;
  New to Monaca Memo?                                          
  &lt;a href="\#RegisterP                                      age" data-role="button" data-mini="true" data-inline="true" data-theme="b"&gt;Register&lt;/a&gt;
  &lt;a href="\#" id="Log                                      inBtn" data-role="button" data-inline="false" data-theme="b"&gt;Login&lt;/a&gt;
  &lt;/section&gt;                                             
  &lt;/div&gt;                                                 
  ...                                                          
  &lt;/body&gt;                                                
  次のバックエンド メモ帳アプリのログイン画面となります        ( ユーザー登録が済んでいる場合 )。
  .. figure:: images/backend\_m                                emo/login.png
  :width: 250px                                                
  :align: center                                               
                                                               
  次の記述 ( HTML の &lt;body&gt; 内 ) は .                    ..
  ::                                                           
  ...                                                          
  &lt;!-- Register Page --&gt;                                 
  &lt;div data-role="page" id="R                               egisterPage"&gt;
  &lt;header data-role="header                                 " data-position="fixed"&gt;
  &lt;h1&gt;Monaca Memo&lt;/h1&gt;                             
  &lt;/header&gt;                                              
  &lt;section data-role="con                                   tent"&gt;
  &lt;h1&gt;Sign up&lt;/h1&gt;                                 
  Email:                                                       
  &lt;input type="text" id                                     ="reg\_email"&gt;
  Password:                                                    
  &lt;input type="password                                     " id="reg\_password"&gt;
  &lt;a href="\#" id="Regis                                    terBtn" data-role="button" data-inline="false" data-theme="b"&gt;Register&lt;/a&gt;
  &lt;/section&gt;                                             
  &lt;/div&gt;                                                 
  ...                                                          
  次のバックエンド メモ帳アプリのユーザー登録画面となりま      す。
  .. figure:: images/backend\_m                                emo/signup.png
  :width: 250px                                                
  :align: center                                               
  この HTML 中では、他にも複数のページを定義していま           す。スクリーンショットを次に示します。
  .. figure:: images/backend                                   \_memo/list\_memo.png
  :width: 180px                                                
  :align: left                                                 
  一覧ページ                                                   
  .. figure:: images/backend                                   \_memo/confirm\_logout.png
  :width: 180px                                                
  :align: left                                                 
  ログアウト確認ダイアログ                                     
  .. figure:: images/backend                                   \_memo/confirm\_delete.png
  :width: 180px                                                
  :align: left                                                 
  削除確認ダイアログ                                           
  .. rst-class:: clear                                         
  .. figure:: images/backend                                   \_memo/add\_memo.png
  :width: 180px                                                
  :align: left                                                 
  追加ページ                                                   
  .. figure:: images/backend                                   \_memo/add\_success.png
  :width: 180px                                                
  :align: left                                                 
  メモ追加成功ダイアログ                                       
                                                               
  .. figure:: images/backend                                   \_memo/view\_memo.png
  :width: 180px                                                
  :align: left                                                 
  メモの閲覧ページ                                             
                                                               
  .. figure:: images/backend                                   \_memo/edit\_memo.png
  :width: 180px                                                
  :align: left                                                 
  編集ページ                                                   
  .. figure:: images/backend                                   \_memo/update\_success.png
  :width: 180px                                                
  :align: left                                                 
  更新成功ダイアログ                                           
  .. rst-class:: clear                                         
                                                               
  JavaScript の解説                                            
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^
  このアプリは、7 つの機能を実装しています。 \*ログイン        *、*ログアウト\*、\*ユーザー登録\*、\*メモ追加\*、\*メモ編集\*、\*メモ削除\*、\*メモ閲覧\* です。
  新規ユーザー登録                                             

`onRegisterBtn()` は、\*ユーザー登録ページ\* で Register
ボタンを押したときに呼ばれる関数です。`monaca.cloud.User.register()`
関数の引数として、入力された `email` と `password`
が使われます。この関数を使用して、 Monaca
バックエンドにユーザーを登録できます。登録が成功した場合、ユーザーは自動的にログイン済みの状態になります。ユーザー登録時の
JavaScript コードを次に記します。

``` {.sourceCode .javascript}
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
```

### ログイン と コレクションデータの取得

Login ボタンを押したときに、 `onLoginBtn()`
を呼び出します。この関数では、 `monaca.cloud.User.login()` ( Monaca
バックエンド API ) を使用して、既存ユーザーのログインを行います。Monaca
バックエンド内にユーザーが存在する場合には、 `getMemoList()`
関数を使用して、そのユーザーに紐づけされているメモの一覧ページにリダイレクトします。
`getMemoList()` 関数内では、 `monaca.cloud.Collection().findMine()`
関数を使用して、対象のユーザーのメモの一覧を取得します。この例では、`Memo`
コレクションがすでに作成されていることを前提として、解説を進めます。メモは、動的に、一覧ページ中の
`TopListView` に追加されます。この機能の JavaScript
コードを次に記します。

``` {.sourceCode .javascript}
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
```

結果として、次のような一覧ページが表示されます。

![](images/backend_memo/no_memo.png){width="250px"}

### ログアウト処理

`monaca.cloud.User.logout()`
関数を使用して、ユーザーのログアウトを行います。ユーザーが正常にログアウトできた場合、ログインページにリダイレクトされます。

``` {.sourceCode .javascript}
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
```

### メモの追加

追加ページ上で Save ボタンを押したときに、`onSaveBtn()`
を呼び出します。次に、ページ上で入力された `title` と `content` の値を、
`addMemo()` 関数に渡します。

この関数では、 `monaca.cloud.Collection().insert()` ( Monaca
バックエンド API ) を使用して、 `Memo`
コレクションに、コレクションアイテムを挿入します。

``` {.sourceCode .javascript}
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
```

### メモの更新

`monaca.cloud.Collection().findMine()`
関数を使用して、更新対象のメモを見つけ、更新を行います。ここでは、コレクションアイテムの
`_id` プロパティーは既知のものとします。次に、
`monaca.cloud.collectionItem.update()` を呼び出して、 `Memo`
コレクション中の対象アイテムを更新します。

``` {.sourceCode .javascript}
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
```

### メモの削除

メモの更新と同じように、 `monaca.cloud.Collection().findMine()`
関数を使用して、コレクションアイテムを取得します。次に、
`monaca.cloud.collectionItem.delete()`
関数を使用して、メモを削除します。

``` {.sourceCode .javascript}
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
```
