---
title: コレクションアイテム
weight: 40
---

コレクションアイテム の管理には、次の関数とプロパティーを使用します。

{{<note>}}
    バックエンド API にアクセスする場合には、 <code>jQuery</code> の読み込み、および、ホワイトリストへの <code>cloud.monaca.mobi</code> の登録 ( 各 OS の設定ファイル上に ) を行います。 {{<link href="/ja/reference/config/android_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="Android の場合はこちら">}} または {{<link href="/ja/reference/config/ios_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="iOS の場合はこちら">}} をご確認ください。
{{</note>}}

メソッド/プロパティー  | 解説
--------------------|-------------------------------------------
[monaca.cloud.CollectionItem.update()](#collectionitem-update) | コレクションアイテムのデータを更新します。
[monaca.cloud.CollectionItem.getPermission()](#collectionitem-getpermission) | コレクションアイテムに設定されたパーミッション情報を取得します。
[monaca.cloud.CollectionItem.updatePermission()](#collectionitem-updatepermission) | コレクションアイテムに対してパーミッションを設定します。
[monaca.cloud.CollectionItem.remove()](#collectionitem-remove) | コレクションアイテムを削除します。
[monaca.cloud.CollectionItem._id](#collectionitem-id) | コレクションアイテムの識別子です。
[monaca.cloud.CollectionItem._ownerUserOid](#collectionitem-owneruseroid) | コレクションアイテムの所有者の oid です。
[monaca.cloud.CollectionItem._createdAt](#collectionitem-createdat) | コレクションアイテムの作成日時です。
[monaca.cloud.CollectionItem._updatedAt](#collectionitem-updatedat) | コレクションアイテムの更新日時です。collection item

## CollectionItem.update()

コレクションアイテムの現在の値を、バックエンドサーバーに送信して、保存します。

{{<highlight javascript>}}
CollectionItem.update() : $.Promise
{{</highlight>}}

**パラメーター**

- なし

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `permission`: (オブジェクト) `Key` と `Value` の組み合わせ。例 : {public: ‘rw’}

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` | 不正なパラメーターです。
`-14`	| パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。

**例**

次のサンプルコードでは、コレクションのアイテムを更新しています。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");
var newTitle = 'Updated: It’s snowing again';

Diary.findOne()
.done(function(item)
{
    item.title = newTitle;
    item.update()
    .done(function(result)
    {
        console.log('Updating success');
    })
    .fail(function(err)
    {
        console.log("Err#" + err.code +": " + err.message);
    });
});
{{</highlight>}}

## CollectionItem.getPermission()

コレクションアイテム に設定されたパーミッションを取得します。ユーザーまたは端末側が、
*書き込み用パーミッション* を持っていれば、取得できます。

{{<highlight javascript>}}
CollectionItem.getPermission() : $.Promise
{{</highlight>}}

**パラメーター**

- なし

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

`done()` コールバック関数の `result` パラメーター

- `permission`: (オブジェクト) `Key` と `Value` の組み合わせ。例 : {public: ‘rw’}

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-14`	| パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。

**例**

コレクションアイテム のパーミッションの取得方法の例を、次に示します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");

Diary.findOneMine()
.done(function(item)
{
    item.getPermission()
    .done(function(result)
    {
        console.log(result.permission);
    })
    .fail(function(err)
    {
        console.log("Err#" + err.code +": " + err.message);
    });
});
{{</highlight>}}

## CollectionItem.updatePermission()

コレクションアイテムのパーミッションを更新します。ユーザーまたは端末に対して設定されているパーミッションが、
*書き込み用パーミッション* を持っていれば、更新できます。

{{<highlight javascript>}}
CollectionItem.updatePermission(permission: Object) : $.Promise
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`permission` | JSON オブジェクト | 設定するパーミッション。 `rw` は読み書き、 `r` は読み込み専用、 `w` は書き込み専用、空文字列は 「 パーミッション無し 」 になります。

**戻り値**

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

done() コールバック関数の result パラメーター

- `numUpdates`: ( 数値 ) 値は常に 1 になります。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-32602` |  不正なパラメーターです。
`-14` | パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。

**例**

コレクションアイテム へのパーミッションの設定方法を、次の例で示します。

{{<highlight javascript>}}

var Diary = monaca.cloud.Collection("diary");

Diary.findOneMine()
.done(function(item)
{
    item.updatePermission({
        public: "r",
        "u00000000-xxxx-xxxx-xxxxxxxx": "rw",
        "u00000000-xxxx-xxxx-xxxxxxxx": ""
    })
    .done(function()
    {
        console.log("Permission updated!");
    })
    .fail(function(err)
    {
        console.log("Err#" + err.code +": " + err.message);
    });
});
{{</highlight>}}

指定されたコレクションアイテムへのパーミッションの設定方法を、次の例で示します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");

var oids = {
            userB: "x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            userZ: "x00000000-yyyy-yyyy-yyyy-yyyyyyyyyyyy"
            };
var targetItem = null;

Diary.findOneMine()
.then(function(item)
{
    targetItem = item;
    return targetItem.getPermission();
})
.then(function(result)
{
    result.permission[oids.userB] = "rw";
    result.permission[oids.userZ] = "rw";
    return targetItem.updatePermission(result.permission);
})
.then(function()
{
    console.log("Permission updated!");
});
{{</highlight>}}

## CollectionItem.remove()

コレクションアイテムを削除します。

{{<highlight javascript>}}
monaca.cloud.CollectionItem.remove() : $.Promise
{{</highlight>}}

{{<note>}}
      廃止予定の <code>CollectionItem.delete()</code> の代わりに、こちらの関数を使用します。 <code>CollectionItem.delete()</code> 自体はまだ使用できますが、こちらの新しい関数を使用することを推奨します。
{{</note>}}

**パラメーター**

- なし

型 | 解説
-----|--------------------------
[$.Promise](../other/#promise) オブジェクト | 結果の処理には、 `done()`、`fail()`、`always()` を使用します。

**エラーコード**

エラーが発生すると、[Error](../error) オブジェクトを返します。

コード | 解説
-----|--------------------------
`-14`	| パーミッションがありません （ そのユーザーは書き込みのパーミッションを有していません ）。
`-32602` |  不正なパラメーターです。

**例**

コレクションアイテム へのパーミッションの設定方法を、次の例で示します。

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("diary");

Diary.findOne('title == "I hate him"')
.done(function(item)
{
    item.remove()
    .done(function()
    {
        console.log("Yes indeed I like him");
    });
});
{{</highlight>}}

## CollectionItem._id

コレクションアイテムの識別子です。.

{{<highlight javascript>}}
monaca.cloud.CollectionItem._id : String ( 読み込み専用 )
{{</highlight>}}

**戻り値**

- データの所有者の oid ( 文字列 )

**例**

`find()` 関数で検索した後、各アイテムの oid の文字列を `console.log()` で表示する例を、次に示します。

{{<highlight javascript>}}
/* find function */
.done(function(result)
{
    result.items.forEach(function(item)
    {
        console.log(item._id);
    });
});
{{</highlight>}}

## CollectionItem.ownerUserOid

データを作成したユーザーの oid です。

{{<highlight javascript>}}
monaca.cloud.CollectionItem._ownerUserOid : String ( 読み込み専用 )
{{</highlight>}}

**戻り値**

- データの所有者の oid ( 文字列 )

**例**

`find()` 関数で検索した後、データ所有者が保有する各アイテムの oid 文字列を、`console.log()` で表示する例を、次に示します。

{{<highlight javascript>}}
/* find function */
.done(function(result)
{
    result.items.forEach(function(item)
    {
        console.log(item._ownerUserOid);
    });
});
{{</highlight>}}

## CollectionItem._createdAt

アイテムの作成日時です。

{{<highlight javascript>}}
_createdAt : Date (読み込み専用)
{{</highlight>}}

**戻り値**

- アイテムの作成日時です ( `Date` オブジェクト )

**例**

`find()` 関数で検索した後、各アイテムの作成日時を、`console.log()` で表示する例を、次に示します。

{{<highlight javascript>}}
/* find function */
.done(function(result)
{
    result.items.forEach(function(item)
    {
        console.log(item._createdAt);
    });
});
{{</highlight>}}

## CollectionItem.updatedAt

アイテムの更新日時です。

{{<highlight javascript>}}
monaca.cloud.CollectionItem._updatedAt : Date ( 読み込み専用 )
{{</highlight>}}

**戻り値**

- アイテムの更新日時です ( `Date` オブジェクト )

**例**

`find()` 関数で検索した後、各アイテムの更新日時を、`console.log()` で表示する例を、次に示します。

{{<highlight javascript>}}
/* find function */
.done(function(result)
{
    result.items.forEach(function(item)
    {
        console.log(item._updatedAt);
    });
});
{{</highlight>}}