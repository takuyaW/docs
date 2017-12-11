---
title: Monaca Cloud & Remote Build API Guide
---

# Utilities

We describe other functions provided by Monaca.

Method/Property | Description
----------------|---------------------
[monaca.getDeviceId()](#getdeviceid) | Get the unique device ID
[monaca.baseUrl](#baseurl) | Get absolute URL to www folder.
[monaca.isAndroid](#isandroid) | Check whether the device is Android or not
[monaca.isIOS](#isios) | Check the device is iOS or not

##  monaca.getDeviceId() - Get the unique device ID

Get the unique device ID which has been created randomly.

{{<note>}}
Monaca framework automatically creates a unique device ID at the first
time app launch.
{{</note>}}

{{<syntax>}}
monaca.getDeviceId(callback)
{{</syntax>}}

*Parameter*

Parameter | Type | Description
----------|------|-----------------
`callback` | Function | A callback function where device ID is the first parameter

*Return Value*

- `None`   

{{<highlight javascript>}}
monaca.getDeviceId(function(id){
   console.log('Device ID: ' + id);
});
{{</highlight>}}

##  monaca.baseUrl - Get absolute URL to www folder.

Get an absolute URL to *www* folder.

{{<syntax>}}
monaca.baseUrl
{{</syntax>}}

*Return Value*

Type | Description
------|-----------------
String | The absolute URL of application

*Example*

{{<highlight javascript>}}
window.onload = function()
{
   alert(monaca.baseUrl);
}
{{</highlight>}}



##  monaca.isAndroid - Check whether the device is Android or not

Check whether the device is an Android device or not.

{{<syntax>}}
monaca.isAndroid
{{</syntax>}}

*Return Value*

| Type | Description
------|-----------------
`boolean` | The device is Android device if the return value is *true*.

*Example*

{{<highlight javascript>}}
if(monaca.isAndroid === true){
  alert("Android!");
}
{{</highlight>}}

##  monaca.isIOS - Check whether the device is iOS or not

Check whether the device is an iOS device or not .

{{<syntax>}}
monaca.isIOS
{{</syntax>}}

*Return Value*

| Type | Description
------|-----------------
`boolean` | The device is iOS device if the return value is *true*.

*Example*

{{<highlight javascript>}}
if(monaca.isIOS === true){
  alert("iOS!");
}
{{</highlight>}}


