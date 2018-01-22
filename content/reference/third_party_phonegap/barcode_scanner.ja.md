---
title: BarcodeScanner プラグイン
weight: 10
---

{{<note>}}
BarcodeScannerプラグイン(MonacaのクラウドIDEに組み込まれているプラグイン)は、Androidバージョン6以上では動作しません。また、プロジェクトのCordovaバージョンが6.5の場合、iOSでは動作しない場合があります。プラグインが動作しない場合は、{{<link href="https://github.com/phonegap/phonegap-plugin-barcodescanner" title="PhoneGap Plugin BarcodeScanner">}} をご使用下さい。また、こちらのプラグインを使用する場合には、対応するプランへ加入する必要があります。詳細は、{{<link href="https://monaca.mobi/en/pricing" title="料金プラン">}} をご確認ください。
{{</note>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 {{<menu menu1="ファイル" menu2="Cordova プラグインの管理">}} または
    {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  BarcodeScanner の {{<guilabel name="有効">}} ボタンをクリックして、プロジェクトへ追加します。

    {{<img src="/images/reference/third_party_phonegap/barcode_scanner/1.png">}}

BarcodeScanner プラグインのデモ
-------------------------------

BarcodeScanner プラグインの使用例を、次に記します。

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