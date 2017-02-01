$(document).ready(function() {
  let color = 'white';

  const allBoxes = $('.box')
  .hover(function() {
    $(this).addClass(color);
  })
  .dblclick(function() {
    $(this).removeClass();
  });
  $('#reset').click(function() {
    allBoxes.removeClass();
  });
  $('a').click(function () {
    color = $(this).attr('id');
  });
});
