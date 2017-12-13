---
title: InAppBrowser Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/master/RELEASENOTES.md#054-dec-02-2014">0.5.4</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-inappbrowser">}}.
{{</note>}}

This plugin provides a web browser view that displays when calling
`window.open()`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

The InAppBrowser window behaves like a standard web browser, and can't
access Cordova APIs. For this reason, the InAppBrowser is recommended if
you need to load third-party (untrusted) content, instead of loading
that into the main Cordova webview. The InAppBrowser is not subject to
the whitelist, nor is opening links in the system browser.

The InAppBrowser provides by default its own GUI controls for the user
(back, forward, done).

This plugin hooks `window.open`.

Although `window.open` is in the global scope, InAppBrowser is not
available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("window.open works well");
    }

Plugin ID
---------

    org.apache.cordova.inappbrowser

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.inappbrowser` plugin in Monaca Cloud IDE.

window.open
-----------

Opens a URL in a new `InAppBrowser` instance, the current browser
instance, or the system browser.

    var ref = window.open(url, target, options);

-   **ref**: Reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **url**: The URL to load *(String)*. Call `encodeURI()` on this if
    the URL contains Unicode characters.
-   **target**: The target in which to load the URL, an optional
    parameter that defaults to `_self`. *(String)*
    -   `_self`: Opens in the Cordova WebView if the URL is in the white
        list, otherwise it opens in the `InAppBrowser`.
    -   `_blank`: Opens in the `InAppBrowser`.
    -   `_system`: Opens in the system's web browser.
-   **options**: Options for the `InAppBrowser`. Optional, defaulting
    to: `location=yes`. *(String)*

    The `options` string must not contain any blank space, and each
    feature's name/value pairs must be separated by a comma. Feature
    names are case insensitive. All platforms support the value below:

    -   **location**: Set to `yes` or `no` to turn the `InAppBrowser`'s
        location bar on or off.

    Android only:

    -   **hidden**: set to `yes` to create the browser and load the
        page, but not show it. The loadstop event fires when loading is
        complete. Omit or set to `no` (default) to have the browser open
        and load normally.
    -   **clearcache**: set to `yes` to have the browser's cookie cache
        cleared before the new window is opened
    -   **clearsessioncache**: set to `yes` to have the session cookie
        cache cleared before the new window is opened

    iOS only:

    -   **closebuttoncaption**: set to a string to use as the **Done**
        button's caption. Note that you need to localize this value
        yourself.
    -   **disallowoverscroll**: Set to `yes` or `no` (default is `no`).
        Turns on/off the UIWebViewBounce property.
    -   **hidden**: set to `yes` to create the browser and load the
        page, but not show it. The loadstop event fires when loading is
        complete. Omit or set to `no` (default) to have the browser open
        and load normally.
    -   **clearcache**: set to `yes` to have the browser's cookie cache
        cleared before the new window is opened
    -   **clearsessioncache**: set to `yes` to have the session cookie
        cache cleared before the new window is opened
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

    Windows only:

    -   **hidden**: set to `yes` to create the browser and load the
        page, but not show it. The loadstop event fires when loading is
        complete. Omit or set to `no` (default) to have the browser open
        and load normally.

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

InAppBrowser
------------

The object returned from a call to `window.open`.

### Methods

-   addEventListener
-   removeEventListener
-   close
-   show
-   executeScript
-   insertCSS

addEventListener
----------------

> Adds a listener for an event from the `InAppBrowser`.

    ref.addEventListener(eventname, callback);

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*
-   **eventname**: the event to listen for *(String)*
-   **loadstart**: event fires when the `InAppBrowser` starts to load a
    URL.
-   **loadstop**: event fires when the `InAppBrowser` finishes loading a
    URL.
-   **loaderror**: event fires when the `InAppBrowser` encounters an
    error when loading a URL.
-   **exit**: event fires when the `InAppBrowser` window is closed.
-   **callback**: the function that executes when the event fires. The
    function is passed an `InAppBrowserEvent` object as a parameter.

### InAppBrowserEvent Properties

-   **type**: the eventname, either `loadstart`, `loadstop`,
    `loaderror`, or `exit`. *(String)*
-   **url**: the URL that was loaded. *(String)*
-   **code**: the error code, only in the case of `loaderror`.
    *(Number)*
-   **message**: the error message, only in the case of `loaderror`.
    *(String)*

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });

removeEventListener
-------------------

> Removes a listener for an event from the `InAppBrowser`.

    ref.removeEventListener(eventname, callback);

-   **ref**: reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **eventname**: the event to stop listening for. *(String)*
-   **loadstart**: event fires when the `InAppBrowser` starts to load a
    URL.
-   **loadstop**: event fires when the `InAppBrowser` finishes loading a
    URL.
-   **loaderror**: event fires when the `InAppBrowser` encounters an
    error loading a URL.
-   **exit**: event fires when the `InAppBrowser` window is closed.
-   **callback**: the function to execute when the event fires. The
    function is passed an `InAppBrowserEvent` object.

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS
-   Windows 8 and 8.1
-   Windows Phone 7 and 8

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

close
-----

> Closes the `InAppBrowser` window.

    ref.close();

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

show
----

> Displays an InAppBrowser window that was opened hidden. Calling this
> has no effect if the InAppBrowser was already visible.

    ref.show();

-   **ref**: reference to the InAppBrowser window (`InAppBrowser`)

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();

executeScript
-------------

> Injects JavaScript code into the `InAppBrowser` window

    ref.executeScript(details, callback);

-   **ref**: reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*
-   **file**: URL of the script to inject.
-   **code**: Text of the script to inject.
-   **callback**: the function that executes after the JavaScript code
    is injected.
    -   If the injected script is of type `code`, the callback executes
        with a single parameter, which is the return value of the
        script, wrapped in an `Array`. For multi-line scripts, this is
        the return value of the last statement, or the last expression
        evaluated.

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });

insertCSS
---------

> Injects CSS into the `InAppBrowser` window.

    ref.insertCSS(details, callback);

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*
-   **file**: URL of the stylesheet to inject.
-   **code**: Text of the stylesheet to inject.
-   **callback**: the function that executes after the CSS is injected.

### Supported Platforms

-   Amazon Fire OS
-   Android
-   iOS

### Quick Example

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
