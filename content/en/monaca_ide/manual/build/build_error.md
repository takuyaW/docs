---
title: Common Build and Application Uploader Errors
---

# Common Build and Application Uploader Errors

Here is a list of commom errors you may face while building or uploading
the application to iTunes Connect:

## minSdkVersion

{{< highlight bash >}}
minSdkVersion 14 cannot be smaller than version 16 declared in library ["library name"]
{{< /highlight >}}

Sometimes you may use a Cordova plugin which requires a different API
level configuration from your project's default settings. For example,
in this case, your default setting for minimum API level is 14
(`minSdkVersion=14`); however, one of your plugins requires API level at
least 16. In other words, the `minSdkVersion` value is lower than the
one required by the plugin.

In order to solve this error, you can just correct the value of
`minSdkVersion` in the `config.xml` file as follows:

{{< highlight xml >}}
<preference name="android-minSdkVersion" value="16" />
{{< /highlight >}}

## Provisioning Profile

{{<highlight bash >}}
Provisioning profile "For Debug Build" doesn't include the aps-environment entitlement.
{{</highlight>}}

This error means that your current provisioning profile doesn't have the
right configuration for push notification. In other words, when you are
using `MonacaBackend` or `NCMB` plugins for Cordova 6.5 project, this
error will occur if you don't have the right configuration for push
notification in iOS.

In order to fix this error, please use the right configuration for push
notification as follows:

-   use AppID for push Notification
-   get Push Notification certificate
-   get Push Notification Provisioning profile

{{<highlight bash>}}
Provisioning profile "profile_xxx" has app ID "com.example.xxx", which does not match the bundle ID "com.example.zzz".
{{</highlight>}}

The App ID set for the target project does not match the bundle ID.
Please make sure that your AppID setting matches the one in your
provisioning profile.

{{<highlight bash>}}
Code Sign error: No matching provisioning profiles found
{{</highlight>}}

This might cause by the mismatch/inconsistency in the iOS Build
configuration. Please make sure to use the correct AppID with a
corresponding certificate and provisioning profile.

{{<highlight bash>}}
Error code 65 for command: xcodebuild 
{{</highlight>}}

This might cause by the mismatch/inconsistency in the iOS Build
configuration. For example: AppID in Provisioning profile not matching
with bundle identifier. Please make sure to use the correct AppID with a
corresponding certificate and provisioning profile.

## Splash Screen

{{<highlight bash>}}
AAPT: libpng error: Not a PNG file
{{</highlight>}}

This is an error related to the splash screen image file(s) such as:

-   You may use a different file format rather than PNG. Currently, only
    PNG files are supported as splash screen images in Monaca.
-   Splash image files are corrupted.
-   If you are using 9-patch format images, please make sure the format
    is correct.

## Project Files

{{<highlight bash>}}
Process 'command '/data/android-sdk/build-tools/23.0.3/aapt'' finished with non-zero exit value 1
{{</highlight>}}

This might cause by an invalid file name in the project files. Please
make sure that double-byte characters and special characters are not
used for the file name in the project.

## Android Keystore

{{<highlight bash>}}
Failed to read key keyname from store "/tmp/monaca/xxxxxxxxxxx/output/etc/keystore.private": Cannot recover key
{{</highlight>}}

Failed to read key keyname from a keystore file. Please make sure to:

-   use the correct keystore in the Android build setting.
-   enter the right password for the corresponded keystore before start
    building.

## Crosswalk Plugin

{{<highlight bash>}}
Build Error: Error: App File not found. null
{{</highlight>}}

This might occur when `Crosswalk WebView Engine` plugin v2.2.0 or higher
is enabled in a Cordova 6.2 project. If you are using
`Crosswalk WebView Engine` plugin in a Cordova 6.2 project, please use
`v2.1.0` or lower.

For Cordova 6.2 projects, the following configurations for
`Crosswalk WebView Engine` plugin are confirmed to build successfully:

1.  Plug-in version: `1.7.2` with Crosswalk version: `18.48.477.13` (default
    configuration)
2.  Plug-in version: `2.1.0` with Crosswalk version: `21.51.546.7`

## iTunes Connect

{{<highlight bash>}}
Unable to validate your application. Your Apple ID or password was entered incorrectly.
{{</highlight>}}


`Apple ID` or `Password` used when uploading the app to iTunes Connect
has not been entered correctly. Please make sure to use the right
`Apple ID` and corresponded `Password`.

{{<highlight bash>}}
Unable to validate your application. Please sign in with an app-specific password. You can create one at appleid.apple.com.
{{</highlight>}}


If the `Apple ID` used when uploading the app to iTunes Connect is using
2-factor authentication, please try using the app-specific password. For
more information, please refer to [App-specific
Password](https://support.apple.com/en-us/HT204397).

{{<highlight bash>}}
No suitable application records were found. Verify your bundle identifier 'com.example.xxx' is correct.
{{</highlight>}}


Please make sure "com.example.xxx" is registered in iTunes Connect.

{{<highlight bash>}}
There already exists a binary upload with build version '1.0.0' for train '1.0.0'
{{</highlight>}}

There is an application of the same build version in iTunes Connect.
Please build the app again with a different version number.

{{<highlight bash>}}
The value for key CFBundleShortVersionString [0.0.1] in the Info.plist file must contain a higher version than that of the previously approved version [1.0.0]
{{</highlight>}}

The version number in the current build app is lower than the last
certified build app. Please build the app again with a higher version
number.

{{<highlight bash>}}
This bundle does not support one or more of the devices supported by the previous app. This bundle does not support one or more of the devices supported by the previous app version. Your app update must continue to support all devices previously supported. You declare supported devices in Xcode with the Targeted Device Family build setting. 
{{</highlight>}}

When updating an application, it is not possible to reduce the number of
supporting devices. Please check the setting of a target device in iOS
application setting.
