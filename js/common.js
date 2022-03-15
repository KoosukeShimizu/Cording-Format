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




   //スティッキーヘッダー
  //======================
  $( window ).scroll( function () {
    if( $( window ).scrollTop() > 40 ) {
      // 40px蛻�せ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧�
      $( '#ji-header' ).addClass( 'js-scroll-fixed' );
      $( 'body' ).addClass( 'js-scroll-fixed' );
    } else {
      $( '#ji-header' ).removeClass( 'js-scroll-fixed' );
      $( 'body' ).removeClass( 'js-scroll-fixed' );
    }
  });


   //アコーディオン
  //======================
  $(".js-accordion dt").on("click", function() {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle();
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










