ダイアログの制御 プラグイン
===========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-dialogs/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このドキュメントは [Adobe
Cordovaのドキュメント](https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/ja/index.md)
を翻訳したものになります。

</div>

このプラグインを使用して、ネイティブのダイアログ関連の
UI要素にアクセスします。

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

``` {.sourceCode .javascript}
navigator.notification.alert(message, alertCallback, [title], [buttonName])
```

-   **message**: ダイアログのメッセージ *(String)*
-   **alertCallback**: アラートダイアログを閉じたときに呼ぶコールバック
    *(Function)*
-   **title**: ダイアログのタイトル ( *String*、任意、デフォルトでは
    `Alert` )
-   **buttonName**: ボタンの名前 ( *String*、任意、デフォルトでは `OK` )

### 例

``` {.sourceCode .javascript}
function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
```

### サポート対象のプラットフォーム

-   Android
-   iOS

### Windows Phone 7 と 8 特有の動作

-   ブラウザー標準の alert 関数はありません。`alert()`
    を実行する場合には、次のように記述します ( グローバルスコープ )。

    ``` {.sourceCode .javascript}
    window.alert = navigator.notification.alert;
    ```

-   `alert` と `confirm` は、どちらも非同期処理 ( non-blocking call )
    です。よって処理結果も、非同期的にのみ、利用できます。

navigator.notification.confirm
------------------------------

確認用ダイアログを表示します ( カスタマイズ可 )。

``` {.sourceCode .javascript}
navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
```

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

``` {.sourceCode .javascript}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

navigator.notification.confirm(
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
);
```

### サポート対象のプラットフォーム

-   Android
-   iOS

navigator.notification.prompt
-----------------------------

ネイティブのダイアログを表示します ( ブラウザー標準の `prompt`
関数よりも、カスタマイズが容易 )。

``` {.sourceCode .javascript}
navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
```

-   **message**: ダイアログのメッセージ *(String)*
-   **promptCallback**: ボタンを押したときに呼び出すコールバック
    *(Function)*
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

``` {.sourceCode .javascript}
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
```

### サポート対象のプラットフォーム

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

``` {.sourceCode .javascript}
navigator.notification.beep(times);
```

-   **times**: ビープ音のリピート回数 *(Number)*

### 例

``` {.sourceCode .javascript}
// Beep twice!
navigator.notification.beep(2);
```

### サポート対象のプラットフォーム

-   Android
-   iOS

### Android 特有の動作

-   Android では、デフォルトの **着信音** を鳴らします \[
    **設定/音と通知 ( または、ディスプレイ )** 画面で設定 \]。

