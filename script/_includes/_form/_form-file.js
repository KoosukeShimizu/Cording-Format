// ファイルアップロード
//================
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