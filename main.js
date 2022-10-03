const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamb = document.querySelector(".menu");
const celMenu = document.querySelector(".mobile-menu");
const carroCompra = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamb.addEventListener("click", toggleMobileMenu);
carroCompra.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

//Función para cerrar menu si carro está abierto
function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed){
        aside.classList.add("inactive");
    }

    celMenu.classList.toggle("inactive");
}

//Funcion para cerrar carro si menu está abierto
function toggleCarritoAside (){
    const ismobileMenuClosed = celMenu.classList.contains("inactive");

    if (!ismobileMenuClosed){
        celMenu.classList.add("inactive");
    }
 
      aside.classList.toggle("inactive");  
    

}
//Js de los productos sin API REST
const productList = [];
productList.push({
    name: "iWacht",
    price: 120,
    image: "https://5.imimg.com/data5/ANDROID/Default/2020/12/EY/TM/RJ/42692862/product-jpeg-500x500.jpeg"
});
productList.push({
    name: "iPhone 13",
    price: 1600,
    image: "https://i.insider.com/617ad55a46a50c0018d40cc9?width=1000&format=jpeg&auto=webp",
});
productList.push({
    name: "iPad Air",
    price: 2300,
    image: "https://ss7.vzw.com/is/image/VerizonWireless/apple-ipad-air-pink-2022"
});

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>  */

for (product of productList){
   const productCard = document.createElement("div");
   productCard.classList.add("product-card");

   const productImg = document.createElement("img");
   productImg.setAttribute("src", product.image);

   const productInfo = document.createElement("div");
   productInfo.classList.add("product-info");

   const productInfoDiv = document.createElement("div");

   const productPrice = document.createElement("p");
   productPrice.innerText = "$" + product.price;

   const productName = document.createElement("p");
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement("figure");

   const productImgCart = document.createElement("img");
   productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}


