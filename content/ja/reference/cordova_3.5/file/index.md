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
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-file/blob/master/RELEASENOTES.md#120-jun-05-2014">1.2.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-file/blob/master/README.md)
をご確認ください。

</div>

このプラグインでは、独自の File API ( 以後、「 ファイル操作 API 」
と呼称します ) を使用して、端末内のファイルへアクセス (
読み取り/書き込み ) します。

このプラグインは、次の仕様を含む、複数の仕様に準拠して構築されています。\[
File API \] : <http://www.w3.org/TR/FileAPI/>

\[ File API: Directories and System \] ( 現在は廃止 ) :
<http://www.w3.org/TR/2012/WD-file-system-api-20120417/>
が最新版です。なお、このプラグインで使用されているコードのほとんどは、http://www.w3.org/TR/2011/WD-file-system-api-20110419/
の仕様がまだサポートされていた頃に作成されたものです )

\[ File API: Writer \] :
<http://dev.w3.org/2009/dap/file-system/file-writer.html>

このプラグインの使用方法に関しては、HTML5 Rocks の
[こちらの記事](http://www.html5rocks.com/en/tutorials/file/filesystem/)
をご確認ください。

また、他のストレージに関しては、Apache Cordova ドキュメントの [『
ストレージ ガイド
』](http://cordova.apache.org/docs/en/edge/cordova_storage_storage.md.html)
をご確認ください。

プラグイン ID
-------------

    org.apache.cordova.file

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.file`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

\* \*These platforms do not support `FileReader.readAsArrayBuffer` nor
`FileWriter.write(blob)`.\*

ファイルの保存場所
------------------

v1.2.0 以降、ファイルシステムのディレクトリーへのパスを示す URL
が使用できるようになりました。この URL
の形式は、\*<file:///path/to/spot/*>
です。また、`window.resolveLocalFileSystemURL()`
を使用すれば、次のような `DirectoryEntry` に、この URL
を変換することもできます。

-   `cordova.file.applicationDirectory`
-   アプリのインストール先となる、読み取り専用のディレクトリーです。 (
    *iOS*、\*Android\*、\*BlackBerry 10\* )
-   `cordova.file.applicationStorageDirectory`
-   アプリのサンドボックス ( sandbox ) のルートディレクトリーです。iOS
    では、このディレクトリーは読み取り専用です ( ただし、iOS の
    `/Documents`
    など、特定のサブディレクトリーに関しては、読み取りと書き込みができます
    )。このディレクトリーに格納されているすべてのデータは、対象のアプリのみが利用できます。
    ( *iOS*、\*Android\*、\*BlackBerry 10\* )
-   `cordova.file.dataDirectory`
-   アプリのサンドボックス ( sandbox )
    内の永続的およびプライベートなデータストレージです。内蔵のメモリーが使用されます。Android
    の場合、外部のメモリーが必要なときは、`.externalDataDirectory`
    を使用します。また、iOS の場合、このディレクトリーは、iCloud
    間とは同期されません ( `.同期の有無edDataDirectory` を使用します )。
    ( *iOS*、\*Android\*、\*BlackBerry 10\* )
-   `cordova.file.cacheDirectory`
-   キャッシュしたデータファイルまたは他のファイル (
    アプリ側で再作成可能な、なんらかのファイル )
    用のディレクトリーです。端末側のストレージが不足する場合には、OS
    側が、これらのファイルを削除します。ファイルの削除は、本来であれば、アプリ側で制御すべき処理です。
    ( *iOS*、\*Android\*、\*BlackBerry 10\* )
-   `cordova.file.externalApplicationStorageDirectory`
-   アプリが使用する、外部ストレージ上の領域です。 ( *Android* )
-   `cordova.file.externalDataDirectory`
-   外部ストレージ上の領域内で、アプリが使用するデータファイルを置く領域です。
    ( *Android* )
-   `cordova.file.externalCacheDirectory`
-   外部ストレージ上の領域内で、アプリがキャッシュに使用する領域です。 (
    *Android* )
-   `cordova.file.externalRootDirectory`
-   外部ストレージ ( SD カード ) のルートです。 (
    *Android*、\*BlackBerry 10\* )
-   `cordova.file.tempDirectory`
-   Temp ディレクトリーです。OS
    側がコンテンツを自由に削除できますが、このような挙動に頼るのではなく、このディレクトリーの処理は、アプリ側で常に行うべきです。
    ( *iOS* )
-   `cordova.file.同期の有無edDataDirectory`
-   同期対象である、アプリのファイルを格納します ( 例 : iCloud 間 )。 (
    *iOS* )
-   `cordova.file.documentsDirectory`
-   対象のアプリだけが使用する、プライベートなファイルです。ただし、他のアプリ間ともなんらかの関係があります
    ( 例 : OFFICE ファイルなど )。 ( *iOS* )
-   `cordova.file.sharedDirectory`
-   すべてのアプリ間で共有できる、グローバルなファイルを置けます。 (
    *BlackBerry 10* )

ファイルシステムの概要
----------------------

Although technically an implementation detail, it can be very useful to
know how the `cordova.file.*` properties map to physical paths on a real
device.

### iOS のファイルシステムの概要

+-----------------+-------------+-----------+---+------+-----+---+----+
| 端末上のパス    | |           | |         | | | |    | |   | | | の有 |
|                 | `cordova.fi | `iosExtra | r | 永続性の | OS | 同 | 無 |
|                 | le.*`       | FileSyste | / | 有無 | 側で削 | 期 | | |
|                 |             | ms`       | w |      | 除  |   | プラ |
|                 |             |           | ? |      |     |   | イベ |
|                 |             |           |   |      |     |   | ート |
+=================+=============+===========+===+======+=====+===+====+
| `/var/mobile/Ap | application | -         | r | N/A  | N/A | N | Ye |
| plications/<UUI | StorageDire |           | / |      |     | / | s  |
| D>/`            | ctory       |           | o |      |     | A |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|    `appname.app | application | bundle    | r | N/A  | N/A | N | Ye |
| /`              | Directory   |           | / |      |     | / | s  |
|                 |             |           | o |      |     | A |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|       `www/`    | -           | -         | r | N/A  | N/A | N | Ye |
|                 |             |           | / |      |     | / | s  |
|                 |             |           | o |      |     | A |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|    `Documents/` | documentsDi | documents | r | Yes  | No  | Y | Ye |
|                 | rectory     |           | / |      |     | e | s  |
|                 |             |           | w |      |     | s |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|       `NoCloud/ | -           | documents | > | w |  | > | | > | >  |
| `               |             | -no同期の有無 |   | Yes |  No |   | |  |
|                 |             |           | | |      |     | | | Ye |
|                 |             |           |   |      |     |   | s  |
|                 |             |           | r |      |     | N |    |
|                 |             |           | / |      |     | o |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|    `Library`    | -           | applicati |   | > |  | > | | > | >  |
|                 |             | onStorage |   | r/w  |  Ye |   | |  |
|                 |             | Directory |   |      | s   | | | Ye |
|                 |             |           |   |      |     |   | s? |
|                 |             |           |   |      |     | N | >  |
|                 |             |           |   |      |     | o |    |
|                 |             |           |   |      |     |   | |  |
|                 |             |           |   |      |     |   | >  |
|                 |             |           |   |      |     |   |    |
|                 |             |           |   |      |     |   | Ye |
|                 |             |           |   |      |     |   | s  |
+-----------------+-------------+-----------+---+------+-----+---+----+
|       `NoCloud/ | dataDirecto | applicati | - | 有無 | | r |   | >  |
| `               | ry          | onStorage | n |      | /w  |   | |  |
|                 |             | Directory | o |      |   | |   | No |
|                 |             |           | 同 |     |   Y |   | >  |
|                 |             |           | 期 |     | es  |   |    |
|                 |             |           | の |     |     |   | |  |
|                 |             |           |   |      |     |   | >  |
|                 |             |           |   |      |     |   |    |
|                 |             |           |   |      |     |   | No |
|                 |             |           |   |      |     |   | >  |
|                 |             |           |   |      |     |   |    |
|                 |             |           |   |      |     |   | |  |
|                 |             |           |   |      |     |   | >  |
|                 |             |           |   |      |     |   |    |
|                 |             |           |   |      |     |   | Ye |
|                 |             |           |   |      |     |   | s  |
+-----------------+-------------+-----------+---+------+-----+---+----+
|       `Cloud/`  | 同期の有無edData | > | - | > | w | | > | | > | s  |
|                 | Directory   |           |   | Yes  |  No |   | |  |
|                 |             |           | | |      |     | | | Ye |
|                 |             |           |   |      |     |   | s  |
|                 |             |           | r |      |     | Y |    |
|                 |             |           | / |      |     | e |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|       `Caches/` | cacheDirect | cache     | r | Yes\ | Yes | N | Ye |
|                 | ory         |           | / | *    | \*\ | o | s  |
|                 |             |           | w |      | *\* |   |    |
+-----------------+-------------+-----------+---+------+-----+---+----+
|    `tmp/`       | tempDirecto | -         | r | No\* | Yes | N | Ye |
|                 | ry          |           | / | \*   | \*\ | o | s  |
|                 |             |           | w |      | *\* |   |    |
+-----------------+-------------+-----------+---+------+-----+---+----+

\* Files persist across app restarts and upgrades, but this directory
can be cleared whenever the OS desires. Your app should be able to
recreate any content that might be deleted.

\*\* Files may persist across app restarts, but do not rely on this
behavior. Files are not guaranteed to persist across updates. Your app
should remove files from this directory when it is applicable, as the OS
does not guarantee when (or even if) these files are removed.

\*\*\* The OS may clear the contents of this directory whenever it feels
it is necessary, but do not rely on this. You should clear this
directory as appropriate for your application.

### Android のファイルシステムの概要

  端末上のパス                                                                                                                                | `cordova.file.*`                                                                                                                                                   | `AndroidExtraFileSystems`                                                                                                         | r/w?                                | 永続性の有無                                                    | OS 側で削除                                             | プライベート
  ------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------- ------------------------------------- ----------------------------------------------------------------- --------------------------------------------------------- ---------------------------------------------------------
  `file:///android_asset/`                                                                                                                    applicationDirectory                                                                                                                                                                                                                                                                                     r/o                                   N/A                                                               N/A                                                       Yes
  `/data/data/<app-id>/`                                                                                                                      applicationStorageDirectory                                                                                                                                          -                                                                                                                                   r/w                                   N/A                                                               N/A                                                       Yes
     `cache`                                                                                                                                  cacheDirectory                                                                                                                                                       cache                                                                                                                               r/w                                   Yes                                                               Yes\*                                                     Yes
     `files`                                                                                                                                  dataDirectory                                                                                                                                                        files                                                                                                                               r/w                                   Yes                                                               No                                                        Yes
        `Documents`                                                                                                                                                                                                                                                                                                documents                                                                                                                           r/w                                   Yes                                                               No                                                        Yes
  `<sdcard>/`                                                                                                                                 externalRootDirectory                                                                                                                                                sdcard                                                                                                                              r/w                                   Yes                                                               No                                                        No
     `Android/data/<app-id>/`                                                                                                                 externalApplicationStorageDirectory                                                                                                                                  -                                                                                                                                   r/w                                   Yes                                                               No                                                        No
        `cache`                                                                                                                               externalCacheDirectry                                                                                                                                                cache-external                                                                                                                      r/w                                   Yes                                                               No\*\*                                                    No
        `files`                                                                                                                               externalDataDirectory                                                                                                                                                files-external                                                                                                                      r/w                                   Yes                                                               No                                                        No

\*\*The OS may periodically clear this directory, but do not rely on
this behavior. Clear the contents of this directory as appropriate for
your application. Should a user purge the cache manually, the contents
of this directory are removed.

\*\*The OS does not clear this directory automatically; you are
responsible for managing the contents yourself. Should the user purge
the cache manually, the contents of the directory are removed.

**注意**: 外部ストレージがマウントされない場合、`cordova.file.external*`
プロパティーは、`null` になります。

Android 特有の動作
------------------

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
では、デフォルトとして、`Compatibility` を使用します。なお、preference
タグが存在する場合でも、上記の値のいずれかが設定されていなければ、アプリは起動しません。

古いバーション ( 1.0 より前 )
のプラグインを実装したアプリの配布をすでに行っている場合、および、永続的なファイルシステム
( persistent filesystem ) にファイルを保存していた場合、preference を
`Compatibility` に設定します。端末によっては動作が異なりますが、
"Internal"
に場所を変更してしまうと、既存ユーザーがアプリをアップグレードしたときに、以前に保存したファイルに、アクセスできなくなります。

If your application is new, or has never previously stored files in the
persistent filesystem, then the `Internal` setting is generally
recommended.

iOS 特有の動作
--------------

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

It is now possible to choose whether to store files in the documents or
applicationStorageDirectory directory, with a preference in your
application's `config.xml` file. To do this, add one of these two lines
to `config.xml`:

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

Firefox OS 特有の動作
---------------------

Firefox OS 自体は、File System API をサポートしていませんが、indexedDB
の 「 シム ( shim ) 」 としてならば、File System API
を組み込むことができます。

-   ディレクトリー内にコンテンツがある場合でも、ディレクトリーを削除します。
-   ディレクトリー用のメタデータは使用できません。
-   `copyTo` と `moveTo`
    メソッドは、ディレクトリーに対しては使用できません。

The following data paths are supported: \* `applicationDirectory` - Uses
`xhr` to get local files that are packaged with the app. \*
`dataDirectory` - For persistent app-specific data files. \*
`cacheDirectory` - Cached files that should survive app restarts (Apps
should not rely on the OS to delete files in here).

アップグレード時の注意点
------------------------

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

v1.1.0 では、`toURL()` の戻り値は、可能であれば、'<file://>' 形式の絶対
URL を返すように変わりました (
[CB-6394](https://issues.apache.org/jira/browse/CB-6394) を参照のこと
)。 'cdvfile:' 形式の URL の取得したい場合には、現在、`toInternalURL()`
を使用できます。このメソッドでは、次の形式の URL を返します。

    cdvfile://localhost/persistent/path/to/file

この形式で、ファイルを、一意に識別できます。

エラーコードの種類と解説
------------------------

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

プラグインの設定 ( 任意 )
-------------------------

使用するファイルシステムは、プラットフォーム毎に設定できます。iOS と
Android に関しては、`config.xml`
内のタグを使用して、インストール対象のファイルシステムを指定できます。デフォルトでは、すべてのファイルシステムのルートディレクトリーを利用できます。

    <preference name="iosExtraFilesystems" value="applicationStorageDirectory,applicationStorageDirectory-no同期の有無,documents,documents-no同期の有無,cache,bundle,root" />
    <preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,root" />

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
-   `root`: 端末のすべてのファイルシステム

他にも、Android では 「 documents 」
と呼ばれるファイルシステムが使用できます ( このファイルシステムは、「
files 」 ファイルシステム内の 「 /Documents/ 」 のサブディレクトリーです
)。

### iOS

-   `applicationStorageDirectory`: The application's Library directory
-   `documents`: アプリの Documents ディレクトリーです。
-   `cache`: アプリの Cache ディレクトリーです。
-   `bundle`: bundle container です (
    ディスク上のアプリ本体の格納先、読み取り専用 )。
-   `root`: 端末のすべてのファイルシステム

By default, the applicationStorageDirectory and documents directories
can be 同期の有無ed to iCloud. You can also request two additional
filesystems, `applicationStorageDirectory-no同期の有無` and
`documents-no同期の有無`, which represent a special non-同期の有無ed
directory within the `/Library` or `/Documents` filesystem.
