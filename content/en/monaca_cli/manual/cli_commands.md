Monaca CLI Commands
===================

> widths
>
> :   10 30
>
> header-rows
>
> :   1
>
> -   -   Commands
>
>     - Description
> -   -   monaca\_login
>
>     - Sign in to Monaca Cloud.
> -   -   monaca\_logout
>
>     - Sign out from Monaca Cloud.
> -   -   monaca\_signup
>
>     - Register a new Monaca account.
> -   -   monaca\_create
>
>     - Create a new local Monaca project from a template.
> -   -   monaca\_clone
>
>     - Clone a project from Monaca Cloud.
> -   -   monaca\_import
>
>     - Import a project from Monaca Cloud.
> -   -   monaca\_download
>
>     - Download a project from Monaca Cloud.
> -   -   monaca\_upload
>
>     - Upload a project to Monaca Cloud.
> -   -   monaca\_remote\_build
>
>     - Build a project on Monaca Cloud.
> -   -   monaca\_preview
>
>     - Run a local web server for preview
> -   -   monaca\_demo
>
>     - Display the app appereance on iOS and Android.
> -   -   monaca\_debug
>
>     - Run app on device using Monaca Debugger.
> -   -   monaca\_transpile
>
>     - Transpile project source code.
> -   -   monaca\_config
>
>     - Manage Monaca CLI configuration.
> -   -   monaca\_reconfigure
>
>     - Generate default project configurations.
> -   -   monaca\_plugin
>
>     - Manage Cordova plugins of a project.
> -   -   monaca\_docs
>     -   Display docs for Monaca CLI, Onsen UI and Tutorials.
>
monaca login
------------

Signs in to Monaca Cloud. You will be prompted to input your Monaca
account information (username and password).

\$ monaca login \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `email`
    >     -   Email address used to login to Monaca Cloud.
    >
Example

:   Here is an example of how to login to Monaca Cloud with Monaca CLI:

    ``` {.sourceCode .bash}
    $ monaca login
    $ monaca login me@monaca.io
    $ echo "mypass" | monaca login me@monaca.io
    ```

monaca logout
-------------

Signs out from Monaca Cloud and removes stored login token.

\$ monaca logout

Example

:   Here is an example of how you logout from Monaca Cloud with Monaca
    CLI:

    ``` {.sourceCode .bash}
    $ monaca logout
    Signing out from Monaca Cloud...
    You have been signed out.
    Removed Monaca Debugger pairing information.
    ```

monaca signup
-------------

Signs up for Monaca Cloud. Will display a prompt that asks for user
credentials.

\$ monaca signup \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `email`
    >     -   Email address used to register in Monaca
    >
Example

:   Here is an example of how you use this command:

    ``` {.sourceCode .bash}
    $ monaca signup
    $ monaca signup me@monaca.io
    ```

monaca create
-------------

Creates a new local Monaca project from a template at a specified path.
You will be asked to choose a project template from a list of available
templates provided by Monaca Cloud. The selected template will be
created at the specified location.

\$ monaca create \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `path`
    >
    >     - Location where you want to store your project files
    > -   -   `--url`
    >     -   URL of a zip file containing a Monaca template
    >
Example

:   Here is an example of how to login to Monaca Cloud with Monaca CLI:

    ``` {.sourceCode .bash}
    $ monaca create MyProject/Demo
    $ monaca create MyProject/Demo --url http://github.com/me/myproject/archive/master.zip
    ```

monaca clone
------------

Clones a project from the Monaca Cloud into your local PC at a specified
location. You will be asked to select a project from a list of all your
existing projects in Monaca Cloud and specify a location for the
downloaded project.

<div class="admonition note">

If you clone a project into your local PC from Monaca Cloud, the cloned
project keeps cloud synced information. In other words, if you make
changes to this project locally and upload (using monaca\_upload) them
to Monaca Cloud, they will overwrite older files of the same project.

</div>

\$ monaca clone

Example

