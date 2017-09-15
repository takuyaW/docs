File Transfer Plugin
====================

Tested Version:
[1.6.3](https://github.com/apache/cordova-plugin-file-transfer/releases/tag/1.6.3)

<div class="admonition note">

This document is based on the original Cordova docs available at
[Cordova Docs](https://github.com/apache/cordova-plugin-file-transfer).

</div>

This plugin allows you to upload and download files.

This plugin defines global `FileTransfer`, `FileUploadOptions`
constructors. Although in the global scope, they are not available until
after the `deviceready` event.

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(FileTransfer);
}
```

Plugin ID
---------

``` {.sourceCode .javascript}
cordova-plugin-file-transfer
```

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please enable &lt;add\_plugins&gt;
`Transfer` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows

API Reference
-------------

### FileTransfer

The `FileTransfer` object provides a way to upload files using an HTTP
multi-part POST or PUT request, and to download files.

#### Properties

-   **onprogress**: Called with a `ProgressEvent` whenever a new chunk
    of data is transferred. *(Function)*

#### Methods

-   **upload**: Sends a file to a server.
-   **download**: Downloads a file from server.
-   **abort**: Aborts an in-progress transfer.

#### upload

**Parameters**:

-   **fileURL**: Filesystem URL representing the file on the device or a
    [data URI](https://en.wikipedia.org/wiki/Data_URI_scheme). For
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
-   **options**: Optional parameters *(Object)*. Valid keys:
-   **fileKey**: The name of the form element. Defaults to `file`.
    (DOMString)
-   **fileName**: The file name to use when saving the file on the
    server. Defaults to `image.jpg`. (DOMString)
-   **httpMethod**: The HTTP method to use - either `PUT` or `POST`.
    Defaults to `POST`. (DOMString)
-   **mimeType**: The mime type of the data to upload. Defaults to
    `image/jpeg`. (DOMString)
-   **params**: A set of optional key/value pairs to pass in the HTTP
    request. (Object, key/value - DOMString)
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

##### Example

``` {.sourceCode .javascript}
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
```

##### Example with Upload Headers and Progress Events (Android and iOS only)

``` {.sourceCode .javascript}
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
```

#### download

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

##### Example

``` {.sourceCode .javascript}
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
        console.log("download error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
```

#### abort

Aborts an in-progress transfer. The onerror callback is passed a
FileTransferError object which has an error code of
`FileTransferError.ABORT_ERR`.

##### Example

``` {.sourceCode .javascript}
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
```

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
-   Does not support uploads of an empty file with **chunkedMode=true**
    and `multipartMode=false`.

#### Windows Quirks

-   An option parameter with empty/null value is excluded in the upload
    operation due to the Windows API design.
-   **chunkedMode** is not supported and all uploads are set to
    non-chunked mode.

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

#### Windows Quirks

-   The plugin implementation is based on
    [BackgroundDownloader](https://msdn.microsoft.com/en-us/library/windows/apps/windows.networking.backgroundtransfer.backgrounddownloader.aspx)/[BackgroundUploader](https://msdn.microsoft.com/en-us/library/windows/apps/windows.networking.backgroundtransfer.backgrounduploader.aspx),
    which entails the latency issues on Windows devices
    (creation/starting of an operation can take up to a few seconds).
    You can use XHR or
    [HttpClient](https://msdn.microsoft.com/en-us/library/windows/apps/windows.web.http.httpclient.aspx)
    as a quicker alternative for small downloads.

Backwards Compatibility Notes
-----------------------------

Previous versions of this plugin would only accept
device-absolute-file-paths as the source for uploads, or as the target
for downloads. These paths would typically be of the form:

``` {.sourceCode .xml}
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)
```

For backwards compatibility, these paths are still accepted, and if your
application has recorded paths like these in persistent storage, then
they can continue to be used.

These paths were previously exposed in the `fullPath` property of
`FileEntry` and `DirectoryEntry` objects returned by the File plugin.
New versions of the File plugin however, no longer expose these paths to
JavaScript.

If you are upgrading to a new (1.0.0 or newer) version of File, and you
have previously been using `entry.fullPath` as arguments to `download()`
or `upload()`, then you will need to change your code to use filesystem
URLs instead.

FileEntry.toURL() and `DirectoryEntry.toURL()` return a filesystem URL
of the form:

``` {.sourceCode .javascript}
cdvfile://localhost/persistent/path/to/file
```

which can be used in place of the absolute file path in both
`download()` and `upload()` methods.

Sample: Download and Upload Files
---------------------------------

Use the File-Transfer plugin to upload and download files. In these
examples, we demonstrate several tasks like:

-   [Downloading a binary file to the application cache](#binaryFile)
-   [Uploading a file created in your application's root](#uploadFile)
-   [Downloading the uploaded file](#downloadFile)

### Download a Binary File to the application cache

Use the File plugin with the File-Transfer plugin to provide a target
for the files that you download (the target must be a FileEntry object).
Before you download the file, create a DirectoryEntry object by using
`resolveLocalFileSystemURL` and calling `fs.root` in the success
callback. Use the `getFile` method of DirectoryEntry to create the
target file.

``` {.sourceCode .javascript}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);

    // Make sure you add the domain name to the Content-Security-Policy <meta> element.
    var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
    // Parameters passed to getFile create a new file or return the file if it already exists.
    fs.root.getFile('downloaded-image.png', { create: true, exclusive: false }, function (fileEntry) {
        download(fileEntry, url, true);

    }, onErrorCreateFile);

}, onErrorLoadFs);
```

<div class="admonition note">

For persistent storage, pass LocalFileSystem.PERSISTENT to
requestFileSystem.

</div>

When you have the FileEntry object, download the file using the
`download` method of the FileTransfer object. The 3rd argument to the
`download` function of FileTransfer is the success callback, which you
can use to call the app's `readBinaryFile` function. In this code
example, the `entry` variable is a new FileEntry object that receives
the result of the download operation.

``` {.sourceCode .javascript}
function download(fileEntry, uri, readBinaryData) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
            console.log("Successful download...");
            console.log("download complete: " + entry.toURL());
            if (readBinaryData) {
              // Read the file...
              readBinaryFile(entry);
            }
            else {
              // Or just display it.
              displayImageByFileURL(entry);
            }
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        null, // or, pass false
        {
            //headers: {
            //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //}
        }
    );
}
```

If you just need to display the image, take the FileEntry to call its
toURL() function.

``` {.sourceCode .javascript}
function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('imageElement');
    elem.src = fileEntry.toURL();
}
```

Depending on your app requirements, you may want to read the file. To
support operations with binary files, FileReader supports two methods,
`readAsBinaryString` and `readAsArrayBuffer`. In this example, use
`readAsArrayBuffer` and pass the FileEntry object to the method. Once
you read the file successfully, construct a Blob object using the result
of the read.

``` {.sourceCode .javascript}
function readBinaryFile(fileEntry) {
    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {

            console.log("Successful file read: " + this.result);
            // displayFileData(fileEntry.fullPath + ": " + this.result);

            var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
            displayImage(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}
```

Once you read the file successfully, you can create a DOM URL string
using `createObjectURL`, and then display the image.

``` {.sourceCode .javascript}
function displayImage(blob) {

    // Note: Use window.URL.revokeObjectURL when finished with image.
    var objURL = window.URL.createObjectURL(blob);

    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('imageElement');
    elem.src = objURL;
}
```

As you saw previously, you can call FileEntry.toURL() instead to just
display the downloaded image (skip the file read).

### Upload a File

When you upload a File using the File-Transfer plugin, use the File
plugin to provide files for upload (again, they must be FileEntry
objects). Before you can upload anything, create a file for upload using
the `getFile` method of DirectoryEntry. In this example, create the file
in the application's cache (fs.root). Then call the app's writeFile
function so you have some content to upload.

``` {.sourceCode .javascript}
function onUploadFile() {
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

        console.log('file system open: ' + fs.name);
        var fileName = "uploadSource.txt";
        var dirEntry = fs.root;
        dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

            // Write something to the file before uploading it.
            writeFile(fileEntry);

        }, onErrorCreateFile);

    }, onErrorLoadFs);
}
```

In this example, create some simple content, and then call the app's
upload function.

``` {.sourceCode .javascript}
function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            upload(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        if (!dataObj) {
          dataObj = new Blob(['file data to upload'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}
```

Forward the FileEntry object to the upload function. To perform the
actual upload, use the upload function of the FileTransfer object.

``` {.sourceCode .javascript}
function upload(fileEntry) {
    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    var fileURL = fileEntry.toURL();

    var success = function (r) {
        console.log("Successful upload...");
        console.log("Code = " + r.responseCode);
        // displayFileData(fileEntry.fullPath + " (content uploaded to server)");
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
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
    // SERVER must be a URL that can handle the request, like
    // http://some.server.com/upload.php
    ft.upload(fileURL, encodeURI(SERVER), success, fail, options);
};
```

### Download the uploaded file

To download the image you just uploaded, you will need a valid URL that
can handle the request, for example,
<http://some.server.com/download.php>. Again, the success handler for
the FileTransfer.download method receives a FileEntry object. The main
difference here from previous examples is that we call
FileReader.readAsText to read the result of the download operation,
because we uploaded a file with text content.

``` {.sourceCode .javascript}
function download(fileEntry, uri) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
        uri,
        fileURL,
        function (entry) {
            console.log("Successful download...");
            console.log("download complete: " + entry.toURL());
            readFile(entry);
        },
        function (error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        null, // or, pass false
        {
            //headers: {
            //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            //}
        }
    );
}
```

In the readFile function, call the `readAsText` method of the FileReader
object.

``` {.sourceCode .javascript}
function readFile(fileEntry) {
    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function () {

            console.log("Successful file read: " + this.result);
            // displayFileData(fileEntry.fullPath + ": " + this.result);

        };

        reader.readAsText(file);

    }, onErrorReadFile);
}
```
