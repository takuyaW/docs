Collection
==========

*Collection* management can be done by using the following functions and
properties.

<div class="admonition note">

In order to access Backend API, you need to load `jQuery` and register
`cloud.monaca.mobi` in the whitelist by editing each OS's configuration
file. For more details, please refer to
Access Origin (Android) &lt;access\_origin\_android&gt; and
Access Origin (iOS) &lt;access\_origin&gt;.

</div>

  Method/Property                                                 Description
  --------------------------------------------------------------- -------------------------------------------------------
  monaca.cloud.Collection()&lt;c.Collection&gt;                   Get a collection object
  monaca.cloud.Collection.find()&lt;c.find&gt;                    Find all users' data in the collection
  monaca.cloud.Collection.findMine()&lt;c.findMine&gt;            Fetch current user's data
  monaca.cloud.Collection.findOne()&lt;c.findOne&gt;              Fetch an item of the collection
  monaca.cloud.Collection.findOneMine()&lt;c.findOneMine&gt;      Fetch an item of the current user from the collection
  monaca.cloud.Collection.insert()&lt;c.insert&gt;                Insert data into a collection
  monaca.cloud.Collection.updatePermission()&lt;c.updatePer&gt;   Bulk update the permissions of collection items.

Collection() - Retrieving a Collection
--------------------------------------

Get a *Collection* object with a specific name. Please note that
collection is not created automatically. You are required to make a
collection manually with the IDE.

monaca.cloud.Collection(collectionName: string) : Object

Parameter

:   ------------------ ---------------------------
      `collectionName`   The name of a collection.
      ------------------ ---------------------------

Return Value

:   ---------------------------------- --
      A collection object is returned.   
      ---------------------------------- --

Example

:   The following example indicates how to get a collection object
    called `"diary"`.

    ``` {.sourceCode .javascript}
    var Diary = monaca.cloud.Collection("diary"); // returns Collection object
    ```

Collection.find()
-----------------

Find all users' data in the collection.

Collection.find(criteria: Criteria or String, \[orderBy: String or Array\], \[options: Object\]): \$.Promise

Parameter

:   ------------ ---------------------------------------------------------------------------------------------------------------
      `criteria`   criteria or String.
      `orderBy`    "field\_name ASC|DESC". For multiple orders, use array (e.g. \["title ASC", "author ASC"\]).
      `options`    Available options:
                   - `propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.
                   - `limit`: Limit number of results.
                   - `page`: Start from specified page.
      ------------ ---------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------------- ------------------------- -------------------------
      `totalItems`   Number                    The number of the items
      `items`        Array of CollectionItem   
      -------------- ------------------------- -------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example

:   The following example denotes how to search data in the `"diary"`
    collection, then return a set of items that match the criteria and
    sort the results by `"_createdAt"` property in descending order.
    Moreover, the returned items only have 2 properties: `"title"` and
    `"body"`.

    ``` {.sourceCode .javascript}
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
    ```

    Or just pass the string for the criteria:

    ``` {.sourceCode .javascript}
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
    ```

Collection.findMine() - Fetch current user's data
-------------------------------------------------

Find the current user's data in the collection.

Collection.findMine(criteria: Criteria or String, \[orderBy: String or Array\], \[options: Object\]): \$.Promise

Parameter

:   ------------ ---------------------------------------------------------------------------------------------------------------
      `criteria`   criteria or String.
      `orderBy`    "field\_name ASC|DESC". For multiple order, use array (e.g. \["title ASC", "author ASC"\]).
      `options`    Available options:
                   - `propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.
                   - `limit`: Limit number of results.
                   - `page`: Start from specified page.
      ------------ ---------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------------- ------------------------- -------------------------
      `totalItems`   Number                    The number of the items
      `items`        Array of CollectionItem   
      -------------- ------------------------- -------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example:

:   The following example denotes how to search data in the `"diary"`
    collection, then return a set of items which has the nickname
    `"my nickname"` and sort the results by `"_createdAt"` property in
    descending order. Moreover, the returned items only have 2
    properties: `"title"` and `"body"`.

    ``` {.sourceCode .javascript}
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
    ```

Collection.findOne() - Fetch an item
------------------------------------

Fetch an item from the Collection. The first item is returned if
multiple items are matched.

Collection.findOne(criteria: Criteria or String, \[orderBy: String or Array\], \[options: Object\]): \$.Promise

Parameter

