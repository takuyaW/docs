InAppBrowser プラグイン
=======================

テスト環境 ( バージョン番号 ) :
[1.7.1](https://github.com/apache/cordova-plugin-inappbrowser/releases/tag/1.7.1)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-inappbrowser)
をご確認ください。

</div>

このプラグインでは、`cordova.InAppBrowser.open()`
を使用して、InAppBrowser ウィンドウ ( InAppBrowser 提供の Web ブラウザー
) を開きます。

``` {.sourceCode .javascript}
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
```

`cordova.InAppBrowser.open()` 関数は、`window.open()`
関数を代替する関数です。次の記述をすれば、既存の `window.open()`
を使用して、InAppBrowser ウィンドウを開くことができます。

``` {.sourceCode .javascript}
window.open = cordova.InAppBrowser.open;
```

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

    delete window.open // Reverts the call back to it's prototype's default

`window.open` は、グローバルスコープに属していますが、InAppBrowser
が使用できるのは、`deviceready` イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("window.open works well");
    }

プラグイン ID
-------------

    cordova-plugin-inappbrowser

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`InAppBrowser` プラグインを
有効 &lt;add\_plugins&gt; にします。

API の解説
----------

### cordova.InAppBrowser.open

`InAppBrowser`
の新規インスタンス内、現在開いているブラウザーのインスタンス内、または、system
browser ( システムブラウザー ) 内で、URL を開きます。

    var ref = cordova.InAppBrowser.open(url, target, options);

-   **ref**: ターゲットが 、`'_blank'` に設定されているときの
    `InAppBrowser` ウィンドウへのリファレンス。 *(InAppBrowser)*
-   **url**: 読み込みをする URL。Unicode 文字が URL
    に含まれる場合、`encodeURI()` を使用して変換します。 *(String)*。
-   **target**: URL
    の読み込み先として使用するブラウザーの種別。任意のパラメーターです。デフォルトでは、`_self`
    となります。 *(String)*

    > -   `_self`: ホワイトリストに対象の URL
    >     が登録されている場合には、Cordova WebView
    >     を開きます。それ以外の場合には、`InAppBrowser` を開きます。
    > -   `_blank`: `InAppBrowser` を開きます。
    > -   `_system`: システム標準の Web ブラウザー ( system's web
    >     browser ) を開きます。

