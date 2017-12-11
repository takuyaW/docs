---
title: Camera Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-camera/blob/master/RELEASENOTES.md#030-jun-05-2014">0.3.0</a></div>
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-camera">}}.
{{</note>}}

This plugin provides an API for taking pictures and for choosing images
from the system's image library.

Plugin ID
---------

{{<syntax>}}
org.apache.cordova.camera
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins) `Camera`
plugin in Monaca Cloud IDE.

navigator.camera.getPicture
---------------------------

Takes a photo using the camera, or retrieves a photo from the device's
image gallery. The image is passed to the success callback as a
base64-encoded `String`, or as the URI for the image file. The method
itself returns a `CameraPopoverHandle` object that can be used to
reposition the file selection popover.

``` {.sourceCode .javascript}
navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
```

### Description

The `camera.getPicture` function opens the device's default camera
application that allows users to snap pictures. This behavior occurs by
default, when `Camera.sourceType` equals
`Camera.PictureSourceType.CAMERA`. Once the user snaps the photo, the
camera application closes and the application is restored.

If `Camera.sourceType` is `Camera.PictureSourceType.PHOTOLIBRARY` or
`Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a dialog displays that
allows users to select an existing image. The `camera.getPicture`
function returns a `CameraPopoverHandle` object, which can be used to
reposition the image selection dialog, for example, when the device
orientation changes.

The return value is sent to the `cameraSuccess` callback function, in
one of the following formats, depending on the specified
`cameraOptions`:

-   A `String` containing the base64-encoded photo image.
-   A `String` representing the image file location on local storage
    (default).

You can do whatever you want with the encoded image or URI, for example:

-   Render the image in an `<img>` tag, as in the example below
-   Save the data locally (`LocalStorage`,
    [Lawnchair](http://brianleroux.github.com/lawnchair/), etc.)
-   Post the data to a remote server

{{<note>}}
Photo resolution on newer devices is quite good. Photos selected from
the device's gallery are not downscaled to a lower quality, even if a <code>quality</code> parameter is specified. To avoid common memory problems, set <code>Camera.destinationType</code> to <code>FILE_URI</code> rather than <code>DATA_URL</code>.
{{</note>}}

### Supported Platforms

-   Android
-   iOS

### Android Quirks

*Android 4.4 only*: Android 4.4 introduced a new [Storage Access
Framework](https://developer.android.com/guide/topics/providers/document-provider.html)
that makes it easier for users to browse and open documents across all
of their preferred document storage providers. Cordova has not yet been
fully integrated with this new Storage Access Framework. Because of
this, the `getPicture()` method will not correctly return pictures when
the user selects from the "Recent", "Drive", "Images", or "External
Storage" folders when the `destinationType` is `FILE_URI`. However, the
user will be able to correctly select any pictures if they go through
the "Gallery" app first. Potential workarounds for this issue are
documented on [this StackOverflow
question](http://stackoverflow.com/questions/19834842/android-gallery-on-kitkat-returns-different-uri-for-intent-action-get-content/20177611).
Please see [CB-5398](https://issues.apache.org/jira/browse/CB-5398) to
track this issue.

Android uses intents to launch the camera activity on the device to
capture images, and on phones with low memory, the Cordova activity may
be killed. In this scenario, the image may not appear when the Cordova
activity is restored.

### iOS Quirks

Including a JavaScript `alert()` in either of the callback functions can
cause problems. Wrap the alert within a `setTimeout()` to allow the iOS
image picker or popover to fully close before the alert displays:

``` {.sourceCode .javascript}
setTimeout(function() {
    // do your thing here!
}, 0);
```

### Example

Take a photo and retrieve it as a base64-encoded image:

``` {.sourceCode .javascript}
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
```

Take a photo and retrieve the image's file location:

``` {.sourceCode .javascript}
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
```

CameraOptions
-------------

Optional parameters to customize the camera settings.

``` {.sourceCode .javascript}
{ quality : 75,
  destinationType : Camera.DestinationType.DATA_URL,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 100,
  targetHeight: 100,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false };
```

### Options

-   **quality**: Quality of the saved image, expressed as a range of
    0-100, where 100 is typically full resolution with no loss from file
    compression. *(Number)*

(Note that information about the camera's resolution is unavailable.)

-   **destinationType**: Choose the format of the return value. Defined
    in `navigator.camera.DestinationType` *(Number)*

``` {.sourceCode .javascript}
Camera.DestinationType = {
    DATA_URL : 0,      // Return image as base64-encoded string
    FILE_URI : 1,      // Return image file URI
    NATIVE_URI : 2     // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
};
```

-   **sourceType**: Set the source of the picture. Defined in
    `navigator.camera.PictureSourceType` *(Number)*

``` {.sourceCode .javascript}
Camera.PictureSourceType = {
    PHOTOLIBRARY : 0,
    CAMERA : 1,
    SAVEDPHOTOALBUM : 2
};
```

-   **allowEdit**: Allow simple editing of image before selection.
    *(Boolean)*
-   **encodingType**: Choose the returned image file's encoding. Defined
    in `navigator.camera.EncodingType` *(Number)*

``` {.sourceCode .javascript}
Camera.EncodingType = {
    JPEG : 0,               // Return JPEG encoded image
    PNG : 1                 // Return PNG encoded image
};
```

-   **targetWidth**: Width in pixels to scale image. Must be used with
    **targetHeight**. Aspect ratio remains constant. *(Number)*
-   **targetHeight**: Height in pixels to scale image. Must be used with
    **targetWidth**. Aspect ratio remains constant. *(Number)*
-   **mediaType**: Set the type of media to select from. Only works when
    `PictureSourceType` is `PHOTOLIBRARY` or `SAVEDPHOTOALBUM`. Defined
    in `nagivator.camera.MediaType` *(Number)*

``` {.sourceCode .javascript}
Camera.MediaType = {
    PICTURE: 0,    // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
    VIDEO: 1,      // allow selection of video only, WILL ALWAYS RETURN FILE_URI
    ALLMEDIA : 2   // allow selection from all media types
```

> };

-   **correctOrientation**: Rotate the image to correct for the
    orientation of the device during capture. *(Boolean)*
-   **saveToPhotoAlbum**: Save the image to the photo album on the
    device after capture. *(Boolean)*
-   *popoverOptions*: iOS-only options that specify popover location in
    iPad. Defined in `CameraPopoverOptions`.
-   **cameraDirection**: Choose the camera to use (front- or
    back-facing). Defined in `navigator.camera.Direction`. *(Number)*

``` {.sourceCode .javascript}
Camera.Direction = {
    BACK : 0,      // Use the back-facing camera
    FRONT : 1      // Use the front-facing camera
};
```

### Android Quirks

-   Any `cameraDirection` value results in a back-facing photo.
-   Ignores the `allowEdit` parameter.
-   `Camera.PictureSourceType.PHOTOLIBRARY` and
    `Camera.PictureSourceType.SAVEDPHOTOALBUM` both display the same
    photo album.

### iOS Quirks

-   Set `quality` below 50 to avoid memory errors on some devices.
-   When using `destinationType.FILE_URI`, photos are saved in the
    application's temporary directory. You may delete the contents of
    this directory using the `navigator.fileMgr` APIs if storage space
    is a concern.

CameraError
-----------

onError callback function that provides an error message.

``` {.sourceCode .javascript}
function(message) {
    // Show a helpful message
}
```

### Parameters

-   **message**: The message is provided by the device's native code.
    *(String)*

cameraSuccess
-------------

onSuccess callback function that provides the image data.

``` {.sourceCode .javascript}
function(imageData) {
    // Do something with the image
}
```

### Parameters

-   **imageData**: Base64 encoding of the image data, *or* the image
    file URI, depending on `cameraOptions` in effect. *(String)*

### Example

``` {.sourceCode .javascript}
// Show image
//
function cameraCallback(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}
```

CameraPopoverHandle
-------------------

A handle to the popover dialog created by `navigator.camera.getPicture`.

### Methods

-   **setPosition**: Set the position of the popover.

### Supported Platforms

-   iOS

### setPosition

Set the position of the popover.

### Parameters

-   `cameraPopoverOptions`: the `CameraPopoverOptions` that specify the
    new position.

### Example

``` {.sourceCode .javascript}
var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
    { destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });

// Reposition the popover if the orientation changes.
window.onorientationchange = function() {
    var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
    cameraPopoverHandle.setPosition(cameraPopoverOptions);
}
```

CameraPopoverOptions
--------------------

iOS-only parameters that specify the anchor element location and arrow
direction of the popover when selecting images from an iPad's library or
album.

``` {.sourceCode .javascript}
{ x : 0,
  y :  32,
  width : 320,
  height : 480,
  arrowDir : Camera.PopoverArrowDirection.ARROW_ANY
};
```

### CameraPopoverOptions

-   **x**: x pixel coordinate of screen element onto which to anchor the
    popover. *(Number)*
-   **y**: y pixel coordinate of screen element onto which to anchor the
    popover. *(Number)*
-   **width**: width, in pixels, of the screen element onto which to
    anchor the popover. *(Number)*
-   **height**: height, in pixels, of the screen element onto which to
    anchor the popover. *(Number)*
-   **arrowDir**: Direction the arrow on the popover should point.
    Defined in `Camera.PopoverArrowDirection` *(Number)*

``` {.sourceCode .javascript}
Camera.PopoverArrowDirection = {
    ARROW_UP : 1,        // matches iOS UIPopoverArrowDirection constants
    ARROW_DOWN : 2,
    ARROW_LEFT : 4,
    ARROW_RIGHT : 8,
    ARROW_ANY : 15
};
```

Note that the size of the popover may change to adjust to the direction
of the arrow and orientation of the screen. Make sure to account for
orientation changes when specifying the anchor element location.

navigator.camera.cleanup
------------------------

Removes intermediate photos taken by the camera from temporary storage.

``` {.sourceCode .javascript}
navigator.camera.cleanup( cameraSuccess, cameraError );
```

### Description

Removes intermediate image files that are kept in temporary storage
after calling `camera.getPicture`. Applies only when the value of
`Camera.sourceType` equals `Camera.PictureSourceType.CAMERA` and the
`Camera.destinationType` equals `Camera.DestinationType.FILE_URI`.

### Supported Platforms

-   iOS

### Example

``` {.sourceCode .javascript}
navigator.camera.cleanup(onSuccess, onFail);

function onSuccess() {
    console.log("Camera cleanup success.")
}

function onFail(message) {
    alert('Failed because: ' + message);
}
```
