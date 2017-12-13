---
title: SQLCipher Adapter
---

SQLCipher Adapter is a Cordova plugin to create and access encrypted
databases on Android, iOS, and Windows Universal (`8.1`) with API similar
to HTML5/Web SQL API.

{{<note>}}
  In order to use this plugin, you are required to subscribe to a valid plan. Please refer to {{<link href="https://monaca.mobi/en/pricing" title="Monaca Subscription Plans">}}.
{{</note>}}

## Supported Platforms

-   Cordova 5.2
-   iOS 8 or later
-   Android 4.0 or later

## Adding the Plugin in Monaca Cloud IDE

1.  From Monaca Cloud IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `SqlCipher` to add it into your
    project.

    {{<img src="/images/reference/power_plugins/sqlcipher/1.png">}}

## Usage

### Opening a Database

If you try to open a database that doesn’t exist, the API will create
it.

{{<syntax>}}
var db = window.sqlitePlugin.openDatabase({name: "myDatabase.db", \[key: "your-password-here"\], \[location: 1\]});
{{</syntax>}}

*Parameter*

Parameter | Type | Description
----------|------|----------------
`name` | String | Your database’s name. The database file name should include the extension, if desired.
`key` | String | Your database’s password.
`location` | String | It is used to select the database subdirectory location (iOS only) with the following choices:<ul><li>`0`: (default) *Documents* -  visible to iTunes and backed up by iCloud.</li><li>`1`: *Library* - backed up by iCloud, NOT visible to iTunes.</li><li>`2`: *Library/LocalDatabase* - NOT visible to iTunes and NOT backed up by iCloud.</li>
</ul>

*Example*

The following code illustrates an example with *PRAGMA* feature. First, a table is created and a single entry is added. Then, a query to count the inserted item to see if it's added as expected.

{{<highlight javascript>}}
// Wait for Cordova to load
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
  var db = window.sqlitePlugin.openDatabase({name: "my.db"});

  db.transaction(function(tx) {
    tx.executeSql('DROP TABLE IF EXISTS test_table');
    tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

    // demonstrate PRAGMA:
    db.executeSql("pragma table_info (test_table);", [], function(res) {
      console.log("PRAGMA res: " + JSON.stringify(res));
    });

    tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
      console.log("insertId: " + res.insertId + " -- probably 1");
      console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

      db.transaction(function(tx) {
        tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
          console.log("res.rows.length: " + res.rows.length + " -- should be 1");
          console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
        });
      });

    }, function(e) {
      console.log("ERROR: " + e.message);
    });
  });
}
{{</highlight>}}
{{<note>}}
<b>PRAGMA</b> statements must be executed in <code>executeSql()</code> on the database object (i.e. <code>db.executeSql()</code>) and *NOT* within a transaction.
{{</note>}}

### Deleting a Database

{{<syntax>}}
window.sqlitePlugin.deleteDatabase({name: "myDatabase.db", location: 1}, successCb, errorCb);
{{</syntax>}}

*Parameter*

Parameter | Type | Description
----------|------|----------------
`name` | String | Your database’s name. The database file name should include the extension, if desired.
`location` | String | It is used to select the database subdirectory location (iOS only) with the following choices:<ul><li>`0`: (default) *Documents* -  visible to iTunes and backed up by iCloud.</li><li>`1`: *Library* - backed up by iCloud, NOT visible to iTunes.</li><li>`2`: *Library/LocalDatabase* - NOT visible to iTunes and NOT backed up by iCloud.</li></ul>
`successCb` | Function | A callback when the database is deleted successfully.
`errorCb` | Function | A callback when the database is failed to be deleted.

{{<note>}}
This API is not implemented for Windows 8.1 or higher and Windows Phone 8.1 or higher.
{{</note>}}

See Also:

- [Third-party Cordova Plugins](../../third_party_phonegap)
- [Core Cordova Plugins](../../cordova_6.5)
