---
title: Cordova プラグイン
weight: 30
aliases: /ja/monaca_ide/manual/dependencies/cordova_plugin
---

概要
----

カメラ、ファイルシステム、端末側のストレージなど、端末側のネイティブ機能を使用する場合には、通常、ネイティブコードが必要となりますが、Cordova
を使用すれば、JavaScript
を使用して、これらのネイティブ機能へアクセスすることができます。

具体的には、Cordova が提供しているデバイス系の API
を使用すれば、端末側のネイティブ機能に、JavaScript
からアクセスできるようになります。Monaca では、Cordova
を採用し、JavaScript
経由で、ハイブリッドアプリ内から端末側のネイティブ機能へアクセスしています。

Cordova に関する詳細は、 [こちら](https://cordova.apache.org/)
をご確認ください。

### Cordova の読み込み

Cordova の読み込みが完了するまで、デバイス系の API
は使用できません。そこで重要となるのが `onDeviceReady()`
関数です。この関数は、Cordova の読み込み完了後に実行される関数です。

ここでは、デバイス系の API
を使用して、カメラ機能を起動するコードを例にしてみます。Monaca クラウド
IDE 上のプロジェクトに、次の内容をコピー＆ペーストして、
[Monaca デバッガー](/ja/products_guide/debugger) 上で実行してみましょう。

{{<note>}}
このコードは、Cordova 4.1 向けです。端末の種類によっては、動作が異なる場合があります。
{{</note>}}

{{<highlight html>}}
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script src="components/loader.js"></script>
    <script>
        document.addEventListener ("deviceready", onDeviceReady, false);

        //these functions runs when Cordova is ready
        function onDeviceReady () {
            alert ('Cordova is ready!');
        }

        function snapPicture () {
            navigator.camera.getPicture (successCallback, FailCallback, {destinationType: Camera.DestinationType.DATA_URL});

            //Success Callback
            function successCallback (imageData) {
                //Display image
                var image = document.getElementById ('picture');
                image.src = "data:image/jpeg;base64, " + imageData;
            }

            //Error CallBack
            function FailCallback (message) {
                alert ('Error!!!: ' + message);
            }
        }
    </script>
</head>
<body>
    <h1>Camera Sample</h1>
    <input type="button" onclick="snapPicture()" value="Snap" ><br><br>
    <img id="picture" src="" width="150" height="150">
</body>
</html>
{{</highlight>}}

Cordova のバージョン変更
------------------------

{{<note>}}
Cordova のバージョンのアップグレード後、旧バージョンへのダウングレードはできません。なお、アップグレードの前には、プロジェクトのバックアップが自動で行われます。
{{</note>}}

新規作成のプロジェクトに関しては、最新の Cordova
が自動で使用されます。既存のプロジェクト ( 旧バージョンの Cordova を使用 )
に関しては、次の手順に従えば、最新のバージョンにアップグレードできます。

1.  From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Manage Cordova プラグイン">}}.
2.  [ Cordova バージョン ] のドロップダウンリストから、最新のバージョンを選択します。

    {{<img src="/images/monaca_ide/manual/dependencies/cordova_plugin/3.png">}}

## Monaca 側で用意している Cordova プラグイン

「 基本 Cordova プラグイン 」、「 サードパーティー製 Cordova プラグイン
」、どちらのプラグインの追加設定も、Monaca クラウド IDE 上で行えます (
Cordova の公式ページでは、基本 Cordova プラグインは、「 コア Cordova
プラグイン/Cordova コアプラグイン 」 と呼ばれています )。

-   基本 Cordova プラグインとは、バッテリー情報の取得 API、カメラ
    API、住所録の取得 API、端末情報の取得 API など、以前から Cordova
    側で提供していた API を指します。詳細は、 [ 基本 Cordova プラグイン ( Cordova のコア プラグイン ) ](/ja/reference/cordova_6.5/) をご確認ください。
-   サードパーティー製 Cordova プラグインとは、上記以外の Cordova
    プラグインを指し、第三者が開発しています。Monaca クラウド IDE
    でも、複数の [サードパーティー製の Cordova プラグイン](/ja/reference/third_party_phonegap/)
    を提供しており、プロジェクトに追加できます。Monaca
    で扱っている以外のサードパーティー製の Cordova
    プラグインもインポートできます。Monaca
    側であらかじめ用意しているプラグインとは区別して、このようなサードパーティー製のプラグインを、「
    外部の Cordova プラグイン 」 と以後呼ぶことにします。

## Cordova プラグイン の追加とインポート

Cordova プラグインをプロジェクトに追加する場合、次の手順に従います。

1.  Monaca クラウド IDE 上で、 {{<menu menu1="ファイル" menu2="Cordova プラグインの管理">}}
    または {{<menu menu1="設定" menu2="Cordova プラグインの管理 を選択します">}}。
2.  [ Cordova とプラグインの管理 ]
    ページが表示されます。ここでは、基本 Cordova
    プラグインとサードパーティー製の Cordova
    プラグインが一覧表示されます。プロジェクトにプラグインを追加する場合には、対象プラグインの横に表示された
    {{<guilabel name="有効">}} ボタンをクリックします (
    対象のプラグインのアイコン上に、マウスを持ってきます
    )。希望するプラグインが一覧上にない場合には、{{<guilabel name="Cordova プラグインのインポート">}}
    ボタンをクリックして、外部の Cordova
    プラグインもインポートできます。なお、外部の Cordova
    プラグインを追加したプロジェクトを、Monaca
    デバッガー上で実行する場合には、カスタムビルド版の Monaca
    デバッガーが必要になります。詳細は、[ユーザー Cordova プラグインと Monaca デバッガー ]({{<ref "custom_cordova_plugin.ja.md#ユーザー-cordova-プラグインと-monaca-デバッガー">}})
    をご確認ください。

    {{<img src="/images/monaca_ide/manual/dependencies/cordova_plugin/1.png">}}

3.  プラグインを有効化またはインポートした後、プラグイン側の設定を行う必要があれば、対象のプラグインの横に表示された
    {{<guilabel name="設定">}} ボタンをクリックします ( 対象のプラグインのアイコン上に、マウスを持ってきます )。設定用のダイアログが表示されるので、プラグインのバージョン、必要なパラメーターなどを設定します。

    {{<img src="/images/monaca_ide/manual/dependencies/cordova_plugin/2.png">}}

    {{<img src="/images/monaca_ide/manual/dependencies/cordova_plugin/4.png">}}
