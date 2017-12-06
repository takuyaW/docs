---
title: Battery Status Plugin
---

# Battery Status Plugin

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/RELEASENOTES.md#028-apr-17-2014">0.2.8</a></div>
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-battery-status">}}.
{{</note>}}

This plugin provides an implementation of an old version of the [Battery
Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/).

It adds the following three `window` events:

-   batterystatus
-   batterycritical
-   batterylow

Plugin ID
---------

    org.apache.cordova.battery-status

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`Battery` plugin in Monaca Cloud IDE.

batterystatus
-------------

This event fires when the percentage of battery charge changes by at
least 1 percent, or if the device is plugged in or unplugged.

The battery status handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener once the `deviceready` event fires. e.g.:

### Supported Platforms

-   iOS
-   Android

### Example

``` {.sourceCode .javascript}
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(info) {
    // Handle the online event
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
```

batterycritical
---------------

The event fires when the percentage of battery charge has reached the
critical battery threshold. The value is device-specific.

The `batterycritical` handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener once the `deviceready` event fires.

### Supported Platforms

-   iOS
-   Android

### Example

``` {.sourceCode .javascript}
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(info) {
    // Handle the battery critical event
    alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
}
```

batterylow
----------

The event fires when the percentage of battery charge has reached the
low battery threshold, device-specific value.

The `batterylow` handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener once the `deviceready` event fires.

### Supported Platforms

-   iOS
-   Android

### Example

``` {.sourceCode .javascript}
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(info) {
    // Handle the battery low event
    alert("Battery Level Low " + info.level + "%");
}
```
