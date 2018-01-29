---
title: コレクションアイテムの管理
weight: 30
---

コレクションアイテムの管理に使用する Monaca バックエンド マネジメント
API を、次に記します。

メソッド | 解説
-------|-----------------------
[CollectionItem.list()](#collectionitem-list) | コレクション内のアイテムの一覧を取得します。
[CollectionItem.create()](#collectionitem-create) | コレクションアイテムを作成します。
[CollectionItem.get()](#collectionitem-get) | コレクションアイテムを取得します。
[CollectionItem.update()](#collectionitem-update) | コレクションアイテムを更新します。
[CollectionItem.delete()](#collectionitem-delete) | コレクションアイテムを削除します。
[CollectionItem.getPermission()](#collectionitem-getpermission) | コレクションアイテムのパーミッション ( 権限 ) を取得します。
[CollectionItem.setPermission()](#collectionitem-setpermission) | コレクションアイテムのパーミッション ( 権限 ) を設定します。

CollectionItem.list()
------------------------------------------------------------------

コレクション内のアイテムの一覧を取得します。

{{<highlight javascript>}}
CollectionItem.list(collectionName: String, page: Number, itemsInPage: Number, sortProperty: String, sortOrder: String, propertyNames: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`page` | 数値 | ページ番号 ( `1` から開始 ) です。
`itemsInPage` | 数値 | 1 つのページに表示されるアイテムの数です。
`sortProperty` | 文字列 | ソート時に使用するプロパティーです。
`sortOrder` | 文字列 | ソート順には、 `asc` または `desc` （ デフォルトでは `asc` ）が指定できます。
`propertyNames` | 文字列 | システムプロパティーに加え、追加で取得するプロパティーです。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`items` | JSON オブジェクト | アイテムです。
`totalItems` | 数値 | アイテム数です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.create()
--------------------------------------------------

コレクションアイテムを作成します。

{{<highlight javascript>}}
CollectionItem.create(collectionName: String, item: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`item` | JSON オブジェクト | アイテムのデータです。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`item` | JSON オブジェクト | `_id` を割り当てたアイテムのデータです。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.get()
-----------------------------------------------

コレクションアイテムを取得します。

{{<highlight javascript>}}
CollectionItem.get(collectionName: String, _id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`_id` | 文字列 | アイテムの ID です。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`item` | JSON オブジェクト | アイテムのデータです。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.update()
--------------------------------------------------

コレクションアイテムを更新します。

{{<highlight javascript>}}
CollectionItem.update(collectionName: String, _id: String, item: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`_id` | 文字列 | アイテムの ID です。
`item` | JSON オブジェクト | アイテムのデータです ( `_id` 行と `_permission` 行は無視します )。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.delete()
----------------------------------------------------------

複数のコレクションアイテムを削除します。

{{<highlight javascript>}}
CollectionItem.delete(collectionName: String, idList: Array of String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`idList` | 配列 | アイテム ID の一覧です。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.getPermission()
-------------------------------------------------------------------------------------

コレクションアイテムのパーミッション ( 権限 ) を取得します。

{{<highlight javascript>}}
CollectionItem.getPermission(collectionName: String, _id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`_id` | 文字列 | アイテムの ID です。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`permission` | JSON オブジェクト | パーミッション ( 権限 ) です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。

CollectionItem.setPermission()
-----------------------------------------------------------------------------------

コレクションアイテムのパーミッション ( 権限 ) を設定します。

{{<highlight javascript>}}
CollectionItem.setPermission(collectionName: String, _id: String, permission: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名です。
`_id` | 文字列 | アイテムの ID です。
`permission` | JSON オブジェクト |  新しいパーミッション ( 権限 ) です。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
------|--------------------------
`-32602` |  不正なパラメーターです。
