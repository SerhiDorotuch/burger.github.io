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

/* MOBILE MENU
---------------------------------------------------- */
function MobileMenu() {
	let btnNav = document.querySelector('.btn-nav');
	let nav = document.querySelector('nav');

	btnNav.addEventListener('click', function() {
		nav.classList.toggle('active');
		this.classList.toggle('active');
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