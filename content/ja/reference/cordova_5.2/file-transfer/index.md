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
ファイル転送 プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-file-transfer/blob/master/RELEASENOTES.md#130-sep-18-2015">1.3.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-file-transfer)
をご確認ください。

</div>

このプラグインを使用して、ファイルのアップロードとダウンロードを行えます。

このプラグインでは、グローバルなコンストラクタ 「 `FileTransfer` 」 と
「 `FileUploadOptions` 」 を使用します。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(FileTransfer);
    }

プラグイン ID
-------------

    cordova-plugin-file-transfer

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`File Transfer` プラグインを
有効 &lt;add\_plugins&gt; にします。

サポート対象のプラットフォーム
------------------------------

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
-   **options**: 任意のパラメーター *(Object)*

使用できる key は、次のとおりです。

-   **fileKey**: form 要素の name 属性。デフォルトは、`file` です。
    (DOMString)
-   **fileName**:
    サーバーにファイルを保存するときに使用するファイル名。デフォルトは、`image.jpg`
    です。 (DOMString)
-   **httpMethod**: 使用する、HTTP の method 属性。`PUT` または `POST`
    を使用します。デフォルトは、`POST` です。 (DOMString)
-   **mimeType**: アップロードするデータの MIME
    タイプ。デフォルトは、`image/jpeg` です。 (DOMString)　
-   **params**: HTTP リクエスト内に任意で設定する key と value
    の組み合わせ (Object)
-   **chunkedMode**: チャンク/チャンクド形式のストリーミング ( chunked
    streaming mode )
    を使用して、データのアップロードを行うか否かの設定。デフォルトは、`true`
    です。 (Boolean)
-   **headers**:
    ヘッダーのプロパティー名とその値の組み合わせ。値が複数ある場合には、配列を使用します。iOS、FireOS、Android
    では、Content-Type
    が記述されている場合には、マルチパートフォームデータ形式 ( multipart
    form data ) は使用されません。 (Object)
-   **trustAllHosts**: 任意のパラメーター。デフォルトは `false`
    です。`true`
    に設定した場合、すべてのセキュリティー証明書を許可します。Android
    では、自己署名 ( self-signed )
    したセキュリティー証明書を拒否するので、この方法は有用です。正式リリース版または商用のアプリには推奨しません。Android
    と iOS で使用できます。 *(boolean)*

#### 例

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

#### 例 with Upload Headers and Progress Events (Android and iOS only)

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

#### Browser 特有の動作

-   **withCredentials**: XMLHttpRequest で各種認証情報を使用するか否か (
    withCredentials フラグを立てるか否か ) を Browser 側に示す *真偽値*
    です。

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

#### WP8 特有の動作

-   ダウンロードリクエストは、WP8
    独自の処理により、キャッシュされます。この処理を回避するためには、`if-Modified-Since`
    ヘッダーを download メソッドに渡します。

#### Browser 特有の動作

-   **withCredentials**: XMLHttpRequest で各種認証情報を使用するか否か (
    withCredentials フラグを立てるか否か ) を Browser 側に示す *真偽値*
    です。

### abort

実行中のファイルの送受信を中止します。 FileTransferError
オブジェクトを使用して、失敗時のコールバックが呼び出されます。このオブジェクトには、FileTransferError.ABORT\_ERR
エラーコードが格納されています。

#### 例

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

### 後方互換性に関するメモ書き

このプラグインの以前のバージョンでは、アップロード時のソースまたはダウンロード時のターゲットには、ファイルの保存場所への端末固有の絶対パス
( device-absolute-file-location )
を使用していました。典型的なパスの形式は、次のとおりでした。

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

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

    cdvfile://localhost/persistent/path/to/file

`download()` と `upload()`
の両メソッド内において、ファイルへの絶対パスを指定する代わりに、この URL
を使用できます。
