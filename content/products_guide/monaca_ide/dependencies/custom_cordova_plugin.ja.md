---
title: ユーザー Cordova プラグイン
weight: 40
aliases: /ja/monaca_ide/manual/dependencies/custom_cordova_plugin
---

Cordova プラグインを利用すると、ネイティブ機能をプログラムに簡単に組み込めます。ここでは、ユーザー
Cordova プラグインの作成方法とプロジェクトへの組み込み方法を解説します。

{{<note>}}
ユーザー Cordova
プラグインのご利用には、対応するプランへの加入が必要です ( {{<link href="https://ja.monaca.io/pricing.html" title="料金プラン">}} を参照のこと )。
{{</note>}}

ユーザー Cordova プラグインの使用に必要な要件を、次に記します。

-   Cordova 4.2 以上との互換性
-   `plugin.xml` ファイルを使用すること、および、`plugman` ( コマンド
    ライン ツール ) を使用してインストールができること
-   iOS と Android のサポート

さまざまな Cordova
プラグインをインターネット上で見つけることができますが、メンテナンスが不十分だったり、バージョンが古い場合があります。そのため、ここでは、プラグインを最初から自作する方法について解説します。

## ユーザー Cordova プラグインの構成

Cordova プラグインの典型的なディレクトリー構成を、次に記します (
ディレクトリー名には、太字を使用 )。

- *plugin_name*
    - *src*
        - *ios*
            - plugin_name.h
            - plugin_name.h
    - *www*
        - plugin_name.js
    - plugin.xml

最初にサンプルプラグインのコードを、次のリンクからダウンロードします (
zip ファイル )。

{{<download  href="/download/cordova_plugin_sample.zip" title="Cordovaプラグインのサンプル">}}

パッケージを解凍すると、次のようなディレクトリー構成が表示されます。

