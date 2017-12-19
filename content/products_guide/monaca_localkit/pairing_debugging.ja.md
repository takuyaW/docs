---
title: ペアリングとデバッグ
weight: 30
---

Monaca Localkit を使用して、Monaca アプリをデバッグする場合、ホスト PC (
Monaca Localkit が実行中であること ) と端末 ( Monaca
デバッガーが実行中であること ) のペアリングを最初に行います。

{{<note>}}
ホスト PC と携帯端末が、同じネットワーク ( LAN または Wi-Fi )
に接続されていることを確認してください。公共のネットワークなどでは、クライアント同士の通信が許可されていないことがあり、その場合、ペアリングはできません。
{{</note>}}

ペアリングの設定
----------------

1.  Monaca Localkit ( ホスト PC ) にログインします。
2.  Monaca デバッガー ( 携帯端末 ) にログインします。Monaca Localkit
    のログイン時と、同じアカウントを使用します。
3.  ログイン後、次のように、Monaca デバッガーがホスト PC
    を認識しているか確認します。次に、 {{<guilabel name="ペアリング">}}
    をクリックして、ペアリングします。Monaca デバッガーがホスト PC
    を自動認識していない場合には、
    [ペアリング方法](/ja/products_guide/debugger/troubleshooting/#troubleshoot-pair) をご確認ください。

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/1.png" width="300">}}

4.  ペアリング後、Monaca Localkit の \[ デバッガー \]
    タブ上に、ペアリングされたデバッガーが表示されます。

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/2.png">}}

5.  デバッガーと Monaca Localkit
    を接続すると、ローカルに存在するプロジェクトの一覧が、Monaca
    デバッガー上に、次のように表示されます。

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/3.png" width="300">}}

ペアリングの解除
----------------

1.  Monaca
    デバッガー画面の左上端に表示された切り替えメニューをクリックして、
    `ローカルコンピュータ` を選択します。
2.  接続されている PC が表示されます。PC
    の横に表示されているインフォーメーション アイコンをクリックします (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/4.png" width="300">}}

3.  接続されている PC の情報が表示されます。 {{<guilabel name="この PC を解除する">}}
    をクリックして、ペアリングを解除します。解除後は、ローカルに保存されている
    Monaca
    プロジェクトは、デバッガー上で、デバッグできません。デバッグを再度行う場合には、ペアリングをします。

    {{<img src="/images/monaca_localkit/manual/pairing_debugging/5.png" width="300">}}

Monaca Localkit を使用した、Monaca アプリのデバッグ
---------------------------------------------------

[Monaca 提供のローカル環境用の開発ツールと Monaca デバッガーとの連携]({{<ref "debug.ja.md#debugger-with-local-tools">}}) をご確認ください。

参考ページ

- [チュートリアル](../tutorial)
- [概要](../overview)
- [リモートビルドと配布申請](../build_publish)
- [トラブルシューティング](../troubleshooting)

