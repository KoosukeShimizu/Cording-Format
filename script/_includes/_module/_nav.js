//グローバルナビゲーション
//======================
var navToggle = $('.js-globalNavi-toggle'),
  navTarget = $('.js-globalNavi-body'),
  // navTargetChild = $('.l-header-globalNavi__item'),
  body = $(document.body);

  navTarget.removeClass('is-open');
  navToggle.removeClass('is-open');
  

navToggle.click(function () {
  navTarget.toggleClass('is-open');
  $(this).toggleClass('is-open');
  $('html').toggleClass('is-scroll-off');
  // navTargetChild.setTransform(1,0,0,1,0,0);
  event.stopPropagation();
});

//ハンバーガー解除
$('.side-close').click(function () {
  navTarget.toggleClass('is-open');
  $(this).toggleClass('is-open');
  $('html').removeClass('is-scroll-off');
  event.stopPropagation();
});

$(window).resize(function () {
  var x = $(window).width();
  var y = 900;
  if (x <= y) {} else {
    navTarget.removeClass('is-open');
    navToggle.removeClass('is-open');
    $('html').removeClass('is-scroll-off');
  }
});