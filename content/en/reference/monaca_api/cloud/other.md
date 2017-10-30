---
title: Other APIs
---

# Other APIs

Here are some other JavaScript APIs provided by the Monaca Backend.

Method/Property | Description
----------------|-------------------------
[monaca.cloud.setTimeout()](#setTimeout) | Set the timeout duration for *Ajax* request
[$.Promise](#promise) | An object returned from Monaca Backend
[Chaining Promises](#chainingPromise) | Chaining promises together without nesting

## <a name="setTimeout"></a> Timeout Setting

Set the timeout duration for *Ajax* request.

{{<syntax>}}
monaca.cloud.setTimeout(msec: number)
{{</syntax>}}

*Parameter*

Name | Type | Description
-----|------|-------------
`msec` | Number | The duration of the timeout in millisecond. The default value is `30000` (=`30` secconds).

*Return Value*

There is no return value.

*Example*

The following line of code shows how to set the timeout to `5` seconds.

{{<highlight javascript>}}
monaca.cloud.setTimeout(5000);
{{</highlight>}}

## <a name="promise"></a> $.Promise

A `$.Promise` is a jQuery object to `promise` that the callbacks will
be executed when a job has succeeded or failed. In this case, a job
means an operation request (e.g. save or update) to the Backend server. It contains 3 callbacks such as:

Name | Description
-----|-----------------
`done()`   | This callback will be executed on success.
`fail()`   | This callback will be executed on failure. `monaca.cloud.Error` passed to the callback contains error code.
`always()` | This callback will be executed after either success or failure.

*Example*

{{<highlight javascript>}}
var Diary = monaca.cloud.Collection("Diary");
var criteria = monaca.cloud.Criteria('title == "Monaca"');
Diary.find(criteria)
  .done(function(result){
    console.log(result.items[0].body);
  })
  .fail(function(err){
    console.log(err.code);
  });
  .always(function()
  {
    console.log("This message will always appear.");
  }
);
{{</highlight>}}

## <a name="chainingPromise"></a> Chaining Promises Together

There is a `then` method, which is a pair of callbacks, in each
`promise`. If the `promise` is resolved, the first callback is called.
Otherwise, the second callback is called if the `promise` is rejected.

Moreover, you can chain `promises` together without nesting them. In
other words, if a callback for a `promise` returns a new `promise`, then
the first one will not be resolved until the second one is. Therefore,
multiple actions can be done without incurring the pyramid code you
would get with callbacks.

*Example*

{{<highlight javascript>}}
var memo = MC.Collection("memo_collection");
memo.findOneMine(CRITERIA)
.then(function(item) {
  item.title = NEW_TITLE;
  return item.update();
}, function(err){
  console.log('Error: ' + JSON.stringify(err));
  return null; })
.then(function(updatedItem) {
  console.log('Updating is success!' + JSON.stringify(updatedItem));
});
{{</highlight>}}


See Also: 

- [Backend Control Panel](/en/backend/manual/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/backend/manual/control_panel/#backend-management-api-key)