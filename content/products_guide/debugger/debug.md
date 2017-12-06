---
title: Usage
weight: 30
---

In this page, we will describe how to use Monaca Debugger with Monaca
Cloud IDE and other Monaca local development tools such as Monaca
Localkit, Monaca CLI and Monaca for Visual Studio:

- [Monaca Debugger with Monaca Cloud IDE](#debugger-with-ide)
- [Monaca Debugger with Monaca Local Development Tools](#debugger-with-local-tools)

{{<note>}}
    Before starting, please install Monaca Debugger on your device or emulator. Please refer to {{<link href="../installation" title="How to Install Monaca Debugger">}} for more information.
{{</note>}}

## <a name="debugger-with-ide"></a> Monaca Debugger with Monaca Cloud IDE

There are 2 main debugging mechanism can be used to debug Monaca apps
with Monaca Cloud IDE such as:

-   [Monaca Debug Panel](#debugger-debug-panel): DOM inspection and console debugging.
-   [USB Debugging](#debugger-usb-debug): DOM inspection, console and JavaScript debugging.

### <a name="debugger-debug-panel"></a> Monaca Debug Panel

A popular Web debugging tool, [Weinre (WEb INspector
REmote)](https://people.apache.org/~pmuellr/weinre/docs/latest/), is
embedded in debug panel of Monaca Cloud IDE. This tool allows you to
debug your app using console debugging and DOM inspection.

{{<figure src="/images/debugger/manual/debug/1.png" title="Debug Panel inside Monaca Cloud IDE">}}

In order to start debugging your app by using Monaca Debugger with
Monaca Cloud IDE, please follow the following instruction:

1.  Open a project in Monaca Cloud IDE.
2.  Run the project in Monaca Debugger.
3.  Make sure your device is connected with the IDE. For example, if
    your device appears in the debug panel, it is successfully connected
    to the IDE (see the screenshot below). Otherwise, please refresh the
    IDE or debugger until the connection is successfully made. After
    your device is connected to the IDE, you can start debugging your
    app.

    {{<figure src="/images/debugger/manual/debug/2.png">}}

#### Console Debugging

Console API allows you to write/display message to the Console using
Javascript.

Here are some common used Console APIs:

-   `console.log()`: displays a message to the console.
-   `console.debug()`: displays a message as debug level (you can see
    the message in the debug tab).
-   `console.warn()`: displays a message with yellow warning icon.

{{<note>}}
    For more information about Console APIs, please refer to {{<link href="https://developer.chrome.com/devtools/docs/console-api" title="Console API references">}}.
{{</note>}}

Here is an example of using Console APIs:

1.  Copy and paste the following code into the `index.html` file.

    {{<highlight html>}}
    <!DOCTYPE HTML>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
            <script src="components/loader.js"></script>
            <link rel="stylesheet" href="components/loader.css">
            <link rel="stylesheet" href="css/style.css">
            <script>
                var a = 1;
                var b = 2;

                function debug(){
                    var c = a + b;
                    console.log("debug() function is executed!");
                    console.log("executed! variable c is " + c);
                }

                debug();
            </script>
        </head>
        <body>
            <h1>Hello World!</h1>
        </body>
    </html>
    {{</highlight>}}

2.  Save the code and connect Monaca Debugger with Monaca Cloud IDE. Run
    the project in Monaca Cloud IDE. Now you can see those messages in
    the debug panel in Monaca Cloud IDE and in the app log inside the
    Monaca Debugger.

    {{<figure src="/images/debugger/manual/debug/3.png" title="Debug Panel in Monaca Cloud IDE">}}
    {{<figure src="/images/debugger/manual/debug/6.png" title="App Log in Monaca Debugger" width="300">}}

3.  This debug panel also allows you to see the error log of your app as
    well.

    {{<figure src="/images/debugger/manual/debug/4.png">}}

#### DOM Inspection

DOM (Document Object Model) Inspection allows you to:

-   view DOM structure of the currently active page.
-   modify the DOM structure as well as CSS of the page with live
    update.

For more information, please refer to [DOM Inspection and Style
Editing](https://developer.chrome.com/devtools/docs/dom-and-styles).

{{<figure src="/images/debugger/manual/debug/5.png" title="DOM Inspection inside Debug Panel">}}

### <a name="debugger-usb-debug"></a> USB Debugging

With USB debugging, you can:

-   Console debugging: uses console to diplay messages and set debugging
    sessions.
-   DOM inspection: views and modifies DOM structures with live updates.
-   JavaScript debugging: profiles JavaScript performance, sets
    breakpoint and execution control.

There are two ways to implement USB debugging depends on what kind of
device you use:

1.  If you are using iOS device, you can use [Safari Remote Debugging](#usb-debugging-ios).
2.  If you are using Android device, you can use [Chrome Remote Debugging](#usb-debugging-android).

#### <a name="usb-debugging-ios"></a> *Safari Remote Debugging (for iOS and Mac only)*

{{<note>}}
    You are required to do some setups before using USB debugging with Monaca. Please refer to {{<link href="#pre-debug-app" title="Prerequisite for USB Debugging with Monaca">}}.
{{</note>}}

1.  Connect your iOS device to your Mac via a USB cable.
2.  Run your Monaca project in your Monaca custom built debugger.
3.  Open Safari app and go to `Develop` menu. Your iOS device's name
    should be shown in the list. Then, you can select each available
    page of Monaca app from a submenu belonged to your device's name.

    {{<figure src="/images/debugger/manual/debug/9.png">}}

4.  Then, the Web Inspector window will appear. In this window, you can
    use timing HTTP requests, profiling JavaScript, manipulating the DOM
    tree, and more. In order to learn how to use Web Inspector, please
    refer to [Safari Web
    Inspector](https://developer.apple.com/library/ios/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007874).

    {{<figure src="/images/debugger/manual/debug/10.png">}}

#### <a name="usb-debugging-android"></a><b>Chrome Remote Debugging (for Android with Google Chrome Browser)</b>

{{<note>}}
    You are required to do some setups before using USB debugging with Monaca. Please refer to {{<link href="#pre-debug-app" title="Prerequisite for USB Debugging with Monaca">}}.
{{</note>}}

1.  Connect your Android device to your PC via a USB cable.
2.  Run your Monaca project in Monaca Debugger.
3.  In Chrome address bar, enter `chrome://inspect/`.
4.  Then, the Devices page appears as shown below. Your connected
    Android device should be shown there. Click {{<guilabel name="inspect">}} belonged to your
    device.

    {{<figure src="/images/debugger/manual/debug/7.png">}}

5.  Then, the Chrome Inspection page should be appeared. Now you can
    start debugging your Monaca app. For more information, please refer
    to [How to Use Chrome
    DevTools](https://developer.chrome.com/devtools).

    {{<figure src="/images/debugger/manual/debug/8.png">}}

## <a name="debugger-with-local-tools"></a> Monaca Debugger with Monaca Local Development Tools

Monaca local development tools are Monaca CLI, Monaca Localkit and
Monaca for Visual Studio.

### <a name="pre-debug-app"></a> Prerequisite for USB Debugging with Monaca

<table class="small">
    <tr>
        <th width="15%">Platform</th>
        <th>iOS</th>
        <th>Android</th>
    </tr>
    <tr>
        <td><b>Monaca Debugger</b></td>
        <td><a href="../installation/debugger_ios/#custom-debugger-ios">Custom built Monaca Debugger only</a></td>
        <td>Either store version or custom built <a href="../installation/debugger_android/">Monaca Debugger</a></td>
    </tr>
    <tr>
        <td><b>Install Driver</b></td>
        <td>For Windows, please install iTunes to install the driver for iOS devices. For Mac OS X, necessary drivers should be already installed.</td>
        <td>For Windows, you need to check the device manufacturer to find the appropriate driver for the device. For Mac OS X, the system will automatically find the device without any installation.</td>
    </tr>
    <tr>
        <td><b>Enable USB Debug</b></td>
        <td>Enable `Web Inspector` in iOS device:
            <ul>
                <li>Go to <code>Settings ‣ Safari</code></li>
                <li>Scroll down and select <code>Advanced</code>.</li>
                <li>Switch on <code>Web Inspector</code>.</li>
            </ul>
        </td>
        <td>Enable `USB debugging` in Android device:
            <ul>
                <li>Go to <code>Settings ‣ More</code></li>
                <li>Select <code>Developer options</code>.</li>
                <li>Tick <code>USB Debugging</code>.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><b>Trust Connection</b></td>
        <td>The connected device should display if you trust the host computer. Please trust the computer in order to get connected.</td>
        <td>The connected device should display if you trust the host computer. Please trust the computer in order to get connected.</td>
    </tr>
</table>

### USB Debugging with Monaca Local Development Tools

In order to start this debugging, please do as follows:

1.  Pair Monaca Debugger with the host PC (running Monaca local tool
    such as Monaca Localkit, Monaca CLI or Monaca for Visual Studio).
    You may want to refer to:

    -   [Pairing in Monaca Localkit](/en/monaca_localkit/manual/pairing_debugging)
    -   [Pairing in Monaca CLI](/en/monaca_cli/manual/pairing_debugging)
    -   [Pairing in Monaca for Visual Studio](/en/monaca_vs/manual/pairing_debugging)

2.  Choose a project to run.
3.  Click on the debugger menu as shown below:

    {{<figure src="/images/debugger/manual/debug/11.png" width="300">}}  

4.  Click the {{<guilabel name="Inspector">}} button to start the USB debugging.

    {{<figure src="/images/debugger/manual/debug/12.png" width="300">}}  

5.  The `Chrome DevTools`/`Safari Web Inspector` should be opened in the
    host PC; otherwise, please refer to [Inspector Isn’t Loaded](../troubleshooting/#troubleshoot-inspector). For
    more information, please refer to:

    - [How to Use Safari Web Inspector](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)
    - [How to Use Chrome DevTools](https://developer.chrome.com/devtools)

    {{<figure src="/images/debugger/manual/debug/13.png">}}  

See Also: 

- [Functionalities](../features)
- [Installation](../installation)
- [Debugger Troubleshooting Guide](../troubleshooting)

