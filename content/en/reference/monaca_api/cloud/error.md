Error
=====

Error
-----

It is an error reporting object containing error code and error message.

Monaca.cloud.Error

Properties

:   ----------- -------- -----------------------------------------------------------------------------------------------------------------------------
      `code`      number   Error code
      `message`   string   Error reason(always in English)
      `data`      object   If the error code is `-32602` (Invalid params), this object contains validation error messages for each invalid parameters.
      ----------- -------- -----------------------------------------------------------------------------------------------------------------------------

List of Errors:

:   This is *general* errors found in Monaca. Other errors is explained
    in *each function sections*.

      Code       Type             Message                  Description
      ---------- ---------------- ------------------------ ---------------------------------------------------------------------------------------------------------
      `-32700`   JSON-RPC Spec.   PARSE ERROR              Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text
      `-32603`   JSON-RPC Spec.   INTERNAL ERROR           Internal JSON-RPC error.
      `-32602`   JSON-RPC Spec.   INVALID PARAMS           Invalid method parameter(s).
      `-32601`   JSON-RPC Spec.   METHOD NOT FOUND         The method does not exist / is not available.
      `-32600`   JSON-RPC Spec.   INVALID REQUEST          The JSON sent is not a valid Request object.
      `-13`      Client Program   INVALID\_STATUS\_CODE    Server sent invalid status code
      `-12`      Client Program   INVALID\_RESPONSE        Server sent invalid response
      `-11`      Client Program   CONNECTION\_TIMED\_OUT   Server connection timed out
      `4`        Cloud API        API\_KEY\_INVALID        Cloud API Key or Cloud ID invalid
      `10`       Cloud API        SESSION\_ID\_INVALID     Session id format invalid
      `11`       Cloud API        USER\_LOGIN\_REQUIRED    User login is required
      `12`       Cloud API        DEVICE\_ID\_REQUIRED     Device ID must be specified to use this method. All methods requires a device ID.
      `13`       Cloud API        OPERATION\_INVALID       Invalid operation
      `14`       Cloud API        PERMISSION\_DENIED       Permission denied
      `9999`     Cloud API        CALL\_LIMIT\_EXCEEDED    Monthly API call limit exceeded. (The call limit is applied on the Basic, Personal and Gold plan only.)

<div class="admonition note">

Code number from `10000` will be reserved for User Defined Error(s).

</div>
