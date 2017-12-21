---
title: Monaca 提供のアップロード機能
weight: 20
---

{{<note>}}
    このアップロード機能を使用するためには、対応するプランへの加入が必要です。詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="こちら">}} をご確認ください。
{{</note>}}

{{<note>}}
    プロジェクトを他のメンバーと共有している場合には、プロジェクトのオーナーだけがアップロード機能を使用できます。
{{</note>}}

{{<warning>}}
    アクティベーション コードを使用し、アカウントをアップグレードさせて、アップロード機能を使用する場合には、アップグレード後のプランがこの機能をサポートしている必要があります。なにかご質問がございましたら、こちらの {{<link href="https://monaca.mobi/ja/support/inquiry" title="相談窓口">}} までご連絡ください。
{{</warning>}}


Monaca 提供のアップロード機能を使用すれば、Monaca クラウド IDE から
iTunes Connect
に、アプリをアップロードできます。手順は、次のとおりです。

1.  リリースビルド版のアプリを Monaca
    上で作成します。詳細は、[iOS アプリのビルド]({{<ref "build_ios.ja.md">}}) をご確認ください。
2.  リリースビルド版アプリの作成後、次の画面が表示されます。次に、アップロードボタン
    ( 下のスクリーンショットの赤枠部分 ) をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/1.png" width="500">}}
    
3.  アプリのアップロード用のウィンドウが表示されます。次へ
    をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/2.png">}}
4.  有効な Apple アカウント情報を入力して、次へ をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/3.png">}}

5.  iTunes Connect
    上でアプリの登録を事前に行っておく必要があります。詳細は、こちら &lt;apply\_itune\_connect&gt;
    をご確認ください。ここでは、登録済みであることを前提として、iTunes Connect にアプリ情報を登録しました。
    にチェックを入れます。次に、Upload をクリックします。

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/4.png">}}

6.  アップロードが完了するまで、しばらく待ちます。

> <div class="admonition note">
>
> バージョンが異なる同一アプリをアップロードする場合、ファイル内のバージョン情報を、対応するバージョンに変更しておく必要があります。それ以外の場合、アップロードが失敗します。
>
> </div>
>
> ![](images/app_submission/5.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
7.  アップロード完了後、次の画面が表示されます。なお、iTunes Connect
    上にアプリが表示されるまでには、しばらく時間がかかる場合があります。

> ![](images/app_submission/6.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
> <div class="admonition note">
>
> iTunes Connect へのアップロード時、Apple
> 側でなんらかのエラーを出力する場合があります (
> アカウントに登録しているメールアドレス宛にもエラー通知が送信されます
> )。その場合には、エラー内容を確認して、適切に対処してください。エラーの解消後、再度、アプリをアップロードします。
>
> </div>

8.  これで、アプリのアップロードが完了しました。この後に、iTunes Connect
    上にて、申請に向けた手続きがありますので、詳細は、アップロード後に行うアプリの設定 &lt;select\_uploaded\_app&gt;
    をご確認ください。

