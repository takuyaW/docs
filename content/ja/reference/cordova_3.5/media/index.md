メディア操作 プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-media/blob/master/RELEASENOTES.md#0211-jun-05-2014">0.2.11</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-media/blob/master/README.md)
をご確認ください。

</div>

This plugin provides the ability to record and play back audio files on
a device.

**NOTE**: The current implementation does not adhere to a W3C
specification for media capture, and is provided for convenience only. A
future implementation will adhere to the latest W3C specification and
may deprecate the current APIs.

プラグイン ID
-------------

    org.apache.cordova.media

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`org.apache.cordova.media`
プラグインを有効にします。詳細は、standard\_plugins をご確認ください。

サポート対象のプラットフォーム
------------------------------

-   Android
-   iOS

Media
-----

``` {.sourceCode .javascript}
var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
```

### パラメーター

-   **src**: オーディオコンテンツを指し示す URI *(DOMString)*
-   **mediaSuccess**: (Optional) The callback that executes after a
    `Media` object has completed the current play, record, or stop
    action. *(Function)*
-   **mediaError**: (Optional) The callback that executes if an error
    occurs. *(Function)*
-   **mediaStatus**: (Optional) The callback that executes to indicate
    status changes. *(Function)*

### 定数

The following constants are reported as the only parameter to the
`mediaStatus` callback:

-   `Media.MEDIA_NONE` = 0
-   `Media.MEDIA_STARTING` = 1
-   `Media.MEDIA_RUNNING` = 2
-   `Media.MEDIA_PAUSED` = 3
-   `Media.MEDIA_STOPPED` = 4

### メソッド

-   `media.getCurrentPosition`: Returns the current position within an
    audio file.
-   `media.getDuration`: オーディオファイルの再生時間を返します。
-   `media.play`: オーディオファイルの再生を、開始または再開します。
-   `media.pause`: オーディオファイルの再生を一時停止します。
-   `media.release`: Releases the underlying operating system's audio
    resources.
-   `media.seekTo`: オーディオファイル内の再生位置を動かします。
-   `media.setVolume`: オーディオ再生時の音量を設定します。
-   `media.startRecord`: オーディオファイルの録音を開始します。
-   `media.stopRecord`: オーディオファイルの録音を停止します。
-   `media.stop`: オーディオファイルの再生を停止します。

### Additional ReadOnly パラメーター

-   **position**: オーディオの再生位置 ( 秒単位 )
    -   Not automatically updated during play; call `getCurrentPosition`
        to update.
-   **duration**: メディアの再生時間 ( 秒単位 )

media.getCurrentPosition
------------------------

Returns the current position within an audio file. Also updates the
`Media` object's `position` parameter.

``` {.sourceCode .javascript}
media.getCurrentPosition(mediaSuccess, [mediaError]);
```

### パラメーター

-   **mediaSuccess**: The callback that is passed the current position
    in seconds.
-   **mediaError**: (Optional) The callback to execute if an error
    occurs.

### 例

``` {.sourceCode .javascript}
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

media.getDuration
-----------------

Returns the duration of an audio file in seconds. If the duration is
unknown, it returns a value of -1.

``` {.sourceCode .javascript}
media.getDuration();
```

### 例

``` {.sourceCode .javascript}
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

media.pause
-----------

オーディオファイルの再生を一時停止します。

``` {.sourceCode .javascript}
media.pause();
```

### 例

``` {.sourceCode .javascript}
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
        media.pause();
    }, 10000);
}
```

media.play
----------

オーディオファイルの再生を、開始または再開します。

``` {.sourceCode .javascript}
media.play();
```

### 例

``` {.sourceCode .javascript}
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

### iOS 特有の動作

-   **numberOfLoops**: Pass this option to the `play` method to specify
    the number of times you want the media file to play, e.g.:

    ``` {.sourceCode .javascript}
    var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
    myMedia.play({ numberOfLoops: 2 })
    ```

-   **playAudioWhenScreenIsLocked**: Pass in this option to the `play`
    method to specify whether you want to allow playback when the screen
    is locked. If set to `true` (the default value), the state of the
    hardware mute button is ignored, e.g.:

    ``` {.sourceCode .javascript}
    var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
    myMedia.play({ playAudioWhenScreenIsLocked : false })
    ```

-   **order of file search**: When only a file name or simple path is
    provided, iOS searches in the `www` directory for the file, then in
    the application's `documents/tmp` directory:

    ``` {.sourceCode .javascript}
    var myMedia = new Media("audio/beer.mp3")
    myMedia.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3
    ```

media.release
-------------

Releases the underlying operating system's audio resources. This is
particularly important for Android, since there are a finite amount of
OpenCore instances for media playback. Applications should call the
`release` function for any `Media` resource that is no longer needed.

``` {.sourceCode .javascript}
media.release();
```

### 例

``` {.sourceCode .javascript}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

my_media.play();
my_media.stop();
my_media.release();
```

media.seekTo
------------

オーディオファイルの再生位置を指定します。

``` {.sourceCode .javascript}
media.seekTo(milliseconds);
```

### パラメーター

-   **milliseconds**: The position to set the playback position within
    the audio, in milliseconds.

### 例

``` {.sourceCode .javascript}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);
    my_media.play();
// SeekTo to 10 seconds after 5 seconds
setTimeout(function() {
    my_media.seekTo(10000);
}, 5000);
```

media.setVolume
---------------

オーディオファイルの音量を指定します。

``` {.sourceCode .javascript}
media.setVolume(volume);
```

### パラメーター

-   **volume**: The volume to set for playback. The value must be within
    the range of 0.0 to 1.0.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

``` {.sourceCode .javascript}
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

media.startRecord
-----------------

オーディオファイルの録音を開始します。

``` {.sourceCode .javascript}
media.startRecord();
```

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

``` {.sourceCode .javascript}
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

### Android 特有の動作

-   Android devices record audio in Adaptive Multi-Rate format. The
    specified file should end with a *.amr* extension.

### iOS 特有の動作

-   iOS only records to files of type *.wav* and returns an error if the
    file name extension is not correct.
-   If a full path is not provided, the recording is placed in the
    application's `documents/tmp` directory. This can be accessed via
    the `File` API using `LocalFileSystem.TEMPORARY`. Any subdirectory
    specified at record time must already exist.
-   「 documents:// 」 形式の URI
    を使用して、ファイルを録音・再生できます。

    ``` {.sourceCode .javascript}
    var myMedia = new Media("documents://beer.mp3")
    ```

media.stop
----------

オーディオファイルの再生を停止します。

``` {.sourceCode .javascript}
media.stop();
```

### 例

``` {.sourceCode .javascript}
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

media.stopRecord
----------------

オーディオファイルの録音を停止します。

``` {.sourceCode .javascript}
media.stopRecord();
```

### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows Phone 7 と 8
-   Windows 8

### 例

``` {.sourceCode .javascript}
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

MediaError
----------

A `MediaError` object is returned to the `mediaError` callback function
when an error occurs.

### プロパティー

-   **code**: 次のエラーコードのいずれか
-   **message**: 詳細を示したエラーメッセージ

### 定数

-   `MediaError.MEDIA_ERR_ABORTED`
-   `MediaError.MEDIA_ERR_NETWORK`
-   `MediaError.MEDIA_ERR_DECODE`
-   `MediaError.MEDIA_ERR_NONE_SUPPORTED`

