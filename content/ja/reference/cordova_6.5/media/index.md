メディア操作 プラグイン
=======================

テスト環境 ( バージョン番号 ) :
[3.0.1](https://github.com/apache/cordova-plugin-media/releases/tag/3.0.1)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-media) をご確認ください。

</div>

このプラグインを使用して、オーディオファイルの再生と録音を行います。

<div class="admonition note">

現在の実装方式は、W3C の仕様 ( メディアキャプチャーに関して )
に準拠しておらず、利便上提供しているものです。リリース予定の次期の実装方式では、最新の
W3C の仕様に準拠する予定です。また、その場合には、現在の API
を廃止することもあります。

</div>

このプラグインは、グローバルな `Media`
コンストラクタを定義します。グローバルスコープでは、`deviceready`
イベントの発火後まで使用できません。

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Media);
}
```

プラグイン ID
-------------

    cordova-plugin-media

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Media` プラグインを 有効 &lt;add\_plugins&gt;
にします。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS
-   Windows

メディアオブジェクト
--------------------

``` {.sourceCode .javascript}
var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
```

### パラメーター

-   **src**: オーディオコンテンツを指し示す URI *(DOMString)*
-   **mediaSuccess**: ( 任意 ) `Media`
    オブジェクト側の再生・録音・停止処理が完了した後に、実行されるコールバック
    *(Function)*
-   **mediaError**: ( 任意 )
    エラーが発生した場合に、実行されるコールバック *(Function)*
-   **mediaStatus**: ( 任意 )
    ステータスが変化したことを示すときに使用されるコールバック
    *(Function)*

<div class="admonition note">

`src` パラメーターには、`cdvfile` パスを使用できます。

</div>

``` {.sourceCode .javascript}
var my_media = new Media('cdvfile://localhost/temporary/recording.mp3', ...);
```

### Additional ReadOnly パラメーター

-   **position**: オーディオの再生位置 ( 秒単位 )
    -   再生中、自動的には値を更新しないので、`getCurrentPosition`
        メソッドを呼び、値を更新します。
-   **duration**: メディアの再生時間 ( 秒単位 )

### 定数

`mediaStatus`
コールバックだけで使用されるパラメーターとして、次の定数があります。

-   `Media.MEDIA_NONE` = 0
-   `Media.MEDIA_STARTING` = 1
-   `Media.MEDIA_RUNNING` = 2
-   `Media.MEDIA_PAUSED` = 3
-   `Media.MEDIA_STOPPED` = 4

### メソッド

-   `media.getCurrentPosition`:
    オーディオファイル内の現在の再生位置を返します。
-   `media.getCurrentPosition`:
    オーディオファイル内の現在の再生位置を返します。
-   `media.getDuration`: オーディオファイルの再生時間を返します。
-   `media.play`: オーディオファイルの再生を、開始または再開します。
-   `media.pause`: オーディオファイルの再生を一時停止します。
-   `media.pauseRecord`: オーディオファイルの録音を一時停止します。
-   `media.release`: オーディオリソースを解放 ( release ) します。
-   `media.resumeRecord`
    ：オーディオファイルのレコーディングを再開します。
-   `media.seekTo`: オーディオファイル内の再生位置を動かします。
-   `media.setVolume`: オーディオ再生時の音量を設定します。
-   `media.startRecord`: オーディオファイルの録音を開始します。
-   `media.stopRecord`: オーディオファイルの録音を停止します。
-   `media.stop`: オーディオファイルの再生を停止します。

#### media.getCurrentAmplitude

録音している音の振幅 ( amplitude ) を返します。

    media.getCurrentAmplitude(mediaSuccess, [mediaError]);

##### サポート対象のプラットフォーム

-   Android
-   iOS

##### パラメーター

-   **mediaSuccess**: 取得した振幅 ( 0.0 - 1.0 )
    を渡して実行するコールバック
-   **mediaError**: ( 任意 ) エラーの発生時に実行されるコールバック

##### 例

``` {.sourceCode .js}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

// Record audio
my_media.startRecord();

mediaTimer = setInterval(function () {
    // get media amplitude
    my_media.getCurrentAmplitude(
        // success callback
        function (amp) {
            console.log(amp + "%");
        },
        // error callback
        function (e) {
            console.log("Error getting amp=" + e);
        }
    );
}, 1000);
```

#### media.getCurrentPosition

オーディオファイル内の現在の再生位置を返します。また、`Media`
オブジェクト内の `position` パラメーターを更新します。

    media.getCurrentPosition(mediaSuccess, [mediaError]);

##### パラメーター

-   **mediaSuccess**: 現在の再生位置 ( 秒単位 )
    を渡して実行されるコールバック
-   **mediaError**: ( 任意 ) エラーの発生時に実行されるコールバック

##### 例

