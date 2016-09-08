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


//hear-her-story dropdown

$('.more-id').on("click",function(){
  var more =  $(this).attr("id");
  //post code
})

$('#more').on('click', function(){
  $(this).toggleClass('hear-her-story__nav--active');
  $('#more-drop').toggle();
});

// menu dropdown

$('.nav__mobile--menu').on('click', function(){
  $('.nav__mobile--dropdown').show();
});

// menu dropdown close

$('.nav__mobile--dropdown--close').on('click', function(){
  $('.nav__mobile--dropdown').hide();
});
