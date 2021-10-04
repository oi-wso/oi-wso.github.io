var elem = $('.about'),
	pos = elem.offset(),
	elem_left = pos.left,
	elem_top = pos.top,
	elem_width = elem.width(),
	elem_height = elem.height(),
	x_center,
	y_center;


$('.about').mousemove(function (e) {

	x_center = (elem_width / 2) - (e.pageX - elem_left);
	y_center = (elem_height / 2) - (e.pageY - elem_top);

	$('.parallax').each(function () {

		var speed = $(this).attr('data-speed'),
			xPos = Math.round(-1 * x_center / 20 * speed),
			yPos = Math.round(y_center / 20 * speed);

		if (yPos < 0)
			yPos = -2 * speed;

		$(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');

	});

});

$('.slider__wrapper').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
});

// $('a .offers__copy-promo').click(function (event) {
// 	event.preventDefault();
// 	var clickElem = this;
// 	var clipboard = new ClipboardJS(clickElem, {
// 		text: function (trigger) {
// 			return trigger.getAttribute('data-clipboard-text');
// 		}
// 	});
// 	clipboard.on('success', function (e) {
// 		console.log('1')
// 		$(clickElem).text('tw0');
// 		console.log('2')
// 	});
// });
// 	clipboard.on('success', function (e) {
// 		$().text('text');
// 	});
// });
// function copyPromo() {
// 	console.log('2');
// 	var clipboard = new ClipboardJS('.offers__copy-promo', {
// 		text: function (trigger) {
// 			return trigger.getAttribute('data-clipboard-text');
// 		}
// 	});
// 	console.log('1');
// }
var clipboard = new ClipboardJS('.offers__copy-promo', {
	text: function (trigger) {
		return trigger.getAttribute('data-clipboard-text');
	}
});
clipboard.on('success', function (e) {
	var clickElem = e.trigger;
	clickElem.innerHTML = 'код скопирован';
	e.clearSelection();
});