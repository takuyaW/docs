---
title: Criteria
weight: 50
---

コレクションへの問い合わせ ( クエリー ) には、Criteria
オブジェクトを使用します。

{{<note>}}
    バックエンド API にアクセスする場合には、 <code>jQuery</code> の読み込み、および、ホワイトリストへの <code>cloud.monaca.mobi</code> の登録 ( 各 OS の設定ファイル上に ) を行います。 {{<link href="/ja/reference/config/android_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="Android の場合はこちら">}} または {{<link href="/ja/reference/config/ios_configuration/#lt-access-gt-%E8%A6%81%E7%B4%A0" title="iOS の場合はこちら">}} をご確認ください。
{{</note>}}

メソッド/プロパティー  | 解説
--------------------|-------------------------------------------
[monaca.cloud.Criteria()](#criteria-オブジェクトを作成) |  Criteria オブジェクトを取得します。
[MonaQL](#monaca-クエリー言語) | Monaca クエリー言語

## Criteria オブジェクトを作成

指定した名前の Criteria オブジェクトを取得します。

{{<highlight javascript>}}
monaca.cloud.Criteria(query: String[ bindParams: Array]) : criteriaObject
{{</highlight>}}

**パラメーター**

パラメーター | 型 | 解説 
-----|------|-------------
`query` | 文字列 | クエリー文字列には、 [MonaQL](#monaca-クエリー言語) を使用します。 
`bindParams` | Array of String | バインドする値を指定します。

**戻り値**

- Criteria オブジェクト

**例**

Criteria と [MonaQL](#monaca-クエリー言語) の例を、次に示します。MonaQL では、 `?` は、プレースホルダーです。また、`?` は `bindParams` で置き換えられます。

{{<highlight javascript>}}
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
{{</highlight>}}

## Monaca クエリー言語

MonaQLの演算子と値の型を記します。

### 演算子

演算子 | 解説   
------|------
`==`  | 等しい
`!=`  | 等しくない
`>`   | より大きい
`>=`  | 以上
`<`   | より小さい
`<=`  | 以下
`IN`  | 配列に含まれる
`NIN` | 配列に含まれない
`()`  | 括弧内をまとめる
`!()` | 括弧内をまとめ、真偽を反転させる
`&&`  | 論理積 ( AND )
<code>&#124;&#124;</code>  | 論理和 ( OR )


### 値

値               | 解説           
-----------------|-------------- 
`123`, `-123`    | integer
`1.23, -1.23`    | Double
`\"string\"`     | 文字列 ( ※文字列を囲む場合には、ダブルクォーテーションを使用します。シングルクォーテーションは使えません )
`[1,2,3]`        | 配列
`null`           | Null または プロパティーが存在しない
`true`, `false`  | 真偽値
`?`              | プレースホルダー


