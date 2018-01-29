---
title: ユーティリティー
weight: 40
---

Monaca で提供している、他の関数を紹介します。

メソッド/プロパティー | 解説
----------------|---------------------
[monaca.getDeviceId()](#monaca-getdeviceid) | 一意のデバイス ID を取得します。
[monaca.baseUrl](#monaca-baseurl) | `www` フォルダーへの絶対 URL を取得します。
[monaca.isAndroid](#monaca-isandroid) | Android 端末かどうか判別します。
[monaca.isIOS](#monaca-isios) | iOS 端末かどうか判別します。

## monaca.getDeviceId()

一意のデバイス ID を取得します。 which has been created randomly.

{{<note>}}
Monaca フレームワークでは、アプリの初回起動時に、一意のデバイス ID を自動的に生成します。
{{</note>}}

{{<highlight bash>}}
monaca.getDeviceId(callback)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説
----------|------|-----------------
`callback` | 関数 | コールバック関数です。第一引数は、デバイス ID です。

**戻り値**

- なし

**例**

{{<highlight javascript>}}
monaca.getDeviceId(function(id){
   console.log('Device ID: ' + id);
});
{{</highlight>}}


## monaca.baseUrl

`www` フォルダーへの絶対 URL を取得します。

{{<highlight bash>}}
monaca.baseUrl
{{</highlight>}}

**戻り値**

型 | 解説
------|-----------------
文字列 | アプリの絶対 URL です。

**例**

{{<highlight javascript>}}
window.onload = function()
{
   alert(monaca.baseUrl);
}
{{</highlight>}}

## monaca.isAndroid

Android 端末 かどうかを判別します。

{{<highlight bash>}}
monaca.isAndroid
{{</highlight>}}

**戻り値**

型 | 解説
------|-----------------
boolean | Android 端末であれば、 `true` を返します。

**例**

{{<highlight javascript>}}
if(monaca.isAndroid === true){
  alert("Android!");
}
{{</highlight>}}

## monaca.isIOS

iOS 端末かどうかを判別します。

{{<highlight bash>}}
monaca.isIOS
{{</highlight>}}

**戻り値**

型 | 解説
------|-----------------
boolean | iOS 端末であれば、 `true` を返します。

**例**

{{<highlight javascript>}}
if(monaca.isIOS === true){
  alert("iOS!");
}
{{</highlight>}}


