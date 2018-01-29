---
title: 住所録の取得 プラグイン
weight: 30
---

テスト環境 ( バージョン番号 ) : [2.3.1](https://github.com/apache/cordova-plugin-contacts/releases/tag/2.3.1)

{{<note>}}
このプラグインの詳細は、 {{<link title="こちらの原文 ( GitHub )" href="https://github.com/apache/cordova-plugin-contacts">}} をご確認ください。
{{</note>}}

このプラグインでは、グローバルオブジェクト 「 `navigator.contacts` 」
を使用し、端末側の住所録のデータベースにアクセスします。

このオブジェクトは、グローバルスコープ ( `navigator` )
に属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

{{<highlight javascript>}}
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
    console.log(navigator.contacts);
}
{{</highlight>}}

{{<warning>}}
住所録データの取得・利用には、個人情報保護の観点から、細心の注意が必要です。住所録データの取り扱い方法と第三者への情報提供に関しては、個人情報の取り扱いポリシーの策定時に議論されるべき問題です。個人情報の中でも、とりわけ住所録の情報は、交友関係などの個人のプライバシーに深く関わることから、その取り扱いには、特に注意が求められます。そのため、アプリのプライバシーに関するポリシーの策定に加え、アプリが住所録にアクセスまたは利用する場合には、事前にユーザーへの通知および許諾を得る必要があります。端末のオペレーティング
システム側でこの通知および許諾の要求を行ってない場合には、開発者側で改善する必要があります。また、ユーザーへの通知および許諾の要求を行う場合には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法に関する同意の意思表示を求める必要があります
( <b>許可する</b>、または、<b>許可しない</b>
のように、明示的に判断できる必要があります
)。また、住所録へアクセスする前に、ユーザーへの通知および許諾を得ることを配布の条件とする、アプリのマーケットプレースも一部に存在します。住所録データの取り扱いの説明に関しては、ユーザーの不安や困惑を取り除くため、内容を明快に理解できるよう、考慮が求められます。詳細は、 {{<link href="http://cordova.apache.org/docs/ja/6.x/guide/appdev/privacy/index.html" title="プライバシーガイド">}} をご確認ください。
{{</warning>}}

プラグイン ID
-------------

{{<highlight javascript>}}
cordova-plugin-contacts
{{</highlight>}}

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の [ Cordova プラグインの管理 ] 上で、`Contacts` プラグインを [有効]({{<ref "cordova_plugin.ja.md#cordova-プラグイン-の追加とインポート">}}) にします。

後方互換
--------

### iOS 特有の動作

iOS 10以降は、 `info.plist` に `NSContactsUsageDescription`
を追加する必要があります。

`NSContactsUsageDescription`
は、アプリがユーザーの連絡先にアクセスする理由を記述します。
システムがアクセス許可をユーザに求めた際、この文字列がダイアログボックスの一部として表示されます。このエントリを追加するには、プラグインのインストール時に変数
`CONTACTS_USAGE_DESCRIPTION` で追加することができます。

例 :

{{<highlight bash>}}
cordova plugin add cordova-plugin-contacts --variable CONTACTS_USAGE_DESCRIPTION="your usage message"
{{</highlight>}}

変数を渡さない場合は、プラグインは空の文字列を値として追加します。

### Windows 特有の動作

-   **Windows 10 以前：** `find` や `pickContact`
    メソッドから返された連絡先は、すべて読み取り専用になります。そのため、アプリはそれらを変更することはできません。`find`
    メソッドは、Windows Phone 8.1 端末でのみ利用可能です。
-   **Windows 10 以上:** 連絡先は保存され、アプリローカル連絡先の保存場所に保存されます。連絡先は削除することもできます。

API の解説
----------

### navigator.contacts

#### メソッド

-   navigator.contacts.create
-   navigator.contacts.find
-   navigator.contacts.pickContact

#### オブジェクト

