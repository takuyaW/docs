---
title: InAppBrowser プラグイン
weight: 140
---

テスト環境 ( バージョン番号 ) :
[1.4.0](https://github.com/apache/cordova-plugin-inappbrowser/releases/tag/1.4.0)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-inappbrowser">}} をご確認ください。
{{</note>}}

このプラグインでは、`cordova.InAppBrowser.open()`
を使用して、InAppBrowser ウィンドウ ( InAppBrowser 提供の Web ブラウザー
) を開きます。

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
{{</highlight>}}

`cordova.InAppBrowser.open()` 関数は、`window.open()`
関数を代替する関数です。次の記述をすれば、既存の `window.open()`
を使用して、InAppBrowser ウィンドウを開くことができます。

{{<highlight javascript>}}
window.open = cordova.InAppBrowser.open;
{{</highlight>}}

InAppBrowser を使用して開いたウィンドウ ( InAppBrowser ウィンドウ )
は、標準の Web ブラウザーと同じ動作をします。ただし、Cordova API
へのアクセスはできません。使用方法としては、提供元不明のコンテンツを読み込む場合に、Cordova
WebView の代わりに、InAppBrowser
を使用するなどが考えられます。なお、InAppBrowser
には、ホワイトリストは適用されません。また、system browser (
システムブラウザー ) 上で、リンクを開くこともありません。\[ 翻訳者メモ
： system browser は、OS 標準のブラウザーを指しているものと思われます (
他の選択肢としては、Android のシステムブラウザーがありました
)。また、原文では、「 system's web browser 」、または、「 system browser
」
などと異なる言葉が使用されていますが、どちらもシステム標準のブラウザーを指しているものと思われます。なお、翻訳文では、前者は、「
システム標準の Web ブラウザー 」、後者は、「 system browser 」 (
原文のまま ) としています。\]

InAppBrowser では、ユーザー用の独自の GUI ( 戻る・進む・中止 )
を、デフォルトで提供しています。

後方互換性を維持するため、このプラグインでは、`window.open` をフック (
hook ) しています。ただし、`window.open`
にこのようなフックを使用すると、想定外の副作用がでる場合もあります (
特に、別のプラグインとの間に依存関係がある場合など )。`window.open`
へのフックは、将来的には廃止される予定ですが、それまでは、次のようにして、手動でも、デフォルトの挙動に戻すことができます。

{{<highlight javascript>}}
delete window.open // Reverts the call back to it's prototype's default
{{</highlight>}}

`window.open` は、グローバルスコープに属していますが、InAppBrowser
が使用できるのは、`deviceready` イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("window.open works well");
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-inappbrowser
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`InAppBrowser` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

API の解説
----------

### cordova.InAppBrowser.open

`InAppBrowser`
の新規インスタンス内、現在開いているブラウザーのインスタンス内、または、system
browser ( システムブラウザー ) 内で、URL を開きます。

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open(url, target, options);
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **url**: 読み込みをする URL。Unicode 文字が URL
    に含まれる場合、`encodeURI()` を使用して変換します。 *(String)*。

-   **target**: URL の読み込み先として使用するブラウザーの種別。任意のパラメーターです。デフォルトでは、`_self` となります。 *(String)*
    
    -   `_self`: ホワイトリストに対象の URL が登録されている場合には、Cordova WebView を開きます。それ以外の場合には、`InAppBrowser` を開きます。
    -   `_blank`: `InAppBrowser` を開きます。
    -   `_system`: システム標準の Web ブラウザー ( system's web browser ) を開きます。

-   **options**: `InAppBrowser`
    で使用する、任意のオプションです。デフォルトでは、`location=yes`
    となります。 *(String)* `options` で使用する文字列に、空白は使用できません。また、各設定 ( 名前と値の組み合わせ ) の間を、コンマで区切る必要があります。各設定の名前では、大文字・小文字を区別しません。次の値は、すべてのプラットフォームでサポートされています。

    -   **location**: `yes` または `no` を設定すると、`InAppBrowser` のロケーションバーを、それぞれ、表示または非表示にできます。

    **Android 専用** :

    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」 とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop イベントが発火します。省略または `no` ( デフォルト ) に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    -   **clearcache**: `yes` に設定した場合、新規のウィンドウを開く前に、ブラウザーの cookie とキャッシュを削除します。
    -   **clearsessioncache**: `yes` に設定した場合、新規のウィンドウを開く前に、セッションの cookie とキャッシュを削除します。
    -   **zoom**: `yes` に設定した場合、Android ブラウザーのズームコントロール ( 制御バー ) が表示されます。`no` に設定した場合、非表示になります。デフォルト値は、`yes` です。
    -   **hardwareback**: `yes` に設定した場合、ハードウェア標準の 「 戻る 」 ボタンを使用して、前のページに戻ります ( `InAppBrowser` に記録されているページ遷移の履歴を使用 )。「 前のページ 」 が存在しない場合には、`InAppBrowser` が閉じます。デフォルト値は、`yes` です。「 戻る 」 ボタンを使用して、InAppBrowser を閉じたい場合には、`no` に設定します。

    **iOS 専用** :

    -   **closebuttoncaption**: **Done** ボタンのラベルに使用する文字列を設定します。この値は、各自でローカライズする必要があります。
    -   **disallowoverscroll**: `yes` または `no` に設定すると ( デフォルトでは `no` )、UIWebViewBounce プロパティーを、それぞれ、オンまたはオフにします。
    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」 とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop イベントが発火します。省略または `no` ( デフォルト ) に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    -   **clearcache**: `yes` に設定した場合、新規のウィンドウを開く前に、ブラウザーの cookie とキャッシュを削除します。
    -   **clearsessioncache**: `yes` に設定した場合、新規のウィンドウを開く前に、セッションの cookie とキャッシュを削除します。
    -   **toolbar**: `yes` または `no` に設定すると、`InAppBrowser` のツールバーを、それぞれ、表示または非表示にします ( デフォルトでは `yes` )。
    -   **enableViewportScale**: meta タグを使用した、ビューポート ( viewport ) の尺度変更を、有効 ( `yes` ) または無効 ( `no` ) にします ( デフォルトでは `no` )。
    -   **mediaPlaybackRequiresUserAction**: `yes` または `no` に設定して、 HTML5 の audio または video の自動再生を、有効または無効にします ( デフォルトでは `no` )。
    -   **allowInlineMediaPlayback**: `yes` または `no` に設定して、端末標準のメディア再生用インターフェイスではなく、ブラウザーウィンドウ内でのインライン再生を許可するか設定します。HTML の `video` 要素には `webkit-playsinline` 属性を指定する必要があります ( デフォルトは `no` )。
    -   **keyboardDisplayRequiresUserAction**: JavaScript の `focus()` を使用して、form 要素がフォーカスされたとき、キーボードを表示するかを、`yes` または `no` で設定します ( デフォルトは `yes` )。
    -   **suppressesIncrementalRendering**: レンダリング処理の開始時期を設定します。表示するコンテンツをすべて受け取った後に行うのであれば `yes` に設定します ( デフォルトは `no` )。
    -   **presentationstyle**: [presentation style ( Apple 社のページ )](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle) を設定します。`pagesheet`、`formsheet`、`fullscreen` のいずれかを設定します ( デフォルトは、`fullscreen` )。
    -   **transitionstyle**: [transition style ( Apple 社のページ )](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle) を設定します。`fliphorizontal`、`crossdissolve`、`coververtical` のいずれかを設定します ( デフォルトは `coververtical` )。
    -   **toolbarposition**: `top` または `bottom` に設定して、ツールバーの表示位置 ( ウィンドウの上・下 ) を指定します ( デフォルトは `bottom` )。

    **Windows 専用** :

    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」 とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop イベントが発火します。省略または `no` ( デフォルト ) に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    -   **fullscreen**: `yes` に設定した場合、枠なしのブラウザー コントロール ( 制御メニュー ) が作成されます。なお、**location=no** が設定されている場合、InAppBrowser ウィンドウを閉じるメニューは表示されなくなります。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
var ref2 = cordova.InAppBrowser.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
{{</highlight>}}

#### Windows 特有の動作

Windows 8.0/8.1 および Windows Phone 8.1 では、Cordova WebView
上で外部の URL ( Remote URL ) を開くことができません。`target='_self'`
を設定しているのであれば、外部の URL ( Remote URL ) は、システム標準の
Web ブラウザー上で常に開かれます。

Windows 10 では、ホワイトリストに URL
が登録されていない場合、加えて、`target='_self'` の場合、InAppBrowser
の代わりに、システム標準の Web ブラウザー上で、URL が表示されます。

Firefox OS 同様に、InAppBrowser
ウィンドウの挙動は、`inAppBrowserWrap`/`inAppBrowserWrapFullscreen` (
CSS クラス ) を使用すれば、オーバーライド ( override ) できます。

### InAppBrowser

`cordova.InAppBrowser.open` を呼び出して、返ってくるオブジェクトです。

#### メソッド

-   addEventListener
-   removeEventListener
-   close
-   show
-   executeScript
-   insertCSS

### addEventListener

`InAppBrowser` のイベントに対して、リスナーを登録します。

{{<highlight javascript>}}
ref.addEventListener(eventname, callback);
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーを設定するイベント *(String)*

    -   **loadstart**: `InAppBrowser` が URL の読み込みを始めたときに発火するイベント
    -   **loadstop**: `InAppBrowser` が URL の読み込みを終えたときに発火するイベント
    -   **loaderror**: URL の読み込み時に、`InAppBrowser` がエラーを検出したときに発火するイベント
    -   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント

-   **callback**:
    イベントが発火したときに実行される関数。`InAppBrowserEvent`
    オブジェクトを、パラメーターとして、この関数に渡します。

#### 例

{{<highlight javascript>}}
var inAppBrowserRef = undefined;

function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    with (inAppBrowserRef) {

        addEventListener('loadstart', loadStartCallBack);

        addEventListener('loadstop', loadStopCallBack);

        addEventListener('loaderror', loadErrorCallBack);
    }

}

function loadStartCallBack() {

    $('#status-message').text("loading please wait ...");

}

function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        $('#status-message').text("");

        inAppBrowserRef.show();
    }

}

