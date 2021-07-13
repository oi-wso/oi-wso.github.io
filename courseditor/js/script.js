$(document).ready(function () {
	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();


	$(window).resize(function (event) {
		adaptive_function();
	});
	function adaptive_header(w, h) {
		var headerMenu = $('.header__mob-menu-wrapper');
		var headerNav = $('.header__nav');
		if (w < 768) {
			if (!headerNav.hasClass('done')) {
				headerNav.addClass('done').prependTo(headerMenu);
			}
		} else {
			if (headerNav.hasClass('done')) {
				headerNav.removeClass('done').prependTo($('.header__container')).css({ 'order': 1 });
			}
		}
	};

	function adaptive_function() {
		var w = $(window).outerWidth();
		var h = $(window).outerHeight();
		adaptive_header(w, h);
	}

	adaptive_function();
	$('.header__mob-btn').click(function (event) {
		$(this).toggleClass('active');
		$('.header__mob-menu').toggleClass('active');
		if ($(this).hasClass('active')) {
			$('body').data('scroll', $(window).scrollTop());
			$('.header__link').click(function () {
				$('.header__mob-menu').removeClass('active');
				$('.header__mob-btn').removeClass('active');
				$('body').removeClass('lock');
			});
		}
		$('body').toggleClass('lock');
		// if (!$(this).hasClass('active')) {
		// 	$('body,html').scrollTop(parseInt($('body').data('scroll')));
		// }

	});
	$('.header__mob-btn-close').click(function (event) {
		$(this).toggleClass('active');
		$('.header__mob-menu').toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.header__link').click(function () {
				$('.header__mob-menu').removeClass('active');
				$('.header__mob-btn').removeClass('active');
				$('body').removeClass('lock');
			});
		}
		$('body').toggleClass('lock');

	});
	$(document).mouseup(function (e) {
		var container = $(".header__mob-menu");
		if (container.has(e.target).length === 0) {
			container.removeClass('active');
			$('body').removeClass('lock');
		}
	});
	if ($(window).width() < 768) {
		$('.header__btn-link').on('click', function () {
			$('.submenu').slideToggle();
			$('.header__btn-link').toggleClass('active');
		});

	} else {
		$('.header__btn-link').on('hover', function () {
			$('.submenu').css({
				'opacity': 1,
				'pointer-events': 'all',
				'transition': '0.3s all'
			});
		});
	};


	gsap.registerPlugin(ScrollTrigger);
	// gsap.defaults({ ease: 'none', duration: 1 });


	function smoothScroll(content, viewport, smoothness) {
		content = gsap.utils.toArray(content)[0];

		gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
		gsap.set(content, { overflow: "visible", width: "100%" });

		let getProp = gsap.getProperty(content),
			setProp = gsap.quickSetter(content, "y", "px"),
			height;

		function onResize() {
			height = content.clientHeight;
			document.body.style.height = height + "px";
		}
		onResize();
		window.addEventListener("resize", onResize);

		ScrollTrigger.scrollerProxy(content, {
			scrollTop(value) {
				return arguments.length ? setProp(-value) : -getProp("y");
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			}
		});

		gsap.to(content, {
			y: () => document.documentElement.clientHeight - height,
			ease: "none",
			onUpdate: ScrollTrigger.update,
			scrollTrigger: {
				invalidateOnRefresh: true,
				start: 0,
				end: () => height - document.documentElement.clientHeight,
				scrub: smoothness || 1
			}
		});
	};




	$('.colorbox').on('click', function (e) {
		e.preventDefault();
		modalY(this);
	});

	//Модалка для показа медиа контента
	function modalY(obj) {
		var modalObj = obj,
			slides,
			nextSlide,
			modalMode,
			objectLink;

		if ($(modalObj).hasClass('m-prod-img')) {
			modalObj = $('.m-first-img');
			objectLink = modalObj.attr('href');
		} else {
			objectLink = obj.getAttribute('href');
		}

		if ($(modalObj).attr('data-gallery') === 'product-images') {
			slides = $('.product__slider a');
		} else {
			slides = $(modalObj).parent().children();
		}

		//создаем модалку
		var modalBack = document.createElement('div'),
			modalWindowY = document.createElement('div'),
			modalClose = document.createElement('button'),
			modalLoad = document.createElement('img');
		modalBack.className = 'modal-back';
		modalClose.className = 'y-modal-close';

		// modalLoad.src = '../img/logo.png';
		modalLoad.className = 'modal-loader';
		modalWindowY.className = 'y-modal-window';

		//сообщение об ошибке
		var errorMsg = document.createElement('p');
		errorMsg.className = 'y-modal-error';
		errorMsg.innerHTML = 'Невозможно отобразить содержимое';



		if (objectLink.indexOf('youtu') !== -1) {
			//получаем ID видео, собираем ссылку и вставляем во фрейм
			var match = objectLink.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/),
				youtubeLink = '//www.youtube.com/embed/' + match[2] + '?rel=0',
				modalFrame = document.createElement('iframe');

			modalFrame.className = 'modal-i-frame';
			modalFrame.setAttribute('frameborder', '0');
			modalFrame.setAttribute('allowfullscreen', '');
			modalFrame.src = youtubeLink;

			//вставляем контент в модалку
			modalWindowY.appendChild(modalFrame);

			//выставляем режим модалки
			modalMode = 'video';
		} else if (objectLink.indexOf('vimeo') !== -1) {
			var modalFrame = document.createElement('iframe');

			modalFrame.className = 'modal-i-frame';
			modalFrame.setAttribute('frameborder', '0');
			modalFrame.setAttribute('allowfullscreen', '');
			modalFrame.src = objectLink;

			//вставляем контент в модалку
			modalWindowY.appendChild(modalFrame);

			//выставляем режим модалки
			modalMode = 'video';
		} else if (objectLink.indexOf('video') !== -1) {
			var modalFrame = document.createElement('iframe');

			modalFrame.className = 'modal-i-frame';
			modalFrame.setAttribute('frameborder', '0');
			modalFrame.setAttribute('allowfullscreen', '');
			modalFrame.src = objectLink;

			//вставляем контент в модалку
			modalWindowY.appendChild(modalFrame);

			//выставляем режим модалки
			modalMode = 'video';
		} else {
			modalWindowY.appendChild(errorMsg);
		};

		modalWindowY.classList.add('show-modal');
		modalWindowY.appendChild(modalClose);
		modalWindowY.appendChild(modalLoad);
		modalBack.appendChild(modalWindowY);
		document.body.appendChild(modalBack);



		document.querySelector('.modal-back').addEventListener('click', function (e) {
			if (e.target.classList.contains('modal-back')) {
				document.body.removeChild(this);
			}
		});

		document.querySelector('.y-modal-close').onclick = function () {
			document.querySelector('.modal-back').remove(this);
			$('#key-shot-script, #key-shot-rules-script').remove();
		};





		function loadShow(value) {
			var loader = document.querySelector('.modal-loader');

			(value === 'hide') ? loader.style.display = 'none' : loader.style.display = 'block';
		};

	};






	let accItem = document.getElementsByClassName('accordionItem');
	let accHD = document.getElementsByClassName('accordionItemHeading');
	for (i = 0; i < accHD.length; i++) {
		accHD[i].addEventListener('click', toggleItem, false);
	}
	function toggleItem() {
		let itemClass = this.parentNode.className;
		for (i = 0; i < accItem.length; i++) {
			accItem[i].className = 'accordionItem close';
		}
		if (itemClass == 'accordionItem close') {
			this.parentNode.className = 'accordionItem open';
		}
	}




});

