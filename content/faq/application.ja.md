---
title: アプリケーション
weight: 50
---

外部の広告ネットワークは使えますか？
------------------------------------

アプリ上でのアドネットワークの掲載に関しては、Monaca
では特に制限を設けておりません。また、WebView
上に広告を置くことに関して、技術的な制約もありません。なお、広告の掲載時は、広告ネットワーク側の規約に従ってください。

InMobi、mediba ( 日本の会社 )、nend ( 日本の会社 ) であれば、Monaca
で作成したアプリ内に、広告を載せることができます。nend に関しては、[nend ( ネンド広告 )](/ja/sampleapp/tips/nend_ad)をご確認ください。

外部のバックエンドサービスは使えますか？
----------------------------------------

はい、Monaca
で使用できます。バックエンドサービスを含む、外部の各種サービスを、Monaca
クラウド IDE 上で組み込むことができます。

Monaca クラウド IDE上で、{{<menu menu1="設定" menu2="外部サービス連携 " menu3="バックエンド">}}を選択して、利用可能なバックエンドサービスを確認できます。希望するバックエンドサービスが置かれていない場合には、{{<menu menu1="設定" menu2="Cordova プラグインの管理" menu3="Cordova プラグインのインポート">}}から、対象の SDK を Monaca にインポートできます。

Monaca で開発するアプリでは、どんな機能が使えますか？
-----------------------------------------------------

スマートフォン搭載の各種機能 ( Camera、GPS など ) を使ったアプリを開発できます。詳細に関しては、次のドキュメントをご確認ください。

-   [Core Cordova Plugins (英語サイト)](/en/reference/cordova_6.5/)
-   [基本 Cordova プラグイン (Cordova のコア プラグイン)](/ja/reference/cordova_6.5/)
-   [サンプル＆Tip](/ja/sampleapp)

Windows ストアアプリには、基本 Cordova
プラグインを使用できませんが、WinJS を使用できます。

会員管理の各場面で、プッシュ通知機能を使用したいのですが、この機能は実装できますか？
------------------------------------------------------------------------------------

