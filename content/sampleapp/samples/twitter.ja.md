Twitter クライアント
====================

このサンプルアプリでは、指定されたユーザーの Twitter
タイムラインの表示を行います。このアプリでは、[OAuth
プロトコル](https://dev.twitter.com/docs/auth/oauth) と InAppBrowser
を使用して、Monaca アプリから Twitter へ接続します。他の API
を使用する場合には、[Twitter
Documentation](https://dev.twitter.com/docs) をご確認ください。

| *テスト環境 :* Android 6.2、iOS 10.1

<div class="iframe-samples">
  <iframe src="https://monaca.github.io/project-templates/14-twitter-client/www/index.html" style="max-width: 150%;"></iframe>
</div>
こちらから、このプロジェクトをダウンロードできます。 &lt;download/twitter.zip&gt;

事前準備
--------

Twitter Developers に Monaca アプリを登録して、 *API key* と *API
secret* を取得します。

1.  [Twitter Developer Site](https://dev.twitter.com/) に行き、Twitter
    アカウントを使用してサインインします。アカウントが無い場合には、登録をはじめに行います。
2.  My applications に移動して、 Create New App ボタンをクリックします。

> ![image](images/twitter/site_1.png){width="700px"}

3.  アプリの詳細情報 ( アプリ名、説明、Web サイト、コールバック URL など
    ) を入力します。 Yes, I agree にチェックを入れて、
    Create your Twitter application ( Twitter アプリの作成 )
    ボタンをクリックします。
4.  Settings タブに行き、
    Allow this application to be used to Sign in with Twitter (
    アプリから Twitter への接続許可 ) にチェックを入れます (
    下のスクリーンショットを参照のこと )。

> ![image](images/twitter/site_2.png)
>
> > width
> >
> > :   700px
> >
5.  API Keys タブに行き、API key と API secret
    を確認します。これらのキーは、後に必要となります。API key
    は、再発行できます。

> ![image](images/twitter/site_3.png)
>
> > width
> >
> > :   700px
> >
ファイル構成
------------

![image](images/twitter/twitter_2.png){width="210px"}

  ---------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `index.html`                             スタート画面のページ ( 接続画面 )
  `css/app.css`                            アプリのスタイルシート
  `css/onsen-css-components-default.css`   [Onsen UI](https://ja.onsen.io) コンポーネント用のスタイルシート ファイル
  `js/jsoauth.js`                          [OAuth プロトコル](https://dev.twitter.com/docs/auth/oauth) を使用するための JavaScript ライブラリー。OAuth プロトコルは、Twitter のようなカスタム クライアントの基礎となるプロトコルです。jsOAuth の詳細は、 [こちらのサイト](https://github.com/bytespider/jsOAuth) をご確認ください。
  `js/underscore.js`                       役立つプログラミング機能を複数提供してくれる、JavaScript ライブラリー ( 拡張せずに、組み込み/ビルトイン オブジェクトをそのまま使用できます )。このライブラリーの詳細は、 [こちらのサイト](http://underscorejs.org/) をご確認ください。
  ---------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

必要な JS/CSS コンポーネント
----------------------------

  `jQuery`                                                   
  ---------------------------------------------------------- ------------------------------
  必要な Cordova プラグイン                                  
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   
  ============================                               ============================
  `InAppBrowser`                                             

HTML の解説
-----------

このサンプルのユーザー インターフェースは、\*Onsen UI コンポーネント\*
で構築しています。\*Onsen UI\*
のタグとそのコンポーネントの詳細は、[Onsen UI
ドキュメント](https://docs.monaca.io/ja/onsenui/) をご確認ください。

アプリのナビゲーションバーに関する記述を、次のように、index.html
ファイル ( HTML の &lt;body&gt; 内 )
に置きます。このナビゲーションバーには、Twitter のアイコン ( 左側に配置
)、検索アイコン ( 右側に配置 )、 タイトル ( `Twitter Timeline` )
を表示します ( 下のスクリーンショットを参照のこと )。

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

![](images/twitter/twitter_3.png){width="300px"}

Connect to Twitter ボタンと Twitter
タイムラインのコンテンツの読み込み場所を、index.html ファイル ( HTML の
&lt;body&gt; 内 ) で提供します ( 下のスクリーンショットを参照のこと )。

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

![](images/twitter/twitter_4.png){width="300px"}

JavaScript の解説
-----------------

こちらのアプリのロジックには、 *InAppBrowser* と *OAuth プロトコル*
を使用しています。ここでは、InAppBrowser を使用して、Twitter
認証ページをアプリ内で開きます。これにより、外部ブラウザーを立ち上げる必要がありません。

OAuth プロトコルを使用して、Twitter API
に認証リクエストを送ります。他のアプリ ( サードパーティー製 )
との間で、パスワードを共有することは避けた方がよいため、Twitter
を使用するときには、この方法が安全です。OAuth
プロトコルの詳細に関しては、
[こちら](https://dev.twitter.com/docs/auth/oauth) をご確認ください。

このアプリの JavaScript コードを解説していきます。

### Oauth オブジェクトの初期化

Oauth
オブジェクトを使用する前に、初期化を行います。初期化を行うときには、`API Key`、`API Secret`、および、有効なコールバック
URL が必要です。Oauth オブジェクトの初期化方法を、次に示します。

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

### connect() 関数

`connect()` 関数の内容を次に示します。

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

ユーザーが Connect to Twitter
ボタンをクリックしたときに、この関数が呼び出されます。このとき、Twitter
へのログインを行うか、ユーザーに確認します ( InAppBrowswer を使用
)。プログラム側では、 `showAuthWindow()`
という別の関数を経由して、InAppBrowswer
を開き、認証処理を進めるかユーザーに確認し、その回答に応じて、認証トークンをリクエストすることになります。

### showAuthWindow() 関数

`showAuthWindow()` 関数の内容を次に示します。

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

Twitter ユーザー認証用のブラウザーを、この関数で開きます (
下のスクリーンショットを参照のこと )。 認証が成功すると ( コールバック
URL の読み込み )、oauth オブジェクト内にアクセストークンを格納して、
`getTwits()` を呼び出します。その後、ブラウザーを閉じます。

![](images/twitter/twitter_5.png){width="300px"}

### getTwits() 関数

`getTwits()` 関数の内容を次に示します。

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

特定のユーザーのタイムラインを取得するときに、この関数を使用します。最初に、
Connect to Twitter
ボタンを非表示にします。次に、ユーザーのタイムラインを取得するために、oauth
API を使用します。最後に、コンテンツをアプリで表示するため、
`showTwits()` 関数を呼び出します。

### showTwits() 関数

`showTwits()` 関数を次に示します。

``` {.sourceCode .javascript}
function showTwits(data) {
  var i;
  var template = _.template(document.getElementById("item-list-item").innerHTML);
  _.each(data, function(item) {
    document.getElementById("item-list").innerHTML += template(item);
  });
}
```

ツイート情報を表示するときに、この関数を使用します。テンプレートとして、
`underscore.js` ライブラリーを使用します (
下のスクリーンショットを参照のこと )。

![](images/twitter/twitter_6.png){width="300px"}
