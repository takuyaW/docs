---
title: "Part 3: Setting up Monaca Backend"
weight: 3
aliases: /en/monaca_ide/tutorial/adding_backend/
---

## Step 1: Enabling a Required Plugin for Monaca Backend


In order to use Monaca Backend, you need to add [jQuery
library](https://jquery.com/) into your project. If you haven't added
jQuery into your project yet, please do as follows:

1.  From Monaca Cloud IDE menu, go to `Config` &rarr; `Manage JS/CSS Components`.
2.  Then, `Add or Remove JS/CSS Components` page will be shown. Select {{<guilabel name="Add">}} button of `jQuery (Monaca Version)` to add it to your project.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/1.png">}}

3.  In this dialog, you can choose which version of jQuery library you want to install. Then, click {{<guilabel name="Start Install">}} button. Next, click on {{<guilabel name="OK">}} button.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/2.png" width="400">}}

## Step 2: Attaching Backend to Your Project

1.  From Monaca Cloud IDE, click on `Cloud` icon above the file tree menu
    to go to the Backend Control Panel. Then, click on {{<guilabel name="Start Using Backend">}}
    button.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/3.png">}}

2.  The following dialog will appear. You can create a new Backend, or
    select an existing one which is used in a different project. Then,
    click {{<guilabel name="Apply">}} to attach the Backend to your project.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/4.png">}}

3.  After attaching the Backend, your Backend Control Panel will look similar to this:

    {{<img src="/images/monaca_ide/tutorial/adding_backend/5.png">}}

## Step 3: Creating a New Collection

Collection is a general purpose storage to keep data in the Backend.

1.  From Backend Control Panel, click on `Options Menu` icon. Then, choose
    {{<guilabel name="New Collection...">}}.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/6.png">}}

2.  Then, `New Collection` dialog will appear. Fill in the name for your
    Collection. Then, click on {{<guilabel name="Add">}} button.

    {{<img src="/images/monaca_ide/tutorial/adding_backend/7.png">}}

{{<note>}}
    Please remember to enable {{<guilabel name="Allow JavaScript API to insert data">}} if you want to insert data from your app. For more details about collection management, please refer to {{<link href="/en/products_guide/backend/control_operations/#collection-management" title="Collection Management">}}.
{{</note>}}

After you follow the above steps, you can now start creating your own
applications with Backend support. [Backend Memo](/en/sampleapp/samples/backend_memo) demonstrates
a step-by-step instruction on how to manipulate Monaca Backend in an
application. Please refer to it and start coding your app with Monaca
Backend.

See Also:

- [Starting a Project](../starting_project/)
- [Running Monaca Debugger with Monaca Cloud IDE](../testing_debugging/)
- [Building Monaca App](../building_app/)
- [Publishing Monaca App](../publishing_app/)
- [Sample Apps & Templates](/en/sampleapp/samples)
