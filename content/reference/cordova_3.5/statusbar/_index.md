---
title: StatusBar Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-statusbar/blob/master/RELEASENOTES.md#016-jun-05-2014">0.1.6</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-statusbar">}}.
{{</note>}}

The `StatusBar` object provides some functions to customize theiOS and
Android StatusBar.

Plugin ID
---------

    org.apache.cordova.statusbar

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.statusbar` plugin in Monaca Cloud IDE.

Hiding at startup
-----------------

During runtime you can use the StatusBar.hide function below, but if you
want the StatusBar to be hidden at app startup, you must modify your
app's Info.plist file.

Add/edit these two attributes if not present. Set **"Status bar is
initially hidden"** to **"YES"** and set **"View controller-based status
bar appearance"** to **"NO"**. If you edit it manually without Xcode,
the keys and values are:

    <key>UIStatusBarHidden</key>
    <true/>
    <key>UIViewControllerBasedStatusBarAppearance</key>
    <false/>

Methods
-------

-   StatusBar.overlaysWebView
-   StatusBar.styleDefault
-   StatusBar.styleLightContent
-   StatusBar.styleBlackTranslucent
-   StatusBar.styleBlackOpaque
-   StatusBar.backgroundColorByName
-   StatusBar.backgroundColorByHexString
-   StatusBar.hide
-   StatusBar.show

Properties
----------

-   StatusBar.isVisible

Permissions
-----------

### config.xml

    <feature name="StatusBar">
        <param name="ios-package" value="CDVStatusBar" onload="true" />
    </feature>

StatusBar.overlaysWebView
-------------------------

On iOS 7, make the statusbar overlay or not overlay the WebView.

    StatusBar.overlaysWebView(true);

### Description

On iOS 7, set to false to make the statusbar appear like iOS 6. Set the
style and background color to suit using the other functions.

### Supported Platforms

-   iOS

### Quick Example

    StatusBar.overlaysWebView(true);
    StatusBar.overlaysWebView(false);

StatusBar.styleDefault
----------------------

Use the default statusbar (dark text, for light backgrounds).

    StatusBar.styleDefault();

### Supported Platforms

-   iOS

StatusBar.styleLightContent
---------------------------

Use the lightContent statusbar (light text, for dark backgrounds).

    StatusBar.styleLightContent();

### Supported Platforms

-   iOS

StatusBar.styleBlackTranslucent
-------------------------------

Use the blackTranslucent statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackTranslucent();

### Supported Platforms

-   iOS

StatusBar.styleBlackOpaque
--------------------------

Use the blackOpaque statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackOpaque();

### Supported Platforms

-   iOS

StatusBar.backgroundColorByName
-------------------------------

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by color name.

    StatusBar.backgroundColorByName("red");

Supported color names are:

    black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown

### Supported Platforms

-   iOS

StatusBar.backgroundColorByHexString
------------------------------------

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

### Supported Platforms

-   iOS

StatusBar.hide
--------------

Hide the statusbar.

    StatusBar.hide();

### Supported Platforms

-   iOS
-   Android

StatusBar.show
--------------

Shows the statusbar.

    StatusBar.show();

### Supported Platforms

-   iOS
-   Android

StatusBar.isVisible
-------------------

Read this property to see if the statusbar is visible or not.

    if (StatusBar.isVisible) {
        // do something
    }

### Supported Platforms

-   iOS
-   Android

