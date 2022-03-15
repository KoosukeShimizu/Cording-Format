$(function () {
  $(window).load(function () {
    var swiper = new Swiper(".ua_pc .js_swiper-menu", {
      slidesPerView: 28,
      slidesPerGroup: 14,
      // centeredSlides: true, // センターモード
      touchRatio: 1.5, // スワイプのしきい値
      iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
      resistance: false, // 最初と最後のスライドでバウンスする
      resizeReInit: false, // ウインドウリサイズ時に再設定
      observer: false, // スライド設定後のスタイル変更時の不具合解消
      observeParents: false, // スライドの親要素のobserver
      resistanceRatio: 0.0, // バウンスの抵抗値
      loop: true,
      // loopAdditionalSlides: 10,
      // touchAngle: 95,
      // width:70,

      breakpoints: {
        420: {
          slidesPerView: 6,
          slidesPerGroup: 2
        }, //70*6
        560: {
          slidesPerView: 7,
          slidesPerGroup: 2,
        }, //70*8
        700: {
          slidesPerView: 9,
          slidesPerGroup: 4
        }, //70*10
        840: {
          slidesPerView: 11,
          slidesPerGroup: 5
        }, //70*12
        980: {
          slidesPerView: 13,
          slidesPerGroup: 6
        }, //70*14
        1120: {
          slidesPerView: 15,
          slidesPerGroup: 7
        }, //70*16
        1260: {
          slidesPerView: 17,
          slidesPerGroup: 8
        }, //70*18
        1400: {
          slidesPerView: 19,
          slidesPerGroup: 9
        }, //70*20
        1540: {
          slidesPerView: 21,
          slidesPerGroup: 10
        }, //70*22
        1680: {
          slidesPerView: 23,
          slidesPerGroup: 11
        }, //70*24
        1820: {
          slidesPerView: 25,
          slidesPerGroup: 12
        }, //70*26
        1960: {
          slidesPerView: 27,
          slidesPerGroup: 13
        } //70*28
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });
}, false);
// $(function() {
//   $(window).load(function() {
//     var swiper = new Swiper(".ua_pc .js_swiper-menu", {
//       // slidesPerView: 28,
//       // slidesPerGroup: 14,
//       // centeredSlides: true, // センターモード
//       // freeMode: true, // フリースライド設定
//       // freeModeSticky: true, // freeModeで直近の位置にセット
//       // freeModeMomentum: true, // freeModeでの慣性スクロールの有効
//       // freeModeMomentumRatio: 0.5, // freeModeでの慣性スクロールの距離
//       // freeModeMomentumVelocityRatio: 2, // freeModeでの慣性スクロールの速度
//       // freeModeMomentumBounce: false,
//       touchRatio: 1.5, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       resistance: false, // 最初と最後のスライドでバウンスする
//       resizeReInit: false, // ウインドウリサイズ時に再設定
//       observer: false, // スライド設定後のスタイル変更時の不具合解消
//       observeParents: false, // スライドの親要素のobserver
//       resistanceRatio: 0.0, // バウンスの抵抗値
//       // loop: true,
//       // loopAdditionalSlides: 10,
//       // touchAngle: 95,
//       // width:70,

//       breakpoints: {
//         420: {
//           slidesPerView: 5,
//           slidesPerGroup: 2
//         }, //70*6
//         560: {
//           slidesPerView: 7,
//           slidesPerGroup: 3
//         }, //70*8
//         700: {
//           slidesPerView: 9,
//           slidesPerGroup: 4
//         }, //70*10
//         840: {
//           slidesPerView: 11,
//           slidesPerGroup: 5
//         }, //70*12
//         980: {
//           slidesPerView: 13,
//           slidesPerGroup: 6
//         }, //70*14
//         1120: {
//           slidesPerView: 15,
//           slidesPerGroup: 7
//         }, //70*16
//         1260: {
//           slidesPerView: 17,
//           slidesPerGroup: 8
//         }, //70*18
//         1400: {
//           slidesPerView: 19,
//           slidesPerGroup: 9
//         }, //70*20
//         1540: {
//           slidesPerView: 21,
//           slidesPerGroup: 10
//         }, //70*22
//         1680: {
//           slidesPerView: 23,
//           slidesPerGroup: 11
//         }, //70*24
//         1820: {
//           slidesPerView: 25,
//           slidesPerGroup: 12
//         }, //70*26
//         1960: {
//           slidesPerView: 27,
//           slidesPerGroup: 13
//         } //70*28
//       },

//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//       }
//     });
//   });
// }, false);






$(function () {
  $(window).load(function () {
    var swiper = new Swiper('.ua_sp .js_swiper-menu', {
      // slidesPerView: 6,
      // slidesPerGroup: 3,
      // centeredSlides: true, // センターモード
      touchRatio: 1.5, // スワイプのしきい値
      iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
      resistance: false, // 最初と最後のスライドでバウンスする
      resizeReInit: false, // ウインドウリサイズ時に再設定
      observer: false, // スライド設定後のスタイル変更時の不具合解消
      observeParents: false, // スライドの親要素のobserver
      resistanceRatio: 0.0, // バウンスの抵抗値
      loop: true,
      // width:60,
      // loopAdditionalSlides: 10,
      // touchAngle: 95,

      breakpoints: {
        560: {
          slidesPerView: 6,
          slidesPerGroup: 3,
        }, //70*8
        700: {
          slidesPerView: 8,
          slidesPerGroup: 4,
        }, //70*10
        840: {
          slidesPerView: 10,
          slidesPerGroup: 5,
        }, //70*12
        980: {
          slidesPerView: 12,
          slidesPerGroup: 6,
        }, //70*14
        1120: {
          slidesPerView: 14,
          slidesPerGroup: 7,
        }, //70*16
        1260: {
          slidesPerView: 16,
          slidesPerGroup: 8,
        }, //70*18
        1400: {
          slidesPerView: 18,
          slidesPerGroup: 9,
        }, //70*20
        // 1540: {
        //   slidesPerView: 20,
        //   slidesPerGroup: 10,
        // }, //70*22
        // 1680: {
        //   slidesPerView: 22,
        //   slidesPerGroup: 11,
        // }, //70*24
        // 1820: {
        //   slidesPerView: 24,
        //   slidesPerGroup: 12,
        // }, //70*26
        // 1960: {
        //   slidesPerView: 26,
        //   slidesPerGroup: 13,
        // }, //70*28
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
}, false);

// $(function () {
//   $(window).load(function () {
//     var swiper = new Swiper('.ua_sp .js_swiper-menu', {
//       slidesPerView: 28,
//       slidesPerGroup: 14,
//       centeredSlides: true, // センターモード
//       // freeMode: true, // フリースライド設定
//       // freeModeSticky: true, // freeModeで直近の位置にセット
//       // freeModeMomentum: true, // freeModeでの慣性スクロールの有効
//       // freeModeMomentumRatio: 0.5, // freeModeでの慣性スクロールの距離
//       // freeModeMomentumVelocityRatio: 2, // freeModeでの慣性スクロールの速度
//       // freeModeMomentumBounce: false,
//       touchRatio: 1.5, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       resistance: false, // 最初と最後のスライドでバウンスする
//       resizeReInit: false, // ウインドウリサイズ時に再設定
//       observer: false, // スライド設定後のスタイル変更時の不具合解消
//       observeParents: false, // スライドの親要素のobserver
//       resistanceRatio: 0.0, // バウンスの抵抗値
//       loop: true,
//       // loopAdditionalSlides: 10,
//       // touchAngle: 95,

//       breakpoints: {
//         560: {
//           slidesPerView: 6,
//           slidesPerGroup: 3,
//         }, //70*8
//         700: {
//           slidesPerView: 8,
//           slidesPerGroup: 4,
//         }, //70*10
//         840: {
//           slidesPerView: 10,
//           slidesPerGroup: 5,
//         }, //70*12
//         980: {
//           slidesPerView: 12,
//           slidesPerGroup: 6,
//         }, //70*14
//         1120: {
//           slidesPerView: 14,
//           slidesPerGroup: 7,
//         }, //70*16
//         1260: {
//           slidesPerView: 16,
//           slidesPerGroup: 8,
//         }, //70*18
//         1400: {
//           slidesPerView: 18,
//           slidesPerGroup: 9,
//         }, //70*20
//         1540: {
//           slidesPerView: 20,
//           slidesPerGroup: 10,
//         }, //70*22
//         1680: {
//           slidesPerView: 22,
//           slidesPerGroup: 11,
//         }, //70*24
//         1820: {
//           slidesPerView: 24,
//           slidesPerGroup: 12,
//         }, //70*26
//         1960: {
//           slidesPerView: 26,
//           slidesPerGroup: 13,
//         }, //70*28
//       },

//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   });
// }, false);

// $(function () {
//   $(window).load(function () {
//     var swiper = new Swiper('.js_swiper-menu', {
//       slidesPerView: 28,
//       slidesPerGroup: 14,
//       centeredSlides: true, // センターモード
//       // freeMode: true, // フリースライド設定
//       // freeModeSticky: true, // freeModeで直近の位置にセット
//       // freeModeMomentum: true, // freeModeでの慣性スクロールの有効
//       // freeModeMomentumRatio: 0.5, // freeModeでの慣性スクロールの距離
//       // freeModeMomentumVelocityRatio: 2, // freeModeでの慣性スクロールの速度
//       // freeModeMomentumBounce: false,
//       touchRatio: 1.5, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       resistance: false, // 最初と最後のスライドでバウンスする
//       resizeReInit: false, // ウインドウリサイズ時に再設定
//       observer: false, // スライド設定後のスタイル変更時の不具合解消
//       observeParents: false, // スライドの親要素のobserver
//       resistanceRatio: 0.0, // バウンスの抵抗値
//       loop: true,
//       loopAdditionalSlides: 10,
//       // touchAngle: 95,

//       breakpoints: {
//         560: {
//           slidesPerView: 6,
//           slidesPerGroup: 3,
//         }, //70*8
//         700: {
//           slidesPerView: 8,
//           slidesPerGroup: 4,
//         }, //70*10
//         840: {
//           slidesPerView: 10,
//           slidesPerGroup: 5,
//         }, //70*12
//         980: {
//           slidesPerView: 12,
//           slidesPerGroup: 6,
//         }, //70*14
//         1120: {
//           slidesPerView: 14,
//           slidesPerGroup: 7,
//         }, //70*16
//         1260: {
//           slidesPerView: 16,
//           slidesPerGroup: 8,
//         }, //70*18
//         1400: {
//           slidesPerView: 18,
//           slidesPerGroup: 9,
//         }, //70*20
//         1540: {
//           slidesPerView: 20,
//           slidesPerGroup: 10,
//         }, //70*22
//         1680: {
//           slidesPerView: 22,
//           slidesPerGroup: 11,
//         }, //70*24
//         1820: {
//           slidesPerView: 24,
//           slidesPerGroup: 12,
//         }, //70*26
//         1960: {
//           slidesPerView: 26,
//           slidesPerGroup: 13,
//         }, //70*28
//       },

//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   });
// }, false);



// $(function () {
//   var swiper;
//   $(window).load(function () {
//     swiper = new Swiper('.js_swiper-hero', {
//       slidesPerView: 'auto',
//       centeredSlides: true,
//       touchRatio: 1.0, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       resistance: false, // 最初と最後のスライドでバウンスする
//       // observer: true, // スライド設定後のスタイル変更時の不具合解消
//       resistanceRatio: 0.0, // バウンスの抵抗値
//       loop: true,
//       // loopedSlides: 1, //ループ時のクローンの数
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//       },
//     });
//   });
// }, false);

$(function () {
  $(window).load(function () {
    var swiper = new Swiper('.js_swiper-hero', {
      slidesPerView: 'auto',
      centeredSlides: true,
      touchRatio: 1.5, // スワイプのしきい値
      iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
      resistance: false, // 最初と最後のスライドでバウンスする
      // observer: true, // スライド設定後のスタイル変更時の不具合解消
      resistanceRatio: 0.0, // バウンスの抵抗値
      loop: true,
      // loopedSlides: 1, //ループ時のクローンの数
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });
  });
}, false);


// $(function () {
//   var swiper;
//   $(window).load(function () {
//     swiper = new Swiper('.ua_pcs .js_swiper-video', {
//       width: 180, // レスポンシブなくなる注意
//       // speed: 400,
//       slidesPerView: 'auto',
//       // slidesPerView: 3,
//       spaceBetween: 10, // マージン
//       slidesOffsetBefore: 10, //スライダー頭出し
//       slidesOffsetAfter: 10,
//       freeMode: true, // フリースライド設定
//       freeModeSticky: true, // freeModeで直近の位置にセット
//       freeModeMomentum: true, // freeModeでの慣性スクロールの有効
//       freeModeMomentumRatio: 0.5, // freeModeでの慣性スクロールの距離
//       freeModeMomentumVelocityRatio: 2, // freeModeでの慣性スクロールの速度
//       touchRatio: 1.0, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       // slideToClickedSlide: true, // クリックでその要素をactiveにする
//       resistance: false, // 最初と最後のスライドでバウンスする
//       observer: true, // スライド設定後のスタイル変更時の不具合解消
//       resistanceRatio: 0.0, // バウンスの抵抗値

//       // breakpoints: {
//       //   // 490: { slidesPerView: 2.5 },//70*8
//       //   630: { slidesPerView: 2.5 },//70*8
//       //   770: { slidesPerView: 3.5 },//70*8
//       //   910: { slidesPerView: 4.5 },//70*8
//       //   1050: { slidesPerView: 5.5 },//70*8
//       //   1190: { slidesPerView: 6.5 },//70*8
//       //   1330: { slidesPerView: 7.5 },//70*8
//       //   1470: { slidesPerView: 8.5 },//70*8
//       //   1610: { slidesPerView: 9.5 },//70*8
//       //   1750: { slidesPerView: 10.5 },//70*8
//       //   1890: { slidesPerView: 11.5 },//70*8
//       //   2030: { slidesPerView: 12.5 },//70*8
//       // },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   });
// });







/*スライダー*/
$(function () {
  windowwidth = $(window).width();
  windowheight = $(window).height();
  setSlider()
  /*adjust header*/
  // adjustHeader()
  // $('.idx .recommend .slider').bind('touchstart', function(){
  // 	clearTimer()
  // })
});
//スライダー初期設定
function setSlider() {
  $('.carousel .controls a').off('click')
  $('.carousel').each(function () {
    //class~sliderをセット
    $(this).find('ul').addClass('slider')
    // if ($(this).find('.ranking').size() || $(this).find('.topics').size()) {
    //   $(this).find('ul').parent('div').addClass('slider')
    // } else {
    //   $(this).find('ul').addClass('slider')
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
      $('<div class="controls"><a class="prev disable"></a><a class="next"></a></div>').appendTo($(this).find('.slider').parent())
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





























// $(function () {
//   var swiper;
//   $(window).load(function () {
//     swiper = new Swiper('.swiper-container2', {
//       width: 240, // レスポンシブなくなる注意
//       speed: 400,
//       spaceBetween: 20, // マージン
//       slidesOffsetBefore: 20, //スライダー頭出し
//       slidesOffsetAfter: 10,
//       //- slidesPerView: 3, //
//       //- centeredSlides: true, // センターモード
//       freeMode: true, // フリースライド設定
//       freeModeSticky: true, // freeModeで直近の位置にセット
//       freeModeMomentum: true, // freeModeでの慣性スクロールの有効
//       freeModeMomentumRatio: 0.5, // freeModeでの慣性スクロールの距離
//       freeModeMomentumVelocityRatio: 2, // freeModeでの慣性スクロールの速度
//       //- freeModeMomentumBounce: false,
//       touchRatio: 1.0, // スワイプのしきい値
//       iOSEdgeSwipeDetection: true, // iOSのスワイプイベントを有効
//       slideToClickedSlide: true, // クリックでその要素をactiveにする
//       resistance: false, // 最初と最後のスライドでバウンスする
//       // resizeReInit: true, // ウインドウリサイズ時に再設定
//       observer: true, // スライド設定後のスタイル変更時の不具合解消
//       // observeParents: true, // スライドの親要素のobserver
//       resistanceRatio: 0.0, // バウンスの抵抗値
//       // hashnav: true, // ハッシュの有効化
//       watchOverflow: true, // スライドの数が少ないときスライダー解除

//       //- loop:true,
//       //- loopedSlides: 5, //ループ時のクローンの数
//       //- initialSlide: 0, //最初に表示させるスライド
//       breakpoints: {
//         //- // when window width is <= 480px
//         //- 480: {
//         //-   slidesPerView: 2,
//         //-   spaceBetween: 20
//         //- },
//         // when window width is <= 640px
//         480: {
//           width: 140, // レスポンシブなくなる注意
//           spaceBetween: 10, // マージン
//           slidesOffsetBefore: 10, //スライダー頭出し
//         }
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//       },
//       //- slidesPerView: 1,
//       //- on: {
//       //-     slideChange: function () {
//       //-       console.log('swiper slideChange');
//       //-     },
//       //- }
//     });
//   });
// });

$(function () {
  $('.js_modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    fixedContentPos: true,
    fixedContentPos:true,
  });
  $(document).on('click', '.js_modal-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(document).ready(function () {
  $('.text_marquee').marquee({
    // duration: 10000,
    // //gap in pixels between the tickers
    // gap: 50,
    // //time in milliseconds before the marquee will start animating
    // delayBeforeStart: 0,
    // //'left' or 'right'
    // direction: 'left',
    // //true or false - should the marquee be duplicated to show an effect of continues flow
    // duplicated: true
});
});





$('.js_slide-hero').slick({
  dots: true,
  // lazyLoad: 'ondemand', // or 'progressive'
  centerMode: true,
  variableWidth: true,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  // initialSlide: 1,
  // mobileFirst: true,
  // touchMove:true,
  // loop: true,
  // slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // centerPadding: '40px',
  prevArrow: '<button class="js_slide-prev"><span>PREV</span></button>',
  nextArrow: '<button class="js_slide-next"><span>NEXT</span></button>',
});