-   **options**: `InAppBrowser`
    で使用する、任意のオプションです。デフォルトでは、`location=yes`
    となります。 *(String)* `options`
    で使用する文字列に、空白は使用できません。また、各設定 (
    名前と値の組み合わせ )
    の間を、コンマで区切る必要があります。各設定の名前では、大文字・小文字を区別しません。次の値は、すべてのプラットフォームでサポートされています。

    > -   **location**: `yes` または `no` を設定すると、`InAppBrowser`
    >     のロケーションバーを、それぞれ、表示または非表示にできます。
    >
    > Android 専用 :
    >
    > -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
    >     とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
    >     イベントが発火します。省略または `no` ( デフォルト )
    >     に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    > -   **clearcache**: `yes`
    >     に設定した場合、新規のウィンドウを開く前に、ブラウザーの
    >     cookie とキャッシュを削除します。
    > -   **clearsessioncache**: `yes`
    >     に設定した場合、新規のウィンドウを開く前に、セッションの
    >     cookie とキャッシュを削除します。
    > -   **zoom**: `yes` に設定した場合、Android
    >     ブラウザーのズームコントロール ( 制御バー )
    >     が表示されます。`no`
    >     に設定した場合、非表示になります。デフォルト値は、`yes` です。
    > -   **hardwareback**: `yes` に設定した場合、ハードウェア標準の 「
    >     戻る 」 ボタンを使用して、前のページに戻ります (
    >     `InAppBrowser` に記録されているページ遷移の履歴を使用 )。「
    >     前のページ 」 が存在しない場合には、`InAppBrowser`
    >     が閉じます。デフォルト値は、`yes` です。「 戻る 」
    >     ボタンを使用して、InAppBrowser を閉じたい場合には、`no`
    >     に設定します。
    > -   **mediaPlaybackRequiresUserAction**: `yes` または `no`
    >     に設定して、 HTML5 の audio または video
    >     の自動再生を、有効または無効にします ( デフォルトでは `no` )。
    > -   **shouldPauseOnSuspend**: InAppBrowser
    >     WebViewでのバックグラウンドオーディオを停止するためにアプリで一時停止/再開させるには
    >     `yes` に設定します。（これは、
    >     [CB-11013](https://issues.apache.org/jira/browse/CB-11013)
    >     のようなGoogle
    >     Playの問題を避けるために必要な場合があります。）
    > -   **useWideViewPort**: WebViewが、 "viewport"
    >     タグのサポートを有効にするか、wide viewport
    >     を使用するかを設定します。設定の値が `no`
    >     の場合、レイアウト幅は常に端末非依存（CSS）ピクセルのWebViewコントロールの幅に設定されます。値が
    >     `yes` で、ページに viewport
    >     タグが含まれている場合、タグで指定された幅の値が使用されます。ページにタグが含まれていないか、幅が指定されていない場合は、wide
    >     viewport が使用されます。（デフォルトは `yes` です）。
    >
    > iOS 専用 :
    >
    > -   **closebuttoncaption**: **Done**
    >     ボタンのラベルに使用する文字列を設定します。この値は、各自でローカライズする必要があります。
    > -   **disallowoverscroll**: `yes` または `no` に設定すると (
    >     デフォルトでは `no` )、UIWebViewBounce
    >     プロパティーを、それぞれ、オンまたはオフにします。
    > -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
    >     とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
    >     イベントが発火します。省略または `no` ( デフォルト )
    >     に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    > -   **clearcache**: `yes`
    >     に設定した場合、新規のウィンドウを開く前に、ブラウザーの
    >     cookie とキャッシュを削除します。
    > -   **clearsessioncache**: `yes`
    >     に設定した場合、新規のウィンドウを開く前に、セッションの
    >     cookie とキャッシュを削除します。
    > -   **toolbar**: `yes` または `no` に設定すると、`InAppBrowser`
    >     のツールバーを、それぞれ、表示または非表示にします (
    >     デフォルトでは `yes` )。
    > -   **enableViewportScale**: meta タグを使用した、ビューポート (
    >     viewport ) の尺度変更を、有効 ( `yes` ) または無効 ( `no` )
    >     にします ( デフォルトでは `no` )。
    > -   **mediaPlaybackRequiresUserAction**: `yes` または `no`
    >     に設定して、 HTML5 の audio または video
    >     の自動再生を、有効または無効にします ( デフォルトでは `no` )。
    > -   **allowInlineMediaPlayback**: `yes` または `no`
    >     に設定して、端末標準のメディア再生用インターフェイスではなく、ブラウザーウィンドウ内でのインライン再生を許可するか設定します。HTML
    >     の `video` 要素には `webkit-playsinline`
    >     属性を指定する必要があります ( デフォルトは `no` )。
    > -   **keyboardDisplayRequiresUserAction**: JavaScript の `focus()`
    >     を使用して、form
    >     要素がフォーカスされたとき、キーボードを表示するかを、`yes`
    >     または `no` で設定します ( デフォルトは `yes` )。
    > -   **suppressesIncrementalRendering**:
    >     レンダリング処理の開始時期を設定します。表示するコンテンツをすべて受け取った後に行うのであれば
    >     `yes` に設定します ( デフォルトは `no` )。
    > -   **presentationstyle**: [presentation style ( Apple 社のページ
    >     )](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle)
    >     を設定します。`pagesheet`、`formsheet`、`fullscreen`
    >     のいずれかを設定します ( デフォルトは、`fullscreen` )。
    > -   **transitionstyle**: [transition style ( Apple 社のページ
    >     )](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle)
    >     を設定します。`fliphorizontal`、`crossdissolve`、`coververtical`
    >     のいずれかを設定します ( デフォルトは `coververtical` )。
    > -   **toolbarposition**: `top` または `bottom`
    >     に設定して、ツールバーの表示位置 ( ウィンドウの上・下 )
    >     を指定します ( デフォルトは `bottom` )。
    >
    > Windows 専用 :
    >
    > -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
    >     とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
    >     イベントが発火します。省略または `no` ( デフォルト )
    >     に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    > -   **fullscreen**: `yes` に設定した場合、枠なしのブラウザー
    >     コントロール ( 制御メニュー )
    >     が作成されます。なお、\**location=no*\*
    >     が設定されている場合、InAppBrowser
    >     ウィンドウを閉じるメニューは表示されなくなります。
    > -   **hardwareback**:
    >     Androidプラットフォームと同じように動作します。

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = cordova.InAppBrowser.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

#### Windows 特有の動作

Windows 8.0/8.1 および Windows Phone 8.1 では、Cordova WebView
上で外部の URL ( Remote URL ) を開くことができません。`target='_self'`
を設定しているのであれば、外部の URL ( Remote URL ) は、システム標準の
Web ブラウザー上で常に開かれます。

Windows 10 では、ホワイトリストに URL
が登録されていない場合、加えて、`target='_self'` の場合、InAppBrowser
の代わりに、システム標準の Web ブラウザー上で、URL が表示されます。

Firefox OS 同様に、InAppBrowser
ウィンドウの挙動は、`inAppBrowserWrap`/inAppBrowserWrapFullscreen ( CSS
クラス ) を使用すれば、オーバーライド ( override ) できます。

### InAppBrowser

ターゲットが `'_blank'` に設定されているときに
`cordova.InAppBrowser.open` の呼び出しから返されたオブジェクトです。

#### メソッド

-   addEventListener
-   removeEventListener
-   close
-   show
-   hide
-   executeScript
-   insertCSS

### InAppBrowser.addEventListener

> `InAppBrowser` からイベントリスナーを登録します。 （ターゲットが
> `'_blank'` に設定されている場合のみ使用可能）

    ref.addEventListener(eventname, callback);

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーを設定するイベント *(String)*
-   **loadstart**: `InAppBrowser` が URL
    の読み込みを始めたときに発火するイベント
-   **loadstop**: `InAppBrowser` が URL
    の読み込みを終えたときに発火するイベント
-   **loaderror**: URL の読み込み時に、`InAppBrowser`
    がエラーを検出したときに発火するイベント
-   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
-   **callback**:
    イベントが発火したときに実行される関数。`InAppBrowserEvent`
    オブジェクトを、パラメーターとして、この関数に渡します。

### 例

``` {.sourceCode .javascript}
var inAppBrowserRef;

function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

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
```

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

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });

