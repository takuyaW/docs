---
title: "Part 4: Building Monaca App"
weight: 4
---

In this tutorial, we only cover the building of Monaca Apps for iOS and
Android:

1. [Building a Monaca App for iOS](#building_monaca_for_ios)
2. [Building a Monaca App for Android](#building_monaca_for_android)

For more information regarding the building of Monaca Apps for other
platforms, please refer to [Build](../../manual/build).

## <a name="building_monaca_for_ios"></a>Building a Monaca App for iOS

This section will cover an instruction of how to create a Debug Build
version of your app for iOS which will be installed on the development
device. For more information about other types of build, please refer to [Types of Build](../../manual/build/ios/build_ios/#types_of_build_ios).

*Prerequisite*:

-   You must enroll in [iOS Developer
    Program](https://developer.apple.com/programs/ios/).

*Requirement*

You are required to create the following items from iOS Provisioning
Portal after enrolling iOS Developer Program:

-  `App ID` (see [Register App ID](../../manual/build/ios/build_ios/#register_appid) and [Register Development Devices](../../manual/build/ios/build_ios/#register_dev_device))
-  `Developer Certificate` (see [Generate Certificates](../../manual/build/ios/build_ios/#create_cer))
-  `Development Provisioning Profile` (see [Create Provisioning Profiles](../../manual/build/ios/build_ios/#register_provisioning))

### Step 1: Configuring iOS App Settings

1.  From Monaca Cloud IDE menu, go to `Config` &rarr; `iOS App Settings...`.
2.  Fill in the necessary information of your app:

    - `Application Name`: a name representing your app publicly such as in the Market.
    - `App ID`: a unique ID representing your app. It is recommended to use reverse-domain style (for example, mobi.monaca.appname) for App ID. Only alphanumeric characters and periods (at least one period must be used) are allowed. Each segment separated by a period should begin with an alphabetic character.
    - `Version Number`: a number representing the version of your app which will be required when uploading (publishing process) your application via iTunes Connect later. It needs 3 numbers separated by dots (for example, 1.10.2). Each number should be in \[0-99\].
    - The remaining information is optional. You can configure icon, splash screen and other configurations in the page.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_1.png">}}

    {{<warning>}}
        The App ID in Monaca Build Settings must be the same as the App ID you have registered in iOS Provisioning Portal. This App ID (in Monaca Build Settings) cannot contain asterisk (*); otherwise, the build will fail.
    {{</warning>}}

3.  After finishing the configurations, click {{<guilabel name="Save">}}.

### Step 2: Configuring iOS Build Settings

1.  From Monaca Cloud IDE menu, go to `Config` &rarr; `iOS Build Settings...`.
2.  Click on {{<guilabel name="Generate Key and CSR">}} button.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_2.png">}}

3.  Fill in your Apple ID information (user name & email address) and country. Then, click on {{<guilabel name="Generate Key and CSR">}} button. You can also [import an existing Private Key](../../manual/build/ios/import_export/#import-into-monaca) if you have one.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_3.png" width="600">}}

4.  The following dialog box will appear if your authentication is successful. Click Download CSR button. Downloaded CSR file will be required to issue the certificates later in iOS Provisioning Portal.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_5.png" width="500">}}

{{<note>}}
    If you import an existing private key, you need to use the certificates which are issued based on that imported private key. However, if you create a new private key and CRS file, you will need to use the new CRS file to issue new certificates.
{{</note>}}

### Step 3: Building the App

1.  From the Monaca Cloud IDE menu, go to `Build` &rarr; `Build App for iOS`.
2.  Select the `Debug Build` option and the corresponding provisioning profile. Then, click {{<guilabel name="Start Build">}} button.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_6.png">}}

3.  It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is complete.

    {{<img src="/images/monaca_ide/tutorial/building_app/ios_7.png">}}

### Step 4: Installing the Built App

There are 3 ways to install the debug built app:

1. Download the built app and use iTunes to install the built app on your iOS device.
2. Install via QR code.
3. Install via cofigured [deployment services](../../manual/monaca_ci/supported_services).

## <a name="building_monaca_for_android"></a>Building a Monaca App for Android

This section will cover an instruction of how to create a Debug Build
version of your app for Android. For more information about other types
of build, please refer to [Types of Build](../../manual/build/build_android/#types_of_build_android).

### Step 1: Configuring Android App Settings

1.  From Monaca Cloud IDE menu, go to `Config` &rarr; `Android App Settings...`.
2.  Fill in the necessary information of your app:

    - `Application Name`: a name representing your app publicly such as in the Market.
    - `Package Name`: a unique ID representing your app. It is recommended to use reverse-domain style (for example, mobi.monaca.appname) for App ID. Only alphanumeric characters and periods (at least one period must be used) are allowed. Each segment separated by a period should begin with an alphabetic character.
    - `Version Number`: a number representing the version of your app. It needs `3` numbers separated by dots (for example, 1.10.2). Each number should be in `[0-99]`.
    - `Use Different Package Name for Debug Build`: if checked, the package name of the debug-built app and custom-built debugger are different. In other words, the package name of debug-built app will have `.debug` extension, and the one for project debugger will have `.debugger` extension. However, this option is disable by default because it made some plugins impossible to be debugged due to the fact that they are tied to exact package names (eg. in-app purchase).
    - The remaining information is optional. You can configure icon, splash screen and other configurations in the page.

        {{<img src="/images/monaca_ide/tutorial/building_app/android_1.png">}}

3.  After finishing the configurations, click {{<guilabel name="Save">}}.

### Step 2: Configuring Android KeyStore

Android KeyStore is used for storing the keys (Alias) needed to sign a
package. When a KeyStore is lost or it is overwritten by another
KeyStore, it is impossible to re-sign the signed package with the same
key. One KeyStore can contain multiple Alias, but only one Alias is used
for code-sign an application.

In order to configure Android KeyStore in Monaca, please do as follows:

1.  From Monaca Cloud IDE menu, go to `Config` &rarr; `Android KeyStore Settings...`.
2.  You will need to generate a new KeyStore if you haven't created
    one yet. The KeyStore can either be created or imported. In this
    tutorial, we assume that you need to create a new KeyStore.
    Therefore, click on {{<guilabel name="Clear and Generate New">}} button. Then, the
    following screen will appear:

    {{<img src="/images/monaca_ide/tutorial/building_app/android_2.png">}}

3.  Fill in the necessary information related to the KeyStore such as:

    - `Alias Name`: key information stored in the KeyStore which is used to sign an app package.
    - `Alias Password`: password for the Alias.
    - `KeyStore Password`: password for the new KeyStore.
    
    {{<img src="/images/monaca_ide/tutorial/building_app/android_3.png">}}

4.  Then, click on {{<guilabel name="Generate KeyStore and Alias">}} button.

### Step 3: Building the App

1.  From the Monaca Cloud IDE menu, go to `Build` &rarr; `Build App for Android`.
2.  Select `Debug Build` option and click on {{<guilabel name="Start Build">}} button.

    {{<img src="/images/monaca_ide/tutorial/building_app/android_4.png">}}

3.  It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed.

    {{<img src="/images/monaca_ide/tutorial/building_app/android_5.png">}}

### Step 4: Installing the Built App

There are 5 ways you can install the built app:

1.  [Network Install](/en/debugger/manual/installation/debugger_android/#network-android).
2.  Install via QR Barcode.
3.  download the built app directly to your computer and install it via USB cable.
4.  send the URL to download the built app to your registered email address.
5.  Install via cofigured [deployment services](../../manual/monaca_ci/supported_services).

See Also:

- [Starting a Project](starting_project/)
- [Running Monaca Debugger with Monaca Cloud IDE](testing_debugging/)
- [Setting up Monaca Backend](adding_backend/)
- [Publishing Monaca App](publishing_app/)
- [Sample Apps & Templates](/en/sampleapp/samples)