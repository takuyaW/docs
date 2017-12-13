コレクションアイテム
====================

*コレクションアイテム* management can be done by using the following
functions and properties.

<div class="admonition note">

バックエンド API にアクセスする場合には、`jQuery`
の読み込み、および、ホワイトリストへの `cloud.monaca.mobi` の登録 ( 各
OS の設定ファイル上に )
を行います。詳細は、Android の場合はこちら &lt;access\_origin\_android&gt;
または iOS の場合はこちら &lt;access\_origin&gt; をご確認ください。

</div>

  メソッド/プロパティー 解説                                            
  --------------------------------------------------------------------- ------------------------------------------------------------------
  monaca.cloud.CollectionItem.update()&lt;ci.update&gt;                 コレクションアイテムのデータを更新します。
  monaca.cloud.CollectionItem.getPermission()&lt;ci.getPer&gt;          コレクションアイテムに設定されたパーミッション情報を取得します。
  monaca.cloud.CollectionItem.updatePermission()&lt;ci.updatePer&gt;    コレクションアイテムに対してパーミッションを設定します。
  monaca.cloud.CollectionItem.remove()&lt;ci.delete&gt;                 コレクションアイテムを削除します。
  monaca.cloud.CollectionItem.\_id&lt;ci.\_id&gt;                       コレクションアイテムの識別子です。
  monaca.cloud.CollectionItem.\_ownerUserOid&lt;ci.\_ownerUserOid&gt;   コレクションアイテムの所有者の oid です。
  monaca.cloud.CollectionItem.\_createdAt&lt;ci.\_createdAt&gt;         コレクションアイテムの作成日時です。
  monaca.cloud.CollectionItem.\_updatedAt&lt;ci.\_updatedAt&gt;         コレクションアイテムの更新日時です。

CollectionItem.update() - データの更新
--------------------------------------

コレクションアイテムの現在の値を、バックエンドサーバーに送信して、保存します。

CollectionItem.update() : \$.Promise

パラメーター

:   -------- --
      `なし`   
      -------- --

Result パラメーター of done() Callback

:   -------------- -------------- ------------------------------------------------
      `permission`   オブジェクト   Key と Value の組み合わせ。例 : {public: ‘rw’}
      -------------- -------------- ------------------------------------------------

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- -------------------------------------------------------------------------------------------
      `-32602`   不正なパラメーターです。
      `-14`      パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。
      ---------- -------------------------------------------------------------------------------------------

例

