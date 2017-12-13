ファイル・フォルダー構成
========================

Monaca アプリのフォルダー・ファイル構成は、次のようになります。

*Cordova 5.2 以前の場合*

> widths
>
> :   10 30
>
> -   -   `android/`
>
>     - Android アプリ向けの設定を保存しているフォルダー
> -   -   `chrome/`
>
>     - Chrome アプリ向けの設定を保存しているフォルダー
> -   -   `ios/`
>
>     - iOS アプリ向けの設定を保存しているフォルダー
> -   -   `www/`
>
>     - アプリの中核となるファイル ( 群 ) を保存しているフォルダー
> -   -   `config.xml`
>     -   Cordova の設定ファイル
>
*Cordova 6.2 以降の場合*

> widths
>
> :   10 30
>
> -   -   `chrome/`
>
>     - Chrome アプリ向けの設定を保存しているフォルダー
> -   -   `plugins/`
>
>     - 追加のプラグインを保存しておくフォルダー
> -   -   `res/`
>
>     - Android、iOS、Winrt 向けの各リソースを保存しているフォルダー
> -   -   `www/`
>
>     - アプリの中核となるファイル ( 群 ) を保存しているフォルダー
> -   -   `config.xml`
>     -   Cordova の設定ファイル
>
android フォルダー
------------------

Android アプリの設定ファイルを、`android` フォルダーに保存します。

> widths
>
> :   10 30
>
> -   -   `AndroidManifest.xml`
>     -   Android アプリの実行時に使用する Manifest ファイル
>
このファイルの使用方法の詳細については、
Android Configuration File  &lt;android\_configuration\_file&gt;
を参照してください。

<div class="admonition note">

Cordova 6.2 以降をサポートする Monaca
フレームワークでは、`AndroidManifest.xml`
ファイルを使用しないように、仕様が変更されました。よって、Android
アプリの設定をカスタマイズする場合には、custom\_config\_plugin
を使用する必要があります。

</div>

chrome フォルダー
-----------------

Chrome アプリの設定ファイルを、 `chrome` フォルダーに保存します。

> widths
>
> :   10 30
>
> -   -   `background.js`
>
>     - Chrome アプリの実行時に使用する JavaScript ファイル
> -   -   `manifest.json`
>     -   Chrome アプリの実行時に使用する Manifest ファイル
>
ios フォルダー
--------------

iOS アプリの設定ファイルを、 `ios` フォルダーに保存します。

  ---------------------------- -------------------------------------------
  `MonacaApp-Info.plist`       iOS アプリの実行時に使用する Info.plist
                               ファイル
  ---------------------------- -------------------------------------------

このファイルの使用方法の詳細については、
iOS Configuration File &lt;ios\_configuration\_file&gt;
を参照してください。

<div class="admonition note">

Cordova 6.2 以降をサポートする Monaca
フレームワークでは、`MonacaApp-Info.plist`
ファイルを使用しないように、仕様が変更されました。よって、iOS
アプリの設定をカスタマイズする場合には、custom\_config\_plugin
を使用する必要があります。

</div>

www フォルダー
--------------

アプリ本体のファイルを格納します。ファイルとフォルダーは、www
フォルダー下であれば、自由に配置できますが、次のファイルとフォルダーだけは、特別な意味を持ちます。

> widths
>
> :   10 30
>
> -   -   `index.html`
>
>     - アプリの起動時に、最初に表示されるページです ( デフォルト設定
>     )。なお、最初に読み込むファイルは、自由に変更できます。
> -   -   `components/`
>     -   プロジェクトで使用する、すべての JS・CSS
>         コンポーネントを格納するフォルダーです ( Monaca 側で作成 )。
>
### index.html

index.html
は、アプリのスタート地点となります。アプリが起動すると、このファイルに記述された内容を、最初に読み込みます。

### components フォルダー

`www/components/` フォルダー下に、プロジェクトで使用する、すべての
JS・CSS コンポーネントを格納します。次の 2
つのファイルは、プロジェクトに追加したコンポーネントの種類にかかわらず、デフォルトで、このフォルダーに常に置かれているファイルです。

+--------------------+-------------------------------------------------+
| `loader.js`        | > コンポーネントを読み込むときに、Monaca        |
|                    | > が使用する JavaScript ファイル                |
+--------------------+-------------------------------------------------+
| `loader.css`       | > コンポーネントを読み込むときに、Monaca        |
|                    | > が使用する スタイルシート ファイル            |
+--------------------+-------------------------------------------------+

loader.js と loader.css を、HTML から読み込む必要があります ( どの HTML
ファイルでも良い )。

各コンポーネントのフォルダーは、`www/components/`
フォルダーのサブフォルダーとして作成されます。

config.xml ファイル
-------------------

config.xml には、Cordova
の挙動を制御するための設定が定義されています。config.xml
ファイルを使用した、Android アプリと iOS
アプリ向けの設定は、次のリンク先をご確認ください。

-   Android 向けの config.xml の設定 &lt;config\_xml\_android&gt;
-   iOS 向けの config.xml の設定 &lt;config\_xml\_ios&gt;

<div class="admonition note">

Cordova 6.2 以降では、Android アプリまたは iOS
アプリの挙動を制御するときには、`config.xml`
が使用されます。詳細は、custom\_config\_plugin をご確認ください。

</div>
