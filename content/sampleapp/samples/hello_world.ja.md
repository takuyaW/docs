---
title: Hello World アプリ
weight: 40
---

このサンプルアプリは、基本 Cordova
プラグインのデモ用アプリですす。デモとして、複数の端末機能 ( カメラ、連絡帳、コンパスなど ) を実装させています。

{{<import pid="59239fcc013eb0bc28683312" title="Hello World App">}}

**テスト環境** 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/0-helloworld/www/index.html">}}

## ファイル構成

{{<figure src="/images/sampleapp/hello_world/hello_3.png">}}                                
                                                                                            
 ファイル | 説明 
------|-------------
`index.html` | スタート画面のページ
`phonegap-demo.html` | 基本 Cordova プラグイン デモ画面ページ
`phonegap-demo/master.css` | 基本 Cordova プラグイン デモ画面ページのスタイルシート
`phonegap-demo/main.js` | 基本 Cordova プラグイン デモ画面ページ上の一連の処理を行う JavaScript ファイル
`css/style.css` | アプリに適用する共通スタイルシート
`img/icon/*.png` | アイコン用のファイル

## 必要な JS/CSS コンポーネント

- `jQuery`                                                     
                                                               
## HTML の解説                                                  

### index.html                                                   

`index.html` はスタート画面のページです。ソースコードを次に記します。

{{<highlight html>}}
<body>
    <h1>HelloWorld!</h1>
    <a class="button--large" href="phonegap-demo.html">Start Demo</a>
</body>
{{</highlight>}}

上記 HTML コードの `<body>` タグ内の記述で、`HelloWorld!` と {{<guilabel name="Start Demo">}}
ボタンの表示を、次のように行います。

{{<figure src="/images/sampleapp/hello_world/hello_4.png" width="300">}}   

### phonegap-demo.html

`phonegap-demo.html` を使用して、携帯端末の基本情報と次に列挙した機能を、基本 Cordova プラグイン デモ画面ページに表示します。

