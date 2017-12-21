---
title: 公式ストア経由以外での配布
weight: 40
---

iOS アプリの場合
----------------

App Store を経由せずに、アプリの配布を行う場合があります。次のような、2
つのシナリオが考えられます。

1.  検証目的の場合 :
    アプリのリリース前には、さまざまな検証を行います。このため、複数のテストユーザーに、App
    Store
    経由以外の方法でアプリを配布できる方が、都合がよい場合があります。
2.  社内 ( In-house ) での使用を前提にしたアプリの場合 :
    企業/組織内での使用目的で作成されたアプリの場合、App Store
    経由以外の方法でアプリを配布できる方が、都合がよい場合があります。

{{<note>}}
    社内だけの配布でも、{{<link href="https://developer.apple.com/programs/ios/enterprise/" title="iOS Developer Enterprise Program">}} アカウントに登録する必要があります。
{{</note>}}

iOS Developer Proram と iOS Developer Enterprise Program
の比較表を、次に記します。

  | Apple Developer Program | Apple Developer Enterprise Program
-----------------------|-------------------------|----------------------------------------
ベータ版リリースの OS への配布 | 可 | 可
Ad Hoc 配布 | 可 | 可
App Store での配布 | 可 | 不可
社内専用の配布 | 不可 | 可
TestFlight Beta Testing ( Beta 版アプリの検証アプリ ) | 可 | 不可
チームの管理 | 不可 | 可
アプリ解析 | 可 | 不可

