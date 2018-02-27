---
title: トラブルシューティング
weight: 50
aliases: /ja/monaca_localkit/manual/troubleshooting
---

Monaca Localkit に関する、既知の問題点と解決策を解説します。

インストール ( Windows の場合 )
-------------------------------

Monaca Localkit を Windows
へインストールするとき、次のダイアログが表示され、インストールできない場合があります。

{{<figure src="/images/monaca_localkit/manual/troubleshooting/1.png">}}

この問題を解決するには、 {{<guilabel name="詳細情報">}} ボタンをクリックして、次に、 {{<guilabel name="実行">}}
ボタンをクリックします。

{{<figure src="/images/monaca_localkit/manual/troubleshooting/2.png">}}

インストール ( Mac OS X の場合 )
--------------------------------

Monaca Localkit を Mac OS X
へインストールするとき、次のダイアログが表示され、インストールできない場合があります。

{{<figure src="/images/monaca_localkit/manual/troubleshooting/3.png">}}

解決方法を、次に記します。

1.  `システム環境設定...` を選択して、次に、 `セキュリティとプライバシー`
    を選択します。
2.  {{<guilabel name="このまま開く">}} ボタンをクリックします。

    {{<figure src="/images/monaca_localkit/manual/troubleshooting/4.png">}}

3.  アプリを、再度、インストールします。

アンインストール時 ( Windows の場合 )
-------------------------------------

Monaca Localkit
をアンインストールしても、ファイルが残っている場合があります。この場合、Program
Files フォルダーから、手動で削除します。

不完全なファイル・フォルダー構成
--------------------------------

Monaca /
Cordovaプロジェクトは、最初は次のファイルとフォルダで構成されています。

| ファイル・フォルダ | 説明 |
|-------------|-------------|
| `www/` |	アプリの中核となるファイル ( 群 ) を保存しているフォルダー |
| `config.xml` | Cordovaの設定ファイル |

このセクションでは、`www` や `config.xml`
ファイルがない場合にプロジェクトを修正する方法について説明します。

### www フォルダーがない場合

#### 標準プロジェクトの場合

プロジェクトルートに `www`
フォルダを作成するか、フォルダのバックアップを復元する必要があります。

#### Webpackプロジェクトの場合

www フォルダは、トラインスパイル処理により自動的に作成されます。 Monaca
Localkitのプロジェクト一覧からプロジェクトを選択すると、トラインスパイル処理が自動的に開始されます。

### config.xml ファイルがない場合

{{<note>}}
プロジェクトがMonaca
Cloud上に存在する場合にのみ、この解決方法が適用できます。
{{</note>}}

1.  Monaca Localkit
    のプロジェクト一覧から、対象のプロジェクトを選択してください。
2.  プロジェクトのダウンロードを実行すると、`config.xml`
    ファイルが復元されます。

参考ページ

- [チュートリアル](../tutorial)
- [概要](../overview)
- [リモートビルドと配布申請](../build_publish)
- [ペアリングとデバッグ](../pairing_debugging)

