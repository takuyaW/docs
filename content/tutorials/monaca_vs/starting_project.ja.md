---
title: "パート 1 : プロジェクトの作成"
weight: 1
---

ステップ 1 : Monaca へのログイン
--------------------------------

Visual Studio IDE 上で Monaca アプリを開発する場合には、最初に、Monaca
にログインします。

1.  Microsoft Visual Studio IDE のメニューから、{{<menu menu1="Monaca" menu2="ログイン">}}
    を選択します。
2.  Monaca アカウント情報を入力します。

    {{<img src="/images/monaca_vs/tutorial/starting_project/1.png">}}  

パート 2 : プロジェクトの作成
-----------------------------

Visual Studio 上で Monaca プロジェクトを作成する方法は、次のとおりです (
3 パターン )。

1.  [Monaca 提供のテンプレートを使用して、プロジェクトを新規作成](#プロジェクトの新規作成)
2.  既存の Cordova プロジェクトを使用
3.  [既存の Monaca プロジェクトをインポート](#既存の-monaca-プロジェクトのインポート)

### プロジェクトの新規作成

プロジェクトを新規作成する場合、次の手順に従います。

1.  Monaca パネル ( 前述の Monaca のログイン時に使用したパネル ) 上で、
    {{<guilabel name="新しいプロジェクトの作成">}} を選択します。

2.  \[ 新しいプロジェクト \] ウィンドウの左枠内から、
    {{<menu menu1="テンプレート" menu2="JavaScript" menu3="Apache Cordova アプリ">}}
    を選択します。次に、プロジェクトのテンプレートを選択します (
    プロジェクトの名前、場所、ソリューション名を入力 )。次に、{{<guilabel name="OK">}}
    をクリックします。なお、クリーンインストール後、そのままの状態では表示されるテンプレートはありません。Onsen
    UI のテンプレートを使用する場合には、\[ 拡張機能と更新プログラム \]
    から \[ Onsen UI Templates for Visual Studio 2015 \]
    をあらかじめダウンロードしておきます。

    {{<img src="/images/monaca_vs/tutorial/starting_project/2.png">}}

3.  ここまでの手順でプロジェクトの新規作成が完了しました。Visual Studio
    では、Ripple
    エミュレーター上でプロジェクトの確認を行えるプレビュー機能を提供しています。この機能を使用する場合、Visual
    Studio のメニューから、{{<menu menu1="デバッグ" menu2="デバッグの開始">}}
    を選択するか、または、デバッグボタン (
    下のスクリーンショットを参照のこと ) を実行します。

    {{<img src="/images/monaca_vs/tutorial/starting_project/3.png">}}

4.  エミュレーター用のウィンドウが表示されます。

    {{<img src="/images/monaca_vs/tutorial/starting_project/4.png">}}

5.  Ripple エミュレーターがサポートしている端末であれば、デバッグする端末を変更することもできます。変更する場合には、デバッグボタンのドロップダウンメニューから端末を選択します ( 下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_vs/tutorial/starting_project/5.png">}}

### 既存の Monaca プロジェクトのインポート

現時点では、既存の Monaca プロジェクトを Visual Studio
に直接インポートするための機能を提供していませんが、次のようにして、既存の
Monaca プロジェクトを Visual Studio 上で開くことができます。

1.  Apache Cordova の空のプロジェクトを作成します。[ 新しいプロジェクト ] ウィンドウ画面から、
    {{<menu menu1="インストール済み" menu2="テンプレート" menu3="JavaScript" menu4="Apache Cordova Apps">}}
    を選択します。次に、空のアプリ ( Apache Cordova ) を選択して、{{<guilabel name="OK">}} をクリックします。

    {{<img src="/images/monaca_vs/tutorial/starting_project/6.png">}}

2.  既存の Monaca プロジェクトの `www`
    フォルダーを使用して、上記で作成したプロジェクトの `www`
    フォルダーを、丸ごと置き換えれば、Visual Studio 上でも、既存の
    Monaca プロジェクトを実行できます。

3. 移植した既存のプロジェクトが Visual Studio 上でも正しく動作することを確認しましょう。Visual Studio のメニューから、{{<menu menu1="デバッグ" menu2="デバッグの開始">}} を選択して、または、デバッグボタン ( 下のスクリーンショットを参照のこと ) を実行して、エミュレータ用のウィンドウを表示させ、動作確認してみましょう。

    {{<img src="/images/monaca_vs/tutorial/starting_project/3.png">}}

ステップ 3 : プロジェクトファイルの編集
---------------------------------------

1.  ソリューション
    エクスプローラーのパネルを選択して、プロジェクトファイルを表示させます。`www`
    下に置かれているファイルのみ、編集できます。

    {{<img src="/images/monaca_vs/tutorial/starting_project/7.png">}}

2.  ファイルを選択して開き、変更を加えてみましょう。

3.  変更箇所を保存すると、Monaca デバッガー上または Ripple
    エミュレーター上にも、変更が即座に反映されます ( Monaca
    デバッガーに関しては、ペアリング済みであること )。

