機能の概要
==========

デバッガーの機能
----------------

Monaca
デバッガーでは、アプリの検証に役立つ、多彩な機能を提供しています。Monaca
デバッガー上でプロジェクトを実行すると、画面の右下に \[
デバッガーメニュー \]
ボタンが表示されます。メニューボタンをクリックすると、次のようなメニュー画面が表示されます。現在使用できる機能は、次のとおりです。

> -   戻るボタン
> -   更新ボタン
> -   スクリーンショット ボタン &lt;screenshot&gt;
> -   アプリログの表示ボタン &lt;app\_log&gt;
> -   インスぺタの実行ボタン &lt;debugger\_on\_ios&gt;
>
> ![](images/features/1.png)
>
> > width
> >
> > :   250px
> >
> > align
> >
> > :   left
> >
> ![](images/features/2.png)
>
> > width
> >
> > :   250px
> >
> > align
> >
> > :   left
> >
### スクリーンショット機能

Monaca
デバッガーを使用することで、スクリーンショットを取得してデバイスのストレージに保存することもできます。
スクリーンショット画面では、次のことができます。

> -   編集 : スクリーンショットのキャプチャー、コメントの手書き入力
> -   デバイスのストレージへ保存。
>
> ![](images/features/4.png)
>
> > width
> >
> > :   250px
> >
> > align
> >
> > :   left
> >
### アプリログ

Monaca
デバッガー上で、アプリのログを確認できます。ログには、実行中のアプリのエラーと進行状況が出力されます。

![](images/features/3.png){width="250px"}

### インスペクタ機能

インスペクタ機能を使用すると、[Chrome Dev
Tools](https://developer.chrome.com/devtools/index)
を使用してプロジェクトをデバッグ・検査することができます。
インスペクタ機能を使用する前に、端末のUSBデバッグを有効にする必要があります。
詳細は、USB デバッグの事前準備 &lt;pre\_debug\_app&gt;
をご確認ください。

![](images/features/7.png)

> width
>
> :   700px
>
> align
>
> :   center
>
<div class="admonition note">

Monaca Localkit &lt;monaca\_cli\_index&gt; または
Monaca CLI &lt;monaca\_cli\_index&gt;
の使用時のみ、このインスペクタ機能を利用できます。詳細は、Monaca Localkit を使用して、アプリをデバッグする方法 ( USB デバッグの解説箇所 ) &lt;localkit\_debug\_app&gt;
または
Monaca CLI を使用して、アプリをデバッグする方法 ( USB デバッグの解説箇所 ) &lt;cli\_debug\_app&gt;
をご確認ください。

</div>

デバッガーのメニュー
--------------------

![](images/features/8.png){width="250px"}

Inside デバッガーのメニュー, there are:

### すべてのプロジェクト

Monaca デバッガー上で実行可能な Monaca
プロジェクトの一覧を表示します。一覧上のプロジェクトには、2
つのサブカテゴリーがあります。

> -   Monaca.io プロジェクト : Monaca クラウド IDE
>     上で作成されたプロジェクトの一覧を表示します。
> -   ローカルプロジェクト : ローカル環境用の開発ツール (
>     Monaca Localkit &lt;monaca\_localkit\_index&gt; または
>     Monaca CLI &lt;monaca\_cli\_index&gt; )
>     を使用して作成し、ローカルに保存されているプロジェクトの一覧です。なお、Monaca
>     Localkit ( または Monaca CLI )
>     とデバッガーがペアリングされているときのみ、ローカルプロジェクトの一覧は表示されます。

![](images/features/9.png){width="250px"}

### ローカルコンピュータ

ペアリング済み、または、利用可能 ( 未接続 )
なコンピューターの一覧を表示します。ペアリング済みのコンピューターとは、Monaca
Locakit または Monaca CLI
がインストールされ、デバッガーに現在接続されているローカルのコンピューターです。各開発ツールとのペアリング方法は、次のリンクをご確認ください。

> -   Monaca Localkit と Monaca デバッガーのペアリング方法 &lt;localkit\_pairing\_debugging&gt;
> -   Monaca CLI  と Monaca デバッガーのペアリング方法 &lt;cli\_pairing\_debugging&gt;
> -   Monaca for Visual Studio と Monaca デバッガーのペアリング方法 &lt;monaca\_vs\_testing\_debugging&gt;

![](images/features/10.png){width="250px"}

### デバッガーの設定

デバッガー側の各種設定を行えます。設定可能な項目は、\[
スリープを許可する \]、\[ メモリー使用量表示 \]、\[ スプラッシュ表示 \]
( Android のみ )、\[ アプリの復帰時にプロジェクトを再実行 \]、\[
ネットワーク再接続時にプロジェクトを再実行 \]、\[ 同期データを削除する
\]、\[ Local Storage を削除する \]
です。同期データとは、ローカル側と同期を行ったプロジェクトファイルを指します。また、Local
Storage とは、端末のメモリー ( LocalStorage )
上に、プロジェクト側で作成・保存したデータを指します。

> ![](images/features/11.png){width="250px"}

### デバッガーについて

デバッガーの詳細情報を表示します。表示する情報は、デバッガーのバージョン番号、プラットフォーム情報、CLI
バージョン番号、WebView エンジン ( Android のみ
)、利用可能なプラグインの一覧などです。

![](images/features/12.png){width="250px"}

プロジェクトオプション
----------------------

Monaca デバッガー上のプロジェクト一覧の \[ Monaca.io プロジェクト \]
では、各プロジェクトの右側に \[ プロジェクトオプション \]
アイコンが表示されています。 \[ プロジェクトオプション \]
では、次のことができます。

-   スター : スター ( 星マーク ) を付けると、「 お気に入り 」
    プロジェクトとして、Monaca クラウド IDE
    上のプロジェクト一覧の最上位に表示されます。
-   実行する : デバッガー上で、プロジェクトを実行します。
-   ネットワークインストール : Monaca
    デバッガー経由で、ビルド済みアプリを、端末にインストールします。

    ![](images/features/13.png){width="250px"}

    ![](images/features/14.png){width="250px"}

<div class="admonition note">

ネットワークインストールを行う前に、Monaca クラウド IDE
上で、プロジェクトをビルドして、デバッグビルド版のアプリを作成する必要があります。詳細は、iOS 向けアプリのデバッグビルド &lt;types\_of\_build\_ios&gt;
または
Android 向けアプリのデバッグビルド &lt;types\_of\_build\_android&gt;
をご確認ください。

</div>

<div class="admonition note">

ネットワークインストールは、iOS
デバッガーでは、カスタムビルド版デバッガー &lt;custom\_debugger\_ios&gt;
でのみ使用できます。App Store
版のデバッガーでは、ネットワークインストールは使用できません。

</div>
