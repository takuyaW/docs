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

このプラグインでは、グローバルオブジェクト 「 `navigator.notification`
」 を使用し、ネイティブ側の UI 要素 ( ダイアログ関連 )
にアクセスします。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

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

アラートまたはダイアログを、カスタマイズして表示します。多くの場合、Cordova
では、ネイティブ側のダイアログを使用していますが、プラットフォームによっては、ブラウザー側の
`alert` 関数を使用しており、
カスタマイズが制限されている場合があります。

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

-   **message**: ダイアログのメッセージ *(String)*
-   **alertCallback**: アラートダイアログを閉じたときに呼ぶコールバック
    *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Alert` )
-   **buttonName**: ボタンの名前 ( *String*、任意、デフォルトでは `OK` )

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
-   **confirmCallback**: 押されたボタンのインデックス ( 1、2、3 )
    に応じて、または、ボタンを押さずにダイアログを閉じたときに ( 0
    )、呼ばれるコールバック *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Confirm` )
-   **buttonLabels**: ボタンの名前の配列 ( *Array*、任意、デフォルトでは
    \[`OK,Cancel`\])

### confirmCallback

確認用ダイアログ上に表示されたボタンを押したときに、 `confirmCallback`
が実行されます。

このコールバックは、引数として、`buttonIndex` (
押されたボタンのインデックス、\*Number\* ) を取ります。インデックスは、1
から始まり、値は、`1`、`2`、`3`、となります ( 1 オリジンインデックス方式
)。

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

ネイティブのダイアログを表示します ( ブラウザー標準の `prompt`
関数よりも、カスタマイズが容易 )。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

-   **message**: ダイアログのメッセージ *(String)*
-   **confirmCallback**: 押されたボタンのインデックス ( 1、2、3 )
    に応じて、または、ボタンを押さずにダイアログを閉じたときに ( 0
    )、呼ばれるコールバック *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Prompt` )
-   **buttonLabels**: ボタンの名前の配列 ( *Array*、任意、デフォルトでは
    \[`OK,Cancel`\] )
-   **defaultText**: テキストボックスのデフォルトの入力値 (
    `String`、任意、デフォルトでは空の文字列 )

### promptCallback

prompt ダイアログ上に表示されたボタンを押したときに、`promptCallback`
が実行されます。次のプロパティーを格納した `results`
オブジェクトが、このコールバックに渡されます。

-   このコールバックは、引数として、`buttonIndex` (
    押されたボタンのインデックス、\*Number\* )
    を取ります。インデックスは、1
    から始まり、値は、`1`、`2`、`3`、となります ( 1
    オリジンインデックス方式 )。
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

-   Android では、最大 3
    個のボタンを使用できます。それ以上のボタンは無視します。
-   Android 3.0 以上の場合、Holo
    テーマを使用している端末では、ボタンの表示が逆順になります。

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

-   Amazon Fire OS では、デフォルトの **通知音** を鳴らします \[
    **設定/サウンドと通知 ( または、ディスプレイ )** 画面で設定 \]。

### Android 特有の動作

-   Android では、デフォルトの **着信音** を鳴らします \[
    **設定/音と通知 ( または、ディスプレイ )** 画面で設定 \]。
