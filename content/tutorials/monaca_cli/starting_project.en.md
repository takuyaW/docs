---
title: "Part 1: Starting a Project"
weight: 1
---

## Step 1: Logging into Monaca

1.  Open a Command Prompt window (for Windows) or Terminal window (for Mac) and type the following command:

    {{<highlight bash>}}
    $ monaca login{{</highlight>}}

2.  Then, you will be asked to input email and password of your Monaca account.

    {{<img src="/images/monaca_cli/tutorial/starting_project/1.png">}}

{{<note>}}
    You can use <code>monaca signup</code> command if you need to sign up.
{{</note>}}

## Step 2: Creating a New Project

1.  Create a new project by using the command below:

    {{<highlight bash>}}
    $ monaca create PROJECT_DIRECTORY{{</highlight>}}

2.  Then, you will be asked to choose either `Sample Apps` or
    `Templates` to create a new Monaca project. In this tutorial, let's
    choose the `Sample Apps` option. Then, select `jQuery TODO App`.

    {{<img src="/images/monaca_cli/tutorial/starting_project/2.png">}}

3.  After creating the project, the project's folder will be created on
    your PC. You can then use any local editors to develop your Monaca
    projects.

    {{<img src="/images/monaca_cli/tutorial/starting_project/3.png">}}

{{<note>}}
    You can also use Monaca CLI to {{<link href="/en/products_guide/monaca_cli/cli_commands/#monaca-import" title="import">}} or {{<link href="/en/products_guide/monaca_cli/cli_commands/#monaca-clone" title="clone">}} your existing projects from Monaca Cloud.
{{</note>}}

See Also:

- [Part 2: Running Monaca Debugger with Monaca CLI](../testing_debugging)
- [Part 3: Building Monaca App](../building_app)
- [Part 4: Publishing Monaca App](../publishing_app)
