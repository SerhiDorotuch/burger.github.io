$('.home .btn').click(function(e) {
	e.preventDefault();

	$('html, body').animate({scrollTop: $('.animation-airfy').offset().top - 50}, '500');
});

/* HEADER
---------------------------------------------------- */
const header = document.querySelector('.header');
const body = document.querySelector('body');
const btnMenu = document.querySelector('.btn-menu');
const overlay = document.querySelector('.overlay');

btnMenu.addEventListener('click', function() {
	body.classList.toggle('header-active');
	overlay.classList.toggle('header-active');
});

document.addEventListener('scroll', function() {
	if (window.scrollY > 0) {
		body.classList.add('scroll-body');
	} else {
		body.classList.remove('scroll-body');
	}
});

/* ANIMATION
---------------------------------------------------- */

const rooms = document.querySelectorAll('button.room');
const animationContainer = document.querySelector('.animation-container');
const animationWrap = document.querySelector('.css-animation');
const animationAirfy = document.querySelector('.animation-airfy');

const waveSpan1 = document.querySelectorAll('.css-animation .wave span.span-1');
const waveSpan2 = document.querySelectorAll('.css-animation .wave span.span-2');
const animationText = document.querySelectorAll('.animation-text');
const animBtn = document.querySelectorAll('.animation-text .btn');
console.log(animBtn);
rooms.forEach(room => {
    room.addEventListener('click', e => {
        e.preventDefault();

        const dataRoom = room.getAttribute('data-room');
        const roomClass = 'room-' + dataRoom;
        const textAnimBottom = document.querySelector('.animation-text.' + roomClass);
        
        if ( !animationWrap.classList.contains(roomClass) ) {
            animationWrap.classList.remove('room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6');
            animationWrap.classList.add(roomClass);
            animationContainer.classList.add('active');
            animationAirfy.classList.add('active');

            for (var i = 0; i < animationText.length; i++) {
            	animationText[i].classList.remove('active');
            }

            textAnimBottom.classList.add('active');
        } else {
            animationWrap.classList.remove('room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6');
            animationContainer.classList.remove('active');
            animationAirfy.classList.remove('active');

            for (var i = 0; i < animationText.length; i++) {
            	animationText[i].classList.remove('active');
            }
        }

        willChange();
    });
});

animBtn.forEach(btn => {
	console.log(btn);
	btn.addEventListener('click', e => {
		console.log('click');
		e.preventDefault();

		const roomClass = e.target.getAttribute('data-btn');

		animationWrap.classList.remove('room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6');
		animationWrap.classList.add(roomClass);

		for (var i = 0; i < animationText.length; i++) {
			animationText[i].classList.remove('active');
		}

		document.querySelector('.animation-text.' + roomClass).classList.add('active');
	});
});

function willChange() {
    animationWrap.classList.add('will-change');

    setTimeout(() => {
        animationWrap.classList.remove('will-change');
    }, 1000);
}

if (document.querySelector('.js-room') != null) {
	document.querySelector('.js-room').onclick = function(e) {
		e.preventDefault();
		animationContainer.classList.add('active');
		document.querySelector('.css-animation').classList.add('room-1');
		animationAirfy.classList.add('active');
		document.querySelector('.animation-text.room-1').classList.add('active');
	}
}

/* SLICK
---------------------------------------------------- */
$('.slider-wlan ul').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	centerMode: true,
	centerPadding: '50px',
	responsive: [
		{
		    breakpoint: 1025,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        centerPadding: '30px',
		    }
	    },
	    {
		    breakpoint: 500,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        centerMode: false,
		        centerPadding: '0',
		    }
	    },
	]
});

$('.business .slider-main').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	appendDots: $('.business .slider-wrap'),
});

$('.business .slider-main').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	let index = $('.business .slick-dots li.slick-active').index();

	$('.business .slick-dots').each(function() {
		$(this).find('li').each(function() {
			$(this).removeClass('active');
		});

		$(this).find('li').eq(nextSlide).addClass('active');
	});
}); 

$('.business .slider-main .wrap .btn').click(function(e) {
	e.preventDefault();	
	$('.business .slider-main').slick('slickNext');
});

$('.mobile-app_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: false,
	autoplaySpeed: 2000,
	appendDots: $('.mobile-app_slider .descr'),
});

$('.mobile-app_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	let index = $('.mobile-app_slider .slick-dots li.slick-active').index();

	$('.mobile-app_slider .slick-dots').each(function() {
		$(this).find('li').each(function() {
			$(this).removeClass('active');
		});

		$(this).find('li').eq(nextSlide).addClass('active');
	});
});