function loadErrorCallBack(params) {

    $('#status-message').text("");

    var scriptErrorMesssage =
        "alert('Sorry we cannot open that page. Message from the server is : "
        + params.message + "');"

    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

    inAppBrowserRef.close();

    inAppBrowserRef = undefined;

}

function executeScriptCallBack(params) {

    if (params[0] == null) {

        $('#status-message').text(
            "Sorry we couldn't open that page. Message from the server is : '"
            + params.message + "'");
    }

}
{{</highlight>}}

#### InAppBrowserEvent のプロパティー

-   **type**: eventname ( イベント名
    )。`loadstart`、`loadstop`、`loaderror`、`exit`
    のいずれかとなります。 *(String)*
-   **url**: 読み込んだ URL *(String)*
-   **code**: エラーコード ( `loaderror` が発生した場合のみ ) *(Number)*
-   **message**: エラーメッセージ ( `loaderror` が発生した場合のみ )
    *(String)*

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstart', function(event) { alert(event.url); });
{{</highlight>}}

### removeEventListener

`InAppBrowser` のイベントに対して登録されたリスナーを削除します。

{{<highlight javascript>}}
ref.removeEventListener(eventname, callback);
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーの登録を解除するイベント *(String)*

    -   **loadstart**: `InAppBrowser` が URL の読み込みを始めたときに発火するイベント
    -   **loadstop**: `InAppBrowser` が URL の読み込みを終えたときに発火するイベント 
    -   **loaderror**: URL の読み込み時に、`InAppBrowser` がエラーを検出したときに発火するイベント
    -   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント

