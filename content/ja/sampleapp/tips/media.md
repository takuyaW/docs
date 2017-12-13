音楽の再生方法
==============

Monaca で音楽を再生する場合は、次の 2 通りの作成方法があります。

-   html5\_audio (iOS 端末では、動作しない可能性があります)
-   media\_api (推奨)

HTML 5 の &lt;audio&gt; タグを使用する。
----------------------------------------

<div class="admonition warning">

HTML5の `audio` タグは、iOS端末では正常に動作しない可能性があります。

</div>

### 音の再生 ( 外部の音源を使用 )

HTML5の `<audio>`
タグは、URLを指定することによって、外部の音源を再生することができます。
たとえば、次のコードでは `<audio>`
タグを使用して、指定された音源ファイルを再生しています。

``` {.sourceCode .html}
...
<body>
  <!-- Play the music when the Play control is pressed -->
  <audio src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3" controls></audio>
  <!-- The music is played as soon as the application is loaded -->
  <!-- <audio src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3" autoplay></audio> -->
</body>
...
```

### 音の再生 ( Monaca プロジェクト内の音源を使用 )

HTML5 `<audio>`
タグは、Monacaプロジェクト内に配置された音源を再生するためにも使用できます。
たとえば、次のコードは `<audio>` タグを使って `www/`
フォルダの下にある音源ファイルを再生しています。

``` {.sourceCode .html}
...
<body>
  <!-- Play the music when the Play control is pressed -->
  <audio src="sample.mp3" controls></audio>
  <!-- The music is played as soon as the application is loaded -->
  <!-- <audio src="sample.mp3" autoplay></audio> -->
</body>
...
```

Media プラグインを使用する。
----------------------------

Media
プラグインでは、開始、一時停止、停止、再開、音量の設定など、音源ファイルの再生方法を制御する機能があります。

<div class="admonition note">

はじめに、Monaca クラウドIDE で `Media` プラグインを
有効 &lt;add\_plugins&gt; にする必要があります。

</div>

### 音の再生 ( 外部の音源を使用 )

次の例では、外部の音源ファイルを使用する方法を示します。
音源の再生、一時停止、停止することができます。

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!--<meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">-->
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">
    <link rel="stylesheet" href="css/style.css">
    <script>
        var media = null;
        var mediaTimer = null;
        var srcFile = "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3";

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("ready");
            media = new Media (srcFile , onSuccess, onError);
        }

        function playSound(){
            // play the media file one time.
            media.play({numberOfLoops: 0});
            // start the timer
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // Return a current playback position
                    media.getCurrentPosition(
                        //A Callback function if it's success
                        function(position) {
                            if (position > -1) {
                                //If the playback stops at "-0.001" position, set the timer to 0.
                                if(position == -0.001){
                                    position = 0;
                                }
                                setAudioPosition((position) + " sec");
                            }
                        },
                        //A callback function in case of failure
                        function(error) {
                            console.log("Error getting pos=" + error);
                            setAudioPosition("Error: " + error);
                        }
                    );
                }, 1000);
            }
        }

        function pauseSound(){
            if (media) {
                media.pause();
            }
        }

        function stopSound(){
            if (media) {
                media.stop();
            }
        }

        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        function onSuccess(){
            console.log("Successfully initialize a media file.");
        }

        function onError(error){
            console.log("Failed to initialize a media file. [ Error code: " + error.code + ", Error message: " + error.message + "]");
        }
    </script>
</head>
<body style="text-align: center">
    <h1>Playing Sound</h1>
    <button onclick="playSound()">Play</button>
    <button onclick="pauseSound()">Pause</button>
    <button onclick="stopSound()">Stop</button><br />
    <p id="audio_position"></p>
</body>
</html>
```

### 音の再生 ( Monaca プロジェクト内の音源を使用 )

次の例では、 www/ フォルダの下にある音源ファイルの使い方を示します。
音源の再生、一時停止、停止することができます。

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!--<meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">-->
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">
    <link rel="stylesheet" href="css/style.css">
    <script>
        var media = null;
        var mediaTimer = null;
        var srcFile = "test.mp3";

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("ready");
            media = new Media (getPath() + srcFile , onSuccess, onError);
        }

        function getPath() {
            var str = location.pathname;
            var i = str.lastIndexOf('/');
            return str.substring(0,i+1);
        }

        function playSound(){
            // play the media file one time.
            media.play({numberOfLoops: 0});
            // start the timer
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // Return a current playback position
                    media.getCurrentPosition(
                        //A Callback function if it's success
                        function(position) {
                            if (position > -1) {
                                //If the playback stops at "-0.001" position, set the timer to 0.
                                if(position == -0.001){
                                    position = 0;
                                }
                                setAudioPosition((position) + " sec");
                            }
                        },
                        //A callback function in case of failure
                        function(error) {
                            console.log("Error getting pos=" + error);
                            setAudioPosition("Error: " + error);
                        }
                    );
                }, 1000);
            }
        }

        function pauseSound(){
            if (media) {
                media.pause();
            }
        }

        function stopSound(){
            if (media) {
                media.stop();
            }
        }

        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        function onSuccess(){
            console.log("Successfully initialize a media file.");
        }

        function onError(error){
            console.log("Failed to initialize a media file. [ Error code: " + error.code + ", Error message: " + error.message + "]");
        }
    </script>
</head>
<body style="text-align: center">
    <h1>Playing Sound</h1>
    <button onclick="playSound()">Play</button>
    <button onclick="pauseSound()">Pause</button>
    <button onclick="stopSound()">Stop</button><br />
    <p id="audio_position"></p>
</body>
</html>
```
