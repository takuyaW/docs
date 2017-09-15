Monaca Debugger for Android
===========================

![](images/debugger_android/3.png)

> height
>
> :   250px
>
> align
>
> :   center
>
> Monaca Debugger for Android

<div class="admonition note">

Monaca Backend plugin is not included in both Monaca Debugger (store
version) and Custom Monaca Debugger.

</div>

<div class="admonition note">

If the Cordova version of your project is lower than 5.2, it might not
work properly with Monaca Debugger 5.X.X. There are two ways to fix this
issue:

1.  upgrade Cordova version &lt;changing\_cordova\_version&gt; of your
    project.
2.  use Custom Monaca Debugger &lt;custom\_debugger\_and&gt;.

</div>

Cordova Plugins
---------------

In Monaca Debugger, core and third-party Cordova plugins are
automatically included.

Monaca includes Core cordova plugins which are a minimal set of APIs
such as Battery Status, Camera, Contacts, Device and so on. For a
complete list of core Cordova plugins, please refer to
cordova\_core\_plugins.

Monaca also includes some third-party Cordova plugins such as Statusbar,
DatePicker, BarcodeScanner and so on. For a complete list of currently
included third-party Cordova plugins, please refer to
third\_party\_cordova\_index.

While developing your project, you may need to add other third-party or
custom &lt;custom\_cordova\_plugin&gt; Cordova plugins to your project.
The standard Monaca Debugger (Store Version) doesn't have these newly
added plugins. For this reason, your project might not run properly in
the debugger. Therefore, you need to use Custom Monaca Debugger. Custom
Monaca Debugger is a debugger which is built from a Monaca Project
within Monaca Cloud IDE. Please refer to custom\_debugger\_and.

USB Debugging
-------------

Monaca Debugger for Android supports USB debugging functions with Google
Chrome browser such as:

-   console debugging: using console to diplay message.
-   DOM inspection: viewing and modifying DOM structure with live
    updates.
-   JavaScript debugging: profiling JavaScript performance, setting
    breakpoint and execution control.

For more information, please refer to
USB Debugging with Monaca Debugger for Android Apps&lt;usb\_debugging\_android&gt;.

Localkit Inspector Function
---------------------------

Inspector can be used when developing either on Windows or Mac OS.

WebView
-------

Monaca Debugger for Android contains both stock and Crosswalk WebView
engines. The WebView is switched automatically depending on the type of
WebView is used in each application.

Network Install
---------------

Network Install is a feature provided by Monaca Debugger for Android
allowing you to install the built app (debug build only) using the
debugger. For more information, please refer to
how to use Network Install feature&lt;debugger\_project\_options&gt;.

Build and Install Custom Monaca Debugger
----------------------------------------

1.  From Monaca Cloud IDE menu, go to
    Debug --&gt; Setup Monaca Debugger.
2.  Select Debugger for Android --&gt; Build and Install.

> ![](images/debugger_android/1.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
3.  This may take sometimes until your building is completed. The
    following screen will appear after the build is successfully
    completed. Then, you can use the QR code to install the debugger on
    your device or download the built file to your PC.

> ![](images/debugger_android/4.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
4.  After installing the debugger on your device, sign in with your
    Monaca account. Then, tick
    I've installed Monaca Debugger and logged in and click Next.
5.  Monaca Cloud IDE will then try looking for the debugger. Once it's
    found and connected, click Run on Device to start running the
    current app in your debugger right away.

> ![](images/debugger_android/5.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >
6.  By now your app should be running in your debugger. Try testing your
    app in the debugger and making some changes in the IDE. You will be
    able to see the changes reflected in the debugger once you save the
    changes.

> ![](images/debugger_android/6.png)
>
> > width
> >
> > :   400px
> >
> > align
> >
> > :   left
> >

