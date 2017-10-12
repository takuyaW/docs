---
title: Google Play Distribution
---

# Google Play Distribution

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

1.  Go to [Google Play Developer
    Console](https://play.google.com/apps/publish/) and login with a
    valid Google Developer account.
2.  Select {{<guilabel name="Add new application">}}.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/1.png">}}

3.  Choose a default language and enter a title for your app. Then,
    click {{<guilabel name="Upload APK">}}.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/2.png">}}

4.  In this page, you can upload your APK files for testing (beta and
    alpha) and production. Under `PRODUCTION` tab, select {{<guilabel name="Upload your first APK to Production">}}.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/3.png">}}

5.  Browse your APK file and upload it. A single APK file can be up to
    `100MB`.

    {{<note>}}
        For more details on how to upload multiple APKs, please go to {{<link href="https://developer.android.com/google/play/publishing/multiple-apks.html" title="multiple apk upload ">}}.
    {{</note>}}

    {{<warning>}}
        Package names for app files are unique and permanent. They can’t be deleted or re-used in the future. Therefore, you must be wise in choosing package names. Moreover, if you lost your keystore, you’ll have to publish the app with a new package name and a new key. Then, update the description of the original app and unpublish it.
    {{</warning>}}

6.  Once, the uploading is successfully completed, the page should look
    similar to the screenshot below:

    {{<img src="/images/monaca_ide/manual/deploy/google_play/4.png">}}

7.  Go to `Store Listing` section. In this page, you will need to fill in some necessary information such as:

    | Information | Description |
    |-------------|-------------|
    | Title |	Name of your app |
    | Short description | Description of your app shown in Google Play. It can be up to `80` characters. |
    | Full description | Description of your app shown in Google Play. It can be up to `4000` characters. |
    | Screenshots | At least `2` screenshots are required but you can upload up to `8` screenshots per type. |
    | Hi-res icon | You are required to upload a high-resolution icon (`512x512` PNG file) for your app. |
    | Feature Graphic | You are required to upload a feature graphic (`1024x500` PNG file) for your app. |
    | Application type | It can be `Applications` or `Games`. They are the major application types in Google Play. |
    | Category | Select a category for your app. | 
    | Content rating | Select a content rating of your app as appropriate. |
    | Contact details | You must have at least one support channel for your app. The support channels can be website, email and phone. This information can be viewed by users from Google Play. |
    | Privacy Policy | Input your privacy policy URL if you have one. Otherwise, please tick `Not submitting a privacy policy URL at this time.`. |

    {{<img src="/images/monaca_ide/manual/deploy/google_play/5.png">}}

8.  After completing the configuration, click {{<guilabel name="Save draft">}}.

9.  Go to `Content Rating` section. In this page, you will be asked to
    complete a questionnaire regarding content rating for your app.
    Click {{<guilabel name="Continue">}} to start the questionaire.

    {{<img src="/images/monaca_ide/manual/deploy/google_play/6.png">}}

10. Fill in your email address and choose a category for your app. Then,
    fill in the answer for the questionaire and click {{<guilabel name="Save questionaire">}}.

11. Click {{<guilabel name="Calculate rating">}}. Then, click {{<guilabel name="Apply rating">}}. Now, the page should look similar to this:

    {{<img src="/images/monaca_ide/manual/deploy/google_play/7.png">}}

12. Go to `Pricing & Distribution` section. In this page, you are required to complete the following information:

    | Information | Description |
    |-------------|-------------|
    | Default price | The default price applies to all countries without local prices. |
    | Distributing Countries | Select the countries you will distribute your app to. |
    | Content guidelines | Check if your app meets Android Content Guidelines. |
    | US export laws | Check if your app follows US export laws. |

    {{<img src="/images/monaca_ide/manual/deploy/google_play/8.png">}}

13. After completing the configuration, click {{<guilabel name="Save draft">}}. At this point,
    your app should be ready to be published.

## Release the App

You can't publish your app unless you properly fill in necessary
information related to your app. Once, you successfully complete the
required information, click on {{<guilabel name="Publish app">}} to release your app. This
button is disable if the required information is not completed properly.

{{<figure src="/images/monaca_ide/manual/deploy/google_play/9.png">}}

See Also: 

- [Building for Android](../../build/build_android)
- [App Store Distribution](../appstore)
- [Non-market App Distribution](../non_market_deploy)