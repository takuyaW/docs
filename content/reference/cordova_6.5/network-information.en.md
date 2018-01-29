---
title: Network Information Plugin
weight: 160
---

Tested Version: [1.3.3](https://github.com/apache/cordova-plugin-network-information/releases/tag/1.3.3)

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

Reference
---------

### Connection

The `connection` object, exposed via `navigator.connection`, provides
information about the device's cellular and wifi connection.

#### Properties

-   connection.type

#### Constants

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

#### connection.type

This property offers a fast way to determine the device's network
connection state, and type of connection.

##### Quick Example

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

##### API Change

Until Cordova 2.3.0, the `Connection` object was accessed via
`navigator.network.connection`, after which it was changed to
`navigator.connection` to match the W3C specification. It's still
available at its original location, but is deprecated and will
eventually be removed.

##### iOS Quirks

-   iOS7 can't detect the type of cellular network connection.
    -   `navigator.connection.type` is set to `Connection.CELL` for all
        cellular data.

##### Windows Quirks

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

#### Windows Phone 7 Quirks

When running in the Emulator, the `connection.status` is always unknown,
so this event does *not* fire.

#### Windows Phone 8 Quirks

The Emulator reports the connection type as `Cellular`, which does not
change, so the event does *not* fire.

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

Sample: Upload a File Depending on your Network State
-----------------------------------------------------

The code examples in this section show examples of changing app behavior
using the online and offline events and your network connection status.

To start with, create a new FileEntry object (data.txt) to use for
sample data. Call this function from the `deviceready` handler.

{{<note>}}
This code example requires the File plugin.
{{</note>}}

{{<highlight javascript>}}
var dataFileEntry;

function createSomeData() {

    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

        console.log('file system open: ' + fs.name);
        // Creates a new file or returns an existing file.
        fs.root.getFile("data.txt", { create: true, exclusive: false }, function (fileEntry) {

          dataFileEntry = fileEntry;

        }, onErrorCreateFile);

    }, onErrorLoadFs);
}
{{</highlight>}}

Next, add listeners for the online and offline events in the
`deviceready` handler.

{{<highlight javascript>}}
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
{{</highlight>}}

The app's `onOnline` function handles the online event. In the event
handler, check the current network state. In this app, treat any
connection type as good except `Connection.NON`E. If you have a
connection, you try to upload a file.

{{<highlight javascript>}}
function onOnline() {
    // Handle the online event
    var networkState = navigator.connection.type;

    if (networkState !== Connection.NONE) {
        if (dataFileEntry) {
            tryToUploadFile();
        }
    }
    display('Connection type: ' + networkState);
}
{{</highlight>}}

When the online event fires in the preceding code, call the app's
`tryToUploadFile` function. If the FileTransfer object's upload function
fails, call the app's `offlineWrite` function to save the current data
somewhere.

{{<note>}}
This example requires the FileTransfer plugin.
{{</note>}}

{{<highlight javascript>}}
function tryToUploadFile() {
    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    var fileURL = getDataFileEntry().toURL();

    var success = function (r) {
        console.log("Response = " + r.response);
        display("Uploaded. Response: " + r.response);
    }

    var fail = function (error) {
        console.log("An error has occurred: Code = " + error.code);
        offlineWrite("Failed to upload: some offline data");
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var ft = new FileTransfer();
    // Make sure you add the domain of your server URL to the
    // Content-Security-Policy <meta> element in index.html.
    ft.upload(fileURL, encodeURI(SERVER), success, fail, options);
};
{{</highlight>}}

Here is the code for the `offlineWrite` function.

{{<note>}}
This code examples requires the File plugin.
{{</note>}}

{{<highlight javascript>}}
function offlineWrite(offlineData) {
    // Create a FileWriter object for our FileEntry.
    dataFileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            display(offlineData);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        fileWriter.write(offlineData);
    });
}
{{</highlight>}}

If the offline event occurs, just do something like notify the user (for
this example, just log it).

{{<highlight javascript>}}
function onOffline() {
    // Handle the offline event
    console.log("lost connection");
}
{{</highlight>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
