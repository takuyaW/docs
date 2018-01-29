---
title: iOS アプリのビルド
weight: 10
---

事前準備
--------

事前準備として、次の内容を行います。

-   [Apple Developer Program](https://developer.apple.com/programs/ios/) への登録
-   [ビルドの種類](#ビルドの種類) と要件の確認

### ビルドの種類

Monaca では、デバッグビルド、テストビルド ( Ad Hoc )、リリースビルドの 3
種類の iOS アプリをビルドできます。これらの相違点は、次のとおりです。

<table class="small">
    <tr>
        <th width="20%">ビルドの種類</th>
        <th>説明</th>
        <th width="35%">要件 ( 準備するアイテム )</th>
        <th width="25%">インストール方法</th>
    </tr>
    <tr>
        <td><b>デバッグビルド</b></td>
        <td>開発用の端末にインストールするためのアプリをビルドします。</td>
        <td>
            <ul>
                <li>開発用証明書</li>
                <li>開発用 プロビジョニング プロファイル</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>iTune を使用</li>
                <li><a href="/ja/products_guide/debugger/features/#プロジェクトオプション">ネットワーク インストール</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>Ad Hoc ビルド</b></td>
        <td>限られたグループにインストールするためのアプリをビルドします。</td>
        <td>
            <ul>
                <li>配布用証明書</li>
                <li>配布用 ( Ad Hoc ) プロビジョニング プロファイル</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>iTune を使用</li>
                <li>QR コード</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>リリースビルド</b></td>
        <td>App Store 経由で配布するためのアプリをビルドします。</td>
        <td>
            <ul>
                <li>配布用証明書</li>
                <li>配布用 ( App Store ) プロビジョニング プロファイル</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>App Store で入手</li>
            </ul>
        </td>
    </tr>
</table>

{{<note>}}
Ad Hoc 配布とは、App Store
を経由せずに、アプリを配布するための仕組みです ( 評価配布用 )。Ad Hoc
プロビジョニング
プロファイルを使ってビルドする、評価用アプリは、現在、最大 <b>100 台</b>
まで、Ad Hoc
形式で配布できます。ただし、アプリの配布先は、開発関係者に限定されます。
{{</note>}}

ステップ 1 : Monaca 上での iOS アプリ設定
-----------------------------------------

### iOS アプリの設定

1.  Monaca クラウド IDE のメニューから、 {{<menu menu1="設定" menu2="iOS アプリ設定">}} を選択します。
2.  アプリに関する情報を入力します。

    <table class="small">
        <tr>
            <td width="27%">アプリケーション名</td>
            <td>アプリの名前を入力します。マーケット上などで表示されます。</td>
        </tr>
        <tr>
            <td>App ID</td>
            <td>アプリを識別する一意の ID です。逆ドメイン形式を推奨します ( mobi.monaca.appname など )。英数字とピリオドのみ使用できます ( ピリオドは最低限 1 つ使用 )。各節 ( 各レベルのドメイン ) はピリオドで区切り、各節の先頭には英字を使用します。</td>
        </tr>
        <tr>
            <td>バージョン</td>
            <td>アプリのバージョン番号です。iTune Connect 経由で、アプリをアップロードするとき ( 配布する場合 ) に必要となります。3 つの節を、それぞれドットで区切ります ( 例 : 1.10.2 )。各節の数字には、<code>[0-99]</code> を使用します。</td>
        </tr>
    </table>

    {{<img src="/images/monaca_ide/manual/build/build_ios/1.png">}}

    {{<warning>}}
        Monaca 上でのアプリ設定では、App ID に、アスタリスク (*) は使用できません。使用した場合、ビルドが失敗します。また、この App ID には、iOS Dev Center で登録した/する Explicit App ID と同じものを使用します。詳細は、{{<link href="#app-id-の登録" title="App ID の登録">}} をご確認ください。
    {{</warning>}}

3.  設定後、{{<guilabel name="保存する">}} をクリックします。

{{<note>}}
    現在、iOS の [ App ID ] または Android の [ パッケージ名 ] のいずれかを変更すると、両方とも同じ名前に更新されます。それぞれに別の名を設定する場合には、{{<link href="/ja/faq/application/#app-id-ios-側-と-パッケージ名-android-側-にそれぞれ異なる値を設定するには" title="App ID ( iOS 側 ) と パッケージ名 ( Android 側 ) にそれぞれ異なる値を設定するには？    ">}} をご確認ください。
{{</note>}}

### iOS のビルド設定

1.  Monaca クラウド IDE のメニューから、 {{<menu menu1="設定" menu2="iOS ビルド設定">}} を選択します。

    {{<img src="/images/monaca_ide/manual/build/build_ios/2.png">}}

2.  秘密鍵を作成します。または、既存の秘密鍵がある場合には、インポートもできます。ここでは、新規に秘密鍵を作成します。{{<guilabel name="秘密鍵と CSR の生成">}} ボタンをクリックして、ユーザー名 ( 秘密鍵に付ける名前 ) ・
    メールアドレス ( Apple ID ) ・ 国コードを入力します。

    {{<img src="/images/monaca_ide/manual/build/build_ios/3.png" width="500">}}

    {{<note>}}
        既存の秘密鍵をインポートする場合には、その秘密鍵に関連付けされた証明書も Monaca へアップロードする必要があります。詳細は、 {{<link href="../import_export/#ステップ-2-秘密鍵と証明書の-monaca-へのインポート" title="ステップ 2 : 秘密鍵と証明書の Monaca へのインポート">}} をご確認ください。
    {{</note>}}

3.  秘密鍵の作成後、その秘密鍵に関連付けされた CRS
    ファイルも同時に作成されます。次に、{{<guilabel name="エクスポート">}}
    ボタンをクリックして、この CRS
    ファイルをダウンロードします。このファイルは、後ほど、iOS Dev Center
    で証明書を発行するときに使用します。
4.  [「 証明書の作成 」](#証明書の作成) の内容に従い、iOS Dev Center
    で証明書を作成して、ダウンロードします。
5.  [「 プロビジョニング プロファイルの作成 」](#プロビジョニング-プロファイルの作成)
    の内容に従い、iOS Dev Center でプロビジョニング
    プロファイルを作成して、ダウンロードします。
6.  証明書とそれに対応するプロビジョニング プロファイルを、Monaca
    クラウドへアップロードします。

    {{<img src="/images/monaca_ide/manual/build/build_ios/12.png">}}

    {{<note>}}
        Monoaca のビルド設定上では、証明書とそれに対応するプロビジョニングプロファイルを、複数個、アップロード・保管しておくことができます。
    {{</note>}}

ステップ 2 : iOS Dev Center 上での iOS アプリ設定
-------------------------------------------------

1.  [Apple Developer ページ](https://developer.apple.com/) へ行き、`メンバーセンター ( Account )` をクリックします。
2.  Apple Developer Program に登録した、Apple ID
    とパスワードを使用して、サインインします。このプログラムに未登録の場合には、[こちら](https://developer.apple.com/programs/)
    で登録します。
3.  `Certificates, Identifiers/IDs & Profiles`
    へ行き、次のページを表示します。

    {{<img src="/images/monaca_ide/manual/build/build_ios/4.png">}}

4.  このページ上で行う処理は、次のとおりです。

    -   [証明書の作成](#証明書の作成)
    -   [App ID の登録](#app-id-の登録)
    -   [開発用端末の登録](#開発用端末の登録)
    -   [プロビジョニング-プロファイルの作成](#プロビジョニング-プロファイルの作成)

### 証明書の作成

iOS Dev Center では、2 種類の証明書を発行できます。

-   開発用証明書 : デバッグビルドを行うときに、必要となります。
-   配布用証明書 : リリースビルドまたは Ad Hoc
    ビルドを行うときに、必要となります。

CSR ファイルのダウンロード後 ( [iOS のビルド設定](#ios-のビルド設定) を参照のこと )、iOS
Dev Center で証明書を発行して、ダウンロードします。

開発用証明書の発行とダウンロードを、次の手順で行います。

1.  `Certificates` 項目の `Development` を選択します。
2.  ページの右上に表示された追加ボタン 「{{<guilabel name="+">}} 」 をクリックします (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_ide/manual/build/build_ios/5.png">}}

3.  `iOS App Development` を選択し、 {{<guilabel name="Continue">}} ボタンをクリックします。

    {{<note>}}
        配布用の証明書を発行する場合には、 <code>App Store and Ad Hoc</code> を選択します。
    {{</note>}}

4.  {{<guilabel name="Continue">}} ボタンをクリックし、Monaca クラウド IDE
    からダウンロードした CSR ファイル をアップロードします。次に、
    {{<guilabel name="Generate">}} ボタンをクリックします。
5.  開発用証明書の発行が、これで完了しました。発行された証明書をダウンロードします
    ( 後から、Monaca クラウド IDE にアップロードします )。

{{<note>}}
配布用証明書をインポートする場合も、ほぼ同様の手順です。
{{</note>}}

### App ID の登録

App ID は、開発用と配布用のプロビジョニング
プロファイルの作成時に、主に、使用します。Wildcard App ID ( 複数の
アプリで共通 ) または Explicit App ID ( アプリを識別する、一意の Bundle
ID と一致 ) を作成できます。

App ID の登録を、次の手順で行います。

1.  `Identifiers` 項目の `App IDs` を選択します。
2.  ページの右上に表示された追加ボタン 「 {{<guilabel name="+">}} 」 をクリックします (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_ide/manual/build/build_ios/8.png">}}

3.  App ID は、「 `.` 」 で区切られた、2 つの文字列 ( Prefix と Suffix )
    で構成されています。次の内容を参考にして、App ID
    の情報を入力します。

    - App ID Description : App ID の説明を入力します。「 `@、&、*、'、"` 」 などの特殊文字は使用できません。
    - App ID Prefix : Team ID となります ( デフォルト )。
    - App ID Suffix : アプリを識別するための Bundle ID となります。App ID Suffix には、次の 2 種類があります。

        データ | 説明
        -----|-----------------
        Explicit App ID	| Game Center、In-App Purchase、Data Protection、iCloud などのサービスを、アプリで利用する場合、または、あるアプリ専用のプロビジョニング プロファイルが必要な場合、Explicit App ID を登録します。この場合、アプリの Bundle ID と一致する文字列を、Explicit App ID の Bundle ID 欄に入力します。指定する ID は、Monaca クラウド IDE 上で設定した App ID と同じものである必要があります ( [iOS アプリの設定](#ios-アプリの設定) )
        Wildcard App ID | 複数のアプリのビルドとインストールに、1 つの App ID を使用したい場合、Wildcard App ID を登録します。この場合、最後の文字がアスタリスク ( `*` ) になるように、Bundle ID を入力します。

    - App Services : アプリ上で使用したいサービスを選択します。

4.  {{<guilabel name="Continue">}} をクリックします。App ID の登録内容を確認して、{{<guilabel name="Submit">}}
    をクリックします。ここまでの手順で、iOS Dev Center への App ID
    の登録が完了しました。

### 開発用端末の登録

開発用と配布用のプロビジョニング
プロファイルを作成する前に、開発用の端末を登録する必要があります。

アプリ開発時に使用する端末を、次の手順で登録します。

1.  `Devices` 項目から、登録する端末の種類を選択します。
2.  ページの右上に表示された追加ボタン 「{{<guilabel name="+">}} 」 をクリックします (
    下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_ide/manual/build/build_ios/9.png">}}

3.  端末の情報を入力します。

    - `Name` : 端末を識別するための名前を入力します ( 例 : MyiPhone )
    - `UDID` : 端末固有の識別コードです。UDID は、コンピューターに iOS 端末を接続して確認できます。まず、iTunes を起動して、端末情報を表示させます。端末情報の `シリアル番号` をクリックして、UDID ( `40` 文字 ) を表示させます。次に、UDID を右クリックし、コピーします ( 下のスクリーンショットを参照のこと )。

    {{<img src="/images/monaca_ide/manual/build/build_ios/6.png">}}

4.  入力後、{{<guilabel name="Continue">}} をクリックします。次の画面で入力情報を確認して、
    {{<guilabel name="Register">}} をクリックします。iOS Dev Center
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

1.  `Provisioning Profiles` 項目の `Development` を選択します。
2.  ページの右上に表示された追加ボタン 「 {{<guilabel name="+">}} 」 をクリックします。
3.  `iOS App Development` を選択し、{{<guilabel name="Continue">}} ボタンをクリックします。

    {{<note>}}
        <ul>
            <li>Ad Hoc ビルド用に、配布用 プロビジョニング プロファイルを作成する場合には、<code>Ad Hoc</code> を選択します。</li>
            <li>リリースビルド用に、配布用 プロビジョニング プロファイルを作成する場合には、<code>App Store</code> を選択します。</li>
        </ul>
    {{</note>}}

4.  対象の App ID を選択して、{{<guilabel name="Continue">}} ボタンをクリックします。
5.  このプロファイルに紐付けする証明書を選択して、{{<guilabel name="Continue">}}Continue
    ボタンをクリックします。
6.  先ほど登録した開発用の端末を選択して、{{<guilabel name="Continue">}}
    ボタンをクリックします。
7.  プロビジョニング プロファイルの名前を入力して、{{<guilabel name="Generate">}}
    ボタンをクリックします。
8.  開発用 プロビジョニング
    プロファイルの準備が完了しました。プロファイルをダウンロードします。後ほど、Monaca
    上で、iOS アプリをビルドするときに、このファイルを使用します。

{{<note>}}
配布用 プロビジョニング プロファイルの作成も、ほぼ同様の手順で行えます。
{{</note>}}

ステップ 3 : アプリのビルド
---------------------------

1.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="ビルド" menu2="iOS アプリのビルド">}} を選択します。
2.  目的に応じたビルドの種類を選択して、{{<guilabel name="ビルドを開始する">}}
    ボタンをクリックします。

    {{<img src="/images/monaca_ide/manual/build/build_ios/7.png">}}

3.  ビルドが完了するまで、しばらく待ちます。ビルドが成功した場合には、次のような画面が表示されます。ビルドの完了後、ビルド済みアプリをインストールまたはダウンロードできます。

     {{<img src="/images/monaca_ide/manual/build/build_ios/11.png">}}

参考ページ

- [Android アプリのビルド](../../build_android)
- [Windows アプリのビルド](../../build_winrt)
- [App Store での配布](../../../deploy/appstore)
- [ビルド履歴一覧](../../build_history)

