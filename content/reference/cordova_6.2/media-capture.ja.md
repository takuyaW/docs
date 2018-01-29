---
title: メディアキャプチャー プラグイン
weight: 160
---

テスト環境 ( バージョン番号 ) :
[1.3.0](https://github.com/apache/cordova-plugin-media-capture/releases/tag/1.3.0)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-media-capture">}} をご確認ください。
{{</note>}}

このプラグインを使用して、端末側の録音・録画 ( オーディオ・画像・動画 )
機能にアクセスします。

{{<warning>}}
端末に搭載されたカメラまたはマイクロフォンを使用した画像・動画・音声の録音・録画および利用には、個人情報保護の観点から、細心の注意が必要です。録音・録画方法および第三者への情報提供に関しては、アプリの個人情報の取り扱いに関するポリシーの策定時に議論されるべき問題です。また、アプリがカメラまたはマイクロフォンを使用するとき、ユーザー側でもそれを認識できるようにする必要があります。認識できない場合には、事前にユーザー側に通知をする必要があります。端末のオペレーティングシステムがこの通知を行ってない場合には、開発者自身で改善する必要があります。また、ユーザーへの通知を行う場合には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法に関する同意の意思表示を求める必要があります
( <b>許可する</b> 、または、<b>許可しない</b> のように、明示的に判断できる必要があります )。また、アプリがカメラまたはマイクロフォンを起動する前に、通知および許諾を得ることを条件とする、アプリのマーケットプレースも一部に存在します。詳細は、『 プライバシーに関するガイド 』 ( Apache Cordova のドキュメント ) をご確認ください。
{{</warning>}}

このプラグインでは、グローバルオブジェクト 「 `navigator.device.capture`
」 を使用します。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.device.capture);
}
{{</highlight>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-media-capture
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Capture` プラグインを
[有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

API の解説
----------

### オブジェクト

-   Capture
-   CaptureAudioOptions
-   CaptureImageOptions
-   CaptureVideoOptions
-   CaptureCallback
-   CaptureErrorCB
-   ConfigurationData
-   MediaFile
-   MediaFileData

### メソッド

-   capture.captureAudio
-   capture.captureImage
-   capture.captureVideo
-   MediaFile.getFormatData

### プロパティー

-   **supportedAudioModes**:
    端末がサポートしている、オーディオの録音形式 (ConfigurationData\[\])
-   **supportedImageModes**: 端末がサポートしている、画像のサイズと形式
    (ConfigurationData\[\])
-   **supportedVideoModes**:
    端末がサポートしている、ビデオ録画の解像度と形式
    (ConfigurationData\[\])

### capture.captureAudio

オーディオ録音用アプリの起動、および、キャプチャーしたオーディオ
クリップ ファイルの情報を返します。

{{<highlight javascript>}}
navigator.device.capture.captureAudio(
    CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
);
{{</highlight>}}

#### 解説

端末に標準搭載されたオーディオ録音用のアプリを使用して、オーディオのキャプチャー
( 非同期処理 )
を行います。この処理では、同一セッション内で、複数の録音を行うことができます。

オーディオ録音アプリを終了したとき、または、`CaptureAudioOptions.limit`
で指定した最大録音数に達したとき、キャプチャー処理は終了します。`limit`
パラメーターを指定しない場合、「 1 」
がデフォルトとなります。この場合、1
つのオーディオクリップを録音したあとに、キャプチャー処理が終了します。

キャプチャー処理が終了するときには、`MediaFile` オブジェクト ( 群 )
の配列を使用して、 `CaptureCB` コールバックが実行されます。各 MediaFile
オブジェクトには、キャプチャーしたオーディオ クリップ
ファイルに関する情報が格納されています。オーディオクリップのキャプチャー前に、ユーザーが処理を終了させた場合、
`CaptureError` オブジェクトを使用して、`CaptureErrorCallback`
が実行されます。`CaptureError`
オブジェクトには、`CaptureError.CAPTURE_NO_MEDIA_FILES`
エラーコードが格納されています。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例


{{<highlight javascript>}}
// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start audio capture
navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
{{</highlight>}}

#### iOS 特有の動作

-   iOS には、標準のオーディオ録音アプリがありません。簡易なユーザーインターフェースのみ提供されています。

### Catpure.captureImage

カメラアプリの起動、および、キャプチャーした画像ファイルの情報を返します。

{{<highlight javascript>}}
navigator.device.capture.captureImage(
    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
);
{{</highlight>}}

#### 解説

端末に標準搭載されているカメラアプリを使用して、画像のキャプチャーを行います
( 非同期処理 )。この処理では、同一セッション内で、複数のキャプチャーを行うことができます。

カメラアプリを終了したとき、または、`CaptureImageOptions.limit`
で指定した最大撮影数に達したとき、キャプチャー処理は終了します。`limit`
パラメーターを指定しない場合、「 1 」
がデフォルトとなります。この場合、1
つの画像を撮影したあとに、キャプチャー処理が終了します。

キャプチャー処理が終了するときには、`MediaFile` オブジェクト ( 群 )
の配列を使用して、CaptureCB コールバックが実行されます。各 MediaFile
オブジェクトには、キャプチャーした画像ファイルに関する情報が格納されています。画像のキャプチャー前に、ユーザーが処理を終了させた場合、
`CaptureError` オブジェクトを使用して、`CaptureErrorCB`
コールバックが実行されます。`CaptureError`
オブジェクトには、`CaptureError.CAPTURE_NO_MEDIA_FILES`
エラーコードが格納されています。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start image capture
navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
{{</highlight>}}

### Catpure.captureVideo

ビデオ録画アプリの起動、および、キャプチャーしたビデオクリップファイルの情報を返します。

{{<highlight javascript>}}
navigator.device.capture.captureVideo(
    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
);
{{</highlight>}}

#### 解説

端末に標準搭載されているビデオ録画アプリを使用して、ビデオのキャプチャーを行います
( 非同期処理 )。この処理では、同一セッション内で、複数のキャプチャーを行うことができます。

ビデオ録画アプリを終了したとき、または、`CaptureVideoOptions.limit`
で指定した最大録画数に達したとき、キャプチャー処理は終了します。`limit`
パラメーターを指定しない場合、「 1 」
がデフォルトとなります。この場合、1
つのビデオクリップを録画したあとに、キャプチャー処理が終了します。

キャプチャー処理が終了するときには、`MediaFile` オブジェクト ( 群 )
の配列を使用して、CaptureCB コールバックを実行します。各 MediaFile
オブジェクトには、キャプチャーしたでビデオクリップファイルに関する情報が格納されています。ビデオクリップのキャプチャー前に、ユーザーが処理を終了させた場合、
`CaptureError` オブジェクトを使用して、`CaptureErrorCB`
コールバックが実行されます。`CaptureError`
オブジェクトには、`CaptureError.CAPTURE_NO_MEDIA_FILES`
エラーコードが格納されています。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start video capture
navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
{{</highlight>}}

### CaptureAudioOptions

オーディオキャプチャー時の各種設定を行えます。

#### プロパティー

-   **limit**:
    同一のキャプチャー処理の中で、端末が録音できるオーディオクリップの最大数。値は、1
    以上に設定します ( デフォルトでは 1 )。
-   **duration**: 1 つあたりのオーディオ サウンド クリップの最大長 (
    秒単位 )

#### 例

{{<highlight javascript>}}
// limit capture operation to 3 media files, no longer than 10 seconds each
var options = { limit: 3, duration: 10 };

navigator.device.capture.captureAudio(captureSuccess, captureError, options);
{{</highlight>}}

#### Android 特有の動作

-   `duration`
    パラメーターは使用できません。よって、録音時間はプログラムで制御できません。

#### iOS 特有の動作

-   `limit` パラメーターは使用できません。1
    回のキャプチャー処理につき、1 回の録音のみ行います。

### CaptureImageOptions

画像キャプチャー時の各種設定を行うときに使用します。

#### プロパティー

-   **limit**:
    同一のキャプチャー処理の中で、端末がキャプチャーできる画像の最大数。値は、1
    以上に設定します ( デフォルトでは 1 )。

#### 例

{{<highlight javascript>}}
// limit capture operation to 3 images
var options = { limit: 3 };

navigator.device.capture.captureImage(captureSuccess, captureError, options);
{{</highlight>}}

#### iOS 特有の動作

-   **limit** パラメーターは使用できません。1 回の実行につき、1
    つの画像のみキャプチャーします。

### CaptureVideoOptions

ビデオキャプチャー時の各種設定を行う時に使用します。

#### プロパティー

-   **limit**:
    同一のキャプチャー処理の中で、端末が録画できるビデオクリップの最大数。値は、1
    以上に設定します ( デフォルトでは 1 )。
-   **duration**: 1 つあたりのビデオクリップの最大長 ( 秒単位 )

#### 例

{{<highlight javascript>}}
// limit capture operation to 3 video clips
var options = { limit: 3 };

navigator.device.capture.captureVideo(captureSuccess, captureError, options);
{{</highlight>}}

#### iOS 特有の動作

-   **limit** プロパティーは無視されます。1 回の実行につき、1
    回のビデオ録画のみ行います。

#### Android 特有の動作

-   Android では、**quality**
    プロパティーも使用できます。このプロパティーを使用して、画質 (
    quality ) を変えて、ビデオをキャプチャーできます。このプロパティーに
    `1` ( デフォルト ) を設定した場合、高画質 ( HQ ) になり、`0`
    を設定した場合、低画質 ( LQ ) になります。低画質のビデオは、MMS
    メッセージなどで使用するときに有用です。詳細は、[こちら](http://developer.android.com/reference/android/provider/MediaStore.html#EXTRA_VIDEO_QUALITY)
    をご確認ください。

#### 例 ( Android w/ quality )

{{<highlight javascript>}}
// limit capture operation to 1 video clip of low quality
var options = { limit: 1, quality: 0 };
navigator.device.capture.captureVideo(captureSuccess, captureError, options);
{{</highlight>}}

### CaptureCB

メディアキャプチャー処理の成功時に呼び出されます。

{{<highlight javascript>}}
function captureSuccess( MediaFile[] mediaFiles ) { ... };
{{</highlight>}}

#### 解説

キャプチャー処理の成功時に、この関数が実行されます。この時には、メディアファイルのキャプチャーが最低
1
回は終了しており、加えて、メディアキャプチャー用アプリをユーザーが終了させたか、または、キャプチャー数が最大数に達しています。

各 `MediaFile`
オブジェクトには、キャプチャーしたメディアファイルに関する情報が格納されています。

#### 例

{{<highlight javascript>}}
// capture callback
function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};
{{</highlight>}}

### CaptureError

キャプチャー処理の失敗時のエラーコードを格納しています。

#### プロパティー

-   **code**: 次の定義済みエラーコードのいずれか

#### 定数

-   `CaptureError.CAPTURE_INTERNAL_ERR`: 画像または音 ( 声 )
    のキャプチャーに失敗した場合 ( カメラまたはマイクロフォンを使用 )
-   `CaptureError.CAPTURE_APPLICATION_BUSY`:
    カメラまたはオーディオキャプチャー用のアプリが、別のキャプチャーリクエストの処理を現在行っている場合
-   `CaptureError.CAPTURE_INVALID_ARGUMENT`: API の使用方法が無効な場合
    ( 例 : `limit` の値が 1 未満 )
-   `CaptureError.CAPTURE_NO_MEDIA_FILES`:
    キャプチャー前に、カメラまたはオーディオキャプチャー用のアプリをユーザーが閉じた場合
-   `CaptureError.CAPTURE_NOT_SUPPORTED`:
    リクエストしたキャプチャー処理のタイプをサポートしていない場合

### CaptureErrorCB

メディアのキャプチャー処理中に、エラーが発生した場合に呼び出されます。

{{<highlight javascript>}}
function captureError( CaptureError error ) { ... };
{{</highlight>}}

#### 解説

メディアのキャプチャー処理を開始して、エラーが発生した場合、この関数が実行されます。想定できるエラー発生のシナリオとして、キャプチャー用のアプリがビジー
( busy )
状態の場合、キャプチャー処理がすでに実行されている場合、メディアファイルのキャプチャー前にユーザーが処理をキャンセルした場合などが考えられます。

適切なエラーコード ( `code` ) が格納された `CaptureError`
オブジェクトを使用して、この関数が実行されます。

#### 例

{{<highlight javascript>}}
// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};
{{</highlight>}}

### ConfigurationData

メディアキャプチャー用の各種パラメーターを設定するときに使用します。

#### 解説

メディアキャプチャーの各種情報 ( MIME
タイプ、ビデオ・画像キャプチャーの各種情報など )
を設定できます。サポートされているプロパティーは、端末毎に異なります。

The MIME types should adhere to
[RFC2046](http://www.ietf.org/rfc/rfc2046.txt). 例s:

-   `video/3gpp`
-   `video/quicktime`
-   `image/jpeg`
-   `audio/amr`
-   `audio/wav`

#### プロパティー

-   **type**: メディアタイプを示す、ASCII
    でエンコードされた小文字の文字列 (DOMString)
-   **height**:
    ピクセル単位で示す、画像またはビデオの縦の長さ。サウンドクリップに関しては、「
    0 」 に設定します。 (Number)
-   **width**:
    ピクセル単位で示す、画像またはビデオの横幅。サウンドクリップに関しては、「
    0 」 に設定します。 (Number)

#### 例

{{<highlight javascript>}}
// retrieve supported image modes
var imageModes = navigator.device.capture.supportedImageModes;

// Select mode that has the highest horizontal resolution
var width = 0;
var selectedmode;
for each (var mode in imageModes) {
    if (mode.width > width) {
        width = mode.width;
        selectedmode = mode;
    }
}
{{</highlight>}}

一部のプラットフォームでのみ、サポートしています。サポートされていない場合、配列には、なにも入っていません。

### MediaFile.getFormatData

キャプチャーしたメディア ファイルのフォーマット情報を取得できます。

{{<highlight javascript>}}
mediaFile.getFormatData(
    MediaFileDataSuccessCB successCallback,
    [MediaFileDataErrorCB errorCallback]
);
{{</highlight>}}

#### 解説

メディアファイルのフォーマット情報を取得できます ( 非同期処理 )。成功時には、`MediaFileData`
オブジェクトを使用して、`MediaFileDataSuccessCB`
コールバックが呼び出されます。失敗時には、 `MediaFileDataErrorCB`
コールバックが呼び出されます。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Android 特有の動作

メディアファイルのフォーマット情報にアクセスできる API
には、さまざまな制約が設けられています ( 一部の `MediaFileData`
プロパティーのみサポートされています )。

#### iOS 特有の動作

メディアファイルのフォーマット情報にアクセスできる API
には、さまざまな制約が設けられています ( 一部の `MediaFileData`
プロパティーのみサポートされています )。

### MediaFile

キャプチャーしたメディアファイルの各種プロパティーを設定するときに使用します。

#### プロパティー

-   **name**: ファイル名 ( パス情報なし、DOMString )
-   **fullPath**: ファイルへのフルパス ( ファイル名を含む、DOMString )
-   **type**: ファイルの mime タイプ (DOMString)
-   **lastModifiedDate**: ファイルの最終更新日時 (Date)
-   **size**: ファイルサイズ ( バイト単位、Number )

#### メソッド

-   **MediaFile.getFormatData**:
    メディアファイルのフォーマット情報を取得できます。

### MediaFileData

メディアファイルに関するフォーマット情報を設定するときに使用します。

#### プロパティー

-   **codecs**: オーディオとビデオのコンテンツの形式 (DOMString)
-   **bitrate**: コンテンツの平均ビットレート。画像に関しては、値は 「 0
    」 となります。 (Number)
-   **height**:
    ピクセル単位で示す、画像またはビデオの縦の長さ。オーディオクリップに関しては、「
    0 」 に設定します。 (Number)
-   **width**:
    ピクセル単位で示す、画像またはビデオの横幅。オーディオクリップに関しては、「
    0 」 に設定します。 (Number)
-   **duration**:
    秒単位で示す、ビデオまたはサウンドクリップの長さ。画像に関しては、「
    0 」 に設定します。 (Number)

#### Android 特有の動作

`MediaFileData` プロパティーのサポート状況は、次のとおりです。

-   **codecs**: 使用できません。`null` を返します。
-   **bitrate**: 使用できません。「 0 」 を返します。
-   **height**: 使用できます。画像・ビデオファイルのみが対象です。
-   **width**: 使用できます。画像・ビデオファイルのみが対象です。
-   **duration**:
    使用できます。オーディオ・ビデオファイルのみが対象です。

#### iOS 特有の動作

`MediaFileData` プロパティーのサポート状況は、次のとおりです。

-   **codecs**: 使用できません。`null` を返します。
-   **bitrate**: iOS 4 上でのみ使用できます (
    対象はオーディオのみ、画像・ビデオに関しては、「 0 」 を返します。 )
-   **height**: 使用できます。画像・ビデオファイルのみが対象です。
-   **width**: 使用できます。画像・ビデオファイルのみが対象です。
-   **duration**:
    使用できます。オーディオ・ビデオファイルのみが対象です。

## Android の 「 ライフサイクル 」 に起因する注意点

Android
プラットフォーム上で、オーディオ・ビデオ・画像をキャプチャーする場合、ネイティブ側のキャプチャー用アプリが起動され、Cordova
Webview がバックグラウンド処理に切り替わったタイミングで、アプリ自体 (
Cordova が動作中 ) が強制終了 ( kill )
させられる場合があります。この問題の詳細は、[Cordova 使用時の Android アクティビティのライフサイクルに関する注意点 ( 英語サイト )](http://cordova.apache.org/docs/en/dev/guide/platforms/android/lifecycle.html)
をご確認ください。強制終了させられた場合、キャプチャー処理のメソッドに指定されていた成功時または失敗時のコールバックは実行されません。未処理/保留されている実行結果は、Cordova の [resume](http://cordova.apache.org/docs/en/latest/cordova/events/events.html#resume)
イベント後に実行される document イベントで使用できます ( resume
イベントに関する詳細は、左記の 「 ライフサイクルに関する注意点 」
を参照のこと )。

なお、アプリ内では、次のように、どちらのイベントにも対応できるように記述
( サブスクライブ/subscribe ) しておくことを推奨します。

{{<highlight javascript>}}
function onDeviceReady() {
    // pendingcaptureresult is fired if the capture call is successful
    document.addEventListener('pendingcaptureresult', function(mediaFiles) {
        // Do something with result
    });

    // pendingcaptureerror is fired if the capture call is unsuccessful
    document.addEventListener('pendingcaptureerror', function(error) {
        // Handle error case
    });
}

// Only subscribe to events after deviceready fires
document.addEventListener('deviceready', onDeviceReady);
{{</highlight>}}

コード内における、キャプチャー結果を処理する場所は、開発者側で自由に設定できますが
( 上記の 「 ライフサイクル 」 を参照のこと )、アプリ側の処理の (
保留する/されている処理 ) の保存と復旧は、それぞれ、[pause](http://cordova.apache.org/docs/en/latest/cordova/events/events.html#pause)
イベントと [resume](http://cordova.apache.org/docs/en/latest/cordova/events/events.html#resume)
イベントで適宜行うことが必要です。なお、これらのイベントは、Android
プラットフォーム上でのみ使用でき、加えて、キャプチャー実行時、WebView
が強制終了された場合のみ使用できます。
