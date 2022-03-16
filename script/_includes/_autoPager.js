$(function() {
  var IScontentItems = ".js-apList-item"; // 取得する要素
  var IScontent = ".js-apList"; // 取得要素を追加するコンテンツ
  var ISlink = ".js-apButton-next"; // 次のページのリンク
  var ISlinkarea = ".js-apButton"; // 次のページのリンクの親要素
  var loadingFlag = false; // 読み込み中はtrueにして、複数回発生しないようにする

  $(window).on("load scroll", function() {
    // 次のページ読み込み中の場合は処理を行わない
    if (!loadingFlag) {
      var winHeight = $(window).height();
      var scrollPos = $(window).scrollTop();
      var linkPos = $(ISlink).offset().top;

      if (winHeight + scrollPos > linkPos) {
        loadingFlag = true;

        // 次のページのリンクを取得して、要素を削除しておく
        var nextPage = $(ISlink).attr("href");
        $(ISlink).remove();
        // 次のページの要素を取得
        $.ajax({
          type: "GET",
          url: nextPage,
          dataType: "html"
        })
          .done(function(data) {
            // 次のページのリンクを取得
            var nextLink = $(data).find(ISlink);
            // コンテンツ要素を取得
            var contentItems = $(data).find(IScontentItems);

            // コンテンツ要素を追加
            $(IScontent).append(contentItems);

            // 次のページがある場合はリンクを追加する
            if (nextLink.length > 0) {
              $(ISlinkarea).append(nextLink);
              loadingFlag = false; // 次のページがない場合はloadingFlagをtrueにしたままにして、処理を発生しないようにする
            }
          })
          .fail(function() {
            alert("ページの取得に失敗しました。");
          });
      }
    }
  });
});
