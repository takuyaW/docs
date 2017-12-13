---
title: Contacts Plugin
---

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-contacts/blob/master/RELEASENOTES.md#0211-jul-2-2014">0.2.11</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>

{{<note>}}
This document is based on the original Cordova docs available at {{<link title="Cordova Docs" href="https://github.com/apache/cordova-plugin-contacts">}}.
{{</note>}}

Provides access to the device contacts database.

**WARNING**: Collection and use of contact data raises important privacy
issues. Your app's privacy policy should discuss how the app uses
contact data and whether it is shared with any other parties. Contact
information is considered sensitive because it reveals the people with
whom a person communicates. Therefore, in addition to the app's privacy
policy, you should strongly consider providing a just-in-time notice
before the app accesses or uses contact data, if the device operating
system doesn't do so already. That notice should provide the same
information noted above, as well as obtaining the user's permission
(e.g., by presenting choices for **OK** and **No Thanks**). Note that
some app marketplaces may require the app to provide a just-in-time
notice and obtain the user's permission before accessing contact data. A
clear and easy-to-understand user experience surrounding the use of
contact data helps avoid user confusion and perceived misuse of contact
data. For more information, please see the Privacy Guide.

Plugin ID
---------

    org.apache.cordova.contacts

Enable Plugin in Monaca
-----------------------

