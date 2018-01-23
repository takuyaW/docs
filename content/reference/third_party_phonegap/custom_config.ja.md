---
title: Custom Config プラグイン
weight: 20
---

Cordova 5.2 以前のバージョンをサポートしていた Monaca
フレームワークでは、 `AndroidManifest.xml` ( Android の場合 ) または
`MonacaApp-Info.plist` ( iOS の場合 )
を編集すれば、アプリのデフォルトの挙動を制御することができました。Cordova
6.2 以降のバージョンをサポートする Monaca
フレームワークでは、仕様が変更され、 `AndroidManifest.xml` と
`MonacaApp-Info.plist` のいずれのファイルも使用しなくなりました。

このため、最新の Monaca フレームワーク ( Cordova 6.2 以降をサポート )
を使用する場合、iOS または Android
アプリの設定をカスタマイズするときには、Custom Config
プラグインを使用する必要があります。こちらの Cordova プラグイン ( iOS と
Android の両方に使用可 ) を使用すると、フック用のスクリプト (
プラグイン側で提供 )
を経由して、設定ファイルの情報を書き換えることができます。具体的には、`config.xml`
ファイル内に、カスタマイズ用の preference または/および config-file
ブロックを記述し、このスクリプト経由で、プラットフォーム側の設定に適用します。

プラグインの有効化 ( Monaca 上での処理 )
----------------------------------------

