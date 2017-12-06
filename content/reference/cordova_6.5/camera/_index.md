---
title: Camera Plugin
---

# Camera Plugin

Tested Version: [2.4.1](https://github.com/apache/cordova-plugin-camera/releases/tag/2.4.1)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-camera">}}.
{{</note>}}

This plugin defines a global `navigator.camera` object, which provides
an API for taking pictures and for choosing images from the system's
image library.

Although the object is attached to the global scoped `navigator`, it is
not available until after the `deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
{{</highlight>}}

Plugin ID
---------

{{<syntax>}}
cordova-plugin-camera
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins) `Camera`
plugin in Monaca Cloud IDE.

iOS Quirks
----------

Since iOS 10, it's mandatory to add a `NSCameraUsageDescription` and
`NSPhotoLibraryUsageDescription` in the info.plist.

-   `NSCameraUsageDescription` describes the reason that the app
    accesses the user’s camera.
-   `NSPhotoLibraryUsageDescription` describes the reason the app
    accesses the user's photo library.

When the system prompts the user to allow access, this string is
displayed as part of the dialog box.

To add this entry you can pass the following variables on plugin
install.

-   `CAMERA_USAGE_DESCRIPTION` for `NSCameraUsageDescription`
-   `PHOTOLIBRARY_USAGE_DESCRIPTION` for
    `NSPhotoLibraryUsageDescription`

Example:

{{<highlight bash>}}
cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="your usage message" --variable PHOTOLIBRARY_USAGE_DESCRIPTION="your usage message"
{{</highlight>}}

If you don't pass the variable, the plugin will add an empty string as
value.

API Reference
-------------

-   [camera](#module-camera)
    -   [.getPicture(successCallback, errorCallback, options)](#camera-getpicture)
    -   [.cleanup()](#camera-cleanup)
    -   [.onError](#camera-onerror) : function
    -   [.onSuccess](#camera-onsuccess) : function
    -   [.CameraOptions](#camera-cameraoptions) : Object
-   [Camera](#module-cap-camera)
    -   [.DestinationType](#camera-destinationtype) : enum
    -   [.EncodingType](#camera-encodingtype) : enum
    -   [.MediaType](#camera-mediatype) : enum
    -   [.PictureSourceType](#camera-picturesourcetype) : enum
    -   [.PopoverArrowDirection](#camera-popoverarrowdirection) : enum
    -   [.Direction](#camera-direction) : enum
-   [CameraPopoverHandle](#camerapopoverhandle)
-   [CameraPopoverOptions](#camerapopoveroptions)

### <a name="module-camera"></a> camera

#### <a name="camera-getpicture"></a> camera.getPicture(successCallback, errorCallback, options)

Takes a photo using the camera, or retrieves a photo from the device's
image gallery. The image is passed to the success callback as a
Base64-encoded `String`, or as the URI for the image file.

The `camera.getPicture` function opens the device's default camera
application that allows users to snap pictures by default - this
behavior occurs, when `Camera.sourceType` equals [Camera.PictureSourceType.CAMERA](#camera-picturesourcetype).
Once the user snaps the photo, the camera application closes and the
application is restored.

If `Camera.sourceType` is `Camera.PictureSourceType.PHOTOLIBRARY` or
`Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a dialog displays that
allows users to select an existing image.

The return value is sent to the [cameraSuccess](#camera-onsuccess) callback function, in one of
the following formats, depending on the specified `cameraOptions`:

-   A `String` containing the Base64-encoded photo image.
-   A `String` representing the image file location on local storage
    (default).

You can do whatever you want with the encoded image or URI, for example:

-   Render the image in an `<img>` tag, as in the example below
-   Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc.)
-   Post the data to a remote server

{{<note>}}
Photo resolution on newer devices is quite good. Photos selected from
the device's gallery are not downscaled to a lower quality, even if a <code>quality</code> parameter is specified. To avoid common memory problems, set <code>Camera.destinationType</code> to <code>FILE_URI</code> rather than <code>DATA_URL</code>.
{{</note>}}

**Supported Platforms**

-   Android
-   iOS
-   Windows

More examples [here](#camera-getpicture-examples). Quirks [here](#camera-getpicture-quirks).

**Kind**: static method of [camera](#module-camera)

Param | Type | Description
------|------|--------------------
`successCallback` | Function | [onSuccess](#camera-onsuccess)
`errorCallback` | Function | [onError](#camera-onerror)
`options` | JSON Object | [CameraOptions](#camera-cameraoptions)

**Example**

{{<highlight javascript>}}
navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
{{</highlight>}}

#### <a name="camera-cleanup"></a> camera.cleanup()

Removes intermediate image files that are kept in temporary storage
after calling [camera.getPicture](#camera-getpicture). Applies
only when the value of `Camera.sourceType` equals
`Camera.PictureSourceType.CAMERA` and the `Camera.destinationType`
equals `Camera.DestinationType.FILE_URI`.

**Supported Platforms**

-   iOS

**Kind**: static method of [camera](#module-camera)

**Example**

{{<highlight javascript>}}
navigator.camera.cleanup(onSuccess, onFail);

function onSuccess() {
    console.log("Camera cleanup success.")
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

#### <a name="camera-onerror"></a> camera.onError : function

Callback function that provides an error message.

**Kind**: static typedef of [camera](#module-camera)

Param | Type | Description
------|------|--------------
`message` | String | The message is provided by the device's native code

#### <a name="camera-onsuccess"></a> camera.onSuccess : function

Callback function that provides the image data.

**Kind**: static typedef of [camera](#module-camera)

Param | Type | Description
------|------|--------------
`imageData` | String | Base64 encoding of the image data, or the image file URI, depending on [cameraOptions](#camera-cameraoptions) in effect.

**Example**

{{<highlight javascript>}}
// Show image
//
function cameraCallback(imageData) {
   var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageData;
}
{{</highlight>}}

#### <a name="camera-cameraoptions"></a> camera.CameraOptions : Object

Optional parameters to customize the camera settings.

-   [Quirks](#cameraoptions-quirks)

**Kind**: static typedef of [camera](#module-camera)

**Properties**

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

### <a name="module-cap-camera"></a> Camera

#### <a name="camera-destinationtype"></a> Camera.DestinationType : enum

Defines the output format of `Camera.getPicture` call.

{{<note>}}
On iOSpassing <code>DestinationType.NATIVE_URI</code> along with
<code>PictureSourceType.PHOTOLIBRARY</code> or <code>PictureSourceType.SAVEDPHOTOALBUM</code>
will disable any image modifications (resize, quality change, cropping,
etc.) due to implementation specific.
{{</note>}}

**Kind**: static enum property of [Camera](#module-cap-camera)

**Properties**

Name | Type | Default | Description
-----|------|---------|--------------------
`DATA_URL` | Number | `0` | Return *base64* encoded string. `DATA_URL` can be very memory intensive and cause app crashes or out of memory errors. Use `FILE_URI` or `NATIVE_URI` if possible
`FILE_URI` | Number | `1` | Return file uri (`content://media/external/images/media/2` for Android)
`NATIVE_URI` | Number | `2` | Return native uri (eg. `asset-library://...` for iOS)

#### <a name="camera-encodingtype"></a> Camera.EncodingType : enum

**Kind**: static enum property of [Camera](#module-cap-camera)

**Properties**

Name | Type | Default | Description
-----|------|---------|--------------------
`JPEG` | Number | `0` | Return JPEG encoded image
`PNG` | Number | `1` | Return PNG encoded image

#### <a name="camera-mediatype"></a> Camera.MediaType : enum

**Kind**: static enum property of [Camera](#module-cap-camera)

**Properties**

Name | Type | Default | Description
-----|------|---------|--------------------
`PICTURE` | Number | `0` | Allow selection of still pictures only. DEFAULT. Will return format specified via `DestinationType`
`VIDEO` | Number | `1` | Allow selection of video only, ONLY RETURNS URL
`ALLMEDIA` | Number | `2` | Allow selection from all media types


#### <a name="camera-picturesourcetype"></a> Camera.PictureSourceType : enum

Defines the output format of `Camera.getPicture` call.

{{<note>}}
On iOS passing <code>PictureSourceType.PHOTOLIBRARY</code> or
<code>PictureSourceType.SAVEDPHOTOALBUM</code> along with
<code>DestinationType.NATIVE_URI</code> will disable any image modifications
(resize, quality change, cropping, etc.) due to implementation specific.
{{</note>}}

**Kind**: static enum property of [Camera](#module-cap-camera)

**Properties**

Name | Type | Default | Description
-----|------|---------|--------------------
`PHOTOLIBRARY` | Number | `0` | Choose image from the device’s photo library (same as `SAVEDPHOTOALBUM` for Android)
`CAMERA` | Number | `1` | Take picture from camera
`SAVEDPHOTOALBUM` | Number | `2` | Choose image only from the device’s Camera Roll album (same as `PHOTOLIBRARY` for Android)

#### <a name="camera-popoverarrowdirection"></a> Camera.PopoverArrowDirection : enum

Matches iOS UIPopoverArrowDirection constants to specify arrow location
on popover.

**Kind**: static enum property of [Camera](#module-cap-camera)
**Properties**

Name | Type | Default 
-----|------|---------
`ARROW_UP` | Number | `1`
`ARROW_DOWN`| Number | `2`
`ARROW_LEFT` | Number | `4`
`ARROW_RIGHT` | Number | `8`
`ARROW_ANY` | Number | `15`

#### <a name="camera-direction"></a> Camera.Direction : enum

**Kind**: static enum property of [camera](#module-camera)

**Properties**

Name | Type | Default | Description
-----|------|---------|--------------------
`BACK` | Number | `0` | Use the back-facing camera
`FRONT` | Number | `1` | Use the front-facing camera

### <a name="camerapopoveroptions"></a> CameraPopoverOptions

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


### <a name="camerapopoverhandle"></a> CameraPopoverHandle

A handle to an image picker popover.

**Supported Platforms**

-   iOS

**Example**

{{<highlight javascript>}}
navigator.camera.getPicture(onSuccess, onFail,
{
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
});

// Reposition the popover if the orientation changes.
window.onorientationchange = function() {
    var cameraPopoverHandle = new CameraPopoverHandle();
    var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
    cameraPopoverHandle.setPosition(cameraPopoverOptions);
}
{{</highlight>}}

### camera.getPicture Errata

#### <a name="camera-getpicture-examples"></a> Example

Take a photo and retrieve the image's file location:

{{<highlight javascript>}}
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

Take a photo and retrieve it as a Base64-encoded image:

{{<highlight javascript>}}
/**
 * Warning: Using DATA_URL is not recommended! The DATA_URL destination
 * type is very memory intensive, even with a low quality setting. Using it
 * can result in out of memory errors and application crashes. Use FILE_URI
 * or NATIVE_URI instead.
 */
navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
{{</highlight>}}

#### Preferences (iOS)

-   **CameraUsesGeolocation** (boolean, defaults to false). For
    capturing JPEGs, set to true to get geolocation data in the EXIF
    header. This will trigger a request for geolocation permissions if
    set to true.

    {{<highlight xml>}}<preference name="CameraUsesGeolocation" value="false" />{{</highlight>}}

#### <a name="camera-getpicture-quirks"></a> Android Quirks

Android uses intents to launch the camera activity on the device to
capture images, and on phones with low memory, the Cordova activity may
be killed. In this scenario, the result from the plugin call will be
delivered via the resume event. See [the Android Lifecycle
guide](http://cordova.apache.org/docs/en/dev/guide/platforms/android/lifecycle.html)
for more information. The `pendingResult.result` value will contain the
value that would be passed to the callbacks (either the URI/URL or an
error message). Check the `pendingResult.pluginStatus` to determine
whether or not the call was successful.

#### iOS Quirks

Including a JavaScript `alert()` in either of the callback functions can
cause problems. Wrap the alert within a `setTimeout()` to allow the iOS
image picker or popover to fully close before the alert displays:

{{<highlight javascript>}}
setTimeout(function() {
    // do your thing here!
}, 0);
{{</highlight>}}

#### Windows quirks

On Windows Phone 8.1 using `SAVEDPHOTOALBUM` or `PHOTOLIBRARY` as a
source type causes application to suspend until file picker returns the
selected image and then restore with start page as defined in app's
`config.xml`. In case when `camera.getPicture` was called from different
page, this will lead to reloading start page from scratch and success
and error callbacks will never be called.

To avoid this we suggest using SPA pattern or call `camera.getPicture`
only from your app's start page.

More information about Windows Phone 8.1 picker APIs is here: [How to
continue your Windows Phone app after calling a file
picker](https://msdn.microsoft.com/en-us/library/windows/apps/dn720490.aspx).

### <a name="cameraoptions-quirks"></a> CameraOptions Errata

#### Android Quirks

-   Any `cameraDirection` value results in a back-facing photo.
-   **`allowEdit` is unpredictable on Android and it should not be
    used!** The Android implementation of this plugin tries to find and
    use an application on the user's device to do image cropping. The
    plugin has no control over what application the user selects to
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
-   When using `destinationType.NATIVE_URI` and
    `sourceType.PHOTOLIBRARY` or `sourceType.SAVEDPHOTOALBUM`, all
    editing options are ignored and link is returned to original
    picture.

Sample: Take Pictures, Select Pictures from the Picture Library, and Get Thumbnails
-----------------------------------------------------------------------------------

The Camera plugin allows you to do things like open the device's Camera
app and take a picture, or open the file picker and select one. The code
snippets in this section demonstrate different tasks including:

-   Open the Camera app and [take a Picture](#takepicture)
-   Take a picture and [return thumbnails (resized picture)](#getthumbnails)
-   Take a picture and [generate a FileEntry object](#convert)
-   [Select a file](#selectfile) from the picture library
-   Select a JPEG image and [return thumbnails (resized image)](#getfilethumbnails)
-   Select an image and [generate a FileEntry object](#convert)

### <a name="takepicture"></a> Take a Picture

Before you can take a picture, you need to set some Camera plugin
options to pass into the Camera plugin's `getPicture` function. Here is
a common set of recommendations. In this example, you create the object
that you will use for the Camera options, and set the `sourceType`
dynamically to support both the Camera app and the file picker.

{{<highlight javascript>}}
function setOptions(srcType) {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
{{</highlight>}}

Typically, you want to use a `FILE_URI` instead of a `DATA_URL` to avoid
most memory issues. JPEG is the recommended encoding type for Android.

You take a picture by passing in the options object to `getPicture`,
which takes a CameraOptions object as the third argument. When you call
`setOptions`, pass `Camera.PictureSourceType.CAMERA` as the picture
source.

{{<highlight javascript>}}
function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        displayImage(imageUri);
        // You may choose to copy the picture, save it somewhere, or upload.
        func(imageUri);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

Once you take the picture, you can display it or do something else. In
this example, call the app's `displayImage` function from the preceding
code.

{{<highlight javascript>}}
function displayImage(imgUri) {

    var elem = document.getElementById('imageFile');
    elem.src = imgUri;
}
{{</highlight>}}

To display the image on some platforms, you might need to include the
main part of the URI in the Content-Security-Policy `<meta>` element in
index.html. For example, on Windows 10, you can include `ms-appdata:` in
your `<meta>` element. Here is an example.

{{<highlight html>}}
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
{{</highlight>}}

### <a name="getthumbnails"></a> Take a Picture and Return Thumbnails (Resize the Picture)

To get smaller images, you can return a resized image by passing both
`targetHeight` and `targetWidth` values with your CameraOptions object.
In this example, you resize the returned image to fit in a 100px by
100px box (the aspect ratio is maintained, so 100px is either the height
or width, whichever is greater in the source).

{{<highlight javascript>}}
function openCamera(selection) {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    if (selection == "camera-thmb") {
        options.targetHeight = 100;
        options.targetWidth = 100;
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### <a name="selectfile"></a> Select a File from the Picture Library

When selecting a file using the file picker, you also need to set the
CameraOptions object. In this example, set the `sourceType` to
`Camera.PictureSourceType.SAVEDPHOTOALBUM`. To open the file picker,
call `getPicture` just as you did in the previous example, passing in
the success and error callbacks along with CameraOptions object.

{{<highlight javascript>}}
function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### <a name="getfilethumbnails"></a> Select an Image and Return Thumbnails (resized images)

Resizing a file selected with the file picker works just like resizing
using the Camera app; set the `targetHeight` and `targetWidth` options.

{{<highlight javascript>}}
function openFilePicker(selection) {

    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    if (selection == "picker-thmb") {
        // To downscale a selected image,
        // Camera.EncodingType (e.g., JPEG) must match the selected image type.
        options.targetHeight = 100;
        options.targetWidth = 100;
    }

    navigator.camera.getPicture(function cameraSuccess(imageUri) {

        // Do something with image

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}
{{</highlight>}}

### <a name="convert"></a> Take a picture and get a FileEntry Object

If you want to do something like copy the image to another location, or
upload it somewhere using the FileTransfer plugin, you need to get a
FileEntry object for the returned picture. To do that, call
`window.resolveLocalFileSystemURL` on the file URI returned by the
Camera app. If you need to use a FileEntry object, set the
`destinationType` to `Camera.DestinationType.FILE_URI` in your
CameraOptions object (this is also the default value).

{{<note>}}
You need the {{<link href="https://www.npmjs.com/package/cordova-plugin-file" title="File plugin">}} to call <code>window.resolveLocalFileSystemURL</code>.
{{</note>}}

Here is the call to `window.resolveLocalFileSystemURL`. The image URI is
passed to this function from the success callback of `getPicture`. The
success handler of `resolveLocalFileSystemURL` receives the FileEntry
object.

{{<highlight javascript>}}
function getFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(imgUri, function success(fileEntry) {

        // Do something with the FileEntry object, like write to it, upload it, etc.
        // writeFile(fileEntry, imgUri);
        console.log("got file: " + fileEntry.fullPath);
        // displayFileData(fileEntry.nativeURL, "Native URL");

    }, function () {
      // If don't get the FileEntry (which may happen when testing
      // on some emulators), copy to a new FileEntry.
        createNewFileEntry(imgUri);
    });
}
{{</highlight>}}

In the example shown in the preceding code, you call the app's
`createNewFileEntry` function if you don't get a valid FileEntry object.
The image URI returned from the Camera app should result in a valid
FileEntry, but platform behavior on some emulators may be different for
files returned from the file picker.

{{<note>}}
To see an example of writing to a FileEntry, see the {{<link href="https://www.npmjs.com/package/cordova-plugin-file" title="File plugin README">}}.
{{</note>}}

The code shown here creates a file in your app's cache (in sandboxed
storage) named `tempFile.jpeg`. With the new FileEntry object, you can
copy the image to the file or do something else like upload it.

{{<highlight javascript>}}
function createNewFileEntry(imgUri) {
    window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {

        // JPEG file
        dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            // writeFile(fileEntry, imgUri);
            console.log("got file: " + fileEntry.fullPath);
            // displayFileData(fileEntry.fullPath, "File copied to");

        }, onErrorCreateFile);

    }, onErrorResolveUrl);
}
{{</highlight>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)