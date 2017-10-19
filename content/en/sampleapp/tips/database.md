---
title: Using Database
---

# Using Database

HTML5 Web SQL Database connects to the device database. This section
describes Web SQL Database usage.

## Web SQL Database

You need to create a new Database object before accessing to it.
`window.openDatabase` function creates a new SQLite database.

{{<highlight javascript>}}
var db = window.openDatabase(database_name, database_version, database_displayname, database_size);
{{</highlight>}}

### Creating a Database (SQLite)

{{<highlight html>}}
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script type="text/javascript" charset="utf-8" src="components/loader.js"></script>
    <script type="text/javascript" charset="utf-8">
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
          var db = window.openDatabase("database", "1.0", "testdatabase", 1000000);
      }
    </script>
  </head>
  <body>
  <pre>Web SQL Database</pre>
  </body>
</html>
{{</highlight>}}

*openDatabase Arguments*

Arguments | Description | Value 
----------|-------------|---------- 
`database_name`	| Database name | String
`database_version` | Database version	| String
`database_displayname` | Database display name | String
`database_size` | Database size (in bytes) | Integer number

*Database Object Methods*

Function	| Description
----------|--------------------
`transaction` | Starts transaction.
`changeVersion` | Checks version and updates schema if necessary.

`executesql` function in `SQLTransaction` object is an actual method to
execute SQL. You need to execute `transaction` function in Database object
to get `SQLTransaction` object. When executing `executeSql` function in
`SQLTransaction` object, the callback function is executed and
`SQLResultSet` object is passed to it.

*SQLResultSet Object Properties*

Property 	| Description
----------|--------------------
`insertId` | Returns row number when INSERT statement is successful.
`rowsAffected` | Returns affected rows after sql execution.
`rows` | Returns `ResultSetRowList` object. It represents the results of the sql execution.

### Executing SQL (SQLite)

{{<highlight html>}}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script type="text/javascript" charset="utf-8" src="components/loader.js"></script>
    <script type="text/javascript" charset="utf-8">

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {

        window.alert("Create a database and display the content");
        
    }

    
    function executeQuery(tx) {
        tx.executeSql('DROP TABLE IF EXISTS TestTable');
        tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (id unique, data)');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (1, "あいうえお")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (2, "かきくけこ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (3, "さしすせそ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (4, "たちつてと")');        
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (5, "なにぬねの")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (6, "はひふへほ")');
        tx.executeSql('INSERT INTO TestTable (id, data) VALUES (7, "まみむめも")');

    }

    function queryDB(tx) {
        tx.executeSql('SELECT * FROM TestTable', [], querySuccess, errorCB);
    }

    function querySuccess(tx, results) {
        var len = results.rows.length;
        window.alert("There are " + len + " rows of records in the database.");
        for (var i=0; i<len; i++){
            document.writeln("row = " + i + " ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).data+"<br/>");
        }        
    }

    //Callback function when the transaction is failed.
    function errorCB(err) {
        console.log("Error occured while executing SQL: "+err.code);
    }

    // Callback function when the transaction is success.
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
        db.transaction(queryDB, errorCB);
    }
   
    function createDB(){
        var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
        db.transaction(executeQuery, errorCB, successCB);
 
    }      

    </script>
  </head>
  <body>
  <h1>Execute the SQL</h1>
  <input type="button" value="Execute SQL transactions" onclick="createDB()">
  </body>
</html>
{{</highlight>}}