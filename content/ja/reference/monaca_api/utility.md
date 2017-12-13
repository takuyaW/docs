ユーティリティー
================

Monaca で提供している、他の関数を紹介します。

  メソッド/プロパティー 解説                
  ----------------------------------------- -------------------------------------------
  monaca.getDeviceId()&lt;getDeviceId&gt;   一意のデバイス ID を取得します。
  monaca.baseUrl&lt;baseUrl&gt;             www フォルダーへの絶対 URL を取得します。
  monaca.isAndroid&lt;isAndroid&gt;         Android 端末かどうか判別します。
  monaca.isIOS&lt;isIOS&gt;                 iOS 端末かどうか判別します。

monaca.baseUrl - www フォルダーへの絶対 URL を取得します。
----------------------------------------------------------

*www* フォルダーへの絶対 URL を取得します。

monaca.baseUrl

戻り値

:   ------------------- -------------------
      `絶対 URI` アプリ   の絶対 URL です。
      ------------------- -------------------

例

:   ``` {.sourceCode .javascript}
    window.onload = function()
    {
      alert(monaca.baseUrl);
    }
    ```

monaca.getDeviceId() - 一意のデバイス ID を取得します。
-------------------------------------------------------

一意のデバイス ID を取得します。 which has been created randomly.

<div class="admonition note">

Monaca フレームワークでは、アプリの初回起動時に、一意のデバイス ID
を自動的に生成します。

</div>

monaca.getDeviceId(callback)

パラメーター

:   ------------ --------------- ----------------------------------------------
      `callback`   関数 コールバ   ック関数です。第一引数は、デバイス ID です。
      ------------ --------------- ----------------------------------------------

戻り値

:   -------- --
      `なし`   
      -------- --

例 :

> ``` {.sourceCode .javascript}
> monaca.getDeviceId(function(id){
>    console.log('Device ID: ' + id);
> });
> ```

monaca.isAndroid - Android 端末かどうか判別します。
---------------------------------------------------

Android 端末 かどうかを判別します。

monaca.isAndroid

戻り値

:   ----------------- ------------------------------------------
      `boolean` 値 An   droid 端末であれば、 *true* を返します。
      ----------------- ------------------------------------------

例

:   ``` {.sourceCode .javascript}
    if(monaca.isAndroid === true){
      alert("Android!");
    }
    ```

monaca.isIOS - iOS 端末かどうかを判別
-------------------------------------

iOS 端末かどうかを判別します。

monaca.isIOS

戻り値

:   ----------------- --------------------------------------
      `boolean` 値 iO   S 端末であれば、 *true* を返します。
      ----------------- --------------------------------------

例

:   ``` {.sourceCode .javascript}
    if(monaca.isIOS === true){
      alert("iOS!");
    }
    ```


