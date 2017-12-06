---
title: File and Folder Structure
weight: 10
---

## Cordova Version

With a different Cordova version, the file and folder structure of a Monaca project is configured differently. 

### For Cordova 5.2 or lower

| File/Folder Name | Description |
|------------------|-------------|
| `android/` | 	Storage folder for Android application settings |
| `chrome/` | 	Storage folder for Chrome application settings |
| `ios/` | 	Storage folder for iOS application settings |
| `www/` | 	Storage folder for the main body of the application |
| `config.xml` | 	Cordova configuration file |


### For Cordova 6.2 or higher

| File/Folder Name | Description |
|------------------|-------------|
| `chrome/` | 	Storage folder for Chrome application settings |
| `plugins/` | 	Storage folder for additional plugins |
| `res/` | 	Resources folder for Android, iOS and Winrt |
| `www/` | 	Storage folder for the main body of the application |
| `config.xml` | 	Cordova configuration file |

## android Folder

Android application settings files are stored inside the `android`
folder.

| File Name | Description |
|------------------|-------------|
| `AndroidManifest.xml` | 	Manifest file used when running Android applications |

For more information about how to use this file, please see [Android Configuration File](/en/reference/config/android_configuration/).

{{<note>}}
    For Cordova 6.2 or higher, <code>AndroidManifest.xml</code> file is removed from Monaca framework. Therefore, in order to config Android application settings, use {{<link href="/en/reference/third_party_phonegap/custom_config/" title="Cordova Custom Config Plugin">}}.
{{</note>}}


## chrome Folder

Chrome application settings files are stored inside the `chrome` folder.

| File Name | Description |
|------------------|-------------|
| `background.js` | 	A JavasSript file used when running Chrome applications |
| `manifest.json` | 	A Manifest file used when running Chrome applications |


## ios Folder

iOS application settings files are stored inside the `ios` folder.

| File Name | Description |
|------------------|-------------|
| `MonacaApp-Info.plist` | Info.plist file used when running iOS applications |


For more information about how to use this file, please see [iOS Configuration File](/en/reference/config/ios_configuration/).


{{<note>}}
    For Cordova 6.2 or higher, <code>MonacaApp-Info.plist</code> file is removed from Monaca framework. Therefore, in order to config Android application settings, use {{<link href="/en/reference/third_party_phonegap/custom_config/" title="Cordova Custom Config Plugin">}}.
{{</note>}}

## www Folder

Files of the application's main body are stored here. Files and folders
can be arranged freely within this `www` folder, but the following files
and folders have special significance.

| File/Folder Name | Description |
|------------------|-------------|
| `index.html` | 	The first page to be displayed when the application starts up. The startup file can be changed. |
| `components/` | 	The folder created by Monaca for all JS/CSS components used in the project. | 


### index.html

The index.html file is the starting point for your application. At
startup, the information contained in this file is usually the very
first thing that will be read.

### components Folder

The folder `www/components/` is for all JS/CSS components used in the
project. However, the following two files exist in that folder by
default regardless of what kinds of components you have added for your
project.

| File Name | Description |
|------------------|-------------|
| `loader.js` | 	A JavaScript file used by Monaca to load the components |
| `loader.css` | 	A style sheet file used by Monaca for the components |

The `loader.js` and `loader.css` files must be read from an HTML file.

Each component will create its own folder within (one level below)
`www/components/` folder.

## config.xml File

The `config.xml` file is a settings file controlling various settings of Cordova. Please refer to the following documentations regarding how to edit `config.xml` file for Android and iOS:

-   [config.xml for Android](/en/reference/config/android_configuration/#config-xml-android)
-   [config.xml for iOS](/en/reference/config/ios_configuration/#config-xml-ios)


{{<note>}}
    For Cordova 6.2 or higher, <code>config.xml</code> file is also used to config either Android or iOS application settings. Please refer to {{<link href="/en/reference/third_party_phonegap/custom_config/" title="Cordova Custom Config Plugin">}}.
{{</note>}}


See Also: 

- [Cordova Custom Config Plugin](/en/reference/third_party_phonegap/custom_config/)
- [iOS Configuration](/en/reference/config/ios_configuration/)
- [Android Configuration](/en/reference/config/android_configuration/)