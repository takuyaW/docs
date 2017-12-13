Criteria
========

コレクションへの問い合わせ ( クエリー ) には、Criteria
オブジェクトを使用します。

<div class="admonition note">

バックエンド API にアクセスする場合には、`jQuery`
の読み込み、および、ホワイトリストへの `cloud.monaca.mobi` の登録 ( 各
OS の設定ファイル上に )
を行います。詳細は、Android の場合はこちら &lt;access\_origin\_android&gt;
または iOS の場合はこちら &lt;access\_origin&gt; をご確認ください。

</div>

  メソッド/プロパティー 解説                  
  ------------------------------------------- -------------------------------------
  monaca.cloud.Criteria()&lt;c.Criteria&gt;   Criteria オブジェクトを取得します。
  MonaQL&lt;MonaQL&gt;                        Monaca クエリー言語

Criteria() - Criteria オブジェクトを作成
----------------------------------------

Criteria オブジェクトを取得します。 with a specific name.

monaca.cloud.Criteria(query: String\[, bindParams: 配列\]) : criteriaObject

パラメーター

:   -------------- ----------------------------------------------------------
      `query`        クエリー文字列には、 MonaQL&lt;MonaQL&gt; を使用します。
      `bindParams`   バインドする値を指定します。
      -------------- ----------------------------------------------------------

戻り値

:   ----------------------------------- --
      Criteria オブジェクトを返します。   
      ----------------------------------- --

例

:   Criteria と MonaQL&lt;MonaQL&gt; の例を、次に示します。MonaQL では、
    `?` は、プレースホルダーです。また、`?` は `bindParams`
    で置き換えられます。

    ``` {.sourceCode .javascript}
    var Criteria0 = monaca.cloud.Criteria('a == 12 && (b == 34 || c == 56)');
    var Critetia1 = monaca.cloud.Criteria(
      'a == 12 && !(b == 34 || c == 56)'
    ); // a == 12 && (b != 34 && c != 56)

    var Critetia2 = monaca.cloud.Criteria(
      'name IN ["John", "Smith"]'
    ); // name == "John" || name == "Smith"
    var Critetia3 = monaca.cloud.Criteria(
      'name NIN ["John", "Smith"]'
    ); // name != "John" && name != "Smith"

    var Criteria4 = monaca.cloud.Criteria(
      'name == ? && age > ?',
      ["John", 20]
    ); // name == "John" && age > 20

    var names = ["John", "Smith"];
    var Criteria5 = monaca.cloud.Criteria(
      'name IN ?',
      [names]
    ); // name == "John" || name == "Smith"
    ```

MonaQL - Monaca クエリー言語
----------------------------

MonaQLの演算子と値の型を記します。

  演算子 解説   
  ------------- --------------------------------------------
  `==`          等しい
  `!=`          等しくない
  `>`           より大きい
  `>=`          より大きい or equal
  `<`           より小さい
  `<=`          より小さい or equal
  `IN`          配列に含まれる
  `NIN`         配列に含まれない
  `()`          括弧内をまとめる
  `!()`         括弧内をまとめる and reverse boolean value
  `&&`          論理積 ( AND )
  `||`          論理和 ( OR )

  値 解説           
  ----------------- ------------------------------------------------------------------------------------------------------------
  `123`, `-123`     integer
  `1.23, -1.23`     Double
  `\"string\"`      文字列 ( ※文字列を囲む場合には、ダブルクォーテーションを使用します。シングルクォーテーションは使えません )
  `[1,2,3]`         配列
  `null`            Null または プロパティーが存在しない
  `true`, `false`   真偽値
  `?`               プレースホルダー


