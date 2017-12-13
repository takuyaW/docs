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
バイブレーションの制御 プラグイン
=================================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-vibration/blob/master/RELEASENOTES.md#039-jun-05-2014">0.3.9</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-vibration)
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

navigator.notification.vibrate - Amazon Fire OS - Android - BlackBerry
10 - Firefox OS - iOS - Windows Phone 7 and 8

navigator.notification.vibrateWithPattern,navigator.notification.cancelVibration
- Android

notification.vibrate
--------------------

指定した時間の長さで、端末を振動させます。

    navigator.notification.vibrate(time)

-   **time**: 振動する時間 ( ミリ秒単位 ) です。 *( 数値 )*

### 例

    // Vibrate for 2.5 seconds
    navigator.notification.vibrate(2500);

### iOS 特有の動作

-   **time**: Ignores the specified time and vibrates for a pre-set
    amount of time.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored

notification.vibrateWithPattern
-------------------------------

指定された pattern に応じて、端末を振動させます。

    navigator.notification.vibrateWithPattern(pattern, repeat)

-   **pattern**: Sequence of durations (in milliseconds) for which to
    turn on or off the vibrator. *(Array of Numbers)*
-   **repeat**: Optional index into the pattern array at which to start
    repeating (will repeat until canceled), or -1 for no repetition
    (default). *(Number)*

### 例

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

notification.cancelVibration
----------------------------

振動を即時に停止します。

    navigator.notification.cancelVibration()
