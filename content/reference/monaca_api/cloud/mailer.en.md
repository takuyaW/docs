---
title: Mailer
---

Mailer allows to send emails to the users.

Method       |   Description                                   
-------------|------------------------------------
[monaca.cloud.Mailer.sendMail()](#m-sendmail) | Send an email to a recipient

##  Sending an Email to a Recipient

Send an email to a recipient.

{{<syntax>}}
Mailer.sendMail(userOid, templateName, substituteParams , [options]) : $.Promise
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`userOid` | String | The recipient user's oid
`templateName` | String | The template Name
`substituteParams` | JSON Object | The placeholder names parameters used in the template
`options.emailPropertyName` | JSON Object |  The property name to use for the email address (default: `_username`)

*Return Value*

Type | Description
-----|--------------------------
[$.Promise](../other/#promise) object | Use `done()`, `fail()` and `always()` methods to get results.

*Errors Code*

Errors are returned as [Error](../error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params
`-32603` |  Internal error (When the server failed to send mail)
`11`     |  User login is required.

*Example*

The following sample denotes how to send an email using the `template_a` template. In this case, the `name` parameter is replaced by `John` in the message.

{{<highlight javascript>}}
var username = 'John';
monaca.cloud.Mailer.sendMail("userOidA", "template_a", {"name": username})
  .done
  (
    function()
    { /* What to do after sending an email is success. */ }
  );
{{</highlight>}}


See Also: 

- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)