### InAppBrowser.removeEventListener

> `InAppBrowser` からイベントリスナーを削除します。 （ターゲットが
> `'_blank'` に設定されている場合のみ使用可能）

    ref.removeEventListener(eventname, callback);

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **eventname**: リスナーの登録を解除するイベント *(String)*
-   **loadstart**: `InAppBrowser` が URL
    の読み込みを始めたときに発火するイベント
-   **loadstop**: `InAppBrowser` が URL
    の読み込みを終えたときに発火するイベント
-   **loaderror**: URL の読み込み時に、`InAppBrowser`
    がエラーを検出したときに発火するイベント
-   **exit**: `InAppBrowser` ウィンドウを閉じるときに発火するイベント
-   **callback**:
    イベントが発火したときに実行される関数。`InAppBrowserEvent`
    オブジェクトを、この関数に渡します。

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

### InAppBrowser.close

> `InAppBrowser` ウィンドウを閉じます。

    ref.close();

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

### InAppBrowser.show

> 非表示で実行されている InAppBrowser ウィンドウを表示します。
> InAppBrowser ウィンドウ
> がすでに表示されている場合には、この関数を呼んでも効果ありません。

    ref.show();

-   **ref**: InAppBrowser ウィンドウへのリファレンス (InAppBrowser)

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();

