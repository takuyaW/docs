バッテリー情報の取得 プラグイン
===============================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/RELEASENOTES.md#028-apr-17-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-battery-status)
をご確認ください。

</div>

このプラグインでは、旧バージョンの [Battery Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/)
が使用されています。

このプラグインを追加すれば、次の 3 つの `window`
イベントが使用できます。

-   batterystatus
-   batterycritical
-   batterylow

プラグイン ID
-------------

    org.apache.cordova.battery-status

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.battery-status`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

batterystatus
-------------

バッテリー残量が変化した場合 ( 最小値 1
パーセント)、または、端末の充電を開始もしくは停止した場合、このイベントが発火します。

batterystatus ハンドラーには、次の 2
つのプロパティーを格納したオブジェクトが渡されます。

-   **level**: バッテリー残量を示すパーセンテージ ( 0-100 ) *(Number)*
-   **isPlugged**: 端末が充電中かを示す真偽値 *(Boolean)*

`deviceready` イベントが発火した後にイベントリスナーをアタッチ (attach )
するとき、`window.addEventListener` を、アプリは通常使用します。

### サポート対象のプラットフォーム

-   iOS
-   Android

### 例

``` {.sourceCode .javascript}
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
```

batterycritical
---------------

バッテリー残量が非常に少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。

`batterycritical` ハンドラーには、次の 2
つのプロパティーを格納したオブジェクトが渡されます。

-   **level**: バッテリー残量を示すパーセンテージ ( 0-100 ) *(Number)*
-   **isPlugged**: 端末が充電中かを示す真偽値 *(Boolean)*

原則、イベントリスナーの登録には、 `window.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

### サポート対象のプラットフォーム

-   iOS
-   Android

### 例

``` {.sourceCode .javascript}
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
    alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
}
```

batterylow
----------

バッテリー残量が少なくなった場合に、このイベントが発火します。しきい値は、端末によって異なります。

`batterylow` ハンドラーには、次の 2
つのプロパティーを格納したオブジェクトが渡されます。

-   **level**: バッテリー残量を示すパーセンテージ ( 0-100 ) *(Number)*
-   **isPlugged**: 端末が充電中かを示す真偽値 *(Boolean)*

原則、イベントリスナーの登録には、 `window.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

### サポート対象のプラットフォーム

-   iOS
-   Android

### 例

``` {.sourceCode .javascript}
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(info) {
    // Handle the battery low event
    alert("Battery Level Low " + info.level + "%");
}
```
