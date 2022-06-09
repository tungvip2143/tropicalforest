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

// user information
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
        window.location.href = "about.html";
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
            window.location.href = "about.html"
        }
    })
}