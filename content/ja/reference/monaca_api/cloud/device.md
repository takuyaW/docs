端末情報
========

次の JavaScript API を使用して、端末側を管理できます。

<div class="admonition note">

バックエンド API にアクセスする場合には、`jQuery`
の読み込み、および、ホワイトリストへの `cloud.monaca.mobi` の登録 ( 各
OS の設定ファイル上に )
を行います。詳細は、Android の場合はこちら &lt;access\_origin\_android&gt;
または iOS の場合はこちら &lt;access\_origin&gt; をご確認ください。

</div>

  メソッド/プロパティー 解説                                   
  ------------------------------------------------------------ ----------------------------------------
  monaca.cloud.端末情報.getProperty()&lt;d.getProp&gt; 端      末のプロパティーを 1 つ取得します
  monaca.cloud.端末情報.getProperties()&lt;d.getProps&gt; 端   末のプロパティー群を一括で取得します。
  monaca.cloud.端末情報.saveProperty()&lt;d.saveProp&gt; 端    末のプロパティーを 1 つ更新します。
  monaca.cloud.端末情報.saveProperties&lt;d.saveProps&gt; 端   末のプロパティー群を一括更新します。

Device.getProperty() - 端末のプロパティーを取得
-----------------------------------------------

端末のプロパティーを取得します。

monaca.cloud.Device.getProperty(name: String) : \$.Promise

パラメーター

:   -------- ----------------------
      `name`   プロパティー名です。
      -------- ----------------------

Result パラメーター of done() Callback

:   ----------------------------- ---- --
      ( プロパティーの値 ) 任意の   値   
      ----------------------------- ---- --

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

例

:   端末のプロパティー値を取得する例を、次に記します。

    ``` {.sourceCode .javascript}
    monaca.cloud.Device.getProperty("nickname")
      .done
        (
          function(result)
          { console.log("Device's nickname: " + result); }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the getProperty function */ }
        );
    ```

Device.getProperties() - 端末のプロパティー群を取得
---------------------------------------------------

端末のプロパティー群を一括で取得します。.

monaca.cloud.Device.getProperties(names: Array) : \$.Promise

パラメーター

:   --------- ----------------------------
      `names`   プロパティー名の配列です。
      --------- ----------------------------

Result パラメーター of done() Callback

:   --------------------------- ---- --
      ( プロパティー名 ) 任意の   値   
      --------------------------- ---- --

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

例

:   端末のプロパティーを、2 つ取得する例を、次に記します。

    ``` {.sourceCode .javascript}
    monaca.cloud.Device.getProperties(["nickname", "color"])
      .done
        (
          function(result)
          {
            console.log("Properties: " + JSON.stringify(result));
            console.log("Device's nickname: " + result.nickname);
          }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the getProperties function */ }
        );
    ```

Device.saveProperty() - 端末のプロパティーを 1 つ更新
-----------------------------------------------------

端末のプロパティーを 1 つ更新します。

monaca.cloud.Device.saveProperty(name: String, value: String) : \$.Promise

パラメーター

:   --------- --------------------------------------------
      `name`    プロパティー名です。
      `value`   追加または更新対象のプロパティーの値です。
      --------- --------------------------------------------

必須

:   -------- ------------------------------------------------------------------------------
      `name`   must consist of \[`a-zA-Z0-9`\] characters and must start with \[`a-zA-Z`\].
      -------- ------------------------------------------------------------------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      ---------- --------------------------

例

:   端末側のニックネームを `\"Monaca\"` に変更する例を、次に記します。

    ``` {.sourceCode .javascript}
    monaca.cloud.Device.saveProperty("nickname", "Monaca")
      .done
        (
          function()
          { console.log("Saved."); }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the saveProperty function */ }
        );
    ```

Device.saveProperties() - 端末のプロパティー群を一括更新
--------------------------------------------------------

端末のプロパティー群の値を格納した配列を更新します。

monaca.cloud.Device.saveProperties(properties: Object) : \$.Promise

パラメーター

:   -------------- ------------------------------------------------
      `properties`   追加または更新する端末の追加のプロパティー群。
      -------------- ------------------------------------------------

必須

:   -------------- ------------------------------------------------------------------------------------------------------------
      `properties`   Key 名には、 \[a-zA-Z0-9\] を使用して、 \[a-zA-Z\] から始まる必要がります。データサイズは、500 KB 内です。
      -------------- ------------------------------------------------------------------------------------------------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      ---------- --------------------------

例

:   端末の `nickname` と `color` の 2
    つのプロパティーを追加・更新する例を、次に記します。

    ``` {.sourceCode .javascript}
    monaca.cloud.Device.saveProperties({"nickname": "Monaca", "color": "#9999FF"})
     .done
        (
          function()
          { console.log("Saved."); }
        )
      .fail
        (
          function(err)
          { /* error handling codes */ }
        )
      .always
        (
          function()
          { /* what must be done despite the outcome of the saveProperties function */ }
        );
    ```


