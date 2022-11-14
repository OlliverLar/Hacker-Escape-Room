const hamburgerButton = document.querySelector(".menuHamburgerButton");
const phoneMenu = document.querySelector(".phoneMenu");
const xMarkButton = document.querySelector(".xMarkButton");

hamburgerButton.addEventListener("click", function() {
    phoneMenu.style.display = "flex";
    phoneMenu.style.backroundColor = "rgba(white, 0.5)";
})

xMarkButton.addEventListener("click", function() {
    phoneMenu.style.display= "none";
})