---
title: 位置情報の取得 プラグイン
weight: 120
---

テスト環境 ( バージョン番号 ) :
[2.2.0](https://github.com/apache/cordova-plugin-geolocation/releases/tag/2.2.0)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-geolocation">}} をご確認ください。
{{</note>}}

このプラグインを使用して、端末の位置情報 ( 緯度・経度 )
を取得します。情報元として、GPS ( Global Positioning System )
からの情報、各ネットワーク信号 ( IP address、RFID、WiFi・Bluetooth MAC
アドレス、GSM/CDMA 基地局 ID など ) を使用します。なお、この API
が返す結果が、端末の正しい位置を示す保証はありません。

この API は [W3C Geolocation API の仕様 ( 外部サイト )](http://dev.w3.org/geo/api/spec-source.html)
に準拠しています。位置情報の取得を行っていない端末上で、この API
を使用することになります。

{{<warning>}}
位置情報に関するデータの取得・利用には、個人情報保護の観点から、細心の注意が必要です。位置情報に関するデータの取り扱い方法、第三者への情報提供およびデータの精度
( 大雑把な位置、詳細な位置、郵便番号枠レベルの位置など )
に関しては、アプリの個人情報の取り扱いに関するポリシーの中で議論されるべき問題です。個人情報の中でも位置情報は、個人の居場所の特定および移動記録として利用でき、その取り扱いには注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが位置情報にアクセスまたは利用する場合には、事前にユーザーへの通知および許諾を得る必要があります。端末のオペレーティングシステム側でこの通知および許諾の要請を行ってない場合には、開発者側で対応する必要があります。また、ユーザーへの通知および許諾の要請を行う場合には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法・収集レベルに関する同意の意思表示を求める必要があります
( <b>許可する</b>、または、<b>許可しない</b> のように、明示的に判断できる必要があります ) 。詳細は、 {{<link href="http://cordova.apache.org/docs/ja/latest/guide/appdev/privacy/index.html" title="『 プライバシーに関する注意点 』 ( Apache Cordova のドキュメント )">}} をご確認ください。
{{</warning>}}

このプラグインでは、グローバルオブジェクト 「 `navigator.geolocation` 」
を使用します ( 対象のプラットフォーム上で、同等のオブジェクトがない場合
)。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-geolocation
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Geolocation` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

API の解説
----------

### メソッド

-   navigator.geolocation.getCurrentPosition
-   navigator.geolocation.watchPosition
-   navigator.geolocation.clearWatch

### オブジェクト ( 読み取り専用 )

-   Position
-   PositionError
-   Coordinates

### navigator.geolocation.getCurrentPosition

`Position` オブジェクトを引数として使用して、`geolocationSuccess`
コールバックに、端末の現在位置が渡されます。エラーが発生した場合、
`PositionError` オブジェクトが `geolocationError`
コールバックに渡されます。

{{<highlight javascript>}}
navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                            [geolocationError],
                                            [geolocationOptions]);
{{</highlight>}}

#### パラメーター

-   **geolocationSuccess**: 現在位置を渡して実行するコールバック
-   **geolocationError**: *( 任意 )*
    エラーが発生した場合に実行するコールバック
-   **geolocationOptions**: *( 任意 )* オプション

#### 例

{{<highlight javascript>}}
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
{{</highlight>}}

#### Android 特有の動作

位置情報の取得サービスがオフにされた場合、`timeout`
に設定された時間の経過後 ( 設定されている場合 )、`onError`
コールバックが実行されます。`timeout`
が設定されていない場合、コールバックは実行されません。

### navigator.geolocation.watchPosition

端末の位置の変化を検知したとき、最新の現在位置を返します。現在位置が変更された場合、`Position`
オブジェクトを引数として使用し、 `geolocationSuccess`
コールバックが実行されます。エラーが発生した場合、`PositionError`
オブジェクトを引数として使用し、 `geolocationError`
コールバックが実行されます。

{{<highlight javascript>}}
var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                    [geolocationError],
                                                    [geolocationOptions]);
{{</highlight>}}

#### パラメーター

-   **geolocationSuccess**: 現在位置を渡して実行するコールバック
-   **geolocationError**: ( 任意 )
    エラーが発生した場合に実行するコールバック
-   **geolocationOptions**: *( 任意 )* オプション

#### 戻り値

-   **String**: watch id を返します。 watch id は、実行中の
    `watchPosition`
    を制御するときに使用します。位置の監視を停止する場合には、`navigator.geolocation.clearWatch`
    に、この watch id を渡します。

#### 例

{{<highlight javascript>}}
// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
}

// オプション: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
{{</highlight>}}

### geolocationオプション

`Position` の 「 取得 」
処理をカスタマイズするための任意のパラメーターです。

{{<highlight javascript>}}
{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
{{</highlight>}}

#### オプション

-   **enableHighAccuracy**:
    より精度の高い位置情報をアプリが必要としていることを、このオプションを使用して示します。デフォルトでは、ネットワーク関連の情報を使用して、`Position`
    の取得を行っています。このプロパティーを `true`
    にした場合、より精度の高い方法 ( 例 ： 衛星測位情報 )
    を使用するよう、フレームワークに対して命令します。 *(Boolean)*
-   **timeout**: `navigator.geolocation.getCurrentPosition` または
    `geolocation.watchPosition` を呼んでから、 対応する
    `geolocationSuccess` コールバックを実行するまでの最長待ち時間　 (
    ミリ秒 )。 `geolocationSuccess`
    コールバックを、この時間内に呼べない場合、 `PositionError.TIMEOUT`
    エラーコードが `geolocationError` コールバックに渡されます ( 注意 :
    `geolocation.watchPosition` と共に使用したとき、 `timeout`
    に設定したミリ秒単位間隔で、`geolocationError`
    コールバックを呼び出すことになる場合もあります )。 *(Number)*
-   **maximumAge**: キャッシュ内に置かれた、有効期間内 (
    ミリ秒単位で指定 ) の位置情報のみ使用します。 *(Number)*

#### Android 特有の動作

位置情報の取得サービスがオフにされた場合、`timeout`
に設定された時間の経過後 ( 設定されている場合 )、`onError`
コールバックが実行されます。`timeout`
が設定されていない場合、コールバックは実行されません。

### navigator.geolocation.clearWatch

`watchID` パラメーターを使用して、端末の現在位置の監視を停止します。

{{<highlight javascript>}}
navigator.geolocation.clearWatch(watchID);
{{</highlight>}}

#### パラメーター

-   **watchID**: 停止する、実行中の `watchPosition` の id です。
    (String)

#### 例

{{<highlight javascript>}}
// Options: watch for changes in position, and use the most
// accurate position acquisition method available.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

// ...later on...

navigator.geolocation.clearWatch(watchID);
{{</highlight>}}

### Position

geolocation API 側で作成した、座標 ( coords ) とタイムスタンプ (
timestamp ) を格納するオブジェクトです。

#### プロパティー

-   **coords**: 地理座標 *(Coordinates)*
-   **timestamp**: `coords` を作成したときのタイムスタンプ
    *(DOMTimeStamp)*

### Coordinates

`Coordinates` オブジェクトは、ドット ( 「 . 」 ) を使用して、`Position`
オブジェクトに連結させて使用できます。連結させたオブジェクトは、現在位置を取得したリクエストのコールバック関数内で使用できます。このオブジェクトには、現在位置の座標を示したプロパティーが格納されています。

#### プロパティー

-   **latitude**: 10 進法形式で示す緯度 *(Number)*
-   **longitude**: 10 進法形式で示す経度 *(Number)*
-   **altitude**: メートル単位で示す楕円体高 ( ellipsoid height )
    *(Number)*
-   **accuracy**: メートル単位で示す座標 ( 緯度と経度 ) の精度
    *(Number)*
-   **altitudeAccuracy**: メートル単位で示す楕円体高の精度 *(Number)*
-   **heading**: 真方位を基準とする時計回りの方位角を使用した進行方向
    *(Number)*
-   **speed**: 1
    秒あたりのスピードをメートル単位で示す、端末の現在の対地速度
    *(Number)*

#### Android 特有の動作

**altitudeAccuracy**: Android 端末では使用できません。 `null`
を返します。

### PositionError

navigator.geolocation でエラーが起きた場合、`PositionError`
オブジェクトが、`geolocationError` に渡されます。

#### プロパティー

-   **code**: 次のエラーコードのいずれか
-   **message**: エラーの詳細を記したメッセージ

#### 定数

-   `PositionError.PERMISSION_DENIED`: アプリによる位置情報の取得をユーザーが許可しなかった場合、このコードを返します。プラットフォームにより、動作が異なります。

-   `PositionError.POSITION_UNAVAILABLE`: 位置情報の取得を行えない場合、このコードを返します。一般的には、ネットワークに接続していない場合または衛星の「 Fix 」 が得られない場合が考えられます。

-   `PositionError.TIMEOUT`: `geolocationOptions` の `timeout` で指定した時間内に、位置情報を取得できない場合、このコードを返します。`navigator.geolocation.watchPosition` と共に使用した場合、`timeout` で指定した時間になる度に、`geolocationError` コールバックに、このエラーコードが渡されることになります。

