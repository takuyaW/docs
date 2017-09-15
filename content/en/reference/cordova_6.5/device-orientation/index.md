Device Orientation Plugin
=========================

Tested Version:
[1.0.7](https://github.com/apache/cordova-plugin-device-orientation/releases/tag/1.0.7)

<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs ( GitHub
)](https://github.com/apache/cordova-plugin-device-orientation)

</div>

This plugin provides access to the device's compass. The compass is a
sensor that detects the direction or heading that the device is pointed,
typically from the top of the device. It measures the heading in degrees
from 0 to 359.99, where 0 is north.

Access is via a global `navigator.compass` object. Although the object
is attached to the global scoped `navigator`, it is not available until
after the `deviceready` event.

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.compass);
}
```

Plugin ID
---------

``` {.sourceCode .javascript}
cordova-plugin-device-orientation
```

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Device Orientation` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Methods
-------

-   navigator.compass.getCurrentHeading
-   navigator.compass.watchHeading
-   navigator.compass.clearWatch

### navigator.compass.getCurrentHeading

Get the current compass heading. The compass heading is returned via a
`CompassHeading` object using the `compassSuccess` callback function.

``` {.sourceCode .javascript}
navigator.compass.getCurrentHeading(compassSuccess, compassError);
```

#### Example

``` {.sourceCode .javascript}
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
};

function onError(error) {
    alert('CompassError: ' + error.code);
};

navigator.compass.getCurrentHeading(onSuccess, onError);
```

### navigator.compass.watchHeading

Gets the device's current heading at a regular interval. Each time the
heading is retrieved, the `headingSuccess` callback function is
executed.

The returned watch ID references the compass watch interval. The watch
ID can be used with `navigator.compass.clearWatch` to stop watching the
navigator.compass.

``` {.sourceCode .javascript}
var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
```

`compassOptions` may contain the following keys:

-   **frequency**: How often to retrieve the compass heading in
    milliseconds. *(Number)* (Default: 100)
-   **filter**: The change in degrees required to initiate a
    watchHeading success callback. When this value is set, **frequency**
    is ignored. *(Number)*

#### Example

``` {.sourceCode .javascript}
function onSuccess(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 3000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
```

#### iOS Quirks

Only one `watchHeading` can be in effect at one time in iOS. If a
`watchHeading` uses a filter, calling `getCurrentHeading` or
`watchHeading` uses the existing filter value to specify heading
changes. Watching heading changes with a filter is more efficient than
with time intervals.

#### Android Quirks

-   No support for `filter`.

### navigator.compass.clearWatch

Stop watching the compass referenced by the watch ID parameter.

``` {.sourceCode .javascript}
navigator.compass.clearWatch(watchID);
```

-   **watchID**: The ID returned by `navigator.compass.watchHeading`.

#### Example

``` {.sourceCode .javascript}
var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

// ... later on ...

navigator.compass.clearWatch(watchID);
```

### CompassHeading

A `CompassHeading` object is returned to the `compassSuccess` callback
function.

#### Properties

-   **magneticHeading**: The heading in degrees from 0-359.99 at a
    single moment in time. *(Number)*
-   **trueHeading**: The heading relative to the geographic North Pole
    in degrees 0-359.99 at a single moment in time. A negative value
    indicates that the true heading can't be determined. *(Number)*
-   **headingAccuracy**: The deviation in degrees between the reported
    heading and the true heading. *(Number)*
-   **timestamp**: The time at which this heading was determined.
    *(DOMTimeStamp)*

#### Android Quirks

-   The `trueHeading` property is not supported, but reports the same
    value as `magneticHeading`.
-   The `headingAccuracy` property is always 0 because there is no
    difference between the `magneticHeading` and `trueHeading`.

#### iOS Quirks

-   The `trueHeading` property is only returned for location services
    enabled via `navigator.geolocation.watchLocation()`.

### CompassError

A `CompassError` object is returned to the `compassError` callback
function when an error occurs.

#### Properties

-   **code**: One of the predefined error codes listed below.

#### Constants

-   `CompassError.COMPASS_INTERNAL_ERR`
-   `CompassError.COMPASS_NOT_SUPPORTED`
