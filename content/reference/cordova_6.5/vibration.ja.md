バイブレーションの制御 プラグイン
=================================

Tested Version:
[2.1.5](https://github.com/apache/cordova-plugin-vibration/releases/tag/2.1.5)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-vibration)
をご確認ください。

</div>

このプラグインは、W3C の勧告 ( Vibration
API、http://www.w3.org/TR/vibration/ ) に準拠しています。

このプラグインを使用して、端末を振動させることができます。

このプラグインでは、`navigator.vibrate`
を含む、グローバルオブジェクトを複数使用しています。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}
```

プラグイン ID
-------------

    cordova-plugin-vibration

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Vibration` プラグインを
有効 &lt;add\_plugins&gt; にします。

サポート対象のプラットフォーム
------------------------------

> -   Android
> -   iOS
> -   Windows (Windows Phone 8.1 devices only)

<div class="admonition note">

navigator.notification.vibrateWithPatternと\`navigator.notification.cancelVibration
は、iOSでは動作しません。

</div>

API の解説
----------

### vibrate

この関数は、引き渡すパラメーターに応じて、動作 ( pattern/パターン )
が異なります。on、on/off、off の 3 つのパターンがあります。

### 基本的な振動処理

指定した時間の長さで、端末を振動させます。

    navigator.vibrate(time)

または、

    navigator.vibrate([time])

-   **time**: 振動する時間 ( ミリ秒単位 ) です。 *( 数値 )*

#### 例

    // Vibrate for 3 seconds
    navigator.vibrate(3000);

    // Vibrate for 3 seconds
    navigator.vibrate([3000]);

#### iOS 特有の動作

-   **time**:
    指定された時間を無視して、代わりに、システム側の設定を使用して振動させます。

    > navigator.vibrate(3000); // 3000 is ignored

#### Windows 特有の動作

-   **time**: 最長時間は 5000 ms ( 5 秒 )、最短時間は 1 ms です。

    > navigator.vibrate(8000); // will be truncated to 5000

### pattern ( パターン ) を使用した振動処理 ( Android と Windows のみ )

指定された pattern に応じて、端末を振動させます。

    navigator.vibrate(pattern);

-   **pattern**: 振動をオフ・オンにする時間 ( ミリ秒単位 )
    の組み合わせです。 *( 数値の配列 )*

#### 例

    // Vibrate for 1 second
    // Wait for 1 second
    // Vibrate for 3 seconds
    // Wait for 1 second
    // Vibrate for 5 seconds
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);

### 振動の停止処理 ( iOS ではサポートされていません )

振動を即時に停止します。

    navigator.vibrate(0)

または、

    navigator.vibrate([])

または、

    navigator.vibrate([0])

0、空の配列、または、0 を 1
つ入れた配列を使用すれば、振動を停止できます。

### notification.vibrate ( 廃止予定 )

指定した時間の長さで、端末を振動させます。

    navigator.notification.vibrate(time)

-   **time**: 振動する時間 ( ミリ秒単位 ) です。 *( 数値 )*

#### 例

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);

#### iOS 特有の動作

-   **time**:
    指定された時間を無視して、代わりに、システム側の設定を使用して振動させます。

<!-- -->

    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored

### notification.vibrateWithPattern ( 廃止予定 )

指定された pattern に応じて、端末を振動させます。

    navigator.notification.vibrateWithPattern(pattern, repeat)

-   **pattern**: 振動をオフ・オンにする時間 ( ミリ秒単位 )
    の組み合わせです。 *( 数値の配列 )*
-   **repeat**: pattern で使用した配列と併用し、「 繰り返し処理 」
    を行うための任意の数値です (
    停止処理が行われるまで、処理を繰り返します
    )。繰り返し処理をさせない場合には、-1 を指定します ( デフォルト )。
    *( 数値 )*

#### 例

    // Immediately start vibrating
    // vibrate for 100ms,
    // wait for 100ms,
    // vibrate for 200ms,
    // wait for 100ms,
    // vibrate for 400ms,
    // wait for 100ms,
    // vibrate for 800ms,
    // (do not repeat)
    navigator.notification.vibrateWithPattern([0, 100, 100, 200, 100, 400, 100, 800]);

### notification.cancelVibration ( 廃止予定 )

振動を即時に停止します。

    navigator.notification.cancelVibration()

<div class="admonition note">

\\\* 注意 - 星印の付いたメソッドは、廃止予定です ( w3c
の勧告に準拠するため )。

</div>