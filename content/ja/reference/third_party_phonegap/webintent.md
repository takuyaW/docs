WebIntent プラグイン ( Android 向け )
=====================================

WebIntent
プラグインを使用すれば、端末にインストールされている他のアプリを、Monaca
アプリから起動できます。ここでは、例として、地図を表示するアプリを起動させます。

<div class="admonition note">

このプラグインは、Android プラットフォーム専用です。

</div>

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 ファイル &gt; Cordova プラグインの管理 または
    設定 &gt; Cordova プラグインの管理 を選択します。
2.  WebIntent の 有効 ボタンをクリックして、プロジェクトへ追加します。

> ![image](images/webintent/1.png){width="700px"}

WebIntent プラグインの使用例
----------------------------

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>
<head>
  <title>WebIntent DEMO</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">

  <script type="text/javascript">
    function startActivity() {
      window.plugins.webintent.startActivity({
        action: window.plugins.webintent.ACTION_VIEW,
        url: 'geo:0, 0?q=' + 'dummy address'},
        function() {},
        function() {alert('Failed to open URL via Android Intent')}
    );
  }
  </script>
</head>
<body>
  <hr> WebIntent test <hr><br>
  <input type="button" onClick ="startActivity()" value ="startActivity()" /><br>

</body>
</html>
```

`"startActivity"` 関数の `"url"`
属性を使用して、起動させるアプリを指定できます。次に例を示します。

``` {.sourceCode .javascript}
//Call to the specified phone number
url: 'tel: phone_number=' + '03-5875-6862'

//Open the specified page in a browser
    url: 'http://www.asial.co.jp'

//Open the information of the 1st person in the contact
    url: 'content://contacts/people/1'
```
