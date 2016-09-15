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
});

$('#more').on('click', function(){
  $(this).toggleClass('active');
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

$('.nav__mobile--dropdown--close--text').on('click', function(){
  $('.nav__mobile--dropdown').hide();
});


// My Pulse tabs

$(document).ready(function(){
  $('.members').hide();
});

$('#goToStories').on('click', function(){
  $('.members').hide();
  $('.stories').show();
});


$('#goToMembers').on('click', function(){
  $('.members').show();
  $('.stories').hide();
});

// Rangeslider.js

$(document).ready(function() {
  $('input[type="range"]').rangeslider({

    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function() {
    },
  });

  $('output').val($('#range-slider').val());

  $('#range-slider').change(function() {
    $('output').val($('#range-slider').val());
  });
});