-   **callback**: イベントが発火したときに実行される関数。`InAppBrowserEvent` オブジェクトを、この関数に渡します。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
var myCallback = function(event) { alert(event.url); }
ref.addEventListener('loadstart', myCallback);
ref.removeEventListener('loadstart', myCallback);
{{</highlight>}}

### close

`InAppBrowser` ウィンドウを閉じます。

{{<highlight javascript>}}
ref.close();
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.close();
{{</highlight>}}

### InAppBrowser.show

非表示で実行されている InAppBrowser ウィンドウを表示します。
InAppBrowser ウィンドウ
がすでに表示されている場合には、この関数を呼んでも効果ありません。

{{<highlight javascript>}}
ref.show();
{{</highlight>}}

-   **ref**: InAppBrowser ウィンドウへのリファレンス (`InAppBrowser`)

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'hidden=yes');
// some time later...
ref.show();
{{</highlight>}}

### InAppBrowser.executeScript

`InAppBrowser` ウィンドウ上に、JacaScript コードをインジェクト (
inject/注入 ) します。

{{<highlight javascript>}}
ref.executeScript(details, callback);
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: 実行するスクリプトの詳細。`file` または `code`
    キーを指定します。 *(Object)*

    -   **file**: インジェクトするスクリプトの URL
    -   **code**: インジェクトするスクリプトのテキスト

-   **callback**: JavaScript コードのインジェクト後に実行する関数

    -   インジェクトしたスクリプトの形式が `code` の場合、callback に、`配列` 形式のパラメーターが 1 つ渡され実行されます。このパラメーターは、インジェクトしたスクリプトの実行結果 ( 戻り値 ) です。複数行のスクリプトに関しては、最後のステートメント ( statement ) の戻り値、または、最後に評価 ( evaluate ) した表現 ( expression ) が、引き渡すパラメーターとなります。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows 8 と 8.1

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.executeScript({file: "myscript.js"});
});
{{</highlight>}}

#### Windows 特有の動作

[MSDN ドキュメント](https://msdn.microsoft.com/en-us/library/windows.ui.xaml.controls.webview.invokescriptasync.aspx)
に記載されているように、実行されたスクリプトは、文字列の値を返します。それ以外の場合、\**callback*\*
に渡されるパラメーターは、`[null]` となります。

### insertCSS

`InAppBrowser` ウィンドウ上に、CSS をインジェクト ( inject ) します。

{{<highlight javascript>}}
ref.insertCSS(details, callback);
{{</highlight>}}

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: 実行するスクリプトの詳細。`file` または `code`
    キーを指定します。 *(Object)*

    -   **file**: インジェクトするスタイルシートの URL
    -   **code**: インジェクトするスタイルシートのテキスト

-   **callback**: CSS のインジェクト後に実行する関数

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Quick 例

{{<highlight javascript>}}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
ref.addEventListener('loadstop', function() {
    ref.insertCSS({file: "mystyles.css"});
});
{{</highlight>}}
