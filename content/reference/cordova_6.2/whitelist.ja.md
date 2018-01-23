ホワイトリストへの登録 プラグイン ( Android 専用 )
==================================================

テスト環境 ( バージョン番号 ) :
[1.2.2](https://github.com/apache/cordova-plugin-whitelist/releases/tag/1.2.2)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-whitelist)
をご確認ください。

</div>

このプラグインを使用して、WebView ( Cordova 4.0 以降 )
上のページ遷移に対して、ホワイトリスト ポリシー ( アクセスできる URL
の指定など ) を適用します。

プラグイン ID
-------------

    cordova-plugin-whitelist

サポート対象のプラットフォーム
------------------------------

-   Android 4.0 以上

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

<div class="admonition note">

Whitelist プラグインは、Cordova 5.2 から、Monaca
アプリに自動で組み込まれます。削除はできません。

</div>

パーミッション ( 許可 ) の設定
------------------------------

### ページの遷移時に適用される設定 ( navigation を使用した、ホワイトリストの設定 )

WebView 上で使用できる URL を制御します。適用範囲は、最上位のページ遷移
( top-level navigation ) のみです。

Android では、http(s) スキーマを使用していない iframe にも適用されます。

デフォルトでは、`file://` 形式の URL のみ使用できます。他の URL
を使用する場合、たとえば、次のように `<allow-navigation>`
を指定して、`config.xml` に追加します。

&lt;allow-navigation href=\\"\*\\" /&gt;

パラメーター

:   ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `href`                             デフォルトでは `\"*\"` 。すべてのアドレスを許可します。
      ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

例

:   `config.xml` ファイル内で、アクセスを許可する URL
    毎に、`<allow-navigation>` タグを設定する必要があります。

    ``` {.sourceCode .xml}
    <!-- Allow links to example.com -->
    <allow-navigation href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix
         to the host, or as a suffix to the path -->
    <allow-navigation href="*://*.example.com/*" />

    <!-- A wildcard can be used to whitelist the entire network,
         over HTTP and HTTPS. -->
    <allow-navigation href="*" />

    <!-- The above is equivalent to these three declarations -->
    <allow-navigation href="http://*/*" />
    <allow-navigation href="https://*/*" />
    <allow-navigation href="data:*" />
    ```

### 外部アプリの呼び出し時に適用される設定 ( intent を使用した、ホワイトリストの設定 )

アプリ側からシステム側に対して、外部への URL
を開くようにリスクエストすることができます。デフォルトでは、外部への URL
は一切開くことができません。

Android における、「 BROWSABLE 」 設定に相当します。

この設定は、プラグインではなく、`window.open()`
の呼び出し時とハイパーリンクだけに適用されます。

次のように、 `config.xml` ファイルに `<allow-intent>` タグを追加します。

&lt;allow-intent href=\\"\*\\" /&gt;

パラメーター

:   ---------------------- --------------------------------------------------------------------------------------------------------------------------------------------------
      `href`                 デフォルトでは `\"\"` 。外部への URL は、使用できません。
      ---------------------- --------------------------------------------------------------------------------------------------------------------------------------------------

例

:   次のように、 `config.xml` ファイルに `<allow-intent>`
    タグを追加します。

    ``` {.sourceCode .xml}
    <!-- Allow links to web pages to open in a browser -->
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />

    <!-- Allow links to example.com to open in a browser -->
    <allow-intent href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix
         to the host, or as a suffix to the path -->
    <allow-intent href="*://*.example.com/*" />

    <!-- Allow SMS links to open messaging app -->
    <allow-intent href="sms:*" />

    <!-- Allow tel: links to open the dialer -->
    <allow-intent href="tel:*" />

    <!-- Allow geo: links to open maps -->
    <allow-intent href="geo:*" />

    <!-- Allow all unrecognized URLs to open installed apps
         *NOT RECOMMENDED* -->
    <allow-intent href="*" />
    ```

### コンテンツのリクエスト時に適用される設定 ( ネットワーク リクエスト用のホワイトリストの設定 )

JavaScript から ネイティブ側へのブリッジ越し ( Cordova
側の処理をネイティブ側でフックする場合 ) に送信されるネットワーク
リクエスト ( 画像、XHR など )
に関して、どのリクエストを許可するか制御できます。また、ページ上に読み込むコンテンツ
( 画像、CSS、JavaScript )
に対しても、パーミッションを設定できます。こちらの設定をする場合には、`<access origin>`
と コンテンツ セキュリティー ポリシー ( コンテンツ セキュリティー
ポリシー / CSP ) の両方を設定します。`<access>`
タグを設定しない場合、`file://` 形式の URL
へのリクエストのみ許可されます。

<div class="admonition note">

Android では、TalkBack
を正常に動作させるため、`https://ssl.gstatic.com/accessibility/javascript/android/`
へのリクエストがデフォルトで有効になっています。

</div>

<div class="admonition note">

セキュリティー強化の点から、content\_security\_policy
も使用することを推奨しています。こちらのホワイトリスト設定は、CSP
をサポートしていない WebView 向けです。

</div>

&lt;access origin=\\"\*\\" /&gt;

パラメーター

:   ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `origin`                           デフォルトでは `\"*\"` 。すべてのアドレスを許可します。
      ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

例

:   次のように、 `config.xml` ファイルに `<access>` タグを追加します。

    ``` {.sourceCode .xml}
    <!-- Allow images, xhrs, etc. to google.com -->
    <access origin="http://google.com" />
    <access origin="https://google.com" />

    <!-- Access to the subdomain maps.google.com -->
    <access origin="http://maps.google.com" />

    <!-- Access to all the subdomains on google.com -->
    <access origin="http://*.google.com" />

    <!-- Enable requests to content: URLs -->
    <access origin="content:///*" />

    <!-- Don't block any requests -->
    <access origin="*" />
    ```

#### コンテンツ セキュリティー ポリシー

ネットワーク リクエスト ( 画像、XHR など )
に関して、どのリクエストを許可するか制御できます。

ネットワーク リクエスト用のホワイトリスト ( 上記を参照 )
では、リクエストの種類に応じたフィルターを行っていません (
たとえば、`<video>` と WebSocket はブロックされません )
。よって、上記のホワイトリストに加えて、[Content Security
Policy](http://content-security-policy.com/) の `<meta>`
タグを、すべてのページに設定することを推奨します。

なお、System WebView における　CSP のサポートは、KitKat から始りました (
Crosswalk WebView では、すべてのバージョンで利用できます )。

&lt;meta http-equiv=\\"Content-Security-Policy\\" content=\\"default-src \*; style-src \* 'unsafe-inline'; script-src \* 'unsafe-inline' 'unsafe-eval'\\"&gt;

<div class="admonition note">

Cordova 3.5/4.2 からアップグレードする場合、デフォルトでは、CSP
は設定されていません。CSP
の設定がされていない場合、エラーが出力されますが、アプリの動作には影響ありません。エラーを解消するには、上記の
meta タグを HTML に記述する必要があります。

</div>

例

:   CSP 宣言の例を、次に記します ( `.html` ページに記述 )。

    ``` {.sourceCode .xml}
    <!-- Good default declaration:
        * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
        * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
        * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
            * Enable inline JS: add 'unsafe-inline' to default-src
            * Enable eval(): add 'unsafe-eval' to default-src
    -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *">

    <!-- Allow everything but only from the same origin and foo.com -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' foo.com">

    <!-- This policy allows everything (eg CSS, AJAX, object, frame, media, etc) except that
        * CSS only from the same origin and inline styles,
        * scripts only from the same origin and inline styles, and eval()
    -->
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'">

    <!-- Allows XHRs only over HTTPS on the same domain. -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https:">

    <!-- Allow iframe to https://cordova.apache.org/ -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src 'self' https://cordova.apache.org">
    ```


