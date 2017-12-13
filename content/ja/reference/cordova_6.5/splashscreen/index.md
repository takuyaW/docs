スプラッシュスクリーンの制御 プラグイン
=======================================

テスト環境 ( バージョン番号 ) :
[4.0.3](https://github.com/apache/cordova-plugin-splashscreen/releases/tag/4.0.3)

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
-   Windows (cordova-windows バージョン 4.4.0 以上が必要)

<div class="admonition note">

プラグインAPIを使用しない場合（つまりプログラム的な表示/非表示の場合）に、Windows（AndroidとiOSではなく）でプラグインは必要ありません。

</div>

peference を使用したカスタマイズ設定
------------------------------------

### config.xml

-   `AutoHideSplashScreen` ( 真偽値、デフォルトでは true ) :
    スプラッシュスクリーンを自動的に非表示にするかを設定します。preference
    「 `SplashScreenDelay` 」
    に指定された時間の経過後、スプラッシュスクリーンが非表示になります。

    ``` {.sourceCode .xml}
    <preference name="AutoHideSplashScreen" value="true" />
    ```

-   `SplashScreenDelay` ( 数値、デフォルトでは 3000 ) :
    スプラッシュスクリーンを自動的に非表示にするまでの時間 ( ミリ秒単位
    ) を指定します。

    ``` {.sourceCode .xml}
    <preference name="SplashScreenDelay" value="3000" />
    ```

<div class="admonition note">

以前は、ミリ秒ではなく秒単位で値を設定していたため、現在でも、30
未満の値を指定した場合は、「 秒 」 として処理されるようになっています (
応急的な措置ですので、将来的には廃止します )。

</div>

スプラッシュスクリーンを無効にする場合には、次の preference を
`config.xml` に追加します。

``` {.sourceCode .xml}
<preference name="SplashScreenDelay" value="0"/>
```

### Windows 特有の動作

UI
/コントロールに影響を与えないようにドキュメント本体全体を動的に更新する（つまり、SPAルーターなどを利用した場合）場合は、スプラッシュスクリーンを無効にする必要があります。

<div class="admonition note">

バグ（ [CB-11658](https://issues.apache.org/jira/browse/CB-11658)
）を避けるためには、HTMLで `WinJS/base.js` を参照する必要があります。

</div>

### iOS 特有の動作

-   iOS では、スプラッシュスクリーンの画像は、「 Launch Image 」
    と呼ばれています。iOS では、画像は必須となります。

`ios`
プラットフォーム上で、スプラッシュスクリーンを無効にする場合には、上記の他に、`<preference name=\"FadeSplashScreenDuration\" value=\"0\"/>`
を `config.xml` に追加します。

-   `FadeSplashScreen` ( 真偽値、デフォルトでは `true` ):
    画面の状態が切り替わるときに、スプラッシュスクリーンがフェードイン・フェードアウト
    ( fade in/out ) することを防ぐ場合には、false に設定します。

    ``` {.sourceCode .xml}
    <preference name="FadeSplashScreen" value="false"/>
    ```

-   `FadeSplashScreenDuration` （float、デフォルトは `500`）:
    スプラッシュスクリーンのフェード効果を実行するためのミリ秒数を指定します。

    ``` {.sourceCode .xml}
    <preference name="FadeSplashScreenDuration" value="750"/>
    ```

<div class="admonition note">

`SplashScreenDelay` の処理と `FadeSplashScreenDuration`
の処理は併用できます ( `FadeSplashScreenDuration` の処理を
`SplashScreenDelay` の処理に吸収させることができます
)。たとえば、&lt;preference name="SplashScreenDelay" value="3000" /&gt;
と &lt;preference name="FadeSplashScreenDuration" value="1000"/&gt; を
`config.xml` に設定した場合には、次のように処理されます。

-   00:00 - スプラッシュスクリーンの表示
-   00:02 - フェード処理を開始
-   00:03 - スプラッシュスクリーンの非表示

</div>

`<preference name="FadeSplashScreen" value="false"/>`
の設定とフェードの処理時間を `0` に設定したとき ( または、0 になったとき
)
の挙動は同じです。よって、上記の例では、スプラッシュスクリーンの非表示設定が優先されます
( スプラッシュスクリーンの非表示は、設定どおり、3 秒後になります )。

<div class="admonition note">

上記のような設定は、アプリの起動のみに適用できます。よって、コード内にて、スプラッシュスクリーンの表示・非表示を手動で行う場合、たとえば、次のように、フェード処理にタイマーを設定する必要があります。

</div>

``` {.sourceCode .javascript}
navigator.splashscreen.show();
window.setTimeout(function () {
    navigator.splashscreen.hide();
}, splashDuration - fadeDuration);
```

-   `ShowSplashScreenSpinner` ( 真偽値、デフォルトでは `true` ) :
    スプラッシュスクリーン上にスピナーを表示させない場合には、`false`
    を設定します。

    ``` {.sourceCode .xml}
    <preference name="ShowSplashScreenSpinner" value="false"/>
    ```

### Android 特有の動作

`config.xml` には、以下の設定を追加することができます。

``` {.sourceCode .xml}
<preference name="SplashMaintainAspectRatio" value="true|false" />
<preference name="SplashShowOnlyFirstTime" value="true|false" />
```

preference 「 `SplashMaintainAspectRatio` 」 は、任意の設定です。true
に設定した場合、スプラッシュスクリーンの画像は、画面サイズに応じて引き伸ばされるのではなく、縦横比は固定されたまま、拡大
( または 縮小 ) され表示されます ( CSS の background-size:cover に相当
)。この設定を使用すれば、画像が自然に表示されます。たとえば、画像が風景・文字の場合に有用です。特に、縦横比が異なる画面にも対応できるように、余白部分
( セーフエリア ) をあらかじめ大きく取っている画像の場合に有用です。

このプラグインでは、端末の向きが変わるたび、スプラッシュ画像を再読み込みします。よって、横方向
( landscape ) ・縦方向 ( portrait ) 用の画像をそれぞれ使用できます。

`SplashShowOnlyFirstTime` の設定もオプションです。デフォルトは `true`
です。`true`
に設定した場合、スプラッシュ画面はアプリケーションの起動時にのみ表示されます。しかし、
`navigator.app.exitApp()`
を使用してアプリケーションを終了し、次の起動時にスプラッシュスクリーンを表示させる場合は、このプロパティを
`false` に設定する必要があります
（これは、「戻る」ボタンを使ってアプリケーションを終了する場合にも適用されます）。

### Windows 特有の動作

-   `SplashScreenSpinnerColor` (
    文字列、デフォルトではシステム側のカラー設定を使用 ) : 「 \# 」
    記号付きのカラーコード ( 原文 「 hash 」 のみ )、RGB、CSS
    のカラーネームのいずれかで指定します。

    ``` {.sourceCode .xml}
    <preference name="SplashScreenSpinnerColor" value="#242424"/>
    <preference name="SplashScreenSpinnerColor" value="DarkRed"/>
    <preference name="SplashScreenSpinnerColor" value="rgb(50,128,128)"/>
    ```

-   `SplashScreenBackgroundColor` ( 文字列、デフォルトは \#464646 ): 16
    進数のカラーコードを指定します。

    ``` {.sourceCode .xml}
    <preference name="SplashScreenBackgroundColor" value="0xFFFFFFFF"/>
    ```

メソッド
--------

-   splashscreen.show
-   splashscreen.hide

### splashscreen.hide

スプラッシュスクリーンを非表示にします。

``` {.sourceCode .javascript}
navigator.splashscreen.hide();
```

### splashscreen.show

スプラッシュスクリーンを表示します。

``` {.sourceCode .javascript}
navigator.splashscreen.show();
```

アプリ側では、アプリが起動して、`deviceready`
イベントが発火するまで、`navigator.splashscreen.show()`
を呼び出すことはできません。矛盾しますが、スプラッシュスクリーンは、アプリが起動する前に表示される画面です。よって、このような処理の方法では、スプラッシュスクリーンの表示が遅れてしまうことになります。そこで、前述のように、`config.xml`
に、いくつかの設定をあらかじめしておき、アプリの起動後、直ちに (
アプリが完全に立ち上がる前、および、 deviceready イベントが発火する前
)、スプラッシュスクリーンが自動的に `表示される`
ようにします。よって、アプリの起動時にスプラッシュスクリーンを表示するために、`navigator.splashscreen.show()`
を使用することは、ほぼありません。

### 従来のLaunch イメージ

If you choose to use legacy launch images, you will use the following
syntax in `config.xml`:

    <splash src="res/screen/ios/Default~iphone.png" width="320" height="480"/>
    <splash src="res/screen/ios/Default@2x~iphone.png" width="640" height="960"/>
    <splash src="res/screen/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
    <splash src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
    <splash src="res/screen/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
    <splash src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
    <splash src="res/screen/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
    <splash src="res/screen/ios/Default-667h.png" width="750" height="1334"/>
    <splash src="res/screen/ios/Default-736h.png" width="1242" height="2208"/>

`src`
属性のファイル名は任意のものとなります。ファイル名は、プロジェクトのコンパイル時に使用されるものと一致するため使用されます。
width属性とheight属性は、どの起動イメージがどのデバイスに表示されるかを次のように決定します。

  width              height              端末
  ------------------ ------------------- ------------------------------------------------------------------
  320                480                 すべての非Retina iPhoneとiPod
  640                960                 iPhone 4/4s/5/5s (縦向き)
  750                1334                iPhone 6/6s/7 (縦向き)
  1242               2208                iPhone 6+/6s+/7+ (縦向き)
  2208               1242                iPhone 6+/6s+/7+ (横向き)
  768                1024                すべての非Retina iPads (縦向き)
  1024               768                 すべての非Retina iPads (横向き)
  1536               2048                すべてのRetina iPads (縦向き)
  2048               1536                すべてのRetina iPads (横向き)

<div class="admonition note">

画像イメージが `width` と `height`
属性で指定されたサイズと実際に一致することは非常に重要です。一致しない場合、デバイスは正しくレンダリングできないことがあります。

</div>

Windows固有の情報
-----------------

スプラッシュスクリーンは
MRT &lt;https://cordova.apache.org/docs/en/dev/config\_ref/images.html\#windows&gt;
コンセプトを使って定義できます。 `src="res/windows/splashscreen.png"`
を指定すると、以下のファイルがアプリケーションのimagesフォルダにコピーされます。
:

    ``res/windows/splashscreen.png`` | ``res/windows/splashscreen.scale-100.png``, ``res/windows/splashscreen.scale-125.png``, etc.

以下がサポートされています：

  画像サイズ                              | プロジェクト                                         | Widt                               h | Heigh                               t | ファイル名
  --------------------------------------- ------------------------------------------------------ ------------------------------------ --------------------------------------- ------------------------------------------------------------------------------------
  100                                     Windows 10/8.1                                         620                                  300                                     `splashscreen.png` | `splashscreen.scale-100. png`
  125                                     Windows 10                                             775                                  375                                     `splashscreen.scale-125. png`
  150                                     Windows 10                                             930                                  450                                     `splashscreen.scale-150. png`
  200                                     Windows 10                                             1240                                 600                                     `splashscreen.scale-200. png`
  400                                     Windows 10                                             2480                                 1200                                    `splashscreen.scale-400. png`
  140                                     Windows 8.1                                            868                                  420                                     `splashscreen.scale-140. png`
  180                                     Windows 8.1                                            1116                                 540                                     `splashscreen.scale-180. png`
  100                                     Windows Phone 8.1                                      480                                  800                                     `splashscreenphone.png` | `splashscreenphone.scale -100.png`
  140                                     Windows Phone 8.1                                      672                                  1120                                    `splashscreenphone.scale -140.png`
  240                                     Windows Phone 8.1                                      1152                                 1920                                    `splashscreenphone.scale -240.png`

<div class="admonition note">

Windows 10プロジェクトのスプラッシュスクリーンのサイズは、200
KByteを超えないようにしてください。

</div>

<div class="admonition note">

サポートされている形式は `.png` 、 `.jpg` 、 `.jpeg`
です。ターゲット内でのエクステンションの混在はサポートされていません。
`splashscreen.scale-100.png` 、 `splashscreen.scale-400.jpg` ではなく
`splashscreen.jpg` と `splashscreenphone.png` を使うことができます。

</div>

<div class="admonition note">

イメージを変更し、変更を有効にするための
`cordova prepare`を実行した後、Visual
Studioソリューションを再度開く必要があるかもしれません。

</div>

設定例
------

トップレベルの `config.xml` ファイル（ `platforms`
配下のファイルではありません）には、ここで指定されているような設定要素を追加します。

`src`
属性の値は、プロジェクトのルートディレクトリに対して相対的であり、wwwディレクトリではないことに注意してください（下記の「ディレクトリ構造」を参照してください）。ソースイメージに任意の名前を付けることができます。アプリの内部名はCordovaによって決定されます。

ディレクトリ構造：

    projectRoot
        hooks
        platforms
        plugins
        www
            css
            img
            js
        res
            screen
                android
                ios
                windows

``` {.sourceCode .xml}
<platform name="android">
    <!-- you can use any density that exists in the Android project -->
    <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
    <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
    <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
    <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>

    <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
    <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
    <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
    <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
</platform>

<platform name="ios">
    <!-- There are two mechanisms for showing launch images.
      -- Legacy method (supports all devices except iPad Pro 12.9):
      -- Note: Images are determined by width and height. The following are supported -->
    <splash src="res/screen/ios/Default~iphone.png" width="320" height="480"/>
    <splash src="res/screen/ios/Default@2x~iphone.png" width="640" height="960"/>
    <splash src="res/screen/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
    <splash src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
    <splash src="res/screen/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
    <splash src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
    <splash src="res/screen/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
    <splash src="res/screen/ios/Default-667h.png" width="750" height="1334"/>
    <splash src="res/screen/ios/Default-736h.png" width="1242" height="2208"/>
    <splash src="res/screen/ios/Default-Landscape-736h.png" width="2208" height="1242"/>
    <!-- Storyboard method (supports all devices):
      -- Important: If you use the storyboard method, legacy images are
      -- copied but ignored.
      -- Note: images are determined by scale, idiom, and size traits. The following
      -- are suggested based on current device form factors -->
    <splash src="res/screen/ios/Default@2x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comcom.png" />
    <splash src="res/screen/ios/Default@3x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@3x~universal~anycom.png" />
    <splash src="res/screen/ios/Default@3x~universal~comany.png" />

</platform>

<!-- Configuration using MRT concept (Recommended, see "Windows固有の情報" section for details): -->
<platform name="windows">
    <splash src="res/screen/windows/splashscreen.png" target="SplashScreen"/>
    <splash src="res/screen/windows/splashscreenphone.png" target="SplashScreenPhone"/>
</platform>

<!-- Configuration using image size: -->
<!--<platform name="windows">
    <splash src="res/screen/windows/splashscreen.png" width="620" height="300"/>
    <splash src="res/screen/windows/splashscreenphone.png" width="1152" height="1920"/>
</platform>-->

<platform name="blackberry10">
    <!-- Add a rim:splash element for each resolution and locale you wish -->
    <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
    <rim:splash src="res/screen/blackberry/splashscreen.png"/>
</platform>

<preference name="SplashScreenDelay" value="10000" />
```
