'use-strict';
$(function() {
  Controller.init();
  $('a.portfolio-item').on('click', Controller.onClickProject);
});