$('.mobile-app_slider .btn').click(function(e) {
	e.preventDefault();	
	$('.mobile-app_slider').slick('slickNext');
});

$('.slider-horizontal').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.slider-vertical'
});

$('.slider-vertical').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-horizontal',
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		    breakpoint: 769,
		    settings: {
		        vertical: false
		    }
	    },
	]
});

function initZoomevel(elem) {
	$(elem).elevateZoom({
	 	zoomWindowWidth: 600,
	    zoomWindowHeight: 500,
	 	borderSize: 1,
	 	onZoomedImageLoaded: function() {
			$('.zoomContainer, .product-slider, .zoomLens').hover(
				function () {
					$('.slider-horizontal').slick('slickPause');
					$('.slider-vertical').slick('slickPause');
				},
				function () {
					$('.slider-horizontal').slick('init');
					$('.slider-vertical').slick('init');
				}
			)
		}
	});
}

$('.slider-horizontal').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var img = $(slick.$slides[nextSlide]).find("img");
    $('.zoomWindowContainer,.zoomContainer').remove();
    initZoomevel(img);
}); 

initZoomevel('.slider-horizontal .slick-current img');


function slickList() {
	if ($(window).width() < 991) {
		$('.list-partner').not('.slick-initialized').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			responsive: [
				{
				    breakpoint: 500,
				    settings: {
				        slidesToShow: 2
				    }
			    },
			]
		});
	} else {
		if ($('.list-partner').hasClass('slick-initialized')) {
			$('.list-partner').slick('unslick');
		}		
	}
}

$(window).resize(function() {
	slickList();
});

slickList();

/* ACCORDEON
---------------------------------------------------- */
function accordeon() {
	let accordeon = document.querySelectorAll('.accordeon');
	let flag = true;

	if (accordeon != null) {
		for (var i = 0; i < accordeon.length; i++) {
			item = accordeon[i].querySelectorAll('.item-accordeon');
			let itemActive = accordeon[i].querySelectorAll('.item-accordeon.active');

			for (var j = 0; j < itemActive.length; j++) {
				let content = itemActive[i].querySelector('.content-accordeon');
				let inner = itemActive[i].querySelector('.content-accordeon .inner');
				content.style.height = inner.clientHeight + 'px';
			}			

			for (var j = 0; j < item.length; j++) {
				let btn = item[j].querySelector('.btn-accordeon');
				
				btn.addEventListener('click', openAccordeon);
			}
		}
	}

	function openAccordeon(e) {
		let item = this.closest('.accordeon').querySelectorAll('.item-accordeon');
		let inner = this.parentNode.querySelector('.inner');
		let content = this.parentNode.querySelector('.content-accordeon');		

		if (this.parentNode.classList.contains('active')) {			
		 	this.parentNode.classList.remove('active');
		 	content.removeAttribute('style');
		} else {	
			for (var i = 0; i < item.length; i++) {
				item[i].classList.remove('active');
				item[i].querySelector('.content-accordeon').removeAttribute('style');
			}

		 	this.parentNode.classList.add('active');
		 	content.style.height = inner.clientHeight + 'px';
		}				
	}
}

accordeon();

/* TABS
---------------------------------------------------- */

function tabs() {
	let tabs = $('.tabs');
	let controls = null;
	let tabsItem = null;

	tabs.each(function() {
		controls = $(this).find('.control-tab li');
		tabsItem = $(this).find('.content-tab');

		controls.on('click', function() {
			openTab($(this));
		});
	});

	function openTab(_this) {
		let clsTab = _this.attr('data-tab');
		let tab = _this.closest('.tabs').find('.' + clsTab);

		_this.closest('.control-tab').find('li').each(function() {
			$(this).removeClass('active');
		});

		_this.closest('.tabs').find('.content-tab').each(function() {
			$(this).removeClass('active');
		});

		_this.addClass('active');
		tab.addClass('active');
	}
}

tabs();

