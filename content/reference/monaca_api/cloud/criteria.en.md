---
title: Criteria
weight: 50
---

You can make query with Criteria object.

{{<note>}}
In order to access Backend API, you need to load <code>jQuery</code> and register
<code>cloud.monaca.mobi</code> in the whitelist by editing each OS's configuaration
file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

Method/Property | Description
----------------|--------------------
[monaca.cloud.Criteria()](#creating-a-criteria-object) | Create a criteria object
[MonaQL](#monaca-query-language) | Monaca Query Language

##  Creating a Criteria Object

Get a criteria object with a specific name.

{{<highlight javascript>}}
monaca.cloud.Criteria(query: String[ bindParams: Array]) : criteriaObject
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|-------------
`query` | String | A query string written in [MonaQL](#monaca-query-language)
`bindParams` | Array of String | Values to bind

**Return Value**

- Criteria object

**Example**

Below are samples of Criteria and [MonaQL](#monaca-query-language). In MonaQL, `?` is a place holder. It is replaced with `bindParams`.

{{<highlight javascript>}}
var Criteria0 = monaca.cloud.Criteria('a == 12 && (b == 34 || c == 56)');
var Critetia1 = monaca.cloud.Criteria(
  'a == 12 && !(b == 34 || c == 56)'
); // a == 12 && (b != 34 && c != 56)

var Critetia2 = monaca.cloud.Criteria(
  'name IN ["John", "Smith"]'
); // name == "John" || name == "Smith"
var Critetia3 = monaca.cloud.Criteria(
  'name NIN ["John", "Smith"]'
); // name != "John" && name != "Smith"

var Criteria4 = monaca.cloud.Criteria(
  'name == ? && age > ?',
  ["John", 20]
); // name == "John" && age > 20

var names = ["John", "Smith"];
var Criteria5 = monaca.cloud.Criteria(
  'name IN ?',
  [names]
); // name == "John" || name == "Smith"
{{</highlight>}}

##  Monaca Query Language

This is complete list of MonaQL operators and value types.

### Operators

Operator  |Description
----------|--------------------------------------
`==`      | Value equality
`!=`      | Inequality
`>`       | Greater than
`>=`      | Greater than or equal
`<`       | Less than
`<=`      | Less than or equal
`IN`      | Included in given array
`NIN`     | Not included in given array
`()`      | Make group
`!()`     | Make group and reverse boolean value
`&&`      | Logical AND
<code>&#124;&#124;</code> | Logical OR

### Value Types

Values           |Description
-----------------|-----------------------------------------
`123`, `-123`    | Integer
`1.23`, `-1.23`    | Double
`"string"`       | String(single quotation is not allowed)
`[1,2,3]`        | Array
`null`           | Null or property does not exist
`true`, `false`  | Boolean
`?`              | Place holder


See Also: 

- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)
