---
title: ペアリングとデバッグ
weight: 40
aliases: /ja/monaca_cli/manual/pairing_debugging/
---

Monaca CLI を使用して、Monaca アプリをデバッグする場合、ホスト PC (
Monaca CLI を実行中 ) と端末 ( Monaca デバッガーを実行中 )
をペアリングさせます。

Monaca デバッガーとローカル PC を接続する前に、次の点を確認します。

1.  Monaca デバッガーとローカル PC が、同一ネットワーク ( LAN または
    Wi-Fi )
    に接続されていること。公共のネットワークでは、クライアント同士の通信が許可されていないことがあり、その場合には、ペアリングはできません。
2.  Monaca デバッガーとローカル PC では、同一の Monaca
    アカウントを使用すること。
3.  ローカル PC 側のファイアーウォールを無効化すること。

ペアリングの設定
----------------

1.  Monaca デバッガーアプリを端末上で起動させ、Monaca
    アカウントを使用してサインインします。サインイン時には、Monaca CLI
    で使用したアカウント情報と同じものを使用します。
2.  PC
    側のコマンドウィンドウ上で、プロジェクトの保存先フォルダーへ移動し、[monaca debug]({{<ref "cli_commands.ja.md#monaca-debug">}})
    コマンドを実行して、Monaca デバッガーに接続します。

    {{<highlight bash>}}$ monaca debug{{</highlight>}}

3.  Monaca デバッガー上に、ポップアップメッセージが表示され、Monaca
    デバッガーとホスト PC をペアリングするか聞かれます。\[ ペアリング \]
    ボタンをタップします。

    {{<img src="/images/monaca_cli/manual/pairing_debugging/1.png" width="300">}}

4.  ペアリング後、Monaca デバッガーの \[ ローカルプロジェクト \]
    欄に、ローカルに置かれているプロジェクト名が表示されます。ペアリングに失敗した場合には、[Monaca デバッガーとのペアリングが失敗する場合](/ja/products_guide/debugger/troubleshooting/#monaca-デバッガーとのペアリングが失敗する場合)
    をご確認ください。

    {{<img src="/images/monaca_cli/manual/pairing_debugging/2.png" width="300">}}

ペアリングの解除
----------------

ペアリングの解除方法は、2 通りあります。

### PC 上からの解除

[monaca debug]({{<ref "cli_commands.ja.md#monaca-debug">}})
コマンドを実行したコマンドウィンドウと同じウィンドウ上で、次のコマンドを実行すれば、Monaca
デバッガーと PC 間のペアリングとデバッグ処理を停止できます。

{{<highlight bash>}}
ctrl + c
{{</highlight>}}

### Monaca デバッガー上での解除

1.  左上端に表示された切り替えメニューをクリックして、次に、{{<guilabel name="ローカルコンピュータ">}}
    ボタンをクリックします。
2.  接続されている PC が表示されます。PC
    の横に表示されている`インフォーメーション` アイコンをクリックします (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_cli/manual/pairing_debugging/3.png" width="300">}}

3.  接続されている PC の情報が表示されます。 {{<guilabel name="この PC を解除する">}}
    をクリックして、ペアリングを解除します。解除後は、ローカルに保存されている
    Monaca
    プロジェクトは、デバッガー上でデバッグできません。デバッグを再度行う場合には、ペアリングをします。

Monaca CLI を使用した、Monaca アプリのデバッグ
----------------------------------------------

[Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携]({{<ref "debug.ja.md#monaca-提供のローカル環境用の開発ツールと-monaca-デバッガーとの連携">}}) をご確認ください。
