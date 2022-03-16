  //++++++++++++++++++++++++++++++++++++++++
  // random Count
  // ++++++++++++++++++++++++++++++++++++++++
$(function () {
  var $number = $('#comment_diagnosis_count'),
    $change_number = $('#change_number'),
    $change_number_item = $('.change_number_item'),
    array_number = ['', '3', '2', '1'],
    array_change_number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    random_number = array_number[Math.floor(Math.random() * array_number.length)];
  $number.text(random_number);

  // スマホ メッセージ
  if ($('.js-counter').length) {
    var $msg_number = $('.js-digit-10'),
      $msg_change_number = $('.js-digit-1');
    $msg_number.text(random_number);
  }
  // メッセージアニメーション設定
  // function message_item_animate() {
  //   $('.js-counter').animate({ 'right': '12%' }, 800, function () {
  //     $(this).animate({ 'right': '7.5%' }, 600);
  //   });
  //   setTimeout(message_item_hide, 2000);
  //   function message_item_hide() {
  //     $('.js-counter').animate({ 'right': '10%' }, 800, function () {
  //       $(this).animate({ 'right': '-100%' }, 600);
  //     });
  //   }
  // }

  // 数字の高さ
  var item_height = $change_number_item.height() || 40,
    max_item_height = item_height * $change_number_item.length - item_height;

  // アニメーションスタート
  var animate_start = function () {
    // $number.hide();
    // $number.fadeIn(700);
    var position_num = animate_position_num();
    console.log(position_num);
    $change_number.offset({
      top: 0
    }).delay(100).animate({
      'top': -position_num
    });

    $current_item = position_num / item_height;
    if ($('.js-counter').length) {
      $msg_change_number.text(array_change_number[$current_item]);
    }
    setTimeout(animate_start, 0);
  }
  animate_start();

  var message_item_animate_start = function () {
    message_item_animate();
    setTimeout(message_item_animate_start, 4100);
  }
  setTimeout(message_item_animate_start, 2000);

  // ランダム番号発生
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // 番号位置の計算
  function animate_position_num() {
    var random = getRandomInt(0, 11);
    var random_height = random * item_height;
    console.log(item_height);
    // var now_position_num = $change_number.position().top;
    if (random_height > max_item_height) {
      random_height = random_height - item_height;
    }
    return random_height;
  }
});