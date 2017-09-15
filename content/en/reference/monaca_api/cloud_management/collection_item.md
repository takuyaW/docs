Colllection Item Management
===========================

Below are Monaca Backend Management API for CollectionItem.

  Method                                             Description
  -------------------------------------------------- -------------------------------------
  CollectionItem.list()&lt;ci\_list&gt;              Get a List of Items in a Collection
  CollectionItem.create()&lt;ci\_create&gt;          Create a CollectionItem
  CollectionItem.get()&lt;ci\_get&gt;                Get a CollectionItem
  CollectionItem.update()&lt;ci\_update&gt;          Update a CollectionItem
  CollectionItem.delete()&lt;ci\_delete&gt;          Delete Collection Items
  CollectionItem.getPermission()&lt;ci\_getPer&gt;   Get Permissions of Collection Items
  CollectionItem.setPermission()&lt;ci\_setPer&gt;   Set Permissions of Collection Items

CollectionItem.list - Get a List of Items in a Collection
---------------------------------------------------------

Get a list of items in a Collection.

CollectionItem.list

Parameter

:   ------------------ -------- -------------------------------------------------------------------
      `collectionName`   string   Collection name
      `page`             number   Page number (starting from 1)
      `itemsInPage`      number   Number of items to display on one page
      `sortProperty`     string   Which property to be used for sorting
      `sortOrder`        string   Sorting order which can be `"asc"` or `"desc"` (Default: `"asc"`)
      `propertyNames`    string   Properties to fetch in addition to system properties
      ------------------ -------- -------------------------------------------------------------------

Return Value

:   -------------- -----------------
      `items`        Items returned
      `totalItems`   Number of items
      -------------- -----------------

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.create - Create a Collection Item
------------------------------------------------

Create an item for a Collection.

CollectionItem.create

Parameter

:   ------------------ -------- -----------------
      `collectionName`   string   Collection name
      `item`             object   Item data
      ------------------ -------- -----------------

Return Value

:   -------- ----------------------
      `item`   Item data with `_id`
      -------- ----------------------

Errors Codes:

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.get - Get a Collection Item
------------------------------------------

Get an item from a Collection.

CollectionItem.get

Parameter

:   ------------------ -------- -----------------
      `collectionName`   string   Collection name
      `_id`              string   Item's id
      ------------------ -------- -----------------

Return Value

:   -------- -----------
      `item`   Item data
      -------- -----------

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.update - Update a Collection Item
------------------------------------------------

Update an item of a Collection.

CollectionItem.update

Parameter

:   ------------------ -------- -------------------------------------------------------------------
      `collectionName`   string   Collection name
      `_id`              string   Item's id
      `item`             object   Item data (`_id` column and `_permission` column will be ignored)
      ------------------ -------- -------------------------------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.delete - Delete Collection Items
-----------------------------------------------

Delete multiple Collection items.

CollectionItem.delete

Parameter

:   ------------------ -------- -------------------
      `collectionName`   string   Collection name
      `idList`           array    List of Items' id
      ------------------ -------- -------------------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Codes:

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.getPermission - Get Permissions of a Collection Item
-------------------------------------------------------------------

Get permissions of a Collection item.

CollectionItem.getPermission

Parameter

:   ------------------ -------- -----------------
      `collectionName`   string   Collection name
      `_id`              string   Item's id
      ------------------ -------- -----------------

Return Value

:   -------------- -------- ------------
      `permission`   object   Permission
      -------------- -------- ------------

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

CollectionItem.setPermission - Set Permissions of a Collection Item
-------------------------------------------------------------------

Set Permissions of a Collection item.

CollectionItem.setPermission

Parameter

:   ------------------ -------- -----------------
      `collectionName`   string   Collection name
      `_id`              string   Item's id
      `permission`       object   New permission
      ------------------ -------- -----------------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------