[NIFTY cloud mobile backend](http://mb.cloud.nifty.com/)をはじめとする各種バックエンドサービスを使用すれば、会員管理にも役立つ、プッシュ通知機能をプロジェクトに 組み込むことができます。特に、NIFTY cloud mobile backend では、簡単に実装できる API も提供しているので、プッシュ通知機能を手軽にご利用いただけます。

バックグラウンドで動作するアプリは開発できますか？
--------------------------------------------------

モバイルアプリの一般的な性質として、メモリに起因する不安定さがあげられます。このため、メモリに起因した障害が生じる可能性がある、バックグラウンドでのアプリの実行とその開発のサポートを、Monaca
では行っていません。

Monaca で開発したアプリに、Java で記述したコードを組み込むことはできますか ( Android の場合 )？
-----------------------------------------------------------------------------------------------

ネイティブコード ( Java ) の組み込みを、Monaca
では現在サポートしておりません。

Monaca で開発するアプリで、UIKit を使うことはできますか ( iOS の場合 )？
------------------------------------------------------------------------

Monaca では、UIKit を現在サポートしておりません。

さまざまな画面サイズに対応したアプリの開発はできますか？
--------------------------------------------------------

次の meta
タグをコードに追加すれば、さまざまな画面サイズに対応したアプリを開発できます。

{{<highlight html>}}
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
{{</highlight>}}

Cordova プラグインは使えますか？
--------------------------------

Free プランでも、Monacaで提供している Cordova プラグイン (
基本プラグイン、サードパーティー製プラグイン など )
をご利用いただけます。Monaca でご利用いただけるサードパーティー製の
Cordova プラグインに関しては、 [サードパーティー製 Cordova プラグイン](/ja/reference/third_party_phonegap)
をご確認ください。また、自作のユーザー Cordova
プラグインを使用する場合には、Pro プラン または
企業向けプランが必要となります。ユーザー Cordova
プラグインの追加方法に関しては、 [ ユーザー Cordova プラグイン](/en/products_guide/monaca_ide/dependencies/custom_cordova_plugin)をご確認ください。

Windows ストアアプリの開発に関する制約を教えてください。
--------------------------------------------------------

Windows ストアアプリの開発では、JavaScript と HTML5
のネイティブ機能が使用されます。Cordova
側に実装されている機能は利用できません。そのため、Windows ( Windows
ストアアプリ )
と他のプラットフォームの両方で動作するアプリを開発する場合、この点に留意する必要があります。なお、Windows
ストアアプリでは、JavaScript と HTML5
の標準機能とプロパティーの一部に使用できないものがあります。詳しくは、
[HTML, CSS, and JavaScript features and difference (
機能と相違点に関して
)](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx)
をご確認ください。

フルスクリーンアプリを開発できますか？
--------------------------------------

フルスクリーンアプリを開発することは可能です。 ただし、iOS と Android
で設定を変更する必要があります。

### Android

アプリをフルスクリーンモードで実行するには、次の2つの方法があります。

1.  Monaca クラウド IDE メニュー上で、 {{<menu menu1="設定" menu2="Android アプリ設定">}}を選択し、フルスクリーンを有効にします。
2.  `config.xml` ファイルに、次の行を追加します。

    {{<highlight xml>}}<preference name="Fullscreen" value="true"/>{{</highlight>}}

### iOS

ステータスバーを非表示にする場合は、 [StatusBar Plugin](/ja/reference/cordova_6.5/statusbar/)
を使用する必要があります。

{{<note>}}
    設定を反映させる場合は、再度ビルドを行う必要があります。
{{</note>}}


Cordova は常に最新のバージョンが使えるのですか？
------------------------------------------------

Monaca では、ある特定のバージョンの Cordova
のみサポートしています。なお、最新バージョンの Cordova
を使用できるように、バージョン更新は、定期的に、また、迅速に行っております。

テキストエリアの入力文字のフォントを大きくしたいのですが、なにか方法はありますか？
----------------------------------------------------------------------------------

次の CSS のスタイルをお試しください。

{{<highlight css>}}
form input, form textarea {
    font-size: 100%;
}
{{</highlight>}}

Cordova API、および、Monaca 提供の JavaScript API が使えません。
----------------------------------------------------------------

`components/loader.js`を読み込んでいることをご確認ください。このファイルを読み込んでいない場合、Monaca
が提供している、Cordova API と JavaScript API を使うことはできません。

アプリ起動時のページを、index.html から他のページに変更する方法を教えてください。
---------------------------------------------------------------------------------

1.  `www` フォルダー下に置かれた `config.xml` ファイルを開きます。
2.  `<widget>` 要素下の `<content>` タグに、起動時に表示するページ (
    必要であれば、そのファイルへのパスも含む )
    を指定します。デフォルト値は、 `index.html` です。例を次に記します。

    {{<highlight xml>}}<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
    ...
    <content src="https://monaca.io/" />
</widget>{{</highlight>}}

{{<warning>}}
    Google Play からダウンロードした Android向けのデバッガーでは、この方法は使用できません。解決策としては、カスタムビルド版のAndroid 向けのデバッガーを使用します。詳細は、 {{<link href="/ja/products_guide/debugger/installation/debugger_android/#custom-debugger-and" title=" カスタムビルド版 Monaca デバッガーのビルドとインストール">}}をご確認ください。
{{</warning>}}

Monaca アプリで使用できる、バージョン番号とバージョンコードに関して、制限はありますか？
---------------------------------------------------------------------------------------

Based on Cordova, the maximum value of version number is `99.99.99` and
the corresponding maximum value of version code is `999999` for Monaca
apps.

上記の値より大きな値をバージョンコードに設定する場合には、次のように、
`config.xml` ファイルを直接編集します。

{{<highlight xml>}}
<widget xmlns="http://www.w3.org/ns/widgets" id="your packagename" version="xx.yy.zz">
<!--Substitute xx.yy.zz to 100.1.3, the version code becomes 1000103.-->
{{</highlight>}}

{{<note>}}
    2014年4月2日から、仕様が変更され、<code>config.xml</code> ファイルは、<b>www</b> フォルダー下に置かれるようになりました。これより前に作成されたプロジェクトの場合、 <code>android/config.xml</code> ( Android の場合 ) と <code>ios/config.xml</code> ( iOS の場合 ) のように、<code>config.xml</code> ファイルが置かれています。
{{</note>}}

Cordova API ( カメラ、コンパスなど ) が動作しません。
-----------------------------------------------------

Cordova API ( カメラ、コンパス ) を実際に呼び出す前に、Cordova 側の準備
( deviceready イベント ) をする必要があります。

`deviceready` イベントは、Cordova
の読み込み完了後に発火するイベントです。このイベントの発火後であれば、Cordova
API を安全に使用できます。詳細は、[deviceready イベントの解説 (
英語サイト
)](http://cordova.apache.org/docs/en/6.x/cordova/events/events.html#deviceready)
をご確認ください。

{{<note>}}
    Onsen UI を使用する場合には、 <code>ons.ready()</code>
関数をお使いください。この関数は、<code>DOMContentLoaded</code> ( DOM
の読み込み完了 ) と <code>deviceready</code> ( Cordova の準備完了 )
の両イベント後に発火するため、確実に、アプリ側の準備が完了しています。
{{</note>}}

## デバッガー上では動作確認できましたが、ビルドしたアプリを端末にインストールして動作確認したところ、うまくいきません。

ビルドしたアプリ側に、必要なプラグインが組み込まれていない可能性があります。Monaca デバッガー側には、基本 Cordova プラグインのすべてが、標準で実装されていますが、アプリをビルドする場合には、あらかじめ、開発時に、実装するプラグインを手動で指定しておく必要があります。なお、プラグインの組み込みは、Monaca クラウド IDE の [ Cordova プラグインの管理 ] メニュー上から行います。

## App ID ( iOS 側 ) と パッケージ名 ( Android 側 ) にそれぞれ異なる値を設定するには？

現在、iOS 側の App ID または Android
側のパッケージ名を変更すると、変更後の値が双方に反映されます。つまり、変更後も、両方の値は自動的に同一の値へと修正されます。ただし、それぞれに異なる値を設定することもできます。

異なる値を設定する場合には、`config.xml` 内の `<widget>`
タグに修正を加えます。まず、`id` 値を削除して、`android-packageName` と
`ios-CFBundleIdentifier` とその値を追加します。記述例を次に示します。

{{<highlight xml>}}
<widget xmlns="http://www.w3.org/ns/widgets" android-packageName="com.example.android" ios-CFBundleIdentifier="com.example.ios" version="1.0.0”>
{{</highlight>}}

{{<note>}}
    なお、このような設定にした場合、{{<link href="/en/products_guide/debugger/installation/debugger_android/#custom-debugger-and" title="Android 向けのカスタムビルド版デバッガー">}}のビルド処理が失敗することが確認されています。他のビルド処理では、このような不具合は確認されていません。
{{</note>}}

キーストア内の SHA-1 フィンガープリントを確認する方法 ( Monaca クラウド IDE 上のキーストアを使用 )
--------------------------------------------------------------------------------------------------

Monaca クラウド IDE
上にキーストアがすでに作成されていることを前提として、キーストア内の
SHA-1 フィンガープリントの確認方法を解説します。

1.  Monaca クラウド IDE メニューから、{{<menu menu1="設定" menu2="Android キーストア設定">}}を選択します。
2.  {{<guilabel name="エクスポート">}} ボタンをクリックして、キーストアをダウンロードします。
3.  コマンドプロンプトを起動させ、次のコマンドを実行します。

    - `<your-key-name>` には、クラウド IDE からダウンロードしたキーストアの 「 エイリアス 」を入力します。
    - `<path-to-production-keystore>` には、ダウンロードしたキーストアファイルへの 「 パス 」を入力します。

    {{<highlight bash>}}keytool -exportcert -alias <your-key-name> -keystore <path-to-production-keystore> | openssl sha1 -binary | openssl base64{{</highlight>}}

4.  キーストアに設定されたパスワードを入力するように要求されます。

ビルド後に iOS 端末にアプリをインストールできません。
-----------------------------------------------------

対象端末が、ビルド時に選択されたプロビジョニングプロファイルに登録されているか確認してください。
