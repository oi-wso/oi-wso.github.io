window.onscroll = function () { myFunction() };

var header = document.getElementById("header-nav");

var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

$(window).resize(function (event) {
	adaptive_function();
});
const userPanel = $('.user-p');
const bars = document.querySelector('.bars');
const headerMenu = document.querySelector('#navbar-mob');
const headerTop = $('#header-top');

function adaptive_header(w, h) {
	if (w < 768) {
		if (!userPanel.hasClass('done') && !headerTop.hasClass('done')) {
			userPanel.addClass('done').appendTo(headerMenu);
			headerTop.addClass('done').appendTo(headerMenu);
		}

	} else {
		if (userPanel.hasClass('done') && headerTop.hasClass('done')) {
			userPanel.removeClass('done').appendTo($('.header__wrapper')).css({ 'order': 2 });
			headerTop.removeClass('done').prependTo($('.header'));
		}
	}
};

function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}

adaptive_function();

bars.addEventListener('click', () => {
	headerMenu.classList.toggle('active');
	bars.classList.toggle('rotate');
	// if ($(headerMenu).hasClass('active')) {
	// 	$('html, body').animate({ scrollTop: 0 }, 200);
	// 	console.log('check');
	// }
	$('body').toggleClass('lock');

});



$('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: false,
	pauseOnFocus: false
});

$('.news__show').on('click', function () {
	$('.hide').slideDown(500);
	$(this).slideUp();
});
$('.news__hide').on('click', function () {
	$('.hide').slideUp(500);
	$(this).slideDown();
	$('.news__show').slideDown();
});



$('#username').bind("change keyup input click", function () {
	if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) { this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s]/g, ''); }
});


//E-mail Ajax Send
$('#form').each(function () {
	var valid = $(this).validate({
		onfocusout: false,
		onkeyup: false,
		focusInvalid: false,
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true,

			},
			message: {
				required: true,
			}

		},
		messages: {
			name: {
				required: "Имя",


			},
			email: {
				required: "E-mail",
				email: 'Укажите корректный e-mail',
			},

			message: {
				required: "Заполните поле",
			}
		},
		submitHandler(form) {
			//form.submit();
			$('.newsletter__wrapper').hide();
			$('.newsletter__success-wrap').fadeIn(400);
			$('.newsletter__success-wrap').css('display', 'flex');
			var val = document.getElementById("username").value;
			document.getElementById('success-name').innerHTML = "Уважаемый(ая) " + val + ", спасибо за подписку!";
			console.log(val);
		}
		// submitHandler(form) {
		// 	var th = $(form);
		// 	$.ajax({
		// 		type: "POST",
		// 		//url: "mail.php",
		// 		data: th.serialize()
		// 	}).done(function () {

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

function popUpShow() {
	$(".popup").show();
}
function popUpHide() {
	$(".popup").hide();
}
$('.popup__close-btn').on('click', function () {
	popUpHide();

});
var valid = $('#form-2').validate({
	onfocusout: false,
	onkeyup: false,
	focusInvalid: false,
	rules: {
		emailNews: {
			required: true,
			email: true,

		}

	},
	messages: {
		emailNews: {
			required: "Введите e-mail",
			email: 'Укажите корректный e-mail',
		}
	},
	submitHandler(form) {
		//form.submit();
		popUpShow();
	}
});