各プログラムの比較に関しては、[こちら](https://developer.apple.com/support/compare-memberships/)
をご確認ください。

プレリリース ( pre-release ) 版アプリの配布方法 ( 検証目的 ) は、2
通りあります。

-   iTunes Connect を使用 : iOS Developer Program
    アカウントの登録およびアプリの審査 ( Apple Review )
    が、事前に必要です。
-   Ad Hoc 配布 : iOS Developer Program または iOS Developer Enterprise
    Program アカウントが必要です。アプリの審査 ( Apple Review )
    は、必要ありません。

社内 ( In-house ) 配布は、限定的 ( 社員・スタッフ向け ) な、iOS
アプリの配布時に使用されます。この配布形式を使用すれば、業務用のすべての端末に、アプリを配布できます。検証目的で、社外の関係者に配布する場合、または、配布対象の端末を限定する場合には、Ad Hoc 形式で配布します。

Ad Hoc 配布では、Ad Hoc 配布用 プロビジョニング プロファイル
を使用して、アプリの配布を行います。登録された端末が対象で、`100`
台まで配布できます。

アプリのインストール方法に関しては、いずれの配布形式でも同じです。プロビジョニング
プロファイルはそれぞれ異なります。

App Store 経由以外でアプリを入手した場合、次のいずれかの方法でインストールできます。

### Apple Configurator 2 を使用してインストールする（ Mac のみ ）

1.  App Store から `Apple Configurator 2` をインストールします。
2.  端末と PC を接続します。
3.  `Apple Configurator 2` を開き、端末を選択します。
    端末が表示されない場合は、端末が Mac
    に正常に接続されていることを確認してください。

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/5.png">}}

4.  {{<guilabel name="追加">}} ボタンをクリックし、`App` を選択します。

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/6.png">}}

5.  {{<guilabel name="自分の Mac から選択">}} ボタンを選択し、`.ipa` ファイルを参照すると端末ににアプリがインストールされます。

### Xcode を使用したインストール方法

次のように、Xcode 経由で、iOS アプリ ( `.ipa` ファイル )
をインストールできます。

1.  端末と PC を接続します。
2.  Xcode を開き、{{<menu menu1="Window" menu2="Devices">}} を選択します。
3.  Devices 画面が表示されます。アプリをインストールする端末を選択します。
4.  右下の Installed Apps に、 `.ipa` ファイルをドラッグ &
    ドロップします。

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/1.png">}}

### iTunes を使用したインストール方法

{{<note>}}
iTunes 12.7 for Mac では、アプリに大きな変更が行われました。
音楽、映画、テレビ番組、オーディオブック、ポッドキャストの販売に焦点を当てるように
iTunes を再設計し、iPhone や iPad 用のアプリを購入するための App Store
は廃止されました。そのため、iTunes を使用してiOS アプリ ( <code>.ipa</code> ファイル) をインストールすることはできません。
{{</note>}}

1.  デバッグビルドまたは Ad Hoc ビルドで、アプリをビルドします。iOS
    のビルド手順に関しては、 [iOS アプリのビルド]({{<ref "build_ios.ja.md">}}) をご確認ください。
2.  ビルド完了後、 `.ipa` ファイルをダウンロードします。
3.  iTunes を開き、`Apps` を選択します。
4.  ダウンロードした `.ipa` ファイルを、App 上に、ドラッグ &
    ドロップします。
5.  端末と iTunes を接続して、ホーム画面上に、アプリの一覧を表示します。
6.  対象アプリの {{<guilabel name="インストール">}} ボタンをクリックして、次に、{{<guilabel name="同期">}}
    ボタンをクリックします。次に、例を示します。

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/4.png">}}

### OTA 配布形式でのインストール方法

OTA ( Over-The-Air/ワイヤレス通信 ) 配布形式であれば、HTTPS
経由で、ビルド済み ( Ad Hoc ビルド ) アプリをインストールできます。

1.  デバッグビルドまたは Ad Hoc ビルドで、アプリをビルドします。iOS
    のビルド手順に関しては、 [iOS アプリのビルド]({{<ref "build_ios.ja.md">}}) をご確認ください。
2.  ビルド完了後、 `.ipa` ファイルをダウンロードします。
3.  ダウンロード元となるサイトに、 `.ipa` ファイルをアップロードします。
4.  ビルド済みアプリ用の `.plist` ファイルを作成します。 `.plist`
    の内容を、次に記します。

    {{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>https://www.anysite.com/application/your_app.ipa</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>com.example.helloworld</string>
                <key>bundle-version</key>
                <string>1.0.0</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>HELLO</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
    {{</highlight>}}

    {{<note>}}
        <code>.plist</code> ファイル作成時の注意点を、次に記します。
        <ul>
            <li><code>.plist</code> ファイルは、HTTPS プロトコル経由でアクセスできること。</li>
            <li>App ID を使用して、bundle-identifier を更新すること。</li>
            <li><code>.ipa</code> ファイルへのパスを、正しく指定すること。</li>
        </ul>
    {{</note>}}

5.  ダウンロード元となるサイトに、 `.plist`
    ファイルをアップロードします。HTTPS
    プロトコル経由で、このファイルにアクセスできることを確認します。
6.  アップロードした `.plist` ファイルへのリンクを組み込んだ Web
    ページを作成します。次の例のように、 `itms-services://`
    プロトコルも使用します。

    {{<highlight html>}}
<a href="itms-services://?action=download-manifest&amp;url=https://www.anysite.com/application/your_app.plist">
    Download
</a>
    {{</highlight>}}

7.  接続準備の完了後、端末上からリンク先にアクセスすると、次のように、アプリのインストールが開始されます。

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/2.png" width="300">}}

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/3.png" width="300">}}

Android アプリの場合
--------------------

Google Play ストア、Amazon AppStore
などの公式なストアを経由せずに、アプリの配布を行う場合があります。次のような、2
つのシナリオが考えられます。

1.  検証目的 :
    アプリのリリース前には、さまざまな検証を行います。このため、複数のテストユーザーに、App
    Store
    経由以外の方法でアプリを配布できる方が、都合がよい場合があります。
2.  プライベートでの使用 :
    不特定多数への配布を目的とせず、プライベートでアプリを使用します。

### ADB コマンドを使用したインストール方法

ADB ( Android Debug Bridge/Android デバッグ ブリッジ ) は、コマンド
ライン ツールです。このツールを使用して、端末・PC
間で、各種処理を行えます。

事前準備:

-   Android SDK を、PC 上にインストールします。
-   Android SDK のインストール後、システム環境変数の設定で、ADB
    へのパスを追加します。
-   USB
    デバッグを有効化します。次に、セキュリティー設定を変更して、Google
    Play ストアではなく、指定するソースから、アプリ ( 提供元不明のアプリ
    ) をインストールできるようにします。

ADB
コマンドを使用して、ビルド済みアプリをインストールする方法を、次に記します。

1.  デバックビルド形式で、アプリをビルドします。Android
    のビルド手順に関しては、 [Android アプリのビルド]({{<ref "build_android.ja.md">}}) をご確認ください。
2.  ビルド完了後、 `.apk` ファイルをダウンロードします。
3.  USB を使用して、PC と端末間を接続します。
4.  PC 上で、次のコマンドを実行します。 `.apk`
    ファイルへのパスは、正しく入力します。

    {{<highlight bash>}}adb install foo.apk{{</highlight>}}

### 直リンクを使用したインストール方法

こちらは、 `.apk` ファイルへの直リンクを使用したインストール方法です。

1.  デバックビルド形式で、アプリをビルドします。Android
    のビルド手順に関しては、 [Android アプリのビルド]({{<ref "build_android.ja.md">}}) をご確認ください。
2.  ビルド完了後、 `.apk` ファイルをダウンロードします。
3.  ビルド後にダウンロードしたファイルを、ダウンロード元となるサイトにアップロードします。
4.  端末からアップロードしたファイルへのリンクをクリックして、アプリのインストールを開始します。

{{<note>}}
    事前に確認する事項を、次に記します。
    <ul>
        <li>USB デバッグ の有効化</li>
        <li>セキュリティー設定の変更 ( Google Play ストアではなく、指定するソースから、提供元不明のアプリをインストールできること )</li>
    </ul>
{{</note>}}