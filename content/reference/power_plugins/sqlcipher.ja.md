---
title: SQLCipher アダプター
weight: 40
---

SQLCipher アダプターは、Cordova
プラグインです。データベースの暗号化および暗号化されたデータベースへの問い合わせに使用します。サポート対象のプラットフォームは、Android、iOS、Windows
8.1 以上、Windows iPhone 8.1 以上です。API の取り扱い方法は、HTML5 の
Web SQL API とほぼ変わりません。

{{<note>}}
  このプラグインを使用するためには、対応するプランへの加入が必要となります。詳細は、 {{<link href="https://ja.monaca.io/pricing.html" title="料金プラン">}} をご確認ください。
{{</note>}}

サポート対象のプラットフォーム
------------------------------

-   Cordova 5.2
-   iOS 8 以上
-   Android 4.0 以降

プラグインの追加方法
--------------------

1.  Monaca クラウド IDE のメニューから、
    {{<menu menu1="設定" menu2="Cordova プラグインの管理">}} を選択します。

2.  `SQLCipher Adapter` の {{<guilabel name="有効">}} ボタンをクリックして、プロジェクトにプラグインを追加します。

    {{<img src="/images/reference/power_plugins/sqlcipher/1.png">}}

設定
----

### データベースを開く

存在しないデータベースを開こうとする場合、API
側でデータベースを作成します。

{{<highlight javascript>}}
var db = window.sqlitePlugin.openDatabase({name: "myDatabase.db", [key: "your-password-here"], [location: 1]});
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説
----------|------|----------------
`name` | 文字列 | データベース名です。データベースのファイル名に、拡張子を付記することもできます。
`key` | 文字列 | データベースのパスワードです。
`location` | 文字列 | データベース用に使用するサブディレクトリーを指定します ( iOS のみ )。次の選択肢があります。 <ul><li>`0`: ( デフォルト ) : *Documents* - iTunes 側から認識可、iCloud によるバックアップ可</li><li>`1`: *Library* - iCloud によるバックアップ可、iTunes 側から認識不可</li><li>`2`: *Library/LocalDatabase* - iTunes 側から認識不可、iCloud によるバックアップ不可</li>
</ul>

**例**

次の例では、*PRAGMA* 機能を使用しています。この例では、最初にテーブルを作成して、レコードを 1 件追加します。次に、想定どおりにレコードが追加されているか確認するためのクエリーを発行しています。

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
<b>PRAGMA</b> ステートメントは、必ず、データベースオブジェクトの <code>executeSql()</code>
内 ( <code>db.executeSql()</code> ) で実行します ( transaction 内ではありません )。
{{</note>}}

### データベースの削除

{{<highlight javascript>}}
window.sqlitePlugin.deleteDatabase({name: "myDatabase.db", location: 1}, successCb, errorCb);
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説
----------|------|----------------
`name` | 文字列 | データベース名です。データベースのファイル名に、拡張子を付記することもできます。
`location` | 文字列 | データベース用に使用するサブディレクトリーを指定します ( iOS のみ )。次の選択肢があります。 <ul><li>`0` ( デフォルト ) : *Documents* - iTunes 側から認識可、iCloud によるバックアップ可</li><li>`1` : *Library* - iCloud によるバックアップ可、iTunes 側から認識不可 </li><li>`2` : *Library/LocalDatabase* - iTunes 側から認識不可、iCloud によるバックアップ不可</li></ul>
`successCb` | コールバック | データベースの削除が成功したときのコールバックです。
`errorCb` | コールバック | データベースの削除が失敗したときのコールバックです。

{{<note>}}
  この API は、Windows 8.1 以上/Windows Phone 8.1 以上向けアプリの開発には使用できません。
{{</note>}}
