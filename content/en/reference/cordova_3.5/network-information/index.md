---
title: Network Information Plugin
---

# Network Information Plugin

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-network-information/blob/master/RELEASENOTES.md#0210-jun-24-2014">0.2.10</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-network-information">}}.
{{</note>}}

This plugin provides an implementation of an old version of the [Network
Information API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/). It
provides information about the device's cellular and wifi connection,
and whether the device has an internet connection.

Plugin ID
---------

    org.apache.cordova.network-information

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.network-information` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Connection
----------

> The `connection` object, exposed via `navigator.connection`, provides
> information about the device's cellular and wifi connection.

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

**Quick Example**

``` {.sourceCode .javascript}
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
```

**API Change**

Until Cordova 2.3.0, the `Connection` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification. It's still
available at its original location, but is deprecated and will
eventually be removed.

**iOS Quirks**

-   iOS can't detect the type of cellular network connection.
    -   `navigator.connection.type` is set to `Connection.CELL` for all
        cellular data.

Network-related Events
----------------------

### offline

The event fires when an application goes offline, and the device is not
connected to the Internet.

``` {.sourceCode .javascript}
document.addEventListener("offline", yourCallbackFunction, false);
```

**Details**

The `offline` event fires when a previously connected device loses a
network connection so that an application can no longer access the
Internet. It relies on the same information as the Connection API, and
fires when the `connection.type` changes from `NONE` to any other value.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

**Quick Example**

``` {.sourceCode .javascript}
document.addEventListener("offline", onOffline, false);

function onOffline() {
    // Handle the offline event
}
```

**iOS Quirks**

During initial startup, the first offline event (if applicable) takes at
least a second to fire.

### online

This event fires when an application goes online, and the device becomes
connected to the Internet.

``` {.sourceCode .javascript}
document.addEventListener("online", yourCallbackFunction, false);
```

**Details**

The `online` event fires when a previously unconnected device receives a
network connection to allow an application access to the Internet. It
relies on the same information as the Connection API, and fires when the
value of `connection.type` becomes `NONE`.

Applications typically should use `document.addEventListener` to attach
an event listener once the `deviceready` event fires.

**Quick Example**

``` {.sourceCode .javascript}
document.addEventListener("online", onOnline, false);

function onOnline() {
    // Handle the online event
}
```

**iOS Quirks**

During initial startup, the first `online` event (if applicable) takes
at least a second to fire, prior to which `connection.type` is
`UNKNOWN`.
