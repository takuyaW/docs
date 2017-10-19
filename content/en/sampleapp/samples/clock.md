---
title: Clock App
---

# Clock App

{{<note>}}
    This sample application is reprinting of {{<link href="http://thinkit.co.jp/story/2013/03/11/3987" title="Think IT article">}} relaesed on 3/11/2013.
{{</note>}}

This sample app is a clock app displaying current Date and time.

{{<import pid="5923cd8e8034518c22fbdcbf" title="Clock App">}}

*Tested Environment*: 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/21-clock-app/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/clock/1.png">}}                                
                                                                                            
| File | Description |
|------|-------------|
| `index.html` | The Startup page |              
| `js/app.js` | The JavaScript file handling implementation in the project |
| `css/style.css` | The style Sheet for the project |
| `images/*.png` | All image files needed to use this template |

## HTML Explanation

### index.html

The following HTML body of `index.html` file is for displaying the current
Date and time (see screenshot below):

{{<highlight html>}}
<div id="wrapper">
    <div id="container">
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-colon.png" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-colon.png" />
        <img src="images/figure-0.png" class="figure" />
        <img src="images/figure-0.png" class="figure" />
        <div id="date"></div>
    </div>
    <img src="images/logo-monaca.png" style="position: absolute; left: 40px; top: 40px;" />
</div>
{{</highlight>}}

{{<figure src="/images/sampleapp/clock/3.png">}}  

## JavaScript Explanation

### js/app.js

When the application is loaded, the `clock()` function is called every 1 seconds (`1000 ms`) by this statement:

{{<highlight javascript>}}
setInterval(clock, 1000);
{{</highlight>}}

The `clock()` function is used to display the current date and time.
First, it gets the current time (hour, minute and second) and then
display the images (digit image) according to the time. Next, it gets
the current date (day, month and year) and then display it in the format
as defined in `renderDay()` and `renderMonth()` functions (see below
screenshot). Here is content of the `clock()` function:

{{<highlight javascript>}}
function clock() {
    // (3) Obtain "figure" class(image of the number)
    var figures = document.getElementsByClassName('figure');
    // (4) Obtain the "date" ID (Date display area)
    var date = document.getElementById('date');

    // (5) Obtain the current time
    var now = new Date();

    // (6) Set the digits for the hours
    figures[0].src = 'images/figure-' + tendigit(now.getHours()) + '.png';
    figures[1].src = 'images/figure-' + onedigit(now.getHours()) + '.png';

    // (7) Set the digits for the minutes
    figures[2].src = 'images/figure-' + tendigit(now.getMinutes()) + '.png';
    figures[3].src = 'images/figure-' + onedigit(now.getMinutes()) + '.png';

    // (7) Set the digits for the seconds
    figures[4].src = 'images/figure-' + tendigit(now.getSeconds()) + '.png';
    figures[5].src = 'images/figure-' + onedigit(now.getSeconds()) + '.png';

    // (8) Display the date
    date.textContent = renderDay(now.getDay()) + ", " + renderMonth(now.getMonth()) + " " + now.getDate() + ", " + now.getFullYear();
}
{{</highlight>}}

{{<figure src="/images/sampleapp/clock/4.png">}}  
