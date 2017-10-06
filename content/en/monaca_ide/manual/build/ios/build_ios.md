---
title: Building an iOS App
---


# Building an iOS App

## Prerequisites

Before getting started, you are required to:

-   subscribe to [iOS Developer Program](https://developer.apple.com/programs/ios/).
-   understand `Types of Build` and their requirements.

### <a name="types_of_build_ios"></a>Types of Build

In Monaca, iOS app has three types of build: debug version, test version
and release version. The differences between these types of build are as
follows:

 <table class="small">
    <tr>
        <th width="17%">Types of Build</th>
        <th>Description</th>
        <th width="35%">Requirement</th>
        <th width="20%">Installation</th>
    </tr>
    <tr>
        <td><b>Debug Build</b></td>
        <td>Building the app for installing on development device(s)</td>
        <td>
            <ul>
                <li>Development Certificate</li>
                <li>Development Provisioning Profile</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>iTune</li>
                <li><a href="/en/debugger/manual/features/#debugger-project-options">Network Install</a></li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>Ad Hoc Build</b></td>
        <td>Building the app for installing on a limited group of devices</td>
        <td>
            <ul>
                <li>Production Certificate</li>
                <li>Distribution (Ad Hoc) Provisioning Profile</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>iTune</li>
                <li>QR Code</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>Release Build</b></td>
        <td>Building the app for distribution in App Store</td>
        <td>
            <ul>
                <li>Production Certificate</li>
                <li>Distribution (App Store) Provisioning Profile</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>App Store</li>
            </ul>
        </td>
    </tr>
</table>

{{<note>}}
    Ad Hoc distribution is a way to distribute your applications without going through the App Store. Currently, up to *100* applications which are built by using Ad Hoc provisioning profile can be shared with other iOS devices through Ad Hoc distribution. However, the application distribution from the developer organization will be limited to the development stakeholders.
{{</note>}}

## <a name="config-ios-app"></a> Step 1: Configure iOS App in Monaca

### <a name="configure-ios-app-settings"></a> Configure iOS App Settings

1.  From the Monaca Cloud IDE menu, go to `Config` &rarr; `iOS App Settings`.
2.  Fill in the necessary information of your app:

    <table class="small">
        <tr>
            <td width="18%">Application Name</td>
            <td>A name representing your app publicly such as in the Market</td>
        </tr>
        <tr>
            <td>App ID</td>
            <td>A unique ID representing your app. It is recommended to use reverse-domain style (for example, mobi.monaca.appname) for App ID. Only alphanumeric characters and periods (at least one period must be used) are allowed. Each segment separated by a period should begin with an alphabetic character.</td>
        </tr>
        <tr>
            <td>Version Number</td>
            <td>A number representing the version of your app which will be required when uploading (publishing process) your application via iTune Connect later. It needs 3 numbers separated by dots (for example, 1.10.2). Each number should be in <code>[0-99]</code>.</td>
        </tr>
    </table>

    {{<img src="/images/monaca_ide/manual/build/build_ios/1.png">}}

    {{<warning>}}
        The App ID (set in Monaca App Settings) cannot contain asterisk (<b>*</b>); otherwise, the build will fail. This App ID must be the same as the explicit App ID you will register (or have registered) in iOS Dev Center. Read more on {{<link href="#register_appid" title="Register App ID">}}.
    {{</warning>}}

3.  After finishing the configurations, click {{<guilabel name="Save">}}.

{{<note>}}
    Currently, when you update either iOS’s App ID or Android’s Package Name, both of them will change. In other words, they are configured to be the same. However, it is possible to make them different. Please refer to {{<link href="/en/faq/application/#faq05-019" title="How to make iOS’s App ID and Android’s Package Name differently">}}.
{{</note>}}


### <a name="configure-ios-build-settings"></a> Configure iOS Build Settings

1.  From the Monaca Cloud IDE menu, go to `Config` &rarr; `iOS Build Settings`.

    {{<img src="/images/monaca_ide/manual/build/build_ios/2.png">}}

2.  You need to create a new private key or import an existing one. To
    create a new private key, click on {{<guilabel name="Generate Key and CSR">}} button and
    fill in a username (a name representing this new private key), email
    address (Apple ID) and your country.

    {{<img src="/images/monaca_ide/manual/build/build_ios/3.png" width="500">}}

    {{<note>}}
        If you import an existing private key, you will also need to upload the certificate associated with this private key to Monaca. Please refer to {{<link href="../import_export/#import-into-monaca" title="Import Private Key and Certificate into Monaca">}}.
    {{</note>}}

3.  After creating a new private key, CRS file associated with the
    private key is also created. Download the CRS file by clicking on
    {{<guilabel name="Export">}} button. It will be used to issue the certificates later in
    iOS Dev Center.
4.  [Issue certificates in iOS Dev Center](#create_cer) and download them.
5.  [Create provisioning profiles in iOS Dev Center](#register_provisioning) and download them.
6.  Upload the certificates and corresponding provisioning profiles to
    Monaca Cloud.

    {{<img src="/images/monaca_ide/manual/build/build_ios/12.png">}}

{{<note>}}
    You can upload multiple certificates with multiple corresponding provisioning profiles with Monaca build interface.
{{</note>}}


## Step 2: Configure iOS App in iOS Dev Center

1.  From [Apple Developer page](https://developer.apple.com/), go to
    `Account`.
2.  Sign in using Apple ID and password you used to enroll in the Apple
    Developer Program. If you haven’t enrolled in this program yet,
    please subscribe at [here](https://developer.apple.com/programs/).
3.  Go to `Certificates, Identifiers & Profiles`. Then, the following page
    will appear.

    {{<img src="/images/monaca_ide/manual/build/build_ios/4.png">}}

4.  In this page, we are going to do 4 important things:

    - [Generate Certificates](#create_cer)
    - [Register App ID](#register_appid)
    - [Register Development Devices](#register_dev_device)
    - [Create Provisioning Profiles](#register_provisioning)

### <a name="create_cer"></a> Generate Certificates

There are two types of certificates which can be issued in iOS Dev
Center:

-   Development: required for Debug build
-   Production: required for either Ad Hoc or Release build

After downloading the CSR file (refer to [Configure iOS Build Settings](#configure-ios-build-settings)), you are
now able to issue and download the certificates in iOS Dev Center.

In the following example, we will show you how to issue and download a
Development certificate:

1.  Under `Certificates` section, go to `Development`.
2.  Click on {{<guilabel name="+">}} button in the upper-right corner (see the screenshot
    below).

    {{<img src="/images/monaca_ide/manual/build/build_ios/5.png">}}

3.  Choose `iOS App Development` and click {{<guilabel name="Continue">}}.

    {{<note>}}
        Choose <code>App Store and Ad Hoc</code> if you want to issue Production certificate.
    {{</note>}}

4.  Click {{<guilabel name="Continue">}} again and upload the CSR file that you've downloaded
    from Monaca Cloud IDE earlier. Then, click {{<guilabel name="Generate">}}.
5.  By now, your development certificate has been issued. Please
    download this certificate. You will need to upload it to Monaca
    Cloud IDE later.

{{<note>}}
    Follow similar instruction in order to create a Production certificate.
{{</note>}}

### <a name="register_appid"></a>Register App ID

App IDs are primarily used when creating development and distribution
provisioning profiles. You can create a wildcard App ID that matches one
or more apps or an explicit App ID that exactly matches your bundle ID.

In order to register your App ID, please follow the instruction below:

1.  Under `Identifiers` section, go to `App IDs`.
2.  Click on the {{<guilabel name="+">}} button in the upper-right corner (see the screenshot
    below).

    {{<img src="/images/monaca_ide/manual/build/build_ios/8.png">}}

3.  The App ID string contains two parts (Prefix and Suffix) separated
    by a period (`.`). Fill in the information of your App ID such as:

    - `App ID Description`: Description of your App ID. You cannot use special characters such as `@, &, *, ', "`.
    - `App ID Prefix`: It is defined as your Team ID by default.
    - `App ID Suffix`: It is defined as a Bundle ID search string. There are two types of App ID Suffixes:

        <table class="small">
            <tr>
                <td width="17%">Explicit App ID</td>
                <td>Register an explicit App ID if you plan to incorporate app services such as a Game Center, In-App Purchase, Data Protection, and iCloud, or just want a provisioning profile unique to a single app. Enter a unique string in the Bundle ID field of Explicit App ID which should match with the Bundle ID of your app. The App ID must match the one you set in Monaca Cloud IDE as shown in <a href="#config-ios-app">Configure iOS App Settings</a>.</td>
            </tr>
            <tr>
                <td>Wildcard App ID</td>
                <td>Register a wildcard App ID if you want to use a single App ID for building and installing multiple applications. Enter an asterisk (<code>*</code>) as the last digit in the Bundle ID field of wildcard App ID.</td>
            </tr>
        </table>

    - `App Services`: Select the services you want to enable in your app.

4.  Then, click {{<guilabel name="Continue">}}. After reviewing your App ID’s info, click
    {{<guilabel name="Submit">}}. By now, you have completed your App ID registration into iOS
    Dev Center.

### <a name="register_dev_device"></a> Register Development Devices

You are required to register your development device(s) before creating
development and distribution provisioning profiles.

In order to register a device that you will be using during your app
development, please follow the instruction below:

1.  Under `Devices` section, select a type of device(s) you want to register.
2.  Click on the {{<guilabel name="+">}} button in the upper-right corner (see the
    screenshot below).

    {{<img src="/images/monaca_ide/manual/build/build_ios/9.png">}}

3.  Fill in the information of your device.

    -   `Name`: a name represent your device (Example: MyiPhone)
    -   `UDID`: a unique device identifier of your device. You can find this identifier by connecting your iOS device to your computer. Then, open iTunes and see the summary of your device. After that, click on the device’s `Serial Number` to reveal the UDID which consists of `40` characters. Right-click on it to copy this UDID. (See below)

        {{<img src="/images/monaca_ide/manual/build/build_ios/6.png">}}

4.  Then, press {{<guilabel name="Continue">}}. After reviewing your device’s info, click
    {{<guilabel name="Register">}}. By now, you have completed your device registration into
    iOS Dev Center.

### <a name="register_provisioning"></a> Create Provisioning Profiles

One last step before building your iOS app is creating a provisioning
profile. There are two types of provisioning profile:

-   Development: used with Development certificate for Debug build
-   Distribution: used with Production certificate for Ad Hoc and
    Release build

In the following example, we will show you how to create a Development
provisioning profile:

1.  Under `Provisioning Profiles` section, go to `Development`.
2.  Click on the {{<guilabel name="+">}} button in the upper-right corner.
3.  Choose `iOS App Development` and click {{<guilabel name="Continue">}}.

    {{<note>}}
        <ul>
            <li>Choose <code>Ad Hoc</code> if you want to create Distribution provisioning profile for Ad Hoc build.</li>
            <li>Choose <code>App Store</code> if you want to create Distribution provisioning profile for Release build.</li>
        </ul>
    {{</note>}}

4.  Select your App ID and click {{<guilabel name="Continue">}}.
5.  Select the certificate(s) you want to include in this profile and
    click {{<guilabel name="Continue">}}.
6.  Select the device you have previously registered for development and
    click {{<guilabel name="Continue">}}.
7.  Input a name for the provisioning profile and click {{<guilabel name="Generate">}}.
8.  Now your Development provisioning profile is ready. Please download
    it. You will need this file when building your iOS app in Monaca
    later.

{{<note>}}
    Follow similar instruction in order to create a Distribution provisioning profile.
{{</note>}}

## Step 3: Start Building

1.  From the Monaca Cloud IDE menu, go to `Build` &rarr; `Build App for iOS`.
2.  Select appropriate type of build you want and click {{<guilabel name="Start Build">}}.

     {{<img src="/images/monaca_ide/manual/build/build_ios/7.png">}}

3.  It may take several minutes for the build to complete. Please wait.
    Once the build is completed, your built app is ready to be
    installed/downloaded. See below screenshot as an example:

     {{<img src="/images/monaca_ide/manual/build/build_ios/11.png">}}

See Also: 

- [Build Settings between Monaca and Xcode](../import_export)
- [Building for Windows](../build_winrt)
- [Google Play Distribution](../../deploy/google_play)
- [Build History](../build_history)
