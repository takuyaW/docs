---
title: Media Plugin
---

Tested Version: [3.0.1](https://github.com/apache/cordova-plugin-media/releases/tag/3.0.1)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-media">}}.
{{</note>}}

This plugin provides the ability to record and play back audio files on
a device.

{{<note>}}
The current implementation does not adhere to a W3C specification for
media capture, and is provided for convenience only. A future
implementation will adhere to the latest W3C specification and may
deprecate the current APIs.
{{</note>}}

This plugin defines a global `Media` Constructor. Although in the global
scope, it is not available until after the `deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Media);
}
{{</highlight>}}

Plugin ID
---------

{{<syntax>}}
    cordova-plugin-media
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`Media` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows

Media Object
------------

{{<highlight javascript>}}
var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
{{</highlight>}}

### Parameters

-   **src**: A URI containing the audio content. *(DOMString)*
-   **mediaSuccess**: (Optional) The callback that executes after a
    `Media` object has completed the current play, record, or stop
    action. *(Function)*
-   **mediaError**: (Optional) The callback that executes if an error
    occurs. *(Function)*
-   **mediaStatus**: (Optional) The callback that executes to indicate
    status changes. *(Function)*

{{<note>}}
<code>cdvfile</code> path is supported as <code>src</code> parameter:
{{<highlight javascript>}}
var my_media = new Media('cdvfile://localhost/temporary/recording.mp3', ...);
{{</highlight>}}
{{</note>}}

### Additional ReadOnly Parameters

-   **position**: The position within the audio playback, in seconds.
    -   Not automatically updated during play; call `getCurrentPosition`
        to update.
-   **duration**: The duration of the media, in seconds.

### Constants

The following constants are reported as the only parameter to the
`mediaStatus` callback:

-   `Media.MEDIA_NONE` = 0;
-   `Media.MEDIA_STARTING` = 1;
-   `Media.MEDIA_RUNNING` = 2;
-   `Media.MEDIA_PAUSED` = 3;
-   `Media.MEDIA_STOPPED` = 4;

### Methods

-   `media.getCurrentAmplitude`: Returns the current position within an
    audio file.
-   `media.getCurrentPosition`: Returns the current position within an
    audio file.
-   `media.getDuration`: Returns the duration of an audio file.
-   `media.play`: Start or resume playing an audio file.
-   `media.pause`: Pause playback of an audio file.
-   `media.pauseRecord`: Pause recording of an audio file.
-   `media.release`: Releases the underlying operating system's audio
    resources.
-   `media.resumeRecord`: Resume recording of an audio file.
-   `media.seekTo`: Moves the position within the audio file.
-   `media.setVolume`: Set the volume for audio playback.
-   `media.startRecord`: Start recording an audio file.
-   `media.stopRecord`: Stop recording an audio file.
-   `media.stop`: Stop playing an audio file.

#### media.getCurrentAmplitude

Returns the current amplitude of the current recording.

{{<highlight javascript>}}
    media.getCurrentAmplitude(mediaSuccess, [mediaError]);
{{</highlight>}}

##### Supported Platforms

-   Android
-   iOS

##### Parameters

-   **mediaSuccess**: The callback that is passed the current amplitude
    (0.0 - 1.0).
-   **mediaError**: (Optional) The callback to execute if an error
    occurs.

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.getCurrentPosition

Returns the current position within an audio file. Also updates the
`Media` object's `position` parameter.

{{<highlight javascript>}}
    media.getCurrentPosition(mediaSuccess, [mediaError]);
{{</highlight>}}

##### Parameters

-   **mediaSuccess**: The callback that is passed the current position
    in seconds.
-   **mediaError**: (Optional) The callback to execute if an error
    occurs.


##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.getDuration

Returns the duration of an audio file in seconds. If the duration is
unknown, it returns a value of -1.

{{<highlight javascript>}}
    media.getDuration();
{{</highlight>}}


##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.play

Starts or resumes playing an audio file.

{{<highlight javascript>}}
media.play();
{{</highlight>}}

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

##### iOS Quirks

-   **numberOfLoops**: Pass this option to the `play` method to specify
    the number of times you want the media file to play, e.g.:

    {{<highlight javascript>}}var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
myMedia.play({ numberOfLoops: 2 });{{</highlight>}}

-   **playAudioWhenScreenIsLocked**: Pass in this option to the `play`
    method to specify whether you want to allow playback when the screen
    is locked. If set to `true` (the default value), the state of the
    hardware mute button is ignored, e.g.:

    {{<highlight javascript>}}var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
myMedia.play({ playAudioWhenScreenIsLocked : true });
myMedia.setVolume('1.0');{{</highlight>}}

    {{<note>}}
    To allow playback with the screen locked or background audio you have to add <code>audio</code> to <code>UIBackgroundModes</code> in the <code>info.plist</code> file. See {{<link href="https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html#//apple_ref/doc/uid/TP40007072-CH4-SW23" title="Apple documentation">}}. Also note that the audio has to be started before going to background.
    {{</note>}}

-   **order of file search**: When only a file name or simple path is
    provided, iOS searches in the `www` directory for the file, then in
    the application's `documents/tmp` directory:

    {{<highlight javascript>}}var myMedia = new Media("audio/beer.mp3")
myMedia.play()  // first looks for file in www/audio/beer.mp3 then in <application>/documents/tmp/audio/beer.mp3{{</highlight>}}

#### media.pause

Pauses playing an audio file.

{{<highlight javascript>}}
media.pause();
{{</highlight>}}

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.pauseRecord

Pauses recording an audio file.

{{<highlight javascript>}}
media.pauseRecord();
{{</highlight>}}

##### Supported Platforms

-   iOS

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.release

Releases the underlying operating system's audio resources. This is
particularly important for Android, since there are a finite amount of
OpenCore instances for media playback. Applications should call the
`release` function for any `Media` resource that is no longer needed.

{{<highlight javascript>}}
media.release();
{{</highlight>}}

##### Quick Example

{{<highlight javascript>}}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);

my_media.play();
my_media.stop();
my_media.release();
{{</highlight>}}

#### media.resumeRecord

Resume recording an audio file.

{{<highlight javascript>}}
media.resumeRecord();
{{</highlight>}}

##### Supported Platforms

-   iOS

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.seekTo

Sets the current position within an audio file.

{{<highlight javascript>}}
media.seekTo(milliseconds);
{{</highlight>}}

##### Parameters

-   **milliseconds**: The position to set the playback position within
    the audio, in milliseconds.

##### Quick Example

{{<highlight javascript>}}
// Audio player
//
var my_media = new Media(src, onSuccess, onError);
    my_media.play();
// SeekTo to 10 seconds after 5 seconds
setTimeout(function() {
    my_media.seekTo(10000);
}, 5000);
{{</highlight>}}

#### media.setVolume

Set the volume for an audio file.

{{<highlight javascript>}}
media.setVolume(volume);
{{</highlight>}}

##### Parameters

-   **volume**: The volume to set for playback. The value must be within
    the range of 0.0 to 1.0.

##### Supported Platforms

-   Android
-   iOS

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.startRecord

Starts recording an audio file.

{{<highlight javascript>}}
media.startRecord();
{{</highlight>}}

##### Supported Platforms

-   Android
-   iOS
-   Windows

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

##### Android Quirks

-   Android devices record audio in AAC ADTS file format. The specified
    file should end with a `.aac` extension.
-   The hardware volume controls are wired up to the media volume while
    any Media objects are alive. Once the last created Media object has
    `release()` called on it, the volume controls revert to their
    default behaviour. The controls are also reset on page navigation,
    as this releases all Media objects.

##### iOS Quirks

-   iOS only records to files of type `.wav` and `.m4a` and returns an
    error if the file name extension is not correct.
-   If a full path is not provided, the recording is placed in the
    application's `documents/tmp` directory. This can be accessed via
    the `File` API using `LocalFileSystem.TEMPORARY`. Any subdirectory
    specified at record time must already exist.
-   Files can be recorded and played back using the documents URI:

    {{<highlight javascript>}}var myMedia = new Media("documents://beer.mp3"){{</highlight>}}

-   Since iOS 10 it's mandatory to add a `NSMicrophoneUsageDescription`
    entry in the info.plist.

NSMicrophoneUsageDescription describes the reason that the app accesses
the user’s microphone. When the system prompts the user to allow access,
this string is displayed as part of the dialog box. To add this entry
you can pass the variable `MICROPHONE_USAGE_DESCRIPTION` on plugin
install.

If you don't pass the variable, the plugin will add an empty string as
value.

##### Windows Quirks

-   Windows devices can use MP3, M4A and WMA formats for recorded audio.
    However in most cases it is not possible to use MP3 for audio
    recording on *Windows Phone 8.1* devices, because an MP3 encoder is
    [not shipped with Windows Phone](https://msdn.microsoft.com/en-us/library/windows/apps/windows.media.mediaproperties.mediaencodingprofile.createmp3.aspx).
-   If a full path is not provided, the recording is placed in the
    `AppData/temp` directory. This can be accessed via the `File` API
    using `LocalFileSystem.TEMPORARY` or `ms-appdata:///temp/<filename>`
    URI.
-   Any subdirectory specified at record time must already exist.

#### media.stop

Stops playing an audio file.

{{<highlight javascript>}}
media.stop();
{{</highlight>}}

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### media.stopRecord

Stops recording an audio file.

{{<highlight javascript>}}
media.stopRecord();
{{</highlight>}}

##### Supported Platforms

-   Android
-   iOS
-   Windows

##### Quick Example

{{<highlight javascript>}}
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
{{</highlight>}}

MediaError Object
-----------------

A `MediaError` object is returned to the `mediaError` callback function
when an error occurs.

### Properties

-   **code**: One of the predefined error codes listed below.
-   **message**: An error message describing the details of the error.

### Constants

-   `MediaError.MEDIA_ERR_ABORTED` = 1
-   `MediaError.MEDIA_ERR_NETWORK` = 2
-   `MediaError.MEDIA_ERR_DECODE` = 3
-   `MediaError.MEDIA_ERR_NONE_SUPPORTED` = 4

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
