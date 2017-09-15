Colllection Management
======================

Below are Monaca Backend Management API for Collections.

  Method                                          Description
  ----------------------------------------------- -------------------------------------
  Collection.list()&lt;c\_list&gt;                Get a List of Collections
  Collection.create()&lt;c\_create&gt;            Create a New Collection Object
  Collection.drop()&lt;c\_drop&gt;                Drop a Collection
  Collection.setConfig()&lt;c\_setConfig&gt;      Configure a Collection
  Collection.getConfig()&lt;c\_getConfig&gt;      Get a Configuration of a Collection
  Collection.getPropertyNames()&lt;c\_getPN&gt;   Get CollectionItems' Property Names

Collection.list - Get a List of Collections
-------------------------------------------

Get a list of Collections.

Collection.list

Parameter

:   -------- --
      `None`   
      -------- --

Return Value

:   --------- ------- -----------------------
      `items`   array   CollectionDefinitions
      --------- ------- -----------------------

Error Code

:   ------- --
      `N/A`   
      ------- --

Collection.create - Create a New Collection
-------------------------------------------

Create a new Collection object.

Collection.create

Parameter

:   --------------------------- --------- --------------------------------------------------------------------------------
      `_id`                       string    Collection name
      `isInsertable`              boolean   
      `defaultPublicPermission`   string    Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`
      --------------------------- --------- --------------------------------------------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Error Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Collection.drop - Drop a Collection
-----------------------------------

Drop a Collection.

Collection.drop

Parameter

:   ------- -------- -----------------
      `_id`   string   Collection name
      ------- -------- -----------------

Return Value

:   -------- --
      `None`   
      -------- --

Error Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Collection.setConfig - Configure a Collection
---------------------------------------------

Configure a Collection.

Collection.setConfig

Parameter

:   --------------------------- --------- --------------------------------------------------------------------------------
      `_id`                       string    Collection name
      `isInsertable`              boolean   
      `defaultPublicPermission`   string    Public permissions of the Collection which can be `""`, `"r"`, `"w"` or `"rw"`
      --------------------------- --------- --------------------------------------------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Collection.getConfig - Get a Collection's Configuration
-------------------------------------------------------

Get the configuration of a Collection.

Collection.getConfig

Parameter

:   ------- -------- -----------------
      `_id`   string   Collection name
      ------- -------- -----------------

Return Value

:   ---------- -------- ----------------------
      `config`   object   CollectionDefinition
      ---------- -------- ----------------------

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------

Collection.getPropertyNames - Get CollectionItems' Property Names
-----------------------------------------------------------------

Get displayable property names by internally fetching the latest *100*
CollectionItems of a Collection.

Collection.getPropertyNames

Parameter

:   ------- -------- -----------------
      `_id`   string   Collection name
      ------- -------- -----------------

Return Value

:   --------- ------- --------------------------
      `names`   array   Array of property names.
      --------- ------- --------------------------

Errors Code

:   Errors are returned as ../cloud/error object.

      ---------- ----------------
      `-32602`   Invalid params
      ---------- ----------------


