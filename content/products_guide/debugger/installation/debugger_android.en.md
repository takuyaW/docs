---
title: Monaca Debugger for Android
weight: 10
---

{{<figure src="/images/debugger/manual/installation/debugger_android/3.png" title="Monaca Debugger for Android" width="300">}}  

{{<note>}}
    Monaca Backend plugin is not included in both Monaca Debugger (store version) and Custom Monaca Debugger.
{{</note>}}

{{<note>}}
    <ol>If the Cordova version of your project is lower than 5.2, it might not work properly with Monaca Debugger 5.X.X. There are two ways to fix this issue:
        <li><a href="/en/products_guide/monaca_ide/dependencies/cordova_plugin/#changing-cordova-version">upgrade Cordova version</a> of your project</li>
        <li>use <a href="#custom-debugger-and">Custom Monaca Debugger</a>.</li>
    </ol>
{{</note>}}

<table class="small">
    <tr>
        <th width="25%"></th>
        <th>Monaca Debugger (Store Version)</th>
        <th>Custom Monaca Debugger</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Monaca Debugger available at the store</td>
        <td>Monaca Debugger built from Monaca Cloud IDE</td>
    </tr>
    <tr>
        <td>Installation</td>
        <td>
            <ol>
                <li><a href="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">Play Store</a></li>
                <li><a href="http://www.amazon.com/Asial-Corporation-Monaca-Debugger/dp/B00H1M1518">Amazon App Store</a></li>
            </ol>
        </td>
        <td>Refer to <a href="#build-and-install-custom-monaca-debugger">Build and Install Custom Monaca Debugger</a></td>
    </tr>
        <tr>
        <td><a href="#cordova-and">Cordova Plugins</a></td>
        <td>Core and some third-party Cordova plugins are automatically included.</td>
        <td>In addition to the core and third-party Cordova plugins, user submitted plugins (of the current project) are included.</td>
    </tr>
    <tr>
        <td>App ID (<code>Android:PackageName</code>)</td>
        <td><code>mobi.monaca.debugger</code</td>
        <td>App ID set by a user</td>
    </tr>
        <tr>
        <td>Version Name (<code>Android:versionName</code>)</td>
        <td>Fixed (currently <code>6.0.1</code>)</td>
        <td>Display version name set by a user</td>
    </tr>
    <tr>
        <td>App Version (<code>Android:versionCode</code>)</td>
        <td>Fixed (currently <code>600012</code>)</td>
        <td>Version set by a user</td>
    </tr>
        <tr>
        <td><a href="#usb-and">USB Debugging</a></td>
        <td>Available (Chrome Dev Tools)</td>
        <td>Available (Chrome Dev Tools)</td>
    </tr>
    <tr>
        <td><a href="#localkit-and">Localkit Inspector Function</a></td>
        <td>Available</td>
        <td>Available</td>
    </tr>
    <tr>
        <td><a href="#webview-and">WebView</a></td>
        <td>Stock and Crosswalk</td>
        <td>Stock and Crosswalk</td>
    </tr>
    <tr>
        <td><a href="#network-and">Network Install</a></td>
        <td>Available</td>
        <td>Available</td>
    </tr>
</table>

##  Cordova Plugins

In Monaca Debugger, core and third-party Cordova plugins are
automatically included.

Monaca includes Core cordova plugins which are a minimal set of APIs
such as Battery Status, Camera, Contacts, Device and so on. For a
complete list of core Cordova plugins, please refer to [Core Cordova Plugins](/en/reference/cordova_6.5).

Monaca also includes some third-party Cordova plugins such as Statusbar,
DatePicker, BarcodeScanner and so on. For a complete list of currently
included third-party Cordova plugins, please refer to [Third-party Cordova Plugins](/en/reference/third_party_phonegap).

While developing your project, you may need to add other third-party or [custom Cordova plugins](/en/products_guide/monaca_ide/dependencies/custom_cordova_plugin) to your project.
The standard Monaca Debugger (Store Version) doesn't have these newly
added plugins. For this reason, your project might not run properly in
the debugger. Therefore, you need to use Custom Monaca Debugger. Custom
Monaca Debugger is a debugger which is built from a Monaca Project
within Monaca Cloud IDE. Please refer to [Build and Install Custom Monaca Debugger](#custom-debugger-and).

##  USB Debugging

Monaca Debugger for Android supports USB debugging functions with Google
Chrome browser such as:

-   console debugging: using console to diplay message.
-   DOM inspection: viewing and modifying DOM structure with live
    updates.
-   JavaScript debugging: profiling JavaScript performance, setting
    breakpoint and execution control.

For more information, please refer to [USB Debugging with Monaca Debugger for Android Apps](../../debug/#usb-debugging-android).

##  Localkit Inspector Function

Inspector can be used when developing either on Windows or Mac OS.

##  WebView

Monaca Debugger for Android contains both stock and Crosswalk WebView
engines. The WebView is switched automatically depending on the type of
WebView is used in each application.

##  Network Install

Network Install is a feature provided by Monaca Debugger for Android
allowing you to install the built app (debug build only) using the
debugger. For more information, please refer to [how to use Network Install feature](../../features/#debugger-project-options).

##  Build and Install Custom Monaca Debugger

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Debug" menu2="Setup Monaca Debugger">}}.
2.  Select {{<menu menu1="Debugger for Android" menu2="Build and Install">}}.

    {{<img src="/images/debugger/manual/installation/debugger_android/1.png" width="500">}}  

3.  This may take sometimes until your building is completed. The
    following screen will appear after the build is successfully
    completed. Then, you can use the QR code to install the debugger on
    your device or download the built file to your PC.

    {{<img src="/images/debugger/manual/installation/debugger_android/4.png" width="500">}}  

4.  After installing the debugger on your device, sign in with your
    Monaca account. Then, tick `I've installed Monaca Debugger and logged in` and click {{<guilabel name="Next">}}.
5.  Monaca Cloud IDE will then try looking for the debugger. Once it's
    found and connected, click {{<guilabel name="Run on Device">}} to start running the
    current app in your debugger right away.

    {{<img src="/images/debugger/manual/installation/debugger_android/5.png" width="500">}}  

6.  By now your app should be running in your debugger. Try testing your
    app in the debugger and making some changes in the IDE. You will be
    able to see the changes reflected in the debugger once you save the
    changes.

    {{<img src="/images/debugger/manual/installation/debugger_android/6.png" width="500">}}  

See Also:

- [Debugger Installation on Emulator](../debugger_emulator)
- [Debugger Installation on iOS](../debugger_ios)
- [Debugger Installation on Chrome](../debugger_chrome)
- [Debugger's Functionalities](../../features)
- [Debugger's Usage](../../debug)
