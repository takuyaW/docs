---
title: RSS リーダーのサンプルアプリ
weight: 50
---

こちらは、jQuery を使用した、RSS リーダーのアプリです。

{{<import pid="5923c410803451c87248d1f7" title="RSS Reader App  ">}}

**テスト環境** 

- Android 7.0
- iOS 10.1.1

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_2.png" width="300">}}      
                                                                                                  
## ファイル構成

 ファイル | 説明 
------|-------------
`index.html` | RSS フィードを読み込むスタート画面のページ
`loading.gif` | 「 読み込み中 」 のイメージファイル
`README.md` | このテンプレートに関する README ファイル
`js/feed-reader.js` | RSS フィードを取得するための JavaScript ファイル
`js/phpjs_LICENSE.txt` | ライセンスファイル ( 任意 )          
`css/style.css` | アプリのスタイルシート               

## 必要な JS/CSS コンポーネント

- `jQuery`                                                   

## 必要な Cordova プラグイン                                  

- `InAppBrowser`                                             

## HTML の解説

### index.html

`index.html` はスタート画面のページです。ソースコードを次に記します。

このファイルの HTML の &lt;body&gt; は、「 `loading.gif` 」、「 フィード一覧 」、「 エラーメッセージ 」 の置き場所となります。

## JavaScript の解説

### index.html

アプリを起動すると、RSS フィードの取得処理が直ちに始まります。RSS
フィードのコンテンツの読み込み中は、`loading.gif`
ファイルが表示されます。次の JavaScript コードで、RSS
フィードの取得を行う関数を呼び出します。取得処理を行う関数は、`feed-reader.js`
内で定義されています。このファイルの解説は、後ほどします。RSS
フィードで使用している URL は変更可能ですので、他の URL
もぜひお試しください。

{{<highlight javascript>}}
...
//RSS Feeds URL
Feed.feedUrl = "http://feeds.bbci.co.uk/news/technology/rss.xml";

$(function() {
    Feed.watchClick();
    Feed.load();
});
...
{{</highlight>}}

### feed-reader.js

RSS フィードを取得する関数 （ `Feed.load()` ） が呼ばれると、次の
JavaScript コードが実行されます。

{{<highlight javascript>}}
...
load: function() {
    var self = this;
    $('#mask').show();
    $('#error-message').text('');

    $.ajax({
      url: self.feedUrl,
      dataType: 'xml',
      crossDomain: true,
      success: function(data) {
        $('#feed-list').empty();

        // Display RSS contents
        var $rss = $(data);
        $rss.find('item').each(function() {
          var $item = $(this);
          $('#feed-list').append(self.createLiTag($item));
        });
      },
      error : function() {
        $('#error-message').text('Failed to load RSS.');
      },
      complete : function() {
        $('#mask').hide();
      }
    });
  }
...
{{</highlight>}}

この関数の実行に成功すると、取得した RSS
フィードが、スタート/ホーム画面のページ上に、一覧状に表示されます。下のスクリーンショットをご確認ください。

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_2.png" width="300">}}   

次の JavaScript で、スタート/ホーム画面 ( `index.html` ) の RSS
フィードの配置と表示を行います。

{{<highlight javascript>}}
...
createLiTag: function ($item) {
  var link = this.escape($item.find('link').text());
  var title = this.escape($item.find('title').text());
  var description = this.escape(strip_tags($item.find('description').text()));
  var date = new Date($item.find('pubDate').text());

  return '<li class="feed-item" data-link="' + link + '">' +
    '<time>' + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + '</time>' +
    '<h2>' + title + '</h2><p>' + description + '</p></li>';
}
...
{{</highlight>}}

RSS フィードは、一覧形式で表示されています。このフィードの各リンクをクリックすると、次のサンプルのように、ChildBrowser
内で指定先の URL へ遷移します。

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_3.png" width="300">}}  

次の JavaScript コードで上述の動作をします。

{{<highlight javascript>}}
...
watchClick: function() {
  $('#feed-list').on('click', 'li', function() {
    var url = this.dataset.link;
    if (/^http/.test(url)) {
      window.plugins.childBrowser.onClose = function() {};
      window.plugins.childBrowser.showWebPage(url);
    } else {
      alert('Invalid URL.');
    }
  });
}
...
{{</highlight>}}
