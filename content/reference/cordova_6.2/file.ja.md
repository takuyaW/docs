---
title: ファイル操作 プラグイン
weight: 100
---

テスト環境 ( バージョン番号 ) :
[4.2.0](https://github.com/apache/cordova-plugin-file/releases/tag/4.2.0)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-file">}} をご確認ください。
{{</note>}}

このプラグインでは、独自の File API ( 以後、「 ファイル操作 API 」
と呼称します ) を使用して、端末内のファイルへアクセス (
読み取り/書き込み )
します。このプラグインは、以下を含むいくつかの仕様に基づいています。

-   [The HTML5 File API](http://www.w3.org/TR/FileAPI/)
-   [The Directories and System extensions Latest](http://www.w3.org/TR/2012/WD-file-system-api-20120417/)
    なお、このプラグインで使用されているコードのほとんどは、[an earlier spec](http://www.w3.org/TR/2011/WD-file-system-api-20110419/)
    の仕様がまだサポートされていた頃に作成されたものです。
-   [FileWriter spec](http://dev.w3.org/2009/dap/file-system/file-writer.html)
    も実装しています。

{{<note>}}
W3C FileSystem仕様はWebブラウザでは推奨されていませんが、FileSystem
APIは、このプラグインを使用することでCordovaアプリケーションにおいてブラウザプラットフォームを除き、
<b>Supported Platforms</b> にあるプラットフォームでサポートされます。
{{</note>}}

プラグインの使い方については、このページの下部にある [sample](#サンプルコード-ファイルの作成-ディレクトリーの作成-ファイルへの書き込み-ファイルの読み込み-ファイルへの追記)
を参照してください。 その他の例（ブラウザ中心）については、HTML5 Rocksの
[FileSystem](http://www.html5rocks.com/en/tutorials/file/filesystem/)
を参照してください。 他のストレージオプションの概要については、Cordovaの
[storage guide](http://cordova.apache.org/docs/en/latest/cordova/storage/storage.html)
を参照してください。

このプラグインは、グローバルな `cordova.file` オブジェクトを定義します。
グローバルスコープでは、`deviceready`
イベントの発火後まで使用できません。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(cordova.file);
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-file
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`File` プラグインを [有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows ( `FileReader.readAsArrayBuffer` と `FileWriter.write(blob)`
    は使用できません。)

ファイルの保存場所
------------------

v1.2.0 以降、ファイルシステムのディレクトリーへのパスを示す URL
が使用できるようになりました。この URL
の形式は、*<file:///path/to/spot/>*
です。また、`window.resolveLocalFileSystemURL()`
を使用すれば、次のような `DirectoryEntry` に、この URL
を変換することもできます。

-   `cordova.file.applicationDirectory` -
    アプリのインストール先となる、読み取り専用のディレクトリーです。 (
    *iOS*、\*Android\*、\*BlackBerry 10\*、\*OSX\*、\*windows\* )
     
-   `cordova.file.applicationStorageDirectory` - アプリのサンドボックス
    ( sandbox ) のルートディレクトリーです。iOS と Windows
    では、このディレクトリーは読み取り専用です ( ただし、iOS の
    `/Documents`、Windows の `/localState`
    など、特定のサブディレクトリーに関しては、読み取りと書き込みができます
    )。このディレクトリーに格納されているすべてのデータは、対象のアプリのみが利用できます。
    ( *iOS*、\*Android\*、\*BlackBerry 10\*、\*OSX\* )

-   `cordova.file.dataDirectory` - アプリのサンドボックス ( sandbox )
    内の永続的およびプライベートなデータストレージです。内蔵のメモリーが使用されます。Android
    の場合、外部のメモリーが必要なときは、`.externalDataDirectory`
    を使用します。また、iOS の場合、このディレクトリーは、iCloud
    間とは同期されません ( `.syncedDataDirectory` を使用します )。 (
    *iOS*、\*Android\*、\*BlackBerry 10\*、\*windows\* )

-   `cordova.file.cacheDirectory` -
    キャッシュしたデータファイルまたは他のファイル (
    アプリ側で再作成可能な、なんらかのファイル )
    用のディレクトリーです。端末側のストレージが不足する場合には、OS
    側が、これらのファイルを削除します。ファイルの削除は、本来であれば、アプリ側で制御すべき処理です。
    ( *iOS*、\*Android\*、\*BlackBerry 10\*、\*OSX\*、\*windows\* )

-   `cordova.file.externalApplicationStorageDirectory` -
    アプリが使用する、外部ストレージ上の領域 ( 親のディレクトリー )
    です。 ( *Android* )

-   `cordova.file.externalDataDirectory` -
    外部ストレージ上の領域内で、アプリが使用するデータファイルを置く領域
    ( 子のディレクトリー ) です。 ( *Android* )

-   `cordova.file.externalCacheDirectory` -
    外部ストレージ上の領域内で、アプリがキャッシュに使用する領域 (
    子のディレクトリー ) です。 ( *Android* )

-   `cordova.file.externalRootDirectory` - 外部ストレージ ( SD カード )
    のルートです。 ( *Android*、\*BlackBerry 10\* )

-   `cordova.file.tempDirectory` - Temp ディレクトリーです。OS
    側がコンテンツを自由に削除できますが、このような挙動に頼るのではなく、このディレクトリーの処理は、アプリ側で常に行うべきです。
    ( *iOS*、\*OSX\*、\*windows\* )

-   `cordova.file.syncedDataDirectory` -
    同期対象である、アプリのファイルを格納します ( 例 : iCloud 間 )。 (
    *iOS*、\*windows\* )

-   `cordova.file.documentsDirectory` -
    対象のアプリだけが使用する、プライベートなファイルです。ただし、他のアプリ間ともなんらかの関係があります
    ( 例 : OFFICE ファイルなど )。\*OSX\* では、ユーザーの `~/Documents`
    ディレクトリーとなります。 ( *iOS*、\*OSX\* )

-   `cordova.file.sharedDirectory` -
    すべてのアプリ間で共有できる、グローバルなファイルを置けます。 (
    *BlackBerry 10* )

ファイルシステムの概要
----------------------

実装方法によっては異なることもありますが、`cordova.file.*`
プロパティーと端末内の物理パスの関係 ( マップ方法 )
を理解しておくことは有意義です。

### iOS のファイルシステムの概要

端末上のパス | cordova.file.* | iosExtraFileSystems | r/w	| 永続性の有無 | OS 側で削除 | 同期の有無 | プライベート
-----------|----------------|---------------------|-----|------------|------------|----------|-----------------
`/var/mobile/Applicati ons/<UUID>/` | applicationStorageDirectory | | r | N/A | N/A | N/A | Yes
`appname.app/` | applicationDirectory | bundle | r | N/A | N/A | N/A | Yes
`www/` |  |  | r | N/A | N/A | N/A | Yes
`Documents/` | documentsDirectory | documents | r/w | Yes | No | Yes | Yes
`NoCloud/` |  | documents-nosync | r/w | Yes | No | No | Yes
`Cloud/` | syncedDataDirectory |  | r/w | Yes | No | Yes | Yes
`Caches/` | cacheDirectory | cache | r/w | Yes* | Yes*** | No | Yes
`tmp/` | tempDirectory | | r/w | No** | Yes*** | No | Yes

\* アプリの再起動後・アップグレード後でも、このディレクトリーに置かれたファイルには影響が出ません。ただし、このディレクトリーのコンテンツの削除は、OS
側で、自由にできます。よって、削除された場合でも、アプリ側で再作成できる必要があります。

** アプリの再起動時でも、ごくまれな例外を除き、このディレクトリーに置かれたファイルには影響はでません。アップデート時には、ファイルは消去されてしまう場合があります。可能であれば、このディレクトリーのファイルは、アプリ側の任意のタイミングで削除できるようにしましょう。デフォルトのままだと、削除のタイミング、または、削除するか否かの決定は、OS
側で行われます。

*** このディレクトリーのコンテンツの削除は、必要に応じて、OS
側が行います。しかし、この OS
側の挙動に頼らずに、アプリが正常に動作するよう、開発者側で、必要に応じて削除できるようにしましょう。

### Android のファイルシステムの概要

端末上のパス | cordova.file.* | iosExtraFileSystems | r/w | 永続性の有無 | OS 側で削除 | プライベート
-----------|----------------|---------------------|-----|------------|------------|------------------
`file:///android_asset/` | applicationDirectory | assets | r | N/A | N/A | Yes
`/data/data/<app-id>/` | applicationStorageDirectory |  | r/w | N/A | N/A | Yes
`cache` | cacheDirectory | cache | r/w | Yes | Yes* | Yes
`files` | dataDirectory | files | r/w | Yes | No | Yes
`Documents`|  |	documents | r/w | Yes | No | Yes
`<sdcard>/` | externalRootDirectory | sdcard | r/w | Yes | No | No
`Android/data/<app-id>/` | externalApplicationStorageDirectory |  | r/w | Yes | No | No
`cache` | externalCacheDirectory | cache-external | r/w | Yes | No** | No
`files` | externalDataDirectory | files-external | r/w | Yes | No | No

\* このディレクトリーのコンテンツの削除は、定期的に、OS
側で行われます。しかし、この OS
側の挙動に頼らずに、アプリが正常に動作するよう、開発者側で、必要に応じて削除しましょう。また、ディレクトリーのコンテンツまたはキャッシュの削除は、ユーザー側でも、手動で行えるべきです。

** このディレクトリーのコンテンツの削除は、OS
側では行われません。コンテンツの処理は、開発者側で行います。また、ディレクトリーのコンテンツまたはキャッシュの削除は、ユーザー側でも手動で行えるべきです。

{{<note>}}
外部のストレージがマウントできない場合には、<code>cordova.file.external\\*</code> プロパティーは <code>null</code> になります。
{{</note>}}

### Windows のファイルシステムの概要

端末上のパス | cordova.file.* | r/w? | 永続性の有無 | OS 側で削除 | プライベート
-----------|----------------|------|------------|------------|------------------
`ms-appdata:///` | applicationDirectory | r | N/A | N/A | Yes
`local/` | dataDirectory | r/w | Yes | No | Yes
`local/` | cacheDirectory | r/w | No | Yes* | Yes
`local/` | tempDirectory | r/w | No | Yes* | Yes
`roaming/` | syncedDataDirectory | r/w | Yes | No | Yes

\* 定期的に、OS 側が、このディレクトリー内を削除します。

後方互換
--------

### Android 特有の動作

##### Android の永続的な保存場所 ( Persistent Stroge )

Android 端末には、永続的なファイル ( persistent file )
の保存に使用できる場所が複数あります。さまざまな想定および用法に関しての議論は、[こちらのページ ( 英語 )](http://developer.android.com/guide/topics/data/data-storage.html)
をご確認ください。

このプラグインの旧バーションでは、端末が SD カード (
または、同等のストレージ パーティション )
をマウントしたか否かを基準に、一時的なファイルと永続的なファイルの保存場所を、起動時に、プラグイン側で選択していました。SD
カードがマウントされた場合、または、大容量の内部ストレージ
パーティションが利用できた場合 ( 例 ： Nexus 端末 )
には、その領域のルートに、永続性的なファイルを保存してました。このため、すべての
Cordova アプリが、カード内のすべてのファイルを参照できました。\[
翻訳メモ ： 「 マウント 」 とは、PC 周辺機器を端末側が 「 認識 」
して、使用可能な状態にあることを指します。\]

SD
カードが使用できなかった場合、旧バージョンのプラグインでは、`/data/data/<packageId>`
下に、データを保存してました。この場合、アプリ間ではデータの処理は個別化されましたが、ユーザー間ではデータの共有ができました。

現在では、アプリの `config.xml` ファイルの preference
設定を使用して、内部 ( Internal )
の保存場所を使用するか、または、以前の設定 ( Compatibility )
をそのまま使用して、ファイルを保存するか選択することができます。この設定を行うには、次の記述のいずれかを、`config.xml`
ファイルに追加します。

{{<highlight xml>}}
<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="AndroidPersistentFileLocation" value="Compatibility" />
{{</highlight>}}

この記述を追加しない場合、ファイル操作プラグイン ( File プラグイン )
では、デフォルトとして、`Internal` ( 内部 )
を使用します。なお、preference
タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

このプラグインの旧バーション ( 3.0.0 より前 )
を実装したアプリの配布をすでに行っており、加えて、なんらかのファイルシステムにファイルを保存していた場合には、preference
を Compatibility に設定する必要があります (
データの保存先となるファイルシステムを、config.xml
で指定していないときも同様 )。Compatibility から Internal
に変更した場合、既存のユーザーは、以前使用していたファイルへアクセスできないことがあります
( 端末により、動作は異なります )。

ここ最近で開発されたアプリの場合、または、永続的なファイルシステムにファイルを以前保存したことがなかった場合、`Internal`
の設定を推奨します。

#### /android\_asset に対して行う処理の問題点

Android の asset ディレクトリー内に置かれたファイル ( 群 )
の一覧を取得する処理は、時間がかかることは周知のとおりですが、Android
プロジェクトのルートに `src/android/build-extras.gradle`
を追加で置けば、この処理時間を短縮できます ( Android 向け Cordova の
4.0.0 以上が必要 )。

#### Marshmallow 上で外部ストレージがマウントされていない場合の 「 書き込み 」 パーミッション

Marchmallow
では、外部のストレージへの書き込みおよび外部のストレージからの読み込みを行う場合、ユーザー側に許可を求めることを必須要件にしています。なお、`cordova.file.applicationStorageDirectory`
と `cordova.file.externalApplicationStorageDirectory`
への書き込みに関しては、[デフォルト](https://developer.android.com/guide/topics/data/data-storage.html#filesExternal)
でパーミッションがアプリ側に付与されているため、プラグイン側ではユーザー側に許可を求めませんが、外部のストレージがマウントされていないときだけ、通知の意味も込めて、ユーザー側の許可を求めます。また、同様に、なんらかの理由で外部のストレージがマウントされていない場合にも、`cordova.file.externalApplicationStorageDirectory`
に書き込みを行ってよいか、プラグイン側からユーザー側に確認します。

### iOS 特有の動作

-   `cordova.file.applicationStorageDirectory`
    は、読み取り専用です。このルートディレクトリーへファイルを保存しようとした場合、失敗します。よって、iOS
    がサポートしている他の `cordova.file.*` プロパティーを使用します (
    `applicationDirectory` と `applicationStorageDirectory`
    のみ、読み取り専用です )。

-   `FileReader.readAsText(blob, encoding)`

-   `encoding` パラメーターは使用できません。UTF-8
    形式のエンコーディングが常に使用されます。

#### iOS の永続的な保存場所 ( Persistent Stroge )

iOS 端末には、永続的なファイル ( persistent file )
の保存に使用できる場所が 2 つあります。1 つ目は Documents
ディレクトリー、2 つ目は Library
ディレクトリーです。このプラグインの旧バージョンでは、Documents
ディレクトリーのみに、永続性的なファイルを保存していました。ただ、この方法を使用すると、iTunes
では、アプリのファイルが、暴露されてしまう問題がありました。特に、エクスポートとは無関係なファイルを複数処理するアプリでは、問題となりました
( Documents
ディレクトリーは、本来、エクスポートを行うドキュメントをまとめて置くために使用されます
)。

現在では、アプリの `config.xml` ファイルの preference
設定を使用して、Documents ディレクトリーまたは Library
ディレクトリーのいずれかに、ファイルを保存するか選択できます。この設定を行う場合、次の記述のいずれかを、`config.xml`
ファイルに追加します。

{{<highlight xml>}}
<preference name="iosPersistentFileLocation" value="Library" />
<preference name="iosPersistentFileLocation" value="Compatibility" />
{{</highlight>}}

この記述を追加しない場合、ファイル操作プラグイン ( File プラグイン )
では、デフォルトとして、`Compatibility` を使用します。なお、preference
タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

旧バーション ( 1.0 より前 )
のプラグインを実装したアプリの配布をすでに行っている場合、加えて、そのとき、永続的なファイルシステム
( persistent filesystem ) にファイルを保存していた場合、preference を
`Compatibility` に設定します。`Library`
に場所を変更してしまうと、アプリをアップグレードしたときに、以前保存したファイルに、アクセスできなくなる場合があります。

ここ最近で開発されたアプリの場合、または、永続的なファイルシステムにファイルを以前保存したことがない場合、`Library`
の設定を推奨します。

アップグレード時の注意点
------------------------

公開されている仕様に近づくように、このプラグインの v1.0.0
から、`FileEntry` と `DirectoryEntry` の構造に修正を加えました。

以前のバーション ( 1.0.0 より前 ) のプラグインでは、`Entry`
オブジェクトの `fullPath` プロパティー内に、「
端末固有のファイル保存場所への絶対パス ( device-absolute-file-location )
」 を保存していました。典型的なパスは、次のようになっていました。

{{<highlight bash>}}
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)
{{</highlight>}}

また、これらのパスは、`Entry` オブジェクトの `toURL()`
メソッドを使用しても取得できました。

v1.0.0 では、\*HTML
ファイルシステムのルート構造に近似した\*、ファイルへのパスが `fullPath`
属性には置かれます。よって、上記の 2 つのパスは、`FileEntry`
オブジェクトの `fullPath` では、次のようになっています。

{{<highlight bash>}}
/path/to/file
{{</highlight>}}

現在でもアプリ側で 「 端末固有の絶対パス ( device-absolute-paths ) 」
を使用し、加えて、以前は、`Entry` オブジェクトの `fullPath`
プロパティーを使用して、これらの絶対パスを取得していた場合には、`entry.toURL()`
を使用するように、コードを更新してください。

後方互換性 ( backwards compatibility )
に関して付け加えると、現在でも、`resolveLocalFileSystemURL()`
メソッドに、「 端末固有の絶対パス ( device-absolute-paths ) 」
を渡せば、それに対応した `Entry` オブジェクトが返ってきます (
ただし、`TEMPORARY` または `PERSISTENT`
ファイルシステムに、ファイルが存在していることが前提です )。

なお、ファイル転送プラグイン ( File Transfer プラグイン ) でも、「
端末固有の絶対パス ( device-absolute-paths ) 」
を以前使用していたため、同じような問題がありました ( 現在も使用できます
)。現在では、ファイルシステムの URL ( FileSystem URL )
を使用し、支障なく動作するように更新されています。よって、このプラグインを使用する場合、`entry.fullPath`
を `entry.toURL()`
に置き換えれば、端末上のファイルを支障なく操作できるはずです。

v1.1.0 では、`toURL()` の戻り値は、可能であれば、file:// 形式の絶対 URL
を返すように仕様が変わりました (
[CB-6394](https://issues.apache.org/jira/browse/CB-6394) を参照のこと
)。 cdvfile: 形式の URL を取得したい場合には、現在、`toInternalURL()`
を使用できます。このメソッドでは、次の形式の ファイルシステム URL (
FileSystem URL ) を返します。

{{<highlight bash>}}
cdvfile://localhost/persistent/path/to/file
{{</highlight>}}

この形式で、ファイルを、一意に識別できます。

cdvfile プロトコル
------------------

### 目的

「
`cdvfile://localhost/永続性の有無|temporary|another-fs-root*/path/to/file`
」
形式のファイルパスを使用できます。この形式は、プラットフォームには依存せず、多くのプラットフォームでサポートされています。また、基本
Cordova プラグイン ( Core Cordova プラグイン ) でも、この cdvfile
形式のパスがサポートされています。たとえば、`ファイル転送プラグイン` (
File Transfer プラグイン ) を使用して、mp3 ファイルを、cdvfile
形式で指定された場所へダウンロードすることができます。また、`メディア操作プラグイン`
( Media プラグイン ) を使用すれば、そのファイルを再生できます。

{{<note>}}
使用できるファイルシステムのルートに関しては、「 {{<link href="#ファイルの保存場所" title="ファイルの保存場所">}} 」、「
{{<link title="ファイルシステムの一覧 ( 外部サイト)" href="https://www.npmjs.com/package/cordova-plugin-file#file-system-layouts">}} 」、「 {{<link title="プラグインの設定" href="#プラグインの設定-任意">}} をご確認ください。
{{</note>}}

タグの `src` に `cdvfile` を使用する場合、取得した fileEntry の
`toURL()` メソッドを使用すれば、`cdvfile` のパスをネイティブパス (
native path ) に変換することができます。fileEntry
は、`resolveLocalFileSystemURL`
を使用して取得できます。下に例を示しています。また、 `cdvfile://`
のパスをDOM内で直接使うこともできます。使用例です。

{{<highlight html>}}
<img src="cdvfile://localhost/persistent/img/logo.png" />
{{</highlight>}}

この方法を使用する場合には、次の Content Security
ルールが追加で必要となります。

-   index ページの `Content-Security-Policy` の meta タグに、`cdvfile:`
    スキームを追加します。

    {{<highlight html>}}<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap:``\ **cdvfile:**\ ``https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">{{</highlight>}}

-   `<access origin=\"cdvfile://*\" />` を `config.xml` に追加します。

**cdvfile:// からネイティブパス ( native path ) への変換**

{{<highlight javascript>}}
resolveLocalFileSystemURL('cdvfile://localhost/temporary/path/to/file.mp4', function(entry) {
    var nativePath = entry.toURL();
    console.log('Native URI: ' + nativePath);
    document.getElementById('video').src = nativePath;
}
{{</highlight>}}

**ネイティブパス ( native path ) から cdvfile:// への変換**

{{<highlight javascript>}}
resolveLocalFileSystemURL(nativePath, function(entry) {
    console.log('cdvfile URI: ' + entry.toInternalURL());
}
{{</highlight>}}

**基本 Cordova プラグイン ( Cordova コアプラグイン ) で cdvfile
を使用する場合**

{{<highlight javascript>}}
fileTransfer.download(uri, 'cdvfile://localhost/temporary/path/to/file.mp3', function (entry) { ...
{{</highlight>}}

{{<highlight javascript>}}
var my_media = new Media('cdvfile://localhost/temporary/path/to/file.mp3', ...);
my_media.play();
{{</highlight>}}

### cdvfile 特有の動作

-   DOM 上での `cdvfile://` 形式のパスは、Windows では使用できません (
    代わりに、ネイティブの形式にパスを変換します )。

エラーコードの種類と解説
------------------------

エラーが投げられた場合、次のいずれかのコードが使用されています。

コード | 定数
-----|------------------
`1` | `NOT_FOUND_ERR`
`2` | `SECURITY_ERR`
`3` | `ABORT_ERR`
`4` | `NOT_READABLE_ERR`
`5` | `ENCODING_ERR`
`6` | `NO_MODIFICATION_ALLOWED_ERR`
`7` | `INVALID_STATE_ERR`
`8` | `SYNTAX_ERR`
`9` | `INVALID_MODIFICATION_ERR`
`10` | `QUOTA_EXCEEDED_ERR`
`11` | `TYPE_MISMATCH_ERR`
`12` | `PATH_EXISTS_ERR`

プラグインの設定 ( 任意 )
-------------------------

使用するファイルシステムは、プラットフォーム毎に設定できます。iOS と
Android に関しては、`config.xml`
内のタグを使用して、インストール対象のファイルシステムを指定できます。デフォルトでは、すべてのファイルシステムのルートディレクトリーを利用できます。

{{<highlight xml>}}
<preference name="iosExtraFilesystems" value="library,library-nosync,documents,documents-nosync,cache,bundle,root" />
<preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,assets,root" />
{{</highlight>}}

### Android

-   `files`: アプリが使用する、ファイルストレージ用のディレクトリーです
    ( 内部 )。
-   `files-external`:
    アプリが使用する、ファイルストレージ用のディレクトリーです ( 外部
    )。
-   `sdcard`:
    グローバルに使用する、外部のファイルストレージ用のディレクトリーです
    ( SD カードであれば、SD カードのルートとなります
    )。使用する場合、`android.permission.WRITE_EXTERNAL_STORAGE`
    のパーミッション ( 許可 ) が必要です。
-   `cache`: アプリが使用する、キャッシュ用のディレクトリーです ( 内部
    )。
-   `cache-external`: アプリが使用する、キャッシュ用のディレクトリーです
    ( 外部 )。
-   `assets`: アプリのバンドル（読み取り専用）
-   `root`: 端末のすべてのファイルシステム

他にも、Android では 「 documents 」
と呼ばれるファイルシステムが使用できます ( このファイルシステムは、「
files 」 ファイルシステム内の 「 /Documents/ 」 のサブディレクトリーです
)。

### iOS

-   `library`: アプリの Library ディレクトリーです。
-   `documents`: アプリの Documents ディレクトリーです。
-   `cache`: アプリの Cache ディレクトリーです。
-   `bundle`: bundle container です (
    ディスク上のアプリ本体の格納先、読み取り専用 )。
-   `root`: 端末のすべてのファイルシステム

デフォルトでは、 library と documents ディレクトリーは、iCloud
と同期できます。また、`library-nosync` と `documents-nosync` の 2
つのファイルシステムも追加して使用できます。これらのファイルシステムは、それぞれ、
`/Library` と `/Documents`
ファイルシステム下に置かれますが、同期の対象外となるディレクトリーです。

サンプルコード : ファイルの作成、ディレクトリーの作成、ファイルへの書き込み、ファイルの読み込み、ファイルへの追記
-----------------------------------------------------------------------------------------------------------------

ファイル操作プラグインを使用して、一時的または永続的なストレージへ (
サンドボックス化された、アプリのストレージを使用
)、ならびに、プラットフォーム側が指定する、他のストレージへファイルを保存できます。下に例示しているコードでは、次の処理方法を確認できます。

-   [ファイルシステムへのアクセス](#永続的なファイルの作成)
-   Cordova の FILE URL を使用した、 [ファイルの保存](#既存のバイナリーファイルの保存) ( 詳細は、上記の 「 ファイルの保存場所 」 を参照のこと )
-   [ファイル](#永続的なファイルの作成) と [ディレクトリー](#ディレクトリーの作成) の作成
-   [ファイルへの書き込み](#ファイルへの書き込み)
-   [ファイルの読み込み](#ファイルの読み込み)
-   [ファイルへの追記](#既存のバイナリーファイルの保存)
-   [画像ファイルの表示](#画像ファイルの表示)

### 永続的なファイルの作成

ファイル操作プラグイン提供の API を使用する前に、`requestFileSystem`
を使用すれば、ファイルシステムへアクセスすることができます。また、`requestFileSystem`
の実行時には、PERSISTENT または TEMPORARY
のいずれかを指定できます。PERSISTENT
にストレージを指定した場合、ユーザーの許可がない限り、ストレージの削除はできません。

`requestFileSystem`
を使用してファイルシステムへアクセスした場合、サンドボックス化されたファイルシステムへのアクセスのみ許可され
( サンドボックス化した場合、対象のアプリのみ、ストレージにアクセス可能
)、端末上の他のファイルシステムへのアクセスはできません。サンドボックス化されたストレージ以外へアクセスする場合には、window.requestLocalFileSystemURL
などのメソッドを使用します ( 参考として、下の 「 *ファイルへの追記* 」
を参照のこと )。

次のコードでは、永続的なストレージを作成しています ( PERSISTENT を指定
)。

{{<note>}}
WebView クライアント向け ( ブラウザーではなく )
またはネイティブアプリ向け ( Windows )
に開発をしている場合、永続的なストレージを使用するときでも、
<code>requestQuota</code> を使用する必要はありません。
{{</note>}}

{{<highlight javascript>}}
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

    console.log('file system open: ' + fs.name);
    fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

        console.log("fileEntry is file?" + fileEntry.isFile.toString());
        // fileEntry.name == 'someFile.txt'
        // fileEntry.fullPath == '/someFile.txt'
        writeFile(fileEntry, null);

    }, onErrorCreateFile);

}, onErrorLoadFs);
{{</highlight>}}

成功時のコールバックには、FileSystem オブジェクト ( fs )
が渡されます。DirectoryEntry
オブジェクトを返すように指定する場合には、`fs.root`
を使用します。また、`fs.root` は、ファイルの作成/取得時にも使用できます
( `getFile` を実行 )。ここでは、`fs.root` は、DirectoryEntry
オブジェクトであり、同時に、サンドボックス化されたファイルシステム内に作成された、永続的なストレージへのリファレンスとなります。

`getFile` の成功時のコールバックには、FileEntry
オブジェクトが渡されます。FileEntry
オブジェクトを使用して、ファイルへの書き込み・ファイルの読み込みを行います。

### 一時的に使用するファイルの作成

次の例では、一時的なストレージを作成しています ( TEMPORARY を指定
)。端末上のメモリーが少なくなった場合、OS
側がこのストレージを削除することもあります。

{{<highlight javascript>}}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);
    createFile(fs.root, "newTempFile.txt", false);

}, onErrorLoadFs);
{{</highlight>}}

一時的なストレージを使用する場合、`getFile`
を実行して、ファイルの作成/取得を行えます。永続的なストレージと同様、このメソッドを使用して、FileEntry
オブジェクトの作成/取得を行えます。作成/取得後は、ファイルの読み込み・ファイルへの書き込みを行えます。

{{<highlight javascript>}}
function createFile(dirEntry, fileName, isAppend) {
    // Creates a new file or returns the file if it already exists.
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

        writeFile(fileEntry, null, isAppend);

    }, onErrorCreateFile);

}
{{</highlight>}}

### ファイルへの書き込み

FileEntry オブジェクトの作成/取得後は、`createWriter`
を実行して、ファイルへの書き込みを行います。このメソッドの成功時のコールバックに、FileWriter
オブジェクトが渡されるので、FileWriter の `write`
メソッドを実行して、ファイルへの書き込みを行います。

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

### ファイルの読み込み

既存ファイルの読み込み時にも、FileEntry
オブジェクトを使用します。最初に、FileEntry の file プロパティー
を使用して、ファイルへのリファレンスを取得します。次に、FileReader
オブジェクトを作成します。読み込み処理には、`readAsText`
などのメソッドを使用できます。読み込み処理の完了後、`this.result`
には、処理結果が保存されています。

{{<highlight javascript>}}
function readFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            console.log("Successful file read: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);
        };

        reader.readAsText(file);

    }, onErrorReadFile);
}
{{</highlight>}}

### ファイルへの追記 ( ファイルシステムへのアクセス時には、上記とは異なるメソッドを使用してみます )

ファイルの新規作成ではなく、既存のファイルに対して内容を追記したい場合もあります。この例では、window.resolveLocalFileSystemURL
を使用した追記方法を記します。ここでは、cordova.file.dataDirectory (
Cordova の File URL )
を使用します。成功時のコールバックに、DirectoryEntry
オブジェクトが返ってくるので、このオブジェクトを使用して追記処理を行います。

{{<highlight javascript>}}
window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
    console.log('file system open: ' + dirEntry.name);
    var isAppend = true;
    createFile(dirEntry, "fileToAppend.txt", isAppend);
}, onErrorLoadFs);
{{</highlight>}}

また、サンドボックス化されたファイルシステム以外へアクセスする場合にも、`resolveLocalFileSystemURL`
を使用できます。詳細は、上記の 「 *ファイルの保存場所* 」
をご確認ください。多くの場合、ストレージの場所はプラットフォーム毎に異なります。また、`resolveLocalFileSystemURL`
へ渡す File URL には、\*cdvfile プロトコル\* 形式も使用できます。

追記処理における `createFile`
関数に関しても、先ほど解説した内容と異なる点はありません ( 「
一時的に使用するファイルの作成 」 を参照のこと )。`createFile`
を実行し、次に、`writeFile` を実行します。`writeFile`
では、追記処理であることを指定します。

FileWriter オブジェクトの取得後、`seek`
メソッドを呼び出し、追記位置を指定します。また、ここでは、ファイルが存在するかも確認しています。seek
の処理完了後、FileWriter の write メソッドを実行します。

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj, isAppend) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file read...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file read: " + e.toString());
        };

        // If we are appending data to file, go to the end of the file.
        if (isAppend) {
            try {
                fileWriter.seek(fileWriter.length);
            }
            catch (e) {
                console.log("file doesn't exist!");
            }
        }
        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

### 既存のバイナリーファイルの保存

ここまでは、サンドボックス化したファイルシステムの作成とファイルへの書き込み方法を解説してきました。ここからは、外部にあるファイルへのアクセス方法、ならびに、このような既存ファイルを端末上へ保存するための処理方法を解説します。ここでは、XHR
リクエストを使用してファイルを取得し、サンドボックス化されたファイルシステムのキャッシュに、取得したファイルを保存します。

ファイルを取得する前に、`requestFileSystem` を使用して、ファイルシステム
( FileSystem )
へのリファレンスを取得します。以前と同じように、window.TEMPORARY
を指定し、メソッドを実行します。実行後、返ってきた FileSystem
オブジェクト ( fs )
には、サンドボックス化されたファイルシステム内のキャッシュへの情報が格納されています。次に、`fs.root`
を使用して、必要な DirectoryEntry オブジェクトを取得します。

{{<highlight javascript>}}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);
    getSampleFile(fs.root);

}, onErrorLoadFs);
{{</highlight>}}

getSampleFile 内の処理を記述します。ここでは、XHR
リクエストを使用して、Blob 形式の画像を取得しています。saveFile
関数へ渡す引数として、以前に取得していた、DirectoryEntry
のリファレンスを使用していること以外は、Cordova
固有のコードは特にありません。この後の処理で、Blob
形式の画像の保存、ならびに、ファイルの読み込みと表示を、それぞれ行っていきます。

{{<highlight javascript>}}
function getSampleFile(dirEntry) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cordova.apache.org/static/img/cordova_bot.png', true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (this.status == 200) {

            var blob = new Blob([this.response], { type: 'image/png' });
            saveFile(dirEntry, blob, "downloadedImage.png");
        }
    };
    xhr.send();
{{</highlight>}}

{{<note>}}
Cordova 5 以降、セキュリティー上の理由により、次のコードの実行には、Content-Security-Policy 要素内で、 <code>http://cordova.apache.org</code> を設定する必要があります ( <code>index.html</code> 内 )。
{{</note>}}

ファイルの取得後、新規作成したファイルへコンテンツをコピーします。下の `DirectoryEntry` オブジェクトは、キャッシュ先にすでに紐づけされています。

{{<highlight javascript>}}
function saveFile(dirEntry, fileData, fileName) {

    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

        writeFile(fileEntry, fileData);

    }, onErrorCreateFile);
}
{{</highlight>}}