:   Here is an example of how to clone a project called
    `Memo Application` from Monaca Cloud into "CloneMemoProject" folder
    on your local PC.

    ![](images/cli_commands/clone.png){width="600px"}

monaca import
-------------

Imports a project from Monaca Cloud. You will be asked to select a
project from a list of all your existing projects in Monaca Cloud and
specify a location for the downloaded project.

<div class="admonition note">

If you import a project into your local PC from Monaca Cloud, the
imported project doesn't keep cloud synced information. In other words,
if you make changes to this project locally and upload (using
monaca\_upload) them to Monaca Cloud, this project will be uploaded as a
new project in Monaca Cloud.

</div>

\$ monaca import

Example

:   Here is an example of how to import a project called
    `Memo Application` from Monaca Cloud into "ImportedMemoApplication"
    folder on your local PC.

    ![](images/cli_commands/import.png){width="600px"}

monaca download
---------------

Downloads updates/changes (of the corresponding synced project) made in
Monaca Cloud into the local project.

<div class="admonition note">

This command will overwrite the changes into the local project. If your
local project does not exist in Monaca Cloud, you can't use this
command.

</div>

\$ monaca download \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `--delete`
    >
    >     - Deletes local files which do not exist in Monaca Cloud.
    > -   -   `--force`
    >
    >     - Doesn't ask users for permission to continue.
    > -   -   `--dry-run`
    >     -   Simulates the downloading operation and provides details
    >         of which files will be downloaded. No actual downloading
    >         operation is done.
    >
Example

:   Navigate to your project folder. Then, type `monaca download`
    command with various options and see how it works.

    ![](images/cli_commands/download.png){width="600px"}

monaca upload
-------------

Uploads the current project files to Monaca Cloud. The project files
will be compared with the corresponding remote files so that only the
new and changed ones will be uploaded. The uploading process will be
done in one of the following ways:

1.  If the current project is a new/imported project, this command will
    upload the whole project as a new project in Monaca Cloud.
2.  If the current project is a cloned project, this command will
    overwrite the same existing project in Monaca Cloud. In other words,
    only changed and new files will be uploaded.

<div class="admonition note">

For ReactJS and Angular2 projects, `monaca upload` command will
transpile the project before uploading them.

</div>

\$ monaca upload \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `--delete`
    >
    >     - Deletes the project files in Monaca Cloud which do not exist
    >     locally.
    > -   -   `--force`
    >
    >     - Doesn't ask users for permission to continue the uploading
    >     process.
    > -   -   `--dry-run`
    >     -   Simulates the uploading operation and provides details of
    >         which files will be uploaded. No actual uploading
    >         operation is done.
    >
Example

:   Navigate to your project folder. Then, type `monaca upload` command
    with various options and see how it works.

    ![](images/cli_commands/upload.png){width="600px"}

monaca remote build
-------------------

Builds the project in Monaca Cloud. If your project does not exist in
Monaca Cloud yet, it will be automatically uploaded to the cloud first
before the build starts. However, if your project already exists in
Monaca Cloud, all its local updates/changes will be uploaded to the
cloud first before the build starts.

Please refer to build\_index for more information on how to:

-   config build settings for each platform
-   types of build
-   build the application for each platform
-   get/install the built apps

\$ monaca remote build &lt;platform&gt; \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `platform`
    >
    >     - Builds for a specific platform. It can be: `ios`, `android`
    >     or `windows`.
    > -   -   `--build-type`
    >
    >     - Chooses a build type. It can be:
    >
    >     > -   `debug` (for iOS, Android and Windows) It is the default
    >     >     option.
    >     > -   `test` (for iOS only)
    >     > -   `release` (for iOS and Android)
    >
    > -   -   `--output`
    >
    >     - The path in which the built file will be stored (including
    >     the filename)
    > -   -   `--android_webview`
    >
    >     - (Android only) Chooses a type of webview. It can be:
    >     `default` or `crosswalk`.
    > -   -   `--android_arch`
    >
    >     - (Android only) Required if `--android_webview` is
    >     `crosswalk`. It can be: `x86` or `arm`.
    > -   -   `--browser`
    >     -   Opens the build process in a browser (see the screenshots
    >         below).
    >
