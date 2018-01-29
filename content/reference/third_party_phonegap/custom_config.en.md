---
title: Cordova Custom Config Plugin
weight: 20
---

For Cordova 5.2 or lower, basic behaviour of Android or iOS applications
can be configured by editing `AndroidManifest.xml` or
`MonacaApp-Info.plist` file respectively. However, for Cordova 6.2 or
higher, both `AndroidManifest.xml` and `MonacaApp-Info.plist` files are
removed from Monaca framework.

Therefore, in order to config iOS/Android application settings, you will
need to use Cordova Custom Config plugin. This Cordova plugin for iOS
and Android provides hook scripts to update platform configuration files
based on custom preferences and config-file data defined in `config.xml`
file that are not supported out-of-the-box by Cordova.

## Enable the Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `Custom Config` plugin to add it into your
    project.

    {{<img src="/images/reference/third_party_phonegap/custom_config/1.png">}}

## Usage

There are no run-time source files included in this plugin. It includes
hook scripts which are used to apply preferences dictated by custom keys
in the `config.xml` file of the project to the relevant platform config
files. Therefore, in order to use this plugin, you need to include the
relevant keys in your `config.xml` and the scripts will take care of the
rest when you build your project.

By default, any changes made by this plugin to platform config files are
irreversible. However, if you want the changes made to be reversible,
you can enable auto-backup/restore functionality by adding the following
preference inside the top-level `<widget>` element of your `config.xml`:

{{<highlight xml>}}
<preference name="cordova-custom-config-autorestore" value="true" />
{{</highlight>}}

## Preferences

Preferences are set by defining a `<preference>` element in the
`config.xml` file. For example:

{{<highlight xml>}}
<preference name="android-launchMode" value="singleTop" />
{{</highlight>}}

While setting the preferences, please be aware of the following points:

1.  Preferences defined outside of the `<platform>` element will apply
    to all platforms.
2.  Preferences defined inside a `<platform>` element will apply only to
    the specified platform.
3.  Platform preferences take precedence over common preferences.
4.  Platform-specific preferences must be prefixed with the platform
    name (e.g. `name="ios-somepref"`) and be defined inside a `<platform>`
    element.

## Config Blocks

`<config-file>` blocks allow platform-specific chunks of the
configuration to be defined as an XML subtree in the `config.xml` file,
which is then applied to the appropriate platform configuration file by
the plugin.

While setting the config blocks, please be aware of the following
points:

1.  `<config-file>` elements must be defined inside a `<platform>`
    element, otherwise they will be ignored.
2.  config-file `target` attributes specify the target file to update.
    (`AndroidManifest.xml` or `*-Info.plist`)
3.  config-file `parent` attributes specify the parent element
    (`AndroidManifest.xml`) or parent key (`*-Info.plist`) that the
    child data will replace or be appended to.
4.  `<config-file>` elements are uniquely indexed by target and parent
    for each platform.
5.  If there are multiple config-file's defined with the same target and
    parent, the last config-file will be used.
6.  Elements defined within a config-file will replace or be appended to
    the same elements relative to the parent element.
7.  If a unique config-file contains multiples of the same elements
    (other than `<uses-permission>` elements which are selected by by
    the uses-permission `name` attribute), the last defined element will
    be retrieved.

## Android

