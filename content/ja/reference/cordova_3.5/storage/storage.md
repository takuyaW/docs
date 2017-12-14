ストレージ
==========

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](http://docs.phonegap.com/en/3.5.0/cordova_storage_storage.md.html#Storage)
をご確認ください。

</div>

Cordova が提供するストレージオプションの概要を記します。

Cordova アプリでは、複数のストレージ用の API
が使用できます。使用例と詳細に関しては、[html5rocks](http://www.html5rocks.com/en/features/storage)
をご確認ください。

Localストレージ
---------------

*Web Storage* もしくは *Simple Storage* として、または、\*Session
Storage\* と対をなすものとして知られています。この API
では、キーと値の組み合わせを使用した、同期的なストレージ処理を行います。また、WebView
の実装時にも使用できます。詳細に関しては、[W3C
の仕様](http://www.w3.org/TR/webstorage/) をご確認ください。

**Windows Phone 7 特有の動作** : ドット表記法は、\*使用できません。\*
よって、`window.localStorage.someKey` を使用する方法 ( Storage
オブジェクトからキーに対して、直接的なアクセスする方法 ) ではなく、
`setItem` または `getItem` を使用します。

WebSQL
------

この API は、WebView 上で使用できます。SQL
クエリーを使用した、データベースのテーブルへの問い合わせ方法の詳細は、[Web
SQL Database](http://dev.w3.org/html5/webdatabase/) をご確認ください。

次のプラットフォームでは、WebSQL がサポートされています。

-   Android
-   iOS

他のオプション
--------------

上記のストレージ用の API に加えて、[ファイル操作
API](https://github.com/apache/cordova-plugin-file/blob/master/README.md)
( File API )
を使用して、ローカルのファイルシステムに、データを保存することもできます。また、他の
[Cordova プラグイン](http://plugins.cordova.io/)
のいくつかでも、同様のストレージ機能が提供されています。
