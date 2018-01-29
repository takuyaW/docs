---
title: Facebook アプリ (シングルサインオンを使用)
weight: 20
---

ここでは、Facebook 上でのシングルサインオン ( Single Sign-On/SSO )
の方法を解説します。Angular 1 と [Onsen UI](https://onsen.io/)
を使用して、Monaca クラウド IDE
上でアプリを構築します。認証処理には、[cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4)
プラグインを使用します。\[ 以下の文は現在確認中 \]
シングルサインオンには、ネイティブの Facebook
アプリを使用します。標準的なダイアログを使用した認証方法の場合、サインオンの処理が著しく遅くなります。

{{<import pid="591abc668034513c335e2ecf" title="Facebook Single Sign-on App">}}

**テスト環境** 

- Android 7.0
- iOS 10.1.1

{{<figure src="/images/sampleapp/facebook_sso/cover.png">}}

## 事前準備

`cordova-plugin-facebook4` プラグインの使用時には、`アプリ ID ( APP_ID )` と `表示名 ( APP_NAME )` が必要となります。これらの値は、『 facebook for developers 』 ページ上でアプリの登録を済ませると確認できます。次の手順に従い、アプリの登録を行います。

1. [Facebook for Developers](https://developers.facebook.com/) へ行き、Facebook アカウントを使用してログインします。

2. {{<menu menu1="マイアプリ" menu2="新しいアプリを追加">}} を選択します ( [ 新しいアプリを追加 ] サブメニューは、2回目以降にアプリを追加するときに表示されます )。

    {{<img src="/images/sampleapp/facebook_sso/add_new_app.png">}}

3. 必要な情報を入力して、{{<guilabel name="アプリ ID を作成してください">}} ボタンをクリックします。

    {{<img src="/images/sampleapp/facebook_sso/create_id.png">}}

4. ダッシュボード上で {{<guilabel name="設定">}} を選択します。次に、表示された画面上で `アプリ ID ( APP_ID )` と `表示名 ( APP_NAME )` を確認します。

5. {{<guilabel name="+ プラットフォームを追加">}} ボタンをクリックして、アプリを実行するプラットフォームを追加します。

    {{<img src="/images/sampleapp/facebook_sso/add_platform.png">}}

6. ここでは Android 上でアプリを実行するため、プラットフォームには `Android` を選択します。

    {{<img src="/images/sampleapp/facebook_sso/android.png">}}

7. 必要な情報を次のように入力します。入力後、{{<guilabel name="変更を保存">}} ボタンをクリックします。

    - Google Play パッケージ名 : Android のパッケージ名です。Monaca クラウド IDE の [ Android アプリ設定 ] に設定されている [ Android のパッケージ名 ] と同じものを設定します。

    - キーハッシュ : キーストア内に格納されている SHA-1 フィンガープリントです。Monaca クラウド IDE の [ Android キーストア設定 ] 上で作成したキーストアに格納されたものを使用します。確認方法の詳細は、[キーストア内の SHA-1 フィンガープリントを確認する方法 ( Monaca クラウド IDE 上のキーストアを使用 )]({{<ref "application.ja.md#キーストア内の-sha-1-フィンガープリントを確認する方法-monaca-クラウド-ide-上のキーストアを使用">}}) をご確認ください。
     
    - `シングルサインオン` オプションを有効にします。

        {{<img src="/images/sampleapp/facebook_sso/android_setting.png">}}

8. iOS 上でもアプリを実行する場合には、{{<guilabel name="+ プラットフォームを追加">}} ボタンをクリックして、`iOS` を追加します。

9. 必要な情報を次のように入力します。入力後、{{<guilabel name="変更を保存">}} ボタンをクリックします。

    - バンドル ID : iOS の App ID です。App ID には、Monaca クラウド IDE の [ iOS アプリ設定 ] で設定したものを使用します。

    - `シングルサインオン` オプションを有効にします。

        {{<img src="/images/sampleapp/facebook_sso/ios_setting.png">}}

## Importing the Project to Monaca Cloud IDE                                 

{{<import pid="591abc668034513c335e2ecf" title="Facebook Single Sign-on App">}}                               

## Configuring the Plugin                                                                          

認証処理には、[cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4) プラグインを使用します。このプラグインでは、[ 以下の文は現在確認中 ] シングルサインオンには、ネイティブの Facebook アプリを使用します。標準的なダイアログを使用した認証方法の場合、サインオンの処理が著しく遅くなります。

プラグインを使用する前に、次のように、[ Cordova プラグイン ] 画面上で `APP_ID ( アプリ ID )` と `APP_NAME ( 表示名 )` を設定する必要があります。

1. Monaca クラウド IDE のメニューから、{{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2. *有効なプラグイン* 欄に行きます。`cordova-plugin-facebook4` 上にマウスポインターを持っていき、{{<guilabel name="設定">}} ボタンをクリックします。

    {{<img src="/images/sampleapp/facebook_sso/plugin_config.png">}}

3. `APP_ID` と `APP_NAME` を入力します ( [Prerequisite](#prerequisite) を参照のこと )。次のスクリーンショットをご確認ください。

    {{<img src="/images/sampleapp/facebook_sso/plugin_params.png">}}

4. {{<guilabel name="OK">}} ボタンをクリックして、設定を保存します。

## Application Explanation

### ファイル構成

{{<figure src="/images/sampleapp/facebook_sso/files.png">}}

| ファイル | 説明 |
|------|-------------|
| `index.html` | スタート画面のページ |
| `home.html` | Lログインページ |
| `profile.html` | ユーザープロファイルを表示するページ |
| `css/style.css` | アプリのスタイルシート |
| `js/app.js` | アプリの実行時にさまざまな処理を行う JavaScript ファイル |

### HTML の解説

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
<body>
  <body >
      <ons-navigator id="myNavigator" page="home.html"></ons-navigator>
  </body>
</body>
</html>
{{</highlight>}}

アプリ起動時の開始地点となるページです。[ons-navigator](https://onsen.io/v2/docs/angular1/ons-navigator.html)
コンポーネントを `<body>` タグで囲っています。このコンポーネントを使用して、ページ遷移を処理します
( ページスタックの管理と実際の遷移処理をこのコンポーネントが行ってくれます )。`page` 属性には、スタック内に置く最初のページを指定します。

#### home.html

{{<highlight html>}}
<ons-page ng-controller="HomeCtrl">
  <ons-toolbar>
      <div class="center">Facebook Demo</div>
  </ons-toolbar>
  <div class="page">
      <p class="center">
          Welcome to Facebook Authentication Demo with Monaca using Onsen UI and AngularJS!
      </p>
      <ons-button ng-click="Login()">
          Connect to Facebook
      </ons-button>
  </div>
</ons-page>
{{</highlight>}}

ログインページです。端末上にログイン情報が残っていれば、`profile.html`
ページへ自動的にリダイレクトされます。

{{<figure src="/images/sampleapp/facebook_sso/home.png">}}

#### profile.html

{{<highlight html>}}
<ons-page ng-controller="ProfileCtrl">
  <ons-toolbar>
      <div class="center">Facebook Profile</div>
      <div class="right">
          <ons-toolbar-button ng-click="Logout()">
              <ons-icon icon="fa-sign-out"></ons-icon>
          </ons-toolbar-button>
      </div>
  </ons-toolbar>
  <div class="page">
      <p class="center">
          <img src="{{user.profile_url}}" class="profile">
          <p>{{user.name}}</p>
          <p>(@{{user.id}})</p>
          <p>{{user.email}}</p>
      </p>
  </div>
</ons-page>
{{</highlight>}}

ユーザーの Facebook プロファイルを表示するページです。

{{<figure src="/images/sampleapp/facebook_sso/profile.png">}}

### スタイルシートの解説

こちらのファイルには、Facebook プロファイル上の画像およびページナビゲーション用のバーに適用する CSS スタイルが記述されています。

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
  background-color: #4267b2;
}

.button {
  background-color: #4267b2;
}
{{</highlight>}}

### JavaScript の解説

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

.controller('HomeCtrl', function($scope, StorageService, $http, $q) {
  var CheckLoginStatus = function(){
      window.facebookConnectPlugin.getLoginStatus(
          function(data){
              if(data.authResponse){
                  console.log('Login info is found!');
                  myNavigator.pushPage('profile.html');
              }else{
                  console.log('No login info is found!');
              }
          },
          function(e){
              LoginError(e);
          }
      );
  }

  ons.ready(function() {
      CheckLoginStatus();
  });

  var GetProfileInfo = function (authResponse) {
      var info = $q.defer();

      facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
          function (response) {
              info.resolve(response);
          },
          function (response) {
              info.reject(response);
          }
      );
      return info.promise;
  };

  var LoginSuccess = function(response){
      var authResponse = response.authResponse;

      GetProfileInfo(authResponse).then(function(user) {
          StorageService.setLoginUser({
              name: user.name,
              id: user.id,
              email: user.email,
              profile_url: "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
          });
          myNavigator.pushPage('profile.html');
      }, function(error){
          console.log('Error retrieving user profile' + JSON.stringify(error));
      });

  };

  var LoginError = function(error){
      console.log('Login Error: ' + JSON.stringify(error));
      // When "User cancelled dialog" error appears
      if (error.errorCode === "4201"){
          CheckLoginStatus();
      }
  };

  $scope.Login = function(){
      facebookConnectPlugin.login(['email', 'public_profile'], LoginSuccess, LoginError);
  }


})
.controller('ProfileCtrl', function($scope, StorageService, $http, $q) {
  $scope.user = StorageService.getLoginUser();

  var LogoutFromFacebook = function(){
      facebookConnectPlugin.logout(
          function() {
              console.log('Successful logout!');
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
          title: 'Facebook Demo',
          buttonLabels: ["Yes", "No"],
          callback: function(idx) {
          switch (idx) {
              case 0:
                  LogoutFromFacebook();
              case 1:
                  break;
              break;
          }
        }
      });
  }
});
{{</highlight>}}

記述内容を解説します。まず、`StorageService` と呼ばれる service を 1
つ置いています。このサンプルでは、端末側の LocalStorage
を使用して、ユーザーのログイン情報を格納しています。また、`home.html` と
`profile.html` ページに対して、それぞれ、`HomeCtrl` と `ProfileCtrl`
コントローラーを設定しています。

`HomeCtrl` コントローラーには、`home.html`
ページ上で使用する関数が定義されています。`home.html`
ページが読み込まれると、`CheckLoginStatus()`
関数が実行され、ログイン情報の存否が確認されます。ログイン情報が残っていれば、`myNavigator.pushPage()`
関数が呼ばれ、`profile.html` ページが表示されます。`profile.html`
ページでは、ログイン情報と一致した、ユーザーの Facebook
プロファイルが表示されます。{{<guilabel name="Connect to Facebook">}}
ボタンがクリックされると、`Login()`
関数が実行されます。この関数内で、`facebookConnectPlugin.login()`
が実行され、ネイティブの Facebook
認証ダイアログが表示されます。ログイン成功後、`StorageService.setLoginUser()`
経由で端末側のローカルストレージにログイン情報が保存されます。次に、`myNavigator.pushPage()`
関数が実行され、`profile.html` ページが表示されます。

{{<note>}}
Facebook に以前にもログインしていた場合、アカウント情報が再利用されます。異なるアカウントを使用する場合には、Facebook
アプリを起動させ、別アカウントを使用してログインします。[ここも確認必要]
{{</note>}}

端末上に Facebook アプリがインストールされていない場合、または、端末上の
Facebook に一度もログインしていなかった場合、次の認証画面が表示されます。

{{<figure src="/images/sampleapp/facebook_sso/authentication.png">}}

`ProfileCtrl` コントローラーには、`Logout()` と `LogoutFromFacebook()`
の 2 つの関数が定義されています。`Logout()`
関数は、プロファイルページ右上に置かれたログアウト用のアイコンをクリックしたときに呼ばれます。`Logout()`
関数内では、確認用のダイアログを表示する処理を行っています。確認用のダイアログ上で、ユーザーが
`Yes` を選択した場合、`LogoutFromFacebook()` 関数と `StorageService`
の両方が呼ばれ、ユーザーのログアウトとログイン情報の削除をそれぞれ行います。

{{<figure src="/images/sampleapp/facebook_sso/confirmation.png">}}
