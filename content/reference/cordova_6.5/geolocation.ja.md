---
title: 位置情報の取得 プラグイン
weight: 110
---

テスト環境 ( バージョン番号 ) :
[2.4.3](https://github.com/apache/cordova-plugin-geolocation/releases/tag/2.4.3)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-geolocation">}} をご確認ください。
{{</note>}}

このプラグインは、緯度や経度などのデバイスの場所に関する情報を提供します。

一般的な位置情報源には、GPS、IPアドレス、RFID、WiFi、Bluetooth
MACアドレス、GSM /
CDMAセルIDなどのネットワーク信号から推測される位置情報などがあります。
なお、この API が返す結果が、端末の正しい位置を示す保証はありません。

この API は [W3C Geolocation API の仕様 ( 外部サイト )](http://dev.w3.org/geo/api/spec-source.html)
に準拠しています。位置情報の取得を行っていない端末上で、この API
を使用することになります。

{{<warning>}}
位置情報に関するデータの取得・利用には、個人情報保護の観点から、細心の注意が必要です。位置情報に関するデータの取り扱い方法、第三者への情報提供およびデータの精度
( 大雑把な位置、詳細な位置、郵便番号枠レベルの位置など )
に関しては、アプリの個人情報の取り扱いに関するポリシーの中で議論されるべき問題です。個人情報の中でも位置情報は、個人の居場所の特定および移動記録として利用でき、その取り扱いには注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが位置情報にアクセスまたは利用する場合には、事前にユーザーへの通知および許諾を得る必要があります。端末のオペレーティングシステム側でこの通知および許諾の要請を行ってない場合には、開発者側で対応する必要があります。また、ユーザーへの通知および許諾の要請を行う場合には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法・収集レベルに関する同意の意思表示を求める必要があります ( <b>許可する</b>、または、<b>許可しない</b> のように、明示的に判断できる必要があります ) 。詳細は、 {{<link href="http://cordova.apache.org/docs/ja/latest/guide/appdev/privacy/index.html" title="『 プライバシーに関する注意点 』 ( Apache Cordova のドキュメント )">}} をご確認ください。
{{</warning>}}

このプラグインは、グローバルな `navigator.geolocation`
オブジェクトを定義します（存在しないプラットフォームの場合）。
オブジェクトはグローバルスコープにありますが、このプラグインによって提供される機能は、`deviceready`
イベントの発火後まで使用できません。

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

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`Geolocation` プラグインを [有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

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

#### navigator.geolocation.getCurrentPosition

`Position` オブジェクトを引数として使用して、`geolocationSuccess`
コールバックに、端末の現在位置が渡されます。エラーが発生した場合、
`PositionError` オブジェクトが `geolocationError`
コールバックに渡されます。

{{<highlight javascript>}}
navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                         [geolocationError],
                                         [geolocationOptions]);
{{</highlight>}}

##### パラメーター

-   **geolocationSuccess**: 現在位置を渡して実行するコールバック
-   **geolocationError**: *( 任意 )*
    エラーが発生した場合に実行するコールバック
-   **geolocationOptions**: *( 任意 )* オプション

##### 例

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

##### iOS 特有の動作

iOS 10以降は、 `info.plist` に `NSLocationWhenInUseUsageDescription`
を追加する必要があります。

`NSLocationWhenInUseUsageDescription`
は、アプリがユーザーの場所にアクセスする理由を記述します。
システムがアクセス許可をユーザに求めた際、この文字列がダイアログボックスの一部として表示されます。このエントリを追加するには、プラグインのインストール時に変数
`GEOLOCATION_USAGE_DESCRIPTION` で追加することができます。

変数を渡さない場合は、プラグインは空の文字列を値として追加します。

##### Android 特有の動作

位置情報の取得サービスがオフにされた場合、`timeout`
に設定された時間の経過後 ( 設定されている場合 )、`onError`
コールバックが実行されます。`timeout`
が設定されていない場合、コールバックは実行されません。

#### navigator.geolocation.watchPosition

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

##### パラメーター

-   **geolocationSuccess**: 現在位置を渡して実行するコールバック
-   **geolocationError**: *( 任意 )*
    エラーが発生した場合に実行するコールバック
-   **geolocationOptions**: *( 任意 )* オプション

##### 戻り値

-   **String**: watch id を返します。 watch id は、実行中の
    `watchPosition`
    を制御するときに使用します。位置の監視を停止する場合には、`navigator.geolocation.clearWatch`
    に、この watch id を渡します。

##### 例

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

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
{{</highlight>}}

#### geolocationOptions

`Position` の 「 取得 」
処理をカスタマイズするための任意のパラメーターです。

{{<highlight javascript>}}
{ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
{{</highlight>}}

##### オプション

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

##### Android 特有の動作

位置情報の取得サービスがオフにされた場合、`timeout`
に設定された時間の経過後 ( 設定されている場合 )、`onError`
コールバックが実行されます。`timeout`
が設定されていない場合、コールバックは実行されません。

#### navigator.geolocation.clearWatch

`watchID` パラメーターを使用して、端末の現在位置の監視を停止します。

{{<highlight javascript>}}
navigator.geolocation.clearWatch(watchID);
{{</highlight>}}

##### パラメーター

-   **watchID**: 停止する、実行中の `watchPosition` の id です。
    (String)

##### 例

{{<highlight javascript>}}
// Options: watch for changes in position, and use the most
// accurate position acquisition method available.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });

// ...later on...

navigator.geolocation.clearWatch(watchID);
{{</highlight>}}

### オブジェクト ( 読み取り専用 )

-   Position
-   PositionError
-   Coordinates

#### Position

geolocation API 側で作成した、座標 ( coords ) とタイムスタンプ (
timestamp ) を格納するオブジェクトです。

##### プロパティー

-   **coords**: 地理座標 *(Coordinates)*
-   **timestamp**: `coords` を作成したときのタイムスタンプ
    *(DOMTimeStamp)*

#### Coordinates

`Coordinates` オブジェクトは、ドット ( 「 . 」 ) を使用して、`Position`
オブジェクトに連結させて使用できます。連結させたオブジェクトは、現在位置を取得したリクエストのコールバック関数内で使用できます。このオブジェクトには、現在位置の座標を示したプロパティーが格納されています。

##### プロパティー

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

##### Android 特有の動作

**altitudeAccuracy**: Android 端末では使用できません。 `null`
を返します。

#### PositionError

navigator.geolocation でエラーが起きた場合、`PositionError`
オブジェクトが、`geolocationError` に渡されます。

##### プロパティー

-   **code**: 次のエラーコードのいずれか
-   **message**: エラーの詳細を記したメッセージ

##### 定数

-   `PositionError.PERMISSION_DENIED`: アプリによる位置情報の取得をユーザーが許可しなかった場合、このコードを返します。
    プラットフォームにより、動作が異なります。

-   `PositionError.POSITION_UNAVAILABLE`: 位置情報の取得を行えない場合、このコードを返します。一般的には、ネットワークに接続していない場合または衛星の「 Fix 」 が得られない場合が考えられます。

-   `PositionError.TIMEOUT`: `geolocationOptions` の `timeout` で指定した時間内に、位置情報を取得できない場合、このコードを返します。`navigator.geolocation.watchPosition` と共に使用した場合、`timeout` で指定した時間になる度に、`geolocationError` コールバックに、このエラーコードが渡されることになります。 `geolocationOptions` の `timeout` で指定した時間内に、位置情報を取得できない場合、このコードを返します。`navigator.geolocation.watchPosition` と共に使用した場合、`timeout` で指定した時間になる度に、`geolocationError` コールバックに、このエラーコードが渡されることになります。

サンプル: 天気を取得し、店舗を見つけ、Geolocation で近くの写真を見る
--------------------------------------------------------------------

このプラグインを使用すると、Groupon
のお得な情報、販売用の住宅、映画の再生、スポーツやエンターテイメントのイベントなど、近くのものを見つけるのに役立ちます。

ここにアイデアの "料理本" があります。
以下のサンプルでは、これらの機能をアプリに追加するための基本的な方法をいくつか紹介します。

-   [座標を取得する](#座標を取得する)
-   [天気予報を入手する](#天気予報を入手する)
-   [ドライブしたときに更新された天気予報を受信する](#ドライブしたときに更新された天気予報を受信する)
-   [地図上のどこにいるか見る](#地図上のどこにいるか見る)
-   [近くのお店を探す](#近くのお店を探す)
-   [周りのものの写真を見る](#周りのものの写真を見る)

### 座標を取得する

{{<highlight javascript>}}
function getWeatherLocation() {

    navigator.geolocation.getCurrentPosition
    (onWeatherSuccess, onWeatherError, { enableHighAccuracy: true });
}
{{</highlight>}}

### 天気予報を入手する

{{<highlight javascript>}}
// Success callback for get geo coordinates

var onWeatherSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getWeather(Latitude, Longitude);
}

// Get weather by using coordinates

function getWeather(latitude, longitude) {

    // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "Your_Key_Here";

    var queryString =
      'http://api.openweathermap.org/data/2.5/weather?lat='
      + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

    $.getJSON(queryString, function (results) {

        if (results.weather.length) {

            $.getJSON(queryString, function (results) {

                if (results.weather.length) {

                    $('#description').text(results.name);
                    $('#temp').text(results.main.temp);
                    $('#wind').text(results.wind.speed);
                    $('#humidity').text(results.main.humidity);
                    $('#visibility').text(results.weather[0].main);

                    var sunriseDate = new Date(results.sys.sunrise);
                    $('#sunrise').text(sunriseDate.toLocaleTimeString());

                    var sunsetDate = new Date(results.sys.sunrise);
                    $('#sunset').text(sunsetDate.toLocaleTimeString());
                }

            });
        }
    }).fail(function () {
        console.log("error getting location");
    });
}

// Error callback

function onWeatherError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
{{</highlight>}}

### ドライブしたときに更新された天気予報を受信する

{{<highlight javascript>}}
// Watch your changing position

function watchWeatherPosition() {

    return navigator.geolocation.watchPosition
    (onWeatherWatchSuccess, onWeatherError, { enableHighAccuracy: true });
}

// Success callback for watching your changing position

var onWeatherWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        // Calls function we defined earlier.
        getWeather(updatedLatitude, updatedLongitude);
    }
}
{{</highlight>}}

### 地図上のどこにいるか見る

BingとGoogleの両方に地図サービスがあります。
今回は、Googleを使用します。 鍵が必要ですが、無料で試すことができます。

 \**maps*\* サービスへの参照を追加します。

{{<highlight javascript>}}
<script src="https://maps.googleapis.com/maps/api/js?key=Your_API_Key"></script>
{{</highlight>}}

次に、それを使用するコードを追加します。

{{<highlight javascript>}}
var Latitude = undefined;
var Longitude = undefined;

// Get geo coordinates

function getMapLocation() {

    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

// Get map by using coordinates

function getMap(latitude, longitude) {

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

// Success callback for watching your changing position

var onMapWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}

// Error callback

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Watch your changing position

function watchMapPosition() {

    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}
{{</highlight>}}

### 近くのお店を探す

これには同じGoogleから取得した鍵を使用できます。

**places** サービスへの参照を追加します。

{{<highlight javascript>}}
<script src=
"https://maps.googleapis.com/maps/api/js?key=Your_API_Key&libraries=places">
</script>
{{</highlight>}}

次に、それを使用するコードを追加します。

{{<highlight javascript>}}
var Map;
var Infowindow;
var Latitude = undefined;
var Longitude = undefined;

// Get geo coordinates

function getPlacesLocation() {
    navigator.geolocation.getCurrentPosition
    (onPlacesSuccess, onPlacesError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onPlacesSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getPlaces(Latitude, Longitude);

}

// Get places by using coordinates

function getPlaces(latitude, longitude) {

    var latLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {

        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    Map = new google.maps.Map(document.getElementById("places"), mapOptions);

    Infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(Map);
    service.nearbySearch({

        location: latLong,
        radius: 500,
        type: ['store']
    }, foundStoresCallback);

}

// Success callback for watching your changing position

var onPlacesWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getPlaces(updatedLatitude, updatedLongitude);
    }
}

// Success callback for locating stores in the area

function foundStoresCallback(results, status) {

    if (status === google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {

            createMarker(results[i]);

        }
    }
}

// Place a pin for each store on the map

function createMarker(place) {

    var placeLoc = place.geometry.location;

    var marker = new google.maps.Marker({
        map: Map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {

        Infowindow.setContent(place.name);
        Infowindow.open(Map, this);

    });
}

// Error callback

function onPlacesError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Watch your changing position

function watchPlacesPosition() {

    return navigator.geolocation.watchPosition
    (onPlacesWatchSuccess, onPlacesError, { enableHighAccuracy: true });
}
{{</highlight>}}

### 周りのものの写真を見る

デジタル写真には、写真の撮影場所を特定する地理座標が含まれています。

Flickr API
を使用すると、あなたの近くで撮影した写真を見つけることができます。
Google サービスと同様に鍵が必要ですが、無料で試すことができます。

{{<highlight javascript>}}
var Latitude = undefined;
var Longitude = undefined;

// Get geo coordinates

function getPicturesLocation() {

    navigator.geolocation.getCurrentPosition
    (onPicturesSuccess, onPicturesError, { enableHighAccuracy: true });

}

// Success callback for get geo coordinates

var onPicturesSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getPictures(Latitude, Longitude);
}

// Get pictures by using coordinates

function getPictures(latitude, longitude) {

    $('#pictures').empty();

    var queryString =
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=Your_API_Key&lat="
    + latitude + "&lon=" + longitude + "&format=json&jsoncallback=?";

    $.getJSON(queryString, function (results) {
        $.each(results.photos.photo, function (index, item) {

            var photoURL = "http://farm" + item.farm + ".static.flickr.com/" +
                item.server + "/" + item.id + "_" + item.secret + "_m.jpg";

            $('#pictures').append($("<img />").attr("src", photoURL));

           });
        }
    );
}

// Success callback for watching your changing position

var onPicturesWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getPictures(updatedLatitude, updatedLongitude);
    }
}

// Error callback

function onPicturesError(error) {

    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Watch your changing position

function watchPicturePosition() {

    return navigator.geolocation.watchPosition
    (onPicturesWatchSuccess, onPicturesError, { enableHighAccuracy: true });
}
{{</highlight>}}