---
title: nend ( ネンド広告 )
weight: 40
---

Monacaで開発したアプリには、WebView上に表示できるものであれば広告ネットワーク各社が提供している広告を掲載することができます。
Monacaの利用規約ではアプリ内広告の表示について特に規制・条件は設けておりませんので、利用に際しては広告ネットワーク各社の規約等を確認の上ご利用ください。

Monacaアプリ上に掲載できる広告ネットワークサービスの例として、株式会社ファンコミュニケーションズ様提供の
[nend ( ネンド広告 )](http://nend%20%20(%20ネンド広告%20).net/) とMonacaアプリへの広告掲載の方法を紹介します。なお、以下の手順は2013年5月現在のものです。

1. nend ( ネンド広告 )への掲載アプリ審査登録
  
    [nend ( ネンド広告 )のサイト](http://nend%20%20(%20ネンド広告%20).net/) から、左上の「アプリ・サイト運営者様」→「今すぐ始める」と進み、メディアパートナーとして登録、サイト/アプリを登録申請します。

    {{<img src="/images/tips/nend/nend_top.png">}}

2. nend ( ネンド広告 )の広告コードの取得

    サイト/アプリの審査後、管理画面から、[ 広告枠の管理 ] → [ 広告枠 ] で登録したサイト/アプリを表示します。

    {{<img src="/images/tips/nend/nend_manage.png">}}

    サイト/アプリ名の下にある 「 広告コード 」をクリックすると、広告掲載用のコードが表示されますので、これをコピーします。

    {{<img src="/images/tips/nend/nend_code.png">}}

3. Monaca アプリへの 「 広告コード 」 の埋め込み

    nend のサンプル広告コードを、次に記します ( xxx... は、ダミーです。ここには、実際のコードを埋め込みます )。広告コードは、iOS と Android で異なります。 各 OS に特化しているアプリの場合には、上記のコードを、そのまま、アプリに埋め込みます。iOS と Android アプリに共通のソースコードを使用する場合には、 nend_params を設定している部分を、OS に応じて、切り替えるように記述します。

    {{<highlight html>}}
<head>
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
<script src="components/loader.js"></script>
<script>

  var nend_params;

  //iOS/Androidアプリそれぞれに共通のコードとする場合は下記のように処理を切り分けます。
  if( monaca.isIOS ){
    nend_params = {"media":xxxx,"site":xxxxx,"spot":xxxxx,"type":x,"oriented":x}; // iOS
  }
  if( monaca.isAndroid ){
    nend_params = {"media":xxxx,"site":xxxxx,"spot":xxxxx,"type":x,"oriented":x}; // Android
  }


  //広告をタップするとそのままリンク先を開いてしまうことがありますので、その対策を記述します。
  window.addEventListener('load', function() {
    var nend_links = document.querySelectorAll('.nend_wrapper a');
    for(var i = 0; i < nend_links.length; i+=1){
      (function() {
        var href = nend_links[i].href;
        nend_links[i].href = "#";
        nend_links[i].onclick = function(){window.open(href); return false;}
      })();
    }
  });
</script>
</head>

<!--広告を貼付けたい箇所に下記のコードを記入します-->
<div class="nend_wrapper"><script src="http://js1.nend.net/js/nendAdLoader.js"></script></div>
    {{</highlight>}}

    問題がなければ、次のように、広告が表示されます。

    {{<img src="/images/tips/nend/nend_sample_filtered.png">}}

## Onsen UIアプリでのnend ( ネンド広告 )広告の表示

Onsen UIアプリではSPA (シングルページアプリケーション)
というUI構造が採用されているため、通常のようにbodyタグ直下に広告を表示しようとしてもできないことがあります。これを回避するためにはDOM操作を行い、nend ( ネンド広告 )の広告をSPAのページ上に表示するコードを記述する必要があります。

具体的な例を、次に記します。

### AngularJS 1.x を使用する場合

{{<highlight html>}}
<!-- index.html -->
<html ng-app="myApp">
　<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">
  <link rel="stylesheet" href="css/style.css">
  <script>
      var nend_params = {"media":xxxx,"site":xxxx,"spot":xxxx,"type":xxxx,"oriented":xxxx};
      var app = angular.module('myApp', ['onsen']);

      app.directive('nendAdInjector', function () {
          return {
              link : function(scope, element) {
                  var nendOriginalElem = angular.element(document.querySelector('#nend_wrapper'));
                  element.replaceWith(nendOriginalElem.clone());
              }
          }
      });
    </script>
  </head>
  <body>
    <ons-navigator var="myNavigator" page="page1.html"></ons-navigator>
    <div id="nend_wrapper"><script type="text/javascript" src="http://js1.nend.net/js/nendAdLoader.js"></script></div>
  </body>
</html>

<!-- page1.html -->
<ons-page>
  <nend-ad-injector></nend-ad-injector>
</ons-page>
{{</highlight>}}

### AngularJS を使用しない場合

{{<highlight html>}}
<!-- index.html -->
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">
    <link rel="stylesheet" href="css/style.css">
    <script>
      ons.bootstrap();
      var nend  ( ネンド広告 )_params = {"media":xxxx,"site":xxxx,"spot":xxxx,"type":xxxx,"oriented":xxxx};
      ons.ready(function() {
          var nend  ( ネンド広告 )OriginalElem = angular.element(document.querySelector('#nend  ( ネンド広告 )_wrapper'));
          var nend  ( ネンド広告 )InjectElem1 = angular.element(document.querySelector('#new_nend  ( ネンド広告 )_wrapper'));
          nend  ( ネンド広告 )InjectElem1.replaceWith(nend  ( ネンド広告 )OriginalElem.clone());
      });
    </script>
  </head>
  <body>
    <ons-navigator var="myNavigator" page="page1.html"></ons-navigator>
    <div id="nend  ( ネンド広告 )_wrapper"><script type="text/javascript" src="http://js1.nend  ( ネンド広告 ).net/js/nend  ( ネンド広告 )AdLoader.js"></script></div>
  </body>
</html>

<!-- page1.html -->
<ons-page>
  <div id="new_nend  ( ネンド広告 )_wrapper"></div>
</ons-page>
{{</highlight>}}
