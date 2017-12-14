---
title: Twitter Client
hidden: true
---

This sample app is showing the Twitter Timeline of a specified user. It allows user to connect to Twitter from Monaca app by using [OAuth protocol](https://dev.twitter.com/docs/auth/oauth) and InAppBrowser. If you want to use other APIs, please refer [Twitter Documentation](https://dev.twitter.com/docs) .

*Tested Environments:* Android 6.2, iOS 10.1

<div class="iframe-samples">
  <iframe src="https://monaca.github.io/project-templates/14-twitter-client/www/index.html" style="max-width: 150%;"></iframe>
</div>

{{<download href="/download/twitter.zip" title="Click here to download project">}}

## Prerequisite

You are required to obtain *API key* and *API secret* by registering your Monaca app with Twitter Developer:

1.  Go to [Twitter Developer Site](https://dev.twitter.com/). Sign in
    with a valid Twitter account. If you don't have one, please sign up.

2.  Go to My applications. Then, click on Create New App button.
    {{<figure src="/images/sampleapp/twitter/site_1.png">}}

3.  Fill in the information of your app such as: Name, Description,
    Website and Callback URL. Tick Yes, I agree. Then, click
    Create your Twitter application button.
4.  Go to Settings tab and tick
    Allow this application to be used to Sign in with Twitter. (See
    screenshot below)
    {{<figure src="/images/sampleapp/twitter/site_2.png">}}

5.  Go to API Keys tab and take note of the API key and API secret. You
    will need them later. You can also regenerate the API keys.
    {{<figure src="/images/sampleapp/twitter/site_3.png">}}

## File Components

{{<figure src="/images/sampleapp/twitter/twitter_2.png">}}

 File                                   | Description
----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`index.html`                            | The startup Page (Consists of Connect Screen)
`css/app.css`                           | A stylesheet file for the application
`css/onsen-css-components-default.css`  | A stylesheet file for [Onsen UI](http://onsenui.io/) components
`js/jsoauth.js`                         | A JavaScript library implementing the [OAuth protocol](https://dev.twitter.com/docs/auth/oauth) which aims to form the basis of custom clients such as Twitter. [See more about jsOAuth](https://github.com/bytespider/jsOAuth)
`js/underscore.js`                      | A JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. [See more about this library](http://underscorejs.org/)

### Required JS/CSS Components

  `jQuery`                                                   

### Required Cordova Plugins                                   

  `InAppBrowser`                                             

## HTML Explanation

The User Interface for this sample app is based on *Onsen UI
Components*. For more information on *Onsen UI* tags and components,
please refer to [Onsen UI
Documentation](https://docs.monaca.io/en/products_guide/onsenui/).

The following contents of the HTML body of index.html file is for the
navigation bar of the application which has a Twitter icon on the left,
Search icon on the right and entitled as `"Twitter Timeline"` (see
screenshot below):

``` {.sourceCode .xml}
...
  <div class="navigation-bar">
    <div class="navigation-bar__left">
      <span class="icon-button--quiet navigation-bar__line-height">
        <!-- NOOP -->
        <i class="fa fa-twitter navi-fontsize"></i>
      </span>
    </div>
    <div class="navigation-bar__center">
      <span class="navigation-bar__title navigation-bar__line-height">Twitter Timeline</span>
    </div>
    <div class="navigation-bar__right">
      <span class="icon-button--quiet navigation-bar__line-height font-bold">
        <!-- NOOP -->
        <i class="fa fa-search navi-rightadjust"></i>
      </span>
    </div>
  </div>
...
```

{{<figure src="/images/sampleapp/twitter/twitter_3.png">}}

The following contents of the HTML body of index.html file is for the
Connect to Twitter button and a place to load the content of the Twitter
timeline (see screenshot below):

``` {.sourceCode .xml}
...
  <div class="list scroll-area">
      <div id="btnLogin">
          <button onclick="connect();" class="button--large">Connect to Twitter</button>
      </div>


    <ul class="list__container" id="item-list">
      <!-- using micro-templating trick -->
      <script type="text/template" id="item-list-item">
        <li class="list__item list__item__line-height list-item-container">
          <div class="list-item-main">
            <div class="list-item-left">
              <img src="<%=user.profile_image_url%>" class="list-item-face">
            </div>
            <div class="list-item-right">
              <span class="list-item-name">
                <%=user.name%>
                <span class="lucent">@<%=user.screen_name%></span>
              </span>
              <br />
              <span class="list-item-text">"<%=text%></span>
            </div>
          </div>
        </li>
      </script>
    </ul>
  </div>
...
```

{{<figure src="/images/sampleapp/twitter/twitter_4.png">}}

## JavaScript Explanation

The logic behind this app is based on *InAppBrowser* and *OAuth
protocol*. We use InAppBrowser to open a Twitter authentication page
inside our app. This prevents an opening of an external browser.

The OAuth protocol is used to send authorized requests to Twitter API.
It’s a secure way to interact with Twitter since users are not required
to share their passwords with 3rd party applications. For more
information about OAuth protocol, please refer to
[this](https://dev.twitter.com/docs/auth/oauth).

We will explain the JavaScript code of this app as follows:

### Initialize Oauth Object

Before starting to use an Oauth object, you will need to initialize it
first. In order to do that, you will need to have `API Key`,
`API Secret` and a valid callback URL. Here is how to initialize an
Oauth object:

``` {.sourceCode .javascript}
...
  // URL to be redirected after the OAuth authentication is done
  var callbackUrl = "http://example.com";

  // jsOAuth object
  var oauth = OAuth({
    consumerKey: "", // REPLACE HERE TO YOUR CONSUMER KEY or API KEY
    consumerSecret: "", // REPLACE HERE TO YOUR CONSUMER SECRET or API SECRET
    callbackUrl: callbackUrl,
    requestTokenUrl: "https://api.twitter.com/oauth/request_token",
    authorizationUrl: "https://api.twitter.com/oauth/authorize",
    accessTokenUrl: "https://api.twitter.com/oauth/access_token"
  });
...
```

### connect() function

Here is the `connect()` function:

``` {.sourceCode .javascript}
function connect() {

    oauth.fetchRequestToken(function (url) {
      console.log("Opening Request Token URL: " + url);
      showAuthWindow(url);
    }, function (data) {
      console.log(JSON.stringify(data));
    });
}
```

This function is called when the user clicks on Connect to Twitter
button. It is asking the user to login to Twitter by using
InAppBrowswer. In other words, it is requesting for the authentication
token by asking the user to authenticate through InAppBrowser via
another function called `showAuthWindow()`.

### showAuthWindow() function

Here is the `showAuthWindow()` function:

``` {.sourceCode .javascript}
function showAuthWindow(url) {
  var browser = window.open(url, '_blank', 'location=yes');
  browser.addEventListener('loadstart', function(event) {
    if (event.url.indexOf(callbackUrl) >= 0) {
      event.url.match(/oauth_verifier=([a-zA-Z0-9]+)/);
      oauth.setVerifier(RegExp.$1);
      oauth.fetchAccessToken(function (data) {
        getTwits();
        browser.close();
      }, function (data) {
        console.log(JSON.stringify(data));
      });
    }
  });
}
```

In this function, a browser is open for Twitter user authentication (see
screenshot below). If the authentication is success (i.e the callback
URL is successfully loaded), the Access Token is stored inside the oauth
object and `getTwits()` function is called. After that, the browser is
closed.

{{<figure src="/images/sampleapp/twitter/twitter_5.png">}}

### getTwits() function

Here is the `getTwits()` function:

``` {.sourceCode .javascript}
function getTwits() {
  $('#btnLogin').hide();
  oauth.getJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=monaca_io&count=20',
  function(data) {
    showTwits(data);
  }, function(data){
    console.log(JSON.stringify(data));
  });
}
```

This function is used to get a specific user's timeline. First, it
starts to hide the Connect to Twitter button. Then, using oauth API to
fetch the user's timeline. After that, calling `showTwits()` function to
load the content into the app.

### showTwits() function

Here is the `showTwits()` function:

``` {.sourceCode .javascript}
function showTwits(data) {
  var i;
  var template = _.template(document.getElementById("item-list-item").innerHTML);
  _.each(data, function(item) {
    document.getElementById("item-list").innerHTML += template(item);
  });
}
```

This function is used to display the twit information. It uses
`underscore.js` library for templating (see screenshot below).

{{<figure src="/images/sampleapp/twitter/twitter_6.png">}}
