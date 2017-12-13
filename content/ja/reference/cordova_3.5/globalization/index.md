表記の国際化対応 プラグイン
===========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-globalization/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 25th Dec 2014</div>
  <br/>
</div>
<div class="admonition note">

このドキュメントは [Adobe
Cordovaのドキュメント](https://github.com/apache/cordova-plugin-globalization/blob/master/doc/ja/index.md)
を翻訳したものになります。

</div>

このプラグインを使用して、ユーザのロケール ( locale ) と タイムゾーン
(timezone
)に基づいた情報の取得、および、それに付随する各種処理を行います。

プラグイン ID
-------------

    org.apache.cordova.globalization

プラグインの追加方法 ( Monaca 上での処理 ) -----------------------

このプラグインを使用するには `org.apache.cordova.globalization`
を有効にする必要があります。
MonacaでCordovaプラグインを使用する方法につきましては standard\_plugins
を参照してください。

オブジェクト
------------

-   GlobalizationError

メソッド
--------

-   navigator.globalization.getPreferredLanguage
-   navigator.globalization.getLocaleName
-   navigator.globalization.dateToString
-   navigator.globalization.stringToDate
-   navigator.globalization.getDatePattern
-   navigator.globalization.getDateNames
-   navigator.globalization.isDayLightSavingsTime
-   navigator.globalization.getFirstDayOfWeek
-   navigator.globalization.numberToString
-   navigator.globalization.stringToNumber
-   navigator.globalization.getNumberPattern
-   navigator.globalization.getCurrencyPattern

navigator.globalization.dateToString
------------------------------------

クライアントのロケールとタイムゾーンに基づき、文字列形式の日付を返します。

``` {.sourceCode .javascript}
navigator.globalization.dateToString(date, successCallback, errorCallback, options);
```

### 解説

`value` プロパティーを使用して、`文字列`
形式の日付を返します。`successCallback`
にパラメーターとして渡されたオブジェクト内に、この `value`
プロパティーが格納されています。

`date` パラメーターは、`Date` 型です。

If there is an error formatting the date, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{formatLength:'short', selector:'date and time'}
```

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。

`options.selector` には、`date`、`time`、`date and time`
のいずれかを設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

If the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `date: 9/25/2012 4:21PM` using the default
options:

``` {.sourceCode .javascript}
navigator.globalization.dateToString(
    new Date(),
    function (date) { alert('date: ' + date.value + '\n'); },
    function () { alert('Error getting dateString\n'); },
    { formatLength: 'short', selector: 'date and time' }
);
```

navigator.globalization.getCurrencyPattern
------------------------------------------

ユーザー側の設定と ISO 4217 通貨コードに基づき、通貨の値のパース処理 (
parse ) と通貨の値のフォーマット処理 ( format ) に使用する、文字列の
pattern ( パターン ) を返します。\[
翻訳者メモ：このプラグインの解説中に記述されている pattern
には、大きく分けて、2 つの意味 ( 「 Unicode Technical Standard \#35 の
Pattern 」 と 「 オブジェクトおよびオブジェクトのプロパティーである
Pattern 」 ) がありますが、翻訳文中では、原文のまま、Pattern
としています。\]

``` {.sourceCode .javascript}
navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
```

### 解説

`properties` オブジェクトをパラメーターとして使用し、`successCallback`
に パターン ( pattern )
を渡します。オブジェクトは、以下のパラメーターを格納しています。

-   **pattern**:
    通貨のパース処理と通貨のフォーマット処理に使用する、通貨に関する
    pattern。 pattern は、[Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html)
    に準拠しています。 *(String)*
-   **code**: pattern で使用する ISO 4217 の通貨コード *(String)*
-   **fraction**: パース処理とフォーマット処理に使用する、小数の桁数
    *(Number)*
-   **rounding**: パース処理とフォーマット処理に使用する、端数処理 (
    切り上げ ) *(Number)*
-   **decimal**: パース処理とフォーマット処理に使用する、小数点の記号
    *(String)*
-   **grouping**: パース処理とフォーマット処理使用する、区切り記号 (
    grouping symbol/separtor ) *(String)*

`currencyCode` パラメーターには、ISO 4217 通貨コードの `文字列`
を使用します ( 例 : 「 USD 」 )。

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING\_ERROR`.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale and the selected currency
is United States Dollars, this example displays a popup dialog with text
similar to the results that follow:

``` {.sourceCode .javascript}
navigator.globalization.getCurrencyPattern(
    'USD',
    function (pattern) {
        alert('pattern: '  + pattern.pattern  + '\n' +
              'code: '     + pattern.code     + '\n' +
              'fraction: ' + pattern.fraction + '\n' +
              'rounding: ' + pattern.rounding + '\n' +
              'decimal: '  + pattern.decimal  + '\n' +
              'grouping: ' + pattern.grouping);
    },
    function () { alert('Error getting pattern\n'); }
);
```

結果は次のとおりです。

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,

navigator.globalization.getDateNames
------------------------------------

クライアント側の設定とカレンダーに基づき、曜日の名 ( 群 ) または月の名 (
群 ) が入った配列を返します。

``` {.sourceCode .javascript}
navigator.globalization.getDateNames(successCallback, errorCallback, options);
```

### 解説

曜日の名 ( 群 ) または月の名 ( 群 ) を入れた配列を格納した `properties`
オブジェクトが、パラメーターとして、`successCallback`
に渡されます。このオブジェクトの `value` プロパティーに、`文字列`
形式の値が入った `配列` が格納されています。この配列には、月名 (
群、その年の最初の月から始まる )、または、曜日名 (
群、週の最初の曜日から始まる )
のいずれかが入っています。どちらが入るかは、オプション設定によります。

If there is an error obtaining the names, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{type:'wide', item:'months'}
```

`options.type` の値には、`narrow` または `wide` を設定できます。

`options.item` の値には、`months` または `days` を設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this example displays a
series of twelve popup dialogs, one per month, with text similar to
`month: January`:

``` {.sourceCode .javascript}
navigator.globalization.getDateNames(
    function (names) {
        for (var i = 0; i < names.value.length; i++) {
            alert('month: ' + names.value[i] + '\n');
        }
    },
    function () { alert('Error getting names\n'); },
    { type: 'wide', item: 'months' }
);
```

navigator.globalization.getDatePattern
--------------------------------------

ユーザー側の設定に基づき、日付のパース処理 ( parse )
と日付のフォーマット処理 ( format ) に使用する、文字列の pattern
を返します。

``` {.sourceCode .javascript}
navigator.globalization.getDatePattern(successCallback, errorCallback, options);
```

### 解説

`successCallback` に pattern
を渡します。次のプロパティーを格納したオブジェクトがパラメーターとして使用されます。

-   **pattern**:
    日付のパース処理とフォーマット処理に使用する、日時に関する
    pattern。pattern は、 [Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html)
    に準拠しています。 *(String)*
-   **timezone**: クライアントのタイムゾーンの略称 *(String)*
-   **utc\_offset**: The current difference in seconds between the
    client's time zone and coordinated universal time. *(Number)*
-   **dst\_offset**: The current daylight saving time offset in seconds
    between the client's non-daylight saving's time zone and the
    client's daylight saving's time zone. *(Number)*

If there is an error obtaining the pattern, the `errorCallback` executes
with a `GlobalizationError` object as a parameter. The error's expected
code is `GlobalizationError.PATTERN\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{formatLength:'short', selector:'date and time'}
```

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。 `options.selector`
には、`date`、`time`、`date and time` のいずれかを設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this example displays a
popup dialog with text such as `pattern: M/d/yyyy h:mm a`:

``` {.sourceCode .javascript}
function checkDatePattern() {
    navigator.globalization.getDatePattern(
        function (date) { alert('pattern: ' + date.pattern + '\n'); },
        function () { alert('Error getting pattern\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
}
```

navigator.globalization.getFirstDayOfWeek
-----------------------------------------

クライアント側の設定とカレンダーに基づき、週の最初の曜日を返します。

``` {.sourceCode .javascript}
navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
```

### 解説

週の曜日には、1 から始まる番号が割り当てられています。1
は、日曜日を指します。`properties`
オブジェクトをパラメーターとして使用し、 `successCallback`
に曜日を渡します。このオブジェクトの `value` プロパティーに、曜日を示す
`番号` が格納されています。

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS
-   Windows Phone 8

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `day: 1`.

``` {.sourceCode .javascript}
navigator.globalization.getFirstDayOfWeek(
    function (day) {alert('day: ' + day.value + '\n');},
    function () {alert('Error getting day\n');}
);
```

クライアントの現在のロケール設定に基づき、文字列形式の識別子を取得します。

``` {.sourceCode .javascript}
navigator.globalization.getLocaleName(successCallback, errorCallback);
```

### 解説

`properties`
オブジェクトをパラメーターとして使用して、文字列形式のロケール識別子 (
locale ID ) を `successCallback` に渡します。このオブジェクトの `value`
プロパティーには、`文字列形式` の値が格納されています。

If there is an error getting the locale, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with the text `locale: en\_US`.

``` {.sourceCode .javascript}
navigator.globalization.getLocaleName(
    function (locale) {alert('locale: ' + locale.value + '\n');},
    function () {alert('Error getting locale\n');}
);
```

navigator.globalization.getNumberPattern
----------------------------------------

ユーザー側の設定に基づき、数値のパース処理 ( parse )
と数値のフォーマット処理 ( format ) に使用する、文字列の pattern (
パターン ) を返します。

``` {.sourceCode .javascript}
navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
```

### 解説

`properties` オブジェクトをパラメーターとして使用し、`successCallback`
に pattern
を渡します。このオブジェクトには、次のプロパティーが格納されてます。

-   **pattern**:
    数値のパース処理と数値のフォーマット処理に使用する、数値に関する
    pattern。 pattern は、[Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html)
    に準拠しています。 *(String)*
-   **symbol**: パース処理とフォーマット処理に使用する、記号 (
    通貨記号、パーセント表示など ) *(String)*
-   **fraction**: パース処理とフォーマット処理に使用する、小数の桁数
    *(Number)*
-   **rounding**: パース処理とフォーマット処理に使用する、端数処理 (
    切り上げ ) *(Number)*
-   **positive**:
    パース処理とフォーマット処理に使用する、正の数に対する記号
    *(String)*
-   **negative**:
    パース処理とフォーマット処理に使用する、負の数に対する記号
    *(String)*
-   **decimal**: パース処理とフォーマット処理に使用する、小数点の記号
    *(String)*
-   **grouping**: パース処理とフォーマット処理使用する、区切り記号 (
    grouping symbol/separtor ) *(String)*

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PATTERN\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{type:'decimal'}
```

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with text similar to the results that follow:

``` {.sourceCode .javascript}
navigator.globalization.getNumberPattern(
    function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                              'symbol: '   + pattern.symbol   + '\n' +
                              'fraction: ' + pattern.fraction + '\n' +
                              'rounding: ' + pattern.rounding + '\n' +
                              'positive: ' + pattern.positive + '\n' +
                              'negative: ' + pattern.negative + '\n' +
                              'decimal: '  + pattern.decimal  + '\n' +
                              'grouping: ' + pattern.grouping);},
    function () {alert('Error getting pattern\n');},
    {type:'decimal'}
);
```

結果 :

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,

navigator.globalization.getPreferredLanguage
--------------------------------------------

クライアントの現在の言語設定に基づき、文字列形式の識別子を取得します。

``` {.sourceCode .javascript}
navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
```

### 解説

`properties`オブジェクトをパラメーターとして使用して、文字列形式の言語識別子
(nlanguage ID ) を `successCallback`
に渡します。このオブジェクトは、`言語識別子` の値を設定した `value`
プロパティーを格納しています。

If there is an error getting the language, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with the text `language: English`:

``` {.sourceCode .javascript}
navigator.globalization.getPreferredLanguage(
    function (language) {alert('language: ' + language.value + '\n');},
    function () {alert('Error getting language\n');}
);
```

navigator.globalization.isDayLightSavingsTime
---------------------------------------------

クライアントのタイムゾーンとカレンダーを使用して、夏時間 ( DST )
が対象の日付に適用されているかを示します。

``` {.sourceCode .javascript}
navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
```

### 解説

夏時間 ( DST ) の適用の有無を示します。`properties`
オブジェクトをパラメーターとして `successCallback`
に渡します。このオブジェクトの `dst` プロパティーには、`真偽値`
が格納されています。値が `true`
の場合、対象の日付に、夏時間が適用されていることを示します。`false`
の場合、夏時間が適用されていないことを示します。

`date` パラメーターは、`Date` 型です。

If there is an error reading the date, then the `errorCallback`
executes. The error's expected code is
`GlobalizationError.UNKNOWN\_ERROR`.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

夏時間が有効なタイムゾーンとして、ブラウザー側を設定した場合、ポップアップダイアログ上に、`dst: true`
形式のテキストが表示されます。

``` {.sourceCode .javascript}
navigator.globalization.isDayLightSavingsTime(
    new Date(),
    function (date) {alert('dst: ' + date.dst + '\n');},
    function () {alert('Error getting names\n');}
);
```

navigator.globalization.numberToString
--------------------------------------

ユーザー側の設定に基づき、文字列形式の数値を返します。

``` {.sourceCode .javascript}
navigator.globalization.numberToString(number, successCallback, errorCallback, options);
```

### 解説

`properties` オブジェクトをパラメーターとして使用し、文字列形式の数値が
`successCallback` に渡されます。このオブジェクトの `value`
プロパティーには、`文字列` の値が格納されています。

If there is an error formatting the number, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{type:'decimal'}
```

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `number: 3.142`:

``` {.sourceCode .javascript}
navigator.globalization.numberToString(
    3.1415926,
    function (number) {alert('number: ' + number.value + '\n');},
    function () {alert('Error getting number\n');},
    {type:'decimal'}
);
```

navigator.globalization.stringToDate
------------------------------------

クライアント側の設定とカレンダー ( クライアントのタイムゾーンを適用 )
に基づき、文字列形式の日付のパース処理 ( parse )
を行います。そして、パース処理の結果 ( 日付情報を持つオブジェクト )
を返します。

``` {.sourceCode .javascript}
navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
```

### 解説

`properties` オブジェクトをパラメーターとして使用し、`successCallback`
に日付情報を渡します。このオブジェクトには、次のプロパティーが格納されています。

-   **year**: 西暦 ( 4 桁の数字 ) *(Number)*
-   **month**: 月 ( 0-11 の間 ) *(Number)*
-   **day**: 日 ( 1-31 の間 ) *(Number)*
-   **hour**: 時 ( 0-23 の間 ) *(Number)*
-   **minute**: 分 ( 0-59 の間 ) *(Number)*
-   **second**: 秒 ( 0-59 の間 ) *(Number)*
-   **millisecond**: ミリ秒 ( 0-999 の間
    )。一部のプラットフォームでのみ有効。 *(Number)*

`dateString` パラメーターは、`文字列` 型です。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{formatLength:'short', selector:'date and time'}
```

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。 `options.selector`
には、`date`、`time`、`date and time` のいずれかを設定できます。

If there is an error parsing the date string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PARSING\_ERROR`.

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `month:8 day:25 year:2012`. Note that the
month integer is one less than the string, as the month integer
represents an array index.

``` {.sourceCode .javascript}
navigator.globalization.stringToDate(
    '9/25/2012',
    function (date) {alert('month:' + date.month +
                           ' day:'  + date.day   +
                           ' year:' + date.year  + '\n');},
    function () {alert('Error getting date\n');},
    {selector: 'date'}
);
```

navigator.globalization.stringToNumber
--------------------------------------

クライアント側の設定に基づき、文字列形式の数値のパース処理 ( parse )
を行います。そして、結果として数値を返します。

``` {.sourceCode .javascript}
navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
```

### 解説

`properties` オブジェクトをパラメーターとして使用し、`successCallback`
に数値を渡します。このオブジェクトの `value`
プロパティーには、結果の数値が格納されています。

If there is an error parsing the number string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PARSING\_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

``` {.sourceCode .javascript}
{type:'decimal'}
```

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

When the browser is set to the `en\_US` locale, this should display a
popup dialog with text similar to `number: 1234.56`:

``` {.sourceCode .javascript}
navigator.globalization.stringToNumber(
    '1234.56',
    function (number) {alert('number: ' + number.value + '\n');},
    function () {alert('Error getting number\n');},
    {type:'decimal'}
);
```

GlobalizationError
------------------

Globalization API が出力したエラーの内容を示すオブジェクトです。

### プロパティー

-   **code**: 次のいづれかとなります。 *(Number)*
-   GlobalizationError.UNKNOWN\_ERROR: 0
-   GlobalizationError.FORMATTING\_ERROR: 1
-   GlobalizationError.PARSING\_ERROR: 2
-   GlobalizationError.PATTERN\_ERROR: 3
-   **message**: エラーの解説または詳細を記したテキストメッセージです。
    *(String)*

### 解説

このオブジェクトの生成は、Cordova
側で行われます。エラー発生時には、コールバック関数に渡されます。

### サポート対象のプラットフォーム

-   Android
-   iOS

### 例

次の errorCallback
が実行された場合、ポップアップダイアログ上に、`code: 3` と
`message: エラー内容` 形式のテキストが表示されます。

``` {.sourceCode .javascript}
function errorCallback(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
};
```
