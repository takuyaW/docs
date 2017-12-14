端末のオリエンテーション検知 プラグイン
=======================================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-device-orientation/blob/master/RELEASENOTES.md#037-jun-05-2014">0.3.7</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このドキュメントは [Adobe
Cordovaのドキュメント](https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/ja/index.md)
を翻訳したものになります。

</div>

このプラグインを使用して、端末のコンパスにアクセスします。コンパスは、端末が指し示す方向・方位を検知するセンサーの
1 種です。通常、端末の上部最先端を起点として、0 から 359.99
度の角度で方位を示します。0 は、北を意味します。

プラグイン ID
-------------

    org.apache.cordova.device-orientation

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.device-orientation` を
Monaca クラウド IDE 上で有効にする必要があります。 Monaca 上で Cordova
プラグインを有効化する方法に関しては、standard\_plugins
をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

メソッド
--------

-   navigator.compass.getCurrentHeading
-   navigator.compass.watchHeading
-   navigator.compass.clearWatch

navigator.compass.getCurrentHeading
-----------------------------------

コンパスの現在の方位を取得します。コンパスの方位は、`CompassHeading`
オブジェクトから取得できます。また、このオブジェクトは、`compassSuccess`
コールバック関数で使用します。

``` {.sourceCode .javascript}
navigator.compass.getCurrentHeading(compassSuccess, compassError);
```

### 例

``` {.sourceCode .javascript}
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
};

function onError(error) {
    alert('CompassError: ' + error.code);
};

navigator.compass.getCurrentHeading(onSuccess, onError);
```

navigator.compass.watchHeading
------------------------------

端末の方位を、一定の間隔で取得します。方位情報を取得するたび、`headingSuccess`
コールバック関数が実行されます。

返された watch ID
を使用して、コンパスの監視状態を確認できます。navigator.compass
を停止するときには、`navigator.compass.clearWatch` に、この watchID
を渡します。

``` {.sourceCode .javascript}
var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
```

`compassOptions` には、次のパラメーターを使用できます

-   **frequency**: 方位情報の取得頻度です ( ミリ秒単位、デフォルトでは
    100 )。 *(Number)*
-   **filter**: watchHeading
    の成功時のコールバック関数を実行するか否かの しきい値
    となる、角度の変化です。値を設定した場合、\**frequency*\*
    は無視されます。 *(Number)*

### 例

``` {.sourceCode .javascript}
function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 3000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
```

### iOS 特有の動作

iOS では、1 度に 1 つの `watchHeading` のみ有効です。`watchHeading` で
filter を設定した場合、`getCurrentHeading` または `watchHeading`
のいずれを呼び出したときでも、設定された filter
値を使用して、方位の変化を特定します。これは、filter
を使用した方位の監視の方が、時間の間隔 ( frequency )
を使用するより、有効な方法のためです。

### Android 特有の動作

-   `filter` は使用できません。

navigator.compass.clearWatch
----------------------------

watchID パラメーターを使用して、方位の監視を停止します。

``` {.sourceCode .javascript}
navigator.compass.clearWatch(watchID);
```

-   **watchID**: `navigator.compass.watchHeading` が返す ID

### 例

``` {.sourceCode .javascript}
var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

// ... later on ...

navigator.compass.clearWatch(watchID);
```

CompassHeading
--------------

`CompassHeading` オブジェクトは、`compassSuccess`
コールバック関数に渡されます。

### プロパティー

-   **magneticHeading**: ある瞬間の磁方位 ( 磁北を基準 )。0 から 359.99
    度の方位角で表します。 *(Number)*
-   **trueHeading**: ある瞬間の真方位 ( 真北を基準 )。0 から 359.99
    度の方位角で表します。負の値は、真方位の値が定まっていないことを示します。
    *(Number)*
-   **headingAccuracy**: 取得した磁方位と真方位との角度の差 ( 偏角 )
    *(Number)*
-   **timestamp**: 方位を取得した時間 *(milliseconds)*

### Android 特有の動作

-   `trueHeading` は使用できません。`magneticHeading`
    と同じ値が返ってきます。
-   `trueHeading` と `magneticHeading`
    が同じ値になるため、`headingAccuracy` は、常に 0 となります。

### iOS 特有の動作

-   位置情報サービスを有効にした場合のみ、`navigator.geolocation.watchLocation()`
    経由で、`trueHeading` プロパティーを取得できます。
-   iOS 4
    以降の端末では、アプリ側でオリエンテーションをサポートしている場合には、端末の現在のオリエンテーションの中に、方位の要素も組み込まれています。また、この場合、絶対位置
    ( absolute position ) は使用しません。

CompassError
------------

エラーが発生した場合、`CompassError` オブジェクトが `compassError`
コールバック関数に渡されます。

### プロパティー

-   **code**: 次のエラーコードのいずれか

### 定数

-   `CompassError.COMPASS_INTERNAL_ERR`
-   `CompassError.COMPASS_NOT_SUPPORTED`

