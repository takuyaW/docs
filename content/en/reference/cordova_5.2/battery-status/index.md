<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
Battery Status Plugin
=====================

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/RELEASENOTES.md#110-jun-17-2015">1.1.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>
<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-battery-status).

</div>

This plugin provides an implementation of an old version of the [Battery
Status Events
API](http://www.w3.org/TR/2011/WD-battery-status-20110915/).

It adds the following three `window` events:

-   batterystatus
-   batterycritical
-   batterylow

Plugin ID
---------

    cordova-plugin-battery-status

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Battery` plugin in Monaca Cloud IDE.

API Reference
-------------

### batterystatus

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

-   Amazon Fire OS
-   iOS
-   Android
-   BlackBerry 10
-   Windows Phone 7 and 8
-   Windows (Windows Phone 8.1 only)
-   Tizen
-   Firefox OS
-   Browser

#### Android and Amazon Fire OS Quirks

-   Warning: the Android + Fire OS implementations are greedy and
    prolonged use will drain the user's battery.

#### Windows Phone 7 and 8 Quirks

Windows Phone 7 does not provide native APIs to determine battery level,
so the `level` property is unavailable. The `isPlugged` parameter *is*
supported.

#### Windows Quirks

Windows Phone 8.1 does not support `isPlugged` parameter. The `level`
parameter *is* supported.

#### Browser Quirks

Supported browsers are Chrome, Firefox and Opera.

#### Example

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

#### batterycritical

The event fires when the percentage of battery charge has reached the
critical battery threshold. The value is device-specific.

The `batterycritical` handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener once the `deviceready` event fires.

#### Supported Platforms

-   Amazon Fire OS
-   iOS
-   Android
-   BlackBerry 10
-   Tizen
-   Firefox OS
-   Windows (Windows Phone 8.1 only)
-   Browser

#### Windows Quirks

Windows Phone 8.1 will fire `batterycritical` event regardless of
plugged state as it is not supported.

#### Example

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }

#### Browser Quirks

Supported browsers are Chrome, Firefox and Opera.

### batterylow

The event fires when the percentage of battery charge has reached the
low battery threshold, device-specific value.

The `batterylow` handler is passed an object that contains two
properties:

-   **level**: The percentage of battery charge (0-100). *(Number)*
-   **isPlugged**: A boolean that indicates whether the device is
    plugged in. *(Boolean)*

Applications typically should use `window.addEventListener` to attach an
event listener once the `deviceready` event fires.

#### Supported Platforms

-   Amazon Fire OS
-   iOS
-   Android
-   BlackBerry 10
-   Tizen
-   Firefox OS
-   Windows (Windows Phone 8.1 only)
-   Browser

#### Windows Quirks

Windows Phone 8.1 will fire `batterylow` event regardless of plugged
state as it is not supported.

#### Example

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }

#### Browser Quirks

Supported browsers are Chrome, Firefox and Opera.
