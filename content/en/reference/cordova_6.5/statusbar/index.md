StatusBar Plugin
================

Tested Version:
[2.2.3](https://github.com/apache/cordova-plugin-statusbar/releases/tag/2.2.3)

<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-statusbar).

</div>

The `StatusBar` object provides some functions to customize the iOS and
Android StatusBar.

Plugin ID
---------

    cordova-plugin-statusbar

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`StatusBar` plugin in Monaca Cloud IDE.

Preferences
-----------

### config.xml

-   **StatusBarOverlaysWebView** (boolean, defaults to true). On iOS 7,
    make the statusbar overlay or not overlay the WebView at startup.

        <preference name="StatusBarOverlaysWebView" value="true" />

-   **StatusBarBackgroundColor** (color hex string, no default value).
    On iOS 7, set the background color of the statusbar by a hex string
    (\#RRGGBB) at startup. If this value is not set, the background
    color will be transparent.

        <preference name="StatusBarBackgroundColor" value="#000000" />

-   **StatusBarStyle** (status bar style, defaults to lightcontent). On
    iOS 7, set the status bar style. Available options default,
    lightcontent, blacktranslucent, blackopaque.

        <preference name="StatusBarStyle" value="lightcontent" />

### Android Quirks

The Android 5+ guidelines specify using a different color for the
statusbar than your main app color (unlike the uniform statusbar color
of many iOS 7+ apps), so you may want to set the statusbar color at
runtime instead via `StatusBar.backgroundColorByHexString` or
`StatusBar.backgroundColorByName`. One way to do that would be:

``` {.sourceCode .javascript}
if (cordova.platformId == 'android') {
    StatusBar.backgroundColorByHexString("#333");
}
```

Hiding at startup
-----------------

During runtime you can use the StatusBar.hide function below, but if you
want the StatusBar to be hidden at app startup, you must modify your
app's Info.plist file.

Add/edit these two attributes if not present. Set **"Status bar is
initially hidden"** to **"YES"** and set **"View controller-based status
bar appearance"** to **"NO"**. If you edit it manually without Xcode,
the keys and values are:

``` {.sourceCode .xml}
<key>UIStatusBarHidden</key>
<true/>
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
```

Methods
-------

This plugin defines global `StatusBar` object. Although in the global
scope, it is not available until after the `deviceready` event.

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(StatusBar);
}
```

-   StatusBar.overlaysWebView
-   StatusBar.styleDefault
-   StatusBar.styleLightContent
-   StatusBar.styleBlackTranslucent
-   StatusBar.styleBlackOpaque
-   StatusBar.backgroundColorByName
-   StatusBar.backgroundColorByHexString
-   StatusBar.hide
-   StatusBar.show

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

### StatusBar.styleLightContent

Use the lightContent statusbar (light text, for dark backgrounds).

    StatusBar.styleLightContent();

#### Supported Platforms

-   iOS

### StatusBar.styleBlackTranslucent

Use the blackTranslucent statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackTranslucent();

#### Supported Platforms

-   iOS

### StatusBar.styleBlackOpaque

Use the blackOpaque statusbar (light text, for dark backgrounds).

    StatusBar.styleBlackOpaque();

#### Supported Platforms

-   iOS

### StatusBar.backgroundColorByName

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by color name.

    StatusBar.backgroundColorByName("red");

Supported color names are:

    black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown

#### Supported Platforms

-   iOS
-   Android 5+

### StatusBar.backgroundColorByHexString

Sets the background color of the statusbar by a hex string.

    StatusBar.backgroundColorByHexString("#C0C0C0");

CSS shorthand properties are also supported.

    StatusBar.backgroundColorByHexString("#333"); // => #333333
    StatusBar.backgroundColorByHexString("#FAB"); // => #FFAABB

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by a hex string
(\#RRGGBB).

#### Supported Platforms

-   iOS
-   Android 5+

### StatusBar.hide

Hide the statusbar.

    StatusBar.hide();

#### Supported Platforms

-   iOS
-   Android

### StatusBar.show

Shows the statusbar.

    StatusBar.show();

#### Supported Platforms

-   iOS
-   Android

Properties
----------

### StatusBar.isVisible

Read this property to see if the statusbar is visible or not.

    if (StatusBar.isVisible) {
        // do something
    }

#### Supported Platforms

-   iOS
-   Android

Events
------

### statusTap

Listen for this event to know if the statusbar was tapped.

    window.addEventListener('statusTap', function() {
        // scroll-up with document.body.scrollTop = 0; or do whatever you want
    });

#### Supported Platforms

-   iOS

Permissions
-----------

### config.xml

    <feature name="StatusBar">
        <param name="ios-package" value="CDVStatusBar" onload="true" />
    </feature>