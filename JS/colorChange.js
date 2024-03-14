const helloImg = document.getElementById("helloTextImg");
const backgroundSection = document.getElementById("backgroundSection");
const headerSection = document.getElementById("header-id")
const toggleNav = document.getElementById("toggleFooter")
const body = document.getElementById("body-id")
const navb = document.getElementById("navToggle")


//Hämtar element i index-sidan och "togglar" klasser på den när jag klickar på min image
helloImg.addEventListener("click", function(){
    backgroundSection.classList.toggle("bodyToggle");
    headerSection.classList.toggle("bodyToggle");
    toggleNav.classList.toggle("bodyToggle")
    body.classList.toggle("bgToggle")
    navb.classList.toggle("navb")

});