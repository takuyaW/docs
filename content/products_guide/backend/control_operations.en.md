---
title: Backend Operations
weight: 20
aliases: /en/backend/manual/control_operations/
---

Monaca Backend has 4 main operations which can be found at Backend
Control Panel as follows:

- [User Management](#user-management)
- [Collection Management](#collection-management)
- [Mail Template Management](#mail-template-management)
- [Push Notification](/en/products_guide/push_notification/overview)

##  User Management

In Backend Control panel, you can manually manage users data.

### Adding a New User

1.  From Backend Control panel, go to {{<menu menu1="User" menu2="Add user">}}.

    {{<img src="/images/backend/control_operations/4.png">}}

2.  Entering the new user's information such as Username, Password, and
    Properties. Then, click on {{<guilabel name="Add">}} button.

    {{<img src="/images/backend/control_operations/5.png">}}

    {{<note>}}
        Properties must be written using correct JSON notation. If the properties are not written correctly, an error will occur.
    {{</note>}}

3.  Once, you successfully added the new user. The new user record should appear in the `User` tab.

    {{<img src="/images/backend/control_operations/6.png">}}

### Updating a User's Properties

1.  From the `User` tab, select on a user's record you want to edit. Then, the selected user record's dialog will appear.

    {{<img src="/images/backend/control_operations/7.png" width="500">}}

2.  Now you can update the user's properties by using correct JSON
    notation. In this example, the user's age is changed from `27` to `25`
    and a new property (`job`) is added.

    {{<img src="/images/backend/control_operations/8.png" width="500">}}

    {{<note>}}
        The properties can only be added/updated but not deleted. System properties which begin with <code>_</code> (such as <code>_createdAt</code>, <code>_id</code>, ...) cannot be modified, except <code>_username</code>.
    {{</note>}}

### Deleting a User

1.  From the `User` tab, tick the checkbox of user's record(s) you want to delete.
2.  Then, click {{<guilabel name="Delete users">}}.

    {{<img src="/images/backend/control_operations/9.png">}}

{{<warning>}}
    Data cannot be recovered once deleted. Therefore, please be careful when deleting the data.
{{</warning>}}

##  Collection Management


A Collection refers to a group of data. You can manage the appropriate
data used within an application based on permissions you granted to each
user. User permissions you can grant to each user are `create`,
`access`, `edit`, `delete` or `read-only`.

In this section, an example of how to manage a Collection is
illustrated. In this example, `_id`, `name`, `color` and `taste` are
used as fields of the properties. Each row of data (such as: lemon,
yellow, sour) is called `collection item`. A unit comprising of all of
these items is called a `Collection`. To put it as database terminology,
a Collection is a table, and Collection Items are records.

Collection item has several system properties that start with an
underscore (`_`). For example, `_id` is, one of system properties,
unique ID of an item.

| _id | name | color | taste |
|-----|------|-------|-------|
| 00001abc | apple | red | sweet |
| 00002def | orange | orange | sour-sweet |
| 00003ghi | lemon | yellow | sour |

### Creating a New Collection

1.  From Backend Control Panel, click on `Options Menu` icon. Then, choose `New Collection...`.

    {{<img src="/images/backend/control_operations/10.png">}}

2.  Then, New Collection dialog will appear. Fill in necessary
    information for your Collection. Then, click {{<guilabel name="Add">}} button.

    -   `Collection name`: the name of the Collection.
    -   `Collection security`: Check {{<guilabel name="Allow JavaScript API to insert data">}} to allow your application to insert data into this Collection.
    -   `Default permission of new item`: check {{<guilabel name="read">}} and/or {{<guilabel name="write">}} to grant all users the read and/or write permission for the new item.

    {{<img src="/images/backend/control_operations/11.png">}}

### Deleting a Collection

1.  From Backend Control Panel, right-click on the Collection you want
    to delete and choose `Delete this Collection`.

    {{<img src="/images/backend/control_operations/12.png">}}

2.  Click {{<guilabel name="Delete">}} and {{<guilabel name="Yes">}} respectively to confirm the deletion.

### Adding a New Collection Item

1.  From Backend Control Panel, select a Collection you want to add an
    item. Then, click {{<guilabel name="Add an item">}}.

    {{<img src="/images/backend/control_operations/13.png">}}

2.  Entering the new Collection Item's information in JSON format. Then,
    click on {{<guilabel name="Add">}} button.

    {{<img src="/images/backend/control_operations/14.png">}}

    {{<note>}}
        Properties must be written using correct JSON notation. If the properties are not written correctly, an error will occur.
    {{</note>}}

3.  Once, you successfully added the new item. The new item should
    appear in the `Collection` tab.

    {{<img src="/images/backend/control_operations/15.png">}}

#### Show/Hide Columns of Collection Items

As shown in the above screenshot, the Collection items are displayed
with default columns such as `Oid`, `Owner user`, `Created At`, `Updated At` and
`Permission`. You can show/hide other columns as follows:

1.  From the `Collection` tab, go to {{<menu menu1="Detail Menu" menu2="Add a column">}}.

    {{<img src="/images/backend/control_operations/16.png">}}

2.  Then, choose the column you want to show one by one.

    {{<img src="/images/backend/control_operations/17.png">}}

3.  After you add all the columns you want to show, move them to arrange
    the order as you wish.

    {{<img src="/images/backend/control_operations/18.png">}}

4.  When you want to hide a column, click on its dropdown icon and
    choose {{<guilabel name="Hide this column">}}.

    {{<img src="/images/backend/control_operations/19.png">}}

### Updating a Collection Item

1.  From the `Collection` tab, select on an item's record you want to
    edit. Then, the selected item's dialog will appear.
2.  Now you can update this item's properties by using correct JSON
    notation. In this example, the item's name and taste are changed
    from `lemon` to `banana` and from `sour` to `sweet`, respectively.

    {{<img src="/images/backend/control_operations/20.png" width="500">}}

{{<note>}}
    The properties can only be added/updated but not deleted. System properties which begin with <code>_</code> (such as <code>_createdAt</code>, <code>_id</code>, ...) cannot be modified.
{{</note>}}

### Deleting a Collection Item

1.  From the `Collection` tab, tick the checkbox of item's record(s) you
    want to delete.
2.  Then, click {{<guilabel name="Delete items">}}.

    {{<img src="/images/backend/control_operations/21.png">}}

3.  Click {{<guilabel name="Yes">}} to confirm the deletion.

{{<warning>}}
    Data cannot be recovered once deleted. Therefore, please be careful when deleting the data.
{{</warning>}}

### Changing User Permissions of a Collection Item

You can change the permissions for each Collection item for specific
users.

There are two type of users:

1.  Owner refers to the user who create the Collection. Owner will
    always be granted read and write permissions.
2.  Public refers to all users who are not logged in. By default, they
    are not granted the read or write permissions.

In order to change the user's permission for each Collection Item,
please do as follows:

1.  From the `Collection` tab, click on `Permission` icon of an item.

    {{<img src="/images/backend/control_operations/22.png">}}

2.  The Permission dialog will appear. You can change the permissions
    for each Collection item for specific users. If your app has more
    than one user, a list of users will appear in the combo box for you
    to choose from. By ticking the checkbox of {{<guilabel name="read">}} or {{<guilabel name="write">}}, and
    clicking the {{<guilabel name="Add">}} button, these new permission settings will be added
    for the selected user.

    {{<img src="/images/backend/control_operations/23.png" width="500">}}

3.  Click {{<guilabel name="Save">}}.

##  Mail Template Management

You can edit/create the template for emails sent to your app's users.

1.  From Backend Control Panel, select `Mail Template`.
2.  Then, the mail template will apear. You can then edit/add mail
    template.

    {{<img src="/images/backend/control_operations/24.png">}}

3.  Click {{<guilabel name="Apply">}} after you finish editing/creating the template.

{{<note>}}
    Mail templates can only be edited/created from the Monaca Cloud IDE.
{{</note>}}