:   ------------ ---------------------------------------------------------------------------------------------------------------
      `criteria`   criteria object or String.
      `orderBy`    "field\_name ASC|DESC". For multiple orders, use array (e.g. \["title ASC", "author ASC"\]).
      `options`    Available option:
                   - `propertyNames`: specify the preferred user properties. If not specified, all user properties are returned.
      ------------ ---------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------- ------------------------------------------- --
      `item`   A CollectionItem (or null when no result)   
      -------- ------------------------------------------- --

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example

:   The following example denotes how to search data in the `"diary"`
    collection, then return a set of items that match the criteria and
    sort the results by `"_createdAt"` property in descending order.

    ``` {.sourceCode .javascript}
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
    ```

Collection.findOneMine() - Fetch an item of the current user
------------------------------------------------------------

Fetch a current user’s item from the Collection. The first item is
returned if multiple items are matched.

Collection.findOneMine(criteria: Criteria or String, \[orderBy: String or Array\], \[options: Object\]): \$.Promise

Parameter

:   ------------ ----------------------------------------------------------------------------------------------
      `criteria`   criteria or String.
      `orderBy`    "field\_name ASC|DESC". For multiple orders, use array (e.g. \["title ASC", "author ASC"\]).
      `options`    Available option:
                   - `propertyNames`: Filter to minimize fetched data size.
      ------------ ----------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------- ------------------------------------------- --
      `item`   A CollectionItem (or null when no result)   
      -------- ------------------------------------------- --

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example

:   The following example denotes how to search data in `"diary"`
    collection, then return a set of items that match the criteria and
    sort the results by `"_createdAt"` property in descending order.

    ``` {.sourceCode .javascript}
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
    ```

Collection.insert() - Inserting an Item
---------------------------------------

Insert an item into the *Collection*.

Collection.insert(item: Object, \[permission: Object\]) : \$.Promise

Whether the permission is set or not set, the owner of the user always
have read-and-write permission.

Parameter

:   -------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `item`         User-defined data of the new item.
      `permission`   A permission object applied to the item. Each key of the permission object can be `“public”` (all users) or a user’s Oid&lt;u.\_oid&gt;. Each value of the permission object can be `“r”` (allow read) , `“w”` (allow write), `“rw”` (allow read and write) or `“”` (allow nothing). For instance: { “public”: 'rw', “oidOfUserA”: 'r', “oidOfUserB”: 'rw' }
      -------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   --------- ------------------------- --
      `items`   Array of CollectionItem   
      --------- ------------------------- --

Requirement

:   -------- --------------------------------------------------------------------------------------------------------------------------------------
      `item`   Key names must consist of \[a-zA-Z0-9\] characters and must start with \[a-zA-Z\]. Data size must not exceed the size limit (500KB).
      -------- --------------------------------------------------------------------------------------------------------------------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Error Code

:   Errors are returned as error object.

      ---------- --------------------------------------------------------------------
      `-32602`   Invalid params
      `-14`      Permission denied (When it's not allowed to insert data from Apps)
      ---------- --------------------------------------------------------------------

Example

:   The following example denotes how to insert an item which has 3
    fields (`title`, `body`, `_createdAt`) into `"diary"` collection and
    set permission for a user with id of
    `x00000000-xxxx-xxxx-xxxx-xxxxxxxxxxxx` to read-only for that item.

    ``` {.sourceCode .javascript}
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
    ```

Collection.updatePermission() - Bulk update the permissions of collection items.
--------------------------------------------------------------------------------

Bulk update the permissions of collection items

Collection.updatePermission(criteria: Criteria or String, permission: Object, \[options: Object\]) : \$.Promise

Parameter

:   -------------- -----------------------------------------------------------------------------------------------------------------------------------------------
      `criteria`     criteria or String.
      `permission`   Object representing permission. `rw` is read/write, `r` is read-only, `w` is write-only and empty string is no permission. Available options:
                     - `forceOverwrite`: boolean - Whether to overwrite current permission (default: `false`).
      -------------- -----------------------------------------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------------- -------- ------------------------------
      `numUpdates`   Number   the number of updated items.
      -------------- -------- ------------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- --------------------------------------------------------------------
      `-32602`   Invalid params
      `-14`      Permission denied (When it's not allowed to insert data from Apps)
      ---------- --------------------------------------------------------------------

Example

:   The following example denotes how to assign the read/write
    permission to the `UserX` and read-only permission to the `UserY`.

    ``` {.sourceCode .javascript}
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
    ```


