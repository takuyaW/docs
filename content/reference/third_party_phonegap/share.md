---
title: Share Plugin (Android)
---

# Share Plugin (Android)

Share plugin lets an app to share data with other apps like Gmail,
DropBox, etc.

{{<note>}}
This plugin is available only to Android platform.
{{</note>}}

## Enable Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `Share` plugin to add it into your
    project.

    {{<img src="/images/reference/third_party_phonegap/share/1.png">}}

## Methods

Function Name| Description
-------------|----------------------------------------------------------
show(func)   |Show a list of apps for user to choose and share the data when an app is selected.


## Share Plugin Demo

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

See Also:

- [Core Cordova Plugins](../../cordova_6.5)
- [Monaca Power Plugins](../../power_plugins)
