  // ++++++++++++++++++++++++++++++++++++++++
  // 外部リンクに_blank追加
  // ++++++++++++++++++++++++++++++++++++++++
  jQuery('a[href^=http]')
    .not('[href*="' + location.hostname + '"]')
    .attr({target: "_blank"});
