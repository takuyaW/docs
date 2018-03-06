---
title: Monaca Upload Feature
weight: 20
aliases: /en/monaca_ide/manual/deploy/appstore/itunes_connect
---

{{<note>}}
    In order to use this upload feature, you are required to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

{{<note>}}
    For shared projects, only project owner can use Monaca Upload Feature.
{{</note>}}

{{<warning>}}
    If you use activation code to upgrade your account, you can use Monaca upload feature in case your plan supports this feature. Please {{<link href="https://monaca.io/service/index.html" title="contact us">}} for more details.
{{</warning>}}

Monaca allows you to upload your app to iTunes Connect right from Monaca
IDE. In order to do this, please do as follows:

1.  Create a release build version of your app through Monaca. Please
    refer to [Building an iOS App](../../../build/ios/build_ios).
2.  When you successfully build a release version of your app, the
    following screen will appear. Click on the `Upload` icon as shown in
    the screen below.

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/1.png" width="500">}}

3.  Then, the App Upload window will appear. Click {{<guilabel name="Next">}}.

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/2.png">}}

4.  Fill in a valid Apple account information. Click {{<guilabel name="Next">}}.

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/3.png">}}

5.  Make sure you've [registered this app with iTunes Connect](../itunes_connect/#registering-the-app) before uploading your app. Then, tick `We've registered the application with iTunes Connect.`. Click {{<guilabel name="Upload">}}.

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/4.png">}}

6.  The uploading will start. Please wait.

    {{<note>}}
        If you upload multiple versions of the app, please make sure that each app file has different version number. Otherwise, the upload will fail.
    {{</note>}}

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/5.png">}}

7.  If your upload is successful, the following screen will appear. It
    may take sometimes until the app shows up in the iTunes Connect.

    {{<img src="/images/monaca_ide/manual/deploy/app_submission/6.png">}}

    {{<note>}}
        Sometimes Monaca is successfully uploaded your app to iTunes Connect but Apple may find error(s) on their end and report to you via email. If this happens, please see the report and fix the error(s) appropriately. Then, re-upload your app.
    {{</note>}}

8.  Now that you successfully uploaded your app, you can start selecting it in iTunes Connect. Please refer to [Selecting the Uploaded App](../itunes_connect/#selecting-the-uploaded-app).


See Also: 

- [App Store Distribution](../)
- [iTunes Connect Guide](../itunes_connect)



