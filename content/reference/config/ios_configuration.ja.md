---
title: iOS の設定
weight: 20
---

iOS アプリの設定には、2 通りの方法があります。

1.  [Monaca クラウド IDE 経由で設定する方法](#monaca-クラウド-ide-経由で設定する方法)
2.  [設定ファイルを編集する方法](#設定ファイルの編集)

Monaca クラウド IDE 経由で設定する方法
--------------------------------------

### iOS アプリの設定画面

iOS アプリの設定画面では、iOS
アプリに適用するパラメーターを設定できます。次の手順に従い、Monaca
クラウド IDE の iOS アプリの設定画面を表示します。

1.  Monaca クラウド IDE メニュー上で、 {{<menu menu1="設定" menu2="iOS アプリ設定">}} を選択します。

    {{<img src="/images/reference/config/ios/ide_1.png">}}

2.  `iOS アプリ設定` 画面が、次のように表示されます。こちらの画面で設定を行います。

    {{<img src="/images/reference/config/ios/ide_2.png">}}

3.  設定後、 {{<guilabel name="保存する">}} ボタンをクリックします。

### 設定できるパラメーター

iOS
アプリの設定画面で行えることは、アプリ情報の設定、アイコン、スプラッシュファイルの設定、パーミッション
( 権限 )
の設定など、多岐にわたります。画面上で設定できるパラメーターの一覧を、次に記します。

-   `許可する外部 URL` : アプリから接続できる URL
    を指定します。デフォルトでは `*`
    に設定され、全てのドメインへの接続を許可しています。

-   `オーバースクロールを無効` : WebView
    上でバウンスを無効にしたい場合には、有効にします。デフォルトは有効です。

-   `ビューポート制御を有効` :
    デフォルトは有効です。無効にした場合、アプリ内に設定された、viewport
    の meta タグを無視します。

-   `スプラッシュ画像をフェードアウト` :
    デフォルトでは、有効化されています。

-   `スプラッシュにスピナーを表示` : アプリの起動時に、スプラッシュ画面
    ( スピナー ) を表示します。

設定ファイルの編集
------------------

iOS アプリのパラメーターは、次のファイル内に記述されています。

- [MonacaApp-Info.plist](#monacaapp-info-plist)
- [config.xml](#config-xml)

{{<note>}}
  iOS アプリの挙動に関する設定が、上記のファイル内に記述されています。誤って設定した場合、アプリが動作しなくなる恐れがあります。編集する場合には、細心の注意が必要です。
{{</note>}}

### MonacaApp-Info.plist

iOS アプリの設定を行うには、 MonacaApp-Info.plist ファイルを編集します。
`plist` ファイルの情報に関しては、 [Information Property List Files ( Apple )](http://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html) をご確認ください。このファイルは、次のように、Monaca プロジェクトの `ios` フォルダー下に置かれています。

{{<figure src="/images/reference/config/ios/1.png">}}

{{<note>}}
  Cordova 6.2 以降をサポートする Monaca フレームワークでは、<code>MonacaApp-Info.plist</code> ファイルを使用しないように、仕様が変更されました。よって、iOS アプリの設定をカスタマイズする場合には、 {{<link href="/ja/reference/third_party_phonegap/custom_config" title="Custom Config プラグイン">}} を使用する必要があります。
{{</note>}}

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist>
  <dict>
    <key>key</key>
    <value-type>value</value-type>
      ...
    <key>key</key>
    <array>
      <value-type>value</value-type>
      <value-type>value</value-type>
    </array>
    ...
  </dict>
</plist>
{{</highlight>}}

`MonacaApp-Info.plist` ファイル内には、3 つの主な要素があります。

- `<key>` : value ( plistObject ) とアプリの設定情報間の紐付けをします。
- `<array>` : 配列を使用して、value ( plistObject ) を格納できます。
- `<dict>` : key と value ( plistObject ) の組み合わせを、<dict> 内に置きます。

例 :

{{<highlight xml>}}
<plist>
  <dict>
    ...
    <key>XXX</key>
      <string>The value(plistObject) corresponding to key(XXX)</sting>
      ...
    <key>YYY</key>
      <array>
        <string>The 1st value(plistObject) corresponding to key(YYY)</string>
        <string>The 2nd value(plistObject) corresponding to key(YYY)</string>
        <string>The 3rd value(plistObject) corresponding to key(YYY)</string>
        <string>The 4th value(plistObject) corresponding to key(YYY)</string>
      </array>
    ...
  </dict>
</plist>
{{</highlight>}}

#### Value ( plistObject ) の型の一覧

型 | 解説
------|---------------
文字列 | 文字列   
date | 日付および時刻を表示
integer | 整数
real | 浮動小数点データ
data | データ
true | 真 ( boolean )
false | 偽 ( boolean )

#### Key の一覧

key | plistObject の型 | 解説
----|-----------------|-------------------
CFBundleDevelopmentRegion	| 文字列 | 開発者の母国語を指定します。ユーザー側の使用する言語が不明な場合、デフォルトとして、この値を使用します。
CFBundleDisplayName	| 文字列 | アプリ名を指定します。完全修飾名 ( Fully Qualified Class Name / FQCN ) を指定します ( クラスは、Application クラスを継承していること ) 。
CFBundleExecutable	| 文字列 | アプリの実行可能ファイルを指定します。
CFBundleIconFile	| 文字列 | アプリのアイコンのファイル名を指定します。
CFBundleIconFiles	| \<array\>string	| アイコンのファイル名を指定します ( iOS 3.2 以降の端末用 )。端末の画面解像度に応じて、適切なファイルが選択されます。
CFBundleIdentifier	| 文字列 | アプリの識別子を指定します。Uniform Type Identifier ( UTI ) を使用します ( 例 ： 「 com.monaca.MyApp 」 )。
CFBundleInfoDictionaryVersion	| 文字列 | `MonacaApp-Info.plist` ファイルの現バージョン番号です。
CFBundleName	| 文字列 | アプリの短縮表示名です。`16` 文字以下で記述します。
CFBundlePackageType	| 文字列 | アプリのタイプを識別する 4 文字のコードです。アプリの場合、「 APPL 」 と指定します。
CFBundleShortVersionString	| 文字列 | アプリのバージョン番号を指定します。
CFBundleSignature	| 文字列 | アプリの開発者を識別する 4 文字のコードです。
CFBundleVersion	| 文字列 | アプリのビルド番号です。
LSRequiresIPhoneOS	| true	| アプリがサポートする端末を、iPhone のみにするか指定します。
UISupportedInterfaceOrientations	| \<array\>string	| アプリでサポートする、画面の方向を指定します ( iPhone 向け )。iPad の場合、「 UISupportedInterfaceOrientations~ipad 」を使用します。
BackupWebStorage	| 文字列 | cloud に設定されている場合、データのバックアップを、iCloud へすることができます。 none に設定されている場合、iCloud へのバックアップはできません。デフォルトは、 cloud です。

iOS アプリで設定すべき Key と Value を、次に記します。

#### UISupportedInterfaceOrientations

画面の方向を指定します。

-   iPhone の場合

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

-   iPad の場合

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

#### 画面方向に関する設定値 ( Value )

Value	| 解説
------|------------------
UIInterfaceOrientationLandscapeLeft	| ホームボタンを左側にして、横向き表示
UIInterfaceOrientationLandscapeRight	| ホームボタンを右側にして、横向き表示
UIInterfaceOrientationPortraitUpsideDown	| 縦向き表示
UIInterfaceOrientationPortrait	| 通常の縦向き表示とは逆方向に、縦向き表示

表示方向の設定に関するサンプルを、こちらからダウンロードできます。

{{<download href="/download/UISupportedInterfaceOrientations.zip" title="サンプルファイル">}}

#### ステータスバーの設定

Value | 型  | デフォルト値 | 解説
------|-----|------------|--------------------
UIStatusBarHidden | Boolean | `false` | `true` に設定した場合、アプリの画面上部のステータスバーが非表示になります。`UIStatusBarHidden` を `true` に設定して、 `UIViewControllerBasedStatusBarAppearance` を `false` に設定した場合、アプリの画面上部のステータスバーは、非表示となります。
UIViewControllerBasedStatusBarAppearance | Boolean | `false` | `true` に設定した場合、アプリの画面上部のステータスバーが非表示になります。[ステータスバーの制御プラグイン](/ja/reference/cordova_6.5/statusbar) ( StatusBar プラグイン ) を使用する場合には、`true` に設定します。

### config.xml

`config.xml` 設定ファイルを使用して、Cordova
のさまざまな設定を管理します。

{{<figure src="/images/reference/config/android/2.png">}}

設定可能な要素と preference を次に記します。必要に応じて設定します。

#### &lt;widget&gt; 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`version` | 文字列 | `1.0.0` | A version number which is visible to users

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1">
  ...
</widget>
{{</highlight>}}

#### \<content\> 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`src` | 文字列 | `indext.html` | `<content>` 要素では、アプリ起動時のページを指定します ( 通常、Web アセットを置いた、最上位のディレクトリーにこのページは置かれます )。 `src` 属性の値に、他の URL を指定すれば、起動時のページを変更できます。

**例**

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; 要素

属性 | 型  | デフォルト値 | 解説
----|-----|------------|-------------------
`origin` | 文字列 | `*` | アクセスできるネットワークドメインを指定します。 `*` に指定した場合、どのドメインにも、アプリからアクセスできます。your app. 

**例**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

#### &lt;preference&gt; 要素

The `<preference>` tag sets various options as pairs of name/value
attributes. Each preference's name is case-insensitive. Many preferences
are unique to specific platforms, as listed at the top of this page. The
following sections detail preferences that apply to more than one
platform.

Preference Name | 型  | デフォルト値 | 解説
----------|------|---------------|-------------------
`DisallowOverScroll` | 真偽値 | `false` | `true` に指定した場合、ラバーバンド スクロール ( rubber-band scrolling ) が無効になります。
`EnableViewportScale` | 真偽値 | `false` | `true` に指定した場合、ビューポートのスケール方法を指定した `meta` タグを無視します。
`AutoHideSplashScreen` | 真偽値 | `true` | `false` に指定した場合、JavaScript API を使用して、スプラッシュ画像の制御を行えます。
`BackupWebStorage` | 文字列 | `cloud` | 次のいずれかの値を設定できます。 <ul><li>`none`: バックアップを無効にします。</li><li>`cloud`: iCloud へのバックアップを許可します。<li>`local`: ローカルへのバックアップ ( iTunes Sync 経由 ) を許可します。</li></ul>
`UIWebViewDecelerationSpeed` | 文字列 | `normal` | 慣性スクロールの減速度を指定します。2 つのオプションがあります。 <ul><li>`normal`: デフォルトでは、こちらを選択します。</li><li>`fast`: Mobile Safari の場合、こちらを選択します。</li></ul>
`Orientation`* | 文字列 | `default` | 画面のオリエンテーションを設定します。次の `4` つの値を設定できます。 <ul><li>`all`: この設定では、portrait と landscape の両方を使用できます ( プラットフォーム毎の設定時に使用 )。</li><li>`default`: システム側のデフォルトのオリエンテーションを使用します。</li><li>`landscape`: landscape ( 横向き ) のオリエンテーションを使用します。</li><li>`portrait`: portrait ( 縦向き ) のオリエンテーションを使用します。</li></ul>

**例**

{{<highlight xml>}}
...
<preference name="DisallowOverscroll" value="false" />
<preference name="EnableViewportScale" value="false" />
<preference name="AutoHideSplashScreen" value="true" />
<preference name="BackupWebStorage" value="cloud" />
<preference name="UIWebViewDecelerationSpeed" value="normal" />
<preference name="Orientation" value="portrait" />
...
{{</highlight>}}

<b>*</b>: There are two use ways to configure `Orientation` preference: 

1. 全プラットフォーム共通の設定方法
  
    {{<highlight xml>}}
<widget>
  ....
  <preference name="orientation" value="default"/>
  ....
</widget>{{</highlight>}}

    {{<note>}}
      全端末に適用される、グローバルな設定 ( Global Preference ) も使用できますが、設定できる値は、<code>default</code>、 <code>landscape</code>、 <code>portrait</code> のみです。<code>all</code> は、グローバルな設定には使用できません。
    {{</note>}}

2. プラットフォーム毎の設定方法
  
    {{<highlight xml>}}
<widget>
  ...
  <platform name="ios">
    <preference name="orientation" value="default"/>
  </platform>
  ...
</widget>{{</highlight>}}

{{<note>}}
  <code>default</code> を設定した場合、Android と Windows ではすべてのオリエンテーションが使用でき、iOS では <code>portrait</code> のみ適用されます。
{{</note>}}