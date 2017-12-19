---
title: Overview
weight: 10
---

## Introduction

Monaca Localkit is a tool to support local development environment for
Monaca apps. You can use it with various development tools including
editors, source code management system, task runner and so on. Monaca
Localkit allows you to develop offline with a faster synchronization
with Monaca debugger.

Monaca Localkit can accelerate your app development process because it
provides the following functions:

-   Create and import Cordova project. You can create a new project
    based on templates provided by Monaca. Moreover, you can import
    either a Monaca project from Monaca Cloud IDE or an existing Cordova
    project.
-   Live reload of the project. By pairing with Monaca Debugger, you can
    run your project instantly on your device. All changes made to the
    source code of the project will be updated immediately after those
    changes are saved.
-   Integrate with Chrome DevTools. By connecting your device (running
    Monaca Debugger) to the host PC (running Monaca Localkit) via USB
    cable, you can debug your app using Chrome DevTools. With Chrome
    DevTools, you can set breakpoints, and implement JavaScript
    debugging and app inspection.
-   Remote build. Monaca Localkit allows you to build your app for
    various platforms with support from Monaca server.

{{<note>}}
    Please remember that the projects you have in Monaca Cloud IDE and Monaca Localkit are not synchronized. They are completely separated. However, you can {{<link href="#localkit-import" title="import projects from Monaca Cloud IDE to Monaca Localkit">}}.
{{</note>}}

{{<note>}}
    You are required to have a valid plan in order to use Monaca Localkit. Otherwise, Monaca Localkit will run in an evaluation mode for 30 days after the first login. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}} for more details of each Monaca plan.
{{</note>}}

{{<warning>}}
    Please note that {{<link href="/en/products_guide/backend" title="Monaca Backend">}} as well as {{<link href="/en/products_guide/push_notification" title="Push Notification">}} are currently not available in Monaca Localkit yet.
{{</warning>}}

## Installation and Setup

Before getting started, you need to install Monaca Localkit on the computer and [Monaca Debugger](/en/products_guide/debugger) on the device(s).

