  // ++++++++++++++++++++++++++++++++++++++++
  // smooth scroll
  // ++++++++++++++++++++++++++++++++++++++++
  $('.noscroll,.tab-toggle a').click(function (e) {
    e.preventDefault();
  });
  $('a[href^=#]' + 'a:not(.noscroll,.tab-toggle a,.modal-toggle,.modal-close,.modal-change)').click(function () {
    var hH = $("header").innerHeight();
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href === "#" || href === "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position - hH
    }, speed, 'swing'); //easeInOutCubic
    return false;
  });