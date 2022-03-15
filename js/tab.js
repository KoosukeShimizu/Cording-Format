$(function () {
  var tabToggle = $('.tab-toggle .tab-btn');
  var tabCont = $('.tab-contents .tab-item');

  tabToggle.click(function () {
    tabToggle.removeClass('is-active');
    $(this).addClass('is-active')

    tabCont.removeClass('is-active');
    tabCont.eq(tabToggle.index(this)).addClass('is-active');
  });
});


// howto Markup(pug)
// .tab
//   .tab-toggle
//     button.tab-btn ボタン1
//     button.tab-btn.is-active ボタン2
//     button.tab-btn ボタン3

//   .tab-contents
//   .tab-item.is-active アイテム1
//   .tab-item アイテム2
//   .tab-item アイテム3