Example

:   Navigate to your project folder and try to use this command with
    different options:

    ``` {.sourceCode .bash}
    $ monaca remote build ios
    $ monaca remote build ios --build-type=debug
    $ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
    $ monaca remote build --browser
    ```

![](images/cli_commands/build_window.png)

> width
>
> :   700px
>
> align
>
> :   center
>
monaca preview
--------------

Starts a local web server that serves the `www` assets. The command will
watch the file system for changes and reload the browser when a change
occurs.

<div class="admonition note">

For ReactJS and Angular2 projects, `monaca preview` command will
transpile the project in memory before launching the previewer.
Additionally, if the preview is still running and you make a change, the
transpile process should be triggered and the previewer will be served
with the new files.

</div>

\$ monaca preview \[options\]

Options:

:   ---------------- ------------------------------------------------------
      `--port`, `-p`   HTTP port to listen to (default value is 8000)
      `--no-open`      Starts a local web server without opening a browser.
      ---------------- ------------------------------------------------------

Example

:   Navigate to your project folder and use `monaca preview` command.
    Then, a browser will be opened running your project.

    ![](images/cli_commands/preview.png)

    > width
    >
    > :   600px
    >
    > align
    >
    > :   left
    >
    ![](images/cli_commands/preview_window.png)

    > width
    >
    > :   600px
    >
    > align
    >
    > :   left
    >
    > Preview Window

    <div class="admonition note">

    In order to stop `monaca preview` process, press Ctrl+c.

    </div>

monaca demo
-----------

Starts a local web server that serves the `www` assets on special views
for Android and iOS simultaneously. The file-system is watched for
changes and the browser is reloaded when a change occurs.

\$ monaca demo \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `--port`, `-p`
    >     -   Port number (default is 8000)
    >
Example

:   Navigate to your project folder and use `monaca demo` command. Then,
    a browser will be opened running your project.

    ``` {.sourceCode .bash}
    $ monaca demo
    $ monaca demo -p 8001
    ```

![](images/cli_commands/monaca_demo.png)

> width
>
> :   700px
>
> align
>
> :   center
>
monaca debug
------------

Debugs one or more applications on a device and receives code changes
instantly. This command starts a web server for Monaca Debugger to
connect to. It also starts broadcasting messages to tell debuggers in
the local network to connect to it. When a debugger is connected, it
will send file system changes to the debugger.

<div class="admonition note">

For ReactJS and Angular2 projects, `monaca debug` command will transpile
the project before serving the files to Monaca Debugger. Additionally,
if the debug is still running and you make a change, the transpile
process should be triggered and the debugger will be served with the new
files.

</div>

\$ monaca debug \[options\]

Options:

:   ---------- --------------------------------------------------------------
      `paths`    List of directories. Omit it to serve the current directory.
      `--port`   HTTP port to listen to (default value is 8001)
      ---------- --------------------------------------------------------------

Example

:   Navigate to your project folder and use `monaca debug` command.
    Then, you should be able to see that project name in Monaca Debugger
    under *Local Projects* section. Click on that project in order to
    run it. Please try to make some changes to the project and save
    them. You should be able to see those changes reflect instantly.

    ``` {.sourceCode .bash}
    $ cd MyProjectFolder/ImportRssProject
    $ monaca debug
    ```

    When running this command, you should be prompted to pair your
    debugger with your local PC or see the notification of successful
    network connection (see the screenshots). Otherwise, please refer to
    troubleshoot\_pair.

    ![](images/cli_commands/1.png)

    > width
    >
    > :   250px
    >
    > align
    >
    > :   left
    >
    > Pairing Dialog

    ![](images/cli_commands/2.png)

    > width
    >
    > :   250px
    >
    > align
    >
    > :   left
    >
    > Network Connection Notification

