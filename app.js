
/**
 * 
 */
function galleryPlugin () {
    const slides = document.querySelectorAll('.slide');

    for (const slide of  slides) {
        slide.addEventListener('click', function () {
            clearActiveClasses();
            slide.classList.add('active'); 
        })
    }


    function clearActiveClasses () {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }

    function backgroundAutoChanger () {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const body = document.querySelector('body');
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }


    setInterval(function() {
        backgroundAutoChanger();
    }, 5000);


    function randomActiveSlide() {
        let random = Math.floor(Math.random() * slides.length);
        slides[random].classList.add('active');
    }
    randomActiveSlide();
}

galleryPlugin();