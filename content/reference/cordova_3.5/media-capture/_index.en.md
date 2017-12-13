---
title: Media Capture Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-media-capture/blob/master/RELEASENOTES.md#031-jun-05-2014">0.3.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-media-capture">}}.
{{</note>}}

This plugin provides access to the device's audio, image, and video
capture capabilities.

**WARNING**: Collection and use of images, video, or audio from the
device's camera or microphone raises important privacy issues. Your
app's privacy policy should discuss how the app uses such sensors and
whether the data recorded is shared with any other parties. In addition,
if the app's use of the camera or microphone is not apparent in the user
interface, you should provide a just-in-time notice before the app
accesses the camera or microphone (if the device operating system
doesn't do so already). That notice should provide the same information
noted above, as well as obtaining the user's permission (e.g., by
presenting choices for **OK** and **No Thanks**). Note that some app
marketplaces may require your app to provide just-in-time notice and
obtain permission from the user prior to accessing the camera or
microphone. For more information, please see the Privacy Guide.

Plugin ID
---------

    org.apache.cordova.media-capture

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.media-capture` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Objects
-------

-   Capture
-   CaptureAudioOptions
-   CaptureImageOptions
-   CaptureVideoOptions
-   CaptureCallback
-   CaptureErrorCB
-   ConfigurationData
-   MediaFile
-   MediaFileData

Methods
-------

-   capture.captureAudio
-   capture.captureImage
-   capture.captureVideo
-   MediaFile.getFormatData

Properties
----------

-   **supportedAudioModes**: The audio recording formats supported by
    the device. (ConfigurationData\[\])
-   **supportedImageModes**: The recording image sizes and formats
    supported by the device. (ConfigurationData\[\])
-   **supportedVideoModes**: The recording video resolutions and formats
    supported by the device. (ConfigurationData\[\])

capture.captureAudio
--------------------

> Start the audio recorder application and return information about
> captured audio clip files.

``` {.sourceCode .javascript}
navigator.device.capture.captureAudio(
    CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
);
```

### Description

Starts an asynchronous operation to capture audio recordings using the
device's default audio recording application. The operation allows the
device user to capture multiple recordings in a single session.

The capture operation ends when either the user exits the audio
recording application, or the maximum number of recordings specified by
`CaptureAudioOptions.limit` is reached. If no `limit` parameter value is
specified, it defaults to one (1), and the capture operation terminates
after the user records a single audio clip.

When the capture operation finishes, the `CaptureCallback` executes with
an array of `MediaFile` objects describing each captured audio clip
file. If the user terminates the operation before an audio clip is
captured, the `CaptureErrorCallback` executes with a `CaptureError`
object, featuring the `CaptureError.CAPTURE_NO_MEDIA_FILES` error code.

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
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
```

### iOS Quirks

-   iOS does not have a default audio recording application, so a simple
    user interface is provided.

CaptureAudioOptions
-------------------

> Encapsulates audio capture configuration options.

### Properties

-   **limit**: The maximum number of audio clips the device user can
    record in a single capture operation. The value must be greater than
    or equal to 1 (defaults to 1).
-   **duration**: The maximum duration of an audio sound clip, in
    seconds.

### Example

``` {.sourceCode .javascript}
// limit capture operation to 3 media files, no longer than 10 seconds each
var options = { limit: 3, duration: 10 };

navigator.device.capture.captureAudio(captureSuccess, captureError, options);
```

### Android Quirks

-   The `duration` parameter is not supported. Recording lengths can't
    be limited programmatically.

### iOS Quirks

-   The `limit` parameter is not supported, so only one recording can be
    created for each invocation.

capture.captureImage
--------------------

> Start the camera application and return information about captured
> image files.

``` {.sourceCode .javascript}
navigator.device.capture.captureImage(
    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
);
```

### Description

Starts an asynchronous operation to capture images using the device's
camera application. The operation allows users to capture more than one
image in a single session.

The capture operation ends either when the user closes the camera
application, or the maximum number of recordings specified by
`CaptureAudioOptions.limit` is reached. If no `limit` value is
specified, it defaults to one (1), and the capture operation terminates
after the user captures a single image.

When the capture operation finishes, it invokes the `CaptureCB` callback
with an array of `MediaFile` objects describing each captured image
file. If the user terminates the operation before capturing an image,
the `CaptureErrorCB` callback executes with a `CaptureError` object
featuring a `CaptureError.CAPTURE_NO_MEDIA_FILES` error code.

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
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
```

CaptureImageOptions
-------------------

> Encapsulates image capture configuration options.

### Properties

-   **limit**: The maximum number of images the user can capture in a
    single capture operation. The value must be greater than or equal to
    1 (defaults to 1).

### Example

``` {.sourceCode .javascript}
// limit capture operation to 3 images
var options = { limit: 3 };

navigator.device.capture.captureImage(captureSuccess, captureError, options);
```

### iOS Quirks

-   The **limit** parameter is not supported, and only one image is
    taken per invocation.

capture.captureVideo
--------------------

> Start the video recorder application and return information about
> captured video clip files.

``` {.sourceCode .javascript}
navigator.device.capture.captureVideo(
    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
);
```

### Description

Starts an asynchronous operation to capture video recordings using the
device's video recording application. The operation allows the user to
capture more than one recordings in a single session.

The capture operation ends when either the user exits the video
recording application, or the maximum number of recordings specified by
`CaptureVideoOptions.limit` is reached. If no `limit` parameter value is
specified, it defaults to one (1), and the capture operation terminates
after the user records a single video clip.

When the capture operation finishes, it the `CaptureCB` callback
executes with an array of `MediaFile` objects describing each captured
video clip file. If the user terminates the operation before capturing a
video clip, the `CaptureErrorCB` callback executes with a `CaptureError`
object featuring a `CaptureError.CAPTURE_NO_MEDIA_FILES` error code.

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
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
```

