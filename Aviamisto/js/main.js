/*  BURGER-MENU
------------------------------------------------- */
function Menu() {
    let btn = document.querySelector('.btn-burger');
    let nav = document.querySelector('.nav');
    let close = document.querySelectorAll('.close-menu');
    let ovelay = document.querySelector('.popup-overlay');

    btn.onclick = function(e) {
        e.preventDefault();
        ovelay.classList.toggle('active');
        nav.classList.toggle('active');
        btn.classList.toggle('active');
    };

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function(e) {
            e.preventDefault();
            ovelay.classList.remove('active');
            nav.classList.remove('active');
            btn.classList.toggle('active');
        };
    }
}

new Menu();


/* ANHOR-LINK
---------------------------------------------------- */
function anhor() {
    var anhors = document.querySelectorAll('.anhor');

    for (var i = 0; i < anhors.length; i++) {
        anhors[i].onclick = function(e) {
            var clasName = this.getAttribute('data-class');
            var elem = document.querySelector('.' + clasName);
            scroll(elem);
        }
    }
}
anhor();

function scroll(elem)  {
    var pos = elem.offsetTop;
    var count = window.pageYOffset;

    var intID = setInterval(function() {
        if (count > pos) {
            count -= 8;
            if (count <= pos) {
                clearInterval(intID);
                count = pos;
            } 
        } else {
            count += 8;
            if (count >= pos) {
                clearInterval(intID);
                count = pos;
            } 
        }
        window.scrollTo(0, count);
    }, 1);
}

/*  POPUP
------------------------------------------------- */
function popup() {
    const btn = document.querySelectorAll('.btn-popup');
    const ovelay = document.querySelector('.popup-overlay');
    let popup = null;

    for (let i = 0; i < btn.length; i++) {
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

        popup.classList.remove('active');
        ovelay.classList.remove('active');
    }
}

popup();

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

/* SHOW SECTION
---------------------------------------------------- */

function showSection(count) {
    let btnShow = document.querySelectorAll('.btn-show');

    for (let i = 0; i < btnShow.length; i++) {
        btnShow[i].onclick = function() {
            let parentEl = this.previousElementSibling;

            let hiddenEl = parentEl.querySelectorAll('.hidden-desctop');

            if (count > hiddenEl.length) {
                count = hiddenEl.length;
                this.style.display = 'none';
            }

            for (let i = 0; i < count; i++) {
                hiddenEl[i].classList.remove('hidden-desctop');
            }
        }
    }
}

let show1 = new showSection(5);


/* CART-CALC
---------------------------------------------------- */
function cartCalc() {
    let calcMinus = document.querySelectorAll('.calc-btn-down');
    let calcPlus = document.querySelectorAll('.calc-btn-up');

    let btnProduct = document.querySelectorAll('.btn-product')

    for (let i = 0; i < calcPlus.length; i++) {
        calcPlus[i].onclick = function() {
            this.previousElementSibling.value ++;

            if (this.previousElementSibling.value > 0) {
                for (let i = 0; i < btnProduct.length; i++) {
                    btnProduct[i].classList.add('active');
                }
            }
        }
    }

    for (let i = 0; i < calcMinus.length; i++) {
        calcMinus[i].onclick = function() {

            if (this.nextElementSibling.value <= 0) {
                return;
            }

            this.nextElementSibling.value --;

            if (this.nextElementSibling.value == 0) {
                for (let z = 0; z < btnProduct.length; z++) {
                    btnProduct[z].classList.remove('active');
                }
            }


        }
    }
}

cartCalc();


/* SLIDER
---------------------------------------------------- */