The plugin currently supports setting of custom config only in
`platforms/android/AndroidManifest.xml`. For a list of possible manifest
values, please refer to [App Manifest](http://developer.android.com/guide/topics/manifest/manifest-intro.html).
All Android-specific config should be placed inside the
`<platform name="android">` in `config.xml` file.

### Android Preferences

`<preference>` elements in `config.xml` are used to set attributes on
elements in the `AndroidManifest.xml`. For example, if you add the
following element to the `config.xml`:

{{<highlight xml>}}
<preference name="android-manifest/@android:hardwareAccelerated" value="false" />
{{</highlight>}}

then the following line will be added to `AndroidManifest.xml`:

{{<highlight xml>}}
<manifest android:hardwareAccelerated="false">
{{</highlight>}}

Sometimes, you may want to remove some default settings in
`AndroidManifest.xml`. You can do delete them by using the
`delete="true"` attribute of the `<preference>` element. For example, if
you add the following line in `config.xml`, it will delete the existing
node `<uses-permission android:name="android.permission.WRITE_CONTACTS" />`
within `AndroidManifest.xml`:

{{<highlight xml>}}
<preference name="android-manifest/uses-permission/[@android:name='android.permission.WRITE_CONTACTS']/@android:name" delete="true" />
{{</highlight>}}

#### Android Namespace Attribute

{{<note>}}
In order to user the <code>android:</code> namespace in preferences within your
<code>config.xml</code>, you must include the android namespace attribute on the
root <code>&lt;widget&gt;</code> element.
{{</note>}}

The namespace attribute fragment is:

{{<highlight xml>}}
xmlns:android="http://schemas.android.com/apk/res/android"
{{</highlight>}}

so your `<widget>` element should look something like this:

{{<highlight xml>}}
<widget
    id="com.my.app"
    version="0.0.1"
    xmlns="http://www.w3.org/ns/widgets"
    xmlns:cdv="http://cordova.apache.org/ns/1.0"
    xmlns:android="http://schemas.android.com/apk/res/android">
{{</highlight>}}

#### XPath Preferences

Android manifest preferences are set by using XPaths in the preference
name to define which element attribute the value should be applied to.
The preference name should be prefixed with `android-manifest` then
follow with an XPath which specifies the element and attribute to apply
the value to. For example,

{{<highlight xml>}}
<preference name="android-manifest/application/activity/@android:launchMode" value="singleTask" />
{{</highlight>}}

This preference specifies that the `launchMode` attribute should be
given a value of `singleTask` which will be resulted as:

{{<highlight xml>}}
<activity android:launchMode="singleTask">
{{</highlight>}}

If your manifest contains other activities, you should specify the
activity name in the XPath. For example:

{{<highlight xml>}}
<preference name="android-manifest/application/activity[@android:name='MainActivity']/@android:launchMode" value="singleTask" />
{{</highlight>}}

{{<note>}}
The activity name for Cordova 4.2.0 and below was <code>CordovaApp</code> whereas
Cordova 4.3.0 and above is <code>MainActivity</code>.
{{</note>}}

If the attribute you are setting is on the root `<manifest>` element,
just omit the element name and specify the attribute. For example:

{{<highlight xml>}}
<preference name="android-manifest/@android:installLocation" value="auto" />
{{</highlight>}}

### Android Config Blocks

`<config-file>` blocks are used to define chunks of configuration of an
XML subtree which will be inserted into `AndroidManifest.xml`. The child
elements inside the `<config-file>` block will be inserted under the
parent element.

`<config-file>` element has two attributes such as:

1.  `target`: must be set to `AndroidManifest.xml`.
2.  `parent`: defines an Xpath to the parent element in the
    `AndroidManifest.xml` under which the XML subtree block should be
    inserted:

    - to insert a block under the root `<manifest>` element, use `parent="/*"`.
    - to insert a block under a descendant of `<manifest>`, use an Xpath prefixed with `./`. For example, `parent="./application/activity"` will insert the block under `/manifest/application/activity`.

For example:

{{<highlight xml>}}
<config-file target="AndroidManifest.xml" parent="./application">
    <some-element />
</config-file>
{{</highlight>}}

will result in `AndroidManifest.xml` with:

{{<highlight xml>}}
<manifest ...>
    <application ...>
        <some-element />
    </application>
</manifest>
{{</highlight>}}

{{<note>}}
    If the specified parent element contains an existing child element of the same name as that defined in the XML subtree, the existing element will be overwritten.
{{</note>}}

For example:

{{<highlight xml>}}
<config-file target="AndroidManifest.xml">
    <application android:name="MyApp" />
</config-file>
{{</highlight>}}

will replace the existing `<application>` element. In this case, it
would be better to use a preference:

{{<highlight xml>}}
<preference name="android-manifest/application/@android:name" value="MyApp" />
{{</highlight>}}

### Android Example

Below is an example of a `config.xml` file for Android configuration:

{{<highlight xml>}}
<platform name="android">
    <!-- custom preferences examples -->
    <preference name="android-manifest/application/activity/@android:windowSoftInputMode" value="stateVisible" />
    <preference name="android-manifest/@android:installLocation" value="auto" />
    <preference name="android-manifest/application/@android:hardwareAccelerated" value="false" />
    <preference name="android-manifest/@android:hardwareAccelerated" value="false" />
    <preference name="android-manifest/application/activity/@android:configChanges" value="orientation" />
    <preference name="android-manifest/application/activity/@android:theme" value="@android:style/Theme.Material" />

    <!-- specify activity name -->
    <preference name="android-manifest/application/activity[@android:name='MainActivity']/@android:launchMode" value="singleTask" />


    <!-- These preferences are actually available in Cordova by default although not currently documented -->
    <preference name="android-minSdkVersion" value="10" />
    <preference name="android-maxSdkVersion" value="22" />
    <preference name="android-targetSdkVersion" value="21" />

    <!-- Or you can use a config-file element for them -->
    <config-file target="AndroidManifest.xml" parent="/*">
        <uses-sdk android:maxSdkVersion="22" android:minSdkVersion="10" android:targetSdkVersion="21" />
    </config-file>


    <!-- custom config example -->
     <config-file target="AndroidManifest.xml" parent="/*">
        <supports-screens
            android:xlargeScreens="false"
            android:largeScreens="false"
            android:smallScreens="false" />

        <uses-permission android:name="android.permission.READ_CONTACTS" android:maxSdkVersion="15" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
    </config-file>
</platform>
{{</highlight>}}

## iOS

The plugin currently supports custom configuration of the project plist
(`*-Info.plist`) using config blocks, and project settings
(`project.pbxproj`) using preference elements. All iOS-specific config
should be placed inside the `<platform name="ios">` in `config.xml`
file.

### iOS Preferences

`<preference>` elements in `config.xml` are used to set preferences in
the `*-Info.plist`. Preferences should be defined in the format:
`<preference name="ios-SOME_BLOCK_TYPE-SOME_KEY" value="SOME_VALUE" />`.
For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-ENABLE_BITCODE" value="NO" />
{{</highlight>}}

#### Build Configuration Preferences

Currently, `XCBuildConfiguration` is the only supported block type in
the `project.pbxproj`. However, there is no constraint on the list of
keys for which values may be set.

If an entry already exists in an `XCBuildConfiguration` block for the
specified key, the existing value will be overwritten with the specified
value. If no entry exists in any `XCBuildConfiguration` block for the
specified key, a new key entry will be created in each
`XCBuildConfiguration` block with the specified value.

By default, values will be applied to both "Release" and "Debug"
`XCBuildConfiguration` blocks. However, the block type can be specified
by adding a `buildType` attribute to the `<preference>` element in the
`config.xml`. The value can be either `debug` or `release`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />
{{</highlight>}}

By default, both the key (preference name) and value will be
quote-escaped when inserted into the `XCBuildConfiguration` block. For
example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />
{{</highlight>}}

will appear in `project.pbxproj` as:

{{<highlight xml>}}
"IPHONEOS_DEPLOYMENT_TARGET" = "7.0";
{{</highlight>}}

The default quoting can be override by setting the `quote` attribute on
the `<preference>` element. The valid values are:

-   `none`: don't quote key or value
-   `key`: quote key but not value
-   `value`: quote value but not key
-   `both`: quote both key and value

For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" quote="none" />
{{</highlight>}}

will appear in `project.pbxproj` as:

{{<highlight xml>}}
IPHONEOS_DEPLOYMENT_TARGET = 7.0;
{{</highlight>}}

#### .xcconfig files

Cordova uses `.xcconfig` files in `/platforms/ios/cordova/` to override
Xcode project settings in `project.pbxproj` with build-type specific
values. `build.xcconfig` is overriden by settings in
`build-debug.xcconfig` and `build-release.xcconfig` for the
corresponding build type.

When applying a custom preference, the plugin will look for an existing
entry in the `.xcconfig` file that corresponds to the buildType
attribute.

-   If buildType attribute is `debug` or `release`, the plugin will
    look in `build-debug.xcconfig` or `build-release.xcconfig`
    respectively.
-   If buildType is not specified or set to `none`, the plugin will
    look in `build.xcconfig`.

By default, if an entry is found in the `.xcconfig` file which
corresponds to the custom preference name in the `config.xml`, the value
in the `.xcconfig` file will be overwritten with the value in the
`config.xml`. To prevent the plugin from overwriting the value of a
specific preference in the corresponding `.xcconfig` file, set the
preference attribute `xcconfigEnforce="false"`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-SOME_PREFERENCE" value="Some value" buildType="debug" xcconfigEnforce="false" />
{{</highlight>}}

If a preference value doesn't already exist in the corresponding
`.xcconfig` file, you can force its addition by setting the preference
attribute `xcconfigEnforce="true"`. This will append it to the
corresponding `.xcconfig` file. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-SOME_PREFERENCE" value="Some value" buildType="debug" xcconfigEnforce="true" />
{{</highlight>}}

A backup copy of any modified `.xcconfig` file will be made in
`plugins/cordova-custom-config/backup/ios`. By default, these backups
will be restored prior to the next prepare operation. Auto-restore of
the backups can be disabled by setting
`<preference name="cordova-custom-config-autorestore" value="false" />`
in the `config.xml`.

Preference names and values will not be quote-escaped in `.xcconfig`
files, so the `quote` attribute has no effect on them.

#### CODE\_SIGN\_IDENTITY preferences

Cordova places its default CODE\_SIGN\_IDENTITY for Release builds in
build-release.xcconfig but for Debug builds in `build.xcconfig`.

If you set a CODE\_SIGN\_IDENTITY preference in the `config.xml` with
`buildType="release"`, the plugin will overwrite the defaults in
`build-release.xcconfig`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Release Profile (A1B2C3D4)" buildType="release" />
{{</highlight>}}

If you set a CODE\_SIGN\_IDENTITY preference in the `config.xml` with
`buildType="debug"`, the plugin will overwrite the defaults in
`build.xcconfig`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Debug Profile (A1B2C3D4)" buildType="debug" />
{{</highlight>}}

You can prevent the CODE\_SIGN\_IDENTITY preferences being overwritten
by setting `xcconfigEnforce="false"`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Release Profile (A1B2C3D4)" buildType="release" xcconfigEnforce="false" />
{{</highlight>}}

You can force the plugin to add a new entry for CODE\_SIGN\_IDENTITY
preference with `buildType="debug"` to `build-debug.xcconfig`, rather
than overwriting the defaults in `build.xcconfig` by setting
`xcconfigEnforce="true"`. This will still override the defaults in
`build.xcconfig`, because `build-debug.xcconfig` overrides
`build.xcconfig`. For example:

{{<highlight xml>}}
<preference name="ios-XCBuildConfiguration-CODE_SIGN_IDENTITY" value="iPhone Distribution: My Debug Profile (A1B2C3D4)" buildType="debug" xcconfigEnforce="true" />
{{</highlight>}}

### iOS Config Blocks

`<config-file>` elements are currently only used to set preferences in
the project `.plist` file
(`platforms/ios/{PROJECT_NAME}/{PROJECT_NAME}-Info.plist`). This element
has 3 attributes such as:

1.  `target`: should be set to `*-Info.plist`.
2.  `platform`: should be set to `ios`.
3.  `parent`: is used to determine which key name to use for the custom
    preference.

For example:

{{<highlight xml>}}
<config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
{{</highlight>}}

will result in `{PROJECT_NAME}-Info.plist` as:

{{<highlight xml>}}
<plist version="1.0">
    <dict>
        <key>NSLocationAlwaysUsageDescription</key>
    </dict>
</plist>
{{</highlight>}}

The value of the preference is set by the child elements of the
`<config-file>` element. These will appear directly below the preference
`<key>` in the `.plist` file.

For example:

{{<highlight xml>}}
<config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
    <string>
        This app requires constant access to your location in order to track your position, even when the screen is off.
    </string>
</config-file>
{{</highlight>}}

will appear in the `plist` file as:

{{<highlight xml>}}
<key>
    NSLocationAlwaysUsageDescription
</key>
<string>
    This app requires constant access to your location in order to track your position, even when the screen is off.
</string>
{{</highlight>}}

### iOS Example

Below is an example of a `config.xml` file for iOS configuration:

{{<highlight xml>}}
<platform name="ios">

    <!-- Set ENABLE_BITCODE to YES in XCode project file override NO value in /ios/cordova/build.xcconfig -->
    <preference name="ios-XCBuildConfiguration-ENABLE_BITCODE" value="YES" />

    <!-- Set deploy target SDKs for release and debug builds -->
    <preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="9.1" buildType="debug" quote="none" />
    <preference name="ios-XCBuildConfiguration-IPHONEOS_DEPLOYMENT_TARGET" value="7.0" buildType="release" />

    <!-- Custom code signing profiles (overriding those in /ios/cordova/*.xcconfig -->
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" xcconfigEnforce="true" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos*]" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos9.1]" value="iPhone Developer: Dave Alden (8VUQ6DYDLL)" buildType="debug" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" xcconfigEnforce="false" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos*]" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" />
    <preference name="ios-XCBuildConfiguration-CODE\_SIGN\_IDENTITY[sdk=iphoneos9.1]" value="iPhone Distribution: Working Edge Ltd (556F3DRHUD)" buildType="release" />

    <!-- Set orientation on iPhone -->
    <config-file platform="ios" target="*-Info.plist" parent="UISupportedInterfaceOrientations">
        <array>
            <string>UIInterfaceOrientationPortrait</string>
            <string>UIInterfaceOrientationPortraitUpsideDown</string>
        </array>
    </config-file>

    <!-- Set orientation on iPad -->
    <config-file platform="ios" target="*-Info.plist" parent="UISupportedInterfaceOrientations~ipad">
        <array>
            <string>UIInterfaceOrientationPortrait</string>
            <string>UIInterfaceOrientationPortraitUpsideDown</string>
        </array>
    </config-file>

    <!-- Set background location mode -->
    <config-file platform="ios" target="*-Info.plist" parent="UIBackgroundModes">
        <array>
            <string>location</string>
        </array>
    </config-file>

    <!-- Set message displayed when app requests constant location updates -->
    <config-file platform="ios" target="*-Info.plist" parent="NSLocationAlwaysUsageDescription">
        <string>This app requires constant access to your location in order to track your position, even when the screen is off.</string>
    </config-file>

    <!-- Set message displayed when app requests foreground location updates -->
    <config-file platform="ios" target="*-Info.plist" parent="NSLocationWhenInUseUsageDescription">
        <string>This app will now only track your location when the screen is on and the app is displayed.</string>
    </config-file>

    <!-- Allow arbitrary loading of resources over HTTP on iOS9 -->
    <config-file platform="ios" target="*-Info.plist" parent="NSAppTransportSecurity">
        <dict>
            <key>NSAllowsArbitraryLoads</key>
            <true/>
        </dict>
    </config-file>
</platform>
{{</highlight>}}

## Plugin Preferences

The plugin supports some preferences which are used to customise the
behaviour of the plugin. Each preference name is prefixed with
`cordova-custom-config` to avoid name clashes. For example:

{{<highlight xml>}}
<preference name="cordova-custom-config-autorestore" value="true" />
{{</highlight>}}

The following preferences are currently supported:

-   `cordova-custom-config-autorestore`: (set to `false` by default) if
    set to `true`, the plugin will restore a backup of platform
    configuration files taken at plugin installation time.
    
-   `cordova-custom-config-stoponerror`: (set to `false` by default) if
    set to `true` and an error occurs while updating config for a given
    platform during a `prepare` operation, the error will cause the
    `prepare` operation to fail. If false, the plugin will log the error
    but will proceed and attempt to update any other platforms, before
    allowing the prepare operation to continue.

See Also:

- [Core Cordova Plugins](../../cordova_6.5)
- [Monaca Power Plugins](../../power_plugins)
