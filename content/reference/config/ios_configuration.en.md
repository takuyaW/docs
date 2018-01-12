---
title: iOS Configuration
weight: 20
---

There are 2 ways to configure your iOS apps:

1. [Configure via Monaca Cloud IDE](#configuration-via-monaca-cloud-ide)
2. [Configure via configuration files directly](#configuration-via-configuration-files)

##  Configuration via Monaca Cloud IDE

### iOS App Settings Page

The iOS App Settings page allows to set several commonly used parameter
in iOS app. Please follow the following instruction in order to access
the iOS App Setting page in Monaca Cloud IDE:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="iOS App Settings">}}.

    {{<img src="/images/reference/config/ios/ide_1.png">}}

2.  `iOS App Configuration` page will appear as shown below. You can
    then start your configuration.

    {{<img src="/images/reference/config/ios/ide_2.png">}}

3.  After finishing the configuration, please click {{<guilabel name="Save">}}.

### Configurable Parameters

In the iOS App Settings page, you can configure the parameters such as
application information, icons, splash files, permissions and additional
features. The following are the list of parameters can be configured via
the page:

-   `Allowed URL`: Specify URL(s) which can be accessed from your app.
    If set to `*`, you can access all domains from your app. (Set to `*`
    by default)

-   `Disallow Overscroll`: [Enable by default] Enable this if you want
    to disable the glow when a user scrolls beyond the edge of the
    webview.

-   `Enable Viewport Scale`: [Enable by default] If you disable this
    feature, the viewport meta tag which is set inside your app will be
    ignored.
-   `Fade Splash Screen`: [Enable by default]

-   `Show Splash Screen`: Show splash screen at start of the app.

##  Configuration via Configuration Files

All the configuration parameters of an iOS app are stored in the files
as follows:

- [MonacaApp-Info.plist](#monacaapp-info-plist)
- [config.xml](#config-xml)

{{<note>}}
  These configurations are critical to the iOS app to run. Wrong configuration can prevent the app from running properly, please edit the file carefully.
{{</note>}}

###  MonacaApp-Info.plist

You can configure your iOS app in MonacaApp-Info.plist file. For
information on `plist` file, please refer to [Information Property List Files (Apple)](http://developer.apple.com/library/ios/documentation/general/Reference/InfoPlistKeyReference/Articles/AboutInformationPropertyListFiles.html).
This file is located under `ios` folder inside your monaca project as shown below:

{{<figure src="/images/reference/config/ios/1.png">}}

{{<note>}}
  For Cordova 6.2 or higher, <code>MonacaApp-Info.plist</code> file is removed from Monaca framework. Therefore, in order to config iOS application settings, use {{<link href="/en/reference/third_party_phonegap/custom_config" title="Cordova Custom Config Plugin">}}.
{{</note>}}

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">

<plist>
  <dict>
    <key>key</key>
    <value-type>value</value-type>
      ...
    <key>key</key>
    <array>
      <value-type>value</value-type>
      <value-type>value</value-type>
    </array>
    ...
  </dict>
</plist>
{{</highlight>}}

Inside `MonacaApp-Info.plist` file, there are 3 main types of elements:

- `<key>`: Defines value (plistObject) and a combination of application configuration information.
- `<array>`: You can have the array of values (plistObject).
- `<dict>`: Key and combination of value (plistObject) are defined here.

For example:

{{<highlight xml>}}
<plist>
  <dict>
    ...
    <key>XXX</key>
      <string>The value(plistObject) corresponding to key(XXX)</sting>
      ...
    <key>YYY</key>
      <array>
        <string>The 1st value(plistObject) corresponding to key(YYY)</string>
        <string>The 2nd value(plistObject) corresponding to key(YYY)</string>
        <string>The 3rd value(plistObject) corresponding to key(YYY)</string>
        <string>The 4th value(plistObject) corresponding to key(YYY)</string>
      </array>
    ...
  </dict>
</plist>
{{</highlight>}}

#### Type List of Values (plistObject)

Types | Description
------|---------------
string  |  String data type representing text.
date   |   Date data type representing date and time.
Integer |  Integer number
real   |   Floating data type representing a decimal number.
data   |   Data type
true   |  true boolean
false  |   false boolean



#### List of Keys

Key |	Type	| Description
----|-------------------|--------------------
CFBundleDevelopmentRegion	| string | Defines a native language of the developer. If the language of the user cannot be found, this value will be used as default.
CFBundleDisplayName | string | Define a name of the application. It is a fully qualified name of the class that you extend from Application class.
CFBundleExecutable | string | Defines the application executable file.
CFBundleIconFile | string | Defines application icon file name.
CFBundleIconFiles |	\<array\>string | Defines icon file names used for iOS `3.2` or later. The correct file will be chosen depending on the size of the device screen resolution.
CFBundleIdentifier | string | Specifies a unique identifier for your application. The identifier must be a Uniform Type Identifier (UTI) as `com.monaca.MyApp`.
CFBundleInfoDictionaryVersion | string | Is the current version number of `MonacaApp-Info.plist` file.
CFBundleName | string | Is a short display name of the app. It is limited to `16` characters at most.
CFBundlePackageType	| string | Is a 4-digit code used to describe application type. Set this value to `APPL` for application project.
CFBundleShortVersionString | string | Specifies the version number of your application.
CFBundleSignature | string | Is a 4-digit code used to identify the app developer.
CFBundleVersion | string | Is a build version number of the application.
LSRequiresIPhoneOS | true | Indicates whether the application can only be run on iPhone or not.
UISupportedInterfaceOrientations | \<array\>string | Specifies screen orientations for iPhone that are supported by the application. For iPad, use `UISupportedInterfaceOrientations~ipad`.
BackupWebStorage | string | Set to cloud to allow the web storage data to be backed up to iCloud, Set to none to not allow any backups of web storage. default is cloud

Here are some keys and values you may need to configure in your iOS apps:

#### UISupportedInterfaceOrientations

Is used to set the screen orientation of your app:

- Settings for iPhone

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

- Settings for iPad

    {{<highlight xml>}}
...
  <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
...{{</highlight>}}

#### List of Orientation Values

Value | Description
------|---------------------------
UIInterfaceOrientationLandscapeLeft      |  Landscape orientation aligned to the left side of the Home button.
UIInterfaceOrientationLandscapeRight     |  Landscape orientation aligned to the right side of the Home button.
UIInterfaceOrientationPortraitUpsideDown |  Portrait orientation
UIInterfaceOrientationPortrait           |  Portrait orientation in opposite direction from the normal portrait orientation.

You can download a sample screen orientation file below:

{{<download href="/download/UISupportedInterfaceOrientations.zip" title="Screen Orientation File">}}

#### Statusbar Setting

Value | Type | Default | Description
------|------|---------|--------------------
UIStatusBarHidden | Boolean | `false` | If set to `true`, the status bar at the top of the application will be hidden. If *UIStatusBarHidden* set to `true` and *UIViewControllerBasedStatusBarAppearance* set to `false`, the status bar at the top of the app will be hidden.
UIViewControllerBasedStatusBarAppearance | Boolean | `false` | If set to `true`, the status bar at the top of the application will be hidden. Set to `true` in order to use [StatusBar Plugin](/en/reference/cordova_6.5/statusbar). 

###  config.xml

The `config.xml` file is a settings file controlling various settings of Cordova.

{{<figure src="/images/reference/config/android/2.png">}}

Below are available elements and preferences you may need to configure:

#### &lt;widget&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`version` | String | `1.0.0` | A version number which is visible to users

**Example**

{{<highlight xml>}}
<widget id="com.example.helloworld" version="0.0.1">
  ...
</widget>
{{</highlight>}}

#### &lt;content&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`src` | String | `indext.html` | The `<content>` element defines the app's starting page in the top-level web assets directory. You can change the starting page by changing the value of the `src` attribute to your preferred URL. |

**Example**

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets" id="com.example.helloworld" version="1.0.0">
  ...
  <content src="https://monaca.io/" />
</widget>
{{</highlight>}}

#### &lt;access&gt; element

Attribute | Type | Default Value | Description
----------|------|---------------|-------------------
`origin` | String | `*` | Controls access to specific network domains. If set to `*`, you can access all domains from your app. 

**Example**

{{<highlight xml>}}
...
<access origin="*" />
...
{{</highlight>}}

#### &lt;preference&gt; element 

The `<preference>` tag sets various options as pairs of name/value
attributes. Each preference's name is case-insensitive. Many preferences
are unique to specific platforms, as listed at the top of this page. The
following sections detail preferences that apply to more than one
platform.

Preference Name | Type | Default Value | Description
----------|------|---------------|-------------------
`DisallowOverScroll` | Boolean | `false` | Set to `true` if you want to disable the rubber-band scrolling for WebView.
`EnableViewportScale` | Boolean | `false` | Set to `true` to prevent viewport scaling through a `<meta>` tag.
`AutoHideSplashScreen` | Boolean | `true` | Set to `false` to control the splashscreen when it’s hidden through a JavaScript API.
`BackupWebStorage` | String | `cloud` | There are 3 valid values: <ul><li>`none`: disables any backups of web storage.</li><li>`cloud`: allows the web storage data to be backed up to iCloud.<li>`local`: allows only local backups (iTunes sync).</li></ul>
`UIWebViewDecelerationSpeed` | String | `normal` | Controls the deceleration speed of momentum scrolling. There are 2 valid values: <ul><li>`normal`: is the default speed for most native apps</li><li>`fast`: is the default speed for Mobile Safari.</li></ul>
`Orientation`* | String | `default` | (Cordova 5.2 or Higher) There are 4 valid values: <ul><li>`all`: to specify both portrait & landscape mode you would use the platform specific value all</li><li>`default`: screen orientation will be applied according to system default.</li><li>`landscape`: set screen orientation to landscape mode.</li><li>`portrait`: set screen orientation to portrait mode.</li></ul>

**Example**

{{<highlight xml>}}
...
<preference name="DisallowOverscroll" value="false" />
<preference name="EnableViewportScale" value="false" />
<preference name="AutoHideSplashScreen" value="true" />
<preference name="BackupWebStorage" value="cloud" />
<preference name="UIWebViewDecelerationSpeed" value="normal" />
<preference name="Orientation" value="portrait" />
...
{{</highlight>}}

<b>*</b>: There are two use ways to configure `Orientation` preference: 

1. Global Settings: 
  
    {{<highlight xml>}}
<widget>
  ....
  <preference name="orientation" value="default"/>
  ....
</widget>{{</highlight>}}

    {{<note>}}
      It is also possible to apply the setting for all devices at once; however, you can only use <code>default</code>, <code>landscape</code> and <code>portrait</code> value. <code>all</code> is not possible for Global Settings.
    {{</note>}}

2. Platform Specific Settings:
  
    {{<highlight xml>}}
<widget>
  ...
  <platform name="ios">
    <preference name="orientation" value="default"/>
  </platform>
  ...
</widget>{{</highlight>}}

{{<note>}}
  For Android/Windows, <code>default</code> means all directions, but in iOS only portrait will be applied.
{{</note>}}