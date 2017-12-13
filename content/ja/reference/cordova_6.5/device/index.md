端末情報の取得 プラグイン
=========================

テスト環境 ( バージョン番号 ) :
[1.1.6](https://github.com/apache/cordova-plugin-device/releases/tag/1.1.6)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-device) をご確認ください。

</div>

このプラグインでは、グローバルオブジェクト 「 `device` 」
を使用し、端末側のハードウェアとソフトウェア情報を取り扱います。このオブジェクトは、グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(device.cordova);
}
```

プラグイン ID
-------------

``` {.sourceCode .javascript}
cordova-plugin-device
```

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Device` プラグインを
有効 &lt;add\_plugins&gt; にします。

プロパティー
------------

-   device.cordova
-   device.model
-   device.platform
-   device.uuid
-   device.version
-   device.manufacturer
-   device.isVirtual
-   device.serial

### device.cordova

端末上で実行されている Cordova のバージョンを取得します。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

### device.model

`device.model` を使用して、端末のモデル名 ( model ) または製品名 (
product )
を取得します。これらの値は、端末の製造元が設定するため、同じ製品でも、異なるバージョン間では、値が異なる場合があります。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

``` {.sourceCode .javascript}
// Android:    Nexus One       returns "Passion" (Nexus One code name)
//             Motorola Droid  returns "voles"
// BlackBerry: Torch 9800      returns "9800"
// Browser:    Google Chrome   returns "Chrome"
//             Safari          returns "Safari"
// iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models
// OSX:                        returns "x86_64"
//
var model = device.model;
```

#### Android 特有の動作

-   [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL)
    ( model )
    の代わりに、[製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT)
    ( product )
    を取得します。製品名は、ほとんどの場合、製品のコードネームになります。たとえば、Nexus
    One では `Passion` を返し、 Motorola Droid では `voles` を返します。

### device.platform

端末側のオペレーティングシステム名を取得します。

``` {.sourceCode .javascript}
var string = device.platform;
```

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

``` {.sourceCode .javascript}
// Depending on the device, a few examples are:
//   - "Android"
//   - "BlackBerry 10"
//   - "browser"
//   - "iOS"
//   - "WinCE"
//   - "Tizen"
//   - "Mac OS X"
var devicePlatform = device.platform;
```

### device.uuid

端末の UUID ( Universally Unique Identifier ) を取得します ( UUID
に関しては、[こちら](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)
を参照のこと )。

``` {.sourceCode .javascript}
var string = device.uuid;
```

#### 解説

UUID
の生成方法は、端末の製造元が決定し、端末のプラットフォームまたはモデル毎に、値が割り振られます。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

``` {.sourceCode .javascript}
// Android: Returns a random 64-bit integer (as a string, again!)
//          The integer is generated on the device's first boot
//
// BlackBerry: Returns the PIN number of the device
//             This is a nine-digit unique integer (as a string, though!)
//
// iPhone: (Paraphrased from the UIDevice Class documentation)
//         Returns the [UIDevice identifierForVendor] UUID which is unique and the same for all apps installed by the same vendor. However the UUID can be different if the user deletes all apps from the vendor and then reinstalls it.
// Windows Phone 7 : Returns a hash of device+current user,
// if the user is not defined, a guid is generated and will persist until the app is uninstalled
// Tizen: returns the device IMEI (International Mobile Equipment Identity or IMEI is a number
// unique to every GSM and UMTS mobile phone.
var deviceID = device.uuid;
```

#### iOS 特有の動作

iOS の `uuid` には、identifierForVendor
プロパティーが使用されます。同一の販売会社が提供する端末であれば、値は一意です。異なる販売会社が提供した場合では、同じ端末でも値は異なります。また、販売会社がインストールしたアプリを削除して、再インストールした場合にも、値は異なってきます。詳細は
[こちら](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/#//apple_ref/occ/instp/UIDevice/identifierForVendor)
を参照してください。
設定が保存されているときに、バックアップまたはiCloudからアプリを復元する場合、UUIDは同じになります。
このプラグインの古いバージョンを使用している場合は、以前のバージョンのUUIDを別の方法で生成します。これは、プリファレンスから取得されるためです。

### device.version

オペレーティングシステムのバージョンを取得します。

``` {.sourceCode .javascript}
var string = device.version;
```

#### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS
-   Windows

#### 例

``` {.sourceCode .javascript}
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
// OSX:        El Capitan would return "10.11.2"
//
var deviceVersion = device.version;
```

### device.manufacturer

端末の製造元を確認できます。

``` {.sourceCode .javascript}
var string = device.manufacturer;
```

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

``` {.sourceCode .javascript}
// Android:    Motorola XT1032 would return "motorola"
// BlackBerry: returns "BlackBerry"
// iPhone:     returns "Apple"
//
var deviceManufacturer = device.manufacturer;
```

### device.isVirtual

シミュレーター上で実行されている端末か否かを判別します。

``` {.sourceCode .javascript}
var isSim = device.isVirtual;
```

#### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS
-   Windows

### device.serial

端末のシリアル番号を取得します (
[SERIAL](http://developer.android.com/reference/android/os/Build.html#SERIAL)
を参照のこと )。

``` {.sourceCode .javascript}
var string = device.serial;
```

#### サポート対象のプラットフォーム

-   Android

