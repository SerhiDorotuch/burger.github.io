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

$('.product-slide').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive:[
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ],
});

$('.option-slide').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: true,
  responsive:[
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ],
});


$('.slider-kids').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  responsive:[
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        }
      },
       {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

/*  POPUP
------------------------------------------------- */
function popup() {
    const btn = document.querySelectorAll('.btn-popup');
    const ovelay = document.querySelector('.popup-overlay');
    var popup = null;

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', openPopup);
    }

    function openPopup(e) {
        e.preventDefault();

        popup = document.querySelector('.' + this.getAttribute('data-popup'));
        const close = popup.querySelector('.popup-close');

        close.addEventListener('click', closePopup);

        ovelay.classList.add('active');
        popup.classList.add('active');
    }

    function closePopup(e) {
        e.preventDefault();

        console.log('hi');
        popup.classList.remove('active');
        ovelay.classList.remove('active');
    }
}

popup();

/*  SELECT
----------------------------------------------  */
var select = document.querySelectorAll('.select');

  for (var i = 0; i < select.length; i++) {
    var view = select[i].querySelector('.view');

    view.onclick = function() {
      var parent = this.closest('.select'),
        ul = parent.querySelector('ul'),
        li = ul.querySelectorAll('li'),
        view = parent.querySelector('.view'),
        input = parent.querySelector('input[type="hidden"]');
        
      ul.classList.toggle('active');
      parent.classList.toggle('open');

      for (var j = 0; j < li.length; j++) {
        li[j].onclick = function() {
          view.innerHTML = this.innerHTML;

          ul.classList.remove('active');
          parent.classList.remove('open');

          input.setAttribute('value', this.getAttribute('data-value'));
        }
      }
    }
  }

  /*  ACCORDEON 
------------------------------------------------- */
function acordeon(setting) {
  var click = document.querySelectorAll(setting.clasName + " " + ".dropdownlink");
  for(var i = 0; i < click.length; i++) {
    click[i].addEventListener('click', function(e) {

      var el = this.nextElementSibling;
      var contentHeigth = this.nextElementSibling.clientHeight;
      var height = this.nextElementSibling.scrollHeight;

      if (setting.dropAll) {
        var parent = this.closest(setting.clasName);
        var content = parent.querySelectorAll('.submenuItems');

        for (var i = 0; i < click.length; i++) {
          click[i].classList.remove('active');
        }

        for (var i = 0; i < content.length; i++) {
          content[i].style.height = 0 + 'px';
        }
      }


      if (contentHeigth == 0) {
        this.classList.add('active');
        el.style.height = height + 'px';

        function time(el) {
          el.style.height = 'initial';
        }
        setTimeout(time, 300, el);

      }else {
        el.style.height = contentHeigth + 'px';
        this.classList.remove('active');

        function time(el) {
          el.style.height = 0 + 'px';
        }
        setTimeout(time, 0, el);
      }
    });
  }
}
var ac1 = new acordeon({
  clasName: '.acordeon',
  dropAll: false,
});

var ac2 = new acordeon({
  clasName: '.account-accordeon',
  dropAll: false,
});






  /*  SHOW-MORE 
------------------------------------------------- */
// function show() {
//   var showMore = document.querySelectorAll('.show-more');

//   var count = true;

//   for (var i = 0; i < showMore.length; i++) {
//     showMore[i].onclick = function() {

//       var prevEl = this.previousElementSibling;

//       var elStaticHeight = this.previousElementSibling.clientHeight;

//       console.log(elStaticHeight);

//       var elHeight = this.previousElementSibling.scrollHeight;
      
     

//       if (count) {
//           prevEl.style.height = elHeight + 'px';
//           console.log('da');
//           count = false;
//       }else {
//           prevEl.style.height = elStaticHeight + 'px'; 
//           console.log('no');
//           count = true;
//       }

//     }
//   }
// }

// show();
  





























// $(window).resize(function() {
//     if ($(this).width() < 1000) {
//         $('.catalog-category ul').slick({
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             dots: false,
//             arrows: false,
//         });
//     } else {
//         $('.catalog-category ul').slick('unslick');
//     }
// });

// if ($(window).width() < 1000) {
//     $('.catalog-category ul').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         dots: false,
//         arrows: false,
//     });
// } else {
//     $('.catalog-category ul').slick('unslick');
// }