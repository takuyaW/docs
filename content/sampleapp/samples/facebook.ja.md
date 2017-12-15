Facebook のデモ用アプリ
=======================

こちらのデモ用アプリでは、Facebook 提供の [Graph
API](https://developers.facebook.com/docs/reference/api/)
を使用して、Facebook へのログインおよびログアウトを行っています。

| *テスト環境 :* Android 6.2、iOS 9.3.5

> ![](images/facebook/5.png){width="346px"}
>
> ![](images/facebook/7.png){width="346px"}

こちらから、このプロジェクトをダウンロードできます。 &lt;download/facebook.zip&gt;

事前準備
--------

こちらのデモ用アプリを動作させるためには、最初に、Facebook
の開発者向けのサイト上で、アプリを登録する必要があります。登録時に発行される
*アプリ ID* ( App ID ) と *App Secret*
は、後から必要となりますので、手元に保存します。

次の手順に従い、Facebook 開発者向けサイト上で、アプリを登録します。

1.  [Facebook for Developers](https://developers.facebook.com/)
    へ行き、Facebook アカウントを使用してログインします。
2.  マイアプリ --&gt; 新しいアプリを追加 を選択します ( \[
    新しいアプリを追加 \]
    サブメニューは、2回目以降にアプリを追加するときに表示されます )。

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
3.  プラットフォームとして、`ウェブサイト` を選択します。

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
4.  アプリ名を入力して、新しい Facebook アプリ ID を作成
    をクリックします。

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
5.  連絡先メールアドレスとカテゴリを選択して、アプリ ID を作成してください
    をクリックします。

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
6.  \[ セキュリティチェック \] ページ上の質問に回答します。
7.  Skip Quick Start
    ボタンをクリックして、アプリのダッシュボードを表示させます。

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
8.  設定 をクリックして、アプリドメインと各種 URL を入力します ( \[ 設定
    \] ページ上では、\*App ID\* ( アプリ ID ) と *App Secret*
    を確認することもできます )。次に、変更を保存 をクリックします。

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
ファイル構成
------------

![image](images/facebook/8.png){width="209px"}

  ------------------ ----------------------------------------------------------
  `index.html`       スタート画面のページ
  `js/app.js`        アプリの実行時にさまざまな処理を行う JavaScript ファイル
  `styles/app.css`   アプリのスタイルシート
  ------------------ ----------------------------------------------------------

必要な JS/CSS コンポーネント
----------------------------

  `Onsen UI ( AngularJS も併用 )`                            
  ---------------------------------------------------------- ------------------
  必要な Cordova プラグイン                                  
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   
  ============================ ============                  ================
  `InAppBrowser`                                             

HTML の解説
-----------

このデモ用アプリでは、[Onsen UI](https://onsen.io/) を使用して、UI
を構築しています。

### 起動時のページ

次のコードを使用して、プロジェクトの起動時に表示されるページを構築しています。

``` {.sourceCode .HTML}
...
<ons-page ng-controller="HomeCtrl" ng-init="login_status=0">
    <ons-toolbar>
        <div class="center">Facebook のデモ用アプリ</div>
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

![起動時のページ](images/facebook/5.png){width="346px"}

### 友達リスト画面

次のコードを使用して、友達リストを表示します (
ユーザーがログイン済みであることが前提 )。

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

![友達リストの画面](images/facebook/7.png){width="346px"}

JavaScript の解説
-----------------

このデモ用アプリでは、Facebook へのログイン時には、[Graph
API](https://developers.facebook.com/docs/reference/api/) と
InAppBrowser プラグイン &lt;inappbrower\_plugin&gt;
を使用しています。Graph API は、Facebook の 「 ソーシャルグラフ 」
へのデータ操作 ( 読み込み・書き込み ) を行うときに使用する API
です。一方、InAppBrowser
プラグインは、外部のブラウザーを起動させずに、Facebook
の認証をアプリ内で行うためのプラグインです。

![Facebook ログインの画面 ( InAppBrowser を使用
)](images/facebook/6.png){width="346px"}

このデモ用アプリでは、AngularJS も使用しています。`HomeCtrl`
と名付けたコントローラーを使用して、Facebook
へのログインとログアウト、Facebook
からの友達リストの取得を行っています。なお、アプリを実際に実行する場合には、コード内のアプリ
ID/App ID と App Secret には、適宜、値を挿入する必要があります。

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
