表記の国際化対応 プラグイン
===========================

テスト環境 ( バージョン番号 ) :
[1.0.3](https://github.com/apache/cordova-plugin-globalization/releases/tag/1.0.3)

<div class="admonition note">

このプラグインの詳細は、[こちらの原文 ( GitHub
)](https://github.com/apache/cordova-plugin-globalization)
をご確認ください。

</div>

このプラグインを使用して、ユーザーのロケール ( locale
)、言語、タイムゾーン ( timezone )
に関連した情報の取得、および、それに付随する各種処理を行います。また、「
ロケール 」 と 「 言語 」
の違いに関して、ここで簡単に説明します。ロケールとは、数値・日付・時間を、国・地域別に表示するためのものです。一方、言語とは、ロケール設定とは切り離され、表示に使用される言語を決定します。多くの場合、開発者は、ロケールを使用して、言語設定とロケール設定の両方を行っていますが、両方の概念は切り離して扱うことを推奨します
( ユーザーが、使用する言語を 「 英語 」 に設定して、ロケールを 「
フランス 」
に設定した場合には、テキストは英語で表示し、日付・時間などはフランスの形式で表示する必要があります
)。ただし、多くのモバイル
プラットフォームでは、言語設定とロケール設定を区別していません。

このプラグインでは、グローバルオブジェクト 「 `navigator.globalization`
」 を使用します。

グローバルスコープに属していますが、使用できるのは、`deviceready`
イベントの発火後になります。

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.globalization);
    }

プラグイン ID
-------------

    cordova-plugin-globalization

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

このプラグインを使用する場合には、Monaca クラウド IDE の \[ Cordova
プラグインの管理 \] 上で、`Globalization` プラグインを
有効 &lt;add\_plugins&gt; にします。

API の解説
----------

### オブジェクト

-   GlobalizationError

### メソッド

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

#### navigator.globalization.getPreferredLanguage

BCP 47 の言語タグ ( ユーザーが使用する言語設定 ) を取得します。

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);

##### 解説

BCP-47 に準拠した言語識別用のタグが、`successCallback`
に渡されます。そのとき、`properties` オブジェクトを引数として使用します
\[ 翻訳者メモ : properties
オブジェクトとは、オブジェクトの名称ではなく、各種プロパティーを格納したオブジェクトを指します。ここでは、原文
「 a properties object 」
に従い、あたかも名称のように扱っています。また、単語 「 タグ 」
の意味に関しては、BCP-47
をご確認ください\]。また、このオブジェクトは、`value`
プロパティーを持ち、その値の形式は `文字列` です。

言語情報の取得時にエラーが生じた場合には、`GlobalizationError`
オブジェクトを引数として使用し、 `errorCallback`
が実行されます。エラーコードは、`GlobalizationError.UNKNOWN_ERROR`
になります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーの言語設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`language: en-US`
と表示されます。

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );

##### Android 特有の動作

-   ISO 639-1 の言語コード ( 2 文字 )、ISO 3166-1 の国名コード ( 大文字
    )、バリアント ( variant、ハイフン区切り ) を返します ( 例 ： 「 en
    」、「 US 」、「 en-US 」 )。

##### Windows 特有の動作

-   「 言語 」 の設定に基づき、ISO 639-1 の言語コード ( 2 文字 ) と ISO
    3166-1 の国名コード ( ここでは、ISO 3166-1 alpha-2 ) を、
    ハイフンで区切った形式で返します。

#### navigator.globalization.getLocaleName

BCP 47 準拠のタグ ( ユーザーが使用するロケール設定 ) を取得します。

    navigator.globalization.getLocaleName(successCallback, errorCallback);

##### 解説

ロケール識別用の文字列 ( BCP-47 に準拠 ) が、`successCallback`
に渡されます。そのとき、`properties`
オブジェクトを引数として使用します。このオブジェクトの `value`
プロパティーには、ロケール情報が格納されています ( プロパティーの値は
`文字列` )。ロケール情報は、言語コード ( 2 文字、小文字 )、国コード ( 2
文字、大文字 )、バリアントコード ( 未指定 )
から構成され、ハイフンで区切られています ( 原文では、「 1
つのハイフンで区切られている 」 と記述されています )。

ロケール情報の取得時にエラーが生じた場合には、`GlobalizationError`
オブジェクトを引数として使用し、 `errorCallback`
が実行されます。エラーコードは、`GlobalizationError.UNKNOWN_ERROR`
になります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`locale: en-US`
と表示されます。

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );

