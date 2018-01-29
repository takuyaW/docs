---
title: Repro ( iOS 専用 )
weight: 10
---

[Repro](https://repro.io/) は、「 ユーザーのアプリ利用動画 」
を録画して、ユーザーがどのようにアプリを使用しているのか分析できるサービスです。現時点では、iOS
のみサポートしています。

{{<note>}}
    どのプランをご利用の場合でも、こちらの Repro サービスをご利用いただけます。最新の Repro プラグインを使用する場合 ( {{<link href="https://github.com/reproio/repro-ios-sdk" title="GitHub">}} 経由で入手 ) には、こちらの  {{<link href="/ja/products_guide/monaca_ide/dependencies/custom_cordova_plugin/#ユーザー-cordova-プラグインのインポート" title="インポート">}} 機能をご利用ください。なお、プラグインのインポートには、対応するプランへの加入が必要です。プランの詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="こちら">}} をご確認ください。.
{{</note>}}

Repro サービスの追加
--------------------

1.  Monaca クラウド IDE から設定する場合、 {{<menu menu1="設定" menu2="外部サービス連携">}}
    を選択するか、または、Monaca Localkit から設定する場合、
    {{<menu menu1="ビルド設定" menu2="外部サービス連携 ( 左パネル )">}} を選択します。
2.  Repro サービスの {{<guilabel name="詳細を見る">}} ボタンをクリックします。
3.  {{<guilabel name="インストール">}} ボタンをクリックします。

    {{<img src="/images/reference/service_integration/repro/2.png" width="500">}}

4.  インストールを継続するか確認する画面が表示されます。 {{<guilabel name="OK">}}
    をクリックして、インストールを開始します。

Repro サービスの設定
--------------------

Repro の使用には、アプリの 「 トークン 」 が必要です。トークンの確認手順を、次に記します。

1.  Repro のサイトに行き、アカウントを作成します。
2.  Repro の管理画面へ移動して、 {{<menu menu1="設定" menu2="SDK セットアップ">}}
    を選択して、アプリのトークンを確認します。

    {{<img src="/images/reference/service_integration/repro/4.png">}}

3.  アプリのトークンの確認後、次の `onDeviceReady` 関数の 「 YOUR_APP_TOKEN 」
    の箇所に、トークンを挿入します。挿入後、次のコードをプロジェクトに追加します。

    {{<highlight javascript>}}
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
    Repro.setup("YOUR_APP_TOKEN");
    Repro.startRecording();
}{{</highlight>}}

{{<note>}}
    Repro の使用方法の詳細は、[Repro のドキュメント {{<link href="http://docs.repro.io/ja/" title="外部サイト">}} をご確認ください。
{{</note>}}

設定
----

{{<note>}}
Repro を使用して行動を録画するためには、端末上で、実際に、アプリを実行する必要があります。
{{</note>}}

1.  Monaca アプリをビルドします。詳細は、 [iOS 向け Monaca アプリのビルド](/ja/tutorials/monaca_ide/building_app/#ios-向け-monaca-アプリのビルド) をご確認ください。

2.  ビルドしたアプリを端末にインストールします。

3.  アプリを起動・操作して、次に、 {{<guilabel name="ホーム">}}
    ボタンを押すと、アプリはバックグランドで実行され、録画されたビデオが
    Repro サーバー側にアップロードされます。

    {{<img src="/images/reference/service_integration/repro/5.png" width="300">}}

4.  Repro 側から送信される電子メールを受信して、記載されている、録画ビデオのリンク先を確認します。

Repro サービスの削除
--------------------

1.  Monaca クラウド IDE から行う場合、 {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択するか、または、Monaca Localkit から行う場合、 {{<menu menu1="ビルド設定" menu2="Cordova プラグイン ( 左パネル )">}} を選択します。

2.  Repro プラグイン上にカーソルを置き、 {{<guilabel name="無効">}} ボタンをクリックします。

    {{<img src="/images/reference/service_integration/repro/3.png">}}
