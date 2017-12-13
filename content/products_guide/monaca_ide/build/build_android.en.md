---
title: Building for Android
weight: 20
---

##  Types of Build

In Monaca, Android app has two types of build: debug version and release
version. The differences between these types of build are as follows:

<table>
    <tr>
        <th width="17%">Types of Build</th>
        <th>Description</th>
        <th width="30%">Installation</th>
    </tr>
    <tr>
        <td><b>Debug Build</b></td>
        <td>An unsigned package which cannot be distributed in the market</td>
        <td>
            <ul>
                <li>QR Code</li>
                <li><a href="/en/products_guide/debugger/features/#debugger-project-options">Network Install</a></li>
                <li>Sideloading</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>Release Build</b></td>
        <td>A signed package with the developer’s code sign which can be distributed in the market</td>
        <td>
            <ul>
                <li>Sideloading</li>
                <li>Google Play Store and other eligible markets</li>
            </ul>
        </td>
    </tr>
</table>

{{<note>}}
    Sideloading means installing an application package in APK format onto
an Android device. After building your app, you can download the APK
file and install it.
{{</note>}}


##  Step 1: Configure Android App

1.  From the Monaca Cloud IDE menu, go to `Config` &rarr; `Android App Settings`.
2.  Fill in the necessary information of your app:

    - General settings:

        <table class="small">
            <tr>
                <td width="20%">Application Name</td>
                <td>A name representing your app publicly such as in the Market</td>
            </tr>
            <tr>
                <td>Package Name</td>
                <td>A unique name which will be used when uploading to the Android Market. It is recommended to use reverse-domain style (for example, io.monaca.app_name) for App ID. Only alphanumeric characters, periods (at least one period must be used) and underscore are allowed. Each segment should be separated by a period and started with an alphabetic character.</td>
            </tr>
            <tr>
                <td>Use Different Package Name for Debug Build</td>
                <td>If enable, the package name of the release-built and debug-built apps are different. In other words, the package name of debug-built app will have <code>.debug</code> extension, and the one for project debugger will have <code>.debugger</code> extension. However, this option is disable by default because it made some plugins impossible to be debugged due to the fact that they are tied to exact package names (eg. in-app purchase).</td>
            </tr>
            <tr>
                <td>Version</td>
                <td>The version number of your app. A version number consist of only number seperated by dots (for example, 1.0.0).</td>
            </tr>
            <tr>
                <td>Version Code</td>
                <td>An internal version number of your app, relative to other versions. The value must be integer, so that the applications can programmatically evaluate it for an upgrade.</td>
            </tr>
            <tr>
                <td>Fullscreen</td>
                <td>This option is only available with the Cordova 3.5 and later. If enable, your app will be run in a fullscreen mode which hide the status bar.</td>
            </tr>
        </table>

        {{<img src="/images/monaca_ide/manual/build/android/1.png">}}

    - Misc: various settings regarding your Android app such as:

        <table class="small">
            <tr>
                <td width="17%">Allowed URL</td>
                <td width="17%"><code>*</code></td>
                <td>Specify URL(s) which can be accessed from your app. If set to <code>*</code>, you can access all domains from your app.</td>
            </tr>
            <tr>
                <td>Keep Running</td>
                <td>Enable</td>
                <td>Enable this if you want Cordova to keep running in the background.</td>
            </tr>
            <tr>
                <td>Disallow Overscroll</td>
                <td>Enable</td>
                <td>Enable this if you want to disable the glow when a user scrolls beyond the edge of the webview.</td>
            </tr>
            <tr>
                <td>WebView Engine</td>
                <td>Stock WebView</td>
                <td>Set to High Performance (Crosswalk) for a more powerful and larger app size. It’s required Android 4.0 and up. For Cordova 5.2 and and higher, Stock WebView will be applied as default.</td>
            </tr>
            <tr>
                <td>Screen Orientation</td>
                <td>Default</td>
                <td>You can also set the device’s screen orientation when running your app as Landscape or Portrait.</td>
            </tr>
        </table>

3.  After finishing the configurations, click {{<guilabel name="Save">}}.

{{<note>}}
    Currently, when you update either iOS's App ID or Android's Package
Name, both of them will change. In other words, they are configured to
be the same. However, it is possible to make them different. Please
refer to {{<link href="/en/faq/application/#faq05-019" title="How to make iOS’s App ID and Android’s Package Name differently">}}.
{{</note>}}

##  Step 2: Configure Android Keystore

A keystore is a binary file that contains a set of private keys. A
private key represents the entity to be identified with the app, such as
a person or a company. A keystore is encrypted with a password and it
cannot be restored if the password is lost. When a keystore is lost or
it overwrites another keystore, it is impossible to use the same key to
re-sign the signed package.

A keystore is required for the building of a release version for your
Android app. In Monaca, you can either create a new keystore or import
an existing one. In order to create a new keystore, please do as
follows:

1.  From the Monaca Cloud IDE menu, go to `Config` &rarr; `Android KeyStore Settings`.
2.  Then, Manage KeyStore and Alias page will appear.

    {{<img src="/images/monaca_ide/manual/build/android/2.png">}}

3.  Click on {{<guilabel name="Clear and Generate New">}} button. Then, the following screen
    will appear:

    {{<img src="/images/monaca_ide/manual/build/android/3.png">}}

4.  Fill in the necessary information as shown in the above screen such as:

    -   `Alias`: a name representing a private key that you will use later when signing your app. Multiple aliases can be stored within one keystore.
    -   `Password`: a password for the private key (alias).
    -   `Password of the keystore`: a password for the keystore. You will need this password when importing this keystore.

5.  Then, click on {{<guilabel name="Generate Keystore and Alias">}} button to Generate the
    keystore.


{{<warning>}}
    When a keystore is lost, it is impossible to use the same key to re-sign the signed package. Therefore, always back up and keep the keystore which is used to sign application(s). Use the Export button to download your keystore.
{{</warning>}}

## Step 3: Start Building

1.  From the Monaca Cloud IDE menu, go to `Build` &rarr; `Build App for Android`.
2.  Select appropriate type of build you want and click {{<guilabel name="Start">}} Build.

    {{<img src="/images/monaca_ide/manual/build/android/4.png">}}

3.  If you choose `Release Build`, you will also need to select an alias to sign your package before start building.

    {{<img src="/images/monaca_ide/manual/build/android/6.png">}}

4.  It may take several minutes for the build to complete. Please wait.
    Once the build is completed, your built app is ready to be
    installed/downloaded. See below screenshot as an example:

    {{<img src="/images/monaca_ide/manual/build/android/7.png">}}

See Also: 

- [Building for iOS](../ios/build_ios)
- [Building for Windows](../build_winrt)
- [Google Play Distribution](../../deploy/google_play)
- [Build History](../build_history)
