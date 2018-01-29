---
title: 端末情報の取得 プラグイン
weight: 60
---

テスト環境 ( バージョン番号 ) : [1.1.2](https://github.com/apache/cordova-plugin-device/releases/tag/1.1.2)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-device">}} をご確認ください。
{{</note>}}

このプラグインでは、グローバルオブジェクト 「 `device` 」
を使用し、端末側のハードウェアとソフトウェア情報を取り扱います。このオブジェクトは、グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(device.cordova);
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-device
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Device` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

API の解説
----------

### プロパティー

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

#### Quick 例

{{<highlight javascript>}}
// Android:    Nexus One       returns "Passion" (Nexus One code name)
//             Motorola Droid  returns "voles"
// iOS:     for the iPad Mini, returns iPad2,5; iPhone 5 is iPhone 5,1. See http://theiphonewiki.com/wiki/index.php?title=Models

var model = device.model;
{{</highlight>}}

#### Android 特有の動作

-   [モデル名](http://developer.android.com/reference/android/os/Build.html#MODEL)
    ( model )
    の代わりに、[製品名](http://developer.android.com/reference/android/os/Build.html#PRODUCT)
    ( product )
    を取得します。製品名は、ほとんどの場合、製品のコードネームになります。たとえば、Nexus
    One では `Passion` を返し、 Motorola Droid では `voles` を返します。

### device.platform

端末側のオペレーティングシステム名を取得します。

{{<highlight javascript>}}
var string = device.platform;
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Quick 例

{{<highlight javascript>}}
// Depending on the device, a few examples are:
//   - "Android"
//   - "iOS"
var devicePlatform = device.platform;
{{</highlight>}}

### device.uuid

端末の UUID ( Universally Unique Identifier ) を取得します ( UUID
に関しては、[こちら](http://en.wikipedia.org/wiki/Universally_Unique_Identifier)
を参照のこと )。

{{<highlight javascript>}}
var string = device.uuid;
{{</highlight>}}

#### 解説

UUID
の生成方法は、端末の製造元が決定し、端末のプラットフォームまたはモデル毎に、値が割り振られます。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Quick 例

{{<highlight javascript>}}
// Android: Returns a random 64-bit integer (as a string, again!)
//          The integer is generated on the device's first boot
//
// iPhone: (Paraphrased from the UIDevice Class documentation)
//         Returns the [UIDevice identifierForVendor] UUID which is unique and the same for all apps installed by the same vendor. However the UUID can be different if the user deletes all apps from the vendor and then reinstalls it. Please see https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/#//apple_ref/occ/instp/UIDevice/identifierForVendor

var deviceID = device.uuid;
{{</highlight>}}

#### iOS 特有の動作

iOS の `uuid` には、`identifierForVendor` プロパティーが使用されます。同一の販売会社が提供する端末であれば、値は一意です。異なる販売会社が提供した場合では、同じ端末でも値は異なります。また、販売会社がインストールしたアプリを削除して、再インストールした場合にも、値は異なってきます。

ただし、バックアップまたは iCloud から復旧した場合、UUID
は同じ値になります ( 値は、preference に保存されているため
)。旧バージョンのプラグインを使用している場合には、以前の UUID
を取得します ( preference から値を取得するため )。

### device.version

オペレーティングシステムのバージョンを取得します。

{{<highlight javascript>}}
var string = device.version;
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS
-   Windows

#### Quick 例

{{<highlight javascript>}}
// Android:    Froyo OS would return "2.2"
//             Eclair OS would return "2.1", "2.0.1", or "2.0"
//             Version can also return update level "2.1-update1"
//
// iPhone:     iOS 3.2 returns "3.2"
//

var deviceVersion = device.version;
{{</highlight>}}

### device.manufacturer

端末の製造元を確認できます。

{{<highlight javascript>}}
var string = device.manufacturer;
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
// Android:    Motorola XT1032 would return "motorola"
// iPhone:     returns "Apple"
//
var deviceManufacturer = device.manufacturer;
{{</highlight>}}

### device.isVirtual

シミュレーター上で実行されている端末か否かを判別します。

{{<highlight javascript>}}
var isSim = device.isVirtual;
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android 2.1+
-   iOS
-   Windows

### device.serial

端末のシリアル番号を取得します ( [SERIAL](http://developer.android.com/reference/android/os/Build.html#SERIAL)
を参照のこと )。

{{<highlight javascript>}}
var string = device.serial;
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android

