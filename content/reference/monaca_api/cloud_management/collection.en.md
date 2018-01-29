---
title: Collection Management
weight: 20
---

Below are Monaca Backend Management API for Collections.

Method | Description
-------|-------------------------------
[Collection.list()](#collection-list) | Get a List of Collections
[Collection.create()](#collection-create) | Create a New Collection Object
[Collection.drop()](#collection-drop) | Drop a Collection
[Collection.setConfig()](#collection-setconfig) | Configure a Collection
[Collection.getConfig()](#collection-getconfig) | Get a Configuration of a Collection
[Collection.getPropertyNames()](#collection-getpropertynames) | Get CollectionItems' Property Names

## Collection.list()

Get a list of Collections.

{{<highlight javascript>}}
Collection.list()
{{</highlight>}}

**Parameter**

- None

**Return Value**

Name | Type | Description
-----|------|----------------
`items` | Array | Collection Definitions

## Collection.create()

Create a new Collection object.

{{<highlight javascript>}}
Collection.create(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id` | String | Collection name
`isInsertable` | Boolean | Whether the collection can be inserted or not
`defaultPublicPermission` | String | Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## Collection.drop()

Drop a Collection.

{{<highlight javascript>}}
Collection.drop(_id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id` | String | Collection name

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## Collection.setConfig()

Configure a Collection.

{{<highlight javascript>}}
Collection.setConfig(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name
`isInsertable` | Boolean | Whether the collection can be inserted or not
`defaultPublicPermission` | String | Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`

**Return Value**

- None

**Errors Code** 

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## Collection.getConfig()

Get the configuration of a Collection.

{{<highlight javascript>}}
Collection.getConfig(_id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name

**Return Value**

Name | Type | Description
-----|------|----------------
`config` | JSON Object |  Collection Definition

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## Collection.getPropertyNames()

Get displayable property names by internally fetching the latest `100`
CollectionItems of a Collection.

{{<highlight javascript>}}
Collection.getPropertyNames(_id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name

**Return Value**

Name | Type | Description
-----|------|----------------
`names` | Array |  Array of property names

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

See Also:

- [Collection Item Management](../collection_item)
- [Collection API](../../cloud/collection)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)


