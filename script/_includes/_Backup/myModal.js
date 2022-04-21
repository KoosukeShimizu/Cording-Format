$(function () {
  $('.js-modal').magnificPopup({
    type: 'inline',
    // mainClass: 'mfp-fade',
    removalDelay: 200,
    preloader: true,
    modal: true,
    //- showCloseBtn: false,
    fixedContentPos: true,
    fixedBgPos: true,
    //- closeOnContentClick: false,
    //- closeOnBgClick: false,
  });
  $(document).on('click', '.modal-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(function () {
  $('.js-lightbox').magnificPopup({
    type: 'image',
    removalDelay: 200,
    preloader: true,
    showCloseBtn: true,
    fixedContentPos: true,
    fixedBgPos: true,
  });
});

// $(function () {
//   $('.js-modal2').magnificPopup({
//     type: 'ajax',
//     // mainClass: 'mfp-fade',
//     removalDelay: 200,
//     preloader: true,
//     modal: true,
//     //- showCloseBtn: false,
//     // fixedContentPos: true,
//     // fixedBgPos: true,
//     //- closeOnContentClick: false,
//     //- closeOnBgClick: false,
//   });
//   $(document).on('click', '.modal-close', function (e) {
//     e.preventDefault();
//     $.magnificPopup.close();
//   });
// });

 //自動発火
//  $(function () {
//    $('.is-auto-view').trigger('click');
//  });

// 自動削除
// $(function () {
  // $(document).on('click', '.is-auto-hide', function () {
//  setTimeout(function () {
//    $('.modal-wrap').stop().animate({
//      opacity: '0'
//    }, 300);
//  }, 1000);
  // setTimeout(function () {
  //   $(".modal-close").trigger("click");
  // }, 1300);
  // setTimeout(function() {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // }, 1300);
  // return false;
  // });
// });


// $(function() {
//   $(".js-modal-video").magnificPopup({
//     type: "iframe",
//     iframe: {
//       patterns: {
//         youtube: {
//           index: "youtube.com",
//           id: "v=",
//           src: "//www.youtube.com/embed/%id%?autoplay=1"
//         }
//       }
//     },
//     disableOn: 300,
//     mainClass: "mfp-fade",
//     removalDelay: 200,
//     preloader: !1,
//     fixedContentPos: !0
//   });
// });