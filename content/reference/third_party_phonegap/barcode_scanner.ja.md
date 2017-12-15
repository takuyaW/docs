BarcodeScanner プラグイン
=========================

<div class="admonition note">

BarcodeScannerプラグイン(MonacaのクラウドIDEに組み込まれているプラグイン)は、Androidバージョン6以上では動作しません。また、プロジェクトのCordovaバージョンが6.5の場合、iOSでは動作しない場合があります。プラグインが動作しない場合は、[PhoneGap
Plugin
BarcodeScanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)
をご使用下さい。また、こちらのプラグインを使用する場合には、対応するプランへ加入する必要があります。詳細は、[料金プラン](https://ja.monaca.io/pricing.html)
をご確認ください。

</div>

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 ファイル &gt; Cordova プラグインの管理 または
    設定 &gt; Cordova プラグインの管理 を選択します。
2.  BarcodeScanner の 有効
    ボタンをクリックして、プロジェクトへ追加します。

> ![image](images/barcode_scanner/1.png){width="700px"}

BarcodeScanner プラグインのデモ
-------------------------------

BarcodeScanner プラグインの使用例を、次に記します。

``` {.sourceCode .html}
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
```
