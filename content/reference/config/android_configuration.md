---
title: Android Configuration
---

# Android Configuration

There are 2 ways to configure your Android apps:

1. [Configure via Monaca Cloud IDE](#android-config-ide)
2. [Configure via configuration files directly](#android-config-files)

## <a name="android-config-ide"></a> Configuration via Monaca Cloud IDE

### Android App Settings Page

The Android App Settings page allows to set several commonly used
parameter in Android app. Please follow the following instruction in
order to access the Android App Setting page in Monaca Cloud IDE:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="Android App Settings">}}.
2.  Android App Configuration page will appear as shown below. You can then start your configuration.

    {{<img src="/images/reference/config/android/3.png">}}

3.  After finishing the configuration, click {{<guilabel name="Save">}}.

### Configurable Parameters

In the Android App Settings page, you can configure the parameters such
as application information, icons, splash files, permissions and
additional features. The following are the list of parameters can be
configured via the page:

-   *Allowed URL*: \[Set to `*` by default\] Specify URL(s) which can be
    accessed from your app. If set to `*`, you can access all domains
    from your app.
-   *Keep Running*: \[Enable by default\] Enable this if you want
    Cordova to keep running in the background.
-   *Disallow Overscroll*: \[Enable by default\] Enable this if you want
    to disable the glow when a user scrolls beyond the edge of the
    webview.
-   *WebView Engine*: Specify the WebView engine between the default one
    and Crosswalk.
-   *Display Time*: Specify the duration of showing splashscreen.
-   *Screen Orientation*: Specify the screen orientation of the app.

## <a name="android-config-files"></a> Configuration via Configuration Files

All the configuration parameters of an Android app are stored in the files as follows:

