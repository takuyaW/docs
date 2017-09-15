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
Network Information Plugin
==========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-network-information/blob/master/RELEASENOTES.md#0214-dec-02-2014">0.2.14</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova
Docs](https://github.com/apache/cordova-plugin-network-information).

</div>

This plugin provides an implementation of an old version of the [Network
Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/). It
provides information about the device's cellular and wifi connection,
and whether the device has an internet connection.

Plugin ID
---------

    org.apache.cordova.network-information

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please enable
`org.apache.cordova.network-information` plugin in Monaca Cloud IDE.
Please refer to standard\_plugins docs for how to enable the plugin in
Monaca.

Supported Platforms
-------------------

-   Amazon Fire OS
-   Android
-   iOS

Connection
==========

> The `connection` object, exposed via `navigator.connection`, provides
> information about the device's cellular and wifi connection.

Properties
----------

-   connection.type

Constants
---------

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

connection.type
---------------

This property offers a fast way to determine the device's network
connection state, and type of connection.

### Quick Example

    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    checkConnection();

### API Change

Until Cordova 2.3.0, the `Connection` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification. It's still
available at its original location, but is deprecated and will
eventually be removed.

### iOS Quirks

-   iOS can't detect the type of cellular network connection.
    -   `navigator.connection.type` is set to `Connection.CELL` for all
        cellular data.

Network-related Events
======================

offline
-------

The event fires when an application goes offline, and the device is not
connected to the Internet.

    document.addEventListener("offline", yourCallbackFunction, false);

### Details

The `offline` event fires when a previously connected device loses a
network connection so that an application can no longer access the
Internet. It relies on the same information as the Connection API, and
fires when the value of `connection.type` becomes `NONE`.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

### Quick Example

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

### iOS Quirks

During initial startup, the first offline event (if applicable) takes at
least a second to fire.

online
------

This event fires when an application goes online, and the device becomes
connected to the Internet.

    document.addEventListener("online", yourCallbackFunction, false);

### Details

The `online` event fires when a previously unconnected device receives a
network connection to allow an application access to the Internet. It
relies on the same information as the Connection API, and fires when the
`connection.type` changes from `NONE` to any other value.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

### Quick Example

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

### iOS Quirks

During initial startup, the first `online` event (if applicable) takes
at least a second to fire, prior to which `connection.type` is
`UNKNOWN`.
