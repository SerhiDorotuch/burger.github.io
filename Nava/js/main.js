/* FIXED HEADER
---------------------------------------------------- */
function fixedHeader() {
	let header = document.querySelector('.header');
	let body = document.querySelector('body');
	let lastScrollTop = 0;

	window.addEventListener('scroll', function() {
		if (window.scrollY > 0) {
			header.classList.add('scroll-down');
			body.classList.add('scrolling');
			header.classList.remove('scroll-up');
		}

		let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	    
	    if (st < lastScrollTop) {
	      	header.classList.add('scroll-up');
	      	header.classList.remove('scroll-down');
	    }

	    if (window.scrollY <= 0) {
			header.classList.remove('scroll-up');
			header.classList.remove('scroll-down');
			body.classList.remove('scrolling');
		}

	    lastScrollTop = st <= 0 ? 0 : st;
	});
}

fixedHeader();

/* SLIDER
---------------------------------------------------- */
$('.approved .slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true
});

$('.reviews-slider').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	responsive: [
		{
		    breakpoint: 1200,
		    settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		    }
	    },
	]
});

$('.natural-slider').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	appendArrows: $('.natural .center'),
	responsive: [
		{
		    breakpoint: 1200,
		    settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		    }
	    },
	    {
		    breakpoint: 991,
		    settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		    }
	    },
	    {
		    breakpoint: 768,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		    }
	    }
	]
});

$('.slider-face .slider-wrap ul').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	responsive: [
		{
		    breakpoint: 991,
		    settings: {
		        arrows: false,
		        autoplay: true,
		        autoplaySpeed: 2000
		    }
    	},
	]
});

$('.care-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true
});

$('.related-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false
});

function slickPortfolio() {
	if ($(window).width() < 1200) {
		$('.portfolio').not('.slick-initialized').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			autoplay: true,
  			autoplaySpeed: 2000,
  			responsive: [
  				{
				    breakpoint: 500,
				    settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,
				    }
			    },
  			]
		});

		$('.portfolio.not-slick').slick('unslick');
	} else {
		$('.portfolio.slick-initialized').slick('unslick');
	}	
}
slickPortfolio();

$(window).resize(function() {
	slickPortfolio();
});

let hovLi = document.querySelectorAll('.nav > ul > li > .sub-nav > ul > li');
let navInfo = document.querySelectorAll('.nav > ul > li > .sub-nav > ul > li .nav-info');

hovLi.forEach(li => {
	li.addEventListener('mouseover', function() {
		for (var i = 0; i < navInfo.length; i++) {
			navInfo[i].style.display = 'none';
		}
		
		this.querySelector('.nav-info').style.display = 'block';
	});
});

/* MOBILE MENU
---------------------------------------------------- */
function MobileMenu() {
	let btnNav = document.querySelector('.btn-nav');
	let nav = document.querySelector('nav');

	btnNav.addEventListener('click', function() {
		nav.classList.toggle('active');
		this.classList.toggle('active');
	});

	nav.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', (e) => {
			if (e.target.querySelector('i') != null) {
				e.target.parentElement.classList.toggle('active')
			}

			return false;
		});
	});
}

if (document.querySelector('.btn-nav')) MobileMenu();	

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
 
    let animation = document.querySelectorAll('.animation');
 
    function scrolling(e) {
    	if (animation.length) {
			for (var i = 0; i < animation.length; i++) {
				if (isPartiallyVisible(animation[i])) {
					animation[i].classList.add("animation-no"); 
				} else {
					animation[i].classList.remove("animation-no"); 
				}
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

/* DROP DOWN
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

/* FOCUS INPUT
---------------------------------------------------- */
let input = document.querySelectorAll('input');
let textarea = document.querySelectorAll('textarea');

input.forEach(input => {
	input.addEventListener('focus', function() {
		this.parentElement.classList.add('focus');
	});

	input.addEventListener('blur', function() {
		if (this.value == '') {
			this.parentElement.classList.remove('focus');
		}		
	});
});

textarea.forEach(textarea => {
	textarea.addEventListener('focus', function() {
		this.parentElement.classList.add('focus');
	});

	textarea.addEventListener('blur', function() {
		if (this.value == '') {
			this.parentElement.classList.remove('focus');
		}			
	});
});

/* TABS
---------------------------------------------------- */
function tabs() {
	let tabs = $('.tabs');
	let controls = null;
	let tabsItem = null;

	tabs.each(function() {
		controls = $(this).find('.control-tab li a');
		tabsItem = $(this).find('.content-tab');

		controls.on('click', function() {
			openTab($(this));
			return false;
		});
	});

	function openTab(_this) {
		let clsTab = _this.closest('li').attr('data-tab');
		let tab = _this.closest('.tabs').find('.' + clsTab);

		_this.closest('.control-tab').find('li').each(function() {
			$(this).removeClass('active');
		});

		_this.closest('.tabs').find('.content-tab').each(function() {
			$(this).removeClass('active');
		});

		_this.closest('li').addClass('active');
		tab.addClass('active');
	}
}

tabs();