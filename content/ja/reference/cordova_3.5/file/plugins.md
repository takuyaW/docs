プラグイン開発者へのメモ
========================

こちらは、Android と iOS
向けにプラグインの開発を行う開発者へのメモ書きです。ここでは、ファイル操作プラグイン
( File プラグイン )
を使用して、ファイルシステムにアクセスを行うインターフェイスを構築するときの注意点を記します。

Cordova における、ファイルシステム URL ( file system URL ) の使用方法
-------------------------------------

バージョン 1.0.0
以降、このプラグインでは、ブリッジを越えるすべての処理において、`cdvfile`
形式の URL を使用しています ( 端末のファイルシステムへのパスを
JavaScript 側に暴露させないため )。

JavaScript 側では、FileEntry と DirectoryEntry オブジェクトに、fullpath
属性 ( HTML のファイルシステムの root 構造と類似 )
を持たせています。開発予定のプラグインの JavaScript API
において、FileEntry または DirectoryEntry
オブジェクトを使用する場合、ネイティブコードへそのオブジェクトをブリッジ越しに渡す前に、そのオブジェクトに対して
`.toURL()` を呼ぶ必要があります。

cdvfile:// 形式の URL からファイルシステムのパスへの変換
--------------------------------------------------------

ファイルシステムに書き込みを行うプラグインでは、返されたファイルシステムの
URL
を変換して、ファイルシステム内の実際の場所を指すように、処理を行う必要があります。変換処理は、ネイティブ
プラットフォーム毎に異なります。

「 cdvfile:// 」 形式の URL
を端末のファイルを指すようにマップ化するとき、一部の URL
をマップ化できない場合もあります。一部の URL
は、ファイルでは示すことができない、端末側のリソース ( asset )
を参照している場合もあるためです。また、リモートのリソースを参照している場合もあります。このようなことも想定できるため、プラグインを開発する場合には、URL
からパスへの変換を行ったとき、有効な結果を返しているか常に検証する必要があります。

### Android

Android においては、`org.apache.cordova.CordovaResourceApi`
を使用して、`cdvfile://` 形式の URL を filesystem
のパスに変換できます。`CordovaResourceApi` には、`cdvfile://` 形式の URL
を処理するメソッドがいくつか実装されています。

    // webView is a member of the Plugin class
    CordovaResourceApi resourceApi = webView.getResourceApi();

    // Obtain a file:/// URL representing this file on the device,
    // or the same URL unchanged if it cannot be mapped to a file
    Uri fileURL = resourceApi.remapUri(Uri.parse(cdvfileURL));

ファイル操作プラグイン ( File プラグイン )
を、次のように直接使用することもできます。

    import org.apache.cordova.file.FileUtils;
    import org.apache.cordova.file.FileSystem;
    import java.net.MalformedURLException;

    // Get the File plugin from the plugin manager
    FileUtils filePlugin = (FileUtils)webView.pluginManager.getPlugin("File");

    // Given a URL, get a path for it
    try {
        String path = filePlugin.filesystemPathForURL(cdvfileURL);
    } catch (MalformedURLException e) {
        // The filesystem url wasn't recognized
    }

パスから `cdvfile://` 形式の URL への変換

    import org.apache.cordova.file.LocalFilesystemURL;

    // Get a LocalFilesystemURL object for a device path,
    // or null if it cannot be represented as a cdvfile URL.
    LocalFilesystemURL url = filePlugin.filesystemURLforLocalPath(path);
    // Get the string representation of the URL object
    String cdvfileURL = url.toString();

プラグインでファイルを作成し、そのとき、FileEntry
オブジェクトを使用したい場合には、次のように、ファイル操作プラグイン (
File プラグイン ) を使用します。

    // Return a JSON structure suitable for returning to JavaScript,
    // or null if this file is not representable as a cdvfile URL.
    JSONObject entry = filePlugin.getEntryForFile(file);

### iOS

iOS 上の Cordova における `CordovaResourceApi` の使用方法は、Android
のそれとは異なります。iOS では、URL
とファイルシステムのパス間の変換を行う場合には、ファイル操作プラグイン (
File プラグイン ) を使用してください。

    // Get a CDVFilesystem URL object from a URL string
    CDVFilesystemURL* url = [CDVFilesystemURL fileSystemURLWithString:cdvfileURL];
    // Get a path for the URL object, or nil if it cannot be mapped to a file
    NSString* path = [filePlugin filesystemPathForURL:url];


    // Get a CDVFilesystem URL object for a device path, or
    // nil if it cannot be represented as a cdvfile URL.
    CDVFilesystemURL* url = [filePlugin fileSystemURLforLocalPath:path];
    // Get the string representation of the URL object
    NSString* cdvfileURL = [url absoluteString];

プラグインでファイルを作成し、そのとき、FileEntry
オブジェクトを使用したい場合には、次のように、ファイル操作プラグイン (
File プラグイン ) を使用します。

    // Get a CDVFilesystem URL object for a device path, or
    // nil if it cannot be represented as a cdvfile URL.
    CDVFilesystemURL* url = [filePlugin fileSystemURLforLocalPath:path];
    // Get a structure to return to JavaScript
    NSDictionary* entry = [filePlugin makeEntryForLocalURL:url]

### JavaScript

JavaScript では、FileEntry または DirectoryEntry オブジェクトから
`cdvfile://` 形式の URL を取得する場合、次のように、\`.toURL()\`
を呼び出します。

``` {.sourceCode .javascript}
var cdvfileURL = entry.toURL();
```

プラグインのレスポンスハンドラーでは、返された FileEntry 構造体を Entry
オブジェクトへ変換する場合、ハンドラーのコード内において、ファイル操作
プラグイン ( File プラグイン )
のインポートを行い、次のように、新しいオブジェクトを作成します。

``` {.sourceCode .javascript}
// create appropriate Entry object
var entry;
if (entryStruct.isDirectory) {
    entry = new DirectoryEntry(entryStruct.name, entryStruct.fullPath, new FileSystem(entryStruct.filesystemName));
} else {
    entry = new FileEntry(entryStruct.name, entryStruct.fullPath, new FileSystem(entryStruct.filesystemName));
}
```
