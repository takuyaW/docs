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

このプラグインを使用して、アプリの起動中に表示 ( または 非表示 )
されるスプラッシュスクリーンを制御します。

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

1 列目の foo とは、スプラッシュスクリーンのファイル名です。 9 patch
形式のファイルを推奨します。ファイルは、 res/xml
ディレクトリー下の適当な場所に置きます。2
列目は、スプラッシュスクリーンの表示時間 ( ミリ秒単位 )
です。デフォルトでは、3000 ms です。詳細は、[Icons and Splash Screens (
外部サイト
)](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
をご確認ください。

splashscreen.hide
-----------------

スプラッシュスクリーンを非表示にします。

    navigator.splashscreen.hide();

### BlackBerry 10、WP8、iOS 特有の動作

`config.xml` ファイル内の `AutoHideSplashScreen` には、`false`
を設定します。2
秒間ほど間をおいて、スプラッシュスクリーンを非表示にする場合には、次のようにタイマーをセットします
( `deviceready` イベントハンドラー内 )。

    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000);

splashscreen.show
-----------------

スプラッシュスクリーンを表示します。

    navigator.splashscreen.show();

`navigator.splashscreen.show()`
の呼び出しは、アプリの起動後、`deviceready`
イベントの発火後に行います。矛盾しますが、スプラッシュスクリーンは、アプリが起動する前に表示される画面です。よって、このような処理の方法では、スプラッシュスクリーンの表示が遅れてしまうことになります。そこで、前述のように、`config.xml`
に、いくつかの設定をあらかじめしておき、アプリの起動後、直ちに (
アプリが完全に立ち上がる前、および、 `deviceready` イベントを受け取る前
)、
に、スプラッシュスクリーンが自動的に表示されるようにします。詳細は、[Icons
and Splash Screens ( 外部サイト
)](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
をご確認ください。よって、アプリの起動時にスプラッシュスクリーンを表示するために、`navigator.splashscreen.show()`
を使用することは、ほとんどありません。
