---
title: 概要
weight: 10
aliases: /ja/monaca_vs/manual/overview
---

{{%warning%}}
Monaca for Visual Studio
の開発及びメンテナンスは終了する予定です。現在、Visual Studio
CodeでMonacaアプリを開発するための機能拡張を開発しています。詳細につきましては、サイトのお知らせ、ニュースレター等で別途お知らせ致します。
{{%/warning%}}


Monaca for Visual Studio は、拡張機能の 1
つです。この拡張機能を組み込めば、Microsoft Visual Studio IDE
上でも、Monaca アプリを開発できます。この拡張機能には、Monaca クラウド
IDE の機能の一部を移植しているので、Monaca クラウド IDE
さながらに、Visual Studio IDE ( Monaca for Visual Studio )
をご使用いただけます。

{{<figure src="/images/monaca_vs/manual/introduction/1.png" title="Monaca for Visual Studio">}}  

事前準備
--------

Monaca for Visual Studio の使用前に確認する点を、次に記します。

-   Microsoft Visual Studio 2015 の Community、Professional
    エディション、または、それ以上
    のバージョンがインストールされていること
-   対応するプランへの加入 ( [料金プラン](https://ja.monaca.io/pricing.html) を参照のこと )

Monaca for Visual Studio のインストール
---------------------------------------

{{<note>}}
Monaca for Visual Studio を支障なく使用するためには、Visual Studio
上で、{{<link href="#tools-for-apache-cordova-のインストール" title="Tools for Apache Corodva">}}
をインストールする必要があります。
{{</note>}}

Monaca for Visual Studio のインストール方法は、2 通りあります。

1.  [Visual Studio からインストール](#visual-studio-からインストール)
2.  [Web からインストール](#web-からインストール)

### Visual Studio からインストール

1.  Visual Studio メニューから、{{<menu menu1="ツール" menu2="拡張機能と更新プログラム">}} を選択します。
2.  左側の一覧から、{{<menu menu1="オンライン" menu2="Visual Studio ギャラリー">}}
    を選択します。次に、右上の検索ボックスに、「 monaca 」
    と入力します。
3.  `Monaca for Visual Studio 2015` を選択して、{{<guilabel name="ダウンロード">}}
    をクリックします。ダウンロード後、インストールします。

    {{<img src="/images/monaca_vs/manual/introduction/2.png">}}  

    {{<note>}}
        Onsen UI テンプレートを使用して、Visual Studio 上でプロジェクトを作成する場合には、<code>Onsen UI Templates for Visual Studio 2015</code> をダウンロード・インストールします。
    {{</note>}}

4.  インストール後、Visual Studio を再起動します。再起動後、Visual
    Studio メニュー上に `MONACA` メニューが追加されていることを確認します。

    {{<img src="/images/monaca_vs/manual/introduction/3.png">}}  

### Web からインストール

1.  [こちらのリンク ( Visual Studio ギャラリー )](https://visualstudiogallery.msdn.microsoft.com/21a7a495-5a24-4eab-a519-2f6e6d176049)
    から、Monaca for Visual Studio 2015 をダウンロードします。
2.  ダウンロードしたファイルを開き、インストールします。
3.  Visual Studio を起動して、メニュー上に `MONACA`
    メニューが追加されていることを確認します ( インストール時、Visual
    Studio を起動していた場合には、いったん再起動されます ) 。

Tools for Apache Cordova のインストール
---------------------------------------

1.  Visual Studio メニューから、{{<menu menu1="ファイル" menu2="新規作成" menu3="プロジェクト">}}
    を選択します。
2.  {{<menu menu1="インストール済み" menu2="テンプレート" menu3="JavaScript" menu4="Apache Cordova Apps">}}
    を選択します。
3.  `Install Tools for Apache Cordova Update 7` を選択して、{{<guilabel name="OK">}}
    をクリックします。

    {{<img src="/images/monaca_vs/manual/introduction/11.png">}}  

4.  {{<guilabel name="インストール">}} をクリックします。

    {{<img src="/images/monaca_vs/manual/introduction/12.png">}}  

5.  更新処理がはじまる前に、Visual Studio
    をいったん終了させます。終了させない場合、次のダイアログが表示され、Visual
    Studio を終了させるように催促されます。

    {{<img src="/images/monaca_vs/manual/introduction/13.png">}}  

6.  {{<guilabel name="次へ">}} ボタンをクリックします。

    {{<img src="/images/monaca_vs/manual/introduction/14.png">}}  

7.  {{<guilabel name="Update">}} ボタンをクリックします。インストールが完了するまで、しばらく待ちます。

    {{<img src="/images/monaca_vs/manual/introduction/15.png">}}  

Monaca for Visual Studio のアンインストール
-------------------------------------------

Monaca for Visual Studio
を完全にアンインストールする場合には、次の両方の手順を行います。

1.  [Visual Studio からアンインストール](#visual-studio-からアンインストール)
2.  [Windows PC 上でアンインストール](#windows-pc-上でアンインストール)

### Visual Studio からアンインストール

1.  Visual Studio メニューから、{{<menu menu1="ツール" menu2="拡張機能と更新プログラム">}} を選択します。
2.  {{<menu menu1="インストール済み" menu2="ツール">}} を選択します。
3.  `Monaca` を選択して、{{<guilabel name="アンインストール">}} を選択します。

    {{<img src="/images/monaca_vs/manual/introduction/10.png">}} 

### Windows PC 上でアンインストール

1.  {{<menu menu1="コントロール パネル" menu2="プログラム" menu3="プログラムのアンインストール">}}
    を選択します。
2.  `Monaca for Visual Studio` を選択して、{{<guilabel name="アンインストール">}}
    をクリックします。

Monaca パネルの概要
-------------------

Monaca のインストール後 ( Visual Studio IDE への組み込み後 )、Visual
Studio IDE 上の Monaca パネルから、有効な Monaca
アカウントを使用して、ログインします。

{{<figure src="/images/monaca_vs/manual/introduction/9.png">}} 

Monaca パネルでは、次の機能を使用できます。

-   [デバイス上で実行](#デバイス上で実行)
-   [ビルド設定](#ビルド設定)
-   [ビルド](#ビルド)
-   [設定](#設定)

### デバイス上で実行

この機能は、最低限 1 つの [Monaca デバッガー](/ja/products_guide/debugger) がホスト PC ( Visual
Studio を実行中の PC )
に接続されている場合に使用できます。この機能を使用すれば、Monaca
デバッガー上でプロジェクトを実行できます。Monaca for Visual Studio と
Monaca
デバッガー間の接続方法に関しては、[こちら](/ja/tutorials/monaca_vs/testing_debugging)
をご確認ください。

{{<multi_figures title="Monaca デバッガーと未接続 & Monaca デバッガーと接続中">}}
    {{<img src="/images/monaca_vs/manual/introduction/4.png" width="280">}} 
    {{<img src="/images/monaca_vs/manual/introduction/5.png" width="320">}} 
{{</multi_figures>}}

### ビルド設定

Monaca クラウド IDE に実装されている各プラットフォーム向けの \[
ビルド設定 \]
と同じように、この機能を使用すると、ビルド設定用のウィンドウが表示され、次のビルド設定を行えます
( 加えて、アプリ設定も行えます )。

- [Cordova プラグイン](/ja/products_guide/monaca_ide/dependencies/cordova_plugin)
- [JS・CSS コンポーネント](/ja/products_guide/monaca_ide/dependencies/components)
- [外部サービスとの連携](/ja/reference/service_integration)
- [Android アプリ設定 と キーストア設定](/ja/products_guide/monaca_ide/build/build_android)
- [iOS アプリ設定 と ビルド設定](/ja/products_guide/monaca_ide/build/ios/build_ios)
- [Windows アプリ設定](/ja/products_guide/monaca_ide/build/build_winrt)

{{<figure src="/images/monaca_vs/manual/introduction/6.png">}} 

### ビルド

この機能を使用すると、ビルド用のウィンドウが表示され、お好みのプラットフォーム向けにプロジェクトのビルドができます
( 下のスクリーンショットを参照のこと )。

{{<figure src="/images/monaca_vs/manual/introduction/7.png">}} 

### 設定

Monaca デバッガーとホスト PC ( Visual Studio 上で Monaca を実行中の PC )
のペアリング時に使用する、HTTP
サーバーのポートとプロキシーサーバーは、自由に設定することもできます。ペアリングの詳細は、[こちら](/ja/products_guide/debugger/troubleshooting/#monaca-デバッガーとのペアリングが失敗する場合)
をご確認ください。

{{<menu menu1="MONACA" menu2="設定">}} を選択して、これらの設定を行います。

{{<figure src="/images/monaca_vs/manual/introduction/8.png">}} 

プロキシサーバーのアドレスは、次のように設定します。

1.  Basic 認証 ( 基本認証 ) をプロキシサーバーで使用している場合
    
    {{<highlight html>}}http://user:pass@server-host:port{{</highlight>}}

2.  Basic 認証 ( 基本認証 ) をプロキシサーバーで使用していない場合
    
    {{<highlight html>}}http://server-host:port{{</highlight>}}
