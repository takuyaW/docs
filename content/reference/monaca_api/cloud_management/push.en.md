---
title: Push Notification
weight: 40
---

{{<note>}}
For release and ad-hoc builds on Cordova 6.2 platform, please select the release build option when sending push notifications.
{{</note>}}

Below are Monaca Backend Management APIs for Push Notifications.

Method | Description
-------|-----------------------
[Push.send()](#push-send) | Send Push Notification
[Push.status()](#push-status) | Get Push Notification Status

## Push.send()

Send push notification to applications.

{{<highlight javascript>}}
Push.send()
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`pushProjectId` | String | [Push Project ID](#push-project-id)
`platform` | String | User's platform which can be `"android"` or `"ios"`
`target` | String | Type of end user which is `"app"`.
`buildType` | String | Build type of the application which can be `"debug"` , `"release"` or `"adhoc"`.
`title` | String | Title (Android only)
`message` | String | Message to send
`badge` | Number | Badge (iOS only)
`json` | JSON Object | JSON Data
`userOidList` | Array of String | [Optional] Filter target users by their IDs. <ul><li>In Javascript, these IDs are the values of [monaca.cloud.User.oid](../../cloud/user/#user-oid)</li><li>In [Backend Management API](../../cloud_management), there IDs are the values of `"_id"` property of each data from the [User.list()](../user/#user-list) function.</li></ul>
`userQuery` | String | [Optional] Filter target users by a [MonaQL](../../cloud/criteria/#monaca-query-language) query for user properties. For example: `'country == "US" && age = 20'`.
`userQueryBindParams` | Array | [Optional] Replace the placeholders in userQuery by its values. For example: `["US", 20]` when `userQuery` is `'country == ? && age = ?'`.
`deviceIdList` | Array of String | [Optional] Filter target devices by its IDs. <ul><li>In Javascript, these IDs are the return values of [monaca.getDeviceId()](../../utility/#monaca-getdeviceid).</li></ul>


{{<note>}}
Please note that <code>deviceIdList</code>, <code>userOidList</code> and <code>userQuery</code> cannot be used at the same time.
{{</note>}}

**Return Value**

Name | Type | Description
-----|------|----------------
`queueIdList` | Array | A list of push queue id

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

## Push.status()

Get push notification status.

{{<highlight javascript>}}
Push.status(pushProjectId: String, queueId: String)
{{</highlight>}}

**Parameter**

Name | Type | Description
-----|------|----------------
`pushProjectId` | String | [Push Project ID](#push-project-id)
`queueId` | String | Push queue ID (get this id from `queueIdList`)

**Return Value**

Name | Type | Description
-----|------|----------------
`status` | String | Status (`finish`, etc.)
`numTarget` | Number | Number of all recipients
`numPushed` | Number | Number of success recipients
`numFailed` | Number | Number of failed recipients
`createdAt` | TimeUnit | Created time
`pushStartedAt` | TimeUnit | Started time
`pushFinishedAt` | TimeUnit | Finished time (regardless of success or failure)

**Errors Code**

Errors are returned as [Error](../../cloud/error) object.

Code | Description
-----|--------------------------
`-32602` |  Invalid params

##  Push Project ID

Push project ID is an unique identifier for sending push notification to
your app. You can easily find this ID with the following instruction:

1.  Go to `Monaca Backend` by clicking on a `Cloud` icon in Monaca Cloud
    IDE.

2.  Then, click on `Setting` icon and choose {{<guilabel name="Backend Settings">}} (See
    below screenshot)

    {{<img src="/images/reference/monaca_api/cloud_management/backend_setting.png">}}

3.  You will see a *Backend Settings* panel on the right side of the
    screen. Next, click on {{<guilabel name="Push Notification">}}. Scroll down to the bottom
    of this page to see `Push project ID` of the current application.

    {{<img src="/images/reference/monaca_api/cloud_management/push_projectID.png">}}

See Also: 

- [Push Notification API](../../cloud/push)
- [Send Push Notification from Monaca](/en/products_guide/push_notification/overview)
- [Backend Control Panel](/en/products_guide/backend/control_panel)
- [Backend API](../../cloud)
- [Backend Memo](/en/sampleapp/samples/backend_memo)
- [Backend Management API](../../cloud_management)
- [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)


