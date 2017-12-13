Emmet
=====

Emmet とは
----------

[Emmet ( 旧 Zen Coding )](http://docs.emmet.io/)
は、HTML、CSS、または、他の構造体型の言語を、高速に記述・編集できるエディター系プラグインの
1 つです。以前は、Zen Coding と呼ばれていました。Monaca の Emmet
プラグインは、HTML・CSS
の短縮記法をサポートした、強力なエンジンを実装しており、CSS
のセレクターに類似した記法で、HTML
を記述・展開できます。たとえば、Monaca クラウド IDE 上で、HTML
ファイルの `<body>` タグの中に、次のコードを記述して、 tab
キーを押してください。

    div#index>div.content+ul#navigation>li*4>a

tab キーを押すと、上のコードが、下のように展開されます。

    <div id="index">
      <div class="content"></div>
      <ul id="navigation">
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </div>

Monaca でサポートしている Emmet の操作は、次のとおりです。

-   expandAbbr
-   wrapAbbr
-   matchTag
-   matchTagInward.

操作を行うときは、エディター上のカーソルの開始位置にご注意ください。

短縮形を展開する ( TAB )
------------------------

カーソルが置かれた位置を元に、適当な短縮形を割り出し、HTML・CSS
コードへと展開します。Emmet
でサポートされている短縮形の一覧は、次のとおりです。

  文法 説明      例               
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

### 要素名

文法

:   E

例

:   ---------------------- --
      例: `div`, `p`, `h1`   
      ---------------------- --

        h1

    tab キーを押すと、上のコードが、下のように展開されます。

        <h1></h1>

### ID 付き要素

文法

:   E\#id

例

:   -------------------------------------------- --
      例: `div#content`, `p#intro`, `span#error`   
      -------------------------------------------- --

        p#intro

    tab キーを押すと、上のコードが、下のように展開されます。

        <p id="intro"></p>

### クラス付き要素

文法

:   E.class

例

:   ------------------------------------- --
      例: `div.header`, `p.error.critial`   
      ------------------------------------- --

        p.error.critial

    tab キーを押すと、上のコードが、下のように展開されます。

        <p class="error critial"></p>

### ID とクラス付きの要素

文法

:   E\#id.class

例

:   -------------------------------- --
      例: `div#content.column.width`   
      -------------------------------- --

        div#content.column.width

    tab キーを押すと、上のコードが、下のように展開されます。

        <div id="content" class="column width"></div>

### 子要素

文法

:   E&gt;N

例

:   ---------------------------------- --
      例: `div>p`, `div#footer>p>span`   
      ---------------------------------- --

        div#footer>p>span

    tab キーを押すと、上のコードが、下のように展開されます。

        <div id="footer">
          <p>
            <span></span>
          </p>
        </div>

### 兄弟要素

文法

:   E+N

例

:   ------------------------------------------------------- --
      例: `h1+p`, `div#header+div#content+div#footer`, etc.   
      ------------------------------------------------------- --

        div#header+div#content+div#footer

    tab キーを押すと、上のコードが、下のように展開されます。

        <div id="header"></div>
        <div id="content"></div>
        <div id="footer"></div>

### 要素の操作

文法

:   E\*N

例

:   --------------------- --
      例: `ul#nav>li*5>a`   
      --------------------- --

        ul#nav>li*5>a

    tab キーを押すと、上のコードが、下のように展開されます。

        <ul id="nav">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>

### 連番の割り当て

文法

:   E\$\*N

例

:   -------------------------- --
      例: `ul#nav>li.item-$*5`   
      -------------------------- --

        ul#nav>li.item-$*5

    tab キーを押すと、上のコードが、下のように展開されます。

        <ul id="nav">
          <li class="item-1"></li>
          <li class="item-2"></li>
          <li class="item-3"></li>
          <li class="item-4"></li>
          <li class="item-5"></li>
        </ul>

### 属性付き要素

文法

:   E\[attr\]

例

:   -------------------------------------------------------------- --
      例: `p[title]`, `td[colspan=2]`, `span[title=\"Hello\" rel]`   
      -------------------------------------------------------------- --

        td[colspan=2]

    tab キーを押すと、上のコードが、下のように展開されます。

        <td colspan="2"></td>

### フィルター付き要素

`フィルター` の詳細に関しては、 [Zen Coding Filter
Wiki](https://code.google.com/p/zen-coding/wiki/Filters)
をご確認ください。

文法

:   E|filter

例

:   ----------------- --
      例: `p.title|e`   
      ----------------- --

        p.title|e

    tab キーを押すと、上のコードが、下のように展開されます。

        &lt;p class="title"&gt;&lt;/p&gt;

    「 `<` 」 と 「 `>` 」 は、 `<` と `>`
    に、それぞれ、エンティティー化されます。

### CSS の短縮形

文法

:   P:V

例

>   ---------------------------- --
>   例: `fl:r+d:b+w:300+h:600`   
>   ---------------------------- --
>
> tab キーを押すと、上のコードが、下のように展開されます。
>
>     float: right;display: block;width: 300px;height: 600px;
>
> CSS 短縮形の詳細に関しては、 [Zen Coding CSS
> Wiki](https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn)
> をご確認ください。

短縮形で囲む ( CTRL+SHIFT+A )
-----------------------------

<div class="admonition warning">

2013年4月現在、この機能は、Windows 上でのみ動作します。

</div>

この機能では、インデントも自動で付与されるので、プログラミングのスピードも向上します。使用方法を解説します。対象の行を選択するかまたは対象の行にカーソルを置き、`CTRL+SHIFT+A`
を押します。次に、表示された入力ダイアログ上で、Emmet
の短縮形を入力すると、対象の行を囲むように、短縮形が展開されます。次の
HTML コードをご確認ください。

    <body>
      <div class="lesson">
        <h1>Introduction to Monaca</h1>
        <p>In this page, we will take a brief look at Monaca.</p>
      </div>
    </body>

`<h1>` を "chapter1" クラスで囲んでみましょう。 `<h1> ~ </h1>`
タグを囲むか、 `<h1> ~ </h1>` タグの中にカーソルをおいて、
`CTRL+SHIFT+A` を押します。入力フォームが表示されるので、Emmet
の短縮形を入力します。ここでは、 "div.chapter1" と入力して "OK"
を押します。結果は、次のようになります。

    <body>
      <div class="lesson">
        <div class="chapter1">
          <h1>Introduction to Monaca</h1>
        </div>
        <p>In this page, we will take a brief look at Monaca.</p>
      </div>
    </body>

`<h1>`
内のコンテンツだけを選択したり、コンテンツ上にカーソルを置いた場合には、
`<h1>` タグの内側に、 "chapter1" クラスが展開されます。

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

対となるタグを検索する ( 外側に向けて、CTRL+D )
-----------------------------------------------

現在のカーソルが置かれた要素内の、コンテンツ全体を選択します。さらにボタンを押すと、外側に向かって、対となるタグを選択します。

対となるタグを検索する ( 内側に向けて、CTRL+SHIFT+D )
-----------------------------------------------------

現在のカーソルが置かれた要素内の、コンテンツ全体を選択します。さらにボタンを押すと、内側に向かって、対となるタグを選択します。
