Facebook Demo
=============

This is a sample Monaca app used to log into and log out of Facebook
using [Graph API](https://developers.facebook.com/docs/reference/api/).

| *Tested Environments:* Android 6.2, iOS 9.3.5

> ![](images/facebook/5.png){width="346px"}
>
> ![](images/facebook/7.png){width="346px"}

Click here to download the project &lt;download/facebook.zip&gt;

Prerequisite
------------

In order to use this demo app, you are required to register your app
with Facebook. Then, you will get its *App ID* and *App Secret* which
will be used in this app later.

Please follow the instruction below in order to register your app with
Facebook:

1.  Go to [Facebook for Developers](https://developers.facebook.com/)
    and log in with your Facebook account.
2.  Go to My Apps --&gt; Add a New App.

> ![](images/facebook/1.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
3.  Select `Website` as the platform of your app.

> ![](images/facebook/2.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
4.  Fill in your app's name and click Create New Facebook App ID.

> ![](images/facebook/3.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
5.  Fill in your contact email and select a category of the app. Then,
    click Create App ID.

> ![](images/facebook/4.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
6.  Answer a security question.
7.  Click Skip Quick Start button. Then, you will be forwarded to the
    app's Dashboard.

> ![](images/facebook/9.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
8.  Click on Settings and input your app domains and site URL. Then,
    click Save Changes. You can also find the *App ID* and *App Secret*
    here.

> ![](images/facebook/10.png)
>
> > width
> >
> > :   700px
> >
> > align
> >
> > :   left
> >
File Components
---------------

![image](images/facebook/8.png){width="209px"}

  ------------------ ----------------------------------------
  `index.html`       Startup page
  `js/app.js`        JavaScript file handling app execution
  `styles/app.css`   Stylesheet file for the application
  ------------------ ----------------------------------------

Required JS/CSS Components
--------------------------

  `Onsen UI (AngularJS is included)`                         
  ---------------------------------------------------------- ------------------
  Required Cordova Plugins                                   
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   
  ============================ ============                  ================
  `InAppBrowser`                                             

HTML Explanation
----------------

We are using [Onsen](https://onsen.io/) for the user interface (UI) of
this demo app.

### Startup Page

The following block code represents the UI of the startup page (see the
screenshot below):

``` {.sourceCode .HTML}
...
<ons-page ng-controller="HomeCtrl" ng-init="login_status=0">
    <ons-toolbar>
        <div class="center">Facebook Demo</div>
        <div class="right" ng-show="login_status">
            <ons-button modifier="quiet" ng-click="Logout();">Log Out</ons-button>
        </div>
    </ons-toolbar>

    <div style="text-align: center; margin:10px">
        <p>A sample application to log into Facebook using Graph API.</p>
        <ons-button ng-click="ConnectToFB()" ng-hide="login_status">
            Connect
        </ons-button>
        </div>
        ...
    </div>
</ons-page>
...
```

![Startup Page](images/facebook/5.png){width="346px"}

### Friend List page

The following block code will show the friend list if the user is
successfully logged in (see the screenshot below).

``` {.sourceCode .HTML}
...
<div ng-show="login_status">
    <p  style="padding-left: 10px">Now showing 20 of {{friends.length}} friends:</p>

    <ons-list modifier="inset">
        <ons-list-item ng-repeat="friend in friends | limitTo : 20">
            <ons-row>
                <ons-col class="col-style" width="30%">
                    <img src="{{friend.picture.data.url}}" class="profile-pic">
                </ons-col>
                <ons-col class="col-style" width="70%">
                    <p>{{friend.name}}</p>
                </ons-col>
            </ons-row>
        </ons-list-item>
    </ons-list>
</div>
...
```

![Friend List](images/facebook/7.png){width="346px"}

JavaScript Explanation
----------------------

In order to log into Facebook, we are using [Graph
API](https://developers.facebook.com/docs/reference/api/) and
InAppBrowser plugin &lt;inappbrower\_plugin&gt;. The Graph API is the
primary way for apps to read and write to the Facebook social graph. We
use InAppBrowser to open a Facebook authentication page inside the app
without opening of an external browser.

![Facebook Login using
InAppBrowser](images/facebook/6.png){width="346px"}

We use AngularJS in our code execution. In this app, we only have one
controller, called `HomeCtrl`. This controller will handle the login,
logout and friend list retrieval from Facebook. Before running the app,
please do not forget to fill in your App ID and App Secret.

``` {.sourceCode .javascript}
...
    app.controller('HomeCtrl', function($scope, $http) {
    console.log('home');
    var friendsList={};
    var login_accessToken;
    var accessToken;

    $scope.Logout = function(){
        console.log(login_accessToken);
        var url = "https://www.facebook.com/logout.php?access_token=" + login_accessToken + "&next='https://www.google.com'";
        var ref = window.open(url, '_blank', 'location=yes,clearsessioncache=yes,clearcache=yes,hidden=yes');

        $http.get(url).success(function(data){
           $scope.login_status = 0;
        });
    }

    $scope.ConnectToFB = function(){
        console.log('connect');
        var client_id = 'XXXXXXXXXXXXXXXX'; //your App ID or API Key
        var client_secret = 'XXXXXXXXXXXXXXXXXXXX'; //// your App Secret
        var redirect_uri = 'https://www.facebook.com/connect/login_success.html';  //// YOUR CALLBACK URL
        var display = 'touch';
        var authorize_url = "https://graph.facebook.com/v2.0/oauth/authorize?";
        authorize_url += "client_id=" + client_id;
        authorize_url += "&redirect_uri=" + redirect_uri;
        authorize_url += "&display=" + display;
        authorize_url += "&scope=public_profile,email";

        var ref = window.open(authorize_url, '_blank', 'location=yes');
        ref.addEventListener('loadstart', function(event)
        {
            var loc = event.url;
            if(loc.indexOf(redirect_uri + "?") >= 0)
            {
                ref.close();
                var result = loc.split("#")[0];
                console.log(loc);
                login_accessToken = result.split("&")[0].split("=")[1];

                var url = 'https://graph.facebook.com/v2.0/oauth/access_token?';
                    url += 'client_id=' + client_id;
                    url += '&client_secret=' + client_secret;
                    url += '&code=' + login_accessToken;
                    url += '&redirect_uri=' + redirect_uri;

                $http.post(url,null).success(function(data){
                    accessToken = data.split("&")[0].split("=")[1];
                    console.log(accessToken);
                    url = "https://graph.facebook.com/v2.0/me/taggable_friends?access_token=" + accessToken;
                    $http.get(url).success(function(data){
                        $scope.friends = data.data;
                        $scope.login_status = 1;
                    });
                });
            }
        });
    }
});
```
