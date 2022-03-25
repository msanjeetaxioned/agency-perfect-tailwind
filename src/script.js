document.addEventListener('DOMContentLoaded', function(event) {
    let hamburgerMenuOpen = false;

    let body = document.body;
    let hamburgerIcon = body.querySelector('.hamburger-open');
    let nav = body.querySelector('.nav-container');
    let closeButton = body.querySelector('.nav-container > span');

    hamburgerIcon.addEventListener("click", function() {
        if(!hamburgerMenuOpen) {
            nav.classList.remove("sm:right-[-250px]");
            nav.classList.add("sm:right-0");
            let timeout = setTimeout(function() {
                hamburgerMenuOpen = true;
                nav.classList.remove("sm:hidden");
                clearTimeout(timeout);
            }, 250);
        }
    });

    closeButton.addEventListener("click", function() {
        if(hamburgerMenuOpen) {
            nav.classList.add("sm:right-[-250px]");
            nav.classList.remove("sm:right-0");
            let timeout = setTimeout(function() {
                hamburgerMenuOpen = false;
                nav.classList.add("sm:hidden");
                clearTimeout(timeout);
            }, 250);
        }
    });

    let counters = body.querySelectorAll(".counters");

    let counterContent = body.querySelector(".counter-absolute-content");
    let top = counterContent.getBoundingClientRect().top;

    let newInterval = setInterval(function() {
        if(window.scrollY >= top) {
            animateCounters();
            clearInterval(newInterval);
        }
    }, 50);

    function animateCounters() {
        counters.forEach(function(counter) {
            let maxCounterVal = counter.getAttribute("maxValue");
            let animationDuration = 250;
            let increment = maxCounterVal/animationDuration;
            let currentCounterVal = 0;
    
            let interval = setInterval(function() {
                currentCounterVal = currentCounterVal + increment;
                counter.innerHTML = Math.round(currentCounterVal);
    
                if(Math.round(currentCounterVal) == maxCounterVal) {
                    clearInterval(interval);
                }
            }, maxCounterVal/animationDuration);
        });
    }
});