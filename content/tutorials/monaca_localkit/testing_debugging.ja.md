パート 2 : Monaca Localkit と Monaca デバッガーとの連携
=======================================================

Monaca デバッガー &lt;monaca\_debugger\_index&gt; は、Monaca
アプリの検証とデバッグを、端末上でリアルタイムに行うためのアプリです。

Monaca Localkit を使用して、ローカル PC 上で Monaca
アプリを開発する場合、プロジェクトファイルへの変更は、保存後、Monaca
デバッガーへ即座にプッシュされます ( ペアリング済みであること )。

このパートで学習する内容は、次のとおりです。

-   Monaca デバッガー上で、プロジェクトを実行します。
-   Monaca Localkit と Monaca
    デバッガー間を、リアルタイムで同期させます。
-   Chrome DevTools を使用して、プロジェクトをデバッグします。

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

1.  Monaca デバッガーと PC ( Monaca Localkit が実行中であること )
    をペアリングします。詳細は、 localkit\_pairing\_debugging
    をご確認ください。
2.  ペアリング後、Monaca
    デバッガー上には、プロジェクトの一覧が表示され、Monaca Localkit
    上には、接続されたデバッガーが表示されます (
    下のスクリーンショットを参照のこと
    )。ペアリングが失敗する場合には、ペアリングのトラブルシューティング &lt;troubleshoot\_pair&gt;
    をご確認ください。

> ![Monaca デバッガー](images/testing_debugging/1.png){width="175px"}
>
> ![Monaca Localkit](images/testing_debugging/2.png){width="472px"}

3.  Monaca
    デバッガー上で、プロジェクトを実行します。実行する場合には、Monaca
    デバッガー上に表示されたプロジェクト名をタップするか、または、Monaca
    Localkit の 実行 ボタンをクリックします。
4.  下のスクリーンショットのような画面が、端末に表示されます。デバッガーメニュー上の
    戻る ボタンをタップすれば、プロジェクト一覧画面に戻ります。

> ![](images/testing_debugging/3.png){width="250px"}
>
> ![](images/testing_debugging/5.png){width="250px"}

5.  メモ帳アプリを実行して、新しいメモを追加してみましょう。次のように、新しいメモが表示されたら、プロジェクトは正しく動作しています。

> ![](images/testing_debugging/4.png){width="250px"}

ステップ 2 : Monaca Localkit と Monaca デバッガー間のリアルタイムでの同期
-------------------------------------------------------------------------

1.  Monaca デバッガー上で、プロジェクトを実行します。
2.  プロジェクトファイルに変更を加えて、保存しましょう ( 詳細は、
    プロジェクトファイルの編集 &lt;edit\_project\_localkit&gt;
    を参照のこと )。たとえば、 `index.html`
    ファイル内に記述されたアプリのタイトルを変更したり、または、
    `style.css`
    ファイル内で、ページのスタイルを変更してみましょう。また、Monaca
    Localkit の ライブリロード
    機能は、デフォルトで有効化されています。よって、Monaca Localkit
    とデバッガー間で、リアルタイムの同期が行われます。オフにした場合、リアルタイムでの同期は行われません。

> ![](images/testing_debugging/7.png){width="700px"}

3.  保存された変更点は、Monaca
    デバッガー上のアプリに、即時に反映されます。反映されない場合には、デバッガーメニュー上の
    更新 ボタンをタップすれば、最新の内容を反映できます。

> ![](images/testing_debugging/6.png){width="250px"}

ステップ 3 : Monaca デバッガーを使用した、プロジェクトのデバッグ
----------------------------------------------------------------

Monaca Localkit では、 [Chrome
DevTools](https://developer.chrome.com/devtools)
を使用して、アプリをデバッグできます ( USB 接続を使用 )。USB
デバッグを始める前に、 USB デバッグの有効化 &lt;pre\_debug\_app&gt;
の内容を読み、このデバッグ方法をサポートする Monaca
デバッガーのバージョンをご確認ください。

1.  Monaca デバッガー上で、プロジェクトを実行します。
2.  デバッガーメニュー上で、 インスペクタ ボタンをタップします (
    下のスクリーンショットを参照のこと )。

> ![](images/testing_debugging/8.png){width="250px"}

3.  Chrome DevTools が、ホスト PC
    側で起動します。ここで、アプリの検証とデバッグを行えます。詳細は、Chrome
    DevTools の各機能の解説 (
    [DOM/スタイルの検証](https://developer.chrome.com/devtools/docs/dom-and-styles)
    、 [JavaScript
    のデバッグ](https://developer.chrome.com/devtools/docs/javascript-debugging)
    など ) をご確認ください。また、Chrome DevTools
    を起動できない場合には、 troubleshoot\_inspector をご確認ください。

> ![](images/testing_debugging/9.png){width="700px"}

<div class="admonition note">

Chrome DevTools は、Monaca Localkit
から、直接、起動することもできます。その場合、Monaca Localkit
上で、デバッグ対象のプロジェクトを選択して、次に、\[
ペアリング済みのデバッガー \] に表示されたデバッガーの インスペクタ
ボタンをタップします ( 下のスクリーンショットを参照のこと )。

</div>

![](images/testing_debugging/10.png){width="700px"}

<div class="admonition note">

Monaca デバッガーが提供する機能に関しては、 monaca\_debugger\_features
をご確認ください。

</div>