1.  IDE メニュー上で、 {{<menu menu1="ファイル" menu2="Cordova プラグインの管理">}} または
    {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  `Custom Config` の {{<guilabel name="有効">}} ボタンをクリックして、プロジェクトへ追加します。

    {{<img src="/images/reference/third_party_phonegap/custom_config/1.png">}}

設定
----

このプラグインには、実行ファイルのようなものはありません。代わりに、フック用のスクリプトを使用して、各プラットフォームの設定ファイルに対して、`config.xml`
ファイル内に設定した preference を適用 ( 上書きまたは追加 )
します。たとえば、iOS の場合、preference の name 属性は、iOS
設定ファイルの key
と紐づけされています。よって、このプラグインを使用する場合、カスタマイズに必要な設定
( preference の name 属性などを使用 ) を、あらかじめ、`config.xml`
内に記述しておきます。適用処理は、プロジェクトのビルド時に、スクリプト側で行ってくれます。

このプラグインを使用し変更した設定ファイルの内容は、原則、元に戻すことができません。ただし、次の
preference を使用して、元に戻せるように設定することもできます (
自動リストア機能、`config.xml` の最上位の `<widget>` 要素内に追加 )。

{{<highlight xml>}}
<preference name="cordova-custom-config-autorestore" value="true" />
{{</highlight>}}

peference を使用したカスタマイズ設定
------------------------------------

preference は、`config.xml` ファイル内で、`<preference>`
要素を使用し設定します。

{{<highlight xml>}}
<preference name="android-launchMode" value="singleTop" />
{{</highlight>}}

preference を設定する場合には、次の点に、注意が必要です。

1.  `<platform>` 要素のブロック 「 外 」 に置かれた preference
    は、すべてのプラットフォームに対して適用されます。
2.  `<platform>` 要素のブロック 「 内 」 に置かれた preference
    は、指定されているプラットフォームに対してのみ、適用されます。
3.  platform 要素のブロック内に置かれている preference
    は、置かれていないものより、優先されます。
4.  特定のプラットフォーム向けの preference
    は、プラットフォーム名が指定された `<platform>` 要素 ( 例 :
    name="ios-somepref" ) のブロック内に置きます。

config-file を使用したカスタマイズ設定
--------------------------------------

`<config-file>`
ブロックを使用すれば、プラットフォーム別のカスタマイズ設定 ( 群 )
を、ひとまとめにして定義できます ( `config.xml` 内
)。適用先となるファイルでは、これらのカスタマイズ設定は、XML
のサブツリーとして挿入されます。

config-file の設定時には、次の点に注意が必要です。

1.  `<config-file>` 要素は、`<platform>`
    要素のブロック内に置きます。これ以外の場合、設定は無視されます。
2.  config-file 要素の `target` 属性には、更新対象のファイルを指定します
    (`AndroidManifest.xml` または `*-Info.plist`)。
3.  config-file の `parent` 属性には、親となる要素 ( Android
    の場合、`AndroidManifest.xml` 内 )、または、親となる key ( iOS
    の場合、`*-Info.plist` 内 )
    を指定します。この親の子要素、または、key の value
    として、設定内容が挿入されます。
4.  `<config-file>` 要素に指定された target ( ファイル ) と parent (
    ファイル内の位置 )
    の組み合わせを使用して、カスタマイズ設定の適用場所を指定します。
5.  同一の target と parent 属性が設定された config-file
    が複数ある場合、最後の config-file が適用されます。
6.  config-file 内に定義された要素 (
    ファイル、適用する箇所、適用する内容 )
    を使用して、適用先ファイルの内容が上書きされます (
    または、指定された内容が追加されます )。
7.  config-file
    内に定義されている要素が重複している場合、最後に定義されている要素が適用されます。ただし、`<uses-permission>`
    要素のように、`name` 属性の設定で一意に識別できる場合を除きます。

Android
-------

Android では、このプラグインを使用してカスタマイズできる対象は、現在、`platforms/android/AndroidManifest.xml`
内の設定だけです。Manifest ファイル内の詳細は、[アプリ マニフェスト ( 外部サイト )](http://developer.android.com/guide/topics/manifest/manifest-intro.html)
をご確認ください。なお、Android 向けの設定は、`config.xml` ファイルの `<platform name=\"android\">` ブロック内に置きます。

### Android 向けの preference の設定方法

`config.xml` 内の `<preference>` 要素を使用して、`AndroidManifest.xml`
内の要素に、指定した属性を反映させます。たとえば、`config.xml`
に、次の要素を追加すると...

{{<highlight xml>}}
<preference name="android-manifest/@android:hardwareAccelerated" value="false" />
{{</highlight>}}

`AndroidManifest.xml` には、次の設定が追加されます。

{{<highlight xml>}}
<manifest android:hardwareAccelerated="false">
{{</highlight>}}

`AndroidManifest.xml`
内に定義されているデフォルトの設定を削除する場合には、`<preference>`
要素に `delete=\"true\"` を設定します。たとえば、`config.xml`
に次の設定を追加した場合、 `AndroidManifest.xml` 内の
`<uses-permission android:name=\"android.permission.WRITE_CONTACTS\" />`
を削除できます。

{{<highlight xml>}}
<preference name="android-manifest/uses-permission/[@android:name='android.permission.WRITE_CONTACTS']/@android:name" delete="true" />
{{</highlight>}}

#### 名前空間の設定方法

{{<note>}}
<code>config.xml</code> の preference に <code>android:</code> ( 名前空間を指定 )
を指定する場合、 <code>&lt;widget&gt;</code> 要素 ( ルート要素 ) にも、andorid
の名前空間を設定する必要があります。
{{</note>}}

名前空間を指定する属性は、次のように記述します。

{{<highlight xml>}}
xmlns:android="http://schemas.android.com/apk/res/android"
{{</highlight>}}

`<widget>` 要素は、次のように記述します。

{{<highlight xml>}}
<widget
    id="com.my.app"
    version="0.0.1"
    xmlns="http://www.w3.org/ns/widgets"
    xmlns:cdv="http://cordova.apache.org/ns/1.0"
    xmlns:android="http://schemas.android.com/apk/res/android">
{{</highlight>}}

#### XPath peference を使用したカスタマイズ設定

Android のマニフェストに適用する preference には、XPath
も使用できます。preference の name に、要素と属性を XPath
形式で指定して、カスタマイズ設定の適用先を示します。具体的には、preference
の name に指定する値に、`android-manifest`
を先頭に付け、その後ろに、XPath 形式で要素と属性を指定して、value
の値の適用先となる場所を示します。次に例を記します。

{{<highlight xml>}}
<preference name="android-manifest/application/activity/@android:launchMode" value="singleTask" />
{{</highlight>}}

上記の preference を適用すると、次のように、`launchMode`
属性に、`singleTask` が設定されます。

{{<highlight xml>}}
<activity android:launchMode="singleTask">
{{</highlight>}}

manifest 内に、複数の activity が存在する場合、XPath
の記述内にも、activity の name を指定します。次に例を記します。

{{<highlight xml>}}
<preference name="android-manifest/application/activity[@android:name='MainActivity']/@android:launchMode" value="singleTask" />
{{</highlight>}}

{{<note>}}
Cordova 4.2.0 以前のバージョンでは、プロジェクトの作成時、activity の
name には、 <code>CordovaApp</code> が使用されていました。Cordova 4.3.0
以降では、 <code>MainActivity</code> となっています。
{{</note>}}

`<manifest>` 要素 ( ルート要素 )
内にある属性を適用先とする場合、要素名は省略して、属性だけを指定します。
例 :

{{<highlight xml>}}
<preference name="android-manifest/@android:installLocation" value="auto" />
{{</highlight>}}

### Android 向けの config-file ブロックの設定方法

`AndroidManifest.xml`
に適用するカスタマイズ設定が複数ある場合は、`<config-file>`
を使用して定義します。これらのカスタマイズ設定は、`AndroidManifest.xml`
ファイル内で、XML のサブツリーに変換されます。`<config-file>`
内の要素は、parent で指定されている要素の下に挿入されます。

`<config-file>` 要素には、次の 2 種類の属性を指定できます。

1.  `target`: `AndroidManifest.xml` を常に指定します。
2.  `parent`: XPath の記法を使用して、`AndroidManifest.xml`
    内の親となる要素を指定します。この要素下に、XML
    のサブツリーとして、指定された値が挿入されます。

    -   `<manifest>` 要素 ( ルート要素 ) にブロックを挿入する場合には、`parent="/*"` を使用します。
    -   `<manifest>` の子孫ノード下にブロックを挿入する場合には、`./` 形式の記法も使用できます。たとえば、`parent="./application/activity"` を指定した場合、`/manifest/application/activity` 下に、ブロックが挿入されます。

例 :

{{<highlight xml>}}
<config-file target="AndroidManifest.xml" parent="./application">
    <some-element />
</config-file>
{{</highlight>}}

`AndroidManifest.xml` 内では、次のようになります。

{{<highlight xml>}}
<manifest ...>
    <application ...>
        <some-element />
    </application>
</manifest>
{{</highlight>}}

{{<note>}}
parent 要素に指定された値が XML のサブツリー側に定義されている値と重複する場合、既存の要素は上書きされます。
{{</note>}}

例 :

{{<highlight xml>}}
<config-file target="AndroidManifest.xml">
    <application android:name="MyApp" />
</config-file>
{{</highlight>}}

上記の内容を使用すれば、既存の `<application>`
要素が書き換えられます。なお、このような場合には、preference
の使用を推奨します。

{{<highlight xml>}}
<preference name="android-manifest/application/@android:name" value="MyApp" />
{{</highlight>}}

### 例

Android 向けの設定のサンプルを、次に記します ( `config.xml` ファイル内 )。

{{<highlight xml>}}
<platform name="android">
    <!-- custom preferences examples -->
    <preference name="android-manifest/application/activity/@android:windowSoftInputMode" value="stateVisible" />
    <preference name="android-manifest/@android:installLocation" value="auto" />
    <preference name="android-manifest/application/@android:hardwareAccelerated" value="false" />
    <preference name="android-manifest/@android:hardwareAccelerated" value="false" />
    <preference name="android-manifest/application/activity/@android:configChanges" value="orientation" />
    <preference name="android-manifest/application/activity/@android:theme" value="@android:style/Theme.Material" />

    <!-- specify activity name -->
    <preference name="android-manifest/application/activity[@android:name='MainActivity']/@android:launchMode" value="singleTask" />


    <!-- These preferences are actually available in Cordova by default although not currently documented -->
    <preference name="android-minSdkVersion" value="10" />
    <preference name="android-maxSdkVersion" value="22" />
    <preference name="android-targetSdkVersion" value="21" />

    <!-- Or you can use a config-file element for them -->
    <config-file target="AndroidManifest.xml" parent="/*">
        <uses-sdk android:maxSdkVersion="22" android:minSdkVersion="10" android:targetSdkVersion="21" />
    </config-file>


    <!-- custom config example -->
     <config-file target="AndroidManifest.xml" parent="/*">
        <supports-screens
            android:xlargeScreens="false"
            android:largeScreens="false"
            android:smallScreens="false" />

        <uses-permission android:name="android.permission.READ_CONTACTS" android:maxSdkVersion="15" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
    </config-file>
</platform>
{{</highlight>}}

iOS
---

iOS では、このプラグインを使用してカスタマイズできる対象は、現在、プロジェクトの
plist ( `*-Info.plist`、config-file ブロックを使用 )、および、設定情報 (
`project.pbxproj`、preference 要素を使用 ) です。なお、iOS
向けの設定は、 `config.xml` ファイルの `<platform name=\"ios\">`
ブロック内に置きます。

### iOS 向けの preference の設定方法

`config.xml` の `<preference>` 要素を使用して、 `*-Info.plist`
の設定を更新します。preference は、 `<preference name="ios-SOME_BLOCK_TYPE-SOME_KEY" value="SOME_VALUE" />`
の形式で設定します。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-ENABLE_BITCODE" value="NO" />
{{</highlight>}}

#### ビルド設定用の preferences

ビルド設定は、`project.pbxproj` 内の `XCBuildConfiguration`
を使用して、現在行っています。使用する key/value
に関しては、制限はありません。

`XCBuildConfiguration` ブロック内にすでに存在する key
を指定した場合、key の value は上書きされます。指定した key がどの
`XCBuildConfiguration` にも存在しない場合、指定した value とともに、各
`XCBuildConfiguration` に key が追加されます。

デフォルトでは、"Release" と "Debug" の両方の `XCBuildConfiguration`
ブロックに value が適用されますが、`config.xml` の `<preference>`
要素に、`buildType`
属性を追加すれば、ビルドの種類を指定でき、ブロックを絞り込めます。この属性に指定できる値は、`debug`
または `release` です。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />
{{</highlight>}}

デフォルトでは、`XCBuildConfiguration` への挿入時、key と value
は、ダブルクォーテーションで囲われます。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />
{{</highlight>}}

`project.pbxproj` 内では、次のようになります。

{{<highlight xml>}}
"IPHONEOS_DEPLOYMENT_TARGET" = "7.0";
{{</highlight>}}

クォーテーションの付記方法 ( 上記がデフォルトの仕様 ) は、`<preference>`
の `quote` 属性を使用して、変更できます。この属性には、次の値を使用できます。

-   `none`: key と value
    のいずれにも、クォーテーションは付記されません。
-   `key`: key だけに、クォーテーションが付記されます。
-   `value`: value だけに、クォーテーションが付記されます。
-   `both`: key と value のいずれにも、クォーテーションが付記されます。

例 :

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" quote="none" />
{{</highlight>}}

`project.pbxproj` 内では、次のようになります。

{{<highlight xml>}}
IPHONEOS_DEPLOYMENT_TARGET = 7.0;
{{</highlight>}}

#### .xcconfig ファイル

Cordova では、`/platforms/ios/cordova/` の `.xcconfig`
ファイルを使用して、Xcode プロジェクトの `project.pbxproj`
ファイル内の設定を上書きします (
ビルドの種類に応じて、適用先の場所が変わります )。また、`build.xcconfig`
の内容は、`build-debug.xcconfig` または `build-release.xcconfig`
を適用して、上書きされます (
どちらのファイルが使用されるかは、指定したビルドの種類で決まります )。

カスタマイズ設定を適用するとき、プラグインは、最初に、buildType
属性を参照して、次に、対応する `.xcconfig`
ファイルにアクセスして、対象の設定値を確認します。

-   buildType 属性が `debug` の場合には
    `build-debug.xcconfig`、`release` の場合には
    `build-release.xcconfig` にアクセスします。
-   buildType が指定されていない場合、または、`none`
    に設定されている場合、`build.xcconfig` にアクセスします。

`config.xml` 内に記述されている preference の name
と一致する設定が、`.xcconfig`
ファイル内に存在する場合、デフォルトでは、`config.xml`
側に記述されている値を使用して、`.xcconfig`
側の値が上書きされます。このような上書き処理を無効にする場合には、`xcconfigEnforce="false"`
を、preference に設定します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-SOME_PREFERENCE" value="Some value" buildType="debug" xcconfigEnforce="false" />
{{</highlight>}}

preference に設定した値が、対応する `.xcconfig`
ファイル内に存在しない場合は、`xcconfigEnforce="true"`
を使用すれば、強制的に、ファイルに設定を追加できます。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-SOME_PREFERENCE" value="Some value" buildType="debug" xcconfigEnforce="true" />
{{</highlight>}}

更新された `.xcconfig` ファイルのバックアップが、 `plugins/cordova-custom-config/backup/ios`
下に作成されます。デフォルトでは、 `prepare` コマンドを実行するたびに、バックアップファイルが適用されます。この自動リストア機能を無効にする場合には、 `<preference name="cordova-custom-config-autorestore" value="false" />` に設定します ( `config.xml` 内 )。

なお、`.xcconfig` の更新時、`quote`
属性は無視されます。よって、preference で指定している name と value
を使用して、`.xcconfig` を更新しても、クォーテーションは付記されません。

#### CODE_SIGN_IDENTITY 設定用の preference

Cordova では、リリースビルド向けに使用される CODE_SIGN_IDENTITY
は、build-release.xcconfig
に置かれます。一方、デバッグビルド向けでは、`build.xcconfig`
に置かれます。

`buildType="release"` を指定して、CODE_SIGN_IDENTITY 用の preference
を設定した場合 ( `config.xml` 内 )、 `build-release.xcconfig`
内に記述されているデフォルト設定が上書きされます。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Release Profile (A1B2C3D4)" buildType="release" />
{{</highlight>}}

`buildType="debug"` を指定して、CODE\_SIGN\_IDENTITY 用の preference
を設定した場合 ( `config.xml` 内 )、 `build.xcconfig`
内に記述されているデフォルト設定が上書きされます。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Debug Profile (A1B2C3D4)" buildType="debug" />
{{</highlight>}}

上記のような上書き処理を無効にする場合には、 `xcconfigEnforce="false"` を設定します。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Release Profile (A1B2C3D4)" buildType="release" xcconfigEnforce="false" />
{{</highlight>}}

`buildType="debug"` に設定した場合には、`xcconfigEnforce="true"`
にして、`build.xcconfig`
内のデフォルト設定を上書きするか、または、`build.xcconfig`
ではなく、`build-debug.xcconfig` 内に CODE\_SIGN\_IDENTITY
を新規に挿入することもできます。ただし、後者のような処理をしても、`build-debug.xcconfig`
の設定を使用して、`build.xcconfig`
内の設定が後から更新されるため、結局は、`build.xcconfig`
内のデフォルト設定は上書きされます。次に例を記します。

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Debug Profile (A1B2C3D4)" buildType="debug" xcconfigEnforce="true" />
{{</highlight>}}

### iOS 向けの config-file ブロックの設定方法

`<config-file>`
要素を使用してカスタマイズできる対象は、現在、プロジェクトの `.plist`
ファイル (`platforms/ios/{PROJECT_NAME}/{PROJECT_NAME}-Info.plist`)
だけです。次の 3 種類の属性を使用できます。

1.  `target`: `*-Info.plist` を指定します。
2.  `platform`: `ios` を指定します。
3.  `parent`: カスタマイズ設定を適用する key 名を指定します。

例 :

{{<highlight xml>}}
<config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
{{</highlight>}}

上記の内容を適用した場合、`{PROJECT_NAME}-Info.plist`
は、次のようになります。

{{<highlight xml>}}
<plist version="1.0">
    <dict>
        <key>NSLocationAlwaysUsageDescription</key>
    </dict>
</plist>
{{</highlight>}}

挿入する value には、`<config-file>`
要素内に記述されている子要素が使用されます。`.plist`
ファイル内の対応する `<key>` 下に、子要素の内容が置かれます。

例 :

{{<highlight xml>}}
<config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
    <string>
        This app requires constant access to your location in order to track your position, even when the screen is off.
    </string>
</config-file>
{{</highlight>}}

`plist` ファイルでは、次のようになります。

{{<highlight xml>}}
<key>
    NSLocationAlwaysUsageDescription
</key>
<string>
    This app requires constant access to your location in order to track your position, even when the screen is off.
</string>
{{</highlight>}}

#### 例

iOS 向けの設定のサンプルを、次に記します ( `config.xml` ファイル内 )。

{{<highlight xml>}}
<platform name="ios">

    <!-- Set ENABLE_BITCODE to YES in XCode project file override NO value in /ios/cordova/build.xcconfig -->
    <preference name="ios-XCBuildConfiguration-ENABLE_BITCODE" value="YES" />

    <!-- Set deploy target SDKs for release and debug builds -->
    <preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="9.1" buildType="debug" quote="none" />
    <preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />

    <!-- Custom code signing profiles (overriding those in /ios/cordova/*.xcconfig -->
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" xcconfigEnforce="true" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos*]" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos9.1]" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" xcconfigEnforce="false" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos*]" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos9.1]" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" />

    <!-- Set orientation on iPhone -->
    <config-file platform="ios" target="*-Info.plist" parent="UISupportedInterfaceOrientations">
        <array>
            <string>UIInterfaceOrientationPortrait</string>
            <string>UIInterfaceOrientationPortraitUpsideDown</string>
        </array>
    </config-file>

    <!-- Set orientation on iPad -->
    <config-file platform="ios" target="*-Info.plist" parent="UISupportedInterfaceOrientations~ipad">
        <array>
            <string>UIInterfaceOrientationPortrait</string>
            <string>UIInterfaceOrientationPortraitUpsideDown</string>
        </array>
    </config-file>

    <!-- Set background location mode -->
    <config-file platform="ios" target="*-Info.plist" parent="UIBackgroundModes">
        <array>
            <string>location</string>
        </array>
    </config-file>

    <!-- Set message displayed when app requests constant location updates -->
    <config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
        <string>This app requires constant access to your location in order to track your position, even when the screen is off.</string>
    </config-file>

    <!-- Set message displayed when app requests foreground location updates -->
    <config-file platform="ios" target="*-Info.plist" parent="NSLocationWhenInUseUsageDescription">
        <string>This app will now only track your location when the screen is on and the app is displayed.</string>
    </config-file>

    <!-- Allow arbitrary loading of resources over HTTP on iOS9 -->
    <config-file platform="ios" target="*-Info.plist" parent="NSAppTransportSecurity">
        <dict>
            <key>NSAllowsArbitraryLoads</key>
            <true/>
        </dict>
    </config-file>
</platform>
{{</highlight>}}

## プラグインの制御 ( preference を使用 )

このプラグインでは、プラグイン自体の動作をカスタマイズするため、数種類の
preference を用意しています。各 preference の name には、他の name
との競合を避けるため、 `cordova-custom-config`
が先頭に付記されています。次に例を記します。

{{<highlight xml>}}
<preference name="cordova-custom-config-autorestore" value="true" />
{{</highlight>}}

次の preference が使用できます。

-   `cordova-custom-config-autorestore`: ( デフォルトでは、`false` )
    `true` に設定された場合、変更前の設定情報にロールバックします (
    ロールバックに使用される情報は、このプラグインのインストール時にバックアップされたものです
    )。
     
-   `cordova-custom-config-stoponerror`: ( デフォルトでは、`false` )
    `prepare` コマンドの実行時、この値が `true`
    に設定されている場合、エラーが発生したときには (
    指定されたプラットフォームの設定ファイルの更新時 )、`prepare`
    処理が終了します。false
    の場合、エラーが発生したときでも、設定情報の更新および `prepare`
    処理は、継続して行われます ( エラーがログに出力されます )。

