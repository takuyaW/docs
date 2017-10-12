Onsen UI Sliding Menu
=====================

This is a template using [Onsen UI sliding
menu](https://onsen.io/v1/reference/ons-sliding-menu.html).

| *Tested Environments:* Android 4.2.2, iOS 7.1.1

<div class="iframe-samples">
  <iframe src="https://monaca.github.io/project-templates/8-ons-sliding-menu-nav/www/index.html" style="max-width: 150%;"></iframe>
</div>
File Components
---------------

![image](images/onsen_ui_sliding_menu/sliding_1.png){width="200px"}

  -------------------------------- ----------------------------------
  `index.html`                     Startup page
  `menu.html`                      Menu Page
  `page1.html`                     Page 1
  `page2.html`                     Page 2
  `styles/app.css`                 Style sheet file of this project
  `images/ico_swipe_right_s.png`   Image file used in this project
  -------------------------------- ----------------------------------

Required JS/CSS Components
--------------------------

  `Onsen UI`                                       
  ------------------------------------------------ --
  HTML Explanation                                 
  \^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^\^   
  index.html                                       

index.html is the Startup page. It is the starting point of the app and
contains the sliding menu component (`<ons-sliding-menu>` tag). The
`ons-sliding-menu` component has main page page1.html and menu page
menu.html. When the index.html is loaded at the start of the app, the
page1.html and menu.html are loaded as the main page and menu page,
respectively.

### menu.html

menu.html is shown when the Toggle Menu button is clicked or when the
user swipe the page right. This page contains a list of 2 items: Page 1
(`page1.html`) and Page 2 (`page2.html`). (See the screenshot below)

![](images/onsen_ui_sliding_menu/sliding_3.png){width="250px"}

While the behind-page (menu.html) of the sliding menu element is always
the same, its above-page is changed to navigator1.html or
navigator2.html when the Page 1 or Page 2 is selected, respectively.

### page1.html

page1.html has several lines of text, a Toggle Menu button and an image
file. (See the screenshot below)

![](images/onsen_ui_sliding_menu/sliding_2.png){width="250px"}

### page2.html

page2.html has only a line of text (`Page 2`) and a Toggle Menu button.
(See the screenshot below)

![](images/onsen_ui_sliding_menu/sliding_4.png){width="250px"}