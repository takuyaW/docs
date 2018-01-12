---
title: User Management
weight: 10
---

Below are Monaca Backend Management APIs for Users.

Method | Description
-------|-------------------
[User.list()](#user-list) | Get a List of Users
[User.create()](#user-create) | Create a New User Object
[User.get()](#user-get) | Get a User's Data
[User.update()](#user-update) | Update a User's Data
[User.delete()](#user-delete) | Delete Users
[User.getPropertyNames()](#user-getpropertynames) | Get Users' Property Names

## User.list()

Get a list of users in a User collection.

{{<highlight javascript>}}
User.list(page: Number, itemsInPage: Number, sortPropery: String, [propertyNames: String], [nameFilter: String], [userQuery: String], [userQueryBindParams: Array])
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`page` | Number | Page number (starting from `1`) 
`itemsInPage` | Number | Number of items to display on one page. The maximum number of items can be up to `10000`. 
`sortProperty` | String | Property to be used for sorting 
`sortOrder` | String | (Default: `asc`) Sorting order `asc` or `desc`.
`propertyNames` | String | [optional] Properties to be fetched in addition to system properties
`nameFilter` | String | [optional] Search users by `_username` or `_oid` with this keyword
`userQuery`	| String | [Optional] Filter target users by a [MonaQL](../../cloud/criteria#monaca-query-language) query for user properties. For example: `country == "US" && age > 20`.
`userQueryBindParams` | Array	| [Optional] Replace the placeholders in userQuery by its values. For example: `["US", 20]` when `userQuery` is `country == ? && age > ?`.

**Return Value**

Name | Type | Description
-----|------|----------------
`items`      | JSON Object | Users that matched the conditions
`totalItems` | Number | Number of total users found

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

## User.create()

Create a new User object.

{{<highlight javascript>}}
User.create(username: String, password: String, properties: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`username` | String | Username or email address
`password` | String | Password
`properties` | JSON Object | Additional user properties to set

**Return Value**

Name | Type | Description
-----|------|----------------
`user` | JSON Object | User data (with `_id`)

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## User.get()

Get a User's data.

{{<highlight javascript>}}
User.get(_id: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id` | String | User's id

**Return Value**

Name | Type | Description
-----|------|----------------
`user` | JSON Object | User data

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## User.update()

Update a User's data.

{{<highlight javascript>}}
User.update(_id: Stirng, user: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`_id` | String | User's id
`user` | JSON Object | User data (`_id` column will be ignored) to be updated

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## User.delete()

Delete multiple Users.

{{<highlight javascript>}}
User.delete(_idList: JSON Object)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`idList` | JSON Object | id list of the users to be deleted

**Return Value**

- None

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## User.getPropertyNames()

Get displayable property names by internally fetching the latest `100` users.

{{<highlight javascript>}}
User.getPropertyNames()
{{</highlight>}}

**Parameter**

- None

**Return Value**

Name | Type | Description
-----|------|----------------
`names` | Array of String | Property names

See Also: 

- [User API](../../cloud/user)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)


