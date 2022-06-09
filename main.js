// behavior header
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    userForm.classList.remove('active');
    myLogin.classList.remove('active')
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    userForm.classList.remove('active');
    myLogin.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    userForm.classList.remove('active');
    myLogin.classList.remove('active')
}

let userForm = document.querySelector('.user-form');

document.querySelector('#user-btn').onclick = () => {
    userForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    myLogin.classList.remove('active')
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    userForm.classList.remove('active');
    myLogin.classList.remove('active')
        // cartItem.classList.remove('active');
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

// cart working
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// make function
function ready() {
    // remove item from cart
    let removeCartButton = document.getElementsByClassName('cart-remove')
    for (let i = 0; i < removeCartButton.length; i++) {
        let button = removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }
    // quantity changes
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // add to cart
    let addCart = document.getElementsByClassName('add-cart');
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }
    // buy btn work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

// buy btn
function buyButtonClicked() {
    alert('Your Order is placed')
    let cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal();
}
// remove item from cart
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
// quantityChanged
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
// add to cart
function addCartClicked(event) {
    let button = event.target
    let shopProducts = button.parentElement
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText
    let price = shopProducts.getElementsByClassName('price')[0].innerText
    let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}


function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div")
    cartShopBox.classList.add('cart-box')
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    let namessIndex = cartItemsNames.length;
    for (let i = 0; i < namessIndex; i += 1) {
        if (cartItemsNames[i].innerText == title) {
            alert('You have already add this item to your cart')
            return;
        }

    }
    let cartBoxContent = `
    <img src="${productImg}" , alt=" " class="cart-img" />
    <div class="detail-box">
        <h3 class="cart-product-title">${title}</h3>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity" />
    </div>
    <!-- remove cart -->
    <i class="bx bxs-trash-alt cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}


// update total
function updateTotal() {
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + price * quantity;
    }
    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}

// user informationlet 
let inputUsername = document.querySelector(".username")
let inputPassword = document.querySelector(".password")
let login = document.querySelector(".login")
let loginForm = document.querySelector(".login-form")
let errorLogin = document.querySelector(".error-login")
let errorPass = document.querySelector(".error-pass")
let myLogin = document.querySelector(".my-login")
let signOut = document.querySelector("#signout-btn")



loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const valueUser = inputUsername.value;
    const valuePass = inputPassword.value;
    console.log(valueUser, valuePass)

    if (valueUser < 1) {
        errorLogin.style.display = 'block';
    } else if (valuePass < 1) {
        errorPass.style.display = 'block';
    } else {
        signOut.style.display = 'block';
        localStorage.setItem("Username", valueUser)
        myLogin.innerText = "Hi," + valueUser;
        window.location.href = "index.html";
    }
})

let getUser = localStorage.getItem("Username");
if (getUser !== null) {
    userForm.style.display = "none";
    myLogin.style.display = "block"
    myLogin.innerText = "Hi! " + getUser;
    document.querySelector('#user-btn').onclick = () => {
        myLogin.classList.toggle('active')
        userForm.classList.remove('active');
        cartItem.classList.remove('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }
    signOut.style.display = "inline-block"
    signOut.addEventListener("click", () => {
        let ask = confirm("Bạn muốn đăng xuất?");
        if (ask) {
            localStorage.removeItem("Username");
            window.location.href = "index.html"
        }
    })
}

//