$(document).ready(function(){ 
  //Adaptive functions
$(window).resize(function(event) {
  adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
    var headerNav=$('.header__nav');
  if(w<1025){
    if(!headerNav.hasClass('done')){
      headerNav.addClass('done').prependTo(headerMenu);
    }
  }else{
    if(headerNav.hasClass('done')){
      headerNav.removeClass('done').prependTo($('.header__container'));
    }
  }
};

function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
  adaptive_header(w,h);
}

adaptive_function();
  $('.header-menu__icon').click(function(event) {
  $(this).toggleClass('active');
  $('.header-menu').toggleClass('active');
  if($(this).hasClass('active')){
    $('body').data('scroll',$(window).scrollTop());
    $('.about').addClass('change-height');
    $('.nav__link').click(function() { 
      $('.header-menu').removeClass('active');
      $('.header-menu__icon').removeClass('active');
      $('body').removeClass('lock');
    });
  }
    $('body').toggleClass('lock');
  if(!$(this).hasClass('active')){
    $('body,html').scrollTop(parseInt($('body').data('scroll')));
    $('.about').removeClass('change-height');
  }
  
});

 $('.popup__open-btn').click(function(event){
    $('.popup').fadeIn(400);
    $('body').addClass('lock');
 });
  $('.popup__close-btn').on('click', function(event){
    event.preventDefault();
    $('.popup').fadeOut(400);
    $('body').removeClass('lock');
   });


 });

new Swiper('.slider__wrapper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {

    768 : {
    	slidesPerView: 2,
    	spaceBetween: 36
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});


