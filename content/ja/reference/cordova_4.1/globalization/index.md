<!---
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
表記の国際化対応 プラグイン
===========================

<div>
  <div  style="float: left;" align="left"><b>Plugin Version: </b><a href="https://github.com/apache/cordova-plugin-globalization/blob/master/RELEASENOTES.md#028-jun-05-2014">0.2.8</a></div>   
  <div align="right" style="float: right;"><b>Last Edited:</b> 27th Jan 2015</div>
  <br/>
</div>
<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-globalization)
をご確認ください。

</div>

This plugin obtains information and performs operations specific to the
user's locale, language, and timezone. Note the difference between
locale and language: locale controls how numbers, dates, and times are
displayed for a region, while language determines what language text
appears as, independently of locale settings. Often developers use
locale to set both settings, but there is no reason a user couldn't set
her language to "English" but locale to "French", so that text is
displayed in English but dates, times, etc., are displayed as they are
in France. Unfortunately, most mobile platforms currently do not make a
distinction between these settings.

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

navigator.globalization.getPreferredLanguage
--------------------------------------------

BCP 47 の言語タグ ( ユーザーが使用する言語設定 ) を取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

### 解説

Returns the BCP-47 compliant language identifier tag to the
`successCallback` with a `properties` object as a parameter. That object
should have a `value` property with a `String` value.

If there is an error getting the language, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en-US` language, this should display a
popup dialog with the text `language: en-US`:

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );

### Android 特有の動作

-   Returns the ISO 639-1 two-letter language code, upper case ISO
    3166-1 country code and variant separated by hyphens. 例s: "en",
    "en-US", "US"

### Windows Phone 8 特有の動作

-   Returns the ISO 639-1 two-letter language code and ISO 3166-1
    country code of the regional variant corresponding to the "Language"
    setting, separated by a hyphen.
-   Note that the regional variant is a property of the "Language"
    setting and not determined by the unrelated "Country/Region" setting
    on Windows Phone.

navigator.globalization.getLocaleName
-------------------------------------

Returns the BCP 47 compliant tag for the client's current locale
setting.

    navigator.globalization.getLocaleName(successCallback, errorCallback);

### 解説

Returns the BCP 47 compliant locale identifier string to the
`successCallback` with a `properties` object as a parameter. That object
should have a `value` property with a `String` value. The locale tag
will consist of a two-letter lower case language code, two-letter upper
case country code, and (unspecified) variant code, separated by a
hyphen.

If there is an error getting the locale, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en-US` locale, this displays a popup
dialog with the text `locale: en-US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );

### Android 特有の動作

-   Java does not distinguish between a set "langauge" and set "locale,"
    so this method is essentially the same as
    `navigator.globalizatin.getPreferredLanguage()`.

navigator.globalization.dateToString
------------------------------------

Returns a date formatted as a string according to the client's locale
and timezone.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

### 解説

Returns the formatted date `String` via a `value` property accessible
from the object passed as a parameter to the `successCallback`.

`date` パラメーターは、`Date` 型です。

If there is an error formatting the date, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or `full`.

`options.selector` には、`date`、`time`、`date and time`
のいずれかを設定できます。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

If the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `date: 9/25/2012 4:21PM` using the default
options:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );

navigator.globalization.getCurrencyPattern
------------------------------------------

Returns a pattern string to format and parse currency values according
to the client's user preferences and ISO 4217 currency code.

    navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

### 解説

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object should contain the following properties:

-   **pattern**: The currency pattern to format and parse currency
    values. The patterns follow [Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html). *(String)*
-   **code**: pattern で使用する ISO 4217 の通貨コード *(String)*
-   **fraction**: The number of fractional digits to use when parsing
    and formatting currency. *(Number)*
-   **rounding**: The rounding increment to use when parsing and
    formatting. *(Number)*
-   **decimal**: The decimal symbol to use for parsing and formatting.
    *(String)*
-   **grouping**: The grouping symbol to use for parsing and formatting.
    *(String)*

The inbound `currencyCode` parameter should be a `String` of one of the
ISO 4217 currency codes, for example 'USD'.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale and the selected currency
is United States Dollars, this example displays a popup dialog with text
similar to the results that follow:

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

結果は次のとおりです。

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,

navigator.globalization.getDateNames
------------------------------------

Returns an array of the names of the months or days of the week,
depending on the client's user preferences and calendar.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

### 解説

Returns the array of names to the `successCallback` with a `properties`
object as a parameter. That object contains a `value` property with an
`Array` of `String` values. The array features names starting from
either the first month in the year or the first day of the week,
depending on the option selected.

If there is an error obtaining the names, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'wide', item:'months'}

`options.type` の値には、`narrow` または `wide` を設定できます。

`options.item` の値には、`months` または `days` を設定できます。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this example displays a
series of twelve popup dialogs, one per month, with text similar to
`month: January`:

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );

navigator.globalization.getDatePattern
--------------------------------------

Returns a pattern string to format and parse dates according to the
client's user preferences.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

### 解説

Returns the pattern to the `successCallback`. The object passed in as a
parameter contains the following properties:

-   **pattern**: The date and time pattern to format and parse dates.
    The patterns follow [Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html). *(String)*
-   **timezone**: The abbreviated name of the time zone on the client.
    *(String)*
-   **utc\_offset**: The current difference in seconds between the
    client's time zone and coordinated universal time. *(Number)*
-   **dst\_offset**: The current daylight saving time offset in seconds
    between the client's non-daylight saving's time zone and the
    client's daylight saving's time zone. *(Number)*

If there is an error obtaining the pattern, the `errorCallback` executes
with a `GlobalizationError` object as a parameter. The error's expected
code is `GlobalizationError.PATTERN_ERROR`.

The `options` parameter is optional, and defaults to the following
values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or `full`.
The `options.selector` can be `date`, `time` or `date and time`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this example displays a
popup dialog with text such as `pattern: M/d/yyyy h:mm a`:

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

navigator.globalization.getFirstDayOfWeek
-----------------------------------------

Returns the first day of the week according to the client's user
preferences and calendar.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

### 解説

The days of the week are numbered starting from 1, where 1 is assumed to
be Sunday. Returns the day to the `successCallback` with a `properties`
object as a parameter. That object should have a `value` property with a
`Number` value.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.UNKNOWN_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );

navigator.globalization.getNumberPattern
----------------------------------------

Returns a pattern string to format and parse numbers according to the
client's user preferences.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

### 解説

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object contains the following properties:

-   **pattern**: The number pattern to format and parse numbers. The
    patterns follow [Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html). *(String)*
-   **symbol**: The symbol to use when formatting and parsing, such as a
    percent or currency symbol. *(String)*
-   **fraction**: The number of fractional digits to use when parsing
    and formatting numbers. *(Number)*
-   **rounding**: The rounding increment to use when parsing and
    formatting. *(Number)*
-   **positive**: The symbol to use for positive numbers when parsing
    and formatting. *(String)*
-   **negative**: The symbol to use for negative numbers when parsing
    and formatting. *(String)*
-   **decimal**: The decimal symbol to use for parsing and formatting.
    *(String)*
-   **grouping**: The grouping symbol to use for parsing and formatting.
    *(String)*

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PATTERN_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this should display a
popup dialog with text similar to the results that follow:

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

結果 :

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,

navigator.globalization.isDayLightSavingsTime
---------------------------------------------

Indicates whether daylight savings time is in effect for a given date
using the client's time zone and calendar.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

### 解説

Indicates whether or not daylight savings time is in effect to the
`successCallback` with a `properties` object as a parameter. That object
should have a `dst` property with a `Boolean` value. A `true` value
indicates that daylight savings time is in effect for the given date,
and `false` indicates that it is not.

`date` パラメーターは、`Date` 型です。

If there is an error reading the date, then the `errorCallback`
executes. The error's expected code is
`GlobalizationError.UNKNOWN_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

