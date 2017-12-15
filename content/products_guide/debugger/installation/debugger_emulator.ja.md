Android エミュレーター向け Monaca デバッガー
============================================

ここでは 「 Android SDK 」 の AVD ( Android Virtual Device/Android
仮想端末 ) と呼ばれる Android エミュレーター上で、Monaca
デバッガーを動作させる方法を紹介します。これを使えば、Android
アプリのシミュレートを PC 上で行えます。また、複数の Android
端末でアプリの検証を行いたい場合もこの方法が有用です。

<div class="admonition note">

Monacaバックエンドプラグインは、カスタム版Monaca
Debuggeに含まれていません。

</div>

<div class="admonition note">

この解説では、Mac OS X を使用しています。また、エミュレーター上で Monaca
デバッガーを実行する場合、インターネット接続が必要です。

</div>

ステップ 1 : Android 仮想端末のセットアップ
-------------------------------------------

1.  [Android Studio](http://developer.android.com/sdk/index.html)
    をダウンロードして、インストールします。
2.  Android Studio を起動します。
3.  新規のプロジェクトを作成するか、または、既存のプロジェクトを開きます。
4.  AVD Manager をクリックして、\[ Android Virtual Device Manager \]
    ダイアログを表示します。

> ![](images/debugger_emulator/1.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
5.  + Create Virtual Device をクリックします。
6.  使用する Android 端末を選択して、Next をクリックします。

> ![](images/debugger_emulator/2.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
7.  システムイメージを選択して ( 場合によっては、最初にダウンロード
    )、Next をクリックします。

> ![](images/debugger_emulator/3.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
8.  仮想端末の設定を行います。Show Advanced Settings
    をクリックして、仮想端末の詳細設定 (
    メモリーとストレージのサイズ、端末のフレーム設定、キーボード入力の可否など
    ) を行います。

> ![](images/debugger_emulator/4.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
> ![](images/debugger_emulator/4_1.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
9.  設定後、 Finish をクリックします。

ステップ 2 : Android 向けのカスタムビルド版 Monaca デバッガーのビルド
---------------------------------------------------------------------

1.  Monaca クラウド IDE へ行き、Android 向けのカスタムビルド版 Monaca
    デバッガーをビルドします。詳細は、custom\_debugger\_and
    をご確認ください。
2.  ビルドされたデバッガーのファイルをダウンロードして、Google
    Drive、Dropbox
    などのクラウドストレージへ、ダウンロードしたファイルをアップロードします。
3.  アップロードしたファイルのダウンロードリンクを確認しておきます (
    仮想端末上で、後ほど、このリンクを使用します )。

ステップ 3 : Monaca デバッガーのインストール
--------------------------------------------

1.  AVD Manager を選択して、対象の仮想端末を起動します。

> ![](images/debugger_emulator/5.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
2.  仮想端末上でブラウザーを起動させ、ステップ 2 &lt;step\_2&gt;
    で確認したダウンロードリンクを開き、Android 向けのカスタムビルド版
    Monaca デバッガーをダウンロードします。

> ![](images/debugger_emulator/6.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
3.  ダウンロードしたファイルをクリックして、デバッガーをインストールします。

> ![](images/debugger_emulator/7.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
4.  インストール ウィザードが起動します。

> ![](images/debugger_emulator/8.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
5.  インストール後、アプリの一覧画面に、Monaca
    デバッガーが表示されていることを確認します。

> ![](images/debugger_emulator/9.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
ステップ 4 : Monaca デバッガー上でのプロジェクトの起動
------------------------------------------------------

1.  Monaca デバッガーを起動させ、Monaca
    アカウントを使用して、サインインします。

> ![](images/debugger_emulator/10.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
2.  Monaca デバッガー上で、実行するプロジェクトをクリックします。

> ![](images/debugger_emulator/11.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
3.  これで、プロジェクトの検証の準備が整いました。アプリの開発における
    Monaca
    デバッガーの使用方法・具体例に関しては、monaca\_debugger\_features
    と debugging\_monaca\_app をご確認ください。

> ![](images/debugger_emulator/12.png)
>
> > width
> >
> > :   350px
> >
> > align
> >
> > :   left
> >
