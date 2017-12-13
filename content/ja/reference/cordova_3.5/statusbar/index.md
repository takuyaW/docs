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
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-statusbar/blob/master/RELEASENOTES.md#016-jun-05-2014">0.1.6</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-statusbar/blob/master/README.md)
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

アプリ起動時の非表示設定
------------------------

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

メソッド
--------

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

On iOS 7, set to false to make the statusbar appear like iOS 6. Set the
style and background color to suit using the other functions.

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

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by color name.

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

On iOS 7, when you set StatusBar.statusBarOverlaysWebView to false, you
can set the background color of the statusbar by a hex string
(\#RRGGBB).

On WP7 and WP8 you can also specify values as \#AARRGGBB, where AA is an
alpha value

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

