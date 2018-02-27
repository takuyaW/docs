---
title: Google Play Distribution
weight: 20
aliases: /en/monaca_ide/manual/deploy/google_play
---

## Prerequisite

In order to distribute your apps through Google Play, you must register
as a *Google Play Developer Console* account. The registration fee is
`$25` (one-time only). It will take `48` hours for your *Google Play
Developer Console* registration to be fully processed. To register,
please go [here](https://play.google.com/apps/publish/).

{{<note>}}
    If you want to sell your apps, you will also need to register as a Google Checkout merchant as well. To register, please visit {{<link href="https://support.google.com/googleplay/android-developer/answer/answer.py?hl=en&answer=2972701" title="Link a Google Play Developer account to your payments profile">}}.
{{</note>}}

## Create a Release Build of the App

Using Monaca Cloud IDE build feature, you can build a release version of
your app and upload it to Google Play.

Follow the steps in [Building for Android](../../build/build_android) to build a release build of the app. Then, download the built app (APK file).

## Register the Apps in Google Play

1. Go to [Google Play Developer Console](https://play.google.com/apps/publish/) and login with a valid Google Developer account.

2. Click on {{<guilabel name="CREATE APPLICATION">}} button.

3. Choose a default language and enter a title for your app. Then, click {{<guilabel name="CREATE">}}. Then, you will be forwarded to `Store listing` page.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/2.png">}}

4. In this page, you will need to fill in the following necessary information and click {{<guilabel name="SAVE DRAFT">}}.

    Data | Description
    -----|------------------
    Short description | Description of your app shown in Google Play. It can be up to `80` characters.
    Full description | Description of your app shown in Google Play. It can be up to `4000` characters.
    Screenshots | At least 2 screenshots are required but you can upload up to 8 screenshots per type.
    Hi-res icon | You are required to upload a high-resolution icon (`512x512` PNG file) for your app.
    Feature Graphic | You are required to upload a feature graphic (`1024x500` PNG file) for your app.
    Application type | It can be `Applications` or `Games`. They are the major application types in Google Play.
    Category | Select a category for your app.
    Content rating | Select a content rating of your app as appropriate.
    Contact details | You must have at least one support channel for your app. The support channels can be website, email and phone. This information can be viewed by users from Google Play.
    Privacy Policy | Input your privacy policy URL if you have one. Otherwise, please tick `Not submitting a privacy policy URL at this time.`.

5. Go to `Content rating` section and click {{<guilabel name="CONTINUE">}}.

6. Fill in your email address and select your app category. Then, you will be asked to answer some questions related to the selected app category.

7. Click on {{<guilabel name="SAVE QUESTIONNAIRE">}} and {{<guilabel name="CALCULATE RATING">}}.

8. Confirm your rating information and click {{<guilabel name="APPLY RATING">}}.

9. Go to `Pricing & distribution` section. In this page, you will be asked to complete various questions related the price and availability of your app. Until this point, you are successfully complete the necessary information for your app to be ready for a release.

## Release the App

In this section, we will start uploading the APK file and finalize the release information of the app before submitting to the Play Store.

1. Go to `App releases` section. In this page, you can upload your APK files for testing (Beta and Alpha) and production. 

2. Under the `Production section`, click on {{<guilabel name="MANAGE PRODUCTION">}}. Then, click on {{<guilabel name="CREATE RELEASE">}}.

3. Then, you will need to:

    - complete the google Play App Signing option
    - upload the APK file
    - configure the Release name (release version)
    - write about what’s new about this release

4. Click {{<guilabel name="SAVE">}} and {{<guilabel name="REVIEW">}}.

5. Review your app’s release information one more time and click on {{<guilabel name="START ROLLOUT TO PRODUCTION">}} button to submit your app to the Play Store. Please note that you can’t submit your app if you don’t configure your app properly. In other words, the {{<guilabel name="START ROLLOUT TO PRODUCTION">}} button is disable unless the required information is completed properly.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/9.png" width="600">}}

See Also: 

- [Building for Android](../../build/build_android)
- [App Store Distribution](../appstore)
- [Non-market App Distribution](../non_market_deploy)
