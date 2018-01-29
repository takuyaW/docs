---
title: Emmet
weight: 30
---

## What is Emmet?

[Emmet (formerly Zen Coding)](http://docs.emmet.io/) is an editor plugin
for high-speed CSS, HTML (or any other structured code format) coding
and editing. It was formerly called as Zen Coding. Monaca Emmet plugin
contains a powerful abbreviation engine which allows you to expand
expressions (similar to CSS selectors) into HTML code. For example, type
the following line in `<body>` tag of an HTML file on the Monaca Cloud
IDE and then press `tab` key.

{{<highlight html>}}
div#index>div.content+ul#navigation>li*4>a
{{</highlight>}}

After pressing the tab key, the above line will be expanded into:

{{<highlight html>}}
<div id="index">
  <div class="content"></div>
  <ul id="navigation">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
</div>
{{</highlight>}}

The following Emmet actions along with keyboard shortcuts are supported
in Monaca:

- [Expand Abbreviation (TAB)](#expand-abbreviation-tab)
- [Wrap with Abbreviation (CTRL+SHIFT+A)](#wrap-with-abbreviation-ctrl-shift-a)
- [Match Tag Pair (CTRL+D)](#match-tag-pair-ctrl-d)
- [Match Tag Pair Inward (CTRL+SHIFT+D)](#match-tag-pair-inward-ctrl-shift-d)

Please note that almost every action highly depends on current cursor
position inside the editor.

##  Expand Abbreviation (TAB)

It searches abbreviation from your current cursor position and expands
it into HTML or CSS code. Here is a syntax list of properties and
operators supported by Emmet:

| Syntax | Description | Example |
|--------|-------------|---------|
| `E`  | [Element Name](#element-name) |  `div`|
| `E#id` | [Element with Identifier](#element-with-identifier) | `div#content` |
| `E.class` | [Element with Class](#element-with-class) | `div.header` |
| `E#id.class` | [Element with ID and Class](#element-with-id-and-class) | `div#content.column.width` |
| `E>N` | [Child Element](#child-element) | `div>p` |
| `E+N` | [Sibling Element](#sibling-element) | `h1+p` |
| `E*N` | [Element Multiplication](#element-multiplication) | `ul#nav>li*5>a` |
| `E$*N` | [Item Numbering](#item-numbering) | `ul#nav>li.item-$*5` |
| `E[attr]` | [Element with Attribute](#element-with-attribute) | `p[title]` |
|  <code>E&#124;filter</code> | [Element with Filter](#element-with-filter) | <code>p.title&#124;e</code |
| `P:V (CSS)` | [CSS Abbreviation](#css-abbreviation) | `fl:r+d:b+w:300+h:600` |

### Element Name

*Syntax*

{{<highlight javascript>}}
E
{{</highlight>}}

*Example*

`E` could be `div`, `p`, `h1`, etc. If you type `h1` and press `tab` key, it will expand into:
    
{{<highlight html>}}
<h1></h1>
{{</highlight>}}

### Element with Identifier

*Syntax*

{{<highlight javascript>}}
E#id
{{</highlight>}}

*Example*

`E#id` could be `div#content`, `p#intro`, `span#error`, etc. If you type `p#intro` and press `tab` key, it will expand into:

{{<highlight html>}}
<p id="intro"></p>
{{</highlight>}}

### Element with Class

*Syntax*

{{<highlight javascript>}}
E.class
{{</highlight>}}

*Example*

`E.class` could be `div.header`, `p.error.critial`, etc. If you type `p.error.critial` and press `tab` key, it will expand into:

{{<highlight html>}}
<p class="error critial"></p>
{{</highlight>}}       
        

### Element with ID and Class

*Syntax*

{{<highlight javascript>}}
E#id.class
{{</highlight>}}

*Example*

`E#id.class` could be `div#content.column.width`, etc. If you type `div#content.column.width` and press `tab` key, it will expand into:

{{<highlight html>}}
<div id="content" class="column width"></div>
{{</highlight>}}      
        

### Child Element

*Syntax*

{{<highlight javascript>}}
E>N
{{</highlight>}}

*Example*

`E>N` could be `div>p`, `div#footer>p>span`, etc. If you type `div#footer>p>span` and press `tab` key, it will expand into:

{{<highlight html>}}
<div id="footer">
  <p>
    <span></span>
  </p>
</div>
{{</highlight>}}     
        

### Sibling Element

*Syntax*

{{<highlight javascript>}}
E+N
{{</highlight>}}

*Example*

`E+N` could be `h1+p`, `div#header+div#content+div#footer`, etc. If you type `div#header+div#content+div#footer` and press `tab` key, it will expand into:

{{<highlight html>}}
<div id="header"></div>
<div id="content"></div>
<div id="footer"></div>
{{</highlight>}}     
        

### Element Multiplication

*Syntax*

{{<highlight javascript>}}
E*N
{{</highlight>}}

*Example*

`E*N` could be `ul#nav>li*5>a`, etc. If you type `ul#nav>li*5>a` and press `tab` key, it will expand into:

{{<highlight html>}}
<ul id="nav">
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
{{</highlight>}}   

### Item Numbering

*Syntax*

{{<highlight javascript>}}
E$*N
{{</highlight>}}

*Example*

`E$*N` could be `ul#nav>li.item-$*5`, etc. If you type `ul#nav>li.item-$*5` and press `tab` key, it will expand into:

{{<highlight html>}}
<ul id="nav">
  <li class="item-1"></li>
  <li class="item-2"></li>
  <li class="item-3"></li>
  <li class="item-4"></li>
  <li class="item-5"></li>
</ul>
{{</highlight>}}   


### Element with Attribute

*Syntax*

{{<highlight javascript>}}
E[attr]
{{</highlight>}}

*Example*

`E[attr]` could be `p[title]`, `td[colspan=2]`, `span[title="Hello" rel]`, etc. If you type `td[colspan=2]` and press `tab` key, it will expand into:

{{<highlight html>}}
<td colspan="2"></td>
{{</highlight>}}   

### Element with Filter

For more information about `Filter`, please refer to [Zen Coding Filter Wiki](https://code.google.com/p/zen-coding/wiki/Filters).

*Syntax*

{{<highlight javascript>}}
E|filter
{{</highlight>}}

*Example*

`E|filter` could be `p.title|e`, etc. If you type `p.title|e` and press `tab` key, it will expand into:

{{<highlight html>}}
&lt;p class="title"&gt;&lt;/p&gt;
{{</highlight>}}   

`<` and `>` are escaped into HTML Entities, such as `&lt;` and `&gt;`.

### CSS Abbreviation

*Syntax*

{{<highlight javascript>}}
P:V
{{</highlight>}}

*Example*

`P:V` could be `fl:r+d:b+w:300+h:600`, etc. If you type `fl:r+d:b+w:300+h:600` and press `tab` key, it will expand into:

{{<highlight css>}}
float: right;display: block;width: 300px;height: 600px;
{{</highlight>}}   

For more information about `CSS Abbreviation`, please refer to [Zen Coding CSS Wiki](https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn).

##  Wrap with Abbreviation (CTRL+SHIFT+A)

{{<warning>}}
    Currently, this action only works on Windows.
{{</warning>}}

It boosts coding speed with proper coding indentation. It takes Emmet
abbreviation, expands it and places currently selected content or
current cursor position in the last element of expanded abbreviation.
For example, we have the following HTML code:

{{<highlight html>}}
<body>
  <div class="lesson">
    <h1>Introduction to Monaca</h1>
    <p>In this page, we will take a brief look at Monaca.</p>
  </div>
</body>
{{</highlight>}} 

We want to wrap `<h1>` into a class called `chapter1`. With Emmet, we
can either select the whole `<h1></h1>` tag or put the cursor inside
`<h1>` tag and press `CTRL+SHIFT+A`. Then, an input form will appear
asking us to input the Emmet abbreviation. Please input `div.chapter1`
and press `OK`. The following snippet is the result of this action:

{{<highlight html>}}
<body>
  <div class="lesson">
    <div class="chapter1">
      <h1>Introduction to Monaca</h1>
    </div>
    <p>In this page, we will take a brief look at Monaca.</p>
  </div>
</body>
{{</highlight>}} 


However, if you select `<h1>` content only or the current cursor is
inside the content, then only the content is wrapped inside the class
"chapter1" under `<h1>` tag.

{{<highlight html>}}
<body>
  <div class="content">
    <h1>
      <div class="chapter1">
        Introduction to Monaca
      </div>
    </h1>
    <p>In this page, we will take a brief look at Monaca.</p>
  </div>
</body>
{{</highlight>}} 

##  Match Tag Pair (CTRL+D)

It selects the whole content of the element which contains the current
cursor.

##  Match Tag Pair Inward (CTRL+SHIFT+D)

It selects the whole content of the child element insides the element
which contains the current cursor.

See Also: 

- [Editor Shortcuts](../editor)
- [Type Script](../type_script)
