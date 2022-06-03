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

const coffeeList = [{
        title: "Black",
        description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
        ingredients: ["Coffee"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        id: 1,
    },
    {
        title: "Latte",
        description: "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
        ingredients: ["Espresso", "Steamed Milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/509px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
        id: 2,
    },
    {
        title: "Cappuccino",
        description: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
        ingredients: ["Espresso", "Steamed Milk", "Foam"],
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg?20090314201738",
        id: 3,
    },
    {
        title: "Americano",
        description: "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
        ingredients: ["Espresso", "Hot Water"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/600px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg?20130128023339",
        id: 4,
    },
    {
        title: "Espresso",
        description: "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
        ingredients: ["1oz Espresso"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/1024px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg?20080501125946",
        id: 5,
    },
    {
        title: "Doppio",
        description: "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
        ingredients: ["2oz Espresso"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/1280px-Doppio.jpg?20171018103842",
        id: 6,
    },
    {
        title: "Cortado",
        description: "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
        ingredients: ["1oz Espresso", "1oz Steamed Milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
        id: 7,
    },
    {
        title: "Red Eye",
        description: "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
        ingredients: ["Coffee", "Espresso"],
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg?20070806033323",
        id: 8,
    },
    {
        title: "Galão",
        description: "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
        ingredients: ["Espresso", "Foamed milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/800px-Gal%C3%A3o.jpg?20130302120048",
        id: 9,
    },
    {
        title: "Lungo",
        description: "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
        ingredients: ["Long pulled espresso"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Caff%C3%A8_lungo.JPG/1200px-Caff%C3%A8_lungo.JPG?20110805160248",
        id: 10,
    },
    {
        title: "Macchiato",
        description: "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
        ingredients: ["Espresso", "Foam"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg/1280px-Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg?20111017101250",
        id: 11,
    },
    {
        title: "Mocha",
        description: "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
        ingredients: ["Espresso", "Steamed Milk", "Chocolate"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mocaccino-Coffee.jpg/1280px-Mocaccino-Coffee.jpg?20170831073517",
        id: 12,
    },
    {
        title: "Ristretto",
        description: "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
        ingredients: ["Short pulled espresso"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Doppio_ristretto_Chiang_Mai.jpg/800px-Doppio_ristretto_Chiang_Mai.jpg?20130622000811",
        id: 13,
    },
    {
        title: "Flat White",
        description: "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
        ingredients: ["Espresso", "Steamed Milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/800px-Flat_white_coffee_with_pretty_feather_pattern.jpg?20180228101834",
        id: 14,
    },
    {
        title: "Affogato",
        description: "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
        ingredients: ["Espresso", "Ice cream"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg/1200px-Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg?20130128032439",
        id: 15,
    },
    {
        title: "Café au Lait",
        description: "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
        ingredients: ["Coffee", "Steamed Milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
        id: 16,
    },
    {
        title: "Irish",
        description: "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
        ingredients: ["Coffee", "Whiskey", "Sugar", "Cream"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Irish_coffee_glass.jpg/800px-Irish_coffee_glass.jpg?20100628194228",
        id: 17,
    },
    {
        title: "Guayoyo",
        description: "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
        ingredients: ["Coffee", "Traditional", "Hot Water"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        id: 18,
    },
    {
        title: "Cortadito",
        description: "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
        ingredients: ["Coffee", "Traditional", "Sugar", "Milk"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cuban_coffee-_2013-04-05_14-30.jpg/800px-Cuban_coffee-_2013-04-05_14-30.jpg?20130405183031",
        id: 19,
    },
    {
        title: "Aguapanela Coffee",
        description: "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
        ingredients: ["Coffee", "Sweet", "Panela", "Traditional"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg/1280px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg?20150528125439",
        id: 20,
    },
];

function take_decimal_number(num, n) {
    //num : số cần xử lý
    //n: số chữ số sau dấu phẩy cần lấy
    let base = 10 ** n;
    let result = Math.round(num * base) / base;
    return result;
}
//Fake the price of menuCoffee
for (let i = 0; i < coffeeList.length; i++) {
    let price = Math.round(Math.random() * 50 + 5);
    coffeeList[i].price = price + ".000" + " VND";
}

for (let i = 0; i < coffeeList.length; i++) {
    console.log(coffeeList[i].price);
}

for (let i = 0; i < 10; i++) {
    //Create divPartMenu
    const divPartMenu = document.createElement("div");
    divPartMenu.className = "coffee";
    divPartMenu.style.width = "100%";
    //Create the layout1 divPartMenu
    const menuPart1 = document.querySelector(".menu-part1");
    //append to menuPart1
    menuPart1.appendChild(divPartMenu);
    //Style it to flex
    divPartMenu.style.display = "flex";
    // divPartMenu.style.justifyContent = "space-around";
    //create the imgPart inside the divPartMenu
    const imgPart = document.createElement("img");
    imgPart.style.maxWidth = "100%";
    imgPart.src = coffeeList[i].image;
    divPartMenu.appendChild(imgPart);
    imgPart.style.width = "100px";
    imgPart.style.height = "70%";

    //create detail information about the coffee inside div
    const detailPart = document.createElement("div");
    detailPart.className = "detail-part";
    divPartMenu.appendChild(detailPart);
    detailPart.style.display = "flex";
    // detailPart.style.alignItems = "center";
    detailPart.style.flexDirection = "column";
    detailPart.style.justifyContent = "flex-start";
    // detailPart.style.width = "70%";
    // detailPart.style.height = "70%";
    //detailed Infor (title,price)
    const detailTop = document.createElement("div");
    detailTop.className = "detail-top";
    detailTop.innerHTML = `<p class="coffee-text">${coffeeList[i].title}__${coffeeList[i].price}</p>`;
    console.log(detailTop);
    detailPart.appendChild(detailTop);
    //Detail bot
    const detailBot = document.createElement("div");
    detailBot.className = "detail-bot";
    detailBot.innerHTML = `<p class="ingredients1">Ingredients: ${coffeeList[i].ingredients}</p>`;
    detailPart.appendChild(detailBot);
}

for (let i = 10; i < 20; i++) {
    //Create divPartMenu
    const divPartMenu = document.createElement("div");
    divPartMenu.className = "coffee";
    divPartMenu.style.width = "100%";
    //Create the layout1 divPartMenu
    const menuPart1 = document.querySelector(".menu-part2");
    //append to menuPart1
    menuPart1.appendChild(divPartMenu);
    //Style it to flex
    divPartMenu.style.display = "flex";
    // divPartMenu.style.justifyContent = "space-around";
    //create the imgPart inside the divPartMenu
    const imgPart = document.createElement("img");
    imgPart.style.maxWidth = "100%";
    imgPart.src = coffeeList[i].image;
    divPartMenu.appendChild(imgPart);
    imgPart.style.width = "100px";
    imgPart.style.height = "70%";

    //create detail information about the coffee inside div
    const detailPart = document.createElement("div");
    detailPart.className = "detail-part";
    divPartMenu.appendChild(detailPart);
    detailPart.style.display = "flex";
    // detailPart.style.alignItems = "center";
    detailPart.style.flexDirection = "column";
    detailPart.style.justifyContent = "flex-start";
    // detailPart.style.width = "70%";
    // detailPart.style.height = "70%";
    //detailed Infor (title,price)
    const detailTop = document.createElement("div");
    detailTop.className = "detail-top";
    detailTop.innerHTML = `<p class="coffee-text">${coffeeList[i].title}__${coffeeList[i].price}</p>`;
    console.log(detailTop);
    detailPart.appendChild(detailTop);
    //Detail bot
    const detailBot = document.createElement("div");
    detailBot.className = "detail-bot";
    detailBot.innerHTML = `<p class="ingredients2">Ingredients: ${coffeeList[i].ingredients}</p>`;
    detailPart.appendChild(detailBot);
}