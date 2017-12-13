バックエンド マネジメント API
=============================

Monaca では、Monaca クラウド IDE
からではなく、開発者側のサーバーからでも、Monaca
バックエンドを管理できます。たとえば、ユーザーの新規作成、コレクションの新規作成、および、サーバーから
Monaca
アプリへのプッシュ通知を行えます。この処理を行うためには、ここで解説する
Monaca バックエンド マネジメント API
群を使用する必要があります。これらの API は、 *JSON-RPC 2.0*
に準拠しています。仕様に関しては、 [JSON-RPC 2.0 の仕様 ( 英語サイト
)](http://www.jsonrpc.org/specification) をご確認ください。

<div class="admonition note">

バックエンド マネジメント API を有効化して使用するためには、バックエンド
マネジメント API キーを、Monaca クラウド IDE 上で、最低限 1
つ、事前準備します。この API
キーは、リクエストのヘッダーで使用します。API キーの生成方法は、
backend\_management\_api\_key をご確認ください。

</div>

この API の使用に関して、注意すべき点を次に記します。

===============================
============================================================================================================================
`JSON-RPC Endpoint` エンドポイント URL は、Monaca クラウド IDE の \[
マネジメント API \] 画面から取得できます。同画面上の *マネジメント API
のエンドポイント URL* 欄をご確認ください ( backend\_management\_api\_key
を参照のこと )。

`JSON-RPC Request` JSON-RPC リクエストの例

> ``` {.sourceCode .javascript}
> {
>    "jsonrpc": "2.0",
>    "method": "CollectionItem.list",
>    "params": {
>      "collectionName": "GameScore",
>      "page": 1,
>      "itemsInPage": 10,
>      "sortProperty": "score",
>      "sortOrder": "desc"
>    },
>      "id": 1
> }
> ```
>
> <div class="admonition note">
>
> 属性 "jsonrpc" は、 "2.0" にします。また、 "id" は、1 にします。
>
> </div>

`JSON-RPC Request Header` `X-Monaca-Backend-Management-API-Key`:
*****\******\*\*

`JSON-RPC Response` `成功時のレスポンス`

> 成功時の JSON-RPC レスポンスの例
>
> ``` {.sourceCode .javascript}
> {
>   "jsonrpc":"2.0",
>   "id":1,
>   "result":{
>     "items":[ {...}, {...}, {...} ],
>     "totalItems":3
>   }
> }
> ```

> `失敗時のレスポンス`
>
> > 失敗時の JSON-RPC レスポンスの例 （ メソッドに不具合がある場合 ）
> >
> > ``` {.sourceCode .javascript}
> > {
> >   "jsonrpc":"2.0",
> >   "id":1,
> >   "error":{
> >     "code":-32601,
> >     "message":"Method not found"
> >   }
> > }
> > ```
> >
> > 失敗時の JSON-RPC レスポンスの例 （ collectionName
> > に間違いがある場合 ）
> >
> > ``` {.sourceCode .javascript}
> > {
> >   "jsonrpc":"2.0",
> >   "id":1,
> >   "error":{
> >     "code":-32602,
> >     "message":"Invalid params",
> >     "data":{
> >       "collectionName":"Collection not found."
> >     }
> >   }
> > }
> > ```

===============================
============================================================================================================================

> maxdepth
>
> :   2
>
> cloud\_management/user cloud\_management/collection
> cloud\_management/collection\_item cloud\_management/push
