---
title: Share プラグイン ( Android 向け )
weight: 40
---

Share プラグインを使用すれば、他のアプリ ( Gmail、Dropbox など )
とデータを共有できます。

{{<note>}}
このプラグインは、Android プラットフォーム専用です。
{{</note>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 {{<menu menu1="ファイル" menu2="Cordova プラグインの管理">}} または
    {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  Share の {{<guilabel name="有効">}} ボタンをクリックして、プロジェクトへ追加します。

    {{<img src="/images/reference/third_party_phonegap/share/1.png">}}

メソッド
--------

関数名 | 解説
-------------|----------------------------------------------------------
show(func)   | データを共有するアプリの一覧を表示して、アプリの選択後に、データの共有を行います。                               

Share プラグインの記述例
------------------------

{{<highlight html>}}
<!DOCTYPE HTML>
<html>

<head>
  <title>Cordova - Share Plugin Demo</title>

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
  <hr> Share Plugin Demo<hr><br>
  <input type="button" onClick ="shareDemo()" value ="shareDemo" />
</body>
</html>
{{</highlight>}}