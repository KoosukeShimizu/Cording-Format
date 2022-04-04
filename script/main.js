$(function () {
  //グローバルナビゲーション
  //======================
  var navToggle = $('.js-globalNavi-toggle'),
      navTarget = $('.js-globalNavi-body'),
      body = $(document.body);

  navTarget.removeClass('is-open');
  navToggle.removeClass('is-open');

  navToggle.click(function () {
    navTarget.toggleClass('is-open');
    $(this).toggleClass('is-open');
    $('html').toggleClass('is-scroll-off');
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

//スムーススクロール
  //======================
  $('a[href^="#"]').click(function() {
    let speed = 400;
    let type = 'swing';
    let href= $(this).attr("href");
    let target = $(href == "#index" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, type);
    return false;
  });


  //ページトップ
  //======================
  var window_cash = $( window );
  $( '.js-pagetop' ).on( 'click', function() {
    var speed = 600;
    $( 'html, body' ).animate( { scrollTop: 0 }, speed, 'swing' );
    return false;
  });




   //アコーディオン
  //======================
  $(".js-accordion dt").on("click", function() {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle();
    return false;
  });


   //ドロップダウン
  //======================
  $(".js-dropdown-content").hide();
  $(".js-dropdown-toggle").on("click", function () {
    $(this).toggleClass("is-open");
    // $(this).next().toggleClass("is-open");
    $(this).next(".js-dropdown-content").slideToggle();
    return false;
  });


//タブ
  //======================
  $( '.jc-tab' ).on( 'click', function() {
    $( this ).addClass( 'js-active' ).siblings( '.js-active' ).removeClass( 'js-active' );
    var target = $( this ).data( 'target' );
    $( target ).addClass( 'js-active' ).siblings( '.js-active' ).removeClass( 'js-active' );
    return false;
  });

});