- [config.xml](#config-xml-android)
- [AndroidManifest.xml](#manifest-xml)

{{<note>}}
  These configurations are critical to the Android app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.
{{</note>}}

### <a name="config-xml-android"></a> config.xml

The `config.xml` file is a settings file controlling various settings of
Cordova.

{{<figure src="/images/reference/config/android/2.png">}}

Below are available elements and preferences you may need to configure:

#### *&lt;widget&gt;* element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`version` | String | `1.0.0` | A version number which is visible to users
`android-versionCode` | String | (Automatically set) When `version` attribute is `"1.22.33"`, it will be 102233 (=1 \* 10000 + 22 \* 100 + 33). If the project uses Crosswalk, it will be `2xxxxxx` for ARM architecture and `7xxxxxx` for x86 architecture. | An internal version code. It is used only to determine whether one version is more recent than others. Higher number indicates a more recent version. This version number is not shown to users. |

*Example*

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1" android-versionCode="7">
  ...
</widget>
{{</highlight>}}

#### *&lt;content&gt; element*

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`src` | String | `indext.html` | The `<content>` element defines the app's starting page in the top-level web assets directory. You can change the starting page by changing the value of the `src` attribute to your preferred URL. |

*Example*

{{<highlight xml>}}
<widget id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### <a name="access-origin-android"></a> *&lt;access&gt; element*

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`origin` | String | `*` | It is used to declare access to specific network domains. If set to `*`, you can access all domains from your app. |

*Example*

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}


#### *&lt;preference&gt; element*

The `<preference>` tag sets various options as pairs of name/value
attributes. Each preference's name is case-insensitive. Many preferences
are unique to specific platforms, as listed at the top of this page. The
following sections detail preferences that apply to more than one
platform.

Preference Name | Type | Default Value | Description
----------|------|---------------|-------------------
`KeepRunning` | Boolean | `true` | Determines whether Cordova will keep running in the background or not. 
`DisallowOverscroll` | Boolean | `false` | Sets to true if you don’t want the interface to display any feedback when users scroll past the beginning or end of content. 
`Fullscreen` | Boolean | `false` | Allows you to hide the status bar at the top of the screen. 
`SplashScreenDelay` | Number | `3000` | Sets the default delay of how long the splashscreen appears in milliseconds. This should be the worst-case expected start time. 
`LogLevel` | String | `ERROR` | Sets the minimum log level through which log messages from your application will be filtered. There are 5 valid values such as: `ERROR`, `DEBUG`, `WARN`, `INFO` and `VERBOSE`.
`AndroidPersistentFileLocation`* | String | `Internal` | Sets where to store Android persistent files. There are 2 valid values. `Internal` will put persistent files under the user’s application internal storage directory. `Compatibility` will put persistent files under storage root.
`ScreenOrientation`** | String | `default` | (Cordova 5.2 or Higher) Sets screen orientation for devices. There are 3 valid values. `default` uses system default screen orientation. `landscape` sets screen orientation to landscape mode. `portrait` sets screen orientation to portrait mode.

*Example*

{{<highlight xml>}}
...
<preference name="KeepRunning" value="false" />
<preference name="DisallowOverscroll" value="true"/>
<preference name="Fullscreen" value="true" />
<preference name="SplashScreenDelay" value="10000" />
<preference name="loglevel" value="DEBUG" />
<preference name="AndroidPersistentFileLocation" value="Internal" />
<preference name="orientation" value="default"/>
...
{{</highlight>}}


<b>*</b>: If your application has previously been shipped to users, using an older (pre- 3.0.0) version of this plugin, and has stored files in the persistent filesystem, then you should set the preference to Compatibility if your <code>config.xml</code> does not specify a location for the persistent filesystem. Switching the value of `AndroidPersistentFileLocation` to <code>Internal</code> would mean that existing users who upgrade their application may be unable to access their previously-stored files, depending on their device.

<b>**</b>: There are two use ways to configure `ScreenOrientation` preference: 

1. Global Settings:
  
    {{<highlight xml>}}
    <widget>
      ....
      <preference name="orientation" value="default"/>
      ....
    </widget>{{</highlight>}}

2. Platform Specific Settings:
  
    {{<highlight xml>}}
    <widget>
      ...
      <platform name="android">
        <preference name="orientation" value="default"/>
      </platform>
      ...
    </widget>{{</highlight>}}

### <a name="manifest-xml"></a> AndroidManifest.xml

Basic behaviour of Android applications can be configured by editing
`AndroidManifest.xml` file. It is located under `android` folder inside
your monaca project as shown below:

{{<figure src="/images/reference/config/android/1.png">}}

{{<note>}}
  For Cordova 6.2 or higher, <code>AndroidManifest.xml</code> file is removed from Monaca framework. Therefore, in order to config Android application settings, use {{<link href="../../third_party_phonegap/custom_config" title="Cordova Custom Config Plugin">}}.
{{</note>}}

*AndroidManifest.xml (Main elements)*

{{<highlight xml>}}
<?xml version="1.0" encoding="utf-8"?>
<manifest>

  <uses-permission />
  <uses-sdk />
  <uses-feature />
  <supports-screens />

  <application>
    <activity>
        <intent-filter>
            <action />
            <category />
        </intent-filter>
    </activity>
  </application>

</manifest>
{{</highlight>}}

#### *&lt;manifest&gt;*

Is the root element of `AndroidManifest.xml` file. The child element of
`<manifest>` is `<application>` and it must contain `xlmns:android` and
`package` attributes.

Attribute | Type | Description
----------|------|----------------
`xmlns:android`	| String | An Android namespace attribute. This attribute must always have this value: `http://schemas.android.com/apk/res/android`.
`android:versionCode` |	String | An internal version number. It is used only to determine whether one version is more recent than others. Higher number indicates a more recent version. This version number is not shown to users.
`android:versionName` | String | A version number which is visible to users.
`package` | String | Package name

Example:

{{<highlight xml>}}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    android:versionCode="%%%VERSION_CODE%%%"
    android:versionName="%%%VERSION_NAME%%%" package="%%%PACKAGE_NAME%%%">
</manifest>
{{</highlight>}}

#### *&lt;uses-sdk&gt;*

Is API level settings of the application. This element is contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:minSdkVersion` | Number | Minimum API level required for the application to run. Android uses this value to determine whether the application can be installed in a device.
`android:targetSdkVersion` | Number | API level that the application targets.

Example:

{{<highlight xml>}}
<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="22" />
{{</highlight>}}

#### *&lt;uses-permission&gt;*

Is permission settings. The permission is granted When the application
is installed. This element is contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Name of the permissions to be granted for the Android system. The name of the permission can be defined as Camera, Network and etc.

*How to Define &lt;uses-permission&gt;*

`<components/loader.js>` needs `ACCESS_NETWORK_STATE` permission to run.
You may exclude this file from `<uses-permission>` if it's not necessary
for your application.

{{<highlight xml>}}
<uses-permission android:name="%%%PERMISSION_NAME%%%"></uses-permission>
{{</highlight>}}

Permission | PERMISSION_NAME | Description
-----------|-----------------|------------------
Access Coarse Location | `android.permission.ACCESS_COARSE_LOCATION` | Allows an app to access current location of a device.
Access Fine Location | `android.permission.ACCESS_FINE_LOCATION` | Allows an app to use location-based services of a device.
Access Network State | `android.permission.ACCESS_NETWORK_STATE` | Allows an app to access the Network state.
Access Location Extra Commands | `android.permission.ACCESS_LOCATION_EXTRA_COMMANDS` | Allows an app to access extra location provider commands.
Bluetooth | `android.permission.BLUETOOTH` | Allows an app to connect to paired bluetooth devices.
Bluetooth (Admin)| `android.permission.BLUETOOTH_ADMIN` | Allows an app to discover and pair bluetooth devices.
Camera | `android.permission.CAMERA` | Allows an app to use the Camera.
Flashlight | `android.permission.FLASHLIGHT` | Allows access to the flashlight.
Internet | `android.permission.INTERNET` | Allows an app to use Internet connection.
Modify Audio Setting | `android.permission.MODIFY_AUDIO_SETTINGS` | Allows an app to change global audio settings.	
Read Phone State | `android.permission.READ_PHONE_STATE` | Allows read-only access to the phone state.	
Receive SMS | `android.permission.RECEIVE_SMS` | Allows an app to intercept SMS messages.
Record Audio | `android.permission.RECORD_AUDIO` | Allows an app to record audio.
Read Contacts	| `android.permission.READ_CONTACTS` | Allows an app to read the contacts.
Vibrate | `android.permission.VIBRATE` | Allows an app to use the Vibrator.	
Write Contacts | `android.permission.WRITE_CONTACTS` | Allows an app the write access to the contacts.
Write External Storage | `android.permission.WRITE_EXTERNAL_STORAGE` | Allows an app the write access to External Storage.

Example: Permissions for Camera

{{<highlight xml>}}
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
{{</highlight>}}

#### *&lt;uses-feature&gt;*

Declares hardware or software features used by the application. For
instance. If the application requires Camera feature, the user whose
device has no camera cannot install the application. This element is
contained in `<manifest>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Feature name
`android:required` | Boolean | Specifies whether the application requires the feature set in `android:name`. If you set the value to `true`, you are indicating that the application cannot function without the feature. If you set it to `false`, it means that the application prefers to use the feature, but can still function without the feature.

Example: 

The code below specifies that the application needs Camera feature.

{{<highlight xml>}}
<uses-feature android:name="android.hardware.camera" android:required="true" />
{{</highlight>}}

#### *&lt;application&gt;*

Is an Application tag. This element is contained in `<manifest>`.

{{<highlight xml>}}
<application android:icon="@drawable/icon"
             android:label="%%%APPLICATION_NAME%%%"
             android:name="mobi.monaca.framework.MonacaApplication">
</application>
{{</highlight>}}

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Defines a name of the application. It is a fully qualified name of the class that you extend from Application class.
`android:icon` | String | An icon for the entire application as well as a default icon for each of the application's components
`android:label`| String | A label for the entire application
`android:theme` | String | An Application level theme
`android:screenOrientation` | String | Application level Orientation settings

#### *&lt;intent-filter&gt;*

Defines the process of intent filter. This element is contained in
`<activity>`. The child `<action>` element must be defined.

{{<highlight xml>}}
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
{{</highlight>}}

#### *&lt;action&gt;*

Specifies an action for an intent filter. The element is contained in
`<intent-filter>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Action name

#### *&lt;category&gt;*

Specifies the category of the intent filter. The element is contained in
`<intent-filter>`.

Attribute | Type | Description
----------|------|----------------
`android:name` | String | Category name