In order to use this plugin, please [enable](/en/products_guide/monaca_ide/dependencies/cordova_plugin/#add-plugins)
`Contacts` plugin in Monaca Cloud IDE.

navigator.contacts
------------------

### Methods

-   navigator.contacts.create
-   navigator.contacts.find

### Objects

-   Contact
-   ContactName
-   ContactField
-   ContactAddress
-   ContactOrganization
-   ContactFindOptions
-   ContactError

navigator.contacts.create
-------------------------

The `navigator.contacts.create` method is synchronous, and returns a new
`Contact` object.

This method does not retain the Contact object in the device contacts
database, for which you need to invoke the `Contact.save` method.

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
var myContact = navigator.contacts.create({"displayName": "Test User"});
```

navigator.contacts.find
-----------------------

The `navigator.contacts.find` method executes asynchronously, querying
the device contacts database and returning an array of `Contact`
objects. The resulting objects are passed to the `contactSuccess`
callback function specified by the **contactSuccess** parameter.

The \**contactFields\** parameter specifies the fields to be used as a
search qualifier, and only those results are passed to the
\**contactSuccess\** callback function. A zero-length
\**contactFields\** parameter is invalid and results in
`ContactError.INVALID_ARGUMENT_ERROR`. A \**contactFields\** value of
`"*"` returns all contact fields.

The **contactFindOptions.filter** string can be used as a search filter
when querying the contacts database. If provided, a case-insensitive,
partial value match is applied to each field specified in the
**contactFields** parameter. If there's a match for *any* of the
specified fields, the contact is returned.

### Parameters

-   \**contactFields\**: Contact fields to use as a search qualifier.
    The resulting `Contact` object only features values for these
    fields. *(DOMString\[\])* \[Required\]
-   **contactSuccess**: Success callback function invoked with the array
    of Contact objects returned from the database. \[Required\]
-   **contactError**: Error callback function, invoked when an error
    occurs. \[Optional\]
-   **contactFindOptions**: Search options to filter navigator.contacts.
    \[Optional\] Keys include:
    -   **filter**: The search string used to find navigator.contacts.
        *(DOMString)* (Default: `""`)
    -   **multiple**: Determines if the find operation returns multiple
        navigator.contacts. *(Boolean)* (Default: `false`)

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
function onSuccess(contacts) {
    alert('Found ' + navigator.contacts.length + ' navigator.contacts.');
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.filter   = "Bob";
options.multiple = true;
var fields       = ["displayName", "name"];
navigator.contacts.find(fields, onSuccess, onError, options);
```

Contact
-------

The `Contact` object represents a user's contact. Contacts can be
created, stored, or removed from the device contacts database. Contacts
can also be retrieved (individually or in bulk) from the database by
invoking the `navigator.contacts.find` method.

**NOTE**: Not all of the contact fields listed above are supported on
every device platform. Please check each platform's *Quirks* section for
details.

### Properties

-   **id**: A globally unique identifier. *(DOMString)*
-   **displayName**: The name of this Contact, suitable for display to
    end users. *(DOMString)*
-   **name**: An object containing all components of a persons name.
    *(ContactName)*
-   **nickname**: A casual name by which to address the contact.
    *(DOMString)*
-   **phoneNumbers**: An array of all the contact's phone numbers.
    *(ContactField\[\])*
-   **emails**: An array of all the contact's email addresses.
    *(ContactField\[\])*
-   **addresses**: An array of all the contact's addresses.
    *(ContactAddress\[\])*
-   **ims**: An array of all the contact's IM addresses.
    *(ContactField\[\])*
-   **organizations**: An array of all the contact's organizations.
    *(ContactOrganization\[\])*
-   **birthday**: The birthday of the contact. *(Date)*
-   **note**: A note about the contact. *(DOMString)*
-   **photos**: An array of the contact's photos. *(ContactField\[\])*
-   **categories**: An array of all the user-defined categories
    associated with the contact. *(ContactField\[\])*
-   **urls**: An array of web pages associated with the contact.
    *(ContactField\[\])*

### Methods

-   **clone**: Returns a new `Contact` object that is a deep copy of the
    calling object, with the `id` property set to `null`.
-   **remove**: Removes the contact from the device contacts database,
    otherwise executes an error callback with a `ContactError` object.
-   **save**: Saves a new contact to the device contacts database, or
    updates an existing contact if a contact with the same **id**
    already exists.

### Supported Platforms

-   Amazon Fire OS
-   Android
-   BlackBerry 10
-   Firefox OS
-   iOS
-   Windows Phone 7 and 8
-   Windows 8

### Save Example

``` {.sourceCode .javascript}
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
```

### Clone Example

``` {.sourceCode .javascript}
// clone the contact object
var clone = contact.clone();
clone.name.givenName = "John";
console.log("Original contact name = " + contact.name.givenName);
console.log("Cloned contact name = " + clone.name.givenName);
```

### Remove Example

``` {.sourceCode .javascript}
function onSuccess() {
    alert("Removal Success");
};

function onError(contactError) {
    alert("Error = " + contactError.code);
};

    // remove the contact from the device
    contact.remove(onSuccess,onError);
```

### Android 2.X Quirks

-   **categories**: Not supported on Android 2.X devices, returning
    `null`.

### iOS Quirks

-   **displayName**: Not supported on iOS, returning `null` unless there
    is no `ContactName` specified, in which case it returns the
    composite name, **nickname** or `""`, respectively.
-   **birthday**: Must be input as a JavaScript `Date` object, the same
    way it is returned.
-   **photos**: Returns a File URL to the image, which is stored in the
    application's temporary directory. Contents of the temporary
    directory are removed when the application exits.
-   **categories**: This property is currently not supported, returning
    `null`.

ContactAddress
--------------

The `ContactAddress` object stores the properties of a single address of
a contact. A `Contact` object may include more than one address in a
`ContactAddress[]` array.

### Properties

-   **pref**: Set to `true` if this `ContactAddress` contains the user's
    preferred value. *(boolean)*
-   **type**: A string indicating what type of field this is, *home* for
    example. *(DOMString)*
-   **formatted**: The full address formatted for display. *(DOMString)*
-   **streetAddress**: The full street address. *(DOMString)*
-   **locality**: The city or locality. *(DOMString)*
-   **region**: The state or region. *(DOMString)*
-   **postalCode**: The zip code or postal code. *(DOMString)*
-   **country**: The country name. *(DOMString)*

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
// display the address information for all contacts

function onSuccess(contacts) {
    for (var i = 0; i < navigator.contacts.length; i++) {
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
```

### Android 2.X Quirks

-   **pref**: Not supported, returning `false` on Android 2.X devices.

### iOS Quirks

-   **pref**: Not supported on iOS devices, returning `false`.
-   **formatted**: Currently not supported.

ContactError
------------

The `ContactError` object is returned to the user through the
`contactError` callback function when an error occurs.

### Properties

-   **code**: One of the predefined error codes listed below.

### Constants

-   `ContactError.UNKNOWN_ERROR`
-   `ContactError.INVALID_ARGUMENT_ERROR`
-   `ContactError.TIMEOUT_ERROR`
-   `ContactError.PENDING_OPERATION_ERROR`
-   `ContactError.IO_ERROR`
-   `ContactError.NOT_SUPPORTED_ERROR`
-   `ContactError.PERMISSION_DENIED_ERROR`

ContactField
------------

The `ContactField` object is a reusable component that represents
contact fields generically. Each `ContactField` object contains a
`value`, `type`, and `pref` property. A `Contact` object stores several
properties in `ContactField[]` arrays, such as phone numbers and email
addresses.

In most instances, there are no pre-determined values for a
`ContactField` object's **type** attribute. For example, a phone number
can specify **type** values of *home*, *work*, *mobile*, *iPhone*, or
any other value that is supported by a particular device platform's
contact database. However, for the `Contact` **photos** field, the
**type** field indicates the format of the returned image: **url** when
the **value** attribute contains a URL to the photo image, or *base64*
when the **value** contains a base64-encoded image string.

### Properties

-   **type**: A string that indicates what type of field this is, *home*
    for example. *(DOMString)*
-   **value**: The value of the field, such as a phone number or email
    address. *(DOMString)*
-   **pref**: Set to `true` if this `ContactField` contains the user's
    preferred value. *(boolean)*

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
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
```

### Android Quirks

-   **pref**: Not supported, returning `false`.

### iOS Quirks

-   **pref**: Not supported, returning `false`.

ContactName
-----------

Contains different kinds of information about a `Contact` object's name.

### Properties

-   **formatted**: The complete name of the contact. *(DOMString)*
-   **familyName**: The contact's family name. *(DOMString)*
-   **givenName**: The contact's given name. *(DOMString)*
-   **middleName**: The contact's middle name. *(DOMString)*
-   **honorificPrefix**: The contact's prefix (example *Mr.* or *Dr.*)
    *(DOMString)*
-   **honorificSuffix**: The contact's suffix (example *Esq.*).
    *(DOMString)*

### Supported Platforms

-   Android 2.X
-   iOS

### Example

``` {.sourceCode .javascript}
function onSuccess(contacts) {
    for (var i = 0; i < navigator.contacts.length; i++) {
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
```

### Android Quirks

-   **formatted**: Partially supported, and read-only. Returns a
    concatenation of `honorificPrefix`, `givenName`, `middleName`,
    `familyName`, and `honorificSuffix`.

### iOS Quirks

-   **formatted**: Partially supported. Returns iOS Composite Name, but
    is read-only.

ContactOrganization
-------------------

The `ContactOrganization` object stores a contact's organization
properties. A `Contact` object stores one or more `ContactOrganization`
objects in an array.

### Properties

-   **pref**: Set to `true` if this `ContactOrganization` contains the
    user's preferred value. *(boolean)*
-   **type**: A string that indicates what type of field this is, *home*
    for example. \_(DOMString)
-   **name**: The name of the organization. *(DOMString)*
-   **department**: The department the contract works for. *(DOMString)*
-   **title**: The contact's title at the organization. *(DOMString)*

### Supported Platforms

-   Android
-   iOS

### Example

``` {.sourceCode .javascript}
function onSuccess(contacts) {
    for (var i = 0; i < navigator.contacts.length; i++) {
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
```

### Android 2.X Quirks

-   **pref**: Not supported by Android 2.X devices, returning `false`.

### iOS Quirks

-   **pref**: Not supported on iOS devices, returning `false`.
-   **type**: Not supported on iOS devices, returning `null`.
-   **name**: Partially supported. The first organization name is stored
    in the iOS **kABPersonOrganizationProperty** field.
-   **department**: Partially supported. The first department name is
    stored in the iOS **kABPersonDepartmentProperty** field.
-   **title**: Partially supported. The first title is stored in the iOS
    **kABPersonJobTitleProperty** field.

