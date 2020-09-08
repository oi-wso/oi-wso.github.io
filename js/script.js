$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		// adaptiveHeight: true,
		slidesToShow: 3,
  slidesToScroll: 1,
  	responsive: [
  		{
  			breakpoint: 993,
  			settings: {
  				arrows: false,
  				slidesToShow: 2
  			}
  		},
  		{
  			breakpoint: 768,
  			settings: {
  				arrows: false,
  				slidesToShow: 1
  			}
  		}
  	]

	});

  function ibg(){
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}
ibg();

  $('.goto').click(function() {
    var el=$(this).attr('href').replace('#','');
    var offset=0;
  $('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});

  return false;
});



$(window).resize(function(event) {
	var h=$(window).outerHeight();
	$('.mainblock').css('min-height',h);
});

$(window).scroll(function(event) {
	var s=0-$(this).scrollTop()/2;
	$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
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

  //E-mail Ajax Send
  $(".popup-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});