---
title: Dialogs Plugin
---

Tested Version: [1.3.3](https://github.com/apache/cordova-plugin-dialogs/releases/tag/1.3.3)

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-dialogs">}}.
{{</note>}}

This plugin provides access to some native dialog UI elements via a
global `navigator.notification` object. Although the object is attached
to the global scoped `navigator`, it is not available until after the
`deviceready` event.

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}
{{</highlight>}}

Plugin ID
---------

{{<syntax>}}
cordova-plugin-dialogs
{{</syntax>}}

Adding the Plugin in Monaca
---------------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`Notification` plugin in Monaca Cloud IDE.

Methods
-------

-   `navigator.notification.alert`
-   `navigator.notification.confirm`
-   `navigator.notification.prompt`
-   `navigator.notification.beep`

### navigator.notification.alert

Shows a custom alert or dialog box. Most Cordova implementations use a
native dialog box for this feature, but some platforms use the browser's
`alert` function, which is typically less customizable.

{{<highlight javascript>}}
navigator.notification.alert(message, alertCallback, [title], [buttonName])
{{</highlight>}}

-   **message**: Dialog message. *(String)*
-   **alertCallback**: Callback to invoke when alert dialog is
    dismissed. *(Function)*
-   **title**: Dialog title. *(String)* (Optional, defaults to `Alert`)
-   **buttonName**: Button name. *(String)* (Optional, defaults to `OK`)

#### Example

{{<highlight javascript>}}
function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
{{</highlight>}}

#### Supported Platforms

-   Android
-   iOS
-   Windows

### navigator.notification.confirm

Displays a customizable confirmation dialog box.

{{<highlight javascript>}}
navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
{{</highlight>}}

-   **message**: Dialog message. *(String)*
-   **confirmCallback**: Callback to invoke with index of button pressed
    (1, 2, or 3) or when the dialog is dismissed without a button press
    (0). *(Function)*
-   **title**: Dialog title. *(String)* (Optional, defaults to
    `Confirm`)
-   **buttonLabels**: Array of strings specifying button labels.
    *(Array)* (Optional, defaults to \[`OK,Cancel`\])

#### confirmCallback

The `confirmCallback` executes when the user presses one of the buttons
in the confirmation dialog box. The callback takes the argument
`buttonIndex` *(Number)*, which is the index of the pressed button. Note
that the index uses one-based indexing, so the value is `1`, `2`, `3`,
etc.

#### Example

{{<highlight javascript>}}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

navigator.notification.confirm(
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels
);
{{</highlight>}}

#### Supported Platforms

-   Android
-   iOS
-   Windows

#### Windows Quirks

-   On Windows8/8.1 it is not possible to add more than three buttons to
    MessageDialog instance.
-   On Windows Phone 8.1 it's not possible to show dialog with more than
    two buttons.

### navigator.notification.prompt

Displays a native dialog box that is more customizable than the
browser's `prompt` function.

{{<highlight javascript>}}
navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
{{</highlight>}}

-   **message**: Dialog message. *(String)*
-   **promptCallback**: Callback to invoke with index of button pressed
    (1, 2, or 3) or when the dialog is dismissed without a button press
    (0). *(Function)*
-   **title**: Dialog title *(String)* (Optional, defaults to `Prompt`)
-   **buttonLabels**: Array of strings specifying button labels
    *(Array)* (Optional, defaults to `["OK","Cancel"]`)
-   **defaultText**: Default textbox input value (`String`) (Optional,
    Default: empty string)

#### promptCallback

The `promptCallback` executes when the user presses one of the buttons
in the prompt dialog box. The `results` object passed to the callback
contains the following properties:

-   **buttonIndex**: The index of the pressed button. *(Number)* Note
    that the index uses one-based indexing, so the value is `1`, `2`,
    `3`, etc.
-   **input1**: The text entered in the prompt dialog box. *(String)*

#### Example

{{<highlight javascript>}}
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
{{</highlight>}}

#### Supported Platforms

-   Android
-   iOS
-   Windows

#### Android Quirks

-   Android supports a maximum of three buttons, and ignores any more
    than that.
-   On Android 3.0 and later, buttons are displayed in reverse order for
    devices that use the Holo theme.

#### Windows Quirks

-   On Windows prompt dialog is html-based due to lack of such native
    api.

### navigator.notification.beep

The device plays a beep sound.

{{<highlight javascript>}}
navigator.notification.beep(times);
{{</highlight>}}

-   **times**: The number of times to repeat the beep. *(Number)*

#### Example

{{<highlight javascript>}}
// Beep twice!
navigator.notification.beep(2);
{{</highlight>}}

#### Supported Platforms

-   Android
-   iOS

#### Android Quirks

-   Android plays the default **Notification ringtone** specified under
    the **Settings/Sound & Display** panel.

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
