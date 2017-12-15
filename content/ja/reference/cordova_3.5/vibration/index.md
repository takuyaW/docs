バイブレーションの制御 プラグイン
=================================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#039-jun-05-2014">0.3.9</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-vibration/blob/master/README.md)
をご確認ください。

</div>

このプラグインを使用して、端末を振動させることができます。

プラグイン ID
-------------

    org.apache.cordova.vibration

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.vibration`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

notification.vibrate
--------------------

指定した時間の長さで、端末を振動させます。

``` {.sourceCode .javascript}
navigator.notification.vibrate(time)
```

-   **time**: 振動する時間 ( ミリ秒単位 ) です。 *( 数値 )*

例
--

``` {.sourceCode .javascript}
// Vibrate for 2.5 seconds
navigator.notification.vibrate(2500);
```

iOS 特有の動作
--------------

-   **time**:
    指定された時間を無視して、代わりに、システム側の設定を使用して振動させます。

    ``` {.sourceCode .javascript}
    navigator.notification.vibrate();
    navigator.notification.vibrate(2500);   // 2500 is ignored
    ```


