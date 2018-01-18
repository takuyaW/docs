---
title: File Plugin
weight: 90
---

Tested Version: [4.3.3](https://github.com/apache/cordova-plugin-file/releases/tag/4.3.3)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-file">}}.
{{</note>}}

This plugin implements a File API allowing read/write access to files
residing on the device. This plugin is based on several specs, including
:

-   [The HTML5 File API](http://www.w3.org/TR/FileAPI/)
-   [The Directories and System extensions Latest](http://www.w3.org/TR/2012/WD-file-system-api-20120417/)
    Although most of the plugin code was written when [an earlier spec](http://www.w3.org/TR/2011/WD-file-system-api-20110419/) was current.
-   It also implements the [FileWriter spec](http://dev.w3.org/2009/dap/file-system/file-writer.html)

{{<note>}}
While the W3C FileSystem spec is deprecated for web browsers, the
FileSystem APIs are supported in Cordova applications with this plugin
for the platforms listed in the <b>Supported Platforms</b> list, with the
exception of the Browser platform.
{{</note>}}

To get a few ideas how to use the plugin, check out the
[sample](#sample-create-files-and-directories-write-read-and-append-files) at the bottom of this page. For additional examples (browser focused), see the HTML5 Rocks' [FileSystem article.](http://www.html5rocks.com/en/tutorials/file/filesystem/) For an overview of other storage options, refer to Cordova's [storage guide](http://cordova.apache.org/docs/en/latest/cordova/storage/storage.html).

This plugin defines global `cordova.file` object. Although in the global
scope, it is not available until after the `deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(cordova.file);
}
{{</highlight>}}

Plugin ID
---------

{{<highlight javascript>}}
cordova-plugin-file
{{</highlight>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please In order to use this plugin, please [enable]({{<ref "cordova_plugin.en.md#add-import-cordova-plugins">}}) `File` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS
-   Windows (do not support `FileReader.readAsArrayBuffer` nor
    `FileWriter.write(blob)`)

Where to Store Files
--------------------

As of v1.2.0, URLs to important file-system directories are provided.
Each URL is in the form *<file:///path/to/spot/>*, and can be converted
to a `DirectoryEntry` using `window.resolveLocalFileSystemURL()`.

-   `cordova.file.applicationDirectory` - Read-only directory where the
    application is installed. (*iOS*, *Android*, *BlackBerry 10*, *OSX*,
    *windows*)

-   `cordova.file.applicationStorageDirectory` - Root directory of the
    application's sandbox; on iOS & windows this location is read-only
    (but specific subdirectories \[like `/Documents` on iOS or
    `/localState` on windows\] are read-write). All data contained
    within is private to the app. (*iOS*, *Android*, *BlackBerry 10*,
    *OSX*)

-   `cordova.file.dataDirectory` - Persistent and private data storage
    within the application's sandbox using internal memory (on Android,
    if you need to use external memory, use `.externalDataDirectory`).
    On iOS, this directory is not synced with iCloud (use
    `.syncedDataDirectory`). (*iOS*, *Android*, *BlackBerry 10*,
    *windows*)

-   `cordova.file.cacheDirectory` - Directory for cached data files or
    any files that your app can re-create easily. The OS may delete
    these files when the device runs low on storage, nevertheless, apps
    should not rely on the OS to delete files in here. (*iOS*,
    *Android*, *BlackBerry 10*, *OSX*, *windows*)

-   `cordova.file.externalApplicationStorageDirectory` - Application
    space on external storage. (*Android*)

-   `cordova.file.externalDataDirectory` - Where to put app-specific
    data files on external storage. (*Android*)

-   `cordova.file.externalCacheDirectory` - Application cache on
    external storage. (*Android*)

-   `cordova.file.externalRootDirectory` - External storage (SD card)
    root. (*Android*, *BlackBerry 10*)

-   `cordova.file.tempDirectory` - Temp directory that the OS can clear
    at will. Do not rely on the OS to clear this directory; your app
    should always remove files as applicable. (*iOS*, *OSX*, *windows*)

-   `cordova.file.syncedDataDirectory` - Holds app-specific files that
    should be synced (e.g. to iCloud). (*iOS*, *windows*)

-   `cordova.file.documentsDirectory` - Files private to the app, but
    that are meaningful to other application (e.g. Office files). Note
    that for *OSX* this is the user's `~/Documents` directory. (*iOS*,
    *OSX*)

-   `cordova.file.sharedDirectory` - Files globally available to all
    applications (*BlackBerry 10*)

File System Layouts
-------------------

Although technically an implementation detail, it can be very useful to
know how the `cordova.file.*` properties map to physical paths on a real
device.

### iOS File System Layout

{{<scrollTable>}}
<table>
    <tr>
        <th>Device Path</th>
        <th>cordova.file.*</th>
        <th>iosExtraFileSystems</th>
        <th>r/w</th>
        <th>persistent</th>
        <th>OS clears</th>
        <th>sync</th>
        <th>private</th>
    </tr>
    <tr>
        <td><code>/var/mobile/Applications/&#60;UUID&#62;/</code></td>
        <td>applicationStorageDirectory</td>
        <td></td>
        <td>r</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>appname.app/</code></td>
        <td>applicationDirectory</td>
        <td>bundle</td>
        <td>r</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>www/</code></td>
        <td></td>
        <td></td>
        <td>r</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>Documents/</code></td>
        <td>documentsDirectory</td>
        <td>documents</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>NoCloud/</code></td>
        <td></td>
        <td>documents-nosync</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>Cloud/</code></td>
        <td>syncedDataDirectory	</td>
        <td></td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>Caches/</code></td>
        <td>cacheDirectory</td>
        <td>cache</td>
        <td>r/w</td>
        <td>Yes*</td>
        <td>No***</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>tmp/</code></td>
        <td>tempDirectory</td>
        <td></td>
        <td>r/w</td>
        <td>No**</td>
        <td>Yes***</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
</table>
{{</scrollTable>}}

\* Files persist across app restarts and upgrades, but this directory
can be cleared whenever the OS desires. Your app should be able to
recreate any content that might be deleted.

\*\* Files may persist across app restarts, but do not rely on this
behavior. Files are not guaranteed to persist across updates. Your app
should remove files from this directory when it is applicable, as the OS
does not guarantee when (or even if) these files are removed.

\*\*\* The OS may clear the contents of this directory whenever it feels
it is necessary, but do not rely on this. You should clear this
directory as appropriate for your application.

### Android File System Layout

{{<scrollTable>}}
<table>
    <tr>
        <th>Device Path</th>
        <th>cordova.file.*</th>
        <th>iosExtraFileSystems</th>
        <th>r/w</th>
        <th>persistent</th>
        <th>OS clears</th>
        <th>private</th>
    </tr>
    <tr>
        <td><code>file:///android_asset/</code></td>
        <td>applicationDirectory</td>
        <td>assets</td>
        <td>r</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>/data/data/&#60;app-id&#62;/</code></td>
        <td>applicationStorageDirectory</td>
        <td></td>
        <td>r/w</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>cache</code></td>
        <td>cacheDirectory</td>
        <td>cache</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>Yes*</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>files</code></td>
        <td>dataDirectory</td>
        <td>files</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>Documents</code></td>
        <td></td>
        <td>documents</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>&#60;sdcard&#62;/</code></td>
        <td>externalRootDirector</td>
        <td>sdcard</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td><code>Android/data/&#60;app-id&#62;/</code></td>
        <td>externalApplicationStorageDirectory</td>
        <td></td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td><code>cache</code></td>
        <td>externalCacheDirectory</td>
        <td>cache-external</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No**</td>
        <td>No</td>
    </tr>
    <tr>
        <td><code>files</code></td>
        <td>externalDataDirectory</td>
        <td>files-external</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
</table>
{{</scrollTable>}}

\* The OS may periodically clear this directory, but do not rely on this
behavior. Clear the contents of this directory as appropriate for your
application. Should a user purge the cache manually, the contents of
this directory are removed.

\*\* The OS does not clear this directory automatically; you are
responsible for managing the contents yourself. Should the user purge
the cache manually, the contents of the directory are removed.

{{<note>}}
If external storage can't be mounted, the <code>cordova.file.external*</code>
properties are <code>null</code>.
{{</note>}}

### Windows File System Layout

{{<scrollTable>}}
<table>
    <tr>
        <th>Device Path</th>
        <th>cordova.file.*</th>
        <th>r/w?</th>
        <th>persistent?</th>
        <th>OS clears</th>
        <th>private</th>
    </tr>
    <tr>
        <td><code>ms-appdata:///</code></td>
        <td>applicationDirectory</td>
        <td>r</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>local/</code></td>
        <td>dataDirectory</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>temp/</code></td>
        <td>cacheDirectory</td>
        <td>r/w</td>
        <td>No</td>
        <td>Yes*</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>temp/</code></td>
        <td>tempDirectory</td>
        <td>r/w</td>
        <td>No</td>
        <td>Yes*</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>roaming/</code></td>
        <td>syncedDataDirectory</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
</table>
{{</scrollTable>}}

\* The OS may periodically clear this directory

Quirks
------

### Android Quirks

#### Android Persistent storage location

There are multiple valid locations to store persistent files on an
Android device. See [this page](http://developer.android.com/guide/topics/data/data-storage.html)
for an extensive discussion of the various possibilities.

Previous versions of the plugin would choose the location of the
temporary and persistent files on startup, based on whether the device
claimed that the SD Card (or equivalent storage partition) was mounted.
If the SD Card was mounted, or if a large internal storage partition was
available (such as on Nexus devices,) then the persistent files would be
stored in the root of that space. This meant that all Cordova apps could
see all of the files available on the card.

If the SD card was not available, then previous versions would store
data under `/data/data/<packageId>`, which isolates apps from each
other, but may still cause data to be shared between users.

It is now possible to choose whether to store files in the internal file
storage location, or using the previous logic, with a preference in your
application's `config.xml` file. To do this, add one of these two lines
to `config.xml`:

{{<highlight xml>}}
<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="AndroidPersistentFileLocation" value="Compatibility" />
{{</highlight>}}

Without this line, the File plugin will use `Internal` as the default.
If a preference tag is present, and is not one of these values, the
application will not start.

If your application has previously been shipped to users, using an older
(pre- 3.0.0) version of this plugin, and has stored files in the
persistent filesystem, then you should set the preference to
`Compatibility` if your config.xml does not specify a location for the
persistent filesystem. Switching the location to "Internal" would mean
that existing users who upgrade their application may be unable to
access their previously-stored files, depending on their device.

If your application is new, or has never previously stored files in the
persistent filesystem, then the `Internal` setting is generally
recommended.

#### Slow recursive operations for /android\_asset

Listing asset directories is really slow on Android. You can speed it up
though, by adding `src/android/build-extras.gradle` to the root of your
android project (also requires <cordova-android@4.0.0> or greater).

#### Permisson to write to external storage when it's not mounted on Marshmallow

Marshmallow requires the apps to ask for permissions when
reading/writing to external locations. By
[default](http://developer.android.com/guide/topics/data/data-storage.html#filesExternal),
your app has permission to write to
`cordova.file.applicationStorageDirectory` and
`cordova.file.externalApplicationStorageDirectory`, and the plugin
doesn't request permission for these two directories unless external
storage is not mounted. However due to a limitation, when external
storage is not mounted, it would ask for permission to write to
`cordova.file.externalApplicationStorageDirectory`.

### iOS Quirks

-   `cordova.file.applicationStorageDirectory` is read-only; attempting
    to store files within the root directory will fail. Use one of the
    other `cordova.file.*` properties defined for iOS (only
    `applicationDirectory` and `applicationStorageDirectory` are
    read-only).

-   `FileReader.readAsText(blob, encoding)`

-   The `encoding` parameter is not supported, and UTF-8 encoding is
    always in effect.

#### iOS Persistent storage location

There are two valid locations to store persistent files on an iOS
device: the Documents directory and the Library directory. Previous
versions of the plugin only ever stored persistent files in the
Documents directory. This had the side-effect of making all of an
application's files visible in iTunes, which was often unintended,
especially for applications which handle lots of small files, rather
than producing complete documents for export, which is the intended
purpose of the directory.

It is now possible to choose whether to store files in the documents or
library directory, with a preference in your application's `config.xml`
file. To do this, add one of these two lines to `config.xml`:

{{<highlight xml>}}
<preference name="iosPersistentFileLocation" value="Library" />
<preference name="iosPersistentFileLocation" value="Compatibility" />
{{</highlight>}}

Without this line, the File plugin will use `Compatibility` as the
default. If a preference tag is present, and is not one of these values,
the application will not start.

If your application has previously been shipped to users, using an older
(pre- 1.0) version of this plugin, and has stored files in the
persistent filesystem, then you should set the preference to
`Compatibility`. Switching the location to `Library` would mean that
existing users who upgrade their application would be unable to access
their previously-stored files.

If your application is new, or has never previously stored files in the
persistent filesystem, then the `Library` setting is generally
recommended.

Upgrading Notes
---------------

In v1.0.0 of this plugin, the `FileEntry` and `DirectoryEntry`
structures have changed, to be more in line with the published
specification.

Previous (pre-1.0.0) versions of the plugin stored the
device-absolute-file-location in the `fullPath` property of `Entry`
objects. These paths would typically look like

{{<highlight bash>}}
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)
{{</highlight>}}

These paths were also returned by the `toURL()` method of the `Entry`
objects.

With v1.0.0, the `fullPath` attribute is the path to the file, *relative
to the root of the HTML filesystem*. So, the above paths would now both
be represented by a `FileEntry` object with a `fullPath` of

{{<highlight bash>}}
/path/to/file
{{</highlight>}}

If your application works with device-absolute-paths, and you previously
retrieved those paths through the `fullPath` property of `Entry`
objects, then you should update your code to use `entry.toURL()`
instead.

For backwards compatibility, the `resolveLocalFileSystemURL()` method
will accept a device-absolute-path, and will return an `Entry` object
corresponding to it, as long as that file exists within either the
`TEMPORARY` or `PERSISTENT` filesystems.

This has particularly been an issue with the File-Transfer plugin, which
previously used device-absolute-paths (and can still accept them). It
has been updated to work correctly with FileSystem URLs, so replacing
`entry.fullPath` with `entry.toURL()` should resolve any issues getting
that plugin to work with files on the device.

In v1.1.0 the return value of `toURL()` was changed (see
[CB-6394](https://issues.apache.org/jira/browse/CB-6394)) to return an
absolute '<file://>' URL. wherever possible. To ensure a 'cdvfile:'-URL
you can use `toInternalURL()` now. This method will now return
filesystem URLs of the form

{{<highlight bash>}}
cdvfile://localhost/persistent/path/to/file
{{</highlight>}}

which can be used to identify the file uniquely.

cdvfile protocol
----------------

### Purpose

`cdvfile://localhost/persistent|temporary|another-fs-root*/path/to/file`
can be used for platform-independent file paths. cdvfile paths are
supported by core plugins - for example you can download an mp3 file to
cdvfile-path via `cordova-plugin-file-transfer` and play it via
`cordova-plugin-media`.

{{<note>}}
See {{<link href="#where-to-store-files" title="Where to Store Files">}}, {{<link title="File System Layouts" href="#file-system-layouts">}} and {{<link title="Configuring the Plugin" href="#configuring-the-plugin-optional">}} for more details about available fs roots.
{{</note>}}

To use `cdvfile` as a tag' `src` you can convert it to native path via
`toURL()` method of the resolved fileEntry, which you can get via
`resolveLocalFileSystemURL` - see examples below. You can also use
`cdvfile://` paths directly in the DOM, for example:

{{<highlight html>}}
<img src="cdvfile://localhost/persistent/img/logo.png" />
{{</highlight>}}

This method requires following Content Security rules updates:

-   Add `cdvfile:` scheme to `Content-Security-Policy` meta tag of the
    index page, e.g.:

    {{<highlight html>}}<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap:``\ **cdvfile:**\ ``https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">{{</highlight>}}

-   Add `<access origin="cdvfile://*" />` to `config.xml`.

**Converting cdvfile:// to native path**

{{<highlight javascript>}}
resolveLocalFileSystemURL('cdvfile://localhost/temporary/path/to/file.mp4', function(entry) {
    var nativePath = entry.toURL();
    console.log('Native URI: ' + nativePath);
    document.getElementById('video').src = nativePath;
}
{{</highlight>}}

**Converting native path to cdvfile://**

{{<highlight javascript>}}
resolveLocalFileSystemURL(nativePath, function(entry) {
    console.log('cdvfile URI: ' + entry.toInternalURL());
}
{{</highlight>}}

**Using cdvfile in core plugins**

{{<highlight javascript>}}
fileTransfer.download(uri, 'cdvfile://localhost/temporary/path/to/file.mp3', function (entry) { ...
{{</highlight>}}

{{<highlight javascript>}}
var my_media = new Media('cdvfile://localhost/temporary/path/to/file.mp3', ...);
my_media.play();
{{</highlight>}}

### cdvfile quirks

-   Using `cdvfile://` paths in the DOM is not supported on Windows
    platform (a path can be converted to native instead).

List of Error Codes and Meanings
--------------------------------

When an error is thrown, one of the following codes will be used.

Code | Constant
-----|------------------
`1` | `NOT_FOUND_ERR`
`2` | `SECURITY_ERR`
`3` | `ABORT_ERR`
`4` | `NOT_READABLE_ERR`
`5` | `ENCODING_ERR`
`6` | `NO_MODIFICATION_ALLOWED_ERR`
`7` | `INVALID_STATE_ERR`
`8` | `SYNTAX_ERR`
`9` | `INVALID_MODIFICATION_ERR`
`10` | `QUOTA_EXCEEDED_ERR`
`11` | `TYPE_MISMATCH_ERR`
`12` | `PATH_EXISTS_ERR`

Configuring the Plugin (Optional)
---------------------------------

The set of available filesystems can be configured per-platform. Both
iOS and Android recognize a tag in `config.xml` which names the
filesystems to be installed. By default, all file-system roots are
enabled.

{{<highlight xml>}}
<preference name="iosExtraFilesystems" value="library,library-nosync,documents,documents-nosync,cache,bundle,root" />
<preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,assets,root" />
{{</highlight>}}

### Android

-   `files`: The application's internal file storage directory
-   `files-external`: The application's external file storage directory
-   `sdcard`: The global external file storage directory (this is the
    root of the SD card, if one is installed). You must have the
    `android.permission.WRITE_EXTERNAL_STORAGE` permission to use this.
-   `cache`: The application's internal cache directory
-   `cache-external`: The application's external cache directory
-   `assets`: The application's bundle (read-only)
-   `root`: The entire device filesystem

Android also supports a special filesystem named "documents", which
represents a "/Documents/" subdirectory within the "files" filesystem.

### iOS

-   `library`: The application's Library directory
-   `documents`: The application's Documents directory
-   `cache`: The application's Cache directory
-   `bundle`: The application's bundle; the location of the app itself
    on disk (read-only)
-   `root`: The entire device filesystem

By default, the library and documents directories can be synced to
iCloud. You can also request two additional filesystems,
`library-nosync` and `documents-nosync`, which represent a special
non-synced directory within the `/Library` or `/Documents` filesystem.

Sample: Create Files and Directories, Write, Read, and Append files
-------------------------------------------------------------------

The File plugin allows you to do things like store files in a temporary
or persistent storage location for your app (sandboxed storage) and to
store files in other platform-dependent locations. The code snippets in
this section demonstrate different tasks including:

-   [Accessing the file system](#create-a-persistent-file)
-   Using cross-platform Cordova file URLs to [store your files](#append-a-file-using-alternative-methods) (see Where to Store Files for more info)
-   Creating [files](#create-a-persistent-file) and [directories](#create-directories)
-   [Writing to files](#write-to-a-file)
-   [Reading files](#read-a-file)
-   [Appending files](#append-a-file-using-alternative-methods)
-   [Display an image file](#display-an-image-file)

###  Create a persistent file

Before you use the File plugin APIs, you can get access to the file
system using `requestFileSystem`. When you do this, you can request
either persistent or temporary storage. Persistent storage will not be
removed unless permission is granted by the user.

When you get file system access using `requestFileSystem`, access is
granted for the sandboxed file system only (the sandbox limits access to
the app itself), not for general access to any file system location on
the device. (To access file system locations outside the sandboxed
storage, use other methods such as window.requestLocalFileSystemURL,
which support platform-specific locations. For one example of this, see
*Append a File*.)

Here is a request for persistent storage.

{{<note>}}
When targeting WebView clients (instead of a browser) or native apps
(Windows), you dont need to use <code>requestQuota</code> before using persistent
storage.
{{</note>}}

{{<highlight javascript>}}
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

    console.log('file system open: ' + fs.name);
    fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

        console.log("fileEntry is file?" + fileEntry.isFile.toString());
        // fileEntry.name == 'someFile.txt'
        // fileEntry.fullPath == '/someFile.txt'
        writeFile(fileEntry, null);

    }, onErrorCreateFile);

}, onErrorLoadFs);
{{</highlight>}}

The success callback receives FileSystem object (fs). Use `fs.root` to
return a DirectoryEntry object, which you can use to create or get a
file (by calling `getFile`). In this example, `fs.root` is a
DirectoryEntry object that represents the persistent storage in the
sandboxed file system.

The success callback for `getFile` receives a FileEntry object. You can
use this to perform file write and file read operations.

### Create a temporary file

Here is an example of a request for temporary storage. Temporary storage
may be deleted by the operating system if the device runs low on memory.

{{<highlight javascript>}}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);
    createFile(fs.root, "newTempFile.txt", false);

}, onErrorLoadFs);
{{</highlight>}}

When you are using temporary storage, you can create or get the file by
calling `getFile`. As in the persistent storage example, this will give
you a FileEntry object that you can use for read or write operations.

{{<highlight javascript>}}
function createFile(dirEntry, fileName, isAppend) {
    // Creates a new file or returns the file if it already exists.
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

        writeFile(fileEntry, null, isAppend);

    }, onErrorCreateFile);

}
{{</highlight>}}

###  Write to a file

Once you have a FileEntry object, you can write to the file by calling
`createWriter`, which returns a FileWriter object in the success
callback. Call the `write` method of FileWriter to write to the file.

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

###  Read a file

You also need a FileEntry object to read an existing file. Use the file
property of FileEntry to get the file reference, and then create a new
FileReader object. You can use methods like `readAsText` to start the
read operation. When the read operation is complete, `this.result`
stores the result of the read operation.

{{<highlight javascript>}}
function readFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            console.log("Successful file read: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);
        };

        reader.readAsText(file);

    }, onErrorReadFile);
}
{{</highlight>}}

###  Append a file using alternative methods

Of course, you will often want to append existing files instead of
creating new ones. Here is an example of that. This example shows
another way that you can access the file system using
window.resolveLocalFileSystemURL. In this example, pass the
cross-platform Cordova file URL, cordova.file.dataDirectory, to the
function. The success callback receives a DirectoryEntry object, which
you can use to do things like create a file.

{{<highlight javascript>}}
window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
    console.log('file system open: ' + dirEntry.name);
    var isAppend = true;
    createFile(dirEntry, "fileToAppend.txt", isAppend);
}, onErrorLoadFs);
{{</highlight>}}

In addition to this usage, you can use `resolveLocalFileSystemURL` to
get access to some file system locations that are not part of the
sandboxed storage system. See *Where to store Files* for more
information; many of these storage locations are platform-specific. You
can also pass cross-platform file system locations to
`resolveLocalFileSystemURL` using the *cdvfile protocol*.

For the append operation, there is nothing new in the `createFile`
function that is called in the preceding code (see the preceding
examples for the actual code). `createFile` calls `writeFile`. In
`writeFile`, you check whether an append operation is requested.

Once you have a FileWriter object, call the `seek` method, and pass in
the index value for the position where you want to write. In this
example, you also test whether the file exists. After calling seek, then
call the write method of FileWriter.

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj, isAppend) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file read...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file read: " + e.toString());
        };

        // If we are appending data to file, go to the end of the file.
        if (isAppend) {
            try {
                fileWriter.seek(fileWriter.length);
            }
            catch (e) {
                console.log("file doesn't exist!");
            }
        }
        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

### Store an existing binary file

We already showed how to write to a file that you just created in the
sandboxed file system. What if you need to get access to an existing
file and convert that to something you can store on your device? In this
example, you obtain a file using an xhr request, and then save it to the
cache in the sandboxed file system.

Before you get the file, get a FileSystem reference using
`requestFileSystem`. By passing window.TEMPORARY in the method call
(same as before), the returned FileSystem object (fs) represents the
cache in the sandboxed file system. Use `fs.root` to get the
DirectoryEntry object that you need.

{{<highlight javascript>}}
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);
    getSampleFile(fs.root);

}, onErrorLoadFs);
{{</highlight>}}

