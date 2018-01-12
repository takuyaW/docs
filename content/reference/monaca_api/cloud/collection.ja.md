---
title: コレクション
weight: 30
---

次の関数とプロパティーを使用して、 コレクション を管理します。

{{<note>}}
    バックエンド API にアクセスする場合には、 <code>jQuery</code> の読み込み、および、ホワイトリストへの <code>cloud.monaca.mobi</code> の登録 ( 各 OS の設定ファイル上に ) を行います。 {{<link href="/ja/reference/config/android_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="Android の場合はこちら">}} または {{<link href="/ja/reference/config/ios_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="iOS の場合はこちら">}} をご確認ください。
{{</note>}}

メソッド/プロパティー  | 解説
--------------------|-------------------------------------------
[monaca.cloud.Collection()](#collection) | コレクション オブジェクトを取得します。
[monaca.cloud.Collection.find()](#collection-find) | すべてのユーザーのデータをコレクションから取得します。
[monaca.cloud.Collection.findMine()](#collection-findmine) | ユーザーのデータをコレクションから取得します。
[monaca.cloud.Collection.findOne()](#collection-findone) | 指定したアイテムをコレクションから 1 つ取得します。
[monaca.cloud.Collection.findOneMine()](#collection-findonemine) | ユーザーのアイテムをコレクションから 1 つ取得します。
[monaca.cloud.Collection.insert()](#collection-insert) | コレクションにデータを挿入します。
[monaca.cloud.Collection.updatePermission()](#collection-updatepermission) | コレクション アイテムのパーミッション ( 権限 ) を一括更新します。

## Collection()

指定した名前を使用して、 コレクション オブジェクトを取得します。コレクションは、自動的には作成されないため、 あらかじめ、IDE 上で手動で作成しておきます。

{{<highlight javascript>}}
monaca.cloud.Collection(collectionName: string) : Object
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`collectionName` | 文字列 | コレクション名を指定します。

**戻り値**

- コレクション オブジェクト   

**例**

`"diary"` コレクションの取得方法を記します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary"); // returns Collection object
{{</highlight>}}

## Collection.find()

すべてのユーザーのデータをコレクションから取得します。.

{{<highlight javascript>}}
Collection.find(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`criteria` | 文字列 | [Criteria](../criteria) または 文字列
`orderBy` | 文字列 | <code>field_name ASC&#124;DESC</code>。並べ替え条件を複数指定する場合には、配列を使用します。例 ： ["title ASC", "author ASC"]
`options` | JSON オブジェクト | 利用可能なオプションを、次に記します。 <ul><li>`propertyNames`: 検索対象のユーザーのプロパティーを指定します。指定がない場合、ユーザーのすべてのプロパティーを返します。</li><li>`limit`: 結果の件数の上限です。</li><li>`page`: 指定したページ以降から、結果を取得します。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `totalItems`: アイテム数
- `items`: コレクション アイテムの配列

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次の例では、 `diary` コレクション内で検索を行い、 `Criteria` に一致したアイテムを、 `"_createdAt"` プロパティー順 ( 降順 ) でソートして返します。返されるアイテムは、 `"title"` と `"body"` の 2 つのプロパティーを保持しています。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
var Criteria = monaca.cloud.Criteria('title == "Monaca"');
Diary.find(Criteria, "_createdAt DESC", {propertyNames: ["title", "body"], limit: 5})
.done(function(result)
{
    console.log('Total items found: ' + result.totalItems);
    console.log('The body of the first item: ' + result.items[0].body);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

または、criteria に文字列を指定して、渡すこともできます。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
Diary.find('title == "Monaca"', "", {propertyNames: ["title", "body"], limit: 5})
.done(function(result)
{
    console.log('Total items found: ' + result.totalItems);
    console.log('The body of the first item: ' + result.items[0].body);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## Collection.findMine()

ユーザーのデータを、コレクションから取得します。

{{<highlight javascript>}}
Collection.findMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`criteria` | 文字列 | [Criteria](../criteria) または 文字列
`orderBy` | 文字列 | <code>field_name ASC&#124;DESC</code>。並べ替え条件を複数指定する場合には、配列を使用します。例 ： ["title ASC", "author ASC"]
`options` | JSON オブジェクト | 利用可能なオプションを、次に記します。 <ul><li>`propertyNames`: 検索対象のユーザーのプロパティーを指定します。指定がない場合、ユーザーのすべてのプロパティーを返します。</li><li>`limit`: 結果の件数の上限です。</li><li>`page`: 指定したページ以降から、結果を取得します。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `totalItems`: アイテム数
- `items`: コレクション アイテムの配列

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次の例では、 `diary` コレクション内で検索を行い、 `nickname` が `my nickname` に一致したアイテムを、 `"_createdAt"` プロパティー順 ( 降順 ) でソートして返します。返されるアイテムは、 `"title"` と `"body"` の 2 つのプロパティーを保持しています。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
Diary.findMine('nickname == "my nickname"', "", {propertyNames: ["title", "body"], limit: 5})
.done(function(result)
{
    console.log('Total items found: ' + result.totalItems);
    console.log('The body of the first item: ' + result.items[0].body);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## Collection.findOne()

指定したアイテムを、コレクションから 1
つ取得します。複数のアイテムが条件に合う場合には、最初のアイテムを返します。

{{<highlight javascript>}}
Collection.findOne(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`criteria` | 文字列 | [Criteria](../criteria) または 文字列
`orderBy` | 文字列 | <code>field_name ASC&#124;DESC</code>。並べ替え条件を複数指定する場合には、配列を使用します。例 ： ["title ASC", "author ASC"]
`options` | JSON オブジェクト | 利用可能なオプション: <ul><li>`propertyNames`: 検索対象のユーザーのプロパティーを指定します。指定がない場合、ユーザーのすべてのプロパティーを返します。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `items`: コレクション アイテム [ result が空の場合には、ヌル ( null ) となります ]

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次の例では、 `diary` コレクション内で検索を行い、Criteria に一致したアイテムを、 `"_createdAt"` プロパティー順 ( 降順 ) にソートして返します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
Diary.findOne('title == "Monaca"', "_createdAt DESC")
.done(function(result)
{
    console.log('The body of the item: ' + result.body);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## Collection.findOneMine()

ユーザーのアイテムを、コレクションから 1
つ取得します。複数のアイテムが条件に合う場合には、最初のアイテムを返します。

{{<highlight javascript>}}
Collection.findOneMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`criteria` | 文字列 | [Criteria](../criteria) または 文字列
`orderBy` | 文字列 | <code>field_name ASC&#124;DESC</code>。並べ替え条件を複数指定する場合には、配列を使用します。例 ： ["title ASC", "author ASC"]
`options` | JSON オブジェクト | 利用可能なオプション: <ul><li>`propertyNames`: 取得するデータサイズを制限するため、フィルターをかけます。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `items`: コレクション アイテム [ result が空の場合には、ヌル ( null ) となります ]

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。

**例**

次の例では、 `diary` コレクション内で検索を行い、Criteria に一致したアイテムを、 `"_createdAt"` プロパティー順 ( 降順 ) にソートして返します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
Diary.findOneMine('title == "Monaca"', "_createdAt DESC")
.done(function(result)
{
    console.log('The body of the item: ' + result.body);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## Collection.insert()

コレクション にアイテムを 1 つ挿入します。

{{<highlight javascript>}}
Collection.insert(item: Object, [permission: Object]) : $.Promise
{{</highlight>}}

パーミッション ( 権限 ) の設定に関わらず、ユーザーの所有者には、読み取りと書き込み権限が与えられています。

**パラメーター**

パラメーター | 型 | 解説 | 必須
-----|------|-------------|---------------
`item` | JSON オブジェクト | 新規アイテムに関して、ユーザーが定義したデータ | Key 名には、 `[a-zA-Z0-9]` を使用して、 `[a-zA-Z]` から始まる必要がります。データサイズは、`500 KB` 内です。
`permission` | JSON オブジェクト | アイテムにパーミッションを設定するときに使用するオブジェクト。オブジェクトに設定する Key は、 `“public”` ( すべてのユーザーが対象 ) または [ユーザーの Oid](../user/#user-oid) になります。また、オブジェクトに設定する Value は、 `“r”` ( 読み取り許可 ) 、 `“w”` ( 書き込み許可 ) 、 `“rw”` ( 読み取りと書き込み許可 ) 、 `“”` ( すべて不許可 ) のいずれかとなります。例 : { “public”: 'rw', “oidOfUserA”: 'r', “oidOfUserB”: 'rw' } 。permission は、Key と Value の組み合わせで設定します。


A permission object applied to the item. Each key of the permission object can be `"public"` (all users) or a [user’s Oid](../user/#u-oid). Each value of the permission object can be `"r"` (allow read) , `"w"` (allow write), `"rw"` (allow read and write) or `""` (allow nothing). For instance: `{ "public": "rw", "oidOfUserA": "r", "oidOfUserB": "rw"}`

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `items`: コレクション アイテムの配列

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`-14`    |  パーミッションがありません ( アプリからのデータ挿入が制限されている場合 )。

**例**

次の例では、 `title` 、 `body` 、 `_createdAt` の 3 つのフィールドを持つアイテムを、 `"diary"` コレクションに挿入します。挿入後、 `x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx` ( id ) を所持するユーザーに対して、このアイテムへの読み取り専用のパーミッションを与えます。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
var friendUserOid = "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
var permission = {};
permission[friendUserOid] = "r";

Diary.insert({title: 'Any title', body: 'Hello World'}, permission)
.done(function(result)
{
    console.log("Inserted!");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

## Collection.updatePermission()

コレクションアイテムのパーミッション ( 権限 ) を、一括更新します。

{{<highlight javascript>}}
Collection.updatePermission(criteria: Criteria or String, permission: Object, [options: Object]) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`criteria` | 文字列 | [Criteria](../criteria) または 文字列
`permission` | JSON オブジェクト | パーミッションを指定するオブジェクト。`rw` は読み取りと書き込み、 `r` は読み取り専用、 `w` は書き込み専用、空の文字列は 「 パーミッションなし 」 となります。利用可能なオプションとして、<ul><li>`forceOverwrite`: boolean があります。こちらのオプションを使用して、現在のパーミッションの上書きを行うか否か決定します ( デフォルト : `false` ) 。</li></ul>

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `numUpdates`: 更新したアイテム数

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`-14`    |  パーミッションがありません ( アプリからのデータ挿入が制限されている場合 )。

**例**

次の例では、読み取りと書き込みのパーミッションを `User X` へ、読み取りのみのパーミッションを `User Y` へ与えます。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");

var oids =
{
    userX: "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    userY: "x00000000-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
};

var newPermission = {};
newPermission[oids.userX] = "rw";
newPermission[oids.userY] = "r";

Diary.updatePermission('group_id == 1', newPermission)
.done(function(result)
{
    console.log(result.numUpdates + " items updated");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

