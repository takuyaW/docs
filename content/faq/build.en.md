---
title: Build
weight: 30
---

## Can I register the application made by Monaca to a marketplace (App Store/Google Play)?

Registration to a marketplace is evaluated according to the
application's purpose, development, etc. A submission for registration
to the marketplace has never been rejected because the app was built
using Monaca. In fact, many Monaca apps have been released. If the
rejection has occurred because of Monaca, please [contact us](https://monaca.io/service/index.html).

## In iOS applications developments for iPhone/iPad, is it necessary to register to the iOS Developer Program?

Yes, normally it is necessary to register to the iOS Developer Program
in order to develop iOS applications. Actually, in iOS app development,
it is not necessary to register the Mac environment to the iOS Developer
Program, but you need to register to the Program to install the
developed application on an actual machine and make it run.

## The developed application using Monaca does not function well on mobile device.

In this case, please run and check the application again after stopping
all applications running on the device.

## I can't successfully build iOS (iPhone/iPad) apps.

In iOS apps developing, you need to follow the instructions provided by
Apple. Register properly the information of the device and developer,
and then prepare the necessary files. For a step-by-step guide, please
refer to [Building an iOS App]({{< ref "build_ios.md" >}}).

## I was able to build build iOS (iPhone/iPad) apps before, but now I can't successfully build them anymore.

This may caused by the expiry of certificates, reissuing certificates
requirement, and other factors. Therefore, you need to recreate
provisioning profiles. Please recreate the required files like
certificates and provisioning profiles by using the same procedures as
before, and then use the new files. You may read about [Generate Certificates](/en/products_guide/monaca_ide/build/ios/build_ios/#create_cer) and [Create Provisioning Profiles](/en/products_guide/monaca_ide/build/ios/build_ios/#register_provisioning) for more details.

## I don't know about how to build iOS apps or the certificates-related procedures.


The procedures can be found in [Building an iOS App](/en/products_guide/monaca_ide/build/ios/build_ios).

## Can I build an application for only iPhone using Monaca?

You can build an application just for iPhone by setting the target
device family in iOS App Settings. By default, iPhone, iPod touch and
iPad is selected.

## How to upload the built app for App Store submission?

There are two ways to upload the built app to iTunes Connect for App
Store submission:

1.  using [Monaca Upload](/en/products_guide/monaca_ide/deploy/appstore/app_submission) (requires [a valid subscription plan](https://monaca.io/pricing.html))
2.  using Application Loader software (Mac OS X only)

## Are there any examples of applications developed with Monaca that went through Apple's review, and are actually available on the App Store?

For example, [Kobuta House](http://itunes.apple.com/us/app/kobutahausu/id553150583?mt=8) is a
sample app that we developed. It is a mini-game app that is available on
the App Store. For more samples, please check [our showcase link](http://monaca.mobi/showcase).

## Can I develop Windows Store apps?

It is possible to develop a Windows Store app as a debug build. But in
this case, you can't release that app to the Windows Store. (We will to
tackle this issue in the future.)

## I can't successfully register the iOS app to App Store/I can't pass the review.

There may be various reasons for this but most of them lie in the
certificates, provisioning profile, and App ID. Please double-check the
following points:

-   Are the established distribution certificate and provisioning
    profile currently valid on the Provisioning Portal?
-   Is the provisioing corresponded to the AppStore Distribution?
-   Are you using the latest version of the `Application Loader`?
-   In the case of uploading, are there any changes to the certificate
    and App ID from the previous version?

Using Monaca has never been the reason of a rejected review. If the
review result was `Incorrect API is used`, please notify our support
staff.

## Tell me how to import/export private keys and certificates that are using Xcode.

You can import private keys on your local Mac, and export Monaca's
private keys and certificates. For details, please refer to [Build Settings between Monaca and Xcode](/en/products_guide/monaca_ide/build/ios/import_export).

## The built application crashes right after starting up.

The following points are the possibilities which could make the
application crashes after starting up, please double-checked these
points and rebuild your application.

-   An inappropriate image may have been assigned to the splash screen.
-   There may be a description error in the `MonacaApp-Info.plist` in case
    of iOS or `AndroidManifest.xml` in case of Android.
-   Please check in particular if there is an error in the specified
    permission, especially whether the required permission settings have
    been made. For example: even though `components/loader.js` file is
    loaded, `ACCESS_NETWORK_STATE` cannot be accessed or in the case
    that application uses *location information* but
    `ACCESS_COARSE_LOCATION` is not permitted and so on.

## Can I use Japanese for the app name?

You can use Japanese. Please set Japanese for the app name from Build
Settings in Monaca Cloud IDE.

## What kind of character string should be used for iOS App ID?

You can set it with your own preference; however, we recommend that the
App ID should be your own domain name but written in reverse. Please see
[our blog article](http://blog.asial.co.jp/738) (Japanese) for details.

## During the iOS build, an internal server error (71).

This is an error that occurs when your App ID or application name
contains one-byte space. Please recheck them again.

## Application Loader raises following error when uploading iOS application.

If your app raised one of the following errors:

-   **"Application failed codesign verification"**
-   **"The signature was invalid"**
-   **"Contains disallowed entitlements"**
-   **"It was not signed with an iPhone Distribution Certificate"**.

Open Key Chain Access and delete certificates and private keys that have
the same name.

## Can I share my iOS certificates and private key?

Yes, it is possible to share iOS private key and certificates among
other users and environments. Please refer to [Build Settings between Monaca and Xcode](/en/products_guide/monaca_ide/build/ios/import_export).

## Can I share my Android keystore?

Yes, you can share your Android keystore. You can download your Android
keystore from Monaca Cloud IDE. Please always back up and keep the
keystore which is used to sign application(s) because when a keystore is
lost, it is impossible to use the same key to re-sign the signed
package.

How to create and export Android keystore are described in [Configure Android Keystore](/en/products_guide/monaca_ide/build/build_android/#step-2-configure-android-keystore).

## Things to keep in mind when you register applications to the App Store

You can submit Monaca Apps to the App Store and many Monaca Apps have
been accepted.

Apple judges applications based on whether their designing, operational
feeling, and quality meet Apple's standards or not. Apple will not
reject registration requests for an application just because it relies
heavily on WebView.

[PhoneGap advice on dealing with Apple application rejections](http://www.adobe.com/devnet/phonegap/articles/apple-application-rejections-and-phonegap-advice.html)
recommends the following points as the criterion to pass the screening
by Apple:

-   Providing of user experiences that are appropriate to applications
-   Blending into the ecosystem of the iOS
-   Differentiating from the mobile Web experience.

Please refer to the above link for more details on what to keep in mind
when developing applications that will pass the screening by Apple, so
please refer to it when registering to the AppStore.
{{<warning>}}
    If your application is targeting for iOS 6.0 or newer, and using Web SQL Database, the files created by the database are stored in the iCloud by default (when BackupWebStorage parameter is set to cloud). In such case, your app may be rejected if you did not declare the app to use iCloud when submitting for App Store. Accordingly, Web SQL Database files will not be stored in the iCloud backup storage when BackupWebStorage parameter is set to none. If you want to backup your data to iCloud, please set the parameter to cloud.
{{</warning>}}
For more detail, please refer `BackupWebStorage` in [iOS Configuration File](/en/reference/config/ios_configuration).