``` {.sourceCode .js}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

// Update media position every second
var mediaTimer = setInterval(function () {
    // get media position
    my_media.getCurrentPosition(
        // success callback
        function (position) {
            if (position > -1) {
                console.log((position) + " sec");
            }
        },
        // error callback
        function (e) {
            console.log("Error getting pos=" + e);
        }
    );
}, 1000);
```

#### media.getDuration

オーディオファイルの再生時間を、秒単位で返します。再生時間が不明の場合には、「
-1 」 の値を返します。

    media.getDuration();

##### 例

``` {.sourceCode .js}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

// Get duration
var counter = 0;
var timerDur = setInterval(function() {
    counter = counter + 100;
    if (counter > 2000) {
        clearInterval(timerDur);
    }
    var dur = my_media.getDuration();
    if (dur > 0) {
        clearInterval(timerDur);
        document.getElementById('audio_duration').innerHTML = (dur) + " sec";
    }
}, 100);
```

#### media.play

オーディオファイルの再生を、開始または再開します。

``` {.sourceCode .js}
media.play();
```

##### 例

``` {.sourceCode .js}
// Play audio
//
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}
```

##### iOS 特有の動作

-   **numberOfLoops**: このオプションを `play`
    メソッドに渡して、メディアファイルの再生回数を指定します。次に例を示します。

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ numberOfLoops: 2 })

-   **playAudioWhenScreenIsLocked**: このオプションを `play`
    メソッドに渡して、画面にロックがかかった状態でも、再生を続行するか指定します。
    `true` ( デフォルトはこちら )
    に設定した場合、ハードウェア側のミュートボタンの設定を無視します。次に例を示します。

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
        myMedia.play({ playAudioWhenScreenIsLocked : true });
        myMedia.setVolume('1.0');

    > Note: To allow playback with the screen locked or background audio
    > you have to add `audio` to `UIBackgroundModes` in the `info.plist`
    > file. See [Apple
    > documentation](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4-SW23).
    > Also note that the audio has to be started before going to
    > background.

-   **ファイルの検索順序**: ファイル名のみまたは不完全なパス ( simple
    path ) を指定している場合、iOS では、最初に、`www`
    ディレクトリー内を検索して、見つからなければ、次に、アプリの
    `documents/tmp` ディレクトリーを検索します。

        var myMedia = new Media("audio/beer.mp3")
        myMedia.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3

#### media.pause

オーディオファイルの再生を一時停止します。

    media.pause();

##### 例

``` {.sourceCode .js}
// Play audio
//
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function () { console.log("playAudio():Audio Success"); },
        // error callback
        function (err) { console.log("playAudio():Audio Error: " + err); }
    );

    // Play audio
    my_media.play();

    // Pause after 10 seconds
    setTimeout(function () {
        my_media.pause();
    }, 10000);
}
```

#### media.pauseRecord

オーディオファイルの録音を一時停止します。

    media.pauseRecord();

##### サポート対象のプラットフォーム

-   iOS

##### 例

``` {.sourceCode .js}
// Record audio
//
function recordAudio() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();

    // Pause Recording after 5 seconds
    setTimeout(function() {
        mediaRec.pauseRecord();
    }, 5000);
}
```

#### media.release

オペレーティングシステム側のオーディオリソースを解放 ( release )
します。特に、Android では、メディア再生に割り当てることができる
OpenCore
インスタンスの数に限りがあるため、解放処理は重要となります。`Media`
リソースが不要になった場合には、`release`
メソッドを都度呼び出すことを推奨します。

    media.release();

##### 例

``` {.sourceCode .js}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

my_media.play();
my_media.stop();
my_media.release();
```

#### media.resumeRecord

オーディオファイルの録音を再開します。

    media.resumeRecord();

##### サポート対象のプラットフォーム

-   iOS

##### 例

``` {.sourceCode .js}
// Record audio
//
function recordAudio() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();

    // Pause Recording after 5 seconds
    setTimeout(function() {
        mediaRec.pauseRecord();
    }, 5000);

    // Resume Recording after 10 seconds
    setTimeout(function() {
        mediaRec.resumeRecord();
    }, 10000);
}
```

#### media.seekTo

オーディオファイルの再生位置を指定します。

    media.seekTo(milliseconds);

##### パラメーター

-   **milliseconds**: オーディオの再生位置を、ミリ秒単位で指定します。

##### 例

``` {.sourceCode .js}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);
    my_media.play();
// SeekTo to 10 seconds after 5 seconds
setTimeout(function() {
    my_media.seekTo(10000);
}, 5000);
```

#### media.setVolume

オーディオファイルの音量を指定します。

    media.setVolume(volume);

##### パラメーター

-   **volume**: 再生時の音量を指定します。0.0 から 1.0
    の間で、値を指定します。

##### サポート対象のプラットフォーム

