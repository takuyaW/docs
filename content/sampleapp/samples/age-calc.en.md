---
title: BirthYear App
weight: 130
---

{{<note>}}
  This sample application is a reprint of an article first featured on Think I­T on the 12/26/2012.
{{</note>}}

The app will calculate a user's birthyear and display it after he/she entered his/her name and age.

{{<import pid="5923d096013eb065012a943a" title="BirthYear App">}}

*Tested Environment*: 

- Android 4.2.2
- iOS 7.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/22-birth-year-app/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/age-calc/1.png">}}                                
                                                                                            
| File | Description |
|------|-------------|
| `index.html` | The startup Page |
| `css/style.css` | The stylesheet used in the application |

## Required JS/CSS Components

- `jQuery`   

## HTML Explanation

The following contents of the HTML body of `index.html` file is for
displaying 2 textboxes for the user to input his/her name and age, and a
button to calculate his/her birthyear. (see screenshot below):

{{<highlight html>}}
...
  <div data-role="page" id="TopPage">
      <header data-role="header" data-position="fixed">
          <h1>BirthYear App</h1>
      </header>
      <section data-role="content">

          What's your name?
          <input type="text" id="myname" class="input-text" style="width: 40%">

          How old are you?
          <input type="text" id="myage" class="input-text" style="width: 20%">

          <a class="button" onclick="calculate();">calculate your birth year!</a>
      </section>
  </div>
...
{{</highlight>}}

{{<figure src="/images/sampleapp/age-calc/3.png" width="300">}}   

## JavaScript Explanation

This code creates a function called `calculate`.

After entering your age and name, it stores them in two variables called
`myname` and `myage` respectively. It then goes on to calculate your
birth year based on today's date, and stores it in a variable called
`birthyear`.

Finally it stores the message contents in a variable called `text`,
calls the `navigator.notification.alert` function and displays the
result as a popup.

The `navigator.notification.alert` function is a Core Cordova Plugins
function that displays a popup dialog box on the screen. The third
argument displays the text `Welcome to Monaca!` as the title of the
dialog box.

{{<figure src="/images/sampleapp/age-calc/4.png" width="300">}}   
