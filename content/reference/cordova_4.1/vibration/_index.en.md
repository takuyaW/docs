---
title: Vibration Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#039-jun-05-2014">0.3.9</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-vibration">}}.
{{</note>}}

This plugin provides a way to vibrate the device.

Plugin ID
---------

    org.apache.cordova.vibration

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.vibration` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

navigator.notification.vibrate - Amazon Fire OS - Android - BlackBerry
10 - Firefox OS - iOS - Windows Phone 7 and 8

navigator.notification.vibrateWithPattern,navigator.notification.cancelVibration
- Android

notification.vibrate
--------------------

Vibrates the device for a given amount of time.

    navigator.notification.vibrate(time)

-   **time**: Milliseconds to vibrate the device. *(Number)*

### Example

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);

### iOS Quirks

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored

notification.vibrateWithPattern
-------------------------------

Vibrates the device with a given pattern.

    navigator.notification.vibrateWithPattern(pattern, repeat)

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*
-   **repeat**: Optional index into the pattern array at which to start
    repeating (will repeat until canceled), or -1 for no repetition
    (default). *(Number)*

### Example

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

notification.cancelVibration
----------------------------

Immediately cancels any currently running vibration.

    navigator.notification.cancelVibration()
