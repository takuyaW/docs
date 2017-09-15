Battery Status Plugin
=====================

Tested Version:
[1.2.4](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.2.4)

<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-battery-status).

</div>

This plugin provides an implementation of an old version of the [Battery
Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/). It adds the
following three events to the `window` object:

-   batterystatus
-   batterycritical
-   batterylow

Applications may use `window.addEventListener` to attach an event
listener for any of the above events after the `deviceready` event
fires.

Plugin ID
---------

    cordova-plugin-battery-status

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Battery` plugin in Monaca Cloud IDE.

API Reference
-------------

### Status object

All events in this plugin return an object with the following
properties:

-   **level**: The battery charge percentage (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

### batterystatus event

Fires when the battery charge percentage changes by at least 1 percent,
or when the device is plugged in or unplugged. Returns an
[object](#status-object) containing battery status.

#### Example

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(status) {
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 and Windows 10)

#### Quirks: Android

<div class="admonition warning">

The Android implementations are greedy and prolonged use will drain the
device's battery.

</div>

#### Quirks: Windows Phone 8.1

The `isPlugged` parameter is *not* supported on Windows Phone 8.1. The
`level` parameter *is* supported.

### batterylow event

Fires when the battery charge percentage reaches the low charge
threshold. This threshold value is device-specific. Returns an
[object](#status-object) containing battery status.

#### Example

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(status) {
        alert("Battery Level Low " + status.level + "%");
    }

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 and Windows 10)

#### Quirks: Windows Phone 8.1

The `batterylow` event fires on Windows Phone 8.1 irrespective of
whether the device is plugged in or not. This happens because the OS
does not provide an API to detect whether the device is plugged in.

### batterycritical event

Fires when the battery charge percentage reaches the critical charge
threshold. This threshold value is device-specific. Returns an
[object](#status-object) containing battery status.

#### Example

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(status) {
        alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
    }

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 and Windows 10)

#### Quirks: Windows Phone 8.1

The `batterycritical` event fires on Windows Phone 8.1 irrespective of
whether the device is plugged in or not. This happens because the OS
does not provide an API to detect whether the device is plugged in.
