Inappbrowser プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/master/RELEASENOTES.md#050-jun-05-2014">0.5.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-inappbrowser/blob/master/README.md)
をご確認ください。

</div>

This plugin provides a web browser view that displays when calling
`window.open()`, or when opening a link formed as `<a target="_blank">`.

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
```

**NOTE**: The InAppBrowser window behaves like a standard web browser,
and can't access Cordova APIs.

プラグイン ID
-------------

    org.apache.cordova.inappbrowser

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.inappbrowser`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

window.open
-----------

Opens a URL in a new `InAppBrowser` instance, the current browser
instance, or the system browser.

``` {.sourceCode .javascript}
var ref = window.open(url, target, options);
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **url**: The URL to load *(String)*. Call `encodeURI()` on this if
    the URL contains Unicode characters.
-   **target**: The target in which to load the URL, an optional
    parameter that defaults to `_self`. *(String)*
    -   `_self`: Opens in the Cordova WebView if the URL is in the white
        list, otherwise it opens in the `InAppBrowser`.
    -   `_blank`: `InAppBrowser` を開きます。
    -   `_system`: システム標準の Web ブラウザー ( system's web browser
        ) を開きます。
-   **options**: Options for the `InAppBrowser`. Optional, defaulting
    to: `location=yes`. *(String)*

    The `options` string must not contain any blank space, and each
    feature's name/value pairs must be separated by a comma. Feature
    names are case insensitive. All platforms support the value below:

    -   **location**: Set to `yes` or `no` to turn the `InAppBrowser`'s
        location bar on or off.

    Android 専用 :

    -   **closebuttoncaption**: set to a string to use as the **Done**
        button's caption.
    -   **hidden**: set to `yes` to create the browser and load the
        page, but not show it. The load event fires when loading is
        complete. Omit or set to `no` (default) to have the browser open
        and load normally.
    -   **clearcache**: set to `yes` to have the browser's cookie cache
        cleared before the new window is opened
    -   **clearsessioncache**: set to `yes` to have the session cookie
        cache cleared before the new window is opened

    iOS 専用 :

    -   **closebuttoncaption**: set to a string to use as the **Done**
        button's caption. Note that you need to localize this value
        yourself.
    -   **disallowoverscroll**: Set to `yes` or `no` (default is `no`).
        Turns on/off the UIWebViewBounce property.
    -   **hidden**: set to `yes` to create the browser and load the
        page, but not show it. The load event fires when loading is
        complete. Omit or set to `no` (default) to have the browser open
        and load normally.
    -   **toolbar**: set to `yes` or `no` to turn the toolbar on or off
        for the InAppBrowser (defaults to `yes`)
    -   **enableViewportScale**: Set to `yes` or `no` to prevent
        viewport scaling through a meta tag (defaults to `no`).
    -   **mediaPlaybackRequiresUserAction**: Set to `yes` or `no` to
        prevent HTML5 audio or video from autoplaying (defaults to
        `no`).
    -   **allowInlineMediaPlayback**: Set to `yes` or `no` to allow
        in-line HTML5 media playback, displaying within the browser
        window rather than a device-specific playback interface. The
        HTML's `video` element must also include the
        `webkit-playsinline` attribute (defaults to `no`)
    -   **keyboardDisplayRequiresUserAction**: Set to `yes` or `no` to
        open the keyboard when form elements receive focus via
        JavaScript's `focus()` call (defaults to `yes`).
    -   **suppressesIncrementalRendering**: Set to `yes` or `no` to wait
        until all new view content is received before being rendered
        (defaults to `no`).
    -   **presentationstyle**: Set to `pagesheet`, `formsheet` or
        `fullscreen` to set the [presentation
        style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle)
        (defaults to `fullscreen`).
    -   **transitionstyle**: Set to `fliphorizontal`, `crossdissolve` or
        `coververtical` to set the [transition
        style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle)
        (defaults to `coververtical`).
    -   **toolbarposition**: Set to `top` or `bottom` (default is
        `bottom`). Causes the toolbar to be at the top or bottom of the
        window.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
```

