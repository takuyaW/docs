---
title: iBeacon
weight: 150
---

iBeacon ( アイビーコン ) サービスを組み込んだサンプルアプリです。iBeacon
発信機との距離を検知します。こちらの Monaca アプリでは、[Onsen UI](https://docs.monaca.io/ja/onsenui/) を使用して、UI
を構築しています。iBeacon 発信機の射程内に携帯端末が入ると、発信機の
UUID が画面上に表示されます ( このサンプルでは、アプリが起動中であること、発信機は端末側に登録済みであることが必要です )。

{{<import pid="5923d13f8034510a419679fa" title="iBeacon">}}

**テスト環境** 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/24-ibeacon/www/index.html">}}

{{<note>}}
    アプリをビルドするか、または、カスタムビルドされた Monaca デバッガーを使用すれば、アプリの検証を行えます。
{{</note>}}

## 事前準備

1. iBeacon プラグインを [こちら](https://github.com/petermetz/cordova-plugin-ibeacon.git) からダウンロードして、Monaca クラウド IDE 上にインポートします。詳細は、 [ユーザー Cordova プラグインのインポート]({{<ref "custom_cordova_plugin.ja.md#ユーザー-cordova-プラグインのインポート">}}) をご確認ください。

2. 対象とする iBeacon 発信機を決めます ( 最低限 1 つ )。

3. 専用のユーティリティー ソフトウェアを使用して、iBeacon 発信機側の情報を入手します。ここでは、 [MyBeacon Tool](https://itunes.apple.com/jp/app/mybeacon-tool/id848908053?mt=8) を使用します。

4. iBeacon 発信機の UUID のメモを取ります。

## ファイル構成

{{<figure src="/images/sampleapp/ibeacon/3.png">}}                                

ファイル | 説明
--------------|-----------------------------------
`index.html` | スタート画面のページ ( 接続画面で構成 )              
`top_page.html` | アプリのトップページ                               
`info_page.html` | iBeacon 発信機側の情報を表示するページ             
`js/app.js` | アプリの動作を制御する JavaScript のファイル       
`css/style.css` | アプリのスタイルシート                             

必要な JS/CSS コンポーネント
----------------------------

- `Onsen UI`      

## 必要な Cordova プラグイン                                  

- [Proximity Beacon Plugin](https://github.com/petermetz/cordova-plugin-ibeacon.git)
- `Bluetooth`       

HTML の解説
-----------

ユーザー インターフェースには、Onsen UI を使用しています。 *Onsen
UI* のタグとそのコンポーネントの詳細は、[Onsen UI ドキュメント](https://docs.monaca.io/ja/onsenui/) をご確認ください。

index.html ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) で、
`top-page.html` ファイルを起動時に読み込みます。

{{<highlight html>}}
...
  <ons-navigator var="myNavigator" page="top-page.html"></ons-navigator>
...
{{</highlight>}}

`top-page.html` ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) で ...

{{<highlight html>}}
<ons-page ng-controller="TopPageCtrl">
  <ons-toolbar>
      <div class="center">iBeacon Testing</div>
  </ons-toolbar>

  <ons-list modifier="inset" style="margin: 10px">
      <ons-list-item class="list-item-container" ng-repeat="(uuid, beacon) in beacons">
          <ons-row>
              <ons-col width="70px">
                  <img ng-src="{{beacon.icon}}" class="top-page-icon">
              </ons-col>
              <ons-col>
                  <div class="top-page-name">{{beacon.name}}</div>
                  <div class="top-page-proximity">{{beacon.proximity}}</div>
                  <div class="top-page-proximity">{{beacon.rssi}} dBm</div>
              </ons-col>
          </ons-row>
      </ons-list-item>
  </ons-list>
</ons-page>
{{</highlight>}}

次のスクリーンショットのように、登録済みの iBeacon
発信機の一覧と距離情報を表示します。

{{<figure src="/images/sampleapp/ibeacon/1.png" width="300">}}    

`info-page.html` ファイル内の次の記述 ( HTML の &lt;body&gt; 内 ) で ...

{{<highlight html>}}
<ons-page ng-controller="InfoPageCtrl">
  <ons-toolbar>
      <div class="left"><ons-back-button>Back</ons-back-button></div>
      <div class="center">{{beacon.name}}</div>
  </ons-toolbar>

  <ons-list>
      <ons-list-item class="list-item-container">
          <ons-row>
              <ons-col width="110px">
                  <img src="{{beacon.icon}}" class="info-page-img">
              </ons-col>
              <ons-col>
                  <div class="info-page-description">
                      <p style="text-decoration: underline;">UUID</p>
                    {{beaconUuid}}
                </div>

              </ons-col>
          </ons-row>
      </ons-list-item>
  </ons-list>
</ons-page>
{{</highlight>}}

次のスクリーンショットのように、最も近接する iBeacon 発信機の情報 ( UUID
) を表示します。

{{<figure src="/images/sampleapp/ibeacon/2.png" width="300">}}    

JavaScript の解説
-----------------

このサンプルアプリの JavaScript には、AngularJS
を使用しています。AngularJS
では、連携するページのそれぞれに、コントローラー関数を設置します。このサンプルでは、
`TopPageCtrl` 、 `InfoPageCtrl` の 2
つのコントローラー関数を使用しており、それぞれ、 `top-page.html` ページ、
`info-page.html` ページに紐付けされています。これらのコントローラー関数間で使用するグローバル変数を作成するため、グローバル変数を格納する
service 関数を、次のように、1 つ作成します。

{{<highlight javascript>}}
...
  app.service('iBeaconService', function() {
    this.currentBeaconUuid = null;
    this.onDetectCallback = function(){};

    var beacons = {
        "00000000-EA98-1001-B000-001C4D9C64FA": {icon: 'img/1.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'JIBBER', number: '1', id: '000265C9', major: 1, minor: 1},
        "F5A10AF9-A670-4F54-B491-8607393F0DDC": {icon: 'img/2.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'BUONO', number: '2', id: '0002D08D', major: 1, minor: 1},
        "ABE425B2-0000-4409-8035-1668AFC7FCFE": {icon: 'img/3.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'LION', number: '3', id: '00029BAA', major: 1, minor: 1},
        "BC564E82-0000-43A3-94E7-1D54EC02622D": {icon: 'img/4.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'COMA', number: '4', id: '0003F321', major: 1, minor: 1},
        "6F29CF85-0000-414A-A7A6-6206A2DA9773": {icon: 'img/5.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'GNAR', number: '5', id: '00027EA8', major: 1, minor: 1},
        "EEB52632-0000-47E2-8C15-897494E12015": {icon: 'img/6.jpg', rssi: -63, proximity: PROX_UNKNOWN, name: 'TEEMO', number: '6', id: '00032449', major: 1, minor: 1}
    };
    this.beacons = beacons;

    createBeacons = function() {
        var result = [];
        try {
            angular.forEach(beacons, function(value, key) {
                result.push(new cordova.plugins.locationManager.BeaconRegion(value.id, key, value.major, value.minor));
            });
        } catch (e) {
            console.log('createBeacon err: ' + e);
        }
        return result;
    };

    this.watchBeacons = function(callback){
        document.addEventListener("deviceready", function(){
            var deviceVersion = window.device ? device.version : '';

            var beacons = createBeacons();

            try {
                var delegate = new cordova.plugins.locationManager.Delegate();

                delegate.didDetermineStateForRegion = function (pluginResult) {

                    console.log('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

                    cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
                        + JSON.stringify(pluginResult));
                };

                delegate.didStartMonitoringForRegion = function (pluginResult) {
                    console.log('didStartMonitoringForRegion:', pluginResult);

                    console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
                };

                delegate.didRangeBeaconsInRegion = function (pluginResult) {
                    var beaconData = pluginResult.beacons[0];
                    var uuid = pluginResult.region.uuid.toUpperCase();
                    if (!beaconData || !uuid) {
                        return;
                    }

                    callback(beaconData, uuid);
                    console.log('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
                };

                cordova.plugins.locationManager.setDelegate(delegate);

                // required in iOS 8+
                cordova.plugins.locationManager.requestWhenInUseAuthorization();
                // or cordova.plugins.locationManager.requestAlwaysAuthorization()

                beacons.forEach(function(beacon) {
                    cordova.plugins.locationManager.startRangingBeaconsInRegion(beacon);
                });

            } catch (e) {
                console.log('Delegate err: ' + e);
            }
        }, false);
    };
  });
...
{{</highlight>}}

service 関数内で行っていることを、解説します。

-   登録済み iBeacon 発信機の情報 ( UUID、距離、名称、アイコンファイルなど ) を格納する配列の作成。

-   近接する iBeacon 発信機の検知、および、最も近接する発信機の UUID の取得を行う関数の作成。

各コントローラーに関して解説します。

### TopPageCtrl

`TopPageCtrl` は、 `top-page.html`
ファイル内の各種処理を行っています。近接する iBeacon
発信機の検知を、主に行っています。登録済みの iBeacon
発信機が検知された場合、その proximity ( 近接度 ) と rssi (
受信信号の強度指数 / received signal strength indicator )
が更新されます。検知できない場合、その発信機の proximity 値は
`ProximityUnknown` になり、rssi　値は `-63 dBm` になります (
下のスクリーンショットを参照のこと )。

{{<figure src="/images/sampleapp/ibeacon/4.png" width="300">}}    

この関数の JavaScript コードを、次に記します。

{{<highlight javascript>}}
...
app.controller('TopPageCtrl', ['$scope', 'iBeaconService', function($scope, iBeaconService) {

  $scope.beacons = iBeaconService.beacons;

  var callback = function(deviceData, uuid)
  {
      var beacon = $scope.beacons[uuid];
      $scope.$apply(function()
      {
          beacon.rssi = deviceData.rssi;
          switch (deviceData.proximity)
          {
              case PROX_IMMEDIATE:
                  beacon.proximity = 'Immediate';
                  break;
              case PROX_NEAR:
                  beacon.proximity = 'Near';
                  break;
              case PROX_FAR:
                  beacon.proximity = 'Far';
                  break;
              case PROX_UNKNOWN:
              default:
                  break;
          }

          if (iBeaconService.currentBeaconUuid === null && beacon.rssi > -45) {
              $scope.enterInfoPage(uuid);
          }
      });
  };
  iBeaconService.watchBeacons(callback);


  $scope.enterInfoPage = function(currentUuid) {
      iBeaconService.currentBeaconUuid = currentUuid;
      $scope.ons.navigator.pushPage('info-page.html');
      $scope.ons.navigator.on("prepop", function() {
        iBeaconService.currentBeaconUuid = null;
      });
  };

}]);
...
{{</highlight>}}

### InfoPageCtrl

`InfoPageCtrl` は、 `info-page.html`
ファイル内の各種処理を行っています。このコントローラ関数では、主に、
`iBeaconService` 経由で渡された UUID 値を使用して、最も近接する iBeacon
発信機の UUID を表示します。この解説で使用している 「 最も近接 」
とは、iBeacon 用語の 「 Immediate 」 ( 3 段階評価の最も近いこと )
を意味します。これ以外の場合には、 `info-page.html` が表示されません。

この関数の JavaScript コードを、次に記します。

{{<highlight javascript>}}
...
  app.controller('InfoPageCtrl', ['$scope', 'iBeaconService', function($scope, iBeaconService) {
      $scope.beacon = iBeaconService.beacons[iBeaconService.currentBeaconUuid];
      $scope.beaconUuid = iBeaconService.currentBeaconUuid;
  }]);
...
{{</highlight>}}
