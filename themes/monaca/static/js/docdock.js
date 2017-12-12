// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
        var sURLVariables = url[1].split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            obj[sParameterName[0]] = sParameterName[1];
        }
        return obj;
    } else {
        return undefined;
    }
};

$(document).ready(function () {
    $('a[rel="lightbox"]').featherlight({
        root: 'section#body'
    });

    // Execute actions on images generated from Markdown pages
    var images = $("div#body-inner img").not(".inline");

    // Wrap image inside a featherlight (to get a full size view in a popup)
    images.wrap(function () {
        var image = $(this);
        if (!image.parent("a").length) {
            return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
        }
    });

    // Change styles, depending on parameters set to the image
    images.each(function (index) {
        var image = $(this);
        var o = getUrlParameter(image[0].src);
        if (typeof o !== "undefined") {
            var h = o["height"];
            var w = o["width"];
            var c = o["classes"];
            image.css({
                width: function () {
                    if (typeof w !== "undefined") {
                        return w;
                    }
                },
                height: function () {
                    if (typeof h !== "undefined") {
                        return h;
                    }
                }
            });
            if (typeof c !== "undefined") {
                var classes = c.split(',');
                $.each(classes, function(i) {
                    image.addClass(classes[i]);
                });
            }
        }
    });

    // Add link button for every
    var text, clip = new Clipboard('.anchor');
    $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function (index, html) {
        var element = $(this);
        var url = document.location.origin + document.location.pathname;
        var link = url + "#" + element[0].id;
        return " <span class='anchor' data-clipboard-text='" + link + "'>" +
            "<i class='fa fa-link fa-lg'></i>" +
            "</span>";
    });

    $(".anchor").on('mouseleave', function (e) {
        $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
    });

    clip.on('success', function (e) {
        e.clearSelection();
        $(e.trigger).attr('aria-label', 'Link copied to clipboard!').addClass('tooltipped tooltipped-s');
    });


    $('#sidebar .category-icon').on('click', function() {
        $( this ).toggleClass("fa-angle-down fa-angle-right") ;
        $( this ).parent().parent().children('ul').toggle() ;
        return false;
    });

    
    $('[data-clear-history-toggle]').on('click', function() {
        sessionStorage.clear();
        location.reload();
        return false;
    });

    $('[data-search-input]').on('input', function(ev) {
        var value = ev.currentTarget.value;
        console.log('search ' + value);
    });

    $('#cordova-version-select').on('input', function(ev) {
        var selectedCordovaVersion = ev.currentTarget.value;

        location.href = location.href.replace(/cordova_[0-9].[0-9]/, 'cordova_' + selectedCordovaVersion);
    });

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    $('#top-bar a:not(:has(img)):not(.btn)').addClass('highlight');
    $('#body-inner a:not(:has(img)):not(.btn)').addClass('highlight');
});

$(window).on('load', function() {
    // store this page in session
    sessionStorage.setItem($('body').data('url'), 1);

    // loop through the sessionStorage and see if something should be marked as visited
    for (var url in sessionStorage) {
        if (sessionStorage.getItem(url) == 1) $('[data-nav-id="' + url + '"]').addClass('visited');
    }
});


$.extend({
    highlight: function(node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match && !$(node.parentNode).hasClass("mermaid")) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
            !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
            !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

// jQuery.fn.unhighlight = function(options) {
//     var settings = {
//         className: 'highlight',
//         element: 'span'
//     };
//     jQuery.extend(settings, options);

//     return this.find(settings.element + "." + settings.className).each(function() {
//         var parent = this.parentNode;
//         parent.replaceChild(this.firstChild, this);
//         parent.normalize();
//     }).end();
// };

// jQuery.fn.highlight = function(words, options) {
//     var settings = {
//         className: 'highlight',
//         element: 'span',
//         caseSensitive: false,
//         wordsOnly: false
//     };
//     jQuery.extend(settings, options);

//     if (!words) { return; }

//     if (words.constructor === String) {
//         words = [words];
//     }
//     words = jQuery.grep(words, function(word, i) {
//         return word != '';
//     });
//     words = jQuery.map(words, function(word, i) {
//         return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
//     });
//     if (words.length == 0) { return this; }
//     ;

//     var flag = settings.caseSensitive ? "" : "i";
//     var pattern = "(" + words.join("|") + ")";
//     if (settings.wordsOnly) {
//         pattern = "\\b" + pattern + "\\b";
//     }
//     var re = new RegExp(pattern, flag);

//     return this.each(function() {
//         jQuery.highlight(this, re, settings.element, settings.className);
//     });
// };
