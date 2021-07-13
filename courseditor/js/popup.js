
//Попап
$('.popup__open-btn').click(function (event) {
	$('.popup').fadeIn(400);
	$('body').addClass('lock');
	$('.popup__form').show();
	$('.popup-form-success').hide();
});
$('.popup__close-btn').on('click', function (event) {
	event.preventDefault();
	$('.popup').fadeOut(400);
	$('body').removeClass('lock');
	$('[required]').removeClass('error');
});

//E-mail Ajax Send
$('#popup-form').each(function () {
	var valid = $(this).validate({

		errorPlacement(error, element) {
			return true;
		},
		rules: {
			tel: {
				required: true,
				checkMask: true
			},
			name: {
				required: true,
			},
			email: {
				required: true,
			}

		},

		// submitHandler(form) {
		// 	var th = $(form);
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mail.php",
		// 		data: th.serialize()
		// 	}).done(function () {
		// 		$('.popup__form').hide();
		// 		$('.popup-form-success').fadeIn(400);
		// 		setTimeout(function () {
		// 			// Done Functions
		// 			th.trigger("reset");
		// 		}, 1000);
		// 	});
		// 	valid.resetForm();
		// 	return false;
		// }

	});


});