##### Android 特有の動作

-   Java では、「 言語 」 と 「 ロケール 」
    の区別をしないため、このメソッドは、`navigator.globalizatin.getPreferredLanguage()`
    に相当します。

##### Windows 特有の動作

-   Windows では、コントロールパネル -&gt; 時計、言語、および地域 -&gt;
    地域 -&gt; 形式 -&gt; 形式 (F)、および、Windows Phone 8.1 では、設定
    -&gt; 地域 -&gt; Regional Format -&gt;
    から、ロケール設定を変更できます。

#### navigator.globalization.dateToString

クライアントのロケールとタイムゾーンに基づき、文字列形式の日付を返します。

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);

##### 解説

`value` プロパティーを使用して、`文字列`
形式の日付を返します。`successCallback`
にパラメーターとして渡されたオブジェクト内に、この `value`
プロパティーが格納されています。

`date` パラメーターは、`Date` 型です。

日付のフォーマット時 ( date パラメーターを文字列に変換するとき )
にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.FORMATTING_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。

`options.selector` には、`date`、`time`、`date and time`
のいずれかを設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`date: 9/25/2012 4:21PM`
と表示されます ( options
にはデフォルト値を使用しています。なお、実際に表示される時間は、前述のものとは異なります
)。

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );

##### Android 特有の動作

