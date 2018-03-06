---
title: Emmet
weight: 30
aliases: /ja/monaca_ide/manual/code_editor/zen_coding
---

Emmet とは
----------

[Emmet ( 旧 Zen Coding )](http://docs.emmet.io/)
は、HTML、CSS、または、他の構造体型の言語を、高速に記述・編集できるエディター系プラグインの
1 つです。以前は、Zen Coding と呼ばれていました。Monaca の Emmet
プラグインは、HTML・CSS
の短縮記法をサポートした、強力なエンジンを実装しており、CSS
のセレクターに類似した記法で、HTML
を記述・展開できます。たとえば、Monaca クラウド IDE 上で、HTML
ファイルの `<body>` タグの中に、次のコードを記述して、`tab`
キーを押してください。

{{<highlight html>}}
div#index>div.content+ul#navigation>li*4>a
{{</highlight>}}

tab キーを押すと、上のコードが、下のように展開されます。

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

Monaca でサポートしている Emmet の操作は、次のとおりです。

- [短縮形を展開する (TAB)](#短縮形を展開する-tab)
- [短縮形で囲む (CTRL+SHIFT+A)](#短縮形で囲む-ctrl-shift-a)
- [対となるタグを検索する ( 外側に向けて、CTRL+D )](#対となるタグを検索する-外側に向けて-ctrl-d)
- [対となるタグを検索する ( 内側に向けて、CTRL+SHIFT+D )](#対となるタグを検索する-内側に向けて-ctrl-shift-d)

操作を行うときは、エディター上のカーソルの開始位置にご注意ください。

短縮形を展開する ( TAB )
------------------------

カーソルが置かれた位置を元に、適当な短縮形を割り出し、HTML・CSS
コードへと展開します。Emmet
でサポートされている短縮形の一覧は、次のとおりです。

| 文法 | 説明 | 例 |
|-----|------|----|
| `E`  | [要素名](#要素名) |  `div`|
| `E#id` | [ID 付き要素](#id-付き要素) | `div#content` |
| `E.class` | [クラス付き要素](#クラス付き要素) | `div.header` |
| `E#id.class` | [ID とクラス付きの要素](#id-とクラス付きの要素) | `div#content.column.width` |
| `E>N` | [子要素](#子要素) | `div>p` |
| `E+N` | [兄弟要素](#兄弟要素) | `h1+p` |
| `E*N` | [要素の操作](#要素の操作) | `ul#nav>li*5>a` |
| `E$*N` | [連番の割り当て](#連番の割り当て) | `ul#nav>li.item-$*5` |
| `E[attr]` | [属性付き要素](#属性付き要素) | `p[title]` |
|  <code>E&#124;filter</code> | [フィルター付き要素](#フィルター付き要素) | <code>p.title&#124;e</code |
| `P:V (CSS)` | [CSS の短縮形](#css-の短縮形) | `fl:r+d:b+w:300+h:600` |

### 要素名

*文法*

{{<highlight javascript>}}
E
{{</highlight>}}

*例*

例: `div`, `p`, `h1`   

{{<highlight html>}}
h1
{{</highlight>}}        

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<h1></h1>
{{</highlight>}}

### ID 付き要素

*文法*

{{<highlight javascript>}}
E#id
{{</highlight>}}

*例*

例: `div#content`, `p#intro`, `span#error`   

{{<highlight html>}}
p#intro
{{</highlight>}}        

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<p id="intro"></p>
{{</highlight>}}        

### クラス付き要素

*文法*

{{<highlight javascript>}}
E.class
{{</highlight>}}

*例*

例: `div.header`, `p.error.critial`   

{{<highlight html>}}
p.error.critial
{{</highlight>}}      
      
`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<p class="error critial"></p>
{{</highlight>}}      
        

### ID とクラス付きの要素

*文法*

{{<highlight javascript>}}
E#id.class
{{</highlight>}}

*例*

例: `div#content.column.width`   

{{<highlight html>}}
div#content.column.width
{{</highlight>}}             

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<div id="content" class="column width"></div>
{{</highlight>}}             
        
### 子要素

*文法*

{{<highlight javascript>}}
E>N
{{</highlight>}}

*例*

例: `div>p`, `div#footer>p>span`   

{{<highlight html>}}
div#footer>p>span
{{</highlight>}}    
        
`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<div id="footer">
  <p>
    <span></span>
  </p>
</div>
{{</highlight>}}    
        
### 兄弟要素

*文法*

{{<highlight javascript>}}
E+N
{{</highlight>}}

*例*

例: `h1+p`, `div#header+div#content+div#footer`, etc.   

{{<highlight html>}}
div#header+div#content+div#footer
{{</highlight>}}   

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<div id="header"></div>
<div id="content"></div>
<div id="footer"></div>
{{</highlight>}}   
        

### 要素の操作

*文法*

{{<highlight javascript>}}
E*N
{{</highlight>}}

*例*

例: `ul#nav>li*5>a`   

{{<highlight html>}}
ul#nav>li*5>a
{{</highlight>}} 

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<ul id="nav">
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
{{</highlight>}} 


### 連番の割り当て

*文法*

{{<highlight javascript>}}
E$*N
{{</highlight>}}

*例*

例: `ul#nav>li.item-$*5`   
    
{{<highlight html>}}
ul#nav>li.item-$*5
{{</highlight>}} 
        
`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<ul id="nav">
  <li class="item-1"></li>
  <li class="item-2"></li>
  <li class="item-3"></li>
  <li class="item-4"></li>
  <li class="item-5"></li>
</ul>
{{</highlight>}} 


### 属性付き要素

*文法*

{{<highlight javascript>}}
E[attr]
{{</highlight>}}

*例*

例: `p[title]`, `td[colspan=2]`, `span[title=\"Hello\" rel]`   

{{<highlight html>}}
td[colspan=2]
{{</highlight>}} 

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
<td colspan="2"></td>
{{</highlight>}} 
        

### フィルター付き要素

`フィルター` の詳細に関しては、 [Zen Coding Filter Wiki](https://code.google.com/p/zen-coding/wiki/Filters)
をご確認ください。

*文法*

{{<highlight javascript>}}
E|filter
{{</highlight>}}

*例*

例: `p.title|e`   

{{<highlight html>}}
p.title|e
{{</highlight>}} 

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight html>}}
&lt;p class="title"&gt;&lt;/p&gt;
{{</highlight>}} 
        
「 `<` 」 と 「 `>` 」 は、 `&lt;` と `&gt;` に、それぞれ、エンティティー化されます。

### CSS の短縮形

*文法*

{{<highlight javascript>}}
P:V
{{</highlight>}}

*例*

例: `fl:r+d:b+w:300+h:600`   

`tab` キーを押すと、上のコードが、下のように展開されます。

{{<highlight css>}}
float: right;display: block;width: 300px;height: 600px;
{{</highlight>}}   

CSS 短縮形の詳細に関しては、 [Zen Coding CSS Wiki](https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn) をご確認ください。

短縮形で囲む ( CTRL+SHIFT+A )
-----------------------------

{{<warning>}}
2013年4月現在、この機能は、Windows 上でのみ動作します。
{{</warning>}}

この機能では、インデントも自動で付与されるので、プログラミングのスピードも向上します。使用方法を解説します。対象の行を選択するかまたは対象の行にカーソルを置き、`CTRL+SHIFT+A`
を押します。次に、表示された入力ダイアログ上で、Emmet
の短縮形を入力すると、対象の行を囲むように、短縮形が展開されます。次の
HTML コードをご確認ください。

{{<highlight html>}}
<body>
  <div class="lesson">
    <h1>Introduction to Monaca</h1>
    <p>In this page, we will take a brief look at Monaca.</p>
  </div>
</body>
{{</highlight>}} 

`<h1>` を "chapter1" クラスで囲んでみましょう。 `<h1> ~ </h1>`
タグを囲むか、 `<h1> ~ </h1>` タグの中にカーソルをおいて、
`CTRL+SHIFT+A` を押します。入力フォームが表示されるので、Emmet
の短縮形を入力します。ここでは、 `div.chapter1` と入力して `OK`
を押します。結果は、次のようになります。

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

`<h1>` 内のコンテンツだけを選択したり、コンテンツ上にカーソルを置いた場合には、
`<h1>` タグの内側に、 `chapter1` クラスが展開されます。

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

対となるタグを検索する ( 外側に向けて、CTRL+D )
-----------------------------------------------

現在のカーソルが置かれた要素内の、コンテンツ全体を選択します。さらにボタンを押すと、外側に向かって、対となるタグを選択します。

対となるタグを検索する ( 内側に向けて、CTRL+SHIFT+D )
-----------------------------------------------------

現在のカーソルが置かれた要素内の、コンテンツ全体を選択します。さらにボタンを押すと、内側に向かって、対となるタグを選択します。

参考ページ

- [エディターのショートカット一覧](../editor)
- [TypeScript](../type_script)