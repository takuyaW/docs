User
====

In Monaca, you can add user account functionality to your app by using
the following Monaca Backend JavaScript APIs.

<div class="admonition note">

In order to access Backend API, you need to load `jQuery` and register
`cloud.monaca.mobi` in the whitelist by editing each OS's configuaration
file. For more details, please refer to
Access Origin (Android) &lt;access\_origin\_android&gt; and
Access Origin (iOS) &lt;access\_origin&gt;.

</div>

  Method/Property                                                Description
  -------------------------------------------------------------- -------------------------------------------
  monaca.cloud.User.register()&lt;u.register&gt;                 Sign up a user
  monaca.cloud.User.validate()&lt;u.validate&gt;                 Validate registration parameters.
  monaca.cloud.User.unregister()&lt;u.unregister&gt;             Unregister the current user
  monaca.cloud.User.login()&lt;u.login&gt;                       Sign in a user
  monaca.cloud.User.isAuthenticated()&lt;u.isAuthenticated&gt;   Check whether a user has signed in or not
  monaca.cloud.User.autoLogin()&lt;u.autoLogin&gt;               Sign in a user automatically
  monaca.cloud.User.logout()&lt;u.logout&gt;                     Sign out a user
  monaca.cloud.User.updatePassword()&lt;u.updatePass&gt;         Update password for the current user
  monaca.cloud.User.sendPasswordResetToken()&lt;u.sendPass&gt;   Email a token of new password
  monaca.cloud.User.resetPasswordAndLogin()&lt;u.resetPass&gt;   Reset password and relogin
  monaca.cloud.User.getProperty()&lt;u.getProperty&gt;           Get a property value of a user
  monaca.cloud.User.getProperties()&lt;u.getProperties&gt;       Get property values of a user
  monaca.cloud.User.saveProperty()&lt;u.saveProperty&gt;         Update a property of a user
  monaca.cloud.User.saveProperties()&lt;u.saveProperties&gt;     Update a properties of a user
  monaca.cloud.User.\_oid&lt;u.\_oid&gt;                         Public identifier of a user

User.register()
---------------

Sign a user up with his/her username and password.

monaca.cloud.User.register(username: String, password: String, \[properties: Object\]) : \$.Promise

Parameter

:   -------------- -------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`     The username for the user.
      `password`     The password for the user.
      `properties`   Additional properties of the user. The object needs to be a valid JSON format. The key must not start with an underscore. This parameter is optional.
      -------------- -------------------------------------------------------------------------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------- -------- --------------------------------------
      `user`   Object   - \_id : {String}
                        - \_username : {String}
                        - \_createdAt : {Number} unixtime
                        - \_updateAt : {Number} unixtime
                        - and other user-defined properties.
      -------- -------- --------------------------------------

Requirement

:   -------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`     Must not be a duplicate name of an existing user. Must not include any space characters. Must not be shorter than `X` characters. Must not be longer than `255` characters. It can be an email address.
      `password`     Must not include any space characters. Must not be shorter than `Y` characters. Must not be longer than `80` characters.
      `properties`   Key names must consist of **\[[a-zA-Z0-9]()\]** characters and must start with **\[a-zA-Z\]**. Data size must not exceed the size limit (`500KB`).
      -------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    <div class="admonition note">

    X and Y values can be set in Settings page on Monaca Cloud IDE.

    </div>

Return Value

:   ------------------------------- ------------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to process result.
      ------------------------------- ------------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example

:   The following snippet shows how to create a new user account with
    the username `"me@example.com"`, password `"password"` and age `21`.

    ``` {.sourceCode .javascript}
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
    ```

User.validate()
---------------

Validate registration parameters.

monaca.cloud.User.validate(username: String, properties: Object) : \$.Promise

Parameter

:   -------------- -----------------------------------------------------------------------------
      `username`     The username for the user.
      `properties`   The properties of the user. The object is encoded and saved as JSON format.
      -------------- -----------------------------------------------------------------------------

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

