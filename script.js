let arrowLeft = document.querySelector('#arrowLeft');
    let arrowRight = document.querySelector('#arrowRight');
    let imgSlide = document.querySelectorAll('.slide');
    let current = 1;

    let counterRight = 0;
    let counterLeft;

    // reset
    function reset() {
        console.log(imgSlide)
        for (let i = 0; i < imgSlide.length; i++) {
            imgSlide[i].classList.remove('active');
        }
    }

    // init
    function init() {
        reset();

        updateBackgrounds(current);
    }

    function updateBackgrounds(current) {
        console.log(current, imgSlide[current - 1], imgSlide)
        imgSlide[current - 1].classList.add('active');
        const counterRight = current + 1 > imgSlide.length ? 1 : current + 1;
        const counterLeft = current - 1 < 1 ? imgSlide.length : current - 1;
        arrowLeft.style.background = `url('./${counterLeft}.jpg')`;
        arrowRight.style.background = `url('./${counterRight}.jpg')`;
    }

    // next slide
    function nextSlide() {
        reset();
        current++;
        if (current > imgSlide.length) {
            current = 1;
        }

        updateBackgrounds(current)
    }

    // prev slide
    function prevSlide() {
        reset();
        current--;

        if (current < 1) {
            current = imgSlide.length;
        }

        updateBackgrounds(current)
    }


    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);


    init();