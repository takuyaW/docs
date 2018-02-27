---
title: GitHub Integration
weight: 20
aliases: /en/monaca_ide/manual/version_control/github_integration
---

{{<note>}}
Generally, you can only connect to public repositories. However, with a valid Monaca subscription plan, you can additionally connect to private repositories. Please refer to {{<link href="https://monaca.io/pricing.html" title="Monaca Subscription Plan">}}.
{{</note>}}

Prerequisites
-------------

In order to use version control in Monaca Cloud IDE, you will need:

-   a [GitHub](https://github.com/join) account
-   a [Monaca](https://monaca.mobi/en/register/start) account

Setup
-----

In this section, you will learn how to link Monaca account to your
GitHub account. Please proceed as follows:

1.  Log into [Monaca Cloud IDE](https://monaca.mobi/en/login) with your
    Monaca account.
2.  Go to {{<menu menu1="Your profile name" menu2="GitHub Integration">}}.

    {{< figure src="/images/monaca_ide/manual/version_control/1.png" >}}

3.  Click on {{<guilabel name="Link">}} button. You are required to login with your GitHub
    account before being redirected to GitHub's Authorize Application
    page.

    {{< figure src="/images/monaca_ide/manual/version_control/2.png" >}}

4.  In the Authorize Application page, you will be asked to authorize
    the application in order to link Monaca account to GitHub. Click on
    {{<guilabel name="Authorize application">}} to proceed.

    {{< figure src="/images/monaca_ide/manual/version_control/3.png" >}}

5.  Now your Monaca account is successfully linked to your GitHub
    account.
    
    {{< figure src="/images/monaca_ide/manual/version_control/4.png" >}}

{{<warning>}}
    Please note that you can only link one GitHub account to a Monaca account. If you try to link with multiple accounts, you will encounter an error.
{{</warning>}}

Connecting Existing Monaca Project to New GitHub Repository
-----------------------------------------------------------

### Step 1: Creating a New Empty Repository

Go to your GitHub account and create a new empty repository (without
Readme file).

### Step 2: Connecting Monaca Project with Repository

Assuming that you have successfully integrated your Monaca account to
GitHub account, you need to do some configurations in Monaca Cloud IDE
in order to connect your project to your repository.

Please follow the configuration instruction below:

1.  From Monaca Dashboard, open a project you want to connect to a
    repository.
2.  From Monaca Cloud IDE menu, go to {{<menu menu1="Version Control" menu2="Configure">}}.
3.  Select your remote empty repository. Then, click on {{<guilabel name="Initialize">}}
    button to save the configuration.

    {{<note>}}
        Please be aware that you cannot change to another repository after configuration.
    {{</note>}}

    {{< figure src="/images/monaca_ide/manual/version_control/8.png" >}}

5.  Your project is then being uploaded to your new repository in
    GitHub. By default, your working branch will be configured as
    master. If you want to switch to another working branch, please go
    to Version Control Configuration page
    ({{<menu menu1="Version Control" menu2="Configure...">}}).

Import Existing Project from GitHub Repository into Monaca
----------------------------------------------------------

Once you have linked your Monaca account with GitHub, you can import any
existing projects from GitHub repositories to Monaca Cloud IDE.

1.  Log into [Monaca Cloud IDE](https://monaca.mobi/en/login) with your
    Monaca account.
2.  From Dashboard, click on {{<guilabel name="Import Project">}}.
3.  In Import Project dialog, fill in the necessary information and
    choose `Import from GitHub Repository`. Then, select the repository
    and click on {{<guilabel name="Import">}} button.

    {{< figure src="/images/monaca_ide/manual/version_control/10.png" >}}

4.  If the import is successful, the new project will be added to Monaca
    Dashboard. By default, master branch will be applied to the imported
    project. You can switch the current working branch in the Version
    Control Configuration page ({{<menu menu1="Version Control" menu2="Configure...">}}).

Working with Remotes
--------------------

Once you have successfully connected your project with a repository, you
can start working on the same project with your team members and keep it
synchronized to the latest updates in Monaca Cloud IDE.

Monaca Cloud IDE provides a very user-friendly interface supporting
version control of your code. Without learning Git from the scratch, you
can still perform some basic Git commands directly from the IDE.

### Checkout Current Working Branch

If you have more than one branch and want to switch the current working
branch, please do as follows:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Version Control" menu2="Configure">}}.
2.  Choose the branch you want to switch to from current working branch,
    and click {{<guilabel name="Save">}} button.

    {{< figure src="/images/monaca_ide/manual/version_control/11.png" >}}

{{<note>}}
    You will get an error message if you try to checkout to a new branch while you have not committed changes on the current working branch yet. Please push your changes to current branch first before checking out to another branch.
{{</note>}}

### Retrieve Changes from Remotes

If you are familiar with Git commands, retrieve changes from remotes
here refers to `git pull` command. In order to retrieve the changes from
remotes, from Monaca Cloud IDE menu, go to {{<menu menu1="Version Control" menu2="Pull">}}. If
there are changes in your remotes, you will receive those updates in
your working branch.

{{<note>}}
    When you create a project in IDE, Monaca keeps all the files in <code>www</code> folder. Files outside of this folder are also synced even though they will not appear in the IDE.
{{</note>}}

### Commit Changes to Remotes

After making changes in the current working branch, you are able to
commit them back to your remote repository. To commit your changes,
please do as follows:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Version Control" menu2="Commit">}}.
2.  Fill in your commit message and check files you want to commit.
    Then, click on {{<guilabel name="Commit">}} button.
3.  Once you are ready to push those updates to the remote repository,
    select {{<menu menu1="Version Control" menu2="Push">}}. Once it is successfully pushed,
    your remotes will contain latest changes made in Monaca Cloud IDE.

### Show Remote Commit History

In order to see full history of your previous commits in remote
repository, go to {{<menu menu1="Version Control" menu2="Show Remote History">}}. You will be
redirected to the remote Git service provider's website showing a commit
history of your current branch.

### Show Local Commit History

Every commit you made in your Monaca Cloud IDE is called Local Commit.
You are able to view your local commit history through
{{<menu menu1="Version Control" menu2="Show Commit History">}}. To view the changes in each
commit, click on the commit on the left panel.

Unlink Monaca Account from GitHub
---------------------------------

If you want to unlink your Monaca account from GitHub, just click on
{{<guilabel name="Unlink">}} button in Link to GitHub page.

{{< figure src="/images/monaca_ide/manual/version_control/4.png" >}}

Unable to Re-link to GitHub
---------------------------

If you accidentally revoke Monaca access with Github account, attempt to
re-link with the steps described in [Setup](#setup) will not be
possible. You will see the following error:

{{< figure src="/images/monaca_ide/manual/version_control/14.png" >}}

Therefore, in order to re-link your account in this case, please do as
follows:

1.  Logout from Monaca Cloud IDE.
2.  Go to [Monaca Login](https://monaca.mobi/en/login) page and choose
    {{<guilabel name="Sign in with GitHub">}}.

    {{< figure src="/images/monaca_ide/manual/version_control/15.png" >}}

3.  Fill in your GitHub account information.
4.  Then, you will be redirected to GitHub's Authorize Application page.
    Click on {{<guilabel name="Authorize application">}} to proceed.

    {{< figure src="/images/monaca_ide/manual/version_control/3.png" >}}

5.  After this, your Monaca account should be successfully linked to
    GitHub account. You can confirm in the Link to GitHub page. It
    should appear like this:

    {{< figure src="/images/monaca_ide/manual/version_control/4.png" >}}

