---
title: データベースの利用方法
weight: 30
---

HTML5 の Web SQL Database
を使用して、端末のデータベースに接続します。ここでは、Web SQL Database
の使用方法を解説します。

## Web SQL Database

接続を行う前に、Database オブジェクトを新規作成します。ここでは、
*window.openDatabase* を使用して、SQLite データベースを新規作成します。

{{<highlight javascript>}}
var db = window.openDatabase(database_name, database_version, database_displayname, database_size);
{{</highlight>}}

## データベースの作成 ( SQLite )

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

### openDatabase 関数の引数

指定する引数 | 説明 | 設定値 
----------|-------------|---------- 
`database_name`	| データベース名 | 文字列
`database_version` | データベースのバージョン | 文字列
`database_displayname` | データベースの表示名 | 文字列                 
`database_size` | データベースのサイズ ( バイト単位 ）| 整数   

### Database オブジェクトのメソッド

Function        | 説明 　
----------------|-----------------------------------------------------------------------
`transaction` | データベースのトランザクションの処理
`changeVersion` | データベースのバージョンの確認とスキーマのアップデート ( 必要な場合 )

SQL 文を実行するメソッドは、`SQLTransaction` オブジェクトの `executesql`
です。`SQLTransaction` オブジェクトを取得するには、Database オブジェクトの
transaction を実行します。`SQLTransaction` オブジェクトの `executeSql`
の実行時に、コールバック関数が実行され、 `SQLResultSet`
オブジェクトがコールバック関数に渡されます。

### SQLResultSet オブジェクトのプロパティー

Function      | 説明 　
--------------|-----------------------------------------------------------------------
`insertId` | INSERT 文の成功時に、行番号を返します。
`rowsAffected` | SQL の実行により、影響を受けた行を返します。
`rows` | `ResultSetRowList` オブジェクトを返します。SQL 実行時の処理結果です。

## SQL 文の実行 ( SQLite )

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
