パート 2 : Monaca for Visual Studio と Monaca デバッガーとの連携
================================================================

Monaca デバッガー &lt;monaca\_debugger\_index&gt; は、Monaca
アプリの検証とデバッグを、端末上でリアルタイムに行うためのアプリです

ローカル PC 上で Monaca
アプリを開発する場合、プロジェクトファイルへの変更は、保存後、Monaca
デバッガーへ即座に 「 プッシュ 」 されます ( ペアリング済みであること
)。

事前準備
--------

Please install Monaca Debugger on your device.

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
    アカウントを使用してログインします。ログインのユーザー名とパスワードは、Visual
    Studio IDE の Monaca メニューで入力したものと同じものを使用します。

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
2.  Monaca デバッガーと ホスト PC ( Monaca for Visual Studio を起動中の
    PC ) をペアリングします。Monaca デバッガーおよび Monaca for Visual
    Studio の両方に、同一の Monaca
    アカウントでログインしていれば、Monaca デバッガー側で、ホスト PC
    を自動的に検知します ( 下のスクリーンショットを参照のこと
    )。次に、ペアリング ボタンをタップします。

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
3.  ペアリング後、Monaca
    デバッガー上には、プロジェクトの一覧が表示され、一方、Monaca
    パネル上 ( Visual Studio ) には、接続されたデバッガーが表示されます
    ( 下のスクリーンショットを参照のこと )。Monaca デバッガーがホスト PC
    側を自動で検知できない場合には、ペアリングのトラブルシューティング &lt;troubleshoot\_pair&gt;
    をご確認ください。

> ![Monaca デバッガー](images/testing_debugging/3.png){width="250px"}
>
> ![Visual Studio 上の Monaca
> パネル](images/testing_debugging/4.png){width="232px"}

4.  Monaca
    デバッガー上でプロジェクトを実行する場合、デバッガー上に表示されたプロジェクト名をタップするか、または、Visual
    Studio の Monaca パネル上で デバイス上で実行
    ボタンをクリックします。次に、デバッガー上でプロジェクトが実行されていることを確認します。

> ![](images/testing_debugging/5.png){width="250px"}

ステップ 2 : Monaca デバッガーとプロジェクト間のリアルタイムでの同期
--------------------------------------------------------------------

1.  Monaca デバッガー上で、プロジェクトを実行します。
2.  プロジェクトファイルの内容を変更し、保存してみましょう (
    プロジェクトファイルの編集 &lt;monaca\_vs\_edit\_project&gt;
    を参照のこと )。ここでは、index.html 上で、各欄の見出しを 「 Rorem
    Ipsum 」 から 「 Monaca and OnsenUI 」
    へ変更してみます。次に、保存します。

> ![](images/testing_debugging/6.png)
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

> ![更新後の見出し](images/testing_debugging/7.png){width="250px"}
>
> ![更新ボタン](images/testing_debugging/8.png){width="250px"}

ここでは、Monaca
デバッガーの基本的な使用方法について解説しました。他の箇所も変更して、デバッガー上で確認してみましょう。

<div class="admonition note">

Monaca デバッガーが提供する機能に関しては、 monaca\_debugger\_features
をご確認ください。

</div>
