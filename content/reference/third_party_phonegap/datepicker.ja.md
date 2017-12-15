Datepicker プラグイン
=====================

DatePicker プラグインを使用して、ネイティブ側の DatePicker コントロール
( 日付設定 ) にアクセスします。

プラグインの追加方法 ( Monaca 上での処理 )
------------------------------------------

1.  IDE メニュー上で、 ファイル &gt; Cordova プラグインの管理 または
    設定 &gt; Cordova プラグインの管理 を選択します。
2.  DatePicker の 有効 ボタンをクリックして、プロジェクトへ追加します。

> ![image](images/datepicker/1.png){width="700px"}

メソッド
--------

### Android の場合

  関数名 |解説         
  -------------------- -------------------------------------------------
  show(func)           DatePicker を表示します。

DatePicker のデモ
-----------------

### Android の場合

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <script>
      function dateTest() {
        var myNewDate = new Date();

        // Same handling for iPhone and Android
        window.plugins.datePicker.show({
            date : myNewDate,
            mode : 'date', // date or time or blank for both
            allowOldDates : true
        }, function(returnDate) {
            var newDate = new Date(returnDate);
            alert(newDate.toString());
        });
      }
    </script>
  </head>
  <body bgcolor="#ffffff">
    <hr>DatePick Plugin Test<hr><br>
    <hr> datePicker test<hr><br>
    <input type="button" onClick ="dateTest()" value ="dateTest()" />
  </body>
</html>
```

### iOS の場合

このサンプルは、iPhone が対象です。iPad では正常に動作しません。

``` {.sourceCode .html}
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>PhoneGap</title>
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">

    <link rel="stylesheet" href="master.css" type="text/css" media="screen" title="no title">

    <script>
        document.addEventListener("deviceready", onDeviceReady, false);
        var datePicker;

        function onDeviceReady() {
            // datepicker
            console.log("cordova is ready");
            datePicker = window.plugins.datePicker;
        }

        function getDateTime(){
            datePicker.show({
                "mode" : "datetime",
                "date" : new Date("2000/01/02 03:04:05")
            }, function(a){document.getElementById("datetimeButton").innerHTML = new Date(a).toString()});
        }
        function getDate(){
            datePicker.show({
                 "mode" : "date",
                 "date" : new Date("2000/01/02 03:04:05")
            }, function(a){document.getElementById("dateButton").innerHTML = new Date(a).toString()});
        }
        function getTime(){
            datePicker.show({
                 "mode" : "time",
                 "date" : new Date("2000/01/02 03:04:05")
            }, function(a){document.getElementById("timeButton").innerHTML = new Date(a).toString()});
        }
        function getDateTimeInhibitOldDates(){
            datePicker.show({
                  "mode" : "datetime",
                  "date" : new Date("2012/09/28 03:04:05"),
                  "allowOldDates" : false
            }, function(a){document.getElementById("inhibitOldDatesButton").innerHTML = new Date(a).toString()});
        }
        function getDateTimeInhibitFutureDates(){
            datePicker.show({
                  "mode" : "datetime",
                  "date" : new Date("2012/09/28 03:04:05"),
                  "allowFutureDates" : false
          }, function(a){document.getElementById("inhibitFutureDatesButton").innerHTML = a});
        }

    </script>
</head>

<body>
    <hr> datepicker plugin test<hr>
    <p>
        <input type="button" onclick="getDateTime()" value="getDateTime"/>
        <br/>
        <span id="datetimeButton"></span>
    </p>
    <p>
        <input type="button" onclick="getDate()" value="getDate"/>
        <br/>
        <span id="dateButton"></span>
    </p>
    <p>
        <input type="button" onclick="getTime()" value="getTime"/>
        <br/>
        <span id="timeButton"></span>
    </p>
    <p>
        <input type="button" onclick="getDateTimeInhibitOldDates()" value="get  DateTimeInhibitOldDates"/>
        <br/>
        <span id="inhibitOldDatesButton"></span>
    </p>
    <p>
        <input type="button" onclick="getDateTimeInhibitFutureDates()" value="  getDateTimeInhibitFutureDates"/>
        <br/>
        <span id="inhibitFutureDatesButton"></span>
    </p>
</body>
</html>
```