-   Android
-   iOS

##### 例

``` {.sourceCode .js}
// Play audio
//
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function(err) {
            console.log("playAudio():Audio Error: "+err);
    });

    // Play audio
    my_media.play();

    // Mute volume after 2 seconds
    setTimeout(function() {
        my_media.setVolume('0.0');
    }, 2000);

    // Set volume to 1.0 after 5 seconds
    setTimeout(function() {
        my_media.setVolume('1.0');
    }, 5000);
}
```

#### media.startRecord

オーディオファイルの録音を開始します。

    media.startRecord();

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

``` {.sourceCode .js}
// Record audio
//
function recordAudio() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    mediaRec.startRecord();
}
```

##### Android 特有の動作

-   Androidデバイスは、オーディオをAAC
    ADTSファイル形式で記録します。指定されたファイルは`.aac`拡張子で終わる必要があります。
-   Media
    オブジェクトが存続する間は、ハードウェア側の音量設定は、オブジェクト
    側の音量設定と紐付けされています。直近で作成した Media
    オブジェクトに対して、`release()`
    が呼ばれた場合、音量設定は、システム側のデフォルトの設定に戻ります。また、ページ遷移を行った場合も、設定はリセットされます
    ( 遷移時に、すべての Media オブジェクトが解放されるため )。

##### iOS 特有の動作

-   iOSは`.wav`および`.m4a`タイプのファイルにのみ記録し、ファイル名の拡張子が正しくない場合はエラーを返します。
-   フルパス ( full path ) を指定しない場合、アプリの `documents/tmp`
    ディレクトリーに、録音ファイルが置かれます。このファイルへのアクセスには、`ファイル操作`
    API ( File API ) を使用します ( `LocalFileSystem.TEMPORARY` を使用
    )。録音時にサブディレクトリーを使用する場合には、事前に作成しておく必要があります。
-   「 documents:// 」 形式の URI
    を使用して、ファイルを録音・再生できます。

        var myMedia = new Media("documents://beer.mp3")

-   iOS 10以降は、 `info.plist` に `NSMicrophoneUsageDescription`
    を追加する必要があります。

NSMicrophoneUsageDescription
は、アプリがユーザーのマイクにアクセスする理由を記述します。
システムがアクセス許可をユーザに求めた際、この文字列がダイアログボックスの一部として表示されます。このエントリを追加するには、プラグインのインストール時に変数
`MICROPHONE_USAGE_DESCRIPTION` で追加することができます。

変数を渡さない場合は、プラグインは空の文字列を値として追加します。

##### Windows 特有の動作

-   Windows 端末では、MP3・M4A・WMA
    形式の録音ファイルを使用できます。ただし、\*Windows Phone 8.1\*
    端末では、MP3
    が使用されることは、ほとんどありません。これは、Windows Phone
    の出荷時には、MP3
    のエンコーダーが実装されていないためです。詳細は、[こちら](https://msdn.microsoft.com/en-us/library/windows/apps/windows.media.mediaproperties.mediaencodingprofile.createmp3.aspx)
    をご確認ください。
-   フルパス ( full path ) を指定しない場合、 `AppData/temp`
    ディレクトリーに、録音ファイルが置かれます。このファイルへのアクセスには、`ファイル`
    API ( `LocalFileSystem.TEMPORARY` を使用
    )、または、`ms-appdata:///temp/<filename>` の URI を使用します。
-   録音時にサブディレクトリーを使用する場合には、事前に作成しておく必要があります。

#### media.stop

オーディオファイルの再生を停止します。

    media.stop();

##### 例

``` {.sourceCode .js}
// Play audio
//
function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
        // success callback
        function() {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function(err) {
            console.log("playAudio():Audio Error: "+err);
        }
    );

    // Play audio
    my_media.play();

    // Pause after 10 seconds
    setTimeout(function() {
        my_media.stop();
    }, 10000);
}
```

#### media.stopRecord

オーディオファイルの録音を停止します。

    media.stopRecord();

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

``` {.sourceCode .js}
// Record audio
//
function recordAudio() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        }
    );

    // Record audio
    mediaRec.startRecord();

    // Stop recording after 10 seconds
    setTimeout(function() {
        mediaRec.stopRecord();
    }, 10000);
}
```

MediaError Object
-----------------

エラーが発生した場合、`mediaError` コールバック関数へ `MediaError`
オブジェクトが渡されます。

### プロパティー

-   **code**: 次のエラーコードのいずれか
-   **message**: 詳細を示したエラーメッセージ

### 定数

-   `MediaError.MEDIA_ERR_ABORTED` = 1
-   `MediaError.MEDIA_ERR_NETWORK` = 2
-   `MediaError.MEDIA_ERR_DECODE` = 3
-   `MediaError.MEDIA_ERR_NONE_SUPPORTED` = 4

