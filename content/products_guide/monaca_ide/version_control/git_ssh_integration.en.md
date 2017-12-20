---
title: Git SSH Integration
weight: 30
---

Monaca allows you to connect your project with a repository using any
Git services through SSH authentication. GitHub is one of Git services
supporting SSH connection. Therefore, we will be using GitHub as an
example in the following subsections.

> **note**
>
> Currently, Git Services with SSH connection is only available in the
> new Cloud IDE \<new\_ide\>.

> **note**
>
> Generally, you can only connect to public repositories. However, with
> valid Monaca subscription plan, you can additionally connect to
> private repositories. Please refer to
> [Pricing](https://monaca.io/pricing.html).

Prerequisites
-------------

In order to use version control in Monaca Cloud IDE, you will need:

-   an account from any Git services with SSH support
-   a [Monaca](https://monaca.mobi/en/register/start) account

Setup
-----

### Step 1: Generating SSH Key

1.  Go to [SSH Key Management](https://monaca.mobi/en/ssh) page.
2.  Click on Generate SSH Key button.

> ![](../images/version_control/17.png)
>
> > width
> > :   600px
> >
> > align
> > :   left
> >
3.  Copy the generated key which will be used in the next section
    *Adding the SSH Key to Git Service*.

### Step 2: Adding the SSH Key to Git Service

For proper authentication between Monaca and your Git service provider,
the generated SSH key from the previous section needs to be added to
your Git service account.

In this example, we are using GitHub. For other services, please review
your Git services' documentation for support.

1.  Go to [SSH Key](https://github.com/settings/keys) page.
2.  Click on New SSH key button.
3.  Fill in the following information:

> -   `Title`: Title of the key
> -   `Key`: The SSH key generated from the Monaca account earlier (as
>     shown in the above section)

4.  Then, click on Add SSH key button.

Connecting Existing Monaca Project to New Git Repository
--------------------------------------------------------

### Step 1: Creating a New Empty Repository

You can create a new repository in any Git services. In this case, we
are creating a new repository in GitHub as follows:

1.  Go to your GitHub account and create a new empty repository (without
    Readme file).
2.  Then, select the SSH button.
3.  Copy the SSH link (see below screenshot as example). We will use
    this link in the Monaca Cloud IDE later in the next section.

> ![](../images/version_control/18.png)
>
> > width
> > :   600px
> >
> > align
> > :   left
> >
### Step 2: Connecting Monaca Project with Repository

1.  From Monaca Dashboard, open a project you want to connect to a
    repository.
2.  From Monaca Cloud IDE menu, go to Version Control --\> Configure.
3.  Select the *Git SSH* option as shown below:

> ![](../images/version_control/16.png)
>
> > width
> > :   500px
> >
> > align
> > :   left
> >
4.  Then, you will need to input the `Repository URL` (the link you
    found in the above section) and `Committer Name`.

> > **note**
> >
> > Please be aware that you cannot change to another repository after
> > configuration.
>
> ![](../images/version_control/19.png)
>
> > width
> > :   500px
> >
> > align
> > :   left
> >
5.  Click on Initialize button.
6.  Your project is then being uploaded to your new repository. By
    default, your working branch will be configured as master. If you
    want to switch to another working branch, please go to Version
    Control Configuration page (Version Control --\> Configure...).

Import Existing Project from Git Repository into Monaca
-------------------------------------------------------

1.  Log into [Monaca Cloud IDE](https://monaca.mobi/en/login) with your
    Monaca account.
2.  From Dashboard, go to Import Project.
3.  In Import Project dialog, fill in the necessary information and
    choose `Import from Git Repository`. Then, input the
    `Repository URL` and click on Import button.

> ![](../images/version_control/21.png)
>
> > width
> > :   500px
> >
> > align
> > :   left
> >
4.  If the import is successful, the new project will be added to Monaca
    Dashboard. By default, master branch will be applied to the imported
    project. You can switch the current working branch in the Version
    Control Configuration page (Version Control --\> Configure...).

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

1.  From Monaca Cloud IDE menu, go to Version Control --\> Configure.
2.  Choose the branch you want to switch to from current working branch,
    and click Clear Cache & Save button.

> ![](../images/version_control/20.png)
>
> > width
> > :   600px
> >
> > align
> > :   left
> >
> **note**
>
> You will get an error message if you try to checkout to a new branch
> while you have not committed changes on the current working branch
> yet. Please push your changes to current branch first before checking
> out to another branch.

### Retrieve Changes from Remotes

If you are familiar with Git commands, retrieve changes from remotes
here refers to `git pull` command. In order to retrieve the changes from
remotes, from Monaca Cloud IDE menu, go to Version Control --\> Pull. If
there are changes in your remotes, you will receive those updates in
your working branch.

> **note**
>
> When you create a project in IDE, Monaca keeps all the files in www
> folder. Files outside of this folder are also synced even though they
> will not appear in the IDE.

### Commit Changes to Remotes

After making changes in the current working branch, you are able to
commit them back to your remote repository. To commit your changes,
please do as follows:

1.  From Monaca Cloud IDE menu, go to Version Control --\> Commit.
2.  Fill in your commit message and check files you want to commit.
    Then, click on Commit button.
3.  Once you are ready to push those updates to the remote repository,
    select Version Control --\> Push. Once it is successfully pushed,
    your remotes will contain latest changes made in Monaca Cloud IDE.

### Show Remote Commit History

> **note**
>
> Since there are numerous public and private Git services available to
> choose from and the URL to the Remote Commit History is not known for
> all services, this option is not available for projects linked to a
> repository with SSH.

In order to see full history of your previous commits in remote
repository, go to Version Control --\> Show Remote History. You will be
redirected to the remote Git service provider's website showing a commit
history of your current branch.

### Show Local Commit History

Every commit you made in your Monaca Cloud IDE is called Local Commit.
You are able to view your local commit history through
Version Control --\> Show Commit History. To view the changes in each
commit, click on the commit on the left panel.
