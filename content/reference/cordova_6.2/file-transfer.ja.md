---
title: ファイル転送 プラグイン
weight: 110
---


テスト環境 ( バージョン番号 ) :
[1.5.1](https://github.com/apache/cordova-plugin-file-transfer/releases/tag/1.5.1)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-file-transfer">}} をご確認ください。
{{</note>}}

このプラグインを使用して、ファイルのアップロードとダウンロードを行えます。

このプラグインでは、グローバルなコンストラクタ 「 `FileTransfer` 」 と
「 `FileUploadOptions` 」
を使用します。なお、グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(FileTransfer);
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-file-transfer
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`File Transfer` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

API の解説
----------

`FileTransfer` オブジェクトを使用して、ファイルのアップロード ( HTTP
MultiPart POST/PUT リクエストを使用 ) とダウンロードを行います。

### プロパティー

-   **onprogress**: データの送受信時に、`ProgressEvent`
    を渡して呼び出す関数。 *(Function)*

### メソッド

-   **upload**: サーバーにファイルを送信するときに使用します。
-   **download**:
    サーバーからファイルをダウンロードするときに使用します。
-   **abort**: 実行中の送受信を中止するときに使用します。

### upload

**パラメーター**:

-   **fileURL**: 端末上のファイルの位置を指し示す、ファイルシステムの
    URL ( FileSystem URL
    )。後方互換性を考慮する場合には、端末上のファイルへのフルパス ( full
    path ) を使用することもできます ( このページ内の
    [\[後方互換性に関するメモ書き\]](#backwards-compatibility-notes)
    も併せてご確認ください )。
-   **server**: ファイルを受け取るサーバーの URL ( `encodeURI()`
    を使用して、エンコード )。
-   **successCallback**: `FileUploadResult`
    オブジェクトを渡して実行するコールバック関数。 *(Function)*
-   **errorCallback**: `FileUploadResult`
    を取得するときにエラーが発生した場合に実行されるコールバック関数。`FileTransferError`
    オブジェクトを渡して呼び出します。 *(Function)*
-   **trustAllHosts**: 任意のパラメーター。デフォルトは `false`
    です。`true`
    に設定した場合、すべてのセキュリティー証明書を許可します。Android
    では、自己署名 ( self-signed )
    したセキュリティー証明書を拒否するので、この方法は有用です。正式リリース版または商用のアプリには推奨しません。Android
    と iOS で使用できます。 *(boolean)*
-   **options**: 任意のパラメーター。使用できる key は、次のとおりです。
    *(Object)*

#### 例

{{<highlight javascript>}}
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
{{</highlight>}}

#### 例 アップロード時の Headers と ProgressEvent の使用例 ( Android と iOS 専用 )

{{<highlight javascript>}}
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
{{</highlight>}}

### FileUploadResult

`FileUploadResult` オブジェクトは、`FileTransfer` オブジェクトの
`upload()` メソッドの成功時のコールバックに渡されます。

#### プロパティー

-   **bytesSent**: アップロード時に、サーバーに送られたバイト ( byte )
    数 (long)
-   **responseCode**: サーバーから返ってきた HTTP レスポンスコード
    (long)
-   **response**: サーバーから返ってきた HTTP レスポンス (DOMString)
-   **headers**: サーバーから返ってきた HTTP レスポンスのヘッダー
    (Object)

-   現時点では、iOS 上でのみ使用できます。

#### iOS 特有の動作

-   `responseCode` または `bytesSent` は使用できません。
-   *chunkedMode=true* と `multipartMode=false`
    に設定している場合、空ファイルのアップロードはできません。

#### Windows 特有の動作

-   アップロード時、options のパラメーターに、空/null
    値を指定した場合、これらのパラメーターは無視されます。これは、Windows
    API の仕様です。
-   *chunkedMode*
    オプションは使用できません。アップロードは、常に、非チャンク (
    非チャンクド ) 形式で行われます。

### download

**パラメーター**:

-   **source**: ファイルのダウンロード元となるサーバーの URL (
    `encodeURI()` を使用して、エンコード )。
-   **target**: 端末上のファイルの位置を指し示す、ファイルシステムの URL
    ( Filesystem URL
    )。後方互換性を考慮する場合には、ここには、端末上のファイルへのフルパスを使用することもできます　(
    後方互換性に関しては、下の
    [後方互換性に関するメモ書](#backwards-compatibility-notes)
    を参照のこと )。
-   **successCallback**: `FileEntry`
    オブジェクトを渡して実行するコールバック。 *(Function)*
-   **errorCallback**: `FileEntry`
    の取得時にエラーが発生した場合に実行されるコールバック。
    `FileTransferError` オブジェクトを渡して実行します。 *(Function)*
-   **trustAllHosts**: 任意のパラメーター。デフォルトは `false`
    です。`true`
    に設定した場合、すべてのセキュリティー証明書を許可します。Android
    では、自己署名 ( self-signed )
    したセキュリティー証明書を拒否するので、この方法は有用です。正式リリース版または商用のアプリには推奨しません。Android
    と iOS で使用できます。 *(boolean)*
-   **options**: 任意のパラメーター。現時点では、headers
    のみ使用できます ( BASIC 認証などを指定できる Authorization
    ヘッダーなどを設定できます )。

#### 例

{{<highlight javascript>}}
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
{{</highlight>}}

### abort

実行中のファイルの送受信を中止します。 FileTransferError
オブジェクトを使用して、失敗時のコールバックが呼び出されます。このオブジェクトには、FileTransferError.ABORT\_ERR
エラーコードが格納されています。

#### 例

{{<highlight javascript>}}
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
{{</highlight>}}

### FileTransferError

エラー発生時、`FileTransferError`
オブジェクトが失敗時のコールバックに渡されます。

#### プロパティー

-   **code**: 後述のエラーコードのいずれか (Number)
-   **source**: ソースへの URL (String)nn \[ 翻訳者メモ :
    このプロパティーには、アップロード時には端末上のファイルの保存場所、ダウンロード時にはダウンロード元の
    URL が格納されるようです。\]
-   **target**: ターゲットへの URL (String) nn\[ 翻訳者メモ :
    このプロパティーには、アップロード時にはアップロード先の
    URL、ダウンロード時には端末上のファイルの保存場所が格納されるようです。
    \]
-   **http\_status**: HTTP ステータスコード。HTTP
    接続の状態を示すレスポンスコードを受け取った場合のみ、この属性を使用できます。
    (Number)
-   **body** : レスポンスのボディー。HTTP
    接続の状態を示すレスポンスコードを受け取った場合のみ、この属性を使用できます。(String)
-   **exception**: e.getMessage または e.toString のいずれか (String)

#### 定数

-   1 = `FileTransferError.FILE_NOT_FOUND_ERR`
-   2 = `FileTransferError.INVALID_URL_ERR`
-   3 = `FileTransferError.CONNECTION_ERR`
-   4 = `FileTransferError.ABORT_ERR`
-   5 = `FileTransferError.NOT_MODIFIED_ERR`

#### Windows 特有の動作

-   このプラグインは、[BackgroundDownloader](https://msdn.microsoft.com/en-us/library/windows/apps/windows.networking.backgroundtransfer.backgrounddownloader.aspx)
    /
    [BackgroundUploader](https://msdn.microsoft.com/en-us/library/windows/apps/windows.networking.backgroundtransfer.backgrounduploader.aspx)
    を基礎としています。よって、Windows
    の端末では、起動までに時間がかかります (
    処理の作成・開始まで、数秒かかる場合があります
    )。サイズの小さいダウンロード向けには、処理速度が早い、XHR または
    [HttpClient](https://msdn.microsoft.com/en-us/library/windows/apps/windows.web.http.httpclient.aspx)
    の使用を推奨します。

### 後方互換性に関するメモ書き

このプラグインの以前のバージョンでは、アップロード時のソースまたはダウンロード時のターゲットには、ファイルの保存場所への端末固有の絶対パス
( device-absolute-file-location )
を使用していました。典型的なパスの形式は、次のとおりでした。

{{<highlight javascript>}}
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)
{{</highlight>}}

後方互換性を考慮して、これらの形式のパスは今でも使用できます。また、永続的なストレージに、これらのパスを保存して使用していた場合でも、継続して、これらの形式のパスを使用できます。

以前は、これらのパスは、ファイル操作プラグイン ( File プラグイン )
が返す `FileEntry` と `DirectoryEntry` オブジェクトの `fullPath`
プロパティー内で、JavaScript
側にも暴露されていました。新しいバーションのファイル操作プラグイン (
File プラグイン ) では、この問題も解消され、JavaScript
側へは暴露されません。

ファイル操作プラグイン ( File プラグイン ) のバージョンを 1.0.0
以降にアップグレードして、加えて、以前は、`download()` または `upload()`
への引数に `entry.fullPath`
を使用していた場合には、代わりに、ファイルシステムの URL ( Filesystem
URL ) を使用するように、コードを変更する必要があります。

`FileEntry.toURL()` と `DirectoryEntry.toURL()` では、ファイルシステムの
URL ( Filesystem URL ) を、次の形式で返します。

{{<highlight javascript>}}
cdvfile://localhost/persistent/path/to/file
{{</highlight>}}

`download()` と `upload()`
の両メソッド内において、ファイルへの絶対パスを指定する代わりに、この URL
を使用できます。

サンプルコード : ファイルのダウンロードとアップロード
-----------------------------------------------------

ファイル転送プラグインを使用して、ファイルのアップロードとダウンロードを行います。ここでは、次の処理を行います。

-   [アプリのキャッシュ用ディレクトリーへ、バイナリーファイルをダウンロード](#アプリのキャッシュ用ディレクトリーへ-バイナリーファイルをダウンロード)
-   [ファイルのアップロード](#ファイルのアップロード)
-   [ファイルのダウンロード](#ファイルのダウンロード-ここでは-先ほどの例で使用したファイルをダウンロードします)

### アプリのキャッシュ用ディレクトリーへ、バイナリーファイルをダウンロード

ファイル操作プラグイン ( File プラグイン )
とファイル転送プラグインを併用して、target
の作成/取得とファイルのダウンロードを行います ( ダウンロード時の target
とは、「 端末上のファイルの位置を指し示す、ファイルシステムの URL 」
であり、この例では、FileEntry オブジェクトを指します
)。ファイルをダウンロードする前に、`resolveLocalFileSystemURL`
を使用して、DirectoryEntry
オブジェクトを作成/取得します。成功時のコールバックでは、DirectoryEntry
の `fs.root.getFile` メソッドを使用して、ダウンロード先となるファイル (
FileEntry ) を作成/取得します。

{{<highlight javascript>}}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);

    // Make sure you add the domain name to the Content-Security-Policy <meta> element.
    var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
    // Parameters passed to getFile create a new file or return the file if it already exists.
    fs.root.getFile('downloaded-image.png', { create: true, exclusive: false }, function (fileEntry) {
        download(fileEntry, url, true);

    }, onErrorCreateFile);

}, onErrorLoadFs);
{{</highlight>}}

{{<note>}}
永続的なストレージを使用する場合には、 <code>requestFileSystem</code>
の実行時に、 <code>LocalFileSystem.PERSISTENT</code> を指定します。
{{</note>}}

FileEntry オブジェクトの作成/取得後、FileTransfer オブジェクトの
download メソッドを使用して、ファイルを `ダウンロード`
します。FileTransfer の `download`
メソッドの第三引数は、成功時のコールバックです。このコールバック内で、`readBinaryFile`
関数を使用しています。また、ここで使用している変数 「 entry 」
には、download の処理結果として受けとった、新規の FileEntry
オブジェクトが格納されています。

{{<highlight javascript>}}
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
{{</highlight>}}

画像を単に表示する場合には、次のように、FileEntry を渡して、FileEntry
自身の toURL() 関数を呼び出します。

{{<highlight javascript>}}
function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('imageFile');
    elem.src = fileEntry.toURL();
}
{{</highlight>}}

バイナリーファイルの読み込み後に、なんらかの処理をする場合、FileReader
の `readAsBinaryString` と `readAsArrayBuffer` の 2
つのメソッドを使用できます。ここでは、`readAsArrayBuffer`
を使用し、FileEntry
オブジェクトをこのメソッドに渡します。ファイルの読み込み後は、その処理結果を使用して、Blob
オブジェクトを作成します。

{{<highlight javascript>}}
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
{{</highlight>}}

ファイルの読み込み後、`createObjectURL` を使用すれば、DOM 上で使用できる
URL を取得できます。次に、この URL を使用して、画像を表示します。

{{<highlight javascript>}}
function displayImage(blob) {

    // Note: Use window.URL.revokeObjectURL when finished with image.
    var objURL = window.URL.createObjectURL(blob);

    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('imageFile');
    elem.src = objURL;
}
{{</highlight>}}

上記で示したように、ダウンロードした画像を単に表示するのであれば、 `FileEntry.toURL()`
を使用することもできます。

### ファイルのアップロード

ファイル転送プラグインを使用してファイルをアップロードする場合、アップロード対象となるファイルを取得するときには、ファイル操作プラグイン
( File プラグイン ) を使用します (
ダウンロード時と同じく、ファイルは、FileEtnry オブジェクトとなります
)。アップロード前に、DirectoryEntry の `getFile`
を使用して、アップロード用のファイルを作成/取得します。ここでは、アプリのキャッシュ用ディレクトリー
( fs.root )
内にファイルを作成しています。次に、アップロードするコンテンツを渡して、writeFile
関数を実行します。

{{<highlight javascript>}}
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
{{</highlight>}}

この例では、FileWrite オブジェクトを作成/取得して、次に、upload
関数を実行しています。

{{<highlight javascript>}}
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
{{</highlight>}}

ここでは、upload 関数へ FileEntry
オブジェクトを渡しています。なお、実際のアップロード処理には、FileTransfer
オブジェクトの upload 関数を使用します。

{{<highlight javascript>}}
function upload(fileEntry) {
    // !! Assumes variable fileURL contains a valid URL to a text file on the device,
    var fileURL = fileEntry.toURL();

    var success = function (r) {
        console.log("Successful upload...");
        console.log("Code = " + r.responseCode);
        displayFileData(fileEntry.fullPath + " (content uploaded to server)");
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
{{</highlight>}}

### ファイルのダウンロード ( ここでは、先ほどの例で使用したファイルをダウンロードします )

先ほどアップロードしたテキストを、今度は、ダウンロードします ( 「
ファイルのアップロード 」 を参照のこと )。必要なものは、有効な URL です
( ダウンロード元を指す URL、たとえば、http://some.server.com/download.php
)。FileTransfer.download メソッドの成功時のハンドラーには、FileEntry
オブジェクトが渡されます。上記のダウンロードの例 ( 「
バイナリーファイルのダウンロード 」 を参照のこと )
と異なる点として、ここでは、ダウンロードの処理結果を読み込むときに、FileReader.readAsText
を使用しています。これは、先ほどのアップロードの例　( 「
ファイルのアップロード 」 を参照のこと )
では、テキスト形式のコンテンツとして、ファイルがアップロードされているためです。

{{<highlight javascript>}}
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
{{</highlight>}}

readFile 関数内で、FileReader オブジェクトの `readAsText`
メソッドを実行します。

{{<highlight javascript>}}
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
{{</highlight>}}