-   `formatLength` オプションは、Unicode の [UTS
    \#35](http://unicode.org/reports/tr35/tr35-4.html)
    のサブセットです。デフォルトの `short`
    は、`設定 -> システム -> 日付と時刻 -> 日付設定`
    で、ユーザーが選択している日付の形式に影響を受けます。また、このデフォルト設定では、`年`
    は、2 桁ではなく、4
    桁で表示されます。よって、[ICU](http://demo.icu-project.org/icu-bin/locexp?d_=en_US&_=en_US)
    の仕様とは、若干異なります。

##### Windows 特有の動作

-   `formatLength` オプションには、`short` と `full`
    の値のみ、設定できます。
-   selector に `date and time` を設定すると、「 完全な日付の形式 ( full
    datetime format ) 」 ( ICU の表を参照のこと ) になります。
-   ユーザーのロケールにもよりますが、戻り値は、ICU
    の仕様とは、若干異なります。

#### navigator.globalization.getCurrencyPattern

ユーザー側の設定と ISO 4217 通貨コードに基づき、通貨の値のパース処理 (
parse ) と通貨の値のフォーマット処理 ( format ) に使用する、文字列の
pattern ( パターン ) を返します。\[
翻訳者メモ：このプラグインの解説中に記述されている pattern
には、大きく分けて、2 つの意味 ( 「 Unicode Technical Standard \#35 の
Pattern 」 と 「 オブジェクトおよびオブジェクトのプロパティーである
Pattern 」 ) がありますが、翻訳文中では、原文のまま、Pattern
としています。\]

    navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

##### 解説

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

pattern の取得時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.FORMATTING_ERROR`
となります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定を `en-US` に、通貨の設定を US ドル
にした場合、次の記述をしたときには、ポップアップダイアログ上に、下記の結果が表示されます。

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

##### Windows 特有の動作

-   `code` と `fraction` プロパティーのみ使用できます。

#### navigator.globalization.getDateNames

クライアント側の設定とカレンダーに基づき、曜日の名 ( 群 ) または月の名 (
群 ) が入った配列を返します。

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

##### 解説

曜日の名 ( 群 ) または月の名 ( 群 ) を入れた配列を格納した `properties`
オブジェクトが、パラメーターとして、`successCallback`
に渡されます。このオブジェクトの `value` プロパティーに、`文字列`
形式の値が入った `配列` が格納されています。この配列には、月名 (
群、その年の最初の月から始まる )、または、曜日名 (
群、週の最初の曜日から始まる )
のいずれかが入っています。どちらが入るかは、オプション設定によります。

月名または曜日名の取得時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.UNKNOWN_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'wide', item:'months'}

`options.type` の値には、`narrow` または `wide` を設定できます。

`options.item` の値には、`months` または `days` を設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定を `en-US`
にした場合、ポップアップダイアログ上に、`month: January`
形式のテキストが表示されます ( 月毎に 1 つ表示され、計 12 個を表示 ) 。

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );

##### Windows 特有の動作

-   月の配列の場合には、12 個の要素が格納されています。
-   ユーザーのロケールにもよりますが、戻り値 ( 配列 ) は、ICU
    の仕様とは、若干異なる場合もあります。

#### navigator.globalization.getDatePattern

ユーザー側の設定に基づき、日付のパース処理 ( parse )
と日付のフォーマット処理 ( format ) に使用する、文字列の pattern
を返します。

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

##### 解説

`successCallback` に pattern
を渡します。次のプロパティーを格納したオブジェクトがパラメーターとして使用されます。

-   **pattern**:
    日付のパース処理とフォーマット処理に使用する、日時に関する
    pattern。pattern は、 [Unicode Technical Standard
    \#35](http://unicode.org/reports/tr35/tr35-4.html)
    に準拠しています。 *(String)*
-   **timezone**: クライアントのタイムゾーンの略称 *(String)*
-   **utc\_offset**: クライアントのタイムゾーンと協定世界時 ( UTC )
    間のオフセット ( 秒単位 ) *(Number)*
-   **dst\_offset**: クライアントのタイムゾーンにおいて、夏時間 ( DST )
    を適用および不適用している場合のオフセット ( 秒単位 ) *(Number)*

pattern の取得時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.PATTERN_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {formatLength:'short', selector:'date and time'}

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。 `options.selector`
には、`date`、`time`、`date and time` のいずれかを設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`pattern: M/d/yyyy h:mm a`
と表示されます。

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

##### Windows 特有の動作

-   `formatLength` には、`short` と `full` の値のみ、設定できます。
-   `date and time` の場合、`pattern` ( パターン ) には 「
    完全なの日付の形式 ( full datetime format ) 」 ( ICU
    の表を参照のこと ) が入ります。
-   `timezone` には、タイムゾーンの名称が入ります。
-   `dst_offset` プロパティーは使用できません。常に、0 を返します。
-   ユーザーのロケールにもよりますが、pattern は、ICU
    の仕様とは、若干異なります。

#### navigator.globalization.getFirstDayOfWeek

クライアント側の設定とカレンダーに基づき、週の最初の曜日を返します。

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

##### 解説

週の曜日には、1 から始まる番号が割り当てられています。1
は、日曜日を指します。`properties`
オブジェクトをパラメーターとして使用し、 `successCallback`
に曜日を渡します。このオブジェクトの `value` プロパティーに、曜日を示す
`番号` が格納されています。

pattern の取得時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.UNKNOWN_ERROR`
となります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`day: 1` (
数値は異なる場合があり ) と表示されます。

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );

##### Windows 特有の動作

-   Windows 8.0/8.1
    では、ユーザーのカレンダー設定により、取得する値は異なります。Windows
    Phone 8.1 では、現在のロケール設定により、値は異なります。

#### navigator.globalization.getNumberPattern

ユーザー側の設定に基づき、数値のパース処理 ( parse )
と数値のフォーマット処理 ( format ) に使用する、文字列の pattern (
パターン ) を返します。

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

##### 解説

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

pattern の取得時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.PATTERN_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、下記の結果が表示されます。

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

##### Windows 特有の動作

-   `pattern` プロパティーは使用できません。空の文字列を返します。

#### navigator.globalization.isDayLightSavingsTime

クライアントのタイムゾーンとカレンダーを使用して、夏時間 ( DST )
が対象の日付に適用されているかを示します。

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);

##### 解説

夏時間 ( DST ) の適用の有無を示します。`properties`
オブジェクトをパラメーターとして `successCallback`
に渡します。このオブジェクトの `dst` プロパティーには、`真偽値`
が格納されています。値が `true`
の場合、対象の日付に、夏時間が適用されていることを示します。`false`
の場合、夏時間が適用されていないことを示します。

`date` パラメーターは、`Date` 型です。

