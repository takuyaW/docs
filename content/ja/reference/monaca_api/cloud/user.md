ユーザー
========

次の Monaca バックエンド用の JavaScript API
を使用して、ユーザーアカウントの管理機能をアプリに追加できます。

<div class="admonition note">

バックエンド API にアクセスする場合には、`jQuery`
の読み込み、および、ホワイトリストへの `cloud.monaca.mobi` の登録 ( 各
OS の設定ファイル上に )
を行います。詳細は、Android の場合はこちら &lt;access\_origin\_android&gt;
または iOS の場合はこちら &lt;access\_origin&gt; をご確認ください。

</div>

  メソッド/プロパティー 解説                                     
  -------------------------------------------------------------- ----------------------------------------------------------------
  monaca.cloud.User.register()&lt;u.register&gt;                 ユーザーを登録します。
  monaca.cloud.User.validate()&lt;u.validate&gt;                 登録時のデータのバリデーション ( 有効性の確認 ) を行ないます。
  monaca.cloud.User.unregister()&lt;u.unregister&gt;             ユーザーを未登録状態にします。
  monaca.cloud.User.login()&lt;u.login&gt;                       ユーザーのログインを行います。
  monaca.cloud.User.isAuthenticated()&lt;u.isAuthenticated&gt;   ユーザーがログイン済みかチェックします。
  monaca.cloud.User.autoLogin()&lt;u.autoLogin&gt;               ユーザーの自動ログインを行います。
  monaca.cloud.User.logout()&lt;u.logout&gt;                     ユーザーをログアウトさせます。
  monaca.cloud.User.updatePassword()&lt;u.updatePass&gt;         ユーザーのパスワードを更新します。
  monaca.cloud.User.sendPasswordResetToken()&lt;u.sendPass&gt;   新しいパスワードのトークンを送信します。
  monaca.cloud.User.resetPasswordAndLogin()&lt;u.resetPass&gt;   パスワードのリセットを行い、ログインを再度行います。
  monaca.cloud.User.getProperty()&lt;u.getProperty&gt;           ユーザーのプロパティーを取得します。
  monaca.cloud.User.getProperties()&lt;u.getProperties&gt;       ユーザーのプロパティー群を、一括で取得します。
  monaca.cloud.User.saveProperty()&lt;u.saveProperty&gt;         ユーザーのプロパティーを変更します。
  monaca.cloud.User.saveProperties()&lt;u.saveProperties&gt;     ユーザーのプロパティー群を、一括で変更します。
  monaca.cloud.User.\_oid&lt;u.\_oid&gt;                         ユーザーの識別子です。

User.register()
---------------

名前とパスワード情報を使用して、ユーザーを登録します。

monaca.cloud.User.register(username: String, password: String, \[properties: オブジェクト\]) : \$.Promise

パラメーター

:   -------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`     ユーザー名です。
      `password`     ユーザーのパスワードです。
      `properties`   ユーザーに関する追加のプロパティーです。 このオブジェクトには、有効な JSON を使用します。キーの最初の文字にアンダースコアは使えません。このパラメーターの定義は任意です。
      -------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Result パラメーター of done() Callback

:   -------- -------------- ------------------------------------
      `user`   オブジェクト   - \_id : {String}
                              - \_username : {String}
                              - \_createdAt : {Number} UNIX 時間
                              - \_updateAt : {Number} UNIX 時間
                              - ユーザー定義の他のプロパティー群
      -------- -------------- ------------------------------------

必須

:   -------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`     既存のユーザーと重複する名前は使用できません。空白文字を使うこともできません。 `X` 文字 以上、`255` 文字 以下で設定します ( X に関しては、欄外のインフォメーション枠を参照のこと )。メールアドレスを使用することもできます。
      `password`     空白文字を使うことはできません。 `Y` 文字 以上、`80` 文字 以下で設定します ( Y に関しては、欄外のインフォメーション枠を参照のこと )。
      `properties`   キーの名前には、 **\[a-zA-Z0-9\]** の文字のみ使用します。また、 **\[a-zA-Z\]** で始めます。 データーサイズは、500 KB を超えてはいけません。
      -------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    <div class="admonition note">

    X と Y の値に関しては、Monaca クラウド IDE のユーザー管理 ページ (
    メニューから、\[ Monaca バックエンド --&gt; ユーザー \] を選択 )
    で設定できます。

    </div>

