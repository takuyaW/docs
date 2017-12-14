---
title: Troubleshooting Guide
weight: 50
---

In this page, we will describe how to solve some known issues related to
Monaca Localkit.

## Installation in Windows

When installing Monaca Localkit in Windows, the following screen might
show up preventing you from installing the Localkit.

{{<figure src="/images/monaca_localkit/manual/troubleshooting/1.png">}}

In order to solve this problem, click {{<guilabel name="More Info">}} button. Then, click on {{<guilabel name="Run Anyway">}} button.

{{<figure src="/images/monaca_localkit/manual/troubleshooting/2.png">}}

## Installation in Mac OS X

When installing Monaca Localkit in Mac OS X, the following screen might
show up preventing you from installing the Localkit.

{{<figure src="/images/monaca_localkit/manual/troubleshooting/3.png">}}

In order to solve this problem, do as follows:

1.  Open `System Preferences` and go to `Security & Privacy`.
2.  Click {{<guilabel name="Open Anyway">}} button.

    {{<figure src="/images/monaca_localkit/manual/troubleshooting/4.png">}}

3.  Now, try installing the app again. It should work this time.

## Removing Monaca Localkit (for Windows)

While uninstalling Monaca Localkit, you might not be able to remove its
remaining files. In this case, please remove them manually from Program
Files folder.

## Incomplete Files and Folder Structure

Monaca/Cordova projects initially consist of the following files and
folders

| File/Folder | Description |
|-------------|-------------|
| `www/` |	Storage folder for the main body of the application |
| `config.xml` |	Cordova configuration file |


In this section, we will talk about how to fix your project if `www/` or
`config.xml` file is missing.

### Missing www Folder

#### For Standard Projects

The user should create `www` folder in the project root or restore a
previous backup of the folder.

#### For Webpack Projects

`www` folder will be created automatically during transpiling process.
Transpiling is triggered automatically after selecting on the project
from project list within Monaca Localkit, if the option has been
enabled.

### Missing config.xml File

{{<note>}}
    This solution will only work if your project is existed on Monaca Cloud.
{{</note>}}

1.  From Localkit, select the project from the project list.
2.  Click {{<guilabel name="Download">}}. Then, `config.xml` file will be restored.


See Also:

- [Monaca Localkit Overview](../overview)
- [Monaca Localkit Tutorial](../tutorial)
- [Pairing and Debugging](../pairing_debugging)
- [Remote Building and Publishing](../build_publish)