InAppBrowser.close -----------------

InAppBrowserウィンドウを非表示にします。
InAppBrowserがすでに非表示の場合、この呼び出しは無効です。

    ref.hide();

-   **ref**: InAppBrowser ウィンドウへのリファレンス (InAppBrowser)

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank');
    // some time later...
    ref.hide();

### InAppBrowser.executeScript

`InAppBrowser` ウィンドウ上に、JacaScript コードをインジェクト (
inject/注入 ) します。（ターゲットが `'_blank'`
に設定されている場合のみ使用可能）

    ref.executeScript(details, callback);

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: 実行するスクリプトの詳細。`file` または `code`
    キーを指定します。 *(Object)*
-   **file**: インジェクトするスクリプトの URL
-   **code**: インジェクトするスクリプトのテキスト
-   **callback**: JavaScript コードのインジェクト後に実行する関数
    -   インジェクトしたスクリプトの形式が `code` の場合、callback
        に、`配列` 形式のパラメーターが 1
        つ渡され実行されます。このパラメーターは、インジェクトしたスクリプトの実行結果
        ( 戻り値 )
        です。複数行のスクリプトに関しては、最後のステートメント (
        statement ) の戻り値、または、最後に評価 ( evaluate ) した表現 (
        expression ) が、引き渡すパラメーターとなります。

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### Quick 例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });

#### Windows 特有の動作

[MSDN
ドキュメント](https://msdn.microsoft.com/en-us/library/windows.ui.xaml.controls.webview.invokescriptasync.aspx)
に記載されているように、実行されたスクリプトは、文字列の値を返します。それ以外の場合、\**callback*\*
に渡されるパラメーターは、`[null]` となります。

### InAppBrowser.insertCSS

CSSを `InAppBrowser` ウィンドウに挿入します。（ターゲットが `'_blank'`
に設定されている場合のみ使用可能）

    ref.insertCSS(details, callback);

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

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });

サンプル: InAppBrowserでヘルプページを表示する
----------------------------------------------

このプラグインを使用すると、アプリ内で役立つドキュメントページを表示できます。
オンラインヘルプドキュメントを表示し、アプリケーションを終了することなく閉じることができます。

以下は、これを行うためのサンプルです。

