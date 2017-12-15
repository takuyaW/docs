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
端末情報の取得 プラグイン
=========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-device/blob/master/RELEASENOTES.md#0213-dec-02-2014">0.2.13</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-device) をご確認ください。

</div>

このプラグインでは、グローバルオブジェクト 「 `device` 」
を使用し、端末側のハードウェアとソフトウェア情報を取り扱います。このオブジェクトは、グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(device.cordova);
    }

プラグイン ID
-------------

    org.apache.cordova.device

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.device`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

プロパティー
------------

-   device.cordova
-   device.model
-   device.platform
-   device.uuid
-   device.version

device.cordova
--------------

端末上で実行されている Cordova のバージョンを取得します。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

device.model
------------

`device.model` を使用して、端末のモデル名 ( model ) または製品名 (
product )
を取得します。これらの値は、端末の製造元が設定するため、同じ製品でも、異なるバージョン間では、値が異なる場合があります。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // Browser:    Google Chrome   returns "Chrome"
    //             Safari          returns "Safari"
    // iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
    //
    var model = device.model;

### Android 特有の動作

-   [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL)
    ( model )
    の代わりに、[製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT)
    ( product )
    を取得します。製品名は、ほとんどの場合、製品のコードネームになります。たとえば、Nexus
    One では `Passion` を返し、 Motorola Droid では `voles` を返します。

device.platform
---------------

端末側のオペレーティングシステム名を取得します。

    var string = device.platform;

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry 10"
    //   - Browser:         returns "MacIntel" on Mac
    //                      returns "Win32" on Windows
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;

device.uuid
-----------

端末の UUID ( Universally Unique Identifier ) を取得します ( UUID
に関しては、[こちら](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)
を参照のこと )。

    var string = device.uuid;

### 解説

UUID
の生成方法は、端末の製造元が決定し、端末のプラットフォームまたはモデル毎に、値が割り振られます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UIDevice Class documentation)
    //         Returns a string of hash values created from multiple hardware identifies.
    //         It is guaranteed to be unique for every device and can't be tied
    //         to the user account.
    // Windows Phone 7 : Returns a hash of device+current user,
    // if the user is not defined, a guid is generated and will persist until the app is uninstalled
    // Tizen: returns the device IMEI (International Mobile Equipment Identity or IMEI is a number
    // unique to every GSM and UMTS mobile phone.
    var deviceID = device.uuid;

### iOS 特有の動作

iOS の
`uuid`は各デバイスで一意ではありませんが、各アプリ・各インストールで一意となります。アプリを削除し、再インストールした場合、この値は変化します。また、iOS
のバージョンアップ、アプリのバージョンアップをしたときにも変更される可能性があります(
iOS 5.1 で現象を確認 ) 。`uuid` は不変の値ではありません。

device.version
--------------

オペレーティングシステムのバージョンを取得します。

    var string = device.version;

### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS

### 例

    // Android:    Froyo OS would return "2.2"
    //             Eclair OS would return "2.1", "2.0.1", or "2.0"
    //             Version can also return update level "2.1-update1"
    //
    // BlackBerry: Torch 9800 using OS 6.0 would return "6.0.0.600"
    //
    // Browser:    Returns version number for the browser
    //
    // iPhone:     iOS 3.2 returns "3.2"
    //
    // Windows Phone 7: returns current OS version number, ex. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;