CaptureVideoOptions
-------------------

> Encapsulates video capture configuration options.

### Properties

-   **limit**: The maximum number of video clips the device's user can
    capture in a single capture operation. The value must be greater
    than or equal to 1 (defaults to 1).
-   **duration**: The maximum duration of a video clip, in seconds.

### Example

``` {.sourceCode .javascript}
// limit capture operation to 3 video clips
var options = { limit: 3 };

navigator.device.capture.captureVideo(captureSuccess, captureError, options);
```

### iOS Quirks

-   The **limit** parameter is not supported. Only one video is recorded
    per invocation.

CaptureCB
---------

> Invoked upon a successful media capture operation.

``` {.sourceCode .javascript}
function captureSuccess( MediaFile[] mediaFiles ) { ... };
```

### Description

This function executes after a successful capture operation completes.
At this point a media file has been captured, and either the user has
exited the media capture application, or the capture limit has been
reached.

Each `MediaFile` object describes a captured media file.

### Example

``` {.sourceCode .javascript}
// capture callback
function captureSuccess(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
};
```

CaptureError
------------

> Encapsulates the error code resulting from a failed media capture
> operation.

### Properties

-   **code**: One of the pre-defined error codes listed below.

### Constants

-   `CaptureError.CAPTURE_INTERNAL_ERR`: The camera or microphone failed
    to capture image or sound.
-   `CaptureError.CAPTURE_APPLICATION_BUSY`: The camera or audio capture
    application is currently serving another capture request.
-   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Invalid use of the API
    (e.g., the value of `limit` is less than one).
-   `CaptureError.CAPTURE_NO_MEDIA_FILES`: The user exits the camera or
    audio capture application before capturing anything.
-   `CaptureError.CAPTURE_NOT_SUPPORTED`: The requested capture
    operation is not supported.

CaptureErrorCB
--------------

> Invoked if an error occurs during a media capture operation.

``` {.sourceCode .javascript}
function captureError( CaptureError error ) { ... };
```

### Description

This function executes if an error occurs when trying to launch a media
capture operation. Failure scenarios include when the capture
application is busy, a capture operation is already taking place, or the
user cancels the operation before any media files are captured.

This function executes with a `CaptureError` object containing an
appropriate error `code`.

### Example

``` {.sourceCode .javascript}
// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};
```

ConfigurationData
-----------------

> Encapsulates a set of media capture parameters that a device supports.

### Description

Describes media capture modes supported by the device. The configuration
data includes the MIME type, and capture dimensions for video or image
capture.

The MIME types should adhere to
[RFC2046](http://www.ietf.org/rfc/rfc2046.txt). Examples:

-   `video/3gpp`
-   `video/quicktime`
-   `image/jpeg`
-   `audio/amr`
-   `audio/wav`

### Properties

-   **type**: The ASCII-encoded lowercase string representing the media
    type. (DOMString)
-   **height**: The height of the image or video in pixels. The value is
    zero for sound clips. (Number)
-   **width**: The width of the image or video in pixels. The value is
    zero for sound clips. (Number)

### Example

``` {.sourceCode .javascript}
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
```

Not supported by any platform. All configuration data arrays are empty.

MediaFile.getFormatData
-----------------------

> Retrieves format information about the media capture file.

``` {.sourceCode .javascript}
mediaFile.getFormatData(
    MediaFileDataSuccessCB successCallback,
    [MediaFileDataErrorCB errorCallback]
);
```

### Description

This function asynchronously attempts to retrieve the format information
for the media file. If successful, it invokes the
`MediaFileDataSuccessCB` callback with a `MediaFileData` object. If the
attempt fails, this function invokes the `MediaFileDataErrorCB`
callback.

### Supported Platforms

-   Android
-   iOS

### Android Quirks

The API to access media file format information is limited, so not all
`MediaFileData` properties are supported.

### iOS Quirks

The API to access media file format information is limited, so not all
`MediaFileData` properties are supported.

MediaFile
---------

> Encapsulates properties of a media capture file.

### Properties

-   **name**: The name of the file, without path information.
    (DOMString)
-   **fullPath**: The full path of the file, including the name.
    (DOMString)
-   **type**: The file's mime type (DOMString)
-   **lastModifiedDate**: The date and time when the file was last
    modified. (Date)
-   **size**: The size of the file, in bytes. (Number)

### Methods

-   **MediaFile.getFormatData**: Retrieves the format information of the
    media file.

MediaFileData
-------------

> Encapsulates format information about a media file.

### Properties

-   **codecs**: The actual format of the audio and video content.
    (DOMString)
-   **bitrate**: The average bitrate of the content. The value is zero
    for images. (Number)
-   **height**: The height of the image or video in pixels. The value is
    zero for audio clips. (Number)
-   **width**: The width of the image or video in pixels. The value is
    zero for audio clips. (Number)
-   **duration**: The length of the video or sound clip in seconds. The
    value is zero for images. (Number)

### Android Quirks

Supports the following `MediaFileData` properties:

-   **codecs**: Not supported, and returns `null`.
-   **bitrate**: Not supported, and returns zero.
-   **height**: Supported: image and video files only.
-   **width**: Supported: image and video files only.
-   **duration**: Supported: audio and video files only.

### iOS Quirks

Supports the following `MediaFileData` properties:

-   **codecs**: Not supported, and returns `null`.
-   **bitrate**: Supported on iOS4 devices for audio only. Returns zero
    for images and videos.
-   **height**: Supported: image and video files only.
-   **width**: Supported: image and video files only.
-   **duration**: Supported: audio and video files only.

