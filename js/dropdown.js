$(function(){
  $(".js-dropdown").on("click", function() {
    $(this).toggleClass("is-open");
    // $(this).next().slideToggle();
    $(".js-dropdown-target").slideToggle();
    // $(".js-dropdown-target").slideToggle();
    return false;
  });
});
