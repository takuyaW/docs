---
title: "パート 3 : Monaca バックエンドのセットアップ"
weight: 3
---

ステップ 1 : Monaca バックエンドで使用するプラグインの有効化
------------------------------------------------------------

Monaca バックエンドを使用する場合、[jQuery ライブラリー](https://jquery.com/)
をプロジェクトに追加します。追加する場合には、次の手順に従います。

1.  Monaca クラウド IDE メニューから、{{<menu menu1="設定" menu2="JS/CSS コンポーネントの追加と削除...">}}
    を選択します。
2.  [ JS/CSS コンポーネントの追加と削除 ]
    ページが表示されるので、jQuery ( Monaca Version ) の {{<guilabel name="追加">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/1.png">}}

3.  次のダイアログが表示されます。使用する jQuery
    ライブラリーのバージョンを選択して、{{<guilabel name="インストール開始">}}
    ボタンをクリックします。次に、{{<guilabel name="OK">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/2.png" width="400">}}

ステップ 2 : バックエンドとプロジェクトの紐付け
-----------------------------------------------

1.  Monaca クラウド IDE のメニュー上で、左側のツリーメニューの上部に表示された `クラウド` ( 雲
    ) アイコンをクリックして、バックエンド管理画面へ行きます。次に、
    {{<guilabel name="バックエンドを利用する">}} ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/3.png">}}

2.  次のダイアログが表示されます。バックエンドの新規作成、または、既存バックエンド
    ( 他のプロジェクトで使用中 )
    の再利用のどちらかを選択できます。次に、 {{<guilabel name="適用">}}
    をクリックして、バックエンドとプロジェクトの紐付け処理を行います。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/4.png">}}

3.  バックエンドの紐付けが完了すると、バックエンド管理画面が次のようになります。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/5.png">}}

ステップ 3 : コレクションの新規作成
-----------------------------------

コレクションとは、バックエンドの使用時に、データの格納を行う、汎用的なストレージのことを指します。

1.  バックエンド管理画面上で、 `オプションメニュー`
    アイコンをクリックして、{{<guilabel name="コレクションの作成...">}} を選択します。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/6.png">}}

2.  コレクションの作成ダイアログが表示されます。コレクション名を入力して、
    追加する ボタンをクリックします。

    {{<img src="/images/monaca_ide/tutorial/adding_backend/7.png">}}

{{<note>}}
    データの追加をアプリから行う場合、{{<guilabel name="JavaScript からのアイテム追加を許可する">}} にチェックを入れます。コレクション管理の詳細に関しては、{{<link href="/ja/products_guide/backend/control_operations/#コレクション管理" title="コレクション管理">}} をご確認ください。
{{</note>}}

ここまでの手順を行うことで、Monaca
バックエンドを使用したアプリを作成できるようになります。
[バックエンド メモ帳アプリ]({{<ref "backend_memo.ja.md">}}) では、アプリから Monaca
バックエンドを操作する方法を段階的に解説しています。こちらも参考にして、Monaca
バックエンドを使用したアプリのコーディングをお試しください。
