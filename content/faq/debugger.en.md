---
title: Debugger
weight: 70
---

## What is the Monaca Debugger?

Monaca Debugger is an application for debugging that can check the
functionality of the app on an actual device without building. When
using Monaca Debugger, any changes made to the code immediately reflect
to the actual running device. No build and run process are required.
This would help to speed up the development and testing process. For
more details, please refer to [Monaca Debugger](/en/products_guide/debugger).

## Are the operations of an app on the Monaca Debugger the same as when the app is installed on an actual device?

The app operations on Monaca Debugger may differ from the ones on the
actual device. After building and installing the app, it is necessary to
check its icon, installation and operations without Monaca Debugger.
Moreover, the app works more slowly on Monaca Debugger than the built
apps because of the connection to the Monaca Cloud IDE.

## Before building, can I check application operations during development?

Monaca provides utiliy to check the display and operations of
application which is [Live Preview](/en/products_guide/monaca_ide/overview/#preview_team_panel) feature on the
Monaca Cloud IDE. In addition, you can check application operations on
the device prior to building by using Monaca Debugger. Both are very
useful tools for improving development efficiency, so please make the
most use of them.

## The debug log is not displayed.

For some devices, such as devices from HTC, there are confirmed cases of
which the debug log cannot be displayed. If possible, please inform us
of any information about devices that have such problem via [Monaca Support](https://monaca.io/service/index.html), we will look into it and provide
the solution as soon as possible.

## Why are there two types (App Store version and Build version) of iOS version for Monaca Debugger?

Due to the reviewing process of Apple App Store, the availability of the
latest version of Monaca Debugger in App Store may take sometimes.
Therefore, to provide the lastes version of iOS-based Monaca Debugger as
soon as possible to our customers, we have prepared other option which
is the build version of Monaca debugger.

## When I started the app on Android, the app crashed.

There may have problems of configuration in `AndroidManifest.xml` file. If you use PhoneGap, please make sure to have this setting: 

{{<highlight xml>}}
    <uses-permission android:name=”android.permission.ACCESS_NETWORK_STATE”></uses-permission>
{{</highlight>}}

For details, please refer to [Android Configuration](/en/reference/config/android_configuration).

## Monaca Debugger is not working.

Please try to reinstall Monaca Debugger. If it is still not working,
please [contact us](https://monaca.io/service/index.html).

## I cannot use CSS and JavaScript files in Live Preview.

While reading external JavaScript or CSS codes, there is a possibility
that they are not readable for some reasons such as requirement for an
authentication.

## Cannot Login to Monaca Debugger.

The following issues are the common issues and solutions when logging in
Monaca Debugger:

-   If your password consists of non-alphanumeric character(s). Please
    change your password to alphanumeric character only.
-   Please check your Internet connection.
-   The email address was auto-completed. Please manually input the
    email address and password.

## JavaScript error when loading Angular.js or other external library.

In some cases, Monaca Debugger may assume the exceptions occurs
internally by the external JavaScript library as errors. As long as the
errors do not stop the functionality of your app, it should be fine to
ignore them. Please note that in the built version, these errors should
not be occurred when running on actual device.

## What is the difference between Monaca Debugger and its custom build version?

Here are some important differences:

1.  Where you download the debugger: Monaca Debugger can be downloaded
    from application markets. Custom build debugger can be installed
    from Monaca IDE.
2.  Plugins included in the debugger: Monaca Debugger contains all core
    Cordova plugins. Custom build debugger will contain the plugins user
    submitted from Cordova Plugins configuration page.
3.  USB debugging support (iOS Only): For iOS devices, USB debugging can
    be only enabled when the app is debug built. Therefore, you cannot
    do USB debugging on Monaca Debugger downloaded from App Store. For
    more details, please see [Monaca Debugger for iOS](/en/products_guide/debugger/installation/debugger_ios).

## How can I debug my application?

We are providing 3 different ways to debug your application.

1.  Debug using preview panel
2.  Debug using Monaca Debugger with Monaca IDE (Weinre)
3.  Debug using Monaca Debugger with USB debugging

For more details, please refer to [Debugger's Usage](/en/products_guide/debugger/debug).

## What is a network install?

Network installation is a way to install your debug or ad-hoc built app
to your devices from Monaca Debugger. For more details, please refer to [Network Install for Android](/en/products_guide/debugger/installation/debugger_android/#network-and) or [Network Install for iOS](/en/products_guide/debugger/installation/debugger_ios/#network-ios).

## Changes are not updated in a project on Monaca debugger.

When you make changes to your project but those changes are not updated
in the project on Monaca Debugger, please try the following steps:

-   Make sure that you are using the latest version of Monaca Debugger.
-   Reset Monaca Debugger.

In order to reset Monaca Debugger, please do as follows:

1.  Clear temporary files on the debugger:

    -   For Android:
    
        a.  From Monaca Debugger menu, go to `Debugger Settings`.

        b.  Click on {{<guilabel name="CLEAR SYNCED FILES">}} and {{<guilabel name="CLEAR STORAGE DATA">}} buttons.

    -   For iOS
        
        a.  From Monaca Debugger menu, go to `Settings`.

        b.  Click on {{<guilabel name="Clear Temporary Files">}} and {{<guilabel name="Clear Local Storage">}} buttons.

2.  Log out of the debugger.
3.  Log in again.

If the issue still persists, please contact our [Monaca Support](https://monaca.io/service/index.html).

## console.log is not working on iOS for Cordova 6.5 project

In this case, please check the version of Monaca Core Utility. In a
Cordova 6.5 project, `Monaca Core Utility Version: 2.0.6` is a default
setting. However, if you upgrade an older Cordova project to Cordova
6.5, the version of Monaca Core Utility will not be updated. Therefore,
if the version of Monaca Core Utility is lower than `2.0.6`, please
update it as follows:

1.  Go to {{<menu menu1="Config" menu2="Manage JS/CSS Components">}}.
2.  Remove `Monaca Core Utility` component.
3.  Then, re-add the component by clicking on {{<guilabel name="Add">}} button of `Monaca Core Utility`.
4.  Select `2.0.6` version and click on {{<guilabel name="Install">}} button.
5.  Click on {{<guilabel name="Save">}} button. Now, the `Monaca Core Utility Version: 2.0.6` should appear on the list.

