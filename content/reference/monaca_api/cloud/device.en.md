---
title: Device
---

Device management can be done with the following JavaScript APIs.

{{<note>}}
In order to access Backend API, you need to load <code>jQuery</code> and register
<code>cloud.monaca.mobi</code> in the whitelist by editing each OS's configuaration
file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

Method/Property | Description
----------------|--------------------
[monaca.cloud.Device.getProperty()](#d-getproperty) | Get a property value of device
[monaca.cloud.Device.getProperties()](#d-getproperties) | Get property values of a device
[monaca.cloud.Device.saveProperty()](#d-saveproperty) | Update a property of a device
[monaca.cloud.Device.saveProperties](#d-saveproperties) | Update properties of a device

##  Retrieving a Device Property

Get a property value of a device.

{{<syntax>}}
monaca.cloud.Device.getProperty(name: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`name` | String | A property name

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is the property value.

*Example*

Refer to the following code for an example of how to get a property value of a device.

{{<highlight javascript>}}
monaca.cloud.Device.getProperty("nickname")
  .done
    (
      function(result)
      { console.log("Device's nickname: " + result); }
    )
  .fail
    (
      function(err)
      { /* error handling codes */ }
    )
  .always
    (
      function()
      { /* what must be done despite the outcome of the getProperty function */ }
    );
{{</highlight>}}

##  Retrieving Device Properties

Get property values of a device.

{{<syntax>}}
monaca.cloud.Device.getProperties(names: Array) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`names` | Array of String | Property names

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

Within the `done()` callback, there is a JSON Object containing various properties' values.

*Example*

Below is how to get the values of 2 properties of a device.

{{<highlight javascript>}}
monaca.cloud.Device.getProperties(["nickname", "color"])
  .done
    (
      function(result)
      {
        console.log("Properties: " + JSON.stringify(result));
        console.log("Device's nickname: " + result.nickname);
      }
    )
  .fail
    (
      function(err)
      { /* error handling codes */ }
    )
  .always
    (
      function()
      { /* what must be done despite the outcome of the getProperties function */ }
    );
{{</highlight>}}

##  Updating a Device Property

Update a property value of a device.

{{<syntax>}}
monaca.cloud.Device.saveProperty(name: String, value: String) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description | Requirement
-----|------|-------------|---------------------
`name` | String | A property name | Must consist of \[`a-zA-Z0-9`\] characters and must start with \[`a-zA-Z`\].
`value` | String | The value of the corresponded property name to be added or updated |

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example illustrates how to add/update the device's nickname to `"Monaca"`.

{{<highlight javascript>}}
monaca.cloud.Device.saveProperty("nickname", "Monaca")
  .done
    (
      function()
      { console.log("Saved."); }
    )
  .fail
    (
      function(err)
      { /* error handling codes */ }
    )
  .always
    (
      function()
      { /* what must be done despite the outcome of the saveProperty function */ }
    );
{{</highlight>}}

##  Updating Device Properties

Update an array of property values of a device.

{{<syntax>}}
monaca.cloud.Device.saveProperties(properties: Object) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description | Requirement
-----|------|-------------|---------------------
`properties` | JSON Object | Additional properties of a device to be added/updated | Key names must consist of [`a-zA-Z0-9`] characters and must start with [`a-zA-Z`]. Data size must not exceed the size limit (`500KB`).


*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

*Example*

The following example illustrates how to add/update 2 properties (`nickname` & `color`) of a device.

{{<highlight javascript>}}
monaca.cloud.Device.saveProperties({"nickname": "Monaca", "color": "#9999FF"})
  .done
    (
      function()
      { console.log("Saved."); }
    )
  .fail
    (
      function(err)
      { /* error handling codes */ }
    )
  .always
    (
      function()
      { /* what must be done despite the outcome of the saveProperties function */ }
    );
{{</highlight>}}


See Also: 

- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)
