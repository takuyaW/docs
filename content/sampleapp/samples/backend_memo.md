---
title: Backend Memo
---

This sample app allows user to create a memo app using Monaca Backend
API.

{{<import pid="5923c8f6013eb0ce4ab3b899" title="Backend Memo">}}

*Tested Environment*: 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/16-backend-memo/www/index.html">}}

## Prerequisite

You need to set-up a new backend and attach it to the project. After creating a new project, please follow [Setting up Monaca Backend](/en/monaca_ide/tutorial/adding_backend) for detailed instruction.

After you have created a new backend, please create a new `Memo` collection as follows:

{{<figure src="/images/sampleapp/backend_memo/memo_collection.png">}}  

{{<note>}}
  Please check <code>Allow JavaScript API to insert data</code>. <code>Read</code> and <code>Write</code> options must not be selected. For more details on how to create Backend, please read {{<link href="/en/backend/manual/control_panel" title="Backend Control Panel">}}.
{{</note>}}

{{<note>}}
  In order to access Backend API, you need to register <code>cloud.monaca.mobi</code> in the whitelist by editing each OSs configuration file. For more details, please refer to {{<link href="/en/reference/config/android_configuration/#access-origin-android" title="Access Origin (Android)">}} and {{<link href="/en/reference/config/ios_configuration/#access-origin" title="Access Origin (iOS)">}}.
{{</note>}}

## File Components                                           

{{<figure src="/images/sampleapp/backend_memo/1.png">}}                                               

| File | Description |
|------|-------------|
| `index.html` | The Startup page |
| `js/app.js` | JavaScript file handling the interaction of the application |

## Required JS/CSS Components

- `jQuerymobile`                                               
                                                               
## HTML Explanation                                             

