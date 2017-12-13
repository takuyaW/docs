スプラッシュスクリーンの制御 プラグイン
=======================================

テスト環境 ( バージョン番号 ) :
[3.2.2](https://github.com/apache/cordova-plugin-splashscreen/releases/tag/3.2.2)

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

-   Android
-   iOS
-   Windows ( cordova-windows バージョン 4.4.0 以上が必要 )

API の解説
----------

peference を使用したカスタマイズ設定 -----------

### config.xml

-   `AutoHideSplashScreen` ( 真偽値、デフォルトでは true ) :
    スプラッシュスクリーンを自動的に非表示にするかを設定します。preference
    「 `SplashScreenDelay` 」
    に指定された時間の経過後、スプラッシュスクリーンが非表示になります。

>     <preference name="AutoHideSplashScreen" value="true" />

-   `SplashScreenDelay` ( 数値、デフォルトでは 3000 ) :
    スプラッシュスクリーンを自動的に非表示にするまでの時間 ( ミリ秒単位
    ) を指定します。

>     <preference name="SplashScreenDelay" value="3000" />

<div class="admonition note">

以前は、ミリ秒ではなく、秒単位で値を設定していたため、現在でも、30
未満の値を指定した場合は、「 秒 」 として処理されるようになっています (
応急的な措置ですので、将来的には廃止します )。

</div>

### iOS 特有の動作

`ios`
プラットフォーム上で、スプラッシュスクリーンを無効にする場合には、上記の他に、`<preference name=\"FadeSplashScreenDuration\" value=\"0\"/>`
を `config.xml` に追加します。

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

<div class="admonition note">

`SplashScreenDelay` の処理と `FadeSplashScreenDuration`
の処理は併用できます ( `FadeSplashScreenDuration` の処理を
`SplashScreenDelay` の処理に吸収させることができます
)。たとえば、&lt;preference name="SplashScreenDelay" value="3000" /&gt;
と &lt;preference name="FadeSplashScreenDuration" value="1000"/&gt; を
`config.xml` に設定した場合には、次のように処理されます。

</div>

-   00:00 - スプラッシュスクリーンの表示
-   00:02 - フェード処理を開始
-   00:03 - スプラッシュスクリーンの非表示

`<preference name=\"FadeSplashScreen\" value=\"false\"/>`
の設定とフェードの処理時間を `0` に設定したとき ( または、0 になったとき
)
の挙動は同じです。よって、上記の例では、スプラッシュスクリーンの非表示設定が優先されます
( スプラッシュスクリーンの非表示は、設定どおり、3 秒後になります )。

<div class="admonition note">

上記のような設定は、アプリの起動のみに適用できます。よって、コード内にて、スプラッシュスクリーンの表示・非表示を手動で行う場合、たとえば、次のように、フェード処理にタイマーを設定する必要があります。

</div>

    navigator.splashscreen.show();
    window.setTimeout(function () {
        navigator.splashscreen.hide();
    }, splashDuration - fadeDuration);

-   `ShowSplashScreenSpinner` ( 真偽値、デフォルトでは `true` ) :
    スプラッシュスクリーン上にスピナーを表示させない場合には、false
    を設定します。

<!-- -->

    <preference name="ShowSplashScreenSpinner" value="false"/>

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

### iOS 特有の動作

iOS では、スプラッシュスクリーンの画像は、「 Launch Image 」
と呼ばれています。iOS では、画像は必須となります。

### Windows 特有の動作

-   `SplashScreenSpinnerColor` (
    文字列、デフォルトではシステム側のカラー設定を使用 ) : 「 \# 」
    記号付きのカラーコード ( 原文 「 hash 」 のみ )、RGB、CSS
    のカラーネームのいずれかで指定します。

<!-- -->

    <preference name="SplashScreenSpinnerColor" value="#242424"/>
    <preference name="SplashScreenSpinnerColor" value="DarkRed"/>
    <preference name="SplashScreenSpinnerColor" value="rgb(50,128,128)"/>

-   `SplashScreenBackgroundColor` ( 文字列、デフォルトは \#464646 ): 16
    進数のカラーコードを指定します。

<!-- -->

    <preference name="SplashScreenBackgroundColor" value="0xFFFFFFFF"/>

#### メソッド

-   splashscreen.show
-   splashscreen.hide

#### splashscreen.hide

スプラッシュスクリーンを非表示にします。

    navigator.splashscreen.hide();

#### splashscreen.show

スプラッシュスクリーンを表示します。

    navigator.splashscreen.show();

アプリ側では、アプリが起動して、`deviceready`
イベントが発火するまで、`navigator.splashscreen.show()`
を呼び出すことはできません。矛盾しますが、スプラッシュスクリーンは、アプリが起動する前に表示される画面です。よって、このような処理の方法では、スプラッシュスクリーンの表示が遅れてしまうことになります。そこで、前述のように、`config.xml`
に、いくつかの設定をあらかじめしておき、アプリの起動後、直ちに (
アプリが完全に立ち上がる前、および、 deviceready イベントが発火する前
)、スプラッシュスクリーンが自動的に `表示される`
ようにします。よって、アプリの起動時にスプラッシュスクリーンを表示するために、`navigator.splashscreen.show()`
を使用することは、ほぼありません。
