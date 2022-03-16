  // ++++++++++++++++++++++++++++++++++++++++
  // is-sticky header
  // ++++++++++++++++++++++++++++++++++++++++
$(window).scroll(function () {

    var element = $('.l-header'),
    scroll = $(window).scrollTop(),
    height = element.innerHeight();

    // heightHeader = $('header').innerHeight();
    // heightSub = $('.header-sub').innerHeight();

    // slider = $('.cont-slide-menu');
    // heightSlide = slider.innerHeight();

    // flexCont = $('.ua-sp.ua-portrait .flex-content');
    // heightFlex = flexCont.innerHeight();

    if (scroll > height) {
      element.addClass('is-stick');
      // $('nav').addClass('is-stick');
      // $('nav').css('top', height + 'px');

      // slider.addClass('is-fixed');
      // slider.css('top', height + 'px');

      // flexCont.addClass('is-fixed');
      // flexCont.css('top', heightSlide + height + 'px');

      $('.l-main').css('padding-top', heightFlex + heightSlide + height + 'px');

    } else {
      element.removeClass('is-stick');
      // $('nav').removeClass('is-stick');
      // $('nav').css('top', heightHeader + 'px');

      // slider.removeClass('is-fixed');
      // slider.css('top', heightHeader + 'px');

      // flexCont.removeClass('is-fixed');
      // flexCont.css('top', heightHeader + 'px');

      $('.l-main').css('padding-top', 0 + 'px');
    }
  });