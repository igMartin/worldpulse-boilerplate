// hello-bar

$('.hello-bar__close').click(function(){
  $('.hello-bar').hide();
});


// tabs

$('.c-tabs__tab').on('click',function(){
  $(this).addClass('c-tabs__tab--is-active')
  .siblings('.c-tabs__tab')
  .removeClass('c-tabs__tab--is-active')
});
