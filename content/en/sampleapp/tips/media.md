---
title: Playing Sound and Music
---

# Playing Sound and Music

In Monaca, there are two ways to play sound and music such as:

- [Using HTML5 <audio> Tag](#html5-audio) (May not Work on iOS Devices)
- [Using Cordova Media Plugin](#media-api) (Highly Recommended)

## <a name="html5-audio"></a> Using HTML5 <audio> Tag

{{<warning>}}
    The HTML5 <code>audio</code> tag may not work properly on iOS devices.
{{</warning>}}

### Playing Sound from External Sources

HTML5 `<audio>` tag can be used to play sound located on external
sources by specifying its URL. For example, the following code snippet
is using `<audio>` tag to play an audio file based on a specified
source:

{{<highlight html>}}
...
<body>
  <!-- Play the music when the Play control is pressed -->
  <audio src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3" controls></audio>
  <!-- The music is played as soon as the application is loaded -->
  <!-- <audio src="http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3" autoplay></audio> -->
</body>
...
{{</highlight>}}

### Playing the Sound Located inside a Monaca Project

HTML5 `<audio>` tag can also be used to play sound located locally
within a Monaca project. For example, the following code snippet is
using `<audio>` tag to play an audio file located under `www/` folder:

{{<highlight html>}}
...
<body>
  <!-- Play the music when the Play control is pressed -->
  <audio src="sample.mp3" controls></audio>
  <!-- The music is played as soon as the application is loaded -->
  <!-- <audio src="sample.mp3" autoplay></audio> -->
</body>
...
{{</highlight>}}

## <a name="media-api"></a> Using Cordova Media Plugin

With Cordova Media plugin, you have more functions to control over how
you play a sound file such as start, pause, stop, resume, set volume and
so on.

{{<note>}}
    Before getting started, you are required to {{<link href="/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins" title="enable">}} Media plugin in Monaca Cloud IDE.onaca Cloud IDE.
{{</note>}}

### Playing Sound from External Sources

In the following example, we will show you how use a sound file from an
external source. You can play, pause and stop the music.

{{<highlight html>}}
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
{{</highlight>}}

### Playing the Sound Located inside a Monaca Project

In the following example, we will show you how use a local sound file
located under `www/` folder. You can play, pause and stop the music.

{{<highlight html>}}
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
{{</highlight>}}
