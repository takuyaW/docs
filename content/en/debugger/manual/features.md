---
title: Functionalities
---

# Functionalities

## Debugger Functions

Monaca Debugger provides useful functions for testing/debugging your
apps. You can find Debugger Functions button when you run a project in
Monaca Debugger. When you click on Debugger Functions button, you will
see:

-   Back button
-   Reload button
-   [Screenshot button](#screenshot)
-   [App Log button](#app-log)
-   [Inspector button](#debugger-inspector)

{{<multi_figures>}}
    {{<img src="/images/debugger/manual/features/1.png" width="300">}}  
    {{<img src="/images/debugger/manual/features/2.png" width="300">}}  
{{</multi_figures>}}

### <a href="screenshot"></a> Screenshot

While using Monaca Debugger, you can also take screenshots and save them
on the device's storage. In the screenshot screen, you can:

-   edit the screenshot.
-   save it on the device's storage.

    {{<img src="/images/debugger/manual/features/4.png" width="300">}}  

### <a name="app-log"></a> App Log

Monaca Debugger allows you to see the log of the app which will show the
progress and errors of the app while running.

{{<figure src="/images/debugger/manual/features/3.png" width="300">}}  

### <a name="debugger-inspector"></a> Inspector

Inspector function allows you to debug/inspect your project using
[Chrome Dev Tools](https://developer.chrome.com/devtools/index). Before
started, you need to enable USB debugging on your device. For more
information, please refer to [USB Debugging with Monaca](../debug/#pre-debug-app).

{{<figure src="/images/debugger/manual/features/7.png">}}  

{{<note>}}
    Inspector function is only available when you are using {{<link href="/en/monaca_localkit" title="Monaca Localkit">}} or {{<link href="/en/monaca_cli" title="Monaca CLI">}}. Please refer to {{<link href="../debug/#debugger-with-local-tools" title="USB Debugging with Monaca Local Development Tools">}}.
{{</note>}}

## Debugger Menu

{{<figure src="/images/debugger/manual/features/8.png" width="300">}}  

Inside Debugger Menu, there are:

### All Projects

Shows a list of all Monaca projects which can be run on Monaca Debugger.
There are two types of projects in Monaca Debugger such as:

-   Monaca.io projects: projects created in Monaca Cloud IDE.
-   Local projects: projects created in [Monaca Localkit](/en/monaca_localkit) or [Monaca CLI](/en/monaca_cli) and stored in your local PC. Local projects appear only when the debugger is paired with Monaca Localkit/CLI.

{{<figure src="/images/debugger/manual/features/9.png" width="300">}}  

### Local Computers

Shows a list of all currently paired and available computers. Paired
computers are local computers running Monaca Localkit/CLI and currently
connected to the debugger. You may want to see to the following
documentations:

- [Pairing Monaca Debugger with Monaca Localkit](/en/monaca_localkit/manual/pairing_debugging)
- [Pairing Monaca Debugger with Monaca CLI](/en/monaca_cli/manual/pairing_debugging)
- [Pairing Monaca Debugger with Monaca for Visual Studio](/en/monaca_vs/manual/pairing_debugging)

{{<figure src="/images/debugger/manual/features/10.png" width="300">}}  

### Debugger Settings

Shows debugger's configurations such as memory usage, splash screen
(Android only), storage usage and so on. Synced files are synced project
files while storage data is previously stored data (local storage data)
created by your projects on your device's memory.

{{<figure src="/images/debugger/manual/features/11.png" width="300">}}  

### Debugger Information

Shows detailed information of the debugger such as version, platform,
CLI version, WebView Engine (Android only) and available plugins.

{{<figure src="/images/debugger/manual/features/12.png" width="300">}}  

## <a name="debugger-project-options"></a> Project Options

From the project list inside Monaca Debugger, there is a Project Options
button for each Monaca.io project.　Inside this Project Options button,
you can:

-   favorite current project: moves it to the top of the project list.
-   lunch app: runs current project in the debugger.
-   use network install: installs a built app of the current project
    directly from Monaca debugger.

    {{<multi_figures>}}
        {{<img src="/images/debugger/manual/features/13.png" width="300">}}  
        {{<img src="/images/debugger/manual/features/14.png" width="300">}}  
    {{</multi_figures>}}

{{<note>}}
    In order to use network install, you need to create a debug build of the project from Monaca Cloud IDE first. Please refer to {{<link href="/en/monaca_ide/manual/build/ios/build_ios/#types_of_build_ios" title="debug build for iOS">}} or {{<link href="/en/monaca_ide/manual/build/build_android/#types_of_build_android" title="debug build for Android">}}.
{{</note>}}

{{<note>}}
    For iOS debugger, network install is only available for the {{<link href="/en/debugger/manual/installation/debugger_ios/#custom-debugger-ios" title="custom built debugger">}}. The App store version doesn’t have this function.
{{</note>}}

See Also: 

- [Installation](../installation)
- [Usage](../debug)
- [Debugger Troubleshooting Guide](../troubleshooting)