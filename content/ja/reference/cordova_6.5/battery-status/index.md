バッテリー情報の取得 プラグイン
===============================

テスト環境 ( バージョン番号 ) :
[1.2.4](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.2.4)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-battery-status)
をご確認ください。

</div>

This plugin provides an implementation of an old version of the [Battery
Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/). It adds the
following three events to the `window` object:

-   batterystatus
-   batterycritical
-   batterylow

アプリは、`deviceready` イベント発生後、`window.addEventListener`
を使用して、上記のイベントのイベントリスナーをアタッチすることができます。

プラグイン ID
-------------

    cordova-plugin-battery-status

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Battery` プラグインを
有効 &lt;add\_plugins&gt; にします。

API の解説
----------

### ステータス オブジェクト

このプラグインのすべてのイベントは、次のプロパティを持つオブジェクトを返します。

-   **level**: バッテリー充電率 (0-100) *(Number)*
-   **isPlugged**: 端末が充電中かを示す真偽値 *(Boolean)*

### batterystatus イベント

バッテリの充電率が少なくとも1パーセント変化したとき、または端末の充電を開始、または停止されたときに発火します。
バッテリーの状態を含む [object](#status-object) を返します。

#### 例

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(status) {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### Android 特有の動作

<div class="admonition warning">

Android
の組み合わせは、バッテリーを多く消費するため、長時間の使用には注意が必要です。

</div>

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、`isPlugged` パラメーターは *使用できません*。
`level` パラメーターは *使用できます*。

### batterylow イベント

バッテリー残量が非常に少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。バッテリーの状態を示すプロパティーが格納された
[object](#status-object) を返します。

#### 例

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(status) {
        alert("Battery Level Low " + status.level + "%");
    }

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
[object](#status-object) を返します。

#### 例

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(status) {
        alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
    }

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、充電中か否かにかかわらず、`batterycritical`
イベントが発火します。この OS では、端末が充電中か否かを検知する API
を提供していないためです。
