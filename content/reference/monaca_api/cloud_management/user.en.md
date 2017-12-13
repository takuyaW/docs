---
title: User Management
---

Below are Monaca Backend Management APIs for Users.

Method | Description
-------|-------------------
[User.list()](#u-list) | Get a List of Users
[User.create()](#u-create) | Create a New User Object
[User.get()](#u-get) | Get a User's Data
[User.update()](#u-update) | Update a User's Data
[User.delete()](#u-delete) | Delete Users
[User.getPropertyNames()](#u-getPropertyNames) | Get Users' Property Names

##  Getting a List of Users

Get a list of users in a User collection.

{{<syntax>}}
User.list(page: Number, itemsInPage: Number, sortPropery: String, [propertyNames: String], [nameFilter: String], [userQuery: String], [userQueryBindParams: Array])
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`page` | Number | Page number (starting from `1`) 
`itemsInPage` | Number | Number of items to display on one page. The maximum number of items can be up to `10000`. 
`sortProperty` | String | (Default: `asc`) Property to be used for sorting `sortOrder` string Sorting order `asc` or `desc`.
`propertyNames` | String | [optional] Properties to be fetched in addition to system properties
`nameFilter` | String | [optional] Search users by `_username` or `_oid` with this keyword
`userQuery`	| String | [Optional] Filter target users by a [MonaQL](../../cloud/criteria/#monaql) query for user properties. For example: `country == "US" && age > 20`.
`userQueryBindParams` | Array	| [Optional] Replace the placeholders in userQuery by its values. For example: `["US", 20]` when `userQuery` is `country == ? && age > ?`.

*Return Value*

Name | Type | Description
-----|------|----------------
`items`      | JSON Object | Users that matched the conditions
`totalItems` | Number | Number of total users found

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

##  Creating a New User Object

Create a new User object.

{{<syntax>}}
User.create(username: String, password: String, properties: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`username` | String | Username or email address
`password` | String | Password
`properties` | JSON Object | Additional user properties to set

*Return Value*

Name | Type | Description
-----|------|----------------
`user` | JSON Object | User data (with `_id`)

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Getting a User's Data

Get a User's data.

{{<syntax>}}
User.get(_id: String)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id` | String | User's id

*Return Value*

Name | Type | Description
-----|------|----------------
`user` | JSON Object | User data

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Updating a User's Data

Update a User's data.

{{<syntax>}}
User.update(_id: Stirng, user: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`_id` | String | User's id
`user` | JSON Object | User data (`_id` column will be ignored) to be updated

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Deleting Users

Delete multiple Users.

{{<syntax>}}
User.delete(_idList: JSON Object)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|----------------
`idList` | JSON Object | id list of the users to be deleted

*Return Value*

There is no return value.

*Errors Code*

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Getting Users' Property Names

Get displayable property names by internally fetching the latest *100*
users.

{{<syntax>}}
User.getPropertyNames()
{{</syntax>}}

*Parameter*

There is no parameter.

*Return Value*

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


