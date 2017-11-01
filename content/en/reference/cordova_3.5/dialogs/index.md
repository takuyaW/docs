---
title: Dialogs Plugin
---

# Dialogs Plugin

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-dialogs/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-dialogs">}}.
{{</note>}}

This plugin provides access to some native dialog UI elements.

Plugin ID
---------

    org.apache.cordova.dialogs

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/monaca_ide/manual/dependencies/cordova_plugin/#add-plugins)
`Notification` plugin in Monaca Cloud IDE.

Methods
-------

-   `navigator.notification.alert`
-   `navigator.notification.confirm`
-   `navigator.notification.prompt`
-   `navigator.notification.beep`

navigator.notification.alert
----------------------------

Shows a custom alert or dialog box. Most Cordova implementations use a
native dialog box for this feature, but some platforms use the browser's
`alert` function, which is typically less customizable.

``` {.sourceCode .javascript}
navigator.notification.alert(message, alertCallback, [title], [buttonName])
```

-   **message**: Dialog message. *(String)*
-   **alertCallback**: Callback to invoke when alert dialog is
    dismissed. *(Function)*
-   **title**: Dialog title. *(String)* (Optional, defaults to `Alert`)
-   **buttonName**: Button name. *(String)* (Optional, defaults to `OK`)

### Example

``` {.sourceCode .javascript}
function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
```

### Supported Platforms

-   Android
-   iOS

### Windows Phone 7 and 8 Quirks

-   There is no built-in browser alert, but you can bind one as follows
    to call `alert()` in the global scope:

    ``` {.sourceCode .javascript}
    window.alert = navigator.notification.alert;
    ```

-   Both `alert` and `confirm` are non-blocking calls, results of which
    are only available asynchronously.

navigator.notification.confirm
------------------------------

Displays a customizable confirmation dialog box.

``` {.sourceCode .javascript}
navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
```

-   **message**: Dialog message. *(String)*
-   **confirmCallback**: Callback to invoke with index of button pressed
    (1, 2, or 3) or when the dialog is dismissed without a button press
    (0). *(Function)*
-   **title**: Dialog title. *(String)* (Optional, defaults to
    `Confirm`)
-   **buttonLabels**: Array of strings specifying button labels.
    *(Array)* (Optional, defaults to \[`OK,Cancel`\])

### confirmCallback

The `confirmCallback` executes when the user presses one of the buttons
in the confirmation dialog box.

The callback takes the argument `buttonIndex` *(Number)*, which is the
index of the pressed button. Note that the index uses one-based
indexing, so the value is `1`, `2`, `3`, etc.

### Example

``` {.sourceCode .javascript}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

navigator.notification.confirm(
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
);
```

### Supported Platforms

-   Android
-   iOS

navigator.notification.prompt
-----------------------------

Displays a native dialog box that is more customizable than the
browser's `prompt` function.

``` {.sourceCode .javascript}
navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
```

-   **message**: Dialog message. *(String)*
-   **promptCallback**: Callback to invoke when a button is pressed.
    *(Function)*
-   **title**: Dialog title *(String)* (Optional, defaults to `Prompt`)
-   **buttonLabels**: Array of strings specifying button labels
    *(Array)* (Optional, defaults to `["OK","Cancel"]`)
-   **defaultText**: Default textbox input value (`String`) (Optional,
    Default: empty string)

### promptCallback

The `promptCallback` executes when the user presses one of the buttons
in the prompt dialog box. The `results` object passed to the callback
contains the following properties:

-   **buttonIndex**: The index of the pressed button. *(Number)* Note
    that the index uses one-based indexing, so the value is `1`, `2`,
    `3`, etc.
-   **input1**: The text entered in the prompt dialog box. *(String)*

### Example

``` {.sourceCode .javascript}
function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

navigator.notification.prompt(
    'Please enter your name',  // message
    onPrompt,                  // callback to invoke
    'Registration',            // title
    ['Ok','Exit'],             // buttonLabels
    'Jane Doe'                 // defaultText
);
```

### Supported Platforms

-   Android
-   iOS

### Android Quirks

-   Android supports a maximum of three buttons, and ignores any more
    than that.
-   On Android 3.0 and later, buttons are displayed in reverse order for
    devices that use the Holo theme.

navigator.notification.beep
---------------------------

The device plays a beep sound.

``` {.sourceCode .javascript}
navigator.notification.beep(times);
```

-   **times**: The number of times to repeat the beep. *(Number)*

### Example

``` {.sourceCode .javascript}
// Beep twice!
navigator.notification.beep(2);
```

### Supported Platforms

-   Android
-   iOS

### Android Quirks

-   Android plays the default **Notification ringtone** specified under
    the **Settings/Sound & Display** panel.

