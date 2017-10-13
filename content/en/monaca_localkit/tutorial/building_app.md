---
title: Building Monaca App
---

# Part 3: Building Monaca App

In this page, we will cover the two following topics:

1.  [Building a Monaca App for iOS](#localkit-building-for-ios)
2.  [Building a Monaca App for Android](#localkit-building-for-android)

For more information on how to build Monaca Apps for other platforms,
please refer to [Build](/en/monaca_ide/manual/build).

## <a name="localkit-building-for-ios"></a> Building a Monaca App for iOS

In this section, we will talk about how to create a Debug Build of your
Monaca app for iOS which will be installed on a development device. For
more information about other types of build, please refer to [Types of Build](/en/monaca_ide/manual/build/ios/build_ios/#types_of_build_ios).

*Prerequisite*

1.  You must enroll in [Apple Developer
    Program](https://developer.apple.com/programs/).
2.  After enrolling in the program, you will be able to create the
    following items which are required to create a Debug build in
    Monaca:

-   `App ID` (see [How to Register App ID](/en/monaca_ide/manual/build/ios/build_ios/#register_appid))
-   `Development Certificate` (see [How to Generate Certificates](/en/monaca_ide/manual/build/ios/build_ios/#create_cer))
-   `Development Provisioning Profile` (see [How to Create Provisioning Profiles](/en/monaca_ide/manual/build/ios/build_ios/#register_provisioning))

### Step 1: Configuring iOS App Settings

1.  From Monaca Localkit, select a project you want to build and select {{<guilabel name="Settings">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_7.png">}}

2.  Under the `App Settings` on the left menu, select {{<guilabel name="iOS">}}.
3.  Fill in the necessary information of your app:

    -   `Application Name`: a name representing your app publicly such as in the Market.
    -   `App ID`: a unique ID representing your app. It is recommended to use reverse-domain style (for example, mobi.monaca.appname) for App ID. Only alphanumeric characters and periods (at least one period must be used) are allowed. Each segment separated by a period should begin with an alphabetic character.
    -   `Version Number`: a number representing the version of your app which will be required when uploading (publishing process) your application via iTune Connect later. It needs 3 numbers separated by dots (for example, 1.10.2). Each number should be in `[0-99]`.
    -   The remaining information is optional. In this page, you can also configure icon, splash screen and other configurations.

        {{<img src="/images/monaca_localkit/tutorial/building_app/ios_1.png">}}
    
    {{<warning>}}
        The App ID in Monaca Build Settings must be the same as the App ID you have registered in iOS Provisioning Portal. This App ID (in Monaca Build Settings) cannot contain an asterisk (<code>*</code>); otherwise, the build will fail.
    {{</warning>}}

4.  After finishing the configurations, click {{<guilabel name="Save">}}.

### Step 2: Configuring iOS Build Settings

1.  From Monaca Localkit, select a project you want to build and go to {{<guilabel name="Remote Build">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_8.png">}}

2.  Under the `Build & Build Settings` on the left menu, select {{<guilabel name="iOS">}}. Then,
    select {{<guilabel name="Manage build settings">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_9.png">}}

3.  Click on {{<guilabel name="Generate Key and CSR">}} button and fill in your Apple ID
    information (user name and email address) and country. Then, click {{<guilabel name="Generate Key and CSR">}} button. After that, you will be asked to download the CSR file. You can also
    [import an existing Private Key](/en/monaca_ide/manual/build/ios/import_export/#import-into-monaca) if you have one.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_11.png">}}

{{<note>}}
    If you import an existing private key, you need to use the certificates which are issued based on that imported private key. However, if you create a new private key and CRS file, you will need to use the new CRS file to issue new certificates.
{{</note>}}

### Step 3: Building the App

1.  From Monaca Localkit, select a project you want to build and go to {{<guilabel name="Remote Build">}}.
2.  Under the `Build & Build Settings` on the left menu, select {{<guilabel name="iOS">}}. Then,
    select the `Debug Build` option and the corresponding provisioning profile. Then, click {{<guilabel name="Start Build">}} button.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_12.png">}}

3.  It may take several minutes for the build to complete. Please wait.
    The following screen will appear after the build is complete.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_13.png">}}

### Step 4: Installing the Built App

There are 3 ways to install the debug built app:

1.  Download the built app and use iTunes to install the built app on your iOS device.
2.  Install via QR code.
3.  Install via [cofigured deployment services](/en/monaca_ide/manual/monaca_ci/supported_services).

## <a name="localkit-building-for-android"></a> Building a Monaca App for Android

In this section, we will talk about how to create a Debug Build of your
Monaca app for Android. For more information about other types of build,
please refer to [Types of Build](/en/monaca_ide/manual/build/build_android/#types_of_build_android).

### Step 1: Configuring Android App Settings

1.  From Monaca Localkit, select a project you want to build and go to {{<guilabel name="Settings">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_7.png">}}

2.  Under the `App Settings` on the left menu, select {{<guilabel name="Android">}}.
3.  Fill in the necessary information of your app:
    
    -   `Application Name`: a name representing your app publicly such as in the Market.
    -   `Package Name`: a unique ID representing your app. It is recommended to use reverse-domain style (for example, mobi.monaca.appname) for App ID. Only alphanumeric characters and periods (at least one period must be used) are allowed. Each segment separated by a period should begin with an alphabetic character.
    -   `Version Number`: a number representing the version of your app. It needs 3 numbers separated by dots (for example, 1.10.2). Each number should be in `[0-99]`.
    -   `Use Different Package Name for Debug Build`: if checked, the package name of the debug-built app and custom-built debugger are different. In other words, the package name of debug-built app will have `.debug` extension, and the one for project debugger will have `.debugger` extension. However, this option is disable by default because it made some plugins impossible to be debugged due to the fact that they are tied to exact package names (eg. in-app purchase).
    -   The remaining information is optional. In this page, you can also configure icon, splash screen and other configurations.

    {{<img src="/images/monaca_localkit/tutorial/building_app/android_1.png">}}    

4.  After finishing the configurations, click {{<guilabel name="Save">}}.

### Step 2: Configuring Android KeyStore

Android KeyStore is used for storing the keys (Alias) needed to sign a
package. When a KeyStore is lost or it is overwritten by another
KeyStore, it is impossible to re-sign the signed package with the same
key. One KeyStore can contain multiple aliases, but only one alias is
used for code-sign an application.

{{<note>}}
    Android KeyStore is required in order to create a Release build. However, it’s not necessary in order to create a Debug build.
{{</note>}}

In order to configure a new Android KeyStore in Monaca, please do as
follows:

1.  From Monaca Localkit, select a project you want to build and go to {{<guilabel name="Remote Build">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_8.png">}}

2.  Under the `Build & Build Settings` on the left menu, select {{<guilabel name="Android">}}.
    Then, choose `Build for Release` and select {{<guilabel name="Manage KeyStore and Alias">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/android_2.png">}}

3.  The KeyStore can either be created or imported. In this tutorial, we
    assume that you need to create a new KeyStore. Therefore, click on {{<guilabel name="Clear and Generate New">}} button. Then, the following screen will appear:

    {{<img src="/images/monaca_localkit/tutorial/building_app/android_3.png">}}

4.  Fill in the necessary information related to the KeyStore such as:

    -   `Alias`: key information stored in the KeyStore which is used to sign an app package.
    -   `Password`: password for the Alias.
    -   `KeyStore Password`: password for the new KeyStore.

5.  Then, click {{<guilabel name="Generate KeyStore and Alias">}} button.

### Step 3: Building the App

1.  From Monaca Localkit, select a project you want to build and go to {{<guilabel name="Remote Build">}}.

    {{<img src="/images/monaca_localkit/tutorial/building_app/ios_8.png">}}

2.  Under the `Build & Build Settings` on the left menu, select {{<guilabel name="Android">}}.
    Then, select the `Debug Build` option. Then, click {{<guilabel name="Start Build">}} button.

    {{<img src="/images/monaca_localkit/tutorial/building_app/android_4.png">}}

3.  It may take several minutes for the build to complete. Please wait.
    The following screen will appear after the build is successfully
    completed.

    {{<img src="/images/monaca_localkit/tutorial/building_app/android_5.png">}}

### Step 4: Installing the Built App

There are 5 ways you can install the built app:

1.  [Network Install](/en/debugger/manual/installation/debugger_android/#network-android)
2.  Install via QR Barcode.
3.  download the built app directly to your computer and install it via
    USB cable.
4.  send the URL to download the built app to your registered email
    address.
5.  Install via [cofigured deployment services](/en/monaca_ide/manual/monaca_ci/supported_services).

See Also:

- [Part 1: Starting a Project](../starting_project)
- [Part 2: Running Monaca Debugger with Monaca Localkit](../testing_debugging)
- [Part 4: Publishing Monaca App](../publishing_app)