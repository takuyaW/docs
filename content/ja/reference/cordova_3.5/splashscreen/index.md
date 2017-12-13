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

-   Android
-   iOS

メソッド
--------

-   splashscreen.show
-   splashscreen.hide

### Android 特有の動作

config.xml に、次の preference を追加します。

`<preference name=\"splashscreen\" value=\"foo\" />`

Where foo is the name of the splashscreen file. Preferably a 9 patch
file. Make sure to add your splashcreen files to your res/xml directory
under the appropriate folders.

For Android, you also have to edit your projects main java file. You
must add a second parameter representing a time delay to your
super.loadUrl.

`super.loadUrl(Config.getStartUrl(), 10000);`

splashscreen.hide
-----------------

スプラッシュスクリーンを非表示にします。

``` {.sourceCode .javascript}
navigator.splashscreen.hide();
```

### iOS 特有の動作

The `config.xml` file's `AutoHideSplashScreen` setting must be `false`.
To delay hiding the splash screen for two seconds, add a timer such as
the following in the `deviceready` event handler:

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
