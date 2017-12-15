<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
住所録の取得 プラグイン
=======================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-contacts/blob/master/RELEASENOTES.md#0215-dec-02-2014">0.2.15</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-contacts) をご確認ください。

</div>

このプラグインでは、グローバルオブジェクト 「 `navigator.contacts` 」
を使用し、端末側の住所録のデータベースにアクセスします。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.contacts);
    }

**注意** :
住所録データの取得・利用には、個人情報保護の観点から、細心の注意が必要です。住所録データの取り扱い方法と第三者への情報提供に関しては、個人情報の取り扱いポリシーの策定時に議論されるべき問題です。個人情報の中でも、とりわけ住所録の情報は、交友関係などの個人のプライバシーに深く関わることから、その取り扱いには、特に注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが住所録にアクセスまたは利用する場合には、事前にユーザーへの通知および許諾を得る必要があります。端末のオペレーティング
システム側でこの通知および許諾の要求を行ってない場合には、開発者側で改善する必要があります。また、ユーザーへの通知および許諾の要求を行う場合には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法に関する同意の意思表示を求める必要があります
( **許可する**、または、\**許可しない*\*
のように、明示的に判断できる必要があります
)。また、住所録へアクセスする前に、ユーザーへの通知および許諾を得ることを配布の条件とする、アプリのマーケットプレースも一部に存在します。住所録データの取り扱いの説明に関しては、ユーザーの不安や困惑を取り除くため、内容を明快に理解できるよう、考慮が求められます。詳細は、『
プライバシーに関する注意点 』 ( Apache Cordova のドキュメント )
をご確認ください。

