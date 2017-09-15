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
File Transfer Plugin
====================

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/RELEASENOTES.md#130-sep-18-2015">1.3.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>
<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-file-transfer).

</div>

This plugin allows you to upload and download files.

This plugin defines global `FileTransfer`, `FileUploadOptions`
Constructors.

Although in the global scope, they are not available until after the
`deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(FileTransfer);
    }

Plugin ID
---------

    cordova-plugin-file-transfer

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Transfer` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Browser
-   Firefox OS\*\*
-   iOS
-   Windows Phone 7 and 8\*
-   Windows 8
-   Windows

\*Do not support `onprogress` nor `abort()`

\*\*Do not support `onprogress`

API Reference
-------------

The `FileTransfer` object provides a way to upload files using an HTTP
multi-part POST or PUT request, and to download files as well.

### Properties

-   **onprogress**: Called with a `ProgressEvent` whenever a new chunk
    of data is transferred. *(Function)*

### Methods

-   **upload**: sends a file to a server.
-   **download**: downloads a file from server.
-   **abort**: Aborts an in-progress transfer.

### upload

**Parameters**:

-   **fileURL**: Filesystem URL representing the file on the device. For
    backwards compatibility, this can also be the full path of the file
    on the device. (See [Backwards Compatibility
    Notes](#backwards-compatibility-notes) below)
-   **server**: URL of the server to receive the file, as encoded by
    `encodeURI()`.
-   **successCallback**: A callback that is passed a `FileUploadResult`
    object. *(Function)*
-   **errorCallback**: A callback that executes if an error occurs
    retrieving the `FileUploadResult`. Invoked with a
    `FileTransferError` object. *(Function)*
-   **options**: Optional parameters *(Object)*.

Valid keys:

-   **fileKey**: The name of the form element. Defaults to `file`.
    (DOMString)
-   **fileName**: The file name to use when saving the file on the
    server. Defaults to `image.jpg`. (DOMString)
-   **httpMethod**: The HTTP method to use - either `PUT` or `POST`.
    Defaults to `POST`. (DOMString)
-   **mimeType**: The mime type of the data to upload. Defaults to
    `image/jpeg`. (DOMString)
-   **params**: A set of optional key/value pairs to pass in the HTTP
    request. (Object)
-   **chunkedMode**: Whether to upload the data in chunked streaming
    mode. Defaults to `true`. (Boolean)
-   **headers**: A map of header name/header values. Use an array to
    specify more than one value. On iOS, FireOS, and Android, if a
    header named Content-Type is present, multipart form data will NOT
    be used. (Object)
-   **trustAllHosts**: Optional parameter, defaults to `false`. If set
    to `true`, it accepts all security certificates. This is useful
    since Android rejects self-signed security certificates. Not
    recommended for production use. Supported on Android and iOS.
    *(boolean)*

#### Example

    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    //    for example, cdvfile://localhost/persistent/path/to/file.txt

    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://some.server.com/upload.php"), win, fail, options);

#### Example with Upload Headers and Progress Events (Android and iOS only)

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var uri = encodeURI("http://some.server.com/upload.php");

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURL.substr(fileURL.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var headers={'headerParam':'headerValue'};

    options.headers = headers;

    var ft = new FileTransfer();
    ft.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    ft.upload(fileURL, uri, win, fail, options);

### FileUploadResult

A `FileUploadResult` object is passed to the success callback of the
`FileTransfer` object's `upload()` method.

#### Properties

-   **bytesSent**: The number of bytes sent to the server as part of the
    upload. (long)
-   **responseCode**: The HTTP response code returned by the server.
    (long)
-   **response**: The HTTP response returned by the server. (DOMString)
-   **headers**: The HTTP response headers by the server. (Object)
-   Currently supported on iOS only.

#### iOS Quirks

-   Does not support `responseCode` or `bytesSent`.

#### Browser Quirks

-   **withCredentials**: *boolean* that tells the browser to set the
    withCredentials flag on the XMLHttpRequest

### download

**Parameters**:

-   **source**: URL of the server to download the file, as encoded by
    `encodeURI()`.
-   **target**: Filesystem url representing the file on the device. For
    backwards compatibility, this can also be the full path of the file
    on the device. (See [Backwards Compatibility
    Notes](#backwards-compatibility-notes) below)
-   **successCallback**: A callback that is passed a `FileEntry` object.
    *(Function)*
-   **errorCallback**: A callback that executes if an error occurs when
    retrieving the `FileEntry`. Invoked with a `FileTransferError`
    object. *(Function)*
-   **trustAllHosts**: Optional parameter, defaults to `false`. If set
    to `true`, it accepts all security certificates. This is useful
    because Android rejects self-signed security certificates. Not
    recommended for production use. Supported on Android and iOS.
    *(boolean)*
-   **options**: Optional parameters, currently only supports headers
    (such as Authorization (Basic Authentication), etc).

#### Example

    // !! Assumes variable fileURL contains a valid URL to a path on the device,
    //    for example, cdvfile://localhost/persistent/path/to/downloads/

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");

    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            console.log("download complete: " + entry.toURL());
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );

#### WP8 Quirks

-   Download requests is being cached by native implementation. To avoid
    caching, pass `if-Modified-Since` header to download method.

#### Browser Quirks

-   **withCredentials**: *boolean* that tells the browser to set the
    withCredentials flag on the XMLHttpRequest

### abort

Aborts an in-progress transfer. The onerror callback is passed a
FileTransferError object which has an error code of
FileTransferError.ABORT\_ERR.

#### Example

    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    //    for example, cdvfile://localhost/persistent/path/to/file.txt

    var win = function(r) {
        console.log("Should not be called.");
    }

    var fail = function(error) {
        // error.code == FileTransferError.ABORT_ERR
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    ft.abort();

### FileTransferError

A `FileTransferError` object is passed to an error callback when an
error occurs.

#### Properties

-   **code**: One of the predefined error codes listed below. (Number)
-   **source**: URL to the source. (String)
-   **target**: URL to the target. (String)
-   **http\_status**: HTTP status code. This attribute is only available
    when a response code is received from the HTTP connection. (Number)
-   **body** Response body. This attribute is only available when a
    response is received from the HTTP connection. (String)
-   **exception**: Either e.getMessage or e.toString (String)

#### Constants

-   1 = `FileTransferError.FILE_NOT_FOUND_ERR`
-   2 = `FileTransferError.INVALID_URL_ERR`
-   3 = `FileTransferError.CONNECTION_ERR`
-   4 = `FileTransferError.ABORT_ERR`
-   5 = `FileTransferError.NOT_MODIFIED_ERR`

### Backwards Compatibility Notes

Previous versions of this plugin would only accept
device-absolute-file-paths as the source for uploads, or as the target
for downloads. These paths would typically be of the form

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

For backwards compatibility, these paths are still accepted, and if your
application has recorded paths like these in persistent storage, then
they can continue to be used.

These paths were previously exposed in the `fullPath` property of
`FileEntry` and `DirectoryEntry` objects returned by the File plugin.
New versions of the File plugin, however, no longer expose these paths
to JavaScript.

If you are upgrading to a new (1.0.0 or newer) version of File, and you
have previously been using `entry.fullPath` as arguments to `download()`
or `upload()`, then you will need to change your code to use filesystem
URLs instead.

`FileEntry.toURL()` and `DirectoryEntry.toURL()` return a filesystem
ofURL of the form

    cdvfile://localhost/persistent/path/to/file

which can be used in place of the absolute file path in both
`download()` and `upload()` methods.
