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
	slidesToShow: 2,
	slidesToScroll: 2,
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

MobileMenu();	

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