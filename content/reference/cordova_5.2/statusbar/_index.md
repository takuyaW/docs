---
title: StatusBar Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-statusbar/blob/master/RELEASENOTES.md#101-jun-17-2015">1.0.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-statusbar">}}.
{{</note>}}

The `StatusBar` object provides some functions to customize the iOS and
Android StatusBar.

Plugin ID
---------

    cordova-plugin-statusbar

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`StatusBar` plugin in Monaca Cloud IDE.

API Reference
-------------

### StatusBar.overlaysWebView

On iOS 7, make the statusbar overlay or not overlay the WebView.

    StatusBar.overlaysWebView(true);

#### Description

On iOS 7, set to false to make the statusbar appear like iOS 6. Set the
style and background color to suit using the other functions.

#### Supported Platforms

-   iOS

#### Quick Example

    StatusBar.overlaysWebView(true);
    StatusBar.overlaysWebView(false);

### StatusBar.styleDefault

Use the default statusbar (dark text, for light backgrounds).

    StatusBar.styleDefault();

#### Supported Platforms

-   iOS
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.styleLightContent

Use the lightContent statusbar (light text, for dark backgrounds).

    StatusBar.styleLightContent();

#### Supported Platforms

-   iOS
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.styleBlackTranslucent

Use the blackTranslucent statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackTranslucent();

#### Supported Platforms

-   iOS
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.styleBlackOpaque

Use the blackOpaque statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackOpaque();

#### Supported Platforms

-   iOS
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.backgroundColorByName

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by color name.

    StatusBar.backgroundColorByName("red");

Supported color names are:

    black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown

#### Supported Platforms

-   iOS
-   Android 5+
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.backgroundColorByHexString

Sets the background color of the statusbar by a hex string.

    StatusBar.backgroundColorByHexString("#C0C0C0");

CSS shorthand properties are also supported.

    StatusBar.backgroundColorByHexString("#333"); // => #333333
    StatusBar.backgroundColorByHexString("#FAB"); // => #FFAABB

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by a hex string
(\#RRGGBB).

On WP7 and WP8 you can also specify values as \#AARRGGBB, where AA is an
alpha value

#### Supported Platforms

-   iOS
-   Android 5+
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.hide

Hide the statusbar.

    StatusBar.hide();

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.show

Shows the statusbar.

    StatusBar.show();

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

### StatusBar.isVisible

Read this property to see if the statusbar is visible or not.

    if (StatusBar.isVisible) {
        // do something
    }

#### Supported Platforms

-   iOS
-   Android
-   Windows Phone 7
-   Windows Phone 8
-   Windows Phone 8.1

