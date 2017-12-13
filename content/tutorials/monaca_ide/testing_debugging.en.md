---
title: "Part 2: Running Monaca Debugger with Monaca Cloud IDE"
weight: 2
---

[Monaca Debugger](/en/products_guide/debugger/) is a powerful
application for testing and debugging your Monaca applications on real
devices in real time.

When developing Monaca apps in Monaca Cloud IDE, assuming that the
Internet connection is available, all changes made to your project files
will be pushed into your Monaca Debugger in real-time as soon as you
save those changes.

## Before Getting Started

Please install Monaca Debugger on your device.

{{<img src="/images/monaca_ide/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
{{<img src="/images/monaca_ide/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}


{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/installation/" title="Monaca Debugger Installation">}} for other platforms.
{{</note>}}

## Step 1: Running a Project on Monaca Debugger

1.  Launch Monaca Debugger app and sign in using your Monaca account
    information. Make sure you are using the same account information
    you use for Monaca Cloud IDE.

    {{<figure src="/images/monaca_ide/tutorial/testing_debugging/1.png" width="300">}}

2.  Then, a project list will appear. All Monaca Cloud IDE projects are
    listed under `Monaca.io Projects`. To run a project, you can just
    click on the project name in Monaca Debugger or click {{<guilabel name="Run on Device">}} button in Monaca Cloud IDE menu.

    {{<figure src="/images/monaca_ide/tutorial/testing_debugging/2.png" width="300">}}

3.  Then, your project should be running in the debugger. To go back to
    the Project List screen, go to Debugger Menu and click {{<guilabel name="Back">}} button.

    {{<multi_figures>}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/3.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/6.png" width="300">}}  
    {{</multi_figures>}}

4.  Try and test your project by adding/deleting a memo.

    {{<figure src="/images/monaca_ide/tutorial/testing_debugging/4.png" width="300">}}

## Step 2: Real-time Updates between Monaca Cloud IDE and Debugger

By now, you are able to run your Monaca project on the debugger. Next,
let's try to edit this project and see how it is reflected on the
debugger.

1.  Run the project on the debugger.
2.  On Monaca Cloud IDE, make some changes in a project file and save
    them (please refer to [Edit Project Files](../starting_project/#monaca_ide_edit_project). In this example, we edit `index.html` and change the title of page from `Monaca Memo` to `My Memo`. Then, save the change.

    {{<figure src="/images/monaca_ide/tutorial/testing_debugging/7.png" >}}

3.  The saved changes will be sent to Monaca Debugger on your device.
    You can also click on {{<guilabel name="Reload">}} button to retrieve the latest updates
    of your app in case the changes are not reflected.

    {{<multi_figures title="Updated Page Title & Reload Button">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/5.png" width="300">}}
        {{< img src="/images/monaca_ide/tutorial/testing_debugging/8.png" width="300">}}  
    {{</multi_figures>}}

{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/features/" title="Debugger Functionalities">}} to explore the other functions provided by Monaca Debugger.
{{</note>}}

That's it! That's how easy it is to use Monaca Debugger. Please try to
make more changes to your project and see how it runs on the debugger.

PRACTICE MAKES PERFECT! Enjoy developing with Monaca!

See Also:

- [Starting a Project](../starting_project/)
- [Setting up Monaca Backend](../adding_backend/)
- [Building Monaca App](../building_app/)
- [Publishing Monaca App](../publishing_app/)
- [Sample Apps & Templates](/en/sampleapp/samples)