<div class="admonition note">

In order to stop `monaca debug` process, press Ctrl+c.

</div>

monaca transpile
----------------

Transpiles projects that are transpilable such as ReactJS and Angular2
projects. For transpilable projects, the transpiling process is
automatically included in some commands such as `monaca upload`,
`monaca preview`, `monaca debug` and `monaca remote build`.

\$ monaca transpile \[options\]

Options

:   
    >
    > widths
    >
    > :   20 30
    >
    > -   -   `--generate-config`
    >
    >     - Creates transpile configuration files for transpilable
    >     projects, in case they are missing.
    > -   -   `--install-dependencies`
    >     -   Installs the missing dependencies needed for transpiling.
    >
Example

:   Navigate to your transpilable project folder and use
    `monaca transpile` command. Then, the transpiling will begin.

    ``` {.sourceCode .bash}
    $ monaca transpile

    Running Transpiler...
    Build completed in 71.835s

    ....
    ```

monaca config
-------------

Manages proxy and API endpoint configuration.

\$ monaca config \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `proxy <url>`
    >
    >     - If &lt;url&gt; is not set, the current proxy server will be
    >     displayed.
    > -   -   `endpoint <url>`
    >
    >     - If &lt;url&gt; is not set, the current API endpoint will be
    >     displayed.
    > -   -   `--help`
    >
    >     - Displays a config helper.
    > -   -   `--reset`
    >     -   Resets to the default value.
    >
Example

:   Here are examples of how to use this command:

    ``` {.sourceCode .bash}
    $ monaca config --help
    $ monaca config proxy
    $ monaca config proxy http://my.proxy.com:8080
    $ monaca config proxy --reset

    $ monaca config endpoint
    $ monaca config endpoint my.endpoint.com
    $ monaca config endpoint --reset
    ```

monaca reconfigure
------------------

Generates default project configurations and files. Running it without
arguments will generate everything.

\$ monaca reconfigure \[options\]

Options:

:   ------------------ ------------------------------------------------------------------
      `--transpile`      Generates transpile configuration files (for both dev and prod).
      `--dependencies`   Installs required build dependencies.
      `--components`     Generates `components` folder.
      ------------------ ------------------------------------------------------------------

Example

:   Navigate to your transpilable project folder and try
    `monaca reconfigure` command with various parameters.

    ``` {.sourceCode .bash}
    $ monaca reconfigure
    $ monaca reconfigure --transpile --components
    ```

monaca plugin
-------------

Manages plugins of a project such as adding new plugins, listing and
removing installed plugins.

\$ monaca plugin \[options\]

Options

:   ------------------ ------------------------------------
      `add <plugin>`     Adds a plugin.
      `rm <plugin>`      Removes a plugin.
      `ls|list`          Lists currently installed plugins.
      `search <query>`   Searches the plugin directory.
      ------------------ ------------------------------------

Example

:   Navigate to your project folder and type the command below and see
    how it works:

    ``` {.sourceCode .bash}
    $ monaca plugin add org.apache.cordova.camera
    $ monaca plugin rm org.apache.cordova.camera
    $ monaca plugin search keyboard
    $ monaca plugin ls
    ```

monaca docs
-----------

Displays docs for Monaca CLI, Onsen UI and Tutorials.

\$ monaca docs \[options\]

Options

:   
    >
    > widths
    >
    > :   10 30
    >
    > -   -   `onsen`
    >
    >     - Opens Onsen UI documentation in a browser window.
    > -   -   `tutorial`
    >
    >     - Opens Onsen UI tutorial in a browser window.
    > -   -   `usage`
    >     -   Opens Monaca CLI documentation in a browser window.
    >
Example

:   Here is an example of how to use this command:

    ``` {.sourceCode .bash}
    $ monaca docs onsen
    $ monaca docs tutorial
    $ monaca docs usage
    ```

![](images/cli_commands/monaca_docs.png)

> width
>
> :   700px
>
> align
>
> :   center
>
> monaca docs tutorial