戻り値

:   ------------------------------------- ---------------------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、 `fail()` 、 `always()` メソッドを使用します。
      ------------------------------------- ---------------------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      ---------- --------------------------

例

:   ユーザーアカウントを新規に作成する方法を、次に示します。ユーザー名、パスワード、年齢を、`\"me@example.com\"`、`\"password\"`、`21`
    に、それぞれ設定します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.register("me@example.com", "password", {age:21})
    .done(function(result)
    {
       console.log("Welcome, " + result.user._username);
       console.log("You are " + result.user.age + " years old.");
    }
    )
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.validate()
---------------

登録時のデータのバリデーション ( 有効性の確認 ) を行ないます。

monaca.cloud.User.validate(username: String, properties: オブジェクト) : \$.Promise

パラメーター

:   -------------- -----------------------------------------------------------------------------------------------
      `username`     ユーザー名です。
      `properties`   ユーザーが保有するプロパティーです。このオブジェクトは、暗号化され、JSON 形式で保存されます。
      -------------- -----------------------------------------------------------------------------------------------

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

:   次のサンプルコードでは、既存のユーザー名と重複していないか、ユーザー情報
    ( `\"me@example.com\"` ) を確認しています。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.validate("me@example.com")
    .done(function(result)
    {
       console.log("Validation passed!");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.unregister()
-----------------

ユーザーを未登録状態にします。. The current user must be authenticated.

monaca.cloud.User.unregister(password: String) : \$.Promise

パラメーター

:   ------------ ----------------------------
      `password`   ユーザーのパスワードです。
      ------------ ----------------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      `11`       ログインが必要です。
      ---------- --------------------------

例

:   `\"password\"`
    のパスワードを所持するユーザーの登録を解除する方法を示します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.unregister("password")
    .done(function(result)
    {
       console.log("You are unregistered");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.login()
------------

ユーザーのログインを行います。.

monaca.cloud.User.login(username: String, password: String) : \$.Promise

パラメーター

:   ------------ ----------------------------
      `username`   ユーザー名です。
      `password`   ユーザーのパスワードです。
      ------------ ----------------------------

Result パラメーター of done() Callback

:   -------- -------------- ------------------------------------
      `user`   オブジェクト   - \_id : {String}
                              - \_username : {String}
                              - \_createdAt : {Number} UNIX 時間
                              - \_updateAt : {Number} UNIX 時間
                              - ユーザー定義の他のプロパティー群
      -------- -------------- ------------------------------------

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

:   次の例は、典型的なログイン方法です。 ここでは、ユーザー名 「
    `\"me@example.com\"` 」 とパスワード 「 `\"password\"` 」
    を持つユーザーを使用します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .done(function(result){
       console.log("Hello again, " + result.user._username);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.isAuthenticated()
----------------------

ユーザーがログイン済みかを判別して、Boolean の戻り値を返します。

monaca.cloud.User.isAuthenticated() : Boolean

パラメーター

:   -------- --
      `なし`   
      -------- --

戻り値:

:   ----------- -------------------------------------------------------------------------------
      `Boolean`   すでにログイン済みの場合には `true` 、それ以外の場合には `false` を返します。
      ----------- -------------------------------------------------------------------------------

例

:   ``` {.sourceCode .javascript}
    if (false == monaca.cloud.User.isAuthenticated()) {
      // Go to login
    }
    ```

User.autoLogin()
----------------

この関数を使用すれば、2
回目以降のアプリの起動時に自動ログインできます。この関数を使う場合には、Monaca
クラウド IDE 上で、\[ Backend Settings &gt; ユーザー認証 &gt;
自動ログインを許可 \] を、有効にしておきます。

monaca.cloud.User.autoLogin() : \$.Promise

パラメーター

:   -------- --
      `なし`   
      -------- --

Result パラメーター of done() Callback

:   -------- -------------- ------------------------------------
      `user`   オブジェクト   - \_id : {String}
                              - \_username : {String}
                              - \_createdAt : {Number} UNIX 時間
                              - \_updateAt : {Number} UNIX 時間
                              - ユーザー定義の他のプロパティー群
      -------- -------------- ------------------------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- ----------------------------------------------------------------------------------------------
      `13`       不正な操作が行なわれた場合のコードです。自動ログイン機能が許可されていない場合に発生します。
      `-32602`   不正なパラメーターです。
      ---------- ----------------------------------------------------------------------------------------------

例 :

:   次のコードは、ユーザーの自動ログインを有効にするものです。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.autoLogin()
    .done(function(result)
    {
       console.log("Hello again, " + result.user._username);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.logout()
-------------

ユーザーのログアウトを行います。対象ユーザーがログイン済みであることが必要です。ユーザーのログアウト時には、自動ログインは無効化されます。

monaca.cloud.User.logout() : \$.Promise

パラメーター

:   -------- --
      `なし`   
      -------- --

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      `11`       ログインが必要です。
      ---------- --------------------------

例

:   次の例は、ユーザーのログアウトを行うときのコードの例です。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.logout()
    .done(function(result)
    {
       console.log("You are successfully logged out");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.updatePassword()
---------------------

ユーザーのパスワードを変更します。対象ユーザーがログイン済みであることが必要です。

monaca.cloud.User.updatePassword(oldPassword: String, newPassword: String) : \$.Promise

パラメーター

:   --------------- --------------------
      `oldPassword`   旧パスワードです。
      `newPassword`   新パスワードです。
      --------------- --------------------

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      `11`       ログインが必要です。
      ---------- --------------------------

例 :

:   次の例では、ユーザーのパスワードを `\"pass123\"` から
    `\"newPass123\"` へ変更しています。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.updatePassword("oldPassword", "newPassword")
    .done(function(result)
    {
       console.log("Your password is successfully changed");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.sendPasswordResetToken()
-----------------------------

ユーザーがパスワードを忘れてしまいログインできない場合、パスワード再設定用トークンを、メールで送信します。メールを送信する前に、Monaca
クラウド IDE
上で、メールのテンプレートを作成しておきます。メールテンプレートの作成方法に関しては、
backend\_control\_panel\_mail\_template\_management をご確認ください。

monaca.cloud.User.sendPasswordResetToken(username: String, options: オブジェクト) : \$.Promise

パラメーター

:   ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`   ユーザー名です。
      `options`    - `emailPropertyName` : 名前用のフィールドを指定します ( デフォルト : `_username` )。ここには、ユーザーのメールアドレスを格納します。
                   - `templateName` : 使用するテンプレートを指定します ( デフォルト : `send_password_token` ) 。 メールのボディーには、 `\"%PASSWORD_RESET_TOKEN%\"` を記述します。後に、この部分はトークンに入れ替わります。
      ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

戻り値:

:   -------------------------------- -----------------------------------------------------------------------------------------------------------------------
      [\$.Promise](../other) オブジェ  クト| 結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      -------------------------------- -----------------------------------------------------------------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------------------------------------------------------
      `-32602`   不正なパラメーターです。
      `13`       不正な操作 ( ユーザーが既にログインしていた場合 ) が行なわれた場合です。
      ---------- --------------------------------------------------------------------------

例

:   新しいトークンを記述したメールを、`username`
    を所持するユーザーに送付する方法を、次のコードで示します。送付時には、
    "email" フィールドに設定されているアドレスを使用します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.sendPasswordResetToken("username", {emailPropertyName:"email"})
    .done(function()
    {
       console.log("An email was successfully sent.");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.resetPasswordAndLogin()
----------------------------

ユーザーのパスワードをリセットして、新しいパスワードで再ログインします。

monaca.cloud.User.resetPasswordAndLogin(username: String, newPassword: String, token: String) : \$.Promise

パラメーター

:   --------------- ------------------------------------------------------------------------------
      `username`      ユーザー名です。
      `newPassword`   ユーザーの新規パスワードです。
      `token`         User.sendPasswordResetToken() を使用して、電子メールで送信したトークンです。
      --------------- ------------------------------------------------------------------------------

Result パラメーター of done() Callback

:   -------- -------------- ------------------------------------
      `user`   オブジェクト   - \_id : {String}
                              - \_username : {String}
                              - \_createdAt : {Number} UNIX 時間
                              - \_updateAt : {Number} UNIX 時間
                              - ユーザー定義の他のプロパティー群
      -------- -------------- ------------------------------------

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

:   次のコードは、ユーザーのパスワードをリセットして、新しいパスワードでログインする例です。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.resetPasswordAndLogin("username", "newPassword", "000000")
    .done(function(result)
    {
       console.log(result.user._username + ", your password is successfully changed.");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.getProperty()
------------------

ユーザーのプロパティーを取得します。対象ユーザーがログイン済みであることが必要です。

monaca.cloud.User.getProperty(name: String) : \$.Promise

パラメーター

:   -------- ----------------------
      `name`   プロパティー名です。
      -------- ----------------------

戻り値

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ------ ----------------------
      `11`   ログインが必要です。
      ------ ----------------------

例 :

:   ユーザーが持つ `age`
    のプロパティー値を取得します。次のコードをご確認ください。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me.@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.getProperty("age");
    })
    .then(function(age)
    {
       console.log(age);
    })
    ```

User.getProperties()
--------------------

ユーザーのプロパティー群の値を配列で取得します。対象ユーザーがログイン済みであることが必要です。

monaca.cloud.User.getProperties(names: Array) : \$.Promise

パラメーター

:   --------- ----------------------
      `names`   プロパティー名です。
      --------- ----------------------

Result パラメーター of done() Callback

:   --------------------------------------- -- --
      ユーザー定義のプロパティー名 任意の値      
      --------------------------------------- -- --

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ------ ----------------------
      `11`   ログインが必要です。
      ------ ----------------------

例 :

:   次のサンプルコードでは、ユーザーの 2
    つのプロパティーを取得しています。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.getProperties(["age", "icon"]);
    })
    .then(function(properties)
    {
       console.log(properties.age);
       console.log(properties.icon);
    })
    ```

User.saveProperty()
-------------------

ユーザーのプロパティーを更新します。対象ユーザーがログイン済みであることが必要です。

monaca.cloud.User.saveProperty(name: String, value: String) : \$.Promise

パラメーター

:   --------- ------------------------------------------
      `name`    プロパティー名です。
      `value`   追加または更新されるプロパティー値です。
      --------- ------------------------------------------

必須

:   -------- --------------------------------------------------------------------------
      `name`   Must consist of \[a-zA-Z0-9\] characters and must start with \[a-zA-Z\].
      -------- --------------------------------------------------------------------------

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      `11`       ログインが必要です。
      ---------- --------------------------

例

:   ニックネーム ( `John` ) の追加方法と更新方法を示します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperty("nickname", "John");
    })
    .then(function()
    {
       cosole.log("Your nickname was changed");
    })
    ```

User.saveProperties()
---------------------

ユーザーのプロパティー群の値を、一括で更新します。対象ユーザーがログイン済みであることが必要です。

monaca.cloud.User.saveProperties(properties: オブジェクト) : \$.Promise

パラメーター

:   -------------- ----------------------------------------------------
      `properties`   追加または更新されるユーザーのプロパティー名です。
      -------------- ----------------------------------------------------

戻り値:

:   ------------------------------------- ----------------------------------------------------------------
      [\$.Promise](../other) オブジェクト   結果の処理には、 `done()`、`fail()`、`always()` を使用します。
      ------------------------------------- ----------------------------------------------------------------

エラーコード

:   エラーが発生すると、 error オブジェクトを返します。

      ---------- --------------------------
      `-32602`   不正なパラメーターです。
      `11`       ログインが必要です。
      ---------- --------------------------

例

:   次の例では、 2 つのプロパティー ( ユーザーの `nickname` と `email` )
    の追加と更新方法を示します。

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperties({"nickname":"John", "email":"john@example.com"});
    })
    .then(function()
    {
       cosole.log("Your nickname and email were changed");
    })
    ```

User.\_oid
----------

ユーザーの識別子です。ユーザーがログインしていれば、
`monaca.cloud.User._oid`
は、長い文字列になっています。ログインしていない場合は、 `null`
になっています。

monaca.cloud.User.\_oid

例

:   ``` {.sourceCode .javascript}
    var oid = monaca.cloud.User._oid;
    ```

