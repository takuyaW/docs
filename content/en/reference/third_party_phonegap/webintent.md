WebIntent Plugin (Android)
==========================

WebIntent plugin lets you start an installed application from within
Monaca application. The following sample will start an app that will
display a map.

<div class="admonition note">

This plugin is available only to Android platform.

</div>

Enable Plugin in Monaca
-----------------------

1.  From the IDE menu, go to File --&gt; Manage Cordova Plugins or
    Config --&gt; Manage Cordova Plugins.
2.  Click Enable button of the WebIntent to add it into your project.

> ![image](images/webintent/1.png){width="700px"}

WebIntent Plugin Demo
---------------------

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

Using `"url"` attribute of the `"startActivity"` function, an app can
specify the target app to be launched. Here are some examples:

``` {.sourceCode .javascript}
//Call to the specified phone number
url: 'tel: phone_number=' + '03-5875-6862'

//Open the specified page in a browser
    url: 'http://www.asial.co.jp'

//Open the information of the 1st person in the contact
    url: 'content://contacts/people/1'
```