:   The following code illustrates an example of a user validation by
    checking whether the username `"me@example.com"` already exists.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.validate("me@example.com")
    .done(function(result)
    {
       console.log("Validation passed!");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.unregister()
-----------------

Unregister the current user. The current user must be authenticated.

monaca.cloud.User.unregister(password: String) : \$.Promise

Parameter

:   ------------ ----------------------------
      `password`   The password for the user.
      ------------ ----------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- -------------------------
      `-32602`   Invalid params
      `11`       User login is required.
      ---------- -------------------------

Example

:   The below snippet demonstrates how to unregister the current user
    whose password is `"password"`.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.unregister("password")
    .done(function(result)
    {
       console.log("You are unregistered");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.login()
------------

Sign in a user.

monaca.cloud.User.login(username: String, password: String) : \$.Promise

Parameter

:   ------------ ---------------------------
      `username`   The username of the user.
      `password`   The password of the user.
      ------------ ---------------------------

Result Parameter of done() Callback

:   -------- -------- --------------------------------------
      `user`   Object   - \_id : {String}
                        - \_username : {String}
                        - \_createdAt : {Number} unixtime
                        - \_updateAt : {Number} unixtime
                        - and other user-defined properties.
      -------- -------- --------------------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Error is returned as error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Example

:   The following is a typical example of how to login a user with a
    username `"me@example.com"` and password `"password"`.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .done(function(result){
       console.log("Hello again, " + result.user._username);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.isAuthenticated()
----------------------

Return a boolean value whether the user has logged-in or not.

monaca.cloud.User.isAuthenticated() : Boolean

Parameter

:   -------- --
      `None`   
      -------- --

Return Value:

:   ----------- -----------------------------------------------------
      `Boolean`   `true` if already authenticated, otherwise `false`.
      ----------- -----------------------------------------------------

Example

:   ``` {.sourceCode .javascript}
    if (false == monaca.cloud..User.isAuthenticated()) {
      // Go to login
    }
    ```

User.autoLogin()
----------------

When the user restarts the app, this function automatically logs in the
user. It is required to enable auto-login feature with Monaca Cloud IDE.

monaca.cloud.User.autoLogin() : \$.Promise

Parameter

:   -------- --
      `None`   
      -------- --

Result Parameter of done() Callback

:   -------- -------- --------------------------------------
      `user`   Object   - \_id : {String}
                        - \_username : {String}
                        - \_createdAt : {Number} unixtime
                        - \_updateAt : {Number} unixtime
                        - and other user-defined properties.
      -------- -------- --------------------------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------------------------------------------------
      `13`       Invalid operation (When auto-login feature is disabled).
      `-32602`   Invalid params
      ---------- ----------------------------------------------------------

Example:

:   The following code will enable automatic login for a user.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.autoLogin()
    .done(function(result)
    {
       console.log("Hello again, " + result.user._username);
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.logout()
-------------

Sign out the user. The user must be authenticated. When the user signs
out, auto-login will be disabled.

monaca.cloud.User.logout() : \$.Promise

Parameter

:   -------- --
      `None`   
      -------- --

Return Value:

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Error is returned as error object.

      ---------- -------------------------
      `-32602`   Invalid params
      `11`       User login is required.
      ---------- -------------------------

Example

:   The following example will show how to log out the current user.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.logout()
    .done(function(result)
    {
       console.log("You are successfully logged out");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.updatePassword()
---------------------

Update password for the current user. The user must be authenticated.

monaca.cloud.User.updatePassword(oldPassword: String, newPassword: String) : \$.Promise

Parameter

:   --------------- ---------------
      `oldPassword`   Old password.
      `newPassword`   New password.
      --------------- ---------------

Return Value:

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- -------------------------
      `-32602`   Invalid params
      `11`       User login is required.
      ---------- -------------------------

Example:

:   The following code will update the password of a current user from
    `"pass123"` to `"newPass123"`.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.updatePassword("oldPassword", "newPassword")
    .done(function(result)
    {
       console.log("Your password is successfully changed");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.sendPasswordResetToken()
-----------------------------

Send an email with a token to reset the password in case a user could
not log in because of a forgotten password. Before sending this email,
it is required to create an email template by using Monaca Cloud IDE in
advance. Please refer to
backend\_control\_panel\_mail\_template\_management for how to create an
email template.

monaca.cloud.User.sendPasswordResetToken(username: String, options: Object) : \$.Promise

Parameter

:   ------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      `username`   the name of the user.
      `options`    - `emailPropertyName`: Specify the name field which has the user's email address (default: `_username`)
                   - `templateName`: Specify a template to use (default: `send_password_token`). The mail body must include `"%PASSWORD_RESET_TOKEN%"` which will be replaced with the token.
      ------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Return Value:

:   ------------------------ -----------------------------------------------------------------------------------------
      [\$.Promise](../other)   Use `done()`, `fail()` and `always()` methods to get results.
      object                   
      ------------------------ -----------------------------------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- ----------------------------------------------------------
      `-32602`   Invalid params
      `13`       Invalid operation (When the user has already logged-in).
      ---------- ----------------------------------------------------------

Example

:   The following snippet shows an example of how to send an email with
    the new token to a user called `"username"` with his registered
    email address registered with "email" field.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.sendPasswordResetToken("username", {emailPropertyName:"email"})
    .done(function()
    {
       console.log("An email was successfully sent.");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.resetPasswordAndLogin()
----------------------------

Reset the password of the current user and relogin with the new
password.

monaca.cloud.User.resetPasswordAndLogin(username: String, newPassword: String, token: String) : \$.Promise

Parameter

:   --------------- -------------------------------------------------------------------------------------
      `username`      The username of the user.
      `newPassword`   The new password.
      `token`         The token which the user received via email, sent by User.sendPasswordResetToken().
      --------------- -------------------------------------------------------------------------------------

Result Parameter of done() Callback

:   -------- -------- --------------------------------------
      `user`   Object   - \_id : {String}
                        - \_username : {String}
                        - \_createdAt : {Number} unixtime
                        - \_updateAt : {Number} unixtime
                        - and other user-defined properties.
      -------- -------- --------------------------------------

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

:   The following example demonstrates how to reset the password of a
    user and then login with the new password.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.resetPasswordAndLogin("username", "newPassword", "000000")
    .done(function(result)
    {
       console.log(result.user._username + ", your password is successfully changed.");
    })
    .fail(function(err)
    {
       console.log("Err#" + err.code +": " + err.message);
    });
    ```

User.getProperty()
------------------

Get a property value of the user. The user must be authenticated.

monaca.cloud.User.getProperty(name: String) : \$.Promise

Parameter

:   -------- ------------------
      `name`   A property name.
      -------- ------------------

Return Value

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Error is returned as error object.

      ------ -------------------------
      `11`   User login is required.
      ------ -------------------------

Example:

:   Refer to the following code for an example of how to get a property
    value of `"age"` of a user.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me.@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.getProperty("age");
    })
    .then(function(age)
    {
       console.log(age);
    })
    ```

User.getProperties()
--------------------

Get an array of property values of the user. The user must be
authenticated.

monaca.cloud.User.getProperties(names: Array) : \$.Promise

Parameter

:   --------- -------------------
      `names`   Properties names.
      --------- -------------------

Result Parameter of done() Callback

:   ---------------------------- ----- --
      user-defined property name   Any   
      ---------------------------- ----- --

Return Value:

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Error is returned as error object.

      ------ -------------------------
      `11`   User login is required.
      ------ -------------------------

Example:

:   Below is how to get the values of 2 properties of a user.

    ``` {.sourceCode .javascript}
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
    ```

User.saveProperty()
-------------------

Update a property value of the user. The user must be authenticated.

monaca.cloud.User.saveProperty(name: String, value: String) : \$.Promise

Parameter

:   --------- ----------------------------------------------------------------------
      `name`    Property name.
      `value`   The value of the corresponding property name to be added or updated.
      --------- ----------------------------------------------------------------------

Requirement

:   -------- --------------------------------------------------------------------------
      `name`   Must consist of \[a-zA-Z0-9\] characters and must start with \[a-zA-Z\].
      -------- --------------------------------------------------------------------------

Return Value:

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- -------------------------
      `-32602`   Invalid params
      `11`       User login is required.
      ---------- -------------------------

Example

:   The following example illustrates how to add/update the user's
    nickname to `"John"`.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperty("nickname", "John");
    })
    .then(function()
    {
       cosole.log("Your nickname was changed");
    })
    ```

User.saveProperties()
---------------------

Update an array of property values of a user. The user must be
authenticated.

monaca.cloud.User.saveProperties(properties: Object) : \$.Promise

Parameter

:   -------------- ------------------------------------------------------
      `properties`   Additional properties of a user to be added/updated.
      -------------- ------------------------------------------------------

Return Value:

:   ------------------------------- ---------------------------------------------------------------
      [\$.Promise](../other) object   Use `done()`, `fail()` and `always()` methods to get results.
      ------------------------------- ---------------------------------------------------------------

Errors Code

:   Errors are returned as error object.

      ---------- -------------------------
      `-32602`   Invalid params
      `11`       User login is required.
      ---------- -------------------------

Example

:   The following example illustrates how to add/update 2 properties
    (`nickname` & `email`) of a user.

    ``` {.sourceCode .javascript}
    monaca.cloud.User.login("me@example.com", "password")
    .then(function()
    {
       return monaca.cloud.User.saveProperties({"nickname":"John", "email":"john@example.com"});
    })
    .then(function()
    {
       cosole.log("Your nickname and email were changed");
    })
    ```

User.\_oid
----------

Public identifier of a user. When the user has logged-in,
`monaca.cloud.User._oid` is a long string. Otherwise, oid is `null`.

monaca.cloud.User.\_oid

Example

:   ``` {.sourceCode .javascript}
    var oid = monaca.cloud.User._oid;
    ```

