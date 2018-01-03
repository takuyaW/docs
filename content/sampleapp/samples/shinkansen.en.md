---
title: Train Catalog App
weight: 110
---

This sample app is a train catalog which displaying the types trains
towards Tokaido and Tohoku areas.

{{<import pid="5923ccc5ff2af20e3acb2dd1" title="Train Catalog App">}}

**Tested Environment**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/20-train-catalog/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/shinkansen/3.png">}}                                
                                                                                            
| File | Description |
|------|-------------|
| `index.html` | The startup page |              
| `css/style.css` | The stylesheet file for the application |
| `images/*.jpg` | Image files used in this application |

## Required JS/CSS Components

- `jQuerymobile`   

## HTML Explanation

This sample uses the native function of Monaca. Therefore, there are
multiple HTML pages. First, here is the body of the `index.html`.

{{<highlight html>}}
<div data-role="content">
  <ul data-role="listview">
    <li data-role="list-divider">Tokaido Shinkansen Trains</li>
    <li><a href="#" onclick="showDetail('0kei', 'Series 0')">Series 0</a></li>
    <li><a href="#" onclick="showDetail('300kei', 'Series 300')">Series 300</a></li>
    <li><a href="#" onclick="showDetail('700kei', 'Series 700')">Series 700</a></li>
    <li><a href="#" onclick="showDetail('n700kei', 'Series N700')">Series N700</a></li>
  </ul>
  <p id="attribution">Photos by <a href="#" onclick="monaca.invokeBrowser('http://www.flickr.com/photos/kimuchi583/')">kimuchi583</a></p>
</div>
{{</highlight>}}

This sample uses jQuery Mobile to display the list screen. Once you tap
each column, `showDetail` function is called. This function will transit
to the next page, which will be described later. Also `a` tag uses
`monaca.invokeBrowser` function in `onclick` attributes. This function
is used to launch the browser and display the specified URL.

## JavaScript Explanation

The JavaScript code of the Top Screen is not long.

{{<highlight javascript>}}
function showDetail(filename, trainname) {
  monaca.pushPage("detail.html", {}, {filename : filename, trainname : trainname})
}
{{</highlight>}}

As mentioned before, `showDetail` is called when the column in the list
is tapped. Take 2 arguments and assign them to`filename` variable and
`trqinname` variable.

Display the next page with `monaca.pushPage` function. This function
will open a new page natively by using Monaca native functions and the
variable passed to the next page is defined in it's third argument. The
passed value can be obtained by `monaca.queryParams` variable.