writeFile では、引数として、`Blob` オブジェクト ( `dataObj` )
を渡し、新規のファイル上に保存します。

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj, isAppend) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            if (dataObj.type == "image/png") {
                readBinaryFile(fileEntry);
            }
            else {
                readFile(fileEntry);
            }
        };

        fileWriter.onerror = function(e) {
            console.log("Failed file write: " + e.toString());
        };

        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

ファイルへの書き込み終了後、ファイルの読み込みと表示をします。バイナリー形式のデータとして画像を保存しているので、`FileReader.readAsArrayBuffer` を使用して、データを読み込みます。

{{<highlight javascript>}}
function readBinaryFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {

            console.log("Successful file write: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);

            var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
            displayImage(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}
{{</highlight>}}

データの読み込み後、次のようなコードを使用すれば、画像を表示できます。Blob
形式の画像 ( 表示用 ) を取得するため、 `window.URL.createObjectURL`
を使用します。

{{<highlight javascript>}}
function displayImage(blob) {

    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('imageFile');
    // Note: Use window.URL.revokeObjectURL when finished with image.
    elem.src = window.URL.createObjectURL(blob);
}
{{</highlight>}}

### 画像ファイルの表示

FileEntry を使用して画像を表示する場合には、`toURL`
メソッドを使用できます。

{{<highlight javascript>}}
function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('imageFile');
    elem.src = fileEntry.toURL();
}
{{</highlight>}}

プラットフォームにより異なる URI を使用して ( FileEntry の代わりに
)、画像を表示させる場合、index.html の Content-Security-Policy
要素に、URI のホストを指定します。Windows 10 では、`ms-appdata:`
を使用します。次に例を記します。

{{<highlight html>}}
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
{{</highlight>}}

### ディレクトリーの作成

ここでは、ストレージのルートに、ディレクトリーを作成します。書き込み可能なストレージ
( DirectoryEntry )
であれば、次のコードを使用できます。ここでは、createDirectory に fs.root
を渡して、アプリのキャッシュ用ディレクトリーを使用します ( FileSystem
オブジェクトの取得時、window.TEMPORARY を設定したことを前提とします )。

次のコードでは、アプリのキャッシュ用ディレクトリー内に
/NewDirInRoot/images
フォルダーを作成しています。各プラットフォームのファイルシステムの詳細は、上記の
「 *ファイルシステムの概要* 」 をご確認ください。

{{<highlight javascript>}}
function createDirectory(rootDirEntry) {
    rootDirEntry.getDirectory('NewDirInRoot', { create: true }, function (dirEntry) {
        dirEntry.getDirectory('images', { create: true }, function (subDirEntry) {

            createFile(subDirEntry, "fileInNewSubDir.txt");

        }, onErrorGetDir);
    }, onErrorGetDir);
}
{{</highlight>}}

サブディレクトリーを作成する場合には、上記のコードのように、各フォルダーをそれぞれ作成する必要があります。
