---
title: StatusBar Plugin
weight: 200
---

Tested Version:
[2.1.3](https://github.com/apache/cordova-plugin-statusbar/releases/tag/2.1.3)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-statusbar">}}.
{{</note>}}

The `StatusBar` object provides some functions to customize the iOS and
Android StatusBar.

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-statusbar
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}})
`StatusBar` plugin in Monaca Cloud IDE.

Preferences
-----------

### config.xml

-   `StatusBarOverlaysWebView` (boolean, defaults to true). On iOS 7,
    make the statusbar overlay or not overlay the WebView at startup.

    {{<highlight xml>}}
<preference name="StatusBarOverlaysWebView" value="true" />
{{</highlight>}}

-   `StatusBarBackgroundColor` (color hex string, no default value). On
    iOS 7, set the background color of the statusbar by a hex string
    (\#RRGGBB) at startup. If this value is not set, the background
    color will be transparent.

    {{<highlight xml>}}
<preference name="StatusBarBackgroundColor" value="#000000" />
{{</highlight>}}

-   `StatusBarStyle` (status bar style, defaults to lightcontent). On
    iOS 7, set the status bar style. Available options default,
    lightcontent, blacktranslucent, blackopaque.

    {{<highlight xml>}}
<preference name="StatusBarStyle" value="lightcontent" />
{{</highlight>}}

### Android Quirks

The Android 5+ guidelines specify using a different color for the
statusbar than your main app color (unlike the uniform statusbar color
of many iOS 7+ apps), so you may want to set the statusbar color at
runtime instead via `StatusBar.backgroundColorByHexString` or
`StatusBar.backgroundColorByName`. One way to do that would be:

{{<highlight javascript>}}
if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#333");
}
{{</highlight>}}

### Hiding at startup

During runtime you can use the StatusBar.hide function below, but if you
want the StatusBar to be hidden at app startup, you must modify your
app's Info.plist file.

Add/edit these two attributes if not present. Set **"Status bar is
initially hidden"** to **"YES"** and set **"View controller-based status
bar appearance"** to **"NO"**. Please add the following snippet within
`<platform name="ios”>` tag:

{{<highlight xml>}}
<config-file parent="UIStatusBarHidden" platform="ios" target="*-Info.plist">
    <true/>
</config-file>
<config-file parent="UIViewControllerBasedStatusBarAppearance" platform="ios" target="*-Info.plist">
    <false/>
</config-file>
{{</highlight>}}

### Methods

This plugin defines global `StatusBar` object.

Although in the global scope, it is not available until after the
`deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(StatusBar);
}
{{</highlight>}}

-   StatusBar.overlaysWebView
-   StatusBar.styleDefault
-   StatusBar.styleLightContent
-   StatusBar.styleBlackTranslucent
-   StatusBar.styleBlackOpaque
-   StatusBar.backgroundColorByName
-   StatusBar.backgroundColorByHexString
-   StatusBar.hide
-   StatusBar.show

### Properties

-   StatusBar.isVisible

### Permissions

**config.xml**

{{<highlight xml>}}
<feature name="StatusBar">
    <param name="ios-package" value="CDVStatusBar" onload="true" />
</feature>
{{</highlight>}}

API Reference
-------------

### StatusBar.overlaysWebView

On iOS 7, make the statusbar overlay or not overlay the WebView.

{{<highlight javascript>}}
StatusBar.overlaysWebView(true);
{{</highlight>}}

#### Description

On iOS 7, set to false to make the statusbar appear like iOS 6. Set the
style and background color to suit using the other functions.

#### Supported Platforms

-   iOS

#### Quick Example

{{<highlight javascript>}}
StatusBar.overlaysWebView(true);
StatusBar.overlaysWebView(false);
{{</highlight>}}

### StatusBar.styleDefault

Use the default statusbar (dark text, for light backgrounds).

{{<highlight javascript>}}
StatusBar.styleDefault();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Windows Phone 8.1

### StatusBar.styleLightContent

Use the lightContent statusbar (light text, for dark backgrounds).

{{<highlight javascript>}}
StatusBar.styleLightContent();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Windows Phone 8.1

### StatusBar.styleBlackTranslucent

Use the blackTranslucent statusbar (light text, for dark backgrounds).

{{<highlight javascript>}}
StatusBar.styleBlackTranslucent();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Windows Phone 8.1

### StatusBar.styleBlackOpaque

Use the blackOpaque statusbar (light text, for dark backgrounds).

{{<highlight javascript>}}
StatusBar.styleBlackOpaque();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Windows Phone 8.1

### StatusBar.backgroundColorByName

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by color name.

{{<highlight javascript>}}
StatusBar.backgroundColorByName("red");
{{</highlight>}}

Supported color names are:

{{<highlight bash>}}
black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android 5+
-   Windows Phone 8.1

### StatusBar.backgroundColorByHexString

Sets the background color of the statusbar by a hex string.

{{<highlight javascript>}}
StatusBar.backgroundColorByHexString("#C0C0C0");
{{</highlight>}}

CSS shorthand properties are also supported.

{{<highlight javascript>}}
StatusBar.backgroundColorByHexString("#333"); // => #333333
StatusBar.backgroundColorByHexString("#FAB"); // => #FFAABB
{{</highlight>}}

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by a hex string
(\#RRGGBB).

On WP7 and WP8 you can also specify values as \#AARRGGBB, where AA is an
alpha value

#### Supported Platforms

-   iOS
-   Android 5+
-   Windows Phone 8.1

### StatusBar.hide

Hide the statusbar.

{{<highlight javascript>}}
StatusBar.hide();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 8.1

### StatusBar.show

Shows the statusbar.

{{<highlight javascript>}}
StatusBar.show();
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 8.1

### StatusBar.isVisible

Read this property to see if the statusbar is visible or not.

{{<highlight javascript>}}
if (StatusBar.isVisible) {
    // do something
}
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 8.1

