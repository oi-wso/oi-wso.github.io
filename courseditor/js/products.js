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