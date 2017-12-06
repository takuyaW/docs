---
title: Media Plugin
---

# Media Plugin

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-media/blob/master/RELEASENOTES.md#0211-jun-05-2014">0.2.11</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-media">}}.
{{</note>}}

This plugin provides the ability to record and play back audio files on
a device.

**NOTE**: The current implementation does not adhere to a W3C
specification for media capture, and is provided for convenience only. A
future implementation will adhere to the latest W3C specification and
may deprecate the current APIs.

Plugin ID
---------

    org.apache.cordova.media

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.media` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Media
-----

``` {.sourceCode .javascript}
var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
```

### Parameters

-   **src**: A URI containing the audio content. *(DOMString)*
-   **mediaSuccess**: (Optional) The callback that executes after a
    `Media` object has completed the current play, record, or stop
    action. *(Function)*
-   **mediaError**: (Optional) The callback that executes if an error
    occurs. *(Function)*
-   **mediaStatus**: (Optional) The callback that executes to indicate
    status changes. *(Function)*

### Constants

The following constants are reported as the only parameter to the
`mediaStatus` callback:

-   `Media.MEDIA_NONE` = 0;
-   `Media.MEDIA_STARTING` = 1;
-   `Media.MEDIA_RUNNING` = 2;
-   `Media.MEDIA_PAUSED` = 3;
-   `Media.MEDIA_STOPPED` = 4;

### Methods

-   `media.getCurrentPosition`: Returns the current position within an
    audio file.
-   `media.getDuration`: Returns the duration of an audio file.
-   `media.play`: Start or resume playing an audio file.
-   `media.pause`: Pause playback of an audio file.
-   `media.release`: Releases the underlying operating system's audio
    resources.
-   `media.seekTo`: Moves the position within the audio file.
-   `media.setVolume`: Set the volume for audio playback.
-   `media.startRecord`: Start recording an audio file.
-   `media.stopRecord`: Stop recording an audio file.
-   `media.stop`: Stop playing an audio file.

### Additional ReadOnly Parameters

-   **position**: The position within the audio playback, in seconds.
    -   Not automatically updated during play; call `getCurrentPosition`
        to update.
-   **duration**: The duration of the media, in seconds.

media.getCurrentPosition
------------------------

Returns the current position within an audio file. Also updates the
`Media` object's `position` parameter.

``` {.sourceCode .javascript}
media.getCurrentPosition(mediaSuccess, [mediaError]);
```

### Parameters

-   **mediaSuccess**: The callback that is passed the current position
    in seconds.
-   **mediaError**: (Optional) The callback to execute if an error
    occurs.

### Quick Example

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

### Quick Example

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

Pauses playing an audio file.

``` {.sourceCode .javascript}
media.pause();
```

### Quick Example

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

Starts or resumes playing an audio file.

``` {.sourceCode .javascript}
media.play();
```

### Quick Example

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

### iOS Quirks

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

### Quick Example

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

Sets the current position within an audio file.

``` {.sourceCode .javascript}
media.seekTo(milliseconds);
```

### Parameters

-   **milliseconds**: The position to set the playback position within
    the audio, in milliseconds.

### Quick Example

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

Set the volume for an audio file.

``` {.sourceCode .javascript}
media.setVolume(volume);
```

### Parameters

-   **volume**: The volume to set for playback. The value must be within
    the range of 0.0 to 1.0.

### Supported Platforms

-   Android
-   iOS

### Quick Example

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

Starts recording an audio file.

``` {.sourceCode .javascript}
media.startRecord();
```

### Supported Platforms

-   Android
-   iOS

### Quick Example

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

### Android Quirks

-   Android devices record audio in Adaptive Multi-Rate format. The
    specified file should end with a *.amr* extension.

### iOS Quirks

-   iOS only records to files of type *.wav* and returns an error if the
    file name extension is not correct.
-   If a full path is not provided, the recording is placed in the
    application's `documents/tmp` directory. This can be accessed via
    the `File` API using `LocalFileSystem.TEMPORARY`. Any subdirectory
    specified at record time must already exist.
-   Files can be recorded and played back using the documents URI:

    ``` {.sourceCode .javascript}
    var myMedia = new Media("documents://beer.mp3")
    ```

media.stop
----------

Stops playing an audio file.

``` {.sourceCode .javascript}
media.stop();
```

### Quick Example

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

Stops recording an audio file.

``` {.sourceCode .javascript}
media.stopRecord();
```

### Supported Platforms

-   Android
-   iOS
-   Windows Phone 7 and 8
-   Windows 8

### Quick Example

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

### Properties

-   **code**: One of the predefined error codes listed below.
-   **message**: An error message describing the details of the error.

### Constants

-   `MediaError.MEDIA_ERR_ABORTED`
-   `MediaError.MEDIA_ERR_NETWORK`
-   `MediaError.MEDIA_ERR_DECODE`
-   `MediaError.MEDIA_ERR_NONE_SUPPORTED`

