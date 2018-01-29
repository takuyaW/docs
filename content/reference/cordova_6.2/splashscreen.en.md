---
title: Splashscreen Plugin
weight: 180
---

Tested Version:
[3.2.2](https://github.com/apache/cordova-plugin-splashscreen/releases/tag/3.2.2)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-splashscreen">}}.
{{</note>}}

This plugin displays and hides a splash screen during application
launch.

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-splashscreen
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}})
`Splashscreen` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows (cordova-windows version &gt;= 4.4.0 is required)

API Reference
-------------

### Preferences

#### config.xml

-   `AutoHideSplashScreen` (boolean, default to true). Indicates whether
    to hide splash screen automatically or not. Splash screen hidden
    after amount of time specified in the `SplashScreenDelay`
    preference.

    {{<highlight javascript>}}<preference name="AutoHideSplashScreen" value="true" />{{</highlight>}}

-   `SplashScreenDelay` (number, default to 3000). Amount of time in
    milliseconds to wait before automatically hide splash screen.

    {{<highlight javascript>}}<preference name="SplashScreenDelay" value="3000" />{{</highlight>}}

{{<note>}}
also that this value used to be seconds, and not milliseconds, so values
less than 30 will still be treated as seconds. ( Consider this a
deprecated patch that will disapear in some future version. )
{{</note>}}

#### iOS Quirks

to disable the splashscreen on `ios` platform you should also add
`<preference name="FadeSplashScreenDuration" value="0"/>` to `config.xml`.

-   `FadeSplashScreen` (boolean, defaults to `true`): Set to `false` to
    prevent the splash screen from fading in and out when its display
    state changes.

    {{<highlight javascript>}}<preference name="FadeSplashScreen" value="false"/>{{</highlight>}}

-   `FadeSplashScreenDuration` (float, defaults to `3000`): Specifies
    the number of milliseconds for the splash screen fade effect to
    execute.

    {{<highlight javascript>}}<preference name="FadeSplashScreenDuration" value="3000"/>{{</highlight>}}

`FadeSplashScreenDuration` is included into `SplashScreenDelay`, for
example if you have the following configuration defined in in the `config.xml` file:

{{<highlight xml>}}
<preference name="SplashScreenDelay" value="3000" />
<preference name="FadeSplashScreenDuration" value="1000"/>
{{</highlight>}}

Then, the following action will happen:

-   00:00 - splashscreen is shown
-   00:02 - fading has started
-   00:03 - splashscreen is hidden

Turning the fading off via
`<preference name="FadeSplashScreen" value="false"/>` technically means
fading duration to be `0` so that in this example the overall splash
delay will still be 3 seconds.

{{<note>}}
This only applies to the app startup - you need to take the fading
timeout into account when manually showing/hiding the splashscreen in
the code:
{{</note>}}

{{<highlight javascript>}}
navigator.splashscreen.show();
window.setTimeout(function () {
    navigator.splashscreen.hide();
}, splashDuration - fadeDuration);
{{</highlight>}}

-   `ShowSplashScreenSpinner` (boolean, defaults to `true`): Set to
    false to hide the splash-screen spinner.

    {{<highlight javascript>}}<preference name="ShowSplashScreenSpinner" value="false"/>{{</highlight>}}

#### Android Quirks

In your `config.xml`, you need to add the following preferences:

{{<highlight javascript>}}
<preference name="SplashScreen" value="foo" />
<preference name="SplashScreenDelay" value="3000" />
<preference name="SplashMaintainAspectRatio" value="true|false" />
{{</highlight>}}

Where foo is the name of the splashscreen file, preferably a 9 patch
file. Make sure to add your splashcreen files to your res/xml directory
under the appropriate folders. The second parameter represents how long
the splashscreen will appear in milliseconds. It defaults to 3000 ms.
See [Icons and Splash Screens](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
for more information.

`SplashMaintainAspectRatio` preference is optional. If set to true,
splash screen drawable is not stretched to fit screen, but instead
simply "covers" the screen, like CSS `background-size:cover`. This is
very useful when splash screen images cannot be distorted in any way,
for example when they contain scenery or text. This setting works best
with images that have large margins (safe areas) that can be safely
cropped on screens with different aspect ratios.

The plugin reloads splash drawable whenever orientation changes, so you
can specify different drawables for portrait and landscape orientations.

#### iOS Quirks

In iOS, the splashscreen images are called launch images. These images
are mandatory on iOS.

#### Windows Quirks

-   `SplashScreenSpinnerColor` (string, defaults to system accent
    color): hash, rgb notation or CSS color name.

    {{<highlight javascript>}}
<preference name="SplashScreenSpinnerColor" value="#242424"/>
<preference name="SplashScreenSpinnerColor" value="DarkRed"/>
<preference name="SplashScreenSpinnerColor" value="rgb(50,128,128)"/>
{{</highlight>}}

-   SplashScreenBackgroundColor (string, defaults to \#464646): hex
    notation.

    {{<highlight javascript>}}
<preference name="SplashScreenBackgroundColor" value="0xFFFFFFFF"/>
{{</highlight>}}

### Methods

-   splashscreen.show
-   splashscreen.hide

### splashscreen.hide

Dismiss the splash screen.

{{<highlight javascript>}}
navigator.splashscreen.hide();
{{</highlight>}}

### splashscreen.show

Displays the splash screen.

{{<highlight javascript>}}
navigator.splashscreen.show();
{{</highlight>}}

Your application cannot call `navigator.splashscreen.show()` until the
app has started and the `deviceready` event has fired. But since
typically the splash screen is meant to be visible before your app has
started, that would seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `show`
the splash screen immediately after your app launch and before it has
fully started and received the deviceready event. For this reason, it is
unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.
