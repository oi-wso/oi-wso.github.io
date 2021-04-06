$(document).ready(function () {

	var controller = new ScrollMagic.Controller();
	// var scene = new ScrollMagic.Scene({ tweenChanges: true });
	let aboutVideo = document.querySelector('.about__video');
	function pVideo() {
		aboutVideo.play();
	};
	function appearedTitle() {
		$('.about__title-anim').addClass('active');
	};
	function appearedBtn() {
		$('.about__try-btn').addClass('active');
		$('.about__tariffs-btn').addClass('active');
	};
	var aboutVideoScene = new ScrollMagic.Scene({
		triggerElement: '.about',
		// tweenChanges: true
		// duration: 100,
		// offset: 200,
		triggerHook: "onEnter",

	})

		.addIndicators()
		.addTo(controller);

	aboutVideoScene.on("enter", function (event) {
		setTimeout(pVideo, 500);
		setTimeout(appearedTitle, 500);
		setTimeout(appearedBtn, 1500);
	});
});

