---
title: Running Monaca Debugger with Monaca Localkit
---

# Part 2: Running Monaca Debugger with Monaca Localkit

[Monaca Debugger](/en/debugger) is a powerful
application for testing and debugging your Monaca applications on real
devices in real time.

When developing Monaca apps on your local PC (running Monaca Localkit),
assuming that the local PC is successfully paired with Monaca Debugger,
all changes made to project files will be pushed into Monaca Debugger as
soon as you save those changes.

In this page, we describe a step-by-step instruction of how to:

-   run the project on Monaca Debugger.
-   get real-time updates between Monaca Localkit and Monaca Debugger.
-   start debugging the project with Chrome DevTools.

## Before Getting Started

Please install Monaca Debugger on your device.

{{<img src="/images/monaca_localkit/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
{{<img src="/images/monaca_localkit/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

{{<note>}}
    Please refer to {{<link href="/en/debugger/manual/installation" title="Monaca Debugger Installation">}} for other platforms.
{{</note>}}

## Step 1: Running a Project on Monaca Debugger

1.  Pair the Monaca Debugger with the PC hosting Monaca Localkit. Please
    refer to [Pairing and Debugging](../../manual/pairing_debugging).
2.  If your pairing is successful, a project list will appear in Monaca
    Debugger and the connected debugger will appear in the Monaca
    Localkit (see screenshots below as an example). However, if you
    failed the pairing, please refer to [Troubleshoot the Pairing](/en/debugger/manual/troubleshooting).

    {{<multi_figures title="Monaca Debugger & Monaca Localkit">}}
        {{<img src="/images/monaca_localkit/tutorial/testing_debugging/1.png" width="175">}}
        {{<img src="/images/monaca_localkit/tutorial/testing_debugging/2.png" width="472">}}
    {{</multi_figures>}}

3.  Then, run the project on Monaca Debugger. To do this, you can either
    click on the project name in Monaca Debugger or click {{<guilabel name="Run">}} button in
    Monaca Localkit.
4.  Now the screen on your device should look like a screenshot below.
    Use Back button within `Debugger Menu` button to go back to the
    Project List screen.

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/3.png" width="300">}}
    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/5.png" width="300">}}

5.  Try and test your project by adding a new memo. If a new memo
    appears, your project is running properly.

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/4.png" width="300">}}

## Step 2: Real-time Update between Monaca Localkit and Monaca Debugger

1.  Run the project on the debugger.
2.  Let's make some changes in a project file and save them (read more
    on [Edit Project Files](../starting_project/#edit-project-localkit)). For example,
    try to change the title of the application in `index.html` file or
    the style of page in `style.css` file. Please notice that,
    {{<guilabel name="Live Reload">}} toggle button is enable by default. This allows the real-time
    updates between the debugger and Monaca Localkit. Turn this off if
    you want to disable this real-time update.

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/7.png">}}

3.  The saved changes should be updated simultaneously to your app in
    Monaca Debugger on your device. You can also click on {{<guilabel name="Refresh">}} button
    to retrieve the latest updates of your app in case the changes are
    not reflected.

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/6.png" width="300">}}

## Step 3: Debug the project with Monaca Debugger

Monaca Localkit allows you to debug your application with [Chrome
DevTools](https://developer.chrome.com/devtools) using USB connection.
Before starting this USB debugging, please make sure to
[enable USB Debugging option](/en/debugger/manual/debug/#pre-debug-app) on your device with
appropriate version of Monaca Debugger.

1.  Run the project on the debugger.
2.  From the Debugger Menu button, click on {{<guilabel name="Inspector">}} button (see the
    screenshot below).

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/8.png" width="300">}}

3.  The Chrome DevTools should be opened in the host PC. Then, you can
    start inspecting and debugging your app right away. For more
    information, please refer
    [Inspecting](https://developer.chrome.com/devtools/docs/dom-and-styles)
    and [JavaScript
    Debugging](https://developer.chrome.com/devtools/docs/javascript-debugging)
    with Chrome DevTools. However, if the Chrome DevTools are failed to
    open, please refer to [Inspector Isn’t Loaded](/en/debugger/manual/troubleshooting/#troubleshoot-inspector).

    {{<img src="/images/monaca_localkit/tutorial/testing_debugging/9.png">}}

{{<note>}}
    You can also open the Chrome DevTools directly from Monaca Localkit. Select a project you want to debug and then click on {{<guilabel name="Inspector">}} button of the paired debugger (see the screenshot below).
{{</note>}}

{{<figure src="/images/monaca_localkit/tutorial/testing_debugging/10.png">}}

{{<note>}}
    Please refer to {{<link href="/en/debugger/manual/features/#monaca-debugger-features" title="Functionalities">}} to explore the other functions provided by Monaca Debugger.
{{</note>}}

See Also:

- [Part 1: Starting a Project](../starting_project)
- [Part 3: Building Monaca App](../building_app)
- [Part 4: Publishing Monaca App](../publishing_app)