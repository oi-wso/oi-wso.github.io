//Анимация для свг
function svgFunc(elem) {
	elem.classList.add("active");
};

gsap.utils.toArray(".svg-anim").forEach(elem => {
	ScrollTrigger.create({
		trigger: elem,
		start: "-=100 center",
		end: 'bottom top ',
		onEnter: function () { svgFunc(elem) },
		// markers: true
	});
});