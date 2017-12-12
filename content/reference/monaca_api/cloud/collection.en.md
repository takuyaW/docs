---
title: Collection
---

*Collection* management can be done by using the following functions and
properties.

{{<note>}}
In order to access Backend API, you need to load <code>jQuery</code> and register
<code>cloud.monaca.mobi</code> in the whitelist by editing each OS's configuaration
file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

Method/Property | Description
----------------|----------------
[monaca.cloud.Collection()](#c-collection) | Get a collection object
[monaca.cloud.Collection.find()](#c-find) | Find all users' data in the collection
[monaca.cloud.Collection.findMine()](#c-findmine) | Fetch current user's data
[monaca.cloud.Collection.findOne()](#c-findone) | Fetch an item of the collection
[monaca.cloud.Collection.findOneMine()](#c-findonemine) | Fetch an item of the current user from the collection
[monaca.cloud.Collection.insert()](#c-insert) | Insert data into a collection
[monaca.cloud.Collection.updatePermission()](#c-updateper) | Bulk update the permissions of collection items.

##  Retrieving a Collection

Get a *Collection* object with a specific name. Please note that
collection is not created automatically. You are required to make a
collection manually with the IDE.

{{<syntax>}}
monaca.cloud.Collection(collectionName: string) : Object
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`collectionName` | String | The name of a collection

*Return Value*

- A collection object is returned.

*Example*

The following example indicates how to get a collection object called `"diary"`.

{{<highlight javascript>}}
    var Diary = monaca.cloud.Collection("diary"); // returns Collection object
{{</highlight>}}

##  Finding a Collection

Find all users' data in the collection.

{{<syntax>}}
Collection.find(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`criteria` | String | [Criteria](../criteria) or String
`orderBy` | String | <code>field_name ASC&#124;DESC</code>: For multiple orders, use array (e.g. `["title ASC", "author ASC"]`).
`options` | JSON Object | <ul>Available options: <li>`propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.</li><li>`limit`: Limit number of results.</li><li>`page`: Start from specified page.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `totalItems`: The number of the items
- `items`: Array of CollectionItem

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example denotes how to search data in the `"diary"`
collection, then return a set of items that match the criteria and
sort the results by `"_createdAt"` property in descending order.
Moreover, the returned items only have 2 properties: `"title"` and
`"body"`.

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

Or just pass the string for the criteria:

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

##  Fetching Current User's Data

Find the current user's data in the collection.

{{<syntax>}}
Collection.findMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`criteria` | String | [Criteria](../criteria) or String
`orderBy` | String | <code>field_name ASC&#124;DESC</code>: For multiple orders, use array (e.g. `["title ASC", "author ASC"]`).
`options` | JSON Object | <ul>Available options: <li>`propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.</li><li>`limit`: Limit number of results.</li><li>`page`: Start from specified page.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `totalItems`: The number of the items
- `items`: Array of CollectionItem

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example denotes how to search data in the `"diary"`
collection, then return a set of items which has the nickname
`"my nickname"` and sort the results by `"_createdAt"` property in
descending order. Moreover, the returned items only have 2
properties: `"title"` and `"body"`.

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

##  Fetching an Item

Fetch an item from the Collection. The first item is returned if
multiple items are matched.

{{<syntax>}}
Collection.findOne(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`criteria` | String | [Criteria](../criteria) or String
`orderBy` | String | <code>field_name ASC&#124;DESC</code>: For multiple orders, use array (e.g. `["title ASC", "author ASC"]`).
`options` | JSON Object | <ul>Available options: <li>`propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `items`: A CollectionItem (or null when no result)

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example denotes how to search data in the `"diary"`
collection, then return a set of items that match the criteria and
sort the results by `"_createdAt"` property in descending order.

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

##  Fetching an Item of the Current User

Fetch a current user’s item from the Collection. The first item is
returned if multiple items are matched.

{{<syntax>}}
Collection.findOneMine(criteria: Criteria or String, [orderBy: String or Array], [options: Object]): $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`criteria` | String | [Criteria](../criteria) or String
`orderBy` | String | <code>field_name ASC&#124;DESC</code>: For multiple orders, use array (e.g. `["title ASC", "author ASC"]`).
`options` | JSON Object | <ul>Available options: <li>`propertyNames`: Filter to minimize fetched data size.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `items`: A CollectionItem (or null when no result)

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example denotes how to search data in `"diary"`
collection, then return a set of items that match the criteria and
sort the results by `"_createdAt"` property in descending order.

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

##  Inserting an Item

Insert an item into the *Collection*.

{{<syntax>}}
Collection.insert(item: Object, [permission: Object]) : $.Promise
{{</syntax>}}

Whether the permission is set or not set, the owner of the user always
have read-and-write permission.

*Parameter*

Name | Type | Description | Requirement
-----|------|-------------|----------------------
`item` | JSON Object | User-defined data of the new item | Key names must consist of `[a-zA-Z0-9]` characters and must start with `[a-zA-Z]`. Data size must not exceed the size limit (`500KB`).
`permission` | JSON Object | A permission object applied to the item. Each key of the permission object can be `"public"` (all users) or a [user’s Oid](../user/#u-oid). Each value of the permission object can be `"r"` (allow read) , `"w"` (allow write), `"rw"` (allow read and write) or `""` (allow nothing). For instance: `{ "public": "rw", "oidOfUserA": "r", "oidOfUserB": "rw"}`

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `items`: Array of CollectionItem

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-14`    |  Permission denied (When it's not allowed to insert data from Apps)

*Example*

The following example denotes how to insert an item which has 3
fields (`title`, `body`, `_createdAt`) into `"diary"` collection and
set permission for a user with id of
`x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx` to read-only for that item.

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

##  Bulk Updating the Permissions of Collection Items

Bulk update the permissions of collection items

{{<syntax>}}
Collection.updatePermission(criteria: Criteria or String, permission: Object, [options: Object]) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`criteria` | String | [Criteria](../criteria) or String
`permission` | JSON Object | <ul>The Object representing permission. `rw` is read/write, `r` is read-only, `w` is write-only and empty string is no permission. Available options: <li>`forceOverwrite`: (boolean)[default: `false`] Whether to overwrite current permission.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `numUpdates` : The number of updated items

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-14`    |  Permission denied (When it's not allowed to insert data from Apps)

*Example*

The following example denotes how to assign the read/write
permission to the `UserX` and read-only permission to the `UserY`.

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

See Also:

- [Collection Item](../collection_item)
- [Collection Management](../../cloud_management/collection)
- [Collection Item Management](../../cloud_management/collection_item)
- [Backend Control Panel](/en/backend/manual/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/backend/manual/control_panel/#backend-management-api-key)


