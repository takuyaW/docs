---
title: iTunes Connect ガイド
weight: 10
---

App Store にアプリを提出する場合には、iTunes Connect
を使用します。ここでは、その使用方法を解説します。

事前準備
--------

[iOS Developer Program](https://developer.apple.com/) 上で、
[チームエージェント ( Team Agent ) の役割 ( Role
)](https://developer.apple.com/support/roles/)
を持つアカウントを用意します。

アプリの登録
------------

次に手順に従い、iTunes Connect へアプリを登録します。

1.  チームエージェントのアカウントを使用して、[iTunes
    Connect](https://itunesconnect.apple.com/) にログインします。
2.  `マイ App` を選択します。
3.  {{<menu menu1="+" menu2="新規 App">}} を選択します。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/1.png">}}

4.  アプリ情報を入力します。

    データ                  | 説明
    -----------------------|--------
    プラットフォーム          | アプリのプラットフォームを選択します。
    名前                    | App Store で表示されるアプリ名を入力します。255 文字まで入力できます。
    プライマリ言語            | デフォルトの言語を選択します。
    バンドル ID              | バンドル ID を選択します。バンドル ID には、Explicit App ID または Wildcard App ID を使用します。Wildcard App ID を使用する場合には、バンドル ID のサフィックスも指定します。Explicit App ID を使用する場合には、アプリに使用している バンドル ID と同じものを使用します。
    バンドル ID のサフィックス | バンドル ID の選択後、[ バンドル ID のサフィックス ] 項目が表示されます。バンドル ID のサフィックスとは、Wildcard App ID をバンドル ID に指定した場合、バンドル ID のプロパティーに付記する文字列です。バンドル ID は、このサフィックスと組み合わせて構成されます ( アプリに使用されている バンドル ID と同じものになります )。
    SKU           	        | アプリを識別するためのコード名を入力します。内容に制限はありませんが、アプリを一意に識別できる ID にします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/2.png">}}

5.  {{<guilabel name="作成">}} ボタンをクリックします。次に、\[ App 情報 \]
    ページに遷移します。
6.  \[ App 情報 \] ページ上で、アプリの \[ カテゴリ \]
    を適宜選択して、{{<guilabel name="保存">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/3.png">}}

7.  `価格および配信状況` ページに移動して、必要な情報 (
    価格表、配信地域、割引設定など ) を設定し、{{<guilabel name="Save">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/4.png">}} 

8.  `提出準備中` へ移動して、次の情報を入力します。

    -   App ビデオプレビューとスクリーンショット ( 最低限 1 つ、スクリーンショットが必要 )
    -   説明
    -   キーワード
    -   サポート URL
    -   App アイコン
    -   Copyright
    -   連絡先情報

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/9.png">}}

9.  設定後、{{<guilabel name="保存">}} ボタンをクリックします。

アプリのアップロード
--------------------

アプリのアップロード時、Mac
環境を必要としない時期も過去にはありましたが、2012年8月時点では、同環境が必須となっています。これは、iTunes
Connect へアプリをアップロードするとき、Application Uploader ( Mac 専用
) を使用することが要件に加わったためです。

この制約を取り除くため、Monaca では、Monaca クラウド IDE から iTunes
Connect
にアプリを直接アップロードできる機能をリリースしました。これにより、アプリのアップロードのために、Mac
環境をわざわざ用意する必要がなくなりました。

{{<note>}}
この機能の詳細は、{{<link title="Monaca 提供のアップロード機能" href="../app_submission">}} をご確認ください。
{{</note>}}

前述の Monaca 提供のアップロード機能とは別に、今までどおり Application
Loader も、次のように使用できます。

1.  リリースビルド版のアプリを Monaca
    上で作成して、ダウンロードします。詳細は、[iOS アプリのビルド]({{<ref "build_ios.ja.md">}})
    をご確認ください。
2.  iTunes Connect から Application Uploader
    をダウンロードして、インストールします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/10.png">}}

3.  Application Uploader を開き、Apple のアカウントでログインします。
4.  `App をデリバリ` を選択して、{{<guilabel name="選択...">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/5.png" width="500">}}

5.  次の画面が表示されるので、リリースビルドしたアプリのファイルを選択します。次に、{{<guilabel name="送信">}}
    ボタンをクリックして、アプリをアップロードします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/6.png" width="500">}}

6.  アップロード後、{{<guilabel name="次へ">}} ボタンをクリックして、次に、{{<guilabel name="終了">}}
    ボタンをクリックします。iTunes Connect
    上にアプリが表示されていることを確認します (
    しばらく時間がかかる場合があります )。

{{<note>}} 
バージョンが異なる同一アプリをアップロードする場合、ファイル内のバージョン情報を、対応するバージョンに変更しておく必要があります。それ以外の場合、アップロードが失敗します。
{{</note>}}

アップロード後に行うアプリの設定
--------------------------------

iTunes Connect へアプリをアップロードした後、App Store へ提出する 「
ビルド 」 を選択します。次の手順に従います。

1.  iTunes Connect 上の `提出準備中` へ移動して、\[ ビルド \]
    項目へ行き、{{<guilabel name="+">}} をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/7.png">}}

2.  対象のビルドを選択して、{{<guilabel name="終了">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/8.png">}}

3. {{<guilabel name="保存する">}} ボタンをクリックします。

アプリの提出
------------

ここまでの手順で、申請に必要な設定が完了しました。次は、申請に向け、アプリを実際に提出します。

1.  iTune Connect 上の `提出準備中` へ移動します。
2.  {{<guilabel name="レビュー審査のために送信">}} をクリックします。

アプリの登録申請後、Apple による審査が行われます。この過程では、App
Store での配布基準に適合しているかが審査されます。レビューには、2
週間ほど、通常かかります。

アプリの配布
------------

審査の通過後、App Store 上にて、アプリの配布が開始されます。

{{<note>}}
大きいサイズのアプリ用アイコンは、以前は必要ありませんでしたが、現在は、申請要件の
1
つとなっています。また、周知のとおり、申請に必要な要件は随時更新されています。申請がうまくいかない場合には、最新の要件を確認して、適切に対応する必要があります。
{{</note>}}
