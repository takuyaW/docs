---
title: iOS アプリのビルド
---

事前準備
--------

事前準備として、次の内容を行います。

-   [Apple Developer Program](https://developer.apple.com/programs/ios/)
    への登録
-   ビルドの種類 &lt;types\_of\_build\_ios&gt; と要件の確認

### ビルドの種類

Monaca では、デバッグビルド、テストビルド ( Ad Hoc )、リリースビルドの 3
種類の iOS アプリをビルドできます。これらの相違点は、次のとおりです。

<div class="admonition note">

Ad Hoc 配布とは、App Store
を経由せずに、アプリを配布するための仕組みです ( 評価配布用 )。Ad Hoc
プロビジョニング
プロファイルを使ってビルドする、評価用アプリは、現在、最大 *100 台*
まで、Ad Hoc
形式で配布できます。ただし、アプリの配布先は、開発関係者に限定されます。

</div>

ステップ 1 : Monaca 上での iOS アプリ設定
-----------------------------------------

### iOS アプリの設定

1.  Monaca クラウド IDE のメニューから、 設定 --&gt; iOS アプリ設定...
    を選択します。
2.  アプリに関する情報を入力します。

> ![](images/build_ios/1.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
> <div class="admonition warning">
>
> Monaca 上でのアプリ設定では、App ID に、アスタリスク (`*`)
> は使用できません。使用した場合、ビルドが失敗します。また、この App ID
> には、iOS Dev Center で登録した/する Explicit App ID
> と同じものを使用します。詳細は、register\_appID をご確認ください。
>
> </div>

3.  設定後、 保存する をクリックします。

<div class="admonition note">

現在、iOS の \[ App ID \] または Android の \[ パッケージ名 \]
のいずれかを変更すると、両方とも同じ名前に更新されます。それぞれに別の名を設定する場合には、faq05-019
をご確認ください。

</div>

### iOS のビルド設定

1.  Monaca クラウド IDE のメニューから、 設定 &gt; iOS ビルド設定
    を選択します。

> ![](images/build_ios/2.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
2.  秘密鍵を作成します。または、既存の秘密鍵がある場合には、インポートもできます。ここでは、新規に秘密鍵を作成します。秘密鍵と CSR の生成
    ボタンをクリックして、ユーザー名 ( 秘密鍵に付ける名前 ) ・
    メールアドレス ( Apple ID ) ・ 国コードを入力します。

> ![](images/build_ios/3.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
> <div class="admonition note">
>
> 既存の秘密鍵をインポートする場合には、その秘密鍵に関連付けされた証明書も
> Monaca へアップロードする必要があります。詳細は、import\_into\_monaca
> をご確認ください。
>
> </div>

3.  秘密鍵の作成後、その秘密鍵に関連付けされた CRS
    ファイルも同時に作成されます。次に、エクスポート
    ボタンをクリックして、この CRS
    ファイルをダウンロードします。このファイルは、後ほど、iOS Dev Center
    で証明書を発行するときに使用します。
4.  「 証明書の作成 」 &lt;create\_cer&gt; の内容に従い、iOS Dev Center
    で証明書を作成して、ダウンロードします。
5.  「 プロビジョニング プロファイルの作成 」 &lt;register\_provisioning&gt;
    の内容に従い、iOS Dev Center でプロビジョニング
    プロファイルを作成して、ダウンロードします。
6.  証明書とそれに対応するプロビジョニング プロファイルを、Monaca
    クラウドへアップロードします。

> ![](images/build_ios/12.png)
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
> Monoaca のビルド設定上では、証明書とそれに対応するプロビジョニング
> プロファイルを、複数個、アップロード・保管しておくことができます。
>
> </div>

ステップ 2 : iOS Dev Center 上での iOS アプリ設定
-------------------------------------------------

1.  [Apple Developer ページ](https://developer.apple.com/)
    へ行き、メンバーセンター ( Account ) をクリックします。
2.  Apple Developer Program に登録した、Apple ID
    とパスワードを使用して、サインインします。このプログラムに未登録の場合には、[こちら](https://developer.apple.com/programs/)
    で登録します。
3.  Certificates, Identifiers/IDs & Profiles
    へ行き、次のページを表示します。

> ![](images/build_ios/4.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  このページ上で行う処理は、次のとおりです。

> -   create\_cer
> -   register\_appID
> -   register\_dev\_device
> -   register\_provisioning

###<a name="create-cer">証明書の作成</a>

iOS Dev Center では、2 種類の証明書を発行できます。

-   開発用証明書 : デバッグビルドを行うときに、必要となります。
-   配布用証明書 : リリースビルドまたは Ad Hoc
    ビルドを行うときに、必要となります。

CSR ファイルのダウンロード後 ( config\_ios\_build を参照のこと )、iOS
Dev Center で証明書を発行して、ダウンロードします。

開発用証明書の発行とダウンロードを、次の手順で行います。

1.  Certificates 項目の Development を選択します。
2.  ページの右上に表示された追加ボタン 「 + 」 をクリックします (
    下のスクリーンショットを参照のこと )。

> ![](images/build_ios/5.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  iOS App Development を選択し、 Continue ボタンをクリックします。

> <div class="admonition note">
>
> 配布用の証明書を発行する場合には、 App Store and Ad Hoc を選択します。
>
> </div>

4.  Continue ボタンをクリックし、Monaca クラウド IDE
    からダウンロードした CSR ファイル をアップロードします。次に、
    Generate ボタンをクリックします。
5.  開発用証明書の発行が、これで完了しました。発行された証明書をダウンロードします
    ( 後から、Monaca クラウド IDE にアップロードします )。

<div class="admonition note">

配布用証明書をインポートする場合も、ほぼ同様の手順です。

</div>

### App ID の登録

App ID は、開発用と配布用のプロビジョニング
プロファイルの作成時に、主に、使用します。Wildcard App ID ( 複数の
アプリで共通 ) または Explicit App ID ( アプリを識別する、一意の Bundle
ID と一致 ) を作成できます。

App ID の登録を、次の手順で行います。

1.  Identifiers 項目の App IDs を選択します。
2.  ページの右上に表示された追加ボタン 「 + 」 をクリックします (
    下のスクリーンショットを参照のこと )。

> ![](images/build_ios/8.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  App ID は、「 `.` 」 で区切られた、2 つの文字列 ( Prefix と Suffix )
    で構成されています。次の内容を参考にして、App ID
    の情報を入力します。

> -   App ID Description : App ID の説明を入力します。「 `@、&、*、'、"`
>     」 などの特殊文字は使用できません。
> -   App ID Prefix : Team ID となります ( デフォルト )。
> -   App ID Suffix : アプリを識別するための Bundle ID となります。App
>     ID Suffix には、次の 2 種類があります。
> -   App Services : アプリ上で使用したいサービスを選択します。

4.  Continue をクリックします。App ID の登録内容を確認して、Submit
    をクリックします。ここまでの手順で、iOS Dev Center への App ID
    の登録が完了しました。

### 開発用端末の登録

開発用と配布用のプロビジョニング
プロファイルを作成する前に、開発用の端末を登録する必要があります。

アプリ開発時に使用する端末を、次の手順で登録します。

1.  Devices 項目から、登録する端末の種類を選択します。
2.  ページの右上に表示された追加ボタン 「 + 」 をクリックします (
    下のスクリーンショットを参照のこと )。

> ![](images/build_ios/9.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  端末の情報を入力します。

> -   Name : 端末を識別するための名前を入力します ( 例 : MyiPhone )
> -   UDID : 端末固有の識別コードです。UDID は、コンピューターに iOS
>     端末を接続して確認できます。まず、iTunes
>     を起動して、端末情報を表示させます。端末情報の *シリアル番号*
>     をクリックして、UDID ( *40* 文字 ) を表示させます。次に、UDID
>     を右クリックし、コピーします ( 下のスクリーンショットを参照のこと
>     )。
>
>     ![](images/build_ios/6.png){width="500px"}
>
4.  入力後、 Continue をクリックします。次の画面で入力情報を確認して、
    Register をクリックします。iOS Dev Center
    上での開発用端末の登録は、これで完了です。

### プロビジョニング プロファイルの作成

アプリのビルドの最終工程として、プロビジョニング
プロファイルを作成します。プロビジョニング
プロファイルには、次の2種類があります。

-   開発用 プロビジョニング プロファイル :
    デバッグビルドを行うときに、開発用証明書と共に使用します。
-   配布用 プロビジョニング プロファイル : Ad Hoc または配布 ( 実稼働 )
    用ビルドを行うときに、配布用証明書と共に使用します。

開発用 プロビジョニング プロファイルを、次の手順で作成します。

1.  Provisioning Profiles 項目の Development を選択します。
2.  ページの右上に表示された追加ボタン 「 + 」 をクリックします。
3.  iOS App Development を選択し、 Continue ボタンをクリックします。

> <div class="admonition note">
>
> -   
>
>     Ad Hoc ビルド用に、配布用 プロビジョニング プロファイルを作成する場合には、Ad Hoc を選択します。
>
>     :   -   Choose App Store で入手 if you want to create Distribution
>             provisioning profile for Release build.
>
> </div>

4.  対象の App ID を選択して、Continue ボタンをクリックします。
5.  このプロファイルに紐付けする証明書を選択して、Continue
    ボタンをクリックします。
6.  先ほど登録した開発用の端末を選択して、Continue
    ボタンをクリックします。
7.  プロビジョニング プロファイルの名前を入力して、Generate
    ボタンをクリックします。
8.  開発用 プロビジョニング
    プロファイルの準備が完了しました。プロファイルをダウンロードします。後ほど、Monaca
    上で、iOS アプリをビルドするときに、このファイルを使用します。

<div class="admonition note">

配布用 プロビジョニング プロファイルの作成も、ほぼ同様の手順で行えます。

</div>

ステップ 3 : アプリのビルド
---------------------------

1.  Monaca クラウド IDE のメニューから、
    ビルド --&gt; iOS アプリのビルド を選択します。
2.  目的に応じたビルドの種類を選択して、ビルドを開始する
    ボタンをクリックします。

> ![](images/build_ios/7.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  ビルドが完了するまで、しばらく待ちます。ビルドが成功した場合には、次のような画面が表示されます。ビルドの完了後、ビルド済みアプリをインストールまたはダウンロードできます。

> ![](images/build_ios/11.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >

