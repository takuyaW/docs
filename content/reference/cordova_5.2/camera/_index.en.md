---
title: Camera Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Tested Version: </b><a href="https://github.com/apache/cordova-plugin-camera/blob/master/RELEASENOTES.md#120-jun-17-2015">1.2.0</a></div>
  <div align="right" style="float: right;"><b>Last Edited:</b> November 20th, 2015</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-camera">}}.
{{</note>}}

This plugin defines a global `navigator.camera` object, which provides
an API for taking pictures and for choosing images from the system's
image library.

Although the object is attached to the global scope `navigator`, it is
not available until after the `deviceready` event.

``` {.sourceCode .javascript}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
```

Plugin ID
---------

{{<syntax>}}
cordova-plugin-camera
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins) `Camera`
plugin in Monaca Cloud IDE.

##  API Reference

###  camera.getPicture(successCallback, errorCallback, options)

Takes a photo using the camera, or retrieves a photo from the device's
image gallery. The image is passed to the success callback as a
base64-encoded `String`, or as the URI for the image file.

The `camera.getPicture` function opens the device's default camera
application that allows users to snap pictures by default - this
behavior occurs, when `Camera.sourceType` equals
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

#### Supported Platforms

-   Android
-   iOS
-   Windows
-   More examples [here](#camera-getpicture-examples)

#### Kind

static method of [camera](#module-camera)

Param | Type | Description
------|------|--------------------
`successCallback` | Function | [onSuccess](#camera-onsuccess)
`errorCallback` | Function | [onError](#camera-onerror)
`options` | JSON Object | [CameraOptions](#camera-cameraoptions)

#### Example

camera.onSuccess: function

``` {.sourceCode .js}
navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
```

### camera.cleanup()

Removes intermediate image files that are kept in temporary storage
after calling [camera.getPicture](#camera-getpicture). Applies
only when the value of `Camera.sourceType` equals
`Camera.PictureSourceType.CAMERA` and the `Camera.destinationType`
equals `Camera.DestinationType.FILE_URI`.

#### Supported Platforms

-   iOS

#### Kind

static method of [camera](#module-camera)

#### Example

``` {.sourceCode .js}
navigator.camera.cleanup(onSuccess, onFail);

function onSuccess() {
    console.log("Camera cleanup success.")
}

function onFail(message) {
    alert('Failed because: ' + message);
}
```

###  camera.onError : function

Callback function that provides an error message.

#### Kind

static typedef of camera [camera](#module-camera)

Param | Type | Description
------|------|--------------
`message` | String | The message is provided by the device's native code

###  camera.onSuccess : function

Callback function that provides the image data.

#### Kind

static typedef of [camera](#module-camera)

 Param | Type | Description
------|------|--------------
`imageData` | String | Base64 encoding of the image data, or the image file URI, depending on [cameraOptions](#camera-cameraoptions) in effect.

#### Example

``` {.sourceCode .js}
// Show image
//
function cameraCallback(imageData) {
   var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageData;
}
```

###  camera.CameraOptions : Object

#### Kind

static typedef of [camera](#module-camera)

#### Properties

Name | Type | Default | Description
-----|------|---------|------------------------
`quality` | Number | `50` | Quality of the saved image, expressed as a range of `0-100`, where `100` is typically full resolution with no loss from file compression. (Note that information about the camera’s resolution is unavailable.)
`destinationType` | [DestinationType](#camera-destinationtype) | `FILE_URI` | Choose the format of the return value.
`sourceType` | [PictureSourceType](#camera-picturesourcetype) | `CAMERA` | Set the source of the picture.
`allowEdit` | Boolean | `true` | Allow simple editing of image before selection.
`encodingType` | [EncodingType](#camera-encodingtype) | `JPEG` | Choose the returned image file’s encoding.
`targetWidth` | Number |  |	Width in pixels to scale image. Must be used with `targetHeight`. Aspect ratio remains constant.
`targetHeight` | Number	| |	Height in pixels to scale image. Must be used with `targetWidth`. Aspect ratio remains constant.
`mediaType` | [MediaType](#camera-mediatype) | `PICTURE` | Set the type of media to select from. Only works when `PictureSourceType` is `PHOTOLIBRARY` or `SAVEDPHOTOALBUM`.
`correctOrientation` | Boolean |  | Rotate the image to correct for the orientation of the device during capture.
`saveToPhotoAlbum` | Boolean |  | Save the image to the photo album on the device after capture.
`popoverOptions` | [CameraPopoverOptions](#camerapopoveroptions) |  | iOS-only options that specify popover location in iPad.
`cameraDirection` | [Direction](#camera-direction) | `BACK` | Choose the camera to use (front- or back-facing).

Camera
------

###  Camera.DestinationType : enum

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default | Description
-----|------|---------|--------------------
`DATA_URL` | Number | `0` | Return *base64* encoded string. `DATA_URL` can be very memory intensive and cause app crashes or out of memory errors. Use `FILE_URI` or `NATIVE_URI` if possible
`FILE_URI` | Number | `1` | Return file uri (`content://media/external/images/media/2` for Android)
`NATIVE_URI` | Number | `2` | Return native uri (eg. `asset-library://...` for iOS)

###  Camera.EncodingType : enum

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default | Description
-----|------|---------|--------------------
`JPEG` | Number | `0` | Return JPEG encoded image
`PNG` | Number | `1` | Return PNG encoded image

###  Camera.MediaType : enum

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default | Description
-----|------|---------|--------------------
`PICTURE` | Number | `0` | Allow selection of still pictures only. DEFAULT. Will return format specified via `DestinationType`
`VIDEO` | Number | `1` | Allow selection of video only, ONLY RETURNS URL
`ALLMEDIA` | Number | `2` | Allow selection from all media types

###  Camera.PictureSourceType : enum

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default | Description
-----|------|---------|--------------------
`PHOTOLIBRARY` | Number | `0` | Choose image from the device’s photo library (same as `SAVEDPHOTOALBUM` for Android)
`CAMERA` | Number | `1` | Take picture from camera
`SAVEDPHOTOALBUM` | Number | `2` | Choose image only from the device’s Camera Roll album (same as `PHOTOLIBRARY` for Android)

####  Camera.PopoverArrowDirection : enum

Matches iOS UIPopoverArrowDirection constants to specify arrow location
on popover.

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default 
-----|------|---------
`ARROW_UP` | Number | `1`
`ARROW_DOWN`| Number | `2`
`ARROW_LEFT` | Number | `4`
`ARROW_RIGHT` | Number | `8`
`ARROW_ANY` | Number | `15`

###  Camera.Direction : enum

#### Kind

static typedef of [camera](#module-camera)

#### Property

Name | Type | Default | Description
-----|------|---------|--------------------
`BACK` | Number | `0` | Use the back-facing camera
`FRONT` | Number | `1` | Use the front-facing camera

### CameraPopoverOptions

iOS-only parameters that specify the anchor element location and arrow
direction of the popover when selecting images from an iPad's library or
album. Note that the size of the popover may change to adjust to the
direction of the arrow and orientation of the screen. Make sure to
account for orientation changes when specifying the anchor element
location.

Name | Type | Default | Description
-----|------|---------|--------------------
`[x]` | Number | `0` | `x` pixel coordinate of screen element onto which to anchor the popover.
`[y]` | Number | `32` |	`y` pixel coordinate of screen element onto which to anchor the popover.
`[width]` | Number | `320` | width, in pixels, of the screen element onto which to anchor the popover.
`[height]` | Number | `480` | height, in pixels, of the screen element onto which to anchor the popover.
`[arrowDir]` | [PopoverArrowDirection](#camera-popoverarrowdirection) | `ARROW_ANY` | Direction the arrow on the popover should point.

### CameraPopoverHandle

A handle to an image picker popover.

#### Supported Platforms

-   iOS

#### Example

    var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
    {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
    });

    // Reposition the popover if the orientation changes.
    window.onorientationchange = function() {
        var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
        cameraPopoverHandle.setPosition(cameraPopoverOptions);
    }

###  camera.getPicture Errata

#### Example

Take a photo and retrieve it as a base64-encoded image:

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

Take a photo and retrieve the image's file location:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

#### Preferences (iOS)

**CameraUsesGeolocation** (boolean, defaults to false). For capturing
JPEGs, set to true to get geolocation data in the EXIF header. This will
trigger a request for geolocation permissions if set to true.

>     <preference name="CameraUsesGeolocation" value="false" />

#### Android Quirks

Android uses intents to launch the camera activity on the device to
capture images, and on phones with low memory, the Cordova activity may
be killed. In this scenario, the image may not appear when the Cordova
activity is restored.

#### iOS Quirks

Including a JavaScript `alert()` in either of the callback functions can
cause problems. Wrap the alert within a `setTimeout()` to allow the iOS
image picker or popover to fully close before the alert displays:

    setTimeout(function() {
        // do your thing here!
    }, 0);

### `CameraOptions` Errata

#### Android Quirks

-   Any `cameraDirection` value results in a back-facing photo.
-   `allowEdit` is unpredictable on Android and it should not be
    used!\*\* The Android implementation of this plugin tries to find
    and use an application on the user's device to do image cropping.
    The plugin has no control over what application the user selects to
    perform the image cropping and it is very possible that the user
    could choose an incompatible option and cause the plugin to fail.
    This sometimes works because most devices come with an application
    that handles cropping in a way that is compatible with this plugin
    (Google Plus Photos), but it is unwise to rely on that being the
    case. If image editing is essential to your application, consider
    seeking a third party library or plugin that provides its own image
    editing utility for a more robust solution.
-   `Camera.PictureSourceType.PHOTOLIBRARY` and
    `Camera.PictureSourceType.SAVEDPHOTOALBUM` both display the same
    photo album.
-   Ignores the `encodingType` parameter if the image is unedited (i.e.
    `quality` is 100, `correctOrientation` is false, and no
    `targetHeight` or `targetWidth` are specified). The `CAMERA` source
    will always return the JPEG file given by the native camera and the
    `PHOTOLIBRARY` and `SAVEDPHOTOALBUM` sources will return the
    selected file in its existing encoding.

#### iOS Quirks

-   When using `destinationType.FILE_URI`, photos are saved in the
    application's temporary directory. The contents of the application's
    temporary directory is deleted when the application ends.
-   When using `destinationType.NATIVE_URI` and `sourceType.CAMERA`,
    photos are saved in the saved photo album regardless on the value of
    `saveToPhotoAlbum` parameter.

