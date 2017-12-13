Monaca for Visual Studio の概要
===============================

Monaca for Visual Studio は、拡張機能の 1
つです。この拡張機能を組み込めば、Microsoft Visual Studio IDE
上でも、Monaca アプリを開発できます。この拡張機能には、Monaca クラウド
IDE の機能の一部を移植しているので、Monaca クラウド IDE
さながらに、Visual Studio IDE ( Monaca for Visual Studio )
をご使用いただけます。

> ![](images/introduction/1.png)
>
> > alt
> >
> > :   Monaca for Visual Studio
> >
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
事前準備
--------

Monaca for Visual Studio の使用前に確認する点を、次に記します。

-   Microsoft Visual Studio 2015 の Community、Professional
    エディション、または、それ以上
    のバージョンがインストールされていること
-   対応するプランへの加入 (
    [料金プラン](https://ja.monaca.io/pricing.html) を参照のこと )

Monaca for Visual Studio のインストール
---------------------------------------

<div class="admonition note">

Monaca for Visual Studio を支障なく使用するためには、Visual Studio
上で、Tools for Apache Corodva &lt;install\_tools\_for\_apache\_cordova&gt;
をインストールする必要があります。

</div>

Monaca for Visual Studio のインストール方法は、2 通りあります。

1.  install\_from\_vs
2.  install\_from\_web

### Visual Studio からインストール

1.  Visual Studio
    メニューから、ツール --&gt; 拡張機能と更新プログラム...
    を選択します。
2.  左側の一覧から、オンライン --&gt; Visual Studio ギャラリー
    を選択します。次に、右上の検索ボックスに、「 monaca 」
    と入力します。
3.  `Monaca for Visual Studio 2015` を選択して、ダウンロード
    をクリックします。ダウンロード後、インストールします。

> ![](images/introduction/2.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
> <div class="admonition note">
>
> Onsen UI テンプレートを使用して、Visual Studio
> 上でプロジェクトを作成する場合には、`Onsen UI Templates for Visual Studio 2015`
> をダウンロード・インストールします。
>
> </div>

4.  インストール後、Visual Studio を再起動します。再起動後、Visual
    Studio メニュー上に MONACA
    メニューが追加されていることを確認します。

> ![](images/introduction/3.png)
>
> > width
> >
> > :   321px
> >
> > align
> >
> > :   left
> >
### Web からインストール

1.  [こちらのリンク ( Visual Studio ギャラリー
    )](https://visualstudiogallery.msdn.microsoft.com/21a7a495-5a24-4eab-a519-2f6e6d176049)
    から、Monaca for Visual Studio 2015 をダウンロードします。
2.  ダウンロードしたファイルを開き、インストールします。
3.  Visual Studio を起動して、メニュー上に MONACA
    メニューが追加されていることを確認します ( インストール時、Visual
    Studio を起動していた場合には、いったん再起動されます ) 。

Tools for Apache Cordova のインストール
---------------------------------------

1.  Visual Studio
    メニューから、ファイル --&gt; 新規作成 --&gt; プロジェクト
    を選択します。
2.  インストール済み --&gt; テンプレート --&gt; JavaScript --&gt; Apache Cordova Apps
    を選択します。
3.  `Install Tools for Apache Cordova Update 7` を選択して、OK
    をクリックします。

> ![](images/introduction/11.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
4.  インストール をクリックします。

> ![](images/introduction/12.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
5.  更新処理がはじまる前に、Visual Studio
    をいったん終了させます。終了させない場合、次のダイアログが表示され、Visual
    Studio を終了させるように催促されます。

> ![](images/introduction/13.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
6.  次へ ボタンをクリックします。

> ![](images/introduction/14.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
7.  Update
    ボタンをクリックします。インストールが完了するまで、しばらく待ちます。

> ![](images/introduction/15.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
Monaca for Visual Studio のアンインストール
-------------------------------------------

Monaca for Visual Studio
を完全にアンインストールする場合には、次の両方の手順を行います。

1.  uninstall\_from\_vs
2.  uninstall\_from\_pc

### Visual Studio からアンインストール

1.  Visual Studio
    メニューから、ツール --&gt; 拡張機能と更新プログラム...
    を選択します。
2.  インストール済み --&gt; ツール を選択します。
3.  `Monaca` を選択して、アンインストール を選択します。

> ![](images/introduction/10.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
### Windows PC 上でアンインストール

1.  コントロール パネル --&gt; プログラム --&gt; プログラムのアンインストール
    を選択します。
2.  `Monaca for Visual Studio` を選択して、アンインストール
    をクリックします。

Monaca パネルの概要
-------------------

Monaca のインストール後 ( Visual Studio IDE への組み込み後 )、Visual
Studio IDE 上の Monaca パネルから、有効な Monaca
アカウントを使用して、ログインします。

![](images/introduction/9.png){width="327px"}

Monaca パネルでは、次の機能を使用できます。

-   run\_in\_device
-   monaca\_panel\_build\_settings
-   monaca\_panel\_build
-   monaca\_panel\_preferences

### デバイス上で実行

この機能は、最低限 1 つの monaca\_debugger\_index がホスト PC ( Visual
Studio を実行中の PC )
に接続されている場合に使用できます。この機能を使用すれば、Monaca
デバッガー上でプロジェクトを実行できます。Monaca for Visual Studio と
Monaca
デバッガー間の接続方法に関しては、こちら &lt;monaca\_vs\_testing\_debugging&gt;
をご確認ください。

> ![Monaca デバッガーと未接続](images/introduction/4.png){width="300px"}
>
> ![Monaca デバッガーと接続中](images/introduction/5.png){width="346px"}

### ビルド設定

Monaca クラウド IDE に実装されている各プラットフォーム向けの \[
ビルド設定 \]
と同じように、この機能を使用すると、ビルド設定用のウィンドウが表示され、次のビルド設定を行えます
( 加えて、アプリ設定も行えます )。

-   Cordova プラグイン &lt;cordova\_plugins\_setting&gt;
-   js\_css
-   service\_integration\_index
-   Android アプリ設定 と キーストア設定 &lt;building\_for\_android&gt;
-   iOS アプリ設定 と ビルド設定 &lt;building\_for\_ios&gt;
-   Windows アプリ設定 &lt;building\_for\_win8&gt;

![](images/introduction/6.png){width="700px"}

### ビルド

この機能を使用すると、ビルド用のウィンドウが表示され、お好みのプラットフォーム向けにプロジェクトのビルドができます
( 下のスクリーンショットを参照のこと )。

![](images/introduction/7.png){width="700px"}

### 設定

Monaca デバッガーとホスト PC ( Visual Studio 上で Monaca を実行中の PC )
のペアリング時に使用する、HTTP
サーバーのポートとプロキシーサーバーは、自由に設定することもできます。ペアリングの詳細は、こちら&lt;troubleshoot\_pair&gt;
をご確認ください。

MONACA --&gt; 設定 を選択して、これらの設定を行います。

![](images/introduction/8.png){width="429px"}

プロキシサーバーのアドレスは、次のように設定します。

1.  Basic 認証 ( 基本認証 ) をプロキシサーバーで使用している場合

> ``` {.sourceCode .html}
> http://user:pass@server-host:port
> ```

2.  Basic 認証 ( 基本認証 ) をプロキシサーバーで使用していない場合

> ``` {.sourceCode .html}
> http://server-host:port
> ```
