誕生年の計算アプリ
==================

<div class="admonition note">

このサンプルアプリは、2012年12月26日に Think IT
に掲載された記事を転載したものです。

</div>

このアプリは、ユーザーの名前と年齢を入力すると、誕生年を計算して表示します。

  *テスト環境* Android 4.2                                   .2 iOS 7.1.1                   
  ---------------------------------------------------------- ------------------------------ ------------------------------------------------------------------------------------------------------------
  .. raw:: html                                                                             
  &lt;div class="iframe-sample                               s"&gt;                         
  &lt;iframe src="<https://mon>                              aca.github.io/project-templa   tes/22-birth-year-app/www/index.html" style="max-width: 150%;"&gt;&lt;/iframe&gt;
  &lt;/div&gt;                                                                              
                                                                                            
  ファイル構成                                                                              
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^                                  
  .. image:: images/age-calc/                                1.png                          
  :width: 210px                                                                             
  :align: center                                                                            
  ===========================                                ============== =============   ==========================================================================================================
  `index.html`                                               スタート画面のページ           
  `css/style.css`                                            アプリのスタイルシート         

必要な JS/CSS コンポーネント
----------------------------

  ---------- --
  `jQuery`   
  ---------- --

HTML の解説
-----------

index.html ファイル内の次の記述 ( HTML の &lt;body&gt; 内 )
で、ユーザーの名前と年齢の入力欄を 2 つ、および、誕生年の計算ボタンを 1
つ表示します ( 下のスクリーンショットを参照のこと )。

``` {.sourceCode .html}
...
  <div data-role="page" id="TopPage">
      <header data-role="header" data-position="fixed">
          <h1>誕生年の計算アプリ</h1>
      </header>
      <section data-role="content">

          What's your name?
          <input type="text" id="myname" class="input-text" style="width: 40%">

          How old are you?
          <input type="text" id="myage" class="input-text" style="width: 20%">

          <a class="button" onclick="calculate();">calculate your birth year!</a>
      </section>
  </div>
...
```

![](images/age-calc/3.png){width="250px"}

JavaScript の解説
-----------------

このコードでは、 `calculate` ( 計算 ) と名付けた関数を定義します。

まず、名前の入力値を myname 変数に、年齢の入力値を myage
変数に、それぞれ代入しています。そして、今日の日付をもとに、生まれ年を計算し、birthyear
変数に代入します。

最後に、text
という変数にメッセージの内容をセットし、navigator.notification.alert
関数を呼び出し、ポップアップ形式で表示します。

この `navigator.notification.alert` 関数は、基本 Cordova
プラグインの関数です。実行すると、画面上にポップアップダイアログを表示します。今回は、第三引数に
「 Monaca へようこそ！ 」
を指定して、ダイアログのタイトルに表示しています。

![](images/age-calc/4.png){width="250px"}
