/*  SLIDER 
------------------------------------------------- */
$('.home-slider ul').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive:[
      {
        breakpoint: 500,
        settings: {
          dots: false,
          arrows: false,
        }
      },
    ],
});

$('.slider-product ul').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive:[
      {
        breakpoint: 500,
        settings: {
          dots: false,
          arrows: false,
        }
      },
    ],
});


/*  MENU-MOB
------------------------------------------------- */
var btnBurger = document.querySelectorAll('.btn-burger');

var menuLeft = document.querySelector('.menu-left');

var closeBurger = document.querySelector('.close-burger');

var overlay = document.querySelector('.popup-overlay');


for (var i = 0; i < btnBurger.length; i++) {
	btnBurger[i].onclick = function() {
		menuLeft.classList.add('active');
		overlay.classList.add('active');
	}
}

closeBurger.onclick = function() {
  	menuLeft.classList.remove('active');
  	overlay.classList.remove('active');
};