During the summer, and if the browser is set to a DST-enabled timezone,
this should display a popup dialog with text similar to `dst: true`:

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );

navigator.globalization.numberToString
--------------------------------------

Returns a number formatted as a string according to the client's user
preferences.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

### 解説

Returns the formatted number string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error formatting the number, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.FORMATTING_ERROR`.

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `number: 3.142`:

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

navigator.globalization.stringToDate
------------------------------------

Parses a date formatted as a string, according to the client's user
preferences and calendar using the time zone of the client, and returns
the corresponding date object.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

### 解説

Returns the date to the success callback with a `properties` object as a
parameter. That object should have the following properties:

-   **year**: 西暦 ( 4 桁の数字 ) *(Number)*
-   **month**: 月 ( 0-11 の間 ) *(Number)*
-   **day**: 日 ( 1-31 の間 ) *(Number)*
-   **hour**: 時 ( 0-23 の間 ) *(Number)*
-   **minute**: 分 ( 0-59 の間 ) *(Number)*
-   **second**: 秒 ( 0-59 の間 ) *(Number)*
-   **millisecond**: The milliseconds (from 0-999), not available on all
    platforms. *(Number)*

`dateString` パラメーターは、`文字列` 型です。

The `options` parameter is optional, and defaults to the following
values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or `full`.
The `options.selector` can be `date`, `time` or `date and time`.

If there is an error parsing the date string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PARSING_ERROR`.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this displays a popup
dialog with text similar to `month:8 day:25 year:2012`. Note that the
month integer is one less than the string, as the month integer
represents an array index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );

navigator.globalization.stringToNumber
--------------------------------------

Parses a number formatted as a string according to the client's user
preferences and returns the corresponding number.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

### 解説

Returns the number to the `successCallback` with a `properties` object
as a parameter. That object should have a `value` property with a
`Number` value.

If there is an error parsing the number string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The error's
expected code is `GlobalizationError.PARSING_ERROR`.

The `options` parameter is optional, and defaults to the following
values:

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the browser is set to the `en_US` locale, this should display a
popup dialog with text similar to `number: 1234.56`:

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

GlobalizationError
------------------

Globalization API が出力したエラーの内容を示すオブジェクトです。

### プロパティー

-   **code**: One of the following codes representing the error type
    *(Number)*
-   GlobalizationError.UNKNOWN\_ERROR: 0
-   GlobalizationError.FORMATTING\_ERROR: 1
-   GlobalizationError.PARSING\_ERROR: 2
-   GlobalizationError.PATTERN\_ERROR: 3
-   **message**: A text message that includes the error's explanation
    and/or details *(String)*

### 解説

This object is created and populated by Cordova, and returned to a
callback in the case of an error.

### サポート対象のプラットフォーム

-   Amazon Fire OS
-   Android
-   iOS

### 例

When the following error callback executes, it displays a popup dialog
with the text similar to `code: 3` and `message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
