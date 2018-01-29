---
title: InAppBrowser Plugin
weight: 140
---

Tested Version:
[1.4.0](https://github.com/apache/cordova-plugin-inappbrowser/releases/tag/1.4.0)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-inappbrowser">}}.
{{</note>}}

This plugin provides a web browser view that displays when calling
`cordova.InAppBrowser.open()`.

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
{{</highlight>}}

The `cordova.InAppBrowser.open()` function is defined to be a drop-in
replacement for the `window.open()` function. Existing `window.open()`
calls can use the InAppBrowser window, by replacing window.open:

{{<highlight javascript>}}
window.open = cordova.InAppBrowser.open;
{{</highlight>}}

The InAppBrowser window behaves like a standard web browser, and can't
access Cordova APIs. For this reason, the InAppBrowser is recommended if
you need to load third-party (untrusted) content, instead of loading
that into the main Cordova webview. The InAppBrowser is not subject to
the whitelist, nor is opening links in the system browser.

The InAppBrowser provides by default its own GUI controls for the user
(back, forward, done).

For backwards compatibility, this plugin also hooks `window.open`.
However, the plugin-installed hook of `window.open` can have unintended
side effects (especially if this plugin is included only as a dependency
of another plugin). The hook of `window.open` will be removed in a
future major release. Until the hook is removed from the plugin, apps
can manually restore the default behaviour:

{{<highlight javascript>}}
delete window.open // Reverts the call back to it's prototype's default
{{</highlight>}}

Although `window.open` is in the global scope, InAppBrowser is not
available until after the `deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("window.open works well");
}
{{</highlight>}}

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-inappbrowser
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}})
`InAppBrowser` plugin in Monaca Cloud IDE.

API Reference
-------------

### cordova.InAppBrowser.open

Opens a URL in a new `InAppBrowser` instance, the current browser
instance, or the system browser.

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open(url, target, options);
{{</highlight>}}

-   **ref**: Reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **url**: The URL to load *(String)*. Call `encodeURI()` on this if
    the URL contains Unicode characters.
-   **target**: The target in which to load the URL, an optional parameter that defaults to `_self`. *(String)*
    
    -   `_self`: Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the `InAppBrowser`.
    -   `_blank`: Opens in the `InAppBrowser`.
    -   `_system`: Opens in the system's web browser.

-   **options**: Options for the `InAppBrowser`. Optional, defaulting to: `location=yes`. *(String)* The `options` string must not contain any blank space, and each
feature's name/value pairs must be separated by a comma. Feature names
are case insensitive. All platforms support the value below:

    -   **location**: Set to `yes` or `no` to turn the `InAppBrowser`'s location bar on or off.
    
    **Android only**:
    
    -   **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
    -   **clearcache**: set to `yes` to have the browser's cookie cache cleared before the new window is opened
    -   **clearsessioncache**: set to `yes` to have the session cookie cache cleared before the new window is opened
    -   **zoom**: set to `yes` to show Android browser's zoom controls, set to `no` to hide them. Default value is `yes`.
    -   **hardwareback**: set to `yes` to use the hardware back button to navigate backwards through the `InAppBrowser`'s history. If there is no previous page, the `InAppBrowser` will close. The default value is `yes`, so you must set it to `no` if you want the back button to simply close the InAppBrowser.

    **iOS only**:

    -   **closebuttoncaption**: set to a string to use as the **Done** button's caption. Note that you need to localize this value yourself.
    -   **disallowoverscroll**: Set to `yes` or `no` (default is `no`). Turns on/off the UIWebViewBounce property.
    -   **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
    -   **clearcache**: set to `yes` to have the browser's cookie cache cleared before the new window is opened
    -   **clearsessioncache**: set to `yes` to have the session cookie cache cleared before the new window is opened
    -   **toolbar**: set to `yes` or `no` to turn the toolbar on or off for the InAppBrowser (defaults to `yes`)
    -   **enableViewportScale**: Set to `yes` or `no` to prevent viewport scaling through a meta tag (defaults to `no`).
    -   **mediaPlaybackRequiresUserAction**: Set to `yes` or `no` to prevent HTML5 audio or video from autoplaying (defaults to `no`).
    -   **allowInlineMediaPlayback**: Set to `yes` or `no` to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface. The HTML's `video` element must also include the `webkit-playsinline` attribute (defaults to `no`)
    -   **keyboardDisplayRequiresUserAction**: Set to `yes` or `no` to open the keyboard when form elements receive focus via JavaScript's `focus()` call (defaults to `yes`).
    -   **suppressesIncrementalRendering**: Set to `yes` or `no` to wait until all new view content is received before being rendered (defaults to `no`).
    -   **presentationstyle**: Set to `pagesheet`, `formsheet` or `fullscreen` to set the [presentation style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) (defaults to `fullscreen`).
    -   **transitionstyle**: Set to `fliphorizontal`, `crossdissolve` or `coververtical` to set the [transition style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) (defaults to `coververtical`).
    -   **toolbarposition**: Set to `top` or `bottom` (default is `bottom`). Causes the toolbar to be at the top or bottom of the window.

    **Windows only**:

    -   **hidden**: set to `yes` to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to `no` (default) to have the browser open and load normally.
    -   **fullscreen**: set to `yes` to create the browser control without a border around it. Please note that if **location=no** is also specified, there will be no control presented to user to close IAB window.

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
var ref2 = cordova.InAppBrowser.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
{{</highlight>}}

#### Windows Quirks

Windows 8.0, 8.1 and Windows Phone 8.1 don't support remote urls to be
opened in the Cordova WebView so remote urls are always showed in the
system's web browser if opened with `target='_self'`.

On Windows 10 if the URL is NOT in the white list and is opened with
`target='_self'` it will be showed in the system's web browser instead
of InAppBrowser popup.

Similar to Firefox OS IAB window visual behaviour can be overridden via
`inAppBrowserWrap` / `inAppBrowserWrapFullscreen` CSS classes.

### InAppBrowser

The object returned from a call to `cordova.InAppBrowser.open`.

#### Methods

-   addEventListener
-   removeEventListener
-   close
-   show
-   executeScript
-   insertCSS

### addEventListener

Adds a listener for an event from the `InAppBrowser`.

{{<highlight javascript>}}
ref.addEventListener(eventname, callback);
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*
-   **eventname**: the event to listen for *(String)*

    -   **loadstart**: event fires when the `InAppBrowser` starts to load a URL.
    -   **loadstop**: event fires when the `InAppBrowser` finishes loading a URL.
    -   **loaderror**: event fires when the `InAppBrowser` encounters an error when loading a URL.
    -   **exit**: event fires when the `InAppBrowser` window is closed.

-   **callback**: the function that executes when the event fires. The
    function is passed an `InAppBrowserEvent` object as a parameter.

#### Example

{{<highlight javascript>}}
var inAppBrowserRef = undefined;

function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    with (inAppBrowserRef) {

        addEventListener('loadstart', loadStartCallBack);

        addEventListener('loadstop', loadStopCallBack);

        addEventListener('loaderror', loadErrorCallBack);
    }

}

function loadStartCallBack() {

    $('#status-message').text("loading please wait ...");

}

function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        $('#status-message').text("");

        inAppBrowserRef.show();
    }

}

function loadErrorCallBack(params) {

    $('#status-message').text("");

    var scriptErrorMesssage =
        "alert('Sorry we cannot open that page. Message from the server is : "
        + params.message + "');"

    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

    inAppBrowserRef.close();

    inAppBrowserRef = undefined;

}

function executeScriptCallBack(params) {

    if (params[0] == null) {

        $('#status-message').text(
            "Sorry we couldn't open that page. Message from the server is : '"
            + params.message + "'");
    }

}
{{</highlight>}}

#### InAppBrowserEvent Properties

-   **type**: the eventname, either `loadstart`, `loadstop`,
    `loaderror`, or `exit`. *(String)*
-   **url**: the URL that was loaded. *(String)*
-   **code**: the error code, only in the case of `loaderror`.
    *(Number)*
-   **message**: the error message, only in the case of `loaderror`.
    *(String)*

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstart', function(event) { alert(event.url); });
{{</highlight>}}

### removeEventListener

Removes a listener for an event from the `InAppBrowser`.

{{<highlight javascript>}}
ref.removeEventListener(eventname, callback);
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **eventname**: the event to stop listening for. *(String)*

    -   **loadstart**: event fires when the `InAppBrowser` starts to load a URL.
    -   **loadstop**: event fires when the `InAppBrowser` finishes loading a URL.
    -   **loaderror**: event fires when the `InAppBrowser` encounters an error loading a URL.
    -   **exit**: event fires when the `InAppBrowser` window is closed.

-   **callback**: the function to execute when the event fires. The
    function is passed an `InAppBrowserEvent` object.

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
var myCallback = function(event) { alert(event.url); }
ref.addEventListener('loadstart', myCallback);
ref.removeEventListener('loadstart', myCallback);
{{</highlight>}}

### close

Closes the `InAppBrowser` window.

{{<highlight javascript>}}
ref.close();
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.close();
{{</highlight>}}

### InAppBrowser.show

Displays an InAppBrowser window that was opened hidden. Calling this has
no effect if the InAppBrowser was already visible.

{{<highlight javascript>}}
ref.show(); 
{{</highlight>}}

-   **ref**: reference to the InAppBrowser window (`InAppBrowser`).

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'hidden=yes');
// some time later...
ref.show();
{{</highlight>}}

### InAppBrowser.executeScript

Injects JavaScript code into the `InAppBrowser` window

{{<highlight javascript>}}
ref.executeScript(details, callback);
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window. *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*

    -   **file**: URL of the script to inject.
    -   **code**: Text of the script to inject.

-   **callback**: the function that executes after the JavaScript code
    is injected.

    -   If the injected script is of type `code`, the callback executes with a single parameter, which is the return value of the script, wrapped in an `Array`. For multi-line scripts, this is the return value of the last statement, or the last expression evaluated.

#### Supported Platforms

-   Android
-   iOS
-   Windows 8 and 8.1

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({file: "myscript.js"});
});
{{</highlight>}}

#### Windows Quirks

Due to [MSDN docs](https://msdn.microsoft.com/en-us/library/windows.ui.xaml.controls.webview.invokescriptasync.aspx)
the invoked script can return only string values, otherwise the
parameter, passed to **callback** will be `[null]`.

### insertCSS

Injects CSS into the `InAppBrowser` window.

{{<highlight javascript>}}
ref.insertCSS(details, callback);
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*
-   **injectDetails**: details of the script to run, specifying either a
    `file` or `code` key. *(Object)*

    -   **file**: URL of the stylesheet to inject.
    -   **code**: Text of the stylesheet to inject.

-   **callback**: the function that executes after the CSS is injected.

#### Supported Platforms

-   Android
-   iOS
-   Windows

#### Quick Example

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.insertCSS({file: "mystyles.css"});
});
{{</highlight>}}
