---
title: Console Plugin
---

# Console Plugin

Tested Version: [1.0.3](https://github.com/apache/cordova-plugin-console/releases/tag/1.0.3)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-console">}}.
{{</note>}}

This plugin is meant to ensure that console.log() is as useful as it can
be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and
Windows. This plugin defines a global `console` object.

Although the object is in the global scope, features provided by this
plugin are not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("console.log works well");
    }

Plugin ID
---------

{{<syntax>}}
cordova-plugin-console
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins) `Console`
plugin in Monaca Cloud IDE.

API Reference
-------------

### Android Quirks

On some platforms, console.log() will act on multiple arguments such as
console.log("1","2"). However, only Android ill act on the first
argument. Subsequent arguments to console.log() will be ignored because
of the limitation of Android itself.

### Supported Methods

The plugin support the following methods of the `console` object:

-   console.log
-   console.error
-   console.exception
-   console.warn
-   console.info
-   console.debug
-   console.assert
-   console.dir
-   console.dirxml
-   console.time
-   console.timeEnd
-   console.table

### Partially supported Methods

Methods of the `console` object which are implemented, but do nothing:

-   console.clear
-   console.trace
-   console.groupEnd
-   console.timeStamp
-   console.profile
-   console.profileEnd
-   console.count

### Supported formatting

The following formatting options available:

-   %j - format arg as JSON
-   %o - format arg as JSON
-   %c - format arg as ''. No color formatting could be done.
-   %% - replace with '%'.

Any other char following `%` will format its arg via `toString()`.

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