:   次のサンプルコードでは、コレクションのアイテムを更新しています。

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary");
    var newTitle = 'Updated: It’s snowing again';

    Diary.findOne()
    .done(function(item)
    {
       item.title = newTitle;
       item.update()
       .done(function(result)
       {
          console.log('Updating success');
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });
    ```

CollectionItem.getPermission() - コレクションアイテムのパーミッション情報を取得
-------------------------------------------------------------------------------

*コレクションアイテム*
に設定されたパーミッションを取得します。ユーザーまたは端末側が、
*書き込み用パーミッション* を持っていれば、取得できます。

CollectionItem.getPermission() : \$.Promise

パラメーター

:   -------- --
      `なし`   
      -------- --

Result パラメーター of done() Callback

:   -------------- -------------- ------------------------------------------------
      `permission`   オブジェクト   Key と Value の組み合わせ。例 : {public: ‘rw’}
      -------------- -------------- ------------------------------------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ------- -------------------------------------------------------------------------------------------
      `-14`   パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。
      ------- -------------------------------------------------------------------------------------------

例

:   *コレクションアイテム*
    のパーミッションの取得方法の例を、次に示します。

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary");

    Diary.findOneMine()
    .done(function(item)
    {
       item.getPermission()
       .done(function(result)
       {
          console.log(result.permission);
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });
    ```

CollectionItem.updatePermission() - コレクションアイテムのパーミッションの更新
------------------------------------------------------------------------------

コレクションアイテムのパーミッションを更新します。ユーザーまたは端末に対して設定されているパーミッションが、
*書き込み用パーミッション* を持っていれば、更新できます。

CollectionItem.updatePermission(permission: オブジェクト) : \$.Promise

パラメーター

:   -------------- --------------------------------------------------------------------------------------------------------------------------------------
      `permission`   設定するパーミッション。 `rw` は読み書き、 `r` は読み込み専用、 `w` は書き込み専用、空文字列は 「 パーミッション無し 」 になります。
      -------------- --------------------------------------------------------------------------------------------------------------------------------------

Result パラメーター of done() Callback

:   -------------- ------------- -------------------
      `numUpdates`   数値 値は常   に 1 になります。
      -------------- ------------- -------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- -------------------------------------------------------------------------------------------
      `-32602`   不正なパラメーターです。
      `-14`      パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。
      ---------- -------------------------------------------------------------------------------------------

例

:   *コレクションアイテム*
    へのパーミッションの設定方法を、次の例で示します。

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary");

    Diary.findOneMine()
    .done(function(item)
    {
       item.updatePermission({
          public: "r",
          "u00000000-xxxx-xxxx-xxxxxxxx": "rw",
          "u00000000-xxxx-xxxx-xxxxxxxx": ""
       })
       .done(function()
       {
          console.log("Permission updated!");
       })
       .fail(function(err)
       {
          console.log("Err#" + err.code +": " + err.message);
       });
    });
    ```

    指定されたコレクションアイテムへのパーミッションの設定方法を、次の例で示します。

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary");

    var oids = {
                 userB: "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                 userZ: "x00000000-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
               };
    var targetItem = null;

    Diary.findOneMine()
    .then(function(item)
    {
       targetItem = item;
       return targetItem.getPermission();
    })
    .then(function(result)
    {
       result.permission[oids.userB] = "rw";
       result.permission[oids.userZ] = "rw";
       return targetItem.updatePermission(result.permission);
    })
    .then(function()
    {
       console.log("Permission updated!");
    });
    ```

CollectionItem.remove() - アイテムの削除
----------------------------------------

コレクションアイテムを削除します。.

monaca.cloud.CollectionItem.remove() : \$.Promise

<div class="admonition note">

廃止予定の `CollectionItem.delete()`
の代わりに、こちらの関数を使用します。 `CollectionItem.delete()`
自体はまだ使用できますが、こちらの新しい関数を使用することを推奨します。

</div>

パラメーター

:   -------- --
      `なし`   
      -------- --

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- -------------------------------------------------------------------------------------------
      `-32602`   不正なパラメーターです。
      `-14`      パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。
      ---------- -------------------------------------------------------------------------------------------

例

:   *コレクションアイテム*
    へのパーミッションの設定方法を、次の例で示します。

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary");

    Diary.findOne('title == "I hate him"')
    .done(function(item)
    {
       item.remove()
       .done(function()
       {
          console.log("Yes indeed I like him");
       });
    });
    ```

CollectionItem.\_id - アイテムの識別子
--------------------------------------

コレクションアイテムの識別子です。.

monaca.cloud.CollectionItem.\_id : String ( 読み込み専用 )

戻り値

:   ---------- ------------------------------
      `string`   コレクションアイテムの識別子
      ---------- ------------------------------

例

:   *find()* 関数で検索した後、各アイテムの oid の文字列を console.log()
    で表示する例を、次に示します。

    ``` {.sourceCode .javascript}
    /* find function */
    .done(function(result)
    {
       result.items.forEach(function(item)
       {
          console.log(item._id);
       });
    });
    ```

CollectionItem.ownerUserOid - データの所有者の識別子
----------------------------------------------------

データを作成したユーザーの oid です。

monaca.cloud.CollectionItem.\_ownerUserOid : String ( 読み込み専用 )

戻り値

:   ---------- ----------------------
      `string`   データの所有者の oid
      ---------- ----------------------

例

:   *find()* 関数で検索した後、データ所有者が保有する各アイテムの oid
    文字列を、console.log() で表示する例を、次に示します。

    ``` {.sourceCode .javascript}
    /* find function */
    .done(function(result)
    {
       result.items.forEach(function(item)
       {
          console.log(item._ownerUserOid);
       });
    });
    ```

CollectionItem.\_createdAt - アイテムの作成日時
-----------------------------------------------

アイテムの作成日時です。

\_createdAt : Date ( 読み込み専用 )

戻り値

:   --------------------- --------------------------
      `Date` オブジェクト   アイテムの作成日時です。
      --------------------- --------------------------

例

:   *find()* 関数で検索した後、各アイテムの作成日時を、console.log()
    で表示する例を、次に示します。

    ``` {.sourceCode .javascript}
    /* find function */
    .done(function(result)
    {
        result.items.forEach(function(item)
        {
           console.log(item._createdAt);
        });
    });
    ```

CollectionItem.updatedAt - アイテムの更新日時
---------------------------------------------

アイテムの更新日時です。

monaca.cloud.CollectionItem.\_updatedAt : Date ( 読み込み専用 )

戻り値

:   --------------------- --------------------------
      `Date` オブジェクト   アイテムの更新日時です。
      --------------------- --------------------------

例

:   *find()* 関数で検索した後、各アイテムの更新日時を、console.log()
    で表示する例を、次に示します。

    ``` {.sourceCode .javascript}
    /* find function */
    .done(function(result)
    {
       result.items.forEach(function(item)
       {
          console.log(item._updatedAt);
       });
    });
    ```


