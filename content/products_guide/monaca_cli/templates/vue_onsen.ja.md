Vue 2 & Onsen UI 2 テンプレート入門
===================================

新しい [Vue with Onsen UI
template](https://github.com/OnsenUI/vue-cordova-webpack)
テンプレートは、Monaca CLI
に統合され、モバイルの開発にアプローチするのに最適な方法です。

Onue UI テンプレートを使用して Vue を Monaca CLI
にインポートする方法を解説します。

ステップ 1 : Vue CLI のインストール
-----------------------------------

コマンドプロンプト ( Windows の場合 ) またはターミナル ( Mac の場合 )
を開き、次のコマンドを実行します。

> ``` {.sourceCode .bash}
> npm install -g vue-cli
> ```

ステップ2: テンプレートのインポート
-----------------------------------

1.  次のコマンドを使用して、新規のプロジェクトを作成します。

> ``` {.sourceCode .bash}
> vue init OnsenUI/vue-cordova-webpack projectName
> ```

2.  プロジェクトフォルダーに移動して、次のコマンドを実行します。

> ``` {.sourceCode .bash}
> cd projectName
> npm install
> ```

ステップ 3 : Monaca CLIでの実行
-------------------------------

Monaca CLIで下記のことが可能となります。

-   ローカル上でのプロジェクトの新規作成、Monaca
    クラウド上に保存されたプロジェクトのインポート (
    クラウドからローカルへ ) またはクローン ( clone ) 。
-   お好みのコードエディターを利用してMonaca アプリの開発。
-   アプリのデバッグをMonaca デバッガーやブラウザで行えます。
-   プロジェクトのリモートビルド (
    ローカル上での各種セットアップは必要ありません ) 。

### 要件

Monaca
CLIのインストールをしていない場合は、下記のコマンドを実行してください。

``` {.sourceCode .bash}
npm install -g monaca
```

### テンプレートの実行

このセクションでは、Vueテンプレートを使用してMonaca
CLIを使用する方法を示します。
Monacaの機能を利用するには、以下の手順に沿って試してください。

1.  リリース用にテンプレートをビルドし、www
    フォルダーにファイルを生成します。

> ``` {.sourceCode .bash}
> monaca transpile
> ```

2.  開発モードで実行し、ホットモジュール機能を利用して変更箇所をメモリに読み込みます。

> ``` {.sourceCode .bash}
> monaca preview
> ```
>
> ![](images/vue_onsen/1.png){width="700px"}
>
> または、 `monaca demo` を使用して、ブラウザ上で iOS と Android
> を同時にプレビューすることができます。
>
> ``` {.sourceCode .bash}
> npm run build:watch  // In a different terminal
> monaca demo
> ```
>
> ![](images/vue_onsen/2.png){width="700px"}

3.  実機でのデバッグは、下記のコマンドで実行できます。

> ``` {.sourceCode .bash}
> npm run build:watch  // In a different terminal
> monaca debug
> ```
>
> ![](images/vue_onsen/3_1.png){width="300px"}
>
> ![](images/vue_onsen/3_2.png){width="300px"}

4.  下記のコマンドでプロジェクトを簡単にiOSとAndroidのアプリとして作成できます。

> ``` {.sourceCode .bash}
> monaca remote build --browser
> ```
>
> ![](images/vue_onsen/4.png){width="700px"}

詳細については、次の内容を参照してください。

-   monaca\_cli\_tutorial
-   Monaca CLI マニュアル &lt;monaca\_cli\_manual&gt;

