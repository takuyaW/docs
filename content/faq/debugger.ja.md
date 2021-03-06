---
title: デバッガー
weight: 70
---

Monaca デバッガーとは何ですか？
-------------------------------

Monaca デバッガーとは、デバッグ用のアプリです。Monaca
デバッガーを使用すれば、アプリを毎回ビルドせずに、アプリの動作を端末上で確認できます。また、コードを修正した場合にも、端末上のアプリに即座に反映されます。これにより、ビルドと実行処理を省略することができ、スピーディーに開発と検証を行えます。詳細は、[Monaca デバッガー](/ja/products_guide/debugger)
をご確認ください。

Monaca デバッガー上と端末上で、アプリの動作に関して、なにか違いがありますか？
-----------------------------------------------------------------------------

Monaca
デバッガー上のアプリの動作は、その仕組上、端末上のアプリの動作とは異なる点があります。このため、アプリのビルド・インストール後には、インストールの成否・アイコン・動作などを、端末上でも、再度確認する必要があります。前述した異なる点として、Monaca
デバッガーと Monaca クラウド IDE
間の接続時間分だけ、端末にインストールしたアプリよりも、デバッガー上での動作は遅くなります。

ビルド前に、開発中のアプリの動作確認はできますか？
--------------------------------------------------

Monaca では、Monaca クラウド IDE 上で、
[ライブ プレビュー](/ja/products_guide/monaca_ide/overview/#preview_team_panel)
機能を提供しています。このプレビュー機能を使用して、アプリのレイアウトと動作を確認できます。また、Monaca
デバッガーを使用すれば、ビルド前のアプリを端末上で検証できます。Monaca
クラウド IDE のプレビュー機能と Monaca
デバッガーのどちらも、開発効率の向上に役立つツールですので、ご活用ください。

デバッグログが表示されません。
------------------------------

一部の端末 ( HTC 社製の端末など )
において、デバッグログが表示されないことが確認されています。弊社サポートチームでも解決策を講じますので、こちらの
[Monaca 問い合わせ窓口](https://ja.monaca.io/service/)
から、端末情報をご提供ください。

iOS 向けの Monaca デバッガーが、2 種類 ( App Store/ストア版・カスタムビルド版 ) あるのはなぜですか？
----------------------------------------------------------------------------------------------------

Apple 社の App Store 側の申請処理の関係で、最新バージョンの Monaca
デバッガーを App Store
上で配布できるまで、多少の時間がかかります。このため、最新バージョンの
iOS 向け Monaca
デバッガーを、開発者の皆様へ迅速に提供できるように、代替オプションとして、Monaca
デバッガーのカスタムビルド版をご用意しています。

Android でアプリを起動したときに、アプリが強制終了します。
----------------------------------------------------------

`AndroidManifest.xml` ファイルの設定に問題がないか、再度ご確認ください。PhoneGapを使用している場合、 `<uses-permission android:name=”android.permission.ACCESS_NETWORK_STATE”></uses-permission>` の設定が必要です。詳細に関しては、[Android の設定]({{< ref "android_configuration.ja.md" >}}) をご確認ください。

Monaca デバッガーが動作しません。
---------------------------------

Monaca
デバッガーを再インストールしてください。再インストールしても正常に動作しない場合には、
[問い合わせ窓口](https://ja.monaca.io/service/) までご連絡ください。

適用したはずの CSS と Javascript ファイルが、ライブプレビューに反映されません。
-------------------------------------------------------------------------------

外部の JavaScript コードと CSS
を読み込むときに、認証がかかっていて読み込めないなど、何らかの事情で読み込めていない可能性があります。

Monaca デバッガーに、ログインできません。
-----------------------------------------

Monaca デバッガーのログイン障害の一般的な原因と解決法を、次に記します。

-   パスワードには、アルファベットと数字のみを使用してください。これ以外の文字が含まれている場合には、パスワードを修正してください。
-   インターネット接続を確認してください。
-   電子メールアドレスの入力時に、自動補完 ( auto-complete )
    をオンにしている場合には、手動にて、アドレスとパスワードを入力してください。

Angular.js などの外部ライブラリーを読み込むと、エラーが発生します。
-------------------------------------------------------------------

外部の JavaScript ライブラリーが出力した例外 ( exception ) を、Monaca
デバッガー側では、エラーと認識する場合があります。このエラーにより、アプリの機能が停止しなければ、これを無視してもかまいません。ただし、ビルドしたアプリを端末上で実行した場合に、同じエラーが出力されるときには、対応が必要です。

「 通常/ストア版 Monaca デバッガー 」 と 「 カスタムビルド版 Monaca デバッガー 」 の違いは何ですか？
----------------------------------------------------------------------------------------------------

主な違いとして、デバッガーの入手先、デバッガーに組み込まれているプラグインの種類、USB
デバッグのサポート ( iOS のみ ) の有無があります。

1.  デバッガーの入手先 : 通常版 Monaca
    デバッガーは、ストアから、ダウンロードします。カスタムビルド版
    Monaca デバッガーは、Monaca クラウド IDE から、インストールします。
2.  デバッガーに組み込まれているプラグイン ( 標準装備のプラグイン ) :
    通常版 Monaca デバッガーには、基本 Cordova
    プラグインが組み込まれています。カスタムビルド版 Monaca
    デバッガーには、Cordova
    プラグインの管理画面から、ユーザーが選択したプラグインが組み込まれています。
3.  USB デバッグのサポート ( iOS のみ ) :
    デバックビルド版のアプリが対象です。よって、App Store から入手した
    Monaca デバッガー ( ストア版のデバッガー ) では、USB
    デバッグはできません。詳細に関しては、[iOS 向け Monaca デバッガー]({{<ref "debugger_ios.ja.md">}}) をご確認ください。

アプリに不具合があるようですが、自分で確認する方法はありますか？
----------------------------------------------------------------

Monaca では、3 種類のデバッグ方法と機能を提供しています。

1.  プレビュー機能を使用したデバッグ
2.  Monaca クラウド IDE ( Weinre ) と Monaca
    デバッガーを併用したデバッグ
3.  USB デバッグと Monaca デバッガーを使用したデバッグ

詳細については、[使用例 ]({{<ref "debug.ja.md">}}) をご確認ください。

ネットワーク インストールとはなんですか？
-----------------------------------------

ネットワーク インストールとは、アプリを端末へインストールする方法の 1
つです。Monaca デバッガー経由で、Ad Hoc
ビルド版アプリまたはデバッグビルド版アプリを、端末にインストールできます。詳細に関しては、
[Android 向けアプリのネットワーク インストール]({{< ref "debugger_android.ja.md#network-and" >}})
または [iOS 向けアプリのネットワーク インストール]({{<ref "debugger_ios.ja.md#network-ios" >}})
をご確認ください。

プロジェクトの変更内容がMonacaデバッガーに反映されません。
----------------------------------------------------------

Monacaデバッガーにプロジェクトの変更内容が反映されない場合は、下記の手順をお試しください。

-   最新バージョンの Monaca デバッガーを使用してください。
-   Monaca デバッガーをリセットします。

Monaca Debugger のリセットは、下記の手順で行うことができます。

1.  Monaca デバッガーの一時ファイルをクリアーする

    - Android の場合：
    
        - Monaca デバッガーメニューから、 {{<guilabel name="設定">}} に移動します。
        - {{<guilabel name="同期データを削除する">}} ボタンと、 {{<guilabel name="Local STORAGEを削除する">}} ボタンをクリックします。
    
    - iOSの場合：
    
        - Monaca デバッガーメニューから、 {{<guilabel name="設定">}} に移動します。
        - {{<guilabel name="一時ファイルをクリア">}} ボタンと、 {{<guilabel name="ローカルストレージをクリア">}} ボタンをクリックします。

2.  Monaca デバッガーからログアウトします。
3.  再度、Monaca デバッガーにログインします。

問題が解決できない場合には、 [Monaca
問い合わせ窓口](https://ja.monaca.io/service/) までご連絡ください。

Cordova 6.5プロジェクトの iOS で console.log が表示されません。
---------------------------------------------------------------

Monaca Core Utility のバージョンを確認してください。 Cordova 6.5
プロジェクトでは、 `Monaca Core Utility Version: 2.0.6`
が、標準設定にになります。 旧CordovaプロジェクトをCordova
6.5にアップグレードした場合は、Monaca Core Utility
のバージョンは更新されません。Monaca Core Utility のバージョンが `2.0.6`
より低い場合は、下記の手順で更新を行うことができます。

1.  {{<menu menu1="設定" menu2="JS/CSS コンポーネントの追加と削除">}} へ移動します。
2.  `Monaca Core Utility` を削除します。
3.  `Monaca Core Utility` の {{<guilabel name="Add" >}} ボタンをクリックして、再度追加します。
4.  バージョン `2.0.6` 選択し {{<guilabel name="インストール">}} ボタンをクリックします。
5.  {{<guilabel name="保存">}} ボタンをクリックします。`Monaca Core Utility Version: 2.0.6`
    が、リストに表示されます。