InAppBrowser
------------

`window.open` を呼び出し、返ってきたオブジェクトです。

### メソッド

-   addEventListener
-   removeEventListener
-   close
-   show
-   executeScript
-   insertCSS

addEventListener
----------------

> `InAppBrowser` のイベントに対して、リスナーを登録します。

``` {.sourceCode .javascript}
ref.addEventListener(eventname, callback);
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーを設定するイベント *(String)*
-   **loadstart**: event fires when the `InAppBrowser` starts to load a
    URL.
-   **loadstop**: event fires when the `InAppBrowser` finishes loading a
    URL.
-   **loaderror**: event fires when the `InAppBrowser` encounters an
    error when loading a URL.
-   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
-   **callback**: the function that executes when the event fires. The
    function is passed an `InAppBrowserEvent` object as a parameter.

### InAppBrowserEvent のプロパティー

-   **type**: the eventname, either `loadstart`, `loadstop`,
    `loaderror`, or `exit`. *(String)*
-   **url**: 読み込んだ URL *(String)*
-   **code**: the error code, only in the case of `loaderror`.
    *(Number)*
-   **message**: the error message, only in the case of `loaderror`.
    *(String)*

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstart', function(event) { alert(event.url); });
```

removeEventListener
-------------------

> `InAppBrowser` のイベントに対して登録されたリスナーを削除します。

``` {.sourceCode .javascript}
ref.removeEventListener(eventname, callback);
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーの登録を解除するイベント *(String)*
-   **loadstart**: event fires when the `InAppBrowser` starts to load a
    URL.
-   **loadstop**: event fires when the `InAppBrowser` finishes loading a
    URL.
-   **loaderror**: event fires when the `InAppBrowser` encounters an
    error loading a URL.
-   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
-   **callback**: the function to execute when the event fires. The
    function is passed an `InAppBrowserEvent` object.

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
var myCallback = function(event) { alert(event.url); }
ref.addEventListener('loadstart', myCallback);
ref.removeEventListener('loadstart', myCallback);
```

close
-----

> `InAppBrowser` ウィンドウを閉じます。

``` {.sourceCode .javascript}
ref.close();
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
ref.close();
```

show
----

> Displays an InAppBrowser window that was opened hidden. Calling this
> has no effect if the InAppBrowser was already visible.

``` {.sourceCode .javascript}
ref.show();
```

-   **ref**: InAppBrowser ウィンドウへのリファレンス (`InAppBrowser`)

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
// some time later...
ref.show();
```

executeScript
-------------

> `InAppBrowser` ウィンドウ上に、JacaScript コードをインジェクト (
> inject/注入 ) します。

``` {.sourceCode .javascript}
ref.executeScript(details, callback);
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*
-   **file**: インジェクトするスクリプトの URL
-   **code**: インジェクトするスクリプトのテキスト
-   **callback**: the function that executes after the JavaScript code
    is injected.
    -   If the injected script is of type `code`, the callback executes
        with a single parameter, which is the return value of the
        script, wrapped in an `Array`. For multi-line scripts, this is
        the return value of the last statement, or the last expression
        evaluated.

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({file: "myscript.js"});
});
```

insertCSS
---------

> `InAppBrowser` ウィンドウ上に、CSS をインジェクト ( inject ) します。

``` {.sourceCode .javascript}
ref.insertCSS(details, callback);
```

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*
-   **file**: インジェクトするスタイルシートの URL
-   **code**: インジェクトするスタイルシートのテキスト
-   **callback**: CSS のインジェクト後に実行する関数

### サポート対象のプラットフォーム

-   Android
-   iOS

### Quick 例

``` {.sourceCode .javascript}
var ref = window.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.insertCSS({file: "mystyles.css"});
});
```
