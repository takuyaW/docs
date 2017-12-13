データベースの利用方法
======================

HTML5 の Web SQL Database
を使用して、端末のデータベースに接続します。ここでは、Web SQL Database
の使用方法を解説します。

Web SQL Database
----------------

接続を行う前に、Database オブジェクトを新規作成します。ここでは、
*window.openDatabase* を使用して、SQLite データベースを新規作成します。

``` {.sourceCode .javascript}
var db = window.openDatabase(database_name, database_version, database_displayname, database_size);
```

### データベースの作成 ( SQLite )

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

#### openDatabase 関数の引数

  指定する引数 説明       設定値                                      
  ----------------------- ------------------------------------------- --
  database\_name          データベース名 文字列                       
  database\_version       データベースのバージョン 文字列             
  database\_displayname   データベースの表示名 文字列                 
  database\_size          データベースのサイズ ( バイト単位 ） 整数   

#### Database オブジェクトのメソッド

  Function        説明 　
  --------------- -----------------------------------------------------------------------
  transaction     データベースのトランザクションの処理
  changeVersion   データベースのバージョンの確認とスキーマのアップデート ( 必要な場合 )

SQL 文を実行するメソッドは、SQLTransaction オブジェクトの *executesql*
です。SQLTransaction オブジェクトを取得するには、Database オブジェクトの
transaction を実行します。SQLTransaction オブジェクトの *executeSql*
の実行時に、コールバック関数が実行され、 *SQLResultSet*
オブジェクトがコールバック関数に渡されます。

#### SQLResultSet オブジェクトのプロパティー

  Function       説明 　
  -------------- -----------------------------------------------------------------------
  insertId       INSERT 文の成功時に、行番号を返します。
  rowsAffected   SQL の実行により、影響を受けた行を返します。
  rows           *ResultSetRowList* オブジェクトを返します。SQL 実行時の処理結果です。

### SQL 文の実行 ( SQLite )
