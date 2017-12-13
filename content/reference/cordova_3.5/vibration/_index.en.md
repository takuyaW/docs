---
title: Vibration Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#039-jun-05-2014">0.3.9</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
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

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.vibration` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

notification.vibrate
--------------------

Vibrates the device for the specified amount of time.

``` {.sourceCode .javascript}
navigator.notification.vibrate(time)
```

-   **time**: Milliseconds to vibrate the device. *(Number)*

Example
-------

``` {.sourceCode .javascript}
// Vibrate for 2.5 seconds
navigator.notification.vibrate(2500);
```

iOS Quirks
----------

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

    ``` {.sourceCode .javascript}
    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored
    ```


