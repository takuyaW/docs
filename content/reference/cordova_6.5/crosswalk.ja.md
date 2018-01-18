---
title: Crosswalk プラグイン ( Android 専用 )
weight: 40
---

テスト環境 : [2.3.0](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview/releases/tag/2.3.0)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview">}} をご確認ください。
{{</note>}}

このプラグインを Cordova アプリに組み込むと、System WebView
の代わりに、[Crosswalk WebView](https://crosswalk-project.org/)
を使用できます。

Crosswalk とは？
----------------

Android の製造元は、複数あり、バージョンも多様です。このため、複数の
Android のバージョンで、安定して動作する Cordova
アプリの開発には、多くの苦労があります。よく知られている事として、端末に標準装備されている
WebView
のバージョンの違いにより、表示、挙動などに影響がでることがあります。また、WebView
の更新は、Android 4.4 までは、OS
の更新時に行われていました。このため、諸事情により、端末の更新ができない場合には、古いバージョンの
Android 標準装備の WebView
をいつまでも使用することになりました。Crosswalk
の導入により、このような問題を解決することができます。

Crosswalk は、「 Web ランタイム 」 と呼ばれるものの 1 つであり、Google
Chromium を基礎として使用しています。Crosswalk では、Android
に標準装備されている WebView と比較しても、より多くの HTML
の機能をサポートしています。また、Crosswalk に移行した場合、Chromium
のバージョンも同時に更新されます。よって、端末の製造元または Android
のバージョンの違いによる影響がなくなるため、アプリの動作が安定します。

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-crosswalk-webview
{{</highlight>}}

サポート対象のプラットフォーム
------------------------------

-   Android 4.0 以上
-   Cordova 5.2 以上

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合、Monaca クラウド IDE
上で、`Crosswalk WebView Engine` プラグインを有効化します。

1.  Monaca クラウド IDE から、 {{<menu menu1="設定" menu2="Cordova プラグインの管理">}}
    を選択します。

2.  `Crosswalk WebView Engine` を有効化します ( 下のスクリーンショットを参照 )。

    {{<img src="/images/reference/cordova_6.5/crosswalk/1.png">}}

3.  プラグインを有効にした後、アーキテクチャを選択するため {{<guilabel name="設定">}}
    ボタンをクリックします。

    {{<img src="/images/reference/cordova_6.5/crosswalk/2.png">}}

4.  次のダイアログが表示されます。設定後、 {{<guilabel name="OK">}} ボタンをクリックします。

    {{<img src="/images/reference/cordova_6.5/crosswalk/3.png" width="500">}}

{{<note>}}
プラグインと Crosswalk のどちらのバージョンも変更できますが、組み合わせによっては、正常に動作しない場合があります。
{{</note>}}

Crosswalk プラグインのメリット・デメリット
------------------------------------------

メリット | デメリット
-----------|--------------------
<ul><li>同一バージョンの WebView を各端末にインストールできます。これにより、API の動作の差異に起因する問題を解決できます。</li><br /><li>最新の WebView を使用するため、パフォーマンスの向上を期待できます。</li></ul> | <ul><li>Crosswalk を実装したアプリをビルドすると、2 つの APK ファイルが作成されるため、Google Play に、2 つとも、アップロードする必要があります。</li><br /><li>Crosswalk ( Chromium ) 自体にバグがある場合には、インストール先のすべての端末上に、同じバグが存在することになります。</li><br /><li>`+20MB` ほど、アプリのサイズが大きくなります。</li><br /><li>Crosswalk 自体に重大なバグがある場合、バグが解消されるまで、アプリが正常に動作しないことが考えられます。</li><br /><li>セキュリティーの脆弱性が Crosswalk ( Chromium ) 内で見つかった場合には、Google Play との販売・配布契約に基づき、アプリの配布を停止・終了されることがあります。</li><br /><li>Android 5.0 以降、WebView は、OS とは切り離され、別のコンポーネントとなり、随時更新されるようになりました。よって、場合によっては、Crosswalk WebView の方が古くなる可能性があります。</li></ul>