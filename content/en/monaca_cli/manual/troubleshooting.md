Troubleshooting Guide
=====================

Incomplete Files and Folder Structure
-------------------------------------

Monaca/Cordova projects initially consist of the following files and
folders

> widths
>
> :   10 30
>
> -   -   `www/`
>
>     - Storage folder for the main body of the application
> -   -   `config.xml`
>     -   Cordova configuration file
>
In this section, we will talk about how to fix your project if `www/` or
`config.xml` file is missing.

### Missing www Folder

#### For Standard Projects

The user should create `www` folder in the project root or restore a
previous backup of the folder.

#### For Webpack Projects

The user should proceed as follows:

1.  In the command window, navigate to the project folder.
2.  Then, run `monaca transpile` command. This will generate the `www`
    folder with body of the application.

### Missing config.xml File

<div class="admonition note">

This solution will only work if your project is existed on Monaca Cloud
or you have the backup version of it.

</div>

1.  The user should create an empty `config.xml` file in the project
    root.
2.  Copy the content of the `config.xml` file of the project on the
    Cloud or the backup project.
3.  Paste the content to the empty `config.xml` file.

