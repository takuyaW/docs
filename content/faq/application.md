---
title: Application
weight: 50
---

## Can I use an external ad network?

For Monaca, there is no particular restriction on installing an ad
network in an application. Technically, ads can be posted on WebView, so
please use them according to the agreements of each ad network company.

If they are InMobi, mediba (Japanese) or nend (Japanese), you can
display the ads in apps created by Monaca. In regard to nend, please
refer to [nend](/en/sampleapp/tips/external_services/nend_ad).

## Can I use external backend service?

You can use external backend services with Monaca. We also provide some
external services (including backend) you can integrate into your
project right from Monaca Cloud IDE.

From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Service Integration" menu3="Backend">}} to see exisiting external backend services. 

If you cannot find the backend service you want there, you can import its SDK into Monaca by going to {{<menu menu1="Config" menu2="Manage Cordova Plugins" menu3="Import Cordova Plugin">}}.

## What kind of features can be used in applications developed using Monaca?

With Monaca you can develop applications that are able to use all types
of unique features on smartphones.(Camera, GPS, etc.) Please refer to
the document below.

-   [Cordova Core Plugins English](/en/reference/cordova_6.5/)
-   [Cordova Core Plugins Japanese](/ja/reference/cordova_6.5/)
-   [Samples & Tips](/en/sampleapp)

Windows Store apps are not compatible with Cordova Core Plugins, but
compatible with developments that used WinJS.

## Is there any way to implement Push Notification features such as membership management?

