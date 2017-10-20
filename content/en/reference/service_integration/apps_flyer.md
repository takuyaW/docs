---
title: AppsFlyer
---

# AppsFlyer

{{<note>}}
Please note that the AppsFlyer is used differently depending on the
Cordova version of your project. Please refer to the document carefully.
{{</note>}}

[AppsFlyer](https://www.appsflyer.com/overview/) is the market leader in
mobile advertising attribution and analytics, helping marketers to
pinpoint their targeting, optimize their ad spend and boost their ROI
(Return on Investment).

AppsFlyer allows users to monitor and track application installations,
downloads, and conversions. The AppsFlyer API allows developers to
access and integrate the functionality of AppsFlyer with other
applications.

## Prerequisite

In order to enable AppsFlyer to start tracking your app, you are
required to have the following two information such as:

1.  `devKey`: Your application devKey provided by AppsFlyer.
2.  `appId`: (For iOS only) Your iOS app ID in the App Store.

## Adding AppsFlyer to Monaca Project

1.  For Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Service Integration">}} or go
    to {{<menu menu1="Build Settings" menu2="Service Integration">}} for Monaca Localkit.
2.  Click {{<guilabel name="Details">}} button of *AppsFlyer* service.
3.  Then, click {{<guilabel name="Install">}} button to add it into your project.

    {{<img src="/images/reference/service_integration/apps_flyer/1.png" width="500">}}

4.  You will be asked to confirm the setup. Click {{<guilabel name="OK">}} to start the
    installation.

## Using AppsFlyer with Cordova Version 6 or Higher

### Usage

Add the following lines to your code to initialize the tracking with
your own AppsFlyer `devKey` and `appId`:

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

### API Methods

#### *initSdk()*

Initialize the SDK.

{{<syntax>}}
initSdk(options, onSuccess, onError): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`options` | Object | SDK configuration (please refer to the *options object* table below)
`onSuccess` | (`message`: string) => void |	(optional) Success callback: called after a successfull SDK initialization. 
`onError` | (`message`: string) => void | (optional) Error callback: called when error occurs during initialization. 


*options object*

Name | Type | Default | Description
-----|------|---------|------------------
`devKey` | String | | [Appsflyer Dev key](https://support.appsflyer.com/hc/en-us/articles/207032126-AppsFlyer-SDK-Integration-Android#SDK_Initialization_and_Installation_Event_(Minimum_Requirement_for_Tracking))
`appId` | String | | (For iOS only) Your iOS app ID in the App Store
`isDebug` | Boolean | `false` | (optional) Debug mode 
`onInstallConversionDataListener` | Boolean | `false` | <ul>Accessing AppsFlyer Attribution/Conversion Data from the SDK (Deferred Deeplinking). AppsFlyer plugin will return attribution data in onSuccess callback. For more information, please refer to:<li>[Deferred Deeplinking for Android](https://support.appsflyer.com/hc/en-us/articles/207032176-Accessing-AppsFlyer-Attribution-Conversion-Data-from-the-SDK-Android-Deferred-Deeplinking-)</li><li>[Deferred Deeplinking for iOS](https://support.appsflyer.com/hc/en-us/articles/207032096-Accessing-AppsFlyer-Attribution-Conversion-Data-from-the-SDK-Deferred-Deeplinking-)</li></ul>

*Example*

The following snippet shows how to use `initSdk()` function:

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

#### trackEvent()

Allow you to send in-app events to AppsFlyer analytics. This method
allows you to add events dynamically by adding them directly to the
application code. These in-app events help you track how loyal users
discover your app, and attribute them to specific
campaigns/media-sources. Please take the time to define the event(s) you
want to measure to allow you to track ROI (Return on Investment) and LTV
(Lifetime Value).

{{<syntax>}}
trackEvent(eventName, eventValues): void (optional)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`eventName` | String | Custom event name, is presented in your dashboard.
`eventValue` | Object | Event details

*Example*

The following snippet shows how to use `trackEvent()` function:

{{<highlight javascript>}}
var eventName = "af_add_to_cart";

var eventValues = {
    "af_content_id": "id123",
    "af_currency":"USD",
    "af_revenue": "2"
};

window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

#### setCurrencyCode()

Change the currency code.

{{<syntax>}}
setCurrencyCode(currencyId): void
{{</syntax>}}

*Parameter*

Name | Type | Default | Description
-----|------|---------|-----------------
`currencyId` | String | `USD` | [ISO 4217 Currency Codes](http://www.xe.com/iso4217.php)

*Example*

The following snippet shows how to use `setCurrencyCode()` function:

{{<highlight javascript>}}
window.plugins.appsFlyer.setCurrencyCode("USD");
window.plugins.appsFlyer.setCurrencyCode("GBP"); // British Pound
{{</highlight>}}

#### setAppUserId()

Set your own custom ID. This enables you to cross-reference your own
unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID
is available in AppsFlyer CSV reports along with postbacks APIs for
cross-referencing with you internal IDs.

{{<note>}}
The ID must be set during the first launch of the app at the SDK
initialization. The best practice is to call this API during the
deviceready event, where possible.
{{</note>}}

{{<syntax>}}
setAppUserId(customerUserId): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`customerUserId` | String | Your custom ID

*Example*

The following snippet shows how to use `setAppUserId()` function:

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

#### setGCMProjectID()

Set a GCM Project Number in order to enable app uninstall tracking for Android platform.

{{<syntax>}}
setGCMProjectID(GCMProjectNumber): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`GCMProjectNumber` | String | GCM Project number. It is obtained through your google developer console. For more information, please refer to [Android Uninstall Tracking Guide](https://support.appsflyer.com/hc/en-us/articles/208004986-Android-Uninstall-Tracking).

#### registerUninstall()

Set your iOS device token in order to enable app uninstall tracking for
iOS platform.

{{<syntax>}}
registerUninstall(token): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`token` | String | Your iOS device token. You can get your device token from `UnityEngine.iOS.NotificationServices.deviceToken`. For more information, please refer to [Unity](https://support.appsflyer.com/hc/en-us/articles/213766183-Unity) and [iOS Uninstall Tracking Guide](https://support.appsflyer.com/hc/en-us/articles/211211963-iOS-Uninstall-Tracking).

#### getAppsFlyerUID()

Get AppsFlyer’s proprietary Device ID. The AppsFlyer Device ID is the
main ID used by AppsFlyer in Reports and APIs.

{{<syntax>}}
getAppsFlyerUID(getUserIdCallbackFn): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`getUserIdCallbackFn` | () =&gt; void | Success callback

*Example*

The following snippet shows how to use `getAppsFlyerUID()` function:

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

#### handleOpenUrl()

Track deeplinks with AppsFlyer attribution data (for iOS only).

{{<note>}}
For Android version 4.2.5 and higher, the deeplinking metadata
(scheme/host) is sent automatically.
{{</note>}}

{{<syntax>}}
handleOpenUrl(url): void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`url` | String | Url

*Example*

The following snippet shows how to use `handleOpenUrl()` function:

{{<highlight javascript>}}
var handleOpenURL = function(url) {
    window.plugins.appsFlyer.handleOpenUrl(url);
}
{{</highlight>}}

## Using AppsFlyer with Cordova Version Lower than 6

### Configure AppsFlyer in Monaca

After adding AppsFlyer to your Monaca project, you need to make some
configurations before starting to use the plugin. Please follow the
configuration below:

1.  Add the following snippet to the `config.xml` in the root directory of
    your `www` folder:

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

2.  For Android, add the following snippet to the `AndroidManifest.xml`:

    {{<highlight xml>}}
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />{{</highlight>}}

3.  Add new app on AppsFlyer dashboard. Make sure that the value in the
    manifest and the value entered in the dashboard are identical. If
    you want to track installations for Android-Out-Of-Store
    Applications, please take a look [here](https://support.appsflyer.com/hc/en-us/articles/207447023-Tracking-Installs-for-Out-Of-Store-Applications).

4.  Add following lines to your code to initialize the tracking with
    your own AppsFlyer `dev key`:

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

5.  Test your app for [Android](https://support.appsflyer.com/hc/en-us/articles/207032136-Testing-AppsFlyer-Android-SDK-Integration-Before-Submitting-to-Google-Play)/[iOS](https://support.appsflyer.com/hc/en-us/articles/207032046-Testing-AppsFlyer-iOS-SDK-Integration-Before-Submitting-to-the-App-Store-) before submitting to the Google Play/App Store.

{{<note>}}
For more information on how to use AppsFlyer, please refer to {{<link href="https://support.appsflyer.com/hc/en-us" title="AppsFlyer Documentation">}}.
{{</note>}}

### Usage

Once, you have successfully configured AppsFlyer, the plugin is now
ready to be used. In this section, we will briefly describe some AppsFly
APIs.

#### Set Customer User ID (Advanced)

Setting your own custom ID will enable you to cross-reference your own
unique ID with AppsFlyer’s user ID and the other devices’ IDs. This ID
will be available at AppsFlyer CSV reports along with postbacks APIs for
cross-referencing with you internal IDs.

{{<highlight javascript>}}
window.plugins.appsFlyer.setAppUserId(userId);
{{</highlight>}}

{{<note>}}
The ID must be set during the first launch of the app at the SDK
initialization. The best practice is to call to this API during
deviceready event if possible.
{{</note>}}

#### Set Currency Code (Optional)

By default, the currency code is set to be `USD`. You can change it by
using the following API:

{{<highlight javascript>}}
//For example, you want to change to British Pound
window.plugins.appsFlyer.setCurrencyCode("GBP");
{{</highlight>}}

{{<note>}}
For all acceptable currency codes, please refer to {{<link title="ISO 4217 Currency Codes" href="http://www.xe.com/iso4217.php">}}.
{{</note>}}

#### In-App Events Tracking API (optional)

In-app events help you track how loyal users discover your app, and
attribute them to specific campaigns/media-sources. Please take time to
define the event(s) you would like to measure to allow you to track ROI
(Return on Investment) and LTV (Lifetime Value).

The `trackEvent` method allows you to send in-app events to AppsFlyer
analytics. This method allows you to add events dynamically by adding
them directly to the application code.

{{<highlight javascript>}}
// eventName - any string to define the event name. For example: “registration” or “purchase”
// eventValue - the sales value. For example: 0.99 or 0.79
window.plugins.appsFlyer.sendTrackingWithEvent(eventName, eventValue);
// window.plugins.appsFlyer.sendTrackingWithEvent(eventName, "");
{{</highlight>}}

#### Rich In-App Events Tracking API (optional)

AppsFlyer’s rich in­-app events provide advertisers with the ability to
track any post­-install events and attribute them to a media source and
campaign. An in­-app event is comprised of an event name and event
parameters.

{{<highlight javascript>}}
var eventName = "af_add_to_cart";
var eventValues = {"af_content_id": "id123", "af_currency":"USD", "af_revenue": "2"};
window.plugins.appsFlyer.trackEvent(eventName, eventValues);
{{</highlight>}}

#### Get AppsFlyer’s Unique Device UID (Advanced)

This API is used to get AppsFlyer’s proprietary device ID. AppsFlyer
device ID is the main ID used by AppsFlyer in the Reports and APIs.

{{<highlight javascript>}}
// getUserIdCallbackFn - callback function
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

Here is an example of how to use this API:

{{<highlight javascript>}}
var getUserIdCallbackFn = function(id) {
    alert('received id is: ' + id);
}
window.plugins.appsFlyer.getAppsFlyerUID(getUserIdCallbackFn);
{{</highlight>}}

#### Accessing AppsFlyer Attribution/Conversion Data from the SDK (Deferred Deep-linking)

AppsFlyer allows you to access the user attribution data in real time
directly at the SDK level. It enables you to customize the landing page
a user sees on the very first app open after a fresh app install. This
is commonly referred to as “deferred” deeplinking. This is very common
on the web, however there is a big challenge doing this in the mobile
app ecosystem. Luckily, AppsFlyer provides support for all cases and
platforms.

Read more on [Accessing AppsFlyer Attribution or Conversion Data from the SDK for iOS and Android](https://support.appsflyer.com/hc/en-us/articles/207032096-Accessing-AppsFlyer-Attribution-Conversion-Data-from-the-SDK-Deferred-Deeplinking-).

{{<note>}}
    AppsFlyer plugin will fire <code>onInstallConversionDataLoaded</code> event with attribution data. You must implement an event listener to receive the data.
{{</note>}}

{{<highlight javascript>}}
document.addEventListener('onInstallConversionDataLoaded', function(e){
    var attributionData = (JSON.stringify(e.detail));
    alert(attributionData);
}, false);
{{</highlight>}}

## Removing AppsFlyer from Monaca

1.  For Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}} or
    go to {{<menu menu1="Build Settings" menu2="Cordova Plugins">}} for Monaca Localkit.
2.  Under *Enabled Plugins* section, hover over *AppsFlyer* plugin and click {{<guilabel name="Disable">}} button.

    {{<img src="/images/reference/service_integration/apps_flyer/2.png">}}
