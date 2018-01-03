---
title: Android の設定
weight: 10
---

Android アプリの設定には、2 通りの方法があります。

1.  Monaca クラウド IDE 経由で設定する方法 &lt;android\_config\_ide&gt;
2.  設定ファイルを編集する方法 &lt;android\_config\_files&gt;

Monaca クラウド IDE 経由で設定する方法
--------------------------------------

### Android アプリの設定画面

Android アプリの設定画面 では、Android
アプリに適用するパラメーターを設定できます。次の手順に従い、Monaca
クラウド IDE の Android アプリの設定画面を表示します。

1.  Monaca クラウド IDE のメニューから、 設定 --&gt; Android アプリ設定
    を選択します。
2.  *Android アプリ設定*
    画面が、次のように表示されます。こちらの画面で各種設定を行います。

> ![image](images/android/3.png){width="600px"}

3.  設定後、 保存する ボタンをクリックします。

### 設定できるパラメーター

Android
アプリの設定画面で行えることは、アプリ情報の設定、アイコン、スプラッシュファイルの設定、パーミッション
( 権限 )
の設定など、多岐にわたります。画面上で設定できるパラメーターの一覧を、次に記します。

-   *許可する外部 URL* : アプリからアクセスできる URL
    を指定します。デフォルトでは `*`
    に設定され、すべてのドメインへの接続を許可しています。
-   *バックグランド時もアプリを常に実行* : バックグラウンドでも Cordova
    を実行したい場合には、有効にします。デフォルトは有効です。
-   *オーバースクロールを無効* : WebView
    上でバウンスを無効にしたい場合には、有効にします。デフォルトは有効です。
-   *WebView エンジン* : デフォルトまたは Crosswalk
    エンジンのいずれかを選択します。
-   *表示時間* : スプラッシュ画面の表示時間を指定します。
-   *画面の向き* : アプリ画面の方向を指定します。

設定ファイルの編集
------------------

Android アプリ用のパラメーターは、次のファイル内に記述されています。

> -   config\_xml\_android
> -   manifest\_xml

<div class="admonition note">

Android
アプリの挙動に関する設定が、上記のファイル内に記述されています。誤って設定した場合、アプリが動作しなくなる恐れがあります。編集する場合には、細心の注意が必要です。

</div>

### config.xml

config.xml 設定ファイルを使用して、Cordova
のさまざまな設定を管理します。

![](images/android/2.png){width="198px"}

設定可能な要素と preference を次に記します。必要に応じて設定します。

#### *&lt;widget&gt;* 要素

*version*

  ----------------------- --------------------------
  属性 \`\`vers           ion\`\`
  型 文字                 列
  デフォルト値            `1.0.0`
  解説 ユーザー側に表示   するバージョン番号です。
  ----------------------- --------------------------

-   例 :

``` {.sourceCode .xml}
<widget id="com.example.helloworld" version="1.0.0">
  ...
</widget>
```

*android-versionCode*

  --------------- -----------------------------------------------------------------------------------------------------------------------------------
  属性 \`\`andr   oid-versionCode\`\`
  型 文字         列
  デフォルト値    automatically set. When `version` attribute is `"1.22.33"`, it will be 102233 (=1 \* 10000 + 22 \* 100 + 33). If the project uses
                  Crosswalk, it will be `2xxxxxx` for ARM architecture and `7xxxxxx` for x86 architecture.
  解説 an inter   nal version code. It is used only to determine whether one version is more recent than others. Higher 数値 indicates a
                  more recent version. This version 数値 is not shown to users.
  --------------- -----------------------------------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
<widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
  ...
</widget>
```

#### *&lt;content&gt; 要素*

  -------------------- --------------------------------------------------------------------------------------------------------------------------------
  属性 \`src           \`
  型 文字              列
  デフォルト値         `indext.html`
  解説 the \`\`&lt;c   ontent&gt;\`\` element defines the app's starting page in the top-level web assets directory. You can change the starting page
                       by changing the value of the `src` attribute to your preferred URL.
  -------------------- --------------------------------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
<widget id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
```

#### &lt;access&gt; 要素

  -------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------
  属性 \`\`orig        in\`\`
  型 文字              列
  デフォルト値         `*`
  解説 \`\`&lt;acces   s&gt;`要素を使用して、特定のネットワークドメインへのアクセスを宣言します。`\*\`\` に設定された場合、アプリからすべてのドメインへのアクセスを許可します。
  -------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
...
<access origin="*" />
...
```

#### *&lt;preference&gt; 要素*

`<preference>` タグでは、name と value
の組み合わせ形式で、オプションを設定します。preference の name
では、大文字小文字は区別されません。preference
の多くは、各プラットフォーム毎に設定する必要があります。次の preference
に関しては、複数のプラットフォームに適用できます。

