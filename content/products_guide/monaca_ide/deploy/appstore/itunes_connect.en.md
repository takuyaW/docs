---
title: iTunes Connect Guide
weight: 10
aliases: /en/monaca_ide/manual/deploy/appstore/app_submission
---

This document describes how to use iTunes Connect to submit an app for
distribution through the App Store.

## Prerequisite

You are required to have a [Team Agent
account](https://developer.apple.com/support/roles/) under [iOS
Developer Program](https://developer.apple.com/).

##  Registering the App

In order to register your app in iTunes Connect, please do as follows:

1.  Login to [iTunes Connect](https://itunesconnect.apple.com/) with your Team Agent account.
2.  Go to `My Apps`.
3.  Select {{<menu menu1="+" menu2="New App">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/1.png">}}

4.  Enter the information about the app on the form that appears as seen
    below:

    | Data | Description |
    |-------------|-------------|
    | Platforms | Choose a platform for your app. |
    | Name | Enter your app’s name as it will appear on the App Store. It can’t be longer than 255 characters. |
    | Primary Language | Choose a default language for your app. |
    | Bundle ID | Select a Bundle ID which can be an explicit App ID or a wildcard App ID. If it’s a wildcard App ID, you also need to specify a bundle ID suffix. If it’s an explicit App ID, it must exactly match the bundle identifier in your app. |
    | Bundle ID Suffix | Once you select a Bundle ID, the input field for Bundle ID Suffix will be displayed. It’s a string that is appended to the bundle ID property if the bundle ID is a wildcard App ID. The bundle ID and bundle ID suffix must form a bundle identifier that exactly matches the bundle identifier in your app. |
    | SKU | Enter the code to identify the app. Although the code is up to your decision, it is necessary to create an ID that will identify the app in a unique way. |

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/2.png">}}

5.  Click {{<guilabel name="Create">}}. Then, you will be redirected to the App Information
    page.
6.  In the App Information page, choose a category for your app and click {{<guilabel name="Save">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/3.png">}}

7.  Go to `Pricing and Availability`. In this page, you will need to
    configure 3 main points such as price schedule, available areas for
    your app and volume purchase program. Then, click {{<guilabel name="Save">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/4.png">}}

8.  Go to `Prepare for Submission`. In this page, you will need to
    configure:

    -   App video preview and screenshots: at least one screenshot is required.
    -   Description
    -   Keywords
    -   Support URL
    -   App icon
    -   Copyright
    -   Contact information.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/9.png">}}

9.  After the configuration, click {{<guilabel name="Save">}}.

## Uploading the App

In the past, it was not necessary to have a Mac environment for
submission. However, since August 2012, a Mac environment has become
necessary as the Application Loader is needed to upload the apps to
iTunes Connect and it is only compatible with Mac.

Fortunately, Monaca allows you to upload your app to iTunes Connect
right from Monaca IDE. In other words, you don't need a Mac to upload
your apps anymore.

{{<note>}}
    For more information on how to use this upload feature, please refer to {{<link href="../../appstore/app_submission" title="Monaca Upload Feature">}}.
{{</note>}}

Alternatively, you can use the Application Loader as described below:

1.  Create and download a release build version of your app through
    Monaca. Please refer to [Building an iOS App](../../../build/ios/build_ios/).
2.  From iTunes Connect, download and install Application Uploader.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/10.png">}}

3.  Open Application Uploader and login with your Apple account.
4.  Select `Deliver Your App` and click {{<guilabel name="Choose">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/5.png" width="500">}}

5.  Browse the release build file of your app. Then, the following
    screen will apear. Click Next to start uploading your app.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/6.png" width="500">}}

6.  Once, the uploading is completed, click {{<guilabel name="Next">}} and {{<guilabel name="Done">}}. It may take sometimes until the app shows up in the iTunes Connect.

{{<note>}}
    If you upload multiple versions of the app, please make sure that each app file has different version number. Otherwise, the upload will fail.
{{</note>}}

##  Selecting the Uploaded App

Once you successfully uploaded your app to iTunes Connect, it can be
selected to submit to the App Store. Please do as follows:

1.  From iTunes Connect, go to `Prepare for Submission`. Under `Build` section, click {{<guilabel name="+">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/7.png">}}

2.  Select your build and click {{<guilabel name="Done">}}.

    {{<img src="/images/monaca_ide/manual/deploy/itunes_connect/8.png">}}

3.  Click {{<guilabel name="Save">}}.

## Submitting the App

Now that you have completed the necessary configurations, your app is
ready to be submitted.

1.  From iTune Connect, go to `Prepare for Submission`.
2.  Click {{<guilabel name="Submit for Review">}}.

After you've successfully submitted the app, you will need to wait for
the review from Apple. Apple will review your app and see if it is
eligible or qualified to be in App Store. Usually, it takes two weeks
for the review. Therefore, please wait patiently for it.

## Publishing the App

When your app is accepted by Apple, it will be up in the App Store.

{{<note>}}
    The large app icon, which was not necessary before, is now required for the submission. In fact, the required environment and information have changed in the submission procedure for the registration. If a registration/submission is not successful, please make sure you complete necessary configurations properly.
{{</note>}}

See Also: 

- [Monaca Upload Feature](../app_submission)
- [Building an iOS App](../../../build/ios/build_ios/#building-for-ios)
- [Google Play Distribution](../../google_play)
- [Non-market App Distribution](../../non_market_deploy)
- [Amazon Appstore Distribution](../../amazon_store)
