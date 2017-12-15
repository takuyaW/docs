  Crosswalk プラグイン ( Android 専用 )
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  .. rst-class:: right-menu
  .. raw:: html
  &lt;div&gt;
  &lt;div style="float: left;" align="left"&gt;&lt;b&gt;Tested Version: &lt;/b&gt;&lt;a href="<https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview#130-august-28-2015>"&gt;1.3.0&lt;/a&gt;&lt;/div&gt;
  &lt;div align="right" style="float: right;"&gt;&lt;b&gt;Last Edited:&lt;/b&gt; November 20th, 2015&lt;/div&gt;
  &lt;br/&gt;
  &lt;/div&gt;
  .. note::
  このプラグインの詳細は、[こちらの原文 ( GitHub )](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview) をご確認ください。
  このプラグインを Cordova アプリに組み込むと、System WebView の代わりに、[Crosswalk WebView](https://crosswalk-project.org/) を使用できます。
  Crosswalk とは？

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
=============

    cordova-plugin-crosswalk-webview

サポート対象のプラットフォーム
==============================

-   Android 4.0.0 以上
-   Cordova 5.2 以上

プラグインの追加方法 ( Monaca 上での処理 )
==========================================

このプラグインを使用する場合、Monaca クラウド IDE
上で、`Crosswalk WebView Engine` プラグインを有効化します。

1.  Monaca クラウド IDE から、設定 --&gt; Cordova プラグインの管理
    を選択します。
2.  Crosswalk WebView Engine を有効化します (
    下のスクリーンショットを参照 )。

> ![](../images/crosswalk/1.png){width="600px"}

3.  プラグインのバージョンと Crosswalk
    のバージョンを変更する場合、プラグインを有効にした後、設定
    ボタンをクリックします。

> ![](../images/crosswalk/2.png){width="600px"}

4.  次のダイアログが表示されます。設定後、OK ボタンをクリックします。

> <div class="admonition note">
>
> プラグインと Crosswalk
> のどちらのバージョンも変更できますが、組み合わせによっては、正常に動作しない場合があります。
>
> </div>
>
> ![](../images/crosswalk/3.png){width="600px"}

Crosswalk プラグインのメリット・デメリット
==========================================