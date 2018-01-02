---
title: AdMob Demo
weight: 30
---

In this page, we will show how to integrate Monaca with the most common
mobile ads network called, [AdMob](https://www.google.com/admob/). This
sample app is based on a demo on [AdMob Plugin Pro on
GitHub](https://github.com/floatinghotpot/cordova-admob-pro).

{{<import pid="5923cb95ff2af25b33815106" title="AdMob Demo">}}

*Tested Environment*: 

- Android 6.2
- iOS 9.3.5

{{< figure src="/images/sampleapp/admob/cover.png" title="Banner Ads & Interstitial Ads">}}

## Prerequisite

In this demo, we are using AdMob's ad unit ids for testing only. If you
want to use the ads with your real application, you are required to
register your application with AdMob.

In order to register your application with AdMob, please do as follows:

1. Sign up with [AdMob Apps](https://apps.admob.com).
2. Go to *MONETIZE* tab and click {{<guilabel name="+ MONETIZE NEW APP">}} button.

    {{<img src="/images/sampleapp/admob/8.png">}}

3.  Then, fill in the necessary information such your app name,
    platform, and type of ads. After completed, your will get an ad id
    for each ad unit. You will need to use this id to call each ad in
    your application. Here is an example:

    {{<img src="/images/sampleapp/admob/9.png">}}

## File Components

{{< figure src="/images/sampleapp/admob/7.png">}}

File        | Description
------------------|-----------------------------------
`index.html`      | The startup page
`js/app.js`       | JavaScript file handling app execution
`css/style.css`   | Stylesheet file for the application


## Required JS/CSS Components

- `jQuery`
- `Onsen UI`


## Required Cordova Plugins

  [AdMob Plugin Pro](https://github.com/floatinghotpot/cordova-admob-pro)


## HTML Explanation

We are using [Onsen](https://onsen.io/) for the user interface (UI) of
this demo app.

### Startup Page

The following block code represents the UI of the startup page (see the
screenshot below):

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

{{< figure src="/images/sampleapp/admob/1.png" title="Startup Page">}}

### Ads Size Dialog

The following block code represents the Ads Size dialog allowing users
to select various types of AdMob's ads size such as `SMART_BANNER`,
`MEDIUM_RECTANGLE`, `FULL_BANNER` and so on.

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

{{< figure src="/images/sampleapp/admob/3.png" title="Ads Size Dialog">}}

### Ads Position Dialog

The following block code represents the Ads Position dialog allowing
users to select various positions to place the ads such as `TOP_LEFT`,
`CENTER`, `BOTTOM_RIGHT` and so on.

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

{{< figure src="/images/sampleapp/admob/4.png" title="Ads Position Dialog">}}

## JavaScript Explanation

In this section, we will explain some important functions (in `app.js`
file) used in this sample app.

### admobid Object

From the very beginning, we start by initializing `admobid` object. The
following block code initializes the object based on the device's
platform. The object contains two types of ads such as banner and
interstitial ads.

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
    All of these ad unit ids are for testing only. For the real ad unit ids, you will need to register with AdMob and create your own ad unit ids there.
{{</note>}}

### initialization() Function

Once Cordova and AdMob plugin pro are completely loaded,
`initialization()` function will be called. In this function, several
other functions are called such as:

-   `AdMob.getAdSettings()`: logging AdMob's ads setting information.
-   `AdMob.setOptions()`: setting AdMob's ads setting such as position,
    bgColor and so on.
-   `onAdFailLoad` event handler: displaying error information when the
    ad is failed to load.

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

### createSelectedBanner() Function

This function creates an ad based on the configuration.

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

### showBannerAtPosition() Function

This function shows the ad based on the selected ad's position.

{{<highlight javascript>}}
function showBannerAtPosition(){
    var ads_pos = selected_pos_value;
    if(AdMob) AdMob.showBanner( ads_pos );
}
{{</highlight>}}

### prepareInt() Function

This function prepares an interstitial ad and then shows it once it's
ready.

{{<highlight javascript>}}
function prepareInt(){
    AdMob.prepareInterstitial({
        adId:admobid.interstitial,
        autoShow: $('#autoshow').prop('checked')
    });
}
{{</highlight>}}

### showBannerSize() Function

This function shows a Banner Size dialog ([OnsenUI dialog](https://onsen.io/v1/reference/ons-dialog.html)). Various types
of ads size can be selected such as BANNER, SMART\_BANNER, MEDIUM\_RECTANGLE and so on. For more information, please refer to [Banner Size](https://firebase.google.com/docs/admob/android/banner).

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

###  showBannerPos() Function

This function shows a Ad’s Position dialog ([OnsenUI dialog](https://onsen.io/v1/reference/ons-dialog.html)).

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