For the User Interface of this sample app, we use jQuery Mobile. In jQuery Mobile, multiple pages can be integrated to a single HTML file. In this app, for example, both login screen and register screen are defined within index.html. Specifically, pages are expressed by `div` tags in which the `data-role` attribute is set to `page`. The role of the tags is expressed by the `data-role` attribute in this manner. For example, `data-role` can also specify as `header`, `content` , or `listview`. For more information on jQuery Mobile tags and components, please refer to [jQuery Mobile Demo](http://jquerymobile.com/demos/1.2.0/).

The following contents of the HTML body:

{{<highlight html>}}
<body>
  <!-- Login Page -->
  <div data-role="page" id="LoginPage">
    <header data-role="header" data-position="fixed">
      <h1>Monaca Memo</h1>
    </header>
      <section data-role="content">
      <h1>Sign in</h1>
      Email:
        <input type="text" id="login_email">
      Password:
        <input type="password" id="login_password">
      New to Monaca Memo?
        <a href="#RegisterPage" data-role="button" data-mini="true" data-inline="true" data-theme="b">Register</a>
        <a href="#" id="LoginBtn" data-role="button" data-inline="false" data-theme="b">Login</a>
      </section>
  </div>
  ...
</body>
{{</highlight>}}

is corresponding to this screenshot which allows a user to login to Monaca Memo app if the user has already registered with the app:

{{<figure src="/images/sampleapp/backend_memo/login.png" width="300">}}      

The following contents of the HTML body:

{{<highlight html>}}
...
<!-- Register Page -->
<div data-role="page" id="RegisterPage">
  <header data-role="header" data-position="fixed">
    <h1>Monaca Memo</h1>
  </header>
    <section data-role="content">
    <h1>Sign up</h1>
    Email:
      <input type="text" id="reg_email">
    Password:
      <input type="password" id="reg_password">
      <a href="#" id="RegisterBtn" data-role="button" data-inline="false" data-theme="b">Register</a>
    </section>
</div>
...
{{</highlight>}}

is corresponding to this screenshot which allows a new user to register with the Monaca Memo app:

{{<figure src="/images/sampleapp/backend_memo/signup.png" width="300">}}  

Likewise, there are several other pages defined in this HTML. Here are the screenshots of those pages.

{{<multi_figures>}}
  {{<img src="/images/sampleapp/backend_memo/list_memo.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/confirm_logout.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/confirm_delete.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/add_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/add_success.png" width="180">}}  
  {{<img src="/images/sampleapp/backend_memo/view_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/edit_memo.png" width="180">}}
  {{<img src="/images/sampleapp/backend_memo/update_success.png" width="180">}}
{{</multi_figures>}}
                                       
## JavaScript Explanation                                       

There are 7 main functionalities in the JavaScript code of this app which are *Login*, *Logout*, *Register*, *Adding Memo*, *Editing Memo*, *Deleting Memo* and *Viewing Memo* functions.

### Register a New User                                          

`onRegisterBtn()` is called when a user clicks on {{<guilabel name="Register">}} button in the
*Register Page*. Then, both `email` and `password` from the input boxes
are captured and used to call `monaca.cloud.User.register()` function.
This function is used to register a new user to Monaca Backend. If the
registration is successful, the user will be automatically logged-in.
Below is the JavaScript code to register a user:

{{<highlight javascript>}}
function onRegisterBtn()
{
  var email = $("#reg_email").val();
  var password = $("#reg_password").val();

  MC.User.register(email, password)
    .done(function()
    {
      console.log('Registration is success!');
    })
    .fail(function(err)
    {
      console.log(err.text);
      console.log('Registration failed!');
    });
}
{{</highlight>}}

### Login a User and Get Collection Data

`onLoginBtn()` is called when a user clicks on {{<guilabel name="Login">}} button. In this
function, a Monaca Backend API called `monaca.cloud.User.login()` is
used to login an existing user. If the user is found in the Monaca
Backend, the user is redirected to the list page which displays a list
of memo of the currently logged-in user by calling `getMemoList()`
function. Inside `getMemoList()` function, a list of memo of currently
logged-in users is retrieved by using `monaca.cloud.Collection().findMine()` function. In this example, we assume that you have already created a collection named `Memo`. The memo
is then dynamically added into the `TopListView` in the list page. Below
is the JavaScript code of the these functions:

{{<highlight javascript>}}
function onLoginBtn()
{
  var email = $("#login_email").val();
  var password = $("#login_password").val();

  MC.User.login(email, password)
    .done(function()
    {
      console.log('Login is success!');
      getMemoList();
      $.mobile.change('#ListPage');
    })
    .fail(function(err)
    {
      console.log(err.message);
      alert('Login failed!');
    });
}

function getMemoList()
{
  console.log('Refresh List');
  var memo = MC.Collection("Memo");
  memo.findMine()
    .done(function(items, totalItems)
    {
      $("#ListPage #TopListView").empty();
      var list = items.items;

      for (var i in list)
      {
        var memo = list[i];
        var d = new Date(memo._createdAt);
        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        $li = $("<li><a href='javascript:onShowLink(\"" + memo._id + "\",\"" + memo.title + "\",\"" + memo.content + "\")' class='show'><h3></h3><p></p></a><a href='javascript:onDeleteBtn(\"" + memo._id + "\")' class='delete'>Delete</a></li>");
        $li.find("h3").text(date);
        $li.find("p").text(memo.title);
        $("#TopListView").prepend($li);
      }
      if (list.length == 0) {
        $li = $("<li>No memo found</li>");
        $("#TopListView").prepend($li);
      }
      $("#ListPage #TopListView").listview("refresh");
    })
  .fail(function(err){ alert('failed to find the collection' + err.text); return null; });
}
{{</highlight>}}

As a result, the list page like the one below will be displayed:

{{<figure src="/images/sampleapp/backend_memo/no_memo.png" width="300">}}  

### Logout a User

`monaca.cloud.User.logout()` function is used to logout the currently
logged-in user. If the user is successfully logged out, the user will be
redirected to the login page.

{{<highlight javascript>}}
function onLogoutBtn()
{
  MC.User.logout()
    .done(function()
    {
      console.log('Logout is success!');
      $.mobile.changePage('#LoginPage');
    })
    .fail(function(err)
    {
      console.log(err.message);
      alert('Logout failed!');
    });
}
{{</highlight>}}

### Adding a Memo

`onSaveBtn()` is called when a user clicks on {{<guilabel name="Save">}} button in the add
page. Then, both `title` and `content` of a new memo from the input
boxes are captured and handed over to `addMemo()` function.

In this function, a Monaca Backend API of a collection called
`monaca.cloud.Collection().insert()` is used to insert a new item into
`Memo` collection.

{{<highlight javascript>}}
function onSaveBtn()
{
  var title = $("#title").val();
  var content = $("#content").val();
  if (title != '')
  {
    addMemo(title,content);
  }
}

function addMemo(title,content) {
  var memo = MC.Collection("Memo");

  memo.insert({ title: title, content: content})
  .done(function(insertedItem)
  {
    console.log('Insert is success!');
    $("#title").val("");
    $("#content").val("");
    //display a dialog stating that the inserting is success
    $( "#okDialog_add" ).popup("open", {positionTo: "origin"}).click(function(event)
    {
      event.stopPropagation();
      event.preventDefault();
      getMemoList();
      $.mobile.changePage('#ListPage');
    });
  })
  .fail(function(err){ console.log('Insert failed!');})
}
{{</highlight>}}

### Updating a Memo

When you update a memo, `monaca.cloud.Collection().findMine()` function
is used to find the memo to update. In this case, we already know the
`_id` property of the collection item. Then, we call
`monaca.cloud.collectionItem.update()` function to update this item in
`Memo` collection.

{{<highlight javascript>}}
function onEditBtn()
{
  var title = $("#title_show").text();
  var content = $("#content_show").text();
  $("#title_edit").val(title);
  $("#content_edit").text(content);
  $.mobile.changePage("#EditPage");
}

function onUpdateBtn()
{
  var new_title = $("#title_edit").val();
  var new_content = $("#content_edit").val();
  var id = currentMemoID;
  if (new_title != '') {
    editMemo(id, new_title, new_content);
  }
}

function editMemo(id, new_title, new_content){
  var memo = MC.Collection("Memo");
  memo.findMine(MC.Criteria("_id==?", [id]))
    .done(function(items, totalItems)
    {
      items.items[0].title = new_title;
      items.items[0].content = new_content;
      items.items[0].update()
        .done(function(updatedItem)
        {
          console.log('Updating is success!');
          //display a dialog stating that the updating is success
          $( "#okDialog_edit" ).popup("open", {positionTo: "origin"}).click(function(event)
          {
            event.stopPropagation();
            event.preventDefault();
            getMemoList();
            location.href='#ListPage';
          });
        })
        .fail(function(err){ console.log(JSON.stringify(err)); return null; });
    })
    .fail(function(err){ console.log(JSON.stringify(err)); return null; });
}
{{</highlight>}}

### Deleting a Memo

Similar to updating a memo, the app calls
`monaca.cloud.Collection().findMine()` function to get the collection
item. Then, call `monaca.cloud.collectionItem.delete()` function to
delete the memo.

{{<highlight javascript>}}
function onDeleteBtn(id)
{
  currentMemoID = id;
  $( "#yesNoDialog_delete" ).popup("open", {positionTo: "origin"})
}

function deleteMemo()
{
  var memo = MC.Collection("Memo");
  memo.findMine(MC.Criteria("_id==?", [currentMemoID]))
    .done(function(items, totalItems)
    {
      items.items[0].delete();
      console.log('The memo is deleted!');
      getMemoList();
      $.mobile.changePage("#ListPage");
    })
    .fail(function(err){ console.log(JSON.stringify(err)); return null; });
}
{{</highlight>}}
