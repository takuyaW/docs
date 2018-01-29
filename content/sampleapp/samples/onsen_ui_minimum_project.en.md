---
title: Onsen UI Minimum Template
weight: 160
---

This is a minimum template for [Onsen UI](https://onsen.io/) application.

**Tested Environment**

- Android 4.2.2
- iOS 7.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/7-ons-minimum/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_1.png">}}   

File | Description
-----|-------
`index.html` | Home screen (Startup page)
`page1.html` | Page 1
`page2.html` | Page 2
`styles/app.css` | Style sheet file of this project

## Required JS/CSS Components

- `Onsen UI`                                       
  
## HTML Explanation                                 

### index.html                                       

`index.html` is the Startup page. It contains the page navigation
`<ons-navigator>` which is a page stack manager and transition animator.
The attribute `page="page1.html"` denotes that `page1.html` is the first
page of the stack, in other words, it is the first page loaded when the
app start.

{{<note>}}
  Instead of using attibute page of <code>ons-navigator</code>, you can also use <code>ons-page</code> component under <code>ons-navigator</code> to define the first page of the stack. In case of both options are used, the attribute page overwrites the <code>ons-page</code> component. In other words, the page from the page attribute is the first page of the stack while the <code>ons-page</code> component is ignored. For more information please refer to {{<link href="https://onsen.io/v2/api/js/ons-navigator.html#reference-detail" title="Onsen UI Documentation">}}.
{{</note>}}

### page1.html

`page1.html` has a line of text (`Page 1`) and a {{<guilabel name="Push Page 2">}} button. (See
the screenshot below)

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_2.png" width="300">}}   

When the {{<guilabel name="Push Page 2">}} button is clicked, the Page 2 is shown horizontally
with a Welcome back button on top-left of the page. In other words, the
Page 2 is currently the second page in the page stack. When the Welcome
back button is clicked, it goes back to the previous page which, in this
case, is the Page 1.

### page2.html

`page2.html` has only a line of text (`Page 2`). (See the screenshot
below)

{{<figure src="/images/sampleapp/onsen_ui_minimum_project/minimum_3.png" width="300">}}   