#### *KeepRunning*

  ----------------------- ------------------------------------------------
  属性 \`\`valu           e\`\`
  型 真偽                 値
  デフォルト値            `true`
  解説 バックグラウンド   で、Cordova が動作し続けるか否かを指定します。
  ----------------------- ------------------------------------------------

-   例 :

``` {.sourceCode .xml}
...
<preference name="KeepRunning" value="false" />
...
```

#### *DisallowOverscroll*

  ----------------------- ------------------------------------------------------------------------------------------------------------------------
  属性 \`\`valu           e\`\`
  型 真偽                 値
  デフォルト値            `false`
  解説 コンテンツのスク   ロール中に、コンテンツの始点または終点を過ぎた場合でも、そのことをユーザーに通知しないときには、 `true` に設定します。
  ----------------------- ------------------------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
...
<preference name="DisallowOverscroll" value="true"/>
...
```

#### *Fullscreen*

  ----------------------- --------------------------------
  属性 \`\`valu           e\`\`
  型 真偽                 値
  デフォルト値            `false`
  解説 画面上部のステー   タスバーを、非表示にできます。
  ----------------------- --------------------------------

-   例 :

``` {.sourceCode .xml}
...
<preference name="Fullscreen" value="true" />
...
```

#### *SplashScreenDelay*

  ----------------------- -----------------------------------------------------------------------------------------------------------
  属性 \`\`valu           e\`\`
  型 数値                 
  デフォルト値            `3000`
  解説 スプラッシュ画像   の表示時間を設定します ( ミリ秒単位 )。表示時間の長さは、アプリが起動するまでの最長待ち時間を意味します。
  ----------------------- -----------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
...
<preference name="SplashScreenDelay" value="10000" />
...
```

#### *LogLevel*

  --------------- --------------------------------------------------------------------------------------------------------------------------
  属性 \`\`valu   e\`\`
  型 文           字列
  デフォルト値    `ERROR`
  解説 sets th    e minimum log level through which log messages from your application will be filtered. There are 5 valid values such as:
                  `ERROR`, `DEBUG`, `WARN`, `INFO` and `VERBOSE`.
  --------------- --------------------------------------------------------------------------------------------------------------------------

-   例 :

``` {.sourceCode .xml}
...
<preference name="loglevel" value="DEBUG" />
...
```

#### *AndroidPersistentFileLocation*

  --------------------- -----------------------------------------------------------------------------------------------------------------------------------------
  属性 \`\`valu         e\`\`
  型 文                 字列
  デフォルト値          `Internal`
  解説 ファイルの出力   先を設定します。2 つの出力先を選択できます。
                        - `Internal`: アプリで使用している内部ストレージのディレクトリーを、ファイルの出力先として指定します。
                        - `Compatibility`: 他の設定で指定されたストレージ ( または、端末側で指定するストレージ ) のルートを、ファイルの出力先として指定します。
  --------------------- -----------------------------------------------------------------------------------------------------------------------------------------

<div class="admonition note">

このプラグインの旧バーション ( 3.0.0 より前 )
を実装したアプリの配布をすでに行っており、加えて、なんらかのファイルシステムにファイルを保存していた場合には、preference
を Compatibility に設定する必要があります (
データの保存先となるファイルシステムを、config.xml
で指定していないときも同様 )。Compatibility から Internal
に変更した場合、既存のユーザーは、以前使用していたファイルへアクセスできないことがあります
( 端末により、動作は異なります )。

</div>

-   例 :

``` {.sourceCode .xml}
...
<preference name="AndroidPersistentFileLocation" value="Internal" />
...
```

#### *ScreenOrientation* ( Cordova 5.2 以上 )

  --------------------- ------------------------------------------------------------------------
  属性 \`\`valu         e\`\`
  型 文                 字列
  デフォルト値          `default`
  解説 端末の画面のオ   リエンテーションを設定します。次の 3 つの値を設定できます。
                        - `default`: システム側のデフォルトのオリエンテーションを使用します。
                        - `landscape`: landscape ( 横向き ) のオリエンテーションを使用します。
                        - `portrait`: portrait ( 縦向き ) のオリエンテーションを使用します。
  --------------------- ------------------------------------------------------------------------

-   全プラットフォーム共通の設定方法

``` {.sourceCode .xml}
<widget>
      ....
      <preference name="orientation" value="default"/>
      ....
</widget>
```

-   プラットフォーム毎の設定方法

``` {.sourceCode .xml}
<widget>
      ...
      <platform name="android">
        <preference name="orientation" value="default"/>
      </platform>
     ...
