---
title: Push Notification
---

# Push Notification

The following JavaScript API is used to handle the push notifications.

Method | Description
-------|-------------------
[monaca.cloud.Push.setHandler()](#p-handler) | Set JavaScript handler when receiving push notification


## <a name="p-handler"></a> Push.setHandler - Set JavaScript handler when receiving push notification

Set push handler which is called when an application receives a push
notification.

{{<syntax>}}
monaca.cloud.Push.setHandler(callback: Function) : void
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|------------------
`callback` | Function | Callback function to handle incoming push notification. Additional data will be set at the first argument.

*Return Value*

There is no return value. 

*Example*

The following code shows a simple function to display the data received from the push notification in the console log.

{{<highlight javascript>}}
monaca.cloud.Push.setHandler(function(data) {
  console.log(data.item_a);
  console.log(data.item_b);
});
{{</highlight>}}

See Also: 

- [Send Push Notification using Monaca](/en/backend/manual/push_notification/overview)
- [Push Notification API for Backend Management API](../../cloud_management/push)
- [Backend Control Panel](/en/backend/manual/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/backend/manual/control_panel/#backend-management-api-key)
