端末のモーション検知 プラグイン
===============================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-device-motion/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このドキュメントは [Adobe
Cordovaのドキュメント](https://github.com/apache/cordova-plugin-device-motion/blob/master/README.md)
を翻訳したものになります。

</div>

このプラグインを使用して、端末の加速度センサーにアクセスします。加速度センサーは、
*x*、\*y\*、\*z\* 軸の 3 次元で、現在の端末の位置を基に、傾きの変化 (
*delta* ) を検知するモーションセンサーの 1 種です。

プラグイン ID
-------------

    org.apache.cordova.device-motion

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.device-motion`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

メソッド
--------

-   navigator.accelerometer.getCurrentAcceleration
-   navigator.accelerometer.watchAcceleration
-   navigator.accelerometer.clearWatch

オブジェクト
------------

-   Acceleration

navigator.accelerometer.getCurrentAcceleration
----------------------------------------------

*x*、\*y\*、\*z\* 軸方向に働いている現在の加速度を取得します。

`accelerometerSuccess`
コールバック関数に、これらの加速度の値が返ってきます。

``` {.sourceCode .javascript}
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
```

### 例

``` {.sourceCode .javascript}
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
```

### iOS 特有の動作

-   iOS では、時間を指定して、加速度情報を取得することができません。
-   加速度の監視とデータの取得は、一定の間隔を設定して、行う必要があります。
-   そのため、`getCurrentAcceleration` 関数 ( 一度だけ取得 )
    では、`watchAccelerometer` 関数 ( 指定した間隔で取得 )
    を呼び出して返ってきた値の中から、最新の値を使用します。

navigator.accelerometer.watchAcceleration
-----------------------------------------

端末の現在の `加速度` ( Acceleration オブジェクト )
を、一定の間隔で取得します。また、取得の都度、\`accelerometerSuccess\`
コールバック関数を実行します。取得の間隔は、`acceleratorOptions`
オブジェクトの `frequency` パラメーターを使用して指定します ( ミリ秒単位
)。

返ってきた watchID
を使用して、加速度センサーの監視状態を確認できます。また、加速度センサーの監視を停止するときには、`navigator.accelerometer.clearWatch`
にこの watchID を渡します。

``` {.sourceCode .javascript}
var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                       accelerometerError,
                                                       [accelerometerOptions]);
```

-   **accelerometerOptions**:
    次のオプションの設定時に使用できるオブジェクトです。
-   **frequency**: `加速度` ( Acceleration ) を取得する間隔　(
    ミリ秒単位、デフォルトでは、10000 ) *(Number)*

### 例

``` {.sourceCode .javascript}
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
```

### iOS 特有の動作

API
側では、指定した間隔で、成功時のコールバック関数を呼び出しますが、端末側へのリクエストの間隔は、40ms
から 1000ms の間になります。たとえば、間隔を 3 秒 ( 3000ms )
に設定した場合、API 側は端末側へ、データのリクエストを 1
秒ごとに行いますが、成功時のコールバック関数の実行は 3
秒ごとになります。

navigator.accelerometer.clearWatch
----------------------------------

`watchID` パラメーターを使用して、`加速度` の監視 ( Acceleration
オブジェクトの取得 ) を停止します。

``` {.sourceCode .javascript}
navigator.accelerometer.clearWatch(watchID);
```

-   **watchID**: `navigator.accelerometer.watchAcceleration` が返す ID

### 例

``` {.sourceCode .javascript}
var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

// ... later on ...

navigator.accelerometer.clearWatch(watchID);
```

Acceleration
------------

特定の時間に取得した `加速度センサー`
のデータが格納されています。加速度の値には、重力加速度 ( 9.81 m/s\^2 )
も含まれるため、端末の画面を上に向け、水平にした場合、 返される
*x*、\*y\*、\*z\* の値は、`0`、`0`、`9.81` にそれぞれなります。

### プロパティー

-   **x**: x 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **y**: y 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **z**: z 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **タイムスタンプ**: データ取得時のタイムスタンプ ( ミリ秒単位 )
    *(DOMTimeStamp)*

