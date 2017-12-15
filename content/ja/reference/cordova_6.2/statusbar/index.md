ステータスバーの制御 プラグイン
===============================

テスト環境 ( バージョン番号 ) :
[2.1.3](https://github.com/apache/cordova-plugin-statusbar/releases/tag/2.1.3)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-statusbar)
をご確認ください。

</div>

`StatusBar` オブジェクトを使用して、iOS と Android
のステータスバーをカスタマイズできます。

プラグイン ID
-------------

    cordova-plugin-statusbar

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`StatusBar` プラグインを
有効 &lt;add\_plugins&gt; にします。

peference を使用したカスタマイズ設定
------------------------------------

### config.xml

-   `StatusBarOverlaysWebView` ( 真偽値、デフォルトでは true
    )。アプリの起動時、WebView 上にステータスバーを置くか (
    overlay/オーバーレイ ) 否かを設定します。\[ 翻訳者メモ :
    原文には、「 on iOS 7 」
    とありますが、他のバージョンでも使用されていることから、この表現を削除しています
    \]

>     <preference name="StatusBarOverlaysWebView" value="true" />

-   `StatusBarBackgroundColor` ( 16
    進数の文字列で示すカラーコード、デフォルトはなし
    )。アプリ起動時のスタータスバーの背景色を、16進数の文字列 ( \#RRGGBB
    )
    で設定します。この値が設定されていない場合、背景色は透明になります。\[
    翻訳者メモ : 原文には、「 on iOS 7 」
    とありますが、他のバージョンでも使用されていることから、この表現を削除しています
    \]

>     <preference name="StatusBarBackgroundColor" value="#000000" />

-   `StatusBarStyle` ( ステータスバーのスタイル、デフォルトは
    lightcontent )。ステータスバーのスタイル ( 色 ) を設定します。
    default、lightcontent、blacktranslucent、blackopaque
    のいずれかを設定できます。\[ 翻訳者メモ : 原文には、「 on iOS 7 」
    とありますが、他のバージョンでも使用されていることから、この表現を削除しています
    \]

>     <preference name="StatusBarStyle" value="lightcontent" />

### Android 特有の動作

Android 5+
を対象とする、多くのガイドラインでは、スタータスバーとアプリのテーマに、別々の色を指定するように推奨されています
( 一方、iOS 7+
向けのアプリでは、スタータスバーとアプリのカラーを統一する方が多いようです
)。ここでは、ステータスバーの色をあらかじめ設定するのではなく (
`StatusBar.backgroundColorByHexString` または
`StatusBar.backgroundColorByName` を設定 )、動的 ( プログラムの実行時 )
に設定する方法の一例を記します。

    if (cordova.platformId == 'android') {
        StatusBar.backgroundColorByHexString("#333");
    }

### アプリ起動時の非表示設定

アプリの実行中は、後述する StatusBar.hide
関数を使用できます。また、アプリ起動時にステータスバーを非表示にしたい場合は、アプリの
Info.plist ファイルの内容を変更する必要があります。

AZQ

    <config-file parent="UIStatusBarHidden" platform="ios" target="*-Info.plist">
        <true/>
    </config-file>
    <config-file parent="UIViewControllerBasedStatusBarAppearance" platform="ios" target="*-Info.plist">
        <false/>
    </config-file

### メソッド

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

### プロパティー

-   StatusBar.isVisible

### パーミッション

**config.xml**

    <feature name="StatusBar">
      <param name="ios-package" value="CDVStatusBar" onload="true" />
    </feature>

API の解説
----------

### StatusBar.overlaysWebView

iOS 7 のステータスバーを上書きします ( WebView の上書きではありません
)。

    StatusBar.overlaysWebView(true);

#### 解説

iOS 7 のステータスバーを、iOS 6 のように表示したい場合、false
に設定します。

#### サポート対象のプラットフォーム

-   iOS

#### 例

    StatusBar.overlaysWebView(true);
    StatusBar.overlaysWebView(false);

### StatusBar.styleDefault

デフォルトのステータスバーを使用します ( 黒の文字、白の背景 )。

    StatusBar.styleDefault();

#### サポート対象のプラットフォーム

-   iOS
-   Windows Phone 8.1

### StatusBar.styleLightContent

lightContent のステータスバーを使用します ( 白の文字、黒の背景 )。

    StatusBar.styleLightContent();

#### サポート対象のプラットフォーム

-   iOS
-   Windows Phone 8.1

### StatusBar.styleBlackTranslucent

blackTranslucent のステータスバーを使用します (
白の文字、半透明の黒の背景 )。

    StatusBar.styleBlackTranslucent();

#### サポート対象のプラットフォーム

-   iOS
-   Windows Phone 8.1

### StatusBar.styleBlackOpaque

blackOpaque のステータスバーを使用します ( 白の文字、不透明な黒の背景
)。

    StatusBar.styleBlackOpaque();

#### サポート対象のプラットフォーム

-   iOS
-   Windows Phone 8.1

### StatusBar.backgroundColorByName

StatusBar.statusBarOverlaysWebView を false にした場合 ( iOS 7 上で iOS
6 のようなステータスバーを使用
)、色の名前を指定して、ステータスバーの背景色を設定できます。

    StatusBar.backgroundColorByName("red");

サポート対象の色の名前は、次のとおりです。

    black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown

#### サポート対象のプラットフォーム

-   iOS
-   Android 5+
-   Windows Phone 8.1

### StatusBar.backgroundColorByHexString

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

#### サポート対象のプラットフォーム

-   iOS
-   Android 5+
-   Windows Phone 8.1

### StatusBar.hide

ステータスバーを非表示にします。

    StatusBar.hide();

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows Phone 8.1

### StatusBar.show

ステータスバーを表示します。

    StatusBar.show();

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows Phone 8.1

### StatusBar.isVisible

ステータスバーの状態 ( 表示または非表示 )
を確認する場合には、このプロパティーを使用します。

    if (StatusBar.isVisible) {
        // do something
    }

#### サポート対象のプラットフォーム

-   iOS
-   Android
-   Windows Phone 8.1
