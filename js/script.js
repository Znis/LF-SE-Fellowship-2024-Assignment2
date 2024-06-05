const body = document.querySelector("body");

const themeToggleBtn = document.getElementById("theme-toggle");
const gradientEffect = document.getElementById("gradient-effect");
const cartBtn = document.getElementById("navbar__cart-icon");
const searchBtn = document.getElementById("navbar__search-icon");
const arrowBtn = document.getElementById("hero__arrow-icon");
const hamburgerBtn = document.getElementById("navbar__hamburger-icon");
const secondTimer = document.getElementById("exclusive-offer__timer-second");

var sec = parseInt(secondTimer.textContent);
var displaySec = sec.toString();

setInterval(function () {
  secondTimer.innerText = displaySec;
  sec > 0 ? (sec -= 1) : (sec = 59);
  sec < 10
    ? (displaySec = "0" + sec.toString())
    : (displaySec = sec.toString());
}, 1000);

function featuredCardColorChanger() {
  if (!body.classList.length) {
    const featuredCard = document.querySelectorAll(".featured-card__content");
    const featuredCardCrossOutPrice = document.querySelectorAll(
      ".featured-card__price--cross-out"
    );
    var x = window.matchMedia("(max-width: 600px)");
    if (x.matches) {
      featuredCard.forEach((element) => {
        element.style.background = "#282828B2";
        element.style.color = "#FFFFFF";
      });
      featuredCardCrossOutPrice.forEach((element) => {
        element.style.color = "#FFFFFF";
      });
    } else {
      featuredCard.forEach((element) => {
        element.style.background =
          "linear-gradient(116.15deg, rgba(192, 192, 192, 0.63) -10.88%, rgba(255, 255, 255, 0.49) -10.87%, rgba(255, 255, 255, 0.07) 74.79%)";
        element.style.color = "#000000";
      });
      featuredCardCrossOutPrice.forEach((element) => {
        element.style.color = "#000000";
      });
    }
  }
}

function themeToggle() {
  var x = window.matchMedia("(max-width: 600px)");
  const popularTrendsCard = document.querySelectorAll(".popular-trends-card");
  const featuredCard = document.querySelectorAll(".featured-card__content");
  const featuredCardCrossOutPrice = document.querySelectorAll(
    ".featured-card__price--cross-out"
  );

  if (!body.classList.length) {
    cartBtn.src = "./images/cart-icon-white.svg";
    searchBtn.src = "./images/search-icon-white.svg";
    arrowBtn.src = "./images/arrow-bottom-icon-white.svg";
    hamburgerBtn.src = "./images/hamburger-icon-white.png";
    gradientEffect.style.display = "block";

    popularTrendsCard.forEach((element) => {
      element.style.background =
        "linear-gradient(163.76deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100.82%)";
    });
    featuredCard.forEach((element) => {
      element.style.background =
        "linear-gradient(116.15deg, rgba(192, 192, 192, 0.63) -10.88%, rgba(255, 255, 255, 0.49) -10.87%, rgba(255, 255, 255, 0.07) 74.79%)";
    });

    body.classList.toggle("dark-mode");
  } else {
    cartBtn.src = "./images/cart-icon-black.svg";
    searchBtn.src = "./images/search-icon-black.svg";
    arrowBtn.src = "./images/arrow-bottom-icon-black.svg";
    hamburgerBtn.src = "./images/hamburger-icon-black.png";
    gradientEffect.style.display = "none";

    popularTrendsCard.forEach((element) => {
      element.style.background = "#282828";
    });
    if (x.matches) {
      featuredCard.forEach((element) => {
        element.style.background = "#282828B2";
        element.style.color = "#FFFFFF";
      });
      featuredCardCrossOutPrice.forEach((element) => {
        element.style.color = "#FFFFFF";
      });
    }

    body.classList.toggle("dark-mode");
  }
}
themeToggleBtn.onclick = themeToggle;
window.onresize = featuredCardColorChanger;
