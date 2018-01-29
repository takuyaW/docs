---
title: 使用例
weight: 30
---

Monaca 提供の各種開発ツール ( Monaca クラウド IDE、Monaca
Localkit、Monaca CLI、Monaca for Visual Studio ) と Monaca
デバッガーの連携方法に関して、ここでは解説します。

- [Monaca クラウド IDE と Monaca デバッガーとの連携 ( Web 経由 )](#monaca-クラウド-ide-と-monaca-デバッガーとの連携-web-経由)
- [Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携](#monaca-提供のローカル環境用の開発ツールと-monaca-デバッガーとの連携)

{{<note>}}
最初に、端末またはエミュレーター上に、Monaca
デバッガーをインストールします。詳細は、{{<link href="../installation" title="Monaca デバッガーのインストール方法">}}
をご確認ください。
{{</note>}}

## Monaca クラウド IDE と Monaca デバッガーとの連携 ( Web 経由 )

Monaca クラウド IDE
および各ブラウザー標準のリモートデバッグ機能を使用した、Monaca
アプリのデバッグ方法を紹介します。

-   [Monaca デバッグパネル](#debugger-debug-panel): DOM の解析、Console を使用したデバッグ
-   [USB デバッグ](#debugger-usb-debug): DOM の解析、Console
    を使用したデバッグ、JavaScript のデバッグ

### Monaca デバッグパネル

Monaca クラウド IDE の デバッグパネルには、Web
アプリ向けのデバッグツールとして人気のある [Weinre ( WEb INspector REmote )](https://people.apache.org/~pmuellr/weinre/docs/latest/)
が実装されています。このツールを使用して、Cosole を使用したデバッグと
DOM の解析が行えます。

{{<figure src="/images/debugger/manual/debug/1.png" title="Monaca クラウド IDE 上の デバッグパネル">}}

In order to start debugging your app by using Monaca クラウド IDE と
Monaca デバッガーとの連携 ( Web 経由 ), please follow the following
instruction:

1.  Monaca クラウド IDE 上で、プロジェクトを開きます。
2.  Monaca デバッガー上で、プロジェクトを実行します。
3.  IDE
    と端末が接続されていることを確認します。デバッグパネル上に、端末情報が表示されていれば、接続されています
    ( 下のスクリーンショットを参照のこと )。表示されない場合、IDE
    またはデバッガーをいったんリフレッシュさせます。IDE
    と端末の接続後に、アプリのデバッグを IDE 上で行えます。

    {{<figure src="/images/debugger/manual/debug/2.png">}}

#### Console を使用したデバッグ

Console API と JavaScript を併用して、Console ( コンソール )
上に、メッセージを出力します。

Console API を、次に記します。

-   `console.log()` : Console 上にメッセージを出力します。
-   `console.debug()` :
    デバッグ用と通常のログを明示的に分けたい場合には、こちらを使用します。メッセージは、Debug
    タブ 上に表示されます。
-   `console.warn()` :
    黄色の警告マークと共に、メッセージが表示されます。

{{<note>}}
    Console API の詳細に関しては、 {{<link href="https://developer.chrome.com/devtools/docs/console-api" title="Console API references ( Google Developers )">}} をご確認ください。
{{</note>}}

Console API を使用したサンプルコードを、次に記します。

1.  次のコードをコピーして、`index.html` ファイルに貼り付けます。

    {{<highlight html>}}
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
        <script src="components/loader.js"></script>
        <link rel="stylesheet" href="components/loader.css">
        <link rel="stylesheet" href="css/style.css">
        <script>
            var a = 1;
            var b = 2;

            function debug(){
                var c = a + b;
                console.log("debug() function is executed!");
                console.log("executed! variable c is " + c);
            }

            debug();
        </script>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>
    {{</highlight>}}

2.  ファイルを保存して、Monaca デバッガーと Monaca クラウド IDE
    を接続します。次に、Monaca クラウド IDE
    上で、プロジェクトを実行します ( \[ 実機デバッグ \]
    メニューをクリック )。次に、下の 2
    つのスクリーンショットのようなメッセージが、Monaca クラウド IDE
    のデバッグパネル上および Monaca
    デバッガーのアプリログ上に、それぞれ表示されていることを確認します。

    {{<figure src="/images/debugger/manual/debug/3.png" title="Monaca クラウド IDE の デバッグパネル上">}}
    {{<figure src="/images/debugger/manual/debug/6.png" title="Monaca デバッガーのアプリログ上" width="300">}}

3.  デバッグパネル上で、次のように、アプリのエラーログも確認できます。

    {{<figure src="/images/debugger/manual/debug/4.png">}}

#### DOM の解析

DOM ( Document Object Model )
の解析ツールを使用して、次の処理ができます。

-   現在開いているページの DOM 構造が表示されます。
-   現在開いているページの DOM 構造と CSS
    を修正でき、ページ側にもリアルタイムで反映されます。

詳細に関しては、 [スタイルと DOM の修正 ( 英語サイト)](https://developer.chrome.com/devtools/docs/dom-and-styles)
をご確認ください。

{{<figure src="/images/debugger/manual/debug/5.png" title="デバッグパネル上での DOM 解析">}}

### USB デバッグ

USB デバッグを有効化すると、次の操作を行えます。

-   Console を使用したデバッグ : Console
    上で、メッセージの出力とデバッグセッションを行えます。
-   DOM の解析 : DOM
    の構造の確認と修正を行えます。また、リアルタイムで、更新を反映できます。
-   JavaScript のデバッグ : JavaScript
    パフォーマンスの分析、分析ポイント ( ブレークポイント )
    のセット、実行処理の制御を行えます。

USB デバッグ使用時に利用できるデバッグ方法は、次のとおりです。

1.  iOS
    端末を使用している場合には、[Safari のリモートデバッグ機能](#usb-debugging-ios)
    を利用できます。
2.  Android
    端末を使用している場合には、[Chrome のリモートデバッグ機能](#usb-debugging-android)
    を利用できます。

#### Safari のリモートデバッグ機能 ( iOS と Mac が対象 )

{{<note>}}
    USB デバッグを使用してデバッグをする場合、事前に行う設定がいくつかあります。詳細は、 {{<link href="#pre-debug-app" title="USB デバッグの事前準備">}} をご確認ください。
{{</note>}}

1.  USB ケーブルを使用して、iOS 端末と Mac を接続します。
2.  カスタムビルド版 Monaca デバッガー上で、Monaca
    プロジェクトを実行します。
3.  Safari を開いて、 `開発`
    メニューを選択します。表示されるリスト内に、開発者の iOS
    端末名が表示されますので、選択します。表示されたサブメニューから、Monaca
    アプリ内で使用しているページを選択します。

    {{<figure src="/images/debugger/manual/debug/9.png">}}

4.  Web
    インスペクタ画面が表示されます。ここでは、総合的にアプリを検証できます
    ( HTTP リクエストのタイムライン表示、JavaScript
    のプロファイリング、DOM ツリーの操作など )。Web
    インスペクタの使用方法に関しては、こちらの [Safari Web
    インスペクタの使用方法 ( 英語サイト)](https://developer.apple.com/library/ios/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007874)
    をご確認ください。

    {{<figure src="/images/debugger/manual/debug/10.png">}}

#### Chrome のリモートデバッグ機能 ( Google Chrome ブラウザーを使用した Android アプリ開発が対象 )

{{<note>}}
    USB デバッグを使用してデバッグをする場合、事前に行う設定がいくつかあります。詳細は、 {{<link href="#pre-debug-app" title="USB デバッグの事前準備">}} をご確認ください。
{{</note>}}

1.  USB ケーブルを使用して、Android 端末と PC を接続します。
2.  Monaca デバッガー上で、Monoca プロジェクトを実行します。
3.  Chrome のアドレスバーに、 `chrome://inspect/` と入力します。
4.  「 Devices 」 ページが表示されます。次に、接続した Android
    端末が表示されていることを確認して、端末情報の下に表示されている
    {{<guilabel name="inspect">}} をクリックします。

    {{<figure src="/images/debugger/manual/debug/7.png">}}

5.  Chrome DevTools が起動します。ここまでの手順で、Monaca
    アプリをデバッグする準備が整いました。Chrome DevTools
    の使用方法は、[こちら ( 英語サイト)](https://developer.chrome.com/devtools) をご確認ください。

    {{<figure src="/images/debugger/manual/debug/8.png">}}

## Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携

Monaca 提供のローカル環境用の開発ツールには、Monaca CLI、Monaca
Localkit、Monaca for Visual Studio があります。

### USB デバッグの事前準備

<table class="small">
    <tr>
        <th width="15%">プラットフォーム</th>
        <th>iOS</th>
        <th>Android</th>
    </tr>
    <tr>
        <td><b>Monaca デバッガー</b></td>
        <td><a href="../installation/debugger_ios/#custom-debugger-ios">カスタムビルド版 Monaca デバッガーのみ</a></td>
        <td>ストア版またはカスタムビルド版の <a href="../installation/debugger_android/">Monaca デバッガー</a></td>
    </tr>
    <tr>
        <td><b>ドライバーのインストール</b></td>
        <td>Windows の場合、iTunes をインストールして、iOS 端末用のドライバーを入手します。Mac OS X の場合、必要なドライバーは、インストールされています。</td>
        <td>Windows の場合、端末製造元の Web サイトから、端末用の対象のドライバーを入手します。Mac OS X の場合、必要なドライバーを、システム側で自動で検知してくれます。</td>
    </tr>
    <tr>
        <td><b>USB デバッグ の有効化</b></td>
        <td>iOS 端末上で、[ Web インスペクタ ] を有効化します。
            <ul>
                <li><code>設定 ‣ Safari</code> を選択します。</li>
                <li>下にスクロールして、 <code>詳細</code> を選択します。</li>
                <li><code>Web インスペクタ</code> を ON にします。</li>
            </ul>
        </td>
        <td>Android 端末上で、[ USB デバッグ ( USB debugging ) ] を有効化します。
            <ul>
                <li><code>設定 ‣ 端末情報 / タブレット情報</code> を選択して、ビルド番号を数回タップします。</li>
                <li><code>開発者向けオプション</code> を選択します。</li>
                <li><code>USB デバッグ</code> を選択します。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>コネクションの信頼</b></td>
        <td>端末上に、コンピューターの信頼性を確認する画面が表示されます。[ 信頼する ] を選択して、コンピューター側と接続します。</td>
        <td>端末上に、コンピューターの信頼性を確認する画面が表示されます。[ 信頼する ] を選択して、コンピューター側と接続します。</td>
    </tr>
</table>

### Monaca 提供のローカル環境用の開発ツールと USB デバッグ

デバッグの手順を、次に記します。

1.  Monaca デバッガーとホスト PC をペアリングします。ホスト PC
    とは、Monaca 提供のローカル環境用の開発ツール ( Monaca
    Localkit、Monaca CLI、Monaca for Visual Studio ) を実行している PC
    を指します。各開発ツール上でのペアリング方法は、次のリンク先をご確認ください。

    -   [Monaca Localkit 上でのペアリング方法](/ja/products_guide/monaca_localkit/pairing_debugging)
    -   [Monaca CLI 上でのペアリング方法](/ja/products_guide/monaca_cli/pairing_debugging)
    -   [Monaca for Visual Studio 上でのペアリング方法](/ja/products_guide/monaca_vs/pairing_debugging)

2.  実行するプロジェクトを選択します。
3.  下のスクリーンショット内で、赤色で示された、デバッガーのメニューをクリックします。

    {{<figure src="/images/debugger/manual/debug/11.png" width="300">}}  

4.  [ インスペクタ ] ボタンをクリックして、USB デバッグを開始します。

    {{<figure src="/images/debugger/manual/debug/12.png" width="300">}}  

5.  Chrome DevTools または Safari の Web インスペクタがホスト PC
    側で起動されているか確認します。起動されていない場合、troubleshoot\_inspector
    をご確認ください。また、併せて、次のリンク先もご確認ください。

    - [Safari の Web インスペクタの使用方法 ( 外部サイト)](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)
    - [Chrome DevTools の使用方法 ( 外部サイト )](https://developer.chrome.com/devtools)

    {{<figure src="/images/debugger/manual/debug/13.png">}}  

参考ページ

- [機能の概要]({{<ref "features.ja.md">}})
- [インストール方法](../installation)
- [トラブルシューティング ガイド](../troubleshooting)


