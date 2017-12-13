ファイル転送 プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/RELEASENOTES.md#044-jun-05-2014">0.4.4</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-file-transfer/blob/master/README.md)
をご確認ください。

</div>

このプラグインを使用して、ファイルのアップロードとダウンロードを行えます。

プラグイン ID
-------------

    org.apache.cordova.file-transfer

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.file-transfer`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

\* \*Do not support `onprogress` nor `abort()`\*

FileTransfer
------------

The `FileTransfer` object provides a way to upload files using an HTTP
multi-part POST request, and to download files as well.

### プロパティー

-   **onprogress**: Called with a `ProgressEvent` whenever a new chunk
    of data is transferred. *(Function)*

### メソッド

-   **upload**: サーバーにファイルを送信するときに使用します。
-   **download**:
    サーバーからファイルをダウンロードするときに使用します。
-   **abort**: 実行中の送受信を中止するときに使用します。

### upload

**パラメーター**:

-   **fileURL**: Filesystem URL representing the file on the device. For
    backwards compatibility, this can also be the full path of the file
    on the device. (See [Backwards Compatibility
    Notes](#backwards-compatibility-notes) below)
-   **server**: URL of the server to receive the file, as encoded by
    `encodeURI()`.
-   **successCallback**: A callback that is passed a `Metadata` object.
    *(Function)*
-   **errorCallback**: A callback that executes if an error occurs
    retrieving the `Metadata`. Invoked with a `FileTransferError`
    object. *(Function)*
-   **trustAllHosts**: Optional parameter, defaults to `false`. If set
    to `true`, it accepts all security certificates. This is useful
    since Android rejects self-signed security certificates. Not
    recommended for production use. Supported on Android and iOS.
    *(boolean)*
-   **options**: 任意のパラメーター。使用できる key は、次のとおりです。
    *(Object)*
-   **fileKey**: The name of the form element. Defaults to `file`.
    (DOMString)
-   **fileName**: The file name to use when saving the file on the
    server. Defaults to `image.jpg`. (DOMString)
-   **mimeType**: The mime type of the data to upload. Defaults to
    `image/jpeg`. (DOMString)
-   **params**: A set of optional key/value pairs to pass in the HTTP
    request. (Object)
-   **chunkedMode**: Whether to upload the data in chunked streaming
    mode. Defaults to `true`. (Boolean)
-   **headers**: A map of header name/header values. Use an array to
    specify more than one value. (Object)

**例**

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

アップロード時の Headers と ProgressEvent の使用例 ( Android と iOS
が対象 )

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

### FileUploadResult

A `FileUploadResult` object is passed to the success callback of the
`FileTransfer` object's `upload()` method.

**プロパティー**

-   **bytesSent**: The number of bytes sent to the server as part of the
    upload. (long)
-   **responseCode**: The HTTP response code returned by the server.
    (long)
-   **response**: サーバーから返ってきた HTTP レスポンス (DOMString)
-   **headers**: サーバーから返ってきた HTTP レスポンスのヘッダー
    (Object)
-   現時点では、iOS 上でのみ使用できます。

**iOS 特有の動作**

-   `responseCode` または `bytesSent` は使用できません。

### download

**パラメーター**:

-   **source**: URL of the server to download the file, as encoded by
    `encodeURI()`.
-   **target**: Filesystem url representing the file on the device. For
    backwards compatibility, this can also be the full path of the file
    on the device. (See [Backwards Compatibility
    Notes](#backwards-compatibility-notes) below)
-   **successCallback**: A callback that is passed a `FileEntry` object.
    *(Function)*
-   **errorCallback**: A callback that executes if an error occurs when
    retrieving the `Metadata`. Invoked with a `FileTransferError`
    object. *(Function)*
-   **trustAllHosts**: Optional parameter, defaults to `false`. If set
    to `true`, it accepts all security certificates. This is useful
    because Android rejects self-signed security certificates. Not
    recommended for production use. Supported on Android and iOS.
    *(boolean)*
-   **options**: Optional parameters, currently only supports headers
    (such as Authorization (Basic Authentication), etc).

**例**

``` {.sourceCode .javascript}
// !! Assumes variable fileURL contains a valid URL to a path on the device,
//    for example, cdvfile://localhost/persistent/path/to/downloads/

var fileTransfer = new FileTransfer();
var uri = encodeURI("http://some.server.com/download.php");

fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        console.log("download complete: " + entry.fullPath);
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
```

### abort

Aborts an in-progress transfer. The onerror callback is passed a
FileTransferError object which has an error code of
FileTransferError.ABORT\_ERR.

**例**

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

### FileTransferError

A `FileTransferError` object is passed to an error callback when an
error occurs.

**プロパティー**

-   **code**: 後述のエラーコードのいずれか (Number)
-   **source**: ソースへの URL (String)nn \[ 翻訳者メモ :
    このプロパティーには、アップロード時には端末上のファイルの保存場所、ダウンロード時にはダウンロード元の
    URL が格納されるようです。\]
-   **target**: ターゲットへの URL (String) nn\[ 翻訳者メモ :
    このプロパティーには、アップロード時にはアップロード先の
    URL、ダウンロード時には端末上のファイルの保存場所が格納されるようです。
    \]
-   **http\_status**: HTTP status code. This attribute is only available
    when a response code is received from the HTTP connection. (Number)

**定数**

-   `FileTransferError.FILE_NOT_FOUND_ERR`
-   `FileTransferError.INVALID_URL_ERR`
-   `FileTransferError.CONNECTION_ERR`
-   `FileTransferError.ABORT_ERR`

### 後方互換性に関するメモ書き

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

`FileEntry.toURL()` and `DirectoryEntry.toURL()` return a filesystem URL
of the form

    cdvfile://localhost/persistent/path/to/file

which can be used in place of the absolute file path in both
`download()` and `upload()` methods.
