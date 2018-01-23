---
title: カメラ操作 プラグイン
weight: 20
---

テスト環境 ( バージョン番号 ) : [2.2.0](https://github.com/apache/cordova-plugin-camera/releases/tag/2.2.0)

{{<note>}}
このプラグインの詳細は、{{<link title="こちら ( GitHub )" href="https://github.com/apache/cordova-plugin-camera">}} をご確認ください。
{{</note>}}

このプラグインでは、グローバルオブジェクト 「 `navigator.camera` 」 の API を使用し、システム側の画像ライブラリーからの画像の取得、および、写真撮影を行います。

このオブジェクトは、グローバルスコープ ( navigator ) に属していますが、使用できるのは、 `deviceready` イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
{{</highlight>}}

## プラグイン ID

{{<highlight javascript>}}
cordova-plugin-camera
{{</highlight>}}

## プラグインの追加方法 ( Monaca 上での処理 )

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`Camera` プラグインを [有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

## iOS 特有の動作

iOS 10以降は、`info.plist` に `NSCameraUsageDescription` と `NSPhotoLibraryUsageDescription` を追加する必要があります。

- `NSCameraUsageDescription` には、アプリがユーザーのカメラにアクセスする理由を記述します。
- `NSPhotoLibraryUsageDescription` には、アプリがユーザーの写真ライブラリにアクセスする理由を記述します。

システムがアクセス許可をユーザに求めた際、この文字列がダイアログボックスの一部として表示されます。

このエントリを追加するには、プラグインのインストール時に次の変数を渡すことができます。

-   `CAMERA_USAGE_DESCRIPTION` : `NSCameraUsageDescription`
-   `PHOTOLIBRARY_USAGE_DESCRIPTION` : `NSPhotoLibraryUsageDescription`

例 :

{{<highlight bash>}}
cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="your usage message" --variable PHOTOLIBRARY_USAGE_DESCRIPTION="your usage message"
{{</highlight>}}

変数を渡さない場合は、プラグインは空の文字列を値として追加します。

## API の解説

-   [camera](#camera)
    -   [.getPicture(successCallback, errorCallback, options)](#camera-getpicture-successcallback-errorcallback-options)
    -   [.cleanup()](#camera-cleanup)
    -   [.onError](#camera-onerror-関数) : 関数
    -   [.onSuccess](#camera-onsuccess-関数) : 関数
    -   [.CameraOptions](#camera-cameraoptions-オブジェクト) : オブジェクト
-   [Camera](#camera-1)
    -   [.DestinationType](#camera-destinationtype-列挙型) : 列挙型
    -   [.EncodingType](#camera-encodingtype-列挙型) : 列挙型
    -   [.MediaType](#camera-mediatype-列挙型) : 列挙型
    -   [.PictureSourceType](#camera-picturesourcetype-列挙型) : 列挙型
    -   [.PopoverArrowDirection](#camera-popoverarrowdirection-列挙型) : 列挙型
    -   [.Direction](#camera-direction-列挙型) : 列挙型
-   [CameraPopoverHandle](#camerapopoverhandle)
-   [CameraPopoverOptions](#camerapopoveroptions)

###  camera

####  camera.getPicture(successCallback, errorCallback, options)

カメラでの写真撮影、または、端末の画像ギャラリーから、画像を取得します。画像は、Base64 形式の `文字列` として、または、画像ファイルを指す `URI` として、成功時のコールバック関数に引き渡されます。

`camera.getPicture` 関数では、端末にインストールされている標準のカメラアプリを起動させます ( `Camera.sourceType` が [Camera.PictureSourceType.CAMERA](#camera-picturesourcetype-列挙型) に設定されている場合の動作 )。写真撮影後は、カメラアプリが終了し、使用していたアプリ ( カメラアプリの起動前になんらかのアプリを使用していた場合 ) が開きます。

Camera.sourceType` が `Camera.PictureSourceType.PHOTOLIBRARY`、または、`Camera.PictureSourceType.SAVEDPHOTOALBUM` の場合、画像選択用のダイアログが表示され、既存の画像があれば、その中から選択できます。

戻り値は、[cameraSuccess](#camera-onsuccess-関数) コールバック関数に渡されます。戻り値は、 `cameraOptions` の設定に応じて、次のいずれかの形式で返されます。

- `文字列` : Base64 形式でエンコードされた写真画像
- `文字列` : 画像ファイルの保存場所 ( ローカルのストレージ内、デフォルトはこちら )

上記の値 ( エンコードされた画像、または、URI ) を使用して、次のような、さまざまな処理ができます。

- `<img>` タグ内への画像のレンダリング ( このページ内にサンプルがあります )
- ローカルへのデータの保存 ( `LocalStorage`[Lawnchair](http://brianleroux.github.com/lawnchair/) など )
- 外部サーバーへのデータの送信

{{<note>}}
最新の端末で撮影した写真の解像度は高くなります。端末のギャラリーから取得する画像は、 <code>quality</code> パラメーターで画質を指定しても、解像度の低い画像に変換されません。メモリー問題を回避するためには、 <code>Camera.destinationType</code> を、 <code>DATA_URL</code> ではなく、 <code>FILE_URI</code> に設定します。
{{</note>}}

**サポート対象のプラットフォーム**

-   Android
-   iOS
-   Windows

例は [こちら](#camera-getpicture-の補足)。 各 OS 特有の動作は [こちら](#android-特有の動作)。

[camera](#camera) の詳細を次に記します。

パラメーター | 型 | 解説
------|------|--------------------
`successCallback` | 関数 | [onSuccess](#camera-onsuccess-関数)
`errorCallback` | 関数 | [onError](#camera-onerror-関数)
`options` | JSON オブジェクト | [CameraOptions](#camera-cameraoptions-オブジェクト)

**例**

{{<highlight javascript>}}
navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
{{</highlight>}}

####  camera.cleanup()

[camera.getPicture](#camera-getpicture-successcallback-errorcallback-options) を呼び出した後に取得し、一時的なストレージに保存されている処理前の画像ファイルを削除します。`Camera.sourceType` の値と `Camera.PictureSourceType.CAMERA` が等しく、また、 `Camera.destinationType` が `Camera.DestinationType.FILE_URI` と等しい場合のみ有効です。

**サポート対象のプラットフォーム**

-   iOS


[camera](#camera) の詳細を次に記します。

**例**

{{<highlight javascript>}}
navigator.camera.cleanup(onSuccess, onFail);

function onSuccess() {
    console.log("Camera cleanup success.")
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

####  camera.onError : 関数

エラーメッセージを出力するコールバック関数です。

[camera](#camera) の詳細を次に記します。

パラメーター | 型 | 解説
------|------|--------------
`message` | 文字列 | 端末のネイティブコード側で message が出力され、送られてきます。

####  camera.onSuccess : 関数

画像データを返すコールバック関数です。

[camera](#camera) の詳細を次に記します。

パラメーター | 型 | 解説
------|------|--------------
`imageData` | 文字列 | 画像データは Base64 エンコード形式です。または、画像ファイルを指し示す File URL が使用されます。どちらになるかは、 [cameraOptions](#camera-cameraoptions-オブジェクト) の設定次第です。

**例**

{{<highlight javascript>}}
// Show image
//
function cameraCallback(imageData) {
   var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageData;
}
{{</highlight>}}

####  camera.CameraOptions : オブジェクト

カメラの設定をカスタマイズするオプションのパラメーターです。

- [各 OS 特有の動作](#cameraoptions-の補足)

[camera](#camera) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|------------------------
`quality` | 数値 | `50` | 保存時の画像の画質です。0 から 100 の間で設定します。100 に設定した場合、フル解像度 ( ファイル圧縮によるロスはなし ) となります。なお、カメラ側の解像度に関する情報は取得できません。
`destinationType` | [DestinationType](#camera-destinationtype-列挙型) | `FILE_URI` | 戻り値の形式を選択します。
`sourceType` | [PictureSourceType](#camera-picturesourcetype-列挙型) | `CAMERA` | 画像の取得先を設定します。
`allowEdit` | 真偽値 | `true` | 画像の選択前に、簡単な編集を許可します。
`encodingType` | [EncodingType](#camera-encodingtype-列挙型) | `JPEG` | 返される画像ファイルのエンコード方式を選択します。
`targetWidth` | 数値 |  |	画像を拡大・縮小するための幅を、ピクセルで指定します。 `targetHeight` と共に使用します。アスペクト比は、一定に保持されます。
`targetHeight` | 数値	| |	画像を拡大・縮小するための縦の長さを、ピクセルで指定します。 `targetWidth` と共に使用します。アスペクト比は、一定に保持されます。
`mediaType` | [MediaType](#camera-mediatype-列挙型) | `PICTURE` | 画像の取得元のメディアの種類を指定します。 `PictureSourceType` に `PHOTOLIBRARY` または `SAVEDPHOTOALBUM` が指定されている場合のみ、この設定が有効です。
`correctOrientation` | 真偽値 |  | キャプチャー時の端末の向きになるように、画像を回転させます。
`saveToPhotoAlbum` | 真偽値 |  | キャプチャー後、端末のフォトアルバムに、画像を保存します。
`popoverOptions` | [CameraPopoverOptions](#camerapopoveroptions) |  | iOS 専用のオプションです。iPad でのポップオーバー ( popover ) の位置を指定します。
`cameraDirection` | [Direction](#camera-direction-列挙型) | `BACK` | 使用するカメラを選択します ( 前面または背面のカメラ )

###  Camera

####  Camera.DestinationType : 列挙型

`Camera.getPicture` の出力形式を定義します。

{{<note>}}
iOSでは、 <code>DestinationType.NATIVE_URI</code> と <code>PictureSourceType.PHOTOLIBRARY</code> または <code>PictureSourceType.SAVEDPHOTOALBUM</code> を渡した場合、仕様により画像の変更（サイズ変更、品質の変更、切り取りなど）が無効になります。
{{</note>}}

[Camera](#camera-1) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|---|------------|--------------------
`DATA_URL` | 数値 | `0` | base64でエンコードされた文字列を返します。 `DATA_URL` は、多くのメモリを消費するため、アプリがクラッシュしたり、メモリ不足の原因となる可能性があります。 可能であれば、`FILE_URI` または `NATIVE_URI` を使用します。
`FILE_URI` | 数値 | `1` | File URI を返します ( Android では、 `content://media/external/images/media/2` )
`NATIVE_URI` | 数値 | `2` | ネイティブ側を指す URI を返します ( iOS では、 `asset-library://` )

####  Camera.EncodingType : 列挙型

[Camera](#camera-1) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|--------------------
`JPEG` | 数値 | `0` | JPEG 形式の画像を返します。
`PNG` | 数値 | `1` | PNG 形式の画像を返します。

####  Camera.MediaType : 列挙型

[Camera](#camera-1) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|--------------------
`PICTURE` | 数値 | `0` | 静止画を選択できます。こちらがデフォルト設定となります。戻り値は、 `DestinationType` で設定されている形式です。
`VIDEO` | 数値 | `1` | ビデオを選択できます。戻り値は、URL です。
`ALLMEDIA` | 数値 | `2` | メディアの種類を選択できます。


####  Camera.PictureSourceType : 列挙型

`Camera.getPicture` の出力形式を定義します。

{{<note>}}
iOSでは、<code>DestinationType.NATIVE_URI</code> と <code>PictureSourceType.PHOTOLIBRARY</code> または <code>PictureSourceType.SAVEDPHOTOALBUM</code> を渡した場合、仕様により画像の変更（サイズ変更、品質の変更、切り取りなど）が無効になります。
{{</note>}}

[Camera](#camera-1) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|--------------------
`PHOTOLIBRARY` | 数値 | `0` | 写真のライブラリーから画像を選択できます ( Android の `SAVEDPHOTOALBUM` に相当 )。
`CAMERA` | 数値 | `1` | カメラから写真を取得します。
`SAVEDPHOTOALBUM` | 数値 | `2` | カメラロールからのみ画像を選択します（ Android の `PHOTOLIBRARY` に相当 ）。

####  Camera.PopoverArrowDirection : 列挙型

iOS の UIPopoverArrowDirection に相当します。ポップオーバーの矢印の位置を指定します。

[Camera](#camera-1) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 
-----|------|---------
`ARROW_UP` | 数値 | `1`
`ARROW_DOWN`| 数値 | `2`
`ARROW_LEFT` | 数値 | `4`
`ARROW_RIGHT` | 数値 | `8`
`ARROW_ANY` | 数値 | `15`

####  Camera.Direction : 列挙型

[camera](#camera) の詳細を次に記します。

**プロパティー**

名前 | 型 | デフォルト値 | 解説
-----|------|---------|--------------------
`BACK` | 数値 | `0` | 背面のカメラを使用します。
`FRONT` | 数値 | `1` | 前面のカメラを使用します。

###  CameraPopoverOptions

iOS 専用のパラメーターです。iPad のライブラリまたはフォトアルバムから、画像を選択するときのポップオーバー ( popover ) の位置とその矢印の方向を指定するときに使用します。画面のオリエンテーション ( および、矢印の表示位置 ) に合うように、ポップオーバーの大きさが修正される場合もあります。「 オリエンテーションは移り変わること 」 を念頭に置いて、矢印の位置を設定することを推奨します。

パラメーター | 型 | デフォルト値 | 解説
-----|------|---------|--------------------
`[x]` | 数値 | `0` | ポップオーバーを置く画面構成要素上の `ｘ` 座標です ( ピクセル単位 )。
`[y]` | 数値 | `32` |	ポップオーバーを置く画面構成要素上の `y` 座標です ( ピクセル単位 )。
`[width]` | 数値 | `320` | ポップオーバーを置く画面構成要素の幅です ( ピクセル単位 )。
`[height]` | 数値 | `480` | ポップオーバーを置く画面構成要素の高さです ( ピクセル単位 )。
`[arrowDir]` | [PopoverArrowDirection](#camera-popoverarrowdirection-列挙型) | `ARROW_ANY` | ポップオーバーに付く矢印の向きです。

###  CameraPopoverHandle

画像選択用のポップオーバーの処理に使用します。

**サポート対象のプラットフォーム**

-   iOS

**例**

{{<highlight javascript>}}
navigator.camera.getPicture(onSuccess, onFail,
{
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
});

// Reposition the popover if the orientation changes.
window.onorientationchange = function() {
    var cameraPopoverHandle = new CameraPopoverHandle();
    var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
    cameraPopoverHandle.setPosition(cameraPopoverOptions);
}
{{</highlight>}}

### camera.getPicture の補足

####  例

写真撮影および画像ファイルの保存場所を取得します。

{{<highlight javascript>}}
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

写真の撮影時、および、写真 ( Base64 エンコード形式の画像 ) の取得時に使用します。

{{<highlight javascript>}}
/**
 * Warning: Using DATA_URL is not recommended! The DATA_URL destination
 * type is very memory intensive, even with a low quality setting. Using it
 * can result in out of memory errors and application crashes. Use FILE_URI
 * or NATIVE_URI instead.
 */
navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

#### Preference ( iOS が対象 )

**CameraUsesGeolocation**  ( 真偽値、デフォルトは、false )。JPEG 形式の画像をキャプチャーする場合、この値を true に設定すると、EXIF ヘッダー内の位置情報を取得できるようになります ( true に設定した場合、位置情報の使用に必要な許可をシステム側にリクエストします )。

{{<highlight xml>}}<preference name="CameraUsesGeolocation" value="false" />{{</highlight>}}

####  Android 特有の動作

Android では、インテント ( intent ) を使用し、カメラのアクティビティ ( activity ) を起動させ、画像のキャプチャーを行います。ただし、メモリーの空きが少ない携帯端末では、Cordova 側のアクティビティが強制終了 ( kill ) させられることがあります。このような場合、resume イベントを使用して、強制終了させられたプラグインの情報 ( 実行結果を含む ) を、コールバックに渡します。詳細は、 [Cordova 使用時の Android アクティビティのライフサイクルに関する注意点 ( 英語サイト )](http://cordova.apache.org/docs/en/dev/guide/platforms/android/lifecycle.html) をご確認ください。 `pendingResult.result` には、コールバック側に渡す、保留中の実行結果が入っています ( ここでは URI/URL または エラーメッセージとなります )。また、実行結果が成功か否かを確認する場合、 `pendingResult.pluginStatus` を使用します。

#### iOS 特有の動作

コールバック関数の中で、JavaScript の `alert()` を使用すると、問題が生じる場合があります。この問題を避けるため、alert を `setTimeout()` 内に記述します。この方法を使用されば、alert が表示される前に、iOS の 画像選択用ダイアログ ( image picker ) または ポップオーバー ( popover ) を、完全に閉じることができます。

{{<highlight javascript>}}
setTimeout(function() {
    // do your thing here!
}, 0);
{{</highlight>}}

#### Windows 特有の動作

Windows Phone 8.1では、ソースタイプとして `SAVEDPHOTOALBUM` または `PHOTOLIBRARY` を使用した場合、ファイルピッカーから選択された画像を返してから、アプリの `config.xml` で定義された開始ページで復元するまで、アプリは中断します。 `camera.getPicture` が別のページから呼び出された場合は、スタートページが最初から読み込まれるようになるため、 成功とエラーのコールバックは呼び出されません。

これを避けるには、SPAパターンを使用するか、アプリのスタートページからのみ `camera.getPicture` を呼び出すことをお勧めします。

Windows Phone 8.1ピッカーAPIの詳細は、次のとおりです。 [ファイル ピッカーの呼び出し後に Windows Phone アプリを続行する方法 (HTML)。](https://msdn.microsoft.com/ja-jp/library/windows/apps/dn720490.aspx)

###  CameraOptions の補足

#### Android 特有の動作

- `cameraDirection` にどんな値を設定しても、背面のカメラを使用した撮影になります。

- ``allowEdit`` の使用時、Android は想定していた動作をしないことがあります。このため、この設定は使用しないでください。 このプラグインを Android へ実装させた場合には、画像のトリミング処理 ( cropping ) は、端末側のアプリを使用して行う仕組みになっています。ただし、プラグイン側では、ユーザーが選択する編集用アプリに関しては、なんら制御ができないため、このプラグインと相性の悪いアプリをユーザーが選択してしまう場合もあり、このような場合、不具合が生じます。もちろん、端末側のアプリとこのプラグインの相性が合うことも場合によってはありますが ( たとえば、Google Plus Photos )、ごくまれなケースです。もし、画像の編集が必須なアプリを開発している場合、画像編集機能を独自に提供している、サードパーティー製のライブラリー・プラグインを使用することも代替案としてご検討ください。

- `Camera.PictureSourceType.PHOTOLIBRARY` と `Camera.PictureSourceType.SAVEDPHOTOALBUM` では、どちらの場合でも、同一のフォトアルバムを表示します。

- quality を `100` に設定、`correctOrientation` を false に設定、加えて、`targetHeight` または `targetWidth` を未設定にした場合、encodingType パラメーターは無視されます。画像の取得先が CAMERA の場合、JPEG ファイル ( システム側のカメラが提供 ) を常に返します。また、`PHOTOLIBRARY` または `SAVEDPHOTOALBUM` の場合には、選択されたファイル ( 現状の形式のまま ) が返されます。

#### iOS 特有の動作

- `destinationType.FILE_URI` に設定している場合、写真はアプリの temporary/tmp ディレクトリーに保存されます。なお、このディレクトリーのコンテンツは、アプリが終了したときに削除されます。

- `destinationType.NATIVE_URI` と `sourceType.CAMERA` に設定している場合、 `saveToPhotoAlbum` パラメーターに関わらず、写真は、フォトアルバムに保存されます。

- `destinationType.NATIVE_URI` と `sourceType.PHOTOLIBRARY` または `sourceType.SAVEDPHOTOALBUM` を使用すると、すべての編集オプションは無視され、リンクは元の画像に戻されます。

サンプルコード
-----------------------------------------------------------------------------------

カメラ操作プラグインでは、端末搭載のカメラアプリを使用した写真撮影の起動、画像選択用ダイアログの表示と画像の選択などを行えます。次の処理を行うコードのサンプルを、下に示します。

- カメラアプリの起動と [写真撮影](#写真の撮影)
- 写真撮影と [サムネイル ( 縮小した写真 ) の取得](#写真の撮影とサムネイル-縮小した写真-の取得)
- 写真撮影と [FileEntry オブジェクトの作成](#写真の撮影と-fileentry-オブジェクトの取得)
- 写真のライブラリーから [ファイルを選択](#写真のライブラリーからファイルを選択)
- 画像 ( JPEG 形式 ) の選択と [サムネイル ( 縮小した写真 ) の取得](#画像の選択とサムネイル-縮小した写真-の取得)
- 画像の選択と [FileEntry オブジェクトの作成](#写真の撮影と-fileentry-オブジェクトの取得)

###  写真の撮影

写真撮影の処理を行う前に、カメラ操作プラグインの `getPicture` 関数に渡すオプションをいくつか設定します。次のサンプルコード内に推奨のオプションを記述しています。この例では、オプション用に使用するオブジェクトを作成しています。なお、カメラアプリと画像選択用のダイアログの両方をサポートできるように、`sourceType` は、「 動的 」 に設定することにします。

{{<highlight javascript>}}
function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
{{</highlight>}}

メモリーに起因する問題を避けるため、`DATA_URL` ではなく、`FILE_URI` を使用します。なお、Android では、エンコード形式として JPEG を推奨します。

写真撮影時、`getPicture` の第三引数に、オプション用のオブジェクト ( `CameraOptions` ) を渡します。また、`setOptions` の呼び出し時に、写真の取得先を指定する `Camera.PictureSourceType.CAMERA` を渡します。

{{<highlight javascript>}}
function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

写真の撮影後は、写真の表示などを含む、さまざまな処理を行えます。この例では、上述のコードの `displayImage` 内の処理を記述しています。

{{<highlight javascript>}}
function displayImage(imgUri) {

    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}
{{</highlight>}}

いくつかのプラットフォームでは、画像を表示する場合、`Content-Security-Policy` の `<meta>` 要素に、`URI` を設定する必要があります。たとえば、Window 10 では、`<meta>` 要素内に `ms-appdata:` を使用して、URI を設定しています。以下は、例になります。

{{<highlight html>}}
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
{{</highlight>}}

###  写真の撮影とサムネイル ( 縮小した写真 ) の取得

縮小された画像を取得したい場合には、CameraOptions オブジェクトの `targetWidth` と `targetHeight` に、希望するサイズの値を入れて渡します。ここでは、100 x 100px のボックスに収まる画像が返ってくるように設定します ( アスペクト比は保持されるので、ソースの縦または横のどちらか大きい方に 100px が適用されます。 )。

{{<highlight javascript>}}
function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    if (selection == "camera-thmb") {
        options.targetHeight = 100;
        options.targetWidth = 100;
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### 写真のライブラリーからファイルを選択

画像選択用のダイアログからファイルを選択する場合、CameraOptions オブジェクトを使用して、ダイアログを表示するよう設定します ( `sourceType` を `Camera.PictureSourceType.SAVEDPHOTOALBUM` に設定します )。実際にダイアログを表示させるときには、左記のオプションを指定したオブジェクトを使用して、`getPicture` を呼び出します。

{{<highlight javascript>}}
function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### 画像の選択とサムネイル ( 縮小した写真 ) の取得

画像選択用のダイアログで選択したファイルを縮小する場合には、上述の方法と同じように、`targetHeight` と `targetWidth` を適宜設定します。

{{<highlight javascript>}}
function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    if (selection == "picker-thmb") {
        // To downscale a selected image,
        // Camera.EncodingType (e.g., JPEG) must match the selected image type.
        options.targetHeight = 100;
        options.targetWidth = 100;
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something with image

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### 写真の撮影と FileEntry オブジェクトの取得

別の場所への画像のコピー、画像のアップロード ( ファイル転送プラグイン/FileTransfer プラグイン の使用 ) などを行う場合、カメラアプリから返された写真に紐づけされている FileEntry オブジェクトを使用します。オブジェクトを取得する場合には、カメラアプリが返す file URI を使用して、 `window.resolveLocalFileSystemURL` を呼び出します ( CameraOptions オブジェクト内で、 `destinationType` を `Camera.DestinationType.FILE_URI` に設定する必要があります。通常、デフォルトで、この設定になっています )。

{{<note>}}
<code>window.resolveLocalFileSystemURL</code> を呼ぶためには、{{<link href="https://www.npmjs.com/package/cordova-plugin-file" title="ファイル操作プラグイン ( File プラグイン )">}} が必要です。
{{</note>}}

`window.resolveLocalFileSystemURL` の実行例を次に記します。この関数で使用している image URI は、`getPicture` の成功時のコールバックから渡されたものです。`resolveLocalFileSystemURL` の成功時のハンドラーに FileEntry オブジェクトが渡されます。

{{<highlight javascript>}}
function getFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(imgUri, function success(fileEntry) {

        // Do something with the FileEntry object, like write to it, upload it, etc.
        // writeFile(fileEntry, imgUri);
        console.log("got file: " + fileEntry.fullPath);
        // displayFileData(fileEntry.nativeURL, "Native URL");

    }, function () {
      // If don't get the FileEntry (which may happen when testing
      // on some emulators), copy to a new FileEntry.
        createNewFileEntry(imgUri);
    });
}
{{</highlight>}}

上記の例では、有効な FileEntry オブジェクトを取得できなかった場合、アプリ側の `createNewFileEntry` を呼び出しています。カメラアプリが返した image URL を使用すれば、有効な FileEntry を取得できるはずですが、エミュレーターによっては、プラットフォームの動作が異なり、画像選択用のダイアログが返すファイル情報も異なってきます。

{{<note>}}
FileEntry への書き込み方法は、{{<link href="https://www.npmjs.com/package/cordova-plugin-file" title="ファイル操作プラグインの README">}} をご確認ください。
{{</note>}}

次のコードでは、アプリのキャッシュ用ディレクトリー ( サンドボックス内のストレージ ) 内に、 `tempFile.jpeg` と名付けたファイルを作成しています。新たな FileEntry オブジェクトを使用すれば、さまざまな処理 ( 画像のコピー、アップデートなど ) を行えます。

{{<highlight javascript>}}
function createNewFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {

        // JPEG file
        dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            // writeFile(fileEntry, imgUri);
            console.log("got file: " + fileEntry.fullPath);
            // displayFileData(fileEntry.fullPath, "File copied to");

        }, onErrorCreateFile);

    }, onErrorResolveUrl);
}
{{</highlight>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
