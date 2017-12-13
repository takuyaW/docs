---
title: Backend Management API
---

Monaca also allows you to manage your Monaca Backend from your server
rather than from Monaca IDE. For example, you may create a new user, a
new collection and send a push notification from your sever to your
Monaca app. In order to do this, you will need to implement Monaca
Backend Management APIs which will be described in this section. These
APIs are based on *JSON-RPC version 2.0*. For information about its
specification, please refer to [JSON-RPC 2.0 Specification](http://www.jsonrpc.org/specification) .

{{<note>}}
In order to enable and use Backend Management API, you will need to have
at least one Backend Management API key from Monaca IDE first. This API
key will be used within a request header. Please refer to {{<link href="/en/products_guide/backend/control_panel/#backend-management-api-key" title="Backend Management API Key">}} on how to generate this API key.
{{</note>}}

Prior to implementing these APIs, you should be aware of the following
specifications:

## JSON-RPC Endpoint

You can get endpoint URL from Backend Management API
Key panel in which it is called *Management API URL* (See [Backend Management API Key](/en/products_guide/backend/control_panel/#backend-management-api-key)).

## JSON-RPC Request

Here is an example of a JSON-RPC request:

{{<highlight json>}}
{
   "jsonrpc": "2.0",
   "method": "CollectionItem.list",
   "params": {
     "collectionName": "GameScore",
     "page": 1,
     "itemsInPage": 10,
     "sortProperty": "score",
     "sortOrder": "desc"
   },
     "id": 1
}
{{</highlight>}}

{{<note>}}
    Please note that top level attribute <code>jsonrpc</code> should be <code>2.0</code> and <code>id</code> should be <code>1</code>.
{{</note>}}


## JSON-RPC Request Header

{{<syntax>}}
`X-Monaca-Backend-Management-API-Key`: *********
{{</syntax>}}

## JSON-RPC Response

*Successful Response*

Here is an example of a successful JSON-RPC response:

{{<highlight json>}}
{
    "jsonrpc":"2.0",
    "id":1,
    "result":{
        "items":[ {...}, {...}, {...} ],
        "totalItems":3
    }
}
{{</highlight>}}

*Failed Response*

Here is an example of a failure JSON-RPC response (if method was wrong):

{{<highlight json>}}
{
    "jsonrpc":"2.0",
    "id":1,
    "error":{
        "code":-32601,
        "message":"Method not found"
    }
}
{{</highlight>}}

An example of a failure JSON-RPC response (if collectionName was wrong):

{{<highlight json>}}
{
    "jsonrpc":"2.0",
    "id":1,
    "error":{
        "code":-32602,
        "message":"Invalid params",
        "data":{
            "collectionName":"Collection not found."
        }
    }
}
{{</highlight>}}

- [User Management](user)
- [Collection Management](collection)
- [Collection Item Management](collection_item)
- [Push Notification](push)
