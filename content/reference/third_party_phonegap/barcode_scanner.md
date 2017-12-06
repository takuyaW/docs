---
title: BarcodeScanner Plugin
---

# BarcodeScanner Plugin

{{<note>}}
BarcodeScanner Plugin (the built-in plugin on Monaca Cloud IDE) can't be
used with Android version 6 or higher and it may also not work with
Cordova 6.5 projects for iOS platform. In this case, please use {{<link href="https://github.com/phonegap/phonegap-plugin-barcodescanner" title="the external PhoneGap Plugin BarcodeScanner">}}.
In order to import this plugin, you need to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

## Enable Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `BarcodeScanner` plugin to add it into your
    project.

    {{<img src="/images/reference/third_party_phonegap/barcode_scanner/1.png">}}

## BarcodeScanner Demo

Here is a simple example demonstrating how to use the BarcodeScanner
plugin with Monaca:

{{<highlight javascript>}}
<!DOCTYPE HTML>
<html>
<head>
    <title>Barcode Scanner DEMO</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <script type="text/javascript">

    function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
                alert("We got a barcode\n" +
                          "Result: " + result.text + "\n" +
                          "Format: " + result.format + "\n" +
                          "Cancelled: " + result.cancelled);
            }, function(error) {
                alert("Scanning failed: " + error);
            }
        );

    }
    </script>
</head>

<body>
    <hr> BarcodeReader DEMO <hr><br>
    <input type="button" onClick ="scanBarcode()" value ="Scan" />
</body>
</html>
{{</highlight>}}

See Also:

- [Core Cordova Plugins](../../cordova_6.5)
- [Monaca Power Plugins](../../power_plugins)
