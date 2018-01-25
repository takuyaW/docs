---
title: ダイアログの制御 プラグイン
weight: 90
---

テスト環境 ( バージョン番号 ) : [1.2.1](https://github.com/apache/cordova-plugin-dialogs/releases/tag/1.2.1)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-dialogs">}} をご確認ください。
{{</note>}}

このプラグインでは、グローバルオブジェクト 「 `navigator.notification`
」 を使用し、ネイティブ側の UI 要素 ( ダイアログ関連 )
にアクセスします。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-dialogs
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Notification` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

API の解説
----------

### メソッド

-   `navigator.notification.alert`
-   `navigator.notification.confirm`
-   `navigator.notification.prompt`
-   `navigator.notification.beep`

### navigator.notification.alert

アラートまたはダイアログを、カスタマイズして表示します。多くの場合、Cordova
では、ネイティブ側のダイアログを使用していますが、プラットフォームによっては、ブラウザー側の
`alert` 関数を使用しており、
カスタマイズが制限されている場合があります。

{{<highlight javascript>}}
navigator.notification.alert(message, alertCallback, [title], [buttonName])
{{</highlight>}}

-   **message**: ダイアログのメッセージ *(String)*
-   **alertCallback**: アラートダイアログを閉じたときに呼ぶコールバック
    *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Alert` )
-   **buttonName**: ボタンの名前 ( *String*、任意、デフォルトでは `OK` )

#### 例

{{<highlight javascript>}}
function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

### navigator.notification.confirm

確認用ダイアログを表示します ( カスタマイズ可 )。

{{<highlight javascript>}}
navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
{{</highlight>}}

-   **message**: ダイアログのメッセージ *(String)*
-   **confirmCallback**: 押されたボタンのインデックス ( 1・2・3 など )
    に応じて、または、ボタンを押さずにダイアログを閉じたときに ( 0
    )、呼ばれるコールバック *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Confirm` )
-   **buttonLabels**: ボタンの名前の配列 ( *Array*、任意、デフォルトでは
    \[ `OK,Cancel` \] )

#### confirmCallback

確認用ダイアログ上に表示されたボタンを押したときに、 `confirmCallback`
が実行されます。

このコールバックは、引数として、`buttonIndex` (
押されたボタンのインデックス、\*Number\* ) を取ります。インデックスは、1
から始まり、値は、`1`、`2`、`3`、・・・　となります ( 1
オリジンインデックス方式 )。

#### 例

{{<highlight javascript>}}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

navigator.notification.confirm(
    'You are the winner!', // message
        onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
);
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Windows 特有の動作

-   Windows 8/8.1 では、MessageDialog のインスタンスに、4
    つ以上、ボタンを追加できません。
-   Windows 8.1 では、ダイアログ上に、3 つ以上、ボタンを表示できません。

### navigator.notification.prompt

ネイティブのダイアログを表示します ( ブラウザー標準の `prompt`
関数よりも、カスタマイズが容易 )。

{{<highlight javascript>}}
navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
{{</highlight>}}

-   **message**: ダイアログのメッセージ *(String)*
-   **promptCallback**: 押されたボタンのインデックス ( 1・2・3 など )
    に応じて、または、ボタンを押さずにダイアログを閉じたときに ( 0
    )、呼ばれるコールバック *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Prompt` )
-   **buttonLabels**: ボタンの名前の配列 ( *Array*、任意、デフォルトでは
    \[`OK,Cancel`\] )
-   **defaultText**: テキストボックスのデフォルトの入力値 (
    `String`、任意、デフォルトでは空の文字列 )

#### promptCallback

prompt ダイアログ上に表示されたボタンを押したときに、`promptCallback`
が実行されます。次のプロパティーを格納した `results`
オブジェクトが、このコールバックに渡されます。

-   **buttonIndex**:
    押されるボタンのインデックスです。インデックスには、1
    オリジンインデックス方式
    を使用しており、値は、`1`、`2`、`3`、・・・　となります。 *(Number)*
-   **input1**: prompt ダイアログに入力されたテキスト *(String)*

#### 例

{{<highlight javascript>}}
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
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Android 特有の動作

-   Android では、最大 3
    個のボタンを使用できます。それ以上のボタンは無視します。
-   Android 3.0 以上の場合、Holo
    テーマを使用している端末では、ボタンの表示が逆順になります。

#### Windows 特有の動作

-   Windows 上の prompt ダイアログは、ネイティブの API がないため、html
    で構築されています。

### navigator.notification.beep

ビープ ( beep ) 音を鳴らします。

{{<highlight javascript>}}
navigator.notification.beep(times);
{{</highlight>}}

-   **times**: ビープ音のリピート回数 *(Number)*

#### 例

{{<highlight javascript>}}
// Beep twice!
navigator.notification.beep(2);
{{</highlight>}}

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Android 特有の動作

-   Android では、デフォルトの **着信音** を鳴らします \[
    **設定/音と通知 ( または、ディスプレイ )** 画面で設定 \]。

