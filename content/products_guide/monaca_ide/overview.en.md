---
title: Overview
weight: 10
---


Monaca Cloud IDE consists of 5 main parts such as:

1. [Menu Bar](#menu-bar)
2. [Project Panel](#project-panel)
3. [Debug Panel](#debug-panel)
4. [Live Preivew](#live-preview)
5. [Code Editor](#code-editor)

{{< figure src="/images/monaca_ide/manual/overview/1.png" >}}

##  Menu Bar

{{< figure src="/images/monaca_ide/manual/overview/2.png" >}}

In the menu bar, there are several main menus such as:

| Menu | Description|
|-----|-----|
| [File](#file) | Opens `File` submenu. |
| [Edit](#edit)	| Opens `Edit` submenu. |
| [View](#view)	| Opens `View` submenu. |
| [Debug](#debug) |	Opens `Debug` submenu. |
| [Build](#build) |	Opens `Build` submenu. |
| [Version Control](#version-control) | Manages version control of your project with GitHub. |
| Save | Saves the file currently openeded. If no file is opened, this function is disable. |
| [Preview](#live-preview) | Displays the `Preview` window. |
| Run on Device | Runs the current project in [Monaca Debugger](/en/products_guide/debugger/). |
| [Share](#share) |	Invites other Monaca users to join the project.
| [Config](#config) | Opens `Config` submenu. |

###  File

| Menu Item | Description|
|-----|-----|
| New File |	Creates a new file. |
| New Folder |	Creates a new folder. |
| Save |	Saves the file currently openeded. |
| Save All |	Saves all the files currently openeded. |
| Upload |	Uploads the files in the current folder. |
| Delete |	Deletes the currently selected file/folder. |
| Rename |	Renames the currently selected file/folder. |
| Open File | 	Opens the currently selected file. |
| Copy File |	Makes a copy of the currently selected file. |
| View Older Version... |	Views older versions of the currently selected file. |
| Export Project |	Exports Monaca project. |
| Publish Project |	Makes the current project public (see [Publish Project](#publish-project)). |
| Editor Configuration |	Configures the appearance of the editor. |
| Manage JS/CSS Components |	Adds/Removes JavaScript and CSS libraries to/from the current project. |
| Manage Cordova Plugins |	Adds/Removes Cordova plugins in the current project. |

###  Edit

| Menu Item | Description|
|-----|-----|
| Undo | 	Undoes the latest action. |
| Redo | 	Redoes the previous action. |
| Search |	Searches for a string in the currently opened file. |
| Search Next |	Goes to the next found string. |
| Search Previous |	Goes to the previously found string. |
| Replace |	Replaces a found string in the currently opened file. |
| Replace All |	Replaces all the found strings in the currently opened file. |
| Comment Out |	Comments out the current line. |
| Comment In |	Uncomments the current line. |

###  View

| Menu Item | Description|
|-----|-----|
| Project Tree |	Shows/Hides the project tree. |
| Maximize Editor |	Switches the ON/OFF of the editor maximization. |
| Grep |	Searches for files by using Unix command. |
| Backend |	Goes Monaca Backend settings page. |

###  Debug

| Menu Item | Description|
|-----|-----|
| Preview |	Opens Preview window. |
| Run on Device |	Runs the project on Monaca Debugger. |
| Setup Monaca Debugger | Installs the Monaca Debugger on your device. |

### Build

| Menu Item | Description|
|-----|-----|
| Build App for Android |	Builds the app for Android device. |
| Build App for iOS |	Builds the app for iOS device. |
| Build App for Windows |	Builds the app for Windows device. |
| Build History |	Shows all build history of the current project. |
| CI History |	Shows all Continuous Integration history of the current project. |

###  Version Control

| Menu Item | Description|
|-----|-----|
| Commit |	Commits local changes. |
| Push | 	Pushes local changes to remote server. |
| Pull |	Pulls remote changes. |
| Show Remote History |	Shows all commits history in remote server. |
| Show Commit History |	Shows all commits history from Monaca Cloud IDE. |
| Configure	| Configures the remote repository. |

For more information to enable vision control on your project, please refer to [Version Control](../version_control).

###  Config

| Menu Item | Description|
|-----|-----|
| Android App Settings | Configures Android app’s information (see [Configure Android App](../build/build_android/#step-1-configure-android-app)). |
| Android Key Store Settings | Configures Android’s keystore (see [Configure Android Keystore](../build/build_android/#step-2-configure-android-keystore)). |
| iOS App Settings | Configures iOS App’s information (see [Configure iOS App Settings](../build/ios/build_ios/#configure-ios-app-settings)). |
| iOS Build Settings | Configures iOS build settings (see [Configure iOS Build Settings](../build/ios/build_ios/#configure-ios-build-settings)). |
| Windows App Settings | Configures necessary information to build a Windows app (see [Configure Windows App Settings](../build/build_winrt/#step-1-configure-windows-app-settings)). |
| Manage Cordova Plugins | Enables/Disables Cordova plugins in the current project (see [Cordova Plugins](../dependencies/cordova_plugin/)). |
| Manage JS/CSS Components | Adds/Removes JavaScript and CSS libraries to/from the current project (see [JS/CSS Components](../dependencies/components/)). |
| Service Integration | Integrates various services to Monaca projects in the form of plugins (see [Service Integration](/en/reference/service_integration/)). |
| Continuous Integration | Automates building and deployment cycles (see [Monaca CI](../monaca_ci/)).|
| Deploy Service | Adds/Removes deployment services for Monaca CI (see [Deploy Services](../monaca_ci/supported_services/)). |
| Editor Configuration | Configures the appearance of code editor. |

##  Publish Project

This feature allows you to make your project available to other users by
sharing the link generated after publishing your project. By accessing
the generated link, users can get a copy of their own in their account.
All changes made in the copies are not transferred to the original, so
there will be no fear of someone messing up the original.

Publishing your project is really easy and done by following the next
simple steps:

1.  From Monaca Cloud IDE menu, go to `File` &rarr; `Publish Project`.
2.  Click on {{<guilabel name="Publish" >}} button.

    {{<img src="/images/monaca_ide/manual/overview/14.png" >}}

3.  Use the generated link to share your project.

    {{<img src="/images/monaca_ide/manual/overview/15.png" >}}

{{<note>}}
    If you no longer wish for your project to be available, you can make it private again by clicking the {{< guilabel name="Make Private">}} button that appears after publishing your project.
{{</note>}}

## Direct Import

With this feature, we allow Monaca users to directly import published
Monaca projects or projects from a given URL directly by just accessing
a link. Upon accessing the link, the users will be forwarded to the
following screen (if signed in), whereby just clicking the import button
the project will be imported into their account.

{{< figure src="/images/monaca_ide/manual/overview/16.png" >}}

##  Project Panel

In the Project panel, there are 3 main tabs:

-   *File Tree*: Displays a list of folders and files existed in the
    current project. Right-click on a folder or file to see additional
    functions such as New File, Copy, Rename, Delete, Upload File and so
    on. To edit a file, select it and then its content will be shown in
    [Monaca IDE Editor](#code-editor).
-   *Grep*: Searches for files by using Unix command.
-   *Monaca Backend*: Contains the backend settings of the project.

    {{< multi_figures title="File Tree, Grep & Backend" >}}
        {{< img src="/images/monaca_ide/manual/overview/3.png" >}}
        {{< img src="/images/monaca_ide/manual/overview/4.png" >}}
        {{< img src="/images/monaca_ide/manual/overview/5.png" >}}
    {{< /multi_figures >}}

##  Debug Panel

Once Monaca Debugger is connected with Monaca Cloud IDE, you can do
console debugging as well DOM inspection in this panel. For more
information, please refer to [Monaca Debugger with Monaca Cloud IDE](/en/products_guide/debugger/debug/#monaca-debugger-with-monaca-cloud-ide).

{{< figure src="/images/monaca_ide/manual/overview/6.png" >}}

##  Live Preview

The Live Preview provides an overview of your app in real-time. You can
also interact with this preview as if it is running on an actual device
with the limitation of executing the specific device’s functionality
(such as camera, contact and so on) and cross-origin network AJAX
request. Along with the Monaca Debugger, you will have effective and
efficient experiences during app development.

In this tab, you can:

-   refresh the Preview window.
-   change the display device's screen by clicking on the `Configure` icon
    in that tab. Then, you will see a drop-down list of different
    devices such as iPad, iPhone, and Nexus. You can change the
    orientation of the screen as well.
-   detach/attach the Preview window.

{{< figure src="/images/monaca_ide/manual/overview/7.png" >}}

###  Live Preivew Limitations

When using Live Preview, you should be aware of the the following
limitations:

-   Cordova Plugin APIs are not available.
-   Ajax requests will fail because of Cross-origin restriction.
    However, it can be done if server-side scripts return
    `Access-Control-Allow-Origin` Header (i.e., Cross-Origin Ajax
    Request is permitted).
-   Viewport appearance may differ from real devices.
-   Monaca Backend API and Push Notifications can not be initialized.

##  Share

{{<note>}}

    The usability of this function depends on your Monaca subscription plan. For more information, please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.

{{</note>}}

The *Share* function allows you to:

-   manage the team: add/remove members to the shared project.
-   share the source code with multiple people (members are assigned as
    Developers). There are 3 ways to do this such as:
    1.  The easiest way is to use Monaca Cloud's Team Management
        function. Then, two or more people can open the same project in
        different Monaca Cloud IDEs. However, if there is any conflict
        while updating the project, the previous version of the project
        will be overwritten (but it still remains in the file history).
    2.  Another way is to set up a version control system and do the
        local development using [Monaca Localkit](/en/products_guide/monaca_localkit/) or
        [Monaca CLI](/en/products_guide/monaca_cli/). This requires a higher
        skill set, but more collaborative.
    3.  The last option is to use
        [Monaca for Visual Studio](/en/products_guide/monaca_vs/). In this
        case, files can be managed by Visual Studio's built-in Team
        Explorer function. Git, TFS, Visual Studio Online and other
        supported version control system can be used in this case.
-   let multiple people to test the project (members are assigned as
    Testers).

{{<note>}}
    If you want to join a team and edit the project files, you need to subscribe to a valid plan. Otherwise, you can only join as a tester. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

You can share your project with other Monaca users. You can also
add/remove other Monaca users to/from your project. In order to manage
the members of your project, please do as follows:

1.  Click on {{<guilabel name="Share">}} button in the Menu panel.
2.  Then, the Team Member Manage screen will appear. To add a member,
    input the email(s) of your team member(s). Please enter one email
    address per line. You can also assign the role of each member as
    Developer or Tester by choosing from the drop-down menu. Then, click on
    {{<guilabel name="Add Member">}}  button to send the invitation to them.

    {{<img src="/images/monaca_ide/manual/overview/9.png" width="500">}}

3.  To remove a member from the project, you can just click on the `delete` icon at the end of the row of that member's info as shown below:

    {{<img src="/images/monaca_ide/manual/overview/10.png" width="500">}}


##  Code Editor

Views and edits the selected file from the file tree. Various settings
such as Preferences is also shown and can be edited here. Once you open
a file, you can select it from the tab.

The editor supports the syntax highlight of JavaScript/HTML5/CSS3. The
editor also supports JavaScript and CSS autocomplete function,
[Emmet (Zen Coding)](/en/products_guide/monaca_ide/code_editor/zen_coding/) and [Typescript](/en/products_guide/monaca_ide/code_editor/type_script/).

{{<note>}}
    Please refer to {{< link href="/en/products_guide/monaca_ide/code_editor/editor/" title="Editor Shortcuts">}} for the list of all shortcuts available in Monaca code editor.
{{</note>}}

{{< figure src="/images/monaca_ide/manual/overview/12.png" >}}

Inside this editor, there is also a small and short menu bar as shown
below:

{{< figure src="/images/monaca_ide/manual/overview/13.png" >}}


Within this short menu, you can:

-   go to Monaca documentation by clicking on `Help` icon.
-   config the code editor by clicking on `Setting` icon. You will see 3
    menu items such as:
    1.  View Older Versions: View older versions of the currently
        selected file.
    2.  Editor Configuration: Configure the appearance of the editor.
    3.  Editor Shortcuts: open the keyboard shortcut references.
-   search for a string inside the currently opened file.

