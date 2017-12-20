---
title: iOS 向け Monaca デバッガー
weight: 20
---

{{<figure src="/images/debugger/manual/installation/debugger_ios/1.png" title="iOS 向け Monaca デバッガー" width="300">}}  

{{<note>}}
Monacaバックエンドプラグインは、Monaca
Debugger（ストアバージョン）とカスタム版Monaca
Debuggerの両方ともに含まれていません。
{{</note>}}

{{<note>}}
    <ol>Cordova 5.2 より前のバージョンを実装したプロジェクトを、Monaca デバッガー 5 系上で実行する場合、不具合が生じることがあります。修復方法を次に記します。
        <li>プロジェクトに実装されている<a href="/ja/products_guide/monaca_ide/dependencies/cordova_plugin/#changing-cordova-version">Cordova のバージョンを更新</a></li>
        <li><a href="#custom-debugger-ios">カスタムビルド版 Monaca デバッガー</a> を使用する ( 旧バージョンの Cordova に対応するため )</li>
    </ol>
{{</note>}}

<table class="small">
    <tr>
        <th width="25%"></th>
        <th>ストア版 Monaca デバッガー</th>
        <th>カスタムビルド版Monacaデバッガー</th>
    </tr>
    <tr>
        <td>説明</td>
        <td>ストア版 Monaca デバッガー</td>
        <td>Monaca クラウド IDE にて、ビルドして作成する Monaca デバッガー</td>
    </tr>
    <tr>
        <td>インストール方法</td>
        <td>
            <a href="https://itunes.apple.com/jp/app/monaca/id550941371?mt=8">App Store</a>
        </td>
        <td><a href="#カスタムビルド版-monaca-デバッガーのビルド方法">カスタムビルド版 Monaca デバッガーのビルドとインストール</a> を参照のこと</td>
    </tr>
        <tr>
        <td><a href="#cordova-ios">Cordova プラグイン</a></td>
        <td>基本 Cordova プラグインおよび複数のサードパーティー製 Cordova プラグインがあらかじめ実装されています。</td>
        <td>基本 Cordova プラグインやサードパーティー製 プラグインに加えて、ユーザー自作の プラグインなどを組み込むことができます。</td>
    </tr>
    <tr>
        <td>App ID (<code>iOS:CFBundleIdentifier</code>)</td>
        <td><code>mobi.monaca.debugger</code</td>
        <td>設定画面にてユーザー側で設定</td>
    </tr>
        <tr>
        <td>アプリのリリース番号 ( 外部向け /<code>iOS:CFBundleShortVersionString</code>)</td>
        <td>固定 ( 現在は <code>6.0.0</code>)</td>
        <td>ユーザー側で設定</td>
    </tr>
    <tr>
        <td>アプリのビルド番号 ( 内部向け / <code>iOS:CFBundleVersion</code>)</td>
        <td>固定 ( 現在は <code>6.0.0</code>)</td>
        <td>ユーザー側で設定</td>
    </tr>
    <tr>
        <td><a href="#usb-ios">USB デバッグ</a></td>
        <td>不可</td>
        <td>可 ( Safari の Web インスペクタ )</td>
    </tr>
    <tr>
        <td><a href="#localkit-ios">Localkit のインスぺクタ機能</a></td>
        <td>不可</td>
        <td>可</td>
    </tr>
    <tr>
        <td><a href="#network-ios">ネットワーク インストール</a></td>
        <td>不可</td>
        <td>可</td>
    </tr>
</table>

## Cordova プラグイン

Monaca デバッガーには、「 基本 Cordova プラグイン 」 および 「
サードパーティー製 Cordova プラグイン 」
が、あらかじめ実装されています。

基本 Cordova プラグインとは、バッテリー情報の取得 API、カメラ
API、住所録の取得 API、端末情報の取得 API
などを指します。詳細は、[基本 Cordova プラグイン ( Cordova のコア プラグイン )](/ja/reference/cordova_6.5) をご確認ください。

また、DatePicker、BarcodeScanner など、サードパーティー製 ( 第三者提供 )
の Cordova プラグインも、Monaca に実装されています。詳細は、
[サードパーティー製 Cordova プラグイン](/ja/reference/third_party_phonegap) をご確認ください。

