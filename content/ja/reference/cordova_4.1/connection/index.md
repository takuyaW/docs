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
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-network-information/blob/master/RELEASENOTES.md#0214-dec-02-2014">0.2.14</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
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

    org.apache.cordova.network-information

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.network-information`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

サポート対象のプラットフォーム
------------------------------

-   Amazon Fire OS
-   Android
-   iOS

Connection
==========

> `connection` オブジェクトを使用して、セルラー、WiFi
> 接続などのネットワーク情報を取得します ( `navigator.connection`
> 経由で情報にアクセスします )。

プロパティー
------------

-   connection.type

定数
----

-   Connection.UNKNOWN
-   Connection.ETHERNET
-   Connection.WIFI
-   Connection.CELL\_2G
-   Connection.CELL\_3G
-   Connection.CELL\_4G
-   Connection.CELL
-   Connection.NONE

connection.type
---------------

このプロパティーを使用して、ネットワーク接続の状態と接続のタイプを確認します。

### 例

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

### API の変更点

Cordova 2.3.0 までは、`navigator.network.connection` 経由で `Connection`
オブジェクトにアクセスしていましたが、W3C
の仕様に準拠するため、`navigator.connection` 経由に変更しました。
`navigator.network.connection` は利用できますが、将来的には廃止します。

### iOS 特有の動作

-   iOS では、セルラー接続のタイプを識別できません。
    -   `navigator.connection.type` is set to `Connection.CELL` for all
        cellular data.

ネットワーク関連のイベント
==========================

offline
-------

アプリがオフラインになったときに、このイベントが発火します。端末は、インターネットに接続されていません。

    document.addEventListener("offline", yourCallbackFunction, false);

### 詳細

デバイスのネットワーク接続が切れたときに、`offline` ( オフライン )
イベントが発火します ( `connection.type` が `NONE`
に変わったときに発火します
)。ネットワーク接続が切れているため、アプリは、インターネットへアクセスできません。Connection
API と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

### 例

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event
    }

### iOS 特有の動作

初回起動時は、`offline` ( オフライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります。

online
------

アプリがオンラインになったときに、このイベントが発火します。端末は、インターネットに接続されています。

    document.addEventListener("online", yourCallbackFunction, false);

### 詳細

端末がネットワークに接続して、アプリからインターネットが使用できる状態になったときに、`online`
( オンライン ) イベントが発火します ( `connection.type` が `NONE`
から他の値に変わったときに発火します )。Connection API
と同じ情報を使用します。

原則、イベントリスナーの登録には、 `document.addEventListener`
を使用します。また、JavaScript
からネイティブ機能へのアクセスは、`deviceready`
イベントの発火後に行います。

### 例

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event
    }

### iOS 特有の動作

初回起動時は、`online` ( オンライン ) イベントが発火するまで (
発火の条件が揃ってること )、最低 1 秒かかります ( `connection.type` が
`UNKNOWN` になる前に )。
