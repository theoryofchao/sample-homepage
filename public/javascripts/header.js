$(window).scroll(function(){
  if($(this).scrollTop() > 1) {
    $('header').addClass('sticky');
    $('#logobox').addClass('sticky');
    $('header > nav').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
    $('#logobox').removeClass('sticky');
    $('header > nav').removeClass('sticky');
  }
});