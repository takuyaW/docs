var clicked_classname = "";
var previous_ul = null;

var ImagePreloader = function(arr) {
    var images = arr, count = 0, maxNum = images.length, onSuccess = null;

    ImagePreloader.prototype.add = function(arr) {
      images = images.concat(arr);
    };

    ImagePreloader.prototype.load = function(callback){
        onSuccess = callback;
        _load(count);
    };

    var _load = function(count) {
        var image = new Image();
        //_image.src = _array[_count] + '?' + new Date().getTime();
        image.src = images[count];

        image.onload = function() {
            count++;

            if(maxNum > count) {
                _load(count);
            } else {
                if(typeof onSuccess === 'function') {
                    onSuccess();
                }
            }
        };
    }
};


$(function(){

  var redirectLinks = function(){
    var current_url = location.href;
    console.log("URL: " + current_url);
    if (current_url.indexOf("en/manual/")!= -1 || current_url.indexOf("ja/manual/")!= -1){
      if (current_url.indexOf("development/monaca_ide")!= -1) {
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_ide/manual/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_ide/manual/");
        }
      } else if (current_url.indexOf("development/monaca_cli")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_cli/manual/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_cli/manual/");
        }
      } else if (current_url.indexOf("development/monaca_vs")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_vs/manual/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_vs/manual/");
        }
      } else if (current_url.indexOf("development/monaca_localkit")!= -1){
          if (current_url.indexOf("/en/") != -1) {
            location.replace("https://docs.monaca.io/en/monaca_localkit/manual/");
          } else {
            location.replace("https://docs.monaca.io/ja/monaca_localkit/manual/");
          }

      } else if (current_url.indexOf("debugger")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/debugger/");
        } else {
          location.replace("https://docs.monaca.io/ja/debugger/");
        }
      } else if (current_url.indexOf("backend")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/backend/");
        } else {
          location.replace("https://docs.monaca.io/ja/backend/");
        }
      } else if (current_url.indexOf("/dependencies")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_ide/manual/dependencies/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_ide/manual/dependencies/");
        }
      } else if (current_url.indexOf("/monaca_ci")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_ide/manual/monaca_ci/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_ide/manual/monaca_ci/");
        }
      } else if (current_url.indexOf("/build")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_ide/manual/build/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_ide/manual/build/");
        }
      } else if (current_url.indexOf("/deploy")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/monaca_ide/manual/deploy/");
        } else {
          location.replace("https://docs.monaca.io/ja/monaca_ide/manual/deploy/");
        }
      } else {
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/products_guide/");
        } else {
          location.replace("https://docs.monaca.io/ja/products_guide/");
        }
      }
    } else if (current_url.indexOf("/quick_start/")!= -1){
      if (current_url.indexOf("/quick_start/monaca_intro")!= -1){
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/products_guide/monaca_intro/");
        } else {
          location.replace("https://docs.monaca.io/ja/products_guide/monaca_intro/");
        }
      } else {
        if (current_url.indexOf("/en/") != -1) {
          location.replace("https://docs.monaca.io/en/tutorials/");
        } else {
          location.replace("https://docs.monaca.io/ja/tutorials/");
        }
      }
    }
  };

  redirectLinks();

  new ImagePreloader(["/static/img/common/btn_top.png", "/static/img/common/btn_top_hover.png", "/static/img/common/btn_top_active.png"]).load();

  var highlight = {};
  //Initialize the document version
  $('#v_selector').val(VERSION);

  $(".fancybox").fancybox({
    closeBtn: false,
    openEffect: 'elastic',
    modal: false
    });

  var tweakdocs = function() {
    $("a.external").each(function() {
        if ($(this).attr("href").indexOf("http") != -1) {
          $(this).attr("target", "_blank").addClass("internet-link");
       }
       });
    $(".section img").each(function() {
        if ($(this).css("width") !== "0px") {
          var parent = $(this).parent().get(0);
          if (parent.tagName.toUpperCase() === "A") {
            if (parent.href.indexOf(".png") > 0 || parent.href.indexOf(".jpg") > 0) {
              parent.className += " fancybox";
            }
          }
        }
      });
  };
  tweakdocs();

  var highlighter = function() {
    //console.log(highlight[clicked_classname]);
    if(jQuery.isEmptyObject(highlight)) return;
    var highlight_text = highlight[clicked_classname];
    var keywords = [];
    var index = 0;
    while(true){
       var startIndex = highlight_text.indexOf("<em>", index);
       if(startIndex != -1 ){
        index = startIndex + 1;
        var endIndex = highlight_text.indexOf("</em>", index);
        if(endIndex != -1){
          index = endIndex + 1;
          var word = highlight_text.substring(startIndex + 4, endIndex);
          keywords.push(word);
        }
        else break;
       }
       else break;
    }

    for(var i=0; i<keywords.length; i++)
      $(".body").highlight(keywords[i]);
  }

  var loadLocalTocs = function() {
    var contents_element_aside = document.getElementsByClassName('aside-main')[0];
    if (contents_element_aside) {
      contents_element_aside.style.height = $(window).height()- 190 + "px";
    }

    var table_of_content = $("#table-of-contents")[0];
    var see_also_element = document.getElementsByClassName('admonition seealso')[0];
    if(see_also_element || table_of_content){
      var cur_screen = $(window).width();
      console.log(cur_screen);
      var article_element = $("article.main");

      if (cur_screen > 825)
        article_element.css('padding-right', '200px');
    }

    if(see_also_element) {
      if (table_of_content){
        if(table_of_content.style.height + see_also_element.offsetHeight > $(window).height())
          table_of_content.style.height = $(window).height()- 190 - see_also_element.offsetHeight + "px";

        see_also_element.style.top = table_of_content.offsetHeight + 65 + 'px';
      }
    } else {
      if (table_of_content){
        if(table_of_content.offsetHeight > $(window).height()){
          table_of_content.style.height = $(window).height()- 170 + "px";
        }
      } else {
        //article_element.style = "padding-right: 30px;";
      }
    }
  }

  function customScroll(anchorElement){
    var url = anchorElement.attr('href');
    var ind = url.indexOf("#");
    var hash = "#" + url.substring(ind+1);
    console.log("Anchor Top: ");
    console.log($(hash).offset().top );
    $('html, body').stop().animate({
        scrollTop: $(hash).offset().top - 100
    }, 400);
    return false;
    $('a.scrollup').scrollTop();
  }

  function scrollNav() {
    $('.aside-main a').click(function(){
      customScroll($(this));
    });
    $("article.main a").click(function(){
      customScroll($(this));
    });
    $("div.admonition.seealso a").click(function(){
      customScroll($(this));
    });
  }
  scrollNav();

  var setNavCurrent = function(url) {
    var parser = document.createElement('a');
    parser.href = url;
    url = parser.pathname;

    // Global menu
    var $items = $(".sub-menu-parent");
    $(this).removeClass("current");
    $items.each(function() {
      var id = $(this).attr("id");
      var $subItems = $("ul > li", this);
        $subItems.each(function() {
          var itemUrl = $("a", this).attr("href");
          if (url.endsWith(itemUrl)){
            document.getElementById(id).className += " current";
          }
        })
    })

    // Side menu
    var $items = $(".aside-main ul li");
    $items.removeClass("current");
    $items.each(function() {
      var itemUrl = $("a", this).attr("href");
      if (url == itemUrl) {
        $(this).addClass("current");
      }
    })
  }

  loadLocalTocs();
  setNavCurrent(location.href);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  });

  setInterval(function() { observeSearchValue($('#searchbox').val()); }, 100);

  var request;
  var search = function(query){
    var data = {
      q: query,
      lang: LANG,
      version: VERSION
    };
    if(request){
      //Cancel the previous search request.
      request.abort();
    }
    //Show spinner and hide tree

    var spinner_time = setTimeout(function(){
      $("#spinner").show();
      $('ul.level1').hide();
    }, 300);

    request = $.getJSON("/", data)
    .done(function(data, textStatus, jqXHR) {
      $("nav.aside-main li").each(function() {
        $(this).hide();
      });
      highlight = {};
      clearTimeout(spinner_time);
      // Find matching LIs
     //console.log(data);
     var length = Object.keys(data).length;
     for (url in data) {
        highlight[data[url].classname] = data[url].content[0];
        var el = document.querySelector('.' + data[url].classname);
        if (el) {
          el.style.display = 'block';
          var pe = el.parentElement;
          while (true) {
            if (pe && pe.nodeName.toLowerCase() == "li") {
              pe.style.display = "block";
              pe = pe.parentElement;
            } else if (pe && pe.nodeName.toLowerCase() == "ul") {
              var cl = pe.getAttribute("data-cl");
              show(cl, true);
              pe = pe.parentElement;
            } else {
              break;
            }
          }
        } else {
          console.log("Element not found " + data[url].classname);
          length = length - 1;
        }
      }
      //Hide spinner and show tree
      $("#spinner").hide();
      $('ul.level1').show();

     //var length = Object.keys(data).length;
      var suffix = (LANG === "ja") ? "件の検索結果が見つかりました" : " pages found from Monaca Docs";

      $(".aside-search-result-info").text(length + suffix).slideDown();
    })
    .fail(function(xhr, textStatus) {
      if(textStatus !== 'abort'){
        alert("Search failed!" + textStatus + "-" + xhr);
      }
    })
    .always(function(){
      request = null;
    });
  }

  var timeout;
  $('#searchbox').on('keyup', function(e) {
    var that = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      if ($(that).val() === "") {
        $("nav.aside-main li").each(function() {
          $(this).show();
        });
        return;
      }
      query = $(that).val().trim();
      search(query);
    }, 500);
  });

  $(document).on('click','ul.level2 > li', function(ev) {
    close_expand_side_menu($(this).attr('class'), '2', ev);
    clicked_classname = $(this).attr('class');
  });

  $(document).on('click','ul.level3 > li', function(ev) {
  //$('ul.level3 > li').live('click', function(ev) {
    close_expand_side_menu($(this).attr('class'), '3', ev);
    clicked_classname = $(this).attr('class');
  });

  $(document).on('click','ul.level4 > li', function(ev) {
  //$('ul.level4 > li').live('click', function(ev) {
    close_expand_side_menu($(this).attr('class'), '4', ev);
    clicked_classname = $(this).attr('class');
  });

  $('#v_selector').on('change', function () {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    window.location.href = window.location.origin +"/" + valueSelected + "/" + LANG;
  });

  $('ul.global-submenu li').on('click', function(){
    if(previous_ul !== null) previous_ul.hide();
    var $ul = $("ul.level2 li." + $(this).attr('data-cl') + " ul");

    if(typeof $ul[0] !== 'undefined'){
      if ($ul.css("display") == "none") {
        show($ul.attr('data-cl'));
      } else {
        close($ul.attr('data-cl'));
      }
      previous_ul = $ul;
      $ul[0].parentNode.scrollIntoView();
    }
    else{
      previous_ul = null;
      $("li." + $(this).attr('data-cl'))[0].parentElement.scrollIntoView();
    }

  });

  $("#aside-search-clear").on("click", function() {
    $("#searchbox").val("");
    $("nav.aside-main li").each(function() {
      $(this).show();
    });
    $(".aside-search-result-info").slideUp();
    highlight = {};
  });
});

