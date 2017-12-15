スプラッシュスクリーンの制御 プラグイン
=======================================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/RELEASENOTES.md#031-jun-05-2014">0.3.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-splashscreen/blob/master/README.md)
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

-   Android
-   iOS

メソッド
--------

-   splashscreen.show
-   splashscreen.hide

### Android 特有の動作

config.xml に、次の preference を追加します。

`<preference name=\"splashscreen\" value=\"foo\" />`

foo とは、スプラッシュスクリーンのファイル名です。 9 patch
形式のファイルを推奨します。適当なフォルダー下の res/xml
ディレクトリーに、スプラッシュスクリーンのファイルを置きます。

Android
に関しては、プロジェクトのメインのファイルを編集して、super.loadUrl
に、時間の遅延を設定する第二引数を追加する必要があります。

`super.loadUrl(Config.getStartUrl(), 10000);`

splashscreen.hide
-----------------

スプラッシュスクリーンを非表示にします。

``` {.sourceCode .javascript}
navigator.splashscreen.hide();
```

### iOS 特有の動作

`config.xml` ファイル内の `AutoHideSplashScreen` には、`false`
を設定します。2
秒間ほど間をおいて、スプラッシュスクリーンを非表示にする場合には、次のようにタイマーをセットします
( `deviceready` イベントハンドラー内 )。

``` {.sourceCode .javascript}
setTimeout(function() {
    navigator.splashscreen.hide();
}, 2000);
```

splashscreen.show
-----------------

スプラッシュスクリーンを表示します。

``` {.sourceCode .javascript}
navigator.splashscreen.show();
```

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
