---
title: Monaca クラウド & リモートビルド API
weight: 10
---

「 Monaca クラウド & リモートビルド API 」 を組み込めば、Cordova アプリのビルド処理を始め、Monaca クラウドが提供する各種 Web サービスを使用することができます ( [Monaca クラウド IDE](/ja/products_guide/monaca_ide) と [Monaca CLI](/ja/products_guide/monaca_cli) で提供しているサービス・機能が、この API 経由で使用できるようになります )。

ここでは、Node.js を使用したプロジェクトを例として、「 Monaca クラウド & リモートビルド API 」 の組み込み方法と使用方法を解説します。

「 Monaca クラウド & リモートビルド API 」 の組み込み方法
---------------------------------------------------------

「 Monaca クラウド & リモートビルド API 」 は、[monaca-lib ( GitHub 上 )](https://github.com/monaca/monaca-lib) のライブラリー内に置かれている
API 群の総称を指します。プロジェクトの中で、この API ( 群 )
を使用する場合、次の手順に従います ( ここでは、Node.js
を使用したプロジェクトを例にします )。

1.  `monaca-lib` をインストールします。

    {{<highlight bash>}}
$ npm install monaca-lib{{</highlight>}}

2.  js ファイル内で、次のようにモジュールを呼び出します。

    {{<highlight javascript>}}
var Monaca = require('monaca-lib').Monaca;{{</highlight>}}

3.  呼び出し後は、次のように、「 Monaca クラウド & リモートビルド API 」
    を使用できます ( js ファイル内 )。

    {{<highlight javascript>}}
var Monaca = require('monaca-lib').Monaca;
var monaca = new Monaca();
monaca.login('some@email.com', 'password').then(
    function() {
        console.log('Succesfully logged in!');
    },
    function(error) {
        console.log('Login failed: ' + error);
    }
);{{</highlight>}}

「 Monaca クラウド & リモートビルド API 」 の使用方法
-----------------------------------------------------

「 Monaca クラウド & リモートビルド API 」
が提供しているサービス・機能の例を、次に記します。

-   Monaca へのサインイン、Monaca からのサインアウト
-   プロジェクトの新規作成
-   プロジェクトのコンパイルとビルド
-   Monaca クラウド側のプロジェクトとの同期
-   プロジェクトのコード変換 ( トランスパイル/Transpile )

機能の詳細 ( 各 API の詳細 ) は、`monaca-lib/src/monaca.js`
ファイル内をご確認ください。
