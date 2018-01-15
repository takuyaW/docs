---
title: Repro (iOS only)
weight: 10
---

[Repro](https://repro.io/) is a service which provides the confirmation
of how a user handles an application by recording the user's actions.
Currently, it supports iOS only.

{{<note>}}
    This Repro service integration is available for all Monaca users. However, if you want to use the latest Repro plugin via {{<link href="https://github.com/reproio/repro-ios-sdk" title="GitHub">}}, you can {{<link href="/en/products_guide/monaca_ide/dependencies/custom_cordova_plugin/#import-custom-cordova-plugin" title="import">}} it. In order to import this plugin, you need to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

## Adding Repro Service to Monaca

1.  For Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Service Integration">}} or go
    to {{<menu menu1="Build Settings" menu2="Service Integration">}} for Monaca Localkit.
2.  Click {{<guilabel name="Details">}} button of the *Repro* service.
3.  Then, click {{<guilabel name="Install">}} button to add it into your project.

    {{<img src="/images/reference/service_integration/repro/2.png" width="500">}}

4.  You will be asked to confirm the setup. Click {{<guilabel name="OK">}} to start the
    installation.

## Configuring Repro Service in Monaca

You are required to have the app's token in order to use Repro. In order
to get the token, please do as follows:

1.  Register your app with Repro.
2.  Find the app's token by going to {{<menu menu1="Settings" menu2="Setup SDK">}}.

    {{<img src="/images/reference/service_integration/repro/4.png">}}

3.  After you get the app's token, replace it in the following snippet
    of `onDeviceReady` function. Then, add this snippet to your project.

    {{<highlight javascript>}}
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
    Repro.setup("YOUR_APP_TOKEN");
    Repro.startRecording();
}{{</highlight>}}

{{<note>}}
    For more information on how to use Repro, please refer to {{<link href="http://docs.repro.io/en/" title="Repro Documentation">}}.
{{</note>}}

## Usage

{{<note>}}
    You need to run your application on a real device for Repro to record your action.
{{</note>}}

1.  Build your Monaca app. Please refer to [Building a Monaca App for iOS](/en/tutorials/monaca_ide/building_app/#building-a-monaca-app-for-ios).
2.  Install the built app on a real device.
3.  Start using your app for a few seconds, then press `Home` button.
    Then, the recorded video will be uploaded to Repro server after your
    app go to the background.

    {{<img src="/images/reference/service_integration/repro/5.png" width="300">}}

4.  Repro will send you an email with a link to the recorded video.

## Removing Repro Service from Monaca

1.  For Monaca Cloud IDE, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}} or
    go to {{<menu menu1="Build Settings" menu2="Cordova Plugins">}} for Monaca Localkit.
2.  Look for *Repro* plugin and click {{<guilabel name="Disable">}} button.

    {{<img src="/images/reference/service_integration/repro/3.png">}}
