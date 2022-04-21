  // ++++++++++++++++++++++++++++++++++++++++
  // tapイベントに.hover追加
  // ++++++++++++++++++++++++++++++++++++++++
  $('a, input[type="button"], input[type="submit"], button, .touch-hover, [class*="btn"], #js_accordion dt')
    .on('mouseover', function () {
      $(this).addClass('is-hover');
    }).on('mouseout', function () {
      $(this).removeClass('is-hover');
    }).on('touchstart', function () {
      $(this).addClass('is-hover');
    }).on('touchend', function () {
      $(this).removeClass('is-hover');
    });
