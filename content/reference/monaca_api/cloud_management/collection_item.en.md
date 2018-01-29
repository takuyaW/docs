---
title: Collection Item Management
weight: 30
---

Below are Monaca Backend Management API for CollectionItem.

Method | Description
-------|-----------------------
[CollectionItem.list()](#collectionitem-list) | Get a List of Items in a Collection
[CollectionItem.create()](#collectionitem-create) | Create a CollectionItem
[CollectionItem.get()](#collectionitem-get) | Get a CollectionItem
[CollectionItem.update()](#collectionitem-update) | Update a CollectionItem
[CollectionItem.delete()](#collectionitem-delete) | Delete Collection Items
[CollectionItem.getPermission()](#collectionitem-getpermission) | Get Permissions of Collection Items
[CollectionItem.setPermission()](#collectionitem-setpermission) | Set Permissions of Collection Items

## CollectionItem.list()

Get a list of items in a Collection.

{{<highlight javascript>}}
CollectionItem.list(collectionName: String, page: Number, itemsInPage: Number, sortProperty: String, sortOrder: String, propertyNames: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`page` | Number | Page number (starting from `1`)
`itemsInPage` | Number | Number of items to display on one page
`sortProperty` | String | The property to be used for sorting
`sortOrder` | String | Sorting order which can be `"asc"` or `"desc"` (Default: `"asc"`)
`propertyNames` | String | Properties to fetch in addition to system properties

**Return Value**

Name | Type | Description
-----|------|----------------
`items` | JSON Object | A list of all items returned
`totalItems` | Number | Number of total items returned

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.create()

Create an item for a Collection.

{{<highlight javascript>}}
CollectionItem.create(collectionName: String, item: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`item` | JSON Object | Item data

**Return Value**

Name | Type | Description
-----|------|----------------
`item` | JSON Object | Item data with `_id`

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.get()

Get an item from a Collection.

{{<highlight javascript>}}
CollectionItem.get(collectionName: String, _id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id

**Return Value**

Name | Type | Description
-----|------|----------------
`item` | JSON Object | Item data

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.update()

Update an item of a Collection.

{{<highlight javascript>}}
CollectionItem.update(collectionName: String, _id: String, item: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id
`item` | JSON Object | Item data (`_id` column and `_permission` column will be ignored)

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.delete()

Delete multiple Collection items.

{{<highlight javascript>}}
CollectionItem.delete(collectionName: String, idList: Array of String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`idList` | Array of String | List of Items'id

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.getPermission()

Get permissions of a Collection item.

{{<highlight javascript>}}
CollectionItem.getPermission(collectionName: String, _id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id

**Return Value**

Name | Type | Description
-----|------|----------------
`permission` | JSON Object | Permission

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## CollectionItem.setPermission()

Set Permissions of a Collection item.

{{<highlight javascript>}}
CollectionItem.setPermission(collectionName: String, _id: String, permission: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`collectionName` | String | Collection name
`_id` | String | Item's id
`permission` | JSON Object |  New permission

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params


See Also:

- [Collection Item Management](../collection_item)
- [Collection API](../../cloud/collection)
- [Collection Item API](../../cloud/collection_item)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)


