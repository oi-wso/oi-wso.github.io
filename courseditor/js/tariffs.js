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