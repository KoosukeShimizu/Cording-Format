//ページトップ
//======================
let window_cash = $( window );
$( '.js-pagetop' ).on( 'click', function() {
  let speed = 600;
  $( 'html, body' ).animate( { scrollTop: 0 }, speed, 'swing' );
  return false;
});

// var pagetop = $('.js-pagetop');
// pagetop.hide();
// pagetop.slideOut();
// pagetop.fadeOut();
// $(window).on("scroll", function() {
//   if ($(this).scrollTop() > 300) {
//     pagetop.slideDown('fast');
    // pagetop.fadeOut();
    // pagetop.addClass('show');
  // } else {
  //   pagetop.slideUp('fast');
    // pagetop.fadeIn();
    // pagetop.removeClass('show');
  // }

  // scrollHeight = $(document).height();
  // scrollPosition = $(window).height() + $(window).scrollTop();
  // footHeight = $(".l-footer").innerHeight();

  // if ( scrollHeight - scrollPosition  <= footHeight ) {
  //   pagetop.css({
  //     // "display":"block",
  //     "position": "absolute",
  //     "right": "10px",
  //     // "bottom": footHeight + 8 +"px"
  //     "bottom": "100%",
  //   });
  // } else {
  //   pagetop.css({
  //     // "display": "block",
  //     "position":"fixed",
  //     "right": "10px",
  //     "bottom": "0px",
  //   });
  // }



