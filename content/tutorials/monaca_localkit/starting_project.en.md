---
title: "Part 1: Starting a Project"
weight: 1
---

In this page, we describe a step-by-step instruction of how to:

-   start a new local project from a template provided by Monaca. You
    can also import projects you have in Monaca Cloud IDE or other
    existing Cordova projects into Monaca Localkit as well. Please refer
    to [Importing a Project](../../manual/overview/#localkit-import).
-   preview your project right from the Monaca Localkit without the use
    of real devices.
-   edit the project files.

## Step 1: Logging into Monaca Localkit

Launch Monaca Localkit and log in with your Monaca account.

{{<figure src="/images/monaca_localkit/tutorial/starting_project/1.png">}}

## Step 2: Creating a New Project

After a successful log in, you are now ready to create your first Monaca
project locally. Please do as follows:

1.  From Monaca Localkit dashboard, go to {{<menu menu1="+" menu2="Create">}}.

    {{<img src="/images/monaca_localkit/tutorial/starting_project/2.png">}}

2.  Fill in the necessary information such as:

    -   `Project Name`: create a name to represent your new project which will be shown in the project list.
    -   `Working Directory`: specify a directory where you want to keep your project files.
    -   `Select Category`: choose a template category for your new project.
    -   `Select Template`: choose a template for your new project. Please use {{<guilabel name="Preview">}} button to see how each template looks like.

    {{<img src="/images/monaca_localkit/tutorial/starting_project/3.png">}}

3.  If the project is created successfully, the new project will be shown in the project list.

## Step 3: Previewing the Project

In Monaca Localkit, you can run the project using Live Preview function
without real devices. However, some functionalitlies of some
applications might not be properly previewed. For more information,
please refer to [usage and limitation of Live Preview](/en/monaca_ide/manual/overview/#preview_team_panel).

In order to preview a project, please do as follows:

1.  From Monaca Localkit dashboard, click on a project we just created.
2.  Click on {{<guilabel name="Preview">}} button.

    {{<img src="/images/monaca_localkit/tutorial/starting_project/4.png">}}

3.  Then, a Preview window will be shown as below:

    {{<img src="/images/monaca_localkit/tutorial/starting_project/5.png" width="300">}}

4.  Try testing the app in the Preview window.

    {{<img src="/images/monaca_localkit/tutorial/starting_project/8.png" width="300">}}

##  Step 4: Editing the Project Files

1.  Browse your project files from Monaca Localkit dashboard. To do
    this, you can either click {{<guilabel name="Open">}} button or right-click on the `Memo
    Application` project, then click {{<guilabel name="Open in">}} (see screenshot below).

    {{<img src="/images/monaca_localkit/tutorial/starting_project/6.png">}}

2.  Then, a new window showing your project files location will be
    displayed. The project files that you will be editing directly are
    in `www` folder. `components` folder consists of project's
    dependencies such as jQuery Mobile. Please ignore this folder. Use
    any code editors you prefer to edit the rest of the project files
    such as JavaScript, CSS and HTML files.

    {{<img src="/images/monaca_localkit/tutorial/starting_project/7.png">}}

3.  Now, let's edit the `index.html` file. Try changing some lines in
    this page and save them.
4.  Use `Preview` function to see the change. If your Preview is already
    opened, the change will be updated immediately after you save the
    changes.


See Also:

- [Part 2: Running Monaca Debugger with Monaca Localkit](../testing_debugging)
- [Part 3: Building Monaca App](../building_app)
- [Part 4: Publishing Monaca App](../publishing_app)