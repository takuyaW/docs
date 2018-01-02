---
title: Omikuji Fortune Telling App
weight: 140
---

Omikuji is a Japanese word means `random fortunes`. In Monaca, app
development is done using HTML and JavaScript just like webpages.
JavaScript is a scripting language with simple syntax and functions, and
often used for smartphone development compared to other languages.

{{<import pid="5923a1c28034511f6d8a8fe3" title="Omikuji Fortune Telling App">}}

*Tested Environment*: 

- Android 7.0
- iOS 10.1.1

{{<iframeApp src="https://monaca.github.io/project-templates/23-omikuji/www/index.html">}}

## File Components                                           

{{<figure src="/images/sampleapp/omikuji/1.png">}}                                
                                                                                            
| File | Description |
|------|-------------|
| `index.html` | The startup page |               
| `images/*.png` | Image files used in this application |

## HTML Explanation

The contents of the HTML body section are shown below:

{{<highlight html>}}
<div id="hako">
    <img id="saisyo" src="images/omikuji-box.png" />
    <img id="kekka" style="display : none;"/>
</div>
<div id="bottombar">
    <img id="button" src="images/omikuji-btn-hajimeru.png" onclick="omikuji()">
</div>
{{</highlight>}}

There are two `div` tags spanning lines 1 through 4 and lines 5 through
7, with their IDs set to `hako` and `bottombar` , respectively. These
IDs are referenced in the style sheet, which is discussed below.

The `div` tag is used for grouping other tags. For example, the `div`
tag with the ID `hako` contains img tags with the IDs `saisyo` and
`kekka` . `img` tag is used to display an image. These two tags display
images for the omikuji box (displayed immediately after startup) and
omikuji result, respectively.

In order to display the image of the omikuji box when the app starts,
the image is specified using the `src` attribute of the `img` tag with
the ID `saisyo`. In contrast, the `kekka` `img` tag has no `src`
attribute. Instead, a `style="display: none"` attribute has been
provided. This is an example of how to include a style sheet definition
(discussed below) in HTML, and this means that the image will not be
displayed onscreen when the file is loaded. The fortune telling result
image is set and displayed using the JavaScript program discussed below.

Similarly, the `div` tag with the ID `bottombar` also contains an `img`
tag. In addition to the `src` attribute, an `onclick` attribute has also
been provided. The `onclick` attribute contains JavaScript code to be
called when the image is clicked or tapped. In this example, when the
fortune telling start button is tapped, the JavaScript `omikuji()`
function is called. The omikuji() function prepares the fortune telling
results and displays them onscreen.

## Style Sheet Explanation

The style sheet is included in the HTML `head` tag using the `style`
tag. The style sheet code itself is shown below. There are three main
groups of definitions: definitions for the `body` tag, definitions for
the tag with the ID `hako` , and definitions for the tag with the ID
`bottombar`.

{{<highlight css>}}
body {
    background: url("images/omikuji-bg.png") 100% 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}
#hako {
    position: absolute;
    width: 100%;
    top: 10%;
}
#bottombar {
    position: absolute;
    bottom: 30px;
    width: 100%;
}
{{</highlight>}}

The four properties (`background` , `margin` , `padding` , and
`text-align`) are applied to set the styling for the `body` tag. The
`background` property is used to set the background image. In this
example, the image `images/omikuji-bg.png` will be enlarged to fill the
`body` tag, i.e., the entire page. The margin and padding properties are
used to specify the page margins. Since they are both set to `0` in this
example, there are no margins. The `text-align` property is used to set
text alignment. In this example, text is center aligned.

As mentioned in the HTML explanation, `#hako` identifies the `div` tag
used to display the omikuji box and result images, and `#bottombar`
identifies the `div` tag used to display the start button. These style
sheet definitions make use of the `position` , `bottom` , `top` , and
`width` properties. When the `position` property is set to `absolute` ,
positioning is done using absolute coordinates. In this example, both
divs will use coordinates relative to their parent tag, the `body` tag.
The `bottom` and `top` properties set the position from the bottom or
top.

{{<note>}}
  This app refers to the external style sheet <code>components/loader.css</code>. It contains style sheet definitions used by libraries loaded by Monaca plugins. However, it has no significance here since this sample app does not make use of Monaca plugins included in the style sheets.
{{</note>}}

## JavaScript Explanation

The JavaScript code is shown below:

{{<highlight javascript>}}
function omikuji (){
  var dice = Math.floor(Math.random() * 3);
  var image_name;
  if (dice == 0) {
      image_name = "omikuji-daikichi.png";
  } else if  (dice == 1) {
      image_name = "omikuji-chuukichi.png";
  } else {
      image_name = "omikuji-hei.png";
  }

  document.getElementById("saisyo").style["display"] = "none";
  document.getElementById("kekka").src = "images/" + image_name;
  document.getElementById("kekka").style["display"] = "inline";
  document.getElementById("button").src = "images/omikuji-btn-yarinaosu.png";
}
{{</highlight>}}

Lines 1 through 16 contain the definition of the `omikuji` function.
When the start button is tapped, this function will be executed. On line
2, the `Math.floor` and `Math.random` functions are combined to generate
a random number from 0 to 3, which is assigned to the dice variable. On
lines 4 through 11, the variable `image_name` is assigned an image file
name according to the value of the `dice` variable.

On lines 12 through 15, the `document.getElementById` function is used
to modify the style sheet and replace images. This is referred to as DOM
(Document Object Model) manipulation, and is used to dynamically update.
In the following example, the `src` attribute of the element (HTML tag)
with the ID `kekka` is modified.

{{<highlight javascript>}}
document.getElementById("kekka").src = "images/" + image_name;
{{</highlight>}}

Since, as described above, the `image_name` variable is set to the name
of the image file corresponding to the omikuji result, this technique
can be used to display the image for the fortune telling result
onscreen.