-   *加速度センサーの切り替え*: 携帯端末の加速度の計測の開始と停止
-   *位置情報の取得*: 携帯端末の現在の位置情報の取得
-   *電話 ( 411 )*: 電話番号 `411` の呼び出し
-   *バイブレーション*: 携帯端末の振動
-   *写真の撮影*: 携帯端末のカメラの起動
-   *連絡先の取得*:
    携帯端末内に保存された連絡先の総数、および、取得したデータの 3
    番目のコンテンツ ( 連絡先 ） の表示
-   *ネットワークの確認*:
    携帯端末が接続を行っている、現在のネットワークタイプの確認
-   *コンパスの切り替え*: 携帯端末の方位計測 ( コンパス ) の開始と停止

{{<figure src="/images/sampleapp/hello_world/hello_2.png" width="300">}}   

これらの機能を記述した JavaScript コードに関しては、後ほど説明します。

JavaScript の解説
-----------------

`main.js` は、基本 Cordova プラグイン
デモ画面ページで使用する一連の処理を記述した JavaScript
ファイルです。このファイルでは、前述した 8 個の機能を記述しています。

### 加速度センサーの切り替え

携帯端末の動きの計測を開始または停止します。この関数の JavaScript
コードは次のとおりです。

{{<highlight javascript>}}
...
var accelerationWatch = null;

function updateAcceleration(a) {
  document.getElementById('x').innerHTML = roundNumber(a.x);
  document.getElementById('y').innerHTML = roundNumber(a.y);
  document.getElementById('z').innerHTML = roundNumber(a.z);
}

var toggleAccel = function() {
  if (accelerationWatch !== null) {
    navigator.accelerometer.clearWatch(accelerationWatch);
    updateAcceleration({
        x : "",
        y : "",
        z : ""
    });
    accelerationWatch = null;
  } else {
    var options = {};
    options.frequency = 1000;
    accelerationWatch = navigator.accelerometer.watchAcceleration(
        updateAcceleration, function(ex) {
            alert("accel fail (" + ex.name + ": " + ex.message + ")");
        }, options);
  }
};
...
{{</highlight>}}

{{<guilabel name="Toggle Accelerometer">}} ボタンをクリックすると、携帯端末の動きの計測を、開始または停止できます。開始すると `X` , `Y` , `Z` の値が更新されます。停止の場合には `0` となります。

{{<figure src="/images/sampleapp/hello_world/toggle.png">}}

### 位置情報の取得

携帯端末の位置情報を取得します。この関数の JavaScript
コードは次のとおりです。

{{<highlight javascript>}}
...
var getLocation = function() {
  var suc = function(p) {
      alert(p.coords.latitude + " " + p.coords.longitude);
  };
  var locFail = function() {
  };
  navigator.geolocation.getCurrentPosition(suc, locFail);
};
...
{{</highlight>}}

{{<guilabel name="Get Location">}} ボタンをクリックすると、現在の位置情報を示したメッセージが次のように表示されます。

{{<figure src="/images/sampleapp/hello_world/hello_7.png" width="300">}}

### 電話 ( 411 )

`411` に電話します。この関数の JavaScript コードを次に記します。

{{<highlight html>}}
...
<a href="tel:411" class="btn large">Call 411</a>
...
{{</highlight>}}

{{<note>}}
  <code>href="tel:411"</code> を使うためには、以下の設定が必要です <code>config.xml</code>。

{{<highlight xml>}}
<allow-intent href="tel:*" />
{{</highlight>}}
{{</note>}}

{{<guilabel name="Call 411">}} ボタンをクリックすると、電話するかを確認するメッセージを表示します。

{{<figure src="/images/sampleapp/hello_world/hello_8.png" width="300">}}

### バイブレーション

携帯端末を振動させます。この関数の JavaScript コードを次に記します。

{{<highlight javascript>}}
...
var vibrate = function() {
  navigator.notification.vibrate(0);
};
...
{{</highlight>}}

{{<guilabel name="Vibrate">}} ボタンをクリックすると、携帯端末が振動します。

### 写真の撮影

携帯端末搭載のカメラを起動します。この関数の JavaScript
コードを次に記します。

{{<highlight javascript>}}
...
function dump_pic(data) {
  var viewport = document.getElementById('viewport');
  console.log(data);
  viewport.style.display = "";
  viewport.style.position = "absolute";
  viewport.style.top = "10px";
  viewport.style.left = "10px";
  document.getElementById("test_img").src = data;
}

function fail(msg) {
  alert(msg);
}

function show_pic() {
  navigator.camera.getPicture(dump_pic, fail, {
    quality : 50
  });
}
...
{{</highlight>}}

{{<guilabel name="Get a Picture">}} ボタンをクリックすると、携帯端末のカメラが起動します。写真を撮り、画面上に表示する場合には、次のスクリーンショット ( 画像 1 枚目、赤い囲み ) のようになります。表示しない場合には、メッセージが次 ( 画像 2 枚目 ) のように表示されます。

{{<figure src="/images/sampleapp/hello_world/camera.png">}}

### 連絡先の取得

携帯端末内に保存された連絡先の総数、および、取得したデータの 3
番目の連絡先を表示します。この関数の JavaScript コードを次に記します。

{{<highlight javascript>}}
...
function contacts_success(contacts) {
  alert(contacts.length
          + ' contacts returned.'
          + (contacts[2] && contacts[2].name ? (' Third contact is ' + contacts[2].name.formatted)
                  : ''));
}

function contacts_failed(msgObject){
  alert("Failed to access contact list:" + JSON.stringify(msgObject));
}

function get_contacts() {
  var obj = new ContactFindOptions();
  obj.filter = "";
  obj.multiple = true;
  navigator.contacts.find(
          [ "displayName", "name" ], contacts_success,
          contacts_failed, obj);
}
...
{{</highlight>}}

{{<guilabel name="Get Phone's Contacts">}} ボタンをクリックすると、携帯端末に保存された連絡先の総数、および、取得したデータの 3 番目に位置する連絡先を、次のように表示します。

{{<figure src="/images/sampleapp/hello_world/hello_11.png" width="300">}}

### ネットワークの確認

携帯端末が現在使用してるネットワークの種類を確認します。この関数の JavaScript コードを次に記します。

{{<highlight javascript>}}
...
function check_network() {
  var networkState = navigator.network.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.NONE]     = 'No network connection';

  confirm('Connection type:\n ' + states[networkState]);
}
...
{{</highlight>}}

{{<guilabel name="Check Network">}} ボタンをクリックすると、現在接続しているネットワークの種類を表示します。

{{<figure src="/images/sampleapp/hello_world/hello_12.png" width="300">}}

### コンパスの切り替え

携帯端末のコンパスを開始または停止します。この関数の JavaScript
コードを次に記します。

{{<highlight javascript>}}
...
var watchID = null;

function updateHeading(h) {
  document.getElementById('h').innerHTML = h.magneticHeading;
}

function toggleCompass() {
  if (watchID !== null) {
    navigator.compass.clearWatch(watchID);
    watchID = null;
    updateHeading({ magneticHeading : "Off"});
  } else {
    var options = { frequency: 1000 };
    watchID = navigator.compass.watchHeading(updateHeading, function(e) {
      alert('Compass Error: ' + e.code);
    }, options);
  }
}
...
{{</highlight>}}

{{<guilabel name="Toggle Compass">}} ボタンをクリックすると、携帯端末の方位計測を、開始または停止できます。方位計測を開始すると、値が更新されます。停止の場合には `off` となります。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/hello_world/compass.png">}}
