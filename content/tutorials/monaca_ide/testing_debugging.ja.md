パート 2 : Monaca クラウド IDE と Monaca デバッガーとの連携
===========================================================

Monaca デバッガー &lt;monaca\_debugger\_index&gt; は、Monaca
アプリの検証とデバッグを、端末上でリアルタイムに行うためのアプリです。

Monaca アプリの開発時、Monaca クラウド IDE ( PC 側 ) と Monaca
デバッガー ( 端末側 ) がインターネットに接続されていれば、IDE
上のプロジェクトファイルに加えられた変更は、保存後、即座にデバッガー側に
「 プッシュ 」 されます。

事前準備
--------

Monaca デバッガーを端末にインストールします。

> ![](images/testing_debugging/App_Store.jpg){width="100px"}
>
> ![](images/testing_debugging/Google_play.png){width="100px"}

<div class="admonition note">

Monaca デバッガーのインストール方法 ( プラットフォーム別 )
は、こちら &lt;debugger\_installation\_index&gt; をご確認ください。

</div>

ステップ 1 : Monaca デバッガー上でのプロジェクトの実行
------------------------------------------------------

1.  Monaca デバッガーを起動し、Monaca
    アカウントを使用してログインします。ログインのユーザー名とパスワードは、Monaca
    クラウド IDE のログイン時に使用したものと同じものを使用します。

> ![](images/testing_debugging/1.png)
>
> > width
> >
> > :   250px
> >
> > align
> >
> > :   left
> >
2.  プロジェクトの一覧が表示されます。Monaca クラウド IDE
    上のプロジェクトは、\[ Monaca.io プロジェクト \]
    欄に表示されます。プロジェクトを実行する場合は、Monaca
    デバッガー上のプロジェクト名をタップ、または、Monaca クラウド IDE
    のメニューから 実機デバッグ をクリックします。

> ![](images/testing_debugging/2.png)
>
> > width
> >
> > :   250px
> >
> > align
> >
> > :   left
> >
3.  デバッガー上でプロジェクトが実行されていることを確認します。プロジェクトの一覧画面に戻る場合は、\[
    デバッガーメニュー \] ボタンをタップし、次に 戻る
    ボタンをタップします。

> ![](images/testing_debugging/3.png){width="250px"}
>
> ![](images/testing_debugging/6.png){width="250px"}

4.  再びアプリを起動させ、メモの追加と削除を行い動作を確認してみましょう。

> ![](images/testing_debugging/4.png){width="250px"}

ステップ 2 : Monaca クラウド IDE と Monaca デバッガー間のリアルタイム更新
-------------------------------------------------------------------------

ここまでの手順で、Monaca
デバッガー上でプロジェクトを実行できることを確認しました。次に、このプロジェクトを編集し
Monaca デバッガー側に反映されるか確認してみましょう。

1.  Monaca デバッガー上で、プロジェクトを実行します。
2.  Monaca クラウド IDE
    上でプロジェクトファイルの内容を変更し、保存してみましょう (
    プロジェクトファイルの編集 &lt;monaca\_cloud\_ide\_edit\_project&gt;
    を参照のこと )。ここでは index.html 上でページのタイトルを 「 Monaca
    Memo 」 から 「 My Memo 」 へ変更し、保存します。

> ![](images/testing_debugging/7.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  保存された変更は、端末の Monaca
    デバッガー側に送られます。アプリ側で変更が反映されない場合は、デバッガーメニュー上の
    更新 ボタンをタップすることで、最新の内容を取得することができます。

> ![更新後のページタイトル](images/testing_debugging/5.png){width="250px"}
>
> ![更新ボタン](images/testing_debugging/8.png){width="250px"}

<div class="admonition note">

Monaca デバッガーが提供する機能に関しては、 monaca\_debugger\_features
をご確認ください。

</div>

ここでは、Monaca
デバッガーの基本的な使用方法について解説しました。他の箇所も変更して、デバッガー上で確認してみましょう。

Monaca でのデバッグをお楽しみください！
