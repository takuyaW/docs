---
title: Building for Windows
weight: 30
---

## Windows Store Apps

Windows Store apps are created by using HTML5 and JavaScript , and they
run natively on the WinRT architecture. Therefore, applications created
by using Monaca are equipped with the same functionalities as created by
development tools such as Visual Studio, and can use all native features
including WinJS.

Windows Store apps run on PCs and tablets installed with Windows and
Windows RT. However, if you want to publish the app to the Windows
Store, you will need to rebuild it separately by using Visual Studio or
other development tools since the release build from Monaca are not
supported yet.

On the other hand, Windows Store apps have various constraints that are
not found on Android or iOS such as:

-   There are some methods or features that are not supported since
    HTML5 or JavaScript runs in Trident/Chakra application mode. For
    more details, please refer to [HTML, CSS, and JavaScript Features and
    Difference](http://msdn.microsoft.com/en-us/library/windows/apps/hh465380.aspx).

## Prerequisite

You are required to have a valid Microsoft Developer License in order to
build Windows apps. It's free but you need to have a Microsoft account.
If you don't have the license, please register
[here](https://dev.windows.com/en-us/programs/join).

##  Step 1: Configure Windows App Settings

1.  From the Monaca Cloud IDE menu, go to `Config` &rarr; `Windows App Settings`.
2.  Fill in the necessary information of your app:

    <table class="small">
        <tr>
            <td width="25%">Package Certificate Key</td>
            <td>This certificate is used when Monaca compiles to Windows app. It will also be used when doing side-loading or submitting to Windows Store. It will be generated automatically in the first Windows build if it does not exist. If you want to upload existing certificate file, it should be a <code>PKCS#7</code> format without password.</td>
        </tr>
        <tr>
            <td>App Display Name</td>
            <td>Enter the application name. It will appear on the Start screen.</td>
        </tr>
        <tr>
            <td>Package Display Name</td>
            <td>Enter the package name.</td>
        </tr>
        <tr>
            <td>Short Name</td>
            <td>Enter a name to be displayed on the taskbar.</td>
        </tr>
        <tr>
            <td>Show Name</td>
            <td>Define default setting of logo displayed in start menu of windows 8 or higher.</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>Enter the version number of your app. A version number consist of only number seperated by dots (for example, 0.0.1.0).</td>
        </tr>
        <tr>
            <td>App Description</td>
            <td>A short summary about your app.</td>
        </tr>
        <tr>
            <td>Package Publisher Name</td>
            <td>It could be your name, group name, company name, etc.</td>
        </tr>
        <tr>
            <td>Architecture</td>
            <td>Select a CPU Architecture. Available options are AnyCPU, x86, x64 and Arm.</td>
        </tr>
    </table>

    {{<img src="/images/monaca_ide/manual/build/winrt/1.png">}}

3.  After finishing the configurations, click {{<guilabel name="Save">}}.

## Step 2: Start Building

1.  From the Monaca Cloud IDE menu, go to {{<menu menu1="Build" menu2="Build App for Windows">}}.
2.  Click {{<guilabel name="Start Build">}}.

    {{<img src="/images/monaca_ide/manual/build/winrt/2.png">}}

3.  After the build is successfully completed, download the zip file of
    the built app.

## Step 3: Install the App

1.  Extract the downloaded zip file.

2.  In the extracted folder, Right-click on the `Add-AppDevPackage.ps1` file and select `Run with PowerShell`. Then, the installation will begin.

    {{<img src="/images/monaca_ide/manual/build/winrt/4.png">}}

3.  Then, you might be asked to confirm the opening of the selected file. Click {{<guilabel name="Open">}}.

    {{<img src="/images/monaca_ide/manual/build/winrt/5.png">}}

4.  Press {{<guilabel name="Enter">}} to continue.

    {{<img src="/images/monaca_ide/manual/build/winrt/6.png">}}

5.  Then, the UAC (User Account Control) prompt will appear asking you
    to grant the Administrative privilege. Click {{<guilabel name="Yes">}}.
6.  Confirm the running of the app by typing `R` in the PowerShell
    windows.

    {{<img src="/images/monaca_ide/manual/build/winrt/7.png">}}

7.  Then, press `Y`.

    {{<img src="/images/monaca_ide/manual/build/winrt/8.png">}}

8.  Once, the installation is completed, press {{<guilabel name="Enter">}}.

    {{<img src="/images/monaca_ide/manual/build/winrt/9.png">}}

9.  Now, your app should be successfully installed. Find your app in the
    App windows.

    {{<img src="/images/monaca_ide/manual/build/winrt/10.png">}}

10. Click on it to launch the app. Then, your app should be running.

    {{<img src="/images/monaca_ide/manual/build/winrt/11.png">}}

See Also: 

- [Building for iOS](../ios/build_ios)
- [Building for Android](../build_android)
- [Google Play Distribution](../../deploy/google_play)
- [Build History](../build_history)
