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
ステータスバーの制御 プラグイン
===============================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-statusbar/blob/master/RELEASENOTES.md#019-dec-02-2014">0.1.9</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-statusbar)
をご確認ください。

</div>

`StatusBar` オブジェクトを使用して、iOS と Android
のステータスバーをカスタマイズできます。

プラグイン ID
-------------

    org.apache.cordova.statusbar

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.statusbar`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

peference を使用したカスタマイズ設定 -----------

### config.xml

-   **StatusBarOverlaysWebView** ( 真偽値、デフォルトでは true
    )。アプリの起動時、WebView 上にステータスバーを置くか (
    overlay/オーバーレイ ) 否かを設定します。iOS 7 が対象です。

        <preference name="StatusBarOverlaysWebView" value="true" />

-   **StatusBarBackgroundColor** ( 16
    進数の文字列で示すカラーコード、デフォルトは \#000000
    )。アプリ起動時のスタータスバーの背景色を、16進数の文字列 ( \#RRGGBB
    ) で設定します。iOS 7 が対象です。

        <preference name="StatusBarBackgroundColor" value="#000000" />

-   **StatusBarStyle** ( ステータスバーのスタイル、デフォルトは
    lightcontent )。ステータスバーのスタイル ( 色 ) を設定します。
    default、lightcontent、blacktranslucent、blackopaque
    のいずれかを設定できます。iOS 7 が対象です。

        <preference name="StatusBarStyle" value="lightcontent" />

アプリ起動時の非表示設定
------------------------

アプリの実行中は、後述する StatusBar.hide
関数を使用できます。また、アプリ起動時にステータスバーを非表示にしたい場合は、アプリの
Info.plist ファイルの内容を変更する必要があります。

非表示設定にする属性を適宜変更する必要があります ( 属性がない場合は追加
)。\**"Status bar is initially hidden"*\* 項目を **"YES"**
に設定して、次に、\**"View controller-based status bar appearance"*\*
項目を **"NO"** に設定します。Xcode
を使用せずに、手動で変更を行う場合には、次のキーと値を追加します。

    <key>UIStatusBarHidden</key>
    <true/>
    <key>UIViewControllerBasedStatusBarAppearance</key>
    <false/>

メソッド
--------

このプラグインでは、グローバルオブジェクト 「 `StatusBar` 」
を使用します。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(StatusBar);
    }

-   StatusBar.overlaysWebView
-   StatusBar.styleDefault
-   StatusBar.styleLightContent
-   StatusBar.styleBlackTranslucent
-   StatusBar.styleBlackOpaque
-   StatusBar.backgroundColorByName
-   StatusBar.backgroundColorByHexString
-   StatusBar.hide
-   StatusBar.show

プロパティー
------------

-   StatusBar.isVisible

パーミッション
--------------

### config.xml

    <feature name="StatusBar">
        <param name="ios-package" value="CDVStatusBar" onload="true" />
    </feature>

StatusBar.overlaysWebView
-------------------------

iOS 7 のステータスバーを上書きします ( WebView の上書きではありません
)。

    StatusBar.overlaysWebView(true);

### 解説

iOS 7 のステータスバーを、iOS 6 のように表示したい場合、false
に設定します。

### サポート対象のプラットフォーム

-   iOS

### 例

    StatusBar.overlaysWebView(true);
    StatusBar.overlaysWebView(false);

StatusBar.styleDefault
----------------------

デフォルトのステータスバーを使用します ( 黒の文字、白の背景 )。

    StatusBar.styleDefault();

### サポート対象のプラットフォーム

-   iOS

StatusBar.styleLightContent
---------------------------

lightContent のステータスバーを使用します ( 白の文字、黒の背景 )。

    StatusBar.styleLightContent();

### サポート対象のプラットフォーム

-   iOS

StatusBar.styleBlackTranslucent
-------------------------------

blackTranslucent のステータスバーを使用します (
白の文字、半透明の黒の背景 )。

    StatusBar.styleBlackTranslucent();

### サポート対象のプラットフォーム

-   iOS

StatusBar.styleBlackOpaque
--------------------------

blackOpaque のステータスバーを使用します ( 白の文字、不透明な黒の背景
)。

    StatusBar.styleBlackOpaque();

### サポート対象のプラットフォーム

-   iOS

StatusBar.backgroundColorByName
-------------------------------

StatusBar.statusBarOverlaysWebView を false にした場合 ( iOS 7 上で iOS
6 のようなステータスバーを使用
)、色の名前を指定して、ステータスバーの背景色を設定できます。

    StatusBar.backgroundColorByName("red");

サポート対象の色の名前は、次のとおりです。

    black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown

### サポート対象のプラットフォーム

-   iOS

StatusBar.backgroundColorByHexString
------------------------------------

16 進数の文字列を使用して、ステータスバーの背景色を設定します。

    StatusBar.backgroundColorByHexString("#C0C0C0");

CSS のショートハンド プロパティー ( 簡略化表記 ) も使用できます。

    StatusBar.backgroundColorByHexString("#333"); // => #333333
    StatusBar.backgroundColorByHexString("#FAB"); // => #FFAABB

StatusBar.statusBarOverlaysWebView を false にした場合 ( iOS 7 上で iOS
6 のようなステータスバーを使用 )、16 進数の文字列 ( \#RRGGBB )
を使用して、ステータスバーの背景色を設定できます。

WP7 と WP8 の場合、\#AARRGGBB 形式でも、指定を行えます ( AA
は透明度を示すアルファ値 )。

### サポート対象のプラットフォーム

-   iOS

StatusBar.hide
--------------

ステータスバーを非表示にします。

    StatusBar.hide();

### サポート対象のプラットフォーム

-   iOS
-   Android

StatusBar.show
--------------

ステータスバーを表示します。

    StatusBar.show();

### サポート対象のプラットフォーム

-   iOS
-   Android

StatusBar.isVisible
-------------------

ステータスバーの状態 ( 表示または非表示 )
を確認する場合には、このプロパティーを使用します。

    if (StatusBar.isVisible) {
        // do something
    }

### サポート対象のプラットフォーム

-   iOS
-   Android

