---
title: ユーザーの管理
weight: 10
---

ユーザーの管理に使用する Monaca バックエンド マネジメント API を、次に記します。

メソッド | 解説
-------|-------------------
[User.list()](#user-list) | ユーザーの一覧を取得します。
[User.create()](#user-create) | 新しいユーザーオブジェクトを作成します。
[User.get()](#user-get) | ユーザーのデータを取得します。
[User.update()](#user-update) | ユーザーのデータを更新します。
[User.delete()](#user-delete) | ユーザーを削除します。
[User.getPropertyNames()](#user-getpropertynames) | ユーザーのプロパティー名を取得します。

User.list()
----------------------------------------

ユーザーコレクション内のユーザーの一覧を取得します。

{{<highlight javascript>}}
User.list(page: Number, itemsInPage: Number, sortPropery: String, [propertyNames: String], [nameFilter: String], [userQuery: String], [userQueryBindParams: Array])
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`page` | 数値 | ページ番号 ( 1 から開始 ) です。
`itemsInPage` | 数値 | 1 ページに表示するアイテムの数です。表示可能なアイテムの上限は、 `10000` です。
`sortProperty` | 文字列 | ソート時に使用するプロパティーです。
`sortOrder` | 文字列 | ソート順は、 `asc` または `desc` ( デフォルトでは `asc` ) を指定できます。
`propertyNames` | 文字列 | システムプロパティーに加え、追加で取得できるプロパティーです ( 任意 )。
`nameFilter` | 文字列 | このキーワード、ならびに、 `_username` または `_oid` を使用して、ユーザーを検索します。( 任意 )
`userQuery`	| 文字列 | ユーザーのプロパティーと [MonaQL](../../cloud/criteria#monaca-クエリー言語) クエリーを使用して、対象となるユーザを絞り込みます ( 任意 )。
`userQueryBindParams` | 配列 | userQuery 内にプレースホルダーがある場合には、値に置き換えます ( 任意 )。例 userQuery が `country == ? && age > ?` の場合、[“US”, 20] になります。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`items`      | JSON オブジェクト | アイテムです。
`totalItems` | 数値 | アイテム数です。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

User.create()
----------------------------------------

新しいユーザーオブジェクトを作成します。

{{<highlight javascript>}}
User.create(username: String, password: String, properties: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`username` | 文字列 | ユーザー名または電子メールアドレスです。
`password` | 文字列 | パスワードです。
`properties` | JSON オブジェクト | 追加で設定するプロパティーです。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`user` | JSON オブジェクト | ユーザーのデータです ( `_id` が割り当てられます )。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

User.get()
-------------------------------

ユーザーのデータを取得します。

{{<highlight javascript>}}
User.get(_id: String)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id` | 文字列 | ユーザーの ID です。

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`user` | JSON オブジェクト | ユーザーのデータです。

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

User.update()
----------------------------------

ユーザーのデータを更新します。

{{<highlight javascript>}}
User.update(_id: Stirng, user: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`_id` | 文字列 | ユーザーの ID です。
`user` | JSON オブジェクト | ユーザーのデータです ( `_id` 行は無視することになります )。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

User.delete()
------------------------------------

複数のユーザーを削除します。

{{<highlight javascript>}}
User.delete(_idList: JSON Object)
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`idList` | JSON オブジェクト | ID の一覧です。

**戻り値**

- なし

**エラーコード**

エラーが発生すると、[Error](../../cloud/error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

User.getPropertyNames()
--------------------------------------------------------------

最新の `100` ユーザーの中から、表示可 ( 読み込み可 )
となっているプロパティー名を取得します。

{{<highlight javascript>}}
User.getPropertyNames()
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

名 | 型 | 解説 
-----|------|-------------
`names` | 配列 | プロパティー名です。

