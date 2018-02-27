---
title: 機能の概要
weight: 10
aliases: /ja/debugger/manual/features
---

## デバッガーの機能

Monaca デバッガーでは、アプリの検証に役立つ、多彩な機能を提供しています。Monaca
デバッガー上でプロジェクトを実行すると、画面の右下に [ デバッガーメニュー ]
ボタンが表示されます。メニューボタンをクリックすると、次のようなメニュー画面が表示されます。現在使用できる機能は、次のとおりです。

- 戻るボタン
- 更新ボタン
- [スクリーンショット ボタン](#screenshot)
- [アプリログの表示ボタン](#app-log)
- [インスぺタの実行ボタン](#debugger-inspector)

{{<multi_figures>}}
    {{<img src="/images/debugger/manual/features/1.png" width="300">}}  
    {{<img src="/images/debugger/manual/features/2.png" width="300">}}  
{{</multi_figures>}}

### <a name="screenshot"></a> スクリーンショット機能

Monaca
デバッガーを使用することで、スクリーンショットを取得してデバイスのストレージに保存することもできます。
スクリーンショット画面では、次のことができます。

-   編集 : スクリーンショットのキャプチャー、コメントの手書き入力
-   デバイスのストレージへ保存。

    {{<img src="/images/debugger/manual/features/4.png" width="300">}}  

### <a name="app-log"></a> アプリログ

Monaca
デバッガー上で、アプリのログを確認できます。ログには、実行中のアプリのエラーと進行状況が出力されます。

{{<figure src="/images/debugger/manual/features/3.png" width="300">}}  

### <a name="debugger-inspector"></a> インスペクタ機能

インスペクタ機能を使用すると、[Chrome Dev Tools](https://developer.chrome.com/devtools/index)
を使用してプロジェクトをデバッグ・検査することができます。
インスペクタ機能を使用する前に、端末のUSBデバッグを有効にする必要があります。
詳細は、[USB デバッグの事前準備](../debug/#pre-debug-app)
をご確認ください。

{{<figure src="/images/debugger/manual/features/7.png">}}  

{{<note>}}
    {{<link href="/en/products_guide/monaca_localkit" title="Monaca Localkit">}} または {{<link href="/en/products_guide/monaca_cli" title="Monaca CLI">}} の使用時のみ、このインスペクタ機能を利用できます。詳細は、{{<link href="../debug/#debugger-with-local-tools" title="Monaca Localkit を使用して、アプリをデバッグする方法 ( USB デバッグの解説箇所 )">}} または {{<link href="ja/products_guide/monaca_cli/pairing_debugging/#cli-debug-app" title="Monaca CLI を使用して、アプリをデバッグする方法 ( USB デバッグの解説箇所 )">}} をご確認ください。
{{</note>}}

デバッガーのメニュー
--------------------

{{<figure src="/images/debugger/manual/features/8.png" width="300">}}  

Inside デバッガーのメニュー, there are:

### すべてのプロジェクト

Monaca デバッガー上で実行可能な Monaca
プロジェクトの一覧を表示します。一覧上のプロジェクトには、2
つのサブカテゴリーがあります。

-   `Monaca.io プロジェクト` : Monaca クラウド IDE 上で作成されたプロジェクトの一覧を表示します。
-   `ローカルプロジェクト` : ローカル環境用の開発ツール ( [Monaca Localkit](/ja/products_guide/monaca_localkit) または [Monaca CLI](/ja/products_guide/monaca_cli) ) を使用して作成し、ローカルに保存されているプロジェクトの一覧です。なお、Monaca Localkit ( または Monaca CLI ) とデバッガーがペアリングされているときのみ、ローカルプロジェクトの一覧は表示されます。

{{<figure src="/images/debugger/manual/features/9.png" width="300">}}  

### ローカルコンピュータ

ペアリング済み、または、利用可能 ( 未接続 )
なコンピューターの一覧を表示します。ペアリング済みのコンピューターとは、Monaca
Locakit または Monaca CLI
がインストールされ、デバッガーに現在接続されているローカルのコンピューターです。各開発ツールとのペアリング方法は、次のリンクをご確認ください。

- [Monaca Localkit と Monaca デバッガーのペアリング方法](/ja/products_guide/monaca_localkit/pairing_debugging)
- [Monaca CLI  と Monaca デバッガーのペアリング方法](/ja/products_guide/monaca_cli/pairing_debugging)
- [Monaca for Visual Studio と Monaca デバッガーのペアリング方法](/ja/products_guide/monaca_vs/pairing_debugging)

{{<figure src="/images/debugger/manual/features/10.png" width="300">}}  

### デバッガーの設定

デバッガー側の各種設定を行えます。設定可能な項目は、\[
スリープを許可する \]、\[ メモリー使用量表示 \]、\[ スプラッシュ表示 \]
( Android のみ )、\[ アプリの復帰時にプロジェクトを再実行 \]、\[
ネットワーク再接続時にプロジェクトを再実行 \]、\[ 同期データを削除する
\]、\[ Local Storage を削除する \]
です。同期データとは、ローカル側と同期を行ったプロジェクトファイルを指します。また、Local
Storage とは、端末のメモリー ( LocalStorage )
上に、プロジェクト側で作成・保存したデータを指します。

{{<figure src="/images/debugger/manual/features/11.png" width="300">}}  

### デバッガーについて

デバッガーの詳細情報を表示します。表示する情報は、デバッガーのバージョン番号、プラットフォーム情報、CLI
バージョン番号、WebView エンジン ( Android のみ
)、利用可能なプラグインの一覧などです。

{{<figure src="/images/debugger/manual/features/12.png" width="300">}}  

プロジェクトオプション
----------------------

Monaca デバッガー上のプロジェクト一覧の \[ Monaca.io プロジェクト \]
では、各プロジェクトの右側に \[ プロジェクトオプション \]
アイコンが表示されています。 \[ プロジェクトオプション \]
では、次のことができます。

-   スター : スター ( 星マーク ) を付けると、「 お気に入り 」
    プロジェクトとして、Monaca クラウド IDE
    上のプロジェクト一覧の最上位に表示されます。
-   実行する : デバッガー上で、プロジェクトを実行します。
-   ネットワークインストール : Monaca
    デバッガー経由で、ビルド済みアプリを、端末にインストールします。

    {{<multi_figures>}}
        {{<img src="/images/debugger/manual/features/13.png" width="300">}}  
        {{<img src="/images/debugger/manual/features/14.png" width="300">}}  
    {{</multi_figures>}}

{{<note>}}
    ネットワークインストールを行う前に、Monaca クラウド IDE 上で、プロジェクトをビルドして、デバッグビルド版のアプリを作成する必要があります。詳細は、{{<link href="/ja/products_guide/monaca_ide/build/ios/build_ios/#types_of_build_ios" title="iOS 向けアプリのデバッグビルド">}} または {{<link href="/ja/products_guide/monaca_ide/build/build_android/#types_of_build_android" title="Android 向けアプリのデバッグビルド">}} をご確認ください。
{{</note>}}

{{<note>}}
    ネットワークインストールは、iOS デバッガーでは、{{<link href="/ja/products_guide/debugger/installation/debugger_ios/#custom-debugger-ios" title="カスタムビルド版デバッガー">}} でのみ使用できます。App Store 版のデバッガーでは、ネットワークインストールは使用できません。
{{</note>}}


参考ページ

- [使用例](../debug)
- [インストール方法](../installation)
- [トラブルシューティング ガイド](../troubleshooting)

