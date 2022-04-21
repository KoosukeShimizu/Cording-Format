  //++++++++++++++++++++++++++++++++++++++++
  // fix footer
  // ++++++++++++++++++++++++++++++++++++++++
  $(function(){
    var target = $('.floatBox');
     target.hide()
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
        target.slideDown("fast");
      } else {
        target.slideUp("fast");
      }

      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $(".l-footer").innerHeight();

      if ( scrollHeight - scrollPosition  <= footHeight ) {
        target.css({
          "position":"absolute",
          "bottom": footHeight
          // "bottom": "0px"
        });
      } else {
        target.css({
          "position":"fixed",
          "bottom": "0px"
        });
      }
    });
  });



  $(function(){
    var pos = 0;
    var target = $('.floatBox');
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $(".l-footer").innerHeight();
  
    $(window).on('scroll', function(){
      if($(this).scrollTop() < pos || $(this).scrollTop() < 100){
        // target.slideUp("fast");
        target.removeClass("is-view");
      }else{
        // target.slideDown("fast");
        target.addClass("is-view");
      }
  
        if ( scrollHeight - scrollPosition  <= footHeight ) {
          target.css({
            "position":"absolute",
            "bottom": footHeight
            // "bottom": "0px"
          });
          // target.addClass("is-view");
        } else {
          target.css({
            "position":"fixed",
            "bottom": "0px"
          });
        }
      pos = $(this).scrollTop();
    });
  });