You can implement Push Notification features such as membership management by using backend services such as [Kii Platform](http://en.kii.com/) since it can be easily implemented using the provided APIs.

## Can I develop applications that run in the background?

One of the common issues in mobile apps development is unstable
functionality due to memory issue. As a result, currently Monaca does
not support the development of apps running in the background.

## In applications that are developed using Monaca, can I embed codes written in Java? (For Android)

Monaca currently does not support the embedding of Java native codes.

## Can I use UIKit in applications developed using Monaca? (For iOS)

Monaca currently does not support the uses of UIKit.

## Can I develop applications with many different screen sizes?

In order to develop application with many deferent screen sizes, you can
include the following mata tag in your code.

{{<highlight html>}}
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
{{</highlight>}}

## Can I use Cordova plugins?

For Basic and Personal plans, you can use the built-in Cordova plugins
such as ChildBrowser, DatePicker, Bluetooth and so on. Please refer to [Third-party Cordova Plugins](/en/reference/third_party_phonegap) for all the built-in Cordova plugins
provided by Monaca. However, In order to add Custom Cordova plugin, you
will need to have a Gold or Platinum plan. To add a custom Cordova
plugin, please refer to [Custom Cordova Plugins](/en/monaca_ide/manual/dependencies/custom_cordova_plugin).

## Tell me about restrictions for developing Windows Store apps.

For Windows Store app development, native JavaScript and HTML5 features
are used. Therefore, features such as those in PhoneGap cannot be used.
For this reason, in order to develop an app runs on both Windows
(Windows store app) and other platforms, you can't use features such as
those in PhoneGap. Also, for Windows Store app, there are some features
and properties in the standard JavaScript and HTML5 that can't be used.
For more details, please refer to [HTML, CSS, and JavaScript features and difference](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx).

## Can I develop a full-screen app?

Yes, you can. However, you need to make configuration differently on iOS and Android. 

*Android*

There are two ways to make an app runs in fullscreen mode:

1. By Android App Configuration panel: From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Android App Settings">}}. Then, enable the Fullscreen mode.  

2. By `config.xml` file: input the following line within the file: 

    {{<highlight xml>}}
        <preference name="Fullscreen" value="true"/>
    {{</highlight>}}

*iOS*

You need to use [StatusBar Plugin](/en/reference/cordova_6.5/statusbar) to hide the native status bar. 

{{<note>}}
    To ensure the configuration is updated successfully, please build your app again after making the above configuration. 
{{</note>}}

## Can I always use the latest version of Cordova?

Monaca supports specific Cordova versions. However, we regularly update
and provide the latest Cordova version support as soon as possible.

## How can I make font size bigger for input and textarea controls?

You can fix this problem by applying following styles.

{{<highlight css>}}
form input, form textarea {
    font-size: 100%;
}
{{</highlight>}}

## Cordova API and Monaca JavaScript API do not work.

Please check your code if `components/loader.js` file is loaded. You can't
use Cordova API and other JavaScript APIs provided by Monaca if the file
was not loaded.

## How to change the app start page from index.html to another?

1.  Go to `config.xml` file under `www` folder.
2.  Under `<widget>` element, input the location of the file you want
    for the starting page in the `<content>` tag. The default value is
    `index.html`. See the example below:

    {{<highlight xml>}}
    <?xml version="1.0" encoding="UTF-8"?>
    <widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
        ...
        <content src="https://monaca.io/" />
    </widget>
    {{</highlight>}}

{{<warning>}}
    This method won’t work in Android Debugger downloaded from Google Play. Creating a custom Android debugger will solve this issue. Please refer to {{<link href="/en/debugger/manual/installation/debugger_android/#custom-debugger-and" title="Build and Install Custom Monaca Debugger">}}.
{{</warning>}}

## Limitation of version number and version code for Monaca apps

Based on Cordova, the maximum value of version number is `99.99.99` and
the corresponding maximum value of version code is `999999` for Monaca
apps.

If you want to use a larger version code value, you need to modify
`config.xml` file directly. See below example:

{{<highlight xml>}}
<widget xmlns="http://www.w3.org/ns/widgets" id="your packagename" version="xx.yy.zz">
<!--Substitute xx.yy.zz to 100.1.3, the version code becomes 1000103.-->
{{</highlight>}}

{{<note>}}
    Starting from 2014/04/02, <code>config.xml</code> file is located under <b>www</b> folder. If your project is created before that, <code>config.xml</code> file is located as <code>android/config.xml</code> and <code>ios/config.xml</code> for Android and iOS respectively.
{{</note>}}

## Cordova APIs (such as camera, compass, and so on) are not working

When using Cordova APIs (such as camera, compass, and so on), you need
to make sure that those APIs are called after they have loaded and are
ready to access.

The `deviceready` event fires once the Cordova has fully loaded. You can
safely use Cordova APIs when this event is fired. For more information,
please refer to [deviceready event](http://cordova.apache.org/docs/en/6.x/cordova/events/events.html#deviceready).

{{<note>}}
    For Onsen UI, <code>ons.ready()</code> function is called when both <code>deviceready</code> and <code>DOMContentLoaded</code> events are fired. Therefore, you can deal with both events by using <code>ons.ready()</code> function.
{{</note>}}

## The built app does not work, or works differently than what it runs on the debugger.

It is likely that the built app does not contain the necessary Cordova
plugin. Although Monaca Debugger contains all core plugins by default,
you need to manually specify which plugin to install when you build the
app. You can manage the plugins to include in the app by enabling in
Manage Cordova Plugins configuration.

## <a name="faq05-019"></a> How to make iOS's App ID and Android's Package Name differently.

Currently, when you update either iOS's App ID or Android's Package
Name, both of them will change. In other words, they are configured to
be the same. However, it is possible to make them different.

In order to create iOS's App ID and Android's Package Name differently,
please update the `<widget>` tag in config.xml file by adding the values
for `android-packageName` and `ios-CFBundleIdentifier` while removing
the existing `id` value. Here is an example of the updated file:

{{<highlight xml>}}
<widget xmlns="http://www.w3.org/ns/widgets" android-packageName="com.example.android" ios-CFBundleIdentifier="com.example.ios" version="1.0.0”>
{{</highlight>}}

{{<note>}}
    With this kind of configuration, all builds are succeeded except Android’s {{<link href="/en/debugger/manual/installation/debugger_android/#custom-debugger-and" title="custom Debugger build">}}.
{{</note>}}

## How to get SHA-1 fingerprint of a keystore created in Monaca Cloud IDE

Assuming that you already created an Android keystore with Monaca Cloud
IDE, please follow the instruction below to get a SHA-1 fingerprint of
the keystore:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="Android KeyStore Settings">}}.
2.  Click on {{<guilabel name="Export">}} to download your keystore.
3.  Then, go to your Command prompt and type:
    
    - `<your-key-name>` is the alias of the downloaded keystore from Cloud IDE
    - `<path-to-production-keystore>` is the path to where you keep the download keystore file.

    {{<highlight bash>}}keytool -exportcert -alias <your-key-name> -keystore <path-to-production-keystore> | openssl sha1 -binary | openssl base64{{</highlight>}}

4.  Then, you will be asked to input the password of the keystore.

## Can't install my app on an iOS device after building.

Please check whether the target device is registered in the provisioning
profile selected at the time of building.
