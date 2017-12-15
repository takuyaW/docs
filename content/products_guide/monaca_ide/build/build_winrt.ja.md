Windows アプリのビルド
======================

Windows ストアアプリ
--------------------

Windows ストアアプリは、HTML5 と JavaScript で作成され、WinRT
アーキテクチャー上で、ネイティブと同じように実行されます。また、Monaca
で作成したアプリにも、Visual Studio
などで作成したアプリと同じ機能が実装されており、WinJS
を含む、すべてのネイティブ機能を使用できます。

また、Windows ストアアプリは、Windows および Windows RT を搭載した PC
とタブレット上で動作します。なお、Monaca では、Windows
ストア向けのビルド ( リリースビルド ) をサポートしていないため、Windows
ストア向けにアプリを作成する場合には、Visual Studio
などを使用して、別途、アプリを再ビルドする必要があります。

また、Windows ストアアプリには、Android と iOS にはない制約があります。

-   Trident/Chakra ( レンダリングエンジン/JavaScript エンジン )
    のストアアプリ向けの実行モードで、HTML5 と JavaScript
    は実行されるため、標準メソッドと機能の一部に、サポートされていないものがあります
    ( Trident は、IE と同じ描画エンジンでもあります )。詳細は、「 [HTML,
    CSS, and JavaScript features and
    difference](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx)
    」 ( 外部サイト ) をご確認ください。

事前準備
--------

Windows アプリの構築には、Microsoft
社が発行する、有効な開発者用ライセンスが必要です。ライセンス自体は無料ですが、Microsoft
アカウントが必要です。ライセンスを取得する場合には、最初に
[こちら](https://dev.windows.com/en-us/programs/join) で登録をします。

ステップ 1 : Windows アプリの設定
---------------------------------

1.  Monaca クラウド IDE のメニューから、
    設定 --&gt; Windows アプリ設定... を選択します。
2.  アプリに関する情報を入力します。

> ![](images/winrt/1.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  設定後、 保存する をクリックします。

ステップ 2 : アプリのビルド
---------------------------

1.  Monaca クラウド IDE のメニューから、
    ビルド --&gt; Windows アプリのビルド を選択します。
2.  ビルドを開始する ボタンをクリックします。

> ![](images/winrt/2.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  ビルド後、zip ファイルをダウンロードします。

ステップ 3 : アプリのインストール
---------------------------------

1.  先ほどダウンロードした zip ファイルを解凍します。
2.  解凍したフォルダー内の Add-AppDevPackage.ps1
    ファイルを右クリックして、PowerShell で実行
    を選択すると、インストールが始まります。

> ![](images/winrt/4.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
3.  選択したファイルを開くか確認するメッセージが表示されます。開く
    をクリックします。

> ![](images/winrt/5.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
4.  \[ Enter \] を押して、処理を続けます。

> ![](images/winrt/6.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
5.  管理者権限を付与するかを確認するメッセージが表示されます \[
    ユーザーアカウント制御 ( UAC ) 機能 が有効な場合 \]。 はい
    をクリックします。
6.  PowerShell のウィンドウ上に、次のメッセージが表示されます。 `R`
    と入力します。

> ![](images/winrt/7.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
7.  `Y` ( はい ) を入力します。

> ![](images/winrt/8.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
8.  インストール後、Enter を押します。

> ![](images/winrt/9.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
9.  これで、インストールが完了しました。次に、アプリビュー ( アプリ一覧
    ) 上にアプリが追加されていることを確認します。

> ![](images/winrt/10.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
10. アプリをクリックして、起動します。

> ![](images/winrt/11.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >

