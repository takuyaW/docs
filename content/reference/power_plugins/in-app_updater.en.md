---
title: Monaca In-App Updater
---

This plugin updates HTML5 assets contained in the app without rebuilding
and packaging the app. You need a Web server to host the update files
which will be accessed from the app.

{{<note>}}
In order to use this plugin, you are required to subscribe to a valid
plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

This plugin is used differently depending on the Cordova version of your
project:

- [For Cordova 6.2 Projects](#inapp-update-6-2)
- [For Cordova 5.2 or Lower Projects](#inapp-update-5-2-and-lower)

##  For Cordova 6.2 Projects

### Supported Platforms

-   iOS 8 or later
-   Android 4 or later

### Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="File" menu2="Manage Cordova Plugins">}}
    or {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `Monaca In-App Updater (Version 4.0.0)`
    to add it into your project.

    {{<img src="/images/reference/power_plugins/inapp_updater/8.png">}}

3.  Next, you need to configure necessary information for this plugin.
    Find your newly added plugin under the *Enable Plugins* section.
    Then, hover the plugin and click {{<guilabel name="Configure">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/9.png">}}

4.  Input the [CheckUpdate URL](#checkupdate-api) and [Download URL](#download-api) appropriately. Then, click {{<guilabel name="OK">}}button.

    {{<img src="/images/reference/power_plugins/inapp_updater/10.png" width="500">}}

###  Plugin Configuration

In this section, we will talk about how to create the two web API you
will need to use this plugin: [/checkUpdate](#checkupdate-api) and [/download](#download-api).

####  /checkUpdate

Check the update version on the server side.

*Request Parameters*

Parameter | Data Type | Description
----------|-----------|---------------------
`project_id` | String | Unique project ID
`my_update_number` | String | [optional] The current update number of the app
`os` | String | [optional] The type of OS to receive the update
`build_type` | String | [optional] The type of build
`app_version` | String | [optional] The version of the app
`plugin_version` | String | [optional] The version of the In-App-Updater plugin

*Response Parameters*

Here is an example of a successful response:

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

If you use static files, then the information of all update versions
will be included in the response as follows:

{{<highlight javascript>}}
{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/1/ios-v2.1.0.zip" //  This parameter is optional.
      },
      "2": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/2/ios-v2.1.0.zip" //  This parameter is optional.
      }
    },
    "2.2.0": {　// app version
      "1": { // update number
        "date": 20170210,
        "url": "https://hogehoge.com/app/1/ios-v2.2.0.zip" //  This parameter is optional.
      }
    }
  }
}
{{</highlight>}}

As shown in the above example, the value of the update number is an JSON
object consists of the update information such as `date`, `url` and so
on. It can be obtained by the `updateInfo` parameter of a JSON object
returned by the Promise of [getServerVersion()](#getserverversion) method.

####  /download

Download the zip file (update package file).

{{<note>}}
You can omit this preference if you set a download URL with {{<link title="download" href="#download_api">}}.
{{</note>}}

*Request Parameters*

Parameter| Data Type | Description
---------|-----------|-------------------
`update_number` | String | The update version number to be downloaded
`project_id` | String | Unique project ID
`my_update_number` | String | [optional] The current update number of the app
`os` | String | [optional] The type of OS to receive the update
`build_type` | String | [optional] The type of build
`app_version` | String | [optional] The version of the app
`plugin_version` | String | [optional] The version of the In-App-Updater plugin

*Response Parameters*

A successful response contains a ZIP file of InAppUpdater resource.

### Methods

The easiest way to use this plugin is to only use [autoUpdate()](#autoupdate) which will
download the update files (as configure in [Plugin Configuration](#updater-configuration)) and
update the app automatically.

On the other hand, if you want to customize the update process, you can
use various available methods such as [getServerVersion()](#getserverversion), [download()](#download_api),
[updateAndRestart()](#updateandrestart) and so on.

Here is the list of all available methods for this plugin:

Methods                    | Description
---------------------------|------------------------------------------------------------
[getServerVersion()](#getserverversion) | Get the information of files to be updated from the server.
[forceStopGetServerVersion()](#forcestopgetserverversion) | Force [getServerVersion()](#getserverversion) to stop.
[getLocalVersion()](#getlocalversion) | Get the currect version of the app.
[download()](#download_api) | Download the update files.
[forceStopDownload()](#forcestopdownload) | Force [download()](#download_api) to stop.
[updateAndRestart()](#updateandrestart) | Deploy and mount the downloaded update files, and then restart the app.
[status()](#status) | Get the current status of the plugin.
[showAlertDialog()](#showalertdialog) | Show a dialog with a title and a message. Only one dialog is shown at a time.
[dismissAlertDialog()](#dismissalertdialog) | Close the Alert dialog.
[showProgressDialog()](#showprogressdialog) | Show a Progress dialog indicating the update progress.
[changeProgressDialog()](#changeprogressdialog) | Change the Progress dialog.
[dismissProgressDialog()](#dismissprogressdialog) | Close a Progress dialog.
[networkStatus()](#networkstatus) | Check the network status (Wifi, 3G/LTE, or disconnected).
[terminateApp()](#terminateapp) | Terminate/Shut down the app.
[autoUpdate()](#autoupdate) | Update automatically if necessary, by using methods such as getServerVersion, download, etc.

####  getServerVersion()

Get the information of files to be updated from the server.

{{<syntax>}}
monaca.InAppUpdater.getServerVersion([args: JSON object]): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|------------------
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`connectTimeout` | Integer | (Android only) A time-out duration in milliseconds for connecting to the server
`readTimeout` | Integer  | (Android only) A time-out duration in milliseconds for receiving all responses from the server
`timeoutForRequest` | Integer | (iOS only) A time-out duration in milliseconds for sending a request to the server. When the time-out happens, the request will be resent automatically without any errors.
`timeoutForResponse` | Integer | (iOS only) A time-out duration in milliseconds for receiving all responses from the server

*Return Value: Promise*

- Success callback receives a JSON object as shown below:

    Name | Data Type | Description
    -----|-----------|------------------
    `needsUpdate` | Boolean | It indicates whether or not the version of the app should be updated.
    `updatable` | Boolean | It indicates whether or not there are new files for update on the server.
    `latestVersion` | String | The latest version of the app
    `myVersion` | String | The current version of the app
    `latestUpdateNumber` | String | The latest update number for the current version of the app
    `myUpdateNumber` | String | The current update number for the current version of the app
    `updateInfo` | JSON Object | The update information returned by the server after the update number. For example, if the server side response is as follows:<br/>{{<highlight javascript>}}{
  "ios": {
    "2.1.0": {　// app version
      "1": { // update number
        "date": 20170113,
        "url": "https://hogehoge.com/app/ios-v2.1.0.zip" // This parameter is optional.
      }
    }
  }
}{{</highlight>}}Then, the value of updateInfo will be:<br/>{{<highlight javascript>}}updateInfo = {
  "date": 20170113,
  "url": "https://hogehoge.com/app/ios-v2.1.0.zip"
}{{</highlight>}}

- Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.getServerVersion().then(
    function(json) {
        alert( JSON.stringify(json) );
        targetVersion = json.myVersion;
        targetUpdateNumber = json.latestUpdateNumber;
        url = json.updateInfo.url;
        alert( targetVersion );
        alert( targetUpdateNumber );
        alert( url );
    } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

####  forceStopGetServerVersion()

Force `getServerVersion()` to stop.

{{<syntax>}}
monaca.InAppUpdater.forceStopGetServerVersion(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopGetServerVersion().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

####  getLocalVersion()

Get the currect version of the app.

{{<syntax>}}
monaca.InAppUpdater.getLocalVersion(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.getLocalVersion().then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

####  download()

Download the update files.

{{<syntax>}}
monaca.InAppUpdater.download(args: JSON object): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|----------------------
`updateNumber` | Integer | The update number
`bufferSize` | Integer | (Android only) Buffer size in bytes. The default value is `8192`.
`url` | String | The URL where you download the ZIP file from. If this value is not existed, the value of `monaca:updater_DownloadUrl` in `config.xml` is used instead.
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`connectTimeout` | Integer | (Android only) A time-out duration in milliseconds for connecting to the server
`readTimeout` | Integer | (Android only) A time-out duration in milliseconds for receiving all responses from the server
`timeoutForRequest` | Integer | (iOS only) A time-out duration in milliseconds for sending a request to the server. When the time-out happens, the request will be resent automatically without any errors.
`timeoutForResponse` | Integer | (iOS only) A time-out duration in milliseconds for receiving all responses from the server

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).
-   Progress callback receives a JSON object indicating the progress of download as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `count` | Integer | The total size of the files that have been downloaded so far
    `total` | Integer | The total size of the all expected download files

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.download( { version : targetVersion, buildNumber : targetBuildNumber, url : url } ).then(
    function(json) { alert( JSON.stringify(json) ); } ,
    function(fail) { alert( JSON.stringify(fail) ); } ,
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

####  forceStopDownload()

Force `download()` to stop.

{{<syntax>}}
monaca.InAppUpdater.forceStopDownload(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.forceStopDownload().then(
    function(str) { alert("stop success"); } ,
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

####  updateAndRestart()

Deploy and mount the downloaded update files, and then restart the app.

{{<syntax>}}
monaca.InAppUpdater.updateAndRestart(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).
-   Progress callback receives a JSON object indicating the progress of the deployment as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `count` | Integer | The total size of the files that have been deployed so far
    `total` | Integer | The total size of the all update files to be deployed

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.updateAndRestart().then(
    function() { },
    function(fail) { alert( JSON.stringify(fail) ); },
    function(json) { console.log( json.count + "/" + json.total + " are done." ); }
);
{{</highlight>}}

####  status()

Get the current status of the plugin.

{{<syntax>}}
monaca.InAppUpdater.status(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `running` | Boolean | Returns `true` if the plugin is in use.
    `status` | String | The information on what kind of task the plugin is working on right now.

-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.status().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

#### showAlertDialog()

Show a dialog with a title and a message. Only one dialog is shown at a
time.

{{<syntax>}}
monaca.InAppUpdater.showAlertDialog(args: JSON object): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|----------------------
`title` | String | Title of the dialog
`message` | String | Message content
`button` | JSON Object | <ul>A button in the dialog consists of 2 elements such as:<li>`label`: [String] The label of the button</li><li>`handler`: A function to be called when the button is clicked.</li></ul>Example:{{<highlight javascript>}}{
    label : "OK",
    handler : function() { alert("OK is clicked"); }
}{{</highlight>}}
`cancel` | JSON Object | <ul>A cancel button in the dialog consists of 2 elements such as :<li>`label`: [String] The label of the cancel button</li><li>`handler`: A function to be called when the cancel button is clicked.</li></ul>Example:{{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.showAlertDialog({
    title : "Title" ,
    message : "Message" ,
    button : { label : "OK" , handler : function() { alert( "OK is clicked"); } },
    cancel : { label : "Cancel" , handler : function() { alert( "Cancel is clicked"); } },
    dismiss : function() { alert("Dismissed!"); }
} ).then(
    function(btnLabel) { alert( "open" ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

#### dismissAlertDialog()

Close the Alert dialog.

{{<syntax>}}
monaca.InAppUpdater.dismissAlertDialog(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissAlertDialog().then(
        function(json) { alert( "OK auto close" ); },
        function(fail) { alert( JSON.stringify(fail) ); }
    );
} , 1000 );
{{</highlight>}}

#### showProgressDialog()

Show a Progress dialog indicating the update progress.

{{<syntax>}}
monaca.InAppUpdater.showProgressDialog(args: JSON object): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|----------------------
`title` | String | Title of the dialog
`message` | String | Message content
`max` | Integer | The maximum value of a counter. When downloading files, it will be a total number of files.
`progress` | Integer | A value that indicates the progress. When downloading files, it will be a total number of files downloaded.
`cancel` | JSON Object | <ul>A cancel button in the dialog consists of 2 elements such as :<li>`label`: [String] The label of the cancel button</li><li>`handler`: A function to be called when the cancel button is clicked.</li></ul>Example:{{<highlight javascript>}}{
    label : "Close",
    handler : function() { alert("Close is clicked"); }
}{{</highlight>}}
`dismiss` | Callback | A function to be called when a dialog is closed.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.showProgressDialog(
    { title : "Title" ,
    message : "Message" ,
    max : 100 ,
    progress : 50 ,
    cancel : { label : "Cancel" , handler : function() { log("cancel handler"); } } ,
    dismiss : function() { log("dismissed."); }
    } ).then(
    function(json) {
    alert(JSON.stringify(json));
    },
    function(fail) {
    alert( JSON.stringify(fail));
    }
);
{{</highlight>}}

#### changeProgressDialog()

Change the Progress dialog.

{{<syntax>}}
monaca.InAppUpdater.changeProgressDialog(args: JSON object): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|----------------------
`progress` | Integer | A value of the progress to be changed/updated.

*Return Value: Promise*

-   Success callback has no argument.
-   There is no fail callback.

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.changeProgressDialog( { progress: progress } ).then(
    function() {
    if (progress < 100) {
        setTimeout( function() { changeProgressDialog(progress+10); } , 500 );
    } else {
        monaca.InAppUpdater.dismissProgressDialog().then(
        function(json) { log("complete"); } ,
        function(error) { alert( JSON.stringify(error) ); }
        );
    }
    }
)
{{</highlight>}}

#### dismissProgressDialog()

Close a Progress dialog.

{{<syntax>}}
monaca.InAppUpdater.dismissProgressDialog(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object indicating the result.
-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
setTimeout( function() {
    monaca.InAppUpdater.dismissProgressDialog().then(
    function(json) { alert(JSON.stringify(json)); } ,
    function(error) { alert( JSON.stringify(error) ); }
    );
} , 1000 );
{{</highlight>}}

#### networkStatus()

Check the network status (Wifi, 3G/LTE, or disconnected).

{{<syntax>}}
monaca.InAppUpdater.dismissAlertDialog(): Promise
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value: Promise*

-   Success callback receives a JSON object as shown below:

    Name | Data Type | Description
    -----|-----------|----------------------
    `network` | Boolean | Return `true` if carrier network (i.e. Docomo, KDDI, …) is available.
    `wifi` | Boolean | Return `true` if Wifi is available.
    `mobile` | Boolean | Return `true` if a network connection (Wifi or carrier network) is available. Otherwise, return `false when there is no connection available.`

-   Fail callback receives a JSON object indicating the error(s).

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.networkStatus().then(
    function(json) { alert( JSON.stringify(json) ); },
    function(fail) { alert( JSON.stringify(fail) ); }
);
{{</highlight>}}

#### terminateApp()

Terminate/Shut down the app.

{{<note>}}
This method is added for compatibility with the old `InAppUpdater` plugin ( v2.0.4 ) for Cordova 5.
{{</note>}}

{{<warning>}}
For iOS, this is equivalent to shutdown/crash so we do not recommend to use. Apple might reject your app because of this.
{{</warning>}}

{{<syntax>}}
monaca.InAppUpdater.terminateApp()
{{</syntax>}}

*Parameter*

There is no argument for this method.

*Return Value*

There is no return value.

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.terminateApp();
{{</highlight>}}

####  autoUpdate()

Download the update files and update the app automatically.

{{<syntax>}}
monaca.InAppUpdater.autoUpdate(options: JSON object): Promise
{{</syntax>}}

*Parameter: JSON Object*

Name | Data Type | Description
-----|-----------|----------------------
`connectDelay` | Integer | A delay time in milliseconds before starting to connect to the server
`dialogMessages` | JSON Object | <ul>A dialog to be displayed while updating the app. It has 3 variables such as:<li>`confirm3G`: [String] A text to be shown when the user is using carrier network instead of Wifi connection while downloading the update.</li><li>`prepare`: [JSON Object] An object with 2 string variables such as `title` and `message` which will displayed while preparing to download the updates.</li><li>`download`: [JSON Object] An object with 2 string variables such as `title` and `message` which will displayed while downloading the updates.</li></ul>Example:{{<highlight javascript>}}{
    confirm3G : 'These updates will be downloaded with your mobile data.',
    prepare : {
        title : 'Preparing to Dowload the Updates',
        message : 'Now checking the server version ...'},
    download : {
        title : 'Dowloading the Updates',
        message : 'Now downloading ...'}
}{{</highlight>}}
`nextTask` | Callback | A function to be called when the update is done successfully.
`failTask` | Callback | A function to be called when the update is failed.

*Return Value*

There is no return value.

*Example*

{{<highlight javascript>}}
monaca.InAppUpdater.autoUpdate( {
    connectDelay : 0000,
    connectTimeout : 30000,
    readTimeout: 300000,
    nextTask : function(res) {
    if (res.requireRestart) {
        monaca.InAppUpdater.updateAndRestart().then(
        function() { },
        function(fail) { alert( JSON.stringify(fail) ); }
        );
    } else {
        alert("App is started!");
    }
    },
    failTask : function(res) {
    monaca.InAppUpdater.showAlertDialog(
        { title : "Error Code "+res.error.code ,
        message : res.error.message ,
        button : { label : "OK" , handler : function() { } }
        } ).then(
        function(json) {  },
        function(fail) { }
    );
    }
});
{{</highlight>}}

##  For Cordova 5.2 or Lower Projects

### Supported Platforms

-   iOS 7 or later
-   Android 4.0 or later

### Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="File" menu2="Manage Cordova Plugins">}} or {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `Monaca In-App Updater (Version 2.x.x)` to add it into your project.

    {{<img src="/images/reference/power_plugins/inapp_updater/1.png">}}

3.  Next, you need to configure necessary information for this plugin.
    Find your newly added plugin under the *Enable Plugins* section.
    Then, hover the plugin and click {{<guilabel name="Configure">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/2.png">}}

4.  Choose an appropriate [Update Mode](#update-mode) and enter the [Deploy URL](#files-placement) storing the package update files (see [Plugin Configuration](#config-in-app-updater)). Then, click {{<guilabel name="OK">}} button.

    {{<img src="/images/reference/power_plugins/inapp_updater/3.png" width="500">}}

###  Plugin Configuration

#### Update Mode

When there are available updates, the application will try to update the
app according to the predefined update mode.

Mode | Description
-----|--------------
`Default` | The application can run even the update process cannot be done.
`Severe` | The application cannot run if the update process cannot be done. For instance, if the application has no network connectivity, the app will exit.

These settings are stored in `config.xml` file as shown below:

{{<highlight xml>}}
<preference name="monaca:UpdateMode" value="default"/>
<preference name="monaca:UpdateUrl" value="DEPLOY_URL"/>
{{</highlight>}}

### Creating Update Package Files

The update package files are:

-   `update.json`: an update configuration file storing version of update
    file for each platform
-   `android-vX.X.X.zip`: an Android update file generated by Monaca
-   `ios-vX.X.X.zip`: an iOS update file generated by Monaca

{{<note>}}
It's possible to just update the app for iOS or Android depending on the
update file(s) you have.
{{</note>}}

#### 1. Creating update.json File

As mention above, the `update.json` file is an update configuration file
to store the version information of the update files. Please create this
file with the following format as an example:

{{<highlight json>}}
{
  "ios": { "version": "2.0.0" },
  "android": { "version": "2.1.0" }
}
{{</highlight>}}

In this example, `"ios": { "version": "2.0.0" }` means that the
`ios-v2.0.0.zip` file will be used to download as an in-app update for
iOS.

#### 2. Creating Android or iOS Update File

Each update file has a version number in its filename. This version
number is based on the Android or iOS app's version number when the
update file is created.

You can update the version of the update file by the following steps:

1.  From Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="iOS App Settings">}} for iOS
    or go to {{<menu menu1="Config" menu2="Android App Settings">}} for Android.
2.  Enter the version number and click {{<guilabel name="Save">}} button.

{{<figure src="/images/reference/power_plugins/inapp_updater/6.png" title="Android">}}
{{<figure src="/images/reference/power_plugins/inapp_updater/7.png" title="iOS">}}

{{<note>}}
The Android and iOS version do not have be the same.
{{</note>}}

After you are done configuring the app's information, you can start
building the package file for each platform. Please do as follows:

1.  Go to *iOS* or *Android* Build screen.
2.  Select {{<menu menu1="Build for Release" menu2="Create a package for In-App Updater">}}.

    {{<img src="/images/reference/power_plugins/inapp_updater/4.png">}}

3.  Click {{<guilabel name="Start Build">}}. It may takes sometimes to create the package. So
    please wait.
4.  When the build is successfully completed, you can download the
    update package file.

    {{<img src="/images/reference/power_plugins/inapp_updater/5.png">}}

###  Placing the Update Package Files

After you have created the package files (`update.json`,`android-vX.X.X.zip` and/or `ios-vX.X.X.zip`), you can start uploading them to your server. Please make sure to place all files at the same level.
For example, if your Deploy URL is `http://example.com/HelloWorld/`,
then your update files should be placed as follows:

{{<highlight bash>}}
http://example.com/HelloWorld/update.json
http://example.com/HelloWorld/ios-v2.0.0.zip
http://example.com/HelloWorld/android-v2.1.0.zip
{{</highlight>}}

{{<note>}}
Using this plugin might cause your app to be rejected by the App Store.
However, so far we haven't had any known rejection yet.
{{</note>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)