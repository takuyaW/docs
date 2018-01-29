---
title: セキュア ストレージ プラグイン
weight: 30
---

ストレージ内のデータの暗号化を行うプラグイン ( Monaca Secure Storage )
です。このプラグインを組み込んだアプリをアンインストールするときには、保存されたデータも、共に消去されます。

{{<note>}}
  このプラグインを使用するためには、対応するプランへの加入が必要となります。詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="料金プラン">}} をご確認ください。
{{</note>}}

サポート対象のプラットフォーム
------------------------------

-   Cordova 4.1 以降
-   iOS
-   Android

暗号化方式
----------

- 暗号化方式 AES   
- 鍵長 `256` bit

プラグインの追加方法
--------------------

1.  Monaca クラウド IDE メニュー上で、
    {{<menu menu1="ファイル" menu2="Cordova プラグインの管理...">}} または
    {{<menu menu1="設定" menu2="Cordova プラグインの管理...">}} を選択します。

2.  `Monaca Secure Storage` の {{<guilabel name="有効">}} ボタンをクリックして、プロジェクトへ追加します。

    {{<img src="/images/reference/power_plugins/secure_storage/1.png">}}

メソッド
--------

メソッド | 解説
-------|-----------------
データの保存用メソッド | `key` と `value` を使用して、ストレージにデータを保存します。コールバック ( 戻り値 : boolean ) を使用して、保存が完了したか ( `True` )、失敗したか ( `false` ) を確認します。 (`false`).{{<highlight javascript>}}
plugins.secureStorage.setItem   (key, value, function(result) {
// result: true=success, false=error
});{{</highlight>}}
データの取得用メソッド | 指定された key を使用して、データを取得します。key と一致したデータがあれば、コールバックを使用して、そのデータを返します。一致するデータがなければ場合、null を返します。 {{<highlight javascript>}}
plugins.secureStorage.getItem(key, function(value) {
// value: null = no such a value
});{{</highlight>}}
データの削除用メソッド ( 1件 ) | 指定された key を使用して、データを削除します。コールバック ( 戻り値 : boolean ) を使用して、データの削除が成功したか ( `True` )、失敗したか ( `false` ) を確認します。 {{<highlight javascript>}}
plugins.secureStorage.removeItem(key, function(result) {
// result: true=success, false=error
});{{</highlight>}}
データの削除用メソッド ( 全件 ) | ストレージ内のすべてのデータを削除します。コールバック ( 戻り値 : boolean ) を使用して、データの削除が成功したか ( `True` )、失敗したか ( `false` ) を確認します。 {{<highlight javascript>}}
plugins.secureStorage.clear(function(result) {
// result: true=success, false=error
});{{</highlight>}}

App Store への提出に際して
--------------------------

このプラグインでは、iOS SDK
の暗号化ライブラリーを使用しています。よって、このプラグインを組み込んだ、ビルド済みアプリを
App Store
へ提出して審査を受ける場合、アップロード時には特別な設定が必要となります。Export
Compliance 上の 2 つの質問に対して、次のように、「 Yes 」 で答えます。

{{<figure src="/images/reference/power_plugins/secure_storage/2.png">}}
