---
title: プッシュ通知機能
weight: 10
---

次の API を使用して、プッシュ通知受信時の処理を定義できます。

メソッド | 解説
-------|-------------------
[monaca.cloud.Push.setHandler()](#push-sethandler) | プッシュ通知の受信時の JavaScript ハンドラーを設定します。

## Push.setHandler()

プッシュ通知の受信時に呼び出す、プッシュ通知用のハンドラーを定義します。

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(callback: Function) : void
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説
-----|------|------------------
`callback` | 関数 | プッシュ通知を処理するコールバック関数です。第一引数に追加のデータを設定できます。

**戻り値**

- なし  

**例**

次のサンプルコードでは、プッシュ通知から受け取ったデータを、`Console` ( コンソール ) に表示しています。

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data) {
  console.log(data.item_a);
  console.log(data.item_b);
});
{{</highlight>}}