-   Contact
-   ContactName
-   ContactField
-   ContactAddress
-   ContactOrganization
-   ContactFindOptions
-   ContactError
-   ContactFieldType

### navigator.contacts.create

`navigator.contacts.create` メソッドは、同期的に処理され、`Contact`
オブジェクトを返します。このメソッドは、連絡先オブジェクトを端末の連絡先データベースに保持しません。保持したい場合は、`Contact.save`
メソッドを呼び出す必要があります。

#### サポート対象のプラットフォーム

-   Android
-   iOS

#### 例

{{<highlight javascript>}}
var myContact = navigator.contacts.create({"displayName": "Test User"});
{{</highlight>}}

### navigator.contacts.find

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

**contactFields** と **contactFindOptions.desiredFields**
の両方でサポートされる値は、ContactFieldType &lt;6.5\_contactfieldtype&gt;
オブジェクトで列挙されます。

#### パラメーター

-   **contactFields**: 検索時に使用する、住所録の検索項目です。 *(
    DOMString\[\])* \[ 必須 \]
-   **contactSuccess**: 成功時のコールバックです。Contact
    オブジェクト群が入れられた配列 ( オブジェクトはデータベースから取得
    ) が渡されます。 \[ 必須 \]
-   **contactError**:
    失敗時のコールバックです。エラー発生時に実行されます。 \[ 任意 \]
-   **contactFindOptions**:
    navigator.contactsで使用する絞り込み検索オプション。 \[任意\]
    。使用するキーを以下に示します。
    -   **filter**: 検索時に使用する文字列です。 *(DOMString)* (
        デフォルトでは `\"\"` )
    -   **multiple**: 複数の navigator.contacts
        を、検索結果として返すようにするための真偽値を設定します。
        *(Boolean)* ( デフォルトでは `false` )
    -   **desiredFields**:
        返ってくる住所録の項目を指定します。指定した場合、結果として返される
        `Contact`
        オブジェクトには、指定された項目の値のみ格納されています。
        *(DOMString\[\])* \[ 任意 \]
    -   **hasPhoneNumber**( Android 専用 ) :
        電話番号が入力されている住所録のみを、検索結果として返します。
        *(Boolean)* ( デフォルトでは `false` )

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows ( Windows Phone 8.1 と Windows 10 )

#### 例

{{<highlight javascript>}}
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
options.hasPhoneNumber = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);
{{</highlight>}}

#### Windows 特有の動作

-   `__contactFields__` は使用できず、無視されます。 `find`
    メソッドを使用すると、常に、名前、メールアドレス、電話番号のいずれかと一致する住所録を検索します。

### navigator.contacts.pickContact

`navigator.contacts.pickContact`
メソッドを使用すると、住所録の一覧が表示され、その中から対象の住所録を選択できます。また、結果として返ってきたオブジェクトは、\**contactSuccess*\*
パラメーターに指定されている `contactSuccess`
コールバック関数に渡されます。

#### パラメーター

-   **contactSuccess**: 成功時のコールバックです。Contact オブジェクトが
    1 つ渡されます。 \[ 必須 \]
-   **contactError**:
    失敗時のコールバックです。エラー発生時に実行されます。 \[ 任意 \]

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
navigator.contacts.pickContact(function(contact){
    console.log('The following contact has been selected:' + JSON.stringify(contact));
},function(err){
    console.log('Error: ' + err);
});
{{</highlight>}}

#### Android 特有の動作

