---
title: Monaca Development Overview
weight: 10
---

## What is Monaca?

Monaca is a development environment for smartphone and tablet applications provided by Asial Corporation. Monaca does not only provide you with a development environment at your fingertips but also allows anyone to be able to develop smartphone applications easier.

Monaca uses a hybrid approach to deliver mobile apps. It makes [hybrid mobile app](#feature_hybrid_app) development process with PhoneGap/Cordova simpler and stress-free with our comprehensive cloud-powered app development tools and services. Monaca is framework-agnostic and adaptive, ready to be immediately plugged into your existing workflow and development environment, creating the most open Cordova platform available.

## Why use Monaca?

Monaca's top 3 benefits are:

-   Cloud-Empowered Development: Our tools are designed to utilize the
    cloud to supercharge your app development in two ways. The complete
    cloud development environment gives you flexibility with no setup
    required. And the cloud-synced local development enables you to use
    your own environment but enjoy features like device live-sync and
    remote build. It’s the best of both worlds.
-   Mix-and-Match as You Like: We’ve got you covered all the way from
    design, app development, backend development, testing & debugging to
    build & distribution. Monaca can be used as a whole or a piece,
    working with your favorite tools like Sublime Text or Git. Just pick
    what you need. We will seamlessly plug into your workflow.
-   Framework Agnostic: Our open source Angular-driven [Onsen
    Framework](http://onsen.io/) is tightly integrated with Monaca
    tools. However, you can use whatever framework you want. Ionic or
    PhoneGap developers, for example, can seamlessly use our [Monaca CLI](/en/monaca_cli/) to take advantages of the
    cloud-powered services without switching or any complicated porting.
    We take OPEN seriously.

## Monaca Development Tools

For your flexibility and convenience during app development process,
Monaca provides four different development environments as shown in the
following subsections.

### Monaca Cloud IDE

Monaca Cloud IDE provides a browser-based development environment as a
service. Right from your Web browser, all of your Cordova development is
done without any setup. Along with the [Monaca Debugger](#monaca_debugger_intro), Live
Preview (built-in function in Monaca Cloud IDE) allows you to easily
check the progress of your apps during development. Noticeably, there
are neither Cordova plugins nor native functions in Live Preview.
Therefore, the app required those plugins and functions can't be
previewed properly. [Read more](/en/monaca_ide/).

{{< figure src="/images/monaca_intro/1.png" title="Overview of Monaca Cloud IDE" >}}

### Monaca Localkit

Monaca Localkit is a local environment development support tool offered
through our app development platform, “Monaca”. You can achieve better
security and peace-of-mind from your own app development environment by
combining existing tools such as code editors and version management
system, with the versatile development support capabilities of Monaca.
With Monaca Localkit, Monaca users are able to setup their preferred
development environment on local PC. [Read more](/en/monaca_localkit/).

{{< figure src="/images/monaca_intro/5.png" title="Overview of Monaca Localkit" >}}


### Monaca CLI

Monaca CLI provides command line interface to use Monaca Cloud. It
features the debugger connection, inspector integration, project
creation and remote building. You can also import projects that exist in
the cloud when you want to switch your environment to local. [Read more](/en/monaca_cli/).


### Monaca for Visual Studio

Monaca for Visual Studio is another local development tool provided by
Monaca. With this tool, Monaca users are able to develop an app using
Visual Studio as the development environment. It’s free if you are a
Visual Studio Community user. [Read more](/en/monaca_vs/).


{{< figure src="/images/monaca_intro/vs.png" title="Overview of Monaca for Visual Studio" >}}


## <a name="monaca_debugger_intro"></a>Monaca Debugger

On top of the flexibility in the development environment, Monaca also
provides high development efficiency by using Monaca Debugger. Monaca
Debugger is an application used to test and debug your Monaca
applications on real devices without building the applications during
the development. It needs to be installed on your mobile devices. The
app will automatically sync all your development projects and run them
without the build process. [Read more](/en/debugger/).


{{< figure src="/images/monaca_intro/2.png" title="Monaca Debugger App" width="350">}}


Here is a table summarizing the debugging options between Monaca
Debugger and Monaca development tools. For more information, please
refer to [Debugging Monaca Apps](/en/debugger/manual/debug/).


<table class="small">
    <tr>
        <th width="22%">Monaca Development Tools</th>
        <th>Monaca Cloud IDE</th>
        <th width="38%">Monaca CLI/Monaca Localkit/Monaca for Visual Studio</th>
    </tr>
    <tr>
        <td><b>Requirement</b></td>
        <td>Internet connection</td>
        <td>Internet connection and pairing</td>
    </tr>
    <tr>
        <td><b>Monaca Debug Panel</b></td>
        <td>The OS of your device and PC isn’t a problem. You can use this debug option whether you have a Mac/Windows and your device can either be an iOS or Android.</td>
        <td>Not available</td>
    </tr>
    <tr>
        <td><b>USB Debugging</b></td>
        <td colspan="2">If you have an iOS device, you need a Mac because Safari (Safari remote debugging) is only available on Mac. If you have an Android device, you can use either a Mac/Windows as long as you have a Chrome Browser (Chrome DevTools).</td>
    </tr>
</table>

{{< figure src="/images/monaca_intro/6.png" title="Relationship between Monaca Debugger and Monaca Development Tools" >}}


## Monaca Registration Plan

Monaca provides various account types to match with your needs ranging
from basic (FREE) to enterprise plan. After registration, your default
account has a basic plan. You can upgrade it later when you want. For
detailed information of Monaca account types and theirs usages, please
refer to [Monaca Pricing](https://monaca.io/pricing.html).

### Monthly Plans

- Free trial for the first 14 days
- You can switch to another monthly plan in the trial period for free. But the trial period will not be extended.
- 14 days after the subscription, you will be charged unless you switch to Basic plan. The first charge is calculated on a daily basis.
- After that, you will be charged monthly price on every first day of the month.

### Annual Plans

-   There is no trial period for annual plans.
-   You will be charged annual price when starting the subscription.
-   Your next charge will be on the first day of the 13th month after
    your admission unless you switch to Basic plan. For example, you
    subscribe to annual plan on July 20th, 2016. Then, your next charge
    will be on August 1st, 2017.

If you use Activation Code:

-   If you want to upgrade plan or extend the expiration date, please
    contact us with preferred plan name and term of months.
-   On the expiration date, your plan will be switched to Basic
    automatically.


<a name="feature_hybrid_app">*Features/Structure of Hybrid Apps*</a>

Characteristics of hybrid apps:

-   The apps consist of the Web and native characteristics. (See the
    picture below)
-   Regardless of operating systems, it will run on a browser component
    (cross-platform support). In other words, hybrid apps can run on
    iOS, Android, and other supported platforms, since it runs on
    WebView component of those platforms. Therefore, one source code can
    run on multiple supported platforms.

{{< figure src="/images/monaca_intro/4.png" title="Differences between Native, Hybrid, and Web Apps">}}


Required knowledge for hybrid app development:

* HTML and CSS for UI (User Interface) design
* JavaScript for implementing the app
* JavaScript libraries for accessing the native functions of a device and additional plugins

{{< note >}}
    iOS/Android apps run on Cordova and use <a href="http://phonegap.com/">PhoneGap</a>, a JavaScript library, to access native functions of a device. Windows apps run on Windows runtime while Chrome apps run on Chrome runtime.
{{< /note >}}


See also:

- [Project Dependencies](/en/monaca_ide/manual/dependencies)
- [Monaca IDE](/en/monaca_ide)
- [Monaca Debugger](/en/debugger)