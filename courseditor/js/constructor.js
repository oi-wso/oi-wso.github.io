//Анимация заголовков
function titFunc(elem) {
	elem.classList.add("active");
};

gsap.utils.toArray(".title-anim").forEach(elem => {
	ScrollTrigger.create({
		trigger: elem,
		start: "bottom center",
		end: 'bottom bottom ',
		onEnter: function () { titFunc(elem) },
		// markers: true
	});
});
//Анимация для свг
function svgFunc(elem) {
	elem.classList.add("active");
};

gsap.utils.toArray(".svg-anim").forEach(elem => {
	ScrollTrigger.create({
		trigger: elem,
		start: "top center",
		end: 'bottom top ',
		onEnter: function () { svgFunc(elem) },
		// markers: true
	});
});
if ($(window).width() > 767) {
	let capabilities = setInterval(function () {
		capabilitiesSlides();
	}, 1500);

	function capabilitiesSlides() {
		let elements = $('.capabilities__icons').find('.active');
		let elementsText = $('.capabilities__content');
		for (let i = 0; i < elements.length; i++) {
			if (i < 4) {
				if (elements[i].classList.contains('img-show') && elementsText[i].classList.contains('img-show')) {
					elements[i].classList.remove('img-show');
					elements[i + 1].classList.add('img-show');
					elementsText[i].classList.remove('img-show');
					elementsText[i + 1].classList.add('img-show');
					break;
				}
			} else {
				elements[i].classList.remove('img-show');
				elements[0].classList.add('img-show');
				elementsText[i].classList.remove('img-show');
				elementsText[0].classList.add('img-show');
				break;
			}
		}
	}
	$('.capabilities__icons')
		.mouseover(function () {
			clearInterval(capabilities);
			$('.capabilities__icons').find('.active').removeClass('img-show');
			$('.capabilities__content').removeClass('img-show');
			let dataNum = ($(this).attr('data-num'));
			$('.capabilities__content--' + dataNum).addClass('img-show');
			// $('.capabilities__icons--' + dataNum).addClass('active');
		})
		.mouseout(function () {
			let dataNum = ($(this).attr('data-num'));
			$('.capabilities__icons--' + dataNum).find('.active').addClass('img-show');
		});
} else {

	$('.capabilities__content .accordion').on('click', function (e) {
		e.preventDefault();

		// Add the correct active class
		if ($(this).closest('.capabilities__content').hasClass('active')) {
			// Remove active classes
			$('.capabilities__content').removeClass('active');
			$('.mob-icons').find('.active').removeClass('img-show');
		} else {
			// Remove active classes
			$('.capabilities__content').removeClass('active');
			$('.mob-icons').find('.active').removeClass('img-show');

			// Add the active class
			$(this).closest('.capabilities__content').addClass('active');
			$(this).find('.mob-icons').find('.active').addClass('img-show');
		}

		// Show the content
		var $content = $(this).next();
		$content.slideToggle(400);
		$('.capabilities__content .accordion-content').not($content).slideUp('fast');
	});
};


// Слайдер к отзывам
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
	responsive: [
		{
			breakpoint: 585,
			settings: {
				infinite: true

			}
		}]
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	arrows: false,
	autoplay: false,
	// centerMode: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 585,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
			},
		}
	]
});