このプラグインは連絡先を選択するための外部アクティビティを起動します。
これがアプリに与える影響については、 [Android Lifecycle Guide](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#lifecycle-guide)
を参照してください。 プラグインがその結果を `resume`
イベントに返す場合、返されたオブジェクトをまず `Contact`
オブジェクトでラップしてから使用する必要があります。 次に例を示します。

{{<highlight javascript>}}
function onResume(resumeEvent) {
    if(resumeEvent.pendingResult) {
        if(resumeEvent.pendingResult.pluginStatus === "OK") {
            var contact = navigator.contacts.create(resumeEvent.pendingResult.result);
            successCallback(contact);
        } else {
            failCallback(resumeEvent.pendingResult.result);
        }
    }
}
{{</highlight>}}

### Contact

`Contact`
オブジェクトは、住所録の情報を処理するときに使用されます。住所録は、作成・保存・削除できます
( 端末側の住所録用のデータベース上
)。また、住所録は、`navigator.contacts.find`
を使用して、データベース上で検索 ( retrieve、個々または一括で取得可 )
できます。

{{<note>}}
ここで紹介している住所録の項目は、一部のプラットフォームでは使用できません。各プラットフォームのサポート状況に関しては、各
*プラットフォーム特有の動作* の記載内容をご確認ください。
{{</note>}}

#### プロパティー

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

#### メソッド

-   **clone**: 呼び出し元 ( コピー元 ) のオブジェクトのディープコピー (
    deep copy ) である、新規の `Contact` オブジェクトを返します。`id`
    プロパティーは `null` に設定されています。
-   **remove**:
    住所録データベースから、対象の住所録を削除します。削除が失敗した場合は、`ContactError`
    オブジェクトを使用して、失敗時のコールバック関数が呼び出されます。
-   **save**: 新しい住所録を、住所録データベースに保存します。同じ
    **id** を持つ住所録が存在する場合には、既存の住所録を更新します。

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### Save 例

{{<highlight javascript>}}
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
{{</highlight>}}

#### Clone 例

{{<highlight javascript>}}
// clone the contact object
var clone = contact.clone();
clone.name.givenName = "John";
console.log("Original contact name = " + contact.name.givenName);
console.log("Cloned contact name = " + clone.name.givenName);
{{</highlight>}}

#### Remove 例

{{<highlight javascript>}}
function onSuccess() {
    alert("Removal Success");
};

function onError(contactError) {
    alert("Error = " + contactError.code);
};

// remove the contact from the device
contact.remove(onSuccess,onError);
{{</highlight>}}

#### 保存した連絡先から電話番号を削除する例

{{<highlight javascript>}}
// Example to create a contact with 3 phone numbers and then remove
// 2 phone numbers. This example is for illustrative purpose only
var myContact = navigator.contacts.create({"displayName": "Test User"});
var phoneNumbers = [];

phoneNumbers[0] = new ContactField('work', '768-555-1234', false);
phoneNumbers[1] = new ContactField('mobile', '999-555-5432', true); // preferred number
phoneNumbers[2] = new ContactField('home', '203-555-7890', false);

myContact.phoneNumbers = phoneNumbers;
myContact.save(function (contact_obj) {
    var contactObjToModify = contact_obj.clone();
    contact_obj.remove(function(){
        var phoneNumbers = [contactObjToModify.phoneNumbers[0]];
        contactObjToModify.phoneNumbers = phoneNumbers;
        contactObjToModify.save(function(c_obj){
            console.log("All Done");
        }, function(error){
            console.log("Not able to save the cloned object: " + error);
        });
    }, function(contactError) {
        console.log("Contact Remove Operation failed: " + contactError);
    });
});
{{</highlight>}}

#### Android 2.X 特有の動作

-   **categories**: Android 2.X
    端末では、このプロパティーは使用できません。 `null` を返します。

#### iOS 特有の動作

-   **displayName**: iOS では使用できません。 `ContactName`
    を指定しない場合、 `null` を返します。指定した場合、連結させた名前 (
    composite name )、\**nickname*\*、`""` のいづれかを返します。
-   **birthday**: JavaScript の `Date`
    オブジェクトとして取り扱う必要があります ( 入力時・取得時の両方 )。
-   **photos**: アプリの tmp ディレクトリーに保存された画像を指す File
    URL を返します。なお、tmp
    ディレクトリーに置かれたコンテンツは、アプリを閉じたときに削除されます。
-   **categories**: 使用できません。 `null` を返します。

#### Windows 特有の動作

-   **photos**: 画像を指す File URL を返します。画像は、アプリの一時的な
    ( temporary ) ディレクトリーに保存されています。
-   **birthdays**: 使用できません。 `null` を返します。
-   **categories**: 使用できません。 `null` を返します。
-   **remove**: このメソッドは使用できません ( 対象 : Windows 10 以降
    )。

### ContactAddress

`ContactAddress` オブジェクトを使用して、住所録中の 「 住所 」
に関連したプロパティー群を格納します。1 つの `Contact`
オブジェクトには、`ContactAddress[]`
の配列を使用して、複数の住所を格納できます。

#### プロパティー

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

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
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
options.multiple = true;
var filter = ["displayName", "addresses"];
navigator.contacts.find(filter, onSuccess, onError, options);
{{</highlight>}}

#### Android 2.X 特有の動作

-   **pref**: Android 2.X 端末では使用できず、`false` を返します。

#### iOS 特有の動作

-   **pref**: iOS 端末では使用できず、`false` を返します。
-   **formatted**: 現在、使用できません。

#### Windows 特有の動作

-   **pref**: 使用できません。

### ContactError

エラーの発生時には、`contactError` コールバック関数から、`ContactError`
オブジェクトが返されます。

#### プロパティー

-   **code**: 次のエラーコードのいずれか

#### 定数

-   `ContactError.UNKNOWN_ERROR` (code 0)
-   `ContactError.INVALID_ARGUMENT_ERROR` (code 1)
-   `ContactError.TIMEOUT_ERROR` (code 2)
-   `ContactError.PENDING_OPERATION_ERROR` (code 3)
-   `ContactError.IO_ERROR` (code 4)
-   `ContactError.NOT_SUPPORTED_ERROR` (code 5)
-   `ContactError.OPERATION_CANCELLED_ERROR` (code 6)
-   `ContactError.PERMISSION_DENIED_ERROR` (code 20)

### ContactField

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

#### プロパティー

-   **type**: 項目のタイプを示した文字列です。例 : *home* ( 自宅用 )
    *(DOMString)*
-   **value**: 項目の値です。例 : *電話番号*、\*メールアドレス\*
    *(DOMString)*
-   **pref**: 最優先にする値を格納する `ContactField` であれば、`true`
    に設定します。 *(boolean)*

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
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
{{</highlight>}}

#### Android 特有の動作

-   **pref**: 使用できません。 `false` を返します。

#### iOS 特有の動作

-   **pref**: 使用できません。 `false` を返します。

#### Windows 特有の動作

-   **pref**: 使用できません。 `false` を返します。

### ContactName

`Contact` オブジェクトが保持する 「 名前 」
に関する、さまざまな情報を格納します。

#### プロパティー

-   **formatted**: フルネームです。 *(DOMString)*
-   **familyName**: 姓です。 *(DOMString)*
-   **givenName**: 名です。 *(DOMString)*
-   **middleName**: ミドルネームです。 *(DOMString)*
-   **honorificPrefix**: 接頭敬称です。例 : *Mr.* 、*Dr.* *(DOMString)*
-   **honorificSuffix**: 接尾敬称です。例 *Esq.* *(DOMString)*

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

#### 例

{{<highlight javascript>}}
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
options.multiple = true;
filter = ["displayName", "name"];
navigator.contacts.find(filter, onSuccess, onError, options);
{{</highlight>}}

#### Android 特有の動作

-   **formatted**:
    部分的に使用できますが、読み取り専用です。`honorificPrefix`、`givenName`、`middleName`、`familyName`、`honorificSuffix`
    を連結して返します。

#### iOS 特有の動作

-   **formatted**: 部分的に使用できます。読み取り専用の iOS の連結名 (
    Composite Name ) を返します。

#### Windows 特有の動作

-   **formatted**: 名前に関するプロパティーは、これだけです。
    `displayName` と `nickname` に相当します。
-   **familyName**: 使用できません。
-   **givenName**: 使用できません。
-   **middleName**: 使用できません。
-   **honorificPrefix**: 使用できません。
-   **honorificSuffix**: 使用できません。

### ContactOrganization

`ContactOrganization`
オブジェクトを使用して、組織に関するプロパティーを格納します。 `Contact`
オブジェクトは、単数または複数の `ContactOrganization`
オブジェクトを配列形式で保持します。

#### プロパティー

-   **pref**: 最優先にする値を格納する `ContactOrganization`
    であれば、`true` に設定します。 *(boolean)*
-   **type**: 項目のタイプを示した文字列です。例 : *home* ( 自宅用 )
    *(DOMString)*
-   **name**: 組織名です。 *(DOMString)*
-   **department**: 所属する部署名です。 *(DOMString)*
-   **title**: 役職名です。 *(DOMString)*

#### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows ( Windows 8.1 と Windows Phone 8.1 端末のみ )

#### 例

{{<highlight javascript>}}
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
options.multiple = true;
filter = ["displayName", "organizations"];
navigator.contacts.find(filter, onSuccess, onError, options);
{{</highlight>}}

#### Android 2.X 特有の動作

-   **pref**: Android 2.X 端末では使用できず、`false` を返します.

#### iOS 特有の動作

-   **pref**: iOS 端末では使用できず、`false` を返します。
-   **type**: iOS 端末では使用できず、`null` を返します。
-   **name**: 部分的に使用できます。最初の組織名は、iOS の
    **kABPersonOrganizationProperty** 項目に格納されます。
-   **department**: 部分的に使用できます。最初の部署名は、iOS の
    **kABPersonDepartmentProperty** 項目に格納されます。
-   **title**: 部分的に使用できます。1 つ目の役職は、iOS の
    **kABPersonJobTitleProperty** 項目に格納されます。

#### Windows 特有の動作

-   **pref**: 使用できません。 `false` を返します。
-   **type**: iOS 端末では使用できず、`null` を返します。

### ContactFieldType

`ContactFieldType` オブジェクトは、「 項目 」 ( fieldType )
の集合体です。 たとえば、複数の `phoneNumbers/電話番号` または
`emails/メールアドレス`
をまとめるときに使用します。また、このオブジェクトは、`contacts.find()`
の使用時、検索対象の項目 ( `contactFields` を参照のこと )
として、または、検索結果として返される項目の指定 (
`contactFindOptions.desiredFields` を参照のこと ) に使用できます。

-   `navigator.contacts.fieldType.addresses`
-   `navigator.contacts.fieldType.birthday`
-   `navigator.contacts.fieldType.categories`
-   `navigator.contacts.fieldType.country`
-   `navigator.contacts.fieldType.department`
-   `navigator.contacts.fieldType.displayName`
-   `navigator.contacts.fieldType.emails`
-   `navigator.contacts.fieldType.familyName`
-   `navigator.contacts.fieldType.formatted`
-   `navigator.contacts.fieldType.givenName`
-   `navigator.contacts.fieldType.honorificPrefix`
-   `navigator.contacts.fieldType.honorificSuffix`
-   `navigator.contacts.fieldType.id`
-   `navigator.contacts.fieldType.ims`
-   `navigator.contacts.fieldType.locality`
-   `navigator.contacts.fieldType.middleName`
-   `navigator.contacts.fieldType.name`
-   `navigator.contacts.fieldType.nickname`
-   `navigator.contacts.fieldType.note`
-   `navigator.contacts.fieldType.organizations`
-   `navigator.contacts.fieldType.phoneNumbers`
-   `navigator.contacts.fieldType.photos`
-   `navigator.contacts.fieldType.postalCode`
-   `navigator.contacts.fieldType.region`
-   `navigator.contacts.fieldType.streetAddress`
-   `navigator.contacts.fieldType.title`
-   `navigator.contacts.fieldType.urls`

