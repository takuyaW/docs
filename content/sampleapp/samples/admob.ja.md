---
title: AdMob のデモ用アプリ
weight: 30
---

このページでは、Monaca を使用して、[AdMob](https://www.google.com/admob/) ( モバイルアド/広告ネットワーク ) の実装方法を解説します。この解説で使用しているデモ用アプリは、[AdMob Plugin Pro](https://github.com/floatinghotpot/cordova-admob-pro) ( Github 上 ) を参考にして、構築されています。

{{<import pid="5923cb95ff2af25b33815106" title="AdMob Demo">}}

**テスト環境** 

- Android 6.2
- iOS 9.3.5

{{< figure src="/images/sampleapp/admob/cover.png" title="Banner Ads & Interstitial Ads">}}                                                                                            
## 事前準備                                                                                  

このデモで使用している AdMob の広告ユニット ID ( Ad Unit ID )
は検証用です。実際に使用する広告がある場合には、AdMob
のサイト上でアプリを登録する必要があります。

AdMob サイト上でのアプリの登録方法を、次に記します。

1.  [AdMob Apps](https://apps.admob.com) にサインアップします。

2.  `収益化` タブを選択して、{{<guilabel name="+ 新しいアプリを収益化">}} ボタンをクリックします ( 2 回目のアプリ登録であれば、こちらのボタンが表示されます )。

    {{<img src="/images/sampleapp/admob/8.png">}}

3.  必要な情報 ( アプリ名、プラットフォーム、広告フォーマットなど )
    を入力します。入力後、広告ユニットの ID
    が表示されます。アプリ上で広告を表示するときに、この ID
    が必要になります。

    {{<img src="/images/sampleapp/admob/9.png">}}

ファイル構成
------------

{{< figure src="/images/sampleapp/admob/7.png">}}

ファイル | 説明
--------------|-----------------------------------
`index.html`  |    スタート画面のページ
`js/app.js`   |    アプリの実行時にさまざまな処理を行う JavaScript ファイル
`css/style.css` |  アプリのスタイルシート

必要な JS/CSS コンポーネント
----------------------------

- `jQuery`   
- `Onsen`    

必要な Cordova プラグイン
-------------------------

- [AdMob Plugin Pro](https://github.com/floatinghotpot/cordova-admob-pro)                                               

## HTML の解説                                                               

このデモ用アプリでは、[Onsen UI](https://onsen.io/) を使用して、UI
を構築しています。

### 起動時のページ

次のコードを使用して、プロジェクトの起動時に表示されるページを構築しています。

{{<highlight html>}}
<h3 style="text-align: center;">Monaca with AdMob Demo</h3>

<div id="fullpage">
    <h3>Banner Ads</h3>

    <ons-input type="checkbox" id='overlap'>  overlap</ons-input>
    &nbsp;&nbsp;&nbsp;
    <ons-input type="checkbox" id='offsetTopBar'>  offsetTopBar</ons-input>
    <br/><br/>
    <ons-button id='btn_size' style="font-size: 80%; background-color: #25a6d9" onclick='show("banner_size.html", "btn_size");'>
        <ons-icon icon="fa-chevron-down" fixed-width="false"></ons-icon>
        <span id="btn_size_txt">SMART_BANNER</span>
    </ons-button>
    <ons-button id='btn_pos' style="font-size: 80%; background-color: #25a6d9" onclick='show("banner_pos.html", "btn_pos");'>
        <ons-icon icon="fa-chevron-down" fixed-width="false"></ons-icon>
        <span id="btn_pos_txt">BOTTOM_CENTER</span>
    </ons-button>
    <br /><br />
    <ons-row>
        <ons-col>
            <ons-button id='btn_create'>Create Banner</ons-button>
            <ons-button id='btn_remove'>Remove Banner</ons-button>
        </ons-col>
    </ons-row>
    <ons-row style="height: 10px;"></ons-row>
    <ons-row>
        <ons-col>
            <ons-button id='btn_show'>Show Banner</ons-button>
            <ons-button id='btn_hide'>Hide Banner</ons-button>
        </ons-col>
    </ons-row>
    <hr />

    <h3>Interstitial Ads</h3>
    <ons-input id="autoshow" type="checkbox" checked>  auto show when ready</ons-input>
    <br/><br/>
    <ons-button id="btn_prepare">Prepare</ons-button>
    <ons-button id="btn_showfull">Show</ons-button>

</div>
{{</highlight>}}

{{< figure src="/images/sampleapp/admob/1.png" title="起動時のページ">}}

### 広告サイズの設定ダイアログ

広告サイズの設定ダイアログの表示には、次のコードが使用されています。このダイアログ上では、AdMob
の広告サイズ ( `SMART_BANNER`、`MEDIUM_RECTANGLE`、`FULL_BANNER` など )
を選択できます。

{{<highlight html>}}
...
<ons-template id="banner_size.html">
    <ons-dialog var="dialog" cancelable mask-color="rgba(0, 0, 0, 0.7)">
        <div class="margin10 text-center">
            <ons-toolbar inline>
                <div class="center">
                    Banner Size
                </div>
            </ons-toolbar>

            <ons-list style="margin:0; padding:0; font-size: 90%;">
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" name="radio" value='BANNER'>  BANNER</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" name="radio" value='FULL_BANNER'>  FULL_BANNER</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" name="radio" value='LEADERBOARD'>  LEADERBOARD</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" name="radio" value='MEDIUM_RECTANGLE'>  MEDIUM_RECTANGLE</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" name="radio" value="SMART_BANNER" checked>  SMART_BANNER</ons-input>
                </ons-list-item>
            </ons-list>
        </div>
    </ons-dialog>
</ons-template>
...
{{</highlight>}}

{{<figure src="/images/sampleapp/admob/3.png" title="広告サイズの設定ダイアログ">}}

### 広告の表示位置の設定ダイアログ

広告の表示位置の設定ダイアログには、次のコードが使用されています。このダイアログ上では、広告の表示位置
( `TOP_LEFT`、`CENTER`、`BOTTOM_RIGHT` など ) を選択できます。

{{<highlight html>}}
...
<ons-template id="banner_pos.html">
    <ons-dialog var="dialog" cancelable mask-color="rgba(0, 0, 0, 0.7)" style="width: 90%; height: auto">
        <div class="margin10 text-center">
            <ons-toolbar inline>
                <div class="center">
                    Banner Position
                </div>
            </ons-toolbar>

            <ons-list style="margin:0; padding:0; font-size: 90%">
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='1'>TOP_LEFT</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='2'>  TOP_CENTER</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='3'>  TOP_RIGHT</ons-input>
                </ons-list-item>
                <!--<ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='4'>  LEFT</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='5'>  CENTER</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='6'>  RIGHT</ons-input>
                </ons-list-item>-->
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='7'>  BOTTOM_LEFT</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='8' checked>  BOTTOM_CENTER</ons-input>
                </ons-list-item>
                <ons-list-item modifier="tappable">
                    <ons-input type="radio" id="radio1" name="radio" value='9'>  BOTTOM_RIGHT</ons-input>
                </ons-list-item>
            </ons-list>
        </div>
    </ons-dialog>
</ons-template>
...
{{</highlight>}}

{{<figure src="/images/sampleapp/admob/4.png" title="広告の表示位置の設定ダイアログ">}}

JavaScript の解説
-----------------

ここでは、`app.js` ファイル内に記述されている、主な関数を解説します。

### admobid オブジェクト

最初に行う処理は、`admobid`
オブジェクトの初期化です。次に記述されているブロックでは、端末のプラットフォームに応じて、異なる広告ユニット
ID ( Ad Unit ID )
を指定しています。いずれの場合でも、インタースティシャル広告とバナー広告の
2 種類を、オブジェクトに格納しています。

{{<highlight javascript>}}
var admobid = {};
if (/(android)/i.test(navigator.userAgent)){
    console.log('Android');
    admobid = { // for Android
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)){
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}
{{</highlight>}}

{{<note>}}
    このデモに使用されている広告ユニット ID ( Ad Unit ID ) は、検証用の ID です。製品版に使用する広告ユニット ID は、別途、AdMob サイトで作成する必要があります。その場合には、AdMob サイトへ行き、アカウントの登録作業から行ってください。
{{</note>}}

### initialization() 関数

Cordova と AdMob プラグインの読み込み完了後に、`initialization()`
関数が呼び出されます。この関数内では、次の関数を呼び出しています。

-   `AdMob.getAdSettings()`: 広告の設定情報へアクセスします。
-   `AdMob.setOptions()`: 広告の表示設定 ( 表示位置、背景色など )
    を行います。
-   `onAdFailLoad` イベントハンドラー:
    広告の読み込み失敗時、エラーの詳細を表示します。

{{<highlight javascript>}}
function initialization(){
    AdMob.getAdSettings(function(info){
        console.log('adId: ' + info.adId + '\n' + 'adTrackingEnabled: ' + info.adTrackingEnabled);
    }, function(){
        console.log('failed to get user ad settings');
    });

    AdMob.setOptions({
        //adId: admobid.banner,
        //adSize: 'SMART_BANNER',
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        isTesting: true, // set to true, to receiving test ad for testing purpose
        bgColor: 'black', // color name, or '#RRGGBB'
        // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
        // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    });

    // new events, with variable to differentiate: adNetwork, adType, adEvent
    $(document).on('onAdFailLoad', function(e){
        // when jquery used, it will hijack the event, so we have to get data from original event
        if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
        var data = e.detail || e.data || e;

        alert('error: ' + data.error +
            ', reason: ' + data.reason +
            ', adNetwork:' + data.adNetwork +
            ', adType:' + data.adType +
            ', adEvent:' + data.adEvent); // adType: 'banner', 'interstitial', etc.
        });

    $('#btn_size').click(showBannerSize);
    $('#btn_pos').click(showBannerPos);
    $('#btn_create').click(createSelectedBanner);
    $('#btn_show').click(showBannerAtPosition);

    $('#btn_remove').click(function(){
        AdMob.removeBanner();
    });

    $('#btn_hide').click(function(){
        AdMob.hideBanner();
    });

    // test interstitial ad
    $('#btn_prepare').click(function(){
        AdMob.prepareInterstitial({
            adId:admobid.interstitial,
            autoShow: $('#autoshow').prop('checked')
        });
    });

    $('#btn_showfull').click(function(){
        AdMob.showInterstitial();
    });
}
{{</highlight>}}

### createSelectedBanner() 関数

この関数では、設定情報に基づき、広告を表示しています。

{{<highlight javascript>}}
function createSelectedBanner(){
    AdMob.removeBanner();
    var ads_size = $("#btn_size_txt").text();
    var ads_pos = selected_pos_value;
    if(AdMob) AdMob.createBanner({
        adId: admobid.banner,
        overlap: $('#overlap').prop('checked'),
        offsetTopBar: $('#offsetTopBar').prop('checked'),
        adSize: ads_size,
        position: ads_pos
    });
}
{{</highlight>}}

### showBannerAtPosition() 関数

この関数では、選択された表示位置に基づき、広告を表示しています。

{{<highlight javascript>}}
function showBannerAtPosition(){
    var ads_pos = selected_pos_value;
    if(AdMob) AdMob.showBanner( ads_pos );
}
{{</highlight>}}

### prepareInt() 関数

この関数では、インタースティシャル広告を読み込み、次に、表示しています。

{{<highlight javascript>}}
function prepareInt(){
    AdMob.prepareInterstitial({
        adId:admobid.interstitial,
        autoShow: $('#autoshow').prop('checked')
    });
}
{{</highlight>}}

### showBannerSize() 関数

この関数を使用して、バナーサイズの設定ダイアログ ( [OnsenUI のダイアログを使用](https://onsen.io/v1/reference/ons-dialog.html) )
を表示します。この設定ダイアログ上では、広告サイズ ( BANNER、SMART\_BANNER、MEDIUM\_RECTANGLE など ) を選択できます。バナーサイズの詳細は、[こちら](https://firebase.google.com/docs/admob/android/banner) ( 「 Banner Size 」 欄 ) をご確認ください。

{{<highlight javascript>}}
function showBannerSize() {
    var dlg = "banner_size.html";
    if (!dialogs[dlg]) {
          ons.createDialog(dlg).then(function(dialog) {
            dialogs[dlg] = dialog;
            dialog.show();

            $('input[name=radio_size]').on('change', function() {
                var selected_value = $('input[name=radio_size]:checked').val();
                $("#btn_size_txt").text(selected_value);
                dialog.hide();
            });
        });
    } else {
        dialogs[dlg].show();
    }
}
{{</highlight>}}

### showBannerPos() 関数

この関数を使用して、広告の表示位置の設定ダイアログ ( [OnsenUI のダイアログを使用](https://onsen.io/v1/reference/ons-dialog.html) )
を表示します。

{{<highlight javascript>}}
function showBannerPos() {
    var dlg = "banner_pos.html";
    if (!dialogs[dlg]) {
          ons.createDialog(dlg).then(function(dialog) {
            dialogs[dlg] = dialog;
            dialog.show();

            $('input[name=radio_pos]').on('change', function() {
                var selected_value = $('input[name=radio_pos]:checked').val();
                var selected_text = btnPosLabel(selected_value);
                $("#btn_pos_txt").text(selected_text);
                selected_pos_value = selected_value;
                dialog.hide();
            });
        });
    } else {
        dialogs[dlg].show();
    }
}
{{</highlight>}}