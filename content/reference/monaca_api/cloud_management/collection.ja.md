---
title: コレクションの管理
weight: 20
---

コレクションの管理に使用する Monaca バックエンド マネジメント API
を、次に記します。

メソッド | 解説
-------|-------------------------------
[Collection.list()](#collection-list) | コレクションの一覧を取得します。
[Collection.create()](#collection-create) | 新しいコレクション オブジェクトを作成します。
[Collection.drop()](#collection-drop) | コレクションを破棄します。
[Collection.setConfig()](#collection-setconfig) | コレクションの設定を行ないます。
[Collection.getConfig()](#collection-getconfig) | コレクションの設定情報を取得します。
[Collection.getPropertyNames()](#collection-getpropertynames) | コレクションアイテムのプロパティー名を取得します。

Collection.list()
--------------------------------------------------

コレクションの一覧を取得します。

{{<highlight javascript>}}
Collection.list()
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`items` | 配列 | コレクションの定義です。

Collection.create()
--------------------------------------

新しいコレクション オブジェクトを作成します。

{{<highlight javascript>}}
Collection.create(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id` | 文字列 | コレクション名です。
`isInsertable` | 真偽値 | 
`defaultPublicPermission` | 文字列 | コレクションに適用する、すべてのユーザー向けのパーミッション ( 権限 ) です。 `""` 、 `"r"` 、 `"w"` 、 `"rw"` のいずれかとなります。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

Collection.drop
--------------------------------------------

コレクションを破棄します。

{{<highlight javascript>}}
Collection.drop(_id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id` | 文字列 | コレクション名です。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

Collection.setConfig()
-------------------------------------------------------

コレクションの設定を行ないます。

{{<highlight javascript>}}
Collection.setConfig(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id`  | 文字列 | コレクション名です。
`isInsertable` | 真偽値 | 
`defaultPublicPermission` | 文字列 | コレクションに適用する、すべてのユーザー向けのパーミッション ( 権限 ) です。 `""` 、 `"r"` 、 `"w"` 、 `"rw"` のいずれかとなります。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

Collection.getConfig()
---------------------------------------------------

コレクションの設定情報を取得します。

{{<highlight javascript>}}
Collection.getConfig(_id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id`  | 文字列 | コレクション名です。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`config` | JSON オブジェクト | コレクションの定義です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

Collection.getPropertyNames()
--------------------------------------------------------------------------------

コレクションの最新 `100` 個のコレクションアイテムの中から、表示可 (
読み込み可 ) となっているプロパティー名を取得します。

{{<highlight javascript>}}
Collection.getPropertyNames(_id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id`  | 文字列 | コレクション名です。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`names` | 配列 |  プロパティー名の配列です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

