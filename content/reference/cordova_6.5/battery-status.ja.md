---
title: バッテリー情報の取得 プラグイン
weight: 10
---

テスト環境 ( バージョン番号 ) : [1.2.4](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.2.4)

{{<note>}}
    このプラグインの詳細は、{{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-battery-status">}} をご確認ください。
{{</note>}}

このプラグインでは、旧バージョンの [Battery Status Events API](http://www.w3.org/TR/2011/WD-battery-status-20110915/) が使用されています。 `window` オブジェクトに、以下の3つのイベントを追加します。

-   batterystatus
-   batterycritical
-   batterylow

アプリは、`deviceready` イベント発生後、`window.addEventListener`
を使用して、上記のイベントのイベントリスナーをアタッチすることができます。

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-battery-status
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`Battery` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

API の解説
----------

### ステータス オブジェクト

このプラグインのすべてのイベントは、次のプロパティを持つオブジェクトを返します。

プロパティ | 型 | 解説
-----|------|-------------
`level` | 数値 | バッテリー充電率 (`0-100`)
`isPlugged` | 真偽値 | 端末が充電中かを示す真偽値

### batterystatus イベント

バッテリの充電率が少なくとも1パーセント変化したとき、または端末の充電を開始、または停止されたときに発火します。
バッテリーの状態を含む [object](#ステータス-オブジェクト) を返します。

#### 例

{{<highlight javascript>}}
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
{{</highlight>}}

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### Android 特有の動作

{{<warning>}}
Android の組み合わせは、バッテリーを多く消費するため、長時間の使用には注意が必要です。
{{</warning>}}

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、`isPlugged` パラメーターは *使用できません*。
`level` パラメーターは **使用できます**。

### batterylow イベント

バッテリー残量が非常に少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。バッテリーの状態を示すプロパティーが格納された [object](#ステータス-オブジェクト) を返します。

#### 例

{{<highlight javascript>}}
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}
{{</highlight>}}

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、端末が充電中か否かを検知する API
を提供していないため、充電中かに否かにかかわらず、`batterylow`
イベントが発火します。

### batterycritical イベント

バッテリー充電率が臨界充電しきい値に達した場合に、このイベントが発火します。しきい値は、端末によって異なります。バッテリーの状態を示すプロパティーが格納された
[object](#ステータス-オブジェクト) を返します。

#### 例

{{<highlight javascript>}}
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
{{</highlight>}}

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、充電中か否かにかかわらず、`batterycritical`
イベントが発火します。この OS では、端末が充電中か否かを検知する API
を提供していないためです。
