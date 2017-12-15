---
title: IDE
weight: 20
---

Monaca を使用するためには何が必要ですか？
-----------------------------------------

[Monaca クラウド IDE](/ja/products_guide/monaca_ide) を使用するためには、「安定したインターネット接続 」 と 「 最新の [Google Chrome](https://www.google.com/chrome/) ブラウザー 」
が必要です。なお、アプリを検証するときには、スマートフォンなどの携帯端末が別途必要となります。また、Monaca
が提供している [Monaca デバッガー](/ja/products_guide/debugger)
アプリを端末にインストールすれば、開発効率を上げることもできます (Monaca デバッガーを使用すると、コードを変更するたびに、変更箇所がアプリ側へ反映されます。コードの修正に通常伴う再ビルドと再インストールは必要ありません)。

また、Monaca クラウド IDE ( クラウド環境用 )
以外にも、ローカル環境用の開発ツールも提供しています。Monaca
ユーザーの多様なニーズに応じられるように、[Monaca Localkit](/ja/products_guide/monaca_localkit) and [Monaca CLI](/ja/products_guide/monaca_cli) を現在提供しています。

Monaca を使用したモバイルアプリの開発には、どんな知識が必要となりますか？
-------------------------------------------------------------------------

煩わしい処理の多くは、Monaca 側で行ってくれます。HTML5、CSS3、JavaScript
をある程度知っていれば、開発をすぐに始められます。

Java または Objective-C を使わなくても、スマートフォン向けアプリの開発が Monaca でできるのはなぜですか？
--------------------------------------------------------------------------------------------------------

Monaca では、[Apache Cordova](http://cordova.apache.org//)
を使用しています。Apache Cordova
は、アプリ開発用フレームワークの一種です。このフレームワークを使用すれば、HTML5
アプリを、各種ネイティブアプリ ( Android アプリ、iOS
アプリ、他のプラットフォーム向けアプリ )
としてパッケージ化してくれます。また、Apache Cordova
を経由すれば、ネイティブ側の機能へ JavaScript
からアクセスできるようになります。よって、Monaca
を使用したアプリ開発では、Java ( Android ) と Objective-C ( iPhone・iPad
) の知識は必要ありません。

Monaca が対応している、端末側の OS を教えてください。
-----------------------------------------------------

現在、Monaca
でサポートしているオペレーティングシステムは、次のとおりです。

-   Android 4 以上
-   iOS 8 以上
-   Windows 8.1
-   Chrome OS
-   Kindle Fire OS

Android アプリで使用しない機能に関して、パーミッション ( 使用許可 ) を削除するには？
------------------------------------------------------------------------------------

アプリの機能に関するパーミッション ( 使用許可 )
設定は、`AndroidManifest.xml` ファイルの
`<uses-permission>`　要素を使用して行います。詳細は、[Android の設定]({{< ref "android_configuration.ja.md">}}) をご確認ください。

Mac を持っていないのですが、iOS のアプリケーションを作成することはできますか？
------------------------------------------------------------------------------

Monaca は、ブラウザー上で使用する IDE です。つまり、Monaca
がサポートしているブラウザー ( Google Chrome )
と安定したインターネット接続があれば、Monaca を使用して iOS
アプリを開発することができます。

iOS アプリを開発する場合には、[Apple Developer Program](https://developer.apple.com/programs/ios/)
へ加入することが求められています。また、App Store
でアプリを公開するときには、Application Loader
を使用して、アプリのファイル ( `*.ipa` )
を提出する必要があります。Application Loader は、Mac 専用のソフトです。

Monaca クラウド IDE 上では、Application Loader と同等の機能を持つ [Monaca 提供のアップロード機能]({{<ref "app_submission.ja.md">}})
を提供しています。こちらの機能を使用すれば、アプリのファイルを、Monaca
クラウド IDE から直接提出することができます。よって、Monaca
を使用すれば、iOS アプリの開発から提出に至るまで Mac
を所有する必要はありません。

Monaca クラウド IDE が開けません。
----------------------------------

Monaca クラウド IDE は、Google Chrome
上で動作するように設計されています。他のブラウザー上でも起動させることはできますが、IDE
が開けないなどの予期せぬエラーが発生する場合があります。よって、Google
Chrome ブラウザーを使用するよう推奨しています。

{{<note>}}
    Monaca クラウド IDE では、モバイルブラウザーをサポートしていません。
{{</note>}}

Monaca アプリの開発において、現在使用している開発環境をそのまま利用したいのですが？
-----------------------------------------------------------------------------------

現在お使いの開発環境をそのまま使用することができます。Monaca
では、[Monaca Localkit](/ja/products_guide/monaca_localkit)、[Monaca CLI](/ja/products_guide/monaca_cli)
などのローカル環境用の開発ツールを提供しており、これらのツールは、お好みの
IDE やコードエディターと併用することができます。

Visual Studio のユーザなのですが、Visual Studio を使用して Monaca アプリを開発できませんか？
--------------------------------------------------------------------------------------------

Visual Studio をお使いの場合、Monaca 提供の拡張機能 ([Monaca for Visual Studio](/ja/products_guide/monaca_vs)) を使用して Monaca
アプリを開発できます。[Monaca クラウド IDE](/ja/products_guide/monaca_ide)
が提供している機能がこの拡張機能に移植されています。よって、Monaca for
Visual Studio を使用すれば、Monaca クラウド IDE さながらに Visual Studio
上で Monaca アプリを開発できます。

IDE に実装されているプレビューパネル上でアプリを実行できません。
----------------------------------------------------------------

[ライブプレビュー](/ja/products_guide/monaca_ide/overview/#preview_team_panel) の使用時には、次の点に留意する必要があります。

-   Cordova プラグインの API は、利用できません。
-   同一生成元ポリシー ( Same Origin Policy ) による制限があるため、Ajax
    リクエストは行えません。ただし、サーバーからのレスポンスに、
    `Access-Control-Allow-Origin`
    ヘッダーを追加した場合は、この限りではなく、クロスドメインの Ajax
    リクエストが行えます。
-   実際の端末とは、ビューポートの外観が異なることがあります。
-   Monaca バックエンド API とプッシュ通知機能は、初期化できません。

プロジェクトをアーカイブできません。
------------------------------------

プロジェクトのアーカイブ機能は有料サービスです。詳細は、[料金プラン](https://monaca.io/pricing.html)
をご確認ください。

外部ドメインからのリソースを、ライブプレビュー上で表示したいのですが。
----------------------------------------------------------------------

[同一生成元ポリシー ( same origin policy)](http://en.wikipedia.org/wiki/Same-origin_policy) では、CORS (
cross-origin resource sharing / 異なるオリジンからデータを取得すること )
を制限しており、よって、複数のドメインをまたぐ、JavaScript
からのリクエストも禁止されています。これは、クロスドメインのリクエストには、少なからず脆弱性が存在するためです。

Cross-Origin Resource Sharing ( CORS ) を有効にしたいのですが。
---------------------------------------------------------------

次のヘッダーを CORS ( Cross-Origin Resource Sharing )
のレスポンスに追加すれば、CORS を有効にできます。

{{<highlight javascript>}}
Access-Control-Allow-Origin: *
{{</highlight>}}

上記に付け加え、アプリまたはデバッガー側から外部の URL
へのアクセスを許可する場合には、次のいずれかの設定を行います。

-   Monaca IDE 上で設定を行う場合 : [iOS の設定]({{<ref "ios_configuration.ja.md#ios-config-ide">}}) と [Android の設定]({{<ref "android_configuration.ja.md#android-config-ide">}}) を参照のこと。
-   設定ファイル上で設定を行う場合 : [iOS の設定]({{<ref "ios_configuration.ja.md#access-origin">}}) と [Android の設定]({{<ref "android_configuration.ja.md#access-origin-android">}}) を参照のこと。

Monaca Cloud IDEが、正常に動作していません。
--------------------------------------------

Monaca Cloud IDE が正常に動作しない場合は、次の項目を試してください。

1.  Monaca クラウド IDでは、Chrome 最新版を推奨しています。Chrome
    以外のブラウザーを利用している場合は、Chrome
    最新版をご利用ください。
2.  Chrome
    最新版を利用している場合は、ブラウザーのキャッシュクリアーをお試しください。
3.  Chrome
    に拡張機能等を組み込んでいる場合は、正常に動作しない場合があります。拡張機能を組み込んでいる場合は、Chrome
    の「シークレットウィンドウ」から Monaca クラウド IDE
    を起動してお試しください。

キーストアを復旧したいのですが。
--------------------------------

キーストアの復旧につきましては、 [Monaca
問い合わせ窓口](https://ja.monaca.io/support/technical/)
までご連絡ください。

ダッシュボードにプロジェクトが表示されません。
----------------------------------------------

Freeプランでは、180
日以上ログインが確認されない場合、プロジェクトは自動的にアーカイブへ移動されます。プロジェクトがアーカイブへ移動される前には、回避策が記載されたメールが送信されます。

アーカイブされたプロジェクトの復元をご希望の場合は、有料プランに加入後、
[Monaca 問い合わせ窓口](https://ja.monaca.io/support/technical/)
までご連絡ください。

プラグインをアップロードするとき、200 MB の制限エラーが発生するのはなぜですか？
-------------------------------------------------------------------------------

Monaca クラウド IDE に 200 MB 以上の Cordova
プラグインをアップロードすることはできません。 ただし、ビルド中に
Cordova プラグインをインポートすることは可能です。
ビルド中にプラグインをインポートする手順は、次の通りです。

1.  Cordova
    プラグインを任意のファイルホスティングサイトにアップロードします。
    GitHub の使用をお勧めします。
2.  Monaca クラウド IDEの、 `Cordova プラグインのインポート`
    ダイアログを開きます。
3.  `URL もしくはパッケージ名を指定します` を選択します。
4.  パッケージ名または URL を入力します。
5.  {{<guilabel name="OK">}} をクリックします。

