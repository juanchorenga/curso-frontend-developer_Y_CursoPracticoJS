const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamb = document.querySelector(".menu");
const celMenu = document.querySelector(".mobile-menu");
const carroCompra = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

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