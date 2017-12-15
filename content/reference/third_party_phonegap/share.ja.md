Share プラグイン ( Android 向け )
=================================

Share プラグインを使用すれば、他のアプリ ( Gmail、Dropbox など )
とデータを共有できます。

<div class="admonition note">

このプラグインは、Android プラットフォーム専用です。

</div>

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 ファイル &gt; Cordova プラグインの管理 または
    設定 &gt; Cordova プラグインの管理 を選択します。
2.  Share の 有効 ボタンをクリックして、プロジェクトへ追加します。

> ![image](images/share/1.png){width="700px"}

メソッド
--------

  関数名 |解説                                                                         
  ------------------------------------------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  show(func)                                                                           データを共有するアプリの一覧を表示して、アプリの選択後に、データの共有を行います。

Share プラグインの記述例
------------------------

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>

<head>
  <title>Cordova - Share プラグインの記述例</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <script src="components/loader.js"></script>
  <link rel="stylesheet" href="components/loader.css">

  <script type="text/javascript">

    function shareDemo() {
      window.plugins.share.show(
          {
              subject: 'Subject test',
              text: 'text http://phonegap-fan.com/'
          },
          function() {}, // Success function
          function() {alert('Share failed')} // Failure function
      );
    }
  </script>
</head>

<body bgcolor="#ffffff">
  <hr> Share プラグインの記述例<hr><br>
  <input type="button" onClick ="shareDemo()" value ="shareDemo" />
</body>
</html>
```
