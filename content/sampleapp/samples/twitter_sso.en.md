---
title: Twitter Single Sign-on App
weight: 10
---

In this page, you will learn how to use Twitter's Single Sign-On (SSO)
with Monaca Cloud IDE using Angular 1 and [Onsen UI](https://onsen.io/).
The authentication is done by using
[twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin).
This plugin uses Twitter's [Fabric](https://fabric.io/) SDK to enable
SSO with your Android and iOS apps. After a successful authentication,
the user’s basic information will be displayed in the app.

{{<import pid="591bff71ff2af275320625fa" title="Twitter Single Sign-on App">}}

**Tested Environment**

- Android 7.0
- iOS 10.1.1

{{<figure src="/images/sampleapp/twitter_sso/cover.png">}}

## Prerequisite    

### Getting Twitter Consumer Key and Consumer Secret

You are required to obtain `Consumer Key` and `Consumer Secret` by
registering your Monaca app with Twitter Apps page. Please proceed as
follows:

1.  Go to [Twitter Apps page](https://apps.twitter.com/) and sign in
    with a valid Twitter account.
2.  Click on {{<guilabel name="Create New App">}} button.
3.  Fill in the information of your app such as: Name, Description,
    Website and Callback URL (optional). Then, tick
    `Yes, I have read and agreed to the Twitter Developer Agreement.` and
    click on {{<guilabel name="Create your Twitter application">}} button.
4.  Go to Settings tab and tick
    `Allow this application to be used to Sign in with Twitter`. Then,
    click {{<guilabel name="Update Settings">}} button.
    
    {{<img src="/images/sampleapp/twitter_sso/twitter_settings.png">}}

5.  Go to *Keys and Access Tokens* tab. Then, you will find the
    `Consumer Key` and `Consumer Secret`.

    {{<img src="/images/sampleapp/twitter_sso/twitter_keys.png">}}

###  Getting Fabric API Key

`Fabric API key` is required by the `twitter-connect-plugin` plugin. To
get `Fabric API key`, please proceed as follows:

1.  Login to Fabric account and open [Crashlytics
    page](https://fabric.io/kits/android/crashlytics/install). If you
    are new to Fabric, please sign up
    [here](https://get.fabric.io/twitter-login).
2.  Find your API Key in inside `<meta-data>` code block in
    `AndroidManifest.xml` file (see the screenshot below).

    {{<img src="/images/sampleapp/twitter_sso/twitter_fabric.png">}}

## Importing the Project to Monaca Cloud IDE

{{<import pid="591bff71ff2af275320625fa" title="Twitter Single Sign-on App">}}

## Configuring the Plugin

The authentication is done by
[twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin).
This plugin uses Twitter's [Fabric](https://fabric.io/) SDK to enable
SSO with your Android and iOS apps. After a successful authentication,
the user’s basic information will be displayed.

Before starting to use this plugin, you are required to input the
`FABRIC_KEY` value within the plugin's configuration as follows:

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Under the *Enabled Plugins* section, hover over `twitter-connect-plugin` and click {{<guilabel name="Configure">}} button.

    {{<img src="/images/sampleapp/twitter_sso/twitter_plugin_config.png">}}

3.  Input the `FABRIC_KEY` value you got in the [Getting Fabric API Key](#getting-fabric-api-key)
    section. See the screenshot below as an example:

    {{<img src="/images/sampleapp/twitter_sso/twitter_plugin_fabric.png">}}

4.  Click {{<guilabel name="OK">}} to complete the configuration.

## Editing config.xml File

1.  Open the `config.xml` file and add the following code within the
    `<widget>` tag. Please remember to replace your own
    `Twitter Consumer Key` and `Twitter Consumer Secret`.

    {{<highlight xml>}}
<preference name="TwitterConsumerKey" value="<Twitter Consumer Key>" />
<preference name="TwitterConsumerSecret" value="<Twitter Consumer Secret>" />{{</highlight>}}

2.  Save the file.

## Application Explanation

### File Components

{{<figure src="/images/sampleapp/twitter_sso/twitter_files.png">}}

| File | Description |
|------|-------------|
| `index.html`	| The startup Page |
| `home.html` | Home Page |
| `css/style.css` | A stylesheet file for the application |
| `js/app.js` | A JavaScript file for implementation of the application |

### HTML Explanation

#### index.html

{{<highlight html>}}
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="Content-Security-Policy" content="default-src * data:; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
    <script src="components/loader.js"></script>
    <script src="lib/angular/angular.min.js"></script>
    <script src="lib/onsenui/js/onsenui.min.js"></script>
    <script src="lib/onsenui/js/angular-onsenui.min.js"></script>
    <script src="js/app.js"></script>

    <link rel="stylesheet" href="components/loader.css">
    <link rel="stylesheet" href="lib/onsenui/css/onsenui.css">
    <link rel="stylesheet" href="lib/onsenui/css/onsen-css-components.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body >
    <ons-navigator id="myNavigator" page="home.html"></ons-navigator>
</body>
</html>
{{</highlight>}}

This file is the startup page of the application. As you can see, within
the `<body>` tag, there is only one [ons-navigator](<https://onsen.io/v2/docs/angular1/ons-navigator.html) component. It provides page stack management and navigation. The attribute page is used to identify the first page in the stack. Since we
have only one main page in this sample application, `home.html` is, of
course, the first in the page stack and will be loaded as soon as the
`index.html` file is completed.

#### home.html

{{<highlight html>}}
<ons-page ng-controller="HomeCtrl as home" ng-init="CheckLoginStatus()">
    <ons-toolbar>
        <div class="center">Twitter Demo</div>
        <div class="right" ng-show="login_status">
            <ons-toolbar-button ng-click="Logout()">
                <ons-icon icon="fa-sign-out"></ons-icon>
            </ons-toolbar-button>
        </div>
    </ons-toolbar>
    <div class="page">
        <div ng-hide="login_status">
            <p class="center">
                Welcome to Twitter Demo with Monaca using Onsen UI and AngularJS!
            </p>
            <ons-button ng-click="Login()">
                Connect to Twitter
            </ons-button>
        </div>
        <div ng-show="login_status">
            <p class="center">
                <p>Currently, logged in as <b>{{user.name}}</b></p>
                <img src="{{user.profile_url}}" class="profile">
                <p>(@{{user.screen_name}})</p>
                <p>{{user.description}}</p>
                <p><ons-icon icon="fa-map-marker"></ons-icon> {{user.location}}</p>
            </p>
        </div>
    </div>
</ons-page>
{{</highlight>}}

This page contains two sections which are shown based on the
`login_status` variable of the user in the application:

1.  Login section: This section is shown when there is no existing login
    information found in the device.

    {{<figure src="/images/sampleapp/twitter_sso/twitter_home.png">}}

2.  Profile section: When the existing login info is found, this section
    will be displayed.

    {{<figure src="/images/sampleapp/twitter_sso/twitter_profile.png">}}

### Stylesheet Explanation

This file consists of the CSS style for the navigation bar and Twitter
profile image.

{{<highlight css>}}
div.page {
   padding: 5%;
   text-align: center;
}

p.center {
    text-align: center;
}

img.profile {
    width: 40%;
    border: solid 1px #1da1f2;
    border-radius: 5px;
}

.navigation-bar {
    background-color: #1da1f2;
}

.button {
    background-color: #1da1f2;
}
{{</highlight>}}

### JavaScript Explanation

{{<highlight javascript>}}
ons.bootstrap()
.service('StorageService', function() {
    var setLoginUser = function(user_info) {
        window.localStorage.login_user = JSON.stringify(user_info);
    };

    var getLoginUser = function(){
        return JSON.parse(window.localStorage.login_user || '{}');
    };

    return {
        getLoginUser: getLoginUser,
        setLoginUser: setLoginUser
    };
})

.controller('HomeCtrl', function($scope, StorageService, $http) {
    $scope.CheckLoginStatus = function(){
        $scope.user = StorageService.getLoginUser();
        console.log(JSON.stringify($scope.user));
        //check if there is any stored information of a login user
        if(JSON.stringify($scope.user) === "{}"){
            console.log('No login info!');
            $scope.login_status = 0;
        } else {
            console.log('Login info is found!');
            $scope.login_status = 1;

        }
    }

    $scope.Login = function(){
        TwitterConnect.login(
            function(result) {
            console.log('Successful login!');

            TwitterConnect.showUser(
                function(user) {
                    //Get larger profile picture
                    user.profile_url = user.profile_image_url.replace("_normal", "");
                    StorageService.setLoginUser({
                        name: user.name,
                        screen_name: user.screen_name,
                        location: user.location,
                        description: user.description,
                        profile_url: user.profile_image_url.replace("_normal", "")
                    });
                    myNavigator.pushPage('home.html');
                }, function(error) {
                    console.log('Error retrieving user profile');
                    console.log(error);
                }
            );

            }, function(error) {
                console.log('Error logging in');
                console.log(error);
            }
        );
    }

    var LogoutFromTwitter = function(){
        TwitterConnect.logout(
            function() {
                console.log('Successful logout!');
                StorageService.setLoginUser({});
                myNavigator.pushPage("home.html");
            },
            function(error) {
                console.log('Error logging out: ' + JSON.stringify(error));
            }
        );
    }

    $scope.Logout = function(){
        ons.notification.confirm({
            message: "Are you sure you want to log out?",
            title: 'Twitter Demo',
            buttonLabels: ["Yes", "No"],
            callback: function(idx) {
            switch (idx) {
                case 0:
                    LogoutFromTwitter();
                case 1:
                    break;
                break;
            }
          }
        });
    }
});
{{</highlight>}}

Inside this file, there is an Angular Service, called `StorageService`.
It stores the login information of the user using the device's Local
Storage. There is also one controller, called `HomeCtrl`, consists of
two main functions such as `Login()` and `Logout()`. Inside the
`Login()` function, `TwitterConnect.login()` is called asking the user the
login with a valid Twitter account information.

{{<note>}}
    If you have logged in with a Twitter app on your device, the information of that account will be grabbed and used in the app automatically (see the screenshot below as an example). If you want to log in with a different account, please go to your Twitter app and change the account there.
{{</note>}}

{{<figure src="/images/sampleapp/twitter_sso/twitter_authentication.png">}}

However, if you neither have a Twitter app nor log in the existing
Twitter app on your device, the following authentication screen will
appear:

{{<figure src="/images/sampleapp/twitter_sso/twitter_authentication_1.png">}}

After a successful login, `StorageService` is called to store the login
information and the app will be directed back to `home.html` page
showing the profile information of the logged in user. The `Logout()`
function is called when a user clicks on the Logout icon on the
top-right corner of the page. Inside the `Logout()` function, a
confirmation dialog is shown. If the user selects `Yes`, both
`TwitterConnect.logout()` function and `StorageService` service are
called to log the user out and remove the login information from the
device's local storage, respectively.

{{<note>}}
    This <code>Logout()</code> function can only log the user out of this application, not the Twitter application.
{{</note>}}

{{<figure src="/images/sampleapp/twitter_sso/twitter_confirmation.png">}}
