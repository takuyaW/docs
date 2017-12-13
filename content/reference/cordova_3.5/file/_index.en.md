---
title: File Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-file/blob/master/RELEASENOTES.md#120-jun-05-2014">1.2.0</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-file">}}.
{{</note>}}

This plugin implements a File API allowing read/write access to files
residing on the device.

This plugin is based on several specs, including : The HTML5 File API
<http://www.w3.org/TR/FileAPI/>

The (now-defunct) Directories and System extensions Latest:
<http://www.w3.org/TR/2012/WD-file-system-api-20120417/> Although most
of the plugin code was written when an earlier spec was current:
<http://www.w3.org/TR/2011/WD-file-system-api-20110419/>

It also implements the FileWriter spec :
<http://dev.w3.org/2009/dap/file-system/file-writer.html>

For usage, please refer to HTML5 Rocks' excellent [FileSystem
article.](http://www.html5rocks.com/en/tutorials/file/filesystem/)

For an overview of other storage options, refer to Cordova's [storage
guide](http://cordova.apache.org/docs/en/edge/cordova_storage_storage.md.html).

Plugin ID
---------

    org.apache.cordova.file

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins) `org.apache.cordova.file` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

\* \*These platforms do not support `FileReader.readAsArrayBuffer` nor
`FileWriter.write(blob)`.\*

Where to Store Files
--------------------

As of v1.2.0, URLs to important file-system directories are provided.
Each URL is in the form \*<file:///path/to/spot/*>, and can be converted
to a `DirectoryEntry` using `window.resolveLocalFileSystemURL()`.

-   `cordova.file.applicationDirectory`
-   Read-only directory where the application is installed. (*iOS*,
    *Android*, *BlackBerry 10*)
-   `cordova.file.applicationStorageDirectory`
-   Root directory of the application's sandbox; on iOS this location is
    read-only (but specific subdirectories \[like `/Documents`\] are
    read-write). All data contained within is private to the app. (
    *iOS*, *Android*, *BlackBerry 10*)
-   `cordova.file.dataDirectory`
-   Persistent and private data storage within the application's sandbox
    using internal memory (on Android, if you need to use external
    memory, use `.externalDataDirectory`). On iOS, this directory is not
    synced with iCloud (use `.syncedDataDirectory`). (*iOS*, *Android*,
    *BlackBerry 10*)
-   `cordova.file.cacheDirectory`
-   Directory for cached data files or any files that your app can
    re-create easily. The OS may delete these files when the device runs
    low on storage, nevertheless, apps should not rely on the OS to
    delete files in here. (*iOS*, *Android*, *BlackBerry 10*)
-   `cordova.file.externalApplicationStorageDirectory`
-   Application space on external storage. (*Android*)
-   `cordova.file.externalDataDirectory`
-   Where to put app-specific data files on external storage.
    (*Android*)
-   `cordova.file.externalCacheDirectory`
-   Application cache on external storage. (*Android*)
-   `cordova.file.externalRootDirectory`
-   External storage (SD card) root. (*Android*, *BlackBerry 10*)
-   `cordova.file.tempDirectory`
-   Temp directory that the OS can clear at will. Do not rely on the OS
    to clear this directory; your app should always remove files as
    applicable. (*iOS*)
-   `cordova.file.syncedDataDirectory`
-   Holds app-specific files that should be synced (e.g. to iCloud).
    (*iOS*)
-   `cordova.file.documentsDirectory`
-   Files private to the app, but that are meaningful to other
    application (e.g. Office files). (*iOS*)
-   `cordova.file.sharedDirectory`
-   Files globally available to all applications (*BlackBerry 10*)

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
        <th>r/w?</th>
        <th>persistent?</th>
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
        <td><code>Library</code></td>
        <td></td>
        <td>library</td>
        <td>r/w</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes?</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td><code>NoCloud/</code></td>
        <td>dataDirectory</td>
        <td>library-nosync</td>
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

