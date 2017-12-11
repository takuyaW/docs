---
title: Splashscreen Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-splashscreen/blob/master/RELEASENOTES.md#031-jun-05-2014">0.3.1</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-splashscreen">}}.
{{</note>}}

This plugin displays and hides a splash screen during application
launch.

Plugin ID
---------

    org.apache.cordova.splashscreen

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`org.apache.cordova.splashscreen` plugin in Monaca Cloud IDE.

Supported Platforms
-------------------

-   Android
-   iOS

Methods
-------

-   splashscreen.show
-   splashscreen.hide

### Android Quirks

In your config.xml, you need to add the following preference

`<preference name="splashscreen" value="foo" />`

Where foo is the name of the splashscreen file. Preferably a 9 patch
file. Make sure to add your splashcreen files to your res/xml directory
under the appropriate folders.

For Android, you also have to edit your projects main java file. You
must add a second parameter representing a time delay to your
super.loadUrl.

`super.loadUrl(Config.getStartUrl(), 10000);`

splashscreen.hide
-----------------

Dismiss the splash screen.

``` {.sourceCode .javascript}
navigator.splashscreen.hide();
```

### iOS Quirk

The `config.xml` file's `AutoHideSplashScreen` setting must be `false`.
To delay hiding the splash screen for two seconds, add a timer such as
the following in the `deviceready` event handler:

``` {.sourceCode .javascript}
setTimeout(function() {
    navigator.splashscreen.hide();
}, 2000);
```

splashscreen.show
-----------------

Displays the splash screen.

``` {.sourceCode .javascript}
navigator.splashscreen.show();
```

Your application cannot call `navigator.splashscreen.show()` until the
app has started and the `deviceready` event has fired. But since
typically the splash screen is meant to be visible before your app has
started, that would seem to defeat the purpose of the splash screen.
Providing some configuration in `config.xml` will automatically `show`
the splash screen immediately after your app launch and before it has
fully started and received the `deviceready` event. See [Icons and
Splash
Screens](http://cordova.apache.org/docs/en/edge/config_ref_images.md.html)
for more information on doing this configuration. For this reason, it is
unlikely you need to call `navigator.splashscreen.show()` to make the
splash screen visible for app startup.
