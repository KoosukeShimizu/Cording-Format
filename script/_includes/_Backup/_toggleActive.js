  // // ++++++++++++++++++++++++++++++++++++++++
  // // toggle Active
  // // ++++++++++++++++++++++++++++++++++++++++
  $(function () {
    var target = $('.js-toggleActive');
    target.click(function () {
      $(this).toggleClass('is-active');
      event.stopPropagation();
    });
  });
   $(function () {
     var target = $('.js-addActive');
     target.click(function () {
       $(this).addClass('is-active');
       event.stopPropagation();
     });
   });