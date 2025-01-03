//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 390) {
    document.body.style.width = "390px";
  } else {
    document.body.style.width = "100%";
  }
});

//drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

$("#js-drawer-content [href]").on("click", function (event) {
  $("#js-drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $(".js-header").height();
  $("body").css("margin-top", height + 10);
});

// headerをスクロールすると、色が変わる
jQuery(window).on("scroll", function () {
  if (jQuery(".header").height() < jQuery(this).scrollTop()) {
    jQuery(".js-header").addClass("change-color");
  } else {
    jQuery(".js-header").removeClass("change-color");
  }
});

//wow
new WOW().init();
