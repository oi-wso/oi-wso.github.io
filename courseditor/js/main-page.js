gsap.registerPlugin(ScrollTrigger);

function headerAddClass() {
	$('.header').addClass('active');
};
function headerRemoveClass() {
	$('.header').removeClass('active');
	$('.header').removeClass('active-2');
};
function headerTarClass() {
	$('.header').addClass('active-2');
};
function headerTarClass2() {
	$('.header').removeClass('active-2');
};
function headerTarClass3() {
	$('.header').addClass('active-2');
	$('.header').removeClass('active');
};
function headerTarClass4() {
	$('.header').removeClass('active-2');
	$('.header').addClass('active');
};


var aboutVideo = document.querySelector('.about__video');
var opportunitiesVideo = document.querySelector('.opportunities__video');
var opportunities2Video = document.querySelector('.opportunities-2__video');

function abVideo() {
	if ($(window).width() > 767) {
		aboutVideo.play();
	};

};
function oppVideo() {
	if ($(window).width() > 767) {
		opportunitiesVideo.play();
	};
};
function p2Video() {
	if ($(window).width() > 767) {
		opportunities2Video.play();
	};
};

function navMain1() {
	let elements = document.querySelectorAll('.main-anim__nav-item');
	$(elements).removeClass('active');
	$(".main-anim__nav-item--1").toggleClass('active');
}
function navMain2() {
	let elements = document.querySelectorAll('.main-anim__nav-item');
	$(elements).removeClass('active');
	$(".main-anim__nav-item--2").toggleClass('active');
}
function navMain3() {
	if ($(window).width() > 767) {
		headerTarClass4();
	};

	let elements = document.querySelectorAll('.main-anim__nav-item');
	$(elements).removeClass('active , active-2');
	$(".main-anim__nav-item--3").toggleClass('active');
}
function navMain4() {
	let elements = document.querySelectorAll('.main-anim__nav-item');
	$(elements).removeClass('active');
	$(".main-anim__nav-item--4").toggleClass('active');
	$(elements).addClass('active-2');
}

function intro() {
	navMain1();
	let tlAbout = gsap.timeline({
		onStart: abVideo
	})
	tlAbout.fromTo(".about__title span", { y: 100 }, { y: 0, stagger: 0.3 })
	tlAbout.fromTo(".about__btn", { opacity: 0 }, { opacity: 1, stagger: 0.3 }, '+=0.5');
	return tlAbout;

};


function opportunitiesAnim() {
	navMain2();
	let tlopp = gsap.timeline({

	})
	tlopp.add(oppVideo())
		.fromTo(".opportunities__text", { y: 100 }, { y: 0, stagger: 0.3 });
	return tlopp;
};



function opportunitiesAnim2() {
	navMain3();
	if ($(window).width() > 767) {
		headerTarClass4();
	};
	let tlopp2 = gsap.timeline({

	})
	tlopp2.add(p2Video())
		.to(".opportunities-2__title", { y: 0 })
		.to(".opportunities-2__icon", { opacity: 1, stagger: 0.2 })
		.to(".opportunities-2__text", { y: 0 });
	return tlopp2;
};


function tariffsAnim() {
	navMain4();
	$('.tariffs-anim').css({ 'pointer-events': 'all' });
	let tariffsTl = gsap.timeline({
	})

	tariffsTl.to(".bg-anim", { duration: 0.5, autoAlpha: 1, stagger: 0.2 })
	tariffsTl.to(".tariffs-anim__title", { y: 0 })
	tariffsTl.to(".tariffs-anim__item", { opacity: 1, duration: 1.2, stagger: 0.6 });
	return tariffsTl;
};
function headerChange() {
	let elem = document.querySelector('.tariffs-anim');
	if (elem.style.zIndex > 0 && elem.style.opacity < 1) {
		headerTarClass4();
	}
};
if ($(window).width() > 767) {
	headerChange();
};




