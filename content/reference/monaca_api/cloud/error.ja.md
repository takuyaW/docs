---
title: エラー
weight: 80
---

エラーコードとエラーメッセージを格納する、エラー通知用のオブジェクトです。

{{<highlight javascript>}}
Monaca.cloud.Error
{{</highlight>}}

## プロパティー

プロパティ名 | 型 | 解説 
-----|------|-------------
`code`    | 数値 |  エラー番号です。
`message` | 文字列 |  エラーの原因 ( 英語表記 ) です。
`data`    | JSON オブジェクト |  エラーコードが `-32602` ( Invalid params ) の場合、このオブジェクトには、不正な値を通知するエラーメッセージが格納されています。

## エラーの一覧

Monaca 側で出力する一般的なエラーを、次に記します。それぞれの関数に特有のエラーに関しては、*各関数の解説* をご確認ください。

コード | 型 | メッセージ | 解説
------|----|----------|---------------
`-32700` | JSON-RPC のスペック | PARSE ERROR | 無効な JSON がサーバー側で検知されました。JSON テキストをサーバー側でパースするときに、このエラーは発生します。
`-32603` | JSON-RPC のスペック | INTERNAL ERROR | JSON-RPC で内部エラーが発生しています。
`-32602` | JSON-RPC のスペック | INVALID PARAMS | メソッドのパラメーターが無効です。
`-32601` | JSON-RPC のスペック | METHOD NOT FOUND | メソッドが存在しないか、現在は利用できません。
`-32600` | JSON-RPC のスペック | INVALID REQUEST | 有効なリクエスト オブジェクトとして、送信した JSON が認識されていません。
`-13` | クライアント側のプログラム | INVALID_STATUS_CODE | サーバー側から無効なステータスコードが送られてきました。
`-12` | クライアント側のプログラム | INVALID_RESPONSE | サーバー側から無効なレスポンスが送られてきました。
`-11` | クライアント側のプログラム | CONNECTION_TIMED_OUT | サーバーとの接続がタイムアウトしました。
`4` | Cloud API | API_KEY_INVALID | Cloud API キーまたは Cloud ID が無効です。
`10` | Cloud API | SESSION_ID_INVALID | セッション ID の形式が無効です。
`11` | Cloud API | USER_LOGIN_REQUIRED | ログイン情報を要求されています。
`12` | Cloud API | DEVICE_ID_REQUIRED | このメソッドの使用するときには、デバイス ID を指定する必要があります。デバイス ID は、すべてのメソッドで必須となっています。
`13` | Cloud API | OPERATION_INVALID | 処理が無効です。
`14` | Cloud API | PERMISSION_DENIED | アクセスが拒否されました。
`9999` | Cloud API | CALL_LIMIT_EXCEEDED | API コール数が、当月の上限に達しました。

{{<note>}}
<code>10000</code> 番台のコード番号は、ユーザー定義のエラーに使用します。
{{</note>}}