これ以外の第三者提供 ( 「 外部の Cordova プラグイン 」 )
または自作のプラグイン ( 「[ユーザー Cordova プラグイン]({{<ref "custom_cordova_plugin.ja.md">}})」 )
をプロジェクトに追加することもできます。ストア版の Monaca
デバッガーには、これらのプラグインはデフォルトでは実装されていないため、このデバッガー上でアプリをそのまま実行しても、正しく動作しません。そこで、ストア版のデバッガーの代わりに、カスタムビルド版の
Monaca デバッガーを使用します。カスタムビルド版も、ストア版も、どちらも
Monaca デバッガーですが、カスタムビルド版のデバッガーは、Monaca クラウド
IDE 上で 「 ビルド 」 して、端末にインストールします ( Monaca
デバッガーは、アプリです )。詳細は、[カスタムビルド版 Monaca デバッガーのビルドとインストール](#custom-debugger-android)
をご確認ください。

## USB デバッグ

iOS 向けの Monaca デバッガーでは、USB デバッグをサポートしており、
Safari
ブラウザーを使用したリモートデバッグが行えます。リモートデバッグで行える主な処理は、次のとおりです。

-   Console を使用したデバッグ : Console
    を使用して、各種メッセージを出力できます。
-   DOM の解析 : DOM
    の構造の確認と修正を行えます。また、リアルタイムで、更新を反映できます。
-   JavaScript のデバッグ : JavaScript
    パフォーマンスのプロファイリング、分析ポイント ( ブレークポイント )
    のセット、実行処理の制御を行います。

詳細は、[iOS アプリのデバッグ方法 ( Monaca デバッガーと USB デバッグを使用 )]({{<ref "debug.ja.md#usb-debugging-ios">}})
をご確認ください。

## Localkit のインスぺクタ機能

Windows と Mac OS の両方で、このインスペクタ機能を使用できます。

## ネットワーク インストール

iOS 向けの Monaca デバッガーでは、デバッガー経由で、ビルド済みのアプリ (
デバッグビルド版のみ ) をインストールできます。詳細は、
[ネットワーク インストール ( [ インスト ] の解説  )]({{<ref "features.ja.md#debugger-project-options">}})
機能を、ご確認ください。

{{<note>}}
App Store から入手した iOS 向けの Monaca
デバッガーでは、この機能は使用できません。
{{</note>}}

## カスタムビルド版 Monaca デバッガーのビルド方法

### 事前準備

必要なアイテムを、次に記します。

-   有効な秘密鍵
-   開発用証明書
-   開発用 プロビジョニング プロファイル

カスタム版デバッガーのビルド前に、上記のアイテムの準備と必要な設定を行います。詳細は、[iOS アプリのビルド]({{<ref "build_ios.ja.md">}}) ( 参照先のステップ 1 と 2 ) をご確認ください。完了後、次の手順に従い、ビルドを行います。

### アプリのビルド

1.  Monaca クラウド IDE メニューから、
    {{<menu menu1="デバッグ" menu2="デバッガーの説明とインストール">}} を選択します。
2.  {{<menu menu1="iOS 向けデバッガー インストール" menu2="ビルドしてインストール">}}  を選択します。

    {{<img src="/images/debugger/manual/installation/debugger_ios/2.png" width="500">}}  

3.  開発用 プロビジョニング プロファイルをアップロードします。 {{<guilabel name="次へ">}}
    ボタンをクリックします。
4.  ビルドが完了するまでには、しばらくかかります。ビルドが完了すると、次の画面が表示されます。ビルドしたアプリは、iTune
    を使用して、端末にインストールするか、または、ファイルを PC
    へダウンロードすることができます。

    {{<img src="/images/debugger/manual/installation/debugger_ios/3.png" width="500">}}  

5.  デバッガーを端末へインストールした後、Monaca
    アカウントを使用して、デバッガーにログインします。次に、IDE
    の画面に戻り、`Monaca デバッガーをインストールして、ログインしました。`
    にチェックを入れ、{{<guilabel name="次へ">}} をクリックします。
6.  Monaca クラウド IDE
    とデバッガー間が接続されます。接続後、{{<guilabel name="実機デバッグ">}}
    をクリックすると、デバッガー上でアプリが同期・実行されます。

    {{<img src="/images/debugger/manual/installation/debugger_ios/4.png" width="500">}}  

7.  デバッガー上でアプリが実行されていることを確認します。この状態で、アプリの検証を行えます。また、IDE
    に一度戻り、アプリを修正・保存してみましょう。修正箇所は、保存後、直ちにデバッガー側にも反映されます。

    {{<img src="/images/debugger/manual/installation/debugger_ios/5.png" width="500">}}  

参考ページ

- [エミュレーター上へのデバッガーのインストール]({{<ref "debugger_emulator.ja.md">}})
- [Android 向けの Monaca デバッガー]({{<ref "debugger_android.ja.md">}})
- [Chrome 向け Monaca デバッガー]({{<ref "debugger_chrome.ja.md">}})
- [機能の概要]({{<ref "features.ja.md">}})
- [使用例]({{<ref "debug.ja.md">}})