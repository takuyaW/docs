---
title: Android の設定
weight: 10
---

Android アプリの設定には、2 通りの方法があります。

1.  [Monaca クラウド IDE 経由で設定する方法](#monaca-クラウド-ide-経由で設定する方法)
2.  [設定ファイルを編集する方法](#設定ファイルの編集)

Monaca クラウド IDE 経由で設定する方法
--------------------------------------

### Android アプリの設定画面

Android アプリの設定画面 では、Android
アプリに適用するパラメーターを設定できます。次の手順に従い、Monaca
クラウド IDE の Android アプリの設定画面を表示します。

1.  Monaca クラウド IDE のメニューから、 {{<menu menu1="設定" menu2="Android アプリ設定">}} を選択します。

2.  `Android アプリ設定` 画面が、次のように表示されます。こちらの画面で各種設定を行います。

    {{<img src="/images/reference/config/android/3.png">}}

3.  設定後、 {{<guilabel name="保存する">}} ボタンをクリックします。

### 設定できるパラメーター

Android
アプリの設定画面で行えることは、アプリ情報の設定、アイコン、スプラッシュファイルの設定、パーミッション
( 権限 )
の設定など、多岐にわたります。画面上で設定できるパラメーターの一覧を、次に記します。

- `許可する外部 URL` : アプリからアクセスできる URL を指定します。デフォルトでは `*` に設定され、すべてのドメインへの接続を許可しています。

- `バックグランド時もアプリを常に実行` : バックグラウンドでも Cordova を実行したい場合には、有効にします。デフォルトは有効です。

- `オーバースクロールを無効` : WebView 上でバウンスを無効にしたい場合には、有効にします。デフォルトは有効です。

- `WebView エンジン` : デフォルトまたは Crosswalk エンジンのいずれかを選択します。

- `表示時間` : スプラッシュ画面の表示時間を指定します。

- `画面の向き` : アプリ画面の方向を指定します。

設定ファイルの編集
------------------

Android アプリ用のパラメーターは、次のファイル内に記述されています。

- [config.xml](#config-xml)
- [AndroidManifest.xml](#androidmanifest-xml)

{{<note>}}
  Android アプリの挙動に関する設定が、上記のファイル内に記述されています。誤って設定した場合、アプリが動作しなくなる恐れがあります。編集する場合には、細心の注意が必要です。
{{</note>}}

### config.xml

`config.xml` 設定ファイルを使用して、Cordova
のさまざまな設定を管理します。

{{<figure src="/images/reference/config/android/2.png">}}

設定可能な要素と preference を次に記します。必要に応じて設定します。

#### &lt;widget&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`version` | 文字列 | `1.0.0` | ユーザー側に表示するバージョン番号です。
`android-versionCode` | 文字列 | 自動的にセットされます。`version` 属性に `"1.22.33"` を設定した場合、 102233 (=1 * 10000 + 22 * 100 + 33) となります。また、Crosswalk をプロジェクトで使用している場合、ARM アーキテクチャを使用しているときは、`2xxxxxx` となり、x86 アーキテクチャを使用しているときは、`7xxxxxx` となります。 | 内部で使用するバージョン番号です。最新バージョンを決定するときに使用されます。比較して、数が多いほうが、より新しいバージョンとなります。このバージョン番号は、ユーザー側には表示されません。

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
  ...
</widget>
{{</highlight>}}

#### &lt;content&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`src` | 文字列 | `indext.html` | `<content>` 要素には、アプリ起動時のページを指定します ( 通常、Web アセットを置いた、最上位のディレクトリーにこのページは置かれます )。 `src` 属性の値に、他の URL を指定すれば、起動時のページを変更できます。

**例**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; 要素

属性 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`origin` | 文字列 | `*` | `<access>` 要素を使用して、特定のネットワークドメインへのアクセスを宣言します。 `*` に設定された場合、アプリからすべてのドメインへのアクセスを許可します。

**例**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

#### *&lt;preference&gt; 要素*

`<preference>` タグでは、name と value
の組み合わせ形式で、オプションを設定します。preference の name
では、大文字小文字は区別されません。preference
の多くは、各プラットフォーム毎に設定する必要があります。次の preference
に関しては、複数のプラットフォームに適用できます。

Preference 名 | 型 | デフォルト値 | 解説
----------|------|---------------|-------------------
`KeepRunning` | 真偽値 | `true` | バックグラウンドで、Cordova が動作し続けるか否かを指定します。
`DisallowOverscroll` | 真偽値 | `false` | コンテンツのスクロール中に、コンテンツの始点または終点を過ぎた場合でも、そのことをユーザーに通知しないときには、 `true` に設定します。
`Fullscreen` | 真偽値 | `false` | 画面上部のステータスバーを、非表示にできます。
`SplashScreenDelay` | 数値 | `3000` | スプラッシュ画像の表示時間を設定します ( ミリ秒単位 )。表示時間の長さは、アプリが起動するまでの最長待ち時間を意味します。
`LogLevel` | 文字列 | `ERROR` | ログの出力レベルを設定します。 `ERROR`、 `DEBUG`、 `WARN`、 `INFO`、 `VERBOSE` の 5 段階のレベルを選べます。
`AndroidPersistentFileLocation`* | 文字列 | `Internal` | ファイルの出力先を設定します。2 つの出力先を選択できます。<ul><li>`Internal` : アプリで使用している内部ストレージのディレクトリーを、ファイルの出力先として指定します。</li><li>`Compatibility` : 他の設定で指定されたストレージ ( または、端末側で指定するストレージ ) のルートを、ファイルの出力先として指定します。</li></ul>
`ScreenOrientation`** | 文字列 | `default` | 端末の画面のオリエンテーションを設定します。次の 3 つの値を設定できます。<ul><li>`default`: システム側のデフォルトのオリエンテーションを使用します。</li><li>`landscape`: landscape ( 横向き ) のオリエンテーションを使用します。</li><li>`portrait`: portrait ( 縦向き ) のオリエンテーションを使用します。</li></ul>

**例**

{{<highlight xml>}}
...
<preference name="KeepRunning" value="false" />
<preference name="DisallowOverscroll" value="true"/>
<preference name="Fullscreen" value="true" />
<preference name="SplashScreenDelay" value="10000" />
<preference name="loglevel" value="DEBUG" />
<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="orientation" value="default"/>
...
{{</highlight>}}

<b>*</b>: このプラグインの旧バーション ( 3.0.0 より前 )
を実装したアプリの配布をすでに行っており、加えて、なんらかのファイルシステムにファイルを保存していた場合には、preference
を `Compatibility` に設定する必要があります ( データの保存先となるファイルシステムを、`config.xml` で指定していないときも同様 )。`Compatibility` から `Internal` に変更した場合、既存のユーザーは、以前使用していたファイルへアクセスできないことがあります
( 端末により、動作は異なります )。

<b>**</b>: There are two use ways to configure `ScreenOrientation` preference: 

1. 全プラットフォーム共通の設定方法
  
    {{<highlight xml>}}
<widget>
    ....
    <preference name="orientation" value="default"/>
    ....
</widget>{{</highlight>}}

2. プラットフォーム毎の設定方法
  
    {{<highlight xml>}}
<widget>
    ...
    <platform name="android">
    <preference name="orientation" value="default"/>
    </platform>
    ...
</widget>{{</highlight>}}

### AndroidManifest.xml

Android アプリの基本的な挙動を設定する場合、`AndroidManifest.xml`
ファイルを編集します。このファイルは、Monaca プロジェクトの `android`
フォルダー下に置かれています。

{{<figure src="/images/reference/config/android/1.png">}}

{{<note>}}
  Cordova 6.2 以降をサポートする Monaca フレームワークでは、<code>AndroidManifest.xml</code> ファイルを使用しないように、仕様が変更されました。よって、Android アプリの設定をカスタマイズする場合には、 {{<link href="../../third_party_phonegap/custom_config" title="Custom Config プラグイン">}} を使用する必要があります。
{{</note>}}

#### AndroidManifest.xml ( 主な要素のみ記載 )

{{<highlight xml>}}
<?xml version="1.0" encoding="utf-8"?>
<manifest>

  <uses-permission />
  <uses-sdk />
  <uses-feature />
  <supports-screens />

  <application>
    <activity>
        <intent-filter>
            <action />
            <category />
        </intent-filter>
    </activity>
  </application>

</manifest>
{{</highlight>}}

#### &lt;manifest&gt;

`AndroidManifest.xml` でルートとなる要素です。この要素内で、`xlmns:android`
属性と `package` 属性を指定します。また、この要素下に `<application>`
などの子要素を置きます。

属性 | 型 | 解説
----------|------|----------------
`xmlns:android`	| 文字列 | Android の名前空間を宣言するための属性です。この属性値には、常に、 `http://schemas.android.com/apk/res/android` を設定します。
`android:versionCode` |	文字列 | 内部で使用するバージョン番号です。最新バージョンを決定するときに使用されます。比較して、数が多いほうが、より新しいバージョンとなります。このバージョン番号は、ユーザー側には表示されません。
`android:versionName` | 文字列 | ユーザー側に表示するバージョン番号です。
`package` | 文字列 | Package name

**例**

{{<highlight xml>}}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="%%%VERSION_CODE%%%"
    android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
</manifest>
{{</highlight>}}

#### &lt;uses-sdk&gt;

アプリで使用する API のレベルを設定します。 `<manifest>` タグ下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:minSdkVersion` | 数値 | アプリの実行に必要な、最低レベルの API です。Android では、この値を確認して、端末にアプリをインストールできる否かを決定します。
`android:targetSdkVersion` | 数値 | 要求する API レベルを指定します。

**例**

{{<highlight xml>}}
<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />
{{</highlight>}}

#### &lt;uses-permission&gt;

パーミッション ( 権限 ) の設定です。アプリのインストール時に、パーミッションも有効になります。`<manifest>` 下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | Android 側のリソースを使うためのパーミッションです。アプリが使用するリソース ( Camera、Network など ) を指定します。

**&lt;uses-permission&gt;の定義方法**

`<components/loader.js>` を読み込む場合には、 `ACCESS_NETWORK_STATE` パーミッションが必要となります。 このファイルをアプリ側で必要としない場合には、 `<uses-permission>` の対象から外せます。

{{<highlight xml>}}
<uses-permission android:name="%%%PERMISSION_NAME%%%"></uses-permission>
{{</highlight>}}

Permission | PERMISSION_NAME | 解説
-----------|-----------------|------------------
Access Coarse Location | `android.permission.ACCESS_COARSE_LOCATION` | 位置情報の取得を許可
Access Fine Location | `android.permission.ACCESS_FINE_LOCATION` | 位置情報関連のサービスの使用を許可
Access Network State | `android.permission.ACCESS_NETWORK_STATE` | ネットワーク状態の取得を許可
Access Location Extra Commands | `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS` | 位置情報プロバイダーが提供するコマンドへのアクセスを許可
Bluetooth | `android.permission.BLUETOOTH` | ペアリング済みの BlueTooth 機器への接続を許可
Bluetooth (Admin)| `android.permission.BLUETOOTH_ADMIN` | BlueTooth 機器の検知とペアリング ( 接続 ) を許可
Camera | `android.permission.CAMERA` | カメラ機能の使用を許可
Flashlight | `android.permission.FLASHLIGHT` | フラッシュライトへのアクセスを許可
Internet | `android.permission.INTERNET` | インターネット接続を許可
Modify Audio Setting | `android.permission.MODIFY_AUDIO_SETTINGS` | オーディオ設定の変更を許可
Read Phone State | `android.permission.READ_PHONE_STATE` | 電話関連の情報へのアクセスを許可 ( 読み取り専用 )
Receive SMS | `android.permission.RECEIVE_SMS` | SMS メッセージの受信を許可
Record Audio | `android.permission.RECORD_AUDIO` | 録音を許可
Read Contacts	| `android.permission.READ_CONTACTS` | 連絡先の読み込みを許可
Vibrate | `android.permission.VIBRATE` | バイブレーション機能の使用を許可
Write Contacts | `android.permission.WRITE_CONTACTS` | 連絡先へのアクセスを許可 ( 書き込み )
Write External Storage | `android.permission.WRITE_EXTERNAL_STORAGE` | 外部ストレージへのアクセスを許可 ( 書き込み )

**例**

カメラのパーミッション

{{<highlight xml>}}
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
{{</highlight>}}

#### &lt;uses-feature&gt;

アプリ側で使用する、ハードウェアまたはソフトウェアを宣言します。たとえば、アプリ側でカメラを使用する場合、カメラが搭載されていない端末では、アプリは動作しません。`<manifest>` 下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アプリ側で使用する機能の名前です。
`android:required` | 真偽値 | 真偽値を使用して、`android:name` に指定した機能を、アプリ側で使用するか否か指定します。`true` に設定した場合、該当機能がないときには、アプリは動作しません。`false` に設定した場合には、該当機能がないときでも動作します。

**例**

アプリ側でカメラを使用する場合のコードを、次に記します。

{{<highlight xml>}}
<uses-feature android:name="android.hardware.camera" android:required="true" />
{{</highlight>}}

#### &lt;application&gt;

application タグです。 `<manifest>` タグ下に、この要素を記述します。

{{<highlight xml>}}
<application android:icon="@drawable/icon"
             android:label="%%%APPLICATION_NAME%%%"
             android:name="mobi.monaca.framework.MonacaApplication">
</application>
{{</highlight>}}

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アプリ名です。完全修飾名 ( Fully Qualified Class Name / FQCN ) を指定します ( クラスは、Application クラスを継承していること ) 。
`android:icon` | 文字列 | アプリで使用するアイコンです。アプリの各コンポーネント用のデフォルトのアイコンにもなります。
`android:label`| 文字列 | アプリで使用するラベルです。
`android:theme` | 文字列 | アプリで使用するテーマです。
`android:screenOrientation` | 文字列 | 画面のオリエンテーションをアプリ毎に指定します。

#### &lt;intent-filter&gt;

インテントフィルターの処理を定義します。 `<activity>`
下に、この要素を記述します。子要素 `<action>` は、必ず定義します。

{{<highlight xml>}}
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
{{</highlight>}}

#### &lt;action&gt;

インテントフィルターのアクションを指定します。 `<intent-filter>`
下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | アクション名です

#### &lt;category&gt;

インテントフィルターのカテゴリー名です。 `<intent-filter>`
下に、この要素を記述します。

属性 | 型 | 解説
----------|------|----------------
`android:name` | 文字列 | カテゴリー名です。


