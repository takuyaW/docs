---
title: AppsFlyer
weight: 20
---

{{<note>}}
使用する Cordova のバージョンにより、AppsFlyer
の使用方法が異なります。バージョン別の使用方法がこのページに記載されていますので、サービスをご利用になる前に、内容をご確認ください。
{{</note>}}

[AppsFlyer](https://www.appsflyer.com/overview/)
は、モバイル広告に関する宣伝効果の測定 ( アトリビューション )
および収集したデータの分析 ( アナリティクス )
において、業界における標準のツールになりつつあります。AppsFlyer
が提供する正確な測定・分析結果に基づき、広告の提供元は、広告のターゲットの絞り込み、投資額の見直しなどを行え、よって、投資対効果 ( ROI ) を最適化できます。

AppsFlyer
を使用すれば、アプリのインストール状況、ダウンロード状況、コンバージョン情報
( conversion/目的達成の成否 ) などを監視・追跡できます。また、AppsFlyer
提供の API
を使用すれば、他のアプリ/プラットフォームと連携することができます。

事前準備
--------

AppsFlyer を使用した監視・追跡を行う前に、次の情報が必要となります。

1.  `devKey`: AppsFlyer 提供の devKey です。
2.  `appId`: ( iOS の場合 ) App Store で使用する App ID です。

Monaca プロジェクトに AppsFlyer を追加する方法
----------------------------------------------

1.  Monaca クラウド IDE から設定する場合、 {{<menu menu1="設定" menu2="外部サービス連携">}}
    を選択するか、または、Monaca Localkit から設定する場合、
    {{<menu menu1="ビルド設定" menu2="外部サービス連携 ( 左パネル )">}} を選択します。

2.  AppsFlyer サービスの {{<guilabel name="詳細を見る">}} ボタンをクリックします。

3.  {{<guilabel name="インストール">}} ボタンをクリックします。

    {{<img src="/images/reference/service_integration/apps_flyer/1.png" width="500">}}

4.  インストールを継続するか確認する画面が表示されます。 {{<guilabel name="OK">}}
    をクリックして、インストールを開始します。

AppsFlyer の使用方法 ( Cordova バージョン 6 以降の場合 )
--------------------------------------------------------

### 設定

次の記述を追加します。devKey ( および appID )
を渡して、監視・追跡処理を初期化します。

{{<highlight javascript>}}
document.addEventListener("deviceready", function(){

    var options = {
        devKey:  'xxXXXXXxXxXXXXxXXxxxx8'  // your AppsFlyer devKey
    };

    var userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
        options.appId = "123456789";       // your ios app id in app store
    }

    window.plugins.appsFlyer.initSdk(options);

}, false);
{{</highlight>}}

### 使い方

#### SDK Initialization

SDK を初期化します。

{{<highlight javascript>}}
initSdk(options, onSuccess, onError): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`options` | オブジェクト | SDK の設定を行います ( 設定値に関しては、下の 「 オプション 」 表をご確認ください )。
`onSuccess` | (`message`: 文字列) => void | 成功時のコールバック : SDK の初期化が成功したときに呼ばれます ( 任意 )。
`onError` | (`message`: 文字列) => void | 失敗時のコールバック : SDK の初期化時に、エラーが発生した場合に呼ばれます ( 任意 )。

