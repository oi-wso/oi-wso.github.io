function headerTarClass() {
	$('.header').addClass('active-2');
};
function headerRemoveClass() {
	$('.header').removeClass('active');
	$('.header').removeClass('active-2');
};

gsap.to(".header", {
	scrollTrigger: {
		trigger: ".about",
		start: "top center",
		scrub: 1,
		end: "5% top",
		onEnter: headerTarClass,
		onEnterBack: headerTarClass,
		onLeave: headerRemoveClass,
		onLeaveBack: headerRemoveClass,
		// markers: true
	}
});

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





//Для форм
$('#email, #message, #name').focus(function () {
	$(this).parent('.placeholder-box').find(".placeholder-text").hide();
});

$('#email, #message, #name').blur(function () {
	if ($(this).val().trim() === '') {
		$(this).parent('.placeholder-box').find(".placeholder-text").show();
	}
});
$('#name').bind("change keyup input click", function () {
	if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) { this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, ''); }
});

$('input[type="tel"]').inputmask({ "mask": "+7(999)999-99-99" });
jQuery.validator.addMethod("checkMask", function (value, element) {
	return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
});

