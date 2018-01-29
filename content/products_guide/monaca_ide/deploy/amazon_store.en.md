---
title: Amazon Appstore Distribution
weight: 30
---

## Prerequisite

In order to publish Android apps at Amazon Appstore, you will need to
create a developer account at [Amazon Apps Developer
Portal](https://developer.amazon.com/appsandservices). The registration
is free.

## Create a Release Build of the App

Using Monaca Cloud IDE build feature, you can build a release version of
your app and upload it to Amazon Appstore. Follow the steps in [Building for Android](../../build/build_android) to build the app with “Release Build”. Then,
download the built app (APK file).

## Register the Apps in Amazon AppStore

1.  Go to [Amazon Apps Developer
    Portal](https://developer.amazon.com/appsandservices) and login with
    a valid Amazon developer account.
2.  Under `DASHBOARD` tab, click {{<guilabel name="Add a New App">}}.

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/1.png">}}
    
3.  Select `Android` and click {{<guilabel name="Next">}}.
4.  The New App Submission page will appear. In this page, you will need
    to fill in the necessary information such as:

    Data | Description 
    ------------|-------------
    App title | Name of your app
    Category | Select a category for your app.
    Customer support contact | You can either use your default support information or input new information about email address, phone number and website.

5.  Click {{<guilabel name="Save">}}. Then, the following page will appear:

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/2.png">}}

    
6.  Go to `Availability & Pricing` tab, select appropriate type of your
    app and answer listed questions. Then, click {{<guilabel name="Save">}}.

    {{<img src="/images/monaca_ide/manual/deploy/amazon_store/3.png">}}

    {{<note>}}
        Amazon covers over 200 countries. Your app can only be released after it has been approved.
    {{</note>}}

7.  Go to `Description` tab. In this page, you will need to fill in the
    following necessary information and click {{<guilabel name="Save">}}.

    | Data | Description |
    |-------------|-------------|
    | Display Title | Name of your app |
    | Short description | Description of your app shown in the store. |
    | Long description | Description of your app shown in the store. |
    | Product feature bullets | Input a list of your app’s features. They will be displayed in `amazon.com` website. |

8.  Go to `Images & Multimedia` tab. In this page, you will need to upload
    at least 3 screenshots, a small icon (`114x114` PNG file) and a large
    icon (`512x512` PNG file) of your app and click {{<guilabel name="Save">}}.
9.  Go to `Content Rating` tab. In this page, you will be asked to
    complete a questionnaire regarding content rating for your app.
    Complete the questionaire and click {{<guilabel name="Save">}}.
10. Go to `Binary File(s)` tab. In this page, you will need to fill in the
    following necessary information and click {{<guilabel name="Save">}}.

    | Data | Description |
    |-------------|-------------|
    | Apply Amazon DRM? | Select Yes if you want to protect your application from unauthorized. |
    | Binary file | Upload your APK file. There is no size restriction for an APK file. However, files larger than 150 MB will need to be uploaded via [SFTP](https://developer.amazon.com/ftp/account.html?appId=MPU22LL128ECT). |
    | Device Support | Select only the devices you intend to target with this binary file. |
    | Language Support | Select available language support for your app. |
    | Export Compliance | Check this if your app may be imported to and exported from the United States and all other countries. |
    | Use Amazon Maps Redirection | Amazon devices do not support the Google Maps API. However, the Amazon Maps API provides interface parity with the Google Maps v1 API. |

11. After completing the configuration, click {{<guilabel name="Save draft">}}. At this point,
    your app should be ready to be published.

## Release the App

You can't publish your app unless you properly fill in necessary
information related to your app. Once, you successfully complete the
required information, click on {{<guilabel name="Submit App">}} to release your app. This
button is disable if the required information is not completed properly.

After submission is complete, Amazon will review your app. The security
of the app will be the primary concern. Review typically takes 1-2 days
to complete.

After approved by Amazon, your app will be published on the Amazon
Appstore for Android. The release date will be the specified date and
time you have set [in Step 6 of Register the Apps in Amazon AppStore](#register-the-apps-in-amazon-appstore), or as soon as it’s approved if you haven’t set any date or time yet.

{{<figure src="/images/monaca_ide/manual/deploy/amazon_store/4.png">}}

## Inquiry

You can contact [Amazon customer
support](https://developer.amazon.com/public/support/contact/contact-us)
at the Amazon Appstore for Android with any inquiries. They can assist
you with various issues including how to submit your app or use the API.

## Amazon Badges for Amazon Appstore for Android

You can use Amazon badges to promote the availability of your app on the
Amazon store. Badges are available from [Amazon
Badges](https://developer.amazon.com/public/support/legal/tuabg).


See Also: 

- [Building for Android](../../build/build_android)
- [Google Play Distribution](../google_play)
- [App Store Distribution](../appstore)
- [Non-market App Distribution](../non_market_deploy)
