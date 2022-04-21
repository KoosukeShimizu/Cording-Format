  //++++++++++++++++++++++++++++++++++++++++
  // fix header
  // ++++++++++++++++++++++++++++++++++++++++
  $(function() {
    var $win = $(window),
    // $main = $('.l-content'),
    $fixedCont = $('header'),
    fixedContHeight = $fixedCont.outerHeight(),
    fixedContPos = $fixedCont.offset().top,
    fixedClass = 'is-stick';

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > fixedContPos ) {
        $fixedCont.addClass(fixedClass);
        // $main.css('margin-top', fixedContHeight);
      } else {
        $fixedCont.removeClass(fixedClass);
        // $main.css('margin-top', '0');
      }
    });
  });