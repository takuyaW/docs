パート 1 : プロジェクトの作成
=============================

ステップ 1 : Monaca へのログイン
--------------------------------

1.  [Monaca](https://monaca.mobi/ja/login) にログインします。
2.  Monaca アカウント情報を入力します。

> ![](images/starting_project/9.png){width="400px"}

ステップ 2 : プロジェクトの新規作成
-----------------------------------

ログインすると、Monaca
ダッシュボードへ自動的に遷移します。次の手順に従い、初めての Monaca
プロジェクトを早速作ってみましょう。

1.  Monaca ダッシュボードから、新規プロジェクトの作成 または インポート
    を選択して、プロジェクトを新規に作成します。

> ![](images/starting_project/1.png){width="650px"}

2.  新規プロジェクトの作成 では、多種多様なテンプレートを使用して Monaca
    プロジェクトを作成できます。一方、Import Project
    では、既存のプロジェクトをインポートしてプロジェクトに使用できます。インポート方法は、次の
    3 つの中から選べます。

> -   URL を指定してインポート
> -   プロジェクトのパッケージをアップロード
> -   GitHubのレポジトリからインポート ( GitHub
>     への接続方法に関しては、version\_control を参照のこと )
>
> ![\[ 新規プロジェクトの作成 \]
> ダイアログ](images/starting_project/10.png){width="650px"}
>
> ![\[ プロジェクトのインポート \]
> ダイアログ](images/starting_project/11.png){width="650px"}

3.  ここでは、新規プロジェクトの作成 を選択します。表示される \[
    新規プロジェクトの作成 \] ダイアログ上で サンプルアプリ
    を選択し、次に、`jQuery TODO App` テンプレートの 作成
    ボタンをクリックします。

> ![](images/starting_project/2.png){width="650px"}

4.  プロジェクト情報を入力して、プロジェクトを作成する
    ボタンをクリックします。

> ![](images/starting_project/3.png){width="500px"}

5.  ダッシュボードの オンライン
    タブ上に、新規作成したプロジェクトが表示されます。

ステップ 3 : プロジェクトのプレビュー
-------------------------------------

端末を使用しなくても「 プレビューウィンドウ 」を使用すれば、Monaca
クラウド IDE 上でプロジェクトをプレビューできます。

<div class="admonition note">

プレビューウィンドウを使用して実際に検証できる機能には制限があります。制限としては、使用できる
Cordova プラグイン/API の種類、Ajax リクエストなどがあります。詳細は、
ライブプレビューの機能と制限 &lt;preview\_tab&gt; をご確認ください。

</div>

1.  Monaca ダッシュボード上でプロジェクトを選択 ( \[ 開く \] をクリック
    ) すると、Monaca クラウド IDE が起動します。Monaca クラウド IDE
    の右側には、プレビューウィンドウが表示されています。

> ![](images/starting_project/5.png){width="650px"}

2.  プレビューウィンドウ上で、TODO をいくつか追加してみましょう。

> ![](images/starting_project/6.png){width="300px"}

ステップ 4 : プロジェクトファイルの編集
---------------------------------------

<div class="admonition note">

編集できるファイルは、`www` フォルダーの下にあるファイルになります。

</div>

1.  左側のプロジェクトツリー画面から、編集対象のファイルを選択します。コードエディター
    ( 画面中央の領域 ) を使用して index.html
    ファイルの内容を変更してみましょう。
2.  ファイルの編集後、変更を保存します。次に、プレビューウィンドウ上で変更点が反映されていることを確認してみましょう。他の箇所も変更して、プレビュー上で確認してみましょう。今回使用したテンプレートの詳細は、TODO 管理アプリの解説 ( jQuery 使用 ) &lt;todo&gt;
    をご確認ください。

<div class="admonition note">

Monaca クラウド IDE
に実装されているコードエディターの詳細は、code\_editor
をご確認ください。

</div>