  // // ++++++++++++++++++++++++++++++++++++++++
  // // Drower/hamburgers
  // // ++++++++++++++++++++++++++++++++++++++++
  $(function () {
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

    // $(window).on("scroll", function () {
    //   if ($(this).scrollTop() > 100) {
    //     navTarget.removeClass('is-open');
    //     navToggle.removeClass('is-open');
    //     $('html').removeClass('is-nav-open');
    //   }
    // });


    //階層メニュー
    // $(function () {
    //   $(".list-parent").on("click", function () {
    //     $(this).toggleClass("is-open");
    //     // $(this).next(".list-child").slideToggle();
    //     return false;
    //   });
    // });
  });