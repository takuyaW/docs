---
title: Console への出力 プラグイン
weight: 30
---

テスト環境 ( バージョン番号 ) : [1.0.3](https://github.com/apache/cordova-plugin-console/releases/tag/1.0.3)


{{<note>}}
このプラグインの詳細は、{{<link title="こちら ( GitHub )" href="https://github.com/apache/cordova-plugin-console">}} をご確認ください。
{{</note>}}

このプラグインでは、コンソールへの出力に使用できる、便利なメソッド (
console.log() など ) を提供しています。Android、iOS、Ubuntu、Windows
Phone 8、Windows
上で動作します。また、このプラグインでは、グローバルオブジェクト 「
`console` 」 を使用します。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("console.log works well");
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-console
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`Console` プラグインを [有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

API の解説
----------

### Android 特有の動作

`console.log()` は、あるプラットフォーム上では、複数の引数を取ることができますが (
たとえば、console.log("1","2") )、Android
では、第一引数だけが正常に認識され、それ以降の引数は無視されます。これは、Android
自体の仕様です。

### 使用できるメソッド

`console` オブジェクトの次のメソッドが使用できます。

-   console.log
-   console.error
-   console.exception
-   console.warn
-   console.info
-   console.debug
-   console.assert
-   console.dir
-   console.dirxml
-   console.time
-   console.timeEnd
-   console.table

### 実装はされているが、使用できないメソッド

`console` オブジェクトの次のメソッドは、実装されていますが、動作しません。

-   console.clear
-   console.trace
-   console.groupEnd
-   console.timeStamp
-   console.profile
-   console.profileEnd
-   console.count

### 使用できる出力形式

次の出力形式を指定できます。

-   %j - JSON 形式で出力します。
-   %o - JSON 形式で出力します。
-   %c - 指定した CSS を適用します。色の指定はできません。
-   %% - 「 % 」 に置き換えます。

上記以外を指定した場合 ( `%` + 文字
)、コンソールへの出力は、`toString()` を使用して行われます。
