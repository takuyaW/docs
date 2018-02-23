---
title: React Native Support
---

In this page, we will be talking about everthing you need to know when
running React Native projects with Monaca CLI.

## Getting Started


{{<note>}}
    You are required to have {{<link title="Node.js" href="https://nodejs.org/">}} installed on your PC in order to install both Monaca CLI and React Native.
{{</note>}}

### Prerequisites

In order to get start using react native projects with Monaca services,
please do as follows:

1.  Install Monaca CLI

    {{<highlight bash>}}$ npm i -g monaca{{</highlight>}}

2.  Install React Native CLI (Local Project Creation, Local Development,
    and Local Testing)

    {{<highlight bash>}}$ npm i -g react-native-cli{{</highlight>}}

### Creating a Project & Building

1.  Create a new React Native project.

    {{<highlight bash>}}$ react-native init <project_name>{{</highlight>}}

2.  Navigate to the project's directory.

    {{<highlight bash>}}$ cd <project_name>{{</highlight>}}

3.  Sign in with your Monaca account. All available Monaca commands
    which can be used with React Native projects are described in
    [Available Monaca Commands](#available-monaca-commands).

    {{<highlight bash>}}$ monaca login{{</highlight>}}

4.  Remote Build with Monaca. The following command will launch a remote
    build window allowing you to configure the build settings and start
    building.

    {{<highlight bash>}}$ monaca remote build --browser{{</highlight>}}

    {{<figure src="/images/monaca_cli/react_native/4.png" title="Remote Build Window">}}

5.  If you want to test the project, you can simply just download the
    build file and install it on your device. If you want to debug the
    project locally, please refer to the following section.

## Local Debugging

This scenario requires the user to have Xcode and Android SDK locally to
run the simulator.

### Prerequisites

1.  Install React Devtools (Local Debugging):
    
    {{<highlight bash>}}$ npm i -g react-devtools{{</highlight>}}

2.  Install Xcode and Android SDK.

### Debugging

1.  Navigate to the project's directory.

    {{<highlight bash>}}$ cd <project_name>{{</highlight>}}

2.  Launch React Devtools for Debugging.

    {{<highlight bash>}}$ react-devtools &{{</highlight>}}

    {{<note>}}
        This process is shoved into the background. Please kill process when done.
    {{</note>}}

3.  Launch Simulator for Testing.

    {{<highlight bash>}}
$ react-native run-ios
$ react-native run-android{{</highlight>}}

    {{<note>}}
        Only one simulator can run at a time.
    {{</note>}}

## Available Monaca Commands

 Commands | Description 
----------|-------------
[monaca login](#monaca-login) | Sign in to Monaca Cloud.
[monaca logout](#monaca-logout) | Sign out from Monaca Cloud.
[monaca signup](#monaca-signup) | Register a new Monaca account.
[monaca remote build](#monaca-remote-build) | Build a project on Monaca Cloud.
[monaca config](#monaca-config) | Manage Monaca CLI configuration.
[monaca remote config](#monaca-remote-config) | Open the project configuration on Monaca Cloud.
[monaca docs](#monaca-docs) | Display docs for Monaca CLI, Onsen UI and Tutorials.
[monaca info](#monaca-info) | Display information about monaca dependencies.

### monaca login

Signs in to Monaca Cloud. You will be prompted to input your Monaca
account information (username and password).

{{<highlight bash>}}
$ monaca login [options]
{{</highlight>}}

**Options**

- `email`: Email address used to login to Monaca Cloud.

**Example**

Here is an example of how to login to Monaca Cloud with Monaca CLI:

{{<highlight bash>}}
$ monaca login
$ monaca login me@monaca.io
$ echo "mypass" | monaca login me@monaca.io
{{</highlight>}}

### monaca logout

Signs out from Monaca Cloud and removes stored login token.

{{<highlight bash>}}
$ monaca logout
{{</highlight>}}

**Example**

Here is an example of how you logout from Monaca Cloud with Monaca CLI:

{{<highlight bash>}}
$ monaca logout
Signing out from Monaca Cloud...
You have been signed out.
Removed Monaca Debugger pairing information.
{{</highlight>}}

### monaca signup

Signs up for Monaca Cloud. Will display a prompt that asks for user credentials.

{{<highlight bash>}}
$ monaca signup [options]
{{</highlight>}}

**Options**

- `email`: Email address used to register in Monaca
    
**Example**

Here is an example of how you use this command:

{{<highlight bash>}}
$ monaca signup
$ monaca signup me@monaca.io
{{</highlight>}}

### monaca config

Manages proxy and API endpoint configuration.

{{<highlight bash>}}
$ monaca config [options]
{{</highlight>}}

**Options**

- `proxy <url>`: If &lt;url&gt; is not set, the current proxy server will be displayed.
- `endpoint <url>`: If &lt;url&gt; is not set, the current API endpoint will be displayed.
- `--help`: Displays a config helper.
- `--reset`: Resets to the default value.
    
**Example**

Here are examples of how to use this command:

{{<highlight bash>}}
$ monaca config --help
$ monaca config proxy
$ monaca config proxy http://my.proxy.com:8080
$ monaca config proxy --reset

$ monaca config endpoint
$ monaca config endpoint my.endpoint.com
$ monaca config endpoint --reset
{{</highlight>}}

### monaca remote build

Builds the project in Monaca Cloud. If your project does not exist in
Monaca Cloud yet, it will be automatically uploaded to the cloud first
before the build starts. However, if your project already exists in
Monaca Cloud, all its local updates/changes will be uploaded to the
cloud first before the build starts.

Please refer to [Build](/en/products_guide/monaca_ide/build) for more information on how to:

-   config build settings for each platform
-   types of build
-   build the application for each platform
-   get/install the built apps

{{<highlight bash>}}
$ monaca remote build <platform> [options]
{{</highlight>}}

**Options**

- `platform`: Builds for a specific platform. It can be: `ios`, `android` or `windows`.
- `--build-type`: Chooses a build type. It can be:

    - `debug`: (for iOS, Android and Windows) It is the default option.
    - `test`: (for iOS only)
    - `release`: (for iOS and Android)

- `--output`: The path in which the built file will be stored (including the filename)
- `--android_webview`: (Android only) Chooses a type of webview. It can be: `default` or `crosswalk`.
- `--android_arch`: (Android only) Required if `--android_webview` is `crosswalk`. It can be: `x86` or `arm`.
- `--browser`: Opens the build process in a browser.
    
**Example**

Navigate to your project folder and try to use this command with different options:

{{<highlight bash>}}
$ monaca remote build ios
$ monaca remote build ios --build-type=debug
$ monaca remote build android --build-type=debug --android_webview=crosswalk --android_arch=arm
$ monaca remote build --browser
{{</highlight>}}

### monaca remote config

Opens the project configuration on Monaca Cloud. Once the configuration
has been performed, execute monaca download to get the changes locally.

{{<highlight bash>}}
$ monaca remote config
{{</highlight>}}

**Example**
Navigate to your transpilable project folder and try `monaca remote config` command:

{{<highlight bash>}}
$ monaca remote config
$ monaca download
{{</highlight>}}

### monaca docs

Displays docs for Monaca CLI, Onsen UI and Tutorials.

{{<highlight bash>}}
$ monaca docs [options]
{{</highlight>}}

**Options**

- `onsen`: Opens Onsen UI documentation in a browser window.
- `tutorial`: Opens Onsen UI tutorial in a browser window.
- `usage`: Opens Monaca CLI documentation in a browser window.
    
**Example**

Here is an example of how to use this command:

{{<highlight bash>}}
$ monaca docs onsen
$ monaca docs tutorial
$ monaca docs usage
{{</highlight>}}

{{<figure src="/images/monaca_cli/manual/cli_commands/monaca_docs.png" title="Monaca docs tutorial">}}

### monaca info

Displays information about monaca dependencies, system, project
dependencies and connection to Monaca Cloud.

{{<highlight bash>}}
$ monaca info
{{</highlight>}}

**Example**

Here is an example of how to use this command:

{{<highlight bash>}}
$ monaca info
{{</highlight>}}

## Dashboard Usage

{{<note>}}
    Please note that it's impossible to create a new React Native project from Monaca Dashboard (Cloud IDE) at the moment due to the lack of transpiling feature. You can only open the project which has been synced from your Local PC.
{{</note>}}

All React Native projects will have React Native icon attached to its
name. Please see the following screenshot as an example:

{{<figure src="/images/monaca_cli/react_native/1.png">}}

From Monaca Dashboard, there are 3 things you can do with React Native
projects such as:

1.  Configure build settings for iOS and Android

    {{<figure src="/images/monaca_cli/react_native/2.png" title="Android Build Setting (Keystore & Alias)">}}
    {{<figure src="/images/monaca_cli/react_native/3.png" title="iOS Build Setting (Certificate & Provisioning Profile)">}}

2.  Build for iOS and Android

    {{<figure src="/images/monaca_cli/react_native/4.png" title="Build for Android (Debug)">}}
    {{<figure src="/images/monaca_cli/react_native/5.png" title="Build for iOS (Debug)">}}

3.  View build history

    {{<figure src="/images/monaca_cli/react_native/6.png" title="Build History">}}

## Upload Control

There are cases where you want ignore/exclude specific files and folders
from uploading to Monaca Cloud. In this case, the `.monacaignore` file
will be automatically created and placed under the root directory of the
React Native projects. You can edit the file to add or remove specific
files and folders. Here is the default settings within the
`.monacaignore` file:

{{<highlight bash>}}
/node_modules/**
/android/build/**
/ios/build/**
*/.DS_Store
*/.git/**
{{</highlight>}}

