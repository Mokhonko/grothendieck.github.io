$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    arrows: false,
    horizontal: true,   
    autoplay: 2000
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});
