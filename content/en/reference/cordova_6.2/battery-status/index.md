---
title: Battery Status Plugin
---

# Battery Status Plugin

Tested Version:
[1.1.2](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.1.2)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-battery-status">}}.
{{</note>}}


This plugin provides an implementation of an old version of the [Battery
Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/). It adds the
following three `window` events:

-   batterystatus
-   batterycritical
-   batterylow

Plugin ID
---------

    cordova-plugin-battery-status

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`Battery` plugin in Monaca Cloud IDE.

API Reference
-------------

### batterystatus Event

This event fires when the percentage of battery charge changes by at
least 1 percent, or if the device is plugged in or unplugged.

The battery status handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener after the `deviceready` event fires.

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 only)

#### Android Quirks

<div class="admonition warning">

The Android implementations is greedy and prolonged use will drain the
device's battery.

</div>

#### Windows Quirks

Windows Phone 8.1 does not support `isPlugged` parameter. The `level`
parameter is supported.

### batterylow Event

Fires when the battery charge percentage reaches the low charge
threshold. This threshold value is device-specific. Returns an
[object](#status-object) containing battery status.

#### Example

    window.addEventListener("batterylow", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }

#### Windows Phone 8.1 Quirks

The `batterylow` event fires on Winodws Phone 8.1 irrespective of
whether the device is plugged in or not. This happens because the OS
does not provide an API to detect whether the device is plugged in.

### batterycritical Event

Fires when the battery charge percentage reaches the critical charge
threshold. This threshold value is device-specific. Returns an
[object](#status-object) containing battery status.

#### Example

    window.addEventListener("batterycritical", onBatteryStatus, false);

    function onBatteryStatus(status) {
        // Handle the online event
        console.log("Battery Level: " + status.level + "%\nRecharge Soon!");
    }

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 only)

#### Windows Phone 8.1 Quirks

The `batterycritical` event fires on Windows Phone 8.1 irrespective of
whether the device is plugged in or not. This happens because the OS
does not provide an API to detect whether the device is plugged in.

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)