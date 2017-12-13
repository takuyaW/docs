---
title: Collection Item
---

Collection Item management can be done by using the following
functions and properties.

{{<note>}}
In order to access Backend API, you need to load <code>jQuery</code> and register
<code>cloud.monaca.mobi</code> in the whitelist by editing each OS's configuaration
file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

Method/Property | Description
----------------|--------------------
[monaca.cloud.CollectionItem.update()](#ci-update) | Update the data of a collection item
[monaca.cloud.CollectionItem.getPermission()](#ci-getPermission) | Get permission of a collection item
[monaca.cloud.CollectionItem.updatePermission()](#ci-updatePermission) | Set permission of a collection item
[monaca.cloud.CollectionItem.remove()](#ci-remove) | Delete a collection item
[monaca.cloud.CollectionItem._id](#ci-id) | Identifier of a collection item
[monaca.cloud.CollectionItem._ownerUserOid](#ci-owneruseroid) | The owner's oid of the collection item
[monaca.cloud.CollectionItem._createdAt](#ci-createdat) | The creation time of the collection item
[monaca.cloud.CollectionItem._updatedAt](#ci-updatedat) | The update time of the collection item

##  Updating an Item

Send the CollectionItem’s current value to Backend server and save it.

{{<syntax>}}
CollectionItem.update() : $.Promise
{{</syntax>}}

*Parameter*

There is no parameter.

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a `permission` JSON Object. For example: `permission: {public: "rw"}`.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-14`    |  Permission denied (When the user doesn't have Write permission)

*Example*

The following example shows how to update an item of a collection.

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

##  Getting an Item's Permission

Get permission of the CollectionItem. The permission can be fetched
only if the user/device has `write-permission`.

{{<syntax>}}
CollectionItem.getPermission() : $.Promise
{{</syntax>}}

*Parameter*

There is no parameter.

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a `permission` JSON Object. For example: `permission: {public: "rw"}`.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-14` |  Permission denied (When the user doesn't have Write permission)

*Example*

The following example shows how to get permission of a CollectionItem.

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

##  Setting an Item's Permission

Update permissions of the CollectionItem. Permissions can be updated
only if the user or device has `write-permission`.

{{<syntax>}}
CollectionItem.updatePermission(permission: Object) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`permission` | JSON Object | Permissions to be set. `rw` is read/write, `r` is read-only, `w` is write-only and empty string is no-permission.

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object which has the following properties:

- `numUpdates`: the value is always `1`.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-14`    |  Permission denied (When the user doesn't have Write permission)

*Example*

The following example shows how to set permission of a CollectionItem.

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

And the following example illustrates how to add permission to
specific CollectionItem.

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

##  Deleting an Item

Delete a collection item.

{{<syntax>}}
monaca.cloud.CollectionItem.remove() : $.Promise
{{</syntax>}}

{{<note>}}
This function replaces the old function <code>CollectionItem.delete()</code> which
is obsolete. The <code>CollectionItem.delete()</code> still can be used, however it
is recommended to use new function.
{{</note>}}

*Parameter*

There is no parameter.

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-14`    |  Permission denied (When the user doesn't have Write permission)

*Example*

The following example shows how to set permission of a CollectionItem.

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

##  Item's Identifier

Identifier of a collection item.

{{<syntax>}}
monaca.cloud.CollectionItem._id : String (read-only)
{{</syntax>}}

*Return Value*

- The identifier (String) of the collection item

*Example*

The following code will display each item's oid string which are found by the `find()` function in the console log.

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

##  Data Owner's Identifier

The user's oid who created the data.

{{<syntax>}}
monaca.cloud.CollectionItem._ownerUserOid : String (read-only)
{{</syntax>}}

*Return Value*

- The `oid` (String) of the data's owner

*Example*

The following code will display each item's oid of the data's owner which are found by the `find()` function in the console log.

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

##  Item's Creation Time

The creation time of the item.

{{<syntax>}}
_createdAt : Date (read-only)
{{</syntax>}}

*Return Value*

- The creation date (Date object) of the item

*Example*

The following code will display each item's creation time which are found by the `find()` function in the console log.

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

##  Item's Update Time

The update time of the item.

{{<syntax>}}
monaca.cloud.CollectionItem._updatedAt : Date (read-only)
{{</syntax>}}

*Return Value*

- The updating date (Date object) of the item

*Example*

The following code will display each item's update time which are found by the `find()` function in the console log.

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

See Also:

- [Collection](../collection)
- [Collection Management](../../cloud_management/collection)
- [Collection Item Management](../../cloud_management/collection_item)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)



