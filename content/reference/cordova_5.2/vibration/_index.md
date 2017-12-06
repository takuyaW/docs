---
title: Vibration Plugin
---

# Vibration Plugin

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#120-jun-17-2015">1.2.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-vibration">}}.
{{</note>}}

This plugin aligns with the W3C vibration specification
<http://www.w3.org/TR/vibration/>

This plugin provides a way to vibrate the device.

This plugin defines global objects including `navigator.vibrate`.

Although in the global scope, they are not available until after the
`deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.vibrate);
    }

Plugin ID
---------

    cordova-plugin-vibration

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`Vibration` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

navigator.vibrate, navigator.notification.vibrate:

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Firefox OS
-   iOS
-   Windows Phone 7 and 8
-   Windows (Windows Phone 8.1 devices only)

navigator.notification.vibrateWithPattern,
navigator.notification.cancelVibration:

-   Android
-   Windows Phone 8
-   Windows (Windows Phone 8.1 devices only)

API Reference
-------------

### vibrate (recommended)

This function has three different functionalities based on parameters
passed to it.

#### Standard vibrate

Vibrates the device for a given amount of time.

    navigator.vibrate(time)

or

    navigator.vibrate([time])

-   **time**: Milliseconds to vibrate the device. *(Number)*

<!-- -->

    // Vibrate for 3 seconds
    navigator.vibrate(3000);

    // Vibrate for 3 seconds
    navigator.vibrate([3000]);

##### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

<!-- -->

    navigator.vibrate(3000); // 3000 is ignored

##### Windows and Blackberry Quirks

-   **time**: Max time is 5000ms (5s) and min time is 1ms

<!-- -->

    navigator.vibrate(8000); // will be truncated to 5000

#### Vibrate with a pattern (Android and Windows only)

Vibrates the device with a given pattern

    navigator.vibrate(pattern);   

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*

##### Example

    // Vibrate for 1 second
    // Wait for 1 second
    // Vibrate for 3 seconds
    // Wait for 1 second
    // Vibrate for 5 seconds
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);

##### Windows Phone 8 Quirks

-   vibrate(pattern) falls back on vibrate with default duration

##### Windows Quirks

-   vibrate(pattern) falls back on vibrate with default duration

#### Cancel vibration (not supported in iOS)

Immediately cancels any currently running vibration.

    navigator.vibrate(0)

or

    navigator.vibrate([])

or

    navigator.vibrate([0])

Passing in a parameter of 0, an empty array, or an array with one
element of value 0 will cancel any vibrations.

### \*notification.vibrate (deprecated)

Vibrates the device for a given amount of time.

    navigator.notification.vibrate(time)

-   **time**: Milliseconds to vibrate the device. *(Number)*

#### Example

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);

#### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

<!-- -->

    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored

### \*notification.vibrateWithPattern (deprecated)

Vibrates the device with a given pattern.

    navigator.notification.vibrateWithPattern(pattern, repeat)

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*
-   **repeat**: Optional index into the pattern array at which to start
    repeating (will repeat until canceled), or -1 for no repetition
    (default). *(Number)*

#### Example

    // Immediately start vibrating
    // vibrate for 100ms,
    // wait for 100ms,
    // vibrate for 200ms,
    // wait for 100ms,
    // vibrate for 400ms,
    // wait for 100ms,
    // vibrate for 800ms,
    // (do not repeat)
    navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);

### \*notification.cancelVibration (deprecated)

Immediately cancels any currently running vibration.

    navigator.notification.cancelVibration()

\*Note - due to alignment with w3c spec, the starred methods will be
phased out