/* ANIMATION SCROLL PAGE
---------------------------------------------------- */
function animationScrollPage() {
	var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
	    if (isScrolling == false) {
	        window.requestAnimationFrame(function() {
		        scrolling(e);
		        isScrolling = false;
	        });
	    }

	    isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let animTextLeft = document.querySelectorAll('.anim-textleft');
    let animTextRight = document.querySelectorAll('.anim-textright');
    let animScale = document.querySelectorAll('.anim-scale');
    let animBottomTop = document.querySelectorAll('.anim-bottomtop');
    let listPartner = document.querySelectorAll('.list-partner li');
    let rotate3d = document.querySelectorAll('.umfang .card .item');
    let faqs = document.querySelectorAll('.faqs .item-accordeon');
    let tab = document.querySelectorAll('.instruction .tabs .control-tab li');
    let tehnologiTitle = document.querySelectorAll('.list-tehnology .title-left li');
    let tehnologiRating = document.querySelectorAll('.list-tehnology .rating');
    let street = document.querySelectorAll('.street .flex .item');
 
    function scrolling(e) {
    	for (var i = 0; i < animTextLeft.length; i++) {
			if (isPartiallyVisible(animTextLeft[i])) {
				animTextLeft[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animTextRight.length; i++) {
			if (isPartiallyVisible(animTextRight[i])) {
				animTextRight[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animBottomTop.length; i++) {
			if (isPartiallyVisible(animBottomTop[i])) {
				animBottomTop[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < listPartner.length; i++) {
			if (isPartiallyVisible(listPartner[i])) {
				listPartner[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < animScale.length; i++) {
			if (isPartiallyVisible(animScale[i])) {
				animScale[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < rotate3d.length; i++) {
			if (isPartiallyVisible(rotate3d[i])) {
				rotate3d[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < faqs.length; i++) {
			if (isPartiallyVisible(faqs[i])) {
				faqs[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < tab.length; i++) {
			if (isPartiallyVisible(tab[i])) {
				tab[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < tehnologiTitle.length; i++) {
			if (isPartiallyVisible(tehnologiTitle[i])) {
				tehnologiTitle[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < tehnologiRating.length; i++) {
			if (isPartiallyVisible(tehnologiRating[i])) {
				tehnologiRating[i].classList.add("animation"); 
			}
		}

		for (var i = 0; i < street.length; i++) {
			if (isPartiallyVisible(street[i])) {
				street[i].classList.add("animation"); 
			}
		}
    }
 
    function isPartiallyVisible(el) {
	    var elementBoundary = el.getBoundingClientRect();
	 
	    var top = elementBoundary.top;
	    var bottom = elementBoundary.bottom;
	    var height = elementBoundary.height;
	 
	    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
	    var elementBoundary = el.getBoundingClientRect();
	 
	    var top = elementBoundary.top;
	    var bottom = elementBoundary.bottom;
	 
	    return ((top >= 0) && (bottom <= window.innerHeight));
    }
}

animationScrollPage();

/* POPUP 
------------------------------------ */
function popup() {
	let btn = document.querySelectorAll('.btn-popup');
	let overlay = document.querySelector('.popup-overlay');
	let popup = null;
	let close = null;
	let _this = this;

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', function(e) {
			e.preventDefault();

			popup = document.querySelector('.' + this.getAttribute('data-popup'));
			close = popup.querySelector('.popup-close');

			let top  = window.pageYOffset || document.documentElement.scrollTop,
            left = window.pageXOffset || document.documentElement.scrollLeft;
			
			overlay.classList.add('active');
			popup.classList.add('active');
			popup.style.top = (top + 100) + 'px';

			close.addEventListener('click', closePopup);
        	overlay.addEventListener('click', closePopup);

        	let img = popup.querySelector('img');
        	img.src = this.querySelector('img').src;
		});
	}

	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 27) closePopup(e);
	});

	function closePopup(e) {
        e.preventDefault();

        overlay.classList.remove('active');
        popup.classList.remove('active');
    }
}

popup();

let closePopup = document.querySelector('.popup-airfy .popup-close');
let closePopupDrop = document.querySelector('.popup-drop .popup-close');

if (closePopup != null) {
	closePopup.onclick = function(e) {
		e.preventDefault();
		document.querySelector('.popup-overlay').classList.remove('active');
		closePopup.closest('.popup').classList.remove('active');
	}	
}

if (closePopupDrop != null) {
	closePopupDrop.onclick = function(e) {
		e.preventDefault();
		document.querySelector('.popup-overlay').classList.remove('active');
		closePopupDrop.closest('.popup').classList.remove('active');
	}
}

/* CHANGE TEXT
---------------------------------------------------- */
function changeText() {
	const wrap = document.querySelectorAll('.change-text');

	wrap.forEach(elem => {
		let track = elem.querySelector('.track');
		let span = track.querySelectorAll('span');
		const height = span[0].clientHeight;
		const endTrack = height * span.length;
		let count = height;

		setInterval(function() {
			track.style.transform = 'translateY(-' + count + 'px)';
			count += height;

			if (count == endTrack) count = 0;
		}, 2000);

	});
}

changeText();