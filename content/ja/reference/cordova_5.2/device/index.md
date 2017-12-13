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
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-device/blob/master/RELEASENOTES.md#101-jun-17-2015">1.0.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
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

    cordova-plugin-device

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Device` プラグインを
有効 &lt;add\_plugins&gt; にします。

API の解説
----------

### プロパティー

-   device.cordova
-   device.model
-   device.platform
-   device.uuid
-   device.version
-   device.isVirtual
-   device.serial

### device.cordova

端末上で実行されている Cordova のバージョンを取得します。

#### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Browser
-   Firefox OS
-   iOS
-   Tizen
-   Windows Phone 7 と 8
-   Windows 8

### device.model

`device.model` を使用して、端末のモデル名 ( model ) または製品名 (
product )
を取得します。これらの値は、端末の製造元が設定するため、同じ製品でも、異なるバージョン間では、値が異なる場合があります。

#### サポート対象のプラットフォーム

-   Android
-   BlackBerry 10
-   Browser
-   iOS
-   Tizen
-   Windows Phone 7 と 8
-   Windows 8

#### 例

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // Browser:    Google Chrome   returns "Chrome"
    //             Safari          returns "Safari"
    // iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
    //
    var model = device.model;

#### Android 特有の動作

-   [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL)
    ( model )
    の代わりに、[製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT)
    ( product )
    を取得します。製品名は、ほとんどの場合、製品のコードネームになります。たとえば、Nexus
    One では `Passion` を返し、 Motorola Droid では `voles` を返します。

#### Tizen 特有の動作

-   販売会社側が名付けた端末のモデル名 ( 例 : `TIZEN` ) を返します。

#### Windows Phone 7 と 8 Quirks

-   製造元が指定した、端末のモデル名を返します。たとえば、Samsung Focus
    は `SGH-i917` を返します。

### device.platform

端末側のオペレーティングシステム名を取得します。

    var string = device.platform;

#### サポート対象のプラットフォーム

-   Android
-   BlackBerry 10
-   Browser
-   Firefox OS
-   iOS
-   Tizen
-   Windows Phone 7 と 8
-   Windows 8

#### 例

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry 10"
    //   - Browser:         returns "MacIntel" on Mac
    //                      returns "Win32" on Windows
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;

#### Windows Phone 7 特有の動作

Windows Phone 7 の端末では、`WinCE` を返します。

#### Windows Phone 8 特有の動作

Windows Phone 8 の端末では、`Win32NT` を返します。

### device.uuid

Get the device's Universally Unique Identifier
([UUID](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)).

    var string = device.uuid;

#### 解説

UUID
の生成方法は、端末の製造元が決定し、端末のプラットフォームまたはモデル毎に、値が割り振られます。

#### サポート対象のプラットフォーム

-   Android
-   BlackBerry 10
-   iOS
-   Tizen
-   Windows Phone 7 と 8
-   Windows 8

#### 例

    // Android: Returns a random 64-bit integer (as a string, again!)
    //          The integer is generated on the device's first boot
    //
    // BlackBerry: Returns the PIN number of the device
    //             This is a nine-digit unique integer (as a string, though!)
    //
    // iPhone: (Paraphrased from the UIDevice Class documentation)
    //         Returns the [UIDevice identifierForVendor] UUID which is unique and the same for all apps installed by the same vendor. However the UUID can be different if the user deletes all apps from the vendor and then reinstalls it. Please see https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/#//apple_ref/occ/instp/UIDevice/identifierForVendor
    // Windows Phone 7 : Returns a hash of device+current user,
    // if the user is not defined, a guid is generated and will persist until the app is uninstalled
    // Tizen: returns the device IMEI (International Mobile Equipment Identity or IMEI is a number
    // unique to every GSM and UMTS mobile phone.
    var deviceID = device.uuid;

#### iOS 特有の動作

iOS の `uuid` には、identifierForVendor
プロパティーが使用されます。同一の販売会社が提供する端末であれば、値は一意です。異なる販売会社が提供した場合では、同じ端末でも値は異なります。また、販売会社がインストールしたアプリを削除して、再インストールした場合にも、値は異なってきます。

ただし、バックアップまたは iCloud から復旧した場合、UUID
は同じ値になります ( 値は、preference に保存されているため
)。旧バージョンのプラグインを使用している場合には、以前の UUID
を取得します ( preference から値を取得するため )。

#### Windows Phone 7 と 8 Quirks

Windows Phone 7 の `uuid` を取得する場合には、`ID_CAP_IDENTITY_DEVICE`
の 「 機能 」 ( capability ) が必要です。なお、Microsoft
社は、このプロパティーのサポートを、近い将来に打ち切る可能性があります。この
「 機能 」 ( capability ) が利用できない場合、アプリ側では、固定の guid
を生成します。端末上にアプリがインストールされている間は、この guid
が保持されます。\[ 翻訳者メモ : 「 機能 」 とは、WP
におけるパーミッションの呼称です \]

### device.version

オペレーティングシステムのバージョンを取得します。

    var string = device.version;

#### サポート対象のプラットフォーム

-   Android 2.1+
-   BlackBerry 10
-   Browser
-   iOS
-   Tizen
-   Windows Phone 7 と 8
-   Windows 8

#### 例

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
    // Windows 8: return the current OS version, ex on Windows 8.1 returns 6.3.9600.16384
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;

### device.isVirtual

シミュレーター上で実行されている端末か否かを判別します。

    var isSim = device.isVirtual;

#### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS
-   Windows Phone 8
-   Windows 8

### device.serial

端末のシリアル番号を取得します (
[SERIAL](http://developer.android.com/reference/android/os/Build.html#SERIAL)
を参照のこと )。

    var string = device.serial;

#### サポート対象のプラットフォーム

-   Android

