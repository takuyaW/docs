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

このプラグインを使用して、オーディオファイルの再生と録音を行います。

**注意**: 現在の実装方式は、W3C の仕様 ( メディアキャプチャーに関して )
に準拠しておらず、利便上提供しているものです。リリース予定の次期の実装方式では、最新の
W3C の仕様に準拠する予定です。また、その場合には、現在の API
を廃止することもあります。

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
-   **mediaSuccess**: ( 任意 ) `Media`
    オブジェクト側の再生・録音・停止処理が完了した後に、実行されるコールバック
    *(Function)*
-   **mediaError**: ( 任意 )
    エラーが発生した場合に、実行されるコールバック *(Function)*
-   **mediaStatus**: ( 任意 )
    ステータスが変化したことを示すときに使用されるコールバック
    *(Function)*

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
-   `media.getDuration`: オーディオファイルの再生時間を返します。
-   `media.play`: オーディオファイルの再生を、開始または再開します。
-   `media.pause`: オーディオファイルの再生を一時停止します。
-   `media.release`: オーディオリソースを解放 ( release ) します。
-   `media.seekTo`: オーディオファイル内の再生位置を動かします。
-   `media.setVolume`: オーディオ再生時の音量を設定します。
-   `media.startRecord`: オーディオファイルの録音を開始します。
-   `media.stopRecord`: オーディオファイルの録音を停止します。
-   `media.stop`: オーディオファイルの再生を停止します。

### Additional ReadOnly パラメーター

-   **position**: オーディオの再生位置 ( 秒単位 )
    -   再生中、自動的には値を更新しないので、`getCurrentPosition`
        メソッドを呼び、値を更新します。
-   **duration**: メディアの再生時間 ( 秒単位 )

media.getCurrentPosition
------------------------

オーディオファイル内の現在の再生位置を返します。また、`Media`
オブジェクト内の `position` パラメーターを更新します。

``` {.sourceCode .javascript}
media.getCurrentPosition(mediaSuccess, [mediaError]);
```

### パラメーター

-   **mediaSuccess**: 現在の再生位置 ( 秒単位 )
    を渡して実行されるコールバック
-   **mediaError**: ( 任意 ) エラーの発生時に実行されるコールバック

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

オーディオファイルの再生時間を、秒単位で返します。再生時間が不明の場合には、「
-1 」 の値を返します。

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

-   **numberOfLoops**: このオプションを `play`
    メソッドに渡して、メディアファイルの再生回数を指定します。次に例を示します。

    ``` {.sourceCode .javascript}
    var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
    myMedia.play({ numberOfLoops: 2 })
    ```

-   **playAudioWhenScreenIsLocked**: このオプションを `play`
    メソッドに渡して、画面にロックがかかった状態でも、再生を続行するか指定します。
    `true` ( デフォルトはこちら )
    に設定した場合、ハードウェア側のミュートボタンの設定を無視します。次に例を示します。

    ``` {.sourceCode .javascript}
    var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
    myMedia.play({ playAudioWhenScreenIsLocked : false })
    ```

-   **ファイルの検索順序**: ファイル名のみまたは不完全なパス ( simple
    path ) を指定している場合、iOS では、最初に、`www`
    ディレクトリー内を検索して、見つからなければ、次に、アプリの
    `documents/tmp` ディレクトリーを検索します。

    ``` {.sourceCode .javascript}
    var myMedia = new Media("audio/beer.mp3")
    myMedia.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3
    ```

media.release
-------------

オペレーティングシステム側のオーディオリソースを解放 ( release )
します。特に、Android では、メディア再生に割り当てることができる
OpenCore
インスタンスの数に限りがあるため、解放処理は重要となります。`Media`
リソースが不要になった場合には、`release`
メソッドを都度呼び出すことを推奨します。.

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

-   **milliseconds**: オーディオの再生位置を、ミリ秒単位で指定します。

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

-   **volume**: 再生時の音量を指定します。0.0 から 1.0
    の間で、値を指定します。

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

-   Android 端末では、AMR ( Adaptive Multi-Rate )
    形式で、オーディオを録音します。よって、ファイルの拡張子は、\*.amr\*
    になります。

### iOS 特有の動作

-   iOS では、録音には、\*.wav\*
    形式のファイルのみ使用します。ファイルの拡張子が正しくない場合、エラーを返します。
-   フルパス ( full path ) を指定しない場合、アプリの `documents/tmp`
    ディレクトリーに、録音ファイルが置かれます。このファイルへのアクセスには、`ファイル操作`
    API ( File API ) を使用します ( `LocalFileSystem.TEMPORARY` を使用
    )。録音時にサブディレクトリーを使用する場合には、事前に作成しておく必要があります。
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

エラーが発生した場合、`mediaError` コールバック関数へ `MediaError`
オブジェクトが渡されます。

### プロパティー

-   **code**: 次のエラーコードのいずれか
-   **message**: 詳細を示したエラーメッセージ

### 定数

-   `MediaError.MEDIA_ERR_ABORTED`
-   `MediaError.MEDIA_ERR_NETWORK`
-   `MediaError.MEDIA_ERR_DECODE`
-   `MediaError.MEDIA_ERR_NONE_SUPPORTED`

