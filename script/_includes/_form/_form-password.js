// パスワード表示
//================
$(".password-view").click(function () {
  // iconの切り替え
  $(this).toggleClass("is-view");

  // 入力フォームの取得
  var input = $(this).prev("input");
  // type切替
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});