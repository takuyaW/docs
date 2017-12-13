nend ( ネンド広告 )
===================

Monacaで開発したアプリには、WebView上に表示できるものであれば広告ネットワーク各社が提供している広告を掲載することができます。
Monacaの利用規約ではアプリ内広告の表示について特に規制・条件は設けておりませんので、利用に際しては広告ネットワーク各社の規約等を確認の上ご利用ください。

Monacaアプリ上に掲載できる広告ネットワークサービスの例として、株式会社ファンコミュニケーションズ様提供の
[nend ( ネンド広告 )](http://nend%20%20(%20ネンド広告%20).net/)
とMonacaアプリへの広告掲載の方法を紹介します。なお、以下の手順は2013年5月現在のものです。

(1) nend ( ネンド広告 )への掲載アプリ審査登録

> [nend ( ネンド広告
> )のサイト](http://nend%20%20(%20ネンド広告%20).net/)
> から、左上の「アプリ・サイト運営者様」→「今すぐ始める」と進み、メディアパートナーとして登録、サイト/アプリを登録申請します。
>
> ![image](images/nend%20%20(%20ネンド広告%20)/nend%20%20(%20ネンド広告%20)_top.png)
>
> > class
> >
> > :   leftfit
> >
(2) nend ( ネンド広告 )の広告コードの取得

> サイト/アプリの審査後、管理画面から、\[ 広告枠の管理 \] → \[ 広告枠 \]
> で登録したサイト/アプリを表示します。
>
> ![image](images/nend%20%20(%20ネンド広告%20)/nend%20%20(%20ネンド広告%20)_manage.png)
>
> > class
> >
> > :   leftfit
> >
> サイト/アプリ名の下にある 「 広告コード 」
> をクリックすると、広告掲載用のコードが表示されますので、これをコピーします。
>
> ![image](images/nend%20%20(%20ネンド広告%20)/nend%20%20(%20ネンド広告%20)_code.png)
>
> > class
> >
> > :   leftfit
> >
(3) Monaca アプリへの 「 広告コード 」 の埋め込み

> nend ( ネンド広告
> )の広告コードの例を下記に示します。(xxx...はダミーです。ここには実際のコードが埋め込まれます。)
>
> 広告コードはiOS用とAndroid用で異なります。
> アプリがそれぞれのOS専用の場合は、上記コードをそのままアプリに埋め込んでもかまいせん。iOS/Androidアプリそれぞれに共通のソースコードとする場合は、
> nend ( ネンド広告 )\_params
> を設定している部分を、OS毎に切り替えるようにソースを記述する必要があります。
>
> ``` {.sourceCode .html}
> <head>
> <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
> <script src="components/loader.js"></script>
> <script>
>
>   var nend  ( ネンド広告 )_params;
>
>   //iOS/Androidアプリそれぞれに共通のコードとする場合は下記のように処理を切り分けます。
>   if( monaca.isIOS ){
>     nend  ( ネンド広告 )_params = {"media":xxxx,"site":xxxxx,"spot":xxxxx,"type":x,"oriented":x}; // iOS
>   }
>   if( monaca.isAndroid ){
>     nend  ( ネンド広告 )_params = {"media":xxxx,"site":xxxxx,"spot":xxxxx,"type":x,"oriented":x}; // Android
>   }
>
>
>   //広告をタップするとそのままリンク先を開いてしまうことがありますので、その対策を記述します。
>   window.addEventListener('load', function() {
>     var nend  ( ネンド広告 )_links = document.querySelectorAll('.nend  ( ネンド広告 )_wrapper a');
>     for(var i = 0; i < nend  ( ネンド広告 )_links.length; i+=1){
>       (function() {
>         var href = nend  ( ネンド広告 )_links[i].href;
>         nend  ( ネンド広告 )_links[i].href = "#";
>         nend  ( ネンド広告 )_links[i].onclick = function(){window.open(href); return false;}
>       })();
>     }
>   });
> </script>
> </head>
>
> <!--広告を貼付けたい箇所に下記のコードを記入します-->
> <div class="nend  ( ネンド広告 )_wrapper"><script src="http://js1.nend  ( ネンド広告 ).net/js/nend  ( ネンド広告 )AdLoader.js"></script></div>
> ```
>
> 問題がなければ、次のように、広告が表示されます。
>
> ![image](images/nend%20%20(%20ネンド広告%20)/nend%20%20(%20ネンド広告%20)_sample_filtered.png)
>
> > class
> >
> > :   leftfit
> >
Onsen UIアプリでのnend ( ネンド広告 )広告の表示
-----------------------------------------------

Onsen UIアプリではSPA (シングルページアプリケーション)
というUI構造が採用されているため、通常のようにbodyタグ直下に広告を表示しようとしてもできないことがあります。これを回避するためにはDOM操作を行い、nend
( ネンド広告
)の広告をSPAのページ上に表示するコードを記述する必要があります。

具体的な例を、次に記します。

### AngularJS 1.x を使用する場合

``` {.sourceCode .html}
<!-- index.html -->
<html ng-app="myApp">
　<head>
```

> 　　 &lt;meta charset="utf-8"&gt; 　　 &lt;meta name="viewport"
> content="width=device-width, initial-scale=1, maximum-scale=1,
> user-scalable=no"&gt; 　　 &lt;script
> src="components/loader.js"&gt;&lt;/script&gt; 　　 &lt;link
> rel="stylesheet" href="components/loader.css"&gt; 　　 &lt;link
> rel="stylesheet" href="css/style.css"&gt; 　　 &lt;script&gt; var nend
> ( ネンド広告 )\_params =
> {"media":xxxx,"site":xxxx,"spot":xxxx,"type":xxxx,"oriented":xxxx};
> var app = angular.module('myApp', \['onsen'\]);
>
> > app.directive('nend ( ネンド広告 )AdInjector', function () {
> >
> > :   
> >
> >     return {
> >
> >     :   
> >
> >         link : function(scope, element) {
> >
> >         :   var nend ( ネンド広告 )OriginalElem =
> >             angular.element(document.querySelector('\#nend (
> >             ネンド広告 )\_wrapper')); element.replaceWith(nend (
> >             ネンド広告 )OriginalElem.clone());
> >
> >         }
> >
> >     }
> >
> > });
>
> > &lt;/script&gt;
>
> > &lt;/head&gt; &lt;body&gt; &lt;ons-navigator var="myNavigator"
> > page="page1.html"&gt;&lt;/ons-navigator&gt; &lt;div id="nend (
> > ネンド広告 )\_wrapper"&gt;&lt;script type="text/javascript"
> > src="<http://js1.nend> ( ネンド広告 ).net/js/nend ( ネンド広告
> > )AdLoader.js"&gt;&lt;/script&gt;&lt;/div&gt; &lt;/body&gt;
>
> > &lt;/html&gt;
> >
> > &lt;!-- page1.html --&gt; &lt;ons-page&gt; &lt;nend ( ネンド広告
> > )-ad-injector&gt;&lt;/nend ( ネンド広告 )-ad-injector&gt;
> > &lt;/ons-page&gt;

### AngularJS を使用しない場合

``` {.sourceCode .html}
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
```
