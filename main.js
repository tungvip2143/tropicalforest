// behavior header
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// scroll hidden header

let lastScrollTop = 0;
let header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-70px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

// slider img 
window.addEventListener('load', function() {
    const slider = document.querySelector('.slider');
    const sliderItem = document.querySelectorAll('.slider-item');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn')
    const dotItems = document.querySelectorAll('.slider-dot-item');
    const sliderContent = document.querySelectorAll('.slider-content');
    const sliderLength = sliderItem.length;
    let index = 0;


    // click dotItems
    let manualSlider = function(manual) {
        sliderItem.forEach((slide) => {
            slide.classList.remove('active');
        });
        dotItems.forEach((slideIcons) => {
            slideIcons.classList.remove('active');
        });
        sliderContent.forEach((slideContent) => {
            slideContent.classList.remove('active');
        });

        sliderItem[manual].classList.add('active');
        dotItems[manual].classList.add('active');
        sliderContent[manual].classList.add('active');
    };

    dotItems.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            manualSlider(i);
            index = i;
        });
    });

    //click next and pre button
    nextBtn.addEventListener('click', function() {
        handleSlider(1);
    });
    prevBtn.addEventListener('click', function() {
        handleSlider(-1);
    });


    function handleSlider(direction) {
        if (direction === 1) {
            sliderItem.forEach((slide) => {
                slide.classList.remove('active');
            });
            dotItems.forEach((slideIcons) => {
                slideIcons.classList.remove('active');
            });
            sliderContent.forEach((slideContent) => {
                slideContent.classList.remove('active');
            });
            index++;

            if (index > (sliderLength - 1)) {
                index = 0;
            }
            sliderItem[index].classList.add('active');
            dotItems[index].classList.add('active');
            sliderContent[index].classList.add('active');
        } else if (direction === -1) {
            sliderItem.forEach((slide) => {
                slide.classList.remove('active');
            });
            dotItems.forEach((slideIcons) => {
                slideIcons.classList.remove('active');
            });
            sliderContent.forEach((slideContent) => {
                slideContent.classList.remove('active');
            });
            index--;

            if (index < 0) {
                index = sliderLength - 1;
            }
            sliderItem[index].classList.add('active');
            dotItems[index].classList.add('active');
            sliderContent[index].classList.add('active');
        }
    }

    //image slider autoplay
    let playSlider;
    let repeater = function() {
        playSlider = setInterval(function() {
            sliderItem.forEach(function(slides) {
                slides.classList.remove('active');
            });
            dotItems.forEach(function(dots) {
                dots.classList.remove('active');
            });
            sliderContent.forEach(function(content) {
                content.classList.remove('active');
            });
            index++;

            if (index > (sliderLength - 1)) {
                index = 0;
            }
            sliderItem[index].classList.add('active');
            dotItems[index].classList.add('active');
            sliderContent[index].classList.add('active');
        }, 4000);
    }
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
        sliderContent[index].classList.remove('active');
        clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
        sliderContent[index].classList.add('active');
        repeater();
    });
})

// cart active