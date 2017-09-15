Build Settings between Monaca and Xcode
=======================================

If you want to develop your Monaca app in both Monaca Cloud IDE and
Xcode on your Mac OS X, you will need to synchronize the build settings
(private keys and certificates) of the app you use in these two
environments.

In this page, we will show you how to:

-   from\_mac\_to\_monaca
-   from\_monaca\_to\_mac

Export the Build Settings from Xcode to Monaca Cloud IDE
--------------------------------------------------------

In case you've already had your build settings (private keys and
certificates) in your Mac OS X (Xcode) and you want to export them to
Monaca Cloud IDE, please do as follows:

### Step 1: Export Private Key and Certificate in Keychain Access

In order to export the private key in Keychain Access, please follow the
instruction below:

1.  In your Mac OS X, go to
    Applications --&gt; Utilities --&gt; Keychain Access.
2.  Select Certificates on the left panel of the Keychain Access window.

> ![](images/import_export/1.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
3.  Right-click on the certificate you want to export and select
    Export “CERTIFICATE NAME”. Please make sure to choose the
    certificate that has a private key. Only the certificate which has a
    private key can be imported into Monaca.

> ![](images/import_export/2.png)
>
> > width
> >
> > :   600px
> >
> > align
> >
> > :   left
> >
4.  Then, the export screen will be displayed. Let's save it as a
    private key by selecting the file format as
    `Personal Information Exchange (.p12)`, and then click Save.

> ![](images/import_export/3.png)
>
> > width
> >
> > :   500px
> >
> > align
> >
> > :   left
> >
5.  Enter a password for this private key, and then click OK. By doing
    so, a private key file with extension of `.p12` will be created.
    Please take note of this password since you will need it when
    importing this file into Monaca Cloud IDE later.

> ![](images/import_export/4.png)
>
> > width
> >
> > :   300px
> >
> > align
> >
> > :   left
> >
6.  Now, right-click on the certificate you want to export again and
    select Export “CERTIFICATE NAME”. This time, we are going to save it
    as a certificate by selecting the file format as
    `Certificate (.cer)`, and then click Save.

> ![](images/import_export/5.png)
>
> > width
> >
> > :   500px
> >
> > align
> >
> > :   left
> >
### Step 2 :Import Private Key and Certificate into Monaca

<div class="admonition note">

In Monaca, you can register only one private key. If you are using
different private keys for the developer and the distribution
certificates, you will need to re-import the private key which is
related with the certificate you are going to use.

</div>

In order to import the private key and certificate in Monaca Cloud IDE,
please follow the instruction below:

1.  From the Monaca Cloud IDE menu, go to
    Config --&gt; iOS Build Settings. Click on Import.

> ![](images/import_export/6.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
2.  Browse the private key file (`.p12` file) and enter the password for
    that key. Then click Import.

> ![](images/import_export/7.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  In the *Register Issued Certificate* section, click on
    Upload Certificate button to upload either developer or distribution
    certificates corresponding to the imported private key.

> ![](images/import_export/8.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
4.  Browse the certificate file (`.cer` file) and then upload it.

Export the Build Settings from Monaca Cloud IDE to Xcode
--------------------------------------------------------

<div class="admonition note">

From Monaca Cloud IDE, the private key and certificate are exported as
one file.

</div>

In order to export the private key and certificate from Monaca Cloud
IDE, please follow the instruction below:

1.  From the Monaca Cloud IDE menu, select
    Config --&gt; iOS Build Settings.
2.  In the *Certificates registered in Monaca* section, click on the
    Export icon of the certificate you want.

> ![](images/import_export/9.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  Then, you will be ask to input a password before exporting. Please
    note to remember this password because it is required when importing
    this certificate later.

> ![](images/import_export/10.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
4.  After clicking Export button, you will then be able to download a
    file with `.p12` extension (Ex: `dev_certification_ios.p12`). This
    file consists of a private key and a certificate.
5.  Double-click on the downloaded file. Then, you will be asked to
    input the password for the file and click OK. After that you can use
    the private key and certificate in Xcode.

> ![](images/import_export/11.png)
>
> > width
> >
> > :   480px
> >
> > align
> >
> > :   left
> >

