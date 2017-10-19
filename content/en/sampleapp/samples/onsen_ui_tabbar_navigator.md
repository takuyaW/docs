---
title: Onsen UI Tabbar Navigation
---

# Onsen UI Tabbar Navigation

This is a template using [Onsen UI tabbar](https://onsen.io/v2/api/js/ons-tabbar.html) and
[navigator](https://onsen.io/v2/api/js/ons-navigator.html).

*Tested Environment*: 

- Android 4.2.2
- iOS 7.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/9-ons-tab-nav/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_1.png">}}                           

| File | Description |
|------|-------------|
| `index.html` | Startup page (Home page) |
|  `navigator.html`  | Navigator page for Page 1 |
|  `page1.html`      | Page 1 |
|  `page2.html`      | Page 2 |
|  `page3.html`      | Page 3 |
|  `new_page.html`   | New page |
|  `styles/app.css`  | Style sheet file of this project |

## Required JS/CSS Components

- `Onsen UI`                                       
                                                   
## HTML Explanation                                 

### index.html                                       

`index.html` is the Startup page. It contains a `<ons-tabbar>` component
which consists of 3 tabs: Home (`navigator1.html`), Camera (`page2.html`)
and Settings (`page3.html`) tabs. (See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_6.png" width="300">}}    

### navigator.html

`navigator.html` stores a navigator element (`<ons-navigator>` tag) which
manages the page navigation backed by page stack, horizontally. As shown
in the `navigator.html` file, the `page1.html` is used in a navigator
element. In other words, the Page 1 is the first page in the page stack.

### page1.html

`page1.html` has a line of text (`Page 1`) and a {{<guilabel name="Push New Page">}} button.
(See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_2.png" width="300">}} 

When the {{<guilabel name="Push New Page">}} button is clicked, the New page is shown and
pushed into the page stack. In other words, it's the second page in the page stack after the page 1.

### new_page.html

`new_page.html` has a line of text (`New Page`) and a {{<guilabel name="Pop Page">}} button.
(See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_5.png" width="300">}} 

Either when the {{<guilabel name="Home">}} back button on the top-left corner of the New Page
or the {{<guilabel name="Pop Page">}} button is clicked, it will go back to the previous page
found in the page stack which, in this case, is the Page 1.

### page2.html

`page2.html` has only a line of text (`Page 2`). (See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_3.png" width="300">}} 

### page3.html

`page3.html` has only a line of text (`Page 3`). (See the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_tabbar_navigator/tabbar_4.png" width="300">}} 
