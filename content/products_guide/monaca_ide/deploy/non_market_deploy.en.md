---
title: Non-market App Distribution
weight: 40
aliases: /en/monaca_ide/manual/deploy/non_market_deploy
---

## For iOS Apps

There are two cases which you want to distribute your applications outside the App Store:

1. Testing Purpose: Before releasing your apps, you would want to test them as much as you can. Thus, you would want to distribute your apps to users (testers) by various ways besides the App Store.
2. In-house Applications: The applications are made for internal uses (in a company or organization) only.


{{<note>}}
    For in-house distribution, you will need to have an {{<link href="https://developer.apple.com/programs/enterprise/" title="Apple Developer Enterprise Program">}} account.
{{</note>}}

The differences between Apple Developer and Apple Developer Enterprise programs regarding apps distribution:

  | Apple Developer Program | Apple Developer Enterprise Program 
------|-----------------------|----------------------------------
Beta OS Releases | Yes | Yes
Ad Hoc Distribution | Yes | Yes
App Store Distribution | Yes | No
In-house Distribution | No | Yes
TestFlight Beta Testing | Yes | No
Team Management | No | Yes
App Analytics | Yes | No

For more information about the differences between the two programs, please refer to [Choosing a Membership](https://developer.apple.com/support/compare-memberships/).

There are two ways to distribute your pre-release apps for testing:

1. using iTunes Connect: it’s required iOS Developer Account and takes time since it needs approval from Apple Review prior to the distribution.
2. using Ad Hoc distribution: it can be done with either iOS Developer and iOS Developer Enterprise accounts. Plus, it doesn’t require the approval from Apple Review.

In-house distribution is to securely distribute your iOS apps to your employees. In other words, you can distribute your app to any company devices. However, if you want someone outside of your company to test your app or restrict distribution to specific devices, you can use Ad Hoc distribution.

Ad Hoc distribution is to distribute your apps using Ad Hoc provisioning profile to registered devices up to `100`.

Both types of distribution have the same ways for app installation. The difference is the provisioning profile.

There are several ways you can install your applications outside the App Store as shown in the following sections.

### Install using Apple Configurator 2 (Mac Only)

1. Install `Apple Configurator 2` on your Mac from the App Store.
2. Connect your device to your PC.
3. Open `Apple Configurator 2`, select your device. If you device doesn’t appear here, please make sure that your device is successfully connected to your Mac.
    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/5.png">}}
4. Click on {{<guilabel name="Add">}} button and select `App` option.

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/6.png">}}

5. Select {{<guilabel name="Choose from my Mac">}} button and browse the `.ipa` file. Then, the app will be installed on your device.

### Install using Xcode

You can install your iOS app (`.ipa` file) via Xcode as follows:

1. Connect your device to your PC.
2. Open Xcode, go to {{<menu menu1="Window" menu2="Devices">}}.
3. Then, the Devices screen will appear. Choose the device you want to install the app on.
4. Drag and drop your `.ipa` file into the Installed Apps as shown below:
    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/1.png">}}

### Install using iTunes

{{<note>}}
    iTunes 12.7 for Mac was released on Tuesday with a major change in the app. Apple has redesign iTunes so that it focuses on sales of music, movies, TV shows, audiobooks, and podcasts. It no longer has an App Store for buying apps for your iPhone or iPad. Therefore, you can no long install your iOS App (.ipa file) through iTunes any longer.
{{</note>}}

1.  Build your application with with debug or ad-hoc build. For more
    details about iOS build process, please refer to [Building an iOS App](../../build/ios/build_ios).
2.  Download the `.ipa` file after the build completes.
3.  Open iTunes, go to `App library`.
4.  Drag and drop the downloaded `.ipa` file into the `App library`.
5.  Connect your device to iTunes and go to your device apps.
6.  Click {{<guilabel name="Install">}} button of the app and click {{<guilabel name="Sync">}} button. See the example below:
    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/4.png">}}

### Install using OTA Deployment

OTA (Over-The-Air) Deployment enables you to install your built apps
(ad-hoc build) via HTTPS.

1.  Build your application with either debug or ad-hoc build. For more
    details about iOS build process, please refer to [Building an iOS App](../../build/ios/build_ios).
2.  Download the `.ipa` file after the build completes.
3.  Upload the `.ipa` file to the site you want.
4.  Create a `.plist` file for this built application. The `.plist` file should look like this:
    {{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>https://www.anysite.com/application/your_app.ipa</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>com.example.helloworld</string>
                <key>bundle-version</key>
                <string>1.0.0</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>HELLO</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>
    {{</highlight>}}

    {{<note>}}
        While creating <code>.plist</code> file, please pay attention to these points:
        <ul>
            <li><code>.plist</code> file must be accessed via https protocol.</li>
            <li>update bundle-identifier with the App ID.</li>
            <li>specify correct path to the <code>.ipa</code> file.</li>
        </ul>
    {{</note>}}

5.  Upload the `.plist` file to the site you want. Make sure this file
    must be accessed via HTTPS protocol.
6.  Create a webpage embedded the link to the uploaded `.plist` file
    using special `itms-services://` protocol. See blow example:

    {{<highlight html>}}
<a href="itms-services://?action=download-manifest&amp; 
    url=https://www.anysite.com/application/your_app.plist">
    Download
</a>
    {{</highlight>}}

7.  After you get the link, use your device to access the link. Then,
    you will be prompted to install the application. See below example:

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/2.png" width="300">}}

    {{<img src="/images/monaca_ide/manual/deploy/non_market_deploy/3.png" width="300">}}

## For Android Apps

There are two cases which you want to distribute your applications
outside the offical markets such as Google Play Store, Amazon AppStore
and so on:

1.  Testing Purpose: Before releasing your apps, you would want to test
    them as much as you can. Thus, you would want to distribute your
    apps to users (testers) by various ways besides the official
    markets.
2.  Personal/Internal Purpose: The applications are made for your own
    personal uses or just for internal uses.

### Install using ADB command

ADB (Android Debug Bridge) is a tool enabling you to use various
terminal commands to your phone.

Prerequisite:

-   install Android SDK on your computer
-   locate the ADB path after Android SDK installation
-   enable USB Debugging and allow installation of apps from sources
    other than the Play Store on your device.

In order to install your built app via ADB command:

1.  Build your application with debug build. For more details about
    Android build process, please refer to [Building for Android](../../build/build_android).
2.  Download the `.apk` file after the build completes.
3.  Plug your device via USB to your computer.
4.  Run below command on your computer in command window. Make sure to
    use the correct path to your `.apk` file.

    {{<highlight bash>}}adb install foo.apk{{</highlight>}}

### Install using Direct Link

This is simply an installation through direct link to your `.apk` file:

1.  Build your application with debug build. For more details about
    Android build process, please refer to [Building for Android](../../build/build_android).
2.  Download the `.apk` file after the build completes.
3.  Upload the downloaded file to any sites you want.
4.  Go the link of the uploaded file from your device. Then, you will be
    prompted to install the applicaiton.

{{<note>}}
    Please make sure make these settings on your device beforehand:
    <ul>
        <li>enable USB Debugging.</li>
        <li>allow installation of apps from sources other than the Play Store.</li>
    </ul>
{{</note>}}

See Also: 

- [Building for iOS](../../build/ios/build_ios)
- [Building for Android](../../build/build_android)
- [Google Play Distribution](../google_play)
- [App Store Distribution](../appstore)
