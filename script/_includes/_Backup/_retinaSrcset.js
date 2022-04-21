  // ++++++++++++++++++++++++++++++++++++++++
  // _retinaSrcset
  // ++++++++++++++++++++++++++++++++++++++++
  $(function () {
    var retinaCheck = window.devicePixelRatio;
    if (retinaCheck >= 2) { // Retinaディスプレイのときを分岐させている
      $('img.js-retina').each(function () {
        var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
        $(this).attr('srcset', retinaimg + " 2x");
      });
    }
  });