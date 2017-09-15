User Management
===============

Below are Monaca Backend Management APIs for Users.

  Method                                    Description
  ----------------------------------------- ---------------------------
  User.list()&lt;u\_list&gt;                Get a List of Users
  User.create()&lt;u\_create&gt;            Create a New User Object
  User.get()&lt;u\_get&gt;                  Get a User's Data
  User.update()&lt;u\_update&gt;            Update a User's Data
  User.delete()&lt;u\_delete&gt;            Delete Users
  User.getPropertyNames()&lt;u\_getPN&gt;   Get Users' Property Names

User.list - Get a List of Users
-------------------------------

Get a list of users in a User collection.

User.list

Parameter

:   ======================== ==================
    ==========================================================================================================================
    `page` number Page number (starting from 1) `itemsInPage` number
    Number of items to display on one page. The maximum number of items
    can be up to `10000`. `sortProperty` string Property to be used for
    sorting `sortOrder` string Sorting order `"asc"` or `"desc"`
    (Default: `"asc"`) `propertyNames` string Properties to fetch in
    addition to system properties (optional) `nameFilter` string Search
    users by `_username` or `_oid` with this keyword (optional)
    `userQuery` string Filter target users by a MonaQL&lt;MonaQL&gt;
    query for user properties. (Optional)

    > **e.g.** 'country == "US" && age &gt; 20'

    `userQueryBindParams` array Replace the placeholders in userQuery by
    its values. (Optional)

    > **e.g.** \["US", 20\] when userQuery is 'country == ? && age &gt;
    > ?'

    ======================== ==================
    ==========================================================================================================================

Return Value

:   -------------- -----------------
      `items`        Items returned
      `totalItems`   Number of items
      -------------- -----------------

Error Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

User.create - Create a new User Object
--------------------------------------

Create a new User object.

User.create

Parameter

:   -------------- -------- -----------------------------------
      `username`     string   Username or email address
      `password`     string   Password
      `properties`   object   Additional user properties to set
      -------------- -------- -----------------------------------

Return Value

:   -------- ------------------------
      `user`   User data (with `_id`)
      -------- ------------------------

Error Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

User.get - Get a User Data
--------------------------

Get a User's data.

User.get

Parameter

:   ------- -------- -----------
      `_id`   string   User's id
      ------- -------- -----------

Return Value

:   -------- -----------
      `user`   User data
      -------- -----------

Error Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

User.update - Update a User Data
--------------------------------

Update a User's data.

User.update

Parameter

:   -------- -------- ------------------------------------------
      `_id`    string   User's id
      `user`            User data (`_id` column will be ignored)
      -------- -------- ------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

User.delete - Delete Users
--------------------------

Delete multiple Users.

User.delete

Parameter

:   ---------- -------- ---------
      `idList`   Object   id list
      ---------- -------- ---------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

User.getPropertyNames - Get Users' Property Names
-------------------------------------------------

Get displayable property names by internally fetching the latest *100*
users.

User.getPropertyNames

Parameter

:   -------- --
      `None`   
      -------- --

Return Value

:   --------- ------- -----------------
      `names`   array   Property names.
      --------- ------- -----------------

Errors Code

:   ------- --
      `N/A`   
      ------- --


