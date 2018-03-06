---
title: "パート 1 : プロジェクトの作成"
weight: 1
aliases: /ja/monaca_cli/tutorial/starting_project/
---

ステップ 1 : Monaca へのログイン
--------------------------------

1.  コマンドプロンプト ( Windows の場合 ) またはターミナル ( Mac の場合 ) を開き、次のコマンドを実行します。

    {{<highlight bash>}}$ monaca login{{</highlight>}}

2.  次に、Monaca
    アカウントで使用している、電子メールとパスワードを入力します。

    {{<img src="/images/monaca_cli/tutorial/starting_project/1.png">}}

{{<note>}}
    Monaca に登録していない場合には、<code>monaca signup</code> コマンドを使用して、登録から行ってください。
{{</note>}}

ステップ 2 : プロジェクトの新規作成
-----------------------------------

1.  次のコマンドを使用して、新規のプロジェクトを作成します。

    {{<highlight bash>}}$ monaca create PROJECT_DIRECTORY{{</highlight>}}

2.  次に、Monaca プロジェクトを新規作成します。いずれかのテンプレート
    または `Sample Apps` を選択します。ここでは、`Sample Apps`
    オプションを選択します。次に、`jQuery TODO App` を選択します。

    {{<img src="/images/monaca_cli/tutorial/starting_project/2.png">}}

3.  プロジェクトを作成すると、プロジェクトフォルダーが PC
    上に作成されます。これ以後は、お好みのエディターを使用して、Monaca
    プロジェクトを開くことができます。

    {{<img src="/images/monaca_cli/tutorial/starting_project/3.png">}}

{{<note>}}
    上記では、サンプルアプリを使用したプロジェクトの作成方法を示しましたが、他にも、Monaca CLI を使用して、Monaca クラウドから既存のプロジェクトを {{<link href="/en/products_guide/monaca_cli/cli_commands/#monaca-import" title="インポート">}} または {{<link href="/en/products_guide/monaca_cli/cli_commands/#monaca-clone" title="クローン">}} できます。
{{</note>}}