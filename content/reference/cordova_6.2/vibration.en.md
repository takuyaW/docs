---
title: Vibration Plugin
weight: 190
---

Tested Version:
[2.1.1](https://github.com/apache/cordova-plugin-vibration/releases/tag/2.1.1)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-vibration">}}.
{{</note>}}

This plugin aligns with the [W3C vibration
specification](http://www.w3.org/TR/vibration/).

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

{{<highlight javascript>}}
cordova-plugin-vibration
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}})
`Vibration` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

`navigator.vibrate, navigator.notification.vibrate`:

-   Android
-   iOS
-   Windows (Windows Phone 8.1 devices only)

`navigator.notification.vibrateWithPattern`,
`navigator.notification.cancelVibration`:

-   Android
-   Windows (Windows Phone 8.1 devices only)

API Reference
-------------

### vibrate (recommended)

This function has three different functionalities based on parameters
passed to it.

#### Standard vibrate

Vibrates the device for a given amount of time.

{{<highlight javascript>}}
navigator.vibrate(time)
{{</highlight>}}

or

{{<highlight javascript>}}
navigator.vibrate([time])
{{</highlight>}}

-   **time**: Milliseconds to vibrate the device. *(Number)*

{{<highlight javascript>}}
// Vibrate for 3 seconds
navigator.vibrate(3000);

// Vibrate for 3 seconds
navigator.vibrate([3000]);
{{</highlight>}}

##### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

    {{<highlight javascript>}}navigator.vibrate(3000); // 3000 is ignored{{</highlight>}}

##### Windows Quirks

-   **time**: Max time is 5000ms (5s) and min time is 1ms

>     navigator.vibrate(8000); // will be truncated to 5000

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

>     navigator.notification.vibrate();
>     navigator.notification.vibrate(2500);   // 2500 is ignored

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

<div class="admonition note">

Due to alignment with w3c spec, the starred methods will be phased out.

</div>
