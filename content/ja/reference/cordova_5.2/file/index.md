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
ファイル操作 プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-file/blob/master/RELEASENOTES.md#300-aug-18-2015">3.0.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-file) をご確認ください。

</div>

このプラグインでは、独自の File API ( 以後、「 ファイル操作 API 」
と呼称します ) を使用して、端末内のファイルへアクセス (
読み取り/書き込み ) します。

このプラグインは、http://www.w3.org/TR/FileAPI/ ( File API )
の仕様を含む、次の仕様に準拠して構築されています。

\[ File API: Directories and System \] ( 現在は廃止 ) :
<http://www.w3.org/TR/2012/WD-file-system-api-20120417/>
が最新版です。なお、このプラグインで使用されているコードのほとんどは、http://www.w3.org/TR/2011/WD-file-system-api-20110419/
の仕様がまだサポートされていた頃に作成されたものです )

\[ File API: Writer \]
<http://dev.w3.org/2009/dap/file-system/file-writer.html>

このプラグインの使用方法に関しては、HTML5 Rocks の
[こちらの記事](http://www.html5rocks.com/en/tutorials/file/filesystem/)
をご確認ください。

また、他のストレージに関しては、Apache Cordova ドキュメントの [『
ストレージ ガイド
』](http://cordova.apache.org/docs/en/edge/cordova_storage_storage.md.html)
をご確認ください。

このプラグインでは、グローバルオブジェクト 「 `cordova.file` 」
を使用します。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(cordova.file);
    }

プラグイン ID
-------------

    cordova-plugin-file

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`File` プラグインを 有効 &lt;add\_plugins&gt;
にします。

サポート対象のプラットフォーム
------------------------------

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Firefox OS
-   iOS
-   OS X
-   Windows Phone 7 and 8\*
-   Windows 8\*
-   Windows\*
-   Browser

\*These platforms do not support `FileReader.readAsArrayBuffer` or
`FileWriter.write(blob)`.

API の解説
----------

### ファイルの保存場所

v1.2.0 以降、ファイルシステムのディレクトリーへのパスを示す URL
が使用できるようになりました。この URL
の形式は、\*<file:///path/to/spot/*>
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

### Android 特有の動作

Android の永続的な保存場所 ( Persistent Stroge )
\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

Android 端末には、永続的なファイル ( persistent file )
の保存に使用できる場所が複数あります。さまざまな想定および用法に関しての議論は、[こちらのページ
( 英語
)](http://developer.android.com/guide/topics/data/data-storage.html)
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

    <preference name="AndroidPersistentFileLocation" value="Internal" />

    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

この記述を追加しない場合、ファイル操作プラグイン ( File プラグイン )
では、デフォルトとして、`Internal` ( 内部 )
を使用します。なお、preference
タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

旧バーション ( 3.0.0 より前 )
のプラグインを実装したアプリの配布をすでに行っている場合、および、そのとき、永続的なファイルシステム
( persistent filesystem )
にファイルを保存していた場合、加えて、現在、config.xml
内で永続的なファイルシステムの場所を特に設定していなければ、preference
を `Compatibility` に設定します。端末間で動作は異なりますが、"Internal"
に場所を変更してしまうと、アプリをアップグレードしたときに、以前保存したファイルに、アクセスできなくなる場合があります。

ここ最近で開発されたアプリの場合、または、永続的なファイルシステムにファイルを以前保存したことがなかった場合、`Internal`
の設定を推奨します。

#### /android\_asset に対して行う処理の問題点

Android の asset ディレクトリー内に置かれたファイル ( 群 )
の一覧を取得する処理は、時間がかかることは周知のとおりですが、Android
プロジェクトのルートに `src/android/build-extras.gradle`
を追加で置けば、この処理時間を短縮できます ( Android 向け Cordova の
4.0.0 以上が必要 )。

### iOS 特有の動作

-   `cordova.file.applicationStorageDirectory`
    は、読み取り専用です。このルートディレクトリーへファイルを保存しようとした場合、失敗します。よって、iOS
    がサポートしている他の `cordova.file.*` プロパティーを使用します (
    `applicationDirectory` と `applicationStorageDirectory`
    のみ、読み取り専用です )。
-   `FileReader.readAsText(blob, encoding)`
-   `encoding` パラメーターは使用できません。UTF-8
    形式のエンコーディングが常に使用されます。

iOS の永続的な保存場所 ( Persistent Stroge )
\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

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

    <preference name="iosPersistentFileLocation" value="Library" />

    <preference name="iosPersistentFileLocation" value="Compatibility" />

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

### Firefox OS 特有の動作

Firefox OS 自体は、File System API をサポートしていませんが、indexedDB
の 「 シム ( shim ) 」 としてならば、File System API
を組み込むことができます。

-   ディレクトリー内にコンテンツがある場合でも、ディレクトリーを削除します。
-   ディレクトリー用のメタデータは使用できません。
-   `copyTo` と `moveTo`
    メソッドは、ディレクトリーに対しては使用できません。

次のパスを使用できます。

\* `applicationDirectory` -
アプリのパッケージに含まれているローカルファイル ( local file )
へアクセスする場合には、`xhr` を使用します。

\* `dataDirectory` - 永続的なデータファイル用 ( アプリ毎 ) です。

\* `cacheDirectory` - キャッシュファイル用 (
アプリの再起動後でも残っているファイル )
です。ディレクトリー内のコンテンツの削除は、OS
に頼らずに、アプリ側で行うことを推奨します。

### Browser 特有の動作

#### 共通する動作と注意点

-   各 browser
    は、独自のサンドボックス化されたファイルシステムを使用しています。IE
    と Firefox では、IndexedDB を基礎として使用します。すべての browser
    において、パス ( Path )
    の指定時には、スラッシュを使用して、ディレクトリーを区切ります。
-   ディレクトリーエントリー ( Directory Entry )
    の作成は、順番に行います。たとえば、`fs.root.getDirectory('dir1/dir2', {create:true}, successCallback, errorCallback)`
    では、dir1 がすでに作成されていない場合には、エラーになります。
-   永続的なストレージを使用する場合、このプラグインでは、アプリの初回起動時に、ユーザーに許可を求めます。
-   このプラグインでは、`cdvfile://localhost` ( ローカルのリソースが対象
    ) のみ使用できます ( 外部のリソースへのアクセス時には、`cdvfile`
    は使用できません )。
-   このプラグインは、[File System API の 「 8.3 Naming restrictions (
    命名規則 )
    」](http://www.w3.org/TR/2011/WD-file-system-api-20110419/#naming-restrictions)
    には準拠していません。
-   Blob と File の `close` 関数は使用できません。
-   このプラグインでは、`FileSaver` と `BlobBuilder`
    は使用できません。また、スタブ ( stub ) もありません。
-   このプラグインでは、`requestAllFileSystems`
    は使用できません。また、この関数は、仕様にも記されていません。
-   既存のディレクトリーに対して `create: true`
    フラグを設定している場合、ディレクトリー内のエントリーは削除できません。
-   コンストラクタを使用して作成したファイルは使用できません。代わりに、entry.file
    メソッドを使用して作成します。
-   blob URL の記述方式は、各 browser 毎に異なります。
-   `readAsDataURL` 関数は使用できます。ただし、Chrome
    で使用されるメディアタイプ ( mediatype ) は、エントリー ( entry
    )名に付けられている拡張子に影響されます。また、IE
    のメディアタイプは、常に空白です ( 仕様によれば、`text-plain` に相当
    )。Firefox のメディアタイプは、常に 「 `application/octet-stream` 」
    です。たとえば、コンテンツが `abcdefg` の場合、Firefox であれば 「
    `data:application/octet-stream;base64,YWJjZGVmZw==` 」、IE であれば
    「 `data:;base64,YWJjZGVmZw==` 」、Chrome であれば 「
    `data:<mediatype は entry 名に付けられている拡張子に影響される>;base64,YWJjZGVmZw==`
    」 を返します。
-   `toInternalURL` は、「 `file:///persistent/path/to/entry` 」
    形式のパスを返します ( Firefox、IE )。Chrome の場合、「
    `cdvfile://localhost/persistent/file` 」 形式のパスを返します。

#### Chrome 特有の動作

Chrome のファイルシステムは、device ready
イベント後も、すぐには使用できません。回避策として、次のように、`filePluginIsReady`
イベントをサブスクライブ ( subscribe/購読 ) します。 \[ 翻訳者メモ:
JavaScript における 「 subscribe 」
は、サブスクライブ/購読などと、検索エンジン上では訳されています。イベントにリスナーを登録する処理を指しているので、「
監視 」 するくらいの意味でとらえるとわかりやすいかと思います。\]

> 例 :
>
> ``` {.sourceCode .javascript}
> window.addEventListener('filePluginIsReady', function(){ console.log('File plugin is ready');}, false);
> ```

なお、`window.isFilePluginReadyRaised`
関数を使用すれば、イベントが発火したか否かを確認できます。

-   Chrome では、window.requestFileSystem の実行時 ( TEMPORARY と
    PERSISTENT のいずれも )
    に設定できるストレージ容量の割り当てに制限はありません。\[
    翻訳者メモ ： 原文 「 window.requestFileSystem TEMPORARY and
    PERSISTENT filesystem quotas are not limited in Chrome. 」。Chrome
    Developer
    ページでは、ハードドライブの上限を超えた割り当て要求の場合、システム側からエラーが返ってくると記述されていることから、「
    割り当て要求自体は無制限にできるが、ハードウェアの上限は超えられない
    」
    と読むこともできます。参考として、https://developer.chrome.com/apps/offline\_storage
    もご確認ください。\]
-   Chrome において永続的なストレージ ( persistent storage )
    の容量を増やす場合には、`window.initPersistentFileSystem`
    メソッドを使用します。デフォルトでは、永続的なストレージへの割り当ては、5
    MB となっています。
-   「 `file:///` 」 プロトコル経由で API を使用する場合 ( `file:///`
    経由でアプリをデバッグする場合など )、「
    `--allow-file-access-from-files` 」 を Chrome
    の起動オプションとして使用します。
-   `File` オブジェクトは、既存の `エントリー` ( Entry )
    の取得時に、`{create:true}`
    のフラグを立てている場合、更新できません。
-   Chrome では、`event.cancelable` プロパティーは、true
    に設定されています。[こちらの仕様](http://dev.w3.org/2009/dap/file-system/file-writer.html)
    とは、逆の設定になっています。
-   ホスト側となるアプリによっても異なりますが、Chrome の `toURL`
    関数は、`filesystem:` が先頭に付いたパスを返します。たとえば、「
    `filesystem:file:///persistent/somefile.txt` 」、「
    `filesystem:http://localhost:8080/persistent/somefile.txt` 」
    となります。
-   `toURL` 関数の実行結果には、ディレクトリーエントリー ( Directory
    Entry ) の場合、URL の末尾につけるスラッシュ (
    トレイリングスラッシュ/Trailing Slash )
    がつけられていません。なお、Chrome
    では、トレイリングスラッシュ付きの URL
    のディレクトリーでも、正しく解決 ( resolve ) してくれます ( 原文 「
    Chrome resolves directories with slash-trailed urls correctly
    though. 」 )。
-   `resolveLocalFileSystemURL` メソッドに渡される `url`
    の先頭には、`filesystem`
    が付記されている必要があります。よって、`resolveLocalFileSystemURL`
    の `url` パラメーターは、たとえば、「
    `filesystem:file:///persistent/somefile.txt` 」
    となります。一方、Android では、「 `file:///persistent/somefile.txt`
    」 となっています。
-   廃止された `toNativeURL` 関数は使用できません。また、スタブ ( stub )
    もありません。
-   `setMetadata` 関数は、仕様には記されていないため、使用できません。
-   存在しないファイルシステムをリクエストした場合には、SYNTAX\_ERR(code: 8)
    の代わりに、INVALID\_MODIFICATION\_ERR (code: 9) が投げられます。
-   すでに存在するファイルまたはディレクトリーを、exclusive = true
    設定で作成する場合には、PATH\_EXISTS\_ERR(code: 12)
    の代わりに、INVALID\_MODIFICATION\_ERR (code: 9) が投げられます。
-   ファイルシステムのルート上で、removeRecursively
    を呼び出した場合には、NO\_MODIFICATION\_ALLOWED\_ERR(code: 6)
    の代わりに、INVALID\_MODIFICATION\_ERR (code: 9) が投げられます。
-   存在しないディレクトリーに対して、moveTo
    を実行したときには、NOT\_FOUND\_ERR(code: 1)
    の代わりに、INVALID\_MODIFICATION\_ERR (code: 9) が投げられます。

#### IndexedDB 使用時の特有の動作 ( Firefox と IE )

-   「 `.` 」 と 「 `..` 」 は使用できません。
-   IE では、`file:///` 形式は使用できず、http://localhost:xxxx
    形式のみ使用できます。
-   Firefox では、ファイルシステムのサイズに制限はありませんが、50 MB
    を拡張するたびに、ユーザー側に許可を求めます。IE10 では、10 MB (
    ファイルシステムの処理に、AppCache と IndexedDB を併用する場合 )
    まで、許可を得ずに使用でき、それ以上に達すると上限 ( 1
    サイトあたり、250 MB まで )
    まで使用するか、ユーザー側に許可を求めます。よって、Firefox と IE
    では、`requestFileSystem` 関数で `容量の割り当て`
    に関するパラメーターを設定しても、ファイルシステムの動作に影響を与えません
    ( 参考リンク :
    <http://www.html5rocks.com/ja/tutorials/offline/quota-research/> )。
-   仕様では、`readAsBinaryString`
    関数に関しては記されていません。また、IE
    では使用できません。また、スタブ ( stub ) もありません。
-   `file.type` は、常に、null となります。
-   すでに削除されている、DirectoryEntry
    インスタンスのコールバックの実行結果を使用して、エントリー ( Entry )
    を作成してはいけません。作成した場合、いわゆる 「
    保留状態のエントリー ( hanging entry ) 」 となります。
-   更新後のファイルをすぐに読み込む場合、まず、このファイルの新規インスタンスを作成する必要があります。
-   `setMetadata` 関数 ( 仕様には記載なし ) では、`modificationTime`
    の更新のみ行えます。
-   `copyTo` と `moveTo`
    メソッドは、ディレクトリーに対しては使用できません。ディレクトリー用のメタデータは使用できません。
-   Entry.remove と directoryEntry.removeRecursively
    は、コンテンツが置かれているディレクトリーに対しても使用できます。
    nn\[ 翻訳者メモ ：
    混乱を避けるため、一部訳していない文もあります。なお、翻訳時に行ったリサーチでは、remove()
    は空のディレクトリーに対して、removeRecursively
    はコンテンツが置いてあるディレクトリーおよびそのサブディレクトリーに対して使用できるとありました。
    \]
-   `abort` と `truncate` 関数は使用できません。
-   progress
    イベントは発火しません。たとえば、次のハンドラーは実行されません。

例 :

> ``` {.sourceCode .javascript}
> writer.onprogress = function() { /*commands*/ };
> ```

### アップグレード時の注意点

公開されている仕様に近づくように、このプラグインの v1.0.0
から、`FileEntry` と `DirectoryEntry` の構造に修正を加えました。

以前のバーション ( 1.0.0 より前 ) のプラグインでは、`Entry`
オブジェクトの `fullPath` プロパティー内に、「
端末固有のファイル保存場所への絶対パス ( device-absolute-file-location )
」 を保存していました。典型的なパスは、次のようになっていました。

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

また、これらのパスは、`Entry` オブジェクトの `toURL()`
メソッドを使用しても取得できました。

v1.0.0 では、\*HTML
ファイルシステムのルート構造に近似した\*、ファイルへのパスが `fullPath`
属性には置かれます。よって、上記の 2 つのパスは、`FileEntry`
オブジェクトの `fullPath` では、次のようになっています。

    /path/to/file

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

    cdvfile://localhost/persistent/path/to/file

この形式で、ファイルを、一意に識別できます。

### cdvfile プロトコル

**目的**

「
`cdvfile://localhost/persistent|temporary|another-fs-root*/path/to/file`
」
形式のファイルパスを使用できます。この形式は、プラットフォームには依存せず、多くのプラットフォームでサポートされています。また、基本
Cordova プラグイン ( Core Cordova プラグイン ) でも、この cdvfile
形式のパスがサポートされています。たとえば、`ファイル転送プラグイン` (
File Transfer プラグイン ) を使用して、mp3 ファイルを、cdvfile
形式で指定された場所へダウンロードすることができます。また、`メディア操作プラグイン`
( Media プラグイン ) を使用すれば、そのファイルを再生できます。

**Note**: See [ファイルの保存場所](#where-to-store-files), [File System
Layouts](#file-system-layouts) and [Configuring the
Plugin](#configuring-the-plugin-optional) for more details about
available fs roots.

タグの `src` に `cdvfile` を使用する場合、取得した fileEntry の
`toURL()` メソッドを使用すれば、`cdvfile` のパスをネイティブパス (
native path ) に変換することができます。fileEntry
は、`resolveLocalFileSystemURL`
を使用して取得できます。下に例を示しています。

また、`cdvfile://` パスは、DOM
上で直接使用することもできます。次に例を示します。

``` {.sourceCode .html}
<img src="cdvfile://localhost/persistent/img/logo.png" />
```

**注意**: この方法を使用する場合には、次の Content Security
ルールが追加で必要となります。

-   index ページの `Content-Security-Policy` の meta タグに、`cdvfile:`
    スキームを追加します。

> -   `<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap:`**cdvfile:**`https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">`

-   `<access origin=\"cdvfile://*\" />` を `config.xml` に追加します。

**cdvfile:// からネイティブパス ( native path ) への変換**

``` {.sourceCode .javascript}
resolveLocalFileSystemURL('cdvfile://localhost/temporary/path/to/file.mp4', function(entry) {
    var nativePath = entry.toURL();
    console.log('Native URI: ' + nativePath);
    document.getElementById('video').src = nativePath;
```

**ネイティブパス ( native path ) から cdvfile:// への変換**

``` {.sourceCode .javascript}
resolveLocalFileSystemURL(nativePath, function(entry) {
    console.log('cdvfile URI: ' + entry.toInternalURL());
```

**基本 Cordova プラグイン ( Cordova コアプラグイン ) で cdvfile
を使用する場合**

``` {.sourceCode .javascript}
fileTransfer.download(uri, 'cdvfile://localhost/temporary/path/to/file.mp3', function (entry) { ...
```

``` {.sourceCode .javascript}
var my_media = new Media('cdvfile://localhost/temporary/path/to/file.mp3', ...); my_media.play();
```

#### cdvfile 特有の動作

-   DOM 上での `cdvfile://` 形式のパスは、Windows では使用できません (
    代わりに、ネイティブの形式にパスを変換します )。

### エラーコードの種類と解説

エラーが投げられた場合、次のいずれかのコードが使用されています。

  コード                          | 定数
  ------------------------------- ----------------------------------------------------------------------------------------------------------------------------
  1                               `NOT_FOUND_ERR`
  2                               `SECURITY_ERR`
  3                               `ABORT_ERR`
  4                               `NOT_READABLE_ERR`
  5                               `ENCODING_ERR`
  6                               `NO_MODIFICATION_ALLOWED_ERR`
  7                               `INVALID_STATE_ERR`
  8                               `SYNTAX_ERR`
  9                               `INVALID_MODIFICATION_ERR`
  10                              `QUOTA_EXCEEDED_ERR`
  11                              `TYPE_MISMATCH_ERR`
  12                              `PATH_EXISTS_ERR`

### プラグインの設定 ( 任意 )

使用するファイルシステムは、プラットフォーム毎に設定できます。iOS と
Android に関しては、`config.xml`
内のタグを使用して、インストール対象のファイルシステムを指定できます。デフォルトでは、すべてのファイルシステムのルートディレクトリーを利用できます。

    <preference name="iosExtraFilesystems" value="library,library-nosync,documents,documents-nosync,cache,bundle,root" />
    <preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,root" />

#### Android

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
-   `root`: 端末のすべてのファイルシステム

他にも、Android では 「 documents 」
と呼ばれるファイルシステムが使用できます ( このファイルシステムは、「
files 」 ファイルシステム内の 「 /Documents/ 」 のサブディレクトリーです
)。

#### iOS

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
