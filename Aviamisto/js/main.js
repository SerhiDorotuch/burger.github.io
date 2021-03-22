/*  BURGER-MENU
------------------------------------------------- */
function Menu() {
    let btn = document.querySelector('.btn-burger');
    let nav = document.querySelector('.nav');
    let close = nav.querySelector('.close-nav');

    btn.onclick = function(e) {
        e.preventDefault();
        nav.classList.toggle('active');
    };

    close.onclick = function(e) {
        e.preventDefault();
        nav.classList.remove('active');
    };
}

new Menu();