日付の読み込み時にエラーが発生した場合、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.UNKNOWN_ERROR`
となります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

夏時間が有効なタイムゾーンとして、ブラウザー側を設定した場合、ポップアップダイアログ上に、`dst: true`
形式のテキストが表示されます。

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );

#### navigator.globalization.numberToString

ユーザー側の設定に基づき、文字列形式の数値を返します。

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

##### 解説

`properties` オブジェクトをパラメーターとして使用し、文字列形式の数値が
`successCallback` に渡されます。このオブジェクトの `value`
プロパティーには、`文字列` の値が格納されています。

数値のフォーマット時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.FORMATTING_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`number: 3.142`
と表示されます。

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

##### Windows 特有の動作

-   Windows 8.0
    では、数値の端数処理を行いません。よって、値は、自動では、切り上げされません。
-   type を `percent` に設定した場合、Windows 8.1 と Windows Phone 8.1
    における端数は切り捨てられます。よって、端数の桁 ( fractional digits
    count ) は、0 に設定されます。
-   パーセントの数値 ( type が `percent` )
    は、区切り記号で区切れません。区切りを入れてしまうと、stringToNumber
    を使用したパース処理ができません。

#### navigator.globalization.stringToDate

クライアント側の設定とカレンダー ( クライアントのタイムゾーンを適用 )
に基づき、文字列形式の日付のパース処理 ( parse )
を行います。そして、パース処理の結果 ( 日付情報を持つオブジェクト )
を返します。

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

##### 解説

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

    {formatLength:'short', selector:'date and time'}

`options.formatLength` には、`short`、`medium`、`long`、`full`
のいずれかを設定できます。 `options.selector`
には、`date`、`time`、`date and time` のいずれかを設定できます。

文字列としてフォーマットされている日付のパース処理時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.PARSING_ERROR`
となります。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケールを `en_US`
に設定した場合、ポップアップダイアログ上に、`month:8 day:25 year:2012`
形式のテキストが表示されます。月を示す整数は、配列のインデックスを指すため、実際の文字列の数より、「
1 」 だけ少ない数となります。

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );

##### Windows 特有の動作

-   `formatLength` オプションには、`short` と `full`
    の値のみ、設定できます。
-   selector に `date and time` を設定すると、「 完全な日付の形式 ( full
    datetime format ) 」 ( ICU の表を参照のこと ) になります。
-   getDatePattern が返す pattern と `dateString`
    パラメーターの内容は適合する必要があります。ユーザーのロケールにもよりますが、この返される
    pattern は、ICU の仕様とは、若干異なります。

#### navigator.globalization.stringToNumber

クライアント側の設定に基づき、文字列形式の数値のパース処理 ( parse )
を行います。そして、結果として数値を返します。

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);

##### 解説

`properties` オブジェクトをパラメーターとして使用し、`successCallback`
に数値を渡します。このオブジェクトの `value`
プロパティーには、結果の数値が格納されています。

文字列としてフォーマットされている数値のパース処理時にエラーが発生した場合、`GlobalizationError`
オブジェクトをパラメーターとして使用し、`errorCallback`
が実行されます。このときに使用されるエラーコードは、`GlobalizationError.PARSING_ERROR`
となります。

`options` のパラメーター設定は任意です。デフォルト値を、次に示します。

    {type:'decimal'}

`options.type` の値には、`decimal`、`percent`、`currency`
を設定できます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

ブラウザーのロケール設定が `en-US`
の場合、次の記述をすれば、ポップアップダイアログ上に、`number: 1234.56`
形式のテキストが表示されます。

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

##### Windows 特有の動作

-   パラメーターとして使用する文字列は、ロケールの形式に適合する必要があります。たとえば、type
    が `percent` に設定され、加えて、ロケールが `en-US`
    の場合、パーセント記号と数の間には、スペースが挿入されています。
-   パーセント値 ( type が `percent` )
    には、桁区切り記号を使用しません。使用した場合、パース処理が正しくできません。

#### GlobalizationError

Globalization API が出力したエラーの内容を示すオブジェクトです。

##### プロパティー

-   **code**: 次のいづれかとなります。 *(Number)*

> -   GlobalizationError.UNKNOWN\_ERROR: 0
> -   GlobalizationError.FORMATTING\_ERROR: 1
> -   GlobalizationError.PARSING\_ERROR: 2
> -   GlobalizationError.PATTERN\_ERROR: 3

-   **message**: エラーの解説または詳細を記したテキストメッセージです。
    *(String)*

##### 解説

このオブジェクトの生成は、Cordova
側で行われます。エラー発生時には、コールバック関数に渡されます。

##### サポート対象のプラットフォーム

-   Android
-   iOS
-   Windows

##### 例

次の errorCallback
が実行された場合、ポップアップダイアログ上に、`code: 3` と
`message: エラー内容` 形式のテキストが表示されます。

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
