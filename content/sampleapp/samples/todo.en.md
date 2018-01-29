---
title: TODO App
weight: 100
---

The application allows you to add a todo list.

{{<import pid="5923a0bf013eb0662bca5a15" title="TODO App">}}

**Tested Environment**

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/19-todo-app/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/todo/1.png">}}                                
                                                                                            
| File | Description |
|------|-------------|
| `index.html` | The startup Page |
| `js/app.js` | A JavaScript file used in the application |

## Required JS/CSS Components
  
- `jQuerymobile`   

## HTML Explanation

The contents of the HTML body section are shown below:

{{<highlight html>}}
<div data-role="page" id="list-page">
  <div data-role="header" data-position="fixed">
    <h1>Monaca TODO</h1>
    <a href="#add-page" data-icon="add" class="ui-btn-right">Add</a>
  </div>
  <div data-role="content">
    <ul data-role="listview" data-inset="true" id="todo-list"></ul>
  </div>
</div>
<div data-role="page" id="add-page">
  <div data-role="header">
    <h1>Add TODO</h1>
  </div>
  <div data-role="content">
    <input id="todo-title" type="text" placeholder="TODO Title">
    <textarea id="todo-body" style="height: 8em" placeholder="Description"></textarea>
    <input id="add-button" type="button" value="Save" onclick="addTodo()">
    <input id="add-button" type="button" value="Picture And Save" onclick="addTodoPicture()"  data-theme="b">
  </div>
</div>
{{</highlight>}}

Since this sample uses jQuery Mobile, the HTML should be written
accordingly. Specifically, attributes beginning with `data-`, such as
`data-role` and `data-position`, serve special roles in jQuery Mobile.

In jQuery Mobile, multiple pages can be described in a single HTML file.
In this app, for example, both the List Screen and the Add Screen are
defined within index.html. Specifically, pages are expressed by `div`
tags in which the `data-role` attribute is set to `page`. The role of
the tags is expressed by the `data-role` attribute in this manner. For
example, `data-role` can also specify `header`, `content` , or
`listview`.

For more information on jQuery Mobile tags and components, please refer
to [jQuery Mobile Demo](http://jquerymobile.com/demos/1.2.0/).

## JavaScript Explanation

The JavaScript code is shown below:

{{<highlight javascript>}}
monaca.viewport({ width: 320 });
function addTodoPicture() {
  navigator.camera.getPicture(addTodo,
  function() {
    alert("Failed to get camera.");
  }, {
    quality : 50,
    destinationType : Camera.DestinationType.FILE_URI,
    targetWidth : 100,
    targetHeight : 100
  });
};
function addTodo(camera_url) {
  var title = $("#todo-title").val();
  var body = $("#todo-body").val();
  var img_tag = "";
  if (camera_url) {
    img_tag = "<img src='" + camera_url + "'>";
  }
  $.mobile.changePage($("#list-page"));
  $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3><p>" + body + "</p></li>")
  $("#todo-list").listview('refresh');
};
{{</highlight>}}

Here, the two functions, `addTodoPicture` and `addTodo`, are defined. As
the names imply, the first function shoots a photo and registers data
while the second performs only data registration.

To shoot a photo, the `addTodoPicture` functions calls
`navigator.camera.getPicture`,which is a function provide by Core
Cordova Plugins. If the call is successful, the function `addTodo` is
then executed. if it fails, an error message is generated. Photo shoot
options such as fixing the image size and specifying the return type are
also set.

The function `addTodo` takes an argument called `camera_url`. When the
function `navigator.camera.getPicture` is called and the photo shoot is
successful, a reference to the graphic file is stored in this argument.

DOM operations can easily be performed within these functions through
the use of jQuery libraries. For example, in the following snippet, the
value of the element with ID `todo-title` is acquired and assigned to
the variable `title`.

{{<highlight javascript>}}
var title = $("#todo-title").val();
{{</highlight>}}

Accordingly, in lines `14-19`, the input values are read and assigned to
the appropriate variables `title`, `body`, and `img_tag`. Next, the
function `$.mobile.changePage` transitions to the next page and adds a
new row to the list. Finally, the list page is redrawn and the program
ends.
