---
title: Monaca Debugger for Android Emulator
weight: 40
---

In this page, we will describe how Monaca Debugger works on AVD (Android
Virtual Device) called Android Emulator. With this, you can simulate
Android apps on a PC. Moreover, it is useful when you want to test your
apps on more than one Android device.

{{<note>}}
    Monaca Backend plugin is not included in Monaca Debugger.
{{</note>}}

{{<note>}}
    In this page, the instruction is made on a Mac OS X. Internet is needed in order to run Monaca Debugger on emulator.
{{</note>}}

## Step 1: Setting up an Android Virtual Device

1.  Download and install [Android Studio](http://developer.android.com/sdk/index.html).
2.  Run Android Studio.
3.  Create a new project or open an existing one.
4.  Click on {{<guilabel name="AVD Manager">}}. Then, `Android Virtual Device Manager` dialog
    will appear.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/1.png">}}  

5.  Click {{<guilabel name="+ Create Virtual Device">}}.
6.  Select an Android device and click {{<guilabel name="Next">}}.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/2.png">}}  

7.  Select a system image (you may need to download it first) and click {{<guilabel name="Next">}}.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/3.png">}}  

8.  Make the virtual device's configurations. Select {{<guilabel name="Show Advanced Settings">}} for other settings such as Memory and Storage, Device Frame and Keyboard.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/4.png">}}  
    {{<img src="/images/debugger/manual/installation/debugger_emulator/4_1.png">}}  

9.  After completing the configurations, click {{<guilabel name="Finish">}}.

##  Step 2: Building Custom Monaca Debugger for Android

1.  Go Monaca Cloud IDE and build custom Monaca Debugger for Android.
    For more information, please refer to [Build and Install Custom Monaca Debugger](../debugger_android/#custom-debugger-and).
2.  Download the debugger file and upload it to any file hosting
    services such as Google Drive, Dropbox and so on.
3.  Get a download link of the uploaded file. You will need to use this
    link later in the virtual device.

## Step 3: Installing Monaca Debugger

1.  Go to `AVD Manager` and launch the virtual device.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/5.png">}}  

2.  From your virtual device, open a browser and go to the download link
    you created in [Step 2](#step-2) to download custom Monaca Debugger for Android.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/6.png" width="350">}}  

3.  After the download is completed, click on the downloaded file to start installing the debugger.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/7.png" width="350">}}  

4.  Follow the installation wizard.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/8.png" width="350">}}  

5.  Once the installation is completed, you can find Monaca Debugger in
    your apps page.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/9.png" width="350">}}  

## Step 4: Running a Project on Monaca Debugger

1.  Open Monaca Debugger and sign in with your Monaca account.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/10.png" width="350">}}  

2.  Click on a project you want to run in Monaca Debugger.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/11.png" width="350">}}  

3.  Now, your project is running. You can start testing your project.
    Please refer to [Functionalities](../../features) and [Usage](../../debug) on what you can do with Monaca Debugger in order to help enhancing your app development processes.

    {{<img src="/images/debugger/manual/installation/debugger_emulator/12.png" width="350">}}  

See Also:

- [Debugger Installation on Chrome Apps](../debugger_chrome)
- [Debugger Installation on iOS](../debugger_ios)
- [Debugger Installation on Android](../debugger_android)
- [Debugger's Functionalities](../../features)
- [Debugger's Usage](../../debug)
