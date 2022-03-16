  // ++++++++++++++++++++++++++++++++++++++++
  // content height setting
  // ++++++++++++++++++++++++++++++++++++++++
  $(window).on('load resize', function(){
    // var wW = $(window).innerWidth();
    var windowH = $(window).innerHeight();
    var footerH = $('.l-footer').innerHeight();
    var headerH = $('.l-header').innerHeight();
    // $('l-main').css('min-height',windowH-headerH-footerH+'px');
    $('.l-main').css('min-height',windowH-footerH-headerH+'px');
    // $('.main').css('padding-top',headerH+ 10 +'px');

    // is_fullpage
    // +++++++++++
    // if ( wH > 500 ) {
    //   $('main').css('min-height',wH+'px');
    //   $('main').css('height',wH+'px');
    // } else {}
    // $('.fullpage').css('width',wW+'px');
    // $('main').css('height',wH+'px');
    // $('.fullpage').css('width',wW+'px');
    // $('div.slick-slide').css('width',wW+'px');
    // $('header').css('margin-top',wH-headerH+'px');
  });