1. Download the latest version of Monaca Localkit [here](https://monaca.io/localkit.html). Please refer to [GitHub release page](https://github.com/monaca/Localkit/releases) for change logs.
2. Install Monaca Debugger as described in [Debugger Installation](/en/products_guide/debugger/installation).

## Usage

### Starting Monaca Localkit

1.  Open Monaca Localkit and then sign in using Monaca account.

    {{<img src="/images/monaca_localkit/manual/overview/1.png">}}

2.  After a successful login, Monaca Localkit dashboard will appear.

    {{<img src="/images/monaca_localkit/manual/overview/2.png">}}

### Creating a New Project

You can create a new project based on templates provided by Monaca.

1.  From Monaca Localkit dashboard, click on {{<guilabel name="+">}} button. Then, click
    {{<guilabel name="Create">}} button.

    {{<img src="/images/monaca_localkit/manual/overview/3.png">}}

2.  Fill in the necessary information such as:

    -   `Project Name`: create a name to represent your new project which will be shown in the project list.
    -   `Working Directory`: specify a directory where you want to keep your project files.
    -   `Select Category`: choose a template category for your new project.
    -   `Select Template`: choose a template for your new project. Please use {{<guilabel name="Preview">}} button to see how each template looks like.

    {{<img src="/images/monaca_localkit/manual/overview/4.png">}}

3.  If the project is created successfully, the new project will be
    shown in the project list.

###  Importing a Project

There are two types of projects you can import into Monaca Localkit:

1.  `From Cloud IDE`: projects you have in your Monaca Cloud IDE.
2.  `From Local Cordova Project`: Cordova projects you have on your PC.
    There some limitations while importing Cordova projects such as:

    -   App icons and splash images may not be imported. They can be configured on Build Config screen.
    -   The scripts in hooks directory are ignored.
    -   Platform specific codes including Cordova are not imported. Monaca will use its own Cordova and surrounded libraries.

3.  `From Zip File`: the zip file of a valid project.

In order to import a project into Monaca Localkit, please do as follows:

1.  From Monaca Localkit dashboard, click on {{<guilabel name="+">}} button on the top right
    corner of the left panel. Then, click {{<guilabel name="Import">}} button. Then, choose
    which option you want to import Monaca project.
2.  If you choose `From Cloud IDE` option, fill in the necessary
    information such as:

    -   `Select Project`: select a project from a list of all projects you have in Monaca Cloud IDE.
    -   `Working Directory`: specify a directory where you want to keep your project files.

    {{<img src="/images/monaca_localkit/manual/overview/6.png">}}

3.  On the other hand, if you choose `From Local Cordova Project` option,
    fill in the necessary information such as:

    -   `Working Directory`: specify a directory where you want to keep your project files.
    -   `Project Name`: create a name to represent your new project which will be shown in the project list.

    {{<img src="/images/monaca_localkit/manual/overview/7.png">}}

4.  Finally, if you choose `From Zip File` option, fill in the necessary
    information such as:

    -   `Zip File`: browse the zip file of your project.
    -   `Project Name`: create a name to represent your new project which will be shown in the project list.
    -   `Working Directory`: specify a directory where you want to keep your project files.

    {{<img src="/images/monaca_localkit/manual/overview/13.png">}}

5.  After that, the new project will be shown in the project list.

### Adding Editor Program for Local Projects

Monaca Localkit provides an `Open in` feature which is used to open your
local project files in different ways such as:

-   Finder/File Explorer: This will reveal the selected project's folder
    in Finder (for Mac) or File Explorer (for Windows).
-   Terminal/Command Prompt: This will open the selected project's
    folder in Terminal (for Mac) or Command Prompt for (Windows).
-   Other editor programs: You can also add any preferred editors to
    open your local project files from Monaca Localkit.

In order to add an editor program to Monaca Localkit, please do as
follows:

1.  In Monaca Localkit, select a project.
2.  Click on {{<guilabel name="Open in...">}} button and select {{<guilabel name="Add More Program...">}}.

    {{<img src="/images/monaca_localkit/manual/overview/8.png">}}

3.  Then, `Add Editor Application` dialog will appear. Fill in the
    necessary information related to the editor program such as:

    -   `Application Path`: browse the editor execution file (`.app` file for Mac or `.exe` file for Windows).
    -   `Application Name`: name the selected editor program. It will be shown in the list of programs when you click {{<guilabel name="Open in...">}}.
    -   `Command-line Arguments`: applicable arguments for the selected editor program. Currently, two command line parameters are available such as `%d` (Project File Path) and `%p` (Project Name).

    {{<img src="/images/monaca_localkit/manual/overview/9.png">}}

4.  Click {{<guilabel name="OK">}}. Now, the new editor program should appear in the `Open in`
    list as shown below:

    {{<img src="/images/monaca_localkit/manual/overview/10.png">}}

### Transpile Process Management

Some of the modern frameworks have created their own languages in order
to interact with their products (like JSX), or have just integrated some
extensions that are not natively available in JavaScript (for example
TypeScript). The transpiling process transforms the code written with
those languages to a native JavaScript code ready to be executed on
modern browsers/WebViews. We currently use WebPack to perform the
transpiling operations.

One of the biggest issues in the Localkit transpiling environment has
been the inability to control the transpiling process management. For
example, when a user selected a transpilable project, the transpiler was
automatically triggered every time a change was made on that project.

We realize this may bring issues on outdated hardware, that’s why we
decide to allow you to choose when to enable the automatic transpiling
or pause it. You can freely manage it with the switch related to
`Enable automatic transpiling` option, the settings are persistent and
related to each project. The status of the automatic transpiling can
also be checked in the `Transpiler` tabbar element.

{{<figure src="/images/monaca_localkit/manual/overview/14.png">}}

{{<note>}}
    The only case in which we force to execute a transpiling operation is when the developer performs an upload operation to Monaca Cloud because it’s the only way to assure content consistency.
{{</note>}}

#### *Transpiler Console*

It is important that you can constantly check the transpiling process
log as it can help you to spot issues related to your project in
real-time. Previously, the transpiling process log was not user-friendly
because the user needs to manually configure the log settings. That’s
why we decided to integrate a Console directly on Localkit, in which you
will be able to follow the progression of the whole transpiling process.

The displayed information includes:

-   Transpiling status
-   Creation of a new transpiling process with relative PID
-   Information related to the transpiling process Kill operation
-   Transpiling settings management and so on

Moreover, the Console can be easily resized and hidden, in case the
developer is not interested in displaying the generated log.

#### *Transpiler Reconfiguration*

A new `Reconfigure Transpiler` option has been implemented. We know that
situations in which your global transpiling dependencies have been
“mysteriously” deleted may occur, that’s why we decided to provide an
option to reconfigure them in the easiest way possible.

From now on, if the transpiling process fails because of some global
dependencies missing, just push the reconfigure button and Localkit will
do all the magic!

###  Preference Dialog

1.  From Monaca Localkit menu, go to {{<guilabel name="Preferences">}} (for Mac) or go to {{<menu menu1="File" menu2="Preferences">}} (for Windows).

    {{<img src="/images/monaca_localkit/manual/overview/11.png">}}

2.  In this `Preferences` dialog, you can do the following settings:

    -   `Working Directory`: specify a default location to store your local projects.
    -   `Listening Port`: specify a port number to be used when pairing Monaca Localkit with Monaca Debugger.
    -   `Proxy Server`: specify a proxy server.
    -   `Log Output`: specify where you want to store a log file.

    {{<img src="/images/monaca_localkit/manual/overview/12.png">}}

3.  Save the settings.


See Also:

- [Monaca Localkit Tutorial](../tutorial)
- [Pairing and Debugging](../pairing_debugging)
- [Remote Building and Publishing](../build_publish)
- [Troubleshooting Guide](../troubleshooting)
