---
title: Collection Item Management
---

# Collection Item Management

Below are Monaca Backend Management API for CollectionItem.

Method | Description
-------|-----------------------
[CollectionItem.list()](#ci-list) | Get a List of Items in a Collection
[CollectionItem.create()](#ci-create) | Create a CollectionItem
[CollectionItem.get()](#ci-get) | Get a CollectionItem
[CollectionItem.update()](#ci-update) | Update a CollectionItem
[CollectionItem.delete()](#ci-delete) | Delete Collection Items
[CollectionItem.getPermission()](#ci-getpermission) | Get Permissions of Collection Items
[CollectionItem.setPermission()](#ci-setpermission) | Set Permissions of Collection Items

## <a name="ci-list"></a> Getting a List of Items in a Collection

Get a list of items in a Collection.

{{<syntax>}}
CollectionItem.list(collectionName: String, page: Number, itemsInPage: Number, sortProperty: String, sortOrder: String, propertyNames: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`page` | Number | Page number (starting from `1`)
`itemsInPage` | Number | Number of items to display on one page
`sortProperty` | String | The property to be used for sorting
`sortOrder` | String | Sorting order which can be `"asc"` or `"desc"` (Default: `"asc"`)
`propertyNames` | String | Properties to fetch in addition to system properties

*Return Value*

Name | Type | Description
-----|------|----------------
`items` | JSON Object | A list of all items returned
`totalItems` | Number | Number of total items returned

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-create"></a> Creating a Collection Item

Create an item for a Collection.

{{<syntax>}}
CollectionItem.create(collectionName: String, item: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`item` | JSON Object | Item data

*Return Value*

Name | Type | Description
-----|------|----------------
`item` | JSON Object | Item data with `_id`

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-get"></a> Getting a Collection Item

Get an item from a Collection.

{{<syntax>}}
CollectionItem.get(collectionName: String, _id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id

*Return Value*

Name | Type | Description
-----|------|----------------
`item` | JSON Object | Item data

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-update"></a> Updating a Collection Item

Update an item of a Collection.

{{<syntax>}}
CollectionItem.update(collectionName: String, _id: String, item: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id
`item` | JSON Object | Item data (`_id` column and `_permission` column will be ignored)

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-delete"></a> Deleting Collection Items

Delete multiple Collection items.

{{<syntax>}}
CollectionItem.delete(collectionName: String, idList: Array of String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`idList` | Array of String | List of Items'id

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-getpermission"></a> Getting Permissions of a Collection Item

Get permissions of a Collection item.

{{<syntax>}}
CollectionItem.getPermission(collectionName: String, _id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id

*Return Value*

Name | Type | Description
-----|------|----------------
`permission` | JSON Object | Permission

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## <a name="ci-setpermission"></a> Setting Permissions of a Collection Item

Set Permissions of a Collection item.

{{<syntax>}}
CollectionItem.setPermission(collectionName: String, _id: String, permission: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`collectionName`  String | Collection name
`_id` | String | Item's id
`permission` | JSON Object |  New permission

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params


See Also:

- [Collection Item Management](../collection_item)
- [Collection API](../../cloud/collection)
- [Collection Item API](../../cloud/collection_item)
- [Backend Control Panel](/en/backend/manual/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/backend/manual/control_panel/#backend-management-api-key)


