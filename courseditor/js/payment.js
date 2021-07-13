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