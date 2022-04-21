//タブ
//======================
var tabToggle = $('.js-tab-toggle .tab-btn');
var tabCont = $('.js-tab-contents .tab-item');

tabToggle.click(function () {
  tabToggle.removeClass('is-active');
  $(this).addClass('is-active')

  tabCont.removeClass('is-active');
  tabCont.eq(tabToggle.index(this)).addClass('is-active');
  return false;
});
