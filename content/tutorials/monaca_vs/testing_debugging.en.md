---
title: "Part 2: Running Monaca Debugger with Monaca for Visual Studio"
weight: 2
aliases: /en/monaca_vs/tutorial/testing_debugging/
---

[Monaca Debugger](/en/products_guide/debugger) is a powerful application for testing and debugging your Monaca applications on real devices in real time.

When developing Monaca apps on your local PC, assuming that your local
PC is successfully paired with Monaca Debugger, all changes made to your
project files will be pushed into your Monaca Debugger as soon as you
save those changes.

## Before Getting Started

Please install Monaca Debugger on your device.

{{<img src="/images/monaca_vs/tutorial/testing_debugging/App_Store.jpg" width="100" link="https://itunes.apple.com/us/app/monaca/id550941371?mt=8">}}
{{<img src="/images/monaca_vs/tutorial/testing_debugging/Google_play.png" width="100" link="https://play.google.com/store/apps/details?id=mobi.monaca.debugger&hl=en">}}

{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/installation/" title="Monaca Debugger Installation">}} for other platforms.
{{</note>}}

## Step 1: Running the Project on Monaca Debugger

1.  Launch Monaca Debugger app and sign in using your Monaca account
    information. Make sure you are using the same account information
    you use for Monaca within Visual Studio IDE.

    {{<img src="/images/monaca_vs/tutorial/testing_debugging/1.png" width="300">}}  

2.  Pair the Monaca Debugger with the PC hosting Monaca for Visual
    Studio. Once logged in, Monaca Debugger should be able to detect the
    host PC as shown below. Then, click {{<guilabel name="Pair">}} button to start the
    pairing.

    {{<img src="/images/monaca_vs/tutorial/testing_debugging/2.png" width="300">}}  

3.  If your pairing is successful, a project list will appear in Monaca
    Debugger and the connected debugger will appear in the Monaca panel
    (see screenshots below as an example). However, if Monaca Debugger
    is unable to detect the host PC automatically, please refer to [troubleshooting the Pairing](/en/products_guide/debugger/troubleshooting).

    {{<multi_figures title="Monaca Debugger & Monaca Panel within Visual Studio">}}
        {{<img src="/images/monaca_vs/tutorial/testing_debugging/3.png" width="300">}}
        {{<img src="/images/monaca_vs/tutorial/testing_debugging/4.png" width="278">}}    
     {{</multi_figures>}}

4.  In order to run your project in Monaca Debugger, you can just click
    on the project name in the debugger or click {{<guilabel name="Run in Device">}} button in
    Monaca panel within Visual Studio. Then, your project should be
    running in the debugger as shown below:

    {{<img src="/images/monaca_vs/tutorial/testing_debugging/5.png" width="300">}}

## Step 2: Real-time Updates between Your Project and Monaca Debugger

1.  Run the project on the debugger.
2.  Let's make some changes in a project file and save them (please
    refer to [Edit Project Files](../starting_project/#step-3-editing-the-project-files)). In
    this example, we edit the `index.html` file and change the title of each list
    item from `Rorem Ipsum` to `Monaca and OnsenUI`. Then, save the change.

    {{<img src="/images/monaca_vs/tutorial/testing_debugging/6.png">}}

3.  The saved changes will be sent to Monaca Debugger on your device.
    You can also click on `Reload` button to retrieve the latest updates
    of your app in case the changes are not reflected.

    {{<multi_figures title="Updated List Item Titles & Reload Button">}}
        {{<img src="/images/monaca_vs/tutorial/testing_debugging/7.png" width="300">}}
        {{<img src="/images/monaca_vs/tutorial/testing_debugging/8.png" width="300">}}    
     {{</multi_figures>}}

That's it! That's how easy it is to use Monaca Debugger. Please try to
make more changes to your project and see how it runs on the debugger.

{{<note>}}
    Please refer to {{<link href="/en/products_guide/debugger/features" title="Functionalities">}} to explore the other functions provided by Monaca Debugger.
{{</note>}}

See Also:

- [Part 1: Starting a Project](../starting_project)
- [Part 3: Building Monaca App](../building_app)
- [Part 4: Publishing Monaca App](../publishing_app)
