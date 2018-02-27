---
title: Amazon アプリストア での配布
weight: 30
---

事前準備
--------

Amazon アプリストアで、Android 向けのアプリを公開する場合、[Amazon Apps
Developer Portal](https://developer.amazon.com/appsandservices)
で開発者アカウントを登録する必要があります。登録は無料です。

リリースビルドのアプリを作成
----------------------------

Monaca クラウド IDE のビルド機能を使用すれば、Amazon
アプリストアへアップロードできるリリースビルド版のアプリをビルドできます。[Android アプリのビルド]({{<ref "build_android.ja.md">}})
に記載されている手順に従い、リリースビルド版のアプリをビルドします。次に、ビルドしたアプリ
( apk ファイル ) をダウンロードします。

Amazon アプリストアへのアプリの登録
-----------------------------------

1.  [Amazon
    開発者コンソール](https://developer.amazon.com/appsandservices)
    へ行き、Amazon 開発者アカウントを使用してログインします。
2.  `ダッシュボード` 上に表示されている {{<guilabel name="新規アプリを追加">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/1.png">}}

3.  プラットフォームとして、`Android` を選択して、{{<guilabel name="Next">}} をクリックします。
4.  \[ 新規アプリ申請 \] ページが表示されます。必要な情報を入力します。

    データ | 説明 
    ------------|-------------
    アプリタイトル | アプリの名前です。
    カテゴリ/カテゴリー | アプリのカテゴリーを選択します。
    カスタマーサポート連絡先など | カスタマーサポート情報には、デフォルトのサポート連絡先情報、または、別のサポート連絡先情報 ( Eメールアドレス、電話番号、ウェブサイト ) を入力できます。

5.  {{<guilabel name="保存">}} ボタンをクリックします。次の画面が表示されます。

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/2.png">}}

6.  `配信地域・価格等` タブでは、アプリの種類を選択して、表示された質問に回答し、最後に、{{<guilabel name="保存">}}
    ボタンクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/3.png">}}

    {{<note>}}
        Amazon では、200 ヶ国以上の中から、配信地域を選択できます。なお、アプリのリリースは、Amazon 側の承認後となります。
    {{</note>}}

7.  `概要` タブでは、次の情報を入力して、{{<guilabel name="保存">}} ボタンをクリックします。

    データ | 説明 
    ------------|-------------
    タイトルを表示 | アプリの名前です。
    簡単な説明/簡潔な概要 | ストアで表示されるアプリの説明です。
    概要  | ストアで表示されるアプリの説明です。
    アプリ特長 | アプリの特徴を入力します。入力した情報は、`amazon.com` ウェブサイトで表示されます。

8.  `画像 & マルチメディア` では、アイコンとスクリーンショットをアップロードします。アイコンは、小
    ( `114x114` の `png` ファイル ) と 大 ( `512x512` の png ファイル ) の 2
    種類です。アップロード後、{{<guilabel name="保存">}} ボタンをクリックします。
9.  `コンテンツ レーティング` タブでは、アプリの内容に関する質問に回答します。回答後、{{<guilabel name="保存">}}
    ボタンをクリックします。
10. バイナリファイル タブでは、次の情報を入力して、{{<guilabel name="保存">}}
    ボタンをクリックします。

    データ | 説明 
    ------------|-------------
    Amazon DRM を適用しますか？ | アプリの無断使用から保護する場合には、[ はい ] を選択します。
    バイナリファイル | `apk` ファイルをアップロードします。ファイルのサイズ制限は特に設けていませんが、`150 MB` を超える場合は、[SFTP](https://developer.amazon.com/ftp/account.html?appId=MPU22LL128ECT) を使用して、アップロードします。
    端末サポート | 先ほどアップロードしたバイナリーファイルがサポートする端末を選択します。
    言語サポート | アプリ側でサポートする言語を選択します。
    輸出コンプライアンス | 米国への輸入/米国からの輸出、および、指定した配信地域への輸出に関して、Amazon 側で、制限なく、アプリを輸出入できること、および、アプリで使用されている技術が輸出入関連の法令を遵守していることを宣言します ( 宣言するには、チェックを入れます )。
    Use Amazon Maps Redirection | Amazon の端末では、Google Maps API をサポートしない代わりに、Amazon Maps API を提供しています。こちらの API では、Google Maps v1 API と同等の機能を提供しています。

11. 設定後、{{<guilabel name="保存">}}
    ボタンをクリックします。ここまでの手順で、公開準備が整いました。

アプリのリリース
----------------

アプリを公開するためには、必要な情報をすべて入力する必要があります。入力後、アプリを申請
ボタンをクリックして、アプリをリリースします。なお、このボタンは、必要な情報がすべて入力されるまで、有効になりません。

申請後、Amazon
側で審査が行われます。アプリの安全性が特に重要な審査項目となります。審査には、1-2
日程度かかります。

Amazon の審査後、Android
アプリストアにて公開されます。公開日時を指定していない場合には、審査完了後、即時に公開され、それ以外の場合には、指定した日時に公開されます
( 日時の指定に関しては、[Amazon アプリストアへのアプリの登録](#amazon-アプリストアへのアプリの登録 ) のステップ 6 を参照のこと )。

{{<figure src="/images/monaca_ide/manual/deploy/amazon_store/4.png">}}

お問い合わせ先
--------------

Amazon の Android
アプリストアに関するお問い合わせは、[こちら](https://developer.amazon.com/public/support/contact/contact-us)
から行えます。こちらの窓口では、アプリの申請、API
の使用法などに関する一般的な質問ができます。

Amazon Android アプリストアの商標とバッジ
-----------------------------------------

Amazon バッジを使用して、アプリの販売促進ができます。バッジは、[Amazon 商標とバッジ](https://developer.amazon.com/public/support/legal/tuabg)
から入手できます。