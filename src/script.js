document.addEventListener('DOMContentLoaded', function(event) {
    let hamburgerMenuOpen = false;

    let body = document.body;
    let hamburgerIcon = body.querySelector('.hamburger-open');
    let nav = body.querySelector('.nav-container');
    let closeButton = body.querySelector('.nav-container > span');

    hamburgerIcon.addEventListener("click", function() {
        nav.classList.remove("sm:right-[-250px]");
        nav.classList.add("sm:right-0");
        if(!hamburgerMenuOpen) {
            let timeout = setTimeout(function() {
                hamburgerMenuOpen = true;
                nav.classList.remove("sm:hidden");
                clearTimeout(timeout);
            }, 250);
        }
    });

    closeButton.addEventListener("click", function() {
        nav.classList.add("sm:right-[-250px]");
        nav.classList.remove("sm:right-0");
        if(hamburgerMenuOpen) {
            let timeout = setTimeout(function() {
                hamburgerMenuOpen = false;
                nav.classList.add("sm:hidden");
                clearTimeout(timeout);
            }, 250);
        }
    });

});