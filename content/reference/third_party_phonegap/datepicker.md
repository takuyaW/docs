---
title: DatePicker Plugin
---

# DatePicker Plugin

DatePicker plugin lets an app use the native DatePicker control.

## Enable Plugin in Monaca

1.  From the IDE menu, go to {{<menu menu1="Config" menu2="Manage Cordova Plugins">}}.
2.  Click {{<guilabel name="Enable">}} button of the `Datepicker` plugin to add it into your
    project.

    {{<img src="/images/reference/third_party_phonegap/datepicker/1.png">}}

## Methods

### For Android

Function Name       | Description
--------------------|-------------------------------------------------
show(func)          |show a DatePicker control.

## DatePicker Demo

### For Android

{{<highlight html>}}
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
{{</highlight>}}

### For iOS

Please note that, this example only works with iPhone but not iPad.

{{<highlight html>}}
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
{{</highlight>}}

See Also:

- [Core Cordova Plugins](../../cordova_6.5)
- [Monaca Power Plugins](../../power_plugins)
