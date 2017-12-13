---
title: Device Motion Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-device-motion/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-device-motion">}}.
{{</note>}}

This plugin provides access to the device's accelerometer. The
accelerometer is a motion sensor that detects the change (*delta*) in
movement relative to the current device orientation, in three dimensions
along the *x*, *y*, and *z* axis.

Plugin ID
---------

    org.apache.cordova.device-motion

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`Device Motion` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Methods
-------

-   navigator.accelerometer.getCurrentAcceleration
-   navigator.accelerometer.watchAcceleration
-   navigator.accelerometer.clearWatch

Objects
-------

-   Acceleration

navigator.accelerometer.getCurrentAcceleration
----------------------------------------------

Get the current acceleration along the *x*, *y*, and *z* axes.

These acceleration values are returned to the `accelerometerSuccess`
callback function.

``` {.sourceCode .javascript}
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
```

### Example

``` {.sourceCode .javascript}
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
```

### iOS Quirks

-   iOS doesn't recognize the concept of getting the current
    acceleration at any given point.
-   You must watch the acceleration and capture the data at given time
    intervals.
-   Thus, the `getCurrentAcceleration` function yields the last value
    reported from a `watchAccelerometer` call.

navigator.accelerometer.watchAcceleration
-----------------------------------------

Retrieves the device's current `Acceleration` at a regular interval,
executing the `accelerometerSuccess` callback function each time.
Specify the interval in milliseconds via the `acceleratorOptions`
object's `frequency` parameter.

The returned watch ID references the accelerometer's watch interval, and
can be used with `navigator.accelerometer.clearWatch` to stop watching
the accelerometer.

``` {.sourceCode .javascript}
var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                       accelerometerError,
                                                       [accelerometerOptions]);
```

-   **accelerometerOptions**: An object with the following optional
    keys:
-   **frequency**: How often to retrieve the `Acceleration` in
    milliseconds. *(Number)* (Default: 10000)

### Example

``` {.sourceCode .javascript}
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
```

### iOS Quirks

The API calls the success callback function at the interval requested,
but restricts the range of requests to the device between 40ms and
1000ms. For example, if you request an interval of 3 seconds, (3000ms),
the API requests data from the device every 1 second, but only executes
the success callback every 3 seconds.

navigator.accelerometer.clearWatch
----------------------------------

Stop watching the `Acceleration` referenced by the `watchID` parameter.

``` {.sourceCode .javascript}
navigator.accelerometer.clearWatch(watchID);
```

-   **watchID**: The ID returned by
    `navigator.accelerometer.watchAcceleration`.

### Example

``` {.sourceCode .javascript}
var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

// ... later on ...

navigator.accelerometer.clearWatch(watchID);
```

Acceleration
------------

Contains `Accelerometer` data captured at a specific point in time.
Acceleration values include the effect of gravity (9.81 m/s\^2), so that
when a device lies flat and facing up, *x*, *y*, and *z* values returned
should be `0`, `0`, and `9.81`.

### Properties

-   **x**: Amount of acceleration on the x-axis. (in m/s\^2) *(Number)*
-   **y**: Amount of acceleration on the y-axis. (in m/s\^2) *(Number)*
-   **z**: Amount of acceleration on the z-axis. (in m/s\^2) *(Number)*
-   **timestamp**: Creation timestamp in milliseconds. *(DOMTimeStamp)*