For completeness, here is the xhr request to get a Blob image. There is
nothing Cordova-specific in this code, except that you forward the
DirectoryEntry reference that you already obtained as an argument to the
saveFile function. You will save the blob image and display it later
after reading the file (to validate the operation).

{{<highlight javascript>}}
function getSampleFile(dirEntry) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cordova.apache.org/static/img/cordova_bot.png', true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (this.status == 200) {

            var blob = new Blob([this.response], { type: 'image/png' });
            saveFile(dirEntry, blob, "downloadedImage.png");
        }
    };
    xhr.send();
{{</highlight>}}

{{<note>}}
For Cordova 5 security, the preceding code requires that you
add the domain name, <code>http://cordova.apache.org</code>, to the
<b>Content-Security-Policy</b> element in <code>index.html</code>.
{{</note>}}

After getting the file, copy the contents to a new file. The current
DirectoryEntry object is already associated with the app cache.

{{<highlight javascript>}}
function saveFile(dirEntry, fileData, fileName) {

    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {

        writeFile(fileEntry, fileData);

    }, onErrorCreateFile);
}
{{</highlight>}}

In writeFile, you pass in the Blob object as the dataObj and you will
save that in the new file.

{{<highlight javascript>}}
function writeFile(fileEntry, dataObj, isAppend) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            if (dataObj.type == "image/png") {
                readBinaryFile(fileEntry);
            }
            else {
                readFile(fileEntry);
            }
        };

        fileWriter.onerror = function(e) {
            console.log("Failed file write: " + e.toString());
        };

        fileWriter.write(dataObj);
    });
}
{{</highlight>}}

