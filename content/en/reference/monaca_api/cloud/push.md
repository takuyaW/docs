Push Notification
=================

The following JavaScript API is used to handle the push notifications.

  Method                                            Description
  ------------------------------------------------- ---------------------------------------------------------
  monaca.cloud.Push.setHandler()&lt;p.Handler&gt;   Set JavaScript handler when receiving push notification

Push.setHandler - Set JavaScript handler when receiving push notification
-------------------------------------------------------------------------

Set push handler which is called when an application receives a push
notification.

> monaca.cloud.Push.setHandler(callback: Function) : void

Parameter

:   ------------ ------------------------------------------------------------------------------------------------------------
      `callback`   Callback function to handle incoming push notification. Additional data will be set at the first argument.
      ------------ ------------------------------------------------------------------------------------------------------------

Return Value

:   -------- --
      `None`   
      -------- --

Example

:   The following code shows a simple function to display the data
    received from the push notification in the console log.

    ``` {.sourceCode .javascript}
    monaca.cloud.Push.setHandler(function(data) {
      console.log(data.item_a);
      console.log(data.item_b);
    });
    ```


