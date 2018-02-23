---
title: Monaca Debugger for Chrome Apps
weight: 30
aliases: /en/debugger/installation/debugger_chrome
---

{{<note>}}
    Monaca Backend plugin is not included in Monaca Debugger.
{{</note>}}

Chrome Apps are web apps running by Chrome Engine. The installed Chrome
Apps can also be used offline. All Chrome Apps are published in Chrome
Web Store.

## Installation

1.  You can install [Monaca debugger for Chrome Apps via Chrome Web Store](https://chrome.google.com/webstore/detail/eampeimhpjmnimjbfajnbegjnafjadld).
    Or from Monaca Cloud IDE menu, go to {{<menu menu1="Debug" menu2="Setup Monaca Debugger" menu3="Debugger for Chrome Apps">}}.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/1.png">}}  

2.  Click on {{<guilabel name="ADD TO CHROME">}} button to add Monaca Debugger to your Chrome.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/2.png">}}  

3.  Then, a dialog will appear. Click {{<guilabel name="Add app">}} button to finalize the
    installation process.

## Running Monaca Debugger

1.  From the bookmarks bar, click on {{<guilabel name="Apps">}} or go to `chrome://apps` from
    the address bar. A list of installed Chrome Apps will appear.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/3.png">}}

2.  You can also use Chrome App Launcher to access all of your Chrome
    Apps right from your desktop. You can install Chrome App Launcher
    from [Chrome Web Store](https://chrome.google.com/webstore).

    {{<img src="/images/debugger/manual/installation/debugger_chrome/4.png">}}

3.  After launching the app, log into Monaca with your Monaca account.
    Then, the list of your Monaca projects will be shown in the
    debugger.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/5.png">}}

4.  You can now select a project to run in the debugger. If it's the
    first time you run that project, you will be asked to set a working
    directory representing a location to store your downloaded projects
    from the cloud.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/6.png">}}

5.  Wait for the selected project to be downloaded. When the download is
    completed, the following screen will appear.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/7.png">}}

6.  Open Chrome browser and go to `chrome://extensions` from the address
    bar. Then, go to the downloaded project folder. Then, drag and drop
    that folder into Chrome Extensions page.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/8.png">}}

7.  Now your app is installed and ready to launch. Click {{<guilabel name="Launch">}} to run
    the app.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/9.png">}}

8.  It can also be found in `Chrome App Launcher`.

    {{<img src="/images/debugger/manual/installation/debugger_chrome/10.png">}}

See Also:

- [Debugger Installation on Emulator](../debugger_emulator)
- [Debugger Installation on iOS](../debugger_ios)
- [Debugger Installation on Android](../debugger_android)
- [Debugger's Functionalities](../../features)
- [Debugger's Usage](../../debug)
