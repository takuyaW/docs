---
title: Network Information Plugin
weight: 170
---

Tested Version:
[1.2.1](https://github.com/apache/cordova-plugin-network-information/releases/tag/1.2.1)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-network-information">}}.
{{</note>}}

This plugin provides an implementation of an old version of the [Network Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/). It
provides information about the device's cellular and wifi connection,
and whether the device has an internet connection.

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-network-information
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}})
`Network Information` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows

API Reference
-------------

The `connection` object, exposed via `navigator.connection`, provides
information about the device's cellular and wifi connection.

### Properties

-   connection.type

### Constants

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

### connection.type

This property offers a fast way to determine the device's network
connection state, and type of connection.

#### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### API Change

Until Cordova 2.3.0, the `Connection` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification. It's still
available at its original location, but is deprecated and will
eventually be removed.

#### iOS Quirks

-   iOS can't detect the type of cellular network connection.
-   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

#### Windows Quirks

-   When running in the Phone 8.1 emulator, always detects
    `navigator.connection.type` as `Connection.ETHERNET`.

Network-related Events
----------------------

### offline

The event fires when an application goes offline, and the device is not
connected to the Internet.

{{<highlight javascript>}}
document.addEventListener("offline", yourCallbackFunction, false);
{{</highlight>}}

#### Details

The `offline` event fires when a previously connected device loses a
network connection so that an application can no longer access the
Internet. It relies on the same information as the Connection API, and
fires when the value of `connection.type` becomes `NONE`.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

#### Quick Example

{{<highlight javascript>}}
document.addEventListener("offline", onOffline, false);

function onOffline() {
    // Handle the offline event
}
{{</highlight>}}

#### iOS Quirks

During initial startup, the first offline event (if applicable) takes at
least a second to fire.

### online

This event fires when an application goes online, and the device becomes
connected to the Internet.

{{<highlight javascript>}}
document.addEventListener("online", yourCallbackFunction, false);
{{</highlight>}}

#### Details

The `online` event fires when a previously unconnected device receives a
network connection to allow an application access to the Internet. It
relies on the same information as the Connection API, and fires when the
`connection.type` changes from `NONE` to any other value.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

#### Quick Example

{{<highlight javascript>}}
document.addEventListener("online", onOnline, false);

function onOnline() {
    // Handle the online event
}
{{</highlight>}}

#### iOS Quirks

During initial startup, the first `online` event (if applicable) takes
at least a second to fire, prior to which `connection.type` is
`UNKNOWN`.
