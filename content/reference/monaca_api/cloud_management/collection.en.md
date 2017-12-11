---
title: Collection Management
---

# Collection Management

Below are Monaca Backend Management API for Collections.

Method | Description
-------|-------------------------------
[Collection.list()](#c-list) | Get a List of Collections
[Collection.create()](#c-create) | Create a New Collection Object
[Collection.drop()](#c-drop) | Drop a Collection
[Collection.setConfig()](#c-setconfig) | Configure a Collection
[Collection.getConfig()](#c-getconfig) | Get a Configuration of a Collection
[Collection.getPropertyNames()](#c-getpropertynames) | Get CollectionItems' Property Names

##  Getting a List of Collections

Get a list of Collections.

{{<syntax>}}
Collection.list()
{{</syntax>}}

*Parameter*

There is no parameter.

*Return Value*

Name | Type | Description
-----|------|----------------
`items` | Array | Collection Definitions

##  Creating a New Collection

Create a new Collection object.

{{<syntax>}}
Collection.create(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id` | String | Collection name
`isInsertable` | Boolean | Whether the collection can be inserted or not
`defaultPublicPermission` | String | Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Dropping a Collection

Drop a Collection.

{{<syntax>}}
Collection.drop(_id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id` | String | Collection name

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Configuring a Collection

Configure a Collection.

{{<syntax>}}
Collection.setConfig(_id: String, isInsertable: Boolean, defaultPublicPermission: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name
`isInsertable` | Boolean | Whether the collection can be inserted or not
`defaultPublicPermission` | String | Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Geting a Collection's Configuration

Get the configuration of a Collection.

{{<syntax>}}
Collection.getConfig(_id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name

*Return Value*

Name | Type | Description
-----|------|----------------
`config` | JSON Object |  Collection Definition

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Getting CollectionItems' Property Names

Get displayable property names by internally fetching the latest *100*
CollectionItems of a Collection.

{{<syntax>}}
Collection.getPropertyNames(_id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id`  | String | Collection name

*Return Value*

Name | Type | Description
-----|------|----------------
`names` | Array |  Array of property names

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

See Also:

- [Collection Item Management](../collection_item)
- [Collection API](../../cloud/collection)
- [Backend Control Panel](/en/backend/manual/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/backend/manual/control_panel/#backend-management-api-key)


