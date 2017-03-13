'use-strict';
$(() => {
  Controller.init();
  $('a.portfolio-item').on('click', Controller.onClickProject);
});
