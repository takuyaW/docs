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
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/RELEASENOTES.md#210-jun-17-2015">2.1.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
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

    cordova-plugin-splashscreen

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Splashscreen` プラグインを
有効 &lt;add\_plugins&gt; にします。

サポート対象のプラットフォーム
------------------------------

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   iOS
-   Windows Phone 7 と 8
-   Windows 8
-   Windows
-   Browser

API の解説
----------

peference を使用したカスタマイズ設定 -----------

### config.xml

-   **SplashScreen** ( 文字列 ) :
    スプラッシュスクリーンの表示時に使用するリソース ( ファイル名など )
    を指定します。すべてのプラットフォーム上で、このリソースが使用されます。

<!-- -->

    <preference name="SplashScreen" value="resourcename" />

-   **AutoHideSplashScreen** ( 真偽値、デフォルトでは `true` ) :
    スプラッシュスクリーンを自動的に非表示にするかを設定します。preference
    ( `SplashScreenDelay` )
    に指定された時間の経過後、スプラッシュスクリーンが非表示になります。

<!-- -->

    <preference name="AutoHideSplashScreen" value="true" />

-   **SplashScreenDelay** ( 数値、デフォルトでは 3000 ) :
    スプラッシュスクリーンを自動的に非表示にするまでの時間 ( ミリ秒単位
    ) を指定します。

<!-- -->

    <preference name="SplashScreenDelay" value="3000" />

### Android 特有の動作

`config.xml` ファイルには、次の preference を追加します。

    <preference name="SplashScreen" value="foo" />
    <preference name="SplashScreenDelay" value="3000" />
    <preference name="SplashMaintainAspectRatio" value="true|false" />

1 列目の foo とは、スプラッシュスクリーンのファイル名です。 9 patch
形式のファイルを推奨します。ファイルは、 res/xml
ディレクトリー下の適当な場所に置きます。2
列目は、スプラッシュスクリーンの表示時間 ( ミリ秒単位 )
です。デフォルトでは、3000 ms です。詳細は、[Icons and Splash Screens (
外部サイト
)](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
をご確認ください。

preference 「 `SplashMaintainAspectRatio` 」 は、任意の設定です。true
に設定した場合、スプラッシュスクリーンの画像は、画面サイズに応じて引き伸ばされるのではなく、縦横比は固定されたまま、拡大
( または 縮小 ) され表示されます ( CSS の background-size:cover に相当
)。この設定を使用すれば、画像が自然に表示されます。たとえば、画像が風景・文字の場合に有用です。特に、縦横比が異なる画面にも対応できるように、余白部分
( セーフエリア ) をあらかじめ大きく取っている画像の場合に有用です。

このプラグインでは、端末の向きが変わるたび、スプラッシュ画像を再読み込みします。よって、横方向
( landscape ) ・縦方向 ( portrait ) 用の画像をそれぞれ使用できます。

### Browser 特有の動作

次の preference を `config.xml` 内に設定できます。

    <platform name="browser">
        <preference name="SplashScreen" value="images/browser/splashscreen.jpg" /> <!-- defaults to "img/logo.png" -->
        <preference name="SplashScreenDelay" value="3000" /> <!-- defaults to "3000" -->
        <preference name="SplashScreenBackgroundColor" value="green" /> <!-- defaults to "#464646" -->
        <preference name="ShowSplashScreen" value="false" /> <!-- defaults to "true" -->
        <preference name="SplashScreenWidth" value="600" /> <!-- defaults to "170" -->
        <preference name="SplashScreenHeight" value="300" /> <!-- defaults to "200" -->
    </platform>

### iOS 特有の動作

-   `FadeSplashScreen` ( 真偽値、デフォルトでは `true` ):
    画面の状態が切り替わるときに、スプラッシュスクリーンがフェードイン・フェードアウト
    ( fade in/out ) することを防ぐ場合には、false に設定します。

<!-- -->

    <preference name="FadeSplashScreen" value="false"/>

-   `FadeSplashScreenDuration` ( float、デフォルトでは `3000` ) :
    スプラッシュスクリーンがフェードイン・フェードアウト ( fade in/out )
    するときの長さ ( ミリ秒単位 ) を指定します。

<!-- -->

    <preference name="FadeSplashScreenDuration" value="3000"/>

以前は、ミリ秒ではなく、秒単位で値を設定していたため、現在でも、30
未満の値を指定した場合は、「 秒 」 として処理されるようになっています (
応急的な措置ですので、将来的には廃止します )。

-   `ShowSplashScreenSpinner` ( 真偽値、デフォルトでは `true` ) :
    スプラッシュスクリーン上にスピナーを表示させない場合には、`false`
    を設定します。

<!-- -->

    <preference name="ShowSplashScreenSpinner" value="false"/>

#### メソッド

-   splashscreen.show
-   splashscreen.hide

#### splashscreen.hide

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

#### splashscreen.show

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
