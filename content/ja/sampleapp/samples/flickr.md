Flickrアプリ
============

このサンプルアプリでは、Flickr
から画像を取得して、スライドショーをします。

  *テスト環境* Android 7.0                                   iOS 10.1.1                                   
  ---------------------------------------------------------- -------------------------------------------- --------------------------------------------------------------------------------------------------------
  .. raw:: html                                                                                           
  &lt;div class="iframe-sample                               s"&gt;                                       
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa                 tes/18-flickr-sample/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                                            
                                                                                                          
  ファイル構成                                                                                            
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                                
  .. image:: images/flickr/1.                                png                                          
  :width: 210px                                                                                           
  :align: center                                                                                          
  ==========================                                 ============================                 ======================================================================================================
  `index.html`                                               スタート画面のページ                         
  `css/style.css`                                            プロジェクトのスタイルシート                 
  `js/main.js`                                               プロジェクトの JavaScript ファイル           
  `js/jquery.bxslider.js`                                    写真のスライドアニメ用の Javascript ファイ   ル
  `images/*.png`                                             このプロジェクトで使用する画像ファイル       

必要な JS/CSS コンポーネント
----------------------------

  `jQuery`                                                   
  ---------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  HTML の解説                                                
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^               
  index.html ファイル内の次の                                記述 ( HTML の &lt;body&gt; 内 ) で、タイトルバー ( title-bar )、スピナー ( loadSpinner / 「 処理中 」 を示す画像 )、コンテナ ( container ) を使用して、画像の表示を行います ( 下のスクリーンショットを参照のこと )。
  .. code-block:: html                                       
  &lt;div id="title-bar"&gt;                                 
  &lt;h2&gt;Monaca Photo Vie                                 wer&lt;/h2&gt;
  &lt;/div&gt;                                               
  &lt;div id="loadSpinner"&gt;&lt;/                          div&gt;
  &lt;div id="container"&gt;&lt;/di                          v&gt;
  &lt;div id="bottom"&gt;&lt;img sr                          c="images/logo-monaca.png" width="160"&gt;&lt;/div&gt;
                                                             
  .. figure:: images/flickr/3.                               png
  :width: 250px                                              
  :align: center                                             
  JavaScript の解説                                          
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^
  このサンプルアプリには、2 つのメインの関数があります       。
  jsonFlickrFeed()                                           

Flickr API の読み込み時に、`jsonFlickrFeed()` を呼び出します。Flickr API
自体は、 index.html
の読み込み時に呼び出されます。`<script src=\"http://api.flickr.com/services/feeds/photos_public.gne?format=json\" defer></script>`
の一行が、index.html のヘッダー内に記述されており、ここで Flickr API
を呼び出しています。この関数では、ローカル変数 `images`
に取得した画像を格納して、 `displayPicture()` 関数を 1
秒毎に呼び出し、カルーセル形式のスライドショーとして、画像を表示しています。この関数の
JavaScript コードを次に記します。

``` {.sourceCode .javascript}
var images = [];

// This function is fired when the Flickr API is loaded.
function jsonFlickrFeed(result) {
  for (var j in result.items) {
    var img = result.items[j].media.m;
    images.push(img);
  }

  // display next photo every 1 second
  setTimeout(displayPicture, 1000);
}
```

### displayPicture()

displayPicture() では、 `images` 変数に格納された画像 ( Flickr から取得
) を、 index.html 内で作成したコンテナ ( container )
を使用して表示します。この関数の JavaScript コードを次に示します。

``` {.sourceCode .javascript}
//Display the retrieved photos from Flickr as a slide show
function displayPicture() {
  $("#container").css("visibility", "hidden");
  var $ul = $("<ul>");

  for(var j in images) {
    var srcUrl = images[j];
    li = '<li><img src="' + srcUrl + '" id ="list" width="60%"  /></li>';
    $ul.append($(li));
  }

  $("#container").append($ul);
  //Setting for photo sliding animation
  $ul.bxSlider({
    auto: true,
    pager: false,
    speed: 500,
    pause: 1800,
    controls: false,
  });

  $("#loadSpinner").remove();
  $("#container img").addClass("shadow");

  setTimeout(function() {
    $("#container").css("visibility", "visible");
  }, 1000);
}
```