ScrollTrigger.matchMedia({
	// desktop
	"(min-width: 768px)": function () {

		//Анимация первых блоков
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.main-anim-block',
				start: "10% top",
				end: "45% -=100",
				// end: "bottom 35%",
				scrub: true,
				pin: true,
				// anticipatePin: 1,
				// onUpdate: headerTarClass4,
				onLeave: headerRemoveClass,
				onLeaveBack: headerAddClass,
				onEnterBack: headerAddClass,
				// markers: true
			},
			defaults: { ease: "none" }
		});

		tl.fromTo(".about", { onEnter: headerAddClass, opacity: 1 }, { zIndex: 1, opacity: 1 }).then(intro())
		tl.to(".main-anim__nav-item--1", { onUpdate: navMain1 })
		tl.fromTo(".opportunities", { opacity: 0 }, { zIndex: 2, opacity: 1, onComplete: opportunitiesAnim })
		tl.to(".main-anim__nav-item--2", { onUpdate: navMain2 })
		tl.fromTo(".opportunities-2", { opacity: 0 }, { zIndex: 3, opacity: 1, onComplete: opportunitiesAnim2 })
		tl.to(".main-anim__nav-item--3", { onUpdate: navMain3 }, "+=0.2")
		tl.fromTo(".tariffs-anim", { opacity: 0 }, { zIndex: 4, opacity: 1, onComplete: headerTarClass3 }, "-=0.2")
		tl.to(".tariffs-anim", { onStart: tariffsAnim })
		tl.to(".header", { onComplete: headerRemoveClass });

	},

	// mobile
	"(max-width: 767.98px)": function () {
		ScrollTrigger.clearMatchMedia("(min-width: 768px)");

		ScrollTrigger.create({
			trigger: '.about',
			onEnter: intro
		});
		gsap.to(".header", {
			scrollTrigger: {
				trigger: ".about",
				start: "top center",
				scrub: 1,
				end: "5% top",
				onEnter: headerAddClass,
				onEnterBack: headerAddClass,
				onLeave: headerRemoveClass,
				onLeaveBack: headerRemoveClass,
				// markers: true
			}
		});

		ScrollTrigger.create({
			trigger: '.opportunities',
			start: "7% center",
			end: "85% top",
			onEnter: opportunitiesAnim,
		});
		ScrollTrigger.create({
			trigger: '.opportunities-2',
			start: "7% center",
			end: "85% top",
			onEnter: opportunitiesAnim2,
		});
		ScrollTrigger.create({
			trigger: '.tariffs-anim',
			// start: "top center",
			// end: "85% top",
			onEnter: tariffsAnim,
		});


	},
	"all": function () {
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
		//Анимация заголовков
		function titFunc(elem) {
			elem.classList.add("active");
		};

		gsap.utils.toArray(".title-anim").forEach(elem => {
			ScrollTrigger.create({
				trigger: elem,
				start: "-=100 center",
				end: 'bottom bottom ',
				onEnter: function () { titFunc(elem) },
				// markers: true
			});
		});
	}

});


if ($(window).width() < 768) {
	$('.courses__examples').slick({
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		// autoplay: false,
		// autoplaySpeed: 3000
	});

}
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
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2000,
	// centerMode: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 585,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: false
			}
		}]
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


let tlDemo = gsap.timeline({
	scrollTrigger: {
		trigger: '.demo',
		start: "center bottom",
		// end: "bottom 25% ",
		//markers: true
	},
	defaults: { ease: "none" }
});
if ($(window).width() > 1024) {
	tlDemo.to(".demo__anim-bg", { width: '200%' })
}
if ($(window).width() < 1025) {
	tlDemo.to(".demo__anim-bg", { duration: 0.5, height: '350%' })
}
tlDemo.fromTo(".demo__btn", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=0.5")
tlDemo.to(".demo__anim-link", { duration: 1, autoAlpha: 1 });





let tlCourses = gsap.timeline({
	scrollTrigger: {
		trigger: '.courses__btn ',
		start: "top bottom",
		//markers: true
	},
	defaults: { ease: "none" }
});

tlCourses.fromTo(".courses__btn ", { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });

