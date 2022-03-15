// $(window).on('load',function(){
//   var url = location.href;// URLの取得
//   var path = location.pathname;// パスの取得
//   var param = location.search;// パラメーターの取得
//   var anc = location.hash;// ページ内アンカーの取得
//   var word = document.URL.match;
//   // if (url == "http://example.com/"){
//   // }
//   // if (path == "/sample/sample.html"){
//   // }
//   // if (param == "?search=123"){
//   // }
//   // if (anc == "#anchor01"){
//   // }
//   // if(document.URL.match('xxxx')) {
//   // }

//   if($('.page_front').length){
//     $('.js_slider-kv').slick({
//       infinite: true,
//       autoplay: true,
//       // centerMode: true,
//       fade:true,
//       slidesToShow:1,
//       autoplaySpeed: 5000,
//       arrows: false,
//       dots: false,
//       // appendArrows: $('.slider_arrows'),
//     });

//     $('.js_slider-bnr').slick({
//       infinite: true,
//       autoplay: true,
//       centerMode: true,
//       variableWidth :true,
//       slidesToShow:1,
//       autoplaySpeed: 5000,
//       arrows: false,
//       dots: false,
//       responsive: [{
//         breakpoint: 1024,
//         settings: {variableWidth :false,}
//       }]
//     });

//     $('.js_slider-video').slick({
//       infinite: true,
//       autoplay: true,
//       centerMode: true,
//       variableWidth :true,
//       slidesToShow:1,
//       autoplaySpeed: 5000,
//       arrows: false,
//       dots: false,
//       // appendArrows: $('.slider_arrows'),
//       responsive: [{
//         breakpoint: 1024,
//         settings: {variableWidth :false,}
//       }]
//     });






//     var slider = "#js_slider2";
//     var toggleItem = "#js_sliderNav2 li";

//     $(toggleItem).each(function(){
//      var index = $(toggleItem).index(this);
//      $(this).attr("data-index",index);
//    });

//     $(slider).on('init',function(slick){
//      var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
//      $(toggleItem+'[data-index="'+index+'"]').addClass("current");
//    });


//     function sliderSetting(){
//       var width = $(window).width();
//       if(width <= 959){
//         $(slider).not('.slick-initialized').slick({
//           arrows: false,
//           slidesToShow:1,
//           pauseOnHover: true,
//           infinite: true,
//           dots:false,
//         });
//       }else{
//         $(slider+'.slick-initialized').slick('unslick');
//       }
//     }
//     sliderSetting();

//     $(window).resize( function() {
//       sliderSetting();
//     });


//     $(toggleItem).on('click',function(){
//       var index = $(this).attr("data-index");
//       $(slider).slick("slickGoTo",index,false);
//       $(slider).slick('slickPause');
//     });

//     $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
//       $(toggleItem).each(function(){
//         $(this).removeClass("current");
//       });
//       $(toggleItem+'[data-index="'+nextSlide+'"]').addClass("current");
//     });


//       $('.js_popup-movie').magnificPopup({
//         type: 'iframe',
//         iframe: {
//           patterns: {
//             youtube: {
//               index: 'youtube.com',
//               id: 'v=',
//               src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
//             }
//           }
//         },
//         disableOn: 300,
//         mainClass: 'mfp-fade',
//         removalDelay: 200,
//         preloader: false,
//         fixedContentPos: true
//       });
//     }




// if($('.page_disco').length||$('.page_schedule').length){
//     // if(word+('discography')||word+('schedule')) {
// //   // +++++++++++++++
// //   // MixItUp Custom
// //   // +++++++++++++++
// // $('.js_mix-wrap').mixitup({
// mixitup('.js_mix-wrap', {
//     // load: {
//     //   sort: 'order:asc'
//     // },
//     // animation: {
//     //   effects: 'fade rotateZ(-180deg)',
//     //   duration: 700
//     // },
//     classNames: {
//       block: 'js_mix-toggle',
//       elementFilter: 'js_mix-fillter',
//       elementSort: 'js_mix-sort'
//     },
//     selectors: {
//       target: '.js_mix-target'
//     }
//   });
// }






