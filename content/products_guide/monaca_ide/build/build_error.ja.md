---
title: 一般的なビルドとアップロードエラー
weight: 40
---

ビルドまたは iTunes Connect
にアップロードする際の一般的なエラーのリストを次に示します。

minSdkVersion
-------------

{{< highlight bash >}}
minSdkVersion 14 cannot be smaller than version 16 declared in library ["library name"]
{{< /highlight >}}

プロジェクトの標準設定と異なる API レベルが必要な Cordova
プラグインを使用する場合があります。この場合、プロジェクトの最小 API
レベルの設定は 14（`minSdkVersion = 14`）になります。Cordova
プラグインでは、API レベル 16 以上が必要なため、Cordova
プラグインが要求している API レベル より低い `android-minSdkVersion`
が設定されています。

このエラーの解決する場合は、下記のように `config.xml` ファイルに
`minSdkVersion` の設定を行います。

{{< highlight xml >}}
<preference name="android-minSdkVersion" value="16" />
{{< /highlight >}}

Provisioning Profile
--------------------

{{<highlight bash >}}
Provisioning profile "For Debug Build" doesn't include the aps-environment entitlement.
{{</highlight>}}

Cordova 6.5 のプロジェクトを使用している場合、 `MomacaBackend`
プラグイン または `NCMB` プラグイン」を使用する場合は、ビルド時に iOS
プッシュ通知に必要な設定を行う必要があります。

このエラーを解決する場合は、下記のプッシュ通知に必要な設定を行う必要があります。

-   プッシュ通知用のApp ID
-   プッシュ通知用の証明書
-   プッシュ通知用のプロビジョニングプロファイル

{{<highlight bash>}}
Provisioning profile "profile_xxx" has app ID "com.example.xxx", which does not match the bundle ID "com.example.zzz".
{{</highlight>}}

対象プロジェクトに設定されている App ID とバンドル ID
が一致していません。App ID
の設定がプロビジョニングプロファイルの設定と一致しているか確認してください。

{{<highlight bash>}}
Code Sign error: No matching provisioning profiles found
{{</highlight>}}

iOSビルド設定に問題がある可能性があります。ビルド時に使用している「App
ID」「証明書」「プロビジョニングプロファイル」に問題がないか確認してください。

{{<highlight bash>}}
Error code 65 for command: xcodebuild 
{{</highlight>}}

プロビジョニングプロファイルに設定されているバンドルIDとプロジェクトのApp
IDが一致していない等の
iOSビルド設定に問題がある可能性があります。ビルド時に使用している「App
ID」「証明書」「プロビジョニングプロファイル」に問題がないか確認してください。

スプラッシュ スクリーン
-----------------------

{{<highlight bash>}}
AAPT: libpng error: Not a PNG file
{{</highlight>}}

このエラーは、次のようなスプラッシュ画面イメージファイルに関連するエラーです。

-   PNG形式以外のファイル形式が使用されている可能性があります。現在、Monaca
    ではスプラッシュ画面イメージとして PNG
    形式ファイルのみがサポートされています。
-   スプラッシュ画像ファイルに問題がある可能性があります。
-   9-patch 形式の画像を使用している場合は、9-patch
    画像に問題がないか確認してください。

プロジェクト ファイル
---------------------

{{<highlight bash>}}
Process 'command '/data/android-sdk/build-tools/23.0.3/aapt'' finished with non-zero exit value 1
{{</highlight>}}

このエラーは、プロジェクトファイルに無効なファイル名が設定されている可能性があります。
対象プロジェクト内のリソースファイル名に日本語等の 2
バイト文字や特殊文字が使用されていないか確認してください。

Android キーストア
------------------

{{<highlight bash>}}
Failed to read key keyname from store "/tmp/monaca/xxxxxxxxxxx/output/etc/keystore.private": Cannot recover key
{{</highlight>}}

キーストアからキー名を読み取ることができませんでした。
以下を確認してください。

-   Androidキーストア設定で、正しいキーストアが設定されているか確認してください。
-   ビルドの際、選択したエイリアスのパスワードが、正しく入力されているか確認してください。

Crosswalk プラグイン
--------------------

{{<highlight bash>}}
Build Error: Error: App File not found. null
{{</highlight>}}

このエラーは、Cordova 6.2 プロジェクトで `Crosswalk WebView Engine`
プラグイン v2.2.0 以降が有効になっている可能性があります。 Cordova 6.2
プロジェクトで `Crosswalk WebView Engine`
プラグインを使用している場合は、 `v2.1.0` 以下を使用してください。

Cordova 6.2 プロジェクトでは、 `Crosswalk WebView Engine`
プラグインの以下の設定で正常にビルドができることを確認しています。

1.  プラグインバージョン: 1.7.2 / Crosswalk のバージョン (標準設定)
2.  プラグインバージョン: 2.1.0 / Crosswalk のバージョン: 21.51.546.7

iTunes Connect
--------------

{{<highlight bash>}}
Unable to validate your application. Your Apple ID or password was entered incorrectly.
{{</highlight>}}

iTunes Connect へのアップロード時に使用される`Apple ID` または
`Password` が、正しく入力されていない可能性があります。 `Apple ID` と
`Password` が、正しく入力されている確認してください。

{{<highlight bash>}}
Unable to validate your application. Please sign in with an app-specific password. You can create one at appleid.apple.com.
{{</highlight>}}

iTunes Connect へアップロードする際に使用している「Apple ID」が、2
ファクタ認証を利用している場合は、App
用パスワードをお試しください。詳しくは [App
用パスワードを使う](https://support.apple.com/ja-jp/HT204397)
を参照してください。

{{<highlight bash>}}
No suitable application records were found. Verify your bundle identifier 'com.example.xxx' is correct.
{{</highlight>}}

iTunes Connect
に「com.example.xxx」アプリが登録されているか確認してください。

{{<highlight bash>}}
There already exists a binary upload with build version '1.0.0' for train '1.0.0'
{{</highlight>}}

iTunes Connect
に同じビルドバージョンのアプリがあります。対象プロジェクトのビルドバージョンを確認してください。

{{<highlight bash>}}
The value for key CFBundleShortVersionString [0.0.1] in the Info.plist file must contain a higher version than that of the previously approved version [1.0.0]
{{</highlight>}}

対象アプリのバージョン番号は、最後に認定されたアプリよりも低くなっています。
より高いバージョン番号を設定してビルドを行なってください。

{{<highlight bash>}}
This bundle does not support one or more of the devices supported by the previous app. This bundle does not support one or more of the devices supported by the previous app version. Your app update must continue to support all devices previously supported. You declare supported devices in Xcode with the Targeted Device Family build setting. 
{{</highlight>}}

iOS
アプリを更新する場合、サポートするデバイスの数を減らすことはできません。
iOS アプリ設定の対象デバイス設定を確認してください。
