
const body = document.querySelector("body");

const themeToggleBtn = document.getElementById("theme-toggle");
const gradientEffect = document.getElementById("gradient-effect");
const cartBtn = document.getElementById("navbar__cart-icon");
const searchBtn = document.getElementById("navbar__search-icon");
const arrowBtn = document.getElementById("hero__arrow-icon");
const hamburgerBtn = document.getElementById("navbar__hamburger-icon");





function themeToggle(){
    const popularTrendsCard = document.querySelectorAll(".popular-trends-card");
    if(!body.classList.length){
        cartBtn.src = "./images/cart-icon-white.svg";
        searchBtn.src = "./images/search-icon-white.svg";
        arrowBtn.src = "./images/arrow-bottom-icon-white.svg";
        hamburgerBtn.src = "./images/hamburger-icon-white.png";
        gradientEffect.style.display = "block";

        popularTrendsCard.forEach(element => {
            element.style.background = "linear-gradient(163.76deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100.82%)";
        
          });
          
        body.classList.toggle("dark-mode");
    } else {
        cartBtn.src = "./images/cart-icon-black.svg";
        searchBtn.src = "./images/search-icon-black.svg";
        arrowBtn.src = "./images/arrow-bottom-icon-black.svg";
        hamburgerBtn.src = "./images/hamburger-icon-black.png";
        gradientEffect.style.display = "none";

        popularTrendsCard.forEach(element => {
            element.style.background = "#282828";
        
          });

        body.classList.toggle("dark-mode");
    }
}
themeToggleBtn.onclick = themeToggle;

