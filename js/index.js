$(document).ready(function (){


$('a').click(function(event){
  event.preventDefault();
});

$('.readmore').click(function(){
  $('.read').show();
  $('.read').slideDown();
  $('.readmore').hide();
});

$('.readmore').hover(function(){
  $('.arrow').addClass('rotating');
}, function() {
  $('.arrow').removeClass('rotating');

});

$('.readless').click(function(){
  $('.read').hide();
  $('.read').slideUp();
  $('.readmore').show();
})

$('.readless').hover(function() {
  $('.arrow').addClass('rotatingback');
}, function() {
  $('.arrow').removeClass('rotatingback');
});

$('.learnmore').click(function(){
  $('#learnmoretext').show();
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
});



});
