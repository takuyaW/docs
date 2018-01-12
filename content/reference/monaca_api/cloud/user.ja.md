---
title: ユーザー
weight: 20
---

次の Monaca バックエンド用の JavaScript API を使用して、ユーザーアカウントの管理機能をアプリに追加できます。

{{<note>}}
    バックエンド API にアクセスする場合には、 <code>jQuery</code> の読み込み、および、ホワイトリストへの <code>cloud.monaca.mobi</code> の登録 ( 各 OS の設定ファイル上に ) を行います。 {{<link href="/ja/reference/config/android_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="Android の場合はこちら">}} または {{<link href="/ja/reference/config/ios_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="iOS の場合はこちら">}} をご確認ください。
{{</note>}}

メソッド/プロパティー  | 解説
--------------------|-------------------------------------------
[monaca.cloud.User.register()](#user-register) | ユーザーを登録します。
[monaca.cloud.User.validate()](#user-validate) | 登録時のデータのバリデーション ( 有効性の確認 ) を行ないます。
[monaca.cloud.User.unregister()](#user-unregister) | ユーザーを未登録状態にします。
[monaca.cloud.User.login()](#user-login) | ユーザーのログインを行います。
[monaca.cloud.User.isAuthenticated()](#user-isauthenticated) | ユーザーがログイン済みかチェックします。
[monaca.cloud.User.autoLogin()](#user-autologin) | ユーザーの自動ログインを行います。
[monaca.cloud.User.logout()](#user-logout) | ユーザーをログアウトさせます。
[monaca.cloud.User.updatePassword()](#user-updatepassword) | ユーザーのパスワードを更新します。
[monaca.cloud.User.sendPasswordResetToken()](#user-sendpasswordresettoken) | 新しいパスワードのトークンを送信します。
[monaca.cloud.User.resetPasswordAndLogin()](#user-resetpasswordandlogin) | パスワードのリセットを行い、ログインを再度行います。
[monaca.cloud.User.getProperty()](#user-getproperty) | ユーザーのプロパティーを取得します。
[monaca.cloud.User.getProperties()](#user-getproperties) | ユーザーのプロパティー群を、一括で取得します。
[monaca.cloud.User.saveProperty()](#user-saveproperty) | ユーザーのプロパティーを変更します。
[monaca.cloud.User.saveProperties()](#user-saveproperties) | ユーザーのプロパティー群を、一括で変更します。
[monaca.cloud.User._oid](#user-oid) | ユーザーの識別子です。

## User.register()

名前とパスワード情報を使用して、ユーザーを登録します。

{{<highlight javascript>}}
monaca.cloud.User.register(username: String, password: String, [properties: Object]) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 | 必須
-----|------|-------------|---------------
`username` | 文字列 | ユーザー名です。 | 既存のユーザーと重複する名前は使用できません。空白文字を使うこともできません。 `X` 文字 以上、`255` 文字 以下で設定します ( X に関しては、欄外のインフォメーション枠を参照のこと )。メールアドレスを使用することもできます。
`password` | 文字列 | ユーザーのパスワードです。 | 空白文字を使うことはできません。 `Y` 文字 以上、`80` 文字 以下で設定します ( Y に関しては、欄外のインフォメーション枠を参照のこと )。
`properties` | 文字列 | ユーザーに関する追加のプロパティーです。 このオブジェクトには、有効な JSON を使用します。キーの最初の文字にアンダースコアは使えません。このパラメーターの定義は任意です。 | キーの名前には、 `[a-zA-Z0-9]` の文字のみ使用します。また、 `[a-zA-Z]` で始めます。 データーサイズは、`500 KB` を超えてはいけません。

{{<note>}}
<code>X</code> and <code>Y</code> values can be set in Backend Setting page under Security section on Monaca Cloud IDE.
{{</note>}}

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、 `fail()` 、 `always()` メソッドを使用します。

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- ユーザー定義の他のプロパティー群

**エラーコード**

エラーが発生すると、 [Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

ユーザーアカウントを新規に作成する方法を、次に示します。ユーザー名、パスワード、年齢を、`"me@example.com"`、`"password"`、`21` に、それぞれ設定します。

{{<highlight javascript>}}
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
{{</highlight>}}

## User.validate()

登録時のデータのバリデーション ( 有効性の確認 ) を行ないます。

{{<highlight javascript>}}
monaca.cloud.User.validate(username: String, [properties: Object]) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`username` | 文字列 | ユーザー名です。
`properties` | JSON オブジェクト | ユーザーが保有するプロパティーです。このオブジェクトは、暗号化され、JSON 形式で保存されます。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次のサンプルコードでは、既存のユーザー名と重複していないか、ユーザー情報 ( `"me@example.com"` ) を確認しています。

{{<highlight javascript>}}
monaca.cloud.User.validate("me@example.com")
.done(function(result)
{
   console.log("Validation passed!");
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.unregister()

ユーザーを未登録状態にします。. The current user must be authenticated.

{{<highlight javascript>}}
monaca.cloud.User.unregister(password: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`password` | 文字列 | ユーザーのパスワードです。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`11` | ログインが必要です。

**例**

`"password"` のパスワードを所持するユーザーの登録を解除する方法を示します。

{{<highlight javascript>}}
monaca.cloud.User.unregister("password")
.done(function(result)
{
    console.log("You are unregistered");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.login()

ユーザーのログインを行います。.

{{<highlight javascript>}}
monaca.cloud.User.login(username: String, password: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`username` |  文字列 | ユーザー名です。
`password` |  文字列 | ユーザーのパスワードです。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- ユーザー定義の他のプロパティー群

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次の例は、典型的なログイン方法です。 ここでは、ユーザー名 「 `"me@example.com"` 」 とパスワード 「 `"password"` 」 を持つユーザーを使用します。

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.done(function(result){
    console.log("Hello again, " + result.user._username);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.isAuthenticated()

ユーザーがログイン済みかを判別して、Boolean の戻り値を返します。

{{<highlight javascript>}}
monaca.cloud.User.isAuthenticated() : Boolean
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

型 | 解説
-----|--------------------------
`Boolean` | すでにログイン済みの場合には `true` 、それ以外の場合には `false` を返します。

**例**

{{<highlight javascript>}}
if (false == monaca.cloud..User.isAuthenticated()) {
    // Go to login
}
{{</highlight>}}

## User.autoLogin()

この関数を使用すれば、2
回目以降のアプリの起動時に自動ログインできます。この関数を使う場合には、Monaca
クラウド IDE 上で、\[ Backend Settings &gt; ユーザー認証 &gt;
自動ログインを許可 \] を、有効にしておきます。

{{<highlight javascript>}}
monaca.cloud.User.autoLogin() : $.Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- ユーザー定義の他のプロパティー群

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`13` | 不正な操作が行なわれた場合のコードです。自動ログイン機能が許可されていない場合に発生します。


**例**

次のコードは、ユーザーの自動ログインを有効にするものです。

{{<highlight javascript>}}
monaca.cloud.User.autoLogin()
.done(function(result)
{
   console.log("Hello again, " + result.user._username);
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.logout()

ユーザーのログアウトを行います。対象ユーザーがログイン済みであることが必要です。ユーザーのログアウト時には、自動ログインは無効化されます。

{{<highlight javascript>}}
monaca.cloud.User.logout() : $.Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`11` | ログインが必要です。

**例**

次の例は、ユーザーのログアウトを行うときのコードの例です。

{{<highlight javascript>}}
monaca.cloud.User.logout()
.done(function(result)
{
   console.log("You are successfully logged out");
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.updatePassword()

ユーザーのパスワードを変更します。対象ユーザーがログイン済みであることが必要です。

{{<highlight javascript>}}
monaca.cloud.User.updatePassword(oldPassword: String, newPassword: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`oldPassword` |  文字列 | 旧パスワードです。
`newPassword` |  文字列 | 新パスワードです。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`11` | ログインが必要です。

**例**

次の例では、ユーザーのパスワードを `"pass123"` から `"newPass123"` へ変更しています。

{{<highlight javascript>}}
monaca.cloud.User.updatePassword("oldPassword", "newPassword")
.done(function(result)
{
    console.log("Your password is successfully changed");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.sendPasswordResetToken()

ユーザーがパスワードを忘れてしまいログインできない場合、パスワード再設定用トークンを、メールで送信します。メールを送信する前に、Monaca
クラウド IDE
上で、メールのテンプレートを作成しておきます。メールテンプレートの作成方法に関しては、[メールテンプレートの管理]({{<ref "control_operations.ja.md#メールテンプレートの管理">}}) をご確認ください。

{{<highlight javascript>}}
monaca.cloud.User.sendPasswordResetToken(username: String, options: Object) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`username` | 文字列 | ユーザー名です。
`options` | JSON オブジェクト |<ul><li>`emailPropertyName`: 名前用のフィールドを指定します ( デフォルト : `_username` )。ここには、ユーザーのメールアドレスを格納します。</li><br /><li>`templateName`: 使用するテンプレートを指定します ( デフォルト : `send_password_token` ) 。 メールのボディーには、 `"%PASSWORD_RESET_TOKEN%"` を記述します。後に、この部分はトークンに入れ替わります。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` | 不正なパラメーターです。
`13` | 不正な操作 ( ユーザーが既にログインしていた場合 ) が行なわれた場合です。

**例**

新しいトークンを記述したメールを、`"username"` を所持するユーザーに送付する方法を、次のコードで示します。送付時には、  `"email"` フィールドに設定されているアドレスを使用します。

{{<highlight javascript>}}
monaca.cloud.User.sendPasswordResetToken("username", {emailPropertyName:"email"})
.done(function()
{
    console.log("An email was successfully sent.");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.resetPasswordAndLogin()

ユーザーのパスワードをリセットして、新しいパスワードで再ログインします。

{{<highlight javascript>}}
monaca.cloud.User.resetPasswordAndLogin(username: String, newPassword: String, token: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`username` | 文字列 | ユーザー名です。
`newPassword` | 文字列 | ユーザーの新規パスワードです。
`token` | 文字列 | `User.sendPasswordResetToken()` を使用して、電子メールで送信したトークンです。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- ユーザー定義の他のプロパティー群

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次のコードは、ユーザーのパスワードをリセットして、新しいパスワードでログインする例です。

{{<highlight javascript>}}
monaca.cloud.User.resetPasswordAndLogin("username", "newPassword", "000000")
.done(function(result)
{
    console.log(result.user._username + ", your password is successfully changed.");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## User.getProperty()

ユーザーのプロパティーを取得します。対象ユーザーがログイン済みであることが必要です。

{{<highlight javascript>}}
monaca.cloud.User.getProperty(name: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`name` | 文字列 | プロパティー名です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`11` |  ログインが必要です。

**例**

ユーザーが持つ `age` のプロパティー値を取得します。次のコードをご確認ください。

{{<highlight javascript>}}
monaca.cloud.User.login("me.@example.com", "password")
.then(function()
{
    return monaca.cloud.User.getProperty("age");
})
.then(function(age)
{
    console.log(age);
})
{{</highlight>}}

## User.getProperties()

ユーザーのプロパティー群の値を配列で取得します。対象ユーザーがログイン済みであることが必要です。

{{<highlight javascript>}}
monaca.cloud.User.getProperties(names: Array) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`name` | Array of String | Properties names

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター:

- ユーザー定義のプロパティー名: 任意の値

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`11` |  ログインが必要です。

**例**

次のサンプルコードでは、ユーザーの 2 つのプロパティーを取得しています。

{{<highlight javascript>}}
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
{{</highlight>}}

## User.saveProperty()

ユーザーのプロパティーを更新します。対象ユーザーがログイン済みであることが必要です。

{{<highlight javascript>}}
monaca.cloud.User.saveProperty(name: String, value: String) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 | 必須
-----|------|-------------|---------------
`name` | 文字列 | プロパティー名です。 | `[a-zA-Z0-9]` 文字を使用します。 `[a-zA-Z]` から始める必要があります。
`value` | 文字列 | 追加または更新されるプロパティー値です。 |

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` | 不正なパラメーターです。
`11` | ログインが必要です。

**例**

ニックネーム ( `John` ) の追加方法と更新方法を示します。

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.then(function()
{
    return monaca.cloud.User.saveProperty("nickname", "John");
})
.then(function()
{
    cosole.log("Your nickname was changed");
})
{{</highlight>}}

## User.saveProperties()

ユーザーのプロパティー群の値を、一括で更新します。対象ユーザーがログイン済みであることが必要です。

{{<highlight javascript>}}
monaca.cloud.User.saveProperties(properties: Object) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`properties` | JSON オブジェクト | 追加または更新されるユーザーのプロパティー名です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` | 不正なパラメーターです。
`11` | ログインが必要です。

**例**

次の例では、 2 つのプロパティー ( ユーザーの `nickname` と `email` ) の追加と更新方法を示します。

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.then(function()
{
    return monaca.cloud.User.saveProperties({"nickname":"John", "email":"john@example.com"});
})
.then(function()
{
    cosole.log("Your nickname and email were changed");
})
{{</highlight>}}

## User._oid

ユーザーの識別子です。ユーザーがログインしていれば、 `monaca.cloud.User._oid` は、長い文字列になっています。ログインしていない場合は、 `null` になっています。

{{<highlight javascript>}}
monaca.cloud.User._oid
{{</highlight>}}

**例**

{{<highlight javascript>}}
var oid = monaca.cloud.User._oid;
{{</highlight>}}