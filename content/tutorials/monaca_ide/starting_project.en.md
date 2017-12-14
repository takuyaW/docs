---
title: "Part 1: Starting a Project"
weight: 1
---

## Step 1: Logging into Monaca

1.  Login to [Monaca](https://monaca.mobi/en/login).
2.  Input your Monaca account information.

    {{< img src="/images/monaca_ide/tutorial/starting_project/9.png" width="400">}}

## Step 2: Creating a New Project

After a successful sign-in, you will be directed to Monaca Dashboard.
You are now ready to create your first Monaca project. Please do as
follows:

1.  From Monaca Dashboard, click on {{<guilabel name="Create Project">}} or {{<guilabel name="Import Project">}} to create a new Monaca project.

    {{< img src="/images/monaca_ide/tutorial/starting_project/1.png" >}}

2.  If you select `Create Project`, you will be able to create a new
    Monaca project based on various templates. On the other hand, if you
    choose `Import Project`, you will be able to create a new Monaca
    project by importing an existing project in 3 ways such as:

    -   filling in a project's URL
    -   uploading a project package
    -   or selecting your existing GitHub repository. Please refer to [Version Control (GitHub)](/en/products_guide/monaca_ide/version_control/) on how to set up GitHub integration with Monaca.

    {{< figure src="/images/monaca_ide/tutorial/starting_project/10.png" title="Create Project" >}}

    {{< figure src="/images/monaca_ide/tutorial/starting_project/11.png" title="Import Project" >}}

3.  In this tutorial, we will choose the Create Project option. In the
    Create Project dialog, select Sample Applications and choose
    `jQuery TODO App` template by clicking on its {{<guilabel name="Create New">}} button.

    {{< img src="/images/monaca_ide/tutorial/starting_project/2.png" >}}

4.  Fill in the project's information and click on {{<guilabel name="Make Project">}} button.

    {{< img src="/images/monaca_ide/tutorial/starting_project/3.png" >}}

5.  Then, you will see your newly created project listed under the
    `Online` tab of the Dashboard.

## Step 3: Previewing a Project

Monaca Cloud IDE allows you to preview your project through a Preview
window without any real devices.

{{< note >}}
    Some functionalities of applications might not be properly previewed
    because the Preview window has several limitations such as Ajax
    requests, Cordova plugin APIs and so on. For more information, please
    refer to {{<link href="/en/products_guide/monaca_ide/overview#preview_limit" title="Usage and Limitation of Live Preview" >}}.
{{< /note >}}

1.  From the Monaca Dashboard, open a project. Then, Monaca Cloud IDE
    will be open. You can find the Preview window on the right panel of
    the IDE.

    {{< img src="/images/monaca_ide/tutorial/starting_project/5.png" >}}

2.  Try adding some TODO items in the Preview window.

    {{< img src="/images/monaca_ide/tutorial/starting_project/6.png" >}}

## Step 4: Editing a Project

{{< note >}}
    All editable files are listed under {{<guilabel name="www/">}} folder.
{{< /note >}}

1.  From the File Tree panel, choose a file to edit. Let's make some
    changes in `index.html` file in the code editor.
2.  Save the changes, then you will be able to see the updates instantly
    in the Preview window. Feel free to edit the project as you wish.
    For more detailed explanation about this template, please refer to
    [Explanation about jQuery TODO App](/en/sampleapp/samples/todo/).

{{< note >}}
    For more information regarding the code editor in Monaca Cloud IDE,
    please refer to {{<link href="/en/products_guide/monaca_ide/overview/#code_editor" title="Code Editor">}}.
{{< /note >}}


See Also:

- [Running Monaca Debugger with Monaca Cloud IDE](../testing_debugging/)
- [Setting up Monaca Backend](../adding_backend/)
- [Building Monaca App](../building_app/)
- [Publishing Monaca App](../publishing_app/)
- [Sample Apps & Templates](/en/sampleapp/samples)