</widget>
```

### AndroidManifest.xml

Android アプリの基本的な挙動を設定する場合、AndroidManifest.xml
ファイルを編集します。このファイルは、Monaca プロジェクトの `android`
フォルダー下に置かれています。

![](images/android/1.png){width="198px"}

<div class="admonition note">

Cordova 6.2 以降をサポートする Monaca
フレームワークでは、`AndroidManifest.xml`
ファイルを使用しないように、仕様が変更されました。よって、Android
アプリの設定をカスタマイズする場合には、custom\_config\_plugin
を使用する必要があります。

</div>

AndroidManifest.xml ( 主な要素のみ記載 )

``` {.sourceCode .xml}
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
```

#### *&lt;manifest&gt;*

AndroidManifest.xml でルートとなる要素です。この要素内で、xlmns:android
属性と `package` 属性を指定します。また、この要素下に `<application>`
などの子要素を置きます。

``` {.sourceCode .xml}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="%%%VERSION_CODE%%%"
    android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
</manifest>
```

  属性 解説             
  --------------------- --------------------------------------------------------------------------------------------------------------------------------
  xmlns:android         Android の名前空間を宣言するための属性です。この属性値には、常に、 `http://schemas.android.com/apk/res/android` を設定します。
  android:versionCode   an internal version 数値. It is used only to determine whether one version is more recent than others. Higher 数値 indicates
                        a more recent version. This version 数値 is not shown to users.
  android:versionName   ユーザー側に表示するバージョン番号です。.

#### *&lt;uses-sdk&gt;*

アプリで使用する API のレベルを設定します。 `<manifest>`
タグ下に、この要素を記述します。

``` {.sourceCode .xml}
<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />
```

  属性 解説                  
  -------------------------- ---------------------------------------------------------------------------------------------------------------------------------
  android:minSdkVersion      アプリの実行に必要な、最低レベルの API です。Android では、この値を確認して、端末にアプリをインストールできる否かを決定します。
  android:targetSdkVersion   要求する API レベルを指定します。

#### *&lt;uses-permission&gt;*

パーミッション ( 権限 )
の設定です。アプリのインストール時に、パーミッションも有効になります。
`<manifest>` 下に、この要素を記述します。

*カメラのパーミッション*

``` {.sourceCode .xml}
<uses-permission android:name=\"android.permission.CAMERA\"></uses-permission>
```

  属性 解説      
  -------------- ----------------------------------------------------------------------------------------------------------------------
  android:name   Android 側のリソースを使うためのパーミッションです。アプリが使用するリソース ( Camera、Network など ) を指定します。

#### *&lt;uses-permission&gt;の定義方法*

`<components/loader.js>` を読み込む場合には、 `ACCESS_NETWORK_STATE`
パーミッションが必要となります。
このファイルをアプリ側で必要としない場合には、 `<uses-permission>`
の対象から外せます。

#### *&lt;uses-feature&gt;*

アプリ側で使用する、ハードウェアまたはソフトウェアを宣言します。たとえば、アプリ側でカメラを使用する場合、カメラが搭載されていない端末では、アプリは動作しません。
`<manifest>` 下に、この要素を記述します。

アプリ側でカメラを使用する場合のコードを、次に記します。

``` {.sourceCode .xml}
<uses-feature android:name="android.hardware.camera" android:required="true" />
```

  属性 解説          
  ------------------ ------------------------------------------------------------------------------------------------------------------------------
  android:name       アプリ側で使用する機能の名前です。
  android:required   a 真偽値 value that specifies whether the application requires the feature set in `android:name`. If you set the value to
                     `true`, you are indicating that the application cannot function without the feature. If you set it to `false`, it means that
                     the application prefers to use the feature, but can still function without the feature.

#### *&lt;application&gt;*

application タグです。 `<manifest>` タグ下に、この要素を記述します。

``` {.sourceCode .xml}
<application android:icon="@drawable/icon"
             android:label="%%%APPLICATION_NAME%%%"
             android:name="mobi.monaca.framework.MonacaApplication">
</application>
```

  属性 解説                   
  --------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  android:name                アプリ名です。完全修飾名 ( Fully Qualified Class Name / FQCN ) を指定します ( クラスは、Application クラスを継承していること ) 。
  android:icon                アプリで使用するアイコンです。アプリの各コンポーネント用のデフォルトのアイコンにもなります。
  android:label               アプリで使用するラベルです。
  android:theme               アプリで使用するテーマです。
  android:screenOrientation   画面のオリエンテーションをアプリ毎に指定します。

#### *&lt;intent-filter&gt;*

インテントフィルターの処理を定義します。 `<activity>`
下に、この要素を記述します。子要素 `<action>` は、必ず定義します。

``` {.sourceCode .xml}
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
```

#### *&lt;action&gt;*

インテントフィルターのアクションを指定します。 `<intent-filter>`
下に、この要素を記述します。

  属性 解説      
  -------------- --------------------
  android:name   アクション名です。

#### *&lt;category&gt;*

インテントフィルターのカテゴリー名です。 `<intent-filter>`
下に、この要素を記述します。

  属性 解説      
  -------------- --------------------
  android:name   カテゴリー名です。


