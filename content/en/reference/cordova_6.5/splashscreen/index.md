Splashscreen Plugin
===================

Tested Version:
[4.0.3](https://github.com/apache/cordova-plugin-splashscreen/releases/tag/4.0.3)

<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-splashscreen).

</div>

This plugin displays and hides a splash screen during application
launch.

Plugin ID
---------

    cordova-plugin-splashscreen

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Splashscreen` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows (cordova-windows version &gt;= 4.4.0 is required)

<div class="admonition note">

Extended splashscreen does not require the plugin on Windows (as opposed
to Android and iOS) in case you don't use the plugin API, i.e.
programmatic hide/show.

</div>

Preferences
-----------

### config.xml

-   `AutoHideSplashScreen` (boolean, default to `true`). Indicates
    whether to hide splash screen automatically or not. Splash screen
    hidden after amount of time specified in the `SplashScreenDelay`
    preference.

    ``` {.sourceCode .xml}
    <preference name="AutoHideSplashScreen" value="true" />
    ```

-   `SplashScreenDelay` (number, default to 3000). Amount of time in
    milliseconds to wait before automatically hide splash screen.

    ``` {.sourceCode .xml}
    <preference name="SplashScreenDelay" value="3000" />
    ```

<div class="admonition note">

This value used to be seconds, and not milliseconds, so values less than
30 will still be treated as seconds. ( Consider this a deprecated patch
that will disapear in some future version. )

</div>

To disable the splashscreen add the following preference to
`config.xml`:

``` {.sourceCode .xml}
<preference name="SplashScreenDelay" value="0"/>
```

### Windows Quirk

You should disable the splashscreen in case you are updating the entire
document body dynamically (f.e. with a SPA router) to avoid affecting
UI/controls.

<div class="admonition note">

You should also directly reference `WinJS/base.js` in the page HTML in
this case to avoid the issues with activation context
([CB-11658](https://issues.apache.org/jira/browse/CB-11658)).

</div>

### iOS Quirk

-   In iOS, the splashscreen images are called launch images. These
    images are mandatory on iOS.

In order to disable the splashscreen on `ios` platform you should also
add `<preference name="FadeSplashScreenDuration" value="0"/>` to
`config.xml`.

-   `FadeSplashScreen` (boolean, defaults to `true`): Set to `false` to
    prevent the splash screen from fading in and out when its display
    state changes.

    ``` {.sourceCode .xml}
    <preference name="FadeSplashScreen" value="false"/>
    ```

-   `FadeSplashScreenDuration` (float, defaults to `500`): Specifies the
    number of milliseconds for the splash screen fade effect to execute.

    ``` {.sourceCode .xml}
    <preference name="FadeSplashScreenDuration" value="750"/>
    ```

<div class="admonition note">

`FadeSplashScreenDuration` is included into `SplashScreenDelay`, for
example if you have
`<preference name="SplashScreenDelay" value="3000" />` and
`<preference name="FadeSplashScreenDuration" value="1000"/>` defined in
`config.xml`:

-   00:00 - splashscreen is shown
-   00:02 - fading has started
-   00:03 - splashscreen is hidden

</div>

Turning the fading off via
`<preference name="FadeSplashScreen" value="false"/>` technically means
fading duration to be `0` so that in this example the overall splash
delay will still be 3 seconds.

<div class="admonition note">

This only applies to the app startup - you need to take the fading
timeout into account when manually showing/hiding the splashscreen in
the code:

</div>

``` {.sourceCode .javascript}
navigator.splashscreen.show();
window.setTimeout(function () {
    navigator.splashscreen.hide();
}, splashDuration - fadeDuration);
```

-   `ShowSplashScreenSpinner` (boolean, defaults to `true`): Set to
    `false` to hide the splash-screen spinner.

    ``` {.sourceCode .xml}
    <preference name="ShowSplashScreenSpinner" value="false"/>
    ```

### Android Quirks

In your `config.xml`, you can add the following preferences:

``` {.sourceCode .xml}
<preference name="SplashMaintainAspectRatio" value="true|false" />
<preference name="SplashShowOnlyFirstTime" value="true|false" />
```

"SplashMaintainAspectRatio" preference is optional. If set to true,
splash screen drawable is not stretched to fit screen, but instead
simply "covers" the screen, like CSS "background-size:cover". This is
very useful when splash screen images cannot be distorted in any way,
for example when they contain scenery or text. This setting works best
with images that have large margins (safe areas) that can be safely
cropped on screens with different aspect ratios.

The plugin reloads splash drawable whenever orientation changes, so you
can specify different drawables for portrait and landscape orientations.

"SplashShowOnlyFirstTime" preference is also optional and defaults to
`true`. When set to `true` splash screen will only appear on application
launch. However, if you plan to use `navigator.app.exitApp()` to close
application and force splash screen appear on next launch, you should
set this property to `false` (this also applies to closing the App with
Back button).

### Windows Quirks

-   `SplashScreenSpinnerColor` (string, defaults to system accent
    color): hash, rgb notation or CSS color name.

    ``` {.sourceCode .xml}
    <preference name="SplashScreenSpinnerColor" value="#242424"/>
    <preference name="SplashScreenSpinnerColor" value="DarkRed"/>
    <preference name="SplashScreenSpinnerColor" value="rgb(50,128,128)"/>
    ```

-   `SplashScreenBackgroundColor` (string, defaults to \#464646): hex
    notation.

    ``` {.sourceCode .xml}
    <preference name="SplashScreenBackgroundColor" value="0xFFFFFFFF"/>
    ```

Methods
-------

-   splashscreen.show
-   splashscreen.hide

### splashscreen.hide

Dismiss the splash screen.

``` {.sourceCode .javascript}
navigator.splashscreen.hide();
```

### splashscreen.show

Displays the splash screen.

``` {.sourceCode .javascript}
navigator.splashscreen.show();
```

Your application cannot call `navigator.splashscreen.show()` until the
app has started and the `deviceready` event has fired. But since
typically the splash screen is meant to be visible before your app has
started, that would seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `show`
the splash screen immediately after your app launch and before it has
fully started and received the `deviceready` event. For this reason, it
is unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.

### Legacy launch images

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

Technically the filename for the `src` attribute can be anything you
want; the filenames are used because they match what will be used when
your project is compiled. The width and height attributes determine
which launch images are displayed on which devices as follows:

  width           height           device (orientation)
  --------------- ---------------- -------------------------------------------------------
  320             480              All non-retina iPhones and iPods
  640             960              iPhone 4/4s/5/5s (portrait)
  750             1334             iPhone 6/6s/7 (portrait)
  1242            2208             iPhone 6+/6s+/7+ (portrait)
  2208            1242             iPhone 6+/6s+/7+ (landscape)
  768             1024             All non-retina iPads (portrait)
  1024            768              All non-retina iPads (landscape)
  1536            2048             All retina iPads (portrait)
  2048            1536             All retina iPads (landscape)

<div class="admonition note">

It is vitally important that the source image actually matches the size
specified in the `width` and `height` attributes. If it does not, the
device may fail to render it properly, if at all.

</div>

Windows-specific information
----------------------------

Splash screen images can be defined using the
[MRT](https://cordova.apache.org/docs/en/dev/config_ref/images.html#windows)
concept. If you specify `src="res/windows/splashscreen.png"` the
following files will be copied into the application's images folder: :

    ``res/windows/splashscreen.png`` | ``res/windows/splashscreen.scale-100.png``, ``res/windows/splashscreen.scale-125.png``, etc.

The following are supported:

  Scale, %                                Project                                                Width                                Height                                  Filename
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

SplashScreens size for Windows 10 project should not exceed 200 KBytes.

</div>

<div class="admonition note">

Supported formats are `.png`, `.jpg`, `.jpeg`. Mixing of the extensions
within a target is not supported. I.e. you can have `splashscreen.jpg`
and `splashscreenphone.png` but not `splashscreen.scale-100.png`,
`splashscreen.scale-400.jpg`.

</div>

<div class="admonition note">

You may need to reopen Visual Studio solution after changing the images
and doing a `cordova prepare` for the changes to take effect.

</div>

Example Configuration
---------------------

In the top-level `config.xml` file (not the one in `platforms`), add
configuration elements like those specified here.

Please notice that the value of the "src" attribute is relative to the
project root directory and not to the www directory (see
`Directory structure` below). You can name the source image whatever you
like. The internal name in the app is determined by Cordova.

Directory structure:

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

<!-- Configuration using MRT concept (Recommended, see "Windows-specific information" section for details): -->
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
