<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
スプラッシュスクリーンの制御 プラグイン
=======================================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/RELEASENOTES.md#035-dec-02-2014">0.3.5</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-splashscreen)
をご確認ください。

</div>

This plugin displays and hides a splash screen during application
launch.

プラグイン ID
-------------

    org.apache.cordova.splashscreen

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.splashscreen`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   iOS
-   Windows Phone 7 と 8
-   Windows 8

メソッド
--------

-   splashscreen.show
-   splashscreen.hide

### Android 特有の動作

config.xml に、次の preference を追加します。

    <preference name="SplashScreen" value="foo" />
    <preference name="SplashScreenDelay" value="10000" />

Where foo is the name of the splashscreen file, preferably a 9 patch
file. Make sure to add your splashcreen files to your res/xml directory
under the appropriate folders. The second parameter represents how long
the splashscreen will appear in milliseconds. It defaults to 3000 ms.
See [Icons and Splash
Screens](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
for more information.

splashscreen.hide
-----------------

スプラッシュスクリーンを非表示にします。

    navigator.splashscreen.hide();

### BlackBerry 10、WP8、iOS 特有の動作

The `config.xml` file's `AutoHideSplashScreen` setting must be `false`.
To delay hiding the splash screen for two seconds, add a timer such as
the following in the `deviceready` event handler:

    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000);

splashscreen.show
-----------------

スプラッシュスクリーンを表示します。

    navigator.splashscreen.show();

Your application cannot call `navigator.splashscreen.show()` until the
app has started and the `deviceready` event has fired. But since
typically the splash screen is meant to be visible before your app has
started, that would seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `show`
the splash screen immediately after your app launch and before it has
fully started and received the `deviceready` event. See [Icons and
Splash
Screens](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
for more information on doing this configuration. For this reason, it is
unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.
