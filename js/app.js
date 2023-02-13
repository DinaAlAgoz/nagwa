var book_id = "26dd5f00-0c75-4367-adea-537ece731385";
var base_bath = "packages/" + book_id + "/Content/";
var nav = [];
var font, font_size, backgroundcolor;

$("#hidden-nav").load(
  "packages/26dd5f00-0c75-4367-adea-537ece731385/Navigation/nav.xhtml #toc",

  function () {
    var link_id, link_href;
    var item = [];

    $("#toc li").each(function (idx, li) {
      var href = $(li).find("a").attr("href");

      nav.push({
        page_number: idx + 1,
        page_id: $(li).find("a").attr("id"),
        chapter_name: href.substring(href.lastIndexOf("/") + 1),
      });
    });

    lastPage = nav[nav.length - 1];
    firstPage = nav[0];
    $("#last-page").html(lastPage["page_number"]);
    load_chapter(nav[0]["chapter_name"]);

    $("#leftbtn").on("click", function () {
      var current_page = parseInt($("#current-page").html());

      var next_page = current_page + 1;

      if (next_page <= lastPage["page_number"]) {
        $("#current-page").html(next_page);
        var element_to_load = nav[next_page - 1];
        load_chapter(element_to_load["chapter_name"]);


    // object.contentDocument.head.appendChild(font);


      }
    });

    $("#rightbtn").on("click", function () {
      var current_page = parseInt($("#current-page").html());
      var previous_page = current_page - 1;

      if (previous_page >= firstPage["page_number"]) {
        $("#current-page").html(previous_page);
        var element_to_load = nav[previous_page - 1];
        load_chapter(element_to_load["chapter_name"]);
      }
    });
  }
);

function load_chapter(chapter_name) {
  $("#book-content").html(
    '<object type="text/html" id="mainData" data="' +
      base_bath +
      chapter_name +
      '" ></object>'
  );
}

/***************************
 * **************** */
var object = document.getElementById("mainData");
$("object").click(function () {
  console.log("ljdbngfkdj");
  $("#bottomnavbar").toggle();
});

$("#firstfont").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent = "body {" + "font-family: NotoNaskhArabic-Bold;" + "}"),
    object.contentDocument.head.appendChild(style);

  font = style;
  console.log(font);
});

$("#secoundfont").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent = "body {" + "font-family:Quran;" + "}"),
    object.contentDocument.head.appendChild(style);
});

$("#lastone").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent = "body {" + "font-family:NotoKufiArabic-Bold;" + "}"),
    object.contentDocument.head.appendChild(style);
});

$("#DarkMode").click(function () {
  // $("body").css("background-color", "#000");

  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent =
    "body {" +
    "color:#fff;" +
    "background-color:#000;" +
    "}" +
    ".blockquote {" +
    "background-color:#111111;" +
    "}"),

    object.contentDocument.head.appendChild(style);
  
  // style = font;
  // console.log(font);
});

$("#white").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent =
    "body {" +
    "color:#000;" +
    "background-color:#fff;" +
    "}" +
    ".blockquote {" +
    "background-color:#f5f5f5;" +
    "}"),
    object.contentDocument.head.appendChild(style);
});

$("#warm").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent =
    "body {" +
    "color:#000;" +
    "background-color:#ffc0cb1f;" +
    "}" +
    ".blockquote {" +
    "background-color:#f2e4c5;" +
    "}"),
    object.contentDocument.head.appendChild(style);
});

$("#fontsmaller").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent = "body {" + "font-size:15px;" + "}"),
    object.contentDocument.head.appendChild(style);
});

$("#fontbigger").click(function () {
  var object = document.getElementById("mainData");
  var style = document.createElement("style");

  (style.textContent = "body {" + "font-size:25px;" + "}"),
    object.contentDocument.head.appendChild(style);
});

$(document).ready(function () {
  $("#settingbtn").click(function () {
    $("#maindropmenu").toggle();
  });
});

$(document).ready(function () {
  $("#moresetting").click(function () {
    $(".fonts").toggle();
  });
});

$(document).ready(function () {
  $("#back").click(function () {
    $(".fonts").toggle();
  });
});
