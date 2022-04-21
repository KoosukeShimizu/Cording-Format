// 同意ボタン
//================
$(".js-agree-target").attr("disabled", "disabled");

$(".js-agree").click(function() {
  if ($(this).prop("checked")) {
    $(".js-agree-target").removeAttr("disabled", "disabled");
  } else {
    $(".js-agree-target").attr("disabled", "disabled");
  }
});