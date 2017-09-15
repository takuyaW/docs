IDE
===

What do I need in order to use Monaca?
--------------------------------------

In order to use Monaca Cloud IDE &lt;ide\_manual&gt;, all you need are a
stable Internet connection and a latest [Google
Chrome](https://www.google.com/chrome/) browser. You may also need to
have a smart mobile device to test your applications. To speed up your
app development, we highly recommend you to install
Monaca Debugger &lt;debugger\_manual&gt; app on your mobile device. It
allows you to test your apps instantly on your device without
building/installing everytime you make changes to the code.

Monaca users can also develop on their local computers without using
Monaca Cloud IDE. This can be done by using
Monaca Localkit &lt;monaca\_localkit\_index&gt;,
Monaca CLI &lt;monaca\_cli\_index&gt; and
Monaca for Visual Studio &lt;monaca\_vs\_index&gt;.

What knowledge required to develop mobile apps with Monaca?
-----------------------------------------------------------

Apps development with Monaca is very simple. All you need are some
knowledge of HTML5, CSS3, and JavaScript.

Why can I develop smartphone applications with Monaca even without using Java or Objective-C?
---------------------------------------------------------------------------------------------

Monaca builds on top of [Apache Cordova](http://cordova.apache.org//),
an app development framework that package your HTML5 app as a native app
that can run on Android, iOS, and other platforms. Apache Cordova also
gives you Javascript bindings to invoke native functionalities on a
mobile device. Therefore, Java (for Android) and Objective-C (for
iPhone/iPad) are not required when developing with Monaca.

Tell me about the operating systems of devices which are compatible with Monaca.
--------------------------------------------------------------------------------

Monaca is currently supporting the following operating systems:

-   Android 4 or higher
-   iOS 8 or higher
-   Windows 8.1
-   Chrome OS
-   Kindle Fire OS

How can I remove a permission for an unused feature in an Android app?
----------------------------------------------------------------------

You can control permissions of any features in an application by using
*&lt;uses-permission&gt;* element inside the `AndroidManifest.xml` file.
For more information, please refer to
../reference/config/android\_configuration.

I don't have a Mac, but can I create an iOS application?
--------------------------------------------------------

Monaca is a browser-based IDE. Therefore, as long as you have a computer
with a valid web browser (Google Chrome) and a stable Internet
connection, you can develop iOS apps with Monaca.

However, when developing iOS apps, you are required to join [Apple
Developer Program](https://developer.apple.com/programs/ios/). Moreover,
in order to publish your apps to the App Store, you need to submit your
application file (\*.ipa) via Application Loader which is only available
on a Mac.

Fortunately, it's possible to upload your application file directly from
Monaca Cloud IDE using upload\_via\_ide. In this case, you don't need a
Mac at all to either create or publish iOS apps with Monaca.

I can't open Monaca Cloud IDE.
------------------------------

Monaca Cloud IDE is fully supported on Google Chrome browser. You may be
able to open it on other browsers but various errors might happen. For
this reason, we highly recommend to only use Monaca Cloud IDE on Google
Chrome browser.

<div class="admonition note">

Monaca Cloud IDE does not support mobile browser.

</div>

Can I use my own development environment to develop Monaca apps?
----------------------------------------------------------------

Yes, you can. Monaca comes with
Monaca Localkit &lt;monaca\_localkit\_index&gt; and
Monaca CLI &lt;monaca\_cli\_index&gt; which allow you to develop locally
using your own preferred IDE or code editor.

As a Visual Studio user, can I use Visual Studio to develop Monaca apps?
------------------------------------------------------------------------

If you are familiar with Visual Studio, you can develop Monaca apps
using an extension called
Monaca for Visual Studio &lt;monaca\_vs\_index&gt;. Most of
Monaca Cloud IDE &lt;ide\_manual&gt;'s features are included in this
extension. Therefore, app development with Monaca for Visual Studio is
very similar to the one with Monaca Cloud IDE.

Application does not run on Preview panel in the IDE.
-----------------------------------------------------

When using Live Preview &lt;preview\_tab&gt;, you should be aware of the
the following limitations:

-   Cordova Plugin APIs are not available.
-   Ajax requests will fail because of Cross-origin restriction.
    However, it can be done if server-side scripts return
    "Access-Control-Allow-Origin” Header (i.e., Cross-Origin Ajax
    Request is permitted).
-   Viewport appearance may differ from real devices.
-   Monaca Backend API and Push Notifications can not be initialized.

Why I can't archive my project?
-------------------------------

Project archiving is only available for paid users. For more
information, please refer to [Pricing
page](https://monaca.io/pricing.html).

Why Live Preview can't get resource from other domain?
------------------------------------------------------

Because of [same origin
policy](http://en.wikipedia.org/wiki/Same-origin_policy) which restricts
the cross-origin resource sharing. It prevents JavaScript from making
requests across domain boundaries and has spawned various hacks for
making cross-domain requests.

How to enable Cross-Origin Resource Sharing (CORS)?
---------------------------------------------------

In order to enable Cross-Origin Resource Sharing (CORS), you just need
to add the following header into a CORS response:

``` {.sourceCode .xml}
Access-Control-Allow-Origin: *
```

Moreover, to permit a URL which your app and debugger are allowed to get
resources from, you can make configuration either using

-   Monaca IDE: for iOS&lt;ios\_config\_ide&gt; and
    for Android&lt;android\_config\_ide&gt;
-   or configuration file: for iOS&lt;access\_origin&gt; and
    for Android&lt;access\_origin\_android&gt;

Monaca Cloud IDE is not working properly.
-----------------------------------------

If Monaca Cloud IDE is not working properly, please try the following
recommendations:

1.  Use the latest version of Chrome.
2.  If you are already using the latest version of Chrome, try clearing
    the browser's cache.
3.  If you are using various extensions in Chrome, some of them may
    interrupt Monaca Cloud IDE. Therefore, please try launching Monaca
    Cloud IDE from Chrome's Incognito Window.

How to recover my keystore?
---------------------------

It is possible to recover your keystore. Please contact our [Support
team](https://monaca.io/support/technical/).

Why all of my projects disappear?
---------------------------------

Your projects may be automatically archived. This automation occurs when
a Basic (Free) plan user is inactive for more than `180` days. Several
emails will be sent to remind the user before the archiving process is
done.

In order to restore the archived projects, please subscribe to a paid
plan and ask our [Support team](https://monaca.io/support/technical/) to
restore them.

Why do I get a 200 MB limit error when uploading a plugin?
----------------------------------------------------------

Unfortunately, it's impossible to upload a plugin bigger than 200 MB on
Monaca Cloud IDE. However, it is possible to import the plugin while
building instead. In order to import the plugin while building, please
do as follows:

1.  Upload the plugin to any file hosting site. We recommend using
    GitHub.
2.  On Monaca Cloud IDE, open Import Cordova Plugin dialog.
3.  Select Specify URL or Package Name option.
4.  Input the URL of your plugin file.
5.  Click on OK.

