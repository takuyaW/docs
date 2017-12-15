時計アプリ
==========

<div class="admonition note">

このサンプルアプリは、2013年3月11日付の [Think
IT](http://thinkit.co.jp/story/2013/03/11/3987)
に掲載された記事を転載したものです。

</div>

現在の日付と時間を表示する時計アプリのサンプルです。

  *テスト環境* Android 7.0                                   iOS 10.1.1                                             
  ---------------------------------------------------------- ------------------------------------------------------ -----------------------------------------------------------------------------------------------------
                                                                                                                    
  .. raw:: html                                                                                                     
  &lt;div class="iframe-sample                               s"&gt;                                                 
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa                           tes/21-clock-app/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                                                      
                                                                                                                    
  ファイル構成                                                                                                      
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                                          
  .. image:: images/clock/1.p                                ng                                                     
  :width: 200px                                                                                                     
                                                                                                                    
  ========================== =                               ============================                           ===================================================================================================
  `index.html`                                               スタート画面のページ                                   
  `js/app.js`                                                プロジェクト内のさまざまな処理を行う JavaScri          pt ファイル
  `css/style.css`                                            プロジェクトのスタイルシート ファイル                  
  `images/*.png`                                             このテンプレートで使用する、すべてのイメージファイル   

HTML の解説
-----------

### index.html

index.html ファイル内の次の記述 ( HTML の &lt;body&gt; 内 )
で、現在の日付と時間を表示します ( 下のスクリーンショットを参照のこと
)。

``` {.sourceCode .html}
<div id="wrapper">
    <div id="container">
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-colon.png" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-colon.png" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <div id="date"></div>
    </div>
    <img src="images/logo-monaca.png" style="position: absolute; left: 40px; top: 40px;" />
</div>
```

![](images/clock/3.png){width="500px"}

JavaScript の解説
-----------------

### js/app.js

アプリが起動した後、 次の記述により、 `clock()` 関数が 1 秒 ( 1000 ms )
毎に呼び出されます。

``` {.sourceCode .javascript}
setInterval(clock, 1000);
```

`clock()`
関数を使用して、現在の日付と時間を表示します。最初に、現在の時間 (
時間、分、秒 ) を取得して、時間に応じた画像 ( 数字画像 )
を表示します。次に、現在の日付 ( 日、月、年 ) を取得して、 `renderDay()`
と `renderMonth()` 関数で定義した形式で表示します (
下のスクリーンショットを参照のこと )。`clock()`
関数の内容を次に示します。

``` {.sourceCode .javascript}
function clock() {
    // (3) Obtain "figure" class(image of the number)
    var figures = document.getElementsByClassName('figure');
    // (4) Obtain the "date" ID (Date display area)
    var date = document.getElementById('date');

    // (5) Obtain the current time
    var now = new Date();

    // (6) Set the digits for the hours
    figures[0].src = 'images/figure-' + tendigit(now.getHours()) + '.png';
    figures[1].src = 'images/figure-' + onedigit(now.getHours()) + '.png';

    // (7) Set the digits for the minutes
    figures[2].src = 'images/figure-' + tendigit(now.getMinutes()) + '.png';
    figures[3].src = 'images/figure-' + onedigit(now.getMinutes()) + '.png';

    // (7) Set the digits for the seconds
    figures[4].src = 'images/figure-' + tendigit(now.getSeconds()) + '.png';
    figures[5].src = 'images/figure-' + onedigit(now.getSeconds()) + '.png';

    // (8) Display the date
    date.textContent = renderDay(now.getDay()) + ", " + renderMonth(now.getMonth()) + " " + now.getDate() + ", " + now.getFullYear();
}
```

![](images/clock/4.png){width="500px"}
