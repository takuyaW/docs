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
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-battery-status/blob/master/RELEASENOTES.md#0212-dec-02-2014">0.2.12</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
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

    org.apache.cordova.battery-status

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please enable
`org.apache.cordova.battery-status` plugin in Monaca Cloud IDE. Please
refer to standard\_plugins docs for how to enable the plugin in Monaca.

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
event listener after the `deviceready` event fires.

### Supported Platforms

-   Amazon Fire OS
-   iOS
-   Android

### Example

    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

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

-   Amazon Fire OS
-   iOS
-   Android

### Example

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }

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

-   Amazon Fire OS
-   iOS
-   Android

### Example

    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
