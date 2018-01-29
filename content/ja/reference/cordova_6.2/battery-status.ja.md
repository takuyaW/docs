バッテリー情報の取得 プラグイン
===============================

テスト環境 ( バージョン番号 ) :
[1.1.2](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.1.2)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-battery-status)
をご確認ください。

</div>

このプラグインでは、旧バージョンの [Battery Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/)
が使用されています。`window`
オブジェクトに、以下の3つのイベントを追加します。

-   batterystatus
-   batterycritical
-   batterylow

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

### batterystatus イベント

バッテリー残量が変化した場合 ( 最小値 1
パーセント)、または、端末の充電を開始もしくは停止した場合、このイベントが発火します。

batterystatus ハンドラーには、次の 2
つのプロパティーを格納したオブジェクトが渡されます。

-   **level**: バッテリー残量を示すパーセンテージ ( 0-100 ) *(Number)*
-   **isPlugged**: 端末が充電中かを示す真偽値 *(Boolean)*

原則、イベントリスナーの登録には、 `window.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 のみ )

#### Android 特有の動作

<div class="admonition warning">

Android
の組み合わせは、バッテリーを多く消費するため、長時間の使用には注意が必要です。

</div>

#### Windows 特有の動作

Windows Phone 8.1 では、`isPlugged` パラメーターは使用できません。
`level` パラメーターは *使用できます*。

### batterylow イベント

バッテリー残量が少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。バッテリーの状態を示すプロパティーが格納された
オブジェクト &lt;status\_object&gt; を返します。

#### 例

    window.addEventListener("batterylow", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、充電中か否かにかかわらず、`batterylow`
イベントが発火します。この OS では、端末が充電中か否かを検知する API
を提供していないためです。

### batterycritical イベント

バッテリー残量が非常に少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。バッテリーの状態を示すプロパティーが格納された
オブジェクト &lt;status\_object&gt; を返します。

#### 例

    window.addEventListener("batterycritical", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Battery Level: " + status.level + "%\nRecharge Soon!");
    }

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows ( Windows Phone 8.1 のみ )

#### Windows Phone 8.1 特有の動作

Windows Phone 8.1 では、充電中か否かにかかわらず、`batterycritical`
イベントが発火します。この OS では、端末が充電中か否かを検知する API
を提供していないためです。
