// slick
// $(function () {
//   $('#slick01').slick({
//     //- autoplay:true,
//     vertical: true,
//     verticalSwiping: true,
//     slidesToShow: 3,
//     // centerMode: true,
//     // centerPadding: "100px",
//   });
// });

//swiper
$(function () {
  var mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    // init: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    centeredSlides: true,
    // direction: 'vertical',
  })
});