プラグイン ID
-------------

    org.apache.cordova.contacts

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.contacts`
を有効にする必要があります。MonacaでCordovaプラグインを使用する方法につきましては
standard\_plugins を参照してください。

navigator.contacts
------------------

### メソッド

-   navigator.contacts.create
-   navigator.contacts.find
-   navigator.contacts.pickContact

### オブジェクト

-   Contact
-   ContactName
-   ContactField
-   ContactAddress
-   ContactOrganization
-   ContactFindOptions
-   ContactError
-   ContactFieldType

navigator.contacts.create
-------------------------

`navigator.contacts.create`
メソッドは、同期的に処理されます。また、`Contact`
オブジェクトを返します。

このメソッドで作成した Contact
オブジェクトが保持する情報は、そのままでは、端末側の住所録データベースには保存されません。
Contact オブジェクトを端末に保存する場合には、`Contact.save`
メソッドを使用します。

### サポート対象のプラットフォーム

-   Android
-   Firefox OS
-   iOS

### 例

    var myContact = navigator.contacts.create({"displayName": "Test User"});

navigator.contacts.find
-----------------------

`navigator.contacts.find`
メソッドは、非同期的に実行され、住所録データベースへの問い合わせ、および、その結果として、
`Contact`
オブジェクト群を配列に入れ、返します。また、その返ってきたオブジェクトは、\**contactSuccess*\*
パラメーターに指定されている `contactSuccess`
コールバック関数に渡されます。

**contactFields**
パラメーターを使用して、検索時に使用する検索項目を指定します。\**contactFields*\*
のパラメーターに、空の文字列を使用することはできません。また、その場合、結果として、`ContactError.INVALID_ARGUMENT_ERROR`
が返ってきます。 **contactFields** の値に、 `"*"`
を入力した場合、住所録のすべての項目を検索します。

住所録データベースへの問い合わせ時に、\**contactFindOptions.filter*\*
の文字列を使用すれば、結果を絞り込めます。この値を使用した場合、\**contactFields*\*
パラメーター で指定した項目に対して、追加の絞り込み条件 (
大・小文字の区別なし、部分一致 )
が適用されます。指定した項目内で一致する *内容がある*
場合には、その住所録を返します。また、
**contactFindOptions.desiredFields**
パラメーターを使用すれば、返ってくる住所録のプロパティーを指定できます。

### パラメーター

-   **contactFields**: 検索時に使用する、住所録の検索項目です。 *(
    DOMString\[\])* \[ 必須 \]
-   **contactSuccess**: 成功時のコールバックです。Contact
    オブジェクト群が入れられた配列 ( オブジェクトはデータベースから取得
    ) が渡されます。 \[ 必須 \]
-   **contactError**:
    失敗時のコールバックです。エラー発生時に実行されます。 \[ 任意 \]
-   **contactFindOptions**: navigator.contacts
    を絞り込むための検索オプションです。 \[ 任意 \]

    検索オプションは次のとおりです。

    -   **filter**: 検索時に使用する文字列です。 *(DOMString)* (
        デフォルトでは `""` )
    -   **multiple**: 複数の navigator.contacts
        を、検索結果として返すようにするための真偽値を設定します。
        *(Boolean)* ( デフォルトでは `false` )
        -   **desiredFields**:
            返ってくる住所録の項目を指定します。指定した場合、結果として返される
            `Contact`
            オブジェクトには、指定された項目の値のみ格納されています。
            *(DOMString\[\])* \[ 任意 \]

### サポート対象のプラットフォーム

-   Android
-   Firefox OS
-   iOS

### 例

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id];
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);

navigator.contacts.pickContact
------------------------------

`navigator.contacts.pickContact`
メソッドを使用すると、住所録の一覧が表示され、その中から対象の住所録を選択できます。また、結果として返ってきたオブジェクトは、\**contactSuccess*\*
パラメーターに指定されている `contactSuccess`
コールバック関数に渡されます。

### パラメーター

-   **contactSuccess**: 成功時のコールバックです。Contact オブジェクトが
    1 つ渡されます。 \[ 必須 \]
-   **contactError**:
    失敗時のコールバックです。エラー発生時に実行されます。 \[ 任意 \]

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

    navigator.contacts.pickContact(function(contact){
            console.log('The following contact has been selected:' + JSON.stringify(contact));
        },function(err){
            console.log('Error: ' + err);
        });

Contact
-------

`Contact`
オブジェクトは、住所録の情報を処理するときに使用されます。住所録は、作成・保存・削除できます
( 端末側の住所録用のデータベース上
)。また、住所録は、`navigator.contacts.find`
を使用して、データベース上で検索 ( retrieve、個々または一括で取得可 )
できます。

**注意** :
ここで紹介している住所録の項目は、一部のプラットフォームでは使用できません。各プラットフォームのサポート状況に関しては、各
*プラットフォーム特有の動作* の記載内容をご確認ください。

### プロパティー

-   **id**: グローバルな一意の識別子です。 *(DOMString)*
-   **displayName**: Contact の名称です ( 各 Contact に設定
    )。ユーザーに対して表示する場合に使用できます。 *(DOMString)*
-   **name**: 個人の名に関する、すべての要素を格納するオブジェクトです。
    *(ContactName)*
-   **nickname**: 住所録で使用するニックネームです。 *(DOMString)*
-   **phoneNumbers**: 電話番号を格納する配列です。 *(ContactField\[\])*
-   **emails**: メールアドレスを格納する配列です。 *(ContactField\[\])*
-   **addresses**: 住所を格納する配列です。 *(ContactAddress\[\])*
-   **ims**: IM ( インスタント メッセンジャー )
    アドレスを格納する配列です。 *(ContactField\[\])*
-   **organizations**: 所属組織名を格納する配列です。
    *(ContactOrganization\[\])*
-   **birthday**: 誕生日です。 *(Date)*
-   **note**: メモ書きです。 *(DOMString)*
-   **photos**: 写真を格納する配列です。 *(ContactField\[\])*
-   **categories**: ユーザー定義のカテゴリーを格納する配列です。
    *(ContactField\[\])*
-   **urls**: Web ページのリンク先を格納する配列です。
    *(ContactField\[\])*

### メソッド

-   **clone**: 呼び出し元 ( コピー元 ) のオブジェクトのディープコピー (
    deep copy ) である、新規の `Contact` オブジェクトを返します。`id`
    プロパティーは `null` に設定されています。
-   **remove**:
    住所録データベースから、対象の住所録を削除します。削除が失敗した場合は、`ContactError`
    オブジェクトを使用して、失敗時のコールバック関数が呼び出されます。
-   **save**: 新しい住所録を、住所録データベースに保存します。同じ
    **id** を持つ住所録が存在する場合には、既存の住所録を更新します。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### Save 例

    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices

    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;

    // save to device
    contact.save(onSuccess,onError);

### Clone 例

    // clone the contact object
    var clone = contact.clone();
    clone.name.givenName = "John";
    console.log("Original contact name = " + contact.name.givenName);
    console.log("Cloned contact name = " + clone.name.givenName);

### Remove 例

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

    // remove the contact from the device
    contact.remove(onSuccess,onError);

### Android 2.X 特有の動作

-   **categories**: Android 2.X
    端末では、このプロパティーは使用できません。 `null` を返します。

### FirefoxOS 特有の動作

-   **categories**: 部分的に使用できます。 **pref** と **type**
    項目に関しては、 `null` を返します。
-   **ims**: 使用できません。
-   **photos**: 使用できません。

### iOS 特有の動作

-   **displayName**: iOS では使用できません。 `ContactName`
    を指定しない場合、 `null` を返します。指定した場合、連結させた名前 (
    composite name )、\**nickname*\*、`""` のいづれかを返します。
-   **birthday**: JavaScript の `Date`
    オブジェクトとして取り扱う必要があります ( 入力時・取得時の両方 )。
-   **photos**: アプリの tmp ディレクトリーに保存された画像を指す File
    URL を返します。なお、tmp
    ディレクトリーに置かれたコンテンツは、アプリを閉じたときに削除されます。
-   **categories**: 使用できません。 `null` を返します。

ContactAddress
--------------

`ContactAddress` オブジェクトを使用して、住所録中の 「 住所 」
に関連したプロパティー群を格納します。1 つの `Contact`
オブジェクトには、`ContactAddress[]`
の配列を使用して、複数の住所を格納できます。

### プロパティー

-   **pref**: 最優先にする値を格納する `ContactAddress` であれば、`true`
    に設定します。 *(boolean)*
-   **type**: 項目のタイプを示した文字列です。例 : *home* ( 自宅用 )
    *(DOMString)*
-   **formatted**: 表示用の住所です。 *(DOMString)*
-   **streetAddress**: 番地です。 *(DOMString)*
-   **locality**: 市区町村です。 *(DOMString)*
-   **region**: 都道府県です。 *(DOMString)*
-   **postalCode**: 郵便番号です。 *(DOMString)*
-   **country**: 国です *(DOMString)*

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

    // display the address information for all contacts

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 2.X 特有の動作

-   **pref**: Android 2.X 端末では使用できず、`false` を返します。

### FirefoxOS 特有の動作

-   **formatted**: 現在、使用できません。

### iOS 特有の動作

-   **pref**: iOS 端末では使用できず、`false` を返します。
-   **formatted**: 現在、使用できません。

ContactError
------------

エラーの発生時には、`contactError` コールバック関数から、`ContactError`
オブジェクトが返されます。

### プロパティー

-   **code**: 次のエラーコードのいずれか

### 定数

-   `ContactError.UNKNOWN_ERROR` (code 0)
-   `ContactError.INVALID_ARGUMENT_ERROR` (code 1)
-   `ContactError.TIMEOUT_ERROR` (code 2)
-   `ContactError.PENDING_OPERATION_ERROR` (code 3)
-   `ContactError.IO_ERROR` (code 4)
-   `ContactError.NOT_SUPPORTED_ERROR` (code 5)
-   `ContactError.PERMISSION_DENIED_ERROR` (code 20)

ContactField
------------

`ContactField`
オブジェクトは、再利用可能で、汎用的なコンポーネントです。住所録の各項目の値を格納するために使用します。各
`ContactField` オブジェクトには、`value`、`type`、`pref` プロパティーを
1 つずつ格納できます。`ContactField[]`
の配列を使用して、電話番号・メールアドレスのような、複数登録する必要があるプロパティーを格納します。

`ContactField` オブジェクトの **type**
属性に関しては、多くの場合、事前に定義された値はありません。\**type*\*
に設定する値として、たとえば、電話番号に関しては、
*home*、\*work\*、\*mobile\*、 *iPhone*
があります。または、特定のプラットフォームで使用されている住所録データベースがサポートしている、他の値も設定できます。ただし、`Contact`
の **photos** 項目に関しては、\**type*\*
属性を使用して、返される画像の形式を設定します。 **value**
属性に、写真の画像の URL を格納する場合には *url* を、Base64
形式の画像の文字列を格納する場合には *base64* を設定します。

### プロパティー

-   **type**: 項目のタイプを示した文字列です。例 : *home* ( 自宅用 )
    *(DOMString)*
-   **value**: 項目の値です。例 : *電話番号*、\*メールアドレス\*
    *(DOMString)*
-   **pref**: 最優先にする値を格納する `ContactField` であれば、`true`
    に設定します。 *(boolean)*

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

    // create a new contact
    var contact = navigator.contacts.create();

    // store contact phone numbers in ContactField[]
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
    phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
    phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
    contact.phoneNumbers = phoneNumbers;

    // save the contact
    contact.save();

### Android 特有の動作

-   **pref**: 使用できません。 `false` を返します。

### iOS 特有の動作

-   **pref**: 使用できません。 `false` を返します。

ContactName
-----------

C`Contact` オブジェクトが保持する 「 名前 」
に関する、さまざまな情報を格納します。

### プロパティー

-   **formatted**: フルネームです。 *(DOMString)*
-   **familyName**: 姓です。 *(DOMString)*
-   **givenName**: 名です。 *(DOMString)*
-   **middleName**: ミドルネームです。 *(DOMString)*
-   **honorificPrefix**: 接頭敬称です。例 : *Mr.*、\*Dr.\* *(DOMString)*
-   **honorificSuffix**: 接尾敬称です。例 *Esq.* *(DOMString)*

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android 2.X
-   iOS

### 例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 特有の動作

-   **formatted**:
    部分的に使用できますが、読み取り専用です。`honorificPrefix`、`givenName`、`middleName`、`familyName`、`honorificSuffix`
    を連結して返します。

### iOS 特有の動作

-   **formatted**: 部分的に使用できます。読み取り専用の iOS の連結名 (
    Composite Name ) を返します。

ContactOrganization
-------------------

`ContactOrganization`
オブジェクトを使用して、組織に関するプロパティーを格納します。 `Contact`
オブジェクトは、単数または複数の `ContactOrganization`
オブジェクトを配列形式で保持します。

### プロパティー

-   **pref**: 最優先にする値を格納する `ContactOrganization`
    であれば、`true` に設定します。 *(boolean)*
-   **type**: 項目のタイプを示した文字列です。例 : *home* ( 自宅用 )
    *(DOMString)*
-   **name**: 組織名です。 *(DOMString)*
-   **department**: 所属する部署名です。 *(DOMString)*
-   **title**: 役職名です。 *(DOMString)*

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);

### Android 2.X 特有の動作

-   **pref**: Android 2.X 端末では使用できず、`false` を返します.

### iOS 特有の動作

-   **pref**: iOS 端末では使用できず、`false` を返します。
-   **type**: iOS 端末では使用できず、`null` を返します。
-   **name**: 部分的に使用できます。最初の組織名は、iOS の
    **kABPersonOrganizationProperty** 項目に格納されます。
-   **department**: 部分的に使用できます。最初の部署名は、iOS の
    **kABPersonDepartmentProperty** 項目に格納されます。
-   **title**: 部分的に使用できます。1 つ目の役職は、iOS の
    **kABPersonJobTitleProperty** 項目に格納されます。

