Monaca for Visual Studio Overview
=================================

Monaca for Visual Studio is an extension allowing you to develop Monaca
applications using Microsoft Visual Studio IDE. Several features found
in Monaca Cloud IDE are included in this extension. Therefore, app
development with Monaca for Visual Studio is very similar to the app
development on Monaca Cloud IDE.

> ![](images/introduction/1.png)
>
> > alt
> >
> > :   Monaca for Visual Studio
> >
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
Prerequisites
-------------

In order to use Monaca for Visual Studio, you need:

-   Microsoft Visual Studio 2015 Community Edition, Professional Edition
    or higher editions.
-   a valid plan subscription. Please refer to
    [Pricing](https://monaca.io/pricing.html).

Installing Monaca for Visual Studio
-----------------------------------

<div class="admonition note">

It is necessary to install
tools for Apache Corodva &lt;install\_tools\_for\_apache\_cordova&gt; in
Visual Studio in order to run Monaca for Visual Studio properly.

</div>

There are two ways to install Monaca for Visual Studio such as:

1.  install\_from\_vs
2.  install\_from\_web

### Installing from Visual Studio

1.  From Visual Studio menu, go to Tools --&gt; Extensions and Updates.
2.  Then, go to Online --&gt; Visual Studio Gallery. Next, input
    `monaca` in a search box on the top-right corner.
3.  Select `Monaca for Visual Studio 2015` and click Download. Wait
    until the download is finished, then install it.

> ![](images/introduction/2.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
> <div class="admonition note">
>
> If you want to have Onsen UI templates within Visual Studio, please
> download and install `Onsen UI Templates for Visual Studio 2015`.
>
> </div>

4.  When the installation is completed, restart Visual Studio. Then,
    MONACA menu can be found in the Visual Studio menu.

> ![](images/introduction/3.png)
>
> > width
> >
> > :   321px
> >
> > align
> >
> > :   left
> >
### Installing from Web

1.  Download Monaca for Visual Studion extension
    [here](https://visualstudiogallery.msdn.microsoft.com/21a7a495-5a24-4eab-a519-2f6e6d176049).
2.  Open the downloaded file and follow the installation instruction.
3.  Restart Visual Studio if it is opened during installation. Then,
    MONACA menu can be found in Visual Studio menu.

Installing Tools for Apache Cordova
-----------------------------------

1.  From Visual Studio menu, go to File --&gt; New --&gt; Project.
2.  Then, go to
    Installed --&gt; Templates --&gt; JavaScript --&gt; Apache Cordova Apps.
3.  Select `Install Tools for Apache Cordova Update 7` and click OK.

> ![](images/introduction/11.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
4.  Click Install.

> ![](images/introduction/12.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
5.  Please close Visual Studio before the update begins. Otherwise, the
    following dialog asking you to close the Visual Studio will appear.

> ![](images/introduction/13.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
6.  Click Next.

> ![](images/introduction/14.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
7.  Click Update. It will take sometimes until the installation
    completes. Please wait.

> ![](images/introduction/15.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
Uninstalling Monaca for Visual Studio
-------------------------------------

To completely uninstall Monaca for Visual Studio, you need to perform
the following steps:

1.  uninstall\_from\_vs
2.  uninstall\_from\_pc

### Uninstalling from Visual Studio

1.  From Visual Studio menu, go to Tools --&gt; Extensions and Updates.
2.  Then, go to Installed --&gt; Tools.
3.  Select `Monaca` and click Uninstall.

> ![](images/introduction/10.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
### Uninstalling from Windows PC

1.  Go to Control Panel --&gt; Programs --&gt; Uninstall a program.
2.  Select `Monaca for Visual Studio` and click Uninstall.

Monaca Panel Features
---------------------

Once Monaca is successfully installed and added into Visual Studio IDE,
please log in with a valid Monaca account.

![](images/introduction/9.png){width="327px"}

In Monaca panel, there are several features such as:

-   run\_in\_device
-   monaca\_panel\_build\_settings
-   monaca\_panel\_build
-   monaca\_panel\_preferences

### Run in Device

This function is available when at least one monaca\_debugger\_index is
connected to the host PC (running Visual Studio). It will run the
current project in Monaca Debugger. Please refer to
How to Connect Monaca Debugger with Monaca for Visual Studio&lt;monaca\_vs\_testing\_debugging&gt;.

> ![Monaca Debugger is not
> Connected](images/introduction/4.png){width="300px"}
>
> ![Monaca Debugger is
> Connected](images/introduction/5.png){width="346px"}

### Build Settings

Just like in Monaca Cloud IDE, this function will open a Build Settings
window which allows you to configure project settings as well as build
settings such as:

-   Cordova Plugins&lt;cordova\_plugins\_setting&gt;
-   js\_css
-   service\_integration\_index
-   Android App and Build Settings&lt;building\_for\_android&gt;
-   iOS App and Build Settings&lt;building\_for\_ios&gt;
-   Windows App Settings&lt;building\_for\_win8&gt;

![](images/introduction/6.png){width="700px"}

### Build

This function will open a Build window which allows you to build your
project for 4 different platforms as shown in the screenshot below:

![](images/introduction/7.png){width="700px"}

### Preferences

While trying to pair/connect Monaca Debugger with the PC hosting Monaca
within Visual Studio, you might need to configure HTTP Server Port and
Proxy Server. Please refer to
troubleshooting the Pairing&lt;troubleshoot\_pair&gt; on when this
function is needed.

You can find this function by going to MONACA --&gt; Preferences.

![](images/introduction/8.png){width="429px"}

There are two ways to define the proxy server address as follows:

1.  Proxy Server with basic authentication

> ``` {.sourceCode .html}
> http://user:pass@server-host:port
> ```

2.  Proxy Server without basic authentication

> ``` {.sourceCode .html}
> http://server-host:port
> ```
