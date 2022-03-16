// 同意ボタン
//================
$(function () {
  $(".js-agree-target").attr("disabled", "disabled");

  $(".js-agree").click(function() {
    if ($(this).prop("checked")) {
      $(".js-agree-target").removeAttr("disabled", "disabled");
    } else {
      $(".js-agree-target").attr("disabled", "disabled");
    }
  });
});


//passwordView
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


//buttonActive
// $(function () {
//   $('.js-lock').prop("disabled", true);
//   // $('form input:required').each(function () {
//   //   $(this).prev("label").addClass("required");
//   // });
//   $('form input:required').change(function () {
//     var flag = true;
//     $('form input:required').each(function (e) {
//       if ($('form input:required').eq(e).val() === "") {
//         flag = false;
//       }
//     });
//     if (flag) {
//       $('.js-lock').prop("disabled", false);
//     }
//     else {
//       $('.js-lock').prop("disabled", true);
//     }
//   });
// });


// radioBranch
// $(function () {
//   $('[name="radio33"]:radio').change(function () {
//     if ($('[id=radio1]').prop('checked')) {
//       $('.text').fadeOut();
//       $('.text01').fadeIn();
//     } else if ($('[id=radio2]').prop('checked')) {
//       $('.text').fadeOut();
//       $('.text02').fadeIn();
//     }
//   });
// });


//inputFile
$(function () {
  var fileToggle = $('.js-inputFile'),
    filePreview = $('.js-inputFile-preview');
  fileToggle.change(function () {
    var file = $(this).prop('files')[0];
    if (!file.type.match('image.*')) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      filePreview.html('<span><img src="' + reader.result + '"/></span>');
    }
    reader.readAsDataURL(file);
  });
});
$(function () {
  var fileToggle = $('.js-inputFile2'),
    filePreview = $('.js-inputFile2-preview');
  fileToggle.change(function () {
    var file = $(this).prop('files')[0];
    if (!file.type.match('image.*')) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      filePreview.html('<span><img src="' + reader.result + '"/></span>');
    }
    reader.readAsDataURL(file);
  });
});
$(function () {
  var fileToggle = $('.js-inputFile3'),
    filePreview = $('.js-inputFile3-preview');
  fileToggle.change(function () {
    var file = $(this).prop('files')[0];
    if (!file.type.match('image.*')) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      filePreview.html('<span><img src="' + reader.result + '"/></span>');
    }
    reader.readAsDataURL(file);
  });
});
$(function () {
  var fileToggle = $('.js-inputFile4'),
    filePreview = $('.js-inputFile4-preview');
  fileToggle.change(function () {
    var file = $(this).prop('files')[0];
    if (!file.type.match('image.*')) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      filePreview.html('<span><img src="' + reader.result + '"/></span>');
    }
    reader.readAsDataURL(file);
  });
});

//autoresize
$(function () {
  var $textarea = $('.js-auto-resize');
  var lineHeight = parseInt($textarea.css('lineHeight'));
  $textarea.on('input', function (e) {
    var lines = ($(this).val() + '\n').match(/\n/g).length;
    $(this).height(lineHeight * lines);
  });
});