After writing to the file, read it and display it. You saved the image
as binary data, so you can read it using `FileReader.readAsArrayBuffer`.

{{<highlight javascript>}}
function readBinaryFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {

            console.log("Successful file write: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);

            var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
            displayImage(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}
{{</highlight>}}

After reading the data, you can display the image using code like this.
Use `window.URL.createObjectURL` to get a DOM string for the Blob image.

{{<highlight javascript>}}
function displayImage(blob) {

    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('imageFile');
    // Note: Use window.URL.revokeObjectURL when finished with image.
    elem.src = window.URL.createObjectURL(blob);
}
{{</highlight>}}

###  Display an image file

To display an image using a FileEntry, you can call the `toURL` method.

{{<highlight javascript>}}
function displayImageByFileURL(fileEntry) {
    var elem = document.getElementById('imageFile');
    elem.src = fileEntry.toURL();
}
{{</highlight>}}

If you are using some platform-specific URIs instead of a FileEntry and
you want to display an image, you may need to include the main part of
the URI in the Content-Security-Policy element in index.html. For
example, on Windows 10, you can include `ms-appdata:` in your element.
Here is an example.

{{<highlight html>}}
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
{{</highlight>}}

###  Create Directories

In the code here, you create directories in the root of the app storage
location. You could use this code with any writable storage location
(that is, any DirectoryEntry). Here, you write to the application cache
(assuming that you used window.TEMPORARY to get your FileSystem object)
by passing fs.root into this function.

This code creates the /NewDirInRoot/images folder in the application
cache. For platform-specific values, look at *File System Layouts*.

{{<highlight javascript>}}
function createDirectory(rootDirEntry) {
    rootDirEntry.getDirectory('NewDirInRoot', { create: true }, function (dirEntry) {
        dirEntry.getDirectory('images', { create: true }, function (subDirEntry) {

            createFile(subDirEntry, "fileInNewSubDir.txt");

        }, onErrorGetDir);
    }, onErrorGetDir);
}
{{</highlight>}}

When creating subfolders, you need to create each folder separately as
shown in the preceding code.

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
