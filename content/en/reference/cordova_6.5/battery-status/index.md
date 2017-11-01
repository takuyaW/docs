---
title: Battery Status Plugin
---

# Battery Status Plugin

Tested Version: [1.2.4](https://github.com/apache/cordova-plugin-battery-status/releases/tag/1.2.4)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-battery-status">}}.
{{</note>}}

This plugin provides an implementation of an old version of the [Battery Status Events API](http://www.w3.org/TR/2011/WD-battery-status-20110915/). It adds the
following three events to the `window` object:

-   batterystatus
-   batterycritical
-   batterylow

Applications may use `window.addEventListener` to attach an event
listener for any of the above events after the `deviceready` event
fires.

Plugin ID
---------

{{<syntax>}}
cordova-plugin-battery-status
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins) `Battery` plugin in Monaca Cloud IDE.

API Reference
-------------

### Status object

All events in this plugin return an object with the following
properties:

Property | Type | Description
-----|------|-------------
`level` | Number | The battery charge percentage (`0-100`)
`isPlugged` | Boolean | Indicates whether the device is plugged in

### batterystatus event

Fires when the battery charge percentage changes by at least `1 percent`,
or when the device is plugged in or unplugged. Returns an
[object](#status-object) containing battery status.

#### Example

{{<highlight javascript>}}
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 and Windows 10)

#### Quirks: Android

{{<warning>}}
The Android implementations are greedy and prolonged use will drain the
device's battery.
{{</warning>}}

#### Quirks: Windows Phone 8.1

The `isPlugged` parameter is *not* supported on Windows Phone 8.1. The
`level` parameter *is* supported.

### batterylow event

Fires when the battery charge percentage reaches the low charge
threshold. This threshold value is device-specific. Returns an
[object](#status-object) containing battery status.

#### Example

{{<highlight javascript>}}
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}
{{</highlight>}}

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

{{<highlight javascript>}}
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
{{</highlight>}}

#### Supported Platforms

-   iOS
-   Android
-   Windows (Windows Phone 8.1 and Windows 10)

#### Quirks: Windows Phone 8.1

The `batterycritical` event fires on Windows Phone 8.1 irrespective of
whether the device is plugged in or not. This happens because the OS
does not provide an API to detect whether the device is plugged in.

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)