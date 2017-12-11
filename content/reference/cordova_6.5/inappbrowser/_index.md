---
title: InAppBrowser Plugin
---

Tested Version: [1.7.1](https://github.com/apache/cordova-plugin-inappbrowser/releases/tag/1.7.1)

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

{{<syntax>}}
    cordova-plugin-inappbrowser
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`InAppBrowser` plugin in Monaca Cloud IDE.

API Reference
-------------

### cordova.InAppBrowser.open

Opens a URL in a new `InAppBrowser` instance, the current browser
instance, or the system browser.

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open(url, target, options);
{{</highlight>}}

-   **ref**: Reference to the `InAppBrowser` window when the target is
    set to `'_blank'`. *(InAppBrowser)*
-   **url**: The URL to load *(String)*. Call `encodeURI()` on this if
    the URL contains Unicode characters.
-   **target**: The target in which to load the URL, an optional
    parameter that defaults to `_self`. *(String)*

    > -   `_self`: Opens in the Cordova WebView if the URL is in the
    >     white list, otherwise it opens in the `InAppBrowser`.
    > -   `_blank`: Opens in the `InAppBrowser`.
    > -   `_system`: Opens in the system's web browser.

-   **options**: Options for the `InAppBrowser`. Optional, defaulting
    to: `location=yes`. *(String)* The `options` string must not contain
    any blank space, and each feature's name/value pairs must be
    separated by a comma. Feature names are case insensitive. All
    platforms support the value below:

    > -   **location**: Set to `yes` or `no` to turn the
    >     `InAppBrowser`'s location bar on or off.
    >
    > Android only:
    >
    > -   **hidden**: set to `yes` to create the browser and load the
    >     page, but not show it. The loadstop event fires when loading
    >     is complete. Omit or set to `no` (default) to have the browser
    >     open and load normally.
    > -   **clearcache**: set to `yes` to have the browser's cookie
    >     cache cleared before the new window is opened
    > -   **clearsessioncache**: set to `yes` to have the session cookie
    >     cache cleared before the new window is opened
    > -   **zoom**: set to `yes` to show Android browser's zoom
    >     controls, set to `no` to hide them. Default value is `yes`.
    > -   **hardwareback**: set to `yes` to use the hardware back button
    >     to navigate backwards through the `InAppBrowser`'s history. If
    >     there is no previous page, the `InAppBrowser` will close. The
    >     default value is `yes`, so you must set it to `no` if you want
    >     the back button to simply close the InAppBrowser.
    > -   **mediaPlaybackRequiresUserAction**: Set to `yes` to prevent
    >     HTML5 audio or video from autoplaying (defaults to `no`).
    > -   **shouldPauseOnSuspend**: Set to `yes` to make InAppBrowser
    >     WebView to pause/resume with the app to stop background audio
    >     (this may be required to avoid Google Play issues like
    >     described in
    >     [CB-11013](https://issues.apache.org/jira/browse/CB-11013)).
    > -   **useWideViewPort**: Sets whether the WebView should enable
    >     support for the "viewport" HTML meta tag or should use a wide
    >     viewport. When the value of the setting is `no`, the layout
    >     width is always set to the width of the WebView control in
    >     device-independent (CSS) pixels. When the value is `yes` and
    >     the page contains the viewport meta tag, the value of the
    >     width specified in the tag is used. If the page does not
    >     contain the tag or does not provide a width, then a wide
    >     viewport will be used. (defaults to `yes`).
    >
    > iOS only:
    >
    > -   **closebuttoncaption**: set to a string to use as the **Done**
    >     button's caption. Note that you need to localize this value
    >     yourself.
    > -   **disallowoverscroll**: Set to `yes` or `no` (default is
    >     `no`). Turns on/off the UIWebViewBounce property.
    > -   **hidden**: set to `yes` to create the browser and load the
    >     page, but not show it. The loadstop event fires when loading
    >     is complete. Omit or set to `no` (default) to have the browser
    >     open and load normally.
    > -   **clearcache**: set to `yes` to have the browser's cookie
    >     cache cleared before the new window is opened
    > -   **clearsessioncache**: set to `yes` to have the session cookie
    >     cache cleared before the new window is opened
    > -   **toolbar**: set to `yes` or `no` to turn the toolbar on or
    >     off for the InAppBrowser (defaults to `yes`)
    > -   **enableViewportScale**: Set to `yes` or `no` to prevent
    >     viewport scaling through a meta tag (defaults to `no`).
    > -   **mediaPlaybackRequiresUserAction**: Set to `yes` to prevent
    >     HTML5 audio or video from autoplaying (defaults to `no`).
    > -   **allowInlineMediaPlayback**: Set to `yes` or `no` to allow
    >     in-line HTML5 media playback, displaying within the browser
    >     window rather than a device-specific playback interface. The
    >     HTML's `video` element must also include the
    >     `webkit-playsinline` attribute (defaults to `no`)
    > -   **keyboardDisplayRequiresUserAction**: Set to `yes` or `no` to
    >     open the keyboard when form elements receive focus via
    >     JavaScript's `focus()` call (defaults to `yes`).
    > -   **suppressesIncrementalRendering**: Set to `yes` or `no` to
    >     wait until all new view content is received before being
    >     rendered (defaults to `no`).
    > -   **presentationstyle**: Set to `pagesheet`, `formsheet` or
    >     `fullscreen` to set the [presentation
    >     style](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle)
    >     (defaults to `fullscreen`).
    > -   **transitionstyle**: Set to `fliphorizontal`, `crossdissolve`
    >     or `coververtical` to set the [transition
    >     style](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle)
    >     (defaults to `coververtical`).
    > -   **toolbarposition**: Set to `top` or `bottom` (default is
    >     `bottom`). Causes the toolbar to be at the top or bottom of
    >     the window.
    >
    > Windows only:
    >
    > -   **hidden**: set to `yes` to create the browser and load the
    >     page, but not show it. The loadstop event fires when loading
    >     is complete. Omit or set to `no` (default) to have the browser
    >     open and load normally.
    > -   **fullscreen**: set to `yes` to create the browser control
    >     without a border around it. Please note that if
    >     **location=no** is also specified, there will be no control
    >     presented to user to close IAB window.
    > -   **hardwareback**: works the same way as on Android platform.

#### Supported Platforms

-   Android
-   iOS

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
`inAppBrowserWrap`/inAppBrowserWrapFullscreen CSS classes.

### InAppBrowser

The object returned from a call to `cordova.InAppBrowser.open` when the
target is set to `'_blank'`.

#### Methods

-   addEventListener
-   removeEventListener
-   close
-   show
-   hide
-   executeScript
-   insertCSS

### InAppBrowser.addEventListener

Adds a listener for an event from the `InAppBrowser`. (Only available when the target is set to `'_blank'`)

{{<highlight javascript>}}
    ref.addEventListener(eventname, callback);
{{</highlight>}}

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

### Example

{{<highlight javascript>}}
var inAppBrowserRef;

function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

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

#### Quick Example

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
{{</highlight>}}

### InAppBrowser.removeEventListener

Removes a listener for an event from the `InAppBrowser`. (Only available when the target is set to `'_blank'`)

{{<highlight javascript>}}
    ref.removeEventListener(eventname, callback);
{{</highlight>}}

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

#### Supported Platforms

-   Android
-   iOS

#### Quick Example

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
{{</highlight>}}

### InAppBrowser.close

Closes the `InAppBrowser` window.

{{<highlight javascript>}}
    ref.close();
{{</highlight>}}

-   **ref**: reference to the `InAppBrowser` window *(InAppBrowser)*

#### Supported Platforms

-   Android
-   iOS

#### Quick Example

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
{{</highlight>}}

### InAppBrowser.show

Displays an InAppBrowser window that was opened hidden. Calling this has no effect if the InAppBrowser was already visible.

{{<highlight javascript>}}
    ref.show();
{{</highlight>}}

-   **ref**: reference to the InAppBrowser window (InAppBrowser)

#### Supported Platforms

-   Android
-   iOS

#### Quick Example

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();
{{</highlight>}}

### InAppBrowser.hide

Hides the InAppBrowser window. Calling this has no effect if the
InAppBrowser was already hidden.

{{<highlight javascript>}}
    ref.hide();
{{</highlight>}}

-   **ref**: reference to the InAppBrowser window (InAppBrowser)

#### Supported Platforms

-   Android
-   iOS

#### Quick Example

{{<highlight javascript>}}
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank');
    // some time later...
    ref.hide();
{{</highlight>}}

### InAppBrowser.executeScript

Injects JavaScript code into the `InAppBrowser` window. (Only available
when the target is set to `'_blank'`)

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
    -   If the injected script is of type `code`, the callback executes
        with a single parameter, which is the return value of the
        script, wrapped in an `Array`. For multi-line scripts, this is
        the return value of the last statement, or the last expression
        evaluated.

#### Supported Platforms

-   Android
-   iOS

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

### InAppBrowser.insertCSS

Injects CSS into the `InAppBrowser` window. (Only available when the
target is set to `'_blank'`)

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

Sample: Show help pages with an InAppBrowser
--------------------------------------------

You can use this plugin to show helpful documentation pages within your
app. Users can view online help documents and then close them without
leaving the app.

Here's a few snippets that show how you do this.

-   [Give users a way to ask for help](#give)
-   [Load a help page](#load)
-   [Let users know that you're getting their page ready](#let)
-   [Show the help page](#show)
-   [Handle page errors](#handle)

### <a name="give"></a> Give users a way to ask for help

There's lots of ways to do this in your app. A drop down list is a
simple way to do that.

{{<highlight html>}}
<select id="help-select">
    <option value="default">Need help?</option>
    <option value="article">Show me a helpful article</option>
    <option value="video">Show me a helpful video</option>
    <option value="search">Search for other topics</option>
</select>
{{</highlight>}}

Gather the users choice in the `onDeviceReady` function of the page and
then send an appropriate URL to a helper function in some shared library
file. Our helper function is named `showHelp()` and we'll write that
function next.

{{<highlight javascript>}}
$('#help-select').on('change', function (e) {

    var url;

    switch (this.value) {

        case "article":
            url = "https://cordova.apache.org/docs/en/latest/"
                        + "reference/cordova-plugin-inappbrowser/index.html";
            break;

        case "video":
            url = "https://youtu.be/F-GlVrTaeH0";
            break;

        case "search":
            url = "https://www.google.com/#q=inAppBrowser+plugin";
            break;
    }

    showHelp(url);

});
{{</highlight>}}

### <a name="load"></a> Load a help page

We'll use the `open` function to load the help page. We're setting the
`hidden` property to `yes` so that we can show the browser only after
the page content has loaded. That way, users don't see a blank browser
while they wait for content to appear. When the `loadstop` event is
raised, we'll know when the content has loaded. We'll handle that event
shortly.

{{<highlight javascript>}}
function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

}
{{</highlight>}}

### <a name="let"></a> Let users know that you're getting their page ready

Because the browser doesn't immediately appear, we can use the
`loadstart` event to show a status message, progress bar, or other
indicator. This assures users that content is on the way.

{{<highlight javascript>}}
function loadStartCallBack() {

    $('#status-message').text("loading please wait ...");

}
{{</highlight>}}

### <a name="show"></a> Show the help page

When the `loadstopcallback` event is raised, we know that the content
has loaded and we can make the browser visible. This sort of trick can
create the impression of better performance. The truth is that whether
you show the browser before content loads or not, the load times are
exactly the same.

{{<highlight javascript>}}
function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        $('#status-message').text("");

        inAppBrowserRef.show();
    }

}
{{</highlight>}}

You might have noticed the call to the `insertCSS` function. This serves
no particular purpose in our scenario. But it gives you an idea of why
you might use it. In this case, we're just making sure that the font
size of your pages have a certain size. You can use this function to
insert any CSS style elements. You can even point to a CSS file in your
project.

### <a name="handle"></a> Handle page errors

Sometimes a page no longer exists, a script error occurs, or a user
lacks permission to view the resource. How or if you handle that
situation is completely up to you and your design. You can let the
browser show that message or you can present it in another way.

We'll try to show that error in a message box. We can do that by
injecting a script that calls the `alert` function. That said, this
won't work in browsers on Windows devices so we'll have to look at the
parameter of the `executeScript` callback function to see if our attempt
worked. If it didn't work out for us, we'll just show the error message
in a `<div>` on the page.

{{<highlight javascript>}}
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

More Usage Info
---------------

### Local Urls ( source is in the app package )

{{<highlight javascript>}}
    var iab = cordova.InAppBrowser;

    iab.open('local-url.html');                  // loads in the Cordova WebView
    iab.open('local-url.html', '_self');         // loads in the Cordova WebView
    iab.open('local-url.html', '_system');       // Security error: system browser, but url will not load (iOS)
    iab.open('local-url.html', '_blank');        // loads in the InAppBrowser
    iab.open('local-url.html', 'random_string'); // loads in the InAppBrowser
    iab.open('local-url.html', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar
{{</highlight>}}

### Whitelisted Content

{{<highlight javascript>}}
    var iab = cordova.InAppBrowser;

    iab.open('http://whitelisted-url.com');                  // loads in the Cordova WebView
    iab.open('http://whitelisted-url.com', '_self');         // loads in the Cordova WebView
    iab.open('http://whitelisted-url.com', '_system');       // loads in the system browser
    iab.open('http://whitelisted-url.com', '_blank');        // loads in the InAppBrowser
    iab.open('http://whitelisted-url.com', 'random_string'); // loads in the InAppBrowser

    iab.open('http://whitelisted-url.com', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar
{{</highlight>}}

### Urls that are not white-listed

{{<highlight javascript>}}
    var iab = cordova.InAppBrowser;

    iab.open('http://url-that-fails-whitelist.com');                  // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', '_self');         // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', '_system');       // loads in the system browser
    iab.open('http://url-that-fails-whitelist.com', '_blank');        // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', 'random_string'); // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar
{{</highlight>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)