**options オブジェクト**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|------------------
`devKey` | 文字列 | | [Dev key の解説 ( AppsFlyer のサイト )](https://support.appsflyer.com/hc/ja/articles/208164153-AppsFlyer-SDK%E5%AE%9F%E8%A3%85%E3%82%AC%E3%82%A4%E3%83%89-Android)
`appId` | 文字列 | | ( iOS の場合 ) [App Store で使用する App ID](https://support.appsflyer.com/hc/ja/articles/207478863-AppsFlyer-SDK-%E5%AE%9F%E8%A3%85%E3%82%AC%E3%82%A4%E3%83%89-iOS) です。
`isDebug` | 真偽値 | `false` | デバッグモード ( 任意 )
`onInstallConversionDataListener` | 真偽値 | `false` | アトリビューション/コンバージョン データに、SDK 経由でアクセスします ( ディファード ディープリンク/Deferred DeepLinking )。AppsFlyer プラグインでは、アトリビューション データを、onSuccess コールバックに返します。詳細は、次のリンク先をご確認ください。 <ul><li>[ディファード ディープリンク ( Android の場合 )](https://support.appsflyer.com/hc/ja/articles/212736766-SDK%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9FAppsFlyer%E3%82%A2%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3-%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%87%E3%83%BC%E3%82%BF-Android-%E5%8F%96%E5%BE%97%E6%96%B9%E6%B3%95-Accessing-AF-Attribution)</li><li>[ディファード ディープリンク ( iOS の場合 )](https://support.appsflyer.com/hc/ja/articles/209621766-SDK%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9FAppsFlyer%E3%82%A2%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3-%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%87%E3%83%BC%E3%82%BF-iOS-%E5%8F%96%E5%BE%97%E6%96%B9%E6%B3%95-Accessing-AF-Attribution)</li></ul>

**例**

`initSdk()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var onSuccess = function(result) {
    //handle result
};

function onError(err) {
    // handle error
}

var options = {
    devKey:  'd3Ac9qPardVYZxfWmCspwL',
    appId: '123456789',
    isDebug: false,
    onInstallConversionDataListener: true
};

window.plugins.appsFlyer.initSdk(options, onSuccess, onError);
{{</highlight>}}

#### In-App Events Tracking API 

`trackEvent` メソッドを使用して、AppsFlyer の分析メカニズム ( AppsFlyer
analytics )
側に、アプリ内イベントの収集データを渡します。また、このメソッドを使用すれば、監視対象のイベントを、コードに直接追加して、動的に追加できるようになります。アプリ内イベントを使用すると、ユーザーの動向を分析できます。また、各種キャンペーンおよびメディアソースへの関連付けもできます
(
ユーザーの操作と、そのきっかけとなったキャンペーンなどを対応付けできます
)。ROI ( 投資対効果 ) と LTV ( 顧客生涯価値 )
の計算に必要となる、データ収集対象のイベントに関しては、慎重に選択する必要があります。

{{<highlight javascript>}}
trackEvent(eventName, eventValues): void (optional)
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`eventName` | 文字列 | イベント名 ( カスタム可能 )。ダッシュボード上に表示されます。
`eventValue` | オブジェクト | イベントの詳細

**例**

`trackEvent()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var eventName = "af_add_to_cart";

var eventValues = {
    "af_content_id": "id123",
    "af_currency":"USD",
    "af_revenue": "2"
};

window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

#### Currency Code Setting

通貨コードを変更できます。

{{<highlight javascript>}}
setCurrencyCode(currencyId): void
{{</highlight>}}

**パラメーター**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|------------------
`currencyId` | 文字列 | `USD` | 使用できる通貨コードに関しては、[こちら ( ISO 4217 )](http://www.xe.com/iso4217.php) をご確認ください。

**例**

`setCurrencyCode()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
window.plugins.appsFlyer.setCurrencyCode("USD");
window.plugins.appsFlyer.setCurrencyCode("GBP"); // British Pound
{{</highlight>}}

#### Customer User ID Setting (Advanced)

カスタム ID をセットします。AppsFlyer 提供の ID 群 ( 端末 ID、ユーザー
ID など ) と、このカスタム ID を紐づけすれば、各種情報を、カスタム ID
下に集約できるようになります。このカスタム ID ( AppsFlyer
側とユーザー側で使用している ID の紐づけに使用 ) は、AppsFlyer
が提供する CSV レポートを出力時、および、PostBack 系の API
の使用時にも使用できます。

{{<note>}}
この ID の設定は、アプリを初めて起動するときに行う必要があります ( SDK
の初期化時 )。実装方法としては、deviceready イベントの処理時に、この API
を呼び出すことを推奨します。
{{</note>}}

{{<highlight javascript>}}
setAppUserId(customerUserId): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`customerUserId` | 文字列 | 独自のカスタム ID

**例**

`setAppUserId()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

#### GCM Project Number Setting

GCM のプロジェクト番号をセットします。この番号を使用して、アプリのアンインストールを監視・追跡します
( Android プラットフォーム向け )。

{{<highlight javascript>}}
setGCMProjectID(GCMProjectNumber): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`GCMProjectNumber` | 文字列 | GCM のプロジェクト番号。Google Developer Console 上で確認できます。詳細は、[Android アンインストール トラッキング](https://support.appsflyer.com/hc/ja/articles/209621846-Android-%E3%82%A2%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0) ページをご確認ください。

#### Uninstall Tracking 

アプリのアンインストールを監視・追跡するため、iOS
のデバイストークンをセットします ( iOS プラットフォーム向け )。

{{<highlight javascript>}}
registerUninstall(token): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`token` | 文字列 | iOS のデバイストークン。 `UnityEngine.iOS.NotificationServices.deviceToken` を使用すれば、デバイストークンを取得できます。詳細は、[Unity の解説](https://support.appsflyer.com/hc/en-us/articles/213766183-Unity)、および、[iOS アンインストールトラッキングの解説](https://support.appsflyer.com/hc/ja/articles/213838823-iOS%E3%82%A2%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0) をご確認ください。

#### Getting AppsFlyer's Device ID

この API を使用すれば、AppsFlyer 側で独自に割り振っている端末 ID
を取得できます。この端末 ID は、各種レポートの出力時、および、各種 API
で使用されます。

{{<highlight javascript>}}
getAppsFlyerUID(getUserIdCallbackFn): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`getUserIdCallbackFn` | () =&gt; void | 成功時のコールバック

**例**

`getAppsFlyerUID()` 関数の使用例を、次に記します。

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

#### Deeplinks Tracking

AppsFlyer のアトリビューション
データを使用して、ディープリンクを追跡します。

{{<note>}}
Android バージョン 4.2.5 以降では、ディープリンク関連のメタデータ (
scheme、host ) は 、自動的に送付されます。
{{</note>}}

{{<highlight javascript>}}
handleOpenUrl(url): void
{{</highlight>}}

**パラメーター**

名前 | 型 | 解説 
-----|------|-------------
`url` | 文字列 | Url

**例**

The following snippet shows how to use `handleOpenurl()` function:

{{<highlight javascript>}}
var handleOpenURL = function(url) {
    window.plugins.appsFlyer.handleOpenUrl(url);
}
{{</highlight>}}

AppsFlyer の使用方法 ( Cordova バージョン 5 系以前の場合 )
----------------------------------------------------------

### 設定

Monaca プロジェクトへ AppsFlyer
を追加したあと、実際にプラグインを使用する前に、いくつかの設定を行う必要があります。次の手順に従います。

1.  プロジェクトの `www` フォルダーのルートディレクトリー下の `config.xml`
    へ、次の記述を追加します ( Monaca 上での処理 )。

    {{<highlight xml>}}
<!-- for iOS -->
<feature name="AppsFlyerPlugin">
    <param name="ios-package" value="AppsFlyerPlugin" />
</feature>{{</highlight>}}

    {{<highlight xml>}}
<!-- for Android -->
<feature name="AppsFlyerPlugin">
    <param name="android-package" value="com.appsflyer.cordova.plugin.AppsFlyerPlugin" />
</feature>{{</highlight>}}

2.  Android の場合には、`AndroidManifest.xml` へ、次の記述を追加します (
    Monaca 上での処理 )。

    {{<highlight xml>}}
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />{{</highlight>}}

3.  AppsFlyer へログインして、アプリを登録します ( AppsFlyer 上での処理 )。アプリの登録時に入力する情報とマニフェストに登録する ( または、登録している ) 情報は、一致する必要があります。App Store/Google Play ストア/Microsoft ストアを経由しない Android アプリのインストールの監視・追跡に関しては、[こちら](https://support.appsflyer.com/hc/en-us/articles/207447023-Tracking-Installs-for-Out-Of-Store-Applications) をご確認ください。[ 翻訳者メモ ： 上記ストアを経由しないでインストールするアプリを、AppsFlyer では、Out of Store アプリと呼称しています ]

4.  次の記述を、コードに追加します ( Monaca 上での処理 )。実際の使用時には、適当な DEV KEY を渡して、監視・追跡処理を初期化します。

    {{<highlight javascript>}}
document.addEventListener("deviceready", function(){
    var args = [];
    var devKey = "xxXXXXXxXxXXXXxXXxxxx8";   // your AppsFlyer devKey
    args.push(devKey);
    var userAgent = window.navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test( userAgent )) {
        var appId = "123456789";            // your ios app id in app store
        args.push(appId);
    }
    window.plugins.appsFlyer.initSdk(args);
}, false);{{</highlight>}}

5.  Google Play/App Store
    に提出する前に、[Android](https://support.appsflyer.com/hc/en-us/articles/207032136-Testing-AppsFlyer-Android-SDK-Integration-Before-Submitting-to-Google-Play)/[iOS](https://support.appsflyer.com/hc/en-us/articles/207032046-Testing-AppsFlyer-iOS-SDK-Integration-Before-Submitting-to-the-App-Store-)
    端末で、アプリを検証することを推奨します。

{{<note>}}
AppsFlyer の使用に関する詳細は、 {{<link href="https://support.appsflyer.com/hc/ja" title="AppsFlyer ドキュメント ( 日本語あり )">}} をご確認ください。
{{</note>}}

### 使い方

ここまでの手順で、プラグインの準備が整いました。ここからは、AppsFly
が提供する API をいくつか紹介します。

#### Customer User ID Setting (Advanced)

カスタム ID をセットします。AppsFlyer 提供の ID 群 ( 端末 ID、ユーザー
ID など ) と、このカスタム ID を紐づけすれば、各種情報を、カスタム ID
下に集約できるようになります。このカスタム ID ( AppsFlyer
側とユーザー側で使用している ID の対応付けに使用 ) は、AppsFlyer
が提供する CSV レポートを出力時、および、PostBack 系の API
の使用時にも使用できます。

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

{{<note>}}
この ID の設定は、アプリを初めて起動するときに行う必要があります ( SDK
の初期化時 )。実装方法としては、deviceready イベントの処理時に、この API
を呼び出すことを推奨します。
{{</note>}}

#### Currency Code Setting (Optional)

デフォルトでは、通貨コード ( Currency Code ) は、`USD` ( 米ドル )
に設定されています。設定は、次のようにすれば変更できます。

{{<highlight javascript>}}
//For example, you want to change to British Pound
window.plugins.appsFlyer.setCurrencyCode("GBP");
{{</highlight>}}

{{<note>}}
使用可能な通貨コードに関しては、 {{<link title="ISO 4217 Currency Codes" href="http://www.xe.com/iso4217.php">}} をご確認ください。
{{</note>}}

#### In-App Events Tracking API

アプリ内イベントを使用すると、ユーザーの動向を分析できます。また、特定のキャンペーンまたはメディアソースへの関連付けもできます ( ユーザーの操作と、そのきっかけとなったキャンペーンなどを対応付けできます )。ROI ( 投資対効果 ) と LTV ( 顧客生涯価値 ) の計算に必要となる、データ収集対象のイベントに関しては、慎重に選択する必要があります。

`trackEvent` メソッドを使用して、AppsFlyer の分析メカニズム ( AppsFlyer analytics )
側に、アプリ内イベントの収集データを渡します。また、このメソッドを使用すれば、監視対象のイベントを、コードに直接追加して、動的に追加できるようになります。

{{<highlight javascript>}}
// eventName - any string to define the event name. For example: “registration” or “purchase”
// eventValue - the sales value. For example: 0.99 or 0.79
window.plugins.appsFlyer.sendTrackingWithEvent(eventName, eventValue);
// window.plugins.appsFlyer.sendTrackingWithEvent(eventName, "");
{{</highlight>}}

#### Rich In-App Events Tracking API

AppsFlyer 提供の 「 リッチ アプリ内イベント 」
では、アプリのインストール後に起こりうる、すべてのイベントを監視・追跡でき、加えて、メディアソースまたはキャンペーンと、発生したイベントを関連付けることができます。各アプリ内イベントは、イベント名
( event name )、および、関連するイベント パラメーター群で構成されます。

{{<highlight javascript>}}
var eventName = "af_add_to_cart";
var eventValues = {"af_content_id": "id123", "af_currency":"USD", "af_revenue": "2"};
window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

#### Getting AppsFlyer’s Device ID (Advanced)

この API を使用すれば、AppsFlyer 側で独自に割り振っている端末 ID
を取得できます。この端末 ID は、各種レポートの出力時、および、各種 API
で使用されます。

{{<highlight javascript>}}
// getUserIdCallbackFn - callback function
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

この API の使用例を、次に記します。

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

#### Accessing AppsFlyer Attribution/Conversion Data (Deferred Deep-linking)

AppsFlyer では、アトリビューション データへ、SDK
レベルで、リアルタイムにアクセスできます。このデータを使用して、アプリの新規インストール・初回起動時、ユーザー側に最初に表示されるページをカスタマイズできます。このような処理は、「
ディファード ディープリンク 」 ( Deferred DeepLinking )
と呼ばれています。Web
の分野では、一般的な処理ですが、、モバイルアプリのエコシステム下で、このような処理を実現することは、技術的に難しいとされています。AppsFlyer
は、プラットフォームの種類および状況にかかわらず、この処理を行ってくれます。

詳細は、[AppsFlyer のアトリビューションデータ/コンバージョンデータへ SDK
からアクセスする方法 ( iOS と Android 向け
)](https://support.appsflyer.com/hc/ja/articles/209621766-SDK%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9FAppsFlyer%E3%82%A2%E3%83%88%E3%83%AA%E3%83%93%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3-%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%87%E3%83%BC%E3%82%BF-iOS-%E5%8F%96%E5%BE%97%E6%96%B9%E6%B3%95-Accessing-AF-Attribution)
をご確認ください。

{{<note>}}
    AppsFlyer プラグインでは、アトリビューションデータを使用して、 <code>onInstallConversionDataLoaded</code> イベントを実行します。なお、データの取得するため、イベントリスナーを設定する必要があります。
{{</note>}}

{{<highlight javascript>}}
document.addEventListener('onInstallConversionDataLoaded', function(e){
    var attributionData = (JSON.stringify(e.detail));
    alert(attributionData);
}, false);
{{</highlight>}}

Monaca から AppsFlyer を削除する方法
------------------------------------

1.  Monaca クラウド IDE から行う場合、
    {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択するか、または、Monaca
    Localkit から行う場合、 {{<menu menu1="ビルド設定" menu2="Cordova プラグイン ( 左パネル )">}} を選択します。

2.  `有効なプラグイン` 欄へ移動します。AppsFlyer
    プラグイン上にマウスポインターを持っていき、 {{<guilabel name="無効">}}
    ボタンをクリックします。

    {{<img src="/images/reference/service_integration/apps_flyer/2.png">}}