{{<figure src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/1.png">}}

### plugin.xml ファイル

`plugin.xml` ファイルとは、プラグインの設定ファイルであり、プラグインの詳細が定義されています。詳細は、[Cordova
プラグインの仕様 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/plugin_ref/spec.html)
をご確認ください。

先ほどダウンロードしたサンプルプラグインの `plugin.xml`
ファイルの内容を、次に記します。

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
  id="jp.co.asial.helloworld"
  version="0.0.1">

    <name>HelloWorldPlugin</name>
    <description>HelloWorldPlugin Description</description>
    <author>Asial Corporation</author>
    <license>Apache 2.0 License</license>
    <engines>
        <engine name="cordova" version=">=3.5.0" />
    </engines>
    <js-module src="www/hello_world.js" name="helloworld">
        <clobbers target="HelloWorld" />
    </js-module>

    <platform name="ios">
        <config-file target="config.xml" parent="/*">
            <feature name="HelloWorldPlugin">
                <param name="ios-package" value="HelloWorldPlugin"/>
            </feature>
    </config-file>
    <header-file src="src/ios/HelloWorldPlugin.h" target-dir="src/ios" />
        <source-file src="src/ios/HelloWorldPlugin.m" target-dir="src/ios" />
    </platform>
    <platform name="android">
        <config-file target="res/xml/config.xml" parent="/*">
            <feature name="HelloWorldPlugin">
                <param name="android-package" value="mobi.monaca.HelloWorldPlugin"/>
            </feature>
        </config-file>
        <source-file src="src/android/mobi/monaca/HelloWorldPlugin.java" target-dir="src/mobi/monaca" />
    </platform>

</plugin>
{{</highlight>}}

### hello_world.js ファイル

`hello_world.js` は、`plugin.xml` ( 前述のプラグインの定義ファイル ) 内の
`js-module` で指定されています。このため、 `cordova.js`
から自動で読み込まれます ( この処理は、 `loader.js` 内に記述されています )。

{{<highlight javascript>}}
var HelloWorld = function() {};

HelloWorld.prototype.say = function(success, fail) {
    cordova.exec(success, fail, "HelloWorldPlugin","say", []);
};

var helloWorld = new HelloWorld();
module.exports = helloWorld;
{{</highlight>}}

Cordova のコールバック関数の記法については、[プラグインの開発ガイド (英語サイト)](http://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html)
をご確認ください。

### iOS と Android のネイティブコード

プラットフォームにもよりますが、ネイティブコードは、Objective-C または
Java になります。関数名は、JavaScript
ファイルで定義した名と同じものを使用します。また、コールバック関数は非同期で呼び出されます。

ネイティブコードの開発に関しては、次のリンクをご確認ください。

-   [Android 向けプラグインの開発 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/guide/platforms/android/plugin.html)
-   [iOS 向けプラグインの開発 ( 英語サイト )](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/plugin.html)

## ユーザー Cordova プラグインのインポート

ユーザー Cordova プラグインをプロジェクトに追加する場合、次の手順に従います。

1.  ユーザー Cordova プラグインのファイルを、zip
    形式のファイルに圧縮します。
2.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="設定" menu2="Cordova プラグインの管理...">}} を選択します。
3.  [ Cordova とプラグインの管理 ]
    ページが表示されます。次に、{{<guilabel name="Cordova プラグインのインポート">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/2.png">}}

4.  プラグインファイル ( zip ファイル ) を参照して、{{<guilabel name="インポート">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/3.png">}}

## ユーザー Cordova プラグインと Monaca デバッガー

App Store または Google Play で入手できる Monaca
デバッガーは、通常版のデバッガーです。こちらの通常版 Monaca
デバッガーには、基本 Cordova プラグイン ( Cordova コアプラグイン )
とサードパーティー製の Cordova プラグイン ( Monaca
側であらかじめ提供しているサードパーティー製のプラグインとその詳細は、[サードパーティー製 Cordova プラグイン](/ja/reference/third_party_phonegap/) を参照のこと )
のみが実装されています。このため、デフォルトの状態では、ユーザー Cordova
プラグインまたは外部の Cordova プラグイン ( 第三者が提供する、Monaca
側で用意しているプラグイン以外 )
は、デバッガー上で使用できません。これらのプラグインを使用する場合、Monaca
デバッガーをカスタムビルドする必要があります。

カスタムビルド版の Monaca デバッガーは、Monaca クラウド IDE
上でビルドするデバッガーです ( ユーザー Cordova プラグインまたは外部の
Cordova プラグインを組み込んだプロジェクトを使用してビルドします
)。カスタムビルド版デバッガーのビルド方法、および、通常版とカスタムビルド版のデバッガーの相違に関しては、次のリンク先をご確認ください。

- [iOS 向け Monaca デバッガー]({{<ref "debugger_ios.ja.md">}})
- [Android 向けの Monaca デバッガー]({{<ref "debugger_android.ja.md">}})

{{<note>}}
カスタムビルド版デバッガーをビルドする前に、ユーザー Cordova
プラグインまたは外部の Cordova プラグインを必ず 「 インポート 」
してください。
{{</note>}}

また、ユーザー Cordova プラグイン開発の技術支援 ( 有料 )
も、弊社にて承っております。サポートチームまで、お気軽に詳細を
[お問い合わせ](https://monaca.mobi/ja/support/index) ください。

## ユーザー Cordova プラグインの検証

1.  Monaca クラウド IDE
    上でプロジェクトを作成します。ここでは、`最小限のテンプレート` を使用します。
2.  [ユーザー Cordova プラグインの構成](#ユーザー-cordova-プラグインの構成) でダウンロードしたユーザー Cordova
    プラグインのサンプルをインポートします。
3.  `index.html` ファイルへ次のコードを追加します ( ユーザー Cordova プラグインのサンプルを使用して、メッセージダイアログを表示するコードです )。

    {{<highlight javascript>}}
<script>
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        window.HelloWorld.say(
            function(result) { alert( "success: " + result ); },
            function(error) { alert( "error: " + error ); }
        );
    }
</script>
    {{</highlight>}}

4.  通常版の Monaca
    デバッガー上でプロジェクトを実行してみましょう。通常版では、メッセージダイアログが表示されません。
5.  カスタムビルド版 Monaca
    デバッガーをビルドします。詳細は、次のリンク先をご確認ください。

    - [iOS 向けのカスタムビルド版 Monaca デバッガーのビルド]({{<ref "debugger_ios.ja.md#カスタムビルド版-monaca-デバッガーのビルド方法">}})
    - [Android 向けのカスタムビルド版 Monaca デバッガーのビルド]({{<ref "debugger_android.ja.md#カスタムビルド版-monaca-デバッガーのビルドとインストール">}}))

6.  カスタムビルド版 Monaca デバッガーをインストールします。
7.  デバッガーを起動させ、ログイン画面上で {{<guilabel name="デバッガー情報">}}
    をタップします。

{{<figure src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/4.png" width="350">}}

8.  デバッガー情報に、追加したユーザー Cordova
    プラグインが表示されていることを確認します (
    下のスクリーンショットを参照のこと )。

    {{<figure src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/5.png" width="350">}}

9.  デバッガーにログインして、ユーザー Cordova
    プラグインを追加したプロジェクトを実行します。メッセージダイアログが表示されることを確認します。

    {{<figure src="/images/monaca_ide/manual/dependencies/custom_cordova_plugin/6.png" width="350">}}
