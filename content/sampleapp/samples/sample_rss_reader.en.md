---
title: RSS Reader App
weight: 50
---

This is an RSS reader application using jQuery.

{{<import pid="5923c410803451c87248d1f7" title="RSS Reader App  ">}}

**Tested Environment** 

- Android 7.0
- iOS 10.1.1

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_2.png" width="300">}}      

##  File Components                                                                      

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_1.png">}}           

| File | Description |
|------|-------------|
| `index.html` | The Startup page where RSS feeds will be loaded |
| `loading.gif` | A loading image file |
| `README.md` | A README file about this template |
| `js/feed-reader.js` | A JavaScript file for retrieving the RSS feeds |
| `js/phpjs_LICENSE.txt` | A license file (You can ignore this file.) |
| `css/style.css` | Style Sheet for the application |

## Required JS/CSS Components

- `jQuery`

## Required Cordova Plugins                                   

- `InAppBrowser`                                             

## HTML Explanation

### index.html

`index.html` is the Startup page.

The HTML body of this file is simply a placeholder of a `loading.gif`,
the feed list and error message.

## JavaScript Explanation

### index.html

As soon as the application starts, the RSS feeds retrieval also begins.
While loading the content of RSS feeds, `loading.gif` file is displayed.
The following JavaScript code is used to invoke the RSS feeds retrieval
function. This function is defined in `feed-reader.js` file which will be
explained later in this page. You can try changing the RSS feeds URL.

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

When the RSS feeds retrieval function (`Feed.load()`) is called, the
following JavaScript code is executed:

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

If the function is executed successfully, the retrieved RSS feeds are
listed in the Home screen as shown in the screenshot below.

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_2.png" width="300">}}   

The following JavaScript code corresponds to the display arrangment of
RSS feeds in the Home screen (`index.html`):

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

The RSS feeds are displayed in a list view format. When click on each
link of the feeds, it forwards to the corresponded URL in a ChildBrowser
as shown below:

{{<figure src="/images/sampleapp/sample_rss_reader/rss_reader_3.png" width="300">}}  

The following JavaScript code corresponds to the above function:

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
