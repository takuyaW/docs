---
title: メーラー
weight: 70
---

メーラーを使用して、ユーザーへ Email を送信できます。

メソッド    | 解説
--------------------------------------------------|----------------------
[monaca.cloud.Mailer.sendMail()](#mailer-sendmail) |  メールを送信します。

Mailer.sendMail()
------------------------------

メールを送信します。

{{<highlight javascript>}}
Mailer.sendMail(userOid, templateName, substituteParams , [options]) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`userOid` | 文字列 | 受信ユーザーの oid です。
`templateName` | 文字列 | テンプレート名です。
`substituteParams` | JSON オブジェクト | テンプレートで使用されているプレースホルダーです。
`options.emailPropertyName` | JSON オブジェクト | 電子メールアドレスに使用するプロパティー名 ( デフォルトは `_username` ) です。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602`  | 不正なパラメーターです。
`-32603`  | 内部エラー ( サーバーのメール送信が失敗 )
`11`      | ログインが必要です。

**例**

次の例では、 `"template_a"` テンプレートを使用した、メールの送付方法を示します。ここでは、メッセージ内の `"name"` の値を、 `"John"` に置き換えます。

{{<highlight javascript>}}
var username = 'John';
monaca.cloud.Mailer.sendMail("userOidA", "template_a", {"name": username})
.done
(
    function()
    { /* What to do after sending an email is success. */ }
);
{{</highlight>}}

