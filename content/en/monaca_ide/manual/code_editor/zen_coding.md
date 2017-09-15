Emmet
=====

What is Emmet?
--------------

[Emmet (formerly Zen Coding)](http://docs.emmet.io/) is an editor plugin
for high-speed CSS, HTML (or any other structured code format) coding
and editing. It was formerly called as Zen Coding. Monaca Emmet plugin
contains a powerful abbreviation engine which allows you to expand
expressions (similar to CSS selectors) into HTML code. For example, type
the following line in `<body>` tag of an HTML file on the Monaca Cloud
IDE and then press tab key.

    div#index>div.content+ul#navigation>li*4>a

After pressing the tab key, the above line will be expanded into:

    <div id="index">
      <div class="content"></div>
      <ul id="navigation">
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </div>

The following Emmet actions along with keyboard shortcuts are supported
in Monaca:

-   expandAbbr
-   wrapAbbr
-   matchTag
-   matchTagInward.

Please note that almost every action highly depends on current cursor
position inside the editor.

Expand Abbreviation (TAB)
-------------------------

It searches abbreviation from your current cursor position and expands
it into HTML or CSS code. Here is a syntax list of properties and
operators supported by Emmet:

  Syntax         Description      Example
  -------------- ---------------- ----------------------------
  `E`            elementName      `div`
  `E#id`         elementId        `div#content`
  `E.class`      elementClass     `div.header`
  `E#id.class`   elementIdClass   `div#content.column.width`
  `E>N`          childElement     `div>p`
  `E+N`          siblingElement   `h1+p`
  `E*N`          elementMult      `ul#nav>li*5>a`
  `E$*N`         itemNum          `ul#nav>li.item-$*5`
  `E[attr]`      elementAttr      `p[title]`
  `E|filter`     elementFilter    `p.title|e`
  `P:V (CSS)`    propertyValues   `fl:r+d:b+w:300+h:600`

### Element Name

Syntax

:   E

Example

:   ------------------------ --
      `div`, `p`, `h1`, etc.   
      ------------------------ --

        h1

    After pressing the tab key, the above line will be expanded into:

        <h1></h1>

### Element with Identifier

Syntax

:   E\#id

Example

:   ---------------------------------------------- --
      `div#content`, `p#intro`, `span#error`, etc.   
      ---------------------------------------------- --

        p#intro

    After pressing the tab key, the above line will be expanded into:

        <p id="intro"></p>

### Element with Class

Syntax

:   E.class

Example

:   --------------------------------------- --
      `div.header`, `p.error.critial`, etc.   
      --------------------------------------- --

        p.error.critial

    After pressing the tab key, the above line will be expanded into:

        <p class="error critial"></p>

### Element with ID and Class

Syntax

:   E\#id.class

Example

:   ---------------------------------- --
      `div#content.column.width`, etc.   
      ---------------------------------- --

        div#content.column.width

    After pressing the tab key, the above line will be expanded into:

        <div id="content" class="column width"></div>

### Child Element

Syntax

:   E&gt;N

Example

:   ------------------------------------ --
      `div>p`, `div#footer>p>span`, etc.   
      ------------------------------------ --

        div#footer>p>span

    After pressing the tab key, the above line will be expanded into:

        <div id="footer">
          <p>
            <span></span>
          </p>
        </div>

### Sibling Element

Syntax

:   E+N

Example

:   --------------------------------------------------- --
      `h1+p`, `div#header+div#content+div#footer`, etc.   
      --------------------------------------------------- --

        div#header+div#content+div#footer

    After pressing the tab key, the above line will be expanded into:

        <div id="header"></div>
        <div id="content"></div>
        <div id="footer"></div>

### Element Multiplication

Syntax

:   E\*N

Example

:   ----------------------- --
      `ul#nav>li*5>a`, etc.   
      ----------------------- --

        ul#nav>li*5>a

    After pressing the tab key, the above line will be expanded into:

        <ul id="nav">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>

### Item Numbering

Syntax

:   E\$\*N

Example

:   ---------------------------- --
      `ul#nav>li.item-$*5`, etc.   
      ---------------------------- --

        ul#nav>li.item-$*5

    After pressing the tab key, the above line will be expanded into:

        <ul id="nav">
          <li class="item-1"></li>
          <li class="item-2"></li>
          <li class="item-3"></li>
          <li class="item-4"></li>
          <li class="item-5"></li>
        </ul>

### Element with Attribute

Syntax

:   E\[attr\]

Example

:   -------------------------------------------------------------- --
      `p[title]`, `td[colspan=2]`, `span[title="Hello" rel]`, etc.   
      -------------------------------------------------------------- --

        td[colspan=2]

    After pressing the tab key, the above line will be expanded into:

        <td colspan="2"></td>

### Element with Filter

For more information about `Filter`, please refer to [Zen Coding Filter
Wiki](https://code.google.com/p/zen-coding/wiki/Filters) .

Syntax

:   E|filter

Example

:   ------------------- --
      `p.title|e`, etc.   
      ------------------- --

        p.title|e

    After pressing the tab key, the above line will be expanded into:

        &lt;p class="title"&gt;&lt;/p&gt;

    `<` and `>` was escaped into HTML Entities, such as`&lt;` and
    `&gt;`.

### CSS Abbreviation

Syntax

:   P:V

Example

>   ------------------------------ --
>   `fl:r+d:b+w:300+h:600`, etc.   
>   ------------------------------ --
>
> After pressing the tab key, the above line will be expanded into:
>
>     float: right;display: block;width: 300px;height: 600px;
>
> For more information about `CSS Abbreviation`, please refer to [Zen
> Coding CSS
> Wiki](https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn) .

Wrap with Abbreviation (CTRL+SHIFT+A)
-------------------------------------

<div class="admonition warning">

Currently, this action work correctly only with Windows.

</div>

It boosts coding speed with proper coding indentation. It takes Emmet
abbreviation, expands it and places currently selected content or
current cursor position in the last element of expanded abbreviation.
For example, we have the following HTML code:

    <body>
      <div class="lesson">
        <h1>Introduction to Monaca</h1>
        <p>In this page, we will take a brief look at Monaca.</p>
      </div>
    </body>

We want to wrap `<h1>` into a class called "chapter1". With Emmet, we
can either select the whole `<h1></h1>` tag or put the cursor inside
`<h1>` tag and press `CTRL+SHIFT+A`. Then, an input form will appear
asking us to input the Emmet abbreviation. Please input "div.chapter1"
and press "OK". The following snippet is the result of this action:

    <body>
      <div class="lesson">
        <div class="chapter1">
          <h1>Introduction to Monaca</h1>
        </div>
        <p>In this page, we will take a brief look at Monaca.</p>
      </div>
    </body>

However, if you select `<h1>` content only or the current cursor is
inside the content, then only the content is wrapped inside the class
"chapter1" under `<h1>` tag.

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

Match Tag Pair (CTRL+D)
-----------------------

It selects the whole content of the element which contains the current
cursor.

Match Tag Pair Inward (CTRL+SHIFT+D)
------------------------------------

It selects the whole content of the child element insides the element
which contains the current cursor.
