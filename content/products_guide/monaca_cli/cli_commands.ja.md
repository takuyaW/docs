---
title: Monaca CLI コマンド
weight: 20
aliases: /en/monaca_cli/cli_commands
---

| コマンド |	説明 |
|---------|----------------|
| [monaca login](#monaca-login) |	Monaca へのサインインします。|
| [monaca logout](#monaca-logout) |	Monaca からサインアウトします。|
| [monaca signup](#monaca-signup) |	Monaca のアカウント登録を行います。|
| [monaca create](#monaca-create) |	テンプレートを使用して、ローカルに、Monaca プロジェクトを新規作成します。|
| [monaca clone](#monaca-clone) | Monaca クラウドから、プロジェクトをクローン ( clone ) します。|
| [monaca import](#monaca-import) |	Monaca クラウドから、プロジェクトをインポートします。|
| [monaca download](#monaca-download) |	Monaca クラウドから、プロジェクトをダウンロードします。|
| [monaca upload](#monaca-upload) |	Monaca クラウドへ、プロジェクトをアップロードします。|
| [monaca remote build](#monaca-remote-build) |	Monaca クラウド上で、プロジェクトをリモートビルドします。|
| [monaca preview](#monaca-preview) | ローカル上で Web サーバーを起動させます。|
| [monaca demo](#monaca-demo) |	ブラウザ上でiOSとAndroid用のプレビューを行います。|
| [monaca debug](#monaca-debug) | Monaca デバッガー上で、プロジェクトを実行します。|
| [monaca transpile](#monaca-transpile) | ソースコードをコード変換 ( トランスパイル/Transpile ) します。| 
| [monaca config](#monaca-config) |	Monaca CLIの設定内容を管理できます。| 
| [monaca reconfigure](#monaca-reconfigure) | 設定ファイルを再作成します。|
| [monaca plugin](#monaca-plugin) |	Cordova プラグインの管理 |
| [monaca docs](#monaca-docs) |	Monaca CLI, Onsen UI, チュートリアルを表示します。|

monaca login
------------

Monaca クラウドにサインインします。Monaca
アカウント登録時のユーザー名とパスワードを入力します。

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

monaca logout
-------------

Monaca クラウドからサインアウトして、保持していたログイントークン (
login token ) を削除します。

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

monaca signup
-------------

Monaca Cloud にサインアップします。
ユーザーの資格情報を要求する画面が表示されます。

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

monaca create
-------------

指定したパスのテンプレートから新しいローカル Monaca
プロジェクトを作成します。 Monaca
クラウドが提供しているテンプレートの中から、使用するテンプレートを選択します。
指定された保存場所に、選択されたテンプレートが置かれます。

{{<highlight bash>}}
$ monaca create [options]
{{</highlight>}}

**オプション**

-   `path`: プロジェクトファイルの保存先
- `--url`: Monaca テンプレート zip ファイルの URL
    
**【具体例】**

Monaca CLI を使用して、Monaca クラウドへログインする例を、次に示します。

{{<highlight bash>}}
$ monaca create MyProject/Demo
$ monaca create MyProject/Demo --url http://github.com/me/myproject/archive/master.zip
{{</highlight>}}

monaca clone
------------

Monaca クラウド上に置かれているプロジェクトを、ローカルへクローン (
Clone ) します。Monaca
クラウド上に置かれているプロジェクトの一覧が表示されます。プロジェクトを選択し、次に、保存先を指定します。

{{<note>}}
    Monaca クラウドからローカル PC にプロジェクトをクローンする場合には、クローンしたプロジェクトに関する「 クラウド同期情報 」 が作成 ・ 保持されます。この情報が作成 ・ 保持されている場合、プロジェクトをローカルで修正した後、Monaca クラウドにアップロード (  {{<link href="#monaca-upload" title="monaca upload">}} を使用 ) したときには、同一プロジェクト内の古いファイルが、上書きされます。
{{</note>}}

{{<highlight bash>}}
$ monaca clone
{{</highlight>}}

**【具体例】**

次の例では、Monaca クラウド上のプロジェクト 「 `Memo Application` 」を、ローカルの "CloneMemoProject" フォルダーへクローンしています。

{{<figure src="/images/monaca_cli/manual/cli_commands/clone.png" width="600">}}

monaca import
-------------

Monaca クラウド上に置かれているプロジェクトをインポート ( Import )
します。Monaca
クラウド上に置かれているプロジェクトの一覧が表示されます。プロジェクトを選択し、次に、保存先を指定します。

{{<note>}}
    Monaca クラウドからローカル PC にプロジェクトをインポートする場合には、インポートしたプロジェクトに関する 「 クラウド同期情報 」 は作成されません。この情報が作成されない場合、プロジェクトをローカルで修正した後、Monaca クラウドにアップロード ( {{<link href="#monaca-upload" title="monaca upload">}} を使用 ) したときには、アップロードしたプロジェクトは、新規のプロジェクトとして、取り扱われます。
{{</note>}}

{{<highlight bash>}}
$ monaca import
{{</highlight>}}

**【具体例】**

次の例では、Monaca クラウド上のプロジェクト 「 `Memo Application` 」を、ローカルの `ImportedMemoApplication` フォルダーへインポートしています。

{{<figure src="/images/monaca_cli/manual/cli_commands/import.png" width="600">}}

monaca download
---------------

Monaca
クラウド上で同期対象のプロジェクトに対して行った更新・修正箇所をダウンロードします。

{{<note>}}
    このコマンドを実行すると、ローカルのプロジェクトに、変更を反映できます。Monaca クラウド上に存在するプロジェクトと同一のプロジェクトが、ローカルに存在しない場合、このコマンドは使用できません。
{{</note>}}

{{<highlight bash>}}
$ monaca download [options]
{{</highlight>}}

**オプション**

- `--delete`: Monaca クラウド上に存在しないローカルファイルを削除します。
- `--force`: 処理の実行時、ユーザー側に確認しません。
- `--dry-run`: ダウンロード処理をシュミレートします。出力として、ダウンロード対象のファイルを表示します。シュミレートのみで、実際のダウンロードは行われません。
    
**【具体例】**

プロジェクトフォルダーに移動して、次に、さまざまな**オプション**を使用して `monaca download` コマンドを実行し、出力を確認してみましょう。

{{<figure src="/images/monaca_cli/manual/cli_commands/download.png" width="600">}}

monaca upload
-------------

ローカルのプロジェクトを Monaca クラウドへアップロードします (
プロジェクトが置かれたディレクトリーのルートへ移動して、コマンドを実行します
)。ローカルとクラウド間 ( 既存のファイルがクラウド上にあれば )
のファイルは比較され、新規ファイルまたは更新ファイルがあれば、そのファイルのみアップロードされます。アップロード処理は、プロジェクトの種類により異なりますので、その詳細を、次に記します。

1.  アップロード対象のプロジェクトが 「 新規プロジェクト」 または 「
    インポートしたプロジェクト 」 ( 上記コマンド )
    の場合、新規のプロジェクトとして、関連するファイルのすべてが Monaca
    クラウドへアップロードされます。
2.  アップロード対象のプロジェクトが 「 クローンしたプロジェクト 」 (
    上記コマンド ) の場合、Monaca
    クラウド上に置かれている、クローン元のプロジェクトが上書きされます (
    新規ファイルまたは更新ファイルのみ、アップロードされます )。

{{<note>}}
    React.js プロジェクトと Angular2 プロジェクトに関しては、<code>monaca upload</code> コマンドの実行時、アップロード処理が始まる前に、プロジェクトがコード変換 ( トランスパイル/Transpile ) されます。
{{</note>}}

{{<highlight bash>}}
$ monaca upload [options]
{{</highlight>}}

**オプション**

- `--delete`: ローカルに存在しないファイルが、Monaca クラウド上に存在する場合、クラウド上のこれらのファイルを削除します。
- `--force`: 処理の実行時、ユーザー側に確認しません。
- `--dry-run`: アップロード処理をシュミレートします。出力として、アップロード対象のファイルを表示します。シュミレートのみで、実際のアップロードは行われません。
    
**【具体例】**

プロジェクトフォルダーへ移動後、さまざまな オプション を組み合わせて、`monaca upload` コマンドを実行し、出力を確認してみましょう。

{{<figure src="/images/monaca_cli/manual/cli_commands/upload.png" width="600">}}

monaca remote build
-------------------

Monaca クラウド上でプロジェクトをビルドします。Monaca
クラウド上に、対象のプロジェクトが存在しない場合、ビルドを開始する前に、対象のプロジェクトが自動的にアップロードされます。一方、Monaca
クラウド上に、対象のプロジェクトがすでに存在する場合には、ローカルで行った更新・修正は、ビルドを開始する前に、対象のプロジェクトに反映
( アップロード ) されます。

次の点に関する詳細は、[ビルド](/en/products_guide/monaca_ide/build) をご確認ください。

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
- `--browser`: ブラウザー上で [ ビルド設定 ] 画面を開きます ( 下のスクリーンショットを参照のこと )。

**【具体例】**

プロジェクトの保存先フォルダーへ移動し、さまざまなオプションを組み合わせて、このコマンドを実行してみましょう。

{{<highlight bash>}}
$ monaca remote build ios
$ monaca remote build ios --build-type=debug
$ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
$ monaca remote build --browser
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/build_window.png">}}

monaca preview
--------------

ローカル上で Web サーバーを起動後、ブラウザー上でアプリを起動させます (
`www` 下のアセットがブラウザー上で使用できる状態になります
)。このコマンドを実行すると、ファイルシステム上のファイルを監視し、ファイルが変更された場合には、ブラウザー上にも即反映させます。

{{<note>}}
React.js プロジェクトと Angular2
プロジェクトに関しては、<code>monaca preview</code>
コマンドの実行時、プレビュー画面の起動前に、メモリー上でプロジェクトがコード変換されます。また、プレビュー画面を起動させた状態で、プロジェクトファイルを修正したときにも、コード変換処理が行われ、修正されたファイルの内容がプレビュー画面上に反映されます。
{{</note>}}

{{<highlight bash>}}
$ monaca preview [options]
{{</highlight>}}

**オプション**:

- `--port` または `-p`: HTTP の待ち受けポート番号 ( デフォルトは、`8000` )
- `--no-open`: ローカル上で Web サーバーを起動させます ( ブラウザーは起動させません )。

**【具体例】**

プロジェクトフォルダーへ移動して、`monaca preview` コマンドを実行します。実行後、ブラウザーが起動して、プロジェクトが実行されます。

{{<figure src="/images/monaca_cli/manual/cli_commands/preview.png" width="600">}}
{{<figure src="/images/monaca_cli/manual/cli_commands/preview_window.png" width="600" title="プレビュー用のウィンドウ">}}

{{<note>}}
    <code>monaca preview</code> の処理を停止する場合には、<code>Ctrl+c</code> を押します。
{{</note>}}

monaca demo
-----------

`www` 下のアセットを Android と iOS へ同時に提供するローカル Web
サーバーを開始します。ファイルシステムの変更が監視され、ファイルが変更された場合には、ブラウザー上にも即反映されます。

{{<highlight bash>}}
$ monaca demo [options]
{{</highlight>}}

**オプション**

- `--port` または `-p`: HTTP の待ち受けポート番号 ( デフォルトは、`8000` )
    
**【具体例】**

プロジェクトフォルダーへ移動して、`monaca demo` コマンドを実行します。実行後、ブラウザーが起動して、プロジェクトが実行されます。

{{<highlight bash>}}
$ monaca demo
$ monaca demo -p 8001
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/monaca_demo.png">}}

monaca debug
------------

端末上でアプリをデバッグするためのコマンドです。ローカルで行った、ファイルへの変更は、デバッガー上にも即反映されます。このコマンドを実行すると、Web
サーバーが起動され、Monaca
デバッガーからの接続を待ち受けます。また、同時に、対象のローカルネットワーク上に接続されているデバッガーに対して、接続するか確認するメッセージが送信されます。

{{<note>}}
React.js プロジェクトと Angular2 プロジェクトに関しては、<code>monaca debug</code>
コマンドの実行時、Monaca
デバッガーへプロジェクトファイルが送信される前に、プロジェクトがコード変換
( トランスパイル/Transpile )
されます。また、デバッガーを実行している状態で、プロジェクトファイルを修正したときにも、コード変換処理が行われ、修正されたファイルの内容がデバッガー上に反映されます。
{{</note>}}

{{<highlight bash>}}
$ monaca debug [options]
{{</highlight>}}

**オプション**

- `paths`: ディレクトリー ( 現在開いているディレクトリーの場合には、省略可 )
- `--port`: HTTP の待ち受けポート番号 ( デフォルトは、8001 )

**【具体例】**

プロジェクトフォルダーへ移動して、`monaca debug` コマンドを実行します。実行後、Monaca デバッガーの *ローカルプロジェクト* 下に対象のプロジェクトが表示されていることを確認し、プロジェクトをタップして実行してみましょう。次に、プロジェクトに変更を加え、保存して、プロジェクトに変更点が即反映されることを確認してみましょう。

{{<highlight bash>}}
$ cd MyProjectFolder/ImportRssProject
$ monaca debug
{{</highlight>}}

このコマンドの実行時、次のようなダイアログ ( 左 ) または通知 ( 右 ) が表示されます。ダイアログには、ペアリングを行うか確認するメッセージが表示されます。また、通知には、ネットワーク接続の状態が表示されます。なにか問題がある場合には、[Monaca デバッガーとのペアリングが失敗する場合](/ja/products_guide/debugger/troubleshooting/#monaca-デバッガーとのペアリングが失敗する場合) をご確認ください。

{{<multi_figures title="接続確認用ダイアログ & ネットワーク接続完了の通知">}}
{{<img src="/images/monaca_cli/manual/cli_commands/1.png" width="300">}}
{{<img src="/images/monaca_cli/manual/cli_commands/2.png" width="300">}}
{{</multi_figures>}}

{{<note>}}
    <code>monaca debug</code> の処理を停止する場合には、<code>Ctrl+c</code> を押します。
{{</note>}}
    
monaca transpile
----------------

プロジェクトをコード変換 ( トランスパイル/Transpile ) します。コード変換可能なプロジェクトには、たとえば、React.js プロジェクト、Angular2 プロジェクトなどがあります。なお、コード変換可能なプロジェクトに関しては、各種コマンド
( `monaca upload`、 `monaca preview`、 `monaca debug`、 `monaca remote build` ) の実行時に、自動でコード変換が行われます。

{{<highlight bash>}}
$ monaca transpile [options]
{{</highlight>}}

**オプション**

-   `--generate-config`: コード変換用の設定ファイルが存在しない場合、これらのファイルを作成します。
-   `--install-dependencies`: コード変換時に必要となる依存関係をインストールします。
    
**【具体例】**

対象のプロジェクトフォルダーへ移動して、`monaca transpile` コマンドを実行します ( コード変換が可能なプロジェクトであること )。実行後、コード変換が実行されます。

{{<highlight bash>}}
$ monaca transpile

Running Transpiler...
Build completed in 71.835s

....
{{</highlight>}}

monaca config
-------------

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

monaca reconfigure
------------------

設定ファイルを復旧 ( 再作成 )
します。オプションを指定しない場合、該当するファイルのすべてを復旧します。該当するファイルに関しては、下の
「 オプション 」 欄をご確認ください。

{{<highlight bash>}}
$ monaca reconfigure [options]
{{</highlight>}}

**オプション**:

- `--transpile`: コード変換用の設定ファイルを再作成/復旧します ( webpack.dev.config ファイルと webpack.prod.config ファイルが対象 )。
- `--dependencies`: 依存関係のあるパッケージをインストールします。
- `--components`: `components` フォルダーを再作成/復旧します。

**【具体例】**

対象のプロジェクトフォルダーへ移動し、**オプション**を組み合わせて、`monaca reconfigure` コマンドを実行してみましょう ( 対象のプロジェクトは、コード変換が可能なプロジェクトであること )。

{{<highlight bash>}}
$ monaca reconfigure
$ monaca reconfigure --transpile --components
{{</highlight>}}

monaca plugin
-------------

プロジェクトで使用するプラグインを管理します。プラグインの新規追加、ならびに、既存プラグインの一覧化と削除を行えます。

{{<highlight bash>}}
$ monaca plugin [options]
{{</highlight>}}

**オプション**

- `add <plugin>`: プラグインを追加します。
- `rm <plugin>`: プラグインを削除します。
- `ls または list`: インストール済みのプラグインを一覧化します。
- `search <query>`: プラグイン ディレクトリーを検索します。

**【具体例】**

プロジェクトフォルダーに移動して、次のコマンドを実行します。

{{<highlight bash>}}
$ monaca plugin add org.apache.cordova.camera
$ monaca plugin rm org.apache.cordova.camera
$ monaca plugin search keyboard
$ monaca plugin ls
{{</highlight>}}

monaca docs
-----------

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
