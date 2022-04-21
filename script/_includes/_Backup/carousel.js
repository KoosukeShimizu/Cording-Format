/*スライダー*/
$(function () {
  windowwidth = $(window).width();
  windowheight = $(window).height();
  setSlider()
});

//スライダー初期設定
function setSlider() {
  $('.carousel .controls a').off('click')
  $('.carousel').each(function () {
    //class~sliderをセット
    // if ($(this).find('.ranking').size() || $(this).find('.topics').size()) {
    //   $(this).find('ul').parent('div').addClass('slider')
    // } else {
    $(this).find('ul').addClass('slider')
    // }
    //ウィンドウ幅より数があったら
    if ($('body.ua_sp').size()) {
      //$(this).find('.listinner').animate({'scrollLeft':0},200)
    } else {
      $(this).find('.slider').animate({
        'marginLeft': 0
      }, 200)
    }
    $(this).find('.controls').remove()
    if (windowwidth / $(this).find('.slider').children().eq(0).outerWidth(true) < $(this).find('.slider').children().length) {
      $('<div class="controls"><a class="prev disable">前へ</a><a class="next">次へ</a></div>').appendTo($(this).find('.slider').parent())
    }
  })

  $('.carousel .controls a').on('click', function () {
    prevnext($(this));
  })
  if ($('body.idx').size()) {
    rtgt = $('.carousel .recommend .listinner')
    rt = Math.floor(rtgt.width() / rtgt.find('li').width());
    rc = 0;
    clearTimer()
    timerArr.push(
      timer = setInterval(function () {
        rc++;
        if (
          rc * rt < rtgt.find('li').size()
        ) {
          prevnext(rtgt.find('a.next'), 0)
        } else {
          rc = 0;
          if ($('body.ua_sp').size()) {
            rtgt.animate({
              'scrollLeft': 0
            }, 0);
          } else {
            rtgt.find('.slider').animate({
              'marginLeft': 0
            }, 0, 'swing');
          }
          rtgt.find('a.next').removeClass('disable')
          rtgt.find('a.prev').addClass('disable')
        }
      }, 5000)
    )
  }
}
//カルーセル前へ次へ
function prevnext(tgt, flag) {
  rou
  if (flag != 0 && tgt.parents('.recommend').size()) {
    clearTimer()
  }
  if (tgt.hasClass('prev')) {
    dir = 1
  } else if (tgt.hasClass('next')) {
    dir = -1
  }
  var outerWt = tgt.parents().hasClass('ranking') ? 1 : 0;
  var thisleft = $('body.ua_sp').size() ?
    parseInt(tgt.parents('.programlist').find('.listinner').scrollLeft(), 10) :
    parseInt(tgt.parents('.programlist').find('.slider').css('marginLeft'), 10);
  len = calcDist(
    tgt.parents('.programlist').find('.slider').children().length,
    tgt.parents('.programlist').find('.slider').children().eq(outerWt).outerWidth(true),
    thisleft,
    dir,
    parseInt(tgt.parents('.listinner').css('padding-left')),
    parseInt(tgt.parents('.programlist').find('.slider').children().eq(outerWt).css('padding-right')),
    tgt
  )

  if ($('body.ua_sp').size()) {
    tgt.parent().parent().parent().find('.listinner').animate({
      'scrollLeft': 1 * len
    }, 400);
  } else {
    tgt.parent().parent().find('.slider').animate({
      'marginLeft': -1 * len
    }, 400, 'swing');
  }
  return false;
}
var timerArr = new Array();

function clearTimer() {
  $.each(timerArr, function (i) {
    clearInterval(timerArr.shift())
  })
}

//スライド距離
function calcDist(n, w, P, d, l, m, tgt) {
  t = Math.floor(tgt.parents('.programlist').width() / w);
  p = Math.ceil(Math.abs(P / w));
  a = parseInt(p, 10) + (t * d * -1);
  _lastwidth = tgt.parents('.programlist').width() - t * w - l * 2 + m;
  //n=LIの数、w=LI幅、P=現在位置、d=方向、l=枠の左余白、m=LIの右余白、tgt=該当slider
  //p=先頭番号、a=先頭相対番号、t=表示できる数、_lastwidth＝最終add右
  //console.log(tgt.parents('.programlist').width(),w,P,d,l,m,_lastwidth,p,n,a,t)
  if (d == -1) {
    mr = n - a <= t ? w * (n - t) - _lastwidth : w * a;
  } else {
    mr = a < 1 ? 0 : w * a;
  }
  tgt.parent().find('a').removeClass('disable')
  if (a <= 0) {
    tgt.parent().find('.prev').addClass('disable')
  }
  if (a + t >= n) {
    tgt.parent().find('.next').addClass('disable')
  }
  return mr;
}
