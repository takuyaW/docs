---
title: Crosswalk Plugin (Android Only)
---
  
Tested Version: [1.3.0](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview/releases/tag/1.3.0)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview">}}.
{{</note>}}


This plugin makes your Cordova application uses the [Crosswalk WebView](https://crosswalk-project.org/) instead of the System WebView.

## What is Crosswalk?

There are many versions of Android from many manufacturers, this makes
it very difficult to develop a Cordova app that works consistently
across all versions of Android. WebView version affects display and some
operations on a device. Until Android 4.4, WebView upgrade can only be
done through OS upgrade. When most of these devices cannot be upgraded,
they are stuck using outdated Android WebViews. Crosswalk can solve this
problem.

Crosswalk is a web runtime based on Google Chromium and has better HTML5
feature support compared to the default WebView available in Android. By
upgrading the version of Crosswalk, Chromium version will also be
upgraded. This insures that your app works consistently, regardless of
the device manufacturer or Android version found in your customer's
Android 4.0+ device.

Plugin ID
=========

    cordova-plugin-crosswalk-webview

Supported Platforms
-------------------

-   Android 4.0 or higher
-   Cordova 5.2 or higher

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, you need to enable `Crosswalk` plugin in
Monaca Cloud IDE first.

1.  From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Cordova Plugins">}}.
2.  Enable the `Crosswalk WebView Engine` (see the screenshot below).

    {{<img src="/images/reference/cordova_6.5/crosswalk/1.png">}}

3.  After enabling the Crosswalk WebView Engine, you need to config the
    architecture type of the plugin by clicking on {{<guilabel name="Configure">}} button.

    {{<img src="/images/reference/cordova_6.5/crosswalk/2.png">}}

4.  Then, the following dialog will appear. Select the architecture type
    of the plugin and click {{<guilabel name="OK">}}.

    {{<img src="/images/reference/cordova_6.5/crosswalk/3.png" width="500">}}

{{<note>}}
You can change both plugin version or Crosswalk version. However, not
all version combination between the two are applicable. To guarantee the
stability of your application, we highly recommend you to use the
default Crosswalk plugin set by Monaca.
{{</note>}}

Pros and Cons of Crosswalk Plugin
---------------------------------

Advantages | Disadvantages
-----------|--------------------
<ul><li>WebView installed on each device has the same version. The problem due to different operations of API has been solved.</li><li>The latest version of WebView (Android 4 is not supported) is being used, performance improvement is expected.</li></ul> | <ul><li>Building a Crosswalk app results in `2 APK` files: one `arm` and one for `x86` CPU architecture. Both of them need to be uploaded to GooglePlay.</li><li>When there is bugs in Crosswalk (Chromium), all devices will be having the same bugs.</li><li>App size can be `+20MB` bigger.</li><li>When there is a serious bug occurs in Crosswalk, the app might stop working until it is solved.</li><li>If there is vulnerability occurrs in Crosswalk(Chromium), there will be a warning in Google Play that the app may be publicly unavailable.</li><li>For Android 5.0 or higher, WebView is made as another app, so it will always needed to be updated. Therefore, Crosswalk’s WebView version maybe out of dated.</li></ul>