\*\*The OS may periodically clear this directory, but do not rely on
this behavior. Clear the contents of this directory as appropriate for
your application. Should a user purge the cache manually, the contents
of this directory are removed.

\*\*The OS does not clear this directory automatically; you are
responsible for managing the contents yourself. Should the user purge
the cache manually, the contents of the directory are removed.

**Note**: If external storage can't be mounted, the
`cordova.file.external*` properties are `null`.

Android Quirks
--------------

### Android Persistent storage location

There are multiple valid locations to store persistent files on an
Android device. See [this
page](http://developer.android.com/guide/topics/data/data-storage.html)
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

    <preference name="AndroidPersistentFileLocation" value="Internal" />

    <preference name="AndroidPersistentFileLocation" value="Compatibility" />

Without this line, the File plugin will use `Compatibility` as the
default. If a preference tag is present, and is not one of these values,
the application will not start.

If your application has previously been shipped to users, using an older
(pre- 1.0) version of this plugin, and has stored files in the
persistent filesystem, then you should set the preference to
`Compatibility`. Switching the location to "Internal" would mean that
existing users who upgrade their application may be unable to access
their previously-stored files, depending on their device.

If your application is new, or has never previously stored files in the
persistent filesystem, then the `Internal` setting is generally
recommended.

iOS Quirks
----------

-   `cordova.file.applicationStorageDirectory` is read-only; attempting
    to store files within the root directory will fail. Use one of the
    other `cordova.file.*` properties defined for iOS (only
    `applicationDirectory` and `applicationStorageDirectory` are
    read-only).
-   `FileReader.readAsText(blob, encoding)`
-   The `encoding` parameter is not supported, and UTF-8 encoding is
    always in effect.

### iOS Persistent storage location

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

    <preference name="iosPersistentFileLocation" value="Library" />

    <preference name="iosPersistentFileLocation" value="Compatibility" />

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

Firefox OS Quirks
-----------------

The File System API is not natively supported by Firefox OS and is
implemented as a shim on top of indexedDB.

-   Does not fail when removing non-empty directories
-   Does not support metadata for directories
-   Methods `copyTo` and `moveTo` do not support directories

The following data paths are supported: \* `applicationDirectory` - Uses
`xhr` to get local files that are packaged with the app. \*
`dataDirectory` - For persistent app-specific data files. \*
`cacheDirectory` - Cached files that should survive app restarts (Apps
should not rely on the OS to delete files in here).

Upgrading Notes
---------------

In v1.0.0 of this plugin, the `FileEntry` and `DirectoryEntry`
structures have changed, to be more in line with the published
specification.

Previous (pre-1.0.0) versions of the plugin stored the
device-absolute-file-location in the `fullPath` property of `Entry`
objects. These paths would typically look like

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

These paths were also returned by the `toURL()` method of the `Entry`
objects.

With v1.0.0, the `fullPath` attribute is the path to the file, *relative
to the root of the HTML filesystem*. So, the above paths would now both
be represented by a `FileEntry` object with a `fullPath` of

    /path/to/file

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

In v1.1.0 the return value of `toURL()` was changed (see \[CB-6394\]
(<https://issues.apache.org/jira/browse/CB-6394>)) to return an absolute
'<file://>' URL. wherever possible. To ensure a 'cdvfile:'-URL you can
use `toInternalURL()` now. This method will now return filesystem URLs
of the form

    cdvfile://localhost/persistent/path/to/file

which can be used to identify the file uniquely.

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

    <preference name="iosExtraFilesystems" value="library,library-nosync,documents,documents-nosync,cache,bundle,root" />
    <preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,root" />

### Android

-   `files`: The application's internal file storage directory
-   `files-external`: The application's external file storage directory
-   `sdcard`: The global external file storage directory (this is the
    root of the SD card, if one is installed). You must have the
    `android.permission.WRITE_EXTERNAL_STORAGE` permission to use this.
-   `cache`: The application's internal cache directory
-   `cache-external`: The application's external cache directory
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
