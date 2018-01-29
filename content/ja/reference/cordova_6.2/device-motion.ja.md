端末のモーション検知 プラグイン
===============================

テスト環境 ( バージョン番号 ) :
[1.2.1](https://github.com/apache/cordova-plugin-device-motion/releases/tag/1.2.1)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-device-motion)
をご確認ください。

</div>

このプラグインを使用して、端末の加速度センサーにアクセスします。加速度センサーは、
*x*、\*y\*、\*z\* 軸の 3 次元で、現在の端末の位置を基に、傾きの変化 (
*delta* ) を検知するモーションセンサーの 1 種です。

このプラグインでは、グローバルオブジェクト 「 `navigator.accelerometer`
」 を使用して、情報を取得します。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.accelerometer);
    }

プラグイン ID
-------------

    cordova-plugin-device-motion

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Device Motion` プラグインを
有効 &lt;add\_plugins&gt; にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

API の解説
----------

### メソッド

-   navigator.accelerometer.getCurrentAcceleration
-   navigator.accelerometer.watchAcceleration
-   navigator.accelerometer.clearWatch

### オブジェクト

-   Acceleration

### navigator.accelerometer.getCurrentAcceleration

*x*、\*y\*、\*z\* 軸方向に働いている現在の加速度を取得します。

`accelerometerSuccess`
コールバック関数に、これらの加速度の値が返ってきます。

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

#### 例

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError() {
        alert('onError!');
    }

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

#### Android 特有の動作

加速度の値の取得時には、\**SENSOR\_DELAY\_UI*\*
フラグを使用します。このフラグを立てると、周波数の最大リードアウト (
readout ) は、20 ～ 60 Hz の間になります ( 端末により異なる
)。これより高い周波数に相当する **周期** ( period )
の場合、結果として、サンプルが重複することになります。\[ 翻訳者メモ :
上記の原文は 「 Values for **period** corresponding to higher
frequencies will result in duplicate samples. 」 です。単語 「 period 」
の訳し方には議論 ( Android 側の固有設定 「 SENSOR\_DELAY\_XXXX など 」
を指している場合、Cordova 側の固有設定 「 period 」
を指している場合、周波数一般の単語 「 周期 」 を指している場合 )
があり、場合によっては、翻訳内容が異なる場合があります。ただ、いずれの場合でも、「
時間的な要素 」
を意味していることに変わりありません。ここでは、最も一般的な組み合わせと考えられる
「 周期 」 という単語を使用しています。 \]

#### iOS 特有の動作

-   iOS では、時間を指定して、加速度情報を取得することができません。
-   加速度の監視とデータの取得は、一定の間隔を設定して、行う必要があります。
-   そのため、`getCurrentAcceleration` 関数 ( 一度だけ取得 )
    では、`watchAccelerometer` 関数 ( 指定した間隔で取得 )
    を呼び出して返ってきた値の中から、最新の値を使用します。

### navigator.accelerometer.watchAcceleration

端末の現在の `加速度` ( Acceleration オブジェクト )
を、一定の間隔で取得します。また、取得の都度、\`accelerometerSuccess\`
コールバック関数を実行します。取得の間隔は、`acceleratorOptions`
オブジェクトの `frequency` パラメーターを使用して指定します ( ミリ秒単位
)。

返ってきた watchID
を使用して、加速度センサーの監視状態を確認できます。また、加速度センサーの監視を停止するときには、`navigator.accelerometer.clearWatch`
にこの watchID を渡します。

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           accelerometerOptions);

-   **accelerometerOptions**:
    次のオプションの設定時に使用できるオブジェクトです。

> -   **frequency**: 加速度データを渡し、accelerometerSuccess
>     を呼び出す間隔 ( ミリ秒単位、デフォルトでは 10000 ) *(Number)*

#### 例

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError() {
        alert('onError!');
    }

    var options = { frequency: 3000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

#### iOS 特有の動作

API
側では、指定した間隔で、成功時のコールバック関数を呼び出しますが、端末側へのリクエストの間隔は、40ms
から 1000ms の間になります。たとえば、間隔を 3 秒 ( 3000ms )
に設定した場合、API 側は端末側へ、データのリクエストを 1
秒ごとに行いますが、成功時のコールバック関数の実行は 3
秒ごとになります。

### navigator.accelerometer.clearWatch

`watchID` パラメーターを使用して、`加速度` の監視 ( Acceleration
オブジェクトの取得 ) を停止します。

    navigator.accelerometer.clearWatch(watchID);

-   **watchID**: `navigator.accelerometer.watchAcceleration` が返す ID

#### 例

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

    // ... later on ...

    navigator.accelerometer.clearWatch(watchID);

### Acceleration

特定の時間に取得した `加速度センサー`
のデータが格納されています。加速度の値には、重力加速度 ( 9.81 m/s\^2 )
も含まれるため、端末の画面を上に向け、水平にした場合、 返される
*x*、\*y\*、\*z\* の値は、`0`、`0`、`9.81` にそれぞれなります。

#### プロパティー

-   **x**: x 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **y**: y 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **z**: z 軸における速度の変化量 ( m/s\^2 単位 ) *(Number)*
-   **タイムスタンプ**: データ取得時のタイムスタンプ ( ミリ秒単位 )
    *(DOMTimeStamp)*