function show(cl, quick) {
  if (quick) {
    $("ul[data-cl=" + cl + "]").show();
  } else {
    $("ul[data-cl=" + cl + "]").slideDown();
  }
  $("img[data-cl=" + cl +"]").attr("src", "/static/img/common/ico_tree_tri_downward_9px.png");
}

function close(cl) {
  $("ul[data-cl=" + cl + "]").slideUp();
  $("img[data-cl=" + cl + "]").attr("src", "/static/img/common/ico_tree_tri_rightward_9px.png");
}

function close_expand_side_menu(class_name, level, event){
 //when clicking on the current selected list item
  if (class_name.includes('current')){
    class_name = class_name.replace(' current', '');
  }

  var $ul;
  if((class_name == 'en_sampleapp_samples' || class_name == 'ja_sampleapp_samples') && level == 2)
      $ul = $("li." + class_name + " > ul > li." + class_name + " > ul");
  else $ul = $("li." + class_name + " > ul");

  if( typeof $ul[0] !== 'undefined')
  {
    if ($ul.css("display") == "none") {
      show($ul.attr('data-cl'));
    } else {
      close($ul.attr('data-cl'));
    }
  }
  event.stopPropagation();
}

function observeSearchValue(val) {
  if (val == "") {
    $("#aside-search-clear").fadeOut();
    $(".aside-search-result-info").slideUp();
    $('ul.level1').fadeIn();
    highlight = {};
  } else {
    $("#aside-search-clear").fadeIn();
  }
}
