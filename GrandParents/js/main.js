/* 01 CLOSE BOX
---------------------------------------------------- */
function closeBox() {
	let btnClose = document.querySelectorAll('.js-close');

	for (var i = 0; i < btnClose.length; i++) {
		btnClose[i].addEventListener('click', function() {
			this.closest('.close-box').style.display = 'none';
		});
	}
}

closeBox();

/* 02 DROP DOWN
---------------------------------------------------- */

function dropDown() {
	let btnDrop = document.querySelectorAll('.drop-down .view');

	for (var i = 0; i < btnDrop.length; i++) {
		btnDrop[i].addEventListener('click', openDrop);
	}

	function openDrop(e) {
		let parent = this.closest('.drop-down');
		let view = this.querySelector('span');
		let drop = this.nextElementSibling;
		let li = drop.querySelectorAll('li');

		drop.classList.toggle('active');
		parent.classList.toggle('selected');

		for (var i = 0; i < li.length; i++) {
			li[i].addEventListener('click', function(){
				view.textContent = this.textContent;
				drop.classList.remove('active');
				parent.classList.remove('selected');
			});
		}
	}
}

dropDown();

/* 03 SLIDER
---------------------------------------------------- */

$('.main-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 5000,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
});

$('.heading-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
});

$('.product-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	responsive: [
		{
			breakpoint: 850,
		    settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		    }
		},
		{
			breakpoint: 768,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		    }
		},
		{
			breakpoint: 500,
		    settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true
		    }
		}
	]
});

$('.recommended-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
	responsive: [
		{
			breakpoint: 768,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		    }
		}
	]
});

function slickadd() {
	if ($(window).width() < 500) {
		$('.sidebar-product .inner').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			dots: true
		});
	} else {
		$('.sidebar-product .inner').filter('.slick-initialized').slick('unslick');
	}
}

function mobgallery() {
	if ($(window).width() < 768) {
		$('.gallery-mob').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<span class="slick-arrow slick-prev"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			nextArrow: '<span class="slick-arrow slick-next"><svg width="23" height="26"><use xlink:href="#ic-arrslick"></use></svg></span>',
			dots: true,
			arrows: false
		});
	} else {
		$('.gallery-mob').filter('.slick-initialized').slick('unslick');
	}
}

slickadd();
mobgallery();


$(window).resize(function() {
	slickadd();
});

/* 04 POPUP
---------------------------------------------------- */
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

/* 05 QUANTITY
---------------------------------------------------- */
function quantity() {
	let quantity = document.querySelectorAll('.quantity');

	for (var i = 0; i < quantity.length; i++) {
		let minus = quantity[i].querySelector('.minus');
		let plus = quantity[i].querySelector('.plus');
		let input = quantity[i].querySelector('input');

		minus.addEventListener('click', function(e) {
			if (input.value > 1) input.value = +input.value - 1;
		});

		plus.addEventListener('click', function(e) {
			input.value = +input.value + 1;
		});
	}
}

quantity();

/* 06 BACK TO TOP
---------------------------------------------------- */
document.querySelector('.js-top').addEventListener('click', function() {
    var scrollToTop = window.setInterval(function() {
	    var pos = window.pageYOffset || document.documentElement.scrollTop;
	    
	    if ( pos > 0 ) window.scrollTo( 0, pos - 20 ); 
	    else window.clearInterval( scrollToTop );
	}, 0);
});

/* 07 MOBILE MENU
---------------------------------------------------- */
function MobileMenu() {
	let btnNav = document.querySelector('.btn-nav');
	let btnNavClose = document.querySelector('.btn-navclose');
	let nav = document.querySelector('nav');
	let link = nav.querySelectorAll('a');

	btnNav.addEventListener('click', function() {
		nav.classList.toggle('active');
	});

	btnNavClose.addEventListener('click', function() {
		nav.classList.remove('active');
	});

	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener('click', function(e) {
			let parent = this.parentNode;
			let drop = parent.querySelector('.drop');

			if (drop != null) {
				drop.classList.toggle('active');
			}
		});
	}
}

MobileMenu();

