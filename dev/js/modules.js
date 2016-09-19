// hello-bar

$('.hello-bar__close').click(function(){
  $('.hello-bar').hide();
});

// take border bottom of nav in home

var url = window.location.href;
var page = url.split('/').pop();

if(page === 'index.html') {
  $('.nav').css('border-bottom', 'none');
}

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


// Sign-up-2 disclaimer text

$('#sign-up-email').focus(function() {
  $('#disclaimer-email').show();
}).blur(function() {
  $('#disclaimer-email').fadeOut('medium');
});

$('#sign-up-name').focus(function() {
  $('#disclaimer-name').show();
}).blur(function() {
  $('#disclaimer-name').fadeOut('medium');
});

$('#sign-up-password').focus(function() {
  $('#disclaimer-password').show();
}).blur(function() {
  $('#disclaimer-password').fadeOut('medium');
});
