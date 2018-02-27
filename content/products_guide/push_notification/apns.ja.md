---
title: iOS アプリへのプッシュ通知設定
weight: 30
aliases: /ja/push_notification/manual/apns
---

APNs ( Apple Push Notification Service ) とは、Apple 社が提供する、iOS
アプリ向けのプッシュ通知のためのメカニズムです。ここでは、iOS
アプリ向けにプッシュ通知を行うための手順を解説します。

{{<note>}}
iOS アプリのビルドとプッシュ通知には、{{<link href="https://developer.apple.com/programs/" title="iOS Developer Program">}} への登録が必要です。
{{</note>}}

ステップ 1 : CSR ファイルの作成 ( Monaca クラウド IDE 上 )
----------------------------------------------------------

1.  Monaca クラウド IDE
    のバックエンド管理パネルから、{{<menu menu1="プッシュ通知 ( 左側のメニュー )" menu2="詳細メニュー ( 画面右上のアイコン )" menu3="プッシュ通知設定 ( ドロップダウンリスト上 )">}} を選択します。

    {{<img src="/images/backend/apns/1.png">}}

2.  [ iOS ] 項目上で、用途に応じて、[ 開発用プッシュ証明書 ] または
    [ 配布用プッシュ証明書 ] 下のいずれかの {{<guilabel name="秘密鍵の生成と CSR の発行">}}
    ボタンをクリックします。

    {{<img src="/images/backend/apns/2.png">}}
    
3.  ユーザー名 ( キー用 ) とメールアドレス ( iOS Dev Center で登録した
    Apple ID ) を入力して、 {{<guilabel name="生成する">}} をクリックします。

    {{<img src="/images/backend/apns/3.png">}}

4.  生成後、その CSR ファイルをダウンロードします。

ステップ 2 : プッシュ証明書の作成 ( iOS Dev Center 上 )
-------------------------------------------------------

iOS Dev Center では、2 種類のプッシュ証明書を発行できます。

-   `開発用の SSL 証明書` : デバッグビルドの場合、こちらを使用します。
-   `配布用の SSL 証明書` : Ad Hoc またはリリースビルドの場合、こちらを使用します。

プッシュ証明書の発行方法は次のとおりです。

1.  [Apple Developer のページ](https://developer.apple.com/)
    へ行き、`Member Center` をクリックします。
2.  iOS Developer Program に登録した、Apple ID
    とパスワードを使用して、サインインします。このプログラムに未登録の場合には、[こちら](https://developer.apple.com/programs/ios/)
    で登録します。
3.  `Certificates, Identifiers & Profiles` へ行きます。次のページが表示されます。

    {{<img src="/images/backend/apns/4.png">}}

4.  App ID を Explicit App ID
    として登録し、プッシュ通知サービスを有効化します。[App ID の登録]({{<ref "build_ios.ja.md#register_appid">}})
    も併せてご確認ください。

    {{<warning>}}
    [ Wildcard App ID ] タイプに App ID を 設定している場合、または、プッシュ通知サービスを無効にしている場合には、プッシュ通知は使用できません。
    {{</warning>}}

5.  App ID の一覧から対象の Explicit App ID を選択して、 {{<guilabel name="Edit">}}
    をクリックします。

    {{<img src="/images/backend/apns/5.png">}}

6.  作成する証明書の種類に応じて、いずれかの項目下の {{<guilabel name="Create Certificate">}}
    ボタンをクリックします。次に、 {{<guilabel name="Continue">}} をクリックします。

    {{<img src="/images/backend/apns/6.png" width="500">}}

7.  Monaca クラウド IDE から先ほどダウンロードした CSR
    ファイルを参照して、 {{<guilabel name="Generate">}} をクリックします。
8.  発行後、その証明書をダウンロードします。このファイルは、後ほど、Monaca
    クラウド IDE へアップロードして使用します。

ステップ 3 : プッシュ証明書のアップロード ( Monaca クラウド IDE 上 )
--------------------------------------------------------------------

1.  Monaca クラウド IDEのバックエンド管理パネルから、{{<menu menu1="プッシュ通知 ( 左側のメニュー )" menu2="詳細メニュー ( 画面右上のアイコン )" menu3="プッシュ通知設定 ( ドロップダウンリスト上 )">}} を選択します。

    {{<img src="/images/backend/apns/1.png">}}

2.  [ iOS ] 項目上で、用途に応じて、[ 開発用プッシュ証明書 ] または
    [ 配布用プッシュ証明書 ] 下のいずれかの {{<guilabel name="アップロード">}}
    をクリックします。ここまでの手順で、iOS
    アプリ向けのプッシュ通知設定が完了しました。

    {{<img src="/images/backend/apns/7.png">}}