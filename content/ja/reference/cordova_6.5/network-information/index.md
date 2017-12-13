ネットワーク情報の取得 プラグイン
=================================

テスト環境 ( バージョン番号 ) :
[1.3.3](https://github.com/apache/cordova-plugin-network-information/releases/tag/1.3.3)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-network-information)
をご確認ください。

</div>

このプラグインでは、旧バージョンの [Network Information
API](http://www.w3.org/TR/2011/WD-netinfo-api-20110607/)
が使用されています。このプラグインを使用すれば、セルラー ( Cellular )
情報、WiFi 接続情報などのインターネット接続情報を取得できます。

プラグイン ID
-------------

    cordova-plugin-network-information

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Network Information` プラグインを
有効 &lt;add\_plugins&gt; にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

リファレンス
------------

### Connection

`connection` オブジェクトを使用して、セルラー、WiFi
接続などのネットワーク情報を取得します ( `navigator.connection`
経由で情報にアクセスします )。

#### プロパティー

-   connection.type

#### 定数

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

#### connection.type

このプロパティーを使用して、ネットワーク接続の状態と接続のタイプを確認します。

##### 例

``` {.sourceCode .js}
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

##### API の変更点

Cordova 2.3.0 までは、`navigator.network.connection` 経由で `Connection`
オブジェクトにアクセスしていましたが、W3C
の仕様に準拠するため、`navigator.connection` 経由に変更しました。
`navigator.network.connection` は利用できますが、将来的には廃止します。

##### iOS 特有の動作

-   iOS では、セルラー接続のタイプを識別できません。
    -   モバイルデータ通信 ( セルラーを使用したデータ通信 )
        に関しては、`navigator.connection.type` は `Connection.CELL`
        になります。

##### Windows 特有の動作

-   Phone 8.1
    のエミュレーター上で実行している場合には、常に、`navigator.connection.type`
    は `Connection.ETHERNET` になります。

ネットワーク関連のイベント
--------------------------

### offline

アプリがオフラインになったときに、このイベントが発火します。端末は、インターネットに接続されていません。

    document.addEventListener("offline", yourCallbackFunction, false);

#### 詳細

デバイスのネットワーク接続が切れたときに、`offline` ( オフライン )
イベントが発火します ( `connection.type` が `NONE`
に変わったときに発火します
)。ネットワーク接続が切れているため、アプリは、インターネットへアクセスできません。Connection
API と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

#### 例

``` {.sourceCode .js}
document.addEventListener("offline", onOffline, false);

function onOffline() {
    // Handle the offline event
}
```

#### iOS 特有の動作

初回起動時は、`offline` ( オフライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります。

#### Windows Phone 7 特有の動作

エミュレーター上で実行している場合には、`connection.status` は、常に
unknown になっています。よって、このイベントは *発火しません* 。

#### Windows Phone 8 特有の動作

エミュレーター側では、常に `Cellular`
として、ネットワークのタイプを認識します。よって、このイベントは
*発火しません* 。

### online

アプリがオンラインになったときに、このイベントが発火します。端末は、インターネットに接続されています。

``` {.sourceCode .javascript}
document.addEventListener("online", yourCallbackFunction, false);
```

#### 詳細

端末がネットワークに接続して、アプリからインターネットが使用できる状態になったときに、`online`
( オンライン ) イベントが発火します ( `connection.type` が `NONE`
から他の値に変わったときに発火します )。Connection API
と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

#### 例

``` {.sourceCode .javascript}
document.addEventListener("online", onOnline, false);

function onOnline() {
    // Handle the online event
}
```

#### iOS 特有の動作

初回起動時は、`online` ( オンライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります ( `connection.type` が
`UNKNOWN` になる前に )。

サンプル：ネットワーク状態に応じてファイルをアップロードする
------------------------------------------------------------

このセクションのコード例は、オンラインイベントとオフラインイベント、およびネットワーク接続ステータスを使用しているアプリケーションの動作を変更する例を示しています。

まず、サンプルデータ用に新しい FileEntry オブジェクト（ data.txt
）を作成します。 この関数を `deviceready` ハンドラから呼び出します。

<div class="admonition note">

このコード例では、File プラグインが必要です。

</div>

``` {.sourceCode .javascript}
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
```

次に、`deviceready` で online と offline イベントリスナーを追加します。

``` {.sourceCode .javascript}
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
```

アプリの `onOnline` 関数は、online イベントを処理します。
イベントハンドラで、現在のネットワーク状態を確認します。
このアプリでは、Connection.NONE 以外のすべての接続タイプを good
として扱います。
接続している場合は、ファイルをアップロードしようとします。

``` {.sourceCode .javascript}
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
```

前のコードで online イベントが発生した場合は、アプリの tryToUploadFile
関数を呼び出します。 FileTransfer
オブジェクトのアップロード機能が失敗した場合は、アプリケーションの
offlineWrite 関数を呼び出して、現在のデータを保存します。

<div class="admonition note">

この例では、FileTransfer プラグインが必要です。

</div>

``` {.sourceCode .javascript}
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
```

offlineWrite 関数のコードは次のとおりです。

<div class="admonition note">

このコード例では、File プラグインが必要です。

</div>

``` {.sourceCode .javascript}
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
```

offline
イベントが発生した場合は、ユーザーに通知する（この例では単にログに記録する）操作を行います。

``` {.sourceCode .javascript}
function onOffline() {
    // Handle the offline event
    console.log("lost connection");
}
```
