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
Inappbrowser プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-inappbrowser/blob/master/RELEASENOTES.md#054-dec-02-2014">0.5.4</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-inappbrowser)
をご確認ください。

</div>

このプラグインを使用すると、`window.open()` の実行時、Web
ブラウザーが立ち上がります。

    var ref = window.open('http://apache.org', '_blank', 'location=yes');

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

このプラグインは、`windows.open` をフック ( hook ) しています。

`window.open` は、グローバルスコープに属していますが、InAppBrowser
が使用できるのは、`deviceready` イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("window.open works well");
    }

プラグイン ID
-------------

    org.apache.cordova.inappbrowser

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.inappbrowser`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

window.open
-----------

`InAppBrowser`
の新規インスタンス内、現在開いているブラウザーのインスタンス内、または、system
browser ( システムブラウザー ) 内で、URL を開きます。

    var ref = window.open(url, target, options);

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **url**: 読み込みをする URL。Unicode 文字が URL
    に含まれる場合、`encodeURI()` を使用して変換します。 *(String)*。
-   **target**: URL
    の読み込み先として使用するブラウザーの種別。任意のパラメーターです。デフォルトでは、`_self`
    となります。 *(String)*
    -   `_self`: ホワイトリストに対象の URL
        が登録されている場合には、Cordova WebView
        を開きます。それ以外の場合には、`InAppBrowser` を開きます。
    -   `_blank`: `InAppBrowser` を開きます。
    -   `_system`: システム標準の Web ブラウザー ( system's web browser
        ) を開きます。
-   **options**: `InAppBrowser`
    で使用する、任意のオプションです。デフォルトでは、`location=yes`
    となります。 *(String)*

    `options` で使用する文字列に、空白は使用できません。また、各設定 (
    名前と値の組み合わせ )
    の間を、コンマで区切る必要があります。各設定の名前では、大文字・小文字を区別しません。次の値は、すべてのプラットフォームでサポートされています。

    -   **location**: `yes` または `no` を設定すると、`InAppBrowser`
        のロケーションバーを、それぞれ、表示または非表示にできます。

    Android 専用 :

    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
        とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
        イベントが発火します。省略または `no` ( デフォルト )
        に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    -   **clearcache**: `yes`
        に設定した場合、新規のウィンドウを開く前に、ブラウザーの cookie
        とキャッシュを削除します。
    -   **clearsessioncache**: `yes`
        に設定した場合、新規のウィンドウを開く前に、セッションの cookie
        とキャッシュを削除します。

    iOS 専用 :

    -   **closebuttoncaption**: **Done**
        ボタンのラベルに使用する文字列を設定します。この値は、各自でローカライズする必要があります。
    -   **disallowoverscroll**: `yes` または `no` に設定すると (
        デフォルトでは `no` )、UIWebViewBounce
        プロパティーを、それぞれ、オンまたはオフにします。
    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
        とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
        イベントが発火します。省略または `no` ( デフォルト )
        に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。
    -   **clearcache**: `yes`
        に設定した場合、新規のウィンドウを開く前に、ブラウザーの cookie
        とキャッシュを削除します。
    -   **clearsessioncache**: `yes`
        に設定した場合、新規のウィンドウを開く前に、セッションの cookie
        とキャッシュを削除します。
    -   **toolbar**: `yes` または `no` に設定すると、`InAppBrowser`
        のツールバーを、それぞれ、表示または非表示にします (
        デフォルトでは `yes` )。
    -   **enableViewportScale**: meta タグを使用した、ビューポート (
        viewport ) の尺度変更を、有効 ( `yes` ) または無効 ( `no` )
        にします ( デフォルトでは `no` )。
    -   **mediaPlaybackRequiresUserAction**: `yes` または `no`
        に設定して、 HTML5 の audio または video
        の自動再生を、有効または無効にします ( デフォルトでは `no` )。
    -   **allowInlineMediaPlayback**: `yes` または `no`
        に設定して、端末標準のメディア再生用インターフェイスではなく、ブラウザーウィンドウ内でのインライン再生を許可するか設定します。HTML
        の `video` 要素には `webkit-playsinline`
        属性を指定する必要があります ( デフォルトは `no` )。
    -   **keyboardDisplayRequiresUserAction**: JavaScript の `focus()`
        を使用して、form
        要素がフォーカスされたとき、キーボードを表示するかを、`yes`
        または `no` で設定します ( デフォルトは `yes` )。
    -   **suppressesIncrementalRendering**:
        レンダリング処理の開始時期を設定します。表示するコンテンツをすべて受け取った後に行うのであれば
        `yes` に設定します ( デフォルトは `no` )。
    -   **presentationstyle**: [presentation style ( Apple 社のページ
        )](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle)
        を設定します。`pagesheet`、`formsheet`、`fullscreen`
        のいずれかを設定します ( デフォルトは、`fullscreen` )。
    -   **transitionstyle**: [transition style ( Apple 社のページ
        )](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle)
        を設定します。`fliphorizontal`、`crossdissolve`、`coververtical`
        のいずれかを設定します ( デフォルトは `coververtical` )。
    -   **toolbarposition**: `top` または `bottom`
        に設定して、ツールバーの表示位置 ( ウィンドウの上・下 )
        を指定します ( デフォルトは `bottom` )。

    Windows 専用 :

    -   **hidden**: `yes` に設定した場合、ブラウザーの 「 作成 」
        とページの読み込みを行いますが、表示はしません。読み込みが完了すると、loadstop
        イベントが発火します。省略または `no` ( デフォルト )
        に設定した場合、通常通り、ブラウザーを開き、読み込みを行います。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');

InAppBrowser
------------

`window.open` を呼び出し、返ってきたオブジェクトです。

### メソッド

-   addEventListener
-   removeEventListener
-   close
-   show
-   executeScript
-   insertCSS

addEventListener
----------------

> `InAppBrowser` のイベントに対して、リスナーを登録します。

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

### InAppBrowserEvent のプロパティー

-   **type**: eventname ( イベント名
    )。`loadstart`、`loadstop`、`loaderror`、`exit`
    のいずれかとなります。 *(String)*
-   **url**: 読み込んだ URL *(String)*
-   **code**: エラーコード ( `loaderror` が発生した場合のみ ) *(Number)*
-   **message**: エラーメッセージ ( `loaderror` が発生した場合のみ )
    *(String)*

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });

removeEventListener
-------------------

> `InAppBrowser` のイベントに対して登録されたリスナーを削除します。

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

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS
-   Windows 8 と 8.1
-   Windows Phone 7 と 8

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);

close
-----

> `InAppBrowser` ウィンドウを閉じます。

    ref.close();

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();

show
----

> 非表示で実行されている InAppBrowser ウィンドウを表示します。
> InAppBrowser ウィンドウ
> がすでに表示されている場合には、この関数を呼んでも効果ありません。

    ref.show();

-   **ref**: InAppBrowser ウィンドウへのリファレンス (`InAppBrowser`)

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();

executeScript
-------------

> `InAppBrowser` ウィンドウ上に、JacaScript コードをインジェクト (
> inject/注入 ) します。

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
        expression ) が、引き渡すパラメーターとなります。 evaluated.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });

insertCSS
---------

> `InAppBrowser` ウィンドウ上に、CSS をインジェクト ( inject ) します。

    ref.insertCSS(details, callback);

-   **ref**: `InAppBrowser` ウィンドウへのリファレンス *(InAppBrowser)*
-   **injectDetails**: 実行するスクリプトの詳細。`file` または `code`
    キーを指定します。 *(Object)*
-   **file**: インジェクトするスタイルシートの URL
-   **code**: インジェクトするスタイルシートのテキスト
-   **callback**: CSS のインジェクト後に実行する関数

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Quick 例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
