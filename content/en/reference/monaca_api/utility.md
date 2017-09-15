Utilities
=========

We describe other functions provided by Monaca.

  Method/Property                           Description
  ----------------------------------------- --------------------------------------------
  monaca.getDeviceId()&lt;getDeviceId&gt;   Get the unique device ID
  monaca.baseUrl&lt;baseUrl&gt;             Get absolute URL to www folder.
  monaca.isAndroid&lt;isAndroid&gt;         Check whether the device is Android or not
  monaca.isIOS&lt;isIOS&gt;                 Check the device is iOS or not

monaca.baseUrl - Get absolute URL to www folder.
------------------------------------------------

Get an absolute URL to *www* folder.

monaca.baseUrl

Return Value

:   ---------------- ---------------------------------
      `Absolute URI`   The absolute URL of application
      ---------------- ---------------------------------

Example

:   ``` {.sourceCode .javascript}
    window.onload = function()
    {
      alert(monaca.baseUrl);
    }
    ```

monaca.getDeviceId() - Get the unique device ID
-----------------------------------------------

Get the unique device ID which has been created randomly.

<div class="admonition note">

Monaca framework automatically creates a unique device ID at the first
time app launch.

</div>

monaca.getDeviceId(callback)

Parameter

:   ------------ ---------- ------------------------------------------------------------
      `callback`   Function   A callback function where device ID is the first parameter
      ------------ ---------- ------------------------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Example:

> ``` {.sourceCode .javascript}
> monaca.getDeviceId(function(id){
>    console.log('Device ID: ' + id);
> });
> ```

monaca.isAndroid - Check whether the device is Android or not
-------------------------------------------------------------

Check whether the device is an Android device or not.

monaca.isAndroid

Return Value

:   ----------------- -------------------------------------------------------------
      `boolean` value   The device is Android device if the return value is *true*.
      ----------------- -------------------------------------------------------------

Example

:   ``` {.sourceCode .javascript}
    if(monaca.isAndroid === true){
      alert("Android!");
    }
    ```

monaca.isIOS - Check whether the device is iOS or not
-----------------------------------------------------

Check whether the device is an iOS device or not .

monaca.isIOS

Return Value

:   ----------------- ---------------------------------------------------------
      `boolean` value   The device is iOS device if the return value is *true*.
      ----------------- ---------------------------------------------------------

Example

:   ``` {.sourceCode .javascript}
    if(monaca.isIOS === true){
      alert("iOS!");
    }
    ```


