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
ダイアログの制御 プラグイン
===========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-dialogs/blob/master/RELEASENOTES.md#0211-dec-02-2014">0.2.11</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-dialogs) をご確認ください。

</div>

This plugin provides access to some native dialog UI elements via a
global `navigator.notification` object.

Although the object is attached to the global scoped `navigator`, it is
not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.notification);
    }

プラグイン ID
-------------

    org.apache.cordova.dialogs

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.dialogs`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

メソッド
--------

-   `navigator.notification.alert`
-   `navigator.notification.confirm`
-   `navigator.notification.prompt`
-   `navigator.notification.beep`

navigator.notification.alert
----------------------------

Shows a custom alert or dialog box. Most Cordova implementations use a
native dialog box for this feature, but some platforms use the browser's
`alert` function, which is typically less customizable.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

-   **message**: ダイアログのメッセージ *(String)*
-   **alertCallback**: Callback to invoke when alert dialog is
    dismissed. *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Alert` )
-   **buttonName**: Button name. *(String)* (Optional, defaults to `OK`)

### 例

    function alertDismissed() {
        // do something
    }

    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

navigator.notification.confirm
------------------------------

確認用ダイアログを表示します ( カスタマイズ可 )。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

-   **message**: ダイアログのメッセージ *(String)*
-   **confirmCallback**: Callback to invoke with index of button pressed
    (1, 2, or 3) or when the dialog is dismissed without a button press
    (0). *(Function)*
-   **title**: Dialog title. *(String)* (Optional, defaults to
    `Confirm`)
-   **buttonLabels**: Array of strings specifying button labels.
    *(Array)* (Optional, defaults to \[`OK,Cancel`\])

### confirmCallback

The `confirmCallback` executes when the user presses one of the buttons
in the confirmation dialog box.

The callback takes the argument `buttonIndex` *(Number)*, which is the
index of the pressed button. Note that the index uses one-based
indexing, so the value is `1`, `2`, `3`, etc.

### 例

    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    navigator.notification.confirm(
        'You are the winner!', // message
         onConfirm,            // callback to invoke with index of button pressed
        'Game Over',           // title
        ['Restart','Exit']     // buttonLabels
    );

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

navigator.notification.prompt
-----------------------------

Displays a native dialog box that is more customizable than the
browser's `prompt` function.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

-   **message**: ダイアログのメッセージ *(String)*
-   **promptCallback**: Callback to invoke with index of button pressed
    (1, 2, or 3) or when the dialog is dismissed without a button press
    (0). *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Prompt` )
-   **buttonLabels**: Array of strings specifying button labels
    *(Array)* (Optional, defaults to `["OK","Cancel"]`)
-   **defaultText**: Default textbox input value (`String`) (Optional,
    Default: empty string)

### promptCallback

The `promptCallback` executes when the user presses one of the buttons
in the prompt dialog box. The `results` object passed to the callback
contains the following properties:

-   **buttonIndex**: The index of the pressed button. *(Number)* Note
    that the index uses one-based indexing, so the value is `1`, `2`,
    `3`, etc.
-   **input1**: prompt ダイアログに入力されたテキスト *(String)*

### 例

    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        ['Ok','Exit'],             // buttonLabels
        'Jane Doe'                 // defaultText
    );

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Android 特有の動作

-   Android supports a maximum of three buttons, and ignores any more
    than that.
-   On Android 3.0 and later, buttons are displayed in reverse order for
    devices that use the Holo theme.

navigator.notification.beep
---------------------------

ビープ ( beep ) 音を鳴らします。

    navigator.notification.beep(times);

-   **times**: ビープ音のリピート回数 *(Number)*

### 例

    // Beep twice!
    navigator.notification.beep(2);

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Amazon Fire OS 特有の動作

-   Amazon Fire OS plays the default **Notification Sound** specified
    under the **Settings/Display & Sound** panel.

### Android 特有の動作

-   Android plays the default **Notification ringtone** specified under
    the **Settings/Sound & Display** panel.

