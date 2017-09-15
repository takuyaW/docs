  Crosswalk Plugin (Android Only)
  ---------------------------------------------------------------------------------------------------------------------------------------------------------
  .. contents:: Table of Contents
  :local:
  :depth: 2
  Tested Version: [1.3.0](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview/releases/tag/1.3.0)
  .. note::
  This document is based on the original Cordova docs available at [Cordova Docs](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview).
  This plugin makes your Cordova application uses the [Crosswalk WebView](https://crosswalk-project.org/) instead of the System WebView.
  What is Crosswalk?

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
===================

-   Android 4.0 or higher
-   Cordova 5.2 or higher

Adding the Plugin in Monaca
===========================

In order to use this plugin, you need to enable `Crosswalk` plugin in
Monaca Cloud IDE first.

1.  From Monaca Cloud IDE, go to Config --&gt; Cordova Plugins.
2.  Enable the Crosswalk WebView Engine (see the screenshot below).

> ![](../images/crosswalk/1.png){width="600px"}

3.  After enabling the Crosswalk WebView Engine, you need to config the
    architecture type of the plugin by clicking on Configure button.

> ![](../images/crosswalk/2.png){width="600px"}

4.  Then, the following dialog will appear. Select the architecture type
    of the plugin and click OK.

> ![](../images/crosswalk/3.png){width="600px"}

<div class="admonition note">

You can change both plugin version or Crosswalk version. However, not
all version combination between the two are applicable. To guarantee the
stability of your application, we highly recommend you to use the
default Crosswalk plugin set by Monaca.

</div>

Pros and Cons of Crosswalk Plugin
=================================