// // $(function() {
// //   $('.js_inview-webCm').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_webCm').addClass('active');
// //     // } else {
// //     //   $('.cmt_webCm').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-line').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_line').addClass('active');
// //     // } else {
// //     //   $('.cmt_line').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-howto').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_howto').addClass('active');
// //     // } else {
// //     //   $('.cmt_howto').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-freeplay').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_freeplay').addClass('active');
// //     // } else {
// //     //   $('.cmt_freeplay').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-lowspec').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_lowspec').addClass('active');
// //     // } else {
// //     //   $('.cmt_lowspec').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-champ').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_champ').addClass('active');
// //     // } else {
// //     //   $('.cmt_champ').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-matching').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_matching').addClass('active');
// //     // } else {
// //     //   $('.cmt_matching').removeClass('active');
// //     }
// //   });

// //   $('.js_inview-faq').on('inview', function(event, isInView) {
// //     if (isInView) {
// //       $('.js_inview-cmt').removeClass('active');
// //       $('.cmt_faq').addClass('active');
// //     // } else {
// //     //   $('.cmt_faq').removeClass('active');
// //     }
// //   });
// // });





// // $(function(){
// //   var slider = "#js_slider1";
// //   var toggleItem = "#js_sliderNav1 li";

// //   $(toggleItem).each(function(){
// //    var index = $(toggleItem).index(this);
// //    $(this).attr("data-index",index);
// //  });

// //   $(slider).on('init',function(slick){
// //    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
// //    $(toggleItem+'[data-index="'+index+'"]').addClass("nav_current");
// //  });

// //   $(slider).slick({
// //     autoplay: true,
// //     arrows: false,
// //     fade: true,
// //     // autoplaySpeed: 0,
//   // cssEase: "linear",
// //     pauseOnHover: true,
// //     infinite: true
// //   });
// //   $(toggleItem).on('click',function(){
// //     var index = $(this).attr("data-index");
// //     $(slider).slick("slickGoTo",index,false);
// //     $(slider).slick('slickPause');
// //   });

// //   $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
// //     $(toggleItem).each(function(){
// //       $(this).removeClass("nav_current");
// //     });
// //     $(toggleItem+'[data-index="'+nextSlide+'"]').addClass("nav_current");
// //   });
// // });









// // ++++++++++++++++++++++++++++++++++++++++
// // ポップアップ
// // ++++++++++++++++++++++++++++++++++++++++
// // $(function(){
// //   $('.popup-iframe').magnificPopup({
// //     type: 'iframe',
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });
// // });
// // $(function(){
// //   $('.js_popup-movie').magnificPopup({
// //     type: 'iframe',
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });
// // });

// // $(function(){
// //   $('.js_popup-video1').magnificPopup({
// //     type: 'iframe',
// //     iframe: {
// //       patterns: {
// //         youtube: {
// //           index: 'youtube.com',
// //           id: 'v=',
// //           src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
// //         }
// //       }
// //     },
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });

// //   $('.js_popup-video2').magnificPopup({
// //     type: 'iframe',
// //     iframe: {
// //       patterns: {
// //         youtube: {
// //           index: 'youtube.com',
// //           id: 'v=',
// //           src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
// //         }
// //       }
// //     },
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });
// // });
// // $(function(){
// //   $('.popup-iframe2').magnificPopup({
// //     type: 'iframe',
// //     iframe: {
// //       patterns: {
// //         youtube: {
// //           index: 'youtube.com',
// //           id: 'v=',
// //           src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
// //         }
// //       }
// //     },
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });
// // });
// // $(function(){
// //   $('.popup-iframe3').magnificPopup({
// //     type: 'iframe',
// //     iframe: {
// //       patterns: {
// //         youtube: {
// //           index: 'youtube.com',
// //           id: 'v=',
// //           src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
// //         }
// //       }
// //     },
// //     disableOn: 300,
// //     mainClass: 'mfp-fade',
// //     removalDelay: 200,
// //     preloader: false,
// //     fixedContentPos: true
// //   });
// // });
// //
// });