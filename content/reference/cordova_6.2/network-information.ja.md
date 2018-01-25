---
title: ネットワーク情報の取得 プラグイン
weight: 170
---

テスト環境 ( バージョン番号 ) :
[1.2.1](https://github.com/apache/cordova-plugin-network-information/releases/tag/1.2.1)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-network-information">}} をご確認ください。
{{</note>}}

このプラグインでは、旧バージョンの [Network Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/)
が使用されています。このプラグインを使用すれば、セルラー ( Cellular )
情報、WiFi 接続情報などのインターネット接続情報を取得できます。

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-network-information
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Network Information` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

API の解説
----------

`connection` オブジェクトを使用して、セルラー、WiFi
接続などのネットワーク情報を取得します ( `navigator.connection`
経由で情報にアクセスします )。

### プロパティー

-   connection.type

### 定数

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

### connection.type

このプロパティーを使用して、ネットワーク接続の状態と接続のタイプを確認します。

#### 例

{{<highlight javascript>}}
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

checkConnection();
{{</highlight>}}

#### API の変更点

Cordova 2.3.0 までは、`navigator.network.connection` 経由で `Connection`
オブジェクトにアクセスしていましたが、W3C
の仕様に準拠するため、`navigator.connection` 経由に変更しました。
`navigator.network.connection` は利用できますが、将来的には廃止します。

#### iOS 特有の動作

-   iOS では、セルラー接続のタイプを識別できません。

-   モバイルデータ通信 ( セルラーを使用したデータ通信 ) に関しては、`navigator.connection.type` は `Connection.CELL` になります。

#### Windows 特有の動作

-   Phone 8.1
    のエミュレーター上で実行している場合には、常に、`navigator.connection.type`
    は `Connection.ETHERNET` になります。

ネットワーク関連のイベント
--------------------------

### offline

アプリがオフラインになったときに、このイベントが発火します。端末は、インターネットに接続されていません。

{{<highlight javascript>}}
document.addEventListener("offline", yourCallbackFunction, false);
{{</highlight>}}

#### 詳細

デバイスのネットワーク接続が切れたときに、`offline` ( オフライン )
イベントが発火します ( `connection.type` が `NONE`
に変わったときに発火します
)。ネットワーク接続が切れているため、アプリは、インターネットへアクセスできません。Connection
API と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

#### 例

{{<highlight javascript>}}
document.addEventListener("offline", onOffline, false);

function onOffline() {
    // Handle the offline event
}
{{</highlight>}}

#### iOS 特有の動作

初回起動時は、`offline` ( オフライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります。

### online

アプリがオンラインになったときに、このイベントが発火します。端末は、インターネットに接続されています。

{{<highlight javascript>}}
document.addEventListener("online", yourCallbackFunction, false);
{{</highlight>}}

#### 詳細

端末がネットワークに接続して、アプリからインターネットが使用できる状態になったときに、`online`
( オンライン ) イベントが発火します ( `connection.type` が `NONE`
から他の値に変わったときに発火します )。Connection API
と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

#### 例

{{<highlight javascript>}}
document.addEventListener("online", onOnline, false);

function onOnline() {
    // Handle the online event
}
{{</highlight>}}

#### iOS 特有の動作

初回起動時は、`online` ( オンライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります ( `connection.type` が
`UNKNOWN` になる前に )。
