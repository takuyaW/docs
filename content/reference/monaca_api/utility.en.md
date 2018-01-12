---
title: Utilities
weight: 40
---

We describe other functions provided by Monaca.

Method/Property | Description
----------------|---------------------
[monaca.getDeviceId()](#monaca-getdeviceid) | Get the unique device ID
[monaca.baseUrl](#monaca-baseurl) | Get absolute URL to www folder.
[monaca.isAndroid](#monaca-isandroid) | Check whether the device is Android or not
[monaca.isIOS](#monaca-isios) | Check the device is iOS or not

## monaca.getDeviceId()

Get the unique device ID which has been created randomly.

{{<note>}}
Monaca framework automatically creates a unique device ID at the first
time app launch.
{{</note>}}

{{<highlight bash>}}
monaca.getDeviceId(callback)
{{</highlight>}}

**Parameter**

Parameter | Type | Description
----------|------|-----------------
`callback` | Function | A callback function where device ID is the first parameter

**Return Value**

- None

**Example**

{{<highlight javascript>}}
monaca.getDeviceId(function(id){
   console.log('Device ID: ' + id);
});
{{</highlight>}}

## monaca.baseUrl

Get an absolute URL to `www` folder.

{{<highlight bash>}}
monaca.baseUrl
{{</highlight>}}

**Return Value**

Type | Description
------|-----------------
String | The absolute URL of application

**Example**

{{<highlight javascript>}}
window.onload = function()
{
   alert(monaca.baseUrl);
}
{{</highlight>}}

## monaca.isAndroid

Check whether the device is an Android device or not.

{{<highlight bash>}}
monaca.isAndroid
{{</highlight>}}

**Return Value**

| Type | Description
------|-----------------
boolean | The device is Android device if the return value is *true*.

**Example**

{{<highlight javascript>}}
if(monaca.isAndroid === true){
  alert("Android!");
}
{{</highlight>}}

## monaca.isIOS

Check whether the device is an iOS device or not .

{{<highlight bash>}}
monaca.isIOS
{{</highlight>}}

**Return Value**

| Type | Description
------|-----------------
`boolean` | The device is iOS device if the return value is *true*.

**Example**

{{<highlight javascript>}}
if(monaca.isIOS === true){
  alert("iOS!");
}
{{</highlight>}}


