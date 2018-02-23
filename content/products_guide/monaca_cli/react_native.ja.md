---
title: React Native サポート
---

このページでは、React Native プロジェクトを Monaca CLI で実行する方法について解説します。

## 事前準備


{{<note>}}
    Monaca CLI と React Native のご利用には、{{<link title="Node.js" href="https://nodejs.org/">}} が必要です ( 事前に、PC にインストールされていること )。
{{</note>}}

### 事前準備

Monaca での React Native プロジェクトの利用方法は、次の通りです。

1.  Monaca CLI をインストールします。

    {{<highlight bash>}}$ npm i -g monaca{{</highlight>}}

2.  React Native CLI をインストールします。

    {{<highlight bash>}}$ npm i -g react-native-cli{{</highlight>}}

### プロジェクトの作成とビルド

1.  新規 React Native プロジェクトを作成します。

    {{<highlight bash>}}$ react-native init <project_name>{{</highlight>}}

2.  プロジェクトのディレクトリへの移動します。

    {{<highlight bash>}}$ cd <project_name>{{</highlight>}}

3.  Monacaアカウントでログインします。 React Native プロジェクトで使用できる Monaca コマンドは、 [利用可能な Monaca CLI コマンド](#利用可能な-monaca-cli-コマンド) に記載されています。

    {{<highlight bash>}}$ monaca login{{</highlight>}}

4.  Monaca でリモートビルドを行います。 次のコマンドを実行すると、リモートビルド画面が開き、ビルドを行うことができます。

    {{<highlight bash>}}$ monaca remote build --browser{{</highlight>}}

    {{<figure src="/images/monaca_cli/react_native/4.png" title="リモートビルド画面">}}

5.  ビルドしたプロジェクトをテストする場合は、ビルドしたファイルを端末にインストールして確認します。 プロジェクトをローカルでデバッグする場合は、次の項目を参照してください。

## ローカルデバッグ

以下は、シミュレータを実行するために Xcode と Android SDK が必要になります。

### 事前準備

1.  React Devtools をインストールします。
    
    {{<highlight bash>}}$ npm i -g react-devtools{{</highlight>}}

2.  Xcode and Android SDK をインストールします。

### デバッグ

1.  プロジェクトのディレクトリへの移動します。

    {{<highlight bash>}}$ cd <project_name>{{</highlight>}}

2.  React Devtools を起動します。

    {{<highlight bash>}}$ react-devtools &{{</highlight>}}

    {{<note>}}
        このプロセスはバックグラウンドで実行されます。 デバッグが終了したらプロセスを終了してください。
    {{</note>}}

3.  シミュレーターを起動します。

    {{<highlight bash>}}
$ react-native run-ios
$ react-native run-android{{</highlight>}}

    {{<note>}}
        一度に実行できるシミュレータは、1 つだけです。
    {{</note>}}

## 利用可能な Monaca CLI コマンド

コマンド | 説明
----------|-------------
[monaca login](#monaca-login) | Monaca へのサインインします。
[monaca logout](#monaca-logout) | Monaca からサインアウトします。
[monaca signup](#monaca-signup) | Monaca のアカウント登録を行います。
[monaca remote build](#monaca-remote-build) | Monaca クラウド上で、プロジェクトをリモートビルドします。
[monaca config](#monaca-config) | Monaca CLIの設定内容を管理できます。
[monaca remote config](#monaca-remote-config) | Monaca クラウドのプロジェクト設定を開きます。
[monaca docs](#monaca-docs) | Monaca CLI, Onsen UI, チュートリアルを表示します。
[monaca info](#monaca-info) | Monaca の依存関係に関する情報を表示します。

### monaca login

Monaca クラウドにサインインします。Monaca アカウント登録時のユーザー名とパスワードを入力します。

{{<highlight bash>}}
$ monaca login [options]
{{</highlight>}}

**オプション**

-   `email`: Monaca クラウドへログインするメールアドレス。
    
**【具体例】**

Monaca CLI を使用して、Monaca クラウドへログインする例を、次に示します。

{{<highlight bash>}}
$ monaca login
$ monaca login me@monaca.io
$ echo "mypass" | monaca login me@monaca.io
{{</highlight>}}

### monaca logout

Monaca クラウドからサインアウトして、保持していたログイントークン ( login token ) を削除します。

{{<highlight bash>}}
$ monaca logout
{{</highlight>}}

**【具体例】**

Monaca CLI を使用して、Monaca クラウドからログアウトする例を、次に記します。

{{<highlight bash>}}
$ monaca logout
Signing out from Monaca Cloud...
You have been signed out.
Removed Monaca Debugger pairing information.
{{</highlight>}}

### monaca signup

Monaca Cloud にサインアップします。ユーザーの資格情報を要求する画面が表示されます。

{{<highlight bash>}}
$ monaca signup [options]
{{</highlight>}}

**オプション**

-   `email`: Monaca の登録に使用するメールアドレス

**【具体例】**

コマンドの使用方法を、次に示します。

{{<highlight bash>}}
$ monaca signup
$ monaca signup me@monaca.io
{{</highlight>}}

### monaca config

プロキシおよび API エンドポイントの設定内容を管理できます。

{{<highlight bash>}}
$ monaca config [options]
{{</highlight>}}

**オプション**

- `proxy <url>`: <url> が設定されていない場合は、現在のプロキシサーバーが表示されます。
- `endpoint <url>`: <url> が設定されていない場合は、現在の API エンドポイントが表示されます。
- `--help`: ヘルプを表示します。
- `--reset`: デフォルト値にリセットします。

**【具体例】**

使用方法は、次のとおりです。

{{<highlight bash>}}
$ monaca config --help
$ monaca config proxy
$ monaca config proxy http://my.proxy.com:8080
$ monaca config proxy --reset

$ monaca config endpoint
$ monaca config endpoint my.endpoint.com
$ monaca config endpoint --reset
{{</highlight>}}

### monaca remote build

Monaca クラウド上でプロジェクトをビルドします。Monaca
クラウド上に、対象のプロジェクトが存在しない場合、ビルドを開始する前に、対象のプロジェクトが自動的にアップロードされます。一方、Monaca
クラウド上に、対象のプロジェクトがすでに存在する場合には、ローカルで行った更新・修正は、ビルドを開始する前に、対象のプロジェクトに反映
( アップロード ) されます。

次の点に関する詳細は、[ビルド](/ja/products_guide/monaca_ide/build) をご確認ください。

-   各プラットフォーム向けのビルドの設定方法
-   ビルドの種類
-   各プラットフォーム向けアプリのビルド方法
-   ビルド済みアプリの入手方法・インストール方法

{{<highlight bash>}}
$ monaca remote build <platform> [options]
{{</highlight>}}

**オプション**

-   `platform`: ビルド対象のプラットフォームを指定します。`ios`、`android`、`windows` のいずれかを指定します。
- `--build-type`: ビルドの種類を指定します。指定できるオプションを、次に記します。

    - `debug` ( iOS、Android、Windows 向け) デフォルトオプション
    - `test` ( iOS 向け )
    - `release` ( iOS、Android 向け )

- `--output`: ビルド済みファイルを保存するディレクトリーを指定します ( ファイル名まで含む )。
- `--android_webview`: (Android のみ) Webview のタイプを選択します。`default`、`crosswalk` のいずれかを指定します。
- `--android_arch`: (Android のみ) `--android_webview` を `crosswalk` に指定した場合、こちらは必須オプションになります。値は、`x86`、`arm` のいずれかを指定します。
- `--browser`: ブラウザー上で [ ビルド設定 ] 画面を開きます。

**【具体例】**

プロジェクトの保存先フォルダーへ移動し、さまざまなオプションを組み合わせて、このコマンドを実行してみましょう。

{{<highlight bash>}}
$ monaca remote build ios
$ monaca remote build ios --build-type=debug
$ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
$ monaca remote build --browser
{{</highlight>}}

### monaca remote config

Monaca クラウドのプロジェクト設定を開きます。 設定が完了したら、 monaca download を実行して変更をローカルにダウンロードします。

{{<highlight bash>}}
$ monaca remote config
{{</highlight>}}

**【具体例】**
対象のプロジェクトフォルダーへ移動し、 `monaca remote config` コマンドを実行してみましょう。

{{<highlight bash>}}
$ monaca remote config
$ monaca download
{{</highlight>}}

### monaca docs

Monaca CLI 、Onsen UI 、チュートリアルのドキュメントを表示します。

{{<highlight bash>}}
$ monaca docs [options]
{{</highlight>}}

**オプション**

- `onsen`: ブラウザで Onsen UI ドキュメントを開きます。
- `tutorial`: ブラウザで Onsen UI チュートリアルを開きます。
- `usage`: ブラウザで Monaca CLI ドキュメントを開きます。
    
**【具体例】**

使用方法は、次のとおりです。

{{<highlight bash>}}
$ monaca docs onsen
$ monaca docs tutorial
$ monaca docs usage
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/monaca_docs.png" title="Monaca ドキュメントチュートリアル">}}

### monaca info

Monaca の依存関係、システム、プロジェクトの依存関係、Monaca クラウドへの接続に関する情報を表示します。

{{<highlight bash>}}
$ monaca info
{{</highlight>}}

**【具体例】**

使用方法は、次のとおりです。

{{<highlight bash>}}
$ monaca info
{{</highlight>}}

## ダッシュボードの使い方

{{<note>}}
    現在、Monaca クラウド IDE のダッシュボードから React Native プロジェクトを作成することはできません。 ローカル PC から同期されたプロジェクトのみを開くことができます。
{{</note>}}

すべての React Native プロジェクトには、プロジェクトの名前に React Native アイコンが添付されます。 例として、次のスクリーンショットをご覧ください。

{{<figure src="/images/monaca_cli/react_native/1.png">}}

React Nativeプロジェクトに対し、Monaca ダッシュボードからは、下記の 3 項目を行うことができます。

1.  iOS と Android のビルド設定の構成

    {{<figure src="/images/monaca_cli/react_native/2.png" title="Android ビルド設定 (キーストアとエイリアス)">}}
    {{<figure src="/images/monaca_cli/react_native/3.png" title="iOS ビルド設定 (証明書とプロビジョニングプロファイル)">}}

2.  iOS と Android のビルド

    {{<figure src="/images/monaca_cli/react_native/4.png" title="Android 用ビルド (デバッグ)">}}
    {{<figure src="/images/monaca_cli/react_native/5.png" title="iOS 用ビルド (デバッグ)">}}

3.  ビルド結果の確認

    {{<figure src="/images/monaca_cli/react_native/6.png" title="ビルド履歴一覧">}}

## アップロードの制御

特定のファイルやフォルダを無視/除外して Monaca クラウドにアップロードしたくない場合があります。 この場合、 `.monacaignore` ファイルが自動的に作成され、React Native プロジェクトのルートディレクトリに置かれます。 ファイルを編集して、特定のファイルやフォルダを追加または削除することができます。 `.monacaignore` ファイルのデフォルト設定は次のとおりです。

{{<highlight bash>}}
/node_modules/**
/android/build/**
/ios/build/**
*/.DS_Store
*/.git/**
{{</highlight>}}

