---
title: Vibration Plugin
---

Tested Version: [2.1.5](https://github.com/apache/cordova-plugin-vibration/releases/tag/2.1.5)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-vibration">}}.
{{</note>}}


This plugin aligns with the [W3C vibration specification](http://www.w3.org/TR/vibration/).

This plugin provides a way to vibrate the device.

This plugin defines global objects including `navigator.vibrate`.

Although in the global scope, they are not available until after the
`deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}
{{</highlight>}}

Plugin ID
---------

{{<syntax>}}
    cordova-plugin-vibration
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`Vibration` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows (Windows Phone 8.1 devices only)

{{<note>}}
<code>navigator.notification.vibrateWithPattern</code> &
<code>navigator.notification.cancelVibration</code> are not working on iOS platform.
{{</note>}}

API Reference
-------------

### vibrate (recommended)

This function has three different functionalities based on parameters
passed to it.

### Standard vibrate

Vibrates the device for a given amount of time.

{{<highlight javascript>}}
    navigator.vibrate(time)
{{</highlight>}}

or

{{<highlight javascript>}}
    navigator.vibrate([time])
{{</highlight>}}

-   **time**: Milliseconds to vibrate the device. *(Number)*

#### Example

{{<highlight javascript>}}
    // Vibrate for 3 seconds
    navigator.vibrate(3000);

    // Vibrate for 3 seconds
    navigator.vibrate([3000]);
{{</highlight>}}

#### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.
    {{<highlight javascript>}}navigator.vibrate(3000); // 3000 is ignored{{</highlight>}}

#### Windows Quirks

-   **time**: Max time is 5000ms (5s) and min time is 1ms

    {{<highlight javascript>}}navigator.vibrate(8000); // will be truncated to 5000{{</highlight>}}

### Vibrate with a pattern (Android and Windows only)

Vibrates the device with a given pattern

{{<highlight javascript>}}
    navigator.vibrate(pattern);
{{</highlight>}}

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*

#### Example

{{<highlight javascript>}}
    // Vibrate for 1 second
    // Wait for 1 second
    // Vibrate for 3 seconds
    // Wait for 1 second
    // Vibrate for 5 seconds
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
{{</highlight>}}

### Cancel vibration (not supported in iOS)

Immediately cancels any currently running vibration.

{{<highlight javascript>}}
    navigator.vibrate(0)
{{</highlight>}}

or

{{<highlight javascript>}}
    navigator.vibrate([])
{{</highlight>}}

or

{{<highlight javascript>}}
    navigator.vibrate([0])
{{</highlight>}}

Passing in a parameter of 0, an empty array, or an array with one
element of value 0 will cancel any vibrations.

### notification.vibrate (deprecated)

Vibrates the device for a given amount of time.

{{<highlight javascript>}}
    navigator.notification.vibrate(time)
{{</highlight>}}

-   **time**: Milliseconds to vibrate the device. *(Number)*

#### Example

{{<highlight javascript>}}
    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);
{{</highlight>}}

#### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

{{<highlight javascript>}}
    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored
{{</highlight>}}

### notification.vibrateWithPattern (deprecated)

Vibrates the device with a given pattern.

{{<highlight javascript>}}
    navigator.notification.vibrateWithPattern(pattern, repeat)
{{</highlight>}}

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*
-   **repeat**: Optional index into the pattern array at which to start
    repeating (will repeat until canceled), or -1 for no repetition
    (default). *(Number)*

#### Example

{{<highlight javascript>}}
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
{{</highlight>}}

### notification.cancelVibration (deprecated)

Immediately cancels any currently running vibration.

{{<highlight javascript>}}
    navigator.notification.cancelVibration()
{{</highlight>}}

{{<note>}}
Due to alignment with w3c spec, the starred methods will be phased out.
{{</note>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