function Slider(options) {

    let slider = document.querySelectorAll(options.elem);

    for (let i = 0; i < slider.length; i++) {
        let slideContainer = slider[i].querySelector('.slide-container');
        let track = slider[i].querySelector('.track');
        let slideItem = slider[i].querySelectorAll('.slide-item');

        let next = slider[i].querySelector('.next').addEventListener('click', nextSlid);
        let prew = slider[i].querySelector('.prew').addEventListener('click', prewSlid);

        let dots;

        let countDot = 0;

        let count = slideItem.length;

        let slidesToShow = options.slidesToShow;
        let slidesToScroll = options.slidesToScroll;
        let responsive = options.responsive;

        /*  ADD-DOT 
        ------------------------------------------------- */
        function addDots() {
            let slideDots = document.createElement('div');

            for (let i = 0; i < slideItem.length / slidesToScroll; i++) {
                slideContainer.appendChild(slideDots);
                slideDots.classList.add('slide-dots');
                let span = document.createElement('span');
                slideDots.appendChild(span);
            }

            dots = slider[i].querySelectorAll('.slide-dots span');
            dotsAddActive(0);

            dotsClick();
        }

        /*  DOTS-CLICK 
        ------------------------------------------------- */
        function dotsClick() {
            for (let i = 0; i < dots.length; i++) {
                dots[i].onclick = function() {

                    slideSpeed(options.speed);
                    
                    for (let i = 0; i < dots.length; i++) {
                        dotsRemoveActive(i);
                    }

                    dotsAddActive(i);

                    countDot = i;

                    count = slideItem.length + i * slidesToScroll;

                    setTransform();
                }
            }
        }

        function dotsAddActive(index) {
            if (options.dots) {
                dots[index].classList.add('active');
            }
        }

        function dotsRemoveActive(index) {
            if (options.dots) {
                dots[index].classList.remove('active');
            }
        }

        /*  SLIDE-CLONE
        ------------------------------------------------- */
        function slideClone() {
            for (let i = 0; i < slideItem.length; i++) {
                let cloneStart = slideItem[slideItem.length - slideItem.length + i].cloneNode(true);
                cloneStart.classList.add('cloned');
                track.insertBefore(cloneStart, slideItem[0]);
            }

            for (let i = 0; i < slideItem.length; i++) {
                let cloneEnd = slideItem[i].cloneNode(true);
                cloneEnd.classList.add('cloned');
                track.appendChild(cloneEnd);
            }
        }
        slideClone();

        let slideItems = slider[i].querySelectorAll('.slide-item');

        for (let i = 0; i < slideItems.length; i++) {
            slideItems[i].onmousedown = function(e) {
                e.preventDefault();
            }
        }
        
        function swipeSlider() {

            let desc = 0;

            let widthItem = 0;

            let proc = 0;

            let drob = 0;

            /*  SWIPE DESCTOP
            ------------------------------------------------- */
            function swiperDesctop(e) {
                track.addEventListener("mousedown", swipeStart);

                let shiftX = 0;

                function swipeStart(e) {
                    track.removeEventListener("mousedown", swipeStart);

                    widthItem = slideItem[0].clientWidth;

                    proc = widthItem / 3;

                    drob = this.clientWidth / 100;

                    shiftX = e.pageX;

                    track.addEventListener("mouseup", swipeEnd);

                    track.addEventListener("mousemove", swipeMove);

                    track.addEventListener("mouseleave", swipeEnd);

                    setTimeout(function() {
                        track.addEventListener("mousedown", swipeStart);
                    }, options.speed);
                }

                function swipeMove(e) {
                    slideSpeed(0);

                    desc = e.pageX - shiftX;

                    let swipe = count * 100 / -slidesToShow + desc / drob;

                    track.style.transform = 'translate3d(' + swipe + '%,0,0)';
                }

                function swipeEnd(e) {
                    slideSpeed(options.speed);

                    track.style.transform = 'translate3d(' + count * 100 / -slidesToShow + '%,0,0)';

                    if (desc < -proc) {
                        nextSlid();
                        desc = 0;
                    }else if (desc > proc) {
                        prewSlid();
                        desc = 0;
                    }

                    track.removeEventListener("mousemove", swipeMove);
                    track.removeEventListener("mouseleave", swipeEnd);
                    track.removeEventListener("mouseup", swipeEnd);
                 };
            }
            swiperDesctop();

            /*  SWIPE MOBILE
            ------------------------------------------------- */
            function swipeMobile() {
                track.addEventListener("touchstart", swipeStart);
                
                let touchX = 0;

                function swipeStart(e) {
                    track.removeEventListener("touchstart", swipeStart);

                    widthItem = slideItem[0].clientWidth;

                    proc = widthItem / 3;

                    drob = this.clientWidth / 100;

                    touchX = e.changedTouches[0].screenX;

                    track.addEventListener("touchend", swipeEnd);

                    track.addEventListener("touchmove", swipeMove);

                    track.addEventListener("touchleave", swipeEnd);

                    setTimeout(function() {
                        track.addEventListener("touchstart", swipeStart);
                    }, options.speed);
                }

                function swipeMove(e) {
                    slideSpeed(0);

                    desc = e.changedTouches[0].screenX - touchX;

                    let swipe = count * 100 / -slidesToShow + desc / drob;
                   
                    track.style.transform = 'translate3d(' + swipe + '%,0,0)';
                }

                function swipeEnd(e) {
                    slideSpeed(options.speed);

                    track.style.transform = 'translate3d(' + count * 100 / -slidesToShow + '%,0,0)';

                    if (desc < -proc) {
                        nextSlid();
                        desc = 0;
                    }else if (desc > proc) {
                        prewSlid();
                        desc = 0;
                    }
                    track.removeEventListener("touchmove", swipeMove);
                    track.removeEventListener("touchleave", swipeEnd);
                    track.removeEventListener("touchend", swipeEnd);
                }
            }
            swipeMobile();
        }
        

        function setTransform() {

            if (responsive) {
                const allResponsive = responsive.map(item => item.breakpoint);
                const maxResponse = Math.max(...allResponsive);
                const widthWindow = window.innerWidth;

                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponsive.length; i++) {
                        if (widthWindow < allResponsive[i] ) {
                            slidesToShow = responsive[i].slidesToShow;
                        }
                    }
                }else if (widthWindow > maxResponse) {
                    slidesToShow = options.slidesToShow;
                }
            }

            for (let i = 0; i < slideItems.length; i++) {
                slideItems[i].style.minWidth = 100 / slidesToShow + '%';
            }

             
            track.style.transform = 'translate3d(-' + count * 100 / slidesToShow + '%,0,0)';
        }
        setTransform();

        /*  SPEED-SLIDE 
        ------------------------------------------------- */
        function slideSpeed(seconds) {
            track.style.cssText = "transition: transform "+ seconds +"ms ease";
            
        }

        /*  CONTROL-POSITION 
        ------------------------------------------------- */
        function controlPosition() {
            setTimeout(function() {
                slideSpeed(0);

                setTransform();
            }, options.speed);
        }

        /*  BTN-DISABLED 
        ------------------------------------------------- */
        function btnDisabled(btn) {
            btn.disabled = true;

            setTimeout(function() {
                btn.disabled = false;
            }, options.speed, btn);
        }
        
        function autoplaySlide() {
            nextSlid();
        }
        

        function nextSlid() {
            
            dotsRemoveActive(countDot);

            slideSpeed(options.speed);

            btnDisabled(this);

            countDot ++;

            count = count + slidesToScroll;

            setTransform();

            if (count >= slideItem.length + slideItem.length) {
                countDot = 0;

                count = slideItem.length;

                controlPosition();
            }

            dotsAddActive(countDot);
        }

        function prewSlid() {
            dotsRemoveActive(countDot);

            slideSpeed(options.speed);

            btnDisabled(this);

            countDot --;

            count = count - slidesToScroll;

            setTransform();

            if (count < slideItem.length ) {
                countDot = slideItem.length / slidesToScroll -1;

                count = slideItem.length + slideItem.length - slidesToScroll;

                controlPosition();
            }

            dotsAddActive(countDot);
        }


        function init() {
            if (options.dots) {
                addDots();
            }
            if (options.swipe) {
                swipeSlider();
            }
            if (options.autoplay) {
                setInterval(autoplaySlide, options.autoplaySpeed);
            }


            window.addEventListener('resize', setTransform);
        }

        init();
    }
}

let slider = new Slider({
    elem: '.slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    swipe: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 3000,
});

