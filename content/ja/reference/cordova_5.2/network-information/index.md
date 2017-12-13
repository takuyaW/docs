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
ネットワーク情報の取得 プラグイン
=================================

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-network-information/blob/master/RELEASENOTES.md#101-jun-17-2015">1.0.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>
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

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Browser
-   iOS
-   Windows Phone 7 と 8
-   Tizen
-   Windows
-   Firefox OS

API の解説
----------

`connection` オブジェクトを使用して、セルラー、WiFi
接続などのネットワーク情報を取得します ( `navigator.connection`
経由で情報にアクセスします )。

### プロパティー

-   connection.type

### 定数

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

### connection.type

このプロパティーを使用して、ネットワーク接続の状態と接続のタイプを確認します。

#### 例

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

#### API の変更点

Cordova 2.3.0 までは、`navigator.network.connection` 経由で `Connection`
オブジェクトにアクセスしていましたが、W3C
の仕様に準拠するため、`navigator.connection` 経由に変更しました。
`navigator.network.connection` は利用できますが、将来的には廃止します。

#### iOS 特有の動作

-   iOS では、セルラー接続のタイプを識別できません。

> -   モバイルデータ通信 ( セルラーを使用したデータ通信 )
>     に関しては、`navigator.connection.type` は `Connection.CELL`
>     になります。

#### Windows Phone 特有の動作

-   エミュレーター上で実行している場合には、常に、`navigator.connection.type`
    は `Connection.UNKNOWN` になります。
-   Windows Phone では、セルラーネットワークのタイプを識別できません。

> -   モバイルデータ通信 ( セルラーを使用したデータ通信 )
>     に関しては、`navigator.connection.type` は `Connection.CELL`
>     になります。

#### Windows 特有の動作

-   Phone 8.1
    のエミュレーター上で実行している場合には、常に、`navigator.connection.type`
    は `Connection.ETHERNET` になります。

#### Tizen 特有の動作

-   Tizen では、WiFi または セルラー接続のみ識別できます。

> -   モバイルデータ通信 ( セルラーを使用したデータ通信 )
>     に関しては、`navigator.connection.type` は `Connection.CELL_2G`
>     になります。

#### Firefox OS 特有の動作

-   Firefox OS では、セルラーネットワークのタイプを識別できません。

> -   モバイルデータ通信 ( セルラーを使用したデータ通信 )
>     に関しては、`navigator.connection.type` は `Connection.CELL`
>     になります。

#### Browser 特有の動作

-   Browser
    は、ネットワークのタイプを識別できません。オンライン時、`navigator.connection.type`
    は、常に、 `Connection.UNKNOWN` になります。

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

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

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

    document.addEventListener("online", yourCallbackFunction, false);

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

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

#### iOS 特有の動作

初回起動時は、`online` ( オンライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります ( `connection.type` が
`UNKNOWN` になる前に )。

#### Windows Phone 7 特有の動作

エミュレーター上で実行している場合には、`connection.status` は、常に
unknown になっています。よって、このイベントは *発火しません* 。

#### Windows Phone 8 特有の動作

エミュレーター側では、常に `Cellular`
として、ネットワークのタイプを認識します。よって、このイベントは
*発火しません* 。