-   [ユーザーにヘルプを求める方法を提供する](#give)
-   [ヘルプページを読み込む](#load)
-   [ユーザーにページの準備ができていることを知らせる](#let)
-   [ヘルプページを表示する](#show)
-   [ページエラーを処理する](#handle)

### ユーザーにヘルプを求める方法を提供する

アプリでこれを行う方法はたくさんあります。
ドロップダウンリストは簡単な方法です。

``` {.sourceCode .html}
<select id="help-select">
    <option value="default">Need help?</option>
    <option value="article">Show me a helpful article</option>
    <option value="video">Show me a helpful video</option>
    <option value="search">Search for other topics</option>
</select>
```

ページの `onDeviceReady` 関数でユーザーの選択肢を収集し、適切な URL
を共有ライブラリファイルのヘルパー関数に送信します。 ヘルパー関数は
showHelp() です。次にその関数を記述します。

``` {.sourceCode .javascript}
$('#help-select').on('change', function (e) {

    var url;

    switch (this.value) {

        case "article":
            url = "https://cordova.apache.org/docs/en/latest/"
                        + "reference/cordova-plugin-inappbrowser/index.html";
            break;

        case "video":
            url = "https://youtu.be/F-GlVrTaeH0";
            break;

        case "search":
            url = "https://www.google.com/#q=inAppBrowser+plugin";
            break;
    }

    showHelp(url);

});
```

### ヘルプページを読み込む

`open` 関数を使用してヘルプページを読み込みます。hidden プロパティを yes
に設定しているため、ページコンテンツが読み込まれた後にのみブラウザを表示できます。
こうすることで、ユーザーはコンテンツが表示されるのを待つ間に空白のブラウザが表示されなくなります。
loadstop
イベントが発生すると、コンテンツがいつロードされたかがわかります。
loadstop イベントを処理します。

``` {.sourceCode .javascript}
function showHelp(url) {

    var target = "_blank";

    var options = "location=yes,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

}
```

### ユーザーにページの準備ができていることを知らせる

ブラウザがすぐに表示されないため、loadstart
イベントを使用して、状況メッセージ、進行状況バー、またはその他のインディケーターを表示できます。
これは、コンテンツが途中であることをユーザーに保証します。

``` {.sourceCode .javascript}
function loadStartCallBack() {

    $('#status-message').text("loading please wait ...");

}
```

### ヘルプページを表示する

`loadstopcallback`
イベントが発生すると、コンテンツがロードされたことがわかり、ブラウザを表示させることができます。
このような仕掛けは、より良いパフォーマンスの印象を作り出すことができます。
実は、コンテンツが読み込まれる前にブラウザを表示するかどうかにかかわらず、読み込み時間は同じです。

``` {.sourceCode .javascript}
function loadStopCallBack() {

    if (inAppBrowserRef != undefined) {

        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });

        $('#status-message').text("");

        inAppBrowserRef.show();
    }

}
```

`insertCSS`
関数の呼び出しに気づいたかもしれません。これは、今回のサンプルの主な目的ではありませんが、この場合、ページのフォントサイズが一定のサイズになっていることを確認しています。この関数を使用して、任意の
CSS スタイル要素を挿入できます。 プロジェクト内の CSS
ファイルを指すこともできます。

### ページエラーを処理する

場合によっては、ページがなくなったり、スクリプトエラーが発生したり、ユーザーにはリソースを表示する権限がありません。どのようにその状況を処理するかは、開発者側の設計に完全に依存します。ブラウザにそのメッセージを表示させるか、別の方法で提示することができます。

エラーをメッセージボックスに表示させたいと思います。 `alert`
関数を呼び出すスクリプトを注入することで、これを行うことができます。これは
Windows デバイス上のブラウザでは機能しないため、executeScript
コールバック関数のパラメータを調べて、有効かどうかを確認する必要があります。動作しない場合は、ページの
`<div>` にエラーメッセージが表示されます。

``` {.sourceCode .javascript}
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
```

詳細情報
--------

### ローカルURL（アプリ内のソース）

    var iab = cordova.InAppBrowser;

    iab.open('local-url.html');                  // loads in the Cordova WebView
    iab.open('local-url.html', '_self');         // loads in the Cordova WebView
    iab.open('local-url.html', '_system');       // Security error: system browser, but url will not load (iOS)
    iab.open('local-url.html', '_blank');        // loads in the InAppBrowser
    iab.open('local-url.html', 'random_string'); // loads in the InAppBrowser
    iab.open('local-url.html', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar

### ホワイトリストに登録されたコンテンツ

    var iab = cordova.InAppBrowser;

    iab.open('http://whitelisted-url.com');                  // loads in the Cordova WebView
    iab.open('http://whitelisted-url.com', '_self');         // loads in the Cordova WebView
    iab.open('http://whitelisted-url.com', '_system');       // loads in the system browser
    iab.open('http://whitelisted-url.com', '_blank');        // loads in the InAppBrowser
    iab.open('http://whitelisted-url.com', 'random_string'); // loads in the InAppBrowser

    iab.open('http://whitelisted-url.com', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar

### ホワイトリストに登録されていないURL

    var iab = cordova.InAppBrowser;

    iab.open('http://url-that-fails-whitelist.com');                  // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', '_self');         // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', '_system');       // loads in the system browser
    iab.open('http://url-that-fails-whitelist.com', '_blank');        // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', 'random_string'); // loads in the InAppBrowser
    iab.open('http://url-that-fails-whitelist.com', 'random_string', 'location=no'); // loads in the InAppBrowser, no location bar
