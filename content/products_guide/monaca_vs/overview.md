---
title: Monaca for Visual Studio Overview
weight: 10
---

{{<warning>}}
    Monaca for Visual Studio has been discontinued and will no longer be supported or maintained. We are developing a new extension that will be for Visual Studio Code. We will inform you of the release date on our site and mailing list.
{{</warning>}}

Monaca for Visual Studio is an extension allowing you to develop Monaca
applications using Microsoft Visual Studio IDE. Several features found
in Monaca Cloud IDE are included in this extension. Therefore, app
development with Monaca for Visual Studio is very similar to the app
development on Monaca Cloud IDE.

{{<figure src="/images/monaca_vs/manual/introduction/1.png" title="Monaca for Visual Studio">}}  

## Prerequisites

In order to use Monaca for Visual Studio, you need:

-   Microsoft Visual Studio 2015 Community Edition, Professional Edition
    or higher editions.
-   a valid plan subscription. Please refer to [Monaca Subscription Plans](https://monaca.io/pricing.html).

## <a name="monaca-vs-installation"></a> Installing Monaca for Visual Studio

{{<note>}}
    It is necessary to {{<link href="#install-tools-for-apache-cordova" title="install tools for Apache Corodva">}} in Visual Studio in order to run Monaca for Visual Studio properly.
{{</note>}}

There are two ways to install Monaca for Visual Studio such as:

1. [Installing from Visual Studio](#install-from-vs)
2. [Installing from Web](#install-from-web)

### <a name="install-from-vs"></a> Installing from Visual Studio

1.  From Visual Studio menu, go to {{<menu menu1="Tools" menu2="Extensions and Updates">}}.
2.  Then, go to {{<menu menu1="Online" menu2="Visual Studio Gallery">}}. Next, input `monaca` in a search box on the top-right corner.
3.  Select `Monaca for Visual Studio 2015` and click {{<guilabel name="Download">}}. Wait until the download is finished, then install it.

    {{<img src="/images/monaca_vs/manual/introduction/2.png">}}  

    {{<note>}}
        If you want to have Onsen UI templates within Visual Studio, please download and install <code>Onsen UI Templates for Visual Studio 2015</code>.
    {{</note>}}

4.  When the installation is completed, restart Visual Studio. Then, `MONACA` menu can be found in the Visual Studio menu.

    {{<img src="/images/monaca_vs/manual/introduction/3.png">}}  

### <a name="install-from-web"></a> Installing from Web

1.  Download Monaca for Visual Studion extension [here](https://visualstudiogallery.msdn.microsoft.com/21a7a495-5a24-4eab-a519-2f6e6d176049).
2.  Open the downloaded file and follow the installation instruction.
3.  Restart Visual Studio if it is opened during installation. Then,
    `MONACA` menu can be found in Visual Studio menu.

## <a name="install-tools-for-apache-cordova"></a> Installing Tools for Apache Cordova

1.  From Visual Studio menu, go to {{<menu menu1="File" menu2="New" menu3="Project">}}.
2.  Then, go to {{<menu menu1="Installed" menu2="Templates" menu3="JavaScript" menu4="Apache Cordova Apps">}}.
3.  Select `Install Tools for Apache Cordova Update 7` and click {{<guilabel name="OK">}}.

    {{<img src="/images/monaca_vs/manual/introduction/11.png">}}  

4.  Click {{<guilabel name="Install">}}.

    {{<img src="/images/monaca_vs/manual/introduction/12.png">}}  

5.  Please close Visual Studio before the update begins. Otherwise, the
    following dialog asking you to close the Visual Studio will appear.

    {{<img src="/images/monaca_vs/manual/introduction/13.png">}}  

6.  Click {{<guilabel name="Next">}}.

    {{<img src="/images/monaca_vs/manual/introduction/14.png">}}  

7.  Click {{<guilabel name="Update">}}. It will take sometimes until the installation
    completes. Please wait.

    {{<img src="/images/monaca_vs/manual/introduction/15.png">}}  

## Uninstalling Monaca for Visual Studio

To completely uninstall Monaca for Visual Studio, you need to perform
the following steps:

1. [Uninstalling from Visual Studio](#uninstall-from-vs)
2. [Uninstalling from Windows PC](#uninstall-from-pc)

### <a name="uninstall-from-vs"></a> Uninstalling from Visual Studio

1.  From Visual Studio menu, go to {{<menu menu1="Tools" menu2="Extensions and Updates">}}.
2.  Then, go to {{<menu menu1="Installed" menu2="Tools">}}.
3.  Select `Monaca` and click {{<guilabel name="Uninstall">}}.

    {{<img src="/images/monaca_vs/manual/introduction/10.png">}} 

### <a name="uninstall-from-pc"></a> Uninstalling from Windows PC

1.  Go to {{<menu menu1="Control Panel" menu2="Programs" menu3="Uninstall a program">}}.
2.  Select `Monaca for Visual Studio` and click {{<guilabel name="Uninstall">}}.

## Monaca Panel Features

Once Monaca is successfully installed and added into Visual Studio IDE,
please log in with a valid Monaca account.

{{<figure src="/images/monaca_vs/manual/introduction/9.png">}} 

In Monaca panel, there are several features such as:

- [Run in Device](#run-in-device)
- [Build Settings](#monaca-panel-build-settings)
- [Build](#monaca-panel-build)
- [Preferences](#monaca-panel-preferences)

### <a name="run-in-device"></a> Run in Device

This function is available when at least one [Monaca Debugger](/en/debugger) is
connected to the host PC (running Visual Studio). It will run the
current project in Monaca Debugger. Please refer to [How to Connect Monaca Debugger with Monaca for Visual Studio](../../tutorial/testing_debugging).

{{<multi_figures title="Monaca Debugger is not Connected & Monaca Debugger is Connected">}}
    {{<img src="/images/monaca_vs/manual/introduction/4.png" width="280">}} 
    {{<img src="/images/monaca_vs/manual/introduction/5.png" width="320">}} 
{{</multi_figures>}}

### <a name="monaca-panel-build-settings"></a> Build Settings

Just like in Monaca Cloud IDE, this function will open a Build Settings
window which allows you to configure project settings as well as build
settings such as:

- [Cordova Plugins](/en/monaca_ide/manual/dependencies/cordova_plugin)
- [JS/CSS Components](/en/monaca_ide/manual/dependencies/components)
- [Service Integration](/en/reference/service_integration)
- [Android App and Build Settings](/en/monaca_ide/manual/build/build_android)
- [iOS App and Build Settings](/en/monaca_ide/manual/build/ios/build_ios)
- [Windows App Settings](/en/monaca_ide/manual/build/build_winrt)

{{<figure src="/images/monaca_vs/manual/introduction/6.png">}} 

### <a name="monaca-panel-build"></a> Build

This function will open a Build window which allows you to build your
project for 4 different platforms as shown in the screenshot below:

{{<figure src="/images/monaca_vs/manual/introduction/7.png">}} 

### <a name="monaca-panel-preferences"></a> Preferences

While trying to pair/connect Monaca Debugger with the PC hosting Monaca
within Visual Studio, you might need to configure HTTP Server Port and
Proxy Server. Please refer to [troubleshooting the Pairing](/en/debugger/manual/troubleshooting/#troubleshoot-pair) on when this
function is needed.

You can find this function by going to {{<menu menu1="MONACA" menu2="Preferences">}}.

{{<figure src="/images/monaca_vs/manual/introduction/8.png">}} 

There are two ways to define the proxy server address as follows:

1.  Proxy Server with basic authentication: `http://user:pass@server-host:port`

2.  Proxy Server without basic authentication: `http://server-host:port`

See Also:

- [Monaca for Visual Studio Tutorial](../../tutorial)
- [Project Dependencies](../dependencies)
- [Pairing and Debugging](../pairing_debugging)
- [Remote Building and Publishing](../build_publish)