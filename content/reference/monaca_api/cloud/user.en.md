---
title: User
---

In Monaca, you can add user account functionality to your app by using
the following Monaca Backend JavaScript APIs.

{{<note>}}
In order to access Backend API, you need to load <code>jQuery</code> and register
<code>cloud.monaca.mobi</code> in the whitelist by editing each OS's configuaration
file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

Method/Property                                               |Description
--------------------------------------------------------------|-------------------------------------------
[monaca.cloud.User.register()](#u-register) | Sign up a user
[monaca.cloud.User.validate()](#u-validate) | Validate registration parameters
[monaca.cloud.User.unregister()](#u-unregister) | Unregister the current user
[monaca.cloud.User.login()](#u-login) | Sign in a user
[monaca.cloud.User.isAuthenticated()](#u-isauthenticated) | Check whether a user has signed in or not
[monaca.cloud.User.autoLogin()](#u-autologin) | Sign in a user automatically
[monaca.cloud.User.logout()](#u-logout) | Sign out a user
[monaca.cloud.User.updatePassword()](#u-updatepass) | Update password for the current user
[monaca.cloud.User.sendPasswordResetToken()](#u-sendpass) | Email a token of new password
[monaca.cloud.User.resetPasswordAndLogin()](#u-resetpass) | Reset password and relogin
[monaca.cloud.User.getProperty()](#u-getproperty) | Get a property value of a user
[monaca.cloud.User.getProperties()](#u-getproperties) | Get property values of a user
[monaca.cloud.User.saveProperty()](#u-saveproperty) | Update a property of a user
[monaca.cloud.User.saveProperties()](#u-saveproperties) | Update a properties of a user
[monaca.cloud.User._oid](#u-oid) | Public identifier of a user

##  Signing up a User

Sign a user up with his/her username and password.

{{<syntax>}}
monaca.cloud.User.register(username: String, password: String, [properties: Object]) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description | Requirement
-----|------|-------------|---------------
`username` | String | The username for the user | Must not be a duplicate name of an existing user. Must not include any space characters. Must not be shorter than `X` characters. Must not be longer than `255` characters. It can be an email address.
`password` | String | The password for the user | Must not include any space characters. Must not be shorter than `Y` characters. Must not be longer than `80` characters.
`properties` | String | Additional properties of the user. The object needs to be a valid JSON format. The key must not start with an underscore. This parameter is optional. | Key names must consist of `[a-zA-Z0-9]` characters and must start with `[a-zA-Z]`. Data size must not exceed the size limit (`500KB`).

{{<note>}}
<code>X</code> and <code>Y</code> values can be set in Settings page on Monaca Cloud IDE.
{{</note>}}

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to process result.  

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- and other user-defined properties.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

*Example*

The following snippet shows how to create a new user account with the username `"me@example.com"`, password `"password"` and age `21`.

{{<highlight javascript>}}
monaca.cloud.User.register("me@example.com", "password", {age:21})
.done(function(result)
{
   console.log("Welcome, " + result.user._username);
   console.log("You are " + result.user.age + " years old.");
}
)
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Validating a User

Validate registration parameters.

{{<syntax>}}
monaca.cloud.User.validate(username: String, [properties: Object]) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`username` | String | The username for the user
`properties` | JSON Object | The properties of the user

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

*Example*

The following code illustrates an example of a user validation by checking whether the username `"me@example.com"` already exists.

{{<highlight javascript>}}
monaca.cloud.User.validate("me@example.com")
.done(function(result)
{
   console.log("Validation passed!");
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Unregistering the Current User

Unregister the current user. The current user must be authenticated.

{{<syntax>}}
monaca.cloud.User.unregister(password: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`password` | String | The password for the user

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params
`11` | User login is required.

*Example*

The below snippet demonstrates how to unregister the current user whose password is `"password"`.

{{<highlight javascript>}}
monaca.cloud.User.unregister("password")
.done(function(result)
{
    console.log("You are unregistered");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Signing in a User

Sign in a user.

{{<syntax>}}
monaca.cloud.User.login(username: String, password: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`username` | String | The username of the user
`password` | String | The password of the user

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to process result.  

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- and other user-defined properties.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

*Example*

The following is a typical example of how to login a user with a username `"me@example.com"` and password `"password"`.

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.done(function(result){
    console.log("Hello again, " + result.user._username);
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Authenticating a User

Return a boolean value whether the user has logged-in or not.

{{<syntax>}}
monaca.cloud.User.isAuthenticated() : Boolean
{{</syntax>}}

*Parameter*

There is no parameter. 

*Return Value*

Type | Description
-----|--------------------------
`Boolean` | `true` if already authenticated, otherwise `false`.

*Example*

{{<highlight javascript>}}
if (false == monaca.cloud..User.isAuthenticated()) {
    // Go to login
}
{{</highlight>}}

##  Signing in a User Automatically

When the user restarts the app, this function automatically logs in the
user. It is required to enable auto-login feature with Monaca Cloud IDE.

{{<syntax>}}
monaca.cloud.User.autoLogin() : $.Promise
{{</syntax>}}

*Parameter*

There is no parameter. 

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to process result.  

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- and other user-defined properties.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`13` | Invalid operation (When auto-login feature is disabled).
`-32602` | Invalid params

*Example*

The following code will enable automatic login for a user.

{{<highlight javascript>}}
monaca.cloud.User.autoLogin()
.done(function(result)
{
   console.log("Hello again, " + result.user._username);
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Signing out a User

Sign out the user. The user must be authenticated. When the user signs
out, auto-login will be disabled.

{{<syntax>}}
monaca.cloud.User.logout() : $.Promise
{{</syntax>}}

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
`-32602` | Invalid params
`11` | User login is required.

*Example*

The following example will show how to log out the current user.

{{<highlight javascript>}}
monaca.cloud.User.logout()
.done(function(result)
{
   console.log("You are successfully logged out");
})
.fail(function(err)
{
   console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Updating the Password of Current User

Update password for the current user. The user must be authenticated.

{{<syntax>}}
monaca.cloud.User.updatePassword(oldPassword: String, newPassword: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`oldPassword` | String | Old password
`newPassword` | String | New password

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.  

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`11`     |  User login is required.

*Example*

The following code will update the password of a current user from `"pass123"` to `"newPass123"`.

{{<highlight javascript>}}
monaca.cloud.User.updatePassword("oldPassword", "newPassword")
.done(function(result)
{
    console.log("Your password is successfully changed");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Sending a Token of New Password

Send an email with a token to reset the password in case a user could
not log in because of a forgotten password. Before sending this email,
it is required to create an email template by using Monaca Cloud IDE in
advance. Please refer to [Mail Template Management](/en/products_guide/backend/control_operations/#mail-template-management) for how to create an
email template.

{{<syntax>}}
monaca.cloud.User.sendPasswordResetToken(username: String, options: Object) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`username` | String | The name of the user
`options` | JSON Object |<ul><li>`emailPropertyName`: Specify the name field which has the user's email address (default: `_username`)</li><li>`templateName`: Specify a template to use (default: `send_password_token`). The mail body must include `"%PASSWORD_RESET_TOKEN%"` which will be replaced with the token.</li></ul>

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.  

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params
`13` | Invalid operation (When the user has already logged-in).

*Example*

The following snippet shows an example of how to send an email with the new token to a user called `username` with his registered email address registered with `email` field.

{{<highlight javascript>}}
monaca.cloud.User.sendPasswordResetToken("username", {emailPropertyName:"email"})
.done(function()
{
    console.log("An email was successfully sent.");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Resetting Password and Reloging

Reset the password of the current user and relogin with the new
password.

{{<syntax>}}
monaca.cloud.User.resetPasswordAndLogin(username: String, newPassword: String, token: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`username` | String | The username of the user
`newPassword` | String | The new password
`token` | String | The token which the user received via email, sent by `User.sendPasswordResetToken()`

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get result.  

Within the `done()` callback, there is a `user` JSON Object which has the following properties:

- `_id` : {String}
- `_username` : {String}
- `_createdAt` : {Number} unixtime
- `_updateAt` : {Number} unixtime
- and other user-defined properties.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params

*Example*

The following example demonstrates how to reset the password of a user and then login with the new password.

{{<highlight javascript>}}
monaca.cloud.User.resetPasswordAndLogin("username", "newPassword", "000000")
.done(function(result)
{
    console.log(result.user._username + ", your password is successfully changed.");
})
.fail(function(err)
{
    console.log("Err#" + err.code +": " + err.message);
});
{{</highlight>}}

##  Getting a Property of a User

Get a property value of the user. The user must be authenticated.

{{<syntax>}}
monaca.cloud.User.getProperty(name: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`name` | String | A property name

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get result.  

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`11` |  User login is required.

*Example*

Refer to the following code for an example of how to get a property value of `age` of a user.

{{<highlight javascript>}}
monaca.cloud.User.login("me.@example.com", "password")
.then(function()
{
    return monaca.cloud.User.getProperty("age");
})
.then(function(age)
{
    console.log(age);
})
{{</highlight>}}

##  Getting Multiple Properties of a User

Get an array of property values of the user. The user must be
authenticated.

{{<syntax>}}
monaca.cloud.User.getProperties(names: Array) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`name` | Array of String | Properties names

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get result.  

Within the `done()` callback, there is:

- `user-defined property name`: Any user-defined property name

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`11` |  User login is required.

*Example*

Below is how to get the values of 2 properties of a user.

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.then(function()
{
    return monaca.cloud.User.getProperties(["age", "icon"]);
})
.then(function(properties)
{
    console.log(properties.age);
    console.log(properties.icon);
})
{{</highlight>}}

##  Updating a Property of a User

Update a property value of the user. The user must be authenticated.

{{<syntax>}}
monaca.cloud.User.saveProperty(name: String, value: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description | Requirement
-----|------|-------------|-------------------------
`name` | String | Property name | Must consist of `[a-zA-Z0-9]` characters and must start with `[a-zA-Z]`.
`value` | String | The value of the corresponding property name to be added or updated |

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get result.  

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` | Invalid params
`11` | User login is required.

*Example*

The following example illustrates how to add/update the user's nickname to `"John"`.

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.then(function()
{
    return monaca.cloud.User.saveProperty("nickname", "John");
})
.then(function()
{
    cosole.log("Your nickname was changed");
})
{{</highlight>}}

##  Updating Multiple Properties of a User

Update an array of property values of a user. The user must be
authenticated.

{{<syntax>}}
monaca.cloud.User.saveProperties(properties: Object) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`properties` | JSON Object | Additional properties of a user to be added/updated

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get result.  

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`11`     |  User login is required.

*Example*

The following example illustrates how to add/update 2 properties (`nickname` & `email`) of a user.

{{<highlight javascript>}}
monaca.cloud.User.login("me@example.com", "password")
.then(function()
{
    return monaca.cloud.User.saveProperties({"nickname":"John", "email":"john@example.com"});
})
.then(function()
{
    cosole.log("Your nickname and email were changed");
})
{{</highlight>}}

##  Getting the Public Identifier of a User

Public identifier of a user. When the user has logged-in,
`monaca.cloud.User._oid` is a long string. Otherwise, oid is `null`.

{{<syntax>}}
monaca.cloud.User._oid
{{</syntax>}}

*Example*

{{<highlight javascript>}}
var oid = monaca.cloud.User._oid;
{{</highlight>}}

See Also: 

- [User Management](../../cloud_management/user)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)

